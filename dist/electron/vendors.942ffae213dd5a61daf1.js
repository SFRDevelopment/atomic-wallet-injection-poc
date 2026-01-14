(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [399],
  {
    2699: function (r, t, e) {
      "use strict";
      var n = e(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = n(e(8007)),
        o = n(e(230)),
        i = n(e(794)),
        s = n(e(8008));
      function f(r, t, e) {
        (l(r, t), t.set(r, e));
      }
      function l(r, t) {
        if (t.has(r))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function u(r, t) {
        return r.get(h(r, t));
      }
      function c(r, t, e) {
        return (r.set(h(r, t), e), e);
      }
      function h(r, t, e) {
        if ("function" == typeof r ? r === t : r.has(t))
          return arguments.length < 3 ? t : e;
        throw new TypeError("Private element is not present on this object");
      }
      const w = new i.default(() =>
          Promise.all([
            e.e(47),
            e.e(41),
            e.e(46),
            e.e(123),
            e.e(163),
            e.e(122),
          ]).then(e.t.bind(null, 10499, 7)),
        ),
        d = new i.default(() =>
          Promise.all([e.e(0), e.e(231)]).then(e.t.bind(null, 3959, 7)),
        ),
        y = new i.default(() =>
          Promise.all([e.e(47), e.e(41), e.e(46)]).then(
            e.t.bind(null, 3830, 7),
          ),
        ),
        g = new i.default(() => e.e(290).then(e.t.bind(null, 6809, 7))),
        v = "Waves",
        p = "WAVES",
        A = "m/44'/5741564'/0'/0/0",
        b = 8,
        U = "0";
      var m = new WeakMap();
      class WAVESCoin extends o.default {
        constructor(r) {
          let {
            alias: t,
            notify: e,
            feeData: { fee: n },
            explorers: a,
            txWebUrl: o,
            socket: i,
            id: l,
          } = r;
          const u = {
            id: l,
            alias: t,
            notify: e,
            name: v,
            ticker: p,
            decimal: b,
            unspendableBalance: U,
            explorers: a,
            txWebUrl: o,
            socket: i,
          };
          (super(u),
            f(this, m, void 0),
            (this.derivation = A),
            this.setExplorersModules([s.default]),
            this.loadExplorers(u),
            (this.fee = n),
            (this.transactions = []));
        }
        async loadWallet(r, t) {
          try {
            const { SeedAdapter: r } = await w.get(),
              e = new r(t);
            return (
              c(m, this, await e.getPrivateKey()),
              (this.address = await e.getAddress()),
              { id: this.id, privateKey: u(m, this), address: this.address }
            );
          } catch (e) {
            throw new Error(this.ticker + " privateKey is empty");
          }
        }
        async getPublicKeyArray() {
          const { libs: r } = await d.get(),
            t = r.base58.decode(u(m, this));
          return a.default.getPublicKeyFromPrivate(t);
        }
        async getAddress() {
          if (u(m, this)) {
            const { utils: r } = await d.get();
            return r.crypto.buildRawAddress(await this.getPublicKeyArray());
          }
          return new Error(this.ticker + " privateKey is empty");
        }
        async getPublicAddress() {
          if (u(m, this)) {
            const { libs: r } = await d.get();
            return r.base58.encode(await this.getPublicKeyArray());
          }
          return new Error(this.ticker + " privateKey is empty");
        }
        async validateAddress(r) {
          try {
            const { utils: t } = await d.get();
            return t.crypto.isValidAddress(r);
          } catch (t) {
            throw new Error(`Fail to validate ${this.ticker} address [${r}]`);
          }
        }
        async createTransaction(r) {
          let { address: t, amount: e } = r;
          const n = (await this.getFee()).toNumber(),
            { transfer: a } = await y.get(),
            { binary: o } = await g.get(),
            { utils: i } = await d.get(),
            s = a({
              amount: Number(e),
              recipient: t,
              fee: n,
              senderPublicKey: await this.getPublicAddress(),
            }),
            f = o.serializeTx(s);
          return (
            s.proofs.push(i.crypto.buildTransactionSignature(f, u(m, this))),
            JSON.stringify(s)
          );
        }
        setPrivateKey(r) {
          c(m, this, r);
        }
      }
      t.default = WAVESCoin;
    },
    8007: function (r, t, e) {
      (function (r) {
        "use strict";
        var t = function (r) {
            var t,
              e = new Float64Array(16);
            if (r) for (t = 0; t < r.length; t++) e[t] = r[t];
            return e;
          },
          e = (new Uint8Array(16), new Uint8Array(32));
        e[0] = 9;
        var n = t(),
          a = t([1]),
          o = t([56129, 1]),
          i = t([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          s = t([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ]),
          f = t([
            54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412,
            64982, 57905, 49316, 21502, 52590, 14035, 8553,
          ]),
          l = t([
            26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
            26214, 26214, 26214, 26214, 26214, 26214, 26214,
          ]),
          u = t([
            41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
            153, 11085, 57099, 20417, 9344, 11139,
          ]);
        function c(r, t, e, n) {
          ((r[t] = (e >> 24) & 255),
            (r[t + 1] = (e >> 16) & 255),
            (r[t + 2] = (e >> 8) & 255),
            (r[t + 3] = 255 & e),
            (r[t + 4] = (n >> 24) & 255),
            (r[t + 5] = (n >> 16) & 255),
            (r[t + 6] = (n >> 8) & 255),
            (r[t + 7] = 255 & n));
        }
        function h(r, t, e, n, a) {
          var o,
            i = 0;
          for (o = 0; o < a; o++) i |= r[t + o] ^ e[n + o];
          return (1 & ((i - 1) >>> 8)) - 1;
        }
        function w(r, t, e, n) {
          return h(r, t, e, n, 32);
        }
        function d(r, t) {
          var e;
          for (e = 0; e < 16; e++) r[e] = 0 | t[e];
        }
        function y(r) {
          var t,
            e,
            n = 1;
          for (t = 0; t < 16; t++)
            ((e = r[t] + n + 65535),
              (n = Math.floor(e / 65536)),
              (r[t] = e - 65536 * n));
          r[0] += n - 1 + 37 * (n - 1);
        }
        function g(r, t, e) {
          for (var n, a = ~(e - 1), o = 0; o < 16; o++)
            ((n = a & (r[o] ^ t[o])), (r[o] ^= n), (t[o] ^= n));
        }
        function v(r, e) {
          var n,
            a,
            o,
            i = t(),
            s = t();
          for (n = 0; n < 16; n++) s[n] = e[n];
          for (y(s), y(s), y(s), a = 0; a < 2; a++) {
            for (i[0] = s[0] - 65517, n = 1; n < 15; n++)
              ((i[n] = s[n] - 65535 - ((i[n - 1] >> 16) & 1)),
                (i[n - 1] &= 65535));
            ((i[15] = s[15] - 32767 - ((i[14] >> 16) & 1)),
              (o = (i[15] >> 16) & 1),
              (i[14] &= 65535),
              g(s, i, 1 - o));
          }
          for (n = 0; n < 16; n++)
            ((r[2 * n] = 255 & s[n]), (r[2 * n + 1] = s[n] >> 8));
        }
        function p(r, t) {
          var e = new Uint8Array(32),
            n = new Uint8Array(32);
          return (v(e, r), v(n, t), w(e, 0, n, 0));
        }
        function A(r) {
          var t = new Uint8Array(32);
          return (v(t, r), 1 & t[0]);
        }
        function b(r, t) {
          var e;
          for (e = 0; e < 16; e++) r[e] = t[2 * e] + (t[2 * e + 1] << 8);
          r[15] &= 32767;
        }
        function U(r, t, e) {
          for (var n = 0; n < 16; n++) r[n] = t[n] + e[n];
        }
        function m(r, t, e) {
          for (var n = 0; n < 16; n++) r[n] = t[n] - e[n];
        }
        function M(r, t, e) {
          var n,
            a,
            o = 0,
            i = 0,
            s = 0,
            f = 0,
            l = 0,
            u = 0,
            c = 0,
            h = 0,
            w = 0,
            d = 0,
            y = 0,
            g = 0,
            v = 0,
            p = 0,
            A = 0,
            b = 0,
            U = 0,
            m = 0,
            M = 0,
            x = 0,
            T = 0,
            E = 0,
            k = 0,
            P = 0,
            K = 0,
            S = 0,
            N = 0,
            W = 0,
            F = 0,
            B = 0,
            I = 0,
            O = e[0],
            j = e[1],
            C = e[2],
            D = e[3],
            R = e[4],
            V = e[5],
            $ = e[6],
            J = e[7],
            L = e[8],
            _ = e[9],
            z = e[10],
            H = e[11],
            q = e[12],
            G = e[13],
            Q = e[14],
            X = e[15];
          ((n = t[0]),
            (o += n * O),
            (i += n * j),
            (s += n * C),
            (f += n * D),
            (l += n * R),
            (u += n * V),
            (c += n * $),
            (h += n * J),
            (w += n * L),
            (d += n * _),
            (y += n * z),
            (g += n * H),
            (v += n * q),
            (p += n * G),
            (A += n * Q),
            (b += n * X),
            (n = t[1]),
            (i += n * O),
            (s += n * j),
            (f += n * C),
            (l += n * D),
            (u += n * R),
            (c += n * V),
            (h += n * $),
            (w += n * J),
            (d += n * L),
            (y += n * _),
            (g += n * z),
            (v += n * H),
            (p += n * q),
            (A += n * G),
            (b += n * Q),
            (U += n * X),
            (n = t[2]),
            (s += n * O),
            (f += n * j),
            (l += n * C),
            (u += n * D),
            (c += n * R),
            (h += n * V),
            (w += n * $),
            (d += n * J),
            (y += n * L),
            (g += n * _),
            (v += n * z),
            (p += n * H),
            (A += n * q),
            (b += n * G),
            (U += n * Q),
            (m += n * X),
            (n = t[3]),
            (f += n * O),
            (l += n * j),
            (u += n * C),
            (c += n * D),
            (h += n * R),
            (w += n * V),
            (d += n * $),
            (y += n * J),
            (g += n * L),
            (v += n * _),
            (p += n * z),
            (A += n * H),
            (b += n * q),
            (U += n * G),
            (m += n * Q),
            (M += n * X),
            (n = t[4]),
            (l += n * O),
            (u += n * j),
            (c += n * C),
            (h += n * D),
            (w += n * R),
            (d += n * V),
            (y += n * $),
            (g += n * J),
            (v += n * L),
            (p += n * _),
            (A += n * z),
            (b += n * H),
            (U += n * q),
            (m += n * G),
            (M += n * Q),
            (x += n * X),
            (n = t[5]),
            (u += n * O),
            (c += n * j),
            (h += n * C),
            (w += n * D),
            (d += n * R),
            (y += n * V),
            (g += n * $),
            (v += n * J),
            (p += n * L),
            (A += n * _),
            (b += n * z),
            (U += n * H),
            (m += n * q),
            (M += n * G),
            (x += n * Q),
            (T += n * X),
            (n = t[6]),
            (c += n * O),
            (h += n * j),
            (w += n * C),
            (d += n * D),
            (y += n * R),
            (g += n * V),
            (v += n * $),
            (p += n * J),
            (A += n * L),
            (b += n * _),
            (U += n * z),
            (m += n * H),
            (M += n * q),
            (x += n * G),
            (T += n * Q),
            (E += n * X),
            (n = t[7]),
            (h += n * O),
            (w += n * j),
            (d += n * C),
            (y += n * D),
            (g += n * R),
            (v += n * V),
            (p += n * $),
            (A += n * J),
            (b += n * L),
            (U += n * _),
            (m += n * z),
            (M += n * H),
            (x += n * q),
            (T += n * G),
            (E += n * Q),
            (k += n * X),
            (n = t[8]),
            (w += n * O),
            (d += n * j),
            (y += n * C),
            (g += n * D),
            (v += n * R),
            (p += n * V),
            (A += n * $),
            (b += n * J),
            (U += n * L),
            (m += n * _),
            (M += n * z),
            (x += n * H),
            (T += n * q),
            (E += n * G),
            (k += n * Q),
            (P += n * X),
            (n = t[9]),
            (d += n * O),
            (y += n * j),
            (g += n * C),
            (v += n * D),
            (p += n * R),
            (A += n * V),
            (b += n * $),
            (U += n * J),
            (m += n * L),
            (M += n * _),
            (x += n * z),
            (T += n * H),
            (E += n * q),
            (k += n * G),
            (P += n * Q),
            (K += n * X),
            (n = t[10]),
            (y += n * O),
            (g += n * j),
            (v += n * C),
            (p += n * D),
            (A += n * R),
            (b += n * V),
            (U += n * $),
            (m += n * J),
            (M += n * L),
            (x += n * _),
            (T += n * z),
            (E += n * H),
            (k += n * q),
            (P += n * G),
            (K += n * Q),
            (S += n * X),
            (n = t[11]),
            (g += n * O),
            (v += n * j),
            (p += n * C),
            (A += n * D),
            (b += n * R),
            (U += n * V),
            (m += n * $),
            (M += n * J),
            (x += n * L),
            (T += n * _),
            (E += n * z),
            (k += n * H),
            (P += n * q),
            (K += n * G),
            (S += n * Q),
            (N += n * X),
            (n = t[12]),
            (v += n * O),
            (p += n * j),
            (A += n * C),
            (b += n * D),
            (U += n * R),
            (m += n * V),
            (M += n * $),
            (x += n * J),
            (T += n * L),
            (E += n * _),
            (k += n * z),
            (P += n * H),
            (K += n * q),
            (S += n * G),
            (N += n * Q),
            (W += n * X),
            (n = t[13]),
            (p += n * O),
            (A += n * j),
            (b += n * C),
            (U += n * D),
            (m += n * R),
            (M += n * V),
            (x += n * $),
            (T += n * J),
            (E += n * L),
            (k += n * _),
            (P += n * z),
            (K += n * H),
            (S += n * q),
            (N += n * G),
            (W += n * Q),
            (F += n * X),
            (n = t[14]),
            (A += n * O),
            (b += n * j),
            (U += n * C),
            (m += n * D),
            (M += n * R),
            (x += n * V),
            (T += n * $),
            (E += n * J),
            (k += n * L),
            (P += n * _),
            (K += n * z),
            (S += n * H),
            (N += n * q),
            (W += n * G),
            (F += n * Q),
            (B += n * X),
            (n = t[15]),
            (b += n * O),
            (U += n * j),
            (m += n * C),
            (M += n * D),
            (x += n * R),
            (T += n * V),
            (E += n * $),
            (k += n * J),
            (P += n * L),
            (K += n * _),
            (S += n * z),
            (N += n * H),
            (W += n * q),
            (F += n * G),
            (B += n * Q),
            (I += n * X),
            (o += 38 * U),
            (i += 38 * m),
            (s += 38 * M),
            (f += 38 * x),
            (l += 38 * T),
            (u += 38 * E),
            (c += 38 * k),
            (h += 38 * P),
            (w += 38 * K),
            (d += 38 * S),
            (y += 38 * N),
            (g += 38 * W),
            (v += 38 * F),
            (p += 38 * B),
            (A += 38 * I),
            (a = 1),
            (n = o + a + 65535),
            (a = Math.floor(n / 65536)),
            (o = n - 65536 * a),
            (n = i + a + 65535),
            (a = Math.floor(n / 65536)),
            (i = n - 65536 * a),
            (n = s + a + 65535),
            (a = Math.floor(n / 65536)),
            (s = n - 65536 * a),
            (n = f + a + 65535),
            (a = Math.floor(n / 65536)),
            (f = n - 65536 * a),
            (n = l + a + 65535),
            (a = Math.floor(n / 65536)),
            (l = n - 65536 * a),
            (n = u + a + 65535),
            (a = Math.floor(n / 65536)),
            (u = n - 65536 * a),
            (n = c + a + 65535),
            (a = Math.floor(n / 65536)),
            (c = n - 65536 * a),
            (n = h + a + 65535),
            (a = Math.floor(n / 65536)),
            (h = n - 65536 * a),
            (n = w + a + 65535),
            (a = Math.floor(n / 65536)),
            (w = n - 65536 * a),
            (n = d + a + 65535),
            (a = Math.floor(n / 65536)),
            (d = n - 65536 * a),
            (n = y + a + 65535),
            (a = Math.floor(n / 65536)),
            (y = n - 65536 * a),
            (n = g + a + 65535),
            (a = Math.floor(n / 65536)),
            (g = n - 65536 * a),
            (n = v + a + 65535),
            (a = Math.floor(n / 65536)),
            (v = n - 65536 * a),
            (n = p + a + 65535),
            (a = Math.floor(n / 65536)),
            (p = n - 65536 * a),
            (n = A + a + 65535),
            (a = Math.floor(n / 65536)),
            (A = n - 65536 * a),
            (n = b + a + 65535),
            (a = Math.floor(n / 65536)),
            (b = n - 65536 * a),
            (o += a - 1 + 37 * (a - 1)),
            (a = 1),
            (n = o + a + 65535),
            (a = Math.floor(n / 65536)),
            (o = n - 65536 * a),
            (n = i + a + 65535),
            (a = Math.floor(n / 65536)),
            (i = n - 65536 * a),
            (n = s + a + 65535),
            (a = Math.floor(n / 65536)),
            (s = n - 65536 * a),
            (n = f + a + 65535),
            (a = Math.floor(n / 65536)),
            (f = n - 65536 * a),
            (n = l + a + 65535),
            (a = Math.floor(n / 65536)),
            (l = n - 65536 * a),
            (n = u + a + 65535),
            (a = Math.floor(n / 65536)),
            (u = n - 65536 * a),
            (n = c + a + 65535),
            (a = Math.floor(n / 65536)),
            (c = n - 65536 * a),
            (n = h + a + 65535),
            (a = Math.floor(n / 65536)),
            (h = n - 65536 * a),
            (n = w + a + 65535),
            (a = Math.floor(n / 65536)),
            (w = n - 65536 * a),
            (n = d + a + 65535),
            (a = Math.floor(n / 65536)),
            (d = n - 65536 * a),
            (n = y + a + 65535),
            (a = Math.floor(n / 65536)),
            (y = n - 65536 * a),
            (n = g + a + 65535),
            (a = Math.floor(n / 65536)),
            (g = n - 65536 * a),
            (n = v + a + 65535),
            (a = Math.floor(n / 65536)),
            (v = n - 65536 * a),
            (n = p + a + 65535),
            (a = Math.floor(n / 65536)),
            (p = n - 65536 * a),
            (n = A + a + 65535),
            (a = Math.floor(n / 65536)),
            (A = n - 65536 * a),
            (n = b + a + 65535),
            (a = Math.floor(n / 65536)),
            (b = n - 65536 * a),
            (o += a - 1 + 37 * (a - 1)),
            (r[0] = o),
            (r[1] = i),
            (r[2] = s),
            (r[3] = f),
            (r[4] = l),
            (r[5] = u),
            (r[6] = c),
            (r[7] = h),
            (r[8] = w),
            (r[9] = d),
            (r[10] = y),
            (r[11] = g),
            (r[12] = v),
            (r[13] = p),
            (r[14] = A),
            (r[15] = b));
        }
        function x(r, t) {
          M(r, t, t);
        }
        function T(r, e) {
          var n,
            a = t();
          for (n = 0; n < 16; n++) a[n] = e[n];
          for (n = 253; n >= 0; n--)
            (x(a, a), 2 !== n && 4 !== n && M(a, a, e));
          for (n = 0; n < 16; n++) r[n] = a[n];
        }
        function E(r, e) {
          var n,
            a = t();
          for (n = 0; n < 16; n++) a[n] = e[n];
          for (n = 250; n >= 0; n--) (x(a, a), 1 !== n && M(a, a, e));
          for (n = 0; n < 16; n++) r[n] = a[n];
        }
        function k(r, e, n) {
          var a,
            i,
            s = new Uint8Array(32),
            f = new Float64Array(80),
            l = t(),
            u = t(),
            c = t(),
            h = t(),
            w = t(),
            d = t();
          for (i = 0; i < 31; i++) s[i] = e[i];
          for (
            s[31] = (127 & e[31]) | 64, s[0] &= 248, b(f, n), i = 0;
            i < 16;
            i++
          )
            ((u[i] = f[i]), (h[i] = l[i] = c[i] = 0));
          for (l[0] = h[0] = 1, i = 254; i >= 0; --i)
            ((a = (s[i >>> 3] >>> (7 & i)) & 1),
              g(l, u, a),
              g(c, h, a),
              U(w, l, c),
              m(l, l, c),
              U(c, u, h),
              m(u, u, h),
              x(h, w),
              x(d, l),
              M(l, c, l),
              M(c, u, w),
              U(w, l, c),
              m(l, l, c),
              x(u, l),
              m(c, h, d),
              M(l, c, o),
              U(l, l, h),
              M(c, c, l),
              M(l, h, d),
              M(h, u, f),
              x(u, w),
              g(l, u, a),
              g(c, h, a));
          for (i = 0; i < 16; i++)
            ((f[i + 16] = l[i]),
              (f[i + 32] = c[i]),
              (f[i + 48] = u[i]),
              (f[i + 64] = h[i]));
          var y = f.subarray(32),
            p = f.subarray(16);
          return (T(y, y), M(p, p, y), v(r, p), 0);
        }
        function P(r, t) {
          return k(r, t, e);
        }
        var K = [
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
        function S(r, t, e, n) {
          var a,
            o,
            i,
            s,
            f,
            l,
            u,
            c,
            h,
            w,
            d,
            y,
            g,
            v,
            p,
            A,
            b,
            U,
            m,
            M,
            x,
            T,
            E,
            k,
            P,
            S,
            N = new Int32Array(16),
            W = new Int32Array(16),
            F = r[0],
            B = r[1],
            I = r[2],
            O = r[3],
            j = r[4],
            C = r[5],
            D = r[6],
            R = r[7],
            V = t[0],
            $ = t[1],
            J = t[2],
            L = t[3],
            _ = t[4],
            z = t[5],
            H = t[6],
            q = t[7],
            G = 0;
          while (n >= 128) {
            for (m = 0; m < 16; m++)
              ((M = 8 * m + G),
                (N[m] =
                  (e[M + 0] << 24) |
                  (e[M + 1] << 16) |
                  (e[M + 2] << 8) |
                  e[M + 3]),
                (W[m] =
                  (e[M + 4] << 24) |
                  (e[M + 5] << 16) |
                  (e[M + 6] << 8) |
                  e[M + 7]));
            for (m = 0; m < 80; m++)
              if (
                ((a = F),
                (o = B),
                (i = I),
                (s = O),
                (f = j),
                (l = C),
                (u = D),
                (c = R),
                (h = V),
                (w = $),
                (d = J),
                (y = L),
                (g = _),
                (v = z),
                (p = H),
                (A = q),
                (x = R),
                (T = q),
                (E = 65535 & T),
                (k = T >>> 16),
                (P = 65535 & x),
                (S = x >>> 16),
                (x =
                  ((j >>> 14) | (_ << 18)) ^
                  ((j >>> 18) | (_ << 14)) ^
                  ((_ >>> 9) | (j << 23))),
                (T =
                  ((_ >>> 14) | (j << 18)) ^
                  ((_ >>> 18) | (j << 14)) ^
                  ((j >>> 9) | (_ << 23))),
                (E += 65535 & T),
                (k += T >>> 16),
                (P += 65535 & x),
                (S += x >>> 16),
                (x = (j & C) ^ (~j & D)),
                (T = (_ & z) ^ (~_ & H)),
                (E += 65535 & T),
                (k += T >>> 16),
                (P += 65535 & x),
                (S += x >>> 16),
                (x = K[2 * m]),
                (T = K[2 * m + 1]),
                (E += 65535 & T),
                (k += T >>> 16),
                (P += 65535 & x),
                (S += x >>> 16),
                (x = N[m % 16]),
                (T = W[m % 16]),
                (E += 65535 & T),
                (k += T >>> 16),
                (P += 65535 & x),
                (S += x >>> 16),
                (k += E >>> 16),
                (P += k >>> 16),
                (S += P >>> 16),
                (b = (65535 & P) | (S << 16)),
                (U = (65535 & E) | (k << 16)),
                (x = b),
                (T = U),
                (E = 65535 & T),
                (k = T >>> 16),
                (P = 65535 & x),
                (S = x >>> 16),
                (x =
                  ((F >>> 28) | (V << 4)) ^
                  ((V >>> 2) | (F << 30)) ^
                  ((V >>> 7) | (F << 25))),
                (T =
                  ((V >>> 28) | (F << 4)) ^
                  ((F >>> 2) | (V << 30)) ^
                  ((F >>> 7) | (V << 25))),
                (E += 65535 & T),
                (k += T >>> 16),
                (P += 65535 & x),
                (S += x >>> 16),
                (x = (F & B) ^ (F & I) ^ (B & I)),
                (T = (V & $) ^ (V & J) ^ ($ & J)),
                (E += 65535 & T),
                (k += T >>> 16),
                (P += 65535 & x),
                (S += x >>> 16),
                (k += E >>> 16),
                (P += k >>> 16),
                (S += P >>> 16),
                (c = (65535 & P) | (S << 16)),
                (A = (65535 & E) | (k << 16)),
                (x = s),
                (T = y),
                (E = 65535 & T),
                (k = T >>> 16),
                (P = 65535 & x),
                (S = x >>> 16),
                (x = b),
                (T = U),
                (E += 65535 & T),
                (k += T >>> 16),
                (P += 65535 & x),
                (S += x >>> 16),
                (k += E >>> 16),
                (P += k >>> 16),
                (S += P >>> 16),
                (s = (65535 & P) | (S << 16)),
                (y = (65535 & E) | (k << 16)),
                (B = a),
                (I = o),
                (O = i),
                (j = s),
                (C = f),
                (D = l),
                (R = u),
                (F = c),
                ($ = h),
                (J = w),
                (L = d),
                (_ = y),
                (z = g),
                (H = v),
                (q = p),
                (V = A),
                m % 16 === 15)
              )
                for (M = 0; M < 16; M++)
                  ((x = N[M]),
                    (T = W[M]),
                    (E = 65535 & T),
                    (k = T >>> 16),
                    (P = 65535 & x),
                    (S = x >>> 16),
                    (x = N[(M + 9) % 16]),
                    (T = W[(M + 9) % 16]),
                    (E += 65535 & T),
                    (k += T >>> 16),
                    (P += 65535 & x),
                    (S += x >>> 16),
                    (b = N[(M + 1) % 16]),
                    (U = W[(M + 1) % 16]),
                    (x =
                      ((b >>> 1) | (U << 31)) ^
                      ((b >>> 8) | (U << 24)) ^
                      (b >>> 7)),
                    (T =
                      ((U >>> 1) | (b << 31)) ^
                      ((U >>> 8) | (b << 24)) ^
                      ((U >>> 7) | (b << 25))),
                    (E += 65535 & T),
                    (k += T >>> 16),
                    (P += 65535 & x),
                    (S += x >>> 16),
                    (b = N[(M + 14) % 16]),
                    (U = W[(M + 14) % 16]),
                    (x =
                      ((b >>> 19) | (U << 13)) ^
                      ((U >>> 29) | (b << 3)) ^
                      (b >>> 6)),
                    (T =
                      ((U >>> 19) | (b << 13)) ^
                      ((b >>> 29) | (U << 3)) ^
                      ((U >>> 6) | (b << 26))),
                    (E += 65535 & T),
                    (k += T >>> 16),
                    (P += 65535 & x),
                    (S += x >>> 16),
                    (k += E >>> 16),
                    (P += k >>> 16),
                    (S += P >>> 16),
                    (N[M] = (65535 & P) | (S << 16)),
                    (W[M] = (65535 & E) | (k << 16)));
            ((x = F),
              (T = V),
              (E = 65535 & T),
              (k = T >>> 16),
              (P = 65535 & x),
              (S = x >>> 16),
              (x = r[0]),
              (T = t[0]),
              (E += 65535 & T),
              (k += T >>> 16),
              (P += 65535 & x),
              (S += x >>> 16),
              (k += E >>> 16),
              (P += k >>> 16),
              (S += P >>> 16),
              (r[0] = F = (65535 & P) | (S << 16)),
              (t[0] = V = (65535 & E) | (k << 16)),
              (x = B),
              (T = $),
              (E = 65535 & T),
              (k = T >>> 16),
              (P = 65535 & x),
              (S = x >>> 16),
              (x = r[1]),
              (T = t[1]),
              (E += 65535 & T),
              (k += T >>> 16),
              (P += 65535 & x),
              (S += x >>> 16),
              (k += E >>> 16),
              (P += k >>> 16),
              (S += P >>> 16),
              (r[1] = B = (65535 & P) | (S << 16)),
              (t[1] = $ = (65535 & E) | (k << 16)),
              (x = I),
              (T = J),
              (E = 65535 & T),
              (k = T >>> 16),
              (P = 65535 & x),
              (S = x >>> 16),
              (x = r[2]),
              (T = t[2]),
              (E += 65535 & T),
              (k += T >>> 16),
              (P += 65535 & x),
              (S += x >>> 16),
              (k += E >>> 16),
              (P += k >>> 16),
              (S += P >>> 16),
              (r[2] = I = (65535 & P) | (S << 16)),
              (t[2] = J = (65535 & E) | (k << 16)),
              (x = O),
              (T = L),
              (E = 65535 & T),
              (k = T >>> 16),
              (P = 65535 & x),
              (S = x >>> 16),
              (x = r[3]),
              (T = t[3]),
              (E += 65535 & T),
              (k += T >>> 16),
              (P += 65535 & x),
              (S += x >>> 16),
              (k += E >>> 16),
              (P += k >>> 16),
              (S += P >>> 16),
              (r[3] = O = (65535 & P) | (S << 16)),
              (t[3] = L = (65535 & E) | (k << 16)),
              (x = j),
              (T = _),
              (E = 65535 & T),
              (k = T >>> 16),
              (P = 65535 & x),
              (S = x >>> 16),
              (x = r[4]),
              (T = t[4]),
              (E += 65535 & T),
              (k += T >>> 16),
              (P += 65535 & x),
              (S += x >>> 16),
              (k += E >>> 16),
              (P += k >>> 16),
              (S += P >>> 16),
              (r[4] = j = (65535 & P) | (S << 16)),
              (t[4] = _ = (65535 & E) | (k << 16)),
              (x = C),
              (T = z),
              (E = 65535 & T),
              (k = T >>> 16),
              (P = 65535 & x),
              (S = x >>> 16),
              (x = r[5]),
              (T = t[5]),
              (E += 65535 & T),
              (k += T >>> 16),
              (P += 65535 & x),
              (S += x >>> 16),
              (k += E >>> 16),
              (P += k >>> 16),
              (S += P >>> 16),
              (r[5] = C = (65535 & P) | (S << 16)),
              (t[5] = z = (65535 & E) | (k << 16)),
              (x = D),
              (T = H),
              (E = 65535 & T),
              (k = T >>> 16),
              (P = 65535 & x),
              (S = x >>> 16),
              (x = r[6]),
              (T = t[6]),
              (E += 65535 & T),
              (k += T >>> 16),
              (P += 65535 & x),
              (S += x >>> 16),
              (k += E >>> 16),
              (P += k >>> 16),
              (S += P >>> 16),
              (r[6] = D = (65535 & P) | (S << 16)),
              (t[6] = H = (65535 & E) | (k << 16)),
              (x = R),
              (T = q),
              (E = 65535 & T),
              (k = T >>> 16),
              (P = 65535 & x),
              (S = x >>> 16),
              (x = r[7]),
              (T = t[7]),
              (E += 65535 & T),
              (k += T >>> 16),
              (P += 65535 & x),
              (S += x >>> 16),
              (k += E >>> 16),
              (P += k >>> 16),
              (S += P >>> 16),
              (r[7] = R = (65535 & P) | (S << 16)),
              (t[7] = q = (65535 & E) | (k << 16)),
              (G += 128),
              (n -= 128));
          }
          return n;
        }
        function N(r, t, e) {
          var n,
            a = new Int32Array(8),
            o = new Int32Array(8),
            i = new Uint8Array(256),
            s = e;
          for (
            a[0] = 1779033703,
              a[1] = 3144134277,
              a[2] = 1013904242,
              a[3] = 2773480762,
              a[4] = 1359893119,
              a[5] = 2600822924,
              a[6] = 528734635,
              a[7] = 1541459225,
              o[0] = 4089235720,
              o[1] = 2227873595,
              o[2] = 4271175723,
              o[3] = 1595750129,
              o[4] = 2917565137,
              o[5] = 725511199,
              o[6] = 4215389547,
              o[7] = 327033209,
              S(a, o, t, e),
              e %= 128,
              n = 0;
            n < e;
            n++
          )
            i[n] = t[s - e + n];
          for (
            i[e] = 128,
              e = 256 - 128 * (e < 112 ? 1 : 0),
              i[e - 9] = 0,
              c(i, e - 8, (s / 536870912) | 0, s << 3),
              S(a, o, i, e),
              n = 0;
            n < 8;
            n++
          )
            c(r, 8 * n, a[n], o[n]);
          return 0;
        }
        function W(r, e) {
          var n = t(),
            a = t(),
            o = t(),
            i = t(),
            f = t(),
            l = t(),
            u = t(),
            c = t(),
            h = t();
          (m(n, r[1], r[0]),
            m(h, e[1], e[0]),
            M(n, n, h),
            U(a, r[0], r[1]),
            U(h, e[0], e[1]),
            M(a, a, h),
            M(o, r[3], e[3]),
            M(o, o, s),
            M(i, r[2], e[2]),
            U(i, i, i),
            m(f, a, n),
            m(l, i, o),
            U(u, i, o),
            U(c, a, n),
            M(r[0], f, l),
            M(r[1], c, u),
            M(r[2], u, l),
            M(r[3], f, c));
        }
        function F(r, t, e) {
          var n;
          for (n = 0; n < 4; n++) g(r[n], t[n], e);
        }
        function B(r, e) {
          var n = t(),
            a = t(),
            o = t();
          (T(o, e[2]),
            M(n, e[0], o),
            M(a, e[1], o),
            v(r, a),
            (r[31] ^= A(n) << 7));
        }
        function I(r, t, e) {
          var o, i;
          for (
            d(r[0], n), d(r[1], a), d(r[2], a), d(r[3], n), i = 255;
            i >= 0;
            --i
          )
            ((o = (e[(i / 8) | 0] >> (7 & i)) & 1),
              F(r, t, o),
              W(t, r),
              W(r, r),
              F(r, t, o));
        }
        function O(r, e) {
          var n = [t(), t(), t(), t()];
          (d(n[0], f), d(n[1], l), d(n[2], a), M(n[3], f, l), I(r, n, e));
        }
        var j = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
          20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
        ]);
        function C(r, t) {
          var e, n, a, o;
          for (n = 63; n >= 32; --n) {
            for (e = 0, a = n - 32, o = n - 12; a < o; ++a)
              ((t[a] += e - 16 * t[n] * j[a - (n - 32)]),
                (e = (t[a] + 128) >> 8),
                (t[a] -= 256 * e));
            ((t[a] += e), (t[n] = 0));
          }
          for (e = 0, a = 0; a < 32; a++)
            ((t[a] += e - (t[31] >> 4) * j[a]), (e = t[a] >> 8), (t[a] &= 255));
          for (a = 0; a < 32; a++) t[a] -= e * j[a];
          for (n = 0; n < 32; n++)
            ((t[n + 1] += t[n] >> 8), (r[n] = 255 & t[n]));
        }
        function D(r) {
          var t,
            e = new Float64Array(64);
          for (t = 0; t < 64; t++) e[t] = r[t];
          for (t = 0; t < 64; t++) r[t] = 0;
          C(r, e);
        }
        function R(r, e, n, a) {
          new Uint8Array(64);
          var o,
            i,
            s = new Uint8Array(64),
            f = new Uint8Array(64),
            l = new Float64Array(64),
            u = [t(), t(), t(), t()];
          for (o = 0; o < n; o++) r[64 + o] = e[o];
          for (o = 0; o < 32; o++) r[32 + o] = a[o];
          for (
            N(f, r.subarray(32), n + 32), D(f), O(u, f), B(r, u), o = 0;
            o < 32;
            o++
          )
            r[o + 32] = a[32 + o];
          for (N(s, r, n + 64), D(s), o = 0; o < 64; o++) l[o] = 0;
          for (o = 0; o < 32; o++) l[o] = f[o];
          for (o = 0; o < 32; o++)
            for (i = 0; i < 32; i++) l[o + i] += s[o] * a[i];
          return (C(r.subarray(32), l), n + 64);
        }
        function V(r, e, n, a, o) {
          new Uint8Array(64);
          var i,
            s,
            f = new Uint8Array(64),
            l = new Uint8Array(64),
            u = new Float64Array(64),
            c = [t(), t(), t(), t()];
          for (r[0] = 254, i = 1; i < 32; i++) r[i] = 255;
          for (i = 0; i < 32; i++) r[32 + i] = a[i];
          for (i = 0; i < n; i++) r[64 + i] = e[i];
          for (i = 0; i < 64; i++) r[n + 64 + i] = o[i];
          for (N(l, r, n + 128), D(l), O(c, l), B(r, c), i = 0; i < 32; i++)
            r[i + 32] = a[32 + i];
          for (N(f, r, n + 64), D(f), i = 0; i < 64; i++) r[n + 64 + i] = 0;
          for (i = 0; i < 64; i++) u[i] = 0;
          for (i = 0; i < 32; i++) u[i] = l[i];
          for (i = 0; i < 32; i++)
            for (s = 0; s < 32; s++) u[i + s] += f[i] * a[s];
          return (C(r.subarray(32, n + 64), u), n + 64);
        }
        function $(r, e, n, a, o) {
          for (
            var i = new Uint8Array(64), s = [t(), t(), t(), t()], f = 0;
            f < 32;
            f++
          )
            i[f] = a[f];
          ((i[0] &= 248),
            (i[31] &= 127),
            (i[31] |= 64),
            O(s, i),
            B(i.subarray(32), s));
          var l,
            u = 128 & i[63];
          return ((l = o ? V(r, e, n, i, o) : R(r, e, n, i)), (r[63] |= u), l);
        }
        function J(r, e) {
          var o = t(),
            s = t(),
            f = t(),
            l = t(),
            c = t(),
            h = t(),
            w = t();
          return (
            d(r[2], a),
            b(r[1], e),
            x(f, r[1]),
            M(l, f, i),
            m(f, f, r[2]),
            U(l, r[2], l),
            x(c, l),
            x(h, c),
            M(w, h, c),
            M(o, w, f),
            M(o, o, l),
            E(o, o),
            M(o, o, f),
            M(o, o, l),
            M(o, o, l),
            M(r[0], o, l),
            x(s, r[0]),
            M(s, s, l),
            p(s, f) && M(r[0], r[0], u),
            x(s, r[0]),
            M(s, s, l),
            p(s, f)
              ? -1
              : (A(r[0]) === e[31] >> 7 && m(r[0], n, r[0]),
                M(r[3], r[0], r[1]),
                0)
          );
        }
        function L(r, e, n, a) {
          var o,
            i,
            s = new Uint8Array(32),
            f = new Uint8Array(64),
            l = [t(), t(), t(), t()],
            u = [t(), t(), t(), t()];
          if (((i = -1), n < 64)) return -1;
          if (J(u, a)) return -1;
          for (o = 0; o < n; o++) r[o] = e[o];
          for (o = 0; o < 32; o++) r[o + 32] = a[o];
          if (
            (N(f, r, n),
            D(f),
            I(l, u, f),
            O(u, e.subarray(32)),
            W(l, u),
            B(s, l),
            (n -= 64),
            w(e, 0, s, 0))
          ) {
            for (o = 0; o < n; o++) r[o] = 0;
            return -1;
          }
          for (o = 0; o < n; o++) r[o] = e[o + 64];
          return ((i = n), i);
        }
        function _(r) {
          var e = new Uint8Array(32),
            n = t(),
            o = t(),
            i = t();
          return (
            b(n, r),
            U(o, n, a),
            m(i, n, a),
            T(o, o),
            M(o, o, i),
            v(e, o),
            e
          );
        }
        function z(r, t, e, n) {
          var a = _(n);
          return ((a[31] |= 128 & t[63]), (t[63] &= 127), L(r, t, e, a));
        }
        function H() {
          var r, t;
          for (t = 0; t < arguments.length; t++)
            if (
              "[object Uint8Array]" !==
              (r = Object.prototype.toString.call(arguments[t]))
            )
              throw new TypeError("unexpected type " + r + ", use Uint8Array");
        }
        ((r.sharedKey = function (r, t) {
          if ((H(t, r), 32 !== t.length))
            throw new Error("wrong public key length");
          if (32 !== r.length) throw new Error("wrong secret key length");
          var e = new Uint8Array(32);
          return (k(e, r, t), e);
        }),
          (r.signMessage = function (r, t, e) {
            if ((H(t, r), 32 !== r.length))
              throw new Error("wrong secret key length");
            if (e) {
              if ((H(e), 64 !== e.length))
                throw new Error("wrong random data length");
              var n = new Uint8Array(128 + t.length);
              return (
                $(n, t, t.length, r, e),
                new Uint8Array(n.subarray(0, 64 + t.length))
              );
            }
            var a = new Uint8Array(64 + t.length);
            return ($(a, t, t.length, r), a);
          }),
          (r.openMessage = function (r, t) {
            if ((H(t, r), 32 !== r.length))
              throw new Error("wrong public key length");
            var e = new Uint8Array(t.length),
              n = z(e, t, t.length, r);
            if (n < 0) return null;
            for (var a = new Uint8Array(n), o = 0; o < a.length; o++)
              a[o] = e[o];
            return a;
          }),
          (r.sign = function (r, t, e) {
            if ((H(r, t), 32 !== r.length))
              throw new Error("wrong secret key length");
            if (e && (H(e), 64 !== e.length))
              throw new Error("wrong random data length");
            var n = new Uint8Array((e ? 128 : 64) + t.length);
            $(n, t, t.length, r, e);
            for (var a = new Uint8Array(64), o = 0; o < a.length; o++)
              a[o] = n[o];
            return a;
          }),
          (r.verify = function (r, t, e) {
            if ((H(t, e, r), 64 !== e.length))
              throw new Error("wrong signature length");
            if (32 !== r.length) throw new Error("wrong public key length");
            var n,
              a = new Uint8Array(64 + t.length),
              o = new Uint8Array(64 + t.length);
            for (n = 0; n < 64; n++) a[n] = e[n];
            for (n = 0; n < t.length; n++) a[n + 64] = t[n];
            return z(o, a, a.length, r) >= 0;
          }),
          (r.generateKeyPair = function (r) {
            if ((H(r), 32 !== r.length)) throw new Error("wrong seed length");
            for (
              var t = new Uint8Array(32), e = new Uint8Array(32), n = 0;
              n < 32;
              n++
            )
              t[n] = r[n];
            return (
              P(e, t),
              (t[0] &= 248),
              (t[31] &= 127),
              (t[31] |= 64),
              (e[31] &= 127),
              { public: e, private: t }
            );
          }),
          (r.getPublicKeyFromPrivate = function (r) {
            if ((H(r), 32 !== r.length))
              throw new Error("wrong private key array length");
            var t = new Uint8Array(32);
            return (P(t, r), (t[31] &= 127), t);
          }));
      })(r.exports ? r.exports : (self.axlsign = self.axlsign || {}));
    },
    8008: function (r, t, e) {
      "use strict";
      var n = e(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = n(e(129));
      class WavesNodeExplorer extends a.default {
        getAllowedTickers() {
          return ["WAVES"];
        }
        getWalletAddress() {
          return this.wallet.address;
        }
        getInfoUrl(r) {
          return "/addresses/balance/" + r;
        }
        getInfoOptions() {
          return {
            transformResponse: [
              (r) => JSON.parse(r.replace(/:(\d+)([,}])/g, ':"$1"$2')),
            ],
          };
        }
        modifyInfoResponse(r) {
          return { balance: r.balance, transactions: this.wallet.transactions };
        }
        getTransactionUrl(r) {
          return "/transactions/info/" + r;
        }
        getTransactionsUrl(r) {
          return `/transactions/address/${r}/limit/${this.defaultTxLimit}`;
        }
        modifyTransactionsResponse(r, t) {
          return super.modifyTransactionsResponse(
            r[0].filter((r) => {
              let { assetId: t } = r;
              return null === t;
            }),
            t,
          );
        }
        async getTransactions(r) {
          let { address: t, offset: e = 0, limit: n = this.defaultTxLimit } = r;
          return (
            (this.latestBlock = await this.getLatestBlock()),
            super.getTransactions({ address: t, offset: e, limit: n })
          );
        }
        getLatestBlockUrl() {
          return "/blocks/height";
        }
        getTxHash(r) {
          return r.id;
        }
        getTxDateTime(r) {
          return new Date(Number("" + r.timestamp));
        }
        getTxDirection(r, t) {
          return r === t.recipient;
        }
        getTxOtherSideAddress(r, t) {
          return this.getTxDirection(r, t) ? t.sender : t.recipient;
        }
        getTxValue(r, t) {
          return Number(
            this.wallet.toCurrencyUnit(
              this.getTxDirection(r, t)
                ? t.amount
                : new this.wallet.BN(t.amount).add(new this.wallet.BN(t.fee)),
            ),
          );
        }
        getTxConfirmations(r) {
          return this.latestBlock
            ? this.latestBlock.height - r.height
            : Number(1);
        }
        getSendTransactionUrl() {
          return "/transactions/broadcast";
        }
        getSendTransactionParams(r) {
          return JSON.parse(r);
        }
        modifySendTransactionResponse(r) {
          return { txid: r.id };
        }
        getTxFee(r) {
          return this.wallet.toCurrencyUnit((r && r.fee) || 0);
        }
      }
      t.default = WavesNodeExplorer;
    },
  },
]);
