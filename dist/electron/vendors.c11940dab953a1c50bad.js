(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [181],
  {
    2754: function (t, n) {
      t.exports = o;
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
      } catch (I) {}
      function o(t, n, r) {
        ((this.low = 0 | t), (this.high = 0 | n), (this.unsigned = !!r));
      }
      function i(t) {
        return !0 === (t && t["__isLong__"]);
      }
      (o.prototype.__isLong__,
        Object.defineProperty(o.prototype, "__isLong__", { value: !0 }),
        (o.isLong = i));
      var s = {},
        a = {};
      function u(t, n) {
        var r, o, i;
        return n
          ? ((t >>>= 0),
            (i = 0 <= t && t < 256) && ((o = a[t]), o)
              ? o
              : ((r = d(t, (0 | t) < 0 ? -1 : 0, !0)), i && (a[t] = r), r))
          : ((t |= 0),
            (i = -128 <= t && t < 128) && ((o = s[t]), o)
              ? o
              : ((r = d(t, t < 0 ? -1 : 0, !1)), i && (s[t] = r), r));
      }
      function c(t, n) {
        if (isNaN(t)) return n ? S : k;
        if (n) {
          if (t < 0) return S;
          if (t >= m) return N;
        } else {
          if (t <= -b) return _;
          if (t + 1 >= b) return A;
        }
        return t < 0 ? c(-t, n).neg() : d((t % g) | 0, (t / g) | 0, n);
      }
      function d(t, n, r) {
        return new o(t, n, r);
      }
      ((o.fromInt = u), (o.fromNumber = c), (o.fromBits = d));
      var l = Math.pow;
      function f(t, n, r) {
        if (0 === t.length) throw Error("empty string");
        if (
          "NaN" === t ||
          "Infinity" === t ||
          "+Infinity" === t ||
          "-Infinity" === t
        )
          return k;
        if (
          ("number" === typeof n ? ((r = n), (n = !1)) : (n = !!n),
          (r = r || 10),
          r < 2 || 36 < r)
        )
          throw RangeError("radix");
        var o;
        if ((o = t.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === o) return f(t.substring(1), n, r).neg();
        for (var i = c(l(r, 8)), s = k, a = 0; a < t.length; a += 8) {
          var u = Math.min(8, t.length - a),
            d = parseInt(t.substring(a, a + u), r);
          if (u < 8) {
            var h = c(l(r, u));
            s = s.mul(h).add(c(d));
          } else ((s = s.mul(i)), (s = s.add(c(d))));
        }
        return ((s.unsigned = n), s);
      }
      function h(t, n) {
        return "number" === typeof t
          ? c(t, n)
          : "string" === typeof t
            ? f(t, n)
            : d(t.low, t.high, "boolean" === typeof n ? n : t.unsigned);
      }
      ((o.fromString = f), (o.fromValue = h));
      var p = 65536,
        y = 1 << 24,
        g = p * p,
        m = g * g,
        b = m / 2,
        v = u(y),
        k = u(0);
      o.ZERO = k;
      var S = u(0, !0);
      o.UZERO = S;
      var w = u(1);
      o.ONE = w;
      var O = u(1, !0);
      o.UONE = O;
      var P = u(-1);
      o.NEG_ONE = P;
      var A = d(-1, 2147483647, !1);
      o.MAX_VALUE = A;
      var N = d(-1, -1, !0);
      o.MAX_UNSIGNED_VALUE = N;
      var _ = d(0, -2147483648, !1);
      o.MIN_VALUE = _;
      var E = o.prototype;
      ((E.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
      }),
        (E.toNumber = function () {
          return this.unsigned
            ? (this.high >>> 0) * g + (this.low >>> 0)
            : this.high * g + (this.low >>> 0);
        }),
        (E.toString = function (t) {
          if (((t = t || 10), t < 2 || 36 < t)) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative()) {
            if (this.eq(_)) {
              var n = c(t),
                r = this.div(n),
                o = r.mul(n).sub(this);
              return r.toString(t) + o.toInt().toString(t);
            }
            return "-" + this.neg().toString(t);
          }
          var i = c(l(t, 6), this.unsigned),
            s = this,
            a = "";
          while (1) {
            var u = s.div(i),
              d = s.sub(u.mul(i)).toInt() >>> 0,
              f = d.toString(t);
            if (((s = u), s.isZero())) return f + a;
            while (f.length < 6) f = "0" + f;
            a = "" + f + a;
          }
        }),
        (E.getHighBits = function () {
          return this.high;
        }),
        (E.getHighBitsUnsigned = function () {
          return this.high >>> 0;
        }),
        (E.getLowBits = function () {
          return this.low;
        }),
        (E.getLowBitsUnsigned = function () {
          return this.low >>> 0;
        }),
        (E.getNumBitsAbs = function () {
          if (this.isNegative())
            return this.eq(_) ? 64 : this.neg().getNumBitsAbs();
          for (
            var t = 0 != this.high ? this.high : this.low, n = 31;
            n > 0;
            n--
          )
            if (0 != (t & (1 << n))) break;
          return 0 != this.high ? n + 33 : n + 1;
        }),
        (E.isZero = function () {
          return 0 === this.high && 0 === this.low;
        }),
        (E.eqz = E.isZero),
        (E.isNegative = function () {
          return !this.unsigned && this.high < 0;
        }),
        (E.isPositive = function () {
          return this.unsigned || this.high >= 0;
        }),
        (E.isOdd = function () {
          return 1 === (1 & this.low);
        }),
        (E.isEven = function () {
          return 0 === (1 & this.low);
        }),
        (E.equals = function (t) {
          return (
            i(t) || (t = h(t)),
            (this.unsigned === t.unsigned ||
              this.high >>> 31 !== 1 ||
              t.high >>> 31 !== 1) &&
              this.high === t.high &&
              this.low === t.low
          );
        }),
        (E.eq = E.equals),
        (E.notEquals = function (t) {
          return !this.eq(t);
        }),
        (E.neq = E.notEquals),
        (E.ne = E.notEquals),
        (E.lessThan = function (t) {
          return this.comp(t) < 0;
        }),
        (E.lt = E.lessThan),
        (E.lessThanOrEqual = function (t) {
          return this.comp(t) <= 0;
        }),
        (E.lte = E.lessThanOrEqual),
        (E.le = E.lessThanOrEqual),
        (E.greaterThan = function (t) {
          return this.comp(t) > 0;
        }),
        (E.gt = E.greaterThan),
        (E.greaterThanOrEqual = function (t) {
          return this.comp(t) >= 0;
        }),
        (E.gte = E.greaterThanOrEqual),
        (E.ge = E.greaterThanOrEqual),
        (E.compare = function (t) {
          if ((i(t) || (t = h(t)), this.eq(t))) return 0;
          var n = this.isNegative(),
            r = t.isNegative();
          return n && !r
            ? -1
            : !n && r
              ? 1
              : this.unsigned
                ? t.high >>> 0 > this.high >>> 0 ||
                  (t.high === this.high && t.low >>> 0 > this.low >>> 0)
                  ? -1
                  : 1
                : this.sub(t).isNegative()
                  ? -1
                  : 1;
        }),
        (E.comp = E.compare),
        (E.negate = function () {
          return !this.unsigned && this.eq(_) ? _ : this.not().add(w);
        }),
        (E.neg = E.negate),
        (E.add = function (t) {
          i(t) || (t = h(t));
          var n = this.high >>> 16,
            r = 65535 & this.high,
            o = this.low >>> 16,
            s = 65535 & this.low,
            a = t.high >>> 16,
            u = 65535 & t.high,
            c = t.low >>> 16,
            l = 65535 & t.low,
            f = 0,
            p = 0,
            y = 0,
            g = 0;
          return (
            (g += s + l),
            (y += g >>> 16),
            (g &= 65535),
            (y += o + c),
            (p += y >>> 16),
            (y &= 65535),
            (p += r + u),
            (f += p >>> 16),
            (p &= 65535),
            (f += n + a),
            (f &= 65535),
            d((y << 16) | g, (f << 16) | p, this.unsigned)
          );
        }),
        (E.subtract = function (t) {
          return (i(t) || (t = h(t)), this.add(t.neg()));
        }),
        (E.sub = E.subtract),
        (E.multiply = function (t) {
          if (this.isZero()) return k;
          if ((i(t) || (t = h(t)), r)) {
            var n = r.mul(this.low, this.high, t.low, t.high);
            return d(n, r.get_high(), this.unsigned);
          }
          if (t.isZero()) return k;
          if (this.eq(_)) return t.isOdd() ? _ : k;
          if (t.eq(_)) return this.isOdd() ? _ : k;
          if (this.isNegative())
            return t.isNegative()
              ? this.neg().mul(t.neg())
              : this.neg().mul(t).neg();
          if (t.isNegative()) return this.mul(t.neg()).neg();
          if (this.lt(v) && t.lt(v))
            return c(this.toNumber() * t.toNumber(), this.unsigned);
          var o = this.high >>> 16,
            s = 65535 & this.high,
            a = this.low >>> 16,
            u = 65535 & this.low,
            l = t.high >>> 16,
            f = 65535 & t.high,
            p = t.low >>> 16,
            y = 65535 & t.low,
            g = 0,
            m = 0,
            b = 0,
            S = 0;
          return (
            (S += u * y),
            (b += S >>> 16),
            (S &= 65535),
            (b += a * y),
            (m += b >>> 16),
            (b &= 65535),
            (b += u * p),
            (m += b >>> 16),
            (b &= 65535),
            (m += s * y),
            (g += m >>> 16),
            (m &= 65535),
            (m += a * p),
            (g += m >>> 16),
            (m &= 65535),
            (m += u * f),
            (g += m >>> 16),
            (m &= 65535),
            (g += o * y + s * p + a * f + u * l),
            (g &= 65535),
            d((b << 16) | S, (g << 16) | m, this.unsigned)
          );
        }),
        (E.mul = E.multiply),
        (E.divide = function (t) {
          if ((i(t) || (t = h(t)), t.isZero())) throw Error("division by zero");
          if (r) {
            if (
              !this.unsigned &&
              -2147483648 === this.high &&
              -1 === t.low &&
              -1 === t.high
            )
              return this;
            var n = (this.unsigned ? r.div_u : r.div_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return d(n, r.get_high(), this.unsigned);
          }
          if (this.isZero()) return this.unsigned ? S : k;
          var o, s, a;
          if (this.unsigned) {
            if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return S;
            if (t.gt(this.shru(1))) return O;
            a = S;
          } else {
            if (this.eq(_)) {
              if (t.eq(w) || t.eq(P)) return _;
              if (t.eq(_)) return w;
              var u = this.shr(1);
              return (
                (o = u.div(t).shl(1)),
                o.eq(k)
                  ? t.isNegative()
                    ? w
                    : P
                  : ((s = this.sub(t.mul(o))), (a = o.add(s.div(t))), a)
              );
            }
            if (t.eq(_)) return this.unsigned ? S : k;
            if (this.isNegative())
              return t.isNegative()
                ? this.neg().div(t.neg())
                : this.neg().div(t).neg();
            if (t.isNegative()) return this.div(t.neg()).neg();
            a = k;
          }
          s = this;
          while (s.gte(t)) {
            o = Math.max(1, Math.floor(s.toNumber() / t.toNumber()));
            var f = Math.ceil(Math.log(o) / Math.LN2),
              p = f <= 48 ? 1 : l(2, f - 48),
              y = c(o),
              g = y.mul(t);
            while (g.isNegative() || g.gt(s))
              ((o -= p), (y = c(o, this.unsigned)), (g = y.mul(t)));
            (y.isZero() && (y = w), (a = a.add(y)), (s = s.sub(g)));
          }
          return a;
        }),
        (E.div = E.divide),
        (E.modulo = function (t) {
          if ((i(t) || (t = h(t)), r)) {
            var n = (this.unsigned ? r.rem_u : r.rem_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return d(n, r.get_high(), this.unsigned);
          }
          return this.sub(this.div(t).mul(t));
        }),
        (E.mod = E.modulo),
        (E.rem = E.modulo),
        (E.not = function () {
          return d(~this.low, ~this.high, this.unsigned);
        }),
        (E.and = function (t) {
          return (
            i(t) || (t = h(t)),
            d(this.low & t.low, this.high & t.high, this.unsigned)
          );
        }),
        (E.or = function (t) {
          return (
            i(t) || (t = h(t)),
            d(this.low | t.low, this.high | t.high, this.unsigned)
          );
        }),
        (E.xor = function (t) {
          return (
            i(t) || (t = h(t)),
            d(this.low ^ t.low, this.high ^ t.high, this.unsigned)
          );
        }),
        (E.shiftLeft = function (t) {
          return (
            i(t) && (t = t.toInt()),
            0 === (t &= 63)
              ? this
              : t < 32
                ? d(
                    this.low << t,
                    (this.high << t) | (this.low >>> (32 - t)),
                    this.unsigned,
                  )
                : d(0, this.low << (t - 32), this.unsigned)
          );
        }),
        (E.shl = E.shiftLeft),
        (E.shiftRight = function (t) {
          return (
            i(t) && (t = t.toInt()),
            0 === (t &= 63)
              ? this
              : t < 32
                ? d(
                    (this.low >>> t) | (this.high << (32 - t)),
                    this.high >> t,
                    this.unsigned,
                  )
                : d(
                    this.high >> (t - 32),
                    this.high >= 0 ? 0 : -1,
                    this.unsigned,
                  )
          );
        }),
        (E.shr = E.shiftRight),
        (E.shiftRightUnsigned = function (t) {
          if ((i(t) && (t = t.toInt()), (t &= 63), 0 === t)) return this;
          var n = this.high;
          if (t < 32) {
            var r = this.low;
            return d((r >>> t) | (n << (32 - t)), n >>> t, this.unsigned);
          }
          return d(32 === t ? n : n >>> (t - 32), 0, this.unsigned);
        }),
        (E.shru = E.shiftRightUnsigned),
        (E.shr_u = E.shiftRightUnsigned),
        (E.toSigned = function () {
          return this.unsigned ? d(this.low, this.high, !1) : this;
        }),
        (E.toUnsigned = function () {
          return this.unsigned ? this : d(this.low, this.high, !0);
        }),
        (E.toBytes = function (t) {
          return t ? this.toBytesLE() : this.toBytesBE();
        }),
        (E.toBytesLE = function () {
          var t = this.high,
            n = this.low;
          return [
            255 & n,
            (n >>> 8) & 255,
            (n >>> 16) & 255,
            n >>> 24,
            255 & t,
            (t >>> 8) & 255,
            (t >>> 16) & 255,
            t >>> 24,
          ];
        }),
        (E.toBytesBE = function () {
          var t = this.high,
            n = this.low;
          return [
            t >>> 24,
            (t >>> 16) & 255,
            (t >>> 8) & 255,
            255 & t,
            n >>> 24,
            (n >>> 16) & 255,
            (n >>> 8) & 255,
            255 & n,
          ];
        }),
        (o.fromBytes = function (t, n, r) {
          return r ? o.fromBytesLE(t, n) : o.fromBytesBE(t, n);
        }),
        (o.fromBytesLE = function (t, n) {
          return new o(
            t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
            t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
            n,
          );
        }),
        (o.fromBytesBE = function (t, n) {
          return new o(
            (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
            (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
            n,
          );
        }));
    },
    2755: function (t, n, r) {
      "use strict";
      t.exports = r(3094);
    },
    2781: function (t, n, r) {
      "use strict";
      (function (t) {
        var o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Any = n.protobufPackage = void 0));
        const i = o(r(2754)),
          s = o(r(2755));
        n.protobufPackage = "google.protobuf";
        const a = { typeUrl: "" };
        n.Any = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              "" !== t.typeUrl && n.uint32(10).string(t.typeUrl),
              0 !== t.value.length && n.uint32(18).bytes(t.value),
              n
            );
          },
          decode(t, n) {
            const r =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? r.len : r.pos + n;
            const i = Object.assign({}, a);
            i.value = new Uint8Array();
            while (r.pos < o) {
              const t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  i.typeUrl = r.string();
                  break;
                case 2:
                  i.value = r.bytes();
                  break;
                default:
                  r.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, a);
            return (
              (n.value = new Uint8Array()),
              void 0 !== t.typeUrl && null !== t.typeUrl
                ? (n.typeUrl = String(t.typeUrl))
                : (n.typeUrl = ""),
              void 0 !== t.value && null !== t.value && (n.value = d(t.value)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.typeUrl && (n.typeUrl = t.typeUrl),
              void 0 !== t.value &&
                (n.value = f(void 0 !== t.value ? t.value : new Uint8Array())),
              n
            );
          },
          fromPartial(t) {
            var n, r;
            const o = Object.assign({}, a);
            return (
              (o.typeUrl = null !== (n = t.typeUrl) && void 0 !== n ? n : ""),
              (o.value =
                null !== (r = t.value) && void 0 !== r ? r : new Uint8Array()),
              o
            );
          },
        };
        var u = (() => {
          if ("undefined" !== typeof u) return u;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const c =
          u.atob || ((t) => u.Buffer.from(t, "base64").toString("binary"));
        function d(t) {
          const n = c(t),
            r = new Uint8Array(n.length);
          for (let o = 0; o < n.length; ++o) r[o] = n.charCodeAt(o);
          return r;
        }
        const l =
          u.btoa || ((t) => u.Buffer.from(t, "binary").toString("base64"));
        function f(t) {
          const n = [];
          for (const r of t) n.push(String.fromCharCode(r));
          return l(n.join(""));
        }
        s.default.util.Long !== i.default &&
          ((s.default.util.Long = i.default), s.default.configure());
      }).call(this, r(13));
    },
    2791: function (t, n, r) {
      "use strict";
      (function (t) {
        var o = n;
        function i(t, n, r) {
          for (var o = Object.keys(n), i = 0; i < o.length; ++i)
            (void 0 !== t[o[i]] && r) || (t[o[i]] = n[o[i]]);
          return t;
        }
        function s(t) {
          function n(t, r) {
            if (!(this instanceof n)) return new n(t, r);
            (Object.defineProperty(this, "message", {
              get: function () {
                return t;
              },
            }),
              Error.captureStackTrace
                ? Error.captureStackTrace(this, n)
                : Object.defineProperty(this, "stack", {
                    value: new Error().stack || "",
                  }),
              r && i(this, r));
          }
          return (
            ((n.prototype = Object.create(Error.prototype)).constructor = n),
            Object.defineProperty(n.prototype, "name", {
              get: function () {
                return t;
              },
            }),
            (n.prototype.toString = function () {
              return this.name + ": " + this.message;
            }),
            n
          );
        }
        ((o.asPromise = r(3021)),
          (o.base64 = r(3022)),
          (o.EventEmitter = r(3023)),
          (o.float = r(3024)),
          (o.inquire = r(3025)),
          (o.utf8 = r(3026)),
          (o.pool = r(3027)),
          (o.LongBits = r(3095)),
          (o.isNode = Boolean(
            "undefined" !== typeof t &&
            t &&
            t.process &&
            t.process.versions &&
            t.process.versions.node,
          )),
          (o.global =
            (o.isNode && t) ||
            ("undefined" !== typeof window && window) ||
            ("undefined" !== typeof self && self) ||
            this),
          (o.emptyArray = Object.freeze ? Object.freeze([]) : []),
          (o.emptyObject = Object.freeze ? Object.freeze({}) : {}),
          (o.isInteger =
            Number.isInteger ||
            function (t) {
              return (
                "number" === typeof t && isFinite(t) && Math.floor(t) === t
              );
            }),
          (o.isString = function (t) {
            return "string" === typeof t || t instanceof String;
          }),
          (o.isObject = function (t) {
            return t && "object" === typeof t;
          }),
          (o.isset = o.isSet =
            function (t, n) {
              var r = t[n];
              return (
                !(null == r || !t.hasOwnProperty(n)) &&
                ("object" !== typeof r ||
                  (Array.isArray(r) ? r.length : Object.keys(r).length) > 0)
              );
            }),
          (o.Buffer = (function () {
            try {
              var t = o.inquire("buffer").Buffer;
              return t.prototype.utf8Write ? t : null;
            } catch (n) {
              return null;
            }
          })()),
          (o._Buffer_from = null),
          (o._Buffer_allocUnsafe = null),
          (o.newBuffer = function (t) {
            return "number" === typeof t
              ? o.Buffer
                ? o._Buffer_allocUnsafe(t)
                : new o.Array(t)
              : o.Buffer
                ? o._Buffer_from(t)
                : "undefined" === typeof Uint8Array
                  ? t
                  : new Uint8Array(t);
          }),
          (o.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array),
          (o.Long =
            (o.global.dcodeIO && o.global.dcodeIO.Long) ||
            o.global.Long ||
            o.inquire("long")),
          (o.key2Re = /^true|false|0|1$/),
          (o.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
          (o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
          (o.longToHash = function (t) {
            return t ? o.LongBits.from(t).toHash() : o.LongBits.zeroHash;
          }),
          (o.longFromHash = function (t, n) {
            var r = o.LongBits.fromHash(t);
            return o.Long
              ? o.Long.fromBits(r.lo, r.hi, n)
              : r.toNumber(Boolean(n));
          }),
          (o.merge = i),
          (o.lcFirst = function (t) {
            return t.charAt(0).toLowerCase() + t.substring(1);
          }),
          (o.newError = s),
          (o.ProtocolError = s("ProtocolError")),
          (o.oneOfGetter = function (t) {
            for (var n = {}, r = 0; r < t.length; ++r) n[t[r]] = 1;
            return function () {
              for (var t = Object.keys(this), r = t.length - 1; r > -1; --r)
                if (
                  1 === n[t[r]] &&
                  void 0 !== this[t[r]] &&
                  null !== this[t[r]]
                )
                  return t[r];
            };
          }),
          (o.oneOfSetter = function (t) {
            return function (n) {
              for (var r = 0; r < t.length; ++r)
                t[r] !== n && delete this[t[r]];
            };
          }),
          (o.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0,
          }),
          (o._configure = function () {
            var t = o.Buffer;
            t
              ? ((o._Buffer_from =
                  (t.from !== Uint8Array.from && t.from) ||
                  function (n, r) {
                    return new t(n, r);
                  }),
                (o._Buffer_allocUnsafe =
                  t.allocUnsafe ||
                  function (n) {
                    return new t(n);
                  }))
              : (o._Buffer_from = o._Buffer_allocUnsafe = null);
          }));
      }).call(this, r(13));
    },
    2801: function (t, n, r) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.DecProto =
          n.IntProto =
          n.DecCoin =
          n.Coin =
          n.protobufPackage =
            void 0));
      const i = o(r(2754)),
        s = o(r(2755));
      n.protobufPackage = "cosmos.base.v1beta1";
      const a = { denom: "", amount: "" };
      n.Coin = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.denom && n.uint32(10).string(t.denom),
            "" !== t.amount && n.uint32(18).string(t.amount),
            n
          );
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, a);
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              case 1:
                i.denom = r.string();
                break;
              case 2:
                i.amount = r.string();
                break;
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, a);
          return (
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = String(t.denom))
              : (n.denom = ""),
            void 0 !== t.amount && null !== t.amount
              ? (n.amount = String(t.amount))
              : (n.amount = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.denom && (n.denom = t.denom),
            void 0 !== t.amount && (n.amount = t.amount),
            n
          );
        },
        fromPartial(t) {
          var n, r;
          const o = Object.assign({}, a);
          return (
            (o.denom = null !== (n = t.denom) && void 0 !== n ? n : ""),
            (o.amount = null !== (r = t.amount) && void 0 !== r ? r : ""),
            o
          );
        },
      };
      const u = { denom: "", amount: "" };
      n.DecCoin = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.denom && n.uint32(10).string(t.denom),
            "" !== t.amount && n.uint32(18).string(t.amount),
            n
          );
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, u);
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              case 1:
                i.denom = r.string();
                break;
              case 2:
                i.amount = r.string();
                break;
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, u);
          return (
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = String(t.denom))
              : (n.denom = ""),
            void 0 !== t.amount && null !== t.amount
              ? (n.amount = String(t.amount))
              : (n.amount = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.denom && (n.denom = t.denom),
            void 0 !== t.amount && (n.amount = t.amount),
            n
          );
        },
        fromPartial(t) {
          var n, r;
          const o = Object.assign({}, u);
          return (
            (o.denom = null !== (n = t.denom) && void 0 !== n ? n : ""),
            (o.amount = null !== (r = t.amount) && void 0 !== r ? r : ""),
            o
          );
        },
      };
      const c = { int: "" };
      n.IntProto = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.int && n.uint32(10).string(t.int),
            n
          );
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, c);
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              case 1:
                i.int = r.string();
                break;
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, c);
          return (
            void 0 !== t.int && null !== t.int
              ? (n.int = String(t.int))
              : (n.int = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (void 0 !== t.int && (n.int = t.int), n);
        },
        fromPartial(t) {
          var n;
          const r = Object.assign({}, c);
          return ((r.int = null !== (n = t.int) && void 0 !== n ? n : ""), r);
        },
      };
      const d = { dec: "" };
      ((n.DecProto = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.dec && n.uint32(10).string(t.dec),
            n
          );
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, d);
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              case 1:
                i.dec = r.string();
                break;
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, d);
          return (
            void 0 !== t.dec && null !== t.dec
              ? (n.dec = String(t.dec))
              : (n.dec = ""),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (void 0 !== t.dec && (n.dec = t.dec), n);
        },
        fromPartial(t) {
          var n;
          const r = Object.assign({}, d);
          return ((r.dec = null !== (n = t.dec) && void 0 !== n ? n : ""), r);
        },
      }),
        s.default.util.Long !== i.default &&
          ((s.default.util.Long = i.default), s.default.configure()));
    },
    2910: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.executeKdf =
          n.serializeSignDoc =
          n.makeSignDoc =
          n.encodeSecp256k1Signature =
          n.decodeSignature =
          n.Secp256k1Wallet =
          n.Secp256k1HdWallet =
          n.extractKdfConfiguration =
          n.makeCosmoshubPath =
          n.createMultisigThresholdPubkey =
          n.pubkeyType =
          n.isSinglePubkey =
          n.isSecp256k1Pubkey =
          n.isEd25519Pubkey =
          n.isMultisigThresholdPubkey =
          n.encodeSecp256k1Pubkey =
          n.encodeBech32Pubkey =
          n.encodeAminoPubkey =
          n.decodeBech32Pubkey =
          n.decodeAminoPubkey =
          n.parseCoins =
          n.coins =
          n.coin =
          n.rawSecp256k1PubkeyToRawAddress =
          n.rawEd25519PubkeyToRawAddress =
          n.pubkeyToRawAddress =
          n.pubkeyToAddress =
            void 0));
      var o = r(2997);
      (Object.defineProperty(n, "pubkeyToAddress", {
        enumerable: !0,
        get: function () {
          return o.pubkeyToAddress;
        },
      }),
        Object.defineProperty(n, "pubkeyToRawAddress", {
          enumerable: !0,
          get: function () {
            return o.pubkeyToRawAddress;
          },
        }),
        Object.defineProperty(n, "rawEd25519PubkeyToRawAddress", {
          enumerable: !0,
          get: function () {
            return o.rawEd25519PubkeyToRawAddress;
          },
        }),
        Object.defineProperty(n, "rawSecp256k1PubkeyToRawAddress", {
          enumerable: !0,
          get: function () {
            return o.rawSecp256k1PubkeyToRawAddress;
          },
        }));
      var i = r(3778);
      (Object.defineProperty(n, "coin", {
        enumerable: !0,
        get: function () {
          return i.coin;
        },
      }),
        Object.defineProperty(n, "coins", {
          enumerable: !0,
          get: function () {
            return i.coins;
          },
        }),
        Object.defineProperty(n, "parseCoins", {
          enumerable: !0,
          get: function () {
            return i.parseCoins;
          },
        }));
      var s = r(3116);
      (Object.defineProperty(n, "decodeAminoPubkey", {
        enumerable: !0,
        get: function () {
          return s.decodeAminoPubkey;
        },
      }),
        Object.defineProperty(n, "decodeBech32Pubkey", {
          enumerable: !0,
          get: function () {
            return s.decodeBech32Pubkey;
          },
        }),
        Object.defineProperty(n, "encodeAminoPubkey", {
          enumerable: !0,
          get: function () {
            return s.encodeAminoPubkey;
          },
        }),
        Object.defineProperty(n, "encodeBech32Pubkey", {
          enumerable: !0,
          get: function () {
            return s.encodeBech32Pubkey;
          },
        }),
        Object.defineProperty(n, "encodeSecp256k1Pubkey", {
          enumerable: !0,
          get: function () {
            return s.encodeSecp256k1Pubkey;
          },
        }));
      var a = r(2998);
      (Object.defineProperty(n, "isMultisigThresholdPubkey", {
        enumerable: !0,
        get: function () {
          return a.isMultisigThresholdPubkey;
        },
      }),
        Object.defineProperty(n, "isEd25519Pubkey", {
          enumerable: !0,
          get: function () {
            return a.isEd25519Pubkey;
          },
        }),
        Object.defineProperty(n, "isSecp256k1Pubkey", {
          enumerable: !0,
          get: function () {
            return a.isSecp256k1Pubkey;
          },
        }),
        Object.defineProperty(n, "isSinglePubkey", {
          enumerable: !0,
          get: function () {
            return a.isSinglePubkey;
          },
        }),
        Object.defineProperty(n, "pubkeyType", {
          enumerable: !0,
          get: function () {
            return a.pubkeyType;
          },
        }));
      var u = r(3779);
      Object.defineProperty(n, "createMultisigThresholdPubkey", {
        enumerable: !0,
        get: function () {
          return u.createMultisigThresholdPubkey;
        },
      });
      var c = r(3320);
      Object.defineProperty(n, "makeCosmoshubPath", {
        enumerable: !0,
        get: function () {
          return c.makeCosmoshubPath;
        },
      });
      var d = r(3780);
      (Object.defineProperty(n, "extractKdfConfiguration", {
        enumerable: !0,
        get: function () {
          return d.extractKdfConfiguration;
        },
      }),
        Object.defineProperty(n, "Secp256k1HdWallet", {
          enumerable: !0,
          get: function () {
            return d.Secp256k1HdWallet;
          },
        }));
      var l = r(3781);
      Object.defineProperty(n, "Secp256k1Wallet", {
        enumerable: !0,
        get: function () {
          return l.Secp256k1Wallet;
        },
      });
      var f = r(3117);
      (Object.defineProperty(n, "decodeSignature", {
        enumerable: !0,
        get: function () {
          return f.decodeSignature;
        },
      }),
        Object.defineProperty(n, "encodeSecp256k1Signature", {
          enumerable: !0,
          get: function () {
            return f.encodeSecp256k1Signature;
          },
        }));
      var h = r(3118);
      (Object.defineProperty(n, "makeSignDoc", {
        enumerable: !0,
        get: function () {
          return h.makeSignDoc;
        },
      }),
        Object.defineProperty(n, "serializeSignDoc", {
          enumerable: !0,
          get: function () {
            return h.serializeSignDoc;
          },
        }));
      var p = r(3321);
      Object.defineProperty(n, "executeKdf", {
        enumerable: !0,
        get: function () {
          return p.executeKdf;
        },
      });
    },
    2937: function (t, n, r) {
      "use strict";
      (function (t) {
        var o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Fee =
            n.ModeInfo_Multi =
            n.ModeInfo_Single =
            n.ModeInfo =
            n.SignerInfo =
            n.AuthInfo =
            n.TxBody =
            n.SignDoc =
            n.TxRaw =
            n.Tx =
            n.protobufPackage =
              void 0));
        const i = o(r(2754)),
          s = o(r(2755)),
          a = r(2781),
          u = r(3063),
          c = r(3152),
          d = r(2801);
        n.protobufPackage = "cosmos.tx.v1beta1";
        const l = {};
        n.Tx = {
          encode(t, r) {
            (void 0 === r && (r = s.default.Writer.create()),
              void 0 !== t.body &&
                n.TxBody.encode(t.body, r.uint32(10).fork()).ldelim(),
              void 0 !== t.authInfo &&
                n.AuthInfo.encode(t.authInfo, r.uint32(18).fork()).ldelim());
            for (const n of t.signatures) r.uint32(26).bytes(n);
            return r;
          },
          decode(t, r) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === r ? o.len : o.pos + r;
            const a = Object.assign({}, l);
            a.signatures = [];
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  a.body = n.TxBody.decode(o, o.uint32());
                  break;
                case 2:
                  a.authInfo = n.AuthInfo.decode(o, o.uint32());
                  break;
                case 3:
                  a.signatures.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const r = Object.assign({}, l);
            if (
              ((r.signatures = []),
              void 0 !== t.body && null !== t.body
                ? (r.body = n.TxBody.fromJSON(t.body))
                : (r.body = void 0),
              void 0 !== t.authInfo && null !== t.authInfo
                ? (r.authInfo = n.AuthInfo.fromJSON(t.authInfo))
                : (r.authInfo = void 0),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const n of t.signatures) r.signatures.push(O(n));
            return r;
          },
          toJSON(t) {
            const r = {};
            return (
              void 0 !== t.body &&
                (r.body = t.body ? n.TxBody.toJSON(t.body) : void 0),
              void 0 !== t.authInfo &&
                (r.authInfo = t.authInfo
                  ? n.AuthInfo.toJSON(t.authInfo)
                  : void 0),
              t.signatures
                ? (r.signatures = t.signatures.map((t) =>
                    A(void 0 !== t ? t : new Uint8Array()),
                  ))
                : (r.signatures = []),
              r
            );
          },
          fromPartial(t) {
            const r = Object.assign({}, l);
            if (
              (void 0 !== t.body && null !== t.body
                ? (r.body = n.TxBody.fromPartial(t.body))
                : (r.body = void 0),
              void 0 !== t.authInfo && null !== t.authInfo
                ? (r.authInfo = n.AuthInfo.fromPartial(t.authInfo))
                : (r.authInfo = void 0),
              (r.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const n of t.signatures) r.signatures.push(n);
            return r;
          },
        };
        const f = {};
        n.TxRaw = {
          encode(t, n) {
            (void 0 === n && (n = s.default.Writer.create()),
              0 !== t.bodyBytes.length && n.uint32(10).bytes(t.bodyBytes),
              0 !== t.authInfoBytes.length &&
                n.uint32(18).bytes(t.authInfoBytes));
            for (const r of t.signatures) n.uint32(26).bytes(r);
            return n;
          },
          decode(t, n) {
            const r =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? r.len : r.pos + n;
            const i = Object.assign({}, f);
            ((i.signatures = []),
              (i.bodyBytes = new Uint8Array()),
              (i.authInfoBytes = new Uint8Array()));
            while (r.pos < o) {
              const t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  i.bodyBytes = r.bytes();
                  break;
                case 2:
                  i.authInfoBytes = r.bytes();
                  break;
                case 3:
                  i.signatures.push(r.bytes());
                  break;
                default:
                  r.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, f);
            if (
              ((n.signatures = []),
              (n.bodyBytes = new Uint8Array()),
              (n.authInfoBytes = new Uint8Array()),
              void 0 !== t.bodyBytes &&
                null !== t.bodyBytes &&
                (n.bodyBytes = O(t.bodyBytes)),
              void 0 !== t.authInfoBytes &&
                null !== t.authInfoBytes &&
                (n.authInfoBytes = O(t.authInfoBytes)),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const r of t.signatures) n.signatures.push(O(r));
            return n;
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.bodyBytes &&
                (n.bodyBytes = A(
                  void 0 !== t.bodyBytes ? t.bodyBytes : new Uint8Array(),
                )),
              void 0 !== t.authInfoBytes &&
                (n.authInfoBytes = A(
                  void 0 !== t.authInfoBytes
                    ? t.authInfoBytes
                    : new Uint8Array(),
                )),
              t.signatures
                ? (n.signatures = t.signatures.map((t) =>
                    A(void 0 !== t ? t : new Uint8Array()),
                  ))
                : (n.signatures = []),
              n
            );
          },
          fromPartial(t) {
            var n, r;
            const o = Object.assign({}, f);
            if (
              ((o.bodyBytes =
                null !== (n = t.bodyBytes) && void 0 !== n
                  ? n
                  : new Uint8Array()),
              (o.authInfoBytes =
                null !== (r = t.authInfoBytes) && void 0 !== r
                  ? r
                  : new Uint8Array()),
              (o.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const i of t.signatures) o.signatures.push(i);
            return o;
          },
        };
        const h = { chainId: "", accountNumber: i.default.UZERO };
        n.SignDoc = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== t.bodyBytes.length && n.uint32(10).bytes(t.bodyBytes),
              0 !== t.authInfoBytes.length &&
                n.uint32(18).bytes(t.authInfoBytes),
              "" !== t.chainId && n.uint32(26).string(t.chainId),
              t.accountNumber.isZero() || n.uint32(32).uint64(t.accountNumber),
              n
            );
          },
          decode(t, n) {
            const r =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? r.len : r.pos + n;
            const i = Object.assign({}, h);
            ((i.bodyBytes = new Uint8Array()),
              (i.authInfoBytes = new Uint8Array()));
            while (r.pos < o) {
              const t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  i.bodyBytes = r.bytes();
                  break;
                case 2:
                  i.authInfoBytes = r.bytes();
                  break;
                case 3:
                  i.chainId = r.string();
                  break;
                case 4:
                  i.accountNumber = r.uint64();
                  break;
                default:
                  r.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, h);
            return (
              (n.bodyBytes = new Uint8Array()),
              (n.authInfoBytes = new Uint8Array()),
              void 0 !== t.bodyBytes &&
                null !== t.bodyBytes &&
                (n.bodyBytes = O(t.bodyBytes)),
              void 0 !== t.authInfoBytes &&
                null !== t.authInfoBytes &&
                (n.authInfoBytes = O(t.authInfoBytes)),
              void 0 !== t.chainId && null !== t.chainId
                ? (n.chainId = String(t.chainId))
                : (n.chainId = ""),
              void 0 !== t.accountNumber && null !== t.accountNumber
                ? (n.accountNumber = i.default.fromString(t.accountNumber))
                : (n.accountNumber = i.default.UZERO),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.bodyBytes &&
                (n.bodyBytes = A(
                  void 0 !== t.bodyBytes ? t.bodyBytes : new Uint8Array(),
                )),
              void 0 !== t.authInfoBytes &&
                (n.authInfoBytes = A(
                  void 0 !== t.authInfoBytes
                    ? t.authInfoBytes
                    : new Uint8Array(),
                )),
              void 0 !== t.chainId && (n.chainId = t.chainId),
              void 0 !== t.accountNumber &&
                (n.accountNumber = (
                  t.accountNumber || i.default.UZERO
                ).toString()),
              n
            );
          },
          fromPartial(t) {
            var n, r, o;
            const s = Object.assign({}, h);
            return (
              (s.bodyBytes =
                null !== (n = t.bodyBytes) && void 0 !== n
                  ? n
                  : new Uint8Array()),
              (s.authInfoBytes =
                null !== (r = t.authInfoBytes) && void 0 !== r
                  ? r
                  : new Uint8Array()),
              (s.chainId = null !== (o = t.chainId) && void 0 !== o ? o : ""),
              void 0 !== t.accountNumber && null !== t.accountNumber
                ? (s.accountNumber = t.accountNumber)
                : (s.accountNumber = i.default.UZERO),
              s
            );
          },
        };
        const p = { memo: "", timeoutHeight: i.default.UZERO };
        n.TxBody = {
          encode(t, n) {
            void 0 === n && (n = s.default.Writer.create());
            for (const r of t.messages)
              a.Any.encode(r, n.uint32(10).fork()).ldelim();
            ("" !== t.memo && n.uint32(18).string(t.memo),
              t.timeoutHeight.isZero() || n.uint32(24).uint64(t.timeoutHeight));
            for (const r of t.extensionOptions)
              a.Any.encode(r, n.uint32(8186).fork()).ldelim();
            for (const r of t.nonCriticalExtensionOptions)
              a.Any.encode(r, n.uint32(16378).fork()).ldelim();
            return n;
          },
          decode(t, n) {
            const r =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? r.len : r.pos + n;
            const i = Object.assign({}, p);
            ((i.messages = []),
              (i.extensionOptions = []),
              (i.nonCriticalExtensionOptions = []));
            while (r.pos < o) {
              const t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  i.messages.push(a.Any.decode(r, r.uint32()));
                  break;
                case 2:
                  i.memo = r.string();
                  break;
                case 3:
                  i.timeoutHeight = r.uint64();
                  break;
                case 1023:
                  i.extensionOptions.push(a.Any.decode(r, r.uint32()));
                  break;
                case 2047:
                  i.nonCriticalExtensionOptions.push(
                    a.Any.decode(r, r.uint32()),
                  );
                  break;
                default:
                  r.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, p);
            if (
              ((n.messages = []),
              (n.extensionOptions = []),
              (n.nonCriticalExtensionOptions = []),
              void 0 !== t.messages && null !== t.messages)
            )
              for (const r of t.messages) n.messages.push(a.Any.fromJSON(r));
            if (
              (void 0 !== t.memo && null !== t.memo
                ? (n.memo = String(t.memo))
                : (n.memo = ""),
              void 0 !== t.timeoutHeight && null !== t.timeoutHeight
                ? (n.timeoutHeight = i.default.fromString(t.timeoutHeight))
                : (n.timeoutHeight = i.default.UZERO),
              void 0 !== t.extensionOptions && null !== t.extensionOptions)
            )
              for (const r of t.extensionOptions)
                n.extensionOptions.push(a.Any.fromJSON(r));
            if (
              void 0 !== t.nonCriticalExtensionOptions &&
              null !== t.nonCriticalExtensionOptions
            )
              for (const r of t.nonCriticalExtensionOptions)
                n.nonCriticalExtensionOptions.push(a.Any.fromJSON(r));
            return n;
          },
          toJSON(t) {
            const n = {};
            return (
              t.messages
                ? (n.messages = t.messages.map((t) =>
                    t ? a.Any.toJSON(t) : void 0,
                  ))
                : (n.messages = []),
              void 0 !== t.memo && (n.memo = t.memo),
              void 0 !== t.timeoutHeight &&
                (n.timeoutHeight = (
                  t.timeoutHeight || i.default.UZERO
                ).toString()),
              t.extensionOptions
                ? (n.extensionOptions = t.extensionOptions.map((t) =>
                    t ? a.Any.toJSON(t) : void 0,
                  ))
                : (n.extensionOptions = []),
              t.nonCriticalExtensionOptions
                ? (n.nonCriticalExtensionOptions =
                    t.nonCriticalExtensionOptions.map((t) =>
                      t ? a.Any.toJSON(t) : void 0,
                    ))
                : (n.nonCriticalExtensionOptions = []),
              n
            );
          },
          fromPartial(t) {
            var n;
            const r = Object.assign({}, p);
            if (
              ((r.messages = []), void 0 !== t.messages && null !== t.messages)
            )
              for (const o of t.messages) r.messages.push(a.Any.fromPartial(o));
            if (
              ((r.memo = null !== (n = t.memo) && void 0 !== n ? n : ""),
              void 0 !== t.timeoutHeight && null !== t.timeoutHeight
                ? (r.timeoutHeight = t.timeoutHeight)
                : (r.timeoutHeight = i.default.UZERO),
              (r.extensionOptions = []),
              void 0 !== t.extensionOptions && null !== t.extensionOptions)
            )
              for (const o of t.extensionOptions)
                r.extensionOptions.push(a.Any.fromPartial(o));
            if (
              ((r.nonCriticalExtensionOptions = []),
              void 0 !== t.nonCriticalExtensionOptions &&
                null !== t.nonCriticalExtensionOptions)
            )
              for (const o of t.nonCriticalExtensionOptions)
                r.nonCriticalExtensionOptions.push(a.Any.fromPartial(o));
            return r;
          },
        };
        const y = {};
        n.AuthInfo = {
          encode(t, r) {
            void 0 === r && (r = s.default.Writer.create());
            for (const o of t.signerInfos)
              n.SignerInfo.encode(o, r.uint32(10).fork()).ldelim();
            return (
              void 0 !== t.fee &&
                n.Fee.encode(t.fee, r.uint32(18).fork()).ldelim(),
              r
            );
          },
          decode(t, r) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === r ? o.len : o.pos + r;
            const a = Object.assign({}, y);
            a.signerInfos = [];
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  a.signerInfos.push(n.SignerInfo.decode(o, o.uint32()));
                  break;
                case 2:
                  a.fee = n.Fee.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const r = Object.assign({}, y);
            if (
              ((r.signerInfos = []),
              void 0 !== t.signerInfos && null !== t.signerInfos)
            )
              for (const o of t.signerInfos)
                r.signerInfos.push(n.SignerInfo.fromJSON(o));
            return (
              void 0 !== t.fee && null !== t.fee
                ? (r.fee = n.Fee.fromJSON(t.fee))
                : (r.fee = void 0),
              r
            );
          },
          toJSON(t) {
            const r = {};
            return (
              t.signerInfos
                ? (r.signerInfos = t.signerInfos.map((t) =>
                    t ? n.SignerInfo.toJSON(t) : void 0,
                  ))
                : (r.signerInfos = []),
              void 0 !== t.fee &&
                (r.fee = t.fee ? n.Fee.toJSON(t.fee) : void 0),
              r
            );
          },
          fromPartial(t) {
            const r = Object.assign({}, y);
            if (
              ((r.signerInfos = []),
              void 0 !== t.signerInfos && null !== t.signerInfos)
            )
              for (const o of t.signerInfos)
                r.signerInfos.push(n.SignerInfo.fromPartial(o));
            return (
              void 0 !== t.fee && null !== t.fee
                ? (r.fee = n.Fee.fromPartial(t.fee))
                : (r.fee = void 0),
              r
            );
          },
        };
        const g = { sequence: i.default.UZERO };
        n.SignerInfo = {
          encode(t, r) {
            return (
              void 0 === r && (r = s.default.Writer.create()),
              void 0 !== t.publicKey &&
                a.Any.encode(t.publicKey, r.uint32(10).fork()).ldelim(),
              void 0 !== t.modeInfo &&
                n.ModeInfo.encode(t.modeInfo, r.uint32(18).fork()).ldelim(),
              t.sequence.isZero() || r.uint32(24).uint64(t.sequence),
              r
            );
          },
          decode(t, r) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === r ? o.len : o.pos + r;
            const u = Object.assign({}, g);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  u.publicKey = a.Any.decode(o, o.uint32());
                  break;
                case 2:
                  u.modeInfo = n.ModeInfo.decode(o, o.uint32());
                  break;
                case 3:
                  u.sequence = o.uint64();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return u;
          },
          fromJSON(t) {
            const r = Object.assign({}, g);
            return (
              void 0 !== t.publicKey && null !== t.publicKey
                ? (r.publicKey = a.Any.fromJSON(t.publicKey))
                : (r.publicKey = void 0),
              void 0 !== t.modeInfo && null !== t.modeInfo
                ? (r.modeInfo = n.ModeInfo.fromJSON(t.modeInfo))
                : (r.modeInfo = void 0),
              void 0 !== t.sequence && null !== t.sequence
                ? (r.sequence = i.default.fromString(t.sequence))
                : (r.sequence = i.default.UZERO),
              r
            );
          },
          toJSON(t) {
            const r = {};
            return (
              void 0 !== t.publicKey &&
                (r.publicKey = t.publicKey
                  ? a.Any.toJSON(t.publicKey)
                  : void 0),
              void 0 !== t.modeInfo &&
                (r.modeInfo = t.modeInfo
                  ? n.ModeInfo.toJSON(t.modeInfo)
                  : void 0),
              void 0 !== t.sequence &&
                (r.sequence = (t.sequence || i.default.UZERO).toString()),
              r
            );
          },
          fromPartial(t) {
            const r = Object.assign({}, g);
            return (
              void 0 !== t.publicKey && null !== t.publicKey
                ? (r.publicKey = a.Any.fromPartial(t.publicKey))
                : (r.publicKey = void 0),
              void 0 !== t.modeInfo && null !== t.modeInfo
                ? (r.modeInfo = n.ModeInfo.fromPartial(t.modeInfo))
                : (r.modeInfo = void 0),
              void 0 !== t.sequence && null !== t.sequence
                ? (r.sequence = t.sequence)
                : (r.sequence = i.default.UZERO),
              r
            );
          },
        };
        const m = {};
        n.ModeInfo = {
          encode(t, r) {
            return (
              void 0 === r && (r = s.default.Writer.create()),
              void 0 !== t.single &&
                n.ModeInfo_Single.encode(
                  t.single,
                  r.uint32(10).fork(),
                ).ldelim(),
              void 0 !== t.multi &&
                n.ModeInfo_Multi.encode(t.multi, r.uint32(18).fork()).ldelim(),
              r
            );
          },
          decode(t, r) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === r ? o.len : o.pos + r;
            const a = Object.assign({}, m);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  a.single = n.ModeInfo_Single.decode(o, o.uint32());
                  break;
                case 2:
                  a.multi = n.ModeInfo_Multi.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const r = Object.assign({}, m);
            return (
              void 0 !== t.single && null !== t.single
                ? (r.single = n.ModeInfo_Single.fromJSON(t.single))
                : (r.single = void 0),
              void 0 !== t.multi && null !== t.multi
                ? (r.multi = n.ModeInfo_Multi.fromJSON(t.multi))
                : (r.multi = void 0),
              r
            );
          },
          toJSON(t) {
            const r = {};
            return (
              void 0 !== t.single &&
                (r.single = t.single
                  ? n.ModeInfo_Single.toJSON(t.single)
                  : void 0),
              void 0 !== t.multi &&
                (r.multi = t.multi ? n.ModeInfo_Multi.toJSON(t.multi) : void 0),
              r
            );
          },
          fromPartial(t) {
            const r = Object.assign({}, m);
            return (
              void 0 !== t.single && null !== t.single
                ? (r.single = n.ModeInfo_Single.fromPartial(t.single))
                : (r.single = void 0),
              void 0 !== t.multi && null !== t.multi
                ? (r.multi = n.ModeInfo_Multi.fromPartial(t.multi))
                : (r.multi = void 0),
              r
            );
          },
        };
        const b = { mode: 0 };
        n.ModeInfo_Single = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== t.mode && n.uint32(8).int32(t.mode),
              n
            );
          },
          decode(t, n) {
            const r =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? r.len : r.pos + n;
            const i = Object.assign({}, b);
            while (r.pos < o) {
              const t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  i.mode = r.int32();
                  break;
                default:
                  r.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, b);
            return (
              void 0 !== t.mode && null !== t.mode
                ? (n.mode = u.signModeFromJSON(t.mode))
                : (n.mode = 0),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.mode && (n.mode = u.signModeToJSON(t.mode)),
              n
            );
          },
          fromPartial(t) {
            var n;
            const r = Object.assign({}, b);
            return (
              (r.mode = null !== (n = t.mode) && void 0 !== n ? n : 0),
              r
            );
          },
        };
        const v = {};
        n.ModeInfo_Multi = {
          encode(t, r) {
            (void 0 === r && (r = s.default.Writer.create()),
              void 0 !== t.bitarray &&
                c.CompactBitArray.encode(
                  t.bitarray,
                  r.uint32(10).fork(),
                ).ldelim());
            for (const o of t.modeInfos)
              n.ModeInfo.encode(o, r.uint32(18).fork()).ldelim();
            return r;
          },
          decode(t, r) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === r ? o.len : o.pos + r;
            const a = Object.assign({}, v);
            a.modeInfos = [];
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  a.bitarray = c.CompactBitArray.decode(o, o.uint32());
                  break;
                case 2:
                  a.modeInfos.push(n.ModeInfo.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const r = Object.assign({}, v);
            if (
              ((r.modeInfos = []),
              void 0 !== t.bitarray && null !== t.bitarray
                ? (r.bitarray = c.CompactBitArray.fromJSON(t.bitarray))
                : (r.bitarray = void 0),
              void 0 !== t.modeInfos && null !== t.modeInfos)
            )
              for (const o of t.modeInfos)
                r.modeInfos.push(n.ModeInfo.fromJSON(o));
            return r;
          },
          toJSON(t) {
            const r = {};
            return (
              void 0 !== t.bitarray &&
                (r.bitarray = t.bitarray
                  ? c.CompactBitArray.toJSON(t.bitarray)
                  : void 0),
              t.modeInfos
                ? (r.modeInfos = t.modeInfos.map((t) =>
                    t ? n.ModeInfo.toJSON(t) : void 0,
                  ))
                : (r.modeInfos = []),
              r
            );
          },
          fromPartial(t) {
            const r = Object.assign({}, v);
            if (
              (void 0 !== t.bitarray && null !== t.bitarray
                ? (r.bitarray = c.CompactBitArray.fromPartial(t.bitarray))
                : (r.bitarray = void 0),
              (r.modeInfos = []),
              void 0 !== t.modeInfos && null !== t.modeInfos)
            )
              for (const o of t.modeInfos)
                r.modeInfos.push(n.ModeInfo.fromPartial(o));
            return r;
          },
        };
        const k = { gasLimit: i.default.UZERO, payer: "", granter: "" };
        n.Fee = {
          encode(t, n) {
            void 0 === n && (n = s.default.Writer.create());
            for (const r of t.amount)
              d.Coin.encode(r, n.uint32(10).fork()).ldelim();
            return (
              t.gasLimit.isZero() || n.uint32(16).uint64(t.gasLimit),
              "" !== t.payer && n.uint32(26).string(t.payer),
              "" !== t.granter && n.uint32(34).string(t.granter),
              n
            );
          },
          decode(t, n) {
            const r =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? r.len : r.pos + n;
            const i = Object.assign({}, k);
            i.amount = [];
            while (r.pos < o) {
              const t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  i.amount.push(d.Coin.decode(r, r.uint32()));
                  break;
                case 2:
                  i.gasLimit = r.uint64();
                  break;
                case 3:
                  i.payer = r.string();
                  break;
                case 4:
                  i.granter = r.string();
                  break;
                default:
                  r.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, k);
            if (((n.amount = []), void 0 !== t.amount && null !== t.amount))
              for (const r of t.amount) n.amount.push(d.Coin.fromJSON(r));
            return (
              void 0 !== t.gasLimit && null !== t.gasLimit
                ? (n.gasLimit = i.default.fromString(t.gasLimit))
                : (n.gasLimit = i.default.UZERO),
              void 0 !== t.payer && null !== t.payer
                ? (n.payer = String(t.payer))
                : (n.payer = ""),
              void 0 !== t.granter && null !== t.granter
                ? (n.granter = String(t.granter))
                : (n.granter = ""),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              t.amount
                ? (n.amount = t.amount.map((t) =>
                    t ? d.Coin.toJSON(t) : void 0,
                  ))
                : (n.amount = []),
              void 0 !== t.gasLimit &&
                (n.gasLimit = (t.gasLimit || i.default.UZERO).toString()),
              void 0 !== t.payer && (n.payer = t.payer),
              void 0 !== t.granter && (n.granter = t.granter),
              n
            );
          },
          fromPartial(t) {
            var n, r;
            const o = Object.assign({}, k);
            if (((o.amount = []), void 0 !== t.amount && null !== t.amount))
              for (const i of t.amount) o.amount.push(d.Coin.fromPartial(i));
            return (
              void 0 !== t.gasLimit && null !== t.gasLimit
                ? (o.gasLimit = t.gasLimit)
                : (o.gasLimit = i.default.UZERO),
              (o.payer = null !== (n = t.payer) && void 0 !== n ? n : ""),
              (o.granter = null !== (r = t.granter) && void 0 !== r ? r : ""),
              o
            );
          },
        };
        var S = (() => {
          if ("undefined" !== typeof S) return S;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const w =
          S.atob || ((t) => S.Buffer.from(t, "base64").toString("binary"));
        function O(t) {
          const n = w(t),
            r = new Uint8Array(n.length);
          for (let o = 0; o < n.length; ++o) r[o] = n.charCodeAt(o);
          return r;
        }
        const P =
          S.btoa || ((t) => S.Buffer.from(t, "binary").toString("base64"));
        function A(t) {
          const n = [];
          for (const r of t) n.push(String.fromCharCode(r));
          return P(n.join(""));
        }
        s.default.util.Long !== i.default &&
          ((s.default.util.Long = i.default), s.default.configure());
      }).call(this, r(13));
    },
    2951: function (t, n, r) {
      "use strict";
      t.exports = f;
      var o,
        i = r(2791),
        s = i.LongBits,
        a = i.base64,
        u = i.utf8;
      function c(t, n, r) {
        ((this.fn = t), (this.len = n), (this.next = void 0), (this.val = r));
      }
      function d() {}
      function l(t) {
        ((this.head = t.head),
          (this.tail = t.tail),
          (this.len = t.len),
          (this.next = t.states));
      }
      function f() {
        ((this.len = 0),
          (this.head = new c(d, 0, 0)),
          (this.tail = this.head),
          (this.states = null));
      }
      var h = function () {
        return i.Buffer
          ? function () {
              return (f.create = function () {
                return new o();
              })();
            }
          : function () {
              return new f();
            };
      };
      function p(t, n, r) {
        n[r] = 255 & t;
      }
      function y(t, n, r) {
        while (t > 127) ((n[r++] = (127 & t) | 128), (t >>>= 7));
        n[r] = t;
      }
      function g(t, n) {
        ((this.len = t), (this.next = void 0), (this.val = n));
      }
      function m(t, n, r) {
        while (t.hi)
          ((n[r++] = (127 & t.lo) | 128),
            (t.lo = ((t.lo >>> 7) | (t.hi << 25)) >>> 0),
            (t.hi >>>= 7));
        while (t.lo > 127) ((n[r++] = (127 & t.lo) | 128), (t.lo = t.lo >>> 7));
        n[r++] = t.lo;
      }
      function b(t, n, r) {
        ((n[r] = 255 & t),
          (n[r + 1] = (t >>> 8) & 255),
          (n[r + 2] = (t >>> 16) & 255),
          (n[r + 3] = t >>> 24));
      }
      ((f.create = h()),
        (f.alloc = function (t) {
          return new i.Array(t);
        }),
        i.Array !== Array &&
          (f.alloc = i.pool(f.alloc, i.Array.prototype.subarray)),
        (f.prototype._push = function (t, n, r) {
          return (
            (this.tail = this.tail.next = new c(t, n, r)),
            (this.len += n),
            this
          );
        }),
        (g.prototype = Object.create(c.prototype)),
        (g.prototype.fn = y),
        (f.prototype.uint32 = function (t) {
          return (
            (this.len += (this.tail = this.tail.next =
              new g(
                (t >>>= 0) < 128
                  ? 1
                  : t < 16384
                    ? 2
                    : t < 2097152
                      ? 3
                      : t < 268435456
                        ? 4
                        : 5,
                t,
              )).len),
            this
          );
        }),
        (f.prototype.int32 = function (t) {
          return t < 0 ? this._push(m, 10, s.fromNumber(t)) : this.uint32(t);
        }),
        (f.prototype.sint32 = function (t) {
          return this.uint32(((t << 1) ^ (t >> 31)) >>> 0);
        }),
        (f.prototype.uint64 = function (t) {
          var n = s.from(t);
          return this._push(m, n.length(), n);
        }),
        (f.prototype.int64 = f.prototype.uint64),
        (f.prototype.sint64 = function (t) {
          var n = s.from(t).zzEncode();
          return this._push(m, n.length(), n);
        }),
        (f.prototype.bool = function (t) {
          return this._push(p, 1, t ? 1 : 0);
        }),
        (f.prototype.fixed32 = function (t) {
          return this._push(b, 4, t >>> 0);
        }),
        (f.prototype.sfixed32 = f.prototype.fixed32),
        (f.prototype.fixed64 = function (t) {
          var n = s.from(t);
          return this._push(b, 4, n.lo)._push(b, 4, n.hi);
        }),
        (f.prototype.sfixed64 = f.prototype.fixed64),
        (f.prototype.float = function (t) {
          return this._push(i.float.writeFloatLE, 4, t);
        }),
        (f.prototype.double = function (t) {
          return this._push(i.float.writeDoubleLE, 8, t);
        }));
      var v = i.Array.prototype.set
        ? function (t, n, r) {
            n.set(t, r);
          }
        : function (t, n, r) {
            for (var o = 0; o < t.length; ++o) n[r + o] = t[o];
          };
      ((f.prototype.bytes = function (t) {
        var n = t.length >>> 0;
        if (!n) return this._push(p, 1, 0);
        if (i.isString(t)) {
          var r = f.alloc((n = a.length(t)));
          (a.decode(t, r, 0), (t = r));
        }
        return this.uint32(n)._push(v, n, t);
      }),
        (f.prototype.string = function (t) {
          var n = u.length(t);
          return n ? this.uint32(n)._push(u.write, n, t) : this._push(p, 1, 0);
        }),
        (f.prototype.fork = function () {
          return (
            (this.states = new l(this)),
            (this.head = this.tail = new c(d, 0, 0)),
            (this.len = 0),
            this
          );
        }),
        (f.prototype.reset = function () {
          return (
            this.states
              ? ((this.head = this.states.head),
                (this.tail = this.states.tail),
                (this.len = this.states.len),
                (this.states = this.states.next))
              : ((this.head = this.tail = new c(d, 0, 0)), (this.len = 0)),
            this
          );
        }),
        (f.prototype.ldelim = function () {
          var t = this.head,
            n = this.tail,
            r = this.len;
          return (
            this.reset().uint32(r),
            r && ((this.tail.next = t.next), (this.tail = n), (this.len += r)),
            this
          );
        }),
        (f.prototype.finish = function () {
          var t = this.head.next,
            n = this.constructor.alloc(this.len),
            r = 0;
          while (t) (t.fn(t.val, n, r), (r += t.len), (t = t.next));
          return n;
        }),
        (f._configure = function (t) {
          ((o = t), (f.create = h()), o._configure());
        }));
    },
    2952: function (t, n, r) {
      "use strict";
      t.exports = c;
      var o,
        i = r(2791),
        s = i.LongBits,
        a = i.utf8;
      function u(t, n) {
        return RangeError(
          "index out of range: " + t.pos + " + " + (n || 1) + " > " + t.len,
        );
      }
      function c(t) {
        ((this.buf = t), (this.pos = 0), (this.len = t.length));
      }
      var d =
          "undefined" !== typeof Uint8Array
            ? function (t) {
                if (t instanceof Uint8Array || Array.isArray(t))
                  return new c(t);
                throw Error("illegal buffer");
              }
            : function (t) {
                if (Array.isArray(t)) return new c(t);
                throw Error("illegal buffer");
              },
        l = function () {
          return i.Buffer
            ? function (t) {
                return (c.create = function (t) {
                  return i.Buffer.isBuffer(t) ? new o(t) : d(t);
                })(t);
              }
            : d;
        };
      function f() {
        var t = new s(0, 0),
          n = 0;
        if (!(this.len - this.pos > 4)) {
          for (; n < 3; ++n) {
            if (this.pos >= this.len) throw u(this);
            if (
              ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * n))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
          return (
            (t.lo = (t.lo | ((127 & this.buf[this.pos++]) << (7 * n))) >>> 0),
            t
          );
        }
        for (; n < 4; ++n)
          if (
            ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * n))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return t;
        if (
          ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
          (t.hi = (t.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return t;
        if (((n = 0), this.len - this.pos > 4)) {
          for (; n < 5; ++n)
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * n + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
        } else
          for (; n < 5; ++n) {
            if (this.pos >= this.len) throw u(this);
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * n + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
        throw Error("invalid varint encoding");
      }
      function h(t, n) {
        return (
          (t[n - 4] | (t[n - 3] << 8) | (t[n - 2] << 16) | (t[n - 1] << 24)) >>>
          0
        );
      }
      function p() {
        if (this.pos + 8 > this.len) throw u(this, 8);
        return new s(
          h(this.buf, (this.pos += 4)),
          h(this.buf, (this.pos += 4)),
        );
      }
      ((c.create = l()),
        (c.prototype._slice =
          i.Array.prototype.subarray || i.Array.prototype.slice),
        (c.prototype.uint32 = (function () {
          var t = 4294967295;
          return function () {
            if (
              ((t = (127 & this.buf[this.pos]) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((127 & this.buf[this.pos]) << 7)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((127 & this.buf[this.pos]) << 14)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((127 & this.buf[this.pos]) << 21)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((15 & this.buf[this.pos]) << 28)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if ((this.pos += 5) > this.len)
              throw ((this.pos = this.len), u(this, 10));
            return t;
          };
        })()),
        (c.prototype.int32 = function () {
          return 0 | this.uint32();
        }),
        (c.prototype.sint32 = function () {
          var t = this.uint32();
          return ((t >>> 1) ^ -(1 & t)) | 0;
        }),
        (c.prototype.bool = function () {
          return 0 !== this.uint32();
        }),
        (c.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) throw u(this, 4);
          return h(this.buf, (this.pos += 4));
        }),
        (c.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) throw u(this, 4);
          return 0 | h(this.buf, (this.pos += 4));
        }),
        (c.prototype.float = function () {
          if (this.pos + 4 > this.len) throw u(this, 4);
          var t = i.float.readFloatLE(this.buf, this.pos);
          return ((this.pos += 4), t);
        }),
        (c.prototype.double = function () {
          if (this.pos + 8 > this.len) throw u(this, 4);
          var t = i.float.readDoubleLE(this.buf, this.pos);
          return ((this.pos += 8), t);
        }),
        (c.prototype.bytes = function () {
          var t = this.uint32(),
            n = this.pos,
            r = this.pos + t;
          if (r > this.len) throw u(this, t);
          return (
            (this.pos += t),
            Array.isArray(this.buf)
              ? this.buf.slice(n, r)
              : n === r
                ? new this.buf.constructor(0)
                : this._slice.call(this.buf, n, r)
          );
        }),
        (c.prototype.string = function () {
          var t = this.bytes();
          return a.read(t, 0, t.length);
        }),
        (c.prototype.skip = function (t) {
          if ("number" === typeof t) {
            if (this.pos + t > this.len) throw u(this, t);
            this.pos += t;
          } else
            do {
              if (this.pos >= this.len) throw u(this);
            } while (128 & this.buf[this.pos++]);
          return this;
        }),
        (c.prototype.skipType = function (t) {
          switch (t) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              while (4 !== (t = 7 & this.uint32())) this.skipType(t);
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + t + " at offset " + this.pos);
          }
          return this;
        }),
        (c._configure = function (t) {
          ((o = t), (c.create = l()), o._configure());
          var n = i.Long ? "toLong" : "toNumber";
          i.merge(c.prototype, {
            int64: function () {
              return f.call(this)[n](!1);
            },
            uint64: function () {
              return f.call(this)[n](!0);
            },
            sint64: function () {
              return f.call(this).zzDecode()[n](!1);
            },
            fixed64: function () {
              return p.call(this)[n](!0);
            },
            sfixed64: function () {
              return p.call(this)[n](!1);
            },
          });
        }));
    },
    2968: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.executeKdf =
          n.makeSignDoc =
          n.makeSignBytes =
          n.makeAuthInfoBytes =
          n.isOfflineDirectSigner =
          n.encodePubkey =
          n.decodePubkey =
          n.makeCosmoshubPath =
          n.DirectSecp256k1Wallet =
          n.DirectSecp256k1HdWallet =
          n.extractKdfConfiguration =
          n.Registry =
          n.isTsProtoGeneratedType =
          n.isPbjsGeneratedType =
          n.isTxBodyEncodeObject =
          n.decodeTxRaw =
          n.parseCoins =
          n.coins =
          n.coin =
            void 0));
      var o = r(2910);
      (Object.defineProperty(n, "coin", {
        enumerable: !0,
        get: function () {
          return o.coin;
        },
      }),
        Object.defineProperty(n, "coins", {
          enumerable: !0,
          get: function () {
            return o.coins;
          },
        }));
      var i = r(3782);
      Object.defineProperty(n, "parseCoins", {
        enumerable: !0,
        get: function () {
          return i.parseCoins;
        },
      });
      var s = r(3783);
      Object.defineProperty(n, "decodeTxRaw", {
        enumerable: !0,
        get: function () {
          return s.decodeTxRaw;
        },
      });
      var a = r(3784);
      (Object.defineProperty(n, "isTxBodyEncodeObject", {
        enumerable: !0,
        get: function () {
          return a.isTxBodyEncodeObject;
        },
      }),
        Object.defineProperty(n, "isPbjsGeneratedType", {
          enumerable: !0,
          get: function () {
            return a.isPbjsGeneratedType;
          },
        }),
        Object.defineProperty(n, "isTsProtoGeneratedType", {
          enumerable: !0,
          get: function () {
            return a.isTsProtoGeneratedType;
          },
        }),
        Object.defineProperty(n, "Registry", {
          enumerable: !0,
          get: function () {
            return a.Registry;
          },
        }));
      var u = r(3785);
      (Object.defineProperty(n, "extractKdfConfiguration", {
        enumerable: !0,
        get: function () {
          return u.extractKdfConfiguration;
        },
      }),
        Object.defineProperty(n, "DirectSecp256k1HdWallet", {
          enumerable: !0,
          get: function () {
            return u.DirectSecp256k1HdWallet;
          },
        }));
      var c = r(3786);
      Object.defineProperty(n, "DirectSecp256k1Wallet", {
        enumerable: !0,
        get: function () {
          return c.DirectSecp256k1Wallet;
        },
      });
      var d = r(3787);
      Object.defineProperty(n, "makeCosmoshubPath", {
        enumerable: !0,
        get: function () {
          return d.makeCosmoshubPath;
        },
      });
      var l = r(3788);
      (Object.defineProperty(n, "decodePubkey", {
        enumerable: !0,
        get: function () {
          return l.decodePubkey;
        },
      }),
        Object.defineProperty(n, "encodePubkey", {
          enumerable: !0,
          get: function () {
            return l.encodePubkey;
          },
        }));
      var f = r(3791);
      Object.defineProperty(n, "isOfflineDirectSigner", {
        enumerable: !0,
        get: function () {
          return f.isOfflineDirectSigner;
        },
      });
      var h = r(3119);
      (Object.defineProperty(n, "makeAuthInfoBytes", {
        enumerable: !0,
        get: function () {
          return h.makeAuthInfoBytes;
        },
      }),
        Object.defineProperty(n, "makeSignBytes", {
          enumerable: !0,
          get: function () {
            return h.makeSignBytes;
          },
        }),
        Object.defineProperty(n, "makeSignDoc", {
          enumerable: !0,
          get: function () {
            return h.makeSignDoc;
          },
        }));
      var p = r(3322);
      Object.defineProperty(n, "executeKdf", {
        enumerable: !0,
        get: function () {
          return p.executeKdf;
        },
      });
    },
    2997: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.pubkeyToAddress =
          n.pubkeyToRawAddress =
          n.rawSecp256k1PubkeyToRawAddress =
          n.rawEd25519PubkeyToRawAddress =
            void 0));
      const o = r(2800),
        i = r(2762),
        s = r(3116),
        a = r(2998);
      function u(t) {
        if (32 !== t.length)
          throw new Error("Invalid Ed25519 pubkey length: " + t.length);
        return o.sha256(t).slice(0, 20);
      }
      function c(t) {
        if (33 !== t.length)
          throw new Error(
            "Invalid Secp256k1 pubkey length (compressed): " + t.length,
          );
        return o.ripemd160(o.sha256(t));
      }
      function d(t) {
        if (a.isSecp256k1Pubkey(t)) {
          const n = i.fromBase64(t.value);
          return c(n);
        }
        if (a.isEd25519Pubkey(t)) {
          const n = i.fromBase64(t.value);
          return u(n);
        }
        if (a.isMultisigThresholdPubkey(t)) {
          const n = s.encodeAminoPubkey(t);
          return o.sha256(n).slice(0, 20);
        }
        throw new Error("Unsupported public key type");
      }
      function l(t, n) {
        return i.Bech32.encode(n, d(t));
      }
      ((n.rawEd25519PubkeyToRawAddress = u),
        (n.rawSecp256k1PubkeyToRawAddress = c),
        (n.pubkeyToRawAddress = d),
        (n.pubkeyToAddress = l));
    },
    2998: function (t, n, r) {
      "use strict";
      function o(t) {
        return "tendermint/PubKeyEd25519" === t.type;
      }
      function i(t) {
        return "tendermint/PubKeySecp256k1" === t.type;
      }
      function s(t) {
        const r = [
          n.pubkeyType.ed25519,
          n.pubkeyType.secp256k1,
          n.pubkeyType.sr25519,
        ];
        return r.includes(t.type);
      }
      function a(t) {
        return "tendermint/PubKeyMultisigThreshold" === t.type;
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isMultisigThresholdPubkey =
          n.isSinglePubkey =
          n.pubkeyType =
          n.isSecp256k1Pubkey =
          n.isEd25519Pubkey =
            void 0),
        (n.isEd25519Pubkey = o),
        (n.isSecp256k1Pubkey = i),
        (n.pubkeyType = {
          secp256k1: "tendermint/PubKeySecp256k1",
          ed25519: "tendermint/PubKeyEd25519",
          sr25519: "tendermint/PubKeySr25519",
          multisigThreshold: "tendermint/PubKeyMultisigThreshold",
        }),
        (n.isSinglePubkey = s),
        (n.isMultisigThresholdPubkey = a));
    },
    3021: function (t, n, r) {
      "use strict";
      function o(t, n) {
        var r = new Array(arguments.length - 1),
          o = 0,
          i = 2,
          s = !0;
        while (i < arguments.length) r[o++] = arguments[i++];
        return new Promise(function (i, a) {
          r[o] = function (t) {
            if (s)
              if (((s = !1), t)) a(t);
              else {
                var n = new Array(arguments.length - 1),
                  r = 0;
                while (r < n.length) n[r++] = arguments[r];
                i.apply(null, n);
              }
          };
          try {
            t.apply(n || null, r);
          } catch (u) {
            s && ((s = !1), a(u));
          }
        });
      }
      t.exports = o;
    },
    3022: function (t, n, r) {
      "use strict";
      var o = n;
      o.length = function (t) {
        var n = t.length;
        if (!n) return 0;
        var r = 0;
        while (--n % 4 > 1 && "=" === t.charAt(n)) ++r;
        return Math.ceil(3 * t.length) / 4 - r;
      };
      for (var i = new Array(64), s = new Array(123), a = 0; a < 64; )
        s[
          (i[a] =
            a < 26 ? a + 65 : a < 52 ? a + 71 : a < 62 ? a - 4 : (a - 59) | 43)
        ] = a++;
      o.encode = function (t, n, r) {
        var o,
          s = null,
          a = [],
          u = 0,
          c = 0;
        while (n < r) {
          var d = t[n++];
          switch (c) {
            case 0:
              ((a[u++] = i[d >> 2]), (o = (3 & d) << 4), (c = 1));
              break;
            case 1:
              ((a[u++] = i[o | (d >> 4)]), (o = (15 & d) << 2), (c = 2));
              break;
            case 2:
              ((a[u++] = i[o | (d >> 6)]), (a[u++] = i[63 & d]), (c = 0));
              break;
          }
          u > 8191 &&
            ((s || (s = [])).push(String.fromCharCode.apply(String, a)),
            (u = 0));
        }
        return (
          c && ((a[u++] = i[o]), (a[u++] = 61), 1 === c && (a[u++] = 61)),
          s
            ? (u && s.push(String.fromCharCode.apply(String, a.slice(0, u))),
              s.join(""))
            : String.fromCharCode.apply(String, a.slice(0, u))
        );
      };
      var u = "invalid encoding";
      ((o.decode = function (t, n, r) {
        for (var o, i = r, a = 0, c = 0; c < t.length; ) {
          var d = t.charCodeAt(c++);
          if (61 === d && a > 1) break;
          if (void 0 === (d = s[d])) throw Error(u);
          switch (a) {
            case 0:
              ((o = d), (a = 1));
              break;
            case 1:
              ((n[r++] = (o << 2) | ((48 & d) >> 4)), (o = d), (a = 2));
              break;
            case 2:
              ((n[r++] = ((15 & o) << 4) | ((60 & d) >> 2)), (o = d), (a = 3));
              break;
            case 3:
              ((n[r++] = ((3 & o) << 6) | d), (a = 0));
              break;
          }
        }
        if (1 === a) throw Error(u);
        return r - i;
      }),
        (o.test = function (t) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            t,
          );
        }));
    },
    3023: function (t, n, r) {
      "use strict";
      function o() {
        this._listeners = {};
      }
      ((t.exports = o),
        (o.prototype.on = function (t, n, r) {
          return (
            (this._listeners[t] || (this._listeners[t] = [])).push({
              fn: n,
              ctx: r || this,
            }),
            this
          );
        }),
        (o.prototype.off = function (t, n) {
          if (void 0 === t) this._listeners = {};
          else if (void 0 === n) this._listeners[t] = [];
          else
            for (var r = this._listeners[t], o = 0; o < r.length; )
              r[o].fn === n ? r.splice(o, 1) : ++o;
          return this;
        }),
        (o.prototype.emit = function (t) {
          var n = this._listeners[t];
          if (n) {
            for (var r = [], o = 1; o < arguments.length; )
              r.push(arguments[o++]);
            for (o = 0; o < n.length; ) n[o].fn.apply(n[o++].ctx, r);
          }
          return this;
        }));
    },
    3024: function (t, n, r) {
      "use strict";
      function o(t) {
        return (
          "undefined" !== typeof Float32Array
            ? (function () {
                var n = new Float32Array([-0]),
                  r = new Uint8Array(n.buffer),
                  o = 128 === r[3];
                function i(t, o, i) {
                  ((n[0] = t),
                    (o[i] = r[0]),
                    (o[i + 1] = r[1]),
                    (o[i + 2] = r[2]),
                    (o[i + 3] = r[3]));
                }
                function s(t, o, i) {
                  ((n[0] = t),
                    (o[i] = r[3]),
                    (o[i + 1] = r[2]),
                    (o[i + 2] = r[1]),
                    (o[i + 3] = r[0]));
                }
                function a(t, o) {
                  return (
                    (r[0] = t[o]),
                    (r[1] = t[o + 1]),
                    (r[2] = t[o + 2]),
                    (r[3] = t[o + 3]),
                    n[0]
                  );
                }
                function u(t, o) {
                  return (
                    (r[3] = t[o]),
                    (r[2] = t[o + 1]),
                    (r[1] = t[o + 2]),
                    (r[0] = t[o + 3]),
                    n[0]
                  );
                }
                ((t.writeFloatLE = o ? i : s),
                  (t.writeFloatBE = o ? s : i),
                  (t.readFloatLE = o ? a : u),
                  (t.readFloatBE = o ? u : a));
              })()
            : (function () {
                function n(t, n, r, o) {
                  var i = n < 0 ? 1 : 0;
                  if ((i && (n = -n), 0 === n))
                    t(1 / n > 0 ? 0 : 2147483648, r, o);
                  else if (isNaN(n)) t(2143289344, r, o);
                  else if (n > 34028234663852886e22)
                    t(((i << 31) | 2139095040) >>> 0, r, o);
                  else if (n < 11754943508222875e-54)
                    t(
                      ((i << 31) | Math.round(n / 1401298464324817e-60)) >>> 0,
                      r,
                      o,
                    );
                  else {
                    var s = Math.floor(Math.log(n) / Math.LN2),
                      a = 8388607 & Math.round(n * Math.pow(2, -s) * 8388608);
                    t(((i << 31) | ((s + 127) << 23) | a) >>> 0, r, o);
                  }
                }
                function r(t, n, r) {
                  var o = t(n, r),
                    i = 2 * (o >> 31) + 1,
                    s = (o >>> 23) & 255,
                    a = 8388607 & o;
                  return 255 === s
                    ? a
                      ? NaN
                      : i * (1 / 0)
                    : 0 === s
                      ? 1401298464324817e-60 * i * a
                      : i * Math.pow(2, s - 150) * (a + 8388608);
                }
                ((t.writeFloatLE = n.bind(null, i)),
                  (t.writeFloatBE = n.bind(null, s)),
                  (t.readFloatLE = r.bind(null, a)),
                  (t.readFloatBE = r.bind(null, u)));
              })(),
          "undefined" !== typeof Float64Array
            ? (function () {
                var n = new Float64Array([-0]),
                  r = new Uint8Array(n.buffer),
                  o = 128 === r[7];
                function i(t, o, i) {
                  ((n[0] = t),
                    (o[i] = r[0]),
                    (o[i + 1] = r[1]),
                    (o[i + 2] = r[2]),
                    (o[i + 3] = r[3]),
                    (o[i + 4] = r[4]),
                    (o[i + 5] = r[5]),
                    (o[i + 6] = r[6]),
                    (o[i + 7] = r[7]));
                }
                function s(t, o, i) {
                  ((n[0] = t),
                    (o[i] = r[7]),
                    (o[i + 1] = r[6]),
                    (o[i + 2] = r[5]),
                    (o[i + 3] = r[4]),
                    (o[i + 4] = r[3]),
                    (o[i + 5] = r[2]),
                    (o[i + 6] = r[1]),
                    (o[i + 7] = r[0]));
                }
                function a(t, o) {
                  return (
                    (r[0] = t[o]),
                    (r[1] = t[o + 1]),
                    (r[2] = t[o + 2]),
                    (r[3] = t[o + 3]),
                    (r[4] = t[o + 4]),
                    (r[5] = t[o + 5]),
                    (r[6] = t[o + 6]),
                    (r[7] = t[o + 7]),
                    n[0]
                  );
                }
                function u(t, o) {
                  return (
                    (r[7] = t[o]),
                    (r[6] = t[o + 1]),
                    (r[5] = t[o + 2]),
                    (r[4] = t[o + 3]),
                    (r[3] = t[o + 4]),
                    (r[2] = t[o + 5]),
                    (r[1] = t[o + 6]),
                    (r[0] = t[o + 7]),
                    n[0]
                  );
                }
                ((t.writeDoubleLE = o ? i : s),
                  (t.writeDoubleBE = o ? s : i),
                  (t.readDoubleLE = o ? a : u),
                  (t.readDoubleBE = o ? u : a));
              })()
            : (function () {
                function n(t, n, r, o, i, s) {
                  var a = o < 0 ? 1 : 0;
                  if ((a && (o = -o), 0 === o))
                    (t(0, i, s + n), t(1 / o > 0 ? 0 : 2147483648, i, s + r));
                  else if (isNaN(o)) (t(0, i, s + n), t(2146959360, i, s + r));
                  else if (o > 17976931348623157e292)
                    (t(0, i, s + n),
                      t(((a << 31) | 2146435072) >>> 0, i, s + r));
                  else {
                    var u;
                    if (o < 22250738585072014e-324)
                      ((u = o / 5e-324),
                        t(u >>> 0, i, s + n),
                        t(((a << 31) | (u / 4294967296)) >>> 0, i, s + r));
                    else {
                      var c = Math.floor(Math.log(o) / Math.LN2);
                      (1024 === c && (c = 1023),
                        (u = o * Math.pow(2, -c)),
                        t((4503599627370496 * u) >>> 0, i, s + n),
                        t(
                          ((a << 31) |
                            ((c + 1023) << 20) |
                            ((1048576 * u) & 1048575)) >>>
                            0,
                          i,
                          s + r,
                        ));
                    }
                  }
                }
                function r(t, n, r, o, i) {
                  var s = t(o, i + n),
                    a = t(o, i + r),
                    u = 2 * (a >> 31) + 1,
                    c = (a >>> 20) & 2047,
                    d = 4294967296 * (1048575 & a) + s;
                  return 2047 === c
                    ? d
                      ? NaN
                      : u * (1 / 0)
                    : 0 === c
                      ? 5e-324 * u * d
                      : u * Math.pow(2, c - 1075) * (d + 4503599627370496);
                }
                ((t.writeDoubleLE = n.bind(null, i, 0, 4)),
                  (t.writeDoubleBE = n.bind(null, s, 4, 0)),
                  (t.readDoubleLE = r.bind(null, a, 0, 4)),
                  (t.readDoubleBE = r.bind(null, u, 4, 0)));
              })(),
          t
        );
      }
      function i(t, n, r) {
        ((n[r] = 255 & t),
          (n[r + 1] = (t >>> 8) & 255),
          (n[r + 2] = (t >>> 16) & 255),
          (n[r + 3] = t >>> 24));
      }
      function s(t, n, r) {
        ((n[r] = t >>> 24),
          (n[r + 1] = (t >>> 16) & 255),
          (n[r + 2] = (t >>> 8) & 255),
          (n[r + 3] = 255 & t));
      }
      function a(t, n) {
        return (
          (t[n] | (t[n + 1] << 8) | (t[n + 2] << 16) | (t[n + 3] << 24)) >>> 0
        );
      }
      function u(t, n) {
        return (
          ((t[n] << 24) | (t[n + 1] << 16) | (t[n + 2] << 8) | t[n + 3]) >>> 0
        );
      }
      t.exports = o(o);
    },
    3025: function (module, exports, __webpack_require__) {
      "use strict";
      function inquire(moduleName) {
        try {
          var mod = eval("quire".replace(/^/, "re"))(moduleName);
          if (mod && (mod.length || Object.keys(mod).length)) return mod;
        } catch (e) {}
        return null;
      }
      module.exports = inquire;
    },
    3026: function (t, n, r) {
      "use strict";
      var o = n;
      ((o.length = function (t) {
        for (var n = 0, r = 0, o = 0; o < t.length; ++o)
          ((r = t.charCodeAt(o)),
            r < 128
              ? (n += 1)
              : r < 2048
                ? (n += 2)
                : 55296 === (64512 & r) &&
                    56320 === (64512 & t.charCodeAt(o + 1))
                  ? (++o, (n += 4))
                  : (n += 3));
        return n;
      }),
        (o.read = function (t, n, r) {
          var o = r - n;
          if (o < 1) return "";
          var i,
            s = null,
            a = [],
            u = 0;
          while (n < r)
            ((i = t[n++]),
              i < 128
                ? (a[u++] = i)
                : i > 191 && i < 224
                  ? (a[u++] = ((31 & i) << 6) | (63 & t[n++]))
                  : i > 239 && i < 365
                    ? ((i =
                        (((7 & i) << 18) |
                          ((63 & t[n++]) << 12) |
                          ((63 & t[n++]) << 6) |
                          (63 & t[n++])) -
                        65536),
                      (a[u++] = 55296 + (i >> 10)),
                      (a[u++] = 56320 + (1023 & i)))
                    : (a[u++] =
                        ((15 & i) << 12) |
                        ((63 & t[n++]) << 6) |
                        (63 & t[n++])),
              u > 8191 &&
                ((s || (s = [])).push(String.fromCharCode.apply(String, a)),
                (u = 0)));
          return s
            ? (u && s.push(String.fromCharCode.apply(String, a.slice(0, u))),
              s.join(""))
            : String.fromCharCode.apply(String, a.slice(0, u));
        }),
        (o.write = function (t, n, r) {
          for (var o, i, s = r, a = 0; a < t.length; ++a)
            ((o = t.charCodeAt(a)),
              o < 128
                ? (n[r++] = o)
                : o < 2048
                  ? ((n[r++] = (o >> 6) | 192), (n[r++] = (63 & o) | 128))
                  : 55296 === (64512 & o) &&
                      56320 === (64512 & (i = t.charCodeAt(a + 1)))
                    ? ((o = 65536 + ((1023 & o) << 10) + (1023 & i)),
                      ++a,
                      (n[r++] = (o >> 18) | 240),
                      (n[r++] = ((o >> 12) & 63) | 128),
                      (n[r++] = ((o >> 6) & 63) | 128),
                      (n[r++] = (63 & o) | 128))
                    : ((n[r++] = (o >> 12) | 224),
                      (n[r++] = ((o >> 6) & 63) | 128),
                      (n[r++] = (63 & o) | 128)));
          return r - s;
        }));
    },
    3027: function (t, n, r) {
      "use strict";
      function o(t, n, r) {
        var o = r || 8192,
          i = o >>> 1,
          s = null,
          a = o;
        return function (r) {
          if (r < 1 || r > i) return t(r);
          a + r > o && ((s = t(o)), (a = 0));
          var u = n.call(s, a, (a += r));
          return (7 & a && (a = 1 + (7 | a)), u);
        };
      }
      t.exports = o;
    },
    3063: function (t, n, r) {
      "use strict";
      (function (t) {
        var o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.SignatureDescriptor_Data_Multi =
            n.SignatureDescriptor_Data_Single =
            n.SignatureDescriptor_Data =
            n.SignatureDescriptor =
            n.SignatureDescriptors =
            n.signModeToJSON =
            n.signModeFromJSON =
            n.SignMode =
            n.protobufPackage =
              void 0));
        const i = o(r(2754)),
          s = o(r(2755)),
          a = r(2781),
          u = r(3152);
        var c;
        function d(t) {
          switch (t) {
            case 0:
            case "SIGN_MODE_UNSPECIFIED":
              return c.SIGN_MODE_UNSPECIFIED;
            case 1:
            case "SIGN_MODE_DIRECT":
              return c.SIGN_MODE_DIRECT;
            case 2:
            case "SIGN_MODE_TEXTUAL":
              return c.SIGN_MODE_TEXTUAL;
            case 127:
            case "SIGN_MODE_LEGACY_AMINO_JSON":
              return c.SIGN_MODE_LEGACY_AMINO_JSON;
            case -1:
            case "UNRECOGNIZED":
            default:
              return c.UNRECOGNIZED;
          }
        }
        function l(t) {
          switch (t) {
            case c.SIGN_MODE_UNSPECIFIED:
              return "SIGN_MODE_UNSPECIFIED";
            case c.SIGN_MODE_DIRECT:
              return "SIGN_MODE_DIRECT";
            case c.SIGN_MODE_TEXTUAL:
              return "SIGN_MODE_TEXTUAL";
            case c.SIGN_MODE_LEGACY_AMINO_JSON:
              return "SIGN_MODE_LEGACY_AMINO_JSON";
            default:
              return "UNKNOWN";
          }
        }
        ((n.protobufPackage = "cosmos.tx.signing.v1beta1"),
          (function (t) {
            ((t[(t["SIGN_MODE_UNSPECIFIED"] = 0)] = "SIGN_MODE_UNSPECIFIED"),
              (t[(t["SIGN_MODE_DIRECT"] = 1)] = "SIGN_MODE_DIRECT"),
              (t[(t["SIGN_MODE_TEXTUAL"] = 2)] = "SIGN_MODE_TEXTUAL"),
              (t[(t["SIGN_MODE_LEGACY_AMINO_JSON"] = 127)] =
                "SIGN_MODE_LEGACY_AMINO_JSON"),
              (t[(t["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((c = n.SignMode || (n.SignMode = {}))),
          (n.signModeFromJSON = d),
          (n.signModeToJSON = l));
        const f = {};
        n.SignatureDescriptors = {
          encode(t, r) {
            void 0 === r && (r = s.default.Writer.create());
            for (const o of t.signatures)
              n.SignatureDescriptor.encode(o, r.uint32(10).fork()).ldelim();
            return r;
          },
          decode(t, r) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === r ? o.len : o.pos + r;
            const a = Object.assign({}, f);
            a.signatures = [];
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  a.signatures.push(
                    n.SignatureDescriptor.decode(o, o.uint32()),
                  );
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const r = Object.assign({}, f);
            if (
              ((r.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const o of t.signatures)
                r.signatures.push(n.SignatureDescriptor.fromJSON(o));
            return r;
          },
          toJSON(t) {
            const r = {};
            return (
              t.signatures
                ? (r.signatures = t.signatures.map((t) =>
                    t ? n.SignatureDescriptor.toJSON(t) : void 0,
                  ))
                : (r.signatures = []),
              r
            );
          },
          fromPartial(t) {
            const r = Object.assign({}, f);
            if (
              ((r.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const o of t.signatures)
                r.signatures.push(n.SignatureDescriptor.fromPartial(o));
            return r;
          },
        };
        const h = { sequence: i.default.UZERO };
        n.SignatureDescriptor = {
          encode(t, r) {
            return (
              void 0 === r && (r = s.default.Writer.create()),
              void 0 !== t.publicKey &&
                a.Any.encode(t.publicKey, r.uint32(10).fork()).ldelim(),
              void 0 !== t.data &&
                n.SignatureDescriptor_Data.encode(
                  t.data,
                  r.uint32(18).fork(),
                ).ldelim(),
              t.sequence.isZero() || r.uint32(24).uint64(t.sequence),
              r
            );
          },
          decode(t, r) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === r ? o.len : o.pos + r;
            const u = Object.assign({}, h);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  u.publicKey = a.Any.decode(o, o.uint32());
                  break;
                case 2:
                  u.data = n.SignatureDescriptor_Data.decode(o, o.uint32());
                  break;
                case 3:
                  u.sequence = o.uint64();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return u;
          },
          fromJSON(t) {
            const r = Object.assign({}, h);
            return (
              void 0 !== t.publicKey && null !== t.publicKey
                ? (r.publicKey = a.Any.fromJSON(t.publicKey))
                : (r.publicKey = void 0),
              void 0 !== t.data && null !== t.data
                ? (r.data = n.SignatureDescriptor_Data.fromJSON(t.data))
                : (r.data = void 0),
              void 0 !== t.sequence && null !== t.sequence
                ? (r.sequence = i.default.fromString(t.sequence))
                : (r.sequence = i.default.UZERO),
              r
            );
          },
          toJSON(t) {
            const r = {};
            return (
              void 0 !== t.publicKey &&
                (r.publicKey = t.publicKey
                  ? a.Any.toJSON(t.publicKey)
                  : void 0),
              void 0 !== t.data &&
                (r.data = t.data
                  ? n.SignatureDescriptor_Data.toJSON(t.data)
                  : void 0),
              void 0 !== t.sequence &&
                (r.sequence = (t.sequence || i.default.UZERO).toString()),
              r
            );
          },
          fromPartial(t) {
            const r = Object.assign({}, h);
            return (
              void 0 !== t.publicKey && null !== t.publicKey
                ? (r.publicKey = a.Any.fromPartial(t.publicKey))
                : (r.publicKey = void 0),
              void 0 !== t.data && null !== t.data
                ? (r.data = n.SignatureDescriptor_Data.fromPartial(t.data))
                : (r.data = void 0),
              void 0 !== t.sequence && null !== t.sequence
                ? (r.sequence = t.sequence)
                : (r.sequence = i.default.UZERO),
              r
            );
          },
        };
        const p = {};
        n.SignatureDescriptor_Data = {
          encode(t, r) {
            return (
              void 0 === r && (r = s.default.Writer.create()),
              void 0 !== t.single &&
                n.SignatureDescriptor_Data_Single.encode(
                  t.single,
                  r.uint32(10).fork(),
                ).ldelim(),
              void 0 !== t.multi &&
                n.SignatureDescriptor_Data_Multi.encode(
                  t.multi,
                  r.uint32(18).fork(),
                ).ldelim(),
              r
            );
          },
          decode(t, r) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === r ? o.len : o.pos + r;
            const a = Object.assign({}, p);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  a.single = n.SignatureDescriptor_Data_Single.decode(
                    o,
                    o.uint32(),
                  );
                  break;
                case 2:
                  a.multi = n.SignatureDescriptor_Data_Multi.decode(
                    o,
                    o.uint32(),
                  );
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const r = Object.assign({}, p);
            return (
              void 0 !== t.single && null !== t.single
                ? (r.single = n.SignatureDescriptor_Data_Single.fromJSON(
                    t.single,
                  ))
                : (r.single = void 0),
              void 0 !== t.multi && null !== t.multi
                ? (r.multi = n.SignatureDescriptor_Data_Multi.fromJSON(t.multi))
                : (r.multi = void 0),
              r
            );
          },
          toJSON(t) {
            const r = {};
            return (
              void 0 !== t.single &&
                (r.single = t.single
                  ? n.SignatureDescriptor_Data_Single.toJSON(t.single)
                  : void 0),
              void 0 !== t.multi &&
                (r.multi = t.multi
                  ? n.SignatureDescriptor_Data_Multi.toJSON(t.multi)
                  : void 0),
              r
            );
          },
          fromPartial(t) {
            const r = Object.assign({}, p);
            return (
              void 0 !== t.single && null !== t.single
                ? (r.single = n.SignatureDescriptor_Data_Single.fromPartial(
                    t.single,
                  ))
                : (r.single = void 0),
              void 0 !== t.multi && null !== t.multi
                ? (r.multi = n.SignatureDescriptor_Data_Multi.fromPartial(
                    t.multi,
                  ))
                : (r.multi = void 0),
              r
            );
          },
        };
        const y = { mode: 0 };
        n.SignatureDescriptor_Data_Single = {
          encode(t, n) {
            return (
              void 0 === n && (n = s.default.Writer.create()),
              0 !== t.mode && n.uint32(8).int32(t.mode),
              0 !== t.signature.length && n.uint32(18).bytes(t.signature),
              n
            );
          },
          decode(t, n) {
            const r =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? r.len : r.pos + n;
            const i = Object.assign({}, y);
            i.signature = new Uint8Array();
            while (r.pos < o) {
              const t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  i.mode = r.int32();
                  break;
                case 2:
                  i.signature = r.bytes();
                  break;
                default:
                  r.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, y);
            return (
              (n.signature = new Uint8Array()),
              void 0 !== t.mode && null !== t.mode
                ? (n.mode = d(t.mode))
                : (n.mode = 0),
              void 0 !== t.signature &&
                null !== t.signature &&
                (n.signature = v(t.signature)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.mode && (n.mode = l(t.mode)),
              void 0 !== t.signature &&
                (n.signature = S(
                  void 0 !== t.signature ? t.signature : new Uint8Array(),
                )),
              n
            );
          },
          fromPartial(t) {
            var n, r;
            const o = Object.assign({}, y);
            return (
              (o.mode = null !== (n = t.mode) && void 0 !== n ? n : 0),
              (o.signature =
                null !== (r = t.signature) && void 0 !== r
                  ? r
                  : new Uint8Array()),
              o
            );
          },
        };
        const g = {};
        n.SignatureDescriptor_Data_Multi = {
          encode(t, r) {
            (void 0 === r && (r = s.default.Writer.create()),
              void 0 !== t.bitarray &&
                u.CompactBitArray.encode(
                  t.bitarray,
                  r.uint32(10).fork(),
                ).ldelim());
            for (const o of t.signatures)
              n.SignatureDescriptor_Data.encode(
                o,
                r.uint32(18).fork(),
              ).ldelim();
            return r;
          },
          decode(t, r) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let i = void 0 === r ? o.len : o.pos + r;
            const a = Object.assign({}, g);
            a.signatures = [];
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  a.bitarray = u.CompactBitArray.decode(o, o.uint32());
                  break;
                case 2:
                  a.signatures.push(
                    n.SignatureDescriptor_Data.decode(o, o.uint32()),
                  );
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const r = Object.assign({}, g);
            if (
              ((r.signatures = []),
              void 0 !== t.bitarray && null !== t.bitarray
                ? (r.bitarray = u.CompactBitArray.fromJSON(t.bitarray))
                : (r.bitarray = void 0),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const o of t.signatures)
                r.signatures.push(n.SignatureDescriptor_Data.fromJSON(o));
            return r;
          },
          toJSON(t) {
            const r = {};
            return (
              void 0 !== t.bitarray &&
                (r.bitarray = t.bitarray
                  ? u.CompactBitArray.toJSON(t.bitarray)
                  : void 0),
              t.signatures
                ? (r.signatures = t.signatures.map((t) =>
                    t ? n.SignatureDescriptor_Data.toJSON(t) : void 0,
                  ))
                : (r.signatures = []),
              r
            );
          },
          fromPartial(t) {
            const r = Object.assign({}, g);
            if (
              (void 0 !== t.bitarray && null !== t.bitarray
                ? (r.bitarray = u.CompactBitArray.fromPartial(t.bitarray))
                : (r.bitarray = void 0),
              (r.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const o of t.signatures)
                r.signatures.push(n.SignatureDescriptor_Data.fromPartial(o));
            return r;
          },
        };
        var m = (() => {
          if ("undefined" !== typeof m) return m;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const b =
          m.atob || ((t) => m.Buffer.from(t, "base64").toString("binary"));
        function v(t) {
          const n = b(t),
            r = new Uint8Array(n.length);
          for (let o = 0; o < n.length; ++o) r[o] = n.charCodeAt(o);
          return r;
        }
        const k =
          m.btoa || ((t) => m.Buffer.from(t, "binary").toString("base64"));
        function S(t) {
          const n = [];
          for (const r of t) n.push(String.fromCharCode(r));
          return k(n.join(""));
        }
        s.default.util.Long !== i.default &&
          ((s.default.util.Long = i.default), s.default.configure());
      }).call(this, r(13));
    },
    3094: function (t, n, r) {
      "use strict";
      var o = n;
      function i() {
        (o.util._configure(),
          o.Writer._configure(o.BufferWriter),
          o.Reader._configure(o.BufferReader));
      }
      ((o.build = "minimal"),
        (o.Writer = r(2951)),
        (o.BufferWriter = r(3096)),
        (o.Reader = r(2952)),
        (o.BufferReader = r(3097)),
        (o.util = r(2791)),
        (o.rpc = r(3098)),
        (o.roots = r(3100)),
        (o.configure = i),
        i());
    },
    3095: function (t, n, r) {
      "use strict";
      t.exports = i;
      var o = r(2791);
      function i(t, n) {
        ((this.lo = t >>> 0), (this.hi = n >>> 0));
      }
      var s = (i.zero = new i(0, 0));
      ((s.toNumber = function () {
        return 0;
      }),
        (s.zzEncode = s.zzDecode =
          function () {
            return this;
          }),
        (s.length = function () {
          return 1;
        }));
      var a = (i.zeroHash = "\0\0\0\0\0\0\0\0");
      ((i.fromNumber = function (t) {
        if (0 === t) return s;
        var n = t < 0;
        n && (t = -t);
        var r = t >>> 0,
          o = ((t - r) / 4294967296) >>> 0;
        return (
          n &&
            ((o = ~o >>> 0),
            (r = ~r >>> 0),
            ++r > 4294967295 && ((r = 0), ++o > 4294967295 && (o = 0))),
          new i(r, o)
        );
      }),
        (i.from = function (t) {
          if ("number" === typeof t) return i.fromNumber(t);
          if (o.isString(t)) {
            if (!o.Long) return i.fromNumber(parseInt(t, 10));
            t = o.Long.fromString(t);
          }
          return t.low || t.high ? new i(t.low >>> 0, t.high >>> 0) : s;
        }),
        (i.prototype.toNumber = function (t) {
          if (!t && this.hi >>> 31) {
            var n = (1 + ~this.lo) >>> 0,
              r = ~this.hi >>> 0;
            return (n || (r = (r + 1) >>> 0), -(n + 4294967296 * r));
          }
          return this.lo + 4294967296 * this.hi;
        }),
        (i.prototype.toLong = function (t) {
          return o.Long
            ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(t))
            : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(t) };
        }));
      var u = String.prototype.charCodeAt;
      ((i.fromHash = function (t) {
        return t === a
          ? s
          : new i(
              (u.call(t, 0) |
                (u.call(t, 1) << 8) |
                (u.call(t, 2) << 16) |
                (u.call(t, 3) << 24)) >>>
                0,
              (u.call(t, 4) |
                (u.call(t, 5) << 8) |
                (u.call(t, 6) << 16) |
                (u.call(t, 7) << 24)) >>>
                0,
            );
      }),
        (i.prototype.toHash = function () {
          return String.fromCharCode(
            255 & this.lo,
            (this.lo >>> 8) & 255,
            (this.lo >>> 16) & 255,
            this.lo >>> 24,
            255 & this.hi,
            (this.hi >>> 8) & 255,
            (this.hi >>> 16) & 255,
            this.hi >>> 24,
          );
        }),
        (i.prototype.zzEncode = function () {
          var t = this.hi >> 31;
          return (
            (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ t) >>> 0),
            (this.lo = ((this.lo << 1) ^ t) >>> 0),
            this
          );
        }),
        (i.prototype.zzDecode = function () {
          var t = -(1 & this.lo);
          return (
            (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ t) >>> 0),
            (this.hi = ((this.hi >>> 1) ^ t) >>> 0),
            this
          );
        }),
        (i.prototype.length = function () {
          var t = this.lo,
            n = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
            r = this.hi >>> 24;
          return 0 === r
            ? 0 === n
              ? t < 16384
                ? t < 128
                  ? 1
                  : 2
                : t < 2097152
                  ? 3
                  : 4
              : n < 16384
                ? n < 128
                  ? 5
                  : 6
                : n < 2097152
                  ? 7
                  : 8
            : r < 128
              ? 9
              : 10;
        }));
    },
    3096: function (t, n, r) {
      "use strict";
      t.exports = s;
      var o = r(2951);
      (s.prototype = Object.create(o.prototype)).constructor = s;
      var i = r(2791);
      function s() {
        o.call(this);
      }
      function a(t, n, r) {
        t.length < 40
          ? i.utf8.write(t, n, r)
          : n.utf8Write
            ? n.utf8Write(t, r)
            : n.write(t, r);
      }
      ((s._configure = function () {
        ((s.alloc = i._Buffer_allocUnsafe),
          (s.writeBytesBuffer =
            i.Buffer &&
            i.Buffer.prototype instanceof Uint8Array &&
            "set" === i.Buffer.prototype.set.name
              ? function (t, n, r) {
                  n.set(t, r);
                }
              : function (t, n, r) {
                  if (t.copy) t.copy(n, r, 0, t.length);
                  else for (var o = 0; o < t.length; ) n[r++] = t[o++];
                }));
      }),
        (s.prototype.bytes = function (t) {
          i.isString(t) && (t = i._Buffer_from(t, "base64"));
          var n = t.length >>> 0;
          return (
            this.uint32(n),
            n && this._push(s.writeBytesBuffer, n, t),
            this
          );
        }),
        (s.prototype.string = function (t) {
          var n = i.Buffer.byteLength(t);
          return (this.uint32(n), n && this._push(a, n, t), this);
        }),
        s._configure());
    },
    3097: function (t, n, r) {
      "use strict";
      t.exports = s;
      var o = r(2952);
      (s.prototype = Object.create(o.prototype)).constructor = s;
      var i = r(2791);
      function s(t) {
        o.call(this, t);
      }
      ((s._configure = function () {
        i.Buffer && (s.prototype._slice = i.Buffer.prototype.slice);
      }),
        (s.prototype.string = function () {
          var t = this.uint32();
          return this.buf.utf8Slice
            ? this.buf.utf8Slice(
                this.pos,
                (this.pos = Math.min(this.pos + t, this.len)),
              )
            : this.buf.toString(
                "utf-8",
                this.pos,
                (this.pos = Math.min(this.pos + t, this.len)),
              );
        }),
        s._configure());
    },
    3098: function (t, n, r) {
      "use strict";
      var o = n;
      o.Service = r(3099);
    },
    3099: function (t, n, r) {
      "use strict";
      t.exports = i;
      var o = r(2791);
      function i(t, n, r) {
        if ("function" !== typeof t)
          throw TypeError("rpcImpl must be a function");
        (o.EventEmitter.call(this),
          (this.rpcImpl = t),
          (this.requestDelimited = Boolean(n)),
          (this.responseDelimited = Boolean(r)));
      }
      (((i.prototype = Object.create(o.EventEmitter.prototype)).constructor =
        i),
        (i.prototype.rpcCall = function t(n, r, i, s, a) {
          if (!s) throw TypeError("request must be specified");
          var u = this;
          if (!a) return o.asPromise(t, u, n, r, i, s);
          if (u.rpcImpl)
            try {
              return u.rpcImpl(
                n,
                r[u.requestDelimited ? "encodeDelimited" : "encode"](
                  s,
                ).finish(),
                function (t, r) {
                  if (t) return (u.emit("error", t, n), a(t));
                  if (null !== r) {
                    if (!(r instanceof i))
                      try {
                        r =
                          i[u.responseDelimited ? "decodeDelimited" : "decode"](
                            r,
                          );
                      } catch (t) {
                        return (u.emit("error", t, n), a(t));
                      }
                    return (u.emit("data", r, n), a(null, r));
                  }
                  u.end(!0);
                },
              );
            } catch (c) {
              return (
                u.emit("error", c, n),
                void setTimeout(function () {
                  a(c);
                }, 0)
              );
            }
          else
            setTimeout(function () {
              a(Error("already ended"));
            }, 0);
        }),
        (i.prototype.end = function (t) {
          return (
            this.rpcImpl &&
              (t || this.rpcImpl(null, null, null),
              (this.rpcImpl = null),
              this.emit("end").off()),
            this
          );
        }));
    },
    3100: function (t, n, r) {
      "use strict";
      t.exports = {};
    },
    3116: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.encodeBech32Pubkey =
          n.encodeAminoPubkey =
          n.decodeBech32Pubkey =
          n.decodeAminoPubkey =
          n.encodeSecp256k1Pubkey =
            void 0));
      const o = r(2762),
        i = r(2796),
        s = r(2815),
        a = r(2998);
      function u(t) {
        if (33 !== t.length || (2 !== t[0] && 3 !== t[0]))
          throw new Error(
            "Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03",
          );
        return { type: a.pubkeyType.secp256k1, value: o.toBase64(t) };
      }
      n.encodeSecp256k1Pubkey = u;
      const c = o.fromHex("eb5ae98721"),
        d = o.fromHex("1624de6420"),
        l = o.fromHex("0dfb100520"),
        f = o.fromHex("22c1f7e2");
      function h(t) {
        if (s.arrayContentStartsWith(t, c)) {
          const n = t.slice(c.length);
          if (33 !== n.length)
            throw new Error(
              "Invalid rest data length. Expected 33 bytes (compressed secp256k1 pubkey).",
            );
          return { type: a.pubkeyType.secp256k1, value: o.toBase64(n) };
        }
        if (s.arrayContentStartsWith(t, d)) {
          const n = t.slice(d.length);
          if (32 !== n.length)
            throw new Error(
              "Invalid rest data length. Expected 32 bytes (Ed25519 pubkey).",
            );
          return { type: a.pubkeyType.ed25519, value: o.toBase64(n) };
        }
        if (s.arrayContentStartsWith(t, l)) {
          const n = t.slice(l.length);
          if (32 !== n.length)
            throw new Error(
              "Invalid rest data length. Expected 32 bytes (Sr25519 pubkey).",
            );
          return { type: a.pubkeyType.sr25519, value: o.toBase64(n) };
        }
        throw new Error(
          "Unsupported public key type. Amino data starts with: " +
            o.toHex(t.slice(0, 5)),
        );
      }
      function p(t) {
        const { data: n } = o.Bech32.decode(t);
        return h(n);
      }
      function y(t) {
        const n = i.Uint53.fromString(t.toString()).toNumber();
        if (n > 127)
          throw new Error(
            "Encoding numbers > 127 is not supported here. Please tell those lazy CosmJS maintainers to port the binary.PutUvarint implementation from the Go standard library and write some tests.",
          );
        return [n];
      }
      function g(t) {
        if (a.isMultisigThresholdPubkey(t)) {
          const n = Array.from(f);
          (n.push(8), n.push(...y(t.value.threshold)));
          for (const r of t.value.pubkeys.map((t) => g(t)))
            (n.push(18), n.push(...y(r.length)), n.push(...r));
          return new Uint8Array(n);
        }
        if (a.isEd25519Pubkey(t))
          return new Uint8Array([...d, ...o.fromBase64(t.value)]);
        if (a.isSecp256k1Pubkey(t))
          return new Uint8Array([...c, ...o.fromBase64(t.value)]);
        throw new Error("Unsupported pubkey type");
      }
      function m(t, n) {
        return o.Bech32.encode(n, g(t));
      }
      ((n.decodeAminoPubkey = h),
        (n.decodeBech32Pubkey = p),
        (n.encodeAminoPubkey = g),
        (n.encodeBech32Pubkey = m));
    },
    3117: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.decodeSignature = n.encodeSecp256k1Signature = void 0));
      const o = r(2762),
        i = r(3116),
        s = r(2998);
      function a(t, n) {
        if (64 !== n.length)
          throw new Error(
            "Signature must be 64 bytes long. Cosmos SDK uses a 2x32 byte fixed length encoding for the secp256k1 signature integers r and s.",
          );
        return {
          pub_key: i.encodeSecp256k1Pubkey(t),
          signature: o.toBase64(n),
        };
      }
      function u(t) {
        switch (t.pub_key.type) {
          case s.pubkeyType.secp256k1:
            return {
              pubkey: o.fromBase64(t.pub_key.value),
              signature: o.fromBase64(t.signature),
            };
          default:
            throw new Error("Unsupported pubkey type");
        }
      }
      ((n.encodeSecp256k1Signature = a), (n.decodeSignature = u));
    },
    3118: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.serializeSignDoc = n.makeSignDoc = n.sortedJsonStringify = void 0));
      const o = r(2762),
        i = r(2796);
      function s(t) {
        if ("object" !== typeof t || null === t) return t;
        if (Array.isArray(t)) return t.map(s);
        const n = Object.keys(t).sort(),
          r = {};
        return (
          n.forEach((n) => {
            r[n] = s(t[n]);
          }),
          r
        );
      }
      function a(t) {
        return JSON.stringify(s(t));
      }
      function u(t, n, r, o, s, a) {
        return {
          chain_id: r,
          account_number: i.Uint53.fromString(s.toString()).toString(),
          sequence: i.Uint53.fromString(a.toString()).toString(),
          fee: n,
          msgs: t,
          memo: o || "",
        };
      }
      function c(t) {
        return o.toUtf8(a(t));
      }
      ((n.sortedJsonStringify = a),
        (n.makeSignDoc = u),
        (n.serializeSignDoc = c));
    },
    3119: function (t, n, r) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.makeSignBytes = n.makeSignDoc = n.makeAuthInfoBytes = void 0));
      const i = r(3063),
        s = r(2937),
        a = o(r(2754));
      function u(t, n) {
        return t.map((t) => {
          let { pubkey: r, sequence: o } = t;
          return {
            publicKey: r,
            modeInfo: { single: { mode: n } },
            sequence: a.default.fromNumber(o),
          };
        });
      }
      function c(t, n, r, o) {
        void 0 === o && (o = i.SignMode.SIGN_MODE_DIRECT);
        const c = {
          signerInfos: u(t, o),
          fee: { amount: [...n], gasLimit: a.default.fromNumber(r) },
        };
        return s.AuthInfo.encode(s.AuthInfo.fromPartial(c)).finish();
      }
      function d(t, n, r, o) {
        return {
          bodyBytes: t,
          authInfoBytes: n,
          chainId: r,
          accountNumber: a.default.fromNumber(o),
        };
      }
      function l(t) {
        let {
          accountNumber: n,
          authInfoBytes: r,
          bodyBytes: o,
          chainId: i,
        } = t;
        const a = s.SignDoc.fromPartial({
          accountNumber: n,
          authInfoBytes: r,
          bodyBytes: o,
          chainId: i,
        });
        return s.SignDoc.encode(a).finish();
      }
      ((n.makeAuthInfoBytes = c), (n.makeSignDoc = d), (n.makeSignBytes = l));
    },
    3152: function (t, n, r) {
      "use strict";
      (function (t) {
        var o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.CompactBitArray = n.MultiSignature = n.protobufPackage = void 0));
        const i = o(r(2754)),
          s = o(r(2755));
        n.protobufPackage = "cosmos.crypto.multisig.v1beta1";
        const a = {};
        n.MultiSignature = {
          encode(t, n = s.default.Writer.create()) {
            for (const r of t.signatures) n.uint32(10).bytes(r);
            return n;
          },
          decode(t, n) {
            const r =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? r.len : r.pos + n;
            const i = Object.assign({}, a);
            i.signatures = [];
            while (r.pos < o) {
              const t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  i.signatures.push(r.bytes());
                  break;
                default:
                  r.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, a);
            if (
              ((n.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const r of t.signatures) n.signatures.push(l(r));
            return n;
          },
          toJSON(t) {
            const n = {};
            return (
              t.signatures
                ? (n.signatures = t.signatures.map((t) =>
                    h(void 0 !== t ? t : new Uint8Array()),
                  ))
                : (n.signatures = []),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, a);
            if (
              ((n.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const r of t.signatures) n.signatures.push(r);
            return n;
          },
        };
        const u = { extraBitsStored: 0 };
        n.CompactBitArray = {
          encode(t, n = s.default.Writer.create()) {
            return (
              0 !== t.extraBitsStored && n.uint32(8).uint32(t.extraBitsStored),
              0 !== t.elems.length && n.uint32(18).bytes(t.elems),
              n
            );
          },
          decode(t, n) {
            const r =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? r.len : r.pos + n;
            const i = Object.assign({}, u);
            i.elems = new Uint8Array();
            while (r.pos < o) {
              const t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  i.extraBitsStored = r.uint32();
                  break;
                case 2:
                  i.elems = r.bytes();
                  break;
                default:
                  r.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, u);
            return (
              (n.elems = new Uint8Array()),
              void 0 !== t.extraBitsStored && null !== t.extraBitsStored
                ? (n.extraBitsStored = Number(t.extraBitsStored))
                : (n.extraBitsStored = 0),
              void 0 !== t.elems && null !== t.elems && (n.elems = l(t.elems)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.extraBitsStored &&
                (n.extraBitsStored = t.extraBitsStored),
              void 0 !== t.elems &&
                (n.elems = h(void 0 !== t.elems ? t.elems : new Uint8Array())),
              n
            );
          },
          fromPartial(t) {
            var n, r;
            const o = Object.assign({}, u);
            return (
              (o.extraBitsStored =
                null !== (n = t.extraBitsStored) && void 0 !== n ? n : 0),
              (o.elems =
                null !== (r = t.elems) && void 0 !== r ? r : new Uint8Array()),
              o
            );
          },
        };
        var c = (() => {
          if ("undefined" !== typeof c) return c;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const d =
          c.atob || ((t) => c.Buffer.from(t, "base64").toString("binary"));
        function l(t) {
          const n = d(t),
            r = new Uint8Array(n.length);
          for (let o = 0; o < n.length; ++o) r[o] = n.charCodeAt(o);
          return r;
        }
        const f =
          c.btoa || ((t) => c.Buffer.from(t, "binary").toString("base64"));
        function h(t) {
          const n = [];
          for (const r of t) n.push(String.fromCharCode(r));
          return f(n.join(""));
        }
        s.default.util.Long !== i.default &&
          ((s.default.util.Long = i.default), s.default.configure());
      }).call(this, r(13));
    },
    3320: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.makeCosmoshubPath = void 0));
      const o = r(2800);
      function i(t) {
        return [
          o.Slip10RawIndex.hardened(44),
          o.Slip10RawIndex.hardened(118),
          o.Slip10RawIndex.hardened(0),
          o.Slip10RawIndex.normal(0),
          o.Slip10RawIndex.normal(t),
        ];
      }
      n.makeCosmoshubPath = i;
    },
    3321: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.decrypt =
          n.encrypt =
          n.supportedAlgorithms =
          n.executeKdf =
          n.cosmjsSalt =
            void 0));
      const o = r(2800),
        i = r(2762);
      async function s(t, r) {
        switch (r.algorithm) {
          case "argon2id": {
            const i = r.params;
            if (!o.isArgon2idOptions(i))
              throw new Error("Invalid format of argon2id params");
            return o.Argon2id.execute(t, n.cosmjsSalt, i);
          }
          default:
            throw new Error("Unsupported KDF algorithm");
        }
      }
      async function a(t, r, i) {
        switch (i.algorithm) {
          case n.supportedAlgorithms.xchacha20poly1305Ietf: {
            const n = o.Random.getBytes(o.xchacha20NonceLength);
            return new Uint8Array([
              ...n,
              ...(await o.Xchacha20poly1305Ietf.encrypt(t, r, n)),
            ]);
          }
          default:
            throw new Error(
              `Unsupported encryption algorithm: '${i.algorithm}'`,
            );
        }
      }
      async function u(t, r, i) {
        switch (i.algorithm) {
          case n.supportedAlgorithms.xchacha20poly1305Ietf: {
            const n = t.slice(0, o.xchacha20NonceLength);
            return o.Xchacha20poly1305Ietf.decrypt(
              t.slice(o.xchacha20NonceLength),
              r,
              n,
            );
          }
          default:
            throw new Error(
              `Unsupported encryption algorithm: '${i.algorithm}'`,
            );
        }
      }
      ((n.cosmjsSalt = i.toAscii("The CosmJS salt.")),
        (n.executeKdf = s),
        (n.supportedAlgorithms = {
          xchacha20poly1305Ietf: "xchacha20poly1305-ietf",
        }),
        (n.encrypt = a),
        (n.decrypt = u));
    },
    3322: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.decrypt =
          n.encrypt =
          n.supportedAlgorithms =
          n.executeKdf =
          n.cosmjsSalt =
            void 0));
      const o = r(2800),
        i = r(2762);
      async function s(t, r) {
        switch (r.algorithm) {
          case "argon2id": {
            const i = r.params;
            if (!o.isArgon2idOptions(i))
              throw new Error("Invalid format of argon2id params");
            return o.Argon2id.execute(t, n.cosmjsSalt, i);
          }
          default:
            throw new Error("Unsupported KDF algorithm");
        }
      }
      async function a(t, r, i) {
        switch (i.algorithm) {
          case n.supportedAlgorithms.xchacha20poly1305Ietf: {
            const n = o.Random.getBytes(o.xchacha20NonceLength);
            return new Uint8Array([
              ...n,
              ...(await o.Xchacha20poly1305Ietf.encrypt(t, r, n)),
            ]);
          }
          default:
            throw new Error(
              `Unsupported encryption algorithm: '${i.algorithm}'`,
            );
        }
      }
      async function u(t, r, i) {
        switch (i.algorithm) {
          case n.supportedAlgorithms.xchacha20poly1305Ietf: {
            const n = t.slice(0, o.xchacha20NonceLength);
            return o.Xchacha20poly1305Ietf.decrypt(
              t.slice(o.xchacha20NonceLength),
              r,
              n,
            );
          }
          default:
            throw new Error(
              `Unsupported encryption algorithm: '${i.algorithm}'`,
            );
        }
      }
      ((n.cosmjsSalt = i.toAscii("The CosmJS salt.")),
        (n.executeKdf = s),
        (n.supportedAlgorithms = {
          xchacha20poly1305Ietf: "xchacha20poly1305-ietf",
        }),
        (n.encrypt = a),
        (n.decrypt = u));
    },
    3378: function (t, n, r) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.MsgClientImpl =
          n.MsgMultiSendResponse =
          n.MsgMultiSend =
          n.MsgSendResponse =
          n.MsgSend =
          n.protobufPackage =
            void 0));
      const i = o(r(2754)),
        s = o(r(2755)),
        a = r(2801),
        u = r(3379);
      n.protobufPackage = "cosmos.bank.v1beta1";
      const c = { fromAddress: "", toAddress: "" };
      n.MsgSend = {
        encode(t, n) {
          (void 0 === n && (n = s.default.Writer.create()),
            "" !== t.fromAddress && n.uint32(10).string(t.fromAddress),
            "" !== t.toAddress && n.uint32(18).string(t.toAddress));
          for (const r of t.amount)
            a.Coin.encode(r, n.uint32(26).fork()).ldelim();
          return n;
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, c);
          i.amount = [];
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              case 1:
                i.fromAddress = r.string();
                break;
              case 2:
                i.toAddress = r.string();
                break;
              case 3:
                i.amount.push(a.Coin.decode(r, r.uint32()));
                break;
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, c);
          if (
            ((n.amount = []),
            void 0 !== t.fromAddress && null !== t.fromAddress
              ? (n.fromAddress = String(t.fromAddress))
              : (n.fromAddress = ""),
            void 0 !== t.toAddress && null !== t.toAddress
              ? (n.toAddress = String(t.toAddress))
              : (n.toAddress = ""),
            void 0 !== t.amount && null !== t.amount)
          )
            for (const r of t.amount) n.amount.push(a.Coin.fromJSON(r));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.fromAddress && (n.fromAddress = t.fromAddress),
            void 0 !== t.toAddress && (n.toAddress = t.toAddress),
            t.amount
              ? (n.amount = t.amount.map((t) =>
                  t ? a.Coin.toJSON(t) : void 0,
                ))
              : (n.amount = []),
            n
          );
        },
        fromPartial(t) {
          var n, r;
          const o = Object.assign({}, c);
          if (
            ((o.fromAddress =
              null !== (n = t.fromAddress) && void 0 !== n ? n : ""),
            (o.toAddress = null !== (r = t.toAddress) && void 0 !== r ? r : ""),
            (o.amount = []),
            void 0 !== t.amount && null !== t.amount)
          )
            for (const i of t.amount) o.amount.push(a.Coin.fromPartial(i));
          return o;
        },
      };
      const d = {};
      n.MsgSendResponse = {
        encode(t, n) {
          return (void 0 === n && (n = s.default.Writer.create()), n);
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, d);
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, d);
          return n;
        },
        toJSON(t) {
          const n = {};
          return n;
        },
        fromPartial(t) {
          const n = Object.assign({}, d);
          return n;
        },
      };
      const l = {};
      n.MsgMultiSend = {
        encode(t, n) {
          void 0 === n && (n = s.default.Writer.create());
          for (const r of t.inputs)
            u.Input.encode(r, n.uint32(10).fork()).ldelim();
          for (const r of t.outputs)
            u.Output.encode(r, n.uint32(18).fork()).ldelim();
          return n;
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, l);
          ((i.inputs = []), (i.outputs = []));
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              case 1:
                i.inputs.push(u.Input.decode(r, r.uint32()));
                break;
              case 2:
                i.outputs.push(u.Output.decode(r, r.uint32()));
                break;
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, l);
          if (
            ((n.inputs = []),
            (n.outputs = []),
            void 0 !== t.inputs && null !== t.inputs)
          )
            for (const r of t.inputs) n.inputs.push(u.Input.fromJSON(r));
          if (void 0 !== t.outputs && null !== t.outputs)
            for (const r of t.outputs) n.outputs.push(u.Output.fromJSON(r));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            t.inputs
              ? (n.inputs = t.inputs.map((t) =>
                  t ? u.Input.toJSON(t) : void 0,
                ))
              : (n.inputs = []),
            t.outputs
              ? (n.outputs = t.outputs.map((t) =>
                  t ? u.Output.toJSON(t) : void 0,
                ))
              : (n.outputs = []),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, l);
          if (((n.inputs = []), void 0 !== t.inputs && null !== t.inputs))
            for (const r of t.inputs) n.inputs.push(u.Input.fromPartial(r));
          if (((n.outputs = []), void 0 !== t.outputs && null !== t.outputs))
            for (const r of t.outputs) n.outputs.push(u.Output.fromPartial(r));
          return n;
        },
      };
      const f = {};
      n.MsgMultiSendResponse = {
        encode(t, n) {
          return (void 0 === n && (n = s.default.Writer.create()), n);
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, f);
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, f);
          return n;
        },
        toJSON(t) {
          const n = {};
          return n;
        },
        fromPartial(t) {
          const n = Object.assign({}, f);
          return n;
        },
      };
      class MsgClientImpl {
        constructor(t) {
          ((this.rpc = t),
            (this.Send = this.Send.bind(this)),
            (this.MultiSend = this.MultiSend.bind(this)));
        }
        Send(t) {
          const r = n.MsgSend.encode(t).finish(),
            o = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", r);
          return o.then((t) =>
            n.MsgSendResponse.decode(new s.default.Reader(t)),
          );
        }
        MultiSend(t) {
          const r = n.MsgMultiSend.encode(t).finish(),
            o = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", r);
          return o.then((t) =>
            n.MsgMultiSendResponse.decode(new s.default.Reader(t)),
          );
        }
      }
      ((n.MsgClientImpl = MsgClientImpl),
        s.default.util.Long !== i.default &&
          ((s.default.util.Long = i.default), s.default.configure()));
    },
    3379: function (t, n, r) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Metadata =
          n.DenomUnit =
          n.Supply =
          n.Output =
          n.Input =
          n.SendEnabled =
          n.Params =
          n.protobufPackage =
            void 0));
      const i = o(r(2754)),
        s = o(r(2755)),
        a = r(2801);
      n.protobufPackage = "cosmos.bank.v1beta1";
      const u = { defaultSendEnabled: !1 };
      n.Params = {
        encode(t, r) {
          void 0 === r && (r = s.default.Writer.create());
          for (const o of t.sendEnabled)
            n.SendEnabled.encode(o, r.uint32(10).fork()).ldelim();
          return (
            !0 === t.defaultSendEnabled &&
              r.uint32(16).bool(t.defaultSendEnabled),
            r
          );
        },
        decode(t, r) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === r ? o.len : o.pos + r;
          const a = Object.assign({}, u);
          a.sendEnabled = [];
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                a.sendEnabled.push(n.SendEnabled.decode(o, o.uint32()));
                break;
              case 2:
                a.defaultSendEnabled = o.bool();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return a;
        },
        fromJSON(t) {
          const r = Object.assign({}, u);
          if (
            ((r.sendEnabled = []),
            void 0 !== t.sendEnabled && null !== t.sendEnabled)
          )
            for (const o of t.sendEnabled)
              r.sendEnabled.push(n.SendEnabled.fromJSON(o));
          return (
            void 0 !== t.defaultSendEnabled && null !== t.defaultSendEnabled
              ? (r.defaultSendEnabled = Boolean(t.defaultSendEnabled))
              : (r.defaultSendEnabled = !1),
            r
          );
        },
        toJSON(t) {
          const r = {};
          return (
            t.sendEnabled
              ? (r.sendEnabled = t.sendEnabled.map((t) =>
                  t ? n.SendEnabled.toJSON(t) : void 0,
                ))
              : (r.sendEnabled = []),
            void 0 !== t.defaultSendEnabled &&
              (r.defaultSendEnabled = t.defaultSendEnabled),
            r
          );
        },
        fromPartial(t) {
          var r;
          const o = Object.assign({}, u);
          if (
            ((o.sendEnabled = []),
            void 0 !== t.sendEnabled && null !== t.sendEnabled)
          )
            for (const i of t.sendEnabled)
              o.sendEnabled.push(n.SendEnabled.fromPartial(i));
          return (
            (o.defaultSendEnabled =
              null !== (r = t.defaultSendEnabled) && void 0 !== r && r),
            o
          );
        },
      };
      const c = { denom: "", enabled: !1 };
      n.SendEnabled = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.denom && n.uint32(10).string(t.denom),
            !0 === t.enabled && n.uint32(16).bool(t.enabled),
            n
          );
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, c);
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              case 1:
                i.denom = r.string();
                break;
              case 2:
                i.enabled = r.bool();
                break;
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, c);
          return (
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = String(t.denom))
              : (n.denom = ""),
            void 0 !== t.enabled && null !== t.enabled
              ? (n.enabled = Boolean(t.enabled))
              : (n.enabled = !1),
            n
          );
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.denom && (n.denom = t.denom),
            void 0 !== t.enabled && (n.enabled = t.enabled),
            n
          );
        },
        fromPartial(t) {
          var n, r;
          const o = Object.assign({}, c);
          return (
            (o.denom = null !== (n = t.denom) && void 0 !== n ? n : ""),
            (o.enabled = null !== (r = t.enabled) && void 0 !== r && r),
            o
          );
        },
      };
      const d = { address: "" };
      n.Input = {
        encode(t, n) {
          (void 0 === n && (n = s.default.Writer.create()),
            "" !== t.address && n.uint32(10).string(t.address));
          for (const r of t.coins)
            a.Coin.encode(r, n.uint32(18).fork()).ldelim();
          return n;
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, d);
          i.coins = [];
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              case 1:
                i.address = r.string();
                break;
              case 2:
                i.coins.push(a.Coin.decode(r, r.uint32()));
                break;
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, d);
          if (
            ((n.coins = []),
            void 0 !== t.address && null !== t.address
              ? (n.address = String(t.address))
              : (n.address = ""),
            void 0 !== t.coins && null !== t.coins)
          )
            for (const r of t.coins) n.coins.push(a.Coin.fromJSON(r));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.address && (n.address = t.address),
            t.coins
              ? (n.coins = t.coins.map((t) => (t ? a.Coin.toJSON(t) : void 0)))
              : (n.coins = []),
            n
          );
        },
        fromPartial(t) {
          var n;
          const r = Object.assign({}, d);
          if (
            ((r.address = null !== (n = t.address) && void 0 !== n ? n : ""),
            (r.coins = []),
            void 0 !== t.coins && null !== t.coins)
          )
            for (const o of t.coins) r.coins.push(a.Coin.fromPartial(o));
          return r;
        },
      };
      const l = { address: "" };
      n.Output = {
        encode(t, n) {
          (void 0 === n && (n = s.default.Writer.create()),
            "" !== t.address && n.uint32(10).string(t.address));
          for (const r of t.coins)
            a.Coin.encode(r, n.uint32(18).fork()).ldelim();
          return n;
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, l);
          i.coins = [];
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              case 1:
                i.address = r.string();
                break;
              case 2:
                i.coins.push(a.Coin.decode(r, r.uint32()));
                break;
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, l);
          if (
            ((n.coins = []),
            void 0 !== t.address && null !== t.address
              ? (n.address = String(t.address))
              : (n.address = ""),
            void 0 !== t.coins && null !== t.coins)
          )
            for (const r of t.coins) n.coins.push(a.Coin.fromJSON(r));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.address && (n.address = t.address),
            t.coins
              ? (n.coins = t.coins.map((t) => (t ? a.Coin.toJSON(t) : void 0)))
              : (n.coins = []),
            n
          );
        },
        fromPartial(t) {
          var n;
          const r = Object.assign({}, l);
          if (
            ((r.address = null !== (n = t.address) && void 0 !== n ? n : ""),
            (r.coins = []),
            void 0 !== t.coins && null !== t.coins)
          )
            for (const o of t.coins) r.coins.push(a.Coin.fromPartial(o));
          return r;
        },
      };
      const f = {};
      n.Supply = {
        encode(t, n) {
          void 0 === n && (n = s.default.Writer.create());
          for (const r of t.total)
            a.Coin.encode(r, n.uint32(10).fork()).ldelim();
          return n;
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, f);
          i.total = [];
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              case 1:
                i.total.push(a.Coin.decode(r, r.uint32()));
                break;
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, f);
          if (((n.total = []), void 0 !== t.total && null !== t.total))
            for (const r of t.total) n.total.push(a.Coin.fromJSON(r));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            t.total
              ? (n.total = t.total.map((t) => (t ? a.Coin.toJSON(t) : void 0)))
              : (n.total = []),
            n
          );
        },
        fromPartial(t) {
          const n = Object.assign({}, f);
          if (((n.total = []), void 0 !== t.total && null !== t.total))
            for (const r of t.total) n.total.push(a.Coin.fromPartial(r));
          return n;
        },
      };
      const h = { denom: "", exponent: 0, aliases: "" };
      n.DenomUnit = {
        encode(t, n) {
          (void 0 === n && (n = s.default.Writer.create()),
            "" !== t.denom && n.uint32(10).string(t.denom),
            0 !== t.exponent && n.uint32(16).uint32(t.exponent));
          for (const r of t.aliases) n.uint32(26).string(r);
          return n;
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, h);
          i.aliases = [];
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              case 1:
                i.denom = r.string();
                break;
              case 2:
                i.exponent = r.uint32();
                break;
              case 3:
                i.aliases.push(r.string());
                break;
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, h);
          if (
            ((n.aliases = []),
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = String(t.denom))
              : (n.denom = ""),
            void 0 !== t.exponent && null !== t.exponent
              ? (n.exponent = Number(t.exponent))
              : (n.exponent = 0),
            void 0 !== t.aliases && null !== t.aliases)
          )
            for (const r of t.aliases) n.aliases.push(String(r));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.denom && (n.denom = t.denom),
            void 0 !== t.exponent && (n.exponent = t.exponent),
            t.aliases
              ? (n.aliases = t.aliases.map((t) => t))
              : (n.aliases = []),
            n
          );
        },
        fromPartial(t) {
          var n, r;
          const o = Object.assign({}, h);
          if (
            ((o.denom = null !== (n = t.denom) && void 0 !== n ? n : ""),
            (o.exponent = null !== (r = t.exponent) && void 0 !== r ? r : 0),
            (o.aliases = []),
            void 0 !== t.aliases && null !== t.aliases)
          )
            for (const i of t.aliases) o.aliases.push(i);
          return o;
        },
      };
      const p = { description: "", base: "", display: "" };
      ((n.Metadata = {
        encode(t, r) {
          (void 0 === r && (r = s.default.Writer.create()),
            "" !== t.description && r.uint32(10).string(t.description));
          for (const o of t.denomUnits)
            n.DenomUnit.encode(o, r.uint32(18).fork()).ldelim();
          return (
            "" !== t.base && r.uint32(26).string(t.base),
            "" !== t.display && r.uint32(34).string(t.display),
            r
          );
        },
        decode(t, r) {
          const o = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let i = void 0 === r ? o.len : o.pos + r;
          const a = Object.assign({}, p);
          a.denomUnits = [];
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                a.description = o.string();
                break;
              case 2:
                a.denomUnits.push(n.DenomUnit.decode(o, o.uint32()));
                break;
              case 3:
                a.base = o.string();
                break;
              case 4:
                a.display = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return a;
        },
        fromJSON(t) {
          const r = Object.assign({}, p);
          if (
            ((r.denomUnits = []),
            void 0 !== t.description && null !== t.description
              ? (r.description = String(t.description))
              : (r.description = ""),
            void 0 !== t.denomUnits && null !== t.denomUnits)
          )
            for (const o of t.denomUnits)
              r.denomUnits.push(n.DenomUnit.fromJSON(o));
          return (
            void 0 !== t.base && null !== t.base
              ? (r.base = String(t.base))
              : (r.base = ""),
            void 0 !== t.display && null !== t.display
              ? (r.display = String(t.display))
              : (r.display = ""),
            r
          );
        },
        toJSON(t) {
          const r = {};
          return (
            void 0 !== t.description && (r.description = t.description),
            t.denomUnits
              ? (r.denomUnits = t.denomUnits.map((t) =>
                  t ? n.DenomUnit.toJSON(t) : void 0,
                ))
              : (r.denomUnits = []),
            void 0 !== t.base && (r.base = t.base),
            void 0 !== t.display && (r.display = t.display),
            r
          );
        },
        fromPartial(t) {
          var r, o, i;
          const s = Object.assign({}, p);
          if (
            ((s.description =
              null !== (r = t.description) && void 0 !== r ? r : ""),
            (s.denomUnits = []),
            void 0 !== t.denomUnits && null !== t.denomUnits)
          )
            for (const a of t.denomUnits)
              s.denomUnits.push(n.DenomUnit.fromPartial(a));
          return (
            (s.base = null !== (o = t.base) && void 0 !== o ? o : ""),
            (s.display = null !== (i = t.display) && void 0 !== i ? i : ""),
            s
          );
        },
      }),
        s.default.util.Long !== i.default &&
          ((s.default.util.Long = i.default), s.default.configure()));
    },
    3778: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.parseCoins = n.coins = n.coin = void 0));
      const o = r(2796);
      function i(t, n) {
        return { amount: new o.Uint53(t).toString(), denom: n };
      }
      function s(t, n) {
        return [i(t, n)];
      }
      function a(t) {
        return t
          .replace(/\s/g, "")
          .split(",")
          .filter(Boolean)
          .map((t) => {
            const n = t.match(/^([0-9]+)([a-zA-Z]+)/);
            if (!n) throw new Error("Got an invalid coin string");
            return {
              amount: o.Uint64.fromString(n[1]).toString(),
              denom: n[2],
            };
          });
      }
      ((n.coin = i), (n.coins = s), (n.parseCoins = a));
    },
    3779: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.createMultisigThresholdPubkey = n.compareArrays = void 0));
      const o = r(2762),
        i = r(2796),
        s = r(2997);
      function a(t, n) {
        const r = o.toHex(t),
          i = o.toHex(n);
        return r === i ? 0 : r < i ? -1 : 1;
      }
      function u(t, n, r) {
        void 0 === r && (r = !1);
        const o = new i.Uint53(n);
        if (o.toNumber() > t.length)
          throw new Error(
            `Threshold k = ${o.toNumber()} exceeds number of keys n = ${t.length}`,
          );
        const u = r
          ? t
          : Array.from(t).sort((t, n) => {
              const r = s.pubkeyToRawAddress(t),
                o = s.pubkeyToRawAddress(n);
              return a(r, o);
            });
        return {
          type: "tendermint/PubKeyMultisigThreshold",
          value: { threshold: o.toString(), pubkeys: u },
        };
      }
      ((n.compareArrays = a), (n.createMultisigThresholdPubkey = u));
    },
    3780: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Secp256k1HdWallet = n.extractKdfConfiguration = void 0));
      const o = r(2800),
        i = r(2762),
        s = r(2815),
        a = r(2997),
        u = r(3320),
        c = r(3117),
        d = r(3118),
        l = r(3321),
        f = "secp256k1wallet-v1",
        h = {
          algorithm: "argon2id",
          params: { outputLength: 32, opsLimit: 24, memLimitKib: 12288 },
        };
      function p(t) {
        return (
          !!s.isNonNullObject(t) &&
          "string" === typeof t.hdPath &&
          "string" === typeof t.prefix
        );
      }
      function y(t) {
        return t.kdf;
      }
      function g(t) {
        const n = JSON.parse(t);
        if (!s.isNonNullObject(n))
          throw new Error("Root document is not an object.");
        switch (n.type) {
          case f:
            return y(n);
          default:
            throw new Error("Unsupported serialization type");
        }
      }
      n.extractKdfConfiguration = g;
      const m = {
        bip39Password: "",
        hdPaths: [u.makeCosmoshubPath(0)],
        prefix: "cosmos",
      };
      class Secp256k1HdWallet {
        constructor(t, n) {
          var r, o;
          const i = null !== (r = n.hdPaths) && void 0 !== r ? r : m.hdPaths,
            s = null !== (o = n.prefix) && void 0 !== o ? o : m.prefix;
          ((this.secret = t),
            (this.seed = n.seed),
            (this.accounts = i.map((t) => ({ hdPath: t, prefix: s }))));
        }
        static async fromMnemonic(t, n) {
          void 0 === n && (n = {});
          const r = new o.EnglishMnemonic(t),
            i = await o.Bip39.mnemonicToSeed(r, n.bip39Password);
          return new Secp256k1HdWallet(
            r,
            Object.assign(Object.assign({}, n), { seed: i }),
          );
        }
        static async generate(t, n) {
          (void 0 === t && (t = 12), void 0 === n && (n = {}));
          const r = 4 * Math.floor((11 * t) / 33),
            i = o.Random.getBytes(r),
            s = o.Bip39.encode(i);
          return Secp256k1HdWallet.fromMnemonic(s.toString(), n);
        }
        static async deserialize(t, n) {
          const r = JSON.parse(t);
          if (!s.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          switch (r.type) {
            case f:
              return Secp256k1HdWallet.deserializeTypeV1(t, n);
            default:
              throw new Error("Unsupported serialization type");
          }
        }
        static async deserializeWithEncryptionKey(t, n) {
          const r = JSON.parse(t);
          if (!s.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          const a = r;
          switch (a.type) {
            case f: {
              const t = await l.decrypt(i.fromBase64(a.data), n, a.encryption),
                r = JSON.parse(i.fromUtf8(t)),
                { mnemonic: u, accounts: c } = r;
              if ((s.assert("string" === typeof u), !Array.isArray(c)))
                throw new Error("Property 'accounts' is not an array");
              if (!c.every((t) => p(t)))
                throw new Error("Account is not in the correct format.");
              const d = c[0].prefix;
              if (
                !c.every((t) => {
                  let { prefix: n } = t;
                  return n === d;
                })
              )
                throw new Error("Accounts do not all have the same prefix");
              const f = c.map((t) => {
                let { hdPath: n } = t;
                return o.stringToPath(n);
              });
              return Secp256k1HdWallet.fromMnemonic(u, {
                hdPaths: f,
                prefix: d,
              });
            }
            default:
              throw new Error("Unsupported serialization type");
          }
        }
        static async deserializeTypeV1(t, n) {
          const r = JSON.parse(t);
          if (!s.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          const o = await l.executeKdf(n, r.kdf);
          return Secp256k1HdWallet.deserializeWithEncryptionKey(t, o);
        }
        get mnemonic() {
          return this.secret.toString();
        }
        async getAccounts() {
          const t = await this.getAccountsWithPrivkeys();
          return t.map((t) => {
            let { algo: n, pubkey: r, address: o } = t;
            return { algo: n, pubkey: r, address: o };
          });
        }
        async signAmino(t, n) {
          const r = await this.getAccountsWithPrivkeys(),
            i = r.find((n) => {
              let { address: r } = n;
              return r === t;
            });
          if (void 0 === i) throw new Error(`Address ${t} not found in wallet`);
          const { privkey: s, pubkey: a } = i,
            u = o.sha256(d.serializeSignDoc(n)),
            l = await o.Secp256k1.createSignature(u, s),
            f = new Uint8Array([...l.r(32), ...l.s(32)]);
          return { signed: n, signature: c.encodeSecp256k1Signature(a, f) };
        }
        async serialize(t) {
          const n = h,
            r = await l.executeKdf(t, n);
          return this.serializeWithEncryptionKey(r, n);
        }
        async serializeWithEncryptionKey(t, n) {
          const r = {
              mnemonic: this.mnemonic,
              accounts: this.accounts.map((t) => {
                let { hdPath: n, prefix: r } = t;
                return { hdPath: o.pathToString(n), prefix: r };
              }),
            },
            s = i.toUtf8(JSON.stringify(r)),
            a = { algorithm: l.supportedAlgorithms.xchacha20poly1305Ietf },
            u = await l.encrypt(s, t, a),
            c = { type: f, kdf: n, encryption: a, data: i.toBase64(u) };
          return JSON.stringify(c);
        }
        async getKeyPair(t) {
          const { privkey: n } = o.Slip10.derivePath(
              o.Slip10Curve.Secp256k1,
              this.seed,
              t,
            ),
            { pubkey: r } = await o.Secp256k1.makeKeypair(n);
          return { privkey: n, pubkey: o.Secp256k1.compressPubkey(r) };
        }
        async getAccountsWithPrivkeys() {
          return Promise.all(
            this.accounts.map(async (t) => {
              let { hdPath: n, prefix: r } = t;
              const { privkey: o, pubkey: s } = await this.getKeyPair(n),
                u = i.Bech32.encode(r, a.rawSecp256k1PubkeyToRawAddress(s));
              return { algo: "secp256k1", privkey: o, pubkey: s, address: u };
            }),
          );
        }
      }
      n.Secp256k1HdWallet = Secp256k1HdWallet;
    },
    3781: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Secp256k1Wallet = void 0));
      const o = r(2800),
        i = r(2762),
        s = r(2997),
        a = r(3117),
        u = r(3118);
      class Secp256k1Wallet {
        constructor(t, n, r) {
          ((this.privkey = t), (this.pubkey = n), (this.prefix = r));
        }
        static async fromKey(t, n) {
          void 0 === n && (n = "cosmos");
          const r = (await o.Secp256k1.makeKeypair(t)).pubkey;
          return new Secp256k1Wallet(t, o.Secp256k1.compressPubkey(r), n);
        }
        get address() {
          return i.Bech32.encode(
            this.prefix,
            s.rawSecp256k1PubkeyToRawAddress(this.pubkey),
          );
        }
        async getAccounts() {
          return [
            { algo: "secp256k1", address: this.address, pubkey: this.pubkey },
          ];
        }
        async signAmino(t, n) {
          if (t !== this.address)
            throw new Error(`Address ${t} not found in wallet`);
          const r = new o.Sha256(u.serializeSignDoc(n)).digest(),
            i = await o.Secp256k1.createSignature(r, this.privkey),
            s = new Uint8Array([...i.r(32), ...i.s(32)]);
          return {
            signed: n,
            signature: a.encodeSecp256k1Signature(this.pubkey, s),
          };
        }
      }
      n.Secp256k1Wallet = Secp256k1Wallet;
    },
    3782: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.parseCoins = void 0));
      const o = r(2796);
      function i(t) {
        return t
          .replace(/\s/g, "")
          .split(",")
          .filter(Boolean)
          .map((t) => {
            const n = t.match(/^([0-9]+)([a-zA-Z][a-zA-Z0-9/]{2,127})$/);
            if (!n) throw new Error("Got an invalid coin string");
            return {
              amount: o.Uint64.fromString(n[1]).toString(),
              denom: n[2],
            };
          });
      }
      n.parseCoins = i;
    },
    3783: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.decodeTxRaw = void 0));
      const o = r(2937);
      function i(t) {
        const n = o.TxRaw.decode(t);
        return {
          authInfo: o.AuthInfo.decode(n.authInfoBytes),
          body: o.TxBody.decode(n.bodyBytes),
          signatures: n.signatures,
        };
      }
      n.decodeTxRaw = i;
    },
    3784: function (t, n, r) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Registry =
            n.isTxBodyEncodeObject =
            n.isPbjsGeneratedType =
            n.isTsProtoGeneratedType =
              void 0));
        const o = r(3378),
          i = r(2801),
          s = r(2937),
          a = r(2781);
        function u(t) {
          return "function" === typeof t.fromPartial;
        }
        function c(t) {
          return !u(t);
        }
        ((n.isTsProtoGeneratedType = u), (n.isPbjsGeneratedType = c));
        const d = {
          cosmosCoin: "/cosmos.base.v1beta1.Coin",
          cosmosMsgSend: "/cosmos.bank.v1beta1.MsgSend",
          cosmosTxBody: "/cosmos.tx.v1beta1.TxBody",
          googleAny: "/google.protobuf.Any",
        };
        function l(t) {
          return "/cosmos.tx.v1beta1.TxBody" === t.typeUrl;
        }
        n.isTxBodyEncodeObject = l;
        class Registry {
          constructor(t) {
            void 0 === t && (t = []);
            const { cosmosCoin: n, cosmosMsgSend: r } = d;
            this.types = new Map([[n, i.Coin], [r, o.MsgSend], ...t]);
          }
          register(t, n) {
            this.types.set(t, n);
          }
          lookupType(t) {
            return this.types.get(t);
          }
          lookupTypeWithError(t) {
            const n = this.lookupType(t);
            if (!n) throw new Error("Unregistered type url: " + t);
            return n;
          }
          encode(t) {
            const { value: n, typeUrl: r } = t;
            if (l(t)) return this.encodeTxBody(n);
            const o = this.lookupTypeWithError(r),
              i = u(o) ? o.fromPartial(n) : o.create(n);
            return o.encode(i).finish();
          }
          encodeTxBody(t) {
            const n = t.messages.map((t) => {
                const n = this.encode(t);
                return a.Any.fromPartial({ typeUrl: t.typeUrl, value: n });
              }),
              r = s.TxBody.fromPartial(
                Object.assign(Object.assign({}, t), { messages: n }),
              );
            return s.TxBody.encode(r).finish();
          }
          decode(n) {
            let { typeUrl: r, value: o } = n;
            if (r === d.cosmosTxBody) return this.decodeTxBody(o);
            const i = this.lookupTypeWithError(r),
              s = i.decode(o);
            return (
              Object.entries(s).forEach((n) => {
                let [r, o] = n;
                "undefined" !== typeof t &&
                  "undefined" !== typeof t.isBuffer &&
                  t.isBuffer(o) &&
                  (s[r] = Uint8Array.from(o));
              }),
              s
            );
          }
          decodeTxBody(t) {
            const n = s.TxBody.decode(t);
            return Object.assign(Object.assign({}, n), {
              messages: n.messages.map((t) => {
                let { typeUrl: n, value: r } = t;
                if (!n) throw new Error("Missing type_url in Any");
                if (!r) throw new Error("Missing value in Any");
                return this.decode({ typeUrl: n, value: r });
              }),
            });
          }
        }
        n.Registry = Registry;
      }).call(this, r(2).Buffer);
    },
    3785: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.DirectSecp256k1HdWallet = n.extractKdfConfiguration = void 0));
      const o = r(2910),
        i = r(2800),
        s = r(2762),
        a = r(2815),
        u = r(3119),
        c = r(3322),
        d = "directsecp256k1hdwallet-v1",
        l = {
          algorithm: "argon2id",
          params: { outputLength: 32, opsLimit: 24, memLimitKib: 12288 },
        };
      function f(t) {
        return (
          !!a.isNonNullObject(t) &&
          "string" === typeof t.hdPath &&
          "string" === typeof t.prefix
        );
      }
      function h(t) {
        return t.kdf;
      }
      function p(t) {
        const n = JSON.parse(t);
        if (!a.isNonNullObject(n))
          throw new Error("Root document is not an object.");
        switch (n.type) {
          case d:
            return h(n);
          default:
            throw new Error("Unsupported serialization type");
        }
      }
      n.extractKdfConfiguration = p;
      const y = {
        bip39Password: "",
        hdPaths: [o.makeCosmoshubPath(0)],
        prefix: "cosmos",
      };
      class DirectSecp256k1HdWallet {
        constructor(t, n) {
          var r, o;
          const i = null !== (r = n.prefix) && void 0 !== r ? r : y.prefix,
            s = null !== (o = n.hdPaths) && void 0 !== o ? o : y.hdPaths;
          ((this.secret = t),
            (this.seed = n.seed),
            (this.accounts = s.map((t) => ({ hdPath: t, prefix: i }))));
        }
        static async fromMnemonic(t, n) {
          void 0 === n && (n = {});
          const r = new i.EnglishMnemonic(t),
            o = await i.Bip39.mnemonicToSeed(r, n.bip39Password);
          return new DirectSecp256k1HdWallet(
            r,
            Object.assign(Object.assign({}, n), { seed: o }),
          );
        }
        static async generate(t, n) {
          (void 0 === t && (t = 12), void 0 === n && (n = {}));
          const r = 4 * Math.floor((11 * t) / 33),
            o = i.Random.getBytes(r),
            s = i.Bip39.encode(o);
          return DirectSecp256k1HdWallet.fromMnemonic(s.toString(), n);
        }
        static async deserialize(t, n) {
          const r = JSON.parse(t);
          if (!a.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          switch (r.type) {
            case d:
              return DirectSecp256k1HdWallet.deserializeTypeV1(t, n);
            default:
              throw new Error("Unsupported serialization type");
          }
        }
        static async deserializeWithEncryptionKey(t, n) {
          const r = JSON.parse(t);
          if (!a.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          const o = r;
          switch (o.type) {
            case d: {
              const t = await c.decrypt(s.fromBase64(o.data), n, o.encryption),
                r = JSON.parse(s.fromUtf8(t)),
                { mnemonic: u, accounts: d } = r;
              if ((a.assert("string" === typeof u), !Array.isArray(d)))
                throw new Error("Property 'accounts' is not an array");
              if (!d.every((t) => f(t)))
                throw new Error("Account is not in the correct format.");
              const l = d[0].prefix;
              if (
                !d.every((t) => {
                  let { prefix: n } = t;
                  return n === l;
                })
              )
                throw new Error("Accounts do not all have the same prefix");
              const h = d.map((t) => {
                let { hdPath: n } = t;
                return i.stringToPath(n);
              });
              return DirectSecp256k1HdWallet.fromMnemonic(u, {
                hdPaths: h,
                prefix: l,
              });
            }
            default:
              throw new Error("Unsupported serialization type");
          }
        }
        static async deserializeTypeV1(t, n) {
          const r = JSON.parse(t);
          if (!a.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          const o = await c.executeKdf(n, r.kdf);
          return DirectSecp256k1HdWallet.deserializeWithEncryptionKey(t, o);
        }
        get mnemonic() {
          return this.secret.toString();
        }
        async getAccounts() {
          const t = await this.getAccountsWithPrivkeys();
          return t.map((t) => {
            let { algo: n, pubkey: r, address: o } = t;
            return { algo: n, pubkey: r, address: o };
          });
        }
        async signDirect(t, n) {
          const r = await this.getAccountsWithPrivkeys(),
            s = r.find((n) => {
              let { address: r } = n;
              return r === t;
            });
          if (void 0 === s) throw new Error(`Address ${t} not found in wallet`);
          const { privkey: a, pubkey: c } = s,
            d = u.makeSignBytes(n),
            l = i.sha256(d),
            f = await i.Secp256k1.createSignature(l, a),
            h = new Uint8Array([...f.r(32), ...f.s(32)]),
            p = o.encodeSecp256k1Signature(c, h);
          return { signed: n, signature: p };
        }
        async serialize(t) {
          const n = l,
            r = await c.executeKdf(t, n);
          return this.serializeWithEncryptionKey(r, n);
        }
        async serializeWithEncryptionKey(t, n) {
          const r = {
              mnemonic: this.mnemonic,
              accounts: this.accounts.map((t) => {
                let { hdPath: n, prefix: r } = t;
                return { hdPath: i.pathToString(n), prefix: r };
              }),
            },
            o = s.toUtf8(JSON.stringify(r)),
            a = { algorithm: c.supportedAlgorithms.xchacha20poly1305Ietf },
            u = await c.encrypt(o, t, a),
            l = { type: d, kdf: n, encryption: a, data: s.toBase64(u) };
          return JSON.stringify(l);
        }
        async getKeyPair(t) {
          const { privkey: n } = i.Slip10.derivePath(
              i.Slip10Curve.Secp256k1,
              this.seed,
              t,
            ),
            { pubkey: r } = await i.Secp256k1.makeKeypair(n);
          return { privkey: n, pubkey: i.Secp256k1.compressPubkey(r) };
        }
        async getAccountsWithPrivkeys() {
          return Promise.all(
            this.accounts.map(async (t) => {
              let { hdPath: n, prefix: r } = t;
              const { privkey: i, pubkey: a } = await this.getKeyPair(n),
                u = s.Bech32.encode(r, o.rawSecp256k1PubkeyToRawAddress(a));
              return { algo: "secp256k1", privkey: i, pubkey: a, address: u };
            }),
          );
        }
      }
      n.DirectSecp256k1HdWallet = DirectSecp256k1HdWallet;
    },
    3786: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.DirectSecp256k1Wallet = void 0));
      const o = r(2910),
        i = r(2800),
        s = r(2762),
        a = r(3119);
      class DirectSecp256k1Wallet {
        constructor(t, n, r) {
          ((this.privkey = t), (this.pubkey = n), (this.prefix = r));
        }
        static async fromKey(t, n) {
          void 0 === n && (n = "cosmos");
          const r = (await i.Secp256k1.makeKeypair(t)).pubkey;
          return new DirectSecp256k1Wallet(t, i.Secp256k1.compressPubkey(r), n);
        }
        get address() {
          return s.Bech32.encode(
            this.prefix,
            o.rawSecp256k1PubkeyToRawAddress(this.pubkey),
          );
        }
        async getAccounts() {
          return [
            { algo: "secp256k1", address: this.address, pubkey: this.pubkey },
          ];
        }
        async signDirect(t, n) {
          const r = a.makeSignBytes(n);
          if (t !== this.address)
            throw new Error(`Address ${t} not found in wallet`);
          const s = i.sha256(r),
            u = await i.Secp256k1.createSignature(s, this.privkey),
            c = new Uint8Array([...u.r(32), ...u.s(32)]),
            d = o.encodeSecp256k1Signature(this.pubkey, c);
          return { signed: n, signature: d };
        }
      }
      n.DirectSecp256k1Wallet = DirectSecp256k1Wallet;
    },
    3787: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.makeCosmoshubPath = void 0));
      const o = r(2800);
      function i(t) {
        return [
          o.Slip10RawIndex.hardened(44),
          o.Slip10RawIndex.hardened(118),
          o.Slip10RawIndex.hardened(0),
          o.Slip10RawIndex.normal(0),
          o.Slip10RawIndex.normal(t),
        ];
      }
      n.makeCosmoshubPath = i;
    },
    3788: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.decodePubkey = n.encodePubkey = void 0));
      const o = r(2910),
        i = r(2762),
        s = r(2796),
        a = r(3789),
        u = r(3790),
        c = r(2781);
      function d(t) {
        if (o.isSecp256k1Pubkey(t)) {
          const n = u.PubKey.fromPartial({ key: i.fromBase64(t.value) });
          return c.Any.fromPartial({
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: Uint8Array.from(u.PubKey.encode(n).finish()),
          });
        }
        if (o.isMultisigThresholdPubkey(t)) {
          const n = a.LegacyAminoPubKey.fromPartial({
            threshold: s.Uint53.fromString(t.value.threshold).toNumber(),
            publicKeys: t.value.pubkeys.map(d),
          });
          return c.Any.fromPartial({
            typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
            value: Uint8Array.from(a.LegacyAminoPubKey.encode(n).finish()),
          });
        }
        throw new Error(`Pubkey type ${t.type} not recognized`);
      }
      function l(t) {
        switch (t.typeUrl) {
          case "/cosmos.crypto.secp256k1.PubKey": {
            const { key: n } = u.PubKey.decode(t.value);
            return o.encodeSecp256k1Pubkey(n);
          }
          default:
            throw new Error(
              `Pubkey type_url ${t.typeUrl} not recognized as single public key type`,
            );
        }
      }
      function f(t) {
        if (!t || !t.value) return null;
        switch (t.typeUrl) {
          case "/cosmos.crypto.secp256k1.PubKey":
            return l(t);
          case "/cosmos.crypto.multisig.LegacyAminoPubKey": {
            const { threshold: n, publicKeys: r } = a.LegacyAminoPubKey.decode(
                t.value,
              ),
              o = {
                type: "tendermint/PubKeyMultisigThreshold",
                value: { threshold: n.toString(), pubkeys: r.map(l) },
              };
            return o;
          }
          default:
            throw new Error(`Pubkey type_url ${t.typeUrl} not recognized`);
        }
      }
      ((n.encodePubkey = d), (n.decodePubkey = f));
    },
    3789: function (t, n, r) {
      "use strict";
      var o =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.LegacyAminoPubKey = n.protobufPackage = void 0));
      const i = o(r(2754)),
        s = o(r(2755)),
        a = r(2781);
      n.protobufPackage = "cosmos.crypto.multisig";
      const u = { threshold: 0 };
      ((n.LegacyAminoPubKey = {
        encode(t, n = s.default.Writer.create()) {
          0 !== t.threshold && n.uint32(8).uint32(t.threshold);
          for (const r of t.publicKeys)
            a.Any.encode(r, n.uint32(18).fork()).ldelim();
          return n;
        },
        decode(t, n) {
          const r = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? r.len : r.pos + n;
          const i = Object.assign({}, u);
          i.publicKeys = [];
          while (r.pos < o) {
            const t = r.uint32();
            switch (t >>> 3) {
              case 1:
                i.threshold = r.uint32();
                break;
              case 2:
                i.publicKeys.push(a.Any.decode(r, r.uint32()));
                break;
              default:
                r.skipType(7 & t);
                break;
            }
          }
          return i;
        },
        fromJSON(t) {
          const n = Object.assign({}, u);
          if (
            ((n.publicKeys = []),
            void 0 !== t.threshold && null !== t.threshold
              ? (n.threshold = Number(t.threshold))
              : (n.threshold = 0),
            void 0 !== t.publicKeys && null !== t.publicKeys)
          )
            for (const r of t.publicKeys) n.publicKeys.push(a.Any.fromJSON(r));
          return n;
        },
        toJSON(t) {
          const n = {};
          return (
            void 0 !== t.threshold && (n.threshold = t.threshold),
            t.publicKeys
              ? (n.publicKeys = t.publicKeys.map((t) =>
                  t ? a.Any.toJSON(t) : void 0,
                ))
              : (n.publicKeys = []),
            n
          );
        },
        fromPartial(t) {
          var n;
          const r = Object.assign({}, u);
          if (
            ((r.threshold = null !== (n = t.threshold) && void 0 !== n ? n : 0),
            (r.publicKeys = []),
            void 0 !== t.publicKeys && null !== t.publicKeys)
          )
            for (const o of t.publicKeys)
              r.publicKeys.push(a.Any.fromPartial(o));
          return r;
        },
      }),
        s.default.util.Long !== i.default &&
          ((s.default.util.Long = i.default), s.default.configure()));
    },
    3790: function (t, n, r) {
      "use strict";
      (function (t) {
        var o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.PrivKey = n.PubKey = n.protobufPackage = void 0));
        const i = o(r(2754)),
          s = o(r(2755));
        n.protobufPackage = "cosmos.crypto.secp256k1";
        const a = {};
        n.PubKey = {
          encode(t, n = s.default.Writer.create()) {
            return (0 !== t.key.length && n.uint32(10).bytes(t.key), n);
          },
          decode(t, n) {
            const r =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? r.len : r.pos + n;
            const i = Object.assign({}, a);
            i.key = new Uint8Array();
            while (r.pos < o) {
              const t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  i.key = r.bytes();
                  break;
                default:
                  r.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, a);
            return (
              (n.key = new Uint8Array()),
              void 0 !== t.key && null !== t.key && (n.key = l(t.key)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.key &&
                (n.key = h(void 0 !== t.key ? t.key : new Uint8Array())),
              n
            );
          },
          fromPartial(t) {
            var n;
            const r = Object.assign({}, a);
            return (
              (r.key =
                null !== (n = t.key) && void 0 !== n ? n : new Uint8Array()),
              r
            );
          },
        };
        const u = {};
        n.PrivKey = {
          encode(t, n = s.default.Writer.create()) {
            return (0 !== t.key.length && n.uint32(10).bytes(t.key), n);
          },
          decode(t, n) {
            const r =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? r.len : r.pos + n;
            const i = Object.assign({}, u);
            i.key = new Uint8Array();
            while (r.pos < o) {
              const t = r.uint32();
              switch (t >>> 3) {
                case 1:
                  i.key = r.bytes();
                  break;
                default:
                  r.skipType(7 & t);
                  break;
              }
            }
            return i;
          },
          fromJSON(t) {
            const n = Object.assign({}, u);
            return (
              (n.key = new Uint8Array()),
              void 0 !== t.key && null !== t.key && (n.key = l(t.key)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.key &&
                (n.key = h(void 0 !== t.key ? t.key : new Uint8Array())),
              n
            );
          },
          fromPartial(t) {
            var n;
            const r = Object.assign({}, u);
            return (
              (r.key =
                null !== (n = t.key) && void 0 !== n ? n : new Uint8Array()),
              r
            );
          },
        };
        var c = (() => {
          if ("undefined" !== typeof c) return c;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const d =
          c.atob || ((t) => c.Buffer.from(t, "base64").toString("binary"));
        function l(t) {
          const n = d(t),
            r = new Uint8Array(n.length);
          for (let o = 0; o < n.length; ++o) r[o] = n.charCodeAt(o);
          return r;
        }
        const f =
          c.btoa || ((t) => c.Buffer.from(t, "binary").toString("base64"));
        function h(t) {
          const n = [];
          for (const r of t) n.push(String.fromCharCode(r));
          return f(n.join(""));
        }
        s.default.util.Long !== i.default &&
          ((s.default.util.Long = i.default), s.default.configure());
      }).call(this, r(13));
    },
    3791: function (t, n, r) {
      "use strict";
      function o(t) {
        return void 0 !== t.signDirect;
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isOfflineDirectSigner = void 0),
        (n.isOfflineDirectSigner = o));
    },
  },
]);
