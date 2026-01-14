(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [24],
  {
    2855: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), r(9217));
      var n = r(9306);
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
    },
    3163: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "compareArray", {
          enumerable: !0,
          get: function () {
            return n.compareArray;
          },
        }),
        Object.defineProperty(t, "compareMap", {
          enumerable: !0,
          get: function () {
            return i.compareMap;
          },
        }),
        Object.defineProperty(t, "compareSet", {
          enumerable: !0,
          get: function () {
            return s.compareSet;
          },
        }),
        Object.defineProperty(t, "decodeU8a", {
          enumerable: !0,
          get: function () {
            return o.decodeU8a;
          },
        }),
        Object.defineProperty(t, "decodeU8aStruct", {
          enumerable: !0,
          get: function () {
            return o.decodeU8aStruct;
          },
        }),
        Object.defineProperty(t, "decodeU8aVec", {
          enumerable: !0,
          get: function () {
            return o.decodeU8aVec;
          },
        }),
        Object.defineProperty(t, "mapToTypeMap", {
          enumerable: !0,
          get: function () {
            return c.mapToTypeMap;
          },
        }),
        Object.defineProperty(t, "sanitize", {
          enumerable: !0,
          get: function () {
            return a.sanitize;
          },
        }),
        Object.defineProperty(t, "sortAsc", {
          enumerable: !0,
          get: function () {
            return u.sortAsc;
          },
        }),
        Object.defineProperty(t, "sortMap", {
          enumerable: !0,
          get: function () {
            return u.sortMap;
          },
        }),
        Object.defineProperty(t, "sortSet", {
          enumerable: !0,
          get: function () {
            return u.sortSet;
          },
        }),
        Object.defineProperty(t, "typeToConstructor", {
          enumerable: !0,
          get: function () {
            return c.typeToConstructor;
          },
        }),
        Object.defineProperty(t, "typesToConstructors", {
          enumerable: !0,
          get: function () {
            return c.typesToConstructors;
          },
        }),
        Object.defineProperty(t, "typesToMap", {
          enumerable: !0,
          get: function () {
            return l.typesToMap;
          },
        }));
      var n = r(6468),
        i = r(9311),
        s = r(9312),
        o = r(9313),
        a = r(9314),
        u = r(9315),
        c = r(9316),
        l = r(9317);
    },
    3816: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Int = void 0));
      var n = r(5473);
      class Int extends n.AbstractInt {
        constructor(e, t, r) {
          (void 0 === t && (t = 0), super(e, t, r, !0));
        }
        static with(e, t) {
          return class extends Int {
            constructor(t, r) {
              super(t, r, e);
            }
            toRawType() {
              return t || super.toRawType();
            }
          };
        }
      }
      t.Int = Int;
    },
    3817: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UInt = void 0));
      var n = r(5473);
      class UInt extends n.AbstractInt {
        static with(e, t) {
          return class extends UInt {
            constructor(t, r) {
              super(t, r, e);
            }
            toRawType() {
              return t || super.toRawType();
            }
          };
        }
      }
      t.UInt = UInt;
    },
    3818: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.Raw = void 0));
      var i = n(r(128)),
        s = r(2757);
      class Raw extends Uint8Array {
        static get [Symbol.species]() {
          return Uint8Array;
        }
        constructor(e, t, r) {
          (super((0, s.u8aToU8a)(t)),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (this.registry = e),
            (this.initialU8aLength = r));
        }
        get encodedLength() {
          return this.length;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isAscii() {
          return (0, s.isAscii)(this);
        }
        get isEmpty() {
          return !this.length || (0, s.isUndefined)(this.find((e) => !!e));
        }
        get isUtf8() {
          return (0, s.isUtf8)(this);
        }
        bitLength() {
          return 8 * this.length;
        }
        eq(e) {
          return e instanceof Uint8Array
            ? this.length === e.length && !this.some((t, r) => t !== e[r])
            : this.eq((0, s.u8aToU8a)(e));
        }
        inspect() {
          return { outer: [this.toU8a()] };
        }
        toHex() {
          return (0, s.u8aToHex)(this);
        }
        toHuman(e, t) {
          return this.toPrimitive(t);
        }
        toJSON() {
          return this.toHex();
        }
        toPrimitive(e) {
          if (!e && this.isAscii) {
            const e = this.toUtf8();
            if ((0, s.isAscii)(e)) return e;
          }
          return this.toJSON();
        }
        toRawType() {
          return "Raw";
        }
        toString() {
          return this.toHex();
        }
        toU8a(e) {
          return Uint8Array.from(this);
        }
        toUtf8() {
          if (!this.isUtf8)
            throw new Error(
              "The character sequence is not a valid Utf8 string",
            );
          return (0, s.u8aToString)(this);
        }
      }
      t.Raw = Raw;
    },
    3934: function (e, t, r) {
      function n(e) {
        const t = r.p;
        let n = "";
        return (
          (!t || t.indexOf("://") < 0) &&
            (n += window.location.protocol + "//" + window.location.host),
          (n += t || "/"),
          n + e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.packageInfo = void 0));
      t.packageInfo = {
        name: "@polkadot/types-codec",
        path:
          (n("node_modules/@polkadot/types-codec/packageInfo.js"),
          { url: n("node_modules/@polkadot/types-codec/packageInfo.js") }.url
            ? new URL(
                { url: n("node_modules/@polkadot/types-codec/packageInfo.js") }
                  .url,
              ).pathname.substring(
                0,
                new URL(
                  {
                    url: n("node_modules/@polkadot/types-codec/packageInfo.js"),
                  }.url,
                ).pathname.lastIndexOf("/") + 1,
              )
            : "auto"),
        type: "esm",
        version: "11.3.1",
      };
    },
    3935: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AbstractArray = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(6468);
      class AbstractArray extends Array {
        static get [Symbol.species]() {
          return Array;
        }
        constructor(e, t) {
          (super(t),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (this.registry = e));
        }
        get encodedLength() {
          const e = this.length;
          let t = (0, s.compactToU8a)(e).length;
          for (let r = 0; r < e; r++) t += this[r].encodedLength;
          return t;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isEmpty() {
          return 0 === this.length;
        }
        get length() {
          return super.length;
        }
        eq(e) {
          return (0, o.compareArray)(this, e);
        }
        inspect() {
          return {
            inner: this.inspectInner(),
            outer: [(0, s.compactToU8a)(this.length)],
          };
        }
        inspectInner() {
          const e = this.length,
            t = new Array(e);
          for (let r = 0; r < e; r++) t[r] = this[r].inspect();
          return t;
        }
        toArray() {
          return Array.from(this);
        }
        toHex() {
          return (0, s.u8aToHex)(this.toU8a());
        }
        toHuman(e, t) {
          const r = this.length,
            n = new Array(r);
          for (let i = 0; i < r; i++) n[i] = this[i] && this[i].toHuman(e, t);
          return n;
        }
        toJSON() {
          const e = this.length,
            t = new Array(e);
          for (let r = 0; r < e; r++) t[r] = this[r] && this[r].toJSON();
          return t;
        }
        toPrimitive(e) {
          const t = this.length,
            r = new Array(t);
          for (let n = 0; n < t; n++) r[n] = this[n] && this[n].toPrimitive(e);
          return r;
        }
        toString() {
          const e = this.length,
            t = new Array(e);
          for (let r = 0; r < e; r++) t[r] = this[r].toString();
          return `[${t.join(", ")}]`;
        }
        toU8a(e) {
          const t = this.toU8aInner();
          return e
            ? (0, s.u8aConcatStrict)(t)
            : (0, s.u8aConcatStrict)([(0, s.compactToU8a)(this.length), ...t]);
        }
        toU8aInner(e) {
          const t = this.length,
            r = new Array(t);
          for (let n = 0; n < t; n++) r[n] = this[n].toU8a(e);
          return r;
        }
      }
      t.AbstractArray = AbstractArray;
    },
    4527: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GenericExtrinsicV4 = t.EXTRINSIC_VERSION = void 0));
      var n = r(2855),
        i = r(2757);
      const s = (t.EXTRINSIC_VERSION = 4);
      class GenericExtrinsicV4 extends n.Struct {
        constructor(e, t, r) {
          let { isSigned: n } = void 0 === r ? {} : r;
          super(
            e,
            { signature: "ExtrinsicSignatureV4", method: "Call" },
            GenericExtrinsicV4.decodeExtrinsic(e, t, n),
          );
        }
        static decodeExtrinsic(e, t, r) {
          if ((void 0 === r && (r = !1), t instanceof GenericExtrinsicV4))
            return t;
          if (t instanceof e.createClassUnsafe("Call")) return { method: t };
          if ((0, i.isU8a)(t)) {
            const n = e.createTypeUnsafe("ExtrinsicSignatureV4", [
                t,
                { isSigned: r },
              ]),
              i = e.createTypeUnsafe("Call", [t.subarray(n.encodedLength)]);
            return { method: i, signature: n };
          }
          return t || {};
        }
        get encodedLength() {
          return this.toU8a().length;
        }
        get method() {
          return this.getT("method");
        }
        get signature() {
          return this.getT("signature");
        }
        get version() {
          return s;
        }
        addSignature(e, t, r) {
          return (this.signature.addSignature(e, t, r), this);
        }
        sign(e, t) {
          return (this.signature.sign(this.method, e, t), this);
        }
        signFake(e, t) {
          return (this.signature.signFake(this.method, e, t), this);
        }
      }
      t.GenericExtrinsicV4 = GenericExtrinsicV4;
    },
    5473: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DEFAULT_UINT_BITS = t.AbstractInt = void 0));
      var i = n(r(128)),
        s = r(2757);
      const o = (t.DEFAULT_UINT_BITS = 64),
        a = 52,
        u = new s.BN(1e4),
        c = [
          ["Perquintill", s.BN_QUINTILL],
          ["Perbill", s.BN_BILLION],
          ["Permill", s.BN_MILLION],
          ["Percent", s.BN_HUNDRED],
        ];
      function l(e) {
        return (0, s.isFunction)(e.toBn);
      }
      function h(e, t) {
        return (e.mul(u).div(t).toNumber() / 100).toFixed(2) + "%";
      }
      function d(e, t) {
        if ((0, s.isNumber)(e)) {
          if (
            !Number.isInteger(e) ||
            e > Number.MAX_SAFE_INTEGER ||
            e < Number.MIN_SAFE_INTEGER
          )
            throw new Error(
              "Number needs to be an integer <= Number.MAX_SAFE_INTEGER, i.e. 2 ^ 53 - 1",
            );
          return e;
        }
        if ((0, s.isString)(e)) {
          if ((0, s.isHex)(e, -1, !0))
            return (0, s.hexToBn)(e, { isLe: !1, isNegative: t }).toString();
          if (e.includes(".") || e.includes(",") || e.includes("e"))
            throw new Error(
              "String should not contain decimal points or scientific notation",
            );
          return e;
        }
        if ((0, s.isBn)(e) || (0, s.isBigInt)(e)) return e.toString();
        if ((0, s.isObject)(e)) {
          if (l(e)) return e.toBn().toString();
          const r = Object.keys(e);
          if (1 !== r.length)
            throw new Error("Unable to construct number from multi-key object");
          return d(e[r[0]], t);
        }
        if (!e) return 0;
        throw new Error("Unable to create BN from unknown type " + typeof e);
      }
      class AbstractInt extends s.BN {
        constructor(e, t, r, n) {
          (void 0 === t && (t = 0),
            void 0 === r && (r = o),
            void 0 === n && (n = !1),
            super(
              (0, s.isU8a)(t)
                ? r <= 48
                  ? (0, s.u8aToNumber)(t.subarray(0, r / 8), { isNegative: n })
                  : (0, s.u8aToBn)(t.subarray(0, r / 8), {
                      isLe: !0,
                      isNegative: n,
                    }).toString()
                : d(t, n),
            ),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "encodedLength", void 0),
            (0, i.default)(this, "isUnsigned", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (0, i.default)(this, "__internal__bitLength", void 0),
            (this.registry = e),
            (this.__internal__bitLength = r),
            (this.encodedLength = this.__internal__bitLength / 8),
            (this.initialU8aLength = this.__internal__bitLength / 8),
            (this.isUnsigned = !n));
          const a = this.isNeg(),
            u = r - (n && !a ? 1 : 0);
          if (a && !n)
            throw new Error(
              this.toRawType() + ": Negative number passed to unsigned type",
            );
          if (super.bitLength() > u)
            throw new Error(
              `${this.toRawType()}: Input too large. Found input with ${super.bitLength()} bits, expected ${u}`,
            );
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isEmpty() {
          return this.isZero();
        }
        bitLength() {
          return this.__internal__bitLength;
        }
        eq(e) {
          return super.eq(
            (0, s.isHex)(e)
              ? (0, s.hexToBn)(e.toString(), {
                  isLe: !1,
                  isNegative: !this.isUnsigned,
                })
              : (0, s.bnToBn)(e),
          );
        }
        inspect() {
          return { outer: [this.toU8a()] };
        }
        isMax() {
          const e = this.toU8a().filter((e) => 255 === e);
          return e.length === this.__internal__bitLength / 8;
        }
        toBigInt() {
          return BigInt(this.toString());
        }
        toBn() {
          return this;
        }
        toHex(e) {
          return (
            void 0 === e && (e = !1),
            (0, s.bnToHex)(this, {
              bitLength: this.bitLength(),
              isLe: e,
              isNegative: !this.isUnsigned,
            })
          );
        }
        toHuman(e) {
          const t = this.toRawType();
          if ("Balance" === t)
            return this.isMax()
              ? "everything"
              : (0, s.formatBalance)(this, {
                  decimals: this.registry.chainDecimals[0],
                  withSi: !0,
                  withUnit: this.registry.chainTokens[0],
                });
          const [, r] =
            c.find((e) => {
              let [r] = e;
              return r === t;
            }) || [];
          return r ? h(this, r) : (0, s.formatNumber)(this);
        }
        toJSON(e) {
          return (
            void 0 === e && (e = !1),
            e || this.__internal__bitLength > 128 || super.bitLength() > a
              ? this.toHex()
              : this.toNumber()
          );
        }
        toPrimitive() {
          return super.bitLength() > a ? this.toString() : this.toNumber();
        }
        toRawType() {
          return this instanceof this.registry.createClassUnsafe("Balance")
            ? "Balance"
            : `${this.isUnsigned ? "u" : "i"}${this.bitLength()}`;
        }
        toString(e) {
          return super.toString(e);
        }
        toU8a(e) {
          return (0, s.bnToU8a)(this, {
            bitLength: this.bitLength(),
            isLe: !0,
            isNegative: !this.isUnsigned,
          });
        }
      }
      t.AbstractInt = AbstractInt;
    },
    5474: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Enum = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3163),
        a = r(5475);
      function u(e) {
        const t = Object.values(e);
        if (t.some((e) => (0, s.isNumber)(e))) {
          if (!t.every((e) => (0, s.isNumber)(e) && e >= 0 && e <= 255))
            throw new Error("Invalid number-indexed enum definition");
          return !1;
        }
        return !0;
      }
      function c(e, t) {
        const r = {};
        let n, i;
        if (Array.isArray(t)) {
          for (let e = 0, n = t.length; e < n; e++)
            r[t[e]] = { Type: a.Null, index: e };
          ((n = !0), (i = !1));
        } else if (u(t)) {
          const [s, u] = (0, o.mapToTypeMap)(e, t);
          for (let e = 0, t = u.length; e < t; e++)
            r[u[e]] = { Type: s[e], index: e };
          ((n = !Object.values(r).some((e) => {
            let { Type: t } = e;
            return t !== a.Null;
          })),
            (i = !1));
        } else {
          const e = Object.entries(t);
          for (let t = 0, n = e.length; t < n; t++) {
            const [n, i] = e[t];
            r[n] = { Type: a.Null, index: i };
          }
          ((n = !0), (i = !0));
        }
        return { def: r, isBasic: n, isIndexed: i };
      }
      function l(e, t) {
        const r = Object.values(e);
        for (let n = 0, i = r.length; n < i; n++) {
          const { Type: e, index: i } = r[n];
          if (i === t) return e;
        }
        throw new Error(
          `Unable to create Enum via index ${t}, in ${Object.keys(e).join(", ")}`,
        );
      }
      function h(e, t, r, n) {
        const i = l(t, r);
        return { index: r, value: new i(e, n) };
      }
      function d(e, t, r, n) {
        void 0 === r && (r = 0);
        const i = l(t, r);
        return { index: r, value: n instanceof i ? n : new i(e, n) };
      }
      function _(e, t, r, n) {
        const i = Object.keys(t).map((e) => e.toLowerCase()),
          s = r.toLowerCase(),
          o = i.indexOf(s);
        if (-1 === o)
          throw new Error(
            `Cannot map Enum JSON, unable to find '${r}' in ${i.join(", ")}`,
          );
        try {
          return d(e, t, Object.values(t)[o].index, n);
        } catch (a) {
          throw new Error(`Enum(${r}):: ${a.message}`);
        }
      }
      function f(e, t, r, n) {
        if ((0, s.isNumber)(n)) return d(e, t, n, r);
        if ((0, s.isU8a)(r) || (0, s.isHex)(r)) {
          const n = (0, s.u8aToU8a)(r);
          if (n.length) return h(e, t, n[0], n.subarray(1));
        } else {
          if (r instanceof Enum) return d(e, t, r.index, r.value);
          if ((0, s.isNumber)(r)) return d(e, t, r);
          if ((0, s.isString)(r)) return _(e, t, r.toString());
          if ((0, s.isObject)(r)) {
            const n = Object.keys(r)[0];
            return _(e, t, n, r[n]);
          }
        }
        return d(e, t, Object.values(t)[0].index);
      }
      class Enum {
        constructor(e, t, r, n, o) {
          let { definition: a, setDefinition: u = s.identity } =
            void 0 === o ? {} : o;
          ((0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (0, i.default)(this, "__internal__def", void 0),
            (0, i.default)(this, "__internal__entryIndex", void 0),
            (0, i.default)(this, "__internal__indexes", void 0),
            (0, i.default)(this, "__internal__isBasic", void 0),
            (0, i.default)(this, "__internal__isIndexed", void 0),
            (0, i.default)(this, "__internal__raw", void 0));
          const { def: l, isBasic: d, isIndexed: _ } = a || u(c(e, t)),
            p =
              (0, s.isU8a)(r) && r.length && !(0, s.isNumber)(n)
                ? h(e, l, r[0], r.subarray(1))
                : f(e, l, r, n);
          ((this.registry = e),
            (this.__internal__def = l),
            (this.__internal__isBasic = d),
            (this.__internal__isIndexed = _),
            (this.__internal__indexes = Object.values(l).map((e) => {
              let { index: t } = e;
              return t;
            })),
            (this.__internal__entryIndex = this.__internal__indexes.indexOf(
              p.index,
            )),
            (this.__internal__raw = p.value),
            this.__internal__raw.initialU8aLength &&
              (this.initialU8aLength =
                1 + this.__internal__raw.initialU8aLength));
        }
        static with(e) {
          var t;
          let r;
          const n = (e) => (r = e);
          return (
            (t = class extends Enum {
              constructor(t, i, s) {
                super(t, e, i, s, { definition: r, setDefinition: n });
              }
            }),
            (() => {
              const r = Array.isArray(e) ? e : Object.keys(e),
                n = r.length,
                i = new Array(n),
                o = new Array(n);
              for (let e = 0; e < n; e++) {
                const t = (0, s.stringPascalCase)(r[e]);
                ((i[e] = "as" + t), (o[e] = "is" + t));
              }
              ((0, s.objectProperties)(
                t.prototype,
                o,
                (e, t, n) => n.type === r[t],
              ),
                (0, s.objectProperties)(t.prototype, i, (e, t, n) => {
                  if (n.type !== r[t])
                    throw new Error(`Cannot convert '${n.type}' via ${e}`);
                  return n.value;
                }));
            })(),
            t
          );
        }
        get encodedLength() {
          return 1 + this.__internal__raw.encodedLength;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get index() {
          return this.__internal__indexes[this.__internal__entryIndex];
        }
        get inner() {
          return this.__internal__raw;
        }
        get isBasic() {
          return this.__internal__isBasic;
        }
        get isEmpty() {
          return this.__internal__raw.isEmpty;
        }
        get isNone() {
          return this.__internal__raw instanceof a.Null;
        }
        get defIndexes() {
          return this.__internal__indexes;
        }
        get defKeys() {
          return Object.keys(this.__internal__def);
        }
        get type() {
          return this.defKeys[this.__internal__entryIndex];
        }
        get value() {
          return this.__internal__raw;
        }
        eq(e) {
          return (0, s.isU8a)(e)
            ? !this.toU8a().some((t, r) => t !== e[r])
            : (0, s.isNumber)(e)
              ? this.toNumber() === e
              : this.__internal__isBasic && (0, s.isString)(e)
                ? this.type === e
                : (0, s.isHex)(e)
                  ? this.toHex() === e
                  : e instanceof Enum
                    ? this.index === e.index && this.value.eq(e.value)
                    : (0, s.isObject)(e)
                      ? this.value.eq(e[this.type])
                      : this.value.eq(e);
        }
        inspect() {
          if (this.__internal__isBasic)
            return { outer: [new Uint8Array([this.index])] };
          const { inner: e, outer: t = [] } = this.__internal__raw.inspect();
          return { inner: e, outer: [new Uint8Array([this.index]), ...t] };
        }
        toHex() {
          return (0, s.u8aToHex)(this.toU8a());
        }
        toHuman(e, t) {
          return this.__internal__isBasic || this.isNone
            ? this.type
            : { [this.type]: this.__internal__raw.toHuman(e, t) };
        }
        toJSON() {
          return this.__internal__isBasic
            ? this.type
            : {
                [(0, s.stringCamelCase)(this.type)]:
                  this.__internal__raw.toJSON(),
              };
        }
        toNumber() {
          return this.index;
        }
        toPrimitive(e) {
          return this.__internal__isBasic
            ? this.type
            : {
                [(0, s.stringCamelCase)(this.type)]:
                  this.__internal__raw.toPrimitive(e),
              };
        }
        _toRawStruct() {
          if (this.__internal__isBasic)
            return this.__internal__isIndexed
              ? this.defKeys.reduce(
                  (e, t, r) => ((e[t] = this.__internal__indexes[r]), e),
                  {},
                )
              : this.defKeys;
          const e = Object.entries(this.__internal__def);
          return (0, o.typesToMap)(
            this.registry,
            e.reduce(
              (e, t, r) => {
                let [n, { Type: i }] = t;
                return ((e[0][r] = i), (e[1][r] = n), e);
              },
              [new Array(e.length), new Array(e.length)],
            ),
          );
        }
        toRawType() {
          return (0, s.stringify)({ _enum: this._toRawStruct() });
        }
        toString() {
          return this.isNone ? this.type : (0, s.stringify)(this.toJSON());
        }
        toU8a(e) {
          return e
            ? this.__internal__raw.toU8a(e)
            : (0, s.u8aConcatStrict)([
                new Uint8Array([this.index]),
                this.__internal__raw.toU8a(e),
              ]);
        }
      }
      t.Enum = Enum;
    },
    5475: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Null = void 0));
      var i = n(r(128)),
        s = r(2757);
      class Null {
        constructor(e) {
          ((0, i.default)(this, "encodedLength", 0),
            (0, i.default)(this, "isEmpty", !0),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (this.registry = e));
        }
        get hash() {
          throw new Error(".hash is not implemented on Null");
        }
        eq(e) {
          return e instanceof Null || (0, s.isNull)(e);
        }
        inspect() {
          return {};
        }
        toHex() {
          return "0x";
        }
        toHuman() {
          return this.toJSON();
        }
        toJSON() {
          return null;
        }
        toPrimitive() {
          return null;
        }
        toRawType() {
          return "Null";
        }
        toString() {
          return "";
        }
        toU8a(e) {
          return new Uint8Array();
        }
      }
      t.Null = Null;
    },
    5476: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Option = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3163),
        a = r(5475);
      class None extends a.Null {
        toRawType() {
          return "None";
        }
      }
      function u(e, t, r) {
        return r instanceof t
          ? r
          : r instanceof Option
            ? r.value instanceof t
              ? r.value
              : r.isNone
                ? new None(e)
                : new t(e, r.value)
            : (0, s.isNull)(r) ||
                (0, s.isUndefined)(r) ||
                "0x" === r ||
                r instanceof None
              ? new None(e)
              : (0, s.isU8a)(r)
                ? r.length && 0 !== r[0]
                  ? new t(e, r.subarray(1))
                  : new None(e)
                : new t(e, r);
      }
      class Option {
        constructor(e, t, r, n) {
          let { definition: a, setDefinition: c = s.identity } =
            void 0 === n ? {} : n;
          ((0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (0, i.default)(this, "__internal__Type", void 0),
            (0, i.default)(this, "__internal__raw", void 0));
          const l = a || c((0, o.typeToConstructor)(e, t)),
            h =
              (0, s.isU8a)(r) && r.length && !(0, s.isCodec)(r)
                ? 0 === r[0]
                  ? new None(e)
                  : new l(e, r.subarray(1))
                : u(e, l, r);
          ((this.registry = e),
            (this.__internal__Type = l),
            (this.__internal__raw = h),
            null !== h &&
              void 0 !== h &&
              h.initialU8aLength &&
              (this.initialU8aLength = 1 + h.initialU8aLength));
        }
        static with(e) {
          let t;
          const r = (e) => ((t = e), e);
          return class extends Option {
            constructor(n, i) {
              super(n, e, i, { definition: t, setDefinition: r });
            }
          };
        }
        get encodedLength() {
          return 1 + this.__internal__raw.encodedLength;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isEmpty() {
          return this.isNone;
        }
        get isNone() {
          return this.__internal__raw instanceof None;
        }
        get isSome() {
          return !this.isNone;
        }
        get value() {
          return this.__internal__raw;
        }
        eq(e) {
          return e instanceof Option
            ? this.isSome === e.isSome && this.value.eq(e.value)
            : this.value.eq(e);
        }
        inspect() {
          if (this.isNone) return { outer: [new Uint8Array([0])] };
          const { inner: e, outer: t = [] } = this.__internal__raw.inspect();
          return { inner: e, outer: [new Uint8Array([1]), ...t] };
        }
        toHex() {
          return this.isNone ? "0x" : (0, s.u8aToHex)(this.toU8a().subarray(1));
        }
        toHuman(e, t) {
          return this.__internal__raw.toHuman(e, t);
        }
        toJSON() {
          return this.isNone ? null : this.__internal__raw.toJSON();
        }
        toPrimitive(e) {
          return this.isNone ? null : this.__internal__raw.toPrimitive(e);
        }
        toRawType(e) {
          const t =
            this.registry.getClassName(this.__internal__Type) ||
            new this.__internal__Type(this.registry).toRawType();
          return e ? t : `Option<${t}>`;
        }
        toString() {
          return this.__internal__raw.toString();
        }
        toU8a(e) {
          if (e) return this.__internal__raw.toU8a(!0);
          const t = new Uint8Array(this.encodedLength);
          return (
            this.isSome && (t.set([1]), t.set(this.__internal__raw.toU8a(), 1)),
            t
          );
        }
        unwrap() {
          if (this.isNone) throw new Error("Option: unwrapping a None value");
          return this.__internal__raw;
        }
        unwrapOr(e) {
          return this.isSome ? this.unwrap() : e;
        }
        unwrapOrDefault() {
          return this.isSome
            ? this.unwrap()
            : new this.__internal__Type(this.registry);
        }
      }
      t.Option = Option;
    },
    5477: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Tuple = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3935),
        a = r(3163);
      function u(e, t, r, n) {
        if (Array.isArray(r)) {
          const s = n[0];
          for (let n = 0, o = s.length; n < o; n++)
            try {
              const i = null === r || void 0 === r ? void 0 : r[n];
              t[n] = i instanceof s[n] ? i : new s[n](e, i);
            } catch (i) {
              throw new Error(`Tuple: failed on ${n}:: ${i.message}`);
            }
          return [t, 0];
        }
        if ((0, s.isHex)(r))
          return (0, a.decodeU8a)(e, t, (0, s.u8aToU8a)(r), n);
        if (!r || !t.length) {
          const r = n[0];
          for (let n = 0, i = r.length; n < i; n++) t[n] = new r[n](e);
          return [t, 0];
        }
        throw new Error(
          `Expected array input to Tuple decoding, found ${typeof r}: ${(0, s.stringify)(r)}`,
        );
      }
      class Tuple extends o.AbstractArray {
        constructor(e, t, r, n) {
          let { definition: o, setDefinition: c = s.identity } =
            void 0 === n ? {} : n;
          const l =
            o ||
            c(
              Array.isArray(t)
                ? [(0, a.typesToConstructors)(e, t), []]
                : (0, s.isFunction)(t) || (0, s.isString)(t)
                  ? [[(0, a.typeToConstructor)(e, t)], []]
                  : (0, a.mapToTypeMap)(e, t),
            );
          (super(e, l[0].length),
            (0, i.default)(this, "__internal__Types", void 0),
            (this.initialU8aLength = (
              (0, s.isU8a)(r)
                ? (0, a.decodeU8a)(e, this, r, l)
                : u(e, this, r, l)
            )[1]),
            (this.__internal__Types = l));
        }
        static with(e) {
          let t;
          const r = (e) => (t = e);
          return class extends Tuple {
            constructor(n, i) {
              super(n, e, i, { definition: t, setDefinition: r });
            }
          };
        }
        get encodedLength() {
          let e = 0;
          for (let t = 0, r = this.length; t < r; t++)
            e += this[t].encodedLength;
          return e;
        }
        get Types() {
          return this.__internal__Types[1].length
            ? this.__internal__Types[1]
            : this.__internal__Types[0].map((e) =>
                new e(this.registry).toRawType(),
              );
        }
        inspect() {
          return { inner: this.inspectInner() };
        }
        toRawType() {
          const e = this.__internal__Types[0].map(
            (e) =>
              this.registry.getClassName(e) || new e(this.registry).toRawType(),
          );
          return `(${e.join(",")})`;
        }
        toString() {
          return (0, s.stringify)(this.toJSON());
        }
        toU8a(e) {
          return (0, s.u8aConcatStrict)(this.toU8aInner(e));
        }
      }
      t.Tuple = Tuple;
    },
    5478: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Vec = void 0),
        (t.decodeVec = h));
      var i = n(r(128)),
        s = r(2757),
        o = r(3935),
        a = r(3163);
      const u = 65536,
        c = (0, s.logger)("Vec");
      function l(e) {
        if (Array.isArray(e)) return [e, e.length, 0];
        if ((0, s.isU8a)(e) || (0, s.isHex)(e)) {
          const t = (0, s.u8aToU8a)(e),
            [r, n] = (0, s.compactFromU8aLim)(t);
          if (n > u) throw new Error(`Vec length ${n.toString()} exceeds ${u}`);
          return [t, n, r];
        }
        if (!e) return [null, 0, 0];
        throw new Error(
          `Expected array/hex input to Vec<*> decoding, found ${typeof e}: ${(0, s.stringify)(e)}`,
        );
      }
      function h(e, t, r, n, i) {
        if (Array.isArray(r)) {
          const n = t.length;
          for (let s = 0; s < n; s++) {
            const n = r[s];
            try {
              t[s] = n instanceof i ? n : new i(e, n);
            } catch (o) {
              throw (c.error("Unable to decode on index " + s, o.message), o);
            }
          }
          return [0, 0];
        }
        return r ? (0, a.decodeU8aVec)(e, t, (0, s.u8aToU8a)(r), n, i) : [0, 0];
      }
      class Vec extends o.AbstractArray {
        constructor(e, t, r, n) {
          void 0 === r && (r = []);
          let { definition: o, setDefinition: u = s.identity } =
            void 0 === n ? {} : n;
          const [c, d, _] = l(r);
          (super(e, d),
            (0, i.default)(this, "__internal__Type", void 0),
            (this.__internal__Type = o || u((0, a.typeToConstructor)(e, t))),
            (this.initialU8aLength = (
              (0, s.isU8a)(c)
                ? (0, a.decodeU8aVec)(e, this, c, _, this.__internal__Type)
                : h(e, this, c, _, this.__internal__Type)
            )[0]));
        }
        static with(e) {
          let t;
          const r = (e) => (t = e);
          return class extends Vec {
            constructor(n, i) {
              super(n, e, i, { definition: t, setDefinition: r });
            }
          };
        }
        get Type() {
          return this.__internal__Type.name;
        }
        indexOf(e) {
          const t =
            e instanceof this.__internal__Type
              ? e
              : new this.__internal__Type(this.registry, e);
          for (let r = 0, n = this.length; r < n; r++)
            if (t.eq(this[r])) return r;
          return -1;
        }
        toRawType() {
          return `Vec<${this.registry.getClassName(this.__internal__Type) || new this.__internal__Type(this.registry).toRawType()}>`;
        }
      }
      t.Vec = Vec;
    },
    5479: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CodecMap = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3935),
        a = r(5474),
        u = r(3818),
        c = r(5480),
        l = r(3163);
      const h = (0, s.logger)("Map");
      function d(e, t, r, n) {
        const i = new Map(),
          [o, a] = (0, s.compactFromU8aLim)(n),
          u = [];
        for (let s = 0; s < a; s++) u.push(t, r);
        const [c, h] = (0, l.decodeU8a)(e, new Array(u.length), n.subarray(o), [
          u,
          [],
        ]);
        for (let s = 0, l = c.length; s < l; s += 2) i.set(c[s], c[s + 1]);
        return [t, r, i, o + h];
      }
      function _(e, t, r, n) {
        const i = new Map();
        for (const [u, l] of n.entries()) {
          const n =
            t.prototype instanceof o.AbstractArray ||
            t.prototype instanceof c.Struct ||
            t.prototype instanceof a.Enum;
          try {
            i.set(
              u instanceof t
                ? u
                : new t(e, n && "string" === typeof u ? JSON.parse(u) : u),
              l instanceof r ? l : new r(e, l),
            );
          } catch (s) {
            throw (h.error("Failed to decode key or value:", s.message), s);
          }
        }
        return [t, r, i, 0];
      }
      function f(e, t, r, n) {
        const i = (0, l.typeToConstructor)(e, t),
          o = (0, l.typeToConstructor)(e, r);
        if (!n) return [i, o, new Map(), 0];
        if ((0, s.isU8a)(n) || (0, s.isHex)(n))
          return d(e, i, o, (0, s.u8aToU8a)(n));
        if (n instanceof Map) return _(e, i, o, n);
        if ((0, s.isObject)(n)) return _(e, i, o, new Map(Object.entries(n)));
        throw new Error("Map: cannot decode type");
      }
      class CodecMap extends Map {
        constructor(e, t, r, n, s) {
          void 0 === s && (s = "HashMap");
          const [o, a, u, c] = f(e, t, r, n);
          (super("BTreeMap" === s ? (0, l.sortMap)(u) : u),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (0, i.default)(this, "__internal__KeyClass", void 0),
            (0, i.default)(this, "__internal__ValClass", void 0),
            (0, i.default)(this, "__internal__type", void 0),
            (this.registry = e),
            (this.initialU8aLength = c),
            (this.__internal__KeyClass = o),
            (this.__internal__ValClass = a),
            (this.__internal__type = s));
        }
        get encodedLength() {
          let e = (0, s.compactToU8a)(this.size).length;
          for (const [t, r] of this.entries())
            e += t.encodedLength + r.encodedLength;
          return e;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isEmpty() {
          return 0 === this.size;
        }
        eq(e) {
          return (0, l.compareMap)(this, e);
        }
        inspect() {
          const e = [];
          for (const [t, r] of this.entries())
            (e.push(t.inspect()), e.push(r.inspect()));
          return { inner: e, outer: [(0, s.compactToU8a)(this.size)] };
        }
        toHex() {
          return (0, s.u8aToHex)(this.toU8a());
        }
        toHuman(e, t) {
          const r = {};
          for (const [n, i] of this.entries())
            r[
              n instanceof u.Raw && !t && n.isAscii ? n.toUtf8() : n.toString()
            ] = i.toHuman(e, t);
          return r;
        }
        toJSON() {
          const e = {};
          for (const [t, r] of this.entries()) e[t.toString()] = r.toJSON();
          return e;
        }
        toPrimitive(e) {
          const t = {};
          for (const [r, n] of this.entries())
            t[
              r instanceof u.Raw && !e && r.isAscii ? r.toUtf8() : r.toString()
            ] = n.toPrimitive(e);
          return t;
        }
        toRawType() {
          return `${this.__internal__type}<${this.registry.getClassName(this.__internal__KeyClass) || new this.__internal__KeyClass(this.registry).toRawType()},${this.registry.getClassName(this.__internal__ValClass) || new this.__internal__ValClass(this.registry).toRawType()}>`;
        }
        toString() {
          return (0, s.stringify)(this.toJSON());
        }
        toU8a(e) {
          const t = [];
          e || t.push((0, s.compactToU8a)(this.size));
          for (const [r, n] of this.entries()) t.push(r.toU8a(e), n.toU8a(e));
          return (0, s.u8aConcatStrict)(t);
        }
      }
      t.CodecMap = CodecMap;
    },
    5480: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Struct = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3163);
      function a(e) {
        return e;
      }
      function u(e, t, r, n) {
        let i,
          [o, a] = t;
        const u = Array.isArray(r),
          c = r instanceof Map,
          l = a.length;
        if (!(u || c || (0, s.isObject)(r)))
          throw new Error(
            `Struct: Cannot decode value ${(0, s.stringify)(r)} (typeof ${typeof r}), expected an input object, map or array`,
          );
        if (u && r.length !== l)
          throw new Error(
            `Struct: Unable to map ${(0, s.stringify)(r)} array to object with known keys ${a.join(", ")}`,
          );
        const h = new Array(l);
        for (let _ = 0; _ < l; _++) {
          const t = a[_],
            l = n.get(t) || t,
            f = o[_];
          let p;
          try {
            if (u) p = r[_];
            else if (c) p = l && r.get(l);
            else if (((p = l && r[l]), (0, s.isUndefined)(p))) {
              if ((0, s.isUndefined)(i)) {
                const e = Object.entries(r);
                i = {};
                for (let t = 0, r = e.length; t < r; t++)
                  i[(0, s.stringCamelCase)(e[t][0])] = e[t][1];
              }
              p = l && i[l];
            }
            h[_] = [t, p instanceof f ? p : new f(e, p)];
          } catch (d) {
            let t = f.name;
            try {
              t = new f(e).toRawType();
            } catch {}
            throw new Error(`Struct: failed on ${l}: ${t}:: ${d.message}`);
          }
        }
        return [h, 0];
      }
      class Struct extends Map {
        constructor(e, t, r, n, c) {
          void 0 === n && (n = new Map());
          let { definition: l, setDefinition: h = a } = void 0 === c ? {} : c;
          const d = l || h((0, o.mapToTypeMap)(e, t)),
            [_, f] =
              (0, s.isU8a)(r) || (0, s.isHex)(r)
                ? (0, o.decodeU8aStruct)(
                    e,
                    new Array(d[0].length),
                    (0, s.u8aToU8a)(r),
                    d,
                  )
                : r instanceof Struct
                  ? [r, 0]
                  : u(e, d, r || {}, n);
          (super(_),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (0, i.default)(this, "__internal__jsonMap", void 0),
            (0, i.default)(this, "__internal__Types", void 0),
            (this.initialU8aLength = f),
            (this.registry = e),
            (this.__internal__jsonMap = n),
            (this.__internal__Types = d));
        }
        static with(e, t) {
          var r;
          let n;
          const i = (e) => (n = e);
          return (
            (r = class extends Struct {
              constructor(r, s) {
                super(r, e, s, t, { definition: n, setDefinition: i });
              }
            }),
            (() => {
              const t = Object.keys(e);
              (0, s.objectProperties)(r.prototype, t, (e, t, r) => r.get(e));
            })(),
            r
          );
        }
        get defKeys() {
          return this.__internal__Types[1];
        }
        get isEmpty() {
          for (const e of this.values()) if (!e.isEmpty) return !1;
          return !0;
        }
        get encodedLength() {
          let e = 0;
          for (const t of this.values()) e += t.encodedLength;
          return e;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get Type() {
          const e = {},
            [t, r] = this.__internal__Types;
          for (let n = 0, i = r.length; n < i; n++)
            e[r[n]] = new t[n](this.registry).toRawType();
          return e;
        }
        eq(e) {
          return (0, o.compareMap)(this, e);
        }
        get(e) {
          return super.get(e);
        }
        getAtIndex(e) {
          return this.toArray()[e];
        }
        getT(e) {
          return super.get(e);
        }
        inspect(e) {
          const t = [];
          for (const [r, n] of this.entries())
            t.push({
              ...n.inspect(!e || (0, s.isBoolean)(e) ? e : e[r]),
              name: (0, s.stringCamelCase)(r),
            });
          return { inner: t };
        }
        toArray() {
          return [...this.values()];
        }
        toHex() {
          return (0, s.u8aToHex)(this.toU8a());
        }
        toHuman(e, t) {
          const r = {};
          for (const [n, i] of this.entries()) r[n] = i.toHuman(e, t);
          return r;
        }
        toJSON() {
          const e = {};
          for (const [t, r] of this.entries())
            e[this.__internal__jsonMap.get(t) || t] = r.toJSON();
          return e;
        }
        toPrimitive(e) {
          const t = {};
          for (const [r, n] of this.entries()) t[r] = n.toPrimitive(e);
          return t;
        }
        toRawType() {
          return (0, s.stringify)(
            (0, o.typesToMap)(this.registry, this.__internal__Types),
          );
        }
        toString() {
          return (0, s.stringify)(this.toJSON());
        }
        toU8a(e) {
          const t = [];
          for (const [r, n] of this.entries())
            t.push(n.toU8a(!e || (0, s.isBoolean)(e) ? e : e[r]));
          return (0, s.u8aConcatStrict)(t);
        }
      }
      t.Struct = Struct;
    },
    5481: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Float = void 0));
      var i = n(r(128)),
        s = r(2757);
      class Float extends Number {
        constructor(e, t, r) {
          let { bitLength: n = 32 } = void 0 === r ? {} : r;
          (super(
            (0, s.isU8a)(t) || (0, s.isHex)(t)
              ? 0 === t.length
                ? 0
                : (0, s.u8aToFloat)((0, s.u8aToU8a)(t), { bitLength: n })
              : t || 0,
          ),
            (0, i.default)(this, "encodedLength", void 0),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (0, i.default)(this, "__internal__bitLength", void 0),
            (this.__internal__bitLength = n),
            (this.encodedLength = n / 8),
            (this.initialU8aLength = this.encodedLength),
            (this.registry = e));
        }
        static with(e) {
          return class extends Float {
            constructor(t, r) {
              super(t, r, { bitLength: e });
            }
          };
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isEmpty() {
          return 0 === this.valueOf();
        }
        eq(e) {
          return this.valueOf() === Number(e);
        }
        inspect() {
          return { outer: [this.toU8a()] };
        }
        toHex() {
          return (0, s.u8aToHex)(this.toU8a());
        }
        toHuman() {
          return this.toString();
        }
        toJSON() {
          return this.toHex();
        }
        toNumber() {
          return this.valueOf();
        }
        toPrimitive() {
          return this.toNumber();
        }
        toRawType() {
          return "f" + this.__internal__bitLength;
        }
        toU8a(e) {
          return (0, s.floatToU8a)(this, {
            bitLength: this.__internal__bitLength,
          });
        }
      }
      t.Float = Float;
    },
    6468: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.compareArray = s));
      var n = r(2757),
        i = r(6469);
      function s(e, t) {
        return (
          !!Array.isArray(t) &&
          e.length === t.length &&
          (0, n.isUndefined)(
            e.find((e, r) => ((0, i.hasEq)(e) ? !e.eq(t[r]) : e !== t[r])),
          )
        );
      }
    },
    6469: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.hasEq = i));
      var n = r(2757);
      function i(e) {
        return (0, n.isFunction)(e.eq);
      }
    },
    6470: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Bytes = void 0));
      var n = r(2757),
        i = r(3818);
      const s = 10485760;
      function o(e) {
        if (!e.length) return [new Uint8Array(), 0];
        const [t, r] = (0, n.compactFromU8aLim)(e),
          i = t + r;
        if (r > s) throw new Error(`Bytes length ${r.toString()} exceeds ${s}`);
        if (i > e.length)
          throw new Error(
            `Bytes: required length less than remainder, expected at least ${i}, found ${e.length}`,
          );
        return [e.subarray(t, i), i];
      }
      class Bytes extends i.Raw {
        constructor(e, t) {
          const [r, s] =
            !(0, n.isU8a)(t) || t instanceof i.Raw
              ? Array.isArray(t) || (0, n.isString)(t)
                ? [(0, n.u8aToU8a)(t), 0]
                : [t, 0]
              : o(t);
          super(e, r, s);
        }
        get encodedLength() {
          return this.length + (0, n.compactToU8a)(this.length).length;
        }
        inspect(e) {
          const t = (0, n.compactToU8a)(this.length);
          return {
            outer: e ? [super.toU8a()] : this.length ? [t, super.toU8a()] : [t],
          };
        }
        toRawType() {
          return "Bytes";
        }
        toU8a(e) {
          return e ? super.toU8a(e) : (0, n.compactAddLength)(this);
        }
      }
      t.Bytes = Bytes;
    },
    6471: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bool = void 0));
      var i = n(r(128)),
        s = r(2757);
      class bool extends Boolean {
        constructor(e, t) {
          (void 0 === t && (t = !1),
            super(
              (0, s.isU8a)(t)
                ? 1 === t[0]
                : t instanceof Boolean
                  ? t.valueOf()
                  : !!t,
            ),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", 1),
            (0, i.default)(this, "isStorageFallback", void 0),
            (this.registry = e));
        }
        get encodedLength() {
          return 1;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isEmpty() {
          return this.isFalse;
        }
        get isFalse() {
          return !this.isTrue;
        }
        get isTrue() {
          return this.valueOf();
        }
        eq(e) {
          return this.valueOf() === (e instanceof Boolean ? e.valueOf() : e);
        }
        inspect() {
          return { outer: [this.toU8a()] };
        }
        toHex() {
          return (0, s.u8aToHex)(this.toU8a());
        }
        toHuman() {
          return this.toJSON();
        }
        toJSON() {
          return this.valueOf();
        }
        toPrimitive() {
          return this.toJSON();
        }
        toRawType() {
          return "bool";
        }
        toString() {
          return this.toJSON().toString();
        }
        toU8a(e) {
          return new Uint8Array([this.valueOf() ? 1 : 0]);
        }
      }
      t.bool = bool;
    },
    6472: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Range = void 0));
      var i = n(r(128)),
        s = r(5477);
      class Range extends s.Tuple {
        constructor(e, t, r, n) {
          let { rangeName: s = "Range" } = void 0 === n ? {} : n;
          (super(e, [t, t], r),
            (0, i.default)(this, "__internal__rangeName", void 0),
            (this.__internal__rangeName = s));
        }
        static with(e) {
          return class extends Range {
            constructor(t, r) {
              super(t, e, r);
            }
          };
        }
        get start() {
          return this[0];
        }
        get end() {
          return this[1];
        }
        toRawType() {
          return `${this.__internal__rangeName}<${this.start.toRawType()}>`;
        }
      }
      t.Range = Range;
    },
    6473: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Text = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3818);
      const a = 131072;
      function u(e) {
        if ((0, s.isU8a)(e)) {
          if (!e.length) return ["", 0];
          if (e instanceof o.Raw) return [(0, s.u8aToString)(e), 0];
          const [t, r] = (0, s.compactFromU8aLim)(e),
            n = t + r;
          if (r > a)
            throw new Error(`Text: length ${r.toString()} exceeds ${a}`);
          if (n > e.length)
            throw new Error(
              `Text: required length less than remainder, expected at least ${n}, found ${e.length}`,
            );
          return [(0, s.u8aToString)(e.subarray(t, n)), n];
        }
        return (0, s.isHex)(e)
          ? [(0, s.u8aToString)((0, s.hexToU8a)(e)), 0]
          : [e ? e.toString() : "", 0];
      }
      class Text extends String {
        constructor(e, t) {
          const [r, n] = u(t);
          (super(r),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (0, i.default)(this, "__internal__override", null),
            (this.registry = e),
            (this.initialU8aLength = n));
        }
        get encodedLength() {
          return this.toU8a().length;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isEmpty() {
          return 0 === this.length;
        }
        get length() {
          return super.length;
        }
        eq(e) {
          return !!(0, s.isString)(e) && this.toString() === e.toString();
        }
        inspect() {
          const e = (0, s.stringToU8a)(super.toString());
          return {
            outer: e.length
              ? [(0, s.compactToU8a)(e.length), e]
              : [(0, s.compactToU8a)(e.length)],
          };
        }
        setOverride(e) {
          this.__internal__override = e;
        }
        toHex() {
          return (0, s.u8aToHex)(this.toU8a(!0));
        }
        toHuman() {
          return this.toJSON();
        }
        toJSON() {
          return this.toString();
        }
        toPrimitive() {
          return this.toJSON();
        }
        toRawType() {
          return "Text";
        }
        toString() {
          return this.__internal__override || super.toString();
        }
        toU8a(e) {
          const t = (0, s.stringToU8a)(super.toString());
          return e ? t : (0, s.compactAddLength)(t);
        }
      }
      t.Text = Text;
    },
    6474: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WrapperKeepOpaque = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3818),
        a = r(3163),
        u = r(6470);
      function c(e, t, r) {
        const n = (0, a.typeToConstructor)(e, t);
        if ((0, s.isU8a)(r) || (0, s.isHex)(r))
          try {
            const [, t] = (0, s.isHex)(r)
              ? [0, (0, s.u8aToU8a)(r)]
              : r instanceof o.Raw
                ? [0, r.subarray()]
                : (0, s.compactStripLength)(r);
            return [n, new n(e, t), r];
          } catch {
            return [n, null, r];
          }
        const i = new n(e, r);
        return [n, i, (0, s.compactAddLength)(i.toU8a())];
      }
      class WrapperKeepOpaque extends u.Bytes {
        constructor(e, t, r, n) {
          let { opaqueName: s = "WrapperKeepOpaque" } = void 0 === n ? {} : n;
          const [o, a, u] = c(e, t, r);
          (super(e, u),
            (0, i.default)(this, "__internal__Type", void 0),
            (0, i.default)(this, "__internal__decoded", void 0),
            (0, i.default)(this, "__internal__opaqueName", void 0),
            (this.__internal__Type = o),
            (this.__internal__decoded = a),
            (this.__internal__opaqueName = s));
        }
        static with(e) {
          return class extends WrapperKeepOpaque {
            constructor(t, r) {
              super(t, e, r);
            }
          };
        }
        get isDecoded() {
          return !!this.__internal__decoded;
        }
        inspect() {
          return this.__internal__decoded
            ? {
                inner: [this.__internal__decoded.inspect()],
                outer: [(0, s.compactToU8a)(this.length)],
              }
            : { outer: [(0, s.compactToU8a)(this.length), this.toU8a(!0)] };
        }
        toHuman(e, t) {
          return this.__internal__decoded
            ? this.__internal__decoded.toHuman(e, t)
            : super.toHuman(e, t);
        }
        toPrimitive(e) {
          return this.__internal__decoded
            ? this.__internal__decoded.toPrimitive(e)
            : super.toPrimitive(e);
        }
        toRawType() {
          return `${this.__internal__opaqueName}<${this.registry.getClassName(this.__internal__Type) || (this.__internal__decoded ? this.__internal__decoded.toRawType() : new this.__internal__Type(this.registry).toRawType())}>`;
        }
        toString() {
          return this.__internal__decoded
            ? this.__internal__decoded.toString()
            : super.toString();
        }
        unwrap() {
          if (!this.__internal__decoded)
            throw new Error(
              this.__internal__opaqueName + ": unwrapping an undecodable value",
            );
          return this.__internal__decoded;
        }
      }
      t.WrapperKeepOpaque = WrapperKeepOpaque;
    },
    6475: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.i32 = void 0));
      var i = n(r(128)),
        s = r(3816);
      class i32 extends s.Int.with(32) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__IntType", "i32"));
        }
      }
      t.i32 = i32;
    },
    6476: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.u32 = void 0));
      var i = n(r(128)),
        s = r(3817);
      class u32 extends s.UInt.with(32) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__UIntType", "u32"));
        }
      }
      t.u32 = u32;
    },
    9217: function (e, t, r) {
      "use strict";
      var n = r(2757),
        i = r(3934);
      (0, n.detectPackage)(i.packageInfo, null, []);
    },
    9306: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = { packageInfo: !0 };
      Object.defineProperty(t, "packageInfo", {
        enumerable: !0,
        get: function () {
          return i.packageInfo;
        },
      });
      var i = r(3934),
        s = r(9307);
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
      var o = r(9309);
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
      var a = r(9322);
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
      var u = r(9333);
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
      var c = r(9337);
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
      var l = r(3163);
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
    },
    9307: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AbstractArray", {
          enumerable: !0,
          get: function () {
            return n.AbstractArray;
          },
        }),
        Object.defineProperty(t, "AbstractBase", {
          enumerable: !0,
          get: function () {
            return i.AbstractBase;
          },
        }),
        Object.defineProperty(t, "AbstractInt", {
          enumerable: !0,
          get: function () {
            return s.AbstractInt;
          },
        }));
      var n = r(3935),
        i = r(9308),
        s = r(5473);
    },
    9308: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AbstractBase = void 0));
      var i = n(r(128));
      class AbstractBase {
        constructor(e, t, r) {
          ((0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (0, i.default)(this, "__internal__raw", void 0),
            (this.initialU8aLength = r),
            (this.__internal__raw = t),
            (this.registry = e));
        }
        get encodedLength() {
          return this.toU8a().length;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get inner() {
          return this.__internal__raw;
        }
        get isEmpty() {
          return this.__internal__raw.isEmpty;
        }
        eq(e) {
          return this.__internal__raw.eq(e);
        }
        inspect() {
          return this.__internal__raw.inspect();
        }
        toHex(e) {
          return this.__internal__raw.toHex(e);
        }
        toHuman(e, t) {
          return this.__internal__raw.toHuman(e, t);
        }
        toJSON() {
          return this.__internal__raw.toJSON();
        }
        toPrimitive(e) {
          return this.__internal__raw.toPrimitive(e);
        }
        toString() {
          return this.__internal__raw.toString();
        }
        toU8a(e) {
          return this.__internal__raw.toU8a(e);
        }
        unwrap() {
          return this.__internal__raw;
        }
        valueOf() {
          return this.__internal__raw;
        }
      }
      t.AbstractBase = AbstractBase;
    },
    9309: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Compact", {
          enumerable: !0,
          get: function () {
            return n.Compact;
          },
        }),
        Object.defineProperty(t, "DoNotConstruct", {
          enumerable: !0,
          get: function () {
            return i.DoNotConstruct;
          },
        }),
        Object.defineProperty(t, "Enum", {
          enumerable: !0,
          get: function () {
            return s.Enum;
          },
        }),
        Object.defineProperty(t, "Int", {
          enumerable: !0,
          get: function () {
            return o.Int;
          },
        }),
        Object.defineProperty(t, "Null", {
          enumerable: !0,
          get: function () {
            return a.Null;
          },
        }),
        Object.defineProperty(t, "Option", {
          enumerable: !0,
          get: function () {
            return u.Option;
          },
        }),
        Object.defineProperty(t, "Result", {
          enumerable: !0,
          get: function () {
            return c.Result;
          },
        }),
        Object.defineProperty(t, "Tuple", {
          enumerable: !0,
          get: function () {
            return l.Tuple;
          },
        }),
        Object.defineProperty(t, "UInt", {
          enumerable: !0,
          get: function () {
            return h.UInt;
          },
        }),
        Object.defineProperty(t, "Vec", {
          enumerable: !0,
          get: function () {
            return d.Vec;
          },
        }),
        Object.defineProperty(t, "VecAny", {
          enumerable: !0,
          get: function () {
            return _.VecAny;
          },
        }),
        Object.defineProperty(t, "VecFixed", {
          enumerable: !0,
          get: function () {
            return f.VecFixed;
          },
        }));
      var n = r(9310),
        i = r(9318),
        s = r(5474),
        o = r(3816),
        a = r(5475),
        u = r(5476),
        c = r(9319),
        l = r(5477),
        h = r(3817),
        d = r(5478),
        _ = r(9320),
        f = r(9321);
    },
    9310: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Compact = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3163);
      function a(e, t, r) {
        if ((0, s.isU8a)(r)) {
          const [n, i] =
            (3 & r[0]) < 3
              ? (0, s.compactFromU8aLim)(r)
              : (0, s.compactFromU8a)(r);
          return [new t(e, i), n];
        }
        if (r instanceof Compact) {
          const n = r.unwrap();
          return n instanceof t ? [n, 0] : [new t(e, n), 0];
        }
        return r instanceof t ? [r, 0] : [new t(e, r), 0];
      }
      class Compact {
        constructor(e, t, r, n) {
          void 0 === r && (r = 0);
          let { definition: u, setDefinition: c = s.identity } =
            void 0 === n ? {} : n;
          ((0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (0, i.default)(this, "__internal__Type", void 0),
            (0, i.default)(this, "__internal__raw", void 0),
            (this.registry = e),
            (this.__internal__Type = u || c((0, o.typeToConstructor)(e, t))));
          const [l, h] = a(e, this.__internal__Type, r);
          ((this.initialU8aLength = h), (this.__internal__raw = l));
        }
        static with(e) {
          let t;
          const r = (e) => (t = e);
          return class extends Compact {
            constructor(n, i) {
              super(n, e, i, { definition: t, setDefinition: r });
            }
          };
        }
        get encodedLength() {
          return this.toU8a().length;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isEmpty() {
          return this.__internal__raw.isEmpty;
        }
        bitLength() {
          return this.__internal__raw.bitLength();
        }
        eq(e) {
          return this.__internal__raw.eq(
            e instanceof Compact ? e.__internal__raw : e,
          );
        }
        inspect() {
          return { outer: [this.toU8a()] };
        }
        toBigInt() {
          return this.__internal__raw.toBigInt();
        }
        toBn() {
          return this.__internal__raw.toBn();
        }
        toHex(e) {
          return this.__internal__raw.toHex(e);
        }
        toHuman(e, t) {
          return this.__internal__raw.toHuman(e, t);
        }
        toJSON() {
          return this.__internal__raw.toJSON();
        }
        toNumber() {
          return this.__internal__raw.toNumber();
        }
        toPrimitive(e) {
          return this.__internal__raw.toPrimitive(e);
        }
        toRawType() {
          return `Compact<${this.registry.getClassName(this.__internal__Type) || this.__internal__raw.toRawType()}>`;
        }
        toString() {
          return this.__internal__raw.toString();
        }
        toU8a(e) {
          return (0, s.compactToU8a)(this.__internal__raw.toBn());
        }
        unwrap() {
          return this.__internal__raw;
        }
      }
      t.Compact = Compact;
    },
    9311: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.compareMap = u));
      var n = r(2757),
        i = r(6469);
      function s(e, t) {
        return (0, n.isUndefined)(e) || ((0, i.hasEq)(e) ? !e.eq(t) : e !== t);
      }
      function o(e) {
        return !Array.isArray(e) || 2 !== e.length;
      }
      function a(e, t) {
        return (
          e.size === t.length && !t.some((t) => o(t) || s(e.get(t[0]), t[1]))
        );
      }
      function u(e, t) {
        return Array.isArray(t)
          ? a(e, t)
          : t instanceof Map
            ? a(e, [...t.entries()])
            : !!(0, n.isObject)(t) && a(e, Object.entries(t));
      }
    },
    9312: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.compareSet = s));
      var n = r(2757);
      function i(e, t) {
        return e.size === t.length && !t.some((t) => !e.has(t));
      }
      function s(e, t) {
        return Array.isArray(t)
          ? i(e, t)
          : t instanceof Set
            ? i(e, [...t.values()])
            : !!(0, n.isObject)(t) && i(e, Object.values(t));
      }
    },
    9313: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decodeU8a = s),
        (t.decodeU8aStruct = o),
        (t.decodeU8aVec = a));
      var n = r(2757);
      function i(e, t, r, i, s, o, a, u, c) {
        let { message: l } = i,
          h = "";
        try {
          h = ": " + new u(e).toRawType();
        } catch {}
        return `${t}: failed at ${(0, n.u8aToHex)(s.subarray(0, 16))}…${c ? " on " + c : ""} (index ${o + 1}/${a})${h}:: ${l}`;
      }
      function s(e, t, r, n) {
        let [s, o] = n;
        const a = t.length;
        let u = 0,
          c = 0;
        try {
          while (c < a) {
            const n = new s[c](e, r.subarray(u));
            ((u += n.initialU8aLength || n.encodedLength), (t[c] = n), c++);
          }
        } catch (l) {
          throw new Error(
            i(e, "decodeU8a", t, l, r.subarray(u), c, a, s[c], o[c]),
          );
        }
        return [t, u];
      }
      function o(e, t, r, n) {
        let [s, o] = n;
        const a = t.length;
        let u = 0,
          c = 0;
        try {
          while (c < a) {
            const n = new s[c](e, r.subarray(u));
            ((u += n.initialU8aLength || n.encodedLength),
              (t[c] = [o[c], n]),
              c++);
          }
        } catch (l) {
          throw new Error(
            i(e, "decodeU8aStruct", t, l, r.subarray(u), c, a, s[c], o[c]),
          );
        }
        return [t, u];
      }
      function a(e, t, r, n, s) {
        const o = t.length;
        let a = n,
          u = 0;
        try {
          while (u < o) {
            const n = new s(e, r.subarray(a));
            ((a += n.initialU8aLength || n.encodedLength), (t[u] = n), u++);
          }
        } catch (c) {
          throw new Error(i(e, "decodeU8aVec", t, c, r.subarray(a), u, o, s));
        }
        return [a, a - n];
      }
    },
    9314: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.alias = c),
        (t.cleanupCompact = l),
        (t.findClosing = u),
        (t.flattenSingleTuple = h),
        (t.removeColons = f),
        (t.removeExtensions = _),
        (t.removeGenerics = p),
        (t.removePairOf = g),
        (t.removeTraits = y),
        (t.removeWrap = v),
        (t.sanitize = m),
        (t.trim = a));
      const n = ["BTreeMap", "BTreeSet", "HashMap", "Vec"],
        i = n.concat([
          "Compact",
          "DoNotConstruct",
          "Int",
          "Linkage",
          "Range",
          "RangeInclusive",
          "Result",
          "Opaque",
          "Option",
          "UInt",
          "WrapperKeepOpaque",
          "WrapperOpaque",
        ]),
        s = ["<", "(", "[", '"', ",", " "],
        o = [
          c(
            "<T::InherentOfflineReport as InherentOfflineReport>::Inherent",
            "InherentOfflineReport",
            !1,
          ),
          c("VecDeque<", "Vec<", !1),
          l(),
          _("Bounded", !0),
          _("Weak", !1),
          y(),
          g(),
          v("Box<"),
          p(),
          c("String", "Text"),
          c("Vec<u8>", "Bytes"),
          c("&\\[u8\\]", "Bytes"),
          c("&'static\\[u8\\]", "Bytes"),
          c("RawAddress", "Address"),
          c("Lookup::Source", "LookupSource"),
          c("Lookup::Target", "LookupTarget"),
          c("exec::StorageKey", "ContractStorageKey"),
          h(),
          f(),
          a(),
        ];
      function a() {
        return (e) => e.trim();
      }
      function u(e, t) {
        let r = 0;
        for (let n = t, i = e.length; n < i; n++)
          if (">" === e[n]) {
            if (!r) return n;
            r--;
          } else "<" === e[n] && r++;
        throw new Error(
          `Unable to find closing matching <> on '${e}' (start ${t})`,
        );
      }
      function c(e, t, r) {
        void 0 === r && (r = !0);
        const n = new RegExp(
            `(^${e}|${s.map((t) => `\\${t}${e}`).join("|")})`,
            "g",
          ),
          i = (e) => (
            (n.lastIndex = 0),
            r && s.includes(e[0]) ? `${e[0]}${t}` : t
          );
        return (e) => e.replace(n, i);
      }
      function l() {
        return (e) => {
          if (e.includes(" as HasCompact"))
            for (let t = 0, r = e.length; t < r; t++)
              if ("<" === e[t]) {
                const r = u(e, t + 1) - 14;
                " as HasCompact" === e.substring(r, r + 14) &&
                  (e = `Compact<${e.substring(t + 1, r)}>`);
              }
          return e;
        };
      }
      function h() {
        const e = /,\)/g,
          t = /\(([^,]+)\)/;
        return (r) => ((e.lastIndex = 0), r.replace(e, ")").replace(t, "$1"));
      }
      function d(e, t, r) {
        let n = -1;
        while (1) {
          if (((n = e.indexOf(t, n + 1)), -1 === n)) return e;
          const i = n + t.length,
            s = u(e, i);
          e = `${e.substring(0, n)}${r(e.substring(i, s))}${e.substring(s + 1)}`;
        }
      }
      function _(e, t) {
        return (r) => {
          for (let i = 0, s = n.length; i < s; i++) {
            const s = n[i];
            r = d(r, `${e}${s}<`, (e) => {
              const r = e
                .split(",")
                .map((e) => e.trim())
                .filter((e) => e);
              return (t && r.pop(), `${s}<${r.join(",")}>`);
            });
          }
          return r;
        };
      }
      function f() {
        return (e) => {
          let t = 0;
          while (-1 !== t)
            if (((t = e.indexOf("::")), 0 === t)) e = e.substring(2);
            else if (-1 !== t) {
              let r = t;
              while (-1 !== r && !s.includes(e[r])) r--;
              e = `${e.substring(0, r + 1)}${e.substring(t + 2)}`;
            }
          return e;
        };
      }
      function p() {
        return (e) => {
          for (let t = 0, r = e.length; t < r; t++)
            if ("<" === e[t]) {
              const r = i.find((r) => {
                const n = t - r.length;
                return (
                  n >= 0 &&
                  e.substring(n, t) === r &&
                  (0 === n || s.includes(e[n - 1]))
                );
              });
              if (!r) {
                const r = u(e, t + 1);
                e = `${e.substring(0, t)}${e.substring(r + 1)}`;
              }
            }
          return e;
        };
      }
      function g() {
        const e = (e) => `(${e},${e})`;
        return (t) => d(t, "PairOf<", e);
      }
      function y() {
        const e = /\s/g,
          t = /(T|Self)::/g,
          r = /<(T|Self)asTrait>::/g,
          n = /<Tas[a-z]+::Trait>::/g,
          i = /<LookupasStaticLookup>/g,
          s = /::Type/g;
        return (o) => (
          (e.lastIndex = 0),
          (t.lastIndex = 0),
          (r.lastIndex = 0),
          (n.lastIndex = 0),
          (i.lastIndex = 0),
          (s.lastIndex = 0),
          o
            .replace(e, "")
            .replace(t, "")
            .replace(r, "")
            .replace(n, "")
            .replace(i, "Lookup")
            .replace(s, "")
        );
      }
      function v(e) {
        const t = (e) => e;
        return (r) => d(r, e, t);
      }
      const b = new Map();
      function m(e) {
        const t = e.toString(),
          r = b.get(t);
        if (r) return r;
        let n = t;
        for (let i = 0, s = o.length; i < s; i++) n = o[i](n);
        return (b.set(t, n), n);
      }
    },
    9315: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sortAsc = l),
        (t.sortMap = d),
        (t.sortSet = h));
      var n = r(2757);
      function i(e) {
        return e instanceof Uint8Array || Array.isArray(e);
      }
      function s(e) {
        return (
          (0, n.isCodec)(e) &&
          (0, n.isNumber)(e.index) &&
          (0, n.isCodec)(e.value)
        );
      }
      function o(e) {
        return (
          (0, n.isCodec)(e) &&
          (0, n.isBoolean)(e.isSome) &&
          (0, n.isCodec)(e.value)
        );
      }
      function a(e) {
        return (0, n.isNumber)(e) || (0, n.isBn)(e) || (0, n.isBigInt)(e);
      }
      function u(e, t) {
        let r = 0;
        const n = Math.min(e.length, t.length);
        for (let i = 0; i < n; ++i)
          if (((r = l(e[i], t[i])), 0 !== r)) return r;
        return e.length - t.length;
      }
      function c(e, t, r) {
        if ((0, n.isCodec)(r)) {
          const i = r.toHex();
          if (t.has(i))
            throw new Error(`Duplicate value in ${e}: ${(0, n.stringify)(r)}`);
          t.add(i);
        }
        return !0;
      }
      function l(e, t) {
        if (a(e) && a(t)) return (0, n.bnToBn)(e).cmp((0, n.bnToBn)(t));
        if (e instanceof Map && t instanceof Map)
          return l(Array.from(e.values()), Array.from(t.values()));
        if (s(e) && s(t)) return l(e.index, t.index) || l(e.value, t.value);
        if (o(e) && o(t))
          return l(e.isNone ? 0 : 1, t.isNone ? 0 : 1) || l(e.value, t.value);
        if (i(e) && i(t)) return u(e, t);
        if ((0, n.isCodec)(e) && (0, n.isCodec)(t))
          return l(e.toU8a(!0), t.toU8a(!0));
        throw new Error(
          `Attempting to sort unrecognized values: ${(0, n.stringify)(e)} (typeof ${typeof e}) <-> ${(0, n.stringify)(t)} (typeof ${typeof t})`,
        );
      }
      function h(e) {
        const t = new Set();
        return new Set(
          Array.from(e)
            .filter((e) => c("BTreeSet", t, e))
            .sort(l),
        );
      }
      function d(e) {
        const t = new Set();
        return new Map(
          Array.from(e.entries())
            .filter((e) => {
              let [r] = e;
              return c("BTreeMap", t, r);
            })
            .sort((e, t) => {
              let [r] = e,
                [n] = t;
              return l(r, n);
            }),
        );
      }
    },
    9316: function (e, t, r) {
      "use strict";
      function n(e, t) {
        return "function" === typeof t ? t : e.createClassUnsafe(t);
      }
      function i(e, t) {
        const r = t.length,
          i = new Array(r);
        for (let s = 0; s < r; s++) i[s] = n(e, t[s]);
        return i;
      }
      function s(e, t) {
        const r = Object.entries(t),
          i = r.length,
          s = [new Array(i), new Array(i)];
        for (let o = 0; o < i; o++)
          ((s[1][o] = r[o][0]), (s[0][o] = n(e, r[o][1])));
        return s;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mapToTypeMap = s),
        (t.typeToConstructor = n),
        (t.typesToConstructors = i));
    },
    9317: function (e, t, r) {
      "use strict";
      function n(e, t) {
        let [r, n] = t;
        const i = {};
        for (let s = 0, o = n.length; s < o; s++)
          i[n[s]] = e.getClassName(r[s]) || new r[s](e).toRawType();
        return i;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.typesToMap = n));
    },
    9318: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DoNotConstruct = void 0));
      var i = n(r(128));
      class DoNotConstruct {
        constructor(e, t) {
          throw (
            void 0 === t && (t = "DoNotConstruct"),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (0, i.default)(this, "__internal__neverError", void 0),
            (this.registry = e),
            (this.__internal__neverError = new Error(
              "DoNotConstruct: Cannot construct unknown type " + t,
            )),
            this.__internal__neverError
          );
        }
        static with(e) {
          return class extends DoNotConstruct {
            constructor(t) {
              super(t, e);
            }
          };
        }
        get encodedLength() {
          throw this.__internal__neverError;
        }
        get hash() {
          throw this.__internal__neverError;
        }
        get isEmpty() {
          throw this.__internal__neverError;
        }
        eq() {
          throw this.__internal__neverError;
        }
        inspect() {
          throw this.__internal__neverError;
        }
        toHex() {
          throw this.__internal__neverError;
        }
        toHuman() {
          throw this.__internal__neverError;
        }
        toJSON() {
          throw this.__internal__neverError;
        }
        toPrimitive() {
          throw this.__internal__neverError;
        }
        toRawType() {
          throw this.__internal__neverError;
        }
        toString() {
          throw this.__internal__neverError;
        }
        toU8a() {
          throw this.__internal__neverError;
        }
      }
      t.DoNotConstruct = DoNotConstruct;
    },
    9319: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Result = void 0));
      var n = r(5474);
      class Result extends n.Enum {
        constructor(e, t, r, n) {
          super(e, { Ok: t, Err: r }, n);
        }
        static with(e) {
          return class extends Result {
            constructor(t, r) {
              super(t, e.Ok, e.Err, r);
            }
          };
        }
        get asErr() {
          if (!this.isErr)
            throw new Error(
              "Cannot extract Err value from Ok result, check isErr first",
            );
          return this.value;
        }
        get asOk() {
          if (!this.isOk)
            throw new Error(
              "Cannot extract Ok value from Err result, check isOk first",
            );
          return this.value;
        }
        get isEmpty() {
          return this.isOk && this.value.isEmpty;
        }
        get isErr() {
          return !this.isOk;
        }
        get isOk() {
          return 0 === this.index;
        }
        toRawType() {
          const e = this._toRawStruct();
          return `Result<${e.Ok},${e.Err}>`;
        }
      }
      t.Result = Result;
    },
    9320: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VecAny = void 0));
      var n = r(3935);
      class VecAny extends n.AbstractArray {
        toRawType() {
          return "Vec<Codec>";
        }
      }
      t.VecAny = VecAny;
    },
    9321: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VecFixed = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3935),
        a = r(3163),
        u = r(5478);
      class VecFixed extends o.AbstractArray {
        constructor(e, t, r, n, o) {
          void 0 === n && (n = []);
          let { definition: c, setDefinition: l = s.identity } =
            void 0 === o ? {} : o;
          (super(e, r),
            (0, i.default)(this, "__internal__Type", void 0),
            (this.__internal__Type = c || l((0, a.typeToConstructor)(e, t))),
            (this.initialU8aLength = (
              (0, s.isU8a)(n)
                ? (0, a.decodeU8aVec)(e, this, n, 0, this.__internal__Type)
                : (0, u.decodeVec)(e, this, n, 0, this.__internal__Type)
            )[1]));
        }
        static with(e, t) {
          let r;
          const n = (e) => (r = e);
          return class extends VecFixed {
            constructor(i, s) {
              super(i, e, t, s, { definition: r, setDefinition: n });
            }
          };
        }
        get Type() {
          return new this.__internal__Type(this.registry).toRawType();
        }
        get encodedLength() {
          let e = 0;
          for (let t = 0, r = this.length; t < r; t++)
            e += this[t].encodedLength;
          return e;
        }
        inspect() {
          return { inner: this.inspectInner() };
        }
        toU8a() {
          const e = this.toU8aInner();
          return e.length ? (0, s.u8aConcatStrict)(e) : new Uint8Array([]);
        }
        toRawType() {
          return `[${this.Type};${this.length}]`;
        }
      }
      t.VecFixed = VecFixed;
    },
    9322: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BTreeMap", {
          enumerable: !0,
          get: function () {
            return i.BTreeMap;
          },
        }),
        Object.defineProperty(t, "BTreeSet", {
          enumerable: !0,
          get: function () {
            return s.BTreeSet;
          },
        }),
        Object.defineProperty(t, "BitVec", {
          enumerable: !0,
          get: function () {
            return n.BitVec;
          },
        }),
        Object.defineProperty(t, "Bytes", {
          enumerable: !0,
          get: function () {
            return o.Bytes;
          },
        }),
        Object.defineProperty(t, "CodecMap", {
          enumerable: !0,
          get: function () {
            return c.CodecMap;
          },
        }),
        Object.defineProperty(t, "HashMap", {
          enumerable: !0,
          get: function () {
            return a.HashMap;
          },
        }),
        Object.defineProperty(t, "Linkage", {
          enumerable: !0,
          get: function () {
            return u.Linkage;
          },
        }),
        Object.defineProperty(t, "Map", {
          enumerable: !0,
          get: function () {
            return c.CodecMap;
          },
        }),
        Object.defineProperty(t, "OptionBool", {
          enumerable: !0,
          get: function () {
            return l.OptionBool;
          },
        }),
        Object.defineProperty(t, "Range", {
          enumerable: !0,
          get: function () {
            return h.Range;
          },
        }),
        Object.defineProperty(t, "RangeInclusive", {
          enumerable: !0,
          get: function () {
            return d.RangeInclusive;
          },
        }),
        Object.defineProperty(t, "Type", {
          enumerable: !0,
          get: function () {
            return _.Type;
          },
        }),
        Object.defineProperty(t, "U8aFixed", {
          enumerable: !0,
          get: function () {
            return f.U8aFixed;
          },
        }),
        Object.defineProperty(t, "WrapperKeepOpaque", {
          enumerable: !0,
          get: function () {
            return p.WrapperKeepOpaque;
          },
        }),
        Object.defineProperty(t, "WrapperOpaque", {
          enumerable: !0,
          get: function () {
            return g.WrapperOpaque;
          },
        }));
      var n = r(9323),
        i = r(9324),
        s = r(9325),
        o = r(6470),
        a = r(9326),
        u = r(9327),
        c = r(5479),
        l = r(9328),
        h = r(6472),
        d = r(9329),
        _ = r(9330),
        f = r(9331),
        p = r(6474),
        g = r(9332);
    },
    9323: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BitVec = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3818);
      function a(e) {
        if (null === e || void 0 === e || !e.length)
          return [0, new Uint8Array()];
        const [t, r] = (0, s.compactFromU8aLim)(e),
          n = t + Math.ceil(r / 8);
        if (n > e.length)
          throw new Error(
            `BitVec: required length less than remainder, expected at least ${n}, found ${e.length}`,
          );
        return [r, e.subarray(t, n)];
      }
      function u(e) {
        if (Array.isArray(e) || (0, s.isString)(e)) {
          const t = (0, s.u8aToU8a)(e);
          return [t.length / 8, t];
        }
        return a(e);
      }
      class BitVec extends o.Raw {
        constructor(e, t, r) {
          void 0 === r && (r = !1);
          const [n, s] = u(t);
          (super(e, s),
            (0, i.default)(this, "__internal__decodedLength", void 0),
            (0, i.default)(this, "__internal__isMsb", void 0),
            (this.__internal__decodedLength = n),
            (this.__internal__isMsb = r));
        }
        get encodedLength() {
          return (
            this.length +
            (0, s.compactToU8a)(this.__internal__decodedLength).length
          );
        }
        inspect() {
          return {
            outer: [
              (0, s.compactToU8a)(this.__internal__decodedLength),
              super.toU8a(),
            ],
          };
        }
        toBoolArray() {
          const e = [...this.toU8a(!0)].map((e) => [
              !!(128 & e),
              !!(64 & e),
              !!(32 & e),
              !!(16 & e),
              !!(8 & e),
              !!(4 & e),
              !!(2 & e),
              !!(1 & e),
            ]),
            t = e.length,
            r = new Array(8 * t);
          for (let n = 0; n < t; n++) {
            const t = 8 * n,
              i = e[n];
            for (let e = 0; e < 8; e++)
              r[t + e] = this.__internal__isMsb ? i[e] : i[7 - e];
          }
          return r;
        }
        toHuman() {
          return (
            "0b" +
            [...this.toU8a(!0)]
              .map((e) => ("00000000" + e.toString(2)).slice(-8))
              .map((e) =>
                this.__internal__isMsb ? e : e.split("").reverse().join(""),
              )
              .join("_")
          );
        }
        toRawType() {
          return "BitVec";
        }
        toU8a(e) {
          const t = super.toU8a(e);
          return e
            ? t
            : (0, s.u8aConcatStrict)([
                (0, s.compactToU8a)(this.__internal__decodedLength),
                t,
              ]);
        }
      }
      t.BitVec = BitVec;
    },
    9324: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BTreeMap = void 0));
      var n = r(5479);
      class BTreeMap extends n.CodecMap {
        static with(e, t) {
          return class extends BTreeMap {
            constructor(r, n) {
              super(r, e, t, n, "BTreeMap");
            }
          };
        }
      }
      t.BTreeMap = BTreeMap;
    },
    9325: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BTreeSet = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3163);
      const a = (0, s.logger)("BTreeSet");
      function u(e, t, r) {
        const n = new Set(),
          [i, a] = (0, s.compactFromU8aLim)(r),
          u = new Array(a),
          [c] = (0, o.decodeU8aVec)(e, u, r, i, t);
        for (let s = 0; s < a; s++) n.add(u[s]);
        return [t, n, c];
      }
      function c(e, t, r) {
        const n = new Set();
        return (
          r.forEach((r) => {
            try {
              n.add(r instanceof t ? r : new t(e, r));
            } catch (i) {
              throw (a.error("Failed to decode key or value:", i.message), i);
            }
          }),
          [t, n, 0]
        );
      }
      function l(e, t, r) {
        const n = (0, o.typeToConstructor)(e, t);
        if (!r) return [n, new Set(), 0];
        if ((0, s.isU8a)(r) || (0, s.isHex)(r))
          return u(e, n, (0, s.u8aToU8a)(r));
        if (Array.isArray(r) || r instanceof Set) return c(e, n, r);
        throw new Error("BTreeSet: cannot decode type");
      }
      class BTreeSet extends Set {
        constructor(e, t, r) {
          const [n, s, a] = l(e, t, r);
          (super((0, o.sortSet)(s)),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (0, i.default)(this, "__internal__ValClass", void 0),
            (this.registry = e),
            (this.initialU8aLength = a),
            (this.__internal__ValClass = n));
        }
        static with(e) {
          return class extends BTreeSet {
            constructor(t, r) {
              super(t, e, r);
            }
          };
        }
        get encodedLength() {
          let e = (0, s.compactToU8a)(this.size).length;
          for (const t of this.values()) e += t.encodedLength;
          return e;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isEmpty() {
          return 0 === this.size;
        }
        get strings() {
          return [...super.values()].map((e) => e.toString());
        }
        eq(e) {
          return (0, o.compareSet)(this, e);
        }
        inspect() {
          const e = [];
          for (const t of this.values()) e.push(t.inspect());
          return { inner: e, outer: [(0, s.compactToU8a)(this.size)] };
        }
        toHex() {
          return (0, s.u8aToHex)(this.toU8a());
        }
        toHuman(e, t) {
          const r = [];
          for (const n of this.values()) r.push(n.toHuman(e, t));
          return r;
        }
        toJSON() {
          const e = [];
          for (const t of this.values()) e.push(t.toJSON());
          return e;
        }
        toRawType() {
          return `BTreeSet<${this.registry.getClassName(this.__internal__ValClass) || new this.__internal__ValClass(this.registry).toRawType()}>`;
        }
        toPrimitive(e) {
          const t = [];
          for (const r of this.values()) t.push(r.toPrimitive(e));
          return t;
        }
        toString() {
          return (0, s.stringify)(this.toJSON());
        }
        toU8a(e) {
          const t = [];
          e || t.push((0, s.compactToU8a)(this.size));
          for (const r of this.values()) t.push(r.toU8a(e));
          return (0, s.u8aConcatStrict)(t);
        }
      }
      t.BTreeSet = BTreeSet;
    },
    9326: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HashMap = void 0));
      var n = r(5479);
      class HashMap extends n.CodecMap {
        static with(e, t) {
          return class extends HashMap {
            constructor(r, n) {
              super(r, e, t, n);
            }
          };
        }
      }
      t.HashMap = HashMap;
    },
    9327: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LinkageResult = t.Linkage = void 0));
      var n = r(5476),
        i = r(5477),
        s = r(5478),
        o = r(5480);
      const a = new Uint8Array();
      class Linkage extends o.Struct {
        constructor(e, t, r) {
          super(e, { previous: n.Option.with(t), next: n.Option.with(t) }, r);
        }
        static withKey(e) {
          return class extends Linkage {
            constructor(t, r) {
              super(t, e, r);
            }
          };
        }
        get previous() {
          return this.get("previous");
        }
        get next() {
          return this.get("next");
        }
        toRawType() {
          return `Linkage<${this.next.toRawType(!0)}>`;
        }
        toU8a(e) {
          return this.isEmpty ? a : super.toU8a(e);
        }
      }
      t.Linkage = Linkage;
      class LinkageResult extends i.Tuple {
        constructor(e, t, r) {
          let [n, i] = t,
            [o, a] = r;
          super(e, { Keys: s.Vec.with(n), Values: s.Vec.with(o) }, [i, a]);
        }
      }
      t.LinkageResult = LinkageResult;
    },
    9328: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.OptionBool = void 0));
      var n = r(2757),
        i = r(5476),
        s = r(6471);
      function o(e, t) {
        return 0 === t[0] ? null : new s.bool(e, 1 === t[0]);
      }
      class OptionBool extends i.Option {
        constructor(e, t) {
          (super(
            e,
            s.bool,
            (0, n.isU8a)(t) || (0, n.isHex)(t) ? o(e, (0, n.u8aToU8a)(t)) : t,
          ),
            (this.initialU8aLength = 1));
        }
        get encodedLength() {
          return 1;
        }
        get isFalse() {
          return !!this.isSome && !this.value.valueOf();
        }
        get isTrue() {
          return !!this.isSome && this.value.valueOf();
        }
        inspect() {
          return { outer: [this.toU8a()] };
        }
        toRawType(e) {
          return e ? "bool" : "Option<bool>";
        }
        toU8a(e) {
          return e
            ? super.toU8a(!0)
            : this.isSome
              ? new Uint8Array([this.isTrue ? 1 : 2])
              : new Uint8Array([0]);
        }
      }
      t.OptionBool = OptionBool;
    },
    9329: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RangeInclusive = void 0));
      var n = r(6472);
      class RangeInclusive extends n.Range {
        constructor(e, t, r) {
          super(e, t, r, { rangeName: "RangeInclusive" });
        }
        static with(e) {
          return class extends RangeInclusive {
            constructor(t, r) {
              super(t, e, r);
            }
          };
        }
      }
      t.RangeInclusive = RangeInclusive;
    },
    9330: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Type = void 0));
      var n = r(6473),
        i = r(3163);
      class Type extends n.Text {
        constructor(e, t) {
          (void 0 === t && (t = ""),
            super(e, t),
            this.setOverride((0, i.sanitize)(this.toString())));
        }
        toRawType() {
          return "Type";
        }
      }
      t.Type = Type;
    },
    9331: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.U8aFixed = void 0));
      var n = r(2757),
        i = r(3818);
      function s(e, t) {
        const r = (0, n.u8aToU8a)(e),
          i = t / 8;
        if (!r.length) return [new Uint8Array(i), 0];
        if ((0, n.isU8a)(e) ? r.length < i : r.length !== i)
          throw new Error(
            `Expected input with ${i} bytes (${t} bits), found ${r.length} bytes`,
          );
        return [r.subarray(0, i), i];
      }
      class U8aFixed extends i.Raw {
        constructor(e, t, r) {
          (void 0 === t && (t = new Uint8Array()), void 0 === r && (r = 256));
          const [n, i] = s(t, r);
          super(e, n, i);
        }
        static with(e, t) {
          return class extends U8aFixed {
            constructor(t, r) {
              super(t, r, e);
            }
            toRawType() {
              return t || super.toRawType();
            }
          };
        }
        toRawType() {
          return `[u8;${this.length}]`;
        }
      }
      t.U8aFixed = U8aFixed;
    },
    9332: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WrapperOpaque = void 0));
      var n = r(6474);
      class WrapperOpaque extends n.WrapperKeepOpaque {
        constructor(e, t, r) {
          super(e, t, r, { opaqueName: "WrapperOpaque" });
        }
        static with(e) {
          return class extends WrapperOpaque {
            constructor(t, r) {
              super(t, e, r);
            }
          };
        }
        get inner() {
          return this.unwrap();
        }
      }
      t.WrapperOpaque = WrapperOpaque;
    },
    9333: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Bool", {
          enumerable: !0,
          get: function () {
            return n.bool;
          },
        }),
        Object.defineProperty(t, "CodecDate", {
          enumerable: !0,
          get: function () {
            return i.CodecDate;
          },
        }),
        Object.defineProperty(t, "CodecSet", {
          enumerable: !0,
          get: function () {
            return u.CodecSet;
          },
        }),
        Object.defineProperty(t, "Date", {
          enumerable: !0,
          get: function () {
            return i.CodecDate;
          },
        }),
        Object.defineProperty(t, "Float", {
          enumerable: !0,
          get: function () {
            return s.Float;
          },
        }),
        Object.defineProperty(t, "Json", {
          enumerable: !0,
          get: function () {
            return o.Json;
          },
        }),
        Object.defineProperty(t, "Raw", {
          enumerable: !0,
          get: function () {
            return a.Raw;
          },
        }),
        Object.defineProperty(t, "Set", {
          enumerable: !0,
          get: function () {
            return u.CodecSet;
          },
        }),
        Object.defineProperty(t, "Struct", {
          enumerable: !0,
          get: function () {
            return c.Struct;
          },
        }),
        Object.defineProperty(t, "Text", {
          enumerable: !0,
          get: function () {
            return l.Text;
          },
        }),
        Object.defineProperty(t, "bool", {
          enumerable: !0,
          get: function () {
            return n.bool;
          },
        }));
      var n = r(6471),
        i = r(9334),
        s = r(5481),
        o = r(9335),
        a = r(3818),
        u = r(9336),
        c = r(5480),
        l = r(6473);
    },
    9334: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CodecDate = void 0));
      var i = n(r(128)),
        s = r(2757);
      const o = 64,
        a = { bitLength: o, isLe: !0 };
      function u(e) {
        if ((0, s.isU8a)(e)) e = (0, s.u8aToBn)(e.subarray(0, o / 8));
        else {
          if (e instanceof Date) return e;
          (0, s.isString)(e) && (e = new s.BN(e.toString(), 10, "le"));
        }
        return new Date(1e3 * (0, s.bnToBn)(e).toNumber());
      }
      class CodecDate extends Date {
        constructor(e, t) {
          (void 0 === t && (t = 0),
            super(u(t)),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", o / 8),
            (0, i.default)(this, "isStorageFallback", void 0),
            (this.registry = e));
        }
        get encodedLength() {
          return o / 8;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isEmpty() {
          return 0 === this.getTime();
        }
        bitLength() {
          return o;
        }
        eq(e) {
          return u(e).getTime() === this.getTime();
        }
        inspect() {
          return { outer: [this.toU8a()] };
        }
        toBigInt() {
          return BigInt(this.toNumber());
        }
        toBn() {
          return new s.BN(this.toNumber());
        }
        toHex(e) {
          return (
            void 0 === e && (e = !1),
            (0, s.bnToHex)(this.toBn(), {
              bitLength: o,
              isLe: e,
              isNegative: !1,
            })
          );
        }
        toHuman() {
          return this.toISOString();
        }
        toJSON() {
          return this.toNumber();
        }
        toNumber() {
          return Math.ceil(this.getTime() / 1e3);
        }
        toPrimitive() {
          return this.toNumber();
        }
        toRawType() {
          return "Moment";
        }
        toString() {
          return super.toString();
        }
        toU8a(e) {
          return (0, s.bnToU8a)(this.toNumber(), a);
        }
      }
      t.CodecDate = CodecDate;
    },
    9335: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Json = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3163);
      function a(e) {
        return Object.entries(e || {});
      }
      class Json extends Map {
        constructor(e, t) {
          const r = a(t);
          (super(r),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (this.registry = e),
            (0, s.objectProperties)(
              this,
              r.map((e) => {
                let [t] = e;
                return t;
              }),
              (e) => this.get(e),
            ));
        }
        get encodedLength() {
          return 0;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isEmpty() {
          return 0 === [...this.keys()].length;
        }
        eq(e) {
          return (0, o.compareMap)(this, e);
        }
        getT(e) {
          return this.get(e);
        }
        inspect() {
          throw new Error("Unimplemented");
        }
        toHex() {
          throw new Error("Unimplemented");
        }
        toHuman() {
          return [...this.entries()].reduce((e, t) => {
            let [r, n] = t;
            return (
              (e[r] = (0, s.isFunction)(
                null === n || void 0 === n ? void 0 : n.toHuman,
              )
                ? n.toHuman()
                : n),
              e
            );
          }, {});
        }
        toJSON() {
          return [...this.entries()].reduce((e, t) => {
            let [r, n] = t;
            return ((e[r] = n), e);
          }, {});
        }
        toPrimitive(e) {
          return [...this.entries()].reduce((t, r) => {
            let [n, i] = r;
            return (
              (t[n] = (0, s.isFunction)(i.toPrimitive) ? i.toPrimitive(e) : i),
              t
            );
          }, {});
        }
        toRawType() {
          return "Json";
        }
        toString() {
          return (0, s.stringify)(this.toJSON());
        }
        toU8a(e) {
          throw new Error("Unimplemented");
        }
      }
      t.Json = Json;
    },
    9336: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CodecSet = void 0));
      var i = n(r(128)),
        s = r(2757),
        o = r(3163);
      function a(e, t) {
        const r = new s.BN(0);
        for (let n = 0, i = t.length; n < i; n++)
          r.ior((0, s.bnToBn)(e[t[n]] || 0));
        return r;
      }
      function u(e, t) {
        const r = t.length,
          n = new Array(r);
        for (let i = 0; i < r; i++) {
          const r = t[i];
          if ((0, s.isUndefined)(e[r]))
            throw new Error(
              `Set: Invalid key '${r}' passed to Set, allowed ${Object.keys(e).join(", ")}`,
            );
          n[i] = r;
        }
        return n;
      }
      function c(e, t) {
        const r = (0, s.bnToBn)(t),
          n = Object.keys(e),
          i = [];
        for (let a = 0, u = n.length; a < u; a++) {
          const t = n[a];
          r.and((0, s.bnToBn)(e[t])).eq((0, s.bnToBn)(e[t])) && i.push(t);
        }
        const o = a(e, i);
        if (!r.eq(o))
          throw new Error(
            `Set: Mismatch decoding '${r.toString()}', computed as '${o.toString()}' with ${i.join(", ")}`,
          );
        return i;
      }
      function l(e, t, r) {
        if ((void 0 === t && (t = 0), r % 8 !== 0))
          throw new Error("Expected valid bitLength, power of 8, found " + r);
        const n = r / 8;
        if ((0, s.isU8a)(t))
          return 0 === t.length
            ? []
            : c(e, (0, s.u8aToBn)(t.subarray(0, n), { isLe: !0 }));
        if ((0, s.isString)(t)) return l(e, (0, s.u8aToU8a)(t), n);
        if (t instanceof Set || Array.isArray(t)) {
          const r = Array.isArray(t) ? t : [...t.values()];
          return u(e, r);
        }
        return c(e, t);
      }
      class CodecSet extends Set {
        constructor(e, t, r, n) {
          (void 0 === n && (n = 8),
            super(l(t, r, n)),
            (0, i.default)(this, "registry", void 0),
            (0, i.default)(this, "createdAtHash", void 0),
            (0, i.default)(this, "initialU8aLength", void 0),
            (0, i.default)(this, "isStorageFallback", void 0),
            (0, i.default)(this, "__internal__allowed", void 0),
            (0, i.default)(this, "__internal__byteLength", void 0),
            (0, i.default)(this, "add", (e) => {
              if (
                this.__internal__allowed &&
                (0, s.isUndefined)(this.__internal__allowed[e])
              )
                throw new Error(`Set: Invalid key '${e}' on add`);
              return (super.add(e), this);
            }),
            (this.registry = e),
            (this.__internal__allowed = t),
            (this.__internal__byteLength = n / 8));
        }
        static with(e, t) {
          var r;
          return (
            (r = class extends CodecSet {
              constructor(r, n) {
                super(r, e, n, t);
              }
            }),
            (() => {
              const t = Object.keys(e),
                n = t.length,
                i = new Array(n);
              for (let e = 0; e < n; e++)
                i[e] = "is" + (0, s.stringPascalCase)(t[e]);
              (0, s.objectProperties)(r.prototype, i, (e, r, n) =>
                n.strings.includes(t[r]),
              );
            })(),
            r
          );
        }
        get encodedLength() {
          return this.__internal__byteLength;
        }
        get hash() {
          return this.registry.hash(this.toU8a());
        }
        get isEmpty() {
          return 0 === this.size;
        }
        get strings() {
          return [...super.values()];
        }
        get valueEncoded() {
          return a(this.__internal__allowed, this.strings);
        }
        eq(e) {
          return Array.isArray(e)
            ? (0, o.compareArray)(this.strings.sort(), e.sort())
            : e instanceof Set
              ? this.eq([...e.values()])
              : !(!(0, s.isNumber)(e) && !(0, s.isBn)(e)) &&
                this.valueEncoded.eq((0, s.bnToBn)(e));
        }
        inspect() {
          return { outer: [this.toU8a()] };
        }
        toHex() {
          return (0, s.u8aToHex)(this.toU8a());
        }
        toHuman() {
          return this.toJSON();
        }
        toJSON() {
          return this.strings;
        }
        toNumber() {
          return this.valueEncoded.toNumber();
        }
        toPrimitive() {
          return this.toJSON();
        }
        toRawType() {
          return (0, s.stringify)({ _set: this.__internal__allowed });
        }
        toString() {
          return `[${this.strings.join(", ")}]`;
        }
        toU8a(e) {
          return (0, s.bnToU8a)(this.valueEncoded, {
            bitLength: 8 * this.__internal__byteLength,
            isLe: !0,
          });
        }
      }
      t.CodecSet = CodecSet;
    },
    9337: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "F32", {
          enumerable: !0,
          get: function () {
            return n.f32;
          },
        }),
        Object.defineProperty(t, "F64", {
          enumerable: !0,
          get: function () {
            return i.f64;
          },
        }),
        Object.defineProperty(t, "I128", {
          enumerable: !0,
          get: function () {
            return c.i128;
          },
        }),
        Object.defineProperty(t, "I16", {
          enumerable: !0,
          get: function () {
            return o.i16;
          },
        }),
        Object.defineProperty(t, "I256", {
          enumerable: !0,
          get: function () {
            return l.i256;
          },
        }),
        Object.defineProperty(t, "I32", {
          enumerable: !0,
          get: function () {
            return a.i32;
          },
        }),
        Object.defineProperty(t, "I64", {
          enumerable: !0,
          get: function () {
            return u.i64;
          },
        }),
        Object.defineProperty(t, "I8", {
          enumerable: !0,
          get: function () {
            return s.i8;
          },
        }),
        Object.defineProperty(t, "ISize", {
          enumerable: !0,
          get: function () {
            return h.isize;
          },
        }),
        Object.defineProperty(t, "U128", {
          enumerable: !0,
          get: function () {
            return g.u128;
          },
        }),
        Object.defineProperty(t, "U16", {
          enumerable: !0,
          get: function () {
            return _.u16;
          },
        }),
        Object.defineProperty(t, "U256", {
          enumerable: !0,
          get: function () {
            return y.u256;
          },
        }),
        Object.defineProperty(t, "U32", {
          enumerable: !0,
          get: function () {
            return f.u32;
          },
        }),
        Object.defineProperty(t, "U64", {
          enumerable: !0,
          get: function () {
            return p.u64;
          },
        }),
        Object.defineProperty(t, "U8", {
          enumerable: !0,
          get: function () {
            return d.u8;
          },
        }),
        Object.defineProperty(t, "USize", {
          enumerable: !0,
          get: function () {
            return v.usize;
          },
        }),
        Object.defineProperty(t, "f32", {
          enumerable: !0,
          get: function () {
            return n.f32;
          },
        }),
        Object.defineProperty(t, "f64", {
          enumerable: !0,
          get: function () {
            return i.f64;
          },
        }),
        Object.defineProperty(t, "i128", {
          enumerable: !0,
          get: function () {
            return c.i128;
          },
        }),
        Object.defineProperty(t, "i16", {
          enumerable: !0,
          get: function () {
            return o.i16;
          },
        }),
        Object.defineProperty(t, "i256", {
          enumerable: !0,
          get: function () {
            return l.i256;
          },
        }),
        Object.defineProperty(t, "i32", {
          enumerable: !0,
          get: function () {
            return a.i32;
          },
        }),
        Object.defineProperty(t, "i64", {
          enumerable: !0,
          get: function () {
            return u.i64;
          },
        }),
        Object.defineProperty(t, "i8", {
          enumerable: !0,
          get: function () {
            return s.i8;
          },
        }),
        Object.defineProperty(t, "isize", {
          enumerable: !0,
          get: function () {
            return h.isize;
          },
        }),
        Object.defineProperty(t, "u128", {
          enumerable: !0,
          get: function () {
            return g.u128;
          },
        }),
        Object.defineProperty(t, "u16", {
          enumerable: !0,
          get: function () {
            return _.u16;
          },
        }),
        Object.defineProperty(t, "u256", {
          enumerable: !0,
          get: function () {
            return y.u256;
          },
        }),
        Object.defineProperty(t, "u32", {
          enumerable: !0,
          get: function () {
            return f.u32;
          },
        }),
        Object.defineProperty(t, "u64", {
          enumerable: !0,
          get: function () {
            return p.u64;
          },
        }),
        Object.defineProperty(t, "u8", {
          enumerable: !0,
          get: function () {
            return d.u8;
          },
        }),
        Object.defineProperty(t, "usize", {
          enumerable: !0,
          get: function () {
            return v.usize;
          },
        }));
      var n = r(9338),
        i = r(9339),
        s = r(9340),
        o = r(9341),
        a = r(6475),
        u = r(9342),
        c = r(9343),
        l = r(9344),
        h = r(9345),
        d = r(9346),
        _ = r(9347),
        f = r(6476),
        p = r(9348),
        g = r(9349),
        y = r(9350),
        v = r(9351);
    },
    9338: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.f32 = void 0));
      var i = n(r(128)),
        s = r(5481);
      class f32 extends s.Float.with(32) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__FloatType", "f32"));
        }
      }
      t.f32 = f32;
    },
    9339: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.f64 = void 0));
      var i = n(r(128)),
        s = r(5481);
      class f64 extends s.Float.with(64) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__FloatType", "f64"));
        }
      }
      t.f64 = f64;
    },
    9340: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.i8 = void 0));
      var i = n(r(128)),
        s = r(3816);
      class i8 extends s.Int.with(8) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__IntType", "i8"));
        }
      }
      t.i8 = i8;
    },
    9341: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.i16 = void 0));
      var i = n(r(128)),
        s = r(3816);
      class i16 extends s.Int.with(16) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__IntType", "i16"));
        }
      }
      t.i16 = i16;
    },
    9342: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.i64 = void 0));
      var i = n(r(128)),
        s = r(3816);
      class i64 extends s.Int.with(64) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__IntType", "i64"));
        }
      }
      t.i64 = i64;
    },
    9343: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.i128 = void 0));
      var i = n(r(128)),
        s = r(3816);
      class i128 extends s.Int.with(128) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__IntType", "i128"));
        }
      }
      t.i128 = i128;
    },
    9344: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.i256 = void 0));
      var i = n(r(128)),
        s = r(3816);
      class i256 extends s.Int.with(256) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__IntType", "i256"));
        }
      }
      t.i256 = i256;
    },
    9345: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isize = void 0));
      var n = r(6475);
      class isize extends n.i32 {
        constructor(e, t) {
          throw (
            super(e, t),
            new Error(
              "The `isize` type should not be used. Since it is platform-specific, it creates incompatibilities between native (generally i64) and WASM (always i32) code. Use one of the `i32` or `i64` types explicitly.",
            )
          );
        }
      }
      t.isize = isize;
    },
    9346: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.u8 = void 0));
      var i = n(r(128)),
        s = r(3817);
      class u8 extends s.UInt.with(8) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__UIntType", "u8"));
        }
      }
      t.u8 = u8;
    },
    9347: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.u16 = void 0));
      var i = n(r(128)),
        s = r(3817);
      class u16 extends s.UInt.with(16) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__UIntType", "u16"));
        }
      }
      t.u16 = u16;
    },
    9348: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.u64 = void 0));
      var i = n(r(128)),
        s = r(3817);
      class u64 extends s.UInt.with(64) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__UIntType", "u64"));
        }
      }
      t.u64 = u64;
    },
    9349: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.u128 = void 0));
      var i = n(r(128)),
        s = r(3817);
      class u128 extends s.UInt.with(128) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__UIntType", "u128"));
        }
      }
      t.u128 = u128;
    },
    9350: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.u256 = void 0));
      var i = n(r(128)),
        s = r(3817);
      class u256 extends s.UInt.with(256) {
        constructor() {
          (super(...arguments), (0, i.default)(this, "__UIntType", "u256"));
        }
      }
      t.u256 = u256;
    },
    9351: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.usize = void 0));
      var n = r(6476);
      class usize extends n.u32 {
        constructor(e, t) {
          throw (
            super(e, t),
            new Error(
              "The `usize` type should not be used. Since it is platform-specific, it creates incompatibilities between native (generally u64) and WASM (always u32) code. Use one of the `u32` or `u64` types explicitly.",
            )
          );
        }
      }
      t.usize = usize;
    },
  },
]);
