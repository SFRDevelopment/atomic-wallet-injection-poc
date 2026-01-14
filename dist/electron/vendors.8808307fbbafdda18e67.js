(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [290],
  {
    10989: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = function () {
        var e = new Array(128),
          t = String.fromCodePoint || String.fromCharCode,
          r = [];
        return function (i) {
          var n,
            s,
            o = i.length;
          r.length = 0;
          for (var a = 0; a < o; )
            ((s = i[a++]),
              s <= 127
                ? (n = s)
                : s <= 223
                  ? (n = ((31 & s) << 6) | (63 & i[a++]))
                  : s <= 239
                    ? (n =
                        ((15 & s) << 12) | ((63 & i[a++]) << 6) | (63 & i[a++]))
                    : String.fromCodePoint
                      ? (n =
                          ((7 & s) << 18) |
                          ((63 & i[a++]) << 12) |
                          ((63 & i[a++]) << 6) |
                          (63 & i[a++]))
                      : ((n = 63), (a += 3)),
              r.push(e[n] || (e[n] = t(n))));
          return r.join("");
        };
      };
      t.Utf8ArrayToStr = i();
    },
    10990: function (e, t, r) {
      "use strict";
      function i(e, t) {
        return new AnyOfClass(e, t);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          ((e["INTEGER"] = "integer"),
            (e["BOOLEAN"] = "boolean"),
            (e["STRING"] = "string"),
            (e["BINARY"] = "binary"));
        })(t.DATA_FIELD_TYPE || (t.DATA_FIELD_TYPE = {})),
        (t.anyOf = i));
      class AnyOfClass {
        constructor(e, t) {
          ((this._items = e),
            (this.type = "anyOf"),
            (this.discriminatorField = "type"),
            (this.discriminatorBytePos = 0),
            Object.assign(this, t));
        }
        itemByKey(e) {
          const t = this._items.find((t) => {
            let [r, i, n] = t;
            return n === e || r == e;
          });
          return t && { schema: t[1], key: t[0], strKey: t[2] };
        }
        itemByByteKey(e) {
          const t = this._items.find((t) => {
            let [r, i] = t;
            return r === e;
          });
          return (
            t && { schema: t[1], key: t[0], strKey: t[2] || t[0].toString(10) }
          );
        }
      }
    },
    10991: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(5656),
        n = r(5655),
        s = r(4572);
      function o(e, r) {
        const { type: i, version: n } = t.parseHeader(e),
          o = s.getTransactionSchema(i, n);
        return t.parserFromSchema(o, r)(e).value;
      }
      function a(e, r) {
        return t.parserFromSchema(s.orderSchemaV2, r)(e).value;
      }
      ((t.parserFromSchema = (e, r) =>
        function (s, o) {
          void 0 === o && (o = 0);
          let a = o;
          if ("array" === e.type) {
            const h = [],
              { value: u, shift: c } = (e.fromBytes || i.P_SHORT)(s, o);
            return (
              (a += c),
              n.range(0, u).forEach((i) => {
                const n = t.parserFromSchema(e.items, r),
                  { value: o, shift: u } = n(s, a);
                (h.push(o), (a += u));
              }),
              { value: h, shift: a - o }
            );
          }
          if ("object" === e.type) {
            if (e.optional) {
              const e = 1 === s[a];
              if (((a += 1), !e)) return { value: void 0, shift: 1 };
            }
            if (e.withLength) {
              const t = e.withLength.fromBytes(s, a);
              a += t.shift;
            }
            const i = {};
            return (
              e.schema.forEach((e) => {
                const [n, o] = e,
                  h = t.parserFromSchema(o, r),
                  { value: u, shift: c } = h(s, a);
                ((a += c),
                  void 0 !== u &&
                    (Array.isArray(n) ? Object.assign(i, u) : (i[n] = u)));
              }),
              { value: i, shift: a - o }
            );
          }
          if ("anyOf" === e.type) {
            const n = (e.fromBytes || i.P_BYTE)(s, a + e.discriminatorBytePos);
            e.valueField && 0 === e.discriminatorBytePos && (a += n.shift);
            const h = e.itemByByteKey(n.value);
            if (null == h)
              throw new Error(
                "Failed to get schema for item with bytecode: " + n.value,
              );
            const u = t.parserFromSchema(h.schema, r),
              { value: c, shift: l } = u(s, a);
            return (
              (a += l),
              {
                value: e.valueField
                  ? { [e.discriminatorField]: h.strKey, [e.valueField]: c }
                  : c,
                shift: a - o,
              }
            );
          }
          if ("dataTxField" === e.type) {
            const n = i.byteToStringWithLength(s, a);
            a += n.shift;
            let o = i.P_BYTE(s, a);
            a += o.shift;
            const h = [...e.items].find((e, t) => t === o.value);
            if (!h)
              throw new Error(
                "Parser Error: Unknown dataTxField type: " + o.value,
              );
            const u = t.parserFromSchema(h[1], r),
              c = u(s, a);
            return {
              value: { value: c.value, key: n.value, type: h[0] },
              shift: c.shift + n.shift + o.shift,
            };
          }
          if ("primitive" === e.type || void 0 === e.type) {
            const t = e.fromBytes;
            let { value: n, shift: a } = t(s, o);
            return (t === i.P_LONG && r && (n = r(n)), { value: n, shift: a });
          }
          throw new Error("Parser Error: Unknown schema type: " + e.type);
        }),
        (t.parseHeader = (e) => {
          let t = 0,
            r = i.P_BYTE(e, t);
          ((t += r.shift),
            0 === r.value && ((r = i.P_BYTE(e, t)), (t += r.shift)));
          let n = i.P_BYTE(e, t);
          return { type: r.value, version: n.value };
        }),
        (t.parseTx = o),
        (t.parseOrder = a));
    },
    10992: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(5604),
        { parse: n, stringify: s } = i(),
        o = r(4572),
        a = r(4848),
        h = r(6809);
      function u(e, t) {
        return 0 === e.length
          ? t
          : "object" === typeof t
            ? u(e.slice(1), t[e[0]])
            : void 0;
      }
      const c = (e, t, r) => {
        function i(t, n) {
          if (null == n) return !1;
          if (0 === t.length && ("primitive" === n.type || void 0 === n.type))
            return n.toBytes === a.LONG;
          if ("object" === n.type) {
            const e = n.schema.find((e) => {
              let [r, i] = e;
              return r === t[0];
            });
            return i(t.slice(1), e && e[1]);
          }
          if ("array" === n.type) return i(t.slice(1), n.items);
          if ("dataTxField" === n.type) {
            if ("value" !== t[0]) return !1;
            const s = u(e.slice(0, e.length - 1), r),
              o = n.items.get(s.type);
            return i(t.slice(1), o);
          }
          if ("anyOf" === n.type) {
            const s = u(e.slice(0, e.length - 1), r),
              o = s[n.discriminatorField],
              a = n.itemByKey(o);
            return (
              !!a &&
              (null != n.valueField && e[e.length - 1] === n.valueField
                ? i(t.slice(1), a.schema)
                : i(t, a.schema))
            );
          }
          return !1;
        }
        return i(e, t);
      };
      function l(e, t) {
        const r = [],
          i = [];
        function n(i) {
          return "string" === typeof i && c(r, t, e)
            ? i
            : "boolean" === typeof i ||
                i instanceof Boolean ||
                null === i ||
                "number" === typeof i ||
                i instanceof Number ||
                "string" === typeof i ||
                i instanceof String ||
                i instanceof Date
              ? JSON.stringify(i)
              : Array.isArray(i)
                ? s(i)
                : i && "object" === typeof i
                  ? o(i)
                  : void 0;
        }
        function s(e) {
          let t = "[";
          const s = i.length;
          i[s] = e;
          for (let i = 0; i < e.length; i++) {
            let o = i + "",
              a = e[i];
            ("undefined" !== typeof a && "function" !== typeof a
              ? ((r[s] = o), (t += n(a)))
              : (t += "null"),
              i < e.length - 1 && (t += ","));
          }
          return ((i.length = s), (r.length = s), (t += "]"), t);
        }
        function o(e) {
          let t = !0,
            s = "{";
          const o = i.length;
          i[o] = e;
          for (let i in e)
            if (e.hasOwnProperty(i)) {
              let h = e[i];
              a(h) &&
                (t ? (t = !1) : (s += ","),
                (s += '"' + i + '":'),
                (r[o] = i),
                (s += n(h)));
            }
          return ((i.length = o), (r.length = o), (s += "}"), s);
        }
        function a(e) {
          return "undefined" !== typeof e && "function" !== typeof e;
        }
        return n(e) || "";
      }
      function f(e, t) {
        const r = n(e);
        return t ? h.convertTxLongFields(r, t) : r;
      }
      function y(e, t) {
        const { type: r, version: i } = e,
          n = o.getTransactionSchema(r, i),
          s = h.convertLongFields(e, n, void 0, t);
        return l(s, n);
      }
      function m(e, t) {
        const r = n(e),
          i = 2 === r.version ? o.orderSchemaV2 : o.orderSchemaV1;
        return t ? h.convertLongFields(r, i, t) : r;
      }
      function d(e, t) {
        const r = 2 === e.version ? o.orderSchemaV2 : o.orderSchemaV1,
          i = h.convertLongFields(e, r, void 0, t);
        return l(i, r);
      }
      ((t.stringifyWithSchema = l),
        (t.parseTx = f),
        (t.stringifyTx = y),
        (t.parseOrder = m),
        (t.stringifyOrder = d));
    },
    2754: function (e, t) {
      e.exports = i;
      var r = null;
      try {
        r = new WebAssembly.Instance(
          new WebAssembly.Module(
            new Uint8Array([
              0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127,
              127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1,
              65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95,
              115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95,
              115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95,
              104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1,
              1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32,
              3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32,
              4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134,
              132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32,
              135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1,
              173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132,
              128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1,
              126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
              173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4,
              167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132,
              32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135,
              167, 36, 0, 32, 4, 167, 11,
            ]),
          ),
          {},
        ).exports;
      } catch (O) {}
      function i(e, t, r) {
        ((this.low = 0 | e), (this.high = 0 | t), (this.unsigned = !!r));
      }
      function n(e) {
        return !0 === (e && e["__isLong__"]);
      }
      (i.prototype.__isLong__,
        Object.defineProperty(i.prototype, "__isLong__", { value: !0 }),
        (i.isLong = n));
      var s = {},
        o = {};
      function a(e, t) {
        var r, i, n;
        return t
          ? ((e >>>= 0),
            (n = 0 <= e && e < 256) && ((i = o[e]), i)
              ? i
              : ((r = u(e, (0 | e) < 0 ? -1 : 0, !0)), n && (o[e] = r), r))
          : ((e |= 0),
            (n = -128 <= e && e < 128) && ((i = s[e]), i)
              ? i
              : ((r = u(e, e < 0 ? -1 : 0, !1)), n && (s[e] = r), r));
      }
      function h(e, t) {
        if (isNaN(e)) return t ? E : v;
        if (t) {
          if (e < 0) return E;
          if (e >= g) return _;
        } else {
          if (e <= -p) return I;
          if (e + 1 >= p) return B;
        }
        return e < 0 ? h(-e, t).neg() : u((e % d) | 0, (e / d) | 0, t);
      }
      function u(e, t, r) {
        return new i(e, t, r);
      }
      ((i.fromInt = a), (i.fromNumber = h), (i.fromBits = u));
      var c = Math.pow;
      function l(e, t, r) {
        if (0 === e.length) throw Error("empty string");
        if (
          "NaN" === e ||
          "Infinity" === e ||
          "+Infinity" === e ||
          "-Infinity" === e
        )
          return v;
        if (
          ("number" === typeof t ? ((r = t), (t = !1)) : (t = !!t),
          (r = r || 10),
          r < 2 || 36 < r)
        )
          throw RangeError("radix");
        var i;
        if ((i = e.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === i) return l(e.substring(1), t, r).neg();
        for (var n = h(c(r, 8)), s = v, o = 0; o < e.length; o += 8) {
          var a = Math.min(8, e.length - o),
            u = parseInt(e.substring(o, o + a), r);
          if (a < 8) {
            var f = h(c(r, a));
            s = s.mul(f).add(h(u));
          } else ((s = s.mul(n)), (s = s.add(h(u))));
        }
        return ((s.unsigned = t), s);
      }
      function f(e, t) {
        return "number" === typeof e
          ? h(e, t)
          : "string" === typeof e
            ? l(e, t)
            : u(e.low, e.high, "boolean" === typeof t ? t : e.unsigned);
      }
      ((i.fromString = l), (i.fromValue = f));
      var y = 65536,
        m = 1 << 24,
        d = y * y,
        g = d * d,
        p = g / 2,
        S = a(m),
        v = a(0);
      i.ZERO = v;
      var E = a(0, !0);
      i.UZERO = E;
      var T = a(1);
      i.ONE = T;
      var b = a(1, !0);
      i.UONE = b;
      var A = a(-1);
      i.NEG_ONE = A;
      var B = u(-1, 2147483647, !1);
      i.MAX_VALUE = B;
      var _ = u(-1, -1, !0);
      i.MAX_UNSIGNED_VALUE = _;
      var I = u(0, -2147483648, !1);
      i.MIN_VALUE = I;
      var N = i.prototype;
      ((N.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
      }),
        (N.toNumber = function () {
          return this.unsigned
            ? (this.high >>> 0) * d + (this.low >>> 0)
            : this.high * d + (this.low >>> 0);
        }),
        (N.toString = function (e) {
          if (((e = e || 10), e < 2 || 36 < e)) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative()) {
            if (this.eq(I)) {
              var t = h(e),
                r = this.div(t),
                i = r.mul(t).sub(this);
              return r.toString(e) + i.toInt().toString(e);
            }
            return "-" + this.neg().toString(e);
          }
          var n = h(c(e, 6), this.unsigned),
            s = this,
            o = "";
          while (1) {
            var a = s.div(n),
              u = s.sub(a.mul(n)).toInt() >>> 0,
              l = u.toString(e);
            if (((s = a), s.isZero())) return l + o;
            while (l.length < 6) l = "0" + l;
            o = "" + l + o;
          }
        }),
        (N.getHighBits = function () {
          return this.high;
        }),
        (N.getHighBitsUnsigned = function () {
          return this.high >>> 0;
        }),
        (N.getLowBits = function () {
          return this.low;
        }),
        (N.getLowBitsUnsigned = function () {
          return this.low >>> 0;
        }),
        (N.getNumBitsAbs = function () {
          if (this.isNegative())
            return this.eq(I) ? 64 : this.neg().getNumBitsAbs();
          for (
            var e = 0 != this.high ? this.high : this.low, t = 31;
            t > 0;
            t--
          )
            if (0 != (e & (1 << t))) break;
          return 0 != this.high ? t + 33 : t + 1;
        }),
        (N.isZero = function () {
          return 0 === this.high && 0 === this.low;
        }),
        (N.eqz = N.isZero),
        (N.isNegative = function () {
          return !this.unsigned && this.high < 0;
        }),
        (N.isPositive = function () {
          return this.unsigned || this.high >= 0;
        }),
        (N.isOdd = function () {
          return 1 === (1 & this.low);
        }),
        (N.isEven = function () {
          return 0 === (1 & this.low);
        }),
        (N.equals = function (e) {
          return (
            n(e) || (e = f(e)),
            (this.unsigned === e.unsigned ||
              this.high >>> 31 !== 1 ||
              e.high >>> 31 !== 1) &&
              this.high === e.high &&
              this.low === e.low
          );
        }),
        (N.eq = N.equals),
        (N.notEquals = function (e) {
          return !this.eq(e);
        }),
        (N.neq = N.notEquals),
        (N.ne = N.notEquals),
        (N.lessThan = function (e) {
          return this.comp(e) < 0;
        }),
        (N.lt = N.lessThan),
        (N.lessThanOrEqual = function (e) {
          return this.comp(e) <= 0;
        }),
        (N.lte = N.lessThanOrEqual),
        (N.le = N.lessThanOrEqual),
        (N.greaterThan = function (e) {
          return this.comp(e) > 0;
        }),
        (N.gt = N.greaterThan),
        (N.greaterThanOrEqual = function (e) {
          return this.comp(e) >= 0;
        }),
        (N.gte = N.greaterThanOrEqual),
        (N.ge = N.greaterThanOrEqual),
        (N.compare = function (e) {
          if ((n(e) || (e = f(e)), this.eq(e))) return 0;
          var t = this.isNegative(),
            r = e.isNegative();
          return t && !r
            ? -1
            : !t && r
              ? 1
              : this.unsigned
                ? e.high >>> 0 > this.high >>> 0 ||
                  (e.high === this.high && e.low >>> 0 > this.low >>> 0)
                  ? -1
                  : 1
                : this.sub(e).isNegative()
                  ? -1
                  : 1;
        }),
        (N.comp = N.compare),
        (N.negate = function () {
          return !this.unsigned && this.eq(I) ? I : this.not().add(T);
        }),
        (N.neg = N.negate),
        (N.add = function (e) {
          n(e) || (e = f(e));
          var t = this.high >>> 16,
            r = 65535 & this.high,
            i = this.low >>> 16,
            s = 65535 & this.low,
            o = e.high >>> 16,
            a = 65535 & e.high,
            h = e.low >>> 16,
            c = 65535 & e.low,
            l = 0,
            y = 0,
            m = 0,
            d = 0;
          return (
            (d += s + c),
            (m += d >>> 16),
            (d &= 65535),
            (m += i + h),
            (y += m >>> 16),
            (m &= 65535),
            (y += r + a),
            (l += y >>> 16),
            (y &= 65535),
            (l += t + o),
            (l &= 65535),
            u((m << 16) | d, (l << 16) | y, this.unsigned)
          );
        }),
        (N.subtract = function (e) {
          return (n(e) || (e = f(e)), this.add(e.neg()));
        }),
        (N.sub = N.subtract),
        (N.multiply = function (e) {
          if (this.isZero()) return v;
          if ((n(e) || (e = f(e)), r)) {
            var t = r.mul(this.low, this.high, e.low, e.high);
            return u(t, r.get_high(), this.unsigned);
          }
          if (e.isZero()) return v;
          if (this.eq(I)) return e.isOdd() ? I : v;
          if (e.eq(I)) return this.isOdd() ? I : v;
          if (this.isNegative())
            return e.isNegative()
              ? this.neg().mul(e.neg())
              : this.neg().mul(e).neg();
          if (e.isNegative()) return this.mul(e.neg()).neg();
          if (this.lt(S) && e.lt(S))
            return h(this.toNumber() * e.toNumber(), this.unsigned);
          var i = this.high >>> 16,
            s = 65535 & this.high,
            o = this.low >>> 16,
            a = 65535 & this.low,
            c = e.high >>> 16,
            l = 65535 & e.high,
            y = e.low >>> 16,
            m = 65535 & e.low,
            d = 0,
            g = 0,
            p = 0,
            E = 0;
          return (
            (E += a * m),
            (p += E >>> 16),
            (E &= 65535),
            (p += o * m),
            (g += p >>> 16),
            (p &= 65535),
            (p += a * y),
            (g += p >>> 16),
            (p &= 65535),
            (g += s * m),
            (d += g >>> 16),
            (g &= 65535),
            (g += o * y),
            (d += g >>> 16),
            (g &= 65535),
            (g += a * l),
            (d += g >>> 16),
            (g &= 65535),
            (d += i * m + s * y + o * l + a * c),
            (d &= 65535),
            u((p << 16) | E, (d << 16) | g, this.unsigned)
          );
        }),
        (N.mul = N.multiply),
        (N.divide = function (e) {
          if ((n(e) || (e = f(e)), e.isZero())) throw Error("division by zero");
          if (r) {
            if (
              !this.unsigned &&
              -2147483648 === this.high &&
              -1 === e.low &&
              -1 === e.high
            )
              return this;
            var t = (this.unsigned ? r.div_u : r.div_s)(
              this.low,
              this.high,
              e.low,
              e.high,
            );
            return u(t, r.get_high(), this.unsigned);
          }
          if (this.isZero()) return this.unsigned ? E : v;
          var i, s, o;
          if (this.unsigned) {
            if ((e.unsigned || (e = e.toUnsigned()), e.gt(this))) return E;
            if (e.gt(this.shru(1))) return b;
            o = E;
          } else {
            if (this.eq(I)) {
              if (e.eq(T) || e.eq(A)) return I;
              if (e.eq(I)) return T;
              var a = this.shr(1);
              return (
                (i = a.div(e).shl(1)),
                i.eq(v)
                  ? e.isNegative()
                    ? T
                    : A
                  : ((s = this.sub(e.mul(i))), (o = i.add(s.div(e))), o)
              );
            }
            if (e.eq(I)) return this.unsigned ? E : v;
            if (this.isNegative())
              return e.isNegative()
                ? this.neg().div(e.neg())
                : this.neg().div(e).neg();
            if (e.isNegative()) return this.div(e.neg()).neg();
            o = v;
          }
          s = this;
          while (s.gte(e)) {
            i = Math.max(1, Math.floor(s.toNumber() / e.toNumber()));
            var l = Math.ceil(Math.log(i) / Math.LN2),
              y = l <= 48 ? 1 : c(2, l - 48),
              m = h(i),
              d = m.mul(e);
            while (d.isNegative() || d.gt(s))
              ((i -= y), (m = h(i, this.unsigned)), (d = m.mul(e)));
            (m.isZero() && (m = T), (o = o.add(m)), (s = s.sub(d)));
          }
          return o;
        }),
        (N.div = N.divide),
        (N.modulo = function (e) {
          if ((n(e) || (e = f(e)), r)) {
            var t = (this.unsigned ? r.rem_u : r.rem_s)(
              this.low,
              this.high,
              e.low,
              e.high,
            );
            return u(t, r.get_high(), this.unsigned);
          }
          return this.sub(this.div(e).mul(e));
        }),
        (N.mod = N.modulo),
        (N.rem = N.modulo),
        (N.not = function () {
          return u(~this.low, ~this.high, this.unsigned);
        }),
        (N.and = function (e) {
          return (
            n(e) || (e = f(e)),
            u(this.low & e.low, this.high & e.high, this.unsigned)
          );
        }),
        (N.or = function (e) {
          return (
            n(e) || (e = f(e)),
            u(this.low | e.low, this.high | e.high, this.unsigned)
          );
        }),
        (N.xor = function (e) {
          return (
            n(e) || (e = f(e)),
            u(this.low ^ e.low, this.high ^ e.high, this.unsigned)
          );
        }),
        (N.shiftLeft = function (e) {
          return (
            n(e) && (e = e.toInt()),
            0 === (e &= 63)
              ? this
              : e < 32
                ? u(
                    this.low << e,
                    (this.high << e) | (this.low >>> (32 - e)),
                    this.unsigned,
                  )
                : u(0, this.low << (e - 32), this.unsigned)
          );
        }),
        (N.shl = N.shiftLeft),
        (N.shiftRight = function (e) {
          return (
            n(e) && (e = e.toInt()),
            0 === (e &= 63)
              ? this
              : e < 32
                ? u(
                    (this.low >>> e) | (this.high << (32 - e)),
                    this.high >> e,
                    this.unsigned,
                  )
                : u(
                    this.high >> (e - 32),
                    this.high >= 0 ? 0 : -1,
                    this.unsigned,
                  )
          );
        }),
        (N.shr = N.shiftRight),
        (N.shiftRightUnsigned = function (e) {
          if ((n(e) && (e = e.toInt()), (e &= 63), 0 === e)) return this;
          var t = this.high;
          if (e < 32) {
            var r = this.low;
            return u((r >>> e) | (t << (32 - e)), t >>> e, this.unsigned);
          }
          return u(32 === e ? t : t >>> (e - 32), 0, this.unsigned);
        }),
        (N.shru = N.shiftRightUnsigned),
        (N.shr_u = N.shiftRightUnsigned),
        (N.toSigned = function () {
          return this.unsigned ? u(this.low, this.high, !1) : this;
        }),
        (N.toUnsigned = function () {
          return this.unsigned ? this : u(this.low, this.high, !0);
        }),
        (N.toBytes = function (e) {
          return e ? this.toBytesLE() : this.toBytesBE();
        }),
        (N.toBytesLE = function () {
          var e = this.high,
            t = this.low;
          return [
            255 & t,
            (t >>> 8) & 255,
            (t >>> 16) & 255,
            t >>> 24,
            255 & e,
            (e >>> 8) & 255,
            (e >>> 16) & 255,
            e >>> 24,
          ];
        }),
        (N.toBytesBE = function () {
          var e = this.high,
            t = this.low;
          return [
            e >>> 24,
            (e >>> 16) & 255,
            (e >>> 8) & 255,
            255 & e,
            t >>> 24,
            (t >>> 16) & 255,
            (t >>> 8) & 255,
            255 & t,
          ];
        }),
        (i.fromBytes = function (e, t, r) {
          return r ? i.fromBytesLE(e, t) : i.fromBytesBE(e, t);
        }),
        (i.fromBytesLE = function (e, t) {
          return new i(
            e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
            e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
            t,
          );
        }),
        (i.fromBytesBE = function (e, t) {
          return new i(
            (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
            (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
            t,
          );
        }));
    },
    4572: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(4848),
        n = r(5656),
        s = r(10990),
        o = r(6811);
      var a;
      (function (e) {
        ((e[(e["GENESIS"] = 1)] = "GENESIS"),
          (e[(e["PAYMENT"] = 2)] = "PAYMENT"),
          (e[(e["ISSUE"] = 3)] = "ISSUE"),
          (e[(e["TRANSFER"] = 4)] = "TRANSFER"),
          (e[(e["REISSUE"] = 5)] = "REISSUE"),
          (e[(e["BURN"] = 6)] = "BURN"),
          (e[(e["EXCHANGE"] = 7)] = "EXCHANGE"),
          (e[(e["LEASE"] = 8)] = "LEASE"),
          (e[(e["CANCEL_LEASE"] = 9)] = "CANCEL_LEASE"),
          (e[(e["ALIAS"] = 10)] = "ALIAS"),
          (e[(e["MASS_TRANSFER"] = 11)] = "MASS_TRANSFER"),
          (e[(e["DATA"] = 12)] = "DATA"),
          (e[(e["SET_SCRIPT"] = 13)] = "SET_SCRIPT"),
          (e[(e["SPONSORSHIP"] = 14)] = "SPONSORSHIP"),
          (e[(e["SET_ASSET_SCRIPT"] = 15)] = "SET_ASSET_SCRIPT"),
          (e[(e["INVOKE_SCRIPT"] = 16)] = "INVOKE_SCRIPT"));
      })((a = t.TRANSACTION_TYPE || (t.TRANSACTION_TYPE = {})));
      const h = { toBytes: i.SHORT, fromBytes: n.P_SHORT },
        u = { toBytes: i.INT, fromBytes: n.P_INT };
      var c;
      ((function (e) {
        ((e.longField = (e) => [e, { toBytes: i.LONG, fromBytes: n.P_LONG }]),
          (e.byteField = (e) => [e, { toBytes: i.BYTE, fromBytes: n.P_BYTE }]),
          (e.booleanField = (e) => [
            e,
            { toBytes: i.BOOL, fromBytes: n.P_BOOLEAN },
          ]),
          (e.stringField = (e) => [
            e,
            {
              toBytes: i.LEN(i.SHORT)(i.STRING),
              fromBytes: n.P_STRING_VAR(n.P_SHORT),
            },
          ]),
          (e.base58field32 = (e) => [
            e,
            { toBytes: i.BASE58_STRING, fromBytes: n.P_BASE58_FIXED(32) },
          ]),
          (e.base58Option32 = (e) => [
            e,
            {
              toBytes: (e) =>
                "WAVES" === e
                  ? i.OPTION(i.BASE58_STRING)(null)
                  : i.OPTION(i.BASE58_STRING)(e),
              fromBytes: n.P_OPTION(n.P_BASE58_FIXED(32)),
            },
          ]),
          (e.base64field = (e) => [
            e,
            {
              toBytes: i.LEN(i.SHORT)(i.BASE64_STRING),
              fromBytes: n.P_BASE64(n.P_SHORT),
            },
          ]),
          (e.byteConstant = (e) => [
            "noname",
            {
              toBytes: () => Uint8Array.from([e]),
              fromBytes: () => ({ value: void 0, shift: 1 }),
            },
          ]),
          (e.alias = [
            "alias",
            {
              toBytes: i.LEN(i.SHORT)(i.STRING),
              fromBytes: n.byteNewAliasToString,
            },
          ]),
          (e.amount = e.longField("amount")),
          (e.assetDescription = e.stringField("description")),
          (e.assetId = e.base58field32("assetId")),
          (e.assetName = e.stringField("name")),
          (e.attachment = [
            "attachment",
            {
              toBytes: i.LEN(i.SHORT)(i.BASE58_STRING),
              fromBytes: n.P_BASE58_VAR(n.P_SHORT),
            },
          ]),
          (e.chainId = e.byteField("chainId")),
          (e.decimals = e.byteField("decimals")),
          (e.fee = e.longField("fee")),
          (e.leaseAssetId = e.base58Option32("leaseAssetId")),
          (e.leaseId = e.base58field32("leaseId")),
          (e.optionalAssetId = e.base58Option32("assetId")),
          (e.quantity = e.longField("quantity")),
          (e.reissuable = e.booleanField("reissuable")),
          (e.recipient = [
            "recipient",
            { toBytes: i.ADDRESS_OR_ALIAS, fromBytes: n.byteToAddressOrAlias },
          ]),
          (e.script = [
            "script",
            { toBytes: i.SCRIPT, fromBytes: n.byteToScript },
          ]),
          (e.senderPublicKey = e.base58field32("senderPublicKey")),
          (e.signature = [
            "signature",
            { toBytes: i.BASE58_STRING, fromBytes: n.P_BASE58_FIXED(64) },
          ]),
          (e.timestamp = e.longField("timestamp")),
          (e.type = e.byteField("type")),
          (e.version = e.byteField("version")),
          (e.proofs = [
            "proofs",
            {
              type: "array",
              items: {
                toBytes: i.LEN(i.SHORT)(i.BASE58_STRING),
                fromBytes: n.P_BASE58_VAR(n.P_SHORT),
              },
            },
          ]));
        const t = { type: "object", schema: [e.recipient, e.amount] };
        e.transfers = ["transfers", { type: "array", items: t }];
        const r = {
          type: "dataTxField",
          items: new Map([
            [
              s.DATA_FIELD_TYPE.INTEGER,
              { toBytes: i.LONG, fromBytes: n.P_LONG },
            ],
            [
              s.DATA_FIELD_TYPE.BOOLEAN,
              { toBytes: i.BOOL, fromBytes: n.P_BOOLEAN },
            ],
            [
              s.DATA_FIELD_TYPE.BINARY,
              {
                toBytes: i.LEN(i.SHORT)(i.BASE64_STRING),
                fromBytes: n.P_BASE64(n.P_SHORT),
              },
            ],
            [
              s.DATA_FIELD_TYPE.STRING,
              {
                toBytes: i.LEN(i.SHORT)(i.STRING),
                fromBytes: n.P_STRING_VAR(n.P_SHORT),
              },
            ],
          ]),
        };
        e.data = ["data", { type: "array", items: r }];
        const o = [
            [0, { toBytes: i.LONG, fromBytes: n.P_LONG }, "integer"],
            [
              1,
              {
                toBytes: i.LEN(i.INT)(i.BASE64_STRING),
                fromBytes: n.P_BASE64(n.P_INT),
              },
              "binary",
            ],
            [
              2,
              {
                toBytes: i.LEN(i.INT)(i.STRING),
                fromBytes: n.P_STRING_VAR(n.P_INT),
              },
              "string",
            ],
            [
              6,
              {
                toBytes: () => Uint8Array.from([]),
                fromBytes: () => ({ value: !0, shift: 0 }),
              },
              "boolean",
            ],
            [
              7,
              {
                toBytes: () => Uint8Array.from([]),
                fromBytes: () => ({ value: !1, shift: 0 }),
              },
              "boolean",
            ],
          ],
          a = s.anyOf(
            [
              ...o,
              [
                11,
                {
                  type: "array",
                  toBytes: i.INT,
                  fromBytes: n.P_INT,
                  items: s.anyOf(o, { valueField: "value" }),
                },
                "list",
              ],
            ],
            { valueField: "value" },
          );
        ((e.functionCall = [
          "call",
          {
            type: "object",
            optional: !0,
            schema: [
              e.byteConstant(9),
              e.byteConstant(1),
              [
                "function",
                {
                  toBytes: i.LEN(i.INT)(i.STRING),
                  fromBytes: n.P_STRING_VAR(n.P_INT),
                },
              ],
              [
                "args",
                { type: "array", toBytes: i.INT, fromBytes: n.P_INT, items: a },
              ],
            ],
          },
        ]),
          (e.payment = {
            type: "object",
            withLength: h,
            schema: [e.amount, e.optionalAssetId],
          }),
          (e.payments = ["payment", { type: "array", items: e.payment }]));
      })((c = t.txFields || (t.txFields = {}))),
        (t.orderSchemaV1 = {
          type: "object",
          schema: [
            c.senderPublicKey,
            c.base58field32("matcherPublicKey"),
            [
              "assetPair",
              {
                type: "object",
                schema: [
                  c.base58Option32("amountAsset"),
                  c.base58Option32("priceAsset"),
                ],
              },
            ],
            [
              "orderType",
              {
                toBytes: (e) => i.BYTE("sell" === e ? 1 : 0),
                fromBytes: function (e, t) {
                  return (
                    void 0 === t && (t = 0),
                    1 === n.P_BYTE(e, t).value
                      ? { value: "sell", shift: 1 }
                      : { value: "buy", shift: 1 }
                  );
                },
              },
            ],
            c.longField("price"),
            c.longField("amount"),
            c.timestamp,
            c.longField("expiration"),
            c.longField("matcherFee"),
          ],
        }),
        (t.orderSchemaV2 = {
          type: "object",
          schema: [c.version, ...t.orderSchemaV1.schema],
        }),
        (t.orderSchemaV3 = {
          type: "object",
          schema: [
            ...t.orderSchemaV2.schema,
            ["matcherFeeAssetId", c.optionalAssetId[1]],
          ],
        }),
        (t.aliasSchemaV2 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.senderPublicKey,
            [
              ["alias", "chainId"],
              {
                type: "object",
                withLength: h,
                schema: [c.byteConstant(2), c.chainId, c.alias],
              },
            ],
            c.fee,
            c.timestamp,
          ],
        }),
        (t.burnSchemaV2 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.chainId,
            c.senderPublicKey,
            c.assetId,
            c.amount,
            c.fee,
            c.timestamp,
          ],
        }),
        (t.cancelLeaseSchemaV2 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.chainId,
            c.senderPublicKey,
            c.fee,
            c.timestamp,
            c.leaseId,
          ],
        }),
        (t.invokeScriptSchemaV1 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.chainId,
            c.senderPublicKey,
            ["dApp", c.recipient[1]],
            c.functionCall,
            c.payments,
            c.fee,
            ["feeAssetId", c.optionalAssetId[1]],
            c.timestamp,
          ],
        }),
        (t.dataSchemaV1 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.senderPublicKey,
            c.data,
            c.timestamp,
            c.fee,
          ],
        }),
        (t.proofsSchemaV0 = {
          type: "object",
          schema: [
            [
              "signature",
              { toBytes: i.BASE58_STRING, fromBytes: n.P_BASE58_FIXED(64) },
            ],
          ],
        }),
        (t.proofsSchemaV1 = {
          type: "object",
          schema: [c.byteConstant(1), c.proofs],
        }));
      const l = {
        type: "object",
        schema: [...t.orderSchemaV1.schema, c.signature],
      };
      t.exchangeSchemaV1 = {
        type: "object",
        schema: [
          c.type,
          [
            "order1",
            {
              fromBytes: () => ({ value: void 0, shift: 4 }),
              toBytes: (e) => i.INT(o.serializerFromSchema(l)(e).length),
            },
          ],
          [
            "order2",
            {
              fromBytes: () => ({ value: void 0, shift: 4 }),
              toBytes: (e) => i.INT(o.serializerFromSchema(l)(e).length),
            },
          ],
          ["order1", l],
          ["order2", l],
          c.longField("price"),
          c.longField("amount"),
          c.longField("buyMatcherFee"),
          c.longField("sellMatcherFee"),
          c.longField("fee"),
          c.longField("timestamp"),
        ],
      };
      const f = s.anyOf(
        [
          [
            1,
            {
              type: "object",
              withLength: {
                toBytes: (e) => i.INT(e - 1),
                fromBytes: (e) => {
                  const { value: t, shift: r } = n.P_INT(e);
                  return { value: t + 1, shift: r };
                },
              },
              schema: [
                c.byteConstant(1),
                ...t.orderSchemaV1.schema,
                ...t.proofsSchemaV0.schema,
              ],
            },
          ],
          [
            2,
            {
              type: "object",
              withLength: u,
              schema: [...t.orderSchemaV2.schema, ...t.proofsSchemaV1.schema],
            },
          ],
        ],
        { discriminatorField: "version", discriminatorBytePos: 4 },
      );
      function y(e, r) {
        const i = t.schemasByTypeMap[e];
        if ("object" !== typeof i) throw new Error("Incorrect tx type: " + e);
        const n = i[r || 1];
        if ("object" !== typeof n)
          throw new Error("Incorrect tx version: " + r);
        return n;
      }
      ((t.exchangeSchemaV2 = {
        type: "object",
        schema: [
          c.byteConstant(0),
          c.type,
          c.version,
          ["order1", f],
          ["order2", f],
          c.longField("price"),
          c.longField("amount"),
          c.longField("buyMatcherFee"),
          c.longField("sellMatcherFee"),
          c.longField("fee"),
          c.longField("timestamp"),
        ],
      }),
        (t.issueSchemaV2 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.chainId,
            c.senderPublicKey,
            c.assetName,
            c.assetDescription,
            c.quantity,
            c.decimals,
            c.reissuable,
            c.fee,
            c.timestamp,
            c.script,
          ],
        }),
        (t.leaseSchemaV2 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.leaseAssetId,
            c.senderPublicKey,
            c.recipient,
            c.amount,
            c.fee,
            c.timestamp,
          ],
        }),
        (t.massTransferSchemaV1 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.senderPublicKey,
            c.optionalAssetId,
            c.transfers,
            c.timestamp,
            c.fee,
            c.attachment,
          ],
        }),
        (t.reissueSchemaV2 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.chainId,
            c.senderPublicKey,
            c.assetId,
            c.quantity,
            c.reissuable,
            c.fee,
            c.timestamp,
          ],
        }),
        (t.setAssetScriptSchemaV1 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.chainId,
            c.senderPublicKey,
            c.assetId,
            c.fee,
            c.timestamp,
            c.script,
          ],
        }),
        (t.setScriptSchemaV1 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.chainId,
            c.senderPublicKey,
            c.script,
            c.fee,
            c.timestamp,
          ],
        }),
        (t.sponsorshipSchemaV1 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.senderPublicKey,
            c.assetId,
            c.longField("minSponsoredAssetFee"),
            c.fee,
            c.timestamp,
          ],
        }),
        (t.transferSchemaV2 = {
          type: "object",
          schema: [
            c.type,
            c.version,
            c.senderPublicKey,
            c.optionalAssetId,
            ["feeAssetId", c.optionalAssetId[1]],
            c.timestamp,
            c.amount,
            c.fee,
            c.recipient,
            c.attachment,
          ],
        }),
        (t.schemasByTypeMap = {
          [a.GENESIS]: {},
          [a.PAYMENT]: {},
          [a.ISSUE]: { 2: t.issueSchemaV2 },
          [a.TRANSFER]: { 2: t.transferSchemaV2 },
          [a.REISSUE]: { 2: t.reissueSchemaV2 },
          [a.BURN]: { 2: t.burnSchemaV2 },
          [a.EXCHANGE]: { 1: t.exchangeSchemaV1, 2: t.exchangeSchemaV2 },
          [a.LEASE]: { 2: t.leaseSchemaV2 },
          [a.CANCEL_LEASE]: { 2: t.cancelLeaseSchemaV2 },
          [a.ALIAS]: { 2: t.aliasSchemaV2 },
          [a.MASS_TRANSFER]: { 1: t.massTransferSchemaV1 },
          [a.DATA]: { 1: t.dataSchemaV1 },
          [a.SET_SCRIPT]: { 1: t.setScriptSchemaV1 },
          [a.SPONSORSHIP]: { 1: t.sponsorshipSchemaV1 },
          [a.SET_ASSET_SCRIPT]: { 1: t.setAssetScriptSchemaV1 },
          [a.INVOKE_SCRIPT]: { 1: t.invokeScriptSchemaV1 },
        }),
        (t.orderVersionMap = {
          1: t.orderSchemaV1,
          2: t.orderSchemaV2,
          3: t.orderSchemaV3,
        }),
        (t.getTransactionSchema = y));
    },
    4848: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(6810),
        n = r(812),
        s = r(5655),
        o = r(2754),
        a = (e) =>
          Uint8Array.from(
            [...unescape(encodeURIComponent(e))].map((e) => e.charCodeAt(0)),
          );
      ((t.empty = Uint8Array.from([])),
        (t.zero = Uint8Array.from([0])),
        (t.one = Uint8Array.from([1])),
        (t.BASE58_STRING = (e) => i.default.decode(e)),
        (t.BASE64_STRING = (e) => n.toByteArray(e.replace("base64:", ""))),
        (t.STRING = (e) => (e ? a(e) : t.empty)),
        (t.BYTE = (e) => Uint8Array.from([e])),
        (t.BOOL = (e) => t.BYTE(1 == e ? 1 : 0)),
        (t.BYTES = (e) => Uint8Array.from(e)),
        (t.SHORT = (e) => {
          const t = o.fromNumber(e, !0);
          return Uint8Array.from(t.toBytesBE().slice(6));
        }),
        (t.INT = (e) => {
          const t = o.fromNumber(e, !0);
          return Uint8Array.from(t.toBytesBE().slice(4));
        }),
        (t.OPTION = (e) => (r) =>
          null == r || ("string" == typeof r && 0 == r.length)
            ? t.zero
            : s.concat(t.one, e(r))),
        (t.LEN = (e) => (t) => (r) => {
          const i = t(r),
            n = e(i.length);
          return s.concat(n, i);
        }),
        (t.COUNT = (e) => (t) => (r) => {
          const i = s.concat(...r.map((e) => t(e))),
            n = e(r.length);
          return s.concat(n, i);
        }),
        (t.LONG = (e) => {
          let t;
          if ("number" === typeof e) {
            if (e > Math.pow(2, 53) - 1)
              throw new Error(
                e +
                  " is too big to be precisely represented as js number. Use string instead",
              );
            t = o.fromNumber(e);
          } else t = o.fromString(e.toString());
          return Uint8Array.from(t.toBytesBE());
        }),
        (t.SCRIPT = (e) =>
          t.OPTION(t.LEN(t.SHORT)(t.BASE64_STRING))(e ? e.slice(7) : null)),
        (t.ALIAS = (e) => {
          const [r, i, n] = e.split(":");
          if (!i || 1 !== i.length)
            throw new Error("Invalid network byte in alias");
          if (!n || 0 === n.length) throw new Error("Invalid alias body");
          return s.concat([2], [i.charCodeAt(0)], t.LEN(t.SHORT)(t.STRING)(n));
        }),
        (t.ADDRESS_OR_ALIAS = (e) =>
          e.startsWith("alias") ? t.ALIAS(e) : t.BASE58_STRING(e)));
    },
    5604: function (e, t, r) {
      "use strict";
      var i = function (e) {
        var t = { strict: !1 };
        void 0 !== e && null !== e && !0 === e.strict && (t.strict = !0);
        var r,
          i,
          n,
          s,
          o = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "\t",
          },
          a = function (e) {
            throw { name: "SyntaxError", message: e, at: r, text: n };
          },
          h = function (e) {
            return (
              e && e !== i && a("Expected '" + e + "' instead of '" + i + "'"),
              (i = n.charAt(r)),
              (r += 1),
              i
            );
          },
          u = function () {
            var t,
              r = "";
            "-" === i && ((r = "-"), h("-"));
            while (i >= "0" && i <= "9") ((r += i), h());
            if ("." === i) {
              r += ".";
              while (h() && i >= "0" && i <= "9") r += i;
            }
            if ("e" === i || "E" === i) {
              ((r += i), h(), ("-" !== i && "+" !== i) || ((r += i), h()));
              while (i >= "0" && i <= "9") ((r += i), h());
            }
            return (
              (t = +r),
              e && e.parse
                ? e.parse(r)
                : isFinite(t)
                  ? r.length > 15
                    ? r
                    : t
                  : void a("Bad number")
            );
          },
          c = function () {
            var e,
              t,
              r,
              n = "";
            if ('"' === i)
              while (h()) {
                if ('"' === i) return (h(), n);
                if ("\\" === i)
                  if ((h(), "u" === i)) {
                    for (r = 0, t = 0; t < 4; t += 1) {
                      if (((e = parseInt(h(), 16)), !isFinite(e))) break;
                      r = 16 * r + e;
                    }
                    n += String.fromCharCode(r);
                  } else {
                    if ("string" !== typeof o[i]) break;
                    n += o[i];
                  }
                else n += i;
              }
            a("Bad string");
          },
          l = function () {
            while (i && i <= " ") h();
          },
          f = function () {
            switch (i) {
              case "t":
                return (h("t"), h("r"), h("u"), h("e"), !0);
              case "f":
                return (h("f"), h("a"), h("l"), h("s"), h("e"), !1);
              case "n":
                return (h("n"), h("u"), h("l"), h("l"), null);
            }
            a("Unexpected '" + i + "'");
          },
          y = function () {
            var e = [];
            if ("[" === i) {
              if ((h("["), l(), "]" === i)) return (h("]"), e);
              while (i) {
                if ((e.push(s()), l(), "]" === i)) return (h("]"), e);
                (h(","), l());
              }
            }
            a("Bad array");
          },
          m = function () {
            var e,
              r = {};
            if ("{" === i) {
              if ((h("{"), l(), "}" === i)) return (h("}"), r);
              while (i) {
                if (
                  ((e = c()),
                  l(),
                  h(":"),
                  !0 === t.strict &&
                    Object.hasOwnProperty.call(r, e) &&
                    a('Duplicate key "' + e + '"'),
                  (r[e] = s()),
                  l(),
                  "}" === i)
                )
                  return (h("}"), r);
                (h(","), l());
              }
            }
            a("Bad object");
          };
        s = function () {
          switch ((l(), i)) {
            case "{":
              return m();
            case "[":
              return y();
            case '"':
              return c();
            case "-":
              return u();
            default:
              return i >= "0" && i <= "9" ? u() : f();
          }
        };
        var d,
          g,
          p,
          S =
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
        function E(e) {
          return (
            (S.lastIndex = 0),
            S.test(e)
              ? '"' +
                e.replace(S, function (e) {
                  var t = v[e];
                  return "string" === typeof t
                    ? t
                    : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                }) +
                '"'
              : '"' + e + '"'
          );
        }
        function T(t, r) {
          var i,
            n,
            s,
            o,
            a,
            h = d,
            u = r[t],
            c = e && e.isInstance && e.isInstance(u);
          switch (
            (c && !u.isFinite() && (u = null),
            c
              ? (u = e.stringify(u))
              : u &&
                "object" === typeof u &&
                "function" === typeof u.toJSON &&
                (u = u.toJSON(t)),
            "function" === typeof p && (u = p.call(r, t, u)),
            typeof u)
          ) {
            case "string":
              return c ? u : E(u);
            case "number":
              return isFinite(u) ? String(u) : "null";
            case "boolean":
              return String(u);
            case "object":
              if (!u) return "null";
              if (
                ((d += g),
                (a = []),
                "[object Array]" === Object.prototype.toString.apply(u))
              ) {
                for (o = u.length, i = 0; i < o; i += 1)
                  a[i] = T(i, u) || "null";
                return (
                  (s =
                    0 === a.length
                      ? "[]"
                      : d
                        ? "[\n" + d + a.join(",\n" + d) + "\n" + h + "]"
                        : "[" + a.join(",") + "]"),
                  (d = h),
                  s
                );
              }
              if (p && "object" === typeof p)
                for (o = p.length, i = 0; i < o; i += 1)
                  "string" === typeof p[i] &&
                    ((n = p[i]),
                    (s = T(n, u)),
                    s && a.push(E(n) + (d ? ": " : ":") + s));
              else
                for (n in u)
                  Object.prototype.hasOwnProperty.call(u, n) &&
                    ((s = T(n, u)), s && a.push(E(n) + (d ? ": " : ":") + s));
              return (
                (s =
                  0 === a.length
                    ? "{}"
                    : d
                      ? "{\n" + d + a.join(",\n" + d) + "\n" + h + "}"
                      : "{" + a.join(",") + "}"),
                (d = h),
                s
              );
          }
        }
        var b = function (e, t, r) {
            var i;
            if (((d = ""), (g = ""), "number" === typeof r))
              for (i = 0; i < r; i += 1) g += " ";
            else "string" === typeof r && (g = r);
            if (
              ((p = t),
              t &&
                "function" !== typeof t &&
                ("object" !== typeof t || "number" !== typeof t.length))
            )
              throw new Error("JSON.stringify");
            return T("", { "": e });
          },
          A = function (e, t) {
            var o;
            return (
              (n = e + ""),
              (r = 0),
              (i = " "),
              (o = s()),
              l(),
              i && a("Syntax error"),
              "function" === typeof t
                ? (function e(r, i) {
                    var n,
                      s = r[i];
                    return (
                      s &&
                        "object" === typeof s &&
                        Object.keys(s).forEach(function (t) {
                          ((n = e(s, t)),
                            void 0 !== n ? (s[t] = n) : delete s[t]);
                        }),
                      t.call(r, i, s)
                    );
                  })({ "": o }, "")
                : o
            );
          };
        return { parse: A, stringify: b };
      };
      e.exports = i;
    },
    5655: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.concat = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.reduce(
            (e, t) => Uint8Array.from([...e, ...t]),
            new Uint8Array(0),
          );
        }),
        (t.range = function (e, t, r) {
          return (
            void 0 === r && (r = 1),
            Array.from({ length: t - e }).map((t, i) => i * r + e)
          );
        }));
    },
    5656: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2754),
        n = r(10989),
        s = r(6810),
        o = r(812);
      t.ALIAS_VERSION = 2;
      const a = 2;
      ((t.P_OPTION = (e) =>
        function (t, r) {
          if ((void 0 === r && (r = 0), 0 === t[r]))
            return { value: null, shift: 1 };
          const i = e(t, r + 1);
          return { value: i.value, shift: i.shift + 1 };
        }),
        (t.P_BYTE = function (e, t) {
          return (void 0 === t && (t = 0), { value: e[t], shift: 1 });
        }),
        (t.P_SHORT = function (e, t) {
          return (
            void 0 === t && (t = 0),
            { value: 256 * e[t] + e[t + 1], shift: 2 }
          );
        }),
        (t.P_INT = function (e, t) {
          return (
            void 0 === t && (t = 0),
            {
              value:
                Math.pow(2, 24) * e[t] +
                Math.pow(2, 16) * e[t + 1] +
                Math.pow(2, 8) * e[t + 2] +
                e[t + 3],
              shift: 4,
            }
          );
        }),
        (t.P_LONG = function (e, t) {
          return (
            void 0 === t && (t = 0),
            {
              value: i.fromBytesBE(Array.from(e.slice(t, t + 8))).toString(),
              shift: 8,
            }
          );
        }),
        (t.P_BOOLEAN = function (e, t) {
          void 0 === t && (t = 0);
          const r = !!e[t];
          return { value: r, shift: 1 };
        }),
        (t.P_STRING_FIXED = (e) =>
          function (t, r) {
            void 0 === r && (r = 0);
            const i = n.Utf8ArrayToStr(t.slice(r, r + e));
            return { shift: e, value: i };
          }),
        (t.P_STRING_VAR = (e) =>
          function (r, i) {
            void 0 === i && (i = 0);
            const n = e(r, i),
              { value: s } = t.P_STRING_FIXED(n.value)(r, i + n.shift);
            return { shift: n.value + n.shift, value: s };
          }),
        (t.P_BASE58_FIXED = (e) =>
          function (t, r) {
            void 0 === r && (r = 0);
            const i = s.default.encode(t.slice(r, r + e));
            return { value: i, shift: e };
          }),
        (t.P_BASE58_VAR = (e) =>
          function (r, i) {
            void 0 === i && (i = 0);
            const n = e(r, i),
              { value: s } = t.P_BASE58_FIXED(n.value)(r, i + a);
            return { shift: n.value + a, value: s };
          }),
        (t.P_BASE64 = (e) =>
          function (t, r) {
            void 0 === r && (r = 0);
            const i = e(t, r),
              n =
                "base64:" +
                o.fromByteArray(t.slice(r + i.shift, r + i.shift + i.value));
            return { shift: i.value + i.shift, value: n };
          }));
      const h = (e) => (t, r) => {
        const i = n.Utf8ArrayToStr(t.slice(r, r + e));
        return { shift: e, value: i };
      };
      ((t.byteToStringWithLength = function (e, r) {
        void 0 === r && (r = 0);
        const i = t.P_SHORT(e, r),
          { value: n } = h(i.value)(e, r + a);
        return { shift: i.value + a, value: n };
      }),
        (t.byteToBase58 = function (e, t, r) {
          void 0 === t && (t = 0);
          const i = r || 32,
            n = s.default.encode(e.slice(t, t + i));
          return { value: n, shift: i };
        }),
        (t.byteToBase58WithLength = function (e, r) {
          void 0 === r && (r = 0);
          const i = t.P_SHORT(e, r),
            n = s.default.encode(e.slice(r + i.shift, r + i.shift + i.value));
          return { value: n, shift: i.shift + i.value };
        }),
        (t.byteToAddressOrAlias = function (e, r) {
          if ((void 0 === r && (r = 0), e[r] === t.ALIAS_VERSION)) {
            const i = t.byteToStringWithLength(e, r + 2);
            return {
              shift: i.shift + 2,
              value: `alias:${String.fromCharCode(e[r + 1])}:${i.value}`,
            };
          }
          return t.byteToBase58(e, r, 26);
        }),
        (t.byteNewAliasToString = function (e, r) {
          void 0 === r && (r = 0);
          const i = t.P_SHORT(e, r).value + a,
            { value: n } = t.byteToStringWithLength(e, r);
          return { shift: i, value: n };
        }),
        (t.byteToScript = function (e, r) {
          void 0 === r && (r = 0);
          const i = 1;
          if (0 === e[r]) return { shift: i, value: null };
          const n = t.P_SHORT(e, r + i),
            s = r + i + n.shift,
            a = r + i + n.shift + n.value,
            h = "base64:" + o.fromByteArray(e.slice(s, a));
          return { value: h, shift: a - r };
        }));
    },
    6809: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(4572),
        n = r(6811),
        s = r(10991),
        o = r(10992);
      t.json = o;
      const a = r(4848);
      t.serializePrimitives = a;
      const h = r(5656);
      t.parsePrimitives = h;
      const u = r(4572);
      t.schemas = u;
      const c = {
        serializerFromSchema: n.serializerFromSchema,
        serializeTx: n.serializeTx,
        serializeOrder: n.serializeOrder,
        parserFromSchema: s.parserFromSchema,
        parseTx: s.parseTx,
        parseOrder: s.parseOrder,
      };
      function l(e, t, r, i) {
        const o = n.serializerFromSchema(t, i),
          a = s.parserFromSchema(t, r),
          h = a(o(e)).value;
        return Object.assign({}, e, h);
      }
      function f(e, t, r) {
        const { type: n, version: s } = e,
          o = i.getTransactionSchema(n, s);
        return l(e, o, t, r);
      }
      ((t.binary = c), (t.convertLongFields = l), (t.convertTxLongFields = f));
    },
    6810: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        n = i.split("").reduce((e, t, r) => ((e[t] = r), e), {});
      t.default = {
        encode(e) {
          if (!e.length) return "";
          const t = [0];
          for (let r = 0; r < e.length; r++) {
            for (let e = 0; e < t.length; e++) t[e] <<= 8;
            t[0] += e[r];
            let i = 0;
            for (let e = 0; e < t.length; e++)
              ((t[e] += i), (i = (t[e] / 58) | 0), (t[e] %= 58));
            while (i) (t.push(i % 58), (i = (i / 58) | 0));
          }
          for (let r = 0; 0 === e[r] && r < e.length - 1; r++) t.push(0);
          return t
            .reverse()
            .map(function (e) {
              return i[e];
            })
            .join("");
        },
        decode(e) {
          if (!e.length) return new Uint8Array(0);
          const t = [0];
          for (let r = 0; r < e.length; r++) {
            const i = e[r];
            if (!(i in n))
              throw new Error(
                `There is no character "${i}" in the Base58 sequence!`,
              );
            for (let e = 0; e < t.length; e++) t[e] *= 58;
            t[0] += n[i];
            let s = 0;
            for (let e = 0; e < t.length; e++)
              ((t[e] += s), (s = t[e] >> 8), (t[e] &= 255));
            while (s) (t.push(255 & s), (s >>= 8));
          }
          for (let r = 0; "1" === e[r] && r < e.length - 1; r++) t.push(0);
          return new Uint8Array(t.reverse());
        },
      };
    },
    6811: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(4848),
        n = r(5655),
        s = r(4572);
      function o(e, r) {
        const { type: i, version: n } = e,
          o = s.getTransactionSchema(i, n);
        return t.serializerFromSchema(o, r)(e);
      }
      function a(e, r) {
        const i = e.version || 1,
          n = s.orderVersionMap[i];
        if (null == n) throw new Error("Unknown order version: " + i);
        return t.serializerFromSchema(n, r)(e);
      }
      ((t.serializerFromSchema = (e, r) => (s) => {
        let o, a;
        if ("array" === e.type)
          return (
            (o = t.serializerFromSchema(e.items, r)),
            (a = n.concat(...s.map((e) => o(e)))),
            n.concat((e.toBytes || i.SHORT)(s.length), a)
          );
        if ("object" === e.type) {
          let i = Uint8Array.from([]);
          if (e.optional && null == s) return Uint8Array.from([0]);
          if (
            (e.schema.forEach((e) => {
              const [h, u] = e;
              let c;
              ((c = Array.isArray(h)
                ? h.reduce((e, t) => Object.assign({}, e, { [t]: s[t] }), {})
                : s[h]),
                (o = t.serializerFromSchema(u, r)),
                (a = o(c)),
                (i = n.concat(i, a)));
            }),
            e.withLength)
          ) {
            const t = e.withLength.toBytes(i.length);
            i = n.concat(t, i);
          }
          return (e.optional && (i = n.concat([1], i)), i);
        }
        if ("anyOf" === e.type) {
          const h = s[e.discriminatorField],
            u = e.itemByKey(h);
          if (null == u)
            throw new Error("Serializer Error: Unknown anyOf type: " + h);
          return (
            "boolean" === u.strKey &&
              6 === u.key &&
              !1 === s.value &&
              (u.key = 7),
            (o = t.serializerFromSchema(u.schema, r)),
            null == e.valueField
              ? o(s)
              : ((a = o(s[e.valueField])),
                n.concat((e.toBytes || i.BYTE)(u.key), a))
          );
        }
        if ("primitive" === e.type || void 0 === e.type) return e.toBytes(s);
        if ("dataTxField" === e.type) {
          const h = i.LEN(i.SHORT)(i.STRING)(s.key),
            u = s.type,
            c = e.items.get(u);
          if (null == c)
            throw new Error("Serializer Error: Unknown dataTxField type: " + u);
          const l = [...e.items.values()].findIndex((e) => e === c);
          return (
            (o = t.serializerFromSchema(c, r)),
            (a = o(s.value)),
            n.concat(h, i.BYTE(l), a)
          );
        }
        throw new Error("Serializer Error: Unknown schema type: " + e.type);
      }),
        (t.serializeTx = o),
        (t.serializeOrder = a));
    },
  },
]);
