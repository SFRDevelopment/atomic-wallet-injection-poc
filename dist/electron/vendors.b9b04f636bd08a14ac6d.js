(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [226],
  {
    2726: function (t, e, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = n(r(230)),
        i = n(r(8388)),
        s = n(r(794)),
        a = r(805),
        c = l(r(8)),
        u = n(r(158)),
        f = n(r(382));
      function l(t, e) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (l = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var o,
            i,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((o = e ? n : r)) {
            if (o.has(t)) return o.get(t);
            o.set(t, s);
          }
          for (const r in t)
            "default" !== r &&
              {}.hasOwnProperty.call(t, r) &&
              ((i =
                (o = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, r)) &&
              (i.get || i.set)
                ? o(s, r, i)
                : (s[r] = t[r]));
          return s;
        })(t, e);
      }
      function h(t, e, r) {
        (d(t, e), e.set(t, r));
      }
      function d(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function p(t, e) {
        return t.get(v(t, e));
      }
      function y(t, e, r) {
        return (t.set(v(t, e), r), r);
      }
      function v(t, e, r) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : r;
        throw new TypeError("Private element is not present on this object");
      }
      const w = new s.default(() =>
          Promise.resolve().then(r.t.bind(null, 6256, 7)),
        ),
        b = "Sui",
        g = "m/44'/784'/0'/0'/0'",
        m = 9,
        E = 86988,
        B = "0x2::sui::SUI";
      var A = new WeakMap();
      class SUICoin extends (0, u.default)((0, f.default)(o.default)) {
        constructor(t) {
          const e = { ...t, name: b, decimal: m };
          (super(e),
            h(this, A, void 0),
            (this.derivation = g),
            this.setExplorersModules([i.default]),
            this.loadExplorers(e));
        }
        async loadWallet(t, e) {
          const { Ed25519Keypair: r } = await w.get();
          return (
            (this.keypair = r.deriveKeypair(e)),
            (this.address = this.keypair.getPublicKey().toSuiAddress()),
            y(A, this, this.keypair.export().privateKey),
            { id: this.id, privateKey: p(A, this), address: this.address }
          );
        }
        async setPrivateKey(t, e) {
          const { fromExportedKeypair: r } = await w.get();
          ((this.keypair = r({ schema: "ED25519", privateKey: t })),
            (this.address = this.keypair.getPublicKey().toSuiAddress()),
            y(A, this, t));
        }
        async getInfo(t) {
          for (const r of Object.values(this.tokens)) {
            const t = await this.getTokenInfo({ tokenType: r.tokenType });
            this.tokens[r.contract].balance = t;
          }
          const e = await this.getProvider("balance").getBalance(this.address);
          return (e && (this.balance = e), { balance: this.balance });
        }
        async getTokenInfo(t) {
          let { tokenType: e } = t;
          return this.getProvider("balance").getBalance(this.address, !0, e);
        }
        _getTransactions(t) {
          return this.getProvider("history").getTransactions({ ...t });
        }
        getTransactions(t) {
          return this._getTransactions(t);
        }
        getTokenTransactions(t) {
          return this._getTransactions(t);
        }
        async validateAddress(t) {
          const { isValidSuiAddress: e } = await w.get();
          return e(t);
        }
        async getFee(t) {
          let {
            amount: e = 1,
            address: r,
            isSendAll: n = !1,
            contract: o,
          } = void 0 === t ? {} : t;
          try {
            var i, s;
            const t = await this.createTransaction({
              address: r || this.address,
              amount: e,
              isSendAll: n,
              tokenType:
                null === (i = this.tokens) ||
                void 0 === i ||
                null === (s = i[o]) ||
                void 0 === s
                  ? void 0
                  : s.tokenType,
            });
            return this.getProvider("fee").calculateFee(t);
          } catch (a) {
            return (
              console.warn("[SUI] getFee: could not estimate fee:", a),
              E
            );
          }
        }
        async createTransaction(t) {
          let { address: e, isSendAll: r = !1, tokenType: n, amount: o } = t;
          const { TransactionBlock: i } = await w.get(),
            s = new i(),
            a = await this.getProvider("balance").getAllCoinObjects(
              this.address,
              B,
            ),
            c = {
              objectId: a[0].coinObjectId,
              digest: a[0].digest,
              version: a[0].version,
            };
          s.setGasPayment([c]);
          const u = await this.getProvider("balance").getBalance(
            this.address,
            !0,
            n,
          );
          let f = s.gas;
          if (n) {
            const t = await this.getProvider("balance").getAllCoinObjects(
                this.address,
                n,
              ),
              e = s.object(t[0].coinObjectId);
            if (t.length > 1) {
              t.splice(0, 1);
              const r = t.map((t) => s.object(t.coinObjectId)),
                [n] = s.mergeCoins(e, r);
              f = n;
            }
            f = e;
          }
          if (r || u === o) s.transferObjects([f], s.pure(e));
          else {
            const [t] = s.splitCoins(f, [s.pure(o)]);
            s.transferObjects([t], s.pure(e));
          }
          return this.getProvider("signer").sign(this.keypair, s);
        }
        createTokenTransaction(t) {
          let { address: e, amount: r, isSendAll: n = !1, tokenType: o } = t;
          return this.createTransaction({
            address: e,
            amount: r,
            isSendAll: n,
            tokenType: o,
          });
        }
        async sendTransaction(t) {
          const e = await this.getProvider("send").send(t);
          return { txid: e.digest };
        }
        createToken(t) {
          return new a.SUIToken({ parent: this, ...t });
        }
        async getTokenList() {
          return c.default.get(c.ConfigKey.SuiTokens);
        }
        getTokenObject(t, e) {
          return {
            name: t.name,
            ticker: t.ticker,
            decimal: Number(t.decimal) || 0,
            contract: t.contract.toLowerCase(),
            parentTicker: this.id,
            uniqueField: t.contract.toLowerCase(),
            visibility: !1 !== t.visibility,
            confirmed: t.confirmed,
            config: t.config,
            source: t.source || e,
            notify: Boolean(t.notify),
            tokenTypePostfix: t.tokenTypePostfix,
          };
        }
      }
      e.default = SUICoin;
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
          o = new Uint8Array(16),
          i = new Uint8Array(32);
        i[0] = 9;
        var s = e(),
          a = e([1]),
          c = e([56129, 1]),
          u = e([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          f = e([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ]),
          l = e([
            54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412,
            64982, 57905, 49316, 21502, 52590, 14035, 8553,
          ]),
          h = e([
            26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
            26214, 26214, 26214, 26214, 26214, 26214, 26214,
          ]),
          d = e([
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
        function y(t, e, r, n, o) {
          var i,
            s = 0;
          for (i = 0; i < o; i++) s |= t[e + i] ^ r[n + i];
          return (1 & ((s - 1) >>> 8)) - 1;
        }
        function v(t, e, r, n) {
          return y(t, e, r, n, 16);
        }
        function w(t, e, r, n) {
          return y(t, e, r, n, 32);
        }
        function b(t, e, r, n) {
          for (
            var o,
              i =
                (255 & n[0]) |
                ((255 & n[1]) << 8) |
                ((255 & n[2]) << 16) |
                ((255 & n[3]) << 24),
              s =
                (255 & r[0]) |
                ((255 & r[1]) << 8) |
                ((255 & r[2]) << 16) |
                ((255 & r[3]) << 24),
              a =
                (255 & r[4]) |
                ((255 & r[5]) << 8) |
                ((255 & r[6]) << 16) |
                ((255 & r[7]) << 24),
              c =
                (255 & r[8]) |
                ((255 & r[9]) << 8) |
                ((255 & r[10]) << 16) |
                ((255 & r[11]) << 24),
              u =
                (255 & r[12]) |
                ((255 & r[13]) << 8) |
                ((255 & r[14]) << 16) |
                ((255 & r[15]) << 24),
              f =
                (255 & n[4]) |
                ((255 & n[5]) << 8) |
                ((255 & n[6]) << 16) |
                ((255 & n[7]) << 24),
              l =
                (255 & e[0]) |
                ((255 & e[1]) << 8) |
                ((255 & e[2]) << 16) |
                ((255 & e[3]) << 24),
              h =
                (255 & e[4]) |
                ((255 & e[5]) << 8) |
                ((255 & e[6]) << 16) |
                ((255 & e[7]) << 24),
              d =
                (255 & e[8]) |
                ((255 & e[9]) << 8) |
                ((255 & e[10]) << 16) |
                ((255 & e[11]) << 24),
              p =
                (255 & e[12]) |
                ((255 & e[13]) << 8) |
                ((255 & e[14]) << 16) |
                ((255 & e[15]) << 24),
              y =
                (255 & n[8]) |
                ((255 & n[9]) << 8) |
                ((255 & n[10]) << 16) |
                ((255 & n[11]) << 24),
              v =
                (255 & r[16]) |
                ((255 & r[17]) << 8) |
                ((255 & r[18]) << 16) |
                ((255 & r[19]) << 24),
              w =
                (255 & r[20]) |
                ((255 & r[21]) << 8) |
                ((255 & r[22]) << 16) |
                ((255 & r[23]) << 24),
              b =
                (255 & r[24]) |
                ((255 & r[25]) << 8) |
                ((255 & r[26]) << 16) |
                ((255 & r[27]) << 24),
              g =
                (255 & r[28]) |
                ((255 & r[29]) << 8) |
                ((255 & r[30]) << 16) |
                ((255 & r[31]) << 24),
              m =
                (255 & n[12]) |
                ((255 & n[13]) << 8) |
                ((255 & n[14]) << 16) |
                ((255 & n[15]) << 24),
              E = i,
              B = s,
              A = a,
              x = c,
              S = u,
              T = f,
              O = l,
              I = h,
              _ = d,
              U = p,
              P = y,
              k = v,
              R = w,
              M = b,
              L = g,
              j = m,
              C = 0;
            C < 20;
            C += 2
          )
            ((o = (E + R) | 0),
              (S ^= (o << 7) | (o >>> 25)),
              (o = (S + E) | 0),
              (_ ^= (o << 9) | (o >>> 23)),
              (o = (_ + S) | 0),
              (R ^= (o << 13) | (o >>> 19)),
              (o = (R + _) | 0),
              (E ^= (o << 18) | (o >>> 14)),
              (o = (T + B) | 0),
              (U ^= (o << 7) | (o >>> 25)),
              (o = (U + T) | 0),
              (M ^= (o << 9) | (o >>> 23)),
              (o = (M + U) | 0),
              (B ^= (o << 13) | (o >>> 19)),
              (o = (B + M) | 0),
              (T ^= (o << 18) | (o >>> 14)),
              (o = (P + O) | 0),
              (L ^= (o << 7) | (o >>> 25)),
              (o = (L + P) | 0),
              (A ^= (o << 9) | (o >>> 23)),
              (o = (A + L) | 0),
              (O ^= (o << 13) | (o >>> 19)),
              (o = (O + A) | 0),
              (P ^= (o << 18) | (o >>> 14)),
              (o = (j + k) | 0),
              (x ^= (o << 7) | (o >>> 25)),
              (o = (x + j) | 0),
              (I ^= (o << 9) | (o >>> 23)),
              (o = (I + x) | 0),
              (k ^= (o << 13) | (o >>> 19)),
              (o = (k + I) | 0),
              (j ^= (o << 18) | (o >>> 14)),
              (o = (E + x) | 0),
              (B ^= (o << 7) | (o >>> 25)),
              (o = (B + E) | 0),
              (A ^= (o << 9) | (o >>> 23)),
              (o = (A + B) | 0),
              (x ^= (o << 13) | (o >>> 19)),
              (o = (x + A) | 0),
              (E ^= (o << 18) | (o >>> 14)),
              (o = (T + S) | 0),
              (O ^= (o << 7) | (o >>> 25)),
              (o = (O + T) | 0),
              (I ^= (o << 9) | (o >>> 23)),
              (o = (I + O) | 0),
              (S ^= (o << 13) | (o >>> 19)),
              (o = (S + I) | 0),
              (T ^= (o << 18) | (o >>> 14)),
              (o = (P + U) | 0),
              (k ^= (o << 7) | (o >>> 25)),
              (o = (k + P) | 0),
              (_ ^= (o << 9) | (o >>> 23)),
              (o = (_ + k) | 0),
              (U ^= (o << 13) | (o >>> 19)),
              (o = (U + _) | 0),
              (P ^= (o << 18) | (o >>> 14)),
              (o = (j + L) | 0),
              (R ^= (o << 7) | (o >>> 25)),
              (o = (R + j) | 0),
              (M ^= (o << 9) | (o >>> 23)),
              (o = (M + R) | 0),
              (L ^= (o << 13) | (o >>> 19)),
              (o = (L + M) | 0),
              (j ^= (o << 18) | (o >>> 14)));
          ((E = (E + i) | 0),
            (B = (B + s) | 0),
            (A = (A + a) | 0),
            (x = (x + c) | 0),
            (S = (S + u) | 0),
            (T = (T + f) | 0),
            (O = (O + l) | 0),
            (I = (I + h) | 0),
            (_ = (_ + d) | 0),
            (U = (U + p) | 0),
            (P = (P + y) | 0),
            (k = (k + v) | 0),
            (R = (R + w) | 0),
            (M = (M + b) | 0),
            (L = (L + g) | 0),
            (j = (j + m) | 0),
            (t[0] = (E >>> 0) & 255),
            (t[1] = (E >>> 8) & 255),
            (t[2] = (E >>> 16) & 255),
            (t[3] = (E >>> 24) & 255),
            (t[4] = (B >>> 0) & 255),
            (t[5] = (B >>> 8) & 255),
            (t[6] = (B >>> 16) & 255),
            (t[7] = (B >>> 24) & 255),
            (t[8] = (A >>> 0) & 255),
            (t[9] = (A >>> 8) & 255),
            (t[10] = (A >>> 16) & 255),
            (t[11] = (A >>> 24) & 255),
            (t[12] = (x >>> 0) & 255),
            (t[13] = (x >>> 8) & 255),
            (t[14] = (x >>> 16) & 255),
            (t[15] = (x >>> 24) & 255),
            (t[16] = (S >>> 0) & 255),
            (t[17] = (S >>> 8) & 255),
            (t[18] = (S >>> 16) & 255),
            (t[19] = (S >>> 24) & 255),
            (t[20] = (T >>> 0) & 255),
            (t[21] = (T >>> 8) & 255),
            (t[22] = (T >>> 16) & 255),
            (t[23] = (T >>> 24) & 255),
            (t[24] = (O >>> 0) & 255),
            (t[25] = (O >>> 8) & 255),
            (t[26] = (O >>> 16) & 255),
            (t[27] = (O >>> 24) & 255),
            (t[28] = (I >>> 0) & 255),
            (t[29] = (I >>> 8) & 255),
            (t[30] = (I >>> 16) & 255),
            (t[31] = (I >>> 24) & 255),
            (t[32] = (_ >>> 0) & 255),
            (t[33] = (_ >>> 8) & 255),
            (t[34] = (_ >>> 16) & 255),
            (t[35] = (_ >>> 24) & 255),
            (t[36] = (U >>> 0) & 255),
            (t[37] = (U >>> 8) & 255),
            (t[38] = (U >>> 16) & 255),
            (t[39] = (U >>> 24) & 255),
            (t[40] = (P >>> 0) & 255),
            (t[41] = (P >>> 8) & 255),
            (t[42] = (P >>> 16) & 255),
            (t[43] = (P >>> 24) & 255),
            (t[44] = (k >>> 0) & 255),
            (t[45] = (k >>> 8) & 255),
            (t[46] = (k >>> 16) & 255),
            (t[47] = (k >>> 24) & 255),
            (t[48] = (R >>> 0) & 255),
            (t[49] = (R >>> 8) & 255),
            (t[50] = (R >>> 16) & 255),
            (t[51] = (R >>> 24) & 255),
            (t[52] = (M >>> 0) & 255),
            (t[53] = (M >>> 8) & 255),
            (t[54] = (M >>> 16) & 255),
            (t[55] = (M >>> 24) & 255),
            (t[56] = (L >>> 0) & 255),
            (t[57] = (L >>> 8) & 255),
            (t[58] = (L >>> 16) & 255),
            (t[59] = (L >>> 24) & 255),
            (t[60] = (j >>> 0) & 255),
            (t[61] = (j >>> 8) & 255),
            (t[62] = (j >>> 16) & 255),
            (t[63] = (j >>> 24) & 255));
        }
        function g(t, e, r, n) {
          for (
            var o,
              i =
                (255 & n[0]) |
                ((255 & n[1]) << 8) |
                ((255 & n[2]) << 16) |
                ((255 & n[3]) << 24),
              s =
                (255 & r[0]) |
                ((255 & r[1]) << 8) |
                ((255 & r[2]) << 16) |
                ((255 & r[3]) << 24),
              a =
                (255 & r[4]) |
                ((255 & r[5]) << 8) |
                ((255 & r[6]) << 16) |
                ((255 & r[7]) << 24),
              c =
                (255 & r[8]) |
                ((255 & r[9]) << 8) |
                ((255 & r[10]) << 16) |
                ((255 & r[11]) << 24),
              u =
                (255 & r[12]) |
                ((255 & r[13]) << 8) |
                ((255 & r[14]) << 16) |
                ((255 & r[15]) << 24),
              f =
                (255 & n[4]) |
                ((255 & n[5]) << 8) |
                ((255 & n[6]) << 16) |
                ((255 & n[7]) << 24),
              l =
                (255 & e[0]) |
                ((255 & e[1]) << 8) |
                ((255 & e[2]) << 16) |
                ((255 & e[3]) << 24),
              h =
                (255 & e[4]) |
                ((255 & e[5]) << 8) |
                ((255 & e[6]) << 16) |
                ((255 & e[7]) << 24),
              d =
                (255 & e[8]) |
                ((255 & e[9]) << 8) |
                ((255 & e[10]) << 16) |
                ((255 & e[11]) << 24),
              p =
                (255 & e[12]) |
                ((255 & e[13]) << 8) |
                ((255 & e[14]) << 16) |
                ((255 & e[15]) << 24),
              y =
                (255 & n[8]) |
                ((255 & n[9]) << 8) |
                ((255 & n[10]) << 16) |
                ((255 & n[11]) << 24),
              v =
                (255 & r[16]) |
                ((255 & r[17]) << 8) |
                ((255 & r[18]) << 16) |
                ((255 & r[19]) << 24),
              w =
                (255 & r[20]) |
                ((255 & r[21]) << 8) |
                ((255 & r[22]) << 16) |
                ((255 & r[23]) << 24),
              b =
                (255 & r[24]) |
                ((255 & r[25]) << 8) |
                ((255 & r[26]) << 16) |
                ((255 & r[27]) << 24),
              g =
                (255 & r[28]) |
                ((255 & r[29]) << 8) |
                ((255 & r[30]) << 16) |
                ((255 & r[31]) << 24),
              m =
                (255 & n[12]) |
                ((255 & n[13]) << 8) |
                ((255 & n[14]) << 16) |
                ((255 & n[15]) << 24),
              E = i,
              B = s,
              A = a,
              x = c,
              S = u,
              T = f,
              O = l,
              I = h,
              _ = d,
              U = p,
              P = y,
              k = v,
              R = w,
              M = b,
              L = g,
              j = m,
              C = 0;
            C < 20;
            C += 2
          )
            ((o = (E + R) | 0),
              (S ^= (o << 7) | (o >>> 25)),
              (o = (S + E) | 0),
              (_ ^= (o << 9) | (o >>> 23)),
              (o = (_ + S) | 0),
              (R ^= (o << 13) | (o >>> 19)),
              (o = (R + _) | 0),
              (E ^= (o << 18) | (o >>> 14)),
              (o = (T + B) | 0),
              (U ^= (o << 7) | (o >>> 25)),
              (o = (U + T) | 0),
              (M ^= (o << 9) | (o >>> 23)),
              (o = (M + U) | 0),
              (B ^= (o << 13) | (o >>> 19)),
              (o = (B + M) | 0),
              (T ^= (o << 18) | (o >>> 14)),
              (o = (P + O) | 0),
              (L ^= (o << 7) | (o >>> 25)),
              (o = (L + P) | 0),
              (A ^= (o << 9) | (o >>> 23)),
              (o = (A + L) | 0),
              (O ^= (o << 13) | (o >>> 19)),
              (o = (O + A) | 0),
              (P ^= (o << 18) | (o >>> 14)),
              (o = (j + k) | 0),
              (x ^= (o << 7) | (o >>> 25)),
              (o = (x + j) | 0),
              (I ^= (o << 9) | (o >>> 23)),
              (o = (I + x) | 0),
              (k ^= (o << 13) | (o >>> 19)),
              (o = (k + I) | 0),
              (j ^= (o << 18) | (o >>> 14)),
              (o = (E + x) | 0),
              (B ^= (o << 7) | (o >>> 25)),
              (o = (B + E) | 0),
              (A ^= (o << 9) | (o >>> 23)),
              (o = (A + B) | 0),
              (x ^= (o << 13) | (o >>> 19)),
              (o = (x + A) | 0),
              (E ^= (o << 18) | (o >>> 14)),
              (o = (T + S) | 0),
              (O ^= (o << 7) | (o >>> 25)),
              (o = (O + T) | 0),
              (I ^= (o << 9) | (o >>> 23)),
              (o = (I + O) | 0),
              (S ^= (o << 13) | (o >>> 19)),
              (o = (S + I) | 0),
              (T ^= (o << 18) | (o >>> 14)),
              (o = (P + U) | 0),
              (k ^= (o << 7) | (o >>> 25)),
              (o = (k + P) | 0),
              (_ ^= (o << 9) | (o >>> 23)),
              (o = (_ + k) | 0),
              (U ^= (o << 13) | (o >>> 19)),
              (o = (U + _) | 0),
              (P ^= (o << 18) | (o >>> 14)),
              (o = (j + L) | 0),
              (R ^= (o << 7) | (o >>> 25)),
              (o = (R + j) | 0),
              (M ^= (o << 9) | (o >>> 23)),
              (o = (M + R) | 0),
              (L ^= (o << 13) | (o >>> 19)),
              (o = (L + M) | 0),
              (j ^= (o << 18) | (o >>> 14)));
          ((t[0] = (E >>> 0) & 255),
            (t[1] = (E >>> 8) & 255),
            (t[2] = (E >>> 16) & 255),
            (t[3] = (E >>> 24) & 255),
            (t[4] = (T >>> 0) & 255),
            (t[5] = (T >>> 8) & 255),
            (t[6] = (T >>> 16) & 255),
            (t[7] = (T >>> 24) & 255),
            (t[8] = (P >>> 0) & 255),
            (t[9] = (P >>> 8) & 255),
            (t[10] = (P >>> 16) & 255),
            (t[11] = (P >>> 24) & 255),
            (t[12] = (j >>> 0) & 255),
            (t[13] = (j >>> 8) & 255),
            (t[14] = (j >>> 16) & 255),
            (t[15] = (j >>> 24) & 255),
            (t[16] = (O >>> 0) & 255),
            (t[17] = (O >>> 8) & 255),
            (t[18] = (O >>> 16) & 255),
            (t[19] = (O >>> 24) & 255),
            (t[20] = (I >>> 0) & 255),
            (t[21] = (I >>> 8) & 255),
            (t[22] = (I >>> 16) & 255),
            (t[23] = (I >>> 24) & 255),
            (t[24] = (_ >>> 0) & 255),
            (t[25] = (_ >>> 8) & 255),
            (t[26] = (_ >>> 16) & 255),
            (t[27] = (_ >>> 24) & 255),
            (t[28] = (U >>> 0) & 255),
            (t[29] = (U >>> 8) & 255),
            (t[30] = (U >>> 16) & 255),
            (t[31] = (U >>> 24) & 255));
        }
        function m(t, e, r, n) {
          b(t, e, r, n);
        }
        function E(t, e, r, n) {
          g(t, e, r, n);
        }
        var B = new Uint8Array([
          101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32,
          107,
        ]);
        function A(t, e, r, n, o, i, s) {
          var a,
            c,
            u = new Uint8Array(16),
            f = new Uint8Array(64);
          for (c = 0; c < 16; c++) u[c] = 0;
          for (c = 0; c < 8; c++) u[c] = i[c];
          while (o >= 64) {
            for (m(f, u, s, B), c = 0; c < 64; c++) t[e + c] = r[n + c] ^ f[c];
            for (a = 1, c = 8; c < 16; c++)
              ((a = (a + (255 & u[c])) | 0), (u[c] = 255 & a), (a >>>= 8));
            ((o -= 64), (e += 64), (n += 64));
          }
          if (o > 0)
            for (m(f, u, s, B), c = 0; c < o; c++) t[e + c] = r[n + c] ^ f[c];
          return 0;
        }
        function x(t, e, r, n, o) {
          var i,
            s,
            a = new Uint8Array(16),
            c = new Uint8Array(64);
          for (s = 0; s < 16; s++) a[s] = 0;
          for (s = 0; s < 8; s++) a[s] = n[s];
          while (r >= 64) {
            for (m(c, a, o, B), s = 0; s < 64; s++) t[e + s] = c[s];
            for (i = 1, s = 8; s < 16; s++)
              ((i = (i + (255 & a[s])) | 0), (a[s] = 255 & i), (i >>>= 8));
            ((r -= 64), (e += 64));
          }
          if (r > 0) for (m(c, a, o, B), s = 0; s < r; s++) t[e + s] = c[s];
          return 0;
        }
        function S(t, e, r, n, o) {
          var i = new Uint8Array(32);
          E(i, n, o, B);
          for (var s = new Uint8Array(8), a = 0; a < 8; a++) s[a] = n[a + 16];
          return x(t, e, r, s, i);
        }
        function T(t, e, r, n, o, i, s) {
          var a = new Uint8Array(32);
          E(a, i, s, B);
          for (var c = new Uint8Array(8), u = 0; u < 8; u++) c[u] = i[u + 16];
          return A(t, e, r, n, o, c, a);
        }
        var O = function (t) {
          var e, r, n, o, i, s, a, c;
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
            (o = (255 & t[6]) | ((255 & t[7]) << 8)),
            (this.r[3] = 8191 & ((n >>> 7) | (o << 9))),
            (i = (255 & t[8]) | ((255 & t[9]) << 8)),
            (this.r[4] = 255 & ((o >>> 4) | (i << 12))),
            (this.r[5] = (i >>> 1) & 8190),
            (s = (255 & t[10]) | ((255 & t[11]) << 8)),
            (this.r[6] = 8191 & ((i >>> 14) | (s << 2))),
            (a = (255 & t[12]) | ((255 & t[13]) << 8)),
            (this.r[7] = 8065 & ((s >>> 11) | (a << 5))),
            (c = (255 & t[14]) | ((255 & t[15]) << 8)),
            (this.r[8] = 8191 & ((a >>> 8) | (c << 8))),
            (this.r[9] = (c >>> 5) & 127),
            (this.pad[0] = (255 & t[16]) | ((255 & t[17]) << 8)),
            (this.pad[1] = (255 & t[18]) | ((255 & t[19]) << 8)),
            (this.pad[2] = (255 & t[20]) | ((255 & t[21]) << 8)),
            (this.pad[3] = (255 & t[22]) | ((255 & t[23]) << 8)),
            (this.pad[4] = (255 & t[24]) | ((255 & t[25]) << 8)),
            (this.pad[5] = (255 & t[26]) | ((255 & t[27]) << 8)),
            (this.pad[6] = (255 & t[28]) | ((255 & t[29]) << 8)),
            (this.pad[7] = (255 & t[30]) | ((255 & t[31]) << 8)));
        };
        function I(t, e, r, n, o, i) {
          var s = new O(i);
          return (s.update(r, n, o), s.finish(t, e), 0);
        }
        function _(t, e, r, n, o, i) {
          var s = new Uint8Array(16);
          return (I(s, 0, r, n, o, i), v(t, e, s, 0));
        }
        function U(t, e, r, n, o) {
          var i;
          if (r < 32) return -1;
          for (
            T(t, 0, e, 0, r, n, o), I(t, 16, t, 32, r - 32, t), i = 0;
            i < 16;
            i++
          )
            t[i] = 0;
          return 0;
        }
        function P(t, e, r, n, o) {
          var i,
            s = new Uint8Array(32);
          if (r < 32) return -1;
          if ((S(s, 0, 32, n, o), 0 !== _(e, 16, e, 32, r - 32, s))) return -1;
          for (T(t, 0, e, 0, r, n, o), i = 0; i < 32; i++) t[i] = 0;
          return 0;
        }
        function k(t, e) {
          var r;
          for (r = 0; r < 16; r++) t[r] = 0 | e[r];
        }
        function R(t) {
          var e,
            r,
            n = 1;
          for (e = 0; e < 16; e++)
            ((r = t[e] + n + 65535),
              (n = Math.floor(r / 65536)),
              (t[e] = r - 65536 * n));
          t[0] += n - 1 + 37 * (n - 1);
        }
        function M(t, e, r) {
          for (var n, o = ~(r - 1), i = 0; i < 16; i++)
            ((n = o & (t[i] ^ e[i])), (t[i] ^= n), (e[i] ^= n));
        }
        function L(t, r) {
          var n,
            o,
            i,
            s = e(),
            a = e();
          for (n = 0; n < 16; n++) a[n] = r[n];
          for (R(a), R(a), R(a), o = 0; o < 2; o++) {
            for (s[0] = a[0] - 65517, n = 1; n < 15; n++)
              ((s[n] = a[n] - 65535 - ((s[n - 1] >> 16) & 1)),
                (s[n - 1] &= 65535));
            ((s[15] = a[15] - 32767 - ((s[14] >> 16) & 1)),
              (i = (s[15] >> 16) & 1),
              (s[14] &= 65535),
              M(a, s, 1 - i));
          }
          for (n = 0; n < 16; n++)
            ((t[2 * n] = 255 & a[n]), (t[2 * n + 1] = a[n] >> 8));
        }
        function j(t, e) {
          var r = new Uint8Array(32),
            n = new Uint8Array(32);
          return (L(r, t), L(n, e), w(r, 0, n, 0));
        }
        function C(t) {
          var e = new Uint8Array(32);
          return (L(e, t), 1 & e[0]);
        }
        function N(t, e) {
          var r;
          for (r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
          t[15] &= 32767;
        }
        function D(t, e, r) {
          for (var n = 0; n < 16; n++) t[n] = e[n] + r[n];
        }
        function F(t, e, r) {
          for (var n = 0; n < 16; n++) t[n] = e[n] - r[n];
        }
        function K(t, e, r) {
          var n,
            o,
            i = 0,
            s = 0,
            a = 0,
            c = 0,
            u = 0,
            f = 0,
            l = 0,
            h = 0,
            d = 0,
            p = 0,
            y = 0,
            v = 0,
            w = 0,
            b = 0,
            g = 0,
            m = 0,
            E = 0,
            B = 0,
            A = 0,
            x = 0,
            S = 0,
            T = 0,
            O = 0,
            I = 0,
            _ = 0,
            U = 0,
            P = 0,
            k = 0,
            R = 0,
            M = 0,
            L = 0,
            j = r[0],
            C = r[1],
            N = r[2],
            D = r[3],
            F = r[4],
            K = r[5],
            q = r[6],
            H = r[7],
            V = r[8],
            z = r[9],
            Z = r[10],
            G = r[11],
            Y = r[12],
            W = r[13],
            $ = r[14],
            J = r[15];
          ((n = e[0]),
            (i += n * j),
            (s += n * C),
            (a += n * N),
            (c += n * D),
            (u += n * F),
            (f += n * K),
            (l += n * q),
            (h += n * H),
            (d += n * V),
            (p += n * z),
            (y += n * Z),
            (v += n * G),
            (w += n * Y),
            (b += n * W),
            (g += n * $),
            (m += n * J),
            (n = e[1]),
            (s += n * j),
            (a += n * C),
            (c += n * N),
            (u += n * D),
            (f += n * F),
            (l += n * K),
            (h += n * q),
            (d += n * H),
            (p += n * V),
            (y += n * z),
            (v += n * Z),
            (w += n * G),
            (b += n * Y),
            (g += n * W),
            (m += n * $),
            (E += n * J),
            (n = e[2]),
            (a += n * j),
            (c += n * C),
            (u += n * N),
            (f += n * D),
            (l += n * F),
            (h += n * K),
            (d += n * q),
            (p += n * H),
            (y += n * V),
            (v += n * z),
            (w += n * Z),
            (b += n * G),
            (g += n * Y),
            (m += n * W),
            (E += n * $),
            (B += n * J),
            (n = e[3]),
            (c += n * j),
            (u += n * C),
            (f += n * N),
            (l += n * D),
            (h += n * F),
            (d += n * K),
            (p += n * q),
            (y += n * H),
            (v += n * V),
            (w += n * z),
            (b += n * Z),
            (g += n * G),
            (m += n * Y),
            (E += n * W),
            (B += n * $),
            (A += n * J),
            (n = e[4]),
            (u += n * j),
            (f += n * C),
            (l += n * N),
            (h += n * D),
            (d += n * F),
            (p += n * K),
            (y += n * q),
            (v += n * H),
            (w += n * V),
            (b += n * z),
            (g += n * Z),
            (m += n * G),
            (E += n * Y),
            (B += n * W),
            (A += n * $),
            (x += n * J),
            (n = e[5]),
            (f += n * j),
            (l += n * C),
            (h += n * N),
            (d += n * D),
            (p += n * F),
            (y += n * K),
            (v += n * q),
            (w += n * H),
            (b += n * V),
            (g += n * z),
            (m += n * Z),
            (E += n * G),
            (B += n * Y),
            (A += n * W),
            (x += n * $),
            (S += n * J),
            (n = e[6]),
            (l += n * j),
            (h += n * C),
            (d += n * N),
            (p += n * D),
            (y += n * F),
            (v += n * K),
            (w += n * q),
            (b += n * H),
            (g += n * V),
            (m += n * z),
            (E += n * Z),
            (B += n * G),
            (A += n * Y),
            (x += n * W),
            (S += n * $),
            (T += n * J),
            (n = e[7]),
            (h += n * j),
            (d += n * C),
            (p += n * N),
            (y += n * D),
            (v += n * F),
            (w += n * K),
            (b += n * q),
            (g += n * H),
            (m += n * V),
            (E += n * z),
            (B += n * Z),
            (A += n * G),
            (x += n * Y),
            (S += n * W),
            (T += n * $),
            (O += n * J),
            (n = e[8]),
            (d += n * j),
            (p += n * C),
            (y += n * N),
            (v += n * D),
            (w += n * F),
            (b += n * K),
            (g += n * q),
            (m += n * H),
            (E += n * V),
            (B += n * z),
            (A += n * Z),
            (x += n * G),
            (S += n * Y),
            (T += n * W),
            (O += n * $),
            (I += n * J),
            (n = e[9]),
            (p += n * j),
            (y += n * C),
            (v += n * N),
            (w += n * D),
            (b += n * F),
            (g += n * K),
            (m += n * q),
            (E += n * H),
            (B += n * V),
            (A += n * z),
            (x += n * Z),
            (S += n * G),
            (T += n * Y),
            (O += n * W),
            (I += n * $),
            (_ += n * J),
            (n = e[10]),
            (y += n * j),
            (v += n * C),
            (w += n * N),
            (b += n * D),
            (g += n * F),
            (m += n * K),
            (E += n * q),
            (B += n * H),
            (A += n * V),
            (x += n * z),
            (S += n * Z),
            (T += n * G),
            (O += n * Y),
            (I += n * W),
            (_ += n * $),
            (U += n * J),
            (n = e[11]),
            (v += n * j),
            (w += n * C),
            (b += n * N),
            (g += n * D),
            (m += n * F),
            (E += n * K),
            (B += n * q),
            (A += n * H),
            (x += n * V),
            (S += n * z),
            (T += n * Z),
            (O += n * G),
            (I += n * Y),
            (_ += n * W),
            (U += n * $),
            (P += n * J),
            (n = e[12]),
            (w += n * j),
            (b += n * C),
            (g += n * N),
            (m += n * D),
            (E += n * F),
            (B += n * K),
            (A += n * q),
            (x += n * H),
            (S += n * V),
            (T += n * z),
            (O += n * Z),
            (I += n * G),
            (_ += n * Y),
            (U += n * W),
            (P += n * $),
            (k += n * J),
            (n = e[13]),
            (b += n * j),
            (g += n * C),
            (m += n * N),
            (E += n * D),
            (B += n * F),
            (A += n * K),
            (x += n * q),
            (S += n * H),
            (T += n * V),
            (O += n * z),
            (I += n * Z),
            (_ += n * G),
            (U += n * Y),
            (P += n * W),
            (k += n * $),
            (R += n * J),
            (n = e[14]),
            (g += n * j),
            (m += n * C),
            (E += n * N),
            (B += n * D),
            (A += n * F),
            (x += n * K),
            (S += n * q),
            (T += n * H),
            (O += n * V),
            (I += n * z),
            (_ += n * Z),
            (U += n * G),
            (P += n * Y),
            (k += n * W),
            (R += n * $),
            (M += n * J),
            (n = e[15]),
            (m += n * j),
            (E += n * C),
            (B += n * N),
            (A += n * D),
            (x += n * F),
            (S += n * K),
            (T += n * q),
            (O += n * H),
            (I += n * V),
            (_ += n * z),
            (U += n * Z),
            (P += n * G),
            (k += n * Y),
            (R += n * W),
            (M += n * $),
            (L += n * J),
            (i += 38 * E),
            (s += 38 * B),
            (a += 38 * A),
            (c += 38 * x),
            (u += 38 * S),
            (f += 38 * T),
            (l += 38 * O),
            (h += 38 * I),
            (d += 38 * _),
            (p += 38 * U),
            (y += 38 * P),
            (v += 38 * k),
            (w += 38 * R),
            (b += 38 * M),
            (g += 38 * L),
            (o = 1),
            (n = i + o + 65535),
            (o = Math.floor(n / 65536)),
            (i = n - 65536 * o),
            (n = s + o + 65535),
            (o = Math.floor(n / 65536)),
            (s = n - 65536 * o),
            (n = a + o + 65535),
            (o = Math.floor(n / 65536)),
            (a = n - 65536 * o),
            (n = c + o + 65535),
            (o = Math.floor(n / 65536)),
            (c = n - 65536 * o),
            (n = u + o + 65535),
            (o = Math.floor(n / 65536)),
            (u = n - 65536 * o),
            (n = f + o + 65535),
            (o = Math.floor(n / 65536)),
            (f = n - 65536 * o),
            (n = l + o + 65535),
            (o = Math.floor(n / 65536)),
            (l = n - 65536 * o),
            (n = h + o + 65535),
            (o = Math.floor(n / 65536)),
            (h = n - 65536 * o),
            (n = d + o + 65535),
            (o = Math.floor(n / 65536)),
            (d = n - 65536 * o),
            (n = p + o + 65535),
            (o = Math.floor(n / 65536)),
            (p = n - 65536 * o),
            (n = y + o + 65535),
            (o = Math.floor(n / 65536)),
            (y = n - 65536 * o),
            (n = v + o + 65535),
            (o = Math.floor(n / 65536)),
            (v = n - 65536 * o),
            (n = w + o + 65535),
            (o = Math.floor(n / 65536)),
            (w = n - 65536 * o),
            (n = b + o + 65535),
            (o = Math.floor(n / 65536)),
            (b = n - 65536 * o),
            (n = g + o + 65535),
            (o = Math.floor(n / 65536)),
            (g = n - 65536 * o),
            (n = m + o + 65535),
            (o = Math.floor(n / 65536)),
            (m = n - 65536 * o),
            (i += o - 1 + 37 * (o - 1)),
            (o = 1),
            (n = i + o + 65535),
            (o = Math.floor(n / 65536)),
            (i = n - 65536 * o),
            (n = s + o + 65535),
            (o = Math.floor(n / 65536)),
            (s = n - 65536 * o),
            (n = a + o + 65535),
            (o = Math.floor(n / 65536)),
            (a = n - 65536 * o),
            (n = c + o + 65535),
            (o = Math.floor(n / 65536)),
            (c = n - 65536 * o),
            (n = u + o + 65535),
            (o = Math.floor(n / 65536)),
            (u = n - 65536 * o),
            (n = f + o + 65535),
            (o = Math.floor(n / 65536)),
            (f = n - 65536 * o),
            (n = l + o + 65535),
            (o = Math.floor(n / 65536)),
            (l = n - 65536 * o),
            (n = h + o + 65535),
            (o = Math.floor(n / 65536)),
            (h = n - 65536 * o),
            (n = d + o + 65535),
            (o = Math.floor(n / 65536)),
            (d = n - 65536 * o),
            (n = p + o + 65535),
            (o = Math.floor(n / 65536)),
            (p = n - 65536 * o),
            (n = y + o + 65535),
            (o = Math.floor(n / 65536)),
            (y = n - 65536 * o),
            (n = v + o + 65535),
            (o = Math.floor(n / 65536)),
            (v = n - 65536 * o),
            (n = w + o + 65535),
            (o = Math.floor(n / 65536)),
            (w = n - 65536 * o),
            (n = b + o + 65535),
            (o = Math.floor(n / 65536)),
            (b = n - 65536 * o),
            (n = g + o + 65535),
            (o = Math.floor(n / 65536)),
            (g = n - 65536 * o),
            (n = m + o + 65535),
            (o = Math.floor(n / 65536)),
            (m = n - 65536 * o),
            (i += o - 1 + 37 * (o - 1)),
            (t[0] = i),
            (t[1] = s),
            (t[2] = a),
            (t[3] = c),
            (t[4] = u),
            (t[5] = f),
            (t[6] = l),
            (t[7] = h),
            (t[8] = d),
            (t[9] = p),
            (t[10] = y),
            (t[11] = v),
            (t[12] = w),
            (t[13] = b),
            (t[14] = g),
            (t[15] = m));
        }
        function q(t, e) {
          K(t, e, e);
        }
        function H(t, r) {
          var n,
            o = e();
          for (n = 0; n < 16; n++) o[n] = r[n];
          for (n = 253; n >= 0; n--)
            (q(o, o), 2 !== n && 4 !== n && K(o, o, r));
          for (n = 0; n < 16; n++) t[n] = o[n];
        }
        function V(t, r) {
          var n,
            o = e();
          for (n = 0; n < 16; n++) o[n] = r[n];
          for (n = 250; n >= 0; n--) (q(o, o), 1 !== n && K(o, o, r));
          for (n = 0; n < 16; n++) t[n] = o[n];
        }
        function z(t, r, n) {
          var o,
            i,
            s = new Uint8Array(32),
            a = new Float64Array(80),
            u = e(),
            f = e(),
            l = e(),
            h = e(),
            d = e(),
            p = e();
          for (i = 0; i < 31; i++) s[i] = r[i];
          for (
            s[31] = (127 & r[31]) | 64, s[0] &= 248, N(a, n), i = 0;
            i < 16;
            i++
          )
            ((f[i] = a[i]), (h[i] = u[i] = l[i] = 0));
          for (u[0] = h[0] = 1, i = 254; i >= 0; --i)
            ((o = (s[i >>> 3] >>> (7 & i)) & 1),
              M(u, f, o),
              M(l, h, o),
              D(d, u, l),
              F(u, u, l),
              D(l, f, h),
              F(f, f, h),
              q(h, d),
              q(p, u),
              K(u, l, u),
              K(l, f, d),
              D(d, u, l),
              F(u, u, l),
              q(f, u),
              F(l, h, p),
              K(u, l, c),
              D(u, u, h),
              K(l, l, u),
              K(u, h, p),
              K(h, f, a),
              q(f, d),
              M(u, f, o),
              M(l, h, o));
          for (i = 0; i < 16; i++)
            ((a[i + 16] = u[i]),
              (a[i + 32] = l[i]),
              (a[i + 48] = f[i]),
              (a[i + 64] = h[i]));
          var y = a.subarray(32),
            v = a.subarray(16);
          return (H(y, y), K(v, v, y), L(t, v), 0);
        }
        function Z(t, e) {
          return z(t, e, i);
        }
        function G(t, e) {
          return (n(e, 32), Z(t, e));
        }
        function Y(t, e, r) {
          var n = new Uint8Array(32);
          return (z(n, r, e), E(t, o, n, B));
        }
        ((O.prototype.blocks = function (t, e, r) {
          var n,
            o,
            i,
            s,
            a,
            c,
            u,
            f,
            l,
            h,
            d,
            p,
            y,
            v,
            w,
            b,
            g,
            m,
            E,
            B = this.fin ? 0 : 2048,
            A = this.h[0],
            x = this.h[1],
            S = this.h[2],
            T = this.h[3],
            O = this.h[4],
            I = this.h[5],
            _ = this.h[6],
            U = this.h[7],
            P = this.h[8],
            k = this.h[9],
            R = this.r[0],
            M = this.r[1],
            L = this.r[2],
            j = this.r[3],
            C = this.r[4],
            N = this.r[5],
            D = this.r[6],
            F = this.r[7],
            K = this.r[8],
            q = this.r[9];
          while (r >= 16)
            ((n = (255 & t[e + 0]) | ((255 & t[e + 1]) << 8)),
              (A += 8191 & n),
              (o = (255 & t[e + 2]) | ((255 & t[e + 3]) << 8)),
              (x += 8191 & ((n >>> 13) | (o << 3))),
              (i = (255 & t[e + 4]) | ((255 & t[e + 5]) << 8)),
              (S += 8191 & ((o >>> 10) | (i << 6))),
              (s = (255 & t[e + 6]) | ((255 & t[e + 7]) << 8)),
              (T += 8191 & ((i >>> 7) | (s << 9))),
              (a = (255 & t[e + 8]) | ((255 & t[e + 9]) << 8)),
              (O += 8191 & ((s >>> 4) | (a << 12))),
              (I += (a >>> 1) & 8191),
              (c = (255 & t[e + 10]) | ((255 & t[e + 11]) << 8)),
              (_ += 8191 & ((a >>> 14) | (c << 2))),
              (u = (255 & t[e + 12]) | ((255 & t[e + 13]) << 8)),
              (U += 8191 & ((c >>> 11) | (u << 5))),
              (f = (255 & t[e + 14]) | ((255 & t[e + 15]) << 8)),
              (P += 8191 & ((u >>> 8) | (f << 8))),
              (k += (f >>> 5) | B),
              (l = 0),
              (h = l),
              (h += A * R),
              (h += x * (5 * q)),
              (h += S * (5 * K)),
              (h += T * (5 * F)),
              (h += O * (5 * D)),
              (l = h >>> 13),
              (h &= 8191),
              (h += I * (5 * N)),
              (h += _ * (5 * C)),
              (h += U * (5 * j)),
              (h += P * (5 * L)),
              (h += k * (5 * M)),
              (l += h >>> 13),
              (h &= 8191),
              (d = l),
              (d += A * M),
              (d += x * R),
              (d += S * (5 * q)),
              (d += T * (5 * K)),
              (d += O * (5 * F)),
              (l = d >>> 13),
              (d &= 8191),
              (d += I * (5 * D)),
              (d += _ * (5 * N)),
              (d += U * (5 * C)),
              (d += P * (5 * j)),
              (d += k * (5 * L)),
              (l += d >>> 13),
              (d &= 8191),
              (p = l),
              (p += A * L),
              (p += x * M),
              (p += S * R),
              (p += T * (5 * q)),
              (p += O * (5 * K)),
              (l = p >>> 13),
              (p &= 8191),
              (p += I * (5 * F)),
              (p += _ * (5 * D)),
              (p += U * (5 * N)),
              (p += P * (5 * C)),
              (p += k * (5 * j)),
              (l += p >>> 13),
              (p &= 8191),
              (y = l),
              (y += A * j),
              (y += x * L),
              (y += S * M),
              (y += T * R),
              (y += O * (5 * q)),
              (l = y >>> 13),
              (y &= 8191),
              (y += I * (5 * K)),
              (y += _ * (5 * F)),
              (y += U * (5 * D)),
              (y += P * (5 * N)),
              (y += k * (5 * C)),
              (l += y >>> 13),
              (y &= 8191),
              (v = l),
              (v += A * C),
              (v += x * j),
              (v += S * L),
              (v += T * M),
              (v += O * R),
              (l = v >>> 13),
              (v &= 8191),
              (v += I * (5 * q)),
              (v += _ * (5 * K)),
              (v += U * (5 * F)),
              (v += P * (5 * D)),
              (v += k * (5 * N)),
              (l += v >>> 13),
              (v &= 8191),
              (w = l),
              (w += A * N),
              (w += x * C),
              (w += S * j),
              (w += T * L),
              (w += O * M),
              (l = w >>> 13),
              (w &= 8191),
              (w += I * R),
              (w += _ * (5 * q)),
              (w += U * (5 * K)),
              (w += P * (5 * F)),
              (w += k * (5 * D)),
              (l += w >>> 13),
              (w &= 8191),
              (b = l),
              (b += A * D),
              (b += x * N),
              (b += S * C),
              (b += T * j),
              (b += O * L),
              (l = b >>> 13),
              (b &= 8191),
              (b += I * M),
              (b += _ * R),
              (b += U * (5 * q)),
              (b += P * (5 * K)),
              (b += k * (5 * F)),
              (l += b >>> 13),
              (b &= 8191),
              (g = l),
              (g += A * F),
              (g += x * D),
              (g += S * N),
              (g += T * C),
              (g += O * j),
              (l = g >>> 13),
              (g &= 8191),
              (g += I * L),
              (g += _ * M),
              (g += U * R),
              (g += P * (5 * q)),
              (g += k * (5 * K)),
              (l += g >>> 13),
              (g &= 8191),
              (m = l),
              (m += A * K),
              (m += x * F),
              (m += S * D),
              (m += T * N),
              (m += O * C),
              (l = m >>> 13),
              (m &= 8191),
              (m += I * j),
              (m += _ * L),
              (m += U * M),
              (m += P * R),
              (m += k * (5 * q)),
              (l += m >>> 13),
              (m &= 8191),
              (E = l),
              (E += A * q),
              (E += x * K),
              (E += S * F),
              (E += T * D),
              (E += O * N),
              (l = E >>> 13),
              (E &= 8191),
              (E += I * C),
              (E += _ * j),
              (E += U * L),
              (E += P * M),
              (E += k * R),
              (l += E >>> 13),
              (E &= 8191),
              (l = ((l << 2) + l) | 0),
              (l = (l + h) | 0),
              (h = 8191 & l),
              (l >>>= 13),
              (d += l),
              (A = h),
              (x = d),
              (S = p),
              (T = y),
              (O = v),
              (I = w),
              (_ = b),
              (U = g),
              (P = m),
              (k = E),
              (e += 16),
              (r -= 16));
          ((this.h[0] = A),
            (this.h[1] = x),
            (this.h[2] = S),
            (this.h[3] = T),
            (this.h[4] = O),
            (this.h[5] = I),
            (this.h[6] = _),
            (this.h[7] = U),
            (this.h[8] = P),
            (this.h[9] = k));
        }),
          (O.prototype.finish = function (t, e) {
            var r,
              n,
              o,
              i,
              s = new Uint16Array(10);
            if (this.leftover) {
              for (i = this.leftover, this.buffer[i++] = 1; i < 16; i++)
                this.buffer[i] = 0;
              ((this.fin = 1), this.blocks(this.buffer, 0, 16));
            }
            for (r = this.h[1] >>> 13, this.h[1] &= 8191, i = 2; i < 10; i++)
              ((this.h[i] += r), (r = this.h[i] >>> 13), (this.h[i] &= 8191));
            for (
              this.h[0] += 5 * r,
                r = this.h[0] >>> 13,
                this.h[0] &= 8191,
                this.h[1] += r,
                r = this.h[1] >>> 13,
                this.h[1] &= 8191,
                this.h[2] += r,
                s[0] = this.h[0] + 5,
                r = s[0] >>> 13,
                s[0] &= 8191,
                i = 1;
              i < 10;
              i++
            )
              ((s[i] = this.h[i] + r), (r = s[i] >>> 13), (s[i] &= 8191));
            for (s[9] -= 8192, n = (1 ^ r) - 1, i = 0; i < 10; i++) s[i] &= n;
            for (n = ~n, i = 0; i < 10; i++) this.h[i] = (this.h[i] & n) | s[i];
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
                o = this.h[0] + this.pad[0],
                this.h[0] = 65535 & o,
                i = 1;
              i < 8;
              i++
            )
              ((o = (((this.h[i] + this.pad[i]) | 0) + (o >>> 16)) | 0),
                (this.h[i] = 65535 & o));
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
          (O.prototype.update = function (t, e, r) {
            var n, o;
            if (this.leftover) {
              for (o = 16 - this.leftover, o > r && (o = r), n = 0; n < o; n++)
                this.buffer[this.leftover + n] = t[e + n];
              if (
                ((r -= o), (e += o), (this.leftover += o), this.leftover < 16)
              )
                return;
              (this.blocks(this.buffer, 0, 16), (this.leftover = 0));
            }
            if (
              (r >= 16 &&
                ((o = r - (r % 16)), this.blocks(t, e, o), (e += o), (r -= o)),
              r)
            ) {
              for (n = 0; n < r; n++) this.buffer[this.leftover + n] = t[e + n];
              this.leftover += r;
            }
          }));
        var W = U,
          $ = P;
        function J(t, e, r, n, o, i) {
          var s = new Uint8Array(32);
          return (Y(s, o, i), W(t, e, r, n, s));
        }
        function X(t, e, r, n, o, i) {
          var s = new Uint8Array(32);
          return (Y(s, o, i), $(t, e, r, n, s));
        }
        var Q = [
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
          var o,
            i,
            s,
            a,
            c,
            u,
            f,
            l,
            h,
            d,
            p,
            y,
            v,
            w,
            b,
            g,
            m,
            E,
            B,
            A,
            x,
            S,
            T,
            O,
            I,
            _,
            U = new Int32Array(16),
            P = new Int32Array(16),
            k = t[0],
            R = t[1],
            M = t[2],
            L = t[3],
            j = t[4],
            C = t[5],
            N = t[6],
            D = t[7],
            F = e[0],
            K = e[1],
            q = e[2],
            H = e[3],
            V = e[4],
            z = e[5],
            Z = e[6],
            G = e[7],
            Y = 0;
          while (n >= 128) {
            for (B = 0; B < 16; B++)
              ((A = 8 * B + Y),
                (U[B] =
                  (r[A + 0] << 24) |
                  (r[A + 1] << 16) |
                  (r[A + 2] << 8) |
                  r[A + 3]),
                (P[B] =
                  (r[A + 4] << 24) |
                  (r[A + 5] << 16) |
                  (r[A + 6] << 8) |
                  r[A + 7]));
            for (B = 0; B < 80; B++)
              if (
                ((o = k),
                (i = R),
                (s = M),
                (a = L),
                (c = j),
                (u = C),
                (f = N),
                (l = D),
                (h = F),
                (d = K),
                (p = q),
                (y = H),
                (v = V),
                (w = z),
                (b = Z),
                (g = G),
                (x = D),
                (S = G),
                (T = 65535 & S),
                (O = S >>> 16),
                (I = 65535 & x),
                (_ = x >>> 16),
                (x =
                  ((j >>> 14) | (V << 18)) ^
                  ((j >>> 18) | (V << 14)) ^
                  ((V >>> 9) | (j << 23))),
                (S =
                  ((V >>> 14) | (j << 18)) ^
                  ((V >>> 18) | (j << 14)) ^
                  ((j >>> 9) | (V << 23))),
                (T += 65535 & S),
                (O += S >>> 16),
                (I += 65535 & x),
                (_ += x >>> 16),
                (x = (j & C) ^ (~j & N)),
                (S = (V & z) ^ (~V & Z)),
                (T += 65535 & S),
                (O += S >>> 16),
                (I += 65535 & x),
                (_ += x >>> 16),
                (x = Q[2 * B]),
                (S = Q[2 * B + 1]),
                (T += 65535 & S),
                (O += S >>> 16),
                (I += 65535 & x),
                (_ += x >>> 16),
                (x = U[B % 16]),
                (S = P[B % 16]),
                (T += 65535 & S),
                (O += S >>> 16),
                (I += 65535 & x),
                (_ += x >>> 16),
                (O += T >>> 16),
                (I += O >>> 16),
                (_ += I >>> 16),
                (m = (65535 & I) | (_ << 16)),
                (E = (65535 & T) | (O << 16)),
                (x = m),
                (S = E),
                (T = 65535 & S),
                (O = S >>> 16),
                (I = 65535 & x),
                (_ = x >>> 16),
                (x =
                  ((k >>> 28) | (F << 4)) ^
                  ((F >>> 2) | (k << 30)) ^
                  ((F >>> 7) | (k << 25))),
                (S =
                  ((F >>> 28) | (k << 4)) ^
                  ((k >>> 2) | (F << 30)) ^
                  ((k >>> 7) | (F << 25))),
                (T += 65535 & S),
                (O += S >>> 16),
                (I += 65535 & x),
                (_ += x >>> 16),
                (x = (k & R) ^ (k & M) ^ (R & M)),
                (S = (F & K) ^ (F & q) ^ (K & q)),
                (T += 65535 & S),
                (O += S >>> 16),
                (I += 65535 & x),
                (_ += x >>> 16),
                (O += T >>> 16),
                (I += O >>> 16),
                (_ += I >>> 16),
                (l = (65535 & I) | (_ << 16)),
                (g = (65535 & T) | (O << 16)),
                (x = a),
                (S = y),
                (T = 65535 & S),
                (O = S >>> 16),
                (I = 65535 & x),
                (_ = x >>> 16),
                (x = m),
                (S = E),
                (T += 65535 & S),
                (O += S >>> 16),
                (I += 65535 & x),
                (_ += x >>> 16),
                (O += T >>> 16),
                (I += O >>> 16),
                (_ += I >>> 16),
                (a = (65535 & I) | (_ << 16)),
                (y = (65535 & T) | (O << 16)),
                (R = o),
                (M = i),
                (L = s),
                (j = a),
                (C = c),
                (N = u),
                (D = f),
                (k = l),
                (K = h),
                (q = d),
                (H = p),
                (V = y),
                (z = v),
                (Z = w),
                (G = b),
                (F = g),
                B % 16 === 15)
              )
                for (A = 0; A < 16; A++)
                  ((x = U[A]),
                    (S = P[A]),
                    (T = 65535 & S),
                    (O = S >>> 16),
                    (I = 65535 & x),
                    (_ = x >>> 16),
                    (x = U[(A + 9) % 16]),
                    (S = P[(A + 9) % 16]),
                    (T += 65535 & S),
                    (O += S >>> 16),
                    (I += 65535 & x),
                    (_ += x >>> 16),
                    (m = U[(A + 1) % 16]),
                    (E = P[(A + 1) % 16]),
                    (x =
                      ((m >>> 1) | (E << 31)) ^
                      ((m >>> 8) | (E << 24)) ^
                      (m >>> 7)),
                    (S =
                      ((E >>> 1) | (m << 31)) ^
                      ((E >>> 8) | (m << 24)) ^
                      ((E >>> 7) | (m << 25))),
                    (T += 65535 & S),
                    (O += S >>> 16),
                    (I += 65535 & x),
                    (_ += x >>> 16),
                    (m = U[(A + 14) % 16]),
                    (E = P[(A + 14) % 16]),
                    (x =
                      ((m >>> 19) | (E << 13)) ^
                      ((E >>> 29) | (m << 3)) ^
                      (m >>> 6)),
                    (S =
                      ((E >>> 19) | (m << 13)) ^
                      ((m >>> 29) | (E << 3)) ^
                      ((E >>> 6) | (m << 26))),
                    (T += 65535 & S),
                    (O += S >>> 16),
                    (I += 65535 & x),
                    (_ += x >>> 16),
                    (O += T >>> 16),
                    (I += O >>> 16),
                    (_ += I >>> 16),
                    (U[A] = (65535 & I) | (_ << 16)),
                    (P[A] = (65535 & T) | (O << 16)));
            ((x = k),
              (S = F),
              (T = 65535 & S),
              (O = S >>> 16),
              (I = 65535 & x),
              (_ = x >>> 16),
              (x = t[0]),
              (S = e[0]),
              (T += 65535 & S),
              (O += S >>> 16),
              (I += 65535 & x),
              (_ += x >>> 16),
              (O += T >>> 16),
              (I += O >>> 16),
              (_ += I >>> 16),
              (t[0] = k = (65535 & I) | (_ << 16)),
              (e[0] = F = (65535 & T) | (O << 16)),
              (x = R),
              (S = K),
              (T = 65535 & S),
              (O = S >>> 16),
              (I = 65535 & x),
              (_ = x >>> 16),
              (x = t[1]),
              (S = e[1]),
              (T += 65535 & S),
              (O += S >>> 16),
              (I += 65535 & x),
              (_ += x >>> 16),
              (O += T >>> 16),
              (I += O >>> 16),
              (_ += I >>> 16),
              (t[1] = R = (65535 & I) | (_ << 16)),
              (e[1] = K = (65535 & T) | (O << 16)),
              (x = M),
              (S = q),
              (T = 65535 & S),
              (O = S >>> 16),
              (I = 65535 & x),
              (_ = x >>> 16),
              (x = t[2]),
              (S = e[2]),
              (T += 65535 & S),
              (O += S >>> 16),
              (I += 65535 & x),
              (_ += x >>> 16),
              (O += T >>> 16),
              (I += O >>> 16),
              (_ += I >>> 16),
              (t[2] = M = (65535 & I) | (_ << 16)),
              (e[2] = q = (65535 & T) | (O << 16)),
              (x = L),
              (S = H),
              (T = 65535 & S),
              (O = S >>> 16),
              (I = 65535 & x),
              (_ = x >>> 16),
              (x = t[3]),
              (S = e[3]),
              (T += 65535 & S),
              (O += S >>> 16),
              (I += 65535 & x),
              (_ += x >>> 16),
              (O += T >>> 16),
              (I += O >>> 16),
              (_ += I >>> 16),
              (t[3] = L = (65535 & I) | (_ << 16)),
              (e[3] = H = (65535 & T) | (O << 16)),
              (x = j),
              (S = V),
              (T = 65535 & S),
              (O = S >>> 16),
              (I = 65535 & x),
              (_ = x >>> 16),
              (x = t[4]),
              (S = e[4]),
              (T += 65535 & S),
              (O += S >>> 16),
              (I += 65535 & x),
              (_ += x >>> 16),
              (O += T >>> 16),
              (I += O >>> 16),
              (_ += I >>> 16),
              (t[4] = j = (65535 & I) | (_ << 16)),
              (e[4] = V = (65535 & T) | (O << 16)),
              (x = C),
              (S = z),
              (T = 65535 & S),
              (O = S >>> 16),
              (I = 65535 & x),
              (_ = x >>> 16),
              (x = t[5]),
              (S = e[5]),
              (T += 65535 & S),
              (O += S >>> 16),
              (I += 65535 & x),
              (_ += x >>> 16),
              (O += T >>> 16),
              (I += O >>> 16),
              (_ += I >>> 16),
              (t[5] = C = (65535 & I) | (_ << 16)),
              (e[5] = z = (65535 & T) | (O << 16)),
              (x = N),
              (S = Z),
              (T = 65535 & S),
              (O = S >>> 16),
              (I = 65535 & x),
              (_ = x >>> 16),
              (x = t[6]),
              (S = e[6]),
              (T += 65535 & S),
              (O += S >>> 16),
              (I += 65535 & x),
              (_ += x >>> 16),
              (O += T >>> 16),
              (I += O >>> 16),
              (_ += I >>> 16),
              (t[6] = N = (65535 & I) | (_ << 16)),
              (e[6] = Z = (65535 & T) | (O << 16)),
              (x = D),
              (S = G),
              (T = 65535 & S),
              (O = S >>> 16),
              (I = 65535 & x),
              (_ = x >>> 16),
              (x = t[7]),
              (S = e[7]),
              (T += 65535 & S),
              (O += S >>> 16),
              (I += 65535 & x),
              (_ += x >>> 16),
              (O += T >>> 16),
              (I += O >>> 16),
              (_ += I >>> 16),
              (t[7] = D = (65535 & I) | (_ << 16)),
              (e[7] = G = (65535 & T) | (O << 16)),
              (Y += 128),
              (n -= 128));
          }
          return n;
        }
        function et(t, e, r) {
          var n,
            o = new Int32Array(8),
            i = new Int32Array(8),
            s = new Uint8Array(256),
            a = r;
          for (
            o[0] = 1779033703,
              o[1] = 3144134277,
              o[2] = 1013904242,
              o[3] = 2773480762,
              o[4] = 1359893119,
              o[5] = 2600822924,
              o[6] = 528734635,
              o[7] = 1541459225,
              i[0] = 4089235720,
              i[1] = 2227873595,
              i[2] = 4271175723,
              i[3] = 1595750129,
              i[4] = 2917565137,
              i[5] = 725511199,
              i[6] = 4215389547,
              i[7] = 327033209,
              tt(o, i, e, r),
              r %= 128,
              n = 0;
            n < r;
            n++
          )
            s[n] = e[a - r + n];
          for (
            s[r] = 128,
              r = 256 - 128 * (r < 112 ? 1 : 0),
              s[r - 9] = 0,
              p(s, r - 8, (a / 536870912) | 0, a << 3),
              tt(o, i, s, r),
              n = 0;
            n < 8;
            n++
          )
            p(t, 8 * n, o[n], i[n]);
          return 0;
        }
        function rt(t, r) {
          var n = e(),
            o = e(),
            i = e(),
            s = e(),
            a = e(),
            c = e(),
            u = e(),
            l = e(),
            h = e();
          (F(n, t[1], t[0]),
            F(h, r[1], r[0]),
            K(n, n, h),
            D(o, t[0], t[1]),
            D(h, r[0], r[1]),
            K(o, o, h),
            K(i, t[3], r[3]),
            K(i, i, f),
            K(s, t[2], r[2]),
            D(s, s, s),
            F(a, o, n),
            F(c, s, i),
            D(u, s, i),
            D(l, o, n),
            K(t[0], a, c),
            K(t[1], l, u),
            K(t[2], u, c),
            K(t[3], a, l));
        }
        function nt(t, e, r) {
          var n;
          for (n = 0; n < 4; n++) M(t[n], e[n], r);
        }
        function ot(t, r) {
          var n = e(),
            o = e(),
            i = e();
          (H(i, r[2]),
            K(n, r[0], i),
            K(o, r[1], i),
            L(t, o),
            (t[31] ^= C(n) << 7));
        }
        function it(t, e, r) {
          var n, o;
          for (
            k(t[0], s), k(t[1], a), k(t[2], a), k(t[3], s), o = 255;
            o >= 0;
            --o
          )
            ((n = (r[(o / 8) | 0] >> (7 & o)) & 1),
              nt(t, e, n),
              rt(e, t),
              rt(t, t),
              nt(t, e, n));
        }
        function st(t, r) {
          var n = [e(), e(), e(), e()];
          (k(n[0], l), k(n[1], h), k(n[2], a), K(n[3], l, h), it(t, n, r));
        }
        function at(t, r, o) {
          var i,
            s = new Uint8Array(64),
            a = [e(), e(), e(), e()];
          for (
            o || n(r, 32),
              et(s, r, 32),
              s[0] &= 248,
              s[31] &= 127,
              s[31] |= 64,
              st(a, s),
              ot(t, a),
              i = 0;
            i < 32;
            i++
          )
            r[i + 32] = t[i];
          return 0;
        }
        var ct = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
          20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
        ]);
        function ut(t, e) {
          var r, n, o, i;
          for (n = 63; n >= 32; --n) {
            for (r = 0, o = n - 32, i = n - 12; o < i; ++o)
              ((e[o] += r - 16 * e[n] * ct[o - (n - 32)]),
                (r = Math.floor((e[o] + 128) / 256)),
                (e[o] -= 256 * r));
            ((e[o] += r), (e[n] = 0));
          }
          for (r = 0, o = 0; o < 32; o++)
            ((e[o] += r - (e[31] >> 4) * ct[o]),
              (r = e[o] >> 8),
              (e[o] &= 255));
          for (o = 0; o < 32; o++) e[o] -= r * ct[o];
          for (n = 0; n < 32; n++)
            ((e[n + 1] += e[n] >> 8), (t[n] = 255 & e[n]));
        }
        function ft(t) {
          var e,
            r = new Float64Array(64);
          for (e = 0; e < 64; e++) r[e] = t[e];
          for (e = 0; e < 64; e++) t[e] = 0;
          ut(t, r);
        }
        function lt(t, r, n, o) {
          var i,
            s,
            a = new Uint8Array(64),
            c = new Uint8Array(64),
            u = new Uint8Array(64),
            f = new Float64Array(64),
            l = [e(), e(), e(), e()];
          (et(a, o, 32), (a[0] &= 248), (a[31] &= 127), (a[31] |= 64));
          var h = n + 64;
          for (i = 0; i < n; i++) t[64 + i] = r[i];
          for (i = 0; i < 32; i++) t[32 + i] = a[32 + i];
          for (
            et(u, t.subarray(32), n + 32), ft(u), st(l, u), ot(t, l), i = 32;
            i < 64;
            i++
          )
            t[i] = o[i];
          for (et(c, t, n + 64), ft(c), i = 0; i < 64; i++) f[i] = 0;
          for (i = 0; i < 32; i++) f[i] = u[i];
          for (i = 0; i < 32; i++)
            for (s = 0; s < 32; s++) f[i + s] += c[i] * a[s];
          return (ut(t.subarray(32), f), h);
        }
        function ht(t, r) {
          var n = e(),
            o = e(),
            i = e(),
            c = e(),
            f = e(),
            l = e(),
            h = e();
          return (
            k(t[2], a),
            N(t[1], r),
            q(i, t[1]),
            K(c, i, u),
            F(i, i, t[2]),
            D(c, t[2], c),
            q(f, c),
            q(l, f),
            K(h, l, f),
            K(n, h, i),
            K(n, n, c),
            V(n, n),
            K(n, n, i),
            K(n, n, c),
            K(n, n, c),
            K(t[0], n, c),
            q(o, t[0]),
            K(o, o, c),
            j(o, i) && K(t[0], t[0], d),
            q(o, t[0]),
            K(o, o, c),
            j(o, i)
              ? -1
              : (C(t[0]) === r[31] >> 7 && F(t[0], s, t[0]),
                K(t[3], t[0], t[1]),
                0)
          );
        }
        function dt(t, r, n, o) {
          var i,
            s = new Uint8Array(32),
            a = new Uint8Array(64),
            c = [e(), e(), e(), e()],
            u = [e(), e(), e(), e()];
          if (n < 64) return -1;
          if (ht(u, o)) return -1;
          for (i = 0; i < n; i++) t[i] = r[i];
          for (i = 0; i < 32; i++) t[i + 32] = o[i];
          if (
            (et(a, t, n),
            ft(a),
            it(c, u, a),
            st(u, r.subarray(32)),
            rt(c, u),
            ot(s, c),
            (n -= 64),
            w(r, 0, s, 0))
          ) {
            for (i = 0; i < n; i++) t[i] = 0;
            return -1;
          }
          for (i = 0; i < n; i++) t[i] = r[i + 64];
          return n;
        }
        var pt = 32,
          yt = 24,
          vt = 32,
          wt = 16,
          bt = 32,
          gt = 32,
          mt = 32,
          Et = 32,
          Bt = 32,
          At = yt,
          xt = vt,
          St = wt,
          Tt = 64,
          Ot = 32,
          It = 64,
          _t = 32,
          Ut = 64;
        function Pt(t, e) {
          if (t.length !== pt) throw new Error("bad key size");
          if (e.length !== yt) throw new Error("bad nonce size");
        }
        function kt(t, e) {
          if (t.length !== mt) throw new Error("bad public key size");
          if (e.length !== Et) throw new Error("bad secret key size");
        }
        function Rt() {
          for (var t = 0; t < arguments.length; t++)
            if (!(arguments[t] instanceof Uint8Array))
              throw new TypeError("unexpected type, use Uint8Array");
        }
        function Mt(t) {
          for (var e = 0; e < t.length; e++) t[e] = 0;
        }
        ((t.lowlevel = {
          crypto_core_hsalsa20: E,
          crypto_stream_xor: T,
          crypto_stream: S,
          crypto_stream_salsa20_xor: A,
          crypto_stream_salsa20: x,
          crypto_onetimeauth: I,
          crypto_onetimeauth_verify: _,
          crypto_verify_16: v,
          crypto_verify_32: w,
          crypto_secretbox: U,
          crypto_secretbox_open: P,
          crypto_scalarmult: z,
          crypto_scalarmult_base: Z,
          crypto_box_beforenm: Y,
          crypto_box_afternm: W,
          crypto_box: J,
          crypto_box_open: X,
          crypto_box_keypair: G,
          crypto_hash: et,
          crypto_sign: lt,
          crypto_sign_keypair: at,
          crypto_sign_open: dt,
          crypto_secretbox_KEYBYTES: pt,
          crypto_secretbox_NONCEBYTES: yt,
          crypto_secretbox_ZEROBYTES: vt,
          crypto_secretbox_BOXZEROBYTES: wt,
          crypto_scalarmult_BYTES: bt,
          crypto_scalarmult_SCALARBYTES: gt,
          crypto_box_PUBLICKEYBYTES: mt,
          crypto_box_SECRETKEYBYTES: Et,
          crypto_box_BEFORENMBYTES: Bt,
          crypto_box_NONCEBYTES: At,
          crypto_box_ZEROBYTES: xt,
          crypto_box_BOXZEROBYTES: St,
          crypto_sign_BYTES: Tt,
          crypto_sign_PUBLICKEYBYTES: Ot,
          crypto_sign_SECRETKEYBYTES: It,
          crypto_sign_SEEDBYTES: _t,
          crypto_hash_BYTES: Ut,
          gf: e,
          D: u,
          L: ct,
          pack25519: L,
          unpack25519: N,
          M: K,
          A: D,
          S: q,
          Z: F,
          pow2523: V,
          add: rt,
          set25519: k,
          modL: ut,
          scalarmult: it,
          scalarbase: st,
        }),
          (t.randomBytes = function (t) {
            var e = new Uint8Array(t);
            return (n(e, t), e);
          }),
          (t.secretbox = function (t, e, r) {
            (Rt(t, e, r), Pt(r, e));
            for (
              var n = new Uint8Array(vt + t.length),
                o = new Uint8Array(n.length),
                i = 0;
              i < t.length;
              i++
            )
              n[i + vt] = t[i];
            return (U(o, n, n.length, e, r), o.subarray(wt));
          }),
          (t.secretbox.open = function (t, e, r) {
            (Rt(t, e, r), Pt(r, e));
            for (
              var n = new Uint8Array(wt + t.length),
                o = new Uint8Array(n.length),
                i = 0;
              i < t.length;
              i++
            )
              n[i + wt] = t[i];
            return n.length < 32 || 0 !== P(o, n, n.length, e, r)
              ? null
              : o.subarray(vt);
          }),
          (t.secretbox.keyLength = pt),
          (t.secretbox.nonceLength = yt),
          (t.secretbox.overheadLength = wt),
          (t.scalarMult = function (t, e) {
            if ((Rt(t, e), t.length !== gt)) throw new Error("bad n size");
            if (e.length !== bt) throw new Error("bad p size");
            var r = new Uint8Array(bt);
            return (z(r, t, e), r);
          }),
          (t.scalarMult.base = function (t) {
            if ((Rt(t), t.length !== gt)) throw new Error("bad n size");
            var e = new Uint8Array(bt);
            return (Z(e, t), e);
          }),
          (t.scalarMult.scalarLength = gt),
          (t.scalarMult.groupElementLength = bt),
          (t.box = function (e, r, n, o) {
            var i = t.box.before(n, o);
            return t.secretbox(e, r, i);
          }),
          (t.box.before = function (t, e) {
            (Rt(t, e), kt(t, e));
            var r = new Uint8Array(Bt);
            return (Y(r, t, e), r);
          }),
          (t.box.after = t.secretbox),
          (t.box.open = function (e, r, n, o) {
            var i = t.box.before(n, o);
            return t.secretbox.open(e, r, i);
          }),
          (t.box.open.after = t.secretbox.open),
          (t.box.keyPair = function () {
            var t = new Uint8Array(mt),
              e = new Uint8Array(Et);
            return (G(t, e), { publicKey: t, secretKey: e });
          }),
          (t.box.keyPair.fromSecretKey = function (t) {
            if ((Rt(t), t.length !== Et))
              throw new Error("bad secret key size");
            var e = new Uint8Array(mt);
            return (Z(e, t), { publicKey: e, secretKey: new Uint8Array(t) });
          }),
          (t.box.publicKeyLength = mt),
          (t.box.secretKeyLength = Et),
          (t.box.sharedKeyLength = Bt),
          (t.box.nonceLength = At),
          (t.box.overheadLength = t.secretbox.overheadLength),
          (t.sign = function (t, e) {
            if ((Rt(t, e), e.length !== It))
              throw new Error("bad secret key size");
            var r = new Uint8Array(Tt + t.length);
            return (lt(r, t, t.length, e), r);
          }),
          (t.sign.open = function (t, e) {
            if ((Rt(t, e), e.length !== Ot))
              throw new Error("bad public key size");
            var r = new Uint8Array(t.length),
              n = dt(r, t, t.length, e);
            if (n < 0) return null;
            for (var o = new Uint8Array(n), i = 0; i < o.length; i++)
              o[i] = r[i];
            return o;
          }),
          (t.sign.detached = function (e, r) {
            for (
              var n = t.sign(e, r), o = new Uint8Array(Tt), i = 0;
              i < o.length;
              i++
            )
              o[i] = n[i];
            return o;
          }),
          (t.sign.detached.verify = function (t, e, r) {
            if ((Rt(t, e, r), e.length !== Tt))
              throw new Error("bad signature size");
            if (r.length !== Ot) throw new Error("bad public key size");
            var n,
              o = new Uint8Array(Tt + t.length),
              i = new Uint8Array(Tt + t.length);
            for (n = 0; n < Tt; n++) o[n] = e[n];
            for (n = 0; n < t.length; n++) o[n + Tt] = t[n];
            return dt(i, o, o.length, r) >= 0;
          }),
          (t.sign.keyPair = function () {
            var t = new Uint8Array(Ot),
              e = new Uint8Array(It);
            return (at(t, e), { publicKey: t, secretKey: e });
          }),
          (t.sign.keyPair.fromSecretKey = function (t) {
            if ((Rt(t), t.length !== It))
              throw new Error("bad secret key size");
            for (var e = new Uint8Array(Ot), r = 0; r < e.length; r++)
              e[r] = t[32 + r];
            return { publicKey: e, secretKey: new Uint8Array(t) };
          }),
          (t.sign.keyPair.fromSeed = function (t) {
            if ((Rt(t), t.length !== _t)) throw new Error("bad seed size");
            for (
              var e = new Uint8Array(Ot), r = new Uint8Array(It), n = 0;
              n < 32;
              n++
            )
              r[n] = t[n];
            return (at(e, r, !0), { publicKey: e, secretKey: r });
          }),
          (t.sign.publicKeyLength = Ot),
          (t.sign.secretKeyLength = It),
          (t.sign.seedLength = _t),
          (t.sign.signatureLength = Tt),
          (t.hash = function (t) {
            Rt(t);
            var e = new Uint8Array(Ut);
            return (et(e, t, t.length), e);
          }),
          (t.hash.hashLength = Ut),
          (t.verify = function (t, e) {
            return (
              Rt(t, e),
              0 !== t.length &&
                0 !== e.length &&
                t.length === e.length &&
                0 === y(t, 0, e, 0, t.length)
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
                var o,
                  i = new Uint8Array(r);
                for (o = 0; o < r; o += n)
                  e.getRandomValues(i.subarray(o, o + Math.min(r - o, n)));
                for (o = 0; o < r; o++) t[o] = i[o];
                Mt(i);
              });
            } else
              ((e = r(3053)),
                e &&
                  e.randomBytes &&
                  t.setPRNG(function (t, r) {
                    var n,
                      o = e.randomBytes(r);
                    for (n = 0; n < r; n++) t[n] = o[n];
                    Mt(o);
                  }));
          })());
      })(t.exports ? t.exports : (self.nacl = self.nacl || {}));
    },
    2966: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.pbkdf2 = a),
        (e.pbkdf2Async = c));
      const n = r(379),
        o = r(130);
      function i(t, e, r, i) {
        (0, o.ahash)(t);
        const s = (0, o.checkOpts)({ dkLen: 32, asyncTick: 10 }, i),
          { c: a, dkLen: c, asyncTick: u } = s;
        if (((0, o.anumber)(a), (0, o.anumber)(c), (0, o.anumber)(u), a < 1))
          throw new Error("iterations (c) should be >= 1");
        const f = (0, o.kdfInputToBytes)(e),
          l = (0, o.kdfInputToBytes)(r),
          h = new Uint8Array(c),
          d = n.hmac.create(t, f),
          p = d._cloneInto().update(l);
        return { c: a, dkLen: c, asyncTick: u, DK: h, PRF: d, PRFSalt: p };
      }
      function s(t, e, r, n, i) {
        return (t.destroy(), e.destroy(), n && n.destroy(), (0, o.clean)(i), r);
      }
      function a(t, e, r, n) {
        const { c: a, dkLen: c, DK: u, PRF: f, PRFSalt: l } = i(t, e, r, n);
        let h;
        const d = new Uint8Array(4),
          p = (0, o.createView)(d),
          y = new Uint8Array(f.outputLen);
        for (let o = 1, i = 0; i < c; o++, i += f.outputLen) {
          const t = u.subarray(i, i + f.outputLen);
          (p.setInt32(0, o, !1),
            (h = l._cloneInto(h)).update(d).digestInto(y),
            t.set(y.subarray(0, t.length)));
          for (let e = 1; e < a; e++) {
            f._cloneInto(h).update(y).digestInto(y);
            for (let e = 0; e < t.length; e++) t[e] ^= y[e];
          }
        }
        return s(f, l, u, h, y);
      }
      async function c(t, e, r, n) {
        const {
          c: a,
          dkLen: c,
          asyncTick: u,
          DK: f,
          PRF: l,
          PRFSalt: h,
        } = i(t, e, r, n);
        let d;
        const p = new Uint8Array(4),
          y = (0, o.createView)(p),
          v = new Uint8Array(l.outputLen);
        for (let i = 1, s = 0; s < c; i++, s += l.outputLen) {
          const t = f.subarray(s, s + l.outputLen);
          (y.setInt32(0, i, !1),
            (d = h._cloneInto(d)).update(p).digestInto(v),
            t.set(v.subarray(0, t.length)),
            await (0, o.asyncLoop)(a - 1, u, () => {
              l._cloneInto(d).update(v).digestInto(v);
              for (let e = 0; e < t.length; e++) t[e] ^= v[e];
            }));
        }
        return s(l, h, f, d, v);
      }
    },
    3151: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.notImplemented =
          e.bitMask =
          e.utf8ToBytes =
          e.randomBytes =
          e.isBytes =
          e.hexToBytes =
          e.concatBytes =
          e.bytesToUtf8 =
          e.bytesToHex =
          e.anumber =
          e.abytes =
            void 0),
        (e.abool = a),
        (e.numberToHexUnpadded = c),
        (e.hexToNumber = u),
        (e.bytesToNumberBE = f),
        (e.bytesToNumberLE = l),
        (e.numberToBytesBE = h),
        (e.numberToBytesLE = d),
        (e.numberToVarBytesBE = p),
        (e.ensureBytes = y),
        (e.equalBytes = v),
        (e.inRange = b),
        (e.aInRange = g),
        (e.bitLen = m),
        (e.bitGet = E),
        (e.bitSet = B),
        (e.createHmacDrbg = x),
        (e.validateObject = T),
        (e.isHash = O),
        (e._validateObject = I),
        (e.memoized = U));
      const n = r(130);
      var o = r(130);
      (Object.defineProperty(e, "abytes", {
        enumerable: !0,
        get: function () {
          return o.abytes;
        },
      }),
        Object.defineProperty(e, "anumber", {
          enumerable: !0,
          get: function () {
            return o.anumber;
          },
        }),
        Object.defineProperty(e, "bytesToHex", {
          enumerable: !0,
          get: function () {
            return o.bytesToHex;
          },
        }),
        Object.defineProperty(e, "bytesToUtf8", {
          enumerable: !0,
          get: function () {
            return o.bytesToUtf8;
          },
        }),
        Object.defineProperty(e, "concatBytes", {
          enumerable: !0,
          get: function () {
            return o.concatBytes;
          },
        }),
        Object.defineProperty(e, "hexToBytes", {
          enumerable: !0,
          get: function () {
            return o.hexToBytes;
          },
        }),
        Object.defineProperty(e, "isBytes", {
          enumerable: !0,
          get: function () {
            return o.isBytes;
          },
        }),
        Object.defineProperty(e, "randomBytes", {
          enumerable: !0,
          get: function () {
            return o.randomBytes;
          },
        }),
        Object.defineProperty(e, "utf8ToBytes", {
          enumerable: !0,
          get: function () {
            return o.utf8ToBytes;
          },
        }));
      const i = BigInt(0),
        s = BigInt(1);
      function a(t, e) {
        if ("boolean" !== typeof e)
          throw new Error(t + " boolean expected, got " + e);
      }
      function c(t) {
        const e = t.toString(16);
        return 1 & e.length ? "0" + e : e;
      }
      function u(t) {
        if ("string" !== typeof t)
          throw new Error("hex string expected, got " + typeof t);
        return "" === t ? i : BigInt("0x" + t);
      }
      function f(t) {
        return u((0, n.bytesToHex)(t));
      }
      function l(t) {
        return (
          (0, n.abytes)(t),
          u((0, n.bytesToHex)(Uint8Array.from(t).reverse()))
        );
      }
      function h(t, e) {
        return (0, n.hexToBytes)(t.toString(16).padStart(2 * e, "0"));
      }
      function d(t, e) {
        return h(t, e).reverse();
      }
      function p(t) {
        return (0, n.hexToBytes)(c(t));
      }
      function y(t, e, r) {
        let o;
        if ("string" === typeof e)
          try {
            o = (0, n.hexToBytes)(e);
          } catch (s) {
            throw new Error(
              t + " must be hex string or Uint8Array, cause: " + s,
            );
          }
        else {
          if (!(0, n.isBytes)(e))
            throw new Error(t + " must be hex string or Uint8Array");
          o = Uint8Array.from(e);
        }
        const i = o.length;
        if ("number" === typeof r && i !== r)
          throw new Error(t + " of length " + r + " expected, got " + i);
        return o;
      }
      function v(t, e) {
        if (t.length !== e.length) return !1;
        let r = 0;
        for (let n = 0; n < t.length; n++) r |= t[n] ^ e[n];
        return 0 === r;
      }
      const w = (t) => "bigint" === typeof t && i <= t;
      function b(t, e, r) {
        return w(t) && w(e) && w(r) && e <= t && t < r;
      }
      function g(t, e, r, n) {
        if (!b(e, r, n))
          throw new Error(
            "expected valid " + t + ": " + r + " <= n < " + n + ", got " + e,
          );
      }
      function m(t) {
        let e;
        for (e = 0; t > i; t >>= s, e += 1);
        return e;
      }
      function E(t, e) {
        return (t >> BigInt(e)) & s;
      }
      function B(t, e, r) {
        return t | ((r ? s : i) << BigInt(e));
      }
      const A = (t) => (s << BigInt(t)) - s;
      function x(t, e, r) {
        if ("number" !== typeof t || t < 2)
          throw new Error("hashLen must be a number");
        if ("number" !== typeof e || e < 2)
          throw new Error("qByteLen must be a number");
        if ("function" !== typeof r)
          throw new Error("hmacFn must be a function");
        const o = (t) => new Uint8Array(t),
          i = (t) => Uint8Array.of(t);
        let s = o(t),
          a = o(t),
          c = 0;
        const u = () => {
            (s.fill(1), a.fill(0), (c = 0));
          },
          f = function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            return r(a, s, ...e);
          },
          l = function (t) {
            (void 0 === t && (t = o(0)),
              (a = f(i(0), t)),
              (s = f()),
              0 !== t.length && ((a = f(i(1), t)), (s = f())));
          },
          h = () => {
            if (c++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let t = 0;
            const r = [];
            while (t < e) {
              s = f();
              const e = s.slice();
              (r.push(e), (t += s.length));
            }
            return (0, n.concatBytes)(...r);
          },
          d = (t, e) => {
            (u(), l(t));
            let r = void 0;
            while (!(r = e(h()))) l();
            return (u(), r);
          };
        return d;
      }
      e.bitMask = A;
      const S = {
        bigint: (t) => "bigint" === typeof t,
        function: (t) => "function" === typeof t,
        boolean: (t) => "boolean" === typeof t,
        string: (t) => "string" === typeof t,
        stringOrUint8Array: (t) => "string" === typeof t || (0, n.isBytes)(t),
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          "function" === typeof t && Number.isSafeInteger(t.outputLen),
      };
      function T(t, e, r) {
        void 0 === r && (r = {});
        const n = (e, r, n) => {
          const o = S[r];
          if ("function" !== typeof o)
            throw new Error("invalid validator function");
          const i = t[e];
          if ((!n || void 0 !== i) && !o(i, t))
            throw new Error(
              "param " +
                String(e) +
                " is invalid. Expected " +
                r +
                ", got " +
                i,
            );
        };
        for (const [o, i] of Object.entries(e)) n(o, i, !1);
        for (const [o, i] of Object.entries(r)) n(o, i, !0);
        return t;
      }
      function O(t) {
        return "function" === typeof t && Number.isSafeInteger(t.outputLen);
      }
      function I(t, e, r) {
        if ((void 0 === r && (r = {}), !t || "object" !== typeof t))
          throw new Error("expected valid options object");
        function n(e, r, n) {
          const o = t[e];
          if (n && void 0 === o) return;
          const i = typeof o;
          if (i !== r || null === o)
            throw new Error(`param "${e}" is invalid: expected ${r}, got ${i}`);
        }
        (Object.entries(e).forEach((t) => {
          let [e, r] = t;
          return n(e, r, !1);
        }),
          Object.entries(r).forEach((t) => {
            let [e, r] = t;
            return n(e, r, !0);
          }));
      }
      const _ = () => {
        throw new Error("not implemented");
      };
      function U(t) {
        const e = new WeakMap();
        return function (r) {
          const n = e.get(r);
          if (void 0 !== n) return n;
          for (
            var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1;
            s < o;
            s++
          )
            i[s - 1] = arguments[s];
          const a = t(r, ...i);
          return (e.set(r, a), a);
        };
      }
      e.notImplemented = _;
    },
    3185: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isNegativeLE = void 0),
        (e.mod = l),
        (e.pow = h),
        (e.pow2 = d),
        (e.invert = p),
        (e.tonelliShanks = w),
        (e.FpSqrt = b),
        (e.validateField = E),
        (e.FpPow = B),
        (e.FpInvertBatch = A),
        (e.FpDiv = x),
        (e.FpLegendre = S),
        (e.FpIsSquare = T),
        (e.nLength = O),
        (e.Field = I),
        (e.FpSqrtOdd = _),
        (e.FpSqrtEven = U),
        (e.hashToPrivateScalar = P),
        (e.getFieldBytesLength = k),
        (e.getMinHashLength = R),
        (e.mapHashToField = M));
      const n = r(3151),
        o = BigInt(0),
        i = BigInt(1),
        s = BigInt(2),
        a = BigInt(3),
        c = BigInt(4),
        u = BigInt(5),
        f = BigInt(8);
      function l(t, e) {
        const r = t % e;
        return r >= o ? r : e + r;
      }
      function h(t, e, r) {
        return B(I(r), t, e);
      }
      function d(t, e, r) {
        let n = t;
        while (e-- > o) ((n *= n), (n %= r));
        return n;
      }
      function p(t, e) {
        if (t === o) throw new Error("invert: expected non-zero number");
        if (e <= o)
          throw new Error("invert: expected positive modulus, got " + e);
        let r = l(t, e),
          n = e,
          s = o,
          a = i,
          c = i,
          u = o;
        while (r !== o) {
          const t = n / r,
            e = n % r,
            o = s - c * t,
            i = a - u * t;
          ((n = r), (r = e), (s = c), (a = u), (c = o), (u = i));
        }
        const f = n;
        if (f !== i) throw new Error("invert: does not exist");
        return l(s, e);
      }
      function y(t, e) {
        const r = (t.ORDER + i) / c,
          n = t.pow(e, r);
        if (!t.eql(t.sqr(n), e)) throw new Error("Cannot find square root");
        return n;
      }
      function v(t, e) {
        const r = (t.ORDER - u) / f,
          n = t.mul(e, s),
          o = t.pow(n, r),
          i = t.mul(e, o),
          a = t.mul(t.mul(i, s), o),
          c = t.mul(i, t.sub(a, t.ONE));
        if (!t.eql(t.sqr(c), e)) throw new Error("Cannot find square root");
        return c;
      }
      function w(t) {
        if (t < BigInt(3))
          throw new Error("sqrt is not defined for small field");
        let e = t - i,
          r = 0;
        while (e % s === o) ((e /= s), r++);
        let n = s;
        const a = I(t);
        while (1 === S(a, n))
          if (n++ > 1e3)
            throw new Error("Cannot find square root: probably non-prime P");
        if (1 === r) return y;
        let c = a.pow(n, e);
        const u = (e + i) / s;
        return function (t, n) {
          if (t.is0(n)) return n;
          if (1 !== S(t, n)) throw new Error("Cannot find square root");
          let o = r,
            s = t.mul(t.ONE, c),
            a = t.pow(n, e),
            f = t.pow(n, u);
          while (!t.eql(a, t.ONE)) {
            if (t.is0(a)) return t.ZERO;
            let e = 1,
              r = t.sqr(a);
            while (!t.eql(r, t.ONE))
              if ((e++, (r = t.sqr(r)), e === o))
                throw new Error("Cannot find square root");
            const n = i << BigInt(o - e - 1),
              c = t.pow(s, n);
            ((o = e), (s = t.sqr(c)), (a = t.mul(a, s)), (f = t.mul(f, c)));
          }
          return f;
        };
      }
      function b(t) {
        return t % c === a ? y : t % f === u ? v : w(t);
      }
      const g = (t, e) => (l(t, e) & i) === i;
      e.isNegativeLE = g;
      const m = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function E(t) {
        const e = {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "number",
            BITS: "number",
          },
          r = m.reduce((t, e) => ((t[e] = "function"), t), e);
        return ((0, n._validateObject)(t, r), t);
      }
      function B(t, e, r) {
        if (r < o) throw new Error("invalid exponent, negatives unsupported");
        if (r === o) return t.ONE;
        if (r === i) return e;
        let n = t.ONE,
          s = e;
        while (r > o) (r & i && (n = t.mul(n, s)), (s = t.sqr(s)), (r >>= i));
        return n;
      }
      function A(t, e, r) {
        void 0 === r && (r = !1);
        const n = new Array(e.length).fill(r ? t.ZERO : void 0),
          o = e.reduce(
            (e, r, o) => (t.is0(r) ? e : ((n[o] = e), t.mul(e, r))),
            t.ONE,
          ),
          i = t.inv(o);
        return (
          e.reduceRight(
            (e, r, o) =>
              t.is0(r) ? e : ((n[o] = t.mul(e, n[o])), t.mul(e, r)),
            i,
          ),
          n
        );
      }
      function x(t, e, r) {
        return t.mul(e, "bigint" === typeof r ? p(r, t.ORDER) : t.inv(r));
      }
      function S(t, e) {
        const r = (t.ORDER - i) / s,
          n = t.pow(e, r),
          o = t.eql(n, t.ONE),
          a = t.eql(n, t.ZERO),
          c = t.eql(n, t.neg(t.ONE));
        if (!o && !a && !c) throw new Error("invalid Legendre symbol result");
        return o ? 1 : a ? 0 : -1;
      }
      function T(t, e) {
        const r = S(t, e);
        return 1 === r;
      }
      function O(t, e) {
        void 0 !== e && (0, n.anumber)(e);
        const r = void 0 !== e ? e : t.toString(2).length,
          o = Math.ceil(r / 8);
        return { nBitLength: r, nByteLength: o };
      }
      function I(t, e, r, s) {
        if ((void 0 === r && (r = !1), void 0 === s && (s = {}), t <= o))
          throw new Error("invalid field: expected ORDER > 0, got " + t);
        let a = void 0,
          c = void 0;
        if ("object" === typeof e && null != e) {
          if (s.sqrt || r)
            throw new Error("cannot specify opts in two arguments");
          const t = e;
          (t.BITS && (a = t.BITS),
            t.sqrt && (c = t.sqrt),
            "boolean" === typeof t.isLE && (r = t.isLE));
        } else ("number" === typeof e && (a = e), s.sqrt && (c = s.sqrt));
        const { nBitLength: u, nByteLength: f } = O(t, a);
        if (f > 2048)
          throw new Error("invalid field: expected ORDER of <= 2048 bytes");
        let h;
        const d = Object.freeze({
          ORDER: t,
          isLE: r,
          BITS: u,
          BYTES: f,
          MASK: (0, n.bitMask)(u),
          ZERO: o,
          ONE: i,
          create: (e) => l(e, t),
          isValid: (e) => {
            if ("bigint" !== typeof e)
              throw new Error(
                "invalid field element: expected bigint, got " + typeof e,
              );
            return o <= e && e < t;
          },
          is0: (t) => t === o,
          isValidNot0: (t) => !d.is0(t) && d.isValid(t),
          isOdd: (t) => (t & i) === i,
          neg: (e) => l(-e, t),
          eql: (t, e) => t === e,
          sqr: (e) => l(e * e, t),
          add: (e, r) => l(e + r, t),
          sub: (e, r) => l(e - r, t),
          mul: (e, r) => l(e * r, t),
          pow: (t, e) => B(d, t, e),
          div: (e, r) => l(e * p(r, t), t),
          sqrN: (t) => t * t,
          addN: (t, e) => t + e,
          subN: (t, e) => t - e,
          mulN: (t, e) => t * e,
          inv: (e) => p(e, t),
          sqrt: c || ((e) => (h || (h = b(t)), h(d, e))),
          toBytes: (t) =>
            r ? (0, n.numberToBytesLE)(t, f) : (0, n.numberToBytesBE)(t, f),
          fromBytes: (t) => {
            if (t.length !== f)
              throw new Error(
                "Field.fromBytes: expected " + f + " bytes, got " + t.length,
              );
            return r ? (0, n.bytesToNumberLE)(t) : (0, n.bytesToNumberBE)(t);
          },
          invertBatch: (t) => A(d, t),
          cmov: (t, e, r) => (r ? e : t),
        });
        return Object.freeze(d);
      }
      function _(t, e) {
        if (!t.isOdd) throw new Error("Field doesn't have isOdd");
        const r = t.sqrt(e);
        return t.isOdd(r) ? r : t.neg(r);
      }
      function U(t, e) {
        if (!t.isOdd) throw new Error("Field doesn't have isOdd");
        const r = t.sqrt(e);
        return t.isOdd(r) ? t.neg(r) : r;
      }
      function P(t, e, r) {
        (void 0 === r && (r = !1), (t = (0, n.ensureBytes)("privateHash", t)));
        const o = t.length,
          s = O(e).nByteLength + 8;
        if (s < 24 || o < s || o > 1024)
          throw new Error(
            "hashToPrivateScalar: expected " +
              s +
              "-1024 bytes of input, got " +
              o,
          );
        const a = r ? (0, n.bytesToNumberLE)(t) : (0, n.bytesToNumberBE)(t);
        return l(a, e - i) + i;
      }
      function k(t) {
        if ("bigint" !== typeof t)
          throw new Error("field order must be bigint");
        const e = t.toString(2).length;
        return Math.ceil(e / 8);
      }
      function R(t) {
        const e = k(t);
        return e + Math.ceil(e / 2);
      }
      function M(t, e, r) {
        void 0 === r && (r = !1);
        const o = t.length,
          s = k(e),
          a = R(e);
        if (o < 16 || o < a || o > 1024)
          throw new Error("expected " + a + "-1024 bytes of input, got " + o);
        const c = r ? (0, n.bytesToNumberLE)(t) : (0, n.bytesToNumberBE)(t),
          u = l(c, e - i) + i;
        return r ? (0, n.numberToBytesLE)(u, s) : (0, n.numberToBytesBE)(u, s);
      }
    },
    3559: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.encodeToCurve =
          e.hashToCurve =
          e.secp256k1_hasher =
          e.schnorr =
          e.secp256k1 =
            void 0));
      const n = r(389),
        o = r(130),
        i = r(5285),
        s = r(4719),
        a = r(3185),
        c = r(4401),
        u = r(3151),
        f = {
          p: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
          ),
          n: BigInt(
            "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
          ),
          h: BigInt(1),
          a: BigInt(0),
          b: BigInt(7),
          Gx: BigInt(
            "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          ),
          Gy: BigInt(
            "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
          ),
        },
        l = BigInt(0),
        h = BigInt(1),
        d = BigInt(2),
        p = (t, e) => (t + e / d) / e;
      function y(t) {
        const e = f.p,
          r = BigInt(3),
          n = BigInt(6),
          o = BigInt(11),
          i = BigInt(22),
          s = BigInt(23),
          c = BigInt(44),
          u = BigInt(88),
          l = (t * t * t) % e,
          h = (l * l * t) % e,
          p = ((0, a.pow2)(h, r, e) * h) % e,
          y = ((0, a.pow2)(p, r, e) * h) % e,
          w = ((0, a.pow2)(y, d, e) * l) % e,
          b = ((0, a.pow2)(w, o, e) * w) % e,
          g = ((0, a.pow2)(b, i, e) * b) % e,
          m = ((0, a.pow2)(g, c, e) * g) % e,
          E = ((0, a.pow2)(m, u, e) * m) % e,
          B = ((0, a.pow2)(E, c, e) * g) % e,
          A = ((0, a.pow2)(B, r, e) * h) % e,
          x = ((0, a.pow2)(A, s, e) * b) % e,
          S = ((0, a.pow2)(x, n, e) * l) % e,
          T = (0, a.pow2)(S, d, e);
        if (!v.eql(v.sqr(T), t)) throw new Error("Cannot find square root");
        return T;
      }
      const v = (0, a.Field)(f.p, void 0, void 0, { sqrt: y });
      e.secp256k1 = (0, i.createCurve)(
        {
          ...f,
          Fp: v,
          lowS: !0,
          endo: {
            beta: BigInt(
              "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            ),
            splitScalar: (t) => {
              const e = f.n,
                r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                n = -h * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                o = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                i = r,
                s = BigInt("0x100000000000000000000000000000000"),
                c = p(i * t, e),
                u = p(-n * t, e);
              let l = (0, a.mod)(t - c * r - u * o, e),
                d = (0, a.mod)(-c * n - u * i, e);
              const y = l > s,
                v = d > s;
              if ((y && (l = e - l), v && (d = e - d), l > s || d > s))
                throw new Error("splitScalar: Endomorphism failed, k=" + t);
              return { k1neg: y, k1: l, k2neg: v, k2: d };
            },
          },
        },
        n.sha256,
      );
      const w = {};
      function b(t) {
        let e = w[t];
        if (void 0 === e) {
          const r = (0, n.sha256)(Uint8Array.from(t, (t) => t.charCodeAt(0)));
          ((e = (0, u.concatBytes)(r, r)), (w[t] = e));
        }
        for (
          var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1;
          i < r;
          i++
        )
          o[i - 1] = arguments[i];
        return (0, n.sha256)((0, u.concatBytes)(e, ...o));
      }
      const g = (t) => t.toBytes(!0).slice(1),
        m = (t) => (0, u.numberToBytesBE)(t, 32),
        E = (t) => (0, a.mod)(t, f.p),
        B = (t) => (0, a.mod)(t, f.n),
        Point = (() => e.secp256k1.Point)(),
        A = (t) => t % d === l;
      function x(t) {
        let r = e.secp256k1.utils.normPrivateKeyToScalar(t),
          n = Point.fromPrivateKey(r);
        const o = A(n.y) ? r : B(-r);
        return { scalar: o, bytes: g(n) };
      }
      function S(t) {
        (0, u.aInRange)("x", t, h, f.p);
        const e = E(t * t),
          r = E(e * t + BigInt(7));
        let n = y(r);
        A(n) || (n = E(-n));
        const o = Point.fromAffine({ x: t, y: n });
        return (o.assertValidity(), o);
      }
      const T = u.bytesToNumberBE;
      function O() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return B(T(b("BIP0340/challenge", ...e)));
      }
      function I(t) {
        return x(t).bytes;
      }
      function _(t, e, r) {
        void 0 === r && (r = (0, o.randomBytes)(32));
        const n = (0, u.ensureBytes)("message", t),
          { bytes: i, scalar: s } = x(e),
          a = (0, u.ensureBytes)("auxRand", r, 32),
          c = m(s ^ T(b("BIP0340/aux", a))),
          f = b("BIP0340/nonce", c, i, n),
          h = B(T(f));
        if (h === l) throw new Error("sign failed: k is zero");
        const { bytes: d, scalar: p } = x(h),
          y = O(d, i, n),
          v = new Uint8Array(64);
        if ((v.set(d, 0), v.set(m(B(p + y * s)), 32), !U(v, n, i)))
          throw new Error("sign: Invalid signature produced");
        return v;
      }
      function U(t, e, r) {
        const n = (0, u.ensureBytes)("signature", t, 64),
          o = (0, u.ensureBytes)("message", e),
          i = (0, u.ensureBytes)("publicKey", r, 32);
        try {
          const t = S(T(i)),
            e = T(n.subarray(0, 32));
          if (!(0, u.inRange)(e, h, f.p)) return !1;
          const r = T(n.subarray(32, 64));
          if (!(0, u.inRange)(r, h, f.n)) return !1;
          const s = O(m(e), g(t), o),
            a = Point.BASE.multiplyUnsafe(r).add(t.multiplyUnsafe(B(-s))),
            { x: c, y: l } = a.toAffine();
          return !(a.is0() || !A(l) || c !== e);
        } catch (s) {
          return !1;
        }
      }
      e.schnorr = (() => ({
        getPublicKey: I,
        sign: _,
        verify: U,
        utils: {
          randomPrivateKey: e.secp256k1.utils.randomPrivateKey,
          lift_x: S,
          pointToBytes: g,
          numberToBytesBE: u.numberToBytesBE,
          bytesToNumberBE: u.bytesToNumberBE,
          taggedHash: b,
          mod: a.mod,
        },
      }))();
      const P = (() =>
          (0, s.isogenyMap)(
            v,
            [
              [
                "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
                "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
                "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
                "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c",
              ],
              [
                "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
                "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
                "0x0000000000000000000000000000000000000000000000000000000000000001",
              ],
              [
                "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
                "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
                "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
                "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84",
              ],
              [
                "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
                "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
                "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
                "0x0000000000000000000000000000000000000000000000000000000000000001",
              ],
            ].map((t) => t.map((t) => BigInt(t))),
          ))(),
        k = (() =>
          (0, c.mapToCurveSimpleSWU)(v, {
            A: BigInt(
              "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533",
            ),
            B: BigInt("1771"),
            Z: v.create(BigInt("-11")),
          }))();
      ((e.secp256k1_hasher = (() =>
        (0, s.createHasher)(
          e.secp256k1.Point,
          (t) => {
            const { x: e, y: r } = k(v.create(t[0]));
            return P(e, r);
          },
          {
            DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
            encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
            p: v.ORDER,
            m: 1,
            k: 128,
            expand: "xmd",
            hash: n.sha256,
          },
        ))()),
        (e.hashToCurve = (() => e.secp256k1_hasher.hashToCurve)()),
        (e.encodeToCurve = (() => e.secp256k1_hasher.encodeToCurve)()));
    },
    3695: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ripemd160 = e.RIPEMD160 = e.md5 = e.MD5 = e.sha1 = e.SHA1 = void 0));
      const n = r(825),
        o = r(130),
        i = Uint32Array.from([
          1732584193, 4023233417, 2562383102, 271733878, 3285377520,
        ]),
        s = new Uint32Array(80);
      class SHA1 extends n.HashMD {
        constructor() {
          (super(64, 20, 8, !1),
            (this.A = 0 | i[0]),
            (this.B = 0 | i[1]),
            (this.C = 0 | i[2]),
            (this.D = 0 | i[3]),
            (this.E = 0 | i[4]));
        }
        get() {
          const { A: t, B: e, C: r, D: n, E: o } = this;
          return [t, e, r, n, o];
        }
        set(t, e, r, n, o) {
          ((this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | o));
        }
        process(t, e) {
          for (let n = 0; n < 16; n++, e += 4) s[n] = t.getUint32(e, !1);
          for (let n = 16; n < 80; n++)
            s[n] = (0, o.rotl)(s[n - 3] ^ s[n - 8] ^ s[n - 14] ^ s[n - 16], 1);
          let { A: r, B: i, C: a, D: c, E: u } = this;
          for (let f = 0; f < 80; f++) {
            let t, e;
            f < 20
              ? ((t = (0, n.Chi)(i, a, c)), (e = 1518500249))
              : f < 40
                ? ((t = i ^ a ^ c), (e = 1859775393))
                : f < 60
                  ? ((t = (0, n.Maj)(i, a, c)), (e = 2400959708))
                  : ((t = i ^ a ^ c), (e = 3395469782));
            const l = ((0, o.rotl)(r, 5) + t + u + e + s[f]) | 0;
            ((u = c), (c = a), (a = (0, o.rotl)(i, 30)), (i = r), (r = l));
          }
          ((r = (r + this.A) | 0),
            (i = (i + this.B) | 0),
            (a = (a + this.C) | 0),
            (c = (c + this.D) | 0),
            (u = (u + this.E) | 0),
            this.set(r, i, a, c, u));
        }
        roundClean() {
          (0, o.clean)(s);
        }
        destroy() {
          (this.set(0, 0, 0, 0, 0), (0, o.clean)(this.buffer));
        }
      }
      ((e.SHA1 = SHA1), (e.sha1 = (0, o.createHasher)(() => new SHA1())));
      const a = Math.pow(2, 32),
        c = Array.from({ length: 64 }, (t, e) =>
          Math.floor(a * Math.abs(Math.sin(e + 1))),
        ),
        u = i.slice(0, 4),
        f = new Uint32Array(16);
      class MD5 extends n.HashMD {
        constructor() {
          (super(64, 16, 8, !0),
            (this.A = 0 | u[0]),
            (this.B = 0 | u[1]),
            (this.C = 0 | u[2]),
            (this.D = 0 | u[3]));
        }
        get() {
          const { A: t, B: e, C: r, D: n } = this;
          return [t, e, r, n];
        }
        set(t, e, r, n) {
          ((this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n));
        }
        process(t, e) {
          for (let n = 0; n < 16; n++, e += 4) f[n] = t.getUint32(e, !0);
          let { A: r, B: i, C: s, D: a } = this;
          for (let u = 0; u < 64; u++) {
            let t, e, l;
            (u < 16
              ? ((t = (0, n.Chi)(i, s, a)), (e = u), (l = [7, 12, 17, 22]))
              : u < 32
                ? ((t = (0, n.Chi)(a, i, s)),
                  (e = (5 * u + 1) % 16),
                  (l = [5, 9, 14, 20]))
                : u < 48
                  ? ((t = i ^ s ^ a),
                    (e = (3 * u + 5) % 16),
                    (l = [4, 11, 16, 23]))
                  : ((t = s ^ (i | ~a)),
                    (e = (7 * u) % 16),
                    (l = [6, 10, 15, 21])),
              (t = t + r + c[u] + f[e]),
              (r = a),
              (a = s),
              (s = i),
              (i += (0, o.rotl)(t, l[u % 4])));
          }
          ((r = (r + this.A) | 0),
            (i = (i + this.B) | 0),
            (s = (s + this.C) | 0),
            (a = (a + this.D) | 0),
            this.set(r, i, s, a));
        }
        roundClean() {
          (0, o.clean)(f);
        }
        destroy() {
          (this.set(0, 0, 0, 0), (0, o.clean)(this.buffer));
        }
      }
      ((e.MD5 = MD5), (e.md5 = (0, o.createHasher)(() => new MD5())));
      const l = Uint8Array.from([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        h = (() => Uint8Array.from(new Array(16).fill(0).map((t, e) => e)))(),
        d = (() => h.map((t) => (9 * t + 5) % 16))(),
        p = (() => {
          const t = [h],
            e = [d],
            r = [t, e];
          for (let n = 0; n < 4; n++)
            for (let t of r) t.push(t[n].map((t) => l[t]));
          return r;
        })(),
        y = (() => p[0])(),
        v = (() => p[1])(),
        w = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((t) => Uint8Array.from(t)),
        b = y.map((t, e) => t.map((t) => w[e][t])),
        g = v.map((t, e) => t.map((t) => w[e][t])),
        m = Uint32Array.from([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        E = Uint32Array.from([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]);
      function B(t, e, r, n) {
        return 0 === t
          ? e ^ r ^ n
          : 1 === t
            ? (e & r) | (~e & n)
            : 2 === t
              ? (e | ~r) ^ n
              : 3 === t
                ? (e & n) | (r & ~n)
                : e ^ (r | ~n);
      }
      const A = new Uint32Array(16);
      class RIPEMD160 extends n.HashMD {
        constructor() {
          (super(64, 20, 8, !0),
            (this.h0 = 1732584193),
            (this.h1 = -271733879),
            (this.h2 = -1732584194),
            (this.h3 = 271733878),
            (this.h4 = -1009589776));
        }
        get() {
          const { h0: t, h1: e, h2: r, h3: n, h4: o } = this;
          return [t, e, r, n, o];
        }
        set(t, e, r, n, o) {
          ((this.h0 = 0 | t),
            (this.h1 = 0 | e),
            (this.h2 = 0 | r),
            (this.h3 = 0 | n),
            (this.h4 = 0 | o));
        }
        process(t, e) {
          for (let o = 0; o < 16; o++, e += 4) A[o] = t.getUint32(e, !0);
          let r = 0 | this.h0,
            n = r,
            i = 0 | this.h1,
            s = i,
            a = 0 | this.h2,
            c = a,
            u = 0 | this.h3,
            f = u,
            l = 0 | this.h4,
            h = l;
          for (let d = 0; d < 5; d++) {
            const t = 4 - d,
              e = m[d],
              p = E[d],
              w = y[d],
              x = v[d],
              S = b[d],
              T = g[d];
            for (let n = 0; n < 16; n++) {
              const t =
                ((0, o.rotl)(r + B(d, i, a, u) + A[w[n]] + e, S[n]) + l) | 0;
              ((r = l),
                (l = u),
                (u = 0 | (0, o.rotl)(a, 10)),
                (a = i),
                (i = t));
            }
            for (let r = 0; r < 16; r++) {
              const e =
                ((0, o.rotl)(n + B(t, s, c, f) + A[x[r]] + p, T[r]) + h) | 0;
              ((n = h),
                (h = f),
                (f = 0 | (0, o.rotl)(c, 10)),
                (c = s),
                (s = e));
            }
          }
          this.set(
            (this.h1 + a + f) | 0,
            (this.h2 + u + h) | 0,
            (this.h3 + l + n) | 0,
            (this.h4 + r + s) | 0,
            (this.h0 + i + c) | 0,
          );
        }
        roundClean() {
          (0, o.clean)(A);
        }
        destroy() {
          ((this.destroyed = !0),
            (0, o.clean)(this.buffer),
            this.set(0, 0, 0, 0, 0));
        }
      }
      ((e.RIPEMD160 = RIPEMD160),
        (e.ripemd160 = (0, o.createHasher)(() => new RIPEMD160())));
    },
    4398: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.blake2b = e.BLAKE2b = void 0));
      const n = r(4399);
      ((e.BLAKE2b = n.BLAKE2b), (e.blake2b = n.blake2b));
    },
    4399: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.blake2s = e.BLAKE2s = e.blake2b = e.BLAKE2b = e.BLAKE2 = void 0),
        (e.compress = h));
      const n = r(4400),
        o = r(825),
        i = r(395),
        s = r(130),
        a = Uint32Array.from([
          4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
          1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199,
          2600822924, 4215389547, 528734635, 327033209, 1541459225,
        ]),
        c = new Uint32Array(32);
      function u(t, e, r, n, o, s) {
        const a = o[s],
          u = o[s + 1];
        let f = c[2 * t],
          l = c[2 * t + 1],
          h = c[2 * e],
          d = c[2 * e + 1],
          p = c[2 * r],
          y = c[2 * r + 1],
          v = c[2 * n],
          w = c[2 * n + 1],
          b = i.add3L(f, h, a);
        ((l = i.add3H(b, l, d, u)),
          (f = 0 | b),
          ({ Dh: w, Dl: v } = { Dh: w ^ l, Dl: v ^ f }),
          ({ Dh: w, Dl: v } = { Dh: i.rotr32H(w, v), Dl: i.rotr32L(w, v) }),
          ({ h: y, l: p } = i.add(y, p, w, v)),
          ({ Bh: d, Bl: h } = { Bh: d ^ y, Bl: h ^ p }),
          ({ Bh: d, Bl: h } = {
            Bh: i.rotrSH(d, h, 24),
            Bl: i.rotrSL(d, h, 24),
          }),
          (c[2 * t] = f),
          (c[2 * t + 1] = l),
          (c[2 * e] = h),
          (c[2 * e + 1] = d),
          (c[2 * r] = p),
          (c[2 * r + 1] = y),
          (c[2 * n] = v),
          (c[2 * n + 1] = w));
      }
      function f(t, e, r, n, o, s) {
        const a = o[s],
          u = o[s + 1];
        let f = c[2 * t],
          l = c[2 * t + 1],
          h = c[2 * e],
          d = c[2 * e + 1],
          p = c[2 * r],
          y = c[2 * r + 1],
          v = c[2 * n],
          w = c[2 * n + 1],
          b = i.add3L(f, h, a);
        ((l = i.add3H(b, l, d, u)),
          (f = 0 | b),
          ({ Dh: w, Dl: v } = { Dh: w ^ l, Dl: v ^ f }),
          ({ Dh: w, Dl: v } = {
            Dh: i.rotrSH(w, v, 16),
            Dl: i.rotrSL(w, v, 16),
          }),
          ({ h: y, l: p } = i.add(y, p, w, v)),
          ({ Bh: d, Bl: h } = { Bh: d ^ y, Bl: h ^ p }),
          ({ Bh: d, Bl: h } = {
            Bh: i.rotrBH(d, h, 63),
            Bl: i.rotrBL(d, h, 63),
          }),
          (c[2 * t] = f),
          (c[2 * t + 1] = l),
          (c[2 * e] = h),
          (c[2 * e + 1] = d),
          (c[2 * r] = p),
          (c[2 * r + 1] = y),
          (c[2 * n] = v),
          (c[2 * n + 1] = w));
      }
      function l(t, e, r, n, o) {
        if ((void 0 === e && (e = {}), (0, s.anumber)(r), t < 0 || t > r))
          throw new Error("outputLen bigger than keyLen");
        const { key: i, salt: a, personalization: c } = e;
        if (void 0 !== i && (i.length < 1 || i.length > r))
          throw new Error("key length must be undefined or 1.." + r);
        if (void 0 !== a && a.length !== n)
          throw new Error("salt must be undefined or " + n);
        if (void 0 !== c && c.length !== o)
          throw new Error("personalization must be undefined or " + o);
      }
      class BLAKE2 extends s.Hash {
        constructor(t, e) {
          (super(),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.length = 0),
            (this.pos = 0),
            (0, s.anumber)(t),
            (0, s.anumber)(e),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.buffer = new Uint8Array(t)),
            (this.buffer32 = (0, s.u32)(this.buffer)));
        }
        update(t) {
          ((0, s.aexists)(this), (t = (0, s.toBytes)(t)), (0, s.abytes)(t));
          const { blockLen: e, buffer: r, buffer32: n } = this,
            o = t.length,
            i = t.byteOffset,
            a = t.buffer;
          for (let c = 0; c < o; ) {
            this.pos === e &&
              ((0, s.swap32IfBE)(n),
              this.compress(n, 0, !1),
              (0, s.swap32IfBE)(n),
              (this.pos = 0));
            const u = Math.min(e - this.pos, o - c),
              f = i + c;
            if (u !== e || f % 4 || !(c + u < o))
              (r.set(t.subarray(c, c + u), this.pos),
                (this.pos += u),
                (this.length += u),
                (c += u));
            else {
              const t = new Uint32Array(a, f, Math.floor((o - c) / 4));
              (0, s.swap32IfBE)(t);
              for (let r = 0; c + e < o; r += n.length, c += e)
                ((this.length += e), this.compress(t, r, !1));
              (0, s.swap32IfBE)(t);
            }
          }
          return this;
        }
        digestInto(t) {
          ((0, s.aexists)(this), (0, s.aoutput)(t, this));
          const { pos: e, buffer32: r } = this;
          ((this.finished = !0),
            (0, s.clean)(this.buffer.subarray(e)),
            (0, s.swap32IfBE)(r),
            this.compress(r, 0, !0),
            (0, s.swap32IfBE)(r));
          const n = (0, s.u32)(t);
          this.get().forEach((t, e) => (n[e] = (0, s.swap8IfBE)(t)));
        }
        digest() {
          const { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          const r = t.slice(0, e);
          return (this.destroy(), r);
        }
        _cloneInto(t) {
          const {
            buffer: e,
            length: r,
            finished: n,
            destroyed: o,
            outputLen: i,
            pos: s,
          } = this;
          return (
            t || (t = new this.constructor({ dkLen: i })),
            t.set(...this.get()),
            t.buffer.set(e),
            (t.destroyed = o),
            (t.finished = n),
            (t.length = r),
            (t.pos = s),
            (t.outputLen = i),
            t
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      e.BLAKE2 = BLAKE2;
      class BLAKE2b extends BLAKE2 {
        constructor(t) {
          void 0 === t && (t = {});
          const e = void 0 === t.dkLen ? 64 : t.dkLen;
          (super(128, e),
            (this.v0l = 0 | a[0]),
            (this.v0h = 0 | a[1]),
            (this.v1l = 0 | a[2]),
            (this.v1h = 0 | a[3]),
            (this.v2l = 0 | a[4]),
            (this.v2h = 0 | a[5]),
            (this.v3l = 0 | a[6]),
            (this.v3h = 0 | a[7]),
            (this.v4l = 0 | a[8]),
            (this.v4h = 0 | a[9]),
            (this.v5l = 0 | a[10]),
            (this.v5h = 0 | a[11]),
            (this.v6l = 0 | a[12]),
            (this.v6h = 0 | a[13]),
            (this.v7l = 0 | a[14]),
            (this.v7h = 0 | a[15]),
            l(e, t, 64, 16, 16));
          let { key: r, personalization: n, salt: o } = t,
            i = 0;
          if (
            (void 0 !== r && ((r = (0, s.toBytes)(r)), (i = r.length)),
            (this.v0l ^= this.outputLen | (i << 8) | 65536 | (1 << 24)),
            void 0 !== o)
          ) {
            o = (0, s.toBytes)(o);
            const t = (0, s.u32)(o);
            ((this.v4l ^= (0, s.swap8IfBE)(t[0])),
              (this.v4h ^= (0, s.swap8IfBE)(t[1])),
              (this.v5l ^= (0, s.swap8IfBE)(t[2])),
              (this.v5h ^= (0, s.swap8IfBE)(t[3])));
          }
          if (void 0 !== n) {
            n = (0, s.toBytes)(n);
            const t = (0, s.u32)(n);
            ((this.v6l ^= (0, s.swap8IfBE)(t[0])),
              (this.v6h ^= (0, s.swap8IfBE)(t[1])),
              (this.v7l ^= (0, s.swap8IfBE)(t[2])),
              (this.v7h ^= (0, s.swap8IfBE)(t[3])));
          }
          if (void 0 !== r) {
            const t = new Uint8Array(this.blockLen);
            (t.set(r), this.update(t));
          }
        }
        get() {
          let {
            v0l: t,
            v0h: e,
            v1l: r,
            v1h: n,
            v2l: o,
            v2h: i,
            v3l: s,
            v3h: a,
            v4l: c,
            v4h: u,
            v5l: f,
            v5h: l,
            v6l: h,
            v6h: d,
            v7l: p,
            v7h: y,
          } = this;
          return [t, e, r, n, o, i, s, a, c, u, f, l, h, d, p, y];
        }
        set(t, e, r, n, o, i, s, a, c, u, f, l, h, d, p, y) {
          ((this.v0l = 0 | t),
            (this.v0h = 0 | e),
            (this.v1l = 0 | r),
            (this.v1h = 0 | n),
            (this.v2l = 0 | o),
            (this.v2h = 0 | i),
            (this.v3l = 0 | s),
            (this.v3h = 0 | a),
            (this.v4l = 0 | c),
            (this.v4h = 0 | u),
            (this.v5l = 0 | f),
            (this.v5h = 0 | l),
            (this.v6l = 0 | h),
            (this.v6h = 0 | d),
            (this.v7l = 0 | p),
            (this.v7h = 0 | y));
        }
        compress(t, e, r) {
          (this.get().forEach((t, e) => (c[e] = t)), c.set(a, 16));
          let { h: o, l: l } = i.fromBig(BigInt(this.length));
          ((c[24] = a[8] ^ l),
            (c[25] = a[9] ^ o),
            r && ((c[28] = ~c[28]), (c[29] = ~c[29])));
          let h = 0;
          const d = n.BSIGMA;
          for (let n = 0; n < 12; n++)
            (u(0, 4, 8, 12, t, e + 2 * d[h++]),
              f(0, 4, 8, 12, t, e + 2 * d[h++]),
              u(1, 5, 9, 13, t, e + 2 * d[h++]),
              f(1, 5, 9, 13, t, e + 2 * d[h++]),
              u(2, 6, 10, 14, t, e + 2 * d[h++]),
              f(2, 6, 10, 14, t, e + 2 * d[h++]),
              u(3, 7, 11, 15, t, e + 2 * d[h++]),
              f(3, 7, 11, 15, t, e + 2 * d[h++]),
              u(0, 5, 10, 15, t, e + 2 * d[h++]),
              f(0, 5, 10, 15, t, e + 2 * d[h++]),
              u(1, 6, 11, 12, t, e + 2 * d[h++]),
              f(1, 6, 11, 12, t, e + 2 * d[h++]),
              u(2, 7, 8, 13, t, e + 2 * d[h++]),
              f(2, 7, 8, 13, t, e + 2 * d[h++]),
              u(3, 4, 9, 14, t, e + 2 * d[h++]),
              f(3, 4, 9, 14, t, e + 2 * d[h++]));
          ((this.v0l ^= c[0] ^ c[16]),
            (this.v0h ^= c[1] ^ c[17]),
            (this.v1l ^= c[2] ^ c[18]),
            (this.v1h ^= c[3] ^ c[19]),
            (this.v2l ^= c[4] ^ c[20]),
            (this.v2h ^= c[5] ^ c[21]),
            (this.v3l ^= c[6] ^ c[22]),
            (this.v3h ^= c[7] ^ c[23]),
            (this.v4l ^= c[8] ^ c[24]),
            (this.v4h ^= c[9] ^ c[25]),
            (this.v5l ^= c[10] ^ c[26]),
            (this.v5h ^= c[11] ^ c[27]),
            (this.v6l ^= c[12] ^ c[28]),
            (this.v6h ^= c[13] ^ c[29]),
            (this.v7l ^= c[14] ^ c[30]),
            (this.v7h ^= c[15] ^ c[31]),
            (0, s.clean)(c));
        }
        destroy() {
          ((this.destroyed = !0),
            (0, s.clean)(this.buffer32),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      function h(t, e, r, o, i, s, a, c, u, f, l, h, d, p, y, v, w, b, g, m) {
        let E = 0;
        for (let B = 0; B < o; B++)
          (({ a: i, b: u, c: d, d: w } = (0, n.G1s)(i, u, d, w, r[e + t[E++]])),
            ({
              a: i,
              b: u,
              c: d,
              d: w,
            } = (0, n.G2s)(i, u, d, w, r[e + t[E++]])),
            ({
              a: s,
              b: f,
              c: p,
              d: b,
            } = (0, n.G1s)(s, f, p, b, r[e + t[E++]])),
            ({
              a: s,
              b: f,
              c: p,
              d: b,
            } = (0, n.G2s)(s, f, p, b, r[e + t[E++]])),
            ({
              a: a,
              b: l,
              c: y,
              d: g,
            } = (0, n.G1s)(a, l, y, g, r[e + t[E++]])),
            ({
              a: a,
              b: l,
              c: y,
              d: g,
            } = (0, n.G2s)(a, l, y, g, r[e + t[E++]])),
            ({
              a: c,
              b: h,
              c: v,
              d: m,
            } = (0, n.G1s)(c, h, v, m, r[e + t[E++]])),
            ({
              a: c,
              b: h,
              c: v,
              d: m,
            } = (0, n.G2s)(c, h, v, m, r[e + t[E++]])),
            ({
              a: i,
              b: f,
              c: y,
              d: m,
            } = (0, n.G1s)(i, f, y, m, r[e + t[E++]])),
            ({
              a: i,
              b: f,
              c: y,
              d: m,
            } = (0, n.G2s)(i, f, y, m, r[e + t[E++]])),
            ({
              a: s,
              b: l,
              c: v,
              d: w,
            } = (0, n.G1s)(s, l, v, w, r[e + t[E++]])),
            ({
              a: s,
              b: l,
              c: v,
              d: w,
            } = (0, n.G2s)(s, l, v, w, r[e + t[E++]])),
            ({
              a: a,
              b: h,
              c: d,
              d: b,
            } = (0, n.G1s)(a, h, d, b, r[e + t[E++]])),
            ({
              a: a,
              b: h,
              c: d,
              d: b,
            } = (0, n.G2s)(a, h, d, b, r[e + t[E++]])),
            ({
              a: c,
              b: u,
              c: p,
              d: g,
            } = (0, n.G1s)(c, u, p, g, r[e + t[E++]])),
            ({
              a: c,
              b: u,
              c: p,
              d: g,
            } = (0, n.G2s)(c, u, p, g, r[e + t[E++]])));
        return {
          v0: i,
          v1: s,
          v2: a,
          v3: c,
          v4: u,
          v5: f,
          v6: l,
          v7: h,
          v8: d,
          v9: p,
          v10: y,
          v11: v,
          v12: w,
          v13: b,
          v14: g,
          v15: m,
        };
      }
      ((e.BLAKE2b = BLAKE2b),
        (e.blake2b = (0, s.createOptHasher)((t) => new BLAKE2b(t))));
      const d = o.SHA256_IV;
      class BLAKE2s extends BLAKE2 {
        constructor(t) {
          void 0 === t && (t = {});
          const e = void 0 === t.dkLen ? 32 : t.dkLen;
          (super(64, e),
            (this.v0 = 0 | d[0]),
            (this.v1 = 0 | d[1]),
            (this.v2 = 0 | d[2]),
            (this.v3 = 0 | d[3]),
            (this.v4 = 0 | d[4]),
            (this.v5 = 0 | d[5]),
            (this.v6 = 0 | d[6]),
            (this.v7 = 0 | d[7]),
            l(e, t, 32, 8, 8));
          let { key: r, personalization: n, salt: o } = t,
            i = 0;
          if (
            (void 0 !== r && ((r = (0, s.toBytes)(r)), (i = r.length)),
            (this.v0 ^= this.outputLen | (i << 8) | 65536 | (1 << 24)),
            void 0 !== o)
          ) {
            o = (0, s.toBytes)(o);
            const t = (0, s.u32)(o);
            ((this.v4 ^= (0, s.swap8IfBE)(t[0])),
              (this.v5 ^= (0, s.swap8IfBE)(t[1])));
          }
          if (void 0 !== n) {
            n = (0, s.toBytes)(n);
            const t = (0, s.u32)(n);
            ((this.v6 ^= (0, s.swap8IfBE)(t[0])),
              (this.v7 ^= (0, s.swap8IfBE)(t[1])));
          }
          if (void 0 !== r) {
            (0, s.abytes)(r);
            const t = new Uint8Array(this.blockLen);
            (t.set(r), this.update(t));
          }
        }
        get() {
          const {
            v0: t,
            v1: e,
            v2: r,
            v3: n,
            v4: o,
            v5: i,
            v6: s,
            v7: a,
          } = this;
          return [t, e, r, n, o, i, s, a];
        }
        set(t, e, r, n, o, i, s, a) {
          ((this.v0 = 0 | t),
            (this.v1 = 0 | e),
            (this.v2 = 0 | r),
            (this.v3 = 0 | n),
            (this.v4 = 0 | o),
            (this.v5 = 0 | i),
            (this.v6 = 0 | s),
            (this.v7 = 0 | a));
        }
        compress(t, e, r) {
          const { h: o, l: s } = i.fromBig(BigInt(this.length)),
            {
              v0: a,
              v1: c,
              v2: u,
              v3: f,
              v4: l,
              v5: p,
              v6: y,
              v7: v,
              v8: w,
              v9: b,
              v10: g,
              v11: m,
              v12: E,
              v13: B,
              v14: A,
              v15: x,
            } = h(
              n.BSIGMA,
              e,
              t,
              10,
              this.v0,
              this.v1,
              this.v2,
              this.v3,
              this.v4,
              this.v5,
              this.v6,
              this.v7,
              d[0],
              d[1],
              d[2],
              d[3],
              s ^ d[4],
              o ^ d[5],
              r ? ~d[6] : d[6],
              d[7],
            );
          ((this.v0 ^= a ^ w),
            (this.v1 ^= c ^ b),
            (this.v2 ^= u ^ g),
            (this.v3 ^= f ^ m),
            (this.v4 ^= l ^ E),
            (this.v5 ^= p ^ B),
            (this.v6 ^= y ^ A),
            (this.v7 ^= v ^ x));
        }
        destroy() {
          ((this.destroyed = !0),
            (0, s.clean)(this.buffer32),
            this.set(0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      ((e.BLAKE2s = BLAKE2s),
        (e.blake2s = (0, s.createOptHasher)((t) => new BLAKE2s(t))));
    },
    4400: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BSIGMA = void 0),
        (e.G1s = o),
        (e.G2s = i));
      const n = r(130);
      function o(t, e, r, o, i) {
        return (
          (t = (t + e + i) | 0),
          (o = (0, n.rotr)(o ^ t, 16)),
          (r = (r + o) | 0),
          (e = (0, n.rotr)(e ^ r, 12)),
          { a: t, b: e, c: r, d: o }
        );
      }
      function i(t, e, r, o, i) {
        return (
          (t = (t + e + i) | 0),
          (o = (0, n.rotr)(o ^ t, 8)),
          (r = (r + o) | 0),
          (e = (0, n.rotr)(e ^ r, 7)),
          { a: t, b: e, c: r, d: o }
        );
      }
      e.BSIGMA = Uint8Array.from([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
        15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14,
        3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
        9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0,
        11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7,
        6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
        6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6,
        1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
        12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
        11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13,
        12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1,
        11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1,
        9,
      ]);
    },
    4401: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DER = e.DERErr = void 0),
        (e._legacyHelperEquat = d),
        (e._legacyHelperNormPriv = p),
        (e.weierstrassN = y),
        (e.weierstrassPoints = v),
        (e.ecdsa = b),
        (e.weierstrass = A),
        (e.SWUFpSqrtRatio = x),
        (e.mapToCurveSimpleSWU = S));
      const n = r(379),
        o = r(3151),
        i = r(4402),
        s = r(3185);
      function a(t) {
        (void 0 !== t.lowS && (0, o.abool)("lowS", t.lowS),
          void 0 !== t.prehash && (0, o.abool)("prehash", t.prehash));
      }
      class DERErr extends Error {
        constructor(t) {
          (void 0 === t && (t = ""), super(t));
        }
      }
      ((e.DERErr = DERErr),
        (e.DER = {
          Err: DERErr,
          _tlv: {
            encode: (t, r) => {
              const { Err: n } = e.DER;
              if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
              if (1 & r.length) throw new n("tlv.encode: unpadded data");
              const i = r.length / 2,
                s = (0, o.numberToHexUnpadded)(i);
              if ((s.length / 2) & 128)
                throw new n("tlv.encode: long form length too big");
              const a =
                  i > 127
                    ? (0, o.numberToHexUnpadded)((s.length / 2) | 128)
                    : "",
                c = (0, o.numberToHexUnpadded)(t);
              return c + a + s + r;
            },
            decode(t, r) {
              const { Err: n } = e.DER;
              let o = 0;
              if (t < 0 || t > 256) throw new n("tlv.encode: wrong tag");
              if (r.length < 2 || r[o++] !== t)
                throw new n("tlv.decode: wrong tlv");
              const i = r[o++],
                s = !!(128 & i);
              let a = 0;
              if (s) {
                const t = 127 & i;
                if (!t)
                  throw new n(
                    "tlv.decode(long): indefinite length not supported",
                  );
                if (t > 4)
                  throw new n("tlv.decode(long): byte length is too big");
                const e = r.subarray(o, o + t);
                if (e.length !== t)
                  throw new n("tlv.decode: length bytes not complete");
                if (0 === e[0])
                  throw new n("tlv.decode(long): zero leftmost byte");
                for (const r of e) a = (a << 8) | r;
                if (((o += t), a < 128))
                  throw new n("tlv.decode(long): not minimal encoding");
              } else a = i;
              const c = r.subarray(o, o + a);
              if (c.length !== a) throw new n("tlv.decode: wrong value length");
              return { v: c, l: r.subarray(o + a) };
            },
          },
          _int: {
            encode(t) {
              const { Err: r } = e.DER;
              if (t < c)
                throw new r("integer: negative integers are not allowed");
              let n = (0, o.numberToHexUnpadded)(t);
              if (
                (8 & Number.parseInt(n[0], 16) && (n = "00" + n), 1 & n.length)
              )
                throw new r("unexpected DER parsing assertion: unpadded hex");
              return n;
            },
            decode(t) {
              const { Err: r } = e.DER;
              if (128 & t[0])
                throw new r("invalid signature integer: negative");
              if (0 === t[0] && !(128 & t[1]))
                throw new r(
                  "invalid signature integer: unnecessary leading zero",
                );
              return (0, o.bytesToNumberBE)(t);
            },
          },
          toSig(t) {
            const { Err: r, _int: n, _tlv: i } = e.DER,
              s = (0, o.ensureBytes)("signature", t),
              { v: a, l: c } = i.decode(48, s);
            if (c.length)
              throw new r("invalid signature: left bytes after parsing");
            const { v: u, l: f } = i.decode(2, a),
              { v: l, l: h } = i.decode(2, f);
            if (h.length)
              throw new r("invalid signature: left bytes after parsing");
            return { r: n.decode(u), s: n.decode(l) };
          },
          hexFromSig(t) {
            const { _tlv: r, _int: n } = e.DER,
              o = r.encode(2, n.encode(t.r)),
              i = r.encode(2, n.encode(t.s)),
              s = o + i;
            return r.encode(48, s);
          },
        }));
      const c = BigInt(0),
        u = BigInt(1),
        f = BigInt(2),
        l = BigInt(3),
        h = BigInt(4);
      function d(t, e, r) {
        function n(n) {
          const o = t.sqr(n),
            i = t.mul(o, n);
          return t.add(t.add(i, t.mul(n, e)), r);
        }
        return n;
      }
      function p(t, e, r) {
        const { BYTES: n } = t;
        function i(i) {
          let s;
          if ("bigint" === typeof i) s = i;
          else {
            let r = (0, o.ensureBytes)("private key", i);
            if (e) {
              if (!e.includes(2 * r.length))
                throw new Error("invalid private key");
              const t = new Uint8Array(n);
              (t.set(r, t.length - r.length), (r = t));
            }
            try {
              s = t.fromBytes(r);
            } catch (a) {
              throw new Error(
                `invalid private key: expected ui8a of size ${n}, got ${typeof i}`,
              );
            }
          }
          if ((r && (s = t.create(s)), !t.isValidNot0(s)))
            throw new Error("invalid private key: out of range [1..N-1]");
          return s;
        }
        return i;
      }
      function y(t, e) {
        void 0 === e && (e = {});
        const { Fp: r, Fn: n } = (0, i._createCurveFields)("weierstrass", t, e),
          { h: s, n: a } = t;
        (0, o._validateObject)(
          e,
          {},
          {
            allowInfinityPoint: "boolean",
            clearCofactor: "function",
            isTorsionFree: "function",
            fromBytes: "function",
            toBytes: "function",
            endo: "object",
            wrapPrivateKey: "boolean",
          },
        );
        const { endo: f } = e;
        if (
          f &&
          (!r.is0(t.a) ||
            "bigint" !== typeof f.beta ||
            "function" !== typeof f.splitScalar)
        )
          throw new Error(
            'invalid endo: expected "beta": bigint and "splitScalar": function',
          );
        function y() {
          if (!r.isOdd)
            throw new Error(
              "compression is not supported: Field does not have .isOdd()",
            );
        }
        function v(t, e, n) {
          const { x: i, y: s } = e.toAffine(),
            a = r.toBytes(i);
          if (((0, o.abool)("isCompressed", n), n)) {
            y();
            const t = !r.isOdd(s);
            return (0, o.concatBytes)(w(t), a);
          }
          return (0, o.concatBytes)(Uint8Array.of(4), a, r.toBytes(s));
        }
        function b(t) {
          (0, o.abytes)(t);
          const e = r.BYTES,
            n = e + 1,
            i = 2 * e + 1,
            s = t.length,
            a = t[0],
            c = t.subarray(1);
          if (s !== n || (2 !== a && 3 !== a)) {
            if (s === i && 4 === a) {
              const t = r.fromBytes(c.subarray(0 * e, 1 * e)),
                n = r.fromBytes(c.subarray(1 * e, 2 * e));
              if (!B(t, n)) throw new Error("bad point: is not on curve");
              return { x: t, y: n };
            }
            throw new Error(
              `bad point: got length ${s}, expected compressed=${n} or uncompressed=${i}`,
            );
          }
          {
            const t = r.fromBytes(c);
            if (!r.isValid(t))
              throw new Error("bad point: is not on curve, wrong x");
            const e = E(t);
            let n;
            try {
              n = r.sqrt(e);
            } catch (u) {
              const t = u instanceof Error ? ": " + u.message : "";
              throw new Error("bad point: is not on curve, sqrt error" + t);
            }
            y();
            const o = r.isOdd(n),
              i = 1 === (1 & a);
            return (i !== o && (n = r.neg(n)), { x: t, y: n });
          }
        }
        const g = e.toBytes || v,
          m = e.fromBytes || b,
          E = d(r, t.a, t.b);
        function B(t, e) {
          const n = r.sqr(e),
            o = E(t);
          return r.eql(n, o);
        }
        if (!B(t.Gx, t.Gy))
          throw new Error("bad curve params: generator point");
        const A = r.mul(r.pow(t.a, l), h),
          x = r.mul(r.sqr(t.b), BigInt(27));
        if (r.is0(r.add(A, x))) throw new Error("bad curve params: a or b");
        function S(t, e, n) {
          if ((void 0 === n && (n = !1), !r.isValid(e) || (n && r.is0(e))))
            throw new Error("bad point coordinate " + t);
          return e;
        }
        function T(t) {
          if (!(t instanceof Point))
            throw new Error("ProjectivePoint expected");
        }
        const O = (0, o.memoized)((t, e) => {
            const { px: n, py: o, pz: i } = t;
            if (r.eql(i, r.ONE)) return { x: n, y: o };
            const s = t.is0();
            null == e && (e = s ? r.ONE : r.inv(i));
            const a = r.mul(n, e),
              c = r.mul(o, e),
              u = r.mul(i, e);
            if (s) return { x: r.ZERO, y: r.ZERO };
            if (!r.eql(u, r.ONE)) throw new Error("invZ was invalid");
            return { x: a, y: c };
          }),
          I = (0, o.memoized)((t) => {
            if (t.is0()) {
              if (e.allowInfinityPoint && !r.is0(t.py)) return;
              throw new Error("bad point: ZERO");
            }
            const { x: n, y: o } = t.toAffine();
            if (!r.isValid(n) || !r.isValid(o))
              throw new Error("bad point: x or y not field elements");
            if (!B(n, o)) throw new Error("bad point: equation left != right");
            if (!t.isTorsionFree())
              throw new Error("bad point: not in prime-order subgroup");
            return !0;
          });
        function _(t, e, n, o, s) {
          return (
            (n = new Point(r.mul(n.px, t), n.py, n.pz)),
            (e = (0, i.negateCt)(o, e)),
            (n = (0, i.negateCt)(s, n)),
            e.add(n)
          );
        }
        class Point {
          constructor(t, e, r) {
            ((this.px = S("x", t)),
              (this.py = S("y", e, !0)),
              (this.pz = S("z", r)),
              Object.freeze(this));
          }
          static fromAffine(t) {
            const { x: e, y: n } = t || {};
            if (!t || !r.isValid(e) || !r.isValid(n))
              throw new Error("invalid affine point");
            if (t instanceof Point)
              throw new Error("projective point not allowed");
            return r.is0(e) && r.is0(n) ? Point.ZERO : new Point(e, n, r.ONE);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static normalizeZ(t) {
            return (0, i.normalizeZ)(Point, "pz", t);
          }
          static fromBytes(t) {
            return ((0, o.abytes)(t), Point.fromHex(t));
          }
          static fromHex(t) {
            const e = Point.fromAffine(m((0, o.ensureBytes)("pointHex", t)));
            return (e.assertValidity(), e);
          }
          static fromPrivateKey(t) {
            const r = p(n, e.allowedPrivateKeyLengths, e.wrapPrivateKey);
            return Point.BASE.multiply(r(t));
          }
          static msm(t, e) {
            return (0, i.pippenger)(Point, n, t, e);
          }
          precompute(t, e) {
            return (
              void 0 === t && (t = 8),
              void 0 === e && (e = !0),
              P.setWindowSize(this, t),
              e || this.multiply(l),
              this
            );
          }
          _setWindowSize(t) {
            this.precompute(t);
          }
          assertValidity() {
            I(this);
          }
          hasEvenY() {
            const { y: t } = this.toAffine();
            if (!r.isOdd) throw new Error("Field doesn't support isOdd");
            return !r.isOdd(t);
          }
          equals(t) {
            T(t);
            const { px: e, py: n, pz: o } = this,
              { px: i, py: s, pz: a } = t,
              c = r.eql(r.mul(e, a), r.mul(i, o)),
              u = r.eql(r.mul(n, a), r.mul(s, o));
            return c && u;
          }
          negate() {
            return new Point(this.px, r.neg(this.py), this.pz);
          }
          double() {
            const { a: e, b: n } = t,
              o = r.mul(n, l),
              { px: i, py: s, pz: a } = this;
            let c = r.ZERO,
              u = r.ZERO,
              f = r.ZERO,
              h = r.mul(i, i),
              d = r.mul(s, s),
              p = r.mul(a, a),
              y = r.mul(i, s);
            return (
              (y = r.add(y, y)),
              (f = r.mul(i, a)),
              (f = r.add(f, f)),
              (c = r.mul(e, f)),
              (u = r.mul(o, p)),
              (u = r.add(c, u)),
              (c = r.sub(d, u)),
              (u = r.add(d, u)),
              (u = r.mul(c, u)),
              (c = r.mul(y, c)),
              (f = r.mul(o, f)),
              (p = r.mul(e, p)),
              (y = r.sub(h, p)),
              (y = r.mul(e, y)),
              (y = r.add(y, f)),
              (f = r.add(h, h)),
              (h = r.add(f, h)),
              (h = r.add(h, p)),
              (h = r.mul(h, y)),
              (u = r.add(u, h)),
              (p = r.mul(s, a)),
              (p = r.add(p, p)),
              (h = r.mul(p, y)),
              (c = r.sub(c, h)),
              (f = r.mul(p, d)),
              (f = r.add(f, f)),
              (f = r.add(f, f)),
              new Point(c, u, f)
            );
          }
          add(e) {
            T(e);
            const { px: n, py: o, pz: i } = this,
              { px: s, py: a, pz: c } = e;
            let u = r.ZERO,
              f = r.ZERO,
              h = r.ZERO;
            const d = t.a,
              p = r.mul(t.b, l);
            let y = r.mul(n, s),
              v = r.mul(o, a),
              w = r.mul(i, c),
              b = r.add(n, o),
              g = r.add(s, a);
            ((b = r.mul(b, g)),
              (g = r.add(y, v)),
              (b = r.sub(b, g)),
              (g = r.add(n, i)));
            let m = r.add(s, c);
            return (
              (g = r.mul(g, m)),
              (m = r.add(y, w)),
              (g = r.sub(g, m)),
              (m = r.add(o, i)),
              (u = r.add(a, c)),
              (m = r.mul(m, u)),
              (u = r.add(v, w)),
              (m = r.sub(m, u)),
              (h = r.mul(d, g)),
              (u = r.mul(p, w)),
              (h = r.add(u, h)),
              (u = r.sub(v, h)),
              (h = r.add(v, h)),
              (f = r.mul(u, h)),
              (v = r.add(y, y)),
              (v = r.add(v, y)),
              (w = r.mul(d, w)),
              (g = r.mul(p, g)),
              (v = r.add(v, w)),
              (w = r.sub(y, w)),
              (w = r.mul(d, w)),
              (g = r.add(g, w)),
              (y = r.mul(v, g)),
              (f = r.add(f, y)),
              (y = r.mul(m, g)),
              (u = r.mul(b, u)),
              (u = r.sub(u, y)),
              (y = r.mul(b, v)),
              (h = r.mul(m, h)),
              (h = r.add(h, y)),
              new Point(u, f, h)
            );
          }
          subtract(t) {
            return this.add(t.negate());
          }
          is0() {
            return this.equals(Point.ZERO);
          }
          multiply(t) {
            const { endo: r } = e;
            if (!n.isValidNot0(t))
              throw new Error("invalid scalar: out of range");
            let o, i;
            const s = (t) => P.wNAFCached(this, t, Point.normalizeZ);
            if (r) {
              const { k1neg: e, k1: n, k2neg: a, k2: c } = r.splitScalar(t),
                { p: u, f: f } = s(n),
                { p: l, f: h } = s(c);
              ((i = f.add(h)), (o = _(r.beta, u, l, e, a)));
            } else {
              const { p: e, f: r } = s(t);
              ((o = e), (i = r));
            }
            return Point.normalizeZ([o, i])[0];
          }
          multiplyUnsafe(t) {
            const { endo: r } = e,
              o = this;
            if (!n.isValid(t)) throw new Error("invalid scalar: out of range");
            if (t === c || o.is0()) return Point.ZERO;
            if (t === u) return o;
            if (P.hasPrecomputes(this)) return this.multiply(t);
            if (r) {
              const { k1neg: e, k1: n, k2neg: s, k2: a } = r.splitScalar(t),
                { p1: c, p2: u } = (0, i.mulEndoUnsafe)(Point, o, n, a);
              return _(r.beta, c, u, e, s);
            }
            return P.wNAFCachedUnsafe(o, t);
          }
          multiplyAndAddUnsafe(t, e, r) {
            const n = this.multiplyUnsafe(e).add(t.multiplyUnsafe(r));
            return n.is0() ? void 0 : n;
          }
          toAffine(t) {
            return O(this, t);
          }
          isTorsionFree() {
            const { isTorsionFree: t } = e;
            return (
              s === u ||
              (t ? t(Point, this) : P.wNAFCachedUnsafe(this, a).is0())
            );
          }
          clearCofactor() {
            const { clearCofactor: t } = e;
            return s === u ? this : t ? t(Point, this) : this.multiplyUnsafe(s);
          }
          toBytes(t) {
            return (
              void 0 === t && (t = !0),
              (0, o.abool)("isCompressed", t),
              this.assertValidity(),
              g(Point, this, t)
            );
          }
          toRawBytes(t) {
            return (void 0 === t && (t = !0), this.toBytes(t));
          }
          toHex(t) {
            return (
              void 0 === t && (t = !0),
              (0, o.bytesToHex)(this.toBytes(t))
            );
          }
          toString() {
            return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
          }
        }
        ((Point.BASE = new Point(t.Gx, t.Gy, r.ONE)),
          (Point.ZERO = new Point(r.ZERO, r.ONE, r.ZERO)),
          (Point.Fp = r),
          (Point.Fn = n));
        const U = n.BITS,
          P = (0, i.wNAF)(Point, e.endo ? Math.ceil(U / 2) : U);
        return Point;
      }
      function v(t) {
        const { CURVE: e, curveOpts: r } = g(t),
          Point = y(e, r);
        return E(t, Point);
      }
      function w(t) {
        return Uint8Array.of(t ? 2 : 3);
      }
      function b(Point, t, r) {
        (void 0 === r && (r = {}),
          (0, o._validateObject)(
            t,
            { hash: "function" },
            {
              hmac: "function",
              lowS: "boolean",
              randomBytes: "function",
              bits2int: "function",
              bits2int_modN: "function",
            },
          ));
        const i = t.randomBytes || o.randomBytes,
          l =
            t.hmac ||
            function (e) {
              for (
                var r = arguments.length,
                  i = new Array(r > 1 ? r - 1 : 0),
                  s = 1;
                s < r;
                s++
              )
                i[s - 1] = arguments[s];
              return (0, n.hmac)(t.hash, e, (0, o.concatBytes)(...i));
            },
          { Fp: h, Fn: d } = Point,
          { ORDER: y, BITS: v } = d;
        function b(t) {
          const e = y >> u;
          return t > e;
        }
        function g(t) {
          return b(t) ? d.neg(t) : t;
        }
        function m(t, e) {
          if (!d.isValidNot0(e))
            throw new Error(`invalid signature ${t}: out of range 1..CURVE.n`);
        }
        class Signature {
          constructor(t, e, r) {
            (m("r", t),
              m("s", e),
              (this.r = t),
              (this.s = e),
              null != r && (this.recovery = r),
              Object.freeze(this));
          }
          static fromCompact(t) {
            const e = d.BYTES,
              r = (0, o.ensureBytes)("compactSignature", t, 2 * e);
            return new Signature(
              d.fromBytes(r.subarray(0, e)),
              d.fromBytes(r.subarray(e, 2 * e)),
            );
          }
          static fromDER(t) {
            const { r: r, s: n } = e.DER.toSig((0, o.ensureBytes)("DER", t));
            return new Signature(r, n);
          }
          assertValidity() {}
          addRecoveryBit(t) {
            return new Signature(this.r, this.s, t);
          }
          recoverPublicKey(t) {
            const e = h.ORDER,
              { r: r, s: n, recovery: i } = this;
            if (null == i || ![0, 1, 2, 3].includes(i))
              throw new Error("recovery id invalid");
            const s = y * f < e;
            if (s && i > 1)
              throw new Error("recovery id is ambiguous for h>1 curve");
            const a = 2 === i || 3 === i ? r + y : r;
            if (!h.isValid(a)) throw new Error("recovery id 2 or 3 invalid");
            const c = h.toBytes(a),
              u = Point.fromHex((0, o.concatBytes)(w(0 === (1 & i)), c)),
              l = d.inv(a),
              p = O((0, o.ensureBytes)("msgHash", t)),
              v = d.create(-p * l),
              b = d.create(n * l),
              g = Point.BASE.multiplyUnsafe(v).add(u.multiplyUnsafe(b));
            if (g.is0()) throw new Error("point at infinify");
            return (g.assertValidity(), g);
          }
          hasHighS() {
            return b(this.s);
          }
          normalizeS() {
            return this.hasHighS()
              ? new Signature(this.r, d.neg(this.s), this.recovery)
              : this;
          }
          toBytes(t) {
            if ("compact" === t)
              return (0, o.concatBytes)(d.toBytes(this.r), d.toBytes(this.s));
            if ("der" === t) return (0, o.hexToBytes)(e.DER.hexFromSig(this));
            throw new Error("invalid format");
          }
          toDERRawBytes() {
            return this.toBytes("der");
          }
          toDERHex() {
            return (0, o.bytesToHex)(this.toBytes("der"));
          }
          toCompactRawBytes() {
            return this.toBytes("compact");
          }
          toCompactHex() {
            return (0, o.bytesToHex)(this.toBytes("compact"));
          }
        }
        const E = p(d, r.allowedPrivateKeyLengths, r.wrapPrivateKey),
          B = {
            isValidPrivateKey(t) {
              try {
                return (E(t), !0);
              } catch (e) {
                return !1;
              }
            },
            normPrivateKeyToScalar: E,
            randomPrivateKey: () => {
              const t = y;
              return (0, s.mapHashToField)(i((0, s.getMinHashLength)(t)), t);
            },
            precompute(t, e) {
              return (
                void 0 === t && (t = 8),
                void 0 === e && (e = Point.BASE),
                e.precompute(t, !1)
              );
            },
          };
        function A(t, e) {
          return (void 0 === e && (e = !0), Point.fromPrivateKey(t).toBytes(e));
        }
        function x(t) {
          if ("bigint" === typeof t) return !1;
          if (t instanceof Point) return !0;
          const e = (0, o.ensureBytes)("key", t),
            n = e.length,
            i = h.BYTES,
            s = i + 1,
            a = 2 * i + 1;
          return r.allowedPrivateKeyLengths || d.BYTES === s
            ? void 0
            : n === s || n === a;
        }
        function S(t, e, r) {
          if ((void 0 === r && (r = !0), !0 === x(t)))
            throw new Error("first arg must be private key");
          if (!1 === x(e)) throw new Error("second arg must be public key");
          const n = Point.fromHex(e);
          return n.multiply(E(t)).toBytes(r);
        }
        const T =
            t.bits2int ||
            function (t) {
              if (t.length > 8192) throw new Error("input is too large");
              const e = (0, o.bytesToNumberBE)(t),
                r = 8 * t.length - v;
              return r > 0 ? e >> BigInt(r) : e;
            },
          O =
            t.bits2int_modN ||
            function (t) {
              return d.create(T(t));
            },
          I = (0, o.bitMask)(v);
        function _(t) {
          return ((0, o.aInRange)("num < 2^" + v, t, c, I), d.toBytes(t));
        }
        function U(e, r, n) {
          if (
            (void 0 === n && (n = P),
            ["recovered", "canonical"].some((t) => t in n))
          )
            throw new Error("sign() legacy options not supported");
          const { hash: s } = t;
          let { lowS: f, prehash: l, extraEntropy: p } = n;
          (null == f && (f = !0),
            (e = (0, o.ensureBytes)("msgHash", e)),
            a(n),
            l && (e = (0, o.ensureBytes)("prehashed msgHash", s(e))));
          const y = O(e),
            v = E(r),
            w = [_(v), _(y)];
          if (null != p && !1 !== p) {
            const t = !0 === p ? i(h.BYTES) : p;
            w.push((0, o.ensureBytes)("extraEntropy", t));
          }
          const m = (0, o.concatBytes)(...w),
            B = y;
          function A(t) {
            const e = T(t);
            if (!d.isValidNot0(e)) return;
            const r = d.inv(e),
              n = Point.BASE.multiply(e).toAffine(),
              o = d.create(n.x);
            if (o === c) return;
            const i = d.create(r * d.create(B + o * v));
            if (i === c) return;
            let s = (n.x === o ? 0 : 2) | Number(n.y & u),
              a = i;
            return (
              f && b(i) && ((a = g(i)), (s ^= 1)),
              new Signature(o, a, s)
            );
          }
          return { seed: m, k2sig: A };
        }
        const P = { lowS: t.lowS, prehash: !1 },
          k = { lowS: t.lowS, prehash: !1 };
        function R(e, r, n) {
          void 0 === n && (n = P);
          const { seed: i, k2sig: s } = U(e, r, n),
            a = (0, o.createHmacDrbg)(t.hash.outputLen, d.BYTES, l);
          return a(i, s);
        }
        function M(r, n, i, s) {
          void 0 === s && (s = k);
          const c = r;
          ((n = (0, o.ensureBytes)("msgHash", n)),
            (i = (0, o.ensureBytes)("publicKey", i)),
            a(s));
          const { lowS: u, prehash: f, format: l } = s;
          if ("strict" in s)
            throw new Error("options.strict was renamed to lowS");
          if (void 0 !== l && !["compact", "der", "js"].includes(l))
            throw new Error('format must be "compact", "der" or "js"');
          const h = "string" === typeof c || (0, o.isBytes)(c),
            p =
              !h &&
              !l &&
              "object" === typeof c &&
              null !== c &&
              "bigint" === typeof c.r &&
              "bigint" === typeof c.s;
          if (!h && !p)
            throw new Error(
              "invalid signature, expected Uint8Array, hex string or Signature instance",
            );
          let y,
            v = void 0;
          try {
            if (p) {
              if (void 0 !== l && "js" !== l) throw new Error("invalid format");
              v = new Signature(c.r, c.s);
            }
            if (h) {
              try {
                "compact" !== l && (v = Signature.fromDER(c));
              } catch (S) {
                if (!(S instanceof e.DER.Err)) throw S;
              }
              v || "der" === l || (v = Signature.fromCompact(c));
            }
            y = Point.fromHex(i);
          } catch (T) {
            return !1;
          }
          if (!v) return !1;
          if (u && v.hasHighS()) return !1;
          f && (n = t.hash(n));
          const { r: w, s: b } = v,
            g = O(n),
            m = d.inv(b),
            E = d.create(g * m),
            B = d.create(w * m),
            A = Point.BASE.multiplyUnsafe(E).add(y.multiplyUnsafe(B));
          if (A.is0()) return !1;
          const x = d.create(A.x);
          return x === w;
        }
        return (
          Point.BASE.precompute(8),
          Object.freeze({
            getPublicKey: A,
            getSharedSecret: S,
            sign: R,
            verify: M,
            utils: B,
            Point: Point,
            Signature: Signature,
          })
        );
      }
      function g(t) {
        const e = {
            a: t.a,
            b: t.b,
            p: t.Fp.ORDER,
            n: t.n,
            h: t.h,
            Gx: t.Gx,
            Gy: t.Gy,
          },
          r = t.Fp,
          n = (0, s.Field)(e.n, t.nBitLength),
          o = {
            Fp: r,
            Fn: n,
            allowedPrivateKeyLengths: t.allowedPrivateKeyLengths,
            allowInfinityPoint: t.allowInfinityPoint,
            endo: t.endo,
            wrapPrivateKey: t.wrapPrivateKey,
            isTorsionFree: t.isTorsionFree,
            clearCofactor: t.clearCofactor,
            fromBytes: t.fromBytes,
            toBytes: t.toBytes,
          };
        return { CURVE: e, curveOpts: o };
      }
      function m(t) {
        const { CURVE: e, curveOpts: r } = g(t),
          n = {
            hash: t.hash,
            hmac: t.hmac,
            randomBytes: t.randomBytes,
            lowS: t.lowS,
            bits2int: t.bits2int,
            bits2int_modN: t.bits2int_modN,
          };
        return { CURVE: e, curveOpts: r, ecdsaOpts: n };
      }
      function E(t, Point) {
        const { Fp: e, Fn: r } = Point;
        function n(t) {
          return (0, o.inRange)(t, u, r.ORDER);
        }
        const i = d(e, t.a, t.b),
          s = p(r, t.allowedPrivateKeyLengths, t.wrapPrivateKey);
        return Object.assign(
          {},
          {
            CURVE: t,
            Point: Point,
            ProjectivePoint: Point,
            normPrivateKeyToScalar: s,
            weierstrassEquation: i,
            isWithinCurveOrder: n,
          },
        );
      }
      function B(t, e) {
        return Object.assign({}, e, { ProjectivePoint: e.Point, CURVE: t });
      }
      function A(t) {
        const { CURVE: e, curveOpts: r, ecdsaOpts: n } = m(t),
          Point = y(e, r),
          o = b(Point, n, r);
        return B(t, o);
      }
      function x(t, e) {
        const r = t.ORDER;
        let n = c;
        for (let l = r - u; l % f === c; l /= f) n += u;
        const o = n,
          i = f << (o - u - u),
          s = i * f,
          a = (r - u) / s,
          d = (a - u) / f,
          p = s - u,
          y = i,
          v = t.pow(e, a),
          w = t.pow(e, (a + u) / f);
        let b = (e, r) => {
          let n = v,
            i = t.pow(r, p),
            s = t.sqr(i);
          s = t.mul(s, r);
          let a = t.mul(e, s);
          ((a = t.pow(a, d)),
            (a = t.mul(a, i)),
            (i = t.mul(a, r)),
            (s = t.mul(a, e)));
          let c = t.mul(s, i);
          a = t.pow(c, y);
          let l = t.eql(a, t.ONE);
          ((i = t.mul(s, w)),
            (a = t.mul(c, n)),
            (s = t.cmov(i, s, l)),
            (c = t.cmov(a, c, l)));
          for (let h = o; h > u; h--) {
            let e = h - f;
            e = f << (e - u);
            let r = t.pow(c, e);
            const o = t.eql(r, t.ONE);
            ((i = t.mul(s, n)),
              (n = t.mul(n, n)),
              (r = t.mul(c, n)),
              (s = t.cmov(i, s, o)),
              (c = t.cmov(r, c, o)));
          }
          return { isValid: l, value: s };
        };
        if (t.ORDER % h === l) {
          const r = (t.ORDER - l) / h,
            n = t.sqrt(t.neg(e));
          b = (e, o) => {
            let i = t.sqr(o);
            const s = t.mul(e, o);
            i = t.mul(i, s);
            let a = t.pow(i, r);
            a = t.mul(a, s);
            const c = t.mul(a, n),
              u = t.mul(t.sqr(a), o),
              f = t.eql(u, e);
            let l = t.cmov(c, a, f);
            return { isValid: f, value: l };
          };
        }
        return b;
      }
      function S(t, e) {
        (0, s.validateField)(t);
        const { A: r, B: n, Z: o } = e;
        if (!t.isValid(r) || !t.isValid(n) || !t.isValid(o))
          throw new Error("mapToCurveSimpleSWU: invalid opts");
        const i = x(t, o);
        if (!t.isOdd) throw new Error("Field does not have .isOdd()");
        return (e) => {
          let a, c, u, f, l, h, d, p;
          ((a = t.sqr(e)),
            (a = t.mul(a, o)),
            (c = t.sqr(a)),
            (c = t.add(c, a)),
            (u = t.add(c, t.ONE)),
            (u = t.mul(u, n)),
            (f = t.cmov(o, t.neg(c), !t.eql(c, t.ZERO))),
            (f = t.mul(f, r)),
            (c = t.sqr(u)),
            (h = t.sqr(f)),
            (l = t.mul(h, r)),
            (c = t.add(c, l)),
            (c = t.mul(c, u)),
            (h = t.mul(h, f)),
            (l = t.mul(h, n)),
            (c = t.add(c, l)),
            (d = t.mul(a, u)));
          const { isValid: y, value: v } = i(c, h);
          ((p = t.mul(a, e)),
            (p = t.mul(p, v)),
            (d = t.cmov(d, u, y)),
            (p = t.cmov(p, v, y)));
          const w = t.isOdd(e) === t.isOdd(p);
          p = t.cmov(t.neg(p), p, w);
          const b = (0, s.FpInvertBatch)(t, [f], !0)[0];
          return ((d = t.mul(d, b)), { x: d, y: p });
        };
      }
    },
    4402: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.negateCt = a),
        (e.normalizeZ = c),
        (e.wNAF = b),
        (e.mulEndoUnsafe = g),
        (e.pippenger = m),
        (e.precomputeMSMUnsafe = E),
        (e.validateBasic = B),
        (e._createCurveFields = x));
      const n = r(3151),
        o = r(3185),
        i = BigInt(0),
        s = BigInt(1);
      function a(t, e) {
        const r = e.negate();
        return t ? r : e;
      }
      function c(t, e, r) {
        const n = "pz" === e ? (t) => t.pz : (t) => t.ez,
          i = (0, o.FpInvertBatch)(t.Fp, r.map(n)),
          s = r.map((t, e) => t.toAffine(i[e]));
        return s.map(t.fromAffine);
      }
      function u(t, e) {
        if (!Number.isSafeInteger(t) || t <= 0 || t > e)
          throw new Error(
            "invalid window size, expected [1.." + e + "], got W=" + t,
          );
      }
      function f(t, e) {
        u(t, e);
        const r = Math.ceil(e / t) + 1,
          o = 2 ** (t - 1),
          i = 2 ** t,
          s = (0, n.bitMask)(t),
          a = BigInt(t);
        return { windows: r, windowSize: o, mask: s, maxNumber: i, shiftBy: a };
      }
      function l(t, e, r) {
        const { windowSize: n, mask: o, maxNumber: i, shiftBy: a } = r;
        let c = Number(t & o),
          u = t >> a;
        c > n && ((c -= i), (u += s));
        const f = e * n,
          l = f + Math.abs(c) - 1,
          h = 0 === c,
          d = c < 0,
          p = e % 2 !== 0,
          y = f;
        return {
          nextN: u,
          offset: l,
          isZero: h,
          isNeg: d,
          isNegF: p,
          offsetF: y,
        };
      }
      function h(t, e) {
        if (!Array.isArray(t)) throw new Error("array expected");
        t.forEach((t, r) => {
          if (!(t instanceof e)) throw new Error("invalid point at index " + r);
        });
      }
      function d(t, e) {
        if (!Array.isArray(t)) throw new Error("array of scalars expected");
        t.forEach((t, r) => {
          if (!e.isValid(t)) throw new Error("invalid scalar at index " + r);
        });
      }
      const p = new WeakMap(),
        y = new WeakMap();
      function v(t) {
        return y.get(t) || 1;
      }
      function w(t) {
        if (t !== i) throw new Error("invalid wNAF");
      }
      function b(t, e) {
        return {
          constTimeNegate: a,
          hasPrecomputes(t) {
            return 1 !== v(t);
          },
          unsafeLadder(e, r, n) {
            void 0 === n && (n = t.ZERO);
            let o = e;
            while (r > i)
              (r & s && (n = n.add(o)), (o = o.double()), (r >>= s));
            return n;
          },
          precomputeWindow(t, r) {
            const { windows: n, windowSize: o } = f(r, e),
              i = [];
            let s = t,
              a = s;
            for (let e = 0; e < n; e++) {
              ((a = s), i.push(a));
              for (let t = 1; t < o; t++) ((a = a.add(s)), i.push(a));
              s = a.double();
            }
            return i;
          },
          wNAF(r, n, o) {
            let i = t.ZERO,
              s = t.BASE;
            const c = f(r, e);
            for (let t = 0; t < c.windows; t++) {
              const {
                nextN: e,
                offset: r,
                isZero: u,
                isNeg: f,
                isNegF: h,
                offsetF: d,
              } = l(o, t, c);
              ((o = e), u ? (s = s.add(a(h, n[d]))) : (i = i.add(a(f, n[r]))));
            }
            return (w(o), { p: i, f: s });
          },
          wNAFUnsafe(r, n, o, s) {
            void 0 === s && (s = t.ZERO);
            const a = f(r, e);
            for (let t = 0; t < a.windows; t++) {
              if (o === i) break;
              const { nextN: e, offset: r, isZero: c, isNeg: u } = l(o, t, a);
              if (((o = e), !c)) {
                const t = n[r];
                s = s.add(u ? t.negate() : t);
              }
            }
            return (w(o), s);
          },
          getPrecomputes(t, e, r) {
            let n = p.get(e);
            return (
              n ||
                ((n = this.precomputeWindow(e, t)),
                1 !== t &&
                  ("function" === typeof r && (n = r(n)), p.set(e, n))),
              n
            );
          },
          wNAFCached(t, e, r) {
            const n = v(t);
            return this.wNAF(n, this.getPrecomputes(n, t, r), e);
          },
          wNAFCachedUnsafe(t, e, r, n) {
            const o = v(t);
            return 1 === o
              ? this.unsafeLadder(t, e, n)
              : this.wNAFUnsafe(o, this.getPrecomputes(o, t, r), e, n);
          },
          setWindowSize(t, r) {
            (u(r, e), y.set(t, r), p.delete(t));
          },
        };
      }
      function g(t, e, r, n) {
        let o = e,
          a = t.ZERO,
          c = t.ZERO;
        while (r > i || n > i)
          (r & s && (a = a.add(o)),
            n & s && (c = c.add(o)),
            (o = o.double()),
            (r >>= s),
            (n >>= s));
        return { p1: a, p2: c };
      }
      function m(t, e, r, o) {
        (h(r, t), d(o, e));
        const i = r.length,
          s = o.length;
        if (i !== s)
          throw new Error(
            "arrays of points and scalars must have equal length",
          );
        const a = t.ZERO,
          c = (0, n.bitLen)(BigInt(i));
        let u = 1;
        c > 12 ? (u = c - 3) : c > 4 ? (u = c - 2) : c > 0 && (u = 2);
        const f = (0, n.bitMask)(u),
          l = new Array(Number(f) + 1).fill(a),
          p = Math.floor((e.BITS - 1) / u) * u;
        let y = a;
        for (let n = p; n >= 0; n -= u) {
          l.fill(a);
          for (let e = 0; e < s; e++) {
            const t = o[e],
              i = Number((t >> BigInt(n)) & f);
            l[i] = l[i].add(r[e]);
          }
          let t = a;
          for (let e = l.length - 1, r = a; e > 0; e--)
            ((r = r.add(l[e])), (t = t.add(r)));
          if (((y = y.add(t)), 0 !== n))
            for (let e = 0; e < u; e++) y = y.double();
        }
        return y;
      }
      function E(t, e, r, o) {
        (u(o, e.BITS), h(r, t));
        const i = t.ZERO,
          s = 2 ** o - 1,
          a = Math.ceil(e.BITS / o),
          c = (0, n.bitMask)(o),
          f = r.map((t) => {
            const e = [];
            for (let r = 0, n = t; r < s; r++) (e.push(n), (n = n.add(t)));
            return e;
          });
        return (t) => {
          if ((d(t, e), t.length > r.length))
            throw new Error(
              "array of scalars must be smaller than array of points",
            );
          let n = i;
          for (let e = 0; e < a; e++) {
            if (n !== i) for (let t = 0; t < o; t++) n = n.double();
            const r = BigInt(a * o - (e + 1) * o);
            for (let e = 0; e < t.length; e++) {
              const o = t[e],
                i = Number((o >> r) & c);
              i && (n = n.add(f[e][i - 1]));
            }
          }
          return n;
        };
      }
      function B(t) {
        return (
          (0, o.validateField)(t.Fp),
          (0, n.validateObject)(
            t,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" },
          ),
          Object.freeze({
            ...(0, o.nLength)(t.n, t.nBitLength),
            ...t,
            p: t.Fp.ORDER,
          })
        );
      }
      function A(t, e) {
        if (e) {
          if (e.ORDER !== t)
            throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
          return ((0, o.validateField)(e), e);
        }
        return (0, o.Field)(t);
      }
      function x(t, e, r) {
        if ((void 0 === r && (r = {}), !e || "object" !== typeof e))
          throw new Error(`expected valid ${t} CURVE object`);
        for (const c of ["p", "n", "h"]) {
          const t = e[c];
          if (!("bigint" === typeof t && t > i))
            throw new Error(`CURVE.${c} must be positive bigint`);
        }
        const n = A(e.p, r.Fp),
          o = A(e.n, r.Fn),
          s = "weierstrass" === t ? "b" : "d",
          a = ["Gx", "Gy", "a", s];
        for (const i of a)
          if (!n.isValid(e[i]))
            throw new Error(
              `CURVE.${i} must be valid field element of CURVE.Fp`,
            );
        return { Fp: n, Fn: o };
      }
    },
    4719: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.expand_message_xmd = u),
        (e.expand_message_xof = f),
        (e.hash_to_field = l),
        (e.isogenyMap = h),
        (e.createHasher = d));
      const n = r(3151),
        o = r(3185),
        i = n.bytesToNumberBE;
      function s(t, e) {
        if ((c(t), c(e), t < 0 || t >= 1 << (8 * e)))
          throw new Error("invalid I2OSP input: " + t);
        const r = Array.from({ length: e }).fill(0);
        for (let n = e - 1; n >= 0; n--) ((r[n] = 255 & t), (t >>>= 8));
        return new Uint8Array(r);
      }
      function a(t, e) {
        const r = new Uint8Array(t.length);
        for (let n = 0; n < t.length; n++) r[n] = t[n] ^ e[n];
        return r;
      }
      function c(t) {
        if (!Number.isSafeInteger(t)) throw new Error("number expected");
      }
      function u(t, e, r, o) {
        ((0, n.abytes)(t),
          (0, n.abytes)(e),
          c(r),
          e.length > 255 &&
            (e = o(
              (0, n.concatBytes)((0, n.utf8ToBytes)("H2C-OVERSIZE-DST-"), e),
            )));
        const { outputLen: i, blockLen: u } = o,
          f = Math.ceil(r / i);
        if (r > 65535 || f > 255)
          throw new Error("expand_message_xmd: invalid lenInBytes");
        const l = (0, n.concatBytes)(e, s(e.length, 1)),
          h = s(0, u),
          d = s(r, 2),
          p = new Array(f),
          y = o((0, n.concatBytes)(h, t, d, s(0, 1), l));
        p[0] = o((0, n.concatBytes)(y, s(1, 1), l));
        for (let c = 1; c <= f; c++) {
          const t = [a(y, p[c - 1]), s(c + 1, 1), l];
          p[c] = o((0, n.concatBytes)(...t));
        }
        const v = (0, n.concatBytes)(...p);
        return v.slice(0, r);
      }
      function f(t, e, r, o, i) {
        if (((0, n.abytes)(t), (0, n.abytes)(e), c(r), e.length > 255)) {
          const t = Math.ceil((2 * o) / 8);
          e = i
            .create({ dkLen: t })
            .update((0, n.utf8ToBytes)("H2C-OVERSIZE-DST-"))
            .update(e)
            .digest();
        }
        if (r > 65535 || e.length > 255)
          throw new Error("expand_message_xof: invalid lenInBytes");
        return i
          .create({ dkLen: r })
          .update(t)
          .update(s(r, 2))
          .update(e)
          .update(s(e.length, 1))
          .digest();
      }
      function l(t, e, r) {
        (0, n._validateObject)(r, {
          p: "bigint",
          m: "number",
          k: "number",
          hash: "function",
        });
        const { p: s, k: a, m: l, hash: h, expand: d, DST: p } = r;
        if (!(0, n.isBytes)(p) && "string" !== typeof p)
          throw new Error("DST must be string or uint8array");
        if (!(0, n.isHash)(r.hash)) throw new Error("expected valid hash");
        ((0, n.abytes)(t), c(e));
        const y = "string" === typeof p ? (0, n.utf8ToBytes)(p) : p,
          v = s.toString(2).length,
          w = Math.ceil((v + a) / 8),
          b = e * l * w;
        let g;
        if ("xmd" === d) g = u(t, y, b, h);
        else if ("xof" === d) g = f(t, y, b, a, h);
        else {
          if ("_internal_pass" !== d)
            throw new Error('expand must be "xmd" or "xof"');
          g = t;
        }
        const m = new Array(e);
        for (let n = 0; n < e; n++) {
          const t = new Array(l);
          for (let e = 0; e < l; e++) {
            const r = w * (e + n * l),
              a = g.subarray(r, r + w);
            t[e] = (0, o.mod)(i(a), s);
          }
          m[n] = t;
        }
        return m;
      }
      function h(t, e) {
        const r = e.map((t) => Array.from(t).reverse());
        return (e, n) => {
          const [i, s, a, c] = r.map((r) =>
              r.reduce((r, n) => t.add(t.mul(r, e), n)),
            ),
            [u, f] = (0, o.FpInvertBatch)(t, [s, c], !0);
          return (
            (e = t.mul(i, u)),
            (n = t.mul(n, t.mul(a, f))),
            { x: e, y: n }
          );
        };
      }
      function d(Point, t, e) {
        if ("function" !== typeof t)
          throw new Error("mapToCurve() must be defined");
        function r(e) {
          return Point.fromAffine(t(e));
        }
        function n(t) {
          const e = t.clearCofactor();
          return e.equals(Point.ZERO) ? Point.ZERO : (e.assertValidity(), e);
        }
        return {
          defaults: e,
          hashToCurve(t, o) {
            const i = e.DST ? e.DST : {},
              s = Object.assign({}, e, i, o),
              a = l(t, 2, s),
              c = r(a[0]),
              u = r(a[1]);
            return n(c.add(u));
          },
          encodeToCurve(t, o) {
            const i = e.encodeDST ? e.encodeDST : {},
              s = Object.assign({}, e, i, o),
              a = l(t, 1, s);
            return n(r(a[0]));
          },
          mapToCurve(t) {
            if (!Array.isArray(t)) throw new Error("expected array of bigints");
            for (const e of t)
              if ("bigint" !== typeof e)
                throw new Error("expected array of bigints");
            return n(r(t));
          },
        };
      }
    },
    4720: function (t, e, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      for (var o = n(r(4721)), i = [], s = 0; s < 256; ++s)
        i.push((s + 256).toString(16).substr(1));
      function a(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = (
            i[t[e + 0]] +
            i[t[e + 1]] +
            i[t[e + 2]] +
            i[t[e + 3]] +
            "-" +
            i[t[e + 4]] +
            i[t[e + 5]] +
            "-" +
            i[t[e + 6]] +
            i[t[e + 7]] +
            "-" +
            i[t[e + 8]] +
            i[t[e + 9]] +
            "-" +
            i[t[e + 10]] +
            i[t[e + 11]] +
            i[t[e + 12]] +
            i[t[e + 13]] +
            i[t[e + 14]] +
            i[t[e + 15]]
          ).toLowerCase();
        if (!(0, o.default)(r)) throw TypeError("Stringified UUID is invalid");
        return r;
      }
      e.default = a;
    },
    4721: function (t, e, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = n(r(8397));
      function i(t) {
        return "string" === typeof t && o.default.test(t);
      }
      e.default = i;
    },
    5285: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getHash = o),
        (e.createCurve = i));
      const n = r(4401);
      function o(t) {
        return { hash: t };
      }
      function i(t, e) {
        const r = (e) => (0, n.weierstrass)({ ...t, hash: e });
        return { ...r(e), create: r };
      }
    },
    6258: function (t, e, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "NIL", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(e, "parse", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(e, "stringify", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(e, "v1", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(e, "v3", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(e, "v4", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(e, "v5", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(e, "validate", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(e, "version", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }));
      var o = n(r(8396)),
        i = n(r(8398)),
        s = n(r(8400)),
        a = n(r(8401)),
        c = n(r(8403)),
        u = n(r(8404)),
        f = n(r(4721)),
        l = n(r(4720)),
        h = n(r(6261));
    },
    6259: function (t, e, r) {
      "use strict";
      var n;
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i));
      var o = new Uint8Array(16);
      function i() {
        if (
          !n &&
          ((n =
            ("undefined" !== typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" !== typeof msCrypto &&
              "function" === typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto))),
          !n)
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
          );
        return n(o);
      }
    },
    6260: function (t, e, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.URL = e.DNS = void 0),
        (e.default = u));
      var o = n(r(4720)),
        i = n(r(6261));
      function s(t) {
        t = unescape(encodeURIComponent(t));
        for (var e = [], r = 0; r < t.length; ++r) e.push(t.charCodeAt(r));
        return e;
      }
      var a = (e.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
        c = (e.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8");
      function u(t, e, r) {
        function n(t, n, a, c) {
          if (
            ("string" === typeof t && (t = s(t)),
            "string" === typeof n && (n = (0, i.default)(n)),
            16 !== n.length)
          )
            throw TypeError(
              "Namespace must be array-like (16 iterable integer values, 0-255)",
            );
          var u = new Uint8Array(16 + t.length);
          if (
            (u.set(n),
            u.set(t, n.length),
            (u = r(u)),
            (u[6] = (15 & u[6]) | e),
            (u[8] = (63 & u[8]) | 128),
            a)
          ) {
            c = c || 0;
            for (var f = 0; f < 16; ++f) a[c + f] = u[f];
            return a;
          }
          return (0, o.default)(u);
        }
        try {
          n.name = t;
        } catch (u) {}
        return ((n.DNS = a), (n.URL = c), n);
      }
    },
    6261: function (t, e, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = n(r(4721));
      function i(t) {
        if (!(0, o.default)(t)) throw TypeError("Invalid UUID");
        var e,
          r = new Uint8Array(16);
        return (
          (r[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24),
          (r[1] = (e >>> 16) & 255),
          (r[2] = (e >>> 8) & 255),
          (r[3] = 255 & e),
          (r[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8),
          (r[5] = 255 & e),
          (r[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8),
          (r[7] = 255 & e),
          (r[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8),
          (r[9] = 255 & e),
          (r[10] = ((e = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255),
          (r[11] = (e / 4294967296) & 255),
          (r[12] = (e >>> 24) & 255),
          (r[13] = (e >>> 16) & 255),
          (r[14] = (e >>> 8) & 255),
          (r[15] = 255 & e),
          r
        );
      }
      e.default = i;
    },
    8388: function (t, e, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = r(6256),
        i = n(r(11)),
        s = n(r(129));
      const a = "https://fullnode.mainnet.sui.io",
        c = "0x2::sui::SUI";
      class SuiExplorer extends s.default {
        constructor(t) {
          let { wallet: e, config: r } = t;
          (super(...arguments),
            (this.provider = new o.JsonRpcProvider(
              new o.Connection({ fullnode: r.baseUrl || a }),
            )));
        }
        async getAllCoinObjects(t, e) {
          const { data: r } = await this.provider.getAllCoins({
            owner: t,
            options: { showType: !0, showContent: !0, showOwner: !0 },
          });
          return r
            .filter((t) => t.coinType === e)
            .sort((t, e) => Number(BigInt(e.balance) - BigInt(t.balance)));
        }
        async getCoinObject(t, e) {
          const { data: r } = await this.provider.getAllCoins({
            owner: t,
            options: { showType: !0, showContent: !0, showOwner: !0 },
          });
          return r.find((t) => t.coinType === e);
        }
        async getBalance(t, e, r) {
          (void 0 === e && (e = !0), void 0 === r && (r = c));
          const n = await this.provider.getBalance({ owner: t, coinType: r });
          return n.totalBalance;
        }
        async getTransactions(t) {
          let {
            address: e,
            offset: r,
            limit: n,
            pageNum: o,
            tokenType: i,
            id: s,
            ticker: a,
            decimal: u,
          } = t;
          const f = i || c,
            l = await this.provider.queryTransactionBlocks({
              filter: { FromAddress: e },
            }),
            h = await this.provider.multiGetTransactionBlocks({
              digests: l.data.map((t) => {
                let { digest: e } = t;
                return e;
              }),
              options: {
                showInput: !0,
                showEffects: !0,
                showBalanceChanges: !0,
              },
            }),
            d = h.flatMap((t) => {
              let {
                balanceChanges: e,
                digest: r,
                effects: n,
                timestampMs: o,
              } = t;
              return null === e || void 0 === e
                ? void 0
                : e.map((t) => {
                    let {
                      owner: { AddressOwner: e },
                      amount: i,
                      coinType: s,
                    } = t;
                    return {
                      txid: r,
                      otherSideAddress: e,
                      amount: i,
                      coinType: s,
                      fee: n.gasUsed,
                      timestampMs: o,
                      direction: !1,
                    };
                  });
            }),
            p = await this.provider.queryTransactionBlocks({
              filter: { ToAddress: e },
            }),
            y = await this.provider.multiGetTransactionBlocks({
              digests: p.data.map((t) => {
                let { digest: e } = t;
                return e;
              }),
              options: {
                showInput: !0,
                showEffects: !0,
                showBalanceChanges: !0,
              },
            }),
            v = (t) => {
              let { otherSideAddress: r, amount: n } = t;
              return r !== e && n > 0;
            },
            w = (t) => {
              let { otherSideAddress: r } = t;
              return r !== e;
            },
            b = y.flatMap((t) => {
              var r;
              let {
                balanceChanges: n,
                digest: o,
                transaction: { data: i },
                effects: s,
                timestampMs: a,
              } = t;
              return null === n ||
                void 0 === n ||
                null ===
                  (r = n.filter((t) => {
                    let {
                      owner: { AddressOwner: r },
                    } = t;
                    return r === e;
                  })) ||
                void 0 === r
                ? void 0
                : r.map((t) => {
                    let { amount: e, coinType: r } = t;
                    return {
                      txid: o,
                      otherSideAddress:
                        null === i || void 0 === i ? void 0 : i.sender,
                      amount: e,
                      coinType: r,
                      fee: s.gasUsed,
                      timestampMs: a,
                      direction: !0,
                    };
                  });
            }),
            g = [...d.filter(w), ...b.filter(v)]
              .filter((t) => {
                let { coinType: e } = t;
                return e === f;
              })
              .sort((t, e) =>
                (null === t || void 0 === t ? void 0 : t.timestampMs) <
                (null === e || void 0 === e ? void 0 : e.timestampMs)
                  ? 1
                  : (null === t || void 0 === t ? void 0 : t.timestampMs) >
                      (null === e || void 0 === e ? void 0 : e.timestampMs)
                    ? -1
                    : 0,
              );
          return this.modifyTransactionsResponse(g, e, s, a, u);
        }
        modifyTransactionsResponse(t, e, r, n, o) {
          return t.reduce((t, i) => {
            try {
              t.push({
                ...this.getTransactionModifiedResponse(
                  i,
                  e,
                  n || this.wallet.ticker,
                ),
                walletid: r || this.wallet.id,
                amount: this.getTxValue(e, i, o),
              });
            } catch (s) {
              console.error(s);
            }
            return t;
          }, []);
        }
        getTxConfirmations() {
          return 1;
        }
        getTxDateTime(t) {
          return new Date(Number(t.timestampMs) || Date.now());
        }
        getTxDirection(t, e) {
          return e.direction;
        }
        getTxOtherSideAddress(t, e) {
          return e.otherSideAddress;
        }
        getTxValue(t, e, r) {
          return this.wallet.toCurrencyUnit(e.amount, r);
        }
        getTxFee(t) {
          const e =
            BigInt(t.fee.computationCost || 0) +
            BigInt(t.fee.storageCost || 0) -
            BigInt(t.fee.storageRebate || 0);
          return e > 0n
            ? this.wallet.toCurrencyUnit(e)
            : "-" + this.wallet.toCurrencyUnit(-e);
        }
        getTxFeeTicker() {
          return this.wallet.ticker;
        }
        async calculateFee(t) {
          const e = await this.provider.dryRunTransactionBlock({
              transactionBlock: t.transactionBlockBytes,
            }),
            { computationCost: r, nonRefundableStorageFee: n } =
              e.effects.gasUsed;
          return new i.default(r).add(new i.default(n));
        }
        async sign(t, e) {
          const r = new o.RawSigner(t, this.provider);
          return r.signTransactionBlock({ transactionBlock: e });
        }
        async send(t) {
          return this.provider.executeTransactionBlock({
            transactionBlock: t.transactionBlockBytes,
            signature: t.signature,
          });
        }
      }
      e.default = SuiExplorer;
    },
    8395: function (t, e, r) {
      "use strict";
      const n = r(6258).v4,
        o = r(8405),
        i = function (t, e) {
          if (!(this instanceof i)) return new i(t, e);
          (e || (e = {}),
            (this.options = {
              reviver: "undefined" !== typeof e.reviver ? e.reviver : null,
              replacer: "undefined" !== typeof e.replacer ? e.replacer : null,
              generator:
                "undefined" !== typeof e.generator
                  ? e.generator
                  : function () {
                      return n();
                    },
              version: "undefined" !== typeof e.version ? e.version : 2,
              notificationIdNull:
                "boolean" === typeof e.notificationIdNull &&
                e.notificationIdNull,
            }),
            (this.callServer = t));
        };
      ((t.exports = i),
        (i.prototype.request = function (t, e, r, n) {
          const i = this;
          let s = null;
          const a = Array.isArray(t) && "function" === typeof e;
          if (1 === this.options.version && a)
            throw new TypeError("JSON-RPC 1.0 does not support batching");
          const c = !a && t && "object" === typeof t && "function" === typeof e;
          if (a || c) ((n = e), (s = t));
          else {
            "function" === typeof r && ((n = r), (r = void 0));
            const i = "function" === typeof n;
            try {
              s = o(t, e, r, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull,
              });
            } catch (f) {
              if (i) return n(f);
              throw f;
            }
            if (!i) return s;
          }
          let u;
          try {
            u = JSON.stringify(s, this.options.replacer);
          } catch (f) {
            return n(f);
          }
          return (
            this.callServer(u, function (t, e) {
              i._parseResponse(t, e, n);
            }),
            s
          );
        }),
        (i.prototype._parseResponse = function (t, e, r) {
          if (t) return void r(t);
          if (!e) return r();
          let n;
          try {
            n = JSON.parse(e, this.options.reviver);
          } catch (t) {
            return r(t);
          }
          if (3 === r.length) {
            if (Array.isArray(n)) {
              const t = function (t) {
                  return "undefined" !== typeof t.error;
                },
                e = function (e) {
                  return !t(e);
                };
              return r(null, n.filter(t), n.filter(e));
            }
            return r(null, n.error, n.result);
          }
          r(null, n);
        }));
    },
    8396: function (t, e, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o,
        i,
        s = n(r(6259)),
        a = n(r(4720)),
        c = 0,
        u = 0;
      function f(t, e, r) {
        var n = (e && r) || 0,
          f = e || new Array(16);
        t = t || {};
        var l = t.node || o,
          h = void 0 !== t.clockseq ? t.clockseq : i;
        if (null == l || null == h) {
          var d = t.random || (t.rng || s.default)();
          (null == l && (l = o = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]),
            null == h && (h = i = 16383 & ((d[6] << 8) | d[7])));
        }
        var p = void 0 !== t.msecs ? t.msecs : Date.now(),
          y = void 0 !== t.nsecs ? t.nsecs : u + 1,
          v = p - c + (y - u) / 1e4;
        if (
          (v < 0 && void 0 === t.clockseq && (h = (h + 1) & 16383),
          (v < 0 || p > c) && void 0 === t.nsecs && (y = 0),
          y >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        ((c = p), (u = y), (i = h), (p += 122192928e5));
        var w = (1e4 * (268435455 & p) + y) % 4294967296;
        ((f[n++] = (w >>> 24) & 255),
          (f[n++] = (w >>> 16) & 255),
          (f[n++] = (w >>> 8) & 255),
          (f[n++] = 255 & w));
        var b = ((p / 4294967296) * 1e4) & 268435455;
        ((f[n++] = (b >>> 8) & 255),
          (f[n++] = 255 & b),
          (f[n++] = ((b >>> 24) & 15) | 16),
          (f[n++] = (b >>> 16) & 255),
          (f[n++] = (h >>> 8) | 128),
          (f[n++] = 255 & h));
        for (var g = 0; g < 6; ++g) f[n + g] = l[g];
        return e || (0, a.default)(f);
      }
      e.default = f;
    },
    8397: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    },
    8398: function (t, e, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = n(r(6260)),
        i = n(r(8399)),
        s = (0, o.default)("v3", 48, i.default);
      e.default = s;
    },
    8399: function (t, e, r) {
      "use strict";
      function n(t) {
        if ("string" === typeof t) {
          var e = unescape(encodeURIComponent(t));
          t = new Uint8Array(e.length);
          for (var r = 0; r < e.length; ++r) t[r] = e.charCodeAt(r);
        }
        return o(s(a(t), 8 * t.length));
      }
      function o(t) {
        for (
          var e = [], r = 32 * t.length, n = "0123456789abcdef", o = 0;
          o < r;
          o += 8
        ) {
          var i = (t[o >> 5] >>> (o % 32)) & 255,
            s = parseInt(n.charAt((i >>> 4) & 15) + n.charAt(15 & i), 16);
          e.push(s);
        }
        return e;
      }
      function i(t) {
        return 14 + (((t + 64) >>> 9) << 4) + 1;
      }
      function s(t, e) {
        ((t[e >> 5] |= 128 << (e % 32)), (t[i(e) - 1] = e));
        for (
          var r = 1732584193,
            n = -271733879,
            o = -1732584194,
            s = 271733878,
            a = 0;
          a < t.length;
          a += 16
        ) {
          var u = r,
            f = n,
            y = o,
            v = s;
          ((r = l(r, n, o, s, t[a], 7, -680876936)),
            (s = l(s, r, n, o, t[a + 1], 12, -389564586)),
            (o = l(o, s, r, n, t[a + 2], 17, 606105819)),
            (n = l(n, o, s, r, t[a + 3], 22, -1044525330)),
            (r = l(r, n, o, s, t[a + 4], 7, -176418897)),
            (s = l(s, r, n, o, t[a + 5], 12, 1200080426)),
            (o = l(o, s, r, n, t[a + 6], 17, -1473231341)),
            (n = l(n, o, s, r, t[a + 7], 22, -45705983)),
            (r = l(r, n, o, s, t[a + 8], 7, 1770035416)),
            (s = l(s, r, n, o, t[a + 9], 12, -1958414417)),
            (o = l(o, s, r, n, t[a + 10], 17, -42063)),
            (n = l(n, o, s, r, t[a + 11], 22, -1990404162)),
            (r = l(r, n, o, s, t[a + 12], 7, 1804603682)),
            (s = l(s, r, n, o, t[a + 13], 12, -40341101)),
            (o = l(o, s, r, n, t[a + 14], 17, -1502002290)),
            (n = l(n, o, s, r, t[a + 15], 22, 1236535329)),
            (r = h(r, n, o, s, t[a + 1], 5, -165796510)),
            (s = h(s, r, n, o, t[a + 6], 9, -1069501632)),
            (o = h(o, s, r, n, t[a + 11], 14, 643717713)),
            (n = h(n, o, s, r, t[a], 20, -373897302)),
            (r = h(r, n, o, s, t[a + 5], 5, -701558691)),
            (s = h(s, r, n, o, t[a + 10], 9, 38016083)),
            (o = h(o, s, r, n, t[a + 15], 14, -660478335)),
            (n = h(n, o, s, r, t[a + 4], 20, -405537848)),
            (r = h(r, n, o, s, t[a + 9], 5, 568446438)),
            (s = h(s, r, n, o, t[a + 14], 9, -1019803690)),
            (o = h(o, s, r, n, t[a + 3], 14, -187363961)),
            (n = h(n, o, s, r, t[a + 8], 20, 1163531501)),
            (r = h(r, n, o, s, t[a + 13], 5, -1444681467)),
            (s = h(s, r, n, o, t[a + 2], 9, -51403784)),
            (o = h(o, s, r, n, t[a + 7], 14, 1735328473)),
            (n = h(n, o, s, r, t[a + 12], 20, -1926607734)),
            (r = d(r, n, o, s, t[a + 5], 4, -378558)),
            (s = d(s, r, n, o, t[a + 8], 11, -2022574463)),
            (o = d(o, s, r, n, t[a + 11], 16, 1839030562)),
            (n = d(n, o, s, r, t[a + 14], 23, -35309556)),
            (r = d(r, n, o, s, t[a + 1], 4, -1530992060)),
            (s = d(s, r, n, o, t[a + 4], 11, 1272893353)),
            (o = d(o, s, r, n, t[a + 7], 16, -155497632)),
            (n = d(n, o, s, r, t[a + 10], 23, -1094730640)),
            (r = d(r, n, o, s, t[a + 13], 4, 681279174)),
            (s = d(s, r, n, o, t[a], 11, -358537222)),
            (o = d(o, s, r, n, t[a + 3], 16, -722521979)),
            (n = d(n, o, s, r, t[a + 6], 23, 76029189)),
            (r = d(r, n, o, s, t[a + 9], 4, -640364487)),
            (s = d(s, r, n, o, t[a + 12], 11, -421815835)),
            (o = d(o, s, r, n, t[a + 15], 16, 530742520)),
            (n = d(n, o, s, r, t[a + 2], 23, -995338651)),
            (r = p(r, n, o, s, t[a], 6, -198630844)),
            (s = p(s, r, n, o, t[a + 7], 10, 1126891415)),
            (o = p(o, s, r, n, t[a + 14], 15, -1416354905)),
            (n = p(n, o, s, r, t[a + 5], 21, -57434055)),
            (r = p(r, n, o, s, t[a + 12], 6, 1700485571)),
            (s = p(s, r, n, o, t[a + 3], 10, -1894986606)),
            (o = p(o, s, r, n, t[a + 10], 15, -1051523)),
            (n = p(n, o, s, r, t[a + 1], 21, -2054922799)),
            (r = p(r, n, o, s, t[a + 8], 6, 1873313359)),
            (s = p(s, r, n, o, t[a + 15], 10, -30611744)),
            (o = p(o, s, r, n, t[a + 6], 15, -1560198380)),
            (n = p(n, o, s, r, t[a + 13], 21, 1309151649)),
            (r = p(r, n, o, s, t[a + 4], 6, -145523070)),
            (s = p(s, r, n, o, t[a + 11], 10, -1120210379)),
            (o = p(o, s, r, n, t[a + 2], 15, 718787259)),
            (n = p(n, o, s, r, t[a + 9], 21, -343485551)),
            (r = c(r, u)),
            (n = c(n, f)),
            (o = c(o, y)),
            (s = c(s, v)));
        }
        return [r, n, o, s];
      }
      function a(t) {
        if (0 === t.length) return [];
        for (
          var e = 8 * t.length, r = new Uint32Array(i(e)), n = 0;
          n < e;
          n += 8
        )
          r[n >> 5] |= (255 & t[n / 8]) << (n % 32);
        return r;
      }
      function c(t, e) {
        var r = (65535 & t) + (65535 & e),
          n = (t >> 16) + (e >> 16) + (r >> 16);
        return (n << 16) | (65535 & r);
      }
      function u(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function f(t, e, r, n, o, i) {
        return c(u(c(c(e, t), c(n, i)), o), r);
      }
      function l(t, e, r, n, o, i, s) {
        return f((e & r) | (~e & n), t, e, o, i, s);
      }
      function h(t, e, r, n, o, i, s) {
        return f((e & n) | (r & ~n), t, e, o, i, s);
      }
      function d(t, e, r, n, o, i, s) {
        return f(e ^ r ^ n, t, e, o, i, s);
      }
      function p(t, e, r, n, o, i, s) {
        return f(r ^ (e | ~n), t, e, o, i, s);
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = n;
    },
    8400: function (t, e, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = n(r(6259)),
        i = n(r(4720));
      function s(t, e, r) {
        t = t || {};
        var n = t.random || (t.rng || o.default)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          r = r || 0;
          for (var s = 0; s < 16; ++s) e[r + s] = n[s];
          return e;
        }
        return (0, i.default)(n);
      }
      e.default = s;
    },
    8401: function (t, e, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = n(r(6260)),
        i = n(r(8402)),
        s = (0, o.default)("v5", 80, i.default);
      e.default = s;
    },
    8402: function (t, e, r) {
      "use strict";
      function n(t, e, r, n) {
        switch (t) {
          case 0:
            return (e & r) ^ (~e & n);
          case 1:
            return e ^ r ^ n;
          case 2:
            return (e & r) ^ (e & n) ^ (r & n);
          case 3:
            return e ^ r ^ n;
        }
      }
      function o(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function i(t) {
        var e = [1518500249, 1859775393, 2400959708, 3395469782],
          r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ("string" === typeof t) {
          var i = unescape(encodeURIComponent(t));
          t = [];
          for (var s = 0; s < i.length; ++s) t.push(i.charCodeAt(s));
        } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
        t.push(128);
        for (
          var a = t.length / 4 + 2,
            c = Math.ceil(a / 16),
            u = new Array(c),
            f = 0;
          f < c;
          ++f
        ) {
          for (var l = new Uint32Array(16), h = 0; h < 16; ++h)
            l[h] =
              (t[64 * f + 4 * h] << 24) |
              (t[64 * f + 4 * h + 1] << 16) |
              (t[64 * f + 4 * h + 2] << 8) |
              t[64 * f + 4 * h + 3];
          u[f] = l;
        }
        ((u[c - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
          (u[c - 1][14] = Math.floor(u[c - 1][14])),
          (u[c - 1][15] = (8 * (t.length - 1)) & 4294967295));
        for (var d = 0; d < c; ++d) {
          for (var p = new Uint32Array(80), y = 0; y < 16; ++y) p[y] = u[d][y];
          for (var v = 16; v < 80; ++v)
            p[v] = o(p[v - 3] ^ p[v - 8] ^ p[v - 14] ^ p[v - 16], 1);
          for (
            var w = r[0], b = r[1], g = r[2], m = r[3], E = r[4], B = 0;
            B < 80;
            ++B
          ) {
            var A = Math.floor(B / 20),
              x = (o(w, 5) + n(A, b, g, m) + E + e[A] + p[B]) >>> 0;
            ((E = m), (m = g), (g = o(b, 30) >>> 0), (b = w), (w = x));
          }
          ((r[0] = (r[0] + w) >>> 0),
            (r[1] = (r[1] + b) >>> 0),
            (r[2] = (r[2] + g) >>> 0),
            (r[3] = (r[3] + m) >>> 0),
            (r[4] = (r[4] + E) >>> 0));
        }
        return [
          (r[0] >> 24) & 255,
          (r[0] >> 16) & 255,
          (r[0] >> 8) & 255,
          255 & r[0],
          (r[1] >> 24) & 255,
          (r[1] >> 16) & 255,
          (r[1] >> 8) & 255,
          255 & r[1],
          (r[2] >> 24) & 255,
          (r[2] >> 16) & 255,
          (r[2] >> 8) & 255,
          255 & r[2],
          (r[3] >> 24) & 255,
          (r[3] >> 16) & 255,
          (r[3] >> 8) & 255,
          255 & r[3],
          (r[4] >> 24) & 255,
          (r[4] >> 16) & 255,
          (r[4] >> 8) & 255,
          255 & r[4],
        ];
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = i;
    },
    8403: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = "00000000-0000-0000-0000-000000000000";
    },
    8404: function (t, e, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = n(r(4721));
      function i(t) {
        if (!(0, o.default)(t)) throw TypeError("Invalid UUID");
        return parseInt(t.substr(14, 1), 16);
      }
      e.default = i;
    },
    8405: function (t, e, r) {
      "use strict";
      const n = r(6258).v4,
        o = function (t, e, r, o) {
          if ("string" !== typeof t)
            throw new TypeError(t + " must be a string");
          o = o || {};
          const i = "number" === typeof o.version ? o.version : 2;
          if (1 !== i && 2 !== i) throw new TypeError(i + " must be 1 or 2");
          const s = { method: t };
          if ((2 === i && (s.jsonrpc = "2.0"), e)) {
            if ("object" !== typeof e && !Array.isArray(e))
              throw new TypeError(e + " must be an object, array or omitted");
            s.params = e;
          }
          if ("undefined" === typeof r) {
            const t =
              "function" === typeof o.generator
                ? o.generator
                : function () {
                    return n();
                  };
            s.id = t(s, o);
          } else
            2 === i && null === r
              ? o.notificationIdNull && (s.id = null)
              : (s.id = r);
          return s;
        };
      t.exports = o;
    },
    8406: function (t, e) {
      function r(t) {
        return /^\d+\.\d+\.\d+$/.test(t);
      }
      function n(t) {
        if (!r(t)) throw new Error("Invalid semver version: " + t);
        const [e, n, o] = t.split(".").map((t) => parseInt(t, 10));
        return { major: e, minor: n, patch: o };
      }
      function o(t, e) {
        const r = n(t),
          o = n(e);
        return r.major !== o.major
          ? r.major < o.major
          : r.minor !== o.minor
            ? r.minor < o.minor
            : r.patch !== o.patch && r.patch < o.patch;
      }
      function i(t, e) {
        const r = n(t),
          o = n(e);
        return r.major !== o.major
          ? r.major <= o.major
          : r.minor !== o.minor
            ? r.minor <= o.minor
            : r.patch === o.patch || r.patch <= o.patch;
      }
      function s(t, e) {
        const r = n(t),
          o = n(e);
        return r.major !== o.major
          ? r.major > o.major
          : r.minor !== o.minor
            ? r.minor > o.minor
            : r.patch !== o.patch && r.patch > o.patch;
      }
      function a(t, e) {
        const r = n(t),
          o = n(e);
        return r.major !== o.major
          ? r.major >= o.major
          : r.minor !== o.minor
            ? r.minor >= o.minor
            : r.patch === o.patch || r.patch >= o.patch;
      }
      function c(t, e) {
        return (n(t), n(e), t === e);
      }
      t.exports = { isValid: r, parse: n, lt: o, lte: i, gt: s, gte: a, eq: c };
    },
  },
]);
