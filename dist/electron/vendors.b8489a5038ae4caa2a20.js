(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [172, 358],
  {
    11527: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        emptyMessageSignature: !0,
        isSingleSig: !0,
        BytesReader: !0,
        Cl: !0,
        isCoinbasePayload: !0,
        isContractCallPayload: !0,
        isPoisonPayload: !0,
        isSmartContractPayload: !0,
        isTokenTransferPayload: !0,
        serializePayload: !0,
        Pc: !0,
        createFungiblePostCondition: !0,
        createNonFungiblePostCondition: !0,
        createSTXPostCondition: !0,
        StacksTransaction: !0,
        deserializeTransaction: !0,
      };
      (Object.defineProperty(t, "BytesReader", {
        enumerable: !0,
        get: function () {
          return s.BytesReader;
        },
      }),
        (t.Pc = t.Cl = void 0),
        Object.defineProperty(t, "StacksTransaction", {
          enumerable: !0,
          get: function () {
            return w.StacksTransaction;
          },
        }),
        Object.defineProperty(t, "createFungiblePostCondition", {
          enumerable: !0,
          get: function () {
            return p.createFungiblePostCondition;
          },
        }),
        Object.defineProperty(t, "createNonFungiblePostCondition", {
          enumerable: !0,
          get: function () {
            return p.createNonFungiblePostCondition;
          },
        }),
        Object.defineProperty(t, "createSTXPostCondition", {
          enumerable: !0,
          get: function () {
            return p.createSTXPostCondition;
          },
        }),
        Object.defineProperty(t, "deserializeTransaction", {
          enumerable: !0,
          get: function () {
            return w.deserializeTransaction;
          },
        }),
        Object.defineProperty(t, "emptyMessageSignature", {
          enumerable: !0,
          get: function () {
            return i.emptyMessageSignature;
          },
        }),
        Object.defineProperty(t, "isCoinbasePayload", {
          enumerable: !0,
          get: function () {
            return h.isCoinbasePayload;
          },
        }),
        Object.defineProperty(t, "isContractCallPayload", {
          enumerable: !0,
          get: function () {
            return h.isContractCallPayload;
          },
        }),
        Object.defineProperty(t, "isPoisonPayload", {
          enumerable: !0,
          get: function () {
            return h.isPoisonPayload;
          },
        }),
        Object.defineProperty(t, "isSingleSig", {
          enumerable: !0,
          get: function () {
            return i.isSingleSig;
          },
        }),
        Object.defineProperty(t, "isSmartContractPayload", {
          enumerable: !0,
          get: function () {
            return h.isSmartContractPayload;
          },
        }),
        Object.defineProperty(t, "isTokenTransferPayload", {
          enumerable: !0,
          get: function () {
            return h.isTokenTransferPayload;
          },
        }),
        Object.defineProperty(t, "serializePayload", {
          enumerable: !0,
          get: function () {
            return h.serializePayload;
          },
        }));
      var i = n(4888);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var o = n(6960);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === o[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
      var s = n(5745),
        a = P(n(11545));
      t.Cl = a;
      var c = n(3469);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var u = n(4604);
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === u[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var d = n(3128);
      Object.keys(d).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === d[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return d[e];
              },
            }));
      });
      var l = n(6962);
      Object.keys(l).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === l[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            }));
      });
      var f = n(3856);
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === f[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return f[e];
              },
            }));
      });
      var h = n(4889),
        y = P(n(11546));
      t.Pc = y;
      var p = n(6963),
        g = n(3627);
      Object.keys(g).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === g[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return g[e];
              },
            }));
      });
      var b = n(4890);
      Object.keys(b).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === b[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return b[e];
              },
            }));
      });
      var T = n(6964);
      Object.keys(T).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === T[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return T[e];
              },
            }));
      });
      var S = n(11547);
      Object.keys(S).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === S[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return S[e];
              },
            }));
      });
      var w = n(6965),
        C = n(3855);
      Object.keys(C).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === C[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return C[e];
              },
            }));
      });
      var m = n(3408);
      function P(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (P = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            o,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((i = t ? r : n)) {
            if (i.has(e)) return i.get(e);
            i.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (o.get || o.set)
                ? i(s, n, o)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      Object.keys(m).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === m[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return m[e];
              },
            }));
      });
    },
    11528: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ripemd160 = t.RIPEMD160 = void 0));
      const r = n(5741),
        i = n(4603),
        o = new Uint8Array([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        s = Uint8Array.from({ length: 16 }, (e, t) => t),
        a = s.map((e) => (9 * e + 5) % 16);
      let c = [s],
        u = [a];
      for (let T = 0; T < 4; T++)
        for (let e of [c, u]) e.push(e[T].map((e) => o[e]));
      const d = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((e) => new Uint8Array(e)),
        l = c.map((e, t) => e.map((e) => d[t][e])),
        f = u.map((e, t) => e.map((e) => d[t][e])),
        h = new Uint32Array([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        y = new Uint32Array([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]),
        p = (e, t) => (e << t) | (e >>> (32 - t));
      function g(e, t, n, r) {
        return 0 === e
          ? t ^ n ^ r
          : 1 === e
            ? (t & n) | (~t & r)
            : 2 === e
              ? (t | ~n) ^ r
              : 3 === e
                ? (t & r) | (n & ~r)
                : t ^ (n | ~r);
      }
      const b = new Uint32Array(16);
      class RIPEMD160 extends r.SHA2 {
        constructor() {
          (super(64, 20, 8, !0),
            (this.h0 = 1732584193),
            (this.h1 = -271733879),
            (this.h2 = -1732584194),
            (this.h3 = 271733878),
            (this.h4 = -1009589776));
        }
        get() {
          const { h0: e, h1: t, h2: n, h3: r, h4: i } = this;
          return [e, t, n, r, i];
        }
        set(e, t, n, r, i) {
          ((this.h0 = 0 | e),
            (this.h1 = 0 | t),
            (this.h2 = 0 | n),
            (this.h3 = 0 | r),
            (this.h4 = 0 | i));
        }
        process(e, t) {
          for (let c = 0; c < 16; c++, t += 4) b[c] = e.getUint32(t, !0);
          let n = 0 | this.h0,
            r = n,
            i = 0 | this.h1,
            o = i,
            s = 0 | this.h2,
            a = s,
            d = 0 | this.h3,
            T = d,
            S = 0 | this.h4,
            w = S;
          for (let C = 0; C < 5; C++) {
            const e = 4 - C,
              t = h[C],
              m = y[C],
              P = c[C],
              A = u[C],
              E = l[C],
              v = f[C];
            for (let r = 0; r < 16; r++) {
              const e = (p(n + g(C, i, s, d) + b[P[r]] + t, E[r]) + S) | 0;
              ((n = S), (S = d), (d = 0 | p(s, 10)), (s = i), (i = e));
            }
            for (let n = 0; n < 16; n++) {
              const t = (p(r + g(e, o, a, T) + b[A[n]] + m, v[n]) + w) | 0;
              ((r = w), (w = T), (T = 0 | p(a, 10)), (a = o), (o = t));
            }
          }
          this.set(
            (this.h1 + s + T) | 0,
            (this.h2 + d + w) | 0,
            (this.h3 + S + r) | 0,
            (this.h4 + n + o) | 0,
            (this.h0 + i + a) | 0,
          );
        }
        roundClean() {
          b.fill(0);
        }
        destroy() {
          ((this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0));
        }
      }
      ((t.RIPEMD160 = RIPEMD160),
        (t.ripemd160 = (0, i.wrapConstructor)(() => new RIPEMD160())));
    },
    11529: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto = {
          node: void 0,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        }));
    },
    11530: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha384 =
          t.sha512_256 =
          t.sha512_224 =
          t.sha512 =
          t.SHA512 =
            void 0));
      const r = n(5741),
        i = n(11531),
        o = n(4603),
        [s, a] = i.default.split(
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
      class SHA512 extends r.SHA2 {
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
            Bh: n,
            Bl: r,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: c,
            El: u,
            Fh: d,
            Fl: l,
            Gh: f,
            Gl: h,
            Hh: y,
            Hl: p,
          } = this;
          return [e, t, n, r, i, o, s, a, c, u, d, l, f, h, y, p];
        }
        set(e, t, n, r, i, o, s, a, c, u, d, l, f, h, y, p) {
          ((this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | n),
            (this.Bl = 0 | r),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | u),
            (this.Fh = 0 | d),
            (this.Fl = 0 | l),
            (this.Gh = 0 | f),
            (this.Gl = 0 | h),
            (this.Hh = 0 | y),
            (this.Hl = 0 | p));
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4)
            ((c[i] = e.getUint32(t)), (u[i] = e.getUint32((t += 4))));
          for (let s = 16; s < 80; s++) {
            const e = 0 | c[s - 15],
              t = 0 | u[s - 15],
              n =
                i.default.rotrSH(e, t, 1) ^
                i.default.rotrSH(e, t, 8) ^
                i.default.shrSH(e, t, 7),
              r =
                i.default.rotrSL(e, t, 1) ^
                i.default.rotrSL(e, t, 8) ^
                i.default.shrSL(e, t, 7),
              o = 0 | c[s - 2],
              a = 0 | u[s - 2],
              d =
                i.default.rotrSH(o, a, 19) ^
                i.default.rotrBH(o, a, 61) ^
                i.default.shrSH(o, a, 6),
              l =
                i.default.rotrSL(o, a, 19) ^
                i.default.rotrBL(o, a, 61) ^
                i.default.shrSL(o, a, 6),
              f = i.default.add4L(r, l, u[s - 7], u[s - 16]),
              h = i.default.add4H(f, n, d, c[s - 7], c[s - 16]);
            ((c[s] = 0 | h), (u[s] = 0 | f));
          }
          let {
            Ah: n,
            Al: r,
            Bh: o,
            Bl: d,
            Ch: l,
            Cl: f,
            Dh: h,
            Dl: y,
            Eh: p,
            El: g,
            Fh: b,
            Fl: T,
            Gh: S,
            Gl: w,
            Hh: C,
            Hl: m,
          } = this;
          for (let P = 0; P < 80; P++) {
            const e =
                i.default.rotrSH(p, g, 14) ^
                i.default.rotrSH(p, g, 18) ^
                i.default.rotrBH(p, g, 41),
              t =
                i.default.rotrSL(p, g, 14) ^
                i.default.rotrSL(p, g, 18) ^
                i.default.rotrBL(p, g, 41),
              A = (p & b) ^ (~p & S),
              E = (g & T) ^ (~g & w),
              v = i.default.add5L(m, t, E, a[P], u[P]),
              k = i.default.add5H(v, C, e, A, s[P], c[P]),
              x = 0 | v,
              B =
                i.default.rotrSH(n, r, 28) ^
                i.default.rotrBH(n, r, 34) ^
                i.default.rotrBH(n, r, 39),
              O =
                i.default.rotrSL(n, r, 28) ^
                i.default.rotrBL(n, r, 34) ^
                i.default.rotrBL(n, r, 39),
              M = (n & o) ^ (n & l) ^ (o & l),
              _ = (r & d) ^ (r & f) ^ (d & f);
            ((C = 0 | S),
              (m = 0 | w),
              (S = 0 | b),
              (w = 0 | T),
              (b = 0 | p),
              (T = 0 | g),
              ({ h: p, l: g } = i.default.add(0 | h, 0 | y, 0 | k, 0 | x)),
              (h = 0 | l),
              (y = 0 | f),
              (l = 0 | o),
              (f = 0 | d),
              (o = 0 | n),
              (d = 0 | r));
            const I = i.default.add3L(x, O, _);
            ((n = i.default.add3H(I, k, B, M)), (r = 0 | I));
          }
          (({ h: n, l: r } = i.default.add(
            0 | this.Ah,
            0 | this.Al,
            0 | n,
            0 | r,
          )),
            ({ h: o, l: d } = i.default.add(
              0 | this.Bh,
              0 | this.Bl,
              0 | o,
              0 | d,
            )),
            ({ h: l, l: f } = i.default.add(
              0 | this.Ch,
              0 | this.Cl,
              0 | l,
              0 | f,
            )),
            ({ h: h, l: y } = i.default.add(
              0 | this.Dh,
              0 | this.Dl,
              0 | h,
              0 | y,
            )),
            ({ h: p, l: g } = i.default.add(
              0 | this.Eh,
              0 | this.El,
              0 | p,
              0 | g,
            )),
            ({ h: b, l: T } = i.default.add(
              0 | this.Fh,
              0 | this.Fl,
              0 | b,
              0 | T,
            )),
            ({ h: S, l: w } = i.default.add(
              0 | this.Gh,
              0 | this.Gl,
              0 | S,
              0 | w,
            )),
            ({ h: C, l: m } = i.default.add(
              0 | this.Hh,
              0 | this.Hl,
              0 | C,
              0 | m,
            )),
            this.set(n, r, o, d, l, f, h, y, p, g, b, T, S, w, C, m));
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
      ((t.sha512 = (0, o.wrapConstructor)(() => new SHA512())),
        (t.sha512_224 = (0, o.wrapConstructor)(() => new SHA512_224())),
        (t.sha512_256 = (0, o.wrapConstructor)(() => new SHA512_256())),
        (t.sha384 = (0, o.wrapConstructor)(() => new SHA384())));
    },
    11531: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add = t.toBig = t.split = t.fromBig = void 0));
      const r = BigInt(2 ** 32 - 1),
        i = BigInt(32);
      function o(e, t) {
        return (
          void 0 === t && (t = !1),
          t
            ? { h: Number(e & r), l: Number((e >> i) & r) }
            : { h: 0 | Number((e >> i) & r), l: 0 | Number(e & r) }
        );
      }
      function s(e, t) {
        void 0 === t && (t = !1);
        let n = new Uint32Array(e.length),
          r = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          const { h: s, l: a } = o(e[i], t);
          [n[i], r[i]] = [s, a];
        }
        return [n, r];
      }
      ((t.fromBig = o), (t.split = s));
      const a = (e, t) => (BigInt(e >>> 0) << i) | BigInt(t >>> 0);
      t.toBig = a;
      const c = (e, t, n) => e >>> n,
        u = (e, t, n) => (e << (32 - n)) | (t >>> n),
        d = (e, t, n) => (e >>> n) | (t << (32 - n)),
        l = (e, t, n) => (e << (32 - n)) | (t >>> n),
        f = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32)),
        h = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n)),
        y = (e, t) => t,
        p = (e, t) => e,
        g = (e, t, n) => (e << n) | (t >>> (32 - n)),
        b = (e, t, n) => (t << n) | (e >>> (32 - n)),
        T = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        S = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function w(e, t, n, r) {
        const i = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
      }
      t.add = w;
      const C = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
        m = (e, t, n, r) => (t + n + r + ((e / 2 ** 32) | 0)) | 0,
        P = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
        A = (e, t, n, r, i) => (t + n + r + i + ((e / 2 ** 32) | 0)) | 0,
        E = (e, t, n, r, i) =>
          (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
        v = (e, t, n, r, i, o) => (t + n + r + i + o + ((e / 2 ** 32) | 0)) | 0,
        k = {
          fromBig: o,
          split: s,
          toBig: t.toBig,
          shrSH: c,
          shrSL: u,
          rotrSH: d,
          rotrSL: l,
          rotrBH: f,
          rotrBL: h,
          rotr32H: y,
          rotr32L: p,
          rotlSH: g,
          rotlSL: b,
          rotlBH: T,
          rotlBL: S,
          add: w,
          add3L: C,
          add3H: m,
          add4L: P,
          add4H: A,
          add5H: v,
          add5L: E,
        };
      t.default = k;
    },
    11532: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cvToJSON = c),
        (t.cvToString = s),
        (t.cvToValue = a),
        (t.getCVTypeString = u));
      var r = n(5743),
        i = n(3238),
        o = n(2778);
      function s(e, t) {
        switch ((void 0 === t && (t = "hex"), e.type)) {
          case i.ClarityType.BoolTrue:
            return "true";
          case i.ClarityType.BoolFalse:
            return "false";
          case i.ClarityType.Int:
            return e.value.toString();
          case i.ClarityType.UInt:
            return "u" + e.value.toString();
          case i.ClarityType.Buffer:
            if ("tryAscii" === t) {
              const t = (0, o.bytesToAscii)(e.buffer);
              if (/[ -~]/.test(t)) return JSON.stringify(t);
            }
            return "0x" + (0, o.bytesToHex)(e.buffer);
          case i.ClarityType.OptionalNone:
            return "none";
          case i.ClarityType.OptionalSome:
            return `(some ${s(e.value, t)})`;
          case i.ClarityType.ResponseErr:
            return `(err ${s(e.value, t)})`;
          case i.ClarityType.ResponseOk:
            return `(ok ${s(e.value, t)})`;
          case i.ClarityType.PrincipalStandard:
          case i.ClarityType.PrincipalContract:
            return (0, r.principalToString)(e);
          case i.ClarityType.List:
            return `(list ${e.list.map((e) => s(e, t)).join(" ")})`;
          case i.ClarityType.Tuple:
            return `(tuple ${Object.keys(e.data)
              .map((n) => `(${n} ${s(e.data[n], t)})`)
              .join(" ")})`;
          case i.ClarityType.StringASCII:
            return `"${e.data}"`;
          case i.ClarityType.StringUTF8:
            return `u"${e.data}"`;
        }
      }
      function a(e, t) {
        switch ((void 0 === t && (t = !1), e.type)) {
          case i.ClarityType.BoolTrue:
            return !0;
          case i.ClarityType.BoolFalse:
            return !1;
          case i.ClarityType.Int:
          case i.ClarityType.UInt:
            return t ? e.value.toString() : e.value;
          case i.ClarityType.Buffer:
            return "0x" + (0, o.bytesToHex)(e.buffer);
          case i.ClarityType.OptionalNone:
            return null;
          case i.ClarityType.OptionalSome:
            return c(e.value);
          case i.ClarityType.ResponseErr:
            return c(e.value);
          case i.ClarityType.ResponseOk:
            return c(e.value);
          case i.ClarityType.PrincipalStandard:
          case i.ClarityType.PrincipalContract:
            return (0, r.principalToString)(e);
          case i.ClarityType.List:
            return e.list.map((e) => c(e));
          case i.ClarityType.Tuple:
            const n = {};
            return (
              Object.keys(e.data).forEach((t) => {
                n[t] = c(e.data[t]);
              }),
              n
            );
          case i.ClarityType.StringASCII:
            return e.data;
          case i.ClarityType.StringUTF8:
            return e.data;
        }
      }
      function c(e) {
        switch (e.type) {
          case i.ClarityType.ResponseErr:
            return { type: u(e), value: a(e, !0), success: !1 };
          case i.ClarityType.ResponseOk:
            return { type: u(e), value: a(e, !0), success: !0 };
          default:
            return { type: u(e), value: a(e, !0) };
        }
      }
      function u(e) {
        switch (e.type) {
          case i.ClarityType.BoolTrue:
          case i.ClarityType.BoolFalse:
            return "bool";
          case i.ClarityType.Int:
            return "int";
          case i.ClarityType.UInt:
            return "uint";
          case i.ClarityType.Buffer:
            return `(buff ${e.buffer.length})`;
          case i.ClarityType.OptionalNone:
            return "(optional none)";
          case i.ClarityType.OptionalSome:
            return `(optional ${u(e.value)})`;
          case i.ClarityType.ResponseErr:
            return `(response UnknownType ${u(e.value)})`;
          case i.ClarityType.ResponseOk:
            return `(response ${u(e.value)} UnknownType)`;
          case i.ClarityType.PrincipalStandard:
          case i.ClarityType.PrincipalContract:
            return "principal";
          case i.ClarityType.List:
            return `(list ${e.list.length} ${e.list.length ? u(e.list[0]) : "UnknownType"})`;
          case i.ClarityType.Tuple:
            return `(tuple ${Object.keys(e.data)
              .map((t) => `(${t} ${u(e.data[t])})`)
              .join(" ")})`;
          case i.ClarityType.StringASCII:
            return `(string-ascii ${(0, o.asciiToBytes)(e.data).length})`;
          case i.ClarityType.StringUTF8:
            return `(string-utf8 ${(0, o.utf8ToBytes)(e.data).length})`;
        }
      }
    },
    11533: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.trueCV = t.falseCV = t.boolCV = void 0));
      var r = n(3238);
      const i = () => ({ type: r.ClarityType.BoolTrue });
      t.trueCV = i;
      const o = () => ({ type: r.ClarityType.BoolFalse });
      t.falseCV = o;
      const s = (e) => (e ? i() : o());
      t.boolCV = s;
    },
    11534: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.uintCV = t.intCV = void 0));
      var r = n(2778),
        i = n(3238);
      const o = BigInt("0xffffffffffffffffffffffffffffffff"),
        s = BigInt(0),
        a = BigInt("0x7fffffffffffffffffffffffffffffff"),
        c = BigInt("-170141183460469231731687303715884105728"),
        u = (e) => {
          const t = (0, r.intToBigInt)(e, !0);
          if (t > a)
            throw new RangeError(
              "Cannot construct clarity integer from value greater than " + a,
            );
          if (t < c)
            throw new RangeError(
              "Cannot construct clarity integer form value less than " + c,
            );
          return { type: i.ClarityType.Int, value: t };
        };
      t.intCV = u;
      const d = (e) => {
        const t = (0, r.intToBigInt)(e, !1);
        if (t < s)
          throw new RangeError(
            "Cannot construct unsigned clarity integer from negative value",
          );
        if (t > o)
          throw new RangeError(
            "Cannot construct unsigned clarity integer greater than " + o,
          );
        return { type: i.ClarityType.UInt, value: t };
      };
      t.uintCV = d;
    },
    11535: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bufferCVFromString = t.bufferCV = void 0));
      var r = n(2778),
        i = n(3238);
      const o = (e) => {
        if (e.length > 1e6)
          throw new Error(
            "Cannot construct clarity buffer that is greater than 1MB",
          );
        return { type: i.ClarityType.Buffer, buffer: e };
      };
      t.bufferCV = o;
      const s = (e) => o((0, r.utf8ToBytes)(e));
      t.bufferCVFromString = s;
    },
    11536: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.noneCV = i),
        (t.optionalCVOf = s),
        (t.someCV = o));
      var r = n(3238);
      function i() {
        return { type: r.ClarityType.OptionalNone };
      }
      function o(e) {
        return { type: r.ClarityType.OptionalSome, value: e };
      }
      function s(e) {
        return e ? o(e) : i();
      }
    },
    11537: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.responseErrorCV = i),
        (t.responseOkCV = o));
      var r = n(3238);
      function i(e) {
        return { type: r.ClarityType.ResponseErr, value: e };
      }
      function o(e) {
        return { type: r.ClarityType.ResponseOk, value: e };
      }
    },
    11538: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.listCV = i));
      var r = n(3238);
      function i(e) {
        return { type: r.ClarityType.List, list: e };
      }
    },
    11539: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.tupleCV = o));
      var r = n(3238),
        i = n(3408);
      function o(e) {
        for (const t in e)
          if (!(0, i.isClarityName)(t))
            throw new Error(`"${t}" is not a valid Clarity name`);
        return { type: r.ClarityType.Tuple, data: e };
      }
    },
    11540: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.serializeCV = P));
      var r = n(2778),
        i = n(3855),
        o = n(3627),
        s = n(3238),
        a = n(3470),
        c = n(3128);
      function u(e, t) {
        return (0, r.concatArray)([e, t]);
      }
      function d(e) {
        return new Uint8Array([e.type]);
      }
      function l(e) {
        return e.type === s.ClarityType.OptionalNone
          ? new Uint8Array([e.type])
          : u(e.type, P(e.value));
      }
      function f(e) {
        const t = new Uint8Array(4);
        return (
          (0, r.writeUInt32BE)(t, e.buffer.length, 0),
          u(e.type, (0, r.concatBytes)(t, e.buffer))
        );
      }
      function h(e) {
        const t = (0, r.bigIntToBytes)(
          (0, r.toTwos)(e.value, BigInt(c.CLARITY_INT_SIZE)),
          c.CLARITY_INT_BYTE_SIZE,
        );
        return u(e.type, t);
      }
      function y(e) {
        const t = (0, r.bigIntToBytes)(e.value, c.CLARITY_INT_BYTE_SIZE);
        return u(e.type, t);
      }
      function p(e) {
        return u(e.type, (0, i.serializeAddress)(e.address));
      }
      function g(e) {
        return u(
          e.type,
          (0, r.concatBytes)(
            (0, i.serializeAddress)(e.address),
            (0, i.serializeLPString)(e.contractName),
          ),
        );
      }
      function b(e) {
        return u(e.type, P(e.value));
      }
      function T(e) {
        const t = [],
          n = new Uint8Array(4);
        ((0, r.writeUInt32BE)(n, e.list.length, 0), t.push(n));
        for (const r of e.list) {
          const e = P(r);
          t.push(e);
        }
        return u(e.type, (0, r.concatArray)(t));
      }
      function S(e) {
        const t = [],
          n = new Uint8Array(4);
        ((0, r.writeUInt32BE)(n, Object.keys(e.data).length, 0), t.push(n));
        const s = Object.keys(e.data).sort((e, t) => e.localeCompare(t));
        for (const r of s) {
          const n = (0, o.createLPString)(r);
          t.push((0, i.serializeLPString)(n));
          const s = P(e.data[r]);
          t.push(s);
        }
        return u(e.type, (0, r.concatArray)(t));
      }
      function w(e, t) {
        const n = [],
          i =
            "ascii" == t
              ? (0, r.asciiToBytes)(e.data)
              : (0, r.utf8ToBytes)(e.data),
          o = new Uint8Array(4);
        return (
          (0, r.writeUInt32BE)(o, i.length, 0),
          n.push(o),
          n.push(i),
          u(e.type, (0, r.concatArray)(n))
        );
      }
      function C(e) {
        return w(e, "ascii");
      }
      function m(e) {
        return w(e, "utf8");
      }
      function P(e) {
        switch (e.type) {
          case s.ClarityType.BoolTrue:
          case s.ClarityType.BoolFalse:
            return d(e);
          case s.ClarityType.OptionalNone:
          case s.ClarityType.OptionalSome:
            return l(e);
          case s.ClarityType.Buffer:
            return f(e);
          case s.ClarityType.UInt:
            return y(e);
          case s.ClarityType.Int:
            return h(e);
          case s.ClarityType.PrincipalStandard:
            return p(e);
          case s.ClarityType.PrincipalContract:
            return g(e);
          case s.ClarityType.ResponseOk:
          case s.ClarityType.ResponseErr:
            return b(e);
          case s.ClarityType.List:
            return T(e);
          case s.ClarityType.Tuple:
            return S(e);
          case s.ClarityType.StringASCII:
            return C(e);
          case s.ClarityType.StringUTF8:
            return m(e);
          default:
            throw new a.SerializationError(
              "Unable to serialize. Invalid Clarity Value.",
            );
        }
      }
    },
    11541: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hmac = void 0));
      const r = n(6959),
        i = n(4603);
      class HMAC extends i.Hash {
        constructor(e, t) {
          (super(),
            (this.finished = !1),
            (this.destroyed = !1),
            r.default.hash(e));
          const n = (0, i.toBytes)(t);
          if (
            ((this.iHash = e.create()), "function" !== typeof this.iHash.update)
          )
            throw new TypeError(
              "Expected instance of class which extends utils.Hash",
            );
          ((this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen));
          const o = this.blockLen,
            s = new Uint8Array(o);
          s.set(n.length > o ? e.create().update(n).digest() : n);
          for (let r = 0; r < s.length; r++) s[r] ^= 54;
          (this.iHash.update(s), (this.oHash = e.create()));
          for (let r = 0; r < s.length; r++) s[r] ^= 106;
          (this.oHash.update(s), s.fill(0));
        }
        update(e) {
          return (r.default.exists(this), this.iHash.update(e), this);
        }
        digestInto(e) {
          (r.default.exists(this),
            r.default.bytes(e, this.outputLen),
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
            iHash: n,
            finished: r,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (e = e),
            (e.finished = r),
            (e.destroyed = i),
            (e.blockLen = o),
            (e.outputLen = s),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = n._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
        }
      }
      const o = (e, t, n) => new HMAC(e, t).update(n).digest();
      ((t.hmac = o), (t.hmac.create = (e, t) => new HMAC(e, t)));
    },
    11542: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var r = n(3469),
        i = n(5745),
        o = n(3855),
        s = n(3470),
        a = n(5744),
        c = n(2778);
      function u(e) {
        let t;
        if ("string" === typeof e) {
          const n = "0x" === e.slice(0, 2).toLowerCase();
          t = new i.BytesReader((0, c.hexToBytes)(n ? e.slice(2) : e));
        } else t = e instanceof Uint8Array ? new i.BytesReader(e) : e;
        const n = t.readUInt8Enum(r.ClarityType, (e) => {
          throw new s.DeserializationError(
            "Cannot recognize Clarity Type: " + e,
          );
        });
        switch (n) {
          case r.ClarityType.Int:
            return (0, r.intCV)(t.readBytes(16));
          case r.ClarityType.UInt:
            return (0, r.uintCV)(t.readBytes(16));
          case r.ClarityType.Buffer:
            const e = t.readUInt32BE();
            return (0, r.bufferCV)(t.readBytes(e));
          case r.ClarityType.BoolTrue:
            return (0, r.trueCV)();
          case r.ClarityType.BoolFalse:
            return (0, r.falseCV)();
          case r.ClarityType.PrincipalStandard:
            const n = (0, o.deserializeAddress)(t);
            return (0, r.standardPrincipalCVFromAddress)(n);
          case r.ClarityType.PrincipalContract:
            const i = (0, o.deserializeAddress)(t),
              d = (0, o.deserializeLPString)(t);
            return (0, r.contractPrincipalCVFromAddress)(i, d);
          case r.ClarityType.ResponseOk:
            return (0, r.responseOkCV)(u(t));
          case r.ClarityType.ResponseErr:
            return (0, r.responseErrorCV)(u(t));
          case r.ClarityType.OptionalNone:
            return (0, r.noneCV)();
          case r.ClarityType.OptionalSome:
            return (0, r.someCV)(u(t));
          case r.ClarityType.List:
            const l = t.readUInt32BE(),
              f = [];
            for (let r = 0; r < l; r++) f.push(u(t));
            return (0, r.listCV)(f);
          case r.ClarityType.Tuple:
            const h = t.readUInt32BE(),
              y = {};
            for (let r = 0; r < h; r++) {
              const e = (0, o.deserializeLPString)(t).content;
              if (void 0 === e)
                throw new s.DeserializationError('"content" is undefined');
              y[e] = u(t);
            }
            return (0, r.tupleCV)(y);
          case r.ClarityType.StringASCII:
            const p = t.readUInt32BE(),
              g = (0, c.bytesToAscii)(t.readBytes(p));
            return (0, a.stringAsciiCV)(g);
          case r.ClarityType.StringUTF8:
            const b = t.readUInt32BE(),
              T = (0, c.bytesToUtf8)(t.readBytes(b));
            return (0, a.stringUtf8CV)(T);
          default:
            throw new s.DeserializationError(
              "Unable to deserialize Clarity Value from Uint8Array. Could not find valid Clarity Type.",
            );
        }
      }
    },
    11543: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(6961);
      Object.keys(r).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === r[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return r[e];
              },
            }));
      });
      var i = n(11544);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
    },
    11544: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StacksTestnet =
          t.StacksNetworks =
          t.StacksNetwork =
          t.StacksMocknet =
          t.StacksMainnet =
          t.StacksDevnet =
          t.HIRO_TESTNET_DEFAULT =
          t.HIRO_MOCKNET_DEFAULT =
          t.HIRO_MAINNET_DEFAULT =
            void 0));
      var r = n(2778),
        i = n(6961);
      const o = (t.HIRO_MAINNET_DEFAULT = "https://api.mainnet.hiro.so"),
        s = (t.HIRO_TESTNET_DEFAULT = "https://api.testnet.hiro.so"),
        a = (t.HIRO_MOCKNET_DEFAULT = "http://localhost:3999"),
        c = (t.StacksNetworks = ["mainnet", "testnet", "devnet", "mocknet"]);
      class StacksNetwork {
        constructor(e) {
          var t;
          ((this.version = r.TransactionVersion.Mainnet),
            (this.chainId = r.ChainID.Mainnet),
            (this.bnsLookupUrl = "https://api.mainnet.hiro.so"),
            (this.broadcastEndpoint = "/v2/transactions"),
            (this.transferFeeEstimateEndpoint = "/v2/fees/transfer"),
            (this.transactionFeeEstimateEndpoint = "/v2/fees/transaction"),
            (this.accountEndpoint = "/v2/accounts"),
            (this.contractAbiEndpoint = "/v2/contracts/interface"),
            (this.readOnlyFunctionCallEndpoint = "/v2/contracts/call-read"),
            (this.isMainnet = () =>
              this.version === r.TransactionVersion.Mainnet),
            (this.getBroadcastApiUrl = () =>
              `${this.coreApiUrl}${this.broadcastEndpoint}`),
            (this.getTransferFeeEstimateApiUrl = () =>
              `${this.coreApiUrl}${this.transferFeeEstimateEndpoint}`),
            (this.getTransactionFeeEstimateApiUrl = () =>
              `${this.coreApiUrl}${this.transactionFeeEstimateEndpoint}`),
            (this.getAccountApiUrl = (e) =>
              `${this.coreApiUrl}${this.accountEndpoint}/${e}?proof=0`),
            (this.getAccountExtendedBalancesApiUrl = (e) =>
              `${this.coreApiUrl}/extended/v1/address/${e}/balances`),
            (this.getAbiApiUrl = (e, t) =>
              `${this.coreApiUrl}${this.contractAbiEndpoint}/${e}/${t}`),
            (this.getReadOnlyFunctionCallApiUrl = (e, t, n) =>
              `${this.coreApiUrl}${this.readOnlyFunctionCallEndpoint}/${e}/${t}/${encodeURIComponent(n)}`),
            (this.getInfoUrl = () => this.coreApiUrl + "/v2/info"),
            (this.getBlockTimeInfoUrl = () =>
              this.coreApiUrl + "/extended/v1/info/network_block_times"),
            (this.getPoxInfoUrl = () => this.coreApiUrl + "/v2/pox"),
            (this.getRewardsUrl = (e, t) => {
              let n = `${this.coreApiUrl}/extended/v1/burnchain/rewards/${e}`;
              return (t && (n = `${n}?limit=${t.limit}&offset=${t.offset}`), n);
            }),
            (this.getRewardsTotalUrl = (e) =>
              `${this.coreApiUrl}/extended/v1/burnchain/rewards/${e}/total`),
            (this.getRewardHoldersUrl = (e, t) => {
              let n = `${this.coreApiUrl}/extended/v1/burnchain/reward_slot_holders/${e}`;
              return (t && (n = `${n}?limit=${t.limit}&offset=${t.offset}`), n);
            }),
            (this.getStackerInfoUrl = (e, t) =>
              `${this.coreApiUrl}${this.readOnlyFunctionCallEndpoint}\n    ${e}/${t}/get-stacker-info`),
            (this.getDataVarUrl = (e, t, n) =>
              `${this.coreApiUrl}/v2/data_var/${e}/${t}/${n}?proof=0`),
            (this.getMapEntryUrl = (e, t, n) =>
              `${this.coreApiUrl}/v2/map_entry/${e}/${t}/${n}?proof=0`),
            (this.coreApiUrl = e.url),
            (this.fetchFn =
              null !== (t = e.fetchFn) && void 0 !== t
                ? t
                : (0, i.createFetchFn)()));
        }
        getNameInfo(e) {
          const t = `${this.bnsLookupUrl}/v1/names/${e}`;
          return this.fetchFn(t)
            .then((e) => {
              if (404 === e.status) throw new Error("Name not found");
              if (200 !== e.status)
                throw new Error("Bad response status: " + e.status);
              return e.json();
            })
            .then((e) =>
              e.address ? Object.assign({}, e, { address: e.address }) : e,
            );
        }
      }
      ((t.StacksNetwork = StacksNetwork),
        (StacksNetwork.fromName = (e) => {
          switch (e) {
            case "mainnet":
              return new StacksMainnet();
            case "testnet":
              return new StacksTestnet();
            case "devnet":
              return new u();
            case "mocknet":
              return new StacksMocknet();
            default:
              throw new Error(
                "Invalid network name provided. Must be one of the following: " +
                  c.join(", "),
              );
          }
        }),
        (StacksNetwork.fromNameOrNetwork = (e) =>
          "string" !== typeof e && "version" in e
            ? e
            : StacksNetwork.fromName(e)));
      class StacksMainnet extends StacksNetwork {
        constructor(e) {
          var t;
          (super({
            url:
              null !== (t = null === e || void 0 === e ? void 0 : e.url) &&
              void 0 !== t
                ? t
                : o,
            fetchFn: null === e || void 0 === e ? void 0 : e.fetchFn,
          }),
            (this.version = r.TransactionVersion.Mainnet),
            (this.chainId = r.ChainID.Mainnet));
        }
      }
      t.StacksMainnet = StacksMainnet;
      class StacksTestnet extends StacksNetwork {
        constructor(e) {
          var t;
          (super({
            url:
              null !== (t = null === e || void 0 === e ? void 0 : e.url) &&
              void 0 !== t
                ? t
                : s,
            fetchFn: null === e || void 0 === e ? void 0 : e.fetchFn,
          }),
            (this.version = r.TransactionVersion.Testnet),
            (this.chainId = r.ChainID.Testnet));
        }
      }
      t.StacksTestnet = StacksTestnet;
      class StacksMocknet extends StacksNetwork {
        constructor(e) {
          var t;
          (super({
            url:
              null !== (t = null === e || void 0 === e ? void 0 : e.url) &&
              void 0 !== t
                ? t
                : a,
            fetchFn: null === e || void 0 === e ? void 0 : e.fetchFn,
          }),
            (this.version = r.TransactionVersion.Testnet),
            (this.chainId = r.ChainID.Testnet));
        }
      }
      t.StacksMocknet = StacksMocknet;
      const u = (t.StacksDevnet = StacksMocknet);
    },
    11545: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.uint =
          t.tuple =
          t.stringUtf8 =
          t.stringAscii =
          t.standardPrincipal =
          t.some =
          t.serialize =
          t.ok =
          t.none =
          t.list =
          t.int =
          t.error =
          t.deserialize =
          t.contractPrincipal =
          t.bufferFromUtf8 =
          t.bufferFromHex =
          t.bufferFromAscii =
          t.buffer =
          t.bool =
            void 0));
      var r = n(2778),
        i = n(3469);
      ((t.bool = i.boolCV),
        (t.int = i.intCV),
        (t.uint = i.uintCV),
        (t.contractPrincipal = i.contractPrincipalCV),
        (t.standardPrincipal = i.standardPrincipalCV),
        (t.list = i.listCV),
        (t.stringAscii = i.stringAsciiCV),
        (t.stringUtf8 = i.stringUtf8CV),
        (t.buffer = i.bufferCV));
      const o = (e) => (0, i.bufferCV)((0, r.hexToBytes)(e));
      t.bufferFromHex = o;
      const s = (e) => (0, i.bufferCV)((0, r.asciiToBytes)(e));
      t.bufferFromAscii = s;
      const a = (e) => (0, i.bufferCV)((0, r.utf8ToBytes)(e));
      t.bufferFromUtf8 = a;
      ((t.none = i.noneCV),
        (t.some = i.someCV),
        (t.ok = i.responseOkCV),
        (t.error = i.responseErrorCV),
        (t.tuple = i.tupleCV),
        (t.serialize = i.serializeCV),
        (t.deserialize = i.deserializeCV));
    },
    11546: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.principal = s));
      var r = n(6960),
        i = n(3128),
        o = n(3627);
      function s(e) {
        if (u(e)) {
          const [t, n] = a(e);
          return new PartialPcWithPrincipal(t, n);
        }
        return new PartialPcWithPrincipal(e, void 0);
      }
      class PartialPcWithPrincipal {
        constructor(e, t) {
          ((this.address = e), (this.contractName = t));
        }
        willSendEq(e) {
          return new PartialPcFtWithCode(
            this.address,
            e,
            i.FungibleConditionCode.Equal,
            this.contractName,
          );
        }
        willSendLte(e) {
          return new PartialPcFtWithCode(
            this.address,
            e,
            i.FungibleConditionCode.LessEqual,
            this.contractName,
          );
        }
        willSendLt(e) {
          return new PartialPcFtWithCode(
            this.address,
            e,
            i.FungibleConditionCode.Less,
            this.contractName,
          );
        }
        willSendGte(e) {
          return new PartialPcFtWithCode(
            this.address,
            e,
            i.FungibleConditionCode.GreaterEqual,
            this.contractName,
          );
        }
        willSendGt(e) {
          return new PartialPcFtWithCode(
            this.address,
            e,
            i.FungibleConditionCode.Greater,
            this.contractName,
          );
        }
        willSendAsset() {
          return new PartialPcNftWithCode(
            this.address,
            i.NonFungibleConditionCode.Sends,
            this.contractName,
          );
        }
        willNotSendAsset() {
          return new PartialPcNftWithCode(
            this.address,
            i.NonFungibleConditionCode.DoesNotSend,
            this.contractName,
          );
        }
      }
      class PartialPcFtWithCode {
        constructor(e, t, n, r) {
          ((this.address = e),
            (this.amount = t),
            (this.code = n),
            (this.contractName = r));
        }
        ustx() {
          return this.contractName
            ? (0, r.makeContractSTXPostCondition)(
                this.address,
                this.contractName,
                this.code,
                this.amount,
              )
            : (0, r.makeStandardSTXPostCondition)(
                this.address,
                this.code,
                this.amount,
              );
        }
        ft(e, t) {
          const [n, i] = a(e);
          return this.contractName
            ? (0, r.makeContractFungiblePostCondition)(
                this.address,
                this.contractName,
                this.code,
                this.amount,
                (0, o.createAssetInfo)(n, i, t),
              )
            : (0, r.makeStandardFungiblePostCondition)(
                this.address,
                this.code,
                this.amount,
                (0, o.createAssetInfo)(n, i, t),
              );
        }
      }
      class PartialPcNftWithCode {
        constructor(e, t, n) {
          ((this.principal = e), (this.code = t), (this.contractName = n));
        }
        nft() {
          const {
            contractAddress: e,
            contractName: t,
            tokenName: n,
            assetId: i,
          } = d(...arguments);
          return this.contractName
            ? (0, r.makeContractNonFungiblePostCondition)(
                this.principal,
                this.contractName,
                this.code,
                (0, o.createAssetInfo)(e, t, n),
                i,
              )
            : (0, r.makeStandardNonFungiblePostCondition)(
                this.principal,
                this.code,
                (0, o.createAssetInfo)(e, t, n),
                i,
              );
        }
      }
      function a(e) {
        const [t, n] = e.split(".");
        if (!t || !n) throw new Error("Invalid contract identifier: " + e);
        return [t, n];
      }
      function c(e) {
        const [t, n] = e.split("::");
        if (!t || !n)
          throw new Error("Invalid fully-qualified nft asset name: " + e);
        const [r, i] = a(t);
        return { contractAddress: r, contractName: i, tokenName: n };
      }
      function u(e) {
        return e.includes(".");
      }
      function d() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (2 === t.length) {
          const [e, n] = t;
          return { ...c(e), assetId: n };
        }
        const [r, i, o] = t,
          [s, u] = a(r);
        return {
          contractAddress: s,
          contractName: u,
          tokenName: i,
          assetId: o,
        };
      }
    },
    11547: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.STRUCTURED_DATA_PREFIX = void 0),
        (t.decodeStructuredDataSignature = h),
        (t.encodeStructuredData = f),
        (t.hashStructuredData = u),
        (t.signStructuredData = y));
      var r = n(5742),
        i = n(2778),
        o = n(3469),
        s = n(3128),
        a = n(3856);
      const c = (t.STRUCTURED_DATA_PREFIX = new Uint8Array([
        83, 73, 80, 48, 49, 56,
      ]));
      function u(e) {
        return (0, r.sha256)((0, o.serializeCV)(e));
      }
      const d = 32;
      function l(e) {
        return (
          e.type === o.ClarityType.Tuple &&
          !!["name", "version", "chain-id"].every((t) => t in e.data) &&
          !!["name", "version"].every(
            (t) => e.data[t].type === o.ClarityType.StringASCII,
          ) &&
          e.data["chain-id"].type === o.ClarityType.UInt
        );
      }
      function f(e) {
        let { message: t, domain: n } = e;
        const r = u(t);
        if (!l(n))
          throw new Error(
            "domain parameter must be a valid domain of type TupleCV with keys 'name', 'version', 'chain-id' with respective types StringASCII, StringASCII, UInt",
          );
        const o = u(n);
        return (0, i.concatBytes)(c, o, r);
      }
      function h(e) {
        const t = "string" === typeof e ? (0, i.utf8ToBytes)(e) : e,
          n = t.slice(c.length, c.length + d),
          r = t.slice(c.length + d);
        return { domainHash: n, messageHash: r };
      }
      function y(e) {
        let { message: t, domain: n, privateKey: o } = e;
        const c = (0, i.bytesToHex)(
            (0, r.sha256)(f({ message: t, domain: n })),
          ),
          { data: u } = (0, a.signMessageHashRsv)({
            messageHash: c,
            privateKey: o,
          });
        return { data: u, type: s.StacksMessageType.StructuredDataSignature };
      }
    },
    3128: function (e, t, n) {
      "use strict";
      var r;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UNCOMPRESSED_PUBKEY_LENGTH_BYTES =
          t.TxRejectedReason =
          t.TransactionVersion =
          t.StacksMessageType =
          t.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES =
          t.PubKeyEncoding =
          t.PostConditionType =
          t.PostConditionPrincipalID =
          t.PostConditionMode =
          t.PayloadType =
          t.NonFungibleConditionCode =
          t.MEMO_MAX_LENGTH_BYTES =
          t.MAX_STRING_LENGTH_BYTES =
          t.FungibleConditionCode =
          t.DEFAULT_TRANSACTION_VERSION =
          t.DEFAULT_CORE_NODE_API_URL =
          t.DEFAULT_CHAIN_ID =
          t.ClarityVersion =
          t.ChainID =
          t.COMPRESSED_PUBKEY_LENGTH_BYTES =
          t.COINBASE_BYTES_LENGTH =
          t.CLARITY_INT_SIZE =
          t.CLARITY_INT_BYTE_SIZE =
          t.AuthType =
          t.AssetType =
          t.AnchorModeNames =
          t.AnchorMode =
          t.AddressVersion =
          t.AddressHashMode =
            void 0),
        (t.anchorModeFromNameOrValue = l),
        (t.whenMessageType = c),
        (function (e) {
          ((e[(e["Testnet"] = 2147483648)] = "Testnet"),
            (e[(e["Mainnet"] = 1)] = "Mainnet"));
        })(r || (t.ChainID = r = {})));
      ((t.DEFAULT_CHAIN_ID = r.Mainnet),
        (t.MAX_STRING_LENGTH_BYTES = 128),
        (t.CLARITY_INT_SIZE = 128),
        (t.CLARITY_INT_BYTE_SIZE = 16),
        (t.COINBASE_BYTES_LENGTH = 32),
        (t.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES = 65),
        (t.COMPRESSED_PUBKEY_LENGTH_BYTES = 32),
        (t.UNCOMPRESSED_PUBKEY_LENGTH_BYTES = 64),
        (t.MEMO_MAX_LENGTH_BYTES = 34),
        (t.DEFAULT_CORE_NODE_API_URL =
          "https://stacks-node-api.mainnet.stacks.co"));
      var i, o, s, a;
      function c(e) {
        return (t) => t[e];
      }
      ((function (e) {
        ((e[(e["Address"] = 0)] = "Address"),
          (e[(e["Principal"] = 1)] = "Principal"),
          (e[(e["LengthPrefixedString"] = 2)] = "LengthPrefixedString"),
          (e[(e["MemoString"] = 3)] = "MemoString"),
          (e[(e["AssetInfo"] = 4)] = "AssetInfo"),
          (e[(e["PostCondition"] = 5)] = "PostCondition"),
          (e[(e["PublicKey"] = 6)] = "PublicKey"),
          (e[(e["LengthPrefixedList"] = 7)] = "LengthPrefixedList"),
          (e[(e["Payload"] = 8)] = "Payload"),
          (e[(e["MessageSignature"] = 9)] = "MessageSignature"),
          (e[(e["StructuredDataSignature"] = 10)] = "StructuredDataSignature"),
          (e[(e["TransactionAuthField"] = 11)] = "TransactionAuthField"));
      })(i || (t.StacksMessageType = i = {})),
        (function (e) {
          ((e[(e["TokenTransfer"] = 0)] = "TokenTransfer"),
            (e[(e["SmartContract"] = 1)] = "SmartContract"),
            (e[(e["VersionedSmartContract"] = 6)] = "VersionedSmartContract"),
            (e[(e["ContractCall"] = 2)] = "ContractCall"),
            (e[(e["PoisonMicroblock"] = 3)] = "PoisonMicroblock"),
            (e[(e["Coinbase"] = 4)] = "Coinbase"),
            (e[(e["CoinbaseToAltRecipient"] = 5)] = "CoinbaseToAltRecipient"));
        })(o || (t.PayloadType = o = {})),
        (function (e) {
          ((e[(e["Clarity1"] = 1)] = "Clarity1"),
            (e[(e["Clarity2"] = 2)] = "Clarity2"));
        })(s || (t.ClarityVersion = s = {})),
        (function (e) {
          ((e[(e["OnChainOnly"] = 1)] = "OnChainOnly"),
            (e[(e["OffChainOnly"] = 2)] = "OffChainOnly"),
            (e[(e["Any"] = 3)] = "Any"));
        })(a || (t.AnchorMode = a = {})));
      const u = (t.AnchorModeNames = ["onChainOnly", "offChainOnly", "any"]),
        d = {
          [u[0]]: a.OnChainOnly,
          [u[1]]: a.OffChainOnly,
          [u[2]]: a.Any,
          [a.OnChainOnly]: a.OnChainOnly,
          [a.OffChainOnly]: a.OffChainOnly,
          [a.Any]: a.Any,
        };
      function l(e) {
        if (e in d) return d[e];
        throw new Error(
          `Invalid anchor mode "${e}", must be one of: ${u.join(", ")}`,
        );
      }
      var f;
      (function (e) {
        ((e[(e["Mainnet"] = 0)] = "Mainnet"),
          (e[(e["Testnet"] = 128)] = "Testnet"));
      })(f || (t.TransactionVersion = f = {}));
      t.DEFAULT_TRANSACTION_VERSION = f.Mainnet;
      var h, y, p, g, b, T, S, w, C, m, P;
      ((function (e) {
        ((e[(e["Allow"] = 1)] = "Allow"), (e[(e["Deny"] = 2)] = "Deny"));
      })(h || (t.PostConditionMode = h = {})),
        (function (e) {
          ((e[(e["STX"] = 0)] = "STX"),
            (e[(e["Fungible"] = 1)] = "Fungible"),
            (e[(e["NonFungible"] = 2)] = "NonFungible"));
        })(y || (t.PostConditionType = y = {})),
        (function (e) {
          ((e[(e["Standard"] = 4)] = "Standard"),
            (e[(e["Sponsored"] = 5)] = "Sponsored"));
        })(p || (t.AuthType = p = {})),
        (function (e) {
          ((e[(e["SerializeP2PKH"] = 0)] = "SerializeP2PKH"),
            (e[(e["SerializeP2SH"] = 1)] = "SerializeP2SH"),
            (e[(e["SerializeP2WPKH"] = 2)] = "SerializeP2WPKH"),
            (e[(e["SerializeP2WSH"] = 3)] = "SerializeP2WSH"));
        })(g || (t.AddressHashMode = g = {})),
        (function (e) {
          ((e[(e["MainnetSingleSig"] = 22)] = "MainnetSingleSig"),
            (e[(e["MainnetMultiSig"] = 20)] = "MainnetMultiSig"),
            (e[(e["TestnetSingleSig"] = 26)] = "TestnetSingleSig"),
            (e[(e["TestnetMultiSig"] = 21)] = "TestnetMultiSig"));
        })(b || (t.AddressVersion = b = {})),
        (function (e) {
          ((e[(e["Compressed"] = 0)] = "Compressed"),
            (e[(e["Uncompressed"] = 1)] = "Uncompressed"));
        })(T || (t.PubKeyEncoding = T = {})),
        (function (e) {
          ((e[(e["Equal"] = 1)] = "Equal"),
            (e[(e["Greater"] = 2)] = "Greater"),
            (e[(e["GreaterEqual"] = 3)] = "GreaterEqual"),
            (e[(e["Less"] = 4)] = "Less"),
            (e[(e["LessEqual"] = 5)] = "LessEqual"));
        })(S || (t.FungibleConditionCode = S = {})),
        (function (e) {
          ((e[(e["Sends"] = 16)] = "Sends"),
            (e[(e["DoesNotSend"] = 17)] = "DoesNotSend"));
        })(w || (t.NonFungibleConditionCode = w = {})),
        (function (e) {
          ((e[(e["Origin"] = 1)] = "Origin"),
            (e[(e["Standard"] = 2)] = "Standard"),
            (e[(e["Contract"] = 3)] = "Contract"));
        })(C || (t.PostConditionPrincipalID = C = {})),
        (function (e) {
          ((e[(e["STX"] = 0)] = "STX"),
            (e[(e["Fungible"] = 1)] = "Fungible"),
            (e[(e["NonFungible"] = 2)] = "NonFungible"));
        })(m || (t.AssetType = m = {})),
        (function (e) {
          ((e["Serialization"] = "Serialization"),
            (e["Deserialization"] = "Deserialization"),
            (e["SignatureValidation"] = "SignatureValidation"),
            (e["FeeTooLow"] = "FeeTooLow"),
            (e["BadNonce"] = "BadNonce"),
            (e["NotEnoughFunds"] = "NotEnoughFunds"),
            (e["NoSuchContract"] = "NoSuchContract"),
            (e["NoSuchPublicFunction"] = "NoSuchPublicFunction"),
            (e["BadFunctionArgument"] = "BadFunctionArgument"),
            (e["ContractAlreadyExists"] = "ContractAlreadyExists"),
            (e["PoisonMicroblocksDoNotConflict"] =
              "PoisonMicroblocksDoNotConflict"),
            (e["PoisonMicroblockHasUnknownPubKeyHash"] =
              "PoisonMicroblockHasUnknownPubKeyHash"),
            (e["PoisonMicroblockIsInvalid"] = "PoisonMicroblockIsInvalid"),
            (e["BadAddressVersionByte"] = "BadAddressVersionByte"),
            (e["NoCoinbaseViaMempool"] = "NoCoinbaseViaMempool"),
            (e["ServerFailureNoSuchChainTip"] = "ServerFailureNoSuchChainTip"),
            (e["ServerFailureDatabase"] = "ServerFailureDatabase"),
            (e["ServerFailureOther"] = "ServerFailureOther"));
        })(P || (t.TxRejectedReason = P = {})));
    },
    3208: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.b58ToC32 =
          t.c32ToB58 =
          t.versions =
          t.c32normalize =
          t.c32addressDecode =
          t.c32address =
          t.c32checkDecode =
          t.c32checkEncode =
          t.c32decode =
          t.c32encode =
            void 0));
      const r = n(3624);
      (Object.defineProperty(t, "c32encode", {
        enumerable: !0,
        get: function () {
          return r.c32encode;
        },
      }),
        Object.defineProperty(t, "c32decode", {
          enumerable: !0,
          get: function () {
            return r.c32decode;
          },
        }),
        Object.defineProperty(t, "c32normalize", {
          enumerable: !0,
          get: function () {
            return r.c32normalize;
          },
        }));
      const i = n(3625);
      (Object.defineProperty(t, "c32checkEncode", {
        enumerable: !0,
        get: function () {
          return i.c32checkEncode;
        },
      }),
        Object.defineProperty(t, "c32checkDecode", {
          enumerable: !0,
          get: function () {
            return i.c32checkDecode;
          },
        }));
      const o = n(4597);
      (Object.defineProperty(t, "c32address", {
        enumerable: !0,
        get: function () {
          return o.c32address;
        },
      }),
        Object.defineProperty(t, "c32addressDecode", {
          enumerable: !0,
          get: function () {
            return o.c32addressDecode;
          },
        }),
        Object.defineProperty(t, "c32ToB58", {
          enumerable: !0,
          get: function () {
            return o.c32ToB58;
          },
        }),
        Object.defineProperty(t, "b58ToC32", {
          enumerable: !0,
          get: function () {
            return o.b58ToC32;
          },
        }),
        Object.defineProperty(t, "versions", {
          enumerable: !0,
          get: function () {
            return o.versions;
          },
        }));
    },
    3238: function (e, t, n) {
      "use strict";
      var r;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ClarityType = void 0),
        (function (e) {
          ((e[(e["Int"] = 0)] = "Int"),
            (e[(e["UInt"] = 1)] = "UInt"),
            (e[(e["Buffer"] = 2)] = "Buffer"),
            (e[(e["BoolTrue"] = 3)] = "BoolTrue"),
            (e[(e["BoolFalse"] = 4)] = "BoolFalse"),
            (e[(e["PrincipalStandard"] = 5)] = "PrincipalStandard"),
            (e[(e["PrincipalContract"] = 6)] = "PrincipalContract"),
            (e[(e["ResponseOk"] = 7)] = "ResponseOk"),
            (e[(e["ResponseErr"] = 8)] = "ResponseErr"),
            (e[(e["OptionalNone"] = 9)] = "OptionalNone"),
            (e[(e["OptionalSome"] = 10)] = "OptionalSome"),
            (e[(e["List"] = 11)] = "List"),
            (e[(e["Tuple"] = 12)] = "Tuple"),
            (e[(e["StringASCII"] = 13)] = "StringASCII"),
            (e[(e["StringUTF8"] = 14)] = "StringUTF8"));
        })(r || (t.ClarityType = r = {})));
    },
    3282: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Signature = t.Point = t.CURVE = void 0),
        (t.getPublicKey = Q),
        (t.getSharedSecret = ne),
        (t.recoverPublicKey = ee),
        (t.schnorr = void 0),
        (t.sign = ce),
        (t.signSync = ue),
        (t.utils = void 0),
        (t.verify = le));
      var r = i(n(4262));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            o,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((i = t ? r : n)) {
            if (i.has(e)) return i.get(e);
            i.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (o.get || o.set)
                ? i(s, n, o)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      const o = BigInt(0),
        s = BigInt(1),
        a = BigInt(2),
        c = BigInt(3),
        u = BigInt(8),
        d = (t.CURVE = Object.freeze({
          a: o,
          b: BigInt(7),
          P: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
          ),
          n: BigInt(
            "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
          ),
          h: s,
          Gx: BigInt(
            "55066263022277343669578718895168534326250603453777594175500187360389116729240",
          ),
          Gy: BigInt(
            "32670510020758816978083085130507043184471273380659243275938904335757337482424",
          ),
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
          ),
        })),
        l = (e, t) => (e + t / a) / t,
        f = {
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
          ),
          splitScalar(e) {
            const { n: t } = d,
              n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
              r = -s * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
              i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
              o = n,
              a = BigInt("0x100000000000000000000000000000000"),
              c = l(o * e, t),
              u = l(-r * e, t);
            let f = F(e - c * n - u * i, t),
              h = F(-c * r - u * o, t);
            const y = f > a,
              p = h > a;
            if ((y && (f = t - f), p && (h = t - h), f > a || h > a))
              throw new Error("splitScalarEndo: Endomorphism failed, k=" + e);
            return { k1neg: y, k1: f, k2neg: p, k2: h };
          },
        },
        h = 32,
        y = 32,
        p = 32,
        g = h + 1,
        b = 2 * h + 1;
      function T(e) {
        const { a: t, b: n } = d,
          r = F(e * e),
          i = F(r * e);
        return F(i + t * e + n);
      }
      const S = d.a === o;
      class ShaError extends Error {
        constructor(e) {
          super(e);
        }
      }
      function w(e) {
        if (!(e instanceof JacobianPoint))
          throw new TypeError("JacobianPoint expected");
      }
      class JacobianPoint {
        constructor(e, t, n) {
          ((this.x = e), (this.y = t), (this.z = n));
        }
        static fromAffine(e) {
          if (!(e instanceof Point))
            throw new TypeError("JacobianPoint#fromAffine: expected Point");
          return e.equals(Point.ZERO)
            ? JacobianPoint.ZERO
            : new JacobianPoint(e.x, e.y, s);
        }
        static toAffineBatch(e) {
          const t = $(e.map((e) => e.z));
          return e.map((e, n) => e.toAffine(t[n]));
        }
        static normalizeZ(e) {
          return JacobianPoint.toAffineBatch(e).map(JacobianPoint.fromAffine);
        }
        equals(e) {
          w(e);
          const { x: t, y: n, z: r } = this,
            { x: i, y: o, z: s } = e,
            a = F(r * r),
            c = F(s * s),
            u = F(t * c),
            d = F(i * a),
            l = F(F(n * s) * c),
            f = F(F(o * r) * a);
          return u === d && l === f;
        }
        negate() {
          return new JacobianPoint(this.x, F(-this.y), this.z);
        }
        double() {
          const { x: e, y: t, z: n } = this,
            r = F(e * e),
            i = F(t * t),
            o = F(i * i),
            s = e + i,
            d = F(a * (F(s * s) - r - o)),
            l = F(c * r),
            f = F(l * l),
            h = F(f - a * d),
            y = F(l * (d - h) - u * o),
            p = F(a * t * n);
          return new JacobianPoint(h, y, p);
        }
        add(e) {
          w(e);
          const { x: t, y: n, z: r } = this,
            { x: i, y: s, z: c } = e;
          if (i === o || s === o) return this;
          if (t === o || n === o) return e;
          const u = F(r * r),
            d = F(c * c),
            l = F(t * d),
            f = F(i * u),
            h = F(F(n * c) * d),
            y = F(F(s * r) * u),
            p = F(f - l),
            g = F(y - h);
          if (p === o) return g === o ? this.double() : JacobianPoint.ZERO;
          const b = F(p * p),
            T = F(p * b),
            S = F(l * b),
            C = F(g * g - T - a * S),
            m = F(g * (S - C) - h * T),
            P = F(r * c * p);
          return new JacobianPoint(C, m, P);
        }
        subtract(e) {
          return this.add(e.negate());
        }
        multiplyUnsafe(e) {
          const t = JacobianPoint.ZERO;
          if ("bigint" === typeof e && e === o) return t;
          let n = V(e);
          if (n === s) return this;
          if (!S) {
            let e = t,
              r = this;
            while (n > o)
              (n & s && (e = e.add(r)), (r = r.double()), (n >>= s));
            return e;
          }
          let { k1neg: r, k1: i, k2neg: a, k2: c } = f.splitScalar(n),
            u = t,
            d = t,
            l = this;
          while (i > o || c > o)
            (i & s && (u = u.add(l)),
              c & s && (d = d.add(l)),
              (l = l.double()),
              (i >>= s),
              (c >>= s));
          return (
            r && (u = u.negate()),
            a && (d = d.negate()),
            (d = new JacobianPoint(F(d.x * f.beta), d.y, d.z)),
            u.add(d)
          );
        }
        precomputeWindow(e) {
          const t = S ? 128 / e + 1 : 256 / e + 1,
            n = [];
          let r = this,
            i = r;
          for (let o = 0; o < t; o++) {
            ((i = r), n.push(i));
            for (let t = 1; t < 2 ** (e - 1); t++) ((i = i.add(r)), n.push(i));
            r = i.double();
          }
          return n;
        }
        wNAF(e, t) {
          !t && this.equals(JacobianPoint.BASE) && (t = Point.BASE);
          const n = (t && t._WINDOW_SIZE) || 1;
          if (256 % n)
            throw new Error(
              "Point#wNAF: Invalid precomputation window, must be power of 2",
            );
          let r = t && m.get(t);
          r ||
            ((r = this.precomputeWindow(n)),
            t && 1 !== n && ((r = JacobianPoint.normalizeZ(r)), m.set(t, r)));
          let i = JacobianPoint.ZERO,
            o = JacobianPoint.BASE;
          const a = 1 + (S ? 128 / n : 256 / n),
            c = 2 ** (n - 1),
            u = BigInt(2 ** n - 1),
            d = 2 ** n,
            l = BigInt(n);
          for (let f = 0; f < a; f++) {
            const t = f * c;
            let n = Number(e & u);
            ((e >>= l), n > c && ((n -= d), (e += s)));
            const a = t,
              h = t + Math.abs(n) - 1,
              y = f % 2 !== 0,
              p = n < 0;
            0 === n ? (o = o.add(C(y, r[a]))) : (i = i.add(C(p, r[h])));
          }
          return { p: i, f: o };
        }
        multiply(e, t) {
          let n,
            r,
            i = V(e);
          if (S) {
            const { k1neg: e, k1: o, k2neg: s, k2: a } = f.splitScalar(i);
            let { p: c, f: u } = this.wNAF(o, t),
              { p: d, f: l } = this.wNAF(a, t);
            ((c = C(e, c)),
              (d = C(s, d)),
              (d = new JacobianPoint(F(d.x * f.beta), d.y, d.z)),
              (n = c.add(d)),
              (r = u.add(l)));
          } else {
            const { p: e, f: o } = this.wNAF(i, t);
            ((n = e), (r = o));
          }
          return JacobianPoint.normalizeZ([n, r])[0];
        }
        toAffine(e) {
          const { x: t, y: n, z: r } = this,
            i = this.equals(JacobianPoint.ZERO);
          null == e && (e = i ? u : z(r));
          const o = e,
            a = F(o * o),
            c = F(a * o),
            d = F(t * a),
            l = F(n * c),
            f = F(r * o);
          if (i) return Point.ZERO;
          if (f !== s) throw new Error("invZ was invalid");
          return new Point(d, l);
        }
      }
      function C(e, t) {
        const n = t.negate();
        return e ? n : t;
      }
      ((JacobianPoint.BASE = new JacobianPoint(d.Gx, d.Gy, s)),
        (JacobianPoint.ZERO = new JacobianPoint(o, s, o)));
      const m = new WeakMap();
      class Point {
        constructor(e, t) {
          ((this.x = e), (this.y = t));
        }
        _setWindowSize(e) {
          ((this._WINDOW_SIZE = e), m.delete(this));
        }
        hasEvenY() {
          return this.y % a === o;
        }
        static fromCompressedHex(e) {
          const t = 32 === e.length,
            n = N(t ? e : e.subarray(1));
          if (!J(n)) throw new Error("Point is not on curve");
          const r = T(n);
          let i = j(r);
          const o = (i & s) === s;
          if (t) o && (i = F(-i));
          else {
            const t = 1 === (1 & e[0]);
            t !== o && (i = F(-i));
          }
          const a = new Point(n, i);
          return (a.assertValidity(), a);
        }
        static fromUncompressedHex(e) {
          const t = N(e.subarray(1, h + 1)),
            n = N(e.subarray(h + 1, 2 * h + 1)),
            r = new Point(t, n);
          return (r.assertValidity(), r);
        }
        static fromHex(e) {
          const t = U(e),
            n = t.length,
            r = t[0];
          if (n === h) return this.fromCompressedHex(t);
          if (n === g && (2 === r || 3 === r)) return this.fromCompressedHex(t);
          if (n === b && 4 === r) return this.fromUncompressedHex(t);
          throw new Error(
            `Point.fromHex: received invalid point. Expected 32-${g} compressed bytes or ${b} uncompressed bytes, not ${n}`,
          );
        }
        static fromPrivateKey(e) {
          return Point.BASE.multiply(X(e));
        }
        static fromSignature(e, t, n) {
          const { r: r, s: i } = Z(t);
          if (![0, 1, 2, 3].includes(n))
            throw new Error("Cannot recover: invalid recovery bit");
          const o = R(U(e)),
            { n: s } = d,
            a = 2 === n || 3 === n ? r + s : r,
            c = z(a, s),
            u = F(-o * c, s),
            l = F(i * c, s),
            f = 1 & n ? "03" : "02",
            h = Point.fromHex(f + O(a)),
            y = Point.BASE.multiplyAndAddUnsafe(h, u, l);
          if (!y)
            throw new Error("Cannot recover signature: point at infinify");
          return (y.assertValidity(), y);
        }
        toRawBytes(e) {
          return (void 0 === e && (e = !1), H(this.toHex(e)));
        }
        toHex(e) {
          void 0 === e && (e = !1);
          const t = O(this.x);
          if (e) {
            const e = this.hasEvenY() ? "02" : "03";
            return `${e}${t}`;
          }
          return `04${t}${O(this.y)}`;
        }
        toHexX() {
          return this.toHex(!0).slice(2);
        }
        toRawX() {
          return this.toRawBytes(!0).slice(1);
        }
        assertValidity() {
          const e = "Point is not on elliptic curve",
            { x: t, y: n } = this;
          if (!J(t) || !J(n)) throw new Error(e);
          const r = F(n * n),
            i = T(t);
          if (F(r - i) !== o) throw new Error(e);
        }
        equals(e) {
          return this.x === e.x && this.y === e.y;
        }
        negate() {
          return new Point(this.x, F(-this.y));
        }
        double() {
          return JacobianPoint.fromAffine(this).double().toAffine();
        }
        add(e) {
          return JacobianPoint.fromAffine(this)
            .add(JacobianPoint.fromAffine(e))
            .toAffine();
        }
        subtract(e) {
          return this.add(e.negate());
        }
        multiply(e) {
          return JacobianPoint.fromAffine(this).multiply(e, this).toAffine();
        }
        multiplyAndAddUnsafe(e, t, n) {
          const r = JacobianPoint.fromAffine(this),
            i =
              t === o || t === s || this !== Point.BASE
                ? r.multiplyUnsafe(t)
                : r.multiply(t),
            a = JacobianPoint.fromAffine(e).multiplyUnsafe(n),
            c = i.add(a);
          return c.equals(JacobianPoint.ZERO) ? void 0 : c.toAffine();
        }
      }
      function P(e) {
        return Number.parseInt(e[0], 16) >= 8 ? "00" + e : e;
      }
      function A(e) {
        if (e.length < 2 || 2 !== e[0])
          throw new Error("Invalid signature integer tag: " + x(e));
        const t = e[1],
          n = e.subarray(2, t + 2);
        if (!t || n.length !== t)
          throw new Error("Invalid signature integer: wrong length");
        if (0 === n[0] && n[1] <= 127)
          throw new Error("Invalid signature integer: trailing length");
        return { data: N(n), left: e.subarray(t + 2) };
      }
      function E(e) {
        if (e.length < 2 || 48 != e[0])
          throw new Error("Invalid signature tag: " + x(e));
        if (e[1] !== e.length - 2)
          throw new Error("Invalid signature: incorrect length");
        const { data: t, left: n } = A(e.subarray(2)),
          { data: r, left: i } = A(n);
        if (i.length)
          throw new Error(
            "Invalid signature: left bytes after parsing: " + x(i),
          );
        return { r: t, s: r };
      }
      ((t.Point = Point),
        (Point.BASE = new Point(d.Gx, d.Gy)),
        (Point.ZERO = new Point(o, o)));
      class Signature {
        constructor(e, t) {
          ((this.r = e), (this.s = t), this.assertValidity());
        }
        static fromCompact(e) {
          const t = e instanceof Uint8Array,
            n = "Signature.fromCompact";
          if ("string" !== typeof e && !t)
            throw new TypeError(n + ": Expected string or Uint8Array");
          const r = t ? x(e) : e;
          if (128 !== r.length) throw new Error(n + ": Expected 64-byte hex");
          return new Signature(I(r.slice(0, 64)), I(r.slice(64, 128)));
        }
        static fromDER(e) {
          const t = e instanceof Uint8Array;
          if ("string" !== typeof e && !t)
            throw new TypeError(
              "Signature.fromDER: Expected string or Uint8Array",
            );
          const { r: n, s: r } = E(t ? e : H(e));
          return new Signature(n, r);
        }
        static fromHex(e) {
          return this.fromDER(e);
        }
        assertValidity() {
          const { r: e, s: t } = this;
          if (!W(e)) throw new Error("Invalid Signature: r must be 0 < r < n");
          if (!W(t)) throw new Error("Invalid Signature: s must be 0 < s < n");
        }
        hasHighS() {
          const e = d.n >> s;
          return this.s > e;
        }
        normalizeS() {
          return this.hasHighS()
            ? new Signature(this.r, F(-this.s, d.n))
            : this;
        }
        toDERRawBytes() {
          return H(this.toDERHex());
        }
        toDERHex() {
          const e = P(_(this.s)),
            t = P(_(this.r)),
            n = e.length / 2,
            r = t.length / 2,
            i = _(n),
            o = _(r),
            s = _(r + n + 4);
          return `30${s}02${o}${t}02${i}${e}`;
        }
        toRawBytes() {
          return this.toDERRawBytes();
        }
        toHex() {
          return this.toDERHex();
        }
        toCompactRawBytes() {
          return H(this.toCompactHex());
        }
        toCompactHex() {
          return O(this.r) + O(this.s);
        }
      }
      function v() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (!t.every((e) => e instanceof Uint8Array))
          throw new Error("Uint8Array list expected");
        if (1 === t.length) return t[0];
        const r = t.reduce((e, t) => e + t.length, 0),
          i = new Uint8Array(r);
        for (let o = 0, s = 0; o < t.length; o++) {
          const e = t[o];
          (i.set(e, s), (s += e.length));
        }
        return i;
      }
      t.Signature = Signature;
      const k = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0"),
      );
      function x(e) {
        if (!(e instanceof Uint8Array)) throw new Error("Expected Uint8Array");
        let t = "";
        for (let n = 0; n < e.length; n++) t += k[e[n]];
        return t;
      }
      const B = BigInt(
        "0x10000000000000000000000000000000000000000000000000000000000000000",
      );
      function O(e) {
        if ("bigint" !== typeof e) throw new Error("Expected bigint");
        if (!(o <= e && e < B))
          throw new Error("Expected number 0 <= n < 2^256");
        return e.toString(16).padStart(64, "0");
      }
      function M(e) {
        const t = H(O(e));
        if (32 !== t.length) throw new Error("Error: expected 32 bytes");
        return t;
      }
      function _(e) {
        const t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function I(e) {
        if ("string" !== typeof e)
          throw new TypeError("hexToNumber: expected string, got " + typeof e);
        return BigInt("0x" + e);
      }
      function H(e) {
        if ("string" !== typeof e)
          throw new TypeError("hexToBytes: expected string, got " + typeof e);
        if (e.length % 2)
          throw new Error(
            "hexToBytes: received invalid unpadded hex" + e.length,
          );
        const t = new Uint8Array(e.length / 2);
        for (let n = 0; n < t.length; n++) {
          const r = 2 * n,
            i = e.slice(r, r + 2),
            o = Number.parseInt(i, 16);
          if (Number.isNaN(o) || o < 0)
            throw new Error("Invalid byte sequence");
          t[n] = o;
        }
        return t;
      }
      function N(e) {
        return I(x(e));
      }
      function U(e) {
        return e instanceof Uint8Array ? Uint8Array.from(e) : H(e);
      }
      function V(e) {
        if ("number" === typeof e && Number.isSafeInteger(e) && e > 0)
          return BigInt(e);
        if ("bigint" === typeof e && W(e)) return e;
        throw new TypeError(
          "Expected valid private scalar: 0 < scalar < curve.n",
        );
      }
      function F(e, t) {
        void 0 === t && (t = d.P);
        const n = e % t;
        return n >= o ? n : t + n;
      }
      function L(e, t) {
        const { P: n } = d;
        let r = e;
        while (t-- > o) ((r *= r), (r %= n));
        return r;
      }
      function j(e) {
        const { P: t } = d,
          n = BigInt(6),
          r = BigInt(11),
          i = BigInt(22),
          o = BigInt(23),
          s = BigInt(44),
          u = BigInt(88),
          l = (e * e * e) % t,
          f = (l * l * e) % t,
          h = (L(f, c) * f) % t,
          y = (L(h, c) * f) % t,
          p = (L(y, a) * l) % t,
          g = (L(p, r) * p) % t,
          b = (L(g, i) * g) % t,
          T = (L(b, s) * b) % t,
          S = (L(T, u) * T) % t,
          w = (L(S, s) * b) % t,
          C = (L(w, c) * f) % t,
          m = (L(C, o) * g) % t,
          P = (L(m, n) * l) % t,
          A = L(P, a),
          E = (A * A) % t;
        if (E !== e) throw new Error("Cannot find square root");
        return A;
      }
      function z(e, t) {
        if ((void 0 === t && (t = d.P), e === o || t <= o))
          throw new Error(
            `invert: expected positive integers, got n=${e} mod=${t}`,
          );
        let n = F(e, t),
          r = t,
          i = o,
          a = s,
          c = s,
          u = o;
        while (n !== o) {
          const e = r / n,
            t = r % n,
            o = i - c * e,
            s = a - u * e;
          ((r = n), (n = t), (i = c), (a = u), (c = o), (u = s));
        }
        const l = r;
        if (l !== s) throw new Error("invert: does not exist");
        return F(i, t);
      }
      function $(e, t) {
        void 0 === t && (t = d.P);
        const n = new Array(e.length),
          r = e.reduce(
            (e, r, i) => (r === o ? e : ((n[i] = e), F(e * r, t))),
            s,
          ),
          i = z(r, t);
        return (
          e.reduceRight(
            (e, r, i) => (r === o ? e : ((n[i] = F(e * n[i], t)), F(e * r, t))),
            i,
          ),
          n
        );
      }
      function K(e) {
        const t = 8 * e.length - 8 * y,
          n = N(e);
        return t > 0 ? n >> BigInt(t) : n;
      }
      function R(e, t) {
        void 0 === t && (t = !1);
        const n = K(e);
        if (t) return n;
        const { n: r } = d;
        return n >= r ? n - r : n;
      }
      let D, G;
      class HmacDrbg {
        constructor(e, t) {
          if (
            ((this.hashLen = e),
            (this.qByteLen = t),
            "number" !== typeof e || e < 2)
          )
            throw new Error("hashLen must be a number");
          if ("number" !== typeof t || t < 2)
            throw new Error("qByteLen must be a number");
          ((this.v = new Uint8Array(e).fill(1)),
            (this.k = new Uint8Array(e).fill(0)),
            (this.counter = 0));
        }
        hmac() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return Pe.hmacSha256(this.k, ...t);
        }
        hmacSync() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return G(this.k, ...t);
        }
        checkSync() {
          if ("function" !== typeof G)
            throw new ShaError("hmacSha256Sync needs to be set");
        }
        incr() {
          if (this.counter >= 1e3)
            throw new Error(
              "Tried 1,000 k values for sign(), all were invalid",
            );
          this.counter += 1;
        }
        async reseed(e) {
          (void 0 === e && (e = new Uint8Array()),
            (this.k = await this.hmac(this.v, Uint8Array.from([0]), e)),
            (this.v = await this.hmac(this.v)),
            0 !== e.length &&
              ((this.k = await this.hmac(this.v, Uint8Array.from([1]), e)),
              (this.v = await this.hmac(this.v))));
        }
        reseedSync(e) {
          (void 0 === e && (e = new Uint8Array()),
            this.checkSync(),
            (this.k = this.hmacSync(this.v, Uint8Array.from([0]), e)),
            (this.v = this.hmacSync(this.v)),
            0 !== e.length &&
              ((this.k = this.hmacSync(this.v, Uint8Array.from([1]), e)),
              (this.v = this.hmacSync(this.v))));
        }
        async generate() {
          this.incr();
          let e = 0;
          const t = [];
          while (e < this.qByteLen) {
            this.v = await this.hmac(this.v);
            const n = this.v.slice();
            (t.push(n), (e += this.v.length));
          }
          return v(...t);
        }
        generateSync() {
          (this.checkSync(), this.incr());
          let e = 0;
          const t = [];
          while (e < this.qByteLen) {
            this.v = this.hmacSync(this.v);
            const n = this.v.slice();
            (t.push(n), (e += this.v.length));
          }
          return v(...t);
        }
      }
      function W(e) {
        return o < e && e < d.n;
      }
      function J(e) {
        return o < e && e < d.P;
      }
      function Y(e, t, n, r) {
        void 0 === r && (r = !0);
        const { n: i } = d,
          a = R(e, !0);
        if (!W(a)) return;
        const c = z(a, i),
          u = Point.BASE.multiply(a),
          l = F(u.x, i);
        if (l === o) return;
        const f = F(c * F(t + n * l, i), i);
        if (f === o) return;
        let h = new Signature(l, f),
          y = (u.x === h.r ? 0 : 2) | Number(u.y & s);
        return (
          r && h.hasHighS() && ((h = h.normalizeS()), (y ^= 1)),
          { sig: h, recovery: y }
        );
      }
      function X(e) {
        let t;
        if ("bigint" === typeof e) t = e;
        else if ("number" === typeof e && Number.isSafeInteger(e) && e > 0)
          t = BigInt(e);
        else if ("string" === typeof e) {
          if (e.length !== 2 * y)
            throw new Error("Expected 32 bytes of private key");
          t = I(e);
        } else {
          if (!(e instanceof Uint8Array))
            throw new TypeError("Expected valid private key");
          if (e.length !== y)
            throw new Error("Expected 32 bytes of private key");
          t = N(e);
        }
        if (!W(t)) throw new Error("Expected private key: 0 < key < n");
        return t;
      }
      function q(e) {
        return e instanceof Point ? (e.assertValidity(), e) : Point.fromHex(e);
      }
      function Z(e) {
        if (e instanceof Signature) return (e.assertValidity(), e);
        try {
          return Signature.fromDER(e);
        } catch (t) {
          return Signature.fromCompact(e);
        }
      }
      function Q(e, t) {
        return (
          void 0 === t && (t = !1),
          Point.fromPrivateKey(e).toRawBytes(t)
        );
      }
      function ee(e, t, n, r) {
        return (
          void 0 === r && (r = !1),
          Point.fromSignature(e, t, n).toRawBytes(r)
        );
      }
      function te(e) {
        const t = e instanceof Uint8Array,
          n = "string" === typeof e,
          r = (t || n) && e.length;
        return t
          ? r === g || r === b
          : n
            ? r === 2 * g || r === 2 * b
            : e instanceof Point;
      }
      function ne(e, t, n) {
        if ((void 0 === n && (n = !1), te(e)))
          throw new TypeError("getSharedSecret: first arg must be private key");
        if (!te(t))
          throw new TypeError("getSharedSecret: second arg must be public key");
        const r = q(t);
        return (r.assertValidity(), r.multiply(X(e)).toRawBytes(n));
      }
      function re(e) {
        const t = e.length > h ? e.slice(0, h) : e;
        return N(t);
      }
      function ie(e) {
        const t = re(e),
          n = F(t, d.n);
        return oe(n < o ? t : n);
      }
      function oe(e) {
        return M(e);
      }
      function se(e, t, n) {
        if (null == e)
          throw new Error(`sign: expected valid message hash, not "${e}"`);
        const r = U(e),
          i = X(t),
          o = [oe(i), ie(r)];
        if (null != n) {
          !0 === n && (n = Pe.randomBytes(h));
          const e = U(n);
          if (e.length !== h)
            throw new Error(`sign: Expected ${h} bytes of extra data`);
          o.push(e);
        }
        const s = v(...o),
          a = re(r);
        return { seed: s, m: a, d: i };
      }
      function ae(e, t) {
        const { sig: n, recovery: r } = e,
          { der: i, recovered: o } = Object.assign(
            { canonical: !0, der: !0 },
            t,
          ),
          s = i ? n.toDERRawBytes() : n.toCompactRawBytes();
        return o ? [s, r] : s;
      }
      async function ce(e, t, n) {
        void 0 === n && (n = {});
        const { seed: r, m: i, d: o } = se(e, t, n.extraEntropy),
          s = new HmacDrbg(p, y);
        let a;
        await s.reseed(r);
        while (!(a = Y(await s.generate(), i, o, n.canonical)))
          await s.reseed();
        return ae(a, n);
      }
      function ue(e, t, n) {
        void 0 === n && (n = {});
        const { seed: r, m: i, d: o } = se(e, t, n.extraEntropy),
          s = new HmacDrbg(p, y);
        let a;
        s.reseedSync(r);
        while (!(a = Y(s.generateSync(), i, o, n.canonical))) s.reseedSync();
        return ae(a, n);
      }
      const de = { strict: !0 };
      function le(e, t, n, r) {
        let i;
        void 0 === r && (r = de);
        try {
          ((i = Z(e)), (t = U(t)));
        } catch (g) {
          return !1;
        }
        const { r: o, s: s } = i;
        if (r.strict && i.hasHighS()) return !1;
        const a = R(t);
        let c;
        try {
          c = q(n);
        } catch (g) {
          return !1;
        }
        const { n: u } = d,
          l = z(s, u),
          f = F(a * l, u),
          h = F(o * l, u),
          y = Point.BASE.multiplyAndAddUnsafe(c, f, h);
        if (!y) return !1;
        const p = F(y.x, u);
        return p === o;
      }
      function fe(e) {
        return F(N(e), d.n);
      }
      class SchnorrSignature {
        constructor(e, t) {
          ((this.r = e), (this.s = t), this.assertValidity());
        }
        static fromHex(e) {
          const t = U(e);
          if (64 !== t.length)
            throw new TypeError(
              "SchnorrSignature.fromHex: expected 64 bytes, not " + t.length,
            );
          const n = N(t.subarray(0, 32)),
            r = N(t.subarray(32, 64));
          return new SchnorrSignature(n, r);
        }
        assertValidity() {
          const { r: e, s: t } = this;
          if (!J(e) || !W(t)) throw new Error("Invalid signature");
        }
        toHex() {
          return O(this.r) + O(this.s);
        }
        toRawBytes() {
          return H(this.toHex());
        }
      }
      function he(e) {
        return Point.fromPrivateKey(e).toRawX();
      }
      class InternalSchnorrSignature {
        constructor(e, t, n) {
          if ((void 0 === n && (n = Pe.randomBytes()), null == e))
            throw new TypeError(`sign: Expected valid message, not "${e}"`);
          this.m = U(e);
          const { x: r, scalar: i } = this.getScalar(X(t));
          if (
            ((this.px = r),
            (this.d = i),
            (this.rand = U(n)),
            32 !== this.rand.length)
          )
            throw new TypeError("sign: Expected 32 bytes of aux randomness");
        }
        getScalar(e) {
          const t = Point.fromPrivateKey(e),
            n = t.hasEvenY() ? e : d.n - e;
          return { point: t, scalar: n, x: t.toRawX() };
        }
        initNonce(e, t) {
          return M(e ^ N(t));
        }
        finalizeNonce(e) {
          const t = F(N(e), d.n);
          if (t === o)
            throw new Error("sign: Creation of signature failed. k is zero");
          const { point: n, x: r, scalar: i } = this.getScalar(t);
          return { R: n, rx: r, k: i };
        }
        finalizeSig(e, t, n, r) {
          return new SchnorrSignature(e.x, F(t + n * r, d.n)).toRawBytes();
        }
        error() {
          throw new Error("sign: Invalid signature produced");
        }
        async calc() {
          const { m: e, d: t, px: n, rand: r } = this,
            i = Pe.taggedHash,
            o = this.initNonce(t, await i(Ce.aux, r)),
            {
              R: s,
              rx: a,
              k: c,
            } = this.finalizeNonce(await i(Ce.nonce, o, n, e)),
            u = fe(await i(Ce.challenge, a, n, e)),
            d = this.finalizeSig(s, c, u, t);
          return ((await Te(d, e, n)) || this.error(), d);
        }
        calcSync() {
          const { m: e, d: t, px: n, rand: r } = this,
            i = Pe.taggedHashSync,
            o = this.initNonce(t, i(Ce.aux, r)),
            { R: s, rx: a, k: c } = this.finalizeNonce(i(Ce.nonce, o, n, e)),
            u = fe(i(Ce.challenge, a, n, e)),
            d = this.finalizeSig(s, c, u, t);
          return (Se(d, e, n) || this.error(), d);
        }
      }
      async function ye(e, t, n) {
        return new InternalSchnorrSignature(e, t, n).calc();
      }
      function pe(e, t, n) {
        return new InternalSchnorrSignature(e, t, n).calcSync();
      }
      function ge(e, t, n) {
        const r = e instanceof SchnorrSignature,
          i = r ? e : SchnorrSignature.fromHex(e);
        return (r && i.assertValidity(), { ...i, m: U(t), P: q(n) });
      }
      function be(e, t, n, r) {
        const i = Point.BASE.multiplyAndAddUnsafe(t, X(n), F(-r, d.n));
        return !(!i || !i.hasEvenY() || i.x !== e);
      }
      async function Te(e, t, n) {
        try {
          const { r: r, s: i, m: o, P: s } = ge(e, t, n),
            a = fe(await Pe.taggedHash(Ce.challenge, M(r), s.toRawX(), o));
          return be(r, s, i, a);
        } catch (r) {
          return !1;
        }
      }
      function Se(e, t, n) {
        try {
          const { r: r, s: i, m: o, P: s } = ge(e, t, n),
            a = fe(Pe.taggedHashSync(Ce.challenge, M(r), s.toRawX(), o));
          return be(r, s, i, a);
        } catch (r) {
          if (r instanceof ShaError) throw r;
          return !1;
        }
      }
      t.schnorr = {
        Signature: SchnorrSignature,
        getPublicKey: he,
        sign: ye,
        verify: Te,
        signSync: pe,
        verifySync: Se,
      };
      Point.BASE._setWindowSize(8);
      const we = {
          node: r,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        },
        Ce = {
          challenge: "BIP0340/challenge",
          aux: "BIP0340/aux",
          nonce: "BIP0340/nonce",
        },
        me = {},
        Pe = (t.utils = {
          bytesToHex: x,
          hexToBytes: H,
          concatBytes: v,
          mod: F,
          invert: z,
          isValidPrivateKey(e) {
            try {
              return (X(e), !0);
            } catch (t) {
              return !1;
            }
          },
          _bigintTo32Bytes: M,
          _normalizePrivateKey: X,
          hashToPrivateKey: (e) => {
            e = U(e);
            const t = y + 8;
            if (e.length < t || e.length > 1024)
              throw new Error(
                "Expected valid bytes of private key as per FIPS 186",
              );
            const n = F(N(e), d.n - s) + s;
            return M(n);
          },
          randomBytes: function (e) {
            if ((void 0 === e && (e = 32), we.web))
              return we.web.getRandomValues(new Uint8Array(e));
            if (we.node) {
              const { randomBytes: t } = we.node;
              return Uint8Array.from(t(e));
            }
            throw new Error(
              "The environment doesn't have randomBytes function",
            );
          },
          randomPrivateKey: () => Pe.hashToPrivateKey(Pe.randomBytes(y + 8)),
          precompute(e, t) {
            (void 0 === e && (e = 8), void 0 === t && (t = Point.BASE));
            const n = t === Point.BASE ? t : new Point(t.x, t.y);
            return (n._setWindowSize(e), n.multiply(c), n);
          },
          sha256: async function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            if (we.web) {
              const e = await we.web.subtle.digest("SHA-256", v(...t));
              return new Uint8Array(e);
            }
            if (we.node) {
              const { createHash: e } = we.node,
                n = e("sha256");
              return (
                t.forEach((e) => n.update(e)),
                Uint8Array.from(n.digest())
              );
            }
            throw new Error("The environment doesn't have sha256 function");
          },
          hmacSha256: async function (e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            if (we.web) {
              const t = await we.web.subtle.importKey(
                  "raw",
                  e,
                  { name: "HMAC", hash: { name: "SHA-256" } },
                  !1,
                  ["sign"],
                ),
                r = v(...n),
                i = await we.web.subtle.sign("HMAC", t, r);
              return new Uint8Array(i);
            }
            if (we.node) {
              const { createHmac: t } = we.node,
                r = t("sha256", e);
              return (
                n.forEach((e) => r.update(e)),
                Uint8Array.from(r.digest())
              );
            }
            throw new Error(
              "The environment doesn't have hmac-sha256 function",
            );
          },
          sha256Sync: void 0,
          hmacSha256Sync: void 0,
          taggedHash: async function (e) {
            let t = me[e];
            if (void 0 === t) {
              const n = await Pe.sha256(
                Uint8Array.from(e, (e) => e.charCodeAt(0)),
              );
              ((t = v(n, n)), (me[e] = t));
            }
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            return Pe.sha256(t, ...r);
          },
          taggedHashSync: function (e) {
            if ("function" !== typeof D)
              throw new ShaError("sha256Sync is undefined, you need to set it");
            let t = me[e];
            if (void 0 === t) {
              const n = D(Uint8Array.from(e, (e) => e.charCodeAt(0)));
              ((t = v(n, n)), (me[e] = t));
            }
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            return D(t, ...r);
          },
          _JacobianPoint: JacobianPoint,
        });
      Object.defineProperties(Pe, {
        sha256Sync: {
          configurable: !1,
          get() {
            return D;
          },
          set(e) {
            D || (D = e);
          },
        },
        hmacSha256Sync: {
          configurable: !1,
          get() {
            return G;
          },
          set(e) {
            G || (G = e);
          },
        },
      });
    },
    3408: function (e, t, n) {
      "use strict";
      var r = n(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cloneDeep = b),
        (t.cvToHex = v),
        (t.hashP2WSH =
          t.hashP2WPKH =
          t.hashP2SH =
          t.hashP2PKH =
          t.hash160 =
          t.exceedsMaxLengthBytes =
            void 0),
        (t.hexToCV = k),
        (t.isClarityName = E),
        (t.leftPadHexToLength = t.leftPadHex = void 0),
        (t.omit = T),
        (t.validateTxId =
          t.validateStacksAddress =
          t.txidFromData =
          t.rightPadHexToLength =
          t.randomBytes =
          t.parseReadOnlyResponse =
            void 0),
        Object.defineProperty(t, "verifySignature", {
          enumerable: !0,
          get: function () {
            return a.verify;
          },
        }));
      var i = n(11528),
        o = n(5742),
        s = n(11530),
        a = n(3282),
        c = n(2778),
        u = n(3208),
        d = r(n(5733)),
        l = n(3469);
      const f = (e) => a.utils.randomBytes(e);
      t.randomBytes = f;
      const h = (e) => (e.length % 2 == 0 ? e : "0" + e);
      t.leftPadHex = h;
      const y = (e, t) => e.padStart(t, "0");
      t.leftPadHexToLength = y;
      const p = (e, t) => e.padEnd(t, "0");
      t.rightPadHexToLength = p;
      const g = (e, t) => !!e && (0, c.utf8ToBytes)(e).length > t;
      function b(e) {
        return (0, d.default)(e);
      }
      function T(e, t) {
        const n = b(e);
        return (delete n[t], n);
      }
      t.exceedsMaxLengthBytes = g;
      const S = (e) => (0, c.bytesToHex)((0, s.sha512_256)(e));
      t.txidFromData = S;
      const w = (e) => (0, i.ripemd160)((0, o.sha256)(e));
      t.hash160 = w;
      const C = (e) => (0, c.bytesToHex)(w(e));
      t.hashP2PKH = C;
      const m = (e) => {
        const t = w(e),
          n = (0, c.concatBytes)(
            new Uint8Array([0]),
            new Uint8Array([t.length]),
            t,
          ),
          r = w(n);
        return (0, c.bytesToHex)(r);
      };
      t.hashP2WPKH = m;
      const P = (e, t) => {
        if (e > 15 || t.length > 15)
          throw Error(
            "P2SH multisig address can only contain up to 15 public keys",
          );
        const n = [];
        (n.push(80 + e),
          t.forEach((e) => {
            (n.push(e.length), n.push(e));
          }),
          n.push(80 + t.length),
          n.push(174));
        const r = (0, c.concatArray)(n),
          i = w(r);
        return (0, c.bytesToHex)(i);
      };
      t.hashP2SH = P;
      const A = (e, t) => {
        if (e > 15 || t.length > 15)
          throw Error(
            "P2WSH multisig address can only contain up to 15 public keys",
          );
        const n = [];
        (n.push(80 + e),
          t.forEach((e) => {
            (n.push(e.length), n.push(e));
          }),
          n.push(80 + t.length),
          n.push(174));
        const r = (0, c.concatArray)(n),
          i = (0, o.sha256)(r),
          s = [];
        (s.push(0), s.push(i.length), s.push(i));
        const a = (0, c.concatArray)(s),
          u = w(a);
        return (0, c.bytesToHex)(u);
      };
      function E(e) {
        const t = /^[a-zA-Z]([a-zA-Z0-9]|[-_!?+<>=/*])*$|^[-+=/*]$|^[<>]=?$/;
        return t.test(e) && e.length < 128;
      }
      function v(e) {
        const t = (0, l.serializeCV)(e);
        return "0x" + (0, c.bytesToHex)(t);
      }
      function k(e) {
        return (0, l.deserializeCV)(e);
      }
      t.hashP2WSH = A;
      const x = (e) => {
        if (e.okay) return k(e.result);
        throw new Error(e.cause);
      };
      t.parseReadOnlyResponse = x;
      const B = (e) => {
        try {
          return ((0, u.c32addressDecode)(e), !0);
        } catch (t) {
          return !1;
        }
      };
      t.validateStacksAddress = B;
      const O = (e) => {
        if ("success" === e) return !0;
        const t = (0, c.with0x)(e).toLowerCase();
        return (
          66 === t.length &&
          (0, c.with0x)(BigInt(t).toString(16).padStart(64, "0")) === t
        );
      };
      t.validateTxId = O;
    },
    3469: function (e, t, n) {
      "use strict";
      var r = n(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ClarityType", {
          enumerable: !0,
          get: function () {
            return o.ClarityType;
          },
        }),
        Object.defineProperty(t, "boolCV", {
          enumerable: !0,
          get: function () {
            return s.boolCV;
          },
        }),
        Object.defineProperty(t, "bufferCV", {
          enumerable: !0,
          get: function () {
            return c.bufferCV;
          },
        }),
        Object.defineProperty(t, "bufferCVFromString", {
          enumerable: !0,
          get: function () {
            return c.bufferCVFromString;
          },
        }),
        Object.defineProperty(t, "contractPrincipalCV", {
          enumerable: !0,
          get: function () {
            return l.contractPrincipalCV;
          },
        }),
        Object.defineProperty(t, "contractPrincipalCVFromAddress", {
          enumerable: !0,
          get: function () {
            return l.contractPrincipalCVFromAddress;
          },
        }),
        Object.defineProperty(t, "contractPrincipalCVFromStandard", {
          enumerable: !0,
          get: function () {
            return l.contractPrincipalCVFromStandard;
          },
        }),
        Object.defineProperty(t, "cvToJSON", {
          enumerable: !0,
          get: function () {
            return i.cvToJSON;
          },
        }),
        Object.defineProperty(t, "cvToString", {
          enumerable: !0,
          get: function () {
            return i.cvToString;
          },
        }),
        Object.defineProperty(t, "cvToValue", {
          enumerable: !0,
          get: function () {
            return i.cvToValue;
          },
        }),
        Object.defineProperty(t, "deserializeCV", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "falseCV", {
          enumerable: !0,
          get: function () {
            return s.falseCV;
          },
        }),
        Object.defineProperty(t, "getCVTypeString", {
          enumerable: !0,
          get: function () {
            return i.getCVTypeString;
          },
        }),
        Object.defineProperty(t, "intCV", {
          enumerable: !0,
          get: function () {
            return a.intCV;
          },
        }),
        Object.defineProperty(t, "listCV", {
          enumerable: !0,
          get: function () {
            return f.listCV;
          },
        }),
        Object.defineProperty(t, "noneCV", {
          enumerable: !0,
          get: function () {
            return u.noneCV;
          },
        }),
        Object.defineProperty(t, "optionalCVOf", {
          enumerable: !0,
          get: function () {
            return u.optionalCVOf;
          },
        }),
        Object.defineProperty(t, "principalCV", {
          enumerable: !0,
          get: function () {
            return l.principalCV;
          },
        }),
        Object.defineProperty(t, "principalToString", {
          enumerable: !0,
          get: function () {
            return l.principalToString;
          },
        }),
        Object.defineProperty(t, "responseErrorCV", {
          enumerable: !0,
          get: function () {
            return d.responseErrorCV;
          },
        }),
        Object.defineProperty(t, "responseOkCV", {
          enumerable: !0,
          get: function () {
            return d.responseOkCV;
          },
        }),
        Object.defineProperty(t, "serializeCV", {
          enumerable: !0,
          get: function () {
            return p.serializeCV;
          },
        }),
        Object.defineProperty(t, "someCV", {
          enumerable: !0,
          get: function () {
            return u.someCV;
          },
        }),
        Object.defineProperty(t, "standardPrincipalCV", {
          enumerable: !0,
          get: function () {
            return l.standardPrincipalCV;
          },
        }),
        Object.defineProperty(t, "standardPrincipalCVFromAddress", {
          enumerable: !0,
          get: function () {
            return l.standardPrincipalCVFromAddress;
          },
        }),
        Object.defineProperty(t, "stringAsciiCV", {
          enumerable: !0,
          get: function () {
            return y.stringAsciiCV;
          },
        }),
        Object.defineProperty(t, "stringCV", {
          enumerable: !0,
          get: function () {
            return y.stringCV;
          },
        }),
        Object.defineProperty(t, "stringUtf8CV", {
          enumerable: !0,
          get: function () {
            return y.stringUtf8CV;
          },
        }),
        Object.defineProperty(t, "trueCV", {
          enumerable: !0,
          get: function () {
            return s.trueCV;
          },
        }),
        Object.defineProperty(t, "tupleCV", {
          enumerable: !0,
          get: function () {
            return h.tupleCV;
          },
        }),
        Object.defineProperty(t, "uintCV", {
          enumerable: !0,
          get: function () {
            return a.uintCV;
          },
        }));
      var i = n(11532),
        o = n(3238),
        s = n(11533),
        a = n(11534),
        c = n(11535),
        u = n(11536),
        d = n(11537),
        l = n(5743),
        f = n(11538),
        h = n(11539),
        y = n(5744),
        p = n(11540),
        g = r(n(11542));
    },
    3470: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VerificationError =
          t.SigningError =
          t.SerializationError =
          t.NotImplementedError =
          t.NoEstimateAvailableError =
          t.DeserializationError =
            void 0));
      class TransactionError extends Error {
        constructor(e) {
          (super(e),
            (this.message = e),
            (this.name = this.constructor.name),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, this.constructor));
        }
      }
      class SerializationError extends TransactionError {
        constructor(e) {
          super(e);
        }
      }
      t.SerializationError = SerializationError;
      class DeserializationError extends TransactionError {
        constructor(e) {
          super(e);
        }
      }
      t.DeserializationError = DeserializationError;
      class NoEstimateAvailableError extends TransactionError {
        constructor(e) {
          super(e);
        }
      }
      t.NoEstimateAvailableError = NoEstimateAvailableError;
      class NotImplementedError extends TransactionError {
        constructor(e) {
          super(e);
        }
      }
      t.NotImplementedError = NotImplementedError;
      class SigningError extends TransactionError {
        constructor(e) {
          super(e);
        }
      }
      t.SigningError = SigningError;
      class VerificationError extends TransactionError {
        constructor(e) {
          super(e);
        }
      }
      t.VerificationError = VerificationError;
    },
    3624: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.c32decode = t.c32normalize = t.c32encode = t.c32 = void 0));
      const r = n(130);
      t.c32 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
      const i = "0123456789abcdef";
      function o(e, n) {
        if (!e.match(/^[0-9a-fA-F]*$/))
          throw new Error("Not a hex-encoded string");
        (e.length % 2 !== 0 && (e = "0" + e), (e = e.toLowerCase()));
        let o = [],
          s = 0;
        for (let r = e.length - 1; r >= 0; r--)
          if (s < 4) {
            const n = i.indexOf(e[r]) >> s;
            let a = 0;
            0 !== r && (a = i.indexOf(e[r - 1]));
            const c = 1 + s,
              u = (a % (1 << c)) << (5 - c),
              d = t.c32[n + u];
            ((s = c), o.unshift(d));
          } else s = 0;
        let a = 0;
        for (let t = 0; t < o.length; t++) {
          if ("0" !== o[t]) break;
          a++;
        }
        o = o.slice(a);
        const c = new TextDecoder()
            .decode((0, r.hexToBytes)(e))
            .match(/^\u0000*/),
          u = c ? c[0].length : 0;
        for (let r = 0; r < u; r++) o.unshift(t.c32[0]);
        if (n) {
          const e = n - o.length;
          for (let n = 0; n < e; n++) o.unshift(t.c32[0]);
        }
        return o.join("");
      }
      function s(e) {
        return e.toUpperCase().replace(/O/g, "0").replace(/L|I/g, "1");
      }
      function a(e, n) {
        if (((e = s(e)), !e.match(`^[${t.c32}]*$`)))
          throw new Error("Not a c32-encoded string");
        const r = e.match(`^${t.c32[0]}*`),
          o = r ? r[0].length : 0;
        let a = [],
          c = 0,
          u = 0;
        for (let s = e.length - 1; s >= 0; s--) {
          4 === u && (a.unshift(i[c]), (u = 0), (c = 0));
          const n = t.c32.indexOf(e[s]) << u,
            r = n + c,
            o = i[r % 16];
          if (((u += 1), (c = r >> 4), c > 1 << u))
            throw new Error("Panic error in decoding.");
          a.unshift(o);
        }
        (a.unshift(i[c]), a.length % 2 === 1 && a.unshift("0"));
        let d = 0;
        for (let t = 0; t < a.length; t++) {
          if ("0" !== a[t]) break;
          d++;
        }
        a = a.slice(d - (d % 2));
        let l = a.join("");
        for (let t = 0; t < o; t++) l = "00" + l;
        if (n) {
          const e = 2 * n - l.length;
          for (let t = 0; t < e; t += 2) l = "00" + l;
        }
        return l;
      }
      ((t.c32encode = o), (t.c32normalize = s), (t.c32decode = a));
    },
    3625: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.c32checkDecode = t.c32checkEncode = void 0));
      const r = n(378),
        i = n(130),
        o = n(3624);
      function s(e) {
        const t = (0, r.sha256)((0, r.sha256)((0, i.hexToBytes)(e))),
          n = (0, i.bytesToHex)(t.slice(0, 4));
        return n;
      }
      function a(e, t) {
        if (e < 0 || e >= 32)
          throw new Error("Invalid version (must be between 0 and 31)");
        if (!t.match(/^[0-9a-fA-F]*$/))
          throw new Error("Invalid data (not a hex string)");
        ((t = t.toLowerCase()), t.length % 2 !== 0 && (t = "0" + t));
        let n = e.toString(16);
        1 === n.length && (n = "0" + n);
        const r = s(`${n}${t}`),
          i = (0, o.c32encode)(`${t}${r}`);
        return `${o.c32[e]}${i}`;
      }
      function c(e) {
        e = (0, o.c32normalize)(e);
        const t = (0, o.c32decode)(e.slice(1)),
          n = e[0],
          r = o.c32.indexOf(n),
          i = t.slice(-8);
        let a = r.toString(16);
        if (
          (1 === a.length && (a = "0" + a),
          s(`${a}${t.substring(0, t.length - 8)}`) !== i)
        )
          throw new Error("Invalid c32check string: checksum mismatch");
        return [r, t.substring(0, t.length - 8)];
      }
      ((t.c32checkEncode = a), (t.c32checkDecode = c));
    },
    3627: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createAddress = u),
        (t.createAssetInfo = c),
        (t.createContractPrincipal = l),
        (t.createLPString = a),
        (t.createStandardPrincipal = f),
        (t.parseAssetInfoString = s),
        (t.parsePrincipalString = d));
      var r = n(3128),
        i = n(3208),
        o = n(3408);
      function s(e) {
        const [t, n, r] = e.split(/\.|::/),
          i = c(t, n, r);
        return i;
      }
      function a(e, t, n) {
        const i = t || 1,
          s = n || r.MAX_STRING_LENGTH_BYTES;
        if ((0, o.exceedsMaxLengthBytes)(e, s))
          throw new Error("String length exceeds maximum bytes " + s);
        return {
          type: r.StacksMessageType.LengthPrefixedString,
          content: e,
          lengthPrefixBytes: i,
          maxLengthBytes: s,
        };
      }
      function c(e, t, n) {
        return {
          type: r.StacksMessageType.AssetInfo,
          address: u(e),
          contractName: a(t),
          assetName: a(n),
        };
      }
      function u(e) {
        const t = (0, i.c32addressDecode)(e);
        return {
          type: r.StacksMessageType.Address,
          version: t[0],
          hash160: t[1],
        };
      }
      function d(e) {
        if (e.includes(".")) {
          const [t, n] = e.split(".");
          return l(t, n);
        }
        return f(e);
      }
      function l(e, t) {
        const n = u(e),
          i = a(t);
        return {
          type: r.StacksMessageType.Principal,
          prefix: r.PostConditionPrincipalID.Contract,
          address: n,
          contractName: i,
        };
      }
      function f(e) {
        const t = u(e);
        return {
          type: r.StacksMessageType.Principal,
          prefix: r.PostConditionPrincipalID.Standard,
          address: t,
        };
      }
    },
    3855: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addressFromHashMode = g),
        (t.addressFromPublicKeys = b),
        (t.codeBodyString = A),
        (t.createEmptyAddress = p),
        (t.createLPList = O),
        (t.createMemoString = E),
        (t.deserializeAddress = S),
        (t.deserializeAssetInfo = B),
        (t.deserializeLPList = _),
        (t.deserializeLPString = P),
        (t.deserializeMemoString = k),
        (t.deserializePostCondition = H),
        (t.deserializePrincipal = C),
        (t.deserializeStacksMessage = y),
        (t.serializeAddress = T),
        (t.serializeAssetInfo = x),
        (t.serializeLPList = M),
        (t.serializeLPString = m),
        (t.serializeMemoString = v),
        (t.serializePostCondition = I),
        (t.serializePrincipal = w),
        (t.serializeStacksMessage = h));
      var r = n(2778),
        i = n(3128),
        o = n(3856),
        s = n(3408),
        a = n(3627),
        c = n(4889),
        u = n(3470),
        d = n(4890),
        l = n(4604),
        f = n(3469);
      function h(e) {
        switch (e.type) {
          case i.StacksMessageType.Address:
            return T(e);
          case i.StacksMessageType.Principal:
            return w(e);
          case i.StacksMessageType.LengthPrefixedString:
            return m(e);
          case i.StacksMessageType.MemoString:
            return v(e);
          case i.StacksMessageType.AssetInfo:
            return x(e);
          case i.StacksMessageType.PostCondition:
            return I(e);
          case i.StacksMessageType.PublicKey:
            return (0, o.serializePublicKey)(e);
          case i.StacksMessageType.LengthPrefixedList:
            return M(e);
          case i.StacksMessageType.Payload:
            return (0, c.serializePayload)(e);
          case i.StacksMessageType.TransactionAuthField:
            return (0, d.serializeTransactionAuthField)(e);
          case i.StacksMessageType.MessageSignature:
            return (0, d.serializeMessageSignature)(e);
        }
      }
      function y(e, t, n) {
        switch (t) {
          case i.StacksMessageType.Address:
            return S(e);
          case i.StacksMessageType.Principal:
            return C(e);
          case i.StacksMessageType.LengthPrefixedString:
            return P(e);
          case i.StacksMessageType.MemoString:
            return k(e);
          case i.StacksMessageType.AssetInfo:
            return B(e);
          case i.StacksMessageType.PostCondition:
            return H(e);
          case i.StacksMessageType.PublicKey:
            return (0, o.deserializePublicKey)(e);
          case i.StacksMessageType.Payload:
            return (0, c.deserializePayload)(e);
          case i.StacksMessageType.LengthPrefixedList:
            if (!n) throw new u.DeserializationError("No List Type specified");
            return _(e, n);
          case i.StacksMessageType.MessageSignature:
            return (0, d.deserializeMessageSignature)(e);
          default:
            throw new Error("Could not recognize StacksMessageType");
        }
      }
      function p() {
        return {
          type: i.StacksMessageType.Address,
          version: i.AddressVersion.MainnetSingleSig,
          hash160: "0".repeat(40),
        };
      }
      function g(e, t, n) {
        const r = (0, l.addressHashModeToVersion)(e, t);
        return (0, l.addressFromVersionHash)(r, n);
      }
      function b(e, t, n, r) {
        if (0 === r.length) throw Error("Invalid number of public keys");
        if (
          (t === i.AddressHashMode.SerializeP2PKH ||
            t === i.AddressHashMode.SerializeP2WPKH) &&
          (1 !== r.length || 1 !== n)
        )
          throw Error("Invalid number of public keys or signatures");
        if (
          t === i.AddressHashMode.SerializeP2WPKH ||
          t === i.AddressHashMode.SerializeP2WSH
        )
          for (let i = 0; i < r.length; i++)
            if (!(0, o.isCompressed)(r[i]))
              throw Error("Public keys must be compressed for segwit");
        switch (t) {
          case i.AddressHashMode.SerializeP2PKH:
            return (0, l.addressFromVersionHash)(
              e,
              (0, s.hashP2PKH)(r[0].data),
            );
          case i.AddressHashMode.SerializeP2WPKH:
            return (0, l.addressFromVersionHash)(
              e,
              (0, s.hashP2WPKH)(r[0].data),
            );
          case i.AddressHashMode.SerializeP2SH:
            return (0, l.addressFromVersionHash)(
              e,
              (0, s.hashP2SH)(n, r.map(o.serializePublicKey)),
            );
          case i.AddressHashMode.SerializeP2WSH:
            return (0, l.addressFromVersionHash)(
              e,
              (0, s.hashP2WSH)(n, r.map(o.serializePublicKey)),
            );
        }
      }
      function T(e) {
        const t = [];
        return (
          t.push((0, r.hexToBytes)((0, r.intToHex)(e.version, 1))),
          t.push((0, r.hexToBytes)(e.hash160)),
          (0, r.concatArray)(t)
        );
      }
      function S(e) {
        const t = (0, r.hexToInt)((0, r.bytesToHex)(e.readBytes(1))),
          n = (0, r.bytesToHex)(e.readBytes(20));
        return { type: i.StacksMessageType.Address, version: t, hash160: n };
      }
      function w(e) {
        const t = [];
        return (
          t.push(e.prefix),
          t.push(T(e.address)),
          e.prefix === i.PostConditionPrincipalID.Contract &&
            t.push(m(e.contractName)),
          (0, r.concatArray)(t)
        );
      }
      function C(e) {
        const t = e.readUInt8Enum(i.PostConditionPrincipalID, (e) => {
            throw new u.DeserializationError(
              "Unexpected Principal payload type: " + e,
            );
          }),
          n = S(e);
        if (t === i.PostConditionPrincipalID.Standard)
          return { type: i.StacksMessageType.Principal, prefix: t, address: n };
        const r = P(e);
        return {
          type: i.StacksMessageType.Principal,
          prefix: t,
          address: n,
          contractName: r,
        };
      }
      function m(e) {
        const t = [],
          n = (0, r.utf8ToBytes)(e.content),
          i = n.byteLength;
        return (
          t.push((0, r.hexToBytes)((0, r.intToHex)(i, e.lengthPrefixBytes))),
          t.push(n),
          (0, r.concatArray)(t)
        );
      }
      function P(e, t, n) {
        t = t || 1;
        const i = (0, r.hexToInt)((0, r.bytesToHex)(e.readBytes(t))),
          o = (0, r.bytesToUtf8)(e.readBytes(i));
        return (0, a.createLPString)(
          o,
          t,
          null !== n && void 0 !== n ? n : 128,
        );
      }
      function A(e) {
        return (0, a.createLPString)(e, 4, 1e5);
      }
      function E(e) {
        if (e && (0, s.exceedsMaxLengthBytes)(e, i.MEMO_MAX_LENGTH_BYTES))
          throw new Error(
            `Memo exceeds maximum length of ${i.MEMO_MAX_LENGTH_BYTES} bytes`,
          );
        return { type: i.StacksMessageType.MemoString, content: e };
      }
      function v(e) {
        const t = [],
          n = (0, r.utf8ToBytes)(e.content),
          o = (0, s.rightPadHexToLength)(
            (0, r.bytesToHex)(n),
            2 * i.MEMO_MAX_LENGTH_BYTES,
          );
        return (t.push((0, r.hexToBytes)(o)), (0, r.concatArray)(t));
      }
      function k(e) {
        const t = (0, r.bytesToUtf8)(e.readBytes(i.MEMO_MAX_LENGTH_BYTES));
        return { type: i.StacksMessageType.MemoString, content: t };
      }
      function x(e) {
        const t = [];
        return (
          t.push(T(e.address)),
          t.push(m(e.contractName)),
          t.push(m(e.assetName)),
          (0, r.concatArray)(t)
        );
      }
      function B(e) {
        return {
          type: i.StacksMessageType.AssetInfo,
          address: S(e),
          contractName: P(e),
          assetName: P(e),
        };
      }
      function O(e, t) {
        return {
          type: i.StacksMessageType.LengthPrefixedList,
          lengthPrefixBytes: t || 4,
          values: e,
        };
      }
      function M(e) {
        const t = e.values,
          n = [];
        n.push(
          (0, r.hexToBytes)((0, r.intToHex)(t.length, e.lengthPrefixBytes)),
        );
        for (const r of t) n.push(h(r));
        return (0, r.concatArray)(n);
      }
      function _(e, t, n) {
        const s = (0, r.hexToInt)((0, r.bytesToHex)(e.readBytes(n || 4))),
          a = [];
        for (let r = 0; r < s; r++)
          switch (t) {
            case i.StacksMessageType.Address:
              a.push(S(e));
              break;
            case i.StacksMessageType.LengthPrefixedString:
              a.push(P(e));
              break;
            case i.StacksMessageType.MemoString:
              a.push(k(e));
              break;
            case i.StacksMessageType.AssetInfo:
              a.push(B(e));
              break;
            case i.StacksMessageType.PostCondition:
              a.push(H(e));
              break;
            case i.StacksMessageType.PublicKey:
              a.push((0, o.deserializePublicKey)(e));
              break;
            case i.StacksMessageType.TransactionAuthField:
              a.push((0, d.deserializeTransactionAuthField)(e));
              break;
          }
        return O(a, n);
      }
      function I(e) {
        const t = [];
        return (
          t.push(e.conditionType),
          t.push(w(e.principal)),
          (e.conditionType !== i.PostConditionType.Fungible &&
            e.conditionType !== i.PostConditionType.NonFungible) ||
            t.push(x(e.assetInfo)),
          e.conditionType === i.PostConditionType.NonFungible &&
            t.push((0, f.serializeCV)(e.assetName)),
          t.push(e.conditionCode),
          (e.conditionType !== i.PostConditionType.STX &&
            e.conditionType !== i.PostConditionType.Fungible) ||
            t.push((0, r.intToBytes)(e.amount, !1, 8)),
          (0, r.concatArray)(t)
        );
      }
      function H(e) {
        const t = e.readUInt8Enum(i.PostConditionType, (e) => {
            throw new u.DeserializationError(
              `Could not read ${e} as PostConditionType`,
            );
          }),
          n = C(e);
        let o, s, a;
        switch (t) {
          case i.PostConditionType.STX:
            return (
              (o = e.readUInt8Enum(i.FungibleConditionCode, (e) => {
                throw new u.DeserializationError(
                  `Could not read ${e} as FungibleConditionCode`,
                );
              })),
              (a = BigInt("0x" + (0, r.bytesToHex)(e.readBytes(8)))),
              {
                type: i.StacksMessageType.PostCondition,
                conditionType: i.PostConditionType.STX,
                principal: n,
                conditionCode: o,
                amount: a,
              }
            );
          case i.PostConditionType.Fungible:
            return (
              (s = B(e)),
              (o = e.readUInt8Enum(i.FungibleConditionCode, (e) => {
                throw new u.DeserializationError(
                  `Could not read ${e} as FungibleConditionCode`,
                );
              })),
              (a = BigInt("0x" + (0, r.bytesToHex)(e.readBytes(8)))),
              {
                type: i.StacksMessageType.PostCondition,
                conditionType: i.PostConditionType.Fungible,
                principal: n,
                conditionCode: o,
                amount: a,
                assetInfo: s,
              }
            );
          case i.PostConditionType.NonFungible:
            s = B(e);
            const t = (0, f.deserializeCV)(e);
            return (
              (o = e.readUInt8Enum(i.NonFungibleConditionCode, (e) => {
                throw new u.DeserializationError(
                  `Could not read ${e} as FungibleConditionCode`,
                );
              })),
              {
                type: i.StacksMessageType.PostCondition,
                conditionType: i.PostConditionType.NonFungible,
                principal: n,
                conditionCode: o,
                assetInfo: s,
                assetName: t,
              }
            );
        }
      }
    },
    3856: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.compressPublicKey = C),
        (t.createStacksPrivateKey = P),
        (t.createStacksPublicKey = h),
        (t.deserializePublicKey = m),
        (t.getAddressFromPrivateKey = l),
        (t.getAddressFromPublicKey = f),
        (t.getPublicKey = k),
        (t.isCompressed = b),
        (t.makeRandomPrivKey = A),
        (t.privateKeyToString = x),
        (t.pubKeyfromPrivKey = w),
        (t.publicKeyFromBytes = g),
        (t.publicKeyFromSignatureRsv = p),
        (t.publicKeyFromSignatureVrs = y),
        (t.publicKeyToAddress = B),
        (t.publicKeyToString = T),
        (t.serializePublicKey = S),
        (t.signMessageHashRsv = v),
        (t.signWithKey = E));
      var r = n(11541),
        i = n(5742),
        o = n(3282),
        s = n(2778),
        a = n(3208),
        c = n(4604),
        u = n(3128),
        d = n(3408);
      function l(e, t) {
        void 0 === t && (t = u.TransactionVersion.Mainnet);
        const n = w(e);
        return f(n.data, t);
      }
      function f(e, t) {
        (void 0 === t && (t = u.TransactionVersion.Mainnet),
          (e = "string" === typeof e ? e : (0, s.bytesToHex)(e)));
        const n = (0, c.addressHashModeToVersion)(
            u.AddressHashMode.SerializeP2PKH,
            t,
          ),
          r = (0, c.addressFromVersionHash)(
            n,
            (0, d.hashP2PKH)((0, s.hexToBytes)(e)),
          ),
          i = (0, c.addressToString)(r);
        return i;
      }
      function h(e) {
        return {
          type: u.StacksMessageType.PublicKey,
          data: (0, s.hexToBytes)(e),
        };
      }
      function y(e, t, n) {
        void 0 === n && (n = u.PubKeyEncoding.Compressed);
        const r = (0, s.parseRecoverableSignatureVrs)(t.data),
          i = new o.Signature((0, s.hexToBigInt)(r.r), (0, s.hexToBigInt)(r.s)),
          a = o.Point.fromSignature(e, i, r.recoveryId),
          c = n === u.PubKeyEncoding.Compressed;
        return a.toHex(c);
      }
      function p(e, t, n) {
        return (
          void 0 === n && (n = u.PubKeyEncoding.Compressed),
          y(e, { ...t, data: (0, s.signatureRsvToVrs)(t.data) }, n)
        );
      }
      function g(e) {
        return { type: u.StacksMessageType.PublicKey, data: e };
      }
      function b(e) {
        return !(0, s.bytesToHex)(e.data).startsWith("04");
      }
      function T(e) {
        return (0, s.bytesToHex)(e.data);
      }
      function S(e) {
        return e.data.slice();
      }
      function w(e) {
        const t = P(e),
          n = (0, o.getPublicKey)(t.data.slice(0, 32), t.compressed);
        return h((0, s.bytesToHex)(n));
      }
      function C(e) {
        const t = "string" === typeof e ? e : (0, s.bytesToHex)(e),
          n = o.Point.fromHex(t).toHex(!0);
        return h(n);
      }
      function m(e) {
        const t = e.readUInt8(),
          n =
            4 !== t
              ? u.COMPRESSED_PUBKEY_LENGTH_BYTES
              : u.UNCOMPRESSED_PUBKEY_LENGTH_BYTES;
        return g((0, s.concatArray)([t, e.readBytes(n)]));
      }
      function P(e) {
        const t = (0, s.privateKeyToBytes)(e),
          n = t.length == s.PRIVATE_KEY_COMPRESSED_LENGTH;
        return { data: t, compressed: n };
      }
      function A() {
        return P(o.utils.randomPrivateKey());
      }
      function E(e, t) {
        const [n, r] = (0, o.signSync)(t, e.data.slice(0, 32), {
          canonical: !0,
          recovered: !0,
        });
        if (null == r) throw new Error("No signature recoveryId received");
        const i = (0, s.intToHex)(r, 1),
          a = i + o.Signature.fromHex(n).toCompactHex();
        return (0, c.createMessageSignature)(a);
      }
      function v(e) {
        let { messageHash: t, privateKey: n } = e;
        const r = E(n, t);
        return { ...r, data: (0, s.signatureVrsToRsv)(r.data) };
      }
      function k(e) {
        return w(e.data);
      }
      function x(e) {
        return (0, s.bytesToHex)(e.data);
      }
      function B(e, t) {
        return (0, a.c32address)(e, (0, s.bytesToHex)((0, d.hash160)(t.data)));
      }
      o.utils.hmacSha256Sync = function (e) {
        const t = r.hmac.create(i.sha256, e);
        for (
          var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1;
          s < n;
          s++
        )
          o[s - 1] = arguments[s];
        return (o.forEach((e) => t.update(e)), t.digest());
      };
    },
    4262: function (e, t) {},
    4597: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.c32ToB58 =
          t.b58ToC32 =
          t.c32addressDecode =
          t.c32address =
          t.versions =
            void 0));
      const r = n(3625),
        i = n(4598),
        o = n(130);
      t.versions = {
        mainnet: { p2pkh: 22, p2sh: 20 },
        testnet: { p2pkh: 26, p2sh: 21 },
      };
      const s = {};
      ((s[0] = t.versions.mainnet.p2pkh),
        (s[5] = t.versions.mainnet.p2sh),
        (s[111] = t.versions.testnet.p2pkh),
        (s[196] = t.versions.testnet.p2sh));
      const a = {};
      function c(e, t) {
        if (!t.match(/^[0-9a-fA-F]{40}$/))
          throw new Error("Invalid argument: not a hash160 hex string");
        const n = (0, r.c32checkEncode)(e, t);
        return "S" + n;
      }
      function u(e) {
        if (e.length <= 5)
          throw new Error("Invalid c32 address: invalid length");
        if ("S" != e[0])
          throw new Error('Invalid c32 address: must start with "S"');
        return (0, r.c32checkDecode)(e.slice(1));
      }
      function d(e, t) {
        void 0 === t && (t = -1);
        const n = i.decode(e),
          r = (0, o.bytesToHex)(n.data),
          a = parseInt((0, o.bytesToHex)(n.prefix), 16);
        let u;
        return (
          t < 0 ? ((u = a), void 0 !== s[a] && (u = s[a])) : (u = t),
          c(u, r)
        );
      }
      function l(e, t) {
        void 0 === t && (t = -1);
        const n = u(e),
          r = n[0],
          o = n[1];
        let s;
        t < 0 ? ((s = r), void 0 !== a[r] && (s = a[r])) : (s = t);
        let c = s.toString(16);
        return (1 === c.length && (c = "0" + c), i.encode(o, c));
      }
      ((a[t.versions.mainnet.p2pkh] = 0),
        (a[t.versions.mainnet.p2sh] = 5),
        (a[t.versions.testnet.p2pkh] = 111),
        (a[t.versions.testnet.p2sh] = 196),
        (t.c32address = c),
        (t.c32addressDecode = u),
        (t.b58ToC32 = d),
        (t.c32ToB58 = l));
    },
    4598: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decode = t.encode = void 0));
      const r = n(378),
        i = n(130),
        o = n(4599),
        s = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      function a(e, t) {
        void 0 === t && (t = "00");
        const n = "string" === typeof e ? (0, i.hexToBytes)(e) : e,
          a = "string" === typeof t ? (0, i.hexToBytes)(t) : e;
        if (!(n instanceof Uint8Array) || !(a instanceof Uint8Array))
          throw new TypeError("Argument must be of type Uint8Array or string");
        const c = (0, r.sha256)((0, r.sha256)(new Uint8Array([...a, ...n])));
        return o(s).encode([...a, ...n, ...c.slice(0, 4)]);
      }
      function c(e) {
        const t = o(s).decode(e),
          n = t.slice(0, 1),
          i = t.slice(1, -4),
          a = (0, r.sha256)((0, r.sha256)(new Uint8Array([...n, ...i])));
        return (
          t.slice(-4).forEach((e, t) => {
            if (e !== a[t]) throw new Error("Invalid checksum");
          }),
          { prefix: n, data: i }
        );
      }
      ((t.encode = a), (t.decode = c));
    },
    4599: function (e, t, n) {
      "use strict";
      function r(e) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), n = 0; n < t.length; n++) t[n] = 255;
        for (var r = 0; r < e.length; r++) {
          var i = e.charAt(r),
            o = i.charCodeAt(0);
          if (255 !== t[o]) throw new TypeError(i + " is ambiguous");
          t[o] = r;
        }
        var s = e.length,
          a = e.charAt(0),
          c = Math.log(s) / Math.log(256),
          u = Math.log(256) / Math.log(s);
        function d(t) {
          if (
            (t instanceof Uint8Array ||
              (ArrayBuffer.isView(t)
                ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                : Array.isArray(t) && (t = Uint8Array.from(t))),
            !(t instanceof Uint8Array))
          )
            throw new TypeError("Expected Uint8Array");
          if (0 === t.length) return "";
          var n = 0,
            r = 0,
            i = 0,
            o = t.length;
          while (i !== o && 0 === t[i]) (i++, n++);
          var c = ((o - i) * u + 1) >>> 0,
            d = new Uint8Array(c);
          while (i !== o) {
            for (
              var l = t[i], f = 0, h = c - 1;
              (0 !== l || f < r) && -1 !== h;
              h--, f++
            )
              ((l += (256 * d[h]) >>> 0),
                (d[h] = (l % s) >>> 0),
                (l = (l / s) >>> 0));
            if (0 !== l) throw new Error("Non-zero carry");
            ((r = f), i++);
          }
          var y = c - r;
          while (y !== c && 0 === d[y]) y++;
          for (var p = a.repeat(n); y < c; ++y) p += e.charAt(d[y]);
          return p;
        }
        function l(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var n = 0,
            r = 0,
            i = 0;
          while (e[n] === a) (r++, n++);
          var o = ((e.length - n) * c + 1) >>> 0,
            u = new Uint8Array(o);
          while (e[n]) {
            var d = e.charCodeAt(n);
            if (d > 255) return;
            var l = t[d];
            if (255 === l) return;
            for (var f = 0, h = o - 1; (0 !== l || f < i) && -1 !== h; h--, f++)
              ((l += (s * u[h]) >>> 0),
                (u[h] = (l % 256) >>> 0),
                (l = (l / 256) >>> 0));
            if (0 !== l) throw new Error("Non-zero carry");
            ((i = f), n++);
          }
          var y = o - i;
          while (y !== o && 0 === u[y]) y++;
          var p = new Uint8Array(r + (o - y)),
            g = r;
          while (y !== o) p[g++] = u[y++];
          return p;
        }
        function f(e) {
          var t = l(e);
          if (t) return t;
          throw new Error("Non-base" + s + " character");
        }
        return { encode: d, decodeUnsafe: l, decode: f };
      }
      e.exports = r;
    },
    4603: function (e, t, n) {
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
      const r = n(11529),
        i = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      t.u8 = i;
      const o = (e) =>
        new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      t.u32 = o;
      const s = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      t.createView = s;
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
        for (let n = 0; n < e.length; n++) t += c[e[n]];
        return t;
      }
      function d(e) {
        if ("string" !== typeof e)
          throw new TypeError("hexToBytes: expected string, got " + typeof e);
        if (e.length % 2)
          throw new Error("hexToBytes: received invalid unpadded hex");
        const t = new Uint8Array(e.length / 2);
        for (let n = 0; n < t.length; n++) {
          const r = 2 * n,
            i = e.slice(r, r + 2),
            o = Number.parseInt(i, 16);
          if (Number.isNaN(o) || o < 0)
            throw new Error("Invalid byte sequence");
          t[n] = o;
        }
        return t;
      }
      ((t.bytesToHex = u), (t.hexToBytes = d));
      const l = async () => {};
      async function f(e, n, r) {
        let i = Date.now();
        for (let o = 0; o < e; o++) {
          r(o);
          const e = Date.now() - i;
          (e >= 0 && e < n) || (await (0, t.nextTick)(), (i += e));
        }
      }
      function h(e) {
        if ("string" !== typeof e)
          throw new TypeError("utf8ToBytes expected string, got " + typeof e);
        return new TextEncoder().encode(e);
      }
      function y(e) {
        if (("string" === typeof e && (e = h(e)), !(e instanceof Uint8Array)))
          throw new TypeError(
            `Expected input type is Uint8Array (got ${typeof e})`,
          );
        return e;
      }
      function p() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (!t.every((e) => e instanceof Uint8Array))
          throw new Error("Uint8Array list expected");
        if (1 === t.length) return t[0];
        const r = t.reduce((e, t) => e + t.length, 0),
          i = new Uint8Array(r);
        for (let o = 0, s = 0; o < t.length; o++) {
          const e = t[o];
          (i.set(e, s), (s += e.length));
        }
        return i;
      }
      ((t.nextTick = l),
        (t.asyncLoop = f),
        (t.utf8ToBytes = h),
        (t.toBytes = y),
        (t.concatBytes = p));
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
        const n = Object.assign(e, t);
        return n;
      }
      function T(e) {
        const t = (t) => e().update(y(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function S(e) {
        const t = (t, n) => e(n).update(y(t)).digest(),
          n = e({});
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = (t) => e(t)),
          t
        );
      }
      function w(e) {
        if ((void 0 === e && (e = 32), r.crypto.web))
          return r.crypto.web.getRandomValues(new Uint8Array(e));
        if (r.crypto.node)
          return new Uint8Array(r.crypto.node.randomBytes(e).buffer);
        throw new Error("The environment doesn't have randomBytes function");
      }
      ((t.checkOpts = b),
        (t.wrapConstructor = T),
        (t.wrapConstructorWithOpts = S),
        (t.randomBytes = w));
    },
    4604: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addressFromVersionHash = c),
        (t.addressHashModeToVersion = a),
        (t.addressToString = u),
        (t.createMessageSignature = s));
      var r = n(3128),
        i = n(3208),
        o = n(2778);
      function s(e) {
        const t = (0, o.hexToBytes)(e).byteLength;
        if (t != r.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES)
          throw Error("Invalid signature");
        return { type: r.StacksMessageType.MessageSignature, data: e };
      }
      function a(e, t) {
        switch (e) {
          case r.AddressHashMode.SerializeP2PKH:
            switch (t) {
              case r.TransactionVersion.Mainnet:
                return r.AddressVersion.MainnetSingleSig;
              case r.TransactionVersion.Testnet:
                return r.AddressVersion.TestnetSingleSig;
              default:
                throw new Error(
                  `Unexpected txVersion ${JSON.stringify(t)} for hashMode ${e}`,
                );
            }
          case r.AddressHashMode.SerializeP2SH:
          case r.AddressHashMode.SerializeP2WPKH:
          case r.AddressHashMode.SerializeP2WSH:
            switch (t) {
              case r.TransactionVersion.Mainnet:
                return r.AddressVersion.MainnetMultiSig;
              case r.TransactionVersion.Testnet:
                return r.AddressVersion.TestnetMultiSig;
              default:
                throw new Error(
                  `Unexpected txVersion ${JSON.stringify(t)} for hashMode ${e}`,
                );
            }
          default:
            throw new Error("Unexpected hashMode " + JSON.stringify(e));
        }
      }
      function c(e, t) {
        return { type: r.StacksMessageType.Address, version: e, hash160: t };
      }
      function u(e) {
        return (0, i.c32address)(e.version, e.hash160);
      }
    },
    4888: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createMultiSigSpendingCondition = f),
        (t.createSingleSigSpendingCondition = l),
        (t.createSponsoredAuth = O),
        (t.createStandardAuth = B),
        (t.deserializeAuthorization = L),
        (t.deserializeMultiSigSpendingCondition = T),
        (t.deserializeSingleSigSpendingCondition = b),
        (t.deserializeSpendingCondition = w),
        (t.emptyMessageSignature = d),
        (t.getFee = H),
        (t.intoInitialSighashAuth = M),
        (t.isSingleSig = h),
        (t.makeSigHashPreSign = C),
        (t.nextSignature = P),
        (t.nextVerification = A),
        (t.serializeAuthorization = F),
        (t.serializeMultiSigSpendingCondition = g),
        (t.serializeSingleSigSpendingCondition = p),
        (t.serializeSpendingCondition = S),
        (t.setFee = I),
        (t.setNonce = N),
        (t.setSponsor = V),
        (t.setSponsorNonce = U),
        (t.verifyOrigin = _));
      var r = n(2778),
        i = n(3128),
        o = n(3408),
        s = n(4890),
        a = n(3855),
        c = n(3856),
        u = n(3470);
      function d() {
        return {
          type: i.StacksMessageType.MessageSignature,
          data: (0, r.bytesToHex)(
            new Uint8Array(i.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES),
          ),
        };
      }
      function l(e, t, n, o) {
        const s = (0, a.addressFromPublicKeys)(0, e, 1, [
            (0, c.createStacksPublicKey)(t),
          ]).hash160,
          u = (0, c.isCompressed)((0, c.createStacksPublicKey)(t))
            ? i.PubKeyEncoding.Compressed
            : i.PubKeyEncoding.Uncompressed;
        return {
          hashMode: e,
          signer: s,
          nonce: (0, r.intToBigInt)(n, !1),
          fee: (0, r.intToBigInt)(o, !1),
          keyEncoding: u,
          signature: d(),
        };
      }
      function f(e, t, n, i, o) {
        const s = n.map(c.createStacksPublicKey),
          u = (0, a.addressFromPublicKeys)(0, e, t, s).hash160;
        return {
          hashMode: e,
          signer: u,
          nonce: (0, r.intToBigInt)(i, !1),
          fee: (0, r.intToBigInt)(o, !1),
          fields: [],
          signaturesRequired: t,
        };
      }
      function h(e) {
        return "signature" in e;
      }
      function y(e) {
        const t = (0, o.cloneDeep)(e);
        return (
          (t.nonce = 0),
          (t.fee = 0),
          h(t) ? (t.signature = d()) : (t.fields = []),
          { ...t, nonce: BigInt(0), fee: BigInt(0) }
        );
      }
      function p(e) {
        const t = [
          e.hashMode,
          (0, r.hexToBytes)(e.signer),
          (0, r.intToBytes)(e.nonce, !1, 8),
          (0, r.intToBytes)(e.fee, !1, 8),
          e.keyEncoding,
          (0, s.serializeMessageSignature)(e.signature),
        ];
        return (0, r.concatArray)(t);
      }
      function g(e) {
        const t = [
            e.hashMode,
            (0, r.hexToBytes)(e.signer),
            (0, r.intToBytes)(e.nonce, !1, 8),
            (0, r.intToBytes)(e.fee, !1, 8),
          ],
          n = (0, a.createLPList)(e.fields);
        t.push((0, a.serializeLPList)(n));
        const i = new Uint8Array(2);
        return (
          (0, r.writeUInt16BE)(i, e.signaturesRequired, 0),
          t.push(i),
          (0, r.concatArray)(t)
        );
      }
      function b(e, t) {
        const n = (0, r.bytesToHex)(t.readBytes(20)),
          o = BigInt("0x" + (0, r.bytesToHex)(t.readBytes(8))),
          a = BigInt("0x" + (0, r.bytesToHex)(t.readBytes(8))),
          c = t.readUInt8Enum(i.PubKeyEncoding, (e) => {
            throw new u.DeserializationError(
              `Could not parse ${e} as PubKeyEncoding`,
            );
          });
        if (
          e === i.AddressHashMode.SerializeP2WPKH &&
          c != i.PubKeyEncoding.Compressed
        )
          throw new u.DeserializationError(
            "Failed to parse singlesig spending condition: incomaptible hash mode and key encoding",
          );
        const d = (0, s.deserializeMessageSignature)(t);
        return {
          hashMode: e,
          signer: n,
          nonce: o,
          fee: a,
          keyEncoding: c,
          signature: d,
        };
      }
      function T(e, t) {
        const n = (0, r.bytesToHex)(t.readBytes(20)),
          o = BigInt("0x" + (0, r.bytesToHex)(t.readBytes(8))),
          s = BigInt("0x" + (0, r.bytesToHex)(t.readBytes(8))),
          d = (0, a.deserializeLPList)(
            t,
            i.StacksMessageType.TransactionAuthField,
          ).values;
        let l = !1,
          f = 0;
        for (const r of d)
          switch (r.contents.type) {
            case i.StacksMessageType.PublicKey:
              (0, c.isCompressed)(r.contents) || (l = !0);
              break;
            case i.StacksMessageType.MessageSignature:
              if (
                (r.pubKeyEncoding === i.PubKeyEncoding.Uncompressed && (l = !0),
                (f += 1),
                65536 === f)
              )
                throw new u.VerificationError(
                  "Failed to parse multisig spending condition: too many signatures",
                );
              break;
          }
        const h = t.readUInt16BE();
        if (l && e === i.AddressHashMode.SerializeP2SH)
          throw new u.VerificationError(
            "Uncompressed keys are not allowed in this hash mode",
          );
        return {
          hashMode: e,
          signer: n,
          nonce: o,
          fee: s,
          fields: d,
          signaturesRequired: h,
        };
      }
      function S(e) {
        return h(e) ? p(e) : g(e);
      }
      function w(e) {
        const t = e.readUInt8Enum(i.AddressHashMode, (e) => {
          throw new u.DeserializationError(
            `Could not parse ${e} as AddressHashMode`,
          );
        });
        return t === i.AddressHashMode.SerializeP2PKH ||
          t === i.AddressHashMode.SerializeP2WPKH
          ? b(t, e)
          : T(t, e);
      }
      function C(e, t, n, i) {
        const s = 49,
          a =
            e +
            (0, r.bytesToHex)(new Uint8Array([t])) +
            (0, r.bytesToHex)((0, r.intToBytes)(n, !1, 8)) +
            (0, r.bytesToHex)((0, r.intToBytes)(i, !1, 8));
        if ((0, r.hexToBytes)(a).byteLength !== s)
          throw Error("Invalid signature hash length");
        return (0, o.txidFromData)((0, r.hexToBytes)(a));
      }
      function m(e, t, n) {
        const s = 33 + i.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES,
          a = (0, c.isCompressed)(t)
            ? i.PubKeyEncoding.Compressed
            : i.PubKeyEncoding.Uncompressed,
          u = e + (0, o.leftPadHex)(a.toString(16)) + n.data,
          d = (0, r.hexToBytes)(u);
        if (d.byteLength > s) throw Error("Invalid signature hash length");
        return (0, o.txidFromData)(d);
      }
      function P(e, t, n, r, i) {
        const o = C(e, t, n, r),
          s = (0, c.signWithKey)(i, o),
          a = (0, c.getPublicKey)(i),
          u = m(o, a, s);
        return { nextSig: s, nextSigHash: u };
      }
      function A(e, t, n, r, i, o) {
        const s = C(e, t, n, r),
          a = (0, c.createStacksPublicKey)(
            (0, c.publicKeyFromSignatureVrs)(s, o, i),
          ),
          u = m(s, a, o);
        return { pubKey: a, nextSigHash: u };
      }
      function E() {
        const e = l(i.AddressHashMode.SerializeP2PKH, "", 0, 0);
        return (
          (e.signer = (0, a.createEmptyAddress)().hash160),
          (e.keyEncoding = i.PubKeyEncoding.Compressed),
          (e.signature = d()),
          e
        );
      }
      function v(e, t, n) {
        return h(e) ? k(e, t, n) : x(e, t, n);
      }
      function k(e, t, n) {
        const { pubKey: r, nextSigHash: i } = A(
            t,
            n,
            e.fee,
            e.nonce,
            e.keyEncoding,
            e.signature,
          ),
          o = (0, a.addressFromPublicKeys)(0, e.hashMode, 1, [r]).hash160;
        if (o !== e.signer)
          throw new u.VerificationError(
            `Signer hash does not equal hash of public key(s): ${o} != ${e.signer}`,
          );
        return i;
      }
      function x(e, t, n) {
        const r = [];
        let o = t,
          s = !1,
          d = 0;
        for (const a of e.fields) {
          let t;
          switch (a.contents.type) {
            case i.StacksMessageType.PublicKey:
              ((0, c.isCompressed)(a.contents) || (s = !0), (t = a.contents));
              break;
            case i.StacksMessageType.MessageSignature:
              a.pubKeyEncoding === i.PubKeyEncoding.Uncompressed && (s = !0);
              const { pubKey: r, nextSigHash: l } = A(
                o,
                n,
                e.fee,
                e.nonce,
                a.pubKeyEncoding,
                a.contents,
              );
              if (((o = l), (t = r), (d += 1), 65536 === d))
                throw new u.VerificationError("Too many signatures");
              break;
          }
          r.push(t);
        }
        if (d !== e.signaturesRequired)
          throw new u.VerificationError("Incorrect number of signatures");
        if (s && e.hashMode === i.AddressHashMode.SerializeP2SH)
          throw new u.VerificationError(
            "Uncompressed keys are not allowed in this hash mode",
          );
        const l = (0, a.addressFromPublicKeys)(
          0,
          e.hashMode,
          e.signaturesRequired,
          r,
        ).hash160;
        if (l !== e.signer)
          throw new u.VerificationError(
            `Signer hash does not equal hash of public key(s): ${l} != ${e.signer}`,
          );
        return o;
      }
      function B(e) {
        return { authType: i.AuthType.Standard, spendingCondition: e };
      }
      function O(e, t) {
        return {
          authType: i.AuthType.Sponsored,
          spendingCondition: e,
          sponsorSpendingCondition:
            t || l(i.AddressHashMode.SerializeP2PKH, "0".repeat(66), 0, 0),
        };
      }
      function M(e) {
        if (e.spendingCondition)
          switch (e.authType) {
            case i.AuthType.Standard:
              return B(y(e.spendingCondition));
            case i.AuthType.Sponsored:
              return O(y(e.spendingCondition), E());
            default:
              throw new u.SigningError(
                "Unexpected authorization type for signing",
              );
          }
        throw new Error("Authorization missing SpendingCondition");
      }
      function _(e, t) {
        switch (e.authType) {
          case i.AuthType.Standard:
            return v(e.spendingCondition, t, i.AuthType.Standard);
          case i.AuthType.Sponsored:
            return v(e.spendingCondition, t, i.AuthType.Standard);
          default:
            throw new u.SigningError("Invalid origin auth type");
        }
      }
      function I(e, t) {
        switch (e.authType) {
          case i.AuthType.Standard:
            const n = {
              ...e.spendingCondition,
              fee: (0, r.intToBigInt)(t, !1),
            };
            return { ...e, spendingCondition: n };
          case i.AuthType.Sponsored:
            const o = {
              ...e.sponsorSpendingCondition,
              fee: (0, r.intToBigInt)(t, !1),
            };
            return { ...e, sponsorSpendingCondition: o };
        }
      }
      function H(e) {
        switch (e.authType) {
          case i.AuthType.Standard:
            return e.spendingCondition.fee;
          case i.AuthType.Sponsored:
            return e.sponsorSpendingCondition.fee;
        }
      }
      function N(e, t) {
        const n = { ...e.spendingCondition, nonce: (0, r.intToBigInt)(t, !1) };
        return { ...e, spendingCondition: n };
      }
      function U(e, t) {
        const n = {
          ...e.sponsorSpendingCondition,
          nonce: (0, r.intToBigInt)(t, !1),
        };
        return { ...e, sponsorSpendingCondition: n };
      }
      function V(e, t) {
        const n = {
          ...t,
          nonce: (0, r.intToBigInt)(t.nonce, !1),
          fee: (0, r.intToBigInt)(t.fee, !1),
        };
        return { ...e, sponsorSpendingCondition: n };
      }
      function F(e) {
        const t = [];
        switch ((t.push(e.authType), e.authType)) {
          case i.AuthType.Standard:
            t.push(S(e.spendingCondition));
            break;
          case i.AuthType.Sponsored:
            (t.push(S(e.spendingCondition)),
              t.push(S(e.sponsorSpendingCondition)));
            break;
        }
        return (0, r.concatArray)(t);
      }
      function L(e) {
        const t = e.readUInt8Enum(i.AuthType, (e) => {
          throw new u.DeserializationError(`Could not parse ${e} as AuthType`);
        });
        let n;
        switch (t) {
          case i.AuthType.Standard:
            return ((n = w(e)), B(n));
          case i.AuthType.Sponsored:
            n = w(e);
            const t = w(e);
            return O(n, t);
        }
      }
    },
    4889: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createCoinbasePayload = T),
        (t.createContractCallPayload = p),
        (t.createPoisonPayload = b),
        (t.createSmartContractPayload = g),
        (t.createTokenTransferPayload = y),
        (t.deserializePayload = w),
        (t.isCoinbasePayload = h),
        (t.isContractCallPayload = d),
        (t.isPoisonPayload = f),
        (t.isSmartContractPayload = l),
        (t.isTokenTransferPayload = u),
        (t.serializePayload = S));
      var r = n(2778),
        i = n(3128),
        o = n(3469),
        s = n(5743),
        a = n(3627),
        c = n(3855);
      function u(e) {
        return e.payloadType === i.PayloadType.TokenTransfer;
      }
      function d(e) {
        return e.payloadType === i.PayloadType.ContractCall;
      }
      function l(e) {
        return e.payloadType === i.PayloadType.SmartContract;
      }
      function f(e) {
        return e.payloadType === i.PayloadType.PoisonMicroblock;
      }
      function h(e) {
        return e.payloadType === i.PayloadType.Coinbase;
      }
      function y(e, t, n) {
        var o;
        return (
          "string" === typeof e && (e = (0, s.principalCV)(e)),
          "string" === typeof n && (n = (0, c.createMemoString)(n)),
          {
            type: i.StacksMessageType.Payload,
            payloadType: i.PayloadType.TokenTransfer,
            recipient: e,
            amount: (0, r.intToBigInt)(t, !1),
            memo:
              null !== (o = n) && void 0 !== o
                ? o
                : (0, c.createMemoString)(""),
          }
        );
      }
      function p(e, t, n, r) {
        return (
          "string" === typeof e && (e = (0, a.createAddress)(e)),
          "string" === typeof t && (t = (0, a.createLPString)(t)),
          "string" === typeof n && (n = (0, a.createLPString)(n)),
          {
            type: i.StacksMessageType.Payload,
            payloadType: i.PayloadType.ContractCall,
            contractAddress: e,
            contractName: t,
            functionName: n,
            functionArgs: r,
          }
        );
      }
      function g(e, t, n) {
        return (
          "string" === typeof e && (e = (0, a.createLPString)(e)),
          "string" === typeof t && (t = (0, c.codeBodyString)(t)),
          "number" === typeof n
            ? {
                type: i.StacksMessageType.Payload,
                payloadType: i.PayloadType.VersionedSmartContract,
                clarityVersion: n,
                contractName: e,
                codeBody: t,
              }
            : {
                type: i.StacksMessageType.Payload,
                payloadType: i.PayloadType.SmartContract,
                contractName: e,
                codeBody: t,
              }
        );
      }
      function b() {
        return {
          type: i.StacksMessageType.Payload,
          payloadType: i.PayloadType.PoisonMicroblock,
        };
      }
      function T(e, t) {
        if (e.byteLength != i.COINBASE_BYTES_LENGTH)
          throw Error(
            `Coinbase buffer size must be ${i.COINBASE_BYTES_LENGTH} bytes`,
          );
        return void 0 != t
          ? {
              type: i.StacksMessageType.Payload,
              payloadType: i.PayloadType.CoinbaseToAltRecipient,
              coinbaseBytes: e,
              recipient: t,
            }
          : {
              type: i.StacksMessageType.Payload,
              payloadType: i.PayloadType.Coinbase,
              coinbaseBytes: e,
            };
      }
      function S(e) {
        const t = [];
        switch ((t.push(e.payloadType), e.payloadType)) {
          case i.PayloadType.TokenTransfer:
            (t.push((0, o.serializeCV)(e.recipient)),
              t.push((0, r.intToBytes)(e.amount, !1, 8)),
              t.push((0, c.serializeStacksMessage)(e.memo)));
            break;
          case i.PayloadType.ContractCall:
            (t.push((0, c.serializeStacksMessage)(e.contractAddress)),
              t.push((0, c.serializeStacksMessage)(e.contractName)),
              t.push((0, c.serializeStacksMessage)(e.functionName)));
            const n = new Uint8Array(4);
            ((0, r.writeUInt32BE)(n, e.functionArgs.length, 0),
              t.push(n),
              e.functionArgs.forEach((e) => {
                t.push((0, o.serializeCV)(e));
              }));
            break;
          case i.PayloadType.SmartContract:
            (t.push((0, c.serializeStacksMessage)(e.contractName)),
              t.push((0, c.serializeStacksMessage)(e.codeBody)));
            break;
          case i.PayloadType.VersionedSmartContract:
            (t.push(e.clarityVersion),
              t.push((0, c.serializeStacksMessage)(e.contractName)),
              t.push((0, c.serializeStacksMessage)(e.codeBody)));
            break;
          case i.PayloadType.PoisonMicroblock:
            break;
          case i.PayloadType.Coinbase:
            t.push(e.coinbaseBytes);
            break;
          case i.PayloadType.CoinbaseToAltRecipient:
            (t.push(e.coinbaseBytes), t.push((0, o.serializeCV)(e.recipient)));
            break;
        }
        return (0, r.concatArray)(t);
      }
      function w(e) {
        const t = e.readUInt8Enum(i.PayloadType, (e) => {
          throw new Error("Cannot recognize PayloadType: " + e);
        });
        switch (t) {
          case i.PayloadType.TokenTransfer:
            const t = (0, o.deserializeCV)(e),
              n = (0, r.intToBigInt)(e.readBytes(8), !1),
              s = (0, c.deserializeMemoString)(e);
            return y(t, n, s);
          case i.PayloadType.ContractCall:
            const a = (0, c.deserializeAddress)(e),
              u = (0, c.deserializeLPString)(e),
              d = (0, c.deserializeLPString)(e),
              l = [],
              f = e.readUInt32BE();
            for (let r = 0; r < f; r++) {
              const t = (0, o.deserializeCV)(e);
              l.push(t);
            }
            return p(a, u, d, l);
          case i.PayloadType.SmartContract:
            const h = (0, c.deserializeLPString)(e),
              S = (0, c.deserializeLPString)(e, 4, 1e5);
            return g(h, S);
          case i.PayloadType.VersionedSmartContract: {
            const t = e.readUInt8Enum(i.ClarityVersion, (e) => {
                throw new Error("Cannot recognize ClarityVersion: " + e);
              }),
              n = (0, c.deserializeLPString)(e),
              r = (0, c.deserializeLPString)(e, 4, 1e5);
            return g(n, r, t);
          }
          case i.PayloadType.PoisonMicroblock:
            return b();
          case i.PayloadType.Coinbase:
            const w = e.readBytes(i.COINBASE_BYTES_LENGTH);
            return T(w);
          case i.PayloadType.CoinbaseToAltRecipient:
            const C = e.readBytes(i.COINBASE_BYTES_LENGTH),
              m = (0, o.deserializeCV)(e);
            return T(C, m);
        }
      }
    },
    4890: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AuthFieldType = void 0),
        (t.createTransactionAuthField = d),
        (t.deserializeMessageSignature = u),
        (t.deserializeTransactionAuthField = l),
        (t.serializeMessageSignature = f),
        (t.serializeTransactionAuthField = h));
      var r,
        i = n(3470),
        o = n(3128),
        s = n(3856),
        a = n(4604),
        c = n(2778);
      function u(e) {
        return (0, a.createMessageSignature)(
          (0, c.bytesToHex)(e.readBytes(o.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES)),
        );
      }
      function d(e, t) {
        return {
          pubKeyEncoding: e,
          type: o.StacksMessageType.TransactionAuthField,
          contents: t,
        };
      }
      function l(e) {
        const t = e.readUInt8Enum(r, (e) => {
          throw new i.DeserializationError(
            `Could not read ${e} as AuthFieldType`,
          );
        });
        switch (t) {
          case r.PublicKeyCompressed:
            return d(
              o.PubKeyEncoding.Compressed,
              (0, s.deserializePublicKey)(e),
            );
          case r.PublicKeyUncompressed:
            return d(
              o.PubKeyEncoding.Uncompressed,
              (0, s.deserializePublicKey)(e),
            );
          case r.SignatureCompressed:
            return d(o.PubKeyEncoding.Compressed, u(e));
          case r.SignatureUncompressed:
            return d(o.PubKeyEncoding.Uncompressed, u(e));
          default:
            throw new Error("Unknown auth field type: " + JSON.stringify(t));
        }
      }
      function f(e) {
        return (0, c.hexToBytes)(e.data);
      }
      function h(e) {
        const t = [];
        switch (e.contents.type) {
          case o.StacksMessageType.PublicKey:
            e.pubKeyEncoding == o.PubKeyEncoding.Compressed
              ? (t.push(r.PublicKeyCompressed),
                t.push((0, s.serializePublicKey)(e.contents)))
              : (t.push(r.PublicKeyUncompressed),
                t.push(
                  (0, s.serializePublicKey)(
                    (0, s.compressPublicKey)(e.contents.data),
                  ),
                ));
            break;
          case o.StacksMessageType.MessageSignature:
            (e.pubKeyEncoding == o.PubKeyEncoding.Compressed
              ? t.push(r.SignatureCompressed)
              : t.push(r.SignatureUncompressed),
              t.push(f(e.contents)));
            break;
        }
        return (0, c.concatArray)(t);
      }
      (function (e) {
        ((e[(e["PublicKeyCompressed"] = 0)] = "PublicKeyCompressed"),
          (e[(e["PublicKeyUncompressed"] = 1)] = "PublicKeyUncompressed"),
          (e[(e["SignatureCompressed"] = 2)] = "SignatureCompressed"),
          (e[(e["SignatureUncompressed"] = 3)] = "SignatureUncompressed"));
      })(r || (t.AuthFieldType = r = {}));
    },
    5733: function (e, t, n) {
      (function (e, n) {
        var r = 200,
          i = "__lodash_hash_undefined__",
          o = 9007199254740991,
          s = "[object Arguments]",
          a = "[object Array]",
          c = "[object Boolean]",
          u = "[object Date]",
          d = "[object Error]",
          l = "[object Function]",
          f = "[object GeneratorFunction]",
          h = "[object Map]",
          y = "[object Number]",
          p = "[object Object]",
          g = "[object Promise]",
          b = "[object RegExp]",
          T = "[object Set]",
          S = "[object String]",
          w = "[object Symbol]",
          C = "[object WeakMap]",
          m = "[object ArrayBuffer]",
          P = "[object DataView]",
          A = "[object Float32Array]",
          E = "[object Float64Array]",
          v = "[object Int8Array]",
          k = "[object Int16Array]",
          x = "[object Int32Array]",
          B = "[object Uint8Array]",
          O = "[object Uint8ClampedArray]",
          M = "[object Uint16Array]",
          _ = "[object Uint32Array]",
          I = /[\\^$.*+?()[\]{}|]/g,
          H = /\w*$/,
          N = /^\[object .+?Constructor\]$/,
          U = /^(?:0|[1-9]\d*)$/,
          V = {};
        ((V[s] =
          V[a] =
          V[m] =
          V[P] =
          V[c] =
          V[u] =
          V[A] =
          V[E] =
          V[v] =
          V[k] =
          V[x] =
          V[h] =
          V[y] =
          V[p] =
          V[b] =
          V[T] =
          V[S] =
          V[w] =
          V[B] =
          V[O] =
          V[M] =
          V[_] =
            !0),
          (V[d] = V[l] = V[C] = !1));
        var F = "object" == typeof e && e && e.Object === Object && e,
          L = "object" == typeof self && self && self.Object === Object && self,
          j = F || L || Function("return this")(),
          z = t && !t.nodeType && t,
          $ = z && "object" == typeof n && n && !n.nodeType && n,
          K = $ && $.exports === z;
        function R(e, t) {
          return (e.set(t[0], t[1]), e);
        }
        function D(e, t) {
          return (e.add(t), e);
        }
        function G(e, t) {
          var n = -1,
            r = e ? e.length : 0;
          while (++n < r) if (!1 === t(e[n], n, e)) break;
          return e;
        }
        function W(e, t) {
          var n = -1,
            r = t.length,
            i = e.length;
          while (++n < r) e[i + n] = t[n];
          return e;
        }
        function J(e, t, n, r) {
          var i = -1,
            o = e ? e.length : 0;
          r && o && (n = e[++i]);
          while (++i < o) n = t(n, e[i], i, e);
          return n;
        }
        function Y(e, t) {
          var n = -1,
            r = Array(e);
          while (++n < e) r[n] = t(n);
          return r;
        }
        function X(e, t) {
          return null == e ? void 0 : e[t];
        }
        function q(e) {
          var t = !1;
          if (null != e && "function" != typeof e.toString)
            try {
              t = !!(e + "");
            } catch (n) {}
          return t;
        }
        function Z(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, r) {
              n[++t] = [r, e];
            }),
            n
          );
        }
        function Q(e, t) {
          return function (n) {
            return e(t(n));
          };
        }
        function ee(e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        }
        var te = Array.prototype,
          ne = Function.prototype,
          re = Object.prototype,
          ie = j["__core-js_shared__"],
          oe = (function () {
            var e = /[^.]+$/.exec((ie && ie.keys && ie.keys.IE_PROTO) || "");
            return e ? "Symbol(src)_1." + e : "";
          })(),
          se = ne.toString,
          ae = re.hasOwnProperty,
          ce = re.toString,
          ue = RegExp(
            "^" +
              se
                .call(ae)
                .replace(I, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          ),
          de = K ? j.Buffer : void 0,
          le = j.Symbol,
          fe = j.Uint8Array,
          he = Q(Object.getPrototypeOf, Object),
          ye = Object.create,
          pe = re.propertyIsEnumerable,
          ge = te.splice,
          be = Object.getOwnPropertySymbols,
          Te = de ? de.isBuffer : void 0,
          Se = Q(Object.keys, Object),
          we = vt(j, "DataView"),
          Ce = vt(j, "Map"),
          me = vt(j, "Promise"),
          Pe = vt(j, "Set"),
          Ae = vt(j, "WeakMap"),
          Ee = vt(Object, "create"),
          ve = Ut(we),
          ke = Ut(Ce),
          xe = Ut(me),
          Be = Ut(Pe),
          Oe = Ut(Ae),
          Me = le ? le.prototype : void 0,
          _e = Me ? Me.valueOf : void 0;
        function Ie(e) {
          var t = -1,
            n = e ? e.length : 0;
          this.clear();
          while (++t < n) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function He() {
          this.__data__ = Ee ? Ee(null) : {};
        }
        function Ne(e) {
          return this.has(e) && delete this.__data__[e];
        }
        function Ue(e) {
          var t = this.__data__;
          if (Ee) {
            var n = t[e];
            return n === i ? void 0 : n;
          }
          return ae.call(t, e) ? t[e] : void 0;
        }
        function Ve(e) {
          var t = this.__data__;
          return Ee ? void 0 !== t[e] : ae.call(t, e);
        }
        function Fe(e, t) {
          var n = this.__data__;
          return ((n[e] = Ee && void 0 === t ? i : t), this);
        }
        function Le(e) {
          var t = -1,
            n = e ? e.length : 0;
          this.clear();
          while (++t < n) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function je() {
          this.__data__ = [];
        }
        function ze(e) {
          var t = this.__data__,
            n = ot(t, e);
          if (n < 0) return !1;
          var r = t.length - 1;
          return (n == r ? t.pop() : ge.call(t, n, 1), !0);
        }
        function $e(e) {
          var t = this.__data__,
            n = ot(t, e);
          return n < 0 ? void 0 : t[n][1];
        }
        function Ke(e) {
          return ot(this.__data__, e) > -1;
        }
        function Re(e, t) {
          var n = this.__data__,
            r = ot(n, e);
          return (r < 0 ? n.push([e, t]) : (n[r][1] = t), this);
        }
        function De(e) {
          var t = -1,
            n = e ? e.length : 0;
          this.clear();
          while (++t < n) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        function Ge() {
          this.__data__ = {
            hash: new Ie(),
            map: new (Ce || Le)(),
            string: new Ie(),
          };
        }
        function We(e) {
          return Et(this, e)["delete"](e);
        }
        function Je(e) {
          return Et(this, e).get(e);
        }
        function Ye(e) {
          return Et(this, e).has(e);
        }
        function Xe(e, t) {
          return (Et(this, e).set(e, t), this);
        }
        function qe(e) {
          this.__data__ = new Le(e);
        }
        function Ze() {
          this.__data__ = new Le();
        }
        function Qe(e) {
          return this.__data__["delete"](e);
        }
        function et(e) {
          return this.__data__.get(e);
        }
        function tt(e) {
          return this.__data__.has(e);
        }
        function nt(e, t) {
          var n = this.__data__;
          if (n instanceof Le) {
            var i = n.__data__;
            if (!Ce || i.length < r - 1) return (i.push([e, t]), this);
            n = this.__data__ = new De(i);
          }
          return (n.set(e, t), this);
        }
        function rt(e, t) {
          var n = jt(e) || Lt(e) ? Y(e.length, String) : [],
            r = n.length,
            i = !!r;
          for (var o in e)
            (!t && !ae.call(e, o)) ||
              (i && ("length" == o || _t(o, r))) ||
              n.push(o);
          return n;
        }
        function it(e, t, n) {
          var r = e[t];
          (ae.call(e, t) && Ft(r, n) && (void 0 !== n || t in e)) || (e[t] = n);
        }
        function ot(e, t) {
          var n = e.length;
          while (n--) if (Ft(e[n][0], t)) return n;
          return -1;
        }
        function st(e, t) {
          return e && mt(t, Jt(t), e);
        }
        function at(e, t, n, r, i, o, a) {
          var c;
          if ((r && (c = o ? r(e, i, o, a) : r(e)), void 0 !== c)) return c;
          if (!Gt(e)) return e;
          var u = jt(e);
          if (u) {
            if (((c = Bt(e)), !t)) return Ct(e, c);
          } else {
            var d = xt(e),
              h = d == l || d == f;
            if (Kt(e)) return ht(e, t);
            if (d == p || d == s || (h && !o)) {
              if (q(e)) return o ? e : {};
              if (((c = Ot(h ? {} : e)), !t)) return Pt(e, st(c, e));
            } else {
              if (!V[d]) return o ? e : {};
              c = Mt(e, d, at, t);
            }
          }
          a || (a = new qe());
          var y = a.get(e);
          if (y) return y;
          if ((a.set(e, c), !u)) var g = n ? At(e) : Jt(e);
          return (
            G(g || e, function (i, o) {
              (g && ((o = i), (i = e[o])), it(c, o, at(i, t, n, r, o, e, a)));
            }),
            c
          );
        }
        function ct(e) {
          return Gt(e) ? ye(e) : {};
        }
        function ut(e, t, n) {
          var r = t(e);
          return jt(e) ? r : W(r, n(e));
        }
        function dt(e) {
          return ce.call(e);
        }
        function lt(e) {
          if (!Gt(e) || Ht(e)) return !1;
          var t = Rt(e) || q(e) ? ue : N;
          return t.test(Ut(e));
        }
        function ft(e) {
          if (!Nt(e)) return Se(e);
          var t = [];
          for (var n in Object(e))
            ae.call(e, n) && "constructor" != n && t.push(n);
          return t;
        }
        function ht(e, t) {
          if (t) return e.slice();
          var n = new e.constructor(e.length);
          return (e.copy(n), n);
        }
        function yt(e) {
          var t = new e.constructor(e.byteLength);
          return (new fe(t).set(new fe(e)), t);
        }
        function pt(e, t) {
          var n = t ? yt(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.byteLength);
        }
        function gt(e, t, n) {
          var r = t ? n(Z(e), !0) : Z(e);
          return J(r, R, new e.constructor());
        }
        function bt(e) {
          var t = new e.constructor(e.source, H.exec(e));
          return ((t.lastIndex = e.lastIndex), t);
        }
        function Tt(e, t, n) {
          var r = t ? n(ee(e), !0) : ee(e);
          return J(r, D, new e.constructor());
        }
        function St(e) {
          return _e ? Object(_e.call(e)) : {};
        }
        function wt(e, t) {
          var n = t ? yt(e.buffer) : e.buffer;
          return new e.constructor(n, e.byteOffset, e.length);
        }
        function Ct(e, t) {
          var n = -1,
            r = e.length;
          t || (t = Array(r));
          while (++n < r) t[n] = e[n];
          return t;
        }
        function mt(e, t, n, r) {
          n || (n = {});
          var i = -1,
            o = t.length;
          while (++i < o) {
            var s = t[i],
              a = r ? r(n[s], e[s], s, n, e) : void 0;
            it(n, s, void 0 === a ? e[s] : a);
          }
          return n;
        }
        function Pt(e, t) {
          return mt(e, kt(e), t);
        }
        function At(e) {
          return ut(e, Jt, kt);
        }
        function Et(e, t) {
          var n = e.__data__;
          return It(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
        }
        function vt(e, t) {
          var n = X(e, t);
          return lt(n) ? n : void 0;
        }
        ((Ie.prototype.clear = He),
          (Ie.prototype["delete"] = Ne),
          (Ie.prototype.get = Ue),
          (Ie.prototype.has = Ve),
          (Ie.prototype.set = Fe),
          (Le.prototype.clear = je),
          (Le.prototype["delete"] = ze),
          (Le.prototype.get = $e),
          (Le.prototype.has = Ke),
          (Le.prototype.set = Re),
          (De.prototype.clear = Ge),
          (De.prototype["delete"] = We),
          (De.prototype.get = Je),
          (De.prototype.has = Ye),
          (De.prototype.set = Xe),
          (qe.prototype.clear = Ze),
          (qe.prototype["delete"] = Qe),
          (qe.prototype.get = et),
          (qe.prototype.has = tt),
          (qe.prototype.set = nt));
        var kt = be ? Q(be, Object) : Yt,
          xt = dt;
        function Bt(e) {
          var t = e.length,
            n = e.constructor(t);
          return (
            t &&
              "string" == typeof e[0] &&
              ae.call(e, "index") &&
              ((n.index = e.index), (n.input = e.input)),
            n
          );
        }
        function Ot(e) {
          return "function" != typeof e.constructor || Nt(e) ? {} : ct(he(e));
        }
        function Mt(e, t, n, r) {
          var i = e.constructor;
          switch (t) {
            case m:
              return yt(e);
            case c:
            case u:
              return new i(+e);
            case P:
              return pt(e, r);
            case A:
            case E:
            case v:
            case k:
            case x:
            case B:
            case O:
            case M:
            case _:
              return wt(e, r);
            case h:
              return gt(e, r, n);
            case y:
            case S:
              return new i(e);
            case b:
              return bt(e);
            case T:
              return Tt(e, r, n);
            case w:
              return St(e);
          }
        }
        function _t(e, t) {
          return (
            (t = null == t ? o : t),
            !!t &&
              ("number" == typeof e || U.test(e)) &&
              e > -1 &&
              e % 1 == 0 &&
              e < t
          );
        }
        function It(e) {
          var t = typeof e;
          return "string" == t ||
            "number" == t ||
            "symbol" == t ||
            "boolean" == t
            ? "__proto__" !== e
            : null === e;
        }
        function Ht(e) {
          return !!oe && oe in e;
        }
        function Nt(e) {
          var t = e && e.constructor,
            n = ("function" == typeof t && t.prototype) || re;
          return e === n;
        }
        function Ut(e) {
          if (null != e) {
            try {
              return se.call(e);
            } catch (t) {}
            try {
              return e + "";
            } catch (t) {}
          }
          return "";
        }
        function Vt(e) {
          return at(e, !0, !0);
        }
        function Ft(e, t) {
          return e === t || (e !== e && t !== t);
        }
        function Lt(e) {
          return (
            $t(e) &&
            ae.call(e, "callee") &&
            (!pe.call(e, "callee") || ce.call(e) == s)
          );
        }
        ((we && xt(new we(new ArrayBuffer(1))) != P) ||
          (Ce && xt(new Ce()) != h) ||
          (me && xt(me.resolve()) != g) ||
          (Pe && xt(new Pe()) != T) ||
          (Ae && xt(new Ae()) != C)) &&
          (xt = function (e) {
            var t = ce.call(e),
              n = t == p ? e.constructor : void 0,
              r = n ? Ut(n) : void 0;
            if (r)
              switch (r) {
                case ve:
                  return P;
                case ke:
                  return h;
                case xe:
                  return g;
                case Be:
                  return T;
                case Oe:
                  return C;
              }
            return t;
          });
        var jt = Array.isArray;
        function zt(e) {
          return null != e && Dt(e.length) && !Rt(e);
        }
        function $t(e) {
          return Wt(e) && zt(e);
        }
        var Kt = Te || Xt;
        function Rt(e) {
          var t = Gt(e) ? ce.call(e) : "";
          return t == l || t == f;
        }
        function Dt(e) {
          return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o;
        }
        function Gt(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function Wt(e) {
          return !!e && "object" == typeof e;
        }
        function Jt(e) {
          return zt(e) ? rt(e) : ft(e);
        }
        function Yt() {
          return [];
        }
        function Xt() {
          return !1;
        }
        n.exports = Vt;
      }).call(this, n(13), n(20)(e));
    },
    5741: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SHA2 = void 0));
      const r = n(6959),
        i = n(4603);
      function o(e, t, n, r) {
        if ("function" === typeof e.setBigUint64)
          return e.setBigUint64(t, n, r);
        const i = BigInt(32),
          o = BigInt(4294967295),
          s = Number((n >> i) & o),
          a = Number(n & o),
          c = r ? 4 : 0,
          u = r ? 0 : 4;
        (e.setUint32(t + c, s, r), e.setUint32(t + u, a, r));
      }
      class SHA2 extends i.Hash {
        constructor(e, t, n, r) {
          (super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, i.createView)(this.buffer)));
        }
        update(e) {
          r.default.exists(this);
          const { view: t, buffer: n, blockLen: o } = this;
          e = (0, i.toBytes)(e);
          const s = e.length;
          for (let r = 0; r < s; ) {
            const a = Math.min(o - this.pos, s - r);
            if (a !== o)
              (n.set(e.subarray(r, r + a), this.pos),
                (this.pos += a),
                (r += a),
                this.pos === o && (this.process(t, 0), (this.pos = 0)));
            else {
              const t = (0, i.createView)(e);
              for (; o <= s - r; r += o) this.process(t, r);
            }
          }
          return ((this.length += e.length), this.roundClean(), this);
        }
        digestInto(e) {
          (r.default.exists(this),
            r.default.output(e, this),
            (this.finished = !0));
          const { buffer: t, view: n, blockLen: s, isLE: a } = this;
          let { pos: c } = this;
          ((t[c++] = 128),
            this.buffer.subarray(c).fill(0),
            this.padOffset > s - c && (this.process(n, 0), (c = 0)));
          for (let r = c; r < s; r++) t[r] = 0;
          (o(n, s - 8, BigInt(8 * this.length), a), this.process(n, 0));
          const u = (0, i.createView)(e),
            d = this.outputLen;
          if (d % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const l = d / 4,
            f = this.get();
          if (l > f.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let r = 0; r < l; r++) u.setUint32(4 * r, f[r], a);
        }
        digest() {
          const { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          const n = e.slice(0, t);
          return (this.destroy(), n);
        }
        _cloneInto(e) {
          (e || (e = new this.constructor()), e.set(...this.get()));
          const {
            blockLen: t,
            buffer: n,
            length: r,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (e.length = r),
            (e.pos = s),
            (e.finished = i),
            (e.destroyed = o),
            r % t && e.buffer.set(n),
            e
          );
        }
      }
      t.SHA2 = SHA2;
    },
    5742: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha224 = t.sha256 = void 0));
      const r = n(5741),
        i = n(4603),
        o = (e, t, n) => (e & t) ^ (~e & n),
        s = (e, t, n) => (e & t) ^ (e & n) ^ (t & n),
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
      class SHA256 extends r.SHA2 {
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
          const { A: e, B: t, C: n, D: r, E: i, F: o, G: s, H: a } = this;
          return [e, t, n, r, i, o, s, a];
        }
        set(e, t, n, r, i, o, s, a) {
          ((this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a));
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4) u[i] = e.getUint32(t, !1);
          for (let o = 16; o < 64; o++) {
            const e = u[o - 15],
              t = u[o - 2],
              n = (0, i.rotr)(e, 7) ^ (0, i.rotr)(e, 18) ^ (e >>> 3),
              r = (0, i.rotr)(t, 17) ^ (0, i.rotr)(t, 19) ^ (t >>> 10);
            u[o] = (r + u[o - 7] + n + u[o - 16]) | 0;
          }
          let { A: n, B: r, C: c, D: d, E: l, F: f, G: h, H: y } = this;
          for (let p = 0; p < 64; p++) {
            const e =
                (0, i.rotr)(l, 6) ^ (0, i.rotr)(l, 11) ^ (0, i.rotr)(l, 25),
              t = (y + e + o(l, f, h) + a[p] + u[p]) | 0,
              g = (0, i.rotr)(n, 2) ^ (0, i.rotr)(n, 13) ^ (0, i.rotr)(n, 22),
              b = (g + s(n, r, c)) | 0;
            ((y = h),
              (h = f),
              (f = l),
              (l = (d + t) | 0),
              (d = c),
              (c = r),
              (r = n),
              (n = (t + b) | 0));
          }
          ((n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (c = (c + this.C) | 0),
            (d = (d + this.D) | 0),
            (l = (l + this.E) | 0),
            (f = (f + this.F) | 0),
            (h = (h + this.G) | 0),
            (y = (y + this.H) | 0),
            this.set(n, r, c, d, l, f, h, y));
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
    5743: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.contractPrincipalCV = l),
        (t.contractPrincipalCVFromAddress = f),
        (t.contractPrincipalCVFromStandard = h),
        (t.principalCV = c),
        (t.principalToString = a),
        (t.standardPrincipalCV = u),
        (t.standardPrincipalCVFromAddress = d));
      var r = n(2778),
        i = n(4604),
        o = n(3627),
        s = n(3238);
      function a(e) {
        if (e.type === s.ClarityType.PrincipalStandard)
          return (0, i.addressToString)(e.address);
        if (e.type === s.ClarityType.PrincipalContract) {
          const t = (0, i.addressToString)(e.address);
          return `${t}.${e.contractName.content}`;
        }
        throw new Error("Unexpected principal data: " + JSON.stringify(e));
      }
      function c(e) {
        if (e.includes(".")) {
          const [t, n] = e.split(".");
          return l(t, n);
        }
        return u(e);
      }
      function u(e) {
        const t = (0, o.createAddress)(e);
        return { type: s.ClarityType.PrincipalStandard, address: t };
      }
      function d(e) {
        return { type: s.ClarityType.PrincipalStandard, address: e };
      }
      function l(e, t) {
        const n = (0, o.createAddress)(e),
          r = (0, o.createLPString)(t);
        return f(n, r);
      }
      function f(e, t) {
        if ((0, r.utf8ToBytes)(t.content).byteLength >= 128)
          throw new Error("Contract name must be less than 128 bytes");
        return {
          type: s.ClarityType.PrincipalContract,
          address: e,
          contractName: t,
        };
      }
      function h(e, t) {
        const n = (0, o.createLPString)(t);
        return {
          type: s.ClarityType.PrincipalContract,
          address: e.address,
          contractName: n,
        };
      }
    },
    5744: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringUtf8CV = t.stringCV = t.stringAsciiCV = void 0));
      var r = n(3238);
      const i = (e) => ({ type: r.ClarityType.StringASCII, data: e });
      t.stringAsciiCV = i;
      const o = (e) => ({ type: r.ClarityType.StringUTF8, data: e });
      t.stringUtf8CV = o;
      const s = (e, t) => {
        switch (t) {
          case "ascii":
            return i(e);
          case "utf8":
            return o(e);
        }
      };
      t.stringCV = s;
    },
    5745: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BytesReader = void 0),
        (t.isEnum = s));
      var r = n(2778);
      function i(e) {
        const t = Object.values(e).filter((e) => "number" === typeof e),
          n = new Set(t);
        return (e) => n.has(e);
      }
      const o = new Map();
      function s(e, t) {
        const n = o.get(e);
        if (void 0 !== n) return n(t);
        const r = i(e);
        return (o.set(e, r), s(e, t));
      }
      class BytesReader {
        constructor(e) {
          ((this.consumed = 0), (this.source = e));
        }
        readBytes(e) {
          const t = this.source.subarray(this.consumed, this.consumed + e);
          return ((this.consumed += e), t);
        }
        readUInt32BE() {
          return (0, r.readUInt32BE)(this.readBytes(4), 0);
        }
        readUInt8() {
          return (0, r.readUInt8)(this.readBytes(1), 0);
        }
        readUInt16BE() {
          return (0, r.readUInt16BE)(this.readBytes(2), 0);
        }
        readBigUIntLE(e) {
          const t = this.readBytes(e).slice().reverse(),
            n = (0, r.bytesToHex)(t);
          return BigInt("0x" + n);
        }
        readBigUIntBE(e) {
          const t = this.readBytes(e),
            n = (0, r.bytesToHex)(t);
          return BigInt("0x" + n);
        }
        get readOffset() {
          return this.consumed;
        }
        set readOffset(e) {
          this.consumed = e;
        }
        get internalBytes() {
          return this.source;
        }
        readUInt8Enum(e, t) {
          const n = this.readUInt8();
          if (s(e, n)) return n;
          throw t(n);
        }
      }
      t.BytesReader = BytesReader;
    },
    6959: function (e, t, n) {
      "use strict";
      function r(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error("Wrong positive integer: " + e);
      }
      function i(e) {
        if ("boolean" !== typeof e)
          throw new Error("Expected boolean, not " + e);
      }
      function o(e) {
        if (!(e instanceof Uint8Array))
          throw new TypeError("Expected Uint8Array");
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        if (n.length > 0 && !n.includes(e.length))
          throw new TypeError(
            `Expected Uint8Array of length ${n}, not of length=${e.length}`,
          );
      }
      function s(e) {
        if ("function" !== typeof e || "function" !== typeof e.create)
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        (r(e.outputLen), r(e.blockLen));
      }
      function a(e, t) {
        if ((void 0 === t && (t = !0), e.destroyed))
          throw new Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function c(e, t) {
        o(e);
        const n = t.outputLen;
        if (e.length < n)
          throw new Error(
            "digestInto() expects output buffer of length at least " + n,
          );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.output = t.exists = t.hash = t.bytes = t.bool = t.number = void 0),
        (t.number = r),
        (t.bool = i),
        (t.bytes = o),
        (t.hash = s),
        (t.exists = a),
        (t.output = c));
      const u = { number: r, bool: i, bytes: o, hash: s, exists: a, output: c };
      t.default = u;
    },
    6960: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.broadcastRawTransaction = A),
        (t.broadcastTransaction = P),
        (t.callReadOnlyFunction = z),
        (t.estimateContractDeploy = B),
        (t.estimateContractFunctionCall = _),
        (t.estimateTransaction = m),
        (t.estimateTransactionByteLength = R),
        (t.estimateTransactionFeeWithFallback = D),
        (t.estimateTransfer = w),
        (t.estimateTransferUnsafe = C),
        (t.getAbi = E),
        (t.getContractMapEntry = $),
        (t.getNonce = S),
        (t.makeContractCall = H),
        (t.makeContractDeploy = O),
        (t.makeContractFungiblePostCondition = F),
        (t.makeContractNonFungiblePostCondition = j),
        (t.makeContractSTXPostCondition = U),
        (t.makeSTXTokenTransfer = x),
        (t.makeStandardFungiblePostCondition = V),
        (t.makeStandardNonFungiblePostCondition = L),
        (t.makeStandardSTXPostCondition = N),
        (t.makeUnsignedContractCall = I),
        (t.makeUnsignedContractDeploy = M),
        (t.makeUnsignedSTXTokenTransfer = k),
        (t.sponsorTransaction = K));
      var r = n(2778),
        i = n(11543),
        o = n(3208),
        s = n(4888),
        a = n(3469),
        c = n(3128),
        u = n(6962),
        d = n(3470),
        l = n(3856),
        f = n(4889),
        h = n(6963),
        y = n(3627),
        p = n(6964),
        g = n(6965),
        b = n(3855),
        T = n(3408);
      async function S(e, t) {
        const n = i.StacksNetwork.fromNameOrNetwork(
            null !== t && void 0 !== t ? t : new i.StacksMainnet(),
          ),
          r = n.getAccountApiUrl(e),
          o = await n.fetchFn(r);
        if (!o.ok) {
          let e = "";
          try {
            e = await o.text();
          } catch (c) {}
          throw new Error(
            `Error fetching nonce. Response ${o.status}: ${o.statusText}. Attempted to fetch ${r} and failed with the message: "${e}"`,
          );
        }
        const s = await o.text(),
          a = JSON.parse(s);
        return BigInt(a.nonce);
      }
      async function w(e, t) {
        if (e.payload.payloadType !== c.PayloadType.TokenTransfer)
          throw new Error(
            `Transaction fee estimation only possible with ${c.PayloadType[c.PayloadType.TokenTransfer]} transactions. Invoked with: ${c.PayloadType[e.payload.payloadType]}`,
          );
        return C(e, t);
      }
      async function C(e, t) {
        const n = { Accept: "application/text" },
          r = { method: "GET", headers: n },
          o = i.StacksNetwork.fromNameOrNetwork(
            null !== t && void 0 !== t ? t : v(e),
          ),
          s = o.getTransferFeeEstimateApiUrl(),
          a = await o.fetchFn(s, r);
        if (!a.ok) {
          let e = "";
          try {
            e = await a.text();
          } catch (l) {}
          throw new Error(
            `Error estimating transaction fee. Response ${a.status}: ${a.statusText}. Attempted to fetch ${s} and failed with the message: "${e}"`,
          );
        }
        const c = await a.text(),
          u = BigInt(e.serialize().byteLength),
          d = BigInt(c);
        return d * u;
      }
      async function m(e, t, n) {
        const o = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              transaction_payload: (0, r.bytesToHex)(
                (0, f.serializePayload)(e),
              ),
              ...(t ? { estimated_len: t } : {}),
            }),
          },
          s = i.StacksNetwork.fromNameOrNetwork(
            null !== n && void 0 !== n ? n : new i.StacksMainnet(),
          ),
          a = s.getTransactionFeeEstimateApiUrl(),
          c = await s.fetchFn(a, o);
        if (!c.ok) {
          const e = await c.json().catch(() => ({}));
          var u, l;
          if (
            "NoEstimateAvailable" ===
            (null === e || void 0 === e ? void 0 : e.reason)
          )
            throw new d.NoEstimateAvailableError(
              null !==
                (u =
                  null === e ||
                  void 0 === e ||
                  null === (l = e.reason_data) ||
                  void 0 === l
                    ? void 0
                    : l.message) && void 0 !== u
                ? u
                : "",
            );
          throw new Error(
            `Error estimating transaction fee. Response ${c.status}: ${c.statusText}. Attempted to fetch ${a} and failed with the message: "${e}"`,
          );
        }
        const h = await c.json();
        return h.estimations;
      }
      async function P(e, t, n) {
        const r = e.serialize(),
          o = i.StacksNetwork.fromNameOrNetwork(
            null !== t && void 0 !== t ? t : v(e),
          ),
          s = o.getBroadcastApiUrl();
        return A(r, s, n, o.fetchFn);
      }
      async function A(e, t, n, o) {
        void 0 === o && (o = (0, i.createFetchFn)());
        const s = {
            method: "POST",
            headers: {
              "Content-Type": n
                ? "application/json"
                : "application/octet-stream",
            },
            body: n
              ? JSON.stringify({
                  tx: (0, r.bytesToHex)(e),
                  attachment: (0, r.bytesToHex)(n),
                })
              : e,
          },
          a = await o(t, s);
        if (!a.ok)
          try {
            return await a.json();
          } catch (d) {
            throw Error("Failed to broadcast transaction: " + d.message);
          }
        const c = await a.text(),
          u = c.replace(/["]+/g, "");
        if (!(0, T.validateTxId)(u)) throw new Error(c);
        return { txid: u };
      }
      async function E(e, t, n) {
        const r = { method: "GET" },
          o = i.StacksNetwork.fromNameOrNetwork(n),
          s = o.getAbiApiUrl(e, t),
          a = await o.fetchFn(s, r);
        if (!a.ok) {
          const n = await a.text().catch(() => "");
          throw new Error(
            `Error fetching contract ABI for contract "${t}" at address ${e}. Response ${a.status}: ${a.statusText}. Attempted to fetch ${s} and failed with the message: "${n}"`,
          );
        }
        return JSON.parse(await a.text());
      }
      function v(e) {
        switch (e.version) {
          case c.TransactionVersion.Mainnet:
            return new i.StacksMainnet();
          case c.TransactionVersion.Testnet:
            return new i.StacksTestnet();
        }
      }
      async function k(e) {
        const t = {
            fee: BigInt(0),
            nonce: BigInt(0),
            network: new i.StacksMainnet(),
            postConditionMode: c.PostConditionMode.Deny,
            memo: "",
            sponsored: !1,
          },
          n = Object.assign(t, e),
          r = (0, f.createTokenTransferPayload)(n.recipient, n.amount, n.memo);
        let a = null,
          u = null;
        ((u =
          "publicKey" in n
            ? (0, s.createSingleSigSpendingCondition)(
                c.AddressHashMode.SerializeP2PKH,
                n.publicKey,
                n.nonce,
                n.fee,
              )
            : (0, s.createMultiSigSpendingCondition)(
                c.AddressHashMode.SerializeP2SH,
                n.numSignatures,
                n.publicKeys,
                n.nonce,
                n.fee,
              )),
          (a = n.sponsored
            ? (0, s.createSponsoredAuth)(u)
            : (0, s.createStandardAuth)(u)));
        const d = i.StacksNetwork.fromNameOrNetwork(n.network),
          l = [];
        n.postConditions &&
          n.postConditions.length > 0 &&
          n.postConditions.forEach((e) => {
            l.push(e);
          });
        const h = (0, b.createLPList)(l),
          y = new g.StacksTransaction(
            d.version,
            a,
            r,
            h,
            n.postConditionMode,
            n.anchorMode,
            d.chainId,
          );
        if (void 0 === e.fee || null === e.fee) {
          const e = await D(y, d);
          y.setFee(e);
        }
        if (void 0 === e.nonce || null === e.nonce) {
          const e =
              n.network.version === c.TransactionVersion.Mainnet
                ? c.AddressVersion.MainnetSingleSig
                : c.AddressVersion.TestnetSingleSig,
            t = (0, o.c32address)(e, y.auth.spendingCondition.signer),
            r = await S(t, n.network);
          y.setNonce(r);
        }
        return y;
      }
      async function x(e) {
        if ("senderKey" in e) {
          const t = (0, l.publicKeyToString)(
              (0, l.getPublicKey)((0, l.createStacksPrivateKey)(e.senderKey)),
            ),
            n = (0, T.omit)(e, "senderKey"),
            r = await k({ publicKey: t, ...n }),
            i = (0, l.createStacksPrivateKey)(e.senderKey),
            o = new p.TransactionSigner(r);
          return (o.signOrigin(i), r);
        }
        {
          const t = (0, T.omit)(e, "signerKeys"),
            n = await k(t),
            i = new p.TransactionSigner(n);
          let o = e.publicKeys;
          for (const s of e.signerKeys) {
            const e = (0, l.pubKeyfromPrivKey)(s);
            ((o = o.filter((t) => t !== (0, r.bytesToHex)(e.data))),
              i.signOrigin((0, l.createStacksPrivateKey)(s)));
          }
          for (const e of o)
            i.appendOrigin((0, l.publicKeyFromBytes)((0, r.hexToBytes)(e)));
          return n;
        }
      }
      async function B(e, t) {
        if (
          e.payload.payloadType !== c.PayloadType.SmartContract &&
          e.payload.payloadType !== c.PayloadType.VersionedSmartContract
        )
          throw new Error(
            `Contract deploy fee estimation only possible with ${c.PayloadType[c.PayloadType.SmartContract]} transactions. Invoked with: ${c.PayloadType[e.payload.payloadType]}`,
          );
        const n = { Accept: "application/text" },
          o = { method: "GET", headers: n },
          s = i.StacksNetwork.fromNameOrNetwork(
            null !== t && void 0 !== t ? t : v(e),
          ),
          a = s.getTransferFeeEstimateApiUrl(),
          u = await s.fetchFn(a, o);
        if (!u.ok) {
          const e = await u.text().catch(() => "");
          throw new Error(
            `Error estimating contract deploy fee. Response ${u.status}: ${u.statusText}. Attempted to fetch ${a} and failed with the message: "${e}"`,
          );
        }
        const d = await u.text(),
          l = (0, r.intToBigInt)(e.serialize().byteLength, !1),
          f = (0, r.intToBigInt)(d, !1);
        return f * l;
      }
      async function O(e) {
        const t = (0, l.createStacksPrivateKey)(e.senderKey),
          n = (0, l.getPublicKey)(t),
          r = (0, l.publicKeyToString)(n),
          i = { ...e, publicKey: r },
          o = await M(i);
        if (e.senderKey) {
          const e = new p.TransactionSigner(o);
          e.signOrigin(t);
        }
        return o;
      }
      async function M(e) {
        const t = {
            fee: BigInt(0),
            nonce: BigInt(0),
            network: new i.StacksMainnet(),
            postConditionMode: c.PostConditionMode.Deny,
            sponsored: !1,
            clarityVersion: c.ClarityVersion.Clarity2,
          },
          n = Object.assign(t, e),
          r = (0, f.createSmartContractPayload)(
            n.contractName,
            n.codeBody,
            n.clarityVersion,
          ),
          o = c.AddressHashMode.SerializeP2PKH,
          a = (0, l.createStacksPublicKey)(n.publicKey);
        let u = null;
        const d = (0, s.createSingleSigSpendingCondition)(
          o,
          (0, l.publicKeyToString)(a),
          n.nonce,
          n.fee,
        );
        u = n.sponsored
          ? (0, s.createSponsoredAuth)(d)
          : (0, s.createStandardAuth)(d);
        const h = i.StacksNetwork.fromNameOrNetwork(n.network),
          y = [];
        n.postConditions &&
          n.postConditions.length > 0 &&
          n.postConditions.forEach((e) => {
            y.push(e);
          });
        const p = (0, b.createLPList)(y),
          T = new g.StacksTransaction(
            h.version,
            u,
            r,
            p,
            n.postConditionMode,
            n.anchorMode,
            h.chainId,
          );
        if (void 0 === e.fee || null === e.fee) {
          const e = await D(T, h);
          T.setFee(e);
        }
        if (void 0 === e.nonce || null === e.nonce) {
          const e =
              n.network.version === c.TransactionVersion.Mainnet
                ? c.AddressVersion.MainnetSingleSig
                : c.AddressVersion.TestnetSingleSig,
            t = (0, l.publicKeyToAddress)(e, a),
            r = await S(t, n.network);
          T.setNonce(r);
        }
        return T;
      }
      async function _(e, t) {
        if (e.payload.payloadType !== c.PayloadType.ContractCall)
          throw new Error(
            `Contract call fee estimation only possible with ${c.PayloadType[c.PayloadType.ContractCall]} transactions. Invoked with: ${c.PayloadType[e.payload.payloadType]}`,
          );
        const n = { Accept: "application/text" },
          o = { method: "GET", headers: n },
          s = i.StacksNetwork.fromNameOrNetwork(
            null !== t && void 0 !== t ? t : v(e),
          ),
          a = s.getTransferFeeEstimateApiUrl(),
          u = await s.fetchFn(a, o);
        if (!u.ok) {
          const e = await u.text().catch(() => "");
          throw new Error(
            `Error estimating contract call fee. Response ${u.status}: ${u.statusText}. Attempted to fetch ${a} and failed with the message: "${e}"`,
          );
        }
        const d = await u.text(),
          l = (0, r.intToBigInt)(e.serialize().byteLength, !1),
          f = (0, r.intToBigInt)(d, !1);
        return f * l;
      }
      async function I(e) {
        const t = {
            fee: BigInt(0),
            nonce: BigInt(0),
            network: new i.StacksMainnet(),
            postConditionMode: c.PostConditionMode.Deny,
            sponsored: !1,
          },
          n = Object.assign(t, e),
          r = (0, f.createContractCallPayload)(
            n.contractAddress,
            n.contractName,
            n.functionName,
            n.functionArgs,
          );
        if (null !== n && void 0 !== n && n.validateWithAbi) {
          let e;
          if ("boolean" === typeof n.validateWithAbi) {
            if (null === n || void 0 === n || !n.network)
              throw new Error(
                "Network option must be provided in order to validate with ABI",
              );
            e = await E(n.contractAddress, n.contractName, n.network);
          } else e = n.validateWithAbi;
          (0, u.validateContractCall)(r, e);
        }
        let a = null,
          d = null;
        ((a =
          "publicKey" in n
            ? (0, s.createSingleSigSpendingCondition)(
                c.AddressHashMode.SerializeP2PKH,
                n.publicKey,
                n.nonce,
                n.fee,
              )
            : (0, s.createMultiSigSpendingCondition)(
                c.AddressHashMode.SerializeP2SH,
                n.numSignatures,
                n.publicKeys,
                n.nonce,
                n.fee,
              )),
          (d = n.sponsored
            ? (0, s.createSponsoredAuth)(a)
            : (0, s.createStandardAuth)(a)));
        const l = i.StacksNetwork.fromNameOrNetwork(n.network),
          h = [];
        n.postConditions &&
          n.postConditions.length > 0 &&
          n.postConditions.forEach((e) => {
            h.push(e);
          });
        const y = (0, b.createLPList)(h),
          p = new g.StacksTransaction(
            l.version,
            d,
            r,
            y,
            n.postConditionMode,
            n.anchorMode,
            l.chainId,
          );
        if (void 0 === e.fee || null === e.fee) {
          const e = await D(p, l);
          p.setFee(e);
        }
        if (void 0 === e.nonce || null === e.nonce) {
          const e =
              l.version === c.TransactionVersion.Mainnet
                ? c.AddressVersion.MainnetSingleSig
                : c.AddressVersion.TestnetSingleSig,
            t = (0, o.c32address)(e, p.auth.spendingCondition.signer),
            n = await S(t, l);
          p.setNonce(n);
        }
        return p;
      }
      async function H(e) {
        if ("senderKey" in e) {
          const t = (0, l.publicKeyToString)(
              (0, l.getPublicKey)((0, l.createStacksPrivateKey)(e.senderKey)),
            ),
            n = (0, T.omit)(e, "senderKey"),
            r = await I({ publicKey: t, ...n }),
            i = (0, l.createStacksPrivateKey)(e.senderKey),
            o = new p.TransactionSigner(r);
          return (o.signOrigin(i), r);
        }
        {
          const t = (0, T.omit)(e, "signerKeys"),
            n = await I(t),
            i = new p.TransactionSigner(n);
          let o = e.publicKeys;
          for (const s of e.signerKeys) {
            const e = (0, l.pubKeyfromPrivKey)(s);
            ((o = o.filter((t) => t !== (0, r.bytesToHex)(e.data))),
              i.signOrigin((0, l.createStacksPrivateKey)(s)));
          }
          for (const e of o)
            i.appendOrigin((0, l.publicKeyFromBytes)((0, r.hexToBytes)(e)));
          return n;
        }
      }
      function N(e, t, n) {
        return (0, h.createSTXPostCondition)(
          (0, y.createStandardPrincipal)(e),
          t,
          n,
        );
      }
      function U(e, t, n, r) {
        return (0, h.createSTXPostCondition)(
          (0, y.createContractPrincipal)(e, t),
          n,
          r,
        );
      }
      function V(e, t, n, r) {
        return (0, h.createFungiblePostCondition)(
          (0, y.createStandardPrincipal)(e),
          t,
          n,
          r,
        );
      }
      function F(e, t, n, r, i) {
        return (0, h.createFungiblePostCondition)(
          (0, y.createContractPrincipal)(e, t),
          n,
          r,
          i,
        );
      }
      function L(e, t, n, r) {
        return (0, h.createNonFungiblePostCondition)(
          (0, y.createStandardPrincipal)(e),
          t,
          n,
          r,
        );
      }
      function j(e, t, n, r, i) {
        return (0, h.createNonFungiblePostCondition)(
          (0, y.createContractPrincipal)(e, t),
          n,
          r,
          i,
        );
      }
      async function z(e) {
        const t = { network: new i.StacksMainnet() },
          n = Object.assign(t, e),
          {
            contractName: r,
            contractAddress: o,
            functionName: s,
            functionArgs: a,
            senderAddress: c,
          } = n,
          u = i.StacksNetwork.fromNameOrNetwork(n.network),
          d = u.getReadOnlyFunctionCallApiUrl(o, r, s),
          l = a.map((e) => (0, T.cvToHex)(e)),
          f = JSON.stringify({ sender: c, arguments: l }),
          h = await u.fetchFn(d, {
            method: "POST",
            body: f,
            headers: { "Content-Type": "application/json" },
          });
        if (!h.ok) {
          const e = await h.text().catch(() => "");
          throw new Error(
            `Error calling read-only function. Response ${h.status}: ${h.statusText}. Attempted to fetch ${d} and failed with the message: "${e}"`,
          );
        }
        return h.json().then((e) => (0, T.parseReadOnlyResponse)(e));
      }
      async function $(e) {
        const t = { network: new i.StacksMainnet() },
          {
            contractAddress: n,
            contractName: o,
            mapName: s,
            mapKey: c,
            network: u,
          } = Object.assign(t, e),
          d = i.StacksNetwork.fromNameOrNetwork(u),
          l = d.getMapEntryUrl(n, o, s),
          f = (0, a.serializeCV)(c),
          h = "0x" + (0, r.bytesToHex)(f),
          y = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(h),
          },
          p = await d.fetchFn(l, y);
        if (!p.ok) {
          const e = await p.text().catch(() => "");
          throw new Error(
            `Error fetching map entry for map "${s}" in contract "${o}" at address ${n}, using map key "${h}". Response ${p.status}: ${p.statusText}. Attempted to fetch ${l} and failed with the message: "${e}"`,
          );
        }
        const g = await p.text(),
          b = JSON.parse(g);
        if (!b.data)
          throw new Error(
            `Error fetching map entry for map "${s}" in contract "${o}" at address ${n}, using map key "${h}". Response ${p.status}: ${p.statusText}. Attempted to fetch ${l} and failed with the response: "${g}"`,
          );
        let T;
        try {
          T = (0, a.deserializeCV)(b.data);
        } catch (S) {
          throw new Error(
            `Error deserializing Clarity value "${b.data}": ${S}`,
          );
        }
        return T;
      }
      async function K(e) {
        const t = {
            fee: 0,
            sponsorNonce: 0,
            sponsorAddressHashmode: c.AddressHashMode.SerializeP2PKH,
            network:
              e.transaction.version === c.TransactionVersion.Mainnet
                ? new i.StacksMainnet()
                : new i.StacksTestnet(),
          },
          n = Object.assign(t, e),
          r = i.StacksNetwork.fromNameOrNetwork(n.network),
          o = (0, l.pubKeyfromPrivKey)(n.sponsorPrivateKey);
        if (void 0 === e.fee || null === e.fee) {
          let e = 0;
          switch (n.transaction.payload.payloadType) {
            case c.PayloadType.TokenTransfer:
            case c.PayloadType.SmartContract:
            case c.PayloadType.VersionedSmartContract:
            case c.PayloadType.ContractCall:
              const t = R(n.transaction);
              try {
                e = (await m(n.transaction.payload, t, r))[1].fee;
              } catch (f) {
                throw f;
              }
              break;
            default:
              throw new Error(
                "Sponsored transactions not supported for transaction type " +
                  c.PayloadType[n.transaction.payload.payloadType],
              );
          }
          (n.transaction.setFee(e), (n.fee = e));
        }
        if (void 0 === e.sponsorNonce || null === e.sponsorNonce) {
          const e =
              r.version === c.TransactionVersion.Mainnet
                ? c.AddressVersion.MainnetSingleSig
                : c.AddressVersion.TestnetSingleSig,
            t = (0, l.publicKeyToAddress)(e, o),
            i = await S(t, r);
          n.sponsorNonce = i;
        }
        const a = (0, s.createSingleSigSpendingCondition)(
          n.sponsorAddressHashmode,
          (0, l.publicKeyToString)(o),
          n.sponsorNonce,
          n.fee,
        );
        n.transaction.setSponsor(a);
        const u = (0, l.createStacksPrivateKey)(n.sponsorPrivateKey),
          d = p.TransactionSigner.createSponsorSigner(n.transaction, a);
        return (d.signSponsor(u), d.transaction);
      }
      function R(e) {
        const t = e.auth.spendingCondition.hashMode,
          n = [
            c.AddressHashMode.SerializeP2SH,
            c.AddressHashMode.SerializeP2WSH,
          ];
        if (n.includes(t)) {
          const t = e.auth.spendingCondition,
            n = t.fields.filter(
              (e) => e.contents.type === c.StacksMessageType.MessageSignature,
            ).length,
            r =
              (t.signaturesRequired - n) *
              (c.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES + 1);
          return e.serialize().byteLength + r;
        }
        return e.serialize().byteLength;
      }
      async function D(e, t) {
        try {
          const n = R(e);
          return (await m(e.payload, n, t))[1].fee;
        } catch (n) {
          if (n instanceof d.NoEstimateAvailableError) return await C(e, t);
          throw n;
        }
      }
    },
    6961: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createApiKeyMiddleware = c),
        (t.createFetchFn = d),
        (t.fetchWrapper = s),
        (t.getFetchOptions = void 0),
        (t.hostMatches = a),
        (t.setFetchOptions = void 0),
        n(5286));
      const r = {
          referrerPolicy: "origin",
          headers: { "x-hiro-product": "stacksjs" },
        },
        i = () => r;
      t.getFetchOptions = i;
      const o = (e) => Object.assign(r, e);
      async function s(e, t) {
        const n = {};
        Object.assign(n, r, t);
        const i = await fetch(e, n);
        return i;
      }
      function a(e, t) {
        return "string" === typeof t ? t === e : t.exec(e);
      }
      function c(e) {
        let {
          apiKey: t,
          host: n = /(.*)api(.*)(\.stacks\.co|\.hiro\.so)$/i,
          httpHeader: r = "x-api-key",
        } = e;
        return {
          pre: (e) => {
            const i = new URL(e.url);
            if (!a(i.host, n)) return;
            const o =
              e.init.headers instanceof Headers
                ? e.init.headers
                : (e.init.headers = new Headers(e.init.headers));
            o.set(r, t);
          },
        };
      }
      function u(e) {
        let t = s,
          n = [];
        return (
          e.length > 0 && "function" === typeof e[0] && (t = e.shift()),
          e.length > 0 && (n = e),
          { fetchLib: t, middlewares: n }
        );
      }
      function d() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        const { fetchLib: r, middlewares: i } = u(t),
          o = async (e, t) => {
            let n = { url: e, init: null !== t && void 0 !== t ? t : {} };
            for (const c of i)
              if ("function" === typeof c.pre) {
                const e = await Promise.resolve(c.pre({ fetch: r, ...n }));
                n = null !== e && void 0 !== e ? e : n;
              }
            let o = await r(n.url, n.init);
            for (const c of i)
              if ("function" === typeof c.post) {
                var s, a;
                const e = await Promise.resolve(
                  c.post({
                    fetch: r,
                    url: n.url,
                    init: n.init,
                    response:
                      null !==
                        (s =
                          null === (a = o) || void 0 === a
                            ? void 0
                            : a.clone()) && void 0 !== s
                        ? s
                        : o,
                  }),
                );
                o = null !== e && void 0 !== e ? e : o;
              }
            return o;
          };
        return o;
      }
      t.setFetchOptions = o;
    },
    6962: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ClarityAbiTypeId = void 0),
        (t.abiFunctionToString = w),
        (t.encodeClarityValue = T),
        (t.getTypeString = S),
        (t.getTypeUnion = b),
        (t.isClarityAbiTuple =
          t.isClarityAbiStringUtf8 =
          t.isClarityAbiStringAscii =
          t.isClarityAbiResponse =
          t.isClarityAbiPrimitive =
          t.isClarityAbiOptional =
          t.isClarityAbiList =
          t.isClarityAbiBuffer =
            void 0),
        (t.parseToCV = P),
        (t.validateContractCall = m));
      var r,
        i = n(3408),
        o = n(3469),
        s = n(3470),
        a = n(5744),
        c = n(2778);
      (function (e) {
        ((e[(e["ClarityAbiTypeUInt128"] = 1)] = "ClarityAbiTypeUInt128"),
          (e[(e["ClarityAbiTypeInt128"] = 2)] = "ClarityAbiTypeInt128"),
          (e[(e["ClarityAbiTypeBool"] = 3)] = "ClarityAbiTypeBool"),
          (e[(e["ClarityAbiTypePrincipal"] = 4)] = "ClarityAbiTypePrincipal"),
          (e[(e["ClarityAbiTypeNone"] = 5)] = "ClarityAbiTypeNone"),
          (e[(e["ClarityAbiTypeBuffer"] = 6)] = "ClarityAbiTypeBuffer"),
          (e[(e["ClarityAbiTypeResponse"] = 7)] = "ClarityAbiTypeResponse"),
          (e[(e["ClarityAbiTypeOptional"] = 8)] = "ClarityAbiTypeOptional"),
          (e[(e["ClarityAbiTypeTuple"] = 9)] = "ClarityAbiTypeTuple"),
          (e[(e["ClarityAbiTypeList"] = 10)] = "ClarityAbiTypeList"),
          (e[(e["ClarityAbiTypeStringAscii"] = 11)] =
            "ClarityAbiTypeStringAscii"),
          (e[(e["ClarityAbiTypeStringUtf8"] = 12)] =
            "ClarityAbiTypeStringUtf8"),
          (e[(e["ClarityAbiTypeTraitReference"] = 13)] =
            "ClarityAbiTypeTraitReference"));
      })(r || (t.ClarityAbiTypeId = r = {}));
      const u = (e) => "string" === typeof e;
      t.isClarityAbiPrimitive = u;
      const d = (e) => void 0 !== e.buffer;
      t.isClarityAbiBuffer = d;
      const l = (e) => void 0 !== e["string-ascii"];
      t.isClarityAbiStringAscii = l;
      const f = (e) => void 0 !== e["string-utf8"];
      t.isClarityAbiStringUtf8 = f;
      const h = (e) => void 0 !== e.response;
      t.isClarityAbiResponse = h;
      const y = (e) => void 0 !== e.optional;
      t.isClarityAbiOptional = y;
      const p = (e) => void 0 !== e.tuple;
      t.isClarityAbiTuple = p;
      const g = (e) => void 0 !== e.list;
      function b(e) {
        if (u(e)) {
          if ("uint128" === e) return { id: r.ClarityAbiTypeUInt128, type: e };
          if ("int128" === e) return { id: r.ClarityAbiTypeInt128, type: e };
          if ("bool" === e) return { id: r.ClarityAbiTypeBool, type: e };
          if ("principal" === e)
            return { id: r.ClarityAbiTypePrincipal, type: e };
          if ("trait_reference" === e)
            return { id: r.ClarityAbiTypeTraitReference, type: e };
          if ("none" === e) return { id: r.ClarityAbiTypeNone, type: e };
          throw new Error(
            "Unexpected Clarity ABI type primitive: " + JSON.stringify(e),
          );
        }
        if (d(e)) return { id: r.ClarityAbiTypeBuffer, type: e };
        if (h(e)) return { id: r.ClarityAbiTypeResponse, type: e };
        if (y(e)) return { id: r.ClarityAbiTypeOptional, type: e };
        if (p(e)) return { id: r.ClarityAbiTypeTuple, type: e };
        if (g(e)) return { id: r.ClarityAbiTypeList, type: e };
        if (l(e)) return { id: r.ClarityAbiTypeStringAscii, type: e };
        if (f(e)) return { id: r.ClarityAbiTypeStringUtf8, type: e };
        throw new Error("Unexpected Clarity ABI type: " + JSON.stringify(e));
      }
      function T(e, t) {
        let n;
        switch (((n = void 0 !== e.id ? e : b(e)), n.id)) {
          case r.ClarityAbiTypeUInt128:
            return (0, o.uintCV)(t);
          case r.ClarityAbiTypeInt128:
            return (0, o.intCV)(t);
          case r.ClarityAbiTypeBool:
            if ("false" === t || "0" === t) return (0, o.falseCV)();
            if ("true" === t || "1" === t) return (0, o.trueCV)();
            throw new Error(
              "Unexpected Clarity bool value: " + JSON.stringify(t),
            );
          case r.ClarityAbiTypePrincipal:
            if (t.includes(".")) {
              const [e, n] = t.split(".");
              return (0, o.contractPrincipalCV)(e, n);
            }
            return (0, o.standardPrincipalCV)(t);
          case r.ClarityAbiTypeTraitReference:
            const [e, i] = t.split(".");
            return (0, o.contractPrincipalCV)(e, i);
          case r.ClarityAbiTypeNone:
            return (0, o.noneCV)();
          case r.ClarityAbiTypeBuffer:
            return (0, o.bufferCV)((0, c.utf8ToBytes)(t));
          case r.ClarityAbiTypeStringAscii:
            return (0, a.stringAsciiCV)(t);
          case r.ClarityAbiTypeStringUtf8:
            return (0, a.stringUtf8CV)(t);
          case r.ClarityAbiTypeResponse:
            throw new s.NotImplementedError(
              "Unsupported encoding for Clarity type: " + n.id,
            );
          case r.ClarityAbiTypeOptional:
            throw new s.NotImplementedError(
              "Unsupported encoding for Clarity type: " + n.id,
            );
          case r.ClarityAbiTypeTuple:
            throw new s.NotImplementedError(
              "Unsupported encoding for Clarity type: " + n.id,
            );
          case r.ClarityAbiTypeList:
            throw new s.NotImplementedError(
              "Unsupported encoding for Clarity type: " + n.id,
            );
          default:
            throw new Error("Unexpected Clarity type ID: " + JSON.stringify(n));
        }
      }
      function S(e) {
        if (u(e)) return "int128" === e ? "int" : "uint128" === e ? "uint" : e;
        if (d(e)) return `(buff ${e.buffer.length})`;
        if (l(e)) return `(string-ascii ${e["string-ascii"].length})`;
        if (f(e)) return `(string-utf8 ${e["string-utf8"].length})`;
        if (h(e))
          return `(response ${S(e.response.ok)} ${S(e.response.error)})`;
        if (y(e)) return `(optional ${S(e.optional)})`;
        if (p(e))
          return `(tuple ${e.tuple.map((e) => `(${e.name} ${S(e.type)})`).join(" ")})`;
        if (g(e)) return `(list ${e.list.length} ${S(e.list.type)})`;
        throw new Error(
          "Type string unsupported for Clarity type: " + JSON.stringify(e),
        );
      }
      function w(e) {
        const t = "read_only" === e.access ? "read-only" : e.access;
        return `(define-${t} (${e.name} ${e.args.map((e) => `(${e.name} ${S(e.type)})`).join(" ")}))`;
      }
      function C(e, t) {
        const n = b(t);
        switch (e.type) {
          case o.ClarityType.BoolTrue:
          case o.ClarityType.BoolFalse:
            return n.id === r.ClarityAbiTypeBool;
          case o.ClarityType.Int:
            return n.id === r.ClarityAbiTypeInt128;
          case o.ClarityType.UInt:
            return n.id === r.ClarityAbiTypeUInt128;
          case o.ClarityType.Buffer:
            return (
              n.id === r.ClarityAbiTypeBuffer &&
              n.type.buffer.length >= e.buffer.length
            );
          case o.ClarityType.StringASCII:
            return (
              n.id === r.ClarityAbiTypeStringAscii &&
              n.type["string-ascii"].length >= e.data.length
            );
          case o.ClarityType.StringUTF8:
            return (
              n.id === r.ClarityAbiTypeStringUtf8 &&
              n.type["string-utf8"].length >= e.data.length
            );
          case o.ClarityType.OptionalNone:
            return (
              n.id === r.ClarityAbiTypeNone || n.id === r.ClarityAbiTypeOptional
            );
          case o.ClarityType.OptionalSome:
            return (
              n.id === r.ClarityAbiTypeOptional && C(e.value, n.type.optional)
            );
          case o.ClarityType.ResponseErr:
            return (
              n.id === r.ClarityAbiTypeResponse &&
              C(e.value, n.type.response.error)
            );
          case o.ClarityType.ResponseOk:
            return (
              n.id === r.ClarityAbiTypeResponse &&
              C(e.value, n.type.response.ok)
            );
          case o.ClarityType.PrincipalContract:
            return (
              n.id === r.ClarityAbiTypePrincipal ||
              n.id === r.ClarityAbiTypeTraitReference
            );
          case o.ClarityType.PrincipalStandard:
            return n.id === r.ClarityAbiTypePrincipal;
          case o.ClarityType.List:
            return (
              n.id == r.ClarityAbiTypeList &&
              n.type.list.length >= e.list.length &&
              e.list.every((e) => C(e, n.type.list.type))
            );
          case o.ClarityType.Tuple:
            if (n.id == r.ClarityAbiTypeTuple) {
              const t = (0, i.cloneDeep)(e.data);
              for (let e = 0; e < n.type.tuple.length; e++) {
                const r = n.type.tuple[e],
                  i = r.name,
                  o = t[i];
                if (!o) return !1;
                if (!C(o, r.type)) return !1;
                delete t[i];
              }
              return !0;
            }
            return !1;
          default:
            return !1;
        }
      }
      function m(e, t) {
        const n = t.functions.filter((t) => t.name === e.functionName.content);
        if (1 === n.length) {
          const t = n[0],
            r = t.args;
          if (e.functionArgs.length !== r.length)
            throw new Error(
              `Clarity function expects ${r.length} argument(s) but received ${e.functionArgs.length}`,
            );
          for (let n = 0; n < e.functionArgs.length; n++) {
            const t = e.functionArgs[n],
              i = r[n];
            if (!C(t, i.type)) {
              const r = n + 1;
              throw new Error(
                `Clarity function \`${e.functionName.content}\` expects argument ${r} to be of type ${S(i.type)}, not ${(0, o.getCVTypeString)(t)}`,
              );
            }
          }
          return !0;
        }
        throw 0 === n.length
          ? new Error(
              "ABI doesn't contain a function with the name " +
                e.functionName.content,
            )
          : new Error(
              "Malformed ABI. Contains multiple functions with the name " +
                e.functionName.content,
            );
      }
      function P(e, t) {
        const n = S(t);
        if (u(t)) {
          if ("uint128" === t) return (0, o.uintCV)(e);
          if ("int128" === t) return (0, o.intCV)(e);
          if ("bool" === t) {
            if ("true" === e.toLowerCase()) return (0, o.trueCV)();
            if ("false" === e.toLowerCase()) return (0, o.falseCV)();
            throw new Error("Invalid bool value: " + e);
          }
          if ("principal" === t) {
            if (e.includes(".")) {
              const [t, n] = e.split(".");
              return (0, o.contractPrincipalCV)(t, n);
            }
            return (0, o.standardPrincipalCV)(e);
          }
          throw new Error(
            "Contract function contains unsupported Clarity ABI type: " + n,
          );
        }
        if (d(t)) {
          const n = (0, c.utf8ToBytes)(e).byteLength;
          if (n > t.buffer.length)
            throw new Error(
              "Input exceeds specified buffer length limit of " +
                t.buffer.length,
            );
          return (0, o.bufferCVFromString)(e);
        }
        throw (
          h(t) || y(t) || p(t) || g(t),
          new Error(
            "Contract function contains unsupported Clarity ABI type: " + n,
          )
        );
      }
      t.isClarityAbiList = g;
    },
    6963: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createFungiblePostCondition = a),
        (t.createNonFungiblePostCondition = c),
        (t.createSTXPostCondition = s));
      var r = n(2778),
        i = n(3128),
        o = n(3627);
      function s(e, t, n) {
        return (
          "string" === typeof e && (e = (0, o.parsePrincipalString)(e)),
          {
            type: i.StacksMessageType.PostCondition,
            conditionType: i.PostConditionType.STX,
            principal: e,
            conditionCode: t,
            amount: (0, r.intToBigInt)(n, !1),
          }
        );
      }
      function a(e, t, n, s) {
        return (
          "string" === typeof e && (e = (0, o.parsePrincipalString)(e)),
          "string" === typeof s && (s = (0, o.parseAssetInfoString)(s)),
          {
            type: i.StacksMessageType.PostCondition,
            conditionType: i.PostConditionType.Fungible,
            principal: e,
            conditionCode: t,
            amount: (0, r.intToBigInt)(n, !1),
            assetInfo: s,
          }
        );
      }
      function c(e, t, n, r) {
        return (
          "string" === typeof e && (e = (0, o.parsePrincipalString)(e)),
          "string" === typeof n && (n = (0, o.parseAssetInfoString)(n)),
          {
            type: i.StacksMessageType.PostCondition,
            conditionType: i.PostConditionType.NonFungible,
            principal: e,
            conditionCode: t,
            assetInfo: n,
            assetName: r,
          }
        );
      }
    },
    6964: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionSigner = void 0));
      var r = n(4888),
        i = n(3408),
        o = n(3128),
        s = n(3470);
      class TransactionSigner {
        constructor(e) {
          ((this.transaction = e),
            (this.sigHash = e.signBegin()),
            (this.originDone = !1),
            (this.checkOversign = !0),
            (this.checkOverlap = !0));
          const t = e.auth.spendingCondition;
          if (t && !(0, r.isSingleSig)(t)) {
            if (
              t.fields.filter(
                (e) => e.contents.type === o.StacksMessageType.MessageSignature,
              ).length >= t.signaturesRequired
            )
              throw new Error(
                "SpendingCondition has more signatures than are expected",
              );
            t.fields.forEach((n) => {
              if (n.contents.type === o.StacksMessageType.MessageSignature) {
                const i = n.contents,
                  s = (0, r.nextVerification)(
                    this.sigHash,
                    e.auth.authType,
                    t.fee,
                    t.nonce,
                    o.PubKeyEncoding.Compressed,
                    i,
                  );
                this.sigHash = s.nextSigHash;
              }
            });
          }
        }
        static createSponsorSigner(e, t) {
          if (e.auth.authType != o.AuthType.Sponsored)
            throw new s.SigningError(
              "Cannot add sponsor to non-sponsored transaction",
            );
          const n = (0, i.cloneDeep)(e);
          n.setSponsor(t);
          const r = n.verifyOrigin(),
            a = new this(n);
          return (
            (a.originDone = !0),
            (a.sigHash = r),
            (a.checkOversign = !0),
            (a.checkOverlap = !0),
            a
          );
        }
        signOrigin(e) {
          if (this.checkOverlap && this.originDone)
            throw new s.SigningError("Cannot sign origin after sponsor key");
          if (void 0 === this.transaction.auth)
            throw new s.SigningError('"transaction.auth" is undefined');
          if (void 0 === this.transaction.auth.spendingCondition)
            throw new s.SigningError(
              '"transaction.auth.spendingCondition" is undefined',
            );
          if (!(0, r.isSingleSig)(this.transaction.auth.spendingCondition)) {
            const e = this.transaction.auth.spendingCondition;
            if (
              this.checkOversign &&
              e.fields.filter(
                (e) => e.contents.type === o.StacksMessageType.MessageSignature,
              ).length >= e.signaturesRequired
            )
              throw new Error("Origin would have too many signatures");
          }
          const t = this.transaction.signNextOrigin(this.sigHash, e);
          this.sigHash = t;
        }
        appendOrigin(e) {
          if (this.checkOverlap && this.originDone)
            throw Error("Cannot append public key to origin after sponsor key");
          if (void 0 === this.transaction.auth)
            throw new Error('"transaction.auth" is undefined');
          if (void 0 === this.transaction.auth.spendingCondition)
            throw new Error(
              '"transaction.auth.spendingCondition" is undefined',
            );
          this.transaction.appendPubkey(e);
        }
        signSponsor(e) {
          if (void 0 === this.transaction.auth)
            throw new s.SigningError('"transaction.auth" is undefined');
          if (this.transaction.auth.authType !== o.AuthType.Sponsored)
            throw new s.SigningError(
              '"transaction.auth.authType" is not AuthType.Sponsored',
            );
          const t = this.transaction.signNextSponsor(this.sigHash, e);
          ((this.sigHash = t), (this.originDone = !0));
        }
        getTxInComplete() {
          return (0, i.cloneDeep)(this.transaction);
        }
        resume(e) {
          ((this.transaction = (0, i.cloneDeep)(e)),
            (this.sigHash = e.signBegin()));
        }
      }
      t.TransactionSigner = TransactionSigner;
    },
    6965: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StacksTransaction = void 0),
        (t.deserializeTransaction = h));
      var r = n(2778),
        i = n(3128),
        o = n(4888),
        s = n(4890),
        a = n(3408),
        c = n(4889),
        u = n(3855),
        d = n(3856),
        l = n(5745),
        f = n(3470);
      class StacksTransaction {
        constructor(e, t, n, o, s, a, c) {
          if (
            ((this.version = e),
            (this.auth = t),
            (this.payload =
              "amount" in n
                ? { ...n, amount: (0, r.intToBigInt)(n.amount, !1) }
                : n),
            (this.chainId =
              null !== c && void 0 !== c ? c : i.DEFAULT_CHAIN_ID),
            (this.postConditionMode =
              null !== s && void 0 !== s ? s : i.PostConditionMode.Deny),
            (this.postConditions =
              null !== o && void 0 !== o ? o : (0, u.createLPList)([])),
            a)
          )
            this.anchorMode = (0, i.anchorModeFromNameOrValue)(a);
          else
            switch (n.payloadType) {
              case i.PayloadType.Coinbase:
              case i.PayloadType.CoinbaseToAltRecipient:
              case i.PayloadType.PoisonMicroblock:
                this.anchorMode = i.AnchorMode.OnChainOnly;
                break;
              case i.PayloadType.ContractCall:
              case i.PayloadType.SmartContract:
              case i.PayloadType.VersionedSmartContract:
              case i.PayloadType.TokenTransfer:
                this.anchorMode = i.AnchorMode.Any;
                break;
            }
        }
        signBegin() {
          const e = (0, a.cloneDeep)(this);
          return ((e.auth = (0, o.intoInitialSighashAuth)(e.auth)), e.txid());
        }
        verifyBegin() {
          const e = (0, a.cloneDeep)(this);
          return ((e.auth = (0, o.intoInitialSighashAuth)(e.auth)), e.txid());
        }
        verifyOrigin() {
          return (0, o.verifyOrigin)(this.auth, this.verifyBegin());
        }
        signNextOrigin(e, t) {
          if (void 0 === this.auth.spendingCondition)
            throw new Error('"auth.spendingCondition" is undefined');
          if (void 0 === this.auth.authType)
            throw new Error('"auth.authType" is undefined');
          return this.signAndAppend(
            this.auth.spendingCondition,
            e,
            i.AuthType.Standard,
            t,
          );
        }
        signNextSponsor(e, t) {
          if (this.auth.authType === i.AuthType.Sponsored)
            return this.signAndAppend(
              this.auth.sponsorSpendingCondition,
              e,
              i.AuthType.Sponsored,
              t,
            );
          throw new Error('"auth.sponsorSpendingCondition" is undefined');
        }
        appendPubkey(e) {
          const t = this.auth.spendingCondition;
          if (!t || (0, o.isSingleSig)(t))
            throw new Error("Can't append public key to a singlesig condition");
          {
            const n = (0, d.isCompressed)(e);
            t.fields.push(
              (0, s.createTransactionAuthField)(
                n ? i.PubKeyEncoding.Compressed : i.PubKeyEncoding.Uncompressed,
                e,
              ),
            );
          }
        }
        signAndAppend(e, t, n, a) {
          const { nextSig: c, nextSigHash: u } = (0, o.nextSignature)(
            t,
            n,
            e.fee,
            e.nonce,
            a,
          );
          if ((0, o.isSingleSig)(e)) e.signature = c;
          else {
            const t = (0, r.bytesToHex)(a.data).endsWith("01");
            e.fields.push(
              (0, s.createTransactionAuthField)(
                t ? i.PubKeyEncoding.Compressed : i.PubKeyEncoding.Uncompressed,
                c,
              ),
            );
          }
          return u;
        }
        txid() {
          const e = this.serialize();
          return (0, a.txidFromData)(e);
        }
        setSponsor(e) {
          if (this.auth.authType != i.AuthType.Sponsored)
            throw new f.SigningError(
              "Cannot sponsor sign a non-sponsored transaction",
            );
          this.auth = (0, o.setSponsor)(this.auth, e);
        }
        setFee(e) {
          this.auth = (0, o.setFee)(this.auth, e);
        }
        setNonce(e) {
          this.auth = (0, o.setNonce)(this.auth, e);
        }
        setSponsorNonce(e) {
          if (this.auth.authType != i.AuthType.Sponsored)
            throw new f.SigningError(
              "Cannot sponsor sign a non-sponsored transaction",
            );
          this.auth = (0, o.setSponsorNonce)(this.auth, e);
        }
        serialize() {
          if (void 0 === this.version)
            throw new f.SerializationError('"version" is undefined');
          if (void 0 === this.chainId)
            throw new f.SerializationError('"chainId" is undefined');
          if (void 0 === this.auth)
            throw new f.SerializationError('"auth" is undefined');
          if (void 0 === this.anchorMode)
            throw new f.SerializationError('"anchorMode" is undefined');
          if (void 0 === this.payload)
            throw new f.SerializationError('"payload" is undefined');
          const e = [];
          e.push(this.version);
          const t = new Uint8Array(4);
          return (
            (0, r.writeUInt32BE)(t, this.chainId, 0),
            e.push(t),
            e.push((0, o.serializeAuthorization)(this.auth)),
            e.push(this.anchorMode),
            e.push(this.postConditionMode),
            e.push((0, u.serializeLPList)(this.postConditions)),
            e.push((0, c.serializePayload)(this.payload)),
            (0, r.concatArray)(e)
          );
        }
      }
      function h(e) {
        let t;
        t =
          "string" === typeof e
            ? "0x" === e.slice(0, 2).toLowerCase()
              ? new l.BytesReader((0, r.hexToBytes)(e.slice(2)))
              : new l.BytesReader((0, r.hexToBytes)(e))
            : e instanceof Uint8Array
              ? new l.BytesReader(e)
              : e;
        const n = t.readUInt8Enum(i.TransactionVersion, (e) => {
            throw new Error(`Could not parse ${e} as TransactionVersion`);
          }),
          s = t.readUInt32BE(),
          a = (0, o.deserializeAuthorization)(t),
          d = t.readUInt8Enum(i.AnchorMode, (e) => {
            throw new Error(`Could not parse ${e} as AnchorMode`);
          }),
          f = t.readUInt8Enum(i.PostConditionMode, (e) => {
            throw new Error(`Could not parse ${e} as PostConditionMode`);
          }),
          h = (0, u.deserializeLPList)(t, i.StacksMessageType.PostCondition),
          y = (0, c.deserializePayload)(t);
        return new StacksTransaction(n, a, y, h, f, d, s);
      }
      t.StacksTransaction = StacksTransaction;
    },
  },
]);
