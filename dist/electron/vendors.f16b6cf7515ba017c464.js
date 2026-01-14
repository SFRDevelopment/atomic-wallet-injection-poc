(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [357],
  {
    10497: function (n, t, e) {
      "use strict";
      var r = e(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = l));
      var o = r(e(4972)),
        i = r(e(10498));
      function l(n, t) {
        if ((void 0 === t && (t = ["nano", "xrb"]), void 0 === n))
          throw Error("Address must be defined.");
        if ("string" != typeof n) throw TypeError("Address must be a string.");
        var e;
        if (Array.isArray(t)) {
          if (
            t.some(function (n) {
              return "string" != typeof n;
            })
          )
            throw TypeError("Prefix must be a string or an array of strings.");
          e = t;
        } else {
          if ("string" != typeof t)
            throw TypeError("Prefix must be a string or an array of strings.");
          e = [t];
        }
        if (
          !new RegExp(
            "^(" +
              e.join("|") +
              ")_[13]{1}[13456789abcdefghijkmnopqrstuwxyz]{59}$",
          ).test(n)
        )
          return !1;
        var r = n.slice(-8),
          l = n.slice(n.indexOf("_") + 1, -8),
          a = i.default.decode(l),
          s = o.default.blake2b(a, null, 5).reverse();
        return r === i.default.encode(s);
      }
    },
    10498: function (n, t) {
      const e = "13456789abcdefghijkmnopqrstuwxyz";
      function r(n) {
        if (n.constructor !== Uint8Array)
          throw new Error("View must be a Uint8Array!");
        const t = n.length,
          r = (8 * t) % 5,
          o = 0 === r ? 0 : 5 - r;
        let i = 0,
          l = "",
          a = 0;
        for (var s = 0; s < t; s++) {
          ((i = (i << 8) | n[s]), (a += 8));
          while (a >= 5) ((l += e[(i >>> (a + o - 5)) & 31]), (a -= 5));
        }
        return (a > 0 && (l += e[(i << (5 - (a + o))) & 31]), l);
      }
      function o(n) {
        var t = e.indexOf(n);
        if (-1 === t) throw new Error("Invalid character found: " + n);
        return t;
      }
      function i(n) {
        if ("string" !== typeof n) throw new Error("Input must be a string!");
        var t = n.length;
        const e = (5 * t) % 8,
          r = 0 === e ? 0 : 8 - e;
        for (
          var i = 0,
            l = 0,
            a = 0,
            s = new Uint8Array(Math.ceil((5 * t) / 8)),
            c = 0;
          c < t;
          c++
        )
          ((l = (l << 5) | o(n[c])),
            (i += 5),
            i >= 8 && ((s[a++] = (l >>> (i + r - 8)) & 255), (i -= 8)));
        return (
          i > 0 && (s[a++] = (l << (i + r - 8)) & 255),
          0 !== e && (s = s.slice(1)),
          s
        );
      }
      n.exports = { encode: r, decode: i };
    },
    4281: function (n, t) {
      const e = "Input must be an string, Buffer or Uint8Array";
      function r(n) {
        let t;
        if (n instanceof Uint8Array) t = n;
        else {
          if ("string" !== typeof n) throw new Error(e);
          {
            const e = new TextEncoder();
            t = e.encode(n);
          }
        }
        return t;
      }
      function o(n) {
        return Array.prototype.map
          .call(n, function (n) {
            return (n < 16 ? "0" : "") + n.toString(16);
          })
          .join("");
      }
      function i(n) {
        return (4294967296 + n).toString(16).substring(1);
      }
      function l(n, t, e) {
        let r = "\n" + n + " = ";
        for (let o = 0; o < t.length; o += 2) {
          if (32 === e)
            ((r += i(t[o]).toUpperCase()),
              (r += " "),
              (r += i(t[o + 1]).toUpperCase()));
          else {
            if (64 !== e) throw new Error("Invalid size " + e);
            ((r += i(t[o + 1]).toUpperCase()), (r += i(t[o]).toUpperCase()));
          }
          o % 6 === 4
            ? (r += "\n" + new Array(n.length + 4).join(" "))
            : o < t.length - 2 && (r += " ");
        }
        console.log(r);
      }
      function a(n, t, e) {
        let r = new Date().getTime();
        const o = new Uint8Array(t);
        for (let l = 0; l < t; l++) o[l] = l % 256;
        const i = new Date().getTime();
        (console.log("Generated random input in " + (i - r) + "ms"), (r = i));
        for (let l = 0; l < e; l++) {
          const e = n(o),
            i = new Date().getTime(),
            l = i - r;
          ((r = i),
            console.log("Hashed in " + l + "ms: " + e.substring(0, 20) + "..."),
            console.log(
              Math.round((t / (1 << 20) / (l / 1e3)) * 100) / 100 +
                " MB PER SECOND",
            ));
        }
      }
      n.exports = { normalizeInput: r, toHex: o, debugPrint: l, testSpeed: a };
    },
    4972: function (n, t, e) {
      const r = e(4973),
        o = e(4974);
      n.exports = {
        blake2b: r.blake2b,
        blake2bHex: r.blake2bHex,
        blake2bInit: r.blake2bInit,
        blake2bUpdate: r.blake2bUpdate,
        blake2bFinal: r.blake2bFinal,
        blake2s: o.blake2s,
        blake2sHex: o.blake2sHex,
        blake2sInit: o.blake2sInit,
        blake2sUpdate: o.blake2sUpdate,
        blake2sFinal: o.blake2sFinal,
      };
    },
    4973: function (n, t, e) {
      const r = e(4281);
      function o(n, t, e) {
        const r = n[t] + n[e];
        let o = n[t + 1] + n[e + 1];
        (r >= 4294967296 && o++, (n[t] = r), (n[t + 1] = o));
      }
      function i(n, t, e, r) {
        let o = n[t] + e;
        e < 0 && (o += 4294967296);
        let i = n[t + 1] + r;
        (o >= 4294967296 && i++, (n[t] = o), (n[t + 1] = i));
      }
      function l(n, t) {
        return n[t] ^ (n[t + 1] << 8) ^ (n[t + 2] << 16) ^ (n[t + 3] << 24);
      }
      function a(n, t, e, r, l, a) {
        const s = b[l],
          c = b[l + 1],
          u = b[a],
          h = b[a + 1];
        (o(f, n, t), i(f, n, s, c));
        let w = f[r] ^ f[n],
          p = f[r + 1] ^ f[n + 1];
        ((f[r] = p),
          (f[r + 1] = w),
          o(f, e, r),
          (w = f[t] ^ f[e]),
          (p = f[t + 1] ^ f[e + 1]),
          (f[t] = (w >>> 24) ^ (p << 8)),
          (f[t + 1] = (p >>> 24) ^ (w << 8)),
          o(f, n, t),
          i(f, n, u, h),
          (w = f[r] ^ f[n]),
          (p = f[r + 1] ^ f[n + 1]),
          (f[r] = (w >>> 16) ^ (p << 16)),
          (f[r + 1] = (p >>> 16) ^ (w << 16)),
          o(f, e, r),
          (w = f[t] ^ f[e]),
          (p = f[t + 1] ^ f[e + 1]),
          (f[t] = (p >>> 31) ^ (w << 1)),
          (f[t + 1] = (w >>> 31) ^ (p << 1)));
      }
      const s = new Uint32Array([
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
        u = new Uint8Array(
          c.map(function (n) {
            return 2 * n;
          }),
        ),
        f = new Uint32Array(32),
        b = new Uint32Array(32);
      function h(n, t) {
        let e = 0;
        for (e = 0; e < 16; e++) ((f[e] = n.h[e]), (f[e + 16] = s[e]));
        for (
          f[24] = f[24] ^ n.t,
            f[25] = f[25] ^ (n.t / 4294967296),
            t && ((f[28] = ~f[28]), (f[29] = ~f[29])),
            e = 0;
          e < 32;
          e++
        )
          b[e] = l(n.b, 4 * e);
        for (e = 0; e < 12; e++)
          (a(0, 8, 16, 24, u[16 * e + 0], u[16 * e + 1]),
            a(2, 10, 18, 26, u[16 * e + 2], u[16 * e + 3]),
            a(4, 12, 20, 28, u[16 * e + 4], u[16 * e + 5]),
            a(6, 14, 22, 30, u[16 * e + 6], u[16 * e + 7]),
            a(0, 10, 20, 30, u[16 * e + 8], u[16 * e + 9]),
            a(2, 12, 22, 24, u[16 * e + 10], u[16 * e + 11]),
            a(4, 14, 16, 26, u[16 * e + 12], u[16 * e + 13]),
            a(6, 8, 18, 28, u[16 * e + 14], u[16 * e + 15]));
        for (e = 0; e < 16; e++) n.h[e] = n.h[e] ^ f[e] ^ f[e + 16];
      }
      const w = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]);
      function p(n, t, e, r) {
        if (0 === n || n > 64)
          throw new Error("Illegal output length, expected 0 < length <= 64");
        if (t && t.length > 64)
          throw new Error(
            "Illegal key, expected Uint8Array with 0 < length <= 64",
          );
        if (e && 16 !== e.length)
          throw new Error(
            "Illegal salt, expected Uint8Array with length is 16",
          );
        if (r && 16 !== r.length)
          throw new Error(
            "Illegal personal, expected Uint8Array with length is 16",
          );
        const o = {
          b: new Uint8Array(128),
          h: new Uint32Array(16),
          t: 0,
          c: 0,
          outlen: n,
        };
        (w.fill(0),
          (w[0] = n),
          t && (w[1] = t.length),
          (w[2] = 1),
          (w[3] = 1),
          e && w.set(e, 32),
          r && w.set(r, 48));
        for (let i = 0; i < 16; i++) o.h[i] = s[i] ^ l(w, 4 * i);
        return (t && (g(o, t), (o.c = 128)), o);
      }
      function g(n, t) {
        for (let e = 0; e < t.length; e++)
          (128 === n.c && ((n.t += n.c), h(n, !1), (n.c = 0)),
            (n.b[n.c++] = t[e]));
      }
      function d(n) {
        n.t += n.c;
        while (n.c < 128) n.b[n.c++] = 0;
        h(n, !0);
        const t = new Uint8Array(n.outlen);
        for (let e = 0; e < n.outlen; e++) t[e] = n.h[e >> 2] >> (8 * (3 & e));
        return t;
      }
      function y(n, t, e, o, i) {
        ((e = e || 64),
          (n = r.normalizeInput(n)),
          o && (o = r.normalizeInput(o)),
          i && (i = r.normalizeInput(i)));
        const l = p(e, t, o, i);
        return (g(l, n), d(l));
      }
      function k(n, t, e, o, i) {
        const l = y(n, t, e, o, i);
        return r.toHex(l);
      }
      n.exports = {
        blake2b: y,
        blake2bHex: k,
        blake2bInit: p,
        blake2bUpdate: g,
        blake2bFinal: d,
      };
    },
    4974: function (n, t, e) {
      const r = e(4281);
      function o(n, t) {
        return n[t] ^ (n[t + 1] << 8) ^ (n[t + 2] << 16) ^ (n[t + 3] << 24);
      }
      function i(n, t, e, r, o, i) {
        ((c[n] = c[n] + c[t] + o),
          (c[r] = l(c[r] ^ c[n], 16)),
          (c[e] = c[e] + c[r]),
          (c[t] = l(c[t] ^ c[e], 12)),
          (c[n] = c[n] + c[t] + i),
          (c[r] = l(c[r] ^ c[n], 8)),
          (c[e] = c[e] + c[r]),
          (c[t] = l(c[t] ^ c[e], 7)));
      }
      function l(n, t) {
        return (n >>> t) ^ (n << (32 - t));
      }
      const a = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        s = new Uint8Array([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
          15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10,
          14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0,
          15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6,
          10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4,
          10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4,
          8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10,
          2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
        ]),
        c = new Uint32Array(16),
        u = new Uint32Array(16);
      function f(n, t) {
        let e = 0;
        for (e = 0; e < 8; e++) ((c[e] = n.h[e]), (c[e + 8] = a[e]));
        for (
          c[12] ^= n.t, c[13] ^= n.t / 4294967296, t && (c[14] = ~c[14]), e = 0;
          e < 16;
          e++
        )
          u[e] = o(n.b, 4 * e);
        for (e = 0; e < 10; e++)
          (i(0, 4, 8, 12, u[s[16 * e + 0]], u[s[16 * e + 1]]),
            i(1, 5, 9, 13, u[s[16 * e + 2]], u[s[16 * e + 3]]),
            i(2, 6, 10, 14, u[s[16 * e + 4]], u[s[16 * e + 5]]),
            i(3, 7, 11, 15, u[s[16 * e + 6]], u[s[16 * e + 7]]),
            i(0, 5, 10, 15, u[s[16 * e + 8]], u[s[16 * e + 9]]),
            i(1, 6, 11, 12, u[s[16 * e + 10]], u[s[16 * e + 11]]),
            i(2, 7, 8, 13, u[s[16 * e + 12]], u[s[16 * e + 13]]),
            i(3, 4, 9, 14, u[s[16 * e + 14]], u[s[16 * e + 15]]));
        for (e = 0; e < 8; e++) n.h[e] ^= c[e] ^ c[e + 8];
      }
      function b(n, t) {
        if (!(n > 0 && n <= 32))
          throw new Error("Incorrect output length, should be in [1, 32]");
        const e = t ? t.length : 0;
        if (t && !(e > 0 && e <= 32))
          throw new Error("Incorrect key length, should be in [1, 32]");
        const r = {
          h: new Uint32Array(a),
          b: new Uint8Array(64),
          c: 0,
          t: 0,
          outlen: n,
        };
        return (
          (r.h[0] ^= 16842752 ^ (e << 8) ^ n),
          e > 0 && (h(r, t), (r.c = 64)),
          r
        );
      }
      function h(n, t) {
        for (let e = 0; e < t.length; e++)
          (64 === n.c && ((n.t += n.c), f(n, !1), (n.c = 0)),
            (n.b[n.c++] = t[e]));
      }
      function w(n) {
        n.t += n.c;
        while (n.c < 64) n.b[n.c++] = 0;
        f(n, !0);
        const t = new Uint8Array(n.outlen);
        for (let e = 0; e < n.outlen; e++)
          t[e] = (n.h[e >> 2] >> (8 * (3 & e))) & 255;
        return t;
      }
      function p(n, t, e) {
        ((e = e || 32), (n = r.normalizeInput(n)));
        const o = b(e, t);
        return (h(o, n), w(o));
      }
      function g(n, t, e) {
        const o = p(n, t, e);
        return r.toHex(o);
      }
      n.exports = {
        blake2s: p,
        blake2sHex: g,
        blake2sInit: b,
        blake2sUpdate: h,
        blake2sFinal: w,
      };
    },
  },
]);
