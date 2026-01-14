(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [179],
  {
    11455: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto = {
          node: void 0,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        }));
    },
    11456: function (e, t, r) {
      const n = r(11457),
        o = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      e.exports = n(o);
    },
    11457: function (e, t, r) {
      "use strict";
      function n(e) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
        for (var n = 0; n < e.length; n++) {
          var o = e.charAt(n),
            i = o.charCodeAt(0);
          if (255 !== t[i]) throw new TypeError(o + " is ambiguous");
          t[i] = n;
        }
        var s = e.length,
          a = e.charAt(0),
          c = Math.log(s) / Math.log(256),
          l = Math.log(256) / Math.log(s);
        function u(t) {
          if (
            (t instanceof Uint8Array ||
              (ArrayBuffer.isView(t)
                ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                : Array.isArray(t) && (t = Uint8Array.from(t))),
            !(t instanceof Uint8Array))
          )
            throw new TypeError("Expected Uint8Array");
          if (0 === t.length) return "";
          var r = 0,
            n = 0,
            o = 0,
            i = t.length;
          while (o !== i && 0 === t[o]) (o++, r++);
          var c = ((i - o) * l + 1) >>> 0,
            u = new Uint8Array(c);
          while (o !== i) {
            for (
              var h = t[o], d = 0, f = c - 1;
              (0 !== h || d < n) && -1 !== f;
              f--, d++
            )
              ((h += (256 * u[f]) >>> 0),
                (u[f] = (h % s) >>> 0),
                (h = (h / s) >>> 0));
            if (0 !== h) throw new Error("Non-zero carry");
            ((n = d), o++);
          }
          var p = c - n;
          while (p !== c && 0 === u[p]) p++;
          for (var y = a.repeat(r); p < c; ++p) y += e.charAt(u[p]);
          return y;
        }
        function h(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var r = 0,
            n = 0,
            o = 0;
          while (e[r] === a) (n++, r++);
          var i = ((e.length - r) * c + 1) >>> 0,
            l = new Uint8Array(i);
          while (e[r]) {
            var u = e.charCodeAt(r);
            if (u > 255) return;
            var h = t[u];
            if (255 === h) return;
            for (var d = 0, f = i - 1; (0 !== h || d < o) && -1 !== f; f--, d++)
              ((h += (s * l[f]) >>> 0),
                (l[f] = (h % 256) >>> 0),
                (h = (h / 256) >>> 0));
            if (0 !== h) throw new Error("Non-zero carry");
            ((o = d), r++);
          }
          var p = i - o;
          while (p !== i && 0 === l[p]) p++;
          var y = new Uint8Array(n + (i - p)),
            g = n;
          while (p !== i) y[g++] = l[p++];
          return y;
        }
        function d(e) {
          var t = h(e);
          if (t) return t;
          throw new Error("Non-base" + s + " character");
        }
        return { encode: u, decodeUnsafe: h, decode: d };
      }
      e.exports = n;
    },
    11458: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hashRipemd160 = o));
      var n = r(11459);
      function o(e) {
        return (0, n.ripemd160)(e);
      }
    },
    11459: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ripemd160 = t.RIPEMD160 = void 0));
      const n = r(5721),
        o = r(4593),
        i = new Uint8Array([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        s = Uint8Array.from({ length: 16 }, (e, t) => t),
        a = s.map((e) => (9 * e + 5) % 16);
      let c = [s],
        l = [a];
      for (let w = 0; w < 4; w++)
        for (let e of [c, l]) e.push(e[w].map((e) => i[e]));
      const u = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((e) => new Uint8Array(e)),
        h = c.map((e, t) => e.map((e) => u[t][e])),
        d = l.map((e, t) => e.map((e) => u[t][e])),
        f = new Uint32Array([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        p = new Uint32Array([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]),
        y = (e, t) => (e << t) | (e >>> (32 - t));
      function g(e, t, r, n) {
        return 0 === e
          ? t ^ r ^ n
          : 1 === e
            ? (t & r) | (~t & n)
            : 2 === e
              ? (t | ~r) ^ n
              : 3 === e
                ? (t & n) | (r & ~n)
                : t ^ (r | ~n);
      }
      const b = new Uint32Array(16);
      class RIPEMD160 extends n.SHA2 {
        constructor() {
          (super(64, 20, 8, !0),
            (this.h0 = 1732584193),
            (this.h1 = -271733879),
            (this.h2 = -1732584194),
            (this.h3 = 271733878),
            (this.h4 = -1009589776));
        }
        get() {
          const { h0: e, h1: t, h2: r, h3: n, h4: o } = this;
          return [e, t, r, n, o];
        }
        set(e, t, r, n, o) {
          ((this.h0 = 0 | e),
            (this.h1 = 0 | t),
            (this.h2 = 0 | r),
            (this.h3 = 0 | n),
            (this.h4 = 0 | o));
        }
        process(e, t) {
          for (let c = 0; c < 16; c++, t += 4) b[c] = e.getUint32(t, !0);
          let r = 0 | this.h0,
            n = r,
            o = 0 | this.h1,
            i = o,
            s = 0 | this.h2,
            a = s,
            u = 0 | this.h3,
            w = u,
            v = 0 | this.h4,
            m = v;
          for (let S = 0; S < 5; S++) {
            const e = 4 - S,
              t = f[S],
              A = p[S],
              E = c[S],
              P = l[S],
              k = h[S],
              O = d[S];
            for (let n = 0; n < 16; n++) {
              const e = (y(r + g(S, o, s, u) + b[E[n]] + t, k[n]) + v) | 0;
              ((r = v), (v = u), (u = 0 | y(s, 10)), (s = o), (o = e));
            }
            for (let r = 0; r < 16; r++) {
              const t = (y(n + g(e, i, a, w) + b[P[r]] + A, O[r]) + m) | 0;
              ((n = m), (m = w), (w = 0 | y(a, 10)), (a = i), (i = t));
            }
          }
          this.set(
            (this.h1 + s + w) | 0,
            (this.h2 + u + m) | 0,
            (this.h3 + v + n) | 0,
            (this.h4 + r + i) | 0,
            (this.h0 + o + a) | 0,
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
        (t.ripemd160 = (0, o.wrapConstructor)(() => new RIPEMD160())));
    },
    11460: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha384 =
          t.sha512_256 =
          t.sha512_224 =
          t.sha512 =
          t.SHA512 =
            void 0));
      const n = r(5721),
        o = r(11461),
        i = r(4593),
        [s, a] = o.default.split(
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
        l = new Uint32Array(80);
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
            Ch: o,
            Cl: i,
            Dh: s,
            Dl: a,
            Eh: c,
            El: l,
            Fh: u,
            Fl: h,
            Gh: d,
            Gl: f,
            Hh: p,
            Hl: y,
          } = this;
          return [e, t, r, n, o, i, s, a, c, l, u, h, d, f, p, y];
        }
        set(e, t, r, n, o, i, s, a, c, l, u, h, d, f, p, y) {
          ((this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | o),
            (this.Cl = 0 | i),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | c),
            (this.El = 0 | l),
            (this.Fh = 0 | u),
            (this.Fl = 0 | h),
            (this.Gh = 0 | d),
            (this.Gl = 0 | f),
            (this.Hh = 0 | p),
            (this.Hl = 0 | y));
        }
        process(e, t) {
          for (let o = 0; o < 16; o++, t += 4)
            ((c[o] = e.getUint32(t)), (l[o] = e.getUint32((t += 4))));
          for (let s = 16; s < 80; s++) {
            const e = 0 | c[s - 15],
              t = 0 | l[s - 15],
              r =
                o.default.rotrSH(e, t, 1) ^
                o.default.rotrSH(e, t, 8) ^
                o.default.shrSH(e, t, 7),
              n =
                o.default.rotrSL(e, t, 1) ^
                o.default.rotrSL(e, t, 8) ^
                o.default.shrSL(e, t, 7),
              i = 0 | c[s - 2],
              a = 0 | l[s - 2],
              u =
                o.default.rotrSH(i, a, 19) ^
                o.default.rotrBH(i, a, 61) ^
                o.default.shrSH(i, a, 6),
              h =
                o.default.rotrSL(i, a, 19) ^
                o.default.rotrBL(i, a, 61) ^
                o.default.shrSL(i, a, 6),
              d = o.default.add4L(n, h, l[s - 7], l[s - 16]),
              f = o.default.add4H(d, r, u, c[s - 7], c[s - 16]);
            ((c[s] = 0 | f), (l[s] = 0 | d));
          }
          let {
            Ah: r,
            Al: n,
            Bh: i,
            Bl: u,
            Ch: h,
            Cl: d,
            Dh: f,
            Dl: p,
            Eh: y,
            El: g,
            Fh: b,
            Fl: w,
            Gh: v,
            Gl: m,
            Hh: S,
            Hl: A,
          } = this;
          for (let E = 0; E < 80; E++) {
            const e =
                o.default.rotrSH(y, g, 14) ^
                o.default.rotrSH(y, g, 18) ^
                o.default.rotrBH(y, g, 41),
              t =
                o.default.rotrSL(y, g, 14) ^
                o.default.rotrSL(y, g, 18) ^
                o.default.rotrBL(y, g, 41),
              P = (y & b) ^ (~y & v),
              k = (g & w) ^ (~g & m),
              O = o.default.add5L(A, t, k, a[E], l[E]),
              T = o.default.add5H(O, S, e, P, s[E], c[E]),
              _ = 0 | O,
              U =
                o.default.rotrSH(r, n, 28) ^
                o.default.rotrBH(r, n, 34) ^
                o.default.rotrBH(r, n, 39),
              C =
                o.default.rotrSL(r, n, 28) ^
                o.default.rotrBL(r, n, 34) ^
                o.default.rotrBL(r, n, 39),
              L = (r & i) ^ (r & h) ^ (i & h),
              x = (n & u) ^ (n & d) ^ (u & d);
            ((S = 0 | v),
              (A = 0 | m),
              (v = 0 | b),
              (m = 0 | w),
              (b = 0 | y),
              (w = 0 | g),
              ({ h: y, l: g } = o.default.add(0 | f, 0 | p, 0 | T, 0 | _)),
              (f = 0 | h),
              (p = 0 | d),
              (h = 0 | i),
              (d = 0 | u),
              (i = 0 | r),
              (u = 0 | n));
            const F = o.default.add3L(_, C, x);
            ((r = o.default.add3H(F, T, U, L)), (n = 0 | F));
          }
          (({ h: r, l: n } = o.default.add(
            0 | this.Ah,
            0 | this.Al,
            0 | r,
            0 | n,
          )),
            ({ h: i, l: u } = o.default.add(
              0 | this.Bh,
              0 | this.Bl,
              0 | i,
              0 | u,
            )),
            ({ h: h, l: d } = o.default.add(
              0 | this.Ch,
              0 | this.Cl,
              0 | h,
              0 | d,
            )),
            ({ h: f, l: p } = o.default.add(
              0 | this.Dh,
              0 | this.Dl,
              0 | f,
              0 | p,
            )),
            ({ h: y, l: g } = o.default.add(
              0 | this.Eh,
              0 | this.El,
              0 | y,
              0 | g,
            )),
            ({ h: b, l: w } = o.default.add(
              0 | this.Fh,
              0 | this.Fl,
              0 | b,
              0 | w,
            )),
            ({ h: v, l: m } = o.default.add(
              0 | this.Gh,
              0 | this.Gl,
              0 | v,
              0 | m,
            )),
            ({ h: S, l: A } = o.default.add(
              0 | this.Hh,
              0 | this.Hl,
              0 | S,
              0 | A,
            )),
            this.set(r, n, i, u, h, d, f, p, y, g, b, w, v, m, S, A));
        }
        roundClean() {
          (c.fill(0), l.fill(0));
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
      ((t.sha512 = (0, i.wrapConstructor)(() => new SHA512())),
        (t.sha512_224 = (0, i.wrapConstructor)(() => new SHA512_224())),
        (t.sha512_256 = (0, i.wrapConstructor)(() => new SHA512_256())),
        (t.sha384 = (0, i.wrapConstructor)(() => new SHA384())));
    },
    11461: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.add = t.toBig = t.split = t.fromBig = void 0));
      const n = BigInt(2 ** 32 - 1),
        o = BigInt(32);
      function i(e, t) {
        return (
          void 0 === t && (t = !1),
          t
            ? { h: Number(e & n), l: Number((e >> o) & n) }
            : { h: 0 | Number((e >> o) & n), l: 0 | Number(e & n) }
        );
      }
      function s(e, t) {
        void 0 === t && (t = !1);
        let r = new Uint32Array(e.length),
          n = new Uint32Array(e.length);
        for (let o = 0; o < e.length; o++) {
          const { h: s, l: a } = i(e[o], t);
          [r[o], n[o]] = [s, a];
        }
        return [r, n];
      }
      ((t.fromBig = i), (t.split = s));
      const a = (e, t) => (BigInt(e >>> 0) << o) | BigInt(t >>> 0);
      t.toBig = a;
      const c = (e, t, r) => e >>> r,
        l = (e, t, r) => (e << (32 - r)) | (t >>> r),
        u = (e, t, r) => (e >>> r) | (t << (32 - r)),
        h = (e, t, r) => (e << (32 - r)) | (t >>> r),
        d = (e, t, r) => (e << (64 - r)) | (t >>> (r - 32)),
        f = (e, t, r) => (e >>> (r - 32)) | (t << (64 - r)),
        p = (e, t) => t,
        y = (e, t) => e,
        g = (e, t, r) => (e << r) | (t >>> (32 - r)),
        b = (e, t, r) => (t << r) | (e >>> (32 - r)),
        w = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        v = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      function m(e, t, r, n) {
        const o = (t >>> 0) + (n >>> 0);
        return { h: (e + r + ((o / 2 ** 32) | 0)) | 0, l: 0 | o };
      }
      t.add = m;
      const S = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0),
        A = (e, t, r, n) => (t + r + n + ((e / 2 ** 32) | 0)) | 0,
        E = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0),
        P = (e, t, r, n, o) => (t + r + n + o + ((e / 2 ** 32) | 0)) | 0,
        k = (e, t, r, n, o) =>
          (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (o >>> 0),
        O = (e, t, r, n, o, i) => (t + r + n + o + i + ((e / 2 ** 32) | 0)) | 0,
        T = {
          fromBig: i,
          split: s,
          toBig: t.toBig,
          shrSH: c,
          shrSL: l,
          rotrSH: u,
          rotrSL: h,
          rotrBH: d,
          rotrBL: f,
          rotr32H: p,
          rotr32L: y,
          rotlSH: g,
          rotlSL: b,
          rotlBH: w,
          rotlBL: v,
          add: m,
          add3L: S,
          add3H: A,
          add4L: E,
          add4H: P,
          add5H: O,
          add5L: k,
        };
      t.default = T;
    },
    11462: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decode = a),
        (t.encode = s),
        (t.encodingLength = c));
      var n = r(2778);
      const o = 9007199254740991;
      function i(e) {
        if (e < 0 || e > o || e % 1 !== 0)
          throw new RangeError("value out of range");
      }
      function s(e, t, r) {
        return (
          void 0 === r && (r = 0),
          i(e),
          t || (t = new Uint8Array(c(e))),
          e < 253
            ? (0, n.writeUInt8)(t, e, r)
            : e <= 65535
              ? ((0, n.writeUInt8)(t, 253, r),
                (0, n.writeUInt16LE)(t, e, r + 1))
              : e <= 4294967295
                ? ((0, n.writeUInt8)(t, 254, r),
                  (0, n.writeUInt32LE)(t, e, r + 1))
                : ((0, n.writeUInt8)(t, 255, r),
                  (0, n.writeUInt32LE)(t, e >>> 0, r + 1),
                  (0, n.writeUInt32LE)(t, (e / 4294967296) | 0, r + 5)),
          t
        );
      }
      function a(e, t) {
        void 0 === t && (t = 0);
        const r = (0, n.readUInt8)(e, t);
        if (r < 253) return r;
        if (253 === r) return (0, n.readUInt16LE)(e, t + 1);
        if (254 === r) return (0, n.readUInt32LE)(e, t + 1);
        {
          const r = (0, n.readUInt32LE)(e, t + 1),
            o = (0, n.readUInt32LE)(e, t + 5),
            s = 4294967296 * o + r;
          return (i(s), s);
        }
      }
      function c(e) {
        return (i(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9);
      }
    },
    11463: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decryptContent = a),
        (t.encryptContent = s));
      var n = r(2778),
        o = r(5720),
        i = r(5724);
      async function s(e, t) {
        const r = Object.assign({}, t);
        let s;
        if (!r.publicKey) {
          if (!r.privateKey)
            throw new Error(
              "Either public key or private key must be supplied for encryption.",
            );
          r.publicKey = (0, i.getPublicKeyFromPrivate)(r.privateKey);
        }
        const a =
            "boolean" === typeof r.wasString
              ? r.wasString
              : "string" === typeof e,
          c = "string" === typeof e ? (0, n.utf8ToBytes)(e) : e,
          l = await (0, o.encryptECIES)(
            r.publicKey,
            c,
            a,
            r.cipherTextEncoding,
          );
        let u = JSON.stringify(l);
        if (r.sign) {
          "string" === typeof r.sign ? (s = r.sign) : s || (s = r.privateKey);
          const e = (0, o.signECDSA)(s, u),
            t = {
              signature: e.signature,
              publicKey: e.publicKey,
              cipherText: u,
            };
          u = JSON.stringify(t);
        }
        return u;
      }
      function a(e, t) {
        const r = Object.assign({}, t);
        if (!r.privateKey)
          throw new Error("Private key is required for decryption.");
        try {
          const t = JSON.parse(e);
          return (0, o.decryptECIES)(r.privateKey, t);
        } catch (n) {
          throw n instanceof SyntaxError
            ? new Error(
                "Failed to parse encrypted content JSON. The content may not be encrypted. If using getFile, try passing { decrypt: false }.",
              )
            : n;
        }
      }
    },
    11464: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decryptMnemonic = p),
        (t.encryptMnemonic = h));
      var n = r(4694),
        o = r(6924),
        i = r(6930),
        s = r(4878),
        a = r(6927),
        c = r(11465),
        l = r(2778),
        u = r(5720);
      async function h(e, t, r) {
        let s;
        try {
          const t = (0, n.mnemonicToEntropy)(e, o.wordlist);
          s = (0, l.bytesToHex)(t);
        } catch (E) {
          throw (
            console.error("Invalid mnemonic phrase provided"),
            console.error(E),
            new Error("Not a valid bip39 mnemonic")
          );
        }
        const h = (0, l.hexToBytes)(s),
          d = await (0, c.createPbkdf2)(),
          f =
            null !== r && void 0 !== r && r.getRandomBytes
              ? r.getRandomBytes(16)
              : (0, i.randomBytes)(16),
          p = await d.derive(t, f, 1e5, 48, "sha512"),
          y = p.slice(0, 16),
          g = p.slice(16, 32),
          b = p.slice(32, 48),
          w = await (0, a.createCipher)(),
          v = await w.encrypt("aes-128-cbc", y, b, h),
          m = (0, l.concatBytes)(f, v),
          S = (0, u.hmacSha256)(g, m),
          A = (0, l.concatBytes)(f, S, v);
        return A;
      }
      class PasswordError extends Error {}
      async function d(e, t) {
        const r = e.slice(0, 16),
          i = e.slice(16, 48),
          h = e.slice(48),
          d = (0, l.concatBytes)(r, h),
          f = await (0, c.createPbkdf2)(),
          p = await f.derive(t, r, 1e5, 48, "sha512"),
          y = p.slice(0, 16),
          g = p.slice(16, 32),
          b = p.slice(32, 48),
          w = await (0, a.createCipher)(),
          v = await w.decrypt("aes-128-cbc", y, b, h),
          m = (0, u.hmacSha256)(g, d),
          S = await (0, s.createSha2Hash)(),
          A = await S.digest(i),
          E = await S.digest(m);
        if (!(0, l.equals)(A, E))
          throw new PasswordError("Wrong password (HMAC mismatch)");
        let P;
        try {
          P = (0, n.entropyToMnemonic)(v, o.wordlist);
        } catch (k) {
          throw (
            console.error("Error thrown by `entropyToMnemonic`"),
            console.error(k),
            new PasswordError("Wrong password (invalid plaintext)")
          );
        }
        if (!(0, n.validateMnemonic)(P, o.wordlist))
          throw new PasswordError("Wrong password (invalid plaintext)");
        return P;
      }
      function f(e, t, r) {
        return new Promise((n, o) => {
          (r ||
            o(new Error("The `triplesec.decrypt` function must be provided")),
            r({ key: (0, l.utf8ToBytes)(t), data: e }, (e, t) => {
              e ? o(e) : n(t);
            }));
        });
      }
      async function p(e, t, r) {
        const n = "string" === typeof e ? (0, l.hexToBytes)(e) : e;
        try {
          return await d(n, t);
        } catch (o) {
          if (o instanceof PasswordError) throw o;
          const e = await f(n, t, r);
          return (0, l.bytesToUtf8)(e);
        }
      }
    },
    11465: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WebCryptoPbkdf2 =
          t.WebCryptoPartialPbkdf2 =
          t.NodeCryptoPbkdf2 =
            void 0),
        (t.createPbkdf2 = i));
      var n = r(2778),
        o = r(5722);
      class NodeCryptoPbkdf2 {
        constructor(e) {
          this.nodePbkdf2 = e;
        }
        async derive(e, t, r, n, o) {
          if ("sha512" !== o && "sha256" !== o)
            throw new Error(`Unsupported digest "${o}" for Pbkdf2`);
          return new Promise((i, s) => {
            this.nodePbkdf2(e, t, r, n, o, (e, t) => {
              (e && s(e), i(t));
            });
          });
        }
      }
      t.NodeCryptoPbkdf2 = NodeCryptoPbkdf2;
      class WebCryptoPbkdf2 {
        constructor(e) {
          this.subtleCrypto = e;
        }
        async derive(e, t, r, o, i) {
          let s;
          if ("sha256" === i) s = "SHA-256";
          else {
            if ("sha512" !== i)
              throw new Error(`Unsupported Pbkdf2 digest algorithm "${i}"`);
            s = "SHA-512";
          }
          const a = (0, n.utf8ToBytes)(e);
          try {
            const e = await this.subtleCrypto.importKey(
                "raw",
                a,
                "PBKDF2",
                !1,
                ["deriveBits"],
              ),
              n = await this.subtleCrypto.deriveBits(
                { name: "PBKDF2", salt: t, iterations: r, hash: { name: s } },
                e,
                8 * o,
              );
            return new Uint8Array(n);
          } catch (c) {
            const n = new WebCryptoPartialPbkdf2(this.subtleCrypto);
            return n.derive(e, t, r, o, i);
          }
        }
      }
      t.WebCryptoPbkdf2 = WebCryptoPbkdf2;
      class WebCryptoPartialPbkdf2 {
        constructor(e) {
          this.subtleCrypto = e;
        }
        async derive(e, t, r, o, i) {
          if ("sha512" !== i && "sha256" !== i)
            throw new Error(`Unsupported digest "${i}" for Pbkdf2`);
          const s = (0, n.utf8ToBytes)(e),
            a = "sha512" === i ? "SHA-512" : "SHA-256",
            c = { name: "HMAC", hash: a },
            l = (e, t) =>
              this.subtleCrypto
                .importKey("raw", e, c, !0, ["sign"])
                .then((e) => this.subtleCrypto.sign(c, e, t))
                .then((e) => new Uint8Array(e)),
            u = new Uint8Array(o),
            h = t.length,
            d = new Uint8Array(h + 4);
          d.set(t);
          let f = 0;
          const p = "sha512" === i ? 64 : 32,
            y = Math.ceil(o / p);
          for (let g = 1; g <= y; g++) {
            (0, n.writeUInt32BE)(d, g, h);
            const e = await l(s, d);
            let t = e;
            for (let n = 1; n < r; n++) {
              t = await l(s, t);
              for (let r = 0; r < p; r++) e[r] ^= t[r];
            }
            (u.set(e.subarray(0, u.byteLength - f), f), (f += p));
          }
          return u;
        }
      }
      async function i() {
        const e = await (0, o.getCryptoLib)();
        return "subtleCrypto" === e.name
          ? new WebCryptoPbkdf2(e.lib)
          : new NodeCryptoPbkdf2(e.lib.pbkdf2);
      }
      t.WebCryptoPartialPbkdf2 = WebCryptoPartialPbkdf2;
    },
    11479: function (e, t, r) {
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
      var n = r(2778),
        o = r(6939);
      const i = (t.HIRO_MAINNET_DEFAULT = "https://api.mainnet.hiro.so"),
        s = (t.HIRO_TESTNET_DEFAULT = "https://api.testnet.hiro.so"),
        a = (t.HIRO_MOCKNET_DEFAULT = "http://localhost:3999"),
        c = (t.StacksNetworks = ["mainnet", "testnet", "devnet", "mocknet"]);
      class StacksNetwork {
        constructor(e) {
          var t;
          ((this.version = n.TransactionVersion.Mainnet),
            (this.chainId = n.ChainID.Mainnet),
            (this.bnsLookupUrl = "https://api.mainnet.hiro.so"),
            (this.broadcastEndpoint = "/v2/transactions"),
            (this.transferFeeEstimateEndpoint = "/v2/fees/transfer"),
            (this.transactionFeeEstimateEndpoint = "/v2/fees/transaction"),
            (this.accountEndpoint = "/v2/accounts"),
            (this.contractAbiEndpoint = "/v2/contracts/interface"),
            (this.readOnlyFunctionCallEndpoint = "/v2/contracts/call-read"),
            (this.isMainnet = () =>
              this.version === n.TransactionVersion.Mainnet),
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
            (this.getReadOnlyFunctionCallApiUrl = (e, t, r) =>
              `${this.coreApiUrl}${this.readOnlyFunctionCallEndpoint}/${e}/${t}/${encodeURIComponent(r)}`),
            (this.getInfoUrl = () => this.coreApiUrl + "/v2/info"),
            (this.getBlockTimeInfoUrl = () =>
              this.coreApiUrl + "/extended/v1/info/network_block_times"),
            (this.getPoxInfoUrl = () => this.coreApiUrl + "/v2/pox"),
            (this.getRewardsUrl = (e, t) => {
              let r = `${this.coreApiUrl}/extended/v1/burnchain/rewards/${e}`;
              return (t && (r = `${r}?limit=${t.limit}&offset=${t.offset}`), r);
            }),
            (this.getRewardsTotalUrl = (e) =>
              `${this.coreApiUrl}/extended/v1/burnchain/rewards/${e}/total`),
            (this.getRewardHoldersUrl = (e, t) => {
              let r = `${this.coreApiUrl}/extended/v1/burnchain/reward_slot_holders/${e}`;
              return (t && (r = `${r}?limit=${t.limit}&offset=${t.offset}`), r);
            }),
            (this.getStackerInfoUrl = (e, t) =>
              `${this.coreApiUrl}${this.readOnlyFunctionCallEndpoint}\n    ${e}/${t}/get-stacker-info`),
            (this.getDataVarUrl = (e, t, r) =>
              `${this.coreApiUrl}/v2/data_var/${e}/${t}/${r}?proof=0`),
            (this.getMapEntryUrl = (e, t, r) =>
              `${this.coreApiUrl}/v2/map_entry/${e}/${t}/${r}?proof=0`),
            (this.coreApiUrl = e.url),
            (this.fetchFn =
              null !== (t = e.fetchFn) && void 0 !== t
                ? t
                : (0, o.createFetchFn)()));
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
              return new l();
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
                : i,
            fetchFn: null === e || void 0 === e ? void 0 : e.fetchFn,
          }),
            (this.version = n.TransactionVersion.Mainnet),
            (this.chainId = n.ChainID.Mainnet));
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
            (this.version = n.TransactionVersion.Testnet),
            (this.chainId = n.ChainID.Testnet));
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
            (this.version = n.TransactionVersion.Testnet),
            (this.chainId = n.ChainID.Testnet));
        }
      }
      t.StacksMocknet = StacksMocknet;
      const l = (t.StacksDevnet = StacksMocknet);
    },
    11512: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Storage = void 0),
        (t.getUserAppFileUrl = u));
      var n = r(6950),
        o = r(2778),
        i = r(3206),
        s = r(3167),
        a = r(11525),
        c = r(6957);
      const l = ".sig";
      class Storage {
        constructor(e) {
          this.userSession = e.userSession;
        }
        async getFile(e, t) {
          const r = {
              decrypt: !0,
              verify: !1,
              app: (0, o.getGlobalObject)("location", { returnEmptyObject: !0 })
                .origin,
            },
            n = Object.assign({}, r, t);
          if (n.verify && !n.decrypt)
            return this.getFileSignedUnencrypted(e, n);
          const i = await this.getFileContents(
            e,
            n.app,
            n.username,
            n.zoneFileLookupURL,
            !!n.decrypt,
          );
          if (null === i) return i;
          if (n.decrypt && !n.verify) {
            if ("string" !== typeof i)
              throw new Error(
                "Expected to get back a string for the cipherText",
              );
            if ("string" === typeof n.decrypt) {
              const e = { privateKey: n.decrypt };
              return this.userSession.decryptContent(i, e);
            }
            return this.userSession.decryptContent(i);
          }
          if (n.decrypt && n.verify) {
            if ("string" !== typeof i)
              throw new Error(
                "Expected to get back a string for the cipherText",
              );
            let t;
            return (
              "string" === typeof n.decrypt && (t = n.decrypt),
              this.handleSignedEncryptedContents(
                e,
                i,
                n.app,
                t,
                n.username,
                n.zoneFileLookupURL,
              )
            );
          }
          if (n.verify || n.decrypt) throw new Error("Should be unreachable.");
          return i;
        }
        async getUserAppFileUrl(e, t, r, o) {
          const i = await (0, n.lookupProfile)({
            username: t,
            zoneFileLookupURL: o,
          });
          let s;
          if (i.hasOwnProperty("apps") && i.apps.hasOwnProperty(r)) {
            const t = i.apps[r],
              n = t.replace(/\/?(\?|#|$)/, "/$1");
            s = `${n}${e}`;
          }
          return s;
        }
        async getGaiaAddress(e, t, r) {
          const n = h(this.userSession, {
            app: e,
            username: t,
            zoneFileLookupURL: r,
          });
          let o;
          if (t)
            o = await this.getUserAppFileUrl(
              "/",
              n.username,
              n.app,
              n.zoneFileLookupURL,
            );
          else {
            const e = await this.getOrSetLocalGaiaHubConnection();
            o = await (0, c.getFullReadUrl)("/", e);
          }
          const i = o.match(/([13][a-km-zA-HJ-NP-Z0-9]{26,35})/);
          if (!i) throw new Error("Failed to parse gaia address");
          return i[i.length - 1];
        }
        async getFileUrl(e, t) {
          const r = h(this.userSession, t);
          let n;
          if (r.username)
            n = await this.getUserAppFileUrl(
              e,
              r.username,
              r.app,
              r.zoneFileLookupURL,
            );
          else {
            const t = await this.getOrSetLocalGaiaHubConnection();
            n = await (0, c.getFullReadUrl)(e, t);
          }
          if (n) return n;
          throw new Error("Missing readURL");
        }
        async getFileContents(e, t, r, n, o, i) {
          void 0 === i && (i = (0, s.createFetchFn)());
          const a = { app: t, username: r, zoneFileLookupURL: n },
            l = await this.getFileUrl(e, a),
            u = await i(l);
          if (!u.ok)
            throw await (0, c.getBlockstackErrorFromResponse)(
              u,
              `getFile ${e} failed.`,
              null,
            );
          let h = u.headers.get("Content-Type");
          "string" === typeof h && (h = h.toLowerCase());
          const d = u.headers.get("ETag");
          if (d) {
            const t = this.userSession.store.getSessionData();
            ((t.etags[e] = d), this.userSession.store.setSessionData(t));
          }
          return o ||
            null === h ||
            h.startsWith("text") ||
            h.startsWith("application/json")
            ? u.text()
            : u.arrayBuffer();
        }
        async getFileSignedUnencrypted(e, t) {
          const r = `${e}${l}`;
          try {
            const [s, a, c] = await Promise.all([
              this.getFileContents(
                e,
                t.app,
                t.username,
                t.zoneFileLookupURL,
                !1,
              ),
              this.getFileContents(
                r,
                t.app,
                t.username,
                t.zoneFileLookupURL,
                !0,
              ),
              this.getGaiaAddress(t.app, t.username, t.zoneFileLookupURL),
            ]);
            if (!s) return s;
            if (!c)
              throw new o.SignatureVerificationError(
                "Failed to get gaia address for verification of: " + e,
              );
            if (!a || "string" !== typeof a)
              throw new o.SignatureVerificationError(
                `Failed to obtain signature for file: ${e} -- looked in ${e}${l}`,
              );
            let u, h;
            try {
              const e = JSON.parse(a);
              ((u = e.signature), (h = e.publicKey));
            } catch (n) {
              if (n instanceof SyntaxError)
                throw new Error(
                  `Failed to parse signature content JSON (path: ${e}${l}) The content may be corrupted.`,
                );
              throw n;
            }
            const d = (0, i.publicKeyToBtcAddress)(h);
            if (c !== d)
              throw new o.SignatureVerificationError(
                `Signer pubkey address (${d}) doesn't match gaia address (${c})`,
              );
            if (
              !(0, i.verifyECDSA)(
                "string" === typeof s
                  ? (0, o.utf8ToBytes)(s)
                  : new Uint8Array(s),
                h,
                u,
              )
            )
              throw new o.SignatureVerificationError(
                `Contents do not match ECDSA signature: path: ${e}, signature: ${e}${l}`,
              );
            return s;
          } catch (n) {
            if (n instanceof o.DoesNotExist && n.message.indexOf(r) >= 0)
              throw new o.SignatureVerificationError(
                `Failed to obtain signature for file: ${e} -- looked in ${e}${l}`,
              );
            throw n;
          }
        }
        async handleSignedEncryptedContents(e, t, r, n, s, a) {
          const c = n || this.userSession.loadUserData().appPrivateKey,
            l = (0, i.getPublicKeyFromPrivate)(c),
            u = s
              ? await this.getGaiaAddress(r, s, a)
              : (0, i.publicKeyToBtcAddress)(l);
          if (!u)
            throw new o.SignatureVerificationError(
              "Failed to get gaia address for verification of: " + e,
            );
          let h;
          try {
            h = JSON.parse(t);
          } catch (g) {
            throw g instanceof SyntaxError
              ? new Error(
                  "Failed to parse encrypted, signed content JSON. The content may not be encrypted. If using getFile, try passing { verify: false, decrypt: false }.",
                )
              : g;
          }
          const d = h.signature,
            f = h.publicKey,
            p = h.cipherText,
            y = (0, i.publicKeyToBtcAddress)(f);
          if (f && p && d) {
            if (y !== u)
              throw new o.SignatureVerificationError(
                `Signer pubkey address (${y}) doesn't match gaia address (${u})`,
              );
            if ((0, i.verifyECDSA)(p, f, d)) {
              if ("string" === typeof n) {
                const e = { privateKey: n };
                return this.userSession.decryptContent(p, e);
              }
              return this.userSession.decryptContent(p);
            }
            throw new o.SignatureVerificationError(
              "Contents do not match ECDSA signature in file: " + e,
            );
          }
          throw new o.SignatureVerificationError(
            "Failed to get signature verification data from file: " + e,
          );
        }
        async putFile(e, t, r) {
          const n = {
              encrypt: !0,
              sign: !1,
              cipherTextEncoding: "hex",
              dangerouslyIgnoreEtag: !1,
            },
            s = Object.assign({}, n, r),
            u = await this.getOrSetLocalGaiaHubConnection(),
            h = (0, o.megabytesToBytes)(u.max_file_upload_size_megabytes),
            f = h > 0,
            p = new a.FileContentLoader(t, s.contentType);
          let y,
            g = p.contentType;
          if (!s.encrypt && f && p.contentByteLength > h) {
            const e = `The max file upload size for this hub is ${h} bytes, the given content is ${p.contentByteLength} bytes`,
              t = new o.PayloadTooLargeError(e, null, h);
            throw (console.error(t), t);
          }
          if (s.encrypt && f) {
            const e = (0, i.eciesGetJsonStringLength)({
              contentLength: p.contentByteLength,
              wasString: p.wasString,
              sign: !!s.sign,
              cipherTextEncoding: s.cipherTextEncoding,
            });
            if (e > h) {
              const t = `The max file upload size for this hub is ${h} bytes, the given content is ${e} bytes after encryption`,
                r = new o.PayloadTooLargeError(t, null, h);
              throw (console.error(r), r);
            }
          }
          let b = !0;
          const w = this.userSession.store.getSessionData();
          var v, m;
          s.dangerouslyIgnoreEtag ||
            (null !== (v = w.etags) &&
              void 0 !== v &&
              v[e] &&
              ((b = !1),
              (y = null === (m = w.etags) || void 0 === m ? void 0 : m[e])));
          let S;
          if (!s.encrypt && s.sign) {
            const t = await p.load();
            let r;
            r =
              "string" === typeof s.sign
                ? s.sign
                : this.userSession.loadUserData().appPrivateKey;
            const n = (0, i.signECDSA)(r, t),
              o = JSON.stringify(n);
            S = async (r) => {
              const n = (
                await Promise.all([
                  (0, c.uploadToGaiaHub)(
                    e,
                    t,
                    r,
                    g,
                    b,
                    y,
                    s.dangerouslyIgnoreEtag,
                  ),
                  (0, c.uploadToGaiaHub)(`${e}${l}`, o, r, "application/json"),
                ])
              )[0];
              return (
                !s.dangerouslyIgnoreEtag &&
                  n.etag &&
                  ((w.etags[e] = n.etag),
                  this.userSession.store.setSessionData(w)),
                n.publicURL
              );
            };
          } else {
            let t;
            if (s.encrypt || s.sign) {
              let e;
              e =
                "string" === typeof s.encrypt
                  ? s.encrypt
                  : "string" === typeof s.sign
                    ? (0, i.getPublicKeyFromPrivate)(s.sign)
                    : (0, i.getPublicKeyFromPrivate)(
                        this.userSession.loadUserData().appPrivateKey,
                      );
              const r = await p.load();
              ((t = await this.userSession.encryptContent(r, {
                publicKey: e,
                wasString: p.wasString,
                cipherTextEncoding: s.cipherTextEncoding,
                sign: s.sign,
              })),
                (g = "application/json"));
            } else t = p.content;
            S = async (r) => {
              const n = await (0, c.uploadToGaiaHub)(
                e,
                t,
                r,
                g,
                b,
                y,
                s.dangerouslyIgnoreEtag,
              );
              return (
                n.etag &&
                  ((w.etags[e] = n.etag),
                  this.userSession.store.setSessionData(w)),
                n.publicURL
              );
            };
          }
          try {
            return await S(u);
          } catch (A) {
            if (d(A)) {
              (console.error(A),
                console.error(
                  "Possible recoverable error during Gaia upload, retrying...",
                ));
              const e = await this.setLocalGaiaHubConnection();
              return await S(e);
            }
            throw A;
          }
        }
        async deleteFile(e, t) {
          const r = await this.getOrSetLocalGaiaHubConnection(),
            n = Object.assign({}, t);
          if (n.wasSigned)
            try {
              (await (0, c.deleteFromGaiaHub)(e, r),
                await (0, c.deleteFromGaiaHub)(`${e}${l}`, r));
              const t = this.userSession.store.getSessionData();
              (delete t.etags[e], this.userSession.store.setSessionData(t));
            } catch (o) {
              const t = await this.setLocalGaiaHubConnection();
              (await (0, c.deleteFromGaiaHub)(e, t),
                await (0, c.deleteFromGaiaHub)(`${e}${l}`, r));
              const n = this.userSession.store.getSessionData();
              (delete n.etags[e], this.userSession.store.setSessionData(n));
            }
          else
            try {
              await (0, c.deleteFromGaiaHub)(e, r);
              const t = this.userSession.store.getSessionData();
              (delete t.etags[e], this.userSession.store.setSessionData(t));
            } catch (o) {
              const t = await this.setLocalGaiaHubConnection();
              await (0, c.deleteFromGaiaHub)(e, t);
              const r = this.userSession.store.getSessionData();
              (delete r.etags[e], this.userSession.store.setSessionData(r));
            }
        }
        getAppBucketUrl(e, t) {
          return (0, c.getBucketUrl)(e, t);
        }
        async listFilesLoop(e, t, r, n, o, i) {
          if ((void 0 === i && (i = (0, s.createFetchFn)()), r > 65536))
            throw new Error("Too many entries to list");
          let a;
          e = e || (await this.getOrSetLocalGaiaHubConnection());
          try {
            const r = JSON.stringify({ page: t }),
              n = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Content-Length": "" + r.length,
                  Authorization: "bearer " + e.token,
                },
                body: r,
              };
            if (
              ((a = await i(`${e.server}/list-files/${e.address}`, n)), !a.ok)
            )
              throw await (0, c.getBlockstackErrorFromResponse)(
                a,
                "ListFiles failed.",
                e,
              );
          } catch (p) {
            if (0 === r) {
              const e = await this.setLocalGaiaHubConnection();
              return this.listFilesLoop(e, t, r + 1, 0, o);
            }
            throw p;
          }
          const l = await a.text(),
            u = JSON.parse(l),
            h = u.entries,
            d = u.page;
          if (null === h || void 0 === h)
            throw new Error("Bad listFiles response: no entries");
          let f = 0;
          for (let s = 0; s < h.length; s++)
            if (null !== h[s]) {
              f++;
              const e = o(h[s]);
              if (!e) return n + s;
            }
          return d && h.length > 0
            ? this.listFilesLoop(e, d, r + 1, n + f, o)
            : n + f;
        }
        listFiles(e) {
          return this.listFilesLoop(null, null, 0, 0, e);
        }
        async getOrSetLocalGaiaHubConnection() {
          const e = this.userSession.store.getSessionData(),
            t = e.userData;
          if (!t) throw new o.InvalidStateError("Missing userData");
          const r = t.gaiaHubConfig;
          return r ? Promise.resolve(r) : this.setLocalGaiaHubConnection();
        }
        async setLocalGaiaHubConnection() {
          const e = this.userSession.loadUserData();
          if (!e) throw new o.InvalidStateError("Missing userData");
          e.hubUrl || (e.hubUrl = o.BLOCKSTACK_DEFAULT_GAIA_HUB_URL);
          const t = await (0, c.connectToGaiaHub)(
            e.hubUrl,
            e.appPrivateKey,
            e.gaiaAssociationToken,
          );
          e.gaiaHubConfig = t;
          const r = this.userSession.store.getSessionData();
          return (
            (r.userData.gaiaHubConfig = t),
            this.userSession.store.setSessionData(r),
            t
          );
        }
      }
      function u(e) {
        return new Storage({}).getUserAppFileUrl(
          e.path,
          e.username,
          e.appOrigin,
          e.zoneFileLookupURL,
        );
      }
      function h(e, t) {
        const r = Object.assign({}, t);
        if (r.username) {
          if (!r.app) {
            if (!e.appConfig)
              throw new o.InvalidStateError("Missing AppConfig");
            r.app = e.appConfig.appDomain;
          }
          if (!r.zoneFileLookupURL) {
            var i;
            if (!e.appConfig)
              throw new o.InvalidStateError("Missing AppConfig");
            if (!e.store)
              throw new o.InvalidStateError("Missing store UserSession");
            const t = e.store.getSessionData(),
              s =
                (null === (i = t.userData) || void 0 === i
                  ? void 0
                  : i.coreNode) || e.appConfig.coreNode;
            s && (r.zoneFileLookupURL = `${s}${n.NAME_LOOKUP_PATH}`);
          }
        }
        return r;
      }
      function d(e) {
        if (!e || !e.hubError || !e.hubError.statusCode) return !1;
        const t = e.hubError.statusCode;
        return 401 === t || 409 === t || (t >= 500 && t <= 599);
      }
      t.Storage = Storage;
    },
    11513: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UserSession = void 0));
      var n = r(6951),
        o = r(11514),
        i = r(3854),
        s = r(6954),
        a = y(r(6952)),
        c = r(3206),
        l = r(4887),
        u = r(2778),
        h = r(5739),
        d = r(4602),
        f = r(3167),
        p = r(11522);
      function y(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (y = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var o,
            i,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((o = t ? n : r)) {
            if (o.has(e)) return o.get(e);
            o.set(e, s);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((i =
                (o = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (i.get || i.set)
                ? o(s, r, i)
                : (s[r] = e[r]));
          return s;
        })(e, t);
      }
      class UserSession {
        constructor(e) {
          let t = !0;
          if (
            ("undefined" === typeof window &&
              "undefined" === typeof self &&
              (t = !1),
            e && e.appConfig)
          )
            this.appConfig = e.appConfig;
          else {
            if (!t)
              throw new u.MissingParameterError(
                "You need to specify options.appConfig",
              );
            this.appConfig = new n.AppConfig();
          }
          e && e.sessionStore
            ? (this.store = e.sessionStore)
            : (this.store = t
                ? e
                  ? new o.LocalStorageStore(e.sessionOptions)
                  : new o.LocalStorageStore()
                : e
                  ? new o.InstanceDataStore(e.sessionOptions)
                  : new o.InstanceDataStore());
        }
        makeAuthRequestToken(e, t, r, n, o, i, s) {
          (void 0 === i && (i = (0, u.nextHour)().getTime()),
            void 0 === s && (s = {}));
          const c = this.appConfig;
          if (!c) throw new u.InvalidStateError("Missing AppConfig");
          return (
            (e = e || this.generateAndStoreTransitKey()),
            (t = t || c.redirectURI()),
            (r = r || c.manifestURI()),
            (n = n || c.scopes),
            (o = o || c.appDomain),
            a.makeAuthRequestToken(e, t, r, n, o, i, s)
          );
        }
        generateAndStoreTransitKey() {
          const e = this.store.getSessionData(),
            t = a.generateTransitKey();
          return ((e.transitKey = t), this.store.setSessionData(e), t);
        }
        getAuthResponseToken() {
          var e, t;
          const r =
              null ===
                (e = (0, u.getGlobalObject)("location", {
                  throwIfUnavailable: !0,
                  usageDesc: "getAuthResponseToken",
                })) || void 0 === e
                ? void 0
                : e.search,
            n = new URLSearchParams(r);
          return null !== (t = n.get("authResponse")) && void 0 !== t ? t : "";
        }
        isSignInPending() {
          try {
            const e = (0, p.protocolEchoReplyDetection)();
            if (e)
              return (
                u.Logger.info(
                  "protocolEchoReply detected from isSignInPending call, the page is about to redirect.",
                ),
                !0
              );
          } catch (e) {
            u.Logger.error(
              "Error checking for protocol echo reply isSignInPending: " + e,
            );
          }
          return !!this.getAuthResponseToken();
        }
        isUserSignedIn() {
          return !!this.store.getSessionData().userData;
        }
        async handlePendingSignIn(e, t) {
          (void 0 === e && (e = this.getAuthResponseToken()),
            void 0 === t && (t = (0, f.createFetchFn)()));
          const r = this.store.getSessionData();
          if (r.userData)
            throw new u.LoginFailedError("Existing user session found.");
          const n = this.store.getSessionData().transitKey;
          let o = this.appConfig && this.appConfig.coreNode;
          if (!o) {
            const e = new f.StacksMainnet();
            o = e.bnsLookupUrl;
          }
          const p = (0, i.decodeToken)(e).payload;
          if ("string" === typeof p)
            throw new Error("Unexpected token payload type of string");
          const y = await (0, s.verifyAuthResponse)(e);
          if (!y)
            throw new u.LoginFailedError("Invalid authentication response.");
          let g = p.private_key,
            b = p.core_token;
          if ((0, u.isLaterVersion)(p.version, "1.1.0")) {
            if (void 0 === n || null == n)
              throw new u.LoginFailedError(
                "Authenticating with protocol > 1.1.0 requires transit key, and none found.",
              );
            if (void 0 !== p.private_key && null !== p.private_key)
              try {
                g = await a.decryptPrivateKey(n, p.private_key);
              } catch (A) {
                if (
                  (u.Logger.warn(
                    "Failed decryption of appPrivateKey, will try to use as given",
                  ),
                  !(0, c.isValidPrivateKey)(p.private_key))
                )
                  throw new u.LoginFailedError(
                    "Failed decrypting appPrivateKey. Usually means that the transit key has changed during login.",
                  );
              }
            if (void 0 !== b && null !== b)
              try {
                b = await a.decryptPrivateKey(n, b);
              } catch (A) {
                u.Logger.info(
                  "Failed decryption of coreSessionToken, will try to use as given",
                );
              }
          }
          let w,
            v = u.BLOCKSTACK_DEFAULT_GAIA_HUB_URL;
          ((0, u.isLaterVersion)(p.version, "1.2.0") &&
            null !== p.hubUrl &&
            void 0 !== p.hubUrl &&
            (v = p.hubUrl),
            (0, u.isLaterVersion)(p.version, "1.3.0") &&
              null !== p.associationToken &&
              void 0 !== p.associationToken &&
              (w = p.associationToken));
          const m = {
              profile: p.profile,
              email: p.email,
              decentralizedID: p.iss,
              identityAddress: (0, l.getAddressFromDID)(p.iss),
              appPrivateKey: g,
              coreSessionToken: b,
              authResponseToken: e,
              hubUrl: v,
              appPrivateKeyFromWalletSalt: p.appPrivateKeyFromWalletSalt,
              coreNode: p.blockstackAPIUrl,
              gaiaAssociationToken: w,
            },
            S = p.profile_url;
          if (!m.profile && S) {
            const e = await t(S);
            if (e.ok) {
              const t = await e.text(),
                r = JSON.parse(t);
              m.profile = (0, h.extractProfile)(r[0].token);
            } else m.profile = Object.assign({}, d.DEFAULT_PROFILE);
          } else m.profile = p.profile;
          return ((r.userData = m), this.store.setSessionData(r), m);
        }
        loadUserData() {
          const e = this.store.getSessionData().userData;
          if (!e)
            throw new u.InvalidStateError(
              "No user data found. Did the user sign in?",
            );
          return e;
        }
        encryptContent(e, t) {
          const r = Object.assign({}, t);
          return (
            r.privateKey || (r.privateKey = this.loadUserData().appPrivateKey),
            (0, c.encryptContent)(e, r)
          );
        }
        decryptContent(e, t) {
          const r = Object.assign({}, t);
          return (
            r.privateKey || (r.privateKey = this.loadUserData().appPrivateKey),
            (0, c.decryptContent)(e, r)
          );
        }
        signUserOut(e) {
          (this.store.deleteSessionData(),
            e &&
              "undefined" !== typeof location &&
              location.href &&
              (location.href = e));
        }
      }
      ((t.UserSession = UserSession),
        (UserSession.prototype.makeAuthRequest =
          UserSession.prototype.makeAuthRequestToken));
    },
    11514: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SessionDataStore =
          t.LocalStorageStore =
          t.InstanceDataStore =
            void 0));
      var n = r(11515),
        o = r(4602),
        i = r(2778);
      class SessionDataStore {
        constructor(e) {
          if (e) {
            const t = new n.SessionData(e);
            this.setSessionData(t);
          }
        }
        getSessionData() {
          throw new Error("Abstract class");
        }
        setSessionData(e) {
          throw new Error("Abstract class");
        }
        deleteSessionData() {
          throw new Error("Abstract class");
        }
      }
      t.SessionDataStore = SessionDataStore;
      class InstanceDataStore extends SessionDataStore {
        constructor(e) {
          (super(e),
            this.sessionData || this.setSessionData(new n.SessionData({})));
        }
        getSessionData() {
          if (!this.sessionData)
            throw new i.NoSessionDataError("No session data was found.");
          return this.sessionData;
        }
        setSessionData(e) {
          return ((this.sessionData = e), !0);
        }
        deleteSessionData() {
          return (this.setSessionData(new n.SessionData({})), !0);
        }
      }
      t.InstanceDataStore = InstanceDataStore;
      class LocalStorageStore extends SessionDataStore {
        constructor(e) {
          (super(e),
            e &&
            e.storeOptions &&
            e.storeOptions.localStorageKey &&
            "string" === typeof e.storeOptions.localStorageKey
              ? (this.key = e.storeOptions.localStorageKey)
              : (this.key = o.LOCALSTORAGE_SESSION_KEY));
          const t = localStorage.getItem(this.key);
          if (!t) {
            const e = new n.SessionData({});
            this.setSessionData(e);
          }
        }
        getSessionData() {
          const e = localStorage.getItem(this.key);
          if (!e)
            throw new i.NoSessionDataError(
              "No session data was found in localStorage",
            );
          const t = JSON.parse(e);
          return n.SessionData.fromJSON(t);
        }
        setSessionData(e) {
          return (localStorage.setItem(this.key, e.toString()), !0);
        }
        deleteSessionData() {
          return (
            localStorage.removeItem(this.key),
            this.setSessionData(new n.SessionData({})),
            !0
          );
        }
      }
      t.LocalStorageStore = LocalStorageStore;
    },
    11515: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SessionData = void 0));
      var n = r(2778);
      const o = "1.0.0";
      class SessionData {
        constructor(e) {
          ((this.version = o),
            (this.userData = e.userData),
            (this.transitKey = e.transitKey),
            (this.etags = e.etags ? e.etags : {}));
        }
        static fromJSON(e) {
          if (e.version !== o)
            throw new n.InvalidStateError(
              `JSON data version ${e.version} not supported by SessionData`,
            );
          const t = {
            coreNode: e.coreNode,
            userData: e.userData,
            transitKey: e.transitKey,
            etags: e.etags,
          };
          return new SessionData(t);
        }
        toString() {
          return JSON.stringify(this);
        }
      }
      t.SessionData = SessionData;
    },
    11516: function (e, t, r) {
      "use strict";
      function n(e, t) {
        let r;
        return (
          t.proof && t.proof.url && (r = t.proof.url),
          {
            "@type": "Account",
            service: e,
            identifier: t.username,
            proofType: "http",
            proofUrl: r,
          }
        );
      }
      function o(e) {
        const t = { "@type": "Person" };
        if (e) {
          (e.name && e.name.formatted && (t.name = e.name.formatted),
            e.bio && (t.description = e.bio),
            e.location &&
              e.location.formatted &&
              (t.address = {
                "@type": "PostalAddress",
                addressLocality: e.location.formatted,
              }));
          const r = [];
          (e.avatar &&
            e.avatar.url &&
            r.push({
              "@type": "ImageObject",
              name: "avatar",
              contentUrl: e.avatar.url,
            }),
            e.cover &&
              e.cover.url &&
              r.push({
                "@type": "ImageObject",
                name: "cover",
                contentUrl: e.cover.url,
              }),
            r.length && (t.image = r),
            e.website &&
              (t.website = [{ "@type": "WebSite", url: e.website }]));
          const o = [];
          (e.bitcoin &&
            e.bitcoin.address &&
            o.push({
              "@type": "Account",
              role: "payment",
              service: "bitcoin",
              identifier: e.bitcoin.address,
            }),
            e.twitter && e.twitter.username && o.push(n("twitter", e.twitter)),
            e.facebook &&
              e.facebook.username &&
              o.push(n("facebook", e.facebook)),
            e.github && e.github.username && o.push(n("github", e.github)),
            e.auth &&
              e.auth.length > 0 &&
              e.auth[0] &&
              e.auth[0].publicKeychain &&
              o.push({
                "@type": "Account",
                role: "key",
                service: "bip32",
                identifier: e.auth[0].publicKeychain,
              }),
            e.pgp &&
              e.pgp.url &&
              o.push({
                "@type": "Account",
                role: "key",
                service: "pgp",
                identifier: e.pgp.fingerprint,
                contentUrl: e.pgp.url,
              }),
            (t.account = o));
        }
        return t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getPersonFromLegacyFormat = o));
    },
    11517: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.resolveZoneFileToPerson = a));
      var n = r(3167),
        o = r(5738),
        i = r(6955),
        s = r(5740);
      function a(e, t, r, a) {
        void 0 === a && (a = (0, n.createFetchFn)());
        let c = null;
        try {
          if (((c = (0, o.parseZoneFile)(e)), !c.hasOwnProperty("$origin")))
            throw ((c = null), new Error("zone file is missing an origin"));
        } catch (u) {
          console.error(u);
        }
        let l = null;
        if (c && Object.keys(c).length > 0)
          ((l = (0, i.getTokenFileUrl)(c)),
            l
              ? a(l)
                  .then((e) => e.text())
                  .then((e) => JSON.parse(e))
                  .then((e) => {
                    const n = e,
                      o = n[0].token,
                      i = (0, s.extractProfile)(o, t);
                    r(i);
                  })
                  .catch((e) => {
                    console.warn(e);
                  })
              : (console.warn("Token file url not found"), r({})));
        else {
          let t = null;
          try {
            t = JSON.parse(e);
            const r = i.Person.fromLegacyFormat(t);
            t = r.profile();
          } catch (h) {
            console.warn(h);
          }
          r(t);
        }
      }
    },
    11518: function (e, t, r) {
      "use strict";
      function n(e) {
        if (!e) return null;
        let t = null;
        return (
          e.name
            ? (t = e.name)
            : (e.givenName || e.familyName) &&
              ((t = ""),
              e.givenName && (t = e.givenName),
              e.familyName && (t += " " + e.familyName)),
          t
        );
      }
      function o(e) {
        if (!e) return null;
        let t = null;
        if (e.givenName) t = e.givenName;
        else if (e.name) {
          const r = e.name.split(" ");
          t = r.slice(0, -1).join(" ");
        }
        return t;
      }
      function i(e) {
        if (!e) return null;
        let t = null;
        if (e.familyName) t = e.familyName;
        else if (e.name) {
          const r = e.name.split(" ");
          t = r.pop();
        }
        return t;
      }
      function s(e) {
        if (!e) return null;
        let t = null;
        return (e.description && (t = e.description), t);
      }
      function a(e) {
        if (!e) return null;
        let t = null;
        return (
          e.image &&
            e.image.map((e) =>
              "avatar" === e.name ? ((t = e.contentUrl), t) : null,
            ),
          t
        );
      }
      function c(e, t) {
        if (!e) return null;
        const r = [];
        return (
          e.hasOwnProperty("account") &&
            t &&
            e.account.map((e) => {
              let n = !1,
                o = null;
              return (
                t.map(
                  (t) => (
                    t.hasOwnProperty("proof_url") && (t.proofUrl = t.proof_url),
                    !(
                      !t.valid ||
                      t.service !== e.service ||
                      t.identifier !== e.identifier ||
                      !t.proofUrl
                    ) && ((n = !0), (o = t.proofUrl), !0)
                  ),
                ),
                n ? ((e.proofUrl = o), r.push(e), e) : null
              );
            }),
          r
        );
      }
      function l(e) {
        if (!e) return null;
        const t = [];
        return e.hasOwnProperty("worksFor") ? e.worksFor : t;
      }
      function u(e) {
        if (!e) return null;
        let t = [];
        return (e.hasOwnProperty("knows") && (t = e.knows), t);
      }
      function h(e) {
        if (!e) return null;
        let t = null;
        if (e.hasOwnProperty("address")) {
          const r = [];
          (e.address.hasOwnProperty("streetAddress") &&
            r.push(e.address.streetAddress),
            e.address.hasOwnProperty("addressLocality") &&
              r.push(e.address.addressLocality),
            e.address.hasOwnProperty("postalCode") &&
              r.push(e.address.postalCode),
            e.address.hasOwnProperty("addressCountry") &&
              r.push(e.address.addressCountry),
            r.length && (t = r.join(", ")));
        }
        return t;
      }
      function d(e) {
        if (!e) return null;
        const t = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        let r = null;
        if (e.hasOwnProperty("birthDate")) {
          const n = new Date(e.birthDate);
          r = `${t[n.getMonth()]} ${n.getDate()}, ${n.getFullYear()}`;
        }
        return r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getAddress = h),
        (t.getAvatarUrl = a),
        (t.getBirthDate = d),
        (t.getConnections = u),
        (t.getDescription = s),
        (t.getFamilyName = i),
        (t.getGivenName = o),
        (t.getName = n),
        (t.getOrganizations = l),
        (t.getVerifiedAccounts = c));
    },
    11522: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.protocolEchoReplyDetection = a));
      const n = "_blockstackDidCheckEchoReply",
        o = "echoReply",
        i = "authContinuation";
      function s(e) {
        if (!e) return {};
        const t = /^[?#]/.test(e) ? e.slice(1) : e;
        return t.split("&").reduce((e, t) => {
          const [r, n] = t.split("=");
          return (
            (e[r] = n ? decodeURIComponent(n.replace(/\+/g, " ")) : ""),
            e
          );
        }, {});
      }
      function a() {
        let e;
        if ("undefined" !== typeof self) e = self;
        else {
          if ("undefined" === typeof window) return !1;
          e = window;
        }
        if (!e.location || !e.localStorage) return !1;
        const t = e[n];
        if ("boolean" === typeof t) return t;
        const r = s(e.location.search),
          a = r[o];
        if (a) {
          e[n] = !0;
          const t = "echo-reply-" + a;
          return (
            e.localStorage.setItem(t, "success"),
            e.setTimeout(() => {
              const t = r[i];
              e.location.href = t;
            }, 10),
            !0
          );
        }
        return !1;
      }
    },
    11523: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.lookupProfile = i));
      var n = r(5739),
        o = r(3167);
      function i(e) {
        if (!e.username)
          return Promise.reject(new Error("No username provided"));
        const t = { network: new o.StacksMainnet() },
          r = Object.assign(t, e),
          i = o.StacksNetwork.fromNameOrNetwork(r.network);
        let s;
        if (r.zoneFileLookupURL) {
          const e = `${r.zoneFileLookupURL.replace(/\/$/, "")}/${r.username}`;
          s = i.fetchFn(e).then((e) => e.json());
        } else s = i.getNameInfo(r.username);
        return s.then((e) => {
          if (e.hasOwnProperty("zonefile") && e.hasOwnProperty("address"))
            return (0, n.resolveZoneFileToProfile)(
              e.zonefile,
              e.address,
              i.fetchFn,
            );
          throw new Error(
            "Invalid zonefile lookup response: did not contain `address` or `zonefile` field",
          );
        });
      }
    },
    11524: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    11525: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FileContentLoader = void 0));
      var n = r(2778);
      class FileContentLoader {
        constructor(e, t) {
          ((this.wasString = "string" === typeof e),
            (this.content = FileContentLoader.normalizeContentDataType(e, t)),
            (this.contentType = t || this.detectContentType()),
            (this.contentByteLength = this.detectContentLength()));
        }
        static normalizeContentDataType(e, t) {
          try {
            if ("string" === typeof e) {
              const r = (t || "").toLowerCase().replace("-", "");
              if (
                r.includes("charset") &&
                !r.includes("charset=utf8") &&
                !r.includes("charset=ascii")
              )
                throw new Error(
                  "Unable to determine byte length with charset: " + t,
                );
              if ("undefined" !== typeof TextEncoder) {
                const t = new TextEncoder().encode(e);
                return new Uint8Array(t.buffer);
              }
              return (0, n.utf8ToBytes)(e);
            }
            if (e instanceof Uint8Array) return e;
            if (ArrayBuffer.isView(e))
              return new Uint8Array(
                e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength),
              );
            if ("undefined" !== typeof Blob && e instanceof Blob) return e;
            if ("undefined" !== typeof ArrayBuffer && e instanceof ArrayBuffer)
              return new Uint8Array(e);
            if (Array.isArray(e)) {
              if (
                e.length > 0 &&
                (!Number.isInteger(e[0]) || e[0] < 0 || e[0] > 255)
              )
                throw new Error(
                  `Unexpected array values provided as file data: value "${e[0]}" at index 0 is not an octet number. ${this.supportedTypesMsg}`,
                );
              return new Uint8Array(e);
            }
            {
              const t = Object.prototype.toString.call(e);
              throw new Error(
                `Unexpected type provided as file data: ${t}. ${this.supportedTypesMsg}`,
              );
            }
          } catch (r) {
            throw (console.error(r), new Error("Error processing data: " + r));
          }
        }
        detectContentType() {
          return this.wasString
            ? "text/plain; charset=utf-8"
            : "undefined" !== typeof Blob &&
                this.content instanceof Blob &&
                this.content.type
              ? this.content.type
              : "application/octet-stream";
        }
        detectContentLength() {
          if (
            ArrayBuffer.isView(this.content) ||
            this.content instanceof Uint8Array
          )
            return this.content.byteLength;
          if ("undefined" !== typeof Blob && this.content instanceof Blob)
            return this.content.size;
          const e = Object.prototype.toString.call(this.content),
            t = new Error(
              `Unexpected type "${e}" while detecting content length`,
            );
          throw (console.error(t), t);
        }
        async loadContent() {
          try {
            if (this.content instanceof Uint8Array) return this.content;
            if (ArrayBuffer.isView(this.content))
              return new Uint8Array(
                this.content.buffer,
                this.content.byteOffset,
                this.content.byteLength,
              );
            if ("undefined" !== typeof Blob && this.content instanceof Blob) {
              const e = new FileReader(),
                t = new Promise((t, r) => {
                  ((e.onerror = (e) => {
                    r(e);
                  }),
                    (e.onload = () => {
                      const r = e.result;
                      t(new Uint8Array(r));
                    }),
                    e.readAsArrayBuffer(this.content));
                });
              return await t;
            }
            {
              const e = Object.prototype.toString.call(this.content);
              throw new Error("Unexpected type " + e);
            }
          } catch (e) {
            console.error(e);
            const t = new Error("Error loading content: " + e);
            throw (console.error(t), t);
          }
        }
        load() {
          return (
            void 0 === this.loadedData &&
              (this.loadedData = this.loadContent()),
            this.loadedData
          );
        }
      }
      ((t.FileContentLoader = FileContentLoader),
        (FileContentLoader.supportedTypesMsg =
          "Supported types are: `string` (to be UTF8 encoded), `Blob`, `File`, `ArrayBuffer`, `UInt8Array` or any other typed array buffer. "));
    },
    3167: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(6939);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === n[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            }));
      });
      var o = r(11479);
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
    },
    3206: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = { encryptMnemonic: !0, decryptMnemonic: !0 };
      (Object.defineProperty(t, "decryptMnemonic", {
        enumerable: !0,
        get: function () {
          return h.decryptMnemonic;
        },
      }),
        Object.defineProperty(t, "encryptMnemonic", {
          enumerable: !0,
          get: function () {
            return h.encryptMnemonic;
          },
        }));
      var o = r(5720);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === o[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
      var i = r(5724);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var s = r(6930);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var a = r(4878);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var c = r(11463);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var l = r(6929);
      Object.keys(l).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === l[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            }));
      });
      var u = r(6928);
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === u[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var h = r(11464);
    },
    4593: function (e, t, r) {
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
      const n = r(11455),
        o = (e) => new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      t.u8 = o;
      const i = (e) =>
        new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
      t.u32 = i;
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
      function l(e) {
        if (!(e instanceof Uint8Array)) throw new Error("Uint8Array expected");
        let t = "";
        for (let r = 0; r < e.length; r++) t += c[e[r]];
        return t;
      }
      function u(e) {
        if ("string" !== typeof e)
          throw new TypeError("hexToBytes: expected string, got " + typeof e);
        if (e.length % 2)
          throw new Error("hexToBytes: received invalid unpadded hex");
        const t = new Uint8Array(e.length / 2);
        for (let r = 0; r < t.length; r++) {
          const n = 2 * r,
            o = e.slice(n, n + 2),
            i = Number.parseInt(o, 16);
          if (Number.isNaN(i) || i < 0)
            throw new Error("Invalid byte sequence");
          t[r] = i;
        }
        return t;
      }
      ((t.bytesToHex = l), (t.hexToBytes = u));
      const h = async () => {};
      async function d(e, r, n) {
        let o = Date.now();
        for (let i = 0; i < e; i++) {
          n(i);
          const e = Date.now() - o;
          (e >= 0 && e < r) || (await (0, t.nextTick)(), (o += e));
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
          o = new Uint8Array(n);
        for (let i = 0, s = 0; i < t.length; i++) {
          const e = t[i];
          (o.set(e, s), (s += e.length));
        }
        return o;
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
      function v(e) {
        const t = (t, r) => e(r).update(p(t)).digest(),
          r = e({});
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = (t) => e(t)),
          t
        );
      }
      function m(e) {
        if ((void 0 === e && (e = 32), n.crypto.web))
          return n.crypto.web.getRandomValues(new Uint8Array(e));
        if (n.crypto.node)
          return new Uint8Array(n.crypto.node.randomBytes(e).buffer);
        throw new Error("The environment doesn't have randomBytes function");
      }
      ((t.checkOpts = b),
        (t.wrapConstructor = w),
        (t.wrapConstructorWithOpts = v),
        (t.randomBytes = m));
    },
    4602: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NAME_LOOKUP_PATH =
          t.LOCALSTORAGE_SESSION_KEY =
          t.DEFAULT_SCOPE =
          t.DEFAULT_PROFILE =
          t.DEFAULT_CORE_NODE =
          t.DEFAULT_BLOCKSTACK_HOST =
          t.BLOCKSTACK_STORAGE_LABEL =
          t.BLOCKSTACK_HANDLER =
          t.BLOCKSTACK_APP_PRIVATE_KEY_LABEL =
            void 0));
      ((t.BLOCKSTACK_HANDLER = "blockstack"),
        (t.BLOCKSTACK_STORAGE_LABEL = "blockstack"),
        (t.DEFAULT_BLOCKSTACK_HOST = "https://browser.blockstack.org/auth"),
        (t.DEFAULT_PROFILE = {
          "@type": "Person",
          "@context": "http://schema.org",
        }),
        (t.DEFAULT_SCOPE = ["store_write"]),
        (t.BLOCKSTACK_APP_PRIVATE_KEY_LABEL = "blockstack-transit-private-key"),
        (t.DEFAULT_CORE_NODE = "https://api.hiro.so"),
        (t.NAME_LOOKUP_PATH = "/v1/names"),
        (t.LOCALSTORAGE_SESSION_KEY = "blockstack-session"));
    },
    4877: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha224 = t.sha256 = void 0));
      const n = r(5721),
        o = r(4593),
        i = (e, t, r) => (e & t) ^ (~e & r),
        s = (e, t, r) => (e & t) ^ (e & r) ^ (t & r),
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
        l = new Uint32Array(64);
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
          const { A: e, B: t, C: r, D: n, E: o, F: i, G: s, H: a } = this;
          return [e, t, r, n, o, i, s, a];
        }
        set(e, t, r, n, o, i, s, a) {
          ((this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | o),
            (this.F = 0 | i),
            (this.G = 0 | s),
            (this.H = 0 | a));
        }
        process(e, t) {
          for (let o = 0; o < 16; o++, t += 4) l[o] = e.getUint32(t, !1);
          for (let i = 16; i < 64; i++) {
            const e = l[i - 15],
              t = l[i - 2],
              r = (0, o.rotr)(e, 7) ^ (0, o.rotr)(e, 18) ^ (e >>> 3),
              n = (0, o.rotr)(t, 17) ^ (0, o.rotr)(t, 19) ^ (t >>> 10);
            l[i] = (n + l[i - 7] + r + l[i - 16]) | 0;
          }
          let { A: r, B: n, C: c, D: u, E: h, F: d, G: f, H: p } = this;
          for (let y = 0; y < 64; y++) {
            const e =
                (0, o.rotr)(h, 6) ^ (0, o.rotr)(h, 11) ^ (0, o.rotr)(h, 25),
              t = (p + e + i(h, d, f) + a[y] + l[y]) | 0,
              g = (0, o.rotr)(r, 2) ^ (0, o.rotr)(r, 13) ^ (0, o.rotr)(r, 22),
              b = (g + s(r, n, c)) | 0;
            ((p = f),
              (f = d),
              (d = h),
              (h = (u + t) | 0),
              (u = c),
              (c = n),
              (n = r),
              (r = (t + b) | 0));
          }
          ((r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (c = (c + this.C) | 0),
            (u = (u + this.D) | 0),
            (h = (h + this.E) | 0),
            (d = (d + this.F) | 0),
            (f = (f + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(r, n, c, u, h, d, f, p));
        }
        roundClean() {
          l.fill(0);
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
      ((t.sha256 = (0, o.wrapConstructor)(() => new SHA256())),
        (t.sha224 = (0, o.wrapConstructor)(() => new SHA224())));
    },
    4878: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WebCryptoSha2Hash = t.NodeCryptoSha2Hash = void 0),
        (t.createSha2Hash = s),
        (t.hashSha256Sync = a),
        (t.hashSha512Sync = c));
      var n = r(4877),
        o = r(11460),
        i = r(5722);
      class NodeCryptoSha2Hash {
        constructor(e) {
          this.createHash = e;
        }
        async digest(e, t) {
          void 0 === t && (t = "sha256");
          try {
            const r = this.createHash(t).update(e).digest();
            return Promise.resolve(r);
          } catch (r) {
            return (
              console.log(r),
              console.log(
                `Error performing ${t} digest with Node.js 'crypto.createHash', falling back to JS implementation.`,
              ),
              Promise.resolve("sha256" === t ? a(e) : c(e))
            );
          }
        }
      }
      t.NodeCryptoSha2Hash = NodeCryptoSha2Hash;
      class WebCryptoSha2Hash {
        constructor(e) {
          this.subtleCrypto = e;
        }
        async digest(e, t) {
          let r;
          if ((void 0 === t && (t = "sha256"), "sha256" === t)) r = "SHA-256";
          else {
            if ("sha512" !== t)
              throw new Error("Unsupported hash algorithm " + t);
            r = "SHA-512";
          }
          try {
            const t = await this.subtleCrypto.digest(r, e);
            return new Uint8Array(t);
          } catch (n) {
            return (
              console.log(n),
              console.log(
                `Error performing ${t} digest with WebCrypto, falling back to JS implementation.`,
              ),
              Promise.resolve("sha256" === t ? a(e) : c(e))
            );
          }
        }
      }
      async function s() {
        const e = await (0, i.getCryptoLib)();
        return "subtleCrypto" === e.name
          ? new WebCryptoSha2Hash(e.lib)
          : new NodeCryptoSha2Hash(e.lib.createHash);
      }
      function a(e) {
        return (0, n.sha256)(e);
      }
      function c(e) {
        return (0, o.sha512)(e);
      }
      t.WebCryptoSha2Hash = WebCryptoSha2Hash;
    },
    4887: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getAddressFromDID = a),
        (t.getDIDType = s),
        (t.makeDIDFromAddress = o),
        (t.makeDIDFromPublicKey = i));
      var n = r(2778);
      function o(e) {
        return "did:btc-addr:" + e;
      }
      function i(e) {
        return "did:ecdsa-pub:" + e;
      }
      function s(e) {
        const t = e.split(":");
        if (3 !== t.length)
          throw new n.InvalidDIDError("Decentralized IDs must have 3 parts");
        if ("did" !== t[0].toLowerCase())
          throw new n.InvalidDIDError(
            'Decentralized IDs must start with "did"',
          );
        return t[1].toLowerCase();
      }
      function a(e) {
        if (e) {
          const t = s(e);
          return "btc-addr" === t ? e.split(":")[2] : void 0;
        }
      }
    },
    5720: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InvalidPublicKeyReason = void 0),
        (t.aes256CbcEncrypt = p),
        (t.decryptECIES = T),
        (t.eciesGetJsonStringLength = k),
        (t.encryptECIES = O),
        (t.getBytesFromBN = A),
        (t.getCipherObjectWrapper = E),
        (t.getHexFromBN = S),
        (t.getSignedCipherObjectWrapper = P),
        (t.hmacSha256 = g),
        (t.signECDSA = _),
        (t.verifyECDSA = U),
        (t.verifyMessageSignature = C),
        (t.verifyMessageSignatureRsv = L));
      var n,
        o = r(6925),
        i = r(4877),
        s = r(3282),
        a = r(2778),
        c = r(812),
        l = r(6927),
        u = r(5724),
        h = r(6928),
        d = r(4878),
        f = r(6929);
      async function p(e, t, r) {
        const n = await (0, l.createCipher)();
        return await n.encrypt("aes-256-cbc", t, e, r);
      }
      async function y(e, t, r) {
        const n = await (0, l.createCipher)();
        return await n.decrypt("aes-256-cbc", t, e, r);
      }
      function g(e, t) {
        return (0, o.hmac)(i.sha256, e, t);
      }
      function b(e, t) {
        if (e.length !== t.length) return !1;
        let r = 0;
        for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
        return 0 === r;
      }
      function w(e) {
        const t = (0, d.hashSha512Sync)(e);
        return { encryptionKey: t.slice(0, 32), hmacKey: t.slice(32) };
      }
      function v(e) {
        return null !== e.match(/^[0-9a-f]+$/i);
      }
      function m(e) {
        const t = {
            result: !1,
            reason_data: "Invalid public key format",
            reason: n.InvalidFormat,
          },
          r = {
            result: !1,
            reason_data: "Public key is not a point",
            reason: n.IsNotPoint,
          };
        if (66 !== e.length && 130 !== e.length) return t;
        const o = e.slice(0, 2);
        if (130 === e.length && "04" !== o) return t;
        if (66 === e.length && "02" !== o && "03" !== o) return t;
        if (!v(e)) return t;
        try {
          const t = s.Point.fromHex(e);
          return (
            t.assertValidity(),
            { result: !0, reason_data: null, reason: null }
          );
        } catch (i) {
          return r;
        }
      }
      function S(e) {
        const t = e.toString(16);
        if (64 === t.length) return t;
        if (t.length < 64) {
          const e = "0".repeat(64 - t.length);
          return `${e}${t}`;
        }
        throw new Error("Generated a > 32-byte BN for encryption. Failing.");
      }
      function A(e) {
        const t = (0, a.bigIntToBytes)(e, 32);
        if (32 !== t.byteLength)
          throw new Error("Failed to generate a 32-byte Uint8Array");
        return t;
      }
      function E(e) {
        const t = {
          iv: "",
          ephemeralPK: "",
          mac: "",
          cipherText: "",
          wasString: !!e.wasString,
        };
        "base64" === e.cipherTextEncoding && (t.cipherTextEncoding = "base64");
        const r = 32,
          n = 66,
          o = 64;
        return {
          payloadValuesLength: r + n + o,
          payloadShell: JSON.stringify(t),
        };
      }
      function P(e) {
        const t = { signature: "", publicKey: "", cipherText: e },
          r = 144,
          n = 66;
        return {
          signedPayloadValuesLength: r + n,
          signedPayloadShell: JSON.stringify(t),
        };
      }
      function k(e) {
        const { payloadShell: t, payloadValuesLength: r } = E(e),
          n = (0, f.getAesCbcOutputLength)(e.contentLength);
        let o;
        if (e.cipherTextEncoding && "hex" !== e.cipherTextEncoding) {
          if ("base64" !== e.cipherTextEncoding)
            throw new Error(
              `Unexpected cipherTextEncoding "${e.cipherTextEncoding}"`,
            );
          o = (0, f.getBase64OutputLength)(n);
        } else o = 2 * n;
        if (e.sign) {
          const { signedPayloadShell: e, signedPayloadValuesLength: n } = P(t);
          return e.length + n + r + o;
        }
        return t.length + r + o;
      }
      async function O(e, t, r, n) {
        const o = m(e);
        if (!o.result) throw o;
        const i = s.utils.randomPrivateKey(),
          l = (0, s.getPublicKey)(i, !0);
        let u = (0, s.getSharedSecret)(i, e, !0);
        u = u.slice(1);
        const h = w(u),
          d = s.utils.randomBytes(16),
          f = await p(d, h.encryptionKey, t),
          y = (0, a.concatBytes)(d, l, f),
          b = g(h.hmacKey, y);
        let v;
        if (n && "hex" !== n) {
          if ("base64" !== n)
            throw new Error(`Unexpected cipherTextEncoding "${n}"`);
          v = (0, c.fromByteArray)(f);
        } else v = (0, a.bytesToHex)(f);
        const S = {
          iv: (0, a.bytesToHex)(d),
          ephemeralPK: (0, a.bytesToHex)(l),
          cipherText: v,
          mac: (0, a.bytesToHex)(b),
          wasString: r,
        };
        return (n && "hex" !== n && (S.cipherTextEncoding = n), S);
      }
      async function T(e, t) {
        if (!t.ephemeralPK)
          throw new a.FailedDecryptionError(
            "Unable to get public key from cipher object. You might be trying to decrypt an unencrypted object.",
          );
        const r = t.ephemeralPK;
        let n = (0, s.getSharedSecret)(e, r, !0);
        n = n.slice(1);
        const o = w(n),
          i = (0, a.hexToBytes)(t.iv);
        let l;
        if (t.cipherTextEncoding && "hex" !== t.cipherTextEncoding) {
          if ("base64" !== t.cipherTextEncoding)
            throw new Error(`Unexpected cipherTextEncoding "${t.cipherText}"`);
          l = (0, c.toByteArray)(t.cipherText);
        } else l = (0, a.hexToBytes)(t.cipherText);
        const u = (0, a.concatBytes)(i, (0, a.hexToBytes)(r), l),
          h = g(o.hmacKey, u),
          d = (0, a.hexToBytes)(t.mac);
        if (!b(d, h))
          throw new a.FailedDecryptionError(
            "Decryption failed: failure in MAC check",
          );
        const f = await y(i, o.encryptionKey, l);
        return t.wasString ? (0, a.bytesToUtf8)(f) : f;
      }
      function _(e, t) {
        const r = "string" === typeof t ? (0, a.utf8ToBytes)(t) : t,
          n = (0, u.getPublicKeyFromPrivate)(e),
          o = (0, d.hashSha256Sync)(r),
          i = (0, s.signSync)(o, e);
        return { signature: (0, a.bytesToHex)(i), publicKey: n };
      }
      function U(e, t, r) {
        const n = "string" === typeof e ? (0, a.utf8ToBytes)(e) : e,
          o = (0, d.hashSha256Sync)(n);
        return (0, s.verify)(r, o, t, { strict: !1 });
      }
      function C(e) {
        let { signature: t, message: r, publicKey: n } = e;
        const { r: o, s: c } = (0, a.parseRecoverableSignatureVrs)(t),
          l = new s.Signature((0, a.hexToBigInt)(o), (0, a.hexToBigInt)(c)),
          u = "string" === typeof r ? (0, h.hashMessage)(r) : r,
          d = (0, s.verify)(l, u, n, { strict: !1 });
        if (d || "string" !== typeof r) return d;
        const f = "Stacks Message Signing:\n",
          p = (0, i.sha256)((0, h.encodeMessage)(r, f));
        return (0, s.verify)(l, p, n, { strict: !1 });
      }
      function L(e) {
        let { signature: t, message: r, publicKey: n } = e;
        return C({
          signature: (0, a.signatureRsvToVrs)(t),
          message: r,
          publicKey: n,
        });
      }
      ((s.utils.hmacSha256Sync = function (e) {
        const t = o.hmac.create(i.sha256, e);
        for (
          var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1;
          s < r;
          s++
        )
          n[s - 1] = arguments[s];
        return (n.forEach((e) => t.update(e)), t.digest());
      }),
        (function (e) {
          ((e["InvalidFormat"] = "InvalidFormat"),
            (e["IsNotPoint"] = "IsNotPoint"));
        })(n || (t.InvalidPublicKeyReason = n = {})));
    },
    5721: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SHA2 = void 0));
      const n = r(6926),
        o = r(4593);
      function i(e, t, r, n) {
        if ("function" === typeof e.setBigUint64)
          return e.setBigUint64(t, r, n);
        const o = BigInt(32),
          i = BigInt(4294967295),
          s = Number((r >> o) & i),
          a = Number(r & i),
          c = n ? 4 : 0,
          l = n ? 0 : 4;
        (e.setUint32(t + c, s, n), e.setUint32(t + l, a, n));
      }
      class SHA2 extends o.Hash {
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
            (this.view = (0, o.createView)(this.buffer)));
        }
        update(e) {
          n.default.exists(this);
          const { view: t, buffer: r, blockLen: i } = this;
          e = (0, o.toBytes)(e);
          const s = e.length;
          for (let n = 0; n < s; ) {
            const a = Math.min(i - this.pos, s - n);
            if (a !== i)
              (r.set(e.subarray(n, n + a), this.pos),
                (this.pos += a),
                (n += a),
                this.pos === i && (this.process(t, 0), (this.pos = 0)));
            else {
              const t = (0, o.createView)(e);
              for (; i <= s - n; n += i) this.process(t, n);
            }
          }
          return ((this.length += e.length), this.roundClean(), this);
        }
        digestInto(e) {
          (n.default.exists(this),
            n.default.output(e, this),
            (this.finished = !0));
          const { buffer: t, view: r, blockLen: s, isLE: a } = this;
          let { pos: c } = this;
          ((t[c++] = 128),
            this.buffer.subarray(c).fill(0),
            this.padOffset > s - c && (this.process(r, 0), (c = 0)));
          for (let n = c; n < s; n++) t[n] = 0;
          (i(r, s - 8, BigInt(8 * this.length), a), this.process(r, 0));
          const l = (0, o.createView)(e),
            u = this.outputLen;
          if (u % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const h = u / 4,
            d = this.get();
          if (h > d.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let n = 0; n < h; n++) l.setUint32(4 * n, d[n], a);
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
            finished: o,
            destroyed: i,
            pos: s,
          } = this;
          return (
            (e.length = n),
            (e.pos = s),
            (e.finished = o),
            (e.destroyed = i),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
      t.SHA2 = SHA2;
    },
    5722: function (e, t, r) {
      "use strict";
      function n() {
        return (
          "undefined" !== typeof crypto && "undefined" !== typeof crypto.subtle
        );
      }
      function o(e) {
        try {
          const t = 5723;
          if (!t) return !1;
          const n = r(5723);
          if (!n) return !1;
          if (e) {
            const t = e(n);
            return t;
          }
          return !0;
        } catch (t) {
          return !1;
        }
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NO_CRYPTO_LIB = void 0),
        (t.getCryptoLib = s),
        (t.isNodeCryptoAvailable = o),
        (t.isSubtleCryptoAvailable = n));
      const i = (t.NO_CRYPTO_LIB =
        'Crypto lib not found. Either the WebCrypto "crypto.subtle" or Node.js "crypto" module must be available.');
      async function s() {
        if (n()) return { lib: crypto.subtle, name: "subtleCrypto" };
        try {
          const e = r(5723);
          return { lib: e, name: "nodeCrypto" };
        } catch (e) {
          throw new Error(i);
        }
      }
    },
    5724: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.base58CheckDecode = f),
        (t.base58CheckEncode = y),
        (t.base58Encode = p),
        (t.compressPrivateKey = m),
        (t.ecSign = w),
        (t.getPublicKeyFromPrivate = b),
        (t.isValidPrivateKey = v),
        (t.makeECPrivateKey = d),
        (t.publicKeyToBtcAddress = g));
      var o = r(6925),
        i = r(4877),
        s = r(3282),
        a = r(2778),
        c = n(r(11456)),
        l = r(11458),
        u = r(4878);
      const h = 0;
      function d() {
        return (0, a.bytesToHex)(s.utils.randomPrivateKey());
      }
      function f(e) {
        const t = c.default.decode(e),
          r = t.slice(0, -4),
          n = t.slice(-4),
          o = (0, i.sha256)((0, i.sha256)(r));
        if ((n[0] ^ o[0]) | (n[1] ^ o[1]) | (n[2] ^ o[2]) | (n[3] ^ o[3]))
          throw new Error("Invalid checksum");
        if (21 !== r.length) throw new TypeError("Invalid address length");
        const s = (0, a.readUInt8)(r, 0),
          l = r.slice(1);
        return { version: s, hash: l };
      }
      function p(e) {
        const t = (0, i.sha256)((0, i.sha256)(e));
        return c.default.encode(
          (0, a.concatBytes)(e, t).slice(0, e.length + 4),
        );
      }
      function y(e, t) {
        return p((0, a.concatBytes)(new Uint8Array([e]), t.slice(0, 20)));
      }
      function g(e, t) {
        void 0 === t && (t = h);
        const r = "string" === typeof e ? (0, a.hexToBytes)(e) : e,
          n = (0, l.hashRipemd160)((0, u.hashSha256Sync)(r));
        return y(t, n);
      }
      function b(e) {
        const t = (0, a.privateKeyToBytes)(e);
        return (0, a.bytesToHex)((0, s.getPublicKey)(t.slice(0, 32), !0));
      }
      function w(e, t) {
        return (0, s.signSync)(e, (0, a.privateKeyToBytes)(t).slice(0, 32), {
          der: !1,
        });
      }
      function v(e) {
        return s.utils.isValidPrivateKey((0, a.privateKeyToBytes)(e));
      }
      function m(e) {
        const t = (0, a.privateKeyToBytes)(e);
        return t.length == a.PRIVATE_KEY_COMPRESSED_LENGTH
          ? t
          : (0, a.concatBytes)(t, new Uint8Array([1]));
      }
      s.utils.hmacSha256Sync = function (e) {
        const t = o.hmac.create(i.sha256, e);
        for (
          var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1;
          s < r;
          s++
        )
          n[s - 1] = arguments[s];
        return (n.forEach((e) => t.update(e)), t.digest());
      };
    },
    5739: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Person", {
          enumerable: !0,
          get: function () {
            return n.Person;
          },
        }),
        Object.defineProperty(t, "Profile", {
          enumerable: !0,
          get: function () {
            return n.Profile;
          },
        }),
        Object.defineProperty(t, "extractProfile", {
          enumerable: !0,
          get: function () {
            return i.extractProfile;
          },
        }),
        Object.defineProperty(t, "getTokenFileUrl", {
          enumerable: !0,
          get: function () {
            return n.getTokenFileUrl;
          },
        }),
        Object.defineProperty(t, "makeProfileZoneFile", {
          enumerable: !0,
          get: function () {
            return n.makeProfileZoneFile;
          },
        }),
        Object.defineProperty(t, "resolveZoneFileToPerson", {
          enumerable: !0,
          get: function () {
            return o.resolveZoneFileToPerson;
          },
        }),
        Object.defineProperty(t, "resolveZoneFileToProfile", {
          enumerable: !0,
          get: function () {
            return n.resolveZoneFileToProfile;
          },
        }),
        Object.defineProperty(t, "signProfileToken", {
          enumerable: !0,
          get: function () {
            return i.signProfileToken;
          },
        }),
        Object.defineProperty(t, "verifyProfileToken", {
          enumerable: !0,
          get: function () {
            return i.verifyProfileToken;
          },
        }),
        Object.defineProperty(t, "wrapProfileToken", {
          enumerable: !0,
          get: function () {
            return i.wrapProfileToken;
          },
        }));
      var n = r(6955),
        o = r(6956),
        i = r(5740);
    },
    5740: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.extractProfile = l),
        (t.signProfileToken = s),
        (t.verifyProfileToken = c),
        (t.wrapProfileToken = a));
      var n = r(3854),
        o = r(2778),
        i = r(4881);
      function s(e, t, r, i, s, a, c) {
        if (
          (void 0 === s && (s = "ES256K"),
          void 0 === a && (a = new Date()),
          void 0 === c && (c = (0, o.nextYear)()),
          "ES256K" !== s)
        )
          throw new Error("Signing algorithm not supported");
        const l = n.SECP256K1Client.derivePublicKey(t);
        (r || (r = { publicKey: l }), i || (i = { publicKey: l }));
        const u = new n.TokenSigner(s, t),
          h = {
            jti: (0, o.makeUUID4)(),
            iat: a.toISOString(),
            exp: c.toISOString(),
            subject: r,
            issuer: i,
            claim: e,
          };
        return u.sign(h);
      }
      function a(e) {
        return { token: e, decodedToken: (0, n.decodeToken)(e) };
      }
      function c(e, t) {
        const r = (0, n.decodeToken)(e),
          o = r.payload;
        if ("string" === typeof o)
          throw new Error("Unexpected token payload type of string");
        if (!o.hasOwnProperty("subject") || !o.subject)
          throw new Error("Token doesn't have a subject");
        if (!o.subject.hasOwnProperty("publicKey"))
          throw new Error("Token doesn't have a subject public key");
        if (!o.hasOwnProperty("issuer") || !o.issuer)
          throw new Error("Token doesn't have an issuer");
        if (!o.issuer.hasOwnProperty("publicKey"))
          throw new Error("Token doesn't have an issuer public key");
        if (!o.hasOwnProperty("claim"))
          throw new Error("Token doesn't have a claim");
        const s = o.issuer.publicKey,
          a = (0, i.getAddressFromPublicKey)(s);
        if (t === s);
        else if (t !== a)
          throw new Error(
            "Token issuer public key does not match the verifying value",
          );
        const c = new n.TokenVerifier(r.header.alg, s);
        if (!c) throw new Error("Invalid token verifier");
        const l = c.verify(e);
        if (!l) throw new Error("Token verification failed");
        return r;
      }
      function l(e, t) {
        let r;
        (void 0 === t && (t = null), (r = t ? c(e, t) : (0, n.decodeToken)(e)));
        let o = {};
        if (r.hasOwnProperty("payload")) {
          const e = r.payload;
          if ("string" === typeof e)
            throw new Error("Unexpected token payload type of string");
          e.hasOwnProperty("claim") && (o = e.claim);
        }
        return o;
      }
    },
    6925: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hmac = void 0));
      const n = r(6926),
        o = r(4593);
      class HMAC extends o.Hash {
        constructor(e, t) {
          (super(),
            (this.finished = !1),
            (this.destroyed = !1),
            n.default.hash(e));
          const r = (0, o.toBytes)(t);
          if (
            ((this.iHash = e.create()), "function" !== typeof this.iHash.update)
          )
            throw new TypeError(
              "Expected instance of class which extends utils.Hash",
            );
          ((this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen));
          const i = this.blockLen,
            s = new Uint8Array(i);
          s.set(r.length > i ? e.create().update(r).digest() : r);
          for (let n = 0; n < s.length; n++) s[n] ^= 54;
          (this.iHash.update(s), (this.oHash = e.create()));
          for (let n = 0; n < s.length; n++) s[n] ^= 106;
          (this.oHash.update(s), s.fill(0));
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
            destroyed: o,
            blockLen: i,
            outputLen: s,
          } = this;
          return (
            (e = e),
            (e.finished = n),
            (e.destroyed = o),
            (e.blockLen = i),
            (e.outputLen = s),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
        }
      }
      const i = (e, t, r) => new HMAC(e, t).update(r).digest();
      ((t.hmac = i), (t.hmac.create = (e, t) => new HMAC(e, t)));
    },
    6926: function (e, t, r) {
      "use strict";
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error("Wrong positive integer: " + e);
      }
      function o(e) {
        if ("boolean" !== typeof e)
          throw new Error("Expected boolean, not " + e);
      }
      function i(e) {
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
      function s(e) {
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
        i(e);
        const r = t.outputLen;
        if (e.length < r)
          throw new Error(
            "digestInto() expects output buffer of length at least " + r,
          );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.output = t.exists = t.hash = t.bytes = t.bool = t.number = void 0),
        (t.number = n),
        (t.bool = o),
        (t.bytes = i),
        (t.hash = s),
        (t.exists = a),
        (t.output = c));
      const l = { number: n, bool: o, bytes: i, hash: s, exists: a, output: c };
      t.default = l;
    },
    6927: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WebCryptoAesCipher = t.NodeCryptoAesCipher = void 0),
        (t.createCipher = i));
      var n = r(2778),
        o = r(5722);
      class NodeCryptoAesCipher {
        constructor(e, t) {
          ((this.createCipher = e), (this.createDecipher = t));
        }
        async encrypt(e, t, r, o) {
          if ("aes-128-cbc" !== e && "aes-256-cbc" !== e)
            throw new Error(`Unsupported cipher algorithm "${e}"`);
          const i = this.createCipher(e, t, r),
            s = new Uint8Array((0, n.concatBytes)(i.update(o), i.final()));
          return Promise.resolve(s);
        }
        async decrypt(e, t, r, o) {
          if ("aes-128-cbc" !== e && "aes-256-cbc" !== e)
            throw new Error(`Unsupported cipher algorithm "${e}"`);
          const i = this.createDecipher(e, t, r),
            s = new Uint8Array((0, n.concatBytes)(i.update(o), i.final()));
          return Promise.resolve(s);
        }
      }
      t.NodeCryptoAesCipher = NodeCryptoAesCipher;
      class WebCryptoAesCipher {
        constructor(e) {
          this.subtleCrypto = e;
        }
        async encrypt(e, t, r, n) {
          let o, i;
          if ("aes-128-cbc" === e) ((o = "AES-CBC"), (i = 128));
          else {
            if ("aes-256-cbc" !== e)
              throw new Error(`Unsupported cipher algorithm "${e}"`);
            ((o = "AES-CBC"), (i = 256));
          }
          const s = await this.subtleCrypto.importKey(
              "raw",
              t,
              { name: o, length: i },
              !1,
              ["encrypt"],
            ),
            a = await this.subtleCrypto.encrypt({ name: o, iv: r }, s, n);
          return new Uint8Array(a);
        }
        async decrypt(e, t, r, n) {
          let o, i;
          if ("aes-128-cbc" === e) ((o = "AES-CBC"), (i = 128));
          else {
            if ("aes-256-cbc" !== e)
              throw new Error(`Unsupported cipher algorithm "${e}"`);
            ((o = "AES-CBC"), (i = 256));
          }
          const s = await this.subtleCrypto.importKey(
              "raw",
              t,
              { name: o, length: i },
              !1,
              ["decrypt"],
            ),
            a = await this.subtleCrypto.decrypt({ name: o, iv: r }, s, n);
          return new Uint8Array(a);
        }
      }
      async function i() {
        const e = await (0, o.getCryptoLib)();
        return "subtleCrypto" === e.name
          ? new WebCryptoAesCipher(e.lib)
          : new NodeCryptoAesCipher(
              e.lib.createCipheriv,
              e.lib.createDecipheriv,
            );
      }
      t.WebCryptoAesCipher = WebCryptoAesCipher;
    },
    6928: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decodeMessage = l),
        (t.encodeMessage = c),
        (t.hashMessage = a));
      var n = r(4877),
        o = r(2778),
        i = r(11462);
      const s = "Stacks Signed Message:\n";
      function a(e, t) {
        return (void 0 === t && (t = s), (0, n.sha256)(c(e, t)));
      }
      function c(e, t) {
        void 0 === t && (t = s);
        const r = "string" == typeof e ? (0, o.utf8ToBytes)(e) : e,
          n = (0, i.encode)(r.length);
        return (0, o.concatBytes)((0, o.utf8ToBytes)(t), n, r);
      }
      function l(e, t) {
        void 0 === t && (t = s);
        const r = (0, o.utf8ToBytes)(t).byteLength,
          n = e.subarray(r),
          a = (0, i.decode)(n),
          c = (0, i.encodingLength)(a);
        return n.slice(c);
      }
    },
    6929: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Signature", {
          enumerable: !0,
          get: function () {
            return n.Signature;
          },
        }),
        (t.getAesCbcOutputLength = o),
        (t.getBase64OutputLength = i),
        (t.hashCode = s),
        Object.defineProperty(t, "verifySignature", {
          enumerable: !0,
          get: function () {
            return n.verify;
          },
        }));
      var n = r(3282);
      function o(e) {
        const t = 16 * (Math.floor(e / 16) + 1);
        return t;
      }
      function i(e) {
        const t = 4 * Math.ceil(e / 3);
        return t;
      }
      function s(e) {
        let t = 0;
        if (0 === e.length) return t;
        for (let r = 0; r < e.length; r++) {
          const n = e.charCodeAt(r);
          ((t = (t << 5) - t + n), (t &= t));
        }
        return 2147483647 & t;
      }
    },
    6930: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.randomBytes = void 0));
      var n = r(3282);
      const o = function (e) {
        return (void 0 === e && (e = 32), n.utils.randomBytes(e));
      };
      t.randomBytes = o;
    },
    6939: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createApiKeyMiddleware = c),
        (t.createFetchFn = u),
        (t.fetchWrapper = s),
        (t.getFetchOptions = void 0),
        (t.hostMatches = a),
        (t.setFetchOptions = void 0),
        r(5286));
      const n = {
          referrerPolicy: "origin",
          headers: { "x-hiro-product": "stacksjs" },
        },
        o = () => n;
      t.getFetchOptions = o;
      const i = (e) => Object.assign(n, e);
      async function s(e, t) {
        const r = {};
        Object.assign(r, n, t);
        const o = await fetch(e, r);
        return o;
      }
      function a(e, t) {
        return "string" === typeof t ? t === e : t.exec(e);
      }
      function c(e) {
        let {
          apiKey: t,
          host: r = /(.*)api(.*)(\.stacks\.co|\.hiro\.so)$/i,
          httpHeader: n = "x-api-key",
        } = e;
        return {
          pre: (e) => {
            const o = new URL(e.url);
            if (!a(o.host, r)) return;
            const i =
              e.init.headers instanceof Headers
                ? e.init.headers
                : (e.init.headers = new Headers(e.init.headers));
            i.set(n, t);
          },
        };
      }
      function l(e) {
        let t = s,
          r = [];
        return (
          e.length > 0 && "function" === typeof e[0] && (t = e.shift()),
          e.length > 0 && (r = e),
          { fetchLib: t, middlewares: r }
        );
      }
      function u() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        const { fetchLib: n, middlewares: o } = l(t),
          i = async (e, t) => {
            let r = { url: e, init: null !== t && void 0 !== t ? t : {} };
            for (const c of o)
              if ("function" === typeof c.pre) {
                const e = await Promise.resolve(c.pre({ fetch: n, ...r }));
                r = null !== e && void 0 !== e ? e : r;
              }
            let i = await n(r.url, r.init);
            for (const c of o)
              if ("function" === typeof c.post) {
                var s, a;
                const e = await Promise.resolve(
                  c.post({
                    fetch: n,
                    url: r.url,
                    init: r.init,
                    response:
                      null !==
                        (s =
                          null === (a = i) || void 0 === a
                            ? void 0
                            : a.clone()) && void 0 !== s
                        ? s
                        : i,
                  }),
                );
                i = null !== e && void 0 !== e ? e : i;
              }
            return i;
          };
        return i;
      }
      t.setFetchOptions = i;
    },
    6949: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        connectToGaiaHub: !0,
        uploadToGaiaHub: !0,
        BLOCKSTACK_GAIA_HUB_LABEL: !0,
        getBucketUrl: !0,
        deleteFromGaiaHub: !0,
        getFullReadUrl: !0,
      };
      (Object.defineProperty(t, "BLOCKSTACK_GAIA_HUB_LABEL", {
        enumerable: !0,
        get: function () {
          return i.BLOCKSTACK_GAIA_HUB_LABEL;
        },
      }),
        Object.defineProperty(t, "connectToGaiaHub", {
          enumerable: !0,
          get: function () {
            return i.connectToGaiaHub;
          },
        }),
        Object.defineProperty(t, "deleteFromGaiaHub", {
          enumerable: !0,
          get: function () {
            return i.deleteFromGaiaHub;
          },
        }),
        Object.defineProperty(t, "getBucketUrl", {
          enumerable: !0,
          get: function () {
            return i.getBucketUrl;
          },
        }),
        Object.defineProperty(t, "getFullReadUrl", {
          enumerable: !0,
          get: function () {
            return i.getFullReadUrl;
          },
        }),
        Object.defineProperty(t, "uploadToGaiaHub", {
          enumerable: !0,
          get: function () {
            return i.uploadToGaiaHub;
          },
        }));
      var o = r(11512);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === o[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
      var i = r(6957);
    },
    6950: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        AppConfig: !0,
        makeAuthRequest: !0,
        makeAuthRequestToken: !0,
        makeAuthResponse: !0,
        decryptPrivateKey: !0,
        getAuthRequestFromURL: !0,
        fetchAppManifest: !0,
        verifyAuthRequest: !0,
        verifyAuthResponse: !0,
        isExpirationDateValid: !0,
        isIssuanceDateValid: !0,
        doPublicKeysMatchIssuer: !0,
        doSignaturesMatchPublicKeys: !0,
        isManifestUriValid: !0,
        isRedirectUriValid: !0,
        verifyAuthRequestAndLoadManifest: !0,
        UserSession: !0,
      };
      (Object.defineProperty(t, "AppConfig", {
        enumerable: !0,
        get: function () {
          return o.AppConfig;
        },
      }),
        Object.defineProperty(t, "UserSession", {
          enumerable: !0,
          get: function () {
            return l.UserSession;
          },
        }),
        Object.defineProperty(t, "decryptPrivateKey", {
          enumerable: !0,
          get: function () {
            return i.decryptPrivateKey;
          },
        }),
        Object.defineProperty(t, "doPublicKeysMatchIssuer", {
          enumerable: !0,
          get: function () {
            return a.doPublicKeysMatchIssuer;
          },
        }),
        Object.defineProperty(t, "doSignaturesMatchPublicKeys", {
          enumerable: !0,
          get: function () {
            return a.doSignaturesMatchPublicKeys;
          },
        }),
        Object.defineProperty(t, "fetchAppManifest", {
          enumerable: !0,
          get: function () {
            return s.fetchAppManifest;
          },
        }),
        Object.defineProperty(t, "getAuthRequestFromURL", {
          enumerable: !0,
          get: function () {
            return s.getAuthRequestFromURL;
          },
        }),
        Object.defineProperty(t, "isExpirationDateValid", {
          enumerable: !0,
          get: function () {
            return a.isExpirationDateValid;
          },
        }),
        Object.defineProperty(t, "isIssuanceDateValid", {
          enumerable: !0,
          get: function () {
            return a.isIssuanceDateValid;
          },
        }),
        Object.defineProperty(t, "isManifestUriValid", {
          enumerable: !0,
          get: function () {
            return a.isManifestUriValid;
          },
        }),
        Object.defineProperty(t, "isRedirectUriValid", {
          enumerable: !0,
          get: function () {
            return a.isRedirectUriValid;
          },
        }),
        Object.defineProperty(t, "makeAuthRequest", {
          enumerable: !0,
          get: function () {
            return i.makeAuthRequest;
          },
        }),
        Object.defineProperty(t, "makeAuthRequestToken", {
          enumerable: !0,
          get: function () {
            return i.makeAuthRequestToken;
          },
        }),
        Object.defineProperty(t, "makeAuthResponse", {
          enumerable: !0,
          get: function () {
            return i.makeAuthResponse;
          },
        }),
        Object.defineProperty(t, "verifyAuthRequest", {
          enumerable: !0,
          get: function () {
            return a.verifyAuthRequest;
          },
        }),
        Object.defineProperty(t, "verifyAuthRequestAndLoadManifest", {
          enumerable: !0,
          get: function () {
            return a.verifyAuthRequestAndLoadManifest;
          },
        }),
        Object.defineProperty(t, "verifyAuthResponse", {
          enumerable: !0,
          get: function () {
            return a.verifyAuthResponse;
          },
        }));
      var o = r(6951),
        i = r(6952),
        s = r(6953),
        a = r(6954),
        c = r(4887);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var l = r(11513),
        u = r(4602);
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === u[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var h = r(11523);
      Object.keys(h).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === h[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return h[e];
              },
            }));
      });
      var d = r(11524);
      Object.keys(d).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === d[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return d[e];
              },
            }));
      });
    },
    6951: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AppConfig = void 0));
      var n = r(4602),
        o = r(2778);
      class AppConfig {
        constructor(e, t, r, i, s, a) {
          var c;
          (void 0 === e && (e = n.DEFAULT_SCOPE.slice()), void 0 === t) &&
            (t =
              null ===
                (c = (0, o.getGlobalObject)("location", {
                  returnEmptyObject: !0,
                })) || void 0 === c
                ? void 0
                : c.origin);
          (void 0 === r && (r = ""),
            void 0 === i && (i = "/manifest.json"),
            void 0 === s && (s = void 0),
            void 0 === a && (a = n.DEFAULT_BLOCKSTACK_HOST),
            (this.appDomain = t),
            (this.scopes = e),
            (this.redirectPath = r),
            (this.manifestPath = i),
            (this.coreNode = s),
            (this.authenticatorURL = a));
        }
        redirectURI() {
          return `${this.appDomain}${this.redirectPath}`;
        }
        manifestURI() {
          return `${this.appDomain}${this.manifestPath}`;
        }
      }
      t.AppConfig = AppConfig;
    },
    6952: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decryptPrivateKey = d),
        (t.encryptPrivateKey = h),
        (t.generateTransitKey = l),
        (t.makeAuthRequest = void 0),
        (t.makeAuthRequestToken = u),
        (t.makeAuthResponse = f));
      var n = r(2778),
        o = r(3206),
        i = r(3854),
        s = r(4602),
        a = r(4887);
      const c = "1.4.0";
      function l() {
        const e = (0, o.makeECPrivateKey)();
        return e;
      }
      t.makeAuthRequest = u;
      function u(e, t, r, l, u, h, d) {
        (void 0 === l && (l = s.DEFAULT_SCOPE.slice()),
          void 0 === h && (h = (0, n.nextMonth)().getTime()),
          void 0 === d && (d = {}));
        const f = (e) => {
          const t = (0, n.getGlobalObject)("location", {
            throwIfUnavailable: !0,
            usageDesc: `makeAuthRequest([${e}=undefined])`,
          });
          return null === t || void 0 === t ? void 0 : t.origin;
        };
        (t || (t = f("redirectURI") + "/"),
          r || (r = f("manifestURI") + "/manifest.json"),
          u || (u = f("appDomain")));
        const p = Object.assign({}, d, {
            jti: (0, n.makeUUID4)(),
            iat: Math.floor(new Date().getTime() / 1e3),
            exp: Math.floor(h / 1e3),
            iss: null,
            public_keys: [],
            domain_name: u,
            manifest_uri: r,
            redirect_uri: t,
            version: c,
            do_not_include_profile: !0,
            supports_hub_url: !0,
            scopes: l,
          }),
          y = i.SECP256K1Client.derivePublicKey(e);
        p.public_keys = [y];
        const g = (0, o.publicKeyToBtcAddress)(y);
        p.iss = (0, a.makeDIDFromAddress)(g);
        const b = new i.TokenSigner("ES256k", e),
          w = b.sign(p);
        return w;
      }
      async function h(e, t) {
        const r = await (0, o.encryptECIES)(e, (0, n.utf8ToBytes)(t), !0),
          i = JSON.stringify(r);
        return (0, n.bytesToHex)((0, n.utf8ToBytes)(i));
      }
      async function d(e, t) {
        const r = (0, n.bytesToUtf8)((0, n.hexToBytes)(t)),
          i = JSON.parse(r),
          s = await (0, o.decryptECIES)(e, i);
        if ("string" !== typeof s)
          throw new Error("Unable to correctly decrypt private key");
        return s;
      }
      async function f(e, t, r, s, l, u, d, f, p, y, g) {
        (void 0 === t && (t = {}),
          void 0 === s && (s = null),
          void 0 === l && (l = null),
          void 0 === u && (u = (0, n.nextMonth)().getTime()),
          void 0 === d && (d = null),
          void 0 === f && (f = null),
          void 0 === p && (p = null),
          void 0 === y && (y = null),
          void 0 === g && (g = null));
        const b = i.SECP256K1Client.derivePublicKey(e),
          w = (0, o.publicKeyToBtcAddress)(b);
        let v = l,
          m = s,
          S = {};
        void 0 !== l &&
          null !== l &&
          (void 0 !== d &&
            null !== d &&
            ((v = await h(d, l)),
            void 0 !== s && null !== s && (m = await h(d, s))),
          (S = {
            email: null !== r && void 0 !== r && r.email ? r.email : null,
            profile_url:
              null !== r && void 0 !== r && r.profileUrl ? r.profileUrl : null,
            hubUrl: f,
            blockstackAPIUrl: p,
            associationToken: y,
            version: c,
          }));
        const A = Object.assign(
            {},
            {
              jti: (0, n.makeUUID4)(),
              iat: Math.floor(new Date().getTime() / 1e3),
              exp: Math.floor(u / 1e3),
              iss: (0, a.makeDIDFromAddress)(w),
              private_key: v,
              public_keys: [b],
              appPrivateKeyFromWalletSalt: g,
              profile: t,
              core_token: m,
            },
            S,
          ),
          E = new i.TokenSigner("ES256k", e);
        return E.sign(A);
      }
    },
    6953: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.fetchAppManifest = a),
        (t.getAuthRequestFromURL = s));
      var n = r(3854),
        o = r(2778),
        i = r(3167);
      function s() {
        var e, t;
        const r = (0, o.getGlobalObject)("location", {
            throwIfUnavailable: !0,
            usageDesc: "getAuthRequestFromURL",
          }),
          n = new URLSearchParams(
            null === r || void 0 === r ? void 0 : r.search,
          );
        return null !==
          (e =
            null === (t = n.get("authRequest")) || void 0 === t
              ? void 0
              : t.replaceAll(o.BLOCKSTACK_HANDLER + ":", "")) && void 0 !== e
          ? e
          : null;
      }
      async function a(e, t) {
        if ((void 0 === t && (t = (0, i.createFetchFn)()), !e))
          throw new Error("Invalid auth request");
        const r = (0, n.decodeToken)(e).payload;
        if ("string" === typeof r)
          throw new Error("Unexpected token payload type of string");
        const o = r.manifest_uri;
        try {
          const e = await t(o),
            r = await e.text(),
            n = JSON.parse(r);
          return { ...n, manifestURI: o };
        } catch (s) {
          throw (console.log(s), new Error("Could not fetch manifest.json"));
        }
      }
    },
    6954: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.doPublicKeysMatchIssuer = l),
        (t.doSignaturesMatchPublicKeys = c),
        (t.isExpirationDateValid = h),
        (t.isIssuanceDateValid = u),
        (t.isManifestUriValid = d),
        (t.isRedirectUriValid = f),
        (t.verifyAuthRequest = p),
        (t.verifyAuthRequestAndLoadManifest = y),
        (t.verifyAuthResponse = g));
      var n = r(2778),
        o = r(3206),
        i = r(3854),
        s = r(4887),
        a = r(6953);
      function c(e) {
        const t = (0, i.decodeToken)(e).payload;
        if ("string" === typeof t)
          throw new Error("Unexpected token payload type of string");
        const r = t.public_keys;
        if (1 !== r.length)
          throw new Error("Multiple public keys are not supported");
        {
          const t = r[0];
          try {
            const r = new i.TokenVerifier("ES256k", t);
            return r.verify(e);
          } catch (n) {
            return !1;
          }
        }
      }
      function l(e) {
        const t = (0, i.decodeToken)(e).payload;
        if ("string" === typeof t)
          throw new Error("Unexpected token payload type of string");
        const r = t.public_keys,
          n = (0, s.getAddressFromDID)(t.iss);
        if (1 !== r.length)
          throw new Error("Multiple public keys are not supported");
        {
          const e = (0, o.publicKeyToBtcAddress)(r[0]);
          if (e === n) return !0;
        }
        return !1;
      }
      function u(e) {
        const t = (0, i.decodeToken)(e).payload;
        if ("string" === typeof t)
          throw new Error("Unexpected token payload type of string");
        if (t.iat) {
          if ("number" !== typeof t.iat) return !1;
          const e = new Date(1e3 * t.iat);
          return !(new Date().getTime() < e.getTime());
        }
        return !0;
      }
      function h(e) {
        const t = (0, i.decodeToken)(e).payload;
        if ("string" === typeof t)
          throw new Error("Unexpected token payload type of string");
        if (t.exp) {
          if ("number" !== typeof t.exp) return !1;
          const e = new Date(1e3 * t.exp);
          return !(new Date().getTime() > e.getTime());
        }
        return !0;
      }
      function d(e) {
        const t = (0, i.decodeToken)(e).payload;
        if ("string" === typeof t)
          throw new Error("Unexpected token payload type of string");
        return (0, n.isSameOriginAbsoluteUrl)(t.domain_name, t.manifest_uri);
      }
      function f(e) {
        const t = (0, i.decodeToken)(e).payload;
        if ("string" === typeof t)
          throw new Error("Unexpected token payload type of string");
        return (0, n.isSameOriginAbsoluteUrl)(t.domain_name, t.redirect_uri);
      }
      async function p(e) {
        if ("none" === (0, i.decodeToken)(e).header.alg)
          throw new Error("Token must be signed in order to be verified");
        const t = await Promise.all([h(e), u(e), c(e), l(e), d(e), f(e)]);
        return t.every((e) => e);
      }
      async function y(e) {
        const t = await p(e);
        if (!t) throw new Error("Token is an invalid auth request");
        return (0, a.fetchAppManifest)(e);
      }
      async function g(e) {
        const t = await Promise.all([h(e), u(e), c(e), l(e)]);
        return t.every((e) => e);
      }
    },
    6955: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Profile = t.Person = void 0),
        (t.getTokenFileUrl = p),
        (t.makeProfileZoneFile = f),
        (t.resolveZoneFileToProfile = y));
      var n = r(5740),
        o = r(6956),
        i = r(11518),
        s = r(5738),
        a = u(r(11519)),
        c = r(2778),
        l = r(3167);
      function u(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (u = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var o,
            i,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((o = t ? n : r)) {
            if (o.has(e)) return o.get(e);
            o.set(e, s);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((i =
                (o = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (i.get || i.set)
                ? o(s, r, i)
                : (s[r] = e[r]));
          return s;
        })(e, t);
      }
      const h = {
        type: "object",
        properties: {
          "@context": { type: "string", optional: !0 },
          "@type": { type: "string" },
        },
      };
      class Profile {
        constructor(e) {
          (void 0 === e && (e = {}),
            (this._profile = Object.assign(
              {},
              { "@context": "http://schema.org/" },
              e,
            )));
        }
        toJSON() {
          return Object.assign({}, this._profile);
        }
        toToken(e) {
          return (0, n.signProfileToken)(this.toJSON(), e);
        }
        static validateSchema(e, t) {
          return (void 0 === t && (t = !1), (h.strict = t), a.validate(h, e));
        }
        static fromToken(e, t) {
          void 0 === t && (t = null);
          const r = (0, n.extractProfile)(e, t);
          return new Profile(r);
        }
        static makeZoneFile(e, t) {
          return f(e, t);
        }
      }
      t.Profile = Profile;
      const d = {
        type: "object",
        strict: !1,
        properties: {
          "@context": { type: "string", optional: !0 },
          "@type": { type: "string" },
          "@id": { type: "string", optional: !0 },
          name: { type: "string", optional: !0 },
          givenName: { type: "string", optional: !0 },
          familyName: { type: "string", optional: !0 },
          description: { type: "string", optional: !0 },
          image: {
            type: "array",
            optional: !0,
            items: {
              type: "object",
              properties: {
                "@type": { type: "string" },
                name: { type: "string", optional: !0 },
                contentUrl: { type: "string", optional: !0 },
              },
            },
          },
          website: {
            type: "array",
            optional: !0,
            items: {
              type: "object",
              properties: {
                "@type": { type: "string" },
                url: { type: "string", optional: !0 },
              },
            },
          },
          account: {
            type: "array",
            optional: !0,
            items: {
              type: "object",
              properties: {
                "@type": { type: "string" },
                service: { type: "string", optional: !0 },
                identifier: { type: "string", optional: !0 },
                proofType: { type: "string", optional: !0 },
                proofUrl: { type: "string", optional: !0 },
                proofMessage: { type: "string", optional: !0 },
                proofSignature: { type: "string", optional: !0 },
              },
            },
          },
          worksFor: {
            type: "array",
            optional: !0,
            items: {
              type: "object",
              properties: {
                "@type": { type: "string" },
                "@id": { type: "string", optional: !0 },
              },
            },
          },
          knows: {
            type: "array",
            optional: !0,
            items: {
              type: "object",
              properties: {
                "@type": { type: "string" },
                "@id": { type: "string", optional: !0 },
              },
            },
          },
          address: {
            type: "object",
            optional: !0,
            properties: {
              "@type": { type: "string" },
              streetAddress: { type: "string", optional: !0 },
              addressLocality: { type: "string", optional: !0 },
              postalCode: { type: "string", optional: !0 },
              addressCountry: { type: "string", optional: !0 },
            },
          },
          birthDate: { type: "string", optional: !0 },
          taxID: { type: "string", optional: !0 },
        },
      };
      class Person extends Profile {
        constructor(e) {
          (void 0 === e && (e = { "@type": "Person" }),
            super(e),
            (this._profile = Object.assign(
              {},
              { "@type": "Person" },
              this._profile,
            )));
        }
        static validateSchema(e, t) {
          return (void 0 === t && (t = !1), (d.strict = t), a.validate(h, e));
        }
        static fromToken(e, t) {
          void 0 === t && (t = null);
          const r = (0, n.extractProfile)(e, t);
          return new Person(r);
        }
        static fromLegacyFormat(e) {
          const t = (0, o.getPersonFromLegacyFormat)(e);
          return new Person(t);
        }
        toJSON() {
          return {
            profile: this.profile(),
            name: this.name(),
            givenName: this.givenName(),
            familyName: this.familyName(),
            description: this.description(),
            avatarUrl: this.avatarUrl(),
            verifiedAccounts: this.verifiedAccounts(),
            address: this.address(),
            birthDate: this.birthDate(),
            connections: this.connections(),
            organizations: this.organizations(),
          };
        }
        profile() {
          return Object.assign({}, this._profile);
        }
        name() {
          return (0, i.getName)(this.profile());
        }
        givenName() {
          return (0, i.getGivenName)(this.profile());
        }
        familyName() {
          return (0, i.getFamilyName)(this.profile());
        }
        description() {
          return (0, i.getDescription)(this.profile());
        }
        avatarUrl() {
          return (0, i.getAvatarUrl)(this.profile());
        }
        verifiedAccounts(e) {
          return (0, i.getVerifiedAccounts)(this.profile(), e);
        }
        address() {
          return (0, i.getAddress)(this.profile());
        }
        birthDate() {
          return (0, i.getBirthDate)(this.profile());
        }
        connections() {
          return (0, i.getConnections)(this.profile());
        }
        organizations() {
          return (0, i.getOrganizations)(this.profile());
        }
      }
      function f(e, t) {
        if (!t.includes("://")) throw new Error("Invalid token file url");
        const r = t.split("://")[0],
          n = t.split("://")[1].split("/"),
          o = n[0],
          i = "/" + n.slice(1).join("/"),
          a = {
            $origin: e,
            $ttl: 3600,
            uri: [
              {
                name: "_http._tcp",
                priority: 10,
                weight: 1,
                target: `${r}://${o}${i}`,
              },
            ],
          },
          c = "{$origin}\n{$ttl}\n{uri}\n";
        return (0, s.makeZoneFile)(a, c);
      }
      function p(e) {
        if (!e.hasOwnProperty("uri")) return null;
        if (!Array.isArray(e.uri)) return null;
        if (e.uri.length < 1) return null;
        const t = e.uri.filter(
          (e) => e.hasOwnProperty("target") && "_http._tcp" === e.name,
        );
        if (t.length < 1) return null;
        const r = t[0];
        if (!r.hasOwnProperty("target")) return null;
        let n = r.target;
        return (
          n.startsWith("https") || n.startsWith("http") || (n = "https://" + n),
          n
        );
      }
      function y(e, t, r) {
        return (
          void 0 === r && (r = (0, l.createFetchFn)()),
          new Promise((o, i) => {
            let a = null;
            try {
              ((a = (0, s.parseZoneFile)(e)),
                a.hasOwnProperty("$origin") || (a = null));
            } catch (u) {
              i(u);
            }
            let l = null;
            if (a && Object.keys(a).length > 0) l = p(a);
            else
              try {
                return o(Person.fromLegacyFormat(JSON.parse(e)).profile());
              } catch (h) {
                return i(h);
              }
            l
              ? r(l)
                  .then((e) => e.text())
                  .then((e) => JSON.parse(e))
                  .then((e) => {
                    const r = e,
                      i = (0, n.extractProfile)(r[0].token, t);
                    o(i);
                  })
                  .catch((e) => {
                    (c.Logger.error(
                      `resolveZoneFileToProfile: error fetching token file ${l}: ${e}`,
                    ),
                      i(e));
                  })
              : (c.Logger.debug(
                  "Token file url not found. Resolving to blank profile.",
                ),
                o({}));
          })
        );
      }
      t.Person = Person;
    },
    6956: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getPersonFromLegacyFormat", {
          enumerable: !0,
          get: function () {
            return n.getPersonFromLegacyFormat;
          },
        }),
        Object.defineProperty(t, "resolveZoneFileToPerson", {
          enumerable: !0,
          get: function () {
            return o.resolveZoneFileToPerson;
          },
        }));
      var n = r(11516),
        o = r(11517);
    },
    6957: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BLOCKSTACK_GAIA_HUB_LABEL = void 0),
        (t.connectToGaiaHub = f),
        (t.deleteFromGaiaHub = l),
        (t.getBlockstackErrorFromResponse = g),
        (t.getBucketUrl = p),
        (t.getFullReadUrl = u),
        (t.uploadToGaiaHub = c));
      var n = r(2778),
        o = r(3206),
        i = r(3167),
        s = r(812),
        a = r(3854);
      t.BLOCKSTACK_GAIA_HUB_LABEL = "blockstack-gaia-hub-config";
      async function c(e, t, r, o, s, a, c, l) {
        (void 0 === o && (o = "application/octet-stream"),
          void 0 === s && (s = !0),
          void 0 === l && (l = (0, i.createFetchFn)()),
          n.Logger.debug(`uploadToGaiaHub: uploading ${e} to ${r.server}`));
        const u = { "Content-Type": o, Authorization: "bearer " + r.token };
        c || (s ? (u["If-None-Match"] = "*") : a && (u["If-Match"] = a));
        const h = await l(`${r.server}/store/${r.address}/${e}`, {
          method: "POST",
          headers: u,
          body: t,
        });
        if (!h.ok) throw await g(h, "Error when uploading to Gaia hub.", r);
        const d = await h.text();
        return JSON.parse(d);
      }
      async function l(e, t, r) {
        (void 0 === r && (r = (0, i.createFetchFn)()),
          n.Logger.debug(`deleteFromGaiaHub: deleting ${e} from ${t.server}`));
        const o = await r(`${t.server}/delete/${t.address}/${e}`, {
          method: "DELETE",
          headers: { Authorization: "bearer " + t.token },
        });
        if (!o.ok) throw await g(o, "Error deleting file from Gaia hub.", t);
      }
      function u(e, t) {
        return Promise.resolve(`${t.url_prefix}${t.address}/${e}`);
      }
      function h(e, t) {
        let r;
        try {
          r = JSON.parse(e);
        } catch (i) {
          throw new Error(
            "Failed in parsing legacy challenge text from the gaia hub.",
          );
        }
        if ("gaiahub" === r[0] && "blockstack_storage_please_sign" === r[3]) {
          const r = (0, o.hashSha256Sync)((0, n.utf8ToBytes)(e)),
            i = (0, o.ecSign)(r, (0, o.compressPrivateKey)(t)),
            a = o.Signature.fromCompact((0, n.bytesToHex)(i)).toDERHex(),
            c = (0, o.getPublicKeyFromPrivate)(t),
            l = (0, s.fromByteArray)(
              (0, n.utf8ToBytes)(
                JSON.stringify({ publickey: c, signature: a }),
              ),
            );
          return l;
        }
        throw new Error(
          "Failed to connect to legacy gaia hub. If you operate this hub, please update.",
        );
      }
      function d(e, t, r, i) {
        const s = e.challenge_text,
          c =
            e.latest_auth_version &&
            parseInt(e.latest_auth_version.slice(1), 10) >= 1,
          l = (0, o.getPublicKeyFromPrivate)(t);
        if (!c) return h(s, t);
        const u = (0, n.bytesToHex)((0, o.randomBytes)(16)),
          d = {
            gaiaChallenge: s,
            hubUrl: r,
            iss: l,
            salt: u,
            associationToken: i,
          },
          f = new a.TokenSigner("ES256K", t).sign(d);
        return "v1:" + f;
      }
      async function f(e, t, r, s) {
        (void 0 === s && (s = (0, i.createFetchFn)()),
          n.Logger.debug(`connectToGaiaHub: ${e}/hub_info`));
        const a = await s(e + "/hub_info"),
          c = await a.json(),
          l = c.read_url_prefix,
          u = d(c, t, e, r),
          h = (0, o.publicKeyToBtcAddress)((0, o.getPublicKeyFromPrivate)(t));
        return {
          url_prefix: l,
          max_file_upload_size_megabytes: c.max_file_upload_size_megabytes,
          address: h,
          token: u,
          server: e,
        };
      }
      async function p(e, t, r) {
        void 0 === r && (r = (0, i.createFetchFn)());
        const n = await r(e + "/hub_info"),
          s = await n.text(),
          a = JSON.parse(s),
          c = a.read_url_prefix,
          l = (0, o.publicKeyToBtcAddress)((0, o.getPublicKeyFromPrivate)(t)),
          u = `${c}${l}/`;
        return u;
      }
      async function y(e) {
        let t,
          r = "";
        try {
          r = await e.text();
          try {
            t = JSON.parse(r);
          } catch (a) {}
        } catch (a) {
          n.Logger.debug("Error getting bad http response text: " + a);
        }
        const o = e.status,
          i = e.statusText,
          s = t || r;
        return { status: o, statusText: i, body: s };
      }
      async function g(e, t, r) {
        if (e.ok)
          throw new Error(
            "Cannot get a BlockstackError from a valid response.",
          );
        const o = await y(e);
        if (401 === o.status) return new n.ValidationError(t, o);
        if (402 === o.status) return new n.NotEnoughProofError(t, o);
        if (403 === o.status) return new n.BadPathError(t, o);
        if (404 === o.status) throw new n.DoesNotExist(t, o);
        if (409 === o.status) return new n.ConflictError(t, o);
        if (412 === o.status) return new n.PreconditionFailedError(t, o);
        if (413 === o.status) {
          const e =
            r && r.max_file_upload_size_megabytes
              ? (0, n.megabytesToBytes)(r.max_file_upload_size_megabytes)
              : 0;
          return new n.PayloadTooLargeError(t, o, e);
        }
        return new Error(t);
      }
    },
  },
]);
