(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [54],
  {
    2966: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.pbkdf2 = a),
        (e.pbkdf2Async = f));
      const r = n(379),
        o = n(130);
      function i(t, e, n, i) {
        (0, o.ahash)(t);
        const s = (0, o.checkOpts)({ dkLen: 32, asyncTick: 10 }, i),
          { c: a, dkLen: f, asyncTick: c } = s;
        if (((0, o.anumber)(a), (0, o.anumber)(f), (0, o.anumber)(c), a < 1))
          throw new Error("iterations (c) should be >= 1");
        const u = (0, o.kdfInputToBytes)(e),
          d = (0, o.kdfInputToBytes)(n),
          l = new Uint8Array(f),
          h = r.hmac.create(t, u),
          p = h._cloneInto().update(d);
        return { c: a, dkLen: f, asyncTick: c, DK: l, PRF: h, PRFSalt: p };
      }
      function s(t, e, n, r, i) {
        return (t.destroy(), e.destroy(), r && r.destroy(), (0, o.clean)(i), n);
      }
      function a(t, e, n, r) {
        const { c: a, dkLen: f, DK: c, PRF: u, PRFSalt: d } = i(t, e, n, r);
        let l;
        const h = new Uint8Array(4),
          p = (0, o.createView)(h),
          y = new Uint8Array(u.outputLen);
        for (let o = 1, i = 0; i < f; o++, i += u.outputLen) {
          const t = c.subarray(i, i + u.outputLen);
          (p.setInt32(0, o, !1),
            (l = d._cloneInto(l)).update(h).digestInto(y),
            t.set(y.subarray(0, t.length)));
          for (let e = 1; e < a; e++) {
            u._cloneInto(l).update(y).digestInto(y);
            for (let e = 0; e < t.length; e++) t[e] ^= y[e];
          }
        }
        return s(u, d, c, l, y);
      }
      async function f(t, e, n, r) {
        const {
          c: a,
          dkLen: f,
          asyncTick: c,
          DK: u,
          PRF: d,
          PRFSalt: l,
        } = i(t, e, n, r);
        let h;
        const p = new Uint8Array(4),
          y = (0, o.createView)(p),
          m = new Uint8Array(d.outputLen);
        for (let i = 1, s = 0; s < f; i++, s += d.outputLen) {
          const t = u.subarray(s, s + d.outputLen);
          (y.setInt32(0, i, !1),
            (h = l._cloneInto(h)).update(p).digestInto(m),
            t.set(m.subarray(0, t.length)),
            await (0, o.asyncLoop)(a - 1, c, () => {
              d._cloneInto(h).update(m).digestInto(m);
              for (let e = 0; e < t.length; e++) t[e] ^= m[e];
            }));
        }
        return s(d, l, u, h, m);
      }
    },
    3151: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.notImplemented =
          e.bitMask =
          e.utf8ToBytes =
          e.randomBytes =
          e.isBytes =
          e.hexToBytes =
          e.concatBytes =
          e.bytesToUtf8 =
          e.bytesToHex =
          e.anumber =
          e.abytes =
            void 0),
        (e.abool = a),
        (e.numberToHexUnpadded = f),
        (e.hexToNumber = c),
        (e.bytesToNumberBE = u),
        (e.bytesToNumberLE = d),
        (e.numberToBytesBE = l),
        (e.numberToBytesLE = h),
        (e.numberToVarBytesBE = p),
        (e.ensureBytes = y),
        (e.equalBytes = m),
        (e.inRange = b),
        (e.aInRange = v),
        (e.bitLen = g),
        (e.bitGet = B),
        (e.bitSet = E),
        (e.createHmacDrbg = R),
        (e.validateObject = O),
        (e.isHash = P),
        (e._validateObject = S),
        (e.memoized = A));
      const r = n(130);
      var o = n(130);
      (Object.defineProperty(e, "abytes", {
        enumerable: !0,
        get: function () {
          return o.abytes;
        },
      }),
        Object.defineProperty(e, "anumber", {
          enumerable: !0,
          get: function () {
            return o.anumber;
          },
        }),
        Object.defineProperty(e, "bytesToHex", {
          enumerable: !0,
          get: function () {
            return o.bytesToHex;
          },
        }),
        Object.defineProperty(e, "bytesToUtf8", {
          enumerable: !0,
          get: function () {
            return o.bytesToUtf8;
          },
        }),
        Object.defineProperty(e, "concatBytes", {
          enumerable: !0,
          get: function () {
            return o.concatBytes;
          },
        }),
        Object.defineProperty(e, "hexToBytes", {
          enumerable: !0,
          get: function () {
            return o.hexToBytes;
          },
        }),
        Object.defineProperty(e, "isBytes", {
          enumerable: !0,
          get: function () {
            return o.isBytes;
          },
        }),
        Object.defineProperty(e, "randomBytes", {
          enumerable: !0,
          get: function () {
            return o.randomBytes;
          },
        }),
        Object.defineProperty(e, "utf8ToBytes", {
          enumerable: !0,
          get: function () {
            return o.utf8ToBytes;
          },
        }));
      const i = BigInt(0),
        s = BigInt(1);
      function a(t, e) {
        if ("boolean" !== typeof e)
          throw new Error(t + " boolean expected, got " + e);
      }
      function f(t) {
        const e = t.toString(16);
        return 1 & e.length ? "0" + e : e;
      }
      function c(t) {
        if ("string" !== typeof t)
          throw new Error("hex string expected, got " + typeof t);
        return "" === t ? i : BigInt("0x" + t);
      }
      function u(t) {
        return c((0, r.bytesToHex)(t));
      }
      function d(t) {
        return (
          (0, r.abytes)(t),
          c((0, r.bytesToHex)(Uint8Array.from(t).reverse()))
        );
      }
      function l(t, e) {
        return (0, r.hexToBytes)(t.toString(16).padStart(2 * e, "0"));
      }
      function h(t, e) {
        return l(t, e).reverse();
      }
      function p(t) {
        return (0, r.hexToBytes)(f(t));
      }
      function y(t, e, n) {
        let o;
        if ("string" === typeof e)
          try {
            o = (0, r.hexToBytes)(e);
          } catch (s) {
            throw new Error(
              t + " must be hex string or Uint8Array, cause: " + s,
            );
          }
        else {
          if (!(0, r.isBytes)(e))
            throw new Error(t + " must be hex string or Uint8Array");
          o = Uint8Array.from(e);
        }
        const i = o.length;
        if ("number" === typeof n && i !== n)
          throw new Error(t + " of length " + n + " expected, got " + i);
        return o;
      }
      function m(t, e) {
        if (t.length !== e.length) return !1;
        let n = 0;
        for (let r = 0; r < t.length; r++) n |= t[r] ^ e[r];
        return 0 === n;
      }
      const w = (t) => "bigint" === typeof t && i <= t;
      function b(t, e, n) {
        return w(t) && w(e) && w(n) && e <= t && t < n;
      }
      function v(t, e, n, r) {
        if (!b(e, n, r))
          throw new Error(
            "expected valid " + t + ": " + n + " <= n < " + r + ", got " + e,
          );
      }
      function g(t) {
        let e;
        for (e = 0; t > i; t >>= s, e += 1);
        return e;
      }
      function B(t, e) {
        return (t >> BigInt(e)) & s;
      }
      function E(t, e, n) {
        return t | ((n ? s : i) << BigInt(e));
      }
      const x = (t) => (s << BigInt(t)) - s;
      function R(t, e, n) {
        if ("number" !== typeof t || t < 2)
          throw new Error("hashLen must be a number");
        if ("number" !== typeof e || e < 2)
          throw new Error("qByteLen must be a number");
        if ("function" !== typeof n)
          throw new Error("hmacFn must be a function");
        const o = (t) => new Uint8Array(t),
          i = (t) => Uint8Array.of(t);
        let s = o(t),
          a = o(t),
          f = 0;
        const c = () => {
            (s.fill(1), a.fill(0), (f = 0));
          },
          u = function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return n(a, s, ...e);
          },
          d = function (t) {
            (void 0 === t && (t = o(0)),
              (a = u(i(0), t)),
              (s = u()),
              0 !== t.length && ((a = u(i(1), t)), (s = u())));
          },
          l = () => {
            if (f++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let t = 0;
            const n = [];
            while (t < e) {
              s = u();
              const e = s.slice();
              (n.push(e), (t += s.length));
            }
            return (0, r.concatBytes)(...n);
          },
          h = (t, e) => {
            (c(), d(t));
            let n = void 0;
            while (!(n = e(l()))) d();
            return (c(), n);
          };
        return h;
      }
      e.bitMask = x;
      const I = {
        bigint: (t) => "bigint" === typeof t,
        function: (t) => "function" === typeof t,
        boolean: (t) => "boolean" === typeof t,
        string: (t) => "string" === typeof t,
        stringOrUint8Array: (t) => "string" === typeof t || (0, r.isBytes)(t),
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          "function" === typeof t && Number.isSafeInteger(t.outputLen),
      };
      function O(t, e, n) {
        void 0 === n && (n = {});
        const r = (e, n, r) => {
          const o = I[n];
          if ("function" !== typeof o)
            throw new Error("invalid validator function");
          const i = t[e];
          if ((!r || void 0 !== i) && !o(i, t))
            throw new Error(
              "param " +
                String(e) +
                " is invalid. Expected " +
                n +
                ", got " +
                i,
            );
        };
        for (const [o, i] of Object.entries(e)) r(o, i, !1);
        for (const [o, i] of Object.entries(n)) r(o, i, !0);
        return t;
      }
      function P(t) {
        return "function" === typeof t && Number.isSafeInteger(t.outputLen);
      }
      function S(t, e, n) {
        if ((void 0 === n && (n = {}), !t || "object" !== typeof t))
          throw new Error("expected valid options object");
        function r(e, n, r) {
          const o = t[e];
          if (r && void 0 === o) return;
          const i = typeof o;
          if (i !== n || null === o)
            throw new Error(`param "${e}" is invalid: expected ${n}, got ${i}`);
        }
        (Object.entries(e).forEach((t) => {
          let [e, n] = t;
          return r(e, n, !1);
        }),
          Object.entries(n).forEach((t) => {
            let [e, n] = t;
            return r(e, n, !0);
          }));
      }
      const T = () => {
        throw new Error("not implemented");
      };
      function A(t) {
        const e = new WeakMap();
        return function (n) {
          const r = e.get(n);
          if (void 0 !== r) return r;
          for (
            var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1;
            s < o;
            s++
          )
            i[s - 1] = arguments[s];
          const a = t(n, ...i);
          return (e.set(n, a), a);
        };
      }
      e.notImplemented = T;
    },
    3185: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isNegativeLE = void 0),
        (e.mod = d),
        (e.pow = l),
        (e.pow2 = h),
        (e.invert = p),
        (e.tonelliShanks = w),
        (e.FpSqrt = b),
        (e.validateField = B),
        (e.FpPow = E),
        (e.FpInvertBatch = x),
        (e.FpDiv = R),
        (e.FpLegendre = I),
        (e.FpIsSquare = O),
        (e.nLength = P),
        (e.Field = S),
        (e.FpSqrtOdd = T),
        (e.FpSqrtEven = A),
        (e.hashToPrivateScalar = L),
        (e.getFieldBytesLength = _),
        (e.getMinHashLength = N),
        (e.mapHashToField = k));
      const r = n(3151),
        o = BigInt(0),
        i = BigInt(1),
        s = BigInt(2),
        a = BigInt(3),
        f = BigInt(4),
        c = BigInt(5),
        u = BigInt(8);
      function d(t, e) {
        const n = t % e;
        return n >= o ? n : e + n;
      }
      function l(t, e, n) {
        return E(S(n), t, e);
      }
      function h(t, e, n) {
        let r = t;
        while (e-- > o) ((r *= r), (r %= n));
        return r;
      }
      function p(t, e) {
        if (t === o) throw new Error("invert: expected non-zero number");
        if (e <= o)
          throw new Error("invert: expected positive modulus, got " + e);
        let n = d(t, e),
          r = e,
          s = o,
          a = i,
          f = i,
          c = o;
        while (n !== o) {
          const t = r / n,
            e = r % n,
            o = s - f * t,
            i = a - c * t;
          ((r = n), (n = e), (s = f), (a = c), (f = o), (c = i));
        }
        const u = r;
        if (u !== i) throw new Error("invert: does not exist");
        return d(s, e);
      }
      function y(t, e) {
        const n = (t.ORDER + i) / f,
          r = t.pow(e, n);
        if (!t.eql(t.sqr(r), e)) throw new Error("Cannot find square root");
        return r;
      }
      function m(t, e) {
        const n = (t.ORDER - c) / u,
          r = t.mul(e, s),
          o = t.pow(r, n),
          i = t.mul(e, o),
          a = t.mul(t.mul(i, s), o),
          f = t.mul(i, t.sub(a, t.ONE));
        if (!t.eql(t.sqr(f), e)) throw new Error("Cannot find square root");
        return f;
      }
      function w(t) {
        if (t < BigInt(3))
          throw new Error("sqrt is not defined for small field");
        let e = t - i,
          n = 0;
        while (e % s === o) ((e /= s), n++);
        let r = s;
        const a = S(t);
        while (1 === I(a, r))
          if (r++ > 1e3)
            throw new Error("Cannot find square root: probably non-prime P");
        if (1 === n) return y;
        let f = a.pow(r, e);
        const c = (e + i) / s;
        return function (t, r) {
          if (t.is0(r)) return r;
          if (1 !== I(t, r)) throw new Error("Cannot find square root");
          let o = n,
            s = t.mul(t.ONE, f),
            a = t.pow(r, e),
            u = t.pow(r, c);
          while (!t.eql(a, t.ONE)) {
            if (t.is0(a)) return t.ZERO;
            let e = 1,
              n = t.sqr(a);
            while (!t.eql(n, t.ONE))
              if ((e++, (n = t.sqr(n)), e === o))
                throw new Error("Cannot find square root");
            const r = i << BigInt(o - e - 1),
              f = t.pow(s, r);
            ((o = e), (s = t.sqr(f)), (a = t.mul(a, s)), (u = t.mul(u, f)));
          }
          return u;
        };
      }
      function b(t) {
        return t % f === a ? y : t % u === c ? m : w(t);
      }
      const v = (t, e) => (d(t, e) & i) === i;
      e.isNegativeLE = v;
      const g = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function B(t) {
        const e = {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "number",
            BITS: "number",
          },
          n = g.reduce((t, e) => ((t[e] = "function"), t), e);
        return ((0, r._validateObject)(t, n), t);
      }
      function E(t, e, n) {
        if (n < o) throw new Error("invalid exponent, negatives unsupported");
        if (n === o) return t.ONE;
        if (n === i) return e;
        let r = t.ONE,
          s = e;
        while (n > o) (n & i && (r = t.mul(r, s)), (s = t.sqr(s)), (n >>= i));
        return r;
      }
      function x(t, e, n) {
        void 0 === n && (n = !1);
        const r = new Array(e.length).fill(n ? t.ZERO : void 0),
          o = e.reduce(
            (e, n, o) => (t.is0(n) ? e : ((r[o] = e), t.mul(e, n))),
            t.ONE,
          ),
          i = t.inv(o);
        return (
          e.reduceRight(
            (e, n, o) =>
              t.is0(n) ? e : ((r[o] = t.mul(e, r[o])), t.mul(e, n)),
            i,
          ),
          r
        );
      }
      function R(t, e, n) {
        return t.mul(e, "bigint" === typeof n ? p(n, t.ORDER) : t.inv(n));
      }
      function I(t, e) {
        const n = (t.ORDER - i) / s,
          r = t.pow(e, n),
          o = t.eql(r, t.ONE),
          a = t.eql(r, t.ZERO),
          f = t.eql(r, t.neg(t.ONE));
        if (!o && !a && !f) throw new Error("invalid Legendre symbol result");
        return o ? 1 : a ? 0 : -1;
      }
      function O(t, e) {
        const n = I(t, e);
        return 1 === n;
      }
      function P(t, e) {
        void 0 !== e && (0, r.anumber)(e);
        const n = void 0 !== e ? e : t.toString(2).length,
          o = Math.ceil(n / 8);
        return { nBitLength: n, nByteLength: o };
      }
      function S(t, e, n, s) {
        if ((void 0 === n && (n = !1), void 0 === s && (s = {}), t <= o))
          throw new Error("invalid field: expected ORDER > 0, got " + t);
        let a = void 0,
          f = void 0;
        if ("object" === typeof e && null != e) {
          if (s.sqrt || n)
            throw new Error("cannot specify opts in two arguments");
          const t = e;
          (t.BITS && (a = t.BITS),
            t.sqrt && (f = t.sqrt),
            "boolean" === typeof t.isLE && (n = t.isLE));
        } else ("number" === typeof e && (a = e), s.sqrt && (f = s.sqrt));
        const { nBitLength: c, nByteLength: u } = P(t, a);
        if (u > 2048)
          throw new Error("invalid field: expected ORDER of <= 2048 bytes");
        let l;
        const h = Object.freeze({
          ORDER: t,
          isLE: n,
          BITS: c,
          BYTES: u,
          MASK: (0, r.bitMask)(c),
          ZERO: o,
          ONE: i,
          create: (e) => d(e, t),
          isValid: (e) => {
            if ("bigint" !== typeof e)
              throw new Error(
                "invalid field element: expected bigint, got " + typeof e,
              );
            return o <= e && e < t;
          },
          is0: (t) => t === o,
          isValidNot0: (t) => !h.is0(t) && h.isValid(t),
          isOdd: (t) => (t & i) === i,
          neg: (e) => d(-e, t),
          eql: (t, e) => t === e,
          sqr: (e) => d(e * e, t),
          add: (e, n) => d(e + n, t),
          sub: (e, n) => d(e - n, t),
          mul: (e, n) => d(e * n, t),
          pow: (t, e) => E(h, t, e),
          div: (e, n) => d(e * p(n, t), t),
          sqrN: (t) => t * t,
          addN: (t, e) => t + e,
          subN: (t, e) => t - e,
          mulN: (t, e) => t * e,
          inv: (e) => p(e, t),
          sqrt: f || ((e) => (l || (l = b(t)), l(h, e))),
          toBytes: (t) =>
            n ? (0, r.numberToBytesLE)(t, u) : (0, r.numberToBytesBE)(t, u),
          fromBytes: (t) => {
            if (t.length !== u)
              throw new Error(
                "Field.fromBytes: expected " + u + " bytes, got " + t.length,
              );
            return n ? (0, r.bytesToNumberLE)(t) : (0, r.bytesToNumberBE)(t);
          },
          invertBatch: (t) => x(h, t),
          cmov: (t, e, n) => (n ? e : t),
        });
        return Object.freeze(h);
      }
      function T(t, e) {
        if (!t.isOdd) throw new Error("Field doesn't have isOdd");
        const n = t.sqrt(e);
        return t.isOdd(n) ? n : t.neg(n);
      }
      function A(t, e) {
        if (!t.isOdd) throw new Error("Field doesn't have isOdd");
        const n = t.sqrt(e);
        return t.isOdd(n) ? t.neg(n) : n;
      }
      function L(t, e, n) {
        (void 0 === n && (n = !1), (t = (0, r.ensureBytes)("privateHash", t)));
        const o = t.length,
          s = P(e).nByteLength + 8;
        if (s < 24 || o < s || o > 1024)
          throw new Error(
            "hashToPrivateScalar: expected " +
              s +
              "-1024 bytes of input, got " +
              o,
          );
        const a = n ? (0, r.bytesToNumberLE)(t) : (0, r.bytesToNumberBE)(t);
        return d(a, e - i) + i;
      }
      function _(t) {
        if ("bigint" !== typeof t)
          throw new Error("field order must be bigint");
        const e = t.toString(2).length;
        return Math.ceil(e / 8);
      }
      function N(t) {
        const e = _(t);
        return e + Math.ceil(e / 2);
      }
      function k(t, e, n) {
        void 0 === n && (n = !1);
        const o = t.length,
          s = _(e),
          a = N(e);
        if (o < 16 || o < a || o > 1024)
          throw new Error("expected " + a + "-1024 bytes of input, got " + o);
        const f = n ? (0, r.bytesToNumberLE)(t) : (0, r.bytesToNumberBE)(t),
          c = d(f, e - i) + i;
        return n ? (0, r.numberToBytesLE)(c, s) : (0, r.numberToBytesBE)(c, s);
      }
    },
    3559: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.encodeToCurve =
          e.hashToCurve =
          e.secp256k1_hasher =
          e.schnorr =
          e.secp256k1 =
            void 0));
      const r = n(389),
        o = n(130),
        i = n(5285),
        s = n(4719),
        a = n(3185),
        f = n(4401),
        c = n(3151),
        u = {
          p: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
          ),
          n: BigInt(
            "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
          ),
          h: BigInt(1),
          a: BigInt(0),
          b: BigInt(7),
          Gx: BigInt(
            "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          ),
          Gy: BigInt(
            "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
          ),
        },
        d = BigInt(0),
        l = BigInt(1),
        h = BigInt(2),
        p = (t, e) => (t + e / h) / e;
      function y(t) {
        const e = u.p,
          n = BigInt(3),
          r = BigInt(6),
          o = BigInt(11),
          i = BigInt(22),
          s = BigInt(23),
          f = BigInt(44),
          c = BigInt(88),
          d = (t * t * t) % e,
          l = (d * d * t) % e,
          p = ((0, a.pow2)(l, n, e) * l) % e,
          y = ((0, a.pow2)(p, n, e) * l) % e,
          w = ((0, a.pow2)(y, h, e) * d) % e,
          b = ((0, a.pow2)(w, o, e) * w) % e,
          v = ((0, a.pow2)(b, i, e) * b) % e,
          g = ((0, a.pow2)(v, f, e) * v) % e,
          B = ((0, a.pow2)(g, c, e) * g) % e,
          E = ((0, a.pow2)(B, f, e) * v) % e,
          x = ((0, a.pow2)(E, n, e) * l) % e,
          R = ((0, a.pow2)(x, s, e) * b) % e,
          I = ((0, a.pow2)(R, r, e) * d) % e,
          O = (0, a.pow2)(I, h, e);
        if (!m.eql(m.sqr(O), t)) throw new Error("Cannot find square root");
        return O;
      }
      const m = (0, a.Field)(u.p, void 0, void 0, { sqrt: y });
      e.secp256k1 = (0, i.createCurve)(
        {
          ...u,
          Fp: m,
          lowS: !0,
          endo: {
            beta: BigInt(
              "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            ),
            splitScalar: (t) => {
              const e = u.n,
                n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                r = -l * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                o = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                i = n,
                s = BigInt("0x100000000000000000000000000000000"),
                f = p(i * t, e),
                c = p(-r * t, e);
              let d = (0, a.mod)(t - f * n - c * o, e),
                h = (0, a.mod)(-f * r - c * i, e);
              const y = d > s,
                m = h > s;
              if ((y && (d = e - d), m && (h = e - h), d > s || h > s))
                throw new Error("splitScalar: Endomorphism failed, k=" + t);
              return { k1neg: y, k1: d, k2neg: m, k2: h };
            },
          },
        },
        r.sha256,
      );
      const w = {};
      function b(t) {
        let e = w[t];
        if (void 0 === e) {
          const n = (0, r.sha256)(Uint8Array.from(t, (t) => t.charCodeAt(0)));
          ((e = (0, c.concatBytes)(n, n)), (w[t] = e));
        }
        for (
          var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1;
          i < n;
          i++
        )
          o[i - 1] = arguments[i];
        return (0, r.sha256)((0, c.concatBytes)(e, ...o));
      }
      const v = (t) => t.toBytes(!0).slice(1),
        g = (t) => (0, c.numberToBytesBE)(t, 32),
        B = (t) => (0, a.mod)(t, u.p),
        E = (t) => (0, a.mod)(t, u.n),
        Point = (() => e.secp256k1.Point)(),
        x = (t) => t % h === d;
      function R(t) {
        let n = e.secp256k1.utils.normPrivateKeyToScalar(t),
          r = Point.fromPrivateKey(n);
        const o = x(r.y) ? n : E(-n);
        return { scalar: o, bytes: v(r) };
      }
      function I(t) {
        (0, c.aInRange)("x", t, l, u.p);
        const e = B(t * t),
          n = B(e * t + BigInt(7));
        let r = y(n);
        x(r) || (r = B(-r));
        const o = Point.fromAffine({ x: t, y: r });
        return (o.assertValidity(), o);
      }
      const O = c.bytesToNumberBE;
      function P() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return E(O(b("BIP0340/challenge", ...e)));
      }
      function S(t) {
        return R(t).bytes;
      }
      function T(t, e, n) {
        void 0 === n && (n = (0, o.randomBytes)(32));
        const r = (0, c.ensureBytes)("message", t),
          { bytes: i, scalar: s } = R(e),
          a = (0, c.ensureBytes)("auxRand", n, 32),
          f = g(s ^ O(b("BIP0340/aux", a))),
          u = b("BIP0340/nonce", f, i, r),
          l = E(O(u));
        if (l === d) throw new Error("sign failed: k is zero");
        const { bytes: h, scalar: p } = R(l),
          y = P(h, i, r),
          m = new Uint8Array(64);
        if ((m.set(h, 0), m.set(g(E(p + y * s)), 32), !A(m, r, i)))
          throw new Error("sign: Invalid signature produced");
        return m;
      }
      function A(t, e, n) {
        const r = (0, c.ensureBytes)("signature", t, 64),
          o = (0, c.ensureBytes)("message", e),
          i = (0, c.ensureBytes)("publicKey", n, 32);
        try {
          const t = I(O(i)),
            e = O(r.subarray(0, 32));
          if (!(0, c.inRange)(e, l, u.p)) return !1;
          const n = O(r.subarray(32, 64));
          if (!(0, c.inRange)(n, l, u.n)) return !1;
          const s = P(g(e), v(t), o),
            a = Point.BASE.multiplyUnsafe(n).add(t.multiplyUnsafe(E(-s))),
            { x: f, y: d } = a.toAffine();
          return !(a.is0() || !x(d) || f !== e);
        } catch (s) {
          return !1;
        }
      }
      e.schnorr = (() => ({
        getPublicKey: S,
        sign: T,
        verify: A,
        utils: {
          randomPrivateKey: e.secp256k1.utils.randomPrivateKey,
          lift_x: I,
          pointToBytes: v,
          numberToBytesBE: c.numberToBytesBE,
          bytesToNumberBE: c.bytesToNumberBE,
          taggedHash: b,
          mod: a.mod,
        },
      }))();
      const L = (() =>
          (0, s.isogenyMap)(
            m,
            [
              [
                "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
                "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
                "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
                "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c",
              ],
              [
                "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
                "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
                "0x0000000000000000000000000000000000000000000000000000000000000001",
              ],
              [
                "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
                "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
                "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
                "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84",
              ],
              [
                "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
                "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
                "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
                "0x0000000000000000000000000000000000000000000000000000000000000001",
              ],
            ].map((t) => t.map((t) => BigInt(t))),
          ))(),
        _ = (() =>
          (0, f.mapToCurveSimpleSWU)(m, {
            A: BigInt(
              "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533",
            ),
            B: BigInt("1771"),
            Z: m.create(BigInt("-11")),
          }))();
      ((e.secp256k1_hasher = (() =>
        (0, s.createHasher)(
          e.secp256k1.Point,
          (t) => {
            const { x: e, y: n } = _(m.create(t[0]));
            return L(e, n);
          },
          {
            DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
            encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
            p: m.ORDER,
            m: 1,
            k: 128,
            expand: "xmd",
            hash: r.sha256,
          },
        ))()),
        (e.hashToCurve = (() => e.secp256k1_hasher.hashToCurve)()),
        (e.encodeToCurve = (() => e.secp256k1_hasher.encodeToCurve)()));
    },
    4398: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.blake2b = e.BLAKE2b = void 0));
      const r = n(4399);
      ((e.BLAKE2b = r.BLAKE2b), (e.blake2b = r.blake2b));
    },
    4399: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.blake2s = e.BLAKE2s = e.blake2b = e.BLAKE2b = e.BLAKE2 = void 0),
        (e.compress = l));
      const r = n(4400),
        o = n(825),
        i = n(395),
        s = n(130),
        a = Uint32Array.from([
          4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
          1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199,
          2600822924, 4215389547, 528734635, 327033209, 1541459225,
        ]),
        f = new Uint32Array(32);
      function c(t, e, n, r, o, s) {
        const a = o[s],
          c = o[s + 1];
        let u = f[2 * t],
          d = f[2 * t + 1],
          l = f[2 * e],
          h = f[2 * e + 1],
          p = f[2 * n],
          y = f[2 * n + 1],
          m = f[2 * r],
          w = f[2 * r + 1],
          b = i.add3L(u, l, a);
        ((d = i.add3H(b, d, h, c)),
          (u = 0 | b),
          ({ Dh: w, Dl: m } = { Dh: w ^ d, Dl: m ^ u }),
          ({ Dh: w, Dl: m } = { Dh: i.rotr32H(w, m), Dl: i.rotr32L(w, m) }),
          ({ h: y, l: p } = i.add(y, p, w, m)),
          ({ Bh: h, Bl: l } = { Bh: h ^ y, Bl: l ^ p }),
          ({ Bh: h, Bl: l } = {
            Bh: i.rotrSH(h, l, 24),
            Bl: i.rotrSL(h, l, 24),
          }),
          (f[2 * t] = u),
          (f[2 * t + 1] = d),
          (f[2 * e] = l),
          (f[2 * e + 1] = h),
          (f[2 * n] = p),
          (f[2 * n + 1] = y),
          (f[2 * r] = m),
          (f[2 * r + 1] = w));
      }
      function u(t, e, n, r, o, s) {
        const a = o[s],
          c = o[s + 1];
        let u = f[2 * t],
          d = f[2 * t + 1],
          l = f[2 * e],
          h = f[2 * e + 1],
          p = f[2 * n],
          y = f[2 * n + 1],
          m = f[2 * r],
          w = f[2 * r + 1],
          b = i.add3L(u, l, a);
        ((d = i.add3H(b, d, h, c)),
          (u = 0 | b),
          ({ Dh: w, Dl: m } = { Dh: w ^ d, Dl: m ^ u }),
          ({ Dh: w, Dl: m } = {
            Dh: i.rotrSH(w, m, 16),
            Dl: i.rotrSL(w, m, 16),
          }),
          ({ h: y, l: p } = i.add(y, p, w, m)),
          ({ Bh: h, Bl: l } = { Bh: h ^ y, Bl: l ^ p }),
          ({ Bh: h, Bl: l } = {
            Bh: i.rotrBH(h, l, 63),
            Bl: i.rotrBL(h, l, 63),
          }),
          (f[2 * t] = u),
          (f[2 * t + 1] = d),
          (f[2 * e] = l),
          (f[2 * e + 1] = h),
          (f[2 * n] = p),
          (f[2 * n + 1] = y),
          (f[2 * r] = m),
          (f[2 * r + 1] = w));
      }
      function d(t, e, n, r, o) {
        if ((void 0 === e && (e = {}), (0, s.anumber)(n), t < 0 || t > n))
          throw new Error("outputLen bigger than keyLen");
        const { key: i, salt: a, personalization: f } = e;
        if (void 0 !== i && (i.length < 1 || i.length > n))
          throw new Error("key length must be undefined or 1.." + n);
        if (void 0 !== a && a.length !== r)
          throw new Error("salt must be undefined or " + r);
        if (void 0 !== f && f.length !== o)
          throw new Error("personalization must be undefined or " + o);
      }
      class BLAKE2 extends s.Hash {
        constructor(t, e) {
          (super(),
            (this.finished = !1),
            (this.destroyed = !1),
            (this.length = 0),
            (this.pos = 0),
            (0, s.anumber)(t),
            (0, s.anumber)(e),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.buffer = new Uint8Array(t)),
            (this.buffer32 = (0, s.u32)(this.buffer)));
        }
        update(t) {
          ((0, s.aexists)(this), (t = (0, s.toBytes)(t)), (0, s.abytes)(t));
          const { blockLen: e, buffer: n, buffer32: r } = this,
            o = t.length,
            i = t.byteOffset,
            a = t.buffer;
          for (let f = 0; f < o; ) {
            this.pos === e &&
              ((0, s.swap32IfBE)(r),
              this.compress(r, 0, !1),
              (0, s.swap32IfBE)(r),
              (this.pos = 0));
            const c = Math.min(e - this.pos, o - f),
              u = i + f;
            if (c !== e || u % 4 || !(f + c < o))
              (n.set(t.subarray(f, f + c), this.pos),
                (this.pos += c),
                (this.length += c),
                (f += c));
            else {
              const t = new Uint32Array(a, u, Math.floor((o - f) / 4));
              (0, s.swap32IfBE)(t);
              for (let n = 0; f + e < o; n += r.length, f += e)
                ((this.length += e), this.compress(t, n, !1));
              (0, s.swap32IfBE)(t);
            }
          }
          return this;
        }
        digestInto(t) {
          ((0, s.aexists)(this), (0, s.aoutput)(t, this));
          const { pos: e, buffer32: n } = this;
          ((this.finished = !0),
            (0, s.clean)(this.buffer.subarray(e)),
            (0, s.swap32IfBE)(n),
            this.compress(n, 0, !0),
            (0, s.swap32IfBE)(n));
          const r = (0, s.u32)(t);
          this.get().forEach((t, e) => (r[e] = (0, s.swap8IfBE)(t)));
        }
        digest() {
          const { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          const n = t.slice(0, e);
          return (this.destroy(), n);
        }
        _cloneInto(t) {
          const {
            buffer: e,
            length: n,
            finished: r,
            destroyed: o,
            outputLen: i,
            pos: s,
          } = this;
          return (
            t || (t = new this.constructor({ dkLen: i })),
            t.set(...this.get()),
            t.buffer.set(e),
            (t.destroyed = o),
            (t.finished = r),
            (t.length = n),
            (t.pos = s),
            (t.outputLen = i),
            t
          );
        }
        clone() {
          return this._cloneInto();
        }
      }
      e.BLAKE2 = BLAKE2;
      class BLAKE2b extends BLAKE2 {
        constructor(t) {
          void 0 === t && (t = {});
          const e = void 0 === t.dkLen ? 64 : t.dkLen;
          (super(128, e),
            (this.v0l = 0 | a[0]),
            (this.v0h = 0 | a[1]),
            (this.v1l = 0 | a[2]),
            (this.v1h = 0 | a[3]),
            (this.v2l = 0 | a[4]),
            (this.v2h = 0 | a[5]),
            (this.v3l = 0 | a[6]),
            (this.v3h = 0 | a[7]),
            (this.v4l = 0 | a[8]),
            (this.v4h = 0 | a[9]),
            (this.v5l = 0 | a[10]),
            (this.v5h = 0 | a[11]),
            (this.v6l = 0 | a[12]),
            (this.v6h = 0 | a[13]),
            (this.v7l = 0 | a[14]),
            (this.v7h = 0 | a[15]),
            d(e, t, 64, 16, 16));
          let { key: n, personalization: r, salt: o } = t,
            i = 0;
          if (
            (void 0 !== n && ((n = (0, s.toBytes)(n)), (i = n.length)),
            (this.v0l ^= this.outputLen | (i << 8) | 65536 | (1 << 24)),
            void 0 !== o)
          ) {
            o = (0, s.toBytes)(o);
            const t = (0, s.u32)(o);
            ((this.v4l ^= (0, s.swap8IfBE)(t[0])),
              (this.v4h ^= (0, s.swap8IfBE)(t[1])),
              (this.v5l ^= (0, s.swap8IfBE)(t[2])),
              (this.v5h ^= (0, s.swap8IfBE)(t[3])));
          }
          if (void 0 !== r) {
            r = (0, s.toBytes)(r);
            const t = (0, s.u32)(r);
            ((this.v6l ^= (0, s.swap8IfBE)(t[0])),
              (this.v6h ^= (0, s.swap8IfBE)(t[1])),
              (this.v7l ^= (0, s.swap8IfBE)(t[2])),
              (this.v7h ^= (0, s.swap8IfBE)(t[3])));
          }
          if (void 0 !== n) {
            const t = new Uint8Array(this.blockLen);
            (t.set(n), this.update(t));
          }
        }
        get() {
          let {
            v0l: t,
            v0h: e,
            v1l: n,
            v1h: r,
            v2l: o,
            v2h: i,
            v3l: s,
            v3h: a,
            v4l: f,
            v4h: c,
            v5l: u,
            v5h: d,
            v6l: l,
            v6h: h,
            v7l: p,
            v7h: y,
          } = this;
          return [t, e, n, r, o, i, s, a, f, c, u, d, l, h, p, y];
        }
        set(t, e, n, r, o, i, s, a, f, c, u, d, l, h, p, y) {
          ((this.v0l = 0 | t),
            (this.v0h = 0 | e),
            (this.v1l = 0 | n),
            (this.v1h = 0 | r),
            (this.v2l = 0 | o),
            (this.v2h = 0 | i),
            (this.v3l = 0 | s),
            (this.v3h = 0 | a),
            (this.v4l = 0 | f),
            (this.v4h = 0 | c),
            (this.v5l = 0 | u),
            (this.v5h = 0 | d),
            (this.v6l = 0 | l),
            (this.v6h = 0 | h),
            (this.v7l = 0 | p),
            (this.v7h = 0 | y));
        }
        compress(t, e, n) {
          (this.get().forEach((t, e) => (f[e] = t)), f.set(a, 16));
          let { h: o, l: d } = i.fromBig(BigInt(this.length));
          ((f[24] = a[8] ^ d),
            (f[25] = a[9] ^ o),
            n && ((f[28] = ~f[28]), (f[29] = ~f[29])));
          let l = 0;
          const h = r.BSIGMA;
          for (let r = 0; r < 12; r++)
            (c(0, 4, 8, 12, t, e + 2 * h[l++]),
              u(0, 4, 8, 12, t, e + 2 * h[l++]),
              c(1, 5, 9, 13, t, e + 2 * h[l++]),
              u(1, 5, 9, 13, t, e + 2 * h[l++]),
              c(2, 6, 10, 14, t, e + 2 * h[l++]),
              u(2, 6, 10, 14, t, e + 2 * h[l++]),
              c(3, 7, 11, 15, t, e + 2 * h[l++]),
              u(3, 7, 11, 15, t, e + 2 * h[l++]),
              c(0, 5, 10, 15, t, e + 2 * h[l++]),
              u(0, 5, 10, 15, t, e + 2 * h[l++]),
              c(1, 6, 11, 12, t, e + 2 * h[l++]),
              u(1, 6, 11, 12, t, e + 2 * h[l++]),
              c(2, 7, 8, 13, t, e + 2 * h[l++]),
              u(2, 7, 8, 13, t, e + 2 * h[l++]),
              c(3, 4, 9, 14, t, e + 2 * h[l++]),
              u(3, 4, 9, 14, t, e + 2 * h[l++]));
          ((this.v0l ^= f[0] ^ f[16]),
            (this.v0h ^= f[1] ^ f[17]),
            (this.v1l ^= f[2] ^ f[18]),
            (this.v1h ^= f[3] ^ f[19]),
            (this.v2l ^= f[4] ^ f[20]),
            (this.v2h ^= f[5] ^ f[21]),
            (this.v3l ^= f[6] ^ f[22]),
            (this.v3h ^= f[7] ^ f[23]),
            (this.v4l ^= f[8] ^ f[24]),
            (this.v4h ^= f[9] ^ f[25]),
            (this.v5l ^= f[10] ^ f[26]),
            (this.v5h ^= f[11] ^ f[27]),
            (this.v6l ^= f[12] ^ f[28]),
            (this.v6h ^= f[13] ^ f[29]),
            (this.v7l ^= f[14] ^ f[30]),
            (this.v7h ^= f[15] ^ f[31]),
            (0, s.clean)(f));
        }
        destroy() {
          ((this.destroyed = !0),
            (0, s.clean)(this.buffer32),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      function l(t, e, n, o, i, s, a, f, c, u, d, l, h, p, y, m, w, b, v, g) {
        let B = 0;
        for (let E = 0; E < o; E++)
          (({ a: i, b: c, c: h, d: w } = (0, r.G1s)(i, c, h, w, n[e + t[B++]])),
            ({
              a: i,
              b: c,
              c: h,
              d: w,
            } = (0, r.G2s)(i, c, h, w, n[e + t[B++]])),
            ({
              a: s,
              b: u,
              c: p,
              d: b,
            } = (0, r.G1s)(s, u, p, b, n[e + t[B++]])),
            ({
              a: s,
              b: u,
              c: p,
              d: b,
            } = (0, r.G2s)(s, u, p, b, n[e + t[B++]])),
            ({
              a: a,
              b: d,
              c: y,
              d: v,
            } = (0, r.G1s)(a, d, y, v, n[e + t[B++]])),
            ({
              a: a,
              b: d,
              c: y,
              d: v,
            } = (0, r.G2s)(a, d, y, v, n[e + t[B++]])),
            ({
              a: f,
              b: l,
              c: m,
              d: g,
            } = (0, r.G1s)(f, l, m, g, n[e + t[B++]])),
            ({
              a: f,
              b: l,
              c: m,
              d: g,
            } = (0, r.G2s)(f, l, m, g, n[e + t[B++]])),
            ({
              a: i,
              b: u,
              c: y,
              d: g,
            } = (0, r.G1s)(i, u, y, g, n[e + t[B++]])),
            ({
              a: i,
              b: u,
              c: y,
              d: g,
            } = (0, r.G2s)(i, u, y, g, n[e + t[B++]])),
            ({
              a: s,
              b: d,
              c: m,
              d: w,
            } = (0, r.G1s)(s, d, m, w, n[e + t[B++]])),
            ({
              a: s,
              b: d,
              c: m,
              d: w,
            } = (0, r.G2s)(s, d, m, w, n[e + t[B++]])),
            ({
              a: a,
              b: l,
              c: h,
              d: b,
            } = (0, r.G1s)(a, l, h, b, n[e + t[B++]])),
            ({
              a: a,
              b: l,
              c: h,
              d: b,
            } = (0, r.G2s)(a, l, h, b, n[e + t[B++]])),
            ({
              a: f,
              b: c,
              c: p,
              d: v,
            } = (0, r.G1s)(f, c, p, v, n[e + t[B++]])),
            ({
              a: f,
              b: c,
              c: p,
              d: v,
            } = (0, r.G2s)(f, c, p, v, n[e + t[B++]])));
        return {
          v0: i,
          v1: s,
          v2: a,
          v3: f,
          v4: c,
          v5: u,
          v6: d,
          v7: l,
          v8: h,
          v9: p,
          v10: y,
          v11: m,
          v12: w,
          v13: b,
          v14: v,
          v15: g,
        };
      }
      ((e.BLAKE2b = BLAKE2b),
        (e.blake2b = (0, s.createOptHasher)((t) => new BLAKE2b(t))));
      const h = o.SHA256_IV;
      class BLAKE2s extends BLAKE2 {
        constructor(t) {
          void 0 === t && (t = {});
          const e = void 0 === t.dkLen ? 32 : t.dkLen;
          (super(64, e),
            (this.v0 = 0 | h[0]),
            (this.v1 = 0 | h[1]),
            (this.v2 = 0 | h[2]),
            (this.v3 = 0 | h[3]),
            (this.v4 = 0 | h[4]),
            (this.v5 = 0 | h[5]),
            (this.v6 = 0 | h[6]),
            (this.v7 = 0 | h[7]),
            d(e, t, 32, 8, 8));
          let { key: n, personalization: r, salt: o } = t,
            i = 0;
          if (
            (void 0 !== n && ((n = (0, s.toBytes)(n)), (i = n.length)),
            (this.v0 ^= this.outputLen | (i << 8) | 65536 | (1 << 24)),
            void 0 !== o)
          ) {
            o = (0, s.toBytes)(o);
            const t = (0, s.u32)(o);
            ((this.v4 ^= (0, s.swap8IfBE)(t[0])),
              (this.v5 ^= (0, s.swap8IfBE)(t[1])));
          }
          if (void 0 !== r) {
            r = (0, s.toBytes)(r);
            const t = (0, s.u32)(r);
            ((this.v6 ^= (0, s.swap8IfBE)(t[0])),
              (this.v7 ^= (0, s.swap8IfBE)(t[1])));
          }
          if (void 0 !== n) {
            (0, s.abytes)(n);
            const t = new Uint8Array(this.blockLen);
            (t.set(n), this.update(t));
          }
        }
        get() {
          const {
            v0: t,
            v1: e,
            v2: n,
            v3: r,
            v4: o,
            v5: i,
            v6: s,
            v7: a,
          } = this;
          return [t, e, n, r, o, i, s, a];
        }
        set(t, e, n, r, o, i, s, a) {
          ((this.v0 = 0 | t),
            (this.v1 = 0 | e),
            (this.v2 = 0 | n),
            (this.v3 = 0 | r),
            (this.v4 = 0 | o),
            (this.v5 = 0 | i),
            (this.v6 = 0 | s),
            (this.v7 = 0 | a));
        }
        compress(t, e, n) {
          const { h: o, l: s } = i.fromBig(BigInt(this.length)),
            {
              v0: a,
              v1: f,
              v2: c,
              v3: u,
              v4: d,
              v5: p,
              v6: y,
              v7: m,
              v8: w,
              v9: b,
              v10: v,
              v11: g,
              v12: B,
              v13: E,
              v14: x,
              v15: R,
            } = l(
              r.BSIGMA,
              e,
              t,
              10,
              this.v0,
              this.v1,
              this.v2,
              this.v3,
              this.v4,
              this.v5,
              this.v6,
              this.v7,
              h[0],
              h[1],
              h[2],
              h[3],
              s ^ h[4],
              o ^ h[5],
              n ? ~h[6] : h[6],
              h[7],
            );
          ((this.v0 ^= a ^ w),
            (this.v1 ^= f ^ b),
            (this.v2 ^= c ^ v),
            (this.v3 ^= u ^ g),
            (this.v4 ^= d ^ B),
            (this.v5 ^= p ^ E),
            (this.v6 ^= y ^ x),
            (this.v7 ^= m ^ R));
        }
        destroy() {
          ((this.destroyed = !0),
            (0, s.clean)(this.buffer32),
            this.set(0, 0, 0, 0, 0, 0, 0, 0));
        }
      }
      ((e.BLAKE2s = BLAKE2s),
        (e.blake2s = (0, s.createOptHasher)((t) => new BLAKE2s(t))));
    },
    4400: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BSIGMA = void 0),
        (e.G1s = o),
        (e.G2s = i));
      const r = n(130);
      function o(t, e, n, o, i) {
        return (
          (t = (t + e + i) | 0),
          (o = (0, r.rotr)(o ^ t, 16)),
          (n = (n + o) | 0),
          (e = (0, r.rotr)(e ^ n, 12)),
          { a: t, b: e, c: n, d: o }
        );
      }
      function i(t, e, n, o, i) {
        return (
          (t = (t + e + i) | 0),
          (o = (0, r.rotr)(o ^ t, 8)),
          (n = (n + o) | 0),
          (e = (0, r.rotr)(e ^ n, 7)),
          { a: t, b: e, c: n, d: o }
        );
      }
      e.BSIGMA = Uint8Array.from([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
        15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14,
        3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8,
        9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0,
        11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7,
        6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10,
        6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6,
        1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
        12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
        11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13,
        12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1,
        11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1,
        9,
      ]);
    },
    4401: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.DER = e.DERErr = void 0),
        (e._legacyHelperEquat = h),
        (e._legacyHelperNormPriv = p),
        (e.weierstrassN = y),
        (e.weierstrassPoints = m),
        (e.ecdsa = b),
        (e.weierstrass = x),
        (e.SWUFpSqrtRatio = R),
        (e.mapToCurveSimpleSWU = I));
      const r = n(379),
        o = n(3151),
        i = n(4402),
        s = n(3185);
      function a(t) {
        (void 0 !== t.lowS && (0, o.abool)("lowS", t.lowS),
          void 0 !== t.prehash && (0, o.abool)("prehash", t.prehash));
      }
      class DERErr extends Error {
        constructor(t) {
          (void 0 === t && (t = ""), super(t));
        }
      }
      ((e.DERErr = DERErr),
        (e.DER = {
          Err: DERErr,
          _tlv: {
            encode: (t, n) => {
              const { Err: r } = e.DER;
              if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
              if (1 & n.length) throw new r("tlv.encode: unpadded data");
              const i = n.length / 2,
                s = (0, o.numberToHexUnpadded)(i);
              if ((s.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              const a =
                  i > 127
                    ? (0, o.numberToHexUnpadded)((s.length / 2) | 128)
                    : "",
                f = (0, o.numberToHexUnpadded)(t);
              return f + a + s + n;
            },
            decode(t, n) {
              const { Err: r } = e.DER;
              let o = 0;
              if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
              if (n.length < 2 || n[o++] !== t)
                throw new r("tlv.decode: wrong tlv");
              const i = n[o++],
                s = !!(128 & i);
              let a = 0;
              if (s) {
                const t = 127 & i;
                if (!t)
                  throw new r(
                    "tlv.decode(long): indefinite length not supported",
                  );
                if (t > 4)
                  throw new r("tlv.decode(long): byte length is too big");
                const e = n.subarray(o, o + t);
                if (e.length !== t)
                  throw new r("tlv.decode: length bytes not complete");
                if (0 === e[0])
                  throw new r("tlv.decode(long): zero leftmost byte");
                for (const n of e) a = (a << 8) | n;
                if (((o += t), a < 128))
                  throw new r("tlv.decode(long): not minimal encoding");
              } else a = i;
              const f = n.subarray(o, o + a);
              if (f.length !== a) throw new r("tlv.decode: wrong value length");
              return { v: f, l: n.subarray(o + a) };
            },
          },
          _int: {
            encode(t) {
              const { Err: n } = e.DER;
              if (t < f)
                throw new n("integer: negative integers are not allowed");
              let r = (0, o.numberToHexUnpadded)(t);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new n("unexpected DER parsing assertion: unpadded hex");
              return r;
            },
            decode(t) {
              const { Err: n } = e.DER;
              if (128 & t[0])
                throw new n("invalid signature integer: negative");
              if (0 === t[0] && !(128 & t[1]))
                throw new n(
                  "invalid signature integer: unnecessary leading zero",
                );
              return (0, o.bytesToNumberBE)(t);
            },
          },
          toSig(t) {
            const { Err: n, _int: r, _tlv: i } = e.DER,
              s = (0, o.ensureBytes)("signature", t),
              { v: a, l: f } = i.decode(48, s);
            if (f.length)
              throw new n("invalid signature: left bytes after parsing");
            const { v: c, l: u } = i.decode(2, a),
              { v: d, l: l } = i.decode(2, u);
            if (l.length)
              throw new n("invalid signature: left bytes after parsing");
            return { r: r.decode(c), s: r.decode(d) };
          },
          hexFromSig(t) {
            const { _tlv: n, _int: r } = e.DER,
              o = n.encode(2, r.encode(t.r)),
              i = n.encode(2, r.encode(t.s)),
              s = o + i;
            return n.encode(48, s);
          },
        }));
      const f = BigInt(0),
        c = BigInt(1),
        u = BigInt(2),
        d = BigInt(3),
        l = BigInt(4);
      function h(t, e, n) {
        function r(r) {
          const o = t.sqr(r),
            i = t.mul(o, r);
          return t.add(t.add(i, t.mul(r, e)), n);
        }
        return r;
      }
      function p(t, e, n) {
        const { BYTES: r } = t;
        function i(i) {
          let s;
          if ("bigint" === typeof i) s = i;
          else {
            let n = (0, o.ensureBytes)("private key", i);
            if (e) {
              if (!e.includes(2 * n.length))
                throw new Error("invalid private key");
              const t = new Uint8Array(r);
              (t.set(n, t.length - n.length), (n = t));
            }
            try {
              s = t.fromBytes(n);
            } catch (a) {
              throw new Error(
                `invalid private key: expected ui8a of size ${r}, got ${typeof i}`,
              );
            }
          }
          if ((n && (s = t.create(s)), !t.isValidNot0(s)))
            throw new Error("invalid private key: out of range [1..N-1]");
          return s;
        }
        return i;
      }
      function y(t, e) {
        void 0 === e && (e = {});
        const { Fp: n, Fn: r } = (0, i._createCurveFields)("weierstrass", t, e),
          { h: s, n: a } = t;
        (0, o._validateObject)(
          e,
          {},
          {
            allowInfinityPoint: "boolean",
            clearCofactor: "function",
            isTorsionFree: "function",
            fromBytes: "function",
            toBytes: "function",
            endo: "object",
            wrapPrivateKey: "boolean",
          },
        );
        const { endo: u } = e;
        if (
          u &&
          (!n.is0(t.a) ||
            "bigint" !== typeof u.beta ||
            "function" !== typeof u.splitScalar)
        )
          throw new Error(
            'invalid endo: expected "beta": bigint and "splitScalar": function',
          );
        function y() {
          if (!n.isOdd)
            throw new Error(
              "compression is not supported: Field does not have .isOdd()",
            );
        }
        function m(t, e, r) {
          const { x: i, y: s } = e.toAffine(),
            a = n.toBytes(i);
          if (((0, o.abool)("isCompressed", r), r)) {
            y();
            const t = !n.isOdd(s);
            return (0, o.concatBytes)(w(t), a);
          }
          return (0, o.concatBytes)(Uint8Array.of(4), a, n.toBytes(s));
        }
        function b(t) {
          (0, o.abytes)(t);
          const e = n.BYTES,
            r = e + 1,
            i = 2 * e + 1,
            s = t.length,
            a = t[0],
            f = t.subarray(1);
          if (s !== r || (2 !== a && 3 !== a)) {
            if (s === i && 4 === a) {
              const t = n.fromBytes(f.subarray(0 * e, 1 * e)),
                r = n.fromBytes(f.subarray(1 * e, 2 * e));
              if (!E(t, r)) throw new Error("bad point: is not on curve");
              return { x: t, y: r };
            }
            throw new Error(
              `bad point: got length ${s}, expected compressed=${r} or uncompressed=${i}`,
            );
          }
          {
            const t = n.fromBytes(f);
            if (!n.isValid(t))
              throw new Error("bad point: is not on curve, wrong x");
            const e = B(t);
            let r;
            try {
              r = n.sqrt(e);
            } catch (c) {
              const t = c instanceof Error ? ": " + c.message : "";
              throw new Error("bad point: is not on curve, sqrt error" + t);
            }
            y();
            const o = n.isOdd(r),
              i = 1 === (1 & a);
            return (i !== o && (r = n.neg(r)), { x: t, y: r });
          }
        }
        const v = e.toBytes || m,
          g = e.fromBytes || b,
          B = h(n, t.a, t.b);
        function E(t, e) {
          const r = n.sqr(e),
            o = B(t);
          return n.eql(r, o);
        }
        if (!E(t.Gx, t.Gy))
          throw new Error("bad curve params: generator point");
        const x = n.mul(n.pow(t.a, d), l),
          R = n.mul(n.sqr(t.b), BigInt(27));
        if (n.is0(n.add(x, R))) throw new Error("bad curve params: a or b");
        function I(t, e, r) {
          if ((void 0 === r && (r = !1), !n.isValid(e) || (r && n.is0(e))))
            throw new Error("bad point coordinate " + t);
          return e;
        }
        function O(t) {
          if (!(t instanceof Point))
            throw new Error("ProjectivePoint expected");
        }
        const P = (0, o.memoized)((t, e) => {
            const { px: r, py: o, pz: i } = t;
            if (n.eql(i, n.ONE)) return { x: r, y: o };
            const s = t.is0();
            null == e && (e = s ? n.ONE : n.inv(i));
            const a = n.mul(r, e),
              f = n.mul(o, e),
              c = n.mul(i, e);
            if (s) return { x: n.ZERO, y: n.ZERO };
            if (!n.eql(c, n.ONE)) throw new Error("invZ was invalid");
            return { x: a, y: f };
          }),
          S = (0, o.memoized)((t) => {
            if (t.is0()) {
              if (e.allowInfinityPoint && !n.is0(t.py)) return;
              throw new Error("bad point: ZERO");
            }
            const { x: r, y: o } = t.toAffine();
            if (!n.isValid(r) || !n.isValid(o))
              throw new Error("bad point: x or y not field elements");
            if (!E(r, o)) throw new Error("bad point: equation left != right");
            if (!t.isTorsionFree())
              throw new Error("bad point: not in prime-order subgroup");
            return !0;
          });
        function T(t, e, r, o, s) {
          return (
            (r = new Point(n.mul(r.px, t), r.py, r.pz)),
            (e = (0, i.negateCt)(o, e)),
            (r = (0, i.negateCt)(s, r)),
            e.add(r)
          );
        }
        class Point {
          constructor(t, e, n) {
            ((this.px = I("x", t)),
              (this.py = I("y", e, !0)),
              (this.pz = I("z", n)),
              Object.freeze(this));
          }
          static fromAffine(t) {
            const { x: e, y: r } = t || {};
            if (!t || !n.isValid(e) || !n.isValid(r))
              throw new Error("invalid affine point");
            if (t instanceof Point)
              throw new Error("projective point not allowed");
            return n.is0(e) && n.is0(r) ? Point.ZERO : new Point(e, r, n.ONE);
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static normalizeZ(t) {
            return (0, i.normalizeZ)(Point, "pz", t);
          }
          static fromBytes(t) {
            return ((0, o.abytes)(t), Point.fromHex(t));
          }
          static fromHex(t) {
            const e = Point.fromAffine(g((0, o.ensureBytes)("pointHex", t)));
            return (e.assertValidity(), e);
          }
          static fromPrivateKey(t) {
            const n = p(r, e.allowedPrivateKeyLengths, e.wrapPrivateKey);
            return Point.BASE.multiply(n(t));
          }
          static msm(t, e) {
            return (0, i.pippenger)(Point, r, t, e);
          }
          precompute(t, e) {
            return (
              void 0 === t && (t = 8),
              void 0 === e && (e = !0),
              L.setWindowSize(this, t),
              e || this.multiply(d),
              this
            );
          }
          _setWindowSize(t) {
            this.precompute(t);
          }
          assertValidity() {
            S(this);
          }
          hasEvenY() {
            const { y: t } = this.toAffine();
            if (!n.isOdd) throw new Error("Field doesn't support isOdd");
            return !n.isOdd(t);
          }
          equals(t) {
            O(t);
            const { px: e, py: r, pz: o } = this,
              { px: i, py: s, pz: a } = t,
              f = n.eql(n.mul(e, a), n.mul(i, o)),
              c = n.eql(n.mul(r, a), n.mul(s, o));
            return f && c;
          }
          negate() {
            return new Point(this.px, n.neg(this.py), this.pz);
          }
          double() {
            const { a: e, b: r } = t,
              o = n.mul(r, d),
              { px: i, py: s, pz: a } = this;
            let f = n.ZERO,
              c = n.ZERO,
              u = n.ZERO,
              l = n.mul(i, i),
              h = n.mul(s, s),
              p = n.mul(a, a),
              y = n.mul(i, s);
            return (
              (y = n.add(y, y)),
              (u = n.mul(i, a)),
              (u = n.add(u, u)),
              (f = n.mul(e, u)),
              (c = n.mul(o, p)),
              (c = n.add(f, c)),
              (f = n.sub(h, c)),
              (c = n.add(h, c)),
              (c = n.mul(f, c)),
              (f = n.mul(y, f)),
              (u = n.mul(o, u)),
              (p = n.mul(e, p)),
              (y = n.sub(l, p)),
              (y = n.mul(e, y)),
              (y = n.add(y, u)),
              (u = n.add(l, l)),
              (l = n.add(u, l)),
              (l = n.add(l, p)),
              (l = n.mul(l, y)),
              (c = n.add(c, l)),
              (p = n.mul(s, a)),
              (p = n.add(p, p)),
              (l = n.mul(p, y)),
              (f = n.sub(f, l)),
              (u = n.mul(p, h)),
              (u = n.add(u, u)),
              (u = n.add(u, u)),
              new Point(f, c, u)
            );
          }
          add(e) {
            O(e);
            const { px: r, py: o, pz: i } = this,
              { px: s, py: a, pz: f } = e;
            let c = n.ZERO,
              u = n.ZERO,
              l = n.ZERO;
            const h = t.a,
              p = n.mul(t.b, d);
            let y = n.mul(r, s),
              m = n.mul(o, a),
              w = n.mul(i, f),
              b = n.add(r, o),
              v = n.add(s, a);
            ((b = n.mul(b, v)),
              (v = n.add(y, m)),
              (b = n.sub(b, v)),
              (v = n.add(r, i)));
            let g = n.add(s, f);
            return (
              (v = n.mul(v, g)),
              (g = n.add(y, w)),
              (v = n.sub(v, g)),
              (g = n.add(o, i)),
              (c = n.add(a, f)),
              (g = n.mul(g, c)),
              (c = n.add(m, w)),
              (g = n.sub(g, c)),
              (l = n.mul(h, v)),
              (c = n.mul(p, w)),
              (l = n.add(c, l)),
              (c = n.sub(m, l)),
              (l = n.add(m, l)),
              (u = n.mul(c, l)),
              (m = n.add(y, y)),
              (m = n.add(m, y)),
              (w = n.mul(h, w)),
              (v = n.mul(p, v)),
              (m = n.add(m, w)),
              (w = n.sub(y, w)),
              (w = n.mul(h, w)),
              (v = n.add(v, w)),
              (y = n.mul(m, v)),
              (u = n.add(u, y)),
              (y = n.mul(g, v)),
              (c = n.mul(b, c)),
              (c = n.sub(c, y)),
              (y = n.mul(b, m)),
              (l = n.mul(g, l)),
              (l = n.add(l, y)),
              new Point(c, u, l)
            );
          }
          subtract(t) {
            return this.add(t.negate());
          }
          is0() {
            return this.equals(Point.ZERO);
          }
          multiply(t) {
            const { endo: n } = e;
            if (!r.isValidNot0(t))
              throw new Error("invalid scalar: out of range");
            let o, i;
            const s = (t) => L.wNAFCached(this, t, Point.normalizeZ);
            if (n) {
              const { k1neg: e, k1: r, k2neg: a, k2: f } = n.splitScalar(t),
                { p: c, f: u } = s(r),
                { p: d, f: l } = s(f);
              ((i = u.add(l)), (o = T(n.beta, c, d, e, a)));
            } else {
              const { p: e, f: n } = s(t);
              ((o = e), (i = n));
            }
            return Point.normalizeZ([o, i])[0];
          }
          multiplyUnsafe(t) {
            const { endo: n } = e,
              o = this;
            if (!r.isValid(t)) throw new Error("invalid scalar: out of range");
            if (t === f || o.is0()) return Point.ZERO;
            if (t === c) return o;
            if (L.hasPrecomputes(this)) return this.multiply(t);
            if (n) {
              const { k1neg: e, k1: r, k2neg: s, k2: a } = n.splitScalar(t),
                { p1: f, p2: c } = (0, i.mulEndoUnsafe)(Point, o, r, a);
              return T(n.beta, f, c, e, s);
            }
            return L.wNAFCachedUnsafe(o, t);
          }
          multiplyAndAddUnsafe(t, e, n) {
            const r = this.multiplyUnsafe(e).add(t.multiplyUnsafe(n));
            return r.is0() ? void 0 : r;
          }
          toAffine(t) {
            return P(this, t);
          }
          isTorsionFree() {
            const { isTorsionFree: t } = e;
            return (
              s === c ||
              (t ? t(Point, this) : L.wNAFCachedUnsafe(this, a).is0())
            );
          }
          clearCofactor() {
            const { clearCofactor: t } = e;
            return s === c ? this : t ? t(Point, this) : this.multiplyUnsafe(s);
          }
          toBytes(t) {
            return (
              void 0 === t && (t = !0),
              (0, o.abool)("isCompressed", t),
              this.assertValidity(),
              v(Point, this, t)
            );
          }
          toRawBytes(t) {
            return (void 0 === t && (t = !0), this.toBytes(t));
          }
          toHex(t) {
            return (
              void 0 === t && (t = !0),
              (0, o.bytesToHex)(this.toBytes(t))
            );
          }
          toString() {
            return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
          }
        }
        ((Point.BASE = new Point(t.Gx, t.Gy, n.ONE)),
          (Point.ZERO = new Point(n.ZERO, n.ONE, n.ZERO)),
          (Point.Fp = n),
          (Point.Fn = r));
        const A = r.BITS,
          L = (0, i.wNAF)(Point, e.endo ? Math.ceil(A / 2) : A);
        return Point;
      }
      function m(t) {
        const { CURVE: e, curveOpts: n } = v(t),
          Point = y(e, n);
        return B(t, Point);
      }
      function w(t) {
        return Uint8Array.of(t ? 2 : 3);
      }
      function b(Point, t, n) {
        (void 0 === n && (n = {}),
          (0, o._validateObject)(
            t,
            { hash: "function" },
            {
              hmac: "function",
              lowS: "boolean",
              randomBytes: "function",
              bits2int: "function",
              bits2int_modN: "function",
            },
          ));
        const i = t.randomBytes || o.randomBytes,
          d =
            t.hmac ||
            function (e) {
              for (
                var n = arguments.length,
                  i = new Array(n > 1 ? n - 1 : 0),
                  s = 1;
                s < n;
                s++
              )
                i[s - 1] = arguments[s];
              return (0, r.hmac)(t.hash, e, (0, o.concatBytes)(...i));
            },
          { Fp: l, Fn: h } = Point,
          { ORDER: y, BITS: m } = h;
        function b(t) {
          const e = y >> c;
          return t > e;
        }
        function v(t) {
          return b(t) ? h.neg(t) : t;
        }
        function g(t, e) {
          if (!h.isValidNot0(e))
            throw new Error(`invalid signature ${t}: out of range 1..CURVE.n`);
        }
        class Signature {
          constructor(t, e, n) {
            (g("r", t),
              g("s", e),
              (this.r = t),
              (this.s = e),
              null != n && (this.recovery = n),
              Object.freeze(this));
          }
          static fromCompact(t) {
            const e = h.BYTES,
              n = (0, o.ensureBytes)("compactSignature", t, 2 * e);
            return new Signature(
              h.fromBytes(n.subarray(0, e)),
              h.fromBytes(n.subarray(e, 2 * e)),
            );
          }
          static fromDER(t) {
            const { r: n, s: r } = e.DER.toSig((0, o.ensureBytes)("DER", t));
            return new Signature(n, r);
          }
          assertValidity() {}
          addRecoveryBit(t) {
            return new Signature(this.r, this.s, t);
          }
          recoverPublicKey(t) {
            const e = l.ORDER,
              { r: n, s: r, recovery: i } = this;
            if (null == i || ![0, 1, 2, 3].includes(i))
              throw new Error("recovery id invalid");
            const s = y * u < e;
            if (s && i > 1)
              throw new Error("recovery id is ambiguous for h>1 curve");
            const a = 2 === i || 3 === i ? n + y : n;
            if (!l.isValid(a)) throw new Error("recovery id 2 or 3 invalid");
            const f = l.toBytes(a),
              c = Point.fromHex((0, o.concatBytes)(w(0 === (1 & i)), f)),
              d = h.inv(a),
              p = P((0, o.ensureBytes)("msgHash", t)),
              m = h.create(-p * d),
              b = h.create(r * d),
              v = Point.BASE.multiplyUnsafe(m).add(c.multiplyUnsafe(b));
            if (v.is0()) throw new Error("point at infinify");
            return (v.assertValidity(), v);
          }
          hasHighS() {
            return b(this.s);
          }
          normalizeS() {
            return this.hasHighS()
              ? new Signature(this.r, h.neg(this.s), this.recovery)
              : this;
          }
          toBytes(t) {
            if ("compact" === t)
              return (0, o.concatBytes)(h.toBytes(this.r), h.toBytes(this.s));
            if ("der" === t) return (0, o.hexToBytes)(e.DER.hexFromSig(this));
            throw new Error("invalid format");
          }
          toDERRawBytes() {
            return this.toBytes("der");
          }
          toDERHex() {
            return (0, o.bytesToHex)(this.toBytes("der"));
          }
          toCompactRawBytes() {
            return this.toBytes("compact");
          }
          toCompactHex() {
            return (0, o.bytesToHex)(this.toBytes("compact"));
          }
        }
        const B = p(h, n.allowedPrivateKeyLengths, n.wrapPrivateKey),
          E = {
            isValidPrivateKey(t) {
              try {
                return (B(t), !0);
              } catch (e) {
                return !1;
              }
            },
            normPrivateKeyToScalar: B,
            randomPrivateKey: () => {
              const t = y;
              return (0, s.mapHashToField)(i((0, s.getMinHashLength)(t)), t);
            },
            precompute(t, e) {
              return (
                void 0 === t && (t = 8),
                void 0 === e && (e = Point.BASE),
                e.precompute(t, !1)
              );
            },
          };
        function x(t, e) {
          return (void 0 === e && (e = !0), Point.fromPrivateKey(t).toBytes(e));
        }
        function R(t) {
          if ("bigint" === typeof t) return !1;
          if (t instanceof Point) return !0;
          const e = (0, o.ensureBytes)("key", t),
            r = e.length,
            i = l.BYTES,
            s = i + 1,
            a = 2 * i + 1;
          return n.allowedPrivateKeyLengths || h.BYTES === s
            ? void 0
            : r === s || r === a;
        }
        function I(t, e, n) {
          if ((void 0 === n && (n = !0), !0 === R(t)))
            throw new Error("first arg must be private key");
          if (!1 === R(e)) throw new Error("second arg must be public key");
          const r = Point.fromHex(e);
          return r.multiply(B(t)).toBytes(n);
        }
        const O =
            t.bits2int ||
            function (t) {
              if (t.length > 8192) throw new Error("input is too large");
              const e = (0, o.bytesToNumberBE)(t),
                n = 8 * t.length - m;
              return n > 0 ? e >> BigInt(n) : e;
            },
          P =
            t.bits2int_modN ||
            function (t) {
              return h.create(O(t));
            },
          S = (0, o.bitMask)(m);
        function T(t) {
          return ((0, o.aInRange)("num < 2^" + m, t, f, S), h.toBytes(t));
        }
        function A(e, n, r) {
          if (
            (void 0 === r && (r = L),
            ["recovered", "canonical"].some((t) => t in r))
          )
            throw new Error("sign() legacy options not supported");
          const { hash: s } = t;
          let { lowS: u, prehash: d, extraEntropy: p } = r;
          (null == u && (u = !0),
            (e = (0, o.ensureBytes)("msgHash", e)),
            a(r),
            d && (e = (0, o.ensureBytes)("prehashed msgHash", s(e))));
          const y = P(e),
            m = B(n),
            w = [T(m), T(y)];
          if (null != p && !1 !== p) {
            const t = !0 === p ? i(l.BYTES) : p;
            w.push((0, o.ensureBytes)("extraEntropy", t));
          }
          const g = (0, o.concatBytes)(...w),
            E = y;
          function x(t) {
            const e = O(t);
            if (!h.isValidNot0(e)) return;
            const n = h.inv(e),
              r = Point.BASE.multiply(e).toAffine(),
              o = h.create(r.x);
            if (o === f) return;
            const i = h.create(n * h.create(E + o * m));
            if (i === f) return;
            let s = (r.x === o ? 0 : 2) | Number(r.y & c),
              a = i;
            return (
              u && b(i) && ((a = v(i)), (s ^= 1)),
              new Signature(o, a, s)
            );
          }
          return { seed: g, k2sig: x };
        }
        const L = { lowS: t.lowS, prehash: !1 },
          _ = { lowS: t.lowS, prehash: !1 };
        function N(e, n, r) {
          void 0 === r && (r = L);
          const { seed: i, k2sig: s } = A(e, n, r),
            a = (0, o.createHmacDrbg)(t.hash.outputLen, h.BYTES, d);
          return a(i, s);
        }
        function k(n, r, i, s) {
          void 0 === s && (s = _);
          const f = n;
          ((r = (0, o.ensureBytes)("msgHash", r)),
            (i = (0, o.ensureBytes)("publicKey", i)),
            a(s));
          const { lowS: c, prehash: u, format: d } = s;
          if ("strict" in s)
            throw new Error("options.strict was renamed to lowS");
          if (void 0 !== d && !["compact", "der", "js"].includes(d))
            throw new Error('format must be "compact", "der" or "js"');
          const l = "string" === typeof f || (0, o.isBytes)(f),
            p =
              !l &&
              !d &&
              "object" === typeof f &&
              null !== f &&
              "bigint" === typeof f.r &&
              "bigint" === typeof f.s;
          if (!l && !p)
            throw new Error(
              "invalid signature, expected Uint8Array, hex string or Signature instance",
            );
          let y,
            m = void 0;
          try {
            if (p) {
              if (void 0 !== d && "js" !== d) throw new Error("invalid format");
              m = new Signature(f.r, f.s);
            }
            if (l) {
              try {
                "compact" !== d && (m = Signature.fromDER(f));
              } catch (I) {
                if (!(I instanceof e.DER.Err)) throw I;
              }
              m || "der" === d || (m = Signature.fromCompact(f));
            }
            y = Point.fromHex(i);
          } catch (O) {
            return !1;
          }
          if (!m) return !1;
          if (c && m.hasHighS()) return !1;
          u && (r = t.hash(r));
          const { r: w, s: b } = m,
            v = P(r),
            g = h.inv(b),
            B = h.create(v * g),
            E = h.create(w * g),
            x = Point.BASE.multiplyUnsafe(B).add(y.multiplyUnsafe(E));
          if (x.is0()) return !1;
          const R = h.create(x.x);
          return R === w;
        }
        return (
          Point.BASE.precompute(8),
          Object.freeze({
            getPublicKey: x,
            getSharedSecret: I,
            sign: N,
            verify: k,
            utils: E,
            Point: Point,
            Signature: Signature,
          })
        );
      }
      function v(t) {
        const e = {
            a: t.a,
            b: t.b,
            p: t.Fp.ORDER,
            n: t.n,
            h: t.h,
            Gx: t.Gx,
            Gy: t.Gy,
          },
          n = t.Fp,
          r = (0, s.Field)(e.n, t.nBitLength),
          o = {
            Fp: n,
            Fn: r,
            allowedPrivateKeyLengths: t.allowedPrivateKeyLengths,
            allowInfinityPoint: t.allowInfinityPoint,
            endo: t.endo,
            wrapPrivateKey: t.wrapPrivateKey,
            isTorsionFree: t.isTorsionFree,
            clearCofactor: t.clearCofactor,
            fromBytes: t.fromBytes,
            toBytes: t.toBytes,
          };
        return { CURVE: e, curveOpts: o };
      }
      function g(t) {
        const { CURVE: e, curveOpts: n } = v(t),
          r = {
            hash: t.hash,
            hmac: t.hmac,
            randomBytes: t.randomBytes,
            lowS: t.lowS,
            bits2int: t.bits2int,
            bits2int_modN: t.bits2int_modN,
          };
        return { CURVE: e, curveOpts: n, ecdsaOpts: r };
      }
      function B(t, Point) {
        const { Fp: e, Fn: n } = Point;
        function r(t) {
          return (0, o.inRange)(t, c, n.ORDER);
        }
        const i = h(e, t.a, t.b),
          s = p(n, t.allowedPrivateKeyLengths, t.wrapPrivateKey);
        return Object.assign(
          {},
          {
            CURVE: t,
            Point: Point,
            ProjectivePoint: Point,
            normPrivateKeyToScalar: s,
            weierstrassEquation: i,
            isWithinCurveOrder: r,
          },
        );
      }
      function E(t, e) {
        return Object.assign({}, e, { ProjectivePoint: e.Point, CURVE: t });
      }
      function x(t) {
        const { CURVE: e, curveOpts: n, ecdsaOpts: r } = g(t),
          Point = y(e, n),
          o = b(Point, r, n);
        return E(t, o);
      }
      function R(t, e) {
        const n = t.ORDER;
        let r = f;
        for (let d = n - c; d % u === f; d /= u) r += c;
        const o = r,
          i = u << (o - c - c),
          s = i * u,
          a = (n - c) / s,
          h = (a - c) / u,
          p = s - c,
          y = i,
          m = t.pow(e, a),
          w = t.pow(e, (a + c) / u);
        let b = (e, n) => {
          let r = m,
            i = t.pow(n, p),
            s = t.sqr(i);
          s = t.mul(s, n);
          let a = t.mul(e, s);
          ((a = t.pow(a, h)),
            (a = t.mul(a, i)),
            (i = t.mul(a, n)),
            (s = t.mul(a, e)));
          let f = t.mul(s, i);
          a = t.pow(f, y);
          let d = t.eql(a, t.ONE);
          ((i = t.mul(s, w)),
            (a = t.mul(f, r)),
            (s = t.cmov(i, s, d)),
            (f = t.cmov(a, f, d)));
          for (let l = o; l > c; l--) {
            let e = l - u;
            e = u << (e - c);
            let n = t.pow(f, e);
            const o = t.eql(n, t.ONE);
            ((i = t.mul(s, r)),
              (r = t.mul(r, r)),
              (n = t.mul(f, r)),
              (s = t.cmov(i, s, o)),
              (f = t.cmov(n, f, o)));
          }
          return { isValid: d, value: s };
        };
        if (t.ORDER % l === d) {
          const n = (t.ORDER - d) / l,
            r = t.sqrt(t.neg(e));
          b = (e, o) => {
            let i = t.sqr(o);
            const s = t.mul(e, o);
            i = t.mul(i, s);
            let a = t.pow(i, n);
            a = t.mul(a, s);
            const f = t.mul(a, r),
              c = t.mul(t.sqr(a), o),
              u = t.eql(c, e);
            let d = t.cmov(f, a, u);
            return { isValid: u, value: d };
          };
        }
        return b;
      }
      function I(t, e) {
        (0, s.validateField)(t);
        const { A: n, B: r, Z: o } = e;
        if (!t.isValid(n) || !t.isValid(r) || !t.isValid(o))
          throw new Error("mapToCurveSimpleSWU: invalid opts");
        const i = R(t, o);
        if (!t.isOdd) throw new Error("Field does not have .isOdd()");
        return (e) => {
          let a, f, c, u, d, l, h, p;
          ((a = t.sqr(e)),
            (a = t.mul(a, o)),
            (f = t.sqr(a)),
            (f = t.add(f, a)),
            (c = t.add(f, t.ONE)),
            (c = t.mul(c, r)),
            (u = t.cmov(o, t.neg(f), !t.eql(f, t.ZERO))),
            (u = t.mul(u, n)),
            (f = t.sqr(c)),
            (l = t.sqr(u)),
            (d = t.mul(l, n)),
            (f = t.add(f, d)),
            (f = t.mul(f, c)),
            (l = t.mul(l, u)),
            (d = t.mul(l, r)),
            (f = t.add(f, d)),
            (h = t.mul(a, c)));
          const { isValid: y, value: m } = i(f, l);
          ((p = t.mul(a, e)),
            (p = t.mul(p, m)),
            (h = t.cmov(h, c, y)),
            (p = t.cmov(p, m, y)));
          const w = t.isOdd(e) === t.isOdd(p);
          p = t.cmov(t.neg(p), p, w);
          const b = (0, s.FpInvertBatch)(t, [u], !0)[0];
          return ((h = t.mul(h, b)), { x: h, y: p });
        };
      }
    },
    4402: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.negateCt = a),
        (e.normalizeZ = f),
        (e.wNAF = b),
        (e.mulEndoUnsafe = v),
        (e.pippenger = g),
        (e.precomputeMSMUnsafe = B),
        (e.validateBasic = E),
        (e._createCurveFields = R));
      const r = n(3151),
        o = n(3185),
        i = BigInt(0),
        s = BigInt(1);
      function a(t, e) {
        const n = e.negate();
        return t ? n : e;
      }
      function f(t, e, n) {
        const r = "pz" === e ? (t) => t.pz : (t) => t.ez,
          i = (0, o.FpInvertBatch)(t.Fp, n.map(r)),
          s = n.map((t, e) => t.toAffine(i[e]));
        return s.map(t.fromAffine);
      }
      function c(t, e) {
        if (!Number.isSafeInteger(t) || t <= 0 || t > e)
          throw new Error(
            "invalid window size, expected [1.." + e + "], got W=" + t,
          );
      }
      function u(t, e) {
        c(t, e);
        const n = Math.ceil(e / t) + 1,
          o = 2 ** (t - 1),
          i = 2 ** t,
          s = (0, r.bitMask)(t),
          a = BigInt(t);
        return { windows: n, windowSize: o, mask: s, maxNumber: i, shiftBy: a };
      }
      function d(t, e, n) {
        const { windowSize: r, mask: o, maxNumber: i, shiftBy: a } = n;
        let f = Number(t & o),
          c = t >> a;
        f > r && ((f -= i), (c += s));
        const u = e * r,
          d = u + Math.abs(f) - 1,
          l = 0 === f,
          h = f < 0,
          p = e % 2 !== 0,
          y = u;
        return {
          nextN: c,
          offset: d,
          isZero: l,
          isNeg: h,
          isNegF: p,
          offsetF: y,
        };
      }
      function l(t, e) {
        if (!Array.isArray(t)) throw new Error("array expected");
        t.forEach((t, n) => {
          if (!(t instanceof e)) throw new Error("invalid point at index " + n);
        });
      }
      function h(t, e) {
        if (!Array.isArray(t)) throw new Error("array of scalars expected");
        t.forEach((t, n) => {
          if (!e.isValid(t)) throw new Error("invalid scalar at index " + n);
        });
      }
      const p = new WeakMap(),
        y = new WeakMap();
      function m(t) {
        return y.get(t) || 1;
      }
      function w(t) {
        if (t !== i) throw new Error("invalid wNAF");
      }
      function b(t, e) {
        return {
          constTimeNegate: a,
          hasPrecomputes(t) {
            return 1 !== m(t);
          },
          unsafeLadder(e, n, r) {
            void 0 === r && (r = t.ZERO);
            let o = e;
            while (n > i)
              (n & s && (r = r.add(o)), (o = o.double()), (n >>= s));
            return r;
          },
          precomputeWindow(t, n) {
            const { windows: r, windowSize: o } = u(n, e),
              i = [];
            let s = t,
              a = s;
            for (let e = 0; e < r; e++) {
              ((a = s), i.push(a));
              for (let t = 1; t < o; t++) ((a = a.add(s)), i.push(a));
              s = a.double();
            }
            return i;
          },
          wNAF(n, r, o) {
            let i = t.ZERO,
              s = t.BASE;
            const f = u(n, e);
            for (let t = 0; t < f.windows; t++) {
              const {
                nextN: e,
                offset: n,
                isZero: c,
                isNeg: u,
                isNegF: l,
                offsetF: h,
              } = d(o, t, f);
              ((o = e), c ? (s = s.add(a(l, r[h]))) : (i = i.add(a(u, r[n]))));
            }
            return (w(o), { p: i, f: s });
          },
          wNAFUnsafe(n, r, o, s) {
            void 0 === s && (s = t.ZERO);
            const a = u(n, e);
            for (let t = 0; t < a.windows; t++) {
              if (o === i) break;
              const { nextN: e, offset: n, isZero: f, isNeg: c } = d(o, t, a);
              if (((o = e), !f)) {
                const t = r[n];
                s = s.add(c ? t.negate() : t);
              }
            }
            return (w(o), s);
          },
          getPrecomputes(t, e, n) {
            let r = p.get(e);
            return (
              r ||
                ((r = this.precomputeWindow(e, t)),
                1 !== t &&
                  ("function" === typeof n && (r = n(r)), p.set(e, r))),
              r
            );
          },
          wNAFCached(t, e, n) {
            const r = m(t);
            return this.wNAF(r, this.getPrecomputes(r, t, n), e);
          },
          wNAFCachedUnsafe(t, e, n, r) {
            const o = m(t);
            return 1 === o
              ? this.unsafeLadder(t, e, r)
              : this.wNAFUnsafe(o, this.getPrecomputes(o, t, n), e, r);
          },
          setWindowSize(t, n) {
            (c(n, e), y.set(t, n), p.delete(t));
          },
        };
      }
      function v(t, e, n, r) {
        let o = e,
          a = t.ZERO,
          f = t.ZERO;
        while (n > i || r > i)
          (n & s && (a = a.add(o)),
            r & s && (f = f.add(o)),
            (o = o.double()),
            (n >>= s),
            (r >>= s));
        return { p1: a, p2: f };
      }
      function g(t, e, n, o) {
        (l(n, t), h(o, e));
        const i = n.length,
          s = o.length;
        if (i !== s)
          throw new Error(
            "arrays of points and scalars must have equal length",
          );
        const a = t.ZERO,
          f = (0, r.bitLen)(BigInt(i));
        let c = 1;
        f > 12 ? (c = f - 3) : f > 4 ? (c = f - 2) : f > 0 && (c = 2);
        const u = (0, r.bitMask)(c),
          d = new Array(Number(u) + 1).fill(a),
          p = Math.floor((e.BITS - 1) / c) * c;
        let y = a;
        for (let r = p; r >= 0; r -= c) {
          d.fill(a);
          for (let e = 0; e < s; e++) {
            const t = o[e],
              i = Number((t >> BigInt(r)) & u);
            d[i] = d[i].add(n[e]);
          }
          let t = a;
          for (let e = d.length - 1, n = a; e > 0; e--)
            ((n = n.add(d[e])), (t = t.add(n)));
          if (((y = y.add(t)), 0 !== r))
            for (let e = 0; e < c; e++) y = y.double();
        }
        return y;
      }
      function B(t, e, n, o) {
        (c(o, e.BITS), l(n, t));
        const i = t.ZERO,
          s = 2 ** o - 1,
          a = Math.ceil(e.BITS / o),
          f = (0, r.bitMask)(o),
          u = n.map((t) => {
            const e = [];
            for (let n = 0, r = t; n < s; n++) (e.push(r), (r = r.add(t)));
            return e;
          });
        return (t) => {
          if ((h(t, e), t.length > n.length))
            throw new Error(
              "array of scalars must be smaller than array of points",
            );
          let r = i;
          for (let e = 0; e < a; e++) {
            if (r !== i) for (let t = 0; t < o; t++) r = r.double();
            const n = BigInt(a * o - (e + 1) * o);
            for (let e = 0; e < t.length; e++) {
              const o = t[e],
                i = Number((o >> n) & f);
              i && (r = r.add(u[e][i - 1]));
            }
          }
          return r;
        };
      }
      function E(t) {
        return (
          (0, o.validateField)(t.Fp),
          (0, r.validateObject)(
            t,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" },
          ),
          Object.freeze({
            ...(0, o.nLength)(t.n, t.nBitLength),
            ...t,
            p: t.Fp.ORDER,
          })
        );
      }
      function x(t, e) {
        if (e) {
          if (e.ORDER !== t)
            throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
          return ((0, o.validateField)(e), e);
        }
        return (0, o.Field)(t);
      }
      function R(t, e, n) {
        if ((void 0 === n && (n = {}), !e || "object" !== typeof e))
          throw new Error(`expected valid ${t} CURVE object`);
        for (const f of ["p", "n", "h"]) {
          const t = e[f];
          if (!("bigint" === typeof t && t > i))
            throw new Error(`CURVE.${f} must be positive bigint`);
        }
        const r = x(e.p, n.Fp),
          o = x(e.n, n.Fn),
          s = "weierstrass" === t ? "b" : "d",
          a = ["Gx", "Gy", "a", s];
        for (const i of a)
          if (!r.isValid(e[i]))
            throw new Error(
              `CURVE.${i} must be valid field element of CURVE.Fp`,
            );
        return { Fp: r, Fn: o };
      }
    },
    4719: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.expand_message_xmd = c),
        (e.expand_message_xof = u),
        (e.hash_to_field = d),
        (e.isogenyMap = l),
        (e.createHasher = h));
      const r = n(3151),
        o = n(3185),
        i = r.bytesToNumberBE;
      function s(t, e) {
        if ((f(t), f(e), t < 0 || t >= 1 << (8 * e)))
          throw new Error("invalid I2OSP input: " + t);
        const n = Array.from({ length: e }).fill(0);
        for (let r = e - 1; r >= 0; r--) ((n[r] = 255 & t), (t >>>= 8));
        return new Uint8Array(n);
      }
      function a(t, e) {
        const n = new Uint8Array(t.length);
        for (let r = 0; r < t.length; r++) n[r] = t[r] ^ e[r];
        return n;
      }
      function f(t) {
        if (!Number.isSafeInteger(t)) throw new Error("number expected");
      }
      function c(t, e, n, o) {
        ((0, r.abytes)(t),
          (0, r.abytes)(e),
          f(n),
          e.length > 255 &&
            (e = o(
              (0, r.concatBytes)((0, r.utf8ToBytes)("H2C-OVERSIZE-DST-"), e),
            )));
        const { outputLen: i, blockLen: c } = o,
          u = Math.ceil(n / i);
        if (n > 65535 || u > 255)
          throw new Error("expand_message_xmd: invalid lenInBytes");
        const d = (0, r.concatBytes)(e, s(e.length, 1)),
          l = s(0, c),
          h = s(n, 2),
          p = new Array(u),
          y = o((0, r.concatBytes)(l, t, h, s(0, 1), d));
        p[0] = o((0, r.concatBytes)(y, s(1, 1), d));
        for (let f = 1; f <= u; f++) {
          const t = [a(y, p[f - 1]), s(f + 1, 1), d];
          p[f] = o((0, r.concatBytes)(...t));
        }
        const m = (0, r.concatBytes)(...p);
        return m.slice(0, n);
      }
      function u(t, e, n, o, i) {
        if (((0, r.abytes)(t), (0, r.abytes)(e), f(n), e.length > 255)) {
          const t = Math.ceil((2 * o) / 8);
          e = i
            .create({ dkLen: t })
            .update((0, r.utf8ToBytes)("H2C-OVERSIZE-DST-"))
            .update(e)
            .digest();
        }
        if (n > 65535 || e.length > 255)
          throw new Error("expand_message_xof: invalid lenInBytes");
        return i
          .create({ dkLen: n })
          .update(t)
          .update(s(n, 2))
          .update(e)
          .update(s(e.length, 1))
          .digest();
      }
      function d(t, e, n) {
        (0, r._validateObject)(n, {
          p: "bigint",
          m: "number",
          k: "number",
          hash: "function",
        });
        const { p: s, k: a, m: d, hash: l, expand: h, DST: p } = n;
        if (!(0, r.isBytes)(p) && "string" !== typeof p)
          throw new Error("DST must be string or uint8array");
        if (!(0, r.isHash)(n.hash)) throw new Error("expected valid hash");
        ((0, r.abytes)(t), f(e));
        const y = "string" === typeof p ? (0, r.utf8ToBytes)(p) : p,
          m = s.toString(2).length,
          w = Math.ceil((m + a) / 8),
          b = e * d * w;
        let v;
        if ("xmd" === h) v = c(t, y, b, l);
        else if ("xof" === h) v = u(t, y, b, a, l);
        else {
          if ("_internal_pass" !== h)
            throw new Error('expand must be "xmd" or "xof"');
          v = t;
        }
        const g = new Array(e);
        for (let r = 0; r < e; r++) {
          const t = new Array(d);
          for (let e = 0; e < d; e++) {
            const n = w * (e + r * d),
              a = v.subarray(n, n + w);
            t[e] = (0, o.mod)(i(a), s);
          }
          g[r] = t;
        }
        return g;
      }
      function l(t, e) {
        const n = e.map((t) => Array.from(t).reverse());
        return (e, r) => {
          const [i, s, a, f] = n.map((n) =>
              n.reduce((n, r) => t.add(t.mul(n, e), r)),
            ),
            [c, u] = (0, o.FpInvertBatch)(t, [s, f], !0);
          return (
            (e = t.mul(i, c)),
            (r = t.mul(r, t.mul(a, u))),
            { x: e, y: r }
          );
        };
      }
      function h(Point, t, e) {
        if ("function" !== typeof t)
          throw new Error("mapToCurve() must be defined");
        function n(e) {
          return Point.fromAffine(t(e));
        }
        function r(t) {
          const e = t.clearCofactor();
          return e.equals(Point.ZERO) ? Point.ZERO : (e.assertValidity(), e);
        }
        return {
          defaults: e,
          hashToCurve(t, o) {
            const i = e.DST ? e.DST : {},
              s = Object.assign({}, e, i, o),
              a = d(t, 2, s),
              f = n(a[0]),
              c = n(a[1]);
            return r(f.add(c));
          },
          encodeToCurve(t, o) {
            const i = e.encodeDST ? e.encodeDST : {},
              s = Object.assign({}, e, i, o),
              a = d(t, 1, s);
            return r(n(a[0]));
          },
          mapToCurve(t) {
            if (!Array.isArray(t)) throw new Error("expected array of bigints");
            for (const e of t)
              if ("bigint" !== typeof e)
                throw new Error("expected array of bigints");
            return r(n(t));
          },
        };
      }
    },
    5285: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getHash = o),
        (e.createCurve = i));
      const r = n(4401);
      function o(t) {
        return { hash: t };
      }
      function i(t, e) {
        const n = (e) => (0, r.weierstrass)({ ...t, hash: e });
        return { ...n(e), create: n };
      }
    },
    5493: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.hash_to_ristretto255 =
          e.hashToRistretto255 =
          e.RistrettoPoint =
          e.encodeToCurve =
          e.hashToCurve =
          e.ed25519_hasher =
          e.edwardsToMontgomery =
          e.x25519 =
          e.ed25519ph =
          e.ed25519ctx =
          e.ed25519 =
          e.ED25519_TORSION_SUBGROUP =
            void 0),
        (e.edwardsToMontgomeryPub = I),
        (e.edwardsToMontgomeryPriv = O));
      const r = n(389),
        o = n(130),
        i = n(4402),
        s = n(9441),
        a = n(4719),
        f = n(3185),
        c = n(9442),
        u = n(3151),
        d = BigInt(0),
        l = BigInt(1),
        h = BigInt(2),
        p = BigInt(3),
        y = BigInt(5),
        m = BigInt(8),
        w = {
          p: BigInt(
            "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed",
          ),
          n: BigInt(
            "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed",
          ),
          h: m,
          a: BigInt(
            "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec",
          ),
          d: BigInt(
            "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3",
          ),
          Gx: BigInt(
            "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
          ),
          Gy: BigInt(
            "0x6666666666666666666666666666666666666666666666666666666666666658",
          ),
        };
      function b(t) {
        const e = BigInt(10),
          n = BigInt(20),
          r = BigInt(40),
          o = BigInt(80),
          i = w.p,
          s = (t * t) % i,
          a = (s * t) % i,
          c = ((0, f.pow2)(a, h, i) * a) % i,
          u = ((0, f.pow2)(c, l, i) * t) % i,
          d = ((0, f.pow2)(u, y, i) * u) % i,
          p = ((0, f.pow2)(d, e, i) * d) % i,
          m = ((0, f.pow2)(p, n, i) * p) % i,
          b = ((0, f.pow2)(m, r, i) * m) % i,
          v = ((0, f.pow2)(b, o, i) * b) % i,
          g = ((0, f.pow2)(v, o, i) * b) % i,
          B = ((0, f.pow2)(g, e, i) * d) % i,
          E = ((0, f.pow2)(B, h, i) * t) % i;
        return { pow_p_5_8: E, b2: a };
      }
      function v(t) {
        return ((t[0] &= 248), (t[31] &= 127), (t[31] |= 64), t);
      }
      const g = BigInt(
        "19681161376707505956807079304988542015446066515923890162744021073123829784752",
      );
      function B(t, e) {
        const n = w.p,
          r = (0, f.mod)(e * e * e, n),
          o = (0, f.mod)(r * r * e, n),
          i = b(t * o).pow_p_5_8;
        let s = (0, f.mod)(t * r * i, n);
        const a = (0, f.mod)(e * s * s, n),
          c = s,
          u = (0, f.mod)(s * g, n),
          d = a === t,
          l = a === (0, f.mod)(-t, n),
          h = a === (0, f.mod)(-t * g, n);
        return (
          d && (s = c),
          (l || h) && (s = u),
          (0, f.isNegativeLE)(s, n) && (s = (0, f.mod)(-s, n)),
          { isValid: d || l, value: s }
        );
      }
      e.ED25519_TORSION_SUBGROUP = [
        "0100000000000000000000000000000000000000000000000000000000000000",
        "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a",
        "0000000000000000000000000000000000000000000000000000000000000080",
        "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05",
        "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f",
        "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85",
        "0000000000000000000000000000000000000000000000000000000000000000",
        "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa",
      ];
      const E = (() => (0, f.Field)(w.p, void 0, !0))(),
        x = (() => ({
          ...w,
          Fp: E,
          hash: r.sha512,
          adjustScalarBytes: v,
          uvRatio: B,
        }))();
      function R(t, e, n) {
        if (e.length > 255) throw new Error("Context is too big");
        return (0, o.concatBytes)(
          (0, o.utf8ToBytes)("SigEd25519 no Ed25519 collisions"),
          new Uint8Array([n ? 1 : 0, e.length]),
          e,
          t,
        );
      }
      function I(t) {
        const n = (0, u.ensureBytes)("pub", t),
          { y: r } = e.ed25519.Point.fromHex(n),
          o = BigInt(1);
        return E.toBytes(E.create((o + r) * E.inv(o - r)));
      }
      function O(t) {
        const e = x.hash(t.subarray(0, 32));
        return x.adjustScalarBytes(e).subarray(0, 32);
      }
      ((e.ed25519 = (() => (0, s.twistedEdwards)(x))()),
        (e.ed25519ctx = (() => (0, s.twistedEdwards)({ ...x, domain: R }))()),
        (e.ed25519ph = (() =>
          (0, s.twistedEdwards)(
            Object.assign({}, x, { domain: R, prehash: r.sha512 }),
          ))()),
        (e.x25519 = (() => {
          const t = w.p;
          return (0, c.montgomery)({
            P: t,
            type: "x25519",
            powPminus2: (e) => {
              const { pow_p_5_8: n, b2: r } = b(e);
              return (0, f.mod)((0, f.pow2)(n, p, t) * r, t);
            },
            adjustScalarBytes: v,
          });
        })()),
        (e.edwardsToMontgomery = I));
      const P = (() => (E.ORDER + p) / m)(),
        S = (() => E.pow(h, P))(),
        T = (() => E.sqrt(E.neg(E.ONE)))();
      function A(t) {
        const e = (E.ORDER - y) / m,
          n = BigInt(486662);
        let r = E.sqr(t);
        r = E.mul(r, h);
        let o = E.add(r, E.ONE),
          i = E.neg(n),
          s = E.sqr(o),
          a = E.mul(s, o),
          f = E.mul(r, n);
        ((f = E.mul(f, i)), (f = E.add(f, s)), (f = E.mul(f, i)));
        let c = E.sqr(a);
        ((s = E.sqr(c)),
          (c = E.mul(c, a)),
          (c = E.mul(c, f)),
          (s = E.mul(s, c)));
        let u = E.pow(s, e);
        u = E.mul(u, c);
        let d = E.mul(u, T);
        ((s = E.sqr(u)), (s = E.mul(s, a)));
        let p = E.eql(s, f),
          w = E.cmov(d, u, p),
          b = E.mul(i, r),
          v = E.mul(u, t);
        v = E.mul(v, S);
        let g = E.mul(v, T),
          B = E.mul(f, r);
        ((s = E.sqr(v)), (s = E.mul(s, a)));
        let x = E.eql(s, B),
          R = E.cmov(g, v, x);
        ((s = E.sqr(w)), (s = E.mul(s, a)));
        let I = E.eql(s, f),
          O = E.cmov(b, i, I),
          P = E.cmov(R, w, I),
          A = E.isOdd(P);
        return (
          (P = E.cmov(P, E.neg(P), I !== A)),
          { xMn: O, xMd: o, yMn: P, yMd: l }
        );
      }
      const L = (() => (0, f.FpSqrtEven)(E, E.neg(BigInt(486664))))();
      function _(t) {
        const { xMn: e, xMd: n, yMn: r, yMd: o } = A(t);
        let i = E.mul(e, o);
        i = E.mul(i, L);
        let s = E.mul(n, r),
          a = E.sub(e, n),
          c = E.add(e, n),
          u = E.mul(s, c),
          d = E.eql(u, E.ZERO);
        ((i = E.cmov(i, E.ZERO, d)),
          (s = E.cmov(s, E.ONE, d)),
          (a = E.cmov(a, E.ONE, d)),
          (c = E.cmov(c, E.ONE, d)));
        const [l, h] = (0, f.FpInvertBatch)(E, [s, c], !0);
        return { x: E.mul(i, l), y: E.mul(a, h) };
      }
      function N(t) {
        if (!(t instanceof RistPoint))
          throw new Error("RistrettoPoint expected");
      }
      ((e.ed25519_hasher = (() =>
        (0, a.createHasher)(e.ed25519.Point, (t) => _(t[0]), {
          DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
          encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
          p: E.ORDER,
          m: 1,
          k: 128,
          expand: "xmd",
          hash: r.sha512,
        }))()),
        (e.hashToCurve = (() => e.ed25519_hasher.hashToCurve)()),
        (e.encodeToCurve = (() => e.ed25519_hasher.encodeToCurve)()));
      const k = g,
        F = BigInt(
          "25063068953384623474111414158702152701244531502492656460079210482610430750235",
        ),
        U = BigInt(
          "54469307008909316920995813868745141605393597292927456921205312896311721017578",
        ),
        q = BigInt(
          "1159843021668779879193775521855586647937357759715417654439879720876111806838",
        ),
        C = BigInt(
          "40440834346308536858101042469323190826248399146238708352240133220865137265952",
        ),
        D = (t) => B(l, t),
        H = BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        ),
        j = (t) => e.ed25519.CURVE.Fp.create((0, u.bytesToNumberLE)(t) & H);
      function z(t) {
        const { d: n } = e.ed25519.CURVE,
          r = e.ed25519.CURVE.Fp.ORDER,
          o = e.ed25519.CURVE.Fp.create,
          i = o(k * t * t),
          s = o((i + l) * q);
        let a = BigInt(-1);
        const c = o((a - n * i) * o(i + n));
        let { isValid: u, value: d } = B(s, c),
          h = o(d * t);
        ((0, f.isNegativeLE)(h, r) || (h = o(-h)), u || (d = h), u || (a = i));
        const p = o(a * (i - l) * C - c),
          y = d * d,
          m = o((d + d) * c),
          w = o(p * F),
          b = o(l - y),
          v = o(l + y);
        return new e.ed25519.Point(o(m * v), o(b * w), o(w * v), o(m * b));
      }
      class RistPoint {
        constructor(t) {
          this.ep = t;
        }
        static fromAffine(t) {
          return new RistPoint(e.ed25519.Point.fromAffine(t));
        }
        static hashToCurve(t) {
          t = (0, u.ensureBytes)("ristrettoHash", t, 64);
          const e = j(t.slice(0, 32)),
            n = z(e),
            r = j(t.slice(32, 64)),
            o = z(r);
          return new RistPoint(n.add(o));
        }
        static fromBytes(t) {
          return ((0, o.abytes)(t), this.fromHex(t));
        }
        static fromHex(t) {
          t = (0, u.ensureBytes)("ristrettoHex", t, 32);
          const { a: n, d: r } = e.ed25519.CURVE,
            o = E.ORDER,
            i = E.create,
            s =
              "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint",
            a = j(t);
          if (
            !(0, u.equalBytes)((0, u.numberToBytesLE)(a, 32), t) ||
            (0, f.isNegativeLE)(a, o)
          )
            throw new Error(s);
          const c = i(a * a),
            h = i(l + n * c),
            p = i(l - n * c),
            y = i(h * h),
            m = i(p * p),
            w = i(n * r * y - m),
            { isValid: b, value: v } = D(i(w * m)),
            g = i(v * p),
            B = i(v * g * w);
          let x = i((a + a) * g);
          (0, f.isNegativeLE)(x, o) && (x = i(-x));
          const R = i(h * B),
            I = i(x * R);
          if (!b || (0, f.isNegativeLE)(I, o) || R === d) throw new Error(s);
          return new RistPoint(new e.ed25519.Point(x, R, l, I));
        }
        static msm(t, n) {
          const r = (0, f.Field)(e.ed25519.CURVE.n, e.ed25519.CURVE.nBitLength);
          return (0, i.pippenger)(RistPoint, r, t, n);
        }
        toBytes() {
          let { ex: t, ey: e, ez: n, et: r } = this.ep;
          const o = E.ORDER,
            i = E.create,
            s = i(i(n + e) * i(n - e)),
            a = i(t * e),
            c = i(a * a),
            { value: d } = D(i(s * c)),
            l = i(d * s),
            h = i(d * a),
            p = i(l * h * r);
          let y;
          if ((0, f.isNegativeLE)(r * p, o)) {
            let n = i(e * k),
              r = i(t * k);
            ((t = n), (e = r), (y = i(l * U)));
          } else y = h;
          (0, f.isNegativeLE)(t * p, o) && (e = i(-e));
          let m = i((n - e) * y);
          return (
            (0, f.isNegativeLE)(m, o) && (m = i(-m)),
            (0, u.numberToBytesLE)(m, 32)
          );
        }
        toRawBytes() {
          return this.toBytes();
        }
        toHex() {
          return (0, u.bytesToHex)(this.toBytes());
        }
        toString() {
          return this.toHex();
        }
        equals(t) {
          N(t);
          const { ex: e, ey: n } = this.ep,
            { ex: r, ey: o } = t.ep,
            i = E.create,
            s = i(e * o) === i(n * r),
            a = i(n * o) === i(e * r);
          return s || a;
        }
        add(t) {
          return (N(t), new RistPoint(this.ep.add(t.ep)));
        }
        subtract(t) {
          return (N(t), new RistPoint(this.ep.subtract(t.ep)));
        }
        multiply(t) {
          return new RistPoint(this.ep.multiply(t));
        }
        multiplyUnsafe(t) {
          return new RistPoint(this.ep.multiplyUnsafe(t));
        }
        double() {
          return new RistPoint(this.ep.double());
        }
        negate() {
          return new RistPoint(this.ep.negate());
        }
      }
      e.RistrettoPoint = (() => (
        RistPoint.BASE ||
          (RistPoint.BASE = new RistPoint(e.ed25519.Point.BASE)),
        RistPoint.ZERO ||
          (RistPoint.ZERO = new RistPoint(e.ed25519.Point.ZERO)),
        RistPoint
      ))();
      const M = (t, e) => {
        const n = e.DST,
          i = "string" === typeof n ? (0, o.utf8ToBytes)(n) : n,
          s = (0, a.expand_message_xmd)(t, i, 64, r.sha512),
          f = RistPoint.hashToCurve(s);
        return f;
      };
      ((e.hashToRistretto255 = M),
        (e.hash_to_ristretto255 = e.hashToRistretto255));
    },
    9441: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.edwards = l),
        (e.eddsa = h),
        (e.twistedEdwards = m));
      const r = n(3151),
        o = n(4402),
        i = n(3185),
        s = BigInt(0),
        a = BigInt(1),
        f = BigInt(2),
        c = BigInt(8),
        u = { zip215: !0 };
      function d(t, e, n, r) {
        const o = t.sqr(n),
          i = t.sqr(r),
          s = t.add(t.mul(e.a, o), i),
          a = t.add(t.ONE, t.mul(e.d, t.mul(o, i)));
        return t.eql(s, a);
      }
      function l(t, e) {
        void 0 === e && (e = {});
        const { Fp: n, Fn: i } = (0, o._createCurveFields)("edwards", t, e),
          { h: u, n: l } = t;
        (0, r._validateObject)(e, {}, { uvRatio: "function" });
        const h = f << (BigInt(8 * i.BYTES) - a),
          p = (t) => n.create(t),
          y =
            e.uvRatio ||
            ((t, e) => {
              try {
                return { isValid: !0, value: n.sqrt(n.div(t, e)) };
              } catch (r) {
                return { isValid: !1, value: s };
              }
            });
        if (!d(n, t, t.Gx, t.Gy))
          throw new Error("bad curve params: generator point");
        function m(t, e, n) {
          void 0 === n && (n = !1);
          const o = n ? a : s;
          return ((0, r.aInRange)("coordinate " + t, e, o, h), e);
        }
        function w(t) {
          if (!(t instanceof Point)) throw new Error("ExtendedPoint expected");
        }
        const b = (0, r.memoized)((t, e) => {
            const { ex: r, ey: o, ez: i } = t,
              f = t.is0();
            null == e && (e = f ? c : n.inv(i));
            const u = p(r * e),
              d = p(o * e),
              l = p(i * e);
            if (f) return { x: s, y: a };
            if (l !== a) throw new Error("invZ was invalid");
            return { x: u, y: d };
          }),
          v = (0, r.memoized)((e) => {
            const { a: n, d: r } = t;
            if (e.is0()) throw new Error("bad point: ZERO");
            const { ex: o, ey: i, ez: s, et: a } = e,
              f = p(o * o),
              c = p(i * i),
              u = p(s * s),
              d = p(u * u),
              l = p(f * n),
              h = p(u * p(l + c)),
              y = p(d + p(r * p(f * c)));
            if (h !== y)
              throw new Error("bad point: equation left != right (1)");
            const m = p(o * i),
              w = p(s * a);
            if (m !== w)
              throw new Error("bad point: equation left != right (2)");
            return !0;
          });
        class Point {
          constructor(t, e, n, r) {
            ((this.ex = m("x", t)),
              (this.ey = m("y", e)),
              (this.ez = m("z", n, !0)),
              (this.et = m("t", r)),
              Object.freeze(this));
          }
          get x() {
            return this.toAffine().x;
          }
          get y() {
            return this.toAffine().y;
          }
          static fromAffine(t) {
            if (t instanceof Point)
              throw new Error("extended point not allowed");
            const { x: e, y: n } = t || {};
            return (m("x", e), m("y", n), new Point(e, n, a, p(e * n)));
          }
          static normalizeZ(t) {
            return (0, o.normalizeZ)(Point, "ez", t);
          }
          static msm(t, e) {
            return (0, o.pippenger)(Point, i, t, e);
          }
          _setWindowSize(t) {
            this.precompute(t);
          }
          precompute(t, e) {
            return (
              void 0 === t && (t = 8),
              void 0 === e && (e = !0),
              g.setWindowSize(this, t),
              e || this.multiply(f),
              this
            );
          }
          assertValidity() {
            v(this);
          }
          equals(t) {
            w(t);
            const { ex: e, ey: n, ez: r } = this,
              { ex: o, ey: i, ez: s } = t,
              a = p(e * s),
              f = p(o * r),
              c = p(n * s),
              u = p(i * r);
            return a === f && c === u;
          }
          is0() {
            return this.equals(Point.ZERO);
          }
          negate() {
            return new Point(p(-this.ex), this.ey, this.ez, p(-this.et));
          }
          double() {
            const { a: e } = t,
              { ex: n, ey: r, ez: o } = this,
              i = p(n * n),
              s = p(r * r),
              a = p(f * p(o * o)),
              c = p(e * i),
              u = n + r,
              d = p(p(u * u) - i - s),
              l = c + s,
              h = l - a,
              y = c - s,
              m = p(d * h),
              w = p(l * y),
              b = p(d * y),
              v = p(h * l);
            return new Point(m, w, v, b);
          }
          add(e) {
            w(e);
            const { a: n, d: r } = t,
              { ex: o, ey: i, ez: s, et: a } = this,
              { ex: f, ey: c, ez: u, et: d } = e,
              l = p(o * f),
              h = p(i * c),
              y = p(a * r * d),
              m = p(s * u),
              b = p((o + i) * (f + c) - l - h),
              v = m - y,
              g = m + y,
              B = p(h - n * l),
              E = p(b * v),
              x = p(g * B),
              R = p(b * B),
              I = p(v * g);
            return new Point(E, x, I, R);
          }
          subtract(t) {
            return this.add(t.negate());
          }
          multiply(t) {
            const e = t;
            (0, r.aInRange)("scalar", e, a, l);
            const { p: n, f: o } = g.wNAFCached(this, e, Point.normalizeZ);
            return Point.normalizeZ([n, o])[0];
          }
          multiplyUnsafe(t, e) {
            void 0 === e && (e = Point.ZERO);
            const n = t;
            return (
              (0, r.aInRange)("scalar", n, s, l),
              n === s
                ? Point.ZERO
                : this.is0() || n === a
                  ? this
                  : g.wNAFCachedUnsafe(this, n, Point.normalizeZ, e)
            );
          }
          isSmallOrder() {
            return this.multiplyUnsafe(u).is0();
          }
          isTorsionFree() {
            return g.wNAFCachedUnsafe(this, l).is0();
          }
          toAffine(t) {
            return b(this, t);
          }
          clearCofactor() {
            return u === a ? this : this.multiplyUnsafe(u);
          }
          static fromBytes(t, e) {
            return (
              void 0 === e && (e = !1),
              (0, r.abytes)(t),
              this.fromHex(t, e)
            );
          }
          static fromHex(e, o) {
            void 0 === o && (o = !1);
            const { d: i, a: f } = t,
              c = n.BYTES;
            ((e = (0, r.ensureBytes)("pointHex", e, c)),
              (0, r.abool)("zip215", o));
            const u = e.slice(),
              d = e[c - 1];
            u[c - 1] = -129 & d;
            const l = (0, r.bytesToNumberLE)(u),
              m = o ? h : n.ORDER;
            (0, r.aInRange)("pointHex.y", l, s, m);
            const w = p(l * l),
              b = p(w - a),
              v = p(i * w - f);
            let { isValid: g, value: B } = y(b, v);
            if (!g) throw new Error("Point.fromHex: invalid y coordinate");
            const E = (B & a) === a,
              x = 0 !== (128 & d);
            if (!o && B === s && x)
              throw new Error("Point.fromHex: x=0 and x_0=1");
            return (x !== E && (B = p(-B)), Point.fromAffine({ x: B, y: l }));
          }
          static fromPrivateScalar(t) {
            return Point.BASE.multiply(t);
          }
          toBytes() {
            const { x: t, y: e } = this.toAffine(),
              o = (0, r.numberToBytesLE)(e, n.BYTES);
            return ((o[o.length - 1] |= t & a ? 128 : 0), o);
          }
          toRawBytes() {
            return this.toBytes();
          }
          toHex() {
            return (0, r.bytesToHex)(this.toBytes());
          }
          toString() {
            return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
          }
        }
        ((Point.BASE = new Point(t.Gx, t.Gy, a, p(t.Gx * t.Gy))),
          (Point.ZERO = new Point(s, a, a, s)),
          (Point.Fp = n),
          (Point.Fn = i));
        const g = (0, o.wNAF)(Point, 8 * i.BYTES);
        return Point;
      }
      function h(Point, t) {
        (0, r._validateObject)(
          t,
          { hash: "function" },
          {
            adjustScalarBytes: "function",
            randomBytes: "function",
            domain: "function",
            prehash: "function",
            mapToCurve: "function",
          },
        );
        const { prehash: e, hash: n } = t,
          { BASE: o, Fp: i, Fn: a } = Point,
          f = a.ORDER,
          c = t.randomBytes || r.randomBytes,
          d = t.adjustScalarBytes || ((t) => t),
          l =
            t.domain ||
            ((t, e, n) => {
              if (((0, r.abool)("phflag", n), e.length || n))
                throw new Error("Contexts/pre-hash are not supported");
              return t;
            });
        function h(t) {
          return a.create(t);
        }
        function p(t) {
          return h((0, r.bytesToNumberLE)(t));
        }
        function y(t) {
          const e = i.BYTES;
          t = (0, r.ensureBytes)("private key", t, e);
          const o = (0, r.ensureBytes)("hashed private key", n(t), 2 * e),
            s = d(o.slice(0, e)),
            a = o.slice(e, 2 * e),
            f = p(s);
          return { head: s, prefix: a, scalar: f };
        }
        function m(t) {
          const { head: e, prefix: n, scalar: r } = y(t),
            i = o.multiply(r),
            s = i.toBytes();
          return { head: e, prefix: n, scalar: r, point: i, pointBytes: s };
        }
        function w(t) {
          return m(t).pointBytes;
        }
        function b(t) {
          void 0 === t && (t = Uint8Array.of());
          for (
            var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1;
            s < o;
            s++
          )
            i[s - 1] = arguments[s];
          const a = (0, r.concatBytes)(...i);
          return p(n(l(a, (0, r.ensureBytes)("context", t), !!e)));
        }
        function v(t, n, a) {
          (void 0 === a && (a = {}),
            (t = (0, r.ensureBytes)("message", t)),
            e && (t = e(t)));
          const { prefix: c, scalar: u, pointBytes: d } = m(n),
            l = b(a.context, c, t),
            p = o.multiply(l).toBytes(),
            y = b(a.context, p, d, t),
            w = h(l + y * u);
          (0, r.aInRange)("signature.s", w, s, f);
          const v = i.BYTES,
            g = (0, r.concatBytes)(p, (0, r.numberToBytesLE)(w, v));
          return (0, r.ensureBytes)("result", g, 2 * v);
        }
        const g = u;
        function B(t, n, s, a) {
          void 0 === a && (a = g);
          const { context: f, zip215: c } = a,
            u = i.BYTES;
          ((t = (0, r.ensureBytes)("signature", t, 2 * u)),
            (n = (0, r.ensureBytes)("message", n)),
            (s = (0, r.ensureBytes)("publicKey", s, u)),
            void 0 !== c && (0, r.abool)("zip215", c),
            e && (n = e(n)));
          const d = (0, r.bytesToNumberLE)(t.slice(u, 2 * u));
          let l, h, p;
          try {
            ((l = Point.fromHex(s, c)),
              (h = Point.fromHex(t.slice(0, u), c)),
              (p = o.multiplyUnsafe(d)));
          } catch (w) {
            return !1;
          }
          if (!c && l.isSmallOrder()) return !1;
          const y = b(f, h.toBytes(), l.toBytes(), n),
            m = h.add(l.multiplyUnsafe(y));
          return m.subtract(p).clearCofactor().is0();
        }
        o.precompute(8);
        const E = {
          getExtendedPublicKey: m,
          randomPrivateKey: () => c(i.BYTES),
          precompute(t, e) {
            return (
              void 0 === t && (t = 8),
              void 0 === e && (e = Point.BASE),
              e.precompute(t, !1)
            );
          },
        };
        return { getPublicKey: w, sign: v, verify: B, utils: E, Point: Point };
      }
      function p(t) {
        const e = {
            a: t.a,
            d: t.d,
            p: t.Fp.ORDER,
            n: t.n,
            h: t.h,
            Gx: t.Gx,
            Gy: t.Gy,
          },
          n = t.Fp,
          r = (0, i.Field)(e.n, t.nBitLength, !0),
          o = { Fp: n, Fn: r, uvRatio: t.uvRatio },
          s = {
            hash: t.hash,
            randomBytes: t.randomBytes,
            adjustScalarBytes: t.adjustScalarBytes,
            domain: t.domain,
            prehash: t.prehash,
            mapToCurve: t.mapToCurve,
          };
        return { CURVE: e, curveOpts: o, eddsaOpts: s };
      }
      function y(t, e) {
        const n = Object.assign({}, e, { ExtendedPoint: e.Point, CURVE: t });
        return n;
      }
      function m(t) {
        const { CURVE: e, curveOpts: n, eddsaOpts: r } = p(t),
          Point = l(e, n),
          o = h(Point, r);
        return y(t, o);
      }
    },
    9442: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.montgomery = c));
      const r = n(3151),
        o = n(3185),
        i = BigInt(0),
        s = BigInt(1),
        a = BigInt(2);
      function f(t) {
        return (
          (0, r._validateObject)(t, {
            adjustScalarBytes: "function",
            powPminus2: "function",
          }),
          Object.freeze({ ...t })
        );
      }
      function c(t) {
        const e = f(t),
          {
            P: n,
            type: c,
            adjustScalarBytes: u,
            powPminus2: d,
            randomBytes: l,
          } = e,
          h = "x25519" === c;
        if (!h && "x448" !== c) throw new Error("invalid type");
        const p = l || r.randomBytes,
          y = h ? 255 : 448,
          m = h ? 32 : 56,
          w = h ? BigInt(9) : BigInt(5),
          b = h ? BigInt(121665) : BigInt(39081),
          v = h ? a ** BigInt(254) : a ** BigInt(447),
          g = h
            ? BigInt(8) * a ** BigInt(251) - s
            : BigInt(4) * a ** BigInt(445) - s,
          B = v + g + s,
          E = (t) => (0, o.mod)(t, n),
          x = R(w);
        function R(t) {
          return (0, r.numberToBytesLE)(E(t), m);
        }
        function I(t) {
          const e = (0, r.ensureBytes)("u coordinate", t, m);
          return (h && (e[31] &= 127), E((0, r.bytesToNumberLE)(e)));
        }
        function O(t) {
          return (0, r.bytesToNumberLE)(u((0, r.ensureBytes)("scalar", t, m)));
        }
        function P(t, e) {
          const n = A(I(e), O(t));
          if (n === i)
            throw new Error("invalid private or public key received");
          return R(n);
        }
        function S(t) {
          return P(t, x);
        }
        function T(t, e, n) {
          const r = E(t * (e - n));
          return ((e = E(e - r)), (n = E(n + r)), { x_2: e, x_3: n });
        }
        function A(t, e) {
          ((0, r.aInRange)("u", t, i, n), (0, r.aInRange)("scalar", e, v, B));
          const o = e,
            a = t;
          let f = s,
            c = i,
            u = t,
            l = s,
            h = i;
          for (let n = BigInt(y - 1); n >= i; n--) {
            const t = (o >> n) & s;
            ((h ^= t),
              ({ x_2: f, x_3: u } = T(h, f, u)),
              ({ x_2: c, x_3: l } = T(h, c, l)),
              (h = t));
            const e = f + c,
              r = E(e * e),
              i = f - c,
              d = E(i * i),
              p = r - d,
              y = u + l,
              m = u - l,
              w = E(m * e),
              v = E(y * i),
              g = w + v,
              B = w - v;
            ((u = E(g * g)),
              (l = E(a * E(B * B))),
              (f = E(r * d)),
              (c = E(p * (r + E(b * p)))));
          }
          (({ x_2: f, x_3: u } = T(h, f, u)),
            ({ x_2: c, x_3: l } = T(h, c, l)));
          const p = d(c);
          return E(f * p);
        }
        return {
          scalarMult: P,
          scalarMultBase: S,
          getSharedSecret: (t, e) => P(t, e),
          getPublicKey: (t) => S(t),
          utils: { randomPrivateKey: () => p(m) },
          GuBytes: x.slice(),
        };
      }
    },
    9488: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.scrypt = u),
        (e.scryptAsync = d));
      const r = n(2966),
        o = n(389),
        i = n(130);
      function s(t, e, n, r, o, s) {
        let a = t[e++] ^ n[r++],
          f = t[e++] ^ n[r++],
          c = t[e++] ^ n[r++],
          u = t[e++] ^ n[r++],
          d = t[e++] ^ n[r++],
          l = t[e++] ^ n[r++],
          h = t[e++] ^ n[r++],
          p = t[e++] ^ n[r++],
          y = t[e++] ^ n[r++],
          m = t[e++] ^ n[r++],
          w = t[e++] ^ n[r++],
          b = t[e++] ^ n[r++],
          v = t[e++] ^ n[r++],
          g = t[e++] ^ n[r++],
          B = t[e++] ^ n[r++],
          E = t[e++] ^ n[r++],
          x = a,
          R = f,
          I = c,
          O = u,
          P = d,
          S = l,
          T = h,
          A = p,
          L = y,
          _ = m,
          N = w,
          k = b,
          F = v,
          U = g,
          q = B,
          C = E;
        for (let D = 0; D < 8; D += 2)
          ((P ^= (0, i.rotl)((x + F) | 0, 7)),
            (L ^= (0, i.rotl)((P + x) | 0, 9)),
            (F ^= (0, i.rotl)((L + P) | 0, 13)),
            (x ^= (0, i.rotl)((F + L) | 0, 18)),
            (_ ^= (0, i.rotl)((S + R) | 0, 7)),
            (U ^= (0, i.rotl)((_ + S) | 0, 9)),
            (R ^= (0, i.rotl)((U + _) | 0, 13)),
            (S ^= (0, i.rotl)((R + U) | 0, 18)),
            (q ^= (0, i.rotl)((N + T) | 0, 7)),
            (I ^= (0, i.rotl)((q + N) | 0, 9)),
            (T ^= (0, i.rotl)((I + q) | 0, 13)),
            (N ^= (0, i.rotl)((T + I) | 0, 18)),
            (O ^= (0, i.rotl)((C + k) | 0, 7)),
            (A ^= (0, i.rotl)((O + C) | 0, 9)),
            (k ^= (0, i.rotl)((A + O) | 0, 13)),
            (C ^= (0, i.rotl)((k + A) | 0, 18)),
            (R ^= (0, i.rotl)((x + O) | 0, 7)),
            (I ^= (0, i.rotl)((R + x) | 0, 9)),
            (O ^= (0, i.rotl)((I + R) | 0, 13)),
            (x ^= (0, i.rotl)((O + I) | 0, 18)),
            (T ^= (0, i.rotl)((S + P) | 0, 7)),
            (A ^= (0, i.rotl)((T + S) | 0, 9)),
            (P ^= (0, i.rotl)((A + T) | 0, 13)),
            (S ^= (0, i.rotl)((P + A) | 0, 18)),
            (k ^= (0, i.rotl)((N + _) | 0, 7)),
            (L ^= (0, i.rotl)((k + N) | 0, 9)),
            (_ ^= (0, i.rotl)((L + k) | 0, 13)),
            (N ^= (0, i.rotl)((_ + L) | 0, 18)),
            (F ^= (0, i.rotl)((C + q) | 0, 7)),
            (U ^= (0, i.rotl)((F + C) | 0, 9)),
            (q ^= (0, i.rotl)((U + F) | 0, 13)),
            (C ^= (0, i.rotl)((q + U) | 0, 18)));
        ((o[s++] = (a + x) | 0),
          (o[s++] = (f + R) | 0),
          (o[s++] = (c + I) | 0),
          (o[s++] = (u + O) | 0),
          (o[s++] = (d + P) | 0),
          (o[s++] = (l + S) | 0),
          (o[s++] = (h + T) | 0),
          (o[s++] = (p + A) | 0),
          (o[s++] = (y + L) | 0),
          (o[s++] = (m + _) | 0),
          (o[s++] = (w + N) | 0),
          (o[s++] = (b + k) | 0),
          (o[s++] = (v + F) | 0),
          (o[s++] = (g + U) | 0),
          (o[s++] = (B + q) | 0),
          (o[s++] = (E + C) | 0));
      }
      function a(t, e, n, r, o) {
        let i = r + 0,
          a = r + 16 * o;
        for (let s = 0; s < 16; s++) n[a + s] = t[e + 16 * (2 * o - 1) + s];
        for (let f = 0; f < o; f++, i += 16, e += 16)
          (s(n, a, t, e, n, i),
            f > 0 && (a += 16),
            s(n, i, t, (e += 16), n, a));
      }
      function f(t, e, n) {
        const s = (0, i.checkOpts)(
            { dkLen: 32, asyncTick: 10, maxmem: 1073742848 },
            n,
          ),
          {
            N: a,
            r: f,
            p: c,
            dkLen: u,
            asyncTick: d,
            maxmem: l,
            onProgress: h,
          } = s;
        if (
          ((0, i.anumber)(a),
          (0, i.anumber)(f),
          (0, i.anumber)(c),
          (0, i.anumber)(u),
          (0, i.anumber)(d),
          (0, i.anumber)(l),
          void 0 !== h && "function" !== typeof h)
        )
          throw new Error("progressCb should be function");
        const p = 128 * f,
          y = p / 4,
          m = Math.pow(2, 32);
        if (a <= 1 || 0 !== (a & (a - 1)) || a > m)
          throw new Error(
            "Scrypt: N must be larger than 1, a power of 2, and less than 2^32",
          );
        if (c < 0 || c > (32 * (m - 1)) / p)
          throw new Error(
            "Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)",
          );
        if (u < 0 || u > 32 * (m - 1))
          throw new Error(
            "Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32",
          );
        const w = p * (a + c);
        if (w > l)
          throw new Error(
            "Scrypt: memused is bigger than maxMem. Expected 128 * r * (N + p) > maxmem of " +
              l,
          );
        const b = (0, r.pbkdf2)(o.sha256, t, e, { c: 1, dkLen: p * c }),
          v = (0, i.u32)(b),
          g = (0, i.u32)(new Uint8Array(p * a)),
          B = (0, i.u32)(new Uint8Array(p));
        let E = () => {};
        if (h) {
          const t = 2 * a * c,
            e = Math.max(Math.floor(t / 1e4), 1);
          let n = 0;
          E = () => {
            (n++, !h || (n % e && n !== t) || h(n / t));
          };
        }
        return {
          N: a,
          r: f,
          p: c,
          dkLen: u,
          blockSize32: y,
          V: g,
          B32: v,
          B: b,
          tmp: B,
          blockMixCb: E,
          asyncTick: d,
        };
      }
      function c(t, e, n, s, a) {
        const f = (0, r.pbkdf2)(o.sha256, t, n, { c: 1, dkLen: e });
        return ((0, i.clean)(n, s, a), f);
      }
      function u(t, e, n) {
        const {
          N: r,
          r: o,
          p: s,
          dkLen: u,
          blockSize32: d,
          V: l,
          B32: h,
          B: p,
          tmp: y,
          blockMixCb: m,
        } = f(t, e, n);
        (0, i.swap32IfBE)(h);
        for (let i = 0; i < s; i++) {
          const t = d * i;
          for (let e = 0; e < d; e++) l[e] = h[t + e];
          for (let e = 0, n = 0; e < r - 1; e++) (a(l, n, l, (n += d), o), m());
          (a(l, (r - 1) * d, h, t, o), m());
          for (let e = 0; e < r; e++) {
            const e = h[t + d - 16] % r;
            for (let n = 0; n < d; n++) y[n] = h[t + n] ^ l[e * d + n];
            (a(y, 0, h, t, o), m());
          }
        }
        return ((0, i.swap32IfBE)(h), c(t, u, p, l, y));
      }
      async function d(t, e, n) {
        const {
          N: r,
          r: o,
          p: s,
          dkLen: u,
          blockSize32: d,
          V: l,
          B32: h,
          B: p,
          tmp: y,
          blockMixCb: m,
          asyncTick: w,
        } = f(t, e, n);
        (0, i.swap32IfBE)(h);
        for (let f = 0; f < s; f++) {
          const t = d * f;
          for (let n = 0; n < d; n++) l[n] = h[t + n];
          let e = 0;
          (await (0, i.asyncLoop)(r - 1, w, () => {
            (a(l, e, l, (e += d), o), m());
          }),
            a(l, (r - 1) * d, h, t, o),
            m(),
            await (0, i.asyncLoop)(r, w, () => {
              const e = h[t + d - 16] % r;
              for (let n = 0; n < d; n++) y[n] = h[t + n] ^ l[e * d + n];
              (a(y, 0, h, t, o), m());
            }));
        }
        return ((0, i.swap32IfBE)(h), c(t, u, p, l, y));
      }
    },
  },
]);
