(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [47],
  {
    10702: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        a = n.split("").reduce(function (e, r, t) {
          return ((e[r] = t), e);
        }, {});
      r.default = {
        encode: function (e) {
          if (!e.length) return "";
          for (var r = [0], t = 0; t < e.length; t++) {
            for (var a = 0; a < r.length; a++) r[a] <<= 8;
            r[0] += e[t];
            for (var o = 0, i = 0; i < r.length; i++)
              ((r[i] += o), (o = (r[i] / 58) | 0), (r[i] %= 58));
            while (o) (r.push(o % 58), (o = (o / 58) | 0));
          }
          for (t = 0; 0 === e[t] && t < e.length - 1; t++) r.push(0);
          return r
            .reverse()
            .map(function (e) {
              return n[e];
            })
            .join("");
        },
        decode: function (e) {
          if (!e.length) return new Uint8Array(0);
          for (var r = [0], t = 0; t < e.length; t++) {
            var n = e[t];
            if (!(n in a))
              throw 'There is no character "' + n + '" in the Base58 sequence!';
            for (var o = 0; o < r.length; o++) r[o] *= 58;
            r[0] += a[n];
            var i = 0;
            for (o = 0; o < r.length; o++)
              ((r[o] += i), (i = r[o] >> 8), (r[o] &= 255));
            while (i) (r.push(255 & i), (i >>= 8));
          }
          for (t = 0; "1" === e[t] && t < e.length - 1; t++) r.push(0);
          return new Uint8Array(r.reverse());
        },
      };
    },
    10703: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = function () {
        var e = new Array(128),
          r = String.fromCodePoint || String.fromCharCode,
          t = [];
        return function (n) {
          var a,
            o,
            i = n.length;
          t.length = 0;
          for (var s = 0; s < i; )
            ((o = n[s++]),
              o <= 127
                ? (a = o)
                : o <= 223
                  ? (a = ((31 & o) << 6) | (63 & n[s++]))
                  : o <= 239
                    ? (a =
                        ((15 & o) << 12) | ((63 & n[s++]) << 6) | (63 & n[s++]))
                    : String.fromCodePoint
                      ? (a =
                          ((7 & o) << 18) |
                          ((63 & n[s++]) << 12) |
                          ((63 & n[s++]) << 6) |
                          (63 & n[s++]))
                      : ((a = 63), (s += 3)),
              t.push(e[a] || (e[a] = r(a))));
          return t.join("");
        };
      };
      function a(e) {
        for (var r = [], t = 0; t < e.length; t++) {
          var n = e.charCodeAt(t);
          n < 128
            ? r.push(n)
            : n < 2048
              ? r.push(192 | (n >> 6), 128 | (63 & n))
              : n < 55296 || n >= 57344
                ? r.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n))
                : (t++,
                  (n = 65536 + (((1023 & n) << 10) | (1023 & e.charCodeAt(t)))),
                  r.push(
                    240 | (n >> 18),
                    128 | ((n >> 12) & 63),
                    128 | ((n >> 6) & 63),
                    128 | (63 & n),
                  ));
        }
        return Uint8Array.from(r);
      }
      ((r.utf8ArrayToStr = n()), (r.strToUtf8Array = a));
    },
    10704: function (e, r, t) {
      "use strict";
      /**
       * [js-sha3]{@link https://github.com/emn178/js-sha3}
       *
       * @version 0.5.7
       * @author Chen, Yi-Cyuan [emn178@gmail.com]
       * @copyright Chen, Yi-Cyuan 2015-2016
       * @license MIT
       */ r.__esModule = !0;
      for (
        var n = "0123456789abcdef".split(""),
          a = [31, 7936, 2031616, 520093696],
          o = [1, 256, 65536, 16777216],
          i = [6, 1536, 393216, 100663296],
          s = [0, 8, 16, 24],
          u = [
            1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
            2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0,
            136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
            2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648,
            128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545,
            2147483648, 32896, 2147483648, 2147483649, 0, 2147516424,
            2147483648,
          ],
          c = [224, 256, 384, 512],
          l = [128, 256],
          f = ["hex", "buffer", "arrayBuffer", "array"],
          d = function (e, r, t) {
            return function (n) {
              return new S(e, r, e).update(n)[t]();
            };
          },
          h = function (e, r, t) {
            return function (n, a) {
              return new S(e, r, a).update(n)[t]();
            };
          },
          y = function (e, r) {
            var t = d(e, r, "hex");
            ((t.create = function () {
              return new S(e, r, e);
            }),
              (t.update = function (e) {
                return t.create().update(e);
              }));
            for (var n = 0; n < f.length; ++n) {
              var a = f[n];
              t[a] = d(e, r, a);
            }
            return t;
          },
          p = function (e, r) {
            var t = h(e, r, "hex");
            ((t.create = function (t) {
              return new S(e, r, t);
            }),
              (t.update = function (e, r) {
                return t.create(r).update(e);
              }));
            for (var n = 0; n < f.length; ++n) {
              var a = f[n];
              t[a] = h(e, r, a);
            }
            return t;
          },
          g = [
            { name: "keccak", padding: o, bits: c, createMethod: y },
            { name: "sha3", padding: i, bits: c, createMethod: y },
            { name: "shake", padding: a, bits: l, createMethod: p },
          ],
          m = {},
          b = [],
          v = 0;
        v < g.length;
        ++v
      )
        for (var w = g[v], k = w.bits, _ = 0; _ < k.length; ++_) {
          var A = w.name + "_" + k[_];
          (b.push(A), (m[A] = w.createMethod(k[_], w.padding)));
        }
      function S(e, r, t) {
        ((this.blocks = []),
          (this.s = []),
          (this.padding = r),
          (this.outputBits = t),
          (this.reset = !0),
          (this.block = 0),
          (this.start = 0),
          (this.blockCount = (1600 - (e << 1)) >> 5),
          (this.byteCount = this.blockCount << 2),
          (this.outputBlocks = t >> 5),
          (this.extraBytes = (31 & t) >> 3));
        for (var n = 0; n < 50; ++n) this.s[n] = 0;
      }
      ((S.prototype.update = function (e) {
        var r = "string" !== typeof e;
        r && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
        var t,
          n,
          a = e.length,
          o = this.blocks,
          i = this.byteCount,
          u = this.blockCount,
          c = 0,
          l = this.s;
        while (c < a) {
          if (this.reset)
            for (this.reset = !1, o[0] = this.block, t = 1; t < u + 1; ++t)
              o[t] = 0;
          if (r)
            for (t = this.start; c < a && t < i; ++c)
              o[t >> 2] |= e[c] << s[3 & t++];
          else
            for (t = this.start; c < a && t < i; ++c)
              ((n = e.charCodeAt(c)),
                n < 128
                  ? (o[t >> 2] |= n << s[3 & t++])
                  : n < 2048
                    ? ((o[t >> 2] |= (192 | (n >> 6)) << s[3 & t++]),
                      (o[t >> 2] |= (128 | (63 & n)) << s[3 & t++]))
                    : n < 55296 || n >= 57344
                      ? ((o[t >> 2] |= (224 | (n >> 12)) << s[3 & t++]),
                        (o[t >> 2] |= (128 | ((n >> 6) & 63)) << s[3 & t++]),
                        (o[t >> 2] |= (128 | (63 & n)) << s[3 & t++]))
                      : ((n =
                          65536 +
                          (((1023 & n) << 10) | (1023 & e.charCodeAt(++c)))),
                        (o[t >> 2] |= (240 | (n >> 18)) << s[3 & t++]),
                        (o[t >> 2] |= (128 | ((n >> 12) & 63)) << s[3 & t++]),
                        (o[t >> 2] |= (128 | ((n >> 6) & 63)) << s[3 & t++]),
                        (o[t >> 2] |= (128 | (63 & n)) << s[3 & t++])));
          if (((this.lastByteIndex = t), t >= i)) {
            for (this.start = t - i, this.block = o[u], t = 0; t < u; ++t)
              l[t] ^= o[t];
            (B(l), (this.reset = !0));
          } else this.start = t;
        }
        return this;
      }),
        (S.prototype.finalize = function () {
          var e = this.blocks,
            r = this.lastByteIndex,
            t = this.blockCount,
            n = this.s;
          if (
            ((e[r >> 2] |= this.padding[3 & r]),
            this.lastByteIndex === this.byteCount)
          )
            for (e[0] = e[t], r = 1; r < t + 1; ++r) e[r] = 0;
          for (e[t - 1] |= 2147483648, r = 0; r < t; ++r) n[r] ^= e[r];
          B(n);
        }),
        (S.prototype.toString = S.prototype.hex =
          function () {
            this.finalize();
            var e,
              r = this.blockCount,
              t = this.s,
              a = this.outputBlocks,
              o = this.extraBytes,
              i = 0,
              s = 0,
              u = "";
            while (s < a) {
              for (i = 0; i < r && s < a; ++i, ++s)
                ((e = t[i]),
                  (u +=
                    n[(e >> 4) & 15] +
                    n[15 & e] +
                    n[(e >> 12) & 15] +
                    n[(e >> 8) & 15] +
                    n[(e >> 20) & 15] +
                    n[(e >> 16) & 15] +
                    n[(e >> 28) & 15] +
                    n[(e >> 24) & 15]));
              s % r === 0 && (B(t), (i = 0));
            }
            return (
              o &&
                ((e = t[i]),
                o > 0 && (u += n[(e >> 4) & 15] + n[15 & e]),
                o > 1 && (u += n[(e >> 12) & 15] + n[(e >> 8) & 15]),
                o > 2 && (u += n[(e >> 20) & 15] + n[(e >> 16) & 15])),
              u
            );
          }),
        (S.prototype.arrayBuffer = function () {
          this.finalize();
          var e,
            r = this.blockCount,
            t = this.s,
            n = this.outputBlocks,
            a = this.extraBytes,
            o = 0,
            i = 0,
            s = this.outputBits >> 3;
          e = a ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(s);
          var u = new Uint32Array(e);
          while (i < n) {
            for (o = 0; o < r && i < n; ++o, ++i) u[i] = t[o];
            i % r === 0 && B(t);
          }
          return (a && ((u[o] = t[o]), (e = e.slice(0, s))), e);
        }),
        (S.prototype.buffer = S.prototype.arrayBuffer),
        (S.prototype.digest = S.prototype.array =
          function () {
            this.finalize();
            var e,
              r,
              t = this.blockCount,
              n = this.s,
              a = this.outputBlocks,
              o = this.extraBytes,
              i = 0,
              s = 0,
              u = [];
            while (s < a) {
              for (i = 0; i < t && s < a; ++i, ++s)
                ((e = s << 2),
                  (r = n[i]),
                  (u[e] = 255 & r),
                  (u[e + 1] = (r >> 8) & 255),
                  (u[e + 2] = (r >> 16) & 255),
                  (u[e + 3] = (r >> 24) & 255));
              s % t === 0 && B(n);
            }
            return (
              o &&
                ((e = s << 2),
                (r = n[i]),
                o > 0 && (u[e] = 255 & r),
                o > 1 && (u[e + 1] = (r >> 8) & 255),
                o > 2 && (u[e + 2] = (r >> 16) & 255)),
              u
            );
          }));
      var B = function (e) {
        var r,
          t,
          n,
          a,
          o,
          i,
          s,
          c,
          l,
          f,
          d,
          h,
          y,
          p,
          g,
          m,
          b,
          v,
          w,
          k,
          _,
          A,
          S,
          B,
          E,
          P,
          T,
          I,
          j,
          M,
          K,
          U,
          x,
          C,
          D,
          O,
          N,
          z,
          H,
          q,
          F,
          L,
          W,
          R,
          V,
          G,
          J,
          Y,
          Q,
          X,
          Z,
          $,
          ee,
          re,
          te,
          ne,
          ae,
          oe,
          ie,
          se,
          ue,
          ce,
          le;
        for (n = 0; n < 48; n += 2)
          ((a = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
            (o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
            (i = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
            (s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
            (c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
            (l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
            (f = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
            (d = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
            (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]),
            (y = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]),
            (r = h ^ ((i << 1) | (s >>> 31))),
            (t = y ^ ((s << 1) | (i >>> 31))),
            (e[0] ^= r),
            (e[1] ^= t),
            (e[10] ^= r),
            (e[11] ^= t),
            (e[20] ^= r),
            (e[21] ^= t),
            (e[30] ^= r),
            (e[31] ^= t),
            (e[40] ^= r),
            (e[41] ^= t),
            (r = a ^ ((c << 1) | (l >>> 31))),
            (t = o ^ ((l << 1) | (c >>> 31))),
            (e[2] ^= r),
            (e[3] ^= t),
            (e[12] ^= r),
            (e[13] ^= t),
            (e[22] ^= r),
            (e[23] ^= t),
            (e[32] ^= r),
            (e[33] ^= t),
            (e[42] ^= r),
            (e[43] ^= t),
            (r = i ^ ((f << 1) | (d >>> 31))),
            (t = s ^ ((d << 1) | (f >>> 31))),
            (e[4] ^= r),
            (e[5] ^= t),
            (e[14] ^= r),
            (e[15] ^= t),
            (e[24] ^= r),
            (e[25] ^= t),
            (e[34] ^= r),
            (e[35] ^= t),
            (e[44] ^= r),
            (e[45] ^= t),
            (r = c ^ ((h << 1) | (y >>> 31))),
            (t = l ^ ((y << 1) | (h >>> 31))),
            (e[6] ^= r),
            (e[7] ^= t),
            (e[16] ^= r),
            (e[17] ^= t),
            (e[26] ^= r),
            (e[27] ^= t),
            (e[36] ^= r),
            (e[37] ^= t),
            (e[46] ^= r),
            (e[47] ^= t),
            (r = f ^ ((a << 1) | (o >>> 31))),
            (t = d ^ ((o << 1) | (a >>> 31))),
            (e[8] ^= r),
            (e[9] ^= t),
            (e[18] ^= r),
            (e[19] ^= t),
            (e[28] ^= r),
            (e[29] ^= t),
            (e[38] ^= r),
            (e[39] ^= t),
            (e[48] ^= r),
            (e[49] ^= t),
            (p = e[0]),
            (g = e[1]),
            (G = (e[11] << 4) | (e[10] >>> 28)),
            (J = (e[10] << 4) | (e[11] >>> 28)),
            (I = (e[20] << 3) | (e[21] >>> 29)),
            (j = (e[21] << 3) | (e[20] >>> 29)),
            (se = (e[31] << 9) | (e[30] >>> 23)),
            (ue = (e[30] << 9) | (e[31] >>> 23)),
            (L = (e[40] << 18) | (e[41] >>> 14)),
            (W = (e[41] << 18) | (e[40] >>> 14)),
            (C = (e[2] << 1) | (e[3] >>> 31)),
            (D = (e[3] << 1) | (e[2] >>> 31)),
            (m = (e[13] << 12) | (e[12] >>> 20)),
            (b = (e[12] << 12) | (e[13] >>> 20)),
            (Y = (e[22] << 10) | (e[23] >>> 22)),
            (Q = (e[23] << 10) | (e[22] >>> 22)),
            (M = (e[33] << 13) | (e[32] >>> 19)),
            (K = (e[32] << 13) | (e[33] >>> 19)),
            (ce = (e[42] << 2) | (e[43] >>> 30)),
            (le = (e[43] << 2) | (e[42] >>> 30)),
            (re = (e[5] << 30) | (e[4] >>> 2)),
            (te = (e[4] << 30) | (e[5] >>> 2)),
            (O = (e[14] << 6) | (e[15] >>> 26)),
            (N = (e[15] << 6) | (e[14] >>> 26)),
            (v = (e[25] << 11) | (e[24] >>> 21)),
            (w = (e[24] << 11) | (e[25] >>> 21)),
            (X = (e[34] << 15) | (e[35] >>> 17)),
            (Z = (e[35] << 15) | (e[34] >>> 17)),
            (U = (e[45] << 29) | (e[44] >>> 3)),
            (x = (e[44] << 29) | (e[45] >>> 3)),
            (B = (e[6] << 28) | (e[7] >>> 4)),
            (E = (e[7] << 28) | (e[6] >>> 4)),
            (ne = (e[17] << 23) | (e[16] >>> 9)),
            (ae = (e[16] << 23) | (e[17] >>> 9)),
            (z = (e[26] << 25) | (e[27] >>> 7)),
            (H = (e[27] << 25) | (e[26] >>> 7)),
            (k = (e[36] << 21) | (e[37] >>> 11)),
            (_ = (e[37] << 21) | (e[36] >>> 11)),
            ($ = (e[47] << 24) | (e[46] >>> 8)),
            (ee = (e[46] << 24) | (e[47] >>> 8)),
            (R = (e[8] << 27) | (e[9] >>> 5)),
            (V = (e[9] << 27) | (e[8] >>> 5)),
            (P = (e[18] << 20) | (e[19] >>> 12)),
            (T = (e[19] << 20) | (e[18] >>> 12)),
            (oe = (e[29] << 7) | (e[28] >>> 25)),
            (ie = (e[28] << 7) | (e[29] >>> 25)),
            (q = (e[38] << 8) | (e[39] >>> 24)),
            (F = (e[39] << 8) | (e[38] >>> 24)),
            (A = (e[48] << 14) | (e[49] >>> 18)),
            (S = (e[49] << 14) | (e[48] >>> 18)),
            (e[0] = p ^ (~m & v)),
            (e[1] = g ^ (~b & w)),
            (e[10] = B ^ (~P & I)),
            (e[11] = E ^ (~T & j)),
            (e[20] = C ^ (~O & z)),
            (e[21] = D ^ (~N & H)),
            (e[30] = R ^ (~G & Y)),
            (e[31] = V ^ (~J & Q)),
            (e[40] = re ^ (~ne & oe)),
            (e[41] = te ^ (~ae & ie)),
            (e[2] = m ^ (~v & k)),
            (e[3] = b ^ (~w & _)),
            (e[12] = P ^ (~I & M)),
            (e[13] = T ^ (~j & K)),
            (e[22] = O ^ (~z & q)),
            (e[23] = N ^ (~H & F)),
            (e[32] = G ^ (~Y & X)),
            (e[33] = J ^ (~Q & Z)),
            (e[42] = ne ^ (~oe & se)),
            (e[43] = ae ^ (~ie & ue)),
            (e[4] = v ^ (~k & A)),
            (e[5] = w ^ (~_ & S)),
            (e[14] = I ^ (~M & U)),
            (e[15] = j ^ (~K & x)),
            (e[24] = z ^ (~q & L)),
            (e[25] = H ^ (~F & W)),
            (e[34] = Y ^ (~X & $)),
            (e[35] = Q ^ (~Z & ee)),
            (e[44] = oe ^ (~se & ce)),
            (e[45] = ie ^ (~ue & le)),
            (e[6] = k ^ (~A & p)),
            (e[7] = _ ^ (~S & g)),
            (e[16] = M ^ (~U & B)),
            (e[17] = K ^ (~x & E)),
            (e[26] = q ^ (~L & C)),
            (e[27] = F ^ (~W & D)),
            (e[36] = X ^ (~$ & R)),
            (e[37] = Z ^ (~ee & V)),
            (e[46] = se ^ (~ce & re)),
            (e[47] = ue ^ (~le & te)),
            (e[8] = A ^ (~p & m)),
            (e[9] = S ^ (~g & b)),
            (e[18] = U ^ (~B & P)),
            (e[19] = x ^ (~E & T)),
            (e[28] = L ^ (~C & O)),
            (e[29] = W ^ (~D & N)),
            (e[38] = $ ^ (~R & G)),
            (e[39] = ee ^ (~V & J)),
            (e[48] = ce ^ (~re & ne)),
            (e[49] = le ^ (~te & ae)),
            (e[0] ^= u[n]),
            (e[1] ^= u[n + 1]));
      };
      r.keccak256 = m.keccak_256;
    },
    10705: function (e, r, t) {
      "use strict";
      (function (e) {
        r.__esModule = !0;
        var t = "Input must be an string, Buffer or Uint8Array";
        function n(r) {
          var n;
          if (r instanceof Uint8Array) n = r;
          else if (r instanceof e) n = new Uint8Array(r);
          else {
            if ("string" !== typeof r) throw new Error(t);
            n = new Uint8Array(e.from(r, "utf8"));
          }
          return n;
        }
        function a(e) {
          return Array.prototype.map
            .call(e, function (e) {
              return (e < 16 ? "0" : "") + e.toString(16);
            })
            .join("");
        }
        function o(e, r, t) {
          var n = e[r] + e[t],
            a = e[r + 1] + e[t + 1];
          (n >= 4294967296 && a++, (e[r] = n), (e[r + 1] = a));
        }
        function i(e, r, t, n) {
          var a = e[r] + t;
          t < 0 && (a += 4294967296);
          var o = e[r + 1] + n;
          (a >= 4294967296 && o++, (e[r] = a), (e[r + 1] = o));
        }
        function s(e, r) {
          return e[r] ^ (e[r + 1] << 8) ^ (e[r + 2] << 16) ^ (e[r + 3] << 24);
        }
        function u(e, r, t, n, a, s) {
          var u = h[a],
            c = h[a + 1],
            l = h[s],
            f = h[s + 1];
          (o(d, e, r), i(d, e, u, c));
          var y = d[n] ^ d[e],
            p = d[n + 1] ^ d[e + 1];
          ((d[n] = p),
            (d[n + 1] = y),
            o(d, t, n),
            (y = d[r] ^ d[t]),
            (p = d[r + 1] ^ d[t + 1]),
            (d[r] = (y >>> 24) ^ (p << 8)),
            (d[r + 1] = (p >>> 24) ^ (y << 8)),
            o(d, e, r),
            i(d, e, l, f),
            (y = d[n] ^ d[e]),
            (p = d[n + 1] ^ d[e + 1]),
            (d[n] = (y >>> 16) ^ (p << 16)),
            (d[n + 1] = (p >>> 16) ^ (y << 16)),
            o(d, t, n),
            (y = d[r] ^ d[t]),
            (p = d[r + 1] ^ d[t + 1]),
            (d[r] = (p >>> 31) ^ (y << 1)),
            (d[r + 1] = (y >>> 31) ^ (p << 1)));
        }
        var c = new Uint32Array([
            4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
            1013904242, 1595750129, 2773480762, 2917565137, 1359893119,
            725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225,
          ]),
          l = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8,
            9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13,
            10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10,
            4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
            2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15,
            14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9,
            5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7,
            1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8,
            9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
          ],
          f = new Uint8Array(
            l.map(function (e) {
              return 2 * e;
            }),
          ),
          d = new Uint32Array(32),
          h = new Uint32Array(32);
        function y(e, r) {
          var t = 0;
          for (t = 0; t < 16; t++) ((d[t] = e.h[t]), (d[t + 16] = c[t]));
          for (
            d[24] = d[24] ^ e.t,
              d[25] = d[25] ^ (e.t / 4294967296),
              r && ((d[28] = ~d[28]), (d[29] = ~d[29])),
              t = 0;
            t < 32;
            t++
          )
            h[t] = s(e.b, 4 * t);
          for (t = 0; t < 12; t++)
            (u(0, 8, 16, 24, f[16 * t + 0], f[16 * t + 1]),
              u(2, 10, 18, 26, f[16 * t + 2], f[16 * t + 3]),
              u(4, 12, 20, 28, f[16 * t + 4], f[16 * t + 5]),
              u(6, 14, 22, 30, f[16 * t + 6], f[16 * t + 7]),
              u(0, 10, 20, 30, f[16 * t + 8], f[16 * t + 9]),
              u(2, 12, 22, 24, f[16 * t + 10], f[16 * t + 11]),
              u(4, 14, 16, 26, f[16 * t + 12], f[16 * t + 13]),
              u(6, 8, 18, 28, f[16 * t + 14], f[16 * t + 15]));
          for (t = 0; t < 16; t++) e.h[t] = e.h[t] ^ d[t] ^ d[t + 16];
        }
        function p(e, r) {
          if (0 === e || e > 64)
            throw new Error("Illegal output length, expected 0 < length <= 64");
          if (r && r.length > 64)
            throw new Error(
              "Illegal key, expected Uint8Array with 0 < length <= 64",
            );
          for (
            var t = {
                b: new Uint8Array(128),
                h: new Uint32Array(16),
                t: 0,
                c: 0,
                outlen: e,
              },
              n = 0;
            n < 16;
            n++
          )
            t.h[n] = c[n];
          var a = r ? r.length : 0;
          return (
            (t.h[0] ^= 16842752 ^ (a << 8) ^ e),
            r && (g(t, r), (t.c = 128)),
            t
          );
        }
        function g(e, r) {
          for (var t = 0; t < r.length; t++)
            (128 === e.c && ((e.t += e.c), y(e, !1), (e.c = 0)),
              (e.b[e.c++] = r[t]));
        }
        function m(e) {
          e.t += e.c;
          while (e.c < 128) e.b[e.c++] = 0;
          y(e, !0);
          for (var r = new Uint8Array(e.outlen), t = 0; t < e.outlen; t++)
            r[t] = e.h[t >> 2] >> (8 * (3 & t));
          return r;
        }
        function b(e, r, t) {
          ((t = t || 64), (e = n(e)));
          var a = p(t, r);
          return (g(a, e), m(a));
        }
        function v(e, r, t) {
          var n = b(e, r, t);
          return a(n);
        }
        ((r.blake2bInit = p),
          (r.blake2bUpdate = g),
          (r.blake2bFinal = m),
          (r.blake2b = b),
          (r.blake2bHex = v));
      }).call(this, t(2).Buffer);
    },
    10706: function (e, r, t) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = n(t(4826)),
        o = t(3460),
        i = t(5600),
        s = t(5599),
        u = t(4824);
      r.signBytes = function (e, r, t) {
        return a.default.sign(
          o._fromIn(i.isPrivateKey(e) ? e.privateKey : s.privateKey(e)),
          o._fromIn(r),
          o._fromIn(t || u.randomBytes(64)),
        );
      };
    },
    10707: function (e, r, t) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = t(4565),
        o = t(6735),
        i = t(3460),
        s = t(3950),
        u = t(5599),
        c = n(t(4826));
      ((r.verifyAddress = function (e, r) {
        var t = r ? r.chainId : void 0;
        try {
          var n = i._fromIn(e);
          if (1 != n[0] || (t && n[1] != o.ChaidId.toNumber(t))) return !1;
          for (
            var a = n.slice(0, 22),
              c = n.slice(22, 26),
              l = s._hashChain(a).slice(0, 4),
              f = 0;
            f < 4;
            f++
          )
            if (c[f] != l[f]) return !1;
          if (r && r.publicKey) {
            var d = u.address({ publicKey: r.publicKey }, t);
            if (n.length !== d.length) return !1;
            for (f = 0; f < d.length; f++) if (d[f] !== n[f]) return !1;
          }
        } catch (h) {
          return !1;
        }
        return !0;
      }),
        (r.verifySignature = function (e, r, t) {
          try {
            return c.default.verify(i._fromIn(e), i._fromIn(r), i._fromIn(t));
          } catch (n) {
            return !1;
          }
        }),
        (r.verifyPublicKey = function (e) {
          return i._fromIn(e).length === a.PUBLIC_KEY_LENGTH;
        }));
    },
    10708: function (e, r, t) {
      "use strict";
      var n =
          (this && this.__awaiter) ||
          function (e, r, t, n) {
            return new (t || (t = Promise))(function (a, o) {
              function i(e) {
                try {
                  u(n.next(e));
                } catch (r) {
                  o(r);
                }
              }
              function s(e) {
                try {
                  u(n["throw"](e));
                } catch (r) {
                  o(r);
                }
              }
              function u(e) {
                e.done
                  ? a(e.value)
                  : new t(function (r) {
                      r(e.value);
                    }).then(i, s);
              }
              u((n = n.apply(e, r || [])).next());
            });
          },
        a =
          (this && this.__generator) ||
          function (e, r) {
            var t,
              n,
              a,
              o,
              i = {
                label: 0,
                sent: function () {
                  if (1 & a[0]) throw a[1];
                  return a[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(e) {
              return function (r) {
                return u([e, r]);
              };
            }
            function u(o) {
              if (t) throw new TypeError("Generator is already executing.");
              while (i)
                try {
                  if (
                    ((t = 1),
                    n &&
                      (a =
                        2 & o[0]
                          ? n["return"]
                          : o[0]
                            ? n["throw"] || ((a = n["return"]) && a.call(n), 0)
                            : n.next) &&
                      !(a = a.call(n, o[1])).done)
                  )
                    return a;
                  switch (((n = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return (i.label++, { value: o[1], done: !1 });
                    case 5:
                      (i.label++, (n = o[1]), (o = [0]));
                      continue;
                    case 7:
                      ((o = i.ops.pop()), i.trys.pop());
                      continue;
                    default:
                      if (
                        ((a = i.trys),
                        !(a = a.length > 0 && a[a.length - 1]) &&
                          (6 === o[0] || 2 === o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        ((i.label = a[1]), (a = o));
                        break;
                      }
                      if (a && i.label < a[2]) {
                        ((i.label = a[2]), i.ops.push(o));
                        break;
                      }
                      (a[2] && i.ops.pop(), i.trys.pop());
                      continue;
                  }
                  o = r.call(e, i);
                } catch (s) {
                  ((o = [6, s]), (n = 0));
                } finally {
                  t = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            }
          },
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var r = {};
            if (null != e)
              for (var t in e)
                Object.hasOwnProperty.call(e, t) && (r[t] = e[t]);
            return ((r["default"] = e), r);
          },
        i = this;
      Object.defineProperty(r, "__esModule", { value: !0 });
      var s = o(t(10709)),
        u = o(t(3458)),
        c = o(t(6743)),
        l = o(t(2921)),
        f = t(4825),
        d = t(3459),
        h = o(t(53));
      ((s.oids["sha224"] = "2.16.840.1.101.3.4.2.4"),
        (s.oids["2.16.840.1.101.3.4.2.4"] = "sha224"),
        (s.oids["sha3-224"] = "2.16.840.1.101.3.4.2.7"),
        (s.oids["2.16.840.1.101.3.4.2.7"] = "sha3-224"),
        (s.oids["sha3-256"] = "2.16.840.1.101.3.4.2.8"),
        (s.oids["2.16.840.1.101.3.4.2.8"] = "sha3-256"),
        (s.oids["sha3-384"] = "2.16.840.1.101.3.4.2.9"),
        (s.oids["2.16.840.1.101.3.4.2.9"] = "sha3-384"),
        (s.oids["sha3-512"] = "2.16.840.1.101.3.4.2.10"),
        (s.oids["2.16.840.1.101.3.4.2.10"] = "sha3-512"),
        (r.pemToBytes = function (e) {
          return f.base64Decode(
            e
              .trim()
              .split(/\r\n|\n/)
              .slice(1, -1)
              .join("")
              .trim(),
          );
        }));
      var y = {
        rsaPrivateNonEncrypted: "RSA PRIVATE KEY",
        rsaPublic: "PUBLIC KEY",
      };
      ((r.bytesToPem = function (e, r) {
        var t = "-----BEGIN " + y[r] + "-----\n",
          n = "-----END " + y[r] + "-----\n",
          a = f.base64Encode(e);
        a.length % 64 !== 0 && (a += " ".repeat(64 - (a.length % 64)));
        for (var o = t, i = 0; i < a.length / 64; i++)
          o += a.slice(64 * i, 64 * (i + 1)) + "\n";
        return ((o += n), o);
      }),
        (r.rsaKeyPairSync = function (e, t) {
          var n = s.rsa.generateKeyPair(e, t);
          return {
            rsaPrivate: r.pemToBytes(s.privateKeyToPem(n.privateKey)),
            rsaPublic: r.pemToBytes(s.publicKeyToPem(n.publicKey)),
          };
        }),
        (r.rsaKeyPair = function (e, t) {
          return n(i, void 0, void 0, function () {
            return a(this, function (n) {
              return [
                2,
                new Promise(function (n, a) {
                  s.rsa.generateKeyPair(e, t, function (e, t) {
                    (e && a(e),
                      n({
                        rsaPrivate: r.pemToBytes(
                          s.privateKeyToPem(t.privateKey),
                        ),
                        rsaPublic: r.pemToBytes(s.publicKeyToPem(t.publicKey)),
                      }));
                  });
                }),
              ];
            });
          });
        }));
      var p = function (e) {
          return function () {
            throw new Error("Digest " + e + " is unsupported");
          };
        },
        g = (function () {
          function e(e, r) {
            ((this.sha3Digest = e), (this.algorithm = r));
          }
          return (
            (e.makeCreator = function (r, t) {
              return {
                create: function () {
                  return new e(r.create(), t);
                },
              };
            }),
            (e.prototype.update = function (e, r) {
              return (
                this.sha3Digest.update(
                  d.stringToBytes(e, null == r ? "raw" : r),
                ),
                this
              );
            }),
            (e.prototype.digest = function () {
              var e = Uint8Array.from(this.sha3Digest.digest());
              return l.createBuffer(d.bytesToString(e, "raw"));
            }),
            e
          );
        })(),
        m = {
          MD5: c,
          SHA1: u.algorithms.sha1,
          SHA224: p("SHA224"),
          SHA256: u.algorithms.sha256,
          SHA384: u.algorithms.sha384,
          SHA512: u.algorithms.sha512,
          "SHA3-224": g.makeCreator(h.sha3_224, "sha3-224"),
          "SHA3-256": g.makeCreator(h.sha3_256, "sha3-256"),
          "SHA3-384": g.makeCreator(h.sha3_384, "sha3-384"),
          "SHA3-512": g.makeCreator(h.sha3_512, "sha3-512"),
        };
      ((r.rsaSign = function (e, t, n) {
        void 0 === n && (n = "SHA256");
        var a = r.bytesToPem(e, "rsaPrivateNonEncrypted"),
          o = s.privateKeyFromPem(a),
          i = m[n].create();
        return (
          i.update(d.bytesToString(t, "raw")),
          d.stringToBytes(o.sign(i), "raw")
        );
      }),
        (r.rsaVerify = function (e, t, n, a) {
          void 0 === a && (a = "SHA256");
          var o = s.publicKeyFromPem(r.bytesToPem(e, "rsaPublic")),
            i = m[a].create();
          return (
            i.update(d.bytesToString(t), "raw"),
            o.verify(i.digest().getBytes(), d.bytesToString(n, "raw"))
          );
        }));
    },
    10717: function (e, r, t) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (null != e)
            for (var t in e) Object.hasOwnProperty.call(e, t) && (r[t] = e[t]);
          return ((r["default"] = e), r);
        };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = t(3459),
        o = n(t(6743)),
        i = t(4564),
        s = t(6733),
        u = t(4825),
        c = t(3950),
        l = t(4824);
      function f(e, r) {
        void 0 === r && (r = 5e3);
        while (r--) {
          var t = a.stringToBytes(e);
          e = u.base16Encode(c.sha256(t));
        }
        return e;
      }
      function d(e, r, t) {
        void 0 === t && (t = 48);
        var n = a.bytesToString(i.concat(e, r), "raw"),
          s = "",
          u = s;
        while (u.length < t)
          ((s = o
            .create()
            .update(s + n)
            .digest()
            .getBytes()),
            (u += s));
        return u;
      }
      ((r.encryptSeed = function (e, r, t) {
        var n = f(r, t),
          o = l.randomBytes(8),
          c = d(a.stringToBytes(n, "raw"), o),
          h = a.stringToBytes(c.slice(0, 32), "raw"),
          y = a.stringToBytes(c.slice(32), "raw"),
          p = s.aesEncrypt(a.stringToBytes(e), h, "CBC", y);
        return u.base64Encode(i.concat(a.stringToBytes("Salted__"), o, p));
      }),
        (r.decryptSeed = function (e, r, t) {
          var n = f(r, t),
            o = u.base64Decode(e),
            i = o.slice(8, 16),
            c = d(a.stringToBytes(n, "raw"), i),
            l = a.stringToBytes(c.slice(0, 32), "raw"),
            h = a.stringToBytes(c.slice(32), "raw");
          return a.bytesToString(s.aesDecrypt(o.slice(16), l, "CBC", h));
        }));
    },
    10718: function (e, r, t) {
      "use strict";
      var n =
        (this && this.__read) ||
        function (e, r) {
          var t = "function" === typeof Symbol && e[Symbol.iterator];
          if (!t) return e;
          var n,
            a,
            o = t.call(e),
            i = [];
          try {
            while ((void 0 === r || r-- > 0) && !(n = o.next()).done)
              i.push(n.value);
          } catch (s) {
            a = { error: s };
          } finally {
            try {
              n && !n.done && (t = o["return"]) && t.call(o);
            } finally {
              if (a) throw a.error;
            }
          }
          return i;
        };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = t(3950),
        o = t(4564);
      function i(e, r, t) {
        var i = Uint8Array.from([0]),
          s = Uint8Array.from([1]);
        if (32 !== e.length)
          throw new Error(
            "Failed to parse merkleProof: Invalid rootHash length",
          );
        var u = a.blake2b(o.concat(i, t)),
          c = [],
          l = r.map(function (e) {
            return e;
          });
        while (l.length > 0) {
          var f = 0 === l[0] ? "L" : "R",
            d = l[1];
          if (d < 1)
            throw new Error("Failed to parse merkleProof: Wrong hash size");
          var h = l.slice(2, 2 + d);
          (c.push([f, h]), (l = l.slice(2 + d)));
        }
        var y = c.reduce(function (e, r) {
          var t = n(r, 2),
            i = t[0],
            u = t[1];
          return a.blake2b(
            o.concat(s, "R" === i ? o.concat(u, e) : o.concat(e, u)),
          );
        }, u);
        return y.every(function (r, t) {
          return r === e[t];
        });
      }
      r.merkleVerify = i;
    },
    2939: function (e, r, t) {
      "use strict";
      function n(e) {
        for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t]);
      }
      var a;
      Object.defineProperty(r, "__esModule", { value: !0 });
      var o = t(6729),
        i = t(6732);
      r.seedWordsList = i.seedWordsList;
      var s = t(6735);
      r.ChaidId = s.ChaidId;
      var u = t(6734);
      r.Seed = u.Seed;
      var c = t(5600);
      ((r.isPrivateKey = c.isPrivateKey), (r.isPublicKey = c.isPublicKey));
      var l = t(6729);
      ((r.crypto = l.crypto),
        n(t(4565)),
        (r.signBytes = ((a = o.crypto({ output: "Base58" })), a.signBytes)),
        (r.keyPair = a.keyPair),
        (r.publicKey = a.publicKey),
        (r.privateKey = a.privateKey),
        (r.address = a.address),
        (r.buildAddress = a.buildAddress),
        (r.blake2b = a.blake2b),
        (r.keccak = a.keccak),
        (r.sha256 = a.sha256),
        (r.sharedKey = a.sharedKey),
        (r.seedWithNonce = a.seedWithNonce),
        (r.base64Encode = a.base64Encode),
        (r.base64Decode = a.base64Decode),
        (r.base58Encode = a.base58Encode),
        (r.base58Decode = a.base58Decode),
        (r.base16Encode = a.base16Encode),
        (r.base16Decode = a.base16Decode),
        (r.stringToBytes = a.stringToBytes),
        (r.bytesToString = a.bytesToString),
        (r.random = a.random),
        (r.randomSeed = a.randomSeed),
        (r.randomBytes = a.randomBytes),
        (r.verifySignature = a.verifySignature),
        (r.verifyPublicKey = a.verifyPublicKey),
        (r.verifyAddress = a.verifyAddress),
        (r.messageDecrypt = a.messageDecrypt),
        (r.messageEncrypt = a.messageEncrypt),
        (r.aesDecrypt = a.aesDecrypt),
        (r.aesEncrypt = a.aesEncrypt),
        (r.encryptSeed = a.encryptSeed),
        (r.decryptSeed = a.decryptSeed),
        (r.rsaKeyPair = a.rsaKeyPair),
        (r.rsaKeyPairSync = a.rsaKeyPairSync),
        (r.rsaSign = a.rsaSign),
        (r.rsaVerify = a.rsaVerify),
        (r.merkleVerify = a.merkleVerify),
        (r.split = a.split),
        (r.concat = a.concat));
    },
    3459: function (e, r, t) {
      "use strict";
      var n =
          (this && this.__read) ||
          function (e, r) {
            var t = "function" === typeof Symbol && e[Symbol.iterator];
            if (!t) return e;
            var n,
              a,
              o = t.call(e),
              i = [];
            try {
              while ((void 0 === r || r-- > 0) && !(n = o.next()).done)
                i.push(n.value);
            } catch (s) {
              a = { error: s };
            } finally {
              try {
                n && !n.done && (t = o["return"]) && t.call(o);
              } finally {
                if (a) throw a.error;
              }
            }
            return i;
          },
        a =
          (this && this.__spread) ||
          function () {
            for (var e = [], r = 0; r < arguments.length; r++)
              e = e.concat(n(arguments[r]));
            return e;
          };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var o = t(3460),
        i = t(10703);
      ((r.stringToBytes = function (e, r) {
        if ((void 0 === r && (r = "utf8"), "utf8" === r))
          return i.strToUtf8Array(e);
        if ("raw" === r)
          return Uint8Array.from(
            a(e).map(function (e) {
              return e.charCodeAt(0);
            }),
          );
        throw new Error("Unsupported encoding " + r);
      }),
        (r.bytesToString = function (e, r) {
          if ((void 0 === r && (r = "utf8"), "utf8" === r))
            return i.utf8ArrayToStr(Array.from(o._fromIn(e)));
          if ("raw" === r)
            return Array.from(o._fromIn(e))
              .map(function (e) {
                return String.fromCharCode(e);
              })
              .join("");
          throw new Error("Unsupported encoding " + r);
        }),
        (r.binaryStringToBytes = function (e) {
          return Uint8Array.from(
            a(e).map(function (e) {
              return e.charCodeAt(0);
            }),
          );
        }),
        (r.bytesToBinaryString = function (e) {
          return Array.from(o._fromIn(e))
            .map(function (e) {
              return String.fromCharCode(e);
            })
            .join("");
        }));
    },
    3460: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(4825),
        a = t(3459),
        o = function (e) {
          return "string" === typeof e || e instanceof String;
        },
        i = function (e) {
          return e instanceof Uint8Array;
        },
        s = function (e) {
          return !1;
        };
      ((r._fromIn = function (e) {
        return o(e) ? n.base58Decode(e) : i(e) ? e : Uint8Array.from(e);
      }),
        (r._fromRawIn = function (e) {
          if (s(e)) throw new Error("");
          return o(e) ? a.stringToBytes(e) : i(e) ? e : Uint8Array.from(e);
        }));
    },
    3950: function (e, r, t) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (null != e)
            for (var t in e) Object.hasOwnProperty.call(e, t) && (r[t] = e[t]);
          return ((r["default"] = e), r);
        };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = t(3460),
        o = t(10704),
        i = n(t(5598)),
        s = n(t(3458));
      t(6731);
      var u = n(t(10705)),
        c = t(3459);
      ((r._hashChain = function (e) {
        return a._fromIn(r.keccak(r.blake2b(a._fromIn(e))));
      }),
        (r.sha256 = function (e) {
          var r = s.algorithms.sha256.create();
          return (
            r.update(c.bytesToString(e, "raw")),
            c.stringToBytes(r.digest().getBytes(), "raw")
          );
        }),
        (r.blake2b = function (e) {
          return u.blake2b(a._fromIn(e), null, 32);
        }),
        (r.keccak = function (e) {
          return a._fromIn(o.keccak256.array(a._fromIn(e)));
        }),
        (r.hmacSHA256 = function (e, r) {
          var t = i.create();
          return (
            t.start("sha256", c.bytesToString(a._fromIn(r), "raw")),
            t.update(c.bytesToString(a._fromIn(e), "raw")),
            c.stringToBytes(t.digest().getBytes(), "raw")
          );
        }));
    },
    4564: function (e, r, t) {
      "use strict";
      var n =
          (this && this.__read) ||
          function (e, r) {
            var t = "function" === typeof Symbol && e[Symbol.iterator];
            if (!t) return e;
            var n,
              a,
              o = t.call(e),
              i = [];
            try {
              while ((void 0 === r || r-- > 0) && !(n = o.next()).done)
                i.push(n.value);
            } catch (s) {
              a = { error: s };
            } finally {
              try {
                n && !n.done && (t = o["return"]) && t.call(o);
              } finally {
                if (a) throw a.error;
              }
            }
            return i;
          },
        a =
          (this && this.__spread) ||
          function () {
            for (var e = [], r = 0; r < arguments.length; r++)
              e = e.concat(n(arguments[r]));
            return e;
          };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var o = t(3460);
      ((r.concat = function () {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        return e.reduce(function (e, r) {
          return Uint8Array.from(a(e, o._fromIn(r)));
        }, new Uint8Array(0));
      }),
        (r.split = function (e) {
          for (var r = [], t = 1; t < arguments.length; t++)
            r[t - 1] = arguments[t];
          var n = r.reduce(
              function (e, r) {
                return { arr: e.arr.slice(r), r: a(e.r, [e.arr.slice(0, r)]) };
              },
              { arr: o._fromIn(e), r: [] },
            ),
            i = n.r,
            s = n.arr;
          return a(i, [s]);
        }));
    },
    4565: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.PUBLIC_KEY_LENGTH = 32),
        (r.PRIVATE_KEY_LENGTH = 32),
        (r.SIGNATURE_LENGTH = 64),
        (r.ADDRESS_LENGTH = 26),
        (r.MAIN_NET_CHAIN_ID = 87),
        (r.TEST_NET_CHAIN_ID = 84));
    },
    4824: function (e, r, t) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(r, "__esModule", { value: !0 });
        var a = n(t(3831)),
          o = t(6732),
          i = t(3459),
          s = function (e) {
            return i.stringToBytes(a.default.getBytesSync(e), "raw");
          },
          u = function () {
            try {
              new e(1);
            } catch (r) {
              throw new Error(
                "Buffer not supported in this environment. Use Node.js or Browserify for browser support.",
              );
            }
          };
        ((r.random = function (t, n) {
          switch (n) {
            case "Array8":
              return Array.from(s(t));
            case "Array16":
              return Array.from(r.random(t, "Uint16Array"));
            case "Array32":
              return Array.from(r.random(t, "Uint32Array"));
            case "Buffer":
              return (u(), e.from(s(t)));
            case "Uint8Array":
              return s(t);
            case "Uint16Array":
              return new Uint16Array(t).map(function (e) {
                return s(2).reduce(function (e, r, t) {
                  return e | (r << (8 * (1 - t)));
                }, 0);
              });
            case "Uint32Array":
              return new Uint32Array(t).map(function (e) {
                return s(4).reduce(function (e, r, t) {
                  return e | (r << (8 * (1 - t)));
                }, 0);
              });
            default:
              throw new Error(n + " is unsupported.");
          }
        }),
          (r.randomBytes = function (e) {
            return r.random(e, "Uint8Array");
          }),
          (r.randomSeed = function (e) {
            return (
              void 0 === e && (e = 15),
              r
                .random(e, "Array32")
                .map(function (e) {
                  return o.seedWordsList[e % o.seedWordsList.length];
                })
                .join(" ")
            );
          }));
      }).call(this, t(2).Buffer);
    },
    4825: function (e, r, t) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = t(2921),
        o = n(t(10702)),
        i = t(3460),
        s = t(3459);
      ((r.base64Decode = function (e) {
        return s.stringToBytes(a.decode64(e), "raw");
      }),
        (r.base64Encode = function (e) {
          return a.encode64(s.bytesToString(i._fromIn(e), "raw"));
        }),
        (r.base58Decode = function (e) {
          return o.default.decode(e);
        }),
        (r.base58Encode = function (e) {
          return o.default.encode(i._fromIn(e));
        }),
        (r.base16Decode = function (e) {
          return s.stringToBytes(a.hexToBytes(e), "raw");
        }),
        (r.base16Encode = function (e) {
          return a.bytesToHex(s.bytesToString(i._fromIn(e), "raw"));
        }));
    },
    4826: function (e, r, t) {
      "use strict";
      r.__esModule = !0;
      var n = Object.create(null),
        a = function (e) {
          var r,
            t = new Float64Array(16);
          if (e) for (r = 0; r < e.length; r++) t[r] = e[r];
          return t;
        },
        o = (new Uint8Array(16), new Uint8Array(32));
      o[0] = 9;
      var i = a(),
        s = a([1]),
        u = a([56129, 1]),
        c = a([
          30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
          16505, 36039, 65139, 11119, 27886, 20995,
        ]),
        l = a([
          61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
          33010, 6542, 64743, 22239, 55772, 9222,
        ]),
        f = a([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        d = a([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]),
        h = a([
          41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
          153, 11085, 57099, 20417, 9344, 11139,
        ]);
      function y(e, r, t, n) {
        ((e[r] = (t >> 24) & 255),
          (e[r + 1] = (t >> 16) & 255),
          (e[r + 2] = (t >> 8) & 255),
          (e[r + 3] = 255 & t),
          (e[r + 4] = (n >> 24) & 255),
          (e[r + 5] = (n >> 16) & 255),
          (e[r + 6] = (n >> 8) & 255),
          (e[r + 7] = 255 & n));
      }
      function p(e, r, t, n, a) {
        var o,
          i = 0;
        for (o = 0; o < a; o++) i |= e[r + o] ^ t[n + o];
        return (1 & ((i - 1) >>> 8)) - 1;
      }
      function g(e, r, t, n) {
        return p(e, r, t, n, 32);
      }
      function m(e, r) {
        for (var t = 0; t < 16; t++) e[t] = 0 | r[t];
      }
      function b(e) {
        var r,
          t,
          n = 1;
        for (r = 0; r < 16; r++)
          ((t = e[r] + n + 65535),
            (n = Math.floor(t / 65536)),
            (e[r] = t - 65536 * n));
        e[0] += n - 1 + 37 * (n - 1);
      }
      function v(e, r, t) {
        for (var n, a = ~(t - 1), o = 0; o < 16; o++)
          ((n = a & (e[o] ^ r[o])), (e[o] ^= n), (r[o] ^= n));
      }
      function w(e, r) {
        var t,
          n,
          o,
          i = a(),
          s = a();
        for (t = 0; t < 16; t++) s[t] = r[t];
        for (b(s), b(s), b(s), n = 0; n < 2; n++) {
          for (i[0] = s[0] - 65517, t = 1; t < 15; t++)
            ((i[t] = s[t] - 65535 - ((i[t - 1] >> 16) & 1)),
              (i[t - 1] &= 65535));
          ((i[15] = s[15] - 32767 - ((i[14] >> 16) & 1)),
            (o = (i[15] >> 16) & 1),
            (i[14] &= 65535),
            v(s, i, 1 - o));
        }
        for (t = 0; t < 16; t++)
          ((e[2 * t] = 255 & s[t]), (e[2 * t + 1] = s[t] >> 8));
      }
      function k(e, r) {
        var t = new Uint8Array(32),
          n = new Uint8Array(32);
        return (w(t, e), w(n, r), g(t, 0, n, 0));
      }
      function _(e) {
        var r = new Uint8Array(32);
        return (w(r, e), 1 & r[0]);
      }
      function A(e, r) {
        for (var t = 0; t < 16; t++) e[t] = r[2 * t] + (r[2 * t + 1] << 8);
        e[15] &= 32767;
      }
      function S(e, r, t) {
        for (var n = 0; n < 16; n++) e[n] = r[n] + t[n];
      }
      function B(e, r, t) {
        for (var n = 0; n < 16; n++) e[n] = r[n] - t[n];
      }
      function E(e, r, t) {
        var n,
          a,
          o = 0,
          i = 0,
          s = 0,
          u = 0,
          c = 0,
          l = 0,
          f = 0,
          d = 0,
          h = 0,
          y = 0,
          p = 0,
          g = 0,
          m = 0,
          b = 0,
          v = 0,
          w = 0,
          k = 0,
          _ = 0,
          A = 0,
          S = 0,
          B = 0,
          E = 0,
          P = 0,
          T = 0,
          I = 0,
          j = 0,
          M = 0,
          K = 0,
          U = 0,
          x = 0,
          C = 0,
          D = t[0],
          O = t[1],
          N = t[2],
          z = t[3],
          H = t[4],
          q = t[5],
          F = t[6],
          L = t[7],
          W = t[8],
          R = t[9],
          V = t[10],
          G = t[11],
          J = t[12],
          Y = t[13],
          Q = t[14],
          X = t[15];
        ((n = r[0]),
          (o += n * D),
          (i += n * O),
          (s += n * N),
          (u += n * z),
          (c += n * H),
          (l += n * q),
          (f += n * F),
          (d += n * L),
          (h += n * W),
          (y += n * R),
          (p += n * V),
          (g += n * G),
          (m += n * J),
          (b += n * Y),
          (v += n * Q),
          (w += n * X),
          (n = r[1]),
          (i += n * D),
          (s += n * O),
          (u += n * N),
          (c += n * z),
          (l += n * H),
          (f += n * q),
          (d += n * F),
          (h += n * L),
          (y += n * W),
          (p += n * R),
          (g += n * V),
          (m += n * G),
          (b += n * J),
          (v += n * Y),
          (w += n * Q),
          (k += n * X),
          (n = r[2]),
          (s += n * D),
          (u += n * O),
          (c += n * N),
          (l += n * z),
          (f += n * H),
          (d += n * q),
          (h += n * F),
          (y += n * L),
          (p += n * W),
          (g += n * R),
          (m += n * V),
          (b += n * G),
          (v += n * J),
          (w += n * Y),
          (k += n * Q),
          (_ += n * X),
          (n = r[3]),
          (u += n * D),
          (c += n * O),
          (l += n * N),
          (f += n * z),
          (d += n * H),
          (h += n * q),
          (y += n * F),
          (p += n * L),
          (g += n * W),
          (m += n * R),
          (b += n * V),
          (v += n * G),
          (w += n * J),
          (k += n * Y),
          (_ += n * Q),
          (A += n * X),
          (n = r[4]),
          (c += n * D),
          (l += n * O),
          (f += n * N),
          (d += n * z),
          (h += n * H),
          (y += n * q),
          (p += n * F),
          (g += n * L),
          (m += n * W),
          (b += n * R),
          (v += n * V),
          (w += n * G),
          (k += n * J),
          (_ += n * Y),
          (A += n * Q),
          (S += n * X),
          (n = r[5]),
          (l += n * D),
          (f += n * O),
          (d += n * N),
          (h += n * z),
          (y += n * H),
          (p += n * q),
          (g += n * F),
          (m += n * L),
          (b += n * W),
          (v += n * R),
          (w += n * V),
          (k += n * G),
          (_ += n * J),
          (A += n * Y),
          (S += n * Q),
          (B += n * X),
          (n = r[6]),
          (f += n * D),
          (d += n * O),
          (h += n * N),
          (y += n * z),
          (p += n * H),
          (g += n * q),
          (m += n * F),
          (b += n * L),
          (v += n * W),
          (w += n * R),
          (k += n * V),
          (_ += n * G),
          (A += n * J),
          (S += n * Y),
          (B += n * Q),
          (E += n * X),
          (n = r[7]),
          (d += n * D),
          (h += n * O),
          (y += n * N),
          (p += n * z),
          (g += n * H),
          (m += n * q),
          (b += n * F),
          (v += n * L),
          (w += n * W),
          (k += n * R),
          (_ += n * V),
          (A += n * G),
          (S += n * J),
          (B += n * Y),
          (E += n * Q),
          (P += n * X),
          (n = r[8]),
          (h += n * D),
          (y += n * O),
          (p += n * N),
          (g += n * z),
          (m += n * H),
          (b += n * q),
          (v += n * F),
          (w += n * L),
          (k += n * W),
          (_ += n * R),
          (A += n * V),
          (S += n * G),
          (B += n * J),
          (E += n * Y),
          (P += n * Q),
          (T += n * X),
          (n = r[9]),
          (y += n * D),
          (p += n * O),
          (g += n * N),
          (m += n * z),
          (b += n * H),
          (v += n * q),
          (w += n * F),
          (k += n * L),
          (_ += n * W),
          (A += n * R),
          (S += n * V),
          (B += n * G),
          (E += n * J),
          (P += n * Y),
          (T += n * Q),
          (I += n * X),
          (n = r[10]),
          (p += n * D),
          (g += n * O),
          (m += n * N),
          (b += n * z),
          (v += n * H),
          (w += n * q),
          (k += n * F),
          (_ += n * L),
          (A += n * W),
          (S += n * R),
          (B += n * V),
          (E += n * G),
          (P += n * J),
          (T += n * Y),
          (I += n * Q),
          (j += n * X),
          (n = r[11]),
          (g += n * D),
          (m += n * O),
          (b += n * N),
          (v += n * z),
          (w += n * H),
          (k += n * q),
          (_ += n * F),
          (A += n * L),
          (S += n * W),
          (B += n * R),
          (E += n * V),
          (P += n * G),
          (T += n * J),
          (I += n * Y),
          (j += n * Q),
          (M += n * X),
          (n = r[12]),
          (m += n * D),
          (b += n * O),
          (v += n * N),
          (w += n * z),
          (k += n * H),
          (_ += n * q),
          (A += n * F),
          (S += n * L),
          (B += n * W),
          (E += n * R),
          (P += n * V),
          (T += n * G),
          (I += n * J),
          (j += n * Y),
          (M += n * Q),
          (K += n * X),
          (n = r[13]),
          (b += n * D),
          (v += n * O),
          (w += n * N),
          (k += n * z),
          (_ += n * H),
          (A += n * q),
          (S += n * F),
          (B += n * L),
          (E += n * W),
          (P += n * R),
          (T += n * V),
          (I += n * G),
          (j += n * J),
          (M += n * Y),
          (K += n * Q),
          (U += n * X),
          (n = r[14]),
          (v += n * D),
          (w += n * O),
          (k += n * N),
          (_ += n * z),
          (A += n * H),
          (S += n * q),
          (B += n * F),
          (E += n * L),
          (P += n * W),
          (T += n * R),
          (I += n * V),
          (j += n * G),
          (M += n * J),
          (K += n * Y),
          (U += n * Q),
          (x += n * X),
          (n = r[15]),
          (w += n * D),
          (k += n * O),
          (_ += n * N),
          (A += n * z),
          (S += n * H),
          (B += n * q),
          (E += n * F),
          (P += n * L),
          (T += n * W),
          (I += n * R),
          (j += n * V),
          (M += n * G),
          (K += n * J),
          (U += n * Y),
          (x += n * Q),
          (C += n * X),
          (o += 38 * k),
          (i += 38 * _),
          (s += 38 * A),
          (u += 38 * S),
          (c += 38 * B),
          (l += 38 * E),
          (f += 38 * P),
          (d += 38 * T),
          (h += 38 * I),
          (y += 38 * j),
          (p += 38 * M),
          (g += 38 * K),
          (m += 38 * U),
          (b += 38 * x),
          (v += 38 * C),
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
          (n = u + a + 65535),
          (a = Math.floor(n / 65536)),
          (u = n - 65536 * a),
          (n = c + a + 65535),
          (a = Math.floor(n / 65536)),
          (c = n - 65536 * a),
          (n = l + a + 65535),
          (a = Math.floor(n / 65536)),
          (l = n - 65536 * a),
          (n = f + a + 65535),
          (a = Math.floor(n / 65536)),
          (f = n - 65536 * a),
          (n = d + a + 65535),
          (a = Math.floor(n / 65536)),
          (d = n - 65536 * a),
          (n = h + a + 65535),
          (a = Math.floor(n / 65536)),
          (h = n - 65536 * a),
          (n = y + a + 65535),
          (a = Math.floor(n / 65536)),
          (y = n - 65536 * a),
          (n = p + a + 65535),
          (a = Math.floor(n / 65536)),
          (p = n - 65536 * a),
          (n = g + a + 65535),
          (a = Math.floor(n / 65536)),
          (g = n - 65536 * a),
          (n = m + a + 65535),
          (a = Math.floor(n / 65536)),
          (m = n - 65536 * a),
          (n = b + a + 65535),
          (a = Math.floor(n / 65536)),
          (b = n - 65536 * a),
          (n = v + a + 65535),
          (a = Math.floor(n / 65536)),
          (v = n - 65536 * a),
          (n = w + a + 65535),
          (a = Math.floor(n / 65536)),
          (w = n - 65536 * a),
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
          (n = u + a + 65535),
          (a = Math.floor(n / 65536)),
          (u = n - 65536 * a),
          (n = c + a + 65535),
          (a = Math.floor(n / 65536)),
          (c = n - 65536 * a),
          (n = l + a + 65535),
          (a = Math.floor(n / 65536)),
          (l = n - 65536 * a),
          (n = f + a + 65535),
          (a = Math.floor(n / 65536)),
          (f = n - 65536 * a),
          (n = d + a + 65535),
          (a = Math.floor(n / 65536)),
          (d = n - 65536 * a),
          (n = h + a + 65535),
          (a = Math.floor(n / 65536)),
          (h = n - 65536 * a),
          (n = y + a + 65535),
          (a = Math.floor(n / 65536)),
          (y = n - 65536 * a),
          (n = p + a + 65535),
          (a = Math.floor(n / 65536)),
          (p = n - 65536 * a),
          (n = g + a + 65535),
          (a = Math.floor(n / 65536)),
          (g = n - 65536 * a),
          (n = m + a + 65535),
          (a = Math.floor(n / 65536)),
          (m = n - 65536 * a),
          (n = b + a + 65535),
          (a = Math.floor(n / 65536)),
          (b = n - 65536 * a),
          (n = v + a + 65535),
          (a = Math.floor(n / 65536)),
          (v = n - 65536 * a),
          (n = w + a + 65535),
          (a = Math.floor(n / 65536)),
          (w = n - 65536 * a),
          (o += a - 1 + 37 * (a - 1)),
          (e[0] = o),
          (e[1] = i),
          (e[2] = s),
          (e[3] = u),
          (e[4] = c),
          (e[5] = l),
          (e[6] = f),
          (e[7] = d),
          (e[8] = h),
          (e[9] = y),
          (e[10] = p),
          (e[11] = g),
          (e[12] = m),
          (e[13] = b),
          (e[14] = v),
          (e[15] = w));
      }
      function P(e, r) {
        E(e, r, r);
      }
      function T(e, r) {
        var t,
          n = a();
        for (t = 0; t < 16; t++) n[t] = r[t];
        for (t = 253; t >= 0; t--) (P(n, n), 2 !== t && 4 !== t && E(n, n, r));
        for (t = 0; t < 16; t++) e[t] = n[t];
      }
      function I(e, r) {
        var t,
          n = a();
        for (t = 0; t < 16; t++) n[t] = r[t];
        for (t = 250; t >= 0; t--) (P(n, n), 1 !== t && E(n, n, r));
        for (t = 0; t < 16; t++) e[t] = n[t];
      }
      function j(e, r, t) {
        var n,
          o,
          i = new Uint8Array(32),
          s = new Float64Array(80),
          c = a(),
          l = a(),
          f = a(),
          d = a(),
          h = a(),
          y = a();
        for (o = 0; o < 31; o++) i[o] = r[o];
        for (
          i[31] = (127 & r[31]) | 64, i[0] &= 248, A(s, t), o = 0;
          o < 16;
          o++
        )
          ((l[o] = s[o]), (d[o] = c[o] = f[o] = 0));
        for (c[0] = d[0] = 1, o = 254; o >= 0; --o)
          ((n = (i[o >>> 3] >>> (7 & o)) & 1),
            v(c, l, n),
            v(f, d, n),
            S(h, c, f),
            B(c, c, f),
            S(f, l, d),
            B(l, l, d),
            P(d, h),
            P(y, c),
            E(c, f, c),
            E(f, l, h),
            S(h, c, f),
            B(c, c, f),
            P(l, c),
            B(f, d, y),
            E(c, f, u),
            S(c, c, d),
            E(f, f, c),
            E(c, d, y),
            E(d, l, s),
            P(l, h),
            v(c, l, n),
            v(f, d, n));
        for (o = 0; o < 16; o++)
          ((s[o + 16] = c[o]),
            (s[o + 32] = f[o]),
            (s[o + 48] = l[o]),
            (s[o + 64] = d[o]));
        var p = s.subarray(32),
          g = s.subarray(16);
        return (T(p, p), E(g, g, p), w(e, g), 0);
      }
      function M(e, r) {
        return j(e, r, o);
      }
      var K = [
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ];
      function U(e, r, t, n) {
        var a,
          o,
          i,
          s,
          u,
          c,
          l,
          f,
          d,
          h,
          y,
          p,
          g,
          m,
          b,
          v,
          w,
          k,
          _,
          A,
          S,
          B,
          E,
          P,
          T,
          I,
          j = new Int32Array(16),
          M = new Int32Array(16),
          U = e[0],
          x = e[1],
          C = e[2],
          D = e[3],
          O = e[4],
          N = e[5],
          z = e[6],
          H = e[7],
          q = r[0],
          F = r[1],
          L = r[2],
          W = r[3],
          R = r[4],
          V = r[5],
          G = r[6],
          J = r[7],
          Y = 0;
        while (n >= 128) {
          for (_ = 0; _ < 16; _++)
            ((A = 8 * _ + Y),
              (j[_] =
                (t[A + 0] << 24) |
                (t[A + 1] << 16) |
                (t[A + 2] << 8) |
                t[A + 3]),
              (M[_] =
                (t[A + 4] << 24) |
                (t[A + 5] << 16) |
                (t[A + 6] << 8) |
                t[A + 7]));
          for (_ = 0; _ < 80; _++)
            if (
              ((a = U),
              (o = x),
              (i = C),
              (s = D),
              (u = O),
              (c = N),
              (l = z),
              (f = H),
              (d = q),
              (h = F),
              (y = L),
              (p = W),
              (g = R),
              (m = V),
              (b = G),
              (v = J),
              (S = H),
              (B = J),
              (E = 65535 & B),
              (P = B >>> 16),
              (T = 65535 & S),
              (I = S >>> 16),
              (S =
                ((O >>> 14) | (R << 18)) ^
                ((O >>> 18) | (R << 14)) ^
                ((R >>> 9) | (O << 23))),
              (B =
                ((R >>> 14) | (O << 18)) ^
                ((R >>> 18) | (O << 14)) ^
                ((O >>> 9) | (R << 23))),
              (E += 65535 & B),
              (P += B >>> 16),
              (T += 65535 & S),
              (I += S >>> 16),
              (S = (O & N) ^ (~O & z)),
              (B = (R & V) ^ (~R & G)),
              (E += 65535 & B),
              (P += B >>> 16),
              (T += 65535 & S),
              (I += S >>> 16),
              (S = K[2 * _]),
              (B = K[2 * _ + 1]),
              (E += 65535 & B),
              (P += B >>> 16),
              (T += 65535 & S),
              (I += S >>> 16),
              (S = j[_ % 16]),
              (B = M[_ % 16]),
              (E += 65535 & B),
              (P += B >>> 16),
              (T += 65535 & S),
              (I += S >>> 16),
              (P += E >>> 16),
              (T += P >>> 16),
              (I += T >>> 16),
              (w = (65535 & T) | (I << 16)),
              (k = (65535 & E) | (P << 16)),
              (S = w),
              (B = k),
              (E = 65535 & B),
              (P = B >>> 16),
              (T = 65535 & S),
              (I = S >>> 16),
              (S =
                ((U >>> 28) | (q << 4)) ^
                ((q >>> 2) | (U << 30)) ^
                ((q >>> 7) | (U << 25))),
              (B =
                ((q >>> 28) | (U << 4)) ^
                ((U >>> 2) | (q << 30)) ^
                ((U >>> 7) | (q << 25))),
              (E += 65535 & B),
              (P += B >>> 16),
              (T += 65535 & S),
              (I += S >>> 16),
              (S = (U & x) ^ (U & C) ^ (x & C)),
              (B = (q & F) ^ (q & L) ^ (F & L)),
              (E += 65535 & B),
              (P += B >>> 16),
              (T += 65535 & S),
              (I += S >>> 16),
              (P += E >>> 16),
              (T += P >>> 16),
              (I += T >>> 16),
              (f = (65535 & T) | (I << 16)),
              (v = (65535 & E) | (P << 16)),
              (S = s),
              (B = p),
              (E = 65535 & B),
              (P = B >>> 16),
              (T = 65535 & S),
              (I = S >>> 16),
              (S = w),
              (B = k),
              (E += 65535 & B),
              (P += B >>> 16),
              (T += 65535 & S),
              (I += S >>> 16),
              (P += E >>> 16),
              (T += P >>> 16),
              (I += T >>> 16),
              (s = (65535 & T) | (I << 16)),
              (p = (65535 & E) | (P << 16)),
              (x = a),
              (C = o),
              (D = i),
              (O = s),
              (N = u),
              (z = c),
              (H = l),
              (U = f),
              (F = d),
              (L = h),
              (W = y),
              (R = p),
              (V = g),
              (G = m),
              (J = b),
              (q = v),
              _ % 16 === 15)
            )
              for (A = 0; A < 16; A++)
                ((S = j[A]),
                  (B = M[A]),
                  (E = 65535 & B),
                  (P = B >>> 16),
                  (T = 65535 & S),
                  (I = S >>> 16),
                  (S = j[(A + 9) % 16]),
                  (B = M[(A + 9) % 16]),
                  (E += 65535 & B),
                  (P += B >>> 16),
                  (T += 65535 & S),
                  (I += S >>> 16),
                  (w = j[(A + 1) % 16]),
                  (k = M[(A + 1) % 16]),
                  (S =
                    ((w >>> 1) | (k << 31)) ^
                    ((w >>> 8) | (k << 24)) ^
                    (w >>> 7)),
                  (B =
                    ((k >>> 1) | (w << 31)) ^
                    ((k >>> 8) | (w << 24)) ^
                    ((k >>> 7) | (w << 25))),
                  (E += 65535 & B),
                  (P += B >>> 16),
                  (T += 65535 & S),
                  (I += S >>> 16),
                  (w = j[(A + 14) % 16]),
                  (k = M[(A + 14) % 16]),
                  (S =
                    ((w >>> 19) | (k << 13)) ^
                    ((k >>> 29) | (w << 3)) ^
                    (w >>> 6)),
                  (B =
                    ((k >>> 19) | (w << 13)) ^
                    ((w >>> 29) | (k << 3)) ^
                    ((k >>> 6) | (w << 26))),
                  (E += 65535 & B),
                  (P += B >>> 16),
                  (T += 65535 & S),
                  (I += S >>> 16),
                  (P += E >>> 16),
                  (T += P >>> 16),
                  (I += T >>> 16),
                  (j[A] = (65535 & T) | (I << 16)),
                  (M[A] = (65535 & E) | (P << 16)));
          ((S = U),
            (B = q),
            (E = 65535 & B),
            (P = B >>> 16),
            (T = 65535 & S),
            (I = S >>> 16),
            (S = e[0]),
            (B = r[0]),
            (E += 65535 & B),
            (P += B >>> 16),
            (T += 65535 & S),
            (I += S >>> 16),
            (P += E >>> 16),
            (T += P >>> 16),
            (I += T >>> 16),
            (e[0] = U = (65535 & T) | (I << 16)),
            (r[0] = q = (65535 & E) | (P << 16)),
            (S = x),
            (B = F),
            (E = 65535 & B),
            (P = B >>> 16),
            (T = 65535 & S),
            (I = S >>> 16),
            (S = e[1]),
            (B = r[1]),
            (E += 65535 & B),
            (P += B >>> 16),
            (T += 65535 & S),
            (I += S >>> 16),
            (P += E >>> 16),
            (T += P >>> 16),
            (I += T >>> 16),
            (e[1] = x = (65535 & T) | (I << 16)),
            (r[1] = F = (65535 & E) | (P << 16)),
            (S = C),
            (B = L),
            (E = 65535 & B),
            (P = B >>> 16),
            (T = 65535 & S),
            (I = S >>> 16),
            (S = e[2]),
            (B = r[2]),
            (E += 65535 & B),
            (P += B >>> 16),
            (T += 65535 & S),
            (I += S >>> 16),
            (P += E >>> 16),
            (T += P >>> 16),
            (I += T >>> 16),
            (e[2] = C = (65535 & T) | (I << 16)),
            (r[2] = L = (65535 & E) | (P << 16)),
            (S = D),
            (B = W),
            (E = 65535 & B),
            (P = B >>> 16),
            (T = 65535 & S),
            (I = S >>> 16),
            (S = e[3]),
            (B = r[3]),
            (E += 65535 & B),
            (P += B >>> 16),
            (T += 65535 & S),
            (I += S >>> 16),
            (P += E >>> 16),
            (T += P >>> 16),
            (I += T >>> 16),
            (e[3] = D = (65535 & T) | (I << 16)),
            (r[3] = W = (65535 & E) | (P << 16)),
            (S = O),
            (B = R),
            (E = 65535 & B),
            (P = B >>> 16),
            (T = 65535 & S),
            (I = S >>> 16),
            (S = e[4]),
            (B = r[4]),
            (E += 65535 & B),
            (P += B >>> 16),
            (T += 65535 & S),
            (I += S >>> 16),
            (P += E >>> 16),
            (T += P >>> 16),
            (I += T >>> 16),
            (e[4] = O = (65535 & T) | (I << 16)),
            (r[4] = R = (65535 & E) | (P << 16)),
            (S = N),
            (B = V),
            (E = 65535 & B),
            (P = B >>> 16),
            (T = 65535 & S),
            (I = S >>> 16),
            (S = e[5]),
            (B = r[5]),
            (E += 65535 & B),
            (P += B >>> 16),
            (T += 65535 & S),
            (I += S >>> 16),
            (P += E >>> 16),
            (T += P >>> 16),
            (I += T >>> 16),
            (e[5] = N = (65535 & T) | (I << 16)),
            (r[5] = V = (65535 & E) | (P << 16)),
            (S = z),
            (B = G),
            (E = 65535 & B),
            (P = B >>> 16),
            (T = 65535 & S),
            (I = S >>> 16),
            (S = e[6]),
            (B = r[6]),
            (E += 65535 & B),
            (P += B >>> 16),
            (T += 65535 & S),
            (I += S >>> 16),
            (P += E >>> 16),
            (T += P >>> 16),
            (I += T >>> 16),
            (e[6] = z = (65535 & T) | (I << 16)),
            (r[6] = G = (65535 & E) | (P << 16)),
            (S = H),
            (B = J),
            (E = 65535 & B),
            (P = B >>> 16),
            (T = 65535 & S),
            (I = S >>> 16),
            (S = e[7]),
            (B = r[7]),
            (E += 65535 & B),
            (P += B >>> 16),
            (T += 65535 & S),
            (I += S >>> 16),
            (P += E >>> 16),
            (T += P >>> 16),
            (I += T >>> 16),
            (e[7] = H = (65535 & T) | (I << 16)),
            (r[7] = J = (65535 & E) | (P << 16)),
            (Y += 128),
            (n -= 128));
        }
        return n;
      }
      function x(e, r, t) {
        var n,
          a = new Int32Array(8),
          o = new Int32Array(8),
          i = new Uint8Array(256),
          s = t;
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
            U(a, o, r, t),
            t %= 128,
            n = 0;
          n < t;
          n++
        )
          i[n] = r[s - t + n];
        for (
          i[t] = 128,
            t = 256 - 128 * (t < 112 ? 1 : 0),
            i[t - 9] = 0,
            y(i, t - 8, (s / 536870912) | 0, s << 3),
            U(a, o, i, t),
            n = 0;
          n < 8;
          n++
        )
          y(e, 8 * n, a[n], o[n]);
        return 0;
      }
      function C(e, r) {
        var t = a(),
          n = a(),
          o = a(),
          i = a(),
          s = a(),
          u = a(),
          c = a(),
          f = a(),
          d = a();
        (B(t, e[1], e[0]),
          B(d, r[1], r[0]),
          E(t, t, d),
          S(n, e[0], e[1]),
          S(d, r[0], r[1]),
          E(n, n, d),
          E(o, e[3], r[3]),
          E(o, o, l),
          E(i, e[2], r[2]),
          S(i, i, i),
          B(s, n, t),
          B(u, i, o),
          S(c, i, o),
          S(f, n, t),
          E(e[0], s, u),
          E(e[1], f, c),
          E(e[2], c, u),
          E(e[3], s, f));
      }
      function D(e, r, t) {
        for (var n = 0; n < 4; n++) v(e[n], r[n], t);
      }
      function O(e, r) {
        var t = a(),
          n = a(),
          o = a();
        (T(o, r[2]),
          E(t, r[0], o),
          E(n, r[1], o),
          w(e, n),
          (e[31] ^= _(t) << 7));
      }
      function N(e, r, t) {
        var n, a;
        for (
          m(e[0], i), m(e[1], s), m(e[2], s), m(e[3], i), a = 255;
          a >= 0;
          --a
        )
          ((n = (t[(a / 8) | 0] >> (7 & a)) & 1),
            D(e, r, n),
            C(r, e),
            C(e, e),
            D(e, r, n));
      }
      function z(e, r) {
        var t = [a(), a(), a(), a()];
        (m(t[0], f), m(t[1], d), m(t[2], s), E(t[3], f, d), N(e, t, r));
      }
      var H = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function q(e, r) {
        var t, n, a, o;
        for (n = 63; n >= 32; --n) {
          for (t = 0, a = n - 32, o = n - 12; a < o; ++a)
            ((r[a] += t - 16 * r[n] * H[a - (n - 32)]),
              (t = (r[a] + 128) >> 8),
              (r[a] -= 256 * t));
          ((r[a] += t), (r[n] = 0));
        }
        for (t = 0, a = 0; a < 32; a++)
          ((r[a] += t - (r[31] >> 4) * H[a]), (t = r[a] >> 8), (r[a] &= 255));
        for (a = 0; a < 32; a++) r[a] -= t * H[a];
        for (n = 0; n < 32; n++) ((r[n + 1] += r[n] >> 8), (e[n] = 255 & r[n]));
      }
      function F(e) {
        var r,
          t = new Float64Array(64);
        for (r = 0; r < 64; r++) t[r] = e[r];
        for (r = 0; r < 64; r++) e[r] = 0;
        q(e, t);
      }
      function L(e, r, t, n) {
        new Uint8Array(64);
        var o,
          i,
          s = new Uint8Array(64),
          u = new Uint8Array(64),
          c = new Float64Array(64),
          l = [a(), a(), a(), a()];
        for (o = 0; o < t; o++) e[64 + o] = r[o];
        for (o = 0; o < 32; o++) e[32 + o] = n[o];
        for (
          x(u, e.subarray(32), t + 32), F(u), z(l, u), O(e, l), o = 0;
          o < 32;
          o++
        )
          e[o + 32] = n[32 + o];
        for (x(s, e, t + 64), F(s), o = 0; o < 64; o++) c[o] = 0;
        for (o = 0; o < 32; o++) c[o] = u[o];
        for (o = 0; o < 32; o++)
          for (i = 0; i < 32; i++) c[o + i] += s[o] * n[i];
        return (q(e.subarray(32), c), t + 64);
      }
      function W(e, r, t, n, o) {
        new Uint8Array(64);
        var i,
          s,
          u = new Uint8Array(64),
          c = new Uint8Array(64),
          l = new Float64Array(64),
          f = [a(), a(), a(), a()];
        for (e[0] = 254, i = 1; i < 32; i++) e[i] = 255;
        for (i = 0; i < 32; i++) e[32 + i] = n[i];
        for (i = 0; i < t; i++) e[64 + i] = r[i];
        for (i = 0; i < 64; i++) e[t + 64 + i] = o[i];
        for (x(c, e, t + 128), F(c), z(f, c), O(e, f), i = 0; i < 32; i++)
          e[i + 32] = n[32 + i];
        for (x(u, e, t + 64), F(u), i = 0; i < 64; i++) e[t + 64 + i] = 0;
        for (i = 0; i < 64; i++) l[i] = 0;
        for (i = 0; i < 32; i++) l[i] = c[i];
        for (i = 0; i < 32; i++)
          for (s = 0; s < 32; s++) l[i + s] += u[i] * n[s];
        return (q(e.subarray(32, t + 64), l), t + 64);
      }
      function R(e, r, t, n, o) {
        for (
          var i = new Uint8Array(64), s = [a(), a(), a(), a()], u = 0;
          u < 32;
          u++
        )
          i[u] = n[u];
        ((i[0] &= 248),
          (i[31] &= 127),
          (i[31] |= 64),
          z(s, i),
          O(i.subarray(32), s));
        var c,
          l = 128 & i[63];
        return ((c = o ? W(e, r, t, i, o) : L(e, r, t, i)), (e[63] |= l), c);
      }
      function V(e, r) {
        var t = a(),
          n = a(),
          o = a(),
          u = a(),
          l = a(),
          f = a(),
          d = a();
        return (
          m(e[2], s),
          A(e[1], r),
          P(o, e[1]),
          E(u, o, c),
          B(o, o, e[2]),
          S(u, e[2], u),
          P(l, u),
          P(f, l),
          E(d, f, l),
          E(t, d, o),
          E(t, t, u),
          I(t, t),
          E(t, t, o),
          E(t, t, u),
          E(t, t, u),
          E(e[0], t, u),
          P(n, e[0]),
          E(n, n, u),
          k(n, o) && E(e[0], e[0], h),
          P(n, e[0]),
          E(n, n, u),
          k(n, o)
            ? -1
            : (_(e[0]) === r[31] >> 7 && B(e[0], i, e[0]),
              E(e[3], e[0], e[1]),
              0)
        );
      }
      function G(e, r, t, n) {
        var o,
          i,
          s = new Uint8Array(32),
          u = new Uint8Array(64),
          c = [a(), a(), a(), a()],
          l = [a(), a(), a(), a()];
        if (((i = -1), t < 64)) return -1;
        if (V(l, n)) return -1;
        for (o = 0; o < t; o++) e[o] = r[o];
        for (o = 0; o < 32; o++) e[o + 32] = n[o];
        if (
          (x(u, e, t),
          F(u),
          N(c, l, u),
          z(l, r.subarray(32)),
          C(c, l),
          O(s, c),
          (t -= 64),
          g(r, 0, s, 0))
        ) {
          for (o = 0; o < t; o++) e[o] = 0;
          return -1;
        }
        for (o = 0; o < t; o++) e[o] = r[o + 64];
        return ((i = t), i);
      }
      function J(e) {
        var r = new Uint8Array(32),
          t = a(),
          n = a(),
          o = a();
        return (
          A(t, e),
          S(n, t, s),
          B(o, t, s),
          T(n, n),
          E(n, n, o),
          w(r, n),
          r
        );
      }
      function Y(e, r, t, n) {
        var a = J(n);
        return ((a[31] |= 128 & r[63]), (r[63] &= 127), G(e, r, t, a));
      }
      function Q() {
        for (var e, r, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        for (r = 0; r < arguments.length; r++)
          if (
            "[object Uint8Array]" !==
            (e = Object.prototype.toString.call(arguments[r]))
          )
            throw new TypeError("unexpected type " + e + ", use Uint8Array");
      }
      ((n.sharedKey = function (e, r) {
        if ((Q(r, e), 32 !== r.length))
          throw new Error("wrong public key length");
        if (32 !== e.length) throw new Error("wrong secret key length");
        var t = new Uint8Array(32);
        return (j(t, e, r), t);
      }),
        (n.signMessage = function (e, r, t) {
          if ((Q(r, e), 32 !== e.length))
            throw new Error("wrong secret key length");
          if (t) {
            if ((Q(t), 64 !== t.length))
              throw new Error("wrong random data length");
            var n = new Uint8Array(128 + r.length);
            return (
              R(n, r, r.length, e, t),
              new Uint8Array(n.subarray(0, 64 + r.length))
            );
          }
          var a = new Uint8Array(64 + r.length);
          return (R(a, r, r.length, e), a);
        }),
        (n.openMessage = function (e, r) {
          if ((Q(r, e), 32 !== e.length))
            throw new Error("wrong public key length");
          var t = new Uint8Array(r.length),
            n = Y(t, r, r.length, e);
          if (n < 0) return null;
          for (var a = new Uint8Array(n), o = 0; o < a.length; o++) a[o] = t[o];
          return a;
        }),
        (n.sign = function (e, r, t) {
          if ((Q(e, r), 32 !== e.length))
            throw new Error("wrong secret key length");
          if (t && (Q(t), 64 !== t.length))
            throw new Error("wrong random data length");
          var n = new Uint8Array((t ? 128 : 64) + r.length);
          R(n, r, r.length, e, t);
          for (var a = new Uint8Array(64), o = 0; o < a.length; o++)
            a[o] = n[o];
          return a;
        }),
        (n.verify = function (e, r, t) {
          if ((Q(r, t, e), 64 !== t.length))
            throw new Error("wrong signature length");
          if (32 !== e.length) throw new Error("wrong public key length");
          var n,
            a = new Uint8Array(64 + r.length),
            o = new Uint8Array(64 + r.length);
          for (n = 0; n < 64; n++) a[n] = t[n];
          for (n = 0; n < r.length; n++) a[n + 64] = r[n];
          return Y(o, a, a.length, e) >= 0;
        }),
        (n.generateKeyPair = function (e) {
          if ((Q(e), 32 !== e.length)) throw new Error("wrong seed length");
          for (
            var r = new Uint8Array(32), t = new Uint8Array(32), n = 0;
            n < 32;
            n++
          )
            r[n] = e[n];
          return (
            M(t, r),
            (r[0] &= 248),
            (r[31] &= 127),
            (r[31] |= 64),
            (t[31] &= 127),
            { public: t, private: r }
          );
        }),
        (r["default"] = n));
    },
    5597: function (e, r) {},
    5599: function (e, r, t) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = t(4565),
        o = t(6734),
        i = t(3950),
        s = t(3460),
        u = t(4564),
        c = t(5600),
        l = n(t(4826));
      ((r.seedWithNonce = function (e, r) {
        return { seed: o.Seed.toBinary(e).seed, nonce: r };
      }),
        (r.buildAddress = function (e, r) {
          void 0 === r && (r = a.MAIN_NET_CHAIN_ID);
          var t = [1, "string" === typeof r ? r.charCodeAt(0) : r],
            n = i._hashChain(e).slice(0, 20),
            o = u.concat(t, n),
            s = i._hashChain(o).slice(0, 4);
          return u.concat(o, s);
        }));
      var f = function (e, r) {
        var t = [0, 0, 0, 0];
        if (r && r > 0)
          for (var n = r, a = 3; a >= 0; a--)
            ((t[3 - a] = Math.floor(n / Math.pow(2, 8 * a))),
              (n %= Math.pow(2, 8 * a)));
        var o = u.concat(t, e),
          s = i._hashChain(o);
        return i.sha256(s);
      };
      ((r.keyPair = function (e) {
        var r = o.Seed.toBinary(e),
          t = r.seed,
          n = r.nonce,
          a = f(t, n),
          i = l.default.generateKeyPair(a);
        return { privateKey: i.private, publicKey: i.public };
      }),
        (r.address = function (e, t) {
          return (
            void 0 === t && (t = a.MAIN_NET_CHAIN_ID),
            c.isPublicKey(e)
              ? r.buildAddress(s._fromIn(e.publicKey), t)
              : r.address(r.keyPair(e), t)
          );
        }),
        (r.publicKey = function (e) {
          return c.isPrivateKey(e)
            ? l.default.generateKeyPair(s._fromIn(e.privateKey)).public
            : r.keyPair(e).publicKey;
        }),
        (r.privateKey = function (e) {
          return r.keyPair(e).privateKey;
        }));
    },
    5600: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.isPublicKey = function (e) {
          return void 0 !== e.publicKey;
        }),
        (r.isPrivateKey = function (e) {
          return void 0 !== e.privateKey;
        }));
    },
    5604: function (e, r, t) {
      "use strict";
      var n = function (e) {
        var r = { strict: !1 };
        void 0 !== e && null !== e && !0 === e.strict && (r.strict = !0);
        var t,
          n,
          a,
          o,
          i = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "\t",
          },
          s = function (e) {
            throw { name: "SyntaxError", message: e, at: t, text: a };
          },
          u = function (e) {
            return (
              e && e !== n && s("Expected '" + e + "' instead of '" + n + "'"),
              (n = a.charAt(t)),
              (t += 1),
              n
            );
          },
          c = function () {
            var r,
              t = "";
            "-" === n && ((t = "-"), u("-"));
            while (n >= "0" && n <= "9") ((t += n), u());
            if ("." === n) {
              t += ".";
              while (u() && n >= "0" && n <= "9") t += n;
            }
            if ("e" === n || "E" === n) {
              ((t += n), u(), ("-" !== n && "+" !== n) || ((t += n), u()));
              while (n >= "0" && n <= "9") ((t += n), u());
            }
            return (
              (r = +t),
              e && e.parse
                ? e.parse(t)
                : isFinite(r)
                  ? t.length > 15
                    ? t
                    : r
                  : void s("Bad number")
            );
          },
          l = function () {
            var e,
              r,
              t,
              a = "";
            if ('"' === n)
              while (u()) {
                if ('"' === n) return (u(), a);
                if ("\\" === n)
                  if ((u(), "u" === n)) {
                    for (t = 0, r = 0; r < 4; r += 1) {
                      if (((e = parseInt(u(), 16)), !isFinite(e))) break;
                      t = 16 * t + e;
                    }
                    a += String.fromCharCode(t);
                  } else {
                    if ("string" !== typeof i[n]) break;
                    a += i[n];
                  }
                else a += n;
              }
            s("Bad string");
          },
          f = function () {
            while (n && n <= " ") u();
          },
          d = function () {
            switch (n) {
              case "t":
                return (u("t"), u("r"), u("u"), u("e"), !0);
              case "f":
                return (u("f"), u("a"), u("l"), u("s"), u("e"), !1);
              case "n":
                return (u("n"), u("u"), u("l"), u("l"), null);
            }
            s("Unexpected '" + n + "'");
          },
          h = function () {
            var e = [];
            if ("[" === n) {
              if ((u("["), f(), "]" === n)) return (u("]"), e);
              while (n) {
                if ((e.push(o()), f(), "]" === n)) return (u("]"), e);
                (u(","), f());
              }
            }
            s("Bad array");
          },
          y = function () {
            var e,
              t = {};
            if ("{" === n) {
              if ((u("{"), f(), "}" === n)) return (u("}"), t);
              while (n) {
                if (
                  ((e = l()),
                  f(),
                  u(":"),
                  !0 === r.strict &&
                    Object.hasOwnProperty.call(t, e) &&
                    s('Duplicate key "' + e + '"'),
                  (t[e] = o()),
                  f(),
                  "}" === n)
                )
                  return (u("}"), t);
                (u(","), f());
              }
            }
            s("Bad object");
          };
        o = function () {
          switch ((f(), n)) {
            case "{":
              return y();
            case "[":
              return h();
            case '"':
              return l();
            case "-":
              return c();
            default:
              return n >= "0" && n <= "9" ? c() : d();
          }
        };
        var p,
          g,
          m,
          b =
            /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          v = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\",
          };
        function w(e) {
          return (
            (b.lastIndex = 0),
            b.test(e)
              ? '"' +
                e.replace(b, function (e) {
                  var r = v[e];
                  return "string" === typeof r
                    ? r
                    : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
              : '"' + e + '"'
          );
        }
        function k(r, t) {
          var n,
            a,
            o,
            i,
            s,
            u = p,
            c = t[r],
            l = e && e.isInstance && e.isInstance(c);
          switch (
            (l && !c.isFinite() && (c = null),
            l
              ? (c = e.stringify(c))
              : c &&
                "object" === typeof c &&
                "function" === typeof c.toJSON &&
                (c = c.toJSON(r)),
            "function" === typeof m && (c = m.call(t, r, c)),
            typeof c)
          ) {
            case "string":
              return l ? c : w(c);
            case "number":
              return isFinite(c) ? String(c) : "null";
            case "boolean":
              return String(c);
            case "object":
              if (!c) return "null";
              if (
                ((p += g),
                (s = []),
                "[object Array]" === Object.prototype.toString.apply(c))
              ) {
                for (i = c.length, n = 0; n < i; n += 1)
                  s[n] = k(n, c) || "null";
                return (
                  (o =
                    0 === s.length
                      ? "[]"
                      : p
                        ? "[\n" + p + s.join(",\n" + p) + "\n" + u + "]"
                        : "[" + s.join(",") + "]"),
                  (p = u),
                  o
                );
              }
              if (m && "object" === typeof m)
                for (i = m.length, n = 0; n < i; n += 1)
                  "string" === typeof m[n] &&
                    ((a = m[n]),
                    (o = k(a, c)),
                    o && s.push(w(a) + (p ? ": " : ":") + o));
              else
                for (a in c)
                  Object.prototype.hasOwnProperty.call(c, a) &&
                    ((o = k(a, c)), o && s.push(w(a) + (p ? ": " : ":") + o));
              return (
                (o =
                  0 === s.length
                    ? "{}"
                    : p
                      ? "{\n" + p + s.join(",\n" + p) + "\n" + u + "}"
                      : "{" + s.join(",") + "}"),
                (p = u),
                o
              );
          }
        }
        var _ = function (e, r, t) {
            var n;
            if (((p = ""), (g = ""), "number" === typeof t))
              for (n = 0; n < t; n += 1) g += " ";
            else "string" === typeof t && (g = t);
            if (
              ((m = r),
              r &&
                "function" !== typeof r &&
                ("object" !== typeof r || "number" !== typeof r.length))
            )
              throw new Error("JSON.stringify");
            return k("", { "": e });
          },
          A = function (e, r) {
            var i;
            return (
              (a = e + ""),
              (t = 0),
              (n = " "),
              (i = o()),
              f(),
              n && s("Syntax error"),
              "function" === typeof r
                ? (function e(t, n) {
                    var a,
                      o = t[n];
                    return (
                      o &&
                        "object" === typeof o &&
                        Object.keys(o).forEach(function (r) {
                          ((a = e(o, r)),
                            void 0 !== a ? (o[r] = a) : delete o[r]);
                        }),
                      r.call(t, n, o)
                    );
                  })({ "": i }, "")
                : i
            );
          };
        return { parse: A, stringify: _ };
      };
      e.exports = n;
    },
    6729: function (e, r, t) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (e) {
                  for (var r, t = 1, n = arguments.length; t < n; t++)
                    for (var a in ((r = arguments[t]), r))
                      Object.prototype.hasOwnProperty.call(r, a) &&
                        (e[a] = r[a]);
                  return e;
                }),
              n.apply(this, arguments)
            );
          },
        a =
          (this && this.__read) ||
          function (e, r) {
            var t = "function" === typeof Symbol && e[Symbol.iterator];
            if (!t) return e;
            var n,
              a,
              o = t.call(e),
              i = [];
            try {
              while ((void 0 === r || r-- > 0) && !(n = o.next()).done)
                i.push(n.value);
            } catch (s) {
              a = { error: s };
            } finally {
              try {
                n && !n.done && (t = o["return"]) && t.call(o);
              } finally {
                if (a) throw a.error;
              }
            }
            return i;
          },
        o =
          (this && this.__spread) ||
          function () {
            for (var e = [], r = 0; r < arguments.length; r++)
              e = e.concat(a(arguments[r]));
            return e;
          };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var i = t(4824),
        s = t(6733),
        u = t(4825),
        c = t(3459),
        l = t(4564),
        f = t(3950),
        d = t(5599),
        h = t(10706),
        y = t(10707),
        p = t(10708),
        g = t(10717),
        m = t(10718);
      r.crypto = function (e) {
        if (e && "" == e.seed) throw new Error("Empty seed is not allowed.");
        var r = function (e, r) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              return e.apply(void 0, o([r], t));
            };
          },
          t = function (r) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              var a = r.apply(void 0, o(t));
              return !e || (e && "Base58" === e.output) ? u.base58Encode(a) : a;
            };
          },
          a = function (r) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              var a = r.apply(void 0, o(t));
              return !e || (e && "Base58" === e.output)
                ? {
                    privateKey: u.base58Encode(a.privateKey),
                    publicKey: u.base58Encode(a.publicKey),
                  }
                : a;
            };
          },
          b = e && e.seed ? e.seed : void 0,
          v = {
            seedWithNonce: b ? r(d.seedWithNonce, b) : d.seedWithNonce,
            signBytes: t(b ? r(h.signBytes, b) : h.signBytes),
            keyPair: a(b ? r(d.keyPair, b) : d.keyPair),
            publicKey: t(b ? r(d.publicKey, b) : d.publicKey),
            privateKey: t(b ? r(d.privateKey, b) : d.privateKey),
            address: t(b ? r(d.address, b) : d.address),
          };
        return n({}, v, {
          sharedKey: t(s.sharedKey),
          buildAddress: d.buildAddress,
          blake2b: f.blake2b,
          keccak: f.keccak,
          sha256: f.sha256,
          base64Encode: u.base64Encode,
          base64Decode: u.base64Decode,
          base58Encode: u.base58Encode,
          base58Decode: u.base58Decode,
          base16Encode: u.base16Encode,
          base16Decode: u.base16Decode,
          stringToBytes: c.stringToBytes,
          bytesToString: c.bytesToString,
          random: i.random,
          randomSeed: i.randomSeed,
          randomBytes: i.randomBytes,
          verifySignature: y.verifySignature,
          verifyPublicKey: y.verifyPublicKey,
          verifyAddress: y.verifyAddress,
          messageDecrypt: s.messageDecrypt,
          messageEncrypt: s.messageEncrypt,
          aesDecrypt: s.aesDecrypt,
          aesEncrypt: s.aesEncrypt,
          encryptSeed: g.encryptSeed,
          decryptSeed: g.decryptSeed,
          rsaKeyPair: p.rsaKeyPair,
          rsaKeyPairSync: p.rsaKeyPairSync,
          rsaSign: p.rsaSign,
          rsaVerify: p.rsaVerify,
          merkleVerify: m.merkleVerify,
          split: l.split,
          concat: l.concat,
        });
      };
    },
    6732: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.seedWordsList = [
          "abandon",
          "ability",
          "able",
          "about",
          "above",
          "absent",
          "absorb",
          "abstract",
          "absurd",
          "abuse",
          "access",
          "accident",
          "account",
          "accuse",
          "achieve",
          "acid",
          "acoustic",
          "acquire",
          "across",
          "act",
          "action",
          "actor",
          "actress",
          "actual",
          "adapt",
          "add",
          "addict",
          "address",
          "adjust",
          "admit",
          "adult",
          "advance",
          "advice",
          "aerobic",
          "affair",
          "afford",
          "afraid",
          "again",
          "age",
          "agent",
          "agree",
          "ahead",
          "aim",
          "air",
          "airport",
          "aisle",
          "alarm",
          "album",
          "alcohol",
          "alert",
          "alien",
          "all",
          "alley",
          "allow",
          "almost",
          "alone",
          "alpha",
          "already",
          "also",
          "alter",
          "always",
          "amateur",
          "amazing",
          "among",
          "amount",
          "amused",
          "analyst",
          "anchor",
          "ancient",
          "anger",
          "angle",
          "angry",
          "animal",
          "ankle",
          "announce",
          "annual",
          "another",
          "answer",
          "antenna",
          "antique",
          "anxiety",
          "any",
          "apart",
          "apology",
          "appear",
          "apple",
          "approve",
          "april",
          "arch",
          "arctic",
          "area",
          "arena",
          "argue",
          "arm",
          "armed",
          "armor",
          "army",
          "around",
          "arrange",
          "arrest",
          "arrive",
          "arrow",
          "art",
          "artefact",
          "artist",
          "artwork",
          "ask",
          "aspect",
          "assault",
          "asset",
          "assist",
          "assume",
          "asthma",
          "athlete",
          "atom",
          "attack",
          "attend",
          "attitude",
          "attract",
          "auction",
          "audit",
          "august",
          "aunt",
          "author",
          "auto",
          "autumn",
          "average",
          "avocado",
          "avoid",
          "awake",
          "aware",
          "away",
          "awesome",
          "awful",
          "awkward",
          "axis",
          "baby",
          "bachelor",
          "bacon",
          "badge",
          "bag",
          "balance",
          "balcony",
          "ball",
          "bamboo",
          "banana",
          "banner",
          "bar",
          "barely",
          "bargain",
          "barrel",
          "base",
          "basic",
          "basket",
          "battle",
          "beach",
          "bean",
          "beauty",
          "because",
          "become",
          "beef",
          "before",
          "begin",
          "behave",
          "behind",
          "believe",
          "below",
          "belt",
          "bench",
          "benefit",
          "best",
          "betray",
          "better",
          "between",
          "beyond",
          "bicycle",
          "bid",
          "bike",
          "bind",
          "biology",
          "bird",
          "birth",
          "bitter",
          "black",
          "blade",
          "blame",
          "blanket",
          "blast",
          "bleak",
          "bless",
          "blind",
          "blood",
          "blossom",
          "blouse",
          "blue",
          "blur",
          "blush",
          "board",
          "boat",
          "body",
          "boil",
          "bomb",
          "bone",
          "bonus",
          "book",
          "boost",
          "border",
          "boring",
          "borrow",
          "boss",
          "bottom",
          "bounce",
          "box",
          "boy",
          "bracket",
          "brain",
          "brand",
          "brass",
          "brave",
          "bread",
          "breeze",
          "brick",
          "bridge",
          "brief",
          "bright",
          "bring",
          "brisk",
          "broccoli",
          "broken",
          "bronze",
          "broom",
          "brother",
          "brown",
          "brush",
          "bubble",
          "buddy",
          "budget",
          "buffalo",
          "build",
          "bulb",
          "bulk",
          "bullet",
          "bundle",
          "bunker",
          "burden",
          "burger",
          "burst",
          "bus",
          "business",
          "busy",
          "butter",
          "buyer",
          "buzz",
          "cabbage",
          "cabin",
          "cable",
          "cactus",
          "cage",
          "cake",
          "call",
          "calm",
          "camera",
          "camp",
          "can",
          "canal",
          "cancel",
          "candy",
          "cannon",
          "canoe",
          "canvas",
          "canyon",
          "capable",
          "capital",
          "captain",
          "car",
          "carbon",
          "card",
          "cargo",
          "carpet",
          "carry",
          "cart",
          "case",
          "cash",
          "casino",
          "castle",
          "casual",
          "cat",
          "catalog",
          "catch",
          "category",
          "cattle",
          "caught",
          "cause",
          "caution",
          "cave",
          "ceiling",
          "celery",
          "cement",
          "census",
          "century",
          "cereal",
          "certain",
          "chair",
          "chalk",
          "champion",
          "change",
          "chaos",
          "chapter",
          "charge",
          "chase",
          "chat",
          "cheap",
          "check",
          "cheese",
          "chef",
          "cherry",
          "chest",
          "chicken",
          "chief",
          "child",
          "chimney",
          "choice",
          "choose",
          "chronic",
          "chuckle",
          "chunk",
          "churn",
          "cigar",
          "cinnamon",
          "circle",
          "citizen",
          "city",
          "civil",
          "claim",
          "clap",
          "clarify",
          "claw",
          "clay",
          "clean",
          "clerk",
          "clever",
          "click",
          "client",
          "cliff",
          "climb",
          "clinic",
          "clip",
          "clock",
          "clog",
          "close",
          "cloth",
          "cloud",
          "clown",
          "club",
          "clump",
          "cluster",
          "clutch",
          "coach",
          "coast",
          "coconut",
          "code",
          "coffee",
          "coil",
          "coin",
          "collect",
          "color",
          "column",
          "combine",
          "come",
          "comfort",
          "comic",
          "common",
          "company",
          "concert",
          "conduct",
          "confirm",
          "congress",
          "connect",
          "consider",
          "control",
          "convince",
          "cook",
          "cool",
          "copper",
          "copy",
          "coral",
          "core",
          "corn",
          "correct",
          "cost",
          "cotton",
          "couch",
          "country",
          "couple",
          "course",
          "cousin",
          "cover",
          "coyote",
          "crack",
          "cradle",
          "craft",
          "cram",
          "crane",
          "crash",
          "crater",
          "crawl",
          "crazy",
          "cream",
          "credit",
          "creek",
          "crew",
          "cricket",
          "crime",
          "crisp",
          "critic",
          "crop",
          "cross",
          "crouch",
          "crowd",
          "crucial",
          "cruel",
          "cruise",
          "crumble",
          "crunch",
          "crush",
          "cry",
          "crystal",
          "cube",
          "culture",
          "cup",
          "cupboard",
          "curious",
          "current",
          "curtain",
          "curve",
          "cushion",
          "custom",
          "cute",
          "cycle",
          "dad",
          "damage",
          "damp",
          "dance",
          "danger",
          "daring",
          "dash",
          "daughter",
          "dawn",
          "day",
          "deal",
          "debate",
          "debris",
          "decade",
          "december",
          "decide",
          "decline",
          "decorate",
          "decrease",
          "deer",
          "defense",
          "define",
          "defy",
          "degree",
          "delay",
          "deliver",
          "demand",
          "demise",
          "denial",
          "dentist",
          "deny",
          "depart",
          "depend",
          "deposit",
          "depth",
          "deputy",
          "derive",
          "describe",
          "desert",
          "design",
          "desk",
          "despair",
          "destroy",
          "detail",
          "detect",
          "develop",
          "device",
          "devote",
          "diagram",
          "dial",
          "diamond",
          "diary",
          "dice",
          "diesel",
          "diet",
          "differ",
          "digital",
          "dignity",
          "dilemma",
          "dinner",
          "dinosaur",
          "direct",
          "dirt",
          "disagree",
          "discover",
          "disease",
          "dish",
          "dismiss",
          "disorder",
          "display",
          "distance",
          "divert",
          "divide",
          "divorce",
          "dizzy",
          "doctor",
          "document",
          "dog",
          "doll",
          "dolphin",
          "domain",
          "donate",
          "donkey",
          "donor",
          "door",
          "dose",
          "double",
          "dove",
          "draft",
          "dragon",
          "drama",
          "drastic",
          "draw",
          "dream",
          "dress",
          "drift",
          "drill",
          "drink",
          "drip",
          "drive",
          "drop",
          "drum",
          "dry",
          "duck",
          "dumb",
          "dune",
          "during",
          "dust",
          "dutch",
          "duty",
          "dwarf",
          "dynamic",
          "eager",
          "eagle",
          "early",
          "earn",
          "earth",
          "easily",
          "east",
          "easy",
          "echo",
          "ecology",
          "economy",
          "edge",
          "edit",
          "educate",
          "effort",
          "egg",
          "eight",
          "either",
          "elbow",
          "elder",
          "electric",
          "elegant",
          "element",
          "elephant",
          "elevator",
          "elite",
          "else",
          "embark",
          "embody",
          "embrace",
          "emerge",
          "emotion",
          "employ",
          "empower",
          "empty",
          "enable",
          "enact",
          "end",
          "endless",
          "endorse",
          "enemy",
          "energy",
          "enforce",
          "engage",
          "engine",
          "enhance",
          "enjoy",
          "enlist",
          "enough",
          "enrich",
          "enroll",
          "ensure",
          "enter",
          "entire",
          "entry",
          "envelope",
          "episode",
          "equal",
          "equip",
          "era",
          "erase",
          "erode",
          "erosion",
          "error",
          "erupt",
          "escape",
          "essay",
          "essence",
          "estate",
          "eternal",
          "ethics",
          "evidence",
          "evil",
          "evoke",
          "evolve",
          "exact",
          "example",
          "excess",
          "exchange",
          "excite",
          "exclude",
          "excuse",
          "execute",
          "exercise",
          "exhaust",
          "exhibit",
          "exile",
          "exist",
          "exit",
          "exotic",
          "expand",
          "expect",
          "expire",
          "explain",
          "expose",
          "express",
          "extend",
          "extra",
          "eye",
          "eyebrow",
          "fabric",
          "face",
          "faculty",
          "fade",
          "faint",
          "faith",
          "fall",
          "false",
          "fame",
          "family",
          "famous",
          "fan",
          "fancy",
          "fantasy",
          "farm",
          "fashion",
          "fat",
          "fatal",
          "father",
          "fatigue",
          "fault",
          "favorite",
          "feature",
          "february",
          "federal",
          "fee",
          "feed",
          "feel",
          "female",
          "fence",
          "festival",
          "fetch",
          "fever",
          "few",
          "fiber",
          "fiction",
          "field",
          "figure",
          "file",
          "film",
          "filter",
          "final",
          "find",
          "fine",
          "finger",
          "finish",
          "fire",
          "firm",
          "first",
          "fiscal",
          "fish",
          "fit",
          "fitness",
          "fix",
          "flag",
          "flame",
          "flash",
          "flat",
          "flavor",
          "flee",
          "flight",
          "flip",
          "float",
          "flock",
          "floor",
          "flower",
          "fluid",
          "flush",
          "fly",
          "foam",
          "focus",
          "fog",
          "foil",
          "fold",
          "follow",
          "food",
          "foot",
          "force",
          "forest",
          "forget",
          "fork",
          "fortune",
          "forum",
          "forward",
          "fossil",
          "foster",
          "found",
          "fox",
          "fragile",
          "frame",
          "frequent",
          "fresh",
          "friend",
          "fringe",
          "frog",
          "front",
          "frost",
          "frown",
          "frozen",
          "fruit",
          "fuel",
          "fun",
          "funny",
          "furnace",
          "fury",
          "future",
          "gadget",
          "gain",
          "galaxy",
          "gallery",
          "game",
          "gap",
          "garage",
          "garbage",
          "garden",
          "garlic",
          "garment",
          "gas",
          "gasp",
          "gate",
          "gather",
          "gauge",
          "gaze",
          "general",
          "genius",
          "genre",
          "gentle",
          "genuine",
          "gesture",
          "ghost",
          "giant",
          "gift",
          "giggle",
          "ginger",
          "giraffe",
          "girl",
          "give",
          "glad",
          "glance",
          "glare",
          "glass",
          "glide",
          "glimpse",
          "globe",
          "gloom",
          "glory",
          "glove",
          "glow",
          "glue",
          "goat",
          "goddess",
          "gold",
          "good",
          "goose",
          "gorilla",
          "gospel",
          "gossip",
          "govern",
          "gown",
          "grab",
          "grace",
          "grain",
          "grant",
          "grape",
          "grass",
          "gravity",
          "great",
          "green",
          "grid",
          "grief",
          "grit",
          "grocery",
          "group",
          "grow",
          "grunt",
          "guard",
          "guess",
          "guide",
          "guilt",
          "guitar",
          "gun",
          "gym",
          "habit",
          "hair",
          "half",
          "hammer",
          "hamster",
          "hand",
          "happy",
          "harbor",
          "hard",
          "harsh",
          "harvest",
          "hat",
          "have",
          "hawk",
          "hazard",
          "head",
          "health",
          "heart",
          "heavy",
          "hedgehog",
          "height",
          "hello",
          "helmet",
          "help",
          "hen",
          "hero",
          "hidden",
          "high",
          "hill",
          "hint",
          "hip",
          "hire",
          "history",
          "hobby",
          "hockey",
          "hold",
          "hole",
          "holiday",
          "hollow",
          "home",
          "honey",
          "hood",
          "hope",
          "horn",
          "horror",
          "horse",
          "hospital",
          "host",
          "hotel",
          "hour",
          "hover",
          "hub",
          "huge",
          "human",
          "humble",
          "humor",
          "hundred",
          "hungry",
          "hunt",
          "hurdle",
          "hurry",
          "hurt",
          "husband",
          "hybrid",
          "ice",
          "icon",
          "idea",
          "identify",
          "idle",
          "ignore",
          "ill",
          "illegal",
          "illness",
          "image",
          "imitate",
          "immense",
          "immune",
          "impact",
          "impose",
          "improve",
          "impulse",
          "inch",
          "include",
          "income",
          "increase",
          "index",
          "indicate",
          "indoor",
          "industry",
          "infant",
          "inflict",
          "inform",
          "inhale",
          "inherit",
          "initial",
          "inject",
          "injury",
          "inmate",
          "inner",
          "innocent",
          "input",
          "inquiry",
          "insane",
          "insect",
          "inside",
          "inspire",
          "install",
          "intact",
          "interest",
          "into",
          "invest",
          "invite",
          "involve",
          "iron",
          "island",
          "isolate",
          "issue",
          "item",
          "ivory",
          "jacket",
          "jaguar",
          "jar",
          "jazz",
          "jealous",
          "jeans",
          "jelly",
          "jewel",
          "job",
          "join",
          "joke",
          "journey",
          "joy",
          "judge",
          "juice",
          "jump",
          "jungle",
          "junior",
          "junk",
          "just",
          "kangaroo",
          "keen",
          "keep",
          "ketchup",
          "key",
          "kick",
          "kid",
          "kidney",
          "kind",
          "kingdom",
          "kiss",
          "kit",
          "kitchen",
          "kite",
          "kitten",
          "kiwi",
          "knee",
          "knife",
          "knock",
          "know",
          "lab",
          "label",
          "labor",
          "ladder",
          "lady",
          "lake",
          "lamp",
          "language",
          "laptop",
          "large",
          "later",
          "latin",
          "laugh",
          "laundry",
          "lava",
          "law",
          "lawn",
          "lawsuit",
          "layer",
          "lazy",
          "leader",
          "leaf",
          "learn",
          "leave",
          "lecture",
          "left",
          "leg",
          "legal",
          "legend",
          "leisure",
          "lemon",
          "lend",
          "length",
          "lens",
          "leopard",
          "lesson",
          "letter",
          "level",
          "liar",
          "liberty",
          "library",
          "license",
          "life",
          "lift",
          "light",
          "like",
          "limb",
          "limit",
          "link",
          "lion",
          "liquid",
          "list",
          "little",
          "live",
          "lizard",
          "load",
          "loan",
          "lobster",
          "local",
          "lock",
          "logic",
          "lonely",
          "long",
          "loop",
          "lottery",
          "loud",
          "lounge",
          "love",
          "loyal",
          "lucky",
          "luggage",
          "lumber",
          "lunar",
          "lunch",
          "luxury",
          "lyrics",
          "machine",
          "mad",
          "magic",
          "magnet",
          "maid",
          "mail",
          "main",
          "major",
          "make",
          "mammal",
          "man",
          "manage",
          "mandate",
          "mango",
          "mansion",
          "manual",
          "maple",
          "marble",
          "march",
          "margin",
          "marine",
          "market",
          "marriage",
          "mask",
          "mass",
          "master",
          "match",
          "material",
          "math",
          "matrix",
          "matter",
          "maximum",
          "maze",
          "meadow",
          "mean",
          "measure",
          "meat",
          "mechanic",
          "medal",
          "media",
          "melody",
          "melt",
          "member",
          "memory",
          "mention",
          "menu",
          "mercy",
          "merge",
          "merit",
          "merry",
          "mesh",
          "message",
          "metal",
          "method",
          "middle",
          "midnight",
          "milk",
          "million",
          "mimic",
          "mind",
          "minimum",
          "minor",
          "minute",
          "miracle",
          "mirror",
          "misery",
          "miss",
          "mistake",
          "mix",
          "mixed",
          "mixture",
          "mobile",
          "model",
          "modify",
          "mom",
          "moment",
          "monitor",
          "monkey",
          "monster",
          "month",
          "moon",
          "moral",
          "more",
          "morning",
          "mosquito",
          "mother",
          "motion",
          "motor",
          "mountain",
          "mouse",
          "move",
          "movie",
          "much",
          "muffin",
          "mule",
          "multiply",
          "muscle",
          "museum",
          "mushroom",
          "music",
          "must",
          "mutual",
          "myself",
          "mystery",
          "myth",
          "naive",
          "name",
          "napkin",
          "narrow",
          "nasty",
          "nation",
          "nature",
          "near",
          "neck",
          "need",
          "negative",
          "neglect",
          "neither",
          "nephew",
          "nerve",
          "nest",
          "net",
          "network",
          "neutral",
          "never",
          "news",
          "next",
          "nice",
          "night",
          "noble",
          "noise",
          "nominee",
          "noodle",
          "normal",
          "north",
          "nose",
          "notable",
          "note",
          "nothing",
          "notice",
          "novel",
          "now",
          "nuclear",
          "number",
          "nurse",
          "nut",
          "oak",
          "obey",
          "object",
          "oblige",
          "obscure",
          "observe",
          "obtain",
          "obvious",
          "occur",
          "ocean",
          "october",
          "odor",
          "off",
          "offer",
          "office",
          "often",
          "oil",
          "okay",
          "old",
          "olive",
          "olympic",
          "omit",
          "once",
          "one",
          "onion",
          "online",
          "only",
          "open",
          "opera",
          "opinion",
          "oppose",
          "option",
          "orange",
          "orbit",
          "orchard",
          "order",
          "ordinary",
          "organ",
          "orient",
          "original",
          "orphan",
          "ostrich",
          "other",
          "outdoor",
          "outer",
          "output",
          "outside",
          "oval",
          "oven",
          "over",
          "own",
          "owner",
          "oxygen",
          "oyster",
          "ozone",
          "pact",
          "paddle",
          "page",
          "pair",
          "palace",
          "palm",
          "panda",
          "panel",
          "panic",
          "panther",
          "paper",
          "parade",
          "parent",
          "park",
          "parrot",
          "party",
          "pass",
          "patch",
          "path",
          "patient",
          "patrol",
          "pattern",
          "pause",
          "pave",
          "payment",
          "peace",
          "peanut",
          "pear",
          "peasant",
          "pelican",
          "pen",
          "penalty",
          "pencil",
          "people",
          "pepper",
          "perfect",
          "permit",
          "person",
          "pet",
          "phone",
          "photo",
          "phrase",
          "physical",
          "piano",
          "picnic",
          "picture",
          "piece",
          "pig",
          "pigeon",
          "pill",
          "pilot",
          "pink",
          "pioneer",
          "pipe",
          "pistol",
          "pitch",
          "pizza",
          "place",
          "planet",
          "plastic",
          "plate",
          "play",
          "please",
          "pledge",
          "pluck",
          "plug",
          "plunge",
          "poem",
          "poet",
          "point",
          "polar",
          "pole",
          "police",
          "pond",
          "pony",
          "pool",
          "popular",
          "portion",
          "position",
          "possible",
          "post",
          "potato",
          "pottery",
          "poverty",
          "powder",
          "power",
          "practice",
          "praise",
          "predict",
          "prefer",
          "prepare",
          "present",
          "pretty",
          "prevent",
          "price",
          "pride",
          "primary",
          "print",
          "priority",
          "prison",
          "private",
          "prize",
          "problem",
          "process",
          "produce",
          "profit",
          "program",
          "project",
          "promote",
          "proof",
          "property",
          "prosper",
          "protect",
          "proud",
          "provide",
          "public",
          "pudding",
          "pull",
          "pulp",
          "pulse",
          "pumpkin",
          "punch",
          "pupil",
          "puppy",
          "purchase",
          "purity",
          "purpose",
          "purse",
          "push",
          "put",
          "puzzle",
          "pyramid",
          "quality",
          "quantum",
          "quarter",
          "question",
          "quick",
          "quit",
          "quiz",
          "quote",
          "rabbit",
          "raccoon",
          "race",
          "rack",
          "radar",
          "radio",
          "rail",
          "rain",
          "raise",
          "rally",
          "ramp",
          "ranch",
          "random",
          "range",
          "rapid",
          "rare",
          "rate",
          "rather",
          "raven",
          "raw",
          "razor",
          "ready",
          "real",
          "reason",
          "rebel",
          "rebuild",
          "recall",
          "receive",
          "recipe",
          "record",
          "recycle",
          "reduce",
          "reflect",
          "reform",
          "refuse",
          "region",
          "regret",
          "regular",
          "reject",
          "relax",
          "release",
          "relief",
          "rely",
          "remain",
          "remember",
          "remind",
          "remove",
          "render",
          "renew",
          "rent",
          "reopen",
          "repair",
          "repeat",
          "replace",
          "report",
          "require",
          "rescue",
          "resemble",
          "resist",
          "resource",
          "response",
          "result",
          "retire",
          "retreat",
          "return",
          "reunion",
          "reveal",
          "review",
          "reward",
          "rhythm",
          "rib",
          "ribbon",
          "rice",
          "rich",
          "ride",
          "ridge",
          "rifle",
          "right",
          "rigid",
          "ring",
          "riot",
          "ripple",
          "risk",
          "ritual",
          "rival",
          "river",
          "road",
          "roast",
          "robot",
          "robust",
          "rocket",
          "romance",
          "roof",
          "rookie",
          "room",
          "rose",
          "rotate",
          "rough",
          "round",
          "route",
          "royal",
          "rubber",
          "rude",
          "rug",
          "rule",
          "run",
          "runway",
          "rural",
          "sad",
          "saddle",
          "sadness",
          "safe",
          "sail",
          "salad",
          "salmon",
          "salon",
          "salt",
          "salute",
          "same",
          "sample",
          "sand",
          "satisfy",
          "satoshi",
          "sauce",
          "sausage",
          "save",
          "say",
          "scale",
          "scan",
          "scare",
          "scatter",
          "scene",
          "scheme",
          "school",
          "science",
          "scissors",
          "scorpion",
          "scout",
          "scrap",
          "screen",
          "script",
          "scrub",
          "sea",
          "search",
          "season",
          "seat",
          "second",
          "secret",
          "section",
          "security",
          "seed",
          "seek",
          "segment",
          "select",
          "sell",
          "seminar",
          "senior",
          "sense",
          "sentence",
          "series",
          "service",
          "session",
          "settle",
          "setup",
          "seven",
          "shadow",
          "shaft",
          "shallow",
          "share",
          "shed",
          "shell",
          "sheriff",
          "shield",
          "shift",
          "shine",
          "ship",
          "shiver",
          "shock",
          "shoe",
          "shoot",
          "shop",
          "short",
          "shoulder",
          "shove",
          "shrimp",
          "shrug",
          "shuffle",
          "shy",
          "sibling",
          "sick",
          "side",
          "siege",
          "sight",
          "sign",
          "silent",
          "silk",
          "silly",
          "silver",
          "similar",
          "simple",
          "since",
          "sing",
          "siren",
          "sister",
          "situate",
          "six",
          "size",
          "skate",
          "sketch",
          "ski",
          "skill",
          "skin",
          "skirt",
          "skull",
          "slab",
          "slam",
          "sleep",
          "slender",
          "slice",
          "slide",
          "slight",
          "slim",
          "slogan",
          "slot",
          "slow",
          "slush",
          "small",
          "smart",
          "smile",
          "smoke",
          "smooth",
          "snack",
          "snake",
          "snap",
          "sniff",
          "snow",
          "soap",
          "soccer",
          "social",
          "sock",
          "soda",
          "soft",
          "solar",
          "soldier",
          "solid",
          "solution",
          "solve",
          "someone",
          "song",
          "soon",
          "sorry",
          "sort",
          "soul",
          "sound",
          "soup",
          "source",
          "south",
          "space",
          "spare",
          "spatial",
          "spawn",
          "speak",
          "special",
          "speed",
          "spell",
          "spend",
          "sphere",
          "spice",
          "spider",
          "spike",
          "spin",
          "spirit",
          "split",
          "spoil",
          "sponsor",
          "spoon",
          "sport",
          "spot",
          "spray",
          "spread",
          "spring",
          "spy",
          "square",
          "squeeze",
          "squirrel",
          "stable",
          "stadium",
          "staff",
          "stage",
          "stairs",
          "stamp",
          "stand",
          "start",
          "state",
          "stay",
          "steak",
          "steel",
          "stem",
          "step",
          "stereo",
          "stick",
          "still",
          "sting",
          "stock",
          "stomach",
          "stone",
          "stool",
          "story",
          "stove",
          "strategy",
          "street",
          "strike",
          "strong",
          "struggle",
          "student",
          "stuff",
          "stumble",
          "style",
          "subject",
          "submit",
          "subway",
          "success",
          "such",
          "sudden",
          "suffer",
          "sugar",
          "suggest",
          "suit",
          "summer",
          "sun",
          "sunny",
          "sunset",
          "super",
          "supply",
          "supreme",
          "sure",
          "surface",
          "surge",
          "surprise",
          "surround",
          "survey",
          "suspect",
          "sustain",
          "swallow",
          "swamp",
          "swap",
          "swarm",
          "swear",
          "sweet",
          "swift",
          "swim",
          "swing",
          "switch",
          "sword",
          "symbol",
          "symptom",
          "syrup",
          "system",
          "table",
          "tackle",
          "tag",
          "tail",
          "talent",
          "talk",
          "tank",
          "tape",
          "target",
          "task",
          "taste",
          "tattoo",
          "taxi",
          "teach",
          "team",
          "tell",
          "ten",
          "tenant",
          "tennis",
          "tent",
          "term",
          "test",
          "text",
          "thank",
          "that",
          "theme",
          "then",
          "theory",
          "there",
          "they",
          "thing",
          "this",
          "thought",
          "three",
          "thrive",
          "throw",
          "thumb",
          "thunder",
          "ticket",
          "tide",
          "tiger",
          "tilt",
          "timber",
          "time",
          "tiny",
          "tip",
          "tired",
          "tissue",
          "title",
          "toast",
          "tobacco",
          "today",
          "toddler",
          "toe",
          "together",
          "toilet",
          "token",
          "tomato",
          "tomorrow",
          "tone",
          "tongue",
          "tonight",
          "tool",
          "tooth",
          "top",
          "topic",
          "topple",
          "torch",
          "tornado",
          "tortoise",
          "toss",
          "total",
          "tourist",
          "toward",
          "tower",
          "town",
          "toy",
          "track",
          "trade",
          "traffic",
          "tragic",
          "train",
          "transfer",
          "trap",
          "trash",
          "travel",
          "tray",
          "treat",
          "tree",
          "trend",
          "trial",
          "tribe",
          "trick",
          "trigger",
          "trim",
          "trip",
          "trophy",
          "trouble",
          "truck",
          "true",
          "truly",
          "trumpet",
          "trust",
          "truth",
          "try",
          "tube",
          "tuition",
          "tumble",
          "tuna",
          "tunnel",
          "turkey",
          "turn",
          "turtle",
          "twelve",
          "twenty",
          "twice",
          "twin",
          "twist",
          "two",
          "type",
          "typical",
          "ugly",
          "umbrella",
          "unable",
          "unaware",
          "uncle",
          "uncover",
          "under",
          "undo",
          "unfair",
          "unfold",
          "unhappy",
          "uniform",
          "unique",
          "unit",
          "universe",
          "unknown",
          "unlock",
          "until",
          "unusual",
          "unveil",
          "update",
          "upgrade",
          "uphold",
          "upon",
          "upper",
          "upset",
          "urban",
          "urge",
          "usage",
          "use",
          "used",
          "useful",
          "useless",
          "usual",
          "utility",
          "vacant",
          "vacuum",
          "vague",
          "valid",
          "valley",
          "valve",
          "van",
          "vanish",
          "vapor",
          "various",
          "vast",
          "vault",
          "vehicle",
          "velvet",
          "vendor",
          "venture",
          "venue",
          "verb",
          "verify",
          "version",
          "very",
          "vessel",
          "veteran",
          "viable",
          "vibrant",
          "vicious",
          "victory",
          "video",
          "view",
          "village",
          "vintage",
          "violin",
          "virtual",
          "virus",
          "visa",
          "visit",
          "visual",
          "vital",
          "vivid",
          "vocal",
          "voice",
          "void",
          "volcano",
          "volume",
          "vote",
          "voyage",
          "wage",
          "wagon",
          "wait",
          "walk",
          "wall",
          "walnut",
          "want",
          "warfare",
          "warm",
          "warrior",
          "wash",
          "wasp",
          "waste",
          "water",
          "wave",
          "way",
          "wealth",
          "weapon",
          "wear",
          "weasel",
          "weather",
          "web",
          "wedding",
          "weekend",
          "weird",
          "welcome",
          "west",
          "wet",
          "whale",
          "what",
          "wheat",
          "wheel",
          "when",
          "where",
          "whip",
          "whisper",
          "wide",
          "width",
          "wife",
          "wild",
          "will",
          "win",
          "window",
          "wine",
          "wing",
          "wink",
          "winner",
          "winter",
          "wire",
          "wisdom",
          "wise",
          "wish",
          "witness",
          "wolf",
          "woman",
          "wonder",
          "wood",
          "wool",
          "word",
          "work",
          "world",
          "worry",
          "worth",
          "wrap",
          "wreck",
          "wrestle",
          "wrist",
          "write",
          "wrong",
          "yard",
          "year",
          "yellow",
          "you",
          "young",
          "youth",
          "zebra",
          "zero",
          "zone",
          "zoo",
        ]));
    },
    6733: function (e, r, t) {
      "use strict";
      var n =
          (this && this.__read) ||
          function (e, r) {
            var t = "function" === typeof Symbol && e[Symbol.iterator];
            if (!t) return e;
            var n,
              a,
              o = t.call(e),
              i = [];
            try {
              while ((void 0 === r || r-- > 0) && !(n = o.next()).done)
                i.push(n.value);
            } catch (s) {
              a = { error: s };
            } finally {
              try {
                n && !n.done && (t = o["return"]) && t.call(o);
              } finally {
                if (a) throw a.error;
              }
            }
            return i;
          },
        a =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var r = {};
            if (null != e)
              for (var t in e)
                Object.hasOwnProperty.call(e, t) && (r[t] = e[t]);
            return ((r["default"] = e), r);
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var i = a(t(5596)),
        s = a(t(2921)),
        u = t(4824),
        c = t(3460),
        l = t(3950),
        f = t(4564),
        d = o(t(4826)),
        h = t(3459);
      ((r.aesEncrypt = function (e, r, t, n) {
        void 0 === t && (t = "CBC");
        var a = i.createCipher(
          "AES-" + t,
          h.bytesToString(c._fromIn(r), "raw"),
        );
        return (
          a.start({
            iv: n && s.createBuffer(h.bytesToString(c._fromIn(n), "raw")),
          }),
          a.update(s.createBuffer(h.bytesToString(e, "raw"))),
          a.finish(),
          h.stringToBytes(a.output.getBytes(), "raw")
        );
      }),
        (r.aesDecrypt = function (e, r, t, n) {
          void 0 === t && (t = "CBC");
          var a = i.createDecipher(
            "AES-" + t,
            h.bytesToString(c._fromIn(r), "raw"),
          );
          a.start({
            iv: n && s.createBuffer(h.bytesToString(c._fromIn(n), "raw")),
          });
          var o = s.createBuffer(h.bytesToString(c._fromIn(e), "raw"));
          if ((a.update(o), !a.finish()))
            throw new Error("Failed to decrypt data with provided key");
          return h.stringToBytes(a.output.getBytes(), "raw");
        }),
        (r.messageEncrypt = function (e, t) {
          var n = Uint8Array.from([1]),
            a = u.randomBytes(32),
            o = u.randomBytes(16),
            i = h.stringToBytes(t),
            s = r.aesEncrypt(i, a, "CTR", o),
            c = r.aesEncrypt(a, e, "ECB"),
            d = l.hmacSHA256(i, a),
            y = l.hmacSHA256(f.concat(a, o), e),
            p = f.concat(n, c, y, d, o, s);
          return p;
        }),
        (r.messageDecrypt = function (e, t) {
          var a = n(f.split(t, 1, 48, 32, 32, 16), 6),
            o = (a[0], a[1]),
            i = a[2],
            s = a[3],
            u = a[4],
            d = a[5],
            y = r.aesDecrypt(o, e, "ECB"),
            p = c._fromIn(l.hmacSHA256(f.concat(y, u), c._fromIn(e))),
            g = p.every(function (e, r) {
              return e === i[r];
            });
          if (!g) throw new Error("Invalid key");
          var m = r.aesDecrypt(d, y, "CTR", u),
            b = c._fromIn(l.hmacSHA256(m, y)),
            v = b.every(function (e, r) {
              return e === s[r];
            });
          if (!v) throw new Error("Invalid message");
          return h.bytesToString(m);
        }),
        (r.sharedKey = function (e, r, t) {
          var n = d.default.sharedKey(c._fromIn(e), c._fromIn(r)),
            a = l.sha256(c._fromRawIn(t));
          return l.hmacSHA256(n, a);
        }));
    },
    6734: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(3460),
        a = t(3459);
      r.Seed = {
        isSeedWithNonce: function (e) {
          return void 0 !== e.nonce;
        },
        toBinary: function (e) {
          return r.Seed.isSeedWithNonce(e)
            ? { seed: r.Seed.toBinary(e.seed).seed, nonce: e.nonce }
            : { seed: n._fromRawIn(e), nonce: void 0 };
        },
        toString: function (e) {
          return a.bytesToString(r.Seed.toBinary(e).seed);
        },
      };
    },
    6735: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(4565),
        a = t(4565);
      r.ChaidId = {
        toNumber: function (e) {
          return "string" === typeof e ? e.charCodeAt(0) : e;
        },
        isMainnet: function (e) {
          return r.ChaidId.toNumber(e) === n.MAIN_NET_CHAIN_ID;
        },
        isTestnet: function (e) {
          return r.ChaidId.toNumber(e) === a.TEST_NET_CHAIN_ID;
        },
      };
    },
  },
]);
