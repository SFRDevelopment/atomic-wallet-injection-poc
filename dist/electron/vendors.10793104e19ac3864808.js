(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [237],
  {
    11447: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.hmac = void 0));
      const r = t(5718),
        i = t(3972);
      class HMAC extends i.Hash {
        constructor(n, e) {
          (super(),
            (this.finished = !1),
            (this.destroyed = !1),
            r.default.hash(n));
          const t = (0, i.toBytes)(e);
          if (
            ((this.iHash = n.create()), "function" !== typeof this.iHash.update)
          )
            throw new TypeError(
              "Expected instance of class which extends utils.Hash",
            );
          ((this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen));
          const o = this.blockLen,
            s = new Uint8Array(o);
          s.set(t.length > o ? n.create().update(t).digest() : t);
          for (let r = 0; r < s.length; r++) s[r] ^= 54;
          (this.iHash.update(s), (this.oHash = n.create()));
          for (let r = 0; r < s.length; r++) s[r] ^= 106;
          (this.oHash.update(s), s.fill(0));
        }
        update(n) {
          return (r.default.exists(this), this.iHash.update(n), this);
        }
        digestInto(n) {
          (r.default.exists(this),
            r.default.bytes(n, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(n),
            this.oHash.update(n),
            this.oHash.digestInto(n),
            this.destroy());
        }
        digest() {
          const n = new Uint8Array(this.oHash.outputLen);
          return (this.digestInto(n), n);
        }
        _cloneInto(n) {
          n || (n = Object.create(Object.getPrototypeOf(this), {}));
          const {
            oHash: e,
            iHash: t,
            finished: r,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (n = n),
            (n.finished = r),
            (n.destroyed = i),
            (n.blockLen = o),
            (n.outputLen = s),
            (n.oHash = e._cloneInto(n.oHash)),
            (n.iHash = t._cloneInto(n.iHash)),
            n
          );
        }
        destroy() {
          ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
        }
      }
      const o = (n, e, t) => new HMAC(n, e).update(t).digest();
      ((e.hmac = o), (e.hmac.create = (n, e) => new HMAC(n, e)));
    },
    11448: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.crypto = void 0),
        (e.crypto = {
          node: void 0,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        }));
    },
    11449: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ripemd160 = e.RIPEMD160 = void 0));
      const r = t(5719),
        i = t(3972),
        o = new Uint8Array([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        s = Uint8Array.from({ length: 16 }, (n, e) => e),
        a = s.map((n) => (9 * n + 5) % 16);
      let c = [s],
        h = [a];
      for (let b = 0; b < 4; b++)
        for (let n of [c, h]) n.push(n[b].map((n) => o[n]));
      const u = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((n) => new Uint8Array(n)),
        l = c.map((n, e) => n.map((n) => u[e][n])),
        f = h.map((n, e) => n.map((n) => u[e][n])),
        d = new Uint32Array([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        y = new Uint32Array([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]),
        p = (n, e) => (n << e) | (n >>> (32 - e));
      function g(n, e, t, r) {
        return 0 === n
          ? e ^ t ^ r
          : 1 === n
            ? (e & t) | (~e & r)
            : 2 === n
              ? (e | ~t) ^ r
              : 3 === n
                ? (e & r) | (t & ~r)
                : e ^ (t | ~r);
      }
      const w = new Uint32Array(16);
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
          const { h0: n, h1: e, h2: t, h3: r, h4: i } = this;
          return [n, e, t, r, i];
        }
        set(n, e, t, r, i) {
          ((this.h0 = 0 | n),
            (this.h1 = 0 | e),
            (this.h2 = 0 | t),
            (this.h3 = 0 | r),
            (this.h4 = 0 | i));
        }
        process(n, e) {
          for (let c = 0; c < 16; c++, e += 4) w[c] = n.getUint32(e, !0);
          let t = 0 | this.h0,
            r = t,
            i = 0 | this.h1,
            o = i,
            s = 0 | this.h2,
            a = s,
            u = 0 | this.h3,
            b = u,
            m = 0 | this.h4,
            v = m;
          for (let x = 0; x < 5; x++) {
            const n = 4 - x,
              e = d[x],
              E = y[x],
              A = c[x],
              S = h[x],
              H = l[x],
              B = f[x];
            for (let r = 0; r < 16; r++) {
              const n = (p(t + g(x, i, s, u) + w[A[r]] + e, H[r]) + m) | 0;
              ((t = m), (m = u), (u = 0 | p(s, 10)), (s = i), (i = n));
            }
            for (let t = 0; t < 16; t++) {
              const e = (p(r + g(n, o, a, b) + w[S[t]] + E, B[t]) + v) | 0;
              ((r = v), (v = b), (b = 0 | p(a, 10)), (a = o), (o = e));
            }
          }
          this.set(
            (this.h1 + s + b) | 0,
            (this.h2 + u + v) | 0,
            (this.h3 + m + r) | 0,
            (this.h4 + t + o) | 0,
            (this.h0 + i + a) | 0,
          );
        }
        roundClean() {
          w.fill(0);
        }
        destroy() {
          ((this.destroyed = !0), this.buffer.fill(0), this.set(0, 0, 0, 0, 0));
        }
      }
      ((e.RIPEMD160 = RIPEMD160),
        (e.ripemd160 = (0, i.wrapConstructor)(() => new RIPEMD160())));
    },
    11450: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.sha224 = e.sha256 = void 0));
      const r = t(5719),
        i = t(3972),
        o = (n, e, t) => (n & e) ^ (~n & t),
        s = (n, e, t) => (n & e) ^ (n & t) ^ (e & t),
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
        h = new Uint32Array(64);
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
          const { A: n, B: e, C: t, D: r, E: i, F: o, G: s, H: a } = this;
          return [n, e, t, r, i, o, s, a];
        }
        set(n, e, t, r, i, o, s, a) {
          ((this.A = 0 | n),
            (this.B = 0 | e),
            (this.C = 0 | t),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a));
        }
        process(n, e) {
          for (let i = 0; i < 16; i++, e += 4) h[i] = n.getUint32(e, !1);
          for (let o = 16; o < 64; o++) {
            const n = h[o - 15],
              e = h[o - 2],
              t = (0, i.rotr)(n, 7) ^ (0, i.rotr)(n, 18) ^ (n >>> 3),
              r = (0, i.rotr)(e, 17) ^ (0, i.rotr)(e, 19) ^ (e >>> 10);
            h[o] = (r + h[o - 7] + t + h[o - 16]) | 0;
          }
          let { A: t, B: r, C: c, D: u, E: l, F: f, G: d, H: y } = this;
          for (let p = 0; p < 64; p++) {
            const n =
                (0, i.rotr)(l, 6) ^ (0, i.rotr)(l, 11) ^ (0, i.rotr)(l, 25),
              e = (y + n + o(l, f, d) + a[p] + h[p]) | 0,
              g = (0, i.rotr)(t, 2) ^ (0, i.rotr)(t, 13) ^ (0, i.rotr)(t, 22),
              w = (g + s(t, r, c)) | 0;
            ((y = d),
              (d = f),
              (f = l),
              (l = (u + e) | 0),
              (u = c),
              (c = r),
              (r = t),
              (t = (e + w) | 0));
          }
          ((t = (t + this.A) | 0),
            (r = (r + this.B) | 0),
            (c = (c + this.C) | 0),
            (u = (u + this.D) | 0),
            (l = (l + this.E) | 0),
            (f = (f + this.F) | 0),
            (d = (d + this.G) | 0),
            (y = (y + this.H) | 0),
            this.set(t, r, c, u, l, f, d, y));
        }
        roundClean() {
          h.fill(0);
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
      ((e.sha256 = (0, i.wrapConstructor)(() => new SHA256())),
        (e.sha224 = (0, i.wrapConstructor)(() => new SHA224())));
    },
    11451: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.sha384 =
          e.sha512_256 =
          e.sha512_224 =
          e.sha512 =
          e.SHA512 =
            void 0));
      const r = t(5719),
        i = t(11452),
        o = t(3972),
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
          ].map((n) => BigInt(n)),
        ),
        c = new Uint32Array(80),
        h = new Uint32Array(80);
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
            Ah: n,
            Al: e,
            Bh: t,
            Bl: r,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: c,
            El: h,
            Fh: u,
            Fl: l,
            Gh: f,
            Gl: d,
            Hh: y,
            Hl: p,
          } = this;
          return [n, e, t, r, i, o, s, a, c, h, u, l, f, d, y, p];
        }
        set(n, e, t, r, i, o, s, a, c, h, u, l, f, d, y, p) {
          ((this.Ah = 0 | n),
            (this.Al = 0 | e),
            (this.Bh = 0 | t),
            (this.Bl = 0 | r),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | h),
            (this.Fh = 0 | u),
            (this.Fl = 0 | l),
            (this.Gh = 0 | f),
            (this.Gl = 0 | d),
            (this.Hh = 0 | y),
            (this.Hl = 0 | p));
        }
        process(n, e) {
          for (let i = 0; i < 16; i++, e += 4)
            ((c[i] = n.getUint32(e)), (h[i] = n.getUint32((e += 4))));
          for (let s = 16; s < 80; s++) {
            const n = 0 | c[s - 15],
              e = 0 | h[s - 15],
              t =
                i.default.rotrSH(n, e, 1) ^
                i.default.rotrSH(n, e, 8) ^
                i.default.shrSH(n, e, 7),
              r =
                i.default.rotrSL(n, e, 1) ^
                i.default.rotrSL(n, e, 8) ^
                i.default.shrSL(n, e, 7),
              o = 0 | c[s - 2],
              a = 0 | h[s - 2],
              u =
                i.default.rotrSH(o, a, 19) ^
                i.default.rotrBH(o, a, 61) ^
                i.default.shrSH(o, a, 6),
              l =
                i.default.rotrSL(o, a, 19) ^
                i.default.rotrBL(o, a, 61) ^
                i.default.shrSL(o, a, 6),
              f = i.default.add4L(r, l, h[s - 7], h[s - 16]),
              d = i.default.add4H(f, t, u, c[s - 7], c[s - 16]);
            ((c[s] = 0 | d), (h[s] = 0 | f));
          }
          let {
            Ah: t,
            Al: r,
            Bh: o,
            Bl: u,
            Ch: l,
            Cl: f,
            Dh: d,
            Dl: y,
            Eh: p,
            El: g,
            Fh: w,
            Fl: b,
            Gh: m,
            Gl: v,
            Hh: x,
            Hl: E,
          } = this;
          for (let A = 0; A < 80; A++) {
            const n =
                i.default.rotrSH(p, g, 14) ^
                i.default.rotrSH(p, g, 18) ^
                i.default.rotrBH(p, g, 41),
              e =
                i.default.rotrSL(p, g, 14) ^
                i.default.rotrSL(p, g, 18) ^
                i.default.rotrBL(p, g, 41),
              S = (p & w) ^ (~p & m),
              H = (g & b) ^ (~g & v),
              B = i.default.add5L(E, e, H, a[A], h[A]),
              k = i.default.add5H(B, x, n, S, s[A], c[A]),
              P = 0 | B,
              I =
                i.default.rotrSH(t, r, 28) ^
                i.default.rotrBH(t, r, 34) ^
                i.default.rotrBH(t, r, 39),
              U =
                i.default.rotrSL(t, r, 28) ^
                i.default.rotrBL(t, r, 34) ^
                i.default.rotrBL(t, r, 39),
              L = (t & o) ^ (t & l) ^ (o & l),
              C = (r & u) ^ (r & f) ^ (u & f);
            ((x = 0 | m),
              (E = 0 | v),
              (m = 0 | w),
              (v = 0 | b),
              (w = 0 | p),
              (b = 0 | g),
              ({ h: p, l: g } = i.default.add(0 | d, 0 | y, 0 | k, 0 | P)),
              (d = 0 | l),
              (y = 0 | f),
              (l = 0 | o),
              (f = 0 | u),
              (o = 0 | t),
              (u = 0 | r));
            const T = i.default.add3L(P, U, C);
            ((t = i.default.add3H(T, k, I, L)), (r = 0 | T));
          }
          (({ h: t, l: r } = i.default.add(
            0 | this.Ah,
            0 | this.Al,
            0 | t,
            0 | r,
          )),
            ({ h: o, l: u } = i.default.add(
              0 | this.Bh,
              0 | this.Bl,
              0 | o,
              0 | u,
            )),
            ({ h: l, l: f } = i.default.add(
              0 | this.Ch,
              0 | this.Cl,
              0 | l,
              0 | f,
            )),
            ({ h: d, l: y } = i.default.add(
              0 | this.Dh,
              0 | this.Dl,
              0 | d,
              0 | y,
            )),
            ({ h: p, l: g } = i.default.add(
              0 | this.Eh,
              0 | this.El,
              0 | p,
              0 | g,
            )),
            ({ h: w, l: b } = i.default.add(
              0 | this.Fh,
              0 | this.Fl,
              0 | w,
              0 | b,
            )),
            ({ h: m, l: v } = i.default.add(
              0 | this.Gh,
              0 | this.Gl,
              0 | m,
              0 | v,
            )),
            ({ h: x, l: E } = i.default.add(
              0 | this.Hh,
              0 | this.Hl,
              0 | x,
              0 | E,
            )),
            this.set(t, r, o, u, l, f, d, y, p, g, w, b, m, v, x, E));
        }
        roundClean() {
          (c.fill(0), h.fill(0));
        }
        destroy() {
          (this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      e.SHA512 = SHA512;
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
      ((e.sha512 = (0, o.wrapConstructor)(() => new SHA512())),
        (e.sha512_224 = (0, o.wrapConstructor)(() => new SHA512_224())),
        (e.sha512_256 = (0, o.wrapConstructor)(() => new SHA512_256())),
        (e.sha384 = (0, o.wrapConstructor)(() => new SHA384())));
    },
    11452: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.add = e.toBig = e.split = e.fromBig = void 0));
      const r = BigInt(2 ** 32 - 1),
        i = BigInt(32);
      function o(n, e) {
        return (
          void 0 === e && (e = !1),
          e
            ? { h: Number(n & r), l: Number((n >> i) & r) }
            : { h: 0 | Number((n >> i) & r), l: 0 | Number(n & r) }
        );
      }
      function s(n, e) {
        void 0 === e && (e = !1);
        let t = new Uint32Array(n.length),
          r = new Uint32Array(n.length);
        for (let i = 0; i < n.length; i++) {
          const { h: s, l: a } = o(n[i], e);
          [t[i], r[i]] = [s, a];
        }
        return [t, r];
      }
      ((e.fromBig = o), (e.split = s));
      const a = (n, e) => (BigInt(n >>> 0) << i) | BigInt(e >>> 0);
      e.toBig = a;
      const c = (n, e, t) => n >>> t,
        h = (n, e, t) => (n << (32 - t)) | (e >>> t),
        u = (n, e, t) => (n >>> t) | (e << (32 - t)),
        l = (n, e, t) => (n << (32 - t)) | (e >>> t),
        f = (n, e, t) => (n << (64 - t)) | (e >>> (t - 32)),
        d = (n, e, t) => (n >>> (t - 32)) | (e << (64 - t)),
        y = (n, e) => e,
        p = (n, e) => n,
        g = (n, e, t) => (n << t) | (e >>> (32 - t)),
        w = (n, e, t) => (e << t) | (n >>> (32 - t)),
        b = (n, e, t) => (e << (t - 32)) | (n >>> (64 - t)),
        m = (n, e, t) => (n << (t - 32)) | (e >>> (64 - t));
      function v(n, e, t, r) {
        const i = (e >>> 0) + (r >>> 0);
        return { h: (n + t + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
      }
      e.add = v;
      const x = (n, e, t) => (n >>> 0) + (e >>> 0) + (t >>> 0),
        E = (n, e, t, r) => (e + t + r + ((n / 2 ** 32) | 0)) | 0,
        A = (n, e, t, r) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0),
        S = (n, e, t, r, i) => (e + t + r + i + ((n / 2 ** 32) | 0)) | 0,
        H = (n, e, t, r, i) =>
          (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0),
        B = (n, e, t, r, i, o) => (e + t + r + i + o + ((n / 2 ** 32) | 0)) | 0,
        k = {
          fromBig: o,
          split: s,
          toBig: e.toBig,
          shrSH: c,
          shrSL: h,
          rotrSH: u,
          rotrSL: l,
          rotrBH: f,
          rotrBL: d,
          rotr32H: y,
          rotr32L: p,
          rotlSH: g,
          rotlSL: w,
          rotlBH: b,
          rotlBL: m,
          add: v,
          add3L: x,
          add3H: E,
          add4L: A,
          add4H: S,
          add5H: B,
          add5L: H,
        };
      e.default = k;
    },
    11453: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Signature = e.Point = e.CURVE = void 0),
        (e.bytesToHex = U),
        (e.getPublicKey = rn),
        (e.getSharedSecret = an),
        (e.hexToBytes = T),
        (e.recoverPublicKey = on),
        (e.schnorr = void 0),
        (e.sign = dn),
        (e.signSync = yn),
        (e.utils = void 0),
        (e.verify = gn));
      var r = i(t(11454));
      function i(n, e) {
        if ("function" == typeof WeakMap)
          var t = new WeakMap(),
            r = new WeakMap();
        return (i = function (n, e) {
          if (!e && n && n.__esModule) return n;
          var i,
            o,
            s = { __proto__: null, default: n };
          if (null === n || ("object" != typeof n && "function" != typeof n))
            return s;
          if ((i = e ? r : t)) {
            if (i.has(n)) return i.get(n);
            i.set(n, s);
          }
          for (const t in n)
            "default" !== t &&
              {}.hasOwnProperty.call(n, t) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(n, t)) &&
              (o.get || o.set)
                ? i(s, t, o)
                : (s[t] = n[t]));
          return s;
        })(n, e);
      }
      const o = BigInt(0),
        s = BigInt(1),
        a = BigInt(2),
        c = BigInt(3),
        h = BigInt(8),
        u = (e.CURVE = Object.freeze({
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
        l = (n, e) => (n + e / a) / e,
        f = {
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
          ),
          splitScalar(n) {
            const { n: e } = u,
              t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
              r = -s * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
              i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
              o = t,
              a = BigInt("0x100000000000000000000000000000000"),
              c = l(o * n, e),
              h = l(-r * n, e);
            let f = F(n - c * t - h * i, e),
              d = F(-c * r - h * o, e);
            const y = f > a,
              p = d > a;
            if ((y && (f = e - f), p && (d = e - d), f > a || d > a))
              throw new Error("splitScalarEndo: Endomorphism failed, k=" + n);
            return { k1neg: y, k1: f, k2neg: p, k2: d };
          },
        },
        d = 32,
        y = 32,
        p = 32,
        g = d + 1,
        w = 2 * d + 1;
      function b(n) {
        const { a: e, b: t } = u,
          r = F(n * n),
          i = F(r * n);
        return F(i + e * n + t);
      }
      const m = u.a === o;
      class ShaError extends Error {
        constructor(n) {
          super(n);
        }
      }
      function v(n) {
        if (!(n instanceof JacobianPoint))
          throw new TypeError("JacobianPoint expected");
      }
      class JacobianPoint {
        constructor(n, e, t) {
          ((this.x = n), (this.y = e), (this.z = t));
        }
        static fromAffine(n) {
          if (!(n instanceof Point))
            throw new TypeError("JacobianPoint#fromAffine: expected Point");
          return n.equals(Point.ZERO)
            ? JacobianPoint.ZERO
            : new JacobianPoint(n.x, n.y, s);
        }
        static toAffineBatch(n) {
          const e = V(n.map((n) => n.z));
          return n.map((n, t) => n.toAffine(e[t]));
        }
        static normalizeZ(n) {
          return JacobianPoint.toAffineBatch(n).map(JacobianPoint.fromAffine);
        }
        equals(n) {
          v(n);
          const { x: e, y: t, z: r } = this,
            { x: i, y: o, z: s } = n,
            a = F(r * r),
            c = F(s * s),
            h = F(e * c),
            u = F(i * a),
            l = F(F(t * s) * c),
            f = F(F(o * r) * a);
          return h === u && l === f;
        }
        negate() {
          return new JacobianPoint(this.x, F(-this.y), this.z);
        }
        double() {
          const { x: n, y: e, z: t } = this,
            r = F(n * n),
            i = F(e * e),
            o = F(i * i),
            s = n + i,
            u = F(a * (F(s * s) - r - o)),
            l = F(c * r),
            f = F(l * l),
            d = F(f - a * u),
            y = F(l * (u - d) - h * o),
            p = F(a * e * t);
          return new JacobianPoint(d, y, p);
        }
        add(n) {
          v(n);
          const { x: e, y: t, z: r } = this,
            { x: i, y: s, z: c } = n;
          if (i === o || s === o) return this;
          if (e === o || t === o) return n;
          const h = F(r * r),
            u = F(c * c),
            l = F(e * u),
            f = F(i * h),
            d = F(F(t * c) * u),
            y = F(F(s * r) * h),
            p = F(f - l),
            g = F(y - d);
          if (p === o) return g === o ? this.double() : JacobianPoint.ZERO;
          const w = F(p * p),
            b = F(p * w),
            m = F(l * w),
            x = F(g * g - b - a * m),
            E = F(g * (m - x) - d * b),
            A = F(r * c * p);
          return new JacobianPoint(x, E, A);
        }
        subtract(n) {
          return this.add(n.negate());
        }
        multiplyUnsafe(n) {
          const e = JacobianPoint.ZERO;
          if ("bigint" === typeof n && n === o) return e;
          let t = N(n);
          if (t === s) return this;
          if (!m) {
            let n = e,
              r = this;
            while (t > o)
              (t & s && (n = n.add(r)), (r = r.double()), (t >>= s));
            return n;
          }
          let { k1neg: r, k1: i, k2neg: a, k2: c } = f.splitScalar(t),
            h = e,
            u = e,
            l = this;
          while (i > o || c > o)
            (i & s && (h = h.add(l)),
              c & s && (u = u.add(l)),
              (l = l.double()),
              (i >>= s),
              (c >>= s));
          return (
            r && (h = h.negate()),
            a && (u = u.negate()),
            (u = new JacobianPoint(F(u.x * f.beta), u.y, u.z)),
            h.add(u)
          );
        }
        precomputeWindow(n) {
          const e = m ? 128 / n + 1 : 256 / n + 1,
            t = [];
          let r = this,
            i = r;
          for (let o = 0; o < e; o++) {
            ((i = r), t.push(i));
            for (let e = 1; e < 2 ** (n - 1); e++) ((i = i.add(r)), t.push(i));
            r = i.double();
          }
          return t;
        }
        wNAF(n, e) {
          !e && this.equals(JacobianPoint.BASE) && (e = Point.BASE);
          const t = (e && e._WINDOW_SIZE) || 1;
          if (256 % t)
            throw new Error(
              "Point#wNAF: Invalid precomputation window, must be power of 2",
            );
          let r = e && E.get(e);
          r ||
            ((r = this.precomputeWindow(t)),
            e && 1 !== t && ((r = JacobianPoint.normalizeZ(r)), E.set(e, r)));
          let i = JacobianPoint.ZERO,
            o = JacobianPoint.BASE;
          const a = 1 + (m ? 128 / t : 256 / t),
            c = 2 ** (t - 1),
            h = BigInt(2 ** t - 1),
            u = 2 ** t,
            l = BigInt(t);
          for (let f = 0; f < a; f++) {
            const e = f * c;
            let t = Number(n & h);
            ((n >>= l), t > c && ((t -= u), (n += s)));
            const a = e,
              d = e + Math.abs(t) - 1,
              y = f % 2 !== 0,
              p = t < 0;
            0 === t ? (o = o.add(x(y, r[a]))) : (i = i.add(x(p, r[d])));
          }
          return { p: i, f: o };
        }
        multiply(n, e) {
          let t,
            r,
            i = N(n);
          if (m) {
            const { k1neg: n, k1: o, k2neg: s, k2: a } = f.splitScalar(i);
            let { p: c, f: h } = this.wNAF(o, e),
              { p: u, f: l } = this.wNAF(a, e);
            ((c = x(n, c)),
              (u = x(s, u)),
              (u = new JacobianPoint(F(u.x * f.beta), u.y, u.z)),
              (t = c.add(u)),
              (r = h.add(l)));
          } else {
            const { p: n, f: o } = this.wNAF(i, e);
            ((t = n), (r = o));
          }
          return JacobianPoint.normalizeZ([t, r])[0];
        }
        toAffine(n) {
          const { x: e, y: t, z: r } = this,
            i = this.equals(JacobianPoint.ZERO);
          null == n && (n = i ? h : $(r));
          const o = n,
            a = F(o * o),
            c = F(a * o),
            u = F(e * a),
            l = F(t * c),
            f = F(r * o);
          if (i) return Point.ZERO;
          if (f !== s) throw new Error("invZ was invalid");
          return new Point(u, l);
        }
      }
      function x(n, e) {
        const t = e.negate();
        return n ? t : e;
      }
      ((JacobianPoint.BASE = new JacobianPoint(u.Gx, u.Gy, s)),
        (JacobianPoint.ZERO = new JacobianPoint(o, s, o)));
      const E = new WeakMap();
      class Point {
        constructor(n, e) {
          ((this.x = n), (this.y = e));
        }
        _setWindowSize(n) {
          ((this._WINDOW_SIZE = n), E.delete(this));
        }
        hasEvenY() {
          return this.y % a === o;
        }
        static fromCompressedHex(n) {
          const e = 32 === n.length,
            t = j(e ? n : n.subarray(1));
          if (!Y(t)) throw new Error("Point is not on curve");
          const r = b(t);
          let i = M(r);
          const o = (i & s) === s;
          if (e) o && (i = F(-i));
          else {
            const e = 1 === (1 & n[0]);
            e !== o && (i = F(-i));
          }
          const a = new Point(t, i);
          return (a.assertValidity(), a);
        }
        static fromUncompressedHex(n) {
          const e = j(n.subarray(1, d + 1)),
            t = j(n.subarray(d + 1, 2 * d + 1)),
            r = new Point(e, t);
          return (r.assertValidity(), r);
        }
        static fromHex(n) {
          const e = z(n),
            t = e.length,
            r = e[0];
          if (t === d) return this.fromCompressedHex(e);
          if (t === g && (2 === r || 3 === r)) return this.fromCompressedHex(e);
          if (t === w && 4 === r) return this.fromUncompressedHex(e);
          throw new Error(
            `Point.fromHex: received invalid point. Expected 32-${g} compressed bytes or ${w} uncompressed bytes, not ${t}`,
          );
        }
        static fromPrivateKey(n) {
          return Point.BASE.multiply(nn(n));
        }
        static fromSignature(n, e, t) {
          const { r: r, s: i } = tn(e);
          if (![0, 1, 2, 3].includes(t))
            throw new Error("Cannot recover: invalid recovery bit");
          const o = q(z(n)),
            { n: s } = u,
            a = 2 === t || 3 === t ? r + s : r,
            c = $(a, s),
            h = F(-o * c, s),
            l = F(i * c, s),
            f = 1 & t ? "03" : "02",
            d = Point.fromHex(f + _(a)),
            y = Point.BASE.multiplyAndAddUnsafe(d, h, l);
          if (!y)
            throw new Error("Cannot recover signature: point at infinify");
          return (y.assertValidity(), y);
        }
        toRawBytes(n) {
          return (void 0 === n && (n = !1), T(this.toHex(n)));
        }
        toHex(n) {
          void 0 === n && (n = !1);
          const e = _(this.x);
          if (n) {
            const n = this.hasEvenY() ? "02" : "03";
            return `${n}${e}`;
          }
          return `04${e}${_(this.y)}`;
        }
        toHexX() {
          return this.toHex(!0).slice(2);
        }
        toRawX() {
          return this.toRawBytes(!0).slice(1);
        }
        assertValidity() {
          const n = "Point is not on elliptic curve",
            { x: e, y: t } = this;
          if (!Y(e) || !Y(t)) throw new Error(n);
          const r = F(t * t),
            i = b(e);
          if (F(r - i) !== o) throw new Error(n);
        }
        equals(n) {
          return this.x === n.x && this.y === n.y;
        }
        negate() {
          return new Point(this.x, F(-this.y));
        }
        double() {
          return JacobianPoint.fromAffine(this).double().toAffine();
        }
        add(n) {
          return JacobianPoint.fromAffine(this)
            .add(JacobianPoint.fromAffine(n))
            .toAffine();
        }
        subtract(n) {
          return this.add(n.negate());
        }
        multiply(n) {
          return JacobianPoint.fromAffine(this).multiply(n, this).toAffine();
        }
        multiplyAndAddUnsafe(n, e, t) {
          const r = JacobianPoint.fromAffine(this),
            i =
              e === o || e === s || this !== Point.BASE
                ? r.multiplyUnsafe(e)
                : r.multiply(e),
            a = JacobianPoint.fromAffine(n).multiplyUnsafe(t),
            c = i.add(a);
          return c.equals(JacobianPoint.ZERO) ? void 0 : c.toAffine();
        }
      }
      function A(n) {
        return Number.parseInt(n[0], 16) >= 8 ? "00" + n : n;
      }
      function S(n) {
        if (n.length < 2 || 2 !== n[0])
          throw new Error("Invalid signature integer tag: " + U(n));
        const e = n[1],
          t = n.subarray(2, e + 2);
        if (!e || t.length !== e)
          throw new Error("Invalid signature integer: wrong length");
        if (0 === t[0] && t[1] <= 127)
          throw new Error("Invalid signature integer: trailing length");
        return { data: j(t), left: n.subarray(e + 2) };
      }
      function H(n) {
        if (n.length < 2 || 48 != n[0])
          throw new Error("Invalid signature tag: " + U(n));
        if (n[1] !== n.length - 2)
          throw new Error("Invalid signature: incorrect length");
        const { data: e, left: t } = S(n.subarray(2)),
          { data: r, left: i } = S(t);
        if (i.length)
          throw new Error(
            "Invalid signature: left bytes after parsing: " + U(i),
          );
        return { r: e, s: r };
      }
      ((e.Point = Point),
        (Point.BASE = new Point(u.Gx, u.Gy)),
        (Point.ZERO = new Point(o, o)));
      class Signature {
        constructor(n, e) {
          ((this.r = n), (this.s = e), this.assertValidity());
        }
        static fromCompact(n) {
          const e = B(n),
            t = "Signature.fromCompact";
          if ("string" !== typeof n && !e)
            throw new TypeError(t + ": Expected string or Uint8Array");
          const r = e ? U(n) : n;
          if (128 !== r.length) throw new Error(t + ": Expected 64-byte hex");
          return new Signature(K(r.slice(0, 64)), K(r.slice(64, 128)));
        }
        static fromDER(n) {
          const e = B(n);
          if ("string" !== typeof n && !e)
            throw new TypeError(
              "Signature.fromDER: Expected string or Uint8Array",
            );
          const { r: t, s: r } = H(e ? n : T(n));
          return new Signature(t, r);
        }
        static fromHex(n) {
          return this.fromDER(n);
        }
        assertValidity() {
          const { r: n, s: e } = this;
          if (!X(n)) throw new Error("Invalid Signature: r must be 0 < r < n");
          if (!X(e)) throw new Error("Invalid Signature: s must be 0 < s < n");
        }
        hasHighS() {
          const n = u.n >> s;
          return this.s > n;
        }
        normalizeS() {
          return this.hasHighS()
            ? new Signature(this.r, F(-this.s, u.n))
            : this;
        }
        toDERRawBytes() {
          return T(this.toDERHex());
        }
        toDERHex() {
          const n = A(O(this.s)),
            e = A(O(this.r)),
            t = n.length / 2,
            r = e.length / 2,
            i = O(t),
            o = O(r),
            s = O(r + t + 4);
          return `30${s}02${o}${e}02${i}${n}`;
        }
        toRawBytes() {
          return this.toDERRawBytes();
        }
        toHex() {
          return this.toDERHex();
        }
        toCompactRawBytes() {
          return T(this.toCompactHex());
        }
        toCompactHex() {
          return _(this.r) + _(this.s);
        }
      }
      function B(n) {
        return (
          n instanceof Uint8Array ||
          (ArrayBuffer.isView(n) && "Uint8Array" === n.constructor.name)
        );
      }
      function k(n) {
        if (!B(n)) throw new Error("Uint8Array expected");
      }
      function P() {
        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
          e[t] = arguments[t];
        if ((e.every(k), 1 === e.length)) return e[0];
        const r = e.reduce((n, e) => n + e.length, 0),
          i = new Uint8Array(r);
        for (let o = 0, s = 0; o < e.length; o++) {
          const n = e[o];
          (i.set(n, s), (s += n.length));
        }
        return i;
      }
      e.Signature = Signature;
      const I = Array.from({ length: 256 }, (n, e) =>
        e.toString(16).padStart(2, "0"),
      );
      function U(n) {
        k(n);
        let e = "";
        for (let t = 0; t < n.length; t++) e += I[n[t]];
        return e;
      }
      const L = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function C(n) {
        return n >= L._0 && n <= L._9
          ? n - L._0
          : n >= L.A && n <= L.F
            ? n - (L.A - 10)
            : n >= L.a && n <= L.f
              ? n - (L.a - 10)
              : void 0;
      }
      function T(n) {
        if ("string" !== typeof n)
          throw new Error("hex string expected, got " + typeof n);
        const e = n.length,
          t = e / 2;
        if (e % 2)
          throw new Error(
            "hex string expected, got unpadded hex of length " + e,
          );
        const r = new Uint8Array(t);
        for (let i = 0, o = 0; i < t; i++, o += 2) {
          const e = C(n.charCodeAt(o)),
            t = C(n.charCodeAt(o + 1));
          if (void 0 === e || void 0 === t) {
            const e = n[o] + n[o + 1];
            throw new Error(
              'hex string expected, got non-hex character "' +
                e +
                '" at index ' +
                o,
            );
          }
          r[i] = 16 * e + t;
        }
        return r;
      }
      const R = BigInt(
        "0x10000000000000000000000000000000000000000000000000000000000000000",
      );
      function _(n) {
        if ("bigint" !== typeof n) throw new Error("Expected bigint");
        if (!(o <= n && n < R))
          throw new Error("Expected number 0 <= n < 2^256");
        return n.toString(16).padStart(64, "0");
      }
      function D(n) {
        const e = T(_(n));
        if (32 !== e.length) throw new Error("Error: expected 32 bytes");
        return e;
      }
      function O(n) {
        const e = n.toString(16);
        return 1 & e.length ? "0" + e : e;
      }
      function K(n) {
        if ("string" !== typeof n)
          throw new TypeError("hexToNumber: expected string, got " + typeof n);
        return BigInt("0x" + n);
      }
      function j(n) {
        return K(U(n));
      }
      function z(n) {
        return B(n) ? Uint8Array.from(n) : T(n);
      }
      function N(n) {
        if ("number" === typeof n && Number.isSafeInteger(n) && n > 0)
          return BigInt(n);
        if ("bigint" === typeof n && X(n)) return n;
        throw new TypeError(
          "Expected valid private scalar: 0 < scalar < curve.n",
        );
      }
      function F(n, e) {
        void 0 === e && (e = u.P);
        const t = n % e;
        return t >= o ? t : e + t;
      }
      function J(n, e) {
        const { P: t } = u;
        let r = n;
        while (e-- > o) ((r *= r), (r %= t));
        return r;
      }
      function M(n) {
        const { P: e } = u,
          t = BigInt(6),
          r = BigInt(11),
          i = BigInt(22),
          o = BigInt(23),
          s = BigInt(44),
          h = BigInt(88),
          l = (n * n * n) % e,
          f = (l * l * n) % e,
          d = (J(f, c) * f) % e,
          y = (J(d, c) * f) % e,
          p = (J(y, a) * l) % e,
          g = (J(p, r) * p) % e,
          w = (J(g, i) * g) % e,
          b = (J(w, s) * w) % e,
          m = (J(b, h) * b) % e,
          v = (J(m, s) * w) % e,
          x = (J(v, c) * f) % e,
          E = (J(x, o) * g) % e,
          A = (J(E, t) * l) % e,
          S = J(A, a),
          H = (S * S) % e;
        if (H !== n) throw new Error("Cannot find square root");
        return S;
      }
      function $(n, e) {
        if ((void 0 === e && (e = u.P), n === o || e <= o))
          throw new Error(
            `invert: expected positive integers, got n=${n} mod=${e}`,
          );
        let t = F(n, e),
          r = e,
          i = o,
          a = s,
          c = s,
          h = o;
        while (t !== o) {
          const n = r / t,
            e = r % t,
            o = i - c * n,
            s = a - h * n;
          ((r = t), (t = e), (i = c), (a = h), (c = o), (h = s));
        }
        const l = r;
        if (l !== s) throw new Error("invert: does not exist");
        return F(i, e);
      }
      function V(n, e) {
        void 0 === e && (e = u.P);
        const t = new Array(n.length),
          r = n.reduce(
            (n, r, i) => (r === o ? n : ((t[i] = n), F(n * r, e))),
            s,
          ),
          i = $(r, e);
        return (
          n.reduceRight(
            (n, r, i) => (r === o ? n : ((t[i] = F(n * t[i], e)), F(n * r, e))),
            i,
          ),
          t
        );
      }
      function G(n) {
        const e = 8 * n.length - 8 * y,
          t = j(n);
        return e > 0 ? t >> BigInt(e) : t;
      }
      function q(n, e) {
        void 0 === e && (e = !1);
        const t = G(n);
        if (e) return t;
        const { n: r } = u;
        return t >= r ? t - r : t;
      }
      let W, Z;
      class HmacDrbg {
        constructor(n, e) {
          if (
            ((this.hashLen = n),
            (this.qByteLen = e),
            "number" !== typeof n || n < 2)
          )
            throw new Error("hashLen must be a number");
          if ("number" !== typeof e || e < 2)
            throw new Error("qByteLen must be a number");
          ((this.v = new Uint8Array(n).fill(1)),
            (this.k = new Uint8Array(n).fill(0)),
            (this.counter = 0));
        }
        hmac() {
          for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
            e[t] = arguments[t];
          return Pn.hmacSha256(this.k, ...e);
        }
        hmacSync() {
          for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
            e[t] = arguments[t];
          return Z(this.k, ...e);
        }
        checkSync() {
          if ("function" !== typeof Z)
            throw new ShaError("hmacSha256Sync needs to be set");
        }
        incr() {
          if (this.counter >= 1e3)
            throw new Error(
              "Tried 1,000 k values for sign(), all were invalid",
            );
          this.counter += 1;
        }
        async reseed(n) {
          (void 0 === n && (n = new Uint8Array()),
            (this.k = await this.hmac(this.v, Uint8Array.from([0]), n)),
            (this.v = await this.hmac(this.v)),
            0 !== n.length &&
              ((this.k = await this.hmac(this.v, Uint8Array.from([1]), n)),
              (this.v = await this.hmac(this.v))));
        }
        reseedSync(n) {
          (void 0 === n && (n = new Uint8Array()),
            this.checkSync(),
            (this.k = this.hmacSync(this.v, Uint8Array.from([0]), n)),
            (this.v = this.hmacSync(this.v)),
            0 !== n.length &&
              ((this.k = this.hmacSync(this.v, Uint8Array.from([1]), n)),
              (this.v = this.hmacSync(this.v))));
        }
        async generate() {
          this.incr();
          let n = 0;
          const e = [];
          while (n < this.qByteLen) {
            this.v = await this.hmac(this.v);
            const t = this.v.slice();
            (e.push(t), (n += this.v.length));
          }
          return P(...e);
        }
        generateSync() {
          (this.checkSync(), this.incr());
          let n = 0;
          const e = [];
          while (n < this.qByteLen) {
            this.v = this.hmacSync(this.v);
            const t = this.v.slice();
            (e.push(t), (n += this.v.length));
          }
          return P(...e);
        }
      }
      function X(n) {
        return o < n && n < u.n;
      }
      function Y(n) {
        return o < n && n < u.P;
      }
      function Q(n, e, t, r) {
        void 0 === r && (r = !0);
        const { n: i } = u,
          a = q(n, !0);
        if (!X(a)) return;
        const c = $(a, i),
          h = Point.BASE.multiply(a),
          l = F(h.x, i);
        if (l === o) return;
        const f = F(c * F(e + t * l, i), i);
        if (f === o) return;
        let d = new Signature(l, f),
          y = (h.x === d.r ? 0 : 2) | Number(h.y & s);
        return (
          r && d.hasHighS() && ((d = d.normalizeS()), (y ^= 1)),
          { sig: d, recovery: y }
        );
      }
      function nn(n) {
        let e;
        if ("bigint" === typeof n) e = n;
        else if ("number" === typeof n && Number.isSafeInteger(n) && n > 0)
          e = BigInt(n);
        else if ("string" === typeof n) {
          if (n.length !== 2 * y)
            throw new Error("Expected 32 bytes of private key");
          e = K(n);
        } else {
          if (!B(n)) throw new TypeError("Expected valid private key");
          if (n.length !== y)
            throw new Error("Expected 32 bytes of private key");
          e = j(n);
        }
        if (!X(e)) throw new Error("Expected private key: 0 < key < n");
        return e;
      }
      function en(n) {
        return n instanceof Point ? (n.assertValidity(), n) : Point.fromHex(n);
      }
      function tn(n) {
        if (n instanceof Signature) return (n.assertValidity(), n);
        try {
          return Signature.fromDER(n);
        } catch (e) {
          return Signature.fromCompact(n);
        }
      }
      function rn(n, e) {
        return (
          void 0 === e && (e = !1),
          Point.fromPrivateKey(n).toRawBytes(e)
        );
      }
      function on(n, e, t, r) {
        return (
          void 0 === r && (r = !1),
          Point.fromSignature(n, e, t).toRawBytes(r)
        );
      }
      function sn(n) {
        const e = B(n),
          t = "string" === typeof n,
          r = (e || t) && n.length;
        return e
          ? r === g || r === w
          : t
            ? r === 2 * g || r === 2 * w
            : n instanceof Point;
      }
      function an(n, e, t) {
        if ((void 0 === t && (t = !1), sn(n)))
          throw new TypeError("getSharedSecret: first arg must be private key");
        if (!sn(e))
          throw new TypeError("getSharedSecret: second arg must be public key");
        const r = en(e);
        return (r.assertValidity(), r.multiply(nn(n)).toRawBytes(t));
      }
      function cn(n) {
        const e = n.length > d ? n.slice(0, d) : n;
        return j(e);
      }
      function hn(n) {
        const e = cn(n),
          t = F(e, u.n);
        return un(t < o ? e : t);
      }
      function un(n) {
        return D(n);
      }
      function ln(n, e, t) {
        if (null == n)
          throw new Error(`sign: expected valid message hash, not "${n}"`);
        const r = z(n),
          i = nn(e),
          o = [un(i), hn(r)];
        if (null != t) {
          !0 === t && (t = Pn.randomBytes(d));
          const n = z(t);
          if (n.length !== d)
            throw new Error(`sign: Expected ${d} bytes of extra data`);
          o.push(n);
        }
        const s = P(...o),
          a = cn(r);
        return { seed: s, m: a, d: i };
      }
      function fn(n, e) {
        const { sig: t, recovery: r } = n,
          { der: i, recovered: o } = Object.assign(
            { canonical: !0, der: !0 },
            e,
          ),
          s = i ? t.toDERRawBytes() : t.toCompactRawBytes();
        return o ? [s, r] : s;
      }
      async function dn(n, e, t) {
        void 0 === t && (t = {});
        const { seed: r, m: i, d: o } = ln(n, e, t.extraEntropy),
          s = new HmacDrbg(p, y);
        let a;
        await s.reseed(r);
        while (!(a = Q(await s.generate(), i, o, t.canonical)))
          await s.reseed();
        return fn(a, t);
      }
      function yn(n, e, t) {
        void 0 === t && (t = {});
        const { seed: r, m: i, d: o } = ln(n, e, t.extraEntropy),
          s = new HmacDrbg(p, y);
        let a;
        s.reseedSync(r);
        while (!(a = Q(s.generateSync(), i, o, t.canonical))) s.reseedSync();
        return fn(a, t);
      }
      const pn = { strict: !0 };
      function gn(n, e, t, r) {
        let i;
        void 0 === r && (r = pn);
        try {
          ((i = tn(n)), (e = z(e)));
        } catch (g) {
          return !1;
        }
        const { r: o, s: s } = i;
        if (r.strict && i.hasHighS()) return !1;
        const a = q(e);
        let c;
        try {
          c = en(t);
        } catch (g) {
          return !1;
        }
        const { n: h } = u,
          l = $(s, h),
          f = F(a * l, h),
          d = F(o * l, h),
          y = Point.BASE.multiplyAndAddUnsafe(c, f, d);
        if (!y) return !1;
        const p = F(y.x, h);
        return p === o;
      }
      function wn(n) {
        return F(j(n), u.n);
      }
      class SchnorrSignature {
        constructor(n, e) {
          ((this.r = n), (this.s = e), this.assertValidity());
        }
        static fromHex(n) {
          const e = z(n);
          if (64 !== e.length)
            throw new TypeError(
              "SchnorrSignature.fromHex: expected 64 bytes, not " + e.length,
            );
          const t = j(e.subarray(0, 32)),
            r = j(e.subarray(32, 64));
          return new SchnorrSignature(t, r);
        }
        assertValidity() {
          const { r: n, s: e } = this;
          if (!Y(n) || !X(e)) throw new Error("Invalid signature");
        }
        toHex() {
          return _(this.r) + _(this.s);
        }
        toRawBytes() {
          return T(this.toHex());
        }
      }
      function bn(n) {
        return Point.fromPrivateKey(n).toRawX();
      }
      class InternalSchnorrSignature {
        constructor(n, e, t) {
          if ((void 0 === t && (t = Pn.randomBytes()), null == n))
            throw new TypeError(`sign: Expected valid message, not "${n}"`);
          this.m = z(n);
          const { x: r, scalar: i } = this.getScalar(nn(e));
          if (
            ((this.px = r),
            (this.d = i),
            (this.rand = z(t)),
            32 !== this.rand.length)
          )
            throw new TypeError("sign: Expected 32 bytes of aux randomness");
        }
        getScalar(n) {
          const e = Point.fromPrivateKey(n),
            t = e.hasEvenY() ? n : u.n - n;
          return { point: e, scalar: t, x: e.toRawX() };
        }
        initNonce(n, e) {
          return D(n ^ j(e));
        }
        finalizeNonce(n) {
          const e = F(j(n), u.n);
          if (e === o)
            throw new Error("sign: Creation of signature failed. k is zero");
          const { point: t, x: r, scalar: i } = this.getScalar(e);
          return { R: t, rx: r, k: i };
        }
        finalizeSig(n, e, t, r) {
          return new SchnorrSignature(n.x, F(e + t * r, u.n)).toRawBytes();
        }
        error() {
          throw new Error("sign: Invalid signature produced");
        }
        async calc() {
          const { m: n, d: e, px: t, rand: r } = this,
            i = Pn.taggedHash,
            o = this.initNonce(e, await i(Bn.aux, r)),
            {
              R: s,
              rx: a,
              k: c,
            } = this.finalizeNonce(await i(Bn.nonce, o, t, n)),
            h = wn(await i(Bn.challenge, a, t, n)),
            u = this.finalizeSig(s, c, h, e);
          return ((await An(u, n, t)) || this.error(), u);
        }
        calcSync() {
          const { m: n, d: e, px: t, rand: r } = this,
            i = Pn.taggedHashSync,
            o = this.initNonce(e, i(Bn.aux, r)),
            { R: s, rx: a, k: c } = this.finalizeNonce(i(Bn.nonce, o, t, n)),
            h = wn(i(Bn.challenge, a, t, n)),
            u = this.finalizeSig(s, c, h, e);
          return (Sn(u, n, t) || this.error(), u);
        }
      }
      async function mn(n, e, t) {
        return new InternalSchnorrSignature(n, e, t).calc();
      }
      function vn(n, e, t) {
        return new InternalSchnorrSignature(n, e, t).calcSync();
      }
      function xn(n, e, t) {
        const r = n instanceof SchnorrSignature,
          i = r ? n : SchnorrSignature.fromHex(n);
        return (r && i.assertValidity(), { ...i, m: z(e), P: en(t) });
      }
      function En(n, e, t, r) {
        const i = Point.BASE.multiplyAndAddUnsafe(e, nn(t), F(-r, u.n));
        return !(!i || !i.hasEvenY() || i.x !== n);
      }
      async function An(n, e, t) {
        try {
          const { r: r, s: i, m: o, P: s } = xn(n, e, t),
            a = wn(await Pn.taggedHash(Bn.challenge, D(r), s.toRawX(), o));
          return En(r, s, i, a);
        } catch (r) {
          return !1;
        }
      }
      function Sn(n, e, t) {
        try {
          const { r: r, s: i, m: o, P: s } = xn(n, e, t),
            a = wn(Pn.taggedHashSync(Bn.challenge, D(r), s.toRawX(), o));
          return En(r, s, i, a);
        } catch (r) {
          if (r instanceof ShaError) throw r;
          return !1;
        }
      }
      e.schnorr = {
        Signature: SchnorrSignature,
        getPublicKey: bn,
        sign: mn,
        verify: An,
        signSync: vn,
        verifySync: Sn,
      };
      Point.BASE._setWindowSize(8);
      const Hn = {
          node: r,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        },
        Bn = {
          challenge: "BIP0340/challenge",
          aux: "BIP0340/aux",
          nonce: "BIP0340/nonce",
        },
        kn = {},
        Pn = (e.utils = {
          bytesToHex: U,
          hexToBytes: T,
          concatBytes: P,
          mod: F,
          invert: $,
          isValidPrivateKey(n) {
            try {
              return (nn(n), !0);
            } catch (e) {
              return !1;
            }
          },
          _bigintTo32Bytes: D,
          _normalizePrivateKey: nn,
          hashToPrivateKey: (n) => {
            n = z(n);
            const e = y + 8;
            if (n.length < e || n.length > 1024)
              throw new Error(
                "Expected valid bytes of private key as per FIPS 186",
              );
            const t = F(j(n), u.n - s) + s;
            return D(t);
          },
          randomBytes: function (n) {
            if ((void 0 === n && (n = 32), Hn.web))
              return Hn.web.getRandomValues(new Uint8Array(n));
            if (Hn.node) {
              const { randomBytes: e } = Hn.node;
              return Uint8Array.from(e(n));
            }
            throw new Error(
              "The environment doesn't have randomBytes function",
            );
          },
          randomPrivateKey: () => Pn.hashToPrivateKey(Pn.randomBytes(y + 8)),
          precompute(n, e) {
            (void 0 === n && (n = 8), void 0 === e && (e = Point.BASE));
            const t = e === Point.BASE ? e : new Point(e.x, e.y);
            return (t._setWindowSize(n), t.multiply(c), t);
          },
          sha256: async function () {
            for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
              e[t] = arguments[t];
            if (Hn.web) {
              const n = await Hn.web.subtle.digest("SHA-256", P(...e));
              return new Uint8Array(n);
            }
            if (Hn.node) {
              const { createHash: n } = Hn.node,
                t = n("sha256");
              return (
                e.forEach((n) => t.update(n)),
                Uint8Array.from(t.digest())
              );
            }
            throw new Error("The environment doesn't have sha256 function");
          },
          hmacSha256: async function (n) {
            for (
              var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              t[r - 1] = arguments[r];
            if (Hn.web) {
              const e = await Hn.web.subtle.importKey(
                  "raw",
                  n,
                  { name: "HMAC", hash: { name: "SHA-256" } },
                  !1,
                  ["sign"],
                ),
                r = P(...t),
                i = await Hn.web.subtle.sign("HMAC", e, r);
              return new Uint8Array(i);
            }
            if (Hn.node) {
              const { createHmac: e } = Hn.node,
                r = e("sha256", n);
              return (
                t.forEach((n) => r.update(n)),
                Uint8Array.from(r.digest())
              );
            }
            throw new Error(
              "The environment doesn't have hmac-sha256 function",
            );
          },
          sha256Sync: void 0,
          hmacSha256Sync: void 0,
          taggedHash: async function (n) {
            let e = kn[n];
            if (void 0 === e) {
              const t = await Pn.sha256(
                Uint8Array.from(n, (n) => n.charCodeAt(0)),
              );
              ((e = P(t, t)), (kn[n] = e));
            }
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            return Pn.sha256(e, ...r);
          },
          taggedHashSync: function (n) {
            if ("function" !== typeof W)
              throw new ShaError("sha256Sync is undefined, you need to set it");
            let e = kn[n];
            if (void 0 === e) {
              const t = W(Uint8Array.from(n, (n) => n.charCodeAt(0)));
              ((e = P(t, t)), (kn[n] = e));
            }
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            return W(e, ...r);
          },
          _JacobianPoint: JacobianPoint,
        });
      Object.defineProperties(Pn, {
        sha256Sync: {
          configurable: !1,
          get() {
            return W;
          },
          set(n) {
            W || (W = n);
          },
        },
        hmacSha256Sync: {
          configurable: !1,
          get() {
            return Z;
          },
          set(n) {
            Z || (Z = n);
          },
        },
      });
    },
    11454: function (n, e) {},
    11505: function (n, e) {},
    11507: function (n, e) {},
    3183: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.randomBytes =
          e.wrapConstructorWithOpts =
          e.wrapConstructor =
          e.checkOpts =
          e.Hash =
          e.concatBytes =
          e.toBytes =
          e.utf8ToBytes =
          e.asyncLoop =
          e.nextTick =
          e.hexToBytes =
          e.bytesToHex =
          e.isLE =
          e.rotr =
          e.createView =
          e.u32 =
          e.u8 =
            void 0));
      const r = t(5245),
        i = (n) => new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
      e.u8 = i;
      const o = (n) =>
        new Uint32Array(n.buffer, n.byteOffset, Math.floor(n.byteLength / 4));
      e.u32 = o;
      const s = (n) => new DataView(n.buffer, n.byteOffset, n.byteLength);
      e.createView = s;
      const a = (n, e) => (n << (32 - e)) | (n >>> e);
      if (
        ((e.rotr = a),
        (e.isLE =
          68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]),
        !e.isLE)
      )
        throw new Error("Non little-endian hardware is not supported");
      const c = Array.from({ length: 256 }, (n, e) =>
        e.toString(16).padStart(2, "0"),
      );
      function h(n) {
        if (!(n instanceof Uint8Array)) throw new Error("Uint8Array expected");
        let e = "";
        for (let t = 0; t < n.length; t++) e += c[n[t]];
        return e;
      }
      function u(n) {
        if ("string" !== typeof n)
          throw new TypeError("hexToBytes: expected string, got " + typeof n);
        if (n.length % 2)
          throw new Error("hexToBytes: received invalid unpadded hex");
        const e = new Uint8Array(n.length / 2);
        for (let t = 0; t < e.length; t++) {
          const r = 2 * t,
            i = n.slice(r, r + 2),
            o = Number.parseInt(i, 16);
          if (Number.isNaN(o) || o < 0)
            throw new Error("Invalid byte sequence");
          e[t] = o;
        }
        return e;
      }
      ((e.bytesToHex = h), (e.hexToBytes = u));
      const l = async () => {};
      async function f(n, t, r) {
        let i = Date.now();
        for (let o = 0; o < n; o++) {
          r(o);
          const n = Date.now() - i;
          (n >= 0 && n < t) || (await (0, e.nextTick)(), (i += n));
        }
      }
      function d(n) {
        if ("string" !== typeof n)
          throw new TypeError("utf8ToBytes expected string, got " + typeof n);
        return new TextEncoder().encode(n);
      }
      function y(n) {
        if (("string" === typeof n && (n = d(n)), !(n instanceof Uint8Array)))
          throw new TypeError(
            `Expected input type is Uint8Array (got ${typeof n})`,
          );
        return n;
      }
      function p() {
        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
          e[t] = arguments[t];
        if (!e.every((n) => n instanceof Uint8Array))
          throw new Error("Uint8Array list expected");
        if (1 === e.length) return e[0];
        const r = e.reduce((n, e) => n + e.length, 0),
          i = new Uint8Array(r);
        for (let o = 0, s = 0; o < e.length; o++) {
          const n = e[o];
          (i.set(n, s), (s += n.length));
        }
        return i;
      }
      ((e.nextTick = l),
        (e.asyncLoop = f),
        (e.utf8ToBytes = d),
        (e.toBytes = y),
        (e.concatBytes = p));
      class Hash {
        clone() {
          return this._cloneInto();
        }
      }
      e.Hash = Hash;
      const g = (n) =>
        "[object Object]" === Object.prototype.toString.call(n) &&
        n.constructor === Object;
      function w(n, e) {
        if (void 0 !== e && ("object" !== typeof e || !g(e)))
          throw new TypeError("Options should be object or undefined");
        const t = Object.assign(n, e);
        return t;
      }
      function b(n) {
        const e = (e) => n().update(y(e)).digest(),
          t = n();
        return (
          (e.outputLen = t.outputLen),
          (e.blockLen = t.blockLen),
          (e.create = () => n()),
          e
        );
      }
      function m(n) {
        const e = (e, t) => n(t).update(y(e)).digest(),
          t = n({});
        return (
          (e.outputLen = t.outputLen),
          (e.blockLen = t.blockLen),
          (e.create = (e) => n(e)),
          e
        );
      }
      function v(n) {
        if ((void 0 === n && (n = 32), r.crypto.web))
          return r.crypto.web.getRandomValues(new Uint8Array(n));
        if (r.crypto.node)
          return new Uint8Array(r.crypto.node.randomBytes(n).buffer);
        throw new Error("The environment doesn't have randomBytes function");
      }
      ((e.checkOpts = w),
        (e.wrapConstructor = b),
        (e.wrapConstructorWithOpts = m),
        (e.randomBytes = v));
    },
    3282: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Signature = e.Point = e.CURVE = void 0),
        (e.getPublicKey = Q),
        (e.getSharedSecret = tn),
        (e.recoverPublicKey = nn),
        (e.schnorr = void 0),
        (e.sign = hn),
        (e.signSync = un),
        (e.utils = void 0),
        (e.verify = fn));
      var r = i(t(4262));
      function i(n, e) {
        if ("function" == typeof WeakMap)
          var t = new WeakMap(),
            r = new WeakMap();
        return (i = function (n, e) {
          if (!e && n && n.__esModule) return n;
          var i,
            o,
            s = { __proto__: null, default: n };
          if (null === n || ("object" != typeof n && "function" != typeof n))
            return s;
          if ((i = e ? r : t)) {
            if (i.has(n)) return i.get(n);
            i.set(n, s);
          }
          for (const t in n)
            "default" !== t &&
              {}.hasOwnProperty.call(n, t) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(n, t)) &&
              (o.get || o.set)
                ? i(s, t, o)
                : (s[t] = n[t]));
          return s;
        })(n, e);
      }
      const o = BigInt(0),
        s = BigInt(1),
        a = BigInt(2),
        c = BigInt(3),
        h = BigInt(8),
        u = (e.CURVE = Object.freeze({
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
        l = (n, e) => (n + e / a) / e,
        f = {
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
          ),
          splitScalar(n) {
            const { n: e } = u,
              t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
              r = -s * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
              i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
              o = t,
              a = BigInt("0x100000000000000000000000000000000"),
              c = l(o * n, e),
              h = l(-r * n, e);
            let f = K(n - c * t - h * i, e),
              d = K(-c * r - h * o, e);
            const y = f > a,
              p = d > a;
            if ((y && (f = e - f), p && (d = e - d), f > a || d > a))
              throw new Error("splitScalarEndo: Endomorphism failed, k=" + n);
            return { k1neg: y, k1: f, k2neg: p, k2: d };
          },
        },
        d = 32,
        y = 32,
        p = 32,
        g = d + 1,
        w = 2 * d + 1;
      function b(n) {
        const { a: e, b: t } = u,
          r = K(n * n),
          i = K(r * n);
        return K(i + e * n + t);
      }
      const m = u.a === o;
      class ShaError extends Error {
        constructor(n) {
          super(n);
        }
      }
      function v(n) {
        if (!(n instanceof JacobianPoint))
          throw new TypeError("JacobianPoint expected");
      }
      class JacobianPoint {
        constructor(n, e, t) {
          ((this.x = n), (this.y = e), (this.z = t));
        }
        static fromAffine(n) {
          if (!(n instanceof Point))
            throw new TypeError("JacobianPoint#fromAffine: expected Point");
          return n.equals(Point.ZERO)
            ? JacobianPoint.ZERO
            : new JacobianPoint(n.x, n.y, s);
        }
        static toAffineBatch(n) {
          const e = F(n.map((n) => n.z));
          return n.map((n, t) => n.toAffine(e[t]));
        }
        static normalizeZ(n) {
          return JacobianPoint.toAffineBatch(n).map(JacobianPoint.fromAffine);
        }
        equals(n) {
          v(n);
          const { x: e, y: t, z: r } = this,
            { x: i, y: o, z: s } = n,
            a = K(r * r),
            c = K(s * s),
            h = K(e * c),
            u = K(i * a),
            l = K(K(t * s) * c),
            f = K(K(o * r) * a);
          return h === u && l === f;
        }
        negate() {
          return new JacobianPoint(this.x, K(-this.y), this.z);
        }
        double() {
          const { x: n, y: e, z: t } = this,
            r = K(n * n),
            i = K(e * e),
            o = K(i * i),
            s = n + i,
            u = K(a * (K(s * s) - r - o)),
            l = K(c * r),
            f = K(l * l),
            d = K(f - a * u),
            y = K(l * (u - d) - h * o),
            p = K(a * e * t);
          return new JacobianPoint(d, y, p);
        }
        add(n) {
          v(n);
          const { x: e, y: t, z: r } = this,
            { x: i, y: s, z: c } = n;
          if (i === o || s === o) return this;
          if (e === o || t === o) return n;
          const h = K(r * r),
            u = K(c * c),
            l = K(e * u),
            f = K(i * h),
            d = K(K(t * c) * u),
            y = K(K(s * r) * h),
            p = K(f - l),
            g = K(y - d);
          if (p === o) return g === o ? this.double() : JacobianPoint.ZERO;
          const w = K(p * p),
            b = K(p * w),
            m = K(l * w),
            x = K(g * g - b - a * m),
            E = K(g * (m - x) - d * b),
            A = K(r * c * p);
          return new JacobianPoint(x, E, A);
        }
        subtract(n) {
          return this.add(n.negate());
        }
        multiplyUnsafe(n) {
          const e = JacobianPoint.ZERO;
          if ("bigint" === typeof n && n === o) return e;
          let t = O(n);
          if (t === s) return this;
          if (!m) {
            let n = e,
              r = this;
            while (t > o)
              (t & s && (n = n.add(r)), (r = r.double()), (t >>= s));
            return n;
          }
          let { k1neg: r, k1: i, k2neg: a, k2: c } = f.splitScalar(t),
            h = e,
            u = e,
            l = this;
          while (i > o || c > o)
            (i & s && (h = h.add(l)),
              c & s && (u = u.add(l)),
              (l = l.double()),
              (i >>= s),
              (c >>= s));
          return (
            r && (h = h.negate()),
            a && (u = u.negate()),
            (u = new JacobianPoint(K(u.x * f.beta), u.y, u.z)),
            h.add(u)
          );
        }
        precomputeWindow(n) {
          const e = m ? 128 / n + 1 : 256 / n + 1,
            t = [];
          let r = this,
            i = r;
          for (let o = 0; o < e; o++) {
            ((i = r), t.push(i));
            for (let e = 1; e < 2 ** (n - 1); e++) ((i = i.add(r)), t.push(i));
            r = i.double();
          }
          return t;
        }
        wNAF(n, e) {
          !e && this.equals(JacobianPoint.BASE) && (e = Point.BASE);
          const t = (e && e._WINDOW_SIZE) || 1;
          if (256 % t)
            throw new Error(
              "Point#wNAF: Invalid precomputation window, must be power of 2",
            );
          let r = e && E.get(e);
          r ||
            ((r = this.precomputeWindow(t)),
            e && 1 !== t && ((r = JacobianPoint.normalizeZ(r)), E.set(e, r)));
          let i = JacobianPoint.ZERO,
            o = JacobianPoint.BASE;
          const a = 1 + (m ? 128 / t : 256 / t),
            c = 2 ** (t - 1),
            h = BigInt(2 ** t - 1),
            u = 2 ** t,
            l = BigInt(t);
          for (let f = 0; f < a; f++) {
            const e = f * c;
            let t = Number(n & h);
            ((n >>= l), t > c && ((t -= u), (n += s)));
            const a = e,
              d = e + Math.abs(t) - 1,
              y = f % 2 !== 0,
              p = t < 0;
            0 === t ? (o = o.add(x(y, r[a]))) : (i = i.add(x(p, r[d])));
          }
          return { p: i, f: o };
        }
        multiply(n, e) {
          let t,
            r,
            i = O(n);
          if (m) {
            const { k1neg: n, k1: o, k2neg: s, k2: a } = f.splitScalar(i);
            let { p: c, f: h } = this.wNAF(o, e),
              { p: u, f: l } = this.wNAF(a, e);
            ((c = x(n, c)),
              (u = x(s, u)),
              (u = new JacobianPoint(K(u.x * f.beta), u.y, u.z)),
              (t = c.add(u)),
              (r = h.add(l)));
          } else {
            const { p: n, f: o } = this.wNAF(i, e);
            ((t = n), (r = o));
          }
          return JacobianPoint.normalizeZ([t, r])[0];
        }
        toAffine(n) {
          const { x: e, y: t, z: r } = this,
            i = this.equals(JacobianPoint.ZERO);
          null == n && (n = i ? h : N(r));
          const o = n,
            a = K(o * o),
            c = K(a * o),
            u = K(e * a),
            l = K(t * c),
            f = K(r * o);
          if (i) return Point.ZERO;
          if (f !== s) throw new Error("invZ was invalid");
          return new Point(u, l);
        }
      }
      function x(n, e) {
        const t = e.negate();
        return n ? t : e;
      }
      ((JacobianPoint.BASE = new JacobianPoint(u.Gx, u.Gy, s)),
        (JacobianPoint.ZERO = new JacobianPoint(o, s, o)));
      const E = new WeakMap();
      class Point {
        constructor(n, e) {
          ((this.x = n), (this.y = e));
        }
        _setWindowSize(n) {
          ((this._WINDOW_SIZE = n), E.delete(this));
        }
        hasEvenY() {
          return this.y % a === o;
        }
        static fromCompressedHex(n) {
          const e = 32 === n.length,
            t = _(e ? n : n.subarray(1));
          if (!q(t)) throw new Error("Point is not on curve");
          const r = b(t);
          let i = z(r);
          const o = (i & s) === s;
          if (e) o && (i = K(-i));
          else {
            const e = 1 === (1 & n[0]);
            e !== o && (i = K(-i));
          }
          const a = new Point(t, i);
          return (a.assertValidity(), a);
        }
        static fromUncompressedHex(n) {
          const e = _(n.subarray(1, d + 1)),
            t = _(n.subarray(d + 1, 2 * d + 1)),
            r = new Point(e, t);
          return (r.assertValidity(), r);
        }
        static fromHex(n) {
          const e = D(n),
            t = e.length,
            r = e[0];
          if (t === d) return this.fromCompressedHex(e);
          if (t === g && (2 === r || 3 === r)) return this.fromCompressedHex(e);
          if (t === w && 4 === r) return this.fromUncompressedHex(e);
          throw new Error(
            `Point.fromHex: received invalid point. Expected 32-${g} compressed bytes or ${w} uncompressed bytes, not ${t}`,
          );
        }
        static fromPrivateKey(n) {
          return Point.BASE.multiply(Z(n));
        }
        static fromSignature(n, e, t) {
          const { r: r, s: i } = Y(e);
          if (![0, 1, 2, 3].includes(t))
            throw new Error("Cannot recover: invalid recovery bit");
          const o = M(D(n)),
            { n: s } = u,
            a = 2 === t || 3 === t ? r + s : r,
            c = N(a, s),
            h = K(-o * c, s),
            l = K(i * c, s),
            f = 1 & t ? "03" : "02",
            d = Point.fromHex(f + U(a)),
            y = Point.BASE.multiplyAndAddUnsafe(d, h, l);
          if (!y)
            throw new Error("Cannot recover signature: point at infinify");
          return (y.assertValidity(), y);
        }
        toRawBytes(n) {
          return (void 0 === n && (n = !1), R(this.toHex(n)));
        }
        toHex(n) {
          void 0 === n && (n = !1);
          const e = U(this.x);
          if (n) {
            const n = this.hasEvenY() ? "02" : "03";
            return `${n}${e}`;
          }
          return `04${e}${U(this.y)}`;
        }
        toHexX() {
          return this.toHex(!0).slice(2);
        }
        toRawX() {
          return this.toRawBytes(!0).slice(1);
        }
        assertValidity() {
          const n = "Point is not on elliptic curve",
            { x: e, y: t } = this;
          if (!q(e) || !q(t)) throw new Error(n);
          const r = K(t * t),
            i = b(e);
          if (K(r - i) !== o) throw new Error(n);
        }
        equals(n) {
          return this.x === n.x && this.y === n.y;
        }
        negate() {
          return new Point(this.x, K(-this.y));
        }
        double() {
          return JacobianPoint.fromAffine(this).double().toAffine();
        }
        add(n) {
          return JacobianPoint.fromAffine(this)
            .add(JacobianPoint.fromAffine(n))
            .toAffine();
        }
        subtract(n) {
          return this.add(n.negate());
        }
        multiply(n) {
          return JacobianPoint.fromAffine(this).multiply(n, this).toAffine();
        }
        multiplyAndAddUnsafe(n, e, t) {
          const r = JacobianPoint.fromAffine(this),
            i =
              e === o || e === s || this !== Point.BASE
                ? r.multiplyUnsafe(e)
                : r.multiply(e),
            a = JacobianPoint.fromAffine(n).multiplyUnsafe(t),
            c = i.add(a);
          return c.equals(JacobianPoint.ZERO) ? void 0 : c.toAffine();
        }
      }
      function A(n) {
        return Number.parseInt(n[0], 16) >= 8 ? "00" + n : n;
      }
      function S(n) {
        if (n.length < 2 || 2 !== n[0])
          throw new Error("Invalid signature integer tag: " + P(n));
        const e = n[1],
          t = n.subarray(2, e + 2);
        if (!e || t.length !== e)
          throw new Error("Invalid signature integer: wrong length");
        if (0 === t[0] && t[1] <= 127)
          throw new Error("Invalid signature integer: trailing length");
        return { data: _(t), left: n.subarray(e + 2) };
      }
      function H(n) {
        if (n.length < 2 || 48 != n[0])
          throw new Error("Invalid signature tag: " + P(n));
        if (n[1] !== n.length - 2)
          throw new Error("Invalid signature: incorrect length");
        const { data: e, left: t } = S(n.subarray(2)),
          { data: r, left: i } = S(t);
        if (i.length)
          throw new Error(
            "Invalid signature: left bytes after parsing: " + P(i),
          );
        return { r: e, s: r };
      }
      ((e.Point = Point),
        (Point.BASE = new Point(u.Gx, u.Gy)),
        (Point.ZERO = new Point(o, o)));
      class Signature {
        constructor(n, e) {
          ((this.r = n), (this.s = e), this.assertValidity());
        }
        static fromCompact(n) {
          const e = n instanceof Uint8Array,
            t = "Signature.fromCompact";
          if ("string" !== typeof n && !e)
            throw new TypeError(t + ": Expected string or Uint8Array");
          const r = e ? P(n) : n;
          if (128 !== r.length) throw new Error(t + ": Expected 64-byte hex");
          return new Signature(T(r.slice(0, 64)), T(r.slice(64, 128)));
        }
        static fromDER(n) {
          const e = n instanceof Uint8Array;
          if ("string" !== typeof n && !e)
            throw new TypeError(
              "Signature.fromDER: Expected string or Uint8Array",
            );
          const { r: t, s: r } = H(e ? n : R(n));
          return new Signature(t, r);
        }
        static fromHex(n) {
          return this.fromDER(n);
        }
        assertValidity() {
          const { r: n, s: e } = this;
          if (!G(n)) throw new Error("Invalid Signature: r must be 0 < r < n");
          if (!G(e)) throw new Error("Invalid Signature: s must be 0 < s < n");
        }
        hasHighS() {
          const n = u.n >> s;
          return this.s > n;
        }
        normalizeS() {
          return this.hasHighS()
            ? new Signature(this.r, K(-this.s, u.n))
            : this;
        }
        toDERRawBytes() {
          return R(this.toDERHex());
        }
        toDERHex() {
          const n = A(C(this.s)),
            e = A(C(this.r)),
            t = n.length / 2,
            r = e.length / 2,
            i = C(t),
            o = C(r),
            s = C(r + t + 4);
          return `30${s}02${o}${e}02${i}${n}`;
        }
        toRawBytes() {
          return this.toDERRawBytes();
        }
        toHex() {
          return this.toDERHex();
        }
        toCompactRawBytes() {
          return R(this.toCompactHex());
        }
        toCompactHex() {
          return U(this.r) + U(this.s);
        }
      }
      function B() {
        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
          e[t] = arguments[t];
        if (!e.every((n) => n instanceof Uint8Array))
          throw new Error("Uint8Array list expected");
        if (1 === e.length) return e[0];
        const r = e.reduce((n, e) => n + e.length, 0),
          i = new Uint8Array(r);
        for (let o = 0, s = 0; o < e.length; o++) {
          const n = e[o];
          (i.set(n, s), (s += n.length));
        }
        return i;
      }
      e.Signature = Signature;
      const k = Array.from({ length: 256 }, (n, e) =>
        e.toString(16).padStart(2, "0"),
      );
      function P(n) {
        if (!(n instanceof Uint8Array)) throw new Error("Expected Uint8Array");
        let e = "";
        for (let t = 0; t < n.length; t++) e += k[n[t]];
        return e;
      }
      const I = BigInt(
        "0x10000000000000000000000000000000000000000000000000000000000000000",
      );
      function U(n) {
        if ("bigint" !== typeof n) throw new Error("Expected bigint");
        if (!(o <= n && n < I))
          throw new Error("Expected number 0 <= n < 2^256");
        return n.toString(16).padStart(64, "0");
      }
      function L(n) {
        const e = R(U(n));
        if (32 !== e.length) throw new Error("Error: expected 32 bytes");
        return e;
      }
      function C(n) {
        const e = n.toString(16);
        return 1 & e.length ? "0" + e : e;
      }
      function T(n) {
        if ("string" !== typeof n)
          throw new TypeError("hexToNumber: expected string, got " + typeof n);
        return BigInt("0x" + n);
      }
      function R(n) {
        if ("string" !== typeof n)
          throw new TypeError("hexToBytes: expected string, got " + typeof n);
        if (n.length % 2)
          throw new Error(
            "hexToBytes: received invalid unpadded hex" + n.length,
          );
        const e = new Uint8Array(n.length / 2);
        for (let t = 0; t < e.length; t++) {
          const r = 2 * t,
            i = n.slice(r, r + 2),
            o = Number.parseInt(i, 16);
          if (Number.isNaN(o) || o < 0)
            throw new Error("Invalid byte sequence");
          e[t] = o;
        }
        return e;
      }
      function _(n) {
        return T(P(n));
      }
      function D(n) {
        return n instanceof Uint8Array ? Uint8Array.from(n) : R(n);
      }
      function O(n) {
        if ("number" === typeof n && Number.isSafeInteger(n) && n > 0)
          return BigInt(n);
        if ("bigint" === typeof n && G(n)) return n;
        throw new TypeError(
          "Expected valid private scalar: 0 < scalar < curve.n",
        );
      }
      function K(n, e) {
        void 0 === e && (e = u.P);
        const t = n % e;
        return t >= o ? t : e + t;
      }
      function j(n, e) {
        const { P: t } = u;
        let r = n;
        while (e-- > o) ((r *= r), (r %= t));
        return r;
      }
      function z(n) {
        const { P: e } = u,
          t = BigInt(6),
          r = BigInt(11),
          i = BigInt(22),
          o = BigInt(23),
          s = BigInt(44),
          h = BigInt(88),
          l = (n * n * n) % e,
          f = (l * l * n) % e,
          d = (j(f, c) * f) % e,
          y = (j(d, c) * f) % e,
          p = (j(y, a) * l) % e,
          g = (j(p, r) * p) % e,
          w = (j(g, i) * g) % e,
          b = (j(w, s) * w) % e,
          m = (j(b, h) * b) % e,
          v = (j(m, s) * w) % e,
          x = (j(v, c) * f) % e,
          E = (j(x, o) * g) % e,
          A = (j(E, t) * l) % e,
          S = j(A, a),
          H = (S * S) % e;
        if (H !== n) throw new Error("Cannot find square root");
        return S;
      }
      function N(n, e) {
        if ((void 0 === e && (e = u.P), n === o || e <= o))
          throw new Error(
            `invert: expected positive integers, got n=${n} mod=${e}`,
          );
        let t = K(n, e),
          r = e,
          i = o,
          a = s,
          c = s,
          h = o;
        while (t !== o) {
          const n = r / t,
            e = r % t,
            o = i - c * n,
            s = a - h * n;
          ((r = t), (t = e), (i = c), (a = h), (c = o), (h = s));
        }
        const l = r;
        if (l !== s) throw new Error("invert: does not exist");
        return K(i, e);
      }
      function F(n, e) {
        void 0 === e && (e = u.P);
        const t = new Array(n.length),
          r = n.reduce(
            (n, r, i) => (r === o ? n : ((t[i] = n), K(n * r, e))),
            s,
          ),
          i = N(r, e);
        return (
          n.reduceRight(
            (n, r, i) => (r === o ? n : ((t[i] = K(n * t[i], e)), K(n * r, e))),
            i,
          ),
          t
        );
      }
      function J(n) {
        const e = 8 * n.length - 8 * y,
          t = _(n);
        return e > 0 ? t >> BigInt(e) : t;
      }
      function M(n, e) {
        void 0 === e && (e = !1);
        const t = J(n);
        if (e) return t;
        const { n: r } = u;
        return t >= r ? t - r : t;
      }
      let $, V;
      class HmacDrbg {
        constructor(n, e) {
          if (
            ((this.hashLen = n),
            (this.qByteLen = e),
            "number" !== typeof n || n < 2)
          )
            throw new Error("hashLen must be a number");
          if ("number" !== typeof e || e < 2)
            throw new Error("qByteLen must be a number");
          ((this.v = new Uint8Array(n).fill(1)),
            (this.k = new Uint8Array(n).fill(0)),
            (this.counter = 0));
        }
        hmac() {
          for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
            e[t] = arguments[t];
          return Sn.hmacSha256(this.k, ...e);
        }
        hmacSync() {
          for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
            e[t] = arguments[t];
          return V(this.k, ...e);
        }
        checkSync() {
          if ("function" !== typeof V)
            throw new ShaError("hmacSha256Sync needs to be set");
        }
        incr() {
          if (this.counter >= 1e3)
            throw new Error(
              "Tried 1,000 k values for sign(), all were invalid",
            );
          this.counter += 1;
        }
        async reseed(n) {
          (void 0 === n && (n = new Uint8Array()),
            (this.k = await this.hmac(this.v, Uint8Array.from([0]), n)),
            (this.v = await this.hmac(this.v)),
            0 !== n.length &&
              ((this.k = await this.hmac(this.v, Uint8Array.from([1]), n)),
              (this.v = await this.hmac(this.v))));
        }
        reseedSync(n) {
          (void 0 === n && (n = new Uint8Array()),
            this.checkSync(),
            (this.k = this.hmacSync(this.v, Uint8Array.from([0]), n)),
            (this.v = this.hmacSync(this.v)),
            0 !== n.length &&
              ((this.k = this.hmacSync(this.v, Uint8Array.from([1]), n)),
              (this.v = this.hmacSync(this.v))));
        }
        async generate() {
          this.incr();
          let n = 0;
          const e = [];
          while (n < this.qByteLen) {
            this.v = await this.hmac(this.v);
            const t = this.v.slice();
            (e.push(t), (n += this.v.length));
          }
          return B(...e);
        }
        generateSync() {
          (this.checkSync(), this.incr());
          let n = 0;
          const e = [];
          while (n < this.qByteLen) {
            this.v = this.hmacSync(this.v);
            const t = this.v.slice();
            (e.push(t), (n += this.v.length));
          }
          return B(...e);
        }
      }
      function G(n) {
        return o < n && n < u.n;
      }
      function q(n) {
        return o < n && n < u.P;
      }
      function W(n, e, t, r) {
        void 0 === r && (r = !0);
        const { n: i } = u,
          a = M(n, !0);
        if (!G(a)) return;
        const c = N(a, i),
          h = Point.BASE.multiply(a),
          l = K(h.x, i);
        if (l === o) return;
        const f = K(c * K(e + t * l, i), i);
        if (f === o) return;
        let d = new Signature(l, f),
          y = (h.x === d.r ? 0 : 2) | Number(h.y & s);
        return (
          r && d.hasHighS() && ((d = d.normalizeS()), (y ^= 1)),
          { sig: d, recovery: y }
        );
      }
      function Z(n) {
        let e;
        if ("bigint" === typeof n) e = n;
        else if ("number" === typeof n && Number.isSafeInteger(n) && n > 0)
          e = BigInt(n);
        else if ("string" === typeof n) {
          if (n.length !== 2 * y)
            throw new Error("Expected 32 bytes of private key");
          e = T(n);
        } else {
          if (!(n instanceof Uint8Array))
            throw new TypeError("Expected valid private key");
          if (n.length !== y)
            throw new Error("Expected 32 bytes of private key");
          e = _(n);
        }
        if (!G(e)) throw new Error("Expected private key: 0 < key < n");
        return e;
      }
      function X(n) {
        return n instanceof Point ? (n.assertValidity(), n) : Point.fromHex(n);
      }
      function Y(n) {
        if (n instanceof Signature) return (n.assertValidity(), n);
        try {
          return Signature.fromDER(n);
        } catch (e) {
          return Signature.fromCompact(n);
        }
      }
      function Q(n, e) {
        return (
          void 0 === e && (e = !1),
          Point.fromPrivateKey(n).toRawBytes(e)
        );
      }
      function nn(n, e, t, r) {
        return (
          void 0 === r && (r = !1),
          Point.fromSignature(n, e, t).toRawBytes(r)
        );
      }
      function en(n) {
        const e = n instanceof Uint8Array,
          t = "string" === typeof n,
          r = (e || t) && n.length;
        return e
          ? r === g || r === w
          : t
            ? r === 2 * g || r === 2 * w
            : n instanceof Point;
      }
      function tn(n, e, t) {
        if ((void 0 === t && (t = !1), en(n)))
          throw new TypeError("getSharedSecret: first arg must be private key");
        if (!en(e))
          throw new TypeError("getSharedSecret: second arg must be public key");
        const r = X(e);
        return (r.assertValidity(), r.multiply(Z(n)).toRawBytes(t));
      }
      function rn(n) {
        const e = n.length > d ? n.slice(0, d) : n;
        return _(e);
      }
      function on(n) {
        const e = rn(n),
          t = K(e, u.n);
        return sn(t < o ? e : t);
      }
      function sn(n) {
        return L(n);
      }
      function an(n, e, t) {
        if (null == n)
          throw new Error(`sign: expected valid message hash, not "${n}"`);
        const r = D(n),
          i = Z(e),
          o = [sn(i), on(r)];
        if (null != t) {
          !0 === t && (t = Sn.randomBytes(d));
          const n = D(t);
          if (n.length !== d)
            throw new Error(`sign: Expected ${d} bytes of extra data`);
          o.push(n);
        }
        const s = B(...o),
          a = rn(r);
        return { seed: s, m: a, d: i };
      }
      function cn(n, e) {
        const { sig: t, recovery: r } = n,
          { der: i, recovered: o } = Object.assign(
            { canonical: !0, der: !0 },
            e,
          ),
          s = i ? t.toDERRawBytes() : t.toCompactRawBytes();
        return o ? [s, r] : s;
      }
      async function hn(n, e, t) {
        void 0 === t && (t = {});
        const { seed: r, m: i, d: o } = an(n, e, t.extraEntropy),
          s = new HmacDrbg(p, y);
        let a;
        await s.reseed(r);
        while (!(a = W(await s.generate(), i, o, t.canonical)))
          await s.reseed();
        return cn(a, t);
      }
      function un(n, e, t) {
        void 0 === t && (t = {});
        const { seed: r, m: i, d: o } = an(n, e, t.extraEntropy),
          s = new HmacDrbg(p, y);
        let a;
        s.reseedSync(r);
        while (!(a = W(s.generateSync(), i, o, t.canonical))) s.reseedSync();
        return cn(a, t);
      }
      const ln = { strict: !0 };
      function fn(n, e, t, r) {
        let i;
        void 0 === r && (r = ln);
        try {
          ((i = Y(n)), (e = D(e)));
        } catch (g) {
          return !1;
        }
        const { r: o, s: s } = i;
        if (r.strict && i.hasHighS()) return !1;
        const a = M(e);
        let c;
        try {
          c = X(t);
        } catch (g) {
          return !1;
        }
        const { n: h } = u,
          l = N(s, h),
          f = K(a * l, h),
          d = K(o * l, h),
          y = Point.BASE.multiplyAndAddUnsafe(c, f, d);
        if (!y) return !1;
        const p = K(y.x, h);
        return p === o;
      }
      function dn(n) {
        return K(_(n), u.n);
      }
      class SchnorrSignature {
        constructor(n, e) {
          ((this.r = n), (this.s = e), this.assertValidity());
        }
        static fromHex(n) {
          const e = D(n);
          if (64 !== e.length)
            throw new TypeError(
              "SchnorrSignature.fromHex: expected 64 bytes, not " + e.length,
            );
          const t = _(e.subarray(0, 32)),
            r = _(e.subarray(32, 64));
          return new SchnorrSignature(t, r);
        }
        assertValidity() {
          const { r: n, s: e } = this;
          if (!q(n) || !G(e)) throw new Error("Invalid signature");
        }
        toHex() {
          return U(this.r) + U(this.s);
        }
        toRawBytes() {
          return R(this.toHex());
        }
      }
      function yn(n) {
        return Point.fromPrivateKey(n).toRawX();
      }
      class InternalSchnorrSignature {
        constructor(n, e, t) {
          if ((void 0 === t && (t = Sn.randomBytes()), null == n))
            throw new TypeError(`sign: Expected valid message, not "${n}"`);
          this.m = D(n);
          const { x: r, scalar: i } = this.getScalar(Z(e));
          if (
            ((this.px = r),
            (this.d = i),
            (this.rand = D(t)),
            32 !== this.rand.length)
          )
            throw new TypeError("sign: Expected 32 bytes of aux randomness");
        }
        getScalar(n) {
          const e = Point.fromPrivateKey(n),
            t = e.hasEvenY() ? n : u.n - n;
          return { point: e, scalar: t, x: e.toRawX() };
        }
        initNonce(n, e) {
          return L(n ^ _(e));
        }
        finalizeNonce(n) {
          const e = K(_(n), u.n);
          if (e === o)
            throw new Error("sign: Creation of signature failed. k is zero");
          const { point: t, x: r, scalar: i } = this.getScalar(e);
          return { R: t, rx: r, k: i };
        }
        finalizeSig(n, e, t, r) {
          return new SchnorrSignature(n.x, K(e + t * r, u.n)).toRawBytes();
        }
        error() {
          throw new Error("sign: Invalid signature produced");
        }
        async calc() {
          const { m: n, d: e, px: t, rand: r } = this,
            i = Sn.taggedHash,
            o = this.initNonce(e, await i(En.aux, r)),
            {
              R: s,
              rx: a,
              k: c,
            } = this.finalizeNonce(await i(En.nonce, o, t, n)),
            h = dn(await i(En.challenge, a, t, n)),
            u = this.finalizeSig(s, c, h, e);
          return ((await mn(u, n, t)) || this.error(), u);
        }
        calcSync() {
          const { m: n, d: e, px: t, rand: r } = this,
            i = Sn.taggedHashSync,
            o = this.initNonce(e, i(En.aux, r)),
            { R: s, rx: a, k: c } = this.finalizeNonce(i(En.nonce, o, t, n)),
            h = dn(i(En.challenge, a, t, n)),
            u = this.finalizeSig(s, c, h, e);
          return (vn(u, n, t) || this.error(), u);
        }
      }
      async function pn(n, e, t) {
        return new InternalSchnorrSignature(n, e, t).calc();
      }
      function gn(n, e, t) {
        return new InternalSchnorrSignature(n, e, t).calcSync();
      }
      function wn(n, e, t) {
        const r = n instanceof SchnorrSignature,
          i = r ? n : SchnorrSignature.fromHex(n);
        return (r && i.assertValidity(), { ...i, m: D(e), P: X(t) });
      }
      function bn(n, e, t, r) {
        const i = Point.BASE.multiplyAndAddUnsafe(e, Z(t), K(-r, u.n));
        return !(!i || !i.hasEvenY() || i.x !== n);
      }
      async function mn(n, e, t) {
        try {
          const { r: r, s: i, m: o, P: s } = wn(n, e, t),
            a = dn(await Sn.taggedHash(En.challenge, L(r), s.toRawX(), o));
          return bn(r, s, i, a);
        } catch (r) {
          return !1;
        }
      }
      function vn(n, e, t) {
        try {
          const { r: r, s: i, m: o, P: s } = wn(n, e, t),
            a = dn(Sn.taggedHashSync(En.challenge, L(r), s.toRawX(), o));
          return bn(r, s, i, a);
        } catch (r) {
          if (r instanceof ShaError) throw r;
          return !1;
        }
      }
      e.schnorr = {
        Signature: SchnorrSignature,
        getPublicKey: yn,
        sign: pn,
        verify: mn,
        signSync: gn,
        verifySync: vn,
      };
      Point.BASE._setWindowSize(8);
      const xn = {
          node: r,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        },
        En = {
          challenge: "BIP0340/challenge",
          aux: "BIP0340/aux",
          nonce: "BIP0340/nonce",
        },
        An = {},
        Sn = (e.utils = {
          bytesToHex: P,
          hexToBytes: R,
          concatBytes: B,
          mod: K,
          invert: N,
          isValidPrivateKey(n) {
            try {
              return (Z(n), !0);
            } catch (e) {
              return !1;
            }
          },
          _bigintTo32Bytes: L,
          _normalizePrivateKey: Z,
          hashToPrivateKey: (n) => {
            n = D(n);
            const e = y + 8;
            if (n.length < e || n.length > 1024)
              throw new Error(
                "Expected valid bytes of private key as per FIPS 186",
              );
            const t = K(_(n), u.n - s) + s;
            return L(t);
          },
          randomBytes: function (n) {
            if ((void 0 === n && (n = 32), xn.web))
              return xn.web.getRandomValues(new Uint8Array(n));
            if (xn.node) {
              const { randomBytes: e } = xn.node;
              return Uint8Array.from(e(n));
            }
            throw new Error(
              "The environment doesn't have randomBytes function",
            );
          },
          randomPrivateKey: () => Sn.hashToPrivateKey(Sn.randomBytes(y + 8)),
          precompute(n, e) {
            (void 0 === n && (n = 8), void 0 === e && (e = Point.BASE));
            const t = e === Point.BASE ? e : new Point(e.x, e.y);
            return (t._setWindowSize(n), t.multiply(c), t);
          },
          sha256: async function () {
            for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
              e[t] = arguments[t];
            if (xn.web) {
              const n = await xn.web.subtle.digest("SHA-256", B(...e));
              return new Uint8Array(n);
            }
            if (xn.node) {
              const { createHash: n } = xn.node,
                t = n("sha256");
              return (
                e.forEach((n) => t.update(n)),
                Uint8Array.from(t.digest())
              );
            }
            throw new Error("The environment doesn't have sha256 function");
          },
          hmacSha256: async function (n) {
            for (
              var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              t[r - 1] = arguments[r];
            if (xn.web) {
              const e = await xn.web.subtle.importKey(
                  "raw",
                  n,
                  { name: "HMAC", hash: { name: "SHA-256" } },
                  !1,
                  ["sign"],
                ),
                r = B(...t),
                i = await xn.web.subtle.sign("HMAC", e, r);
              return new Uint8Array(i);
            }
            if (xn.node) {
              const { createHmac: e } = xn.node,
                r = e("sha256", n);
              return (
                t.forEach((n) => r.update(n)),
                Uint8Array.from(r.digest())
              );
            }
            throw new Error(
              "The environment doesn't have hmac-sha256 function",
            );
          },
          sha256Sync: void 0,
          hmacSha256Sync: void 0,
          taggedHash: async function (n) {
            let e = An[n];
            if (void 0 === e) {
              const t = await Sn.sha256(
                Uint8Array.from(n, (n) => n.charCodeAt(0)),
              );
              ((e = B(t, t)), (An[n] = e));
            }
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            return Sn.sha256(e, ...r);
          },
          taggedHashSync: function (n) {
            if ("function" !== typeof $)
              throw new ShaError("sha256Sync is undefined, you need to set it");
            let e = An[n];
            if (void 0 === e) {
              const t = $(Uint8Array.from(n, (n) => n.charCodeAt(0)));
              ((e = B(t, t)), (An[n] = e));
            }
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            return $(e, ...r);
          },
          _JacobianPoint: JacobianPoint,
        });
      Object.defineProperties(Sn, {
        sha256Sync: {
          configurable: !1,
          get() {
            return $;
          },
          set(n) {
            $ || ($ = n);
          },
        },
        hmacSha256Sync: {
          configurable: !1,
          get() {
            return V;
          },
          set(n) {
            V || (V = n);
          },
        },
      });
    },
    3440: function (n, e, t) {
      "use strict";
      function r(n) {
        if (!Number.isSafeInteger(n) || n < 0)
          throw new Error("Wrong positive integer: " + n);
      }
      function i(n) {
        if ("boolean" !== typeof n)
          throw new Error("Expected boolean, not " + n);
      }
      function o(n) {
        if (!(n instanceof Uint8Array))
          throw new TypeError("Expected Uint8Array");
        for (
          var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          t[r - 1] = arguments[r];
        if (t.length > 0 && !t.includes(n.length))
          throw new TypeError(
            `Expected Uint8Array of length ${t}, not of length=${n.length}`,
          );
      }
      function s(n) {
        if ("function" !== typeof n || "function" !== typeof n.create)
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        (r(n.outputLen), r(n.blockLen));
      }
      function a(n, e) {
        if ((void 0 === e && (e = !0), n.destroyed))
          throw new Error("Hash instance has been destroyed");
        if (e && n.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function c(n, e) {
        o(n);
        const t = e.outputLen;
        if (n.length < t)
          throw new Error(
            "digestInto() expects output buffer of length at least " + t,
          );
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.output = e.exists = e.hash = e.bytes = e.bool = e.number = void 0),
        (e.number = r),
        (e.bool = i),
        (e.bytes = o),
        (e.hash = s),
        (e.exists = a),
        (e.output = c));
      const h = { number: r, bool: i, bytes: o, hash: s, exists: a, output: c };
      e.default = h;
    },
    3972: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.randomBytes =
          e.wrapConstructorWithOpts =
          e.wrapConstructor =
          e.checkOpts =
          e.Hash =
          e.concatBytes =
          e.toBytes =
          e.utf8ToBytes =
          e.asyncLoop =
          e.nextTick =
          e.hexToBytes =
          e.bytesToHex =
          e.isLE =
          e.rotr =
          e.createView =
          e.u32 =
          e.u8 =
            void 0));
      const r = t(11448),
        i = (n) => new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
      e.u8 = i;
      const o = (n) =>
        new Uint32Array(n.buffer, n.byteOffset, Math.floor(n.byteLength / 4));
      e.u32 = o;
      const s = (n) => new DataView(n.buffer, n.byteOffset, n.byteLength);
      e.createView = s;
      const a = (n, e) => (n << (32 - e)) | (n >>> e);
      if (
        ((e.rotr = a),
        (e.isLE =
          68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0]),
        !e.isLE)
      )
        throw new Error("Non little-endian hardware is not supported");
      const c = Array.from({ length: 256 }, (n, e) =>
        e.toString(16).padStart(2, "0"),
      );
      function h(n) {
        if (!(n instanceof Uint8Array)) throw new Error("Uint8Array expected");
        let e = "";
        for (let t = 0; t < n.length; t++) e += c[n[t]];
        return e;
      }
      function u(n) {
        if ("string" !== typeof n)
          throw new TypeError("hexToBytes: expected string, got " + typeof n);
        if (n.length % 2)
          throw new Error("hexToBytes: received invalid unpadded hex");
        const e = new Uint8Array(n.length / 2);
        for (let t = 0; t < e.length; t++) {
          const r = 2 * t,
            i = n.slice(r, r + 2),
            o = Number.parseInt(i, 16);
          if (Number.isNaN(o) || o < 0)
            throw new Error("Invalid byte sequence");
          e[t] = o;
        }
        return e;
      }
      ((e.bytesToHex = h), (e.hexToBytes = u));
      const l = async () => {};
      async function f(n, t, r) {
        let i = Date.now();
        for (let o = 0; o < n; o++) {
          r(o);
          const n = Date.now() - i;
          (n >= 0 && n < t) || (await (0, e.nextTick)(), (i += n));
        }
      }
      function d(n) {
        if ("string" !== typeof n)
          throw new TypeError("utf8ToBytes expected string, got " + typeof n);
        return new TextEncoder().encode(n);
      }
      function y(n) {
        if (("string" === typeof n && (n = d(n)), !(n instanceof Uint8Array)))
          throw new TypeError(
            `Expected input type is Uint8Array (got ${typeof n})`,
          );
        return n;
      }
      function p() {
        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
          e[t] = arguments[t];
        if (!e.every((n) => n instanceof Uint8Array))
          throw new Error("Uint8Array list expected");
        if (1 === e.length) return e[0];
        const r = e.reduce((n, e) => n + e.length, 0),
          i = new Uint8Array(r);
        for (let o = 0, s = 0; o < e.length; o++) {
          const n = e[o];
          (i.set(n, s), (s += n.length));
        }
        return i;
      }
      ((e.nextTick = l),
        (e.asyncLoop = f),
        (e.utf8ToBytes = d),
        (e.toBytes = y),
        (e.concatBytes = p));
      class Hash {
        clone() {
          return this._cloneInto();
        }
      }
      e.Hash = Hash;
      const g = (n) =>
        "[object Object]" === Object.prototype.toString.call(n) &&
        n.constructor === Object;
      function w(n, e) {
        if (void 0 !== e && ("object" !== typeof e || !g(e)))
          throw new TypeError("Options should be object or undefined");
        const t = Object.assign(n, e);
        return t;
      }
      function b(n) {
        const e = (e) => n().update(y(e)).digest(),
          t = n();
        return (
          (e.outputLen = t.outputLen),
          (e.blockLen = t.blockLen),
          (e.create = () => n()),
          e
        );
      }
      function m(n) {
        const e = (e, t) => n(t).update(y(e)).digest(),
          t = n({});
        return (
          (e.outputLen = t.outputLen),
          (e.blockLen = t.blockLen),
          (e.create = (e) => n(e)),
          e
        );
      }
      function v(n) {
        if ((void 0 === n && (n = 32), r.crypto.web))
          return r.crypto.web.getRandomValues(new Uint8Array(n));
        if (r.crypto.node)
          return new Uint8Array(r.crypto.node.randomBytes(n).buffer);
        throw new Error("The environment doesn't have randomBytes function");
      }
      ((e.checkOpts = w),
        (e.wrapConstructor = b),
        (e.wrapConstructorWithOpts = m),
        (e.randomBytes = v));
    },
    4262: function (n, e) {},
    4383: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SHA2 = void 0));
      const r = t(3440),
        i = t(3183);
      function o(n, e, t, r) {
        if ("function" === typeof n.setBigUint64)
          return n.setBigUint64(e, t, r);
        const i = BigInt(32),
          o = BigInt(4294967295),
          s = Number((t >> i) & o),
          a = Number(t & o),
          c = r ? 4 : 0,
          h = r ? 0 : 4;
        (n.setUint32(e + c, s, r), n.setUint32(e + h, a, r));
      }
      class SHA2 extends i.Hash {
        constructor(n, e, t, r) {
          (super(),
            (this.blockLen = n),
            (this.outputLen = e),
            (this.padOffset = t),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(n)),
            (this.view = (0, i.createView)(this.buffer)));
        }
        update(n) {
          r.default.exists(this);
          const { view: e, buffer: t, blockLen: o } = this;
          n = (0, i.toBytes)(n);
          const s = n.length;
          for (let r = 0; r < s; ) {
            const a = Math.min(o - this.pos, s - r);
            if (a !== o)
              (t.set(n.subarray(r, r + a), this.pos),
                (this.pos += a),
                (r += a),
                this.pos === o && (this.process(e, 0), (this.pos = 0)));
            else {
              const e = (0, i.createView)(n);
              for (; o <= s - r; r += o) this.process(e, r);
            }
          }
          return ((this.length += n.length), this.roundClean(), this);
        }
        digestInto(n) {
          (r.default.exists(this),
            r.default.output(n, this),
            (this.finished = !0));
          const { buffer: e, view: t, blockLen: s, isLE: a } = this;
          let { pos: c } = this;
          ((e[c++] = 128),
            this.buffer.subarray(c).fill(0),
            this.padOffset > s - c && (this.process(t, 0), (c = 0)));
          for (let r = c; r < s; r++) e[r] = 0;
          (o(t, s - 8, BigInt(8 * this.length), a), this.process(t, 0));
          const h = (0, i.createView)(n),
            u = this.outputLen;
          if (u % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const l = u / 4,
            f = this.get();
          if (l > f.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let r = 0; r < l; r++) h.setUint32(4 * r, f[r], a);
        }
        digest() {
          const { buffer: n, outputLen: e } = this;
          this.digestInto(n);
          const t = n.slice(0, e);
          return (this.destroy(), t);
        }
        _cloneInto(n) {
          (n || (n = new this.constructor()), n.set(...this.get()));
          const {
            blockLen: e,
            buffer: t,
            length: r,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (n.length = r),
            (n.pos = s),
            (n.finished = i),
            (n.destroyed = o),
            r % e && n.buffer.set(t),
            n
          );
        }
      }
      e.SHA2 = SHA2;
    },
    4694: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.mnemonicToSeedSync =
          e.mnemonicToSeed =
          e.validateMnemonic =
          e.entropyToMnemonic =
          e.mnemonicToEntropy =
          e.generateMnemonic =
            void 0));
      const r = t(3440),
        i = t(5243),
        o = t(5246),
        s = t(5247),
        a = t(3183),
        c = t(4695),
        h = (n) => "あいこくしん" === n[0];
      function u(n) {
        if ("string" !== typeof n)
          throw new TypeError("Invalid mnemonic type: " + typeof n);
        return n.normalize("NFKD");
      }
      function l(n) {
        const e = u(n),
          t = e.split(" ");
        if (![12, 15, 18, 21, 24].includes(t.length))
          throw new Error("Invalid mnemonic");
        return { nfkd: e, words: t };
      }
      function f(n) {
        r.default.bytes(n, 16, 20, 24, 28, 32);
      }
      function d(n, e) {
        if (
          (void 0 === e && (e = 128),
          r.default.number(e),
          e % 32 !== 0 || e > 256)
        )
          throw new TypeError("Invalid entropy");
        return w((0, a.randomBytes)(e / 8), n);
      }
      e.generateMnemonic = d;
      const y = (n) => {
        const e = 8 - n.length / 4;
        return new Uint8Array([((0, o.sha256)(n)[0] >> e) << e]);
      };
      function p(n) {
        if (!Array.isArray(n) || 2048 !== n.length || "string" !== typeof n[0])
          throw new Error("Worlist: expected array of 2048 strings");
        return (
          n.forEach((n) => {
            if ("string" !== typeof n)
              throw new Error("Wordlist: non-string element: " + n);
          }),
          c.utils.chain(
            c.utils.checksum(1, y),
            c.utils.radix2(11, !0),
            c.utils.alphabet(n),
          )
        );
      }
      function g(n, e) {
        const { words: t } = l(n),
          r = p(e).decode(t);
        return (f(r), r);
      }
      function w(n, e) {
        f(n);
        const t = p(e).encode(n);
        return t.join(h(e) ? "　" : " ");
      }
      function b(n, e) {
        try {
          g(n, e);
        } catch (t) {
          return !1;
        }
        return !0;
      }
      ((e.mnemonicToEntropy = g),
        (e.entropyToMnemonic = w),
        (e.validateMnemonic = b));
      const m = (n) => u("mnemonic" + n);
      function v(n, e) {
        return (
          void 0 === e && (e = ""),
          (0, i.pbkdf2Async)(s.sha512, l(n).nfkd, m(e), { c: 2048, dkLen: 64 })
        );
      }
      function x(n, e) {
        return (
          void 0 === e && (e = ""),
          (0, i.pbkdf2)(s.sha512, l(n).nfkd, m(e), { c: 2048, dkLen: 64 })
        );
      }
      ((e.mnemonicToSeed = v), (e.mnemonicToSeedSync = x));
    },
    4695: function (n, e, t) {
      "use strict";
      function r(n) {
        if (!Number.isSafeInteger(n)) throw new Error("Wrong integer: " + n);
      }
      function i(n) {
        return (
          n instanceof Uint8Array ||
          (null != n &&
            "object" === typeof n &&
            "Uint8Array" === n.constructor.name)
        );
      }
      function o() {
        const n = (n) => n,
          e = (n, e) => (t) => n(e(t));
        for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
          r[i] = arguments[i];
        const o = r.map((n) => n.encode).reduceRight(e, n),
          s = r.map((n) => n.decode).reduce(e, n);
        return { encode: o, decode: s };
      }
      function s(n) {
        return {
          encode: (e) => {
            if (!Array.isArray(e) || (e.length && "number" !== typeof e[0]))
              throw new Error(
                "alphabet.encode input should be an array of numbers",
              );
            return e.map((e) => {
              if ((r(e), e < 0 || e >= n.length))
                throw new Error(
                  `Digit index outside alphabet: ${e} (alphabet: ${n.length})`,
                );
              return n[e];
            });
          },
          decode: (e) => {
            if (!Array.isArray(e) || (e.length && "string" !== typeof e[0]))
              throw new Error(
                "alphabet.decode input should be array of strings",
              );
            return e.map((e) => {
              if ("string" !== typeof e)
                throw new Error("alphabet.decode: not string element=" + e);
              const t = n.indexOf(e);
              if (-1 === t)
                throw new Error(`Unknown letter: "${e}". Allowed: ${n}`);
              return t;
            });
          },
        };
      }
      function a(n) {
        if ((void 0 === n && (n = ""), "string" !== typeof n))
          throw new Error("join separator should be string");
        return {
          encode: (e) => {
            if (!Array.isArray(e) || (e.length && "string" !== typeof e[0]))
              throw new Error("join.encode input should be array of strings");
            for (let n of e)
              if ("string" !== typeof n)
                throw new Error("join.encode: non-string input=" + n);
            return e.join(n);
          },
          decode: (e) => {
            if ("string" !== typeof e)
              throw new Error("join.decode input should be string");
            return e.split(n);
          },
        };
      }
      function c(n, e) {
        if ((void 0 === e && (e = "="), r(n), "string" !== typeof e))
          throw new Error("padding chr should be string");
        return {
          encode(t) {
            if (!Array.isArray(t) || (t.length && "string" !== typeof t[0]))
              throw new Error(
                "padding.encode input should be array of strings",
              );
            for (let n of t)
              if ("string" !== typeof n)
                throw new Error("padding.encode: non-string input=" + n);
            while ((t.length * n) % 8) t.push(e);
            return t;
          },
          decode(t) {
            if (!Array.isArray(t) || (t.length && "string" !== typeof t[0]))
              throw new Error(
                "padding.encode input should be array of strings",
              );
            for (let n of t)
              if ("string" !== typeof n)
                throw new Error("padding.decode: non-string input=" + n);
            let r = t.length;
            if ((r * n) % 8)
              throw new Error(
                "Invalid padding: string should have whole number of bytes",
              );
            for (; r > 0 && t[r - 1] === e; r--)
              if (!(((r - 1) * n) % 8))
                throw new Error("Invalid padding: string has too much padding");
            return t.slice(0, r);
          },
        };
      }
      function h(n) {
        if ("function" !== typeof n)
          throw new Error("normalize fn should be function");
        return { encode: (n) => n, decode: (e) => n(e) };
      }
      function u(n, e, t) {
        if (e < 2)
          throw new Error(
            `convertRadix: wrong from=${e}, base cannot be less than 2`,
          );
        if (t < 2)
          throw new Error(
            `convertRadix: wrong to=${t}, base cannot be less than 2`,
          );
        if (!Array.isArray(n))
          throw new Error("convertRadix: data should be array");
        if (!n.length) return [];
        let i = 0;
        const o = [],
          s = Array.from(n);
        s.forEach((n) => {
          if ((r(n), n < 0 || n >= e)) throw new Error("Wrong integer: " + n);
        });
        while (1) {
          let n = 0,
            r = !0;
          for (let o = i; o < s.length; o++) {
            const a = s[o],
              c = e * n + a;
            if (
              !Number.isSafeInteger(c) ||
              (e * n) / e !== n ||
              c - a !== e * n
            )
              throw new Error("convertRadix: carry overflow");
            n = c % t;
            const h = Math.floor(c / t);
            if (((s[o] = h), !Number.isSafeInteger(h) || h * t + n !== c))
              throw new Error("convertRadix: carry overflow");
            r && (h ? (r = !1) : (i = o));
          }
          if ((o.push(n), r)) break;
        }
        for (let r = 0; r < n.length - 1 && 0 === n[r]; r++) o.push(0);
        return o.reverse();
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.assertNumber = r),
        (e.utils =
          e.utf8 =
          e.stringToBytes =
          e.str =
          e.hex =
          e.createBase58check =
          e.bytesToString =
          e.bytes =
          e.bech32m =
          e.bech32 =
          e.base64urlnopad =
          e.base64url =
          e.base64nopad =
          e.base64 =
          e.base58xrp =
          e.base58xmr =
          e.base58flickr =
          e.base58check =
          e.base58 =
          e.base32nopad =
          e.base32hexnopad =
          e.base32hex =
          e.base32crockford =
          e.base32 =
          e.base16 =
            void 0));
      const l = (n, e) => (e ? l(e, n % e) : n),
        f = (n, e) => n + (e - l(n, e));
      function d(n, e, t, i) {
        if (!Array.isArray(n))
          throw new Error("convertRadix2: data should be array");
        if (e <= 0 || e > 32) throw new Error("convertRadix2: wrong from=" + e);
        if (t <= 0 || t > 32) throw new Error("convertRadix2: wrong to=" + t);
        if (f(e, t) > 32)
          throw new Error(
            `convertRadix2: carry overflow from=${e} to=${t} carryBits=${f(e, t)}`,
          );
        let o = 0,
          s = 0;
        const a = 2 ** t - 1,
          c = [];
        for (const h of n) {
          if ((r(h), h >= 2 ** e))
            throw new Error(`convertRadix2: invalid data word=${h} from=${e}`);
          if (((o = (o << e) | h), s + e > 32))
            throw new Error(`convertRadix2: carry overflow pos=${s} from=${e}`);
          for (s += e; s >= t; s -= t) c.push(((o >> (s - t)) & a) >>> 0);
          o &= 2 ** s - 1;
        }
        if (((o = (o << (t - s)) & a), !i && s >= e))
          throw new Error("Excess padding");
        if (!i && o) throw new Error("Non-zero padding: " + o);
        return (i && s > 0 && c.push(o >>> 0), c);
      }
      function y(n) {
        return (
          r(n),
          {
            encode: (e) => {
              if (!i(e))
                throw new Error("radix.encode input should be Uint8Array");
              return u(Array.from(e), 256, n);
            },
            decode: (e) => {
              if (!Array.isArray(e) || (e.length && "number" !== typeof e[0]))
                throw new Error(
                  "radix.decode input should be array of numbers",
                );
              return Uint8Array.from(u(e, n, 256));
            },
          }
        );
      }
      function p(n, e) {
        if ((void 0 === e && (e = !1), r(n), n <= 0 || n > 32))
          throw new Error("radix2: bits should be in (0..32]");
        if (f(8, n) > 32 || f(n, 8) > 32)
          throw new Error("radix2: carry overflow");
        return {
          encode: (t) => {
            if (!i(t))
              throw new Error("radix2.encode input should be Uint8Array");
            return d(Array.from(t), 8, n, !e);
          },
          decode: (t) => {
            if (!Array.isArray(t) || (t.length && "number" !== typeof t[0]))
              throw new Error("radix2.decode input should be array of numbers");
            return Uint8Array.from(d(t, n, 8, e));
          },
        };
      }
      function g(n) {
        if ("function" !== typeof n)
          throw new Error("unsafeWrapper fn should be function");
        return function () {
          try {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return n.apply(null, t);
          } catch (i) {}
        };
      }
      function w(n, e) {
        if ((r(n), "function" !== typeof e))
          throw new Error("checksum fn should be function");
        return {
          encode(t) {
            if (!i(t))
              throw new Error("checksum.encode: input should be Uint8Array");
            const r = e(t).slice(0, n),
              o = new Uint8Array(t.length + n);
            return (o.set(t), o.set(r, t.length), o);
          },
          decode(t) {
            if (!i(t))
              throw new Error("checksum.decode: input should be Uint8Array");
            const r = t.slice(0, -n),
              o = e(r).slice(0, n),
              s = t.slice(-n);
            for (let e = 0; e < n; e++)
              if (o[e] !== s[e]) throw new Error("Invalid checksum");
            return r;
          },
        };
      }
      e.utils = {
        alphabet: s,
        chain: o,
        checksum: w,
        convertRadix: u,
        convertRadix2: d,
        radix: y,
        radix2: p,
        join: a,
        padding: c,
      };
      const b = (e.base16 = o(p(4), s("0123456789ABCDEF"), a(""))),
        m = (e.base32 = o(
          p(5),
          s("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),
          c(5),
          a(""),
        )),
        v =
          ((e.base32nopad = o(
            p(5),
            s("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),
            a(""),
          )),
          (e.base32hex = o(
            p(5),
            s("0123456789ABCDEFGHIJKLMNOPQRSTUV"),
            c(5),
            a(""),
          )),
          (e.base32hexnopad = o(
            p(5),
            s("0123456789ABCDEFGHIJKLMNOPQRSTUV"),
            a(""),
          )),
          (e.base32crockford = o(
            p(5),
            s("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),
            a(""),
            h((n) => n.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")),
          )),
          (e.base64 = o(
            p(6),
            s(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            ),
            c(6),
            a(""),
          ))),
        x =
          ((e.base64nopad = o(
            p(6),
            s(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            ),
            a(""),
          )),
          (e.base64url = o(
            p(6),
            s(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            ),
            c(6),
            a(""),
          ))),
        E =
          ((e.base64urlnopad = o(
            p(6),
            s(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            ),
            a(""),
          )),
          (n) => o(y(58), s(n), a(""))),
        A = (e.base58 = E(
          "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        )),
        S =
          ((e.base58flickr = E(
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          )),
          (e.base58xrp = E(
            "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz",
          )),
          [0, 2, 3, 5, 6, 7, 9, 10, 11]),
        H = (e.base58xmr = {
          encode(n) {
            let e = "";
            for (let t = 0; t < n.length; t += 8) {
              const r = n.subarray(t, t + 8);
              e += A.encode(r).padStart(S[r.length], "1");
            }
            return e;
          },
          decode(n) {
            let e = [];
            for (let t = 0; t < n.length; t += 11) {
              const r = n.slice(t, t + 11),
                i = S.indexOf(r.length),
                o = A.decode(r);
              for (let n = 0; n < o.length - i; n++)
                if (0 !== o[n]) throw new Error("base58xmr: wrong padding");
              e = e.concat(Array.from(o.slice(o.length - i)));
            }
            return Uint8Array.from(e);
          },
        }),
        B = (n) =>
          o(
            w(4, (e) => n(n(e))),
            A,
          );
      e.createBase58check = B;
      e.base58check = B;
      const k = o(s("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), a("")),
        P = [996825010, 642813549, 513874426, 1027748829, 705979059];
      function I(n) {
        const e = n >> 25;
        let t = (33554431 & n) << 5;
        for (let r = 0; r < P.length; r++) 1 === ((e >> r) & 1) && (t ^= P[r]);
        return t;
      }
      function U(n, e, t) {
        void 0 === t && (t = 1);
        const r = n.length;
        let i = 1;
        for (let o = 0; o < r; o++) {
          const e = n.charCodeAt(o);
          if (e < 33 || e > 126) throw new Error(`Invalid prefix (${n})`);
          i = I(i) ^ (e >> 5);
        }
        i = I(i);
        for (let o = 0; o < r; o++) i = I(i) ^ (31 & n.charCodeAt(o));
        for (let o of e) i = I(i) ^ o;
        for (let o = 0; o < 6; o++) i = I(i);
        return ((i ^= t), k.encode(d([i % 2 ** 30], 30, 5, !1)));
      }
      function L(n) {
        const e = "bech32" === n ? 1 : 734539939,
          t = p(5),
          r = t.decode,
          i = t.encode,
          o = g(r);
        function s(n, t, r) {
          if ((void 0 === r && (r = 90), "string" !== typeof n))
            throw new Error(
              "bech32.encode prefix should be string, not " + typeof n,
            );
          if (
            (t instanceof Uint8Array && (t = Array.from(t)),
            !Array.isArray(t) || (t.length && "number" !== typeof t[0]))
          )
            throw new Error(
              "bech32.encode words should be array of numbers, not " + typeof t,
            );
          if (0 === n.length)
            throw new TypeError("Invalid prefix length " + n.length);
          const i = n.length + 7 + t.length;
          if (!1 !== r && i > r)
            throw new TypeError(`Length ${i} exceeds limit ${r}`);
          const o = n.toLowerCase(),
            s = U(o, t, e);
          return `${o}1${k.encode(t)}${s}`;
        }
        function a(n, t) {
          if ((void 0 === t && (t = 90), "string" !== typeof n))
            throw new Error(
              "bech32.decode input should be string, not " + typeof n,
            );
          if (n.length < 8 || (!1 !== t && n.length > t))
            throw new TypeError(
              `Wrong string length: ${n.length} (${n}). Expected (8..${t})`,
            );
          const r = n.toLowerCase();
          if (n !== r && n !== n.toUpperCase())
            throw new Error("String must be lowercase or uppercase");
          const i = r.lastIndexOf("1");
          if (0 === i || -1 === i)
            throw new Error(
              'Letter "1" must be present between prefix and data only',
            );
          const o = r.slice(0, i),
            s = r.slice(i + 1);
          if (s.length < 6)
            throw new Error("Data must be at least 6 characters long");
          const a = k.decode(s).slice(0, -6),
            c = U(o, a, e);
          if (!s.endsWith(c))
            throw new Error(`Invalid checksum in ${n}: expected "${c}"`);
          return { prefix: o, words: a };
        }
        const c = g(a);
        function h(n) {
          const { prefix: e, words: t } = a(n, !1);
          return { prefix: e, words: t, bytes: r(t) };
        }
        function u(n, e) {
          return s(n, i(e));
        }
        return {
          encode: s,
          decode: a,
          encodeFromBytes: u,
          decodeToBytes: h,
          decodeUnsafe: c,
          fromWords: r,
          fromWordsUnsafe: o,
          toWords: i,
        };
      }
      ((e.bech32 = L("bech32")), (e.bech32m = L("bech32m")));
      const C = (e.utf8 = {
          encode: (n) => new TextDecoder().decode(n),
          decode: (n) => new TextEncoder().encode(n),
        }),
        T = (e.hex = o(
          p(4),
          s("0123456789abcdef"),
          a(""),
          h((n) => {
            if ("string" !== typeof n || n.length % 2)
              throw new TypeError(
                `hex.decode: expected string, got ${typeof n} with length ${n.length}`,
              );
            return n.toLowerCase();
          }),
        )),
        R = {
          utf8: C,
          hex: T,
          base16: b,
          base32: m,
          base64: v,
          base64url: x,
          base58: A,
          base58xmr: H,
        },
        _ =
          "Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr",
        D = (n, e) => {
          if ("string" !== typeof n || !R.hasOwnProperty(n))
            throw new TypeError(_);
          if (!i(e)) throw new TypeError("bytesToString() expects Uint8Array");
          return R[n].encode(e);
        };
      e.bytesToString = D;
      e.str = D;
      const O = (n, e) => {
        if (!R.hasOwnProperty(n)) throw new TypeError(_);
        if ("string" !== typeof e)
          throw new TypeError("stringToBytes() expects string");
        return R[n].decode(e);
      };
      e.stringToBytes = O;
      e.bytes = O;
    },
    5243: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.pbkdf2Async = e.pbkdf2 = void 0));
      const r = t(3440),
        i = t(5244),
        o = t(3183);
      function s(n, e, t, s) {
        r.default.hash(n);
        const a = (0, o.checkOpts)({ dkLen: 32, asyncTick: 10 }, s),
          { c: c, dkLen: h, asyncTick: u } = a;
        if (
          (r.default.number(c), r.default.number(h), r.default.number(u), c < 1)
        )
          throw new Error("PBKDF2: iterations (c) should be >= 1");
        const l = (0, o.toBytes)(e),
          f = (0, o.toBytes)(t),
          d = new Uint8Array(h),
          y = i.hmac.create(n, l),
          p = y._cloneInto().update(f);
        return { c: c, dkLen: h, asyncTick: u, DK: d, PRF: y, PRFSalt: p };
      }
      function a(n, e, t, r, i) {
        return (n.destroy(), e.destroy(), r && r.destroy(), i.fill(0), t);
      }
      function c(n, e, t, r) {
        const { c: i, dkLen: c, DK: h, PRF: u, PRFSalt: l } = s(n, e, t, r);
        let f;
        const d = new Uint8Array(4),
          y = (0, o.createView)(d),
          p = new Uint8Array(u.outputLen);
        for (let o = 1, s = 0; s < c; o++, s += u.outputLen) {
          const n = h.subarray(s, s + u.outputLen);
          (y.setInt32(0, o, !1),
            (f = l._cloneInto(f)).update(d).digestInto(p),
            n.set(p.subarray(0, n.length)));
          for (let e = 1; e < i; e++) {
            u._cloneInto(f).update(p).digestInto(p);
            for (let e = 0; e < n.length; e++) n[e] ^= p[e];
          }
        }
        return a(u, l, h, f, p);
      }
      async function h(n, e, t, r) {
        const {
          c: i,
          dkLen: c,
          asyncTick: h,
          DK: u,
          PRF: l,
          PRFSalt: f,
        } = s(n, e, t, r);
        let d;
        const y = new Uint8Array(4),
          p = (0, o.createView)(y),
          g = new Uint8Array(l.outputLen);
        for (let s = 1, a = 0; a < c; s++, a += l.outputLen) {
          const n = u.subarray(a, a + l.outputLen);
          (p.setInt32(0, s, !1),
            (d = f._cloneInto(d)).update(y).digestInto(g),
            n.set(g.subarray(0, n.length)),
            await (0, o.asyncLoop)(i - 1, h, (e) => {
              l._cloneInto(d).update(g).digestInto(g);
              for (let t = 0; t < n.length; t++) n[t] ^= g[t];
            }));
        }
        return a(l, f, u, d, g);
      }
      ((e.pbkdf2 = c), (e.pbkdf2Async = h));
    },
    5244: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.hmac = void 0));
      const r = t(3440),
        i = t(3183);
      class HMAC extends i.Hash {
        constructor(n, e) {
          (super(),
            (this.finished = !1),
            (this.destroyed = !1),
            r.default.hash(n));
          const t = (0, i.toBytes)(e);
          if (
            ((this.iHash = n.create()), "function" !== typeof this.iHash.update)
          )
            throw new TypeError(
              "Expected instance of class which extends utils.Hash",
            );
          ((this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen));
          const o = this.blockLen,
            s = new Uint8Array(o);
          s.set(t.length > o ? n.create().update(t).digest() : t);
          for (let r = 0; r < s.length; r++) s[r] ^= 54;
          (this.iHash.update(s), (this.oHash = n.create()));
          for (let r = 0; r < s.length; r++) s[r] ^= 106;
          (this.oHash.update(s), s.fill(0));
        }
        update(n) {
          return (r.default.exists(this), this.iHash.update(n), this);
        }
        digestInto(n) {
          (r.default.exists(this),
            r.default.bytes(n, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(n),
            this.oHash.update(n),
            this.oHash.digestInto(n),
            this.destroy());
        }
        digest() {
          const n = new Uint8Array(this.oHash.outputLen);
          return (this.digestInto(n), n);
        }
        _cloneInto(n) {
          n || (n = Object.create(Object.getPrototypeOf(this), {}));
          const {
            oHash: e,
            iHash: t,
            finished: r,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (n = n),
            (n.finished = r),
            (n.destroyed = i),
            (n.blockLen = o),
            (n.outputLen = s),
            (n.oHash = e._cloneInto(n.oHash)),
            (n.iHash = t._cloneInto(n.iHash)),
            n
          );
        }
        destroy() {
          ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
        }
      }
      const o = (n, e, t) => new HMAC(n, e).update(t).digest();
      ((e.hmac = o), (e.hmac.create = (n, e) => new HMAC(n, e)));
    },
    5245: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.crypto = void 0),
        (e.crypto = {
          node: void 0,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        }));
    },
    5246: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.sha224 = e.sha256 = void 0));
      const r = t(4383),
        i = t(3183),
        o = (n, e, t) => (n & e) ^ (~n & t),
        s = (n, e, t) => (n & e) ^ (n & t) ^ (e & t),
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
        h = new Uint32Array(64);
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
          const { A: n, B: e, C: t, D: r, E: i, F: o, G: s, H: a } = this;
          return [n, e, t, r, i, o, s, a];
        }
        set(n, e, t, r, i, o, s, a) {
          ((this.A = 0 | n),
            (this.B = 0 | e),
            (this.C = 0 | t),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a));
        }
        process(n, e) {
          for (let i = 0; i < 16; i++, e += 4) h[i] = n.getUint32(e, !1);
          for (let o = 16; o < 64; o++) {
            const n = h[o - 15],
              e = h[o - 2],
              t = (0, i.rotr)(n, 7) ^ (0, i.rotr)(n, 18) ^ (n >>> 3),
              r = (0, i.rotr)(e, 17) ^ (0, i.rotr)(e, 19) ^ (e >>> 10);
            h[o] = (r + h[o - 7] + t + h[o - 16]) | 0;
          }
          let { A: t, B: r, C: c, D: u, E: l, F: f, G: d, H: y } = this;
          for (let p = 0; p < 64; p++) {
            const n =
                (0, i.rotr)(l, 6) ^ (0, i.rotr)(l, 11) ^ (0, i.rotr)(l, 25),
              e = (y + n + o(l, f, d) + a[p] + h[p]) | 0,
              g = (0, i.rotr)(t, 2) ^ (0, i.rotr)(t, 13) ^ (0, i.rotr)(t, 22),
              w = (g + s(t, r, c)) | 0;
            ((y = d),
              (d = f),
              (f = l),
              (l = (u + e) | 0),
              (u = c),
              (c = r),
              (r = t),
              (t = (e + w) | 0));
          }
          ((t = (t + this.A) | 0),
            (r = (r + this.B) | 0),
            (c = (c + this.C) | 0),
            (u = (u + this.D) | 0),
            (l = (l + this.E) | 0),
            (f = (f + this.F) | 0),
            (d = (d + this.G) | 0),
            (y = (y + this.H) | 0),
            this.set(t, r, c, u, l, f, d, y));
        }
        roundClean() {
          h.fill(0);
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
      ((e.sha256 = (0, i.wrapConstructor)(() => new SHA256())),
        (e.sha224 = (0, i.wrapConstructor)(() => new SHA224())));
    },
    5247: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.sha384 =
          e.sha512_256 =
          e.sha512_224 =
          e.sha512 =
          e.SHA512 =
            void 0));
      const r = t(4383),
        i = t(5248),
        o = t(3183),
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
          ].map((n) => BigInt(n)),
        ),
        c = new Uint32Array(80),
        h = new Uint32Array(80);
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
            Ah: n,
            Al: e,
            Bh: t,
            Bl: r,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: c,
            El: h,
            Fh: u,
            Fl: l,
            Gh: f,
            Gl: d,
            Hh: y,
            Hl: p,
          } = this;
          return [n, e, t, r, i, o, s, a, c, h, u, l, f, d, y, p];
        }
        set(n, e, t, r, i, o, s, a, c, h, u, l, f, d, y, p) {
          ((this.Ah = 0 | n),
            (this.Al = 0 | e),
            (this.Bh = 0 | t),
            (this.Bl = 0 | r),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | h),
            (this.Fh = 0 | u),
            (this.Fl = 0 | l),
            (this.Gh = 0 | f),
            (this.Gl = 0 | d),
            (this.Hh = 0 | y),
            (this.Hl = 0 | p));
        }
        process(n, e) {
          for (let i = 0; i < 16; i++, e += 4)
            ((c[i] = n.getUint32(e)), (h[i] = n.getUint32((e += 4))));
          for (let s = 16; s < 80; s++) {
            const n = 0 | c[s - 15],
              e = 0 | h[s - 15],
              t =
                i.default.rotrSH(n, e, 1) ^
                i.default.rotrSH(n, e, 8) ^
                i.default.shrSH(n, e, 7),
              r =
                i.default.rotrSL(n, e, 1) ^
                i.default.rotrSL(n, e, 8) ^
                i.default.shrSL(n, e, 7),
              o = 0 | c[s - 2],
              a = 0 | h[s - 2],
              u =
                i.default.rotrSH(o, a, 19) ^
                i.default.rotrBH(o, a, 61) ^
                i.default.shrSH(o, a, 6),
              l =
                i.default.rotrSL(o, a, 19) ^
                i.default.rotrBL(o, a, 61) ^
                i.default.shrSL(o, a, 6),
              f = i.default.add4L(r, l, h[s - 7], h[s - 16]),
              d = i.default.add4H(f, t, u, c[s - 7], c[s - 16]);
            ((c[s] = 0 | d), (h[s] = 0 | f));
          }
          let {
            Ah: t,
            Al: r,
            Bh: o,
            Bl: u,
            Ch: l,
            Cl: f,
            Dh: d,
            Dl: y,
            Eh: p,
            El: g,
            Fh: w,
            Fl: b,
            Gh: m,
            Gl: v,
            Hh: x,
            Hl: E,
          } = this;
          for (let A = 0; A < 80; A++) {
            const n =
                i.default.rotrSH(p, g, 14) ^
                i.default.rotrSH(p, g, 18) ^
                i.default.rotrBH(p, g, 41),
              e =
                i.default.rotrSL(p, g, 14) ^
                i.default.rotrSL(p, g, 18) ^
                i.default.rotrBL(p, g, 41),
              S = (p & w) ^ (~p & m),
              H = (g & b) ^ (~g & v),
              B = i.default.add5L(E, e, H, a[A], h[A]),
              k = i.default.add5H(B, x, n, S, s[A], c[A]),
              P = 0 | B,
              I =
                i.default.rotrSH(t, r, 28) ^
                i.default.rotrBH(t, r, 34) ^
                i.default.rotrBH(t, r, 39),
              U =
                i.default.rotrSL(t, r, 28) ^
                i.default.rotrBL(t, r, 34) ^
                i.default.rotrBL(t, r, 39),
              L = (t & o) ^ (t & l) ^ (o & l),
              C = (r & u) ^ (r & f) ^ (u & f);
            ((x = 0 | m),
              (E = 0 | v),
              (m = 0 | w),
              (v = 0 | b),
              (w = 0 | p),
              (b = 0 | g),
              ({ h: p, l: g } = i.default.add(0 | d, 0 | y, 0 | k, 0 | P)),
              (d = 0 | l),
              (y = 0 | f),
              (l = 0 | o),
              (f = 0 | u),
              (o = 0 | t),
              (u = 0 | r));
            const T = i.default.add3L(P, U, C);
            ((t = i.default.add3H(T, k, I, L)), (r = 0 | T));
          }
          (({ h: t, l: r } = i.default.add(
            0 | this.Ah,
            0 | this.Al,
            0 | t,
            0 | r,
          )),
            ({ h: o, l: u } = i.default.add(
              0 | this.Bh,
              0 | this.Bl,
              0 | o,
              0 | u,
            )),
            ({ h: l, l: f } = i.default.add(
              0 | this.Ch,
              0 | this.Cl,
              0 | l,
              0 | f,
            )),
            ({ h: d, l: y } = i.default.add(
              0 | this.Dh,
              0 | this.Dl,
              0 | d,
              0 | y,
            )),
            ({ h: p, l: g } = i.default.add(
              0 | this.Eh,
              0 | this.El,
              0 | p,
              0 | g,
            )),
            ({ h: w, l: b } = i.default.add(
              0 | this.Fh,
              0 | this.Fl,
              0 | w,
              0 | b,
            )),
            ({ h: m, l: v } = i.default.add(
              0 | this.Gh,
              0 | this.Gl,
              0 | m,
              0 | v,
            )),
            ({ h: x, l: E } = i.default.add(
              0 | this.Hh,
              0 | this.Hl,
              0 | x,
              0 | E,
            )),
            this.set(t, r, o, u, l, f, d, y, p, g, w, b, m, v, x, E));
        }
        roundClean() {
          (c.fill(0), h.fill(0));
        }
        destroy() {
          (this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      e.SHA512 = SHA512;
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
      ((e.sha512 = (0, o.wrapConstructor)(() => new SHA512())),
        (e.sha512_224 = (0, o.wrapConstructor)(() => new SHA512_224())),
        (e.sha512_256 = (0, o.wrapConstructor)(() => new SHA512_256())),
        (e.sha384 = (0, o.wrapConstructor)(() => new SHA384())));
    },
    5248: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.add = e.toBig = e.split = e.fromBig = void 0));
      const r = BigInt(2 ** 32 - 1),
        i = BigInt(32);
      function o(n, e) {
        return (
          void 0 === e && (e = !1),
          e
            ? { h: Number(n & r), l: Number((n >> i) & r) }
            : { h: 0 | Number((n >> i) & r), l: 0 | Number(n & r) }
        );
      }
      function s(n, e) {
        void 0 === e && (e = !1);
        let t = new Uint32Array(n.length),
          r = new Uint32Array(n.length);
        for (let i = 0; i < n.length; i++) {
          const { h: s, l: a } = o(n[i], e);
          [t[i], r[i]] = [s, a];
        }
        return [t, r];
      }
      ((e.fromBig = o), (e.split = s));
      const a = (n, e) => (BigInt(n >>> 0) << i) | BigInt(e >>> 0);
      e.toBig = a;
      const c = (n, e, t) => n >>> t,
        h = (n, e, t) => (n << (32 - t)) | (e >>> t),
        u = (n, e, t) => (n >>> t) | (e << (32 - t)),
        l = (n, e, t) => (n << (32 - t)) | (e >>> t),
        f = (n, e, t) => (n << (64 - t)) | (e >>> (t - 32)),
        d = (n, e, t) => (n >>> (t - 32)) | (e << (64 - t)),
        y = (n, e) => e,
        p = (n, e) => n,
        g = (n, e, t) => (n << t) | (e >>> (32 - t)),
        w = (n, e, t) => (e << t) | (n >>> (32 - t)),
        b = (n, e, t) => (e << (t - 32)) | (n >>> (64 - t)),
        m = (n, e, t) => (n << (t - 32)) | (e >>> (64 - t));
      function v(n, e, t, r) {
        const i = (e >>> 0) + (r >>> 0);
        return { h: (n + t + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
      }
      e.add = v;
      const x = (n, e, t) => (n >>> 0) + (e >>> 0) + (t >>> 0),
        E = (n, e, t, r) => (e + t + r + ((n / 2 ** 32) | 0)) | 0,
        A = (n, e, t, r) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0),
        S = (n, e, t, r, i) => (e + t + r + i + ((n / 2 ** 32) | 0)) | 0,
        H = (n, e, t, r, i) =>
          (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0),
        B = (n, e, t, r, i, o) => (e + t + r + i + o + ((n / 2 ** 32) | 0)) | 0,
        k = {
          fromBig: o,
          split: s,
          toBig: e.toBig,
          shrSH: c,
          shrSL: h,
          rotrSH: u,
          rotrSL: l,
          rotrBH: f,
          rotrBL: d,
          rotr32H: y,
          rotr32L: p,
          rotlSH: g,
          rotlSL: w,
          rotlBH: b,
          rotlBL: m,
          add: v,
          add3L: x,
          add3H: E,
          add4L: A,
          add4H: S,
          add5H: B,
          add5L: H,
        };
      e.default = k;
    },
    5717: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HDKey = e.HARDENED_OFFSET = void 0));
      var r = t(11447),
        i = t(11449),
        o = t(11450),
        s = t(11451),
        a = t(5718),
        c = t(3972),
        h = l(t(11453)),
        u = t(4695);
      function l(n, e) {
        if ("function" == typeof WeakMap)
          var t = new WeakMap(),
            r = new WeakMap();
        return (l = function (n, e) {
          if (!e && n && n.__esModule) return n;
          var i,
            o,
            s = { __proto__: null, default: n };
          if (null === n || ("object" != typeof n && "function" != typeof n))
            return s;
          if ((i = e ? r : t)) {
            if (i.has(n)) return i.get(n);
            i.set(n, s);
          }
          for (const t in n)
            "default" !== t &&
              {}.hasOwnProperty.call(n, t) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(n, t)) &&
              (o.get || o.set)
                ? i(s, t, o)
                : (s[t] = n[t]));
          return s;
        })(n, e);
      }
      h.utils.hmacSha256Sync = function (n) {
        for (
          var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          t[i - 1] = arguments[i];
        return (0, r.hmac)(o.sha256, n, h.utils.concatBytes(...t));
      };
      const f = (0, u.base58check)(o.sha256);
      function d(n) {
        return BigInt("0x" + (0, c.bytesToHex)(n));
      }
      function y(n) {
        return (0, c.hexToBytes)(n.toString(16).padStart(64, "0"));
      }
      const p = (0, c.utf8ToBytes)("Bitcoin seed"),
        g = { private: 76066276, public: 76067358 },
        w = (e.HARDENED_OFFSET = 2147483648),
        b = (n) => (0, i.ripemd160)((0, o.sha256)(n)),
        m = (n) => (0, c.createView)(n).getUint32(0, !1),
        v = (n) => {
          if (!Number.isSafeInteger(n) || n < 0 || n > 2 ** 32 - 1)
            throw new Error(
              `Invalid number=${n}. Should be from 0 to 2 ** 32 - 1`,
            );
          const e = new Uint8Array(4);
          return ((0, c.createView)(e).setUint32(0, n, !1), e);
        };
      class HDKey {
        constructor(n) {
          if (
            ((this.depth = 0),
            (this.index = 0),
            (this.chainCode = null),
            (this.parentFingerprint = 0),
            !n || "object" !== typeof n)
          )
            throw new Error("HDKey.constructor must not be called directly");
          if (
            ((this.versions = n.versions || g),
            (this.depth = n.depth || 0),
            (this.chainCode = n.chainCode),
            (this.index = n.index || 0),
            (this.parentFingerprint = n.parentFingerprint || 0),
            !this.depth && (this.parentFingerprint || this.index))
          )
            throw new Error(
              "HDKey: zero depth with non-zero index/parent fingerprint",
            );
          if (n.publicKey && n.privateKey)
            throw new Error("HDKey: publicKey and privateKey at same time.");
          if (n.privateKey) {
            if (!h.utils.isValidPrivateKey(n.privateKey))
              throw new Error("Invalid private key");
            ((this.privKey =
              "bigint" === typeof n.privateKey
                ? n.privateKey
                : d(n.privateKey)),
              (this.privKeyBytes = y(this.privKey)),
              (this.pubKey = h.getPublicKey(n.privateKey, !0)));
          } else {
            if (!n.publicKey)
              throw new Error("HDKey: no public or private key provided");
            this.pubKey = h.Point.fromHex(n.publicKey).toRawBytes(!0);
          }
          this.pubHash = b(this.pubKey);
        }
        get fingerprint() {
          if (!this.pubHash) throw new Error("No publicKey set!");
          return m(this.pubHash);
        }
        get identifier() {
          return this.pubHash;
        }
        get pubKeyHash() {
          return this.pubHash;
        }
        get privateKey() {
          return this.privKeyBytes || null;
        }
        get publicKey() {
          return this.pubKey || null;
        }
        get privateExtendedKey() {
          const n = this.privateKey;
          if (!n) throw new Error("No private key");
          return f.encode(
            this.serialize(
              this.versions.private,
              (0, c.concatBytes)(new Uint8Array([0]), n),
            ),
          );
        }
        get publicExtendedKey() {
          if (!this.pubKey) throw new Error("No public key");
          return f.encode(this.serialize(this.versions.public, this.pubKey));
        }
        static fromMasterSeed(n, e) {
          if (
            (void 0 === e && (e = g),
            (0, a.bytes)(n),
            8 * n.length < 128 || 8 * n.length > 512)
          )
            throw new Error(
              `HDKey: wrong seed length=${n.length}. Should be between 128 and 512 bits; 256 bits is advised)`,
            );
          const t = (0, r.hmac)(s.sha512, p, n);
          return new HDKey({
            versions: e,
            chainCode: t.slice(32),
            privateKey: t.slice(0, 32),
          });
        }
        static fromExtendedKey(n, e) {
          void 0 === e && (e = g);
          const t = f.decode(n),
            r = (0, c.createView)(t),
            i = r.getUint32(0, !1),
            o = {
              versions: e,
              depth: t[4],
              parentFingerprint: r.getUint32(5, !1),
              index: r.getUint32(9, !1),
              chainCode: t.slice(13, 45),
            },
            s = t.slice(45),
            a = 0 === s[0];
          if (i !== e[a ? "private" : "public"])
            throw new Error("Version mismatch");
          return new HDKey(
            a ? { ...o, privateKey: s.slice(1) } : { ...o, publicKey: s },
          );
        }
        static fromJSON(n) {
          return HDKey.fromExtendedKey(n.xpriv);
        }
        derive(n) {
          if (!/^[mM]'?/.test(n))
            throw new Error('Path must start with "m" or "M"');
          if (/^[mM]'?$/.test(n)) return this;
          const e = n.replace(/^[mM]'?\//, "").split("/");
          let t = this;
          for (const r of e) {
            const n = /^(\d+)('?)$/.exec(r);
            if (!n || 3 !== n.length)
              throw new Error("Invalid child index: " + r);
            let e = +n[1];
            if (!Number.isSafeInteger(e) || e >= w)
              throw new Error("Invalid index");
            ("'" === n[2] && (e += w), (t = t.deriveChild(e)));
          }
          return t;
        }
        deriveChild(n) {
          if (!this.pubKey || !this.chainCode)
            throw new Error("No publicKey or chainCode set");
          let e = v(n);
          if (n >= w) {
            const n = this.privateKey;
            if (!n) throw new Error("Could not derive hardened child key");
            e = (0, c.concatBytes)(new Uint8Array([0]), n, e);
          } else e = (0, c.concatBytes)(this.pubKey, e);
          const t = (0, r.hmac)(s.sha512, this.chainCode, e),
            i = d(t.slice(0, 32)),
            o = t.slice(32);
          if (!h.utils.isValidPrivateKey(i))
            throw new Error("Tweak bigger than curve order");
          const a = {
            versions: this.versions,
            chainCode: o,
            depth: this.depth + 1,
            parentFingerprint: this.fingerprint,
            index: n,
          };
          try {
            if (this.privateKey) {
              const n = h.utils.mod(this.privKey + i, h.CURVE.n);
              if (!h.utils.isValidPrivateKey(n))
                throw new Error(
                  "The tweak was out of range or the resulted private key is invalid",
                );
              a.privateKey = n;
            } else {
              const n = h.Point.fromHex(this.pubKey).add(
                h.Point.fromPrivateKey(i),
              );
              if (n.equals(h.Point.ZERO))
                throw new Error(
                  "The tweak was equal to negative P, which made the result key invalid",
                );
              a.publicKey = n.toRawBytes(!0);
            }
            return new HDKey(a);
          } catch (u) {
            return this.deriveChild(n + 1);
          }
        }
        sign(n) {
          if (!this.privateKey) throw new Error("No privateKey set!");
          return (
            (0, a.bytes)(n, 32),
            h.signSync(n, this.privKey, { canonical: !0, der: !1 })
          );
        }
        verify(n, e) {
          if (((0, a.bytes)(n, 32), (0, a.bytes)(e, 64), !this.publicKey))
            throw new Error("No publicKey set!");
          let t;
          try {
            t = h.Signature.fromCompact(e);
          } catch (r) {
            return !1;
          }
          return h.verify(t, n, this.publicKey);
        }
        wipePrivateData() {
          return (
            (this.privKey = void 0),
            this.privKeyBytes &&
              (this.privKeyBytes.fill(0), (this.privKeyBytes = void 0)),
            this
          );
        }
        toJSON() {
          return {
            xpriv: this.privateExtendedKey,
            xpub: this.publicExtendedKey,
          };
        }
        serialize(n, e) {
          if (!this.chainCode) throw new Error("No chainCode set");
          return (
            (0, a.bytes)(e, 33),
            (0, c.concatBytes)(
              v(n),
              new Uint8Array([this.depth]),
              v(this.parentFingerprint),
              v(this.index),
              this.chainCode,
              e,
            )
          );
        }
      }
      e.HDKey = HDKey;
    },
    5718: function (n, e, t) {
      "use strict";
      function r(n) {
        if (!Number.isSafeInteger(n) || n < 0)
          throw new Error("Wrong positive integer: " + n);
      }
      function i(n) {
        if ("boolean" !== typeof n)
          throw new Error("Expected boolean, not " + n);
      }
      function o(n) {
        if (!(n instanceof Uint8Array))
          throw new TypeError("Expected Uint8Array");
        for (
          var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          t[r - 1] = arguments[r];
        if (t.length > 0 && !t.includes(n.length))
          throw new TypeError(
            `Expected Uint8Array of length ${t}, not of length=${n.length}`,
          );
      }
      function s(n) {
        if ("function" !== typeof n || "function" !== typeof n.create)
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        (r(n.outputLen), r(n.blockLen));
      }
      function a(n, e) {
        if ((void 0 === e && (e = !0), n.destroyed))
          throw new Error("Hash instance has been destroyed");
        if (e && n.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function c(n, e) {
        o(n);
        const t = e.outputLen;
        if (n.length < t)
          throw new Error(
            "digestInto() expects output buffer of length at least " + t,
          );
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.output = e.exists = e.hash = e.bytes = e.bool = e.number = void 0),
        (e.number = r),
        (e.bool = i),
        (e.bytes = o),
        (e.hash = s),
        (e.exists = a),
        (e.output = c));
      const h = { number: r, bool: i, bytes: o, hash: s, exists: a, output: c };
      e.default = h;
    },
    5719: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SHA2 = void 0));
      const r = t(5718),
        i = t(3972);
      function o(n, e, t, r) {
        if ("function" === typeof n.setBigUint64)
          return n.setBigUint64(e, t, r);
        const i = BigInt(32),
          o = BigInt(4294967295),
          s = Number((t >> i) & o),
          a = Number(t & o),
          c = r ? 4 : 0,
          h = r ? 0 : 4;
        (n.setUint32(e + c, s, r), n.setUint32(e + h, a, r));
      }
      class SHA2 extends i.Hash {
        constructor(n, e, t, r) {
          (super(),
            (this.blockLen = n),
            (this.outputLen = e),
            (this.padOffset = t),
            (this.isLE = r),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(n)),
            (this.view = (0, i.createView)(this.buffer)));
        }
        update(n) {
          r.default.exists(this);
          const { view: e, buffer: t, blockLen: o } = this;
          n = (0, i.toBytes)(n);
          const s = n.length;
          for (let r = 0; r < s; ) {
            const a = Math.min(o - this.pos, s - r);
            if (a !== o)
              (t.set(n.subarray(r, r + a), this.pos),
                (this.pos += a),
                (r += a),
                this.pos === o && (this.process(e, 0), (this.pos = 0)));
            else {
              const e = (0, i.createView)(n);
              for (; o <= s - r; r += o) this.process(e, r);
            }
          }
          return ((this.length += n.length), this.roundClean(), this);
        }
        digestInto(n) {
          (r.default.exists(this),
            r.default.output(n, this),
            (this.finished = !0));
          const { buffer: e, view: t, blockLen: s, isLE: a } = this;
          let { pos: c } = this;
          ((e[c++] = 128),
            this.buffer.subarray(c).fill(0),
            this.padOffset > s - c && (this.process(t, 0), (c = 0)));
          for (let r = c; r < s; r++) e[r] = 0;
          (o(t, s - 8, BigInt(8 * this.length), a), this.process(t, 0));
          const h = (0, i.createView)(n),
            u = this.outputLen;
          if (u % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const l = u / 4,
            f = this.get();
          if (l > f.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let r = 0; r < l; r++) h.setUint32(4 * r, f[r], a);
        }
        digest() {
          const { buffer: n, outputLen: e } = this;
          this.digestInto(n);
          const t = n.slice(0, e);
          return (this.destroy(), t);
        }
        _cloneInto(n) {
          (n || (n = new this.constructor()), n.set(...this.get()));
          const {
            blockLen: e,
            buffer: t,
            length: r,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (n.length = r),
            (n.pos = s),
            (n.finished = i),
            (n.destroyed = o),
            r % e && n.buffer.set(t),
            n
          );
        }
      }
      e.SHA2 = SHA2;
    },
    5723: function (n, e) {},
    6924: function (n, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.wordlist = void 0),
        (e.wordlist =
          "abandon\nability\nable\nabout\nabove\nabsent\nabsorb\nabstract\nabsurd\nabuse\naccess\naccident\naccount\naccuse\nachieve\nacid\nacoustic\nacquire\nacross\nact\naction\nactor\nactress\nactual\nadapt\nadd\naddict\naddress\nadjust\nadmit\nadult\nadvance\nadvice\naerobic\naffair\nafford\nafraid\nagain\nage\nagent\nagree\nahead\naim\nair\nairport\naisle\nalarm\nalbum\nalcohol\nalert\nalien\nall\nalley\nallow\nalmost\nalone\nalpha\nalready\nalso\nalter\nalways\namateur\namazing\namong\namount\namused\nanalyst\nanchor\nancient\nanger\nangle\nangry\nanimal\nankle\nannounce\nannual\nanother\nanswer\nantenna\nantique\nanxiety\nany\napart\napology\nappear\napple\napprove\napril\narch\narctic\narea\narena\nargue\narm\narmed\narmor\narmy\naround\narrange\narrest\narrive\narrow\nart\nartefact\nartist\nartwork\nask\naspect\nassault\nasset\nassist\nassume\nasthma\nathlete\natom\nattack\nattend\nattitude\nattract\nauction\naudit\naugust\naunt\nauthor\nauto\nautumn\naverage\navocado\navoid\nawake\naware\naway\nawesome\nawful\nawkward\naxis\nbaby\nbachelor\nbacon\nbadge\nbag\nbalance\nbalcony\nball\nbamboo\nbanana\nbanner\nbar\nbarely\nbargain\nbarrel\nbase\nbasic\nbasket\nbattle\nbeach\nbean\nbeauty\nbecause\nbecome\nbeef\nbefore\nbegin\nbehave\nbehind\nbelieve\nbelow\nbelt\nbench\nbenefit\nbest\nbetray\nbetter\nbetween\nbeyond\nbicycle\nbid\nbike\nbind\nbiology\nbird\nbirth\nbitter\nblack\nblade\nblame\nblanket\nblast\nbleak\nbless\nblind\nblood\nblossom\nblouse\nblue\nblur\nblush\nboard\nboat\nbody\nboil\nbomb\nbone\nbonus\nbook\nboost\nborder\nboring\nborrow\nboss\nbottom\nbounce\nbox\nboy\nbracket\nbrain\nbrand\nbrass\nbrave\nbread\nbreeze\nbrick\nbridge\nbrief\nbright\nbring\nbrisk\nbroccoli\nbroken\nbronze\nbroom\nbrother\nbrown\nbrush\nbubble\nbuddy\nbudget\nbuffalo\nbuild\nbulb\nbulk\nbullet\nbundle\nbunker\nburden\nburger\nburst\nbus\nbusiness\nbusy\nbutter\nbuyer\nbuzz\ncabbage\ncabin\ncable\ncactus\ncage\ncake\ncall\ncalm\ncamera\ncamp\ncan\ncanal\ncancel\ncandy\ncannon\ncanoe\ncanvas\ncanyon\ncapable\ncapital\ncaptain\ncar\ncarbon\ncard\ncargo\ncarpet\ncarry\ncart\ncase\ncash\ncasino\ncastle\ncasual\ncat\ncatalog\ncatch\ncategory\ncattle\ncaught\ncause\ncaution\ncave\nceiling\ncelery\ncement\ncensus\ncentury\ncereal\ncertain\nchair\nchalk\nchampion\nchange\nchaos\nchapter\ncharge\nchase\nchat\ncheap\ncheck\ncheese\nchef\ncherry\nchest\nchicken\nchief\nchild\nchimney\nchoice\nchoose\nchronic\nchuckle\nchunk\nchurn\ncigar\ncinnamon\ncircle\ncitizen\ncity\ncivil\nclaim\nclap\nclarify\nclaw\nclay\nclean\nclerk\nclever\nclick\nclient\ncliff\nclimb\nclinic\nclip\nclock\nclog\nclose\ncloth\ncloud\nclown\nclub\nclump\ncluster\nclutch\ncoach\ncoast\ncoconut\ncode\ncoffee\ncoil\ncoin\ncollect\ncolor\ncolumn\ncombine\ncome\ncomfort\ncomic\ncommon\ncompany\nconcert\nconduct\nconfirm\ncongress\nconnect\nconsider\ncontrol\nconvince\ncook\ncool\ncopper\ncopy\ncoral\ncore\ncorn\ncorrect\ncost\ncotton\ncouch\ncountry\ncouple\ncourse\ncousin\ncover\ncoyote\ncrack\ncradle\ncraft\ncram\ncrane\ncrash\ncrater\ncrawl\ncrazy\ncream\ncredit\ncreek\ncrew\ncricket\ncrime\ncrisp\ncritic\ncrop\ncross\ncrouch\ncrowd\ncrucial\ncruel\ncruise\ncrumble\ncrunch\ncrush\ncry\ncrystal\ncube\nculture\ncup\ncupboard\ncurious\ncurrent\ncurtain\ncurve\ncushion\ncustom\ncute\ncycle\ndad\ndamage\ndamp\ndance\ndanger\ndaring\ndash\ndaughter\ndawn\nday\ndeal\ndebate\ndebris\ndecade\ndecember\ndecide\ndecline\ndecorate\ndecrease\ndeer\ndefense\ndefine\ndefy\ndegree\ndelay\ndeliver\ndemand\ndemise\ndenial\ndentist\ndeny\ndepart\ndepend\ndeposit\ndepth\ndeputy\nderive\ndescribe\ndesert\ndesign\ndesk\ndespair\ndestroy\ndetail\ndetect\ndevelop\ndevice\ndevote\ndiagram\ndial\ndiamond\ndiary\ndice\ndiesel\ndiet\ndiffer\ndigital\ndignity\ndilemma\ndinner\ndinosaur\ndirect\ndirt\ndisagree\ndiscover\ndisease\ndish\ndismiss\ndisorder\ndisplay\ndistance\ndivert\ndivide\ndivorce\ndizzy\ndoctor\ndocument\ndog\ndoll\ndolphin\ndomain\ndonate\ndonkey\ndonor\ndoor\ndose\ndouble\ndove\ndraft\ndragon\ndrama\ndrastic\ndraw\ndream\ndress\ndrift\ndrill\ndrink\ndrip\ndrive\ndrop\ndrum\ndry\nduck\ndumb\ndune\nduring\ndust\ndutch\nduty\ndwarf\ndynamic\neager\neagle\nearly\nearn\nearth\neasily\neast\neasy\necho\necology\neconomy\nedge\nedit\neducate\neffort\negg\neight\neither\nelbow\nelder\nelectric\nelegant\nelement\nelephant\nelevator\nelite\nelse\nembark\nembody\nembrace\nemerge\nemotion\nemploy\nempower\nempty\nenable\nenact\nend\nendless\nendorse\nenemy\nenergy\nenforce\nengage\nengine\nenhance\nenjoy\nenlist\nenough\nenrich\nenroll\nensure\nenter\nentire\nentry\nenvelope\nepisode\nequal\nequip\nera\nerase\nerode\nerosion\nerror\nerupt\nescape\nessay\nessence\nestate\neternal\nethics\nevidence\nevil\nevoke\nevolve\nexact\nexample\nexcess\nexchange\nexcite\nexclude\nexcuse\nexecute\nexercise\nexhaust\nexhibit\nexile\nexist\nexit\nexotic\nexpand\nexpect\nexpire\nexplain\nexpose\nexpress\nextend\nextra\neye\neyebrow\nfabric\nface\nfaculty\nfade\nfaint\nfaith\nfall\nfalse\nfame\nfamily\nfamous\nfan\nfancy\nfantasy\nfarm\nfashion\nfat\nfatal\nfather\nfatigue\nfault\nfavorite\nfeature\nfebruary\nfederal\nfee\nfeed\nfeel\nfemale\nfence\nfestival\nfetch\nfever\nfew\nfiber\nfiction\nfield\nfigure\nfile\nfilm\nfilter\nfinal\nfind\nfine\nfinger\nfinish\nfire\nfirm\nfirst\nfiscal\nfish\nfit\nfitness\nfix\nflag\nflame\nflash\nflat\nflavor\nflee\nflight\nflip\nfloat\nflock\nfloor\nflower\nfluid\nflush\nfly\nfoam\nfocus\nfog\nfoil\nfold\nfollow\nfood\nfoot\nforce\nforest\nforget\nfork\nfortune\nforum\nforward\nfossil\nfoster\nfound\nfox\nfragile\nframe\nfrequent\nfresh\nfriend\nfringe\nfrog\nfront\nfrost\nfrown\nfrozen\nfruit\nfuel\nfun\nfunny\nfurnace\nfury\nfuture\ngadget\ngain\ngalaxy\ngallery\ngame\ngap\ngarage\ngarbage\ngarden\ngarlic\ngarment\ngas\ngasp\ngate\ngather\ngauge\ngaze\ngeneral\ngenius\ngenre\ngentle\ngenuine\ngesture\nghost\ngiant\ngift\ngiggle\nginger\ngiraffe\ngirl\ngive\nglad\nglance\nglare\nglass\nglide\nglimpse\nglobe\ngloom\nglory\nglove\nglow\nglue\ngoat\ngoddess\ngold\ngood\ngoose\ngorilla\ngospel\ngossip\ngovern\ngown\ngrab\ngrace\ngrain\ngrant\ngrape\ngrass\ngravity\ngreat\ngreen\ngrid\ngrief\ngrit\ngrocery\ngroup\ngrow\ngrunt\nguard\nguess\nguide\nguilt\nguitar\ngun\ngym\nhabit\nhair\nhalf\nhammer\nhamster\nhand\nhappy\nharbor\nhard\nharsh\nharvest\nhat\nhave\nhawk\nhazard\nhead\nhealth\nheart\nheavy\nhedgehog\nheight\nhello\nhelmet\nhelp\nhen\nhero\nhidden\nhigh\nhill\nhint\nhip\nhire\nhistory\nhobby\nhockey\nhold\nhole\nholiday\nhollow\nhome\nhoney\nhood\nhope\nhorn\nhorror\nhorse\nhospital\nhost\nhotel\nhour\nhover\nhub\nhuge\nhuman\nhumble\nhumor\nhundred\nhungry\nhunt\nhurdle\nhurry\nhurt\nhusband\nhybrid\nice\nicon\nidea\nidentify\nidle\nignore\nill\nillegal\nillness\nimage\nimitate\nimmense\nimmune\nimpact\nimpose\nimprove\nimpulse\ninch\ninclude\nincome\nincrease\nindex\nindicate\nindoor\nindustry\ninfant\ninflict\ninform\ninhale\ninherit\ninitial\ninject\ninjury\ninmate\ninner\ninnocent\ninput\ninquiry\ninsane\ninsect\ninside\ninspire\ninstall\nintact\ninterest\ninto\ninvest\ninvite\ninvolve\niron\nisland\nisolate\nissue\nitem\nivory\njacket\njaguar\njar\njazz\njealous\njeans\njelly\njewel\njob\njoin\njoke\njourney\njoy\njudge\njuice\njump\njungle\njunior\njunk\njust\nkangaroo\nkeen\nkeep\nketchup\nkey\nkick\nkid\nkidney\nkind\nkingdom\nkiss\nkit\nkitchen\nkite\nkitten\nkiwi\nknee\nknife\nknock\nknow\nlab\nlabel\nlabor\nladder\nlady\nlake\nlamp\nlanguage\nlaptop\nlarge\nlater\nlatin\nlaugh\nlaundry\nlava\nlaw\nlawn\nlawsuit\nlayer\nlazy\nleader\nleaf\nlearn\nleave\nlecture\nleft\nleg\nlegal\nlegend\nleisure\nlemon\nlend\nlength\nlens\nleopard\nlesson\nletter\nlevel\nliar\nliberty\nlibrary\nlicense\nlife\nlift\nlight\nlike\nlimb\nlimit\nlink\nlion\nliquid\nlist\nlittle\nlive\nlizard\nload\nloan\nlobster\nlocal\nlock\nlogic\nlonely\nlong\nloop\nlottery\nloud\nlounge\nlove\nloyal\nlucky\nluggage\nlumber\nlunar\nlunch\nluxury\nlyrics\nmachine\nmad\nmagic\nmagnet\nmaid\nmail\nmain\nmajor\nmake\nmammal\nman\nmanage\nmandate\nmango\nmansion\nmanual\nmaple\nmarble\nmarch\nmargin\nmarine\nmarket\nmarriage\nmask\nmass\nmaster\nmatch\nmaterial\nmath\nmatrix\nmatter\nmaximum\nmaze\nmeadow\nmean\nmeasure\nmeat\nmechanic\nmedal\nmedia\nmelody\nmelt\nmember\nmemory\nmention\nmenu\nmercy\nmerge\nmerit\nmerry\nmesh\nmessage\nmetal\nmethod\nmiddle\nmidnight\nmilk\nmillion\nmimic\nmind\nminimum\nminor\nminute\nmiracle\nmirror\nmisery\nmiss\nmistake\nmix\nmixed\nmixture\nmobile\nmodel\nmodify\nmom\nmoment\nmonitor\nmonkey\nmonster\nmonth\nmoon\nmoral\nmore\nmorning\nmosquito\nmother\nmotion\nmotor\nmountain\nmouse\nmove\nmovie\nmuch\nmuffin\nmule\nmultiply\nmuscle\nmuseum\nmushroom\nmusic\nmust\nmutual\nmyself\nmystery\nmyth\nnaive\nname\nnapkin\nnarrow\nnasty\nnation\nnature\nnear\nneck\nneed\nnegative\nneglect\nneither\nnephew\nnerve\nnest\nnet\nnetwork\nneutral\nnever\nnews\nnext\nnice\nnight\nnoble\nnoise\nnominee\nnoodle\nnormal\nnorth\nnose\nnotable\nnote\nnothing\nnotice\nnovel\nnow\nnuclear\nnumber\nnurse\nnut\noak\nobey\nobject\noblige\nobscure\nobserve\nobtain\nobvious\noccur\nocean\noctober\nodor\noff\noffer\noffice\noften\noil\nokay\nold\nolive\nolympic\nomit\nonce\none\nonion\nonline\nonly\nopen\nopera\nopinion\noppose\noption\norange\norbit\norchard\norder\nordinary\norgan\norient\noriginal\norphan\nostrich\nother\noutdoor\nouter\noutput\noutside\noval\noven\nover\nown\nowner\noxygen\noyster\nozone\npact\npaddle\npage\npair\npalace\npalm\npanda\npanel\npanic\npanther\npaper\nparade\nparent\npark\nparrot\nparty\npass\npatch\npath\npatient\npatrol\npattern\npause\npave\npayment\npeace\npeanut\npear\npeasant\npelican\npen\npenalty\npencil\npeople\npepper\nperfect\npermit\nperson\npet\nphone\nphoto\nphrase\nphysical\npiano\npicnic\npicture\npiece\npig\npigeon\npill\npilot\npink\npioneer\npipe\npistol\npitch\npizza\nplace\nplanet\nplastic\nplate\nplay\nplease\npledge\npluck\nplug\nplunge\npoem\npoet\npoint\npolar\npole\npolice\npond\npony\npool\npopular\nportion\nposition\npossible\npost\npotato\npottery\npoverty\npowder\npower\npractice\npraise\npredict\nprefer\nprepare\npresent\npretty\nprevent\nprice\npride\nprimary\nprint\npriority\nprison\nprivate\nprize\nproblem\nprocess\nproduce\nprofit\nprogram\nproject\npromote\nproof\nproperty\nprosper\nprotect\nproud\nprovide\npublic\npudding\npull\npulp\npulse\npumpkin\npunch\npupil\npuppy\npurchase\npurity\npurpose\npurse\npush\nput\npuzzle\npyramid\nquality\nquantum\nquarter\nquestion\nquick\nquit\nquiz\nquote\nrabbit\nraccoon\nrace\nrack\nradar\nradio\nrail\nrain\nraise\nrally\nramp\nranch\nrandom\nrange\nrapid\nrare\nrate\nrather\nraven\nraw\nrazor\nready\nreal\nreason\nrebel\nrebuild\nrecall\nreceive\nrecipe\nrecord\nrecycle\nreduce\nreflect\nreform\nrefuse\nregion\nregret\nregular\nreject\nrelax\nrelease\nrelief\nrely\nremain\nremember\nremind\nremove\nrender\nrenew\nrent\nreopen\nrepair\nrepeat\nreplace\nreport\nrequire\nrescue\nresemble\nresist\nresource\nresponse\nresult\nretire\nretreat\nreturn\nreunion\nreveal\nreview\nreward\nrhythm\nrib\nribbon\nrice\nrich\nride\nridge\nrifle\nright\nrigid\nring\nriot\nripple\nrisk\nritual\nrival\nriver\nroad\nroast\nrobot\nrobust\nrocket\nromance\nroof\nrookie\nroom\nrose\nrotate\nrough\nround\nroute\nroyal\nrubber\nrude\nrug\nrule\nrun\nrunway\nrural\nsad\nsaddle\nsadness\nsafe\nsail\nsalad\nsalmon\nsalon\nsalt\nsalute\nsame\nsample\nsand\nsatisfy\nsatoshi\nsauce\nsausage\nsave\nsay\nscale\nscan\nscare\nscatter\nscene\nscheme\nschool\nscience\nscissors\nscorpion\nscout\nscrap\nscreen\nscript\nscrub\nsea\nsearch\nseason\nseat\nsecond\nsecret\nsection\nsecurity\nseed\nseek\nsegment\nselect\nsell\nseminar\nsenior\nsense\nsentence\nseries\nservice\nsession\nsettle\nsetup\nseven\nshadow\nshaft\nshallow\nshare\nshed\nshell\nsheriff\nshield\nshift\nshine\nship\nshiver\nshock\nshoe\nshoot\nshop\nshort\nshoulder\nshove\nshrimp\nshrug\nshuffle\nshy\nsibling\nsick\nside\nsiege\nsight\nsign\nsilent\nsilk\nsilly\nsilver\nsimilar\nsimple\nsince\nsing\nsiren\nsister\nsituate\nsix\nsize\nskate\nsketch\nski\nskill\nskin\nskirt\nskull\nslab\nslam\nsleep\nslender\nslice\nslide\nslight\nslim\nslogan\nslot\nslow\nslush\nsmall\nsmart\nsmile\nsmoke\nsmooth\nsnack\nsnake\nsnap\nsniff\nsnow\nsoap\nsoccer\nsocial\nsock\nsoda\nsoft\nsolar\nsoldier\nsolid\nsolution\nsolve\nsomeone\nsong\nsoon\nsorry\nsort\nsoul\nsound\nsoup\nsource\nsouth\nspace\nspare\nspatial\nspawn\nspeak\nspecial\nspeed\nspell\nspend\nsphere\nspice\nspider\nspike\nspin\nspirit\nsplit\nspoil\nsponsor\nspoon\nsport\nspot\nspray\nspread\nspring\nspy\nsquare\nsqueeze\nsquirrel\nstable\nstadium\nstaff\nstage\nstairs\nstamp\nstand\nstart\nstate\nstay\nsteak\nsteel\nstem\nstep\nstereo\nstick\nstill\nsting\nstock\nstomach\nstone\nstool\nstory\nstove\nstrategy\nstreet\nstrike\nstrong\nstruggle\nstudent\nstuff\nstumble\nstyle\nsubject\nsubmit\nsubway\nsuccess\nsuch\nsudden\nsuffer\nsugar\nsuggest\nsuit\nsummer\nsun\nsunny\nsunset\nsuper\nsupply\nsupreme\nsure\nsurface\nsurge\nsurprise\nsurround\nsurvey\nsuspect\nsustain\nswallow\nswamp\nswap\nswarm\nswear\nsweet\nswift\nswim\nswing\nswitch\nsword\nsymbol\nsymptom\nsyrup\nsystem\ntable\ntackle\ntag\ntail\ntalent\ntalk\ntank\ntape\ntarget\ntask\ntaste\ntattoo\ntaxi\nteach\nteam\ntell\nten\ntenant\ntennis\ntent\nterm\ntest\ntext\nthank\nthat\ntheme\nthen\ntheory\nthere\nthey\nthing\nthis\nthought\nthree\nthrive\nthrow\nthumb\nthunder\nticket\ntide\ntiger\ntilt\ntimber\ntime\ntiny\ntip\ntired\ntissue\ntitle\ntoast\ntobacco\ntoday\ntoddler\ntoe\ntogether\ntoilet\ntoken\ntomato\ntomorrow\ntone\ntongue\ntonight\ntool\ntooth\ntop\ntopic\ntopple\ntorch\ntornado\ntortoise\ntoss\ntotal\ntourist\ntoward\ntower\ntown\ntoy\ntrack\ntrade\ntraffic\ntragic\ntrain\ntransfer\ntrap\ntrash\ntravel\ntray\ntreat\ntree\ntrend\ntrial\ntribe\ntrick\ntrigger\ntrim\ntrip\ntrophy\ntrouble\ntruck\ntrue\ntruly\ntrumpet\ntrust\ntruth\ntry\ntube\ntuition\ntumble\ntuna\ntunnel\nturkey\nturn\nturtle\ntwelve\ntwenty\ntwice\ntwin\ntwist\ntwo\ntype\ntypical\nugly\numbrella\nunable\nunaware\nuncle\nuncover\nunder\nundo\nunfair\nunfold\nunhappy\nuniform\nunique\nunit\nuniverse\nunknown\nunlock\nuntil\nunusual\nunveil\nupdate\nupgrade\nuphold\nupon\nupper\nupset\nurban\nurge\nusage\nuse\nused\nuseful\nuseless\nusual\nutility\nvacant\nvacuum\nvague\nvalid\nvalley\nvalve\nvan\nvanish\nvapor\nvarious\nvast\nvault\nvehicle\nvelvet\nvendor\nventure\nvenue\nverb\nverify\nversion\nvery\nvessel\nveteran\nviable\nvibrant\nvicious\nvictory\nvideo\nview\nvillage\nvintage\nviolin\nvirtual\nvirus\nvisa\nvisit\nvisual\nvital\nvivid\nvocal\nvoice\nvoid\nvolcano\nvolume\nvote\nvoyage\nwage\nwagon\nwait\nwalk\nwall\nwalnut\nwant\nwarfare\nwarm\nwarrior\nwash\nwasp\nwaste\nwater\nwave\nway\nwealth\nweapon\nwear\nweasel\nweather\nweb\nwedding\nweekend\nweird\nwelcome\nwest\nwet\nwhale\nwhat\nwheat\nwheel\nwhen\nwhere\nwhip\nwhisper\nwide\nwidth\nwife\nwild\nwill\nwin\nwindow\nwine\nwing\nwink\nwinner\nwinter\nwire\nwisdom\nwise\nwish\nwitness\nwolf\nwoman\nwonder\nwood\nwool\nword\nwork\nworld\nworry\nworth\nwrap\nwreck\nwrestle\nwrist\nwrite\nwrong\nyard\nyear\nyellow\nyou\nyoung\nyouth\nzebra\nzero\nzone\nzoo".split(
            "\n",
          )));
    },
  },
]);
