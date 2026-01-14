(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [421],
  {
    4806: function (r, n) {
      var e = "Input must be an string, Buffer or Uint8Array";
      function t(r) {
        var n;
        if (!(r instanceof Uint8Array)) throw new Error(e);
        return ((n = r), n);
      }
      function o(r, n, e) {
        var t = r[n] + r[e],
          o = r[n + 1] + r[e + 1];
        (t >= 4294967296 && o++, (r[n] = t), (r[n + 1] = o));
      }
      function i(r, n, e, t) {
        var o = r[n] + e;
        e < 0 && (o += 4294967296);
        var i = r[n + 1] + t;
        (o >= 4294967296 && i++, (r[n] = o), (r[n + 1] = i));
      }
      function a(r, n) {
        return r[n] ^ (r[n + 1] << 8) ^ (r[n + 2] << 16) ^ (r[n + 3] << 24);
      }
      function f(r, n, e, t, a, f) {
        var u = l[a],
          c = l[a + 1],
          w = l[f],
          h = l[f + 1];
        (o(y, r, n), i(y, r, u, c));
        var s = y[t] ^ y[r],
          v = y[t + 1] ^ y[r + 1];
        ((y[t] = v),
          (y[t + 1] = s),
          o(y, e, t),
          (s = y[n] ^ y[e]),
          (v = y[n + 1] ^ y[e + 1]),
          (y[n] = (s >>> 24) ^ (v << 8)),
          (y[n + 1] = (v >>> 24) ^ (s << 8)),
          o(y, r, n),
          i(y, r, w, h),
          (s = y[t] ^ y[r]),
          (v = y[t + 1] ^ y[r + 1]),
          (y[t] = (s >>> 16) ^ (v << 16)),
          (y[t + 1] = (v >>> 16) ^ (s << 16)),
          o(y, e, t),
          (s = y[n] ^ y[e]),
          (v = y[n + 1] ^ y[e + 1]),
          (y[n] = (v >>> 31) ^ (s << 1)),
          (y[n + 1] = (s >>> 31) ^ (v << 1)));
      }
      var u = new Uint32Array([
          4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
          1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199,
          2600822924, 4215389547, 528734635, 327033209, 1541459225,
        ]),
        c = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
          15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10,
          14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0,
          15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6,
          10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4,
          10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4,
          8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10,
          2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6,
          7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0,
          2, 11, 7, 5, 3,
        ],
        w = new Uint8Array(
          c.map(function (r) {
            return 2 * r;
          }),
        ),
        y = new Uint32Array(32),
        l = new Uint32Array(32);
      function h(r, n) {
        var e = 0;
        for (e = 0; e < 16; e++) ((y[e] = r.h[e]), (y[e + 16] = u[e]));
        for (
          y[24] = y[24] ^ r.t,
            y[25] = y[25] ^ (r.t / 4294967296),
            n && ((y[28] = ~y[28]), (y[29] = ~y[29])),
            e = 0;
          e < 32;
          e++
        )
          l[e] = a(r.b, 4 * e);
        for (e = 0; e < 12; e++)
          (f(0, 8, 16, 24, w[16 * e + 0], w[16 * e + 1]),
            f(2, 10, 18, 26, w[16 * e + 2], w[16 * e + 3]),
            f(4, 12, 20, 28, w[16 * e + 4], w[16 * e + 5]),
            f(6, 14, 22, 30, w[16 * e + 6], w[16 * e + 7]),
            f(0, 10, 20, 30, w[16 * e + 8], w[16 * e + 9]),
            f(2, 12, 22, 24, w[16 * e + 10], w[16 * e + 11]),
            f(4, 14, 16, 26, w[16 * e + 12], w[16 * e + 13]),
            f(6, 8, 18, 28, w[16 * e + 14], w[16 * e + 15]));
        for (e = 0; e < 16; e++) r.h[e] = r.h[e] ^ y[e] ^ y[e + 16];
      }
      function s(r, n) {
        if (0 === r || r > 64)
          throw new Error("Illegal output length, expected 0 < length <= 64");
        if (n && n.length > 64)
          throw new Error(
            "Illegal key, expected Uint8Array with 0 < length <= 64",
          );
        for (
          var e = {
              b: new Uint8Array(128),
              h: new Uint32Array(16),
              t: 0,
              c: 0,
              outlen: r,
            },
            t = 0;
          t < 16;
          t++
        )
          e.h[t] = u[t];
        var o = n ? n.length : 0;
        return (
          (e.h[0] ^= 16842752 ^ (o << 8) ^ r),
          n && (v(e, n), (e.c = 128)),
          e
        );
      }
      function v(r, n) {
        for (var e = 0; e < n.length; e++)
          (128 === r.c && ((r.t += r.c), h(r, !1), (r.c = 0)),
            (r.b[r.c++] = n[e]));
      }
      function b(r) {
        r.t += r.c;
        while (r.c < 128) r.b[r.c++] = 0;
        h(r, !0);
        for (var n = new Uint8Array(r.outlen), e = 0; e < r.outlen; e++)
          n[e] = r.h[e >> 2] >> (8 * (3 & e));
        return n;
      }
      function g(r, n, e) {
        ((e = e || 64), (r = t(r)));
        var o = s(e, n);
        return (v(o, r), b(o));
      }
      r.exports = {
        blake2b: g,
        blake2bInit: s,
        blake2bUpdate: v,
        blake2bFinal: b,
      };
    },
    5572: function (r, n, e) {
      const { blake2bInit: t, blake2bUpdate: o, blake2bFinal: i } = e(4806),
        a = {};
      var f = function (r, n) {
          ((this.hi = 0 | r), (this.lo = 0 | n));
        },
        u = function (r) {
          var n,
            e = new Float64Array(16);
          if (r) for (n = 0; n < r.length; n++) e[n] = r[n];
          return e;
        },
        c = function () {
          throw new Error("no PRNG");
        },
        w = new Uint8Array(16),
        y = new Uint8Array(32);
      y[0] = 9;
      var l = u(),
        h = u([1]),
        s = u([56129, 1]),
        v = u([
          30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
          16505, 36039, 65139, 11119, 27886, 20995,
        ]),
        b = u([
          61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
          33010, 6542, 64743, 22239, 55772, 9222,
        ]),
        g = u([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        A = u([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]),
        p = u([
          41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
          153, 11085, 57099, 20417, 9344, 11139,
        ]);
      function U(r, n) {
        return (r << n) | (r >>> (32 - n));
      }
      function _(r, n) {
        var e = 255 & r[n + 3];
        return (
          (e = (e << 8) | (255 & r[n + 2])),
          (e = (e << 8) | (255 & r[n + 1])),
          (e << 8) | (255 & r[n + 0])
        );
      }
      function E(r, n) {
        var e = (r[n] << 24) | (r[n + 1] << 16) | (r[n + 2] << 8) | r[n + 3],
          t = (r[n + 4] << 24) | (r[n + 5] << 16) | (r[n + 6] << 8) | r[n + 7];
        return new f(e, t);
      }
      function x(r, n, e) {
        var t;
        for (t = 0; t < 4; t++) ((r[n + t] = 255 & e), (e >>>= 8));
      }
      function d(r, n, e) {
        ((r[n] = (e.hi >> 24) & 255),
          (r[n + 1] = (e.hi >> 16) & 255),
          (r[n + 2] = (e.hi >> 8) & 255),
          (r[n + 3] = 255 & e.hi),
          (r[n + 4] = (e.lo >> 24) & 255),
          (r[n + 5] = (e.lo >> 16) & 255),
          (r[n + 6] = (e.lo >> 8) & 255),
          (r[n + 7] = 255 & e.lo));
      }
      function k(r, n, e, t, o) {
        var i,
          a = 0;
        for (i = 0; i < o; i++) a |= r[n + i] ^ e[t + i];
        return (1 & ((a - 1) >>> 8)) - 1;
      }
      function B(r, n, e, t) {
        return k(r, n, e, t, 16);
      }
      function m(r, n, e, t) {
        return k(r, n, e, t, 32);
      }
      function S(r, n, e, t, o) {
        var i,
          a,
          f,
          u = new Uint32Array(16),
          c = new Uint32Array(16),
          w = new Uint32Array(16),
          y = new Uint32Array(4);
        for (i = 0; i < 4; i++)
          ((c[5 * i] = _(t, 4 * i)),
            (c[1 + i] = _(e, 4 * i)),
            (c[6 + i] = _(n, 4 * i)),
            (c[11 + i] = _(e, 16 + 4 * i)));
        for (i = 0; i < 16; i++) w[i] = c[i];
        for (i = 0; i < 20; i++) {
          for (a = 0; a < 4; a++) {
            for (f = 0; f < 4; f++) y[f] = c[(5 * a + 4 * f) % 16];
            for (
              y[1] ^= U((y[0] + y[3]) | 0, 7),
                y[2] ^= U((y[1] + y[0]) | 0, 9),
                y[3] ^= U((y[2] + y[1]) | 0, 13),
                y[0] ^= U((y[3] + y[2]) | 0, 18),
                f = 0;
              f < 4;
              f++
            )
              u[4 * a + ((a + f) % 4)] = y[f];
          }
          for (f = 0; f < 16; f++) c[f] = u[f];
        }
        if (o) {
          for (i = 0; i < 16; i++) c[i] = (c[i] + w[i]) | 0;
          for (i = 0; i < 4; i++)
            ((c[5 * i] = (c[5 * i] - _(t, 4 * i)) | 0),
              (c[6 + i] = (c[6 + i] - _(n, 4 * i)) | 0));
          for (i = 0; i < 4; i++)
            (x(r, 4 * i, c[5 * i]), x(r, 16 + 4 * i, c[6 + i]));
        } else for (i = 0; i < 16; i++) x(r, 4 * i, (c[i] + w[i]) | 0);
      }
      function K(r, n, e, t) {
        return (S(r, n, e, t, !1), 0);
      }
      function Y(r, n, e, t) {
        return (S(r, n, e, t, !0), 0);
      }
      var T = new Uint8Array([
        101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107,
      ]);
      function L(r, n, e, t, o, i, a) {
        var f,
          u,
          c = new Uint8Array(16),
          w = new Uint8Array(64);
        if (!o) return 0;
        for (u = 0; u < 16; u++) c[u] = 0;
        for (u = 0; u < 8; u++) c[u] = i[u];
        while (o >= 64) {
          for (K(w, c, a, T), u = 0; u < 64; u++)
            r[n + u] = (e ? e[t + u] : 0) ^ w[u];
          for (f = 1, u = 8; u < 16; u++)
            ((f = (f + (255 & c[u])) | 0), (c[u] = 255 & f), (f >>>= 8));
          ((o -= 64), (n += 64), e && (t += 64));
        }
        if (o > 0)
          for (K(w, c, a, T), u = 0; u < o; u++)
            r[n + u] = (e ? e[t + u] : 0) ^ w[u];
        return 0;
      }
      function z(r, n, e, t, o) {
        return L(r, n, null, 0, e, t, o);
      }
      function R(r, n, e, t, o) {
        var i = new Uint8Array(32);
        return (Y(i, t, o, T), z(r, n, e, t.subarray(16), i));
      }
      function P(r, n, e, t, o, i, a) {
        var f = new Uint8Array(32);
        return (Y(f, i, a, T), L(r, n, e, t, o, i.subarray(16), f));
      }
      function F(r, n) {
        var e,
          t = 0;
        for (e = 0; e < 17; e++)
          ((t = (t + ((r[e] + n[e]) | 0)) | 0), (r[e] = 255 & t), (t >>>= 8));
      }
      var N = new Uint32Array([
        5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252,
      ]);
      function O(r, n, e, t, o, i) {
        var a,
          f,
          u,
          c,
          w = new Uint32Array(17),
          y = new Uint32Array(17),
          l = new Uint32Array(17),
          h = new Uint32Array(17),
          s = new Uint32Array(17);
        for (u = 0; u < 17; u++) y[u] = l[u] = 0;
        for (u = 0; u < 16; u++) y[u] = i[u];
        ((y[3] &= 15),
          (y[4] &= 252),
          (y[7] &= 15),
          (y[8] &= 252),
          (y[11] &= 15),
          (y[12] &= 252),
          (y[15] &= 15));
        while (o > 0) {
          for (u = 0; u < 17; u++) h[u] = 0;
          for (u = 0; u < 16 && u < o; ++u) h[u] = e[t + u];
          for (h[u] = 1, t += u, o -= u, F(l, h), f = 0; f < 17; f++)
            for (w[f] = 0, u = 0; u < 17; u++)
              w[f] =
                0 |
                (w[f] + l[u] * (u <= f ? y[f - u] : (320 * y[f + 17 - u]) | 0));
          for (f = 0; f < 17; f++) l[f] = w[f];
          for (c = 0, u = 0; u < 16; u++)
            ((c = (c + l[u]) | 0), (l[u] = 255 & c), (c >>>= 8));
          for (
            c = (c + l[16]) | 0, l[16] = 3 & c, c = (5 * (c >>> 2)) | 0, u = 0;
            u < 16;
            u++
          )
            ((c = (c + l[u]) | 0), (l[u] = 255 & c), (c >>>= 8));
          ((c = (c + l[16]) | 0), (l[16] = c));
        }
        for (u = 0; u < 17; u++) s[u] = l[u];
        for (F(l, N), a = 0 | -(l[16] >>> 7), u = 0; u < 17; u++)
          l[u] ^= a & (s[u] ^ l[u]);
        for (u = 0; u < 16; u++) h[u] = i[u + 16];
        for (h[16] = 0, F(l, h), u = 0; u < 16; u++) r[n + u] = l[u];
        return 0;
      }
      function C(r, n, e, t, o, i) {
        var a = new Uint8Array(16);
        return (O(a, 0, e, t, o, i), B(r, n, a, 0));
      }
      function I(r, n, e, t, o) {
        var i;
        if (e < 32) return -1;
        for (
          P(r, 0, n, 0, e, t, o), O(r, 16, r, 32, e - 32, r), i = 0;
          i < 16;
          i++
        )
          r[i] = 0;
        return 0;
      }
      function M(r, n, e, t, o) {
        var i,
          a = new Uint8Array(32);
        if (e < 32) return -1;
        if ((R(a, 0, 32, t, o), 0 !== C(n, 16, n, 32, e - 32, a))) return -1;
        for (P(r, 0, n, 0, e, t, o), i = 0; i < 32; i++) r[i] = 0;
        return 0;
      }
      function G(r, n) {
        var e;
        for (e = 0; e < 16; e++) r[e] = 0 | n[e];
      }
      function Z(r) {
        var n, e;
        for (e = 0; e < 16; e++)
          ((r[e] += 65536),
            (n = Math.floor(r[e] / 65536)),
            (r[(e + 1) * (e < 15 ? 1 : 0)] +=
              n - 1 + 37 * (n - 1) * (15 === e ? 1 : 0)),
            (r[e] -= 65536 * n));
      }
      function J(r, n, e) {
        for (var t, o = ~(e - 1), i = 0; i < 16; i++)
          ((t = o & (r[i] ^ n[i])), (r[i] ^= t), (n[i] ^= t));
      }
      function V(r, n) {
        var e,
          t,
          o,
          i = u(),
          a = u();
        for (e = 0; e < 16; e++) a[e] = n[e];
        for (Z(a), Z(a), Z(a), t = 0; t < 2; t++) {
          for (i[0] = a[0] - 65517, e = 1; e < 15; e++)
            ((i[e] = a[e] - 65535 - ((i[e - 1] >> 16) & 1)),
              (i[e - 1] &= 65535));
          ((i[15] = a[15] - 32767 - ((i[14] >> 16) & 1)),
            (o = (i[15] >> 16) & 1),
            (i[14] &= 65535),
            J(a, i, 1 - o));
        }
        for (e = 0; e < 16; e++)
          ((r[2 * e] = 255 & a[e]), (r[2 * e + 1] = a[e] >> 8));
      }
      function X(r, n) {
        var e = new Uint8Array(32),
          t = new Uint8Array(32);
        return (V(e, r), V(t, n), m(e, 0, t, 0));
      }
      function D(r) {
        var n = new Uint8Array(32);
        return (V(n, r), 1 & n[0]);
      }
      function j(r, n) {
        var e;
        for (e = 0; e < 16; e++) r[e] = n[2 * e] + (n[2 * e + 1] << 8);
        r[15] &= 32767;
      }
      function q(r, n, e) {
        var t;
        for (t = 0; t < 16; t++) r[t] = (n[t] + e[t]) | 0;
      }
      function H(r, n, e) {
        var t;
        for (t = 0; t < 16; t++) r[t] = (n[t] - e[t]) | 0;
      }
      function Q(r, n, e) {
        var t,
          o,
          i = new Float64Array(31);
        for (t = 0; t < 31; t++) i[t] = 0;
        for (t = 0; t < 16; t++)
          for (o = 0; o < 16; o++) i[t + o] += n[t] * e[o];
        for (t = 0; t < 15; t++) i[t] += 38 * i[t + 16];
        for (t = 0; t < 16; t++) r[t] = i[t];
        (Z(r), Z(r));
      }
      function W(r, n) {
        Q(r, n, n);
      }
      function $(r, n) {
        var e,
          t = u();
        for (e = 0; e < 16; e++) t[e] = n[e];
        for (e = 253; e >= 0; e--) (W(t, t), 2 !== e && 4 !== e && Q(t, t, n));
        for (e = 0; e < 16; e++) r[e] = t[e];
      }
      function rr(r, n) {
        var e,
          t = u();
        for (e = 0; e < 16; e++) t[e] = n[e];
        for (e = 250; e >= 0; e--) (W(t, t), 1 !== e && Q(t, t, n));
        for (e = 0; e < 16; e++) r[e] = t[e];
      }
      function nr(r, n, e) {
        var t,
          o,
          i = new Uint8Array(32),
          a = new Float64Array(80),
          f = u(),
          c = u(),
          w = u(),
          y = u(),
          l = u(),
          h = u();
        for (o = 0; o < 31; o++) i[o] = n[o];
        for (
          i[31] = (127 & n[31]) | 64, i[0] &= 248, j(a, e), o = 0;
          o < 16;
          o++
        )
          ((c[o] = a[o]), (y[o] = f[o] = w[o] = 0));
        for (f[0] = y[0] = 1, o = 254; o >= 0; --o)
          ((t = (i[o >>> 3] >>> (7 & o)) & 1),
            J(f, c, t),
            J(w, y, t),
            q(l, f, w),
            H(f, f, w),
            q(w, c, y),
            H(c, c, y),
            W(y, l),
            W(h, f),
            Q(f, w, f),
            Q(w, c, l),
            q(l, f, w),
            H(f, f, w),
            W(c, f),
            H(w, y, h),
            Q(f, w, s),
            q(f, f, y),
            Q(w, w, f),
            Q(f, y, h),
            Q(y, c, a),
            W(c, l),
            J(f, c, t),
            J(w, y, t));
        for (o = 0; o < 16; o++)
          ((a[o + 16] = f[o]),
            (a[o + 32] = w[o]),
            (a[o + 48] = c[o]),
            (a[o + 64] = y[o]));
        var v = a.subarray(32),
          b = a.subarray(16);
        return ($(v, v), Q(b, b, v), V(r, b), 0);
      }
      function er(r, n) {
        return nr(r, n, y);
      }
      function tr(r, n) {
        return (c(n, 32), er(r, n));
      }
      function or(r, n, e) {
        var t = new Uint8Array(32);
        return (nr(t, e, n), Y(r, w, t, T));
      }
      var ir = I,
        ar = M;
      function fr(r, n, e, t, o, i) {
        var a = new Uint8Array(32);
        return (or(a, o, i), ir(r, n, e, t, a));
      }
      function ur(r, n, e, t, o, i) {
        var a = new Uint8Array(32);
        return (or(a, o, i), ar(r, n, e, t, a));
      }
      function cr() {
        var r,
          n,
          e,
          t = 0,
          o = 0,
          i = 0,
          a = 0,
          u = 65535;
        for (e = 0; e < arguments.length; e++)
          ((r = arguments[e].lo),
            (n = arguments[e].hi),
            (t += r & u),
            (o += r >>> 16),
            (i += n & u),
            (a += n >>> 16));
        return (
          (o += t >>> 16),
          (i += o >>> 16),
          (a += i >>> 16),
          new f((i & u) | (a << 16), (t & u) | (o << 16))
        );
      }
      function wr(r, n) {
        return new f(r.hi >>> n, (r.lo >>> n) | (r.hi << (32 - n)));
      }
      function yr() {
        var r,
          n = 0,
          e = 0;
        for (r = 0; r < arguments.length; r++)
          ((n ^= arguments[r].lo), (e ^= arguments[r].hi));
        return new f(e, n);
      }
      function lr(r, n) {
        var e,
          t,
          o = 32 - n;
        return (
          n < 32
            ? ((e = (r.hi >>> n) | (r.lo << o)),
              (t = (r.lo >>> n) | (r.hi << o)))
            : n < 64 &&
              ((e = (r.lo >>> n) | (r.hi << o)),
              (t = (r.hi >>> n) | (r.lo << o))),
          new f(e, t)
        );
      }
      function hr(r, n, e) {
        var t = (r.hi & n.hi) ^ (~r.hi & e.hi),
          o = (r.lo & n.lo) ^ (~r.lo & e.lo);
        return new f(t, o);
      }
      function sr(r, n, e) {
        var t = (r.hi & n.hi) ^ (r.hi & e.hi) ^ (n.hi & e.hi),
          o = (r.lo & n.lo) ^ (r.lo & e.lo) ^ (n.lo & e.lo);
        return new f(t, o);
      }
      function vr(r) {
        return yr(lr(r, 28), lr(r, 34), lr(r, 39));
      }
      function br(r) {
        return yr(lr(r, 14), lr(r, 18), lr(r, 41));
      }
      function gr(r) {
        return yr(lr(r, 1), lr(r, 8), wr(r, 7));
      }
      function Ar(r) {
        return yr(lr(r, 19), lr(r, 61), wr(r, 6));
      }
      var pr = [
        new f(1116352408, 3609767458),
        new f(1899447441, 602891725),
        new f(3049323471, 3964484399),
        new f(3921009573, 2173295548),
        new f(961987163, 4081628472),
        new f(1508970993, 3053834265),
        new f(2453635748, 2937671579),
        new f(2870763221, 3664609560),
        new f(3624381080, 2734883394),
        new f(310598401, 1164996542),
        new f(607225278, 1323610764),
        new f(1426881987, 3590304994),
        new f(1925078388, 4068182383),
        new f(2162078206, 991336113),
        new f(2614888103, 633803317),
        new f(3248222580, 3479774868),
        new f(3835390401, 2666613458),
        new f(4022224774, 944711139),
        new f(264347078, 2341262773),
        new f(604807628, 2007800933),
        new f(770255983, 1495990901),
        new f(1249150122, 1856431235),
        new f(1555081692, 3175218132),
        new f(1996064986, 2198950837),
        new f(2554220882, 3999719339),
        new f(2821834349, 766784016),
        new f(2952996808, 2566594879),
        new f(3210313671, 3203337956),
        new f(3336571891, 1034457026),
        new f(3584528711, 2466948901),
        new f(113926993, 3758326383),
        new f(338241895, 168717936),
        new f(666307205, 1188179964),
        new f(773529912, 1546045734),
        new f(1294757372, 1522805485),
        new f(1396182291, 2643833823),
        new f(1695183700, 2343527390),
        new f(1986661051, 1014477480),
        new f(2177026350, 1206759142),
        new f(2456956037, 344077627),
        new f(2730485921, 1290863460),
        new f(2820302411, 3158454273),
        new f(3259730800, 3505952657),
        new f(3345764771, 106217008),
        new f(3516065817, 3606008344),
        new f(3600352804, 1432725776),
        new f(4094571909, 1467031594),
        new f(275423344, 851169720),
        new f(430227734, 3100823752),
        new f(506948616, 1363258195),
        new f(659060556, 3750685593),
        new f(883997877, 3785050280),
        new f(958139571, 3318307427),
        new f(1322822218, 3812723403),
        new f(1537002063, 2003034995),
        new f(1747873779, 3602036899),
        new f(1955562222, 1575990012),
        new f(2024104815, 1125592928),
        new f(2227730452, 2716904306),
        new f(2361852424, 442776044),
        new f(2428436474, 593698344),
        new f(2756734187, 3733110249),
        new f(3204031479, 2999351573),
        new f(3329325298, 3815920427),
        new f(3391569614, 3928383900),
        new f(3515267271, 566280711),
        new f(3940187606, 3454069534),
        new f(4118630271, 4000239992),
        new f(116418474, 1914138554),
        new f(174292421, 2731055270),
        new f(289380356, 3203993006),
        new f(460393269, 320620315),
        new f(685471733, 587496836),
        new f(852142971, 1086792851),
        new f(1017036298, 365543100),
        new f(1126000580, 2618297676),
        new f(1288033470, 3409855158),
        new f(1501505948, 4234509866),
        new f(1607167915, 987167468),
        new f(1816402316, 1246189591),
      ];
      function Ur(r, n, e) {
        var t,
          o,
          i,
          a = [],
          f = [],
          u = [],
          c = [];
        for (o = 0; o < 8; o++) a[o] = u[o] = E(r, 8 * o);
        var w = 0;
        while (e >= 128) {
          for (o = 0; o < 16; o++) c[o] = E(n, 8 * o + w);
          for (o = 0; o < 80; o++) {
            for (i = 0; i < 8; i++) f[i] = u[i];
            for (
              t = cr(u[7], br(u[4]), hr(u[4], u[5], u[6]), pr[o], c[o % 16]),
                f[7] = cr(t, vr(u[0]), sr(u[0], u[1], u[2])),
                f[3] = cr(f[3], t),
                i = 0;
              i < 8;
              i++
            )
              u[(i + 1) % 8] = f[i];
            if (o % 16 === 15)
              for (i = 0; i < 16; i++)
                c[i] = cr(
                  c[i],
                  c[(i + 9) % 16],
                  gr(c[(i + 1) % 16]),
                  Ar(c[(i + 14) % 16]),
                );
          }
          for (o = 0; o < 8; o++) ((u[o] = cr(u[o], a[o])), (a[o] = u[o]));
          ((w += 128), (e -= 128));
        }
        for (o = 0; o < 8; o++) d(r, 8 * o, a[o]);
        return e;
      }
      var _r = new Uint8Array([
        106, 9, 230, 103, 243, 188, 201, 8, 187, 103, 174, 133, 132, 202, 167,
        59, 60, 110, 243, 114, 254, 148, 248, 43, 165, 79, 245, 58, 95, 29, 54,
        241, 81, 14, 82, 127, 173, 230, 130, 209, 155, 5, 104, 140, 43, 62, 108,
        31, 31, 131, 217, 171, 251, 65, 189, 107, 91, 224, 205, 25, 19, 126, 33,
        121,
      ]);
      function Er(r, n, e) {
        var t,
          o = new Uint8Array(64),
          i = new Uint8Array(256),
          a = e;
        for (t = 0; t < 64; t++) o[t] = _r[t];
        for (Ur(o, n, e), e %= 128, t = 0; t < 256; t++) i[t] = 0;
        for (t = 0; t < e; t++) i[t] = n[a - e + t];
        for (
          i[e] = 128,
            e = 256 - 128 * (e < 112 ? 1 : 0),
            i[e - 9] = 0,
            d(i, e - 8, new f((a / 536870912) | 0, a << 3)),
            Ur(o, i, e),
            t = 0;
          t < 64;
          t++
        )
          r[t] = o[t];
        return 0;
      }
      function xr(r, n) {
        var e = u(),
          t = u(),
          o = u(),
          i = u(),
          a = u(),
          f = u(),
          c = u(),
          w = u(),
          y = u();
        (H(e, r[1], r[0]),
          H(y, n[1], n[0]),
          Q(e, e, y),
          q(t, r[0], r[1]),
          q(y, n[0], n[1]),
          Q(t, t, y),
          Q(o, r[3], n[3]),
          Q(o, o, b),
          Q(i, r[2], n[2]),
          q(i, i, i),
          H(a, t, e),
          H(f, i, o),
          q(c, i, o),
          q(w, t, e),
          Q(r[0], a, f),
          Q(r[1], w, c),
          Q(r[2], c, f),
          Q(r[3], a, w));
      }
      function dr(r, n, e) {
        var t;
        for (t = 0; t < 4; t++) J(r[t], n[t], e);
      }
      function kr(r, n) {
        var e = u(),
          t = u(),
          o = u();
        ($(o, n[2]),
          Q(e, n[0], o),
          Q(t, n[1], o),
          V(r, t),
          (r[31] ^= D(e) << 7));
      }
      function Br(r, n, e) {
        var t, o;
        for (
          G(r[0], l), G(r[1], h), G(r[2], h), G(r[3], l), o = 255;
          o >= 0;
          --o
        )
          ((t = (e[(o / 8) | 0] >> (7 & o)) & 1),
            dr(r, n, t),
            xr(n, r),
            xr(r, r),
            dr(r, n, t));
      }
      function mr(r, n) {
        var e = [u(), u(), u(), u()];
        (G(e[0], g), G(e[1], A), G(e[2], h), Q(e[3], g, A), Br(r, e, n));
      }
      function Sr(r, n, e) {
        var a = new Uint8Array(64),
          f = [u(), u(), u(), u()];
        e || c(n, 32);
        var w = t(64);
        return (
          o(w, n),
          (a = i(w)),
          (a[0] &= 248),
          (a[31] &= 127),
          (a[31] |= 64),
          mr(f, a),
          kr(r, f),
          0
        );
      }
      function Kr(r) {
        var n = new Uint8Array(64),
          e = [u(), u(), u(), u()],
          a = new Uint8Array(32),
          f = t(64);
        return (
          o(f, r),
          (n = i(f)),
          (n[0] &= 248),
          (n[31] &= 127),
          (n[31] |= 64),
          mr(e, n),
          kr(a, e),
          a
        );
      }
      var Yr = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function Tr(r, n) {
        var e, t, o, i;
        for (t = 63; t >= 32; --t) {
          for (e = 0, o = t - 32, i = t - 12; o < i; ++o)
            ((n[o] += e - 16 * n[t] * Yr[o - (t - 32)]),
              (e = (n[o] + 128) >> 8),
              (n[o] -= 256 * e));
          ((n[o] += e), (n[t] = 0));
        }
        for (e = 0, o = 0; o < 32; o++)
          ((n[o] += e - (n[31] >> 4) * Yr[o]), (e = n[o] >> 8), (n[o] &= 255));
        for (o = 0; o < 32; o++) n[o] -= e * Yr[o];
        for (t = 0; t < 32; t++) ((n[t + 1] += n[t] >> 8), (r[t] = 255 & n[t]));
      }
      function Lr(r) {
        var n,
          e = new Float64Array(64);
        for (n = 0; n < 64; n++) e[n] = r[n];
        for (n = 0; n < 64; n++) r[n] = 0;
        Tr(r, e);
      }
      function zr(r, n, e, a) {
        var f,
          c,
          w = new Uint8Array(64),
          y = new Uint8Array(64),
          l = new Uint8Array(64),
          h = new Float64Array(64),
          s = [u(), u(), u(), u()],
          v = Kr(a),
          b = t(64, null);
        (o(b, a), (w = i(b)), (w[0] &= 248), (w[31] &= 127), (w[31] |= 64));
        var g = e + 64;
        for (f = 0; f < e; f++) r[64 + f] = n[f];
        for (f = 0; f < 32; f++) r[32 + f] = w[32 + f];
        for (
          b = t(64, null),
            o(b, r.subarray(32)),
            l = i(b),
            Lr(l),
            mr(s, l),
            kr(r, s),
            f = 32;
          f < 64;
          f++
        )
          r[f] = v[f - 32];
        for (b = t(64, null), o(b, r), y = i(b), Lr(y), f = 0; f < 64; f++)
          h[f] = 0;
        for (f = 0; f < 32; f++) h[f] = l[f];
        for (f = 0; f < 32; f++)
          for (c = 0; c < 32; c++) h[f + c] += y[f] * w[c];
        return (Tr(r.subarray(32), h), g);
      }
      function Rr(r, n) {
        var e = u(),
          t = u(),
          o = u(),
          i = u(),
          a = u(),
          f = u(),
          c = u();
        return (
          G(r[2], h),
          j(r[1], n),
          W(o, r[1]),
          Q(i, o, v),
          H(o, o, r[2]),
          q(i, r[2], i),
          W(a, i),
          W(f, a),
          Q(c, f, a),
          Q(e, c, o),
          Q(e, e, i),
          rr(e, e),
          Q(e, e, o),
          Q(e, e, i),
          Q(e, e, i),
          Q(r[0], e, i),
          W(t, r[0]),
          Q(t, t, i),
          X(t, o) && Q(r[0], r[0], p),
          W(t, r[0]),
          Q(t, t, i),
          X(t, o)
            ? -1
            : (D(r[0]) === n[31] >> 7 && H(r[0], l, r[0]),
              Q(r[3], r[0], r[1]),
              0)
        );
      }
      function Pr(r, n, e, a) {
        var f,
          c,
          w = new Uint8Array(32),
          y = new Uint8Array(64),
          l = [u(), u(), u(), u()],
          h = [u(), u(), u(), u()];
        if (((c = -1), e < 64)) return -1;
        if (Rr(h, a)) return -1;
        for (f = 0; f < e; f++) r[f] = n[f];
        for (f = 0; f < 32; f++) r[f + 32] = a[f];
        if (
          ((context = t(64, null)),
          o(context, r),
          (y = i(context)),
          Lr(y),
          Br(l, h, y),
          mr(h, n.subarray(32)),
          xr(l, h),
          kr(w, l),
          (e -= 64),
          m(n, 0, w, 0))
        ) {
          for (f = 0; f < e; f++) r[f] = 0;
          return -1;
        }
        for (f = 0; f < e; f++) r[f] = n[f + 64];
        return ((c = e), c);
      }
      var Fr = 32,
        Nr = 24,
        Or = 32,
        Cr = 16,
        Ir = 32,
        Mr = 32,
        Gr = 32,
        Zr = 32,
        Jr = 32,
        Vr = Nr,
        Xr = Or,
        Dr = Cr,
        jr = 64,
        qr = 32,
        Hr = 32,
        Qr = 32,
        Wr = 64;
      function $r(r, n) {
        if (r.length !== Fr) throw new Error("bad key size");
        if (n.length !== Nr) throw new Error("bad nonce size");
      }
      function rn(r, n) {
        if (r.length !== Gr) throw new Error("bad public key size");
        if (n.length !== Zr) throw new Error("bad secret key size");
      }
      function nn() {
        for (var r = 0; r < arguments.length; r++)
          if (!(arguments[r] instanceof Uint8Array))
            throw new TypeError("unexpected type, use Uint8Array");
      }
      function en(r) {
        for (var n = 0; n < r.length; n++) r[n] = 0;
      }
      ((a.lowlevel = {
        crypto_core_hsalsa20: Y,
        crypto_stream_xor: P,
        crypto_stream: R,
        crypto_stream_salsa20_xor: L,
        crypto_stream_salsa20: z,
        crypto_onetimeauth: O,
        crypto_onetimeauth_verify: C,
        crypto_verify_16: B,
        crypto_verify_32: m,
        crypto_secretbox: I,
        crypto_secretbox_open: M,
        crypto_scalarmult: nr,
        crypto_scalarmult_base: er,
        crypto_box_beforenm: or,
        crypto_box_afternm: ir,
        crypto_box: fr,
        crypto_box_open: ur,
        crypto_box_keypair: tr,
        crypto_hash: Er,
        crypto_sign: zr,
        crypto_sign_keypair: Sr,
        crypto_sign_open: Pr,
        crypto_secretbox_KEYBYTES: Fr,
        crypto_secretbox_NONCEBYTES: Nr,
        crypto_secretbox_ZEROBYTES: Or,
        crypto_secretbox_BOXZEROBYTES: Cr,
        crypto_scalarmult_BYTES: Ir,
        crypto_scalarmult_SCALARBYTES: Mr,
        crypto_box_PUBLICKEYBYTES: Gr,
        crypto_box_SECRETKEYBYTES: Zr,
        crypto_box_BEFORENMBYTES: Jr,
        crypto_box_NONCEBYTES: Vr,
        crypto_box_ZEROBYTES: Xr,
        crypto_box_BOXZEROBYTES: Dr,
        crypto_sign_BYTES: jr,
        crypto_sign_PUBLICKEYBYTES: qr,
        crypto_sign_SECRETKEYBYTES: Hr,
        crypto_sign_SEEDBYTES: Qr,
        crypto_hash_BYTES: Wr,
      }),
        (a.randomBytes = function (r) {
          var n = new Uint8Array(r);
          return (c(n, r), n);
        }),
        (a.secretbox = function (r, n, e) {
          (nn(r, n, e), $r(e, n));
          for (
            var t = new Uint8Array(Or + r.length),
              o = new Uint8Array(t.length),
              i = 0;
            i < r.length;
            i++
          )
            t[i + Or] = r[i];
          return (I(o, t, t.length, n, e), o.subarray(Cr));
        }),
        (a.secretbox.open = function (r, n, e) {
          (nn(r, n, e), $r(e, n));
          for (
            var t = new Uint8Array(Cr + r.length),
              o = new Uint8Array(t.length),
              i = 0;
            i < r.length;
            i++
          )
            t[i + Cr] = r[i];
          return t.length < 32 || 0 !== M(o, t, t.length, n, e)
            ? null
            : o.subarray(Or);
        }),
        (a.secretbox.keyLength = Fr),
        (a.secretbox.nonceLength = Nr),
        (a.secretbox.overheadLength = Cr),
        (a.scalarMult = function (r, n) {
          if ((nn(r, n), r.length !== Mr)) throw new Error("bad n size");
          if (n.length !== Ir) throw new Error("bad p size");
          var e = new Uint8Array(Ir);
          return (nr(e, r, n), e);
        }),
        (a.scalarMult.base = function (r) {
          if ((nn(r), r.length !== Mr)) throw new Error("bad n size");
          var n = new Uint8Array(Ir);
          return (er(n, r), n);
        }),
        (a.scalarMult.scalarLength = Mr),
        (a.scalarMult.groupElementLength = Ir),
        (a.box = function (r, n, e, t) {
          var o = a.box.before(e, t);
          return a.secretbox(r, n, o);
        }),
        (a.box.before = function (r, n) {
          (nn(r, n), rn(r, n));
          var e = new Uint8Array(Jr);
          return (or(e, r, n), e);
        }),
        (a.box.after = a.secretbox),
        (a.box.open = function (r, n, e, t) {
          var o = a.box.before(e, t);
          return a.secretbox.open(r, n, o);
        }),
        (a.box.open.after = a.secretbox.open),
        (a.box.keyPair = function () {
          var r = new Uint8Array(Gr),
            n = new Uint8Array(Zr);
          return (tr(r, n), { publicKey: r, secretKey: n });
        }),
        (a.box.keyPair.fromSecretKey = function (r) {
          if ((nn(r), r.length !== Zr)) throw new Error("bad secret key size");
          var n = new Uint8Array(Gr);
          return (er(n, r), { publicKey: n, secretKey: new Uint8Array(r) });
        }),
        (a.box.publicKeyLength = Gr),
        (a.box.secretKeyLength = Zr),
        (a.box.sharedKeyLength = Jr),
        (a.box.nonceLength = Vr),
        (a.box.overheadLength = a.secretbox.overheadLength),
        (a.sign = function (r, n) {
          if ((nn(r, n), n.length !== Hr))
            throw new Error("bad secret key size");
          var e = new Uint8Array(jr + r.length);
          return (zr(e, r, r.length, n), e);
        }),
        (a.sign.open = function (r, n) {
          if ((nn(r, n), n.length !== qr))
            throw new Error("bad public key size");
          var e = new Uint8Array(r.length),
            t = Pr(e, r, r.length, n);
          if (t < 0) return null;
          for (var o = new Uint8Array(t), i = 0; i < o.length; i++) o[i] = e[i];
          return o;
        }),
        (a.sign.detached = function (r, n) {
          for (
            var e = a.sign(r, n), t = new Uint8Array(jr), o = 0;
            o < t.length;
            o++
          )
            t[o] = e[o];
          return t;
        }),
        (a.sign.detached.verify = function (r, n, e) {
          if ((nn(r, n, e), n.length !== jr))
            throw new Error("bad signature size");
          if (e.length !== qr) throw new Error("bad public key size");
          var t,
            o = new Uint8Array(jr + r.length),
            i = new Uint8Array(jr + r.length);
          for (t = 0; t < jr; t++) o[t] = n[t];
          for (t = 0; t < r.length; t++) o[t + jr] = r[t];
          return Pr(i, o, o.length, e) >= 0;
        }),
        (a.sign.keyPair = function () {
          var r = new Uint8Array(qr),
            n = new Uint8Array(Hr);
          return (Sr(r, n), { publicKey: r, secretKey: n });
        }),
        (a.sign.keyPair.fromSecretKey = function (r) {
          if ((nn(r), r.length !== Hr)) throw new Error("bad secret key size");
          var n = new Uint8Array(qr);
          return ((n = Kr(r)), { publicKey: n, secretKey: new Uint8Array(r) });
        }),
        (a.sign.keyPair.fromSeed = function (r) {
          if ((nn(r), r.length !== Qr)) throw new Error("bad seed size");
          for (
            var n = new Uint8Array(qr), e = new Uint8Array(Hr), t = 0;
            t < 32;
            t++
          )
            e[t] = r[t];
          return (Sr(n, e, !0), { publicKey: n, secretKey: e });
        }),
        (a.sign.publicKeyLength = qr),
        (a.sign.secretKeyLength = Hr),
        (a.sign.seedLength = Qr),
        (a.sign.signatureLength = jr),
        (a.hash = function (r) {
          nn(r);
          var n = new Uint8Array(Wr);
          return (Er(n, r, r.length), n);
        }),
        (a.hash.hashLength = Wr),
        (a.verify = function (r, n) {
          return (
            nn(r, n),
            0 !== r.length &&
              0 !== n.length &&
              r.length === n.length &&
              0 === k(r, 0, n, 0, r.length)
          );
        }),
        (a.setPRNG = function (r) {
          c = r;
        }),
        (function () {
          var r =
            "undefined" !== typeof self ? self.crypto || self.msCrypto : null;
          if (r && r.getRandomValues) {
            var n = 65536;
            a.setPRNG(function (e, t) {
              var o,
                i = new Uint8Array(t);
              for (o = 0; o < t; o += n)
                r.getRandomValues(i.subarray(o, o + Math.min(t - o, n)));
              for (o = 0; o < t; o++) e[o] = i[o];
              en(i);
            });
          } else
            ((r = e(2764)),
              r &&
                r.randomBytes &&
                a.setPRNG(function (n, e) {
                  var t,
                    o = r.randomBytes(e);
                  for (t = 0; t < e; t++) n[t] = o[t];
                  en(o);
                }));
        })(),
        (r.exports = a));
    },
  },
]);
