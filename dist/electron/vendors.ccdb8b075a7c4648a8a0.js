(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [159, 358],
  {
    11446: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateWallet =
          t.generateSecretKey =
          t.generateNewAccount =
            void 0));
      var r = n(4694),
        i = n(6924),
        o = n(5717),
        a = n(3851),
        s = n(6931),
        c = n(4880),
        u = n(5716),
        l = n(2778);
      const d = function (e) {
        void 0 === e && (e = 256);
        const t = (0, r.generateMnemonic)(i.wordlist, e);
        return t;
      };
      t.generateSecretKey = d;
      const f = async (e) => {
        let { secretKey: t, password: n } = e;
        const i = await (0, s.encrypt)(t, n),
          a = (0, l.bytesToHex)(i),
          u = await (0, r.mnemonicToSeed)(t),
          d = o.HDKey.fromMasterSeed(u),
          f = await (0, c.deriveWalletKeys)(d),
          y = {
            ...f,
            encryptedSecretKey: a,
            accounts: [],
            config: { accounts: [] },
          };
        return p(y);
      };
      t.generateWallet = f;
      const p = (e) => {
        const t = e.accounts.length,
          n = (0, c.deriveAccount)({
            rootNode: (0, a.getRootNode)(e),
            index: t,
            salt: e.salt,
            stxDerivationType: u.DerivationType.Wallet,
          });
        return { ...e, accounts: [...e.accounts, n] };
      };
      t.generateNewAccount = p;
    },
    11480: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ripemd160 = t.RIPEMD160 = void 0));
      const r = n(5731),
        i = n(4596),
        o = new Uint8Array([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        a = Uint8Array.from({ length: 16 }, (e, t) => t),
        s = a.map((e) => (9 * e + 5) % 16);
      let c = [a],
        u = [s];
      for (let T = 0; T < 4; T++)
        for (let e of [c, u]) e.push(e[T].map((e) => o[e]));
      const l = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((e) => new Uint8Array(e)),
        d = c.map((e, t) => e.map((e) => l[t][e])),
        f = u.map((e, t) => e.map((e) => l[t][e])),
        p = new Uint32Array([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        y = new Uint32Array([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]),
        h = (e, t) => (e << t) | (e >>> (32 - t));
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
            a = 0 | this.h2,
            s = a,
            l = 0 | this.h3,
            T = l,
            C = 0 | this.h4,
            S = C;
          for (let m = 0; m < 5; m++) {
            const e = 4 - m,
              t = p[m],
              v = y[m],
              P = c[m],
              w = u[m],
              A = d[m],
              E = f[m];
            for (let r = 0; r < 16; r++) {
              const e = (h(n + g(m, i, a, l) + b[P[r]] + t, A[r]) + C) | 0;
              ((n = C), (C = l), (l = 0 | h(a, 10)), (a = i), (i = e));
            }
            for (let n = 0; n < 16; n++) {
              const t = (h(r + g(e, o, s, T) + b[w[n]] + v, E[n]) + S) | 0;
              ((r = S), (S = T), (T = 0 | h(s, 10)), (s = o), (o = t));
            }
          }
          this.set(
            (this.h1 + a + T) | 0,
            (this.h2 + l + S) | 0,
            (this.h3 + C + r) | 0,
            (this.h4 + n + o) | 0,
            (this.h0 + i + s) | 0,
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
    11481: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto = {
          node: void 0,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        }));
    },
    11482: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha384 =
          t.sha512_256 =
          t.sha512_224 =
          t.sha512 =
          t.SHA512 =
            void 0));
      const r = n(5731),
        i = n(11483),
        o = n(4596),
        [a, s] = i.default.split(
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
            Dh: a,
            Dl: s,
            Eh: c,
            El: u,
            Fh: l,
            Fl: d,
            Gh: f,
            Gl: p,
            Hh: y,
            Hl: h,
          } = this;
          return [e, t, n, r, i, o, a, s, c, u, l, d, f, p, y, h];
        }
        set(e, t, n, r, i, o, a, s, c, u, l, d, f, p, y, h) {
          ((this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | n),
            (this.Bl = 0 | r),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | a),
            (this.Dl = 0 | s),
            (this.Eh = 0 | c),
            (this.El = 0 | u),
            (this.Fh = 0 | l),
            (this.Fl = 0 | d),
            (this.Gh = 0 | f),
            (this.Gl = 0 | p),
            (this.Hh = 0 | y),
            (this.Hl = 0 | h));
        }
        process(e, t) {
          for (let i = 0; i < 16; i++, t += 4)
            ((c[i] = e.getUint32(t)), (u[i] = e.getUint32((t += 4))));
          for (let a = 16; a < 80; a++) {
            const e = 0 | c[a - 15],
              t = 0 | u[a - 15],
              n =
                i.default.rotrSH(e, t, 1) ^
                i.default.rotrSH(e, t, 8) ^
                i.default.shrSH(e, t, 7),
              r =
                i.default.rotrSL(e, t, 1) ^
                i.default.rotrSL(e, t, 8) ^
                i.default.shrSL(e, t, 7),
              o = 0 | c[a - 2],
              s = 0 | u[a - 2],
              l =
                i.default.rotrSH(o, s, 19) ^
                i.default.rotrBH(o, s, 61) ^
                i.default.shrSH(o, s, 6),
              d =
                i.default.rotrSL(o, s, 19) ^
                i.default.rotrBL(o, s, 61) ^
                i.default.shrSL(o, s, 6),
              f = i.default.add4L(r, d, u[a - 7], u[a - 16]),
              p = i.default.add4H(f, n, l, c[a - 7], c[a - 16]);
            ((c[a] = 0 | p), (u[a] = 0 | f));
          }
          let {
            Ah: n,
            Al: r,
            Bh: o,
            Bl: l,
            Ch: d,
            Cl: f,
            Dh: p,
            Dl: y,
            Eh: h,
            El: g,
            Fh: b,
            Fl: T,
            Gh: C,
            Gl: S,
            Hh: m,
            Hl: v,
          } = this;
          for (let P = 0; P < 80; P++) {
            const e =
                i.default.rotrSH(h, g, 14) ^
                i.default.rotrSH(h, g, 18) ^
                i.default.rotrBH(h, g, 41),
              t =
                i.default.rotrSL(h, g, 14) ^
                i.default.rotrSL(h, g, 18) ^
                i.default.rotrBL(h, g, 41),
              w = (h & b) ^ (~h & C),
              A = (g & T) ^ (~g & S),
              E = i.default.add5L(v, t, A, s[P], u[P]),
              k = i.default.add5H(E, m, e, w, a[P], c[P]),
              x = 0 | E,
              O =
                i.default.rotrSH(n, r, 28) ^
                i.default.rotrBH(n, r, 34) ^
                i.default.rotrBH(n, r, 39),
              M =
                i.default.rotrSL(n, r, 28) ^
                i.default.rotrBL(n, r, 34) ^
                i.default.rotrBL(n, r, 39),
              H = (n & o) ^ (n & d) ^ (o & d),
              B = (r & l) ^ (r & f) ^ (l & f);
            ((m = 0 | C),
              (v = 0 | S),
              (C = 0 | b),
              (S = 0 | T),
              (b = 0 | h),
              (T = 0 | g),
              ({ h: h, l: g } = i.default.add(0 | p, 0 | y, 0 | k, 0 | x)),
              (p = 0 | d),
              (y = 0 | f),
              (d = 0 | o),
              (f = 0 | l),
              (o = 0 | n),
              (l = 0 | r));
            const _ = i.default.add3L(x, M, B);
            ((n = i.default.add3H(_, k, O, H)), (r = 0 | _));
          }
          (({ h: n, l: r } = i.default.add(
            0 | this.Ah,
            0 | this.Al,
            0 | n,
            0 | r,
          )),
            ({ h: o, l: l } = i.default.add(
              0 | this.Bh,
              0 | this.Bl,
              0 | o,
              0 | l,
            )),
            ({ h: d, l: f } = i.default.add(
              0 | this.Ch,
              0 | this.Cl,
              0 | d,
              0 | f,
            )),
            ({ h: p, l: y } = i.default.add(
              0 | this.Dh,
              0 | this.Dl,
              0 | p,
              0 | y,
            )),
            ({ h: h, l: g } = i.default.add(
              0 | this.Eh,
              0 | this.El,
              0 | h,
              0 | g,
            )),
            ({ h: b, l: T } = i.default.add(
              0 | this.Fh,
              0 | this.Fl,
              0 | b,
              0 | T,
            )),
            ({ h: C, l: S } = i.default.add(
              0 | this.Gh,
              0 | this.Gl,
              0 | C,
              0 | S,
            )),
            ({ h: m, l: v } = i.default.add(
              0 | this.Hh,
              0 | this.Hl,
              0 | m,
              0 | v,
            )),
            this.set(n, r, o, l, d, f, p, y, h, g, b, T, C, S, m, v));
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
    11483: function (e, t, n) {
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
      function a(e, t) {
        void 0 === t && (t = !1);
        let n = new Uint32Array(e.length),
          r = new Uint32Array(e.length);
        for (let i = 0; i < e.length; i++) {
          const { h: a, l: s } = o(e[i], t);
          [n[i], r[i]] = [a, s];
        }
        return [n, r];
      }
      ((t.fromBig = o), (t.split = a));
      const s = (e, t) => (BigInt(e >>> 0) << i) | BigInt(t >>> 0);
      t.toBig = s;
      const c = (e, t, n) => e >>> n,
        u = (e, t, n) => (e << (32 - n)) | (t >>> n),
        l = (e, t, n) => (e >>> n) | (t << (32 - n)),
        d = (e, t, n) => (e << (32 - n)) | (t >>> n),
        f = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32)),
        p = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n)),
        y = (e, t) => t,
        h = (e, t) => e,
        g = (e, t, n) => (e << n) | (t >>> (32 - n)),
        b = (e, t, n) => (t << n) | (e >>> (32 - n)),
        T = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        C = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function S(e, t, n, r) {
        const i = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((i / 2 ** 32) | 0)) | 0, l: 0 | i };
      }
      t.add = S;
      const m = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0),
        v = (e, t, n, r) => (t + n + r + ((e / 2 ** 32) | 0)) | 0,
        P = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0),
        w = (e, t, n, r, i) => (t + n + r + i + ((e / 2 ** 32) | 0)) | 0,
        A = (e, t, n, r, i) =>
          (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0),
        E = (e, t, n, r, i, o) => (t + n + r + i + o + ((e / 2 ** 32) | 0)) | 0,
        k = {
          fromBig: o,
          split: a,
          toBig: t.toBig,
          shrSH: c,
          shrSL: u,
          rotrSH: l,
          rotrSL: d,
          rotrBH: f,
          rotrBL: p,
          rotr32H: y,
          rotr32L: h,
          rotlSH: g,
          rotlSL: b,
          rotlBH: T,
          rotlBL: C,
          add: S,
          add3L: m,
          add3H: v,
          add4L: P,
          add4H: w,
          add5H: E,
          add5L: A,
        };
      t.default = k;
    },
    11484: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cvToJSON = c),
        (t.cvToString = a),
        (t.cvToValue = s),
        (t.getCVTypeString = u),
        (t.isClarityType = l));
      var r = n(5734),
        i = n(3237),
        o = n(2778);
      function a(e, t) {
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
            return `(some ${a(e.value, t)})`;
          case i.ClarityType.ResponseErr:
            return `(err ${a(e.value, t)})`;
          case i.ClarityType.ResponseOk:
            return `(ok ${a(e.value, t)})`;
          case i.ClarityType.PrincipalStandard:
          case i.ClarityType.PrincipalContract:
            return (0, r.principalToString)(e);
          case i.ClarityType.List:
            return `(list ${e.list.map((e) => a(e, t)).join(" ")})`;
          case i.ClarityType.Tuple:
            return `(tuple ${Object.keys(e.data)
              .map((n) => `(${n} ${a(e.data[n], t)})`)
              .join(" ")})`;
          case i.ClarityType.StringASCII:
            return `"${e.data}"`;
          case i.ClarityType.StringUTF8:
            return `u"${e.data}"`;
        }
      }
      function s(e, t) {
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
            return { type: u(e), value: s(e, !0), success: !1 };
          case i.ClarityType.ResponseOk:
            return { type: u(e), value: s(e, !0), success: !0 };
          default:
            return { type: u(e), value: s(e, !0) };
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
      function l(e, t) {
        return e.type === t;
      }
    },
    11485: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.trueCV = t.falseCV = t.boolCV = void 0));
      var r = n(3237);
      const i = () => ({ type: r.ClarityType.BoolTrue });
      t.trueCV = i;
      const o = () => ({ type: r.ClarityType.BoolFalse });
      t.falseCV = o;
      const a = (e) => (e ? i() : o());
      t.boolCV = a;
    },
    11486: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.uintCV = t.intCV = void 0));
      var r = n(2778),
        i = n(3237);
      const o = BigInt("0xffffffffffffffffffffffffffffffff"),
        a = BigInt(0),
        s = BigInt("0x7fffffffffffffffffffffffffffffff"),
        c = BigInt("-170141183460469231731687303715884105728"),
        u = (e) => {
          const t = (0, r.intToBigInt)(e, !0);
          if (t > s)
            throw new RangeError(
              "Cannot construct clarity integer from value greater than " + s,
            );
          if (t < c)
            throw new RangeError(
              "Cannot construct clarity integer form value less than " + c,
            );
          return { type: i.ClarityType.Int, value: t };
        };
      t.intCV = u;
      const l = (e) => {
        const t = (0, r.intToBigInt)(e, !1);
        if (t < a)
          throw new RangeError(
            "Cannot construct unsigned clarity integer from negative value",
          );
        if (t > o)
          throw new RangeError(
            "Cannot construct unsigned clarity integer greater than " + o,
          );
        return { type: i.ClarityType.UInt, value: t };
      };
      t.uintCV = l;
    },
    11487: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bufferCVFromString = t.bufferCV = void 0));
      var r = n(2778),
        i = n(3237);
      const o = (e) => {
        if (e.byteLength > 1048576)
          throw new Error(
            "Cannot construct clarity buffer that is greater than 1MB",
          );
        return { type: i.ClarityType.Buffer, buffer: e };
      };
      t.bufferCV = o;
      const a = (e) => o((0, r.utf8ToBytes)(e));
      t.bufferCVFromString = a;
    },
    11488: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.noneCV = i),
        (t.optionalCVOf = a),
        (t.someCV = o));
      var r = n(3237);
      function i() {
        return { type: r.ClarityType.OptionalNone };
      }
      function o(e) {
        return { type: r.ClarityType.OptionalSome, value: e };
      }
      function a(e) {
        return e ? o(e) : i();
      }
    },
    11489: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.responseErrorCV = i),
        (t.responseOkCV = o));
      var r = n(3237);
      function i(e) {
        return { type: r.ClarityType.ResponseErr, value: e };
      }
      function o(e) {
        return { type: r.ClarityType.ResponseOk, value: e };
      }
    },
    11490: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.listCV = i));
      var r = n(3237);
      function i(e) {
        return { type: r.ClarityType.List, list: e };
      }
    },
    11491: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.tupleCV = o));
      var r = n(3237),
        i = n(3406);
      function o(e) {
        for (const t in e)
          if (!(0, i.isClarityName)(t))
            throw new Error(`"${t}" is not a valid Clarity name`);
        return { type: r.ClarityType.Tuple, data: e };
      }
    },
    11492: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.serializeCV = P));
      var r = n(2778),
        i = n(3852),
        o = n(3626),
        a = n(3237),
        s = n(3468),
        c = n(3127);
      function u(e, t) {
        return (0, r.concatArray)([e, t]);
      }
      function l(e) {
        return new Uint8Array([e.type]);
      }
      function d(e) {
        return e.type === a.ClarityType.OptionalNone
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
      function p(e) {
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
      function h(e) {
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
      function C(e) {
        const t = [],
          n = new Uint8Array(4);
        ((0, r.writeUInt32BE)(n, Object.keys(e.data).length, 0), t.push(n));
        const a = Object.keys(e.data).sort((e, t) => e.localeCompare(t));
        for (const r of a) {
          const n = (0, o.createLPString)(r);
          t.push((0, i.serializeLPString)(n));
          const a = P(e.data[r]);
          t.push(a);
        }
        return u(e.type, (0, r.concatArray)(t));
      }
      function S(e, t) {
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
      function m(e) {
        return S(e, "ascii");
      }
      function v(e) {
        return S(e, "utf8");
      }
      function P(e) {
        switch (e.type) {
          case a.ClarityType.BoolTrue:
          case a.ClarityType.BoolFalse:
            return l(e);
          case a.ClarityType.OptionalNone:
          case a.ClarityType.OptionalSome:
            return d(e);
          case a.ClarityType.Buffer:
            return f(e);
          case a.ClarityType.UInt:
            return y(e);
          case a.ClarityType.Int:
            return p(e);
          case a.ClarityType.PrincipalStandard:
            return h(e);
          case a.ClarityType.PrincipalContract:
            return g(e);
          case a.ClarityType.ResponseOk:
          case a.ClarityType.ResponseErr:
            return b(e);
          case a.ClarityType.List:
            return T(e);
          case a.ClarityType.Tuple:
            return C(e);
          case a.ClarityType.StringASCII:
            return m(e);
          case a.ClarityType.StringUTF8:
            return v(e);
          default:
            throw new s.SerializationError(
              "Unable to serialize. Invalid Clarity Value.",
            );
        }
      }
    },
    11493: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hmac = void 0));
      const r = n(6940),
        i = n(4596);
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
            a = new Uint8Array(o);
          a.set(n.length > o ? e.create().update(n).digest() : n);
          for (let r = 0; r < a.length; r++) a[r] ^= 54;
          (this.iHash.update(a), (this.oHash = e.create()));
          for (let r = 0; r < a.length; r++) a[r] ^= 106;
          (this.oHash.update(a), a.fill(0));
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
            outputLen: a,
          } = this;
          return (
            (e = e),
            (e.finished = r),
            (e.destroyed = i),
            (e.blockLen = o),
            (e.outputLen = a),
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
    11494: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = u));
      var r = n(3407),
        i = n(5736),
        o = n(3852),
        a = n(3468),
        s = n(5735),
        c = n(2778);
      function u(e) {
        let t;
        if ("string" === typeof e) {
          const n = "0x" === e.slice(0, 2).toLowerCase();
          t = new i.BytesReader((0, c.hexToBytes)(n ? e.slice(2) : e));
        } else t = e instanceof Uint8Array ? new i.BytesReader(e) : e;
        const n = t.readUInt8Enum(r.ClarityType, (e) => {
          throw new a.DeserializationError(
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
              l = (0, o.deserializeLPString)(t);
            return (0, r.contractPrincipalCVFromAddress)(i, l);
          case r.ClarityType.ResponseOk:
            return (0, r.responseOkCV)(u(t));
          case r.ClarityType.ResponseErr:
            return (0, r.responseErrorCV)(u(t));
          case r.ClarityType.OptionalNone:
            return (0, r.noneCV)();
          case r.ClarityType.OptionalSome:
            return (0, r.someCV)(u(t));
          case r.ClarityType.List:
            const d = t.readUInt32BE(),
              f = [];
            for (let r = 0; r < d; r++) f.push(u(t));
            return (0, r.listCV)(f);
          case r.ClarityType.Tuple:
            const p = t.readUInt32BE(),
              y = {};
            for (let r = 0; r < p; r++) {
              const e = (0, o.deserializeLPString)(t).content;
              if (void 0 === e)
                throw new a.DeserializationError('"content" is undefined');
              y[e] = u(t);
            }
            return (0, r.tupleCV)(y);
          case r.ClarityType.StringASCII:
            const h = t.readUInt32BE(),
              g = (0, c.bytesToAscii)(t.readBytes(h));
            return (0, s.stringAsciiCV)(g);
          case r.ClarityType.StringUTF8:
            const b = t.readUInt32BE(),
              T = (0, c.bytesToUtf8)(t.readBytes(b));
            return (0, s.stringUtf8CV)(T);
          default:
            throw new a.DeserializationError(
              "Unable to deserialize Clarity Value from Uint8Array. Could not find valid Clarity Type.",
            );
        }
      }
    },
    11495: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ok =
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
          t.address =
            void 0),
        Object.defineProperty(t, "parse", {
          enumerable: !0,
          get: function () {
            return a.parse;
          },
        }),
        Object.defineProperty(t, "prettyPrint", {
          enumerable: !0,
          get: function () {
            return o.prettyPrint;
          },
        }),
        (t.principal = s),
        (t.stringUtf8 =
          t.stringAscii =
          t.standardPrincipal =
          t.some =
          t.serialize =
            void 0),
        Object.defineProperty(t, "stringify", {
          enumerable: !0,
          get: function () {
            return o.stringify;
          },
        }),
        (t.uint = t.tuple = void 0));
      var r = n(2778),
        i = n(3407),
        o = n(11496),
        a = n(11497);
      ((t.bool = i.boolCV), (t.int = i.intCV), (t.uint = i.uintCV));
      function s(e) {
        const [t, n] = e.split(".");
        return n
          ? (0, i.contractPrincipalCV)(t, n)
          : (0, i.standardPrincipalCV)(t);
      }
      ((t.address = s),
        (t.contractPrincipal = i.contractPrincipalCV),
        (t.standardPrincipal = i.standardPrincipalCV),
        (t.list = i.listCV),
        (t.stringAscii = i.stringAsciiCV),
        (t.stringUtf8 = i.stringUtf8CV),
        (t.buffer = i.bufferCV));
      const c = (e) => (0, i.bufferCV)((0, r.hexToBytes)(e));
      t.bufferFromHex = c;
      const u = (e) => (0, i.bufferCV)((0, r.asciiToBytes)(e));
      t.bufferFromAscii = u;
      const l = (e) => (0, i.bufferCV)((0, r.utf8ToBytes)(e));
      t.bufferFromUtf8 = l;
      ((t.none = i.noneCV),
        (t.some = i.someCV),
        (t.ok = i.responseOkCV),
        (t.error = i.responseErrorCV),
        (t.tuple = i.tupleCV),
        (t.serialize = i.serializeCV),
        (t.deserialize = i.deserializeCV));
    },
    11496: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.prettyPrint = void 0),
        (t.stringify = l));
      var r = n(2778),
        i = n(3407);
      function o(e, t, n) {
        return (
          void 0 === n && (n = !1),
          e ? "\n" + " ".repeat(e * (t - (n ? 1 : 0))) : " "
        );
      }
      function a(e, t, n) {
        if ((void 0 === n && (n = 1), 0 === e.list.length)) return "(list)";
        const r = o(t, n, !1),
          i = t ? o(t, n, !0) : "",
          a = e.list.map((e) => u(e, t, n)).join(r);
        return `(list${r}${a}${i})`;
      }
      function s(e, t, n) {
        if ((void 0 === n && (n = 1), 0 === Object.keys(e.data).length))
          return "{}";
        const r = [];
        for (const [o, s] of Object.entries(e.data))
          r.push(`${o}: ${u(s, t, n)}`);
        const i = o(t, n, !1),
          a = o(t, n, !0);
        return `{${i}${r.sort().join("," + i)}${a}}`;
      }
      function c(e) {
        throw new Error("invalid clarity value type: " + e);
      }
      function u(e, t, n) {
        return (
          void 0 === t && (t = 0),
          e.type === i.ClarityType.BoolFalse
            ? "false"
            : e.type === i.ClarityType.BoolTrue
              ? "true"
              : e.type === i.ClarityType.Int
                ? e.value.toString()
                : e.type === i.ClarityType.UInt
                  ? "u" + e.value.toString()
                  : e.type === i.ClarityType.StringASCII
                    ? `"${e.data}"`
                    : e.type === i.ClarityType.StringUTF8
                      ? `u"${e.data}"`
                      : e.type === i.ClarityType.PrincipalContract ||
                          e.type === i.ClarityType.PrincipalStandard
                        ? "'" + (0, i.principalToString)(e)
                        : e.type === i.ClarityType.Buffer
                          ? "0x" + (0, r.bytesToHex)(e.buffer)
                          : e.type === i.ClarityType.OptionalNone
                            ? "none"
                            : e.type === i.ClarityType.OptionalSome
                              ? `(some ${u(e.value, t, n)})`
                              : e.type === i.ClarityType.ResponseOk
                                ? `(ok ${u(e.value, t, n)})`
                                : e.type === i.ClarityType.ResponseErr
                                  ? `(err ${u(e.value, t, n)})`
                                  : e.type === i.ClarityType.List
                                    ? a(e, t, n + 1)
                                    : e.type === i.ClarityType.Tuple
                                      ? s(e, t, n + 1)
                                      : void c(e)
        );
      }
      function l(e, t) {
        return (void 0 === t && (t = 0), u(e, t, 0));
      }
      t.prettyPrint = l;
    },
    11497: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.parse = M));
      var r = n(4881);
      function i(e, t) {
        return (n) => {
          const r = n.match(e);
          return r && 0 === r.index
            ? {
                success: !0,
                value: r[0],
                rest: n.substring(r[0].length),
                capture: t ? t(r[0]) : void 0,
              }
            : { success: !1 };
        };
      }
      function o() {
        return i(/\s+/);
      }
      function a(e) {
        return (t) => e()(t);
      }
      function s(e) {
        return (t) => {
          for (const n of e) {
            const e = n(t);
            if (e.success) return e;
          }
          return { success: !1 };
        };
      }
      function c(e) {
        return (t) => {
          const n = e(t);
          return !n.success || n.rest ? { success: !1 } : n;
        };
      }
      function u(e) {
        return (t) => {
          const n = e(t);
          return n.success ? n : { success: !0, value: "", rest: t };
        };
      }
      function l(e, t) {
        return (
          void 0 === t && (t = (e) => e[0]),
          (n) => {
            let r = n,
              i = "";
            const o = [];
            for (const t of e) {
              const e = t(r);
              if (!e.success) return { success: !1 };
              ((r = e.rest), (i += e.value), e.capture && o.push(e.capture));
            }
            return { success: !0, value: i, rest: r, capture: t(o) };
          }
        );
      }
      function d(e, t) {
        void 0 === t && (t = (e) => e[0]);
        const n = e.flatMap((e, t) => (0 === t ? [e] : [u(o()), e]));
        return l(n, t);
      }
      function f(e) {
        return d([i(/\(/), e, i(/\)/)]);
      }
      function p(e, t, n, r) {
        return (
          void 0 === n && (n = (e) => e[e.length - 1]),
          (i) => {
            let o = i,
              a = "";
            const s = [];
            let c;
            for (c = 0; ; c++) {
              const e = t(o);
              if (!e.success) break;
              if (
                ((o = e.rest),
                (a += e.value),
                e.capture && s.push(e.capture),
                r)
              ) {
                const e = r(o);
                if (!e.success) {
                  c++;
                  break;
                }
                ((o = e.rest), (a += e.value));
              }
            }
            return c < e
              ? { success: !1 }
              : { success: !0, value: a, rest: o, capture: n(s) };
          }
        );
      }
      function y(e, t) {
        return (n) => {
          const r = e(n);
          return r.success
            ? {
                success: !0,
                value: r.value,
                rest: r.rest,
                capture: t ? t(r.value) : r.value,
              }
            : { success: !1 };
        };
      }
      function h() {
        return y(i(/\-?[0-9]+/), (e) => r.Cl.int(parseInt(e)));
      }
      function g() {
        return l([i(/u/), y(i(/[0-9]+/), (e) => r.Cl.uint(parseInt(e)))]);
      }
      function b() {
        return y(i(/true|false/), (e) => r.Cl.bool("true" === e));
      }
      function T() {
        return l([
          i(/\'/),
          y(
            l([i(/[A-Z0-9]+/), u(l([i(/\./), i(/[a-zA-Z0-9\-]+/)]))]),
            r.Cl.address,
          ),
        ]);
      }
      function C() {
        return l([i(/0x/), y(i(/[0-9a-fA-F]+/), r.Cl.bufferFromHex)]);
      }
      function S(e) {
        return e.replace(/\\\\/g, "\\").replace(/\\(.)/g, "$1");
      }
      function m() {
        return l([
          i(/"/),
          y(i(/(\\.|[^"])*/), (e) => r.Cl.stringAscii(S(e))),
          i(/"/),
        ]);
      }
      function v() {
        return l([
          i(/u"/),
          y(i(/(\\.|[^"])*/), (e) => r.Cl.stringUtf8(S(e))),
          i(/"/),
        ]);
      }
      function P() {
        return f(l([i(/list/), p(0, l([o(), O()]), (e) => r.Cl.list(e))]));
      }
      function w() {
        const e = d([
            i(/\{/),
            p(
              1,
              l([y(i(/[a-zA-Z][a-zA-Z0-9_]*/)), i(/\s*\:/), o(), O()], (e) => {
                let [t, n] = e;
                return r.Cl.tuple({ [t]: n });
              }),
              (e) => r.Cl.tuple(Object.assign({}, ...e.map((e) => e.data))),
              i(/\s*\,\s*/),
            ),
            i(/\}/),
          ]),
          t = f(
            l([
              u(o()),
              i(/tuple/),
              o(),
              p(
                1,
                f(
                  l(
                    [u(o()), y(i(/[a-zA-Z][a-zA-Z0-9_]*/)), o(), O(), u(o())],
                    (e) => {
                      let [t, n] = e;
                      return r.Cl.tuple({ [t]: n });
                    },
                  ),
                ),
                (e) => r.Cl.tuple(Object.assign({}, ...e.map((e) => e.data))),
                o(),
              ),
            ]),
          );
        return s([e, t]);
      }
      function A() {
        return y(i(/none/), r.Cl.none);
      }
      function E() {
        return f(l([i(/some/), o(), O()], (e) => r.Cl.some(e[0])));
      }
      function k() {
        return f(l([i(/ok/), o(), O()], (e) => r.Cl.ok(e[0])));
      }
      function x() {
        return f(l([i(/err/), o(), O()], (e) => r.Cl.error(e[0])));
      }
      function O(e) {
        return (
          void 0 === e && (e = (e) => e),
          s([C, m, v, h, g, b, T, P, w, A, E, k, x].map(a).map(e))
        );
      }
      function M(e) {
        const t = O(c)(e);
        if (!t.success || !t.capture) throw "Parse error";
        return t.capture;
      }
    },
    11498: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.principal = a));
      var r = n(6941),
        i = n(3127),
        o = n(3626);
      function a(e) {
        if (u(e)) {
          const [t, n] = s(e);
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
          const [n, i] = s(e);
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
          } = l(...arguments);
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
      function s(e) {
        const [t, n] = e.split(".");
        if (!t || !n) throw new Error("Invalid contract identifier: " + e);
        return [t, n];
      }
      function c(e) {
        const [t, n] = e.split("::");
        if (!t || !n)
          throw new Error("Invalid fully-qualified nft asset name: " + e);
        const [r, i] = s(t);
        return { contractAddress: r, contractName: i, tokenName: n };
      }
      function u(e) {
        return e.includes(".");
      }
      function l() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (2 === t.length) {
          const [e, n] = t;
          return { ...c(e), assetId: n };
        }
        const [r, i, o] = t,
          [a, u] = s(r);
        return {
          contractAddress: a,
          contractName: u,
          tokenName: i,
          assetId: o,
        };
      }
    },
    11499: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.STRUCTURED_DATA_PREFIX = void 0),
        (t.decodeStructuredDataSignature = p),
        (t.encodeStructuredData = f),
        (t.hashStructuredData = u),
        (t.signStructuredData = y));
      var r = n(5732),
        i = n(2778),
        o = n(3407),
        a = n(3127),
        s = n(3853);
      const c = (t.STRUCTURED_DATA_PREFIX = new Uint8Array([
        83, 73, 80, 48, 49, 56,
      ]));
      function u(e) {
        return (0, r.sha256)((0, o.serializeCV)(e));
      }
      const l = 32;
      function d(e) {
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
        if (!d(n))
          throw new Error(
            "domain parameter must be a valid domain of type TupleCV with keys 'name', 'version', 'chain-id' with respective types StringASCII, StringASCII, UInt",
          );
        const o = u(n);
        return (0, i.concatBytes)(c, o, r);
      }
      function p(e) {
        const t = "string" === typeof e ? (0, i.utf8ToBytes)(e) : e,
          n = t.slice(c.length, c.length + l),
          r = t.slice(c.length + l);
        return { domainHash: n, messageHash: r };
      }
      function y(e) {
        let { message: t, domain: n, privateKey: o } = e;
        const c = (0, i.bytesToHex)(
            (0, r.sha256)(f({ message: t, domain: n })),
          ),
          { data: u } = (0, s.signMessageHashRsv)({
            messageHash: c,
            privateKey: o,
          });
        return { data: u, type: a.StacksMessageType.StructuredDataSignature };
      }
    },
    11500: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    11501: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fetchFirstName = void 0));
      const r = async (e, t) => {
        try {
          const n = await t.fetchFn(
              `${t.bnsLookupUrl}/v1/addresses/stacks/${e}`,
            ),
            r = await n.json();
          if ((r.names.length || 0) > 0) return r.names[0];
        } catch (n) {}
      };
      t.fetchFirstName = r;
    },
    11511: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.restoreWalletAccounts = u));
      var r = n(5716),
        i = n(4880),
        o = n(4601),
        a = n(3851),
        s = n(6947),
        c = n(6948);
      async function u(e) {
        let { wallet: t, gaiaHubUrl: n, network: u } = e;
        const l = await (0, o.getHubInfo)(n, u.fetchFn),
          d = (0, a.getRootNode)(t),
          f = (0, o.connectToGaiaHubWithConfig)({
            hubInfo: l,
            privateKey: (0, i.deriveLegacyConfigPrivateKey)(
              (0, a.getRootNode)(t),
            ),
            gaiaHubUrl: n,
          }),
          p = (0, o.connectToGaiaHubWithConfig)({
            hubInfo: l,
            privateKey: t.configPrivateKey,
            gaiaHubUrl: n,
          }),
          [y, h] = await Promise.all([
            (0, c.fetchWalletConfig)({
              wallet: t,
              gaiaHubConfig: p,
              fetchFn: u.fetchFn,
            }),
            (0, s.fetchLegacyWalletConfig)({
              wallet: t,
              gaiaHubConfig: f,
              fetchFn: u.fetchFn,
            }),
          ]);
        if (
          y &&
          y.accounts.length >=
            ((null === h || void 0 === h ? void 0 : h.identities.length) || 0)
        ) {
          const e = await Promise.all(
            y.accounts.map(async (e, n) => {
              let o = t.accounts[n];
              const { username: a } = await (0,
              r.fetchUsernameForAccountByDerivationType)({
                rootNode: d,
                index: n,
                derivationType: r.DerivationType.Wallet,
                network: u,
              });
              return (
                (o = o
                  ? {
                      ...o,
                      stxPrivateKey: (0, r.deriveStxPrivateKey)({
                        rootNode: d,
                        index: n,
                      }),
                    }
                  : (0, i.deriveAccount)({
                      rootNode: d,
                      index: n,
                      salt: t.salt,
                      stxDerivationType: r.DerivationType.Wallet,
                    })),
                { ...o, username: a }
              );
            }),
          );
          return { ...t, accounts: e };
        }
        if (h) {
          const e = await Promise.all(
              h.identities.map(async (e, n) => {
                let o = t.accounts[n];
                const { username: a } = await (0,
                r.fetchUsernameForAccountByDerivationType)({
                  rootNode: d,
                  index: n,
                  derivationType: r.DerivationType.Wallet,
                  network: u,
                });
                return (
                  (o = o
                    ? {
                        ...o,
                        stxPrivateKey: (0, r.deriveStxPrivateKey)({
                          rootNode: d,
                          index: n,
                        }),
                      }
                    : (0, i.deriveAccount)({
                        rootNode: d,
                        index: n,
                        salt: t.salt,
                        stxDerivationType: r.DerivationType.Wallet,
                      })),
                  { ...o, username: a }
                );
              }),
            ),
            n = {};
          h.hideWarningForReusingIdentity &&
            (n.hideWarningForReusingIdentity = !0);
          const o = {
            accounts: h.identities.map((e) => ({
              username: e.username,
              apps: e.apps,
            })),
            meta: n,
          };
          return (
            await (0, c.updateWalletConfig)({
              wallet: t,
              walletConfig: o,
              gaiaHubConfig: p,
            }),
            { ...t, accounts: e }
          );
        }
        return t;
      }
    },
    11521: function (e, t, n) {
      (function (e, n, r) {
        (function (e, n) {
          n(t);
        })(0, function (t) {
          "use strict";
          function i(e, t) {
            t |= 0;
            for (
              var n = Math.max(e.length - t, 0), r = Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = e[t + i];
            return r;
          }
          var o = function (e) {
              var t = i(arguments, 1);
              return function () {
                var n = i(arguments);
                return e.apply(null, t.concat(n));
              };
            },
            a = function (e) {
              return function () {
                var t = i(arguments),
                  n = t.pop();
                e.call(this, t, n);
              };
            };
          function s(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          }
          var c,
            u = "function" === typeof setImmediate && setImmediate,
            l = "object" === typeof e && "function" === typeof e.nextTick;
          function d(e) {
            setTimeout(e, 0);
          }
          function f(e) {
            return function (t) {
              var n = i(arguments, 1);
              e(function () {
                t.apply(null, n);
              });
            };
          }
          c = u ? setImmediate : l ? e.nextTick : d;
          var p = f(c);
          function y(e) {
            return a(function (t, n) {
              var r;
              try {
                r = e.apply(this, t);
              } catch (i) {
                return n(i);
              }
              s(r) && "function" === typeof r.then
                ? r.then(
                    function (e) {
                      h(n, null, e);
                    },
                    function (e) {
                      h(n, e.message ? e : new Error(e));
                    },
                  )
                : n(null, r);
            });
          }
          function h(e, t, n) {
            try {
              e(t, n);
            } catch (r) {
              p(g, r);
            }
          }
          function g(e) {
            throw e;
          }
          var b = "function" === typeof Symbol;
          function T(e) {
            return b && "AsyncFunction" === e[Symbol.toStringTag];
          }
          function C(e) {
            return T(e) ? y(e) : e;
          }
          function S(e) {
            return function (t) {
              var n = i(arguments, 1),
                r = a(function (n, r) {
                  var i = this;
                  return e(
                    t,
                    function (e, t) {
                      C(e).apply(i, n.concat(t));
                    },
                    r,
                  );
                });
              return n.length ? r.apply(this, n) : r;
            };
          }
          var m = "object" == typeof n && n && n.Object === Object && n,
            v =
              "object" == typeof self && self && self.Object === Object && self,
            P = m || v || Function("return this")(),
            w = P.Symbol,
            A = Object.prototype,
            E = A.hasOwnProperty,
            k = A.toString,
            x = w ? w.toStringTag : void 0;
          function O(e) {
            var t = E.call(e, x),
              n = e[x];
            try {
              e[x] = void 0;
              var r = !0;
            } catch (o) {}
            var i = k.call(e);
            return (r && (t ? (e[x] = n) : delete e[x]), i);
          }
          var M = Object.prototype,
            H = M.toString;
          function B(e) {
            return H.call(e);
          }
          var _ = "[object Null]",
            N = "[object Undefined]",
            I = w ? w.toStringTag : void 0;
          function F(e) {
            return null == e
              ? void 0 === e
                ? N
                : _
              : I && I in Object(e)
                ? O(e)
                : B(e);
          }
          var j = "[object AsyncFunction]",
            L = "[object Function]",
            U = "[object GeneratorFunction]",
            K = "[object Proxy]";
          function V(e) {
            if (!s(e)) return !1;
            var t = F(e);
            return t == L || t == U || t == j || t == K;
          }
          var z = 9007199254740991;
          function D(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= z;
          }
          function R(e) {
            return null != e && D(e.length) && !V(e);
          }
          var $ = {};
          function W() {}
          function G(e) {
            return function () {
              if (null !== e) {
                var t = e;
                ((e = null), t.apply(this, arguments));
              }
            };
          }
          var q = "function" === typeof Symbol && Symbol.iterator,
            Y = function (e) {
              return q && e[q] && e[q]();
            };
          function X(e, t) {
            var n = -1,
              r = Array(e);
            while (++n < e) r[n] = t(n);
            return r;
          }
          function J(e) {
            return null != e && "object" == typeof e;
          }
          var Z = "[object Arguments]";
          function Q(e) {
            return J(e) && F(e) == Z;
          }
          var ee = Object.prototype,
            te = ee.hasOwnProperty,
            ne = ee.propertyIsEnumerable,
            re = Q(
              (function () {
                return arguments;
              })(),
            )
              ? Q
              : function (e) {
                  return J(e) && te.call(e, "callee") && !ne.call(e, "callee");
                },
            ie = Array.isArray;
          function oe() {
            return !1;
          }
          var ae = "object" == typeof t && t && !t.nodeType && t,
            se = ae && "object" == typeof r && r && !r.nodeType && r,
            ce = se && se.exports === ae,
            ue = ce ? P.Buffer : void 0,
            le = ue ? ue.isBuffer : void 0,
            de = le || oe,
            fe = 9007199254740991,
            pe = /^(?:0|[1-9]\d*)$/;
          function ye(e, t) {
            var n = typeof e;
            return (
              (t = null == t ? fe : t),
              !!t &&
                ("number" == n || ("symbol" != n && pe.test(e))) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
            );
          }
          var he = "[object Arguments]",
            ge = "[object Array]",
            be = "[object Boolean]",
            Te = "[object Date]",
            Ce = "[object Error]",
            Se = "[object Function]",
            me = "[object Map]",
            ve = "[object Number]",
            Pe = "[object Object]",
            we = "[object RegExp]",
            Ae = "[object Set]",
            Ee = "[object String]",
            ke = "[object WeakMap]",
            xe = "[object ArrayBuffer]",
            Oe = "[object DataView]",
            Me = "[object Float32Array]",
            He = "[object Float64Array]",
            Be = "[object Int8Array]",
            _e = "[object Int16Array]",
            Ne = "[object Int32Array]",
            Ie = "[object Uint8Array]",
            Fe = "[object Uint8ClampedArray]",
            je = "[object Uint16Array]",
            Le = "[object Uint32Array]",
            Ue = {};
          function Ke(e) {
            return J(e) && D(e.length) && !!Ue[F(e)];
          }
          function Ve(e) {
            return function (t) {
              return e(t);
            };
          }
          ((Ue[Me] =
            Ue[He] =
            Ue[Be] =
            Ue[_e] =
            Ue[Ne] =
            Ue[Ie] =
            Ue[Fe] =
            Ue[je] =
            Ue[Le] =
              !0),
            (Ue[he] =
              Ue[ge] =
              Ue[xe] =
              Ue[be] =
              Ue[Oe] =
              Ue[Te] =
              Ue[Ce] =
              Ue[Se] =
              Ue[me] =
              Ue[ve] =
              Ue[Pe] =
              Ue[we] =
              Ue[Ae] =
              Ue[Ee] =
              Ue[ke] =
                !1));
          var ze = "object" == typeof t && t && !t.nodeType && t,
            De = ze && "object" == typeof r && r && !r.nodeType && r,
            Re = De && De.exports === ze,
            $e = Re && m.process,
            We = (function () {
              try {
                var e = De && De.require && De.require("util").types;
                return e || ($e && $e.binding && $e.binding("util"));
              } catch (t) {}
            })(),
            Ge = We && We.isTypedArray,
            qe = Ge ? Ve(Ge) : Ke,
            Ye = Object.prototype,
            Xe = Ye.hasOwnProperty;
          function Je(e, t) {
            var n = ie(e),
              r = !n && re(e),
              i = !n && !r && de(e),
              o = !n && !r && !i && qe(e),
              a = n || r || i || o,
              s = a ? X(e.length, String) : [],
              c = s.length;
            for (var u in e)
              (!t && !Xe.call(e, u)) ||
                (a &&
                  ("length" == u ||
                    (i && ("offset" == u || "parent" == u)) ||
                    (o &&
                      ("buffer" == u ||
                        "byteLength" == u ||
                        "byteOffset" == u)) ||
                    ye(u, c))) ||
                s.push(u);
            return s;
          }
          var Ze = Object.prototype;
          function Qe(e) {
            var t = e && e.constructor,
              n = ("function" == typeof t && t.prototype) || Ze;
            return e === n;
          }
          function et(e, t) {
            return function (n) {
              return e(t(n));
            };
          }
          var tt = et(Object.keys, Object),
            nt = Object.prototype,
            rt = nt.hasOwnProperty;
          function it(e) {
            if (!Qe(e)) return tt(e);
            var t = [];
            for (var n in Object(e))
              rt.call(e, n) && "constructor" != n && t.push(n);
            return t;
          }
          function ot(e) {
            return R(e) ? Je(e) : it(e);
          }
          function at(e) {
            var t = -1,
              n = e.length;
            return function () {
              return ++t < n ? { value: e[t], key: t } : null;
            };
          }
          function st(e) {
            var t = -1;
            return function () {
              var n = e.next();
              return n.done ? null : (t++, { value: n.value, key: t });
            };
          }
          function ct(e) {
            var t = ot(e),
              n = -1,
              r = t.length;
            return function i() {
              var o = t[++n];
              return "__proto__" === o
                ? i()
                : n < r
                  ? { value: e[o], key: o }
                  : null;
            };
          }
          function ut(e) {
            if (R(e)) return at(e);
            var t = Y(e);
            return t ? st(t) : ct(e);
          }
          function lt(e) {
            return function () {
              if (null === e) throw new Error("Callback was already called.");
              var t = e;
              ((e = null), t.apply(this, arguments));
            };
          }
          function dt(e) {
            return function (t, n, r) {
              if (((r = G(r || W)), e <= 0 || !t)) return r(null);
              var i = ut(t),
                o = !1,
                a = 0,
                s = !1;
              function c(e, t) {
                if (((a -= 1), e)) ((o = !0), r(e));
                else {
                  if (t === $ || (o && a <= 0)) return ((o = !0), r(null));
                  s || u();
                }
              }
              function u() {
                s = !0;
                while (a < e && !o) {
                  var t = i();
                  if (null === t) return ((o = !0), void (a <= 0 && r(null)));
                  ((a += 1), n(t.value, t.key, lt(c)));
                }
                s = !1;
              }
              u();
            };
          }
          function ft(e, t, n, r) {
            dt(t)(e, C(n), r);
          }
          function pt(e, t) {
            return function (n, r, i) {
              return e(n, t, r, i);
            };
          }
          function yt(e, t, n) {
            n = G(n || W);
            var r = 0,
              i = 0,
              o = e.length;
            function a(e, t) {
              e ? n(e) : (++i !== o && t !== $) || n(null);
            }
            for (0 === o && n(null); r < o; r++) t(e[r], r, lt(a));
          }
          var ht = pt(ft, 1 / 0),
            gt = function (e, t, n) {
              var r = R(e) ? yt : ht;
              r(e, C(t), n);
            };
          function bt(e) {
            return function (t, n, r) {
              return e(gt, t, C(n), r);
            };
          }
          function Tt(e, t, n, r) {
            ((r = r || W), (t = t || []));
            var i = [],
              o = 0,
              a = C(n);
            e(
              t,
              function (e, t, n) {
                var r = o++;
                a(e, function (e, t) {
                  ((i[r] = t), n(e));
                });
              },
              function (e) {
                r(e, i);
              },
            );
          }
          var Ct = bt(Tt),
            St = S(Ct);
          function mt(e) {
            return function (t, n, r, i) {
              return e(dt(n), t, C(r), i);
            };
          }
          var vt = mt(Tt),
            Pt = pt(vt, 1),
            wt = S(Pt);
          function At(e, t) {
            var n = -1,
              r = null == e ? 0 : e.length;
            while (++n < r) if (!1 === t(e[n], n, e)) break;
            return e;
          }
          function Et(e) {
            return function (t, n, r) {
              var i = -1,
                o = Object(t),
                a = r(t),
                s = a.length;
              while (s--) {
                var c = a[e ? s : ++i];
                if (!1 === n(o[c], c, o)) break;
              }
              return t;
            };
          }
          var kt = Et();
          function xt(e, t) {
            return e && kt(e, t, ot);
          }
          function Ot(e, t, n, r) {
            var i = e.length,
              o = n + (r ? 1 : -1);
            while (r ? o-- : ++o < i) if (t(e[o], o, e)) return o;
            return -1;
          }
          function Mt(e) {
            return e !== e;
          }
          function Ht(e, t, n) {
            var r = n - 1,
              i = e.length;
            while (++r < i) if (e[r] === t) return r;
            return -1;
          }
          function Bt(e, t, n) {
            return t === t ? Ht(e, t, n) : Ot(e, Mt, n);
          }
          var _t = function (e, t, n) {
            ("function" === typeof t && ((n = t), (t = null)), (n = G(n || W)));
            var r = ot(e),
              o = r.length;
            if (!o) return n(null);
            t || (t = o);
            var a = {},
              s = 0,
              c = !1,
              u = Object.create(null),
              l = [],
              d = [],
              f = {};
            function p(e, t) {
              l.push(function () {
                b(e, t);
              });
            }
            function y() {
              if (0 === l.length && 0 === s) return n(null, a);
              while (l.length && s < t) {
                var e = l.shift();
                e();
              }
            }
            function h(e, t) {
              var n = u[e];
              (n || (n = u[e] = []), n.push(t));
            }
            function g(e) {
              var t = u[e] || [];
              (At(t, function (e) {
                e();
              }),
                y());
            }
            function b(e, t) {
              if (!c) {
                var r = lt(function (t, r) {
                  if ((s--, arguments.length > 2 && (r = i(arguments, 1)), t)) {
                    var o = {};
                    (xt(a, function (e, t) {
                      o[t] = e;
                    }),
                      (o[e] = r),
                      (c = !0),
                      (u = Object.create(null)),
                      n(t, o));
                  } else ((a[e] = r), g(e));
                });
                s++;
                var o = C(t[t.length - 1]);
                t.length > 1 ? o(a, r) : o(r);
              }
            }
            function T() {
              var e,
                t = 0;
              while (d.length)
                ((e = d.pop()),
                  t++,
                  At(S(e), function (e) {
                    0 === --f[e] && d.push(e);
                  }));
              if (t !== o)
                throw new Error(
                  "async.auto cannot execute tasks due to a recursive dependency",
                );
            }
            function S(t) {
              var n = [];
              return (
                xt(e, function (e, r) {
                  ie(e) && Bt(e, t, 0) >= 0 && n.push(r);
                }),
                n
              );
            }
            (xt(e, function (t, n) {
              if (!ie(t)) return (p(n, [t]), void d.push(n));
              var r = t.slice(0, t.length - 1),
                i = r.length;
              if (0 === i) return (p(n, t), void d.push(n));
              ((f[n] = i),
                At(r, function (o) {
                  if (!e[o])
                    throw new Error(
                      "async.auto task `" +
                        n +
                        "` has a non-existent dependency `" +
                        o +
                        "` in " +
                        r.join(", "),
                    );
                  h(o, function () {
                    (i--, 0 === i && p(n, t));
                  });
                }));
            }),
              T(),
              y());
          };
          function Nt(e, t) {
            var n = -1,
              r = null == e ? 0 : e.length,
              i = Array(r);
            while (++n < r) i[n] = t(e[n], n, e);
            return i;
          }
          var It = "[object Symbol]";
          function Ft(e) {
            return "symbol" == typeof e || (J(e) && F(e) == It);
          }
          var jt = 1 / 0,
            Lt = w ? w.prototype : void 0,
            Ut = Lt ? Lt.toString : void 0;
          function Kt(e) {
            if ("string" == typeof e) return e;
            if (ie(e)) return Nt(e, Kt) + "";
            if (Ft(e)) return Ut ? Ut.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -jt ? "-0" : t;
          }
          function Vt(e, t, n) {
            var r = -1,
              i = e.length;
            (t < 0 && (t = -t > i ? 0 : i + t),
              (n = n > i ? i : n),
              n < 0 && (n += i),
              (i = t > n ? 0 : (n - t) >>> 0),
              (t >>>= 0));
            var o = Array(i);
            while (++r < i) o[r] = e[r + t];
            return o;
          }
          function zt(e, t, n) {
            var r = e.length;
            return ((n = void 0 === n ? r : n), !t && n >= r ? e : Vt(e, t, n));
          }
          function Dt(e, t) {
            var n = e.length;
            while (n-- && Bt(t, e[n], 0) > -1);
            return n;
          }
          function Rt(e, t) {
            var n = -1,
              r = e.length;
            while (++n < r && Bt(t, e[n], 0) > -1);
            return n;
          }
          function $t(e) {
            return e.split("");
          }
          var Wt = "\\ud800-\\udfff",
            Gt = "\\u0300-\\u036f",
            qt = "\\ufe20-\\ufe2f",
            Yt = "\\u20d0-\\u20ff",
            Xt = Gt + qt + Yt,
            Jt = "\\ufe0e\\ufe0f",
            Zt = "\\u200d",
            Qt = RegExp("[" + Zt + Wt + Xt + Jt + "]");
          function en(e) {
            return Qt.test(e);
          }
          var tn = "\\ud800-\\udfff",
            nn = "\\u0300-\\u036f",
            rn = "\\ufe20-\\ufe2f",
            on = "\\u20d0-\\u20ff",
            an = nn + rn + on,
            sn = "\\ufe0e\\ufe0f",
            cn = "[" + tn + "]",
            un = "[" + an + "]",
            ln = "\\ud83c[\\udffb-\\udfff]",
            dn = "(?:" + un + "|" + ln + ")",
            fn = "[^" + tn + "]",
            pn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            yn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            hn = "\\u200d",
            gn = dn + "?",
            bn = "[" + sn + "]?",
            Tn =
              "(?:" +
              hn +
              "(?:" +
              [fn, pn, yn].join("|") +
              ")" +
              bn +
              gn +
              ")*",
            Cn = bn + gn + Tn,
            Sn = "(?:" + [fn + un + "?", un, pn, yn, cn].join("|") + ")",
            mn = RegExp(ln + "(?=" + ln + ")|" + Sn + Cn, "g");
          function vn(e) {
            return e.match(mn) || [];
          }
          function Pn(e) {
            return en(e) ? vn(e) : $t(e);
          }
          function wn(e) {
            return null == e ? "" : Kt(e);
          }
          var An = /^\s+|\s+$/g;
          function En(e, t, n) {
            if (((e = wn(e)), e && (n || void 0 === t)))
              return e.replace(An, "");
            if (!e || !(t = Kt(t))) return e;
            var r = Pn(e),
              i = Pn(t),
              o = Rt(r, i),
              a = Dt(r, i) + 1;
            return zt(r, o, a).join("");
          }
          var kn = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m,
            xn = /,/,
            On = /(=.+)?(\s*)$/,
            Mn = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
          function Hn(e) {
            return (
              (e = e.toString().replace(Mn, "")),
              (e = e.match(kn)[2].replace(" ", "")),
              (e = e ? e.split(xn) : []),
              (e = e.map(function (e) {
                return En(e.replace(On, ""));
              })),
              e
            );
          }
          function Bn(e, t) {
            var n = {};
            (xt(e, function (e, t) {
              var r,
                i = T(e),
                o = (!i && 1 === e.length) || (i && 0 === e.length);
              if (ie(e))
                ((r = e.slice(0, -1)),
                  (e = e[e.length - 1]),
                  (n[t] = r.concat(r.length > 0 ? a : e)));
              else if (o) n[t] = e;
              else {
                if (((r = Hn(e)), 0 === e.length && !i && 0 === r.length))
                  throw new Error(
                    "autoInject task functions require explicit parameters.",
                  );
                (i || r.pop(), (n[t] = r.concat(a)));
              }
              function a(t, n) {
                var i = Nt(r, function (e) {
                  return t[e];
                });
                (i.push(n), C(e).apply(null, i));
              }
            }),
              _t(n, t));
          }
          function _n() {
            ((this.head = this.tail = null), (this.length = 0));
          }
          function Nn(e, t) {
            ((e.length = 1), (e.head = e.tail = t));
          }
          function In(e, t, n) {
            if (null == t) t = 1;
            else if (0 === t) throw new Error("Concurrency must not be zero");
            var r = C(e),
              i = 0,
              o = [],
              a = !1;
            function s(e, t, n) {
              if (null != n && "function" !== typeof n)
                throw new Error("task callback must be a function");
              if (
                ((l.started = !0),
                ie(e) || (e = [e]),
                0 === e.length && l.idle())
              )
                return p(function () {
                  l.drain();
                });
              for (var r = 0, i = e.length; r < i; r++) {
                var o = { data: e[r], callback: n || W };
                t ? l._tasks.unshift(o) : l._tasks.push(o);
              }
              a ||
                ((a = !0),
                p(function () {
                  ((a = !1), l.process());
                }));
            }
            function c(e) {
              return function (t) {
                i -= 1;
                for (var n = 0, r = e.length; n < r; n++) {
                  var a = e[n],
                    s = Bt(o, a, 0);
                  (0 === s ? o.shift() : s > 0 && o.splice(s, 1),
                    a.callback.apply(a, arguments),
                    null != t && l.error(t, a.data));
                }
                (i <= l.concurrency - l.buffer && l.unsaturated(),
                  l.idle() && l.drain(),
                  l.process());
              };
            }
            var u = !1,
              l = {
                _tasks: new _n(),
                concurrency: t,
                payload: n,
                saturated: W,
                unsaturated: W,
                buffer: t / 4,
                empty: W,
                drain: W,
                error: W,
                started: !1,
                paused: !1,
                push: function (e, t) {
                  s(e, !1, t);
                },
                kill: function () {
                  ((l.drain = W), l._tasks.empty());
                },
                unshift: function (e, t) {
                  s(e, !0, t);
                },
                remove: function (e) {
                  l._tasks.remove(e);
                },
                process: function () {
                  if (!u) {
                    u = !0;
                    while (!l.paused && i < l.concurrency && l._tasks.length) {
                      var e = [],
                        t = [],
                        n = l._tasks.length;
                      l.payload && (n = Math.min(n, l.payload));
                      for (var a = 0; a < n; a++) {
                        var s = l._tasks.shift();
                        (e.push(s), o.push(s), t.push(s.data));
                      }
                      ((i += 1),
                        0 === l._tasks.length && l.empty(),
                        i === l.concurrency && l.saturated());
                      var d = lt(c(e));
                      r(t, d);
                    }
                    u = !1;
                  }
                },
                length: function () {
                  return l._tasks.length;
                },
                running: function () {
                  return i;
                },
                workersList: function () {
                  return o;
                },
                idle: function () {
                  return l._tasks.length + i === 0;
                },
                pause: function () {
                  l.paused = !0;
                },
                resume: function () {
                  !1 !== l.paused && ((l.paused = !1), p(l.process));
                },
              };
            return l;
          }
          function Fn(e, t) {
            return In(e, 1, t);
          }
          ((_n.prototype.removeLink = function (e) {
            return (
              e.prev ? (e.prev.next = e.next) : (this.head = e.next),
              e.next ? (e.next.prev = e.prev) : (this.tail = e.prev),
              (e.prev = e.next = null),
              (this.length -= 1),
              e
            );
          }),
            (_n.prototype.empty = function () {
              while (this.head) this.shift();
              return this;
            }),
            (_n.prototype.insertAfter = function (e, t) {
              ((t.prev = e),
                (t.next = e.next),
                e.next ? (e.next.prev = t) : (this.tail = t),
                (e.next = t),
                (this.length += 1));
            }),
            (_n.prototype.insertBefore = function (e, t) {
              ((t.prev = e.prev),
                (t.next = e),
                e.prev ? (e.prev.next = t) : (this.head = t),
                (e.prev = t),
                (this.length += 1));
            }),
            (_n.prototype.unshift = function (e) {
              this.head ? this.insertBefore(this.head, e) : Nn(this, e);
            }),
            (_n.prototype.push = function (e) {
              this.tail ? this.insertAfter(this.tail, e) : Nn(this, e);
            }),
            (_n.prototype.shift = function () {
              return this.head && this.removeLink(this.head);
            }),
            (_n.prototype.pop = function () {
              return this.tail && this.removeLink(this.tail);
            }),
            (_n.prototype.toArray = function () {
              for (
                var e = Array(this.length), t = this.head, n = 0;
                n < this.length;
                n++
              )
                ((e[n] = t.data), (t = t.next));
              return e;
            }),
            (_n.prototype.remove = function (e) {
              var t = this.head;
              while (t) {
                var n = t.next;
                (e(t) && this.removeLink(t), (t = n));
              }
              return this;
            }));
          var jn = pt(ft, 1);
          function Ln(e, t, n, r) {
            r = G(r || W);
            var i = C(n);
            jn(
              e,
              function (e, n, r) {
                i(t, e, function (e, n) {
                  ((t = n), r(e));
                });
              },
              function (e) {
                r(e, t);
              },
            );
          }
          function Un() {
            var e = Nt(arguments, C);
            return function () {
              var t = i(arguments),
                n = this,
                r = t[t.length - 1];
              ("function" == typeof r ? t.pop() : (r = W),
                Ln(
                  e,
                  t,
                  function (e, t, r) {
                    t.apply(
                      n,
                      e.concat(function (e) {
                        var t = i(arguments, 1);
                        r(e, t);
                      }),
                    );
                  },
                  function (e, t) {
                    r.apply(n, [e].concat(t));
                  },
                ));
            };
          }
          var Kn = function () {
              return Un.apply(null, i(arguments).reverse());
            },
            Vn = Array.prototype.concat,
            zn = function (e, t, n, r) {
              r = r || W;
              var o = C(n);
              vt(
                e,
                t,
                function (e, t) {
                  o(e, function (e) {
                    return e ? t(e) : t(null, i(arguments, 1));
                  });
                },
                function (e, t) {
                  for (var n = [], i = 0; i < t.length; i++)
                    t[i] && (n = Vn.apply(n, t[i]));
                  return r(e, n);
                },
              );
            },
            Dn = pt(zn, 1 / 0),
            Rn = pt(zn, 1),
            $n = function () {
              var e = i(arguments),
                t = [null].concat(e);
              return function () {
                var e = arguments[arguments.length - 1];
                return e.apply(this, t);
              };
            };
          function Wn(e) {
            return e;
          }
          function Gn(e, t) {
            return function (n, r, i, o) {
              o = o || W;
              var a,
                s = !1;
              n(
                r,
                function (n, r, o) {
                  i(n, function (r, i) {
                    r
                      ? o(r)
                      : e(i) && !a
                        ? ((s = !0), (a = t(!0, n)), o(null, $))
                        : o();
                  });
                },
                function (e) {
                  e ? o(e) : o(null, s ? a : t(!1));
                },
              );
            };
          }
          function qn(e, t) {
            return t;
          }
          var Yn = bt(Gn(Wn, qn)),
            Xn = mt(Gn(Wn, qn)),
            Jn = pt(Xn, 1);
          function Zn(e) {
            return function (t) {
              var n = i(arguments, 1);
              (n.push(function (t) {
                var n = i(arguments, 1);
                "object" === typeof console &&
                  (t
                    ? console.error && console.error(t)
                    : console[e] &&
                      At(n, function (t) {
                        console[e](t);
                      }));
              }),
                C(t).apply(null, n));
            };
          }
          var Qn = Zn("dir");
          function er(e, t, n) {
            n = lt(n || W);
            var r = C(e),
              o = C(t);
            function a(e) {
              if (e) return n(e);
              var t = i(arguments, 1);
              (t.push(s), o.apply(this, t));
            }
            function s(e, t) {
              return e ? n(e) : t ? void r(a) : n(null);
            }
            s(null, !0);
          }
          function tr(e, t, n) {
            n = lt(n || W);
            var r = C(e),
              o = function (e) {
                if (e) return n(e);
                var a = i(arguments, 1);
                if (t.apply(this, a)) return r(o);
                n.apply(null, [null].concat(a));
              };
            r(o);
          }
          function nr(e, t, n) {
            tr(
              e,
              function () {
                return !t.apply(this, arguments);
              },
              n,
            );
          }
          function rr(e, t, n) {
            n = lt(n || W);
            var r = C(t),
              i = C(e);
            function o(e) {
              if (e) return n(e);
              i(a);
            }
            function a(e, t) {
              return e ? n(e) : t ? void r(o) : n(null);
            }
            i(a);
          }
          function ir(e) {
            return function (t, n, r) {
              return e(t, r);
            };
          }
          function or(e, t, n) {
            gt(e, ir(C(t)), n);
          }
          function ar(e, t, n, r) {
            dt(t)(e, ir(C(n)), r);
          }
          var sr = pt(ar, 1);
          function cr(e) {
            return T(e)
              ? e
              : a(function (t, n) {
                  var r = !0;
                  (t.push(function () {
                    var e = arguments;
                    r
                      ? p(function () {
                          n.apply(null, e);
                        })
                      : n.apply(null, e);
                  }),
                    e.apply(this, t),
                    (r = !1));
                });
          }
          function ur(e) {
            return !e;
          }
          var lr = bt(Gn(ur, ur)),
            dr = mt(Gn(ur, ur)),
            fr = pt(dr, 1);
          function pr(e) {
            return function (t) {
              return null == t ? void 0 : t[e];
            };
          }
          function yr(e, t, n, r) {
            var i = new Array(t.length);
            e(
              t,
              function (e, t, r) {
                n(e, function (e, n) {
                  ((i[t] = !!n), r(e));
                });
              },
              function (e) {
                if (e) return r(e);
                for (var n = [], o = 0; o < t.length; o++) i[o] && n.push(t[o]);
                r(null, n);
              },
            );
          }
          function hr(e, t, n, r) {
            var i = [];
            e(
              t,
              function (e, t, r) {
                n(e, function (n, o) {
                  n ? r(n) : (o && i.push({ index: t, value: e }), r());
                });
              },
              function (e) {
                e
                  ? r(e)
                  : r(
                      null,
                      Nt(
                        i.sort(function (e, t) {
                          return e.index - t.index;
                        }),
                        pr("value"),
                      ),
                    );
              },
            );
          }
          function gr(e, t, n, r) {
            var i = R(t) ? yr : hr;
            i(e, t, C(n), r || W);
          }
          var br = bt(gr),
            Tr = mt(gr),
            Cr = pt(Tr, 1);
          function Sr(e, t) {
            var n = lt(t || W),
              r = C(cr(e));
            function i(e) {
              if (e) return n(e);
              r(i);
            }
            i();
          }
          var mr = function (e, t, n, r) {
              r = r || W;
              var i = C(n);
              vt(
                e,
                t,
                function (e, t) {
                  i(e, function (n, r) {
                    return n ? t(n) : t(null, { key: r, val: e });
                  });
                },
                function (e, t) {
                  for (
                    var n = {}, i = Object.prototype.hasOwnProperty, o = 0;
                    o < t.length;
                    o++
                  )
                    if (t[o]) {
                      var a = t[o].key,
                        s = t[o].val;
                      i.call(n, a) ? n[a].push(s) : (n[a] = [s]);
                    }
                  return r(e, n);
                },
              );
            },
            vr = pt(mr, 1 / 0),
            Pr = pt(mr, 1),
            wr = Zn("log");
          function Ar(e, t, n, r) {
            r = G(r || W);
            var i = {},
              o = C(n);
            ft(
              e,
              t,
              function (e, t, n) {
                o(e, t, function (e, r) {
                  if (e) return n(e);
                  ((i[t] = r), n());
                });
              },
              function (e) {
                r(e, i);
              },
            );
          }
          var Er,
            kr = pt(Ar, 1 / 0),
            xr = pt(Ar, 1);
          function Or(e, t) {
            return t in e;
          }
          function Mr(e, t) {
            var n = Object.create(null),
              r = Object.create(null);
            t = t || Wn;
            var o = C(e),
              s = a(function (e, a) {
                var s = t.apply(null, e);
                Or(n, s)
                  ? p(function () {
                      a.apply(null, n[s]);
                    })
                  : Or(r, s)
                    ? r[s].push(a)
                    : ((r[s] = [a]),
                      o.apply(
                        null,
                        e.concat(function () {
                          var e = i(arguments);
                          n[s] = e;
                          var t = r[s];
                          delete r[s];
                          for (var o = 0, a = t.length; o < a; o++)
                            t[o].apply(null, e);
                        }),
                      ));
              });
            return ((s.memo = n), (s.unmemoized = e), s);
          }
          Er = l ? e.nextTick : u ? setImmediate : d;
          var Hr = f(Er);
          function Br(e, t, n) {
            n = n || W;
            var r = R(t) ? [] : {};
            e(
              t,
              function (e, t, n) {
                C(e)(function (e, o) {
                  (arguments.length > 2 && (o = i(arguments, 1)),
                    (r[t] = o),
                    n(e));
                });
              },
              function (e) {
                n(e, r);
              },
            );
          }
          function _r(e, t) {
            Br(gt, e, t);
          }
          function Nr(e, t, n) {
            Br(dt(t), e, n);
          }
          var Ir = function (e, t) {
              var n = C(e);
              return In(
                function (e, t) {
                  n(e[0], t);
                },
                t,
                1,
              );
            },
            Fr = function (e, t) {
              var n = Ir(e, t);
              return (
                (n.push = function (e, t, r) {
                  if ((null == r && (r = W), "function" !== typeof r))
                    throw new Error("task callback must be a function");
                  if (((n.started = !0), ie(e) || (e = [e]), 0 === e.length))
                    return p(function () {
                      n.drain();
                    });
                  t = t || 0;
                  var i = n._tasks.head;
                  while (i && t >= i.priority) i = i.next;
                  for (var o = 0, a = e.length; o < a; o++) {
                    var s = { data: e[o], priority: t, callback: r };
                    i ? n._tasks.insertBefore(i, s) : n._tasks.push(s);
                  }
                  p(n.process);
                }),
                delete n.unshift,
                n
              );
            };
          function jr(e, t) {
            if (((t = G(t || W)), !ie(e)))
              return t(
                new TypeError(
                  "First argument to race must be an array of functions",
                ),
              );
            if (!e.length) return t();
            for (var n = 0, r = e.length; n < r; n++) C(e[n])(t);
          }
          function Lr(e, t, n, r) {
            var o = i(e).reverse();
            Ln(o, t, n, r);
          }
          function Ur(e) {
            var t = C(e);
            return a(function (e, n) {
              return (
                e.push(function (e, t) {
                  var r;
                  e
                    ? n(null, { error: e })
                    : ((r = arguments.length <= 2 ? t : i(arguments, 1)),
                      n(null, { value: r }));
                }),
                t.apply(this, e)
              );
            });
          }
          function Kr(e) {
            var t;
            return (
              ie(e)
                ? (t = Nt(e, Ur))
                : ((t = {}),
                  xt(e, function (e, n) {
                    t[n] = Ur.call(this, e);
                  })),
              t
            );
          }
          function Vr(e, t, n, r) {
            gr(
              e,
              t,
              function (e, t) {
                n(e, function (e, n) {
                  t(e, !n);
                });
              },
              r,
            );
          }
          var zr = bt(Vr),
            Dr = mt(Vr),
            Rr = pt(Dr, 1);
          function $r(e) {
            return function () {
              return e;
            };
          }
          function Wr(e, t, n) {
            var r = 5,
              i = 0,
              o = { times: r, intervalFunc: $r(i) };
            function a(e, t) {
              if ("object" === typeof t)
                ((e.times = +t.times || r),
                  (e.intervalFunc =
                    "function" === typeof t.interval
                      ? t.interval
                      : $r(+t.interval || i)),
                  (e.errorFilter = t.errorFilter));
              else {
                if ("number" !== typeof t && "string" !== typeof t)
                  throw new Error("Invalid arguments for async.retry");
                e.times = +t || r;
              }
            }
            if (
              (arguments.length < 3 && "function" === typeof e
                ? ((n = t || W), (t = e))
                : (a(o, e), (n = n || W)),
              "function" !== typeof t)
            )
              throw new Error("Invalid arguments for async.retry");
            var s = C(t),
              c = 1;
            function u() {
              s(function (e) {
                e &&
                c++ < o.times &&
                ("function" != typeof o.errorFilter || o.errorFilter(e))
                  ? setTimeout(u, o.intervalFunc(c))
                  : n.apply(null, arguments);
              });
            }
            u();
          }
          var Gr = function (e, t) {
            t || ((t = e), (e = null));
            var n = C(t);
            return a(function (t, r) {
              function i(e) {
                n.apply(null, t.concat(e));
              }
              e ? Wr(e, i, r) : Wr(i, r);
            });
          };
          function qr(e, t) {
            Br(jn, e, t);
          }
          var Yr = bt(Gn(Boolean, Wn)),
            Xr = mt(Gn(Boolean, Wn)),
            Jr = pt(Xr, 1);
          function Zr(e, t, n) {
            var r = C(t);
            function i(e, t) {
              var n = e.criteria,
                r = t.criteria;
              return n < r ? -1 : n > r ? 1 : 0;
            }
            Ct(
              e,
              function (e, t) {
                r(e, function (n, r) {
                  if (n) return t(n);
                  t(null, { value: e, criteria: r });
                });
              },
              function (e, t) {
                if (e) return n(e);
                n(null, Nt(t.sort(i), pr("value")));
              },
            );
          }
          function Qr(e, t, n) {
            var r = C(e);
            return a(function (i, o) {
              var a,
                s = !1;
              function c() {
                var t = e.name || "anonymous",
                  r = new Error('Callback function "' + t + '" timed out.');
                ((r.code = "ETIMEDOUT"), n && (r.info = n), (s = !0), o(r));
              }
              (i.push(function () {
                s || (o.apply(null, arguments), clearTimeout(a));
              }),
                (a = setTimeout(c, t)),
                r.apply(null, i));
            });
          }
          var ei = Math.ceil,
            ti = Math.max;
          function ni(e, t, n, r) {
            var i = -1,
              o = ti(ei((t - e) / (n || 1)), 0),
              a = Array(o);
            while (o--) ((a[r ? o : ++i] = e), (e += n));
            return a;
          }
          function ri(e, t, n, r) {
            var i = C(n);
            vt(ni(0, e, 1), t, i, r);
          }
          var ii = pt(ri, 1 / 0),
            oi = pt(ri, 1);
          function ai(e, t, n, r) {
            (arguments.length <= 3 && ((r = n), (n = t), (t = ie(e) ? [] : {})),
              (r = G(r || W)));
            var i = C(n);
            gt(
              e,
              function (e, n, r) {
                i(t, e, n, r);
              },
              function (e) {
                r(e, t);
              },
            );
          }
          function si(e, t) {
            var n,
              r = null;
            ((t = t || W),
              sr(
                e,
                function (e, t) {
                  C(e)(function (e, o) {
                    ((n = arguments.length > 2 ? i(arguments, 1) : o),
                      (r = e),
                      t(!e));
                  });
                },
                function () {
                  t(r, n);
                },
              ));
          }
          function ci(e) {
            return function () {
              return (e.unmemoized || e).apply(null, arguments);
            };
          }
          function ui(e, t, n) {
            n = lt(n || W);
            var r = C(t);
            if (!e()) return n(null);
            var o = function (t) {
              if (t) return n(t);
              if (e()) return r(o);
              var a = i(arguments, 1);
              n.apply(null, [null].concat(a));
            };
            r(o);
          }
          function li(e, t, n) {
            ui(
              function () {
                return !e.apply(this, arguments);
              },
              t,
              n,
            );
          }
          var di = function (e, t) {
              if (((t = G(t || W)), !ie(e)))
                return t(
                  new Error(
                    "First argument to waterfall must be an array of functions",
                  ),
                );
              if (!e.length) return t();
              var n = 0;
              function r(t) {
                var r = C(e[n++]);
                (t.push(lt(o)), r.apply(null, t));
              }
              function o(o) {
                if (o || n === e.length) return t.apply(null, arguments);
                r(i(arguments, 1));
              }
              r([]);
            },
            fi = {
              apply: o,
              applyEach: St,
              applyEachSeries: wt,
              asyncify: y,
              auto: _t,
              autoInject: Bn,
              cargo: Fn,
              compose: Kn,
              concat: Dn,
              concatLimit: zn,
              concatSeries: Rn,
              constant: $n,
              detect: Yn,
              detectLimit: Xn,
              detectSeries: Jn,
              dir: Qn,
              doDuring: er,
              doUntil: nr,
              doWhilst: tr,
              during: rr,
              each: or,
              eachLimit: ar,
              eachOf: gt,
              eachOfLimit: ft,
              eachOfSeries: jn,
              eachSeries: sr,
              ensureAsync: cr,
              every: lr,
              everyLimit: dr,
              everySeries: fr,
              filter: br,
              filterLimit: Tr,
              filterSeries: Cr,
              forever: Sr,
              groupBy: vr,
              groupByLimit: mr,
              groupBySeries: Pr,
              log: wr,
              map: Ct,
              mapLimit: vt,
              mapSeries: Pt,
              mapValues: kr,
              mapValuesLimit: Ar,
              mapValuesSeries: xr,
              memoize: Mr,
              nextTick: Hr,
              parallel: _r,
              parallelLimit: Nr,
              priorityQueue: Fr,
              queue: Ir,
              race: jr,
              reduce: Ln,
              reduceRight: Lr,
              reflect: Ur,
              reflectAll: Kr,
              reject: zr,
              rejectLimit: Dr,
              rejectSeries: Rr,
              retry: Wr,
              retryable: Gr,
              seq: Un,
              series: qr,
              setImmediate: p,
              some: Yr,
              someLimit: Xr,
              someSeries: Jr,
              sortBy: Zr,
              timeout: Qr,
              times: ii,
              timesLimit: ri,
              timesSeries: oi,
              transform: ai,
              tryEach: si,
              unmemoize: ci,
              until: li,
              waterfall: di,
              whilst: ui,
              all: lr,
              allLimit: dr,
              allSeries: fr,
              any: Yr,
              anyLimit: Xr,
              anySeries: Jr,
              find: Yn,
              findLimit: Xn,
              findSeries: Jn,
              forEach: or,
              forEachSeries: sr,
              forEachLimit: ar,
              forEachOf: gt,
              forEachOfSeries: jn,
              forEachOfLimit: ft,
              inject: Ln,
              foldl: Ln,
              foldr: Lr,
              select: br,
              selectLimit: Tr,
              selectSeries: Cr,
              wrapSync: y,
            };
          ((t["default"] = fi),
            (t.apply = o),
            (t.applyEach = St),
            (t.applyEachSeries = wt),
            (t.asyncify = y),
            (t.auto = _t),
            (t.autoInject = Bn),
            (t.cargo = Fn),
            (t.compose = Kn),
            (t.concat = Dn),
            (t.concatLimit = zn),
            (t.concatSeries = Rn),
            (t.constant = $n),
            (t.detect = Yn),
            (t.detectLimit = Xn),
            (t.detectSeries = Jn),
            (t.dir = Qn),
            (t.doDuring = er),
            (t.doUntil = nr),
            (t.doWhilst = tr),
            (t.during = rr),
            (t.each = or),
            (t.eachLimit = ar),
            (t.eachOf = gt),
            (t.eachOfLimit = ft),
            (t.eachOfSeries = jn),
            (t.eachSeries = sr),
            (t.ensureAsync = cr),
            (t.every = lr),
            (t.everyLimit = dr),
            (t.everySeries = fr),
            (t.filter = br),
            (t.filterLimit = Tr),
            (t.filterSeries = Cr),
            (t.forever = Sr),
            (t.groupBy = vr),
            (t.groupByLimit = mr),
            (t.groupBySeries = Pr),
            (t.log = wr),
            (t.map = Ct),
            (t.mapLimit = vt),
            (t.mapSeries = Pt),
            (t.mapValues = kr),
            (t.mapValuesLimit = Ar),
            (t.mapValuesSeries = xr),
            (t.memoize = Mr),
            (t.nextTick = Hr),
            (t.parallel = _r),
            (t.parallelLimit = Nr),
            (t.priorityQueue = Fr),
            (t.queue = Ir),
            (t.race = jr),
            (t.reduce = Ln),
            (t.reduceRight = Lr),
            (t.reflect = Ur),
            (t.reflectAll = Kr),
            (t.reject = zr),
            (t.rejectLimit = Dr),
            (t.rejectSeries = Rr),
            (t.retry = Wr),
            (t.retryable = Gr),
            (t.seq = Un),
            (t.series = qr),
            (t.setImmediate = p),
            (t.some = Yr),
            (t.someLimit = Xr),
            (t.someSeries = Jr),
            (t.sortBy = Zr),
            (t.timeout = Qr),
            (t.times = ii),
            (t.timesLimit = ri),
            (t.timesSeries = oi),
            (t.transform = ai),
            (t.tryEach = si),
            (t.unmemoize = ci),
            (t.until = li),
            (t.waterfall = di),
            (t.whilst = ui),
            (t.all = lr),
            (t.allLimit = dr),
            (t.allSeries = fr),
            (t.any = Yr),
            (t.anyLimit = Xr),
            (t.anySeries = Jr),
            (t.find = Yn),
            (t.findLimit = Xn),
            (t.findSeries = Jn),
            (t.forEach = or),
            (t.forEachSeries = sr),
            (t.forEachLimit = ar),
            (t.forEachOf = gt),
            (t.forEachOfSeries = jn),
            (t.forEachOfLimit = ft),
            (t.inject = Ln),
            (t.foldl = Ln),
            (t.foldr = Lr),
            (t.select = br),
            (t.selectLimit = Tr),
            (t.selectSeries = Cr),
            (t.wrapSync = y),
            Object.defineProperty(t, "__esModule", { value: !0 }));
        });
      }).call(this, n(18), n(13), n(20)(e));
    },
    11526: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeAuthResponse =
          t.getStxAddress =
          t.getAppPrivateKey =
          t.getAccountDisplayName =
            void 0));
      var r = n(5717),
        i = n(6950),
        o = n(2778),
        a = n(3206),
        s = n(3167),
        c = n(4881),
        u = n(4601),
        l = n(3851),
        d = n(6958);
      const f = (e) => {
        let {
          account: t,
          transactionVersion: n = c.TransactionVersion.Testnet,
        } = e;
        return (0, c.getAddressFromPrivateKey)(t.stxPrivateKey, n);
      };
      t.getStxAddress = f;
      const p = (e) =>
        e.username ? e.username.split(".")[0] : "Account " + (e.index + 1);
      t.getAccountDisplayName = p;
      const y = (e) => {
        let { account: t, appDomain: n } = e;
        const i = (0, a.hashSha256Sync)((0, o.utf8ToBytes)(`${n}${t.salt}`)),
          s = (0, o.bytesToHex)(i),
          c = (0, a.hashCode)(s),
          u = r.HDKey.fromExtendedKey(t.appsKey),
          d = u.deriveChild(c + l.HARDENED_OFFSET);
        if (!d.privateKey) throw "Needs private key";
        return (0, o.bytesToHex)(d.privateKey);
      };
      t.getAppPrivateKey = y;
      const h = async (e) => {
        let {
          account: t,
          appDomain: n,
          transitPublicKey: r,
          scopes: o = [],
          gaiaHubUrl: l,
          appPrivateKeyFromWalletSalt: p = null,
          additionalData: h = {},
          fetchFn: g = (0, s.createFetchFn)(),
        } = e;
        const b = y({ account: t, appDomain: n }),
          T = await (0, u.getHubInfo)(l, g),
          C = await (0, d.fetchAccountProfileUrl)({
            account: t,
            gaiaHubUrl: T.read_url_prefix,
          }),
          S = (await (0, d.fetchProfileFromUrl)(C, g)) || d.DEFAULT_PROFILE;
        if (o.includes("publish_data")) {
          S.apps || (S.apps = {});
          const e = (0, a.getPublicKeyFromPrivate)(b),
            r = (0, a.publicKeyToBtcAddress)(e),
            i = `${T.read_url_prefix}${r}/`;
          ((S.apps[n] = i),
            S.appsMeta || (S.appsMeta = {}),
            (S.appsMeta[n] = { storage: i, publicKey: e }));
          const o = (0, u.connectToGaiaHubWithConfig)({
            hubInfo: T,
            privateKey: t.dataPrivateKey,
            gaiaHubUrl: l,
          });
          await (0, d.signAndUploadProfile)({
            profile: S,
            account: t,
            gaiaHubUrl: l,
            gaiaHubConfig: o,
          });
        }
        const m = (0, a.getPublicKeyFromPrivate)(b.slice(0, 64)),
          v = (0, u.makeGaiaAssociationToken)({
            privateKey: t.dataPrivateKey,
            childPublicKeyHex: m,
          });
        return (0, i.makeAuthResponse)(
          t.dataPrivateKey,
          {
            ...(S || {}),
            stxAddress: {
              testnet: f({
                account: t,
                transactionVersion: c.TransactionVersion.Testnet,
              }),
              mainnet: f({
                account: t,
                transactionVersion: c.TransactionVersion.Mainnet,
              }),
            },
            ...h,
          },
          { profileUrl: C },
          void 0,
          b,
          void 0,
          r,
          l,
          void 0,
          v,
          p,
        );
      };
      t.makeAuthResponse = h;
    },
    3127: function (e, t, n) {
      "use strict";
      var r;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VRF_PROOF_BYTES_LENGTH =
          t.UNCOMPRESSED_PUBKEY_LENGTH_BYTES =
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
        (t.anchorModeFromNameOrValue = d),
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
        (t.VRF_PROOF_BYTES_LENGTH = 80),
        (t.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES = 65),
        (t.COMPRESSED_PUBKEY_LENGTH_BYTES = 32),
        (t.UNCOMPRESSED_PUBKEY_LENGTH_BYTES = 64),
        (t.MEMO_MAX_LENGTH_BYTES = 34),
        (t.DEFAULT_CORE_NODE_API_URL = "https://api.mainnet.hiro.so"));
      var i, o, a, s;
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
            (e[(e["CoinbaseToAltRecipient"] = 5)] = "CoinbaseToAltRecipient"),
            (e[(e["TenureChange"] = 7)] = "TenureChange"),
            (e[(e["NakamotoCoinbase"] = 8)] = "NakamotoCoinbase"));
        })(o || (t.PayloadType = o = {})),
        (function (e) {
          ((e[(e["Clarity1"] = 1)] = "Clarity1"),
            (e[(e["Clarity2"] = 2)] = "Clarity2"),
            (e[(e["Clarity3"] = 3)] = "Clarity3"));
        })(a || (t.ClarityVersion = a = {})),
        (function (e) {
          ((e[(e["OnChainOnly"] = 1)] = "OnChainOnly"),
            (e[(e["OffChainOnly"] = 2)] = "OffChainOnly"),
            (e[(e["Any"] = 3)] = "Any"));
        })(s || (t.AnchorMode = s = {})));
      const u = (t.AnchorModeNames = ["onChainOnly", "offChainOnly", "any"]),
        l = {
          [u[0]]: s.OnChainOnly,
          [u[1]]: s.OffChainOnly,
          [u[2]]: s.Any,
          [s.OnChainOnly]: s.OnChainOnly,
          [s.OffChainOnly]: s.OffChainOnly,
          [s.Any]: s.Any,
        };
      function d(e) {
        if (e in l) return l[e];
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
      var p, y, h, g, b, T, C, S, m, v, P;
      ((function (e) {
        ((e[(e["Allow"] = 1)] = "Allow"), (e[(e["Deny"] = 2)] = "Deny"));
      })(p || (t.PostConditionMode = p = {})),
        (function (e) {
          ((e[(e["STX"] = 0)] = "STX"),
            (e[(e["Fungible"] = 1)] = "Fungible"),
            (e[(e["NonFungible"] = 2)] = "NonFungible"));
        })(y || (t.PostConditionType = y = {})),
        (function (e) {
          ((e[(e["Standard"] = 4)] = "Standard"),
            (e[(e["Sponsored"] = 5)] = "Sponsored"));
        })(h || (t.AuthType = h = {})),
        (function (e) {
          ((e[(e["SerializeP2PKH"] = 0)] = "SerializeP2PKH"),
            (e[(e["SerializeP2SH"] = 1)] = "SerializeP2SH"),
            (e[(e["SerializeP2WPKH"] = 2)] = "SerializeP2WPKH"),
            (e[(e["SerializeP2WSH"] = 3)] = "SerializeP2WSH"),
            (e[(e["SerializeP2SHNonSequential"] = 5)] =
              "SerializeP2SHNonSequential"),
            (e[(e["SerializeP2WSHNonSequential"] = 7)] =
              "SerializeP2WSHNonSequential"));
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
        })(C || (t.FungibleConditionCode = C = {})),
        (function (e) {
          ((e[(e["Sends"] = 16)] = "Sends"),
            (e[(e["DoesNotSend"] = 17)] = "DoesNotSend"));
        })(S || (t.NonFungibleConditionCode = S = {})),
        (function (e) {
          ((e[(e["Origin"] = 1)] = "Origin"),
            (e[(e["Standard"] = 2)] = "Standard"),
            (e[(e["Contract"] = 3)] = "Contract"));
        })(m || (t.PostConditionPrincipalID = m = {})),
        (function (e) {
          ((e[(e["STX"] = 0)] = "STX"),
            (e[(e["Fungible"] = 1)] = "Fungible"),
            (e[(e["NonFungible"] = 2)] = "NonFungible"));
        })(v || (t.AssetType = v = {})),
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
            (e["TooMuchChaining"] = "TooMuchChaining"),
            (e["ConflictingNonceInMempool"] = "ConflictingNonceInMempool"),
            (e["BadTransactionVersion"] = "BadTransactionVersion"),
            (e["TransferRecipientCannotEqualSender"] =
              "TransferRecipientCannotEqualSender"),
            (e["TransferAmountMustBePositive"] =
              "TransferAmountMustBePositive"),
            (e["ServerFailureDatabase"] = "ServerFailureDatabase"),
            (e["EstimatorError"] = "EstimatorError"),
            (e["TemporarilyBlacklisted"] = "TemporarilyBlacklisted"),
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
    3237: function (e, t, n) {
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
    3406: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cloneDeep = b),
        (t.cvToHex = E),
        (t.hashP2WSH =
          t.hashP2WPKH =
          t.hashP2SH =
          t.hashP2PKH =
          t.hash160 =
          t.exceedsMaxLengthBytes =
            void 0),
        (t.hexToCV = k),
        (t.isClarityName = A),
        (t.leftPadHexToLength = t.leftPadHex = void 0),
        (t.omit = T),
        (t.validateTxId =
          t.validateStacksAddress =
          t.txidFromData =
          t.txidFromBytes =
          t.rightPadHexToLength =
          t.randomBytes =
          t.parseReadOnlyResponse =
            void 0),
        Object.defineProperty(t, "verifySignature", {
          enumerable: !0,
          get: function () {
            return s.verify;
          },
        }));
      var i = n(11480),
        o = n(5732),
        a = n(11482),
        s = n(3282),
        c = n(2778),
        u = n(3208),
        l = r(n(5733)),
        d = n(3407);
      const f = (e) => s.utils.randomBytes(e);
      t.randomBytes = f;
      const p = (e) => (e.length % 2 == 0 ? e : "0" + e);
      t.leftPadHex = p;
      const y = (e, t) => e.padStart(t, "0");
      t.leftPadHexToLength = y;
      const h = (e, t) => e.padEnd(t, "0");
      t.rightPadHexToLength = h;
      const g = (e, t) => !!e && (0, c.utf8ToBytes)(e).length > t;
      function b(e) {
        return (0, l.default)(e);
      }
      function T(e, t) {
        const n = b(e);
        return (delete n[t], n);
      }
      t.exceedsMaxLengthBytes = g;
      const C = (e) => (0, i.ripemd160)((0, o.sha256)(e));
      t.hash160 = C;
      const S = (e) => (0, c.bytesToHex)((0, a.sha512_256)(e));
      t.txidFromData = S;
      t.txidFromBytes = S;
      const m = (e) => (0, c.bytesToHex)(C(e));
      t.hashP2PKH = m;
      const v = (e) => {
        const t = C(e),
          n = (0, c.concatBytes)(
            new Uint8Array([0]),
            new Uint8Array([t.length]),
            t,
          ),
          r = C(n);
        return (0, c.bytesToHex)(r);
      };
      t.hashP2WPKH = v;
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
          i = C(r);
        return (0, c.bytesToHex)(i);
      };
      t.hashP2SH = P;
      const w = (e, t) => {
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
          a = [];
        (a.push(0), a.push(i.length), a.push(i));
        const s = (0, c.concatArray)(a),
          u = C(s);
        return (0, c.bytesToHex)(u);
      };
      function A(e) {
        const t = /^[a-zA-Z]([a-zA-Z0-9]|[-_!?+<>=/*])*$|^[-+=/*]$|^[<>]=?$/;
        return t.test(e) && e.length < 128;
      }
      function E(e) {
        const t = (0, d.serializeCV)(e);
        return "0x" + (0, c.bytesToHex)(t);
      }
      function k(e) {
        return (0, d.deserializeCV)(e);
      }
      t.hashP2WSH = w;
      const x = (e) => {
        if (e.okay) return k(e.result);
        throw new Error(e.cause);
      };
      t.parseReadOnlyResponse = x;
      const O = (e) => {
        try {
          return ((0, u.c32addressDecode)(e), !0);
        } catch (t) {
          return !1;
        }
      };
      t.validateStacksAddress = O;
      const M = (e) => {
        if ("success" === e) return !0;
        const t = (0, c.with0x)(e).toLowerCase();
        return (
          66 === t.length &&
          (0, c.with0x)(BigInt(t).toString(16).padStart(64, "0")) === t
        );
      };
      t.validateTxId = M;
    },
    3407: function (e, t, n) {
      "use strict";
      var r = n(9);
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
            return a.boolCV;
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
            return d.contractPrincipalCV;
          },
        }),
        Object.defineProperty(t, "contractPrincipalCVFromAddress", {
          enumerable: !0,
          get: function () {
            return d.contractPrincipalCVFromAddress;
          },
        }),
        Object.defineProperty(t, "contractPrincipalCVFromStandard", {
          enumerable: !0,
          get: function () {
            return d.contractPrincipalCVFromStandard;
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
            return a.falseCV;
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
            return s.intCV;
          },
        }),
        Object.defineProperty(t, "isClarityType", {
          enumerable: !0,
          get: function () {
            return i.isClarityType;
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
            return d.principalCV;
          },
        }),
        Object.defineProperty(t, "principalToString", {
          enumerable: !0,
          get: function () {
            return d.principalToString;
          },
        }),
        Object.defineProperty(t, "responseErrorCV", {
          enumerable: !0,
          get: function () {
            return l.responseErrorCV;
          },
        }),
        Object.defineProperty(t, "responseOkCV", {
          enumerable: !0,
          get: function () {
            return l.responseOkCV;
          },
        }),
        Object.defineProperty(t, "serializeCV", {
          enumerable: !0,
          get: function () {
            return h.serializeCV;
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
            return d.standardPrincipalCV;
          },
        }),
        Object.defineProperty(t, "standardPrincipalCVFromAddress", {
          enumerable: !0,
          get: function () {
            return d.standardPrincipalCVFromAddress;
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
            return a.trueCV;
          },
        }),
        Object.defineProperty(t, "tupleCV", {
          enumerable: !0,
          get: function () {
            return p.tupleCV;
          },
        }),
        Object.defineProperty(t, "uintCV", {
          enumerable: !0,
          get: function () {
            return s.uintCV;
          },
        }));
      var i = n(11484),
        o = n(3237),
        a = n(11485),
        s = n(11486),
        c = n(11487),
        u = n(11488),
        l = n(11489),
        d = n(5734),
        f = n(11490),
        p = n(11491),
        y = n(5735),
        h = n(11492),
        g = r(n(11494));
    },
    3468: function (e, t, n) {
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
          a = 0;
        for (let r = e.length - 1; r >= 0; r--)
          if (a < 4) {
            const n = i.indexOf(e[r]) >> a;
            let s = 0;
            0 !== r && (s = i.indexOf(e[r - 1]));
            const c = 1 + a,
              u = (s % (1 << c)) << (5 - c),
              l = t.c32[n + u];
            ((a = c), o.unshift(l));
          } else a = 0;
        let s = 0;
        for (let t = 0; t < o.length; t++) {
          if ("0" !== o[t]) break;
          s++;
        }
        o = o.slice(s);
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
      function a(e) {
        return e.toUpperCase().replace(/O/g, "0").replace(/L|I/g, "1");
      }
      function s(e, n) {
        if (((e = a(e)), !e.match(`^[${t.c32}]*$`)))
          throw new Error("Not a c32-encoded string");
        const r = e.match(`^${t.c32[0]}*`),
          o = r ? r[0].length : 0;
        let s = [],
          c = 0,
          u = 0;
        for (let a = e.length - 1; a >= 0; a--) {
          4 === u && (s.unshift(i[c]), (u = 0), (c = 0));
          const n = t.c32.indexOf(e[a]) << u,
            r = n + c,
            o = i[r % 16];
          if (((u += 1), (c = r >> 4), c > 1 << u))
            throw new Error("Panic error in decoding.");
          s.unshift(o);
        }
        (s.unshift(i[c]), s.length % 2 === 1 && s.unshift("0"));
        let l = 0;
        for (let t = 0; t < s.length; t++) {
          if ("0" !== s[t]) break;
          l++;
        }
        s = s.slice(l - (l % 2));
        let d = s.join("");
        for (let t = 0; t < o; t++) d = "00" + d;
        if (n) {
          const e = 2 * n - d.length;
          for (let t = 0; t < e; t += 2) d = "00" + d;
        }
        return d;
      }
      ((t.c32encode = o), (t.c32normalize = a), (t.c32decode = s));
    },
    3625: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.c32checkDecode = t.c32checkEncode = void 0));
      const r = n(378),
        i = n(130),
        o = n(3624);
      function a(e) {
        const t = (0, r.sha256)((0, r.sha256)((0, i.hexToBytes)(e))),
          n = (0, i.bytesToHex)(t.slice(0, 4));
        return n;
      }
      function s(e, t) {
        if (e < 0 || e >= 32)
          throw new Error("Invalid version (must be between 0 and 31)");
        if (!t.match(/^[0-9a-fA-F]*$/))
          throw new Error("Invalid data (not a hex string)");
        ((t = t.toLowerCase()), t.length % 2 !== 0 && (t = "0" + t));
        let n = e.toString(16);
        1 === n.length && (n = "0" + n);
        const r = a(`${n}${t}`),
          i = (0, o.c32encode)(`${t}${r}`);
        return `${o.c32[e]}${i}`;
      }
      function c(e) {
        e = (0, o.c32normalize)(e);
        const t = (0, o.c32decode)(e.slice(1)),
          n = e[0],
          r = o.c32.indexOf(n),
          i = t.slice(-8);
        let s = r.toString(16);
        if (
          (1 === s.length && (s = "0" + s),
          a(`${s}${t.substring(0, t.length - 8)}`) !== i)
        )
          throw new Error("Invalid c32check string: checksum mismatch");
        return [r, t.substring(0, t.length - 8)];
      }
      ((t.c32checkEncode = s), (t.c32checkDecode = c));
    },
    3626: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createAddress = u),
        (t.createAssetInfo = c),
        (t.createContractPrincipal = d),
        (t.createLPString = s),
        (t.createStandardPrincipal = f),
        (t.parseAssetInfoString = a),
        (t.parsePrincipalString = l));
      var r = n(3127),
        i = n(3208),
        o = n(3406);
      function a(e) {
        const [t, n, r] = e.split(/\.|::/),
          i = c(t, n, r);
        return i;
      }
      function s(e, t, n) {
        const i = t || 1,
          a = n || r.MAX_STRING_LENGTH_BYTES;
        if ((0, o.exceedsMaxLengthBytes)(e, a))
          throw new Error("String length exceeds maximum bytes " + a);
        return {
          type: r.StacksMessageType.LengthPrefixedString,
          content: e,
          lengthPrefixBytes: i,
          maxLengthBytes: a,
        };
      }
      function c(e, t, n) {
        return {
          type: r.StacksMessageType.AssetInfo,
          address: u(e),
          contractName: s(t),
          assetName: s(n),
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
      function l(e) {
        if (e.includes(".")) {
          const [t, n] = e.split(".");
          return d(t, n);
        }
        return f(e);
      }
      function d(e, t) {
        const n = u(e),
          i = s(t);
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
    3851: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getRootNode = t.getGaiaAddress = t.HARDENED_OFFSET = void 0));
      var r = n(3206),
        i = n(5717);
      t.HARDENED_OFFSET = 2147483648;
      const o = (e) => {
        const t = (0, r.getPublicKeyFromPrivate)(e.dataPrivateKey),
          n = (0, r.publicKeyToBtcAddress)(t);
        return n;
      };
      t.getGaiaAddress = o;
      const a = (e) => i.HDKey.fromExtendedKey(e.rootKey);
      t.getRootNode = a;
    },
    3852: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addressFromHashMode = g),
        (t.addressFromPublicKeys = b),
        (t.codeBodyString = w),
        (t.createEmptyAddress = h),
        (t.createLPList = M),
        (t.createMemoString = A),
        (t.deserializeAddress = C),
        (t.deserializeAssetInfo = O),
        (t.deserializeLPList = B),
        (t.deserializeLPString = P),
        (t.deserializeMemoString = k),
        (t.deserializePostCondition = N),
        (t.deserializePrincipal = m),
        (t.deserializeStacksMessage = y),
        (t.serializeAddress = T),
        (t.serializeAssetInfo = x),
        (t.serializeLPList = H),
        (t.serializeLPString = v),
        (t.serializeMemoString = E),
        (t.serializePostCondition = _),
        (t.serializePrincipal = S),
        (t.serializeStacksMessage = p));
      var r = n(2778),
        i = n(3127),
        o = n(3853),
        a = n(3406),
        s = n(3626),
        c = n(4883),
        u = n(3468),
        l = n(4884),
        d = n(4600),
        f = n(3407);
      function p(e) {
        switch (e.type) {
          case i.StacksMessageType.Address:
            return T(e);
          case i.StacksMessageType.Principal:
            return S(e);
          case i.StacksMessageType.LengthPrefixedString:
            return v(e);
          case i.StacksMessageType.MemoString:
            return E(e);
          case i.StacksMessageType.AssetInfo:
            return x(e);
          case i.StacksMessageType.PostCondition:
            return _(e);
          case i.StacksMessageType.PublicKey:
            return (0, o.serializePublicKey)(e);
          case i.StacksMessageType.LengthPrefixedList:
            return H(e);
          case i.StacksMessageType.Payload:
            return (0, c.serializePayload)(e);
          case i.StacksMessageType.TransactionAuthField:
            return (0, l.serializeTransactionAuthField)(e);
          case i.StacksMessageType.MessageSignature:
            return (0, l.serializeMessageSignature)(e);
        }
      }
      function y(e, t, n) {
        switch (t) {
          case i.StacksMessageType.Address:
            return C(e);
          case i.StacksMessageType.Principal:
            return m(e);
          case i.StacksMessageType.LengthPrefixedString:
            return P(e);
          case i.StacksMessageType.MemoString:
            return k(e);
          case i.StacksMessageType.AssetInfo:
            return O(e);
          case i.StacksMessageType.PostCondition:
            return N(e);
          case i.StacksMessageType.PublicKey:
            return (0, o.deserializePublicKey)(e);
          case i.StacksMessageType.Payload:
            return (0, c.deserializePayload)(e);
          case i.StacksMessageType.LengthPrefixedList:
            if (!n) throw new u.DeserializationError("No List Type specified");
            return B(e, n);
          case i.StacksMessageType.MessageSignature:
            return (0, l.deserializeMessageSignature)(e);
          default:
            throw new Error("Could not recognize StacksMessageType");
        }
      }
      function h() {
        return {
          type: i.StacksMessageType.Address,
          version: i.AddressVersion.MainnetSingleSig,
          hash160: "0".repeat(40),
        };
      }
      function g(e, t, n) {
        const r = (0, d.addressHashModeToVersion)(e, t);
        return (0, d.addressFromVersionHash)(r, n);
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
          (t === i.AddressHashMode.SerializeP2WPKH ||
            t === i.AddressHashMode.SerializeP2WSH ||
            t === i.AddressHashMode.SerializeP2WSHNonSequential) &&
          !r.every(o.isCompressed)
        )
          throw Error("Public keys must be compressed for segwit");
        switch (t) {
          case i.AddressHashMode.SerializeP2PKH:
            return (0, d.addressFromVersionHash)(
              e,
              (0, a.hashP2PKH)(r[0].data),
            );
          case i.AddressHashMode.SerializeP2WPKH:
            return (0, d.addressFromVersionHash)(
              e,
              (0, a.hashP2WPKH)(r[0].data),
            );
          case i.AddressHashMode.SerializeP2SH:
          case i.AddressHashMode.SerializeP2SHNonSequential:
            return (0, d.addressFromVersionHash)(
              e,
              (0, a.hashP2SH)(n, r.map(o.serializePublicKey)),
            );
          case i.AddressHashMode.SerializeP2WSH:
          case i.AddressHashMode.SerializeP2WSHNonSequential:
            return (0, d.addressFromVersionHash)(
              e,
              (0, a.hashP2WSH)(n, r.map(o.serializePublicKey)),
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
      function C(e) {
        const t = (0, r.hexToInt)((0, r.bytesToHex)(e.readBytes(1))),
          n = (0, r.bytesToHex)(e.readBytes(20));
        return { type: i.StacksMessageType.Address, version: t, hash160: n };
      }
      function S(e) {
        const t = [];
        return (
          t.push(e.prefix),
          t.push(T(e.address)),
          e.prefix === i.PostConditionPrincipalID.Contract &&
            t.push(v(e.contractName)),
          (0, r.concatArray)(t)
        );
      }
      function m(e) {
        const t = e.readUInt8Enum(i.PostConditionPrincipalID, (e) => {
            throw new u.DeserializationError(
              "Unexpected Principal payload type: " + e,
            );
          }),
          n = C(e);
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
      function v(e) {
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
        return (0, s.createLPString)(
          o,
          t,
          null !== n && void 0 !== n ? n : 128,
        );
      }
      function w(e) {
        return (0, s.createLPString)(e, 4, 1e5);
      }
      function A(e) {
        if (e && (0, a.exceedsMaxLengthBytes)(e, i.MEMO_MAX_LENGTH_BYTES))
          throw new Error(
            `Memo exceeds maximum length of ${i.MEMO_MAX_LENGTH_BYTES} bytes`,
          );
        return { type: i.StacksMessageType.MemoString, content: e };
      }
      function E(e) {
        const t = [],
          n = (0, r.utf8ToBytes)(e.content),
          o = (0, a.rightPadHexToLength)(
            (0, r.bytesToHex)(n),
            2 * i.MEMO_MAX_LENGTH_BYTES,
          );
        return (t.push((0, r.hexToBytes)(o)), (0, r.concatArray)(t));
      }
      function k(e) {
        let t = (0, r.bytesToUtf8)(e.readBytes(i.MEMO_MAX_LENGTH_BYTES));
        return (
          (t = t.replace(/\u0000*$/, "")),
          { type: i.StacksMessageType.MemoString, content: t }
        );
      }
      function x(e) {
        const t = [];
        return (
          t.push(T(e.address)),
          t.push(v(e.contractName)),
          t.push(v(e.assetName)),
          (0, r.concatArray)(t)
        );
      }
      function O(e) {
        return {
          type: i.StacksMessageType.AssetInfo,
          address: C(e),
          contractName: P(e),
          assetName: P(e),
        };
      }
      function M(e, t) {
        return {
          type: i.StacksMessageType.LengthPrefixedList,
          lengthPrefixBytes: t || 4,
          values: e,
        };
      }
      function H(e) {
        const t = e.values,
          n = [];
        n.push(
          (0, r.hexToBytes)((0, r.intToHex)(t.length, e.lengthPrefixBytes)),
        );
        for (const r of t) n.push(p(r));
        return (0, r.concatArray)(n);
      }
      function B(e, t, n) {
        const a = (0, r.hexToInt)((0, r.bytesToHex)(e.readBytes(n || 4))),
          s = [];
        for (let r = 0; r < a; r++)
          switch (t) {
            case i.StacksMessageType.Address:
              s.push(C(e));
              break;
            case i.StacksMessageType.LengthPrefixedString:
              s.push(P(e));
              break;
            case i.StacksMessageType.MemoString:
              s.push(k(e));
              break;
            case i.StacksMessageType.AssetInfo:
              s.push(O(e));
              break;
            case i.StacksMessageType.PostCondition:
              s.push(N(e));
              break;
            case i.StacksMessageType.PublicKey:
              s.push((0, o.deserializePublicKey)(e));
              break;
            case i.StacksMessageType.TransactionAuthField:
              s.push((0, l.deserializeTransactionAuthField)(e));
              break;
          }
        return M(s, n);
      }
      function _(e) {
        const t = [];
        if (
          (t.push(e.conditionType),
          t.push(S(e.principal)),
          (e.conditionType !== i.PostConditionType.Fungible &&
            e.conditionType !== i.PostConditionType.NonFungible) ||
            t.push(x(e.assetInfo)),
          e.conditionType === i.PostConditionType.NonFungible &&
            t.push((0, f.serializeCV)(e.assetName)),
          t.push(e.conditionCode),
          e.conditionType === i.PostConditionType.STX ||
            e.conditionType === i.PostConditionType.Fungible)
        ) {
          if (e.amount > BigInt("0xffffffffffffffff"))
            throw new u.SerializationError(
              "The post-condition amount may not be larger than 8 bytes",
            );
          t.push((0, r.intToBytes)(e.amount, !1, 8));
        }
        return (0, r.concatArray)(t);
      }
      function N(e) {
        const t = e.readUInt8Enum(i.PostConditionType, (e) => {
            throw new u.DeserializationError(
              `Could not read ${e} as PostConditionType`,
            );
          }),
          n = m(e);
        let o, a, s;
        switch (t) {
          case i.PostConditionType.STX:
            return (
              (o = e.readUInt8Enum(i.FungibleConditionCode, (e) => {
                throw new u.DeserializationError(
                  `Could not read ${e} as FungibleConditionCode`,
                );
              })),
              (s = BigInt("0x" + (0, r.bytesToHex)(e.readBytes(8)))),
              {
                type: i.StacksMessageType.PostCondition,
                conditionType: i.PostConditionType.STX,
                principal: n,
                conditionCode: o,
                amount: s,
              }
            );
          case i.PostConditionType.Fungible:
            return (
              (a = O(e)),
              (o = e.readUInt8Enum(i.FungibleConditionCode, (e) => {
                throw new u.DeserializationError(
                  `Could not read ${e} as FungibleConditionCode`,
                );
              })),
              (s = BigInt("0x" + (0, r.bytesToHex)(e.readBytes(8)))),
              {
                type: i.StacksMessageType.PostCondition,
                conditionType: i.PostConditionType.Fungible,
                principal: n,
                conditionCode: o,
                amount: s,
                assetInfo: a,
              }
            );
          case i.PostConditionType.NonFungible:
            a = O(e);
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
                assetInfo: a,
                assetName: t,
              }
            );
        }
      }
    },
    3853: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.compressPublicKey = m),
        (t.createStacksPrivateKey = w),
        (t.createStacksPublicKey = p),
        (t.deserializePublicKey = P),
        (t.getAddressFromPrivateKey = d),
        (t.getAddressFromPublicKey = f),
        (t.getPublicKey = x),
        (t.isCompressed = b),
        (t.makeRandomPrivKey = A),
        (t.privateKeyToString = O),
        (t.pubKeyfromPrivKey = S),
        (t.publicKeyFromBytes = g),
        (t.publicKeyFromSignatureRsv = h),
        (t.publicKeyFromSignatureVrs = y),
        (t.publicKeyToAddress = M),
        (t.publicKeyToString = T),
        (t.serializePublicKey = C),
        (t.signMessageHashRsv = k),
        (t.signWithKey = E),
        (t.uncompressPublicKey = v));
      var r = n(11493),
        i = n(5732),
        o = n(3282),
        a = n(2778),
        s = n(3208),
        c = n(4600),
        u = n(3127),
        l = n(3406);
      function d(e, t) {
        void 0 === t && (t = u.TransactionVersion.Mainnet);
        const n = S(e);
        return f(n.data, t);
      }
      function f(e, t) {
        (void 0 === t && (t = u.TransactionVersion.Mainnet),
          (e = "string" === typeof e ? e : (0, a.bytesToHex)(e)));
        const n = (0, c.addressHashModeToVersion)(
            u.AddressHashMode.SerializeP2PKH,
            t,
          ),
          r = (0, c.addressFromVersionHash)(
            n,
            (0, l.hashP2PKH)((0, a.hexToBytes)(e)),
          ),
          i = (0, c.addressToString)(r);
        return i;
      }
      function p(e) {
        return {
          type: u.StacksMessageType.PublicKey,
          data: (0, a.hexToBytes)(e),
        };
      }
      function y(e, t, n) {
        void 0 === n && (n = u.PubKeyEncoding.Compressed);
        const r = (0, a.parseRecoverableSignatureVrs)(t.data),
          i = new o.Signature((0, a.hexToBigInt)(r.r), (0, a.hexToBigInt)(r.s)),
          s = o.Point.fromSignature(e, i, r.recoveryId),
          c = n === u.PubKeyEncoding.Compressed;
        return s.toHex(c);
      }
      function h(e, t, n) {
        return (
          void 0 === n && (n = u.PubKeyEncoding.Compressed),
          y(e, { ...t, data: (0, a.signatureRsvToVrs)(t.data) }, n)
        );
      }
      function g(e) {
        return { type: u.StacksMessageType.PublicKey, data: e };
      }
      function b(e) {
        return !(0, a.bytesToHex)(e.data).startsWith("04");
      }
      function T(e) {
        return (0, a.bytesToHex)(e.data);
      }
      function C(e) {
        return e.data.slice();
      }
      function S(e) {
        const t = w(e),
          n = (0, o.getPublicKey)(t.data.slice(0, 32), t.compressed);
        return p((0, a.bytesToHex)(n));
      }
      function m(e) {
        const t = "string" === typeof e ? e : (0, a.bytesToHex)(e),
          n = o.Point.fromHex(t).toHex(!0);
        return p(n);
      }
      function v(e) {
        const t = "string" === typeof e ? e : (0, a.bytesToHex)(e),
          n = o.Point.fromHex(t).toHex(!1);
        return p(n);
      }
      function P(e) {
        const t = e.readUInt8(),
          n =
            4 === t
              ? u.UNCOMPRESSED_PUBKEY_LENGTH_BYTES
              : u.COMPRESSED_PUBKEY_LENGTH_BYTES;
        return g((0, a.concatArray)([t, e.readBytes(n)]));
      }
      function w(e) {
        const t = (0, a.privateKeyToBytes)(e),
          n = t.length == a.PRIVATE_KEY_COMPRESSED_LENGTH;
        return { data: t, compressed: n };
      }
      function A() {
        return w(o.utils.randomPrivateKey());
      }
      function E(e, t) {
        const [n, r] = (0, o.signSync)(t, e.data.slice(0, 32), {
          canonical: !0,
          recovered: !0,
        });
        if (null == r) throw new Error("No signature recoveryId received");
        const i = (0, a.intToHex)(r, 1),
          s = i + o.Signature.fromHex(n).toCompactHex();
        return (0, c.createMessageSignature)(s);
      }
      function k(e) {
        let { messageHash: t, privateKey: n } = e;
        const r = E(n, t);
        return { ...r, data: (0, a.signatureVrsToRsv)(r.data) };
      }
      function x(e) {
        return S(e.data);
      }
      function O(e) {
        return (0, a.bytesToHex)(e.data);
      }
      function M(e, t) {
        return (0, s.c32address)(e, (0, a.bytesToHex)((0, l.hash160)(t.data)));
      }
      o.utils.hmacSha256Sync = function (e) {
        const t = r.hmac.create(i.sha256, e);
        for (
          var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1;
          a < n;
          a++
        )
          o[a - 1] = arguments[a];
        return (o.forEach((e) => t.update(e)), t.digest());
      };
    },
    4596: function (e, t, n) {
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
      const r = n(11481),
        i = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      t.u8 = i;
      const o = (e) =>
        new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      t.u32 = o;
      const a = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
      t.createView = a;
      const s = (e, t) => (e << (32 - t)) | (e >>> t);
      if (
        ((t.rotr = s),
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
      function l(e) {
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
      ((t.bytesToHex = u), (t.hexToBytes = l));
      const d = async () => {};
      async function f(e, n, r) {
        let i = Date.now();
        for (let o = 0; o < e; o++) {
          r(o);
          const e = Date.now() - i;
          (e >= 0 && e < n) || (await (0, t.nextTick)(), (i += e));
        }
      }
      function p(e) {
        if ("string" !== typeof e)
          throw new TypeError("utf8ToBytes expected string, got " + typeof e);
        return new TextEncoder().encode(e);
      }
      function y(e) {
        if (("string" === typeof e && (e = p(e)), !(e instanceof Uint8Array)))
          throw new TypeError(
            `Expected input type is Uint8Array (got ${typeof e})`,
          );
        return e;
      }
      function h() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (!t.every((e) => e instanceof Uint8Array))
          throw new Error("Uint8Array list expected");
        if (1 === t.length) return t[0];
        const r = t.reduce((e, t) => e + t.length, 0),
          i = new Uint8Array(r);
        for (let o = 0, a = 0; o < t.length; o++) {
          const e = t[o];
          (i.set(e, a), (a += e.length));
        }
        return i;
      }
      ((t.nextTick = d),
        (t.asyncLoop = f),
        (t.utf8ToBytes = p),
        (t.toBytes = y),
        (t.concatBytes = h));
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
      function C(e) {
        const t = (t, n) => e(n).update(y(t)).digest(),
          n = e({});
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = (t) => e(t)),
          t
        );
      }
      function S(e) {
        if ((void 0 === e && (e = 32), r.crypto.web))
          return r.crypto.web.getRandomValues(new Uint8Array(e));
        if (r.crypto.node)
          return new Uint8Array(r.crypto.node.randomBytes(e).buffer);
        throw new Error("The environment doesn't have randomBytes function");
      }
      ((t.checkOpts = b),
        (t.wrapConstructor = T),
        (t.wrapConstructorWithOpts = C),
        (t.randomBytes = S));
    },
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
      const a = {};
      ((a[0] = t.versions.mainnet.p2pkh),
        (a[5] = t.versions.mainnet.p2sh),
        (a[111] = t.versions.testnet.p2pkh),
        (a[196] = t.versions.testnet.p2sh));
      const s = {};
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
      function l(e, t) {
        void 0 === t && (t = -1);
        const n = i.decode(e),
          r = (0, o.bytesToHex)(n.data),
          s = parseInt((0, o.bytesToHex)(n.prefix), 16);
        let u;
        return (
          t < 0 ? ((u = s), void 0 !== a[s] && (u = a[s])) : (u = t),
          c(u, r)
        );
      }
      function d(e, t) {
        void 0 === t && (t = -1);
        const n = u(e),
          r = n[0],
          o = n[1];
        let a;
        t < 0 ? ((a = r), void 0 !== s[r] && (a = s[r])) : (a = t);
        let c = a.toString(16);
        return (1 === c.length && (c = "0" + c), i.encode(o, c));
      }
      ((s[t.versions.mainnet.p2pkh] = 0),
        (s[t.versions.mainnet.p2sh] = 5),
        (s[t.versions.testnet.p2pkh] = 111),
        (s[t.versions.testnet.p2sh] = 196),
        (t.c32address = c),
        (t.c32addressDecode = u),
        (t.b58ToC32 = l),
        (t.c32ToB58 = d));
    },
    4598: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decode = t.encode = void 0));
      const r = n(378),
        i = n(130),
        o = n(4599),
        a = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      function s(e, t) {
        void 0 === t && (t = "00");
        const n = "string" === typeof e ? (0, i.hexToBytes)(e) : e,
          s = "string" === typeof t ? (0, i.hexToBytes)(t) : e;
        if (!(n instanceof Uint8Array) || !(s instanceof Uint8Array))
          throw new TypeError("Argument must be of type Uint8Array or string");
        const c = (0, r.sha256)((0, r.sha256)(new Uint8Array([...s, ...n])));
        return o(a).encode([...s, ...n, ...c.slice(0, 4)]);
      }
      function c(e) {
        const t = o(a).decode(e),
          n = t.slice(0, 1),
          i = t.slice(1, -4),
          s = (0, r.sha256)((0, r.sha256)(new Uint8Array([...n, ...i])));
        return (
          t.slice(-4).forEach((e, t) => {
            if (e !== s[t]) throw new Error("Invalid checksum");
          }),
          { prefix: n, data: i }
        );
      }
      ((t.encode = s), (t.decode = c));
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
        var a = e.length,
          s = e.charAt(0),
          c = Math.log(a) / Math.log(256),
          u = Math.log(256) / Math.log(a);
        function l(t) {
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
            l = new Uint8Array(c);
          while (i !== o) {
            for (
              var d = t[i], f = 0, p = c - 1;
              (0 !== d || f < r) && -1 !== p;
              p--, f++
            )
              ((d += (256 * l[p]) >>> 0),
                (l[p] = (d % a) >>> 0),
                (d = (d / a) >>> 0));
            if (0 !== d) throw new Error("Non-zero carry");
            ((r = f), i++);
          }
          var y = c - r;
          while (y !== c && 0 === l[y]) y++;
          for (var h = s.repeat(n); y < c; ++y) h += e.charAt(l[y]);
          return h;
        }
        function d(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var n = 0,
            r = 0,
            i = 0;
          while (e[n] === s) (r++, n++);
          var o = ((e.length - n) * c + 1) >>> 0,
            u = new Uint8Array(o);
          while (e[n]) {
            var l = e.charCodeAt(n);
            if (l > 255) return;
            var d = t[l];
            if (255 === d) return;
            for (var f = 0, p = o - 1; (0 !== d || f < i) && -1 !== p; p--, f++)
              ((d += (a * u[p]) >>> 0),
                (u[p] = (d % 256) >>> 0),
                (d = (d / 256) >>> 0));
            if (0 !== d) throw new Error("Non-zero carry");
            ((i = f), n++);
          }
          var y = o - i;
          while (y !== o && 0 === u[y]) y++;
          var h = new Uint8Array(r + (o - y)),
            g = r;
          while (y !== o) h[g++] = u[y++];
          return h;
        }
        function f(e) {
          var t = d(e);
          if (t) return t;
          throw new Error("Non-base" + a + " character");
        }
        return { encode: l, decodeUnsafe: d, decode: f };
      }
      e.exports = r;
    },
    4600: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addressFromVersionHash = c),
        (t.addressHashModeToVersion = s),
        (t.addressToString = u),
        (t.createMessageSignature = a));
      var r = n(3127),
        i = n(3208),
        o = n(2778);
      function a(e) {
        const t = (0, o.hexToBytes)(e).byteLength;
        if (t != r.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES)
          throw Error("Invalid signature");
        return { type: r.StacksMessageType.MessageSignature, data: e };
      }
      function s(e, t) {
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
          case r.AddressHashMode.SerializeP2SHNonSequential:
          case r.AddressHashMode.SerializeP2WPKH:
          case r.AddressHashMode.SerializeP2WSH:
          case r.AddressHashMode.SerializeP2WSHNonSequential:
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
    4601: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.assertIsTruthy = c),
        (t.makeGaiaAssociationToken =
          t.getProfileURLFromZoneFile =
          t.getHubInfo =
          t.connectToGaiaHubWithConfig =
            void 0),
        (t.whenChainId = y));
      var r = n(2778),
        i = n(3206),
        o = n(3167),
        a = n(3854),
        s = n(5738);
      function c(e) {
        if (!e) throw new Error("expected: true, actual: " + e);
      }
      const u = async function (e, t) {
        void 0 === t && (t = (0, o.createFetchFn)());
        const n = "https://stacks-node-api.stacks.co/v1/names/" + e,
          r = await t(n);
        if (r.ok) {
          var i, a;
          const e = await r.json(),
            t = (0, s.parseZoneFile)(e.zonefile),
            n =
              null === (i = t.uri) ||
              void 0 === i ||
              null === (a = i[0]) ||
              void 0 === a
                ? void 0
                : a.target;
          if (n) return n;
          throw new Error("No zonefile uri found: " + e.zonefile);
        }
      };
      t.getProfileURLFromZoneFile = u;
      const l = async function (e, t) {
        void 0 === t && (t = (0, o.createFetchFn)());
        const n = await t(e + "/hub_info"),
          r = await n.json();
        return r;
      };
      t.getHubInfo = l;
      const d = (e) => {
          let { hubInfo: t, privateKey: n, gaiaHubUrl: o } = e;
          const s = t.challenge_text,
            c = (0, i.getPublicKeyFromPrivate)(n),
            u = (0, r.bytesToHex)((0, i.randomBytes)(16)),
            l = { gaiaHubUrl: o, iss: c, salt: u };
          s && (l.gaiaChallenge = s);
          const d = new a.TokenSigner("ES256K", n).sign(l);
          return "v1:" + d;
        },
        f = (e) => {
          let { hubInfo: t, privateKey: n, gaiaHubUrl: r } = e;
          const o = t.read_url_prefix,
            a = d({ hubInfo: t, privateKey: n, gaiaHubUrl: r }),
            s = (0, i.publicKeyToBtcAddress)((0, i.getPublicKeyFromPrivate)(n));
          return {
            url_prefix: o,
            max_file_upload_size_megabytes: 100,
            address: s,
            token: a,
            server: r,
          };
        };
      t.connectToGaiaHubWithConfig = f;
      const p = (e) => {
        let { privateKey: t, childPublicKeyHex: n } = e;
        const o = 31536e3,
          s = t.slice(0, 64),
          c = (0, i.getPublicKeyFromPrivate)(s),
          u = (0, r.bytesToHex)((0, i.randomBytes)(16)),
          l = {
            childToAssociate: n,
            iss: c,
            exp: o + new Date().getTime() / 1e3,
            iat: Date.now() / 1e3,
            salt: u,
          },
          d = new a.TokenSigner("ES256K", s),
          f = d.sign(l);
        return f;
      };
      function y(e) {
        return (t) => t[e];
      }
      t.makeGaiaAssociationToken = p;
    },
    4880: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.selectStxDerivation =
          t.fetchUsernameForAccountByDerivationType =
          t.deriveWalletKeys =
          t.deriveStxPrivateKey =
          t.deriveSalt =
          t.derivePrivateKeyByType =
          t.deriveLegacyConfigPrivateKey =
          t.deriveDataPrivateKey =
          t.deriveConfigPrivateKey =
          t.deriveAccount =
          t.DerivationType =
            void 0));
      var r = n(2778),
        i = n(3206),
        o = n(3167),
        a = n(4881),
        s = n(3851),
        c = n(11501),
        u = n(4601);
      const l = "m/888'/0'",
        d = "m/44/5757'/0'/1",
        f = "m/44'/5757'/0'/0",
        p = async (e) => (
          (0, u.assertIsTruthy)(e.privateKey),
          {
            salt: await g(e),
            rootKey: e.privateExtendedKey,
            configPrivateKey: (0, r.bytesToHex)(y(e)),
          }
        );
      t.deriveWalletKeys = p;
      const y = (e) => {
        const t = e.derive(d).privateKey;
        if (!t)
          throw new TypeError(
            "Unable to derive config key for wallet identities",
          );
        return t;
      };
      t.deriveConfigPrivateKey = y;
      const h = (e) => {
        const t = e.deriveChild(45 + s.HARDENED_OFFSET).privateKey;
        if (!t)
          throw new TypeError(
            "Unable to derive config key for wallet identities",
          );
        return (0, r.bytesToHex)(t);
      };
      t.deriveLegacyConfigPrivateKey = h;
      const g = async (e) => {
        const t = e.derive(l),
          n = (0, r.utf8ToBytes)((0, r.bytesToHex)(t.publicKey)),
          o = await (0, i.createSha2Hash)(),
          a = await o.digest(n, "sha256");
        return (0, r.bytesToHex)(a);
      };
      var b;
      ((t.deriveSalt = g),
        (function (e) {
          ((e[(e["Wallet"] = 0)] = "Wallet"),
            (e[(e["Data"] = 1)] = "Data"),
            (e[(e["Unknown"] = 2)] = "Unknown"));
        })(b || (t.DerivationType = b = {})));
      const T = async (e) => {
        let { username: t, rootNode: n, index: r, network: i } = e;
        if (t) {
          const e = await C({ username: t, rootNode: n, index: r, network: i });
          return { username: t, stxDerivationType: e };
        }
        {
          const { username: e, derivationType: t } = await S({
            rootNode: n,
            index: r,
            network: i,
          });
          return { username: e, stxDerivationType: t };
        }
      };
      t.selectStxDerivation = T;
      const C = async (e) => {
          let { username: t, rootNode: n, index: r, network: i } = e;
          if (i) {
            const e = await i.getNameInfo(t);
            let o = P({ rootNode: n, index: r }),
              s = (0, a.getAddressFromPrivateKey)(o);
            return s !== e.address
              ? ((o = w({ rootNode: n, index: r })),
                (s = (0, a.getAddressFromPrivateKey)(o)),
                s !== e.address ? b.Unknown : b.Data)
              : b.Wallet;
          }
          return b.Unknown;
        },
        S = async (e) => {
          let { rootNode: t, index: n, network: i } = e;
          if (i) {
            const e = (0, u.whenChainId)(i.chainId)({
                [r.ChainID.Mainnet]: r.TransactionVersion.Mainnet,
                [r.ChainID.Testnet]: r.TransactionVersion.Testnet,
              }),
              o = P({ rootNode: t, index: n }),
              s = (0, a.getAddressFromPrivateKey)(o, e);
            let l = await (0, c.fetchFirstName)(s, i);
            if (l) return { username: l, derivationType: b.Wallet };
            {
              const r = w({ rootNode: t, index: n }),
                o = (0, a.getAddressFromPrivateKey)(r, e);
              if (((l = await (0, c.fetchFirstName)(o, i)), l))
                return { username: l, derivationType: b.Data };
            }
          }
          return { username: void 0, derivationType: b.Wallet };
        },
        m = async (e) => {
          let { rootNode: t, index: n, derivationType: i, network: s } = e;
          const l = null !== s && void 0 !== s ? s : new o.StacksMainnet(),
            d = (0, u.whenChainId)(l.chainId)({
              [r.ChainID.Mainnet]: r.TransactionVersion.Mainnet,
              [r.ChainID.Testnet]: r.TransactionVersion.Testnet,
            }),
            f = v({ rootNode: t, index: n, derivationType: i }),
            p = (0, a.getAddressFromPrivateKey)(f, d),
            y = await (0, c.fetchFirstName)(p, l);
          return { username: y };
        };
      t.fetchUsernameForAccountByDerivationType = m;
      const v = (e) => {
        let { rootNode: t, index: n, derivationType: r } = e;
        return r === b.Wallet
          ? P({ rootNode: t, index: n })
          : w({ rootNode: t, index: n });
      };
      t.derivePrivateKeyByType = v;
      const P = (e) => {
        let { rootNode: t, index: n } = e;
        const o = t.derive(f).deriveChild(n);
        return (
          (0, u.assertIsTruthy)(o.privateKey),
          (0, r.bytesToHex)((0, i.compressPrivateKey)(o.privateKey))
        );
      };
      t.deriveStxPrivateKey = P;
      const w = (e) => {
        let { rootNode: t, index: n } = e;
        const o = t.derive(l).deriveChild(n + s.HARDENED_OFFSET);
        return (
          (0, u.assertIsTruthy)(o.privateKey),
          (0, r.bytesToHex)((0, i.compressPrivateKey)(o.privateKey))
        );
      };
      t.deriveDataPrivateKey = w;
      const A = (e) => {
        let { rootNode: t, index: n, salt: i, stxDerivationType: o } = e;
        const a =
            o === b.Wallet
              ? P({ rootNode: t, index: n })
              : w({ rootNode: t, index: n }),
          c = t.derive(l),
          u = c.deriveChild(n + s.HARDENED_OFFSET);
        if (!u.privateKey)
          throw new Error("Must have private key to derive identities");
        const d = (0, r.bytesToHex)(u.privateKey),
          f = u.deriveChild(0 + s.HARDENED_OFFSET).privateExtendedKey;
        return {
          stxPrivateKey: a,
          dataPrivateKey: d,
          appsKey: f,
          salt: i,
          index: n,
        };
      };
      t.deriveAccount = A;
    },
    4881: function (e, t, n) {
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
          return a.BytesReader;
        },
      }),
        (t.Pc = t.Cl = void 0),
        Object.defineProperty(t, "StacksTransaction", {
          enumerable: !0,
          get: function () {
            return S.StacksTransaction;
          },
        }),
        Object.defineProperty(t, "createFungiblePostCondition", {
          enumerable: !0,
          get: function () {
            return h.createFungiblePostCondition;
          },
        }),
        Object.defineProperty(t, "createNonFungiblePostCondition", {
          enumerable: !0,
          get: function () {
            return h.createNonFungiblePostCondition;
          },
        }),
        Object.defineProperty(t, "createSTXPostCondition", {
          enumerable: !0,
          get: function () {
            return h.createSTXPostCondition;
          },
        }),
        Object.defineProperty(t, "deserializeTransaction", {
          enumerable: !0,
          get: function () {
            return S.deserializeTransaction;
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
            return p.isCoinbasePayload;
          },
        }),
        Object.defineProperty(t, "isContractCallPayload", {
          enumerable: !0,
          get: function () {
            return p.isContractCallPayload;
          },
        }),
        Object.defineProperty(t, "isPoisonPayload", {
          enumerable: !0,
          get: function () {
            return p.isPoisonPayload;
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
            return p.isSmartContractPayload;
          },
        }),
        Object.defineProperty(t, "isTokenTransferPayload", {
          enumerable: !0,
          get: function () {
            return p.isTokenTransferPayload;
          },
        }),
        Object.defineProperty(t, "serializePayload", {
          enumerable: !0,
          get: function () {
            return p.serializePayload;
          },
        }));
      var i = n(4882);
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
      var o = n(6941);
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
      var a = n(5736),
        s = w(n(11495));
      t.Cl = s;
      var c = n(3407);
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
      var u = n(4600);
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
      var l = n(3127);
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
      var d = n(6942);
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
      var f = n(3853);
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
      var p = n(4883),
        y = w(n(11498));
      t.Pc = y;
      var h = n(6943),
        g = n(3626);
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
      var b = n(4884);
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
      var T = n(6944);
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
      var C = n(11499);
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
      var S = n(6945),
        m = n(3852);
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
      var v = n(11500);
      Object.keys(v).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === v[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return v[e];
              },
            }));
      });
      var P = n(3406);
      function w(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (w = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            o,
            a = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return a;
          if ((i = t ? r : n)) {
            if (i.has(e)) return i.get(e);
            i.set(e, a);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (o.get || o.set)
                ? i(a, n, o)
                : (a[n] = e[n]));
          return a;
        })(e, t);
      }
      Object.keys(P).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === P[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return P[e];
              },
            }));
      });
    },
    4882: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createMultiSigSpendingCondition = f),
        (t.createSingleSigSpendingCondition = d),
        (t.createSponsoredAuth = B),
        (t.createStandardAuth = H),
        (t.deserializeAuthorization = V),
        (t.deserializeMultiSigSpendingCondition = S),
        (t.deserializeSingleSigSpendingCondition = C),
        (t.deserializeSpendingCondition = v),
        (t.emptyMessageSignature = l),
        (t.getFee = F),
        (t.intoInitialSighashAuth = _),
        (t.isNonSequentialMultiSig = h),
        (t.isSequentialMultiSig = y),
        (t.isSingleSig = p),
        (t.makeSigHashPreSign = P),
        (t.nextSignature = A),
        (t.nextVerification = E),
        (t.serializeAuthorization = K),
        (t.serializeMultiSigSpendingCondition = T),
        (t.serializeSingleSigSpendingCondition = b),
        (t.serializeSpendingCondition = m),
        (t.setFee = I),
        (t.setNonce = j),
        (t.setSponsor = U),
        (t.setSponsorNonce = L),
        (t.verifyOrigin = N));
      var r = n(2778),
        i = n(3127),
        o = n(3406),
        a = n(4884),
        s = n(3852),
        c = n(3853),
        u = n(3468);
      function l() {
        return {
          type: i.StacksMessageType.MessageSignature,
          data: (0, r.bytesToHex)(
            new Uint8Array(i.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES),
          ),
        };
      }
      function d(e, t, n, o) {
        const a = (0, s.addressFromPublicKeys)(0, e, 1, [
            (0, c.createStacksPublicKey)(t),
          ]).hash160,
          u = (0, c.isCompressed)((0, c.createStacksPublicKey)(t))
            ? i.PubKeyEncoding.Compressed
            : i.PubKeyEncoding.Uncompressed;
        return {
          hashMode: e,
          signer: a,
          nonce: (0, r.intToBigInt)(n, !1),
          fee: (0, r.intToBigInt)(o, !1),
          keyEncoding: u,
          signature: l(),
        };
      }
      function f(e, t, n, i, o) {
        const a = n.map(c.createStacksPublicKey),
          u = (0, s.addressFromPublicKeys)(0, e, t, a).hash160;
        return {
          hashMode: e,
          signer: u,
          nonce: (0, r.intToBigInt)(i, !1),
          fee: (0, r.intToBigInt)(o, !1),
          fields: [],
          signaturesRequired: t,
        };
      }
      function p(e) {
        return "signature" in e;
      }
      function y(e) {
        return (
          e === i.AddressHashMode.SerializeP2SH ||
          e === i.AddressHashMode.SerializeP2WSH
        );
      }
      function h(e) {
        return (
          e === i.AddressHashMode.SerializeP2SHNonSequential ||
          e === i.AddressHashMode.SerializeP2WSHNonSequential
        );
      }
      function g(e) {
        const t = (0, o.cloneDeep)(e);
        return (
          (t.nonce = 0),
          (t.fee = 0),
          p(t) ? (t.signature = l()) : (t.fields = []),
          { ...t, nonce: BigInt(0), fee: BigInt(0) }
        );
      }
      function b(e) {
        const t = [
          e.hashMode,
          (0, r.hexToBytes)(e.signer),
          (0, r.intToBytes)(e.nonce, !1, 8),
          (0, r.intToBytes)(e.fee, !1, 8),
          e.keyEncoding,
          (0, a.serializeMessageSignature)(e.signature),
        ];
        return (0, r.concatArray)(t);
      }
      function T(e) {
        const t = [
            e.hashMode,
            (0, r.hexToBytes)(e.signer),
            (0, r.intToBytes)(e.nonce, !1, 8),
            (0, r.intToBytes)(e.fee, !1, 8),
          ],
          n = (0, s.createLPList)(e.fields);
        t.push((0, s.serializeLPList)(n));
        const i = new Uint8Array(2);
        return (
          (0, r.writeUInt16BE)(i, e.signaturesRequired, 0),
          t.push(i),
          (0, r.concatArray)(t)
        );
      }
      function C(e, t) {
        const n = (0, r.bytesToHex)(t.readBytes(20)),
          o = BigInt("0x" + (0, r.bytesToHex)(t.readBytes(8))),
          s = BigInt("0x" + (0, r.bytesToHex)(t.readBytes(8))),
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
        const l = (0, a.deserializeMessageSignature)(t);
        return {
          hashMode: e,
          signer: n,
          nonce: o,
          fee: s,
          keyEncoding: c,
          signature: l,
        };
      }
      function S(e, t) {
        const n = (0, r.bytesToHex)(t.readBytes(20)),
          o = BigInt("0x" + (0, r.bytesToHex)(t.readBytes(8))),
          a = BigInt("0x" + (0, r.bytesToHex)(t.readBytes(8))),
          l = (0, s.deserializeLPList)(
            t,
            i.StacksMessageType.TransactionAuthField,
          ).values;
        let d = !1,
          f = 0;
        for (const r of l)
          switch (r.contents.type) {
            case i.StacksMessageType.PublicKey:
              (0, c.isCompressed)(r.contents) || (d = !0);
              break;
            case i.StacksMessageType.MessageSignature:
              if (
                (r.pubKeyEncoding === i.PubKeyEncoding.Uncompressed && (d = !0),
                (f += 1),
                65536 === f)
              )
                throw new u.VerificationError(
                  "Failed to parse multisig spending condition: too many signatures",
                );
              break;
          }
        const p = t.readUInt16BE();
        if (
          d &&
          (e === i.AddressHashMode.SerializeP2WSH ||
            e === i.AddressHashMode.SerializeP2WSHNonSequential)
        )
          throw new u.VerificationError(
            "Uncompressed keys are not allowed in this hash mode",
          );
        return {
          hashMode: e,
          signer: n,
          nonce: o,
          fee: a,
          fields: l,
          signaturesRequired: p,
        };
      }
      function m(e) {
        return p(e) ? b(e) : T(e);
      }
      function v(e) {
        const t = e.readUInt8Enum(i.AddressHashMode, (e) => {
          throw new u.DeserializationError(
            `Could not parse ${e} as AddressHashMode`,
          );
        });
        return t === i.AddressHashMode.SerializeP2PKH ||
          t === i.AddressHashMode.SerializeP2WPKH
          ? C(t, e)
          : S(t, e);
      }
      function P(e, t, n, i) {
        const a = 49,
          s =
            e +
            (0, r.bytesToHex)(new Uint8Array([t])) +
            (0, r.bytesToHex)((0, r.intToBytes)(n, !1, 8)) +
            (0, r.bytesToHex)((0, r.intToBytes)(i, !1, 8));
        if ((0, r.hexToBytes)(s).byteLength !== a)
          throw Error("Invalid signature hash length");
        return (0, o.txidFromData)((0, r.hexToBytes)(s));
      }
      function w(e, t, n) {
        const a = 33 + i.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES,
          s = (0, c.isCompressed)(t)
            ? i.PubKeyEncoding.Compressed
            : i.PubKeyEncoding.Uncompressed,
          u = e + (0, o.leftPadHex)(s.toString(16)) + n.data,
          l = (0, r.hexToBytes)(u);
        if (l.byteLength > a) throw Error("Invalid signature hash length");
        return (0, o.txidFromData)(l);
      }
      function A(e, t, n, r, i) {
        const o = P(e, t, n, r),
          a = (0, c.signWithKey)(i, o),
          s = (0, c.getPublicKey)(i),
          u = w(o, s, a);
        return { nextSig: a, nextSigHash: u };
      }
      function E(e, t, n, r, i, o) {
        const a = P(e, t, n, r),
          s = (0, c.createStacksPublicKey)(
            (0, c.publicKeyFromSignatureVrs)(a, o, i),
          ),
          u = w(a, s, o);
        return { pubKey: s, nextSigHash: u };
      }
      function k() {
        const e = d(i.AddressHashMode.SerializeP2PKH, "", 0, 0);
        return (
          (e.signer = (0, s.createEmptyAddress)().hash160),
          (e.keyEncoding = i.PubKeyEncoding.Compressed),
          (e.signature = l()),
          e
        );
      }
      function x(e, t, n) {
        return p(e) ? O(e, t, n) : M(e, t, n);
      }
      function O(e, t, n) {
        const { pubKey: r, nextSigHash: i } = E(
            t,
            n,
            e.fee,
            e.nonce,
            e.keyEncoding,
            e.signature,
          ),
          o = (0, s.addressFromPublicKeys)(0, e.hashMode, 1, [r]).hash160;
        if (o !== e.signer)
          throw new u.VerificationError(
            `Signer hash does not equal hash of public key(s): ${o} != ${e.signer}`,
          );
        return i;
      }
      function M(e, t, n) {
        const r = [];
        let o = t,
          a = !1,
          l = 0;
        for (const s of e.fields)
          switch (s.contents.type) {
            case i.StacksMessageType.PublicKey:
              ((0, c.isCompressed)(s.contents) || (a = !0), r.push(s.contents));
              break;
            case i.StacksMessageType.MessageSignature:
              s.pubKeyEncoding === i.PubKeyEncoding.Uncompressed && (a = !0);
              const { pubKey: t, nextSigHash: d } = E(
                o,
                n,
                e.fee,
                e.nonce,
                s.pubKeyEncoding,
                s.contents,
              );
              if ((y(e.hashMode) && (o = d), r.push(t), (l += 1), 65536 === l))
                throw new u.VerificationError("Too many signatures");
              break;
          }
        if (
          (y(e.hashMode) && l !== e.signaturesRequired) ||
          (h(e.hashMode) && l < e.signaturesRequired)
        )
          throw new u.VerificationError("Incorrect number of signatures");
        if (
          a &&
          (e.hashMode === i.AddressHashMode.SerializeP2WSH ||
            e.hashMode === i.AddressHashMode.SerializeP2WSHNonSequential)
        )
          throw new u.VerificationError(
            "Uncompressed keys are not allowed in this hash mode",
          );
        const d = (0, s.addressFromPublicKeys)(
          0,
          e.hashMode,
          e.signaturesRequired,
          r,
        ).hash160;
        if (d !== e.signer)
          throw new u.VerificationError(
            `Signer hash does not equal hash of public key(s): ${d} != ${e.signer}`,
          );
        return o;
      }
      function H(e) {
        return { authType: i.AuthType.Standard, spendingCondition: e };
      }
      function B(e, t) {
        return {
          authType: i.AuthType.Sponsored,
          spendingCondition: e,
          sponsorSpendingCondition:
            t || d(i.AddressHashMode.SerializeP2PKH, "0".repeat(66), 0, 0),
        };
      }
      function _(e) {
        if (e.spendingCondition)
          switch (e.authType) {
            case i.AuthType.Standard:
              return H(g(e.spendingCondition));
            case i.AuthType.Sponsored:
              return B(g(e.spendingCondition), k());
            default:
              throw new u.SigningError(
                "Unexpected authorization type for signing",
              );
          }
        throw new Error("Authorization missing SpendingCondition");
      }
      function N(e, t) {
        switch (e.authType) {
          case i.AuthType.Standard:
            return x(e.spendingCondition, t, i.AuthType.Standard);
          case i.AuthType.Sponsored:
            return x(e.spendingCondition, t, i.AuthType.Standard);
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
      function F(e) {
        switch (e.authType) {
          case i.AuthType.Standard:
            return e.spendingCondition.fee;
          case i.AuthType.Sponsored:
            return e.sponsorSpendingCondition.fee;
        }
      }
      function j(e, t) {
        const n = { ...e.spendingCondition, nonce: (0, r.intToBigInt)(t, !1) };
        return { ...e, spendingCondition: n };
      }
      function L(e, t) {
        const n = {
          ...e.sponsorSpendingCondition,
          nonce: (0, r.intToBigInt)(t, !1),
        };
        return { ...e, sponsorSpendingCondition: n };
      }
      function U(e, t) {
        const n = {
          ...t,
          nonce: (0, r.intToBigInt)(t.nonce, !1),
          fee: (0, r.intToBigInt)(t.fee, !1),
        };
        return { ...e, sponsorSpendingCondition: n };
      }
      function K(e) {
        const t = [];
        switch ((t.push(e.authType), e.authType)) {
          case i.AuthType.Standard:
            t.push(m(e.spendingCondition));
            break;
          case i.AuthType.Sponsored:
            (t.push(m(e.spendingCondition)),
              t.push(m(e.sponsorSpendingCondition)));
            break;
        }
        return (0, r.concatArray)(t);
      }
      function V(e) {
        const t = e.readUInt8Enum(i.AuthType, (e) => {
          throw new u.DeserializationError(`Could not parse ${e} as AuthType`);
        });
        let n;
        switch (t) {
          case i.AuthType.Standard:
            return ((n = v(e)), H(n));
          case i.AuthType.Sponsored:
            n = v(e);
            const t = v(e);
            return B(n, t);
        }
      }
    },
    4883: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TenureChangeCause = void 0),
        (t.createCoinbasePayload = C),
        (t.createContractCallPayload = g),
        (t.createNakamotoCoinbasePayload = S),
        (t.createPoisonPayload = T),
        (t.createSmartContractPayload = b),
        (t.createTenureChangePayload = m),
        (t.createTokenTransferPayload = h),
        (t.deserializePayload = P),
        (t.isCoinbasePayload = y),
        (t.isContractCallPayload = d),
        (t.isPoisonPayload = p),
        (t.isSmartContractPayload = f),
        (t.isTokenTransferPayload = l),
        (t.serializePayload = v));
      var r,
        i = n(2778),
        o = n(3407),
        a = n(5734),
        s = n(3127),
        c = n(3626),
        u = n(3852);
      function l(e) {
        return e.payloadType === s.PayloadType.TokenTransfer;
      }
      function d(e) {
        return e.payloadType === s.PayloadType.ContractCall;
      }
      function f(e) {
        return e.payloadType === s.PayloadType.SmartContract;
      }
      function p(e) {
        return e.payloadType === s.PayloadType.PoisonMicroblock;
      }
      function y(e) {
        return e.payloadType === s.PayloadType.Coinbase;
      }
      function h(e, t, n) {
        var r;
        return (
          "string" === typeof e && (e = (0, a.principalCV)(e)),
          "string" === typeof n && (n = (0, u.createMemoString)(n)),
          {
            type: s.StacksMessageType.Payload,
            payloadType: s.PayloadType.TokenTransfer,
            recipient: e,
            amount: (0, i.intToBigInt)(t, !1),
            memo:
              null !== (r = n) && void 0 !== r
                ? r
                : (0, u.createMemoString)(""),
          }
        );
      }
      function g(e, t, n, r) {
        return (
          "string" === typeof e && (e = (0, c.createAddress)(e)),
          "string" === typeof t && (t = (0, c.createLPString)(t)),
          "string" === typeof n && (n = (0, c.createLPString)(n)),
          {
            type: s.StacksMessageType.Payload,
            payloadType: s.PayloadType.ContractCall,
            contractAddress: e,
            contractName: t,
            functionName: n,
            functionArgs: r,
          }
        );
      }
      function b(e, t, n) {
        return (
          "string" === typeof e && (e = (0, c.createLPString)(e)),
          "string" === typeof t && (t = (0, u.codeBodyString)(t)),
          "number" === typeof n
            ? {
                type: s.StacksMessageType.Payload,
                payloadType: s.PayloadType.VersionedSmartContract,
                clarityVersion: n,
                contractName: e,
                codeBody: t,
              }
            : {
                type: s.StacksMessageType.Payload,
                payloadType: s.PayloadType.SmartContract,
                contractName: e,
                codeBody: t,
              }
        );
      }
      function T() {
        return {
          type: s.StacksMessageType.Payload,
          payloadType: s.PayloadType.PoisonMicroblock,
        };
      }
      function C(e, t) {
        if (e.byteLength != s.COINBASE_BYTES_LENGTH)
          throw Error(
            `Coinbase buffer size must be ${s.COINBASE_BYTES_LENGTH} bytes`,
          );
        return void 0 != t
          ? {
              type: s.StacksMessageType.Payload,
              payloadType: s.PayloadType.CoinbaseToAltRecipient,
              coinbaseBytes: e,
              recipient: t,
            }
          : {
              type: s.StacksMessageType.Payload,
              payloadType: s.PayloadType.Coinbase,
              coinbaseBytes: e,
            };
      }
      function S(e, t, n) {
        if (e.byteLength != s.COINBASE_BYTES_LENGTH)
          throw Error(
            `Coinbase buffer size must be ${s.COINBASE_BYTES_LENGTH} bytes`,
          );
        if (n.byteLength != s.VRF_PROOF_BYTES_LENGTH)
          throw Error(
            `VRF proof buffer size must be ${s.VRF_PROOF_BYTES_LENGTH} bytes`,
          );
        return {
          type: s.StacksMessageType.Payload,
          payloadType: s.PayloadType.NakamotoCoinbase,
          coinbaseBytes: e,
          recipient: t.type === o.ClarityType.OptionalSome ? t.value : void 0,
          vrfProof: n,
        };
      }
      function m(e, t, n, r, i, o, a) {
        return {
          type: s.StacksMessageType.Payload,
          payloadType: s.PayloadType.TenureChange,
          tenureHash: e,
          previousTenureHash: t,
          burnViewHash: n,
          previousTenureEnd: r,
          previousTenureBlocks: i,
          cause: o,
          publicKeyHash: a,
        };
      }
      function v(e) {
        const t = [];
        switch ((t.push(e.payloadType), e.payloadType)) {
          case s.PayloadType.TokenTransfer:
            (t.push((0, o.serializeCV)(e.recipient)),
              t.push((0, i.intToBytes)(e.amount, !1, 8)),
              t.push((0, u.serializeStacksMessage)(e.memo)));
            break;
          case s.PayloadType.ContractCall:
            (t.push((0, u.serializeStacksMessage)(e.contractAddress)),
              t.push((0, u.serializeStacksMessage)(e.contractName)),
              t.push((0, u.serializeStacksMessage)(e.functionName)));
            const n = new Uint8Array(4);
            ((0, i.writeUInt32BE)(n, e.functionArgs.length, 0),
              t.push(n),
              e.functionArgs.forEach((e) => {
                t.push((0, o.serializeCV)(e));
              }));
            break;
          case s.PayloadType.SmartContract:
            (t.push((0, u.serializeStacksMessage)(e.contractName)),
              t.push((0, u.serializeStacksMessage)(e.codeBody)));
            break;
          case s.PayloadType.VersionedSmartContract:
            (t.push(e.clarityVersion),
              t.push((0, u.serializeStacksMessage)(e.contractName)),
              t.push((0, u.serializeStacksMessage)(e.codeBody)));
            break;
          case s.PayloadType.PoisonMicroblock:
            break;
          case s.PayloadType.Coinbase:
            t.push(e.coinbaseBytes);
            break;
          case s.PayloadType.CoinbaseToAltRecipient:
            (t.push(e.coinbaseBytes), t.push((0, o.serializeCV)(e.recipient)));
            break;
          case s.PayloadType.NakamotoCoinbase:
            (t.push(e.coinbaseBytes),
              t.push(
                (0, o.serializeCV)(
                  e.recipient ? (0, o.someCV)(e.recipient) : (0, o.noneCV)(),
                ),
              ),
              t.push(e.vrfProof));
            break;
          case s.PayloadType.TenureChange:
            (t.push((0, i.hexToBytes)(e.tenureHash)),
              t.push((0, i.hexToBytes)(e.previousTenureHash)),
              t.push((0, i.hexToBytes)(e.burnViewHash)),
              t.push((0, i.hexToBytes)(e.previousTenureEnd)),
              t.push(
                (0, i.writeUInt32BE)(new Uint8Array(4), e.previousTenureBlocks),
              ),
              t.push((0, i.writeUInt8)(new Uint8Array(1), e.cause)),
              t.push((0, i.hexToBytes)(e.publicKeyHash)));
            break;
        }
        return (0, i.concatArray)(t);
      }
      function P(e) {
        const t = e.readUInt8Enum(s.PayloadType, (e) => {
          throw new Error("Cannot recognize PayloadType: " + e);
        });
        switch (t) {
          case s.PayloadType.TokenTransfer:
            const t = (0, o.deserializeCV)(e),
              n = (0, i.intToBigInt)(e.readBytes(8), !1),
              a = (0, u.deserializeMemoString)(e);
            return h(t, n, a);
          case s.PayloadType.ContractCall:
            const c = (0, u.deserializeAddress)(e),
              l = (0, u.deserializeLPString)(e),
              d = (0, u.deserializeLPString)(e),
              f = [],
              p = e.readUInt32BE();
            for (let r = 0; r < p; r++) {
              const t = (0, o.deserializeCV)(e);
              f.push(t);
            }
            return g(c, l, d, f);
          case s.PayloadType.SmartContract:
            const y = (0, u.deserializeLPString)(e),
              v = (0, u.deserializeLPString)(e, 4, 1e5);
            return b(y, v);
          case s.PayloadType.VersionedSmartContract: {
            const t = e.readUInt8Enum(s.ClarityVersion, (e) => {
                throw new Error("Cannot recognize ClarityVersion: " + e);
              }),
              n = (0, u.deserializeLPString)(e),
              r = (0, u.deserializeLPString)(e, 4, 1e5);
            return b(n, r, t);
          }
          case s.PayloadType.PoisonMicroblock:
            return T();
          case s.PayloadType.Coinbase: {
            const t = e.readBytes(s.COINBASE_BYTES_LENGTH);
            return C(t);
          }
          case s.PayloadType.CoinbaseToAltRecipient: {
            const t = e.readBytes(s.COINBASE_BYTES_LENGTH),
              n = (0, o.deserializeCV)(e);
            return C(t, n);
          }
          case s.PayloadType.NakamotoCoinbase: {
            const t = e.readBytes(s.COINBASE_BYTES_LENGTH),
              n = (0, o.deserializeCV)(e),
              r = e.readBytes(s.VRF_PROOF_BYTES_LENGTH);
            return S(t, n, r);
          }
          case s.PayloadType.TenureChange:
            const P = (0, i.bytesToHex)(e.readBytes(20)),
              w = (0, i.bytesToHex)(e.readBytes(20)),
              A = (0, i.bytesToHex)(e.readBytes(20)),
              E = (0, i.bytesToHex)(e.readBytes(32)),
              k = e.readUInt32BE(),
              x = e.readUInt8Enum(r, (e) => {
                throw new Error("Cannot recognize TenureChangeCause: " + e);
              }),
              O = (0, i.bytesToHex)(e.readBytes(20));
            return m(P, w, A, E, k, x, O);
        }
      }
      (function (e) {
        ((e[(e["BlockFound"] = 0)] = "BlockFound"),
          (e[(e["Extended"] = 1)] = "Extended"));
      })(r || (t.TenureChangeCause = r = {}));
    },
    4884: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AuthFieldType = void 0),
        (t.createTransactionAuthField = l),
        (t.deserializeMessageSignature = u),
        (t.deserializeTransactionAuthField = d),
        (t.serializeMessageSignature = f),
        (t.serializeTransactionAuthField = p));
      var r,
        i = n(3468),
        o = n(3127),
        a = n(3853),
        s = n(4600),
        c = n(2778);
      function u(e) {
        return (0, s.createMessageSignature)(
          (0, c.bytesToHex)(e.readBytes(o.RECOVERABLE_ECDSA_SIG_LENGTH_BYTES)),
        );
      }
      function l(e, t) {
        return {
          pubKeyEncoding: e,
          type: o.StacksMessageType.TransactionAuthField,
          contents: t,
        };
      }
      function d(e) {
        const t = e.readUInt8Enum(r, (e) => {
          throw new i.DeserializationError(
            `Could not read ${e} as AuthFieldType`,
          );
        });
        switch (t) {
          case r.PublicKeyCompressed:
            return l(
              o.PubKeyEncoding.Compressed,
              (0, a.deserializePublicKey)(e),
            );
          case r.PublicKeyUncompressed:
            return l(
              o.PubKeyEncoding.Uncompressed,
              (0, a.uncompressPublicKey)((0, a.deserializePublicKey)(e).data),
            );
          case r.SignatureCompressed:
            return l(o.PubKeyEncoding.Compressed, u(e));
          case r.SignatureUncompressed:
            return l(o.PubKeyEncoding.Uncompressed, u(e));
          default:
            throw new Error("Unknown auth field type: " + JSON.stringify(t));
        }
      }
      function f(e) {
        return (0, c.hexToBytes)(e.data);
      }
      function p(e) {
        const t = [];
        switch (e.contents.type) {
          case o.StacksMessageType.PublicKey:
            (t.push(
              e.pubKeyEncoding === o.PubKeyEncoding.Compressed
                ? r.PublicKeyCompressed
                : r.PublicKeyUncompressed,
            ),
              t.push(
                (0, a.serializePublicKey)(
                  (0, a.compressPublicKey)(e.contents.data),
                ),
              ));
            break;
          case o.StacksMessageType.MessageSignature:
            (t.push(
              e.pubKeyEncoding === o.PubKeyEncoding.Compressed
                ? r.SignatureCompressed
                : r.SignatureUncompressed,
            ),
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
    5716: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(11446);
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
      var i = n(4880);
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
      var o = n(11511);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === o[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
      var a = n(11526);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var s = n(3851);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var c = n(6958);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var u = n(6948);
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === u[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var l = n(6947);
      Object.keys(l).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === l[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            }));
      });
      var d = n(6931);
      Object.keys(d).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === d[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return d[e];
              },
            }));
      });
      var f = n(6932);
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === f[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return f[e];
              },
            }));
      });
      var p = n(4601);
      Object.keys(p).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === p[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return p[e];
              },
            }));
      });
    },
    5731: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SHA2 = void 0));
      const r = n(6940),
        i = n(4596);
      function o(e, t, n, r) {
        if ("function" === typeof e.setBigUint64)
          return e.setBigUint64(t, n, r);
        const i = BigInt(32),
          o = BigInt(4294967295),
          a = Number((n >> i) & o),
          s = Number(n & o),
          c = r ? 4 : 0,
          u = r ? 0 : 4;
        (e.setUint32(t + c, a, r), e.setUint32(t + u, s, r));
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
          const a = e.length;
          for (let r = 0; r < a; ) {
            const s = Math.min(o - this.pos, a - r);
            if (s !== o)
              (n.set(e.subarray(r, r + s), this.pos),
                (this.pos += s),
                (r += s),
                this.pos === o && (this.process(t, 0), (this.pos = 0)));
            else {
              const t = (0, i.createView)(e);
              for (; o <= a - r; r += o) this.process(t, r);
            }
          }
          return ((this.length += e.length), this.roundClean(), this);
        }
        digestInto(e) {
          (r.default.exists(this),
            r.default.output(e, this),
            (this.finished = !0));
          const { buffer: t, view: n, blockLen: a, isLE: s } = this;
          let { pos: c } = this;
          ((t[c++] = 128),
            this.buffer.subarray(c).fill(0),
            this.padOffset > a - c && (this.process(n, 0), (c = 0)));
          for (let r = c; r < a; r++) t[r] = 0;
          (o(n, a - 8, BigInt(8 * this.length), s), this.process(n, 0));
          const u = (0, i.createView)(e),
            l = this.outputLen;
          if (l % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const d = l / 4,
            f = this.get();
          if (d > f.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let r = 0; r < d; r++) u.setUint32(4 * r, f[r], s);
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
            pos: a,
          } = this;
          return (
            (e.length = r),
            (e.pos = a),
            (e.finished = i),
            (e.destroyed = o),
            r % t && e.buffer.set(n),
            e
          );
        }
      }
      t.SHA2 = SHA2;
    },
    5732: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha224 = t.sha256 = void 0));
      const r = n(5731),
        i = n(4596),
        o = (e, t, n) => (e & t) ^ (~e & n),
        a = (e, t, n) => (e & t) ^ (e & n) ^ (t & n),
        s = new Uint32Array([
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
          const { A: e, B: t, C: n, D: r, E: i, F: o, G: a, H: s } = this;
          return [e, t, n, r, i, o, a, s];
        }
        set(e, t, n, r, i, o, a, s) {
          ((this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | a),
            (this.H = 0 | s));
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
          let { A: n, B: r, C: c, D: l, E: d, F: f, G: p, H: y } = this;
          for (let h = 0; h < 64; h++) {
            const e =
                (0, i.rotr)(d, 6) ^ (0, i.rotr)(d, 11) ^ (0, i.rotr)(d, 25),
              t = (y + e + o(d, f, p) + s[h] + u[h]) | 0,
              g = (0, i.rotr)(n, 2) ^ (0, i.rotr)(n, 13) ^ (0, i.rotr)(n, 22),
              b = (g + a(n, r, c)) | 0;
            ((y = p),
              (p = f),
              (f = d),
              (d = (l + t) | 0),
              (l = c),
              (c = r),
              (r = n),
              (n = (t + b) | 0));
          }
          ((n = (n + this.A) | 0),
            (r = (r + this.B) | 0),
            (c = (c + this.C) | 0),
            (l = (l + this.D) | 0),
            (d = (d + this.E) | 0),
            (f = (f + this.F) | 0),
            (p = (p + this.G) | 0),
            (y = (y + this.H) | 0),
            this.set(n, r, c, l, d, f, p, y));
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
    5734: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.contractPrincipalCV = d),
        (t.contractPrincipalCVFromAddress = f),
        (t.contractPrincipalCVFromStandard = p),
        (t.principalCV = c),
        (t.principalToString = s),
        (t.standardPrincipalCV = u),
        (t.standardPrincipalCVFromAddress = l));
      var r = n(2778),
        i = n(4600),
        o = n(3626),
        a = n(3237);
      function s(e) {
        if (e.type === a.ClarityType.PrincipalStandard)
          return (0, i.addressToString)(e.address);
        if (e.type === a.ClarityType.PrincipalContract) {
          const t = (0, i.addressToString)(e.address);
          return `${t}.${e.contractName.content}`;
        }
        throw new Error("Unexpected principal data: " + JSON.stringify(e));
      }
      function c(e) {
        if (e.includes(".")) {
          const [t, n] = e.split(".");
          return d(t, n);
        }
        return u(e);
      }
      function u(e) {
        const t = (0, o.createAddress)(e);
        return { type: a.ClarityType.PrincipalStandard, address: t };
      }
      function l(e) {
        return { type: a.ClarityType.PrincipalStandard, address: e };
      }
      function d(e, t) {
        const n = (0, o.createAddress)(e),
          r = (0, o.createLPString)(t);
        return f(n, r);
      }
      function f(e, t) {
        if ((0, r.utf8ToBytes)(t.content).byteLength >= 128)
          throw new Error("Contract name must be less than 128 bytes");
        return {
          type: a.ClarityType.PrincipalContract,
          address: e,
          contractName: t,
        };
      }
      function p(e, t) {
        const n = (0, o.createLPString)(t);
        return {
          type: a.ClarityType.PrincipalContract,
          address: e.address,
          contractName: n,
        };
      }
    },
    5735: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringUtf8CV = t.stringCV = t.stringAsciiCV = void 0));
      var r = n(3237);
      const i = (e) => ({ type: r.ClarityType.StringASCII, data: e });
      t.stringAsciiCV = i;
      const o = (e) => ({ type: r.ClarityType.StringUTF8, data: e });
      t.stringUtf8CV = o;
      const a = (e, t) => {
        switch (t) {
          case "ascii":
            return i(e);
          case "utf8":
            return o(e);
        }
      };
      t.stringCV = a;
    },
    5736: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BytesReader = void 0),
        (t.isEnum = a));
      var r = n(2778);
      function i(e) {
        const t = Object.values(e).filter((e) => "number" === typeof e),
          n = new Set(t);
        return (e) => n.has(e);
      }
      const o = new Map();
      function a(e, t) {
        const n = o.get(e);
        if (void 0 !== n) return n(t);
        const r = i(e);
        return (o.set(e, r), a(e, t));
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
          if (a(e, n)) return n;
          throw t(n);
        }
      }
      t.BytesReader = BytesReader;
    },
    6931: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decrypt = o),
        (t.encrypt = a));
      var r = n(3206),
        i = n(6932);
      function o(e, t) {
        return (0, r.decryptMnemonic)(e, t, i.triplesecDecrypt);
      }
      function a(e, t) {
        return (0, r.encryptMnemonic)(e, t);
      }
    },
    6932: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.triplesecDecrypt = o));
        var r = i(n(11466));
        function i(e, t) {
          if ("function" == typeof WeakMap)
            var n = new WeakMap(),
              r = new WeakMap();
          return (i = function (e, t) {
            if (!t && e && e.__esModule) return e;
            var i,
              o,
              a = { __proto__: null, default: e };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((i = t ? r : n)) {
              if (i.has(e)) return i.get(e);
              i.set(e, a);
            }
            for (const n in e)
              "default" !== n &&
                {}.hasOwnProperty.call(e, n) &&
                ((o =
                  (i = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, n)) &&
                (o.get || o.set)
                  ? i(a, n, o)
                  : (a[n] = e[n]));
            return a;
          })(e, t);
        }
        function o(t, n) {
          if ("undefined" === typeof e)
            throw Error(
              "Using triplesec currently requires polyfilling `Buffer`",
            );
          const i = { data: e.from(t.data), key: e.from(t.key) };
          return r.decrypt(i, (e, t) =>
            n(e, t ? new Uint8Array(t.buffer) : null),
          );
        }
      }).call(this, n(2).Buffer);
    },
    6940: function (e, t, n) {
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
      function a(e) {
        if ("function" !== typeof e || "function" !== typeof e.create)
          throw new Error("Hash should be wrapped by utils.wrapConstructor");
        (r(e.outputLen), r(e.blockLen));
      }
      function s(e, t) {
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
        (t.hash = a),
        (t.exists = s),
        (t.output = c));
      const u = { number: r, bool: i, bytes: o, hash: a, exists: s, output: c };
      t.default = u;
    },
    6941: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.broadcastRawTransaction = A),
        (t.broadcastTransaction = w),
        (t.callReadOnlyFunction = z),
        (t.estimateContractDeploy = M),
        (t.estimateContractFunctionCall = _),
        (t.estimateTransaction = P),
        (t.estimateTransactionByteLength = $),
        (t.estimateTransactionFeeWithFallback = W),
        (t.estimateTransfer = m),
        (t.estimateTransferUnsafe = v),
        (t.getAbi = E),
        (t.getContractMapEntry = D),
        (t.getNonce = S),
        (t.makeContractCall = I),
        (t.makeContractDeploy = H),
        (t.makeContractFungiblePostCondition = U),
        (t.makeContractNonFungiblePostCondition = V),
        (t.makeContractSTXPostCondition = j),
        (t.makeSTXTokenTransfer = O),
        (t.makeStandardFungiblePostCondition = L),
        (t.makeStandardNonFungiblePostCondition = K),
        (t.makeStandardSTXPostCondition = F),
        (t.makeUnsignedContractCall = N),
        (t.makeUnsignedContractDeploy = B),
        (t.makeUnsignedSTXTokenTransfer = x),
        (t.sponsorTransaction = R));
      var r = n(2778),
        i = n(3167),
        o = n(3208),
        a = n(4882),
        s = n(3407),
        c = n(3127),
        u = n(6942),
        l = n(3468),
        d = n(3853),
        f = n(4883),
        p = n(6943),
        y = n(3626),
        h = n(6944),
        g = n(6945),
        b = n(3852),
        T = n(3406);
      async function C(e, t) {
        const n = `${t.coreApiUrl}/extended/v1/address/${e}/nonces`,
          r = await t.fetchFn(n),
          i = await r.json();
        return BigInt(i.possible_next_nonce);
      }
      async function S(e, t) {
        const n = i.StacksNetwork.fromNameOrNetwork(
            null !== t && void 0 !== t ? t : new i.StacksMainnet(),
          ),
          r = n.getAccountApiUrl(e);
        try {
          return await C(e, n);
        } catch (c) {}
        const o = await n.fetchFn(r);
        if (!o.ok) {
          let e = "";
          try {
            e = await o.text();
          } catch (u) {}
          throw new Error(
            `Error fetching nonce. Response ${o.status}: ${o.statusText}. Attempted to fetch ${r} and failed with the message: "${e}"`,
          );
        }
        const a = await o.text(),
          s = JSON.parse(a);
        return BigInt(s.nonce);
      }
      async function m(e, t) {
        if (e.payload.payloadType !== c.PayloadType.TokenTransfer)
          throw new Error(
            `Transaction fee estimation only possible with ${c.PayloadType[c.PayloadType.TokenTransfer]} transactions. Invoked with: ${c.PayloadType[e.payload.payloadType]}`,
          );
        return v(e, t);
      }
      async function v(e, t) {
        const n = { Accept: "application/text" },
          r = { method: "GET", headers: n },
          o = i.StacksNetwork.fromNameOrNetwork(
            null !== t && void 0 !== t ? t : k(e),
          ),
          a = o.getTransferFeeEstimateApiUrl(),
          s = await o.fetchFn(a, r);
        if (!s.ok) {
          let e = "";
          try {
            e = await s.text();
          } catch (d) {}
          throw new Error(
            `Error estimating transaction fee. Response ${s.status}: ${s.statusText}. Attempted to fetch ${a} and failed with the message: "${e}"`,
          );
        }
        const c = await s.text(),
          u = BigInt(e.serialize().byteLength),
          l = BigInt(c);
        return l * u;
      }
      async function P(e, t, n) {
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
          a = i.StacksNetwork.fromNameOrNetwork(
            null !== n && void 0 !== n ? n : new i.StacksMainnet(),
          ),
          s = a.getTransactionFeeEstimateApiUrl(),
          c = await a.fetchFn(s, o);
        if (!c.ok) {
          const e = await c.text().then((e) => {
            try {
              return JSON.parse(e);
            } catch (t) {
              return e;
            }
          });
          var u, d;
          if (
            "NoEstimateAvailable" ===
              (null === e || void 0 === e ? void 0 : e.reason) ||
            ("string" === typeof e && e.includes("NoEstimateAvailable"))
          )
            throw new l.NoEstimateAvailableError(
              null !==
                (u =
                  null === e ||
                  void 0 === e ||
                  null === (d = e.reason_data) ||
                  void 0 === d
                    ? void 0
                    : d.message) && void 0 !== u
                ? u
                : "",
            );
          throw new Error(
            `Error estimating transaction fee. Response ${c.status}: ${c.statusText}. Attempted to fetch ${s} and failed with the message: "${e}"`,
          );
        }
        const p = await c.json();
        return p.estimations;
      }
      async function w(e, t, n) {
        const r = e.serialize(),
          o = i.StacksNetwork.fromNameOrNetwork(
            null !== t && void 0 !== t ? t : k(e),
          ),
          a = o.getBroadcastApiUrl();
        return A(r, a, n, o.fetchFn);
      }
      async function A(e, t, n, o) {
        void 0 === o && (o = (0, i.createFetchFn)());
        const a = {
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
          s = await o(t, a);
        if (!s.ok)
          try {
            return await s.json();
          } catch (l) {
            throw Error("Failed to broadcast transaction: " + l.message);
          }
        const c = await s.text(),
          u = c.replace(/["]+/g, "");
        if (!(0, T.validateTxId)(u)) throw new Error(c);
        return { txid: u };
      }
      async function E(e, t, n) {
        const r = { method: "GET" },
          o = i.StacksNetwork.fromNameOrNetwork(n),
          a = o.getAbiApiUrl(e, t),
          s = await o.fetchFn(a, r);
        if (!s.ok) {
          const n = await s.text().catch(() => "");
          throw new Error(
            `Error fetching contract ABI for contract "${t}" at address ${e}. Response ${s.status}: ${s.statusText}. Attempted to fetch ${a} and failed with the message: "${n}"`,
          );
        }
        return JSON.parse(await s.text());
      }
      function k(e) {
        switch (e.version) {
          case c.TransactionVersion.Mainnet:
            return new i.StacksMainnet();
          case c.TransactionVersion.Testnet:
            return new i.StacksTestnet();
        }
      }
      async function x(e) {
        const t = {
            fee: BigInt(0),
            nonce: BigInt(0),
            network: new i.StacksMainnet(),
            memo: "",
            sponsored: !1,
          },
          n = Object.assign(t, e),
          r = (0, f.createTokenTransferPayload)(n.recipient, n.amount, n.memo);
        let s = null,
          u = null;
        if ("publicKey" in n)
          u = (0, a.createSingleSigSpendingCondition)(
            c.AddressHashMode.SerializeP2PKH,
            n.publicKey,
            n.nonce,
            n.fee,
          );
        else {
          const e = n.useNonSequentialMultiSig
              ? c.AddressHashMode.SerializeP2SHNonSequential
              : c.AddressHashMode.SerializeP2SH,
            t = n.address
              ? q(
                  n.publicKeys,
                  n.numSignatures,
                  e,
                  (0, y.createAddress)(n.address).hash160,
                )
              : n.publicKeys;
          u = (0, a.createMultiSigSpendingCondition)(
            e,
            n.numSignatures,
            t,
            n.nonce,
            n.fee,
          );
        }
        s = n.sponsored
          ? (0, a.createSponsoredAuth)(u)
          : (0, a.createStandardAuth)(u);
        const l = i.StacksNetwork.fromNameOrNetwork(n.network),
          d = new g.StacksTransaction(
            l.version,
            s,
            r,
            void 0,
            void 0,
            n.anchorMode,
            l.chainId,
          );
        if (void 0 === e.fee || null === e.fee) {
          const e = await W(d, l);
          d.setFee(e);
        }
        if (void 0 === e.nonce || null === e.nonce) {
          const e =
              n.network.version === c.TransactionVersion.Mainnet
                ? c.AddressVersion.MainnetSingleSig
                : c.AddressVersion.TestnetSingleSig,
            t = (0, o.c32address)(e, d.auth.spendingCondition.signer),
            r = await S(t, n.network);
          d.setNonce(r);
        }
        return d;
      }
      async function O(e) {
        if ("senderKey" in e) {
          const t = (0, d.publicKeyToString)(
              (0, d.getPublicKey)((0, d.createStacksPrivateKey)(e.senderKey)),
            ),
            n = (0, T.omit)(e, "senderKey"),
            r = await x({ publicKey: t, ...n }),
            i = (0, d.createStacksPrivateKey)(e.senderKey),
            o = new h.TransactionSigner(r);
          return (o.signOrigin(i), r);
        }
        {
          const t = (0, T.omit)(e, "signerKeys"),
            n = await x(t);
          return (G(n, e.publicKeys.slice(), e.signerKeys, e.address), n);
        }
      }
      async function M(e, t) {
        if (
          e.payload.payloadType !== c.PayloadType.SmartContract &&
          e.payload.payloadType !== c.PayloadType.VersionedSmartContract
        )
          throw new Error(
            `Contract deploy fee estimation only possible with ${c.PayloadType[c.PayloadType.SmartContract]} transactions. Invoked with: ${c.PayloadType[e.payload.payloadType]}`,
          );
        const n = { Accept: "application/text" },
          o = { method: "GET", headers: n },
          a = i.StacksNetwork.fromNameOrNetwork(
            null !== t && void 0 !== t ? t : k(e),
          ),
          s = a.getTransferFeeEstimateApiUrl(),
          u = await a.fetchFn(s, o);
        if (!u.ok) {
          const e = await u.text().catch(() => "");
          throw new Error(
            `Error estimating contract deploy fee. Response ${u.status}: ${u.statusText}. Attempted to fetch ${s} and failed with the message: "${e}"`,
          );
        }
        const l = await u.text(),
          d = (0, r.intToBigInt)(e.serialize().byteLength, !1),
          f = (0, r.intToBigInt)(l, !1);
        return f * d;
      }
      async function H(e) {
        if ("senderKey" in e) {
          const t = (0, d.publicKeyToString)(
              (0, d.getPublicKey)((0, d.createStacksPrivateKey)(e.senderKey)),
            ),
            n = (0, T.omit)(e, "senderKey"),
            r = await B({ publicKey: t, ...n }),
            i = (0, d.createStacksPrivateKey)(e.senderKey),
            o = new h.TransactionSigner(r);
          return (o.signOrigin(i), r);
        }
        {
          const t = (0, T.omit)(e, "signerKeys"),
            n = await B(t);
          return (G(n, e.publicKeys.slice(), e.signerKeys, e.address), n);
        }
      }
      async function B(e) {
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
          );
        let s = null,
          u = null;
        if ("publicKey" in n)
          u = (0, a.createSingleSigSpendingCondition)(
            c.AddressHashMode.SerializeP2PKH,
            n.publicKey,
            n.nonce,
            n.fee,
          );
        else {
          const e = n.useNonSequentialMultiSig
              ? c.AddressHashMode.SerializeP2SHNonSequential
              : c.AddressHashMode.SerializeP2SH,
            t = n.address
              ? q(
                  n.publicKeys,
                  n.numSignatures,
                  e,
                  (0, y.createAddress)(n.address).hash160,
                )
              : n.publicKeys;
          u = (0, a.createMultiSigSpendingCondition)(
            e,
            n.numSignatures,
            t,
            n.nonce,
            n.fee,
          );
        }
        s = n.sponsored
          ? (0, a.createSponsoredAuth)(u)
          : (0, a.createStandardAuth)(u);
        const l = i.StacksNetwork.fromNameOrNetwork(n.network),
          d = [];
        n.postConditions &&
          n.postConditions.length > 0 &&
          n.postConditions.forEach((e) => {
            d.push(e);
          });
        const p = (0, b.createLPList)(d),
          h = new g.StacksTransaction(
            l.version,
            s,
            r,
            p,
            n.postConditionMode,
            n.anchorMode,
            l.chainId,
          );
        if (void 0 === e.fee || null === e.fee) {
          const e = await W(h, l);
          h.setFee(e);
        }
        if (void 0 === e.nonce || null === e.nonce) {
          const e =
              n.network.version === c.TransactionVersion.Mainnet
                ? c.AddressVersion.MainnetSingleSig
                : c.AddressVersion.TestnetSingleSig,
            t = (0, o.c32address)(e, h.auth.spendingCondition.signer),
            r = await S(t, n.network);
          h.setNonce(r);
        }
        return h;
      }
      async function _(e, t) {
        if (e.payload.payloadType !== c.PayloadType.ContractCall)
          throw new Error(
            `Contract call fee estimation only possible with ${c.PayloadType[c.PayloadType.ContractCall]} transactions. Invoked with: ${c.PayloadType[e.payload.payloadType]}`,
          );
        const n = { Accept: "application/text" },
          o = { method: "GET", headers: n },
          a = i.StacksNetwork.fromNameOrNetwork(
            null !== t && void 0 !== t ? t : k(e),
          ),
          s = a.getTransferFeeEstimateApiUrl(),
          u = await a.fetchFn(s, o);
        if (!u.ok) {
          const e = await u.text().catch(() => "");
          throw new Error(
            `Error estimating contract call fee. Response ${u.status}: ${u.statusText}. Attempted to fetch ${s} and failed with the message: "${e}"`,
          );
        }
        const l = await u.text(),
          d = (0, r.intToBigInt)(e.serialize().byteLength, !1),
          f = (0, r.intToBigInt)(l, !1);
        return f * d;
      }
      async function N(e) {
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
        let s = null,
          l = null;
        if ("publicKey" in n)
          s = (0, a.createSingleSigSpendingCondition)(
            c.AddressHashMode.SerializeP2PKH,
            n.publicKey,
            n.nonce,
            n.fee,
          );
        else {
          const e = n.useNonSequentialMultiSig
              ? c.AddressHashMode.SerializeP2SHNonSequential
              : c.AddressHashMode.SerializeP2SH,
            t = n.address
              ? q(
                  n.publicKeys,
                  n.numSignatures,
                  e,
                  (0, y.createAddress)(n.address).hash160,
                )
              : n.publicKeys;
          s = (0, a.createMultiSigSpendingCondition)(
            e,
            n.numSignatures,
            t,
            n.nonce,
            n.fee,
          );
        }
        l = n.sponsored
          ? (0, a.createSponsoredAuth)(s)
          : (0, a.createStandardAuth)(s);
        const d = i.StacksNetwork.fromNameOrNetwork(n.network),
          p = [];
        n.postConditions &&
          n.postConditions.length > 0 &&
          n.postConditions.forEach((e) => {
            p.push(e);
          });
        const h = (0, b.createLPList)(p),
          T = new g.StacksTransaction(
            d.version,
            l,
            r,
            h,
            n.postConditionMode,
            n.anchorMode,
            d.chainId,
          );
        if (void 0 === e.fee || null === e.fee) {
          const e = await W(T, d);
          T.setFee(e);
        }
        if (void 0 === e.nonce || null === e.nonce) {
          const e =
              d.version === c.TransactionVersion.Mainnet
                ? c.AddressVersion.MainnetSingleSig
                : c.AddressVersion.TestnetSingleSig,
            t = (0, o.c32address)(e, T.auth.spendingCondition.signer),
            n = await S(t, d);
          T.setNonce(n);
        }
        return T;
      }
      async function I(e) {
        if ("senderKey" in e) {
          const t = (0, d.publicKeyToString)(
              (0, d.getPublicKey)((0, d.createStacksPrivateKey)(e.senderKey)),
            ),
            n = (0, T.omit)(e, "senderKey"),
            r = await N({ publicKey: t, ...n }),
            i = (0, d.createStacksPrivateKey)(e.senderKey),
            o = new h.TransactionSigner(r);
          return (o.signOrigin(i), r);
        }
        {
          const t = (0, T.omit)(e, "signerKeys"),
            n = await N(t);
          return (G(n, e.publicKeys.slice(), e.signerKeys, e.address), n);
        }
      }
      function F(e, t, n) {
        return (0, p.createSTXPostCondition)(
          (0, y.createStandardPrincipal)(e),
          t,
          n,
        );
      }
      function j(e, t, n, r) {
        return (0, p.createSTXPostCondition)(
          (0, y.createContractPrincipal)(e, t),
          n,
          r,
        );
      }
      function L(e, t, n, r) {
        return (0, p.createFungiblePostCondition)(
          (0, y.createStandardPrincipal)(e),
          t,
          n,
          r,
        );
      }
      function U(e, t, n, r, i) {
        return (0, p.createFungiblePostCondition)(
          (0, y.createContractPrincipal)(e, t),
          n,
          r,
          i,
        );
      }
      function K(e, t, n, r) {
        return (0, p.createNonFungiblePostCondition)(
          (0, y.createStandardPrincipal)(e),
          t,
          n,
          r,
        );
      }
      function V(e, t, n, r, i) {
        return (0, p.createNonFungiblePostCondition)(
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
            functionName: a,
            functionArgs: s,
            senderAddress: c,
          } = n,
          u = i.StacksNetwork.fromNameOrNetwork(n.network),
          l = u.getReadOnlyFunctionCallApiUrl(o, r, a),
          d = s.map((e) => (0, T.cvToHex)(e)),
          f = JSON.stringify({ sender: c, arguments: d }),
          p = await u.fetchFn(l, {
            method: "POST",
            body: f,
            headers: { "Content-Type": "application/json" },
          });
        if (!p.ok) {
          const e = await p.text().catch(() => "");
          throw new Error(
            `Error calling read-only function. Response ${p.status}: ${p.statusText}. Attempted to fetch ${l} and failed with the message: "${e}"`,
          );
        }
        return p.json().then((e) => (0, T.parseReadOnlyResponse)(e));
      }
      async function D(e) {
        const t = { network: new i.StacksMainnet() },
          {
            contractAddress: n,
            contractName: o,
            mapName: a,
            mapKey: c,
            network: u,
          } = Object.assign(t, e),
          l = i.StacksNetwork.fromNameOrNetwork(u),
          d = l.getMapEntryUrl(n, o, a),
          f = (0, s.serializeCV)(c),
          p = "0x" + (0, r.bytesToHex)(f),
          y = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(p),
          },
          h = await l.fetchFn(d, y);
        if (!h.ok) {
          const e = await h.text().catch(() => "");
          throw new Error(
            `Error fetching map entry for map "${a}" in contract "${o}" at address ${n}, using map key "${p}". Response ${h.status}: ${h.statusText}. Attempted to fetch ${d} and failed with the message: "${e}"`,
          );
        }
        const g = await h.text(),
          b = JSON.parse(g);
        if (!b.data)
          throw new Error(
            `Error fetching map entry for map "${a}" in contract "${o}" at address ${n}, using map key "${p}". Response ${h.status}: ${h.statusText}. Attempted to fetch ${d} and failed with the response: "${g}"`,
          );
        let T;
        try {
          T = (0, s.deserializeCV)(b.data);
        } catch (C) {
          throw new Error(
            `Error deserializing Clarity value "${b.data}": ${C}`,
          );
        }
        return T;
      }
      async function R(e) {
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
          o = (0, d.pubKeyfromPrivKey)(n.sponsorPrivateKey);
        if (void 0 === e.fee || null === e.fee) {
          let e = 0;
          switch (n.transaction.payload.payloadType) {
            case c.PayloadType.TokenTransfer:
            case c.PayloadType.SmartContract:
            case c.PayloadType.VersionedSmartContract:
            case c.PayloadType.ContractCall:
              const t = $(n.transaction);
              try {
                e = (await P(n.transaction.payload, t, r))[1].fee;
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
            t = (0, d.publicKeyToAddress)(e, o),
            i = await S(t, r);
          n.sponsorNonce = i;
        }
        const s = (0, a.createSingleSigSpendingCondition)(
          n.sponsorAddressHashmode,
          (0, d.publicKeyToString)(o),
          n.sponsorNonce,
          n.fee,
        );
        n.transaction.setSponsor(s);
        const u = (0, d.createStacksPrivateKey)(n.sponsorPrivateKey),
          l = h.TransactionSigner.createSponsorSigner(n.transaction, s);
        return (l.signSponsor(u), l.transaction);
      }
      function $(e) {
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
      async function W(e, t) {
        try {
          const n = $(e);
          return (await P(e.payload, n, t))[1].fee;
        } catch (n) {
          if (n instanceof l.NoEstimateAvailableError) return await v(e, t);
          throw n;
        }
      }
      function G(e, t, n, i) {
        if ((0, a.isSingleSig)(e.auth.spendingCondition))
          throw new Error("Transaction is not a multi-sig transaction");
        const o = new h.TransactionSigner(e),
          s = i
            ? q(
                t,
                e.auth.spendingCondition.signaturesRequired,
                e.auth.spendingCondition.hashMode,
                (0, y.createAddress)(i).hash160,
              )
            : t;
        for (const a of s) {
          const e = n.find(
            (e) => (0, r.bytesToHex)((0, d.pubKeyfromPrivKey)(e).data) === a,
          );
          e
            ? o.signOrigin((0, d.createStacksPrivateKey)(e))
            : o.appendOrigin((0, d.publicKeyFromBytes)((0, r.hexToBytes)(a)));
        }
      }
      function q(e, t, n, r) {
        const i = (0, b.addressFromPublicKeys)(
          0,
          n,
          t,
          e.map(d.createStacksPublicKey),
        ).hash160;
        if (i === r) return e;
        const o = e.slice().sort(),
          a = (0, b.addressFromPublicKeys)(
            0,
            n,
            t,
            o.map(d.createStacksPublicKey),
          ).hash160;
        if (a === r) return o;
        throw new Error(
          "Failed to find matching multi-sig address given public-keys.",
        );
      }
    },
    6942: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ClarityAbiTypeId = void 0),
        (t.abiFunctionToString = m),
        (t.encodeAbiClarityValue = T),
        (t.encodeClarityValue = C),
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
        (t.parseToCV = w),
        (t.validateContractCall = P));
      var r,
        i = n(2778),
        o = n(3407),
        a = n(5735),
        s = n(3468),
        c = n(3406);
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
      const l = (e) => void 0 !== e.buffer;
      t.isClarityAbiBuffer = l;
      const d = (e) => void 0 !== e["string-ascii"];
      t.isClarityAbiStringAscii = d;
      const f = (e) => void 0 !== e["string-utf8"];
      t.isClarityAbiStringUtf8 = f;
      const p = (e) => void 0 !== e.response;
      t.isClarityAbiResponse = p;
      const y = (e) => void 0 !== e.optional;
      t.isClarityAbiOptional = y;
      const h = (e) => void 0 !== e.tuple;
      t.isClarityAbiTuple = h;
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
        if (l(e)) return { id: r.ClarityAbiTypeBuffer, type: e };
        if (p(e)) return { id: r.ClarityAbiTypeResponse, type: e };
        if (y(e)) return { id: r.ClarityAbiTypeOptional, type: e };
        if (h(e)) return { id: r.ClarityAbiTypeTuple, type: e };
        if (g(e)) return { id: r.ClarityAbiTypeList, type: e };
        if (d(e)) return { id: r.ClarityAbiTypeStringAscii, type: e };
        if (f(e)) return { id: r.ClarityAbiTypeStringUtf8, type: e };
        throw new Error("Unexpected Clarity ABI type: " + JSON.stringify(e));
      }
      function T(e, t) {
        const n = t.id ? t : b(t);
        switch (n.id) {
          case r.ClarityAbiTypeUInt128:
            return (0, o.uintCV)(e);
          case r.ClarityAbiTypeInt128:
            return (0, o.intCV)(e);
          case r.ClarityAbiTypeBool:
            if ("false" === e || "0" === e) return (0, o.falseCV)();
            if ("true" === e || "1" === e) return (0, o.trueCV)();
            throw new Error(
              "Unexpected Clarity bool value: " + JSON.stringify(e),
            );
          case r.ClarityAbiTypePrincipal:
            if (e.includes(".")) {
              const [t, n] = e.split(".");
              return (0, o.contractPrincipalCV)(t, n);
            }
            return (0, o.standardPrincipalCV)(e);
          case r.ClarityAbiTypeTraitReference:
            const [t, c] = e.split(".");
            return (0, o.contractPrincipalCV)(t, c);
          case r.ClarityAbiTypeNone:
            return (0, o.noneCV)();
          case r.ClarityAbiTypeBuffer:
            return (0, o.bufferCV)((0, i.hexToBytes)(e));
          case r.ClarityAbiTypeStringAscii:
            return (0, a.stringAsciiCV)(e);
          case r.ClarityAbiTypeStringUtf8:
            return (0, a.stringUtf8CV)(e);
          case r.ClarityAbiTypeOptional:
            return (0, o.someCV)(T(e, n.type.optional));
          case r.ClarityAbiTypeResponse:
          case r.ClarityAbiTypeTuple:
          case r.ClarityAbiTypeList:
            throw new s.NotImplementedError(
              "Unsupported encoding for Clarity type: " + n.id,
            );
          default:
            throw new Error("Unexpected Clarity type ID: " + JSON.stringify(n));
        }
      }
      function C(e, t) {
        const n = e.id ? e : b(e);
        return n.id === r.ClarityAbiTypeBuffer
          ? (0, o.bufferCV)((0, i.utf8ToBytes)(t))
          : T(t, n);
      }
      function S(e) {
        if (u(e)) return "int128" === e ? "int" : "uint128" === e ? "uint" : e;
        if (l(e)) return `(buff ${e.buffer.length})`;
        if (d(e)) return `(string-ascii ${e["string-ascii"].length})`;
        if (f(e)) return `(string-utf8 ${e["string-utf8"].length})`;
        if (p(e))
          return `(response ${S(e.response.ok)} ${S(e.response.error)})`;
        if (y(e)) return `(optional ${S(e.optional)})`;
        if (h(e))
          return `(tuple ${e.tuple.map((e) => `(${e.name} ${S(e.type)})`).join(" ")})`;
        if (g(e)) return `(list ${e.list.length} ${S(e.list.type)})`;
        throw new Error(
          "Type string unsupported for Clarity type: " + JSON.stringify(e),
        );
      }
      function m(e) {
        const t = "read_only" === e.access ? "read-only" : e.access;
        return `(define-${t} (${e.name} ${e.args.map((e) => `(${e.name} ${S(e.type)})`).join(" ")}))`;
      }
      function v(e, t) {
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
              n.id === r.ClarityAbiTypeOptional && v(e.value, n.type.optional)
            );
          case o.ClarityType.ResponseErr:
            return (
              n.id === r.ClarityAbiTypeResponse &&
              v(e.value, n.type.response.error)
            );
          case o.ClarityType.ResponseOk:
            return (
              n.id === r.ClarityAbiTypeResponse &&
              v(e.value, n.type.response.ok)
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
              e.list.every((e) => v(e, n.type.list.type))
            );
          case o.ClarityType.Tuple:
            if (n.id == r.ClarityAbiTypeTuple) {
              const t = (0, c.cloneDeep)(e.data);
              for (let e = 0; e < n.type.tuple.length; e++) {
                const r = n.type.tuple[e],
                  i = r.name,
                  o = t[i];
                if (!o) return !1;
                if (!v(o, r.type)) return !1;
                delete t[i];
              }
              return !0;
            }
            return !1;
          default:
            return !1;
        }
      }
      function P(e, t) {
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
            if (!v(t, i.type)) {
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
      function w(e, t) {
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
        if (l(t)) {
          const n = (0, i.utf8ToBytes)(e).byteLength;
          if (n > t.buffer.length)
            throw new Error(
              "Input exceeds specified buffer length limit of " +
                t.buffer.length,
            );
          return (0, o.bufferCVFromString)(e);
        }
        throw (
          p(t) || y(t) || h(t) || g(t),
          new Error(
            "Contract function contains unsupported Clarity ABI type: " + n,
          )
        );
      }
      t.isClarityAbiList = g;
    },
    6943: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createFungiblePostCondition = s),
        (t.createNonFungiblePostCondition = c),
        (t.createSTXPostCondition = a));
      var r = n(2778),
        i = n(3127),
        o = n(3626);
      function a(e, t, n) {
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
      function s(e, t, n, a) {
        return (
          "string" === typeof e && (e = (0, o.parsePrincipalString)(e)),
          "string" === typeof a && (a = (0, o.parseAssetInfoString)(a)),
          {
            type: i.StacksMessageType.PostCondition,
            conditionType: i.PostConditionType.Fungible,
            principal: e,
            conditionCode: t,
            amount: (0, r.intToBigInt)(n, !1),
            assetInfo: a,
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
    6944: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionSigner = void 0));
      var r = n(4882),
        i = n(3406),
        o = n(3127),
        a = n(3468);
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
              if (n.contents.type !== o.StacksMessageType.MessageSignature)
                return;
              const i = n.contents,
                a = (0, r.nextVerification)(
                  this.sigHash,
                  e.auth.authType,
                  t.fee,
                  t.nonce,
                  o.PubKeyEncoding.Compressed,
                  i,
                );
              (0, r.isNonSequentialMultiSig)(t.hashMode) ||
                (this.sigHash = a.nextSigHash);
            });
          }
        }
        static createSponsorSigner(e, t) {
          if (e.auth.authType != o.AuthType.Sponsored)
            throw new a.SigningError(
              "Cannot add sponsor to non-sponsored transaction",
            );
          const n = (0, i.cloneDeep)(e);
          n.setSponsor(t);
          const r = n.verifyOrigin(),
            s = new this(n);
          return (
            (s.originDone = !0),
            (s.sigHash = r),
            (s.checkOversign = !0),
            (s.checkOverlap = !0),
            s
          );
        }
        signOrigin(e) {
          if (this.checkOverlap && this.originDone)
            throw new a.SigningError("Cannot sign origin after sponsor key");
          if (void 0 === this.transaction.auth)
            throw new a.SigningError('"transaction.auth" is undefined');
          if (void 0 === this.transaction.auth.spendingCondition)
            throw new a.SigningError(
              '"transaction.auth.spendingCondition" is undefined',
            );
          const t = this.transaction.auth.spendingCondition;
          if (
            (t.hashMode === o.AddressHashMode.SerializeP2SH ||
              t.hashMode === o.AddressHashMode.SerializeP2WSH) &&
            this.checkOversign &&
            t.fields.filter(
              (e) => e.contents.type === o.StacksMessageType.MessageSignature,
            ).length >= t.signaturesRequired
          )
            throw new Error("Origin would have too many signatures");
          const n = this.transaction.signNextOrigin(this.sigHash, e);
          ((0, r.isSingleSig)(this.transaction.auth.spendingCondition) ||
            (0, r.isSequentialMultiSig)(
              this.transaction.auth.spendingCondition.hashMode,
            )) &&
            (this.sigHash = n);
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
            throw new a.SigningError('"transaction.auth" is undefined');
          if (this.transaction.auth.authType !== o.AuthType.Sponsored)
            throw new a.SigningError(
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
    6945: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StacksTransaction = void 0),
        (t.deserializeTransaction = p),
        (t.serializeTransaction = y),
        (t.transactionToHex = h));
      var r = n(2778),
        i = n(4882),
        o = n(5736),
        a = n(3127),
        s = n(3468),
        c = n(3853),
        u = n(4883),
        l = n(4884),
        d = n(3852),
        f = n(3406);
      class StacksTransaction {
        constructor(e, t, n, i, o, s, c) {
          if (
            ((this.version = e),
            (this.auth = t),
            (this.payload =
              "amount" in n
                ? { ...n, amount: (0, r.intToBigInt)(n.amount, !1) }
                : n),
            (this.chainId =
              null !== c && void 0 !== c ? c : a.DEFAULT_CHAIN_ID),
            (this.postConditionMode =
              null !== o && void 0 !== o ? o : a.PostConditionMode.Deny),
            (this.postConditions =
              null !== i && void 0 !== i ? i : (0, d.createLPList)([])),
            s)
          )
            this.anchorMode = (0, a.anchorModeFromNameOrValue)(s);
          else
            switch (n.payloadType) {
              case a.PayloadType.Coinbase:
              case a.PayloadType.CoinbaseToAltRecipient:
              case a.PayloadType.NakamotoCoinbase:
              case a.PayloadType.PoisonMicroblock:
              case a.PayloadType.TenureChange:
                this.anchorMode = a.AnchorMode.OnChainOnly;
                break;
              case a.PayloadType.ContractCall:
              case a.PayloadType.SmartContract:
              case a.PayloadType.VersionedSmartContract:
              case a.PayloadType.TokenTransfer:
                this.anchorMode = a.AnchorMode.Any;
                break;
            }
        }
        signBegin() {
          const e = (0, f.cloneDeep)(this);
          return ((e.auth = (0, i.intoInitialSighashAuth)(e.auth)), e.txid());
        }
        verifyBegin() {
          const e = (0, f.cloneDeep)(this);
          return ((e.auth = (0, i.intoInitialSighashAuth)(e.auth)), e.txid());
        }
        verifyOrigin() {
          return (0, i.verifyOrigin)(this.auth, this.verifyBegin());
        }
        signNextOrigin(e, t) {
          if (void 0 === this.auth.spendingCondition)
            throw new Error('"auth.spendingCondition" is undefined');
          if (void 0 === this.auth.authType)
            throw new Error('"auth.authType" is undefined');
          return this.signAndAppend(
            this.auth.spendingCondition,
            e,
            a.AuthType.Standard,
            t,
          );
        }
        signNextSponsor(e, t) {
          if (this.auth.authType === a.AuthType.Sponsored)
            return this.signAndAppend(
              this.auth.sponsorSpendingCondition,
              e,
              a.AuthType.Sponsored,
              t,
            );
          throw new Error('"auth.sponsorSpendingCondition" is undefined');
        }
        appendPubkey(e) {
          const t = this.auth.spendingCondition;
          if (!t || (0, i.isSingleSig)(t))
            throw new Error("Can't append public key to a singlesig condition");
          {
            const n = (0, c.isCompressed)(e);
            t.fields.push(
              (0, l.createTransactionAuthField)(
                n ? a.PubKeyEncoding.Compressed : a.PubKeyEncoding.Uncompressed,
                e,
              ),
            );
          }
        }
        signAndAppend(e, t, n, o) {
          const { nextSig: s, nextSigHash: c } = (0, i.nextSignature)(
            t,
            n,
            e.fee,
            e.nonce,
            o,
          );
          return (
            (0, i.isSingleSig)(e)
              ? (e.signature = s)
              : e.fields.push(
                  (0, l.createTransactionAuthField)(
                    o.data.byteLength === r.PRIVATE_KEY_COMPRESSED_LENGTH
                      ? a.PubKeyEncoding.Compressed
                      : a.PubKeyEncoding.Uncompressed,
                    s,
                  ),
                ),
            c
          );
        }
        txid() {
          const e = this.serialize();
          return (0, f.txidFromData)(e);
        }
        setSponsor(e) {
          if (this.auth.authType != a.AuthType.Sponsored)
            throw new s.SigningError(
              "Cannot sponsor sign a non-sponsored transaction",
            );
          this.auth = (0, i.setSponsor)(this.auth, e);
        }
        setFee(e) {
          this.auth = (0, i.setFee)(this.auth, e);
        }
        setNonce(e) {
          this.auth = (0, i.setNonce)(this.auth, e);
        }
        setSponsorNonce(e) {
          if (this.auth.authType != a.AuthType.Sponsored)
            throw new s.SigningError(
              "Cannot sponsor sign a non-sponsored transaction",
            );
          this.auth = (0, i.setSponsorNonce)(this.auth, e);
        }
        serialize() {
          if (void 0 === this.version)
            throw new s.SerializationError('"version" is undefined');
          if (void 0 === this.chainId)
            throw new s.SerializationError('"chainId" is undefined');
          if (void 0 === this.auth)
            throw new s.SerializationError('"auth" is undefined');
          if (void 0 === this.anchorMode)
            throw new s.SerializationError('"anchorMode" is undefined');
          if (void 0 === this.payload)
            throw new s.SerializationError('"payload" is undefined');
          const e = [];
          e.push(this.version);
          const t = new Uint8Array(4);
          return (
            (0, r.writeUInt32BE)(t, this.chainId, 0),
            e.push(t),
            e.push((0, i.serializeAuthorization)(this.auth)),
            e.push(this.anchorMode),
            e.push(this.postConditionMode),
            e.push((0, d.serializeLPList)(this.postConditions)),
            e.push((0, u.serializePayload)(this.payload)),
            (0, r.concatArray)(e)
          );
        }
      }
      function p(e) {
        let t;
        t =
          "string" === typeof e
            ? "0x" === e.slice(0, 2).toLowerCase()
              ? new o.BytesReader((0, r.hexToBytes)(e.slice(2)))
              : new o.BytesReader((0, r.hexToBytes)(e))
            : e instanceof Uint8Array
              ? new o.BytesReader(e)
              : e;
        const n = t.readUInt8Enum(a.TransactionVersion, (e) => {
            throw new Error(`Could not parse ${e} as TransactionVersion`);
          }),
          s = t.readUInt32BE(),
          c = (0, i.deserializeAuthorization)(t),
          l = t.readUInt8Enum(a.AnchorMode, (e) => {
            throw new Error(`Could not parse ${e} as AnchorMode`);
          }),
          f = t.readUInt8Enum(a.PostConditionMode, (e) => {
            throw new Error(`Could not parse ${e} as PostConditionMode`);
          }),
          p = (0, d.deserializeLPList)(t, a.StacksMessageType.PostCondition),
          y = (0, u.deserializePayload)(t);
        return new StacksTransaction(n, c, y, p, f, l, s);
      }
      function y(e) {
        return e.serialize();
      }
      function h(e) {
        return (0, r.bytesToHex)(e.serialize());
      }
      t.StacksTransaction = StacksTransaction;
    },
    6947: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fetchLegacyWalletConfig = s));
      var r = n(3206),
        i = n(3167),
        o = n(4880),
        a = n(3851);
      async function s(e) {
        let {
          wallet: t,
          gaiaHubConfig: n,
          fetchFn: s = (0, i.createFetchFn)(),
        } = e;
        const c = (0, a.getRootNode)(t),
          u = (0, o.deriveLegacyConfigPrivateKey)(c);
        try {
          const e = await s(`${n.url_prefix}${n.address}/wallet-config.json`);
          if (!e.ok) return null;
          const t = await e.text(),
            i = await (0, r.decryptContent)(t, { privateKey: u }),
            o = JSON.parse(i);
          return o;
        } catch (l) {
          return (console.error(l), null);
        }
      }
    },
    6948: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getOrCreateWalletConfig =
          t.fetchWalletConfig =
          t.encryptWalletConfig =
          t.createWalletGaiaConfig =
            void 0),
        (t.makeWalletConfig = l),
        (t.updateWalletConfigWithApp = t.updateWalletConfig = void 0));
      var r = n(6949),
        i = n(3206),
        o = n(3167);
      const a = async (e) => {
        let { gaiaHubUrl: t, wallet: n } = e;
        return (0, r.connectToGaiaHub)(t, n.configPrivateKey);
      };
      t.createWalletGaiaConfig = a;
      const s = async (e) => {
        let {
          wallet: t,
          gaiaHubConfig: n,
          skipUpload: r,
          fetchFn: i = (0, o.createFetchFn)(),
        } = e;
        const a = await c({ wallet: t, gaiaHubConfig: n, fetchFn: i });
        if (a) return a;
        const s = l(t);
        return (r || (await u({ wallet: t, gaiaHubConfig: n })), s);
      };
      t.getOrCreateWalletConfig = s;
      const c = async (e) => {
        let {
          wallet: t,
          gaiaHubConfig: n,
          fetchFn: r = (0, o.createFetchFn)(),
        } = e;
        try {
          const e = await r(`${n.url_prefix}${n.address}/wallet-config.json`);
          if (!e.ok) return null;
          const o = await e.text(),
            a = await (0, i.decryptContent)(o, {
              privateKey: t.configPrivateKey,
            }),
            s = JSON.parse(a);
          return s;
        } catch (a) {
          return (console.error(a), null);
        }
      };
      t.fetchWalletConfig = c;
      const u = async (e) => {
        let { wallet: t, walletConfig: n, gaiaHubConfig: i } = e;
        const o = n || l(t),
          a = await d({ wallet: t, walletConfig: o });
        return (
          await (0, r.uploadToGaiaHub)(
            "wallet-config.json",
            a,
            i,
            void 0,
            void 0,
            void 0,
            !0,
          ),
          o
        );
      };
      function l(e) {
        return {
          accounts: e.accounts.map((e) => ({ username: e.username, apps: {} })),
        };
      }
      t.updateWalletConfig = u;
      const d = async (e) => {
        let { wallet: t, walletConfig: n } = e;
        const r = (0, i.getPublicKeyFromPrivate)(t.configPrivateKey),
          o = await (0, i.encryptContent)(JSON.stringify(n), { publicKey: r });
        return o;
      };
      t.encryptWalletConfig = d;
      const f = async (e) => {
        let {
          wallet: t,
          account: n,
          app: r,
          gaiaHubConfig: i,
          walletConfig: o,
        } = e;
        t.accounts.forEach((e, t) => {
          const n = o.accounts[t];
          n
            ? ((n.apps = n.apps || {}),
              (n.username = e.username),
              (o.accounts[t] = n))
            : o.accounts.push({ username: e.username, apps: {} });
        });
        const a = o.accounts[n.index];
        return (
          (a.apps = a.apps || {}),
          (a.apps[r.origin] = r),
          (o.accounts[n.index] = a),
          await u({ wallet: t, walletConfig: o, gaiaHubConfig: i }),
          o
        );
      };
      t.updateWalletConfigWithApp = f;
    },
    6958: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.signAndUploadProfile =
          t.fetchProfileFromUrl =
          t.fetchAccountProfileUrl =
          t.DEFAULT_PROFILE_FILE_NAME =
          t.DEFAULT_PROFILE =
            void 0),
        (t.signProfileForUpload = f),
        (t.uploadProfile = p));
      var r = n(3206),
        i = n(3167),
        o = n(5739),
        a = n(6949),
        s = n(4601),
        c = n(3851);
      t.DEFAULT_PROFILE = {
        "@type": "Person",
        "@context": "http://schema.org",
      };
      const u = (t.DEFAULT_PROFILE_FILE_NAME = "profile.json"),
        l = async function (e, t) {
          void 0 === t && (t = (0, i.createFetchFn)());
          try {
            const r = await t(e);
            if (r.ok) {
              var n;
              const e = await r.json(),
                { decodedToken: t } = e[0];
              return null === (n = t.payload) || void 0 === n
                ? void 0
                : n.claim;
            }
            if (404 === r.status) return null;
            throw new Error("Network error when fetching profile");
          } catch (r) {
            return null;
          }
        };
      t.fetchProfileFromUrl = l;
      const d = async (e) => {
        let { account: t, gaiaHubUrl: n } = e;
        if (t.username)
          try {
            const e = await (0, s.getProfileURLFromZoneFile)(t.username);
            if (e) return e;
          } catch (r) {
            console.warn("Error fetching profile URL from zone file:", r);
          }
        return `${n}${(0, c.getGaiaAddress)(t)}/profile.json`;
      };
      function f(e) {
        let { profile: t, account: n } = e;
        const i = n.stxPrivateKey,
          a = (0, r.getPublicKeyFromPrivate)(i.slice(0, 64)),
          s = (0, o.signProfileToken)(t, i, { publicKey: a }),
          c = (0, o.wrapProfileToken)(s),
          u = [c];
        return JSON.stringify(u, null, 2);
      }
      async function p(e) {
        let {
          gaiaHubUrl: t,
          account: n,
          signedProfileTokenData: r,
          gaiaHubConfig: i,
        } = e;
        const o = i || (await (0, a.connectToGaiaHub)(t, n.dataPrivateKey));
        await (0, a.uploadToGaiaHub)(u, r, o, void 0, void 0, void 0, !0);
      }
      t.fetchAccountProfileUrl = d;
      const y = async (e) => {
        let { profile: t, gaiaHubUrl: n, account: r, gaiaHubConfig: i } = e;
        const o = f({ profile: t, account: r });
        await p({
          gaiaHubUrl: n,
          account: r,
          signedProfileTokenData: o,
          gaiaHubConfig: i,
        });
      };
      t.signAndUploadProfile = y;
    },
  },
]);
