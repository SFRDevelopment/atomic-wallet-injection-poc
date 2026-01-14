(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [167, 422],
  {
    2715: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = n(r(69)),
        s = n(r(230)),
        o = r(19),
        a = r(27),
        c = n(r(794)),
        u = n(r(8115)),
        l = n(r(158));
      function h(e, t) {
        (f(e, t), t.add(e));
      }
      function d(e, t, r) {
        (f(e, t), t.set(e, r));
      }
      function f(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function p(e, t) {
        return e.get(g(e, t));
      }
      function y(e, t, r) {
        return (e.set(g(e, t), r), r);
      }
      function g(e, t, r) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : r;
        throw new TypeError("Private element is not present on this object");
      }
      const b = "Aptos",
        w = "APT",
        m = 8,
        v = "m/44'/637'/0'/0'/0'",
        E = "0",
        A = "0x1::aptos_account",
        _ = "transfer",
        x = 1,
        T = 100,
        S = 1e3,
        U = 2e3,
        R = 30,
        B = "aptosSdk";
      var k = new WeakMap(),
        C = new WeakMap(),
        z = new WeakMap(),
        H = new WeakMap(),
        q = new WeakMap(),
        L = new WeakMap(),
        I = new WeakMap(),
        O = new WeakMap(),
        P = new WeakSet();
      class APTCoin extends (0, l.default)(s.default) {
        constructor(e) {
          let {
            alias: t,
            feeData: n,
            explorers: s,
            txWebUrl: o,
            socket: a,
            id: l,
          } = e;
          const f = {
            id: l,
            alias: t,
            name: b,
            ticker: w,
            decimal: m,
            unspendableBalance: E,
            explorers: s,
            txWebUrl: o,
            socket: a,
            feeData: n,
            dependencies: {
              [B]: new c.default(() =>
                Promise.resolve().then(r.t.bind(null, 6188, 7)),
              ),
            },
          };
          (super(f),
            h(this, P),
            d(this, k, void 0),
            (0, i.default)(this, "publicKey", void 0),
            d(this, C, { account: void 0, isRegistered: !1 }),
            d(this, z, void 0),
            d(this, H, void 0),
            d(this, q, void 0),
            d(this, L, void 0),
            d(this, I, void 0),
            d(this, O, void 0),
            this.setExplorersModules([u.default]),
            this.loadExplorers(f),
            (this.derivation = v),
            this.setFeeData(n));
        }
        loadLib() {
          return super.loadLib(B);
        }
        setFeeData(e) {
          var t, r, n, i, s, o;
          (void 0 === e && (e = {}),
            super.setFeeData(e),
            y(
              z,
              this,
              null !== (t = e.defaultGasPrice) && void 0 !== t ? t : T,
            ),
            y(
              H,
              this,
              null !== (r = e.gasPriceCoefficient) && void 0 !== r ? r : 1,
            ),
            y(
              q,
              this,
              null !== (n = e.defaultMaxGasPrice) && void 0 !== n ? n : S,
            ),
            y(L, this, null !== (i = e.gasLimit) && void 0 !== i ? i : U),
            y(
              I,
              this,
              null !== (s = e.gasLimitCoefficient) && void 0 !== s ? s : 1,
            ),
            y(
              O,
              this,
              null !== (o = e.txExpirationTimeout) && void 0 !== o ? o : R,
            ));
        }
        async setPrivateKey(e, t) {
          const { AptosAccount: r, HexString: n } = await this.loadLib(),
            i = new r(new n(e).toUint8Array());
          g(P, this, N).call(this, i);
        }
        async loadWallet(e, t) {
          const { AptosAccount: r } = await this.loadLib(),
            n = r.fromDerivePath(v, t);
          return (
            g(P, this, N).call(this, n),
            { id: this.id, privateKey: p(k, this), address: this.address }
          );
        }
        async validateAddress(e) {
          try {
            const {
              TxnBuilderTypes: { AccountAddress: t },
            } = await this.loadLib();
            return !!t.fromHex(e);
          } catch {
            return !1;
          }
        }
        async getInfo() {
          try {
            var e;
            const { balance: t, isRegistered: r } =
              null !==
                (e = await this.getProvider("balance").getInfo(this.address)) &&
              void 0 !== e
                ? e
                : {};
            return (
              r && ((p(C, this).isRegistered = !0), (this.balance = t)),
              { balance: t }
            );
          } catch (t) {
            throw new o.ExternalError({
              type: a.EXTERNAL_ERROR,
              error: t,
              instance: this,
            });
          }
        }
        async getGasPrice() {
          const { gas_estimate: e } =
            await this.getProvider("node").getGasPrice();
          return parseInt(e, 10);
        }
        async getFee(e) {
          try {
            const { gasPrice: t, gasLimit: r } = await g(P, this, D).call(
              this,
              e,
            );
            return String(t * r);
          } catch (t) {
            throw new o.ExternalError({
              type: a.EXTERNAL_ERROR,
              error: t,
              instance: this,
            });
          }
        }
        async createTransaction(e) {
          let { address: t, amount: r, userGasPrice: n, gasLimit: i } = e;
          const {
              AptosClient: s,
              BCS: c,
              TxnBuilderTypes: {
                AccountAddress: u,
                ChainId: l,
                EntryFunction: h,
                RawTransaction: d,
                TransactionPayloadEntryFunction: f,
              },
            } = await this.loadLib(),
            y = new f(
              h.natural(
                A,
                _,
                [],
                [c.bcsToBytes(u.fromHex(t)), c.bcsSerializeUint64(BigInt(r))],
              ),
            );
          try {
            const [{ sequence_number: e }, { gasPrice: t, gasLimit: r }] =
                await Promise.all([
                  this.getProvider("node").getAccount(this.address),
                  g(P, this, D).call(this, { userGasPrice: n, gasLimit: i }),
                ]),
              o = new d(
                u.fromHex(this.address),
                BigInt(e),
                y,
                BigInt(r),
                BigInt(t),
                g(P, this, M).call(this),
                new l(x),
              );
            return s.generateBCSTransaction(p(C, this).account, o);
          } catch (b) {
            throw new o.ExternalError({
              type: a.EXTERNAL_ERROR,
              error: b,
              instance: this,
            });
          }
        }
        sendTransaction(e) {
          return this.getProvider("send").sendTransaction(e);
        }
        get instance() {
          return Object.assign(super.instance, {
            getLocalAccount: () => p(C, this),
          });
        }
      }
      function M() {
        return BigInt(Math.floor(Date.now() / 1e3) + p(O, this));
      }
      function N(e) {
        const {
          address: t,
          publicKeyHex: r,
          privateKeyHex: n,
        } = e.toPrivateKeyObject();
        ((p(C, this).account = e),
          (this.address = t),
          (this.publicKey = r),
          y(k, this, n));
      }
      async function D(e) {
        var t, r, n;
        let { userGasPrice: i = null, gasLimit: s = null } =
          void 0 === e ? {} : e;
        const o = i
            ? Number(i)
            : null !== (t = null) && void 0 !== t
              ? t
              : (null !== (r = await this.getGasPrice()) && void 0 !== r
                  ? r
                  : p(z, this)) * p(H, this),
          a = o < p(q, this) ? o : p(q, this),
          c = s
            ? Number(s)
            : null !== (n = null) && void 0 !== n
              ? n
              : p(L, this) * p(I, this);
        return { gasPrice: a, gasLimit: c };
      }
      t.default = APTCoin;
    },
    2925: function (e, t, r) {
      (function (e) {
        "use strict";
        var t = function (e) {
            var t,
              r = new Float64Array(16);
            if (e) for (t = 0; t < e.length; t++) r[t] = e[t];
            return r;
          },
          n = function () {
            throw new Error("no PRNG");
          },
          i = new Uint8Array(16),
          s = new Uint8Array(32);
        s[0] = 9;
        var o = t(),
          a = t([1]),
          c = t([56129, 1]),
          u = t([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          l = t([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ]),
          h = t([
            54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412,
            64982, 57905, 49316, 21502, 52590, 14035, 8553,
          ]),
          d = t([
            26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
            26214, 26214, 26214, 26214, 26214, 26214, 26214,
          ]),
          f = t([
            41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
            153, 11085, 57099, 20417, 9344, 11139,
          ]);
        function p(e, t, r, n) {
          ((e[t] = (r >> 24) & 255),
            (e[t + 1] = (r >> 16) & 255),
            (e[t + 2] = (r >> 8) & 255),
            (e[t + 3] = 255 & r),
            (e[t + 4] = (n >> 24) & 255),
            (e[t + 5] = (n >> 16) & 255),
            (e[t + 6] = (n >> 8) & 255),
            (e[t + 7] = 255 & n));
        }
        function y(e, t, r, n, i) {
          var s,
            o = 0;
          for (s = 0; s < i; s++) o |= e[t + s] ^ r[n + s];
          return (1 & ((o - 1) >>> 8)) - 1;
        }
        function g(e, t, r, n) {
          return y(e, t, r, n, 16);
        }
        function b(e, t, r, n) {
          return y(e, t, r, n, 32);
        }
        function w(e, t, r, n) {
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
              l =
                (255 & n[4]) |
                ((255 & n[5]) << 8) |
                ((255 & n[6]) << 16) |
                ((255 & n[7]) << 24),
              h =
                (255 & t[0]) |
                ((255 & t[1]) << 8) |
                ((255 & t[2]) << 16) |
                ((255 & t[3]) << 24),
              d =
                (255 & t[4]) |
                ((255 & t[5]) << 8) |
                ((255 & t[6]) << 16) |
                ((255 & t[7]) << 24),
              f =
                (255 & t[8]) |
                ((255 & t[9]) << 8) |
                ((255 & t[10]) << 16) |
                ((255 & t[11]) << 24),
              p =
                (255 & t[12]) |
                ((255 & t[13]) << 8) |
                ((255 & t[14]) << 16) |
                ((255 & t[15]) << 24),
              y =
                (255 & n[8]) |
                ((255 & n[9]) << 8) |
                ((255 & n[10]) << 16) |
                ((255 & n[11]) << 24),
              g =
                (255 & r[16]) |
                ((255 & r[17]) << 8) |
                ((255 & r[18]) << 16) |
                ((255 & r[19]) << 24),
              b =
                (255 & r[20]) |
                ((255 & r[21]) << 8) |
                ((255 & r[22]) << 16) |
                ((255 & r[23]) << 24),
              w =
                (255 & r[24]) |
                ((255 & r[25]) << 8) |
                ((255 & r[26]) << 16) |
                ((255 & r[27]) << 24),
              m =
                (255 & r[28]) |
                ((255 & r[29]) << 8) |
                ((255 & r[30]) << 16) |
                ((255 & r[31]) << 24),
              v =
                (255 & n[12]) |
                ((255 & n[13]) << 8) |
                ((255 & n[14]) << 16) |
                ((255 & n[15]) << 24),
              E = s,
              A = o,
              _ = a,
              x = c,
              T = u,
              S = l,
              U = h,
              R = d,
              B = f,
              k = p,
              C = y,
              z = g,
              H = b,
              q = w,
              L = m,
              I = v,
              O = 0;
            O < 20;
            O += 2
          )
            ((i = (E + H) | 0),
              (T ^= (i << 7) | (i >>> 25)),
              (i = (T + E) | 0),
              (B ^= (i << 9) | (i >>> 23)),
              (i = (B + T) | 0),
              (H ^= (i << 13) | (i >>> 19)),
              (i = (H + B) | 0),
              (E ^= (i << 18) | (i >>> 14)),
              (i = (S + A) | 0),
              (k ^= (i << 7) | (i >>> 25)),
              (i = (k + S) | 0),
              (q ^= (i << 9) | (i >>> 23)),
              (i = (q + k) | 0),
              (A ^= (i << 13) | (i >>> 19)),
              (i = (A + q) | 0),
              (S ^= (i << 18) | (i >>> 14)),
              (i = (C + U) | 0),
              (L ^= (i << 7) | (i >>> 25)),
              (i = (L + C) | 0),
              (_ ^= (i << 9) | (i >>> 23)),
              (i = (_ + L) | 0),
              (U ^= (i << 13) | (i >>> 19)),
              (i = (U + _) | 0),
              (C ^= (i << 18) | (i >>> 14)),
              (i = (I + z) | 0),
              (x ^= (i << 7) | (i >>> 25)),
              (i = (x + I) | 0),
              (R ^= (i << 9) | (i >>> 23)),
              (i = (R + x) | 0),
              (z ^= (i << 13) | (i >>> 19)),
              (i = (z + R) | 0),
              (I ^= (i << 18) | (i >>> 14)),
              (i = (E + x) | 0),
              (A ^= (i << 7) | (i >>> 25)),
              (i = (A + E) | 0),
              (_ ^= (i << 9) | (i >>> 23)),
              (i = (_ + A) | 0),
              (x ^= (i << 13) | (i >>> 19)),
              (i = (x + _) | 0),
              (E ^= (i << 18) | (i >>> 14)),
              (i = (S + T) | 0),
              (U ^= (i << 7) | (i >>> 25)),
              (i = (U + S) | 0),
              (R ^= (i << 9) | (i >>> 23)),
              (i = (R + U) | 0),
              (T ^= (i << 13) | (i >>> 19)),
              (i = (T + R) | 0),
              (S ^= (i << 18) | (i >>> 14)),
              (i = (C + k) | 0),
              (z ^= (i << 7) | (i >>> 25)),
              (i = (z + C) | 0),
              (B ^= (i << 9) | (i >>> 23)),
              (i = (B + z) | 0),
              (k ^= (i << 13) | (i >>> 19)),
              (i = (k + B) | 0),
              (C ^= (i << 18) | (i >>> 14)),
              (i = (I + L) | 0),
              (H ^= (i << 7) | (i >>> 25)),
              (i = (H + I) | 0),
              (q ^= (i << 9) | (i >>> 23)),
              (i = (q + H) | 0),
              (L ^= (i << 13) | (i >>> 19)),
              (i = (L + q) | 0),
              (I ^= (i << 18) | (i >>> 14)));
          ((E = (E + s) | 0),
            (A = (A + o) | 0),
            (_ = (_ + a) | 0),
            (x = (x + c) | 0),
            (T = (T + u) | 0),
            (S = (S + l) | 0),
            (U = (U + h) | 0),
            (R = (R + d) | 0),
            (B = (B + f) | 0),
            (k = (k + p) | 0),
            (C = (C + y) | 0),
            (z = (z + g) | 0),
            (H = (H + b) | 0),
            (q = (q + w) | 0),
            (L = (L + m) | 0),
            (I = (I + v) | 0),
            (e[0] = (E >>> 0) & 255),
            (e[1] = (E >>> 8) & 255),
            (e[2] = (E >>> 16) & 255),
            (e[3] = (E >>> 24) & 255),
            (e[4] = (A >>> 0) & 255),
            (e[5] = (A >>> 8) & 255),
            (e[6] = (A >>> 16) & 255),
            (e[7] = (A >>> 24) & 255),
            (e[8] = (_ >>> 0) & 255),
            (e[9] = (_ >>> 8) & 255),
            (e[10] = (_ >>> 16) & 255),
            (e[11] = (_ >>> 24) & 255),
            (e[12] = (x >>> 0) & 255),
            (e[13] = (x >>> 8) & 255),
            (e[14] = (x >>> 16) & 255),
            (e[15] = (x >>> 24) & 255),
            (e[16] = (T >>> 0) & 255),
            (e[17] = (T >>> 8) & 255),
            (e[18] = (T >>> 16) & 255),
            (e[19] = (T >>> 24) & 255),
            (e[20] = (S >>> 0) & 255),
            (e[21] = (S >>> 8) & 255),
            (e[22] = (S >>> 16) & 255),
            (e[23] = (S >>> 24) & 255),
            (e[24] = (U >>> 0) & 255),
            (e[25] = (U >>> 8) & 255),
            (e[26] = (U >>> 16) & 255),
            (e[27] = (U >>> 24) & 255),
            (e[28] = (R >>> 0) & 255),
            (e[29] = (R >>> 8) & 255),
            (e[30] = (R >>> 16) & 255),
            (e[31] = (R >>> 24) & 255),
            (e[32] = (B >>> 0) & 255),
            (e[33] = (B >>> 8) & 255),
            (e[34] = (B >>> 16) & 255),
            (e[35] = (B >>> 24) & 255),
            (e[36] = (k >>> 0) & 255),
            (e[37] = (k >>> 8) & 255),
            (e[38] = (k >>> 16) & 255),
            (e[39] = (k >>> 24) & 255),
            (e[40] = (C >>> 0) & 255),
            (e[41] = (C >>> 8) & 255),
            (e[42] = (C >>> 16) & 255),
            (e[43] = (C >>> 24) & 255),
            (e[44] = (z >>> 0) & 255),
            (e[45] = (z >>> 8) & 255),
            (e[46] = (z >>> 16) & 255),
            (e[47] = (z >>> 24) & 255),
            (e[48] = (H >>> 0) & 255),
            (e[49] = (H >>> 8) & 255),
            (e[50] = (H >>> 16) & 255),
            (e[51] = (H >>> 24) & 255),
            (e[52] = (q >>> 0) & 255),
            (e[53] = (q >>> 8) & 255),
            (e[54] = (q >>> 16) & 255),
            (e[55] = (q >>> 24) & 255),
            (e[56] = (L >>> 0) & 255),
            (e[57] = (L >>> 8) & 255),
            (e[58] = (L >>> 16) & 255),
            (e[59] = (L >>> 24) & 255),
            (e[60] = (I >>> 0) & 255),
            (e[61] = (I >>> 8) & 255),
            (e[62] = (I >>> 16) & 255),
            (e[63] = (I >>> 24) & 255));
        }
        function m(e, t, r, n) {
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
              l =
                (255 & n[4]) |
                ((255 & n[5]) << 8) |
                ((255 & n[6]) << 16) |
                ((255 & n[7]) << 24),
              h =
                (255 & t[0]) |
                ((255 & t[1]) << 8) |
                ((255 & t[2]) << 16) |
                ((255 & t[3]) << 24),
              d =
                (255 & t[4]) |
                ((255 & t[5]) << 8) |
                ((255 & t[6]) << 16) |
                ((255 & t[7]) << 24),
              f =
                (255 & t[8]) |
                ((255 & t[9]) << 8) |
                ((255 & t[10]) << 16) |
                ((255 & t[11]) << 24),
              p =
                (255 & t[12]) |
                ((255 & t[13]) << 8) |
                ((255 & t[14]) << 16) |
                ((255 & t[15]) << 24),
              y =
                (255 & n[8]) |
                ((255 & n[9]) << 8) |
                ((255 & n[10]) << 16) |
                ((255 & n[11]) << 24),
              g =
                (255 & r[16]) |
                ((255 & r[17]) << 8) |
                ((255 & r[18]) << 16) |
                ((255 & r[19]) << 24),
              b =
                (255 & r[20]) |
                ((255 & r[21]) << 8) |
                ((255 & r[22]) << 16) |
                ((255 & r[23]) << 24),
              w =
                (255 & r[24]) |
                ((255 & r[25]) << 8) |
                ((255 & r[26]) << 16) |
                ((255 & r[27]) << 24),
              m =
                (255 & r[28]) |
                ((255 & r[29]) << 8) |
                ((255 & r[30]) << 16) |
                ((255 & r[31]) << 24),
              v =
                (255 & n[12]) |
                ((255 & n[13]) << 8) |
                ((255 & n[14]) << 16) |
                ((255 & n[15]) << 24),
              E = s,
              A = o,
              _ = a,
              x = c,
              T = u,
              S = l,
              U = h,
              R = d,
              B = f,
              k = p,
              C = y,
              z = g,
              H = b,
              q = w,
              L = m,
              I = v,
              O = 0;
            O < 20;
            O += 2
          )
            ((i = (E + H) | 0),
              (T ^= (i << 7) | (i >>> 25)),
              (i = (T + E) | 0),
              (B ^= (i << 9) | (i >>> 23)),
              (i = (B + T) | 0),
              (H ^= (i << 13) | (i >>> 19)),
              (i = (H + B) | 0),
              (E ^= (i << 18) | (i >>> 14)),
              (i = (S + A) | 0),
              (k ^= (i << 7) | (i >>> 25)),
              (i = (k + S) | 0),
              (q ^= (i << 9) | (i >>> 23)),
              (i = (q + k) | 0),
              (A ^= (i << 13) | (i >>> 19)),
              (i = (A + q) | 0),
              (S ^= (i << 18) | (i >>> 14)),
              (i = (C + U) | 0),
              (L ^= (i << 7) | (i >>> 25)),
              (i = (L + C) | 0),
              (_ ^= (i << 9) | (i >>> 23)),
              (i = (_ + L) | 0),
              (U ^= (i << 13) | (i >>> 19)),
              (i = (U + _) | 0),
              (C ^= (i << 18) | (i >>> 14)),
              (i = (I + z) | 0),
              (x ^= (i << 7) | (i >>> 25)),
              (i = (x + I) | 0),
              (R ^= (i << 9) | (i >>> 23)),
              (i = (R + x) | 0),
              (z ^= (i << 13) | (i >>> 19)),
              (i = (z + R) | 0),
              (I ^= (i << 18) | (i >>> 14)),
              (i = (E + x) | 0),
              (A ^= (i << 7) | (i >>> 25)),
              (i = (A + E) | 0),
              (_ ^= (i << 9) | (i >>> 23)),
              (i = (_ + A) | 0),
              (x ^= (i << 13) | (i >>> 19)),
              (i = (x + _) | 0),
              (E ^= (i << 18) | (i >>> 14)),
              (i = (S + T) | 0),
              (U ^= (i << 7) | (i >>> 25)),
              (i = (U + S) | 0),
              (R ^= (i << 9) | (i >>> 23)),
              (i = (R + U) | 0),
              (T ^= (i << 13) | (i >>> 19)),
              (i = (T + R) | 0),
              (S ^= (i << 18) | (i >>> 14)),
              (i = (C + k) | 0),
              (z ^= (i << 7) | (i >>> 25)),
              (i = (z + C) | 0),
              (B ^= (i << 9) | (i >>> 23)),
              (i = (B + z) | 0),
              (k ^= (i << 13) | (i >>> 19)),
              (i = (k + B) | 0),
              (C ^= (i << 18) | (i >>> 14)),
              (i = (I + L) | 0),
              (H ^= (i << 7) | (i >>> 25)),
              (i = (H + I) | 0),
              (q ^= (i << 9) | (i >>> 23)),
              (i = (q + H) | 0),
              (L ^= (i << 13) | (i >>> 19)),
              (i = (L + q) | 0),
              (I ^= (i << 18) | (i >>> 14)));
          ((e[0] = (E >>> 0) & 255),
            (e[1] = (E >>> 8) & 255),
            (e[2] = (E >>> 16) & 255),
            (e[3] = (E >>> 24) & 255),
            (e[4] = (S >>> 0) & 255),
            (e[5] = (S >>> 8) & 255),
            (e[6] = (S >>> 16) & 255),
            (e[7] = (S >>> 24) & 255),
            (e[8] = (C >>> 0) & 255),
            (e[9] = (C >>> 8) & 255),
            (e[10] = (C >>> 16) & 255),
            (e[11] = (C >>> 24) & 255),
            (e[12] = (I >>> 0) & 255),
            (e[13] = (I >>> 8) & 255),
            (e[14] = (I >>> 16) & 255),
            (e[15] = (I >>> 24) & 255),
            (e[16] = (U >>> 0) & 255),
            (e[17] = (U >>> 8) & 255),
            (e[18] = (U >>> 16) & 255),
            (e[19] = (U >>> 24) & 255),
            (e[20] = (R >>> 0) & 255),
            (e[21] = (R >>> 8) & 255),
            (e[22] = (R >>> 16) & 255),
            (e[23] = (R >>> 24) & 255),
            (e[24] = (B >>> 0) & 255),
            (e[25] = (B >>> 8) & 255),
            (e[26] = (B >>> 16) & 255),
            (e[27] = (B >>> 24) & 255),
            (e[28] = (k >>> 0) & 255),
            (e[29] = (k >>> 8) & 255),
            (e[30] = (k >>> 16) & 255),
            (e[31] = (k >>> 24) & 255));
        }
        function v(e, t, r, n) {
          w(e, t, r, n);
        }
        function E(e, t, r, n) {
          m(e, t, r, n);
        }
        var A = new Uint8Array([
          101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32,
          107,
        ]);
        function _(e, t, r, n, i, s, o) {
          var a,
            c,
            u = new Uint8Array(16),
            l = new Uint8Array(64);
          for (c = 0; c < 16; c++) u[c] = 0;
          for (c = 0; c < 8; c++) u[c] = s[c];
          while (i >= 64) {
            for (v(l, u, o, A), c = 0; c < 64; c++) e[t + c] = r[n + c] ^ l[c];
            for (a = 1, c = 8; c < 16; c++)
              ((a = (a + (255 & u[c])) | 0), (u[c] = 255 & a), (a >>>= 8));
            ((i -= 64), (t += 64), (n += 64));
          }
          if (i > 0)
            for (v(l, u, o, A), c = 0; c < i; c++) e[t + c] = r[n + c] ^ l[c];
          return 0;
        }
        function x(e, t, r, n, i) {
          var s,
            o,
            a = new Uint8Array(16),
            c = new Uint8Array(64);
          for (o = 0; o < 16; o++) a[o] = 0;
          for (o = 0; o < 8; o++) a[o] = n[o];
          while (r >= 64) {
            for (v(c, a, i, A), o = 0; o < 64; o++) e[t + o] = c[o];
            for (s = 1, o = 8; o < 16; o++)
              ((s = (s + (255 & a[o])) | 0), (a[o] = 255 & s), (s >>>= 8));
            ((r -= 64), (t += 64));
          }
          if (r > 0) for (v(c, a, i, A), o = 0; o < r; o++) e[t + o] = c[o];
          return 0;
        }
        function T(e, t, r, n, i) {
          var s = new Uint8Array(32);
          E(s, n, i, A);
          for (var o = new Uint8Array(8), a = 0; a < 8; a++) o[a] = n[a + 16];
          return x(e, t, r, o, s);
        }
        function S(e, t, r, n, i, s, o) {
          var a = new Uint8Array(32);
          E(a, s, o, A);
          for (var c = new Uint8Array(8), u = 0; u < 8; u++) c[u] = s[u + 16];
          return _(e, t, r, n, i, c, a);
        }
        var U = function (e) {
          var t, r, n, i, s, o, a, c;
          ((this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.leftover = 0),
            (this.fin = 0),
            (t = (255 & e[0]) | ((255 & e[1]) << 8)),
            (this.r[0] = 8191 & t),
            (r = (255 & e[2]) | ((255 & e[3]) << 8)),
            (this.r[1] = 8191 & ((t >>> 13) | (r << 3))),
            (n = (255 & e[4]) | ((255 & e[5]) << 8)),
            (this.r[2] = 7939 & ((r >>> 10) | (n << 6))),
            (i = (255 & e[6]) | ((255 & e[7]) << 8)),
            (this.r[3] = 8191 & ((n >>> 7) | (i << 9))),
            (s = (255 & e[8]) | ((255 & e[9]) << 8)),
            (this.r[4] = 255 & ((i >>> 4) | (s << 12))),
            (this.r[5] = (s >>> 1) & 8190),
            (o = (255 & e[10]) | ((255 & e[11]) << 8)),
            (this.r[6] = 8191 & ((s >>> 14) | (o << 2))),
            (a = (255 & e[12]) | ((255 & e[13]) << 8)),
            (this.r[7] = 8065 & ((o >>> 11) | (a << 5))),
            (c = (255 & e[14]) | ((255 & e[15]) << 8)),
            (this.r[8] = 8191 & ((a >>> 8) | (c << 8))),
            (this.r[9] = (c >>> 5) & 127),
            (this.pad[0] = (255 & e[16]) | ((255 & e[17]) << 8)),
            (this.pad[1] = (255 & e[18]) | ((255 & e[19]) << 8)),
            (this.pad[2] = (255 & e[20]) | ((255 & e[21]) << 8)),
            (this.pad[3] = (255 & e[22]) | ((255 & e[23]) << 8)),
            (this.pad[4] = (255 & e[24]) | ((255 & e[25]) << 8)),
            (this.pad[5] = (255 & e[26]) | ((255 & e[27]) << 8)),
            (this.pad[6] = (255 & e[28]) | ((255 & e[29]) << 8)),
            (this.pad[7] = (255 & e[30]) | ((255 & e[31]) << 8)));
        };
        function R(e, t, r, n, i, s) {
          var o = new U(s);
          return (o.update(r, n, i), o.finish(e, t), 0);
        }
        function B(e, t, r, n, i, s) {
          var o = new Uint8Array(16);
          return (R(o, 0, r, n, i, s), g(e, t, o, 0));
        }
        function k(e, t, r, n, i) {
          var s;
          if (r < 32) return -1;
          for (
            S(e, 0, t, 0, r, n, i), R(e, 16, e, 32, r - 32, e), s = 0;
            s < 16;
            s++
          )
            e[s] = 0;
          return 0;
        }
        function C(e, t, r, n, i) {
          var s,
            o = new Uint8Array(32);
          if (r < 32) return -1;
          if ((T(o, 0, 32, n, i), 0 !== B(t, 16, t, 32, r - 32, o))) return -1;
          for (S(e, 0, t, 0, r, n, i), s = 0; s < 32; s++) e[s] = 0;
          return 0;
        }
        function z(e, t) {
          var r;
          for (r = 0; r < 16; r++) e[r] = 0 | t[r];
        }
        function H(e) {
          var t,
            r,
            n = 1;
          for (t = 0; t < 16; t++)
            ((r = e[t] + n + 65535),
              (n = Math.floor(r / 65536)),
              (e[t] = r - 65536 * n));
          e[0] += n - 1 + 37 * (n - 1);
        }
        function q(e, t, r) {
          for (var n, i = ~(r - 1), s = 0; s < 16; s++)
            ((n = i & (e[s] ^ t[s])), (e[s] ^= n), (t[s] ^= n));
        }
        function L(e, r) {
          var n,
            i,
            s,
            o = t(),
            a = t();
          for (n = 0; n < 16; n++) a[n] = r[n];
          for (H(a), H(a), H(a), i = 0; i < 2; i++) {
            for (o[0] = a[0] - 65517, n = 1; n < 15; n++)
              ((o[n] = a[n] - 65535 - ((o[n - 1] >> 16) & 1)),
                (o[n - 1] &= 65535));
            ((o[15] = a[15] - 32767 - ((o[14] >> 16) & 1)),
              (s = (o[15] >> 16) & 1),
              (o[14] &= 65535),
              q(a, o, 1 - s));
          }
          for (n = 0; n < 16; n++)
            ((e[2 * n] = 255 & a[n]), (e[2 * n + 1] = a[n] >> 8));
        }
        function I(e, t) {
          var r = new Uint8Array(32),
            n = new Uint8Array(32);
          return (L(r, e), L(n, t), b(r, 0, n, 0));
        }
        function O(e) {
          var t = new Uint8Array(32);
          return (L(t, e), 1 & t[0]);
        }
        function P(e, t) {
          var r;
          for (r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
          e[15] &= 32767;
        }
        function M(e, t, r) {
          for (var n = 0; n < 16; n++) e[n] = t[n] + r[n];
        }
        function N(e, t, r) {
          for (var n = 0; n < 16; n++) e[n] = t[n] - r[n];
        }
        function D(e, t, r) {
          var n,
            i,
            s = 0,
            o = 0,
            a = 0,
            c = 0,
            u = 0,
            l = 0,
            h = 0,
            d = 0,
            f = 0,
            p = 0,
            y = 0,
            g = 0,
            b = 0,
            w = 0,
            m = 0,
            v = 0,
            E = 0,
            A = 0,
            _ = 0,
            x = 0,
            T = 0,
            S = 0,
            U = 0,
            R = 0,
            B = 0,
            k = 0,
            C = 0,
            z = 0,
            H = 0,
            q = 0,
            L = 0,
            I = r[0],
            O = r[1],
            P = r[2],
            M = r[3],
            N = r[4],
            D = r[5],
            F = r[6],
            j = r[7],
            $ = r[8],
            W = r[9],
            G = r[10],
            V = r[11],
            K = r[12],
            J = r[13],
            Y = r[14],
            X = r[15];
          ((n = t[0]),
            (s += n * I),
            (o += n * O),
            (a += n * P),
            (c += n * M),
            (u += n * N),
            (l += n * D),
            (h += n * F),
            (d += n * j),
            (f += n * $),
            (p += n * W),
            (y += n * G),
            (g += n * V),
            (b += n * K),
            (w += n * J),
            (m += n * Y),
            (v += n * X),
            (n = t[1]),
            (o += n * I),
            (a += n * O),
            (c += n * P),
            (u += n * M),
            (l += n * N),
            (h += n * D),
            (d += n * F),
            (f += n * j),
            (p += n * $),
            (y += n * W),
            (g += n * G),
            (b += n * V),
            (w += n * K),
            (m += n * J),
            (v += n * Y),
            (E += n * X),
            (n = t[2]),
            (a += n * I),
            (c += n * O),
            (u += n * P),
            (l += n * M),
            (h += n * N),
            (d += n * D),
            (f += n * F),
            (p += n * j),
            (y += n * $),
            (g += n * W),
            (b += n * G),
            (w += n * V),
            (m += n * K),
            (v += n * J),
            (E += n * Y),
            (A += n * X),
            (n = t[3]),
            (c += n * I),
            (u += n * O),
            (l += n * P),
            (h += n * M),
            (d += n * N),
            (f += n * D),
            (p += n * F),
            (y += n * j),
            (g += n * $),
            (b += n * W),
            (w += n * G),
            (m += n * V),
            (v += n * K),
            (E += n * J),
            (A += n * Y),
            (_ += n * X),
            (n = t[4]),
            (u += n * I),
            (l += n * O),
            (h += n * P),
            (d += n * M),
            (f += n * N),
            (p += n * D),
            (y += n * F),
            (g += n * j),
            (b += n * $),
            (w += n * W),
            (m += n * G),
            (v += n * V),
            (E += n * K),
            (A += n * J),
            (_ += n * Y),
            (x += n * X),
            (n = t[5]),
            (l += n * I),
            (h += n * O),
            (d += n * P),
            (f += n * M),
            (p += n * N),
            (y += n * D),
            (g += n * F),
            (b += n * j),
            (w += n * $),
            (m += n * W),
            (v += n * G),
            (E += n * V),
            (A += n * K),
            (_ += n * J),
            (x += n * Y),
            (T += n * X),
            (n = t[6]),
            (h += n * I),
            (d += n * O),
            (f += n * P),
            (p += n * M),
            (y += n * N),
            (g += n * D),
            (b += n * F),
            (w += n * j),
            (m += n * $),
            (v += n * W),
            (E += n * G),
            (A += n * V),
            (_ += n * K),
            (x += n * J),
            (T += n * Y),
            (S += n * X),
            (n = t[7]),
            (d += n * I),
            (f += n * O),
            (p += n * P),
            (y += n * M),
            (g += n * N),
            (b += n * D),
            (w += n * F),
            (m += n * j),
            (v += n * $),
            (E += n * W),
            (A += n * G),
            (_ += n * V),
            (x += n * K),
            (T += n * J),
            (S += n * Y),
            (U += n * X),
            (n = t[8]),
            (f += n * I),
            (p += n * O),
            (y += n * P),
            (g += n * M),
            (b += n * N),
            (w += n * D),
            (m += n * F),
            (v += n * j),
            (E += n * $),
            (A += n * W),
            (_ += n * G),
            (x += n * V),
            (T += n * K),
            (S += n * J),
            (U += n * Y),
            (R += n * X),
            (n = t[9]),
            (p += n * I),
            (y += n * O),
            (g += n * P),
            (b += n * M),
            (w += n * N),
            (m += n * D),
            (v += n * F),
            (E += n * j),
            (A += n * $),
            (_ += n * W),
            (x += n * G),
            (T += n * V),
            (S += n * K),
            (U += n * J),
            (R += n * Y),
            (B += n * X),
            (n = t[10]),
            (y += n * I),
            (g += n * O),
            (b += n * P),
            (w += n * M),
            (m += n * N),
            (v += n * D),
            (E += n * F),
            (A += n * j),
            (_ += n * $),
            (x += n * W),
            (T += n * G),
            (S += n * V),
            (U += n * K),
            (R += n * J),
            (B += n * Y),
            (k += n * X),
            (n = t[11]),
            (g += n * I),
            (b += n * O),
            (w += n * P),
            (m += n * M),
            (v += n * N),
            (E += n * D),
            (A += n * F),
            (_ += n * j),
            (x += n * $),
            (T += n * W),
            (S += n * G),
            (U += n * V),
            (R += n * K),
            (B += n * J),
            (k += n * Y),
            (C += n * X),
            (n = t[12]),
            (b += n * I),
            (w += n * O),
            (m += n * P),
            (v += n * M),
            (E += n * N),
            (A += n * D),
            (_ += n * F),
            (x += n * j),
            (T += n * $),
            (S += n * W),
            (U += n * G),
            (R += n * V),
            (B += n * K),
            (k += n * J),
            (C += n * Y),
            (z += n * X),
            (n = t[13]),
            (w += n * I),
            (m += n * O),
            (v += n * P),
            (E += n * M),
            (A += n * N),
            (_ += n * D),
            (x += n * F),
            (T += n * j),
            (S += n * $),
            (U += n * W),
            (R += n * G),
            (B += n * V),
            (k += n * K),
            (C += n * J),
            (z += n * Y),
            (H += n * X),
            (n = t[14]),
            (m += n * I),
            (v += n * O),
            (E += n * P),
            (A += n * M),
            (_ += n * N),
            (x += n * D),
            (T += n * F),
            (S += n * j),
            (U += n * $),
            (R += n * W),
            (B += n * G),
            (k += n * V),
            (C += n * K),
            (z += n * J),
            (H += n * Y),
            (q += n * X),
            (n = t[15]),
            (v += n * I),
            (E += n * O),
            (A += n * P),
            (_ += n * M),
            (x += n * N),
            (T += n * D),
            (S += n * F),
            (U += n * j),
            (R += n * $),
            (B += n * W),
            (k += n * G),
            (C += n * V),
            (z += n * K),
            (H += n * J),
            (q += n * Y),
            (L += n * X),
            (s += 38 * E),
            (o += 38 * A),
            (a += 38 * _),
            (c += 38 * x),
            (u += 38 * T),
            (l += 38 * S),
            (h += 38 * U),
            (d += 38 * R),
            (f += 38 * B),
            (p += 38 * k),
            (y += 38 * C),
            (g += 38 * z),
            (b += 38 * H),
            (w += 38 * q),
            (m += 38 * L),
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
            (n = c + i + 65535),
            (i = Math.floor(n / 65536)),
            (c = n - 65536 * i),
            (n = u + i + 65535),
            (i = Math.floor(n / 65536)),
            (u = n - 65536 * i),
            (n = l + i + 65535),
            (i = Math.floor(n / 65536)),
            (l = n - 65536 * i),
            (n = h + i + 65535),
            (i = Math.floor(n / 65536)),
            (h = n - 65536 * i),
            (n = d + i + 65535),
            (i = Math.floor(n / 65536)),
            (d = n - 65536 * i),
            (n = f + i + 65535),
            (i = Math.floor(n / 65536)),
            (f = n - 65536 * i),
            (n = p + i + 65535),
            (i = Math.floor(n / 65536)),
            (p = n - 65536 * i),
            (n = y + i + 65535),
            (i = Math.floor(n / 65536)),
            (y = n - 65536 * i),
            (n = g + i + 65535),
            (i = Math.floor(n / 65536)),
            (g = n - 65536 * i),
            (n = b + i + 65535),
            (i = Math.floor(n / 65536)),
            (b = n - 65536 * i),
            (n = w + i + 65535),
            (i = Math.floor(n / 65536)),
            (w = n - 65536 * i),
            (n = m + i + 65535),
            (i = Math.floor(n / 65536)),
            (m = n - 65536 * i),
            (n = v + i + 65535),
            (i = Math.floor(n / 65536)),
            (v = n - 65536 * i),
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
            (n = c + i + 65535),
            (i = Math.floor(n / 65536)),
            (c = n - 65536 * i),
            (n = u + i + 65535),
            (i = Math.floor(n / 65536)),
            (u = n - 65536 * i),
            (n = l + i + 65535),
            (i = Math.floor(n / 65536)),
            (l = n - 65536 * i),
            (n = h + i + 65535),
            (i = Math.floor(n / 65536)),
            (h = n - 65536 * i),
            (n = d + i + 65535),
            (i = Math.floor(n / 65536)),
            (d = n - 65536 * i),
            (n = f + i + 65535),
            (i = Math.floor(n / 65536)),
            (f = n - 65536 * i),
            (n = p + i + 65535),
            (i = Math.floor(n / 65536)),
            (p = n - 65536 * i),
            (n = y + i + 65535),
            (i = Math.floor(n / 65536)),
            (y = n - 65536 * i),
            (n = g + i + 65535),
            (i = Math.floor(n / 65536)),
            (g = n - 65536 * i),
            (n = b + i + 65535),
            (i = Math.floor(n / 65536)),
            (b = n - 65536 * i),
            (n = w + i + 65535),
            (i = Math.floor(n / 65536)),
            (w = n - 65536 * i),
            (n = m + i + 65535),
            (i = Math.floor(n / 65536)),
            (m = n - 65536 * i),
            (n = v + i + 65535),
            (i = Math.floor(n / 65536)),
            (v = n - 65536 * i),
            (s += i - 1 + 37 * (i - 1)),
            (e[0] = s),
            (e[1] = o),
            (e[2] = a),
            (e[3] = c),
            (e[4] = u),
            (e[5] = l),
            (e[6] = h),
            (e[7] = d),
            (e[8] = f),
            (e[9] = p),
            (e[10] = y),
            (e[11] = g),
            (e[12] = b),
            (e[13] = w),
            (e[14] = m),
            (e[15] = v));
        }
        function F(e, t) {
          D(e, t, t);
        }
        function j(e, r) {
          var n,
            i = t();
          for (n = 0; n < 16; n++) i[n] = r[n];
          for (n = 253; n >= 0; n--)
            (F(i, i), 2 !== n && 4 !== n && D(i, i, r));
          for (n = 0; n < 16; n++) e[n] = i[n];
        }
        function $(e, r) {
          var n,
            i = t();
          for (n = 0; n < 16; n++) i[n] = r[n];
          for (n = 250; n >= 0; n--) (F(i, i), 1 !== n && D(i, i, r));
          for (n = 0; n < 16; n++) e[n] = i[n];
        }
        function W(e, r, n) {
          var i,
            s,
            o = new Uint8Array(32),
            a = new Float64Array(80),
            u = t(),
            l = t(),
            h = t(),
            d = t(),
            f = t(),
            p = t();
          for (s = 0; s < 31; s++) o[s] = r[s];
          for (
            o[31] = (127 & r[31]) | 64, o[0] &= 248, P(a, n), s = 0;
            s < 16;
            s++
          )
            ((l[s] = a[s]), (d[s] = u[s] = h[s] = 0));
          for (u[0] = d[0] = 1, s = 254; s >= 0; --s)
            ((i = (o[s >>> 3] >>> (7 & s)) & 1),
              q(u, l, i),
              q(h, d, i),
              M(f, u, h),
              N(u, u, h),
              M(h, l, d),
              N(l, l, d),
              F(d, f),
              F(p, u),
              D(u, h, u),
              D(h, l, f),
              M(f, u, h),
              N(u, u, h),
              F(l, u),
              N(h, d, p),
              D(u, h, c),
              M(u, u, d),
              D(h, h, u),
              D(u, d, p),
              D(d, l, a),
              F(l, f),
              q(u, l, i),
              q(h, d, i));
          for (s = 0; s < 16; s++)
            ((a[s + 16] = u[s]),
              (a[s + 32] = h[s]),
              (a[s + 48] = l[s]),
              (a[s + 64] = d[s]));
          var y = a.subarray(32),
            g = a.subarray(16);
          return (j(y, y), D(g, g, y), L(e, g), 0);
        }
        function G(e, t) {
          return W(e, t, s);
        }
        function V(e, t) {
          return (n(t, 32), G(e, t));
        }
        function K(e, t, r) {
          var n = new Uint8Array(32);
          return (W(n, r, t), E(e, i, n, A));
        }
        ((U.prototype.blocks = function (e, t, r) {
          var n,
            i,
            s,
            o,
            a,
            c,
            u,
            l,
            h,
            d,
            f,
            p,
            y,
            g,
            b,
            w,
            m,
            v,
            E,
            A = this.fin ? 0 : 2048,
            _ = this.h[0],
            x = this.h[1],
            T = this.h[2],
            S = this.h[3],
            U = this.h[4],
            R = this.h[5],
            B = this.h[6],
            k = this.h[7],
            C = this.h[8],
            z = this.h[9],
            H = this.r[0],
            q = this.r[1],
            L = this.r[2],
            I = this.r[3],
            O = this.r[4],
            P = this.r[5],
            M = this.r[6],
            N = this.r[7],
            D = this.r[8],
            F = this.r[9];
          while (r >= 16)
            ((n = (255 & e[t + 0]) | ((255 & e[t + 1]) << 8)),
              (_ += 8191 & n),
              (i = (255 & e[t + 2]) | ((255 & e[t + 3]) << 8)),
              (x += 8191 & ((n >>> 13) | (i << 3))),
              (s = (255 & e[t + 4]) | ((255 & e[t + 5]) << 8)),
              (T += 8191 & ((i >>> 10) | (s << 6))),
              (o = (255 & e[t + 6]) | ((255 & e[t + 7]) << 8)),
              (S += 8191 & ((s >>> 7) | (o << 9))),
              (a = (255 & e[t + 8]) | ((255 & e[t + 9]) << 8)),
              (U += 8191 & ((o >>> 4) | (a << 12))),
              (R += (a >>> 1) & 8191),
              (c = (255 & e[t + 10]) | ((255 & e[t + 11]) << 8)),
              (B += 8191 & ((a >>> 14) | (c << 2))),
              (u = (255 & e[t + 12]) | ((255 & e[t + 13]) << 8)),
              (k += 8191 & ((c >>> 11) | (u << 5))),
              (l = (255 & e[t + 14]) | ((255 & e[t + 15]) << 8)),
              (C += 8191 & ((u >>> 8) | (l << 8))),
              (z += (l >>> 5) | A),
              (h = 0),
              (d = h),
              (d += _ * H),
              (d += x * (5 * F)),
              (d += T * (5 * D)),
              (d += S * (5 * N)),
              (d += U * (5 * M)),
              (h = d >>> 13),
              (d &= 8191),
              (d += R * (5 * P)),
              (d += B * (5 * O)),
              (d += k * (5 * I)),
              (d += C * (5 * L)),
              (d += z * (5 * q)),
              (h += d >>> 13),
              (d &= 8191),
              (f = h),
              (f += _ * q),
              (f += x * H),
              (f += T * (5 * F)),
              (f += S * (5 * D)),
              (f += U * (5 * N)),
              (h = f >>> 13),
              (f &= 8191),
              (f += R * (5 * M)),
              (f += B * (5 * P)),
              (f += k * (5 * O)),
              (f += C * (5 * I)),
              (f += z * (5 * L)),
              (h += f >>> 13),
              (f &= 8191),
              (p = h),
              (p += _ * L),
              (p += x * q),
              (p += T * H),
              (p += S * (5 * F)),
              (p += U * (5 * D)),
              (h = p >>> 13),
              (p &= 8191),
              (p += R * (5 * N)),
              (p += B * (5 * M)),
              (p += k * (5 * P)),
              (p += C * (5 * O)),
              (p += z * (5 * I)),
              (h += p >>> 13),
              (p &= 8191),
              (y = h),
              (y += _ * I),
              (y += x * L),
              (y += T * q),
              (y += S * H),
              (y += U * (5 * F)),
              (h = y >>> 13),
              (y &= 8191),
              (y += R * (5 * D)),
              (y += B * (5 * N)),
              (y += k * (5 * M)),
              (y += C * (5 * P)),
              (y += z * (5 * O)),
              (h += y >>> 13),
              (y &= 8191),
              (g = h),
              (g += _ * O),
              (g += x * I),
              (g += T * L),
              (g += S * q),
              (g += U * H),
              (h = g >>> 13),
              (g &= 8191),
              (g += R * (5 * F)),
              (g += B * (5 * D)),
              (g += k * (5 * N)),
              (g += C * (5 * M)),
              (g += z * (5 * P)),
              (h += g >>> 13),
              (g &= 8191),
              (b = h),
              (b += _ * P),
              (b += x * O),
              (b += T * I),
              (b += S * L),
              (b += U * q),
              (h = b >>> 13),
              (b &= 8191),
              (b += R * H),
              (b += B * (5 * F)),
              (b += k * (5 * D)),
              (b += C * (5 * N)),
              (b += z * (5 * M)),
              (h += b >>> 13),
              (b &= 8191),
              (w = h),
              (w += _ * M),
              (w += x * P),
              (w += T * O),
              (w += S * I),
              (w += U * L),
              (h = w >>> 13),
              (w &= 8191),
              (w += R * q),
              (w += B * H),
              (w += k * (5 * F)),
              (w += C * (5 * D)),
              (w += z * (5 * N)),
              (h += w >>> 13),
              (w &= 8191),
              (m = h),
              (m += _ * N),
              (m += x * M),
              (m += T * P),
              (m += S * O),
              (m += U * I),
              (h = m >>> 13),
              (m &= 8191),
              (m += R * L),
              (m += B * q),
              (m += k * H),
              (m += C * (5 * F)),
              (m += z * (5 * D)),
              (h += m >>> 13),
              (m &= 8191),
              (v = h),
              (v += _ * D),
              (v += x * N),
              (v += T * M),
              (v += S * P),
              (v += U * O),
              (h = v >>> 13),
              (v &= 8191),
              (v += R * I),
              (v += B * L),
              (v += k * q),
              (v += C * H),
              (v += z * (5 * F)),
              (h += v >>> 13),
              (v &= 8191),
              (E = h),
              (E += _ * F),
              (E += x * D),
              (E += T * N),
              (E += S * M),
              (E += U * P),
              (h = E >>> 13),
              (E &= 8191),
              (E += R * O),
              (E += B * I),
              (E += k * L),
              (E += C * q),
              (E += z * H),
              (h += E >>> 13),
              (E &= 8191),
              (h = ((h << 2) + h) | 0),
              (h = (h + d) | 0),
              (d = 8191 & h),
              (h >>>= 13),
              (f += h),
              (_ = d),
              (x = f),
              (T = p),
              (S = y),
              (U = g),
              (R = b),
              (B = w),
              (k = m),
              (C = v),
              (z = E),
              (t += 16),
              (r -= 16));
          ((this.h[0] = _),
            (this.h[1] = x),
            (this.h[2] = T),
            (this.h[3] = S),
            (this.h[4] = U),
            (this.h[5] = R),
            (this.h[6] = B),
            (this.h[7] = k),
            (this.h[8] = C),
            (this.h[9] = z));
        }),
          (U.prototype.finish = function (e, t) {
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
            ((e[t + 0] = (this.h[0] >>> 0) & 255),
              (e[t + 1] = (this.h[0] >>> 8) & 255),
              (e[t + 2] = (this.h[1] >>> 0) & 255),
              (e[t + 3] = (this.h[1] >>> 8) & 255),
              (e[t + 4] = (this.h[2] >>> 0) & 255),
              (e[t + 5] = (this.h[2] >>> 8) & 255),
              (e[t + 6] = (this.h[3] >>> 0) & 255),
              (e[t + 7] = (this.h[3] >>> 8) & 255),
              (e[t + 8] = (this.h[4] >>> 0) & 255),
              (e[t + 9] = (this.h[4] >>> 8) & 255),
              (e[t + 10] = (this.h[5] >>> 0) & 255),
              (e[t + 11] = (this.h[5] >>> 8) & 255),
              (e[t + 12] = (this.h[6] >>> 0) & 255),
              (e[t + 13] = (this.h[6] >>> 8) & 255),
              (e[t + 14] = (this.h[7] >>> 0) & 255),
              (e[t + 15] = (this.h[7] >>> 8) & 255));
          }),
          (U.prototype.update = function (e, t, r) {
            var n, i;
            if (this.leftover) {
              for (i = 16 - this.leftover, i > r && (i = r), n = 0; n < i; n++)
                this.buffer[this.leftover + n] = e[t + n];
              if (
                ((r -= i), (t += i), (this.leftover += i), this.leftover < 16)
              )
                return;
              (this.blocks(this.buffer, 0, 16), (this.leftover = 0));
            }
            if (
              (r >= 16 &&
                ((i = r - (r % 16)), this.blocks(e, t, i), (t += i), (r -= i)),
              r)
            ) {
              for (n = 0; n < r; n++) this.buffer[this.leftover + n] = e[t + n];
              this.leftover += r;
            }
          }));
        var J = k,
          Y = C;
        function X(e, t, r, n, i, s) {
          var o = new Uint8Array(32);
          return (K(o, i, s), J(e, t, r, n, o));
        }
        function Z(e, t, r, n, i, s) {
          var o = new Uint8Array(32);
          return (K(o, i, s), Y(e, t, r, n, o));
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
        function ee(e, t, r, n) {
          var i,
            s,
            o,
            a,
            c,
            u,
            l,
            h,
            d,
            f,
            p,
            y,
            g,
            b,
            w,
            m,
            v,
            E,
            A,
            _,
            x,
            T,
            S,
            U,
            R,
            B,
            k = new Int32Array(16),
            C = new Int32Array(16),
            z = e[0],
            H = e[1],
            q = e[2],
            L = e[3],
            I = e[4],
            O = e[5],
            P = e[6],
            M = e[7],
            N = t[0],
            D = t[1],
            F = t[2],
            j = t[3],
            $ = t[4],
            W = t[5],
            G = t[6],
            V = t[7],
            K = 0;
          while (n >= 128) {
            for (A = 0; A < 16; A++)
              ((_ = 8 * A + K),
                (k[A] =
                  (r[_ + 0] << 24) |
                  (r[_ + 1] << 16) |
                  (r[_ + 2] << 8) |
                  r[_ + 3]),
                (C[A] =
                  (r[_ + 4] << 24) |
                  (r[_ + 5] << 16) |
                  (r[_ + 6] << 8) |
                  r[_ + 7]));
            for (A = 0; A < 80; A++)
              if (
                ((i = z),
                (s = H),
                (o = q),
                (a = L),
                (c = I),
                (u = O),
                (l = P),
                (h = M),
                (d = N),
                (f = D),
                (p = F),
                (y = j),
                (g = $),
                (b = W),
                (w = G),
                (m = V),
                (x = M),
                (T = V),
                (S = 65535 & T),
                (U = T >>> 16),
                (R = 65535 & x),
                (B = x >>> 16),
                (x =
                  ((I >>> 14) | ($ << 18)) ^
                  ((I >>> 18) | ($ << 14)) ^
                  (($ >>> 9) | (I << 23))),
                (T =
                  (($ >>> 14) | (I << 18)) ^
                  (($ >>> 18) | (I << 14)) ^
                  ((I >>> 9) | ($ << 23))),
                (S += 65535 & T),
                (U += T >>> 16),
                (R += 65535 & x),
                (B += x >>> 16),
                (x = (I & O) ^ (~I & P)),
                (T = ($ & W) ^ (~$ & G)),
                (S += 65535 & T),
                (U += T >>> 16),
                (R += 65535 & x),
                (B += x >>> 16),
                (x = Q[2 * A]),
                (T = Q[2 * A + 1]),
                (S += 65535 & T),
                (U += T >>> 16),
                (R += 65535 & x),
                (B += x >>> 16),
                (x = k[A % 16]),
                (T = C[A % 16]),
                (S += 65535 & T),
                (U += T >>> 16),
                (R += 65535 & x),
                (B += x >>> 16),
                (U += S >>> 16),
                (R += U >>> 16),
                (B += R >>> 16),
                (v = (65535 & R) | (B << 16)),
                (E = (65535 & S) | (U << 16)),
                (x = v),
                (T = E),
                (S = 65535 & T),
                (U = T >>> 16),
                (R = 65535 & x),
                (B = x >>> 16),
                (x =
                  ((z >>> 28) | (N << 4)) ^
                  ((N >>> 2) | (z << 30)) ^
                  ((N >>> 7) | (z << 25))),
                (T =
                  ((N >>> 28) | (z << 4)) ^
                  ((z >>> 2) | (N << 30)) ^
                  ((z >>> 7) | (N << 25))),
                (S += 65535 & T),
                (U += T >>> 16),
                (R += 65535 & x),
                (B += x >>> 16),
                (x = (z & H) ^ (z & q) ^ (H & q)),
                (T = (N & D) ^ (N & F) ^ (D & F)),
                (S += 65535 & T),
                (U += T >>> 16),
                (R += 65535 & x),
                (B += x >>> 16),
                (U += S >>> 16),
                (R += U >>> 16),
                (B += R >>> 16),
                (h = (65535 & R) | (B << 16)),
                (m = (65535 & S) | (U << 16)),
                (x = a),
                (T = y),
                (S = 65535 & T),
                (U = T >>> 16),
                (R = 65535 & x),
                (B = x >>> 16),
                (x = v),
                (T = E),
                (S += 65535 & T),
                (U += T >>> 16),
                (R += 65535 & x),
                (B += x >>> 16),
                (U += S >>> 16),
                (R += U >>> 16),
                (B += R >>> 16),
                (a = (65535 & R) | (B << 16)),
                (y = (65535 & S) | (U << 16)),
                (H = i),
                (q = s),
                (L = o),
                (I = a),
                (O = c),
                (P = u),
                (M = l),
                (z = h),
                (D = d),
                (F = f),
                (j = p),
                ($ = y),
                (W = g),
                (G = b),
                (V = w),
                (N = m),
                A % 16 === 15)
              )
                for (_ = 0; _ < 16; _++)
                  ((x = k[_]),
                    (T = C[_]),
                    (S = 65535 & T),
                    (U = T >>> 16),
                    (R = 65535 & x),
                    (B = x >>> 16),
                    (x = k[(_ + 9) % 16]),
                    (T = C[(_ + 9) % 16]),
                    (S += 65535 & T),
                    (U += T >>> 16),
                    (R += 65535 & x),
                    (B += x >>> 16),
                    (v = k[(_ + 1) % 16]),
                    (E = C[(_ + 1) % 16]),
                    (x =
                      ((v >>> 1) | (E << 31)) ^
                      ((v >>> 8) | (E << 24)) ^
                      (v >>> 7)),
                    (T =
                      ((E >>> 1) | (v << 31)) ^
                      ((E >>> 8) | (v << 24)) ^
                      ((E >>> 7) | (v << 25))),
                    (S += 65535 & T),
                    (U += T >>> 16),
                    (R += 65535 & x),
                    (B += x >>> 16),
                    (v = k[(_ + 14) % 16]),
                    (E = C[(_ + 14) % 16]),
                    (x =
                      ((v >>> 19) | (E << 13)) ^
                      ((E >>> 29) | (v << 3)) ^
                      (v >>> 6)),
                    (T =
                      ((E >>> 19) | (v << 13)) ^
                      ((v >>> 29) | (E << 3)) ^
                      ((E >>> 6) | (v << 26))),
                    (S += 65535 & T),
                    (U += T >>> 16),
                    (R += 65535 & x),
                    (B += x >>> 16),
                    (U += S >>> 16),
                    (R += U >>> 16),
                    (B += R >>> 16),
                    (k[_] = (65535 & R) | (B << 16)),
                    (C[_] = (65535 & S) | (U << 16)));
            ((x = z),
              (T = N),
              (S = 65535 & T),
              (U = T >>> 16),
              (R = 65535 & x),
              (B = x >>> 16),
              (x = e[0]),
              (T = t[0]),
              (S += 65535 & T),
              (U += T >>> 16),
              (R += 65535 & x),
              (B += x >>> 16),
              (U += S >>> 16),
              (R += U >>> 16),
              (B += R >>> 16),
              (e[0] = z = (65535 & R) | (B << 16)),
              (t[0] = N = (65535 & S) | (U << 16)),
              (x = H),
              (T = D),
              (S = 65535 & T),
              (U = T >>> 16),
              (R = 65535 & x),
              (B = x >>> 16),
              (x = e[1]),
              (T = t[1]),
              (S += 65535 & T),
              (U += T >>> 16),
              (R += 65535 & x),
              (B += x >>> 16),
              (U += S >>> 16),
              (R += U >>> 16),
              (B += R >>> 16),
              (e[1] = H = (65535 & R) | (B << 16)),
              (t[1] = D = (65535 & S) | (U << 16)),
              (x = q),
              (T = F),
              (S = 65535 & T),
              (U = T >>> 16),
              (R = 65535 & x),
              (B = x >>> 16),
              (x = e[2]),
              (T = t[2]),
              (S += 65535 & T),
              (U += T >>> 16),
              (R += 65535 & x),
              (B += x >>> 16),
              (U += S >>> 16),
              (R += U >>> 16),
              (B += R >>> 16),
              (e[2] = q = (65535 & R) | (B << 16)),
              (t[2] = F = (65535 & S) | (U << 16)),
              (x = L),
              (T = j),
              (S = 65535 & T),
              (U = T >>> 16),
              (R = 65535 & x),
              (B = x >>> 16),
              (x = e[3]),
              (T = t[3]),
              (S += 65535 & T),
              (U += T >>> 16),
              (R += 65535 & x),
              (B += x >>> 16),
              (U += S >>> 16),
              (R += U >>> 16),
              (B += R >>> 16),
              (e[3] = L = (65535 & R) | (B << 16)),
              (t[3] = j = (65535 & S) | (U << 16)),
              (x = I),
              (T = $),
              (S = 65535 & T),
              (U = T >>> 16),
              (R = 65535 & x),
              (B = x >>> 16),
              (x = e[4]),
              (T = t[4]),
              (S += 65535 & T),
              (U += T >>> 16),
              (R += 65535 & x),
              (B += x >>> 16),
              (U += S >>> 16),
              (R += U >>> 16),
              (B += R >>> 16),
              (e[4] = I = (65535 & R) | (B << 16)),
              (t[4] = $ = (65535 & S) | (U << 16)),
              (x = O),
              (T = W),
              (S = 65535 & T),
              (U = T >>> 16),
              (R = 65535 & x),
              (B = x >>> 16),
              (x = e[5]),
              (T = t[5]),
              (S += 65535 & T),
              (U += T >>> 16),
              (R += 65535 & x),
              (B += x >>> 16),
              (U += S >>> 16),
              (R += U >>> 16),
              (B += R >>> 16),
              (e[5] = O = (65535 & R) | (B << 16)),
              (t[5] = W = (65535 & S) | (U << 16)),
              (x = P),
              (T = G),
              (S = 65535 & T),
              (U = T >>> 16),
              (R = 65535 & x),
              (B = x >>> 16),
              (x = e[6]),
              (T = t[6]),
              (S += 65535 & T),
              (U += T >>> 16),
              (R += 65535 & x),
              (B += x >>> 16),
              (U += S >>> 16),
              (R += U >>> 16),
              (B += R >>> 16),
              (e[6] = P = (65535 & R) | (B << 16)),
              (t[6] = G = (65535 & S) | (U << 16)),
              (x = M),
              (T = V),
              (S = 65535 & T),
              (U = T >>> 16),
              (R = 65535 & x),
              (B = x >>> 16),
              (x = e[7]),
              (T = t[7]),
              (S += 65535 & T),
              (U += T >>> 16),
              (R += 65535 & x),
              (B += x >>> 16),
              (U += S >>> 16),
              (R += U >>> 16),
              (B += R >>> 16),
              (e[7] = M = (65535 & R) | (B << 16)),
              (t[7] = V = (65535 & S) | (U << 16)),
              (K += 128),
              (n -= 128));
          }
          return n;
        }
        function te(e, t, r) {
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
              ee(i, s, t, r),
              r %= 128,
              n = 0;
            n < r;
            n++
          )
            o[n] = t[a - r + n];
          for (
            o[r] = 128,
              r = 256 - 128 * (r < 112 ? 1 : 0),
              o[r - 9] = 0,
              p(o, r - 8, (a / 536870912) | 0, a << 3),
              ee(i, s, o, r),
              n = 0;
            n < 8;
            n++
          )
            p(e, 8 * n, i[n], s[n]);
          return 0;
        }
        function re(e, r) {
          var n = t(),
            i = t(),
            s = t(),
            o = t(),
            a = t(),
            c = t(),
            u = t(),
            h = t(),
            d = t();
          (N(n, e[1], e[0]),
            N(d, r[1], r[0]),
            D(n, n, d),
            M(i, e[0], e[1]),
            M(d, r[0], r[1]),
            D(i, i, d),
            D(s, e[3], r[3]),
            D(s, s, l),
            D(o, e[2], r[2]),
            M(o, o, o),
            N(a, i, n),
            N(c, o, s),
            M(u, o, s),
            M(h, i, n),
            D(e[0], a, c),
            D(e[1], h, u),
            D(e[2], u, c),
            D(e[3], a, h));
        }
        function ne(e, t, r) {
          var n;
          for (n = 0; n < 4; n++) q(e[n], t[n], r);
        }
        function ie(e, r) {
          var n = t(),
            i = t(),
            s = t();
          (j(s, r[2]),
            D(n, r[0], s),
            D(i, r[1], s),
            L(e, i),
            (e[31] ^= O(n) << 7));
        }
        function se(e, t, r) {
          var n, i;
          for (
            z(e[0], o), z(e[1], a), z(e[2], a), z(e[3], o), i = 255;
            i >= 0;
            --i
          )
            ((n = (r[(i / 8) | 0] >> (7 & i)) & 1),
              ne(e, t, n),
              re(t, e),
              re(e, e),
              ne(e, t, n));
        }
        function oe(e, r) {
          var n = [t(), t(), t(), t()];
          (z(n[0], h), z(n[1], d), z(n[2], a), D(n[3], h, d), se(e, n, r));
        }
        function ae(e, r, i) {
          var s,
            o = new Uint8Array(64),
            a = [t(), t(), t(), t()];
          for (
            i || n(r, 32),
              te(o, r, 32),
              o[0] &= 248,
              o[31] &= 127,
              o[31] |= 64,
              oe(a, o),
              ie(e, a),
              s = 0;
            s < 32;
            s++
          )
            r[s + 32] = e[s];
          return 0;
        }
        var ce = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
          20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
        ]);
        function ue(e, t) {
          var r, n, i, s;
          for (n = 63; n >= 32; --n) {
            for (r = 0, i = n - 32, s = n - 12; i < s; ++i)
              ((t[i] += r - 16 * t[n] * ce[i - (n - 32)]),
                (r = Math.floor((t[i] + 128) / 256)),
                (t[i] -= 256 * r));
            ((t[i] += r), (t[n] = 0));
          }
          for (r = 0, i = 0; i < 32; i++)
            ((t[i] += r - (t[31] >> 4) * ce[i]),
              (r = t[i] >> 8),
              (t[i] &= 255));
          for (i = 0; i < 32; i++) t[i] -= r * ce[i];
          for (n = 0; n < 32; n++)
            ((t[n + 1] += t[n] >> 8), (e[n] = 255 & t[n]));
        }
        function le(e) {
          var t,
            r = new Float64Array(64);
          for (t = 0; t < 64; t++) r[t] = e[t];
          for (t = 0; t < 64; t++) e[t] = 0;
          ue(e, r);
        }
        function he(e, r, n, i) {
          var s,
            o,
            a = new Uint8Array(64),
            c = new Uint8Array(64),
            u = new Uint8Array(64),
            l = new Float64Array(64),
            h = [t(), t(), t(), t()];
          (te(a, i, 32), (a[0] &= 248), (a[31] &= 127), (a[31] |= 64));
          var d = n + 64;
          for (s = 0; s < n; s++) e[64 + s] = r[s];
          for (s = 0; s < 32; s++) e[32 + s] = a[32 + s];
          for (
            te(u, e.subarray(32), n + 32), le(u), oe(h, u), ie(e, h), s = 32;
            s < 64;
            s++
          )
            e[s] = i[s];
          for (te(c, e, n + 64), le(c), s = 0; s < 64; s++) l[s] = 0;
          for (s = 0; s < 32; s++) l[s] = u[s];
          for (s = 0; s < 32; s++)
            for (o = 0; o < 32; o++) l[s + o] += c[s] * a[o];
          return (ue(e.subarray(32), l), d);
        }
        function de(e, r) {
          var n = t(),
            i = t(),
            s = t(),
            c = t(),
            l = t(),
            h = t(),
            d = t();
          return (
            z(e[2], a),
            P(e[1], r),
            F(s, e[1]),
            D(c, s, u),
            N(s, s, e[2]),
            M(c, e[2], c),
            F(l, c),
            F(h, l),
            D(d, h, l),
            D(n, d, s),
            D(n, n, c),
            $(n, n),
            D(n, n, s),
            D(n, n, c),
            D(n, n, c),
            D(e[0], n, c),
            F(i, e[0]),
            D(i, i, c),
            I(i, s) && D(e[0], e[0], f),
            F(i, e[0]),
            D(i, i, c),
            I(i, s)
              ? -1
              : (O(e[0]) === r[31] >> 7 && N(e[0], o, e[0]),
                D(e[3], e[0], e[1]),
                0)
          );
        }
        function fe(e, r, n, i) {
          var s,
            o = new Uint8Array(32),
            a = new Uint8Array(64),
            c = [t(), t(), t(), t()],
            u = [t(), t(), t(), t()];
          if (n < 64) return -1;
          if (de(u, i)) return -1;
          for (s = 0; s < n; s++) e[s] = r[s];
          for (s = 0; s < 32; s++) e[s + 32] = i[s];
          if (
            (te(a, e, n),
            le(a),
            se(c, u, a),
            oe(u, r.subarray(32)),
            re(c, u),
            ie(o, c),
            (n -= 64),
            b(r, 0, o, 0))
          ) {
            for (s = 0; s < n; s++) e[s] = 0;
            return -1;
          }
          for (s = 0; s < n; s++) e[s] = r[s + 64];
          return n;
        }
        var pe = 32,
          ye = 24,
          ge = 32,
          be = 16,
          we = 32,
          me = 32,
          ve = 32,
          Ee = 32,
          Ae = 32,
          _e = ye,
          xe = ge,
          Te = be,
          Se = 64,
          Ue = 32,
          Re = 64,
          Be = 32,
          ke = 64;
        function Ce(e, t) {
          if (e.length !== pe) throw new Error("bad key size");
          if (t.length !== ye) throw new Error("bad nonce size");
        }
        function ze(e, t) {
          if (e.length !== ve) throw new Error("bad public key size");
          if (t.length !== Ee) throw new Error("bad secret key size");
        }
        function He() {
          for (var e = 0; e < arguments.length; e++)
            if (!(arguments[e] instanceof Uint8Array))
              throw new TypeError("unexpected type, use Uint8Array");
        }
        function qe(e) {
          for (var t = 0; t < e.length; t++) e[t] = 0;
        }
        ((e.lowlevel = {
          crypto_core_hsalsa20: E,
          crypto_stream_xor: S,
          crypto_stream: T,
          crypto_stream_salsa20_xor: _,
          crypto_stream_salsa20: x,
          crypto_onetimeauth: R,
          crypto_onetimeauth_verify: B,
          crypto_verify_16: g,
          crypto_verify_32: b,
          crypto_secretbox: k,
          crypto_secretbox_open: C,
          crypto_scalarmult: W,
          crypto_scalarmult_base: G,
          crypto_box_beforenm: K,
          crypto_box_afternm: J,
          crypto_box: X,
          crypto_box_open: Z,
          crypto_box_keypair: V,
          crypto_hash: te,
          crypto_sign: he,
          crypto_sign_keypair: ae,
          crypto_sign_open: fe,
          crypto_secretbox_KEYBYTES: pe,
          crypto_secretbox_NONCEBYTES: ye,
          crypto_secretbox_ZEROBYTES: ge,
          crypto_secretbox_BOXZEROBYTES: be,
          crypto_scalarmult_BYTES: we,
          crypto_scalarmult_SCALARBYTES: me,
          crypto_box_PUBLICKEYBYTES: ve,
          crypto_box_SECRETKEYBYTES: Ee,
          crypto_box_BEFORENMBYTES: Ae,
          crypto_box_NONCEBYTES: _e,
          crypto_box_ZEROBYTES: xe,
          crypto_box_BOXZEROBYTES: Te,
          crypto_sign_BYTES: Se,
          crypto_sign_PUBLICKEYBYTES: Ue,
          crypto_sign_SECRETKEYBYTES: Re,
          crypto_sign_SEEDBYTES: Be,
          crypto_hash_BYTES: ke,
          gf: t,
          D: u,
          L: ce,
          pack25519: L,
          unpack25519: P,
          M: D,
          A: M,
          S: F,
          Z: N,
          pow2523: $,
          add: re,
          set25519: z,
          modL: ue,
          scalarmult: se,
          scalarbase: oe,
        }),
          (e.randomBytes = function (e) {
            var t = new Uint8Array(e);
            return (n(t, e), t);
          }),
          (e.secretbox = function (e, t, r) {
            (He(e, t, r), Ce(r, t));
            for (
              var n = new Uint8Array(ge + e.length),
                i = new Uint8Array(n.length),
                s = 0;
              s < e.length;
              s++
            )
              n[s + ge] = e[s];
            return (k(i, n, n.length, t, r), i.subarray(be));
          }),
          (e.secretbox.open = function (e, t, r) {
            (He(e, t, r), Ce(r, t));
            for (
              var n = new Uint8Array(be + e.length),
                i = new Uint8Array(n.length),
                s = 0;
              s < e.length;
              s++
            )
              n[s + be] = e[s];
            return n.length < 32 || 0 !== C(i, n, n.length, t, r)
              ? null
              : i.subarray(ge);
          }),
          (e.secretbox.keyLength = pe),
          (e.secretbox.nonceLength = ye),
          (e.secretbox.overheadLength = be),
          (e.scalarMult = function (e, t) {
            if ((He(e, t), e.length !== me)) throw new Error("bad n size");
            if (t.length !== we) throw new Error("bad p size");
            var r = new Uint8Array(we);
            return (W(r, e, t), r);
          }),
          (e.scalarMult.base = function (e) {
            if ((He(e), e.length !== me)) throw new Error("bad n size");
            var t = new Uint8Array(we);
            return (G(t, e), t);
          }),
          (e.scalarMult.scalarLength = me),
          (e.scalarMult.groupElementLength = we),
          (e.box = function (t, r, n, i) {
            var s = e.box.before(n, i);
            return e.secretbox(t, r, s);
          }),
          (e.box.before = function (e, t) {
            (He(e, t), ze(e, t));
            var r = new Uint8Array(Ae);
            return (K(r, e, t), r);
          }),
          (e.box.after = e.secretbox),
          (e.box.open = function (t, r, n, i) {
            var s = e.box.before(n, i);
            return e.secretbox.open(t, r, s);
          }),
          (e.box.open.after = e.secretbox.open),
          (e.box.keyPair = function () {
            var e = new Uint8Array(ve),
              t = new Uint8Array(Ee);
            return (V(e, t), { publicKey: e, secretKey: t });
          }),
          (e.box.keyPair.fromSecretKey = function (e) {
            if ((He(e), e.length !== Ee))
              throw new Error("bad secret key size");
            var t = new Uint8Array(ve);
            return (G(t, e), { publicKey: t, secretKey: new Uint8Array(e) });
          }),
          (e.box.publicKeyLength = ve),
          (e.box.secretKeyLength = Ee),
          (e.box.sharedKeyLength = Ae),
          (e.box.nonceLength = _e),
          (e.box.overheadLength = e.secretbox.overheadLength),
          (e.sign = function (e, t) {
            if ((He(e, t), t.length !== Re))
              throw new Error("bad secret key size");
            var r = new Uint8Array(Se + e.length);
            return (he(r, e, e.length, t), r);
          }),
          (e.sign.open = function (e, t) {
            if ((He(e, t), t.length !== Ue))
              throw new Error("bad public key size");
            var r = new Uint8Array(e.length),
              n = fe(r, e, e.length, t);
            if (n < 0) return null;
            for (var i = new Uint8Array(n), s = 0; s < i.length; s++)
              i[s] = r[s];
            return i;
          }),
          (e.sign.detached = function (t, r) {
            for (
              var n = e.sign(t, r), i = new Uint8Array(Se), s = 0;
              s < i.length;
              s++
            )
              i[s] = n[s];
            return i;
          }),
          (e.sign.detached.verify = function (e, t, r) {
            if ((He(e, t, r), t.length !== Se))
              throw new Error("bad signature size");
            if (r.length !== Ue) throw new Error("bad public key size");
            var n,
              i = new Uint8Array(Se + e.length),
              s = new Uint8Array(Se + e.length);
            for (n = 0; n < Se; n++) i[n] = t[n];
            for (n = 0; n < e.length; n++) i[n + Se] = e[n];
            return fe(s, i, i.length, r) >= 0;
          }),
          (e.sign.keyPair = function () {
            var e = new Uint8Array(Ue),
              t = new Uint8Array(Re);
            return (ae(e, t), { publicKey: e, secretKey: t });
          }),
          (e.sign.keyPair.fromSecretKey = function (e) {
            if ((He(e), e.length !== Re))
              throw new Error("bad secret key size");
            for (var t = new Uint8Array(Ue), r = 0; r < t.length; r++)
              t[r] = e[32 + r];
            return { publicKey: t, secretKey: new Uint8Array(e) };
          }),
          (e.sign.keyPair.fromSeed = function (e) {
            if ((He(e), e.length !== Be)) throw new Error("bad seed size");
            for (
              var t = new Uint8Array(Ue), r = new Uint8Array(Re), n = 0;
              n < 32;
              n++
            )
              r[n] = e[n];
            return (ae(t, r, !0), { publicKey: t, secretKey: r });
          }),
          (e.sign.publicKeyLength = Ue),
          (e.sign.secretKeyLength = Re),
          (e.sign.seedLength = Be),
          (e.sign.signatureLength = Se),
          (e.hash = function (e) {
            He(e);
            var t = new Uint8Array(ke);
            return (te(t, e, e.length), t);
          }),
          (e.hash.hashLength = ke),
          (e.verify = function (e, t) {
            return (
              He(e, t),
              0 !== e.length &&
                0 !== t.length &&
                e.length === t.length &&
                0 === y(e, 0, t, 0, e.length)
            );
          }),
          (e.setPRNG = function (e) {
            n = e;
          }),
          (function () {
            var t =
              "undefined" !== typeof self ? self.crypto || self.msCrypto : null;
            if (t && t.getRandomValues) {
              var n = 65536;
              e.setPRNG(function (e, r) {
                var i,
                  s = new Uint8Array(r);
                for (i = 0; i < r; i += n)
                  t.getRandomValues(s.subarray(i, i + Math.min(r - i, n)));
                for (i = 0; i < r; i++) e[i] = s[i];
                qe(s);
              });
            } else
              ((t = r(3053)),
                t &&
                  t.randomBytes &&
                  e.setPRNG(function (e, r) {
                    var n,
                      i = t.randomBytes(r);
                    for (n = 0; n < r; n++) e[n] = i[n];
                    qe(i);
                  }));
          })());
      })(e.exports ? e.exports : (self.nacl = self.nacl || {}));
    },
    3053: function (e, t) {},
    3060: function (e, t, r) {
      "use strict";
      var n = r(6190),
        i = Object.prototype.toString,
        s = (function (e) {
          return function (t) {
            var r = i.call(t);
            return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
          };
        })(Object.create(null));
      function o(e) {
        return (
          (e = e.toLowerCase()),
          function (t) {
            return s(t) === e;
          }
        );
      }
      function a(e) {
        return Array.isArray(e);
      }
      function c(e) {
        return "undefined" === typeof e;
      }
      function u(e) {
        return (
          null !== e &&
          !c(e) &&
          null !== e.constructor &&
          !c(e.constructor) &&
          "function" === typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      }
      var l = o("ArrayBuffer");
      function h(e) {
        var t;
        return (
          (t =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && l(e.buffer)),
          t
        );
      }
      function d(e) {
        return "string" === typeof e;
      }
      function f(e) {
        return "number" === typeof e;
      }
      function p(e) {
        return null !== e && "object" === typeof e;
      }
      function y(e) {
        if ("object" !== s(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
      }
      var g = o("Date"),
        b = o("File"),
        w = o("Blob"),
        m = o("FileList");
      function v(e) {
        return "[object Function]" === i.call(e);
      }
      function E(e) {
        return p(e) && v(e.pipe);
      }
      function A(e) {
        var t = "[object FormData]";
        return (
          e &&
          (("function" === typeof FormData && e instanceof FormData) ||
            i.call(e) === t ||
            (v(e.toString) && e.toString() === t))
        );
      }
      var _ = o("URLSearchParams");
      function x(e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      }
      function T() {
        return (
          ("undefined" === typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" !== typeof window &&
          "undefined" !== typeof document
        );
      }
      function S(e, t) {
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), a(e)))
            for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
          else
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) &&
                t.call(null, e[i], i, e);
      }
      function U() {
        var e = {};
        function t(t, r) {
          y(e[r]) && y(t)
            ? (e[r] = U(e[r], t))
            : y(t)
              ? (e[r] = U({}, t))
              : a(t)
                ? (e[r] = t.slice())
                : (e[r] = t);
        }
        for (var r = 0, n = arguments.length; r < n; r++) S(arguments[r], t);
        return e;
      }
      function R(e, t, r) {
        return (
          S(t, function (t, i) {
            e[i] = r && "function" === typeof t ? n(t, r) : t;
          }),
          e
        );
      }
      function B(e) {
        return (65279 === e.charCodeAt(0) && (e = e.slice(1)), e);
      }
      function k(e, t, r, n) {
        ((e.prototype = Object.create(t.prototype, n)),
          (e.prototype.constructor = e),
          r && Object.assign(e.prototype, r));
      }
      function C(e, t, r) {
        var n,
          i,
          s,
          o = {};
        t = t || {};
        do {
          ((n = Object.getOwnPropertyNames(e)), (i = n.length));
          while (i-- > 0) ((s = n[i]), o[s] || ((t[s] = e[s]), (o[s] = !0)));
          e = Object.getPrototypeOf(e);
        } while (e && (!r || r(e, t)) && e !== Object.prototype);
        return t;
      }
      function z(e, t, r) {
        ((e = String(e)),
          (void 0 === r || r > e.length) && (r = e.length),
          (r -= t.length));
        var n = e.indexOf(t, r);
        return -1 !== n && n === r;
      }
      function H(e) {
        if (!e) return null;
        var t = e.length;
        if (c(t)) return null;
        var r = new Array(t);
        while (t-- > 0) r[t] = e[t];
        return r;
      }
      var q = (function (e) {
        return function (t) {
          return e && t instanceof e;
        };
      })(
        "undefined" !== typeof Uint8Array && Object.getPrototypeOf(Uint8Array),
      );
      e.exports = {
        isArray: a,
        isArrayBuffer: l,
        isBuffer: u,
        isFormData: A,
        isArrayBufferView: h,
        isString: d,
        isNumber: f,
        isObject: p,
        isPlainObject: y,
        isUndefined: c,
        isDate: g,
        isFile: b,
        isBlob: w,
        isFunction: v,
        isStream: E,
        isURLSearchParams: _,
        isStandardBrowserEnv: T,
        forEach: S,
        merge: U,
        extend: R,
        trim: x,
        stripBOM: B,
        inherits: k,
        toFlatObject: C,
        kindOf: s,
        kindOfTest: o,
        endsWith: z,
        toArray: H,
        isTypedArray: q,
        isFileList: m,
      };
    },
    3183: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomBytes =
          t.wrapConstructorWithOpts =
          t.wrapConstructor =
          t.checkOpts =
          t.Hash =
          t.concatBytes =
          t.toBytes =
          t.utf8ToBytes =
          t.asyncLoop =
          t.nextTick =
          t.hexToBytes =
          t.bytesToHex =
          t.isLE =
          t.rotr =
          t.createView =
          t.u32 =
          t.u8 =
            void 0));
      const n = r(5245),
        i = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      t.u8 = i;
      const s = (e) =>
        new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      t.u32 = s;
      const o = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      t.createView = o;
      const a = (e, t) => (e << (32 - t)) | (e >>> t);
      if (
        ((t.rotr = a),
        (t.isLE =
          68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]),
        !t.isLE)
      )
        throw new Error("Non little-endian hardware is not supported");
      const c = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0"),
      );
      function u(e) {
        if (!(e instanceof Uint8Array)) throw new Error("Uint8Array expected");
        let t = "";
        for (let r = 0; r < e.length; r++) t += c[e[r]];
        return t;
      }
      function l(e) {
        if ("string" !== typeof e)
          throw new TypeError("hexToBytes: expected string, got " + typeof e);
        if (e.length % 2)
          throw new Error("hexToBytes: received invalid unpadded hex");
        const t = new Uint8Array(e.length / 2);
        for (let r = 0; r < t.length; r++) {
          const n = 2 * r,
            i = e.slice(n, n + 2),
            s = Number.parseInt(i, 16);
          if (Number.isNaN(s) || s < 0)
            throw new Error("Invalid byte sequence");
          t[r] = s;
        }
        return t;
      }
      ((t.bytesToHex = u), (t.hexToBytes = l));
      const h = async () => {};
      async function d(e, r, n) {
        let i = Date.now();
        for (let s = 0; s < e; s++) {
          n(s);
          const e = Date.now() - i;
          (e >= 0 && e < r) || (await (0, t.nextTick)(), (i += e));
        }
      }
      function f(e) {
        if ("string" !== typeof e)
          throw new TypeError("utf8ToBytes expected string, got " + typeof e);
        return new TextEncoder().encode(e);
      }
      function p(e) {
        if (("string" === typeof e && (e = f(e)), !(e instanceof Uint8Array)))
          throw new TypeError(
            `Expected input type is Uint8Array (got ${typeof e})`,
          );
        return e;
      }
      function y() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        if (!t.every((e) => e instanceof Uint8Array))
          throw new Error("Uint8Array list expected");
        if (1 === t.length) return t[0];
        const n = t.reduce((e, t) => e + t.length, 0),
          i = new Uint8Array(n);
        for (let s = 0, o = 0; s < t.length; s++) {
          const e = t[s];
          (i.set(e, o), (o += e.length));
        }
        return i;
      }
      ((t.nextTick = h),
        (t.asyncLoop = d),
        (t.utf8ToBytes = f),
        (t.toBytes = p),
        (t.concatBytes = y));
      class Hash {
        clone() {
          return this._cloneInto();
        }
      }
      t.Hash = Hash;
      const g = (e) =>
        "[object Object]" === Object.prototype.toString.call(e) &&
        e.constructor === Object;
      function b(e, t) {
        if (void 0 !== t && ("object" !== typeof t || !g(t)))
          throw new TypeError("Options should be object or undefined");
        const r = Object.assign(e, t);
        return r;
      }
      function w(e) {
        const t = (t) => e().update(p(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function m(e) {
        const t = (t, r) => e(r).update(p(t)).digest(),
          r = e({});
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = (t) => e(t)),
          t
        );
      }
      function v(e) {
        if ((void 0 === e && (e = 32), n.crypto.web))
          return n.crypto.web.getRandomValues(new Uint8Array(e));
        if (n.crypto.node)
          return new Uint8Array(n.crypto.node.randomBytes(e).buffer);
        throw new Error("The environment doesn't have randomBytes function");
      }
      ((t.checkOpts = b),
        (t.wrapConstructor = w),
        (t.wrapConstructorWithOpts = m),
        (t.randomBytes = v));
    },
    3440: function (e, t, r) {
      "use strict";
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error("Wrong positive integer: " + e);
      }
      function i(e) {
        if ("boolean" !== typeof e)
          throw new Error("Expected boolean, not " + e);
      }
      function s(e) {
        if (!(e instanceof Uint8Array))
          throw new TypeError("Expected Uint8Array");
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        if (r.length > 0 && !r.includes(e.length))
          throw new TypeError(
            `Expected Uint8Array of length ${r}, not of length=${e.length}`,
          );
      }
      function o(e) {
        if ("function" !== typeof e || "function" !== typeof e.create)
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        (n(e.outputLen), n(e.blockLen));
      }
      function a(e, t) {
        if ((void 0 === t && (t = !0), e.destroyed))
          throw new Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function c(e, t) {
        s(e);
        const r = t.outputLen;
        if (e.length < r)
          throw new Error(
            "digestInto() expects output buffer of length at least " + r,
          );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.output = t.exists = t.hash = t.bytes = t.bool = t.number = void 0),
        (t.number = n),
        (t.bool = i),
        (t.bytes = s),
        (t.hash = o),
        (t.exists = a),
        (t.output = c));
      const u = { number: n, bool: i, bytes: s, hash: o, exists: a, output: c };
      t.default = u;
    },
    3903: function (e, t, r) {
      "use strict";
      var n = r(3060);
      function i(e, t, r, n, i) {
        (Error.call(this),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          i && (this.response = i));
      }
      n.inherits(i, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      var s = i.prototype,
        o = {};
      ([
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
      ].forEach(function (e) {
        o[e] = { value: e };
      }),
        Object.defineProperties(i, o),
        Object.defineProperty(s, "isAxiosError", { value: !0 }),
        (i.from = function (e, t, r, o, a, c) {
          var u = Object.create(s);
          return (
            n.toFlatObject(e, u, function (e) {
              return e !== Error.prototype;
            }),
            i.call(u, e.message, t, r, o, a),
            (u.name = e.name),
            c && Object.assign(u, c),
            u
          );
        }),
        (e.exports = i));
    },
    4382: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomBytes =
          t.wrapConstructorWithOpts =
          t.wrapConstructor =
          t.checkOpts =
          t.Hash =
          t.concatBytes =
          t.toBytes =
          t.utf8ToBytes =
          t.asyncLoop =
          t.nextTick =
          t.hexToBytes =
          t.bytesToHex =
          t.isLE =
          t.rotr =
          t.createView =
          t.u32 =
          t.u8 =
            void 0));
      const n = r(8117),
        i = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      t.u8 = i;
      const s = (e) =>
        new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      t.u32 = s;
      const o = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      t.createView = o;
      const a = (e, t) => (e << (32 - t)) | (e >>> t);
      if (
        ((t.rotr = a),
        (t.isLE =
          68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]),
        !t.isLE)
      )
        throw new Error("Non little-endian hardware is not supported");
      const c = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0"),
      );
      function u(e) {
        if (!(e instanceof Uint8Array)) throw new Error("Uint8Array expected");
        let t = "";
        for (let r = 0; r < e.length; r++) t += c[e[r]];
        return t;
      }
      function l(e) {
        if ("string" !== typeof e)
          throw new TypeError("hexToBytes: expected string, got " + typeof e);
        if (e.length % 2)
          throw new Error("hexToBytes: received invalid unpadded hex");
        const t = new Uint8Array(e.length / 2);
        for (let r = 0; r < t.length; r++) {
          const n = 2 * r,
            i = e.slice(n, n + 2),
            s = Number.parseInt(i, 16);
          if (Number.isNaN(s) || s < 0)
            throw new Error("Invalid byte sequence");
          t[r] = s;
        }
        return t;
      }
      ((t.bytesToHex = u), (t.hexToBytes = l));
      const h = async () => {};
      async function d(e, r, n) {
        let i = Date.now();
        for (let s = 0; s < e; s++) {
          n(s);
          const e = Date.now() - i;
          (e >= 0 && e < r) || (await (0, t.nextTick)(), (i += e));
        }
      }
      function f(e) {
        if ("string" !== typeof e)
          throw new TypeError("utf8ToBytes expected string, got " + typeof e);
        return new TextEncoder().encode(e);
      }
      function p(e) {
        if (("string" === typeof e && (e = f(e)), !(e instanceof Uint8Array)))
          throw new TypeError(
            `Expected input type is Uint8Array (got ${typeof e})`,
          );
        return e;
      }
      function y() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        if (!t.every((e) => e instanceof Uint8Array))
          throw new Error("Uint8Array list expected");
        if (1 === t.length) return t[0];
        const n = t.reduce((e, t) => e + t.length, 0),
          i = new Uint8Array(n);
        for (let s = 0, o = 0; s < t.length; s++) {
          const e = t[s];
          (i.set(e, o), (o += e.length));
        }
        return i;
      }
      ((t.nextTick = h),
        (t.asyncLoop = d),
        (t.utf8ToBytes = f),
        (t.toBytes = p),
        (t.concatBytes = y));
      class Hash {
        clone() {
          return this._cloneInto();
        }
      }
      t.Hash = Hash;
      const g = (e) =>
        "[object Object]" === Object.prototype.toString.call(e) &&
        e.constructor === Object;
      function b(e, t) {
        if (void 0 !== t && ("object" !== typeof t || !g(t)))
          throw new TypeError("Options should be object or undefined");
        const r = Object.assign(e, t);
        return r;
      }
      function w(e) {
        const t = (t) => e().update(p(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function m(e) {
        const t = (t, r) => e(r).update(p(t)).digest(),
          r = e({});
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = (t) => e(t)),
          t
        );
      }
      function v(e) {
        if ((void 0 === e && (e = 32), n.crypto.web))
          return n.crypto.web.getRandomValues(new Uint8Array(e));
        if (n.crypto.node)
          return new Uint8Array(n.crypto.node.randomBytes(e).buffer);
        throw new Error("The environment doesn't have randomBytes function");
      }
      ((t.checkOpts = b),
        (t.wrapConstructor = w),
        (t.wrapConstructorWithOpts = m),
        (t.randomBytes = v));
    },
    4383: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SHA2 = void 0));
      const n = r(3440),
        i = r(3183);
      function s(e, t, r, n) {
        if ("function" === typeof e.setBigUint64)
          return e.setBigUint64(t, r, n);
        const i = BigInt(32),
          s = BigInt(4294967295),
          o = Number((r >> i) & s),
          a = Number(r & s),
          c = n ? 4 : 0,
          u = n ? 0 : 4;
        (e.setUint32(t + c, o, n), e.setUint32(t + u, a, n));
      }
      class SHA2 extends i.Hash {
        constructor(e, t, r, n) {
          (super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, i.createView)(this.buffer)));
        }
        update(e) {
          n.default.exists(this);
          const { view: t, buffer: r, blockLen: s } = this;
          e = (0, i.toBytes)(e);
          const o = e.length;
          for (let n = 0; n < o; ) {
            const a = Math.min(s - this.pos, o - n);
            if (a !== s)
              (r.set(e.subarray(n, n + a), this.pos),
                (this.pos += a),
                (n += a),
                this.pos === s && (this.process(t, 0), (this.pos = 0)));
            else {
              const t = (0, i.createView)(e);
              for (; s <= o - n; n += s) this.process(t, n);
            }
          }
          return ((this.length += e.length), this.roundClean(), this);
        }
        digestInto(e) {
          (n.default.exists(this),
            n.default.output(e, this),
            (this.finished = !0));
          const { buffer: t, view: r, blockLen: o, isLE: a } = this;
          let { pos: c } = this;
          ((t[c++] = 128),
            this.buffer.subarray(c).fill(0),
            this.padOffset > o - c && (this.process(r, 0), (c = 0)));
          for (let n = c; n < o; n++) t[n] = 0;
          (s(r, o - 8, BigInt(8 * this.length), a), this.process(r, 0));
          const u = (0, i.createView)(e),
            l = this.outputLen;
          if (l % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const h = l / 4,
            d = this.get();
          if (h > d.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let n = 0; n < h; n++) u.setUint32(4 * n, d[n], a);
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const r = e.slice(0, t);
          return (this.destroy(), r);
        }
        _cloneInto(e) {
          (e || (e = new this.constructor()), e.set(...this.get()));
          const {
            blockLen: t,
            buffer: r,
            length: n,
            finished: i,
            destroyed: s,
            pos: o,
          } = this;
          return (
            (e.length = n),
            (e.pos = o),
            (e.finished = i),
            (e.destroyed = s),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
      t.SHA2 = SHA2;
    },
    4694: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mnemonicToSeedSync =
          t.mnemonicToSeed =
          t.validateMnemonic =
          t.entropyToMnemonic =
          t.mnemonicToEntropy =
          t.generateMnemonic =
            void 0));
      const n = r(3440),
        i = r(5243),
        s = r(5246),
        o = r(5247),
        a = r(3183),
        c = r(4695),
        u = (e) => "あいこくしん" === e[0];
      function l(e) {
        if ("string" !== typeof e)
          throw new TypeError("Invalid mnemonic type: " + typeof e);
        return e.normalize("NFKD");
      }
      function h(e) {
        const t = l(e),
          r = t.split(" ");
        if (![12, 15, 18, 21, 24].includes(r.length))
          throw new Error("Invalid mnemonic");
        return { nfkd: t, words: r };
      }
      function d(e) {
        n.default.bytes(e, 16, 20, 24, 28, 32);
      }
      function f(e, t) {
        if (
          (void 0 === t && (t = 128),
          n.default.number(t),
          t % 32 !== 0 || t > 256)
        )
          throw new TypeError("Invalid entropy");
        return b((0, a.randomBytes)(t / 8), e);
      }
      t.generateMnemonic = f;
      const p = (e) => {
        const t = 8 - e.length / 4;
        return new Uint8Array([((0, s.sha256)(e)[0] >> t) << t]);
      };
      function y(e) {
        if (!Array.isArray(e) || 2048 !== e.length || "string" !== typeof e[0])
          throw new Error("Worlist: expected array of 2048 strings");
        return (
          e.forEach((e) => {
            if ("string" !== typeof e)
              throw new Error("Wordlist: non-string element: " + e);
          }),
          c.utils.chain(
            c.utils.checksum(1, p),
            c.utils.radix2(11, !0),
            c.utils.alphabet(e),
          )
        );
      }
      function g(e, t) {
        const { words: r } = h(e),
          n = y(t).decode(r);
        return (d(n), n);
      }
      function b(e, t) {
        d(e);
        const r = y(t).encode(e);
        return r.join(u(t) ? "　" : " ");
      }
      function w(e, t) {
        try {
          g(e, t);
        } catch (r) {
          return !1;
        }
        return !0;
      }
      ((t.mnemonicToEntropy = g),
        (t.entropyToMnemonic = b),
        (t.validateMnemonic = w));
      const m = (e) => l("mnemonic" + e);
      function v(e, t) {
        return (
          void 0 === t && (t = ""),
          (0, i.pbkdf2Async)(o.sha512, h(e).nfkd, m(t), { c: 2048, dkLen: 64 })
        );
      }
      function E(e, t) {
        return (
          void 0 === t && (t = ""),
          (0, i.pbkdf2)(o.sha512, h(e).nfkd, m(t), { c: 2048, dkLen: 64 })
        );
      }
      ((t.mnemonicToSeed = v), (t.mnemonicToSeedSync = E));
    },
    4695: function (e, t, r) {
      "use strict";
      function n(e) {
        if (!Number.isSafeInteger(e)) throw new Error("Wrong integer: " + e);
      }
      function i(e) {
        return (
          e instanceof Uint8Array ||
          (null != e &&
            "object" === typeof e &&
            "Uint8Array" === e.constructor.name)
        );
      }
      function s() {
        const e = (e) => e,
          t = (e, t) => (r) => e(t(r));
        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
          n[i] = arguments[i];
        const s = n.map((e) => e.encode).reduceRight(t, e),
          o = n.map((e) => e.decode).reduce(t, e);
        return { encode: s, decode: o };
      }
      function o(e) {
        return {
          encode: (t) => {
            if (!Array.isArray(t) || (t.length && "number" !== typeof t[0]))
              throw new Error(
                "alphabet.encode input should be an array of numbers",
              );
            return t.map((t) => {
              if ((n(t), t < 0 || t >= e.length))
                throw new Error(
                  `Digit index outside alphabet: ${t} (alphabet: ${e.length})`,
                );
              return e[t];
            });
          },
          decode: (t) => {
            if (!Array.isArray(t) || (t.length && "string" !== typeof t[0]))
              throw new Error(
                "alphabet.decode input should be array of strings",
              );
            return t.map((t) => {
              if ("string" !== typeof t)
                throw new Error("alphabet.decode: not string element=" + t);
              const r = e.indexOf(t);
              if (-1 === r)
                throw new Error(`Unknown letter: "${t}". Allowed: ${e}`);
              return r;
            });
          },
        };
      }
      function a(e) {
        if ((void 0 === e && (e = ""), "string" !== typeof e))
          throw new Error("join separator should be string");
        return {
          encode: (t) => {
            if (!Array.isArray(t) || (t.length && "string" !== typeof t[0]))
              throw new Error("join.encode input should be array of strings");
            for (let e of t)
              if ("string" !== typeof e)
                throw new Error("join.encode: non-string input=" + e);
            return t.join(e);
          },
          decode: (t) => {
            if ("string" !== typeof t)
              throw new Error("join.decode input should be string");
            return t.split(e);
          },
        };
      }
      function c(e, t) {
        if ((void 0 === t && (t = "="), n(e), "string" !== typeof t))
          throw new Error("padding chr should be string");
        return {
          encode(r) {
            if (!Array.isArray(r) || (r.length && "string" !== typeof r[0]))
              throw new Error(
                "padding.encode input should be array of strings",
              );
            for (let e of r)
              if ("string" !== typeof e)
                throw new Error("padding.encode: non-string input=" + e);
            while ((r.length * e) % 8) r.push(t);
            return r;
          },
          decode(r) {
            if (!Array.isArray(r) || (r.length && "string" !== typeof r[0]))
              throw new Error(
                "padding.encode input should be array of strings",
              );
            for (let e of r)
              if ("string" !== typeof e)
                throw new Error("padding.decode: non-string input=" + e);
            let n = r.length;
            if ((n * e) % 8)
              throw new Error(
                "Invalid padding: string should have whole number of bytes",
              );
            for (; n > 0 && r[n - 1] === t; n--)
              if (!(((n - 1) * e) % 8))
                throw new Error("Invalid padding: string has too much padding");
            return r.slice(0, n);
          },
        };
      }
      function u(e) {
        if ("function" !== typeof e)
          throw new Error("normalize fn should be function");
        return { encode: (e) => e, decode: (t) => e(t) };
      }
      function l(e, t, r) {
        if (t < 2)
          throw new Error(
            `convertRadix: wrong from=${t}, base cannot be less than 2`,
          );
        if (r < 2)
          throw new Error(
            `convertRadix: wrong to=${r}, base cannot be less than 2`,
          );
        if (!Array.isArray(e))
          throw new Error("convertRadix: data should be array");
        if (!e.length) return [];
        let i = 0;
        const s = [],
          o = Array.from(e);
        o.forEach((e) => {
          if ((n(e), e < 0 || e >= t)) throw new Error("Wrong integer: " + e);
        });
        while (1) {
          let e = 0,
            n = !0;
          for (let s = i; s < o.length; s++) {
            const a = o[s],
              c = t * e + a;
            if (
              !Number.isSafeInteger(c) ||
              (t * e) / t !== e ||
              c - a !== t * e
            )
              throw new Error("convertRadix: carry overflow");
            e = c % r;
            const u = Math.floor(c / r);
            if (((o[s] = u), !Number.isSafeInteger(u) || u * r + e !== c))
              throw new Error("convertRadix: carry overflow");
            n && (u ? (n = !1) : (i = s));
          }
          if ((s.push(e), n)) break;
        }
        for (let n = 0; n < e.length - 1 && 0 === e[n]; n++) s.push(0);
        return s.reverse();
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.assertNumber = n),
        (t.utils =
          t.utf8 =
          t.stringToBytes =
          t.str =
          t.hex =
          t.createBase58check =
          t.bytesToString =
          t.bytes =
          t.bech32m =
          t.bech32 =
          t.base64urlnopad =
          t.base64url =
          t.base64nopad =
          t.base64 =
          t.base58xrp =
          t.base58xmr =
          t.base58flickr =
          t.base58check =
          t.base58 =
          t.base32nopad =
          t.base32hexnopad =
          t.base32hex =
          t.base32crockford =
          t.base32 =
          t.base16 =
            void 0));
      const h = (e, t) => (t ? h(t, e % t) : e),
        d = (e, t) => e + (t - h(e, t));
      function f(e, t, r, i) {
        if (!Array.isArray(e))
          throw new Error("convertRadix2: data should be array");
        if (t <= 0 || t > 32) throw new Error("convertRadix2: wrong from=" + t);
        if (r <= 0 || r > 32) throw new Error("convertRadix2: wrong to=" + r);
        if (d(t, r) > 32)
          throw new Error(
            `convertRadix2: carry overflow from=${t} to=${r} carryBits=${d(t, r)}`,
          );
        let s = 0,
          o = 0;
        const a = 2 ** r - 1,
          c = [];
        for (const u of e) {
          if ((n(u), u >= 2 ** t))
            throw new Error(`convertRadix2: invalid data word=${u} from=${t}`);
          if (((s = (s << t) | u), o + t > 32))
            throw new Error(`convertRadix2: carry overflow pos=${o} from=${t}`);
          for (o += t; o >= r; o -= r) c.push(((s >> (o - r)) & a) >>> 0);
          s &= 2 ** o - 1;
        }
        if (((s = (s << (r - o)) & a), !i && o >= t))
          throw new Error("Excess padding");
        if (!i && s) throw new Error("Non-zero padding: " + s);
        return (i && o > 0 && c.push(s >>> 0), c);
      }
      function p(e) {
        return (
          n(e),
          {
            encode: (t) => {
              if (!i(t))
                throw new Error("radix.encode input should be Uint8Array");
              return l(Array.from(t), 256, e);
            },
            decode: (t) => {
              if (!Array.isArray(t) || (t.length && "number" !== typeof t[0]))
                throw new Error(
                  "radix.decode input should be array of numbers",
                );
              return Uint8Array.from(l(t, e, 256));
            },
          }
        );
      }
      function y(e, t) {
        if ((void 0 === t && (t = !1), n(e), e <= 0 || e > 32))
          throw new Error("radix2: bits should be in (0..32]");
        if (d(8, e) > 32 || d(e, 8) > 32)
          throw new Error("radix2: carry overflow");
        return {
          encode: (r) => {
            if (!i(r))
              throw new Error("radix2.encode input should be Uint8Array");
            return f(Array.from(r), 8, e, !t);
          },
          decode: (r) => {
            if (!Array.isArray(r) || (r.length && "number" !== typeof r[0]))
              throw new Error("radix2.decode input should be array of numbers");
            return Uint8Array.from(f(r, e, 8, t));
          },
        };
      }
      function g(e) {
        if ("function" !== typeof e)
          throw new Error("unsafeWrapper fn should be function");
        return function () {
          try {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return e.apply(null, r);
          } catch (i) {}
        };
      }
      function b(e, t) {
        if ((n(e), "function" !== typeof t))
          throw new Error("checksum fn should be function");
        return {
          encode(r) {
            if (!i(r))
              throw new Error("checksum.encode: input should be Uint8Array");
            const n = t(r).slice(0, e),
              s = new Uint8Array(r.length + e);
            return (s.set(r), s.set(n, r.length), s);
          },
          decode(r) {
            if (!i(r))
              throw new Error("checksum.decode: input should be Uint8Array");
            const n = r.slice(0, -e),
              s = t(n).slice(0, e),
              o = r.slice(-e);
            for (let t = 0; t < e; t++)
              if (s[t] !== o[t]) throw new Error("Invalid checksum");
            return n;
          },
        };
      }
      t.utils = {
        alphabet: o,
        chain: s,
        checksum: b,
        convertRadix: l,
        convertRadix2: f,
        radix: p,
        radix2: y,
        join: a,
        padding: c,
      };
      const w = (t.base16 = s(y(4), o("0123456789ABCDEF"), a(""))),
        m = (t.base32 = s(
          y(5),
          o("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),
          c(5),
          a(""),
        )),
        v =
          ((t.base32nopad = s(
            y(5),
            o("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),
            a(""),
          )),
          (t.base32hex = s(
            y(5),
            o("0123456789ABCDEFGHIJKLMNOPQRSTUV"),
            c(5),
            a(""),
          )),
          (t.base32hexnopad = s(
            y(5),
            o("0123456789ABCDEFGHIJKLMNOPQRSTUV"),
            a(""),
          )),
          (t.base32crockford = s(
            y(5),
            o("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),
            a(""),
            u((e) => e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")),
          )),
          (t.base64 = s(
            y(6),
            o(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            ),
            c(6),
            a(""),
          ))),
        E =
          ((t.base64nopad = s(
            y(6),
            o(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            ),
            a(""),
          )),
          (t.base64url = s(
            y(6),
            o(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            ),
            c(6),
            a(""),
          ))),
        A =
          ((t.base64urlnopad = s(
            y(6),
            o(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            ),
            a(""),
          )),
          (e) => s(p(58), o(e), a(""))),
        _ = (t.base58 = A(
          "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        )),
        x =
          ((t.base58flickr = A(
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          )),
          (t.base58xrp = A(
            "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz",
          )),
          [0, 2, 3, 5, 6, 7, 9, 10, 11]),
        T = (t.base58xmr = {
          encode(e) {
            let t = "";
            for (let r = 0; r < e.length; r += 8) {
              const n = e.subarray(r, r + 8);
              t += _.encode(n).padStart(x[n.length], "1");
            }
            return t;
          },
          decode(e) {
            let t = [];
            for (let r = 0; r < e.length; r += 11) {
              const n = e.slice(r, r + 11),
                i = x.indexOf(n.length),
                s = _.decode(n);
              for (let e = 0; e < s.length - i; e++)
                if (0 !== s[e]) throw new Error("base58xmr: wrong padding");
              t = t.concat(Array.from(s.slice(s.length - i)));
            }
            return Uint8Array.from(t);
          },
        }),
        S = (e) =>
          s(
            b(4, (t) => e(e(t))),
            _,
          );
      t.createBase58check = S;
      t.base58check = S;
      const U = s(o("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), a("")),
        R = [996825010, 642813549, 513874426, 1027748829, 705979059];
      function B(e) {
        const t = e >> 25;
        let r = (33554431 & e) << 5;
        for (let n = 0; n < R.length; n++) 1 === ((t >> n) & 1) && (r ^= R[n]);
        return r;
      }
      function k(e, t, r) {
        void 0 === r && (r = 1);
        const n = e.length;
        let i = 1;
        for (let s = 0; s < n; s++) {
          const t = e.charCodeAt(s);
          if (t < 33 || t > 126) throw new Error(`Invalid prefix (${e})`);
          i = B(i) ^ (t >> 5);
        }
        i = B(i);
        for (let s = 0; s < n; s++) i = B(i) ^ (31 & e.charCodeAt(s));
        for (let s of t) i = B(i) ^ s;
        for (let s = 0; s < 6; s++) i = B(i);
        return ((i ^= r), U.encode(f([i % 2 ** 30], 30, 5, !1)));
      }
      function C(e) {
        const t = "bech32" === e ? 1 : 734539939,
          r = y(5),
          n = r.decode,
          i = r.encode,
          s = g(n);
        function o(e, r, n) {
          if ((void 0 === n && (n = 90), "string" !== typeof e))
            throw new Error(
              "bech32.encode prefix should be string, not " + typeof e,
            );
          if (
            (r instanceof Uint8Array && (r = Array.from(r)),
            !Array.isArray(r) || (r.length && "number" !== typeof r[0]))
          )
            throw new Error(
              "bech32.encode words should be array of numbers, not " + typeof r,
            );
          if (0 === e.length)
            throw new TypeError("Invalid prefix length " + e.length);
          const i = e.length + 7 + r.length;
          if (!1 !== n && i > n)
            throw new TypeError(`Length ${i} exceeds limit ${n}`);
          const s = e.toLowerCase(),
            o = k(s, r, t);
          return `${s}1${U.encode(r)}${o}`;
        }
        function a(e, r) {
          if ((void 0 === r && (r = 90), "string" !== typeof e))
            throw new Error(
              "bech32.decode input should be string, not " + typeof e,
            );
          if (e.length < 8 || (!1 !== r && e.length > r))
            throw new TypeError(
              `Wrong string length: ${e.length} (${e}). Expected (8..${r})`,
            );
          const n = e.toLowerCase();
          if (e !== n && e !== e.toUpperCase())
            throw new Error("String must be lowercase or uppercase");
          const i = n.lastIndexOf("1");
          if (0 === i || -1 === i)
            throw new Error(
              'Letter "1" must be present between prefix and data only',
            );
          const s = n.slice(0, i),
            o = n.slice(i + 1);
          if (o.length < 6)
            throw new Error("Data must be at least 6 characters long");
          const a = U.decode(o).slice(0, -6),
            c = k(s, a, t);
          if (!o.endsWith(c))
            throw new Error(`Invalid checksum in ${e}: expected "${c}"`);
          return { prefix: s, words: a };
        }
        const c = g(a);
        function u(e) {
          const { prefix: t, words: r } = a(e, !1);
          return { prefix: t, words: r, bytes: n(r) };
        }
        function l(e, t) {
          return o(e, i(t));
        }
        return {
          encode: o,
          decode: a,
          encodeFromBytes: l,
          decodeToBytes: u,
          decodeUnsafe: c,
          fromWords: n,
          fromWordsUnsafe: s,
          toWords: i,
        };
      }
      ((t.bech32 = C("bech32")), (t.bech32m = C("bech32m")));
      const z = (t.utf8 = {
          encode: (e) => new TextDecoder().decode(e),
          decode: (e) => new TextEncoder().encode(e),
        }),
        H = (t.hex = s(
          y(4),
          o("0123456789abcdef"),
          a(""),
          u((e) => {
            if ("string" !== typeof e || e.length % 2)
              throw new TypeError(
                `hex.decode: expected string, got ${typeof e} with length ${e.length}`,
              );
            return e.toLowerCase();
          }),
        )),
        q = {
          utf8: z,
          hex: H,
          base16: w,
          base32: m,
          base64: v,
          base64url: E,
          base58: _,
          base58xmr: T,
        },
        L =
          "Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr",
        I = (e, t) => {
          if ("string" !== typeof e || !q.hasOwnProperty(e))
            throw new TypeError(L);
          if (!i(t)) throw new TypeError("bytesToString() expects Uint8Array");
          return q[e].encode(t);
        };
      t.bytesToString = I;
      t.str = I;
      const O = (e, t) => {
        if (!q.hasOwnProperty(e)) throw new TypeError(L);
        if ("string" !== typeof t)
          throw new TypeError("stringToBytes() expects string");
        return q[e].decode(t);
      };
      t.stringToBytes = O;
      t.bytes = O;
    },
    4696: function (e, t, r) {
      "use strict";
      var n = r(3903),
        i = r(3060);
      function s(e) {
        (n.call(this, null == e ? "canceled" : e, n.ERR_CANCELED),
          (this.name = "CanceledError"));
      }
      (i.inherits(s, n, { __CANCEL__: !0 }), (e.exports = s));
    },
    5242: function (e, t, r) {
      "use strict";
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error("Wrong positive integer: " + e);
      }
      function i(e) {
        if ("boolean" !== typeof e)
          throw new Error("Expected boolean, not " + e);
      }
      function s(e) {
        if (!(e instanceof Uint8Array))
          throw new TypeError("Expected Uint8Array");
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        if (r.length > 0 && !r.includes(e.length))
          throw new TypeError(
            `Expected Uint8Array of length ${r}, not of length=${e.length}`,
          );
      }
      function o(e) {
        if ("function" !== typeof e || "function" !== typeof e.create)
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        (n(e.outputLen), n(e.blockLen));
      }
      function a(e, t) {
        if ((void 0 === t && (t = !0), e.destroyed))
          throw new Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function c(e, t) {
        s(e);
        const r = t.outputLen;
        if (e.length < r)
          throw new Error(
            "digestInto() expects output buffer of length at least " + r,
          );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.output = t.exists = t.hash = t.bytes = t.bool = t.number = void 0),
        (t.number = n),
        (t.bool = i),
        (t.bytes = s),
        (t.hash = o),
        (t.exists = a),
        (t.output = c));
      const u = { number: n, bool: i, bytes: s, hash: o, exists: a, output: c };
      t.default = u;
    },
    5243: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pbkdf2Async = t.pbkdf2 = void 0));
      const n = r(3440),
        i = r(5244),
        s = r(3183);
      function o(e, t, r, o) {
        n.default.hash(e);
        const a = (0, s.checkOpts)({ dkLen: 32, asyncTick: 10 }, o),
          { c: c, dkLen: u, asyncTick: l } = a;
        if (
          (n.default.number(c), n.default.number(u), n.default.number(l), c < 1)
        )
          throw new Error("PBKDF2: iterations (c) should be >= 1");
        const h = (0, s.toBytes)(t),
          d = (0, s.toBytes)(r),
          f = new Uint8Array(u),
          p = i.hmac.create(e, h),
          y = p._cloneInto().update(d);
        return { c: c, dkLen: u, asyncTick: l, DK: f, PRF: p, PRFSalt: y };
      }
      function a(e, t, r, n, i) {
        return (e.destroy(), t.destroy(), n && n.destroy(), i.fill(0), r);
      }
      function c(e, t, r, n) {
        const { c: i, dkLen: c, DK: u, PRF: l, PRFSalt: h } = o(e, t, r, n);
        let d;
        const f = new Uint8Array(4),
          p = (0, s.createView)(f),
          y = new Uint8Array(l.outputLen);
        for (let s = 1, o = 0; o < c; s++, o += l.outputLen) {
          const e = u.subarray(o, o + l.outputLen);
          (p.setInt32(0, s, !1),
            (d = h._cloneInto(d)).update(f).digestInto(y),
            e.set(y.subarray(0, e.length)));
          for (let t = 1; t < i; t++) {
            l._cloneInto(d).update(y).digestInto(y);
            for (let t = 0; t < e.length; t++) e[t] ^= y[t];
          }
        }
        return a(l, h, u, d, y);
      }
      async function u(e, t, r, n) {
        const {
          c: i,
          dkLen: c,
          asyncTick: u,
          DK: l,
          PRF: h,
          PRFSalt: d,
        } = o(e, t, r, n);
        let f;
        const p = new Uint8Array(4),
          y = (0, s.createView)(p),
          g = new Uint8Array(h.outputLen);
        for (let o = 1, a = 0; a < c; o++, a += h.outputLen) {
          const e = l.subarray(a, a + h.outputLen);
          (y.setInt32(0, o, !1),
            (f = d._cloneInto(f)).update(p).digestInto(g),
            e.set(g.subarray(0, e.length)),
            await (0, s.asyncLoop)(i - 1, u, (t) => {
              h._cloneInto(f).update(g).digestInto(g);
              for (let r = 0; r < e.length; r++) e[r] ^= g[r];
            }));
        }
        return a(h, d, l, f, g);
      }
      ((t.pbkdf2 = c), (t.pbkdf2Async = u));
    },
    5244: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hmac = void 0));
      const n = r(3440),
        i = r(3183);
      class HMAC extends i.Hash {
        constructor(e, t) {
          (super(),
            (this.finished = !1),
            (this.destroyed = !1),
            n.default.hash(e));
          const r = (0, i.toBytes)(t);
          if (
            ((this.iHash = e.create()), "function" !== typeof this.iHash.update)
          )
            throw new TypeError(
              "Expected instance of class which extends utils.Hash",
            );
          ((this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen));
          const s = this.blockLen,
            o = new Uint8Array(s);
          o.set(r.length > s ? e.create().update(r).digest() : r);
          for (let n = 0; n < o.length; n++) o[n] ^= 54;
          (this.iHash.update(o), (this.oHash = e.create()));
          for (let n = 0; n < o.length; n++) o[n] ^= 106;
          (this.oHash.update(o), o.fill(0));
        }
        update(e) {
          return (n.default.exists(this), this.iHash.update(e), this);
        }
        digestInto(e) {
          (n.default.exists(this),
            n.default.bytes(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy());
        }
        digest() {
          const e = new Uint8Array(this.oHash.outputLen);
          return (this.digestInto(e), e);
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          const {
            oHash: t,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: s,
            outputLen: o,
          } = this;
          return (
            (e = e),
            (e.finished = n),
            (e.destroyed = i),
            (e.blockLen = s),
            (e.outputLen = o),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
        }
      }
      const s = (e, t, r) => new HMAC(e, t).update(r).digest();
      ((t.hmac = s), (t.hmac.create = (e, t) => new HMAC(e, t)));
    },
    5245: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto = {
          node: void 0,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        }));
    },
    5246: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha224 = t.sha256 = void 0));
      const n = r(4383),
        i = r(3183),
        s = (e, t, r) => (e & t) ^ (~e & r),
        o = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
        a = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        c = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        u = new Uint32Array(64);
      class SHA256 extends n.SHA2 {
        constructor() {
          (super(64, 32, 8, !1),
            (this.A = 0 | c[0]),
            (this.B = 0 | c[1]),
            (this.C = 0 | c[2]),
            (this.D = 0 | c[3]),
            (this.E = 0 | c[4]),
            (this.F = 0 | c[5]),
            (this.G = 0 | c[6]),
            (this.H = 0 | c[7]));
        }
        get() {
          const { A: e, B: t, C: r, D: n, E: i, F: s, G: o, H: a } = this;
          return [e, t, r, n, i, s, o, a];
        }
        set(e, t, r, n, i, s, o, a) {
          ((this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | o),
            (this.H = 0 | a));
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4) u[i] = e.getUint32(t, !1);
          for (let s = 16; s < 64; s++) {
            const e = u[s - 15],
              t = u[s - 2],
              r = (0, i.rotr)(e, 7) ^ (0, i.rotr)(e, 18) ^ (e >>> 3),
              n = (0, i.rotr)(t, 17) ^ (0, i.rotr)(t, 19) ^ (t >>> 10);
            u[s] = (n + u[s - 7] + r + u[s - 16]) | 0;
          }
          let { A: r, B: n, C: c, D: l, E: h, F: d, G: f, H: p } = this;
          for (let y = 0; y < 64; y++) {
            const e =
                (0, i.rotr)(h, 6) ^ (0, i.rotr)(h, 11) ^ (0, i.rotr)(h, 25),
              t = (p + e + s(h, d, f) + a[y] + u[y]) | 0,
              g = (0, i.rotr)(r, 2) ^ (0, i.rotr)(r, 13) ^ (0, i.rotr)(r, 22),
              b = (g + o(r, n, c)) | 0;
            ((p = f),
              (f = d),
              (d = h),
              (h = (l + t) | 0),
              (l = c),
              (c = n),
              (n = r),
              (r = (t + b) | 0));
          }
          ((r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (c = (c + this.C) | 0),
            (l = (l + this.D) | 0),
            (h = (h + this.E) | 0),
            (d = (d + this.F) | 0),
            (f = (f + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(r, n, c, l, h, d, f, p));
        }
        roundClean() {
          u.fill(0);
        }
        destroy() {
          (this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0));
        }
      }
      class SHA224 extends SHA256 {
        constructor() {
          (super(),
            (this.A = -1056596264),
            (this.B = 914150663),
            (this.C = 812702999),
            (this.D = -150054599),
            (this.E = -4191439),
            (this.F = 1750603025),
            (this.G = 1694076839),
            (this.H = -1090891868),
            (this.outputLen = 28));
        }
      }
      ((t.sha256 = (0, i.wrapConstructor)(() => new SHA256())),
        (t.sha224 = (0, i.wrapConstructor)(() => new SHA224())));
    },
    5247: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha384 =
          t.sha512_256 =
          t.sha512_224 =
          t.sha512 =
          t.SHA512 =
            void 0));
      const n = r(4383),
        i = r(5248),
        s = r(3183),
        [o, a] = i.default.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((e) => BigInt(e)),
        ),
        c = new Uint32Array(80),
        u = new Uint32Array(80);
      class SHA512 extends n.SHA2 {
        constructor() {
          (super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209));
        }
        get() {
          const {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: s,
            Dh: o,
            Dl: a,
            Eh: c,
            El: u,
            Fh: l,
            Fl: h,
            Gh: d,
            Gl: f,
            Hh: p,
            Hl: y,
          } = this;
          return [e, t, r, n, i, s, o, a, c, u, l, h, d, f, p, y];
        }
        set(e, t, r, n, i, s, o, a, c, u, l, h, d, f, p, y) {
          ((this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | s),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | u),
            (this.Fh = 0 | l),
            (this.Fl = 0 | h),
            (this.Gh = 0 | d),
            (this.Gl = 0 | f),
            (this.Hh = 0 | p),
            (this.Hl = 0 | y));
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4)
            ((c[i] = e.getUint32(t)), (u[i] = e.getUint32((t += 4))));
          for (let o = 16; o < 80; o++) {
            const e = 0 | c[o - 15],
              t = 0 | u[o - 15],
              r =
                i.default.rotrSH(e, t, 1) ^
                i.default.rotrSH(e, t, 8) ^
                i.default.shrSH(e, t, 7),
              n =
                i.default.rotrSL(e, t, 1) ^
                i.default.rotrSL(e, t, 8) ^
                i.default.shrSL(e, t, 7),
              s = 0 | c[o - 2],
              a = 0 | u[o - 2],
              l =
                i.default.rotrSH(s, a, 19) ^
                i.default.rotrBH(s, a, 61) ^
                i.default.shrSH(s, a, 6),
              h =
                i.default.rotrSL(s, a, 19) ^
                i.default.rotrBL(s, a, 61) ^
                i.default.shrSL(s, a, 6),
              d = i.default.add4L(n, h, u[o - 7], u[o - 16]),
              f = i.default.add4H(d, r, l, c[o - 7], c[o - 16]);
            ((c[o] = 0 | f), (u[o] = 0 | d));
          }
          let {
            Ah: r,
            Al: n,
            Bh: s,
            Bl: l,
            Ch: h,
            Cl: d,
            Dh: f,
            Dl: p,
            Eh: y,
            El: g,
            Fh: b,
            Fl: w,
            Gh: m,
            Gl: v,
            Hh: E,
            Hl: A,
          } = this;
          for (let _ = 0; _ < 80; _++) {
            const e =
                i.default.rotrSH(y, g, 14) ^
                i.default.rotrSH(y, g, 18) ^
                i.default.rotrBH(y, g, 41),
              t =
                i.default.rotrSL(y, g, 14) ^
                i.default.rotrSL(y, g, 18) ^
                i.default.rotrBL(y, g, 41),
              x = (y & b) ^ (~y & m),
              T = (g & w) ^ (~g & v),
              S = i.default.add5L(A, t, T, a[_], u[_]),
              U = i.default.add5H(S, E, e, x, o[_], c[_]),
              R = 0 | S,
              B =
                i.default.rotrSH(r, n, 28) ^
                i.default.rotrBH(r, n, 34) ^
                i.default.rotrBH(r, n, 39),
              k =
                i.default.rotrSL(r, n, 28) ^
                i.default.rotrBL(r, n, 34) ^
                i.default.rotrBL(r, n, 39),
              C = (r & s) ^ (r & h) ^ (s & h),
              z = (n & l) ^ (n & d) ^ (l & d);
            ((E = 0 | m),
              (A = 0 | v),
              (m = 0 | b),
              (v = 0 | w),
              (b = 0 | y),
              (w = 0 | g),
              ({ h: y, l: g } = i.default.add(0 | f, 0 | p, 0 | U, 0 | R)),
              (f = 0 | h),
              (p = 0 | d),
              (h = 0 | s),
              (d = 0 | l),
              (s = 0 | r),
              (l = 0 | n));
            const H = i.default.add3L(R, k, z);
            ((r = i.default.add3H(H, U, B, C)), (n = 0 | H));
          }
          (({ h: r, l: n } = i.default.add(
            0 | this.Ah,
            0 | this.Al,
            0 | r,
            0 | n,
          )),
            ({ h: s, l: l } = i.default.add(
              0 | this.Bh,
              0 | this.Bl,
              0 | s,
              0 | l,
            )),
            ({ h: h, l: d } = i.default.add(
              0 | this.Ch,
              0 | this.Cl,
              0 | h,
              0 | d,
            )),
            ({ h: f, l: p } = i.default.add(
              0 | this.Dh,
              0 | this.Dl,
              0 | f,
              0 | p,
            )),
            ({ h: y, l: g } = i.default.add(
              0 | this.Eh,
              0 | this.El,
              0 | y,
              0 | g,
            )),
            ({ h: b, l: w } = i.default.add(
              0 | this.Fh,
              0 | this.Fl,
              0 | b,
              0 | w,
            )),
            ({ h: m, l: v } = i.default.add(
              0 | this.Gh,
              0 | this.Gl,
              0 | m,
              0 | v,
            )),
            ({ h: E, l: A } = i.default.add(
              0 | this.Hh,
              0 | this.Hl,
              0 | E,
              0 | A,
            )),
            this.set(r, n, s, l, h, d, f, p, y, g, b, w, m, v, E, A));
        }
        roundClean() {
          (c.fill(0), u.fill(0));
        }
        destroy() {
          (this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      t.SHA512 = SHA512;
      class SHA512_224 extends SHA512 {
        constructor() {
          (super(),
            (this.Ah = -1942145080),
            (this.Al = 424955298),
            (this.Bh = 1944164710),
            (this.Bl = -1982016298),
            (this.Ch = 502970286),
            (this.Cl = 855612546),
            (this.Dh = 1738396948),
            (this.Dl = 1479516111),
            (this.Eh = 258812777),
            (this.El = 2077511080),
            (this.Fh = 2011393907),
            (this.Fl = 79989058),
            (this.Gh = 1067287976),
            (this.Gl = 1780299464),
            (this.Hh = 286451373),
            (this.Hl = -1848208735),
            (this.outputLen = 28));
        }
      }
      class SHA512_256 extends SHA512 {
        constructor() {
          (super(),
            (this.Ah = 573645204),
            (this.Al = -64227540),
            (this.Bh = -1621794909),
            (this.Bl = -934517566),
            (this.Ch = 596883563),
            (this.Cl = 1867755857),
            (this.Dh = -1774684391),
            (this.Dl = 1497426621),
            (this.Eh = -1775747358),
            (this.El = -1467023389),
            (this.Fh = -1101128155),
            (this.Fl = 1401305490),
            (this.Gh = 721525244),
            (this.Gl = 746961066),
            (this.Hh = 246885852),
            (this.Hl = -2117784414),
            (this.outputLen = 32));
        }
      }
      class SHA384 extends SHA512 {
        constructor() {
          (super(),
            (this.Ah = -876896931),
            (this.Al = -1056596264),
            (this.Bh = 1654270250),
            (this.Bl = 914150663),
            (this.Ch = -1856437926),
            (this.Cl = 812702999),
            (this.Dh = 355462360),
            (this.Dl = -150054599),
            (this.Eh = 1731405415),
            (this.El = -4191439),
            (this.Fh = -1900787065),
            (this.Fl = 1750603025),
            (this.Gh = -619958771),
            (this.Gl = 1694076839),
            (this.Hh = 1203062813),
            (this.Hl = -1090891868),
            (this.outputLen = 48));
        }
      }
      ((t.sha512 = (0, s.wrapConstructor)(() => new SHA512())),
        (t.sha512_224 = (0, s.wrapConstructor)(() => new SHA512_224())),
        (t.sha512_256 = (0, s.wrapConstructor)(() => new SHA512_256())),
        (t.sha384 = (0, s.wrapConstructor)(() => new SHA384())));
    },
    5248: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add = t.toBig = t.split = t.fromBig = void 0));
      const n = BigInt(2 ** 32 - 1),
        i = BigInt(32);
      function s(e, t) {
        return (
          void 0 === t && (t = !1),
          t
            ? { h: Number(e & n), l: Number((e >> i) & n) }
            : { h: 0 | Number((e >> i) & n), l: 0 | Number(e & n) }
        );
      }
      function o(e, t) {
        void 0 === t && (t = !1);
        let r = new Uint32Array(e.length),
          n = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          const { h: o, l: a } = s(e[i], t);
          [r[i], n[i]] = [o, a];
        }
        return [r, n];
      }
      ((t.fromBig = s), (t.split = o));
      const a = (e, t) => (BigInt(e >>> 0) << i) | BigInt(t >>> 0);
      t.toBig = a;
      const c = (e, t, r) => e >>> r,
        u = (e, t, r) => (e << (32 - r)) | (t >>> r),
        l = (e, t, r) => (e >>> r) | (t << (32 - r)),
        h = (e, t, r) => (e << (32 - r)) | (t >>> r),
        d = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
        f = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
        p = (e, t) => t,
        y = (e, t) => e,
        g = (e, t, r) => (e << r) | (t >>> (32 - r)),
        b = (e, t, r) => (t << r) | (e >>> (32 - r)),
        w = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        m = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      function v(e, t, r, n) {
        const i = (t >>> 0) + (n >>> 0);
        return { h: (e + r + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
      }
      t.add = v;
      const E = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        A = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
        _ = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
        x = (e, t, r, n, i) => (t + r + n + i + ((e / 2 ** 32) | 0)) | 0,
        T = (e, t, r, n, i) =>
          (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
        S = (e, t, r, n, i, s) => (t + r + n + i + s + ((e / 2 ** 32) | 0)) | 0,
        U = {
          fromBig: s,
          split: o,
          toBig: t.toBig,
          shrSH: c,
          shrSL: u,
          rotrSH: l,
          rotrSL: h,
          rotrBH: d,
          rotrBL: f,
          rotr32H: p,
          rotr32L: y,
          rotlSH: g,
          rotlSL: b,
          rotlBH: w,
          rotlBL: m,
          add: v,
          add3L: E,
          add3H: A,
          add4L: _,
          add4H: x,
          add5H: S,
          add5L: T,
        };
      t.default = U;
    },
    5249: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(3060),
          i = r(8127),
          s = r(3903),
          o = r(6192),
          a = r(6193),
          c = { "Content-Type": "application/x-www-form-urlencoded" };
        function u(e, t) {
          !n.isUndefined(e) &&
            n.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        function l() {
          var e;
          return (
            ("undefined" !== typeof XMLHttpRequest ||
              ("undefined" !== typeof t &&
                "[object process]" === Object.prototype.toString.call(t))) &&
              (e = r(6194)),
            e
          );
        }
        function h(e, t, r) {
          if (n.isString(e))
            try {
              return ((t || JSON.parse)(e), n.trim(e));
            } catch (i) {
              if ("SyntaxError" !== i.name) throw i;
            }
          return (r || JSON.stringify)(e);
        }
        var d = {
          transitional: o,
          adapter: l(),
          transformRequest: [
            function (e, t) {
              if (
                (i(t, "Accept"),
                i(t, "Content-Type"),
                n.isFormData(e) ||
                  n.isArrayBuffer(e) ||
                  n.isBuffer(e) ||
                  n.isStream(e) ||
                  n.isFile(e) ||
                  n.isBlob(e))
              )
                return e;
              if (n.isArrayBufferView(e)) return e.buffer;
              if (n.isURLSearchParams(e))
                return (
                  u(t, "application/x-www-form-urlencoded;charset=utf-8"),
                  e.toString()
                );
              var r,
                s = n.isObject(e),
                o = t && t["Content-Type"];
              if ((r = n.isFileList(e)) || (s && "multipart/form-data" === o)) {
                var c = this.env && this.env.FormData;
                return a(r ? { "files[]": e } : e, c && new c());
              }
              return s || "application/json" === o
                ? (u(t, "application/json"), h(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional || d.transitional,
                r = t && t.silentJSONParsing,
                i = t && t.forcedJSONParsing,
                o = !r && "json" === this.responseType;
              if (o || (i && n.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (a) {
                  if (o) {
                    if ("SyntaxError" === a.name)
                      throw s.from(
                        a,
                        s.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response,
                      );
                    throw a;
                  }
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: r(8135) },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
        (n.forEach(["delete", "get", "head"], function (e) {
          d.headers[e] = {};
        }),
          n.forEach(["post", "put", "patch"], function (e) {
            d.headers[e] = n.merge(c);
          }),
          (e.exports = d));
      }).call(this, r(18));
    },
    6188: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.derivePath =
          t.WaitForTransactionError =
          t.Types =
          t.TypeTagParser =
          t.TxnBuilderTypes =
          t.TransactionBuilderRemoteABI =
          t.TransactionBuilderMultiEd25519 =
          t.TransactionBuilderEd25519 =
          t.TransactionBuilderABI =
          t.TransactionBuilder =
          t.TokenTypes =
          t.TokenClient =
          t.HexString =
          t.FaucetClient =
          t.FailedTransactionError =
          t.CoinClient =
          t.BCS =
          t.AptosClient =
          t.AptosAccount =
          t.ApiError =
            void 0));
      var i = n(r(2925)),
        s = r(8116),
        o = d(r(4694)),
        a = r(4382),
        c = r(8118),
        u = r(8119),
        l = n(r(8121)),
        h = n(r(8140));
      function d(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (d = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            s,
            o = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((i = t ? n : r)) {
            if (i.has(e)) return i.get(e);
            i.set(e, o);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (s.get || s.set)
                ? i(o, r, s)
                : (o[r] = e[r]));
          return o;
        })(e, t);
      }
      var f = Object.defineProperty,
        p = Object.getOwnPropertyDescriptor,
        y = (e, t) => {
          for (var r in t) f(e, r, { get: t[r], enumerable: !0 });
        },
        g = (e, t, r, n) => {
          for (
            var i, s = n > 1 ? void 0 : n ? p(t, r) : t, o = e.length - 1;
            o >= 0;
            o--
          )
            (i = e[o]) && (s = (n ? i(t, r, s) : i(s)) || s);
          return (n && s && f(t, r, s), s);
        },
        b = /^m(\/[0-9]+')+$/,
        w = (e) => e.replace("'", ""),
        m = "ed25519 seed",
        v = 2147483648,
        E = (e) => {
          const t = c.hmac.create(u.sha512, m),
            r = t.update((0, a.hexToBytes)(e)).digest(),
            n = r.slice(0, 32),
            i = r.slice(32);
          return { key: n, chainCode: i };
        },
        A = (e, t) => {
          let { key: r, chainCode: n } = e;
          const i = new ArrayBuffer(4);
          new DataView(i).setUint32(0, t);
          const s = new Uint8Array(i),
            o = new Uint8Array([0]),
            a = new Uint8Array([...o, ...r, ...s]),
            l = c.hmac.create(u.sha512, n).update(a).digest(),
            h = l.slice(0, 32),
            d = l.slice(32);
          return { key: h, chainCode: d };
        },
        _ = (e) =>
          !!b.test(e) && !e.split("/").slice(1).map(w).some(Number.isNaN),
        x = function (e, t, r) {
          if ((void 0 === r && (r = v), !_(e)))
            throw new Error("Invalid derivation path");
          const { key: n, chainCode: i } = E(t),
            s = e
              .split("/")
              .slice(1)
              .map(w)
              .map((e) => parseInt(e, 10));
          return s.reduce((e, t) => A(e, t + r), { key: n, chainCode: i });
        };
      t.derivePath = x;
      var T = class {
        static fromBuffer(e) {
          return T.fromUint8Array(e);
        }
        static fromUint8Array(e) {
          return new T((0, a.bytesToHex)(e));
        }
        static ensure(e) {
          return "string" === typeof e ? new T(e) : e;
        }
        constructor(e) {
          e.startsWith("0x")
            ? (this.hexString = e)
            : (this.hexString = "0x" + e);
        }
        hex() {
          return this.hexString;
        }
        noPrefix() {
          return this.hexString.slice(2);
        }
        toString() {
          return this.hex();
        }
        toShortString() {
          const e = this.hexString.replace(/^0x0*/, "");
          return "0x" + e;
        }
        toUint8Array() {
          return Uint8Array.from((0, a.hexToBytes)(this.noPrefix()));
        }
      };
      async function S(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      t.HexString = T;
      var U = "/v1";
      function R(e) {
        let t = "" + e;
        return (
          t.endsWith("/") && (t = t.substring(0, t.length - 1)),
          t.endsWith(U) || (t = `${t}${U}`),
          t
        );
      }
      var B = 2e5,
        k = 20,
        C = 20,
        z = "0x1::aptos_coin::AptosCoin";
      function H(e) {
        let t, r, n;
        return (
          "object" === typeof e
            ? ((t = e.hashFunction), (r = e.ttlMs), (n = e.tags))
            : (t = e),
          (e, i, s) => {
            if (null != s.value) s.value = O(s.value, t, r, n);
            else {
              if (null == s.get)
                throw new Error(
                  "Only put a Memoize() decorator on a method or get accessor.",
                );
              s.get = O(s.get, t, r, n);
            }
          }
        );
      }
      function q(e, t) {
        return H({ ttlMs: e, hashFunction: t });
      }
      var L = new Map();
      function I(e) {
        const t = new Set();
        for (const r of e) {
          const e = L.get(r);
          if (e) for (const r of e) t.has(r) || (r.clear(), t.add(r));
        }
        return t.size;
      }
      function O(e, t, r, n) {
        void 0 === r && (r = 0);
        const i = Symbol("__memoized_map__");
        return function () {
          let s;
          const o = this;
          o.hasOwnProperty(i) ||
            Object.defineProperty(o, i, {
              configurable: !1,
              enumerable: !1,
              writable: !1,
              value: new Map(),
            });
          const a = o[i];
          if (Array.isArray(n))
            for (const e of n) L.has(e) ? L.get(e).push(a) : L.set(e, [a]);
          for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++)
            u[l] = arguments[l];
          if (t || u.length > 0 || r > 0) {
            let n;
            n =
              !0 === t
                ? u.map((e) => e.toString()).join("!")
                : t
                  ? t.apply(o, u)
                  : u[0];
            const i = n + "__timestamp";
            let c = !1;
            if (r > 0)
              if (a.has(i)) {
                const e = a.get(i);
                c = Date.now() - e > r;
              } else c = !0;
            a.has(n) && !c
              ? (s = a.get(n))
              : ((s = e.apply(o, u)),
                a.set(n, s),
                r > 0 && a.set(i, Date.now()));
          } else {
            const t = o;
            a.has(t) ? (s = a.get(t)) : ((s = e.apply(o, u)), a.set(t, s));
          }
          return s;
        };
      }
      var P = class {
          static fromAptosAccountObject(e) {
            return new P(T.ensure(e.privateKeyHex).toUint8Array(), e.address);
          }
          static fromDerivePath(e, t) {
            if (!P.isValidPath(e)) throw new Error("Invalid derivation path");
            const r = t
                .trim()
                .split(/\s+/)
                .map((e) => e.toLowerCase())
                .join(" "),
              { key: n } = x(e, (0, a.bytesToHex)(o.mnemonicToSeedSync(r)));
            return new P(n);
          }
          constructor(e, t) {
            ((this.signingKey = e
              ? i.default.sign.keyPair.fromSeed(e.slice(0, 32))
              : i.default.sign.keyPair()),
              (this.accountAddress = T.ensure(t || this.authKey().hex())));
          }
          address() {
            return this.accountAddress;
          }
          authKey() {
            const e = s.sha3_256.create();
            return (
              e.update(this.signingKey.publicKey),
              e.update("\0"),
              T.fromUint8Array(e.digest())
            );
          }
          pubKey() {
            return T.fromUint8Array(this.signingKey.publicKey);
          }
          signBuffer(e) {
            const t = i.default.sign(e, this.signingKey.secretKey);
            return T.fromUint8Array(t.slice(0, 64));
          }
          signHexString(e) {
            const t = T.ensure(e).toUint8Array();
            return this.signBuffer(t);
          }
          toPrivateKeyObject() {
            return {
              address: this.address().hex(),
              publicKeyHex: this.pubKey().hex(),
              privateKeyHex: T.fromUint8Array(
                this.signingKey.secretKey.slice(0, 32),
              ).hex(),
            };
          }
        },
        M = (t.AptosAccount = P);
      ((M.isValidPath = (e) =>
        !!/^m\/44'\/637'\/[0-9]+'\/[0-9]+'\/[0-9]+'+$/.test(e)),
        g([H()], M.prototype, "authKey", 1));
      var N = (t.Types = {});
      y(N, {
        $AccountData: () => _e,
        $AccountSignature: () => xe,
        $AccountSignature_Ed25519Signature: () => Te,
        $AccountSignature_MultiEd25519Signature: () => Se,
        $Address: () => Ue,
        $AptosError: () => Re,
        $AptosErrorCode: () => Be,
        $Block: () => ke,
        $BlockMetadataTransaction: () => Ce,
        $DecodedTableData: () => ze,
        $DeleteModule: () => qe,
        $DeleteResource: () => Le,
        $DeleteTableItem: () => Ie,
        $DeletedTableData: () => He,
        $DirectWriteSet: () => Oe,
        $Ed25519Signature: () => Pe,
        $EncodeSubmissionRequest: () => Me,
        $EntryFunctionId: () => Ne,
        $EntryFunctionPayload: () => De,
        $Event: () => Fe,
        $EventGuid: () => je,
        $GasEstimation: () => $e,
        $GenesisPayload: () => We,
        $GenesisPayload_WriteSetPayload: () => Ge,
        $GenesisTransaction: () => Ve,
        $HashValue: () => Ke,
        $HealthCheckSuccess: () => Je,
        $HexEncodedBytes: () => Ye,
        $IdentifierWrapper: () => Xe,
        $IndexResponse: () => Ze,
        $ModuleBundlePayload: () => Qe,
        $MoveAbility: () => et,
        $MoveFunction: () => tt,
        $MoveFunctionGenericTypeParam: () => rt,
        $MoveFunctionVisibility: () => nt,
        $MoveModule: () => it,
        $MoveModuleBytecode: () => st,
        $MoveModuleId: () => ot,
        $MoveResource: () => at,
        $MoveScriptBytecode: () => ct,
        $MoveStruct: () => ut,
        $MoveStructField: () => lt,
        $MoveStructGenericTypeParam: () => ht,
        $MoveStructTag: () => dt,
        $MoveStructValue: () => ft,
        $MoveType: () => pt,
        $MoveValue: () => yt,
        $MultiAgentSignature: () => gt,
        $MultiEd25519Signature: () => bt,
        $PendingTransaction: () => wt,
        $RoleType: () => mt,
        $ScriptPayload: () => vt,
        $ScriptWriteSet: () => Et,
        $StateCheckpointTransaction: () => At,
        $SubmitTransactionRequest: () => _t,
        $TableItemRequest: () => xt,
        $Transaction: () => Tt,
        $TransactionPayload: () => Ct,
        $TransactionPayload_EntryFunctionPayload: () => zt,
        $TransactionPayload_ModuleBundlePayload: () => Ht,
        $TransactionPayload_ScriptPayload: () => qt,
        $TransactionSignature: () => Ot,
        $TransactionSignature_Ed25519Signature: () => Pt,
        $TransactionSignature_MultiAgentSignature: () => Mt,
        $TransactionSignature_MultiEd25519Signature: () => Nt,
        $Transaction_BlockMetadataTransaction: () => St,
        $Transaction_GenesisTransaction: () => Ut,
        $Transaction_PendingTransaction: () => Rt,
        $Transaction_StateCheckpointTransaction: () => Bt,
        $Transaction_UserTransaction: () => kt,
        $TransactionsBatchSingleSubmissionFailure: () => Lt,
        $TransactionsBatchSubmissionResult: () => It,
        $U128: () => Dt,
        $U64: () => Ft,
        $UserTransaction: () => jt,
        $VersionedEvent: () => $t,
        $WriteModule: () => Wt,
        $WriteResource: () => Gt,
        $WriteSet: () => Vt,
        $WriteSetChange: () => Yt,
        $WriteSetChange_DeleteModule: () => Xt,
        $WriteSetChange_DeleteResource: () => Zt,
        $WriteSetChange_DeleteTableItem: () => Qt,
        $WriteSetChange_WriteModule: () => er,
        $WriteSetChange_WriteResource: () => tr,
        $WriteSetChange_WriteTableItem: () => rr,
        $WriteSetPayload: () => nr,
        $WriteSet_DirectWriteSet: () => Kt,
        $WriteSet_ScriptWriteSet: () => Jt,
        $WriteTableItem: () => ir,
        AccountsService: () => de,
        ApiError: () => F,
        AptosErrorCode: () => ve,
        AptosGeneratedClient: () => we,
        BaseHttpRequest: () => D,
        BlocksService: () => fe,
        CancelError: () => j,
        CancelablePromise: () => $,
        EventsService: () => pe,
        GeneralService: () => ye,
        MoveFunctionVisibility: () => Ee,
        OpenAPI: () => me,
        RoleType: () => Ae,
        TablesService: () => ge,
        TransactionsService: () => be,
      });
      var D = class {
          constructor(e) {
            this.config = e;
          }
        },
        F = class extends Error {
          constructor(e, t, r) {
            (super(r),
              (this.name = "ApiError"),
              (this.url = t.url),
              (this.status = t.status),
              (this.statusText = t.statusText),
              (this.body = t.body),
              (this.request = e));
          }
        },
        j = class extends Error {
          constructor(e) {
            (super(e), (this.name = "CancelError"));
          }
          get isCancelled() {
            return !0;
          }
        },
        $ = class {
          constructor(e) {
            ((this._isResolved = !1),
              (this._isRejected = !1),
              (this._isCancelled = !1),
              (this._cancelHandlers = []),
              (this._promise = new Promise((t, r) => {
                ((this._resolve = t), (this._reject = r));
                const n = (e) => {
                    var t;
                    this._isResolved ||
                      this._isRejected ||
                      this._isCancelled ||
                      ((this._isResolved = !0),
                      null == (t = this._resolve) || t.call(this, e));
                  },
                  i = (e) => {
                    var t;
                    this._isResolved ||
                      this._isRejected ||
                      this._isCancelled ||
                      ((this._isRejected = !0),
                      null == (t = this._reject) || t.call(this, e));
                  },
                  s = (e) => {
                    this._isResolved ||
                      this._isRejected ||
                      this._isCancelled ||
                      this._cancelHandlers.push(e);
                  };
                return (
                  Object.defineProperty(s, "isResolved", {
                    get: () => this._isResolved,
                  }),
                  Object.defineProperty(s, "isRejected", {
                    get: () => this._isRejected,
                  }),
                  Object.defineProperty(s, "isCancelled", {
                    get: () => this._isCancelled,
                  }),
                  e(n, i, s)
                );
              })));
          }
          then(e, t) {
            return this._promise.then(e, t);
          }
          catch(e) {
            return this._promise.catch(e);
          }
          finally(e) {
            return this._promise.finally(e);
          }
          cancel() {
            var e;
            if (!(this._isResolved || this._isRejected || this._isCancelled)) {
              if (((this._isCancelled = !0), this._cancelHandlers.length))
                try {
                  for (const e of this._cancelHandlers) e();
                } catch (t) {
                  return void console.warn("Cancellation threw an error", t);
                }
              ((this._cancelHandlers.length = 0),
                null == (e = this._reject) ||
                  e.call(this, new j("Request aborted")));
            }
          }
          get isCancelled() {
            return this._isCancelled;
          }
        };
      Symbol.toStringTag;
      var W = class {
          constructor(e) {
            (void 0 === e && (e = new Map()), (this.jar = e));
          }
          setCookie(e, t) {
            var r;
            const n = e.origin.toLowerCase();
            this.jar.has(n) || this.jar.set(n, []);
            const i = W.parse(t);
            this.jar.set(n, [
              ...((null == (r = this.jar.get(n))
                ? void 0
                : r.filter((e) => e.name !== i.name)) || []),
              i,
            ]);
          }
          getCookies(e) {
            var t;
            const r = e.origin.toLowerCase();
            return (
              (this.jar.get(r) &&
                (null == (t = this.jar.get(r))
                  ? void 0
                  : t.filter((e) => !e.expires || e.expires > new Date()))) ||
              []
            );
          }
          static parse(e) {
            if ("string" !== typeof e)
              throw new Error("argument str must be a string");
            const t = e.split(";").map((e) => e.trim());
            let r;
            if (!(t.length > 0)) throw new Error("Invalid cookie");
            {
              const [e, n] = t[0].split("=");
              if (!e || !n) throw new Error("Invalid cookie");
              r = { name: e, value: n };
            }
            return (
              t.slice(1).forEach((e) => {
                const [t, n] = e.split("=");
                if (!t.trim()) throw new Error("Invalid cookie");
                const i = t.toLowerCase(),
                  s =
                    "'" === (null == n ? void 0 : n.charAt(0)) ||
                    '"' === (null == n ? void 0 : n.charAt(0))
                      ? null == n
                        ? void 0
                        : n.slice(1, -1)
                      : n;
                if (
                  ("expires" === i && (r.expires = new Date(s)),
                  "path" === i && (r.path = s),
                  "samesite" === i)
                ) {
                  if ("Lax" !== s && "None" !== s && "Strict" !== s)
                    throw new Error("Invalid cookie SameSite value");
                  r.sameSite = s;
                }
                "secure" === i && (r.secure = !0);
              }),
              r
            );
          }
        },
        G = new W();
      (l.default.interceptors.response.use(
        (e) => (
          Array.isArray(e.headers["set-cookie"]) &&
            e.headers["set-cookie"].forEach((t) => {
              G.setCookie(new URL(e.config.url), t);
            }),
          e
        ),
      ),
        l.default.interceptors.request.use(function (e) {
          const t = G.getCookies(new URL(e.url));
          return (
            (null == t ? void 0 : t.length) > 0 &&
              e.headers &&
              (e.headers.cookie = t
                .map((e) => `${e.name}=${e.value}`)
                .join("; ")),
            e
          );
        }));
      var V = (e) => void 0 !== e && null !== e,
        K = (e) => "string" === typeof e,
        J = (e) => K(e) && "" !== e,
        Y = (e) =>
          "object" === typeof e &&
          "string" === typeof e.type &&
          "function" === typeof e.stream &&
          "function" === typeof e.arrayBuffer &&
          "function" === typeof e.constructor &&
          "string" === typeof e.constructor.name &&
          /^(Blob|File)$/.test(e.constructor.name) &&
          /^(Blob|File)$/.test(e[Symbol.toStringTag]),
        X = (e) => e instanceof h.default,
        Z = (e) => e >= 200 && e < 300,
        Q = (e) => btoa(e),
        ee = (e) => {
          const t = [],
            r = (e, r) => {
              t.push(
                `${encodeURIComponent(e)}=${encodeURIComponent(String(r))}`,
              );
            },
            n = (e, t) => {
              V(t) &&
                (Array.isArray(t)
                  ? t.forEach((t) => {
                      n(e, t);
                    })
                  : "object" === typeof t
                    ? Object.entries(t).forEach((t) => {
                        let [r, i] = t;
                        n(`${e}[${r}]`, i);
                      })
                    : r(e, t));
            };
          return (
            Object.entries(e).forEach((e) => {
              let [t, r] = e;
              n(t, r);
            }),
            t.length > 0 ? "?" + t.join("&") : ""
          );
        },
        te = (e, t) => {
          const r = e.ENCODE_PATH || encodeURI,
            n = t.url
              .replace("{api-version}", e.VERSION)
              .replace(/{(.*?)}/g, (e, n) => {
                var i;
                return (null == (i = t.path) ? void 0 : i.hasOwnProperty(n))
                  ? r(String(t.path[n]))
                  : e;
              }),
            i = `${e.BASE}${n}`;
          return t.query ? `${i}${ee(t.query)}` : i;
        },
        re = (e) => {
          if (e.formData) {
            const t = new h.default(),
              r = (e, r) => {
                K(r) || Y(r) ? t.append(e, r) : t.append(e, JSON.stringify(r));
              };
            return (
              Object.entries(e.formData)
                .filter((e) => {
                  let [t, r] = e;
                  return V(r);
                })
                .forEach((e) => {
                  let [t, n] = e;
                  Array.isArray(n) ? n.forEach((e) => r(t, e)) : r(t, n);
                }),
              t
            );
          }
        },
        ne = async (e, t) => ("function" === typeof t ? t(e) : t),
        ie = async (e, t, r) => {
          const n = await ne(t, e.TOKEN),
            i = await ne(t, e.USERNAME),
            s = await ne(t, e.PASSWORD),
            o = await ne(t, e.HEADERS),
            a =
              ("function" === typeof (null == r ? void 0 : r.getHeaders) &&
                (null == r ? void 0 : r.getHeaders())) ||
              {},
            c = Object.entries({
              Accept: "application/json",
              ...o,
              ...t.headers,
              ...a,
            })
              .filter((e) => {
                let [t, r] = e;
                return V(r);
              })
              .reduce((e, t) => {
                let [r, n] = t;
                return { ...e, [r]: String(n) };
              }, {});
          if ((J(n) && (c["Authorization"] = "Bearer " + n), J(i) && J(s))) {
            const e = Q(`${i}:${s}`);
            c["Authorization"] = "Basic " + e;
          }
          return (
            t.body &&
              (t.mediaType
                ? (c["Content-Type"] = t.mediaType)
                : Y(t.body)
                  ? (c["Content-Type"] =
                      t.body.type || "application/octet-stream")
                  : K(t.body)
                    ? (c["Content-Type"] = "text/plain")
                    : X(t.body) || (c["Content-Type"] = "application/json")),
            c
          );
        },
        se = (e) => {
          if (e.body) return e.body;
        },
        oe = async (e, t, r, n, i, s, o) => {
          const a = l.default.CancelToken.source(),
            c = {
              url: r,
              headers: s,
              data: null != n ? n : i,
              method: t.method,
              withCredentials: e.WITH_CREDENTIALS,
              cancelToken: a.token,
            },
            u = Object.keys(e.HEADERS || {})
              .filter((e) => "accept" === e.toLowerCase())
              .map((t) => e.HEADERS[t])
              .includes("application/x-bcs");
          (u && (c.responseType = "arraybuffer"),
            o(() => a.cancel("The user aborted a request.")));
          try {
            return await l.default.request(c);
          } catch (h) {
            const e = h;
            if (e.response) return e.response;
            throw h;
          }
        },
        ae = (e, t) => {
          if (t) {
            const r = e.headers[t];
            if (K(r)) return r;
          }
        },
        ce = (e) => {
          if (204 !== e.status) return e.data;
        },
        ue = (e, t) => {
          const r = {
              400: "Bad Request",
              401: "Unauthorized",
              403: "Forbidden",
              404: "Not Found",
              500: "Internal Server Error",
              502: "Bad Gateway",
              503: "Service Unavailable",
              ...e.errors,
            },
            n = r[t.status];
          if (n) throw new F(e, t, n);
          if (!t.ok) throw new F(e, t, "Generic Error");
        },
        le = (e, t) =>
          new $(async (r, n, i) => {
            try {
              const n = te(e, t),
                s = re(t),
                o = se(t),
                a = await ie(e, t, s);
              if (!i.isCancelled) {
                const c = await oe(e, t, n, o, s, a, i),
                  u = ce(c),
                  l = ae(c, t.responseHeader),
                  h = {
                    url: n,
                    ok: Z(c.status),
                    status: c.status,
                    statusText: c.statusText,
                    body: null != l ? l : u,
                  };
                (ue(t, h), r(h.body));
              }
            } catch (s) {
              n(s);
            }
          }),
        he = class extends D {
          constructor(e) {
            super(e);
          }
          request(e) {
            return le(this.config, e);
          }
        },
        de = class {
          constructor(e) {
            this.httpRequest = e;
          }
          getAccount(e, t) {
            return this.httpRequest.request({
              method: "GET",
              url: "/accounts/{address}",
              path: { address: e },
              query: { ledger_version: t },
            });
          }
          getAccountResources(e, t) {
            return this.httpRequest.request({
              method: "GET",
              url: "/accounts/{address}/resources",
              path: { address: e },
              query: { ledger_version: t },
            });
          }
          getAccountModules(e, t) {
            return this.httpRequest.request({
              method: "GET",
              url: "/accounts/{address}/modules",
              path: { address: e },
              query: { ledger_version: t },
            });
          }
          getAccountResource(e, t, r) {
            return this.httpRequest.request({
              method: "GET",
              url: "/accounts/{address}/resource/{resource_type}",
              path: { address: e, resource_type: t },
              query: { ledger_version: r },
            });
          }
          getAccountModule(e, t, r) {
            return this.httpRequest.request({
              method: "GET",
              url: "/accounts/{address}/module/{module_name}",
              path: { address: e, module_name: t },
              query: { ledger_version: r },
            });
          }
        },
        fe = class {
          constructor(e) {
            this.httpRequest = e;
          }
          getBlockByHeight(e, t) {
            return this.httpRequest.request({
              method: "GET",
              url: "/blocks/by_height/{block_height}",
              path: { block_height: e },
              query: { with_transactions: t },
            });
          }
          getBlockByVersion(e, t) {
            return this.httpRequest.request({
              method: "GET",
              url: "/blocks/by_version/{version}",
              path: { version: e },
              query: { with_transactions: t },
            });
          }
        },
        pe = class {
          constructor(e) {
            this.httpRequest = e;
          }
          getEventsByCreationNumber(e, t, r, n) {
            return this.httpRequest.request({
              method: "GET",
              url: "/accounts/{address}/events/{creation_number}",
              path: { address: e, creation_number: t },
              query: { start: r, limit: n },
            });
          }
          getEventsByEventHandle(e, t, r, n, i) {
            return this.httpRequest.request({
              method: "GET",
              url: "/accounts/{address}/events/{event_handle}/{field_name}",
              path: { address: e, event_handle: t, field_name: r },
              query: { start: n, limit: i },
            });
          }
        },
        ye = class {
          constructor(e) {
            this.httpRequest = e;
          }
          spec() {
            return this.httpRequest.request({ method: "GET", url: "/spec" });
          }
          healthy(e) {
            return this.httpRequest.request({
              method: "GET",
              url: "/-/healthy",
              query: { duration_secs: e },
            });
          }
          getLedgerInfo() {
            return this.httpRequest.request({ method: "GET", url: "/" });
          }
        },
        ge = class {
          constructor(e) {
            this.httpRequest = e;
          }
          getTableItem(e, t, r) {
            return this.httpRequest.request({
              method: "POST",
              url: "/tables/{table_handle}/item",
              path: { table_handle: e },
              query: { ledger_version: r },
              body: t,
              mediaType: "application/json",
            });
          }
        },
        be = class {
          constructor(e) {
            this.httpRequest = e;
          }
          getTransactions(e, t) {
            return this.httpRequest.request({
              method: "GET",
              url: "/transactions",
              query: { start: e, limit: t },
            });
          }
          submitTransaction(e) {
            return this.httpRequest.request({
              method: "POST",
              url: "/transactions",
              body: e,
              mediaType: "application/json",
            });
          }
          getTransactionByHash(e) {
            return this.httpRequest.request({
              method: "GET",
              url: "/transactions/by_hash/{txn_hash}",
              path: { txn_hash: e },
            });
          }
          getTransactionByVersion(e) {
            return this.httpRequest.request({
              method: "GET",
              url: "/transactions/by_version/{txn_version}",
              path: { txn_version: e },
            });
          }
          getAccountTransactions(e, t, r) {
            return this.httpRequest.request({
              method: "GET",
              url: "/accounts/{address}/transactions",
              path: { address: e },
              query: { start: t, limit: r },
            });
          }
          submitBatchTransactions(e) {
            return this.httpRequest.request({
              method: "POST",
              url: "/transactions/batch",
              body: e,
              mediaType: "application/json",
            });
          }
          simulateTransaction(e, t, r, n) {
            return this.httpRequest.request({
              method: "POST",
              url: "/transactions/simulate",
              query: {
                estimate_max_gas_amount: t,
                estimate_gas_unit_price: r,
                estimate_prioritized_gas_unit_price: n,
              },
              body: e,
              mediaType: "application/json",
            });
          }
          encodeSubmission(e) {
            return this.httpRequest.request({
              method: "POST",
              url: "/transactions/encode_submission",
              body: e,
              mediaType: "application/json",
            });
          }
          estimateGasPrice() {
            return this.httpRequest.request({
              method: "GET",
              url: "/estimate_gas_price",
            });
          }
        },
        we = class {
          constructor(e, t) {
            var r, n, i, s;
            (void 0 === t && (t = he),
              (this.request = new t({
                BASE: null != (r = null == e ? void 0 : e.BASE) ? r : "/v1",
                VERSION:
                  null != (n = null == e ? void 0 : e.VERSION) ? n : "1.2.0",
                WITH_CREDENTIALS:
                  null != (i = null == e ? void 0 : e.WITH_CREDENTIALS) && i,
                CREDENTIALS:
                  null != (s = null == e ? void 0 : e.CREDENTIALS)
                    ? s
                    : "include",
                TOKEN: null == e ? void 0 : e.TOKEN,
                USERNAME: null == e ? void 0 : e.USERNAME,
                PASSWORD: null == e ? void 0 : e.PASSWORD,
                HEADERS: null == e ? void 0 : e.HEADERS,
                ENCODE_PATH: null == e ? void 0 : e.ENCODE_PATH,
              })),
              (this.accounts = new de(this.request)),
              (this.blocks = new fe(this.request)),
              (this.events = new pe(this.request)),
              (this.general = new ye(this.request)),
              (this.tables = new ge(this.request)),
              (this.transactions = new be(this.request)));
          }
        },
        me = {
          BASE: "/v1",
          VERSION: "1.2.0",
          WITH_CREDENTIALS: !1,
          CREDENTIALS: "include",
          TOKEN: void 0,
          USERNAME: void 0,
          PASSWORD: void 0,
          HEADERS: void 0,
          ENCODE_PATH: void 0,
        },
        ve = ((e) => (
          (e["ACCOUNT_NOT_FOUND"] = "account_not_found"),
          (e["RESOURCE_NOT_FOUND"] = "resource_not_found"),
          (e["MODULE_NOT_FOUND"] = "module_not_found"),
          (e["STRUCT_FIELD_NOT_FOUND"] = "struct_field_not_found"),
          (e["VERSION_NOT_FOUND"] = "version_not_found"),
          (e["TRANSACTION_NOT_FOUND"] = "transaction_not_found"),
          (e["TABLE_ITEM_NOT_FOUND"] = "table_item_not_found"),
          (e["BLOCK_NOT_FOUND"] = "block_not_found"),
          (e["VERSION_PRUNED"] = "version_pruned"),
          (e["BLOCK_PRUNED"] = "block_pruned"),
          (e["INVALID_INPUT"] = "invalid_input"),
          (e["INVALID_TRANSACTION_UPDATE"] = "invalid_transaction_update"),
          (e["SEQUENCE_NUMBER_TOO_OLD"] = "sequence_number_too_old"),
          (e["VM_ERROR"] = "vm_error"),
          (e["HEALTH_CHECK_FAILED"] = "health_check_failed"),
          (e["MEMPOOL_IS_FULL"] = "mempool_is_full"),
          (e["INTERNAL_ERROR"] = "internal_error"),
          (e["WEB_FRAMEWORK_ERROR"] = "web_framework_error"),
          (e["BCS_NOT_SUPPORTED"] = "bcs_not_supported"),
          (e["API_DISABLED"] = "api_disabled"),
          e
        ))(ve || {}),
        Ee = ((e) => (
          (e["PRIVATE"] = "private"),
          (e["PUBLIC"] = "public"),
          (e["FRIEND"] = "friend"),
          e
        ))(Ee || {}),
        Ae = ((e) => (
          (e["VALIDATOR"] = "validator"),
          (e["FULL_NODE"] = "full_node"),
          e
        ))(Ae || {}),
        _e = {
          description:
            "Account data\n\n    A simplified version of the onchain Account resource",
          properties: {
            sequence_number: { type: "U64", isRequired: !0 },
            authentication_key: { type: "HexEncodedBytes", isRequired: !0 },
          },
        },
        xe = {
          type: "one-of",
          description:
            "Account signature scheme\n\n    The account signature scheme allows you to have two types of accounts:\n\n    1. A single Ed25519 key account, one private key\n    2. A k-of-n multi-Ed25519 key account, multiple private keys, such that k-of-n must sign a transaction.",
          contains: [
            { type: "AccountSignature_Ed25519Signature" },
            { type: "AccountSignature_MultiEd25519Signature" },
          ],
        },
        Te = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "Ed25519Signature" },
          ],
        },
        Se = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "MultiEd25519Signature" },
          ],
        },
        Ue = {
          type: "string",
          description:
            "A hex encoded 32 byte Aptos account address.\n\n    This is represented in a string as a 64 character hex string, sometimes\n    shortened by stripping leading 0s, and adding a 0x.\n\n    For example, address 0x0000000000000000000000000000000000000000000000000000000000000001 is represented as 0x1.\n    ",
          format: "hex",
        },
        Re = {
          description:
            "This is the generic struct we use for all API errors, it contains a string\n    message and an Aptos API specific error code.",
          properties: {
            message: {
              type: "string",
              description: "A message describing the error",
              isRequired: !0,
            },
            error_code: { type: "AptosErrorCode", isRequired: !0 },
            vm_error_code: {
              type: "number",
              description:
                "A code providing VM error details when submitting transactions to the VM",
              format: "uint64",
            },
          },
        },
        Be = { type: "Enum" },
        ke = {
          description:
            "A Block with or without transactions\n\n    This contains the information about a transactions along with\n    associated transactions if requested",
          properties: {
            block_height: { type: "U64", isRequired: !0 },
            block_hash: { type: "HashValue", isRequired: !0 },
            block_timestamp: { type: "U64", isRequired: !0 },
            first_version: { type: "U64", isRequired: !0 },
            last_version: { type: "U64", isRequired: !0 },
            transactions: { type: "array", contains: { type: "Transaction" } },
          },
        },
        Ce = {
          description:
            "A block metadata transaction\n\n    This signifies the beginning of a block, and contains information\n    about the specific block",
          properties: {
            version: { type: "U64", isRequired: !0 },
            hash: { type: "HashValue", isRequired: !0 },
            state_change_hash: { type: "HashValue", isRequired: !0 },
            event_root_hash: { type: "HashValue", isRequired: !0 },
            state_checkpoint_hash: { type: "HashValue" },
            gas_used: { type: "U64", isRequired: !0 },
            success: {
              type: "boolean",
              description: "Whether the transaction was successful",
              isRequired: !0,
            },
            vm_status: {
              type: "string",
              description:
                "The VM status of the transaction, can tell useful information in a failure",
              isRequired: !0,
            },
            accumulator_root_hash: { type: "HashValue", isRequired: !0 },
            changes: {
              type: "array",
              contains: { type: "WriteSetChange" },
              isRequired: !0,
            },
            id: { type: "HashValue", isRequired: !0 },
            epoch: { type: "U64", isRequired: !0 },
            round: { type: "U64", isRequired: !0 },
            events: {
              type: "array",
              contains: { type: "Event" },
              isRequired: !0,
            },
            previous_block_votes_bitvec: {
              type: "array",
              contains: { type: "number", format: "uint8" },
              isRequired: !0,
            },
            proposer: { type: "Address", isRequired: !0 },
            failed_proposer_indices: {
              type: "array",
              contains: { type: "number", format: "uint32" },
              isRequired: !0,
            },
            timestamp: { type: "U64", isRequired: !0 },
          },
        },
        ze = {
          description: "Decoded table data",
          properties: {
            key: {
              description: "Key of table in JSON",
              properties: {},
              isRequired: !0,
            },
            key_type: {
              type: "string",
              description: "Type of key",
              isRequired: !0,
            },
            value: {
              description: "Value of table in JSON",
              properties: {},
              isRequired: !0,
            },
            value_type: {
              type: "string",
              description: "Type of value",
              isRequired: !0,
            },
          },
        },
        He = {
          description: "Deleted table data",
          properties: {
            key: { description: "Deleted key", properties: {}, isRequired: !0 },
            key_type: {
              type: "string",
              description: "Deleted key type",
              isRequired: !0,
            },
          },
        },
        qe = {
          description: "Delete a module",
          properties: {
            address: { type: "Address", isRequired: !0 },
            state_key_hash: {
              type: "string",
              description: "State key hash",
              isRequired: !0,
            },
            module: { type: "MoveModuleId", isRequired: !0 },
          },
        },
        Le = {
          description: "Delete a resource",
          properties: {
            address: { type: "Address", isRequired: !0 },
            state_key_hash: {
              type: "string",
              description: "State key hash",
              isRequired: !0,
            },
            resource: { type: "MoveStructTag", isRequired: !0 },
          },
        },
        Ie = {
          description: "Delete a table item",
          properties: {
            state_key_hash: { type: "string", isRequired: !0 },
            handle: { type: "HexEncodedBytes", isRequired: !0 },
            key: { type: "HexEncodedBytes", isRequired: !0 },
            data: { type: "DeletedTableData" },
          },
        },
        Oe = {
          properties: {
            changes: {
              type: "array",
              contains: { type: "WriteSetChange" },
              isRequired: !0,
            },
            events: {
              type: "array",
              contains: { type: "Event" },
              isRequired: !0,
            },
          },
        },
        Pe = {
          description: "A single Ed25519 signature",
          properties: {
            public_key: { type: "HexEncodedBytes", isRequired: !0 },
            signature: { type: "HexEncodedBytes", isRequired: !0 },
          },
        },
        Me = {
          description: "Request to encode a submission",
          properties: {
            sender: { type: "Address", isRequired: !0 },
            sequence_number: { type: "U64", isRequired: !0 },
            max_gas_amount: { type: "U64", isRequired: !0 },
            gas_unit_price: { type: "U64", isRequired: !0 },
            expiration_timestamp_secs: { type: "U64", isRequired: !0 },
            payload: { type: "TransactionPayload", isRequired: !0 },
            secondary_signers: { type: "array", contains: { type: "Address" } },
          },
        },
        Ne = {
          type: "string",
          description:
            "Entry function id is string representation of a entry function defined on-chain.\n\n    Format: `{address}::{module name}::{function name}`\n\n    Both `module name` and `function name` are case-sensitive.\n    ",
        },
        De = {
          description: "Payload which runs a single entry function",
          properties: {
            function: { type: "EntryFunctionId", isRequired: !0 },
            type_arguments: {
              type: "array",
              contains: { type: "MoveType" },
              isRequired: !0,
            },
            arguments: {
              type: "array",
              contains: { properties: {} },
              isRequired: !0,
            },
          },
        },
        Fe = {
          description: "An event from a transaction",
          properties: {
            guid: { type: "EventGuid", isRequired: !0 },
            sequence_number: { type: "U64", isRequired: !0 },
            type: { type: "MoveType", isRequired: !0 },
            data: {
              description: "The JSON representation of the event",
              properties: {},
              isRequired: !0,
            },
          },
        },
        je = {
          properties: {
            creation_number: { type: "U64", isRequired: !0 },
            account_address: { type: "Address", isRequired: !0 },
          },
        },
        $e = {
          description: "Struct holding the outputs of the estimate gas API",
          properties: {
            deprioritized_gas_estimate: {
              type: "number",
              description: "The deprioritized estimate for the gas unit price",
              format: "uint64",
            },
            gas_estimate: {
              type: "number",
              description: "The current estimate for the gas unit price",
              isRequired: !0,
              format: "uint64",
            },
            prioritized_gas_estimate: {
              type: "number",
              description: "The prioritized estimate for the gas unit price",
              format: "uint64",
            },
          },
        },
        We = {
          type: "one-of",
          description: "The writeset payload of the Genesis transaction",
          contains: [{ type: "GenesisPayload_WriteSetPayload" }],
        },
        Ge = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "WriteSetPayload" },
          ],
        },
        Ve = {
          description:
            "The genesis transaction\n\n    This only occurs at the genesis transaction (version 0)",
          properties: {
            version: { type: "U64", isRequired: !0 },
            hash: { type: "HashValue", isRequired: !0 },
            state_change_hash: { type: "HashValue", isRequired: !0 },
            event_root_hash: { type: "HashValue", isRequired: !0 },
            state_checkpoint_hash: { type: "HashValue" },
            gas_used: { type: "U64", isRequired: !0 },
            success: {
              type: "boolean",
              description: "Whether the transaction was successful",
              isRequired: !0,
            },
            vm_status: {
              type: "string",
              description:
                "The VM status of the transaction, can tell useful information in a failure",
              isRequired: !0,
            },
            accumulator_root_hash: { type: "HashValue", isRequired: !0 },
            changes: {
              type: "array",
              contains: { type: "WriteSetChange" },
              isRequired: !0,
            },
            payload: { type: "GenesisPayload", isRequired: !0 },
            events: {
              type: "array",
              contains: { type: "Event" },
              isRequired: !0,
            },
          },
        },
        Ke = { type: "string" },
        Je = {
          description: "Representation of a successful healthcheck",
          properties: { message: { type: "string", isRequired: !0 } },
        },
        Ye = {
          type: "string",
          description:
            "All bytes (Vec<u8>) data is represented as hex-encoded string prefixed with `0x` and fulfilled with\n    two hex digits per byte.\n\n    Unlike the `Address` type, HexEncodedBytes will not trim any zeros.\n    ",
          format: "hex",
        },
        Xe = { type: "string" },
        Ze = {
          description:
            'The struct holding all data returned to the client by the\n    index endpoint (i.e., GET "/").  Only for responding in JSON',
          properties: {
            chain_id: {
              type: "number",
              description: "Chain ID of the current chain",
              isRequired: !0,
              format: "uint8",
            },
            epoch: { type: "U64", isRequired: !0 },
            ledger_version: { type: "U64", isRequired: !0 },
            oldest_ledger_version: { type: "U64", isRequired: !0 },
            ledger_timestamp: { type: "U64", isRequired: !0 },
            node_role: { type: "RoleType", isRequired: !0 },
            oldest_block_height: { type: "U64", isRequired: !0 },
            block_height: { type: "U64", isRequired: !0 },
            git_hash: { type: "string" },
          },
        },
        Qe = {
          properties: {
            modules: {
              type: "array",
              contains: { type: "MoveModuleBytecode" },
              isRequired: !0,
            },
          },
        },
        et = { type: "string" },
        tt = {
          description: "Move function",
          properties: {
            name: { type: "IdentifierWrapper", isRequired: !0 },
            visibility: { type: "MoveFunctionVisibility", isRequired: !0 },
            is_entry: {
              type: "boolean",
              description:
                "Whether the function can be called as an entry function directly in a transaction",
              isRequired: !0,
            },
            generic_type_params: {
              type: "array",
              contains: { type: "MoveFunctionGenericTypeParam" },
              isRequired: !0,
            },
            params: {
              type: "array",
              contains: { type: "MoveType" },
              isRequired: !0,
            },
            return: {
              type: "array",
              contains: { type: "MoveType" },
              isRequired: !0,
            },
          },
        },
        rt = {
          description: "Move function generic type param",
          properties: {
            constraints: {
              type: "array",
              contains: { type: "MoveAbility" },
              isRequired: !0,
            },
          },
        },
        nt = { type: "Enum" },
        it = {
          description: "A Move module",
          properties: {
            address: { type: "Address", isRequired: !0 },
            name: { type: "IdentifierWrapper", isRequired: !0 },
            friends: {
              type: "array",
              contains: { type: "MoveModuleId" },
              isRequired: !0,
            },
            exposed_functions: {
              type: "array",
              contains: { type: "MoveFunction" },
              isRequired: !0,
            },
            structs: {
              type: "array",
              contains: { type: "MoveStruct" },
              isRequired: !0,
            },
          },
        },
        st = {
          description: "Move module bytecode along with it's ABI",
          properties: {
            bytecode: { type: "HexEncodedBytes", isRequired: !0 },
            abi: { type: "MoveModule" },
          },
        },
        ot = {
          type: "string",
          description:
            "Move module id is a string representation of Move module.\n\n    Format: `{address}::{module name}`\n\n    `address` should be hex-encoded 32 byte account address that is prefixed with `0x`.\n\n    Module name is case-sensitive.\n    ",
        },
        at = {
          description: "A parsed Move resource",
          properties: {
            type: { type: "MoveStructTag", isRequired: !0 },
            data: { type: "MoveStructValue", isRequired: !0 },
          },
        },
        ct = {
          description: "Move script bytecode",
          properties: {
            bytecode: { type: "HexEncodedBytes", isRequired: !0 },
            abi: { type: "MoveFunction" },
          },
        },
        ut = {
          description: "A move struct",
          properties: {
            name: { type: "IdentifierWrapper", isRequired: !0 },
            is_native: {
              type: "boolean",
              description: "Whether the struct is a native struct of Move",
              isRequired: !0,
            },
            abilities: {
              type: "array",
              contains: { type: "MoveAbility" },
              isRequired: !0,
            },
            generic_type_params: {
              type: "array",
              contains: { type: "MoveStructGenericTypeParam" },
              isRequired: !0,
            },
            fields: {
              type: "array",
              contains: { type: "MoveStructField" },
              isRequired: !0,
            },
          },
        },
        lt = {
          description: "Move struct field",
          properties: {
            name: { type: "IdentifierWrapper", isRequired: !0 },
            type: { type: "MoveType", isRequired: !0 },
          },
        },
        ht = {
          description: "Move generic type param",
          properties: {
            constraints: {
              type: "array",
              contains: { type: "MoveAbility" },
              isRequired: !0,
            },
          },
        },
        dt = {
          type: "string",
          description:
            "String representation of a MoveStructTag (on-chain Move struct type). This exists so you\n    can specify MoveStructTags as path / query parameters, e.g. for get_events_by_event_handle.\n\n    It is a combination of:\n    1. `move_module_address`, `module_name` and `struct_name`, all joined by `::`\n    2. `struct generic type parameters` joined by `, `\n\n    Examples:\n     * `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>`\n     * `0x1::account::Account`\n\n    Note:\n    1. Empty chars should be ignored when comparing 2 struct tag ids.\n    2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).\n\n    See [doc](https://aptos.dev/concepts/basics-accounts) for more details.\n    ",
          pattern: "^0x[0-9a-zA-Z:_<>]+$",
        },
        ft = {
          description:
            'This is a JSON representation of some data within an account resource. More specifically,\n    it is a map of strings to arbitrary JSON values / objects, where the keys are top level\n    fields within the given resource.\n\n    To clarify, you might query for 0x1::account::Account and see the example data.\n\n    Move `bool` type value is serialized into `boolean`.\n\n    Move `u8` type value is serialized into `integer`.\n\n    Move `u64` and `u128` type value is serialized into `string`.\n\n    Move `address` type value (32 byte Aptos account address) is serialized into a HexEncodedBytes string.\n    For example:\n    - `0x1`\n    - `0x1668f6be25668c1a17cd8caf6b8d2f25`\n\n    Move `vector` type value is serialized into `array`, except `vector<u8>` which is serialized into a\n    HexEncodedBytes string with `0x` prefix.\n    For example:\n    - `vector<u64>{255, 255}` => `["255", "255"]`\n    - `vector<u8>{255, 255}` => `0xffff`\n\n    Move `struct` type value is serialized into `object` that looks like this (except some Move stdlib types, see the following section):\n    ```json\n    {\n        field1_name: field1_value,\n        field2_name: field2_value,\n        ......\n    }\n    ```\n\n    For example:\n    `{ "created": "0xa550c18", "role_id": "0" }`\n\n     **Special serialization for Move stdlib types**:\n    - [0x1::string::String](https://github.com/aptos-labs/aptos-core/blob/main/language/move-stdlib/docs/ascii.md)\n    is serialized into `string`. For example, struct value `0x1::string::String{bytes: b"Hello World!"}`\n    is serialized as `"Hello World!"` in JSON.\n    ',
          properties: {},
        },
        pt = {
          type: "string",
          description:
            "String representation of an on-chain Move type tag that is exposed in transaction payload.\n    Values:\n    - bool\n    - u8\n    - u64\n    - u128\n    - address\n    - signer\n    - vector: `vector<{non-reference MoveTypeId}>`\n    - struct: `{address}::{module_name}::{struct_name}::<{generic types}>`\n\n    Vector type value examples:\n    - `vector<u8>`\n    - `vector<vector<u64>>`\n    - `vector<0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>>`\n\n    Struct type value examples:\n    - `0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>\n    - `0x1::account::Account`\n\n    Note:\n    1. Empty chars should be ignored when comparing 2 struct tag ids.\n    2. When used in an URL path, should be encoded by url-encoding (AKA percent-encoding).\n    ",
          pattern:
            "^(bool|u8|u64|u128|address|signer|vector<.+>|0x[0-9a-zA-Z:_<, >]+)$",
        },
        yt = {
          type: "any-of",
          description: "An enum of the possible Move value types",
          contains: [
            { type: "number", format: "uint8" },
            { type: "U64" },
            { type: "U128" },
            { type: "boolean" },
            { type: "Address" },
            { type: "array", contains: { type: "MoveValue" } },
            { type: "HexEncodedBytes" },
            { type: "MoveStructValue" },
            { type: "string" },
          ],
        },
        gt = {
          description:
            "Multi agent signature for multi agent transactions\n\n    This allows you to have transactions across multiple accounts",
          properties: {
            sender: { type: "AccountSignature", isRequired: !0 },
            secondary_signer_addresses: {
              type: "array",
              contains: { type: "Address" },
              isRequired: !0,
            },
            secondary_signers: {
              type: "array",
              contains: { type: "AccountSignature" },
              isRequired: !0,
            },
          },
        },
        bt = {
          description:
            "A Ed25519 multi-sig signature\n\n    This allows k-of-n signing for a transaction",
          properties: {
            public_keys: {
              type: "array",
              contains: { type: "HexEncodedBytes" },
              isRequired: !0,
            },
            signatures: {
              type: "array",
              contains: { type: "HexEncodedBytes" },
              isRequired: !0,
            },
            threshold: {
              type: "number",
              description:
                "The number of signatures required for a successful transaction",
              isRequired: !0,
              format: "uint8",
            },
            bitmap: { type: "HexEncodedBytes", isRequired: !0 },
          },
        },
        wt = {
          description: "A transaction waiting in mempool",
          properties: {
            hash: { type: "HashValue", isRequired: !0 },
            sender: { type: "Address", isRequired: !0 },
            sequence_number: { type: "U64", isRequired: !0 },
            max_gas_amount: { type: "U64", isRequired: !0 },
            gas_unit_price: { type: "U64", isRequired: !0 },
            expiration_timestamp_secs: { type: "U64", isRequired: !0 },
            payload: { type: "TransactionPayload", isRequired: !0 },
            signature: { type: "TransactionSignature" },
          },
        },
        mt = { type: "Enum" },
        vt = {
          description:
            "Payload which runs a script that can run multiple functions",
          properties: {
            code: { type: "MoveScriptBytecode", isRequired: !0 },
            type_arguments: {
              type: "array",
              contains: { type: "MoveType" },
              isRequired: !0,
            },
            arguments: {
              type: "array",
              contains: { properties: {} },
              isRequired: !0,
            },
          },
        },
        Et = {
          properties: {
            execute_as: { type: "Address", isRequired: !0 },
            script: { type: "ScriptPayload", isRequired: !0 },
          },
        },
        At = {
          description: "A state checkpoint transaction",
          properties: {
            version: { type: "U64", isRequired: !0 },
            hash: { type: "HashValue", isRequired: !0 },
            state_change_hash: { type: "HashValue", isRequired: !0 },
            event_root_hash: { type: "HashValue", isRequired: !0 },
            state_checkpoint_hash: { type: "HashValue" },
            gas_used: { type: "U64", isRequired: !0 },
            success: {
              type: "boolean",
              description: "Whether the transaction was successful",
              isRequired: !0,
            },
            vm_status: {
              type: "string",
              description:
                "The VM status of the transaction, can tell useful information in a failure",
              isRequired: !0,
            },
            accumulator_root_hash: { type: "HashValue", isRequired: !0 },
            changes: {
              type: "array",
              contains: { type: "WriteSetChange" },
              isRequired: !0,
            },
            timestamp: { type: "U64", isRequired: !0 },
          },
        },
        _t = {
          description:
            "A request to submit a transaction\n\n    This requires a transaction and a signature of it",
          properties: {
            sender: { type: "Address", isRequired: !0 },
            sequence_number: { type: "U64", isRequired: !0 },
            max_gas_amount: { type: "U64", isRequired: !0 },
            gas_unit_price: { type: "U64", isRequired: !0 },
            expiration_timestamp_secs: { type: "U64", isRequired: !0 },
            payload: { type: "TransactionPayload", isRequired: !0 },
            signature: { type: "TransactionSignature", isRequired: !0 },
          },
        },
        xt = {
          description: "Table Item request for the GetTableItem API",
          properties: {
            key_type: { type: "MoveType", isRequired: !0 },
            value_type: { type: "MoveType", isRequired: !0 },
            key: {
              description: "The value of the table item's key",
              properties: {},
              isRequired: !0,
            },
          },
        },
        Tt = {
          type: "one-of",
          description: "Enum of the different types of transactions in Aptos",
          contains: [
            { type: "Transaction_PendingTransaction" },
            { type: "Transaction_UserTransaction" },
            { type: "Transaction_GenesisTransaction" },
            { type: "Transaction_BlockMetadataTransaction" },
            { type: "Transaction_StateCheckpointTransaction" },
          ],
        },
        St = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "BlockMetadataTransaction" },
          ],
        },
        Ut = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "GenesisTransaction" },
          ],
        },
        Rt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "PendingTransaction" },
          ],
        },
        Bt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "StateCheckpointTransaction" },
          ],
        },
        kt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "UserTransaction" },
          ],
        },
        Ct = {
          type: "one-of",
          description: "An enum of the possible transaction payloads",
          contains: [
            { type: "TransactionPayload_EntryFunctionPayload" },
            { type: "TransactionPayload_ScriptPayload" },
            { type: "TransactionPayload_ModuleBundlePayload" },
          ],
        },
        zt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "EntryFunctionPayload" },
          ],
        },
        Ht = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "ModuleBundlePayload" },
          ],
        },
        qt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "ScriptPayload" },
          ],
        },
        Lt = {
          description:
            "Information telling which batch submission transactions failed",
          properties: {
            error: { type: "AptosError", isRequired: !0 },
            transaction_index: {
              type: "number",
              description:
                "The index of which transaction failed, same as submission order",
              isRequired: !0,
              format: "uint64",
            },
          },
        },
        It = {
          description:
            "Batch transaction submission result\n\n    Tells which transactions failed",
          properties: {
            transaction_failures: {
              type: "array",
              contains: { type: "TransactionsBatchSingleSubmissionFailure" },
              isRequired: !0,
            },
          },
        },
        Ot = {
          type: "one-of",
          description:
            "An enum representing the different transaction signatures available",
          contains: [
            { type: "TransactionSignature_Ed25519Signature" },
            { type: "TransactionSignature_MultiEd25519Signature" },
            { type: "TransactionSignature_MultiAgentSignature" },
          ],
        },
        Pt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "Ed25519Signature" },
          ],
        },
        Mt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "MultiAgentSignature" },
          ],
        },
        Nt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "MultiEd25519Signature" },
          ],
        },
        Dt = {
          type: "string",
          description:
            "A string containing a 128-bit unsigned integer.\n\n    We represent u128 values as a string to ensure compatibility with languages such\n    as JavaScript that do not parse u64s in JSON natively.\n    ",
          format: "uint64",
        },
        Ft = {
          type: "string",
          description:
            "A string containing a 64-bit unsigned integer.\n\n    We represent u64 values as a string to ensure compatibility with languages such\n    as JavaScript that do not parse u64s in JSON natively.\n    ",
          format: "uint64",
        },
        jt = {
          description:
            "A transaction submitted by a user to change the state of the blockchain",
          properties: {
            version: { type: "U64", isRequired: !0 },
            hash: { type: "HashValue", isRequired: !0 },
            state_change_hash: { type: "HashValue", isRequired: !0 },
            event_root_hash: { type: "HashValue", isRequired: !0 },
            state_checkpoint_hash: { type: "HashValue" },
            gas_used: { type: "U64", isRequired: !0 },
            success: {
              type: "boolean",
              description: "Whether the transaction was successful",
              isRequired: !0,
            },
            vm_status: {
              type: "string",
              description:
                "The VM status of the transaction, can tell useful information in a failure",
              isRequired: !0,
            },
            accumulator_root_hash: { type: "HashValue", isRequired: !0 },
            changes: {
              type: "array",
              contains: { type: "WriteSetChange" },
              isRequired: !0,
            },
            sender: { type: "Address", isRequired: !0 },
            sequence_number: { type: "U64", isRequired: !0 },
            max_gas_amount: { type: "U64", isRequired: !0 },
            gas_unit_price: { type: "U64", isRequired: !0 },
            expiration_timestamp_secs: { type: "U64", isRequired: !0 },
            payload: { type: "TransactionPayload", isRequired: !0 },
            signature: { type: "TransactionSignature" },
            events: {
              type: "array",
              contains: { type: "Event" },
              isRequired: !0,
            },
            timestamp: { type: "U64", isRequired: !0 },
          },
        },
        $t = {
          description: "An event from a transaction with a version",
          properties: {
            version: { type: "U64", isRequired: !0 },
            guid: { type: "EventGuid", isRequired: !0 },
            sequence_number: { type: "U64", isRequired: !0 },
            type: { type: "MoveType", isRequired: !0 },
            data: {
              description: "The JSON representation of the event",
              properties: {},
              isRequired: !0,
            },
          },
        },
        Wt = {
          description: "Write a new module or update an existing one",
          properties: {
            address: { type: "Address", isRequired: !0 },
            state_key_hash: {
              type: "string",
              description: "State key hash",
              isRequired: !0,
            },
            data: { type: "MoveModuleBytecode", isRequired: !0 },
          },
        },
        Gt = {
          description: "Write a resource or update an existing one",
          properties: {
            address: { type: "Address", isRequired: !0 },
            state_key_hash: {
              type: "string",
              description: "State key hash",
              isRequired: !0,
            },
            data: { type: "MoveResource", isRequired: !0 },
          },
        },
        Vt = {
          type: "one-of",
          description: "The associated writeset with a payload",
          contains: [
            { type: "WriteSet_ScriptWriteSet" },
            { type: "WriteSet_DirectWriteSet" },
          ],
        },
        Kt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "DirectWriteSet" },
          ],
        },
        Jt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "ScriptWriteSet" },
          ],
        },
        Yt = {
          type: "one-of",
          description:
            "A final state change of a transaction on a resource or module",
          contains: [
            { type: "WriteSetChange_DeleteModule" },
            { type: "WriteSetChange_DeleteResource" },
            { type: "WriteSetChange_DeleteTableItem" },
            { type: "WriteSetChange_WriteModule" },
            { type: "WriteSetChange_WriteResource" },
            { type: "WriteSetChange_WriteTableItem" },
          ],
        },
        Xt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "DeleteModule" },
          ],
        },
        Zt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "DeleteResource" },
          ],
        },
        Qt = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "DeleteTableItem" },
          ],
        },
        er = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "WriteModule" },
          ],
        },
        tr = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "WriteResource" },
          ],
        },
        rr = {
          type: "all-of",
          contains: [
            { properties: { type: { type: "string", isRequired: !0 } } },
            { type: "WriteTableItem" },
          ],
        },
        nr = {
          description: "A writeset payload, used only for genesis",
          properties: { write_set: { type: "WriteSet", isRequired: !0 } },
        },
        ir = {
          description: "Change set to write a table item",
          properties: {
            state_key_hash: { type: "string", isRequired: !0 },
            handle: { type: "HexEncodedBytes", isRequired: !0 },
            key: { type: "HexEncodedBytes", isRequired: !0 },
            value: { type: "HexEncodedBytes", isRequired: !0 },
            data: { type: "DecodedTableData" },
          },
        },
        sr = (t.TxnBuilderTypes = {});
      y(sr, {
        AccountAddress: () => ar,
        AccountAuthenticator: () => Fr,
        AccountAuthenticatorEd25519: () => jr,
        AccountAuthenticatorMultiEd25519: () => $r,
        AuthenticationKey: () => Un,
        ChainId: () => gn,
        ChangeSet: () => cn,
        Ed25519PublicKey: () => Cr,
        Ed25519Signature: () => Hr,
        EntryFunction: () => sn,
        Identifier: () => Wr,
        Module: () => on,
        ModuleId: () => an,
        MultiAgentRawTransaction: () => dn,
        MultiEd25519PublicKey: () => Lr,
        MultiEd25519Signature: () => Or,
        RawTransaction: () => rn,
        RawTransactionWithData: () => hn,
        RotationProofChallenge: () => Rn,
        Script: () => nn,
        SignedTransaction: () => ln,
        StructTag: () => tn,
        Transaction: () => xn,
        TransactionArgument: () => bn,
        TransactionArgumentAddress: () => En,
        TransactionArgumentBool: () => _n,
        TransactionArgumentU128: () => vn,
        TransactionArgumentU64: () => mn,
        TransactionArgumentU8: () => wn,
        TransactionArgumentU8Vector: () => An,
        TransactionAuthenticator: () => Pr,
        TransactionAuthenticatorEd25519: () => Mr,
        TransactionAuthenticatorMultiAgent: () => Dr,
        TransactionAuthenticatorMultiEd25519: () => Nr,
        TransactionPayload: () => fn,
        TransactionPayloadEntryFunction: () => yn,
        TransactionPayloadScript: () => pn,
        TypeTag: () => Gr,
        TypeTagAddress: () => Xr,
        TypeTagBool: () => Vr,
        TypeTagSigner: () => Zr,
        TypeTagStruct: () => en,
        TypeTagU128: () => Yr,
        TypeTagU64: () => Jr,
        TypeTagU8: () => Kr,
        TypeTagVector: () => Qr,
        UserTransaction: () => Tn,
        WriteSet: () => un,
      });
      var or = class {
          constructor(e) {
            if (e.length !== or.LENGTH)
              throw new Error("Expected address of length 32");
            this.address = e;
          }
          static fromHex(e) {
            let t = T.ensure(e);
            t.noPrefix().length % 2 !== 0 && (t = new T("0" + t.noPrefix()));
            const r = t.toUint8Array();
            if (r.length > or.LENGTH)
              throw new Error(
                "Hex string is too long. Address's length is 32 bytes.",
              );
            if (r.length === or.LENGTH) return new or(r);
            const n = new Uint8Array(or.LENGTH);
            return (n.set(r, or.LENGTH - r.length), new or(n));
          }
          serialize(e) {
            e.serializeFixedBytes(this.address);
          }
          static deserialize(e) {
            return new or(e.deserializeFixedBytes(or.LENGTH));
          }
        },
        ar = or;
      ((ar.LENGTH = 32), (ar.CORE_CODE_ADDRESS = or.fromHex("0x1")));
      var cr = (t.BCS = {});
      y(cr, {
        Deserializer: () => gr,
        Serializer: () => pr,
        bcsSerializeBool: () => Sr,
        bcsSerializeBytes: () => Rr,
        bcsSerializeFixedBytes: () => Br,
        bcsSerializeStr: () => Ur,
        bcsSerializeU128: () => Tr,
        bcsSerializeU16: () => _r,
        bcsSerializeU32: () => xr,
        bcsSerializeU8: () => Ar,
        bcsSerializeUint64: () => Er,
        bcsToBytes: () => vr,
        deserializeVector: () => mr,
        serializeVector: () => br,
        serializeVectorWithFunc: () => wr,
      });
      var ur = 255,
        lr = 65535,
        hr = 2 ** 32 - 1,
        dr = BigInt(2 ** 64) - BigInt(1),
        fr = BigInt(2 ** 128) - BigInt(1),
        pr = class {
          constructor() {
            ((this.buffer = new ArrayBuffer(64)), (this.offset = 0));
          }
          ensureBufferWillHandleSize(e) {
            while (this.buffer.byteLength < this.offset + e) {
              const e = new ArrayBuffer(2 * this.buffer.byteLength);
              (new Uint8Array(e).set(new Uint8Array(this.buffer)),
                (this.buffer = e));
            }
          }
          serialize(e) {
            (this.ensureBufferWillHandleSize(e.length),
              new Uint8Array(this.buffer, this.offset).set(e),
              (this.offset += e.length));
          }
          serializeWithFunction(e, t, r) {
            this.ensureBufferWillHandleSize(t);
            const n = new DataView(this.buffer, this.offset);
            (e.apply(n, [0, r, !0]), (this.offset += t));
          }
          serializeStr(e) {
            const t = new TextEncoder();
            this.serializeBytes(t.encode(e));
          }
          serializeBytes(e) {
            (this.serializeU32AsUleb128(e.length), this.serialize(e));
          }
          serializeFixedBytes(e) {
            this.serialize(e);
          }
          serializeBool(e) {
            if ("boolean" !== typeof e)
              throw new Error("Value needs to be a boolean");
            const t = e ? 1 : 0;
            this.serialize(new Uint8Array([t]));
          }
          serializeU8(e) {
            this.serialize(new Uint8Array([e]));
          }
          serializeU16(e) {
            this.serializeWithFunction(DataView.prototype.setUint16, 2, e);
          }
          serializeU32(e) {
            this.serializeWithFunction(DataView.prototype.setUint32, 4, e);
          }
          serializeU64(e) {
            const t = BigInt(e.toString()) & BigInt(hr),
              r = BigInt(e.toString()) >> BigInt(32);
            (this.serializeU32(Number(t)), this.serializeU32(Number(r)));
          }
          serializeU128(e) {
            const t = BigInt(e.toString()) & dr,
              r = BigInt(e.toString()) >> BigInt(64);
            (this.serializeU64(t), this.serializeU64(r));
          }
          serializeU32AsUleb128(e) {
            let t = e;
            const r = [];
            while (t >>> 7 !== 0) (r.push((127 & t) | 128), (t >>>= 7));
            (r.push(t), this.serialize(new Uint8Array(r)));
          }
          getBytes() {
            return new Uint8Array(this.buffer).slice(0, this.offset);
          }
        };
      function yr(e, t, r) {
        return (n, i, s) => {
          const o = s.value;
          return (
            (s.value = function (n) {
              const i = BigInt(n.toString());
              if (i > BigInt(t.toString()) || i < BigInt(e.toString()))
                throw new Error(r || "Value is out of range");
              o.apply(this, [n]);
            }),
            s
          );
        };
      }
      (g([yr(0, ur)], pr.prototype, "serializeU8", 1),
        g([yr(0, lr)], pr.prototype, "serializeU16", 1),
        g([yr(0, hr)], pr.prototype, "serializeU32", 1),
        g([yr(BigInt(0), dr)], pr.prototype, "serializeU64", 1),
        g([yr(BigInt(0), fr)], pr.prototype, "serializeU128", 1),
        g([yr(0, hr)], pr.prototype, "serializeU32AsUleb128", 1));
      var gr = class {
        constructor(e) {
          ((this.buffer = new ArrayBuffer(e.length)),
            new Uint8Array(this.buffer).set(e, 0),
            (this.offset = 0));
        }
        read(e) {
          if (this.offset + e > this.buffer.byteLength)
            throw new Error("Reached to the end of buffer");
          const t = this.buffer.slice(this.offset, this.offset + e);
          return ((this.offset += e), t);
        }
        deserializeStr() {
          const e = this.deserializeBytes(),
            t = new TextDecoder();
          return t.decode(e);
        }
        deserializeBytes() {
          const e = this.deserializeUleb128AsU32();
          return new Uint8Array(this.read(e));
        }
        deserializeFixedBytes(e) {
          return new Uint8Array(this.read(e));
        }
        deserializeBool() {
          const e = new Uint8Array(this.read(1))[0];
          if (1 !== e && 0 !== e) throw new Error("Invalid boolean value");
          return 1 === e;
        }
        deserializeU8() {
          return new DataView(this.read(1)).getUint8(0);
        }
        deserializeU16() {
          return new DataView(this.read(2)).getUint16(0, !0);
        }
        deserializeU32() {
          return new DataView(this.read(4)).getUint32(0, !0);
        }
        deserializeU64() {
          const e = this.deserializeU32(),
            t = this.deserializeU32();
          return BigInt((BigInt(t) << BigInt(32)) | BigInt(e));
        }
        deserializeU128() {
          const e = this.deserializeU64(),
            t = this.deserializeU64();
          return BigInt((t << BigInt(64)) | e);
        }
        deserializeUleb128AsU32() {
          let e = BigInt(0),
            t = 0;
          while (e < hr) {
            const r = this.deserializeU8();
            if (((e |= BigInt(127 & r) << BigInt(t)), 0 === (128 & r))) break;
            t += 7;
          }
          if (e > hr)
            throw new Error(
              "Overflow while parsing uleb128-encoded uint32 value",
            );
          return Number(e);
        }
      };
      function br(e, t) {
        (t.serializeU32AsUleb128(e.length),
          e.forEach((e) => {
            e.serialize(t);
          }));
      }
      function wr(e, t) {
        const r = new pr();
        r.serializeU32AsUleb128(e.length);
        const n = r[t];
        return (
          e.forEach((e) => {
            n.call(r, e);
          }),
          r.getBytes()
        );
      }
      function mr(e, t) {
        const r = e.deserializeUleb128AsU32(),
          n = [];
        for (let i = 0; i < r; i += 1) n.push(t.deserialize(e));
        return n;
      }
      function vr(e) {
        const t = new pr();
        return (e.serialize(t), t.getBytes());
      }
      function Er(e) {
        const t = new pr();
        return (t.serializeU64(e), t.getBytes());
      }
      function Ar(e) {
        const t = new pr();
        return (t.serializeU8(e), t.getBytes());
      }
      function _r(e) {
        const t = new pr();
        return (t.serializeU16(e), t.getBytes());
      }
      function xr(e) {
        const t = new pr();
        return (t.serializeU32(e), t.getBytes());
      }
      function Tr(e) {
        const t = new pr();
        return (t.serializeU128(e), t.getBytes());
      }
      function Sr(e) {
        const t = new pr();
        return (t.serializeBool(e), t.getBytes());
      }
      function Ur(e) {
        const t = new pr();
        return (t.serializeStr(e), t.getBytes());
      }
      function Rr(e) {
        const t = new pr();
        return (t.serializeBytes(e), t.getBytes());
      }
      function Br(e) {
        const t = new pr();
        return (t.serializeFixedBytes(e), t.getBytes());
      }
      var kr = class {
          constructor(e) {
            if (e.length !== kr.LENGTH)
              throw new Error("Ed25519PublicKey length should be " + kr.LENGTH);
            this.value = e;
          }
          toBytes() {
            return this.value;
          }
          serialize(e) {
            e.serializeBytes(this.value);
          }
          static deserialize(e) {
            const t = e.deserializeBytes();
            return new kr(t);
          }
        },
        Cr = kr;
      Cr.LENGTH = 32;
      var zr = class {
          constructor(e) {
            if (((this.value = e), e.length !== zr.LENGTH))
              throw new Error("Ed25519Signature length should be " + zr.LENGTH);
          }
          serialize(e) {
            e.serializeBytes(this.value);
          }
          static deserialize(e) {
            const t = e.deserializeBytes();
            return new zr(t);
          }
        },
        Hr = zr;
      Hr.LENGTH = 64;
      var qr = 32,
        Lr = class {
          constructor(e, t) {
            if (((this.public_keys = e), (this.threshold = t), t > qr))
              throw new Error('"threshold" cannot be larger than ' + qr);
          }
          toBytes() {
            const e = new Uint8Array(this.public_keys.length * Cr.LENGTH + 1);
            return (
              this.public_keys.forEach((t, r) => {
                e.set(t.value, r * Cr.LENGTH);
              }),
              (e[this.public_keys.length * Cr.LENGTH] = this.threshold),
              e
            );
          }
          serialize(e) {
            e.serializeBytes(this.toBytes());
          }
          static deserialize(e) {
            const t = e.deserializeBytes(),
              r = t[t.length - 1],
              n = [];
            for (let i = 0; i < t.length - 1; i += Cr.LENGTH) {
              const e = i;
              n.push(new Cr(t.subarray(e, e + Cr.LENGTH)));
            }
            return new Lr(n, r);
          }
        },
        Ir = class {
          constructor(e, t) {
            if (
              ((this.signatures = e),
              (this.bitmap = t),
              t.length !== Ir.BITMAP_LEN)
            )
              throw new Error('"bitmap" length should be ' + Ir.BITMAP_LEN);
          }
          toBytes() {
            const e = new Uint8Array(
              this.signatures.length * Hr.LENGTH + Ir.BITMAP_LEN,
            );
            return (
              this.signatures.forEach((t, r) => {
                e.set(t.value, r * Hr.LENGTH);
              }),
              e.set(this.bitmap, this.signatures.length * Hr.LENGTH),
              e
            );
          }
          static createBitmap(e) {
            const t = 128,
              r = new Uint8Array([0, 0, 0, 0]),
              n = new Set();
            return (
              e.forEach((e) => {
                if (e >= qr) throw new Error(`Invalid bit value ${e}.`);
                if (n.has(e)) throw new Error("Duplicated bits detected.");
                n.add(e);
                const i = Math.floor(e / 8);
                let s = r[i];
                ((s |= t >> (e % 8)), (r[i] = s));
              }),
              r
            );
          }
          serialize(e) {
            e.serializeBytes(this.toBytes());
          }
          static deserialize(e) {
            const t = e.deserializeBytes(),
              r = t.subarray(t.length - 4),
              n = [];
            for (let i = 0; i < t.length - r.length; i += Hr.LENGTH) {
              const e = i;
              n.push(new Hr(t.subarray(e, e + Hr.LENGTH)));
            }
            return new Ir(n, r);
          }
        },
        Or = Ir;
      Or.BITMAP_LEN = 4;
      var Pr = class {
          static deserialize(e) {
            const t = e.deserializeUleb128AsU32();
            switch (t) {
              case 0:
                return Mr.load(e);
              case 1:
                return Nr.load(e);
              case 2:
                return Dr.load(e);
              default:
                throw new Error(
                  "Unknown variant index for TransactionAuthenticator: " + t,
                );
            }
          }
        },
        Mr = class extends Pr {
          constructor(e, t) {
            (super(), (this.public_key = e), (this.signature = t));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(0),
              this.public_key.serialize(e),
              this.signature.serialize(e));
          }
          static load(e) {
            const t = Cr.deserialize(e),
              r = Hr.deserialize(e);
            return new Mr(t, r);
          }
        },
        Nr = class extends Pr {
          constructor(e, t) {
            (super(), (this.public_key = e), (this.signature = t));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(1),
              this.public_key.serialize(e),
              this.signature.serialize(e));
          }
          static load(e) {
            const t = Lr.deserialize(e),
              r = Or.deserialize(e);
            return new Nr(t, r);
          }
        },
        Dr = class extends Pr {
          constructor(e, t, r) {
            (super(),
              (this.sender = e),
              (this.secondary_signer_addresses = t),
              (this.secondary_signers = r));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(2),
              this.sender.serialize(e),
              br(this.secondary_signer_addresses, e),
              br(this.secondary_signers, e));
          }
          static load(e) {
            const t = Fr.deserialize(e),
              r = mr(e, ar),
              n = mr(e, Fr);
            return new Dr(t, r, n);
          }
        },
        Fr = class {
          static deserialize(e) {
            const t = e.deserializeUleb128AsU32();
            switch (t) {
              case 0:
                return jr.load(e);
              case 1:
                return $r.load(e);
              default:
                throw new Error(
                  "Unknown variant index for AccountAuthenticator: " + t,
                );
            }
          }
        },
        jr = class extends Fr {
          constructor(e, t) {
            (super(), (this.public_key = e), (this.signature = t));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(0),
              this.public_key.serialize(e),
              this.signature.serialize(e));
          }
          static load(e) {
            const t = Cr.deserialize(e),
              r = Hr.deserialize(e);
            return new jr(t, r);
          }
        },
        $r = class extends Fr {
          constructor(e, t) {
            (super(), (this.public_key = e), (this.signature = t));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(1),
              this.public_key.serialize(e),
              this.signature.serialize(e));
          }
          static load(e) {
            const t = Lr.deserialize(e),
              r = Or.deserialize(e);
            return new $r(t, r);
          }
        },
        Wr = class {
          constructor(e) {
            this.value = e;
          }
          serialize(e) {
            e.serializeStr(this.value);
          }
          static deserialize(e) {
            const t = e.deserializeStr();
            return new Wr(t);
          }
        },
        Gr = class {
          static deserialize(e) {
            const t = e.deserializeUleb128AsU32();
            switch (t) {
              case 0:
                return Vr.load(e);
              case 1:
                return Kr.load(e);
              case 2:
                return Jr.load(e);
              case 3:
                return Yr.load(e);
              case 4:
                return Xr.load(e);
              case 5:
                return Zr.load(e);
              case 6:
                return Qr.load(e);
              case 7:
                return en.load(e);
              default:
                throw new Error("Unknown variant index for TypeTag: " + t);
            }
          }
        },
        Vr = class extends Gr {
          serialize(e) {
            e.serializeU32AsUleb128(0);
          }
          static load(e) {
            return new Vr();
          }
        },
        Kr = class extends Gr {
          serialize(e) {
            e.serializeU32AsUleb128(1);
          }
          static load(e) {
            return new Kr();
          }
        },
        Jr = class extends Gr {
          serialize(e) {
            e.serializeU32AsUleb128(2);
          }
          static load(e) {
            return new Jr();
          }
        },
        Yr = class extends Gr {
          serialize(e) {
            e.serializeU32AsUleb128(3);
          }
          static load(e) {
            return new Yr();
          }
        },
        Xr = class extends Gr {
          serialize(e) {
            e.serializeU32AsUleb128(4);
          }
          static load(e) {
            return new Xr();
          }
        },
        Zr = class extends Gr {
          serialize(e) {
            e.serializeU32AsUleb128(5);
          }
          static load(e) {
            return new Zr();
          }
        },
        Qr = class extends Gr {
          constructor(e) {
            (super(), (this.value = e));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(6), this.value.serialize(e));
          }
          static load(e) {
            const t = Gr.deserialize(e);
            return new Qr(t);
          }
        },
        en = class extends Gr {
          constructor(e) {
            (super(), (this.value = e));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(7), this.value.serialize(e));
          }
          static load(e) {
            const t = tn.deserialize(e);
            return new en(t);
          }
        },
        tn = class {
          constructor(e, t, r, n) {
            ((this.address = e),
              (this.module_name = t),
              (this.name = r),
              (this.type_args = n));
          }
          static fromString(e) {
            if (e.includes("<")) throw new Error("Not implemented");
            const t = e.split("::");
            if (3 !== t.length)
              throw new Error("Invalid struct tag string literal.");
            return new tn(ar.fromHex(t[0]), new Wr(t[1]), new Wr(t[2]), []);
          }
          serialize(e) {
            (this.address.serialize(e),
              this.module_name.serialize(e),
              this.name.serialize(e),
              br(this.type_args, e));
          }
          static deserialize(e) {
            const t = ar.deserialize(e),
              r = Wr.deserialize(e),
              n = Wr.deserialize(e),
              i = mr(e, Gr);
            return new tn(t, r, n, i);
          }
        },
        rn = class {
          constructor(e, t, r, n, i, s, o) {
            ((this.sender = e),
              (this.sequence_number = t),
              (this.payload = r),
              (this.max_gas_amount = n),
              (this.gas_unit_price = i),
              (this.expiration_timestamp_secs = s),
              (this.chain_id = o));
          }
          serialize(e) {
            (this.sender.serialize(e),
              e.serializeU64(this.sequence_number),
              this.payload.serialize(e),
              e.serializeU64(this.max_gas_amount),
              e.serializeU64(this.gas_unit_price),
              e.serializeU64(this.expiration_timestamp_secs),
              this.chain_id.serialize(e));
          }
          static deserialize(e) {
            const t = ar.deserialize(e),
              r = e.deserializeU64(),
              n = fn.deserialize(e),
              i = e.deserializeU64(),
              s = e.deserializeU64(),
              o = e.deserializeU64(),
              a = gn.deserialize(e);
            return new rn(t, r, n, i, s, o, a);
          }
        },
        nn = class {
          constructor(e, t, r) {
            ((this.code = e), (this.ty_args = t), (this.args = r));
          }
          serialize(e) {
            (e.serializeBytes(this.code),
              br(this.ty_args, e),
              br(this.args, e));
          }
          static deserialize(e) {
            const t = e.deserializeBytes(),
              r = mr(e, Gr),
              n = mr(e, bn);
            return new nn(t, r, n);
          }
        },
        sn = class {
          constructor(e, t, r, n) {
            ((this.module_name = e),
              (this.function_name = t),
              (this.ty_args = r),
              (this.args = n));
          }
          static natural(e, t, r, n) {
            return new sn(an.fromStr(e), new Wr(t), r, n);
          }
          static natual(e, t, r, n) {
            return sn.natural(e, t, r, n);
          }
          serialize(e) {
            (this.module_name.serialize(e),
              this.function_name.serialize(e),
              br(this.ty_args, e),
              e.serializeU32AsUleb128(this.args.length),
              this.args.forEach((t) => {
                e.serializeBytes(t);
              }));
          }
          static deserialize(e) {
            const t = an.deserialize(e),
              r = Wr.deserialize(e),
              n = mr(e, Gr),
              i = e.deserializeUleb128AsU32(),
              s = [];
            for (let a = 0; a < i; a += 1) s.push(e.deserializeBytes());
            const o = s;
            return new sn(t, r, n, o);
          }
        },
        on = class {
          constructor(e) {
            this.code = e;
          }
          serialize(e) {
            e.serializeBytes(this.code);
          }
          static deserialize(e) {
            const t = e.deserializeBytes();
            return new on(t);
          }
        },
        an = class {
          constructor(e, t) {
            ((this.address = e), (this.name = t));
          }
          static fromStr(e) {
            const t = e.split("::");
            if (2 !== t.length) throw new Error("Invalid module id.");
            return new an(ar.fromHex(new T(t[0])), new Wr(t[1]));
          }
          serialize(e) {
            (this.address.serialize(e), this.name.serialize(e));
          }
          static deserialize(e) {
            const t = ar.deserialize(e),
              r = Wr.deserialize(e);
            return new an(t, r);
          }
        },
        cn = class {
          serialize(e) {
            throw new Error("Not implemented.");
          }
          static deserialize(e) {
            throw new Error("Not implemented.");
          }
        },
        un = class {
          serialize(e) {
            throw new Error("Not implmented.");
          }
          static deserialize(e) {
            throw new Error("Not implmented.");
          }
        },
        ln = class {
          constructor(e, t) {
            ((this.raw_txn = e), (this.authenticator = t));
          }
          serialize(e) {
            (this.raw_txn.serialize(e), this.authenticator.serialize(e));
          }
          static deserialize(e) {
            const t = rn.deserialize(e),
              r = Pr.deserialize(e);
            return new ln(t, r);
          }
        },
        hn = class {
          static deserialize(e) {
            const t = e.deserializeUleb128AsU32();
            switch (t) {
              case 0:
                return dn.load(e);
              default:
                throw new Error(
                  "Unknown variant index for RawTransactionWithData: " + t,
                );
            }
          }
        },
        dn = class extends hn {
          constructor(e, t) {
            (super(),
              (this.raw_txn = e),
              (this.secondary_signer_addresses = t));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(0),
              this.raw_txn.serialize(e),
              br(this.secondary_signer_addresses, e));
          }
          static load(e) {
            const t = rn.deserialize(e),
              r = mr(e, ar);
            return new dn(t, r);
          }
        },
        fn = class {
          static deserialize(e) {
            const t = e.deserializeUleb128AsU32();
            switch (t) {
              case 0:
                return pn.load(e);
              case 2:
                return yn.load(e);
              default:
                throw new Error(
                  "Unknown variant index for TransactionPayload: " + t,
                );
            }
          }
        },
        pn = class extends fn {
          constructor(e) {
            (super(), (this.value = e));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(0), this.value.serialize(e));
          }
          static load(e) {
            const t = nn.deserialize(e);
            return new pn(t);
          }
        },
        yn = class extends fn {
          constructor(e) {
            (super(), (this.value = e));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(2), this.value.serialize(e));
          }
          static load(e) {
            const t = sn.deserialize(e);
            return new yn(t);
          }
        },
        gn = class {
          constructor(e) {
            this.value = e;
          }
          serialize(e) {
            e.serializeU8(this.value);
          }
          static deserialize(e) {
            const t = e.deserializeU8();
            return new gn(t);
          }
        },
        bn = class {
          static deserialize(e) {
            const t = e.deserializeUleb128AsU32();
            switch (t) {
              case 0:
                return wn.load(e);
              case 1:
                return mn.load(e);
              case 2:
                return vn.load(e);
              case 3:
                return En.load(e);
              case 4:
                return An.load(e);
              case 5:
                return _n.load(e);
              default:
                throw new Error(
                  "Unknown variant index for TransactionArgument: " + t,
                );
            }
          }
        },
        wn = class extends bn {
          constructor(e) {
            (super(), (this.value = e));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(0), e.serializeU8(this.value));
          }
          static load(e) {
            const t = e.deserializeU8();
            return new wn(t);
          }
        },
        mn = class extends bn {
          constructor(e) {
            (super(), (this.value = e));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(1), e.serializeU64(this.value));
          }
          static load(e) {
            const t = e.deserializeU64();
            return new mn(t);
          }
        },
        vn = class extends bn {
          constructor(e) {
            (super(), (this.value = e));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(2), e.serializeU128(this.value));
          }
          static load(e) {
            const t = e.deserializeU128();
            return new vn(t);
          }
        },
        En = class extends bn {
          constructor(e) {
            (super(), (this.value = e));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(3), this.value.serialize(e));
          }
          static load(e) {
            const t = ar.deserialize(e);
            return new En(t);
          }
        },
        An = class extends bn {
          constructor(e) {
            (super(), (this.value = e));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(4), e.serializeBytes(this.value));
          }
          static load(e) {
            const t = e.deserializeBytes();
            return new An(t);
          }
        },
        _n = class extends bn {
          constructor(e) {
            (super(), (this.value = e));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(5), e.serializeBool(this.value));
          }
          static load(e) {
            const t = e.deserializeBool();
            return new _n(t);
          }
        },
        xn = class {
          getHashSalt() {
            const e = s.sha3_256.create();
            return (e.update("APTOS::Transaction"), e.digest());
          }
          static deserialize(e) {
            const t = e.deserializeUleb128AsU32();
            switch (t) {
              case 0:
                return Tn.load(e);
              default:
                throw new Error("Unknown variant index for Transaction: " + t);
            }
          }
        },
        Tn = class extends xn {
          constructor(e) {
            (super(), (this.value = e));
          }
          hash() {
            const e = s.sha3_256.create();
            return (
              e.update(this.getHashSalt()),
              e.update(vr(this)),
              e.digest()
            );
          }
          serialize(e) {
            (e.serializeU32AsUleb128(0), this.value.serialize(e));
          }
          static load(e) {
            return new Tn(ln.deserialize(e));
          }
        },
        Sn = class {
          constructor(e) {
            if (e.length !== Sn.LENGTH)
              throw new Error("Expected a byte array of length 32");
            this.bytes = e;
          }
          static fromMultiEd25519PublicKey(e) {
            const t = e.toBytes(),
              r = new Uint8Array(t.length + 1);
            (r.set(t), r.set([Sn.MULTI_ED25519_SCHEME], t.length));
            const n = s.sha3_256.create();
            return (n.update(r), new Sn(n.digest()));
          }
          derivedAddress() {
            return T.fromUint8Array(this.bytes);
          }
        },
        Un = Sn;
      ((Un.LENGTH = 32), (Un.MULTI_ED25519_SCHEME = 1));
      var Rn = class {
          constructor(e, t, r, n, i, s, o) {
            ((this.accountAddress = e),
              (this.moduleName = t),
              (this.structName = r),
              (this.sequenceNumber = n),
              (this.originator = i),
              (this.currentAuthKey = s),
              (this.newPublicKey = o));
          }
          serialize(e) {
            (this.accountAddress.serialize(e),
              e.serializeStr(this.moduleName),
              e.serializeStr(this.structName),
              e.serializeU64(this.sequenceNumber),
              this.originator.serialize(e),
              this.currentAuthKey.serialize(e),
              e.serializeBytes(this.newPublicKey));
          }
        },
        Bn = class {
          constructor(e) {
            this.name = e;
          }
          serialize(e) {
            e.serializeStr(this.name);
          }
          static deserialize(e) {
            const t = e.deserializeStr();
            return new Bn(t);
          }
        },
        kn = class {
          constructor(e, t) {
            ((this.name = e), (this.type_tag = t));
          }
          serialize(e) {
            (e.serializeStr(this.name), this.type_tag.serialize(e));
          }
          static deserialize(e) {
            const t = e.deserializeStr(),
              r = Gr.deserialize(e);
            return new kn(t, r);
          }
        },
        Cn = class {
          static deserialize(e) {
            const t = e.deserializeUleb128AsU32();
            switch (t) {
              case 0:
                return zn.load(e);
              case 1:
                return Hn.load(e);
              default:
                throw new Error(
                  "Unknown variant index for TransactionPayload: " + t,
                );
            }
          }
        },
        zn = class extends Cn {
          constructor(e, t, r, n, i) {
            (super(),
              (this.name = e),
              (this.doc = t),
              (this.code = r),
              (this.ty_args = n),
              (this.args = i));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(0),
              e.serializeStr(this.name),
              e.serializeStr(this.doc),
              e.serializeBytes(this.code),
              br(this.ty_args, e),
              br(this.args, e));
          }
          static load(e) {
            const t = e.deserializeStr(),
              r = e.deserializeStr(),
              n = e.deserializeBytes(),
              i = mr(e, Bn),
              s = mr(e, kn);
            return new zn(t, r, n, i, s);
          }
        },
        Hn = class extends Cn {
          constructor(e, t, r, n, i) {
            (super(),
              (this.name = e),
              (this.module_name = t),
              (this.doc = r),
              (this.ty_args = n),
              (this.args = i));
          }
          serialize(e) {
            (e.serializeU32AsUleb128(1),
              e.serializeStr(this.name),
              this.module_name.serialize(e),
              e.serializeStr(this.doc),
              br(this.ty_args, e),
              br(this.args, e));
          }
          static load(e) {
            const t = e.deserializeStr(),
              r = an.deserialize(e),
              n = e.deserializeStr(),
              i = mr(e, Bn),
              s = mr(e, kn);
            return new Hn(t, r, n, i, s);
          }
        };
      function qn(e, t, r) {
        if (!(null == t ? void 0 : t.includes(typeof e)))
          throw new Error(
            r ||
              `Invalid arg: ${e} type should be ${t instanceof Array ? t.join(" or ") : t}`,
          );
      }
      function Ln(e) {
        throw new Error(e);
      }
      function In(e) {
        return !!e.match(/\s/);
      }
      function On(e) {
        return !!e.match(/[_A-Za-z0-9]/g);
      }
      function Pn(e, t) {
        const r = e[t];
        if (":" === r) {
          if ("::" === e.slice(t, t + 2)) return [["COLON", "::"], 2];
          Ln("Unrecognized token.");
        } else {
          if ("<" === r) return [["LT", "<"], 1];
          if (">" === r) return [["GT", ">"], 1];
          if ("," === r) return [["COMMA", ","], 1];
          if (In(r)) {
            let r = "";
            for (let n = t; n < e.length; n += 1) {
              const t = e[n];
              if (!In(t)) break;
              r = `${r}${t}`;
            }
            return [["SPACE", r], r.length];
          }
          if (On(r)) {
            let r = "";
            for (let n = t; n < e.length; n += 1) {
              const t = e[n];
              if (!On(t)) break;
              r = `${r}${t}`;
            }
            return [["IDENT", r], r.length];
          }
        }
        throw new Error("Unrecognized token.");
      }
      function Mn(e) {
        let t = 0;
        const r = [];
        while (t < e.length) {
          const [n, i] = Pn(e, t);
          ("SPACE" !== n[0] && r.push(n), (t += i));
        }
        return r;
      }
      var Nn = class {
        constructor(e) {
          this.tokens = Mn(e);
        }
        consume(e) {
          const t = this.tokens.shift();
          (t && t[1] === e) || Ln("Invalid type tag.");
        }
        parseCommaList(e, t) {
          const r = [];
          this.tokens.length <= 0 && Ln("Invalid type tag.");
          while (this.tokens[0][1] !== e) {
            if (
              (r.push(this.parseTypeTag()),
              this.tokens.length > 0 && this.tokens[0][1] === e)
            )
              break;
            if (
              (this.consume(","),
              this.tokens.length > 0 && this.tokens[0][1] === e && t)
            )
              break;
            this.tokens.length <= 0 && Ln("Invalid type tag.");
          }
          return r;
        }
        parseTypeTag() {
          0 === this.tokens.length && Ln("Invalid type tag.");
          const [e, t] = this.tokens.shift();
          if ("u8" === t) return new Kr();
          if ("u64" === t) return new Jr();
          if ("u128" === t) return new Yr();
          if ("bool" === t) return new Vr();
          if ("address" === t) return new Xr();
          if ("vector" === t) {
            this.consume("<");
            const e = this.parseTypeTag();
            return (this.consume(">"), new Qr(e));
          }
          if ("IDENT" === e && (t.startsWith("0x") || t.startsWith("0X"))) {
            const e = t;
            this.consume("::");
            const [r, n] = this.tokens.shift();
            ("IDENT" !== r && Ln("Invalid type tag."), this.consume("::"));
            const [i, s] = this.tokens.shift();
            "IDENT" !== i && Ln("Invalid type tag.");
            let o = [];
            this.tokens.length > 0 &&
              "<" === this.tokens[0][1] &&
              (this.consume("<"),
              (o = this.parseCommaList(">", !0)),
              this.consume(">"));
            const a = new tn(ar.fromHex(e), new Wr(n), new Wr(s), o);
            return new en(a);
          }
          throw new Error("Invalid type tag.");
        }
      };
      function Dn(e) {
        if ((qn(e, ["boolean", "string"]), "boolean" === typeof e)) return e;
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        throw new Error("Invalid boolean string.");
      }
      function Fn(e) {
        if ((qn(e, ["number", "string"]), "number" === typeof e)) return e;
        const t = Number.parseInt(e, 10);
        if (Number.isNaN(t)) throw new Error("Invalid number string.");
        return t;
      }
      function jn(e) {
        return (qn(e, ["number", "bigint", "string"]), BigInt(e));
      }
      function $n(e, t, r) {
        if (t instanceof Vr) r.serializeBool(Dn(e));
        else if (t instanceof Kr) r.serializeU8(Fn(e));
        else if (t instanceof Jr) r.serializeU64(jn(e));
        else if (t instanceof Yr) r.serializeU128(jn(e));
        else {
          if (!(t instanceof Xr)) {
            if (t instanceof Qr) {
              if (t.value instanceof Kr) {
                if (e instanceof Uint8Array) return void r.serializeBytes(e);
                if ("string" === typeof e) return void r.serializeStr(e);
              }
              if (!(e instanceof Array))
                throw new Error("Invalid vector args.");
              return (
                r.serializeU32AsUleb128(e.length),
                void e.forEach((e) => $n(e, t.value, r))
              );
            }
            if (t instanceof en) {
              const { address: n, module_name: i, name: s } = t.value;
              if (
                "0x1::string::String" !==
                `${T.fromUint8Array(n.address).toShortString()}::${i.value}::${s.value}`
              )
                throw new Error(
                  "The only supported struct arg is of type 0x1::string::String",
                );
              return (qn(e, ["string"]), void r.serializeStr(e));
            }
            throw new Error("Unsupported arg type.");
          }
          {
            let t;
            if ("string" === typeof e || e instanceof T) t = ar.fromHex(e);
            else {
              if (!(e instanceof ar))
                throw new Error("Invalid account address.");
              t = e;
            }
            t.serialize(r);
          }
        }
      }
      function Wn(e, t) {
        if (t instanceof Vr) return new _n(Dn(e));
        if (t instanceof Kr) return new wn(Fn(e));
        if (t instanceof Jr) return new mn(jn(e));
        if (t instanceof Yr) return new vn(jn(e));
        if (t instanceof Xr) {
          let t;
          if ("string" === typeof e || e instanceof T) t = ar.fromHex(e);
          else {
            if (!(e instanceof ar)) throw new Error("Invalid account address.");
            t = e;
          }
          return new En(t);
        }
        if (t instanceof Qr && t.value instanceof Kr) {
          if (!(e instanceof Uint8Array))
            throw new Error(e + " should be an instance of Uint8Array");
          return new An(e);
        }
        throw new Error("Unknown type for TransactionArgument.");
      }
      t.TypeTagParser = Nn;
      var Gn = "APTOS::RawTransaction",
        Vn = "APTOS::RawTransactionWithData",
        Kn = class {
          constructor(e, t) {
            ((this.rawTxnBuilder = t), (this.signingFunction = e));
          }
          build(e, t, r) {
            if (!this.rawTxnBuilder)
              throw new Error("this.rawTxnBuilder doesn't exist.");
            return this.rawTxnBuilder.build(e, t, r);
          }
          static getSigningMessage(e) {
            const t = s.sha3_256.create();
            if (e instanceof rn) t.update(Gn);
            else {
              if (!(e instanceof dn))
                throw new Error("Unknown transaction type.");
              t.update(Vn);
            }
            const r = t.digest(),
              n = vr(e),
              i = new Uint8Array(r.length + n.length);
            return (i.set(r), i.set(n, r.length), i);
          }
        };
      t.TransactionBuilder = Kn;
      var Jn = class extends Kn {
        constructor(e, t, r) {
          (super(e, r), (this.publicKey = t));
        }
        rawToSigned(e) {
          const t = Kn.getSigningMessage(e),
            r = this.signingFunction(t),
            n = new Mr(new Cr(this.publicKey), r);
          return new ln(e, n);
        }
        sign(e) {
          return vr(this.rawToSigned(e));
        }
      };
      t.TransactionBuilderEd25519 = Jn;
      var Yn = class extends Kn {
        constructor(e, t) {
          (super(e), (this.publicKey = t));
        }
        rawToSigned(e) {
          const t = Kn.getSigningMessage(e),
            r = this.signingFunction(t),
            n = new Nr(this.publicKey, r);
          return new ln(e, n);
        }
        sign(e) {
          return vr(this.rawToSigned(e));
        }
      };
      t.TransactionBuilderMultiEd25519 = Yn;
      var Xn = class {
        constructor(e, t) {
          ((this.abiMap = new Map()),
            e.forEach((e) => {
              const t = new gr(e),
                r = Cn.deserialize(t);
              let n;
              if (r instanceof Hn) {
                const e = r,
                  { address: t, name: i } = e.module_name;
                n = `${T.fromUint8Array(t.address).toShortString()}::${i.value}::${e.name}`;
              } else {
                const e = r;
                n = e.name;
              }
              if (this.abiMap.has(n))
                throw new Error("Found conflicting ABI interfaces");
              this.abiMap.set(n, r);
            }),
            (this.builderConfig = {
              maxGasAmount: BigInt(B),
              expSecFromNow: k,
              ...t,
            }));
        }
        static toBCSArgs(e, t) {
          if (e.length !== t.length)
            throw new Error("Wrong number of args provided.");
          return t.map((t, r) => {
            const n = new pr();
            return ($n(t, e[r].type_tag, n), n.getBytes());
          });
        }
        static toTransactionArguments(e, t) {
          if (e.length !== t.length)
            throw new Error("Wrong number of args provided.");
          return t.map((t, r) => Wn(t, e[r].type_tag));
        }
        setSequenceNumber(e) {
          this.builderConfig.sequenceNumber = BigInt(e);
        }
        buildTransactionPayload(e, t, r) {
          const n = t.map((e) => new Nn(e).parseTypeTag());
          let i;
          if (!this.abiMap.has(e))
            throw new Error("Cannot find function: " + e);
          const s = this.abiMap.get(e);
          if (s instanceof Hn) {
            const e = s,
              t = Xn.toBCSArgs(e.args, r);
            i = new yn(new sn(e.module_name, new Wr(e.name), n, t));
          } else {
            if (!(s instanceof zn)) throw new Error("Unknown ABI format.");
            {
              const e = s,
                t = Xn.toTransactionArguments(e.args, r);
              i = new pn(new nn(e.code, n, t));
            }
          }
          return i;
        }
        build(e, t, r) {
          const {
            sender: n,
            sequenceNumber: i,
            gasUnitPrice: s,
            maxGasAmount: o,
            expSecFromNow: a,
            chainId: c,
          } = this.builderConfig;
          if (!s) throw new Error("No gasUnitPrice provided.");
          const u = n instanceof ar ? n : ar.fromHex(n),
            l = BigInt(Math.floor(Date.now() / 1e3) + Number(a)),
            h = this.buildTransactionPayload(e, t, r);
          if (h)
            return new rn(
              u,
              BigInt(i),
              h,
              BigInt(o),
              BigInt(s),
              l,
              new gn(Number(c)),
            );
          throw new Error("Invalid ABI.");
        }
      };
      t.TransactionBuilderABI = Xn;
      var Zn = class {
        constructor(e, t) {
          ((this.aptosClient = e), (this.builderConfig = t));
        }
        async fetchABI(e) {
          const t = await this.aptosClient.getAccountModules(e),
            r = t
              .map((e) => e.abi)
              .flatMap((e) =>
                e.exposed_functions
                  .filter((e) => e.is_entry)
                  .map((t) => ({
                    fullName: `${e.address}::${e.name}::${t.name}`,
                    ...t,
                  })),
              ),
            n = new Map();
          return (
            r.forEach((e) => {
              n.set(e.fullName, e);
            }),
            n
          );
        }
        async build(e, t, r) {
          const n = (e) => e.replace(/^0[xX]0*/g, "0x");
          e = n(e);
          const i = e.split("::");
          if (3 !== i.length)
            throw new Error(
              "'func' needs to be a fully qualified function name in format <address>::<module>::<function>, e.g. 0x1::coins::transfer",
            );
          const [s, o] = e.split("::"),
            a = await this.fetchABI(s);
          if (!a.has(e)) throw new Error(e + " doesn't exist.");
          const c = a.get(e),
            u = c.params.filter((e) => "signer" !== e && "&signer" !== e),
            l = u.map((e, t) => new kn("var" + t, new Nn(e).parseTypeTag())),
            h = new Hn(
              c.name,
              an.fromStr(`${s}::${o}`),
              "",
              c.generic_type_params.map((e, t) => new Bn("" + t)),
              l,
            ),
            { sender: d, ...f } = this.builderConfig,
            p = d instanceof ar ? T.fromUint8Array(d.address) : d,
            [{ sequence_number: y }, g, { gas_estimate: b }] =
              await Promise.all([
                (null == f ? void 0 : f.sequenceNumber)
                  ? Promise.resolve({
                      sequence_number: null == f ? void 0 : f.sequenceNumber,
                    })
                  : this.aptosClient.getAccount(p),
                (null == f ? void 0 : f.chainId)
                  ? Promise.resolve(null == f ? void 0 : f.chainId)
                  : this.aptosClient.getChainId(),
                (null == f ? void 0 : f.gasUnitPrice)
                  ? Promise.resolve({
                      gas_estimate: null == f ? void 0 : f.gasUnitPrice,
                    })
                  : this.aptosClient.estimateGasPrice(),
              ]),
            w = new Xn([vr(h)], {
              sender: d,
              sequenceNumber: y,
              chainId: g,
              gasUnitPrice: BigInt(b),
              ...f,
            });
          return w.build(e, t, r);
        }
      };
      ((t.TransactionBuilderRemoteABI = Zn),
        g([q(6e5)], Zn.prototype, "fetchABI", 1));
      var Qn = class {
          constructor(e, t, r) {
            if ((void 0 === r && (r = !1), !e))
              throw new Error("Node URL cannot be empty.");
            const n = void 0 === t || null === t ? {} : { ...t };
            ((this.nodeUrl = r ? e : R(e)),
              (n.BASE = this.nodeUrl),
              !1 === (null == t ? void 0 : t.WITH_CREDENTIALS)
                ? (n.WITH_CREDENTIALS = !1)
                : (n.WITH_CREDENTIALS = !0),
              (this.client = new we(n)));
          }
          async getAccount(e) {
            return this.client.accounts.getAccount(T.ensure(e).hex());
          }
          async getAccountTransactions(e, t) {
            var r;
            return this.client.transactions.getAccountTransactions(
              T.ensure(e).hex(),
              null == (r = null == t ? void 0 : t.start)
                ? void 0
                : r.toString(),
              null == t ? void 0 : t.limit,
            );
          }
          async getAccountModules(e, t) {
            var r;
            return this.client.accounts.getAccountModules(
              T.ensure(e).hex(),
              null == (r = null == t ? void 0 : t.ledgerVersion)
                ? void 0
                : r.toString(),
            );
          }
          async getAccountModule(e, t, r) {
            var n;
            return this.client.accounts.getAccountModule(
              T.ensure(e).hex(),
              t,
              null == (n = null == r ? void 0 : r.ledgerVersion)
                ? void 0
                : n.toString(),
            );
          }
          async getAccountResources(e, t) {
            var r;
            return this.client.accounts.getAccountResources(
              T.ensure(e).hex(),
              null == (r = null == t ? void 0 : t.ledgerVersion)
                ? void 0
                : r.toString(),
            );
          }
          async getAccountResource(e, t, r) {
            var n;
            return this.client.accounts.getAccountResource(
              T.ensure(e).hex(),
              t,
              null == (n = null == r ? void 0 : r.ledgerVersion)
                ? void 0
                : n.toString(),
            );
          }
          static generateBCSTransaction(e, t) {
            const r = new Jn((t) => {
              const r = e.signBuffer(t);
              return new sr.Ed25519Signature(r.toUint8Array());
            }, e.pubKey().toUint8Array());
            return r.sign(t);
          }
          static generateBCSSimulation(e, t) {
            const r = new Jn((e) => {
              const t = new Uint8Array(64);
              return new sr.Ed25519Signature(t);
            }, e.pubKey().toUint8Array());
            return r.sign(t);
          }
          async generateTransaction(e, t, r) {
            const n = { sender: e };
            if (
              ((null == r ? void 0 : r.sequence_number) &&
                (n.sequenceNumber = r.sequence_number),
              (null == r ? void 0 : r.gas_unit_price) &&
                (n.gasUnitPrice = r.gas_unit_price),
              (null == r ? void 0 : r.max_gas_amount) &&
                (n.maxGasAmount = r.max_gas_amount),
              null == r ? void 0 : r.expiration_timestamp_secs)
            ) {
              const e = Number.parseInt(r.expiration_timestamp_secs, 10);
              n.expSecFromNow = e - Math.floor(Date.now() / 1e3);
            }
            const i = new Zn(this, n);
            return i.build(t.function, t.type_arguments, t.arguments);
          }
          async signTransaction(e, t) {
            return Promise.resolve(Qn.generateBCSTransaction(e, t));
          }
          async getEventsByCreationNumber(e, t, r) {
            var n;
            return this.client.events.getEventsByCreationNumber(
              T.ensure(e).hex(),
              t.toString(),
              null == (n = null == r ? void 0 : r.start)
                ? void 0
                : n.toString(),
              null == r ? void 0 : r.limit,
            );
          }
          async getEventsByEventHandle(e, t, r, n) {
            var i;
            return this.client.events.getEventsByEventHandle(
              T.ensure(e).hex(),
              t,
              r,
              null == (i = null == n ? void 0 : n.start)
                ? void 0
                : i.toString(),
              null == n ? void 0 : n.limit,
            );
          }
          async submitTransaction(e) {
            return this.submitSignedBCSTransaction(e);
          }
          async simulateTransaction(e, t, r) {
            let n;
            if (e instanceof M) n = Qn.generateBCSSimulation(e, t);
            else {
              const r = new Jn(() => {
                const e = new Uint8Array(64);
                return new sr.Ed25519Signature(e);
              }, e.toBytes());
              n = r.sign(t);
            }
            return this.submitBCSSimulation(n, r);
          }
          async submitSignedBCSTransaction(e) {
            return this.client.request.request({
              url: "/transactions",
              method: "POST",
              body: e,
              mediaType: "application/x.aptos.signed_transaction+bcs",
            });
          }
          async submitBCSSimulation(e, t) {
            var r, n, i;
            const s = {
              estimate_gas_unit_price:
                null != (r = null == t ? void 0 : t.estimateGasUnitPrice) && r,
              estimate_max_gas_amount:
                null != (n = null == t ? void 0 : t.estimateMaxGasAmount) && n,
              estimate_prioritized_gas_unit_price:
                null !=
                  (i =
                    null == t ? void 0 : t.estimatePrioritizedGasUnitPrice) &&
                i,
            };
            return this.client.request.request({
              url: "/transactions/simulate",
              query: s,
              method: "POST",
              body: e,
              mediaType: "application/x.aptos.signed_transaction+bcs",
            });
          }
          async getTransactions(e) {
            var t;
            return this.client.transactions.getTransactions(
              null == (t = null == e ? void 0 : e.start)
                ? void 0
                : t.toString(),
              null == e ? void 0 : e.limit,
            );
          }
          async getTransactionByHash(e) {
            return this.client.transactions.getTransactionByHash(e);
          }
          async getTransactionByVersion(e) {
            return this.client.transactions.getTransactionByVersion(
              e.toString(),
            );
          }
          async transactionPending(e) {
            try {
              const t = await this.client.transactions.getTransactionByHash(e);
              return "pending_transaction" === t.type;
            } catch (t) {
              if (404 === (null == t ? void 0 : t.status)) return !0;
              throw t;
            }
          }
          async waitForTransactionWithResult(e, t) {
            var r, n;
            const i = null != (r = null == t ? void 0 : t.timeoutSecs) ? r : C,
              s = null != (n = null == t ? void 0 : t.checkSuccess) && n;
            let o,
              a = !0,
              c = 0;
            while (a) {
              if (c >= i) break;
              try {
                if (
                  ((o = await this.client.transactions.getTransactionByHash(e)),
                  (a = "pending_transaction" === o.type),
                  !a)
                )
                  break;
              } catch (u) {
                const e = u instanceof F,
                  t =
                    e && 404 !== u.status && u.status >= 400 && u.status < 500;
                if (!e || t) throw u;
              }
              (await S(1e3), (c += 1));
            }
            if (void 0 === o)
              throw new Error(`Waiting for transaction ${e} failed`);
            if (a)
              throw new ri(
                `Waiting for transaction ${e} timed out after ${i} seconds`,
                o,
              );
            if (!s) return o;
            if (!(null == o ? void 0 : o.success))
              throw new ni(
                `Transaction ${e} committed to the blockchain but execution failed`,
                o,
              );
            return o;
          }
          async waitForTransaction(e, t) {
            await this.waitForTransactionWithResult(e, t);
          }
          async getLedgerInfo() {
            return this.client.general.getLedgerInfo();
          }
          async getChainId() {
            const e = await this.getLedgerInfo();
            return e.chain_id;
          }
          async getTableItem(e, t, r) {
            var n;
            const i = await this.client.tables.getTableItem(
              e,
              t,
              null == (n = null == r ? void 0 : r.ledgerVersion)
                ? void 0
                : n.toString(),
            );
            return i;
          }
          async generateRawTransaction(e, t, r) {
            const [{ sequence_number: n }, i, { gas_estimate: s }] =
                await Promise.all([
                  this.getAccount(e),
                  this.getChainId(),
                  (null == r ? void 0 : r.gasUnitPrice)
                    ? Promise.resolve({ gas_estimate: r.gasUnitPrice })
                    : this.estimateGasPrice(),
                ]),
              {
                maxGasAmount: o,
                gasUnitPrice: a,
                expireTimestamp: c,
              } = {
                maxGasAmount: BigInt(B),
                gasUnitPrice: BigInt(s),
                expireTimestamp: BigInt(Math.floor(Date.now() / 1e3) + k),
                ...r,
              };
            return new sr.RawTransaction(
              sr.AccountAddress.fromHex(e),
              BigInt(n),
              t,
              o,
              a,
              c,
              new sr.ChainId(i),
            );
          }
          async generateSignSubmitTransaction(e, t, r) {
            const n = await this.generateRawTransaction(e.address(), t, r),
              i = Qn.generateBCSTransaction(e, n),
              s = await this.submitSignedBCSTransaction(i);
            return s.hash;
          }
          async publishPackage(e, t, r, n) {
            const i = new pr();
            br(r, i);
            const s = new sr.TransactionPayloadEntryFunction(
              sr.EntryFunction.natural(
                "0x1::code",
                "publish_package_txn",
                [],
                [Rr(t), i.getBytes()],
              ),
            );
            return this.generateSignSubmitTransaction(e, s, n);
          }
          async generateSignSubmitWaitForTransaction(e, t, r) {
            const n = await this.generateSignSubmitTransaction(e, t, r);
            return this.waitForTransactionWithResult(n, r);
          }
          async estimateGasPrice() {
            return this.client.transactions.estimateGasPrice();
          }
          async estimateMaxGasAmount(e) {
            const t = `0x1::coin::CoinStore<${z}>`,
              [{ gas_estimate: r }, n] = await Promise.all([
                this.estimateGasPrice(),
                this.getAccountResources(e),
              ]),
              i = n.find((e) => e.type === t),
              s = BigInt(i.data.coin.value);
            return s / BigInt(r);
          }
          async rotateAuthKeyEd25519(e, t, r) {
            const { sequence_number: n, authentication_key: i } =
                await this.getAccount(e.address()),
              s = new M(t),
              o = new sr.RotationProofChallenge(
                sr.AccountAddress.CORE_CODE_ADDRESS,
                "account",
                "RotationProofChallenge",
                BigInt(n),
                sr.AccountAddress.fromHex(e.address()),
                new sr.AccountAddress(new T(i).toUint8Array()),
                s.pubKey().toUint8Array(),
              ),
              a = T.fromUint8Array(vr(o)),
              c = e.signHexString(a),
              u = s.signHexString(a),
              l = new sr.TransactionPayloadEntryFunction(
                sr.EntryFunction.natural(
                  "0x1::account",
                  "rotate_authentication_key",
                  [],
                  [
                    Ar(0),
                    Rr(e.pubKey().toUint8Array()),
                    Ar(0),
                    Rr(s.pubKey().toUint8Array()),
                    Rr(c.toUint8Array()),
                    Rr(u.toUint8Array()),
                  ],
                ),
              ),
              h = await this.generateRawTransaction(e.address(), l, r),
              d = Qn.generateBCSTransaction(e, h);
            return this.submitSignedBCSTransaction(d);
          }
          async lookupOriginalAddress(e) {
            const t = await this.getAccountResource(
                "0x1",
                "0x1::account::OriginatingAddress",
              ),
              {
                address_map: { handle: r },
              } = t.data,
              n = await this.getTableItem(r, {
                key_type: "address",
                value_type: "address",
                key: T.ensure(e).hex(),
              });
            return new T(n);
          }
          async getBlockByHeight(e, t) {
            return this.client.blocks.getBlockByHeight(e, t);
          }
          async getBlockByVersion(e, t) {
            return this.client.blocks.getBlockByVersion(e, t);
          }
          clearCache(e) {
            I(e);
          }
        },
        ei = (t.AptosClient = Qn);
      (g([ii], ei.prototype, "getAccount", 1),
        g([ii], ei.prototype, "getAccountTransactions", 1),
        g([ii], ei.prototype, "getAccountModules", 1),
        g([ii], ei.prototype, "getAccountModule", 1),
        g([ii], ei.prototype, "getAccountResources", 1),
        g([ii], ei.prototype, "getAccountResource", 1),
        g([ii], ei.prototype, "getEventsByCreationNumber", 1),
        g([ii], ei.prototype, "getEventsByEventHandle", 1),
        g([ii], ei.prototype, "submitSignedBCSTransaction", 1),
        g([ii], ei.prototype, "submitBCSSimulation", 1),
        g([ii], ei.prototype, "getTransactions", 1),
        g([ii], ei.prototype, "getTransactionByHash", 1),
        g([ii], ei.prototype, "getTransactionByVersion", 1),
        g([ii], ei.prototype, "getLedgerInfo", 1),
        g([H()], ei.prototype, "getChainId", 1),
        g([ii], ei.prototype, "getTableItem", 1),
        g(
          [ii, H({ ttlMs: 3e5, tags: ["gas_estimates"] })],
          ei.prototype,
          "estimateGasPrice",
          1,
        ),
        g([ii], ei.prototype, "estimateMaxGasAmount", 1),
        g([ii], ei.prototype, "getBlockByHeight", 1),
        g([ii], ei.prototype, "getBlockByVersion", 1));
      var ti = class extends Error {
        constructor(e, t, r, n) {
          (super(t),
            (this.status = e),
            (this.message = t),
            (this.errorCode = r),
            (this.vmErrorCode = n));
        }
      };
      t.ApiError = ti;
      var ri = class extends Error {
        constructor(e, t) {
          (super(e), (this.lastSubmittedTransaction = t));
        }
      };
      t.WaitForTransactionError = ri;
      var ni = class extends Error {
        constructor(e, t) {
          (super(e), (this.transaction = t));
        }
      };
      function ii(e, t, r) {
        const n = r.value;
        return (
          (r.value = async function () {
            var e, t;
            try {
              for (
                var r = arguments.length, i = new Array(r), s = 0;
                s < r;
                s++
              )
                i[s] = arguments[s];
              const e = await n.apply(this, [...i]);
              return e;
            } catch (o) {
              if (o instanceof F)
                throw new ti(
                  o.status,
                  JSON.stringify({ message: o.message, ...o.body }),
                  null == (e = o.body) ? void 0 : e.error_code,
                  null == (t = o.body) ? void 0 : t.vm_error_code,
                );
              throw o;
            }
          }),
          r
        );
      }
      t.FailedTransactionError = ni;
      var si = [
          "01186372656174655F636F6C6C656374696F6E5F736372697074000000000000000000000000000000000000000000000000000000000000000305746F6B656E3020637265617465206120656D70747920746F6B656E20636F6C6C656374696F6E207769746820706172616D65746572730005046E616D6507000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67000B6465736372697074696F6E07000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67000375726907000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E6700076D6178696D756D020E6D75746174655F73657474696E670600",
          "01136372656174655F746F6B656E5F736372697074000000000000000000000000000000000000000000000000000000000000000305746F6B656E1D2063726561746520746F6B656E20776974682072617720696E70757473000D0A636F6C6C656374696F6E07000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E6700046E616D6507000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67000B6465736372697074696F6E07000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67000762616C616E636502076D6178696D756D020375726907000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E670015726F79616C74795F70617965655F61646472657373041A726F79616C74795F706F696E74735F64656E6F6D696E61746F720218726F79616C74795F706F696E74735F6E756D657261746F72020E6D75746174655F73657474696E6706000D70726F70657274795F6B6579730607000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67000F70726F70657274795F76616C7565730606010E70726F70657274795F74797065730607000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E6700",
          "01166469726563745f7472616e736665725f736372697074000000000000000000000000000000000000000000000000000000000000000305746f6b656e0000051063726561746f72735f61646472657373040a636f6c6c656374696f6e07000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e6700046e616d6507000000000000000000000000000000000000000000000000000000000000000106737472696e6706537472696e67001070726f70657274795f76657273696f6e0206616d6f756e7402",
          "010C6F666665725F73637269707400000000000000000000000000000000000000000000000000000000000000030F746F6B656E5F7472616E7366657273000006087265636569766572040763726561746F72040A636F6C6C656374696F6E07000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E6700046E616D6507000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67001070726F70657274795F76657273696F6E0206616D6F756E7402",
          "010C636C61696D5F73637269707400000000000000000000000000000000000000000000000000000000000000030F746F6B656E5F7472616E73666572730000050673656E646572040763726561746F72040A636F6C6C656374696F6E07000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E6700046E616D6507000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67001070726F70657274795F76657273696F6E02",
          "011363616E63656C5F6F666665725F73637269707400000000000000000000000000000000000000000000000000000000000000030F746F6B656E5F7472616E7366657273000005087265636569766572040763726561746F72040A636F6C6C656374696F6E07000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E6700046E616D6507000000000000000000000000000000000000000000000000000000000000000106737472696E6706537472696E67001070726F70657274795F76657273696F6E02",
        ],
        oi = [
          "01087472616E73666572000000000000000000000000000000000000000000000000000000000000000104636F696E3C205472616E73666572732060616D6F756E7460206F6620636F696E732060436F696E54797065602066726F6D206066726F6D6020746F2060746F602E0109636F696E5F747970650202746F0406616D6F756E7402",
        ],
        ai = class {
          constructor(e) {
            ((this.aptosClient = e),
              (this.transactionBuilder = new Xn(
                oi.map((e) => new T(e).toUint8Array()),
              )));
          }
          async transfer(e, t, r, n) {
            var i;
            const s = null != (i = null == n ? void 0 : n.coinType) ? i : z,
              o = this.transactionBuilder.buildTransactionPayload(
                "0x1::coin::transfer",
                [s],
                [t.address(), r],
              );
            return this.aptosClient.generateSignSubmitTransaction(e, o, n);
          }
          async checkBalance(e, t) {
            var r;
            const n = null != (r = null == t ? void 0 : t.coinType) ? r : z,
              i = `0x1::coin::CoinStore<${n}>`,
              s = await this.aptosClient.getAccountResources(e.address()),
              o = s.find((e) => e.type === i);
            return BigInt(o.data.coin.value);
          }
        };
      t.CoinClient = ai;
      var ci = class extends ei {
        constructor(e, t, r) {
          var n, i, s;
          if ((super(e, r), !t)) throw new Error("Faucet URL cannot be empty.");
          this.faucetRequester = new he({
            BASE: t,
            VERSION: null != (n = null == r ? void 0 : r.VERSION) ? n : "0.1.0",
            WITH_CREDENTIALS:
              null != (i = null == r ? void 0 : r.WITH_CREDENTIALS) && i,
            CREDENTIALS:
              null != (s = null == r ? void 0 : r.CREDENTIALS) ? s : "include",
            TOKEN: null == r ? void 0 : r.TOKEN,
            USERNAME: null == r ? void 0 : r.USERNAME,
            PASSWORD: null == r ? void 0 : r.PASSWORD,
            HEADERS: null == r ? void 0 : r.HEADERS,
            ENCODE_PATH: null == r ? void 0 : r.ENCODE_PATH,
          });
        }
        async fundAccount(e, t, r) {
          void 0 === r && (r = C);
          const n = await this.faucetRequester.request({
              method: "POST",
              url: "/mint",
              query: { address: T.ensure(e).noPrefix(), amount: t },
            }),
            i = [];
          for (let s = 0; s < n.length; s += 1) {
            const e = n[s];
            i.push(this.waitForTransaction(e, { timeoutSecs: r }));
          }
          return (await Promise.all(i), n);
        }
      };
      t.FaucetClient = ci;
      var ui = class {
        constructor(e) {
          ((this.aptosClient = e),
            (this.transactionBuilder = new Xn(
              si.map((e) => new T(e).toUint8Array()),
            )));
        }
        async createCollection(e, t, r, n, i, s) {
          void 0 === i && (i = dr);
          const o = this.transactionBuilder.buildTransactionPayload(
            "0x3::token::create_collection_script",
            [],
            [t, r, n, i, [!1, !1, !1]],
          );
          return this.aptosClient.generateSignSubmitTransaction(e, o, s);
        }
        async createToken(e, t, r, n, i, s, o, a, c, u, l, h, d, f) {
          (void 0 === o && (o = dr),
            void 0 === a && (a = e.address()),
            void 0 === c && (c = 0),
            void 0 === u && (u = 0),
            void 0 === l && (l = []),
            void 0 === h && (h = []),
            void 0 === d && (d = []));
          const p = this.transactionBuilder.buildTransactionPayload(
            "0x3::token::create_token_script",
            [],
            [t, r, n, i, o, s, a, c, u, [!1, !1, !1, !1, !1], l, h, d],
          );
          return this.aptosClient.generateSignSubmitTransaction(e, p, f);
        }
        async offerToken(e, t, r, n, i, s, o, a) {
          void 0 === o && (o = 0);
          const c = this.transactionBuilder.buildTransactionPayload(
            "0x3::token_transfers::offer_script",
            [],
            [t, r, n, i, o, s],
          );
          return this.aptosClient.generateSignSubmitTransaction(e, c, a);
        }
        async claimToken(e, t, r, n, i, s, o) {
          void 0 === s && (s = 0);
          const a = this.transactionBuilder.buildTransactionPayload(
            "0x3::token_transfers::claim_script",
            [],
            [t, r, n, i, s],
          );
          return this.aptosClient.generateSignSubmitTransaction(e, a, o);
        }
        async cancelTokenOffer(e, t, r, n, i, s, o) {
          void 0 === s && (s = 0);
          const a = this.transactionBuilder.buildTransactionPayload(
            "0x3::token_transfers::cancel_offer_script",
            [],
            [t, r, n, i, s],
          );
          return this.aptosClient.generateSignSubmitTransaction(e, a, o);
        }
        async directTransferToken(e, t, r, n, i, s, o, a) {
          void 0 === o && (o = 0);
          const c = this.transactionBuilder.buildTransactionPayload(
              "0x3::token::direct_transfer_script",
              [],
              [r, n, i, o, s],
            ),
            u = await this.aptosClient.generateRawTransaction(
              e.address(),
              c,
              a,
            ),
            l = new sr.MultiAgentRawTransaction(u, [
              sr.AccountAddress.fromHex(t.address()),
            ]),
            h = new sr.Ed25519Signature(
              e.signBuffer(Kn.getSigningMessage(l)).toUint8Array(),
            ),
            d = new sr.AccountAuthenticatorEd25519(
              new sr.Ed25519PublicKey(e.signingKey.publicKey),
              h,
            ),
            f = new sr.Ed25519Signature(
              t.signBuffer(Kn.getSigningMessage(l)).toUint8Array(),
            ),
            p = new sr.AccountAuthenticatorEd25519(
              new sr.Ed25519PublicKey(t.signingKey.publicKey),
              f,
            ),
            y = new sr.TransactionAuthenticatorMultiAgent(
              d,
              [sr.AccountAddress.fromHex(t.address())],
              [p],
            ),
            g = vr(new sr.SignedTransaction(u, y)),
            b = await this.aptosClient.submitSignedBCSTransaction(g);
          return b.hash;
        }
        async getCollectionData(e, t) {
          const r = await this.aptosClient.getAccountResources(e),
            n = r.find((e) => "0x3::token::Collections" === e.type),
            { handle: i } = n.data.collection_data,
            s = {
              key_type: "0x1::string::String",
              value_type: "0x3::token::CollectionData",
              key: t,
            },
            o = await this.aptosClient.getTableItem(i, s);
          return o;
        }
        async getTokenData(e, t, r) {
          const n = e instanceof T ? e.hex() : e,
            i = await this.aptosClient.getAccountResource(
              n,
              "0x3::token::Collections",
            ),
            { handle: s } = i.data.token_data,
            o = { creator: n, collection: t, name: r },
            a = {
              key_type: "0x3::token::TokenDataId",
              value_type: "0x3::token::TokenData",
              key: o,
            };
          return this.aptosClient.getTableItem(s, a);
        }
        async getToken(e, t, r, n) {
          void 0 === n && (n = "0");
          const i = {
            creator: e instanceof T ? e.hex() : e,
            collection: t,
            name: r,
          };
          return this.getTokenForAccount(e, {
            token_data_id: i,
            property_version: n,
          });
        }
        async getTokenForAccount(e, t) {
          const r = await this.aptosClient.getAccountResource(
              e instanceof T ? e.hex() : e,
              "0x3::token::TokenStore",
            ),
            { handle: n } = r.data.tokens,
            i = {
              key_type: "0x3::token::TokenId",
              value_type: "0x3::token::Token",
              key: t,
            };
          try {
            return await this.aptosClient.getTableItem(n, i);
          } catch (s) {
            return 404 === (null == s ? void 0 : s.status)
              ? { id: t, amount: "0" }
              : s;
          }
        }
      };
      t.TokenClient = ui;
      t.TokenTypes = {};
    },
    6189: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add = t.toBig = t.split = t.fromBig = void 0));
      const n = BigInt(2 ** 32 - 1),
        i = BigInt(32);
      function s(e, t) {
        return (
          void 0 === t && (t = !1),
          t
            ? { h: Number(e & n), l: Number((e >> i) & n) }
            : { h: 0 | Number((e >> i) & n), l: 0 | Number(e & n) }
        );
      }
      function o(e, t) {
        void 0 === t && (t = !1);
        let r = new Uint32Array(e.length),
          n = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          const { h: o, l: a } = s(e[i], t);
          [r[i], n[i]] = [o, a];
        }
        return [r, n];
      }
      ((t.fromBig = s), (t.split = o));
      const a = (e, t) => (BigInt(e >>> 0) << i) | BigInt(t >>> 0);
      t.toBig = a;
      const c = (e, t, r) => e >>> r,
        u = (e, t, r) => (e << (32 - r)) | (t >>> r),
        l = (e, t, r) => (e >>> r) | (t << (32 - r)),
        h = (e, t, r) => (e << (32 - r)) | (t >>> r),
        d = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
        f = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
        p = (e, t) => t,
        y = (e, t) => e,
        g = (e, t, r) => (e << r) | (t >>> (32 - r)),
        b = (e, t, r) => (t << r) | (e >>> (32 - r)),
        w = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        m = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      function v(e, t, r, n) {
        const i = (t >>> 0) + (n >>> 0);
        return { h: (e + r + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
      }
      t.add = v;
      const E = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        A = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
        _ = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
        x = (e, t, r, n, i) => (t + r + n + i + ((e / 2 ** 32) | 0)) | 0,
        T = (e, t, r, n, i) =>
          (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
        S = (e, t, r, n, i, s) => (t + r + n + i + s + ((e / 2 ** 32) | 0)) | 0,
        U = {
          fromBig: s,
          split: o,
          toBig: t.toBig,
          shrSH: c,
          shrSL: u,
          rotrSH: l,
          rotrSL: h,
          rotrBH: d,
          rotrBL: f,
          rotr32H: p,
          rotr32L: y,
          rotlSH: g,
          rotlSL: b,
          rotlBH: w,
          rotlBL: m,
          add: v,
          add3L: E,
          add3H: A,
          add4L: _,
          add4H: x,
          add5H: S,
          add5L: T,
        };
      t.default = U;
    },
    6190: function (e, t, r) {
      "use strict";
      e.exports = function (e, t) {
        return function () {
          for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
            r[n] = arguments[n];
          return e.apply(t, r);
        };
      };
    },
    6191: function (e, t, r) {
      "use strict";
      var n = r(3060);
      function i(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      e.exports = function (e, t, r) {
        if (!t) return e;
        var s;
        if (r) s = r(t);
        else if (n.isURLSearchParams(t)) s = t.toString();
        else {
          var o = [];
          (n.forEach(t, function (e, t) {
            null !== e &&
              "undefined" !== typeof e &&
              (n.isArray(e) ? (t += "[]") : (e = [e]),
              n.forEach(e, function (e) {
                (n.isDate(e)
                  ? (e = e.toISOString())
                  : n.isObject(e) && (e = JSON.stringify(e)),
                  o.push(i(t) + "=" + i(e)));
              }));
          }),
            (s = o.join("&")));
        }
        if (s) {
          var a = e.indexOf("#");
          (-1 !== a && (e = e.slice(0, a)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + s));
        }
        return e;
      };
    },
    6192: function (e, t, r) {
      "use strict";
      e.exports = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
      };
    },
    6193: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(3060);
        function i(e, r) {
          r = r || new FormData();
          var i = [];
          function s(e) {
            return null === e
              ? ""
              : n.isDate(e)
                ? e.toISOString()
                : n.isArrayBuffer(e) || n.isTypedArray(e)
                  ? "function" === typeof Blob
                    ? new Blob([e])
                    : t.from(e)
                  : e;
          }
          function o(e, t) {
            if (n.isPlainObject(e) || n.isArray(e)) {
              if (-1 !== i.indexOf(e))
                throw Error("Circular reference detected in " + t);
              (i.push(e),
                n.forEach(e, function (e, i) {
                  if (!n.isUndefined(e)) {
                    var a,
                      c = t ? t + "." + i : i;
                    if (e && !t && "object" === typeof e)
                      if (n.endsWith(i, "{}")) e = JSON.stringify(e);
                      else if (n.endsWith(i, "[]") && (a = n.toArray(e)))
                        return void a.forEach(function (e) {
                          !n.isUndefined(e) && r.append(c, s(e));
                        });
                    o(e, c);
                  }
                }),
                i.pop());
            } else r.append(t, s(e));
          }
          return (o(e), r);
        }
        e.exports = i;
      }).call(this, r(2).Buffer);
    },
    6194: function (e, t, r) {
      "use strict";
      var n = r(3060),
        i = r(8128),
        s = r(8129),
        o = r(6191),
        a = r(6195),
        c = r(8132),
        u = r(8133),
        l = r(6192),
        h = r(3903),
        d = r(4696),
        f = r(8134);
      e.exports = function (e) {
        return new Promise(function (t, r) {
          var p,
            y = e.data,
            g = e.headers,
            b = e.responseType;
          function w() {
            (e.cancelToken && e.cancelToken.unsubscribe(p),
              e.signal && e.signal.removeEventListener("abort", p));
          }
          n.isFormData(y) &&
            n.isStandardBrowserEnv() &&
            delete g["Content-Type"];
          var m = new XMLHttpRequest();
          if (e.auth) {
            var v = e.auth.username || "",
              E = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            g.Authorization = "Basic " + btoa(v + ":" + E);
          }
          var A = a(e.baseURL, e.url);
          function _() {
            if (m) {
              var n =
                  "getAllResponseHeaders" in m
                    ? c(m.getAllResponseHeaders())
                    : null,
                s =
                  b && "text" !== b && "json" !== b
                    ? m.response
                    : m.responseText,
                o = {
                  data: s,
                  status: m.status,
                  statusText: m.statusText,
                  headers: n,
                  config: e,
                  request: m,
                };
              (i(
                function (e) {
                  (t(e), w());
                },
                function (e) {
                  (r(e), w());
                },
                o,
              ),
                (m = null));
            }
          }
          if (
            (m.open(
              e.method.toUpperCase(),
              o(A, e.params, e.paramsSerializer),
              !0,
            ),
            (m.timeout = e.timeout),
            "onloadend" in m
              ? (m.onloadend = _)
              : (m.onreadystatechange = function () {
                  m &&
                    4 === m.readyState &&
                    (0 !== m.status ||
                      (m.responseURL &&
                        0 === m.responseURL.indexOf("file:"))) &&
                    setTimeout(_);
                }),
            (m.onabort = function () {
              m &&
                (r(new h("Request aborted", h.ECONNABORTED, e, m)), (m = null));
            }),
            (m.onerror = function () {
              (r(new h("Network Error", h.ERR_NETWORK, e, m, m)), (m = null));
            }),
            (m.ontimeout = function () {
              var t = e.timeout
                  ? "timeout of " + e.timeout + "ms exceeded"
                  : "timeout exceeded",
                n = e.transitional || l;
              (e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                r(
                  new h(
                    t,
                    n.clarifyTimeoutError ? h.ETIMEDOUT : h.ECONNABORTED,
                    e,
                    m,
                  ),
                ),
                (m = null));
            }),
            n.isStandardBrowserEnv())
          ) {
            var x =
              (e.withCredentials || u(A)) && e.xsrfCookieName
                ? s.read(e.xsrfCookieName)
                : void 0;
            x && (g[e.xsrfHeaderName] = x);
          }
          ("setRequestHeader" in m &&
            n.forEach(g, function (e, t) {
              "undefined" === typeof y && "content-type" === t.toLowerCase()
                ? delete g[t]
                : m.setRequestHeader(t, e);
            }),
            n.isUndefined(e.withCredentials) ||
              (m.withCredentials = !!e.withCredentials),
            b && "json" !== b && (m.responseType = e.responseType),
            "function" === typeof e.onDownloadProgress &&
              m.addEventListener("progress", e.onDownloadProgress),
            "function" === typeof e.onUploadProgress &&
              m.upload &&
              m.upload.addEventListener("progress", e.onUploadProgress),
            (e.cancelToken || e.signal) &&
              ((p = function (e) {
                m &&
                  (r(!e || (e && e.type) ? new d() : e), m.abort(), (m = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(p),
              e.signal &&
                (e.signal.aborted
                  ? p()
                  : e.signal.addEventListener("abort", p))),
            y || (y = null));
          var T = f(A);
          T && -1 === ["http", "https", "file"].indexOf(T)
            ? r(new h("Unsupported protocol " + T + ":", h.ERR_BAD_REQUEST, e))
            : m.send(y);
        });
      };
    },
    6195: function (e, t, r) {
      "use strict";
      var n = r(8130),
        i = r(8131);
      e.exports = function (e, t) {
        return e && !n(t) ? i(e, t) : t;
      };
    },
    6196: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    6197: function (e, t, r) {
      "use strict";
      var n = r(3060);
      e.exports = function (e, t) {
        t = t || {};
        var r = {};
        function i(e, t) {
          return n.isPlainObject(e) && n.isPlainObject(t)
            ? n.merge(e, t)
            : n.isPlainObject(t)
              ? n.merge({}, t)
              : n.isArray(t)
                ? t.slice()
                : t;
        }
        function s(r) {
          return n.isUndefined(t[r])
            ? n.isUndefined(e[r])
              ? void 0
              : i(void 0, e[r])
            : i(e[r], t[r]);
        }
        function o(e) {
          if (!n.isUndefined(t[e])) return i(void 0, t[e]);
        }
        function a(r) {
          return n.isUndefined(t[r])
            ? n.isUndefined(e[r])
              ? void 0
              : i(void 0, e[r])
            : i(void 0, t[r]);
        }
        function c(r) {
          return r in t ? i(e[r], t[r]) : r in e ? i(void 0, e[r]) : void 0;
        }
        var u = {
          url: o,
          method: o,
          data: o,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          beforeRedirect: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: c,
        };
        return (
          n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
            var t = u[e] || s,
              i = t(e);
            (n.isUndefined(i) && t !== c) || (r[e] = i);
          }),
          r
        );
      };
    },
    6198: function (e, t) {
      e.exports = { version: "0.27.2" };
    },
    8115: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = r(6188),
        s = r(27),
        o = r(19),
        a = r(67),
        c = n(r(129));
      function u(e, t) {
        (l(e, t), t.add(e));
      }
      function l(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function h(e, t, r) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : r;
        throw new TypeError("Private element is not present on this object");
      }
      const d = "account_not_found",
        f = 1e6;
      var p = new WeakSet();
      class AptExplorer extends c.default {
        constructor(e) {
          let { wallet: t, config: r } = e;
          (super({ wallet: t, config: r }),
            u(this, p),
            (this.baseUrl = (0, a.getStringWithEnsuredEndChar)(r.baseUrl, "/")),
            (this.ticker = t.ticker),
            (this.aptosClient = new i.AptosClient(this.baseUrl)),
            (this.coinClient = new i.CoinClient(this.aptosClient)));
        }
        getAllowedTickers() {
          return ["APT"];
        }
        getAccount(e) {
          return this.aptosClient.getAccount(e);
        }
        async sendTransaction(e) {
          try {
            const { hash: t } =
              await this.aptosClient.submitSignedBCSTransaction(e);
            return { txid: t };
          } catch (t) {
            throw new o.ExternalError({
              type: s.EXTERNAL_ERROR,
              error: t,
              instance: this,
            });
          }
        }
        async getInfo(e) {
          try {
            const { account: e } = this.wallet.getLocalAccount(),
              t = (
                await this.aptosClient.client.accounts.httpRequest.request({
                  method: "GET",
                  url: `/accounts/${e.address().toString()}/balance/0x1::aptos_coin::AptosCoin`,
                })
              ).toString();
            return { balance: t, isRegistered: !0 };
          } catch (t) {
            const { status: e, errorCode: r } =
              null !== t && void 0 !== t ? t : {};
            if (e === s.HTTP_STATUS_NOT_FOUND && r === d)
              return { balance: null, isRegistered: !1 };
            throw new o.ExternalError({
              type: s.EXTERNAL_ERROR,
              error: t,
              instance: this,
            });
          }
        }
        handleRequestError(e, t) {
          var r;
          return t.type === s.GET_TRANSACTIONS_TYPE &&
            (null === (r = e.response) || void 0 === r ? void 0 : r.status) ===
              s.HTTP_STATUS_NOT_FOUND
            ? []
            : super.handleRequestError(e, t);
        }
        getGasPrice() {
          return this.aptosClient.estimateGasPrice();
        }
        getTransactionsParams(e, t, r, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === r && (r = this.defaultTxLimit),
            { start: String(t), limit: String(r) }
          );
        }
        getTransactionsUrl(e) {
          return `/accounts/${e}/transactions`;
        }
        getTxHash(e) {
          return e.hash;
        }
        getTxDirection(e, t) {
          return h(p, this, y).call(this, t) === e;
        }
        getTxOtherSideAddress(e, t) {
          return this.getTxDirection(e, t) ? e : h(p, this, y).call(this, t);
        }
        getTxValue(e, t) {
          const r = h(p, this, g).call(this, t);
          return this.wallet.toCurrencyUnit(r);
        }
        getTxDateTime(e) {
          return (0, a.convertTimestampToDateTime)(Number(e.timestamp), f);
        }
        getTxFee(e) {
          const { gas_used: t, gas_unit_price: r } = e;
          return this.wallet.toCurrencyUnit(BigInt(t) * BigInt(r));
        }
        getTxConfirmations(e) {
          return e.success ? 1 : 0;
        }
      }
      function y(e) {
        var t;
        return null === (t = e.payload) || void 0 === t
          ? void 0
          : t.arguments[0];
      }
      function g(e) {
        var t;
        return null === (t = e.payload) || void 0 === t
          ? void 0
          : t.arguments[1];
      }
      t.default = AptExplorer;
    },
    8116: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.shake256 =
          t.shake128 =
          t.keccak_512 =
          t.keccak_384 =
          t.keccak_256 =
          t.keccak_224 =
          t.sha3_512 =
          t.sha3_384 =
          t.sha3_256 =
          t.sha3_224 =
          t.Keccak =
          t.keccakP =
            void 0));
      const n = r(5242),
        i = r(6189),
        s = r(4382),
        [o, a, c] = [[], [], []],
        u = BigInt(0),
        l = BigInt(1),
        h = BigInt(2),
        d = BigInt(7),
        f = BigInt(256),
        p = BigInt(113);
      for (let A = 0, _ = l, x = 1, T = 0; A < 24; A++) {
        (([x, T] = [T, (2 * x + 3 * T) % 5]),
          o.push(2 * (5 * T + x)),
          a.push((((A + 1) * (A + 2)) / 2) % 64));
        let e = u;
        for (let t = 0; t < 7; t++)
          ((_ = ((_ << l) ^ ((_ >> d) * p)) % f),
            _ & h && (e ^= l << ((l << BigInt(t)) - l)));
        c.push(e);
      }
      const [y, g] = i.default.split(c, !0),
        b = (e, t, r) =>
          r > 32 ? i.default.rotlBH(e, t, r) : i.default.rotlSH(e, t, r),
        w = (e, t, r) =>
          r > 32 ? i.default.rotlBL(e, t, r) : i.default.rotlSL(e, t, r);
      function m(e, t) {
        void 0 === t && (t = 24);
        const r = new Uint32Array(10);
        for (let n = 24 - t; n < 24; n++) {
          for (let n = 0; n < 10; n++)
            r[n] = e[n] ^ e[n + 10] ^ e[n + 20] ^ e[n + 30] ^ e[n + 40];
          for (let n = 0; n < 10; n += 2) {
            const t = (n + 8) % 10,
              i = (n + 2) % 10,
              s = r[i],
              o = r[i + 1],
              a = b(s, o, 1) ^ r[t],
              c = w(s, o, 1) ^ r[t + 1];
            for (let r = 0; r < 50; r += 10)
              ((e[n + r] ^= a), (e[n + r + 1] ^= c));
          }
          let t = e[2],
            i = e[3];
          for (let r = 0; r < 24; r++) {
            const n = a[r],
              s = b(t, i, n),
              c = w(t, i, n),
              u = o[r];
            ((t = e[u]), (i = e[u + 1]), (e[u] = s), (e[u + 1] = c));
          }
          for (let n = 0; n < 50; n += 10) {
            for (let t = 0; t < 10; t++) r[t] = e[n + t];
            for (let t = 0; t < 10; t++)
              e[n + t] ^= ~r[(t + 2) % 10] & r[(t + 4) % 10];
          }
          ((e[0] ^= y[n]), (e[1] ^= g[n]));
        }
        r.fill(0);
      }
      t.keccakP = m;
      class Keccak extends s.Hash {
        constructor(e, t, r, i, o) {
          if (
            (void 0 === i && (i = !1),
            void 0 === o && (o = 24),
            super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = o),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            n.default.number(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw new Error("Sha3 supports only keccak-f1600 function");
          ((this.state = new Uint8Array(200)),
            (this.state32 = (0, s.u32)(this.state)));
        }
        keccak() {
          (m(this.state32, this.rounds), (this.posOut = 0), (this.pos = 0));
        }
        update(e) {
          n.default.exists(this);
          const { blockLen: t, state: r } = this;
          e = (0, s.toBytes)(e);
          const i = e.length;
          for (let n = 0; n < i; ) {
            const s = Math.min(t - this.pos, i - n);
            for (let t = 0; t < s; t++) r[this.pos++] ^= e[n++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          const { state: e, suffix: t, pos: r, blockLen: n } = this;
          ((e[r] ^= t),
            0 !== (128 & t) && r === n - 1 && this.keccak(),
            (e[n - 1] ^= 128),
            this.keccak());
        }
        writeInto(e) {
          (n.default.exists(this, !1), n.default.bytes(e), this.finish());
          const t = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = e.length; n < i; ) {
            this.posOut >= r && this.keccak();
            const s = Math.min(r - this.posOut, i - n);
            (e.set(t.subarray(this.posOut, this.posOut + s), n),
              (this.posOut += s),
              (n += s));
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (n.default.number(e), this.xofInto(new Uint8Array(e)));
        }
        digestInto(e) {
          if ((n.default.output(e, this), this.finished))
            throw new Error("digest() was already called");
          return (this.writeInto(e), this.destroy(), e);
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          ((this.destroyed = !0), this.state.fill(0));
        }
        _cloneInto(e) {
          const {
            blockLen: t,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: s,
          } = this;
          return (
            e || (e = new Keccak(t, r, n, s, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = r),
            (e.outputLen = n),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      t.Keccak = Keccak;
      const v = (e, t, r) => (0, s.wrapConstructor)(() => new Keccak(t, e, r));
      ((t.sha3_224 = v(6, 144, 28)),
        (t.sha3_256 = v(6, 136, 32)),
        (t.sha3_384 = v(6, 104, 48)),
        (t.sha3_512 = v(6, 72, 64)),
        (t.keccak_224 = v(1, 144, 28)),
        (t.keccak_256 = v(1, 136, 32)),
        (t.keccak_384 = v(1, 104, 48)),
        (t.keccak_512 = v(1, 72, 64)));
      const E = (e, t, r) =>
        (0, s.wrapConstructorWithOpts)(function (n) {
          return (
            void 0 === n && (n = {}),
            new Keccak(t, e, void 0 === n.dkLen ? r : n.dkLen, !0)
          );
        });
      ((t.shake128 = E(31, 168, 16)), (t.shake256 = E(31, 136, 32)));
    },
    8117: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto = {
          node: void 0,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        }));
    },
    8118: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hmac = void 0));
      const n = r(5242),
        i = r(4382);
      class HMAC extends i.Hash {
        constructor(e, t) {
          (super(),
            (this.finished = !1),
            (this.destroyed = !1),
            n.default.hash(e));
          const r = (0, i.toBytes)(t);
          if (
            ((this.iHash = e.create()), "function" !== typeof this.iHash.update)
          )
            throw new TypeError(
              "Expected instance of class which extends utils.Hash",
            );
          ((this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen));
          const s = this.blockLen,
            o = new Uint8Array(s);
          o.set(r.length > s ? e.create().update(r).digest() : r);
          for (let n = 0; n < o.length; n++) o[n] ^= 54;
          (this.iHash.update(o), (this.oHash = e.create()));
          for (let n = 0; n < o.length; n++) o[n] ^= 106;
          (this.oHash.update(o), o.fill(0));
        }
        update(e) {
          return (n.default.exists(this), this.iHash.update(e), this);
        }
        digestInto(e) {
          (n.default.exists(this),
            n.default.bytes(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy());
        }
        digest() {
          const e = new Uint8Array(this.oHash.outputLen);
          return (this.digestInto(e), e);
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          const {
            oHash: t,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: s,
            outputLen: o,
          } = this;
          return (
            (e = e),
            (e.finished = n),
            (e.destroyed = i),
            (e.blockLen = s),
            (e.outputLen = o),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
        }
      }
      const s = (e, t, r) => new HMAC(e, t).update(r).digest();
      ((t.hmac = s), (t.hmac.create = (e, t) => new HMAC(e, t)));
    },
    8119: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha384 = t.sha512_256 = t.sha512 = t.SHA512 = void 0));
      const n = r(8120),
        i = r(6189),
        s = r(4382),
        [o, a] = i.default.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((e) => BigInt(e)),
        ),
        c = new Uint32Array(80),
        u = new Uint32Array(80);
      class SHA512 extends n.SHA2 {
        constructor() {
          (super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209));
        }
        get() {
          const {
            Ah: e,
            Al: t,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: s,
            Dh: o,
            Dl: a,
            Eh: c,
            El: u,
            Fh: l,
            Fl: h,
            Gh: d,
            Gl: f,
            Hh: p,
            Hl: y,
          } = this;
          return [e, t, r, n, i, s, o, a, c, u, l, h, d, f, p, y];
        }
        set(e, t, r, n, i, s, o, a, c, u, l, h, d, f, p, y) {
          ((this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | s),
            (this.Dh = 0 | o),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | u),
            (this.Fh = 0 | l),
            (this.Fl = 0 | h),
            (this.Gh = 0 | d),
            (this.Gl = 0 | f),
            (this.Hh = 0 | p),
            (this.Hl = 0 | y));
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4)
            ((c[i] = e.getUint32(t)), (u[i] = e.getUint32((t += 4))));
          for (let o = 16; o < 80; o++) {
            const e = 0 | c[o - 15],
              t = 0 | u[o - 15],
              r =
                i.default.rotrSH(e, t, 1) ^
                i.default.rotrSH(e, t, 8) ^
                i.default.shrSH(e, t, 7),
              n =
                i.default.rotrSL(e, t, 1) ^
                i.default.rotrSL(e, t, 8) ^
                i.default.shrSL(e, t, 7),
              s = 0 | c[o - 2],
              a = 0 | u[o - 2],
              l =
                i.default.rotrSH(s, a, 19) ^
                i.default.rotrBH(s, a, 61) ^
                i.default.shrSH(s, a, 6),
              h =
                i.default.rotrSL(s, a, 19) ^
                i.default.rotrBL(s, a, 61) ^
                i.default.shrSL(s, a, 6),
              d = i.default.add4L(n, h, u[o - 7], u[o - 16]),
              f = i.default.add4H(d, r, l, c[o - 7], c[o - 16]);
            ((c[o] = 0 | f), (u[o] = 0 | d));
          }
          let {
            Ah: r,
            Al: n,
            Bh: s,
            Bl: l,
            Ch: h,
            Cl: d,
            Dh: f,
            Dl: p,
            Eh: y,
            El: g,
            Fh: b,
            Fl: w,
            Gh: m,
            Gl: v,
            Hh: E,
            Hl: A,
          } = this;
          for (let _ = 0; _ < 80; _++) {
            const e =
                i.default.rotrSH(y, g, 14) ^
                i.default.rotrSH(y, g, 18) ^
                i.default.rotrBH(y, g, 41),
              t =
                i.default.rotrSL(y, g, 14) ^
                i.default.rotrSL(y, g, 18) ^
                i.default.rotrBL(y, g, 41),
              x = (y & b) ^ (~y & m),
              T = (g & w) ^ (~g & v),
              S = i.default.add5L(A, t, T, a[_], u[_]),
              U = i.default.add5H(S, E, e, x, o[_], c[_]),
              R = 0 | S,
              B =
                i.default.rotrSH(r, n, 28) ^
                i.default.rotrBH(r, n, 34) ^
                i.default.rotrBH(r, n, 39),
              k =
                i.default.rotrSL(r, n, 28) ^
                i.default.rotrBL(r, n, 34) ^
                i.default.rotrBL(r, n, 39),
              C = (r & s) ^ (r & h) ^ (s & h),
              z = (n & l) ^ (n & d) ^ (l & d);
            ((E = 0 | m),
              (A = 0 | v),
              (m = 0 | b),
              (v = 0 | w),
              (b = 0 | y),
              (w = 0 | g),
              ({ h: y, l: g } = i.default.add(0 | f, 0 | p, 0 | U, 0 | R)),
              (f = 0 | h),
              (p = 0 | d),
              (h = 0 | s),
              (d = 0 | l),
              (s = 0 | r),
              (l = 0 | n));
            const H = i.default.add3L(R, k, z);
            ((r = i.default.add3H(H, U, B, C)), (n = 0 | H));
          }
          (({ h: r, l: n } = i.default.add(
            0 | this.Ah,
            0 | this.Al,
            0 | r,
            0 | n,
          )),
            ({ h: s, l: l } = i.default.add(
              0 | this.Bh,
              0 | this.Bl,
              0 | s,
              0 | l,
            )),
            ({ h: h, l: d } = i.default.add(
              0 | this.Ch,
              0 | this.Cl,
              0 | h,
              0 | d,
            )),
            ({ h: f, l: p } = i.default.add(
              0 | this.Dh,
              0 | this.Dl,
              0 | f,
              0 | p,
            )),
            ({ h: y, l: g } = i.default.add(
              0 | this.Eh,
              0 | this.El,
              0 | y,
              0 | g,
            )),
            ({ h: b, l: w } = i.default.add(
              0 | this.Fh,
              0 | this.Fl,
              0 | b,
              0 | w,
            )),
            ({ h: m, l: v } = i.default.add(
              0 | this.Gh,
              0 | this.Gl,
              0 | m,
              0 | v,
            )),
            ({ h: E, l: A } = i.default.add(
              0 | this.Hh,
              0 | this.Hl,
              0 | E,
              0 | A,
            )),
            this.set(r, n, s, l, h, d, f, p, y, g, b, w, m, v, E, A));
        }
        roundClean() {
          (c.fill(0), u.fill(0));
        }
        destroy() {
          (this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      t.SHA512 = SHA512;
      class SHA512_256 extends SHA512 {
        constructor() {
          (super(),
            (this.Ah = 573645204),
            (this.Al = -64227540),
            (this.Bh = -1621794909),
            (this.Bl = -934517566),
            (this.Ch = 596883563),
            (this.Cl = 1867755857),
            (this.Dh = -1774684391),
            (this.Dl = 1497426621),
            (this.Eh = -1775747358),
            (this.El = -1467023389),
            (this.Fh = -1101128155),
            (this.Fl = 1401305490),
            (this.Gh = 721525244),
            (this.Gl = 746961066),
            (this.Hh = 246885852),
            (this.Hl = -2117784414),
            (this.outputLen = 32));
        }
      }
      class SHA384 extends SHA512 {
        constructor() {
          (super(),
            (this.Ah = -876896931),
            (this.Al = -1056596264),
            (this.Bh = 1654270250),
            (this.Bl = 914150663),
            (this.Ch = -1856437926),
            (this.Cl = 812702999),
            (this.Dh = 355462360),
            (this.Dl = -150054599),
            (this.Eh = 1731405415),
            (this.El = -4191439),
            (this.Fh = -1900787065),
            (this.Fl = 1750603025),
            (this.Gh = -619958771),
            (this.Gl = 1694076839),
            (this.Hh = 1203062813),
            (this.Hl = -1090891868),
            (this.outputLen = 48));
        }
      }
      ((t.sha512 = (0, s.wrapConstructor)(() => new SHA512())),
        (t.sha512_256 = (0, s.wrapConstructor)(() => new SHA512_256())),
        (t.sha384 = (0, s.wrapConstructor)(() => new SHA384())));
    },
    8120: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SHA2 = void 0));
      const n = r(5242),
        i = r(4382);
      function s(e, t, r, n) {
        if ("function" === typeof e.setBigUint64)
          return e.setBigUint64(t, r, n);
        const i = BigInt(32),
          s = BigInt(4294967295),
          o = Number((r >> i) & s),
          a = Number(r & s),
          c = n ? 4 : 0,
          u = n ? 0 : 4;
        (e.setUint32(t + c, o, n), e.setUint32(t + u, a, n));
      }
      class SHA2 extends i.Hash {
        constructor(e, t, r, n) {
          (super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, i.createView)(this.buffer)));
        }
        update(e) {
          n.default.exists(this);
          const { view: t, buffer: r, blockLen: s } = this;
          e = (0, i.toBytes)(e);
          const o = e.length;
          for (let n = 0; n < o; ) {
            const a = Math.min(s - this.pos, o - n);
            if (a !== s)
              (r.set(e.subarray(n, n + a), this.pos),
                (this.pos += a),
                (n += a),
                this.pos === s && (this.process(t, 0), (this.pos = 0)));
            else {
              const t = (0, i.createView)(e);
              for (; s <= o - n; n += s) this.process(t, n);
            }
          }
          return ((this.length += e.length), this.roundClean(), this);
        }
        digestInto(e) {
          (n.default.exists(this),
            n.default.output(e, this),
            (this.finished = !0));
          const { buffer: t, view: r, blockLen: o, isLE: a } = this;
          let { pos: c } = this;
          ((t[c++] = 128),
            this.buffer.subarray(c).fill(0),
            this.padOffset > o - c && (this.process(r, 0), (c = 0)));
          for (let n = c; n < o; n++) t[n] = 0;
          (s(r, o - 8, BigInt(8 * this.length), a), this.process(r, 0));
          const u = (0, i.createView)(e);
          this.get().forEach((e, t) => u.setUint32(4 * t, e, a));
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const r = e.slice(0, t);
          return (this.destroy(), r);
        }
        _cloneInto(e) {
          (e || (e = new this.constructor()), e.set(...this.get()));
          const {
            blockLen: t,
            buffer: r,
            length: n,
            finished: i,
            destroyed: s,
            pos: o,
          } = this;
          return (
            (e.length = n),
            (e.pos = o),
            (e.finished = i),
            (e.destroyed = s),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
      t.SHA2 = SHA2;
    },
    8121: function (e, t, r) {
      e.exports = r(8122);
    },
    8122: function (e, t, r) {
      "use strict";
      var n = r(3060),
        i = r(6190),
        s = r(8123),
        o = r(6197),
        a = r(5249);
      function c(e) {
        var t = new s(e),
          r = i(s.prototype.request, t);
        return (
          n.extend(r, s.prototype, t),
          n.extend(r, t),
          (r.create = function (t) {
            return c(o(e, t));
          }),
          r
        );
      }
      var u = c(a);
      ((u.Axios = s),
        (u.CanceledError = r(4696)),
        (u.CancelToken = r(8137)),
        (u.isCancel = r(6196)),
        (u.VERSION = r(6198).version),
        (u.toFormData = r(6193)),
        (u.AxiosError = r(3903)),
        (u.Cancel = u.CanceledError),
        (u.all = function (e) {
          return Promise.all(e);
        }),
        (u.spread = r(8138)),
        (u.isAxiosError = r(8139)),
        (e.exports = u),
        (e.exports.default = u));
    },
    8123: function (e, t, r) {
      "use strict";
      var n = r(3060),
        i = r(6191),
        s = r(8124),
        o = r(8125),
        a = r(6197),
        c = r(6195),
        u = r(8136),
        l = u.validators;
      function h(e) {
        ((this.defaults = e),
          (this.interceptors = { request: new s(), response: new s() }));
      }
      ((h.prototype.request = function (e, t) {
        ("string" === typeof e ? ((t = t || {}), (t.url = e)) : (t = e || {}),
          (t = a(this.defaults, t)),
          t.method
            ? (t.method = t.method.toLowerCase())
            : this.defaults.method
              ? (t.method = this.defaults.method.toLowerCase())
              : (t.method = "get"));
        var r = t.transitional;
        void 0 !== r &&
          u.assertOptions(
            r,
            {
              silentJSONParsing: l.transitional(l.boolean),
              forcedJSONParsing: l.transitional(l.boolean),
              clarifyTimeoutError: l.transitional(l.boolean),
            },
            !1,
          );
        var n = [],
          i = !0;
        this.interceptors.request.forEach(function (e) {
          ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
            ((i = i && e.synchronous), n.unshift(e.fulfilled, e.rejected));
        });
        var s,
          c = [];
        if (
          (this.interceptors.response.forEach(function (e) {
            c.push(e.fulfilled, e.rejected);
          }),
          !i)
        ) {
          var h = [o, void 0];
          (Array.prototype.unshift.apply(h, n),
            (h = h.concat(c)),
            (s = Promise.resolve(t)));
          while (h.length) s = s.then(h.shift(), h.shift());
          return s;
        }
        var d = t;
        while (n.length) {
          var f = n.shift(),
            p = n.shift();
          try {
            d = f(d);
          } catch (y) {
            p(y);
            break;
          }
        }
        try {
          s = o(d);
        } catch (y) {
          return Promise.reject(y);
        }
        while (c.length) s = s.then(c.shift(), c.shift());
        return s;
      }),
        (h.prototype.getUri = function (e) {
          e = a(this.defaults, e);
          var t = c(e.baseURL, e.url);
          return i(t, e.params, e.paramsSerializer);
        }),
        n.forEach(["delete", "get", "head", "options"], function (e) {
          h.prototype[e] = function (t, r) {
            return this.request(
              a(r || {}, { method: e, url: t, data: (r || {}).data }),
            );
          };
        }),
        n.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (r, n, i) {
              return this.request(
                a(i || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: r,
                  data: n,
                }),
              );
            };
          }
          ((h.prototype[e] = t()), (h.prototype[e + "Form"] = t(!0)));
        }),
        (e.exports = h));
    },
    8124: function (e, t, r) {
      "use strict";
      var n = r(3060);
      function i() {
        this.handlers = [];
      }
      ((i.prototype.use = function (e, t, r) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!r && r.synchronous,
            runWhen: r ? r.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }),
        (i.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (i.prototype.forEach = function (e) {
          n.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = i));
    },
    8125: function (e, t, r) {
      "use strict";
      var n = r(3060),
        i = r(8126),
        s = r(6196),
        o = r(5249),
        a = r(4696);
      function c(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new a();
      }
      e.exports = function (e) {
        (c(e),
          (e.headers = e.headers || {}),
          (e.data = i.call(e, e.data, e.headers, e.transformRequest)),
          (e.headers = n.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers,
          )),
          n.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (t) {
              delete e.headers[t];
            },
          ));
        var t = e.adapter || o.adapter;
        return t(e).then(
          function (t) {
            return (
              c(e),
              (t.data = i.call(e, t.data, t.headers, e.transformResponse)),
              t
            );
          },
          function (t) {
            return (
              s(t) ||
                (c(e),
                t &&
                  t.response &&
                  (t.response.data = i.call(
                    e,
                    t.response.data,
                    t.response.headers,
                    e.transformResponse,
                  ))),
              Promise.reject(t)
            );
          },
        );
      };
    },
    8126: function (e, t, r) {
      "use strict";
      var n = r(3060),
        i = r(5249);
      e.exports = function (e, t, r) {
        var s = this || i;
        return (
          n.forEach(r, function (r) {
            e = r.call(s, e, t);
          }),
          e
        );
      };
    },
    8127: function (e, t, r) {
      "use strict";
      var n = r(3060);
      e.exports = function (e, t) {
        n.forEach(e, function (r, n) {
          n !== t &&
            n.toUpperCase() === t.toUpperCase() &&
            ((e[t] = r), delete e[n]);
        });
      };
    },
    8128: function (e, t, r) {
      "use strict";
      var n = r(3903);
      e.exports = function (e, t, r) {
        var i = r.config.validateStatus;
        r.status && i && !i(r.status)
          ? t(
              new n(
                "Request failed with status code " + r.status,
                [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r,
              ),
            )
          : e(r);
      };
    },
    8129: function (e, t, r) {
      "use strict";
      var n = r(3060);
      e.exports = n.isStandardBrowserEnv()
        ? (function () {
            return {
              write: function (e, t, r, i, s, o) {
                var a = [];
                (a.push(e + "=" + encodeURIComponent(t)),
                  n.isNumber(r) &&
                    a.push("expires=" + new Date(r).toGMTString()),
                  n.isString(i) && a.push("path=" + i),
                  n.isString(s) && a.push("domain=" + s),
                  !0 === o && a.push("secure"),
                  (document.cookie = a.join("; ")));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            };
          })()
        : (function () {
            return {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
          })();
    },
    8130: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
      };
    },
    8131: function (e, t, r) {
      "use strict";
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    },
    8132: function (e, t, r) {
      "use strict";
      var n = r(3060),
        i = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      e.exports = function (e) {
        var t,
          r,
          s,
          o = {};
        return e
          ? (n.forEach(e.split("\n"), function (e) {
              if (
                ((s = e.indexOf(":")),
                (t = n.trim(e.substr(0, s)).toLowerCase()),
                (r = n.trim(e.substr(s + 1))),
                t)
              ) {
                if (o[t] && i.indexOf(t) >= 0) return;
                o[t] =
                  "set-cookie" === t
                    ? (o[t] ? o[t] : []).concat([r])
                    : o[t]
                      ? o[t] + ", " + r
                      : r;
              }
            }),
            o)
          : o;
      };
    },
    8133: function (e, t, r) {
      "use strict";
      var n = r(3060);
      e.exports = n.isStandardBrowserEnv()
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              r = document.createElement("a");
            function i(e) {
              var n = e;
              return (
                t && (r.setAttribute("href", n), (n = r.href)),
                r.setAttribute("href", n),
                {
                  href: r.href,
                  protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                  host: r.host,
                  search: r.search ? r.search.replace(/^\?/, "") : "",
                  hash: r.hash ? r.hash.replace(/^#/, "") : "",
                  hostname: r.hostname,
                  port: r.port,
                  pathname:
                    "/" === r.pathname.charAt(0)
                      ? r.pathname
                      : "/" + r.pathname,
                }
              );
            }
            return (
              (e = i(window.location.href)),
              function (t) {
                var r = n.isString(t) ? i(t) : t;
                return r.protocol === e.protocol && r.host === e.host;
              }
            );
          })()
        : (function () {
            return function () {
              return !0;
            };
          })();
    },
    8134: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return (t && t[1]) || "";
      };
    },
    8135: function (e, t) {
      e.exports = null;
    },
    8136: function (e, t, r) {
      "use strict";
      var n = r(6198).version,
        i = r(3903),
        s = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          s[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        },
      );
      var o = {};
      function a(e, t, r) {
        if ("object" !== typeof e)
          throw new i("options must be an object", i.ERR_BAD_OPTION_VALUE);
        var n = Object.keys(e),
          s = n.length;
        while (s-- > 0) {
          var o = n[s],
            a = t[o];
          if (a) {
            var c = e[o],
              u = void 0 === c || a(c, o, e);
            if (!0 !== u)
              throw new i(
                "option " + o + " must be " + u,
                i.ERR_BAD_OPTION_VALUE,
              );
          } else if (!0 !== r)
            throw new i("Unknown option " + o, i.ERR_BAD_OPTION);
        }
      }
      ((s.transitional = function (e, t, r) {
        function s(e, t) {
          return (
            "[Axios v" +
            n +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? ". " + r : "")
          );
        }
        return function (r, n, a) {
          if (!1 === e)
            throw new i(
              s(n, " has been removed" + (t ? " in " + t : "")),
              i.ERR_DEPRECATED,
            );
          return (
            t &&
              !o[n] &&
              ((o[n] = !0),
              console.warn(
                s(
                  n,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future",
                ),
              )),
            !e || e(r, n, a)
          );
        };
      }),
        (e.exports = { assertOptions: a, validators: s }));
    },
    8137: function (e, t, r) {
      "use strict";
      var n = r(4696);
      function i(e) {
        if ("function" !== typeof e)
          throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var r = this;
        (this.promise.then(function (e) {
          if (r._listeners) {
            var t,
              n = r._listeners.length;
            for (t = 0; t < n; t++) r._listeners[t](e);
            r._listeners = null;
          }
        }),
          (this.promise.then = function (e) {
            var t,
              n = new Promise(function (e) {
                (r.subscribe(e), (t = e));
              }).then(e);
            return (
              (n.cancel = function () {
                r.unsubscribe(t);
              }),
              n
            );
          }),
          e(function (e) {
            r.reason || ((r.reason = new n(e)), t(r.reason));
          }));
      }
      ((i.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (i.prototype.subscribe = function (e) {
          this.reason
            ? e(this.reason)
            : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
        }),
        (i.prototype.unsubscribe = function (e) {
          if (this._listeners) {
            var t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
        }),
        (i.source = function () {
          var e,
            t = new i(function (t) {
              e = t;
            });
          return { token: t, cancel: e };
        }),
        (e.exports = i));
    },
    8138: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
    8139: function (e, t, r) {
      "use strict";
      var n = r(3060);
      e.exports = function (e) {
        return n.isObject(e) && !0 === e.isAxiosError;
      };
    },
    8140: function (e, t) {
      e.exports = "object" == typeof self ? self.FormData : window.FormData;
    },
  },
]);
