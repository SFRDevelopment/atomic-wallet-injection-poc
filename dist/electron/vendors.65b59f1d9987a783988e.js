(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [87],
  {
    12: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(152);
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
      var o = n(607);
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
      var i = n(1800);
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
      var s = n(1801);
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
      var c = n(1802);
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
    },
    1215: function (e, t) {},
    1267: function (e, t) {},
    128: function (e, t, n) {
      var r = n(875);
      function o(e, t, n) {
        return (
          (t = r(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      ((e.exports = o),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    1285: function (e, t) {},
    130: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.wrapXOFConstructorWithOpts =
          t.wrapConstructorWithOpts =
          t.wrapConstructor =
          t.Hash =
          t.nextTick =
          t.swap32IfBE =
          t.byteSwapIfBE =
          t.swap8IfBE =
          t.isLE =
            void 0),
        (t.isBytes = o),
        (t.anumber = i),
        (t.abytes = s),
        (t.ahash = c),
        (t.aexists = a),
        (t.aoutput = u),
        (t.u8 = f),
        (t.u32 = d),
        (t.clean = l),
        (t.createView = h),
        (t.rotr = g),
        (t.rotl = E),
        (t.byteSwap = p),
        (t.byteSwap32 = S),
        (t.bytesToHex = w),
        (t.hexToBytes = _),
        (t.asyncLoop = A),
        (t.utf8ToBytes = I),
        (t.bytesToUtf8 = B),
        (t.toBytes = D),
        (t.kdfInputToBytes = C),
        (t.concatBytes = O),
        (t.checkOpts = z),
        (t.createHasher = U),
        (t.createOptHasher = L),
        (t.createXOFer = R),
        (t.randomBytes = N));
      const r = n(1782);
      function o(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function i(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw new Error("positive integer expected, got " + e);
      }
      function s(e) {
        if (!o(e)) throw new Error("Uint8Array expected");
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        if (n.length > 0 && !n.includes(e.length))
          throw new Error(
            "Uint8Array expected of length " + n + ", got length=" + e.length,
          );
      }
      function c(e) {
        if ("function" !== typeof e || "function" !== typeof e.create)
          throw new Error("Hash should be wrapped by utils.createHasher");
        (i(e.outputLen), i(e.blockLen));
      }
      function a(e, t) {
        if ((void 0 === t && (t = !0), e.destroyed))
          throw new Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw new Error("Hash#digest() has already been called");
      }
      function u(e, t) {
        s(e);
        const n = t.outputLen;
        if (e.length < n)
          throw new Error(
            "digestInto() expects output buffer of length at least " + n,
          );
      }
      function f(e) {
        return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      function d(e) {
        return new Uint32Array(
          e.buffer,
          e.byteOffset,
          Math.floor(e.byteLength / 4),
        );
      }
      function l() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        for (let r = 0; r < t.length; r++) t[r].fill(0);
      }
      function h(e) {
        return new DataView(e.buffer, e.byteOffset, e.byteLength);
      }
      function g(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      function E(e, t) {
        return (e << t) | ((e >>> (32 - t)) >>> 0);
      }
      function p(e) {
        return (
          ((e << 24) & 4278190080) |
          ((e << 8) & 16711680) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255)
        );
      }
      function S(e) {
        for (let t = 0; t < e.length; t++) e[t] = p(e[t]);
        return e;
      }
      ((t.isLE = (() =>
        68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0])()),
        (t.swap8IfBE = t.isLE ? (e) => e : (e) => p(e)),
        (t.byteSwapIfBE = t.swap8IfBE),
        (t.swap32IfBE = t.isLE ? (e) => e : S));
      const y = (() =>
          "function" === typeof Uint8Array.from([]).toHex &&
          "function" === typeof Uint8Array.fromHex)(),
        m = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0"),
        );
      function w(e) {
        if ((s(e), y)) return e.toHex();
        let t = "";
        for (let n = 0; n < e.length; n++) t += m[e[n]];
        return t;
      }
      const b = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function x(e) {
        return e >= b._0 && e <= b._9
          ? e - b._0
          : e >= b.A && e <= b.F
            ? e - (b.A - 10)
            : e >= b.a && e <= b.f
              ? e - (b.a - 10)
              : void 0;
      }
      function _(e) {
        if ("string" !== typeof e)
          throw new Error("hex string expected, got " + typeof e);
        if (y) return Uint8Array.fromHex(e);
        const t = e.length,
          n = t / 2;
        if (t % 2)
          throw new Error(
            "hex string expected, got unpadded hex of length " + t,
          );
        const r = new Uint8Array(n);
        for (let o = 0, i = 0; o < n; o++, i += 2) {
          const t = x(e.charCodeAt(i)),
            n = x(e.charCodeAt(i + 1));
          if (void 0 === t || void 0 === n) {
            const t = e[i] + e[i + 1];
            throw new Error(
              'hex string expected, got non-hex character "' +
                t +
                '" at index ' +
                i,
            );
          }
          r[o] = 16 * t + n;
        }
        return r;
      }
      const v = async () => {};
      async function A(e, n, r) {
        let o = Date.now();
        for (let i = 0; i < e; i++) {
          r(i);
          const e = Date.now() - o;
          (e >= 0 && e < n) || (await (0, t.nextTick)(), (o += e));
        }
      }
      function I(e) {
        if ("string" !== typeof e) throw new Error("string expected");
        return new Uint8Array(new TextEncoder().encode(e));
      }
      function B(e) {
        return new TextDecoder().decode(e);
      }
      function D(e) {
        return ("string" === typeof e && (e = I(e)), s(e), e);
      }
      function C(e) {
        return ("string" === typeof e && (e = I(e)), s(e), e);
      }
      function O() {
        let e = 0;
        for (let n = 0; n < arguments.length; n++) {
          const t = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          (s(t), (e += t.length));
        }
        const t = new Uint8Array(e);
        for (let n = 0, r = 0; n < arguments.length; n++) {
          const e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          (t.set(e, r), (r += e.length));
        }
        return t;
      }
      function z(e, t) {
        if (void 0 !== t && "[object Object]" !== {}.toString.call(t))
          throw new Error("options should be object or undefined");
        const n = Object.assign(e, t);
        return n;
      }
      t.nextTick = v;
      class Hash {}
      function U(e) {
        const t = (t) => e().update(D(t)).digest(),
          n = e();
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = () => e()),
          t
        );
      }
      function L(e) {
        const t = (t, n) => e(n).update(D(t)).digest(),
          n = e({});
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = (t) => e(t)),
          t
        );
      }
      function R(e) {
        const t = (t, n) => e(n).update(D(t)).digest(),
          n = e({});
        return (
          (t.outputLen = n.outputLen),
          (t.blockLen = n.blockLen),
          (t.create = (t) => e(t)),
          t
        );
      }
      function N(e) {
        if (
          (void 0 === e && (e = 32),
          r.crypto && "function" === typeof r.crypto.getRandomValues)
        )
          return r.crypto.getRandomValues(new Uint8Array(e));
        if (r.crypto && "function" === typeof r.crypto.randomBytes)
          return Uint8Array.from(r.crypto.randomBytes(e));
        throw new Error("crypto.getRandomValues must be defined");
      }
      ((t.Hash = Hash),
        (t.wrapConstructor = U),
        (t.wrapConstructorWithOpts = L),
        (t.wrapXOFConstructorWithOpts = R));
    },
    1333: function (e, t) {},
    1344: function (e, t) {},
    1392: function (e, t) {},
    1399: function (e, t) {},
    1458: function (e, t) {},
    1482: function (e, t) {},
    1519: function (e, t) {},
    152: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.encodeDecode = void 0));
      const r = (e) => {
        const t = e.decode.bind(e),
          n = e.encode.bind(e);
        return { decode: t, encode: n };
      };
      t.encodeDecode = r;
    },
    1549: function (e, t) {},
    1573: function (e, t) {},
    1609: function (e, t) {},
    1662: function (e, t) {},
    1699: function (e, t) {},
    1713: function (e, t) {},
    1725: function (e, t) {},
    1742: function (e, t) {},
    1761: function (e, t) {},
    1782: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.crypto = void 0),
        (t.crypto =
          "object" === typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0));
    },
    1783: function (e, t) {},
    1784: function (e, t) {},
    1786: function (e, t, n) {
      var r = n(383)["default"];
      function o(e, t) {
        if ("object" != r(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(e, t || "default");
          if ("object" != r(o)) return o;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }
      ((e.exports = o),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    1799: function (e, t) {},
    1800: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decimal = t.WAD = void 0));
      var o = r(n(800)),
        i = n(152),
        s = n(607);
      const c = (t.WAD = new o.default("1e+18")),
        a = (e) => {
          const t = (0, s.u128)(e),
            { encode: n, decode: r } = (0, i.encodeDecode)(t),
            a = t;
          return (
            (a.decode = (e, t) => {
              const n = r(e, t).toString();
              return new o.default(n).div(c);
            }),
            (a.encode = (e, t, r) => {
              const o = BigInt(e.times(c).integerValue().toString());
              return n(o, t, r);
            }),
            a
          );
        };
      t.decimal = a;
    },
    1801: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bool = void 0));
      var r = n(6),
        o = n(152);
      const i = (e) => {
        const t = (0, r.u8)(e),
          { encode: n, decode: i } = (0, o.encodeDecode)(t),
          s = t;
        return (
          (s.decode = (e, t) => {
            const n = i(e, t);
            return !!n;
          }),
          (s.encode = (e, t, r) => {
            const o = Number(e);
            return n(o, t, r);
          }),
          s
        );
      };
      t.bool = i;
    },
    1802: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.publicKey = void 0));
      var r = n(6),
        o = n(1803),
        i = n(152);
      const s = (e) => {
        const t = (0, r.blob)(32, e),
          { encode: n, decode: s } = (0, i.encodeDecode)(t),
          c = t;
        return (
          (c.decode = (e, t) => {
            const n = s(e, t);
            return new o.PublicKey(n);
          }),
          (c.encode = (e, t, r) => {
            const o = e.toBuffer();
            return n(o, t, r);
          }),
          c
        );
      };
      t.publicKey = s;
    },
    1811: function (e, t, n) {
      "use strict";
      var r = n(184),
        o = n(613),
        i = n(183);
      function s(e, t, n) {
        if (t !== n)
          throw new i.SolanaError(
            i.SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS,
            { actual: n, codecDescription: e, expected: t },
          );
      }
      function c(e) {
        return e.reduce(
          (e, t) => (null === e || null === t ? null : Math.max(e, t)),
          0,
        );
      }
      function a(e) {
        return e.reduce((e, t) => (null === e || null === t ? null : e + t), 0);
      }
      function u(e) {
        return r.isFixedSize(e) ? e.fixedSize : null;
      }
      function f(e) {
        var t;
        return r.isFixedSize(e)
          ? e.fixedSize
          : null !== (t = e.maxSize) && void 0 !== t
            ? t
            : null;
      }
      function d(e, t) {
        var n, i;
        void 0 === t && (t = {});
        const c = null !== (n = t.size) && void 0 !== n ? n : o.getU32Encoder(),
          a = g(c, u(e)),
          d = null !== (i = g(c, f(e))) && void 0 !== i ? i : void 0;
        return r.createEncoder({
          ...(null !== a
            ? { fixedSize: a }
            : {
                getSizeFromValue: (t) => {
                  const n =
                    "object" === typeof c ? r.getEncodedSize(t.length, c) : 0;
                  return (
                    n + [...t].reduce((t, n) => t + r.getEncodedSize(n, e), 0)
                  );
                },
                maxSize: d,
              }),
          write: (t, n, r) => (
            "number" === typeof c && s("array", c, t.length),
            "object" === typeof c && (r = c.write(t.length, n, r)),
            t.forEach((t) => {
              r = e.write(t, n, r);
            }),
            r
          ),
        });
      }
      function l(e, t) {
        var n, i;
        void 0 === t && (t = {});
        const s = null !== (n = t.size) && void 0 !== n ? n : o.getU32Decoder(),
          c = u(e),
          a = g(s, c),
          d = null !== (i = g(s, f(e))) && void 0 !== i ? i : void 0;
        return r.createDecoder({
          ...(null !== a ? { fixedSize: a } : { maxSize: d }),
          read: (t, n) => {
            const r = [];
            if ("object" === typeof s && 0 === t.slice(n).length) return [r, n];
            if ("remainder" === s) {
              while (n < t.length) {
                const [o, i] = e.read(t, n);
                ((n = i), r.push(o));
              }
              return [r, n];
            }
            const [o, i] = "number" === typeof s ? [s, n] : s.read(t, n);
            n = i;
            for (let s = 0; s < o; s += 1) {
              const [o, i] = e.read(t, n);
              ((n = i), r.push(o));
            }
            return [r, n];
          },
        });
      }
      function h(e, t) {
        return (void 0 === t && (t = {}), r.combineCodec(d(e, t), l(e, t)));
      }
      function g(e, t) {
        return "number" !== typeof e
          ? null
          : 0 === e
            ? 0
            : null === t
              ? null
              : t * e;
      }
      function E(e, t) {
        var n;
        void 0 === t && (t = {});
        const o = "boolean" === typeof t ? { backward: t } : t,
          i = null !== (n = o.backward) && void 0 !== n && n;
        return r.createEncoder({
          fixedSize: e,
          write(t, n, r) {
            const o = [];
            for (let c = 0; c < e; c += 1) {
              let e = 0;
              for (let n = 0; n < 8; n += 1) {
                var s;
                const r = Number(
                  null !== (s = t[8 * c + n]) && void 0 !== s ? s : 0,
                );
                e |= r << (i ? n : 7 - n);
              }
              i ? o.unshift(e) : o.push(e);
            }
            return (n.set(o, r), e);
          },
        });
      }
      function p(e, t) {
        var n;
        void 0 === t && (t = {});
        const o = "boolean" === typeof t ? { backward: t } : t,
          i = null !== (n = o.backward) && void 0 !== n && n;
        return r.createDecoder({
          fixedSize: e,
          read(t, n) {
            r.assertByteArrayHasEnoughBytesForCodec("bitArray", e, t, n);
            const o = [];
            let s = t.slice(n, n + e);
            return (
              (s = i ? s.reverse() : s),
              s.forEach((e) => {
                for (let t = 0; t < 8; t += 1)
                  i
                    ? (o.push(Boolean(1 & e)), (e >>= 1))
                    : (o.push(Boolean(128 & e)), (e <<= 1));
              }),
              [o, n + e]
            );
          },
        });
      }
      function S(e, t) {
        return (void 0 === t && (t = {}), r.combineCodec(E(e, t), p(e, t)));
      }
      function y(e) {
        var t;
        return (
          void 0 === e && (e = {}),
          r.transformEncoder(
            null !== (t = e.size) && void 0 !== t ? t : o.getU8Encoder(),
            (e) => (e ? 1 : 0),
          )
        );
      }
      function m(e) {
        var t;
        return (
          void 0 === e && (e = {}),
          r.transformDecoder(
            null !== (t = e.size) && void 0 !== t ? t : o.getU8Decoder(),
            (e) => 1 === Number(e),
          )
        );
      }
      function w(e) {
        return (void 0 === e && (e = {}), r.combineCodec(y(e), m(e)));
      }
      function b() {
        return r.createEncoder({
          getSizeFromValue: (e) => e.length,
          write: (e, t, n) => (t.set(e, n), n + e.length),
        });
      }
      function x() {
        return r.createDecoder({
          read: (e, t) => {
            const n = e.slice(t);
            return [n, t + n.length];
          },
        });
      }
      function _() {
        return r.combineCodec(b(), x());
      }
      var v = () =>
        r.createDecoder({
          read(e, t) {
            const n = e
              .slice(t)
              .reduce((e, t) => e + t.toString(16).padStart(2, "0"), "");
            return [n, e.length];
          },
        });
      function A(e) {
        return r.createEncoder({
          fixedSize: e.length,
          write: (t, n, r) => (n.set(e, r), r + e.length),
        });
      }
      function I(e) {
        return r.createDecoder({
          fixedSize: e.length,
          read: (t, n) => {
            const o = v();
            if (!r.containsBytes(t, e, n))
              throw new i.SolanaError(
                i.SOLANA_ERROR__CODECS__INVALID_CONSTANT,
                {
                  constant: e,
                  data: t,
                  hexConstant: o.decode(e),
                  hexData: o.decode(t),
                  offset: n,
                },
              );
            return [void 0, n + e.length];
          },
        });
      }
      function B(e) {
        return r.combineCodec(A(e), I(e));
      }
      function D(e) {
        var t;
        const n = a(e.map(u)),
          o = null !== (t = a(e.map(f))) && void 0 !== t ? t : void 0;
        return r.createEncoder({
          ...(null === n
            ? {
                getSizeFromValue: (t) =>
                  e
                    .map((e, n) => r.getEncodedSize(t[n], e))
                    .reduce((e, t) => e + t, 0),
                maxSize: o,
              }
            : { fixedSize: n }),
          write: (t, n, r) => (
            s("tuple", e.length, t.length),
            e.forEach((e, o) => {
              r = e.write(t[o], n, r);
            }),
            r
          ),
        });
      }
      function C(e) {
        var t;
        const n = a(e.map(u)),
          o = null !== (t = a(e.map(f))) && void 0 !== t ? t : void 0;
        return r.createDecoder({
          ...(null === n ? { maxSize: o } : { fixedSize: n }),
          read: (t, n) => {
            const r = [];
            return (
              e.forEach((e) => {
                const [o, i] = e.read(t, n);
                (r.push(o), (n = i));
              }),
              [r, n]
            );
          },
        });
      }
      function O(e) {
        return r.combineCodec(D(e), C(e));
      }
      function z(e, t) {
        const n = N(e),
          o = (n, r, o) => {
            const i = t(n);
            return (R(e, i), e[i].write(n, r, o));
          };
        if (null !== n) return r.createEncoder({ fixedSize: n, write: o });
        const i = H(e);
        return r.createEncoder({
          ...(null !== i ? { maxSize: i } : {}),
          getSizeFromValue: (n) => {
            const o = t(n);
            return (R(e, o), r.getEncodedSize(n, e[o]));
          },
          write: o,
        });
      }
      function U(e, t) {
        const n = N(e),
          o = (n, r) => {
            const o = t(n, r);
            return (R(e, o), e[o].read(n, r));
          };
        if (null !== n) return r.createDecoder({ fixedSize: n, read: o });
        const i = H(e);
        return r.createDecoder({
          ...(null !== i ? { maxSize: i } : {}),
          read: o,
        });
      }
      function L(e, t, n) {
        return r.combineCodec(z(e, t), U(e, n));
      }
      function R(e, t) {
        if ("undefined" === typeof e[t])
          throw new i.SolanaError(
            i.SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE,
            { maxRange: e.length - 1, minRange: 0, variant: t },
          );
      }
      function N(e) {
        if (0 === e.length) return 0;
        if (!r.isFixedSize(e[0])) return null;
        const t = e[0].fixedSize,
          n = e.every((e) => r.isFixedSize(e) && e.fixedSize === t);
        return n ? t : null;
      }
      function H(e) {
        return c(e.map((e) => f(e)));
      }
      function V(e, t) {
        var n, i;
        void 0 === t && (t = {});
        const s = null !== (n = t.discriminator) && void 0 !== n ? n : "__kind",
          c = null !== (i = t.size) && void 0 !== i ? i : o.getU8Encoder();
        return z(
          e.map((e, t) => {
            let [, n] = e;
            return r.transformEncoder(D([c, n]), (e) => [t, e]);
          }),
          (t) => T(e, t[s]),
        );
      }
      function P(e, t) {
        var n, i;
        void 0 === t && (t = {});
        const s = null !== (n = t.discriminator) && void 0 !== n ? n : "__kind",
          c = null !== (i = t.size) && void 0 !== i ? i : o.getU8Decoder();
        return U(
          e.map((e) => {
            let [t, n] = e;
            return r.transformDecoder(C([c, n]), (e) => {
              let [, n] = e;
              return { [s]: t, ...n };
            });
          }),
          (e, t) => Number(c.read(e, t)[0]),
        );
      }
      function F(e, t) {
        return (void 0 === t && (t = {}), r.combineCodec(V(e, t), P(e, t)));
      }
      function T(e, t) {
        const n = e.findIndex((e) => {
          let [n] = e;
          return t === n;
        });
        if (n < 0)
          throw new i.SolanaError(
            i.SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT,
            {
              value: t,
              variants: e.map((e) => {
                let [t] = e;
                return t;
              }),
            },
          );
        return n;
      }
      var M = V,
        k = P,
        j = F;
      function G(e) {
        const t = [
            ...new Set(Object.values(e).filter((e) => "number" === typeof e)),
          ].sort(),
          n = Object.fromEntries(Object.entries(e).slice(t.length)),
          r = Object.keys(n),
          o = Object.values(n),
          i = [...new Set([...r, ...o.filter((e) => "string" === typeof e)])];
        return {
          enumKeys: r,
          enumRecord: n,
          enumValues: o,
          numericalValues: t,
          stringValues: i,
        };
      }
      function X(e) {
        let { enumKeys: t, enumValues: n, variant: r } = e;
        const o = Z(n, (e) => e === r);
        return o >= 0 ? o : t.findIndex((e) => e === r);
      }
      function K(e) {
        let {
          discriminator: t,
          enumKeys: n,
          enumValues: r,
          useValuesAsDiscriminators: o,
        } = e;
        return o ? Z(r, (e) => e === t) : t >= 0 && t < n.length ? t : -1;
      }
      function Z(e, t) {
        let n = e.length;
        while (n--) if (t(e[n], n, e)) return n;
        return -1;
      }
      function W(e) {
        if (0 === e.length) return "";
        let t = [e[0], e[0]];
        const n = [];
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          t[1] + 1 === o
            ? (t[1] = o)
            : (n.push(t[0] === t[1] ? "" + t[0] : `${t[0]}-${t[1]}`),
              (t = [o, o]));
        }
        return (
          n.push(t[0] === t[1] ? "" + t[0] : `${t[0]}-${t[1]}`),
          n.join(", ")
        );
      }
      function q(e, t) {
        var n, s;
        void 0 === t && (t = {});
        const c = null !== (n = t.size) && void 0 !== n ? n : o.getU8Encoder(),
          a = null !== (s = t.useValuesAsDiscriminators) && void 0 !== s && s,
          {
            enumKeys: u,
            enumValues: f,
            numericalValues: d,
            stringValues: l,
          } = G(e);
        if (a && f.some((e) => "string" === typeof e))
          throw new i.SolanaError(
            i.SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS,
            { stringValues: f.filter((e) => "string" === typeof e) },
          );
        return r.transformEncoder(c, (e) => {
          const t = X({ enumKeys: u, enumValues: f, variant: e });
          if (t < 0)
            throw new i.SolanaError(
              i.SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT,
              {
                formattedNumericalValues: W(d),
                numericalValues: d,
                stringValues: l,
                variant: e,
              },
            );
          return a ? f[t] : t;
        });
      }
      function Y(e, t) {
        var n, s;
        void 0 === t && (t = {});
        const c = null !== (n = t.size) && void 0 !== n ? n : o.getU8Decoder(),
          a = null !== (s = t.useValuesAsDiscriminators) && void 0 !== s && s,
          { enumKeys: u, enumValues: f, numericalValues: d } = G(e);
        if (a && f.some((e) => "string" === typeof e))
          throw new i.SolanaError(
            i.SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS,
            { stringValues: f.filter((e) => "string" === typeof e) },
          );
        return r.transformDecoder(c, (e) => {
          const t = Number(e),
            n = K({
              discriminator: t,
              enumKeys: u,
              enumValues: f,
              useValuesAsDiscriminators: a,
            });
          if (n < 0) {
            const e = a ? d : [...Array(u.length).keys()];
            throw new i.SolanaError(
              i.SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE,
              {
                discriminator: t,
                formattedValidDiscriminators: W(e),
                validDiscriminators: e,
              },
            );
          }
          return f[n];
        });
      }
      function $(e, t) {
        return (void 0 === t && (t = {}), r.combineCodec(q(e, t), Y(e, t)));
      }
      var J = q,
        Q = Y,
        ee = $;
      function te(e, t) {
        return r.transformEncoder(D([...t, e]), (e) => [...t.map(() => {}), e]);
      }
      function ne(e, t) {
        return r.transformDecoder(C([...t, e]), (e) => e[e.length - 1]);
      }
      function re(e, t) {
        return r.combineCodec(te(e, t), ne(e, t));
      }
      function oe(e, t) {
        return r.transformEncoder(D([e, ...t]), (e) => [e, ...t.map(() => {})]);
      }
      function ie(e, t) {
        return r.transformDecoder(C([e, ...t]), (e) => e[0]);
      }
      function se(e, t) {
        return r.combineCodec(oe(e, t), ie(e, t));
      }
      function ce(e, t, n) {
        return (
          void 0 === n && (n = {}),
          r.transformEncoder(d(D([e, t]), n), (e) => [...e.entries()])
        );
      }
      function ae(e, t, n) {
        return (
          void 0 === n && (n = {}),
          r.transformDecoder(l(C([e, t]), n), (e) => new Map(e))
        );
      }
      function ue(e, t, n) {
        return (
          void 0 === n && (n = {}),
          r.combineCodec(ce(e, t, n), ae(e, t, n))
        );
      }
      function fe() {
        return r.createEncoder({ fixedSize: 0, write: (e, t, n) => n });
      }
      function de() {
        return r.createDecoder({ fixedSize: 0, read: (e, t) => [void 0, t] });
      }
      function le() {
        return r.combineCodec(fe(), de());
      }
      function he(e, t) {
        void 0 === t && (t = {});
        const n = ((e) =>
            null === t.prefix
              ? r.transformEncoder(fe(), (e) => {})
              : y({
                  size:
                    null !== (e = t.prefix) && void 0 !== e
                      ? e
                      : o.getU8Encoder(),
                }))(),
          i = (() =>
            "zeroes" === t.noneValue
              ? (r.assertIsFixedSize(e), r.fixEncoderSize(fe(), e.fixedSize))
              : t.noneValue
                ? A(t.noneValue)
                : fe())();
        return z(
          [
            r.transformEncoder(D([n, i]), (e) => [!1, void 0]),
            r.transformEncoder(D([n, e]), (e) => [!0, e]),
          ],
          (e) => Number(null !== e),
        );
      }
      function ge(e, t) {
        void 0 === t && (t = {});
        const n = ((e) =>
            null === t.prefix
              ? r.transformDecoder(de(), () => !1)
              : m({
                  size:
                    null !== (e = t.prefix) && void 0 !== e
                      ? e
                      : o.getU8Decoder(),
                }))(),
          i = (() =>
            "zeroes" === t.noneValue
              ? (r.assertIsFixedSize(e), r.fixDecoderSize(de(), e.fixedSize))
              : t.noneValue
                ? I(t.noneValue)
                : de())();
        return U(
          [
            r.transformDecoder(C([n, i]), () => null),
            r.transformDecoder(C([n, e]), (e) => {
              let [, t] = e;
              return t;
            }),
          ],
          (e, o) => {
            if (null === t.prefix && !t.noneValue) return Number(o < e.length);
            if (null === t.prefix && null != t.noneValue) {
              const n =
                "zeroes" === t.noneValue
                  ? new Uint8Array(i.fixedSize).fill(0)
                  : t.noneValue;
              return r.containsBytes(e, n, o) ? 0 : 1;
            }
            return Number(n.read(e, o)[0]);
          },
        );
      }
      function Ee(e, t) {
        return (void 0 === t && (t = {}), r.combineCodec(he(e, t), ge(e, t)));
      }
      function pe(e, t) {
        return (
          void 0 === t && (t = {}),
          r.transformEncoder(d(e, t), (e) => [...e])
        );
      }
      function Se(e, t) {
        return (
          void 0 === t && (t = {}),
          r.transformDecoder(l(e, t), (e) => new Set(e))
        );
      }
      function ye(e, t) {
        return (void 0 === t && (t = {}), r.combineCodec(pe(e, t), Se(e, t)));
      }
      function me(e) {
        var t;
        const n = e.map((e) => {
            let [, t] = e;
            return t;
          }),
          o = a(n.map(u)),
          i = null !== (t = a(n.map(f))) && void 0 !== t ? t : void 0;
        return r.createEncoder({
          ...(null === o
            ? {
                getSizeFromValue: (t) =>
                  e
                    .map((e) => {
                      let [n, o] = e;
                      return r.getEncodedSize(t[n], o);
                    })
                    .reduce((e, t) => e + t, 0),
                maxSize: i,
              }
            : { fixedSize: o }),
          write: (t, n, r) => (
            e.forEach((e) => {
              let [o, i] = e;
              r = i.write(t[o], n, r);
            }),
            r
          ),
        });
      }
      function we(e) {
        var t;
        const n = e.map((e) => {
            let [, t] = e;
            return t;
          }),
          o = a(n.map(u)),
          i = null !== (t = a(n.map(f))) && void 0 !== t ? t : void 0;
        return r.createDecoder({
          ...(null === o ? { maxSize: i } : { fixedSize: o }),
          read: (t, n) => {
            const r = {};
            return (
              e.forEach((e) => {
                let [o, i] = e;
                const [s, c] = i.read(t, n);
                ((n = c), (r[o] = s));
              }),
              [r, n]
            );
          },
        });
      }
      function be(e) {
        return r.combineCodec(me(e), we(e));
      }
      ((t.assertValidNumberOfItemsForCodec = s),
        (t.getArrayCodec = h),
        (t.getArrayDecoder = l),
        (t.getArrayEncoder = d),
        (t.getBitArrayCodec = S),
        (t.getBitArrayDecoder = p),
        (t.getBitArrayEncoder = E),
        (t.getBooleanCodec = w),
        (t.getBooleanDecoder = m),
        (t.getBooleanEncoder = y),
        (t.getBytesCodec = _),
        (t.getBytesDecoder = x),
        (t.getBytesEncoder = b),
        (t.getConstantCodec = B),
        (t.getConstantDecoder = I),
        (t.getConstantEncoder = A),
        (t.getDataEnumCodec = j),
        (t.getDataEnumDecoder = k),
        (t.getDataEnumEncoder = M),
        (t.getDiscriminatedUnionCodec = F),
        (t.getDiscriminatedUnionDecoder = P),
        (t.getDiscriminatedUnionEncoder = V),
        (t.getEnumCodec = $),
        (t.getEnumDecoder = Y),
        (t.getEnumEncoder = q),
        (t.getHiddenPrefixCodec = re),
        (t.getHiddenPrefixDecoder = ne),
        (t.getHiddenPrefixEncoder = te),
        (t.getHiddenSuffixCodec = se),
        (t.getHiddenSuffixDecoder = ie),
        (t.getHiddenSuffixEncoder = oe),
        (t.getMapCodec = ue),
        (t.getMapDecoder = ae),
        (t.getMapEncoder = ce),
        (t.getNullableCodec = Ee),
        (t.getNullableDecoder = ge),
        (t.getNullableEncoder = he),
        (t.getScalarEnumCodec = ee),
        (t.getScalarEnumDecoder = Q),
        (t.getScalarEnumEncoder = J),
        (t.getSetCodec = ye),
        (t.getSetDecoder = Se),
        (t.getSetEncoder = pe),
        (t.getStructCodec = be),
        (t.getStructDecoder = we),
        (t.getStructEncoder = me),
        (t.getTupleCodec = O),
        (t.getTupleDecoder = C),
        (t.getTupleEncoder = D),
        (t.getUnionCodec = L),
        (t.getUnionDecoder = U),
        (t.getUnionEncoder = z),
        (t.getUnitCodec = le),
        (t.getUnitDecoder = de),
        (t.getUnitEncoder = fe));
    },
    1812: function (e, t, n) {
      "use strict";
      var r = n(183),
        o = n(184);
      function i(e, t, n) {
        if ((void 0 === n && (n = t), !t.match(new RegExp(`^[${e}]*$`))))
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE,
            { alphabet: e, base: e.length, value: n },
          );
      }
      var s = (e) =>
          o.createEncoder({
            getSizeFromValue: (t) => {
              const [n, r] = u(t, e[0]);
              if (!r) return t.length;
              const o = f(r, e);
              return n.length + Math.ceil(o.toString(16).length / 2);
            },
            write(t, n, r) {
              if ((i(e, t), "" === t)) return r;
              const [o, s] = u(t, e[0]);
              if (!s)
                return (
                  n.set(new Uint8Array(o.length).fill(0), r),
                  r + o.length
                );
              let c = f(s, e);
              const a = [];
              while (c > 0n) (a.unshift(Number(c % 256n)), (c /= 256n));
              const d = [...Array(o.length).fill(0), ...a];
              return (n.set(d, r), r + d.length);
            },
          }),
        c = (e) =>
          o.createDecoder({
            read(t, n) {
              const r = 0 === n ? t : t.slice(n);
              if (0 === r.length) return ["", 0];
              let o = r.findIndex((e) => 0 !== e);
              o = -1 === o ? r.length : o;
              const i = e[0].repeat(o);
              if (o === r.length) return [i, t.length];
              const s = r.slice(o).reduce((e, t) => 256n * e + BigInt(t), 0n),
                c = d(s, e);
              return [i + c, t.length];
            },
          }),
        a = (e) => o.combineCodec(s(e), c(e));
      function u(e, t) {
        const [n, r] = e.split(new RegExp(`((?!${t}).*)`));
        return [n, r];
      }
      function f(e, t) {
        const n = BigInt(t.length);
        let r = 0n;
        for (const o of e) ((r *= n), (r += BigInt(t.indexOf(o))));
        return r;
      }
      function d(e, t) {
        const n = BigInt(t.length),
          r = [];
        while (e > 0n) (r.unshift(t[Number(e % n)]), (e /= n));
        return r.join("");
      }
      var l = "0123456789",
        h = () => s(l),
        g = () => c(l),
        E = () => a(l),
        p = { alphabet: "0123456789abcdef", base: 16 };
      function S(e) {
        return e >= 48 && e <= 57
          ? e - 48
          : e >= 65 && e <= 70
            ? e - 55
            : e >= 97 && e <= 102
              ? e - 87
              : void 0;
      }
      var y = () =>
          o.createEncoder({
            getSizeFromValue: (e) => Math.ceil(e.length / 2),
            write(e, t, n) {
              const o = e.length,
                i = o / 2;
              if (1 === o) {
                const o = e.charCodeAt(0),
                  i = S(o);
                if (void 0 === i)
                  throw new r.SolanaError(
                    r.SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE,
                    { ...p, value: e },
                  );
                return (t.set([i], n), 1 + n);
              }
              const s = new Uint8Array(i);
              for (let c = 0, a = 0; c < i; c++) {
                const t = e.charCodeAt(a++),
                  n = e.charCodeAt(a++),
                  o = S(t),
                  i = S(n);
                if (void 0 === o || (void 0 === i && !Number.isNaN(n)))
                  throw new r.SolanaError(
                    r.SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE,
                    { ...p, value: e },
                  );
                s[c] = Number.isNaN(n)
                  ? o
                  : (o << 4) | (null !== i && void 0 !== i ? i : 0);
              }
              return (t.set(s, n), s.length + n);
            },
          }),
        m = () =>
          o.createDecoder({
            read(e, t) {
              const n = e
                .slice(t)
                .reduce((e, t) => e + t.toString(16).padStart(2, "0"), "");
              return [n, e.length];
            },
          }),
        w = () => o.combineCodec(y(), m()),
        b = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        x = () => s(b),
        _ = () => c(b),
        v = () => a(b),
        A = (e, t) =>
          o.createEncoder({
            getSizeFromValue: (e) => Math.floor((e.length * t) / 8),
            write(n, r, o) {
              if ((i(e, n), "" === n)) return o;
              const s = [...n].map((t) => e.indexOf(t)),
                c = D(s, t, 8, !1);
              return (r.set(c, o), c.length + o);
            },
          }),
        I = (e, t) =>
          o.createDecoder({
            read(n, r) {
              void 0 === r && (r = 0);
              const o = 0 === r ? n : n.slice(r);
              if (0 === o.length) return ["", n.length];
              const i = D([...o], 8, t, !0);
              return [i.map((t) => e[t]).join(""), n.length];
            },
          }),
        B = (e, t) => o.combineCodec(A(e, t), I(e, t));
      function D(e, t, n, r) {
        const o = [];
        let i = 0,
          s = 0;
        const c = (1 << n) - 1;
        for (const a of e) {
          ((i = (i << t) | a), (s += t));
          while (s >= n) ((s -= n), o.push((i >> s) & c));
        }
        return (r && s > 0 && o.push((i << (n - s)) & c), o);
      }
      var C =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        O = () =>
          o.createEncoder({
            getSizeFromValue: (e) => {
              try {
                return atob(e).length;
              } catch (t) {
                throw new r.SolanaError(
                  r.SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE,
                  { alphabet: C, base: 64, value: e },
                );
              }
            },
            write(e, t, n) {
              try {
                const r = atob(e)
                  .split("")
                  .map((e) => e.charCodeAt(0));
                return (t.set(r, n), r.length + n);
              } catch (o) {
                throw new r.SolanaError(
                  r.SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE,
                  { alphabet: C, base: 64, value: e },
                );
              }
            },
          }),
        z = () =>
          o.createDecoder({
            read(e, t) {
              void 0 === t && (t = 0);
              const n = e.slice(t),
                r = btoa(String.fromCharCode(...n));
              return [r, e.length];
            },
          }),
        U = () => o.combineCodec(O(), z()),
        L = (e) => e.replace(/\u0000/g, ""),
        R = (e, t) => e.padEnd(t, "\0"),
        N = globalThis.TextDecoder,
        H = globalThis.TextEncoder,
        V = () => {
          let e;
          return o.createEncoder({
            getSizeFromValue: (t) => (e || (e = new H())).encode(t).length,
            write: (t, n, r) => {
              const o = (e || (e = new H())).encode(t);
              return (n.set(o, r), r + o.length);
            },
          });
        },
        P = () => {
          let e;
          return o.createDecoder({
            read(t, n) {
              const r = (e || (e = new N())).decode(t.slice(n));
              return [L(r), t.length];
            },
          });
        },
        F = () => o.combineCodec(V(), P());
      ((t.assertValidBaseString = i),
        (t.getBase10Codec = E),
        (t.getBase10Decoder = g),
        (t.getBase10Encoder = h),
        (t.getBase16Codec = w),
        (t.getBase16Decoder = m),
        (t.getBase16Encoder = y),
        (t.getBase58Codec = v),
        (t.getBase58Decoder = _),
        (t.getBase58Encoder = x),
        (t.getBase64Codec = U),
        (t.getBase64Decoder = z),
        (t.getBase64Encoder = O),
        (t.getBaseXCodec = a),
        (t.getBaseXDecoder = c),
        (t.getBaseXEncoder = s),
        (t.getBaseXResliceCodec = B),
        (t.getBaseXResliceDecoder = I),
        (t.getBaseXResliceEncoder = A),
        (t.getUtf8Codec = F),
        (t.getUtf8Decoder = P),
        (t.getUtf8Encoder = V),
        (t.padNullCharacters = R),
        (t.removeNullCharacters = L));
    },
    1814: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.assertValidNumberOfItemsForCodec = s),
        (t.getArrayCodec = h),
        (t.getArrayDecoder = l),
        (t.getArrayEncoder = d),
        (t.getBitArrayCodec = S),
        (t.getBitArrayDecoder = p),
        (t.getBitArrayEncoder = E),
        (t.getBooleanCodec = w),
        (t.getBooleanDecoder = m),
        (t.getBooleanEncoder = y),
        (t.getBytesCodec = _),
        (t.getBytesDecoder = x),
        (t.getBytesEncoder = b),
        (t.getConstantCodec = B),
        (t.getConstantDecoder = I),
        (t.getConstantEncoder = A),
        (t.getDataEnumEncoder =
          t.getDataEnumDecoder =
          t.getDataEnumCodec =
            void 0),
        (t.getDiscriminatedUnionCodec = F),
        (t.getDiscriminatedUnionDecoder = P),
        (t.getDiscriminatedUnionEncoder = V),
        (t.getEnumCodec = W),
        (t.getEnumDecoder = Z),
        (t.getEnumEncoder = K),
        (t.getHiddenPrefixCodec = $),
        (t.getHiddenPrefixDecoder = Y),
        (t.getHiddenPrefixEncoder = q),
        (t.getHiddenSuffixCodec = ee),
        (t.getHiddenSuffixDecoder = Q),
        (t.getHiddenSuffixEncoder = J),
        (t.getMapCodec = re),
        (t.getMapDecoder = ne),
        (t.getMapEncoder = te),
        (t.getNullableCodec = ue),
        (t.getNullableDecoder = ae),
        (t.getNullableEncoder = ce),
        (t.getScalarEnumEncoder =
          t.getScalarEnumDecoder =
          t.getScalarEnumCodec =
            void 0),
        (t.getSetCodec = le),
        (t.getSetDecoder = de),
        (t.getSetEncoder = fe),
        (t.getStructCodec = Ee),
        (t.getStructDecoder = ge),
        (t.getStructEncoder = he),
        (t.getTupleCodec = O),
        (t.getTupleDecoder = C),
        (t.getTupleEncoder = D),
        (t.getUnionCodec = L),
        (t.getUnionDecoder = U),
        (t.getUnionEncoder = z),
        (t.getUnitCodec = se),
        (t.getUnitDecoder = ie),
        (t.getUnitEncoder = oe));
      var r = n(298),
        o = n(614),
        i = n(299);
      function s(e, t, n) {
        if (t !== n)
          throw new i.SolanaError(
            i.SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS,
            { actual: n, codecDescription: e, expected: t },
          );
      }
      function c(e) {
        return e.reduce(
          (e, t) => (null === e || null === t ? null : Math.max(e, t)),
          0,
        );
      }
      function a(e) {
        return e.reduce((e, t) => (null === e || null === t ? null : e + t), 0);
      }
      function u(e) {
        return (0, r.isFixedSize)(e) ? e.fixedSize : null;
      }
      function f(e) {
        var t;
        return (0, r.isFixedSize)(e)
          ? e.fixedSize
          : null !== (t = e.maxSize) && void 0 !== t
            ? t
            : null;
      }
      function d(e, t) {
        var n, i;
        void 0 === t && (t = {});
        const c =
            null !== (n = t.size) && void 0 !== n ? n : (0, o.getU32Encoder)(),
          a = g(c, u(e)),
          d = null !== (i = g(c, f(e))) && void 0 !== i ? i : void 0;
        return (0, r.createEncoder)({
          ...(null !== a
            ? { fixedSize: a }
            : {
                getSizeFromValue: (t) => {
                  const n =
                    "object" === typeof c
                      ? (0, r.getEncodedSize)(t.length, c)
                      : 0;
                  return (
                    n +
                    [...t].reduce((t, n) => t + (0, r.getEncodedSize)(n, e), 0)
                  );
                },
                maxSize: d,
              }),
          write: (t, n, r) => (
            "number" === typeof c && s("array", c, t.length),
            "object" === typeof c && (r = c.write(t.length, n, r)),
            t.forEach((t) => {
              r = e.write(t, n, r);
            }),
            r
          ),
        });
      }
      function l(e, t) {
        var n, i;
        void 0 === t && (t = {});
        const s =
            null !== (n = t.size) && void 0 !== n ? n : (0, o.getU32Decoder)(),
          c = u(e),
          a = g(s, c),
          d = null !== (i = g(s, f(e))) && void 0 !== i ? i : void 0;
        return (0, r.createDecoder)({
          ...(null !== a ? { fixedSize: a } : { maxSize: d }),
          read: (t, n) => {
            const r = [];
            if ("object" === typeof s && 0 === t.slice(n).length) return [r, n];
            if ("remainder" === s) {
              while (n < t.length) {
                const [o, i] = e.read(t, n);
                ((n = i), r.push(o));
              }
              return [r, n];
            }
            const [o, i] = "number" === typeof s ? [s, n] : s.read(t, n);
            n = i;
            for (let s = 0; s < o; s += 1) {
              const [o, i] = e.read(t, n);
              ((n = i), r.push(o));
            }
            return [r, n];
          },
        });
      }
      function h(e, t) {
        return (
          void 0 === t && (t = {}),
          (0, r.combineCodec)(d(e, t), l(e, t))
        );
      }
      function g(e, t) {
        return "number" !== typeof e
          ? null
          : 0 === e
            ? 0
            : null === t
              ? null
              : t * e;
      }
      function E(e, t) {
        var n;
        void 0 === t && (t = {});
        const o = "boolean" === typeof t ? { backward: t } : t,
          i = null !== (n = o.backward) && void 0 !== n && n;
        return (0, r.createEncoder)({
          fixedSize: e,
          write(t, n, r) {
            const o = [];
            for (let c = 0; c < e; c += 1) {
              let e = 0;
              for (let n = 0; n < 8; n += 1) {
                var s;
                const r = Number(
                  null !== (s = t[8 * c + n]) && void 0 !== s ? s : 0,
                );
                e |= r << (i ? n : 7 - n);
              }
              i ? o.unshift(e) : o.push(e);
            }
            return (n.set(o, r), e);
          },
        });
      }
      function p(e, t) {
        var n;
        void 0 === t && (t = {});
        const o = "boolean" === typeof t ? { backward: t } : t,
          i = null !== (n = o.backward) && void 0 !== n && n;
        return (0, r.createDecoder)({
          fixedSize: e,
          read(t, n) {
            (0, r.assertByteArrayHasEnoughBytesForCodec)("bitArray", e, t, n);
            const o = [];
            let s = t.slice(n, n + e);
            return (
              (s = i ? s.reverse() : s),
              s.forEach((e) => {
                for (let t = 0; t < 8; t += 1)
                  i
                    ? (o.push(Boolean(1 & e)), (e >>= 1))
                    : (o.push(Boolean(128 & e)), (e <<= 1));
              }),
              [o, n + e]
            );
          },
        });
      }
      function S(e, t) {
        return (
          void 0 === t && (t = {}),
          (0, r.combineCodec)(E(e, t), p(e, t))
        );
      }
      function y(e) {
        var t;
        return (
          void 0 === e && (e = {}),
          (0, r.transformEncoder)(
            null !== (t = e.size) && void 0 !== t ? t : (0, o.getU8Encoder)(),
            (e) => (e ? 1 : 0),
          )
        );
      }
      function m(e) {
        var t;
        return (
          void 0 === e && (e = {}),
          (0, r.transformDecoder)(
            null !== (t = e.size) && void 0 !== t ? t : (0, o.getU8Decoder)(),
            (e) => 1 === Number(e),
          )
        );
      }
      function w(e) {
        return (void 0 === e && (e = {}), (0, r.combineCodec)(y(e), m(e)));
      }
      function b() {
        return (0, r.createEncoder)({
          getSizeFromValue: (e) => e.length,
          write: (e, t, n) => (t.set(e, n), n + e.length),
        });
      }
      function x() {
        return (0, r.createDecoder)({
          read: (e, t) => {
            const n = e.slice(t);
            return [n, t + n.length];
          },
        });
      }
      function _() {
        return (0, r.combineCodec)(b(), x());
      }
      var v = () =>
        (0, r.createDecoder)({
          read(e, t) {
            const n = e
              .slice(t)
              .reduce((e, t) => e + t.toString(16).padStart(2, "0"), "");
            return [n, e.length];
          },
        });
      function A(e) {
        return (0, r.createEncoder)({
          fixedSize: e.length,
          write: (t, n, r) => (n.set(e, r), r + e.length),
        });
      }
      function I(e) {
        return (0, r.createDecoder)({
          fixedSize: e.length,
          read: (t, n) => {
            const o = v();
            if (!(0, r.containsBytes)(t, e, n))
              throw new i.SolanaError(
                i.SOLANA_ERROR__CODECS__INVALID_CONSTANT,
                {
                  constant: e,
                  data: t,
                  hexConstant: o.decode(e),
                  hexData: o.decode(t),
                  offset: n,
                },
              );
            return [void 0, n + e.length];
          },
        });
      }
      function B(e) {
        return (0, r.combineCodec)(A(e), I(e));
      }
      function D(e) {
        var t;
        const n = a(e.map(u)),
          o = null !== (t = a(e.map(f))) && void 0 !== t ? t : void 0;
        return (0, r.createEncoder)({
          ...(null === n
            ? {
                getSizeFromValue: (t) =>
                  e
                    .map((e, n) => (0, r.getEncodedSize)(t[n], e))
                    .reduce((e, t) => e + t, 0),
                maxSize: o,
              }
            : { fixedSize: n }),
          write: (t, n, r) => (
            s("tuple", e.length, t.length),
            e.forEach((e, o) => {
              r = e.write(t[o], n, r);
            }),
            r
          ),
        });
      }
      function C(e) {
        var t;
        const n = a(e.map(u)),
          o = null !== (t = a(e.map(f))) && void 0 !== t ? t : void 0;
        return (0, r.createDecoder)({
          ...(null === n ? { maxSize: o } : { fixedSize: n }),
          read: (t, n) => {
            const r = [];
            return (
              e.forEach((e) => {
                const [o, i] = e.read(t, n);
                (r.push(o), (n = i));
              }),
              [r, n]
            );
          },
        });
      }
      function O(e) {
        return (0, r.combineCodec)(D(e), C(e));
      }
      function z(e, t) {
        const n = N(e),
          o = (n, r, o) => {
            const i = t(n);
            return (R(e, i), e[i].write(n, r, o));
          };
        if (null !== n) return (0, r.createEncoder)({ fixedSize: n, write: o });
        const i = H(e);
        return (0, r.createEncoder)({
          ...(null !== i ? { maxSize: i } : {}),
          getSizeFromValue: (n) => {
            const o = t(n);
            return (R(e, o), (0, r.getEncodedSize)(n, e[o]));
          },
          write: o,
        });
      }
      function U(e, t) {
        const n = N(e),
          o = (n, r) => {
            const o = t(n, r);
            return (R(e, o), e[o].read(n, r));
          };
        if (null !== n) return (0, r.createDecoder)({ fixedSize: n, read: o });
        const i = H(e);
        return (0, r.createDecoder)({
          ...(null !== i ? { maxSize: i } : {}),
          read: o,
        });
      }
      function L(e, t, n) {
        return (0, r.combineCodec)(z(e, t), U(e, n));
      }
      function R(e, t) {
        if ("undefined" === typeof e[t])
          throw new i.SolanaError(
            i.SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE,
            { maxRange: e.length - 1, minRange: 0, variant: t },
          );
      }
      function N(e) {
        if (0 === e.length) return 0;
        if (!(0, r.isFixedSize)(e[0])) return null;
        const t = e[0].fixedSize,
          n = e.every((e) => (0, r.isFixedSize)(e) && e.fixedSize === t);
        return n ? t : null;
      }
      function H(e) {
        return c(e.map((e) => f(e)));
      }
      function V(e, t) {
        var n, i;
        void 0 === t && (t = {});
        const s = null !== (n = t.discriminator) && void 0 !== n ? n : "__kind",
          c = null !== (i = t.size) && void 0 !== i ? i : (0, o.getU8Encoder)();
        return z(
          e.map((e, t) => {
            let [, n] = e;
            return (0, r.transformEncoder)(D([c, n]), (e) => [t, e]);
          }),
          (t) => T(e, t[s]),
        );
      }
      function P(e, t) {
        var n, i;
        void 0 === t && (t = {});
        const s = null !== (n = t.discriminator) && void 0 !== n ? n : "__kind",
          c = null !== (i = t.size) && void 0 !== i ? i : (0, o.getU8Decoder)();
        return U(
          e.map((e) => {
            let [t, n] = e;
            return (0, r.transformDecoder)(C([c, n]), (e) => {
              let [, n] = e;
              return { [s]: t, ...n };
            });
          }),
          (e, t) => Number(c.read(e, t)[0]),
        );
      }
      function F(e, t) {
        return (
          void 0 === t && (t = {}),
          (0, r.combineCodec)(V(e, t), P(e, t))
        );
      }
      function T(e, t) {
        const n = e.findIndex((e) => {
          let [n] = e;
          return t === n;
        });
        if (n < 0)
          throw new i.SolanaError(
            i.SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT,
            {
              value: t,
              variants: e.map((e) => {
                let [t] = e;
                return t;
              }),
            },
          );
        return n;
      }
      ((t.getDataEnumEncoder = V),
        (t.getDataEnumDecoder = P),
        (t.getDataEnumCodec = F));
      function M(e) {
        const t = [
            ...new Set(Object.values(e).filter((e) => "number" === typeof e)),
          ].sort(),
          n = Object.fromEntries(Object.entries(e).slice(t.length)),
          r = Object.keys(n),
          o = Object.values(n),
          i = [...new Set([...r, ...o.filter((e) => "string" === typeof e)])];
        return {
          enumKeys: r,
          enumRecord: n,
          enumValues: o,
          numericalValues: t,
          stringValues: i,
        };
      }
      function k(e) {
        let { enumKeys: t, enumValues: n, variant: r } = e;
        const o = G(n, (e) => e === r);
        return o >= 0 ? o : t.findIndex((e) => e === r);
      }
      function j(e) {
        let {
          discriminator: t,
          enumKeys: n,
          enumValues: r,
          useValuesAsDiscriminators: o,
        } = e;
        return o ? G(r, (e) => e === t) : t >= 0 && t < n.length ? t : -1;
      }
      function G(e, t) {
        let n = e.length;
        while (n--) if (t(e[n], n, e)) return n;
        return -1;
      }
      function X(e) {
        if (0 === e.length) return "";
        let t = [e[0], e[0]];
        const n = [];
        for (let r = 1; r < e.length; r++) {
          const o = e[r];
          t[1] + 1 === o
            ? (t[1] = o)
            : (n.push(t[0] === t[1] ? "" + t[0] : `${t[0]}-${t[1]}`),
              (t = [o, o]));
        }
        return (
          n.push(t[0] === t[1] ? "" + t[0] : `${t[0]}-${t[1]}`),
          n.join(", ")
        );
      }
      function K(e, t) {
        var n, s;
        void 0 === t && (t = {});
        const c =
            null !== (n = t.size) && void 0 !== n ? n : (0, o.getU8Encoder)(),
          a = null !== (s = t.useValuesAsDiscriminators) && void 0 !== s && s,
          {
            enumKeys: u,
            enumValues: f,
            numericalValues: d,
            stringValues: l,
          } = M(e);
        if (a && f.some((e) => "string" === typeof e))
          throw new i.SolanaError(
            i.SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS,
            { stringValues: f.filter((e) => "string" === typeof e) },
          );
        return (0, r.transformEncoder)(c, (e) => {
          const t = k({ enumKeys: u, enumValues: f, variant: e });
          if (t < 0)
            throw new i.SolanaError(
              i.SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT,
              {
                formattedNumericalValues: X(d),
                numericalValues: d,
                stringValues: l,
                variant: e,
              },
            );
          return a ? f[t] : t;
        });
      }
      function Z(e, t) {
        var n, s;
        void 0 === t && (t = {});
        const c =
            null !== (n = t.size) && void 0 !== n ? n : (0, o.getU8Decoder)(),
          a = null !== (s = t.useValuesAsDiscriminators) && void 0 !== s && s,
          { enumKeys: u, enumValues: f, numericalValues: d } = M(e);
        if (a && f.some((e) => "string" === typeof e))
          throw new i.SolanaError(
            i.SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS,
            { stringValues: f.filter((e) => "string" === typeof e) },
          );
        return (0, r.transformDecoder)(c, (e) => {
          const t = Number(e),
            n = j({
              discriminator: t,
              enumKeys: u,
              enumValues: f,
              useValuesAsDiscriminators: a,
            });
          if (n < 0) {
            const e = a ? d : [...Array(u.length).keys()];
            throw new i.SolanaError(
              i.SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE,
              {
                discriminator: t,
                formattedValidDiscriminators: X(e),
                validDiscriminators: e,
              },
            );
          }
          return f[n];
        });
      }
      function W(e, t) {
        return (
          void 0 === t && (t = {}),
          (0, r.combineCodec)(K(e, t), Z(e, t))
        );
      }
      ((t.getScalarEnumEncoder = K),
        (t.getScalarEnumDecoder = Z),
        (t.getScalarEnumCodec = W));
      function q(e, t) {
        return (0, r.transformEncoder)(D([...t, e]), (e) => [
          ...t.map(() => {}),
          e,
        ]);
      }
      function Y(e, t) {
        return (0, r.transformDecoder)(C([...t, e]), (e) => e[e.length - 1]);
      }
      function $(e, t) {
        return (0, r.combineCodec)(q(e, t), Y(e, t));
      }
      function J(e, t) {
        return (0, r.transformEncoder)(D([e, ...t]), (e) => [
          e,
          ...t.map(() => {}),
        ]);
      }
      function Q(e, t) {
        return (0, r.transformDecoder)(C([e, ...t]), (e) => e[0]);
      }
      function ee(e, t) {
        return (0, r.combineCodec)(J(e, t), Q(e, t));
      }
      function te(e, t, n) {
        return (
          void 0 === n && (n = {}),
          (0, r.transformEncoder)(d(D([e, t]), n), (e) => [...e.entries()])
        );
      }
      function ne(e, t, n) {
        return (
          void 0 === n && (n = {}),
          (0, r.transformDecoder)(l(C([e, t]), n), (e) => new Map(e))
        );
      }
      function re(e, t, n) {
        return (
          void 0 === n && (n = {}),
          (0, r.combineCodec)(te(e, t, n), ne(e, t, n))
        );
      }
      function oe() {
        return (0, r.createEncoder)({ fixedSize: 0, write: (e, t, n) => n });
      }
      function ie() {
        return (0, r.createDecoder)({
          fixedSize: 0,
          read: (e, t) => [void 0, t],
        });
      }
      function se() {
        return (0, r.combineCodec)(oe(), ie());
      }
      function ce(e, t) {
        void 0 === t && (t = {});
        const n = ((e) =>
            null === t.prefix
              ? (0, r.transformEncoder)(oe(), (e) => {})
              : y({
                  size:
                    null !== (e = t.prefix) && void 0 !== e
                      ? e
                      : (0, o.getU8Encoder)(),
                }))(),
          i = (() =>
            "zeroes" === t.noneValue
              ? ((0, r.assertIsFixedSize)(e),
                (0, r.fixEncoderSize)(oe(), e.fixedSize))
              : t.noneValue
                ? A(t.noneValue)
                : oe())();
        return z(
          [
            (0, r.transformEncoder)(D([n, i]), (e) => [!1, void 0]),
            (0, r.transformEncoder)(D([n, e]), (e) => [!0, e]),
          ],
          (e) => Number(null !== e),
        );
      }
      function ae(e, t) {
        void 0 === t && (t = {});
        const n = ((e) =>
            null === t.prefix
              ? (0, r.transformDecoder)(ie(), () => !1)
              : m({
                  size:
                    null !== (e = t.prefix) && void 0 !== e
                      ? e
                      : (0, o.getU8Decoder)(),
                }))(),
          i = (() =>
            "zeroes" === t.noneValue
              ? ((0, r.assertIsFixedSize)(e),
                (0, r.fixDecoderSize)(ie(), e.fixedSize))
              : t.noneValue
                ? I(t.noneValue)
                : ie())();
        return U(
          [
            (0, r.transformDecoder)(C([n, i]), () => null),
            (0, r.transformDecoder)(C([n, e]), (e) => {
              let [, t] = e;
              return t;
            }),
          ],
          (e, o) => {
            if (null === t.prefix && !t.noneValue) return Number(o < e.length);
            if (null === t.prefix && null != t.noneValue) {
              const n =
                "zeroes" === t.noneValue
                  ? new Uint8Array(i.fixedSize).fill(0)
                  : t.noneValue;
              return (0, r.containsBytes)(e, n, o) ? 0 : 1;
            }
            return Number(n.read(e, o)[0]);
          },
        );
      }
      function ue(e, t) {
        return (
          void 0 === t && (t = {}),
          (0, r.combineCodec)(ce(e, t), ae(e, t))
        );
      }
      function fe(e, t) {
        return (
          void 0 === t && (t = {}),
          (0, r.transformEncoder)(d(e, t), (e) => [...e])
        );
      }
      function de(e, t) {
        return (
          void 0 === t && (t = {}),
          (0, r.transformDecoder)(l(e, t), (e) => new Set(e))
        );
      }
      function le(e, t) {
        return (
          void 0 === t && (t = {}),
          (0, r.combineCodec)(fe(e, t), de(e, t))
        );
      }
      function he(e) {
        var t;
        const n = e.map((e) => {
            let [, t] = e;
            return t;
          }),
          o = a(n.map(u)),
          i = null !== (t = a(n.map(f))) && void 0 !== t ? t : void 0;
        return (0, r.createEncoder)({
          ...(null === o
            ? {
                getSizeFromValue: (t) =>
                  e
                    .map((e) => {
                      let [n, o] = e;
                      return (0, r.getEncodedSize)(t[n], o);
                    })
                    .reduce((e, t) => e + t, 0),
                maxSize: i,
              }
            : { fixedSize: o }),
          write: (t, n, r) => (
            e.forEach((e) => {
              let [o, i] = e;
              r = i.write(t[o], n, r);
            }),
            r
          ),
        });
      }
      function ge(e) {
        var t;
        const n = e.map((e) => {
            let [, t] = e;
            return t;
          }),
          o = a(n.map(u)),
          i = null !== (t = a(n.map(f))) && void 0 !== t ? t : void 0;
        return (0, r.createDecoder)({
          ...(null === o ? { maxSize: i } : { fixedSize: o }),
          read: (t, n) => {
            const r = {};
            return (
              e.forEach((e) => {
                let [o, i] = e;
                const [s, c] = i.read(t, n);
                ((n = c), (r[o] = s));
              }),
              [r, n]
            );
          },
        });
      }
      function Ee(e) {
        return (0, r.combineCodec)(he(e), ge(e));
      }
    },
    184: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addCodecSentinel = m),
        (t.addCodecSizePrefix = B),
        (t.addDecoderSentinel = y),
        (t.addDecoderSizePrefix = I),
        (t.addEncoderSentinel = S),
        (t.addEncoderSizePrefix = A),
        (t.assertByteArrayHasEnoughBytesForCodec = _),
        (t.assertByteArrayIsNotEmptyForCodec = x),
        (t.assertByteArrayOffsetIsNotOutOfRange = v),
        (t.assertIsFixedSize = h),
        (t.assertIsVariableSize = E),
        (t.combineCodec = p),
        (t.containsBytes = c),
        (t.createCodec = d),
        (t.createDecoder = f),
        (t.createEncoder = u),
        (t.fixBytes = void 0),
        (t.fixCodecSize = O),
        (t.fixDecoderSize = C),
        (t.fixEncoderSize = D),
        (t.getEncodedSize = a),
        (t.isFixedSize = l),
        (t.isVariableSize = g),
        (t.mergeBytes = void 0),
        (t.offsetCodec = L),
        (t.offsetDecoder = U),
        (t.offsetEncoder = z),
        (t.padBytes = void 0),
        (t.padLeftCodec = k),
        (t.padLeftDecoder = T),
        (t.padLeftEncoder = P),
        (t.padRightCodec = j),
        (t.padRightDecoder = M),
        (t.padRightEncoder = F),
        (t.resizeCodec = V),
        (t.resizeDecoder = H),
        (t.resizeEncoder = N),
        (t.reverseCodec = Z),
        (t.reverseDecoder = K),
        (t.reverseEncoder = X),
        (t.transformCodec = Y),
        (t.transformDecoder = q),
        (t.transformEncoder = W));
      var r = n(299),
        o = (e) => {
          const t = e.filter((e) => e.length);
          if (0 === t.length) return e.length ? e[0] : new Uint8Array();
          if (1 === t.length) return t[0];
          const n = t.reduce((e, t) => e + t.length, 0),
            r = new Uint8Array(n);
          let o = 0;
          return (
            t.forEach((e) => {
              (r.set(e, o), (o += e.length));
            }),
            r
          );
        };
      t.mergeBytes = o;
      var i = (e, t) => {
        if (e.length >= t) return e;
        const n = new Uint8Array(t).fill(0);
        return (n.set(e), n);
      };
      t.padBytes = i;
      var s = (e, t) => i(e.length <= t ? e : e.slice(0, t), t);
      function c(e, t, n) {
        const r =
          0 === n && e.length === t.length ? e : e.slice(n, n + t.length);
        return r.length === t.length && t.every((e, t) => e === r[t]);
      }
      function a(e, t) {
        return "fixedSize" in t ? t.fixedSize : t.getSizeFromValue(e);
      }
      function u(e) {
        return Object.freeze({
          ...e,
          encode: (t) => {
            const n = new Uint8Array(a(t, e));
            return (e.write(t, n, 0), n);
          },
        });
      }
      function f(e) {
        return Object.freeze({
          ...e,
          decode: function (t, n) {
            return (void 0 === n && (n = 0), e.read(t, n)[0]);
          },
        });
      }
      function d(e) {
        return Object.freeze({
          ...e,
          decode: function (t, n) {
            return (void 0 === n && (n = 0), e.read(t, n)[0]);
          },
          encode: (t) => {
            const n = new Uint8Array(a(t, e));
            return (e.write(t, n, 0), n);
          },
        });
      }
      function l(e) {
        return "fixedSize" in e && "number" === typeof e.fixedSize;
      }
      function h(e) {
        if (!l(e))
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH,
          );
      }
      function g(e) {
        return !l(e);
      }
      function E(e) {
        if (!g(e))
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH,
          );
      }
      function p(e, t) {
        if (l(e) !== l(t))
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH,
          );
        if (l(e) && l(t) && e.fixedSize !== t.fixedSize)
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH,
            { decoderFixedSize: t.fixedSize, encoderFixedSize: e.fixedSize },
          );
        if (!l(e) && !l(t) && e.maxSize !== t.maxSize)
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH,
            { decoderMaxSize: t.maxSize, encoderMaxSize: e.maxSize },
          );
        return {
          ...t,
          ...e,
          decode: t.decode,
          encode: e.encode,
          read: t.read,
          write: e.write,
        };
      }
      function S(e, t) {
        const n = (n, o, i) => {
          const s = e.encode(n);
          if (w(s, t) >= 0)
            throw new r.SolanaError(
              r.SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL,
              {
                encodedBytes: s,
                hexEncodedBytes: b(s),
                hexSentinel: b(t),
                sentinel: t,
              },
            );
          return (
            o.set(s, i),
            (i += s.length),
            o.set(t, i),
            (i += t.length),
            i
          );
        };
        return l(e)
          ? u({ ...e, fixedSize: e.fixedSize + t.length, write: n })
          : u({
              ...e,
              ...(null != e.maxSize ? { maxSize: e.maxSize + t.length } : {}),
              getSizeFromValue: (n) => e.getSizeFromValue(n) + t.length,
              write: n,
            });
      }
      function y(e, t) {
        const n = (n, o) => {
          const i = 0 === o ? n : n.slice(o),
            s = w(i, t);
          if (-1 === s)
            throw new r.SolanaError(
              r.SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES,
              {
                decodedBytes: i,
                hexDecodedBytes: b(i),
                hexSentinel: b(t),
                sentinel: t,
              },
            );
          const c = i.slice(0, s);
          return [e.decode(c), o + c.length + t.length];
        };
        return l(e)
          ? f({ ...e, fixedSize: e.fixedSize + t.length, read: n })
          : f({
              ...e,
              ...(null != e.maxSize ? { maxSize: e.maxSize + t.length } : {}),
              read: n,
            });
      }
      function m(e, t) {
        return p(S(e, t), y(e, t));
      }
      function w(e, t) {
        return e.findIndex((e, n, r) =>
          1 === t.length ? e === t[0] : c(r, t, n),
        );
      }
      function b(e) {
        return e.reduce((e, t) => e + t.toString(16).padStart(2, "0"), "");
      }
      function x(e, t, n) {
        if ((void 0 === n && (n = 0), t.length - n <= 0))
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY,
            { codecDescription: e },
          );
      }
      function _(e, t, n, o) {
        void 0 === o && (o = 0);
        const i = n.length - o;
        if (i < t)
          throw new r.SolanaError(r.SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH, {
            bytesLength: i,
            codecDescription: e,
            expected: t,
          });
      }
      function v(e, t, n) {
        if (t < 0 || t > n)
          throw new r.SolanaError(r.SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE, {
            bytesLength: n,
            codecDescription: e,
            offset: t,
          });
      }
      function A(e, t) {
        var n, r;
        const o = (n, r, o) => {
          const i = e.encode(n);
          return ((o = t.write(i.length, r, o)), r.set(i, o), o + i.length);
        };
        if (l(t) && l(e))
          return u({ ...e, fixedSize: t.fixedSize + e.fixedSize, write: o });
        const i = l(t)
            ? t.fixedSize
            : null !== (n = t.maxSize) && void 0 !== n
              ? n
              : null,
          s = l(e)
            ? e.fixedSize
            : null !== (r = e.maxSize) && void 0 !== r
              ? r
              : null,
          c = null !== i && null !== s ? i + s : null;
        return u({
          ...e,
          ...(null !== c ? { maxSize: c } : {}),
          getSizeFromValue: (n) => {
            const r = a(n, e);
            return a(r, t) + r;
          },
          write: o,
        });
      }
      function I(e, t) {
        var n, r;
        const o = (n, r) => {
          const [o, i] = t.read(n, r),
            s = Number(o);
          return (
            (r = i),
            (r > 0 || n.length > s) && (n = n.slice(r, r + s)),
            _("addDecoderSizePrefix", s, n),
            [e.decode(n), r + s]
          );
        };
        if (l(t) && l(e))
          return f({ ...e, fixedSize: t.fixedSize + e.fixedSize, read: o });
        const i = l(t)
            ? t.fixedSize
            : null !== (n = t.maxSize) && void 0 !== n
              ? n
              : null,
          s = l(e)
            ? e.fixedSize
            : null !== (r = e.maxSize) && void 0 !== r
              ? r
              : null,
          c = null !== i && null !== s ? i + s : null;
        return f({ ...e, ...(null !== c ? { maxSize: c } : {}), read: o });
      }
      function B(e, t) {
        return p(A(e, t), I(e, t));
      }
      function D(e, t) {
        return u({
          fixedSize: t,
          write: (n, r, o) => {
            const i = e.encode(n),
              s = i.length > t ? i.slice(0, t) : i;
            return (r.set(s, o), o + t);
          },
        });
      }
      function C(e, t) {
        return f({
          fixedSize: t,
          read: (n, r) => {
            (_("fixCodecSize", t, n, r),
              (r > 0 || n.length > t) && (n = n.slice(r, r + t)),
              l(e) && (n = s(n, e.fixedSize)));
            const [o] = e.read(n, 0);
            return [o, r + t];
          },
        });
      }
      function O(e, t) {
        return p(D(e, t), C(e, t));
      }
      function z(e, t) {
        return u({
          ...e,
          write: (n, r, o) => {
            const i = (e) => R(e, r.length),
              s = t.preOffset
                ? t.preOffset({ bytes: r, preOffset: o, wrapBytes: i })
                : o;
            v("offsetEncoder", s, r.length);
            const c = e.write(n, r, s),
              a = t.postOffset
                ? t.postOffset({
                    bytes: r,
                    newPreOffset: s,
                    postOffset: c,
                    preOffset: o,
                    wrapBytes: i,
                  })
                : c;
            return (v("offsetEncoder", a, r.length), a);
          },
        });
      }
      function U(e, t) {
        return f({
          ...e,
          read: (n, r) => {
            const o = (e) => R(e, n.length),
              i = t.preOffset
                ? t.preOffset({ bytes: n, preOffset: r, wrapBytes: o })
                : r;
            v("offsetDecoder", i, n.length);
            const [s, c] = e.read(n, i),
              a = t.postOffset
                ? t.postOffset({
                    bytes: n,
                    newPreOffset: i,
                    postOffset: c,
                    preOffset: r,
                    wrapBytes: o,
                  })
                : c;
            return (v("offsetDecoder", a, n.length), [s, a]);
          },
        });
      }
      function L(e, t) {
        return p(z(e, t), U(e, t));
      }
      function R(e, t) {
        return 0 === t ? 0 : ((e % t) + t) % t;
      }
      function N(e, t) {
        if (l(e)) {
          const n = t(e.fixedSize);
          if (n < 0)
            throw new r.SolanaError(
              r.SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH,
              { bytesLength: n, codecDescription: "resizeEncoder" },
            );
          return u({ ...e, fixedSize: n });
        }
        return u({
          ...e,
          getSizeFromValue: (n) => {
            const o = t(e.getSizeFromValue(n));
            if (o < 0)
              throw new r.SolanaError(
                r.SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH,
                { bytesLength: o, codecDescription: "resizeEncoder" },
              );
            return o;
          },
        });
      }
      function H(e, t) {
        if (l(e)) {
          const n = t(e.fixedSize);
          if (n < 0)
            throw new r.SolanaError(
              r.SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH,
              { bytesLength: n, codecDescription: "resizeDecoder" },
            );
          return f({ ...e, fixedSize: n });
        }
        return e;
      }
      function V(e, t) {
        return p(N(e, t), H(e, t));
      }
      function P(e, t) {
        return z(
          N(e, (e) => e + t),
          {
            preOffset: (e) => {
              let { preOffset: n } = e;
              return n + t;
            },
          },
        );
      }
      function F(e, t) {
        return z(
          N(e, (e) => e + t),
          {
            postOffset: (e) => {
              let { postOffset: n } = e;
              return n + t;
            },
          },
        );
      }
      function T(e, t) {
        return U(
          H(e, (e) => e + t),
          {
            preOffset: (e) => {
              let { preOffset: n } = e;
              return n + t;
            },
          },
        );
      }
      function M(e, t) {
        return U(
          H(e, (e) => e + t),
          {
            postOffset: (e) => {
              let { postOffset: n } = e;
              return n + t;
            },
          },
        );
      }
      function k(e, t) {
        return p(P(e, t), T(e, t));
      }
      function j(e, t) {
        return p(F(e, t), M(e, t));
      }
      function G(e, t, n, r, o) {
        void 0 === o && (o = 0);
        while (n < --r) {
          const i = e[n];
          ((t[n + o] = e[r]), (t[r + o] = i), n++);
        }
        n === r && (t[n + o] = e[n]);
      }
      function X(e) {
        return (
          h(e),
          u({
            ...e,
            write: (t, n, r) => {
              const o = e.write(t, n, r);
              return (G(n, n, r, r + e.fixedSize), o);
            },
          })
        );
      }
      function K(e) {
        return (
          h(e),
          f({
            ...e,
            read: (t, n) => {
              const r = t.slice();
              return (G(t, r, n, n + e.fixedSize), e.read(r, n));
            },
          })
        );
      }
      function Z(e) {
        return p(X(e), K(e));
      }
      function W(e, t) {
        return u({
          ...(g(e)
            ? { ...e, getSizeFromValue: (n) => e.getSizeFromValue(t(n)) }
            : e),
          write: (n, r, o) => e.write(t(n), r, o),
        });
      }
      function q(e, t) {
        return f({
          ...e,
          read: (n, r) => {
            const [o, i] = e.read(n, r);
            return [t(o, n, r), i];
          },
        });
      }
      function Y(e, t, n) {
        return d({ ...W(e, t), read: n ? q(e, n).read : e.read });
      }
      t.fixBytes = s;
    },
    1883: function (e, t) {},
    1885: function (e, t) {},
    1887: function (e, t) {},
    1916: function (e, t) {},
    1932: function (e, t) {},
    1934: function (e, t) {},
    1945: function (e, t) {},
    1947: function (e, t) {},
    1954: function (e, t) {},
    1956: function (e, t) {},
    1979: function (e, t) {},
    1990: function (e, t) {},
    239: function (e, t, n) {
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
            void 0),
        (t.keccakP = m));
      const r = n(395),
        o = n(130),
        i = BigInt(0),
        s = BigInt(1),
        c = BigInt(2),
        a = BigInt(7),
        u = BigInt(256),
        f = BigInt(113),
        d = [],
        l = [],
        h = [];
      for (let x = 0, _ = s, v = 1, A = 0; x < 24; x++) {
        (([v, A] = [A, (2 * v + 3 * A) % 5]),
          d.push(2 * (5 * A + v)),
          l.push((((x + 1) * (x + 2)) / 2) % 64));
        let e = i;
        for (let t = 0; t < 7; t++)
          ((_ = ((_ << s) ^ ((_ >> a) * f)) % u),
            _ & c && (e ^= s << ((s << BigInt(t)) - s)));
        h.push(e);
      }
      const g = (0, r.split)(h, !0),
        E = g[0],
        p = g[1],
        S = (e, t, n) =>
          n > 32 ? (0, r.rotlBH)(e, t, n) : (0, r.rotlSH)(e, t, n),
        y = (e, t, n) =>
          n > 32 ? (0, r.rotlBL)(e, t, n) : (0, r.rotlSL)(e, t, n);
      function m(e, t) {
        void 0 === t && (t = 24);
        const n = new Uint32Array(10);
        for (let r = 24 - t; r < 24; r++) {
          for (let r = 0; r < 10; r++)
            n[r] = e[r] ^ e[r + 10] ^ e[r + 20] ^ e[r + 30] ^ e[r + 40];
          for (let r = 0; r < 10; r += 2) {
            const t = (r + 8) % 10,
              o = (r + 2) % 10,
              i = n[o],
              s = n[o + 1],
              c = S(i, s, 1) ^ n[t],
              a = y(i, s, 1) ^ n[t + 1];
            for (let n = 0; n < 50; n += 10)
              ((e[r + n] ^= c), (e[r + n + 1] ^= a));
          }
          let t = e[2],
            o = e[3];
          for (let n = 0; n < 24; n++) {
            const r = l[n],
              i = S(t, o, r),
              s = y(t, o, r),
              c = d[n];
            ((t = e[c]), (o = e[c + 1]), (e[c] = i), (e[c + 1] = s));
          }
          for (let r = 0; r < 50; r += 10) {
            for (let t = 0; t < 10; t++) n[t] = e[r + t];
            for (let t = 0; t < 10; t++)
              e[r + t] ^= ~n[(t + 2) % 10] & n[(t + 4) % 10];
          }
          ((e[0] ^= E[r]), (e[1] ^= p[r]));
        }
        (0, o.clean)(n);
      }
      class Keccak extends o.Hash {
        constructor(e, t, n, r, i) {
          if (
            (void 0 === r && (r = !1),
            void 0 === i && (i = 24),
            super(),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.enableXOF = !1),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = r),
            (this.rounds = i),
            (0, o.anumber)(n),
            !(0 < e && e < 200))
          )
            throw new Error("only keccak-f1600 function is supported");
          ((this.state = new Uint8Array(200)),
            (this.state32 = (0, o.u32)(this.state)));
        }
        clone() {
          return this._cloneInto();
        }
        keccak() {
          ((0, o.swap32IfBE)(this.state32),
            m(this.state32, this.rounds),
            (0, o.swap32IfBE)(this.state32),
            (this.posOut = 0),
            (this.pos = 0));
        }
        update(e) {
          ((0, o.aexists)(this), (e = (0, o.toBytes)(e)), (0, o.abytes)(e));
          const { blockLen: t, state: n } = this,
            r = e.length;
          for (let o = 0; o < r; ) {
            const i = Math.min(t - this.pos, r - o);
            for (let t = 0; t < i; t++) n[this.pos++] ^= e[o++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          const { state: e, suffix: t, pos: n, blockLen: r } = this;
          ((e[n] ^= t),
            0 !== (128 & t) && n === r - 1 && this.keccak(),
            (e[r - 1] ^= 128),
            this.keccak());
        }
        writeInto(e) {
          ((0, o.aexists)(this, !1), (0, o.abytes)(e), this.finish());
          const t = this.state,
            { blockLen: n } = this;
          for (let r = 0, o = e.length; r < o; ) {
            this.posOut >= n && this.keccak();
            const i = Math.min(n - this.posOut, o - r);
            (e.set(t.subarray(this.posOut, this.posOut + i), r),
              (this.posOut += i),
              (r += i));
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return ((0, o.anumber)(e), this.xofInto(new Uint8Array(e)));
        }
        digestInto(e) {
          if (((0, o.aoutput)(e, this), this.finished))
            throw new Error("digest() was already called");
          return (this.writeInto(e), this.destroy(), e);
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          ((this.destroyed = !0), (0, o.clean)(this.state));
        }
        _cloneInto(e) {
          const {
            blockLen: t,
            suffix: n,
            outputLen: r,
            rounds: o,
            enableXOF: i,
          } = this;
          return (
            e || (e = new Keccak(t, n, r, i, o)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = o),
            (e.suffix = n),
            (e.outputLen = r),
            (e.enableXOF = i),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      t.Keccak = Keccak;
      const w = (e, t, n) => (0, o.createHasher)(() => new Keccak(t, e, n));
      ((t.sha3_224 = (() => w(6, 144, 28))()),
        (t.sha3_256 = (() => w(6, 136, 32))()),
        (t.sha3_384 = (() => w(6, 104, 48))()),
        (t.sha3_512 = (() => w(6, 72, 64))()),
        (t.keccak_224 = (() => w(1, 144, 28))()),
        (t.keccak_256 = (() => w(1, 136, 32))()),
        (t.keccak_384 = (() => w(1, 104, 48))()),
        (t.keccak_512 = (() => w(1, 72, 64))()));
      const b = (e, t, n) =>
        (0, o.createXOFer)(function (r) {
          return (
            void 0 === r && (r = {}),
            new Keccak(t, e, void 0 === r.dkLen ? n : r.dkLen, !0)
          );
        });
      ((t.shake128 = (() => b(31, 168, 16))()),
        (t.shake256 = (() => b(31, 136, 32))()));
    },
    298: function (e, t, n) {
      "use strict";
      var r = n(183),
        o = (e) => {
          const t = e.filter((e) => e.length);
          if (0 === t.length) return e.length ? e[0] : new Uint8Array();
          if (1 === t.length) return t[0];
          const n = t.reduce((e, t) => e + t.length, 0),
            r = new Uint8Array(n);
          let o = 0;
          return (
            t.forEach((e) => {
              (r.set(e, o), (o += e.length));
            }),
            r
          );
        },
        i = (e, t) => {
          if (e.length >= t) return e;
          const n = new Uint8Array(t).fill(0);
          return (n.set(e), n);
        },
        s = (e, t) => i(e.length <= t ? e : e.slice(0, t), t);
      function c(e, t, n) {
        const r =
          0 === n && e.length === t.length ? e : e.slice(n, n + t.length);
        return r.length === t.length && t.every((e, t) => e === r[t]);
      }
      function a(e, t) {
        return "fixedSize" in t ? t.fixedSize : t.getSizeFromValue(e);
      }
      function u(e) {
        return Object.freeze({
          ...e,
          encode: (t) => {
            const n = new Uint8Array(a(t, e));
            return (e.write(t, n, 0), n);
          },
        });
      }
      function f(e) {
        return Object.freeze({
          ...e,
          decode: function (t, n) {
            return (void 0 === n && (n = 0), e.read(t, n)[0]);
          },
        });
      }
      function d(e) {
        return Object.freeze({
          ...e,
          decode: function (t, n) {
            return (void 0 === n && (n = 0), e.read(t, n)[0]);
          },
          encode: (t) => {
            const n = new Uint8Array(a(t, e));
            return (e.write(t, n, 0), n);
          },
        });
      }
      function l(e) {
        return "fixedSize" in e && "number" === typeof e.fixedSize;
      }
      function h(e) {
        if (!l(e))
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH,
          );
      }
      function g(e) {
        return !l(e);
      }
      function E(e) {
        if (!g(e))
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH,
          );
      }
      function p(e, t) {
        if (l(e) !== l(t))
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH,
          );
        if (l(e) && l(t) && e.fixedSize !== t.fixedSize)
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH,
            { decoderFixedSize: t.fixedSize, encoderFixedSize: e.fixedSize },
          );
        if (!l(e) && !l(t) && e.maxSize !== t.maxSize)
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH,
            { decoderMaxSize: t.maxSize, encoderMaxSize: e.maxSize },
          );
        return {
          ...t,
          ...e,
          decode: t.decode,
          encode: e.encode,
          read: t.read,
          write: e.write,
        };
      }
      function S(e, t) {
        const n = (n, o, i) => {
          const s = e.encode(n);
          if (w(s, t) >= 0)
            throw new r.SolanaError(
              r.SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL,
              {
                encodedBytes: s,
                hexEncodedBytes: b(s),
                hexSentinel: b(t),
                sentinel: t,
              },
            );
          return (
            o.set(s, i),
            (i += s.length),
            o.set(t, i),
            (i += t.length),
            i
          );
        };
        return l(e)
          ? u({ ...e, fixedSize: e.fixedSize + t.length, write: n })
          : u({
              ...e,
              ...(null != e.maxSize ? { maxSize: e.maxSize + t.length } : {}),
              getSizeFromValue: (n) => e.getSizeFromValue(n) + t.length,
              write: n,
            });
      }
      function y(e, t) {
        const n = (n, o) => {
          const i = 0 === o ? n : n.slice(o),
            s = w(i, t);
          if (-1 === s)
            throw new r.SolanaError(
              r.SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES,
              {
                decodedBytes: i,
                hexDecodedBytes: b(i),
                hexSentinel: b(t),
                sentinel: t,
              },
            );
          const c = i.slice(0, s);
          return [e.decode(c), o + c.length + t.length];
        };
        return l(e)
          ? f({ ...e, fixedSize: e.fixedSize + t.length, read: n })
          : f({
              ...e,
              ...(null != e.maxSize ? { maxSize: e.maxSize + t.length } : {}),
              read: n,
            });
      }
      function m(e, t) {
        return p(S(e, t), y(e, t));
      }
      function w(e, t) {
        return e.findIndex((e, n, r) =>
          1 === t.length ? e === t[0] : c(r, t, n),
        );
      }
      function b(e) {
        return e.reduce((e, t) => e + t.toString(16).padStart(2, "0"), "");
      }
      function x(e, t, n) {
        if ((void 0 === n && (n = 0), t.length - n <= 0))
          throw new r.SolanaError(
            r.SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY,
            { codecDescription: e },
          );
      }
      function _(e, t, n, o) {
        void 0 === o && (o = 0);
        const i = n.length - o;
        if (i < t)
          throw new r.SolanaError(r.SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH, {
            bytesLength: i,
            codecDescription: e,
            expected: t,
          });
      }
      function v(e, t, n) {
        if (t < 0 || t > n)
          throw new r.SolanaError(r.SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE, {
            bytesLength: n,
            codecDescription: e,
            offset: t,
          });
      }
      function A(e, t) {
        var n, r;
        const o = (n, r, o) => {
          const i = e.encode(n);
          return ((o = t.write(i.length, r, o)), r.set(i, o), o + i.length);
        };
        if (l(t) && l(e))
          return u({ ...e, fixedSize: t.fixedSize + e.fixedSize, write: o });
        const i = l(t)
            ? t.fixedSize
            : null !== (n = t.maxSize) && void 0 !== n
              ? n
              : null,
          s = l(e)
            ? e.fixedSize
            : null !== (r = e.maxSize) && void 0 !== r
              ? r
              : null,
          c = null !== i && null !== s ? i + s : null;
        return u({
          ...e,
          ...(null !== c ? { maxSize: c } : {}),
          getSizeFromValue: (n) => {
            const r = a(n, e);
            return a(r, t) + r;
          },
          write: o,
        });
      }
      function I(e, t) {
        var n, r;
        const o = (n, r) => {
          const [o, i] = t.read(n, r),
            s = Number(o);
          return (
            (r = i),
            (r > 0 || n.length > s) && (n = n.slice(r, r + s)),
            _("addDecoderSizePrefix", s, n),
            [e.decode(n), r + s]
          );
        };
        if (l(t) && l(e))
          return f({ ...e, fixedSize: t.fixedSize + e.fixedSize, read: o });
        const i = l(t)
            ? t.fixedSize
            : null !== (n = t.maxSize) && void 0 !== n
              ? n
              : null,
          s = l(e)
            ? e.fixedSize
            : null !== (r = e.maxSize) && void 0 !== r
              ? r
              : null,
          c = null !== i && null !== s ? i + s : null;
        return f({ ...e, ...(null !== c ? { maxSize: c } : {}), read: o });
      }
      function B(e, t) {
        return p(A(e, t), I(e, t));
      }
      function D(e, t) {
        return u({
          fixedSize: t,
          write: (n, r, o) => {
            const i = e.encode(n),
              s = i.length > t ? i.slice(0, t) : i;
            return (r.set(s, o), o + t);
          },
        });
      }
      function C(e, t) {
        return f({
          fixedSize: t,
          read: (n, r) => {
            (_("fixCodecSize", t, n, r),
              (r > 0 || n.length > t) && (n = n.slice(r, r + t)),
              l(e) && (n = s(n, e.fixedSize)));
            const [o] = e.read(n, 0);
            return [o, r + t];
          },
        });
      }
      function O(e, t) {
        return p(D(e, t), C(e, t));
      }
      function z(e, t) {
        return u({
          ...e,
          write: (n, r, o) => {
            const i = (e) => R(e, r.length),
              s = t.preOffset
                ? t.preOffset({ bytes: r, preOffset: o, wrapBytes: i })
                : o;
            v("offsetEncoder", s, r.length);
            const c = e.write(n, r, s),
              a = t.postOffset
                ? t.postOffset({
                    bytes: r,
                    newPreOffset: s,
                    postOffset: c,
                    preOffset: o,
                    wrapBytes: i,
                  })
                : c;
            return (v("offsetEncoder", a, r.length), a);
          },
        });
      }
      function U(e, t) {
        return f({
          ...e,
          read: (n, r) => {
            const o = (e) => R(e, n.length),
              i = t.preOffset
                ? t.preOffset({ bytes: n, preOffset: r, wrapBytes: o })
                : r;
            v("offsetDecoder", i, n.length);
            const [s, c] = e.read(n, i),
              a = t.postOffset
                ? t.postOffset({
                    bytes: n,
                    newPreOffset: i,
                    postOffset: c,
                    preOffset: r,
                    wrapBytes: o,
                  })
                : c;
            return (v("offsetDecoder", a, n.length), [s, a]);
          },
        });
      }
      function L(e, t) {
        return p(z(e, t), U(e, t));
      }
      function R(e, t) {
        return 0 === t ? 0 : ((e % t) + t) % t;
      }
      function N(e, t) {
        if (l(e)) {
          const n = t(e.fixedSize);
          if (n < 0)
            throw new r.SolanaError(
              r.SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH,
              { bytesLength: n, codecDescription: "resizeEncoder" },
            );
          return u({ ...e, fixedSize: n });
        }
        return u({
          ...e,
          getSizeFromValue: (n) => {
            const o = t(e.getSizeFromValue(n));
            if (o < 0)
              throw new r.SolanaError(
                r.SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH,
                { bytesLength: o, codecDescription: "resizeEncoder" },
              );
            return o;
          },
        });
      }
      function H(e, t) {
        if (l(e)) {
          const n = t(e.fixedSize);
          if (n < 0)
            throw new r.SolanaError(
              r.SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH,
              { bytesLength: n, codecDescription: "resizeDecoder" },
            );
          return f({ ...e, fixedSize: n });
        }
        return e;
      }
      function V(e, t) {
        return p(N(e, t), H(e, t));
      }
      function P(e, t) {
        return z(
          N(e, (e) => e + t),
          {
            preOffset: (e) => {
              let { preOffset: n } = e;
              return n + t;
            },
          },
        );
      }
      function F(e, t) {
        return z(
          N(e, (e) => e + t),
          {
            postOffset: (e) => {
              let { postOffset: n } = e;
              return n + t;
            },
          },
        );
      }
      function T(e, t) {
        return U(
          H(e, (e) => e + t),
          {
            preOffset: (e) => {
              let { preOffset: n } = e;
              return n + t;
            },
          },
        );
      }
      function M(e, t) {
        return U(
          H(e, (e) => e + t),
          {
            postOffset: (e) => {
              let { postOffset: n } = e;
              return n + t;
            },
          },
        );
      }
      function k(e, t) {
        return p(P(e, t), T(e, t));
      }
      function j(e, t) {
        return p(F(e, t), M(e, t));
      }
      function G(e, t, n, r, o) {
        void 0 === o && (o = 0);
        while (n < --r) {
          const i = e[n];
          ((t[n + o] = e[r]), (t[r + o] = i), n++);
        }
        n === r && (t[n + o] = e[n]);
      }
      function X(e) {
        return (
          h(e),
          u({
            ...e,
            write: (t, n, r) => {
              const o = e.write(t, n, r);
              return (G(n, n, r, r + e.fixedSize), o);
            },
          })
        );
      }
      function K(e) {
        return (
          h(e),
          f({
            ...e,
            read: (t, n) => {
              const r = t.slice();
              return (G(t, r, n, n + e.fixedSize), e.read(r, n));
            },
          })
        );
      }
      function Z(e) {
        return p(X(e), K(e));
      }
      function W(e, t) {
        return u({
          ...(g(e)
            ? { ...e, getSizeFromValue: (n) => e.getSizeFromValue(t(n)) }
            : e),
          write: (n, r, o) => e.write(t(n), r, o),
        });
      }
      function q(e, t) {
        return f({
          ...e,
          read: (n, r) => {
            const [o, i] = e.read(n, r);
            return [t(o, n, r), i];
          },
        });
      }
      function Y(e, t, n) {
        return d({ ...W(e, t), read: n ? q(e, n).read : e.read });
      }
      ((t.addCodecSentinel = m),
        (t.addCodecSizePrefix = B),
        (t.addDecoderSentinel = y),
        (t.addDecoderSizePrefix = I),
        (t.addEncoderSentinel = S),
        (t.addEncoderSizePrefix = A),
        (t.assertByteArrayHasEnoughBytesForCodec = _),
        (t.assertByteArrayIsNotEmptyForCodec = x),
        (t.assertByteArrayOffsetIsNotOutOfRange = v),
        (t.assertIsFixedSize = h),
        (t.assertIsVariableSize = E),
        (t.combineCodec = p),
        (t.containsBytes = c),
        (t.createCodec = d),
        (t.createDecoder = f),
        (t.createEncoder = u),
        (t.fixBytes = s),
        (t.fixCodecSize = O),
        (t.fixDecoderSize = C),
        (t.fixEncoderSize = D),
        (t.getEncodedSize = a),
        (t.isFixedSize = l),
        (t.isVariableSize = g),
        (t.mergeBytes = o),
        (t.offsetCodec = L),
        (t.offsetDecoder = U),
        (t.offsetEncoder = z),
        (t.padBytes = i),
        (t.padLeftCodec = k),
        (t.padLeftDecoder = T),
        (t.padLeftEncoder = P),
        (t.padRightCodec = j),
        (t.padRightDecoder = M),
        (t.padRightEncoder = F),
        (t.resizeCodec = V),
        (t.resizeDecoder = H),
        (t.resizeEncoder = N),
        (t.reverseCodec = Z),
        (t.reverseDecoder = K),
        (t.reverseEncoder = X),
        (t.transformCodec = Y),
        (t.transformDecoder = q),
        (t.transformEncoder = W));
    },
    378: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha224 = t.SHA224 = t.sha256 = t.SHA256 = void 0));
      const r = n(389);
      ((t.SHA256 = r.SHA256),
        (t.sha256 = r.sha256),
        (t.SHA224 = r.SHA224),
        (t.sha224 = r.sha224));
    },
    379: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hmac = t.HMAC = void 0));
      const r = n(130);
      class HMAC extends r.Hash {
        constructor(e, t) {
          (super(),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, r.ahash)(e));
          const n = (0, r.toBytes)(t);
          if (
            ((this.iHash = e.create()), "function" !== typeof this.iHash.update)
          )
            throw new Error(
              "Expected instance of class which extends utils.Hash",
            );
          ((this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen));
          const o = this.blockLen,
            i = new Uint8Array(o);
          i.set(n.length > o ? e.create().update(n).digest() : n);
          for (let r = 0; r < i.length; r++) i[r] ^= 54;
          (this.iHash.update(i), (this.oHash = e.create()));
          for (let r = 0; r < i.length; r++) i[r] ^= 106;
          (this.oHash.update(i), (0, r.clean)(i));
        }
        update(e) {
          return ((0, r.aexists)(this), this.iHash.update(e), this);
        }
        digestInto(e) {
          ((0, r.aexists)(this),
            (0, r.abytes)(e, this.outputLen),
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
            destroyed: o,
            blockLen: i,
            outputLen: s,
          } = this;
          return (
            (e = e),
            (e.finished = r),
            (e.destroyed = o),
            (e.blockLen = i),
            (e.outputLen = s),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = n._cloneInto(e.iHash)),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
        destroy() {
          ((this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy());
        }
      }
      t.HMAC = HMAC;
      const o = (e, t, n) => new HMAC(e, t).update(n).digest();
      ((t.hmac = o), (t.hmac.create = (e, t) => new HMAC(e, t)));
    },
    380: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha512_256 =
          t.SHA512_256 =
          t.sha512_224 =
          t.SHA512_224 =
          t.sha384 =
          t.SHA384 =
          t.sha512 =
          t.SHA512 =
            void 0));
      const r = n(389);
      ((t.SHA512 = r.SHA512),
        (t.sha512 = r.sha512),
        (t.SHA384 = r.SHA384),
        (t.sha384 = r.sha384),
        (t.SHA512_224 = r.SHA512_224),
        (t.sha512_224 = r.sha512_224),
        (t.SHA512_256 = r.SHA512_256),
        (t.sha512_256 = r.sha512_256));
    },
    383: function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports["default"] = e.exports),
          n(t)
        );
      }
      ((e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    389: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha512_224 =
          t.sha512_256 =
          t.sha384 =
          t.sha512 =
          t.sha224 =
          t.sha256 =
          t.SHA512_256 =
          t.SHA512_224 =
          t.SHA384 =
          t.SHA512 =
          t.SHA224 =
          t.SHA256 =
            void 0));
      const r = n(825),
        o = n(395),
        i = n(130),
        s = Uint32Array.from([
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
        c = new Uint32Array(64);
      class SHA256 extends r.HashMD {
        constructor(e) {
          (void 0 === e && (e = 32),
            super(64, e, 8, !1),
            (this.A = 0 | r.SHA256_IV[0]),
            (this.B = 0 | r.SHA256_IV[1]),
            (this.C = 0 | r.SHA256_IV[2]),
            (this.D = 0 | r.SHA256_IV[3]),
            (this.E = 0 | r.SHA256_IV[4]),
            (this.F = 0 | r.SHA256_IV[5]),
            (this.G = 0 | r.SHA256_IV[6]),
            (this.H = 0 | r.SHA256_IV[7]));
        }
        get() {
          const { A: e, B: t, C: n, D: r, E: o, F: i, G: s, H: c } = this;
          return [e, t, n, r, o, i, s, c];
        }
        set(e, t, n, r, o, i, s, c) {
          ((this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | n),
            (this.D = 0 | r),
            (this.E = 0 | o),
            (this.F = 0 | i),
            (this.G = 0 | s),
            (this.H = 0 | c));
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) c[r] = e.getUint32(t, !1);
          for (let r = 16; r < 64; r++) {
            const e = c[r - 15],
              t = c[r - 2],
              n = (0, i.rotr)(e, 7) ^ (0, i.rotr)(e, 18) ^ (e >>> 3),
              o = (0, i.rotr)(t, 17) ^ (0, i.rotr)(t, 19) ^ (t >>> 10);
            c[r] = (o + c[r - 7] + n + c[r - 16]) | 0;
          }
          let { A: n, B: o, C: a, D: u, E: f, F: d, G: l, H: h } = this;
          for (let g = 0; g < 64; g++) {
            const e =
                (0, i.rotr)(f, 6) ^ (0, i.rotr)(f, 11) ^ (0, i.rotr)(f, 25),
              t = (h + e + (0, r.Chi)(f, d, l) + s[g] + c[g]) | 0,
              E = (0, i.rotr)(n, 2) ^ (0, i.rotr)(n, 13) ^ (0, i.rotr)(n, 22),
              p = (E + (0, r.Maj)(n, o, a)) | 0;
            ((h = l),
              (l = d),
              (d = f),
              (f = (u + t) | 0),
              (u = a),
              (a = o),
              (o = n),
              (n = (t + p) | 0));
          }
          ((n = (n + this.A) | 0),
            (o = (o + this.B) | 0),
            (a = (a + this.C) | 0),
            (u = (u + this.D) | 0),
            (f = (f + this.E) | 0),
            (d = (d + this.F) | 0),
            (l = (l + this.G) | 0),
            (h = (h + this.H) | 0),
            this.set(n, o, a, u, f, d, l, h));
        }
        roundClean() {
          (0, i.clean)(c);
        }
        destroy() {
          (this.set(0, 0, 0, 0, 0, 0, 0, 0), (0, i.clean)(this.buffer));
        }
      }
      t.SHA256 = SHA256;
      class SHA224 extends SHA256 {
        constructor() {
          (super(28),
            (this.A = 0 | r.SHA224_IV[0]),
            (this.B = 0 | r.SHA224_IV[1]),
            (this.C = 0 | r.SHA224_IV[2]),
            (this.D = 0 | r.SHA224_IV[3]),
            (this.E = 0 | r.SHA224_IV[4]),
            (this.F = 0 | r.SHA224_IV[5]),
            (this.G = 0 | r.SHA224_IV[6]),
            (this.H = 0 | r.SHA224_IV[7]));
        }
      }
      t.SHA224 = SHA224;
      const a = (() =>
          o.split(
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
          ))(),
        u = (() => a[0])(),
        f = (() => a[1])(),
        d = new Uint32Array(80),
        l = new Uint32Array(80);
      class SHA512 extends r.HashMD {
        constructor(e) {
          (void 0 === e && (e = 64),
            super(128, e, 16, !1),
            (this.Ah = 0 | r.SHA512_IV[0]),
            (this.Al = 0 | r.SHA512_IV[1]),
            (this.Bh = 0 | r.SHA512_IV[2]),
            (this.Bl = 0 | r.SHA512_IV[3]),
            (this.Ch = 0 | r.SHA512_IV[4]),
            (this.Cl = 0 | r.SHA512_IV[5]),
            (this.Dh = 0 | r.SHA512_IV[6]),
            (this.Dl = 0 | r.SHA512_IV[7]),
            (this.Eh = 0 | r.SHA512_IV[8]),
            (this.El = 0 | r.SHA512_IV[9]),
            (this.Fh = 0 | r.SHA512_IV[10]),
            (this.Fl = 0 | r.SHA512_IV[11]),
            (this.Gh = 0 | r.SHA512_IV[12]),
            (this.Gl = 0 | r.SHA512_IV[13]),
            (this.Hh = 0 | r.SHA512_IV[14]),
            (this.Hl = 0 | r.SHA512_IV[15]));
        }
        get() {
          const {
            Ah: e,
            Al: t,
            Bh: n,
            Bl: r,
            Ch: o,
            Cl: i,
            Dh: s,
            Dl: c,
            Eh: a,
            El: u,
            Fh: f,
            Fl: d,
            Gh: l,
            Gl: h,
            Hh: g,
            Hl: E,
          } = this;
          return [e, t, n, r, o, i, s, c, a, u, f, d, l, h, g, E];
        }
        set(e, t, n, r, o, i, s, c, a, u, f, d, l, h, g, E) {
          ((this.Ah = 0 | e),
            (this.Al = 0 | t),
            (this.Bh = 0 | n),
            (this.Bl = 0 | r),
            (this.Ch = 0 | o),
            (this.Cl = 0 | i),
            (this.Dh = 0 | s),
            (this.Dl = 0 | c),
            (this.Eh = 0 | a),
            (this.El = 0 | u),
            (this.Fh = 0 | f),
            (this.Fl = 0 | d),
            (this.Gh = 0 | l),
            (this.Gl = 0 | h),
            (this.Hh = 0 | g),
            (this.Hl = 0 | E));
        }
        process(e, t) {
          for (let o = 0; o < 16; o++, t += 4)
            ((d[o] = e.getUint32(t)), (l[o] = e.getUint32((t += 4))));
          for (let u = 16; u < 80; u++) {
            const e = 0 | d[u - 15],
              t = 0 | l[u - 15],
              n = o.rotrSH(e, t, 1) ^ o.rotrSH(e, t, 8) ^ o.shrSH(e, t, 7),
              r = o.rotrSL(e, t, 1) ^ o.rotrSL(e, t, 8) ^ o.shrSL(e, t, 7),
              i = 0 | d[u - 2],
              s = 0 | l[u - 2],
              c = o.rotrSH(i, s, 19) ^ o.rotrBH(i, s, 61) ^ o.shrSH(i, s, 6),
              a = o.rotrSL(i, s, 19) ^ o.rotrBL(i, s, 61) ^ o.shrSL(i, s, 6),
              f = o.add4L(r, a, l[u - 7], l[u - 16]),
              h = o.add4H(f, n, c, d[u - 7], d[u - 16]);
            ((d[u] = 0 | h), (l[u] = 0 | f));
          }
          let {
            Ah: n,
            Al: r,
            Bh: i,
            Bl: s,
            Ch: c,
            Cl: a,
            Dh: h,
            Dl: g,
            Eh: E,
            El: p,
            Fh: S,
            Fl: y,
            Gh: m,
            Gl: w,
            Hh: b,
            Hl: x,
          } = this;
          for (let _ = 0; _ < 80; _++) {
            const e =
                o.rotrSH(E, p, 14) ^ o.rotrSH(E, p, 18) ^ o.rotrBH(E, p, 41),
              t = o.rotrSL(E, p, 14) ^ o.rotrSL(E, p, 18) ^ o.rotrBL(E, p, 41),
              v = (E & S) ^ (~E & m),
              A = (p & y) ^ (~p & w),
              I = o.add5L(x, t, A, f[_], l[_]),
              B = o.add5H(I, b, e, v, u[_], d[_]),
              D = 0 | I,
              C = o.rotrSH(n, r, 28) ^ o.rotrBH(n, r, 34) ^ o.rotrBH(n, r, 39),
              O = o.rotrSL(n, r, 28) ^ o.rotrBL(n, r, 34) ^ o.rotrBL(n, r, 39),
              z = (n & i) ^ (n & c) ^ (i & c),
              U = (r & s) ^ (r & a) ^ (s & a);
            ((b = 0 | m),
              (x = 0 | w),
              (m = 0 | S),
              (w = 0 | y),
              (S = 0 | E),
              (y = 0 | p),
              ({ h: E, l: p } = o.add(0 | h, 0 | g, 0 | B, 0 | D)),
              (h = 0 | c),
              (g = 0 | a),
              (c = 0 | i),
              (a = 0 | s),
              (i = 0 | n),
              (s = 0 | r));
            const L = o.add3L(D, O, U);
            ((n = o.add3H(L, B, C, z)), (r = 0 | L));
          }
          (({ h: n, l: r } = o.add(0 | this.Ah, 0 | this.Al, 0 | n, 0 | r)),
            ({ h: i, l: s } = o.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | s)),
            ({ h: c, l: a } = o.add(0 | this.Ch, 0 | this.Cl, 0 | c, 0 | a)),
            ({ h: h, l: g } = o.add(0 | this.Dh, 0 | this.Dl, 0 | h, 0 | g)),
            ({ h: E, l: p } = o.add(0 | this.Eh, 0 | this.El, 0 | E, 0 | p)),
            ({ h: S, l: y } = o.add(0 | this.Fh, 0 | this.Fl, 0 | S, 0 | y)),
            ({ h: m, l: w } = o.add(0 | this.Gh, 0 | this.Gl, 0 | m, 0 | w)),
            ({ h: b, l: x } = o.add(0 | this.Hh, 0 | this.Hl, 0 | b, 0 | x)),
            this.set(n, r, i, s, c, a, h, g, E, p, S, y, m, w, b, x));
        }
        roundClean() {
          (0, i.clean)(d, l);
        }
        destroy() {
          ((0, i.clean)(this.buffer),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      t.SHA512 = SHA512;
      class SHA384 extends SHA512 {
        constructor() {
          (super(48),
            (this.Ah = 0 | r.SHA384_IV[0]),
            (this.Al = 0 | r.SHA384_IV[1]),
            (this.Bh = 0 | r.SHA384_IV[2]),
            (this.Bl = 0 | r.SHA384_IV[3]),
            (this.Ch = 0 | r.SHA384_IV[4]),
            (this.Cl = 0 | r.SHA384_IV[5]),
            (this.Dh = 0 | r.SHA384_IV[6]),
            (this.Dl = 0 | r.SHA384_IV[7]),
            (this.Eh = 0 | r.SHA384_IV[8]),
            (this.El = 0 | r.SHA384_IV[9]),
            (this.Fh = 0 | r.SHA384_IV[10]),
            (this.Fl = 0 | r.SHA384_IV[11]),
            (this.Gh = 0 | r.SHA384_IV[12]),
            (this.Gl = 0 | r.SHA384_IV[13]),
            (this.Hh = 0 | r.SHA384_IV[14]),
            (this.Hl = 0 | r.SHA384_IV[15]));
        }
      }
      t.SHA384 = SHA384;
      const h = Uint32Array.from([
          2352822216, 424955298, 1944164710, 2312950998, 502970286, 855612546,
          1738396948, 1479516111, 258812777, 2077511080, 2011393907, 79989058,
          1067287976, 1780299464, 286451373, 2446758561,
        ]),
        g = Uint32Array.from([
          573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857,
          2520282905, 1497426621, 2519219938, 2827943907, 3193839141,
          1401305490, 721525244, 746961066, 246885852, 2177182882,
        ]);
      class SHA512_224 extends SHA512 {
        constructor() {
          (super(28),
            (this.Ah = 0 | h[0]),
            (this.Al = 0 | h[1]),
            (this.Bh = 0 | h[2]),
            (this.Bl = 0 | h[3]),
            (this.Ch = 0 | h[4]),
            (this.Cl = 0 | h[5]),
            (this.Dh = 0 | h[6]),
            (this.Dl = 0 | h[7]),
            (this.Eh = 0 | h[8]),
            (this.El = 0 | h[9]),
            (this.Fh = 0 | h[10]),
            (this.Fl = 0 | h[11]),
            (this.Gh = 0 | h[12]),
            (this.Gl = 0 | h[13]),
            (this.Hh = 0 | h[14]),
            (this.Hl = 0 | h[15]));
        }
      }
      t.SHA512_224 = SHA512_224;
      class SHA512_256 extends SHA512 {
        constructor() {
          (super(32),
            (this.Ah = 0 | g[0]),
            (this.Al = 0 | g[1]),
            (this.Bh = 0 | g[2]),
            (this.Bl = 0 | g[3]),
            (this.Ch = 0 | g[4]),
            (this.Cl = 0 | g[5]),
            (this.Dh = 0 | g[6]),
            (this.Dl = 0 | g[7]),
            (this.Eh = 0 | g[8]),
            (this.El = 0 | g[9]),
            (this.Fh = 0 | g[10]),
            (this.Fl = 0 | g[11]),
            (this.Gh = 0 | g[12]),
            (this.Gl = 0 | g[13]),
            (this.Hh = 0 | g[14]),
            (this.Hl = 0 | g[15]));
        }
      }
      ((t.SHA512_256 = SHA512_256),
        (t.sha256 = (0, i.createHasher)(() => new SHA256())),
        (t.sha224 = (0, i.createHasher)(() => new SHA224())),
        (t.sha512 = (0, i.createHasher)(() => new SHA512())),
        (t.sha384 = (0, i.createHasher)(() => new SHA384())),
        (t.sha512_256 = (0, i.createHasher)(() => new SHA512_256())),
        (t.sha512_224 = (0, i.createHasher)(() => new SHA512_224())));
    },
    395: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.toBig =
          t.shrSL =
          t.shrSH =
          t.rotrSL =
          t.rotrSH =
          t.rotrBL =
          t.rotrBH =
          t.rotr32L =
          t.rotr32H =
          t.rotlSL =
          t.rotlSH =
          t.rotlBL =
          t.rotlBH =
          t.add5L =
          t.add5H =
          t.add4L =
          t.add4H =
          t.add3L =
          t.add3H =
            void 0),
        (t.add = w),
        (t.fromBig = i),
        (t.split = s));
      const r = BigInt(2 ** 32 - 1),
        o = BigInt(32);
      function i(e, t) {
        return (
          void 0 === t && (t = !1),
          t
            ? { h: Number(e & r), l: Number((e >> o) & r) }
            : { h: 0 | Number((e >> o) & r), l: 0 | Number(e & r) }
        );
      }
      function s(e, t) {
        void 0 === t && (t = !1);
        const n = e.length;
        let r = new Uint32Array(n),
          o = new Uint32Array(n);
        for (let s = 0; s < n; s++) {
          const { h: n, l: c } = i(e[s], t);
          [r[s], o[s]] = [n, c];
        }
        return [r, o];
      }
      const c = (e, t) => (BigInt(e >>> 0) << o) | BigInt(t >>> 0);
      t.toBig = c;
      const a = (e, t, n) => e >>> n;
      t.shrSH = a;
      const u = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.shrSL = u;
      const f = (e, t, n) => (e >>> n) | (t << (32 - n));
      t.rotrSH = f;
      const d = (e, t, n) => (e << (32 - n)) | (t >>> n);
      t.rotrSL = d;
      const l = (e, t, n) => (e << (64 - n)) | (t >>> (n - 32));
      t.rotrBH = l;
      const h = (e, t, n) => (e >>> (n - 32)) | (t << (64 - n));
      t.rotrBL = h;
      const g = (e, t) => t;
      t.rotr32H = g;
      const E = (e, t) => e;
      t.rotr32L = E;
      const p = (e, t, n) => (e << n) | (t >>> (32 - n));
      t.rotlSH = p;
      const S = (e, t, n) => (t << n) | (e >>> (32 - n));
      t.rotlSL = S;
      const y = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n));
      t.rotlBH = y;
      const m = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n));
      function w(e, t, n, r) {
        const o = (t >>> 0) + (r >>> 0);
        return { h: (e + n + ((o / 2 ** 32) | 0)) | 0, l: 0 | o };
      }
      t.rotlBL = m;
      const b = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0);
      t.add3L = b;
      const x = (e, t, n, r) => (t + n + r + ((e / 2 ** 32) | 0)) | 0;
      t.add3H = x;
      const _ = (e, t, n, r) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0);
      t.add4L = _;
      const v = (e, t, n, r, o) => (t + n + r + o + ((e / 2 ** 32) | 0)) | 0;
      t.add4H = v;
      const A = (e, t, n, r, o) =>
        (e >>> 0) + (t >>> 0) + (n >>> 0) + (r >>> 0) + (o >>> 0);
      t.add5L = A;
      const I = (e, t, n, r, o, i) =>
        (t + n + r + o + i + ((e / 2 ** 32) | 0)) | 0;
      t.add5H = I;
      const B = {
        fromBig: i,
        split: s,
        toBig: c,
        shrSH: a,
        shrSL: u,
        rotrSH: f,
        rotrSL: d,
        rotrBH: l,
        rotrBL: h,
        rotr32H: g,
        rotr32L: E,
        rotlSH: p,
        rotlSL: S,
        rotlBH: y,
        rotlBL: m,
        add: w,
        add3L: b,
        add3H: x,
        add4L: _,
        add4H: v,
        add5H: I,
        add5L: A,
      };
      t.default = B;
    },
    597: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Signature =
          t.RistrettoPoint =
          t.Point =
          t.ExtendedPoint =
          t.CURVE =
            void 0),
        (t.bytesToHex = I),
        (t.curve25519 = void 0),
        (t.getPublicKey = te),
        (t.getSharedSecret = ue),
        (t.hexToBytes = C),
        (t.sign = re),
        (t.utils = t.sync = void 0),
        (t.verify = ce));
      var r = o(n(1783));
      function o(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (o = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var o,
            i,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((o = t ? r : n)) {
            if (o.has(e)) return o.get(e);
            o.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((i =
                (o = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (i.get || i.set)
                ? o(s, n, i)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      const i = BigInt(0),
        s = BigInt(1),
        c = BigInt(2),
        a = BigInt(8),
        u = BigInt(
          "7237005577332262213973186563042994240857116359379907606001950938285454250989",
        ),
        f = (t.CURVE = Object.freeze({
          a: BigInt(-1),
          d: BigInt(
            "37095705934669439343138083508754565189542113879843219016388785533085940283555",
          ),
          P: BigInt(
            "57896044618658097711785492504343953926634992332820282019728792003956564819949",
          ),
          l: u,
          n: u,
          h: BigInt(8),
          Gx: BigInt(
            "15112221349535400772501151409588531511454012693041857206046113283949847762202",
          ),
          Gy: BigInt(
            "46316835694926478169428394003475163141307993866256225615783033603165251855960",
          ),
        })),
        d = BigInt(
          "0x10000000000000000000000000000000000000000000000000000000000000000",
        ),
        l = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752",
        ),
        h =
          (BigInt(
            "6853475219497561581579357271197624642482790079785650197046958215289687604742",
          ),
          BigInt(
            "25063068953384623474111414158702152701244531502492656460079210482610430750235",
          )),
        g = BigInt(
          "54469307008909316920995813868745141605393597292927456921205312896311721017578",
        ),
        E = BigInt(
          "1159843021668779879193775521855586647937357759715417654439879720876111806838",
        ),
        p = BigInt(
          "40440834346308536858101042469323190826248399146238708352240133220865137265952",
        );
      class ExtendedPoint {
        constructor(e, t, n, r) {
          ((this.x = e), (this.y = t), (this.z = n), (this.t = r));
        }
        static fromAffine(e) {
          if (!(e instanceof Point))
            throw new TypeError("ExtendedPoint#fromAffine: expected Point");
          return e.equals(Point.ZERO)
            ? ExtendedPoint.ZERO
            : new ExtendedPoint(e.x, e.y, s, H(e.x * e.y));
        }
        static toAffineBatch(e) {
          const t = P(e.map((e) => e.z));
          return e.map((e, n) => e.toAffine(t[n]));
        }
        static normalizeZ(e) {
          return this.toAffineBatch(e).map(this.fromAffine);
        }
        equals(e) {
          y(e);
          const { x: t, y: n, z: r } = this,
            { x: o, y: i, z: s } = e,
            c = H(t * s),
            a = H(o * r),
            u = H(n * s),
            f = H(i * r);
          return c === a && u === f;
        }
        negate() {
          return new ExtendedPoint(H(-this.x), this.y, this.z, H(-this.t));
        }
        double() {
          const { x: e, y: t, z: n } = this,
            { a: r } = f,
            o = H,
            i = o(e * e),
            s = o(t * t),
            a = o(c * o(n * n)),
            u = o(r * i),
            d = e + t,
            l = o(o(d * d) - i - s),
            h = u + s,
            g = h - a,
            E = u - s,
            p = o(l * g),
            S = o(h * E),
            y = o(l * E),
            m = o(g * h);
          return new ExtendedPoint(p, S, m, y);
        }
        add(e) {
          const { x: t, y: n, z: r, t: o } = this;
          y(e);
          const { x: i, y: s, z: c, t: a } = e,
            { a: u, d: d } = f,
            l = H,
            h = l(t * i),
            g = l(n * s),
            E = l(o * d * a),
            p = l(r * c),
            S = l((t + n) * (i + s) - h - g),
            m = l(p - E),
            w = l(p + E),
            b = l(g - u * h),
            x = l(S * m),
            _ = l(w * b),
            v = l(S * b),
            A = l(m * w);
          return new ExtendedPoint(x, _, A, v);
        }
        subtract(e) {
          return this.add(e.negate());
        }
        precomputeWindow(e) {
          const t = 1 + 256 / e,
            n = [];
          let r = this,
            o = r;
          for (let i = 0; i < t; i++) {
            ((o = r), n.push(o));
            for (let t = 1; t < 2 ** (e - 1); t++) ((o = o.add(r)), n.push(o));
            r = o.double();
          }
          return n;
        }
        wNAF(e, t) {
          !t && this.equals(ExtendedPoint.BASE) && (t = Point.BASE);
          const n = (t && t._WINDOW_SIZE) || 1;
          if (256 % n)
            throw new Error(
              "Point#wNAF: Invalid precomputation window, must be power of 2",
            );
          let r = t && b.get(t);
          r ||
            ((r = this.precomputeWindow(n)),
            t && 1 !== n && ((r = ExtendedPoint.normalizeZ(r)), b.set(t, r)));
          let o = ExtendedPoint.ZERO,
            i = ExtendedPoint.BASE;
          const c = 1 + 256 / n,
            a = 2 ** (n - 1),
            u = BigInt(2 ** n - 1),
            f = 2 ** n,
            d = BigInt(n);
          for (let l = 0; l < c; l++) {
            const t = l * a;
            let n = Number(e & u);
            ((e >>= d), n > a && ((n -= f), (e += s)));
            const c = t,
              h = t + Math.abs(n) - 1,
              g = l % 2 !== 0,
              E = n < 0;
            0 === n ? (i = i.add(S(g, r[c]))) : (o = o.add(S(E, r[h])));
          }
          return ExtendedPoint.normalizeZ([o, i])[0];
        }
        multiply(e, t) {
          return this.wNAF(K(e, f.l), t);
        }
        multiplyUnsafe(e) {
          let t = K(e, f.l, !1);
          const n = ExtendedPoint.BASE,
            r = ExtendedPoint.ZERO;
          if (t === i) return r;
          if (this.equals(r) || t === s) return this;
          if (this.equals(n)) return this.wNAF(t);
          let o = r,
            c = this;
          while (t > i) (t & s && (o = o.add(c)), (c = c.double()), (t >>= s));
          return o;
        }
        isSmallOrder() {
          return this.multiplyUnsafe(f.h).equals(ExtendedPoint.ZERO);
        }
        isTorsionFree() {
          let e = this.multiplyUnsafe(f.l / c).double();
          return (f.l % c && (e = e.add(this)), e.equals(ExtendedPoint.ZERO));
        }
        toAffine(e) {
          const { x: t, y: n, z: r } = this,
            o = this.equals(ExtendedPoint.ZERO);
          null == e && (e = o ? a : V(r));
          const i = H(t * e),
            c = H(n * e),
            u = H(r * e);
          if (o) return Point.ZERO;
          if (u !== s) throw new Error("invZ was invalid");
          return new Point(i, c);
        }
        fromRistrettoBytes() {
          w();
        }
        toRistrettoBytes() {
          w();
        }
        fromRistrettoHash() {
          w();
        }
      }
      function S(e, t) {
        const n = t.negate();
        return e ? n : t;
      }
      function y(e) {
        if (!(e instanceof ExtendedPoint))
          throw new TypeError("ExtendedPoint expected");
      }
      function m(e) {
        if (!(e instanceof RistrettoPoint))
          throw new TypeError("RistrettoPoint expected");
      }
      function w() {
        throw new Error("Legacy method: switch to RistrettoPoint");
      }
      ((t.ExtendedPoint = ExtendedPoint),
        (ExtendedPoint.BASE = new ExtendedPoint(f.Gx, f.Gy, s, H(f.Gx * f.Gy))),
        (ExtendedPoint.ZERO = new ExtendedPoint(i, s, s, i)));
      class RistrettoPoint {
        constructor(e) {
          this.ep = e;
        }
        static calcElligatorRistrettoMap(e) {
          const { d: t } = f,
            n = H(l * e * e),
            r = H((n + s) * E);
          let o = BigInt(-1);
          const i = H((o - t * n) * H(n + t));
          let { isValid: c, value: a } = M(r, i),
            u = H(a * e);
          (U(u) || (u = H(-u)), c || (a = u), c || (o = n));
          const d = H(o * (n - s) * p - i),
            g = a * a,
            S = H((a + a) * i),
            y = H(d * h),
            m = H(s - g),
            w = H(s + g);
          return new ExtendedPoint(H(S * w), H(m * y), H(y * w), H(S * m));
        }
        static hashToCurve(e) {
          e = X(e, 64);
          const t = N(e.slice(0, 32)),
            n = this.calcElligatorRistrettoMap(t),
            r = N(e.slice(32, 64)),
            o = this.calcElligatorRistrettoMap(r);
          return new RistrettoPoint(n.add(o));
        }
        static fromHex(e) {
          e = X(e, 32);
          const { a: t, d: n } = f,
            r =
              "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint",
            o = N(e);
          if (!G(z(o), e) || U(o)) throw new Error(r);
          const c = H(o * o),
            a = H(s + t * c),
            u = H(s - t * c),
            d = H(a * a),
            l = H(u * u),
            h = H(t * n * d - l),
            { isValid: g, value: E } = k(H(h * l)),
            p = H(E * u),
            S = H(E * p * h);
          let y = H((o + o) * p);
          U(y) && (y = H(-y));
          const m = H(a * S),
            w = H(y * m);
          if (!g || U(w) || m === i) throw new Error(r);
          return new RistrettoPoint(new ExtendedPoint(y, m, s, w));
        }
        toRawBytes() {
          let { x: e, y: t, z: n, t: r } = this.ep;
          const o = H(H(n + t) * H(n - t)),
            i = H(e * t),
            s = H(i * i),
            { value: c } = k(H(o * s)),
            a = H(c * o),
            u = H(c * i),
            f = H(a * u * r);
          let d;
          if (U(r * f)) {
            let n = H(t * l),
              r = H(e * l);
            ((e = n), (t = r), (d = H(a * g)));
          } else d = u;
          U(e * f) && (t = H(-t));
          let h = H((n - t) * d);
          return (U(h) && (h = H(-h)), z(h));
        }
        toHex() {
          return I(this.toRawBytes());
        }
        toString() {
          return this.toHex();
        }
        equals(e) {
          m(e);
          const t = this.ep,
            n = e.ep,
            r = H(t.x * n.y) === H(t.y * n.x),
            o = H(t.y * n.y) === H(t.x * n.x);
          return r || o;
        }
        add(e) {
          return (m(e), new RistrettoPoint(this.ep.add(e.ep)));
        }
        subtract(e) {
          return (m(e), new RistrettoPoint(this.ep.subtract(e.ep)));
        }
        multiply(e) {
          return new RistrettoPoint(this.ep.multiply(e));
        }
        multiplyUnsafe(e) {
          return new RistrettoPoint(this.ep.multiplyUnsafe(e));
        }
      }
      ((t.RistrettoPoint = RistrettoPoint),
        (RistrettoPoint.BASE = new RistrettoPoint(ExtendedPoint.BASE)),
        (RistrettoPoint.ZERO = new RistrettoPoint(ExtendedPoint.ZERO)));
      const b = new WeakMap();
      class Point {
        constructor(e, t) {
          ((this.x = e), (this.y = t));
        }
        _setWindowSize(e) {
          ((this._WINDOW_SIZE = e), b.delete(this));
        }
        static fromHex(e, t) {
          void 0 === t && (t = !0);
          const { d: n, P: r } = f;
          e = X(e, 32);
          const o = e.slice();
          o[31] = -129 & e[31];
          const i = L(o);
          if (t && i >= r) throw new Error("Expected 0 < hex < P");
          if (!t && i >= d) throw new Error("Expected 0 < hex < 2**256");
          const c = H(i * i),
            a = H(c - s),
            u = H(n * c + s);
          let { isValid: l, value: h } = M(a, u);
          if (!l) throw new Error("Point.fromHex: invalid y coordinate");
          const g = (h & s) === s,
            E = 0 !== (128 & e[31]);
          return (E !== g && (h = H(-h)), new Point(h, i));
        }
        static async fromPrivateKey(e) {
          return (await Q(e)).point;
        }
        toRawBytes() {
          const e = z(this.y);
          return ((e[31] |= this.x & s ? 128 : 0), e);
        }
        toHex() {
          return I(this.toRawBytes());
        }
        toX25519() {
          const { y: e } = this,
            t = H((s + e) * V(s - e));
          return z(t);
        }
        isTorsionFree() {
          return ExtendedPoint.fromAffine(this).isTorsionFree();
        }
        equals(e) {
          return this.x === e.x && this.y === e.y;
        }
        negate() {
          return new Point(H(-this.x), this.y);
        }
        add(e) {
          return ExtendedPoint.fromAffine(this)
            .add(ExtendedPoint.fromAffine(e))
            .toAffine();
        }
        subtract(e) {
          return this.add(e.negate());
        }
        multiply(e) {
          return ExtendedPoint.fromAffine(this).multiply(e, this).toAffine();
        }
      }
      ((t.Point = Point),
        (Point.BASE = new Point(f.Gx, f.Gy)),
        (Point.ZERO = new Point(i, s)));
      class Signature {
        constructor(e, t) {
          ((this.r = e), (this.s = t), this.assertValidity());
        }
        static fromHex(e) {
          const t = X(e, 64),
            n = Point.fromHex(t.slice(0, 32), !1),
            r = L(t.slice(32, 64));
          return new Signature(n, r);
        }
        assertValidity() {
          const { r: e, s: t } = this;
          if (!(e instanceof Point)) throw new Error("Expected Point instance");
          return (K(t, f.l, !1), this);
        }
        toRawBytes() {
          const e = new Uint8Array(64);
          return (e.set(this.r.toRawBytes()), e.set(z(this.s), 32), e);
        }
        toHex() {
          return I(this.toRawBytes());
        }
      }
      function x(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function _(e) {
        if (!x(e)) throw new Error("Uint8Array expected");
      }
      function v() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if ((t.every(_), 1 === t.length)) return t[0];
        const r = t.reduce((e, t) => e + t.length, 0),
          o = new Uint8Array(r);
        for (let i = 0, s = 0; i < t.length; i++) {
          const e = t[i];
          (o.set(e, s), (s += e.length));
        }
        return o;
      }
      t.Signature = Signature;
      const A = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0"),
      );
      function I(e) {
        _(e);
        let t = "";
        for (let n = 0; n < e.length; n++) t += A[e[n]];
        return t;
      }
      const B = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function D(e) {
        return e >= B._0 && e <= B._9
          ? e - B._0
          : e >= B.A && e <= B.F
            ? e - (B.A - 10)
            : e >= B.a && e <= B.f
              ? e - (B.a - 10)
              : void 0;
      }
      function C(e) {
        if ("string" !== typeof e)
          throw new Error("hex string expected, got " + typeof e);
        const t = e.length,
          n = t / 2;
        if (t % 2)
          throw new Error(
            "hex string expected, got unpadded hex of length " + t,
          );
        const r = new Uint8Array(n);
        for (let o = 0, i = 0; o < n; o++, i += 2) {
          const t = D(e.charCodeAt(i)),
            n = D(e.charCodeAt(i + 1));
          if (void 0 === t || void 0 === n) {
            const t = e[i] + e[i + 1];
            throw new Error(
              'hex string expected, got non-hex character "' +
                t +
                '" at index ' +
                i,
            );
          }
          r[o] = 16 * t + n;
        }
        return r;
      }
      function O(e) {
        const t = 32,
          n = e.toString(16).padStart(2 * t, "0");
        return C(n);
      }
      function z(e) {
        return O(e).reverse();
      }
      function U(e) {
        return (H(e) & s) === s;
      }
      function L(e) {
        return (_(e), BigInt("0x" + I(Uint8Array.from(e).reverse())));
      }
      const R = BigInt(
        "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      );
      function N(e) {
        return H(L(e) & R);
      }
      function H(e, t) {
        void 0 === t && (t = f.P);
        const n = e % t;
        return n >= i ? n : t + n;
      }
      function V(e, t) {
        if ((void 0 === t && (t = f.P), e === i || t <= i))
          throw new Error(
            `invert: expected positive integers, got n=${e} mod=${t}`,
          );
        let n = H(e, t),
          r = t,
          o = i,
          c = s,
          a = s,
          u = i;
        while (n !== i) {
          const e = r / n,
            t = r % n,
            i = o - a * e,
            s = c - u * e;
          ((r = n), (n = t), (o = a), (c = u), (a = i), (u = s));
        }
        const d = r;
        if (d !== s) throw new Error("invert: does not exist");
        return H(o, t);
      }
      function P(e, t) {
        void 0 === t && (t = f.P);
        const n = new Array(e.length),
          r = e.reduce(
            (e, r, o) => (r === i ? e : ((n[o] = e), H(e * r, t))),
            s,
          ),
          o = V(r, t);
        return (
          e.reduceRight(
            (e, r, o) => (r === i ? e : ((n[o] = H(e * n[o], t)), H(e * r, t))),
            o,
          ),
          n
        );
      }
      function F(e, t) {
        const { P: n } = f;
        let r = e;
        while (t-- > i) ((r *= r), (r %= n));
        return r;
      }
      function T(e) {
        const { P: t } = f,
          n = BigInt(5),
          r = BigInt(10),
          o = BigInt(20),
          i = BigInt(40),
          a = BigInt(80),
          u = (e * e) % t,
          d = (u * e) % t,
          l = (F(d, c) * d) % t,
          h = (F(l, s) * e) % t,
          g = (F(h, n) * h) % t,
          E = (F(g, r) * g) % t,
          p = (F(E, o) * E) % t,
          S = (F(p, i) * p) % t,
          y = (F(S, a) * S) % t,
          m = (F(y, a) * S) % t,
          w = (F(m, r) * g) % t,
          b = (F(w, c) * e) % t;
        return { pow_p_5_8: b, b2: d };
      }
      function M(e, t) {
        const n = H(t * t * t),
          r = H(n * n * t),
          o = T(e * r).pow_p_5_8;
        let i = H(e * n * o);
        const s = H(t * i * i),
          c = i,
          a = H(i * l),
          u = s === e,
          f = s === H(-e),
          d = s === H(-e * l);
        return (
          u && (i = c),
          (f || d) && (i = a),
          U(i) && (i = H(-i)),
          { isValid: u || f, value: i }
        );
      }
      function k(e) {
        return M(s, e);
      }
      function j(e) {
        return H(L(e), f.l);
      }
      function G(e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function X(e, t) {
        const n = x(e) ? Uint8Array.from(e) : C(e);
        if ("number" === typeof t && n.length !== t)
          throw new Error(`Expected ${t} bytes`);
        return n;
      }
      function K(e, t, n) {
        if ((void 0 === n && (n = !0), !t))
          throw new TypeError("Specify max value");
        if (
          ("number" === typeof e && Number.isSafeInteger(e) && (e = BigInt(e)),
          "bigint" === typeof e && e < t)
        )
          if (n) {
            if (i < e) return e;
          } else if (i <= e) return e;
        throw new TypeError("Expected valid scalar: 0 < scalar < max");
      }
      function Z(e) {
        return ((e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e);
      }
      function W(e) {
        return L(Z(X(e, 32)));
      }
      function q(e) {
        if (
          ((e =
            "bigint" === typeof e || "number" === typeof e ? O(K(e, d)) : X(e)),
          32 !== e.length)
        )
          throw new Error("Expected 32 bytes");
        return e;
      }
      function Y(e) {
        const t = Z(e.slice(0, 32)),
          n = e.slice(32, 64),
          r = j(t),
          o = Point.BASE.multiply(r),
          i = o.toRawBytes();
        return { head: t, prefix: n, scalar: r, point: o, pointBytes: i };
      }
      let $;
      function J() {
        if ("function" !== typeof $)
          throw new Error("utils.sha512Sync must be set to use sync methods");
        return $(...arguments);
      }
      async function Q(e) {
        return Y(await pe.sha512(q(e)));
      }
      function ee(e) {
        return Y(J(q(e)));
      }
      async function te(e) {
        return (await Q(e)).pointBytes;
      }
      function ne(e) {
        return ee(e).pointBytes;
      }
      async function re(e, t) {
        e = X(e);
        const { prefix: n, scalar: r, pointBytes: o } = await Q(t),
          i = j(await pe.sha512(n, e)),
          s = Point.BASE.multiply(i),
          c = j(await pe.sha512(s.toRawBytes(), o, e)),
          a = H(i + c * r, f.l);
        return new Signature(s, a).toRawBytes();
      }
      function oe(e, t) {
        e = X(e);
        const { prefix: n, scalar: r, pointBytes: o } = ee(t),
          i = j(J(n, e)),
          s = Point.BASE.multiply(i),
          c = j(J(s.toRawBytes(), o, e)),
          a = H(i + c * r, f.l);
        return new Signature(s, a).toRawBytes();
      }
      function ie(e, t, n) {
        ((t = X(t)), n instanceof Point || (n = Point.fromHex(n, !1)));
        const { r: r, s: o } =
            e instanceof Signature ? e.assertValidity() : Signature.fromHex(e),
          i = ExtendedPoint.BASE.multiplyUnsafe(o);
        return { r: r, s: o, SB: i, pub: n, msg: t };
      }
      function se(e, t, n, r) {
        const o = j(r),
          i = ExtendedPoint.fromAffine(e).multiplyUnsafe(o),
          s = ExtendedPoint.fromAffine(t).add(i);
        return s.subtract(n).multiplyUnsafe(f.h).equals(ExtendedPoint.ZERO);
      }
      async function ce(e, t, n) {
        const { r: r, SB: o, msg: i, pub: s } = ie(e, t, n),
          c = await pe.sha512(r.toRawBytes(), s.toRawBytes(), i);
        return se(s, r, o, c);
      }
      function ae(e, t, n) {
        const { r: r, SB: o, msg: i, pub: s } = ie(e, t, n),
          c = J(r.toRawBytes(), s.toRawBytes(), i);
        return se(s, r, o, c);
      }
      t.sync = {
        getExtendedPublicKey: ee,
        getPublicKey: ne,
        sign: oe,
        verify: ae,
      };
      async function ue(e, t) {
        const { head: n } = await Q(e),
          r = Point.fromHex(t).toX25519();
        return ge.scalarMult(n, r);
      }
      function fe(e, t, n) {
        const r = H(e * (t - n));
        return ((t = H(t - r)), (n = H(n + r)), [t, n]);
      }
      function de(e, t) {
        const { P: n } = f,
          r = K(e, n),
          o = K(t, n),
          c = BigInt(121665),
          a = r;
        let u,
          d = s,
          l = i,
          h = r,
          g = s,
          E = i;
        for (let f = BigInt(254); f >= i; f--) {
          const e = (o >> f) & s;
          ((E ^= e),
            (u = fe(E, d, h)),
            (d = u[0]),
            (h = u[1]),
            (u = fe(E, l, g)),
            (l = u[0]),
            (g = u[1]),
            (E = e));
          const t = d + l,
            n = H(t * t),
            r = d - l,
            i = H(r * r),
            p = n - i,
            S = h + g,
            y = h - g,
            m = H(y * t),
            w = H(S * r),
            b = m + w,
            x = m - w;
          ((h = H(b * b)),
            (g = H(a * H(x * x))),
            (d = H(n * i)),
            (l = H(p * (n + H(c * p)))));
        }
        ((u = fe(E, d, h)),
          (d = u[0]),
          (h = u[1]),
          (u = fe(E, l, g)),
          (l = u[0]),
          (g = u[1]));
        const { pow_p_5_8: p, b2: S } = T(l),
          y = H(F(p, BigInt(3)) * S);
        return H(d * y);
      }
      function le(e) {
        return z(H(e, f.P));
      }
      function he(e) {
        const t = X(e, 32);
        return ((t[31] &= 127), L(t));
      }
      Point.BASE._setWindowSize(8);
      const ge = (t.curve25519 = {
          BASE_POINT_U:
            "0900000000000000000000000000000000000000000000000000000000000000",
          scalarMult(e, t) {
            const n = he(t),
              r = W(e),
              o = de(n, r);
            if (o === i)
              throw new Error("Invalid private or public key received");
            return le(o);
          },
          scalarMultBase(e) {
            return ge.scalarMult(e, ge.BASE_POINT_U);
          },
        }),
        Ee = {
          node: r,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        },
        pe = (t.utils = {
          bytesToHex: I,
          hexToBytes: C,
          concatBytes: v,
          getExtendedPublicKey: Q,
          mod: H,
          invert: V,
          TORSION_SUBGROUP: [
            "0100000000000000000000000000000000000000000000000000000000000000",
            "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
            "0000000000000000000000000000000000000000000000000000000000000080",
            "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
            "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
            "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
            "0000000000000000000000000000000000000000000000000000000000000000",
            "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa",
          ],
          hashToPrivateScalar: (e) => {
            if (((e = X(e)), e.length < 40 || e.length > 1024))
              throw new Error(
                "Expected 40-1024 bytes of private key as per FIPS 186",
              );
            return H(L(e), f.l - s) + s;
          },
          randomBytes: function (e) {
            if ((void 0 === e && (e = 32), Ee.web))
              return Ee.web.getRandomValues(new Uint8Array(e));
            if (Ee.node) {
              const { randomBytes: t } = Ee.node;
              return new Uint8Array(t(e).buffer);
            }
            throw new Error(
              "The environment doesn't have randomBytes function",
            );
          },
          randomPrivateKey: () => pe.randomBytes(32),
          sha512: async function () {
            const e = v(...arguments);
            if (Ee.web) {
              const t = await Ee.web.subtle.digest("SHA-512", e.buffer);
              return new Uint8Array(t);
            }
            if (Ee.node)
              return Uint8Array.from(
                Ee.node.createHash("sha512").update(e).digest(),
              );
            throw new Error("The environment doesn't have sha512 function");
          },
          precompute(e, t) {
            (void 0 === e && (e = 8), void 0 === t && (t = Point.BASE));
            const n = t.equals(Point.BASE) ? t : new Point(t.x, t.y);
            return (n._setWindowSize(e), n.multiply(c), n);
          },
          sha512Sync: void 0,
        });
      Object.defineProperties(pe, {
        sha512Sync: {
          configurable: !1,
          get() {
            return $;
          },
          set(e) {
            $ || ($ = e);
          },
        },
      });
    },
    6: function (e, t, n) {
      "use strict";
      /**
       * Support for translating between Uint8Array instances and JavaScript
       * native types.
       *
       * {@link module:Layout~Layout|Layout} is the basis of a class
       * hierarchy that associates property names with sequences of encoded
       * bytes.
       *
       * Layouts are supported for these scalar (numeric) types:
       * * {@link module:Layout~UInt|Unsigned integers in little-endian
       *   format} with {@link module:Layout.u8|8-bit}, {@link
       *   module:Layout.u16|16-bit}, {@link module:Layout.u24|24-bit},
       *   {@link module:Layout.u32|32-bit}, {@link
       *   module:Layout.u40|40-bit}, and {@link module:Layout.u48|48-bit}
       *   representation ranges;
       * * {@link module:Layout~UIntBE|Unsigned integers in big-endian
       *   format} with {@link module:Layout.u16be|16-bit}, {@link
       *   module:Layout.u24be|24-bit}, {@link module:Layout.u32be|32-bit},
       *   {@link module:Layout.u40be|40-bit}, and {@link
       *   module:Layout.u48be|48-bit} representation ranges;
       * * {@link module:Layout~Int|Signed integers in little-endian
       *   format} with {@link module:Layout.s8|8-bit}, {@link
       *   module:Layout.s16|16-bit}, {@link module:Layout.s24|24-bit},
       *   {@link module:Layout.s32|32-bit}, {@link
       *   module:Layout.s40|40-bit}, and {@link module:Layout.s48|48-bit}
       *   representation ranges;
       * * {@link module:Layout~IntBE|Signed integers in big-endian format}
       *   with {@link module:Layout.s16be|16-bit}, {@link
       *   module:Layout.s24be|24-bit}, {@link module:Layout.s32be|32-bit},
       *   {@link module:Layout.s40be|40-bit}, and {@link
       *   module:Layout.s48be|48-bit} representation ranges;
       * * 64-bit integral values that decode to an exact (if magnitude is
       *   less than 2^53) or nearby integral Number in {@link
       *   module:Layout.nu64|unsigned little-endian}, {@link
       *   module:Layout.nu64be|unsigned big-endian}, {@link
       *   module:Layout.ns64|signed little-endian}, and {@link
       *   module:Layout.ns64be|unsigned big-endian} encodings;
       * * 32-bit floating point values with {@link
       *   module:Layout.f32|little-endian} and {@link
       *   module:Layout.f32be|big-endian} representations;
       * * 64-bit floating point values with {@link
       *   module:Layout.f64|little-endian} and {@link
       *   module:Layout.f64be|big-endian} representations;
       * * {@link module:Layout.const|Constants} that take no space in the
       *   encoded expression.
       *
       * and for these aggregate types:
       * * {@link module:Layout.seq|Sequence}s of instances of a {@link
       *   module:Layout~Layout|Layout}, with JavaScript representation as
       *   an Array and constant or data-dependent {@link
       *   module:Layout~Sequence#count|length};
       * * {@link module:Layout.struct|Structure}s that aggregate a
       *   heterogeneous sequence of {@link module:Layout~Layout|Layout}
       *   instances, with JavaScript representation as an Object;
       * * {@link module:Layout.union|Union}s that support multiple {@link
       *   module:Layout~VariantLayout|variant layouts} over a fixed
       *   (padded) or variable (not padded) span of bytes, using an
       *   unsigned integer at the start of the data or a separate {@link
       *   module:Layout.unionLayoutDiscriminator|layout element} to
       *   determine which layout to use when interpreting the buffer
       *   contents;
       * * {@link module:Layout.bits|BitStructure}s that contain a sequence
       *   of individual {@link
       *   module:Layout~BitStructure#addField|BitField}s packed into an 8,
       *   16, 24, or 32-bit unsigned integer starting at the least- or
       *   most-significant bit;
       * * {@link module:Layout.cstr|C strings} of varying length;
       * * {@link module:Layout.blob|Blobs} of fixed- or variable-{@link
       *   module:Layout~Blob#length|length} raw data.
       *
       * All {@link module:Layout~Layout|Layout} instances are immutable
       * after construction, to prevent internal state from becoming
       * inconsistent.
       *
       * @local Layout
       * @local ExternalLayout
       * @local GreedyCount
       * @local OffsetLayout
       * @local UInt
       * @local UIntBE
       * @local Int
       * @local IntBE
       * @local NearUInt64
       * @local NearUInt64BE
       * @local NearInt64
       * @local NearInt64BE
       * @local Float
       * @local FloatBE
       * @local Double
       * @local DoubleBE
       * @local Sequence
       * @local Structure
       * @local UnionDiscriminator
       * @local UnionLayoutDiscriminator
       * @local Union
       * @local VariantLayout
       * @local BitStructure
       * @local BitField
       * @local Boolean
       * @local Blob
       * @local CString
       * @local Constant
       * @local bindConstructorLayout
       * @module Layout
       * @license MIT
       * @author Peter A. Bigot
       * @see {@link https://github.com/pabigot/buffer-layout|buffer-layout on GitHub}
       */ (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.s16 =
          t.s8 =
          t.nu64be =
          t.u48be =
          t.u40be =
          t.u32be =
          t.u24be =
          t.u16be =
          t.nu64 =
          t.u48 =
          t.u40 =
          t.u32 =
          t.u24 =
          t.u16 =
          t.u8 =
          t.offset =
          t.greedy =
          t.Constant =
          t.UTF8 =
          t.CString =
          t.Blob =
          t.Boolean =
          t.BitField =
          t.BitStructure =
          t.VariantLayout =
          t.Union =
          t.UnionLayoutDiscriminator =
          t.UnionDiscriminator =
          t.Structure =
          t.Sequence =
          t.DoubleBE =
          t.Double =
          t.FloatBE =
          t.Float =
          t.NearInt64BE =
          t.NearInt64 =
          t.NearUInt64BE =
          t.NearUInt64 =
          t.IntBE =
          t.Int =
          t.UIntBE =
          t.UInt =
          t.OffsetLayout =
          t.GreedyCount =
          t.ExternalLayout =
          t.bindConstructorLayout =
          t.nameWithProperty =
          t.Layout =
          t.uint8ArrayToBuffer =
          t.checkUint8Array =
            void 0),
        (t.constant =
          t.utf8 =
          t.cstr =
          t.blob =
          t.unionLayoutDiscriminator =
          t.union =
          t.seq =
          t.bits =
          t.struct =
          t.f64be =
          t.f64 =
          t.f32be =
          t.f32 =
          t.ns64be =
          t.s48be =
          t.s40be =
          t.s32be =
          t.s24be =
          t.s16be =
          t.ns64 =
          t.s48 =
          t.s40 =
          t.s32 =
          t.s24 =
            void 0));
      const r = n(2);
      function o(e) {
        if (!(e instanceof Uint8Array))
          throw new TypeError("b must be a Uint8Array");
      }
      function i(e) {
        return (o(e), r.Buffer.from(e.buffer, e.byteOffset, e.length));
      }
      ((t.checkUint8Array = o), (t.uint8ArrayToBuffer = i));
      class Layout {
        constructor(e, t) {
          if (!Number.isInteger(e))
            throw new TypeError("span must be an integer");
          ((this.span = e), (this.property = t));
        }
        makeDestinationObject() {
          return {};
        }
        getSpan(e, t) {
          if (0 > this.span) throw new RangeError("indeterminate span");
          return this.span;
        }
        replicate(e) {
          const t = Object.create(this.constructor.prototype);
          return (Object.assign(t, this), (t.property = e), t);
        }
        fromArray(e) {}
      }
      function s(e, t) {
        return t.property ? e + "[" + t.property + "]" : e;
      }
      function c(e, t) {
        if ("function" !== typeof e)
          throw new TypeError("Class must be constructor");
        if (Object.prototype.hasOwnProperty.call(e, "layout_"))
          throw new Error("Class is already bound to a layout");
        if (!(t && t instanceof Layout))
          throw new TypeError("layout must be a Layout");
        if (Object.prototype.hasOwnProperty.call(t, "boundConstructor_"))
          throw new Error("layout is already bound to a constructor");
        ((e.layout_ = t),
          (t.boundConstructor_ = e),
          (t.makeDestinationObject = () => new e()),
          Object.defineProperty(e.prototype, "encode", {
            value(e, n) {
              return t.encode(this, e, n);
            },
            writable: !0,
          }),
          Object.defineProperty(e, "decode", {
            value(e, n) {
              return t.decode(e, n);
            },
            writable: !0,
          }));
      }
      ((t.Layout = Layout),
        (t.nameWithProperty = s),
        (t.bindConstructorLayout = c));
      class ExternalLayout extends Layout {
        isCount() {
          throw new Error("ExternalLayout is abstract");
        }
      }
      t.ExternalLayout = ExternalLayout;
      class GreedyCount extends ExternalLayout {
        constructor(e, t) {
          if ((void 0 === e && (e = 1), !Number.isInteger(e) || 0 >= e))
            throw new TypeError("elementSpan must be a (positive) integer");
          (super(-1, t), (this.elementSpan = e));
        }
        isCount() {
          return !0;
        }
        decode(e, t) {
          (void 0 === t && (t = 0), o(e));
          const n = e.length - t;
          return Math.floor(n / this.elementSpan);
        }
        encode(e, t, n) {
          return 0;
        }
      }
      t.GreedyCount = GreedyCount;
      class OffsetLayout extends ExternalLayout {
        constructor(e, t, n) {
          if ((void 0 === t && (t = 0), !(e instanceof Layout)))
            throw new TypeError("layout must be a Layout");
          if (!Number.isInteger(t))
            throw new TypeError("offset must be integer or undefined");
          (super(e.span, n || e.property),
            (this.layout = e),
            (this.offset = t));
        }
        isCount() {
          return this.layout instanceof UInt || this.layout instanceof UIntBE;
        }
        decode(e, t) {
          return (
            void 0 === t && (t = 0),
            this.layout.decode(e, t + this.offset)
          );
        }
        encode(e, t, n) {
          return (
            void 0 === n && (n = 0),
            this.layout.encode(e, t, n + this.offset)
          );
        }
      }
      t.OffsetLayout = OffsetLayout;
      class UInt extends Layout {
        constructor(e, t) {
          if ((super(e, t), 6 < this.span))
            throw new RangeError("span must not exceed 6 bytes");
        }
        decode(e, t) {
          return (void 0 === t && (t = 0), i(e).readUIntLE(t, this.span));
        }
        encode(e, t, n) {
          return (
            void 0 === n && (n = 0),
            i(t).writeUIntLE(e, n, this.span),
            this.span
          );
        }
      }
      t.UInt = UInt;
      class UIntBE extends Layout {
        constructor(e, t) {
          if ((super(e, t), 6 < this.span))
            throw new RangeError("span must not exceed 6 bytes");
        }
        decode(e, t) {
          return (void 0 === t && (t = 0), i(e).readUIntBE(t, this.span));
        }
        encode(e, t, n) {
          return (
            void 0 === n && (n = 0),
            i(t).writeUIntBE(e, n, this.span),
            this.span
          );
        }
      }
      t.UIntBE = UIntBE;
      class Int extends Layout {
        constructor(e, t) {
          if ((super(e, t), 6 < this.span))
            throw new RangeError("span must not exceed 6 bytes");
        }
        decode(e, t) {
          return (void 0 === t && (t = 0), i(e).readIntLE(t, this.span));
        }
        encode(e, t, n) {
          return (
            void 0 === n && (n = 0),
            i(t).writeIntLE(e, n, this.span),
            this.span
          );
        }
      }
      t.Int = Int;
      class IntBE extends Layout {
        constructor(e, t) {
          if ((super(e, t), 6 < this.span))
            throw new RangeError("span must not exceed 6 bytes");
        }
        decode(e, t) {
          return (void 0 === t && (t = 0), i(e).readIntBE(t, this.span));
        }
        encode(e, t, n) {
          return (
            void 0 === n && (n = 0),
            i(t).writeIntBE(e, n, this.span),
            this.span
          );
        }
      }
      t.IntBE = IntBE;
      const a = Math.pow(2, 32);
      function u(e) {
        const t = Math.floor(e / a),
          n = e - t * a;
        return { hi32: t, lo32: n };
      }
      function f(e, t) {
        return e * a + t;
      }
      class NearUInt64 extends Layout {
        constructor(e) {
          super(8, e);
        }
        decode(e, t) {
          void 0 === t && (t = 0);
          const n = i(e),
            r = n.readUInt32LE(t),
            o = n.readUInt32LE(t + 4);
          return f(o, r);
        }
        encode(e, t, n) {
          void 0 === n && (n = 0);
          const r = u(e),
            o = i(t);
          return (
            o.writeUInt32LE(r.lo32, n),
            o.writeUInt32LE(r.hi32, n + 4),
            8
          );
        }
      }
      t.NearUInt64 = NearUInt64;
      class NearUInt64BE extends Layout {
        constructor(e) {
          super(8, e);
        }
        decode(e, t) {
          void 0 === t && (t = 0);
          const n = i(e),
            r = n.readUInt32BE(t),
            o = n.readUInt32BE(t + 4);
          return f(r, o);
        }
        encode(e, t, n) {
          void 0 === n && (n = 0);
          const r = u(e),
            o = i(t);
          return (
            o.writeUInt32BE(r.hi32, n),
            o.writeUInt32BE(r.lo32, n + 4),
            8
          );
        }
      }
      t.NearUInt64BE = NearUInt64BE;
      class NearInt64 extends Layout {
        constructor(e) {
          super(8, e);
        }
        decode(e, t) {
          void 0 === t && (t = 0);
          const n = i(e),
            r = n.readUInt32LE(t),
            o = n.readInt32LE(t + 4);
          return f(o, r);
        }
        encode(e, t, n) {
          void 0 === n && (n = 0);
          const r = u(e),
            o = i(t);
          return (o.writeUInt32LE(r.lo32, n), o.writeInt32LE(r.hi32, n + 4), 8);
        }
      }
      t.NearInt64 = NearInt64;
      class NearInt64BE extends Layout {
        constructor(e) {
          super(8, e);
        }
        decode(e, t) {
          void 0 === t && (t = 0);
          const n = i(e),
            r = n.readInt32BE(t),
            o = n.readUInt32BE(t + 4);
          return f(r, o);
        }
        encode(e, t, n) {
          void 0 === n && (n = 0);
          const r = u(e),
            o = i(t);
          return (o.writeInt32BE(r.hi32, n), o.writeUInt32BE(r.lo32, n + 4), 8);
        }
      }
      t.NearInt64BE = NearInt64BE;
      class Float extends Layout {
        constructor(e) {
          super(4, e);
        }
        decode(e, t) {
          return (void 0 === t && (t = 0), i(e).readFloatLE(t));
        }
        encode(e, t, n) {
          return (void 0 === n && (n = 0), i(t).writeFloatLE(e, n), 4);
        }
      }
      t.Float = Float;
      class FloatBE extends Layout {
        constructor(e) {
          super(4, e);
        }
        decode(e, t) {
          return (void 0 === t && (t = 0), i(e).readFloatBE(t));
        }
        encode(e, t, n) {
          return (void 0 === n && (n = 0), i(t).writeFloatBE(e, n), 4);
        }
      }
      t.FloatBE = FloatBE;
      class Double extends Layout {
        constructor(e) {
          super(8, e);
        }
        decode(e, t) {
          return (void 0 === t && (t = 0), i(e).readDoubleLE(t));
        }
        encode(e, t, n) {
          return (void 0 === n && (n = 0), i(t).writeDoubleLE(e, n), 8);
        }
      }
      t.Double = Double;
      class DoubleBE extends Layout {
        constructor(e) {
          super(8, e);
        }
        decode(e, t) {
          return (void 0 === t && (t = 0), i(e).readDoubleBE(t));
        }
        encode(e, t, n) {
          return (void 0 === n && (n = 0), i(t).writeDoubleBE(e, n), 8);
        }
      }
      t.DoubleBE = DoubleBE;
      class Sequence extends Layout {
        constructor(e, t, n) {
          if (!(e instanceof Layout))
            throw new TypeError("elementLayout must be a Layout");
          if (
            !(
              (t instanceof ExternalLayout && t.isCount()) ||
              (Number.isInteger(t) && 0 <= t)
            )
          )
            throw new TypeError(
              "count must be non-negative integer or an unsigned integer ExternalLayout",
            );
          let r = -1;
          (!(t instanceof ExternalLayout) && 0 < e.span && (r = t * e.span),
            super(r, n),
            (this.elementLayout = e),
            (this.count = t));
        }
        getSpan(e, t) {
          if ((void 0 === t && (t = 0), 0 <= this.span)) return this.span;
          let n = 0,
            r = this.count;
          if (
            (r instanceof ExternalLayout && (r = r.decode(e, t)),
            0 < this.elementLayout.span)
          )
            n = r * this.elementLayout.span;
          else {
            let o = 0;
            while (o < r) ((n += this.elementLayout.getSpan(e, t + n)), ++o);
          }
          return n;
        }
        decode(e, t) {
          void 0 === t && (t = 0);
          const n = [];
          let r = 0,
            o = this.count;
          o instanceof ExternalLayout && (o = o.decode(e, t));
          while (r < o)
            (n.push(this.elementLayout.decode(e, t)),
              (t += this.elementLayout.getSpan(e, t)),
              (r += 1));
          return n;
        }
        encode(e, t, n) {
          void 0 === n && (n = 0);
          const r = this.elementLayout,
            o = e.reduce((e, o) => e + r.encode(o, t, n + e), 0);
          return (
            this.count instanceof ExternalLayout &&
              this.count.encode(e.length, t, n),
            o
          );
        }
      }
      t.Sequence = Sequence;
      class Structure extends Layout {
        constructor(e, t, n) {
          if (
            !Array.isArray(e) ||
            !e.reduce((e, t) => e && t instanceof Layout, !0)
          )
            throw new TypeError("fields must be array of Layout instances");
          "boolean" === typeof t && void 0 === n && ((n = t), (t = void 0));
          for (const i of e)
            if (0 > i.span && void 0 === i.property)
              throw new Error(
                "fields cannot contain unnamed variable-length layout",
              );
          let r = -1;
          try {
            r = e.reduce((e, t) => e + t.getSpan(), 0);
          } catch (o) {}
          (super(r, t), (this.fields = e), (this.decodePrefixes = !!n));
        }
        getSpan(e, t) {
          if ((void 0 === t && (t = 0), 0 <= this.span)) return this.span;
          let n = 0;
          try {
            n = this.fields.reduce((n, r) => {
              const o = r.getSpan(e, t);
              return ((t += o), n + o);
            }, 0);
          } catch (r) {
            throw new RangeError("indeterminate span");
          }
          return n;
        }
        decode(e, t) {
          (void 0 === t && (t = 0), o(e));
          const n = this.makeDestinationObject();
          for (const r of this.fields)
            if (
              (void 0 !== r.property && (n[r.property] = r.decode(e, t)),
              (t += r.getSpan(e, t)),
              this.decodePrefixes && e.length === t)
            )
              break;
          return n;
        }
        encode(e, t, n) {
          void 0 === n && (n = 0);
          const r = n;
          let o = 0,
            i = 0;
          for (const s of this.fields) {
            let r = s.span;
            if (((i = 0 < r ? r : 0), void 0 !== s.property)) {
              const o = e[s.property];
              void 0 !== o &&
                ((i = s.encode(o, t, n)), 0 > r && (r = s.getSpan(t, n)));
            }
            ((o = n), (n += r));
          }
          return o + i - r;
        }
        fromArray(e) {
          const t = this.makeDestinationObject();
          for (const n of this.fields)
            void 0 !== n.property &&
              0 < e.length &&
              (t[n.property] = e.shift());
          return t;
        }
        layoutFor(e) {
          if ("string" !== typeof e)
            throw new TypeError("property must be string");
          for (const t of this.fields) if (t.property === e) return t;
        }
        offsetOf(e) {
          if ("string" !== typeof e)
            throw new TypeError("property must be string");
          let t = 0;
          for (const n of this.fields) {
            if (n.property === e) return t;
            0 > n.span ? (t = -1) : 0 <= t && (t += n.span);
          }
        }
      }
      t.Structure = Structure;
      class UnionDiscriminator {
        constructor(e) {
          this.property = e;
        }
        decode(e, t) {
          throw new Error("UnionDiscriminator is abstract");
        }
        encode(e, t, n) {
          throw new Error("UnionDiscriminator is abstract");
        }
      }
      t.UnionDiscriminator = UnionDiscriminator;
      class UnionLayoutDiscriminator extends UnionDiscriminator {
        constructor(e, t) {
          if (!(e instanceof ExternalLayout && e.isCount()))
            throw new TypeError(
              "layout must be an unsigned integer ExternalLayout",
            );
          (super(t || e.property || "variant"), (this.layout = e));
        }
        decode(e, t) {
          return this.layout.decode(e, t);
        }
        encode(e, t, n) {
          return this.layout.encode(e, t, n);
        }
      }
      t.UnionLayoutDiscriminator = UnionLayoutDiscriminator;
      class Union extends Layout {
        constructor(e, t, n) {
          let r;
          if (e instanceof UInt || e instanceof UIntBE)
            r = new UnionLayoutDiscriminator(new OffsetLayout(e));
          else if (e instanceof ExternalLayout && e.isCount())
            r = new UnionLayoutDiscriminator(e);
          else {
            if (!(e instanceof UnionDiscriminator))
              throw new TypeError(
                "discr must be a UnionDiscriminator or an unsigned integer layout",
              );
            r = e;
          }
          if (
            (void 0 === t && (t = null), !(null === t || t instanceof Layout))
          )
            throw new TypeError("defaultLayout must be null or a Layout");
          if (null !== t) {
            if (0 > t.span)
              throw new Error("defaultLayout must have constant span");
            void 0 === t.property && (t = t.replicate("content"));
          }
          let o = -1;
          (t &&
            ((o = t.span),
            0 <= o &&
              (e instanceof UInt || e instanceof UIntBE) &&
              (o += r.layout.span)),
            super(o, n),
            (this.discriminator = r),
            (this.usesPrefixDiscriminator =
              e instanceof UInt || e instanceof UIntBE),
            (this.defaultLayout = t),
            (this.registry = {}));
          let i = this.defaultGetSourceVariant.bind(this);
          ((this.getSourceVariant = function (e) {
            return i(e);
          }),
            (this.configGetSourceVariant = function (e) {
              i = e.bind(this);
            }));
        }
        getSpan(e, t) {
          if ((void 0 === t && (t = 0), 0 <= this.span)) return this.span;
          const n = this.getVariant(e, t);
          if (!n)
            throw new Error(
              "unable to determine span for unrecognized variant",
            );
          return n.getSpan(e, t);
        }
        defaultGetSourceVariant(e) {
          if (
            Object.prototype.hasOwnProperty.call(e, this.discriminator.property)
          ) {
            if (
              this.defaultLayout &&
              this.defaultLayout.property &&
              Object.prototype.hasOwnProperty.call(
                e,
                this.defaultLayout.property,
              )
            )
              return;
            const t = this.registry[e[this.discriminator.property]];
            if (
              t &&
              (!t.layout ||
                (t.property &&
                  Object.prototype.hasOwnProperty.call(e, t.property)))
            )
              return t;
          } else
            for (const t in this.registry) {
              const n = this.registry[t];
              if (
                n.property &&
                Object.prototype.hasOwnProperty.call(e, n.property)
              )
                return n;
            }
          throw new Error("unable to infer src variant");
        }
        decode(e, t) {
          let n;
          void 0 === t && (t = 0);
          const r = this.discriminator,
            o = r.decode(e, t),
            i = this.registry[o];
          if (void 0 === i) {
            const i = this.defaultLayout;
            let s = 0;
            (this.usesPrefixDiscriminator && (s = r.layout.span),
              (n = this.makeDestinationObject()),
              (n[r.property] = o),
              (n[i.property] = i.decode(e, t + s)));
          } else n = i.decode(e, t);
          return n;
        }
        encode(e, t, n) {
          void 0 === n && (n = 0);
          const r = this.getSourceVariant(e);
          if (void 0 === r) {
            const r = this.discriminator,
              o = this.defaultLayout;
            let i = 0;
            return (
              this.usesPrefixDiscriminator && (i = r.layout.span),
              r.encode(e[r.property], t, n),
              i + o.encode(e[o.property], t, n + i)
            );
          }
          return r.encode(e, t, n);
        }
        addVariant(e, t, n) {
          const r = new VariantLayout(this, e, t, n);
          return ((this.registry[e] = r), r);
        }
        getVariant(e, t) {
          let n;
          return (
            void 0 === t && (t = 0),
            (n = e instanceof Uint8Array ? this.discriminator.decode(e, t) : e),
            this.registry[n]
          );
        }
      }
      t.Union = Union;
      class VariantLayout extends Layout {
        constructor(e, t, n, r) {
          if (!(e instanceof Union))
            throw new TypeError("union must be a Union");
          if (!Number.isInteger(t) || 0 > t)
            throw new TypeError("variant must be a (non-negative) integer");
          if (
            ("string" === typeof n && void 0 === r && ((r = n), (n = null)), n)
          ) {
            if (!(n instanceof Layout))
              throw new TypeError("layout must be a Layout");
            if (
              null !== e.defaultLayout &&
              0 <= n.span &&
              n.span > e.defaultLayout.span
            )
              throw new Error("variant span exceeds span of containing union");
            if ("string" !== typeof r)
              throw new TypeError("variant must have a String property");
          }
          let o = e.span;
          (0 > e.span &&
            ((o = n ? n.span : 0),
            0 <= o &&
              e.usesPrefixDiscriminator &&
              (o += e.discriminator.layout.span)),
            super(o, r),
            (this.union = e),
            (this.variant = t),
            (this.layout = n || null));
        }
        getSpan(e, t) {
          if ((void 0 === t && (t = 0), 0 <= this.span)) return this.span;
          let n = 0;
          this.union.usesPrefixDiscriminator &&
            (n = this.union.discriminator.layout.span);
          let r = 0;
          return (this.layout && (r = this.layout.getSpan(e, t + n)), n + r);
        }
        decode(e, t) {
          void 0 === t && (t = 0);
          const n = this.makeDestinationObject();
          if (this !== this.union.getVariant(e, t))
            throw new Error("variant mismatch");
          let r = 0;
          return (
            this.union.usesPrefixDiscriminator &&
              (r = this.union.discriminator.layout.span),
            this.layout
              ? (n[this.property] = this.layout.decode(e, t + r))
              : this.property
                ? (n[this.property] = !0)
                : this.union.usesPrefixDiscriminator &&
                  (n[this.union.discriminator.property] = this.variant),
            n
          );
        }
        encode(e, t, n) {
          void 0 === n && (n = 0);
          let r = 0;
          if (
            (this.union.usesPrefixDiscriminator &&
              (r = this.union.discriminator.layout.span),
            this.layout &&
              !Object.prototype.hasOwnProperty.call(e, this.property))
          )
            throw new TypeError("variant lacks property " + this.property);
          this.union.discriminator.encode(this.variant, t, n);
          let o = r;
          if (
            this.layout &&
            (this.layout.encode(e[this.property], t, n + r),
            (o += this.layout.getSpan(t, n + r)),
            0 <= this.union.span && o > this.union.span)
          )
            throw new Error("encoded variant overruns containing union");
          return o;
        }
        fromArray(e) {
          if (this.layout) return this.layout.fromArray(e);
        }
      }
      function d(e) {
        return (0 > e && (e += 4294967296), e);
      }
      t.VariantLayout = VariantLayout;
      class BitStructure extends Layout {
        constructor(e, t, n) {
          if (!(e instanceof UInt || e instanceof UIntBE))
            throw new TypeError("word must be a UInt or UIntBE layout");
          if (
            ("string" === typeof t && void 0 === n && ((n = t), (t = !1)),
            4 < e.span)
          )
            throw new RangeError("word cannot exceed 32 bits");
          (super(e.span, n),
            (this.word = e),
            (this.msb = !!t),
            (this.fields = []));
          let r = 0;
          ((this._packedSetValue = function (e) {
            return ((r = d(e)), this);
          }),
            (this._packedGetValue = function () {
              return r;
            }));
        }
        decode(e, t) {
          void 0 === t && (t = 0);
          const n = this.makeDestinationObject(),
            r = this.word.decode(e, t);
          this._packedSetValue(r);
          for (const o of this.fields)
            void 0 !== o.property && (n[o.property] = o.decode(e));
          return n;
        }
        encode(e, t, n) {
          void 0 === n && (n = 0);
          const r = this.word.decode(t, n);
          this._packedSetValue(r);
          for (const o of this.fields)
            if (void 0 !== o.property) {
              const t = e[o.property];
              void 0 !== t && o.encode(t);
            }
          return this.word.encode(this._packedGetValue(), t, n);
        }
        addField(e, t) {
          const n = new BitField(this, e, t);
          return (this.fields.push(n), n);
        }
        addBoolean(e) {
          const t = new Boolean(this, e);
          return (this.fields.push(t), t);
        }
        fieldFor(e) {
          if ("string" !== typeof e)
            throw new TypeError("property must be string");
          for (const t of this.fields) if (t.property === e) return t;
        }
      }
      t.BitStructure = BitStructure;
      class BitField {
        constructor(e, t, n) {
          if (!(e instanceof BitStructure))
            throw new TypeError("container must be a BitStructure");
          if (!Number.isInteger(t) || 0 >= t)
            throw new TypeError("bits must be positive integer");
          const r = 8 * e.span,
            o = e.fields.reduce((e, t) => e + t.bits, 0);
          if (t + o > r)
            throw new Error(
              "bits too long for span remainder (" +
                (r - o) +
                " of " +
                r +
                " remain)",
            );
          ((this.container = e),
            (this.bits = t),
            (this.valueMask = (1 << t) - 1),
            32 === t && (this.valueMask = 4294967295),
            (this.start = o),
            this.container.msb && (this.start = r - o - t),
            (this.wordMask = d(this.valueMask << this.start)),
            (this.property = n));
        }
        decode(e, t) {
          const n = this.container._packedGetValue(),
            r = d(n & this.wordMask),
            o = r >>> this.start;
          return o;
        }
        encode(e) {
          if (
            "number" !== typeof e ||
            !Number.isInteger(e) ||
            e !== d(e & this.valueMask)
          )
            throw new TypeError(
              s("BitField.encode", this) +
                " value must be integer not exceeding " +
                this.valueMask,
            );
          const t = this.container._packedGetValue(),
            n = d(e << this.start);
          this.container._packedSetValue(d(t & ~this.wordMask) | n);
        }
      }
      t.BitField = BitField;
      class Boolean extends BitField {
        constructor(e, t) {
          super(e, 1, t);
        }
        decode(e, t) {
          return !!super.decode(e, t);
        }
        encode(e) {
          ("boolean" === typeof e && (e = +e), super.encode(e));
        }
      }
      t.Boolean = Boolean;
      class Blob extends Layout {
        constructor(e, t) {
          if (
            !(
              (e instanceof ExternalLayout && e.isCount()) ||
              (Number.isInteger(e) && 0 <= e)
            )
          )
            throw new TypeError(
              "length must be positive integer or an unsigned integer ExternalLayout",
            );
          let n = -1;
          (e instanceof ExternalLayout || (n = e),
            super(n, t),
            (this.length = e));
        }
        getSpan(e, t) {
          let n = this.span;
          return (0 > n && (n = this.length.decode(e, t)), n);
        }
        decode(e, t) {
          void 0 === t && (t = 0);
          let n = this.span;
          return (
            0 > n && (n = this.length.decode(e, t)),
            i(e).slice(t, t + n)
          );
        }
        encode(e, t, n) {
          let r = this.length;
          if (
            (this.length instanceof ExternalLayout && (r = e.length),
            !(e instanceof Uint8Array && r === e.length))
          )
            throw new TypeError(
              s("Blob.encode", this) +
                " requires (length " +
                r +
                ") Uint8Array as src",
            );
          if (n + r > t.length)
            throw new RangeError("encoding overruns Uint8Array");
          const o = i(e);
          return (
            i(t).write(o.toString("hex"), n, r, "hex"),
            this.length instanceof ExternalLayout &&
              this.length.encode(r, t, n),
            r
          );
        }
      }
      t.Blob = Blob;
      class CString extends Layout {
        constructor(e) {
          super(-1, e);
        }
        getSpan(e, t) {
          (void 0 === t && (t = 0), o(e));
          let n = t;
          while (n < e.length && 0 !== e[n]) n += 1;
          return 1 + n - t;
        }
        decode(e, t) {
          void 0 === t && (t = 0);
          const n = this.getSpan(e, t);
          return i(e)
            .slice(t, t + n - 1)
            .toString("utf-8");
        }
        encode(e, t, n) {
          (void 0 === n && (n = 0), "string" !== typeof e && (e = String(e)));
          const o = r.Buffer.from(e, "utf8"),
            s = o.length;
          if (n + s > t.length)
            throw new RangeError("encoding overruns Buffer");
          const c = i(t);
          return (o.copy(c, n), (c[n + s] = 0), s + 1);
        }
      }
      t.CString = CString;
      class UTF8 extends Layout {
        constructor(e, t) {
          if (
            ("string" === typeof e && void 0 === t && ((t = e), (e = void 0)),
            void 0 === e)
          )
            e = -1;
          else if (!Number.isInteger(e))
            throw new TypeError("maxSpan must be an integer");
          (super(-1, t), (this.maxSpan = e));
        }
        getSpan(e, t) {
          return (void 0 === t && (t = 0), o(e), e.length - t);
        }
        decode(e, t) {
          void 0 === t && (t = 0);
          const n = this.getSpan(e, t);
          if (0 <= this.maxSpan && this.maxSpan < n)
            throw new RangeError("text length exceeds maxSpan");
          return i(e)
            .slice(t, t + n)
            .toString("utf-8");
        }
        encode(e, t, n) {
          (void 0 === n && (n = 0), "string" !== typeof e && (e = String(e)));
          const o = r.Buffer.from(e, "utf8"),
            s = o.length;
          if (0 <= this.maxSpan && this.maxSpan < s)
            throw new RangeError("text length exceeds maxSpan");
          if (n + s > t.length)
            throw new RangeError("encoding overruns Buffer");
          return (o.copy(i(t), n), s);
        }
      }
      t.UTF8 = UTF8;
      class Constant extends Layout {
        constructor(e, t) {
          (super(0, t), (this.value = e));
        }
        decode(e, t) {
          return this.value;
        }
        encode(e, t, n) {
          return 0;
        }
      }
      ((t.Constant = Constant),
        (t.greedy = (e, t) => new GreedyCount(e, t)),
        (t.offset = (e, t, n) => new OffsetLayout(e, t, n)),
        (t.u8 = (e) => new UInt(1, e)),
        (t.u16 = (e) => new UInt(2, e)),
        (t.u24 = (e) => new UInt(3, e)),
        (t.u32 = (e) => new UInt(4, e)),
        (t.u40 = (e) => new UInt(5, e)),
        (t.u48 = (e) => new UInt(6, e)),
        (t.nu64 = (e) => new NearUInt64(e)),
        (t.u16be = (e) => new UIntBE(2, e)),
        (t.u24be = (e) => new UIntBE(3, e)),
        (t.u32be = (e) => new UIntBE(4, e)),
        (t.u40be = (e) => new UIntBE(5, e)),
        (t.u48be = (e) => new UIntBE(6, e)),
        (t.nu64be = (e) => new NearUInt64BE(e)),
        (t.s8 = (e) => new Int(1, e)),
        (t.s16 = (e) => new Int(2, e)),
        (t.s24 = (e) => new Int(3, e)),
        (t.s32 = (e) => new Int(4, e)),
        (t.s40 = (e) => new Int(5, e)),
        (t.s48 = (e) => new Int(6, e)),
        (t.ns64 = (e) => new NearInt64(e)),
        (t.s16be = (e) => new IntBE(2, e)),
        (t.s24be = (e) => new IntBE(3, e)),
        (t.s32be = (e) => new IntBE(4, e)),
        (t.s40be = (e) => new IntBE(5, e)),
        (t.s48be = (e) => new IntBE(6, e)),
        (t.ns64be = (e) => new NearInt64BE(e)),
        (t.f32 = (e) => new Float(e)),
        (t.f32be = (e) => new FloatBE(e)),
        (t.f64 = (e) => new Double(e)),
        (t.f64be = (e) => new DoubleBE(e)),
        (t.struct = (e, t, n) => new Structure(e, t, n)),
        (t.bits = (e, t, n) => new BitStructure(e, t, n)),
        (t.seq = (e, t, n) => new Sequence(e, t, n)),
        (t.union = (e, t, n) => new Union(e, t, n)),
        (t.unionLayoutDiscriminator = (e, t) =>
          new UnionLayoutDiscriminator(e, t)),
        (t.blob = (e, t) => new Blob(e, t)),
        (t.cstr = (e) => new CString(e)),
        (t.utf8 = (e, t) => new UTF8(e, t)),
        (t.constant = (e, t) => new Constant(e, t)));
    },
    607: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.u64be =
            t.u64 =
            t.u256be =
            t.u256 =
            t.u192be =
            t.u192 =
            t.u128be =
            t.u128 =
            t.bigIntBE =
            t.bigInt =
              void 0));
        var r = n(6),
          o = n(295),
          i = n(152);
        const s = (t) => (n) => {
          const s = (0, r.blob)(t, n),
            { encode: c, decode: a } = (0, i.encodeDecode)(s),
            u = s;
          return (
            (u.decode = (t, n) => {
              const r = a(t, n);
              return (0, o.toBigIntLE)(e.from(r));
            }),
            (u.encode = (e, n, r) => {
              const i = (0, o.toBufferLE)(e, t);
              return c(i, n, r);
            }),
            u
          );
        };
        t.bigInt = s;
        const c = (t) => (n) => {
          const s = (0, r.blob)(t, n),
            { encode: c, decode: a } = (0, i.encodeDecode)(s),
            u = s;
          return (
            (u.decode = (t, n) => {
              const r = a(t, n);
              return (0, o.toBigIntBE)(e.from(r));
            }),
            (u.encode = (e, n, r) => {
              const i = (0, o.toBufferBE)(e, t);
              return c(i, n, r);
            }),
            u
          );
        };
        t.bigIntBE = c;
        ((t.u64 = s(8)),
          (t.u64be = c(8)),
          (t.u128 = s(16)),
          (t.u128be = c(16)),
          (t.u192 = s(24)),
          (t.u192be = c(24)),
          (t.u256 = s(32)),
          (t.u256be = c(32)));
      }).call(this, n(2).Buffer);
    },
    613: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Endian = void 0),
        (t.assertNumberIsBetweenForCodec = i),
        (t.getU8Encoder =
          t.getU8Decoder =
          t.getU8Codec =
          t.getU64Encoder =
          t.getU64Decoder =
          t.getU64Codec =
          t.getU32Encoder =
          t.getU32Decoder =
          t.getU32Codec =
          t.getU16Encoder =
          t.getU16Decoder =
          t.getU16Codec =
          t.getU128Encoder =
          t.getU128Decoder =
          t.getU128Codec =
          t.getShortU16Encoder =
          t.getShortU16Decoder =
          t.getShortU16Codec =
          t.getI8Encoder =
          t.getI8Decoder =
          t.getI8Codec =
          t.getI64Encoder =
          t.getI64Decoder =
          t.getI64Codec =
          t.getI32Encoder =
          t.getI32Decoder =
          t.getI32Codec =
          t.getI16Encoder =
          t.getI16Decoder =
          t.getI16Codec =
          t.getI128Encoder =
          t.getI128Decoder =
          t.getI128Codec =
          t.getF64Encoder =
          t.getF64Decoder =
          t.getF64Codec =
          t.getF32Encoder =
          t.getF32Decoder =
          t.getF32Codec =
            void 0));
      var r = n(299),
        o = n(298);
      function i(e, t, n, o) {
        if (o < t || o > n)
          throw new r.SolanaError(r.SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE, {
            codecDescription: e,
            max: n,
            min: t,
            value: o,
          });
      }
      var s = (t.Endian = ((e) => (
        (e[(e["Little"] = 0)] = "Little"),
        (e[(e["Big"] = 1)] = "Big"),
        e
      ))(s || {}));
      function c(e) {
        return 1 !== (null === e || void 0 === e ? void 0 : e.endian);
      }
      function a(e) {
        return (0, o.createEncoder)({
          fixedSize: e.size,
          write(t, n, r) {
            e.range && i(e.name, e.range[0], e.range[1], t);
            const o = new ArrayBuffer(e.size);
            return (
              e.set(new DataView(o), t, c(e.config)),
              n.set(new Uint8Array(o), r),
              r + e.size
            );
          },
        });
      }
      function u(e) {
        return (0, o.createDecoder)({
          fixedSize: e.size,
          read(t, n) {
            (void 0 === n && (n = 0),
              (0, o.assertByteArrayIsNotEmptyForCodec)(e.name, t, n),
              (0, o.assertByteArrayHasEnoughBytesForCodec)(
                e.name,
                e.size,
                t,
                n,
              ));
            const r = new DataView(f(t, n, e.size));
            return [e.get(r, c(e.config)), n + e.size];
          },
        });
      }
      function f(e, t, n) {
        const r = e.byteOffset + (null !== t && void 0 !== t ? t : 0),
          o = null !== n && void 0 !== n ? n : e.byteLength;
        return e.buffer.slice(r, r + o);
      }
      var d = function (e) {
        return (
          void 0 === e && (e = {}),
          a({
            config: e,
            name: "f32",
            set: (e, t, n) => e.setFloat32(0, Number(t), n),
            size: 4,
          })
        );
      };
      t.getF32Encoder = d;
      var l = function (e) {
        return (
          void 0 === e && (e = {}),
          u({
            config: e,
            get: (e, t) => e.getFloat32(0, t),
            name: "f32",
            size: 4,
          })
        );
      };
      t.getF32Decoder = l;
      var h = function (e) {
        return (void 0 === e && (e = {}), (0, o.combineCodec)(d(e), l(e)));
      };
      t.getF32Codec = h;
      var g = function (e) {
        return (
          void 0 === e && (e = {}),
          a({
            config: e,
            name: "f64",
            set: (e, t, n) => e.setFloat64(0, Number(t), n),
            size: 8,
          })
        );
      };
      t.getF64Encoder = g;
      var E = function (e) {
        return (
          void 0 === e && (e = {}),
          u({
            config: e,
            get: (e, t) => e.getFloat64(0, t),
            name: "f64",
            size: 8,
          })
        );
      };
      t.getF64Decoder = E;
      var p = function (e) {
        return (void 0 === e && (e = {}), (0, o.combineCodec)(g(e), E(e)));
      };
      t.getF64Codec = p;
      var S = function (e) {
        return (
          void 0 === e && (e = {}),
          a({
            config: e,
            name: "i128",
            range: [
              -BigInt("0x7fffffffffffffffffffffffffffffff") - 1n,
              BigInt("0x7fffffffffffffffffffffffffffffff"),
            ],
            set: (e, t, n) => {
              const r = n ? 8 : 0,
                o = n ? 0 : 8,
                i = 0xffffffffffffffffn;
              (e.setBigInt64(r, BigInt(t) >> 64n, n),
                e.setBigUint64(o, BigInt(t) & i, n));
            },
            size: 16,
          })
        );
      };
      t.getI128Encoder = S;
      var y = function (e) {
        return (
          void 0 === e && (e = {}),
          u({
            config: e,
            get: (e, t) => {
              const n = t ? 8 : 0,
                r = t ? 0 : 8,
                o = e.getBigInt64(n, t),
                i = e.getBigUint64(r, t);
              return (o << 64n) + i;
            },
            name: "i128",
            size: 16,
          })
        );
      };
      t.getI128Decoder = y;
      var m = function (e) {
        return (void 0 === e && (e = {}), (0, o.combineCodec)(S(e), y(e)));
      };
      t.getI128Codec = m;
      var w = function (e) {
        return (
          void 0 === e && (e = {}),
          a({
            config: e,
            name: "i16",
            range: [-Number("0x7fff") - 1, Number("0x7fff")],
            set: (e, t, n) => e.setInt16(0, Number(t), n),
            size: 2,
          })
        );
      };
      t.getI16Encoder = w;
      var b = function (e) {
        return (
          void 0 === e && (e = {}),
          u({
            config: e,
            get: (e, t) => e.getInt16(0, t),
            name: "i16",
            size: 2,
          })
        );
      };
      t.getI16Decoder = b;
      var x = function (e) {
        return (void 0 === e && (e = {}), (0, o.combineCodec)(w(e), b(e)));
      };
      t.getI16Codec = x;
      var _ = function (e) {
        return (
          void 0 === e && (e = {}),
          a({
            config: e,
            name: "i32",
            range: [-Number("0x7fffffff") - 1, Number("0x7fffffff")],
            set: (e, t, n) => e.setInt32(0, Number(t), n),
            size: 4,
          })
        );
      };
      t.getI32Encoder = _;
      var v = function (e) {
        return (
          void 0 === e && (e = {}),
          u({
            config: e,
            get: (e, t) => e.getInt32(0, t),
            name: "i32",
            size: 4,
          })
        );
      };
      t.getI32Decoder = v;
      var A = function (e) {
        return (void 0 === e && (e = {}), (0, o.combineCodec)(_(e), v(e)));
      };
      t.getI32Codec = A;
      var I = function (e) {
        return (
          void 0 === e && (e = {}),
          a({
            config: e,
            name: "i64",
            range: [
              -BigInt("0x7fffffffffffffff") - 1n,
              BigInt("0x7fffffffffffffff"),
            ],
            set: (e, t, n) => e.setBigInt64(0, BigInt(t), n),
            size: 8,
          })
        );
      };
      t.getI64Encoder = I;
      var B = function (e) {
        return (
          void 0 === e && (e = {}),
          u({
            config: e,
            get: (e, t) => e.getBigInt64(0, t),
            name: "i64",
            size: 8,
          })
        );
      };
      t.getI64Decoder = B;
      var D = function (e) {
        return (void 0 === e && (e = {}), (0, o.combineCodec)(I(e), B(e)));
      };
      t.getI64Codec = D;
      var C = () =>
        a({
          name: "i8",
          range: [-Number("0x7f") - 1, Number("0x7f")],
          set: (e, t) => e.setInt8(0, Number(t)),
          size: 1,
        });
      t.getI8Encoder = C;
      var O = () => u({ get: (e) => e.getInt8(0), name: "i8", size: 1 });
      t.getI8Decoder = O;
      var z = () => (0, o.combineCodec)(C(), O());
      t.getI8Codec = z;
      var U = () =>
        (0, o.createEncoder)({
          getSizeFromValue: (e) => (e <= 127 ? 1 : e <= 16383 ? 2 : 3),
          maxSize: 3,
          write: (e, t, n) => {
            i("shortU16", 0, 65535, e);
            const r = [0];
            for (let o = 0; ; o += 1) {
              const t = Number(e) >> (7 * o);
              if (0 === t) break;
              const n = 127 & t;
              ((r[o] = n), o > 0 && (r[o - 1] |= 128));
            }
            return (t.set(r, n), n + r.length);
          },
        });
      t.getShortU16Encoder = U;
      var L = () =>
        (0, o.createDecoder)({
          maxSize: 3,
          read: (e, t) => {
            let n = 0,
              r = 0;
            while (++r) {
              const o = r - 1,
                i = e[t + o],
                s = 127 & i;
              if (((n |= s << (7 * o)), 0 === (128 & i))) break;
            }
            return [n, t + r];
          },
        });
      t.getShortU16Decoder = L;
      var R = () => (0, o.combineCodec)(U(), L());
      t.getShortU16Codec = R;
      var N = function (e) {
        return (
          void 0 === e && (e = {}),
          a({
            config: e,
            name: "u128",
            range: [0n, BigInt("0xffffffffffffffffffffffffffffffff")],
            set: (e, t, n) => {
              const r = n ? 8 : 0,
                o = n ? 0 : 8,
                i = 0xffffffffffffffffn;
              (e.setBigUint64(r, BigInt(t) >> 64n, n),
                e.setBigUint64(o, BigInt(t) & i, n));
            },
            size: 16,
          })
        );
      };
      t.getU128Encoder = N;
      var H = function (e) {
        return (
          void 0 === e && (e = {}),
          u({
            config: e,
            get: (e, t) => {
              const n = t ? 8 : 0,
                r = t ? 0 : 8,
                o = e.getBigUint64(n, t),
                i = e.getBigUint64(r, t);
              return (o << 64n) + i;
            },
            name: "u128",
            size: 16,
          })
        );
      };
      t.getU128Decoder = H;
      var V = function (e) {
        return (void 0 === e && (e = {}), (0, o.combineCodec)(N(e), H(e)));
      };
      t.getU128Codec = V;
      var P = function (e) {
        return (
          void 0 === e && (e = {}),
          a({
            config: e,
            name: "u16",
            range: [0, Number("0xffff")],
            set: (e, t, n) => e.setUint16(0, Number(t), n),
            size: 2,
          })
        );
      };
      t.getU16Encoder = P;
      var F = function (e) {
        return (
          void 0 === e && (e = {}),
          u({
            config: e,
            get: (e, t) => e.getUint16(0, t),
            name: "u16",
            size: 2,
          })
        );
      };
      t.getU16Decoder = F;
      var T = function (e) {
        return (void 0 === e && (e = {}), (0, o.combineCodec)(P(e), F(e)));
      };
      t.getU16Codec = T;
      var M = function (e) {
        return (
          void 0 === e && (e = {}),
          a({
            config: e,
            name: "u32",
            range: [0, Number("0xffffffff")],
            set: (e, t, n) => e.setUint32(0, Number(t), n),
            size: 4,
          })
        );
      };
      t.getU32Encoder = M;
      var k = function (e) {
        return (
          void 0 === e && (e = {}),
          u({
            config: e,
            get: (e, t) => e.getUint32(0, t),
            name: "u32",
            size: 4,
          })
        );
      };
      t.getU32Decoder = k;
      var j = function (e) {
        return (void 0 === e && (e = {}), (0, o.combineCodec)(M(e), k(e)));
      };
      t.getU32Codec = j;
      var G = function (e) {
        return (
          void 0 === e && (e = {}),
          a({
            config: e,
            name: "u64",
            range: [0n, BigInt("0xffffffffffffffff")],
            set: (e, t, n) => e.setBigUint64(0, BigInt(t), n),
            size: 8,
          })
        );
      };
      t.getU64Encoder = G;
      var X = function (e) {
        return (
          void 0 === e && (e = {}),
          u({
            config: e,
            get: (e, t) => e.getBigUint64(0, t),
            name: "u64",
            size: 8,
          })
        );
      };
      t.getU64Decoder = X;
      var K = function (e) {
        return (void 0 === e && (e = {}), (0, o.combineCodec)(G(e), X(e)));
      };
      t.getU64Codec = K;
      var Z = () =>
        a({
          name: "u8",
          range: [0, Number("0xff")],
          set: (e, t) => e.setUint8(0, Number(t)),
          size: 1,
        });
      t.getU8Encoder = Z;
      var W = () => u({ get: (e) => e.getUint8(0), name: "u8", size: 1 });
      t.getU8Decoder = W;
      var q = () => (0, o.combineCodec)(Z(), W());
      t.getU8Codec = q;
    },
    614: function (e, t, n) {
      "use strict";
      var r = n(183),
        o = n(184);
      function i(e, t, n, o) {
        if (o < t || o > n)
          throw new r.SolanaError(r.SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE, {
            codecDescription: e,
            max: n,
            min: t,
            value: o,
          });
      }
      var s = ((e) => (
        (e[(e["Little"] = 0)] = "Little"),
        (e[(e["Big"] = 1)] = "Big"),
        e
      ))(s || {});
      function c(e) {
        return 1 !== (null === e || void 0 === e ? void 0 : e.endian);
      }
      function a(e) {
        return o.createEncoder({
          fixedSize: e.size,
          write(t, n, r) {
            e.range && i(e.name, e.range[0], e.range[1], t);
            const o = new ArrayBuffer(e.size);
            return (
              e.set(new DataView(o), t, c(e.config)),
              n.set(new Uint8Array(o), r),
              r + e.size
            );
          },
        });
      }
      function u(e) {
        return o.createDecoder({
          fixedSize: e.size,
          read(t, n) {
            (void 0 === n && (n = 0),
              o.assertByteArrayIsNotEmptyForCodec(e.name, t, n),
              o.assertByteArrayHasEnoughBytesForCodec(e.name, e.size, t, n));
            const r = new DataView(f(t, n, e.size));
            return [e.get(r, c(e.config)), n + e.size];
          },
        });
      }
      function f(e, t, n) {
        const r = e.byteOffset + (null !== t && void 0 !== t ? t : 0),
          o = null !== n && void 0 !== n ? n : e.byteLength;
        return e.buffer.slice(r, r + o);
      }
      var d = function (e) {
          return (
            void 0 === e && (e = {}),
            a({
              config: e,
              name: "f32",
              set: (e, t, n) => e.setFloat32(0, Number(t), n),
              size: 4,
            })
          );
        },
        l = function (e) {
          return (
            void 0 === e && (e = {}),
            u({
              config: e,
              get: (e, t) => e.getFloat32(0, t),
              name: "f32",
              size: 4,
            })
          );
        },
        h = function (e) {
          return (void 0 === e && (e = {}), o.combineCodec(d(e), l(e)));
        },
        g = function (e) {
          return (
            void 0 === e && (e = {}),
            a({
              config: e,
              name: "f64",
              set: (e, t, n) => e.setFloat64(0, Number(t), n),
              size: 8,
            })
          );
        },
        E = function (e) {
          return (
            void 0 === e && (e = {}),
            u({
              config: e,
              get: (e, t) => e.getFloat64(0, t),
              name: "f64",
              size: 8,
            })
          );
        },
        p = function (e) {
          return (void 0 === e && (e = {}), o.combineCodec(g(e), E(e)));
        },
        S = function (e) {
          return (
            void 0 === e && (e = {}),
            a({
              config: e,
              name: "i128",
              range: [
                -BigInt("0x7fffffffffffffffffffffffffffffff") - 1n,
                BigInt("0x7fffffffffffffffffffffffffffffff"),
              ],
              set: (e, t, n) => {
                const r = n ? 8 : 0,
                  o = n ? 0 : 8,
                  i = 0xffffffffffffffffn;
                (e.setBigInt64(r, BigInt(t) >> 64n, n),
                  e.setBigUint64(o, BigInt(t) & i, n));
              },
              size: 16,
            })
          );
        },
        y = function (e) {
          return (
            void 0 === e && (e = {}),
            u({
              config: e,
              get: (e, t) => {
                const n = t ? 8 : 0,
                  r = t ? 0 : 8,
                  o = e.getBigInt64(n, t),
                  i = e.getBigUint64(r, t);
                return (o << 64n) + i;
              },
              name: "i128",
              size: 16,
            })
          );
        },
        m = function (e) {
          return (void 0 === e && (e = {}), o.combineCodec(S(e), y(e)));
        },
        w = function (e) {
          return (
            void 0 === e && (e = {}),
            a({
              config: e,
              name: "i16",
              range: [-Number("0x7fff") - 1, Number("0x7fff")],
              set: (e, t, n) => e.setInt16(0, Number(t), n),
              size: 2,
            })
          );
        },
        b = function (e) {
          return (
            void 0 === e && (e = {}),
            u({
              config: e,
              get: (e, t) => e.getInt16(0, t),
              name: "i16",
              size: 2,
            })
          );
        },
        x = function (e) {
          return (void 0 === e && (e = {}), o.combineCodec(w(e), b(e)));
        },
        _ = function (e) {
          return (
            void 0 === e && (e = {}),
            a({
              config: e,
              name: "i32",
              range: [-Number("0x7fffffff") - 1, Number("0x7fffffff")],
              set: (e, t, n) => e.setInt32(0, Number(t), n),
              size: 4,
            })
          );
        },
        v = function (e) {
          return (
            void 0 === e && (e = {}),
            u({
              config: e,
              get: (e, t) => e.getInt32(0, t),
              name: "i32",
              size: 4,
            })
          );
        },
        A = function (e) {
          return (void 0 === e && (e = {}), o.combineCodec(_(e), v(e)));
        },
        I = function (e) {
          return (
            void 0 === e && (e = {}),
            a({
              config: e,
              name: "i64",
              range: [
                -BigInt("0x7fffffffffffffff") - 1n,
                BigInt("0x7fffffffffffffff"),
              ],
              set: (e, t, n) => e.setBigInt64(0, BigInt(t), n),
              size: 8,
            })
          );
        },
        B = function (e) {
          return (
            void 0 === e && (e = {}),
            u({
              config: e,
              get: (e, t) => e.getBigInt64(0, t),
              name: "i64",
              size: 8,
            })
          );
        },
        D = function (e) {
          return (void 0 === e && (e = {}), o.combineCodec(I(e), B(e)));
        },
        C = () =>
          a({
            name: "i8",
            range: [-Number("0x7f") - 1, Number("0x7f")],
            set: (e, t) => e.setInt8(0, Number(t)),
            size: 1,
          }),
        O = () => u({ get: (e) => e.getInt8(0), name: "i8", size: 1 }),
        z = () => o.combineCodec(C(), O()),
        U = () =>
          o.createEncoder({
            getSizeFromValue: (e) => (e <= 127 ? 1 : e <= 16383 ? 2 : 3),
            maxSize: 3,
            write: (e, t, n) => {
              i("shortU16", 0, 65535, e);
              const r = [0];
              for (let o = 0; ; o += 1) {
                const t = Number(e) >> (7 * o);
                if (0 === t) break;
                const n = 127 & t;
                ((r[o] = n), o > 0 && (r[o - 1] |= 128));
              }
              return (t.set(r, n), n + r.length);
            },
          }),
        L = () =>
          o.createDecoder({
            maxSize: 3,
            read: (e, t) => {
              let n = 0,
                r = 0;
              while (++r) {
                const o = r - 1,
                  i = e[t + o],
                  s = 127 & i;
                if (((n |= s << (7 * o)), 0 === (128 & i))) break;
              }
              return [n, t + r];
            },
          }),
        R = () => o.combineCodec(U(), L()),
        N = function (e) {
          return (
            void 0 === e && (e = {}),
            a({
              config: e,
              name: "u128",
              range: [0n, BigInt("0xffffffffffffffffffffffffffffffff")],
              set: (e, t, n) => {
                const r = n ? 8 : 0,
                  o = n ? 0 : 8,
                  i = 0xffffffffffffffffn;
                (e.setBigUint64(r, BigInt(t) >> 64n, n),
                  e.setBigUint64(o, BigInt(t) & i, n));
              },
              size: 16,
            })
          );
        },
        H = function (e) {
          return (
            void 0 === e && (e = {}),
            u({
              config: e,
              get: (e, t) => {
                const n = t ? 8 : 0,
                  r = t ? 0 : 8,
                  o = e.getBigUint64(n, t),
                  i = e.getBigUint64(r, t);
                return (o << 64n) + i;
              },
              name: "u128",
              size: 16,
            })
          );
        },
        V = function (e) {
          return (void 0 === e && (e = {}), o.combineCodec(N(e), H(e)));
        },
        P = function (e) {
          return (
            void 0 === e && (e = {}),
            a({
              config: e,
              name: "u16",
              range: [0, Number("0xffff")],
              set: (e, t, n) => e.setUint16(0, Number(t), n),
              size: 2,
            })
          );
        },
        F = function (e) {
          return (
            void 0 === e && (e = {}),
            u({
              config: e,
              get: (e, t) => e.getUint16(0, t),
              name: "u16",
              size: 2,
            })
          );
        },
        T = function (e) {
          return (void 0 === e && (e = {}), o.combineCodec(P(e), F(e)));
        },
        M = function (e) {
          return (
            void 0 === e && (e = {}),
            a({
              config: e,
              name: "u32",
              range: [0, Number("0xffffffff")],
              set: (e, t, n) => e.setUint32(0, Number(t), n),
              size: 4,
            })
          );
        },
        k = function (e) {
          return (
            void 0 === e && (e = {}),
            u({
              config: e,
              get: (e, t) => e.getUint32(0, t),
              name: "u32",
              size: 4,
            })
          );
        },
        j = function (e) {
          return (void 0 === e && (e = {}), o.combineCodec(M(e), k(e)));
        },
        G = function (e) {
          return (
            void 0 === e && (e = {}),
            a({
              config: e,
              name: "u64",
              range: [0n, BigInt("0xffffffffffffffff")],
              set: (e, t, n) => e.setBigUint64(0, BigInt(t), n),
              size: 8,
            })
          );
        },
        X = function (e) {
          return (
            void 0 === e && (e = {}),
            u({
              config: e,
              get: (e, t) => e.getBigUint64(0, t),
              name: "u64",
              size: 8,
            })
          );
        },
        K = function (e) {
          return (void 0 === e && (e = {}), o.combineCodec(G(e), X(e)));
        },
        Z = () =>
          a({
            name: "u8",
            range: [0, Number("0xff")],
            set: (e, t) => e.setUint8(0, Number(t)),
            size: 1,
          }),
        W = () => u({ get: (e) => e.getUint8(0), name: "u8", size: 1 }),
        q = () => o.combineCodec(Z(), W());
      ((t.Endian = s),
        (t.assertNumberIsBetweenForCodec = i),
        (t.getF32Codec = h),
        (t.getF32Decoder = l),
        (t.getF32Encoder = d),
        (t.getF64Codec = p),
        (t.getF64Decoder = E),
        (t.getF64Encoder = g),
        (t.getI128Codec = m),
        (t.getI128Decoder = y),
        (t.getI128Encoder = S),
        (t.getI16Codec = x),
        (t.getI16Decoder = b),
        (t.getI16Encoder = w),
        (t.getI32Codec = A),
        (t.getI32Decoder = v),
        (t.getI32Encoder = _),
        (t.getI64Codec = D),
        (t.getI64Decoder = B),
        (t.getI64Encoder = I),
        (t.getI8Codec = z),
        (t.getI8Decoder = O),
        (t.getI8Encoder = C),
        (t.getShortU16Codec = R),
        (t.getShortU16Decoder = L),
        (t.getShortU16Encoder = U),
        (t.getU128Codec = V),
        (t.getU128Decoder = H),
        (t.getU128Encoder = N),
        (t.getU16Codec = T),
        (t.getU16Decoder = F),
        (t.getU16Encoder = P),
        (t.getU32Codec = j),
        (t.getU32Decoder = k),
        (t.getU32Encoder = M),
        (t.getU64Codec = K),
        (t.getU64Decoder = X),
        (t.getU64Encoder = G),
        (t.getU8Codec = q),
        (t.getU8Decoder = W),
        (t.getU8Encoder = Z));
    },
    825: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SHA512_IV =
          t.SHA384_IV =
          t.SHA224_IV =
          t.SHA256_IV =
          t.HashMD =
            void 0),
        (t.setBigUint64 = o),
        (t.Chi = i),
        (t.Maj = s));
      const r = n(130);
      function o(e, t, n, r) {
        if ("function" === typeof e.setBigUint64)
          return e.setBigUint64(t, n, r);
        const o = BigInt(32),
          i = BigInt(4294967295),
          s = Number((n >> o) & i),
          c = Number(n & i),
          a = r ? 4 : 0,
          u = r ? 0 : 4;
        (e.setUint32(t + a, s, r), e.setUint32(t + u, c, r));
      }
      function i(e, t, n) {
        return (e & t) ^ (~e & n);
      }
      function s(e, t, n) {
        return (e & t) ^ (e & n) ^ (t & n);
      }
      class HashMD extends r.Hash {
        constructor(e, t, n, o) {
          (super(),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = n),
            (this.isLE = o),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, r.createView)(this.buffer)));
        }
        update(e) {
          ((0, r.aexists)(this), (e = (0, r.toBytes)(e)), (0, r.abytes)(e));
          const { view: t, buffer: n, blockLen: o } = this,
            i = e.length;
          for (let s = 0; s < i; ) {
            const c = Math.min(o - this.pos, i - s);
            if (c !== o)
              (n.set(e.subarray(s, s + c), this.pos),
                (this.pos += c),
                (s += c),
                this.pos === o && (this.process(t, 0), (this.pos = 0)));
            else {
              const t = (0, r.createView)(e);
              for (; o <= i - s; s += o) this.process(t, s);
            }
          }
          return ((this.length += e.length), this.roundClean(), this);
        }
        digestInto(e) {
          ((0, r.aexists)(this), (0, r.aoutput)(e, this), (this.finished = !0));
          const { buffer: t, view: n, blockLen: i, isLE: s } = this;
          let { pos: c } = this;
          ((t[c++] = 128),
            (0, r.clean)(this.buffer.subarray(c)),
            this.padOffset > i - c && (this.process(n, 0), (c = 0)));
          for (let r = c; r < i; r++) t[r] = 0;
          (o(n, i - 8, BigInt(8 * this.length), s), this.process(n, 0));
          const a = (0, r.createView)(e),
            u = this.outputLen;
          if (u % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
          const f = u / 4,
            d = this.get();
          if (f > d.length)
            throw new Error("_sha2: outputLen bigger than state");
          for (let r = 0; r < f; r++) a.setUint32(4 * r, d[r], s);
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
            finished: o,
            destroyed: i,
            pos: s,
          } = this;
          return (
            (e.destroyed = i),
            (e.finished = o),
            (e.length = r),
            (e.pos = s),
            r % t && e.buffer.set(n),
            e
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      ((t.HashMD = HashMD),
        (t.SHA256_IV = Uint32Array.from([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ])),
        (t.SHA224_IV = Uint32Array.from([
          3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
          1694076839, 3204075428,
        ])),
        (t.SHA384_IV = Uint32Array.from([
          3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
          355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
          3675008525, 1694076839, 1203062813, 3204075428,
        ])),
        (t.SHA512_IV = Uint32Array.from([
          1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
          4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
          2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
        ])));
    },
    875: function (e, t, n) {
      var r = n(383)["default"],
        o = n(1786);
      function i(e) {
        var t = o(e, "string");
        return "symbol" == r(t) ? t : t + "";
      }
      ((e.exports = i),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
    9: function (e, t) {
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      ((e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports["default"] = e.exports));
    },
  },
]);
