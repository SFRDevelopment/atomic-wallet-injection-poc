(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [253],
  {
    2754: function (t, n) {
      t.exports = o;
      var i = null;
      try {
        i = new WebAssembly.Instance(
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
      } catch (A) {}
      function o(t, n, i) {
        ((this.low = 0 | t), (this.high = 0 | n), (this.unsigned = !!i));
      }
      function r(t) {
        return !0 === (t && t["__isLong__"]);
      }
      (o.prototype.__isLong__,
        Object.defineProperty(o.prototype, "__isLong__", { value: !0 }),
        (o.isLong = r));
      var s = {},
        u = {};
      function a(t, n) {
        var i, o, r;
        return n
          ? ((t >>>= 0),
            (r = 0 <= t && t < 256) && ((o = u[t]), o)
              ? o
              : ((i = f(t, (0 | t) < 0 ? -1 : 0, !0)), r && (u[t] = i), i))
          : ((t |= 0),
            (r = -128 <= t && t < 128) && ((o = s[t]), o)
              ? o
              : ((i = f(t, t < 0 ? -1 : 0, !1)), r && (s[t] = i), i));
      }
      function l(t, n) {
        if (isNaN(t)) return n ? w : O;
        if (n) {
          if (t < 0) return w;
          if (t >= y) return B;
        } else {
          if (t <= -b) return E;
          if (t + 1 >= b) return N;
        }
        return t < 0 ? l(-t, n).neg() : f((t % m) | 0, (t / m) | 0, n);
      }
      function f(t, n, i) {
        return new o(t, n, i);
      }
      ((o.fromInt = a), (o.fromNumber = l), (o.fromBits = f));
      var c = Math.pow;
      function d(t, n, i) {
        if (0 === t.length) throw Error("empty string");
        if (
          "NaN" === t ||
          "Infinity" === t ||
          "+Infinity" === t ||
          "-Infinity" === t
        )
          return O;
        if (
          ("number" === typeof n ? ((i = n), (n = !1)) : (n = !!n),
          (i = i || 10),
          i < 2 || 36 < i)
        )
          throw RangeError("radix");
        var o;
        if ((o = t.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === o) return d(t.substring(1), n, i).neg();
        for (var r = l(c(i, 8)), s = O, u = 0; u < t.length; u += 8) {
          var a = Math.min(8, t.length - u),
            f = parseInt(t.substring(u, u + a), i);
          if (a < 8) {
            var h = l(c(i, a));
            s = s.mul(h).add(l(f));
          } else ((s = s.mul(r)), (s = s.add(l(f))));
        }
        return ((s.unsigned = n), s);
      }
      function h(t, n) {
        return "number" === typeof t
          ? l(t, n)
          : "string" === typeof t
            ? d(t, n)
            : f(t.low, t.high, "boolean" === typeof n ? n : t.unsigned);
      }
      ((o.fromString = d), (o.fromValue = h));
      var g = 65536,
        p = 1 << 24,
        m = g * g,
        y = m * m,
        b = y / 2,
        v = a(p),
        O = a(0);
      o.ZERO = O;
      var w = a(0, !0);
      o.UZERO = w;
      var S = a(1);
      o.ONE = S;
      var I = a(1, !0);
      o.UONE = I;
      var _ = a(-1);
      o.NEG_ONE = _;
      var N = f(-1, 2147483647, !1);
      o.MAX_VALUE = N;
      var B = f(-1, -1, !0);
      o.MAX_UNSIGNED_VALUE = B;
      var E = f(0, -2147483648, !1);
      o.MIN_VALUE = E;
      var k = o.prototype;
      ((k.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
      }),
        (k.toNumber = function () {
          return this.unsigned
            ? (this.high >>> 0) * m + (this.low >>> 0)
            : this.high * m + (this.low >>> 0);
        }),
        (k.toString = function (t) {
          if (((t = t || 10), t < 2 || 36 < t)) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative()) {
            if (this.eq(E)) {
              var n = l(t),
                i = this.div(n),
                o = i.mul(n).sub(this);
              return i.toString(t) + o.toInt().toString(t);
            }
            return "-" + this.neg().toString(t);
          }
          var r = l(c(t, 6), this.unsigned),
            s = this,
            u = "";
          while (1) {
            var a = s.div(r),
              f = s.sub(a.mul(r)).toInt() >>> 0,
              d = f.toString(t);
            if (((s = a), s.isZero())) return d + u;
            while (d.length < 6) d = "0" + d;
            u = "" + d + u;
          }
        }),
        (k.getHighBits = function () {
          return this.high;
        }),
        (k.getHighBitsUnsigned = function () {
          return this.high >>> 0;
        }),
        (k.getLowBits = function () {
          return this.low;
        }),
        (k.getLowBitsUnsigned = function () {
          return this.low >>> 0;
        }),
        (k.getNumBitsAbs = function () {
          if (this.isNegative())
            return this.eq(E) ? 64 : this.neg().getNumBitsAbs();
          for (
            var t = 0 != this.high ? this.high : this.low, n = 31;
            n > 0;
            n--
          )
            if (0 != (t & (1 << n))) break;
          return 0 != this.high ? n + 33 : n + 1;
        }),
        (k.isZero = function () {
          return 0 === this.high && 0 === this.low;
        }),
        (k.eqz = k.isZero),
        (k.isNegative = function () {
          return !this.unsigned && this.high < 0;
        }),
        (k.isPositive = function () {
          return this.unsigned || this.high >= 0;
        }),
        (k.isOdd = function () {
          return 1 === (1 & this.low);
        }),
        (k.isEven = function () {
          return 0 === (1 & this.low);
        }),
        (k.equals = function (t) {
          return (
            r(t) || (t = h(t)),
            (this.unsigned === t.unsigned ||
              this.high >>> 31 !== 1 ||
              t.high >>> 31 !== 1) &&
              this.high === t.high &&
              this.low === t.low
          );
        }),
        (k.eq = k.equals),
        (k.notEquals = function (t) {
          return !this.eq(t);
        }),
        (k.neq = k.notEquals),
        (k.ne = k.notEquals),
        (k.lessThan = function (t) {
          return this.comp(t) < 0;
        }),
        (k.lt = k.lessThan),
        (k.lessThanOrEqual = function (t) {
          return this.comp(t) <= 0;
        }),
        (k.lte = k.lessThanOrEqual),
        (k.le = k.lessThanOrEqual),
        (k.greaterThan = function (t) {
          return this.comp(t) > 0;
        }),
        (k.gt = k.greaterThan),
        (k.greaterThanOrEqual = function (t) {
          return this.comp(t) >= 0;
        }),
        (k.gte = k.greaterThanOrEqual),
        (k.ge = k.greaterThanOrEqual),
        (k.compare = function (t) {
          if ((r(t) || (t = h(t)), this.eq(t))) return 0;
          var n = this.isNegative(),
            i = t.isNegative();
          return n && !i
            ? -1
            : !n && i
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
        (k.comp = k.compare),
        (k.negate = function () {
          return !this.unsigned && this.eq(E) ? E : this.not().add(S);
        }),
        (k.neg = k.negate),
        (k.add = function (t) {
          r(t) || (t = h(t));
          var n = this.high >>> 16,
            i = 65535 & this.high,
            o = this.low >>> 16,
            s = 65535 & this.low,
            u = t.high >>> 16,
            a = 65535 & t.high,
            l = t.low >>> 16,
            c = 65535 & t.low,
            d = 0,
            g = 0,
            p = 0,
            m = 0;
          return (
            (m += s + c),
            (p += m >>> 16),
            (m &= 65535),
            (p += o + l),
            (g += p >>> 16),
            (p &= 65535),
            (g += i + a),
            (d += g >>> 16),
            (g &= 65535),
            (d += n + u),
            (d &= 65535),
            f((p << 16) | m, (d << 16) | g, this.unsigned)
          );
        }),
        (k.subtract = function (t) {
          return (r(t) || (t = h(t)), this.add(t.neg()));
        }),
        (k.sub = k.subtract),
        (k.multiply = function (t) {
          if (this.isZero()) return O;
          if ((r(t) || (t = h(t)), i)) {
            var n = i.mul(this.low, this.high, t.low, t.high);
            return f(n, i.get_high(), this.unsigned);
          }
          if (t.isZero()) return O;
          if (this.eq(E)) return t.isOdd() ? E : O;
          if (t.eq(E)) return this.isOdd() ? E : O;
          if (this.isNegative())
            return t.isNegative()
              ? this.neg().mul(t.neg())
              : this.neg().mul(t).neg();
          if (t.isNegative()) return this.mul(t.neg()).neg();
          if (this.lt(v) && t.lt(v))
            return l(this.toNumber() * t.toNumber(), this.unsigned);
          var o = this.high >>> 16,
            s = 65535 & this.high,
            u = this.low >>> 16,
            a = 65535 & this.low,
            c = t.high >>> 16,
            d = 65535 & t.high,
            g = t.low >>> 16,
            p = 65535 & t.low,
            m = 0,
            y = 0,
            b = 0,
            w = 0;
          return (
            (w += a * p),
            (b += w >>> 16),
            (w &= 65535),
            (b += u * p),
            (y += b >>> 16),
            (b &= 65535),
            (b += a * g),
            (y += b >>> 16),
            (b &= 65535),
            (y += s * p),
            (m += y >>> 16),
            (y &= 65535),
            (y += u * g),
            (m += y >>> 16),
            (y &= 65535),
            (y += a * d),
            (m += y >>> 16),
            (y &= 65535),
            (m += o * p + s * g + u * d + a * c),
            (m &= 65535),
            f((b << 16) | w, (m << 16) | y, this.unsigned)
          );
        }),
        (k.mul = k.multiply),
        (k.divide = function (t) {
          if ((r(t) || (t = h(t)), t.isZero())) throw Error("division by zero");
          if (i) {
            if (
              !this.unsigned &&
              -2147483648 === this.high &&
              -1 === t.low &&
              -1 === t.high
            )
              return this;
            var n = (this.unsigned ? i.div_u : i.div_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return f(n, i.get_high(), this.unsigned);
          }
          if (this.isZero()) return this.unsigned ? w : O;
          var o, s, u;
          if (this.unsigned) {
            if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return w;
            if (t.gt(this.shru(1))) return I;
            u = w;
          } else {
            if (this.eq(E)) {
              if (t.eq(S) || t.eq(_)) return E;
              if (t.eq(E)) return S;
              var a = this.shr(1);
              return (
                (o = a.div(t).shl(1)),
                o.eq(O)
                  ? t.isNegative()
                    ? S
                    : _
                  : ((s = this.sub(t.mul(o))), (u = o.add(s.div(t))), u)
              );
            }
            if (t.eq(E)) return this.unsigned ? w : O;
            if (this.isNegative())
              return t.isNegative()
                ? this.neg().div(t.neg())
                : this.neg().div(t).neg();
            if (t.isNegative()) return this.div(t.neg()).neg();
            u = O;
          }
          s = this;
          while (s.gte(t)) {
            o = Math.max(1, Math.floor(s.toNumber() / t.toNumber()));
            var d = Math.ceil(Math.log(o) / Math.LN2),
              g = d <= 48 ? 1 : c(2, d - 48),
              p = l(o),
              m = p.mul(t);
            while (m.isNegative() || m.gt(s))
              ((o -= g), (p = l(o, this.unsigned)), (m = p.mul(t)));
            (p.isZero() && (p = S), (u = u.add(p)), (s = s.sub(m)));
          }
          return u;
        }),
        (k.div = k.divide),
        (k.modulo = function (t) {
          if ((r(t) || (t = h(t)), i)) {
            var n = (this.unsigned ? i.rem_u : i.rem_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return f(n, i.get_high(), this.unsigned);
          }
          return this.sub(this.div(t).mul(t));
        }),
        (k.mod = k.modulo),
        (k.rem = k.modulo),
        (k.not = function () {
          return f(~this.low, ~this.high, this.unsigned);
        }),
        (k.and = function (t) {
          return (
            r(t) || (t = h(t)),
            f(this.low & t.low, this.high & t.high, this.unsigned)
          );
        }),
        (k.or = function (t) {
          return (
            r(t) || (t = h(t)),
            f(this.low | t.low, this.high | t.high, this.unsigned)
          );
        }),
        (k.xor = function (t) {
          return (
            r(t) || (t = h(t)),
            f(this.low ^ t.low, this.high ^ t.high, this.unsigned)
          );
        }),
        (k.shiftLeft = function (t) {
          return (
            r(t) && (t = t.toInt()),
            0 === (t &= 63)
              ? this
              : t < 32
                ? f(
                    this.low << t,
                    (this.high << t) | (this.low >>> (32 - t)),
                    this.unsigned,
                  )
                : f(0, this.low << (t - 32), this.unsigned)
          );
        }),
        (k.shl = k.shiftLeft),
        (k.shiftRight = function (t) {
          return (
            r(t) && (t = t.toInt()),
            0 === (t &= 63)
              ? this
              : t < 32
                ? f(
                    (this.low >>> t) | (this.high << (32 - t)),
                    this.high >> t,
                    this.unsigned,
                  )
                : f(
                    this.high >> (t - 32),
                    this.high >= 0 ? 0 : -1,
                    this.unsigned,
                  )
          );
        }),
        (k.shr = k.shiftRight),
        (k.shiftRightUnsigned = function (t) {
          if ((r(t) && (t = t.toInt()), (t &= 63), 0 === t)) return this;
          var n = this.high;
          if (t < 32) {
            var i = this.low;
            return f((i >>> t) | (n << (32 - t)), n >>> t, this.unsigned);
          }
          return f(32 === t ? n : n >>> (t - 32), 0, this.unsigned);
        }),
        (k.shru = k.shiftRightUnsigned),
        (k.shr_u = k.shiftRightUnsigned),
        (k.toSigned = function () {
          return this.unsigned ? f(this.low, this.high, !1) : this;
        }),
        (k.toUnsigned = function () {
          return this.unsigned ? this : f(this.low, this.high, !0);
        }),
        (k.toBytes = function (t) {
          return t ? this.toBytesLE() : this.toBytesBE();
        }),
        (k.toBytesLE = function () {
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
        (k.toBytesBE = function () {
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
        (o.fromBytes = function (t, n, i) {
          return i ? o.fromBytesLE(t, n) : o.fromBytesBE(t, n);
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
    2755: function (t, n, i) {
      "use strict";
      t.exports = i(3094);
    },
    2791: function (t, n, i) {
      "use strict";
      (function (t) {
        var o = n;
        function r(t, n, i) {
          for (var o = Object.keys(n), r = 0; r < o.length; ++r)
            (void 0 !== t[o[r]] && i) || (t[o[r]] = n[o[r]]);
          return t;
        }
        function s(t) {
          function n(t, i) {
            if (!(this instanceof n)) return new n(t, i);
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
              i && r(this, i));
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
        ((o.asPromise = i(3021)),
          (o.base64 = i(3022)),
          (o.EventEmitter = i(3023)),
          (o.float = i(3024)),
          (o.inquire = i(3025)),
          (o.utf8 = i(3026)),
          (o.pool = i(3027)),
          (o.LongBits = i(3095)),
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
              var i = t[n];
              return (
                !(null == i || !t.hasOwnProperty(n)) &&
                ("object" !== typeof i ||
                  (Array.isArray(i) ? i.length : Object.keys(i).length) > 0)
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
            var i = o.LongBits.fromHash(t);
            return o.Long
              ? o.Long.fromBits(i.lo, i.hi, n)
              : i.toNumber(Boolean(n));
          }),
          (o.merge = r),
          (o.lcFirst = function (t) {
            return t.charAt(0).toLowerCase() + t.substring(1);
          }),
          (o.newError = s),
          (o.ProtocolError = s("ProtocolError")),
          (o.oneOfGetter = function (t) {
            for (var n = {}, i = 0; i < t.length; ++i) n[t[i]] = 1;
            return function () {
              for (var t = Object.keys(this), i = t.length - 1; i > -1; --i)
                if (
                  1 === n[t[i]] &&
                  void 0 !== this[t[i]] &&
                  null !== this[t[i]]
                )
                  return t[i];
            };
          }),
          (o.oneOfSetter = function (t) {
            return function (n) {
              for (var i = 0; i < t.length; ++i)
                t[i] !== n && delete this[t[i]];
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
                  function (n, i) {
                    return new t(n, i);
                  }),
                (o._Buffer_allocUnsafe =
                  t.allocUnsafe ||
                  function (n) {
                    return new t(n);
                  }))
              : (o._Buffer_from = o._Buffer_allocUnsafe = null);
          }));
      }).call(this, i(13));
    },
    2951: function (t, n, i) {
      "use strict";
      t.exports = d;
      var o,
        r = i(2791),
        s = r.LongBits,
        u = r.base64,
        a = r.utf8;
      function l(t, n, i) {
        ((this.fn = t), (this.len = n), (this.next = void 0), (this.val = i));
      }
      function f() {}
      function c(t) {
        ((this.head = t.head),
          (this.tail = t.tail),
          (this.len = t.len),
          (this.next = t.states));
      }
      function d() {
        ((this.len = 0),
          (this.head = new l(f, 0, 0)),
          (this.tail = this.head),
          (this.states = null));
      }
      var h = function () {
        return r.Buffer
          ? function () {
              return (d.create = function () {
                return new o();
              })();
            }
          : function () {
              return new d();
            };
      };
      function g(t, n, i) {
        n[i] = 255 & t;
      }
      function p(t, n, i) {
        while (t > 127) ((n[i++] = (127 & t) | 128), (t >>>= 7));
        n[i] = t;
      }
      function m(t, n) {
        ((this.len = t), (this.next = void 0), (this.val = n));
      }
      function y(t, n, i) {
        while (t.hi)
          ((n[i++] = (127 & t.lo) | 128),
            (t.lo = ((t.lo >>> 7) | (t.hi << 25)) >>> 0),
            (t.hi >>>= 7));
        while (t.lo > 127) ((n[i++] = (127 & t.lo) | 128), (t.lo = t.lo >>> 7));
        n[i++] = t.lo;
      }
      function b(t, n, i) {
        ((n[i] = 255 & t),
          (n[i + 1] = (t >>> 8) & 255),
          (n[i + 2] = (t >>> 16) & 255),
          (n[i + 3] = t >>> 24));
      }
      ((d.create = h()),
        (d.alloc = function (t) {
          return new r.Array(t);
        }),
        r.Array !== Array &&
          (d.alloc = r.pool(d.alloc, r.Array.prototype.subarray)),
        (d.prototype._push = function (t, n, i) {
          return (
            (this.tail = this.tail.next = new l(t, n, i)),
            (this.len += n),
            this
          );
        }),
        (m.prototype = Object.create(l.prototype)),
        (m.prototype.fn = p),
        (d.prototype.uint32 = function (t) {
          return (
            (this.len += (this.tail = this.tail.next =
              new m(
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
        (d.prototype.int32 = function (t) {
          return t < 0 ? this._push(y, 10, s.fromNumber(t)) : this.uint32(t);
        }),
        (d.prototype.sint32 = function (t) {
          return this.uint32(((t << 1) ^ (t >> 31)) >>> 0);
        }),
        (d.prototype.uint64 = function (t) {
          var n = s.from(t);
          return this._push(y, n.length(), n);
        }),
        (d.prototype.int64 = d.prototype.uint64),
        (d.prototype.sint64 = function (t) {
          var n = s.from(t).zzEncode();
          return this._push(y, n.length(), n);
        }),
        (d.prototype.bool = function (t) {
          return this._push(g, 1, t ? 1 : 0);
        }),
        (d.prototype.fixed32 = function (t) {
          return this._push(b, 4, t >>> 0);
        }),
        (d.prototype.sfixed32 = d.prototype.fixed32),
        (d.prototype.fixed64 = function (t) {
          var n = s.from(t);
          return this._push(b, 4, n.lo)._push(b, 4, n.hi);
        }),
        (d.prototype.sfixed64 = d.prototype.fixed64),
        (d.prototype.float = function (t) {
          return this._push(r.float.writeFloatLE, 4, t);
        }),
        (d.prototype.double = function (t) {
          return this._push(r.float.writeDoubleLE, 8, t);
        }));
      var v = r.Array.prototype.set
        ? function (t, n, i) {
            n.set(t, i);
          }
        : function (t, n, i) {
            for (var o = 0; o < t.length; ++o) n[i + o] = t[o];
          };
      ((d.prototype.bytes = function (t) {
        var n = t.length >>> 0;
        if (!n) return this._push(g, 1, 0);
        if (r.isString(t)) {
          var i = d.alloc((n = u.length(t)));
          (u.decode(t, i, 0), (t = i));
        }
        return this.uint32(n)._push(v, n, t);
      }),
        (d.prototype.string = function (t) {
          var n = a.length(t);
          return n ? this.uint32(n)._push(a.write, n, t) : this._push(g, 1, 0);
        }),
        (d.prototype.fork = function () {
          return (
            (this.states = new c(this)),
            (this.head = this.tail = new l(f, 0, 0)),
            (this.len = 0),
            this
          );
        }),
        (d.prototype.reset = function () {
          return (
            this.states
              ? ((this.head = this.states.head),
                (this.tail = this.states.tail),
                (this.len = this.states.len),
                (this.states = this.states.next))
              : ((this.head = this.tail = new l(f, 0, 0)), (this.len = 0)),
            this
          );
        }),
        (d.prototype.ldelim = function () {
          var t = this.head,
            n = this.tail,
            i = this.len;
          return (
            this.reset().uint32(i),
            i && ((this.tail.next = t.next), (this.tail = n), (this.len += i)),
            this
          );
        }),
        (d.prototype.finish = function () {
          var t = this.head.next,
            n = this.constructor.alloc(this.len),
            i = 0;
          while (t) (t.fn(t.val, n, i), (i += t.len), (t = t.next));
          return n;
        }),
        (d._configure = function (t) {
          ((o = t), (d.create = h()), o._configure());
        }));
    },
    2952: function (t, n, i) {
      "use strict";
      t.exports = l;
      var o,
        r = i(2791),
        s = r.LongBits,
        u = r.utf8;
      function a(t, n) {
        return RangeError(
          "index out of range: " + t.pos + " + " + (n || 1) + " > " + t.len,
        );
      }
      function l(t) {
        ((this.buf = t), (this.pos = 0), (this.len = t.length));
      }
      var f =
          "undefined" !== typeof Uint8Array
            ? function (t) {
                if (t instanceof Uint8Array || Array.isArray(t))
                  return new l(t);
                throw Error("illegal buffer");
              }
            : function (t) {
                if (Array.isArray(t)) return new l(t);
                throw Error("illegal buffer");
              },
        c = function () {
          return r.Buffer
            ? function (t) {
                return (l.create = function (t) {
                  return r.Buffer.isBuffer(t) ? new o(t) : f(t);
                })(t);
              }
            : f;
        };
      function d() {
        var t = new s(0, 0),
          n = 0;
        if (!(this.len - this.pos > 4)) {
          for (; n < 3; ++n) {
            if (this.pos >= this.len) throw a(this);
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
            if (this.pos >= this.len) throw a(this);
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
      function g() {
        if (this.pos + 8 > this.len) throw a(this, 8);
        return new s(
          h(this.buf, (this.pos += 4)),
          h(this.buf, (this.pos += 4)),
        );
      }
      ((l.create = c()),
        (l.prototype._slice =
          r.Array.prototype.subarray || r.Array.prototype.slice),
        (l.prototype.uint32 = (function () {
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
        (l.prototype.int32 = function () {
          return 0 | this.uint32();
        }),
        (l.prototype.sint32 = function () {
          var t = this.uint32();
          return ((t >>> 1) ^ -(1 & t)) | 0;
        }),
        (l.prototype.bool = function () {
          return 0 !== this.uint32();
        }),
        (l.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) throw a(this, 4);
          return h(this.buf, (this.pos += 4));
        }),
        (l.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) throw a(this, 4);
          return 0 | h(this.buf, (this.pos += 4));
        }),
        (l.prototype.float = function () {
          if (this.pos + 4 > this.len) throw a(this, 4);
          var t = r.float.readFloatLE(this.buf, this.pos);
          return ((this.pos += 4), t);
        }),
        (l.prototype.double = function () {
          if (this.pos + 8 > this.len) throw a(this, 4);
          var t = r.float.readDoubleLE(this.buf, this.pos);
          return ((this.pos += 8), t);
        }),
        (l.prototype.bytes = function () {
          var t = this.uint32(),
            n = this.pos,
            i = this.pos + t;
          if (i > this.len) throw a(this, t);
          return (
            (this.pos += t),
            Array.isArray(this.buf)
              ? this.buf.slice(n, i)
              : n === i
                ? new this.buf.constructor(0)
                : this._slice.call(this.buf, n, i)
          );
        }),
        (l.prototype.string = function () {
          var t = this.bytes();
          return u.read(t, 0, t.length);
        }),
        (l.prototype.skip = function (t) {
          if ("number" === typeof t) {
            if (this.pos + t > this.len) throw a(this, t);
            this.pos += t;
          } else
            do {
              if (this.pos >= this.len) throw a(this);
            } while (128 & this.buf[this.pos++]);
          return this;
        }),
        (l.prototype.skipType = function (t) {
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
        (l._configure = function (t) {
          ((o = t), (l.create = c()), o._configure());
          var n = r.Long ? "toLong" : "toNumber";
          r.merge(l.prototype, {
            int64: function () {
              return d.call(this)[n](!1);
            },
            uint64: function () {
              return d.call(this)[n](!0);
            },
            sint64: function () {
              return d.call(this).zzDecode()[n](!1);
            },
            fixed64: function () {
              return g.call(this)[n](!0);
            },
            sfixed64: function () {
              return g.call(this)[n](!1);
            },
          });
        }));
    },
    3021: function (t, n, i) {
      "use strict";
      function o(t, n) {
        var i = new Array(arguments.length - 1),
          o = 0,
          r = 2,
          s = !0;
        while (r < arguments.length) i[o++] = arguments[r++];
        return new Promise(function (r, u) {
          i[o] = function (t) {
            if (s)
              if (((s = !1), t)) u(t);
              else {
                var n = new Array(arguments.length - 1),
                  i = 0;
                while (i < n.length) n[i++] = arguments[i];
                r.apply(null, n);
              }
          };
          try {
            t.apply(n || null, i);
          } catch (a) {
            s && ((s = !1), u(a));
          }
        });
      }
      t.exports = o;
    },
    3022: function (t, n, i) {
      "use strict";
      var o = n;
      o.length = function (t) {
        var n = t.length;
        if (!n) return 0;
        var i = 0;
        while (--n % 4 > 1 && "=" === t.charAt(n)) ++i;
        return Math.ceil(3 * t.length) / 4 - i;
      };
      for (var r = new Array(64), s = new Array(123), u = 0; u < 64; )
        s[
          (r[u] =
            u < 26 ? u + 65 : u < 52 ? u + 71 : u < 62 ? u - 4 : (u - 59) | 43)
        ] = u++;
      o.encode = function (t, n, i) {
        var o,
          s = null,
          u = [],
          a = 0,
          l = 0;
        while (n < i) {
          var f = t[n++];
          switch (l) {
            case 0:
              ((u[a++] = r[f >> 2]), (o = (3 & f) << 4), (l = 1));
              break;
            case 1:
              ((u[a++] = r[o | (f >> 4)]), (o = (15 & f) << 2), (l = 2));
              break;
            case 2:
              ((u[a++] = r[o | (f >> 6)]), (u[a++] = r[63 & f]), (l = 0));
              break;
          }
          a > 8191 &&
            ((s || (s = [])).push(String.fromCharCode.apply(String, u)),
            (a = 0));
        }
        return (
          l && ((u[a++] = r[o]), (u[a++] = 61), 1 === l && (u[a++] = 61)),
          s
            ? (a && s.push(String.fromCharCode.apply(String, u.slice(0, a))),
              s.join(""))
            : String.fromCharCode.apply(String, u.slice(0, a))
        );
      };
      var a = "invalid encoding";
      ((o.decode = function (t, n, i) {
        for (var o, r = i, u = 0, l = 0; l < t.length; ) {
          var f = t.charCodeAt(l++);
          if (61 === f && u > 1) break;
          if (void 0 === (f = s[f])) throw Error(a);
          switch (u) {
            case 0:
              ((o = f), (u = 1));
              break;
            case 1:
              ((n[i++] = (o << 2) | ((48 & f) >> 4)), (o = f), (u = 2));
              break;
            case 2:
              ((n[i++] = ((15 & o) << 4) | ((60 & f) >> 2)), (o = f), (u = 3));
              break;
            case 3:
              ((n[i++] = ((3 & o) << 6) | f), (u = 0));
              break;
          }
        }
        if (1 === u) throw Error(a);
        return i - r;
      }),
        (o.test = function (t) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            t,
          );
        }));
    },
    3023: function (t, n, i) {
      "use strict";
      function o() {
        this._listeners = {};
      }
      ((t.exports = o),
        (o.prototype.on = function (t, n, i) {
          return (
            (this._listeners[t] || (this._listeners[t] = [])).push({
              fn: n,
              ctx: i || this,
            }),
            this
          );
        }),
        (o.prototype.off = function (t, n) {
          if (void 0 === t) this._listeners = {};
          else if (void 0 === n) this._listeners[t] = [];
          else
            for (var i = this._listeners[t], o = 0; o < i.length; )
              i[o].fn === n ? i.splice(o, 1) : ++o;
          return this;
        }),
        (o.prototype.emit = function (t) {
          var n = this._listeners[t];
          if (n) {
            for (var i = [], o = 1; o < arguments.length; )
              i.push(arguments[o++]);
            for (o = 0; o < n.length; ) n[o].fn.apply(n[o++].ctx, i);
          }
          return this;
        }));
    },
    3024: function (t, n, i) {
      "use strict";
      function o(t) {
        return (
          "undefined" !== typeof Float32Array
            ? (function () {
                var n = new Float32Array([-0]),
                  i = new Uint8Array(n.buffer),
                  o = 128 === i[3];
                function r(t, o, r) {
                  ((n[0] = t),
                    (o[r] = i[0]),
                    (o[r + 1] = i[1]),
                    (o[r + 2] = i[2]),
                    (o[r + 3] = i[3]));
                }
                function s(t, o, r) {
                  ((n[0] = t),
                    (o[r] = i[3]),
                    (o[r + 1] = i[2]),
                    (o[r + 2] = i[1]),
                    (o[r + 3] = i[0]));
                }
                function u(t, o) {
                  return (
                    (i[0] = t[o]),
                    (i[1] = t[o + 1]),
                    (i[2] = t[o + 2]),
                    (i[3] = t[o + 3]),
                    n[0]
                  );
                }
                function a(t, o) {
                  return (
                    (i[3] = t[o]),
                    (i[2] = t[o + 1]),
                    (i[1] = t[o + 2]),
                    (i[0] = t[o + 3]),
                    n[0]
                  );
                }
                ((t.writeFloatLE = o ? r : s),
                  (t.writeFloatBE = o ? s : r),
                  (t.readFloatLE = o ? u : a),
                  (t.readFloatBE = o ? a : u));
              })()
            : (function () {
                function n(t, n, i, o) {
                  var r = n < 0 ? 1 : 0;
                  if ((r && (n = -n), 0 === n))
                    t(1 / n > 0 ? 0 : 2147483648, i, o);
                  else if (isNaN(n)) t(2143289344, i, o);
                  else if (n > 34028234663852886e22)
                    t(((r << 31) | 2139095040) >>> 0, i, o);
                  else if (n < 11754943508222875e-54)
                    t(
                      ((r << 31) | Math.round(n / 1401298464324817e-60)) >>> 0,
                      i,
                      o,
                    );
                  else {
                    var s = Math.floor(Math.log(n) / Math.LN2),
                      u = 8388607 & Math.round(n * Math.pow(2, -s) * 8388608);
                    t(((r << 31) | ((s + 127) << 23) | u) >>> 0, i, o);
                  }
                }
                function i(t, n, i) {
                  var o = t(n, i),
                    r = 2 * (o >> 31) + 1,
                    s = (o >>> 23) & 255,
                    u = 8388607 & o;
                  return 255 === s
                    ? u
                      ? NaN
                      : r * (1 / 0)
                    : 0 === s
                      ? 1401298464324817e-60 * r * u
                      : r * Math.pow(2, s - 150) * (u + 8388608);
                }
                ((t.writeFloatLE = n.bind(null, r)),
                  (t.writeFloatBE = n.bind(null, s)),
                  (t.readFloatLE = i.bind(null, u)),
                  (t.readFloatBE = i.bind(null, a)));
              })(),
          "undefined" !== typeof Float64Array
            ? (function () {
                var n = new Float64Array([-0]),
                  i = new Uint8Array(n.buffer),
                  o = 128 === i[7];
                function r(t, o, r) {
                  ((n[0] = t),
                    (o[r] = i[0]),
                    (o[r + 1] = i[1]),
                    (o[r + 2] = i[2]),
                    (o[r + 3] = i[3]),
                    (o[r + 4] = i[4]),
                    (o[r + 5] = i[5]),
                    (o[r + 6] = i[6]),
                    (o[r + 7] = i[7]));
                }
                function s(t, o, r) {
                  ((n[0] = t),
                    (o[r] = i[7]),
                    (o[r + 1] = i[6]),
                    (o[r + 2] = i[5]),
                    (o[r + 3] = i[4]),
                    (o[r + 4] = i[3]),
                    (o[r + 5] = i[2]),
                    (o[r + 6] = i[1]),
                    (o[r + 7] = i[0]));
                }
                function u(t, o) {
                  return (
                    (i[0] = t[o]),
                    (i[1] = t[o + 1]),
                    (i[2] = t[o + 2]),
                    (i[3] = t[o + 3]),
                    (i[4] = t[o + 4]),
                    (i[5] = t[o + 5]),
                    (i[6] = t[o + 6]),
                    (i[7] = t[o + 7]),
                    n[0]
                  );
                }
                function a(t, o) {
                  return (
                    (i[7] = t[o]),
                    (i[6] = t[o + 1]),
                    (i[5] = t[o + 2]),
                    (i[4] = t[o + 3]),
                    (i[3] = t[o + 4]),
                    (i[2] = t[o + 5]),
                    (i[1] = t[o + 6]),
                    (i[0] = t[o + 7]),
                    n[0]
                  );
                }
                ((t.writeDoubleLE = o ? r : s),
                  (t.writeDoubleBE = o ? s : r),
                  (t.readDoubleLE = o ? u : a),
                  (t.readDoubleBE = o ? a : u));
              })()
            : (function () {
                function n(t, n, i, o, r, s) {
                  var u = o < 0 ? 1 : 0;
                  if ((u && (o = -o), 0 === o))
                    (t(0, r, s + n), t(1 / o > 0 ? 0 : 2147483648, r, s + i));
                  else if (isNaN(o)) (t(0, r, s + n), t(2146959360, r, s + i));
                  else if (o > 17976931348623157e292)
                    (t(0, r, s + n),
                      t(((u << 31) | 2146435072) >>> 0, r, s + i));
                  else {
                    var a;
                    if (o < 22250738585072014e-324)
                      ((a = o / 5e-324),
                        t(a >>> 0, r, s + n),
                        t(((u << 31) | (a / 4294967296)) >>> 0, r, s + i));
                    else {
                      var l = Math.floor(Math.log(o) / Math.LN2);
                      (1024 === l && (l = 1023),
                        (a = o * Math.pow(2, -l)),
                        t((4503599627370496 * a) >>> 0, r, s + n),
                        t(
                          ((u << 31) |
                            ((l + 1023) << 20) |
                            ((1048576 * a) & 1048575)) >>>
                            0,
                          r,
                          s + i,
                        ));
                    }
                  }
                }
                function i(t, n, i, o, r) {
                  var s = t(o, r + n),
                    u = t(o, r + i),
                    a = 2 * (u >> 31) + 1,
                    l = (u >>> 20) & 2047,
                    f = 4294967296 * (1048575 & u) + s;
                  return 2047 === l
                    ? f
                      ? NaN
                      : a * (1 / 0)
                    : 0 === l
                      ? 5e-324 * a * f
                      : a * Math.pow(2, l - 1075) * (f + 4503599627370496);
                }
                ((t.writeDoubleLE = n.bind(null, r, 0, 4)),
                  (t.writeDoubleBE = n.bind(null, s, 4, 0)),
                  (t.readDoubleLE = i.bind(null, u, 0, 4)),
                  (t.readDoubleBE = i.bind(null, a, 4, 0)));
              })(),
          t
        );
      }
      function r(t, n, i) {
        ((n[i] = 255 & t),
          (n[i + 1] = (t >>> 8) & 255),
          (n[i + 2] = (t >>> 16) & 255),
          (n[i + 3] = t >>> 24));
      }
      function s(t, n, i) {
        ((n[i] = t >>> 24),
          (n[i + 1] = (t >>> 16) & 255),
          (n[i + 2] = (t >>> 8) & 255),
          (n[i + 3] = 255 & t));
      }
      function u(t, n) {
        return (
          (t[n] | (t[n + 1] << 8) | (t[n + 2] << 16) | (t[n + 3] << 24)) >>> 0
        );
      }
      function a(t, n) {
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
    3026: function (t, n, i) {
      "use strict";
      var o = n;
      ((o.length = function (t) {
        for (var n = 0, i = 0, o = 0; o < t.length; ++o)
          ((i = t.charCodeAt(o)),
            i < 128
              ? (n += 1)
              : i < 2048
                ? (n += 2)
                : 55296 === (64512 & i) &&
                    56320 === (64512 & t.charCodeAt(o + 1))
                  ? (++o, (n += 4))
                  : (n += 3));
        return n;
      }),
        (o.read = function (t, n, i) {
          var o = i - n;
          if (o < 1) return "";
          var r,
            s = null,
            u = [],
            a = 0;
          while (n < i)
            ((r = t[n++]),
              r < 128
                ? (u[a++] = r)
                : r > 191 && r < 224
                  ? (u[a++] = ((31 & r) << 6) | (63 & t[n++]))
                  : r > 239 && r < 365
                    ? ((r =
                        (((7 & r) << 18) |
                          ((63 & t[n++]) << 12) |
                          ((63 & t[n++]) << 6) |
                          (63 & t[n++])) -
                        65536),
                      (u[a++] = 55296 + (r >> 10)),
                      (u[a++] = 56320 + (1023 & r)))
                    : (u[a++] =
                        ((15 & r) << 12) |
                        ((63 & t[n++]) << 6) |
                        (63 & t[n++])),
              a > 8191 &&
                ((s || (s = [])).push(String.fromCharCode.apply(String, u)),
                (a = 0)));
          return s
            ? (a && s.push(String.fromCharCode.apply(String, u.slice(0, a))),
              s.join(""))
            : String.fromCharCode.apply(String, u.slice(0, a));
        }),
        (o.write = function (t, n, i) {
          for (var o, r, s = i, u = 0; u < t.length; ++u)
            ((o = t.charCodeAt(u)),
              o < 128
                ? (n[i++] = o)
                : o < 2048
                  ? ((n[i++] = (o >> 6) | 192), (n[i++] = (63 & o) | 128))
                  : 55296 === (64512 & o) &&
                      56320 === (64512 & (r = t.charCodeAt(u + 1)))
                    ? ((o = 65536 + ((1023 & o) << 10) + (1023 & r)),
                      ++u,
                      (n[i++] = (o >> 18) | 240),
                      (n[i++] = ((o >> 12) & 63) | 128),
                      (n[i++] = ((o >> 6) & 63) | 128),
                      (n[i++] = (63 & o) | 128))
                    : ((n[i++] = (o >> 12) | 224),
                      (n[i++] = ((o >> 6) & 63) | 128),
                      (n[i++] = (63 & o) | 128)));
          return i - s;
        }));
    },
    3027: function (t, n, i) {
      "use strict";
      function o(t, n, i) {
        var o = i || 8192,
          r = o >>> 1,
          s = null,
          u = o;
        return function (i) {
          if (i < 1 || i > r) return t(i);
          u + i > o && ((s = t(o)), (u = 0));
          var a = n.call(s, u, (u += i));
          return (7 & u && (u = 1 + (7 | u)), a);
        };
      }
      t.exports = o;
    },
    3094: function (t, n, i) {
      "use strict";
      var o = n;
      function r() {
        (o.util._configure(),
          o.Writer._configure(o.BufferWriter),
          o.Reader._configure(o.BufferReader));
      }
      ((o.build = "minimal"),
        (o.Writer = i(2951)),
        (o.BufferWriter = i(3096)),
        (o.Reader = i(2952)),
        (o.BufferReader = i(3097)),
        (o.util = i(2791)),
        (o.rpc = i(3098)),
        (o.roots = i(3100)),
        (o.configure = r),
        r());
    },
    3095: function (t, n, i) {
      "use strict";
      t.exports = r;
      var o = i(2791);
      function r(t, n) {
        ((this.lo = t >>> 0), (this.hi = n >>> 0));
      }
      var s = (r.zero = new r(0, 0));
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
      var u = (r.zeroHash = "\0\0\0\0\0\0\0\0");
      ((r.fromNumber = function (t) {
        if (0 === t) return s;
        var n = t < 0;
        n && (t = -t);
        var i = t >>> 0,
          o = ((t - i) / 4294967296) >>> 0;
        return (
          n &&
            ((o = ~o >>> 0),
            (i = ~i >>> 0),
            ++i > 4294967295 && ((i = 0), ++o > 4294967295 && (o = 0))),
          new r(i, o)
        );
      }),
        (r.from = function (t) {
          if ("number" === typeof t) return r.fromNumber(t);
          if (o.isString(t)) {
            if (!o.Long) return r.fromNumber(parseInt(t, 10));
            t = o.Long.fromString(t);
          }
          return t.low || t.high ? new r(t.low >>> 0, t.high >>> 0) : s;
        }),
        (r.prototype.toNumber = function (t) {
          if (!t && this.hi >>> 31) {
            var n = (1 + ~this.lo) >>> 0,
              i = ~this.hi >>> 0;
            return (n || (i = (i + 1) >>> 0), -(n + 4294967296 * i));
          }
          return this.lo + 4294967296 * this.hi;
        }),
        (r.prototype.toLong = function (t) {
          return o.Long
            ? new o.Long(0 | this.lo, 0 | this.hi, Boolean(t))
            : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(t) };
        }));
      var a = String.prototype.charCodeAt;
      ((r.fromHash = function (t) {
        return t === u
          ? s
          : new r(
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
        (r.prototype.toHash = function () {
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
        (r.prototype.zzEncode = function () {
          var t = this.hi >> 31;
          return (
            (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ t) >>> 0),
            (this.lo = ((this.lo << 1) ^ t) >>> 0),
            this
          );
        }),
        (r.prototype.zzDecode = function () {
          var t = -(1 & this.lo);
          return (
            (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ t) >>> 0),
            (this.hi = ((this.hi >>> 1) ^ t) >>> 0),
            this
          );
        }),
        (r.prototype.length = function () {
          var t = this.lo,
            n = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
            i = this.hi >>> 24;
          return 0 === i
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
            : i < 128
              ? 9
              : 10;
        }));
    },
    3096: function (t, n, i) {
      "use strict";
      t.exports = s;
      var o = i(2951);
      (s.prototype = Object.create(o.prototype)).constructor = s;
      var r = i(2791);
      function s() {
        o.call(this);
      }
      function u(t, n, i) {
        t.length < 40
          ? r.utf8.write(t, n, i)
          : n.utf8Write
            ? n.utf8Write(t, i)
            : n.write(t, i);
      }
      ((s._configure = function () {
        ((s.alloc = r._Buffer_allocUnsafe),
          (s.writeBytesBuffer =
            r.Buffer &&
            r.Buffer.prototype instanceof Uint8Array &&
            "set" === r.Buffer.prototype.set.name
              ? function (t, n, i) {
                  n.set(t, i);
                }
              : function (t, n, i) {
                  if (t.copy) t.copy(n, i, 0, t.length);
                  else for (var o = 0; o < t.length; ) n[i++] = t[o++];
                }));
      }),
        (s.prototype.bytes = function (t) {
          r.isString(t) && (t = r._Buffer_from(t, "base64"));
          var n = t.length >>> 0;
          return (
            this.uint32(n),
            n && this._push(s.writeBytesBuffer, n, t),
            this
          );
        }),
        (s.prototype.string = function (t) {
          var n = r.Buffer.byteLength(t);
          return (this.uint32(n), n && this._push(u, n, t), this);
        }),
        s._configure());
    },
    3097: function (t, n, i) {
      "use strict";
      t.exports = s;
      var o = i(2952);
      (s.prototype = Object.create(o.prototype)).constructor = s;
      var r = i(2791);
      function s(t) {
        o.call(this, t);
      }
      ((s._configure = function () {
        r.Buffer && (s.prototype._slice = r.Buffer.prototype.slice);
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
    3098: function (t, n, i) {
      "use strict";
      var o = n;
      o.Service = i(3099);
    },
    3099: function (t, n, i) {
      "use strict";
      t.exports = r;
      var o = i(2791);
      function r(t, n, i) {
        if ("function" !== typeof t)
          throw TypeError("rpcImpl must be a function");
        (o.EventEmitter.call(this),
          (this.rpcImpl = t),
          (this.requestDelimited = Boolean(n)),
          (this.responseDelimited = Boolean(i)));
      }
      (((r.prototype = Object.create(o.EventEmitter.prototype)).constructor =
        r),
        (r.prototype.rpcCall = function t(n, i, r, s, u) {
          if (!s) throw TypeError("request must be specified");
          var a = this;
          if (!u) return o.asPromise(t, a, n, i, r, s);
          if (a.rpcImpl)
            try {
              return a.rpcImpl(
                n,
                i[a.requestDelimited ? "encodeDelimited" : "encode"](
                  s,
                ).finish(),
                function (t, i) {
                  if (t) return (a.emit("error", t, n), u(t));
                  if (null !== i) {
                    if (!(i instanceof r))
                      try {
                        i =
                          r[a.responseDelimited ? "decodeDelimited" : "decode"](
                            i,
                          );
                      } catch (t) {
                        return (a.emit("error", t, n), u(t));
                      }
                    return (a.emit("data", i, n), u(null, i));
                  }
                  a.end(!0);
                },
              );
            } catch (l) {
              return (
                a.emit("error", l, n),
                void setTimeout(function () {
                  u(l);
                }, 0)
              );
            }
          else
            setTimeout(function () {
              u(Error("already ended"));
            }, 0);
        }),
        (r.prototype.end = function (t) {
          return (
            this.rpcImpl &&
              (t || this.rpcImpl(null, null, null),
              (this.rpcImpl = null),
              this.emit("end").off()),
            this
          );
        }));
    },
    3100: function (t, n, i) {
      "use strict";
      t.exports = {};
    },
    3587: function (t, n, i) {
      "use strict";
      (function (t) {
        var o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.Any = n.protobufPackage = void 0));
        const r = o(i(2754)),
          s = o(i(2755));
        n.protobufPackage = "google.protobuf";
        const u = { typeUrl: "" };
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
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, u);
            r.value = new Uint8Array();
            while (i.pos < o) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  r.typeUrl = i.string();
                  break;
                case 2:
                  r.value = i.bytes();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, u);
            return (
              (n.value = new Uint8Array()),
              void 0 !== t.typeUrl && null !== t.typeUrl
                ? (n.typeUrl = String(t.typeUrl))
                : (n.typeUrl = ""),
              void 0 !== t.value && null !== t.value && (n.value = f(t.value)),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.typeUrl && (n.typeUrl = t.typeUrl),
              void 0 !== t.value &&
                (n.value = d(void 0 !== t.value ? t.value : new Uint8Array())),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, u);
            return (
              void 0 !== t.typeUrl && null !== t.typeUrl
                ? (n.typeUrl = t.typeUrl)
                : (n.typeUrl = ""),
              void 0 !== t.value && null !== t.value
                ? (n.value = t.value)
                : (n.value = new Uint8Array()),
              n
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
        const l =
          a.atob || ((t) => a.Buffer.from(t, "base64").toString("binary"));
        function f(t) {
          const n = l(t),
            i = new Uint8Array(n.length);
          for (let o = 0; o < n.length; ++o) i[o] = n.charCodeAt(o);
          return i;
        }
        const c =
          a.btoa || ((t) => a.Buffer.from(t, "binary").toString("base64"));
        function d(t) {
          const n = [];
          for (let i = 0; i < t.byteLength; ++i)
            n.push(String.fromCharCode(t[i]));
          return c(n.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, i(13));
    },
    3588: function (t, n, i) {
      "use strict";
      (function (t) {
        var o =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.CompactBitArray = n.MultiSignature = n.protobufPackage = void 0));
        const r = o(i(2754)),
          s = o(i(2755));
        n.protobufPackage = "cosmos.crypto.multisig.v1beta1";
        const u = {};
        n.MultiSignature = {
          encode(t, n = s.default.Writer.create()) {
            for (const i of t.signatures) n.uint32(10).bytes(i);
            return n;
          },
          decode(t, n) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, u);
            r.signatures = [];
            while (i.pos < o) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  r.signatures.push(i.bytes());
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, u);
            if (
              ((n.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const i of t.signatures) n.signatures.push(c(i));
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
            const n = Object.assign({}, u);
            if (
              ((n.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const i of t.signatures) n.signatures.push(i);
            return n;
          },
        };
        const a = { extraBitsStored: 0 };
        n.CompactBitArray = {
          encode(t, n = s.default.Writer.create()) {
            return (
              0 !== t.extraBitsStored && n.uint32(8).uint32(t.extraBitsStored),
              0 !== t.elems.length && n.uint32(18).bytes(t.elems),
              n
            );
          },
          decode(t, n) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, a);
            r.elems = new Uint8Array();
            while (i.pos < o) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  r.extraBitsStored = i.uint32();
                  break;
                case 2:
                  r.elems = i.bytes();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, a);
            return (
              (n.elems = new Uint8Array()),
              void 0 !== t.extraBitsStored && null !== t.extraBitsStored
                ? (n.extraBitsStored = Number(t.extraBitsStored))
                : (n.extraBitsStored = 0),
              void 0 !== t.elems && null !== t.elems && (n.elems = c(t.elems)),
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
            const n = Object.assign({}, a);
            return (
              void 0 !== t.extraBitsStored && null !== t.extraBitsStored
                ? (n.extraBitsStored = t.extraBitsStored)
                : (n.extraBitsStored = 0),
              void 0 !== t.elems && null !== t.elems
                ? (n.elems = t.elems)
                : (n.elems = new Uint8Array()),
              n
            );
          },
        };
        var l = (() => {
          if ("undefined" !== typeof l) return l;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const f =
          l.atob || ((t) => l.Buffer.from(t, "base64").toString("binary"));
        function c(t) {
          const n = f(t),
            i = new Uint8Array(n.length);
          for (let o = 0; o < n.length; ++o) i[o] = n.charCodeAt(o);
          return i;
        }
        const d =
          l.btoa || ((t) => l.Buffer.from(t, "binary").toString("base64"));
        function h(t) {
          const n = [];
          for (let i = 0; i < t.byteLength; ++i)
            n.push(String.fromCharCode(t[i]));
          return d(n.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, i(13));
    },
    3915: function (t, n, i) {
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
        const r = o(i(2754)),
          s = o(i(2755)),
          u = i(3587),
          a = i(4474),
          l = i(3588),
          f = i(3916);
        n.protobufPackage = "cosmos.tx.v1beta1";
        const c = {};
        n.Tx = {
          encode(t, i) {
            (void 0 === i && (i = s.default.Writer.create()),
              void 0 !== t.body &&
                n.TxBody.encode(t.body, i.uint32(10).fork()).ldelim(),
              void 0 !== t.authInfo &&
                n.AuthInfo.encode(t.authInfo, i.uint32(18).fork()).ldelim());
            for (const n of t.signatures) i.uint32(26).bytes(n);
            return i;
          },
          decode(t, i) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === i ? o.len : o.pos + i;
            const u = Object.assign({}, c);
            u.signatures = [];
            while (o.pos < r) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  u.body = n.TxBody.decode(o, o.uint32());
                  break;
                case 2:
                  u.authInfo = n.AuthInfo.decode(o, o.uint32());
                  break;
                case 3:
                  u.signatures.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return u;
          },
          fromJSON(t) {
            const i = Object.assign({}, c);
            if (
              ((i.signatures = []),
              void 0 !== t.body && null !== t.body
                ? (i.body = n.TxBody.fromJSON(t.body))
                : (i.body = void 0),
              void 0 !== t.authInfo && null !== t.authInfo
                ? (i.authInfo = n.AuthInfo.fromJSON(t.authInfo))
                : (i.authInfo = void 0),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const n of t.signatures) i.signatures.push(I(n));
            return i;
          },
          toJSON(t) {
            const i = {};
            return (
              void 0 !== t.body &&
                (i.body = t.body ? n.TxBody.toJSON(t.body) : void 0),
              void 0 !== t.authInfo &&
                (i.authInfo = t.authInfo
                  ? n.AuthInfo.toJSON(t.authInfo)
                  : void 0),
              t.signatures
                ? (i.signatures = t.signatures.map((t) =>
                    N(void 0 !== t ? t : new Uint8Array()),
                  ))
                : (i.signatures = []),
              i
            );
          },
          fromPartial(t) {
            const i = Object.assign({}, c);
            if (
              ((i.signatures = []),
              void 0 !== t.body && null !== t.body
                ? (i.body = n.TxBody.fromPartial(t.body))
                : (i.body = void 0),
              void 0 !== t.authInfo && null !== t.authInfo
                ? (i.authInfo = n.AuthInfo.fromPartial(t.authInfo))
                : (i.authInfo = void 0),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const n of t.signatures) i.signatures.push(n);
            return i;
          },
        };
        const d = {};
        n.TxRaw = {
          encode(t, n) {
            (void 0 === n && (n = s.default.Writer.create()),
              0 !== t.bodyBytes.length && n.uint32(10).bytes(t.bodyBytes),
              0 !== t.authInfoBytes.length &&
                n.uint32(18).bytes(t.authInfoBytes));
            for (const i of t.signatures) n.uint32(26).bytes(i);
            return n;
          },
          decode(t, n) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, d);
            ((r.signatures = []),
              (r.bodyBytes = new Uint8Array()),
              (r.authInfoBytes = new Uint8Array()));
            while (i.pos < o) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  r.bodyBytes = i.bytes();
                  break;
                case 2:
                  r.authInfoBytes = i.bytes();
                  break;
                case 3:
                  r.signatures.push(i.bytes());
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, d);
            if (
              ((n.signatures = []),
              (n.bodyBytes = new Uint8Array()),
              (n.authInfoBytes = new Uint8Array()),
              void 0 !== t.bodyBytes &&
                null !== t.bodyBytes &&
                (n.bodyBytes = I(t.bodyBytes)),
              void 0 !== t.authInfoBytes &&
                null !== t.authInfoBytes &&
                (n.authInfoBytes = I(t.authInfoBytes)),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const i of t.signatures) n.signatures.push(I(i));
            return n;
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.bodyBytes &&
                (n.bodyBytes = N(
                  void 0 !== t.bodyBytes ? t.bodyBytes : new Uint8Array(),
                )),
              void 0 !== t.authInfoBytes &&
                (n.authInfoBytes = N(
                  void 0 !== t.authInfoBytes
                    ? t.authInfoBytes
                    : new Uint8Array(),
                )),
              t.signatures
                ? (n.signatures = t.signatures.map((t) =>
                    N(void 0 !== t ? t : new Uint8Array()),
                  ))
                : (n.signatures = []),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, d);
            if (
              ((n.signatures = []),
              void 0 !== t.bodyBytes && null !== t.bodyBytes
                ? (n.bodyBytes = t.bodyBytes)
                : (n.bodyBytes = new Uint8Array()),
              void 0 !== t.authInfoBytes && null !== t.authInfoBytes
                ? (n.authInfoBytes = t.authInfoBytes)
                : (n.authInfoBytes = new Uint8Array()),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const i of t.signatures) n.signatures.push(i);
            return n;
          },
        };
        const h = { chainId: "", accountNumber: r.default.UZERO };
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
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, h);
            ((r.bodyBytes = new Uint8Array()),
              (r.authInfoBytes = new Uint8Array()));
            while (i.pos < o) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  r.bodyBytes = i.bytes();
                  break;
                case 2:
                  r.authInfoBytes = i.bytes();
                  break;
                case 3:
                  r.chainId = i.string();
                  break;
                case 4:
                  r.accountNumber = i.uint64();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, h);
            return (
              (n.bodyBytes = new Uint8Array()),
              (n.authInfoBytes = new Uint8Array()),
              void 0 !== t.bodyBytes &&
                null !== t.bodyBytes &&
                (n.bodyBytes = I(t.bodyBytes)),
              void 0 !== t.authInfoBytes &&
                null !== t.authInfoBytes &&
                (n.authInfoBytes = I(t.authInfoBytes)),
              void 0 !== t.chainId && null !== t.chainId
                ? (n.chainId = String(t.chainId))
                : (n.chainId = ""),
              void 0 !== t.accountNumber && null !== t.accountNumber
                ? (n.accountNumber = r.default.fromString(t.accountNumber))
                : (n.accountNumber = r.default.UZERO),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.bodyBytes &&
                (n.bodyBytes = N(
                  void 0 !== t.bodyBytes ? t.bodyBytes : new Uint8Array(),
                )),
              void 0 !== t.authInfoBytes &&
                (n.authInfoBytes = N(
                  void 0 !== t.authInfoBytes
                    ? t.authInfoBytes
                    : new Uint8Array(),
                )),
              void 0 !== t.chainId && (n.chainId = t.chainId),
              void 0 !== t.accountNumber &&
                (n.accountNumber = (
                  t.accountNumber || r.default.UZERO
                ).toString()),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, h);
            return (
              void 0 !== t.bodyBytes && null !== t.bodyBytes
                ? (n.bodyBytes = t.bodyBytes)
                : (n.bodyBytes = new Uint8Array()),
              void 0 !== t.authInfoBytes && null !== t.authInfoBytes
                ? (n.authInfoBytes = t.authInfoBytes)
                : (n.authInfoBytes = new Uint8Array()),
              void 0 !== t.chainId && null !== t.chainId
                ? (n.chainId = t.chainId)
                : (n.chainId = ""),
              void 0 !== t.accountNumber && null !== t.accountNumber
                ? (n.accountNumber = t.accountNumber)
                : (n.accountNumber = r.default.UZERO),
              n
            );
          },
        };
        const g = { memo: "", timeoutHeight: r.default.UZERO };
        n.TxBody = {
          encode(t, n) {
            void 0 === n && (n = s.default.Writer.create());
            for (const i of t.messages)
              u.Any.encode(i, n.uint32(10).fork()).ldelim();
            ("" !== t.memo && n.uint32(18).string(t.memo),
              t.timeoutHeight.isZero() || n.uint32(24).uint64(t.timeoutHeight));
            for (const i of t.extensionOptions)
              u.Any.encode(i, n.uint32(8186).fork()).ldelim();
            for (const i of t.nonCriticalExtensionOptions)
              u.Any.encode(i, n.uint32(16378).fork()).ldelim();
            return n;
          },
          decode(t, n) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, g);
            ((r.messages = []),
              (r.extensionOptions = []),
              (r.nonCriticalExtensionOptions = []));
            while (i.pos < o) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  r.messages.push(u.Any.decode(i, i.uint32()));
                  break;
                case 2:
                  r.memo = i.string();
                  break;
                case 3:
                  r.timeoutHeight = i.uint64();
                  break;
                case 1023:
                  r.extensionOptions.push(u.Any.decode(i, i.uint32()));
                  break;
                case 2047:
                  r.nonCriticalExtensionOptions.push(
                    u.Any.decode(i, i.uint32()),
                  );
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, g);
            if (
              ((n.messages = []),
              (n.extensionOptions = []),
              (n.nonCriticalExtensionOptions = []),
              void 0 !== t.messages && null !== t.messages)
            )
              for (const i of t.messages) n.messages.push(u.Any.fromJSON(i));
            if (
              (void 0 !== t.memo && null !== t.memo
                ? (n.memo = String(t.memo))
                : (n.memo = ""),
              void 0 !== t.timeoutHeight && null !== t.timeoutHeight
                ? (n.timeoutHeight = r.default.fromString(t.timeoutHeight))
                : (n.timeoutHeight = r.default.UZERO),
              void 0 !== t.extensionOptions && null !== t.extensionOptions)
            )
              for (const i of t.extensionOptions)
                n.extensionOptions.push(u.Any.fromJSON(i));
            if (
              void 0 !== t.nonCriticalExtensionOptions &&
              null !== t.nonCriticalExtensionOptions
            )
              for (const i of t.nonCriticalExtensionOptions)
                n.nonCriticalExtensionOptions.push(u.Any.fromJSON(i));
            return n;
          },
          toJSON(t) {
            const n = {};
            return (
              t.messages
                ? (n.messages = t.messages.map((t) =>
                    t ? u.Any.toJSON(t) : void 0,
                  ))
                : (n.messages = []),
              void 0 !== t.memo && (n.memo = t.memo),
              void 0 !== t.timeoutHeight &&
                (n.timeoutHeight = (
                  t.timeoutHeight || r.default.UZERO
                ).toString()),
              t.extensionOptions
                ? (n.extensionOptions = t.extensionOptions.map((t) =>
                    t ? u.Any.toJSON(t) : void 0,
                  ))
                : (n.extensionOptions = []),
              t.nonCriticalExtensionOptions
                ? (n.nonCriticalExtensionOptions =
                    t.nonCriticalExtensionOptions.map((t) =>
                      t ? u.Any.toJSON(t) : void 0,
                    ))
                : (n.nonCriticalExtensionOptions = []),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, g);
            if (
              ((n.messages = []),
              (n.extensionOptions = []),
              (n.nonCriticalExtensionOptions = []),
              void 0 !== t.messages && null !== t.messages)
            )
              for (const i of t.messages) n.messages.push(u.Any.fromPartial(i));
            if (
              (void 0 !== t.memo && null !== t.memo
                ? (n.memo = t.memo)
                : (n.memo = ""),
              void 0 !== t.timeoutHeight && null !== t.timeoutHeight
                ? (n.timeoutHeight = t.timeoutHeight)
                : (n.timeoutHeight = r.default.UZERO),
              void 0 !== t.extensionOptions && null !== t.extensionOptions)
            )
              for (const i of t.extensionOptions)
                n.extensionOptions.push(u.Any.fromPartial(i));
            if (
              void 0 !== t.nonCriticalExtensionOptions &&
              null !== t.nonCriticalExtensionOptions
            )
              for (const i of t.nonCriticalExtensionOptions)
                n.nonCriticalExtensionOptions.push(u.Any.fromPartial(i));
            return n;
          },
        };
        const p = {};
        n.AuthInfo = {
          encode(t, i) {
            void 0 === i && (i = s.default.Writer.create());
            for (const o of t.signerInfos)
              n.SignerInfo.encode(o, i.uint32(10).fork()).ldelim();
            return (
              void 0 !== t.fee &&
                n.Fee.encode(t.fee, i.uint32(18).fork()).ldelim(),
              i
            );
          },
          decode(t, i) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === i ? o.len : o.pos + i;
            const u = Object.assign({}, p);
            u.signerInfos = [];
            while (o.pos < r) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  u.signerInfos.push(n.SignerInfo.decode(o, o.uint32()));
                  break;
                case 2:
                  u.fee = n.Fee.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return u;
          },
          fromJSON(t) {
            const i = Object.assign({}, p);
            if (
              ((i.signerInfos = []),
              void 0 !== t.signerInfos && null !== t.signerInfos)
            )
              for (const o of t.signerInfos)
                i.signerInfos.push(n.SignerInfo.fromJSON(o));
            return (
              void 0 !== t.fee && null !== t.fee
                ? (i.fee = n.Fee.fromJSON(t.fee))
                : (i.fee = void 0),
              i
            );
          },
          toJSON(t) {
            const i = {};
            return (
              t.signerInfos
                ? (i.signerInfos = t.signerInfos.map((t) =>
                    t ? n.SignerInfo.toJSON(t) : void 0,
                  ))
                : (i.signerInfos = []),
              void 0 !== t.fee &&
                (i.fee = t.fee ? n.Fee.toJSON(t.fee) : void 0),
              i
            );
          },
          fromPartial(t) {
            const i = Object.assign({}, p);
            if (
              ((i.signerInfos = []),
              void 0 !== t.signerInfos && null !== t.signerInfos)
            )
              for (const o of t.signerInfos)
                i.signerInfos.push(n.SignerInfo.fromPartial(o));
            return (
              void 0 !== t.fee && null !== t.fee
                ? (i.fee = n.Fee.fromPartial(t.fee))
                : (i.fee = void 0),
              i
            );
          },
        };
        const m = { sequence: r.default.UZERO };
        n.SignerInfo = {
          encode(t, i) {
            return (
              void 0 === i && (i = s.default.Writer.create()),
              void 0 !== t.publicKey &&
                u.Any.encode(t.publicKey, i.uint32(10).fork()).ldelim(),
              void 0 !== t.modeInfo &&
                n.ModeInfo.encode(t.modeInfo, i.uint32(18).fork()).ldelim(),
              t.sequence.isZero() || i.uint32(24).uint64(t.sequence),
              i
            );
          },
          decode(t, i) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === i ? o.len : o.pos + i;
            const a = Object.assign({}, m);
            while (o.pos < r) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  a.publicKey = u.Any.decode(o, o.uint32());
                  break;
                case 2:
                  a.modeInfo = n.ModeInfo.decode(o, o.uint32());
                  break;
                case 3:
                  a.sequence = o.uint64();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const i = Object.assign({}, m);
            return (
              void 0 !== t.publicKey && null !== t.publicKey
                ? (i.publicKey = u.Any.fromJSON(t.publicKey))
                : (i.publicKey = void 0),
              void 0 !== t.modeInfo && null !== t.modeInfo
                ? (i.modeInfo = n.ModeInfo.fromJSON(t.modeInfo))
                : (i.modeInfo = void 0),
              void 0 !== t.sequence && null !== t.sequence
                ? (i.sequence = r.default.fromString(t.sequence))
                : (i.sequence = r.default.UZERO),
              i
            );
          },
          toJSON(t) {
            const i = {};
            return (
              void 0 !== t.publicKey &&
                (i.publicKey = t.publicKey
                  ? u.Any.toJSON(t.publicKey)
                  : void 0),
              void 0 !== t.modeInfo &&
                (i.modeInfo = t.modeInfo
                  ? n.ModeInfo.toJSON(t.modeInfo)
                  : void 0),
              void 0 !== t.sequence &&
                (i.sequence = (t.sequence || r.default.UZERO).toString()),
              i
            );
          },
          fromPartial(t) {
            const i = Object.assign({}, m);
            return (
              void 0 !== t.publicKey && null !== t.publicKey
                ? (i.publicKey = u.Any.fromPartial(t.publicKey))
                : (i.publicKey = void 0),
              void 0 !== t.modeInfo && null !== t.modeInfo
                ? (i.modeInfo = n.ModeInfo.fromPartial(t.modeInfo))
                : (i.modeInfo = void 0),
              void 0 !== t.sequence && null !== t.sequence
                ? (i.sequence = t.sequence)
                : (i.sequence = r.default.UZERO),
              i
            );
          },
        };
        const y = {};
        n.ModeInfo = {
          encode(t, i) {
            return (
              void 0 === i && (i = s.default.Writer.create()),
              void 0 !== t.single &&
                n.ModeInfo_Single.encode(
                  t.single,
                  i.uint32(10).fork(),
                ).ldelim(),
              void 0 !== t.multi &&
                n.ModeInfo_Multi.encode(t.multi, i.uint32(18).fork()).ldelim(),
              i
            );
          },
          decode(t, i) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === i ? o.len : o.pos + i;
            const u = Object.assign({}, y);
            while (o.pos < r) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  u.single = n.ModeInfo_Single.decode(o, o.uint32());
                  break;
                case 2:
                  u.multi = n.ModeInfo_Multi.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return u;
          },
          fromJSON(t) {
            const i = Object.assign({}, y);
            return (
              void 0 !== t.single && null !== t.single
                ? (i.single = n.ModeInfo_Single.fromJSON(t.single))
                : (i.single = void 0),
              void 0 !== t.multi && null !== t.multi
                ? (i.multi = n.ModeInfo_Multi.fromJSON(t.multi))
                : (i.multi = void 0),
              i
            );
          },
          toJSON(t) {
            const i = {};
            return (
              void 0 !== t.single &&
                (i.single = t.single
                  ? n.ModeInfo_Single.toJSON(t.single)
                  : void 0),
              void 0 !== t.multi &&
                (i.multi = t.multi ? n.ModeInfo_Multi.toJSON(t.multi) : void 0),
              i
            );
          },
          fromPartial(t) {
            const i = Object.assign({}, y);
            return (
              void 0 !== t.single && null !== t.single
                ? (i.single = n.ModeInfo_Single.fromPartial(t.single))
                : (i.single = void 0),
              void 0 !== t.multi && null !== t.multi
                ? (i.multi = n.ModeInfo_Multi.fromPartial(t.multi))
                : (i.multi = void 0),
              i
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
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, b);
            while (i.pos < o) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  r.mode = i.int32();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, b);
            return (
              void 0 !== t.mode && null !== t.mode
                ? (n.mode = a.signModeFromJSON(t.mode))
                : (n.mode = 0),
              n
            );
          },
          toJSON(t) {
            const n = {};
            return (
              void 0 !== t.mode && (n.mode = a.signModeToJSON(t.mode)),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, b);
            return (
              void 0 !== t.mode && null !== t.mode
                ? (n.mode = t.mode)
                : (n.mode = 0),
              n
            );
          },
        };
        const v = {};
        n.ModeInfo_Multi = {
          encode(t, i) {
            (void 0 === i && (i = s.default.Writer.create()),
              void 0 !== t.bitarray &&
                l.CompactBitArray.encode(
                  t.bitarray,
                  i.uint32(10).fork(),
                ).ldelim());
            for (const o of t.modeInfos)
              n.ModeInfo.encode(o, i.uint32(18).fork()).ldelim();
            return i;
          },
          decode(t, i) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === i ? o.len : o.pos + i;
            const u = Object.assign({}, v);
            u.modeInfos = [];
            while (o.pos < r) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  u.bitarray = l.CompactBitArray.decode(o, o.uint32());
                  break;
                case 2:
                  u.modeInfos.push(n.ModeInfo.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return u;
          },
          fromJSON(t) {
            const i = Object.assign({}, v);
            if (
              ((i.modeInfos = []),
              void 0 !== t.bitarray && null !== t.bitarray
                ? (i.bitarray = l.CompactBitArray.fromJSON(t.bitarray))
                : (i.bitarray = void 0),
              void 0 !== t.modeInfos && null !== t.modeInfos)
            )
              for (const o of t.modeInfos)
                i.modeInfos.push(n.ModeInfo.fromJSON(o));
            return i;
          },
          toJSON(t) {
            const i = {};
            return (
              void 0 !== t.bitarray &&
                (i.bitarray = t.bitarray
                  ? l.CompactBitArray.toJSON(t.bitarray)
                  : void 0),
              t.modeInfos
                ? (i.modeInfos = t.modeInfos.map((t) =>
                    t ? n.ModeInfo.toJSON(t) : void 0,
                  ))
                : (i.modeInfos = []),
              i
            );
          },
          fromPartial(t) {
            const i = Object.assign({}, v);
            if (
              ((i.modeInfos = []),
              void 0 !== t.bitarray && null !== t.bitarray
                ? (i.bitarray = l.CompactBitArray.fromPartial(t.bitarray))
                : (i.bitarray = void 0),
              void 0 !== t.modeInfos && null !== t.modeInfos)
            )
              for (const o of t.modeInfos)
                i.modeInfos.push(n.ModeInfo.fromPartial(o));
            return i;
          },
        };
        const O = { gasLimit: r.default.UZERO, payer: "", granter: "" };
        n.Fee = {
          encode(t, n) {
            void 0 === n && (n = s.default.Writer.create());
            for (const i of t.amount)
              f.Coin.encode(i, n.uint32(10).fork()).ldelim();
            return (
              t.gasLimit.isZero() || n.uint32(16).uint64(t.gasLimit),
              "" !== t.payer && n.uint32(26).string(t.payer),
              "" !== t.granter && n.uint32(34).string(t.granter),
              n
            );
          },
          decode(t, n) {
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, O);
            r.amount = [];
            while (i.pos < o) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  r.amount.push(f.Coin.decode(i, i.uint32()));
                  break;
                case 2:
                  r.gasLimit = i.uint64();
                  break;
                case 3:
                  r.payer = i.string();
                  break;
                case 4:
                  r.granter = i.string();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, O);
            if (((n.amount = []), void 0 !== t.amount && null !== t.amount))
              for (const i of t.amount) n.amount.push(f.Coin.fromJSON(i));
            return (
              void 0 !== t.gasLimit && null !== t.gasLimit
                ? (n.gasLimit = r.default.fromString(t.gasLimit))
                : (n.gasLimit = r.default.UZERO),
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
                    t ? f.Coin.toJSON(t) : void 0,
                  ))
                : (n.amount = []),
              void 0 !== t.gasLimit &&
                (n.gasLimit = (t.gasLimit || r.default.UZERO).toString()),
              void 0 !== t.payer && (n.payer = t.payer),
              void 0 !== t.granter && (n.granter = t.granter),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, O);
            if (((n.amount = []), void 0 !== t.amount && null !== t.amount))
              for (const i of t.amount) n.amount.push(f.Coin.fromPartial(i));
            return (
              void 0 !== t.gasLimit && null !== t.gasLimit
                ? (n.gasLimit = t.gasLimit)
                : (n.gasLimit = r.default.UZERO),
              void 0 !== t.payer && null !== t.payer
                ? (n.payer = t.payer)
                : (n.payer = ""),
              void 0 !== t.granter && null !== t.granter
                ? (n.granter = t.granter)
                : (n.granter = ""),
              n
            );
          },
        };
        var w = (() => {
          if ("undefined" !== typeof w) return w;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const S =
          w.atob || ((t) => w.Buffer.from(t, "base64").toString("binary"));
        function I(t) {
          const n = S(t),
            i = new Uint8Array(n.length);
          for (let o = 0; o < n.length; ++o) i[o] = n.charCodeAt(o);
          return i;
        }
        const _ =
          w.btoa || ((t) => w.Buffer.from(t, "binary").toString("base64"));
        function N(t) {
          const n = [];
          for (let i = 0; i < t.byteLength; ++i)
            n.push(String.fromCharCode(t[i]));
          return _(n.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, i(13));
    },
    3916: function (t, n, i) {
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
      const r = o(i(2754)),
        s = o(i(2755));
      n.protobufPackage = "cosmos.base.v1beta1";
      const u = { denom: "", amount: "" };
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
          const i = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, u);
          while (i.pos < o) {
            const t = i.uint32();
            switch (t >>> 3) {
              case 1:
                r.denom = i.string();
                break;
              case 2:
                r.amount = i.string();
                break;
              default:
                i.skipType(7 & t);
                break;
            }
          }
          return r;
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
          const n = Object.assign({}, u);
          return (
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = t.denom)
              : (n.denom = ""),
            void 0 !== t.amount && null !== t.amount
              ? (n.amount = t.amount)
              : (n.amount = ""),
            n
          );
        },
      };
      const a = { denom: "", amount: "" };
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
          const i = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, a);
          while (i.pos < o) {
            const t = i.uint32();
            switch (t >>> 3) {
              case 1:
                r.denom = i.string();
                break;
              case 2:
                r.amount = i.string();
                break;
              default:
                i.skipType(7 & t);
                break;
            }
          }
          return r;
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
          const n = Object.assign({}, a);
          return (
            void 0 !== t.denom && null !== t.denom
              ? (n.denom = t.denom)
              : (n.denom = ""),
            void 0 !== t.amount && null !== t.amount
              ? (n.amount = t.amount)
              : (n.amount = ""),
            n
          );
        },
      };
      const l = { int: "" };
      n.IntProto = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.int && n.uint32(10).string(t.int),
            n
          );
        },
        decode(t, n) {
          const i = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, l);
          while (i.pos < o) {
            const t = i.uint32();
            switch (t >>> 3) {
              case 1:
                r.int = i.string();
                break;
              default:
                i.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, l);
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
          const n = Object.assign({}, l);
          return (
            void 0 !== t.int && null !== t.int ? (n.int = t.int) : (n.int = ""),
            n
          );
        },
      };
      const f = { dec: "" };
      ((n.DecProto = {
        encode(t, n) {
          return (
            void 0 === n && (n = s.default.Writer.create()),
            "" !== t.dec && n.uint32(10).string(t.dec),
            n
          );
        },
        decode(t, n) {
          const i = t instanceof s.default.Reader ? t : new s.default.Reader(t);
          let o = void 0 === n ? i.len : i.pos + n;
          const r = Object.assign({}, f);
          while (i.pos < o) {
            const t = i.uint32();
            switch (t >>> 3) {
              case 1:
                r.dec = i.string();
                break;
              default:
                i.skipType(7 & t);
                break;
            }
          }
          return r;
        },
        fromJSON(t) {
          const n = Object.assign({}, f);
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
          const n = Object.assign({}, f);
          return (
            void 0 !== t.dec && null !== t.dec ? (n.dec = t.dec) : (n.dec = ""),
            n
          );
        },
      }),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    4474: function (t, n, i) {
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
        const r = o(i(2754)),
          s = o(i(2755)),
          u = i(3587),
          a = i(3588);
        var l;
        function f(t) {
          switch (t) {
            case 0:
            case "SIGN_MODE_UNSPECIFIED":
              return l.SIGN_MODE_UNSPECIFIED;
            case 1:
            case "SIGN_MODE_DIRECT":
              return l.SIGN_MODE_DIRECT;
            case 2:
            case "SIGN_MODE_TEXTUAL":
              return l.SIGN_MODE_TEXTUAL;
            case 127:
            case "SIGN_MODE_LEGACY_AMINO_JSON":
              return l.SIGN_MODE_LEGACY_AMINO_JSON;
            case -1:
            case "UNRECOGNIZED":
            default:
              return l.UNRECOGNIZED;
          }
        }
        function c(t) {
          switch (t) {
            case l.SIGN_MODE_UNSPECIFIED:
              return "SIGN_MODE_UNSPECIFIED";
            case l.SIGN_MODE_DIRECT:
              return "SIGN_MODE_DIRECT";
            case l.SIGN_MODE_TEXTUAL:
              return "SIGN_MODE_TEXTUAL";
            case l.SIGN_MODE_LEGACY_AMINO_JSON:
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
          })((l = n.SignMode || (n.SignMode = {}))),
          (n.signModeFromJSON = f),
          (n.signModeToJSON = c));
        const d = {};
        n.SignatureDescriptors = {
          encode(t, i) {
            void 0 === i && (i = s.default.Writer.create());
            for (const o of t.signatures)
              n.SignatureDescriptor.encode(o, i.uint32(10).fork()).ldelim();
            return i;
          },
          decode(t, i) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === i ? o.len : o.pos + i;
            const u = Object.assign({}, d);
            u.signatures = [];
            while (o.pos < r) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  u.signatures.push(
                    n.SignatureDescriptor.decode(o, o.uint32()),
                  );
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return u;
          },
          fromJSON(t) {
            const i = Object.assign({}, d);
            if (
              ((i.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const o of t.signatures)
                i.signatures.push(n.SignatureDescriptor.fromJSON(o));
            return i;
          },
          toJSON(t) {
            const i = {};
            return (
              t.signatures
                ? (i.signatures = t.signatures.map((t) =>
                    t ? n.SignatureDescriptor.toJSON(t) : void 0,
                  ))
                : (i.signatures = []),
              i
            );
          },
          fromPartial(t) {
            const i = Object.assign({}, d);
            if (
              ((i.signatures = []),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const o of t.signatures)
                i.signatures.push(n.SignatureDescriptor.fromPartial(o));
            return i;
          },
        };
        const h = { sequence: r.default.UZERO };
        n.SignatureDescriptor = {
          encode(t, i) {
            return (
              void 0 === i && (i = s.default.Writer.create()),
              void 0 !== t.publicKey &&
                u.Any.encode(t.publicKey, i.uint32(10).fork()).ldelim(),
              void 0 !== t.data &&
                n.SignatureDescriptor_Data.encode(
                  t.data,
                  i.uint32(18).fork(),
                ).ldelim(),
              t.sequence.isZero() || i.uint32(24).uint64(t.sequence),
              i
            );
          },
          decode(t, i) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === i ? o.len : o.pos + i;
            const a = Object.assign({}, h);
            while (o.pos < r) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  a.publicKey = u.Any.decode(o, o.uint32());
                  break;
                case 2:
                  a.data = n.SignatureDescriptor_Data.decode(o, o.uint32());
                  break;
                case 3:
                  a.sequence = o.uint64();
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return a;
          },
          fromJSON(t) {
            const i = Object.assign({}, h);
            return (
              void 0 !== t.publicKey && null !== t.publicKey
                ? (i.publicKey = u.Any.fromJSON(t.publicKey))
                : (i.publicKey = void 0),
              void 0 !== t.data && null !== t.data
                ? (i.data = n.SignatureDescriptor_Data.fromJSON(t.data))
                : (i.data = void 0),
              void 0 !== t.sequence && null !== t.sequence
                ? (i.sequence = r.default.fromString(t.sequence))
                : (i.sequence = r.default.UZERO),
              i
            );
          },
          toJSON(t) {
            const i = {};
            return (
              void 0 !== t.publicKey &&
                (i.publicKey = t.publicKey
                  ? u.Any.toJSON(t.publicKey)
                  : void 0),
              void 0 !== t.data &&
                (i.data = t.data
                  ? n.SignatureDescriptor_Data.toJSON(t.data)
                  : void 0),
              void 0 !== t.sequence &&
                (i.sequence = (t.sequence || r.default.UZERO).toString()),
              i
            );
          },
          fromPartial(t) {
            const i = Object.assign({}, h);
            return (
              void 0 !== t.publicKey && null !== t.publicKey
                ? (i.publicKey = u.Any.fromPartial(t.publicKey))
                : (i.publicKey = void 0),
              void 0 !== t.data && null !== t.data
                ? (i.data = n.SignatureDescriptor_Data.fromPartial(t.data))
                : (i.data = void 0),
              void 0 !== t.sequence && null !== t.sequence
                ? (i.sequence = t.sequence)
                : (i.sequence = r.default.UZERO),
              i
            );
          },
        };
        const g = {};
        n.SignatureDescriptor_Data = {
          encode(t, i) {
            return (
              void 0 === i && (i = s.default.Writer.create()),
              void 0 !== t.single &&
                n.SignatureDescriptor_Data_Single.encode(
                  t.single,
                  i.uint32(10).fork(),
                ).ldelim(),
              void 0 !== t.multi &&
                n.SignatureDescriptor_Data_Multi.encode(
                  t.multi,
                  i.uint32(18).fork(),
                ).ldelim(),
              i
            );
          },
          decode(t, i) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === i ? o.len : o.pos + i;
            const u = Object.assign({}, g);
            while (o.pos < r) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  u.single = n.SignatureDescriptor_Data_Single.decode(
                    o,
                    o.uint32(),
                  );
                  break;
                case 2:
                  u.multi = n.SignatureDescriptor_Data_Multi.decode(
                    o,
                    o.uint32(),
                  );
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return u;
          },
          fromJSON(t) {
            const i = Object.assign({}, g);
            return (
              void 0 !== t.single && null !== t.single
                ? (i.single = n.SignatureDescriptor_Data_Single.fromJSON(
                    t.single,
                  ))
                : (i.single = void 0),
              void 0 !== t.multi && null !== t.multi
                ? (i.multi = n.SignatureDescriptor_Data_Multi.fromJSON(t.multi))
                : (i.multi = void 0),
              i
            );
          },
          toJSON(t) {
            const i = {};
            return (
              void 0 !== t.single &&
                (i.single = t.single
                  ? n.SignatureDescriptor_Data_Single.toJSON(t.single)
                  : void 0),
              void 0 !== t.multi &&
                (i.multi = t.multi
                  ? n.SignatureDescriptor_Data_Multi.toJSON(t.multi)
                  : void 0),
              i
            );
          },
          fromPartial(t) {
            const i = Object.assign({}, g);
            return (
              void 0 !== t.single && null !== t.single
                ? (i.single = n.SignatureDescriptor_Data_Single.fromPartial(
                    t.single,
                  ))
                : (i.single = void 0),
              void 0 !== t.multi && null !== t.multi
                ? (i.multi = n.SignatureDescriptor_Data_Multi.fromPartial(
                    t.multi,
                  ))
                : (i.multi = void 0),
              i
            );
          },
        };
        const p = { mode: 0 };
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
            const i =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let o = void 0 === n ? i.len : i.pos + n;
            const r = Object.assign({}, p);
            r.signature = new Uint8Array();
            while (i.pos < o) {
              const t = i.uint32();
              switch (t >>> 3) {
                case 1:
                  r.mode = i.int32();
                  break;
                case 2:
                  r.signature = i.bytes();
                  break;
                default:
                  i.skipType(7 & t);
                  break;
              }
            }
            return r;
          },
          fromJSON(t) {
            const n = Object.assign({}, p);
            return (
              (n.signature = new Uint8Array()),
              void 0 !== t.mode && null !== t.mode
                ? (n.mode = f(t.mode))
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
              void 0 !== t.mode && (n.mode = c(t.mode)),
              void 0 !== t.signature &&
                (n.signature = w(
                  void 0 !== t.signature ? t.signature : new Uint8Array(),
                )),
              n
            );
          },
          fromPartial(t) {
            const n = Object.assign({}, p);
            return (
              void 0 !== t.mode && null !== t.mode
                ? (n.mode = t.mode)
                : (n.mode = 0),
              void 0 !== t.signature && null !== t.signature
                ? (n.signature = t.signature)
                : (n.signature = new Uint8Array()),
              n
            );
          },
        };
        const m = {};
        n.SignatureDescriptor_Data_Multi = {
          encode(t, i) {
            (void 0 === i && (i = s.default.Writer.create()),
              void 0 !== t.bitarray &&
                a.CompactBitArray.encode(
                  t.bitarray,
                  i.uint32(10).fork(),
                ).ldelim());
            for (const o of t.signatures)
              n.SignatureDescriptor_Data.encode(
                o,
                i.uint32(18).fork(),
              ).ldelim();
            return i;
          },
          decode(t, i) {
            const o =
              t instanceof s.default.Reader ? t : new s.default.Reader(t);
            let r = void 0 === i ? o.len : o.pos + i;
            const u = Object.assign({}, m);
            u.signatures = [];
            while (o.pos < r) {
              const t = o.uint32();
              switch (t >>> 3) {
                case 1:
                  u.bitarray = a.CompactBitArray.decode(o, o.uint32());
                  break;
                case 2:
                  u.signatures.push(
                    n.SignatureDescriptor_Data.decode(o, o.uint32()),
                  );
                  break;
                default:
                  o.skipType(7 & t);
                  break;
              }
            }
            return u;
          },
          fromJSON(t) {
            const i = Object.assign({}, m);
            if (
              ((i.signatures = []),
              void 0 !== t.bitarray && null !== t.bitarray
                ? (i.bitarray = a.CompactBitArray.fromJSON(t.bitarray))
                : (i.bitarray = void 0),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const o of t.signatures)
                i.signatures.push(n.SignatureDescriptor_Data.fromJSON(o));
            return i;
          },
          toJSON(t) {
            const i = {};
            return (
              void 0 !== t.bitarray &&
                (i.bitarray = t.bitarray
                  ? a.CompactBitArray.toJSON(t.bitarray)
                  : void 0),
              t.signatures
                ? (i.signatures = t.signatures.map((t) =>
                    t ? n.SignatureDescriptor_Data.toJSON(t) : void 0,
                  ))
                : (i.signatures = []),
              i
            );
          },
          fromPartial(t) {
            const i = Object.assign({}, m);
            if (
              ((i.signatures = []),
              void 0 !== t.bitarray && null !== t.bitarray
                ? (i.bitarray = a.CompactBitArray.fromPartial(t.bitarray))
                : (i.bitarray = void 0),
              void 0 !== t.signatures && null !== t.signatures)
            )
              for (const o of t.signatures)
                i.signatures.push(n.SignatureDescriptor_Data.fromPartial(o));
            return i;
          },
        };
        var y = (() => {
          if ("undefined" !== typeof y) return y;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof t) return t;
          throw "Unable to locate global object";
        })();
        const b =
          y.atob || ((t) => y.Buffer.from(t, "base64").toString("binary"));
        function v(t) {
          const n = b(t),
            i = new Uint8Array(n.length);
          for (let o = 0; o < n.length; ++o) i[o] = n.charCodeAt(o);
          return i;
        }
        const O =
          y.btoa || ((t) => y.Buffer.from(t, "binary").toString("base64"));
        function w(t) {
          const n = [];
          for (let i = 0; i < t.byteLength; ++i)
            n.push(String.fromCharCode(t[i]));
          return O(n.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, i(13));
    },
  },
]);
