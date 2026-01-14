(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [21],
  {
    2757: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), n(9218));
      var r = n(9225);
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
    },
    3191: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.exposeGlobal = s),
          (t.extractGlobal = u),
          Object.defineProperty(t, "packageInfo", {
            enumerable: !0,
            get: function () {
              return r.packageInfo;
            },
          }),
          (t.xglobal = void 0));
        var r = n(9220);
        function i(e) {
          return e("return this");
        }
        const o = (t.xglobal =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof e
              ? e
              : "undefined" !== typeof self
                ? self
                : "undefined" !== typeof window
                  ? window
                  : i(Function));
        function u(e, t) {
          return "undefined" === typeof o[e] ? t : o[e];
        }
        function s(e, t) {
          "undefined" === typeof o[e] && (o[e] = t);
        }
      }).call(this, n(13));
    },
    3385: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BigInt = void 0),
        Object.defineProperty(t, "packageInfo", {
          enumerable: !0,
          get: function () {
            return i.packageInfo;
          },
        }));
      var r = n(3191),
        i = n(9238);
      function o() {
        return Number.NaN;
      }
      t.BigInt = (0, r.extractGlobal)("BigInt", o);
    },
    3595: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.u8aToU8a = a));
      var r = n(4528),
        i = n(5463),
        o = n(3814),
        u = n(4529),
        s = n(5465);
      function a(e) {
        return (0, u.isU8a)(e)
          ? (0, i.isBuffer)(e)
            ? new Uint8Array(e)
            : e
          : (0, o.isHex)(e)
            ? (0, r.hexToU8a)(e)
            : Array.isArray(e)
              ? new Uint8Array(e)
              : (0, s.stringToU8a)(e);
      }
    },
    3813: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BN", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }));
      var i = r(n(9239));
    },
    3814: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.REGEX_HEX_PREFIXED = t.REGEX_HEX_NOPREFIX = void 0),
        (t.isHex = i));
      const r = (t.REGEX_HEX_PREFIXED = /^0x[\da-fA-F]+$/);
      t.REGEX_HEX_NOPREFIX = /^[\da-fA-F]+$/;
      function i(e, t, n) {
        return (
          void 0 === t && (t = -1),
          "string" === typeof e &&
            ("0x" === e || r.test(e)) &&
            (-1 === t
              ? n || e.length % 2 === 0
              : e.length === 2 + Math.ceil(t / 4))
        );
      }
    },
    3815: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isOn = o),
        (t.isOnFunction = u),
        (t.isOnObject = s));
      var r = n(3931),
        i = n(5461);
      function o() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (e) =>
          ((0, i.isObject)(e) || (0, r.isFunction)(e)) &&
          t.every((t) => (0, r.isFunction)(e[t]));
      }
      function u() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (e) =>
          (0, r.isFunction)(e) && t.every((t) => (0, r.isFunction)(e[t]));
      }
      function s() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (e) =>
          (0, i.isObject)(e) && t.every((t) => (0, r.isFunction)(e[t]));
      }
    },
    3931: function (e, t, n) {
      "use strict";
      function r(e) {
        return "function" === typeof e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isFunction = r));
    },
    3932: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "U8A_WRAP_ETHEREUM", {
          enumerable: !0,
          get: function () {
            return b.U8A_WRAP_ETHEREUM;
          },
        }),
        Object.defineProperty(t, "U8A_WRAP_POSTFIX", {
          enumerable: !0,
          get: function () {
            return b.U8A_WRAP_POSTFIX;
          },
        }),
        Object.defineProperty(t, "U8A_WRAP_PREFIX", {
          enumerable: !0,
          get: function () {
            return b.U8A_WRAP_PREFIX;
          },
        }),
        Object.defineProperty(t, "u8aCmp", {
          enumerable: !0,
          get: function () {
            return r.u8aCmp;
          },
        }),
        Object.defineProperty(t, "u8aConcat", {
          enumerable: !0,
          get: function () {
            return i.u8aConcat;
          },
        }),
        Object.defineProperty(t, "u8aConcatStrict", {
          enumerable: !0,
          get: function () {
            return i.u8aConcatStrict;
          },
        }),
        Object.defineProperty(t, "u8aEmpty", {
          enumerable: !0,
          get: function () {
            return o.u8aEmpty;
          },
        }),
        Object.defineProperty(t, "u8aEq", {
          enumerable: !0,
          get: function () {
            return u.u8aEq;
          },
        }),
        Object.defineProperty(t, "u8aFixLength", {
          enumerable: !0,
          get: function () {
            return s.u8aFixLength;
          },
        }),
        Object.defineProperty(t, "u8aIsWrapped", {
          enumerable: !0,
          get: function () {
            return b.u8aIsWrapped;
          },
        }),
        Object.defineProperty(t, "u8aSorted", {
          enumerable: !0,
          get: function () {
            return a.u8aSorted;
          },
        }),
        Object.defineProperty(t, "u8aToBigInt", {
          enumerable: !0,
          get: function () {
            return l.u8aToBigInt;
          },
        }),
        Object.defineProperty(t, "u8aToBn", {
          enumerable: !0,
          get: function () {
            return c.u8aToBn;
          },
        }),
        Object.defineProperty(t, "u8aToBuffer", {
          enumerable: !0,
          get: function () {
            return f.u8aToBuffer;
          },
        }),
        Object.defineProperty(t, "u8aToFloat", {
          enumerable: !0,
          get: function () {
            return h.u8aToFloat;
          },
        }),
        Object.defineProperty(t, "u8aToHex", {
          enumerable: !0,
          get: function () {
            return d.u8aToHex;
          },
        }),
        Object.defineProperty(t, "u8aToNumber", {
          enumerable: !0,
          get: function () {
            return p.u8aToNumber;
          },
        }),
        Object.defineProperty(t, "u8aToString", {
          enumerable: !0,
          get: function () {
            return m.u8aToString;
          },
        }),
        Object.defineProperty(t, "u8aToU8a", {
          enumerable: !0,
          get: function () {
            return g.u8aToU8a;
          },
        }),
        Object.defineProperty(t, "u8aUnwrapBytes", {
          enumerable: !0,
          get: function () {
            return b.u8aUnwrapBytes;
          },
        }),
        Object.defineProperty(t, "u8aWrapBytes", {
          enumerable: !0,
          get: function () {
            return b.u8aWrapBytes;
          },
        }));
      var r = n(6448),
        i = n(6449),
        o = n(9242),
        u = n(4761),
        s = n(9243),
        a = n(9244),
        l = n(6447),
        c = n(9245),
        f = n(9246),
        h = n(9247),
        d = n(5466),
        p = n(9248),
        m = n(6450),
        g = n(3595),
        b = n(9249);
    },
    3933: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.bnToBn = l));
      var r = n(4762),
        i = n(5469),
        o = n(3814),
        u = n(5460),
        s = n(5462),
        a = n(3813);
      function l(e) {
        return e
          ? a.BN.isBN(e)
            ? e
            : (0, o.isHex)(e)
              ? (0, r.hexToBn)(e.toString())
              : (0, i.isBigInt)(e)
                ? new a.BN(e.toString())
                : (0, s.isToBn)(e)
                  ? e.toBn()
                  : (0, u.isToBigInt)(e)
                    ? new a.BN(e.toBigInt().toString())
                    : new a.BN(e)
          : new a.BN(0);
      }
    },
    4528: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.hexToU8a = u));
      const r = "0123456789abcdef",
        i = new Uint8Array(256),
        o = new Uint8Array(65536);
      for (let s = 0, a = r.length; s < a; s++)
        ((i[0 | r[s].charCodeAt(0)] = 0 | s),
          s > 9 && (i[0 | r[s].toUpperCase().charCodeAt(0)] = 0 | s));
      for (let s = 0; s < 256; s++) {
        const e = s << 8;
        for (let t = 0; t < 256; t++) o[e | t] = (i[s] << 4) | i[t];
      }
      function u(e, t) {
        if ((void 0 === t && (t = -1), !e)) return new Uint8Array();
        let n = e.startsWith("0x") ? 2 : 0;
        const r = Math.ceil((e.length - n) / 2),
          i = Math.ceil(-1 === t ? r : t / 8),
          u = new Uint8Array(i),
          s = i > r ? i - r : 0;
        for (let a = s; a < i; a++, n += 2)
          u[a] = o[(e.charCodeAt(n) << 8) | e.charCodeAt(n + 1)];
        return u;
      }
    },
    4529: function (e, t, n) {
      "use strict";
      function r(e) {
        return (e && e.constructor) === Uint8Array || e instanceof Uint8Array;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isU8a = r));
    },
    4759: function (e, t, n) {
      function r(e) {
        const t = n.p;
        let r = "";
        return (
          (!t || t.indexOf("://") < 0) &&
            (r += window.location.protocol + "//" + window.location.host),
          (r += t || "/"),
          r + e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.packageInfo = void 0));
      t.packageInfo = {
        name: "@polkadot/util",
        path:
          (r("node_modules/@polkadot/util/packageInfo.js"),
          { url: r("node_modules/@polkadot/util/packageInfo.js") }.url
            ? new URL(
                { url: r("node_modules/@polkadot/util/packageInfo.js") }.url,
              ).pathname.substring(
                0,
                new URL(
                  { url: r("node_modules/@polkadot/util/packageInfo.js") }.url,
                ).pathname.lastIndexOf("/") + 1,
              )
            : "auto"),
        type: "esm",
        version: "12.6.2",
      };
    },
    4760: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._sqrt2pow53n =
          t._9n =
          t._8n =
          t._7n =
          t._6n =
          t._5n =
          t._4n =
          t._3n =
          t._2pow53n =
          t._2n =
          t._1n =
          t._1Qn =
          t._1Mn =
          t._1Bn =
          t._10n =
          t._100n =
          t._1000n =
          t._0n =
            void 0));
      var r = n(3385);
      ((t._0n = (0, r.BigInt)(0)),
        (t._1n = (0, r.BigInt)(1)),
        (t._2n = (0, r.BigInt)(2)),
        (t._3n = (0, r.BigInt)(3)),
        (t._4n = (0, r.BigInt)(4)),
        (t._5n = (0, r.BigInt)(5)),
        (t._6n = (0, r.BigInt)(6)),
        (t._7n = (0, r.BigInt)(7)),
        (t._8n = (0, r.BigInt)(8)),
        (t._9n = (0, r.BigInt)(9)),
        (t._10n = (0, r.BigInt)(10)),
        (t._100n = (0, r.BigInt)(100)),
        (t._1000n = (0, r.BigInt)(1e3)),
        (t._1Mn = (0, r.BigInt)(1e6)));
      const i = (t._1Bn = (0, r.BigInt)(1e9));
      ((t._1Qn = i * i),
        (t._2pow53n = (0, r.BigInt)(Number.MAX_SAFE_INTEGER)),
        (t._sqrt2pow53n = (0, r.BigInt)(94906265)));
    },
    4761: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.u8aEq = i));
      var r = n(3595);
      function i(e, t) {
        const n = (0, r.u8aToU8a)(e),
          i = (0, r.u8aToU8a)(t);
        if (n.length === i.length) {
          const e = new DataView(n.buffer, n.byteOffset),
            t = new DataView(i.buffer, i.byteOffset),
            r = (n.length % 4) | 0,
            o = (n.length - r) | 0;
          for (let n = 0; n < o; n += 4)
            if (e.getUint32(n) !== t.getUint32(n)) return !1;
          for (let u = o, s = n.length; u < s; u++)
            if (n[u] !== i[u]) return !1;
          return !0;
        }
        return !1;
      }
    },
    4762: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.hexToBn = o));
      var r = n(3813),
        i = n(5468);
      function o(e, t) {
        let { isLe: n = !1, isNegative: o = !1 } = void 0 === t ? {} : t;
        if (!e || "0x" === e) return new r.BN(0);
        const u = (0, i.hexStripPrefix)(e),
          s = new r.BN(u, 16, n ? "le" : "be");
        return o ? s.fromTwos(4 * u.length) : s;
      }
    },
    5458: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.nToBigInt = l));
      var r = n(3385),
        i = n(6446),
        o = n(5459),
        u = n(3814),
        s = n(5460),
        a = n(5462);
      function l(e) {
        return "bigint" === typeof e
          ? e
          : e
            ? (0, u.isHex)(e)
              ? (0, i.hexToBigInt)(e.toString())
              : (0, o.isBn)(e)
                ? (0, r.BigInt)(e.toString())
                : (0, s.isToBigInt)(e)
                  ? e.toBigInt()
                  : (0, a.isToBn)(e)
                    ? (0, r.BigInt)(e.toBn().toString())
                    : (0, r.BigInt)(e)
            : (0, r.BigInt)(0);
      }
    },
    5459: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isBn = i));
      var r = n(3813);
      function i(e) {
        return r.BN.isBN(e);
      }
    },
    5460: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isToBigInt = void 0));
      var r = n(3815);
      t.isToBigInt = (0, r.isOn)("toBigInt");
    },
    5461: function (e, t, n) {
      "use strict";
      function r(e) {
        return !!e && "object" === typeof e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isObject = r));
    },
    5462: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isToBn = void 0));
      var r = n(3815);
      t.isToBn = (0, r.isOn)("toBn");
    },
    5463: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isBuffer = u));
      var r = n(3191),
        i = n(5464),
        o = n(3931);
      function u(e) {
        return (
          i.hasBuffer &&
          !!e &&
          (0, o.isFunction)(e.readDoubleLE) &&
          r.xglobal.Buffer.isBuffer(e)
        );
      }
    },
    5464: function (e, t, n) {
      "use strict";
      (function (r) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hasWasm =
            t.hasProcess =
            t.hasEsm =
            t.hasDirname =
            t.hasCjs =
            t.hasBuffer =
            t.hasBigInt =
              void 0));
        var i = n(3385),
          o = n(3191);
        t.hasBigInt =
          "function" === typeof i.BigInt &&
          "function" === typeof i.BigInt.asIntN;
        const u = (t.hasCjs = "undefined" !== typeof e);
        ((t.hasDirname = "undefined" !== typeof r),
          (t.hasEsm = !u),
          (t.hasWasm = "undefined" !== typeof WebAssembly),
          (t.hasBuffer =
            "function" === typeof o.xglobal.Buffer &&
            "function" === typeof o.xglobal.Buffer.isBuffer),
          (t.hasProcess = "object" === typeof o.xglobal.process));
      }).call(this, "/");
    },
    5465: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringToU8a = o));
      var r = n(6443);
      const i = new r.TextEncoder();
      function o(e) {
        return e ? i.encode(e.toString()) : new Uint8Array();
      }
    },
    5466: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.u8aToHex = u));
      const r = new Array(256),
        i = new Array(65536);
      for (let s = 0; s < 256; s++) r[s] = s.toString(16).padStart(2, "0");
      for (let s = 0; s < 256; s++) {
        const e = s << 8;
        for (let t = 0; t < 256; t++) i[e | t] = r[s] + r[t];
      }
      function o(e, t) {
        const n = (e.length % 2) | 0,
          o = (e.length - n) | 0;
        for (let r = 0; r < o; r += 2) t += i[(e[r] << 8) | e[r + 1]];
        return (n && (t += r[0 | e[o]]), t);
      }
      function u(e, t, n) {
        (void 0 === t && (t = -1), void 0 === n && (n = !0));
        const r = n ? "0x" : "";
        if (null === e || void 0 === e || !e.length) return r;
        if (t > 0) {
          const n = Math.ceil(t / 8);
          if (e.length > n)
            return `${o(e.subarray(0, n / 2), r)}…${o(e.subarray(e.length - n / 2), "")}`;
        }
        return o(e, r);
      }
    },
    5467: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        BN: !0,
        bnFromHex: !0,
        bnMax: !0,
        bnMin: !0,
        bnSqrt: !0,
        bnToBn: !0,
        bnToHex: !0,
        bnToU8a: !0,
      };
      (Object.defineProperty(t, "BN", {
        enumerable: !0,
        get: function () {
          return i.BN;
        },
      }),
        Object.defineProperty(t, "bnFromHex", {
          enumerable: !0,
          get: function () {
            return o.bnFromHex;
          },
        }),
        Object.defineProperty(t, "bnMax", {
          enumerable: !0,
          get: function () {
            return u.bnMax;
          },
        }),
        Object.defineProperty(t, "bnMin", {
          enumerable: !0,
          get: function () {
            return u.bnMin;
          },
        }),
        Object.defineProperty(t, "bnSqrt", {
          enumerable: !0,
          get: function () {
            return s.bnSqrt;
          },
        }),
        Object.defineProperty(t, "bnToBn", {
          enumerable: !0,
          get: function () {
            return a.bnToBn;
          },
        }),
        Object.defineProperty(t, "bnToHex", {
          enumerable: !0,
          get: function () {
            return l.bnToHex;
          },
        }),
        Object.defineProperty(t, "bnToU8a", {
          enumerable: !0,
          get: function () {
            return c.bnToU8a;
          },
        }));
      var i = n(3813),
        o = n(9250),
        u = n(9251),
        s = n(9252),
        a = n(3933),
        l = n(9253),
        c = n(6453),
        f = n(6452);
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
    },
    5468: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hexStripPrefix = i));
      var r = n(3814);
      function i(e) {
        if (!e || "0x" === e) return "";
        if (r.REGEX_HEX_PREFIXED.test(e)) return e.substring(2);
        if (r.REGEX_HEX_NOPREFIX.test(e)) return e;
        throw new Error(`Expected hex value to convert, found '${e}'`);
      }
    },
    5469: function (e, t, n) {
      "use strict";
      function r(e) {
        return "bigint" === typeof e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isBigInt = r));
    },
    5470: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatDecimal = i));
      const r = new RegExp("(\\d+?)(?=(\\d{3})+(?!\\d)|$)", "g");
      function i(e, t) {
        void 0 === t && (t = ",");
        const n = e[0].startsWith("-"),
          i = n ? e.substring(1).match(r) : e.match(r);
        return i ? `${n ? "-" : ""}${i.join(t)}` : e;
      }
    },
    5471: function (e, t, n) {
      "use strict";
      function r(e) {
        return "string" === typeof e || e instanceof String;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isString = r));
    },
    5472: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringify = o));
      var r = n(5469);
      function i(e, t) {
        return (0, r.isBigInt)(t) ? t.toString() : t;
      }
      function o(e, t) {
        return JSON.stringify(e, i, t);
      }
    },
    6442: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TextDecoder = t.packageInfo = void 0));
      const r = n(3191),
        i = n(9221);
      var o = n(9222);
      (Object.defineProperty(t, "packageInfo", {
        enumerable: !0,
        get: function () {
          return o.packageInfo;
        },
      }),
        (t.TextDecoder = (0, r.extractGlobal)("TextDecoder", i.TextDecoder)));
    },
    6443: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TextEncoder = t.packageInfo = void 0));
      const r = n(3191),
        i = n(9223);
      var o = n(9224);
      (Object.defineProperty(t, "packageInfo", {
        enumerable: !0,
        get: function () {
          return o.packageInfo;
        },
      }),
        (t.TextEncoder = (0, r.extractGlobal)("TextEncoder", i.TextEncoder)));
    },
    6444: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.POLKADOTJS_DISABLE_ESM_CJS_WARNING_FLAG = void 0),
        (t.detectPackage = d));
      var r = n(3191),
        i = n(3931);
      const o =
          "Either remove and explicitly install matching versions or dedupe using your package manager.\nThe following conflicting packages were found:",
        u = (t.POLKADOTJS_DISABLE_ESM_CJS_WARNING_FLAG =
          "POLKADOTJS_DISABLE_ESM_CJS_WARNING");
      function s(e) {
        const t = r.xglobal;
        return (
          t.__polkadotjs || (t.__polkadotjs = {}),
          t.__polkadotjs[e] || (t.__polkadotjs[e] = []),
          t.__polkadotjs[e]
        );
      }
      function a(e, t) {
        let n = 0;
        for (let r = 0, i = e.length; r < i; r++)
          n = Math.max(n, e[r].version.length);
        return e
          .map((e) => "\t" + t(e.version.padEnd(n), e).join("\t"))
          .join("\n");
      }
      function l(e, t) {
        let { name: n } = t;
        return [e, n];
      }
      function c(e, t) {
        let n,
          { path: r, type: i } = t;
        if (r && r.length >= 5) {
          const e = r.indexOf("node_modules");
          n = -1 === e ? r : r.substring(e);
        } else n = "<unknown>";
        return [`${("" + (i || "")).padStart(3)} ${e}`, n];
      }
      function f(e, t) {
        if (e) return e;
        if ((0, i.isFunction)(t))
          try {
            return t() || "";
          } catch {
            return "";
          }
        return t || "";
      }
      function h(e, t, n) {
        console.warn(`${e}\n${o}\n${a(t, n)}`);
      }
      function d(e, t, n) {
        var i, o;
        let { name: a, path: d, type: p, version: m } = e;
        if ((void 0 === n && (n = []), !a.startsWith("@polkadot")))
          throw new Error("Invalid package descriptor " + a);
        const g = s(a);
        g.push({ path: f(d, t), type: p, version: m });
        const b = g.every((e) => e.version === m),
          v =
            "1" ===
            (null === (i = r.xglobal.process) ||
            void 0 === i ||
            null === (o = i.env) ||
            void 0 === o
              ? void 0
              : o[u]),
          y = 1 !== g.length,
          M = v && b;
        if (y && !M)
          h(
            a +
              " has multiple versions, ensure that there is only one installed.",
            g,
            c,
          );
        else {
          const e = n.filter((e) => e && e.version !== m);
          e.length &&
            h(
              `${a} requires direct dependencies exactly matching version ${m}.`,
              e,
              l,
            );
        }
      }
    },
    6445: function (e, t, n) {
      "use strict";
      function r(e) {
        return function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          const i = n.length;
          if (0 === i) throw new Error("Must provide one or more arguments");
          let o = n[0];
          for (let u = 1; u < i; u++) e(n[u], o) && (o = n[u]);
          return o;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createCmp = r));
    },
    6446: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hexToBigInt = u));
      var r = n(3385),
        i = n(6447),
        o = n(4528);
      function u(e, t) {
        let { isLe: n = !1, isNegative: u = !1 } = void 0 === t ? {} : t;
        return e && "0x" !== e
          ? (0, i.u8aToBigInt)((0, o.hexToU8a)(e), { isLe: n, isNegative: u })
          : (0, r.BigInt)(0);
      }
    },
    6447: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.u8aToBigInt = a));
      var r = n(3385),
        i = n(4760);
      const o = (0, r.BigInt)(256),
        u = (0, r.BigInt)(65536),
        s = (0, r.BigInt)("0x10000000000000000");
      function a(e, t) {
        let { isLe: n = !0, isNegative: a = !1 } = void 0 === t ? {} : t;
        n || (e = e.slice().reverse());
        const l = e.length;
        if (a && l && 128 & e[l - 1]) {
          switch (l) {
            case 0:
              return (0, r.BigInt)(0);
            case 1:
              return (0, r.BigInt)(-1 * (255 ^ e[0]) - 1);
            case 2:
              return (0, r.BigInt)(-1 * ((e[0] + (e[1] << 8)) ^ 65535) - 1);
            case 4:
              return (0, r.BigInt)(
                -1 *
                  ((e[0] + (e[1] << 8) + (e[2] << 16) + 16777216 * e[3]) ^
                    4294967295) -
                  1,
              );
          }
          const t = new DataView(e.buffer, e.byteOffset);
          if (8 === l) return t.getBigInt64(0, !0);
          let n = (0, r.BigInt)(0);
          const s = l % 2;
          for (let e = l - 2; e >= s; e -= 2)
            n = n * u + (0, r.BigInt)(65535 ^ t.getUint16(e, !0));
          return (
            s && (n = n * o + (0, r.BigInt)(255 ^ e[0])),
            n * -i._1n - i._1n
          );
        }
        switch (l) {
          case 0:
            return (0, r.BigInt)(0);
          case 1:
            return (0, r.BigInt)(e[0]);
          case 2:
            return (0, r.BigInt)(e[0] + (e[1] << 8));
          case 4:
            return (0, r.BigInt)(
              e[0] + (e[1] << 8) + (e[2] << 16) + 16777216 * e[3],
            );
        }
        const c = new DataView(e.buffer, e.byteOffset);
        switch (l) {
          case 8:
            return c.getBigUint64(0, !0);
          case 16:
            return c.getBigUint64(8, !0) * s + c.getBigUint64(0, !0);
          default: {
            let t = (0, r.BigInt)(0);
            const n = l % 2;
            for (let e = l - 2; e >= n; e -= 2)
              t = t * u + (0, r.BigInt)(c.getUint16(e, !0));
            return (n && (t = t * o + (0, r.BigInt)(e[0])), t);
          }
        }
      }
    },
    6448: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.u8aCmp = i));
      var r = n(3595);
      function i(e, t) {
        const n = (0, r.u8aToU8a)(e),
          i = (0, r.u8aToU8a)(t);
        let o = 0;
        while (1) {
          const e = o >= n.length,
            t = o >= i.length;
          if (e && t) return 0;
          if (e) return -1;
          if (t) return 1;
          if (n[o] !== i[o]) return n[o] > i[o] ? 1 : -1;
          o++;
        }
      }
    },
    6449: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.u8aConcat = i),
        (t.u8aConcatStrict = o));
      var r = n(3595);
      function i() {
        const e = arguments.length,
          t = new Array(e);
        let n = 0;
        for (let i = 0; i < e; i++)
          ((t[i] = (0, r.u8aToU8a)(
            i < 0 || arguments.length <= i ? void 0 : arguments[i],
          )),
            (n += t[i].length));
        return o(t, n);
      }
      function o(e, t) {
        void 0 === t && (t = 0);
        const n = e.length;
        let r = 0;
        if (!t) for (let o = 0; o < n; o++) t += e[o].length;
        const i = new Uint8Array(t);
        for (let o = 0; o < n; o++) (i.set(e[o], r), (r += e[o].length));
        return i;
      }
    },
    6450: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.u8aToString = o));
      var r = n(6442);
      const i = new r.TextDecoder("utf-8");
      function o(e) {
        return e ? i.decode(e) : "";
      }
    },
    6451: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.nToU8a = l));
      var r = n(3385),
        i = n(4760),
        o = n(5458);
      const u = (0, r.BigInt)(256),
        s = (0, r.BigInt)(255);
      function a(e, t, n) {
        const r = [],
          o = n && e < i._0n;
        o && (e = (e + i._1n) * -i._1n);
        while (e !== i._0n) {
          const n = e % u,
            i = Number(o ? n ^ s : n);
          (t ? r.push(i) : r.unshift(i), (e = (e - n) / u));
        }
        return Uint8Array.from(r);
      }
      function l(e, t) {
        let {
          bitLength: n = -1,
          isLe: r = !0,
          isNegative: u = !1,
        } = void 0 === t ? {} : t;
        const s = (0, o.nToBigInt)(e);
        if (s === i._0n)
          return -1 === n
            ? new Uint8Array(1)
            : new Uint8Array(Math.ceil((n || 0) / 8));
        const l = a(s, r, u);
        if (-1 === n) return l;
        const c = Math.ceil((n || 0) / 8),
          f = new Uint8Array(c);
        return (u && f.fill(255), f.set(l, r ? 0 : c - l.length), f);
      }
    },
    6452: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BN_ZERO =
          t.BN_TWO =
          t.BN_THREE =
          t.BN_THOUSAND =
          t.BN_TEN =
          t.BN_SQRT_MAX_INTEGER =
          t.BN_SIX =
          t.BN_SEVEN =
          t.BN_QUINTILL =
          t.BN_ONE =
          t.BN_NINE =
          t.BN_MILLION =
          t.BN_MAX_INTEGER =
          t.BN_HUNDRED =
          t.BN_FOUR =
          t.BN_FIVE =
          t.BN_EIGHT =
          t.BN_BILLION =
            void 0));
      var r = n(3813);
      ((t.BN_ZERO = new r.BN(0)),
        (t.BN_ONE = new r.BN(1)),
        (t.BN_TWO = new r.BN(2)),
        (t.BN_THREE = new r.BN(3)),
        (t.BN_FOUR = new r.BN(4)),
        (t.BN_FIVE = new r.BN(5)),
        (t.BN_SIX = new r.BN(6)),
        (t.BN_SEVEN = new r.BN(7)),
        (t.BN_EIGHT = new r.BN(8)),
        (t.BN_NINE = new r.BN(9)),
        (t.BN_TEN = new r.BN(10)),
        (t.BN_HUNDRED = new r.BN(100)),
        (t.BN_THOUSAND = new r.BN(1e3)),
        (t.BN_MILLION = new r.BN(1e6)));
      const i = (t.BN_BILLION = new r.BN(1e9));
      ((t.BN_QUINTILL = i.mul(i)),
        (t.BN_MAX_INTEGER = new r.BN(Number.MAX_SAFE_INTEGER)),
        (t.BN_SQRT_MAX_INTEGER = new r.BN(94906265)));
    },
    6453: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.bnToU8a = o));
      var r = n(3933);
      const i = { bitLength: -1, isLe: !0, isNegative: !1 };
      function o(e, t) {
        let {
          bitLength: n = -1,
          isLe: o = !0,
          isNegative: u = !1,
        } = void 0 === t ? i : t;
        const s = (0, r.bnToBn)(e),
          a = -1 === n ? Math.ceil(s.bitLength() / 8) : Math.ceil((n || 0) / 8);
        if (!e) return -1 === n ? new Uint8Array(1) : new Uint8Array(a);
        const l = new Uint8Array(a),
          c = u ? s.toTwos(8 * a) : s;
        return (l.set(c.toArray(o ? "le" : "be", a), 0), l);
      }
    },
    6454: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.compactToU8a = c));
      var r = n(5467),
        i = n(3932);
      const o = r.BN_TWO.pow(new r.BN(6)).isub(r.BN_ONE),
        u = r.BN_TWO.pow(new r.BN(14)).isub(r.BN_ONE),
        s = r.BN_TWO.pow(new r.BN(30)).isub(r.BN_ONE),
        a = { bitLength: 16 },
        l = { bitLength: 32 };
      function c(e) {
        const t = (0, r.bnToBn)(e);
        if (t.lte(o)) return new Uint8Array([t.toNumber() << 2]);
        if (t.lte(u)) return (0, r.bnToU8a)(t.shln(2).iadd(r.BN_ONE), a);
        if (t.lte(s)) return (0, r.bnToU8a)(t.shln(2).iadd(r.BN_TWO), l);
        const n = (0, r.bnToU8a)(t);
        let c = n.length;
        while (0 === n[c - 1]) c--;
        if (c < 4)
          throw new Error(
            "Invalid length, previous checks match anything less than 2^30",
          );
        return (0, i.u8aConcatStrict)([
          new Uint8Array([3 + ((c - 4) << 2)]),
          n.subarray(0, c),
        ]);
      }
    },
    6455: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.compactFromU8a = o),
        (t.compactFromU8aLim = u));
      var r = n(5467),
        i = n(3932);
      function o(e) {
        const t = (0, i.u8aToU8a)(e);
        switch (3 & t[0]) {
          case 0:
            return [1, new r.BN(t[0] >>> 2)];
          case 1:
            return [2, new r.BN((t[0] + (t[1] << 8)) >>> 2)];
          case 2:
            return [
              4,
              new r.BN(
                (t[0] + (t[1] << 8) + (t[2] << 16) + 16777216 * t[3]) >>> 2,
              ),
            ];
          default: {
            const e = 5 + (t[0] >>> 2);
            switch (e) {
              case 5:
                return [
                  5,
                  new r.BN(t[1] + (t[2] << 8) + (t[3] << 16) + 16777216 * t[4]),
                ];
              case 6:
                return [
                  6,
                  new r.BN(
                    t[1] +
                      (t[2] << 8) +
                      (t[3] << 16) +
                      16777216 * (t[4] + (t[5] << 8)),
                  ),
                ];
              case 7:
                return [
                  7,
                  new r.BN(
                    t[1] +
                      (t[2] << 8) +
                      (t[3] << 16) +
                      16777216 * (t[4] + (t[5] << 8) + (t[6] << 16)),
                  ),
                ];
              default:
                return [e, (0, i.u8aToBn)(t.subarray(1, e))];
            }
          }
        }
      }
      function u(e) {
        switch (3 & e[0]) {
          case 0:
            return [1, e[0] >>> 2];
          case 1:
            return [2, (e[0] + (e[1] << 8)) >>> 2];
          case 2:
            return [
              4,
              (e[0] + (e[1] << 8) + (e[2] << 16) + 16777216 * e[3]) >>> 2,
            ];
          default:
            switch (5 + (e[0] >>> 2)) {
              case 5:
                return [5, e[1] + (e[2] << 8) + (e[3] << 16) + 16777216 * e[4]];
              case 6:
                return [
                  6,
                  e[1] +
                    (e[2] << 8) +
                    (e[3] << 16) +
                    16777216 * (e[4] + (e[5] << 8)),
                ];
              case 7:
                return [
                  7,
                  e[1] +
                    (e[2] << 8) +
                    (e[3] << 16) +
                    16777216 * (e[4] + (e[5] << 8) + (e[6] << 16)),
                ];
              default:
                throw new Error("Compact input is > Number.MAX_SAFE_INTEGER");
            }
        }
      }
    },
    6456: function (e, t, n) {
      "use strict";
      function r(e) {
        return "boolean" === typeof e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBoolean = r));
    },
    6457: function (e, t, n) {
      "use strict";
      function r(e) {
        return {
          decimal: (0.1).toLocaleString(e).substring(1, 2),
          thousand: (1e3).toLocaleString(e).substring(1, 2),
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSeparator = r));
    },
    6458: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SI_MID = t.SI = void 0),
        (t.calcSi = u),
        (t.findSi = o));
      const r = (t.SI_MID = 8),
        i = (t.SI = [
          { power: -24, text: "yocto", value: "y" },
          { power: -21, text: "zepto", value: "z" },
          { power: -18, text: "atto", value: "a" },
          { power: -15, text: "femto", value: "f" },
          { power: -12, text: "pico", value: "p" },
          { power: -9, text: "nano", value: "n" },
          { power: -6, text: "micro", value: "µ" },
          { power: -3, text: "milli", value: "m" },
          { power: 0, text: "Unit", value: "-" },
          { power: 3, text: "Kilo", value: "k" },
          { power: 6, text: "Mill", value: "M" },
          { power: 9, text: "Bill", value: "B" },
          { power: 12, text: "Tril", value: "T" },
          { power: 15, text: "Peta", value: "P" },
          { power: 18, text: "Exa", value: "E" },
          { power: 21, text: "Zeta", value: "Z" },
          { power: 24, text: "Yotta", value: "Y" },
        ]);
      function o(e) {
        for (let t = 0, n = i.length; t < n; t++)
          if (i[t].value === e) return i[t];
        return i[r];
      }
      function u(e, t, n) {
        if (n) return o(n);
        const u = r - 1 + Math.ceil((e.length - t) / 3);
        return i[u] || i[u < 0 ? 0 : i.length - 1];
      }
    },
    6459: function (e, t, n) {
      "use strict";
      function r(e) {
        return e.toString().padStart(2, "0");
      }
      function i(e) {
        const t = e.getFullYear().toString(),
          n = r(e.getMonth() + 1),
          i = r(e.getDate()),
          o = r(e.getHours()),
          u = r(e.getMinutes()),
          s = r(e.getSeconds());
        return `${t}-${n}-${i} ${o}:${u}:${s}`;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatDate = i));
    },
    6460: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hexAddPrefix = i));
      var r = n(6461);
      function i(e) {
        return e && (0, r.hexHasPrefix)(e)
          ? e
          : `0x${e && e.length % 2 === 1 ? "0" : ""}${e || ""}`;
      }
    },
    6461: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hexHasPrefix = i));
      var r = n(3814);
      function i(e) {
        return !!e && (0, r.isHex)(e, -1);
      }
    },
    6462: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hexFixLength = o));
      var r = n(6460),
        i = n(5468);
      function o(e, t, n) {
        (void 0 === t && (t = -1), void 0 === n && (n = !1));
        const o = Math.ceil(t / 4),
          u = o + 2;
        return (0, r.hexAddPrefix)(
          -1 === t || e.length === u || (!n && e.length < u)
            ? (0, i.hexStripPrefix)(e)
            : e.length > u
              ? (0, i.hexStripPrefix)(e).slice(-1 * o)
              : `${"0".repeat(o)}${(0, i.hexStripPrefix)(e)}`.slice(-1 * o),
        );
      }
    },
    6463: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isClass = void 0));
      var r = n(3815);
      t.isClass = (0, r.isOnFunction)("isPrototypeOf", "hasOwnProperty");
    },
    6464: function (e, t, n) {
      "use strict";
      function r(e) {
        return e;
      }
      function i() {}
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.identity = r),
        (t.noop = i));
    },
    6465: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.numberToHex = i));
      var r = n(6462);
      function i(e, t) {
        void 0 === t && (t = -1);
        const n = (!e || Number.isNaN(e) ? 0 : e).toString(16);
        return (0, r.hexFixLength)(n.length % 2 ? "0" + n : n, t, !0);
      }
    },
    6466: function (e, t, n) {
      "use strict";
      function r(e) {
        for (
          let t = 0, n = arguments.length <= 1 ? 0 : arguments.length - 1;
          t < n;
          t++
        ) {
          const n =
            t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
          if (n)
            if ("function" === typeof n.entries)
              for (const [t, r] of n.entries()) e[t] = r;
            else Object.assign(e, n);
        }
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.objectSpread = r));
    },
    6467: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringPascalCase =
          t.stringCamelCase =
          t.CC_TO_UP =
          t.CC_TO_LO =
            void 0));
      const r = (t.CC_TO_UP = new Array(256)),
        i = (t.CC_TO_LO = new Array(256));
      for (let s = 0, a = r.length; s < a; s++)
        ((i[s] = String.fromCharCode(s).toLowerCase()),
          (r[s] = String.fromCharCode(s).toUpperCase()));
      function o(e) {
        return (
          e.slice(0, e.length - 1).toLowerCase() + r[e.charCodeAt(e.length - 1)]
        );
      }
      function u(e) {
        return (t) => {
          const n = t
            .replace(/[-_., ]+/g, " ")
            .trim()
            .split(" ");
          let r = "";
          for (let i = 0, u = n.length; i < u; i++) {
            const t = n[i];
            r += e(
              /^[\dA-Z]+$/.test(t)
                ? t.toLowerCase()
                : t.replace(/^[\dA-Z]{2,}[^a-z]/, o),
              i,
            );
          }
          return r;
        };
      }
      ((t.stringCamelCase = u(
        (e, t) => (t ? r[e.charCodeAt(0)] : i[e.charCodeAt(0)]) + e.slice(1),
      )),
        (t.stringPascalCase = u((e) => r[e.charCodeAt(0)] + e.slice(1))));
    },
    9218: function (e, t, n) {
      "use strict";
      var r = n(9),
        i = r(n(9219)),
        o = n(4759),
        u = n(6444);
      (0, u.detectPackage)(o.packageInfo, null, i.default);
    },
    9219: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = n(6442),
        i = n(6443);
      t.default = [r.packageInfo, i.packageInfo];
    },
    9220: function (e, t, n) {
      function r(e) {
        const t = n.p;
        let r = "";
        return (
          (!t || t.indexOf("://") < 0) &&
            (r += window.location.protocol + "//" + window.location.host),
          (r += t || "/"),
          r + e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.packageInfo = void 0));
      t.packageInfo = {
        name: "@polkadot/x-global",
        path:
          (r("node_modules/@polkadot/x-global/packageInfo.js"),
          { url: r("node_modules/@polkadot/x-global/packageInfo.js") }.url
            ? new URL(
                { url: r("node_modules/@polkadot/x-global/packageInfo.js") }
                  .url,
              ).pathname.substring(
                0,
                new URL(
                  { url: r("node_modules/@polkadot/x-global/packageInfo.js") }
                    .url,
                ).pathname.lastIndexOf("/") + 1,
              )
            : "auto"),
        type: "esm",
        version: "12.6.2",
      };
    },
    9221: function (e, t, n) {
      "use strict";
      var r = n(128);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TextDecoder = void 0));
      class TextDecoder {
        constructor(e) {
          (r(this, "__encoding", void 0), (this.__encoding = e));
        }
        decode(e) {
          let t = "";
          for (let n = 0, r = e.length; n < r; n++)
            t += String.fromCharCode(e[n]);
          return t;
        }
      }
      t.TextDecoder = TextDecoder;
    },
    9222: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.packageInfo = void 0),
          (t.packageInfo = {
            name: "@polkadot/x-textdecoder",
            path: e,
            type: "cjs",
            version: "12.6.2",
          }));
      }).call(this, "/");
    },
    9223: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TextEncoder = void 0));
      class TextEncoder {
        encode(e) {
          const t = e.length,
            n = new Uint8Array(t);
          for (let r = 0; r < t; r++) n[r] = e.charCodeAt(r);
          return n;
        }
      }
      t.TextEncoder = TextEncoder;
    },
    9224: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.packageInfo = void 0),
          (t.packageInfo = {
            name: "@polkadot/x-textencoder",
            path: e,
            type: "cjs",
            version: "12.6.2",
          }));
      }).call(this, "/");
    },
    9225: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = { packageInfo: !0 };
      Object.defineProperty(t, "packageInfo", {
        enumerable: !0,
        get: function () {
          return i.packageInfo;
        },
      });
      var i = n(4759),
        o = n(9226);
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
      var u = n(9234);
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
      var s = n(9235);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var a = n(5467);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var l = n(9254);
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
      var c = n(9256);
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
      var f = n(9259);
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
      var h = n(9260);
      Object.keys(h).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === h[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return h[e];
              },
            }));
      });
      var d = n(9262);
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
      var p = n(5464);
      Object.keys(p).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === p[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return p[e];
              },
            }));
      });
      var m = n(9266);
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
      var g = n(9269);
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
      var b = n(9288);
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
      var v = n(9289);
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
      var y = n(9290);
      Object.keys(y).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === y[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return y[e];
              },
            }));
      });
      var M = n(9291);
      Object.keys(M).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === M[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return M[e];
              },
            }));
      });
      var _ = n(6464);
      Object.keys(_).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === _[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return _[e];
              },
            }));
      });
      var w = n(9292);
      Object.keys(w).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === w[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return w[e];
              },
            }));
      });
      var O = n(9294);
      Object.keys(O).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === O[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return O[e];
              },
            }));
      });
      var j = n(9301);
      Object.keys(j).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === j[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return j[e];
              },
            }));
      });
      var P = n(9302);
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
      var B = n(5472);
      Object.keys(B).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === B[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return B[e];
              },
            }));
      });
      var x = n(3932);
      Object.keys(x).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(r, e) ||
            (e in t && t[e] === x[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return x[e];
              },
            }));
      });
      var T = n(6444);
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
    },
    9226: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "arrayChunk", {
          enumerable: !0,
          get: function () {
            return r.arrayChunk;
          },
        }),
        Object.defineProperty(t, "arrayFilter", {
          enumerable: !0,
          get: function () {
            return i.arrayFilter;
          },
        }),
        Object.defineProperty(t, "arrayFlatten", {
          enumerable: !0,
          get: function () {
            return o.arrayFlatten;
          },
        }),
        Object.defineProperty(t, "arrayRange", {
          enumerable: !0,
          get: function () {
            return u.arrayRange;
          },
        }),
        Object.defineProperty(t, "arrayShuffle", {
          enumerable: !0,
          get: function () {
            return s.arrayShuffle;
          },
        }),
        Object.defineProperty(t, "arrayUnzip", {
          enumerable: !0,
          get: function () {
            return a.arrayUnzip;
          },
        }),
        Object.defineProperty(t, "arrayZip", {
          enumerable: !0,
          get: function () {
            return l.arrayZip;
          },
        }));
      var r = n(9227),
        i = n(9228),
        o = n(9229),
        u = n(9230),
        s = n(9231),
        a = n(9232),
        l = n(9233);
    },
    9227: function (e, t, n) {
      "use strict";
      function r(e, t) {
        const n = Math.ceil(e.length / t);
        if (1 === n) return [e];
        const r = Array(n);
        for (let i = 0; i < n; i++) {
          const n = i * t;
          r[i] = e.slice(n, n + t);
        }
        return r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.arrayChunk = r));
    },
    9228: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          void 0 === t && (t = !0),
          e.filter((e) => void 0 !== e && (t || null !== e))
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.arrayFilter = r));
    },
    9229: function (e, t, n) {
      "use strict";
      function r(e) {
        const t = e.length;
        if (0 === t) return [];
        if (1 === t) return e[0];
        let n = 0;
        for (let o = 0; o < t; o++) n += e[o].length;
        const r = new Array(n);
        let i = -1;
        for (let o = 0; o < t; o++) {
          const t = e[o];
          for (let e = 0, n = t.length; e < n; e++) r[++i] = t[e];
        }
        return r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.arrayFlatten = r));
    },
    9230: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if ((void 0 === t && (t = 0), e <= 0))
          throw new Error("Expected non-zero, positive number as a range size");
        const n = new Array(e);
        for (let r = 0; r < e; r++) n[r] = r + t;
        return n;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.arrayRange = r));
    },
    9231: function (e, t, n) {
      "use strict";
      function r(e) {
        const t = e.slice();
        let n = t.length;
        if (1 === n) return t;
        while (0 !== n) {
          const e = ~~(Math.random() * n);
          (n--, ([t[n], t[e]] = [t[e], t[n]]));
        }
        return t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.arrayShuffle = r));
    },
    9232: function (e, t, n) {
      "use strict";
      function r(e) {
        const t = e.length,
          n = new Array(t),
          r = new Array(t);
        for (let i = 0; i < t; i++) [n[i], r[i]] = e[i];
        return [n, r];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.arrayUnzip = r));
    },
    9233: function (e, t, n) {
      "use strict";
      function r(e, t) {
        const n = e.length,
          r = new Array(n);
        for (let i = 0; i < n; i++) r[i] = [e[i], t[i]];
        return r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.arrayZip = r));
    },
    9234: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.assert = i),
        (t.assertReturn = o),
        (t.assertUnreachable = u));
      var r = n(3931);
      function i(e, t) {
        if (!e) throw new Error((0, r.isFunction)(t) ? t() : t);
      }
      function o(e, t) {
        return (i(void 0 !== e && null !== e, t), e);
      }
      function u(e) {
        throw new Error(
          "This codepath should be unreachable. Unhandled input: " + e,
        );
      }
    },
    9235: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = {
        nMax: !0,
        nMin: !0,
        nSqrt: !0,
        nToBigInt: !0,
        nToHex: !0,
        nToU8a: !0,
      };
      (Object.defineProperty(t, "nMax", {
        enumerable: !0,
        get: function () {
          return i.nMax;
        },
      }),
        Object.defineProperty(t, "nMin", {
          enumerable: !0,
          get: function () {
            return i.nMin;
          },
        }),
        Object.defineProperty(t, "nSqrt", {
          enumerable: !0,
          get: function () {
            return o.nSqrt;
          },
        }),
        Object.defineProperty(t, "nToBigInt", {
          enumerable: !0,
          get: function () {
            return u.nToBigInt;
          },
        }),
        Object.defineProperty(t, "nToHex", {
          enumerable: !0,
          get: function () {
            return s.nToHex;
          },
        }),
        Object.defineProperty(t, "nToU8a", {
          enumerable: !0,
          get: function () {
            return a.nToU8a;
          },
        }));
      var i = n(9236),
        o = n(9237),
        u = n(5458),
        s = n(9241),
        a = n(6451),
        l = n(4760);
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
    },
    9236: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.nMin = t.nMax = void 0));
      var r = n(6445);
      ((t.nMax = (0, r.createCmp)((e, t) => e > t)),
        (t.nMin = (0, r.createCmp)((e, t) => e < t)));
    },
    9237: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.nSqrt = u));
      var r = n(3385),
        i = n(4760),
        o = n(5458);
      function u(e) {
        const t = (0, o.nToBigInt)(e);
        if (t < i._0n)
          throw new Error("square root of negative numbers is not supported");
        if (t <= i._2pow53n) return (0, r.BigInt)(~~Math.sqrt(Number(t)));
        let n = i._sqrt2pow53n;
        while (1) {
          const e = (t / n + n) >> i._1n;
          if (n === e || n === e - i._1n) return n;
          n = e;
        }
      }
    },
    9238: function (e, t, n) {
      function r(e) {
        const t = n.p;
        let r = "";
        return (
          (!t || t.indexOf("://") < 0) &&
            (r += window.location.protocol + "//" + window.location.host),
          (r += t || "/"),
          r + e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.packageInfo = void 0));
      t.packageInfo = {
        name: "@polkadot/x-bigint",
        path:
          (r("node_modules/@polkadot/x-bigint/packageInfo.js"),
          { url: r("node_modules/@polkadot/x-bigint/packageInfo.js") }.url
            ? new URL(
                { url: r("node_modules/@polkadot/x-bigint/packageInfo.js") }
                  .url,
              ).pathname.substring(
                0,
                new URL(
                  { url: r("node_modules/@polkadot/x-bigint/packageInfo.js") }
                    .url,
                ).pathname.lastIndexOf("/") + 1,
              )
            : "auto"),
        type: "esm",
        version: "12.6.2",
      };
    },
    9239: function (e, t, n) {
      (function (e) {
        (function (e, t) {
          "use strict";
          function r(e, t) {
            if (!e) throw new Error(t || "Assertion failed");
          }
          function i(e, t) {
            e.super_ = t;
            var n = function () {};
            ((n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e));
          }
          function o(e, t, n) {
            if (o.isBN(e)) return e;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== e &&
                (("le" !== t && "be" !== t) || ((n = t), (t = 10)),
                this._init(e || 0, t || 10, n || "be")));
          }
          var u;
          ("object" === typeof e ? (e.exports = o) : (t.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            u =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : n(9240).Buffer;
          } catch (I) {}
          function s(e, t) {
            var n = e.charCodeAt(t);
            return n >= 48 && n <= 57
              ? n - 48
              : n >= 65 && n <= 70
                ? n - 55
                : n >= 97 && n <= 102
                  ? n - 87
                  : void r(!1, "Invalid character in " + e);
          }
          function a(e, t, n) {
            var r = s(e, n);
            return (n - 1 >= t && (r |= s(e, n - 1) << 4), r);
          }
          function l(e, t, n, i) {
            for (
              var o = 0, u = 0, s = Math.min(e.length, n), a = t;
              a < s;
              a++
            ) {
              var l = e.charCodeAt(a) - 48;
              ((o *= i),
                (u = l >= 49 ? l - 49 + 10 : l >= 17 ? l - 17 + 10 : l),
                r(l >= 0 && u < i, "Invalid character"),
                (o += u));
            }
            return o;
          }
          function c(e, t) {
            ((e.words = t.words),
              (e.length = t.length),
              (e.negative = t.negative),
              (e.red = t.red));
          }
          if (
            ((o.isBN = function (e) {
              return (
                e instanceof o ||
                (null !== e &&
                  "object" === typeof e &&
                  e.constructor.wordSize === o.wordSize &&
                  Array.isArray(e.words))
              );
            }),
            (o.max = function (e, t) {
              return e.cmp(t) > 0 ? e : t;
            }),
            (o.min = function (e, t) {
              return e.cmp(t) < 0 ? e : t;
            }),
            (o.prototype._init = function (e, t, n) {
              if ("number" === typeof e) return this._initNumber(e, t, n);
              if ("object" === typeof e) return this._initArray(e, t, n);
              ("hex" === t && (t = 16),
                r(t === (0 | t) && t >= 2 && t <= 36),
                (e = e.toString().replace(/\s+/g, "")));
              var i = 0;
              ("-" === e[0] && (i++, (this.negative = 1)),
                i < e.length &&
                  (16 === t
                    ? this._parseHex(e, i, n)
                    : (this._parseBase(e, t, i),
                      "le" === n && this._initArray(this.toArray(), t, n))));
            }),
            (o.prototype._initNumber = function (e, t, n) {
              (e < 0 && ((this.negative = 1), (e = -e)),
                e < 67108864
                  ? ((this.words = [67108863 & e]), (this.length = 1))
                  : e < 4503599627370496
                    ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                      (this.length = 2))
                    : (r(e < 9007199254740992),
                      (this.words = [
                        67108863 & e,
                        (e / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === n && this._initArray(this.toArray(), t, n));
            }),
            (o.prototype._initArray = function (e, t, n) {
              if ((r("number" === typeof e.length), e.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(e.length / 3)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var o,
                u,
                s = 0;
              if ("be" === n)
                for (i = e.length - 1, o = 0; i >= 0; i -= 3)
                  ((u = e[i] | (e[i - 1] << 8) | (e[i - 2] << 16)),
                    (this.words[o] |= (u << s) & 67108863),
                    (this.words[o + 1] = (u >>> (26 - s)) & 67108863),
                    (s += 24),
                    s >= 26 && ((s -= 26), o++));
              else if ("le" === n)
                for (i = 0, o = 0; i < e.length; i += 3)
                  ((u = e[i] | (e[i + 1] << 8) | (e[i + 2] << 16)),
                    (this.words[o] |= (u << s) & 67108863),
                    (this.words[o + 1] = (u >>> (26 - s)) & 67108863),
                    (s += 24),
                    s >= 26 && ((s -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (e, t, n) {
              ((this.length = Math.ceil((e.length - t) / 6)),
                (this.words = new Array(this.length)));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var i,
                o = 0,
                u = 0;
              if ("be" === n)
                for (r = e.length - 1; r >= t; r -= 2)
                  ((i = a(e, t, r) << o),
                    (this.words[u] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (u += 1), (this.words[u] |= i >>> 26))
                      : (o += 8));
              else {
                var s = e.length - t;
                for (r = s % 2 === 0 ? t + 1 : t; r < e.length; r += 2)
                  ((i = a(e, t, r) << o),
                    (this.words[u] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (u += 1), (this.words[u] |= i >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (e, t, n) {
              ((this.words = [0]), (this.length = 1));
              for (var r = 0, i = 1; i <= 67108863; i *= t) r++;
              (r--, (i = (i / t) | 0));
              for (
                var o = e.length - n,
                  u = o % r,
                  s = Math.min(o, o - u) + n,
                  a = 0,
                  c = n;
                c < s;
                c += r
              )
                ((a = l(e, c, c + r, t)),
                  this.imuln(i),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a));
              if (0 !== u) {
                var f = 1;
                for (a = l(e, c, e.length, t), c = 0; c < u; c++) f *= t;
                (this.imuln(f),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a));
              }
              this._strip();
            }),
            (o.prototype.copy = function (e) {
              e.words = new Array(this.length);
              for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
              ((e.length = this.length),
                (e.negative = this.negative),
                (e.red = this.red));
            }),
            (o.prototype._move = function (e) {
              c(e, this);
            }),
            (o.prototype.clone = function () {
              var e = new o(null);
              return (this.copy(e), e);
            }),
            (o.prototype._expand = function (e) {
              while (this.length < e) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype._strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = f;
            } catch (I) {
              o.prototype.inspect = f;
            }
          else o.prototype.inspect = f;
          function f() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var h = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            d = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            p = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (e, t) {
            var n;
            if (((e = e || 10), (t = 0 | t || 1), 16 === e || "hex" === e)) {
              n = "";
              for (var i = 0, o = 0, u = 0; u < this.length; u++) {
                var s = this.words[u],
                  a = (16777215 & ((s << i) | o)).toString(16);
                ((o = (s >>> (24 - i)) & 16777215),
                  (i += 2),
                  i >= 26 && ((i -= 26), u--),
                  (n =
                    0 !== o || u !== this.length - 1
                      ? h[6 - a.length] + a + n
                      : a + n));
              }
              0 !== o && (n = o.toString(16) + n);
              while (n.length % t !== 0) n = "0" + n;
              return (0 !== this.negative && (n = "-" + n), n);
            }
            if (e === (0 | e) && e >= 2 && e <= 36) {
              var l = d[e],
                c = p[e];
              n = "";
              var f = this.clone();
              f.negative = 0;
              while (!f.isZero()) {
                var m = f.modrn(c).toString(e);
                ((f = f.idivn(c)),
                  (n = f.isZero() ? m + n : h[l - m.length] + m + n));
              }
              this.isZero() && (n = "0" + n);
              while (n.length % t !== 0) n = "0" + n;
              return (0 !== this.negative && (n = "-" + n), n);
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var e = this.words[0];
              return (
                2 === this.length
                  ? (e += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (e += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      r(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -e : e
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            u &&
              (o.prototype.toBuffer = function (e, t) {
                return this.toArrayLike(u, e, t);
              }),
            (o.prototype.toArray = function (e, t) {
              return this.toArrayLike(Array, e, t);
            }));
          var m = function (e, t) {
            return e.allocUnsafe ? e.allocUnsafe(t) : new e(t);
          };
          function g(e) {
            for (var t = new Array(e.bitLength()), n = 0; n < t.length; n++) {
              var r = (n / 26) | 0,
                i = n % 26;
              t[n] = (e.words[r] >>> i) & 1;
            }
            return t;
          }
          function b(e, t, n) {
            n.negative = t.negative ^ e.negative;
            var r = (e.length + t.length) | 0;
            ((n.length = r), (r = (r - 1) | 0));
            var i = 0 | e.words[0],
              o = 0 | t.words[0],
              u = i * o,
              s = 67108863 & u,
              a = (u / 67108864) | 0;
            n.words[0] = s;
            for (var l = 1; l < r; l++) {
              for (
                var c = a >>> 26,
                  f = 67108863 & a,
                  h = Math.min(l, t.length - 1),
                  d = Math.max(0, l - e.length + 1);
                d <= h;
                d++
              ) {
                var p = (l - d) | 0;
                ((i = 0 | e.words[p]),
                  (o = 0 | t.words[d]),
                  (u = i * o + f),
                  (c += (u / 67108864) | 0),
                  (f = 67108863 & u));
              }
              ((n.words[l] = 0 | f), (a = 0 | c));
            }
            return (0 !== a ? (n.words[l] = 0 | a) : n.length--, n._strip());
          }
          ((o.prototype.toArrayLike = function (e, t, n) {
            this._strip();
            var i = this.byteLength(),
              o = n || Math.max(1, i);
            (r(i <= o, "byte array longer than desired length"),
              r(o > 0, "Requested array length <= 0"));
            var u = m(e, o),
              s = "le" === t ? "LE" : "BE";
            return (this["_toArrayLike" + s](u, i), u);
          }),
            (o.prototype._toArrayLikeLE = function (e, t) {
              for (var n = 0, r = 0, i = 0, o = 0; i < this.length; i++) {
                var u = (this.words[i] << o) | r;
                ((e[n++] = 255 & u),
                  n < e.length && (e[n++] = (u >> 8) & 255),
                  n < e.length && (e[n++] = (u >> 16) & 255),
                  6 === o
                    ? (n < e.length && (e[n++] = (u >> 24) & 255),
                      (r = 0),
                      (o = 0))
                    : ((r = u >>> 24), (o += 2)));
              }
              if (n < e.length) {
                e[n++] = r;
                while (n < e.length) e[n++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (e, t) {
              for (
                var n = e.length - 1, r = 0, i = 0, o = 0;
                i < this.length;
                i++
              ) {
                var u = (this.words[i] << o) | r;
                ((e[n--] = 255 & u),
                  n >= 0 && (e[n--] = (u >> 8) & 255),
                  n >= 0 && (e[n--] = (u >> 16) & 255),
                  6 === o
                    ? (n >= 0 && (e[n--] = (u >> 24) & 255), (r = 0), (o = 0))
                    : ((r = u >>> 24), (o += 2)));
              }
              if (n >= 0) {
                e[n--] = r;
                while (n >= 0) e[n--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (e) {
                  return 32 - Math.clz32(e);
                })
              : (o.prototype._countBits = function (e) {
                  var t = e,
                    n = 0;
                  return (
                    t >= 4096 && ((n += 13), (t >>>= 13)),
                    t >= 64 && ((n += 7), (t >>>= 7)),
                    t >= 8 && ((n += 4), (t >>>= 4)),
                    t >= 2 && ((n += 2), (t >>>= 2)),
                    n + t
                  );
                }),
            (o.prototype._zeroBits = function (e) {
              if (0 === e) return 26;
              var t = e,
                n = 0;
              return (
                0 === (8191 & t) && ((n += 13), (t >>>= 13)),
                0 === (127 & t) && ((n += 7), (t >>>= 7)),
                0 === (15 & t) && ((n += 4), (t >>>= 4)),
                0 === (3 & t) && ((n += 2), (t >>>= 2)),
                0 === (1 & t) && n++,
                n
              );
            }),
            (o.prototype.bitLength = function () {
              var e = this.words[this.length - 1],
                t = this._countBits(e);
              return 26 * (this.length - 1) + t;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var e = 0, t = 0; t < this.length; t++) {
                var n = this._zeroBits(this.words[t]);
                if (((e += n), 26 !== n)) break;
              }
              return e;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (e) {
              return 0 !== this.negative
                ? this.abs().inotn(e).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (e) {
              return this.testn(e - 1)
                ? this.notn(e).iaddn(1).ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (o.prototype.iuor = function (e) {
              while (this.length < e.length) this.words[this.length++] = 0;
              for (var t = 0; t < e.length; t++)
                this.words[t] = this.words[t] | e.words[t];
              return this._strip();
            }),
            (o.prototype.ior = function (e) {
              return (r(0 === (this.negative | e.negative)), this.iuor(e));
            }),
            (o.prototype.or = function (e) {
              return this.length > e.length
                ? this.clone().ior(e)
                : e.clone().ior(this);
            }),
            (o.prototype.uor = function (e) {
              return this.length > e.length
                ? this.clone().iuor(e)
                : e.clone().iuor(this);
            }),
            (o.prototype.iuand = function (e) {
              var t;
              t = this.length > e.length ? e : this;
              for (var n = 0; n < t.length; n++)
                this.words[n] = this.words[n] & e.words[n];
              return ((this.length = t.length), this._strip());
            }),
            (o.prototype.iand = function (e) {
              return (r(0 === (this.negative | e.negative)), this.iuand(e));
            }),
            (o.prototype.and = function (e) {
              return this.length > e.length
                ? this.clone().iand(e)
                : e.clone().iand(this);
            }),
            (o.prototype.uand = function (e) {
              return this.length > e.length
                ? this.clone().iuand(e)
                : e.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (e) {
              var t, n;
              this.length > e.length
                ? ((t = this), (n = e))
                : ((t = e), (n = this));
              for (var r = 0; r < n.length; r++)
                this.words[r] = t.words[r] ^ n.words[r];
              if (this !== t)
                for (; r < t.length; r++) this.words[r] = t.words[r];
              return ((this.length = t.length), this._strip());
            }),
            (o.prototype.ixor = function (e) {
              return (r(0 === (this.negative | e.negative)), this.iuxor(e));
            }),
            (o.prototype.xor = function (e) {
              return this.length > e.length
                ? this.clone().ixor(e)
                : e.clone().ixor(this);
            }),
            (o.prototype.uxor = function (e) {
              return this.length > e.length
                ? this.clone().iuxor(e)
                : e.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (e) {
              r("number" === typeof e && e >= 0);
              var t = 0 | Math.ceil(e / 26),
                n = e % 26;
              (this._expand(t), n > 0 && t--);
              for (var i = 0; i < t; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                n > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - n))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (e) {
              return this.clone().inotn(e);
            }),
            (o.prototype.setn = function (e, t) {
              r("number" === typeof e && e >= 0);
              var n = (e / 26) | 0,
                i = e % 26;
              return (
                this._expand(n + 1),
                (this.words[n] = t
                  ? this.words[n] | (1 << i)
                  : this.words[n] & ~(1 << i)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (e) {
              var t, n, r;
              if (0 !== this.negative && 0 === e.negative)
                return (
                  (this.negative = 0),
                  (t = this.isub(e)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== e.negative)
                return (
                  (e.negative = 0),
                  (t = this.isub(e)),
                  (e.negative = 1),
                  t._normSign()
                );
              this.length > e.length
                ? ((n = this), (r = e))
                : ((n = e), (r = this));
              for (var i = 0, o = 0; o < r.length; o++)
                ((t = (0 | n.words[o]) + (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & t),
                  (i = t >>> 26));
              for (; 0 !== i && o < n.length; o++)
                ((t = (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & t),
                  (i = t >>> 26));
              if (((this.length = n.length), 0 !== i))
                ((this.words[this.length] = i), this.length++);
              else if (n !== this)
                for (; o < n.length; o++) this.words[o] = n.words[o];
              return this;
            }),
            (o.prototype.add = function (e) {
              var t;
              return 0 !== e.negative && 0 === this.negative
                ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
                : 0 === e.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (t = e.sub(this)),
                    (this.negative = 1),
                    t)
                  : this.length > e.length
                    ? this.clone().iadd(e)
                    : e.clone().iadd(this);
            }),
            (o.prototype.isub = function (e) {
              if (0 !== e.negative) {
                e.negative = 0;
                var t = this.iadd(e);
                return ((e.negative = 1), t._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(e),
                  (this.negative = 1),
                  this._normSign()
                );
              var n,
                r,
                i = this.cmp(e);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((n = this), (r = e)) : ((n = e), (r = this));
              for (var o = 0, u = 0; u < r.length; u++)
                ((t = (0 | n.words[u]) - (0 | r.words[u]) + o),
                  (o = t >> 26),
                  (this.words[u] = 67108863 & t));
              for (; 0 !== o && u < n.length; u++)
                ((t = (0 | n.words[u]) + o),
                  (o = t >> 26),
                  (this.words[u] = 67108863 & t));
              if (0 === o && u < n.length && n !== this)
                for (; u < n.length; u++) this.words[u] = n.words[u];
              return (
                (this.length = Math.max(this.length, u)),
                n !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (e) {
              return this.clone().isub(e);
            }));
          var v = function (e, t, n) {
            var r,
              i,
              o,
              u = e.words,
              s = t.words,
              a = n.words,
              l = 0,
              c = 0 | u[0],
              f = 8191 & c,
              h = c >>> 13,
              d = 0 | u[1],
              p = 8191 & d,
              m = d >>> 13,
              g = 0 | u[2],
              b = 8191 & g,
              v = g >>> 13,
              y = 0 | u[3],
              M = 8191 & y,
              _ = y >>> 13,
              w = 0 | u[4],
              O = 8191 & w,
              j = w >>> 13,
              P = 0 | u[5],
              B = 8191 & P,
              x = P >>> 13,
              T = 0 | u[6],
              N = 8191 & T,
              I = T >>> 13,
              E = 0 | u[7],
              A = 8191 & E,
              S = E >>> 13,
              U = 0 | u[8],
              k = 8191 & U,
              L = U >>> 13,
              C = 0 | u[9],
              R = 8191 & C,
              F = C >>> 13,
              $ = 0 | s[0],
              H = 8191 & $,
              D = $ >>> 13,
              q = 0 | s[1],
              W = 8191 & q,
              X = q >>> 13,
              Z = 0 | s[2],
              G = 8191 & Z,
              z = Z >>> 13,
              V = 0 | s[3],
              J = 8191 & V,
              K = V >>> 13,
              Q = 0 | s[4],
              Y = 8191 & Q,
              ee = Q >>> 13,
              te = 0 | s[5],
              ne = 8191 & te,
              re = te >>> 13,
              ie = 0 | s[6],
              oe = 8191 & ie,
              ue = ie >>> 13,
              se = 0 | s[7],
              ae = 8191 & se,
              le = se >>> 13,
              ce = 0 | s[8],
              fe = 8191 & ce,
              he = ce >>> 13,
              de = 0 | s[9],
              pe = 8191 & de,
              me = de >>> 13;
            ((n.negative = e.negative ^ t.negative),
              (n.length = 19),
              (r = Math.imul(f, H)),
              (i = Math.imul(f, D)),
              (i = (i + Math.imul(h, H)) | 0),
              (o = Math.imul(h, D)));
            var ge = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (ge >>> 26)) | 0),
              (ge &= 67108863),
              (r = Math.imul(p, H)),
              (i = Math.imul(p, D)),
              (i = (i + Math.imul(m, H)) | 0),
              (o = Math.imul(m, D)),
              (r = (r + Math.imul(f, W)) | 0),
              (i = (i + Math.imul(f, X)) | 0),
              (i = (i + Math.imul(h, W)) | 0),
              (o = (o + Math.imul(h, X)) | 0));
            var be = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (be >>> 26)) | 0),
              (be &= 67108863),
              (r = Math.imul(b, H)),
              (i = Math.imul(b, D)),
              (i = (i + Math.imul(v, H)) | 0),
              (o = Math.imul(v, D)),
              (r = (r + Math.imul(p, W)) | 0),
              (i = (i + Math.imul(p, X)) | 0),
              (i = (i + Math.imul(m, W)) | 0),
              (o = (o + Math.imul(m, X)) | 0),
              (r = (r + Math.imul(f, G)) | 0),
              (i = (i + Math.imul(f, z)) | 0),
              (i = (i + Math.imul(h, G)) | 0),
              (o = (o + Math.imul(h, z)) | 0));
            var ve = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (ve >>> 26)) | 0),
              (ve &= 67108863),
              (r = Math.imul(M, H)),
              (i = Math.imul(M, D)),
              (i = (i + Math.imul(_, H)) | 0),
              (o = Math.imul(_, D)),
              (r = (r + Math.imul(b, W)) | 0),
              (i = (i + Math.imul(b, X)) | 0),
              (i = (i + Math.imul(v, W)) | 0),
              (o = (o + Math.imul(v, X)) | 0),
              (r = (r + Math.imul(p, G)) | 0),
              (i = (i + Math.imul(p, z)) | 0),
              (i = (i + Math.imul(m, G)) | 0),
              (o = (o + Math.imul(m, z)) | 0),
              (r = (r + Math.imul(f, J)) | 0),
              (i = (i + Math.imul(f, K)) | 0),
              (i = (i + Math.imul(h, J)) | 0),
              (o = (o + Math.imul(h, K)) | 0));
            var ye = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (ye >>> 26)) | 0),
              (ye &= 67108863),
              (r = Math.imul(O, H)),
              (i = Math.imul(O, D)),
              (i = (i + Math.imul(j, H)) | 0),
              (o = Math.imul(j, D)),
              (r = (r + Math.imul(M, W)) | 0),
              (i = (i + Math.imul(M, X)) | 0),
              (i = (i + Math.imul(_, W)) | 0),
              (o = (o + Math.imul(_, X)) | 0),
              (r = (r + Math.imul(b, G)) | 0),
              (i = (i + Math.imul(b, z)) | 0),
              (i = (i + Math.imul(v, G)) | 0),
              (o = (o + Math.imul(v, z)) | 0),
              (r = (r + Math.imul(p, J)) | 0),
              (i = (i + Math.imul(p, K)) | 0),
              (i = (i + Math.imul(m, J)) | 0),
              (o = (o + Math.imul(m, K)) | 0),
              (r = (r + Math.imul(f, Y)) | 0),
              (i = (i + Math.imul(f, ee)) | 0),
              (i = (i + Math.imul(h, Y)) | 0),
              (o = (o + Math.imul(h, ee)) | 0));
            var Me = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Me >>> 26)) | 0),
              (Me &= 67108863),
              (r = Math.imul(B, H)),
              (i = Math.imul(B, D)),
              (i = (i + Math.imul(x, H)) | 0),
              (o = Math.imul(x, D)),
              (r = (r + Math.imul(O, W)) | 0),
              (i = (i + Math.imul(O, X)) | 0),
              (i = (i + Math.imul(j, W)) | 0),
              (o = (o + Math.imul(j, X)) | 0),
              (r = (r + Math.imul(M, G)) | 0),
              (i = (i + Math.imul(M, z)) | 0),
              (i = (i + Math.imul(_, G)) | 0),
              (o = (o + Math.imul(_, z)) | 0),
              (r = (r + Math.imul(b, J)) | 0),
              (i = (i + Math.imul(b, K)) | 0),
              (i = (i + Math.imul(v, J)) | 0),
              (o = (o + Math.imul(v, K)) | 0),
              (r = (r + Math.imul(p, Y)) | 0),
              (i = (i + Math.imul(p, ee)) | 0),
              (i = (i + Math.imul(m, Y)) | 0),
              (o = (o + Math.imul(m, ee)) | 0),
              (r = (r + Math.imul(f, ne)) | 0),
              (i = (i + Math.imul(f, re)) | 0),
              (i = (i + Math.imul(h, ne)) | 0),
              (o = (o + Math.imul(h, re)) | 0));
            var _e = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (_e >>> 26)) | 0),
              (_e &= 67108863),
              (r = Math.imul(N, H)),
              (i = Math.imul(N, D)),
              (i = (i + Math.imul(I, H)) | 0),
              (o = Math.imul(I, D)),
              (r = (r + Math.imul(B, W)) | 0),
              (i = (i + Math.imul(B, X)) | 0),
              (i = (i + Math.imul(x, W)) | 0),
              (o = (o + Math.imul(x, X)) | 0),
              (r = (r + Math.imul(O, G)) | 0),
              (i = (i + Math.imul(O, z)) | 0),
              (i = (i + Math.imul(j, G)) | 0),
              (o = (o + Math.imul(j, z)) | 0),
              (r = (r + Math.imul(M, J)) | 0),
              (i = (i + Math.imul(M, K)) | 0),
              (i = (i + Math.imul(_, J)) | 0),
              (o = (o + Math.imul(_, K)) | 0),
              (r = (r + Math.imul(b, Y)) | 0),
              (i = (i + Math.imul(b, ee)) | 0),
              (i = (i + Math.imul(v, Y)) | 0),
              (o = (o + Math.imul(v, ee)) | 0),
              (r = (r + Math.imul(p, ne)) | 0),
              (i = (i + Math.imul(p, re)) | 0),
              (i = (i + Math.imul(m, ne)) | 0),
              (o = (o + Math.imul(m, re)) | 0),
              (r = (r + Math.imul(f, oe)) | 0),
              (i = (i + Math.imul(f, ue)) | 0),
              (i = (i + Math.imul(h, oe)) | 0),
              (o = (o + Math.imul(h, ue)) | 0));
            var we = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (we >>> 26)) | 0),
              (we &= 67108863),
              (r = Math.imul(A, H)),
              (i = Math.imul(A, D)),
              (i = (i + Math.imul(S, H)) | 0),
              (o = Math.imul(S, D)),
              (r = (r + Math.imul(N, W)) | 0),
              (i = (i + Math.imul(N, X)) | 0),
              (i = (i + Math.imul(I, W)) | 0),
              (o = (o + Math.imul(I, X)) | 0),
              (r = (r + Math.imul(B, G)) | 0),
              (i = (i + Math.imul(B, z)) | 0),
              (i = (i + Math.imul(x, G)) | 0),
              (o = (o + Math.imul(x, z)) | 0),
              (r = (r + Math.imul(O, J)) | 0),
              (i = (i + Math.imul(O, K)) | 0),
              (i = (i + Math.imul(j, J)) | 0),
              (o = (o + Math.imul(j, K)) | 0),
              (r = (r + Math.imul(M, Y)) | 0),
              (i = (i + Math.imul(M, ee)) | 0),
              (i = (i + Math.imul(_, Y)) | 0),
              (o = (o + Math.imul(_, ee)) | 0),
              (r = (r + Math.imul(b, ne)) | 0),
              (i = (i + Math.imul(b, re)) | 0),
              (i = (i + Math.imul(v, ne)) | 0),
              (o = (o + Math.imul(v, re)) | 0),
              (r = (r + Math.imul(p, oe)) | 0),
              (i = (i + Math.imul(p, ue)) | 0),
              (i = (i + Math.imul(m, oe)) | 0),
              (o = (o + Math.imul(m, ue)) | 0),
              (r = (r + Math.imul(f, ae)) | 0),
              (i = (i + Math.imul(f, le)) | 0),
              (i = (i + Math.imul(h, ae)) | 0),
              (o = (o + Math.imul(h, le)) | 0));
            var Oe = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Oe >>> 26)) | 0),
              (Oe &= 67108863),
              (r = Math.imul(k, H)),
              (i = Math.imul(k, D)),
              (i = (i + Math.imul(L, H)) | 0),
              (o = Math.imul(L, D)),
              (r = (r + Math.imul(A, W)) | 0),
              (i = (i + Math.imul(A, X)) | 0),
              (i = (i + Math.imul(S, W)) | 0),
              (o = (o + Math.imul(S, X)) | 0),
              (r = (r + Math.imul(N, G)) | 0),
              (i = (i + Math.imul(N, z)) | 0),
              (i = (i + Math.imul(I, G)) | 0),
              (o = (o + Math.imul(I, z)) | 0),
              (r = (r + Math.imul(B, J)) | 0),
              (i = (i + Math.imul(B, K)) | 0),
              (i = (i + Math.imul(x, J)) | 0),
              (o = (o + Math.imul(x, K)) | 0),
              (r = (r + Math.imul(O, Y)) | 0),
              (i = (i + Math.imul(O, ee)) | 0),
              (i = (i + Math.imul(j, Y)) | 0),
              (o = (o + Math.imul(j, ee)) | 0),
              (r = (r + Math.imul(M, ne)) | 0),
              (i = (i + Math.imul(M, re)) | 0),
              (i = (i + Math.imul(_, ne)) | 0),
              (o = (o + Math.imul(_, re)) | 0),
              (r = (r + Math.imul(b, oe)) | 0),
              (i = (i + Math.imul(b, ue)) | 0),
              (i = (i + Math.imul(v, oe)) | 0),
              (o = (o + Math.imul(v, ue)) | 0),
              (r = (r + Math.imul(p, ae)) | 0),
              (i = (i + Math.imul(p, le)) | 0),
              (i = (i + Math.imul(m, ae)) | 0),
              (o = (o + Math.imul(m, le)) | 0),
              (r = (r + Math.imul(f, fe)) | 0),
              (i = (i + Math.imul(f, he)) | 0),
              (i = (i + Math.imul(h, fe)) | 0),
              (o = (o + Math.imul(h, he)) | 0));
            var je = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (je >>> 26)) | 0),
              (je &= 67108863),
              (r = Math.imul(R, H)),
              (i = Math.imul(R, D)),
              (i = (i + Math.imul(F, H)) | 0),
              (o = Math.imul(F, D)),
              (r = (r + Math.imul(k, W)) | 0),
              (i = (i + Math.imul(k, X)) | 0),
              (i = (i + Math.imul(L, W)) | 0),
              (o = (o + Math.imul(L, X)) | 0),
              (r = (r + Math.imul(A, G)) | 0),
              (i = (i + Math.imul(A, z)) | 0),
              (i = (i + Math.imul(S, G)) | 0),
              (o = (o + Math.imul(S, z)) | 0),
              (r = (r + Math.imul(N, J)) | 0),
              (i = (i + Math.imul(N, K)) | 0),
              (i = (i + Math.imul(I, J)) | 0),
              (o = (o + Math.imul(I, K)) | 0),
              (r = (r + Math.imul(B, Y)) | 0),
              (i = (i + Math.imul(B, ee)) | 0),
              (i = (i + Math.imul(x, Y)) | 0),
              (o = (o + Math.imul(x, ee)) | 0),
              (r = (r + Math.imul(O, ne)) | 0),
              (i = (i + Math.imul(O, re)) | 0),
              (i = (i + Math.imul(j, ne)) | 0),
              (o = (o + Math.imul(j, re)) | 0),
              (r = (r + Math.imul(M, oe)) | 0),
              (i = (i + Math.imul(M, ue)) | 0),
              (i = (i + Math.imul(_, oe)) | 0),
              (o = (o + Math.imul(_, ue)) | 0),
              (r = (r + Math.imul(b, ae)) | 0),
              (i = (i + Math.imul(b, le)) | 0),
              (i = (i + Math.imul(v, ae)) | 0),
              (o = (o + Math.imul(v, le)) | 0),
              (r = (r + Math.imul(p, fe)) | 0),
              (i = (i + Math.imul(p, he)) | 0),
              (i = (i + Math.imul(m, fe)) | 0),
              (o = (o + Math.imul(m, he)) | 0),
              (r = (r + Math.imul(f, pe)) | 0),
              (i = (i + Math.imul(f, me)) | 0),
              (i = (i + Math.imul(h, pe)) | 0),
              (o = (o + Math.imul(h, me)) | 0));
            var Pe = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Pe >>> 26)) | 0),
              (Pe &= 67108863),
              (r = Math.imul(R, W)),
              (i = Math.imul(R, X)),
              (i = (i + Math.imul(F, W)) | 0),
              (o = Math.imul(F, X)),
              (r = (r + Math.imul(k, G)) | 0),
              (i = (i + Math.imul(k, z)) | 0),
              (i = (i + Math.imul(L, G)) | 0),
              (o = (o + Math.imul(L, z)) | 0),
              (r = (r + Math.imul(A, J)) | 0),
              (i = (i + Math.imul(A, K)) | 0),
              (i = (i + Math.imul(S, J)) | 0),
              (o = (o + Math.imul(S, K)) | 0),
              (r = (r + Math.imul(N, Y)) | 0),
              (i = (i + Math.imul(N, ee)) | 0),
              (i = (i + Math.imul(I, Y)) | 0),
              (o = (o + Math.imul(I, ee)) | 0),
              (r = (r + Math.imul(B, ne)) | 0),
              (i = (i + Math.imul(B, re)) | 0),
              (i = (i + Math.imul(x, ne)) | 0),
              (o = (o + Math.imul(x, re)) | 0),
              (r = (r + Math.imul(O, oe)) | 0),
              (i = (i + Math.imul(O, ue)) | 0),
              (i = (i + Math.imul(j, oe)) | 0),
              (o = (o + Math.imul(j, ue)) | 0),
              (r = (r + Math.imul(M, ae)) | 0),
              (i = (i + Math.imul(M, le)) | 0),
              (i = (i + Math.imul(_, ae)) | 0),
              (o = (o + Math.imul(_, le)) | 0),
              (r = (r + Math.imul(b, fe)) | 0),
              (i = (i + Math.imul(b, he)) | 0),
              (i = (i + Math.imul(v, fe)) | 0),
              (o = (o + Math.imul(v, he)) | 0),
              (r = (r + Math.imul(p, pe)) | 0),
              (i = (i + Math.imul(p, me)) | 0),
              (i = (i + Math.imul(m, pe)) | 0),
              (o = (o + Math.imul(m, me)) | 0));
            var Be = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Be >>> 26)) | 0),
              (Be &= 67108863),
              (r = Math.imul(R, G)),
              (i = Math.imul(R, z)),
              (i = (i + Math.imul(F, G)) | 0),
              (o = Math.imul(F, z)),
              (r = (r + Math.imul(k, J)) | 0),
              (i = (i + Math.imul(k, K)) | 0),
              (i = (i + Math.imul(L, J)) | 0),
              (o = (o + Math.imul(L, K)) | 0),
              (r = (r + Math.imul(A, Y)) | 0),
              (i = (i + Math.imul(A, ee)) | 0),
              (i = (i + Math.imul(S, Y)) | 0),
              (o = (o + Math.imul(S, ee)) | 0),
              (r = (r + Math.imul(N, ne)) | 0),
              (i = (i + Math.imul(N, re)) | 0),
              (i = (i + Math.imul(I, ne)) | 0),
              (o = (o + Math.imul(I, re)) | 0),
              (r = (r + Math.imul(B, oe)) | 0),
              (i = (i + Math.imul(B, ue)) | 0),
              (i = (i + Math.imul(x, oe)) | 0),
              (o = (o + Math.imul(x, ue)) | 0),
              (r = (r + Math.imul(O, ae)) | 0),
              (i = (i + Math.imul(O, le)) | 0),
              (i = (i + Math.imul(j, ae)) | 0),
              (o = (o + Math.imul(j, le)) | 0),
              (r = (r + Math.imul(M, fe)) | 0),
              (i = (i + Math.imul(M, he)) | 0),
              (i = (i + Math.imul(_, fe)) | 0),
              (o = (o + Math.imul(_, he)) | 0),
              (r = (r + Math.imul(b, pe)) | 0),
              (i = (i + Math.imul(b, me)) | 0),
              (i = (i + Math.imul(v, pe)) | 0),
              (o = (o + Math.imul(v, me)) | 0));
            var xe = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (xe >>> 26)) | 0),
              (xe &= 67108863),
              (r = Math.imul(R, J)),
              (i = Math.imul(R, K)),
              (i = (i + Math.imul(F, J)) | 0),
              (o = Math.imul(F, K)),
              (r = (r + Math.imul(k, Y)) | 0),
              (i = (i + Math.imul(k, ee)) | 0),
              (i = (i + Math.imul(L, Y)) | 0),
              (o = (o + Math.imul(L, ee)) | 0),
              (r = (r + Math.imul(A, ne)) | 0),
              (i = (i + Math.imul(A, re)) | 0),
              (i = (i + Math.imul(S, ne)) | 0),
              (o = (o + Math.imul(S, re)) | 0),
              (r = (r + Math.imul(N, oe)) | 0),
              (i = (i + Math.imul(N, ue)) | 0),
              (i = (i + Math.imul(I, oe)) | 0),
              (o = (o + Math.imul(I, ue)) | 0),
              (r = (r + Math.imul(B, ae)) | 0),
              (i = (i + Math.imul(B, le)) | 0),
              (i = (i + Math.imul(x, ae)) | 0),
              (o = (o + Math.imul(x, le)) | 0),
              (r = (r + Math.imul(O, fe)) | 0),
              (i = (i + Math.imul(O, he)) | 0),
              (i = (i + Math.imul(j, fe)) | 0),
              (o = (o + Math.imul(j, he)) | 0),
              (r = (r + Math.imul(M, pe)) | 0),
              (i = (i + Math.imul(M, me)) | 0),
              (i = (i + Math.imul(_, pe)) | 0),
              (o = (o + Math.imul(_, me)) | 0));
            var Te = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Te >>> 26)) | 0),
              (Te &= 67108863),
              (r = Math.imul(R, Y)),
              (i = Math.imul(R, ee)),
              (i = (i + Math.imul(F, Y)) | 0),
              (o = Math.imul(F, ee)),
              (r = (r + Math.imul(k, ne)) | 0),
              (i = (i + Math.imul(k, re)) | 0),
              (i = (i + Math.imul(L, ne)) | 0),
              (o = (o + Math.imul(L, re)) | 0),
              (r = (r + Math.imul(A, oe)) | 0),
              (i = (i + Math.imul(A, ue)) | 0),
              (i = (i + Math.imul(S, oe)) | 0),
              (o = (o + Math.imul(S, ue)) | 0),
              (r = (r + Math.imul(N, ae)) | 0),
              (i = (i + Math.imul(N, le)) | 0),
              (i = (i + Math.imul(I, ae)) | 0),
              (o = (o + Math.imul(I, le)) | 0),
              (r = (r + Math.imul(B, fe)) | 0),
              (i = (i + Math.imul(B, he)) | 0),
              (i = (i + Math.imul(x, fe)) | 0),
              (o = (o + Math.imul(x, he)) | 0),
              (r = (r + Math.imul(O, pe)) | 0),
              (i = (i + Math.imul(O, me)) | 0),
              (i = (i + Math.imul(j, pe)) | 0),
              (o = (o + Math.imul(j, me)) | 0));
            var Ne = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Ne >>> 26)) | 0),
              (Ne &= 67108863),
              (r = Math.imul(R, ne)),
              (i = Math.imul(R, re)),
              (i = (i + Math.imul(F, ne)) | 0),
              (o = Math.imul(F, re)),
              (r = (r + Math.imul(k, oe)) | 0),
              (i = (i + Math.imul(k, ue)) | 0),
              (i = (i + Math.imul(L, oe)) | 0),
              (o = (o + Math.imul(L, ue)) | 0),
              (r = (r + Math.imul(A, ae)) | 0),
              (i = (i + Math.imul(A, le)) | 0),
              (i = (i + Math.imul(S, ae)) | 0),
              (o = (o + Math.imul(S, le)) | 0),
              (r = (r + Math.imul(N, fe)) | 0),
              (i = (i + Math.imul(N, he)) | 0),
              (i = (i + Math.imul(I, fe)) | 0),
              (o = (o + Math.imul(I, he)) | 0),
              (r = (r + Math.imul(B, pe)) | 0),
              (i = (i + Math.imul(B, me)) | 0),
              (i = (i + Math.imul(x, pe)) | 0),
              (o = (o + Math.imul(x, me)) | 0));
            var Ie = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Ie >>> 26)) | 0),
              (Ie &= 67108863),
              (r = Math.imul(R, oe)),
              (i = Math.imul(R, ue)),
              (i = (i + Math.imul(F, oe)) | 0),
              (o = Math.imul(F, ue)),
              (r = (r + Math.imul(k, ae)) | 0),
              (i = (i + Math.imul(k, le)) | 0),
              (i = (i + Math.imul(L, ae)) | 0),
              (o = (o + Math.imul(L, le)) | 0),
              (r = (r + Math.imul(A, fe)) | 0),
              (i = (i + Math.imul(A, he)) | 0),
              (i = (i + Math.imul(S, fe)) | 0),
              (o = (o + Math.imul(S, he)) | 0),
              (r = (r + Math.imul(N, pe)) | 0),
              (i = (i + Math.imul(N, me)) | 0),
              (i = (i + Math.imul(I, pe)) | 0),
              (o = (o + Math.imul(I, me)) | 0));
            var Ee = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Ee >>> 26)) | 0),
              (Ee &= 67108863),
              (r = Math.imul(R, ae)),
              (i = Math.imul(R, le)),
              (i = (i + Math.imul(F, ae)) | 0),
              (o = Math.imul(F, le)),
              (r = (r + Math.imul(k, fe)) | 0),
              (i = (i + Math.imul(k, he)) | 0),
              (i = (i + Math.imul(L, fe)) | 0),
              (o = (o + Math.imul(L, he)) | 0),
              (r = (r + Math.imul(A, pe)) | 0),
              (i = (i + Math.imul(A, me)) | 0),
              (i = (i + Math.imul(S, pe)) | 0),
              (o = (o + Math.imul(S, me)) | 0));
            var Ae = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Ae >>> 26)) | 0),
              (Ae &= 67108863),
              (r = Math.imul(R, fe)),
              (i = Math.imul(R, he)),
              (i = (i + Math.imul(F, fe)) | 0),
              (o = Math.imul(F, he)),
              (r = (r + Math.imul(k, pe)) | 0),
              (i = (i + Math.imul(k, me)) | 0),
              (i = (i + Math.imul(L, pe)) | 0),
              (o = (o + Math.imul(L, me)) | 0));
            var Se = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Se >>> 26)) | 0),
              (Se &= 67108863),
              (r = Math.imul(R, pe)),
              (i = Math.imul(R, me)),
              (i = (i + Math.imul(F, pe)) | 0),
              (o = Math.imul(F, me)));
            var Ue = (((l + r) | 0) + ((8191 & i) << 13)) | 0;
            return (
              (l = (((o + (i >>> 13)) | 0) + (Ue >>> 26)) | 0),
              (Ue &= 67108863),
              (a[0] = ge),
              (a[1] = be),
              (a[2] = ve),
              (a[3] = ye),
              (a[4] = Me),
              (a[5] = _e),
              (a[6] = we),
              (a[7] = Oe),
              (a[8] = je),
              (a[9] = Pe),
              (a[10] = Be),
              (a[11] = xe),
              (a[12] = Te),
              (a[13] = Ne),
              (a[14] = Ie),
              (a[15] = Ee),
              (a[16] = Ae),
              (a[17] = Se),
              (a[18] = Ue),
              0 !== l && ((a[19] = l), n.length++),
              n
            );
          };
          function y(e, t, n) {
            ((n.negative = t.negative ^ e.negative),
              (n.length = e.length + t.length));
            for (var r = 0, i = 0, o = 0; o < n.length - 1; o++) {
              var u = i;
              i = 0;
              for (
                var s = 67108863 & r,
                  a = Math.min(o, t.length - 1),
                  l = Math.max(0, o - e.length + 1);
                l <= a;
                l++
              ) {
                var c = o - l,
                  f = 0 | e.words[c],
                  h = 0 | t.words[l],
                  d = f * h,
                  p = 67108863 & d;
                ((u = (u + ((d / 67108864) | 0)) | 0),
                  (p = (p + s) | 0),
                  (s = 67108863 & p),
                  (u = (u + (p >>> 26)) | 0),
                  (i += u >>> 26),
                  (u &= 67108863));
              }
              ((n.words[o] = s), (r = u), (u = i));
            }
            return (0 !== r ? (n.words[o] = r) : n.length--, n._strip());
          }
          function M(e, t, n) {
            return y(e, t, n);
          }
          function _(e, t) {
            ((this.x = e), (this.y = t));
          }
          (Math.imul || (v = b),
            (o.prototype.mulTo = function (e, t) {
              var n,
                r = this.length + e.length;
              return (
                (n =
                  10 === this.length && 10 === e.length
                    ? v(this, e, t)
                    : r < 63
                      ? b(this, e, t)
                      : r < 1024
                        ? y(this, e, t)
                        : M(this, e, t)),
                n
              );
            }),
            (_.prototype.makeRBT = function (e) {
              for (
                var t = new Array(e), n = o.prototype._countBits(e) - 1, r = 0;
                r < e;
                r++
              )
                t[r] = this.revBin(r, n, e);
              return t;
            }),
            (_.prototype.revBin = function (e, t, n) {
              if (0 === e || e === n - 1) return e;
              for (var r = 0, i = 0; i < t; i++)
                ((r |= (1 & e) << (t - i - 1)), (e >>= 1));
              return r;
            }),
            (_.prototype.permute = function (e, t, n, r, i, o) {
              for (var u = 0; u < o; u++) ((r[u] = t[e[u]]), (i[u] = n[e[u]]));
            }),
            (_.prototype.transform = function (e, t, n, r, i, o) {
              this.permute(o, e, t, n, r, i);
              for (var u = 1; u < i; u <<= 1)
                for (
                  var s = u << 1,
                    a = Math.cos((2 * Math.PI) / s),
                    l = Math.sin((2 * Math.PI) / s),
                    c = 0;
                  c < i;
                  c += s
                )
                  for (var f = a, h = l, d = 0; d < u; d++) {
                    var p = n[c + d],
                      m = r[c + d],
                      g = n[c + d + u],
                      b = r[c + d + u],
                      v = f * g - h * b;
                    ((b = f * b + h * g),
                      (g = v),
                      (n[c + d] = p + g),
                      (r[c + d] = m + b),
                      (n[c + d + u] = p - g),
                      (r[c + d + u] = m - b),
                      d !== s &&
                        ((v = a * f - l * h), (h = a * h + l * f), (f = v)));
                  }
            }),
            (_.prototype.guessLen13b = function (e, t) {
              var n = 1 | Math.max(t, e),
                r = 1 & n,
                i = 0;
              for (n = (n / 2) | 0; n; n >>>= 1) i++;
              return 1 << (i + 1 + r);
            }),
            (_.prototype.conjugate = function (e, t, n) {
              if (!(n <= 1))
                for (var r = 0; r < n / 2; r++) {
                  var i = e[r];
                  ((e[r] = e[n - r - 1]),
                    (e[n - r - 1] = i),
                    (i = t[r]),
                    (t[r] = -t[n - r - 1]),
                    (t[n - r - 1] = -i));
                }
            }),
            (_.prototype.normalize13b = function (e, t) {
              for (var n = 0, r = 0; r < t / 2; r++) {
                var i =
                  8192 * Math.round(e[2 * r + 1] / t) +
                  Math.round(e[2 * r] / t) +
                  n;
                ((e[r] = 67108863 & i),
                  (n = i < 67108864 ? 0 : (i / 67108864) | 0));
              }
              return e;
            }),
            (_.prototype.convert13b = function (e, t, n, i) {
              for (var o = 0, u = 0; u < t; u++)
                ((o += 0 | e[u]),
                  (n[2 * u] = 8191 & o),
                  (o >>>= 13),
                  (n[2 * u + 1] = 8191 & o),
                  (o >>>= 13));
              for (u = 2 * t; u < i; ++u) n[u] = 0;
              (r(0 === o), r(0 === (-8192 & o)));
            }),
            (_.prototype.stub = function (e) {
              for (var t = new Array(e), n = 0; n < e; n++) t[n] = 0;
              return t;
            }),
            (_.prototype.mulp = function (e, t, n) {
              var r = 2 * this.guessLen13b(e.length, t.length),
                i = this.makeRBT(r),
                o = this.stub(r),
                u = new Array(r),
                s = new Array(r),
                a = new Array(r),
                l = new Array(r),
                c = new Array(r),
                f = new Array(r),
                h = n.words;
              ((h.length = r),
                this.convert13b(e.words, e.length, u, r),
                this.convert13b(t.words, t.length, l, r),
                this.transform(u, o, s, a, r, i),
                this.transform(l, o, c, f, r, i));
              for (var d = 0; d < r; d++) {
                var p = s[d] * c[d] - a[d] * f[d];
                ((a[d] = s[d] * f[d] + a[d] * c[d]), (s[d] = p));
              }
              return (
                this.conjugate(s, a, r),
                this.transform(s, a, h, o, r, i),
                this.conjugate(h, o, r),
                this.normalize13b(h, r),
                (n.negative = e.negative ^ t.negative),
                (n.length = e.length + t.length),
                n._strip()
              );
            }),
            (o.prototype.mul = function (e) {
              var t = new o(null);
              return (
                (t.words = new Array(this.length + e.length)),
                this.mulTo(e, t)
              );
            }),
            (o.prototype.mulf = function (e) {
              var t = new o(null);
              return (
                (t.words = new Array(this.length + e.length)),
                M(this, e, t)
              );
            }),
            (o.prototype.imul = function (e) {
              return this.clone().mulTo(e, this);
            }),
            (o.prototype.imuln = function (e) {
              var t = e < 0;
              (t && (e = -e), r("number" === typeof e), r(e < 67108864));
              for (var n = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * e,
                  u = (67108863 & o) + (67108863 & n);
                ((n >>= 26),
                  (n += (o / 67108864) | 0),
                  (n += u >>> 26),
                  (this.words[i] = 67108863 & u));
              }
              return (
                0 !== n && ((this.words[i] = n), this.length++),
                (this.length = 0 === e ? 1 : this.length),
                t ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (e) {
              return this.clone().imuln(e);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (e) {
              var t = g(e);
              if (0 === t.length) return new o(1);
              for (var n = this, r = 0; r < t.length; r++, n = n.sqr())
                if (0 !== t[r]) break;
              if (++r < t.length)
                for (var i = n.sqr(); r < t.length; r++, i = i.sqr())
                  0 !== t[r] && (n = n.mul(i));
              return n;
            }),
            (o.prototype.iushln = function (e) {
              r("number" === typeof e && e >= 0);
              var t,
                n = e % 26,
                i = (e - n) / 26,
                o = (67108863 >>> (26 - n)) << (26 - n);
              if (0 !== n) {
                var u = 0;
                for (t = 0; t < this.length; t++) {
                  var s = this.words[t] & o,
                    a = ((0 | this.words[t]) - s) << n;
                  ((this.words[t] = a | u), (u = s >>> (26 - n)));
                }
                u && ((this.words[t] = u), this.length++);
              }
              if (0 !== i) {
                for (t = this.length - 1; t >= 0; t--)
                  this.words[t + i] = this.words[t];
                for (t = 0; t < i; t++) this.words[t] = 0;
                this.length += i;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (e) {
              return (r(0 === this.negative), this.iushln(e));
            }),
            (o.prototype.iushrn = function (e, t, n) {
              var i;
              (r("number" === typeof e && e >= 0),
                (i = t ? (t - (t % 26)) / 26 : 0));
              var o = e % 26,
                u = Math.min((e - o) / 26, this.length),
                s = 67108863 ^ ((67108863 >>> o) << o),
                a = n;
              if (((i -= u), (i = Math.max(0, i)), a)) {
                for (var l = 0; l < u; l++) a.words[l] = this.words[l];
                a.length = u;
              }
              if (0 === u);
              else if (this.length > u)
                for (this.length -= u, l = 0; l < this.length; l++)
                  this.words[l] = this.words[l + u];
              else ((this.words[0] = 0), (this.length = 1));
              var c = 0;
              for (l = this.length - 1; l >= 0 && (0 !== c || l >= i); l--) {
                var f = 0 | this.words[l];
                ((this.words[l] = (c << (26 - o)) | (f >>> o)), (c = f & s));
              }
              return (
                a && 0 !== c && (a.words[a.length++] = c),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (e, t, n) {
              return (r(0 === this.negative), this.iushrn(e, t, n));
            }),
            (o.prototype.shln = function (e) {
              return this.clone().ishln(e);
            }),
            (o.prototype.ushln = function (e) {
              return this.clone().iushln(e);
            }),
            (o.prototype.shrn = function (e) {
              return this.clone().ishrn(e);
            }),
            (o.prototype.ushrn = function (e) {
              return this.clone().iushrn(e);
            }),
            (o.prototype.testn = function (e) {
              r("number" === typeof e && e >= 0);
              var t = e % 26,
                n = (e - t) / 26,
                i = 1 << t;
              if (this.length <= n) return !1;
              var o = this.words[n];
              return !!(o & i);
            }),
            (o.prototype.imaskn = function (e) {
              r("number" === typeof e && e >= 0);
              var t = e % 26,
                n = (e - t) / 26;
              if (
                (r(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= n)
              )
                return this;
              if (
                (0 !== t && n++,
                (this.length = Math.min(n, this.length)),
                0 !== t)
              ) {
                var i = 67108863 ^ ((67108863 >>> t) << t);
                this.words[this.length - 1] &= i;
              }
              return this._strip();
            }),
            (o.prototype.maskn = function (e) {
              return this.clone().imaskn(e);
            }),
            (o.prototype.iaddn = function (e) {
              return (
                r("number" === typeof e),
                r(e < 67108864),
                e < 0
                  ? this.isubn(-e)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= e
                      ? ((this.words[0] = e - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(e),
                        (this.negative = 1),
                        this)
                    : this._iaddn(e)
              );
            }),
            (o.prototype._iaddn = function (e) {
              this.words[0] += e;
              for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                ((this.words[t] -= 67108864),
                  t === this.length - 1
                    ? (this.words[t + 1] = 1)
                    : this.words[t + 1]++);
              return ((this.length = Math.max(this.length, t + 1)), this);
            }),
            (o.prototype.isubn = function (e) {
              if ((r("number" === typeof e), r(e < 67108864), e < 0))
                return this.iaddn(-e);
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(e),
                  (this.negative = 1),
                  this
                );
              if (
                ((this.words[0] -= e), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var t = 0; t < this.length && this.words[t] < 0; t++)
                  ((this.words[t] += 67108864), (this.words[t + 1] -= 1));
              return this._strip();
            }),
            (o.prototype.addn = function (e) {
              return this.clone().iaddn(e);
            }),
            (o.prototype.subn = function (e) {
              return this.clone().isubn(e);
            }),
            (o.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (e, t, n) {
              var i,
                o,
                u = e.length + n;
              this._expand(u);
              var s = 0;
              for (i = 0; i < e.length; i++) {
                o = (0 | this.words[i + n]) + s;
                var a = (0 | e.words[i]) * t;
                ((o -= 67108863 & a),
                  (s = (o >> 26) - ((a / 67108864) | 0)),
                  (this.words[i + n] = 67108863 & o));
              }
              for (; i < this.length - n; i++)
                ((o = (0 | this.words[i + n]) + s),
                  (s = o >> 26),
                  (this.words[i + n] = 67108863 & o));
              if (0 === s) return this._strip();
              for (r(-1 === s), s = 0, i = 0; i < this.length; i++)
                ((o = -(0 | this.words[i]) + s),
                  (s = o >> 26),
                  (this.words[i] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (e, t) {
              var n = this.length - e.length,
                r = this.clone(),
                i = e,
                u = 0 | i.words[i.length - 1],
                s = this._countBits(u);
              ((n = 26 - s),
                0 !== n &&
                  ((i = i.ushln(n)),
                  r.iushln(n),
                  (u = 0 | i.words[i.length - 1])));
              var a,
                l = r.length - i.length;
              if ("mod" !== t) {
                ((a = new o(null)),
                  (a.length = l + 1),
                  (a.words = new Array(a.length)));
                for (var c = 0; c < a.length; c++) a.words[c] = 0;
              }
              var f = r.clone()._ishlnsubmul(i, 1, l);
              0 === f.negative && ((r = f), a && (a.words[l] = 1));
              for (var h = l - 1; h >= 0; h--) {
                var d =
                  67108864 * (0 | r.words[i.length + h]) +
                  (0 | r.words[i.length + h - 1]);
                ((d = Math.min((d / u) | 0, 67108863)),
                  r._ishlnsubmul(i, d, h));
                while (0 !== r.negative)
                  (d--,
                    (r.negative = 0),
                    r._ishlnsubmul(i, 1, h),
                    r.isZero() || (r.negative ^= 1));
                a && (a.words[h] = d);
              }
              return (
                a && a._strip(),
                r._strip(),
                "div" !== t && 0 !== n && r.iushrn(n),
                { div: a || null, mod: r }
              );
            }),
            (o.prototype.divmod = function (e, t, n) {
              return (
                r(!e.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === e.negative
                    ? ((s = this.neg().divmod(e, t)),
                      "mod" !== t && (i = s.div.neg()),
                      "div" !== t &&
                        ((u = s.mod.neg()), n && 0 !== u.negative && u.iadd(e)),
                      { div: i, mod: u })
                    : 0 === this.negative && 0 !== e.negative
                      ? ((s = this.divmod(e.neg(), t)),
                        "mod" !== t && (i = s.div.neg()),
                        { div: i, mod: s.mod })
                      : 0 !== (this.negative & e.negative)
                        ? ((s = this.neg().divmod(e.neg(), t)),
                          "div" !== t &&
                            ((u = s.mod.neg()),
                            n && 0 !== u.negative && u.isub(e)),
                          { div: s.div, mod: u })
                        : e.length > this.length || this.cmp(e) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === e.length
                            ? "div" === t
                              ? { div: this.divn(e.words[0]), mod: null }
                              : "mod" === t
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(e.words[0])),
                                  }
                                : {
                                    div: this.divn(e.words[0]),
                                    mod: new o(this.modrn(e.words[0])),
                                  }
                            : this._wordDiv(e, t)
              );
              var i, u, s;
            }),
            (o.prototype.div = function (e) {
              return this.divmod(e, "div", !1).div;
            }),
            (o.prototype.mod = function (e) {
              return this.divmod(e, "mod", !1).mod;
            }),
            (o.prototype.umod = function (e) {
              return this.divmod(e, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (e) {
              var t = this.divmod(e);
              if (t.mod.isZero()) return t.div;
              var n = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                r = e.ushrn(1),
                i = e.andln(1),
                o = n.cmp(r);
              return o < 0 || (1 === i && 0 === o)
                ? t.div
                : 0 !== t.div.negative
                  ? t.div.isubn(1)
                  : t.div.iaddn(1);
            }),
            (o.prototype.modrn = function (e) {
              var t = e < 0;
              (t && (e = -e), r(e <= 67108863));
              for (
                var n = (1 << 26) % e, i = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                i = (n * i + (0 | this.words[o])) % e;
              return t ? -i : i;
            }),
            (o.prototype.modn = function (e) {
              return this.modrn(e);
            }),
            (o.prototype.idivn = function (e) {
              var t = e < 0;
              (t && (e = -e), r(e <= 67108863));
              for (var n = 0, i = this.length - 1; i >= 0; i--) {
                var o = (0 | this.words[i]) + 67108864 * n;
                ((this.words[i] = (o / e) | 0), (n = o % e));
              }
              return (this._strip(), t ? this.ineg() : this);
            }),
            (o.prototype.divn = function (e) {
              return this.clone().idivn(e);
            }),
            (o.prototype.egcd = function (e) {
              (r(0 === e.negative), r(!e.isZero()));
              var t = this,
                n = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              var i = new o(1),
                u = new o(0),
                s = new o(0),
                a = new o(1),
                l = 0;
              while (t.isEven() && n.isEven()) (t.iushrn(1), n.iushrn(1), ++l);
              var c = n.clone(),
                f = t.clone();
              while (!t.isZero()) {
                for (
                  var h = 0, d = 1;
                  0 === (t.words[0] & d) && h < 26;
                  ++h, d <<= 1
                );
                if (h > 0) {
                  t.iushrn(h);
                  while (h-- > 0)
                    ((i.isOdd() || u.isOdd()) && (i.iadd(c), u.isub(f)),
                      i.iushrn(1),
                      u.iushrn(1));
                }
                for (
                  var p = 0, m = 1;
                  0 === (n.words[0] & m) && p < 26;
                  ++p, m <<= 1
                );
                if (p > 0) {
                  n.iushrn(p);
                  while (p-- > 0)
                    ((s.isOdd() || a.isOdd()) && (s.iadd(c), a.isub(f)),
                      s.iushrn(1),
                      a.iushrn(1));
                }
                t.cmp(n) >= 0
                  ? (t.isub(n), i.isub(s), u.isub(a))
                  : (n.isub(t), s.isub(i), a.isub(u));
              }
              return { a: s, b: a, gcd: n.iushln(l) };
            }),
            (o.prototype._invmp = function (e) {
              (r(0 === e.negative), r(!e.isZero()));
              var t = this,
                n = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              var i,
                u = new o(1),
                s = new o(0),
                a = n.clone();
              while (t.cmpn(1) > 0 && n.cmpn(1) > 0) {
                for (
                  var l = 0, c = 1;
                  0 === (t.words[0] & c) && l < 26;
                  ++l, c <<= 1
                );
                if (l > 0) {
                  t.iushrn(l);
                  while (l-- > 0) (u.isOdd() && u.iadd(a), u.iushrn(1));
                }
                for (
                  var f = 0, h = 1;
                  0 === (n.words[0] & h) && f < 26;
                  ++f, h <<= 1
                );
                if (f > 0) {
                  n.iushrn(f);
                  while (f-- > 0) (s.isOdd() && s.iadd(a), s.iushrn(1));
                }
                t.cmp(n) >= 0 ? (t.isub(n), u.isub(s)) : (n.isub(t), s.isub(u));
              }
              return (
                (i = 0 === t.cmpn(1) ? u : s),
                i.cmpn(0) < 0 && i.iadd(e),
                i
              );
            }),
            (o.prototype.gcd = function (e) {
              if (this.isZero()) return e.abs();
              if (e.isZero()) return this.abs();
              var t = this.clone(),
                n = e.clone();
              ((t.negative = 0), (n.negative = 0));
              for (var r = 0; t.isEven() && n.isEven(); r++)
                (t.iushrn(1), n.iushrn(1));
              do {
                while (t.isEven()) t.iushrn(1);
                while (n.isEven()) n.iushrn(1);
                var i = t.cmp(n);
                if (i < 0) {
                  var o = t;
                  ((t = n), (n = o));
                } else if (0 === i || 0 === n.cmpn(1)) break;
                t.isub(n);
              } while (1);
              return n.iushln(r);
            }),
            (o.prototype.invm = function (e) {
              return this.egcd(e).a.umod(e);
            }),
            (o.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (o.prototype.andln = function (e) {
              return this.words[0] & e;
            }),
            (o.prototype.bincn = function (e) {
              r("number" === typeof e);
              var t = e % 26,
                n = (e - t) / 26,
                i = 1 << t;
              if (this.length <= n)
                return (this._expand(n + 1), (this.words[n] |= i), this);
              for (var o = i, u = n; 0 !== o && u < this.length; u++) {
                var s = 0 | this.words[u];
                ((s += o),
                  (o = s >>> 26),
                  (s &= 67108863),
                  (this.words[u] = s));
              }
              return (0 !== o && ((this.words[u] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (e) {
              var t,
                n = e < 0;
              if (0 !== this.negative && !n) return -1;
              if (0 === this.negative && n) return 1;
              if ((this._strip(), this.length > 1)) t = 1;
              else {
                (n && (e = -e), r(e <= 67108863, "Number is too big"));
                var i = 0 | this.words[0];
                t = i === e ? 0 : i < e ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (o.prototype.cmp = function (e) {
              if (0 !== this.negative && 0 === e.negative) return -1;
              if (0 === this.negative && 0 !== e.negative) return 1;
              var t = this.ucmp(e);
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (o.prototype.ucmp = function (e) {
              if (this.length > e.length) return 1;
              if (this.length < e.length) return -1;
              for (var t = 0, n = this.length - 1; n >= 0; n--) {
                var r = 0 | this.words[n],
                  i = 0 | e.words[n];
                if (r !== i) {
                  r < i ? (t = -1) : r > i && (t = 1);
                  break;
                }
              }
              return t;
            }),
            (o.prototype.gtn = function (e) {
              return 1 === this.cmpn(e);
            }),
            (o.prototype.gt = function (e) {
              return 1 === this.cmp(e);
            }),
            (o.prototype.gten = function (e) {
              return this.cmpn(e) >= 0;
            }),
            (o.prototype.gte = function (e) {
              return this.cmp(e) >= 0;
            }),
            (o.prototype.ltn = function (e) {
              return -1 === this.cmpn(e);
            }),
            (o.prototype.lt = function (e) {
              return -1 === this.cmp(e);
            }),
            (o.prototype.lten = function (e) {
              return this.cmpn(e) <= 0;
            }),
            (o.prototype.lte = function (e) {
              return this.cmp(e) <= 0;
            }),
            (o.prototype.eqn = function (e) {
              return 0 === this.cmpn(e);
            }),
            (o.prototype.eq = function (e) {
              return 0 === this.cmp(e);
            }),
            (o.red = function (e) {
              return new T(e);
            }),
            (o.prototype.toRed = function (e) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                e.convertTo(this)._forceRed(e)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (e) {
              return ((this.red = e), this);
            }),
            (o.prototype.forceRed = function (e) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(e)
              );
            }),
            (o.prototype.redAdd = function (e) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, e)
              );
            }),
            (o.prototype.redIAdd = function (e) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, e)
              );
            }),
            (o.prototype.redSub = function (e) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, e)
              );
            }),
            (o.prototype.redISub = function (e) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, e)
              );
            }),
            (o.prototype.redShl = function (e) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, e)
              );
            }),
            (o.prototype.redMul = function (e) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.mul(this, e)
              );
            }),
            (o.prototype.redIMul = function (e) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.imul(this, e)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (e) {
              return (
                r(this.red && !e.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, e)
              );
            }));
          var w = { k256: null, p224: null, p192: null, p25519: null };
          function O(e, t) {
            ((this.name = e),
              (this.p = new o(t, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function j() {
            O.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function P() {
            O.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function B() {
            O.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function x() {
            O.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function T(e) {
            if ("string" === typeof e) {
              var t = o._prime(e);
              ((this.m = t.p), (this.prime = t));
            } else
              (r(e.gtn(1), "modulus must be greater than 1"),
                (this.m = e),
                (this.prime = null));
          }
          function N(e) {
            (T.call(this, e),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((O.prototype._tmp = function () {
            var e = new o(null);
            return ((e.words = new Array(Math.ceil(this.n / 13))), e);
          }),
            (O.prototype.ireduce = function (e) {
              var t,
                n = e;
              do {
                (this.split(n, this.tmp),
                  (n = this.imulK(n)),
                  (n = n.iadd(this.tmp)),
                  (t = n.bitLength()));
              } while (t > this.n);
              var r = t < this.n ? -1 : n.ucmp(this.p);
              return (
                0 === r
                  ? ((n.words[0] = 0), (n.length = 1))
                  : r > 0
                    ? n.isub(this.p)
                    : void 0 !== n.strip
                      ? n.strip()
                      : n._strip(),
                n
              );
            }),
            (O.prototype.split = function (e, t) {
              e.iushrn(this.n, 0, t);
            }),
            (O.prototype.imulK = function (e) {
              return e.imul(this.k);
            }),
            i(j, O),
            (j.prototype.split = function (e, t) {
              for (
                var n = 4194303, r = Math.min(e.length, 9), i = 0;
                i < r;
                i++
              )
                t.words[i] = e.words[i];
              if (((t.length = r), e.length <= 9))
                return ((e.words[0] = 0), void (e.length = 1));
              var o = e.words[9];
              for (t.words[t.length++] = o & n, i = 10; i < e.length; i++) {
                var u = 0 | e.words[i];
                ((e.words[i - 10] = ((u & n) << 4) | (o >>> 22)), (o = u));
              }
              ((o >>>= 22),
                (e.words[i - 10] = o),
                0 === o && e.length > 10 ? (e.length -= 10) : (e.length -= 9));
            }),
            (j.prototype.imulK = function (e) {
              ((e.words[e.length] = 0),
                (e.words[e.length + 1] = 0),
                (e.length += 2));
              for (var t = 0, n = 0; n < e.length; n++) {
                var r = 0 | e.words[n];
                ((t += 977 * r),
                  (e.words[n] = 67108863 & t),
                  (t = 64 * r + ((t / 67108864) | 0)));
              }
              return (
                0 === e.words[e.length - 1] &&
                  (e.length--, 0 === e.words[e.length - 1] && e.length--),
                e
              );
            }),
            i(P, O),
            i(B, O),
            i(x, O),
            (x.prototype.imulK = function (e) {
              for (var t = 0, n = 0; n < e.length; n++) {
                var r = 19 * (0 | e.words[n]) + t,
                  i = 67108863 & r;
                ((r >>>= 26), (e.words[n] = i), (t = r));
              }
              return (0 !== t && (e.words[e.length++] = t), e);
            }),
            (o._prime = function (e) {
              if (w[e]) return w[e];
              var t;
              if ("k256" === e) t = new j();
              else if ("p224" === e) t = new P();
              else if ("p192" === e) t = new B();
              else {
                if ("p25519" !== e) throw new Error("Unknown prime " + e);
                t = new x();
              }
              return ((w[e] = t), t);
            }),
            (T.prototype._verify1 = function (e) {
              (r(0 === e.negative, "red works only with positives"),
                r(e.red, "red works only with red numbers"));
            }),
            (T.prototype._verify2 = function (e, t) {
              (r(
                0 === (e.negative | t.negative),
                "red works only with positives",
              ),
                r(e.red && e.red === t.red, "red works only with red numbers"));
            }),
            (T.prototype.imod = function (e) {
              return this.prime
                ? this.prime.ireduce(e)._forceRed(this)
                : (c(e, e.umod(this.m)._forceRed(this)), e);
            }),
            (T.prototype.neg = function (e) {
              return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
            }),
            (T.prototype.add = function (e, t) {
              this._verify2(e, t);
              var n = e.add(t);
              return (n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this));
            }),
            (T.prototype.iadd = function (e, t) {
              this._verify2(e, t);
              var n = e.iadd(t);
              return (n.cmp(this.m) >= 0 && n.isub(this.m), n);
            }),
            (T.prototype.sub = function (e, t) {
              this._verify2(e, t);
              var n = e.sub(t);
              return (n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this));
            }),
            (T.prototype.isub = function (e, t) {
              this._verify2(e, t);
              var n = e.isub(t);
              return (n.cmpn(0) < 0 && n.iadd(this.m), n);
            }),
            (T.prototype.shl = function (e, t) {
              return (this._verify1(e), this.imod(e.ushln(t)));
            }),
            (T.prototype.imul = function (e, t) {
              return (this._verify2(e, t), this.imod(e.imul(t)));
            }),
            (T.prototype.mul = function (e, t) {
              return (this._verify2(e, t), this.imod(e.mul(t)));
            }),
            (T.prototype.isqr = function (e) {
              return this.imul(e, e.clone());
            }),
            (T.prototype.sqr = function (e) {
              return this.mul(e, e);
            }),
            (T.prototype.sqrt = function (e) {
              if (e.isZero()) return e.clone();
              var t = this.m.andln(3);
              if ((r(t % 2 === 1), 3 === t)) {
                var n = this.m.add(new o(1)).iushrn(2);
                return this.pow(e, n);
              }
              var i = this.m.subn(1),
                u = 0;
              while (!i.isZero() && 0 === i.andln(1)) (u++, i.iushrn(1));
              r(!i.isZero());
              var s = new o(1).toRed(this),
                a = s.redNeg(),
                l = this.m.subn(1).iushrn(1),
                c = this.m.bitLength();
              c = new o(2 * c * c).toRed(this);
              while (0 !== this.pow(c, l).cmp(a)) c.redIAdd(a);
              var f = this.pow(c, i),
                h = this.pow(e, i.addn(1).iushrn(1)),
                d = this.pow(e, i),
                p = u;
              while (0 !== d.cmp(s)) {
                for (var m = d, g = 0; 0 !== m.cmp(s); g++) m = m.redSqr();
                r(g < p);
                var b = this.pow(f, new o(1).iushln(p - g - 1));
                ((h = h.redMul(b)),
                  (f = b.redSqr()),
                  (d = d.redMul(f)),
                  (p = g));
              }
              return h;
            }),
            (T.prototype.invm = function (e) {
              var t = e._invmp(this.m);
              return 0 !== t.negative
                ? ((t.negative = 0), this.imod(t).redNeg())
                : this.imod(t);
            }),
            (T.prototype.pow = function (e, t) {
              if (t.isZero()) return new o(1).toRed(this);
              if (0 === t.cmpn(1)) return e.clone();
              var n = 4,
                r = new Array(1 << n);
              ((r[0] = new o(1).toRed(this)), (r[1] = e));
              for (var i = 2; i < r.length; i++) r[i] = this.mul(r[i - 1], e);
              var u = r[0],
                s = 0,
                a = 0,
                l = t.bitLength() % 26;
              for (0 === l && (l = 26), i = t.length - 1; i >= 0; i--) {
                for (var c = t.words[i], f = l - 1; f >= 0; f--) {
                  var h = (c >> f) & 1;
                  (u !== r[0] && (u = this.sqr(u)),
                    0 !== h || 0 !== s
                      ? ((s <<= 1),
                        (s |= h),
                        a++,
                        (a === n || (0 === i && 0 === f)) &&
                          ((u = this.mul(u, r[s])), (a = 0), (s = 0)))
                      : (a = 0));
                }
                l = 26;
              }
              return u;
            }),
            (T.prototype.convertTo = function (e) {
              var t = e.umod(this.m);
              return t === e ? t.clone() : t;
            }),
            (T.prototype.convertFrom = function (e) {
              var t = e.clone();
              return ((t.red = null), t);
            }),
            (o.mont = function (e) {
              return new N(e);
            }),
            i(N, T),
            (N.prototype.convertTo = function (e) {
              return this.imod(e.ushln(this.shift));
            }),
            (N.prototype.convertFrom = function (e) {
              var t = this.imod(e.mul(this.rinv));
              return ((t.red = null), t);
            }),
            (N.prototype.imul = function (e, t) {
              if (e.isZero() || t.isZero())
                return ((e.words[0] = 0), (e.length = 1), e);
              var n = e.imul(t),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                o = i;
              return (
                i.cmp(this.m) >= 0
                  ? (o = i.isub(this.m))
                  : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (N.prototype.mul = function (e, t) {
              if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
              var n = e.mul(t),
                r = n
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = n.isub(r).iushrn(this.shift),
                u = i;
              return (
                i.cmp(this.m) >= 0
                  ? (u = i.isub(this.m))
                  : i.cmpn(0) < 0 && (u = i.iadd(this.m)),
                u._forceRed(this)
              );
            }),
            (N.prototype.invm = function (e) {
              var t = this.imod(e._invmp(this.m).mul(this.r2));
              return t._forceRed(this);
            }));
        })(e, this);
      }).call(this, n(20)(e));
    },
    9240: function (e, t) {},
    9241: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.nToHex = o));
      var r = n(3932),
        i = n(6451);
      function o(e, t) {
        let {
          bitLength: n = -1,
          isLe: o = !1,
          isNegative: u = !1,
        } = void 0 === t ? {} : t;
        return (0, r.u8aToHex)(
          (0, i.nToU8a)(e || 0, { bitLength: n, isLe: o, isNegative: u }),
        );
      }
    },
    9242: function (e, t, n) {
      "use strict";
      function r(e) {
        const t = 0 | e.length;
        for (let n = 0; n < t; n++) if (0 | e[n]) return !1;
        return !0;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.u8aEmpty = r));
    },
    9243: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        (void 0 === t && (t = -1), void 0 === n && (n = !1));
        const r = Math.ceil(t / 8);
        if (-1 === t || e.length === r) return e;
        if (e.length > r) return e.subarray(0, r);
        const i = new Uint8Array(r);
        return (i.set(e, n ? 0 : r - e.length), i);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.u8aFixLength = r));
    },
    9244: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.u8aSorted = i));
      var r = n(6448);
      function i(e) {
        return e.sort(r.u8aCmp);
      }
    },
    9245: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.u8aToBn = i));
      var r = n(3813);
      function i(e, t) {
        let { isLe: n = !0, isNegative: i = !1 } = void 0 === t ? {} : t;
        n || (e = e.slice().reverse());
        const o = e.length;
        if (i && o && 128 & e[o - 1])
          switch (o) {
            case 0:
              return new r.BN(0);
            case 1:
              return new r.BN(-1 * (255 ^ e[0]) - 1);
            case 2:
              return new r.BN(-1 * ((e[0] + (e[1] << 8)) ^ 65535) - 1);
            case 3:
              return new r.BN(
                -1 * ((e[0] + (e[1] << 8) + (e[2] << 16)) ^ 16777215) - 1,
              );
            case 4:
              return new r.BN(
                -1 *
                  ((e[0] + (e[1] << 8) + (e[2] << 16) + 16777216 * e[3]) ^
                    4294967295) -
                  1,
              );
            case 5:
              return new r.BN(
                -1 *
                  (((e[0] + (e[1] << 8) + (e[2] << 16) + 16777216 * e[3]) ^
                    4294967295) +
                    4294967296 * (255 ^ e[4])) -
                  1,
              );
            case 6:
              return new r.BN(
                -1 *
                  (((e[0] + (e[1] << 8) + (e[2] << 16) + 16777216 * e[3]) ^
                    4294967295) +
                    4294967296 * ((e[4] + (e[5] << 8)) ^ 65535)) -
                  1,
              );
            default:
              return new r.BN(e, "le").fromTwos(8 * o);
          }
        switch (o) {
          case 0:
            return new r.BN(0);
          case 1:
            return new r.BN(e[0]);
          case 2:
            return new r.BN(e[0] + (e[1] << 8));
          case 3:
            return new r.BN(e[0] + (e[1] << 8) + (e[2] << 16));
          case 4:
            return new r.BN(
              e[0] + (e[1] << 8) + (e[2] << 16) + 16777216 * e[3],
            );
          case 5:
            return new r.BN(
              e[0] +
                (e[1] << 8) +
                (e[2] << 16) +
                16777216 * (e[3] + (e[4] << 8)),
            );
          case 6:
            return new r.BN(
              e[0] +
                (e[1] << 8) +
                (e[2] << 16) +
                16777216 * (e[3] + (e[4] << 8) + (e[5] << 16)),
            );
          default:
            return new r.BN(e, "le");
        }
      }
    },
    9246: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.u8aToBuffer = o));
      var r = n(3191),
        i = n(5464);
      function o(e) {
        return i.hasBuffer
          ? r.xglobal.Buffer.from(e || [])
          : new Uint8Array(e || []);
      }
    },
    9247: function (e, t, n) {
      "use strict";
      function r(e, t) {
        let { bitLength: n = 32, isLe: r = !0 } = void 0 === t ? {} : t;
        if (32 !== n && 64 !== n)
          throw new Error("Invalid bitLength provided, expected 32 or 64");
        if (e.length < n / 8)
          throw new Error(
            `Invalid input buffer provided, expected at least ${n / 8} bytes, found ${e.length}`,
          );
        const i = new DataView(e.buffer, e.byteOffset);
        return 32 === n ? i.getFloat32(0, r) : i.getFloat64(0, r);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.u8aToFloat = r));
    },
    9248: function (e, t, n) {
      "use strict";
      function r(e, t) {
        let { isLe: n = !0, isNegative: r = !1 } = void 0 === t ? {} : t;
        n || (e = e.slice().reverse());
        const i = e.length;
        if (r && i && 128 & e[i - 1])
          switch (i) {
            case 0:
              return 0;
            case 1:
              return -1 * (255 ^ e[0]) - 1;
            case 2:
              return -1 * ((e[0] + (e[1] << 8)) ^ 65535) - 1;
            case 3:
              return -1 * ((e[0] + (e[1] << 8) + (e[2] << 16)) ^ 16777215) - 1;
            case 4:
              return (
                -1 *
                  ((e[0] + (e[1] << 8) + (e[2] << 16) + 16777216 * e[3]) ^
                    4294967295) -
                1
              );
            case 5:
              return (
                -1 *
                  (((e[0] + (e[1] << 8) + (e[2] << 16) + 16777216 * e[3]) ^
                    4294967295) +
                    4294967296 * (255 ^ e[4])) -
                1
              );
            case 6:
              return (
                -1 *
                  (((e[0] + (e[1] << 8) + (e[2] << 16) + 16777216 * e[3]) ^
                    4294967295) +
                    4294967296 * ((e[4] + (e[5] << 8)) ^ 65535)) -
                1
              );
            default:
              throw new Error(
                "Value more than 48-bits cannot be reliably converted",
              );
          }
        switch (i) {
          case 0:
            return 0;
          case 1:
            return e[0];
          case 2:
            return e[0] + (e[1] << 8);
          case 3:
            return e[0] + (e[1] << 8) + (e[2] << 16);
          case 4:
            return e[0] + (e[1] << 8) + (e[2] << 16) + 16777216 * e[3];
          case 5:
            return (
              e[0] +
              (e[1] << 8) +
              (e[2] << 16) +
              16777216 * (e[3] + (e[4] << 8))
            );
          case 6:
            return (
              e[0] +
              (e[1] << 8) +
              (e[2] << 16) +
              16777216 * (e[3] + (e[4] << 8) + (e[5] << 16))
            );
          default:
            throw new Error(
              "Value more than 48-bits cannot be reliably converted",
            );
        }
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.u8aToNumber = r));
    },
    9249: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.U8A_WRAP_PREFIX = t.U8A_WRAP_POSTFIX = t.U8A_WRAP_ETHEREUM = void 0),
        (t.u8aIsWrapped = c),
        (t.u8aUnwrapBytes = f),
        (t.u8aWrapBytes = h));
      var r = n(6449),
        i = n(4761),
        o = n(3595);
      const u = (t.U8A_WRAP_ETHEREUM = (0, o.u8aToU8a)(
          "Ethereum Signed Message:\n",
        )),
        s = (t.U8A_WRAP_PREFIX = (0, o.u8aToU8a)("<Bytes>")),
        a = (t.U8A_WRAP_POSTFIX = (0, o.u8aToU8a)("</Bytes>")),
        l = s.length + a.length;
      function c(e, t) {
        return (
          (e.length >= l &&
            (0, i.u8aEq)(e.subarray(0, s.length), s) &&
            (0, i.u8aEq)(e.slice(-a.length), a)) ||
          (t &&
            e.length >= u.length &&
            (0, i.u8aEq)(e.subarray(0, u.length), u))
        );
      }
      function f(e) {
        const t = (0, o.u8aToU8a)(e);
        return c(t, !1) ? t.subarray(s.length, t.length - a.length) : t;
      }
      function h(e) {
        const t = (0, o.u8aToU8a)(e);
        return c(t, !0) ? t : (0, r.u8aConcatStrict)([s, t, a]);
      }
    },
    9250: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "bnFromHex", {
          enumerable: !0,
          get: function () {
            return r.hexToBn;
          },
        }));
      var r = n(4762);
    },
    9251: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bnMin = t.bnMax = void 0));
      var r = n(6445);
      ((t.bnMax = (0, r.createCmp)((e, t) => e.gt(t))),
        (t.bnMin = (0, r.createCmp)((e, t) => e.lt(t))));
    },
    9252: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.bnSqrt = u));
      var r = n(3813),
        i = n(6452),
        o = n(3933);
      function u(e) {
        const t = (0, o.bnToBn)(e);
        if (t.isNeg())
          throw new Error("square root of negative numbers is not supported");
        if (t.lte(i.BN_MAX_INTEGER)) return new r.BN(~~Math.sqrt(t.toNumber()));
        let n = i.BN_SQRT_MAX_INTEGER.clone();
        while (1) {
          const e = t.div(n).iadd(n).ishrn(1);
          if (n.eq(e) || n.eq(e.sub(i.BN_ONE))) return n;
          n = e;
        }
      }
    },
    9253: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.bnToHex = o));
      var r = n(3932),
        i = n(6453);
      function o(e, t) {
        let {
          bitLength: n = -1,
          isLe: o = !1,
          isNegative: u = !1,
        } = void 0 === t ? {} : t;
        return (0, r.u8aToHex)(
          (0, i.bnToU8a)(e, { bitLength: n, isLe: o, isNegative: u }),
        );
      }
    },
    9254: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "bufferToU8a", {
          enumerable: !0,
          get: function () {
            return r.bufferToU8a;
          },
        }));
      var r = n(9255);
    },
    9255: function (e, t, n) {
      "use strict";
      function r(e) {
        return new Uint8Array(e || []);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bufferToU8a = r));
    },
    9256: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "compactAddLength", {
          enumerable: !0,
          get: function () {
            return r.compactAddLength;
          },
        }),
        Object.defineProperty(t, "compactFromU8a", {
          enumerable: !0,
          get: function () {
            return i.compactFromU8a;
          },
        }),
        Object.defineProperty(t, "compactFromU8aLim", {
          enumerable: !0,
          get: function () {
            return i.compactFromU8aLim;
          },
        }),
        Object.defineProperty(t, "compactStripLength", {
          enumerable: !0,
          get: function () {
            return o.compactStripLength;
          },
        }),
        Object.defineProperty(t, "compactToU8a", {
          enumerable: !0,
          get: function () {
            return u.compactToU8a;
          },
        }));
      var r = n(9257),
        i = n(6455),
        o = n(9258),
        u = n(6454);
    },
    9257: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.compactAddLength = o));
      var r = n(3932),
        i = n(6454);
      function o(e) {
        return (0, r.u8aConcatStrict)([(0, i.compactToU8a)(e.length), e]);
      }
    },
    9258: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.compactStripLength = i));
      var r = n(6455);
      function i(e) {
        const [t, n] = (0, r.compactFromU8a)(e),
          i = t + n.toNumber();
        return [i, e.subarray(t, i)];
      }
    },
    9259: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.extractTime = l));
      const r = 6e4,
        i = 60 * r,
        o = 24 * i,
        u = { days: 0, hours: 0, milliseconds: 0, minutes: 0, seconds: 0 };
      function s(e, t) {
        return {
          days: (e.days || 0) + t.days,
          hours: (e.hours || 0) + t.hours,
          milliseconds: (e.milliseconds || 0) + t.milliseconds,
          minutes: (e.minutes || 0) + t.minutes,
          seconds: (e.seconds || 0) + t.seconds,
        };
      }
      function a(e) {
        const t = e / 1e3;
        if (t < 60) {
          const n = ~~t;
          return s({ seconds: n }, l(e - 1e3 * n));
        }
        const n = t / 60;
        if (n < 60) {
          const t = ~~n;
          return s({ minutes: t }, l(e - t * r));
        }
        const u = n / 60;
        if (u < 24) {
          const t = ~~u;
          return s({ hours: t }, l(e - t * i));
        }
        const a = ~~(u / 24);
        return s({ days: a }, l(e - a * o));
      }
      function l(e) {
        return e ? (e < 1e3 ? s({ milliseconds: e }, u) : a(e)) : u;
      }
    },
    9260: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "floatToU8a", {
          enumerable: !0,
          get: function () {
            return r.floatToU8a;
          },
        }));
      var r = n(9261);
    },
    9261: function (e, t, n) {
      "use strict";
      function r(e, t) {
        void 0 === e && (e = 0);
        let { bitLength: n = 32, isLe: r = !0 } = void 0 === t ? {} : t;
        if (32 !== n && 64 !== n)
          throw new Error("Invalid bitLength provided, expected 32 or 64");
        const i = new Uint8Array(n / 8),
          o = new DataView(i.buffer, i.byteOffset);
        return (
          32 === n
            ? o.setFloat32(0, Number(e), r)
            : o.setFloat64(0, Number(e), r),
          i
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.floatToU8a = r));
    },
    9262: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "calcSi", {
          enumerable: !0,
          get: function () {
            return a.calcSi;
          },
        }),
        Object.defineProperty(t, "findSi", {
          enumerable: !0,
          get: function () {
            return a.findSi;
          },
        }),
        Object.defineProperty(t, "formatBalance", {
          enumerable: !0,
          get: function () {
            return r.formatBalance;
          },
        }),
        Object.defineProperty(t, "formatDate", {
          enumerable: !0,
          get: function () {
            return i.formatDate;
          },
        }),
        Object.defineProperty(t, "formatDecimal", {
          enumerable: !0,
          get: function () {
            return o.formatDecimal;
          },
        }),
        Object.defineProperty(t, "formatElapsed", {
          enumerable: !0,
          get: function () {
            return u.formatElapsed;
          },
        }),
        Object.defineProperty(t, "formatNumber", {
          enumerable: !0,
          get: function () {
            return s.formatNumber;
          },
        }));
      var r = n(9263),
        i = n(6459),
        o = n(5470),
        u = n(9264),
        s = n(9265),
        a = n(6458);
    },
    9263: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatBalance = void 0));
      var r = n(3933),
        i = n(6456),
        o = n(5470),
        u = n(6457),
        s = n(6458);
      const a = 0,
        l = s.SI[s.SI_MID].text;
      let c = a,
        f = l;
      function h(e, t) {
        let {
            decimals: n = c,
            forceUnit: a,
            locale: l = "en",
            withAll: f = !1,
            withSi: h = !0,
            withSiFull: d = !1,
            withUnit: p = !0,
            withZero: m = !0,
          } = void 0 === t ? {} : t,
          g = (0, r.bnToBn)(e).toString();
        if (0 === g.length || "0" === g) return "0";
        let b = "";
        g[0].startsWith("-") && ((b = "-"), (g = g.substring(1)));
        const v = (0, s.calcSi)(g, n, a),
          y = g.length - (n + v.power),
          M = y <= 0 ? "0" : g.substring(0, y);
        let _ = g
          .padStart(y < 0 ? n : 1, "0")
          .substring(y < 0 ? 0 : y)
          .padEnd(f ? Math.max(n, 4) : 4, "0")
          .substring(0, f ? Math.max(4, n + v.power) : 4);
        if (!m) {
          let e = _.length - 1;
          do {
            "0" === _[e] && e--;
          } while ("0" === _[e]);
          _ = _.substring(0, e + 1);
        }
        const w = (0, i.isBoolean)(p) ? s.SI[s.SI_MID].text : p,
          O =
            h || d
              ? "-" === v.value
                ? p
                  ? " " + w
                  : ""
                : ` ${d ? `${v.text}${p ? " " : ""}` : v.value}${p ? w : ""}`
              : "",
          { decimal: j, thousand: P } = (0, u.getSeparator)(l);
        return `${b}${(0, o.formatDecimal)(M, P)}${_ && `${j}${_}`}${O}`;
      }
      const d = (t.formatBalance = h);
      ((d.calcSi = function (e, t) {
        return (void 0 === t && (t = c), (0, s.calcSi)(e, t));
      }),
        (d.findSi = s.findSi),
        (d.getDefaults = () => ({ decimals: c, unit: f })),
        (d.getOptions = function (e) {
          return (
            void 0 === e && (e = c),
            s.SI.filter((t) => {
              let { power: n } = t;
              return !(n < 0) || e + n >= 0;
            })
          );
        }),
        (d.setDefaults = (e) => {
          var t, n;
          let { decimals: r, unit: i } = e;
          ((c =
            null !== (t = Array.isArray(r) ? r[0] : r) && void 0 !== t ? t : c),
            (f =
              null !== (n = Array.isArray(i) ? i[0] : i) && void 0 !== n
                ? n
                : f),
            (s.SI[s.SI_MID].text = f));
        }));
    },
    9264: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatElapsed = o));
      var r = n(3933);
      function i(e) {
        return e < 15
          ? e.toFixed(1) + "s"
          : e < 60
            ? (0 | e) + "s"
            : e < 3600
              ? ((e / 60) | 0) + "m"
              : ((e / 3600) | 0) + "h";
      }
      function o(e, t) {
        const n = (null === e || void 0 === e ? void 0 : e.getTime()) || 0,
          o = t instanceof Date ? t.getTime() : (0, r.bnToBn)(t).toNumber();
        return n && o ? i(Math.max(Math.abs(n - o), 0) / 1e3) : "0.0s";
      }
    },
    9265: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatNumber = u));
      var r = n(3933),
        i = n(5470),
        o = n(6457);
      function u(e, t) {
        let { locale: n = "en" } = void 0 === t ? {} : t;
        const { thousand: u } = (0, o.getSeparator)(n);
        return (0, i.formatDecimal)((0, r.bnToBn)(e).toString(), u);
      }
    },
    9266: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "hexAddPrefix", {
          enumerable: !0,
          get: function () {
            return r.hexAddPrefix;
          },
        }),
        Object.defineProperty(t, "hexFixLength", {
          enumerable: !0,
          get: function () {
            return i.hexFixLength;
          },
        }),
        Object.defineProperty(t, "hexHasPrefix", {
          enumerable: !0,
          get: function () {
            return o.hexHasPrefix;
          },
        }),
        Object.defineProperty(t, "hexStripPrefix", {
          enumerable: !0,
          get: function () {
            return u.hexStripPrefix;
          },
        }),
        Object.defineProperty(t, "hexToBigInt", {
          enumerable: !0,
          get: function () {
            return s.hexToBigInt;
          },
        }),
        Object.defineProperty(t, "hexToBn", {
          enumerable: !0,
          get: function () {
            return a.hexToBn;
          },
        }),
        Object.defineProperty(t, "hexToNumber", {
          enumerable: !0,
          get: function () {
            return l.hexToNumber;
          },
        }),
        Object.defineProperty(t, "hexToString", {
          enumerable: !0,
          get: function () {
            return c.hexToString;
          },
        }),
        Object.defineProperty(t, "hexToU8a", {
          enumerable: !0,
          get: function () {
            return f.hexToU8a;
          },
        }));
      var r = n(6460),
        i = n(6462),
        o = n(6461),
        u = n(5468),
        s = n(6446),
        a = n(4762),
        l = n(9267),
        c = n(9268),
        f = n(4528);
    },
    9267: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hexToNumber = i));
      var r = n(4762);
      function i(e) {
        return e ? (0, r.hexToBn)(e).toNumber() : NaN;
      }
    },
    9268: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hexToString = o));
      var r = n(6450),
        i = n(4528);
      function o(e) {
        return (0, r.u8aToString)((0, i.hexToU8a)(e));
      }
    },
    9269: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isArray", {
          enumerable: !0,
          get: function () {
            return r.isArray;
          },
        }),
        Object.defineProperty(t, "isAscii", {
          enumerable: !0,
          get: function () {
            return i.isAscii;
          },
        }),
        Object.defineProperty(t, "isBigInt", {
          enumerable: !0,
          get: function () {
            return o.isBigInt;
          },
        }),
        Object.defineProperty(t, "isBn", {
          enumerable: !0,
          get: function () {
            return u.isBn;
          },
        }),
        Object.defineProperty(t, "isBoolean", {
          enumerable: !0,
          get: function () {
            return s.isBoolean;
          },
        }),
        Object.defineProperty(t, "isBuffer", {
          enumerable: !0,
          get: function () {
            return a.isBuffer;
          },
        }),
        Object.defineProperty(t, "isChildClass", {
          enumerable: !0,
          get: function () {
            return l.isChildClass;
          },
        }),
        Object.defineProperty(t, "isClass", {
          enumerable: !0,
          get: function () {
            return c.isClass;
          },
        }),
        Object.defineProperty(t, "isCodec", {
          enumerable: !0,
          get: function () {
            return f.isCodec;
          },
        }),
        Object.defineProperty(t, "isCompact", {
          enumerable: !0,
          get: function () {
            return h.isCompact;
          },
        }),
        Object.defineProperty(t, "isError", {
          enumerable: !0,
          get: function () {
            return d.isError;
          },
        }),
        Object.defineProperty(t, "isFunction", {
          enumerable: !0,
          get: function () {
            return p.isFunction;
          },
        }),
        Object.defineProperty(t, "isHex", {
          enumerable: !0,
          get: function () {
            return m.isHex;
          },
        }),
        Object.defineProperty(t, "isInstanceOf", {
          enumerable: !0,
          get: function () {
            return g.isInstanceOf;
          },
        }),
        Object.defineProperty(t, "isIp", {
          enumerable: !0,
          get: function () {
            return b.isIp;
          },
        }),
        Object.defineProperty(t, "isJsonObject", {
          enumerable: !0,
          get: function () {
            return v.isJsonObject;
          },
        }),
        Object.defineProperty(t, "isNull", {
          enumerable: !0,
          get: function () {
            return y.isNull;
          },
        }),
        Object.defineProperty(t, "isNumber", {
          enumerable: !0,
          get: function () {
            return M.isNumber;
          },
        }),
        Object.defineProperty(t, "isObject", {
          enumerable: !0,
          get: function () {
            return _.isObject;
          },
        }),
        Object.defineProperty(t, "isObservable", {
          enumerable: !0,
          get: function () {
            return w.isObservable;
          },
        }),
        Object.defineProperty(t, "isPromise", {
          enumerable: !0,
          get: function () {
            return O.isPromise;
          },
        }),
        Object.defineProperty(t, "isRiscV", {
          enumerable: !0,
          get: function () {
            return j.isRiscV;
          },
        }),
        Object.defineProperty(t, "isString", {
          enumerable: !0,
          get: function () {
            return P.isString;
          },
        }),
        Object.defineProperty(t, "isTestChain", {
          enumerable: !0,
          get: function () {
            return B.isTestChain;
          },
        }),
        Object.defineProperty(t, "isToBigInt", {
          enumerable: !0,
          get: function () {
            return x.isToBigInt;
          },
        }),
        Object.defineProperty(t, "isToBn", {
          enumerable: !0,
          get: function () {
            return T.isToBn;
          },
        }),
        Object.defineProperty(t, "isU8a", {
          enumerable: !0,
          get: function () {
            return N.isU8a;
          },
        }),
        Object.defineProperty(t, "isUndefined", {
          enumerable: !0,
          get: function () {
            return I.isUndefined;
          },
        }),
        Object.defineProperty(t, "isUtf8", {
          enumerable: !0,
          get: function () {
            return E.isUtf8;
          },
        }),
        Object.defineProperty(t, "isWasm", {
          enumerable: !0,
          get: function () {
            return A.isWasm;
          },
        }));
      var r = n(9270),
        i = n(9271),
        o = n(5469),
        u = n(5459),
        s = n(6456),
        a = n(5463),
        l = n(9272),
        c = n(6463),
        f = n(9273),
        h = n(9274),
        d = n(9275),
        p = n(3931),
        m = n(3814),
        g = n(9276),
        b = n(9277),
        v = n(9278),
        y = n(9279),
        M = n(9280),
        _ = n(5461),
        w = n(9281),
        O = n(9282),
        j = n(9283),
        P = n(5471),
        B = n(9284),
        x = n(5460),
        T = n(5462),
        N = n(4529),
        I = n(9285),
        E = n(9286),
        A = n(9287);
    },
    9270: function (e, t, n) {
      "use strict";
      function r(e) {
        return Array.isArray(e);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isArray = r));
    },
    9271: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isAscii = a));
      var r = n(3595),
        i = n(3814),
        o = n(5471);
      function u(e) {
        for (let t = 0, n = e.length; t < n; t++) {
          const n = e.charCodeAt(t);
          if (n < 32 || n > 126) return !1;
        }
        return !0;
      }
      function s(e) {
        for (let t = 0, n = e.length; t < n; t++) {
          const n = 0 | e[t];
          if (n < 32 || n > 126) return !1;
        }
        return !0;
      }
      function a(e) {
        return (0, o.isString)(e)
          ? (0, i.isHex)(e)
            ? s((0, r.u8aToU8a)(e))
            : u(e)
          : !!e && s(e);
      }
    },
    9272: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isChildClass = i));
      var r = n(6463);
      function i(e, t) {
        return (
          !(!(0, r.isClass)(t) || !(0, r.isClass)(e)) &&
          (e === t || e.isPrototypeOf(t))
        );
      }
    },
    9273: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isCodec = u));
      var r = n(3815);
      const i = (0, r.isOnObject)("toHex", "toHuman", "toU8a"),
        o = (0, r.isOnObject)("get");
      function u(e) {
        return i(e) && o(e.registry);
      }
    },
    9274: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isCompact = void 0));
      var r = n(3815);
      t.isCompact = (0, r.isOnObject)("toBigInt", "toBn", "toNumber", "unwrap");
    },
    9275: function (e, t, n) {
      "use strict";
      function r(e) {
        return (e && e.constructor) === Error || e instanceof Error;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isError = r));
    },
    9276: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (e && e.constructor) === t || e instanceof t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isInstanceOf = r));
    },
    9277: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isIp = l));
      const r =
          "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
        i = "[a-fA-F\\d]{1,4}",
        o =
          `\n(?:\n(?:${i}:){7}(?:${i}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${i}:){6}(?:${r}|:${i}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${i}:){5}(?::${r}|(?::${i}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${i}:){4}(?:(?::${i}){0,1}:${r}|(?::${i}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${i}:){3}(?:(?::${i}){0,2}:${r}|(?::${i}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${i}:){2}(?:(?::${i}){0,3}:${r}|(?::${i}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${i}:){1}(?:(?::${i}){0,4}:${r}|(?::${i}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${i}){0,5}:${r}|(?::${i}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`
            .replace(/\s*\/\/.*$/gm, "")
            .replace(/\n/g, "")
            .trim(),
        u = new RegExp(`(?:^${r}$)|(?:^${o}$)`),
        s = new RegExp(`^${r}$`),
        a = new RegExp(`^${o}$`);
      function l(e, t) {
        switch (t) {
          case "v4":
            return s.test(e);
          case "v6":
            return a.test(e);
          default:
            return u.test(e);
        }
      }
    },
    9278: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isJsonObject = i));
      var r = n(5472);
      function i(e) {
        const t = "string" !== typeof e ? (0, r.stringify)(e) : e;
        try {
          const e = JSON.parse(t);
          return "object" === typeof e && null !== e;
        } catch {
          return !1;
        }
      }
    },
    9279: function (e, t, n) {
      "use strict";
      function r(e) {
        return null === e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isNull = r));
    },
    9280: function (e, t, n) {
      "use strict";
      function r(e) {
        return "number" === typeof e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isNumber = r));
    },
    9281: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isObservable = void 0));
      var r = n(3815);
      t.isObservable = (0, r.isOn)("next");
    },
    9282: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isPromise = void 0));
      var r = n(3815);
      t.isPromise = (0, r.isOnObject)("catch", "then");
    },
    9283: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isRiscV = s));
      var r = n(4761),
        i = n(4529);
      const o = new Uint8Array([127, 69, 76, 70]),
        u = new Uint8Array([80, 86, 77, 0]);
      function s(e) {
        if ((0, i.isU8a)(e)) {
          const t = e.subarray(0, 4);
          return (0, r.u8aEq)(t, u) || (0, r.u8aEq)(t, o);
        }
        return !1;
      }
    },
    9284: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isTestChain = i));
      const r = /(Development|Local Testnet)$/;
      function i(e) {
        return !!e && !!r.test(e.toString());
      }
    },
    9285: function (e, t, n) {
      "use strict";
      function r(e) {
        return void 0 === e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isUndefined = r));
    },
    9286: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isUtf8 = o));
      var r = n(3595),
        i = n(5471);
      function o(e) {
        if (!e) return (0, i.isString)(e);
        const t = (0, r.u8aToU8a)(e),
          n = t.length;
        let o = 0;
        while (o < n)
          if (t[o] <= 127) o += 1;
          else if (t[o] >= 194 && t[o] <= 223) {
            if (!(o + 1 < n)) return !1;
            if (t[o + 1] < 128 || t[o + 1] > 191) return !1;
            o += 2;
          } else if (224 === t[o]) {
            if (!(o + 2 < n)) return !1;
            if (t[o + 1] < 160 || t[o + 1] > 191) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            o += 3;
          } else if (t[o] >= 225 && t[o] <= 236) {
            if (!(o + 2 < n)) return !1;
            if (t[o + 1] < 128 || t[o + 1] > 191) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            o += 3;
          } else if (237 === t[o]) {
            if (!(o + 2 < n)) return !1;
            if (t[o + 1] < 128 || t[o + 1] > 159) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            o += 3;
          } else if (t[o] >= 238 && t[o] <= 239) {
            if (!(o + 2 < n)) return !1;
            if (t[o + 1] < 128 || t[o + 1] > 191) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            o += 3;
          } else if (240 === t[o]) {
            if (!(o + 3 < n)) return !1;
            if (t[o + 1] < 144 || t[o + 1] > 191) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            if (t[o + 3] < 128 || t[o + 3] > 191) return !1;
            o += 4;
          } else if (t[o] >= 241 && t[o] <= 243) {
            if (!(o + 3 < n)) return !1;
            if (t[o + 1] < 128 || t[o + 1] > 191) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            if (t[o + 3] < 128 || t[o + 3] > 191) return !1;
            o += 4;
          } else {
            if (244 !== t[o]) return !1;
            if (!(o + 3 < n)) return !1;
            if (t[o + 1] < 128 || t[o + 1] > 143) return !1;
            if (t[o + 2] < 128 || t[o + 2] > 191) return !1;
            if (t[o + 3] < 128 || t[o + 3] > 191) return !1;
            o += 4;
          }
        return !0;
      }
    },
    9287: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.isWasm = u));
      var r = n(4761),
        i = n(4529);
      const o = new Uint8Array([0, 97, 115, 109]);
      function u(e) {
        return (0, i.isU8a)(e) && (0, r.u8aEq)(e.subarray(0, 4), o);
      }
    },
    9288: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, i) {
        void 0 === i && (i = 0);
        const o = r ? r(t, i) : t.toString();
        let u;
        Object.defineProperty(e, o, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            if (void 0 === u) {
              u = n(t, i, this);
              try {
                Object.defineProperty(this, o, { value: u });
              } catch {}
            }
            return u;
          },
        });
      }
      function i(e, t, n, i) {
        for (let o = 0, u = t.length; o < u; o++) r(e, t[o], n, i, o);
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.lazyMethod = r),
        (t.lazyMethods = i));
    },
    9289: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.logger = w),
        (t.loggerFormat = m));
      var r = n(3191),
        i = n(6459),
        o = n(5459),
        u = n(5463),
        s = n(3931),
        a = n(5461),
        l = n(4529),
        c = n(5466),
        f = n(3595),
        h = n(6464);
      const d = { debug: "log", error: "error", log: "log", warn: "warn" };
      function p(e) {
        if (e && (0, a.isObject)(e) && e.constructor === Object) {
          const t = {};
          for (const [n, r] of Object.entries(e)) t[n] = m(r);
          return t;
        }
        return e;
      }
      function m(e) {
        return Array.isArray(e)
          ? e.map(m)
          : (0, o.isBn)(e)
            ? e.toString()
            : (0, l.isU8a)(e) || (0, u.isBuffer)(e)
              ? (0, c.u8aToHex)((0, f.u8aToU8a)(e))
              : p(e);
      }
      function g(e) {
        return (t) => {
          if (e <= 0) return t;
          const n = "" + t;
          return n.length < e ? t : n.substring(0, e) + " ...";
        };
      }
      function b(e, t, n, r) {
        if (
          (void 0 === r && (r = -1), 1 === n.length && (0, s.isFunction)(n[0]))
        ) {
          const i = n[0]();
          return b(e, t, Array.isArray(i) ? i : [i], r);
        }
        console[d[e]]((0, i.formatDate)(new Date()), t, ...n.map(m).map(g(r)));
      }
      function v(e, t) {
        return (
          !!e &&
          ("*" === e ||
            t === e ||
            (e.endsWith("*") && t.startsWith(e.slice(0, -1))))
        );
      }
      function y(e, t) {
        return (
          !!e &&
          e.startsWith("-") &&
          (t === e.slice(1) ||
            (e.endsWith("*") && t.startsWith(e.slice(1, -1))))
        );
      }
      function M(e, t) {
        let n = !1;
        for (const r of e) v(r, t) ? (n = !0) : y(r, t) && (n = !1);
        return n;
      }
      function _(e) {
        var t, n, i, o;
        const u = parseInt(
          (null === (t = r.xglobal.process) ||
          void 0 === t ||
          null === (n = t.env) ||
          void 0 === n
            ? void 0
            : n["DEBUG_MAX"]) || "-1",
          10,
        );
        return [
          M(
            (
              (null === (i = r.xglobal.process) ||
              void 0 === i ||
              null === (o = i.env) ||
              void 0 === o
                ? void 0
                : o["DEBUG"]) || ""
            )
              .toLowerCase()
              .split(","),
            e,
          ),
          isNaN(u) ? -1 : u,
        ];
      }
      function w(e) {
        const t = (e.toUpperCase() + ":").padStart(16),
          [n, r] = _(e.toLowerCase());
        return {
          debug: n
            ? function () {
                for (
                  var e = arguments.length, n = new Array(e), i = 0;
                  i < e;
                  i++
                )
                  n[i] = arguments[i];
                return b("debug", t, n, r);
              }
            : h.noop,
          error: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return b("error", t, n);
          },
          log: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return b("log", t, n);
          },
          noop: h.noop,
          warn: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return b("warn", t, n);
          },
        };
      }
    },
    9290: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.memoize = o));
      var r = n(5472);
      function i() {
        return "none";
      }
      function o(e, t) {
        let { getInstanceId: n = i } = void 0 === t ? {} : t;
        const o = {},
          u = function () {
            for (var t = arguments.length, i = new Array(t), u = 0; u < t; u++)
              i[u] = arguments[u];
            const s = (0, r.stringify)(i),
              a = n();
            return (
              o[a] || (o[a] = {}),
              void 0 === o[a][s] && (o[a][s] = e(...i)),
              o[a][s]
            );
          };
        return (
          (u.unmemoize = function () {
            for (
              var e, t = arguments.length, i = new Array(t), u = 0;
              u < t;
              u++
            )
              i[u] = arguments[u];
            const s = (0, r.stringify)(i),
              a = n();
            void 0 !== (null === (e = o[a]) || void 0 === e ? void 0 : e[s]) &&
              delete o[a][s];
          }),
          u
        );
      }
    },
    9291: function (e, t, n) {
      "use strict";
      function r(e, t) {
        setTimeout(() => {
          Promise.resolve()
            .then(() => {
              e();
            })
            .catch((e) => {
              t ? t(e) : console.error(e);
            });
        }, 0);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.nextTick = r));
    },
    9292: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "numberToHex", {
          enumerable: !0,
          get: function () {
            return r.numberToHex;
          },
        }),
        Object.defineProperty(t, "numberToU8a", {
          enumerable: !0,
          get: function () {
            return i.numberToU8a;
          },
        }));
      var r = n(6465),
        i = n(9293);
    },
    9293: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.numberToU8a = o));
      var r = n(4528),
        i = n(6465);
      function o(e, t) {
        return (
          void 0 === t && (t = -1),
          (0, r.hexToU8a)((0, i.numberToHex)(e, t))
        );
      }
    },
    9294: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "objectClear", {
          enumerable: !0,
          get: function () {
            return r.objectClear;
          },
        }),
        Object.defineProperty(t, "objectCopy", {
          enumerable: !0,
          get: function () {
            return i.objectCopy;
          },
        }),
        Object.defineProperty(t, "objectEntries", {
          enumerable: !0,
          get: function () {
            return o.objectEntries;
          },
        }),
        Object.defineProperty(t, "objectKeys", {
          enumerable: !0,
          get: function () {
            return u.objectKeys;
          },
        }),
        Object.defineProperty(t, "objectProperties", {
          enumerable: !0,
          get: function () {
            return s.objectProperties;
          },
        }),
        Object.defineProperty(t, "objectProperty", {
          enumerable: !0,
          get: function () {
            return s.objectProperty;
          },
        }),
        Object.defineProperty(t, "objectSpread", {
          enumerable: !0,
          get: function () {
            return a.objectSpread;
          },
        }),
        Object.defineProperty(t, "objectValues", {
          enumerable: !0,
          get: function () {
            return l.objectValues;
          },
        }));
      var r = n(9295),
        i = n(9296),
        o = n(9297),
        u = n(9298),
        s = n(9299),
        a = n(6466),
        l = n(9300);
    },
    9295: function (e, t, n) {
      "use strict";
      function r(e) {
        const t = Object.keys(e);
        for (let n = 0, r = t.length; n < r; n++) delete e[t[n]];
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.objectClear = r));
    },
    9296: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.objectCopy = i));
      var r = n(6466);
      function i(e) {
        return (0, r.objectSpread)({}, e);
      }
    },
    9297: function (e, t, n) {
      "use strict";
      function r(e) {
        return Object.entries(e);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.objectEntries = r));
    },
    9298: function (e, t, n) {
      "use strict";
      function r(e) {
        return Object.keys(e);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.objectKeys = r));
    },
    9299: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, i) {
        void 0 === i && (i = 0);
        const o = r ? r(t, i) : t;
        o in e ||
          Object.defineProperty(e, o, {
            enumerable: !0,
            get: function () {
              return n(t, i, this);
            },
          });
      }
      function i(e, t, n, i) {
        for (let o = 0, u = t.length; o < u; o++) r(e, t[o], n, i, o);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.objectProperties = i),
        (t.objectProperty = r));
    },
    9300: function (e, t, n) {
      "use strict";
      function r(e) {
        return Object.values(e);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.objectValues = r));
    },
    9301: function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
          i < n;
          i++
        )
          r[i - 2] = arguments[i];
        return new Promise((n, i) => {
          t.apply(
            e,
            r.concat((e, t) => {
              e ? i(e) : n(t);
            }),
          );
        });
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.promisify = r));
    },
    9302: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "stringCamelCase", {
          enumerable: !0,
          get: function () {
            return r.stringCamelCase;
          },
        }),
        Object.defineProperty(t, "stringLowerFirst", {
          enumerable: !0,
          get: function () {
            return i.stringLowerFirst;
          },
        }),
        Object.defineProperty(t, "stringPascalCase", {
          enumerable: !0,
          get: function () {
            return r.stringPascalCase;
          },
        }),
        Object.defineProperty(t, "stringShorten", {
          enumerable: !0,
          get: function () {
            return o.stringShorten;
          },
        }),
        Object.defineProperty(t, "stringToHex", {
          enumerable: !0,
          get: function () {
            return u.stringToHex;
          },
        }),
        Object.defineProperty(t, "stringToU8a", {
          enumerable: !0,
          get: function () {
            return s.stringToU8a;
          },
        }),
        Object.defineProperty(t, "stringUpperFirst", {
          enumerable: !0,
          get: function () {
            return i.stringUpperFirst;
          },
        }));
      var r = n(6467),
        i = n(9303),
        o = n(9304),
        u = n(9305),
        s = n(5465);
    },
    9303: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringUpperFirst = t.stringLowerFirst = void 0));
      var r = n(6467);
      function i(e) {
        return (t) => (t ? e[t.charCodeAt(0)] + t.slice(1) : "");
      }
      ((t.stringLowerFirst = i(r.CC_TO_LO)),
        (t.stringUpperFirst = i(r.CC_TO_UP)));
    },
    9304: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          void 0 === t && (t = 6),
          e.length <= 2 + 2 * t
            ? e.toString()
            : `${e.substring(0, t)}…${e.slice(-t)}`
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringShorten = r));
    },
    9305: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringToHex = o));
      var r = n(5466),
        i = n(5465);
      function o(e) {
        return (0, r.u8aToHex)((0, i.stringToU8a)(e));
      }
    },
  },
]);
