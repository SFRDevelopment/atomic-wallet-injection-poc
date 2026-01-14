(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [358],
  {
    3208: function (e, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.b58ToC32 =
          n.c32ToB58 =
          n.versions =
          n.c32normalize =
          n.c32addressDecode =
          n.c32address =
          n.c32checkDecode =
          n.c32checkEncode =
          n.c32decode =
          n.c32encode =
            void 0));
      const t = r(3624);
      (Object.defineProperty(n, "c32encode", {
        enumerable: !0,
        get: function () {
          return t.c32encode;
        },
      }),
        Object.defineProperty(n, "c32decode", {
          enumerable: !0,
          get: function () {
            return t.c32decode;
          },
        }),
        Object.defineProperty(n, "c32normalize", {
          enumerable: !0,
          get: function () {
            return t.c32normalize;
          },
        }));
      const o = r(3625);
      (Object.defineProperty(n, "c32checkEncode", {
        enumerable: !0,
        get: function () {
          return o.c32checkEncode;
        },
      }),
        Object.defineProperty(n, "c32checkDecode", {
          enumerable: !0,
          get: function () {
            return o.c32checkDecode;
          },
        }));
      const c = r(4597);
      (Object.defineProperty(n, "c32address", {
        enumerable: !0,
        get: function () {
          return c.c32address;
        },
      }),
        Object.defineProperty(n, "c32addressDecode", {
          enumerable: !0,
          get: function () {
            return c.c32addressDecode;
          },
        }),
        Object.defineProperty(n, "c32ToB58", {
          enumerable: !0,
          get: function () {
            return c.c32ToB58;
          },
        }),
        Object.defineProperty(n, "b58ToC32", {
          enumerable: !0,
          get: function () {
            return c.b58ToC32;
          },
        }),
        Object.defineProperty(n, "versions", {
          enumerable: !0,
          get: function () {
            return c.versions;
          },
        }));
    },
    3624: function (e, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.c32decode = n.c32normalize = n.c32encode = n.c32 = void 0));
      const t = r(130);
      n.c32 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
      const o = "0123456789abcdef";
      function c(e, r) {
        if (!e.match(/^[0-9a-fA-F]*$/))
          throw new Error("Not a hex-encoded string");
        (e.length % 2 !== 0 && (e = "0" + e), (e = e.toLowerCase()));
        let c = [],
          i = 0;
        for (let t = e.length - 1; t >= 0; t--)
          if (i < 4) {
            const r = o.indexOf(e[t]) >> i;
            let s = 0;
            0 !== t && (s = o.indexOf(e[t - 1]));
            const a = 1 + i,
              d = (s % (1 << a)) << (5 - a),
              h = n.c32[r + d];
            ((i = a), c.unshift(h));
          } else i = 0;
        let s = 0;
        for (let n = 0; n < c.length; n++) {
          if ("0" !== c[n]) break;
          s++;
        }
        c = c.slice(s);
        const a = new TextDecoder()
            .decode((0, t.hexToBytes)(e))
            .match(/^\u0000*/),
          d = a ? a[0].length : 0;
        for (let t = 0; t < d; t++) c.unshift(n.c32[0]);
        if (r) {
          const e = r - c.length;
          for (let r = 0; r < e; r++) c.unshift(n.c32[0]);
        }
        return c.join("");
      }
      function i(e) {
        return e.toUpperCase().replace(/O/g, "0").replace(/L|I/g, "1");
      }
      function s(e, r) {
        if (((e = i(e)), !e.match(`^[${n.c32}]*$`)))
          throw new Error("Not a c32-encoded string");
        const t = e.match(`^${n.c32[0]}*`),
          c = t ? t[0].length : 0;
        let s = [],
          a = 0,
          d = 0;
        for (let i = e.length - 1; i >= 0; i--) {
          4 === d && (s.unshift(o[a]), (d = 0), (a = 0));
          const r = n.c32.indexOf(e[i]) << d,
            t = r + a,
            c = o[t % 16];
          if (((d += 1), (a = t >> 4), a > 1 << d))
            throw new Error("Panic error in decoding.");
          s.unshift(c);
        }
        (s.unshift(o[a]), s.length % 2 === 1 && s.unshift("0"));
        let h = 0;
        for (let n = 0; n < s.length; n++) {
          if ("0" !== s[n]) break;
          h++;
        }
        s = s.slice(h - (h % 2));
        let f = s.join("");
        for (let n = 0; n < c; n++) f = "00" + f;
        if (r) {
          const e = 2 * r - f.length;
          for (let n = 0; n < e; n += 2) f = "00" + f;
        }
        return f;
      }
      ((n.c32encode = c), (n.c32normalize = i), (n.c32decode = s));
    },
    3625: function (e, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.c32checkDecode = n.c32checkEncode = void 0));
      const t = r(378),
        o = r(130),
        c = r(3624);
      function i(e) {
        const n = (0, t.sha256)((0, t.sha256)((0, o.hexToBytes)(e))),
          r = (0, o.bytesToHex)(n.slice(0, 4));
        return r;
      }
      function s(e, n) {
        if (e < 0 || e >= 32)
          throw new Error("Invalid version (must be between 0 and 31)");
        if (!n.match(/^[0-9a-fA-F]*$/))
          throw new Error("Invalid data (not a hex string)");
        ((n = n.toLowerCase()), n.length % 2 !== 0 && (n = "0" + n));
        let r = e.toString(16);
        1 === r.length && (r = "0" + r);
        const t = i(`${r}${n}`),
          o = (0, c.c32encode)(`${n}${t}`);
        return `${c.c32[e]}${o}`;
      }
      function a(e) {
        e = (0, c.c32normalize)(e);
        const n = (0, c.c32decode)(e.slice(1)),
          r = e[0],
          t = c.c32.indexOf(r),
          o = n.slice(-8);
        let s = t.toString(16);
        if (
          (1 === s.length && (s = "0" + s),
          i(`${s}${n.substring(0, n.length - 8)}`) !== o)
        )
          throw new Error("Invalid c32check string: checksum mismatch");
        return [t, n.substring(0, n.length - 8)];
      }
      ((n.c32checkEncode = s), (n.c32checkDecode = a));
    },
    4597: function (e, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.c32ToB58 =
          n.b58ToC32 =
          n.c32addressDecode =
          n.c32address =
          n.versions =
            void 0));
      const t = r(3625),
        o = r(4598),
        c = r(130);
      n.versions = {
        mainnet: { p2pkh: 22, p2sh: 20 },
        testnet: { p2pkh: 26, p2sh: 21 },
      };
      const i = {};
      ((i[0] = n.versions.mainnet.p2pkh),
        (i[5] = n.versions.mainnet.p2sh),
        (i[111] = n.versions.testnet.p2pkh),
        (i[196] = n.versions.testnet.p2sh));
      const s = {};
      function a(e, n) {
        if (!n.match(/^[0-9a-fA-F]{40}$/))
          throw new Error("Invalid argument: not a hash160 hex string");
        const r = (0, t.c32checkEncode)(e, n);
        return "S" + r;
      }
      function d(e) {
        if (e.length <= 5)
          throw new Error("Invalid c32 address: invalid length");
        if ("S" != e[0])
          throw new Error('Invalid c32 address: must start with "S"');
        return (0, t.c32checkDecode)(e.slice(1));
      }
      function h(e, n) {
        void 0 === n && (n = -1);
        const r = o.decode(e),
          t = (0, c.bytesToHex)(r.data),
          s = parseInt((0, c.bytesToHex)(r.prefix), 16);
        let d;
        return (
          n < 0 ? ((d = s), void 0 !== i[s] && (d = i[s])) : (d = n),
          a(d, t)
        );
      }
      function f(e, n) {
        void 0 === n && (n = -1);
        const r = d(e),
          t = r[0],
          c = r[1];
        let i;
        n < 0 ? ((i = t), void 0 !== s[t] && (i = s[t])) : (i = n);
        let a = i.toString(16);
        return (1 === a.length && (a = "0" + a), o.encode(c, a));
      }
      ((s[n.versions.mainnet.p2pkh] = 0),
        (s[n.versions.mainnet.p2sh] = 5),
        (s[n.versions.testnet.p2pkh] = 111),
        (s[n.versions.testnet.p2sh] = 196),
        (n.c32address = a),
        (n.c32addressDecode = d),
        (n.b58ToC32 = h),
        (n.c32ToB58 = f));
    },
    4598: function (e, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.decode = n.encode = void 0));
      const t = r(378),
        o = r(130),
        c = r(4599),
        i = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      function s(e, n) {
        void 0 === n && (n = "00");
        const r = "string" === typeof e ? (0, o.hexToBytes)(e) : e,
          s = "string" === typeof n ? (0, o.hexToBytes)(n) : e;
        if (!(r instanceof Uint8Array) || !(s instanceof Uint8Array))
          throw new TypeError("Argument must be of type Uint8Array or string");
        const a = (0, t.sha256)((0, t.sha256)(new Uint8Array([...s, ...r])));
        return c(i).encode([...s, ...r, ...a.slice(0, 4)]);
      }
      function a(e) {
        const n = c(i).decode(e),
          r = n.slice(0, 1),
          o = n.slice(1, -4),
          s = (0, t.sha256)((0, t.sha256)(new Uint8Array([...r, ...o])));
        return (
          n.slice(-4).forEach((e, n) => {
            if (e !== s[n]) throw new Error("Invalid checksum");
          }),
          { prefix: r, data: o }
        );
      }
      ((n.encode = s), (n.decode = a));
    },
    4599: function (e, n, r) {
      "use strict";
      function t(e) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var n = new Uint8Array(256), r = 0; r < n.length; r++) n[r] = 255;
        for (var t = 0; t < e.length; t++) {
          var o = e.charAt(t),
            c = o.charCodeAt(0);
          if (255 !== n[c]) throw new TypeError(o + " is ambiguous");
          n[c] = t;
        }
        var i = e.length,
          s = e.charAt(0),
          a = Math.log(i) / Math.log(256),
          d = Math.log(256) / Math.log(i);
        function h(n) {
          if (
            (n instanceof Uint8Array ||
              (ArrayBuffer.isView(n)
                ? (n = new Uint8Array(n.buffer, n.byteOffset, n.byteLength))
                : Array.isArray(n) && (n = Uint8Array.from(n))),
            !(n instanceof Uint8Array))
          )
            throw new TypeError("Expected Uint8Array");
          if (0 === n.length) return "";
          var r = 0,
            t = 0,
            o = 0,
            c = n.length;
          while (o !== c && 0 === n[o]) (o++, r++);
          var a = ((c - o) * d + 1) >>> 0,
            h = new Uint8Array(a);
          while (o !== c) {
            for (
              var f = n[o], u = 0, l = a - 1;
              (0 !== f || u < t) && -1 !== l;
              l--, u++
            )
              ((f += (256 * h[l]) >>> 0),
                (h[l] = (f % i) >>> 0),
                (f = (f / i) >>> 0));
            if (0 !== f) throw new Error("Non-zero carry");
            ((t = u), o++);
          }
          var g = a - t;
          while (g !== a && 0 === h[g]) g++;
          for (var p = s.repeat(r); g < a; ++g) p += e.charAt(h[g]);
          return p;
        }
        function f(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var r = 0,
            t = 0,
            o = 0;
          while (e[r] === s) (t++, r++);
          var c = ((e.length - r) * a + 1) >>> 0,
            d = new Uint8Array(c);
          while (e[r]) {
            var h = e.charCodeAt(r);
            if (h > 255) return;
            var f = n[h];
            if (255 === f) return;
            for (var u = 0, l = c - 1; (0 !== f || u < o) && -1 !== l; l--, u++)
              ((f += (i * d[l]) >>> 0),
                (d[l] = (f % 256) >>> 0),
                (f = (f / 256) >>> 0));
            if (0 !== f) throw new Error("Non-zero carry");
            ((o = u), r++);
          }
          var g = c - o;
          while (g !== c && 0 === d[g]) g++;
          var p = new Uint8Array(t + (c - g)),
            w = t;
          while (g !== c) p[w++] = d[g++];
          return p;
        }
        function u(e) {
          var n = f(e);
          if (n) return n;
          throw new Error("Non-base" + i + " character");
        }
        return { encode: h, decodeUnsafe: f, decode: u };
      }
      e.exports = t;
    },
  },
]);
