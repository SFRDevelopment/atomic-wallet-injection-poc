(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [242],
  {
    2754: function (t, e) {
      t.exports = i;
      var o = null;
      try {
        o = new WebAssembly.Instance(
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
      } catch (P) {}
      function i(t, e, o) {
        ((this.low = 0 | t), (this.high = 0 | e), (this.unsigned = !!o));
      }
      function n(t) {
        return !0 === (t && t["__isLong__"]);
      }
      (i.prototype.__isLong__,
        Object.defineProperty(i.prototype, "__isLong__", { value: !0 }),
        (i.isLong = n));
      var r = {},
        s = {};
      function a(t, e) {
        var o, i, n;
        return e
          ? ((t >>>= 0),
            (n = 0 <= t && t < 256) && ((i = s[t]), i)
              ? i
              : ((o = l(t, (0 | t) < 0 ? -1 : 0, !0)), n && (s[t] = o), o))
          : ((t |= 0),
            (n = -128 <= t && t < 128) && ((i = r[t]), i)
              ? i
              : ((o = l(t, t < 0 ? -1 : 0, !1)), n && (r[t] = o), o));
      }
      function u(t, e) {
        if (isNaN(t)) return e ? _ : m;
        if (e) {
          if (t < 0) return _;
          if (t >= y) return I;
        } else {
          if (t <= -g) return N;
          if (t + 1 >= g) return S;
        }
        return t < 0 ? u(-t, e).neg() : l((t % v) | 0, (t / v) | 0, e);
      }
      function l(t, e, o) {
        return new i(t, e, o);
      }
      ((i.fromInt = a), (i.fromNumber = u), (i.fromBits = l));
      var d = Math.pow;
      function h(t, e, o) {
        if (0 === t.length) throw Error("empty string");
        if (
          "NaN" === t ||
          "Infinity" === t ||
          "+Infinity" === t ||
          "-Infinity" === t
        )
          return m;
        if (
          ("number" === typeof e ? ((o = e), (e = !1)) : (e = !!e),
          (o = o || 10),
          o < 2 || 36 < o)
        )
          throw RangeError("radix");
        var i;
        if ((i = t.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === i) return h(t.substring(1), e, o).neg();
        for (var n = u(d(o, 8)), r = m, s = 0; s < t.length; s += 8) {
          var a = Math.min(8, t.length - s),
            l = parseInt(t.substring(s, s + a), o);
          if (a < 8) {
            var c = u(d(o, a));
            r = r.mul(c).add(u(l));
          } else ((r = r.mul(n)), (r = r.add(u(l))));
        }
        return ((r.unsigned = e), r);
      }
      function c(t, e) {
        return "number" === typeof t
          ? u(t, e)
          : "string" === typeof t
            ? h(t, e)
            : l(t.low, t.high, "boolean" === typeof e ? e : t.unsigned);
      }
      ((i.fromString = h), (i.fromValue = c));
      var f = 65536,
        p = 1 << 24,
        v = f * f,
        y = v * v,
        g = y / 2,
        b = a(p),
        m = a(0);
      i.ZERO = m;
      var _ = a(0, !0);
      i.UZERO = _;
      var w = a(1);
      i.ONE = w;
      var k = a(1, !0);
      i.UONE = k;
      var O = a(-1);
      i.NEG_ONE = O;
      var S = l(-1, 2147483647, !1);
      i.MAX_VALUE = S;
      var I = l(-1, -1, !0);
      i.MAX_UNSIGNED_VALUE = I;
      var N = l(0, -2147483648, !1);
      i.MIN_VALUE = N;
      var A = i.prototype;
      ((A.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
      }),
        (A.toNumber = function () {
          return this.unsigned
            ? (this.high >>> 0) * v + (this.low >>> 0)
            : this.high * v + (this.low >>> 0);
        }),
        (A.toString = function (t) {
          if (((t = t || 10), t < 2 || 36 < t)) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative()) {
            if (this.eq(N)) {
              var e = u(t),
                o = this.div(e),
                i = o.mul(e).sub(this);
              return o.toString(t) + i.toInt().toString(t);
            }
            return "-" + this.neg().toString(t);
          }
          var n = u(d(t, 6), this.unsigned),
            r = this,
            s = "";
          while (1) {
            var a = r.div(n),
              l = r.sub(a.mul(n)).toInt() >>> 0,
              h = l.toString(t);
            if (((r = a), r.isZero())) return h + s;
            while (h.length < 6) h = "0" + h;
            s = "" + h + s;
          }
        }),
        (A.getHighBits = function () {
          return this.high;
        }),
        (A.getHighBitsUnsigned = function () {
          return this.high >>> 0;
        }),
        (A.getLowBits = function () {
          return this.low;
        }),
        (A.getLowBitsUnsigned = function () {
          return this.low >>> 0;
        }),
        (A.getNumBitsAbs = function () {
          if (this.isNegative())
            return this.eq(N) ? 64 : this.neg().getNumBitsAbs();
          for (
            var t = 0 != this.high ? this.high : this.low, e = 31;
            e > 0;
            e--
          )
            if (0 != (t & (1 << e))) break;
          return 0 != this.high ? e + 33 : e + 1;
        }),
        (A.isZero = function () {
          return 0 === this.high && 0 === this.low;
        }),
        (A.eqz = A.isZero),
        (A.isNegative = function () {
          return !this.unsigned && this.high < 0;
        }),
        (A.isPositive = function () {
          return this.unsigned || this.high >= 0;
        }),
        (A.isOdd = function () {
          return 1 === (1 & this.low);
        }),
        (A.isEven = function () {
          return 0 === (1 & this.low);
        }),
        (A.equals = function (t) {
          return (
            n(t) || (t = c(t)),
            (this.unsigned === t.unsigned ||
              this.high >>> 31 !== 1 ||
              t.high >>> 31 !== 1) &&
              this.high === t.high &&
              this.low === t.low
          );
        }),
        (A.eq = A.equals),
        (A.notEquals = function (t) {
          return !this.eq(t);
        }),
        (A.neq = A.notEquals),
        (A.ne = A.notEquals),
        (A.lessThan = function (t) {
          return this.comp(t) < 0;
        }),
        (A.lt = A.lessThan),
        (A.lessThanOrEqual = function (t) {
          return this.comp(t) <= 0;
        }),
        (A.lte = A.lessThanOrEqual),
        (A.le = A.lessThanOrEqual),
        (A.greaterThan = function (t) {
          return this.comp(t) > 0;
        }),
        (A.gt = A.greaterThan),
        (A.greaterThanOrEqual = function (t) {
          return this.comp(t) >= 0;
        }),
        (A.gte = A.greaterThanOrEqual),
        (A.ge = A.greaterThanOrEqual),
        (A.compare = function (t) {
          if ((n(t) || (t = c(t)), this.eq(t))) return 0;
          var e = this.isNegative(),
            o = t.isNegative();
          return e && !o
            ? -1
            : !e && o
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
        (A.comp = A.compare),
        (A.negate = function () {
          return !this.unsigned && this.eq(N) ? N : this.not().add(w);
        }),
        (A.neg = A.negate),
        (A.add = function (t) {
          n(t) || (t = c(t));
          var e = this.high >>> 16,
            o = 65535 & this.high,
            i = this.low >>> 16,
            r = 65535 & this.low,
            s = t.high >>> 16,
            a = 65535 & t.high,
            u = t.low >>> 16,
            d = 65535 & t.low,
            h = 0,
            f = 0,
            p = 0,
            v = 0;
          return (
            (v += r + d),
            (p += v >>> 16),
            (v &= 65535),
            (p += i + u),
            (f += p >>> 16),
            (p &= 65535),
            (f += o + a),
            (h += f >>> 16),
            (f &= 65535),
            (h += e + s),
            (h &= 65535),
            l((p << 16) | v, (h << 16) | f, this.unsigned)
          );
        }),
        (A.subtract = function (t) {
          return (n(t) || (t = c(t)), this.add(t.neg()));
        }),
        (A.sub = A.subtract),
        (A.multiply = function (t) {
          if (this.isZero()) return m;
          if ((n(t) || (t = c(t)), o)) {
            var e = o.mul(this.low, this.high, t.low, t.high);
            return l(e, o.get_high(), this.unsigned);
          }
          if (t.isZero()) return m;
          if (this.eq(N)) return t.isOdd() ? N : m;
          if (t.eq(N)) return this.isOdd() ? N : m;
          if (this.isNegative())
            return t.isNegative()
              ? this.neg().mul(t.neg())
              : this.neg().mul(t).neg();
          if (t.isNegative()) return this.mul(t.neg()).neg();
          if (this.lt(b) && t.lt(b))
            return u(this.toNumber() * t.toNumber(), this.unsigned);
          var i = this.high >>> 16,
            r = 65535 & this.high,
            s = this.low >>> 16,
            a = 65535 & this.low,
            d = t.high >>> 16,
            h = 65535 & t.high,
            f = t.low >>> 16,
            p = 65535 & t.low,
            v = 0,
            y = 0,
            g = 0,
            _ = 0;
          return (
            (_ += a * p),
            (g += _ >>> 16),
            (_ &= 65535),
            (g += s * p),
            (y += g >>> 16),
            (g &= 65535),
            (g += a * f),
            (y += g >>> 16),
            (g &= 65535),
            (y += r * p),
            (v += y >>> 16),
            (y &= 65535),
            (y += s * f),
            (v += y >>> 16),
            (y &= 65535),
            (y += a * h),
            (v += y >>> 16),
            (y &= 65535),
            (v += i * p + r * f + s * h + a * d),
            (v &= 65535),
            l((g << 16) | _, (v << 16) | y, this.unsigned)
          );
        }),
        (A.mul = A.multiply),
        (A.divide = function (t) {
          if ((n(t) || (t = c(t)), t.isZero())) throw Error("division by zero");
          if (o) {
            if (
              !this.unsigned &&
              -2147483648 === this.high &&
              -1 === t.low &&
              -1 === t.high
            )
              return this;
            var e = (this.unsigned ? o.div_u : o.div_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return l(e, o.get_high(), this.unsigned);
          }
          if (this.isZero()) return this.unsigned ? _ : m;
          var i, r, s;
          if (this.unsigned) {
            if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return _;
            if (t.gt(this.shru(1))) return k;
            s = _;
          } else {
            if (this.eq(N)) {
              if (t.eq(w) || t.eq(O)) return N;
              if (t.eq(N)) return w;
              var a = this.shr(1);
              return (
                (i = a.div(t).shl(1)),
                i.eq(m)
                  ? t.isNegative()
                    ? w
                    : O
                  : ((r = this.sub(t.mul(i))), (s = i.add(r.div(t))), s)
              );
            }
            if (t.eq(N)) return this.unsigned ? _ : m;
            if (this.isNegative())
              return t.isNegative()
                ? this.neg().div(t.neg())
                : this.neg().div(t).neg();
            if (t.isNegative()) return this.div(t.neg()).neg();
            s = m;
          }
          r = this;
          while (r.gte(t)) {
            i = Math.max(1, Math.floor(r.toNumber() / t.toNumber()));
            var h = Math.ceil(Math.log(i) / Math.LN2),
              f = h <= 48 ? 1 : d(2, h - 48),
              p = u(i),
              v = p.mul(t);
            while (v.isNegative() || v.gt(r))
              ((i -= f), (p = u(i, this.unsigned)), (v = p.mul(t)));
            (p.isZero() && (p = w), (s = s.add(p)), (r = r.sub(v)));
          }
          return s;
        }),
        (A.div = A.divide),
        (A.modulo = function (t) {
          if ((n(t) || (t = c(t)), o)) {
            var e = (this.unsigned ? o.rem_u : o.rem_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return l(e, o.get_high(), this.unsigned);
          }
          return this.sub(this.div(t).mul(t));
        }),
        (A.mod = A.modulo),
        (A.rem = A.modulo),
        (A.not = function () {
          return l(~this.low, ~this.high, this.unsigned);
        }),
        (A.and = function (t) {
          return (
            n(t) || (t = c(t)),
            l(this.low & t.low, this.high & t.high, this.unsigned)
          );
        }),
        (A.or = function (t) {
          return (
            n(t) || (t = c(t)),
            l(this.low | t.low, this.high | t.high, this.unsigned)
          );
        }),
        (A.xor = function (t) {
          return (
            n(t) || (t = c(t)),
            l(this.low ^ t.low, this.high ^ t.high, this.unsigned)
          );
        }),
        (A.shiftLeft = function (t) {
          return (
            n(t) && (t = t.toInt()),
            0 === (t &= 63)
              ? this
              : t < 32
                ? l(
                    this.low << t,
                    (this.high << t) | (this.low >>> (32 - t)),
                    this.unsigned,
                  )
                : l(0, this.low << (t - 32), this.unsigned)
          );
        }),
        (A.shl = A.shiftLeft),
        (A.shiftRight = function (t) {
          return (
            n(t) && (t = t.toInt()),
            0 === (t &= 63)
              ? this
              : t < 32
                ? l(
                    (this.low >>> t) | (this.high << (32 - t)),
                    this.high >> t,
                    this.unsigned,
                  )
                : l(
                    this.high >> (t - 32),
                    this.high >= 0 ? 0 : -1,
                    this.unsigned,
                  )
          );
        }),
        (A.shr = A.shiftRight),
        (A.shiftRightUnsigned = function (t) {
          if ((n(t) && (t = t.toInt()), (t &= 63), 0 === t)) return this;
          var e = this.high;
          if (t < 32) {
            var o = this.low;
            return l((o >>> t) | (e << (32 - t)), e >>> t, this.unsigned);
          }
          return l(32 === t ? e : e >>> (t - 32), 0, this.unsigned);
        }),
        (A.shru = A.shiftRightUnsigned),
        (A.shr_u = A.shiftRightUnsigned),
        (A.toSigned = function () {
          return this.unsigned ? l(this.low, this.high, !1) : this;
        }),
        (A.toUnsigned = function () {
          return this.unsigned ? this : l(this.low, this.high, !0);
        }),
        (A.toBytes = function (t) {
          return t ? this.toBytesLE() : this.toBytesBE();
        }),
        (A.toBytesLE = function () {
          var t = this.high,
            e = this.low;
          return [
            255 & e,
            (e >>> 8) & 255,
            (e >>> 16) & 255,
            e >>> 24,
            255 & t,
            (t >>> 8) & 255,
            (t >>> 16) & 255,
            t >>> 24,
          ];
        }),
        (A.toBytesBE = function () {
          var t = this.high,
            e = this.low;
          return [
            t >>> 24,
            (t >>> 16) & 255,
            (t >>> 8) & 255,
            255 & t,
            e >>> 24,
            (e >>> 16) & 255,
            (e >>> 8) & 255,
            255 & e,
          ];
        }),
        (i.fromBytes = function (t, e, o) {
          return o ? i.fromBytesLE(t, e) : i.fromBytesBE(t, e);
        }),
        (i.fromBytesLE = function (t, e) {
          return new i(
            t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
            t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
            e,
          );
        }),
        (i.fromBytesBE = function (t, e) {
          return new i(
            (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
            (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
            e,
          );
        }));
    },
    2755: function (t, e, o) {
      "use strict";
      t.exports = o(3094);
    },
    2791: function (t, e, o) {
      "use strict";
      (function (t) {
        var i = e;
        function n(t, e, o) {
          for (var i = Object.keys(e), n = 0; n < i.length; ++n)
            (void 0 !== t[i[n]] && o) || (t[i[n]] = e[i[n]]);
          return t;
        }
        function r(t) {
          function e(t, o) {
            if (!(this instanceof e)) return new e(t, o);
            (Object.defineProperty(this, "message", {
              get: function () {
                return t;
              },
            }),
              Error.captureStackTrace
                ? Error.captureStackTrace(this, e)
                : Object.defineProperty(this, "stack", {
                    value: new Error().stack || "",
                  }),
              o && n(this, o));
          }
          return (
            ((e.prototype = Object.create(Error.prototype)).constructor = e),
            Object.defineProperty(e.prototype, "name", {
              get: function () {
                return t;
              },
            }),
            (e.prototype.toString = function () {
              return this.name + ": " + this.message;
            }),
            e
          );
        }
        ((i.asPromise = o(3021)),
          (i.base64 = o(3022)),
          (i.EventEmitter = o(3023)),
          (i.float = o(3024)),
          (i.inquire = o(3025)),
          (i.utf8 = o(3026)),
          (i.pool = o(3027)),
          (i.LongBits = o(3095)),
          (i.isNode = Boolean(
            "undefined" !== typeof t &&
            t &&
            t.process &&
            t.process.versions &&
            t.process.versions.node,
          )),
          (i.global =
            (i.isNode && t) ||
            ("undefined" !== typeof window && window) ||
            ("undefined" !== typeof self && self) ||
            this),
          (i.emptyArray = Object.freeze ? Object.freeze([]) : []),
          (i.emptyObject = Object.freeze ? Object.freeze({}) : {}),
          (i.isInteger =
            Number.isInteger ||
            function (t) {
              return (
                "number" === typeof t && isFinite(t) && Math.floor(t) === t
              );
            }),
          (i.isString = function (t) {
            return "string" === typeof t || t instanceof String;
          }),
          (i.isObject = function (t) {
            return t && "object" === typeof t;
          }),
          (i.isset = i.isSet =
            function (t, e) {
              var o = t[e];
              return (
                !(null == o || !t.hasOwnProperty(e)) &&
                ("object" !== typeof o ||
                  (Array.isArray(o) ? o.length : Object.keys(o).length) > 0)
              );
            }),
          (i.Buffer = (function () {
            try {
              var t = i.inquire("buffer").Buffer;
              return t.prototype.utf8Write ? t : null;
            } catch (e) {
              return null;
            }
          })()),
          (i._Buffer_from = null),
          (i._Buffer_allocUnsafe = null),
          (i.newBuffer = function (t) {
            return "number" === typeof t
              ? i.Buffer
                ? i._Buffer_allocUnsafe(t)
                : new i.Array(t)
              : i.Buffer
                ? i._Buffer_from(t)
                : "undefined" === typeof Uint8Array
                  ? t
                  : new Uint8Array(t);
          }),
          (i.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array),
          (i.Long =
            (i.global.dcodeIO && i.global.dcodeIO.Long) ||
            i.global.Long ||
            i.inquire("long")),
          (i.key2Re = /^true|false|0|1$/),
          (i.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
          (i.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
          (i.longToHash = function (t) {
            return t ? i.LongBits.from(t).toHash() : i.LongBits.zeroHash;
          }),
          (i.longFromHash = function (t, e) {
            var o = i.LongBits.fromHash(t);
            return i.Long
              ? i.Long.fromBits(o.lo, o.hi, e)
              : o.toNumber(Boolean(e));
          }),
          (i.merge = n),
          (i.lcFirst = function (t) {
            return t.charAt(0).toLowerCase() + t.substring(1);
          }),
          (i.newError = r),
          (i.ProtocolError = r("ProtocolError")),
          (i.oneOfGetter = function (t) {
            for (var e = {}, o = 0; o < t.length; ++o) e[t[o]] = 1;
            return function () {
              for (var t = Object.keys(this), o = t.length - 1; o > -1; --o)
                if (
                  1 === e[t[o]] &&
                  void 0 !== this[t[o]] &&
                  null !== this[t[o]]
                )
                  return t[o];
            };
          }),
          (i.oneOfSetter = function (t) {
            return function (e) {
              for (var o = 0; o < t.length; ++o)
                t[o] !== e && delete this[t[o]];
            };
          }),
          (i.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0,
          }),
          (i._configure = function () {
            var t = i.Buffer;
            t
              ? ((i._Buffer_from =
                  (t.from !== Uint8Array.from && t.from) ||
                  function (e, o) {
                    return new t(e, o);
                  }),
                (i._Buffer_allocUnsafe =
                  t.allocUnsafe ||
                  function (e) {
                    return new t(e);
                  }))
              : (i._Buffer_from = i._Buffer_allocUnsafe = null);
          }));
      }).call(this, o(13));
    },
    2951: function (t, e, o) {
      "use strict";
      t.exports = h;
      var i,
        n = o(2791),
        r = n.LongBits,
        s = n.base64,
        a = n.utf8;
      function u(t, e, o) {
        ((this.fn = t), (this.len = e), (this.next = void 0), (this.val = o));
      }
      function l() {}
      function d(t) {
        ((this.head = t.head),
          (this.tail = t.tail),
          (this.len = t.len),
          (this.next = t.states));
      }
      function h() {
        ((this.len = 0),
          (this.head = new u(l, 0, 0)),
          (this.tail = this.head),
          (this.states = null));
      }
      var c = function () {
        return n.Buffer
          ? function () {
              return (h.create = function () {
                return new i();
              })();
            }
          : function () {
              return new h();
            };
      };
      function f(t, e, o) {
        e[o] = 255 & t;
      }
      function p(t, e, o) {
        while (t > 127) ((e[o++] = (127 & t) | 128), (t >>>= 7));
        e[o] = t;
      }
      function v(t, e) {
        ((this.len = t), (this.next = void 0), (this.val = e));
      }
      function y(t, e, o) {
        while (t.hi)
          ((e[o++] = (127 & t.lo) | 128),
            (t.lo = ((t.lo >>> 7) | (t.hi << 25)) >>> 0),
            (t.hi >>>= 7));
        while (t.lo > 127) ((e[o++] = (127 & t.lo) | 128), (t.lo = t.lo >>> 7));
        e[o++] = t.lo;
      }
      function g(t, e, o) {
        ((e[o] = 255 & t),
          (e[o + 1] = (t >>> 8) & 255),
          (e[o + 2] = (t >>> 16) & 255),
          (e[o + 3] = t >>> 24));
      }
      ((h.create = c()),
        (h.alloc = function (t) {
          return new n.Array(t);
        }),
        n.Array !== Array &&
          (h.alloc = n.pool(h.alloc, n.Array.prototype.subarray)),
        (h.prototype._push = function (t, e, o) {
          return (
            (this.tail = this.tail.next = new u(t, e, o)),
            (this.len += e),
            this
          );
        }),
        (v.prototype = Object.create(u.prototype)),
        (v.prototype.fn = p),
        (h.prototype.uint32 = function (t) {
          return (
            (this.len += (this.tail = this.tail.next =
              new v(
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
        (h.prototype.int32 = function (t) {
          return t < 0 ? this._push(y, 10, r.fromNumber(t)) : this.uint32(t);
        }),
        (h.prototype.sint32 = function (t) {
          return this.uint32(((t << 1) ^ (t >> 31)) >>> 0);
        }),
        (h.prototype.uint64 = function (t) {
          var e = r.from(t);
          return this._push(y, e.length(), e);
        }),
        (h.prototype.int64 = h.prototype.uint64),
        (h.prototype.sint64 = function (t) {
          var e = r.from(t).zzEncode();
          return this._push(y, e.length(), e);
        }),
        (h.prototype.bool = function (t) {
          return this._push(f, 1, t ? 1 : 0);
        }),
        (h.prototype.fixed32 = function (t) {
          return this._push(g, 4, t >>> 0);
        }),
        (h.prototype.sfixed32 = h.prototype.fixed32),
        (h.prototype.fixed64 = function (t) {
          var e = r.from(t);
          return this._push(g, 4, e.lo)._push(g, 4, e.hi);
        }),
        (h.prototype.sfixed64 = h.prototype.fixed64),
        (h.prototype.float = function (t) {
          return this._push(n.float.writeFloatLE, 4, t);
        }),
        (h.prototype.double = function (t) {
          return this._push(n.float.writeDoubleLE, 8, t);
        }));
      var b = n.Array.prototype.set
        ? function (t, e, o) {
            e.set(t, o);
          }
        : function (t, e, o) {
            for (var i = 0; i < t.length; ++i) e[o + i] = t[i];
          };
      ((h.prototype.bytes = function (t) {
        var e = t.length >>> 0;
        if (!e) return this._push(f, 1, 0);
        if (n.isString(t)) {
          var o = h.alloc((e = s.length(t)));
          (s.decode(t, o, 0), (t = o));
        }
        return this.uint32(e)._push(b, e, t);
      }),
        (h.prototype.string = function (t) {
          var e = a.length(t);
          return e ? this.uint32(e)._push(a.write, e, t) : this._push(f, 1, 0);
        }),
        (h.prototype.fork = function () {
          return (
            (this.states = new d(this)),
            (this.head = this.tail = new u(l, 0, 0)),
            (this.len = 0),
            this
          );
        }),
        (h.prototype.reset = function () {
          return (
            this.states
              ? ((this.head = this.states.head),
                (this.tail = this.states.tail),
                (this.len = this.states.len),
                (this.states = this.states.next))
              : ((this.head = this.tail = new u(l, 0, 0)), (this.len = 0)),
            this
          );
        }),
        (h.prototype.ldelim = function () {
          var t = this.head,
            e = this.tail,
            o = this.len;
          return (
            this.reset().uint32(o),
            o && ((this.tail.next = t.next), (this.tail = e), (this.len += o)),
            this
          );
        }),
        (h.prototype.finish = function () {
          var t = this.head.next,
            e = this.constructor.alloc(this.len),
            o = 0;
          while (t) (t.fn(t.val, e, o), (o += t.len), (t = t.next));
          return e;
        }),
        (h._configure = function (t) {
          ((i = t), (h.create = c()), i._configure());
        }));
    },
    2952: function (t, e, o) {
      "use strict";
      t.exports = u;
      var i,
        n = o(2791),
        r = n.LongBits,
        s = n.utf8;
      function a(t, e) {
        return RangeError(
          "index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len,
        );
      }
      function u(t) {
        ((this.buf = t), (this.pos = 0), (this.len = t.length));
      }
      var l =
          "undefined" !== typeof Uint8Array
            ? function (t) {
                if (t instanceof Uint8Array || Array.isArray(t))
                  return new u(t);
                throw Error("illegal buffer");
              }
            : function (t) {
                if (Array.isArray(t)) return new u(t);
                throw Error("illegal buffer");
              },
        d = function () {
          return n.Buffer
            ? function (t) {
                return (u.create = function (t) {
                  return n.Buffer.isBuffer(t) ? new i(t) : l(t);
                })(t);
              }
            : l;
        };
      function h() {
        var t = new r(0, 0),
          e = 0;
        if (!(this.len - this.pos > 4)) {
          for (; e < 3; ++e) {
            if (this.pos >= this.len) throw a(this);
            if (
              ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * e))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
          return (
            (t.lo = (t.lo | ((127 & this.buf[this.pos++]) << (7 * e))) >>> 0),
            t
          );
        }
        for (; e < 4; ++e)
          if (
            ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * e))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return t;
        if (
          ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
          (t.hi = (t.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return t;
        if (((e = 0), this.len - this.pos > 4)) {
          for (; e < 5; ++e)
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * e + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
        } else
          for (; e < 5; ++e) {
            if (this.pos >= this.len) throw a(this);
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * e + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
        throw Error("invalid varint encoding");
      }
      function c(t, e) {
        return (
          (t[e - 4] | (t[e - 3] << 8) | (t[e - 2] << 16) | (t[e - 1] << 24)) >>>
          0
        );
      }
      function f() {
        if (this.pos + 8 > this.len) throw a(this, 8);
        return new r(
          c(this.buf, (this.pos += 4)),
          c(this.buf, (this.pos += 4)),
        );
      }
      ((u.create = d()),
        (u.prototype._slice =
          n.Array.prototype.subarray || n.Array.prototype.slice),
        (u.prototype.uint32 = (function () {
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
              throw ((this.pos = this.len), a(this, 10));
            return t;
          };
        })()),
        (u.prototype.int32 = function () {
          return 0 | this.uint32();
        }),
        (u.prototype.sint32 = function () {
          var t = this.uint32();
          return ((t >>> 1) ^ -(1 & t)) | 0;
        }),
        (u.prototype.bool = function () {
          return 0 !== this.uint32();
        }),
        (u.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) throw a(this, 4);
          return c(this.buf, (this.pos += 4));
        }),
        (u.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) throw a(this, 4);
          return 0 | c(this.buf, (this.pos += 4));
        }),
        (u.prototype.float = function () {
          if (this.pos + 4 > this.len) throw a(this, 4);
          var t = n.float.readFloatLE(this.buf, this.pos);
          return ((this.pos += 4), t);
        }),
        (u.prototype.double = function () {
          if (this.pos + 8 > this.len) throw a(this, 4);
          var t = n.float.readDoubleLE(this.buf, this.pos);
          return ((this.pos += 8), t);
        }),
        (u.prototype.bytes = function () {
          var t = this.uint32(),
            e = this.pos,
            o = this.pos + t;
          if (o > this.len) throw a(this, t);
          return (
            (this.pos += t),
            Array.isArray(this.buf)
              ? this.buf.slice(e, o)
              : e === o
                ? new this.buf.constructor(0)
                : this._slice.call(this.buf, e, o)
          );
        }),
        (u.prototype.string = function () {
          var t = this.bytes();
          return s.read(t, 0, t.length);
        }),
        (u.prototype.skip = function (t) {
          if ("number" === typeof t) {
            if (this.pos + t > this.len) throw a(this, t);
            this.pos += t;
          } else
            do {
              if (this.pos >= this.len) throw a(this);
            } while (128 & this.buf[this.pos++]);
          return this;
        }),
        (u.prototype.skipType = function (t) {
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
        (u._configure = function (t) {
          ((i = t), (u.create = d()), i._configure());
          var e = n.Long ? "toLong" : "toNumber";
          n.merge(u.prototype, {
            int64: function () {
              return h.call(this)[e](!1);
            },
            uint64: function () {
              return h.call(this)[e](!0);
            },
            sint64: function () {
              return h.call(this).zzDecode()[e](!1);
            },
            fixed64: function () {
              return f.call(this)[e](!0);
            },
            sfixed64: function () {
              return f.call(this)[e](!1);
            },
          });
        }));
    },
    2955: function (t, e, o) {
      "use strict";
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, o) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                }),
              t(e, o)
            );
          };
          return function (e, o) {
            function i() {
              this.constructor = e;
            }
            (t(e, o),
              (e.prototype =
                null === o
                  ? Object.create(o)
                  : ((i.prototype = o.prototype), new i())));
          };
        })();
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.NO_IL = e.NO = e.MemoryStream = e.Stream = void 0));
      var n = o(4417),
        r = o(4419),
        s = n.default(r.getPolyfill()),
        a = {};
      function u() {}
      function l(t) {
        for (var e = t.length, o = Array(e), i = 0; i < e; ++i) o[i] = t[i];
        return o;
      }
      function d(t, e) {
        return function (o) {
          return t(o) && e(o);
        };
      }
      function h(t, e, o) {
        try {
          return t.f(e);
        } catch (i) {
          return (o._e(i), a);
        }
      }
      e.NO = a;
      var c = { _n: u, _e: u, _c: u };
      function f(t) {
        ((t._start = function (t) {
          ((t.next = t._n),
            (t.error = t._e),
            (t.complete = t._c),
            this.start(t));
        }),
          (t._stop = t.stop));
      }
      e.NO_IL = c;
      var p = (function () {
          function t(t, e) {
            ((this._stream = t), (this._listener = e));
          }
          return (
            (t.prototype.unsubscribe = function () {
              this._stream._remove(this._listener);
            }),
            t
          );
        })(),
        v = (function () {
          function t(t) {
            this._listener = t;
          }
          return (
            (t.prototype.next = function (t) {
              this._listener._n(t);
            }),
            (t.prototype.error = function (t) {
              this._listener._e(t);
            }),
            (t.prototype.complete = function () {
              this._listener._c();
            }),
            t
          );
        })(),
        y = (function () {
          function t(t) {
            ((this.type = "fromObservable"),
              (this.ins = t),
              (this.active = !1));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t),
                (this.active = !0),
                (this._sub = this.ins.subscribe(new v(t))),
                this.active || this._sub.unsubscribe());
            }),
            (t.prototype._stop = function () {
              (this._sub && this._sub.unsubscribe(), (this.active = !1));
            }),
            t
          );
        })(),
        g = (function () {
          function t(t) {
            ((this.type = "merge"),
              (this.insArr = t),
              (this.out = a),
              (this.ac = 0));
          }
          return (
            (t.prototype._start = function (t) {
              this.out = t;
              var e = this.insArr,
                o = e.length;
              this.ac = o;
              for (var i = 0; i < o; i++) e[i]._add(this);
            }),
            (t.prototype._stop = function () {
              for (var t = this.insArr, e = t.length, o = 0; o < e; o++)
                t[o]._remove(this);
              this.out = a;
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              e !== a && e._n(t);
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== a && e._e(t);
            }),
            (t.prototype._c = function () {
              if (--this.ac <= 0) {
                var t = this.out;
                if (t === a) return;
                t._c();
              }
            }),
            t
          );
        })(),
        b = (function () {
          function t(t, e, o) {
            ((this.i = t), (this.out = e), (this.p = o), o.ils.push(this));
          }
          return (
            (t.prototype._n = function (t) {
              var e = this.p,
                o = this.out;
              if (o !== a && e.up(t, this.i)) {
                var i = l(e.vals);
                o._n(i);
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== a && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.p;
              t.out !== a && 0 === --t.Nc && t.out._c();
            }),
            t
          );
        })(),
        m = (function () {
          function t(t) {
            ((this.type = "combine"),
              (this.insArr = t),
              (this.out = a),
              (this.ils = []),
              (this.Nc = this.Nn = 0),
              (this.vals = []));
          }
          return (
            (t.prototype.up = function (t, e) {
              var o = this.vals[e],
                i = this.Nn ? (o === a ? --this.Nn : this.Nn) : 0;
              return ((this.vals[e] = t), 0 === i);
            }),
            (t.prototype._start = function (t) {
              this.out = t;
              var e = this.insArr,
                o = (this.Nc = this.Nn = e.length),
                i = (this.vals = new Array(o));
              if (0 === o) (t._n([]), t._c());
              else
                for (var n = 0; n < o; n++)
                  ((i[n] = a), e[n]._add(new b(n, t, this)));
            }),
            (t.prototype._stop = function () {
              for (
                var t = this.insArr, e = t.length, o = this.ils, i = 0;
                i < e;
                i++
              )
                t[i]._remove(o[i]);
              ((this.out = a), (this.ils = []), (this.vals = []));
            }),
            t
          );
        })(),
        _ = (function () {
          function t(t) {
            ((this.type = "fromArray"), (this.a = t));
          }
          return (
            (t.prototype._start = function (t) {
              for (var e = this.a, o = 0, i = e.length; o < i; o++) t._n(e[o]);
              t._c();
            }),
            (t.prototype._stop = function () {}),
            t
          );
        })(),
        w = (function () {
          function t(t) {
            ((this.type = "fromPromise"), (this.on = !1), (this.p = t));
          }
          return (
            (t.prototype._start = function (t) {
              var e = this;
              ((this.on = !0),
                this.p
                  .then(
                    function (o) {
                      e.on && (t._n(o), t._c());
                    },
                    function (e) {
                      t._e(e);
                    },
                  )
                  .then(u, function (t) {
                    setTimeout(function () {
                      throw t;
                    });
                  }));
            }),
            (t.prototype._stop = function () {
              this.on = !1;
            }),
            t
          );
        })(),
        k = (function () {
          function t(t) {
            ((this.type = "periodic"),
              (this.period = t),
              (this.intervalID = -1),
              (this.i = 0));
          }
          return (
            (t.prototype._start = function (t) {
              var e = this;
              function o() {
                t._n(e.i++);
              }
              this.intervalID = setInterval(o, this.period);
            }),
            (t.prototype._stop = function () {
              (-1 !== this.intervalID && clearInterval(this.intervalID),
                (this.intervalID = -1),
                (this.i = 0));
            }),
            t
          );
        })(),
        O = (function () {
          function t(t, e) {
            ((this.type = "debug"),
              (this.ins = t),
              (this.out = a),
              (this.s = u),
              (this.l = ""),
              "string" === typeof e
                ? (this.l = e)
                : "function" === typeof e && (this.s = e));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = a));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              if (e !== a) {
                var o = this.s,
                  i = this.l;
                if (o !== u)
                  try {
                    o(t);
                  } catch (n) {
                    e._e(n);
                  }
                else i ? console.log(i + ":", t) : console.log(t);
                e._n(t);
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== a && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== a && t._c();
            }),
            t
          );
        })(),
        S = (function () {
          function t(t, e) {
            ((this.type = "drop"),
              (this.ins = e),
              (this.out = a),
              (this.max = t),
              (this.dropped = 0));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), (this.dropped = 0), this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = a));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              e !== a && this.dropped++ >= this.max && e._n(t);
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== a && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== a && t._c();
            }),
            t
          );
        })(),
        I = (function () {
          function t(t, e) {
            ((this.out = t), (this.op = e));
          }
          return (
            (t.prototype._n = function () {
              this.op.end();
            }),
            (t.prototype._e = function (t) {
              this.out._e(t);
            }),
            (t.prototype._c = function () {
              this.op.end();
            }),
            t
          );
        })(),
        N = (function () {
          function t(t, e) {
            ((this.type = "endWhen"),
              (this.ins = e),
              (this.out = a),
              (this.o = t),
              (this.oil = c));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t),
                this.o._add((this.oil = new I(t, this))),
                this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this),
                this.o._remove(this.oil),
                (this.out = a),
                (this.oil = c));
            }),
            (t.prototype.end = function () {
              var t = this.out;
              t !== a && t._c();
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              e !== a && e._n(t);
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== a && e._e(t);
            }),
            (t.prototype._c = function () {
              this.end();
            }),
            t
          );
        })(),
        A = (function () {
          function t(t, e) {
            ((this.type = "filter"),
              (this.ins = e),
              (this.out = a),
              (this.f = t));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = a));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              if (e !== a) {
                var o = h(this, t, e);
                o !== a && o && e._n(t);
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== a && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== a && t._c();
            }),
            t
          );
        })(),
        P = (function () {
          function t(t, e) {
            ((this.out = t), (this.op = e));
          }
          return (
            (t.prototype._n = function (t) {
              this.out._n(t);
            }),
            (t.prototype._e = function (t) {
              this.out._e(t);
            }),
            (t.prototype._c = function () {
              ((this.op.inner = a), this.op.less());
            }),
            t
          );
        })(),
        H = (function () {
          function t(t) {
            ((this.type = "flatten"),
              (this.ins = t),
              (this.out = a),
              (this.open = !0),
              (this.inner = a),
              (this.il = c));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t),
                (this.open = !0),
                (this.inner = a),
                (this.il = c),
                this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this),
                this.inner !== a && this.inner._remove(this.il),
                (this.out = a),
                (this.open = !0),
                (this.inner = a),
                (this.il = c));
            }),
            (t.prototype.less = function () {
              var t = this.out;
              t !== a && (this.open || this.inner !== a || t._c());
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              if (e !== a) {
                var o = this,
                  i = o.inner,
                  n = o.il;
                (i !== a && n !== c && i._remove(n),
                  (this.inner = t)._add((this.il = new P(e, this))));
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== a && e._e(t);
            }),
            (t.prototype._c = function () {
              ((this.open = !1), this.less());
            }),
            t
          );
        })(),
        E = (function () {
          function t(t, e, o) {
            var i = this;
            ((this.type = "fold"),
              (this.ins = o),
              (this.out = a),
              (this.f = function (e) {
                return t(i.acc, e);
              }),
              (this.acc = this.seed = e));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t),
                (this.acc = this.seed),
                t._n(this.acc),
                this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = a), (this.acc = this.seed));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              if (e !== a) {
                var o = h(this, t, e);
                o !== a && e._n((this.acc = o));
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== a && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== a && t._c();
            }),
            t
          );
        })(),
        R = (function () {
          function t(t) {
            ((this.type = "last"),
              (this.ins = t),
              (this.out = a),
              (this.has = !1),
              (this.val = a));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), (this.has = !1), this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = a), (this.val = a));
            }),
            (t.prototype._n = function (t) {
              ((this.has = !0), (this.val = t));
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== a && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== a &&
                (this.has
                  ? (t._n(this.val), t._c())
                  : t._e(
                      new Error("last() failed because input stream completed"),
                    ));
            }),
            t
          );
        })(),
        U = (function () {
          function t(t, e) {
            ((this.type = "map"), (this.ins = e), (this.out = a), (this.f = t));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = a));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              if (e !== a) {
                var o = h(this, t, e);
                o !== a && e._n(o);
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== a && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== a && t._c();
            }),
            t
          );
        })(),
        x = (function () {
          function t(t) {
            ((this.type = "remember"), (this.ins = t), (this.out = a));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), this.ins._add(t));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this.out), (this.out = a));
            }),
            t
          );
        })(),
        B = (function () {
          function t(t, e) {
            ((this.type = "replaceError"),
              (this.ins = e),
              (this.out = a),
              (this.f = t));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = a));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              e !== a && e._n(t);
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              if (e !== a)
                try {
                  (this.ins._remove(this), (this.ins = this.f(t))._add(this));
                } catch (o) {
                  e._e(o);
                }
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== a && t._c();
            }),
            t
          );
        })(),
        T = (function () {
          function t(t, e) {
            ((this.type = "startWith"),
              (this.ins = t),
              (this.out = a),
              (this.val = e));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), this.out._n(this.val), this.ins._add(t));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this.out), (this.out = a));
            }),
            t
          );
        })(),
        D = (function () {
          function t(t, e) {
            ((this.type = "take"),
              (this.ins = e),
              (this.out = a),
              (this.max = t),
              (this.taken = 0));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t),
                (this.taken = 0),
                this.max <= 0 ? t._c() : this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = a));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              if (e !== a) {
                var o = ++this.taken;
                o < this.max ? e._n(t) : o === this.max && (e._n(t), e._c());
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== a && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== a && t._c();
            }),
            t
          );
        })(),
        j = (function () {
          function t(t) {
            ((this._prod = t || a),
              (this._ils = []),
              (this._stopID = a),
              (this._dl = a),
              (this._d = !1),
              (this._target = null),
              (this._err = a));
          }
          return (
            (t.prototype._n = function (t) {
              var e = this._ils,
                o = e.length;
              if ((this._d && this._dl._n(t), 1 == o)) e[0]._n(t);
              else {
                if (0 == o) return;
                for (var i = l(e), n = 0; n < o; n++) i[n]._n(t);
              }
            }),
            (t.prototype._e = function (t) {
              if (this._err === a) {
                this._err = t;
                var e = this._ils,
                  o = e.length;
                if ((this._x(), this._d && this._dl._e(t), 1 == o)) e[0]._e(t);
                else {
                  if (0 == o) return;
                  for (var i = l(e), n = 0; n < o; n++) i[n]._e(t);
                }
                if (!this._d && 0 == o) throw this._err;
              }
            }),
            (t.prototype._c = function () {
              var t = this._ils,
                e = t.length;
              if ((this._x(), this._d && this._dl._c(), 1 == e)) t[0]._c();
              else {
                if (0 == e) return;
                for (var o = l(t), i = 0; i < e; i++) o[i]._c();
              }
            }),
            (t.prototype._x = function () {
              0 !== this._ils.length &&
                (this._prod !== a && this._prod._stop(),
                (this._err = a),
                (this._ils = []));
            }),
            (t.prototype._stopNow = function () {
              (this._prod._stop(), (this._err = a), (this._stopID = a));
            }),
            (t.prototype._add = function (t) {
              var e = this._target;
              if (e) return e._add(t);
              var o = this._ils;
              if ((o.push(t), !(o.length > 1)))
                if (this._stopID !== a)
                  (clearTimeout(this._stopID), (this._stopID = a));
                else {
                  var i = this._prod;
                  i !== a && i._start(this);
                }
            }),
            (t.prototype._remove = function (t) {
              var e = this,
                o = this._target;
              if (o) return o._remove(t);
              var i = this._ils,
                n = i.indexOf(t);
              n > -1 &&
                (i.splice(n, 1),
                this._prod !== a && i.length <= 0
                  ? ((this._err = a),
                    (this._stopID = setTimeout(function () {
                      return e._stopNow();
                    })))
                  : 1 === i.length && this._pruneCycles());
            }),
            (t.prototype._pruneCycles = function () {
              this._hasNoSinks(this, []) && this._remove(this._ils[0]);
            }),
            (t.prototype._hasNoSinks = function (t, e) {
              if (-1 !== e.indexOf(t)) return !0;
              if (t.out === this) return !0;
              if (t.out && t.out !== a)
                return this._hasNoSinks(t.out, e.concat(t));
              if (t._ils) {
                for (var o = 0, i = t._ils.length; o < i; o++)
                  if (!this._hasNoSinks(t._ils[o], e.concat(t))) return !1;
                return !0;
              }
              return !1;
            }),
            (t.prototype.ctor = function () {
              return this instanceof L ? L : t;
            }),
            (t.prototype.addListener = function (t) {
              ((t._n = t.next || u),
                (t._e = t.error || u),
                (t._c = t.complete || u),
                this._add(t));
            }),
            (t.prototype.removeListener = function (t) {
              this._remove(t);
            }),
            (t.prototype.subscribe = function (t) {
              return (this.addListener(t), new p(this, t));
            }),
            (t.prototype[s] = function () {
              return this;
            }),
            (t.create = function (e) {
              if (e) {
                if (
                  "function" !== typeof e.start ||
                  "function" !== typeof e.stop
                )
                  throw new Error(
                    "producer requires both start and stop functions",
                  );
                f(e);
              }
              return new t(e);
            }),
            (t.createWithMemory = function (t) {
              return (t && f(t), new L(t));
            }),
            (t.never = function () {
              return new t({ _start: u, _stop: u });
            }),
            (t.empty = function () {
              return new t({
                _start: function (t) {
                  t._c();
                },
                _stop: u,
              });
            }),
            (t.throw = function (e) {
              return new t({
                _start: function (t) {
                  t._e(e);
                },
                _stop: u,
              });
            }),
            (t.from = function (e) {
              if ("function" === typeof e[s]) return t.fromObservable(e);
              if ("function" === typeof e.then) return t.fromPromise(e);
              if (Array.isArray(e)) return t.fromArray(e);
              throw new TypeError(
                "Type of input to from() must be an Array, Promise, or Observable",
              );
            }),
            (t.of = function () {
              for (var e = [], o = 0; o < arguments.length; o++)
                e[o] = arguments[o];
              return t.fromArray(e);
            }),
            (t.fromArray = function (e) {
              return new t(new _(e));
            }),
            (t.fromPromise = function (e) {
              return new t(new w(e));
            }),
            (t.fromObservable = function (e) {
              if (void 0 !== e.endWhen) return e;
              var o = "function" === typeof e[s] ? e[s]() : e;
              return new t(new y(o));
            }),
            (t.periodic = function (e) {
              return new t(new k(e));
            }),
            (t.prototype._map = function (t) {
              return new (this.ctor())(new U(t, this));
            }),
            (t.prototype.map = function (t) {
              return this._map(t);
            }),
            (t.prototype.mapTo = function (t) {
              var e = this.map(function () {
                  return t;
                }),
                o = e._prod;
              return ((o.type = "mapTo"), e);
            }),
            (t.prototype.filter = function (e) {
              var o = this._prod;
              return new t(
                o instanceof A ? new A(d(o.f, e), o.ins) : new A(e, this),
              );
            }),
            (t.prototype.take = function (t) {
              return new (this.ctor())(new D(t, this));
            }),
            (t.prototype.drop = function (e) {
              return new t(new S(e, this));
            }),
            (t.prototype.last = function () {
              return new t(new R(this));
            }),
            (t.prototype.startWith = function (t) {
              return new L(new T(this, t));
            }),
            (t.prototype.endWhen = function (t) {
              return new (this.ctor())(new N(t, this));
            }),
            (t.prototype.fold = function (t, e) {
              return new L(new E(t, e, this));
            }),
            (t.prototype.replaceError = function (t) {
              return new (this.ctor())(new B(t, this));
            }),
            (t.prototype.flatten = function () {
              return new t(new H(this));
            }),
            (t.prototype.compose = function (t) {
              return t(this);
            }),
            (t.prototype.remember = function () {
              return new L(new x(this));
            }),
            (t.prototype.debug = function (t) {
              return new (this.ctor())(new O(this, t));
            }),
            (t.prototype.imitate = function (t) {
              if (t instanceof L)
                throw new Error(
                  "A MemoryStream was given to imitate(), but it only supports a Stream. Read more about this restriction here: https://github.com/staltz/xstream#faq",
                );
              this._target = t;
              for (var e = this._ils, o = e.length, i = 0; i < o; i++)
                t._add(e[i]);
              this._ils = [];
            }),
            (t.prototype.shamefullySendNext = function (t) {
              this._n(t);
            }),
            (t.prototype.shamefullySendError = function (t) {
              this._e(t);
            }),
            (t.prototype.shamefullySendComplete = function () {
              this._c();
            }),
            (t.prototype.setDebugListener = function (t) {
              t
                ? ((this._d = !0),
                  (t._n = t.next || u),
                  (t._e = t.error || u),
                  (t._c = t.complete || u),
                  (this._dl = t))
                : ((this._d = !1), (this._dl = a));
            }),
            (t.merge = function () {
              for (var e = [], o = 0; o < arguments.length; o++)
                e[o] = arguments[o];
              return new t(new g(e));
            }),
            (t.combine = function () {
              for (var e = [], o = 0; o < arguments.length; o++)
                e[o] = arguments[o];
              return new t(new m(e));
            }),
            t
          );
        })();
      e.Stream = j;
      var L = (function (t) {
        function e(e) {
          var o = t.call(this, e) || this;
          return ((o._has = !1), o);
        }
        return (
          i(e, t),
          (e.prototype._n = function (e) {
            ((this._v = e), (this._has = !0), t.prototype._n.call(this, e));
          }),
          (e.prototype._add = function (t) {
            var e = this._target;
            if (e) return e._add(t);
            var o = this._ils;
            if ((o.push(t), o.length > 1)) this._has && t._n(this._v);
            else if (this._stopID !== a)
              (this._has && t._n(this._v),
                clearTimeout(this._stopID),
                (this._stopID = a));
            else if (this._has) t._n(this._v);
            else {
              var i = this._prod;
              i !== a && i._start(this);
            }
          }),
          (e.prototype._stopNow = function () {
            ((this._has = !1), t.prototype._stopNow.call(this));
          }),
          (e.prototype._x = function () {
            ((this._has = !1), t.prototype._x.call(this));
          }),
          (e.prototype.map = function (t) {
            return this._map(t);
          }),
          (e.prototype.mapTo = function (e) {
            return t.prototype.mapTo.call(this, e);
          }),
          (e.prototype.take = function (e) {
            return t.prototype.take.call(this, e);
          }),
          (e.prototype.endWhen = function (e) {
            return t.prototype.endWhen.call(this, e);
          }),
          (e.prototype.replaceError = function (e) {
            return t.prototype.replaceError.call(this, e);
          }),
          (e.prototype.remember = function () {
            return this;
          }),
          (e.prototype.debug = function (e) {
            return t.prototype.debug.call(this, e);
          }),
          e
        );
      })(j);
      e.MemoryStream = L;
      var J = j;
      e.default = J;
    },
    3094: function (t, e, o) {
      "use strict";
      var i = e;
      function n() {
        (i.util._configure(),
          i.Writer._configure(i.BufferWriter),
          i.Reader._configure(i.BufferReader));
      }
      ((i.build = "minimal"),
        (i.Writer = o(2951)),
        (i.BufferWriter = o(3096)),
        (i.Reader = o(2952)),
        (i.BufferReader = o(3097)),
        (i.util = o(2791)),
        (i.rpc = o(3098)),
        (i.roots = o(3100)),
        (i.configure = n),
        n());
    },
    3095: function (t, e, o) {
      "use strict";
      t.exports = n;
      var i = o(2791);
      function n(t, e) {
        ((this.lo = t >>> 0), (this.hi = e >>> 0));
      }
      var r = (n.zero = new n(0, 0));
      ((r.toNumber = function () {
        return 0;
      }),
        (r.zzEncode = r.zzDecode =
          function () {
            return this;
          }),
        (r.length = function () {
          return 1;
        }));
      var s = (n.zeroHash = "\0\0\0\0\0\0\0\0");
      ((n.fromNumber = function (t) {
        if (0 === t) return r;
        var e = t < 0;
        e && (t = -t);
        var o = t >>> 0,
          i = ((t - o) / 4294967296) >>> 0;
        return (
          e &&
            ((i = ~i >>> 0),
            (o = ~o >>> 0),
            ++o > 4294967295 && ((o = 0), ++i > 4294967295 && (i = 0))),
          new n(o, i)
        );
      }),
        (n.from = function (t) {
          if ("number" === typeof t) return n.fromNumber(t);
          if (i.isString(t)) {
            if (!i.Long) return n.fromNumber(parseInt(t, 10));
            t = i.Long.fromString(t);
          }
          return t.low || t.high ? new n(t.low >>> 0, t.high >>> 0) : r;
        }),
        (n.prototype.toNumber = function (t) {
          if (!t && this.hi >>> 31) {
            var e = (1 + ~this.lo) >>> 0,
              o = ~this.hi >>> 0;
            return (e || (o = (o + 1) >>> 0), -(e + 4294967296 * o));
          }
          return this.lo + 4294967296 * this.hi;
        }),
        (n.prototype.toLong = function (t) {
          return i.Long
            ? new i.Long(0 | this.lo, 0 | this.hi, Boolean(t))
            : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(t) };
        }));
      var a = String.prototype.charCodeAt;
      ((n.fromHash = function (t) {
        return t === s
          ? r
          : new n(
              (a.call(t, 0) |
                (a.call(t, 1) << 8) |
                (a.call(t, 2) << 16) |
                (a.call(t, 3) << 24)) >>>
                0,
              (a.call(t, 4) |
                (a.call(t, 5) << 8) |
                (a.call(t, 6) << 16) |
                (a.call(t, 7) << 24)) >>>
                0,
            );
      }),
        (n.prototype.toHash = function () {
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
        (n.prototype.zzEncode = function () {
          var t = this.hi >> 31;
          return (
            (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ t) >>> 0),
            (this.lo = ((this.lo << 1) ^ t) >>> 0),
            this
          );
        }),
        (n.prototype.zzDecode = function () {
          var t = -(1 & this.lo);
          return (
            (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ t) >>> 0),
            (this.hi = ((this.hi >>> 1) ^ t) >>> 0),
            this
          );
        }),
        (n.prototype.length = function () {
          var t = this.lo,
            e = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
            o = this.hi >>> 24;
          return 0 === o
            ? 0 === e
              ? t < 16384
                ? t < 128
                  ? 1
                  : 2
                : t < 2097152
                  ? 3
                  : 4
              : e < 16384
                ? e < 128
                  ? 5
                  : 6
                : e < 2097152
                  ? 7
                  : 8
            : o < 128
              ? 9
              : 10;
        }));
    },
    3096: function (t, e, o) {
      "use strict";
      t.exports = r;
      var i = o(2951);
      (r.prototype = Object.create(i.prototype)).constructor = r;
      var n = o(2791);
      function r() {
        i.call(this);
      }
      function s(t, e, o) {
        t.length < 40
          ? n.utf8.write(t, e, o)
          : e.utf8Write
            ? e.utf8Write(t, o)
            : e.write(t, o);
      }
      ((r._configure = function () {
        ((r.alloc = n._Buffer_allocUnsafe),
          (r.writeBytesBuffer =
            n.Buffer &&
            n.Buffer.prototype instanceof Uint8Array &&
            "set" === n.Buffer.prototype.set.name
              ? function (t, e, o) {
                  e.set(t, o);
                }
              : function (t, e, o) {
                  if (t.copy) t.copy(e, o, 0, t.length);
                  else for (var i = 0; i < t.length; ) e[o++] = t[i++];
                }));
      }),
        (r.prototype.bytes = function (t) {
          n.isString(t) && (t = n._Buffer_from(t, "base64"));
          var e = t.length >>> 0;
          return (
            this.uint32(e),
            e && this._push(r.writeBytesBuffer, e, t),
            this
          );
        }),
        (r.prototype.string = function (t) {
          var e = n.Buffer.byteLength(t);
          return (this.uint32(e), e && this._push(s, e, t), this);
        }),
        r._configure());
    },
    3097: function (t, e, o) {
      "use strict";
      t.exports = r;
      var i = o(2952);
      (r.prototype = Object.create(i.prototype)).constructor = r;
      var n = o(2791);
      function r(t) {
        i.call(this, t);
      }
      ((r._configure = function () {
        n.Buffer && (r.prototype._slice = n.Buffer.prototype.slice);
      }),
        (r.prototype.string = function () {
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
        r._configure());
    },
    3098: function (t, e, o) {
      "use strict";
      var i = e;
      i.Service = o(3099);
    },
    3099: function (t, e, o) {
      "use strict";
      t.exports = n;
      var i = o(2791);
      function n(t, e, o) {
        if ("function" !== typeof t)
          throw TypeError("rpcImpl must be a function");
        (i.EventEmitter.call(this),
          (this.rpcImpl = t),
          (this.requestDelimited = Boolean(e)),
          (this.responseDelimited = Boolean(o)));
      }
      (((n.prototype = Object.create(i.EventEmitter.prototype)).constructor =
        n),
        (n.prototype.rpcCall = function t(e, o, n, r, s) {
          if (!r) throw TypeError("request must be specified");
          var a = this;
          if (!s) return i.asPromise(t, a, e, o, n, r);
          if (a.rpcImpl)
            try {
              return a.rpcImpl(
                e,
                o[a.requestDelimited ? "encodeDelimited" : "encode"](
                  r,
                ).finish(),
                function (t, o) {
                  if (t) return (a.emit("error", t, e), s(t));
                  if (null !== o) {
                    if (!(o instanceof n))
                      try {
                        o =
                          n[a.responseDelimited ? "decodeDelimited" : "decode"](
                            o,
                          );
                      } catch (t) {
                        return (a.emit("error", t, e), s(t));
                      }
                    return (a.emit("data", o, e), s(null, o));
                  }
                  a.end(!0);
                },
              );
            } catch (u) {
              return (
                a.emit("error", u, e),
                void setTimeout(function () {
                  s(u);
                }, 0)
              );
            }
          else
            setTimeout(function () {
              s(Error("already ended"));
            }, 0);
        }),
        (n.prototype.end = function (t) {
          return (
            this.rpcImpl &&
              (t || this.rpcImpl(null, null, null),
              (this.rpcImpl = null),
              this.emit("end").off()),
            this
          );
        }));
    },
    3100: function (t, e, o) {
      "use strict";
      t.exports = {};
    },
    3566: function (t, e, o) {
      "use strict";
      var i = o(835),
        n = "function" === typeof Symbol && "symbol" === typeof Symbol("foo"),
        r = Object.prototype.toString,
        s = Array.prototype.concat,
        a = o(3656),
        u = function (t) {
          return "function" === typeof t && "[object Function]" === r.call(t);
        },
        l = o(3657)(),
        d = function (t, e, o, i) {
          if (e in t)
            if (!0 === i) {
              if (t[e] === o) return;
            } else if (!u(i) || !i()) return;
          l ? a(t, e, o, !0) : a(t, e, o);
        },
        h = function (t, e) {
          var o = arguments.length > 2 ? arguments[2] : {},
            r = i(e);
          n && (r = s.call(r, Object.getOwnPropertySymbols(e)));
          for (var a = 0; a < r.length; a += 1) d(t, r[a], e[r[a]], o[r[a]]);
        };
      ((h.supportsDescriptors = !!l), (t.exports = h));
    },
    3567: function (t, e, o) {
      "use strict";
      "undefined" !== typeof self
        ? (t.exports = self)
        : "undefined" !== typeof window
          ? (t.exports = window)
          : (t.exports = Function("return this")());
    },
    3568: function (t, e, o) {
      "use strict";
      (function (e) {
        var i = o(3567);
        t.exports = function () {
          return "object" === typeof e &&
            e &&
            e.Math === Math &&
            e.Array === Array
            ? e
            : i;
        };
      }).call(this, o(13));
    },
    3572: function (t, e, o) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TxProof =
            e.BlockMeta =
            e.LightBlock =
            e.SignedHeader =
            e.Proposal =
            e.CommitSig =
            e.Commit =
            e.Vote =
            e.Data =
            e.Header =
            e.BlockID =
            e.Part =
            e.PartSetHeader =
            e.signedMsgTypeToJSON =
            e.signedMsgTypeFromJSON =
            e.SignedMsgType =
            e.blockIDFlagToJSON =
            e.blockIDFlagFromJSON =
            e.BlockIDFlag =
            e.protobufPackage =
              void 0));
        const n = i(o(2754)),
          r = i(o(2755)),
          s = o(4441),
          a = o(4442),
          u = o(3573),
          l = o(3064);
        var d, h;
        function c(t) {
          switch (t) {
            case 0:
            case "BLOCK_ID_FLAG_UNKNOWN":
              return d.BLOCK_ID_FLAG_UNKNOWN;
            case 1:
            case "BLOCK_ID_FLAG_ABSENT":
              return d.BLOCK_ID_FLAG_ABSENT;
            case 2:
            case "BLOCK_ID_FLAG_COMMIT":
              return d.BLOCK_ID_FLAG_COMMIT;
            case 3:
            case "BLOCK_ID_FLAG_NIL":
              return d.BLOCK_ID_FLAG_NIL;
            case -1:
            case "UNRECOGNIZED":
            default:
              return d.UNRECOGNIZED;
          }
        }
        function f(t) {
          switch (t) {
            case d.BLOCK_ID_FLAG_UNKNOWN:
              return "BLOCK_ID_FLAG_UNKNOWN";
            case d.BLOCK_ID_FLAG_ABSENT:
              return "BLOCK_ID_FLAG_ABSENT";
            case d.BLOCK_ID_FLAG_COMMIT:
              return "BLOCK_ID_FLAG_COMMIT";
            case d.BLOCK_ID_FLAG_NIL:
              return "BLOCK_ID_FLAG_NIL";
            default:
              return "UNKNOWN";
          }
        }
        function p(t) {
          switch (t) {
            case 0:
            case "SIGNED_MSG_TYPE_UNKNOWN":
              return h.SIGNED_MSG_TYPE_UNKNOWN;
            case 1:
            case "SIGNED_MSG_TYPE_PREVOTE":
              return h.SIGNED_MSG_TYPE_PREVOTE;
            case 2:
            case "SIGNED_MSG_TYPE_PRECOMMIT":
              return h.SIGNED_MSG_TYPE_PRECOMMIT;
            case 32:
            case "SIGNED_MSG_TYPE_PROPOSAL":
              return h.SIGNED_MSG_TYPE_PROPOSAL;
            case -1:
            case "UNRECOGNIZED":
            default:
              return h.UNRECOGNIZED;
          }
        }
        function v(t) {
          switch (t) {
            case h.SIGNED_MSG_TYPE_UNKNOWN:
              return "SIGNED_MSG_TYPE_UNKNOWN";
            case h.SIGNED_MSG_TYPE_PREVOTE:
              return "SIGNED_MSG_TYPE_PREVOTE";
            case h.SIGNED_MSG_TYPE_PRECOMMIT:
              return "SIGNED_MSG_TYPE_PRECOMMIT";
            case h.SIGNED_MSG_TYPE_PROPOSAL:
              return "SIGNED_MSG_TYPE_PROPOSAL";
            default:
              return "UNKNOWN";
          }
        }
        ((e.protobufPackage = "tendermint.types"),
          (function (t) {
            ((t[(t["BLOCK_ID_FLAG_UNKNOWN"] = 0)] = "BLOCK_ID_FLAG_UNKNOWN"),
              (t[(t["BLOCK_ID_FLAG_ABSENT"] = 1)] = "BLOCK_ID_FLAG_ABSENT"),
              (t[(t["BLOCK_ID_FLAG_COMMIT"] = 2)] = "BLOCK_ID_FLAG_COMMIT"),
              (t[(t["BLOCK_ID_FLAG_NIL"] = 3)] = "BLOCK_ID_FLAG_NIL"),
              (t[(t["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((d = e.BlockIDFlag || (e.BlockIDFlag = {}))),
          (e.blockIDFlagFromJSON = c),
          (e.blockIDFlagToJSON = f),
          (function (t) {
            ((t[(t["SIGNED_MSG_TYPE_UNKNOWN"] = 0)] =
              "SIGNED_MSG_TYPE_UNKNOWN"),
              (t[(t["SIGNED_MSG_TYPE_PREVOTE"] = 1)] =
                "SIGNED_MSG_TYPE_PREVOTE"),
              (t[(t["SIGNED_MSG_TYPE_PRECOMMIT"] = 2)] =
                "SIGNED_MSG_TYPE_PRECOMMIT"),
              (t[(t["SIGNED_MSG_TYPE_PROPOSAL"] = 32)] =
                "SIGNED_MSG_TYPE_PROPOSAL"),
              (t[(t["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((h = e.SignedMsgType || (e.SignedMsgType = {}))),
          (e.signedMsgTypeFromJSON = p),
          (e.signedMsgTypeToJSON = v));
        const y = { total: 0 };
        e.PartSetHeader = {
          encode(t, e) {
            return (
              void 0 === e && (e = r.default.Writer.create()),
              0 !== t.total && e.uint32(8).uint32(t.total),
              0 !== t.hash.length && e.uint32(18).bytes(t.hash),
              e
            );
          },
          decode(t, e) {
            const o =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let i = void 0 === e ? o.len : o.pos + e;
            const n = Object.assign({}, y);
            n.hash = new Uint8Array();
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  n.total = o.uint32();
                  break;
                case 2:
                  n.hash = o.bytes();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return n;
          },
          fromJSON(t) {
            const e = Object.assign({}, y);
            return (
              (e.hash = new Uint8Array()),
              void 0 !== t.total && null !== t.total
                ? (e.total = Number(t.total))
                : (e.total = 0),
              void 0 !== t.hash && null !== t.hash && (e.hash = R(t.hash)),
              e
            );
          },
          toJSON(t) {
            const e = {};
            return (
              void 0 !== t.total && (e.total = t.total),
              void 0 !== t.hash &&
                (e.hash = x(void 0 !== t.hash ? t.hash : new Uint8Array())),
              e
            );
          },
          fromPartial(t) {
            var e, o;
            const i = Object.assign({}, y);
            return (
              (i.total = null !== (e = t.total) && void 0 !== e ? e : 0),
              (i.hash =
                null !== (o = t.hash) && void 0 !== o ? o : new Uint8Array()),
              i
            );
          },
        };
        const g = { index: 0 };
        e.Part = {
          encode(t, e) {
            return (
              void 0 === e && (e = r.default.Writer.create()),
              0 !== t.index && e.uint32(8).uint32(t.index),
              0 !== t.bytes.length && e.uint32(18).bytes(t.bytes),
              void 0 !== t.proof &&
                s.Proof.encode(t.proof, e.uint32(26).fork()).ldelim(),
              e
            );
          },
          decode(t, e) {
            const o =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let i = void 0 === e ? o.len : o.pos + e;
            const n = Object.assign({}, g);
            n.bytes = new Uint8Array();
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  n.index = o.uint32();
                  break;
                case 2:
                  n.bytes = o.bytes();
                  break;
                case 3:
                  n.proof = s.Proof.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return n;
          },
          fromJSON(t) {
            const e = Object.assign({}, g);
            return (
              (e.bytes = new Uint8Array()),
              void 0 !== t.index && null !== t.index
                ? (e.index = Number(t.index))
                : (e.index = 0),
              void 0 !== t.bytes && null !== t.bytes && (e.bytes = R(t.bytes)),
              void 0 !== t.proof && null !== t.proof
                ? (e.proof = s.Proof.fromJSON(t.proof))
                : (e.proof = void 0),
              e
            );
          },
          toJSON(t) {
            const e = {};
            return (
              void 0 !== t.index && (e.index = t.index),
              void 0 !== t.bytes &&
                (e.bytes = x(void 0 !== t.bytes ? t.bytes : new Uint8Array())),
              void 0 !== t.proof &&
                (e.proof = t.proof ? s.Proof.toJSON(t.proof) : void 0),
              e
            );
          },
          fromPartial(t) {
            var e, o;
            const i = Object.assign({}, g);
            return (
              (i.index = null !== (e = t.index) && void 0 !== e ? e : 0),
              (i.bytes =
                null !== (o = t.bytes) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== t.proof && null !== t.proof
                ? (i.proof = s.Proof.fromPartial(t.proof))
                : (i.proof = void 0),
              i
            );
          },
        };
        const b = {};
        e.BlockID = {
          encode(t, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              0 !== t.hash.length && o.uint32(10).bytes(t.hash),
              void 0 !== t.partSetHeader &&
                e.PartSetHeader.encode(
                  t.partSetHeader,
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let n = void 0 === o ? i.len : i.pos + o;
            const s = Object.assign({}, b);
            s.hash = new Uint8Array();
            while (i.pos < n) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  s.hash = i.bytes();
                  break;
                case 2:
                  s.partSetHeader = e.PartSetHeader.decode(i, i.uint32());
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return s;
          },
          fromJSON(t) {
            const o = Object.assign({}, b);
            return (
              (o.hash = new Uint8Array()),
              void 0 !== t.hash && null !== t.hash && (o.hash = R(t.hash)),
              void 0 !== t.partSetHeader && null !== t.partSetHeader
                ? (o.partSetHeader = e.PartSetHeader.fromJSON(t.partSetHeader))
                : (o.partSetHeader = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.hash &&
                (o.hash = x(void 0 !== t.hash ? t.hash : new Uint8Array())),
              void 0 !== t.partSetHeader &&
                (o.partSetHeader = t.partSetHeader
                  ? e.PartSetHeader.toJSON(t.partSetHeader)
                  : void 0),
              o
            );
          },
          fromPartial(t) {
            var o;
            const i = Object.assign({}, b);
            return (
              (i.hash =
                null !== (o = t.hash) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== t.partSetHeader && null !== t.partSetHeader
                ? (i.partSetHeader = e.PartSetHeader.fromPartial(
                    t.partSetHeader,
                  ))
                : (i.partSetHeader = void 0),
              i
            );
          },
        };
        const m = { chainId: "", height: n.default.ZERO };
        e.Header = {
          encode(t, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              void 0 !== t.version &&
                a.Consensus.encode(t.version, o.uint32(10).fork()).ldelim(),
              "" !== t.chainId && o.uint32(18).string(t.chainId),
              t.height.isZero() || o.uint32(24).int64(t.height),
              void 0 !== t.time &&
                l.Timestamp.encode(B(t.time), o.uint32(34).fork()).ldelim(),
              void 0 !== t.lastBlockId &&
                e.BlockID.encode(t.lastBlockId, o.uint32(42).fork()).ldelim(),
              0 !== t.lastCommitHash.length &&
                o.uint32(50).bytes(t.lastCommitHash),
              0 !== t.dataHash.length && o.uint32(58).bytes(t.dataHash),
              0 !== t.validatorsHash.length &&
                o.uint32(66).bytes(t.validatorsHash),
              0 !== t.nextValidatorsHash.length &&
                o.uint32(74).bytes(t.nextValidatorsHash),
              0 !== t.consensusHash.length &&
                o.uint32(82).bytes(t.consensusHash),
              0 !== t.appHash.length && o.uint32(90).bytes(t.appHash),
              0 !== t.lastResultsHash.length &&
                o.uint32(98).bytes(t.lastResultsHash),
              0 !== t.evidenceHash.length &&
                o.uint32(106).bytes(t.evidenceHash),
              0 !== t.proposerAddress.length &&
                o.uint32(114).bytes(t.proposerAddress),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let n = void 0 === o ? i.len : i.pos + o;
            const s = Object.assign({}, m);
            ((s.lastCommitHash = new Uint8Array()),
              (s.dataHash = new Uint8Array()),
              (s.validatorsHash = new Uint8Array()),
              (s.nextValidatorsHash = new Uint8Array()),
              (s.consensusHash = new Uint8Array()),
              (s.appHash = new Uint8Array()),
              (s.lastResultsHash = new Uint8Array()),
              (s.evidenceHash = new Uint8Array()),
              (s.proposerAddress = new Uint8Array()));
            while (i.pos < n) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  s.version = a.Consensus.decode(i, i.uint32());
                  break;
                case 2:
                  s.chainId = i.string();
                  break;
                case 3:
                  s.height = i.int64();
                  break;
                case 4:
                  s.time = T(l.Timestamp.decode(i, i.uint32()));
                  break;
                case 5:
                  s.lastBlockId = e.BlockID.decode(i, i.uint32());
                  break;
                case 6:
                  s.lastCommitHash = i.bytes();
                  break;
                case 7:
                  s.dataHash = i.bytes();
                  break;
                case 8:
                  s.validatorsHash = i.bytes();
                  break;
                case 9:
                  s.nextValidatorsHash = i.bytes();
                  break;
                case 10:
                  s.consensusHash = i.bytes();
                  break;
                case 11:
                  s.appHash = i.bytes();
                  break;
                case 12:
                  s.lastResultsHash = i.bytes();
                  break;
                case 13:
                  s.evidenceHash = i.bytes();
                  break;
                case 14:
                  s.proposerAddress = i.bytes();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return s;
          },
          fromJSON(t) {
            const o = Object.assign({}, m);
            return (
              (o.lastCommitHash = new Uint8Array()),
              (o.dataHash = new Uint8Array()),
              (o.validatorsHash = new Uint8Array()),
              (o.nextValidatorsHash = new Uint8Array()),
              (o.consensusHash = new Uint8Array()),
              (o.appHash = new Uint8Array()),
              (o.lastResultsHash = new Uint8Array()),
              (o.evidenceHash = new Uint8Array()),
              (o.proposerAddress = new Uint8Array()),
              void 0 !== t.version && null !== t.version
                ? (o.version = a.Consensus.fromJSON(t.version))
                : (o.version = void 0),
              void 0 !== t.chainId && null !== t.chainId
                ? (o.chainId = String(t.chainId))
                : (o.chainId = ""),
              void 0 !== t.height && null !== t.height
                ? (o.height = n.default.fromString(t.height))
                : (o.height = n.default.ZERO),
              void 0 !== t.time && null !== t.time
                ? (o.time = D(t.time))
                : (o.time = void 0),
              void 0 !== t.lastBlockId && null !== t.lastBlockId
                ? (o.lastBlockId = e.BlockID.fromJSON(t.lastBlockId))
                : (o.lastBlockId = void 0),
              void 0 !== t.lastCommitHash &&
                null !== t.lastCommitHash &&
                (o.lastCommitHash = R(t.lastCommitHash)),
              void 0 !== t.dataHash &&
                null !== t.dataHash &&
                (o.dataHash = R(t.dataHash)),
              void 0 !== t.validatorsHash &&
                null !== t.validatorsHash &&
                (o.validatorsHash = R(t.validatorsHash)),
              void 0 !== t.nextValidatorsHash &&
                null !== t.nextValidatorsHash &&
                (o.nextValidatorsHash = R(t.nextValidatorsHash)),
              void 0 !== t.consensusHash &&
                null !== t.consensusHash &&
                (o.consensusHash = R(t.consensusHash)),
              void 0 !== t.appHash &&
                null !== t.appHash &&
                (o.appHash = R(t.appHash)),
              void 0 !== t.lastResultsHash &&
                null !== t.lastResultsHash &&
                (o.lastResultsHash = R(t.lastResultsHash)),
              void 0 !== t.evidenceHash &&
                null !== t.evidenceHash &&
                (o.evidenceHash = R(t.evidenceHash)),
              void 0 !== t.proposerAddress &&
                null !== t.proposerAddress &&
                (o.proposerAddress = R(t.proposerAddress)),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.version &&
                (o.version = t.version
                  ? a.Consensus.toJSON(t.version)
                  : void 0),
              void 0 !== t.chainId && (o.chainId = t.chainId),
              void 0 !== t.height &&
                (o.height = (t.height || n.default.ZERO).toString()),
              void 0 !== t.time && (o.time = t.time.toISOString()),
              void 0 !== t.lastBlockId &&
                (o.lastBlockId = t.lastBlockId
                  ? e.BlockID.toJSON(t.lastBlockId)
                  : void 0),
              void 0 !== t.lastCommitHash &&
                (o.lastCommitHash = x(
                  void 0 !== t.lastCommitHash
                    ? t.lastCommitHash
                    : new Uint8Array(),
                )),
              void 0 !== t.dataHash &&
                (o.dataHash = x(
                  void 0 !== t.dataHash ? t.dataHash : new Uint8Array(),
                )),
              void 0 !== t.validatorsHash &&
                (o.validatorsHash = x(
                  void 0 !== t.validatorsHash
                    ? t.validatorsHash
                    : new Uint8Array(),
                )),
              void 0 !== t.nextValidatorsHash &&
                (o.nextValidatorsHash = x(
                  void 0 !== t.nextValidatorsHash
                    ? t.nextValidatorsHash
                    : new Uint8Array(),
                )),
              void 0 !== t.consensusHash &&
                (o.consensusHash = x(
                  void 0 !== t.consensusHash
                    ? t.consensusHash
                    : new Uint8Array(),
                )),
              void 0 !== t.appHash &&
                (o.appHash = x(
                  void 0 !== t.appHash ? t.appHash : new Uint8Array(),
                )),
              void 0 !== t.lastResultsHash &&
                (o.lastResultsHash = x(
                  void 0 !== t.lastResultsHash
                    ? t.lastResultsHash
                    : new Uint8Array(),
                )),
              void 0 !== t.evidenceHash &&
                (o.evidenceHash = x(
                  void 0 !== t.evidenceHash ? t.evidenceHash : new Uint8Array(),
                )),
              void 0 !== t.proposerAddress &&
                (o.proposerAddress = x(
                  void 0 !== t.proposerAddress
                    ? t.proposerAddress
                    : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(t) {
            var o, i, r, s, u, l, d, h, c, f, p;
            const v = Object.assign({}, m);
            return (
              void 0 !== t.version && null !== t.version
                ? (v.version = a.Consensus.fromPartial(t.version))
                : (v.version = void 0),
              (v.chainId = null !== (o = t.chainId) && void 0 !== o ? o : ""),
              void 0 !== t.height && null !== t.height
                ? (v.height = t.height)
                : (v.height = n.default.ZERO),
              (v.time = null !== (i = t.time) && void 0 !== i ? i : void 0),
              void 0 !== t.lastBlockId && null !== t.lastBlockId
                ? (v.lastBlockId = e.BlockID.fromPartial(t.lastBlockId))
                : (v.lastBlockId = void 0),
              (v.lastCommitHash =
                null !== (r = t.lastCommitHash) && void 0 !== r
                  ? r
                  : new Uint8Array()),
              (v.dataHash =
                null !== (s = t.dataHash) && void 0 !== s
                  ? s
                  : new Uint8Array()),
              (v.validatorsHash =
                null !== (u = t.validatorsHash) && void 0 !== u
                  ? u
                  : new Uint8Array()),
              (v.nextValidatorsHash =
                null !== (l = t.nextValidatorsHash) && void 0 !== l
                  ? l
                  : new Uint8Array()),
              (v.consensusHash =
                null !== (d = t.consensusHash) && void 0 !== d
                  ? d
                  : new Uint8Array()),
              (v.appHash =
                null !== (h = t.appHash) && void 0 !== h
                  ? h
                  : new Uint8Array()),
              (v.lastResultsHash =
                null !== (c = t.lastResultsHash) && void 0 !== c
                  ? c
                  : new Uint8Array()),
              (v.evidenceHash =
                null !== (f = t.evidenceHash) && void 0 !== f
                  ? f
                  : new Uint8Array()),
              (v.proposerAddress =
                null !== (p = t.proposerAddress) && void 0 !== p
                  ? p
                  : new Uint8Array()),
              v
            );
          },
        };
        const _ = {};
        e.Data = {
          encode(t, e) {
            void 0 === e && (e = r.default.Writer.create());
            for (const o of t.txs) e.uint32(10).bytes(o);
            return e;
          },
          decode(t, e) {
            const o =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let i = void 0 === e ? o.len : o.pos + e;
            const n = Object.assign({}, _);
            n.txs = [];
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  n.txs.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return n;
          },
          fromJSON(t) {
            const e = Object.assign({}, _);
            if (((e.txs = []), void 0 !== t.txs && null !== t.txs))
              for (const o of t.txs) e.txs.push(R(o));
            return e;
          },
          toJSON(t) {
            const e = {};
            return (
              t.txs
                ? (e.txs = t.txs.map((t) =>
                    x(void 0 !== t ? t : new Uint8Array()),
                  ))
                : (e.txs = []),
              e
            );
          },
          fromPartial(t) {
            const e = Object.assign({}, _);
            if (((e.txs = []), void 0 !== t.txs && null !== t.txs))
              for (const o of t.txs) e.txs.push(o);
            return e;
          },
        };
        const w = {
          type: 0,
          height: n.default.ZERO,
          round: 0,
          validatorIndex: 0,
        };
        e.Vote = {
          encode(t, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              0 !== t.type && o.uint32(8).int32(t.type),
              t.height.isZero() || o.uint32(16).int64(t.height),
              0 !== t.round && o.uint32(24).int32(t.round),
              void 0 !== t.blockId &&
                e.BlockID.encode(t.blockId, o.uint32(34).fork()).ldelim(),
              void 0 !== t.timestamp &&
                l.Timestamp.encode(
                  B(t.timestamp),
                  o.uint32(42).fork(),
                ).ldelim(),
              0 !== t.validatorAddress.length &&
                o.uint32(50).bytes(t.validatorAddress),
              0 !== t.validatorIndex && o.uint32(56).int32(t.validatorIndex),
              0 !== t.signature.length && o.uint32(66).bytes(t.signature),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let n = void 0 === o ? i.len : i.pos + o;
            const s = Object.assign({}, w);
            ((s.validatorAddress = new Uint8Array()),
              (s.signature = new Uint8Array()));
            while (i.pos < n) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  s.type = i.int32();
                  break;
                case 2:
                  s.height = i.int64();
                  break;
                case 3:
                  s.round = i.int32();
                  break;
                case 4:
                  s.blockId = e.BlockID.decode(i, i.uint32());
                  break;
                case 5:
                  s.timestamp = T(l.Timestamp.decode(i, i.uint32()));
                  break;
                case 6:
                  s.validatorAddress = i.bytes();
                  break;
                case 7:
                  s.validatorIndex = i.int32();
                  break;
                case 8:
                  s.signature = i.bytes();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return s;
          },
          fromJSON(t) {
            const o = Object.assign({}, w);
            return (
              (o.validatorAddress = new Uint8Array()),
              (o.signature = new Uint8Array()),
              void 0 !== t.type && null !== t.type
                ? (o.type = p(t.type))
                : (o.type = 0),
              void 0 !== t.height && null !== t.height
                ? (o.height = n.default.fromString(t.height))
                : (o.height = n.default.ZERO),
              void 0 !== t.round && null !== t.round
                ? (o.round = Number(t.round))
                : (o.round = 0),
              void 0 !== t.blockId && null !== t.blockId
                ? (o.blockId = e.BlockID.fromJSON(t.blockId))
                : (o.blockId = void 0),
              void 0 !== t.timestamp && null !== t.timestamp
                ? (o.timestamp = D(t.timestamp))
                : (o.timestamp = void 0),
              void 0 !== t.validatorAddress &&
                null !== t.validatorAddress &&
                (o.validatorAddress = R(t.validatorAddress)),
              void 0 !== t.validatorIndex && null !== t.validatorIndex
                ? (o.validatorIndex = Number(t.validatorIndex))
                : (o.validatorIndex = 0),
              void 0 !== t.signature &&
                null !== t.signature &&
                (o.signature = R(t.signature)),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.type && (o.type = v(t.type)),
              void 0 !== t.height &&
                (o.height = (t.height || n.default.ZERO).toString()),
              void 0 !== t.round && (o.round = t.round),
              void 0 !== t.blockId &&
                (o.blockId = t.blockId ? e.BlockID.toJSON(t.blockId) : void 0),
              void 0 !== t.timestamp &&
                (o.timestamp = t.timestamp.toISOString()),
              void 0 !== t.validatorAddress &&
                (o.validatorAddress = x(
                  void 0 !== t.validatorAddress
                    ? t.validatorAddress
                    : new Uint8Array(),
                )),
              void 0 !== t.validatorIndex &&
                (o.validatorIndex = t.validatorIndex),
              void 0 !== t.signature &&
                (o.signature = x(
                  void 0 !== t.signature ? t.signature : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(t) {
            var o, i, r, s, a, u;
            const l = Object.assign({}, w);
            return (
              (l.type = null !== (o = t.type) && void 0 !== o ? o : 0),
              void 0 !== t.height && null !== t.height
                ? (l.height = t.height)
                : (l.height = n.default.ZERO),
              (l.round = null !== (i = t.round) && void 0 !== i ? i : 0),
              void 0 !== t.blockId && null !== t.blockId
                ? (l.blockId = e.BlockID.fromPartial(t.blockId))
                : (l.blockId = void 0),
              (l.timestamp =
                null !== (r = t.timestamp) && void 0 !== r ? r : void 0),
              (l.validatorAddress =
                null !== (s = t.validatorAddress) && void 0 !== s
                  ? s
                  : new Uint8Array()),
              (l.validatorIndex =
                null !== (a = t.validatorIndex) && void 0 !== a ? a : 0),
              (l.signature =
                null !== (u = t.signature) && void 0 !== u
                  ? u
                  : new Uint8Array()),
              l
            );
          },
        };
        const k = { height: n.default.ZERO, round: 0 };
        e.Commit = {
          encode(t, o) {
            (void 0 === o && (o = r.default.Writer.create()),
              t.height.isZero() || o.uint32(8).int64(t.height),
              0 !== t.round && o.uint32(16).int32(t.round),
              void 0 !== t.blockId &&
                e.BlockID.encode(t.blockId, o.uint32(26).fork()).ldelim());
            for (const i of t.signatures)
              e.CommitSig.encode(i, o.uint32(34).fork()).ldelim();
            return o;
          },
          decode(t, o) {
            const i =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let n = void 0 === o ? i.len : i.pos + o;
            const s = Object.assign({}, k);
            s.signatures = [];
            while (i.pos < n) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  s.height = i.int64();
                  break;
                case 2:
                  s.round = i.int32();
                  break;
                case 3:
                  s.blockId = e.BlockID.decode(i, i.uint32());
                  break;
                case 4:
                  s.signatures.push(e.CommitSig.decode(i, i.uint32()));
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return s;
          },
          fromJSON(t) {
            const o = Object.assign({}, k);
            if (
              ((o.signatures = []),
              void 0 !== t.height && null !== t.height
                ? (o.height = n.default.fromString(t.height))
                : (o.height = n.default.ZERO),
              void 0 !== t.round && null !== t.round
                ? (o.round = Number(t.round))
                : (o.round = 0),
              void 0 !== t.blockId && null !== t.blockId
                ? (o.blockId = e.BlockID.fromJSON(t.blockId))
                : (o.blockId = void 0),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const i of t.signatures)
                o.signatures.push(e.CommitSig.fromJSON(i));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.height &&
                (o.height = (t.height || n.default.ZERO).toString()),
              void 0 !== t.round && (o.round = t.round),
              void 0 !== t.blockId &&
                (o.blockId = t.blockId ? e.BlockID.toJSON(t.blockId) : void 0),
              t.signatures
                ? (o.signatures = t.signatures.map((t) =>
                    t ? e.CommitSig.toJSON(t) : void 0,
                  ))
                : (o.signatures = []),
              o
            );
          },
          fromPartial(t) {
            var o;
            const i = Object.assign({}, k);
            if (
              (void 0 !== t.height && null !== t.height
                ? (i.height = t.height)
                : (i.height = n.default.ZERO),
              (i.round = null !== (o = t.round) && void 0 !== o ? o : 0),
              void 0 !== t.blockId && null !== t.blockId
                ? (i.blockId = e.BlockID.fromPartial(t.blockId))
                : (i.blockId = void 0),
              (i.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const n of t.signatures)
                i.signatures.push(e.CommitSig.fromPartial(n));
            return i;
          },
        };
        const O = { blockIdFlag: 0 };
        e.CommitSig = {
          encode(t, e) {
            return (
              void 0 === e && (e = r.default.Writer.create()),
              0 !== t.blockIdFlag && e.uint32(8).int32(t.blockIdFlag),
              0 !== t.validatorAddress.length &&
                e.uint32(18).bytes(t.validatorAddress),
              void 0 !== t.timestamp &&
                l.Timestamp.encode(
                  B(t.timestamp),
                  e.uint32(26).fork(),
                ).ldelim(),
              0 !== t.signature.length && e.uint32(34).bytes(t.signature),
              e
            );
          },
          decode(t, e) {
            const o =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let i = void 0 === e ? o.len : o.pos + e;
            const n = Object.assign({}, O);
            ((n.validatorAddress = new Uint8Array()),
              (n.signature = new Uint8Array()));
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  n.blockIdFlag = o.int32();
                  break;
                case 2:
                  n.validatorAddress = o.bytes();
                  break;
                case 3:
                  n.timestamp = T(l.Timestamp.decode(o, o.uint32()));
                  break;
                case 4:
                  n.signature = o.bytes();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return n;
          },
          fromJSON(t) {
            const e = Object.assign({}, O);
            return (
              (e.validatorAddress = new Uint8Array()),
              (e.signature = new Uint8Array()),
              void 0 !== t.blockIdFlag && null !== t.blockIdFlag
                ? (e.blockIdFlag = c(t.blockIdFlag))
                : (e.blockIdFlag = 0),
              void 0 !== t.validatorAddress &&
                null !== t.validatorAddress &&
                (e.validatorAddress = R(t.validatorAddress)),
              void 0 !== t.timestamp && null !== t.timestamp
                ? (e.timestamp = D(t.timestamp))
                : (e.timestamp = void 0),
              void 0 !== t.signature &&
                null !== t.signature &&
                (e.signature = R(t.signature)),
              e
            );
          },
          toJSON(t) {
            const e = {};
            return (
              void 0 !== t.blockIdFlag && (e.blockIdFlag = f(t.blockIdFlag)),
              void 0 !== t.validatorAddress &&
                (e.validatorAddress = x(
                  void 0 !== t.validatorAddress
                    ? t.validatorAddress
                    : new Uint8Array(),
                )),
              void 0 !== t.timestamp &&
                (e.timestamp = t.timestamp.toISOString()),
              void 0 !== t.signature &&
                (e.signature = x(
                  void 0 !== t.signature ? t.signature : new Uint8Array(),
                )),
              e
            );
          },
          fromPartial(t) {
            var e, o, i, n;
            const r = Object.assign({}, O);
            return (
              (r.blockIdFlag =
                null !== (e = t.blockIdFlag) && void 0 !== e ? e : 0),
              (r.validatorAddress =
                null !== (o = t.validatorAddress) && void 0 !== o
                  ? o
                  : new Uint8Array()),
              (r.timestamp =
                null !== (i = t.timestamp) && void 0 !== i ? i : void 0),
              (r.signature =
                null !== (n = t.signature) && void 0 !== n
                  ? n
                  : new Uint8Array()),
              r
            );
          },
        };
        const S = { type: 0, height: n.default.ZERO, round: 0, polRound: 0 };
        e.Proposal = {
          encode(t, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              0 !== t.type && o.uint32(8).int32(t.type),
              t.height.isZero() || o.uint32(16).int64(t.height),
              0 !== t.round && o.uint32(24).int32(t.round),
              0 !== t.polRound && o.uint32(32).int32(t.polRound),
              void 0 !== t.blockId &&
                e.BlockID.encode(t.blockId, o.uint32(42).fork()).ldelim(),
              void 0 !== t.timestamp &&
                l.Timestamp.encode(
                  B(t.timestamp),
                  o.uint32(50).fork(),
                ).ldelim(),
              0 !== t.signature.length && o.uint32(58).bytes(t.signature),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let n = void 0 === o ? i.len : i.pos + o;
            const s = Object.assign({}, S);
            s.signature = new Uint8Array();
            while (i.pos < n) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  s.type = i.int32();
                  break;
                case 2:
                  s.height = i.int64();
                  break;
                case 3:
                  s.round = i.int32();
                  break;
                case 4:
                  s.polRound = i.int32();
                  break;
                case 5:
                  s.blockId = e.BlockID.decode(i, i.uint32());
                  break;
                case 6:
                  s.timestamp = T(l.Timestamp.decode(i, i.uint32()));
                  break;
                case 7:
                  s.signature = i.bytes();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return s;
          },
          fromJSON(t) {
            const o = Object.assign({}, S);
            return (
              (o.signature = new Uint8Array()),
              void 0 !== t.type && null !== t.type
                ? (o.type = p(t.type))
                : (o.type = 0),
              void 0 !== t.height && null !== t.height
                ? (o.height = n.default.fromString(t.height))
                : (o.height = n.default.ZERO),
              void 0 !== t.round && null !== t.round
                ? (o.round = Number(t.round))
                : (o.round = 0),
              void 0 !== t.polRound && null !== t.polRound
                ? (o.polRound = Number(t.polRound))
                : (o.polRound = 0),
              void 0 !== t.blockId && null !== t.blockId
                ? (o.blockId = e.BlockID.fromJSON(t.blockId))
                : (o.blockId = void 0),
              void 0 !== t.timestamp && null !== t.timestamp
                ? (o.timestamp = D(t.timestamp))
                : (o.timestamp = void 0),
              void 0 !== t.signature &&
                null !== t.signature &&
                (o.signature = R(t.signature)),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.type && (o.type = v(t.type)),
              void 0 !== t.height &&
                (o.height = (t.height || n.default.ZERO).toString()),
              void 0 !== t.round && (o.round = t.round),
              void 0 !== t.polRound && (o.polRound = t.polRound),
              void 0 !== t.blockId &&
                (o.blockId = t.blockId ? e.BlockID.toJSON(t.blockId) : void 0),
              void 0 !== t.timestamp &&
                (o.timestamp = t.timestamp.toISOString()),
              void 0 !== t.signature &&
                (o.signature = x(
                  void 0 !== t.signature ? t.signature : new Uint8Array(),
                )),
              o
            );
          },
          fromPartial(t) {
            var o, i, r, s, a;
            const u = Object.assign({}, S);
            return (
              (u.type = null !== (o = t.type) && void 0 !== o ? o : 0),
              void 0 !== t.height && null !== t.height
                ? (u.height = t.height)
                : (u.height = n.default.ZERO),
              (u.round = null !== (i = t.round) && void 0 !== i ? i : 0),
              (u.polRound = null !== (r = t.polRound) && void 0 !== r ? r : 0),
              void 0 !== t.blockId && null !== t.blockId
                ? (u.blockId = e.BlockID.fromPartial(t.blockId))
                : (u.blockId = void 0),
              (u.timestamp =
                null !== (s = t.timestamp) && void 0 !== s ? s : void 0),
              (u.signature =
                null !== (a = t.signature) && void 0 !== a
                  ? a
                  : new Uint8Array()),
              u
            );
          },
        };
        const I = {};
        e.SignedHeader = {
          encode(t, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              void 0 !== t.header &&
                e.Header.encode(t.header, o.uint32(10).fork()).ldelim(),
              void 0 !== t.commit &&
                e.Commit.encode(t.commit, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let n = void 0 === o ? i.len : i.pos + o;
            const s = Object.assign({}, I);
            while (i.pos < n) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  s.header = e.Header.decode(i, i.uint32());
                  break;
                case 2:
                  s.commit = e.Commit.decode(i, i.uint32());
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return s;
          },
          fromJSON(t) {
            const o = Object.assign({}, I);
            return (
              void 0 !== t.header && null !== t.header
                ? (o.header = e.Header.fromJSON(t.header))
                : (o.header = void 0),
              void 0 !== t.commit && null !== t.commit
                ? (o.commit = e.Commit.fromJSON(t.commit))
                : (o.commit = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.header &&
                (o.header = t.header ? e.Header.toJSON(t.header) : void 0),
              void 0 !== t.commit &&
                (o.commit = t.commit ? e.Commit.toJSON(t.commit) : void 0),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, I);
            return (
              void 0 !== t.header && null !== t.header
                ? (o.header = e.Header.fromPartial(t.header))
                : (o.header = void 0),
              void 0 !== t.commit && null !== t.commit
                ? (o.commit = e.Commit.fromPartial(t.commit))
                : (o.commit = void 0),
              o
            );
          },
        };
        const N = {};
        e.LightBlock = {
          encode(t, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              void 0 !== t.signedHeader &&
                e.SignedHeader.encode(
                  t.signedHeader,
                  o.uint32(10).fork(),
                ).ldelim(),
              void 0 !== t.validatorSet &&
                u.ValidatorSet.encode(
                  t.validatorSet,
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let n = void 0 === o ? i.len : i.pos + o;
            const s = Object.assign({}, N);
            while (i.pos < n) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  s.signedHeader = e.SignedHeader.decode(i, i.uint32());
                  break;
                case 2:
                  s.validatorSet = u.ValidatorSet.decode(i, i.uint32());
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return s;
          },
          fromJSON(t) {
            const o = Object.assign({}, N);
            return (
              void 0 !== t.signedHeader && null !== t.signedHeader
                ? (o.signedHeader = e.SignedHeader.fromJSON(t.signedHeader))
                : (o.signedHeader = void 0),
              void 0 !== t.validatorSet && null !== t.validatorSet
                ? (o.validatorSet = u.ValidatorSet.fromJSON(t.validatorSet))
                : (o.validatorSet = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.signedHeader &&
                (o.signedHeader = t.signedHeader
                  ? e.SignedHeader.toJSON(t.signedHeader)
                  : void 0),
              void 0 !== t.validatorSet &&
                (o.validatorSet = t.validatorSet
                  ? u.ValidatorSet.toJSON(t.validatorSet)
                  : void 0),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, N);
            return (
              void 0 !== t.signedHeader && null !== t.signedHeader
                ? (o.signedHeader = e.SignedHeader.fromPartial(t.signedHeader))
                : (o.signedHeader = void 0),
              void 0 !== t.validatorSet && null !== t.validatorSet
                ? (o.validatorSet = u.ValidatorSet.fromPartial(t.validatorSet))
                : (o.validatorSet = void 0),
              o
            );
          },
        };
        const A = { blockSize: n.default.ZERO, numTxs: n.default.ZERO };
        e.BlockMeta = {
          encode(t, o) {
            return (
              void 0 === o && (o = r.default.Writer.create()),
              void 0 !== t.blockId &&
                e.BlockID.encode(t.blockId, o.uint32(10).fork()).ldelim(),
              t.blockSize.isZero() || o.uint32(16).int64(t.blockSize),
              void 0 !== t.header &&
                e.Header.encode(t.header, o.uint32(26).fork()).ldelim(),
              t.numTxs.isZero() || o.uint32(32).int64(t.numTxs),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let n = void 0 === o ? i.len : i.pos + o;
            const s = Object.assign({}, A);
            while (i.pos < n) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  s.blockId = e.BlockID.decode(i, i.uint32());
                  break;
                case 2:
                  s.blockSize = i.int64();
                  break;
                case 3:
                  s.header = e.Header.decode(i, i.uint32());
                  break;
                case 4:
                  s.numTxs = i.int64();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return s;
          },
          fromJSON(t) {
            const o = Object.assign({}, A);
            return (
              void 0 !== t.blockId && null !== t.blockId
                ? (o.blockId = e.BlockID.fromJSON(t.blockId))
                : (o.blockId = void 0),
              void 0 !== t.blockSize && null !== t.blockSize
                ? (o.blockSize = n.default.fromString(t.blockSize))
                : (o.blockSize = n.default.ZERO),
              void 0 !== t.header && null !== t.header
                ? (o.header = e.Header.fromJSON(t.header))
                : (o.header = void 0),
              void 0 !== t.numTxs && null !== t.numTxs
                ? (o.numTxs = n.default.fromString(t.numTxs))
                : (o.numTxs = n.default.ZERO),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.blockId &&
                (o.blockId = t.blockId ? e.BlockID.toJSON(t.blockId) : void 0),
              void 0 !== t.blockSize &&
                (o.blockSize = (t.blockSize || n.default.ZERO).toString()),
              void 0 !== t.header &&
                (o.header = t.header ? e.Header.toJSON(t.header) : void 0),
              void 0 !== t.numTxs &&
                (o.numTxs = (t.numTxs || n.default.ZERO).toString()),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, A);
            return (
              void 0 !== t.blockId && null !== t.blockId
                ? (o.blockId = e.BlockID.fromPartial(t.blockId))
                : (o.blockId = void 0),
              void 0 !== t.blockSize && null !== t.blockSize
                ? (o.blockSize = t.blockSize)
                : (o.blockSize = n.default.ZERO),
              void 0 !== t.header && null !== t.header
                ? (o.header = e.Header.fromPartial(t.header))
                : (o.header = void 0),
              void 0 !== t.numTxs && null !== t.numTxs
                ? (o.numTxs = t.numTxs)
                : (o.numTxs = n.default.ZERO),
              o
            );
          },
        };
        const P = {};
        e.TxProof = {
          encode(t, e) {
            return (
              void 0 === e && (e = r.default.Writer.create()),
              0 !== t.rootHash.length && e.uint32(10).bytes(t.rootHash),
              0 !== t.data.length && e.uint32(18).bytes(t.data),
              void 0 !== t.proof &&
                s.Proof.encode(t.proof, e.uint32(26).fork()).ldelim(),
              e
            );
          },
          decode(t, e) {
            const o =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let i = void 0 === e ? o.len : o.pos + e;
            const n = Object.assign({}, P);
            ((n.rootHash = new Uint8Array()), (n.data = new Uint8Array()));
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  n.rootHash = o.bytes();
                  break;
                case 2:
                  n.data = o.bytes();
                  break;
                case 3:
                  n.proof = s.Proof.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return n;
          },
          fromJSON(t) {
            const e = Object.assign({}, P);
            return (
              (e.rootHash = new Uint8Array()),
              (e.data = new Uint8Array()),
              void 0 !== t.rootHash &&
                null !== t.rootHash &&
                (e.rootHash = R(t.rootHash)),
              void 0 !== t.data && null !== t.data && (e.data = R(t.data)),
              void 0 !== t.proof && null !== t.proof
                ? (e.proof = s.Proof.fromJSON(t.proof))
                : (e.proof = void 0),
              e
            );
          },
          toJSON(t) {
            const e = {};
            return (
              void 0 !== t.rootHash &&
                (e.rootHash = x(
                  void 0 !== t.rootHash ? t.rootHash : new Uint8Array(),
                )),
              void 0 !== t.data &&
                (e.data = x(void 0 !== t.data ? t.data : new Uint8Array())),
              void 0 !== t.proof &&
                (e.proof = t.proof ? s.Proof.toJSON(t.proof) : void 0),
              e
            );
          },
          fromPartial(t) {
            var e, o;
            const i = Object.assign({}, P);
            return (
              (i.rootHash =
                null !== (e = t.rootHash) && void 0 !== e
                  ? e
                  : new Uint8Array()),
              (i.data =
                null !== (o = t.data) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== t.proof && null !== t.proof
                ? (i.proof = s.Proof.fromPartial(t.proof))
                : (i.proof = void 0),
              i
            );
          },
        };
        var H = (() => {
          if ("undefined" !== typeof H) return H;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const E =
          H.atob || ((t) => H.Buffer.from(t, "base64").toString("binary"));
        function R(t) {
          const e = E(t),
            o = new Uint8Array(e.length);
          for (let i = 0; i < e.length; ++i) o[i] = e.charCodeAt(i);
          return o;
        }
        const U =
          H.btoa || ((t) => H.Buffer.from(t, "binary").toString("base64"));
        function x(t) {
          const e = [];
          for (const o of t) e.push(String.fromCharCode(o));
          return U(e.join(""));
        }
        function B(t) {
          const e = j(t.getTime() / 1e3),
            o = (t.getTime() % 1e3) * 1e6;
          return { seconds: e, nanos: o };
        }
        function T(t) {
          let e = 1e3 * t.seconds.toNumber();
          return ((e += t.nanos / 1e6), new Date(e));
        }
        function D(t) {
          return t instanceof Date
            ? t
            : "string" === typeof t
              ? new Date(t)
              : T(l.Timestamp.fromJSON(t));
        }
        function j(t) {
          return n.default.fromNumber(t);
        }
        r.default.util.Long !== n.default &&
          ((r.default.util.Long = n.default), r.default.configure());
      }).call(this, o(13));
    },
    3573: function (t, e, o) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.SimpleValidator =
            e.Validator =
            e.ValidatorSet =
            e.protobufPackage =
              void 0));
        const n = i(o(2754)),
          r = i(o(2755)),
          s = o(4443);
        e.protobufPackage = "tendermint.types";
        const a = { totalVotingPower: n.default.ZERO };
        e.ValidatorSet = {
          encode(t, o) {
            void 0 === o && (o = r.default.Writer.create());
            for (const i of t.validators)
              e.Validator.encode(i, o.uint32(10).fork()).ldelim();
            return (
              void 0 !== t.proposer &&
                e.Validator.encode(t.proposer, o.uint32(18).fork()).ldelim(),
              t.totalVotingPower.isZero() ||
                o.uint32(24).int64(t.totalVotingPower),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let n = void 0 === o ? i.len : i.pos + o;
            const s = Object.assign({}, a);
            s.validators = [];
            while (i.pos < n) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  s.validators.push(e.Validator.decode(i, i.uint32()));
                  break;
                case 2:
                  s.proposer = e.Validator.decode(i, i.uint32());
                  break;
                case 3:
                  s.totalVotingPower = i.int64();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return s;
          },
          fromJSON(t) {
            const o = Object.assign({}, a);
            if (
              ((o.validators = []),
              void 0 !== t.validators && null !== t.validators)
            )
              for (const i of t.validators)
                o.validators.push(e.Validator.fromJSON(i));
            return (
              void 0 !== t.proposer && null !== t.proposer
                ? (o.proposer = e.Validator.fromJSON(t.proposer))
                : (o.proposer = void 0),
              void 0 !== t.totalVotingPower && null !== t.totalVotingPower
                ? (o.totalVotingPower = n.default.fromString(
                    t.totalVotingPower,
                  ))
                : (o.totalVotingPower = n.default.ZERO),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              t.validators
                ? (o.validators = t.validators.map((t) =>
                    t ? e.Validator.toJSON(t) : void 0,
                  ))
                : (o.validators = []),
              void 0 !== t.proposer &&
                (o.proposer = t.proposer
                  ? e.Validator.toJSON(t.proposer)
                  : void 0),
              void 0 !== t.totalVotingPower &&
                (o.totalVotingPower = (
                  t.totalVotingPower || n.default.ZERO
                ).toString()),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, a);
            if (
              ((o.validators = []),
              void 0 !== t.validators && null !== t.validators)
            )
              for (const i of t.validators)
                o.validators.push(e.Validator.fromPartial(i));
            return (
              void 0 !== t.proposer && null !== t.proposer
                ? (o.proposer = e.Validator.fromPartial(t.proposer))
                : (o.proposer = void 0),
              void 0 !== t.totalVotingPower && null !== t.totalVotingPower
                ? (o.totalVotingPower = t.totalVotingPower)
                : (o.totalVotingPower = n.default.ZERO),
              o
            );
          },
        };
        const u = {
          votingPower: n.default.ZERO,
          proposerPriority: n.default.ZERO,
        };
        e.Validator = {
          encode(t, e) {
            return (
              void 0 === e && (e = r.default.Writer.create()),
              0 !== t.address.length && e.uint32(10).bytes(t.address),
              void 0 !== t.pubKey &&
                s.PublicKey.encode(t.pubKey, e.uint32(18).fork()).ldelim(),
              t.votingPower.isZero() || e.uint32(24).int64(t.votingPower),
              t.proposerPriority.isZero() ||
                e.uint32(32).int64(t.proposerPriority),
              e
            );
          },
          decode(t, e) {
            const o =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let i = void 0 === e ? o.len : o.pos + e;
            const n = Object.assign({}, u);
            n.address = new Uint8Array();
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  n.address = o.bytes();
                  break;
                case 2:
                  n.pubKey = s.PublicKey.decode(o, o.uint32());
                  break;
                case 3:
                  n.votingPower = o.int64();
                  break;
                case 4:
                  n.proposerPriority = o.int64();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return n;
          },
          fromJSON(t) {
            const e = Object.assign({}, u);
            return (
              (e.address = new Uint8Array()),
              void 0 !== t.address &&
                null !== t.address &&
                (e.address = c(t.address)),
              void 0 !== t.pubKey && null !== t.pubKey
                ? (e.pubKey = s.PublicKey.fromJSON(t.pubKey))
                : (e.pubKey = void 0),
              void 0 !== t.votingPower && null !== t.votingPower
                ? (e.votingPower = n.default.fromString(t.votingPower))
                : (e.votingPower = n.default.ZERO),
              void 0 !== t.proposerPriority && null !== t.proposerPriority
                ? (e.proposerPriority = n.default.fromString(
                    t.proposerPriority,
                  ))
                : (e.proposerPriority = n.default.ZERO),
              e
            );
          },
          toJSON(t) {
            const e = {};
            return (
              void 0 !== t.address &&
                (e.address = p(
                  void 0 !== t.address ? t.address : new Uint8Array(),
                )),
              void 0 !== t.pubKey &&
                (e.pubKey = t.pubKey ? s.PublicKey.toJSON(t.pubKey) : void 0),
              void 0 !== t.votingPower &&
                (e.votingPower = (t.votingPower || n.default.ZERO).toString()),
              void 0 !== t.proposerPriority &&
                (e.proposerPriority = (
                  t.proposerPriority || n.default.ZERO
                ).toString()),
              e
            );
          },
          fromPartial(t) {
            var e;
            const o = Object.assign({}, u);
            return (
              (o.address =
                null !== (e = t.address) && void 0 !== e
                  ? e
                  : new Uint8Array()),
              void 0 !== t.pubKey && null !== t.pubKey
                ? (o.pubKey = s.PublicKey.fromPartial(t.pubKey))
                : (o.pubKey = void 0),
              void 0 !== t.votingPower && null !== t.votingPower
                ? (o.votingPower = t.votingPower)
                : (o.votingPower = n.default.ZERO),
              void 0 !== t.proposerPriority && null !== t.proposerPriority
                ? (o.proposerPriority = t.proposerPriority)
                : (o.proposerPriority = n.default.ZERO),
              o
            );
          },
        };
        const l = { votingPower: n.default.ZERO };
        e.SimpleValidator = {
          encode(t, e) {
            return (
              void 0 === e && (e = r.default.Writer.create()),
              void 0 !== t.pubKey &&
                s.PublicKey.encode(t.pubKey, e.uint32(10).fork()).ldelim(),
              t.votingPower.isZero() || e.uint32(16).int64(t.votingPower),
              e
            );
          },
          decode(t, e) {
            const o =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let i = void 0 === e ? o.len : o.pos + e;
            const n = Object.assign({}, l);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  n.pubKey = s.PublicKey.decode(o, o.uint32());
                  break;
                case 2:
                  n.votingPower = o.int64();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return n;
          },
          fromJSON(t) {
            const e = Object.assign({}, l);
            return (
              void 0 !== t.pubKey && null !== t.pubKey
                ? (e.pubKey = s.PublicKey.fromJSON(t.pubKey))
                : (e.pubKey = void 0),
              void 0 !== t.votingPower && null !== t.votingPower
                ? (e.votingPower = n.default.fromString(t.votingPower))
                : (e.votingPower = n.default.ZERO),
              e
            );
          },
          toJSON(t) {
            const e = {};
            return (
              void 0 !== t.pubKey &&
                (e.pubKey = t.pubKey ? s.PublicKey.toJSON(t.pubKey) : void 0),
              void 0 !== t.votingPower &&
                (e.votingPower = (t.votingPower || n.default.ZERO).toString()),
              e
            );
          },
          fromPartial(t) {
            const e = Object.assign({}, l);
            return (
              void 0 !== t.pubKey && null !== t.pubKey
                ? (e.pubKey = s.PublicKey.fromPartial(t.pubKey))
                : (e.pubKey = void 0),
              void 0 !== t.votingPower && null !== t.votingPower
                ? (e.votingPower = t.votingPower)
                : (e.votingPower = n.default.ZERO),
              e
            );
          },
        };
        var d = (() => {
          if ("undefined" !== typeof d) return d;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const h =
          d.atob || ((t) => d.Buffer.from(t, "base64").toString("binary"));
        function c(t) {
          const e = h(t),
            o = new Uint8Array(e.length);
          for (let i = 0; i < e.length; ++i) o[i] = e.charCodeAt(i);
          return o;
        }
        const f =
          d.btoa || ((t) => d.Buffer.from(t, "binary").toString("base64"));
        function p(t) {
          const e = [];
          for (const o of t) e.push(String.fromCharCode(o));
          return f(e.join(""));
        }
        r.default.util.Long !== n.default &&
          ((r.default.util.Long = n.default), r.default.configure());
      }).call(this, o(13));
    },
    3656: function (t, e, o) {
      "use strict";
      var i = o(818),
        n = o(836),
        r = o(104),
        s = o(387);
      t.exports = function (t, e, o) {
        if (!t || ("object" !== typeof t && "function" !== typeof t))
          throw new r("`obj` must be an object or a function`");
        if ("string" !== typeof e && "symbol" !== typeof e)
          throw new r("`property` must be a string or a symbol`");
        if (
          arguments.length > 3 &&
          "boolean" !== typeof arguments[3] &&
          null !== arguments[3]
        )
          throw new r(
            "`nonEnumerable`, if provided, must be a boolean or null",
          );
        if (
          arguments.length > 4 &&
          "boolean" !== typeof arguments[4] &&
          null !== arguments[4]
        )
          throw new r("`nonWritable`, if provided, must be a boolean or null");
        if (
          arguments.length > 5 &&
          "boolean" !== typeof arguments[5] &&
          null !== arguments[5]
        )
          throw new r(
            "`nonConfigurable`, if provided, must be a boolean or null",
          );
        if (arguments.length > 6 && "boolean" !== typeof arguments[6])
          throw new r("`loose`, if provided, must be a boolean");
        var a = arguments.length > 3 ? arguments[3] : null,
          u = arguments.length > 4 ? arguments[4] : null,
          l = arguments.length > 5 ? arguments[5] : null,
          d = arguments.length > 6 && arguments[6],
          h = !!s && s(t, e);
        if (i)
          i(t, e, {
            configurable: null === l && h ? h.configurable : !l,
            enumerable: null === a && h ? h.enumerable : !a,
            value: o,
            writable: null === u && h ? h.writable : !u,
          });
        else {
          if (!d && (a || u || l))
            throw new n(
              "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.",
            );
          t[e] = o;
        }
      };
    },
    3657: function (t, e, o) {
      "use strict";
      var i = o(818),
        n = function () {
          return !!i;
        };
      ((n.hasArrayLengthDefineBug = function () {
        if (!i) return null;
        try {
          return 1 !== i([], "length", { value: 1 }).length;
        } catch (t) {
          return !0;
        }
      }),
        (t.exports = n));
    },
    4417: function (t, e, o) {
      t.exports = o(4418);
    },
    4418: function (t, e, o) {
      "use strict";
      function i(t) {
        var e,
          o = t.Symbol;
        if ("function" === typeof o)
          if (o.observable) e = o.observable;
          else {
            e = o["for"]("https://github.com/benlesh/symbol-observable");
            try {
              o.observable = e;
            } catch (i) {}
          }
        else e = "@@observable";
        return e;
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e["default"] = i));
    },
    4419: function (t, e, o) {
      "use strict";
      var i = o(3566),
        n = o(3567),
        r = o(3568),
        s = o(4420),
        a = r(),
        u = function () {
          return a;
        };
      (i(u, { getPolyfill: r, implementation: n, shim: s }), (t.exports = u));
    },
    4420: function (t, e, o) {
      "use strict";
      var i = o(3566),
        n = o(387),
        r = o(3568);
      t.exports = function () {
        var t = r();
        if (i.supportsDescriptors) {
          var e = n(t, "globalThis");
          (e &&
            (!e.configurable ||
              (!e.enumerable && e.writable && globalThis === t))) ||
            Object.defineProperty(t, "globalThis", {
              configurable: !0,
              enumerable: !1,
              value: t,
              writable: !0,
            });
        } else
          ("object" === typeof globalThis && globalThis === t) ||
            (t.globalThis = t);
        return t;
      };
    },
    4441: function (t, e, o) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.ProofOps =
            e.ProofOp =
            e.DominoOp =
            e.ValueOp =
            e.Proof =
            e.protobufPackage =
              void 0));
        const n = i(o(2754)),
          r = i(o(2755));
        e.protobufPackage = "tendermint.crypto";
        const s = { total: n.default.ZERO, index: n.default.ZERO };
        e.Proof = {
          encode(t, e = r.default.Writer.create()) {
            (t.total.isZero() || e.uint32(8).int64(t.total),
              t.index.isZero() || e.uint32(16).int64(t.index),
              0 !== t.leafHash.length && e.uint32(26).bytes(t.leafHash));
            for (const o of t.aunts) e.uint32(34).bytes(o);
            return e;
          },
          decode(t, e) {
            const o =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let i = void 0 === e ? o.len : o.pos + e;
            const n = Object.assign({}, s);
            ((n.aunts = []), (n.leafHash = new Uint8Array()));
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  n.total = o.int64();
                  break;
                case 2:
                  n.index = o.int64();
                  break;
                case 3:
                  n.leafHash = o.bytes();
                  break;
                case 4:
                  n.aunts.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return n;
          },
          fromJSON(t) {
            const e = Object.assign({}, s);
            if (
              ((e.aunts = []),
              (e.leafHash = new Uint8Array()),
              void 0 !== t.total && null !== t.total
                ? (e.total = n.default.fromString(t.total))
                : (e.total = n.default.ZERO),
              void 0 !== t.index && null !== t.index
                ? (e.index = n.default.fromString(t.index))
                : (e.index = n.default.ZERO),
              void 0 !== t.leafHash &&
                null !== t.leafHash &&
                (e.leafHash = f(t.leafHash)),
              void 0 !== t.aunts && null !== t.aunts)
            )
              for (const o of t.aunts) e.aunts.push(f(o));
            return e;
          },
          toJSON(t) {
            const e = {};
            return (
              void 0 !== t.total &&
                (e.total = (t.total || n.default.ZERO).toString()),
              void 0 !== t.index &&
                (e.index = (t.index || n.default.ZERO).toString()),
              void 0 !== t.leafHash &&
                (e.leafHash = v(
                  void 0 !== t.leafHash ? t.leafHash : new Uint8Array(),
                )),
              t.aunts
                ? (e.aunts = t.aunts.map((t) =>
                    v(void 0 !== t ? t : new Uint8Array()),
                  ))
                : (e.aunts = []),
              e
            );
          },
          fromPartial(t) {
            var e;
            const o = Object.assign({}, s);
            if (
              (void 0 !== t.total && null !== t.total
                ? (o.total = t.total)
                : (o.total = n.default.ZERO),
              void 0 !== t.index && null !== t.index
                ? (o.index = t.index)
                : (o.index = n.default.ZERO),
              (o.leafHash =
                null !== (e = t.leafHash) && void 0 !== e
                  ? e
                  : new Uint8Array()),
              (o.aunts = []),
              void 0 !== t.aunts && null !== t.aunts)
            )
              for (const i of t.aunts) o.aunts.push(i);
            return o;
          },
        };
        const a = {};
        e.ValueOp = {
          encode(t, o = r.default.Writer.create()) {
            return (
              0 !== t.key.length && o.uint32(10).bytes(t.key),
              void 0 !== t.proof &&
                e.Proof.encode(t.proof, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(t, o) {
            const i =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let n = void 0 === o ? i.len : i.pos + o;
            const s = Object.assign({}, a);
            s.key = new Uint8Array();
            while (i.pos < n) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  s.key = i.bytes();
                  break;
                case 2:
                  s.proof = e.Proof.decode(i, i.uint32());
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return s;
          },
          fromJSON(t) {
            const o = Object.assign({}, a);
            return (
              (o.key = new Uint8Array()),
              void 0 !== t.key && null !== t.key && (o.key = f(t.key)),
              void 0 !== t.proof && null !== t.proof
                ? (o.proof = e.Proof.fromJSON(t.proof))
                : (o.proof = void 0),
              o
            );
          },
          toJSON(t) {
            const o = {};
            return (
              void 0 !== t.key &&
                (o.key = v(void 0 !== t.key ? t.key : new Uint8Array())),
              void 0 !== t.proof &&
                (o.proof = t.proof ? e.Proof.toJSON(t.proof) : void 0),
              o
            );
          },
          fromPartial(t) {
            var o;
            const i = Object.assign({}, a);
            return (
              (i.key =
                null !== (o = t.key) && void 0 !== o ? o : new Uint8Array()),
              void 0 !== t.proof && null !== t.proof
                ? (i.proof = e.Proof.fromPartial(t.proof))
                : (i.proof = void 0),
              i
            );
          },
        };
        const u = { key: "", input: "", output: "" };
        e.DominoOp = {
          encode(t, e = r.default.Writer.create()) {
            return (
              "" !== t.key && e.uint32(10).string(t.key),
              "" !== t.input && e.uint32(18).string(t.input),
              "" !== t.output && e.uint32(26).string(t.output),
              e
            );
          },
          decode(t, e) {
            const o =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let i = void 0 === e ? o.len : o.pos + e;
            const n = Object.assign({}, u);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  n.key = o.string();
                  break;
                case 2:
                  n.input = o.string();
                  break;
                case 3:
                  n.output = o.string();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return n;
          },
          fromJSON(t) {
            const e = Object.assign({}, u);
            return (
              void 0 !== t.key && null !== t.key
                ? (e.key = String(t.key))
                : (e.key = ""),
              void 0 !== t.input && null !== t.input
                ? (e.input = String(t.input))
                : (e.input = ""),
              void 0 !== t.output && null !== t.output
                ? (e.output = String(t.output))
                : (e.output = ""),
              e
            );
          },
          toJSON(t) {
            const e = {};
            return (
              void 0 !== t.key && (e.key = t.key),
              void 0 !== t.input && (e.input = t.input),
              void 0 !== t.output && (e.output = t.output),
              e
            );
          },
          fromPartial(t) {
            var e, o, i;
            const n = Object.assign({}, u);
            return (
              (n.key = null !== (e = t.key) && void 0 !== e ? e : ""),
              (n.input = null !== (o = t.input) && void 0 !== o ? o : ""),
              (n.output = null !== (i = t.output) && void 0 !== i ? i : ""),
              n
            );
          },
        };
        const l = { type: "" };
        e.ProofOp = {
          encode(t, e = r.default.Writer.create()) {
            return (
              "" !== t.type && e.uint32(10).string(t.type),
              0 !== t.key.length && e.uint32(18).bytes(t.key),
              0 !== t.data.length && e.uint32(26).bytes(t.data),
              e
            );
          },
          decode(t, e) {
            const o =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let i = void 0 === e ? o.len : o.pos + e;
            const n = Object.assign({}, l);
            ((n.key = new Uint8Array()), (n.data = new Uint8Array()));
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  n.type = o.string();
                  break;
                case 2:
                  n.key = o.bytes();
                  break;
                case 3:
                  n.data = o.bytes();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return n;
          },
          fromJSON(t) {
            const e = Object.assign({}, l);
            return (
              (e.key = new Uint8Array()),
              (e.data = new Uint8Array()),
              void 0 !== t.type && null !== t.type
                ? (e.type = String(t.type))
                : (e.type = ""),
              void 0 !== t.key && null !== t.key && (e.key = f(t.key)),
              void 0 !== t.data && null !== t.data && (e.data = f(t.data)),
              e
            );
          },
          toJSON(t) {
            const e = {};
            return (
              void 0 !== t.type && (e.type = t.type),
              void 0 !== t.key &&
                (e.key = v(void 0 !== t.key ? t.key : new Uint8Array())),
              void 0 !== t.data &&
                (e.data = v(void 0 !== t.data ? t.data : new Uint8Array())),
              e
            );
          },
          fromPartial(t) {
            var e, o, i;
            const n = Object.assign({}, l);
            return (
              (n.type = null !== (e = t.type) && void 0 !== e ? e : ""),
              (n.key =
                null !== (o = t.key) && void 0 !== o ? o : new Uint8Array()),
              (n.data =
                null !== (i = t.data) && void 0 !== i ? i : new Uint8Array()),
              n
            );
          },
        };
        const d = {};
        e.ProofOps = {
          encode(t, o = r.default.Writer.create()) {
            for (const i of t.ops)
              e.ProofOp.encode(i, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(t, o) {
            const i =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let n = void 0 === o ? i.len : i.pos + o;
            const s = Object.assign({}, d);
            s.ops = [];
            while (i.pos < n) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  s.ops.push(e.ProofOp.decode(i, i.uint32()));
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return s;
          },
          fromJSON(t) {
            const o = Object.assign({}, d);
            if (((o.ops = []), void 0 !== t.ops && null !== t.ops))
              for (const i of t.ops) o.ops.push(e.ProofOp.fromJSON(i));
            return o;
          },
          toJSON(t) {
            const o = {};
            return (
              t.ops
                ? (o.ops = t.ops.map((t) => (t ? e.ProofOp.toJSON(t) : void 0)))
                : (o.ops = []),
              o
            );
          },
          fromPartial(t) {
            const o = Object.assign({}, d);
            if (((o.ops = []), void 0 !== t.ops && null !== t.ops))
              for (const i of t.ops) o.ops.push(e.ProofOp.fromPartial(i));
            return o;
          },
        };
        var h = (() => {
          if ("undefined" !== typeof h) return h;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const c =
          h.atob || ((t) => h.Buffer.from(t, "base64").toString("binary"));
        function f(t) {
          const e = c(t),
            o = new Uint8Array(e.length);
          for (let i = 0; i < e.length; ++i) o[i] = e.charCodeAt(i);
          return o;
        }
        const p =
          h.btoa || ((t) => h.Buffer.from(t, "binary").toString("base64"));
        function v(t) {
          const e = [];
          for (const o of t) e.push(String.fromCharCode(o));
          return p(e.join(""));
        }
        r.default.util.Long !== n.default &&
          ((r.default.util.Long = n.default), r.default.configure());
      }).call(this, o(13));
    },
    4442: function (t, e, o) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Consensus = e.App = e.protobufPackage = void 0));
      const n = i(o(2754)),
        r = i(o(2755));
      e.protobufPackage = "tendermint.version";
      const s = { protocol: n.default.UZERO, software: "" };
      e.App = {
        encode(t, e) {
          return (
            void 0 === e && (e = r.default.Writer.create()),
            t.protocol.isZero() || e.uint32(8).uint64(t.protocol),
            "" !== t.software && e.uint32(18).string(t.software),
            e
          );
        },
        decode(t, e) {
          const o = t instanceof r.default.Reader ? t : new r.default.Reader(t);
          let i = void 0 === e ? o.len : o.pos + e;
          const n = Object.assign({}, s);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                n.protocol = o.uint64();
                break;
              case 2:
                n.software = o.string();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return n;
        },
        fromJSON(t) {
          const e = Object.assign({}, s);
          return (
            void 0 !== t.protocol && null !== t.protocol
              ? (e.protocol = n.default.fromString(t.protocol))
              : (e.protocol = n.default.UZERO),
            void 0 !== t.software && null !== t.software
              ? (e.software = String(t.software))
              : (e.software = ""),
            e
          );
        },
        toJSON(t) {
          const e = {};
          return (
            void 0 !== t.protocol &&
              (e.protocol = (t.protocol || n.default.UZERO).toString()),
            void 0 !== t.software && (e.software = t.software),
            e
          );
        },
        fromPartial(t) {
          var e;
          const o = Object.assign({}, s);
          return (
            void 0 !== t.protocol && null !== t.protocol
              ? (o.protocol = t.protocol)
              : (o.protocol = n.default.UZERO),
            (o.software = null !== (e = t.software) && void 0 !== e ? e : ""),
            o
          );
        },
      };
      const a = { block: n.default.UZERO, app: n.default.UZERO };
      ((e.Consensus = {
        encode(t, e) {
          return (
            void 0 === e && (e = r.default.Writer.create()),
            t.block.isZero() || e.uint32(8).uint64(t.block),
            t.app.isZero() || e.uint32(16).uint64(t.app),
            e
          );
        },
        decode(t, e) {
          const o = t instanceof r.default.Reader ? t : new r.default.Reader(t);
          let i = void 0 === e ? o.len : o.pos + e;
          const n = Object.assign({}, a);
          while (o.pos < i) {
            const t = o.uint32();
            switch (t >>> 3) {
              case 1:
                n.block = o.uint64();
                break;
              case 2:
                n.app = o.uint64();
                break;
              default:
                o.skipType(7 & t);
                break;
            }
          }
          return n;
        },
        fromJSON(t) {
          const e = Object.assign({}, a);
          return (
            void 0 !== t.block && null !== t.block
              ? (e.block = n.default.fromString(t.block))
              : (e.block = n.default.UZERO),
            void 0 !== t.app && null !== t.app
              ? (e.app = n.default.fromString(t.app))
              : (e.app = n.default.UZERO),
            e
          );
        },
        toJSON(t) {
          const e = {};
          return (
            void 0 !== t.block &&
              (e.block = (t.block || n.default.UZERO).toString()),
            void 0 !== t.app && (e.app = (t.app || n.default.UZERO).toString()),
            e
          );
        },
        fromPartial(t) {
          const e = Object.assign({}, a);
          return (
            void 0 !== t.block && null !== t.block
              ? (e.block = t.block)
              : (e.block = n.default.UZERO),
            void 0 !== t.app && null !== t.app
              ? (e.app = t.app)
              : (e.app = n.default.UZERO),
            e
          );
        },
      }),
        r.default.util.Long !== n.default &&
          ((r.default.util.Long = n.default), r.default.configure()));
    },
    4443: function (t, e, o) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.PublicKey = e.protobufPackage = void 0));
        const n = i(o(2754)),
          r = i(o(2755));
        e.protobufPackage = "tendermint.crypto";
        const s = {};
        e.PublicKey = {
          encode(t, e = r.default.Writer.create()) {
            return (
              void 0 !== t.ed25519 && e.uint32(10).bytes(t.ed25519),
              void 0 !== t.secp256k1 && e.uint32(18).bytes(t.secp256k1),
              e
            );
          },
          decode(t, e) {
            const o =
              t instanceof r.default.Reader ? t : new r.default.Reader(t);
            let i = void 0 === e ? o.len : o.pos + e;
            const n = Object.assign({}, s);
            while (o.pos < i) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  n.ed25519 = o.bytes();
                  break;
                case 2:
                  n.secp256k1 = o.bytes();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return n;
          },
          fromJSON(t) {
            const e = Object.assign({}, s);
            return (
              void 0 !== t.ed25519 &&
                null !== t.ed25519 &&
                (e.ed25519 = l(t.ed25519)),
              void 0 !== t.secp256k1 &&
                null !== t.secp256k1 &&
                (e.secp256k1 = l(t.secp256k1)),
              e
            );
          },
          toJSON(t) {
            const e = {};
            return (
              void 0 !== t.ed25519 &&
                (e.ed25519 = void 0 !== t.ed25519 ? h(t.ed25519) : void 0),
              void 0 !== t.secp256k1 &&
                (e.secp256k1 =
                  void 0 !== t.secp256k1 ? h(t.secp256k1) : void 0),
              e
            );
          },
          fromPartial(t) {
            var e, o;
            const i = Object.assign({}, s);
            return (
              (i.ed25519 =
                null !== (e = t.ed25519) && void 0 !== e ? e : void 0),
              (i.secp256k1 =
                null !== (o = t.secp256k1) && void 0 !== o ? o : void 0),
              i
            );
          },
        };
        var a = (() => {
          if ("undefined" !== typeof a) return a;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const u =
          a.atob || ((t) => a.Buffer.from(t, "base64").toString("binary"));
        function l(t) {
          const e = u(t),
            o = new Uint8Array(e.length);
          for (let i = 0; i < e.length; ++i) o[i] = e.charCodeAt(i);
          return o;
        }
        const d =
          a.btoa || ((t) => a.Buffer.from(t, "binary").toString("base64"));
        function h(t) {
          const e = [];
          for (const o of t) e.push(String.fromCharCode(o));
          return d(e.join(""));
        }
        r.default.util.Long !== n.default &&
          ((r.default.util.Long = n.default), r.default.configure());
      }).call(this, o(13));
    },
    4454: function (t, e, o) {
      (function (e) {
        var o = null;
        ("undefined" !== typeof WebSocket
          ? (o = WebSocket)
          : "undefined" !== typeof MozWebSocket
            ? (o = MozWebSocket)
            : "undefined" !== typeof e
              ? (o = e.WebSocket || e.MozWebSocket)
              : "undefined" !== typeof window
                ? (o = window.WebSocket || window.MozWebSocket)
                : "undefined" !== typeof self &&
                  (o = self.WebSocket || self.MozWebSocket),
          (t.exports = o));
      }).call(this, o(13));
    },
  },
]);
