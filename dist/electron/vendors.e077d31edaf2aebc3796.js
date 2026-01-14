(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [222, 227, 228],
  {
    2754: function (t, n) {
      t.exports = r;
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
      } catch (U) {}
      function r(t, n, i) {
        ((this.low = 0 | t), (this.high = 0 | n), (this.unsigned = !!i));
      }
      function o(t) {
        return !0 === (t && t["__isLong__"]);
      }
      (r.prototype.__isLong__,
        Object.defineProperty(r.prototype, "__isLong__", { value: !0 }),
        (r.isLong = o));
      var s = {},
        e = {};
      function h(t, n) {
        var i, r, o;
        return n
          ? ((t >>>= 0),
            (o = 0 <= t && t < 256) && ((r = e[t]), r)
              ? r
              : ((i = c(t, (0 | t) < 0 ? -1 : 0, !0)), o && (e[t] = i), i))
          : ((t |= 0),
            (o = -128 <= t && t < 128) && ((r = s[t]), r)
              ? r
              : ((i = c(t, t < 0 ? -1 : 0, !1)), o && (s[t] = i), i));
      }
      function u(t, n) {
        if (isNaN(t)) return n ? B : m;
        if (n) {
          if (t < 0) return B;
          if (t >= y) return b;
        } else {
          if (t <= -I) return P;
          if (t + 1 >= I) return C;
        }
        return t < 0 ? u(-t, n).neg() : c((t % w) | 0, (t / w) | 0, n);
      }
      function c(t, n, i) {
        return new r(t, n, i);
      }
      ((r.fromInt = h), (r.fromNumber = u), (r.fromBits = c));
      var f = Math.pow;
      function a(t, n, i) {
        if (0 === t.length) throw Error("empty string");
        if (
          "NaN" === t ||
          "Infinity" === t ||
          "+Infinity" === t ||
          "-Infinity" === t
        )
          return m;
        if (
          ("number" === typeof n ? ((i = n), (n = !1)) : (n = !!n),
          (i = i || 10),
          i < 2 || 36 < i)
        )
          throw RangeError("radix");
        var r;
        if ((r = t.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === r) return a(t.substring(1), n, i).neg();
        for (var o = u(f(i, 8)), s = m, e = 0; e < t.length; e += 8) {
          var h = Math.min(8, t.length - e),
            c = parseInt(t.substring(e, e + h), i);
          if (h < 8) {
            var E = u(f(i, h));
            s = s.mul(E).add(u(c));
          } else ((s = s.mul(o)), (s = s.add(u(c))));
        }
        return ((s.unsigned = n), s);
      }
      function E(t, n) {
        return "number" === typeof t
          ? u(t, n)
          : "string" === typeof t
            ? a(t, n)
            : c(t.low, t.high, "boolean" === typeof n ? n : t.unsigned);
      }
      ((r.fromString = a), (r.fromValue = E));
      var p = 65536,
        d = 1 << 24,
        w = p * p,
        y = w * w,
        I = y / 2,
        l = h(d),
        m = h(0);
      r.ZERO = m;
      var B = h(0, !0);
      r.UZERO = B;
      var _ = h(1);
      r.ONE = _;
      var S = h(1, !0);
      r.UONE = S;
      var R = h(-1);
      r.NEG_ONE = R;
      var C = c(-1, 2147483647, !1);
      r.MAX_VALUE = C;
      var b = c(-1, -1, !0);
      r.MAX_UNSIGNED_VALUE = b;
      var P = c(0, -2147483648, !1);
      r.MIN_VALUE = P;
      var v = r.prototype;
      ((v.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
      }),
        (v.toNumber = function () {
          return this.unsigned
            ? (this.high >>> 0) * w + (this.low >>> 0)
            : this.high * w + (this.low >>> 0);
        }),
        (v.toString = function (t) {
          if (((t = t || 10), t < 2 || 36 < t)) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative()) {
            if (this.eq(P)) {
              var n = u(t),
                i = this.div(n),
                r = i.mul(n).sub(this);
              return i.toString(t) + r.toInt().toString(t);
            }
            return "-" + this.neg().toString(t);
          }
          var o = u(f(t, 6), this.unsigned),
            s = this,
            e = "";
          while (1) {
            var h = s.div(o),
              c = s.sub(h.mul(o)).toInt() >>> 0,
              a = c.toString(t);
            if (((s = h), s.isZero())) return a + e;
            while (a.length < 6) a = "0" + a;
            e = "" + a + e;
          }
        }),
        (v.getHighBits = function () {
          return this.high;
        }),
        (v.getHighBitsUnsigned = function () {
          return this.high >>> 0;
        }),
        (v.getLowBits = function () {
          return this.low;
        }),
        (v.getLowBitsUnsigned = function () {
          return this.low >>> 0;
        }),
        (v.getNumBitsAbs = function () {
          if (this.isNegative())
            return this.eq(P) ? 64 : this.neg().getNumBitsAbs();
          for (
            var t = 0 != this.high ? this.high : this.low, n = 31;
            n > 0;
            n--
          )
            if (0 != (t & (1 << n))) break;
          return 0 != this.high ? n + 33 : n + 1;
        }),
        (v.isZero = function () {
          return 0 === this.high && 0 === this.low;
        }),
        (v.eqz = v.isZero),
        (v.isNegative = function () {
          return !this.unsigned && this.high < 0;
        }),
        (v.isPositive = function () {
          return this.unsigned || this.high >= 0;
        }),
        (v.isOdd = function () {
          return 1 === (1 & this.low);
        }),
        (v.isEven = function () {
          return 0 === (1 & this.low);
        }),
        (v.equals = function (t) {
          return (
            o(t) || (t = E(t)),
            (this.unsigned === t.unsigned ||
              this.high >>> 31 !== 1 ||
              t.high >>> 31 !== 1) &&
              this.high === t.high &&
              this.low === t.low
          );
        }),
        (v.eq = v.equals),
        (v.notEquals = function (t) {
          return !this.eq(t);
        }),
        (v.neq = v.notEquals),
        (v.ne = v.notEquals),
        (v.lessThan = function (t) {
          return this.comp(t) < 0;
        }),
        (v.lt = v.lessThan),
        (v.lessThanOrEqual = function (t) {
          return this.comp(t) <= 0;
        }),
        (v.lte = v.lessThanOrEqual),
        (v.le = v.lessThanOrEqual),
        (v.greaterThan = function (t) {
          return this.comp(t) > 0;
        }),
        (v.gt = v.greaterThan),
        (v.greaterThanOrEqual = function (t) {
          return this.comp(t) >= 0;
        }),
        (v.gte = v.greaterThanOrEqual),
        (v.ge = v.greaterThanOrEqual),
        (v.compare = function (t) {
          if ((o(t) || (t = E(t)), this.eq(t))) return 0;
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
        (v.comp = v.compare),
        (v.negate = function () {
          return !this.unsigned && this.eq(P) ? P : this.not().add(_);
        }),
        (v.neg = v.negate),
        (v.add = function (t) {
          o(t) || (t = E(t));
          var n = this.high >>> 16,
            i = 65535 & this.high,
            r = this.low >>> 16,
            s = 65535 & this.low,
            e = t.high >>> 16,
            h = 65535 & t.high,
            u = t.low >>> 16,
            f = 65535 & t.low,
            a = 0,
            p = 0,
            d = 0,
            w = 0;
          return (
            (w += s + f),
            (d += w >>> 16),
            (w &= 65535),
            (d += r + u),
            (p += d >>> 16),
            (d &= 65535),
            (p += i + h),
            (a += p >>> 16),
            (p &= 65535),
            (a += n + e),
            (a &= 65535),
            c((d << 16) | w, (a << 16) | p, this.unsigned)
          );
        }),
        (v.subtract = function (t) {
          return (o(t) || (t = E(t)), this.add(t.neg()));
        }),
        (v.sub = v.subtract),
        (v.multiply = function (t) {
          if (this.isZero()) return m;
          if ((o(t) || (t = E(t)), i)) {
            var n = i.mul(this.low, this.high, t.low, t.high);
            return c(n, i.get_high(), this.unsigned);
          }
          if (t.isZero()) return m;
          if (this.eq(P)) return t.isOdd() ? P : m;
          if (t.eq(P)) return this.isOdd() ? P : m;
          if (this.isNegative())
            return t.isNegative()
              ? this.neg().mul(t.neg())
              : this.neg().mul(t).neg();
          if (t.isNegative()) return this.mul(t.neg()).neg();
          if (this.lt(l) && t.lt(l))
            return u(this.toNumber() * t.toNumber(), this.unsigned);
          var r = this.high >>> 16,
            s = 65535 & this.high,
            e = this.low >>> 16,
            h = 65535 & this.low,
            f = t.high >>> 16,
            a = 65535 & t.high,
            p = t.low >>> 16,
            d = 65535 & t.low,
            w = 0,
            y = 0,
            I = 0,
            B = 0;
          return (
            (B += h * d),
            (I += B >>> 16),
            (B &= 65535),
            (I += e * d),
            (y += I >>> 16),
            (I &= 65535),
            (I += h * p),
            (y += I >>> 16),
            (I &= 65535),
            (y += s * d),
            (w += y >>> 16),
            (y &= 65535),
            (y += e * p),
            (w += y >>> 16),
            (y &= 65535),
            (y += h * a),
            (w += y >>> 16),
            (y &= 65535),
            (w += r * d + s * p + e * a + h * f),
            (w &= 65535),
            c((I << 16) | B, (w << 16) | y, this.unsigned)
          );
        }),
        (v.mul = v.multiply),
        (v.divide = function (t) {
          if ((o(t) || (t = E(t)), t.isZero())) throw Error("division by zero");
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
            return c(n, i.get_high(), this.unsigned);
          }
          if (this.isZero()) return this.unsigned ? B : m;
          var r, s, e;
          if (this.unsigned) {
            if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return B;
            if (t.gt(this.shru(1))) return S;
            e = B;
          } else {
            if (this.eq(P)) {
              if (t.eq(_) || t.eq(R)) return P;
              if (t.eq(P)) return _;
              var h = this.shr(1);
              return (
                (r = h.div(t).shl(1)),
                r.eq(m)
                  ? t.isNegative()
                    ? _
                    : R
                  : ((s = this.sub(t.mul(r))), (e = r.add(s.div(t))), e)
              );
            }
            if (t.eq(P)) return this.unsigned ? B : m;
            if (this.isNegative())
              return t.isNegative()
                ? this.neg().div(t.neg())
                : this.neg().div(t).neg();
            if (t.isNegative()) return this.div(t.neg()).neg();
            e = m;
          }
          s = this;
          while (s.gte(t)) {
            r = Math.max(1, Math.floor(s.toNumber() / t.toNumber()));
            var a = Math.ceil(Math.log(r) / Math.LN2),
              p = a <= 48 ? 1 : f(2, a - 48),
              d = u(r),
              w = d.mul(t);
            while (w.isNegative() || w.gt(s))
              ((r -= p), (d = u(r, this.unsigned)), (w = d.mul(t)));
            (d.isZero() && (d = _), (e = e.add(d)), (s = s.sub(w)));
          }
          return e;
        }),
        (v.div = v.divide),
        (v.modulo = function (t) {
          if ((o(t) || (t = E(t)), i)) {
            var n = (this.unsigned ? i.rem_u : i.rem_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return c(n, i.get_high(), this.unsigned);
          }
          return this.sub(this.div(t).mul(t));
        }),
        (v.mod = v.modulo),
        (v.rem = v.modulo),
        (v.not = function () {
          return c(~this.low, ~this.high, this.unsigned);
        }),
        (v.and = function (t) {
          return (
            o(t) || (t = E(t)),
            c(this.low & t.low, this.high & t.high, this.unsigned)
          );
        }),
        (v.or = function (t) {
          return (
            o(t) || (t = E(t)),
            c(this.low | t.low, this.high | t.high, this.unsigned)
          );
        }),
        (v.xor = function (t) {
          return (
            o(t) || (t = E(t)),
            c(this.low ^ t.low, this.high ^ t.high, this.unsigned)
          );
        }),
        (v.shiftLeft = function (t) {
          return (
            o(t) && (t = t.toInt()),
            0 === (t &= 63)
              ? this
              : t < 32
                ? c(
                    this.low << t,
                    (this.high << t) | (this.low >>> (32 - t)),
                    this.unsigned,
                  )
                : c(0, this.low << (t - 32), this.unsigned)
          );
        }),
        (v.shl = v.shiftLeft),
        (v.shiftRight = function (t) {
          return (
            o(t) && (t = t.toInt()),
            0 === (t &= 63)
              ? this
              : t < 32
                ? c(
                    (this.low >>> t) | (this.high << (32 - t)),
                    this.high >> t,
                    this.unsigned,
                  )
                : c(
                    this.high >> (t - 32),
                    this.high >= 0 ? 0 : -1,
                    this.unsigned,
                  )
          );
        }),
        (v.shr = v.shiftRight),
        (v.shiftRightUnsigned = function (t) {
          if ((o(t) && (t = t.toInt()), (t &= 63), 0 === t)) return this;
          var n = this.high;
          if (t < 32) {
            var i = this.low;
            return c((i >>> t) | (n << (32 - t)), n >>> t, this.unsigned);
          }
          return c(32 === t ? n : n >>> (t - 32), 0, this.unsigned);
        }),
        (v.shru = v.shiftRightUnsigned),
        (v.shr_u = v.shiftRightUnsigned),
        (v.toSigned = function () {
          return this.unsigned ? c(this.low, this.high, !1) : this;
        }),
        (v.toUnsigned = function () {
          return this.unsigned ? this : c(this.low, this.high, !0);
        }),
        (v.toBytes = function (t) {
          return t ? this.toBytesLE() : this.toBytesBE();
        }),
        (v.toBytesLE = function () {
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
        (v.toBytesBE = function () {
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
        (r.fromBytes = function (t, n, i) {
          return i ? r.fromBytesLE(t, n) : r.fromBytesBE(t, n);
        }),
        (r.fromBytesLE = function (t, n) {
          return new r(
            t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
            t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
            n,
          );
        }),
        (r.fromBytesBE = function (t, n) {
          return new r(
            (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
            (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
            n,
          );
        }));
    },
    2792: function (t, n, i) {
      "use strict";
      var r = i(797),
        o = i(3263);
      function s(t) {
        var n = r("sha256").update(t).digest();
        return r("sha256").update(n).digest();
      }
      t.exports = o(s);
    },
    3263: function (t, n, i) {
      "use strict";
      var r = i(234),
        o = i(46).Buffer;
      t.exports = function (t) {
        function n(n) {
          var i = t(n);
          return r.encode(o.concat([n, i], n.length + 4));
        }
        function i(n) {
          var i = n.slice(0, -4),
            r = n.slice(-4),
            o = t(i);
          if (!((r[0] ^ o[0]) | (r[1] ^ o[1]) | (r[2] ^ o[2]) | (r[3] ^ o[3])))
            return i;
        }
        function s(t) {
          var n = r.decodeUnsafe(t);
          if (n) return i(n);
        }
        function e(n) {
          var o = r.decode(n),
            s = i(o, t);
          if (!s) throw new Error("Invalid checksum");
          return s;
        }
        return { encode: n, decode: e, decodeUnsafe: s };
      };
    },
    3266: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n,
          r,
          o = this;
        if (
          ((n = {
            ED25519: {
              BITS: "256",
              FIELD: "25519",
              CURVE: "ED25519",
              "@NB": 32,
              "@BASE": 24,
              "@NBT": 255,
              "@M8": 5,
              "@MT": 1,
              "@CT": 1,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            C25519: {
              BITS: "256",
              FIELD: "25519",
              CURVE: "C25519",
              "@NB": 32,
              "@BASE": 24,
              "@NBT": 255,
              "@M8": 5,
              "@MT": 1,
              "@CT": 2,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            NIST256: {
              BITS: "256",
              FIELD: "NIST256",
              CURVE: "NIST256",
              "@NB": 32,
              "@BASE": 24,
              "@NBT": 256,
              "@M8": 7,
              "@MT": 0,
              "@CT": 0,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            NIST384: {
              BITS: "384",
              FIELD: "NIST384",
              CURVE: "NIST384",
              "@NB": 48,
              "@BASE": 23,
              "@NBT": 384,
              "@M8": 7,
              "@MT": 0,
              "@CT": 0,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            BRAINPOOL: {
              BITS: "256",
              FIELD: "BRAINPOOL",
              CURVE: "BRAINPOOL",
              "@NB": 32,
              "@BASE": 24,
              "@NBT": 256,
              "@M8": 7,
              "@MT": 0,
              "@CT": 0,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            ANSSI: {
              BITS: "256",
              FIELD: "ANSSI",
              CURVE: "ANSSI",
              "@NB": 32,
              "@BASE": 24,
              "@NBT": 256,
              "@M8": 7,
              "@MT": 0,
              "@CT": 0,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            HIFIVE: {
              BITS: "336",
              FIELD: "HIFIVE",
              CURVE: "HIFIVE",
              "@NB": 42,
              "@BASE": 23,
              "@NBT": 336,
              "@M8": 5,
              "@MT": 1,
              "@CT": 1,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            GOLDILOCKS: {
              BITS: "448",
              FIELD: "GOLDILOCKS",
              CURVE: "GOLDILOCKS",
              "@NB": 56,
              "@BASE": 23,
              "@NBT": 448,
              "@M8": 7,
              "@MT": 2,
              "@CT": 1,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            C41417: {
              BITS: "416",
              FIELD: "C41417",
              CURVE: "C41417",
              "@NB": 52,
              "@BASE": 22,
              "@NBT": 414,
              "@M8": 7,
              "@MT": 1,
              "@CT": 1,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            NIST521: {
              BITS: "528",
              FIELD: "NIST521",
              CURVE: "NIST521",
              "@NB": 66,
              "@BASE": 23,
              "@NBT": 521,
              "@M8": 7,
              "@MT": 1,
              "@CT": 0,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            NUMS256W: {
              BITS: "256",
              FIELD: "256PM",
              CURVE: "NUMS256W",
              "@NB": 32,
              "@BASE": 24,
              "@NBT": 256,
              "@M8": 3,
              "@MT": 1,
              "@CT": 0,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            NUMS256E: {
              BITS: "256",
              FIELD: "256PM",
              CURVE: "NUMS256E",
              "@NB": 32,
              "@BASE": 24,
              "@NBT": 256,
              "@M8": 3,
              "@MT": 1,
              "@CT": 1,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            NUMS384W: {
              BITS: "384",
              FIELD: "384PM",
              CURVE: "NUMS384W",
              "@NB": 48,
              "@BASE": 23,
              "@NBT": 384,
              "@M8": 3,
              "@MT": 1,
              "@CT": 0,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            NUMS384E: {
              BITS: "384",
              FIELD: "384PM",
              CURVE: "NUMS384E",
              "@NB": 48,
              "@BASE": 23,
              "@NBT": 384,
              "@M8": 3,
              "@MT": 1,
              "@CT": 1,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            NUMS512W: {
              BITS: "512",
              FIELD: "512PM",
              CURVE: "NUMS512W",
              "@NB": 64,
              "@BASE": 23,
              "@NBT": 512,
              "@M8": 7,
              "@MT": 1,
              "@CT": 0,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            NUMS512E: {
              BITS: "512",
              FIELD: "512PM",
              CURVE: "NUMS512E",
              "@NB": 64,
              "@BASE": 23,
              "@NBT": 512,
              "@M8": 7,
              "@MT": 1,
              "@CT": 1,
              "@PF": 0,
              "@ST": 0,
              "@SX": 0,
            },
            FP256BN: {
              BITS: "256",
              FIELD: "FP256BN",
              CURVE: "FP256BN",
              "@NB": 32,
              "@BASE": 24,
              "@NBT": 256,
              "@M8": 3,
              "@MT": 0,
              "@CT": 0,
              "@PF": 1,
              "@ST": 1,
              "@SX": 1,
            },
            FP512BN: {
              BITS: "512",
              FIELD: "FP512BN",
              CURVE: "FP512BN",
              "@NB": 64,
              "@BASE": 23,
              "@NBT": 512,
              "@M8": 3,
              "@MT": 0,
              "@CT": 0,
              "@PF": 1,
              "@ST": 1,
              "@SX": 0,
            },
            BN254: {
              BITS: "256",
              FIELD: "BN254",
              CURVE: "BN254",
              "@NB": 32,
              "@BASE": 24,
              "@NBT": 254,
              "@M8": 3,
              "@MT": 0,
              "@CT": 0,
              "@PF": 1,
              "@ST": 0,
              "@SX": 1,
            },
            BN254CX: {
              BITS: "256",
              FIELD: "BN254CX",
              CURVE: "BN254CX",
              "@NB": 32,
              "@BASE": 24,
              "@NBT": 254,
              "@M8": 3,
              "@MT": 0,
              "@CT": 0,
              "@PF": 1,
              "@ST": 0,
              "@SX": 1,
            },
            BLS383: {
              BITS: "384",
              FIELD: "BLS383",
              CURVE: "BLS383",
              "@NB": 48,
              "@BASE": 23,
              "@NBT": 383,
              "@M8": 3,
              "@MT": 0,
              "@CT": 0,
              "@PF": 2,
              "@ST": 1,
              "@SX": 0,
            },
            BLS461: {
              BITS: "464",
              FIELD: "BLS461",
              CURVE: "BLS461",
              "@NB": 58,
              "@BASE": 23,
              "@NBT": 461,
              "@M8": 3,
              "@MT": 0,
              "@CT": 0,
              "@PF": 2,
              "@ST": 1,
              "@SX": 1,
            },
            RSA2048: {
              BITS: "1024",
              TFF: "2048",
              "@NB": 128,
              "@BASE": 22,
              "@ML": 2,
            },
            RSA3072: {
              BITS: "384",
              TFF: "3072",
              "@NB": 48,
              "@BASE": 23,
              "@ML": 8,
            },
            RSA4096: {
              BITS: "512",
              TFF: "4096",
              "@NB": 64,
              "@BASE": 23,
              "@ML": 8,
            },
          }),
          (r = function (t, n, r) {
            (r || (r = t),
              n || (n = t.toLowerCase()),
              (o[r] = i(4087)("./" + n)[t](o)));
          }),
          r("AES"),
          r("GCM"),
          r("UInt64"),
          r("HASH256"),
          r("HASH384"),
          r("HASH512"),
          r("SHA3"),
          r("RAND"),
          r("NewHope"),
          r("NHS"),
          "undefined" !== typeof t)
        )
          return (
            (o.config = n[t]),
            r("BIG"),
            r("DBIG", "big"),
            "undefined" !== typeof o.config["TFF"]
              ? (r("FF"),
                r("RSA"),
                r("rsa_public_key", "rsa"),
                void r("rsa_private_key", "rsa"))
              : "undefined" !== typeof o.config["CURVE"]
                ? (r(
                    "ROM_CURVE_" + o.config["CURVE"],
                    "rom_curve",
                    "ROM_CURVE",
                  ),
                  r("ROM_FIELD_" + o.config["FIELD"], "rom_field", "ROM_FIELD"),
                  r("FP"),
                  r("ECP"),
                  r("ECDH"),
                  void (
                    0 != o.config["@PF"] &&
                    (r("FP2"),
                    r("FP4"),
                    r("FP12"),
                    r("ECP2"),
                    r("PAIR"),
                    r("MPIN"))
                  ))
                : void 0
          );
      };
      "undefined" !== typeof t.exports && (t.exports = r);
    },
    3502: function (t, n, i) {
      var r = function () {
        "use strict";
        var t = function () {
          ((this.Nk = 0),
            (this.Nr = 0),
            (this.mode = 0),
            (this.fkey = []),
            (this.rkey = []),
            (this.f = []));
        };
        return (
          (t.ECB = 0),
          (t.CBC = 1),
          (t.CFB1 = 2),
          (t.CFB2 = 3),
          (t.CFB4 = 5),
          (t.OFB1 = 14),
          (t.OFB2 = 15),
          (t.OFB4 = 17),
          (t.OFB8 = 21),
          (t.OFB16 = 29),
          (t.CTR1 = 30),
          (t.CTR2 = 31),
          (t.CTR4 = 33),
          (t.CTR8 = 37),
          (t.CTR16 = 45),
          (t.prototype = {
            reset: function (n, i) {
              var r;
              for (this.mode = n, r = 0; r < 16; r++) this.f[r] = 0;
              if (this.mode != t.ECB && null !== i)
                for (r = 0; r < 16; r++) this.f[r] = i[r];
            },
            getreg: function () {
              var t,
                n = [];
              for (t = 0; t < 16; t++) n[t] = this.f[t];
              return n;
            },
            increment: function () {
              var t;
              for (t = 0; t < 16; t++)
                if ((this.f[t]++, 0 != (255 & this.f[t]))) break;
            },
            init: function (n, i, r, o) {
              var s,
                e,
                h,
                u,
                c,
                f = [],
                a = [];
              if (((i /= 4), 4 != i && 6 != i && 8 != i)) return !1;
              for (
                c = 6 + i,
                  this.Nk = i,
                  this.Nr = c,
                  this.reset(n, o),
                  u = 4 * (c + 1),
                  s = e = 0;
                s < i;
                s++, e += 4
              ) {
                for (h = 0; h < 4; h++) a[h] = r[e + h];
                f[s] = t.pack(a);
              }
              for (s = 0; s < i; s++) this.fkey[s] = f[s];
              for (e = i, h = 0; e < u; e += i, h++)
                for (
                  this.fkey[e] =
                    this.fkey[e - i] ^
                    t.SubByte(t.ROTL24(this.fkey[e - 1])) ^
                    (255 & t.rco[h]),
                    s = 1;
                  s < i && s + e < u;
                  s++
                )
                  this.fkey[s + e] =
                    this.fkey[s + e - i] ^ this.fkey[s + e - 1];
              for (e = 0; e < 4; e++) this.rkey[e + u - 4] = this.fkey[e];
              for (s = 4; s < u - 4; s += 4)
                for (h = u - 4 - s, e = 0; e < 4; e++)
                  this.rkey[h + e] = t.InvMixCol(this.fkey[s + e]);
              for (e = u - 4; e < u; e++) this.rkey[e - u + 4] = this.fkey[e];
            },
            ecb_encrypt: function (n) {
              var i,
                r,
                o,
                s,
                e = [],
                h = [],
                u = [];
              for (r = o = 0; r < 4; r++, o += 4) {
                for (s = 0; s < 4; s++) e[s] = n[o + s];
                ((h[r] = t.pack(e)), (h[r] ^= this.fkey[r]));
              }
              for (s = 4, r = 1; r < this.Nr; r++)
                for (
                  u[0] =
                    this.fkey[s] ^
                    t.ftable[255 & h[0]] ^
                    t.ROTL8(t.ftable[(h[1] >>> 8) & 255]) ^
                    t.ROTL16(t.ftable[(h[2] >>> 16) & 255]) ^
                    t.ROTL24(t.ftable[(h[3] >>> 24) & 255]),
                    u[1] =
                      this.fkey[s + 1] ^
                      t.ftable[255 & h[1]] ^
                      t.ROTL8(t.ftable[(h[2] >>> 8) & 255]) ^
                      t.ROTL16(t.ftable[(h[3] >>> 16) & 255]) ^
                      t.ROTL24(t.ftable[(h[0] >>> 24) & 255]),
                    u[2] =
                      this.fkey[s + 2] ^
                      t.ftable[255 & h[2]] ^
                      t.ROTL8(t.ftable[(h[3] >>> 8) & 255]) ^
                      t.ROTL16(t.ftable[(h[0] >>> 16) & 255]) ^
                      t.ROTL24(t.ftable[(h[1] >>> 24) & 255]),
                    u[3] =
                      this.fkey[s + 3] ^
                      t.ftable[255 & h[3]] ^
                      t.ROTL8(t.ftable[(h[0] >>> 8) & 255]) ^
                      t.ROTL16(t.ftable[(h[1] >>> 16) & 255]) ^
                      t.ROTL24(t.ftable[(h[2] >>> 24) & 255]),
                    s += 4,
                    o = 0;
                  o < 4;
                  o++
                )
                  ((i = h[o]), (h[o] = u[o]), (u[o] = i));
              for (
                u[0] =
                  this.fkey[s] ^
                  (255 & t.fbsub[255 & h[0]]) ^
                  t.ROTL8(255 & t.fbsub[(h[1] >>> 8) & 255]) ^
                  t.ROTL16(255 & t.fbsub[(h[2] >>> 16) & 255]) ^
                  t.ROTL24(255 & t.fbsub[(h[3] >>> 24) & 255]),
                  u[1] =
                    this.fkey[s + 1] ^
                    (255 & t.fbsub[255 & h[1]]) ^
                    t.ROTL8(255 & t.fbsub[(h[2] >>> 8) & 255]) ^
                    t.ROTL16(255 & t.fbsub[(h[3] >>> 16) & 255]) ^
                    t.ROTL24(255 & t.fbsub[(h[0] >>> 24) & 255]),
                  u[2] =
                    this.fkey[s + 2] ^
                    (255 & t.fbsub[255 & h[2]]) ^
                    t.ROTL8(255 & t.fbsub[(h[3] >>> 8) & 255]) ^
                    t.ROTL16(255 & t.fbsub[(h[0] >>> 16) & 255]) ^
                    t.ROTL24(255 & t.fbsub[(h[1] >>> 24) & 255]),
                  u[3] =
                    this.fkey[s + 3] ^
                    (255 & t.fbsub[255 & h[3]]) ^
                    t.ROTL8(255 & t.fbsub[(h[0] >>> 8) & 255]) ^
                    t.ROTL16(255 & t.fbsub[(h[1] >>> 16) & 255]) ^
                    t.ROTL24(255 & t.fbsub[(h[2] >>> 24) & 255]),
                  r = o = 0;
                r < 4;
                r++, o += 4
              )
                for (e = t.unpack(u[r]), s = 0; s < 4; s++) n[o + s] = e[s];
            },
            ecb_decrypt: function (n) {
              var i,
                r,
                o,
                s,
                e = [],
                h = [],
                u = [];
              for (r = o = 0; r < 4; r++, o += 4) {
                for (s = 0; s < 4; s++) e[s] = n[o + s];
                ((h[r] = t.pack(e)), (h[r] ^= this.rkey[r]));
              }
              for (s = 4, r = 1; r < this.Nr; r++)
                for (
                  u[0] =
                    this.rkey[s] ^
                    t.rtable[255 & h[0]] ^
                    t.ROTL8(t.rtable[(h[3] >>> 8) & 255]) ^
                    t.ROTL16(t.rtable[(h[2] >>> 16) & 255]) ^
                    t.ROTL24(t.rtable[(h[1] >>> 24) & 255]),
                    u[1] =
                      this.rkey[s + 1] ^
                      t.rtable[255 & h[1]] ^
                      t.ROTL8(t.rtable[(h[0] >>> 8) & 255]) ^
                      t.ROTL16(t.rtable[(h[3] >>> 16) & 255]) ^
                      t.ROTL24(t.rtable[(h[2] >>> 24) & 255]),
                    u[2] =
                      this.rkey[s + 2] ^
                      t.rtable[255 & h[2]] ^
                      t.ROTL8(t.rtable[(h[1] >>> 8) & 255]) ^
                      t.ROTL16(t.rtable[(h[0] >>> 16) & 255]) ^
                      t.ROTL24(t.rtable[(h[3] >>> 24) & 255]),
                    u[3] =
                      this.rkey[s + 3] ^
                      t.rtable[255 & h[3]] ^
                      t.ROTL8(t.rtable[(h[2] >>> 8) & 255]) ^
                      t.ROTL16(t.rtable[(h[1] >>> 16) & 255]) ^
                      t.ROTL24(t.rtable[(h[0] >>> 24) & 255]),
                    s += 4,
                    o = 0;
                  o < 4;
                  o++
                )
                  ((i = h[o]), (h[o] = u[o]), (u[o] = i));
              for (
                u[0] =
                  this.rkey[s] ^
                  (255 & t.rbsub[255 & h[0]]) ^
                  t.ROTL8(255 & t.rbsub[(h[3] >>> 8) & 255]) ^
                  t.ROTL16(255 & t.rbsub[(h[2] >>> 16) & 255]) ^
                  t.ROTL24(255 & t.rbsub[(h[1] >>> 24) & 255]),
                  u[1] =
                    this.rkey[s + 1] ^
                    (255 & t.rbsub[255 & h[1]]) ^
                    t.ROTL8(255 & t.rbsub[(h[0] >>> 8) & 255]) ^
                    t.ROTL16(255 & t.rbsub[(h[3] >>> 16) & 255]) ^
                    t.ROTL24(255 & t.rbsub[(h[2] >>> 24) & 255]),
                  u[2] =
                    this.rkey[s + 2] ^
                    (255 & t.rbsub[255 & h[2]]) ^
                    t.ROTL8(255 & t.rbsub[(h[1] >>> 8) & 255]) ^
                    t.ROTL16(255 & t.rbsub[(h[0] >>> 16) & 255]) ^
                    t.ROTL24(255 & t.rbsub[(h[3] >>> 24) & 255]),
                  u[3] =
                    this.rkey[s + 3] ^
                    (255 & t.rbsub[255 & h[3]]) ^
                    t.ROTL8(255 & t.rbsub[(h[2] >>> 8) & 255]) ^
                    t.ROTL16(255 & t.rbsub[(h[1] >>> 16) & 255]) ^
                    t.ROTL24(255 & t.rbsub[(h[0] >>> 24) & 255]),
                  r = o = 0;
                r < 4;
                r++, o += 4
              )
                for (e = t.unpack(u[r]), s = 0; s < 4; s++) n[o + s] = e[s];
            },
            encrypt: function (n) {
              var i,
                r,
                o,
                s = [];
              switch (((r = 0), this.mode)) {
                case t.ECB:
                  return (this.ecb_encrypt(n), 0);
                case t.CBC:
                  for (o = 0; o < 16; o++) n[o] ^= this.f[o];
                  for (this.ecb_encrypt(n), o = 0; o < 16; o++)
                    this.f[o] = n[o];
                  return 0;
                case t.CFB1:
                case t.CFB2:
                case t.CFB4:
                  for (i = this.mode - t.CFB1 + 1, o = 0; o < i; o++)
                    r = (r << 8) | this.f[o];
                  for (o = 0; o < 16; o++) s[o] = this.f[o];
                  for (o = i; o < 16; o++) this.f[o - i] = this.f[o];
                  for (this.ecb_encrypt(s), o = 0; o < i; o++)
                    ((n[o] ^= s[o]), (this.f[16 - i + o] = n[o]));
                  return r;
                case t.OFB1:
                case t.OFB2:
                case t.OFB4:
                case t.OFB8:
                case t.OFB16:
                  for (
                    i = this.mode - t.OFB1 + 1, this.ecb_encrypt(this.f), o = 0;
                    o < i;
                    o++
                  )
                    n[o] ^= this.f[o];
                  return 0;
                case t.CTR1:
                case t.CTR2:
                case t.CTR4:
                case t.CTR8:
                case t.CTR16:
                  for (i = this.mode - t.CTR1 + 1, o = 0; o < 16; o++)
                    s[o] = this.f[o];
                  for (this.ecb_encrypt(s), o = 0; o < i; o++) n[o] ^= s[o];
                  return (this.increment(), 0);
                default:
                  return 0;
              }
            },
            decrypt: function (n) {
              var i,
                r,
                o,
                s = [];
              switch (((r = 0), this.mode)) {
                case t.ECB:
                  return (this.ecb_decrypt(n), 0);
                case t.CBC:
                  for (o = 0; o < 16; o++)
                    ((s[o] = this.f[o]), (this.f[o] = n[o]));
                  for (this.ecb_decrypt(n), o = 0; o < 16; o++)
                    ((n[o] ^= s[o]), (s[o] = 0));
                  return 0;
                case t.CFB1:
                case t.CFB2:
                case t.CFB4:
                  for (i = this.mode - t.CFB1 + 1, o = 0; o < i; o++)
                    r = (r << 8) | this.f[o];
                  for (o = 0; o < 16; o++) s[o] = this.f[o];
                  for (o = i; o < 16; o++) this.f[o - i] = this.f[o];
                  for (this.ecb_encrypt(s), o = 0; o < i; o++)
                    ((this.f[16 - i + o] = n[o]), (n[o] ^= s[o]));
                  return r;
                case t.OFB1:
                case t.OFB2:
                case t.OFB4:
                case t.OFB8:
                case t.OFB16:
                  for (
                    i = this.mode - t.OFB1 + 1, this.ecb_encrypt(this.f), o = 0;
                    o < i;
                    o++
                  )
                    n[o] ^= this.f[o];
                  return 0;
                case t.CTR1:
                case t.CTR2:
                case t.CTR4:
                case t.CTR8:
                case t.CTR16:
                  for (i = this.mode - t.CTR1 + 1, o = 0; o < 16; o++)
                    s[o] = this.f[o];
                  for (this.ecb_encrypt(s), o = 0; o < i; o++) n[o] ^= s[o];
                  return (this.increment(), 0);
                default:
                  return 0;
              }
            },
            end: function () {
              var t;
              for (t = 0; t < 4 * (this.Nr + 1); t++)
                this.fkey[t] = this.rkey[t] = 0;
              for (t = 0; t < 16; t++) this.f[t] = 0;
            },
          }),
          (t.ROTL8 = function (t) {
            return (t << 8) | (t >>> 24);
          }),
          (t.ROTL16 = function (t) {
            return (t << 16) | (t >>> 16);
          }),
          (t.ROTL24 = function (t) {
            return (t << 24) | (t >>> 8);
          }),
          (t.pack = function (t) {
            return (
              ((255 & t[3]) << 24) |
              ((255 & t[2]) << 16) |
              ((255 & t[1]) << 8) |
              (255 & t[0])
            );
          }),
          (t.unpack = function (t) {
            var n = [];
            return (
              (n[0] = 255 & t),
              (n[1] = (t >>> 8) & 255),
              (n[2] = (t >>> 16) & 255),
              (n[3] = (t >>> 24) & 255),
              n
            );
          }),
          (t.bmul = function (n, i) {
            var r = 255 & n,
              o = 255 & i,
              s = 255 & t.ltab[r],
              e = 255 & t.ltab[o];
            return 0 !== n && 0 !== i ? t.ptab[(s + e) % 255] : 0;
          }),
          (t.SubByte = function (n) {
            var i = t.unpack(n);
            return (
              (i[0] = t.fbsub[255 & i[0]]),
              (i[1] = t.fbsub[255 & i[1]]),
              (i[2] = t.fbsub[255 & i[2]]),
              (i[3] = t.fbsub[255 & i[3]]),
              t.pack(i)
            );
          }),
          (t.product = function (n, i) {
            var r = t.unpack(n),
              o = t.unpack(i);
            return (
              255 &
              (t.bmul(r[0], o[0]) ^
                t.bmul(r[1], o[1]) ^
                t.bmul(r[2], o[2]) ^
                t.bmul(r[3], o[3]))
            );
          }),
          (t.InvMixCol = function (n) {
            var i,
              r,
              o = [];
            return (
              (r = t.pack(t.InCo)),
              (o[3] = t.product(r, n)),
              (r = t.ROTL24(r)),
              (o[2] = t.product(r, n)),
              (r = t.ROTL24(r)),
              (o[1] = t.product(r, n)),
              (r = t.ROTL24(r)),
              (o[0] = t.product(r, n)),
              (i = t.pack(o)),
              i
            );
          }),
          (t.InCo = [11, 13, 9, 14]),
          (t.rco = [
            1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47,
          ]),
          (t.ptab = [
            1, 3, 5, 15, 17, 51, 85, 255, 26, 46, 114, 150, 161, 248, 19, 53,
            95, 225, 56, 72, 216, 115, 149, 164, 247, 2, 6, 10, 30, 34, 102,
            170, 229, 52, 92, 228, 55, 89, 235, 38, 106, 190, 217, 112, 144,
            171, 230, 49, 83, 245, 4, 12, 20, 60, 68, 204, 79, 209, 104, 184,
            211, 110, 178, 205, 76, 212, 103, 169, 224, 59, 77, 215, 98, 166,
            241, 8, 24, 40, 120, 136, 131, 158, 185, 208, 107, 189, 220, 127,
            129, 152, 179, 206, 73, 219, 118, 154, 181, 196, 87, 249, 16, 48,
            80, 240, 11, 29, 39, 105, 187, 214, 97, 163, 254, 25, 43, 125, 135,
            146, 173, 236, 47, 113, 147, 174, 233, 32, 96, 160, 251, 22, 58, 78,
            210, 109, 183, 194, 93, 231, 50, 86, 250, 21, 63, 65, 195, 94, 226,
            61, 71, 201, 64, 192, 91, 237, 44, 116, 156, 191, 218, 117, 159,
            186, 213, 100, 172, 239, 42, 126, 130, 157, 188, 223, 122, 142, 137,
            128, 155, 182, 193, 88, 232, 35, 101, 175, 234, 37, 111, 177, 200,
            67, 197, 84, 252, 31, 33, 99, 165, 244, 7, 9, 27, 45, 119, 153, 176,
            203, 70, 202, 69, 207, 74, 222, 121, 139, 134, 145, 168, 227, 62,
            66, 198, 81, 243, 14, 18, 54, 90, 238, 41, 123, 141, 140, 143, 138,
            133, 148, 167, 242, 13, 23, 57, 75, 221, 124, 132, 151, 162, 253,
            28, 36, 108, 180, 199, 82, 246, 1,
          ]),
          (t.ltab = [
            0, 255, 25, 1, 50, 2, 26, 198, 75, 199, 27, 104, 51, 238, 223, 3,
            100, 4, 224, 14, 52, 141, 129, 239, 76, 113, 8, 200, 248, 105, 28,
            193, 125, 194, 29, 181, 249, 185, 39, 106, 77, 228, 166, 114, 154,
            201, 9, 120, 101, 47, 138, 5, 33, 15, 225, 36, 18, 240, 130, 69, 53,
            147, 218, 142, 150, 143, 219, 189, 54, 208, 206, 148, 19, 92, 210,
            241, 64, 70, 131, 56, 102, 221, 253, 48, 191, 6, 139, 98, 179, 37,
            226, 152, 34, 136, 145, 16, 126, 110, 72, 195, 163, 182, 30, 66, 58,
            107, 40, 84, 250, 133, 61, 186, 43, 121, 10, 21, 155, 159, 94, 202,
            78, 212, 172, 229, 243, 115, 167, 87, 175, 88, 168, 80, 244, 234,
            214, 116, 79, 174, 233, 213, 231, 230, 173, 232, 44, 215, 117, 122,
            235, 22, 11, 245, 89, 203, 95, 176, 156, 169, 81, 160, 127, 12, 246,
            111, 23, 196, 73, 236, 216, 67, 31, 45, 164, 118, 123, 183, 204,
            187, 62, 90, 251, 96, 177, 134, 59, 82, 161, 108, 170, 85, 41, 157,
            151, 178, 135, 144, 97, 190, 220, 252, 188, 149, 207, 205, 55, 63,
            91, 209, 83, 57, 132, 60, 65, 162, 109, 71, 20, 42, 158, 93, 86,
            242, 211, 171, 68, 17, 146, 217, 35, 32, 46, 137, 180, 124, 184, 38,
            119, 153, 227, 165, 103, 74, 237, 222, 197, 49, 254, 24, 13, 99,
            140, 128, 192, 247, 112, 7,
          ]),
          (t.fbsub = [
            99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215,
            171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175,
            156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165,
            229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18,
            128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82,
            59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91,
            106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51,
            133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157,
            56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95,
            151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220,
            34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58,
            10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200,
            55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8,
            186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189,
            139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134,
            193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135,
            233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65,
            153, 45, 15, 176, 84, 187, 22,
          ]),
          (t.rbsub = [
            82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215,
            251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196,
            222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11,
            66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162,
            73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212,
            164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185,
            218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188,
            211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202,
            63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79,
            103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172,
            116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110,
            71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190,
            27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120,
            205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89,
            39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122,
            159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200,
            235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38,
            225, 105, 20, 99, 85, 33, 12, 125,
          ]),
          (t.ftable = [
            2774754246, 2222750968, 2574743534, 2373680118, 234025727,
            3177933782, 2976870366, 1422247313, 1345335392, 50397442,
            2842126286, 2099981142, 436141799, 1658312629, 3870010189,
            2591454956, 1170918031, 2642575903, 1086966153, 2273148410,
            368769775, 3948501426, 3376891790, 200339707, 3970805057,
            1742001331, 4255294047, 3937382213, 3214711843, 4154762323,
            2524082916, 1539358875, 3266819957, 486407649, 2928907069,
            1780885068, 1513502316, 1094664062, 49805301, 1338821763,
            1546925160, 4104496465, 887481809, 150073849, 2473685474,
            1943591083, 1395732834, 1058346282, 201589768, 1388824469,
            1696801606, 1589887901, 672667696, 2711000631, 251987210,
            3046808111, 151455502, 907153956, 2608889883, 1038279391, 652995533,
            1764173646, 3451040383, 2675275242, 453576978, 2659418909,
            1949051992, 773462580, 756751158, 2993581788, 3998898868,
            4221608027, 4132590244, 1295727478, 1641469623, 3467883389,
            2066295122, 1055122397, 1898917726, 2542044179, 4115878822,
            1758581177, 0, 753790401, 1612718144, 536673507, 3367088505,
            3982187446, 3194645204, 1187761037, 3653156455, 1262041458,
            3729410708, 3561770136, 3898103984, 1255133061, 1808847035,
            720367557, 3853167183, 385612781, 3309519750, 3612167578,
            1429418854, 2491778321, 3477423498, 284817897, 100794884,
            2172616702, 4031795360, 1144798328, 3131023141, 3819481163,
            4082192802, 4272137053, 3225436288, 2324664069, 2912064063,
            3164445985, 1211644016, 83228145, 3753688163, 3249976951,
            1977277103, 1663115586, 806359072, 452984805, 250868733, 1842533055,
            1288555905, 336333848, 890442534, 804056259, 3781124030, 2727843637,
            3427026056, 957814574, 1472513171, 4071073621, 2189328124,
            1195195770, 2892260552, 3881655738, 723065138, 2507371494,
            2690670784, 2558624025, 3511635870, 2145180835, 1713513028,
            2116692564, 2878378043, 2206763019, 3393603212, 703524551,
            3552098411, 1007948840, 2044649127, 3797835452, 487262998,
            1994120109, 1004593371, 1446130276, 1312438900, 503974420,
            3679013266, 168166924, 1814307912, 3831258296, 1573044895,
            1859376061, 4021070915, 2791465668, 2828112185, 2761266481,
            937747667, 2339994098, 854058965, 1137232011, 1496790894,
            3077402074, 2358086913, 1691735473, 3528347292, 3769215305,
            3027004632, 4199962284, 133494003, 636152527, 2942657994,
            2390391540, 3920539207, 403179536, 3585784431, 2289596656,
            1864705354, 1915629148, 605822008, 4054230615, 3350508659,
            1371981463, 602466507, 2094914977, 2624877800, 555687742,
            3712699286, 3703422305, 2257292045, 2240449039, 2423288032,
            1111375484, 3300242801, 2858837708, 3628615824, 84083462, 32962295,
            302911004, 2741068226, 1597322602, 4183250862, 3501832553,
            2441512471, 1489093017, 656219450, 3114180135, 954327513, 335083755,
            3013122091, 856756514, 3144247762, 1893325225, 2307821063,
            2811532339, 3063651117, 572399164, 2458355477, 552200649,
            1238290055, 4283782570, 2015897680, 2061492133, 2408352771,
            4171342169, 2156497161, 386731290, 3669999461, 837215959,
            3326231172, 3093850320, 3275833730, 2962856233, 1999449434,
            286199582, 3417354363, 4233385128, 3602627437, 974525996,
          ]),
          (t.rtable = [
            1353184337, 1399144830, 3282310938, 2522752826, 3412831035,
            4047871263, 2874735276, 2466505547, 1442459680, 4134368941,
            2440481928, 625738485, 4242007375, 3620416197, 2151953702,
            2409849525, 1230680542, 1729870373, 2551114309, 3787521629,
            41234371, 317738113, 2744600205, 3338261355, 3881799427, 2510066197,
            3950669247, 3663286933, 763608788, 3542185048, 694804553,
            1154009486, 1787413109, 2021232372, 1799248025, 3715217703,
            3058688446, 397248752, 1722556617, 3023752829, 407560035,
            2184256229, 1613975959, 1165972322, 3765920945, 2226023355,
            480281086, 2485848313, 1483229296, 436028815, 2272059028,
            3086515026, 601060267, 3791801202, 1468997603, 715871590, 120122290,
            63092015, 2591802758, 2768779219, 4068943920, 2997206819,
            3127509762, 1552029421, 723308426, 2461301159, 4042393587,
            2715969870, 3455375973, 3586000134, 526529745, 2331944644,
            2639474228, 2689987490, 853641733, 1978398372, 971801355,
            2867814464, 111112542, 1360031421, 4186579262, 1023860118,
            2919579357, 1186850381, 3045938321, 90031217, 1876166148,
            4279586912, 620468249, 2548678102, 3426959497, 2006899047,
            3175278768, 2290845959, 945494503, 3689859193, 1191869601,
            3910091388, 3374220536, 0, 2206629897, 1223502642, 2893025566,
            1316117100, 4227796733, 1446544655, 517320253, 658058550,
            1691946762, 564550760, 3511966619, 976107044, 2976320012, 266819475,
            3533106868, 2660342555, 1338359936, 2720062561, 1766553434,
            370807324, 179999714, 3844776128, 1138762300, 488053522, 185403662,
            2915535858, 3114841645, 3366526484, 2233069911, 1275557295,
            3151862254, 4250959779, 2670068215, 3170202204, 3309004356,
            880737115, 1982415755, 3703972811, 1761406390, 1676797112,
            3403428311, 277177154, 1076008723, 538035844, 2099530373,
            4164795346, 288553390, 1839278535, 1261411869, 4080055004,
            3964831245, 3504587127, 1813426987, 2579067049, 4199060497,
            577038663, 3297574056, 440397984, 3626794326, 4019204898,
            3343796615, 3251714265, 4272081548, 906744984, 3481400742,
            685669029, 646887386, 2764025151, 3835509292, 227702864, 2613862250,
            1648787028, 3256061430, 3904428176, 1593260334, 4121936770,
            3196083615, 2090061929, 2838353263, 3004310991, 999926984,
            2809993232, 1852021992, 2075868123, 158869197, 4095236462, 28809964,
            2828685187, 1701746150, 2129067946, 147831841, 3873969647,
            3650873274, 3459673930, 3557400554, 3598495785, 2947720241,
            824393514, 815048134, 3227951669, 935087732, 2798289660, 2966458592,
            366520115, 1251476721, 4158319681, 240176511, 804688151, 2379631990,
            1303441219, 1414376140, 3741619940, 3820343710, 461924940,
            3089050817, 2136040774, 82468509, 1563790337, 1937016826, 776014843,
            1511876531, 1389550482, 861278441, 323475053, 2355222426,
            2047648055, 2383738969, 2302415851, 3995576782, 902390199,
            3991215329, 1018251130, 1507840668, 1064563285, 2043548696,
            3208103795, 3939366739, 1537932639, 342834655, 2262516856,
            2180231114, 1053059257, 741614648, 1598071746, 1925389590,
            203809468, 2336832552, 1100287487, 1895934009, 3736275976,
            2632234200, 2428589668, 1636092795, 1890988757, 1952214088,
            1113045200,
          ]),
          t
        );
      };
      "undefined" !== typeof t.exports && (t.exports.AES = r);
    },
    3503: function (t, n, i) {
      var r, o;
      ((r = function (t) {
        "use strict";
        var n = function (t) {
          switch (((this.w = new Array(n.NLEN)), typeof t)) {
            case "object":
              this.copy(t);
              break;
            case "number":
              (this.zero(), (this.w[0] = t));
              break;
            default:
              this.zero();
          }
        };
        return (
          (n.CHUNK = 32),
          (n.MODBYTES = t.config["@NB"]),
          (n.BASEBITS = t.config["@BASE"]),
          (n.NLEN = 1 + Math.floor((8 * n.MODBYTES - 1) / n.BASEBITS)),
          (n.DNLEN = 2 * n.NLEN),
          (n.BMASK = (1 << n.BASEBITS) - 1),
          (n.BIGBITS = 8 * n.MODBYTES),
          (n.NEXCESS = 1 << (n.CHUNK - n.BASEBITS - 1)),
          (n.MODINV = Math.pow(2, -n.BASEBITS)),
          (n.prototype = {
            zero: function () {
              var t;
              for (t = 0; t < n.NLEN; t++) this.w[t] = 0;
              return this;
            },
            one: function () {
              var t;
              for (this.w[0] = 1, t = 1; t < n.NLEN; t++) this.w[t] = 0;
              return this;
            },
            get: function (t) {
              return this.w[t];
            },
            set: function (t, n) {
              this.w[t] = n;
            },
            iszilch: function () {
              var t;
              for (t = 0; t < n.NLEN; t++) if (0 !== this.w[t]) return !1;
              return !0;
            },
            isunity: function () {
              var t;
              for (t = 1; t < n.NLEN; t++) if (0 !== this.w[t]) return !1;
              return 1 == this.w[0];
            },
            cswap: function (t, i) {
              var r,
                o,
                s = i;
              for (s = ~(s - 1), o = 0; o < n.NLEN; o++)
                ((r = s & (this.w[o] ^ t.w[o])),
                  (this.w[o] ^= r),
                  (t.w[o] ^= r));
            },
            cmove: function (t, i) {
              var r,
                o = i;
              for (o = ~(o - 1), r = 0; r < n.NLEN; r++)
                this.w[r] ^= (this.w[r] ^ t.w[r]) & o;
            },
            copy: function (t) {
              var i;
              for (i = 0; i < n.NLEN; i++) this.w[i] = t.w[i];
              return this;
            },
            hcopy: function (t) {
              var i;
              for (i = 0; i < n.NLEN; i++) this.w[i] = t.w[i];
              return this;
            },
            rcopy: function (t) {
              var i;
              for (i = 0; i < n.NLEN; i++) this.w[i] = t[i];
              return this;
            },
            xortop: function (t) {
              this.w[n.NLEN - 1] ^= t;
            },
            ortop: function (t) {
              this.w[n.NLEN - 1] |= t;
            },
            norm: function () {
              var t,
                i,
                r = 0;
              for (i = 0; i < n.NLEN - 1; i++)
                ((t = this.w[i] + r),
                  (this.w[i] = t & n.BMASK),
                  (r = t >> n.BASEBITS));
              return (
                (this.w[n.NLEN - 1] = this.w[n.NLEN - 1] + r),
                this.w[n.NLEN - 1] >> ((8 * n.MODBYTES) % n.BASEBITS)
              );
            },
            fshr: function (t) {
              var i, r;
              for (i = this.w[0] & ((1 << t) - 1), r = 0; r < n.NLEN - 1; r++)
                this.w[r] =
                  (this.w[r] >> t) |
                  ((this.w[r + 1] << (n.BASEBITS - t)) & n.BMASK);
              return ((this.w[n.NLEN - 1] = this.w[n.NLEN - 1] >> t), i);
            },
            shr: function (t) {
              var i,
                r = t % n.BASEBITS,
                o = Math.floor(t / n.BASEBITS);
              for (i = 0; i < n.NLEN - o - 1; i++)
                this.w[i] =
                  (this.w[o + i] >> r) |
                  ((this.w[o + i + 1] << (n.BASEBITS - r)) & n.BMASK);
              for (
                this.w[n.NLEN - o - 1] = this.w[n.NLEN - 1] >> r,
                  i = n.NLEN - o;
                i < n.NLEN;
                i++
              )
                this.w[i] = 0;
              return this;
            },
            fshl: function (t) {
              var i;
              for (
                this.w[n.NLEN - 1] =
                  (this.w[n.NLEN - 1] << t) |
                  (this.w[n.NLEN - 2] >> (n.BASEBITS - t)),
                  i = n.NLEN - 2;
                i > 0;
                i--
              )
                this.w[i] =
                  ((this.w[i] << t) & n.BMASK) |
                  (this.w[i - 1] >> (n.BASEBITS - t));
              return (
                (this.w[0] = (this.w[0] << t) & n.BMASK),
                this.w[n.NLEN - 1] >> ((8 * n.MODBYTES) % n.BASEBITS)
              );
            },
            shl: function (t) {
              var i,
                r = t % n.BASEBITS,
                o = Math.floor(t / n.BASEBITS);
              for (
                this.w[n.NLEN - 1] = this.w[n.NLEN - 1 - o] << r,
                  n.NLEN > o + 2 &&
                    (this.w[n.NLEN - 1] |=
                      this.w[n.NLEN - o - 2] >> (n.BASEBITS - r)),
                  i = n.NLEN - 2;
                i > o;
                i--
              )
                this.w[i] =
                  ((this.w[i - o] << r) & n.BMASK) |
                  (this.w[i - o - 1] >> (n.BASEBITS - r));
              for (this.w[o] = (this.w[0] << r) & n.BMASK, i = 0; i < o; i++)
                this.w[i] = 0;
              return this;
            },
            nbits: function () {
              var t,
                i,
                r = n.NLEN - 1;
              this.norm();
              while (r >= 0 && 0 === this.w[r]) r--;
              if (r < 0) return 0;
              ((t = n.BASEBITS * r), (i = this.w[r]));
              while (0 !== i) ((i = Math.floor(i / 2)), t++);
              return t;
            },
            toString: function () {
              var t,
                i,
                r = "",
                o = this.nbits();
              for (
                o % 4 === 0
                  ? (o = Math.floor(o / 4))
                  : ((o = Math.floor(o / 4)), o++),
                  o < 2 * n.MODBYTES && (o = 2 * n.MODBYTES),
                  i = o - 1;
                i >= 0;
                i--
              )
                ((t = new n(0)),
                  t.copy(this),
                  t.shr(4 * i),
                  (r += (15 & t.w[0]).toString(16)));
              return r;
            },
            add: function (t) {
              var i;
              for (i = 0; i < n.NLEN; i++) this.w[i] += t.w[i];
              return this;
            },
            plus: function (t) {
              var i,
                r = new n(0);
              for (i = 0; i < n.NLEN; i++) r.w[i] = this.w[i] + t.w[i];
              return r;
            },
            inc: function (t) {
              return (this.norm(), (this.w[0] += t), this);
            },
            sub: function (t) {
              var i;
              for (i = 0; i < n.NLEN; i++) this.w[i] -= t.w[i];
              return this;
            },
            rsub: function (t) {
              var i;
              for (i = 0; i < n.NLEN; i++) this.w[i] = t.w[i] - this.w[i];
              return this;
            },
            dec: function (t) {
              return (this.norm(), (this.w[0] -= t), this);
            },
            minus: function (t) {
              var i,
                r = new n(0);
              for (i = 0; i < n.NLEN; i++) r.w[i] = this.w[i] - t.w[i];
              return r;
            },
            imul: function (t) {
              var i;
              for (i = 0; i < n.NLEN; i++) this.w[i] *= t;
              return this;
            },
            tobytearray: function (t, i) {
              var r,
                o = new n(0);
              for (this.norm(), o.copy(this), r = n.MODBYTES - 1; r >= 0; r--)
                ((t[r + i] = 255 & o.w[0]), o.fshr(8));
              return this;
            },
            toBytes: function (t) {
              this.tobytearray(t, 0);
            },
            muladd: function (t, i, r, o) {
              var s = t * i + r + this.w[o];
              return ((this.w[o] = s & n.BMASK), (s - this.w[o]) * n.MODINV);
            },
            pmul: function (t) {
              var i,
                r,
                o = 0;
              for (r = 0; r < n.NLEN; r++)
                ((i = this.w[r]),
                  (this.w[r] = 0),
                  (o = this.muladd(i, t, o, r)));
              return o;
            },
            pxmul: function (i) {
              var r,
                o = new t.DBIG(0),
                s = 0;
              for (r = 0; r < n.NLEN; r++) s = o.muladd(this.w[r], i, s, r);
              return ((o.w[n.NLEN] = s), o);
            },
            div3: function () {
              var t,
                i,
                r,
                o = 0;
              for (
                this.norm(), i = 1 << n.BASEBITS, r = n.NLEN - 1;
                r >= 0;
                r--
              )
                ((t = o * i + this.w[r]),
                  (this.w[r] = Math.floor(t / 3)),
                  (o = t % 3));
              return o;
            },
            mod2m: function (t) {
              var i, r, o, s;
              for (
                r = Math.floor(t / n.BASEBITS),
                  o = t % n.BASEBITS,
                  s = (1 << o) - 1,
                  this.w[r] &= s,
                  i = r + 1;
                i < n.NLEN;
                i++
              )
                this.w[i] = 0;
            },
            invmod2m: function () {
              var t,
                i,
                r,
                o = new n(0),
                s = new n(0),
                e = new n(0);
              for (
                o.inc(n.invmod256(this.lastbits(8))), t = 8;
                t < n.BIGBITS;
                t <<= 1
              )
                (o.norm(),
                  s.copy(this),
                  s.mod2m(t),
                  (i = n.smul(o, s)),
                  i.shr(t),
                  e.copy(this),
                  e.shr(t),
                  e.mod2m(t),
                  (r = n.smul(o, e)),
                  r.mod2m(t),
                  i.add(r),
                  i.norm(),
                  (s = n.smul(i, o)),
                  i.copy(s),
                  i.mod2m(t),
                  r.one(),
                  r.shl(t),
                  i.rsub(r),
                  i.norm(),
                  i.shl(t),
                  o.add(i));
              (o.mod2m(n.BIGBITS), this.copy(o), this.norm());
            },
            mod: function (t) {
              var i = 0,
                r = new n(0);
              if ((this.norm(), !(n.comp(this, t) < 0))) {
                do {
                  (t.fshl(1), i++);
                } while (n.comp(this, t) >= 0);
                while (i > 0)
                  (t.fshr(1),
                    r.copy(this),
                    r.sub(t),
                    r.norm(),
                    this.cmove(r, 1 - ((r.w[n.NLEN - 1] >> (n.CHUNK - 1)) & 1)),
                    i--);
              }
            },
            div: function (t) {
              var i = 0,
                r = 0,
                o = new n(1),
                s = new n(0),
                e = new n(0);
              (this.norm(), s.copy(this), this.zero());
              while (n.comp(s, t) >= 0) (o.fshl(1), t.fshl(1), i++);
              while (i > 0)
                (t.fshr(1),
                  o.fshr(1),
                  e.copy(s),
                  e.sub(t),
                  e.norm(),
                  (r = 1 - ((e.w[n.NLEN - 1] >> (n.CHUNK - 1)) & 1)),
                  s.cmove(e, r),
                  e.copy(this),
                  e.add(o),
                  e.norm(),
                  this.cmove(e, r),
                  i--);
            },
            parity: function () {
              return this.w[0] % 2;
            },
            bit: function (t) {
              return (this.w[Math.floor(t / n.BASEBITS)] &
                (1 << (t % n.BASEBITS))) >
                0
                ? 1
                : 0;
            },
            lastbits: function (t) {
              var n = (1 << t) - 1;
              return (this.norm(), this.w[0] & n);
            },
            isok: function () {
              var t,
                i = !0;
              for (t = 0; t < n.NLEN; t++)
                this.w[t] >> n.BASEBITS != 0 && (i = !1);
              return i;
            },
            jacobi: function (t) {
              var i,
                r,
                o = 0,
                s = new n(0),
                e = new n(0),
                h = new n(0),
                u = new n(0),
                c = new n(1);
              if (
                0 === t.parity() ||
                0 === n.comp(this, u) ||
                n.comp(t, c) <= 0
              )
                return 0;
              (this.norm(), e.copy(this), h.copy(t), e.mod(t));
              while (n.comp(h, c) > 0) {
                if (0 === n.comp(e, u)) return 0;
                ((i = h.lastbits(3)), (r = 0));
                while (0 === e.parity()) (r++, e.shr(1));
                (r % 2 == 1 && (o += (i * i - 1) / 8),
                  (o += ((i - 1) * (e.lastbits(2) - 1)) / 4),
                  s.copy(h),
                  s.mod(e),
                  h.copy(e),
                  e.copy(s),
                  (o %= 2));
              }
              return 0 === o ? 1 : -1;
            },
            invmodp: function (t) {
              var i = new n(0),
                r = new n(0),
                o = new n(1),
                s = new n(0),
                e = new n(0),
                h = new n(1);
              (this.mod(t), i.copy(this), r.copy(t));
              while (0 !== n.comp(i, h) && 0 !== n.comp(r, h)) {
                while (0 === i.parity())
                  (i.shr(1),
                    0 !== o.parity() && (o.add(t), o.norm()),
                    o.shr(1));
                while (0 === r.parity())
                  (r.shr(1),
                    0 !== s.parity() && (s.add(t), s.norm()),
                    s.shr(1));
                n.comp(i, r) >= 0
                  ? (i.sub(r),
                    i.norm(),
                    n.comp(o, s) >= 0
                      ? o.sub(s)
                      : (e.copy(t), e.sub(s), o.add(e)),
                    o.norm())
                  : (r.sub(i),
                    r.norm(),
                    n.comp(s, o) >= 0
                      ? s.sub(o)
                      : (e.copy(t), e.sub(o), s.add(e)),
                    s.norm());
              }
              0 === n.comp(i, h) ? this.copy(o) : this.copy(s);
            },
            powmod: function (t, i) {
              var r,
                o = new n(1),
                s = new n(0),
                e = new n(0);
              for (this.norm(), t.norm(), s.copy(t), e.copy(this); ; ) {
                if (
                  ((r = s.parity()),
                  s.fshr(1),
                  1 == r && (o = n.modmul(o, e, i)),
                  s.iszilch())
                )
                  break;
                e = n.modsqr(e, i);
              }
              return o;
            },
          }),
          (n.frombytearray = function (t, i) {
            var r,
              o = new n(0);
            for (r = 0; r < n.MODBYTES; r++)
              (o.fshl(8), (o.w[0] += 255 & t[r + i]));
            return o;
          }),
          (n.fromBytes = function (t) {
            return n.frombytearray(t, 0);
          }),
          (n.smul = function (t, i) {
            var r,
              o,
              s,
              e = new n(0);
            for (o = 0; o < n.NLEN; o++)
              for (r = 0, s = 0; s < n.NLEN; s++)
                o + s < n.NLEN && (r = e.muladd(t.w[o], i.w[s], r, o + s));
            return e;
          }),
          (n.comp = function (t, i) {
            var r;
            for (r = n.NLEN - 1; r >= 0; r--)
              if (t.w[r] != i.w[r]) return t.w[r] > i.w[r] ? 1 : -1;
            return 0;
          }),
          (n.random = function (t) {
            var i,
              r,
              o = new n(0),
              s = 0,
              e = 0;
            for (i = 0; i < 8 * n.MODBYTES; i++)
              (0 === s ? (e = t.getByte()) : (e >>= 1),
                (r = 1 & e),
                o.shl(1),
                (o.w[0] += r),
                s++,
                (s &= 7));
            return o;
          }),
          (n.randomnum = function (n, i) {
            var r,
              o,
              s,
              e = new t.DBIG(0),
              h = 0,
              u = 0;
            for (r = 0; r < 2 * n.nbits(); r++)
              (0 === h ? (u = i.getByte()) : (u >>= 1),
                (o = 1 & u),
                e.shl(1),
                (e.w[0] += o),
                h++,
                (h &= 7));
            return ((s = e.mod(n)), s);
          }),
          (n.mul = function (i, r) {
            var o,
              s,
              e,
              h,
              u,
              c,
              f = new t.DBIG(0),
              a = [];
            for (h = 0; h < n.NLEN; h++) a[h] = i.w[h] * r.w[h];
            for (s = a[0], e = s, f.w[0] = e, u = 1; u < n.NLEN; u++) {
              for (s += a[u], e = s, h = u; h >= 1 + Math.floor(u / 2); h--)
                e += (i.w[h] - i.w[u - h]) * (r.w[u - h] - r.w[h]);
              f.w[u] = e;
            }
            for (u = n.NLEN; u < 2 * n.NLEN - 1; u++) {
              for (
                s -= a[u - n.NLEN], e = s, h = n.NLEN - 1;
                h >= 1 + Math.floor(u / 2);
                h--
              )
                e += (i.w[h] - i.w[u - h]) * (r.w[u - h] - r.w[h]);
              f.w[u] = e;
            }
            for (c = 0, h = 0; h < n.DNLEN - 1; h++)
              ((o = f.w[h] + c),
                (f.w[h] = o & n.BMASK),
                (c = (o - f.w[h]) * n.MODINV));
            return ((f.w[n.DNLEN - 1] = c), f);
          }),
          (n.sqr = function (i) {
            var r,
              o,
              s,
              e,
              h,
              u = new t.DBIG(0);
            for (u.w[0] = i.w[0] * i.w[0], s = 1; s < n.NLEN - 1; ) {
              for (o = i.w[s] * i.w[0], e = 1; e < (s + 1) >> 1; e++)
                o += i.w[s - e] * i.w[e];
              for (
                o += o, u.w[s] = o, s++, o = i.w[s] * i.w[0], e = 1;
                e < (s + 1) >> 1;
                e++
              )
                o += i.w[s - e] * i.w[e];
              ((o += o), (o += i.w[s >> 1] * i.w[s >> 1]), (u.w[s] = o), s++);
            }
            for (s = n.NLEN - 1 + (n.NLEN % 2); s < n.DNLEN - 3; ) {
              for (
                o = i.w[n.NLEN - 1] * i.w[s - n.NLEN + 1], e = s - n.NLEN + 2;
                e < (s + 1) >> 1;
                e++
              )
                o += i.w[s - e] * i.w[e];
              for (
                o += o,
                  u.w[s] = o,
                  s++,
                  o = i.w[n.NLEN - 1] * i.w[s - n.NLEN + 1],
                  e = s - n.NLEN + 2;
                e < (s + 1) >> 1;
                e++
              )
                o += i.w[s - e] * i.w[e];
              ((o += o), (o += i.w[s >> 1] * i.w[s >> 1]), (u.w[s] = o), s++);
            }
            for (
              o = i.w[n.NLEN - 2] * i.w[n.NLEN - 1],
                o += o,
                u.w[n.DNLEN - 3] = o,
                o = i.w[n.NLEN - 1] * i.w[n.NLEN - 1],
                u.w[n.DNLEN - 2] = o,
                h = 0,
                e = 0;
              e < n.DNLEN - 1;
              e++
            )
              ((r = u.w[e] + h),
                (u.w[e] = r & n.BMASK),
                (h = (r - u.w[e]) * n.MODINV));
            return ((u.w[n.DNLEN - 1] = h), u);
          }),
          (n.monty = function (t, i, r) {
            var o,
              s,
              e,
              h,
              u,
              c = new n(0),
              f = [],
              a = [];
            for (
              e = r.w[0],
                f[0] = ((e & n.BMASK) * i) & n.BMASK,
                e += f[0] * t.w[0],
                s = r.w[1] + e * n.MODINV,
                o = 0,
                u = 1;
              u < n.NLEN;
              u++
            ) {
              for (
                e = s + o + f[0] * t.w[u], h = u - 1;
                h > Math.floor(u / 2);
                h--
              )
                e += (f[u - h] - f[h]) * (t.w[h] - t.w[u - h]);
              ((f[u] = ((e & n.BMASK) * i) & n.BMASK),
                (e += f[u] * t.w[0]),
                (s = e * n.MODINV + r.w[u + 1]),
                (a[u] = f[u] * t.w[u]),
                (o += a[u]));
            }
            for (u = n.NLEN; u < 2 * n.NLEN - 1; u++) {
              for (e = s + o, h = n.NLEN - 1; h >= 1 + Math.floor(u / 2); h--)
                e += (f[u - h] - f[h]) * (t.w[h] - t.w[u - h]);
              ((c.w[u - n.NLEN] = e & n.BMASK),
                (s = (e - c.w[u - n.NLEN]) * n.MODINV + r.w[u + 1]),
                (o -= a[u - n.NLEN + 1]));
            }
            return ((c.w[n.NLEN - 1] = s & n.BMASK), c);
          }),
          (n.modmul = function (t, i, r) {
            var o;
            return (t.mod(r), i.mod(r), (o = n.mul(t, i)), o.mod(r));
          }),
          (n.modsqr = function (t, i) {
            var r;
            return (t.mod(i), (r = n.sqr(t)), r.mod(i));
          }),
          (n.modneg = function (t, n) {
            return (t.mod(n), n.minus(t));
          }),
          (n.invmod256 = function (t) {
            var n, i, r, o, s;
            return (
              (i = 0),
              (s = (t >> 1) & 1),
              (i += s),
              (i &= 1),
              (i = 2 - i),
              (i <<= 1),
              (n = i + 1),
              (o = 3 & t),
              (i = n * o),
              (i >>= 2),
              (s = (t >> 2) & 3),
              (r = (n * s) & 3),
              (i += r),
              (i *= n),
              (i &= 3),
              (i = 4 - i),
              (i <<= 2),
              (n += i),
              (o = 15 & t),
              (i = n * o),
              (i >>= 4),
              (s = (t >> 4) & 15),
              (r = (n * s) & 15),
              (i += r),
              (i *= n),
              (i &= 15),
              (i = 16 - i),
              (i <<= 4),
              (n += i),
              n
            );
          }),
          n
        );
      }),
        (o = function (t) {
          "use strict";
          var n = function (t) {
            ((this.w = []), this.zero(), (this.w[0] = t));
          };
          return (
            (n.prototype = {
              zero: function () {
                for (var n = 0; n < t.BIG.DNLEN; n++) this.w[n] = 0;
                return this;
              },
              copy: function (n) {
                for (var i = 0; i < t.BIG.DNLEN; i++) this.w[i] = n.w[i];
                return this;
              },
              hcopy: function (n) {
                var i;
                for (i = 0; i < t.BIG.NLEN; i++) this.w[i] = n.w[i];
                for (i = t.BIG.NLEN; i < t.BIG.DNLEN; i++) this.w[i] = 0;
                return this;
              },
              ucopy: function (n) {
                var i;
                for (i = 0; i < t.BIG.NLEN; i++) this.w[i] = 0;
                for (i = t.BIG.NLEN; i < t.BIG.DNLEN; i++)
                  this.w[i] = n.w[i - t.BIG.NLEN];
                return this;
              },
              norm: function () {
                var n,
                  i,
                  r = 0;
                for (i = 0; i < t.BIG.DNLEN - 1; i++)
                  ((n = this.w[i] + r),
                    (this.w[i] = n & t.BIG.BMASK),
                    (r = n >> t.BIG.BASEBITS));
                return (
                  (this.w[t.BIG.DNLEN - 1] = this.w[t.BIG.DNLEN - 1] + r),
                  this
                );
              },
              muladd: function (n, i, r, o) {
                var s = n * i + r + this.w[o];
                return (
                  (this.w[o] = s & t.BIG.BMASK),
                  (s - this.w[o]) * t.BIG.MODINV
                );
              },
              shr: function (n) {
                var i,
                  r = n % t.BIG.BASEBITS,
                  o = Math.floor(n / t.BIG.BASEBITS);
                for (i = 0; i < t.BIG.DNLEN - o - 1; i++)
                  this.w[i] =
                    (this.w[o + i] >> r) |
                    ((this.w[o + i + 1] << (t.BIG.BASEBITS - r)) & t.BIG.BMASK);
                for (
                  this.w[t.BIG.DNLEN - o - 1] = this.w[t.BIG.DNLEN - 1] >> r,
                    i = t.BIG.DNLEN - o;
                  i < t.BIG.DNLEN;
                  i++
                )
                  this.w[i] = 0;
                return this;
              },
              shl: function (n) {
                var i,
                  r = n % t.BIG.BASEBITS,
                  o = Math.floor(n / t.BIG.BASEBITS);
                for (
                  this.w[t.BIG.DNLEN - 1] =
                    (this.w[t.BIG.DNLEN - 1 - o] << r) |
                    (this.w[t.BIG.DNLEN - o - 2] >> (t.BIG.BASEBITS - r)),
                    i = t.BIG.DNLEN - 2;
                  i > o;
                  i--
                )
                  this.w[i] =
                    ((this.w[i - o] << r) & t.BIG.BMASK) |
                    (this.w[i - o - 1] >> (t.BIG.BASEBITS - r));
                for (
                  this.w[o] = (this.w[0] << r) & t.BIG.BMASK, i = 0;
                  i < o;
                  i++
                )
                  this.w[i] = 0;
                return this;
              },
              cmove: function (n, i) {
                var r,
                  o = i;
                for (o = ~(o - 1), r = 0; r < t.BIG.DNLEN; r++)
                  this.w[r] ^= (this.w[r] ^ n.w[r]) & o;
              },
              add: function (n) {
                for (var i = 0; i < t.BIG.DNLEN; i++) this.w[i] += n.w[i];
              },
              sub: function (n) {
                for (var i = 0; i < t.BIG.DNLEN; i++) this.w[i] -= n.w[i];
              },
              rsub: function (n) {
                for (var i = 0; i < t.BIG.DNLEN; i++)
                  this.w[i] = n.w[i] - this.w[i];
              },
              nbits: function () {
                var n,
                  i,
                  r = t.BIG.DNLEN - 1;
                this.norm();
                while (r >= 0 && 0 === this.w[r]) r--;
                if (r < 0) return 0;
                ((n = t.BIG.BASEBITS * r), (i = this.w[r]));
                while (0 !== i) ((i = Math.floor(i / 2)), n++);
                return n;
              },
              toString: function () {
                var t,
                  i,
                  r = "",
                  o = this.nbits();
                for (
                  o % 4 === 0
                    ? (o = Math.floor(o / 4))
                    : ((o = Math.floor(o / 4)), o++),
                    i = o - 1;
                  i >= 0;
                  i--
                )
                  ((t = new n(0)),
                    t.copy(this),
                    t.shr(4 * i),
                    (r += (15 & t.w[0]).toString(16)));
                return r;
              },
              mod: function (i) {
                var r = 0,
                  o = new n(0),
                  s = new n(0),
                  e = new t.BIG(0);
                if (
                  (this.norm(), o.hcopy(i), e.hcopy(this), n.comp(this, o) < 0)
                )
                  return e;
                do {
                  (o.shl(1), r++);
                } while (n.comp(this, o) >= 0);
                while (r > 0)
                  (o.shr(1),
                    s.copy(this),
                    s.sub(o),
                    s.norm(),
                    this.cmove(
                      s,
                      1 - ((s.w[t.BIG.DNLEN - 1] >> (t.BIG.CHUNK - 1)) & 1),
                    ),
                    r--);
                return (e.hcopy(this), e);
              },
              div: function (i) {
                var r = 0,
                  o = 0,
                  s = new n(0),
                  e = new n(0),
                  h = new t.BIG(0),
                  u = new t.BIG(0),
                  c = new t.BIG(1);
                (s.hcopy(i), this.norm());
                while (n.comp(this, s) >= 0) (c.fshl(1), s.shl(1), o++);
                while (o > 0)
                  (s.shr(1),
                    c.shr(1),
                    e.copy(this),
                    e.sub(s),
                    e.norm(),
                    (r = 1 - ((e.w[t.BIG.DNLEN - 1] >> (t.BIG.CHUNK - 1)) & 1)),
                    this.cmove(e, r),
                    h.copy(u),
                    h.add(c),
                    h.norm(),
                    u.cmove(h, r),
                    o--);
                return u;
              },
              split: function (n) {
                var i,
                  r,
                  o = new t.BIG(0),
                  s = n % t.BIG.BASEBITS,
                  e = this.w[t.BIG.DNLEN - 1] << (t.BIG.BASEBITS - s);
                for (r = t.BIG.DNLEN - 2; r >= t.BIG.NLEN - 1; r--)
                  ((i = (this.w[r] >> s) | e),
                    (e = (this.w[r] << (t.BIG.BASEBITS - s)) & t.BIG.BMASK),
                    (o.w[r - t.BIG.NLEN + 1] = i));
                return ((this.w[t.BIG.NLEN - 1] &= (1 << s) - 1), o);
              },
            }),
            (n.comp = function (n, i) {
              var r;
              for (r = t.BIG.DNLEN - 1; r >= 0; r--)
                if (n.w[r] != i.w[r]) return n.w[r] > i.w[r] ? 1 : -1;
              return 0;
            }),
            n
          );
        }),
        "undefined" !== typeof t.exports && (t.exports = { BIG: r, DBIG: o }));
    },
    3504: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = {
          INVALID_PUBLIC_KEY: -2,
          ERROR: -3,
          INVALID: -4,
          EFS: t.BIG.MODBYTES,
          EGS: t.BIG.MODBYTES,
          EAS: 16,
          EBS: 16,
          SHA256: 32,
          SHA384: 48,
          SHA512: 64,
          HASH_TYPE: 64,
          inttobytes: function (t, n) {
            var i,
              r = [];
            for (i = 0; i < n; i++) r[i] = 0;
            i = n;
            while (t > 0 && i > 0)
              (i--, (r[i] = 255 & t), (t = Math.floor(t / 256)));
            return r;
          },
          bytestostring: function (t) {
            var n,
              i,
              r = "",
              o = t.length;
            for (i = 0; i < o; i++) ((n = t[i]), (r += String.fromCharCode(n)));
            return r;
          },
          stringtobytes: function (t) {
            var n,
              i = [];
            for (n = 0; n < t.length; n++) i.push(t.charCodeAt(n));
            return i;
          },
          hashit: function (n, i, r, o, s) {
            var e,
              h,
              u,
              c,
              f = [];
            if (
              (n == this.SHA256
                ? ((e = new t.HASH256()),
                  e.process_array(i),
                  r > 0 && e.process_num(r),
                  null != o && e.process_array(o),
                  (f = e.hash()))
                : n == this.SHA384
                  ? ((e = new t.HASH384()),
                    e.process_array(i),
                    r > 0 && e.process_num(r),
                    null != o && e.process_array(o),
                    (f = e.hash()))
                  : n == this.SHA512 &&
                    ((e = new t.HASH512()),
                    e.process_array(i),
                    r > 0 && e.process_num(r),
                    null != o && e.process_array(o),
                    (f = e.hash())),
              0 == f.length)
            )
              return null;
            if (0 == s) return f;
            if (((h = []), (c = t.BIG.MODBYTES), n >= c))
              for (u = 0; u < c; u++) h[u] = f[u];
            else {
              for (u = 0; u < n; u++) h[u + c - n] = f[u];
              for (u = 0; u < c - n; u++) h[u] = 0;
            }
            return h;
          },
          KDF1: function (t, n, i) {
            var r,
              o,
              s,
              e = t,
              h = [],
              u = [],
              c = 0;
            for (s = 0; s < h.length; s++) h[s] = 0;
            for (o = Math.floor(i / e), i % e !== 0 && o++, r = 0; r < o; r++)
              if (((u = this.hashit(t, n, r, null, 0)), c + e > i))
                for (s = 0; s < i % e; s++) h[c++] = u[s];
              else for (s = 0; s < e; s++) h[c++] = u[s];
            return h;
          },
          KDF2: function (t, n, i, r) {
            var o,
              s,
              e,
              h = t,
              u = [],
              c = [],
              f = 0;
            for (e = 0; e < u.length; e++) u[e] = 0;
            for (s = Math.floor(r / h), r % h !== 0 && s++, o = 1; o <= s; o++)
              if (((c = this.hashit(t, n, o, i, 0)), f + h > r))
                for (e = 0; e < r % h; e++) u[f++] = c[e];
              else for (e = 0; e < h; e++) u[f++] = c[e];
            return u;
          },
          PBKDF2: function (t, n, i, r, o) {
            var s,
              e,
              h,
              u,
              c,
              f,
              a = new Array(t),
              E = [],
              p = [],
              d = [],
              w = 0;
            for (
              u = Math.floor(o / t), o % t !== 0 && u++, w = 0, s = 1;
              s <= u;
              s++
            ) {
              for (e = 0; e < i.length; e++) p[e] = i[e];
              for (c = this.inttobytes(s, 4), e = 0; e < 4; e++)
                p[i.length + e] = c[e];
              for (this.HMAC(t, p, n, a), e = 0; e < t; e++) E[e] = a[e];
              for (e = 2; e <= r; e++)
                for (this.HMAC(t, E, n, E), h = 0; h < t; h++) a[h] ^= E[h];
              for (e = 0; e < t; e++) d[w++] = a[e];
            }
            for (f = [], s = 0; s < o; s++) f[s] = d[s];
            return f;
          },
          HMAC: function (t, n, i, r) {
            var o,
              s,
              e = r.length,
              h = [],
              u = 64;
            if ((t > 32 && (u = 128), (o = new Array(u)), e < 4)) return 0;
            for (s = 0; s < u; s++) o[s] = 0;
            if (i.length > u)
              for (h = this.hashit(t, i, 0, null, 0), s = 0; s < t; s++)
                o[s] = h[s];
            else for (s = 0; s < i.length; s++) o[s] = i[s];
            for (s = 0; s < u; s++) o[s] ^= 54;
            for (h = this.hashit(t, o, 0, n, 0), s = 0; s < u; s++) o[s] ^= 106;
            for (h = this.hashit(t, o, 0, h, e), s = 0; s < e; s++) r[s] = h[s];
            return 1;
          },
          AES_CBC_IV0_ENCRYPT: function (n, i) {
            var r,
              o,
              s,
              e,
              h,
              u,
              c = new t.AES(),
              f = [],
              a = [];
            for (c.init(t.AES.CBC, n.length, n, null), h = u = 0, r = !1; ; ) {
              for (s = 0; s < 16; s++) {
                if (!(h < i.length)) {
                  r = !0;
                  break;
                }
                f[s] = i[h++];
              }
              if (r) break;
              for (c.encrypt(f), s = 0; s < 16; s++) a[u++] = f[s];
            }
            for (o = 16 - s, e = s; e < 16; e++) f[e] = o;
            for (c.encrypt(f), s = 0; s < 16; s++) a[u++] = f[s];
            return (c.end(), a);
          },
          AES_CBC_IV0_DECRYPT: function (n, i) {
            var r,
              o,
              s,
              e,
              h,
              u,
              c = new t.AES(),
              f = [],
              a = [],
              E = 0,
              p = 0;
            if ((c.init(t.AES.CBC, n.length, n, null), 0 === i.length))
              return [];
            for (o = i[E++], s = !1; ; ) {
              for (u = 0; u < 16; u++) {
                if (((f[u] = o), E >= i.length)) {
                  s = !0;
                  break;
                }
                o = i[E++];
              }
              if ((c.decrypt(f), s)) break;
              for (u = 0; u < 16; u++) a[p++] = f[u];
            }
            if (
              (c.end(),
              (e = !1),
              (h = f[15]),
              (15 != u || h < 1 || h > 16) && (e = !0),
              h >= 2 && h <= 16)
            )
              for (u = 16 - h; u < 16; u++) f[u] != h && (e = !0);
            if (!e) for (u = 0; u < 16 - h; u++) a[p++] = f[u];
            if (((r = []), e)) return r;
            for (u = 0; u < p; u++) r[u] = a[u];
            return r;
          },
          KEY_PAIR_GENERATE: function (n, i, r) {
            var o,
              s,
              e,
              h,
              u,
              c,
              f = 0;
            return (
              (u = new t.ECP(0)),
              (s = new t.BIG(0)),
              s.rcopy(t.ROM_CURVE.CURVE_Gx),
              t.ECP.CURVETYPE != t.ECP.MONTGOMERY
                ? ((e = new t.BIG(0)),
                  e.rcopy(t.ROM_CURVE.CURVE_Gy),
                  u.setxy(s, e))
                : u.setx(s),
              (o = new t.BIG(0)),
              o.rcopy(t.ROM_CURVE.CURVE_Order),
              null === n
                ? ((h = t.BIG.fromBytes(i)), h.mod(o))
                : (h = t.BIG.randomnum(o, n)),
              h.toBytes(i),
              (c = u.mul(h)),
              c.toBytes(r),
              f
            );
          },
          PUBLIC_KEY_VALIDATE: function (n) {
            var i,
              r,
              o,
              s,
              e = t.ECP.fromBytes(n),
              h = 0;
            if (
              ((i = new t.BIG(0)),
              i.rcopy(t.ROM_CURVE.CURVE_Order),
              e.is_infinity() && (h = this.INVALID_PUBLIC_KEY),
              0 === h)
            ) {
              ((r = new t.BIG(0)),
                r.rcopy(t.ROM_FIELD.Modulus),
                (o = r.nbits()),
                (s = new t.BIG(1)),
                s.shl(Math.floor((o + 4) / 2)),
                s.add(r),
                s.div(i));
              while (0 == s.parity()) (s.shr(1), e.dbl());
              (s.isunity() || (e = e.mul(s)),
                e.is_infinity() && (h = this.INVALID_PUBLIC_KEY));
            }
            return h;
          },
          ECPSVDP_DH: function (n, i, r) {
            var o,
              s,
              e,
              h,
              u = [],
              c = 0;
            if (
              ((s = t.BIG.fromBytes(n)),
              (h = t.ECP.fromBytes(i)),
              h.is_infinity() && (c = this.ERROR),
              0 === c)
            )
              if (
                ((o = new t.BIG(0)),
                o.rcopy(t.ROM_CURVE.CURVE_Order),
                s.mod(o),
                (h = h.mul(s)),
                h.is_infinity())
              )
                c = this.ERROR;
              else
                for (h.getX().toBytes(u), e = 0; e < this.EFS; e++) r[e] = u[e];
            return c;
          },
          ECPSP_DSA: function (n, i, r, o, s, e) {
            var h,
              u,
              c,
              f,
              a,
              E,
              p,
              d,
              w,
              y,
              I,
              l,
              m,
              B,
              _ = [];
            ((B = this.hashit(n, o, 0, null, t.BIG.MODBYTES)),
              (u = new t.BIG(0)),
              u.rcopy(t.ROM_CURVE.CURVE_Gx),
              (c = new t.BIG(0)),
              c.rcopy(t.ROM_CURVE.CURVE_Gy),
              (l = new t.ECP(0)),
              l.setxy(u, c),
              (f = new t.BIG(0)),
              f.rcopy(t.ROM_CURVE.CURVE_Order),
              (a = t.BIG.fromBytes(r)),
              (E = t.BIG.fromBytes(B)),
              (p = new t.BIG(0)),
              (d = new t.BIG(0)),
              (m = new t.ECP()));
            do {
              ((w = t.BIG.randomnum(f, i)),
                (I = t.BIG.randomnum(f, i)),
                m.copy(l),
                (m = m.mul(w)),
                (y = m.getX()),
                p.copy(y),
                p.mod(f),
                p.iszilch() ||
                  ((w = t.BIG.modmul(w, I, f)),
                  w.invmodp(f),
                  (d = t.BIG.modmul(a, p, f)),
                  d.add(E),
                  (d = t.BIG.modmul(d, I, f)),
                  (d = t.BIG.modmul(w, d, f))));
            } while (d.iszilch());
            for (p.toBytes(_), h = 0; h < this.EFS; h++) s[h] = _[h];
            for (d.toBytes(_), h = 0; h < this.EFS; h++) e[h] = _[h];
            return 0;
          },
          ECPVP_DSA: function (n, i, r, o, s) {
            var e,
              h,
              u,
              c,
              f,
              a,
              E,
              p,
              d,
              w,
              y = [],
              I = 0;
            return (
              (y = this.hashit(n, r, 0, null, t.BIG.MODBYTES)),
              (h = new t.BIG(0)),
              h.rcopy(t.ROM_CURVE.CURVE_Gx),
              (u = new t.BIG(0)),
              u.rcopy(t.ROM_CURVE.CURVE_Gy),
              (p = new t.ECP(0)),
              p.setxy(h, u),
              (e = new t.BIG(0)),
              e.rcopy(t.ROM_CURVE.CURVE_Order),
              (f = t.BIG.fromBytes(o)),
              (a = t.BIG.fromBytes(s)),
              (c = t.BIG.fromBytes(y)),
              (f.iszilch() ||
                t.BIG.comp(f, e) >= 0 ||
                a.iszilch() ||
                t.BIG.comp(a, e) >= 0) &&
                (I = this.INVALID),
              0 === I &&
                (a.invmodp(e),
                (c = t.BIG.modmul(c, a, e)),
                (E = t.BIG.modmul(f, a, e)),
                (d = t.ECP.fromBytes(i)),
                d.is_infinity()
                  ? (I = this.ERROR)
                  : ((w = new t.ECP()),
                    w.copy(d),
                    (w = w.mul2(E, p, c)),
                    w.is_infinity()
                      ? (I = this.INVALID)
                      : ((a = w.getX()),
                        a.mod(e),
                        0 !== t.BIG.comp(a, f) && (I = this.INVALID)))),
              I
            );
          },
          ECIES_ENCRYPT: function (t, n, i, r, o, s, e, h) {
            var u,
              c,
              f,
              a,
              E = [],
              p = [],
              d = [],
              w = [],
              y = [],
              I = [];
            if (0 !== this.KEY_PAIR_GENERATE(r, y, e)) return I;
            if (0 !== this.ECPSVDP_DH(y, o, E)) return I;
            for (a = 0; a < 2 * this.EFS + 1; a++) p[a] = e[a];
            for (a = 0; a < this.EFS; a++) p[2 * this.EFS + 1 + a] = E[a];
            for (u = this.KDF2(t, p, n, this.EFS), a = 0; a < this.EAS; a++)
              ((d[a] = u[a]), (w[a] = u[this.EAS + a]));
            for (
              I = this.AES_CBC_IV0_ENCRYPT(d, s),
                c = this.inttobytes(i.length, 8),
                f = [],
                a = 0;
              a < I.length;
              a++
            )
              f[a] = I[a];
            for (a = 0; a < i.length; a++) f[I.length + a] = i[a];
            for (a = 0; a < 8; a++) f[I.length + i.length + a] = c[a];
            return (this.HMAC(t, f, w, h), I);
          },
          ECIES_DECRYPT: function (t, n, i, r, o, s, e) {
            var h,
              u,
              c,
              f,
              a,
              E = [],
              p = [],
              d = [],
              w = [],
              y = new Array(s.length),
              I = [];
            if (0 !== this.ECPSVDP_DH(e, r, E)) return I;
            for (a = 0; a < 2 * this.EFS + 1; a++) p[a] = r[a];
            for (a = 0; a < this.EFS; a++) p[2 * this.EFS + 1 + a] = E[a];
            for (h = this.KDF2(t, p, n, this.EFS), a = 0; a < this.EAS; a++)
              ((d[a] = h[a]), (w[a] = h[this.EAS + a]));
            if (((I = this.AES_CBC_IV0_DECRYPT(d, o)), 0 === I.length))
              return I;
            for (
              u = this.inttobytes(i.length, 8), c = [], a = 0;
              a < o.length;
              a++
            )
              c[a] = o[a];
            for (a = 0; a < i.length; a++) c[o.length + a] = i[a];
            for (a = 0; a < 8; a++) c[o.length + i.length + a] = u[a];
            for (this.HMAC(t, c, w, y), f = !0, a = 0; a < s.length; a++)
              s[a] != y[a] && (f = !1);
            return f ? I : [];
          },
        };
        return n;
      };
      "undefined" !== typeof t.exports && (t.exports.ECDH = r);
    },
    3505: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = function () {
          ((this.x = new t.FP(0)),
            (this.y = new t.FP(1)),
            (this.z = new t.FP(0)),
            (this.INF = !0));
        };
        return (
          (n.WEIERSTRASS = 0),
          (n.EDWARDS = 1),
          (n.MONTGOMERY = 2),
          (n.NOT = 0),
          (n.BN = 1),
          (n.BLS = 2),
          (n.D_TYPE = 0),
          (n.M_TYPE = 1),
          (n.POSITIVEX = 0),
          (n.NEGATIVEX = 1),
          (n.CURVETYPE = t.config["@CT"]),
          (n.CURVE_PAIRING_TYPE = t.config["@PF"]),
          (n.SEXTIC_TWIST = t.config["@ST"]),
          (n.SIGN_OF_X = t.config["@SX"]),
          (n.prototype = {
            is_infinity: function () {
              return (
                !!this.INF ||
                (this.x.reduce(),
                this.z.reduce(),
                n.CURVETYPE == n.EDWARDS
                  ? (this.y.reduce(),
                    (this.INF = this.x.iszilch() && this.y.equals(this.z)))
                  : n.CURVETYPE == n.WEIERSTRASS
                    ? (this.y.reduce(),
                      (this.INF = this.x.iszilch() && this.z.iszilch()))
                    : n.CURVETYPE == n.MONTGOMERY &&
                      (this.INF = this.z.iszilch()),
                this.INF)
              );
            },
            cswap: function (t, i) {
              var r;
              (this.x.cswap(t.x, i),
                n.CURVETYPE != n.MONTGOMERY && this.y.cswap(t.y, i),
                this.z.cswap(t.z, i),
                (r = 0 !== i),
                (r &= this.INF ^ t.INF),
                (this.INF ^= r),
                (t.INF ^= r));
            },
            cmove: function (t, i) {
              var r;
              (this.x.cmove(t.x, i),
                n.CURVETYPE != n.MONTGOMERY && this.y.cmove(t.y, i),
                this.z.cmove(t.z, i),
                (r = 0 !== i),
                (this.INF ^= (this.INF ^ t.INF) & r));
            },
            select: function (t, i) {
              var r = new n(),
                o = i >> 31,
                s = (i ^ o) - o;
              ((s = (s - 1) / 2),
                this.cmove(t[0], n.teq(s, 0)),
                this.cmove(t[1], n.teq(s, 1)),
                this.cmove(t[2], n.teq(s, 2)),
                this.cmove(t[3], n.teq(s, 3)),
                this.cmove(t[4], n.teq(s, 4)),
                this.cmove(t[5], n.teq(s, 5)),
                this.cmove(t[6], n.teq(s, 6)),
                this.cmove(t[7], n.teq(s, 7)),
                r.copy(this),
                r.neg(),
                this.cmove(r, 1 & o));
            },
            equals: function (i) {
              var r, o;
              return (
                !(!this.is_infinity() || !i.is_infinity()) ||
                (!this.is_infinity() &&
                  !i.is_infinity() &&
                  ((r = new t.FP(0)),
                  (o = new t.FP(0)),
                  r.copy(this.x),
                  r.mul(i.z),
                  r.reduce(),
                  o.copy(i.x),
                  o.mul(this.z),
                  o.reduce(),
                  !!r.equals(o) &&
                    !(
                      n.CURVETYPE != n.MONTGOMERY &&
                      (r.copy(this.y),
                      r.mul(i.z),
                      r.reduce(),
                      o.copy(i.y),
                      o.mul(this.z),
                      o.reduce(),
                      !r.equals(o))
                    )))
              );
            },
            copy: function (t) {
              (this.x.copy(t.x),
                n.CURVETYPE != n.MONTGOMERY && this.y.copy(t.y),
                this.z.copy(t.z),
                (this.INF = t.INF));
            },
            neg: function () {
              n.CURVETYPE == n.WEIERSTRASS
                ? (this.y.neg(), this.y.norm())
                : n.CURVETYPE == n.EDWARDS && (this.x.neg(), this.x.norm());
            },
            inf: function () {
              ((this.INF = !0),
                this.x.zero(),
                n.CURVETYPE != n.MONTGOMERY && this.y.one(),
                n.CURVETYPE != n.EDWARDS ? this.z.zero() : this.z.one());
            },
            setxy: function (i, r) {
              var o, s;
              ((this.x = new t.FP(0)),
                this.x.bcopy(i),
                (this.y = new t.FP(0)),
                this.y.bcopy(r),
                (this.z = new t.FP(1)),
                (o = n.RHS(this.x)),
                n.CURVETYPE == n.MONTGOMERY
                  ? 1 == o.jacobi()
                    ? (this.INF = !1)
                    : this.inf()
                  : ((s = new t.FP(0)),
                    s.copy(this.y),
                    s.sqr(),
                    s.equals(o) ? (this.INF = !1) : this.inf()));
            },
            setxi: function (i, r) {
              var o, s;
              ((this.x = new t.FP(0)),
                this.x.bcopy(i),
                (o = n.RHS(this.x)),
                (this.z = new t.FP(1)),
                1 == o.jacobi()
                  ? ((s = o.sqrt()),
                    s.redc().parity() != r && s.neg(),
                    (this.y = s),
                    (this.INF = !1))
                  : this.inf());
            },
            setx: function (i) {
              var r;
              ((this.x = new t.FP(0)),
                this.x.bcopy(i),
                (r = n.RHS(this.x)),
                (this.z = new t.FP(1)),
                1 == r.jacobi()
                  ? (n.CURVETYPE != n.MONTGOMERY && (this.y = r.sqrt()),
                    (this.INF = !1))
                  : (this.INF = !0));
            },
            affine: function () {
              var i;
              this.is_infinity() ||
                ((i = new t.FP(1)),
                this.z.equals(i) ||
                  (this.z.inverse(),
                  (n.CURVETYPE != n.EDWARDS && n.CURVETYPE != n.WEIERSTRASS) ||
                    (this.x.mul(this.z),
                    this.x.reduce(),
                    this.y.mul(this.z),
                    this.y.reduce(),
                    (this.z = i)),
                  n.CURVETYPE == n.MONTGOMERY &&
                    (this.x.mul(this.z), this.x.reduce(), (this.z = i))));
            },
            getX: function () {
              return (this.affine(), this.x.redc());
            },
            getY: function () {
              return (this.affine(), this.y.redc());
            },
            getS: function () {
              this.affine();
              var t = this.getY();
              return t.parity();
            },
            getx: function () {
              return this.x;
            },
            gety: function () {
              return this.y;
            },
            getz: function () {
              return this.z;
            },
            toBytes: function (i) {
              var r,
                o = [];
              for (
                n.CURVETYPE != n.MONTGOMERY ? (i[0] = 4) : (i[0] = 2),
                  this.affine(),
                  this.x.redc().toBytes(o),
                  r = 0;
                r < t.BIG.MODBYTES;
                r++
              )
                i[r + 1] = o[r];
              if (n.CURVETYPE != n.MONTGOMERY)
                for (this.y.redc().toBytes(o), r = 0; r < t.BIG.MODBYTES; r++)
                  i[r + t.BIG.MODBYTES + 1] = o[r];
            },
            toString: function () {
              return this.is_infinity()
                ? "infinity"
                : (this.affine(),
                  n.CURVETYPE == n.MONTGOMERY
                    ? "(" + this.x.redc().toString() + ")"
                    : "(" +
                      this.x.redc().toString() +
                      "," +
                      this.y.redc().toString() +
                      ")");
            },
            dbl: function () {
              var i, r, o, s, e, h, u, c, f, a, E, p, d, w, y, I;
              if (n.CURVETYPE == n.WEIERSTRASS) {
                if (this.INF) return;
                0 == t.ROM_CURVE.CURVE_A
                  ? ((i = new t.FP(0)),
                    i.copy(this.y),
                    i.sqr(),
                    (r = new t.FP(0)),
                    r.copy(this.y),
                    r.mul(this.z),
                    (o = new t.FP(0)),
                    o.copy(this.z),
                    o.sqr(),
                    this.z.copy(i),
                    this.z.add(i),
                    this.z.norm(),
                    this.z.add(this.z),
                    this.z.add(this.z),
                    this.z.norm(),
                    o.imul(3 * t.ROM_CURVE.CURVE_B_I),
                    (e = new t.FP(0)),
                    e.copy(o),
                    e.mul(this.z),
                    (h = new t.FP(0)),
                    h.copy(i),
                    h.add(o),
                    h.norm(),
                    this.z.mul(r),
                    r.copy(o),
                    r.add(o),
                    o.add(r),
                    i.sub(o),
                    i.norm(),
                    h.mul(i),
                    h.add(e),
                    r.copy(this.x),
                    r.mul(this.y),
                    this.x.copy(i),
                    this.x.norm(),
                    this.x.mul(r),
                    this.x.add(this.x),
                    this.x.norm(),
                    this.y.copy(h),
                    this.y.norm())
                  : ((i = new t.FP(0)),
                    i.copy(this.x),
                    (r = new t.FP(0)),
                    r.copy(this.y),
                    (o = new t.FP(0)),
                    o.copy(this.z),
                    (s = new t.FP(0)),
                    s.copy(this.x),
                    (u = new t.FP(0)),
                    u.copy(this.z),
                    (h = new t.FP(0)),
                    (e = new t.FP(0)),
                    (c = new t.FP(0)),
                    0 == t.ROM_CURVE.CURVE_B_I && c.rcopy(t.ROM_CURVE.CURVE_B),
                    i.sqr(),
                    r.sqr(),
                    o.sqr(),
                    s.mul(this.y),
                    s.add(s),
                    s.norm(),
                    u.mul(this.x),
                    u.add(u),
                    u.norm(),
                    h.copy(o),
                    0 == t.ROM_CURVE.CURVE_B_I
                      ? h.mul(c)
                      : h.imul(t.ROM_CURVE.CURVE_B_I),
                    h.sub(u),
                    e.copy(h),
                    e.add(h),
                    e.norm(),
                    h.add(e),
                    e.copy(r),
                    e.sub(h),
                    e.norm(),
                    h.add(r),
                    h.norm(),
                    h.mul(e),
                    e.mul(s),
                    s.copy(o),
                    s.add(o),
                    o.add(s),
                    0 == t.ROM_CURVE.CURVE_B_I
                      ? u.mul(c)
                      : u.imul(t.ROM_CURVE.CURVE_B_I),
                    u.sub(o),
                    u.sub(i),
                    u.norm(),
                    s.copy(u),
                    s.add(u),
                    u.add(s),
                    u.norm(),
                    s.copy(i),
                    s.add(i),
                    i.add(s),
                    i.sub(o),
                    i.norm(),
                    i.mul(u),
                    h.add(i),
                    i.copy(this.y),
                    i.mul(this.z),
                    i.add(i),
                    i.norm(),
                    u.mul(i),
                    e.sub(u),
                    i.add(i),
                    i.norm(),
                    r.add(r),
                    r.norm(),
                    u.copy(i),
                    u.mul(r),
                    this.x.copy(e),
                    this.x.norm(),
                    this.y.copy(h),
                    this.y.norm(),
                    this.z.copy(u),
                    this.z.norm());
              }
              (n.CURVETYPE == n.EDWARDS &&
                ((f = new t.FP(0)),
                f.copy(this.x),
                (a = new t.FP(0)),
                a.copy(this.y),
                (E = new t.FP(0)),
                E.copy(this.z),
                (p = new t.FP(0)),
                this.x.mul(this.y),
                this.x.add(this.x),
                this.x.norm(),
                f.sqr(),
                a.sqr(),
                -1 == t.ROM_CURVE.CURVE_A && f.neg(),
                this.y.copy(f),
                this.y.add(a),
                this.y.norm(),
                E.sqr(),
                E.add(E),
                this.z.copy(this.y),
                p.copy(this.y),
                p.sub(E),
                p.norm(),
                this.x.mul(p),
                f.sub(a),
                f.norm(),
                this.y.mul(f),
                this.z.mul(p)),
                n.CURVETYPE == n.MONTGOMERY &&
                  ((d = new t.FP(0)),
                  d.copy(this.x),
                  (w = new t.FP(0)),
                  w.copy(this.x),
                  (y = new t.FP(0)),
                  (I = new t.FP(0)),
                  (f = new t.FP(0)),
                  d.add(this.z),
                  d.norm(),
                  y.copy(d),
                  y.sqr(),
                  w.sub(this.z),
                  w.norm(),
                  I.copy(w),
                  I.sqr(),
                  f.copy(y),
                  f.sub(I),
                  f.norm(),
                  this.x.copy(y),
                  this.x.mul(I),
                  d.copy(f),
                  d.imul((t.ROM_CURVE.CURVE_A + 2) >> 2),
                  I.add(d),
                  I.norm(),
                  this.z.copy(I),
                  this.z.mul(f)));
            },
            add: function (i) {
              var r, o, s, e, h, u, c, f, a, E, p, d, w, y, I, l;
              this.INF
                ? this.copy(i)
                : i.INF ||
                  (n.CURVETYPE == n.WEIERSTRASS &&
                    (0 == t.ROM_CURVE.CURVE_A
                      ? ((r = 3 * t.ROM_CURVE.CURVE_B_I),
                        (o = new t.FP(0)),
                        o.copy(this.x),
                        o.mul(i.x),
                        (s = new t.FP(0)),
                        s.copy(this.y),
                        s.mul(i.y),
                        (e = new t.FP(0)),
                        e.copy(this.z),
                        e.mul(i.z),
                        (h = new t.FP(0)),
                        h.copy(this.x),
                        h.add(this.y),
                        h.norm(),
                        (u = new t.FP(0)),
                        u.copy(i.x),
                        u.add(i.y),
                        u.norm(),
                        h.mul(u),
                        u.copy(o),
                        u.add(s),
                        h.sub(u),
                        h.norm(),
                        u.copy(this.y),
                        u.add(this.z),
                        u.norm(),
                        (c = new t.FP(0)),
                        c.copy(i.y),
                        c.add(i.z),
                        c.norm(),
                        u.mul(c),
                        c.copy(s),
                        c.add(e),
                        u.sub(c),
                        u.norm(),
                        c.copy(this.x),
                        c.add(this.z),
                        c.norm(),
                        (f = new t.FP(0)),
                        f.copy(i.x),
                        f.add(i.z),
                        f.norm(),
                        c.mul(f),
                        f.copy(o),
                        f.add(e),
                        f.rsub(c),
                        f.norm(),
                        c.copy(o),
                        c.add(o),
                        o.add(c),
                        o.norm(),
                        e.imul(r),
                        (a = new t.FP(0)),
                        a.copy(s),
                        a.add(e),
                        a.norm(),
                        s.sub(e),
                        s.norm(),
                        f.imul(r),
                        c.copy(f),
                        c.mul(u),
                        e.copy(h),
                        e.mul(s),
                        c.rsub(e),
                        f.mul(o),
                        s.mul(a),
                        f.add(s),
                        o.mul(h),
                        a.mul(u),
                        a.add(o),
                        this.x.copy(c),
                        this.x.norm(),
                        this.y.copy(f),
                        this.y.norm(),
                        this.z.copy(a),
                        this.z.norm())
                      : ((o = new t.FP(0)),
                        o.copy(this.x),
                        (s = new t.FP(0)),
                        s.copy(this.y),
                        (e = new t.FP(0)),
                        e.copy(this.z),
                        (h = new t.FP(0)),
                        h.copy(this.x),
                        (u = new t.FP(0)),
                        u.copy(i.x),
                        (a = new t.FP(0)),
                        (f = new t.FP(0)),
                        f.copy(i.x),
                        (c = new t.FP(0)),
                        c.copy(i.y),
                        (r = new t.FP(0)),
                        0 == t.ROM_CURVE.CURVE_B_I &&
                          r.rcopy(t.ROM_CURVE.CURVE_B),
                        o.mul(i.x),
                        s.mul(i.y),
                        e.mul(i.z),
                        h.add(this.y),
                        h.norm(),
                        u.add(i.y),
                        u.norm(),
                        h.mul(u),
                        u.copy(o),
                        u.add(s),
                        h.sub(u),
                        h.norm(),
                        u.copy(this.y),
                        u.add(this.z),
                        u.norm(),
                        c.add(i.z),
                        c.norm(),
                        u.mul(c),
                        c.copy(s),
                        c.add(e),
                        u.sub(c),
                        u.norm(),
                        c.copy(this.x),
                        c.add(this.z),
                        c.norm(),
                        f.add(i.z),
                        f.norm(),
                        c.mul(f),
                        f.copy(o),
                        f.add(e),
                        f.rsub(c),
                        f.norm(),
                        a.copy(e),
                        0 == t.ROM_CURVE.CURVE_B_I
                          ? a.mul(r)
                          : a.imul(t.ROM_CURVE.CURVE_B_I),
                        c.copy(f),
                        c.sub(a),
                        c.norm(),
                        a.copy(c),
                        a.add(c),
                        c.add(a),
                        a.copy(s),
                        a.sub(c),
                        a.norm(),
                        c.add(s),
                        c.norm(),
                        0 == t.ROM_CURVE.CURVE_B_I
                          ? f.mul(r)
                          : f.imul(t.ROM_CURVE.CURVE_B_I),
                        s.copy(e),
                        s.add(e),
                        e.add(s),
                        f.sub(e),
                        f.sub(o),
                        f.norm(),
                        s.copy(f),
                        s.add(f),
                        f.add(s),
                        f.norm(),
                        s.copy(o),
                        s.add(o),
                        o.add(s),
                        o.sub(e),
                        o.norm(),
                        s.copy(u),
                        s.mul(f),
                        e.copy(o),
                        e.mul(f),
                        f.copy(c),
                        f.mul(a),
                        f.add(e),
                        c.mul(h),
                        c.sub(s),
                        a.mul(u),
                        s.copy(h),
                        s.mul(o),
                        a.add(s),
                        this.x.copy(c),
                        this.x.norm(),
                        this.y.copy(f),
                        this.y.norm(),
                        this.z.copy(a),
                        this.z.norm())),
                  n.CURVETYPE == n.EDWARDS &&
                    ((E = new t.FP(0)),
                    E.copy(this.z),
                    (p = new t.FP(0)),
                    (d = new t.FP(0)),
                    d.copy(this.x),
                    (w = new t.FP(0)),
                    w.copy(this.y),
                    (y = new t.FP(0)),
                    (I = new t.FP(0)),
                    (l = new t.FP(0)),
                    E.mul(i.z),
                    p.copy(E),
                    p.sqr(),
                    d.mul(i.x),
                    w.mul(i.y),
                    y.copy(d),
                    y.mul(w),
                    0 == t.ROM_CURVE.CURVE_B_I
                      ? ((r = new t.FP(0)),
                        r.rcopy(t.ROM_CURVE.CURVE_B),
                        y.mul(r))
                      : y.imul(t.ROM_CURVE.CURVE_B_I),
                    I.copy(p),
                    I.sub(y),
                    l.copy(p),
                    l.add(y),
                    1 == t.ROM_CURVE.CURVE_A && (y.copy(w), y.sub(d)),
                    d.add(w),
                    p.copy(this.x),
                    p.add(this.y),
                    w.copy(i.x),
                    w.add(i.y),
                    p.norm(),
                    w.norm(),
                    p.mul(w),
                    p.sub(d),
                    p.norm(),
                    I.norm(),
                    p.mul(I),
                    this.x.copy(E),
                    this.x.mul(p),
                    l.norm(),
                    1 == t.ROM_CURVE.CURVE_A && (y.norm(), d.copy(y), d.mul(l)),
                    -1 == t.ROM_CURVE.CURVE_A && (d.norm(), d.mul(l)),
                    this.y.copy(E),
                    this.y.mul(d),
                    this.z.copy(I),
                    this.z.mul(l)));
            },
            dadd: function (n, i) {
              var r, o, s, e, h, u;
              ((r = new t.FP(0)),
                r.copy(this.x),
                (o = new t.FP(0)),
                o.copy(this.x),
                (s = new t.FP(0)),
                s.copy(n.x),
                (e = new t.FP(0)),
                e.copy(n.x),
                (h = new t.FP(0)),
                (u = new t.FP(0)),
                r.add(this.z),
                o.sub(this.z),
                s.add(n.z),
                e.sub(n.z),
                e.norm(),
                r.norm(),
                h.copy(e),
                h.mul(r),
                s.norm(),
                o.norm(),
                u.copy(s),
                u.mul(o),
                r.copy(h),
                r.add(u),
                r.norm(),
                r.sqr(),
                o.copy(h),
                o.sub(u),
                o.norm(),
                o.sqr(),
                this.x.copy(r),
                this.z.copy(i.x),
                this.z.mul(o));
            },
            sub: function (t) {
              (t.neg(), this.add(t), t.neg());
            },
            pinmul: function (i, r) {
              var o, s, e, h, u;
              if (n.CURVETYPE == n.MONTGOMERY) return this.mul(new t.BIG(i));
              for (
                e = new n(), h = new n(), u = new n(), u.copy(this), o = r - 1;
                o >= 0;
                o--
              )
                ((s = (i >> o) & 1),
                  e.copy(u),
                  e.add(h),
                  h.cswap(u, s),
                  u.copy(e),
                  h.dbl(),
                  h.cswap(u, s));
              return (e.copy(h), e.affine(), e);
            },
            mul: function (i) {
              var r, o, s, e, h, u, c, f, a, E, p, d, w, y, I;
              if (i.iszilch() || this.is_infinity()) return new n();
              if (((r = new n()), n.CURVETYPE == n.MONTGOMERY)) {
                for (
                  o = new n(),
                    s = new n(),
                    s.copy(this),
                    e = new n(),
                    e.copy(this),
                    e.dbl(),
                    o.copy(this),
                    o.affine(),
                    w = i.nbits(),
                    p = w - 2;
                  p >= 0;
                  p--
                )
                  ((d = i.bit(p)),
                    r.copy(e),
                    r.dadd(s, o),
                    s.cswap(e, d),
                    e.copy(r),
                    s.dbl(),
                    s.cswap(e, d));
                r.copy(s);
              } else {
                for (
                  h = new t.BIG(),
                    u = new t.BIG(),
                    c = new n(),
                    f = new n(),
                    a = [],
                    E = [],
                    this.affine(),
                    c.copy(this),
                    c.dbl(),
                    a[0] = new n(),
                    a[0].copy(this),
                    p = 1;
                  p < 8;
                  p++
                )
                  ((a[p] = new n()), a[p].copy(a[p - 1]), a[p].add(c));
                for (
                  u.copy(i),
                    y = u.parity(),
                    u.inc(1),
                    u.norm(),
                    I = u.parity(),
                    h.copy(u),
                    h.inc(1),
                    h.norm(),
                    u.cmove(h, y),
                    c.cmove(this, I),
                    f.copy(c),
                    w = 1 + Math.floor((u.nbits() + 3) / 4),
                    p = 0;
                  p < w;
                  p++
                )
                  ((E[p] = u.lastbits(5) - 16),
                    u.dec(E[p]),
                    u.norm(),
                    u.fshr(4));
                for (
                  E[w] = u.lastbits(5),
                    r.copy(a[Math.floor((E[w] - 1) / 2)]),
                    p = w - 1;
                  p >= 0;
                  p--
                )
                  (c.select(a, E[p]),
                    r.dbl(),
                    r.dbl(),
                    r.dbl(),
                    r.dbl(),
                    r.add(c));
                r.sub(f);
              }
              return (r.affine(), r);
            },
            mul2: function (i, r, o) {
              var s,
                e,
                h,
                u,
                c,
                f,
                a = new t.BIG(),
                E = new t.BIG(),
                p = new t.BIG(),
                d = new n(),
                w = new n(),
                y = new n(),
                I = [],
                l = [];
              for (
                this.affine(),
                  r.affine(),
                  a.copy(i),
                  E.copy(o),
                  I[1] = new n(),
                  I[1].copy(this),
                  I[1].sub(r),
                  I[2] = new n(),
                  I[2].copy(this),
                  I[2].add(r),
                  d.copy(r),
                  d.dbl(),
                  I[0] = new n(),
                  I[0].copy(I[1]),
                  I[0].sub(d),
                  I[3] = new n(),
                  I[3].copy(I[2]),
                  I[3].add(d),
                  w.copy(this),
                  w.dbl(),
                  I[5] = new n(),
                  I[5].copy(I[1]),
                  I[5].add(w),
                  I[6] = new n(),
                  I[6].copy(I[2]),
                  I[6].add(w),
                  I[4] = new n(),
                  I[4].copy(I[5]),
                  I[4].sub(d),
                  I[7] = new n(),
                  I[7].copy(I[6]),
                  I[7].add(d),
                  e = a.parity(),
                  a.inc(1),
                  a.norm(),
                  h = a.parity(),
                  p.copy(a),
                  p.inc(1),
                  p.norm(),
                  a.cmove(p, e),
                  w.cmove(this, h),
                  y.copy(w),
                  e = E.parity(),
                  E.inc(1),
                  E.norm(),
                  h = E.parity(),
                  p.copy(E),
                  p.inc(1),
                  p.norm(),
                  E.cmove(p, e),
                  d.cmove(r, h),
                  y.add(d),
                  p.copy(a),
                  p.add(E),
                  p.norm(),
                  u = 1 + Math.floor((p.nbits() + 1) / 2),
                  s = 0;
                s < u;
                s++
              )
                ((c = a.lastbits(3) - 4),
                  a.dec(c),
                  a.norm(),
                  a.fshr(2),
                  (f = E.lastbits(3) - 4),
                  E.dec(f),
                  E.norm(),
                  E.fshr(2),
                  (l[s] = 4 * c + f));
              for (
                l[u] = 4 * a.lastbits(3) + E.lastbits(3),
                  d.copy(I[Math.floor((l[u] - 1) / 2)]),
                  s = u - 1;
                s >= 0;
                s--
              )
                (w.select(I, l[s]), d.dbl(), d.dbl(), d.add(w));
              return (d.sub(y), d.affine(), d);
            },
          }),
          (n.teq = function (t, n) {
            var i = t ^ n;
            return ((i -= 1), (i >> 31) & 1);
          }),
          (n.fromBytes = function (i) {
            var r,
              o,
              s,
              e = [],
              h = new n(),
              u = new t.BIG(0);
            for (u.rcopy(t.ROM_FIELD.Modulus), s = 0; s < t.BIG.MODBYTES; s++)
              e[s] = i[s + 1];
            if (((r = t.BIG.fromBytes(e)), t.BIG.comp(r, u) >= 0)) return h;
            if (4 == i[0]) {
              for (s = 0; s < t.BIG.MODBYTES; s++)
                e[s] = i[s + t.BIG.MODBYTES + 1];
              return (
                (o = t.BIG.fromBytes(e)),
                t.BIG.comp(o, u) >= 0 ? h : (h.setxy(r, o), h)
              );
            }
            return (h.setx(r), h);
          }),
          (n.RHS = function (i) {
            var r,
              o,
              s,
              e,
              h = new t.FP(0);
            return (
              i.norm(),
              h.copy(i),
              h.sqr(),
              n.CURVETYPE == n.WEIERSTRASS
                ? ((r = new t.FP(0)),
                  r.rcopy(t.ROM_CURVE.CURVE_B),
                  h.mul(i),
                  -3 == t.ROM_CURVE.CURVE_A &&
                    ((o = new t.FP(0)),
                    o.copy(i),
                    o.imul(3),
                    o.neg(),
                    o.norm(),
                    h.add(o)),
                  h.add(r))
                : n.CURVETYPE == n.EDWARDS
                  ? ((r = new t.FP(0)),
                    r.rcopy(t.ROM_CURVE.CURVE_B),
                    (s = new t.FP(1)),
                    r.mul(h),
                    r.sub(s),
                    -1 == t.ROM_CURVE.CURVE_A && h.neg(),
                    h.sub(s),
                    h.norm(),
                    r.inverse(),
                    h.mul(r))
                  : n.CURVETYPE == n.MONTGOMERY &&
                    ((e = new t.FP(0)),
                    e.copy(h),
                    e.mul(i),
                    h.imul(t.ROM_CURVE.CURVE_A),
                    h.add(e),
                    h.add(i)),
              h.reduce(),
              h
            );
          }),
          (n.mapit = function (i) {
            var r,
              o = new t.BIG(0),
              s = t.BIG.fromBytes(i),
              e = new n();
            for (o.rcopy(t.ROM_FIELD.Modulus), s.mod(o); ; ) {
              if ((e.setxi(s, 0), !e.is_infinity())) break;
              (s.inc(1), s.norm());
            }
            return (
              n.CURVE_PAIRING_TYPE != n.BN &&
                ((r = new t.BIG(0)),
                r.rcopy(t.ROM_CURVE.CURVE_Cof),
                (e = e.mul(r))),
              e
            );
          }),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.ECP = r);
    },
    3506: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = function () {
          ((this.x = new t.FP2(0)),
            (this.y = new t.FP2(1)),
            (this.z = new t.FP2(0)),
            (this.INF = !0));
        };
        return (
          (n.prototype = {
            is_infinity: function () {
              return (
                !!this.INF ||
                (this.x.reduce(),
                this.y.reduce(),
                this.z.reduce(),
                (this.INF = this.x.iszilch() && this.z.iszilch()),
                this.INF)
              );
            },
            copy: function (t) {
              (this.x.copy(t.x),
                this.y.copy(t.y),
                this.z.copy(t.z),
                (this.INF = t.INF));
            },
            inf: function () {
              ((this.INF = !0), this.x.zero(), this.y.one(), this.z.zero());
            },
            cmove: function (t, n) {
              var i;
              (this.x.cmove(t.x, n),
                this.y.cmove(t.y, n),
                this.z.cmove(t.z, n),
                (i = 0 !== n),
                (this.INF ^= (this.INF ^ t.INF) & i));
            },
            select: function (t, i) {
              var r = new n(),
                o = i >> 31,
                s = (i ^ o) - o;
              ((s = (s - 1) / 2),
                this.cmove(t[0], n.teq(s, 0)),
                this.cmove(t[1], n.teq(s, 1)),
                this.cmove(t[2], n.teq(s, 2)),
                this.cmove(t[3], n.teq(s, 3)),
                this.cmove(t[4], n.teq(s, 4)),
                this.cmove(t[5], n.teq(s, 5)),
                this.cmove(t[6], n.teq(s, 6)),
                this.cmove(t[7], n.teq(s, 7)),
                r.copy(this),
                r.neg(),
                this.cmove(r, 1 & o));
            },
            equals: function (n) {
              var i, r;
              return (
                !(!this.is_infinity() || !n.is_infinity()) ||
                (!this.is_infinity() &&
                  !n.is_infinity() &&
                  ((i = new t.FP2(0)),
                  i.copy(this.x),
                  (r = new t.FP2(0)),
                  r.copy(n.x),
                  i.copy(this.x),
                  i.mul(n.z),
                  i.reduce(),
                  r.copy(n.x),
                  r.mul(this.z),
                  r.reduce(),
                  !!i.equals(r) &&
                    (i.copy(this.y),
                    i.mul(n.z),
                    i.reduce(),
                    r.copy(n.y),
                    r.mul(this.z),
                    r.reduce(),
                    !!i.equals(r))))
              );
            },
            neg: function () {
              (this.y.norm(), this.y.neg(), this.y.norm());
            },
            affine: function () {
              var n;
              if (!this.is_infinity()) {
                if (((n = new t.FP2(1)), this.z.equals(n)))
                  return (this.x.reduce(), void this.y.reduce());
                (this.z.inverse(),
                  this.x.mul(this.z),
                  this.x.reduce(),
                  this.y.mul(this.z),
                  this.y.reduce(),
                  this.z.copy(n));
              }
            },
            getX: function () {
              return (this.affine(), this.x);
            },
            getY: function () {
              return (this.affine(), this.y);
            },
            getx: function () {
              return this.x;
            },
            gety: function () {
              return this.y;
            },
            getz: function () {
              return this.z;
            },
            toBytes: function (n) {
              var i,
                r = [];
              for (
                this.affine(), this.x.getA().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i] = r[i];
              for (this.x.getB().toBytes(r), i = 0; i < t.BIG.MODBYTES; i++)
                n[i + t.BIG.MODBYTES] = r[i];
              for (this.y.getA().toBytes(r), i = 0; i < t.BIG.MODBYTES; i++)
                n[i + 2 * t.BIG.MODBYTES] = r[i];
              for (this.y.getB().toBytes(r), i = 0; i < t.BIG.MODBYTES; i++)
                n[i + 3 * t.BIG.MODBYTES] = r[i];
            },
            toString: function () {
              return this.is_infinity()
                ? "infinity"
                : (this.affine(),
                  "(" + this.x.toString() + "," + this.y.toString() + ")");
            },
            setxy: function (i, r) {
              var o, s;
              (this.x.copy(i),
                this.y.copy(r),
                this.z.one(),
                (o = n.RHS(this.x)),
                (s = new t.FP2(this.y)),
                s.sqr(),
                s.equals(o) ? (this.INF = !1) : this.inf());
            },
            setx: function (t) {
              var i;
              (this.x.copy(t),
                this.z.one(),
                (i = n.RHS(this.x)),
                i.sqrt() ? (this.y.copy(i), (this.INF = !1)) : this.inf());
            },
            frob: function (n) {
              var i;
              this.INF ||
                ((i = new t.FP2(n)),
                i.sqr(),
                this.x.conj(),
                this.y.conj(),
                this.z.conj(),
                this.z.reduce(),
                this.x.mul(i),
                this.y.mul(i),
                this.y.mul(n));
            },
            dbl: function () {
              var n, i, r, o, s, e;
              return this.INF
                ? -1
                : ((n = new t.FP2(0)),
                  n.copy(this.y),
                  t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && (n.mul_ip(), n.norm()),
                  (i = new t.FP2(0)),
                  i.copy(this.y),
                  i.sqr(),
                  t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && i.mul_ip(),
                  (r = new t.FP2(0)),
                  r.copy(n),
                  r.mul(this.z),
                  (o = new t.FP2(0)),
                  o.copy(this.z),
                  o.sqr(),
                  this.z.copy(i),
                  this.z.add(i),
                  this.z.norm(),
                  this.z.add(this.z),
                  this.z.add(this.z),
                  this.z.norm(),
                  o.imul(3 * t.ROM_CURVE.CURVE_B_I),
                  t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (o.mul_ip(), o.norm()),
                  (s = new t.FP2(0)),
                  s.copy(o),
                  s.mul(this.z),
                  (e = new t.FP2(0)),
                  e.copy(i),
                  e.add(o),
                  e.norm(),
                  this.z.mul(r),
                  r.copy(o),
                  r.add(o),
                  o.add(r),
                  o.norm(),
                  i.sub(o),
                  i.norm(),
                  e.mul(i),
                  e.add(s),
                  r.copy(this.x),
                  r.mul(n),
                  this.x.copy(i),
                  this.x.norm(),
                  this.x.mul(r),
                  this.x.add(this.x),
                  this.x.norm(),
                  this.y.copy(e),
                  this.y.norm(),
                  1);
            },
            add: function (n) {
              var i, r, o, s, e, h, u, c, f;
              return this.INF
                ? (this.copy(n), -1)
                : n.INF
                  ? -1
                  : ((i = 3 * t.ROM_CURVE.CURVE_B_I),
                    (r = new t.FP2(0)),
                    r.copy(this.x),
                    r.mul(n.x),
                    (o = new t.FP2(0)),
                    o.copy(this.y),
                    o.mul(n.y),
                    (s = new t.FP2(0)),
                    s.copy(this.z),
                    s.mul(n.z),
                    (e = new t.FP2(0)),
                    e.copy(this.x),
                    e.add(this.y),
                    e.norm(),
                    (h = new t.FP2(0)),
                    h.copy(n.x),
                    h.add(n.y),
                    h.norm(),
                    e.mul(h),
                    h.copy(r),
                    h.add(o),
                    e.sub(h),
                    e.norm(),
                    t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE &&
                      (e.mul_ip(), e.norm()),
                    h.copy(this.y),
                    h.add(this.z),
                    h.norm(),
                    (u = new t.FP2(0)),
                    u.copy(n.y),
                    u.add(n.z),
                    u.norm(),
                    h.mul(u),
                    u.copy(o),
                    u.add(s),
                    h.sub(u),
                    h.norm(),
                    t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE &&
                      (h.mul_ip(), h.norm()),
                    u.copy(this.x),
                    u.add(this.z),
                    u.norm(),
                    (c = new t.FP2(0)),
                    c.copy(n.x),
                    c.add(n.z),
                    c.norm(),
                    u.mul(c),
                    c.copy(r),
                    c.add(s),
                    c.rsub(u),
                    c.norm(),
                    t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE &&
                      (r.mul_ip(), r.norm(), o.mul_ip(), o.norm()),
                    u.copy(r),
                    u.add(r),
                    r.add(u),
                    r.norm(),
                    s.imul(i),
                    t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && s.mul_ip(),
                    (f = new t.FP2(0)),
                    f.copy(o),
                    f.add(s),
                    f.norm(),
                    o.sub(s),
                    o.norm(),
                    c.imul(i),
                    t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE &&
                      (c.mul_ip(), c.norm()),
                    u.copy(c),
                    u.mul(h),
                    s.copy(e),
                    s.mul(o),
                    u.rsub(s),
                    c.mul(r),
                    o.mul(f),
                    c.add(o),
                    r.mul(e),
                    f.mul(h),
                    f.add(r),
                    this.x.copy(u),
                    this.x.norm(),
                    this.y.copy(c),
                    this.y.norm(),
                    this.z.copy(f),
                    this.z.norm(),
                    0);
            },
            sub: function (t) {
              var n;
              return (t.neg(), (n = this.add(t)), t.neg(), n);
            },
            mul: function (i) {
              var r,
                o,
                s,
                e,
                h = new t.BIG(),
                u = new t.BIG(),
                c = new n(),
                f = new n(),
                a = new n(),
                E = [],
                p = [];
              if (this.is_infinity()) return new n();
              for (
                this.affine(),
                  a.copy(this),
                  a.dbl(),
                  E[0] = new n(),
                  E[0].copy(this),
                  r = 1;
                r < 8;
                r++
              )
                ((E[r] = new n()), E[r].copy(E[r - 1]), E[r].add(a));
              for (
                u.copy(i),
                  s = u.parity(),
                  u.inc(1),
                  u.norm(),
                  e = u.parity(),
                  h.copy(u),
                  h.inc(1),
                  h.norm(),
                  u.cmove(h, s),
                  a.cmove(this, e),
                  c.copy(a),
                  o = 1 + Math.floor((u.nbits() + 3) / 4),
                  r = 0;
                r < o;
                r++
              )
                ((p[r] = u.lastbits(5) - 16), u.dec(p[r]), u.norm(), u.fshr(4));
              for (
                p[o] = u.lastbits(5),
                  f.copy(E[Math.floor((p[o] - 1) / 2)]),
                  r = o - 1;
                r >= 0;
                r--
              )
                (a.select(E, p[r]),
                  f.dbl(),
                  f.dbl(),
                  f.dbl(),
                  f.dbl(),
                  f.add(a));
              return (f.sub(c), f.affine(), f);
            },
          }),
          (n.fromBytes = function (i) {
            var r,
              o,
              s,
              e,
              h,
              u,
              c = [];
            for (s = 0; s < t.BIG.MODBYTES; s++) c[s] = i[s];
            for (r = t.BIG.fromBytes(c), s = 0; s < t.BIG.MODBYTES; s++)
              c[s] = i[s + t.BIG.MODBYTES];
            for (
              o = t.BIG.fromBytes(c), e = new t.FP2(r, o), s = 0;
              s < t.BIG.MODBYTES;
              s++
            )
              c[s] = i[s + 2 * t.BIG.MODBYTES];
            for (r = t.BIG.fromBytes(c), s = 0; s < t.BIG.MODBYTES; s++)
              c[s] = i[s + 3 * t.BIG.MODBYTES];
            return (
              (o = t.BIG.fromBytes(c)),
              (h = new t.FP2(r, o)),
              (u = new n()),
              u.setxy(e, h),
              u
            );
          }),
          (n.RHS = function (n) {
            var i, r, o;
            return (
              n.norm(),
              (i = new t.FP2(n)),
              i.sqr(),
              (r = new t.BIG(0)),
              r.rcopy(t.ROM_CURVE.CURVE_B),
              (o = new t.FP2(r)),
              t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && o.div_ip(),
              t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE &&
                (o.norm(), o.mul_ip(), o.norm()),
              i.mul(n),
              i.add(o),
              i.reduce(),
              i
            );
          }),
          (n.mul4 = function (i, r) {
            var o,
              s,
              e,
              h = [],
              u = new n(),
              c = new n(),
              f = new n(),
              a = [],
              E = new t.BIG(),
              p = [],
              d = [];
            for (o = 0; o < 4; o++) ((p[o] = new t.BIG(r[o])), i[o].affine());
            for (
              a[0] = new n(),
                a[0].copy(i[0]),
                a[0].sub(i[1]),
                a[1] = new n(),
                a[1].copy(a[0]),
                a[2] = new n(),
                a[2].copy(a[0]),
                a[3] = new n(),
                a[3].copy(a[0]),
                a[4] = new n(),
                a[4].copy(i[0]),
                a[4].add(i[1]),
                a[5] = new n(),
                a[5].copy(a[4]),
                a[6] = new n(),
                a[6].copy(a[4]),
                a[7] = new n(),
                a[7].copy(a[4]),
                u.copy(i[2]),
                u.sub(i[3]),
                a[1].sub(u),
                a[2].add(u),
                a[5].sub(u),
                a[6].add(u),
                u.copy(i[2]),
                u.add(i[3]),
                a[0].sub(u),
                a[3].add(u),
                a[4].sub(u),
                a[7].add(u),
                E.zero(),
                c.inf(),
                o = 0;
              o < 4;
              o++
            )
              (0 == p[o].parity() && (p[o].inc(1), p[o].norm(), c.add(i[o])),
                E.add(p[o]),
                E.norm());
            for (e = 1 + E.nbits(), s = 0; s < e; s++) {
              for (o = 0; o < 4; o++)
                ((h[o] = p[o].lastbits(2) - 2),
                  p[o].dec(h[o]),
                  p[o].norm(),
                  p[o].fshr(1));
              d[s] = 8 * h[0] + 4 * h[1] + 2 * h[2] + h[3];
            }
            for (
              d[e] =
                8 * p[0].lastbits(2) +
                4 * p[1].lastbits(2) +
                2 * p[2].lastbits(2) +
                p[3].lastbits(2),
                f.copy(a[Math.floor((d[e] - 1) / 2)]),
                o = e - 1;
              o >= 0;
              o--
            )
              (u.select(a, d[o]), f.dbl(), f.add(u));
            return (f.sub(c), f.affine(), f);
          }),
          (n.teq = function (t, n) {
            var i = t ^ n;
            return ((i -= 1), (i >> 31) & 1);
          }),
          (n.mapit = function (i) {
            var r, o, s, e, h, u, c, f, a, E, p;
            for (
              r = new t.BIG(0),
                r.rcopy(t.ROM_FIELD.Modulus),
                o = t.BIG.fromBytes(i),
                s = new t.BIG(1),
                o.mod(r);
              ;
            ) {
              if (
                ((c = new t.FP2(s, o)),
                (e = new n()),
                e.setx(c),
                !e.is_infinity())
              )
                break;
              (o.inc(1), o.norm());
            }
            return (
              (E = new t.BIG(0)),
              E.rcopy(t.ROM_FIELD.Fra),
              (p = new t.BIG(0)),
              p.rcopy(t.ROM_FIELD.Frb),
              (c = new t.FP2(E, p)),
              t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (c.inverse(), c.norm()),
              (o = new t.BIG(0)),
              o.rcopy(t.ROM_CURVE.CURVE_Bnx),
              t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN &&
                ((h = new n()),
                h.copy(e),
                (h = h.mul(o)),
                t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && h.neg(),
                (u = new n()),
                u.copy(h),
                u.dbl(),
                u.add(h),
                u.frob(c),
                e.frob(c),
                e.frob(c),
                e.frob(c),
                e.add(h),
                e.add(u),
                h.frob(c),
                h.frob(c),
                e.add(h)),
              t.ECP.CURVE_PAIRING_TYPE == t.ECP.BLS &&
                ((f = new n()),
                (a = new n()),
                (f = e.mul(o)),
                (a = f.mul(o)),
                t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && f.neg(),
                a.sub(f),
                a.sub(e),
                f.sub(e),
                f.frob(c),
                e.dbl(),
                e.frob(c),
                e.frob(c),
                e.add(a),
                e.add(f)),
              e.affine(),
              e
            );
          }),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.ECP2 = r);
    },
    3507: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = function (n) {
          ((this.v = new Array(n)), (this.length = n));
          for (var i = 0; i < n; i++) this.v[i] = new t.BIG(0);
        };
        return (
          (n.FFLEN = t.config["@ML"]),
          (n.P_MBITS = 8 * t.BIG.MODBYTES),
          (n.P_OMASK = -1 << (n.P_MBITS % t.BIG.BASEBITS)),
          (n.P_FEXCESS = 1 << (t.BIG.BASEBITS * t.BIG.NLEN - n.P_MBITS - 1)),
          (n.P_TBITS = n.P_MBITS % t.BIG.BASEBITS),
          (n.FF_BITS = t.BIG.BIGBITS * n.FFLEN),
          (n.HFLEN = n.FFLEN / 2),
          (n.prototype = {
            P_EXCESS: function () {
              return (
                1 +
                ((this.v[this.length - 1].get(t.BIG.NLEN - 1) & n.P_OMASK) >>
                  n.P_TBITS)
              );
            },
            zero: function () {
              for (var t = 0; t < this.length; t++) this.v[t].zero();
              return this;
            },
            getlen: function () {
              return this.length;
            },
            set: function (n) {
              (this.zero(),
                this.v[0].set(0, n & t.BIG.BMASK),
                this.v[0].set(1, n >> t.BIG.BASEBITS));
            },
            copy: function (t) {
              for (var n = 0; n < this.length; n++) this.v[n].copy(t.v[n]);
            },
            rcopy: function (t) {
              for (var n = 0; n < this.length; n++) this.v[n].rcopy(t[n]);
            },
            dsucopy: function (t) {
              for (var n = 0; n < t.length; n++)
                (this.v[t.length + n].copy(t.v[n]), this.v[n].zero());
            },
            dscopy: function (t) {
              for (var n = 0; n < t.length; n++)
                (this.v[n].copy(t.v[n]), this.v[t.length + n].zero());
            },
            sducopy: function (t) {
              for (var n = 0; n < this.length; n++)
                this.v[n].copy(t.v[this.length + n]);
            },
            one: function () {
              this.v[0].one();
              for (var t = 1; t < this.length; t++) this.v[t].zero();
            },
            iszilch: function () {
              for (var t = 0; t < this.length; t++)
                if (!this.v[t].iszilch()) return !1;
              return !0;
            },
            shrw: function (t) {
              for (var n = 0; n < t; n++)
                (this.v[n].copy(this.v[n + t]), this.v[n + t].zero());
            },
            shlw: function (t) {
              for (var n = 0; n < t; n++)
                (this.v[t + n].copy(this.v[n]), this.v[n].zero());
            },
            parity: function () {
              return this.v[0].parity();
            },
            lastbits: function (t) {
              return this.v[0].lastbits(t);
            },
            radd: function (t, n, i, r, o, s) {
              for (var e = 0; e < s; e++)
                (this.v[t + e].copy(n.v[i + e]), this.v[t + e].add(r.v[o + e]));
            },
            rinc: function (t, n, i, r) {
              for (var o = 0; o < r; o++) this.v[t + o].add(n.v[i + o]);
            },
            rsub: function (t, n, i, r, o, s) {
              for (var e = 0; e < s; e++)
                (this.v[t + e].copy(n.v[i + e]), this.v[t + e].sub(r.v[o + e]));
            },
            rdec: function (t, n, i, r) {
              for (var o = 0; o < r; o++) this.v[t + o].sub(n.v[i + o]);
            },
            add: function (t) {
              for (var n = 0; n < this.length; n++) this.v[n].add(t.v[n]);
            },
            sub: function (t) {
              for (var n = 0; n < this.length; n++) this.v[n].sub(t.v[n]);
            },
            revsub: function (t) {
              for (var n = 0; n < this.length; n++) this.v[n].rsub(t.v[n]);
            },
            inc: function (t) {
              (this.v[0].inc(t), this.norm());
            },
            dec: function (t) {
              (this.v[0].dec(t), this.norm());
            },
            rnorm: function (t, i) {
              var r,
                o,
                s = !1;
              for (i < 0 && ((i = -i), (s = !0)), r = 0; r < i - 1; r++)
                ((o = this.v[t + r].norm()),
                  this.v[t + r].xortop(o << n.P_TBITS),
                  this.v[t + r + 1].inc(o));
              return (
                (o = this.v[t + i - 1].norm()),
                s && this.v[t + i - 1].xortop(o << n.P_TBITS),
                this
              );
            },
            norm: function () {
              this.rnorm(0, this.length);
            },
            shl: function () {
              var t,
                i,
                r = 0;
              for (t = 0; t < this.length - 1; t++)
                ((i = this.v[t].fshl(1)),
                  this.v[t].inc(r),
                  this.v[t].xortop(i << n.P_TBITS),
                  (r = i));
              (this.v[this.length - 1].fshl(1), this.v[this.length - 1].inc(r));
            },
            shr: function () {
              var t, i;
              for (t = this.length - 1; t > 0; t--)
                ((i = this.v[t].fshr(1)), this.v[t - 1].ortop(i << n.P_TBITS));
              this.v[0].fshr(1);
            },
            toString: function () {
              var t,
                n = "";
              for (this.norm(), t = this.length - 1; t >= 0; t--)
                n += this.v[t].toString();
              return n;
            },
            toBytes: function (n) {
              var i;
              for (i = 0; i < this.length; i++)
                this.v[i].tobytearray(
                  n,
                  (this.length - i - 1) * t.BIG.MODBYTES,
                );
            },
            karmul: function (n, i, r, o, s, e, h, u) {
              var c, f;
              if (1 === u)
                return (
                  i.v[r].norm(),
                  o.v[s].norm(),
                  (f = t.BIG.mul(i.v[r], o.v[s])),
                  (this.v[n + 1] = f.split(8 * t.BIG.MODBYTES)),
                  void this.v[n].copy(f)
                );
              ((c = u / 2),
                this.radd(n, i, r, i, r + c, c),
                this.rnorm(n, c),
                this.radd(n + c, o, s, o, s + c, c),
                this.rnorm(n + c, c),
                e.karmul(h, this, n, this, n + c, e, h + u, c),
                this.karmul(n, i, r, o, s, e, h + u, c),
                this.karmul(n + u, i, r + c, o, s + c, e, h + u, c),
                e.rdec(h, this, n, u),
                e.rdec(h, this, n + u, u),
                this.rinc(n + c, e, h, u),
                this.rnorm(n, 2 * u));
            },
            karsqr: function (n, i, r, o, s, e) {
              var h, u;
              if (1 === e)
                return (
                  i.v[r].norm(),
                  (u = t.BIG.sqr(i.v[r])),
                  this.v[n + 1].copy(u.split(8 * t.BIG.MODBYTES)),
                  void this.v[n].copy(u)
                );
              ((h = e / 2),
                this.karsqr(n, i, r, o, s + e, h),
                this.karsqr(n + e, i, r + h, o, s + e, h),
                o.karmul(s, i, r, i, r + h, o, s + e, h),
                this.rinc(n + h, o, s, e),
                this.rinc(n + h, o, s, e),
                this.rnorm(n + h, e));
            },
            karmul_lower: function (n, i, r, o, s, e, h, u) {
              var c;
              1 !== u
                ? ((c = u / 2),
                  this.karmul(n, i, r, o, s, e, h + u, c),
                  e.karmul_lower(h, i, r + c, o, s, e, h + u, c),
                  this.rinc(n + c, e, h, c),
                  e.karmul_lower(h, i, r, o, s + c, e, h + u, c),
                  this.rinc(n + c, e, h, c),
                  this.rnorm(n + c, -c))
                : this.v[n].copy(t.BIG.smul(i.v[r], o.v[s]));
            },
            karmul_upper: function (t, n, i, r) {
              var o;
              ((o = r / 2),
                this.radd(r, t, 0, t, o, o),
                this.radd(r + o, n, 0, n, o, o),
                this.rnorm(r, o),
                this.rnorm(r + o, o),
                i.karmul(0, this, r + o, this, r, i, r, o),
                this.karmul(r, t, o, n, o, i, r, o),
                i.rdec(0, this, r, r),
                this.rinc(o, this, 0, o),
                this.rdec(o, i, 0, o),
                this.rnorm(0, -r),
                i.rdec(0, this, 0, r),
                this.rinc(o, i, 0, r),
                this.rnorm(o, r));
            },
            lmul: function (t) {
              var i = this.length,
                r = new n(2 * i),
                o = new n(i);
              (o.copy(this), this.karmul_lower(0, o, 0, t, 0, r, 0, i));
            },
            mod: function (t) {
              var i = 0;
              if ((this.norm(), !(n.comp(this, t) < 0))) {
                do {
                  (t.shl(), i++);
                } while (n.comp(this, t) >= 0);
                while (i > 0)
                  (t.shr(),
                    n.comp(this, t) >= 0 && (this.sub(t), this.norm()),
                    i--);
              }
            },
            reduce: function (t, i) {
              var r = t.length,
                o = new n(2 * r),
                s = new n(r),
                e = new n(r);
              return (
                s.sducopy(this),
                e.karmul_lower(0, this, 0, i, 0, o, 0, r),
                this.karmul_upper(t, e, o, r),
                e.sducopy(this),
                s.add(t),
                s.sub(e),
                s.norm(),
                s
              );
            },
            dmod: function (i) {
              var r,
                o = i.length,
                s = new n(2 * o),
                e = new n(2 * o),
                h = new n(o);
              (e.copy(this), e.norm(), s.dsucopy(i), (r = t.BIG.BIGBITS * o));
              while (n.comp(e, s) >= 0) (e.sub(s), e.norm());
              while (r > 0)
                (s.shr(), n.comp(e, s) >= 0 && (e.sub(s), e.norm()), r--);
              return (h.copy(e), h.mod(i), h);
            },
            invmodp: function (t) {
              var i = t.length,
                r = new n(i),
                o = new n(i),
                s = new n(i),
                e = new n(i),
                h = new n(i),
                u = new n(i);
              (u.one(), r.copy(this), o.copy(t), s.copy(u), e.zero());
              while (0 !== n.comp(r, u) && 0 !== n.comp(o, u)) {
                while (0 === r.parity())
                  (r.shr(), 0 !== s.parity() && (s.add(t), s.norm()), s.shr());
                while (0 === o.parity())
                  (o.shr(), 0 !== e.parity() && (e.add(t), e.norm()), e.shr());
                n.comp(r, o) >= 0
                  ? (r.sub(o),
                    r.norm(),
                    n.comp(s, e) >= 0
                      ? s.sub(e)
                      : (h.copy(t), h.sub(e), s.add(h)),
                    s.norm())
                  : (o.sub(r),
                    o.norm(),
                    n.comp(e, s) >= 0
                      ? e.sub(s)
                      : (h.copy(t), h.sub(s), e.add(h)),
                    e.norm());
              }
              0 === n.comp(r, u) ? this.copy(s) : this.copy(e);
            },
            nres: function (i) {
              var r,
                o = i.length;
              1 === o
                ? ((r = new t.DBIG(0)),
                  r.hcopy(this.v[0]),
                  r.shl(t.BIG.NLEN * t.BIG.BASEBITS),
                  this.v[0].copy(r.mod(i.v[0])))
                : ((r = new n(2 * o)), r.dsucopy(this), this.copy(r.dmod(i)));
            },
            redc: function (i, r) {
              var o,
                s = i.length;
              1 === s
                ? ((o = new t.DBIG(0)),
                  o.hcopy(this.v[0]),
                  this.v[0].copy(
                    t.BIG.monty(i.v[0], (1 << t.BIG.BASEBITS) - r.v[0].w[0], o),
                  ))
                : ((o = new n(2 * s)),
                  this.mod(i),
                  o.dscopy(this),
                  this.copy(o.reduce(i, r)),
                  this.mod(i));
            },
            mod2m: function (t) {
              for (var n = t; n < this.length; n++) this.v[n].zero();
            },
            invmod2m: function () {
              var t,
                i,
                r = this.length,
                o = new n(r),
                s = new n(r),
                e = new n(r);
              for (
                e.zero(), e.v[0].copy(this.v[0]), e.v[0].invmod2m(), i = 1;
                i < r;
                i <<= 1
              )
                (o.copy(this),
                  o.mod2m(i),
                  (t = n.mul(e, o)),
                  t.shrw(i),
                  o.copy(t),
                  s.copy(this),
                  s.shrw(i),
                  s.mod2m(i),
                  s.lmul(e),
                  s.mod2m(i),
                  o.add(s),
                  o.norm(),
                  o.lmul(e),
                  o.mod2m(i),
                  s.one(),
                  s.shlw(i),
                  o.revsub(s),
                  o.norm(),
                  o.shlw(i),
                  e.add(o));
              return (e.norm(), e);
            },
            random: function (n) {
              var i,
                r = this.length;
              for (i = 0; i < r; i++) this.v[i].copy(t.BIG.random(n));
              while (this.v[r - 1].nbits() < 8 * t.BIG.MODBYTES)
                this.v[r - 1].copy(t.BIG.random(n));
            },
            randomnum: function (i, r) {
              var o,
                s = this.length,
                e = new n(2 * s);
              for (o = 0; o < 2 * s; o++) e.v[o].copy(t.BIG.random(r));
              this.copy(e.dmod(i));
            },
            modmul: function (i, r, o) {
              var s,
                e = this.P_EXCESS(),
                h = i.P_EXCESS(),
                u = r.length;
              (e + 1 >= Math.floor((n.P_FEXCESS - 1) / (h + 1)) && this.mod(r),
                1 === u
                  ? ((s = t.BIG.mul(this.v[0], i.v[0])),
                    this.v[0].copy(
                      t.BIG.monty(
                        r.v[0],
                        (1 << t.BIG.BASEBITS) - o.v[0].w[0],
                        s,
                      ),
                    ))
                  : ((s = n.mul(this, i)), this.copy(s.reduce(r, o))));
            },
            modsqr: function (i, r) {
              var o,
                s,
                e = this.P_EXCESS();
              (e + 1 >= Math.floor((n.P_FEXCESS - 1) / (e + 1)) && this.mod(i),
                (o = i.length),
                1 === o
                  ? ((s = t.BIG.sqr(this.v[0])),
                    this.v[0].copy(
                      t.BIG.monty(
                        i.v[0],
                        (1 << t.BIG.BASEBITS) - r.v[0].w[0],
                        s,
                      ),
                    ))
                  : ((s = n.sqr(this)), this.copy(s.reduce(i, r))));
            },
            skpow: function (i, r) {
              var o,
                s,
                e = r.length,
                h = new n(e),
                u = new n(e),
                c = r.invmod2m();
              for (
                this.mod(r),
                  h.one(),
                  u.copy(this),
                  h.nres(r),
                  u.nres(r),
                  o = 8 * t.BIG.MODBYTES * e - 1;
                o >= 0;
                o--
              )
                ((s = i.v[Math.floor(o / t.BIG.BIGBITS)].bit(
                  o % t.BIG.BIGBITS,
                )),
                  this.copy(h),
                  this.modmul(u, r, c),
                  n.cswap(h, u, s),
                  h.modsqr(r, c),
                  u.copy(this),
                  n.cswap(h, u, s));
              (this.copy(h), this.redc(r, c));
            },
            skspow: function (i, r) {
              var o,
                s,
                e = r.length,
                h = new n(e),
                u = new n(e),
                c = r.invmod2m();
              for (
                this.mod(r),
                  h.one(),
                  u.copy(this),
                  h.nres(r),
                  u.nres(r),
                  o = 8 * t.BIG.MODBYTES - 1;
                o >= 0;
                o--
              )
                ((s = i.bit(o)),
                  this.copy(h),
                  this.modmul(u, r, c),
                  n.cswap(h, u, s),
                  h.modsqr(r, c),
                  u.copy(this),
                  n.cswap(h, u, s));
              (this.copy(h), this.redc(r, c));
            },
            power: function (t, i) {
              var r = i.length,
                o = !0,
                s = new n(r),
                e = i.invmod2m();
              if ((s.copy(this), s.nres(i), 2 == t))
                (this.copy(s), this.modsqr(i, e));
              else
                for (;;) {
                  if (
                    (t % 2 == 1 &&
                      (o ? this.copy(s) : this.modmul(s, i, e), (o = !1)),
                    (t >>= 1),
                    0 === t)
                  )
                    break;
                  s.modsqr(i, e);
                }
              this.redc(i, e);
            },
            pow: function (i, r) {
              var o,
                s,
                e = r.length,
                h = new n(e),
                u = r.invmod2m();
              for (
                h.copy(this),
                  this.one(),
                  this.nres(r),
                  h.nres(r),
                  o = 8 * t.BIG.MODBYTES * e - 1;
                o >= 0;
                o--
              )
                (this.modsqr(r, u),
                  (s = i.v[Math.floor(o / t.BIG.BIGBITS)].bit(
                    o % t.BIG.BIGBITS,
                  )),
                  1 === s && this.modmul(h, r, u));
              this.redc(r, u);
            },
            pow2: function (i, r, o, s) {
              var e,
                h,
                u,
                c = s.length,
                f = new n(c),
                a = new n(c),
                E = new n(c),
                p = s.invmod2m();
              for (
                f.copy(this),
                  a.copy(r),
                  f.nres(s),
                  a.nres(s),
                  E.copy(f),
                  E.modmul(a, s, p),
                  this.one(),
                  this.nres(s),
                  e = 8 * t.BIG.MODBYTES - 1;
                e >= 0;
                e--
              )
                ((h = i.bit(e)),
                  (u = o.bit(e)),
                  this.modsqr(s, p),
                  1 == h
                    ? 1 == u
                      ? this.modmul(E, s, p)
                      : this.modmul(f, s, p)
                    : 1 == u && this.modmul(a, s, p));
              this.redc(s, p);
            },
            cfactor: function (t) {
              var i,
                r,
                o = this.length,
                s = new n(o),
                e = new n(o);
              (e.set(t), s.copy(this), s.norm());
              do {
                (s.sub(e), s.norm());
                while (!s.iszilch() && 0 === s.parity()) s.shr();
              } while (n.comp(s, e) > 0);
              return ((r = s.v[0].get(0)), (i = n.igcd(t, r)), i > 1);
            },
          }),
          (n.comp = function (n, i) {
            var r, o;
            for (r = n.length - 1; r >= 0; r--)
              if (((o = t.BIG.comp(n.v[r], i.v[r])), 0 !== o)) return o;
            return 0;
          }),
          (n.fromBytes = function (n, i) {
            var r;
            for (r = 0; r < n.length; r++)
              n.v[r] = t.BIG.frombytearray(
                i,
                (n.length - r - 1) * t.BIG.MODBYTES,
              );
          }),
          (n.cswap = function (t, n, i) {
            var r;
            for (r = 0; r < t.length; r++) t.v[r].cswap(n.v[r], i);
          }),
          (n.mul = function (t, i) {
            var r = t.length,
              o = new n(2 * r),
              s = new n(2 * r);
            return (o.karmul(0, t, 0, i, 0, s, 0, r), o);
          }),
          (n.sqr = function (t) {
            var i = t.length,
              r = new n(2 * i),
              o = new n(2 * i);
            return (r.karsqr(0, t, 0, o, 0, i), r);
          }),
          (n.igcd = function (t, n) {
            var i;
            if (0 === n) return t;
            while (0 !== (i = t % n)) ((t = n), (n = i));
            return n;
          }),
          (n.prime = function (t, i) {
            var r,
              o,
              s,
              e = t.length,
              h = 0,
              u = new n(e),
              c = new n(e),
              f = new n(e),
              a = new n(e),
              E = 4849845;
            if ((t.norm(), t.cfactor(E))) return !1;
            (f.one(), a.copy(t), a.sub(f), a.norm(), u.copy(a));
            while (0 === u.parity()) (u.shr(), h++);
            if (0 === h) return !1;
            for (o = 0; o < 10; o++)
              if (
                (c.randomnum(t, i),
                c.pow(u, t),
                0 !== n.comp(c, f) && 0 !== n.comp(c, a))
              ) {
                for (r = !1, s = 1; s < h; s++) {
                  if ((c.power(2, t), 0 === n.comp(c, f))) return !1;
                  if (0 === n.comp(c, a)) {
                    r = !0;
                    break;
                  }
                }
                if (!r) return !1;
              }
            return !0;
          }),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.FF = r);
    },
    3508: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = function (i) {
          i instanceof n
            ? ((this.f = new t.BIG(i.f)), (this.XES = i.XES))
            : ((this.f = new t.BIG(i)), this.nres());
        };
        return (
          (n.NOT_SPECIAL = 0),
          (n.PSEUDO_MERSENNE = 1),
          (n.GENERALISED_MERSENNE = 2),
          (n.MONTGOMERY_FRIENDLY = 3),
          (n.MODBITS = t.config["@NBT"]),
          (n.MOD8 = t.config["@M8"]),
          (n.MODTYPE = t.config["@MT"]),
          (n.FEXCESS = 1 << t.config["@SH"]),
          (n.OMASK = -1 << n.TBITS),
          (n.TBITS = n.MODBITS % t.BIG.BASEBITS),
          (n.TMASK = (1 << n.TBITS) - 1),
          (n.prototype = {
            zero: function () {
              ((this.XES = 1), this.f.zero());
            },
            rcopy: function (t) {
              (this.f.rcopy(t), this.nres());
            },
            bcopy: function (t) {
              (this.f.copy(t), this.nres());
            },
            copy: function (t) {
              ((this.XES = t.XES), this.f.copy(t.f));
            },
            cswap: function (t, n) {
              this.f.cswap(t.f, n);
              var i,
                r = n;
              ((r = ~(r - 1)),
                (i = r & (this.XES ^ t.XES)),
                (this.XES ^= i),
                (t.XES ^= i));
            },
            cmove: function (t, n) {
              var i = n;
              ((i = ~(i - 1)),
                this.f.cmove(t.f, n),
                (this.XES ^= (this.XES ^ t.XES) & i));
            },
            nres: function () {
              var i, r;
              return (
                n.MODTYPE != n.PSEUDO_MERSENNE &&
                n.MODTYPE != n.GENERALISED_MERSENNE
                  ? ((i = new t.BIG()),
                    i.rcopy(t.ROM_FIELD.R2modp),
                    (r = t.BIG.mul(this.f, i)),
                    this.f.copy(n.mod(r)),
                    (this.XES = 2))
                  : (this.XES = 1),
                this
              );
            },
            redc: function () {
              var i,
                r,
                o = new t.BIG(0);
              return (
                o.copy(this.f),
                n.MODTYPE != n.PSEUDO_MERSENNE &&
                  n.MODTYPE != n.GENERALISED_MERSENNE &&
                  ((i = new t.DBIG(0)),
                  i.hcopy(this.f),
                  (r = n.mod(i)),
                  o.copy(r)),
                o
              );
            },
            toString: function () {
              var t = this.redc().toString();
              return t;
            },
            iszilch: function () {
              return (this.reduce(), this.f.iszilch());
            },
            reduce: function () {
              var n = new t.BIG(0);
              (n.rcopy(t.ROM_FIELD.Modulus), this.f.mod(n), (this.XES = 1));
            },
            one: function () {
              return (this.f.one(), this.nres());
            },
            norm: function () {
              return this.f.norm();
            },
            mul: function (i) {
              var r;
              return (
                this.XES * i.XES > n.FEXCESS && this.reduce(),
                (r = t.BIG.mul(this.f, i.f)),
                this.f.copy(n.mod(r)),
                (this.XES = 2),
                this
              );
            },
            imul: function (t) {
              var i,
                r,
                o = !1;
              return (
                t < 0 && ((t = -t), (o = !0)),
                n.MODTYPE == n.PSEUDO_MERSENNE ||
                n.MODTYPE == n.GENERALISED_MERSENNE
                  ? ((i = this.f.pxmul(t)),
                    this.f.copy(n.mod(i)),
                    (this.XES = 2))
                  : this.XES * t <= n.FEXCESS
                    ? (this.f.pmul(t), (this.XES *= t))
                    : ((r = new n(t)), this.mul(r)),
                o && (this.neg(), this.norm()),
                this
              );
            },
            sqr: function () {
              var i, r;
              return (
                this.XES * this.XES > n.FEXCESS && this.reduce(),
                (i = t.BIG.sqr(this.f)),
                (r = n.mod(i)),
                this.f.copy(r),
                (this.XES = 2),
                this
              );
            },
            add: function (t) {
              return (
                this.f.add(t.f),
                (this.XES += t.XES),
                this.XES > n.FEXCESS && this.reduce(),
                this
              );
            },
            neg: function () {
              var i,
                r = new t.BIG(0);
              return (
                r.rcopy(t.ROM_FIELD.Modulus),
                (i = n.logb2(this.XES - 1)),
                r.fshl(i),
                (this.XES = 1 << i),
                this.f.rsub(r),
                this.XES > n.FEXCESS && this.reduce(),
                this
              );
            },
            sub: function (t) {
              var i = new n(0);
              return (i.copy(t), i.neg(), this.add(i), this);
            },
            rsub: function (t) {
              var i = new n(0);
              (i.copy(this), i.neg(), this.copy(t), this.add(i));
            },
            div2: function () {
              var n;
              return (
                0 === this.f.parity() ||
                  ((n = new t.BIG(0)),
                  n.rcopy(t.ROM_FIELD.Modulus),
                  this.f.add(n),
                  this.f.norm()),
                this.f.fshr(1),
                this
              );
            },
            inverse: function () {
              var n = new t.BIG(0),
                i = this.redc();
              return (
                n.rcopy(t.ROM_FIELD.Modulus),
                i.invmodp(n),
                this.f.copy(i),
                this.nres()
              );
            },
            equals: function (n) {
              return (n.reduce(), this.reduce(), 0 === t.BIG.comp(n.f, this.f));
            },
            pow: function (t) {
              var i,
                r = new n(1),
                o = new n(0);
              for (t.norm(), this.norm(), o.copy(this); ; ) {
                if (
                  ((i = t.parity()), t.fshr(1), 1 == i && r.mul(o), t.iszilch())
                )
                  break;
                o.sqr();
              }
              return (r.reduce(), r);
            },
            jacobi: function () {
              var n = new t.BIG(0),
                i = this.redc();
              return (n.rcopy(t.ROM_FIELD.Modulus), i.jacobi(n));
            },
            sqrt: function () {
              var i,
                r,
                o,
                s = new t.BIG(0);
              return (
                this.reduce(),
                s.rcopy(t.ROM_FIELD.Modulus),
                5 == n.MOD8
                  ? (s.dec(5),
                    s.norm(),
                    s.shr(3),
                    (i = new n(0)),
                    i.copy(this),
                    i.f.shl(1),
                    (r = i.pow(s)),
                    i.mul(r),
                    i.mul(r),
                    i.f.dec(1),
                    (o = new n(0)),
                    o.copy(this),
                    o.mul(r),
                    o.mul(i),
                    o.reduce(),
                    o)
                  : (s.inc(1), s.norm(), s.shr(2), this.pow(s))
              );
            },
          }),
          (n.logb2 = function (t) {
            var n;
            return (
              (t |= t >>> 1),
              (t |= t >>> 2),
              (t |= t >>> 4),
              (t |= t >>> 8),
              (t |= t >>> 16),
              (t -= (t >>> 1) & 1431655765),
              (t = (858993459 & t) + ((t >>> 2) & 858993459)),
              (n = (16843009 * ((t + (t >>> 4)) & 252645135)) >>> 24),
              n
            );
          }),
          (n.mod = function (i) {
            var r,
              o,
              s,
              e,
              h,
              u,
              c,
              f,
              a,
              E = new t.BIG(0);
            if (n.MODTYPE == n.PSEUDO_MERSENNE)
              return (
                (o = i.split(n.MODBITS)),
                E.hcopy(i),
                (s = 1 != t.ROM_FIELD.MConst ? o.pmul(t.ROM_FIELD.MConst) : 0),
                o.add(E),
                o.norm(),
                (e = o.w[t.BIG.NLEN - 1]),
                (o.w[t.BIG.NLEN - 1] &= n.TMASK),
                o.inc(
                  t.ROM_FIELD.MConst *
                    ((e >> n.TBITS) + (s << (t.BIG.BASEBITS - n.TBITS))),
                ),
                o.norm(),
                o
              );
            if (n.MODTYPE == n.MONTGOMERY_FRIENDLY) {
              for (r = 0; r < t.BIG.NLEN; r++)
                i.w[t.BIG.NLEN + r] += i.muladd(
                  i.w[r],
                  t.ROM_FIELD.MConst - 1,
                  i.w[r],
                  t.BIG.NLEN + r - 1,
                );
              for (r = 0; r < t.BIG.NLEN; r++) E.w[r] = i.w[t.BIG.NLEN + r];
              E.norm();
            }
            return (
              n.MODTYPE == n.GENERALISED_MERSENNE &&
                ((o = i.split(n.MODBITS)),
                E.hcopy(i),
                E.add(o),
                (a = new t.DBIG(0)),
                a.hcopy(o),
                a.shl(n.MODBITS / 2),
                (h = a.split(n.MODBITS)),
                (u = new t.BIG()),
                u.hcopy(a),
                E.add(h),
                E.add(u),
                h.shl(n.MODBITS / 2),
                E.add(h),
                (c = E.w[t.BIG.NLEN - 1] >> n.TBITS),
                (E.w[t.BIG.NLEN - 1] &= n.TMASK),
                (E.w[0] += c),
                (E.w[Math.floor(224 / t.BIG.BASEBITS)] +=
                  c << (224 % t.BIG.BASEBITS)),
                E.norm()),
              n.MODTYPE == n.NOT_SPECIAL &&
                ((f = new t.BIG(0)),
                f.rcopy(t.ROM_FIELD.Modulus),
                E.copy(t.BIG.monty(f, t.ROM_FIELD.MConst, i))),
              E
            );
          }),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.FP = r);
    },
    3509: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = function (i, r, o) {
          i instanceof n
            ? ((this.a = new t.FP4(i.a)),
              (this.b = new t.FP4(i.b)),
              (this.c = new t.FP4(i.c)))
            : ((this.a = new t.FP4(i)),
              (this.b = new t.FP4(r)),
              (this.c = new t.FP4(o)));
        };
        return (
          (n.prototype = {
            reduce: function () {
              (this.a.reduce(), this.b.reduce(), this.c.reduce());
            },
            norm: function () {
              (this.a.norm(), this.b.norm(), this.c.norm());
            },
            iszilch: function () {
              return (
                this.reduce(),
                this.a.iszilch() && this.b.iszilch() && this.c.iszilch()
              );
            },
            isunity: function () {
              var n = new t.FP4(1);
              return this.a.equals(n) && this.b.iszilch() && this.b.iszilch();
            },
            geta: function () {
              return this.a;
            },
            getb: function () {
              return this.b;
            },
            getc: function () {
              return this.c;
            },
            equals: function (t) {
              return (
                this.a.equals(t.a) && this.b.equals(t.b) && this.c.equals(t.c)
              );
            },
            copy: function (t) {
              (this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c));
            },
            one: function () {
              (this.a.one(), this.b.zero(), this.c.zero());
            },
            conj: function () {
              (this.a.conj(), this.b.nconj(), this.c.conj());
            },
            set: function (t, n, i) {
              (this.a.copy(t), this.b.copy(n), this.c.copy(i));
            },
            seta: function (t) {
              (this.a.copy(t), this.b.zero(), this.c.zero());
            },
            usqr: function () {
              var n = new t.FP4(this.a),
                i = new t.FP4(this.c),
                r = new t.FP4(this.b),
                o = new t.FP4(0);
              (this.a.sqr(),
                o.copy(this.a),
                o.add(this.a),
                this.a.add(o),
                n.nconj(),
                n.add(n),
                this.a.add(n),
                i.sqr(),
                i.times_i(),
                o.copy(i),
                o.add(i),
                i.add(o),
                r.sqr(),
                o.copy(r),
                o.add(r),
                r.add(o),
                this.b.conj(),
                this.b.add(this.b),
                this.c.nconj(),
                this.c.add(this.c),
                this.b.add(i),
                this.c.add(r),
                this.reduce());
            },
            sqr: function () {
              var n = new t.FP4(this.a),
                i = new t.FP4(this.b),
                r = new t.FP4(this.c),
                o = new t.FP4(this.a);
              (n.sqr(),
                i.mul(this.c),
                i.add(i),
                r.sqr(),
                o.mul(this.b),
                o.add(o),
                this.c.add(this.a),
                this.c.add(this.b),
                this.c.norm(),
                this.c.sqr(),
                this.a.copy(n),
                n.add(i),
                n.add(r),
                n.add(o),
                n.neg(),
                i.times_i(),
                r.times_i(),
                this.a.add(i),
                this.b.copy(r),
                this.b.add(o),
                this.c.add(n),
                this.norm());
            },
            mul: function (n) {
              var i = new t.FP4(this.a),
                r = new t.FP4(0),
                o = new t.FP4(this.b),
                s = new t.FP4(0),
                e = new t.FP4(this.a),
                h = new t.FP4(n.a);
              (i.mul(n.a),
                o.mul(n.b),
                e.add(this.b),
                h.add(n.b),
                e.norm(),
                h.norm(),
                r.copy(e),
                r.mul(h),
                e.copy(this.b),
                e.add(this.c),
                h.copy(n.b),
                h.add(n.c),
                e.norm(),
                h.norm(),
                s.copy(e),
                s.mul(h),
                e.copy(i),
                e.neg(),
                h.copy(o),
                h.neg(),
                r.add(e),
                this.b.copy(r),
                this.b.add(h),
                s.add(h),
                o.add(e),
                e.copy(this.a),
                e.add(this.c),
                h.copy(n.a),
                h.add(n.c),
                e.norm(),
                h.norm(),
                e.mul(h),
                o.add(e),
                e.copy(this.c),
                e.mul(n.c),
                h.copy(e),
                h.neg(),
                this.c.copy(o),
                this.c.add(h),
                s.add(h),
                e.times_i(),
                this.b.add(e),
                s.times_i(),
                this.a.copy(i),
                this.a.add(s),
                this.norm());
            },
            smul: function (n, i) {
              var r, o, s, e, h, u;
              (i == t.ECP.D_TYPE &&
                ((r = new t.FP4(this.a)),
                (s = new t.FP4(this.b)),
                (e = new t.FP4(this.b)),
                (h = new t.FP4(0)),
                (u = new t.FP4(n.a)),
                r.mul(n.a),
                s.pmul(n.b.real()),
                this.b.add(this.a),
                u.real().add(n.b.real()),
                this.b.norm(),
                u.norm(),
                this.b.mul(u),
                e.add(this.c),
                e.norm(),
                e.pmul(n.b.real()),
                h.copy(r),
                h.neg(),
                u.copy(s),
                u.neg(),
                this.b.add(h),
                this.b.add(u),
                e.add(u),
                s.add(h),
                h.copy(this.a),
                h.add(this.c),
                h.norm(),
                h.mul(n.a),
                this.c.copy(s),
                this.c.add(h),
                e.times_i(),
                this.a.copy(r),
                this.a.add(e)),
                i == t.ECP.M_TYPE &&
                  ((r = new t.FP4(this.a)),
                  (o = new t.FP4(0)),
                  (s = new t.FP4(0)),
                  (e = new t.FP4(0)),
                  (h = new t.FP4(this.a)),
                  (u = new t.FP4(0)),
                  r.mul(n.a),
                  h.add(this.b),
                  h.norm(),
                  o.copy(h),
                  o.mul(n.a),
                  h.copy(this.b),
                  h.add(this.c),
                  h.norm(),
                  e.copy(h),
                  e.pmul(n.c.getb()),
                  e.times_i(),
                  h.copy(r),
                  h.neg(),
                  o.add(h),
                  this.b.copy(o),
                  s.copy(h),
                  h.copy(this.a),
                  h.add(this.c),
                  u.copy(n.a),
                  u.add(n.c),
                  h.norm(),
                  u.norm(),
                  h.mul(u),
                  s.add(h),
                  h.copy(this.c),
                  h.pmul(n.c.getb()),
                  h.times_i(),
                  u.copy(h),
                  u.neg(),
                  this.c.copy(s),
                  this.c.add(u),
                  e.add(u),
                  h.times_i(),
                  this.b.add(h),
                  e.norm(),
                  e.times_i(),
                  this.a.copy(r),
                  this.a.add(e)),
                this.norm());
            },
            inverse: function () {
              var n = new t.FP4(this.a),
                i = new t.FP4(this.b),
                r = new t.FP4(this.a),
                o = new t.FP4(0);
              (n.sqr(),
                i.mul(this.c),
                i.times_i(),
                n.sub(i),
                n.norm(),
                i.copy(this.c),
                i.sqr(),
                i.times_i(),
                r.mul(this.b),
                i.sub(r),
                i.norm(),
                r.copy(this.b),
                r.sqr(),
                o.copy(this.a),
                o.mul(this.c),
                r.sub(o),
                r.norm(),
                o.copy(this.b),
                o.mul(r),
                o.times_i(),
                this.a.mul(n),
                o.add(this.a),
                this.c.mul(i),
                this.c.times_i(),
                o.add(this.c),
                o.norm(),
                o.inverse(),
                this.a.copy(n),
                this.a.mul(o),
                this.b.copy(i),
                this.b.mul(o),
                this.c.copy(r),
                this.c.mul(o));
            },
            frob: function (n) {
              var i = new t.FP2(n),
                r = new t.FP2(n);
              (i.sqr(),
                r.mul(i),
                this.a.frob(r),
                this.b.frob(r),
                this.c.frob(r),
                this.b.pmul(n),
                this.c.pmul(i));
            },
            trace: function () {
              var n = new t.FP4(0);
              return (n.copy(this.a), n.imul(3), n.reduce(), n);
            },
            toString: function () {
              return (
                "[" +
                this.a.toString() +
                "," +
                this.b.toString() +
                "," +
                this.c.toString() +
                "]"
              );
            },
            toBytes: function (n) {
              var i,
                r = [];
              for (
                this.a.geta().getA().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i] = r[i];
              for (
                this.a.geta().getB().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i + t.BIG.MODBYTES] = r[i];
              for (
                this.a.getb().getA().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i + 2 * t.BIG.MODBYTES] = r[i];
              for (
                this.a.getb().getB().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i + 3 * t.BIG.MODBYTES] = r[i];
              for (
                this.b.geta().getA().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i + 4 * t.BIG.MODBYTES] = r[i];
              for (
                this.b.geta().getB().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i + 5 * t.BIG.MODBYTES] = r[i];
              for (
                this.b.getb().getA().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i + 6 * t.BIG.MODBYTES] = r[i];
              for (
                this.b.getb().getB().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i + 7 * t.BIG.MODBYTES] = r[i];
              for (
                this.c.geta().getA().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i + 8 * t.BIG.MODBYTES] = r[i];
              for (
                this.c.geta().getB().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i + 9 * t.BIG.MODBYTES] = r[i];
              for (
                this.c.getb().getA().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i + 10 * t.BIG.MODBYTES] = r[i];
              for (
                this.c.getb().getB().toBytes(r), i = 0;
                i < t.BIG.MODBYTES;
                i++
              )
                n[i + 11 * t.BIG.MODBYTES] = r[i];
            },
            pow: function (i) {
              var r, o, s, e, h;
              for (
                this.norm(),
                  i.norm(),
                  r = new t.BIG(i),
                  r.pmul(3),
                  r.norm(),
                  o = new n(this),
                  s = r.nbits(),
                  e = s - 2;
                e >= 1;
                e--
              )
                (o.usqr(),
                  (h = r.bit(e) - i.bit(e)),
                  1 == h && o.mul(this),
                  -1 == h && (this.conj(), o.mul(this), this.conj()));
              return (o.reduce(), o);
            },
            pinpow: function (t, i) {
              var r,
                o,
                s = [];
              for (s[0] = new n(1), s[1] = new n(this), r = i - 1; r >= 0; r--)
                ((o = (t >> r) & 1), s[1 - o].mul(s[o]), s[o].usqr());
              this.copy(s[0]);
            },
            compow: function (i, r) {
              var o, s, e, h, u, c, f, a, E, p, d, w, y;
              return (
                (o = new t.BIG(0)),
                o.rcopy(t.ROM_FIELD.Fra),
                (s = new t.BIG(0)),
                s.rcopy(t.ROM_FIELD.Frb),
                (e = new t.FP2(o, s)),
                (h = new t.BIG(0)),
                h.rcopy(t.ROM_FIELD.Modulus),
                (u = new t.BIG(h)),
                u.mod(r),
                (c = new t.BIG(i)),
                c.mod(u),
                (f = new t.BIG(i)),
                f.div(u),
                (a = new n(0)),
                (E = new n(0)),
                a.copy(this),
                (p = a.trace()),
                f.iszilch()
                  ? ((p = p.xtr_pow(i)), p)
                  : (E.copy(a),
                    E.frob(e),
                    (d = E.trace()),
                    a.conj(),
                    E.mul(a),
                    (w = E.trace()),
                    E.mul(a),
                    (y = E.trace()),
                    (p = p.xtr_pow2(d, w, y, c, f)),
                    p)
              );
            },
          }),
          (n.fromBytes = function (i) {
            var r,
              o,
              s,
              e,
              h,
              u,
              c,
              f,
              a,
              E = [];
            for (r = 0; r < t.BIG.MODBYTES; r++) E[r] = i[r];
            for (o = t.BIG.fromBytes(E), r = 0; r < t.BIG.MODBYTES; r++)
              E[r] = i[r + t.BIG.MODBYTES];
            for (
              s = t.BIG.fromBytes(E), e = new t.FP2(o, s), r = 0;
              r < t.BIG.MODBYTES;
              r++
            )
              E[r] = i[r + 2 * t.BIG.MODBYTES];
            for (o = t.BIG.fromBytes(E), r = 0; r < t.BIG.MODBYTES; r++)
              E[r] = i[r + 3 * t.BIG.MODBYTES];
            for (
              s = t.BIG.fromBytes(E),
                h = new t.FP2(o, s),
                u = new t.FP4(e, h),
                r = 0;
              r < t.BIG.MODBYTES;
              r++
            )
              E[r] = i[r + 4 * t.BIG.MODBYTES];
            for (o = t.BIG.fromBytes(E), r = 0; r < t.BIG.MODBYTES; r++)
              E[r] = i[r + 5 * t.BIG.MODBYTES];
            for (
              s = t.BIG.fromBytes(E), e = new t.FP2(o, s), r = 0;
              r < t.BIG.MODBYTES;
              r++
            )
              E[r] = i[r + 6 * t.BIG.MODBYTES];
            for (o = t.BIG.fromBytes(E), r = 0; r < t.BIG.MODBYTES; r++)
              E[r] = i[r + 7 * t.BIG.MODBYTES];
            for (
              s = t.BIG.fromBytes(E),
                h = new t.FP2(o, s),
                c = new t.FP4(e, h),
                r = 0;
              r < t.BIG.MODBYTES;
              r++
            )
              E[r] = i[r + 8 * t.BIG.MODBYTES];
            for (o = t.BIG.fromBytes(E), r = 0; r < t.BIG.MODBYTES; r++)
              E[r] = i[r + 9 * t.BIG.MODBYTES];
            for (
              s = t.BIG.fromBytes(E), e = new t.FP2(o, s), r = 0;
              r < t.BIG.MODBYTES;
              r++
            )
              E[r] = i[r + 10 * t.BIG.MODBYTES];
            for (o = t.BIG.fromBytes(E), r = 0; r < t.BIG.MODBYTES; r++)
              E[r] = i[r + 11 * t.BIG.MODBYTES];
            return (
              (s = t.BIG.fromBytes(E)),
              (h = new t.FP2(o, s)),
              (f = new t.FP4(e, h)),
              (a = new n(u, c, f)),
              a
            );
          }),
          (n.pow4 = function (i, r) {
            var o,
              s,
              e,
              h,
              u = [],
              c = [],
              f = [],
              a = new n(1),
              E = new n(0),
              p = [],
              d = new t.BIG(0),
              w = [];
            for (o = 0; o < 4; o++) p[o] = new t.BIG(r[o]);
            for (
              f[0] = new n(0),
                f[1] = new n(0),
                c[0] = new n(i[0]),
                f[0].copy(i[1]),
                f[0].conj(),
                c[0].mul(f[0]),
                c[1] = new n(c[0]),
                c[2] = new n(c[0]),
                c[3] = new n(c[0]),
                c[4] = new n(i[0]),
                c[4].mul(i[1]),
                c[5] = new n(c[4]),
                c[6] = new n(c[4]),
                c[7] = new n(c[4]),
                f[1].copy(i[2]),
                f[0].copy(i[3]),
                f[0].conj(),
                f[1].mul(f[0]),
                f[0].copy(f[1]),
                f[0].conj(),
                c[1].mul(f[0]),
                c[2].mul(f[1]),
                c[5].mul(f[0]),
                c[6].mul(f[1]),
                f[1].copy(i[2]),
                f[1].mul(i[3]),
                f[0].copy(f[1]),
                f[0].conj(),
                c[0].mul(f[0]),
                c[3].mul(f[1]),
                c[4].mul(f[0]),
                c[7].mul(f[1]),
                o = 0;
              o < 4;
              o++
            )
              (0 == p[o].parity() && (p[o].inc(1), p[o].norm(), a.mul(i[o])),
                d.add(p[o]),
                d.norm());
            for (a.conj(), e = 1 + d.nbits(), s = 0; s < e; s++) {
              for (o = 0; o < 4; o++)
                ((u[o] = p[o].lastbits(2) - 2),
                  p[o].dec(u[o]),
                  p[o].norm(),
                  p[o].fshr(1));
              w[s] = 8 * u[0] + 4 * u[1] + 2 * u[2] + u[3];
            }
            for (
              w[e] =
                8 * p[0].lastbits(2) +
                4 * p[1].lastbits(2) +
                2 * p[2].lastbits(2) +
                p[3].lastbits(2),
                E.copy(c[Math.floor((w[e] - 1) / 2)]),
                o = e - 1;
              o >= 0;
              o--
            )
              ((h = w[o] >> 31),
                (s = (w[o] ^ h) - h),
                (s = (s - 1) / 2),
                f[0].copy(c[s]),
                f[1].copy(c[s]),
                f[1].conj(),
                E.usqr(),
                E.mul(f[1 & h]));
            return (E.mul(a), E.reduce(), E);
          }),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.FP12 = r);
    },
    3510: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = function (i, r) {
          i instanceof n
            ? ((this.a = new t.FP(i.a)), (this.b = new t.FP(i.b)))
            : ((this.a = new t.FP(i)), (this.b = new t.FP(r)));
        };
        return (
          (n.prototype = {
            reduce: function () {
              (this.a.reduce(), this.b.reduce());
            },
            norm: function () {
              (this.a.norm(), this.b.norm());
            },
            iszilch: function () {
              return (this.reduce(), this.a.iszilch() && this.b.iszilch());
            },
            isunity: function () {
              var n = new t.FP(1);
              return this.a.equals(n) && this.b.iszilch();
            },
            cmove: function (t, n) {
              (this.a.cmove(t.a, n), this.b.cmove(t.b, n));
            },
            equals: function (t) {
              return this.a.equals(t.a) && this.b.equals(t.b);
            },
            getA: function () {
              return this.a.redc();
            },
            getB: function () {
              return this.b.redc();
            },
            set: function (t, n) {
              (this.a.copy(t), this.b.copy(n));
            },
            seta: function (t) {
              (this.a.copy(t), this.b.zero());
            },
            bset: function (t, n) {
              (this.a.bcopy(t), this.b.bcopy(n));
            },
            bseta: function (t) {
              (this.a.bcopy(t), this.b.zero());
            },
            copy: function (t) {
              (this.a.copy(t.a), this.b.copy(t.b));
            },
            zero: function () {
              (this.a.zero(), this.b.zero());
            },
            one: function () {
              (this.a.one(), this.b.zero());
            },
            neg: function () {
              var n = new t.FP(this.a),
                i = new t.FP(0);
              (n.add(this.b),
                n.neg(),
                i.copy(n),
                i.add(this.b),
                this.b.copy(n),
                this.b.add(this.a),
                this.a.copy(i));
            },
            conj: function () {
              (this.b.neg(), this.b.norm());
            },
            add: function (t) {
              (this.a.add(t.a), this.b.add(t.b));
            },
            sub: function (t) {
              var i = new n(t);
              (i.neg(), this.add(i));
            },
            rsub: function (t) {
              (this.neg(), this.add(t));
            },
            pmul: function (t) {
              (this.a.mul(t), this.b.mul(t));
            },
            imul: function (t) {
              (this.a.imul(t), this.b.imul(t));
            },
            sqr: function () {
              var n = new t.FP(this.a),
                i = new t.FP(this.a),
                r = new t.FP(this.b);
              (n.add(this.b),
                i.add(this.a),
                i.norm(),
                this.b.mul(i),
                r.neg(),
                this.a.add(r),
                this.a.norm(),
                n.norm(),
                this.a.mul(n));
            },
            mul: function (n) {
              var i,
                r,
                o,
                s,
                e,
                h,
                u = new t.BIG(0),
                c = new t.DBIG(0);
              (u.rcopy(t.ROM_FIELD.Modulus),
                c.ucopy(u),
                (this.a.XES + this.b.XES) * (n.a.XES + n.b.XES) >
                  t.FP.FEXCESS &&
                  (this.a.XES > 1 && this.a.reduce(),
                  this.b.XES > 1 && this.b.reduce()),
                (i = t.BIG.mul(this.a.f, n.a.f)),
                (r = t.BIG.mul(this.b.f, n.b.f)),
                (o = new t.BIG(this.a.f)),
                (s = new t.BIG(n.a.f)),
                o.add(this.b.f),
                o.norm(),
                s.add(n.b.f),
                s.norm(),
                (e = t.BIG.mul(o, s)),
                (h = new t.DBIG(0)),
                h.copy(i),
                h.add(r),
                r.rsub(c),
                i.add(r),
                i.norm(),
                e.sub(h),
                e.norm(),
                this.a.f.copy(t.FP.mod(i)),
                (this.a.XES = 3),
                this.b.f.copy(t.FP.mod(e)),
                (this.b.XES = 2));
            },
            sqrt: function () {
              var n, i;
              return (
                !!this.iszilch() ||
                ((n = new t.FP(this.b)),
                (i = new t.FP(this.a)),
                n.sqr(),
                i.sqr(),
                n.add(i),
                1 != n.jacobi()
                  ? (this.zero(), !1)
                  : ((n = n.sqrt()),
                    i.copy(this.a),
                    i.add(n),
                    i.norm(),
                    i.div2(),
                    1 != i.jacobi() &&
                    (i.copy(this.a),
                    i.sub(n),
                    i.norm(),
                    i.div2(),
                    1 != i.jacobi())
                      ? (this.zero(), !1)
                      : ((i = i.sqrt()),
                        this.a.copy(i),
                        i.add(i),
                        i.inverse(),
                        this.b.mul(i),
                        !0)))
              );
            },
            toString: function () {
              return "[" + this.a.toString() + "," + this.b.toString() + "]";
            },
            inverse: function () {
              var n, i;
              (this.norm(),
                (n = new t.FP(this.a)),
                (i = new t.FP(this.b)),
                n.sqr(),
                i.sqr(),
                n.add(i),
                n.inverse(),
                this.a.mul(n),
                n.neg(),
                n.norm(),
                this.b.mul(n));
            },
            div2: function () {
              (this.a.div2(), this.b.div2());
            },
            times_i: function () {
              var n = new t.FP(this.a);
              (this.a.copy(this.b), this.a.neg(), this.b.copy(n));
            },
            mul_ip: function () {
              var i = new n(this),
                r = new t.FP(this.a);
              (this.a.copy(this.b), this.a.neg(), this.b.copy(r), this.add(i));
            },
            div_ip2: function () {
              var t = new n(0);
              (t.a.copy(this.a),
                t.a.add(this.b),
                t.b.copy(this.b),
                t.b.sub(this.a),
                this.copy(t));
            },
            div_ip: function () {
              var t = new n(0);
              (this.norm(),
                t.a.copy(this.a),
                t.a.add(this.b),
                t.b.copy(this.b),
                t.b.sub(this.a),
                this.copy(t),
                this.norm(),
                this.div2());
            },
            pow: function (t) {
              this.norm();
              var i,
                r = new n(1),
                o = new n(this);
              for (t.norm(); ; ) {
                if (
                  ((i = t.parity()), t.fshr(1), 1 == i && r.mul(o), t.iszilch())
                )
                  break;
                o.sqr();
              }
              return (r.reduce(), r);
            },
          }),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.FP2 = r);
    },
    3511: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = function (i, r) {
          i instanceof n
            ? ((this.a = new t.FP2(i.a)), (this.b = new t.FP2(i.b)))
            : ((this.a = new t.FP2(i)), (this.b = new t.FP2(r)));
        };
        return (
          (n.prototype = {
            reduce: function () {
              (this.a.reduce(), this.b.reduce());
            },
            norm: function () {
              (this.a.norm(), this.b.norm());
            },
            iszilch: function () {
              return (this.reduce(), this.a.iszilch() && this.b.iszilch());
            },
            isunity: function () {
              var n = new t.FP2(1);
              return this.a.equals(n) && this.b.iszilch();
            },
            isreal: function () {
              return this.b.iszilch();
            },
            real: function () {
              return this.a;
            },
            geta: function () {
              return this.a;
            },
            getb: function () {
              return this.b;
            },
            equals: function (t) {
              return this.a.equals(t.a) && this.b.equals(t.b);
            },
            copy: function (t) {
              (this.a.copy(t.a), this.b.copy(t.b));
            },
            zero: function () {
              (this.a.zero(), this.b.zero());
            },
            one: function () {
              (this.a.one(), this.b.zero());
            },
            set: function (t, n) {
              (this.a.copy(t), this.b.copy(n));
            },
            seta: function (t) {
              (this.a.copy(t), this.b.zero());
            },
            neg: function () {
              var n = new t.FP2(this.a),
                i = new t.FP2(0);
              (n.add(this.b),
                n.neg(),
                i.copy(n),
                i.add(this.b),
                this.b.copy(n),
                this.b.add(this.a),
                this.a.copy(i),
                this.norm());
            },
            conj: function () {
              (this.b.neg(), this.norm());
            },
            nconj: function () {
              (this.a.neg(), this.norm());
            },
            add: function (t) {
              (this.a.add(t.a), this.b.add(t.b));
            },
            sub: function (t) {
              var i = new n(t);
              (i.neg(), this.add(i));
            },
            pmul: function (t) {
              (this.a.mul(t), this.b.mul(t));
            },
            imul: function (t) {
              (this.a.imul(t), this.b.imul(t));
            },
            sqr: function () {
              var n = new t.FP2(this.a),
                i = new t.FP2(this.b),
                r = new t.FP2(this.a);
              (r.mul(this.b),
                n.add(this.b),
                n.norm(),
                i.mul_ip(),
                i.add(this.a),
                i.norm(),
                this.a.copy(n),
                this.a.mul(i),
                i.copy(r),
                i.mul_ip(),
                i.add(r),
                i.neg(),
                this.a.add(i),
                this.b.copy(r),
                this.b.add(r),
                this.norm());
            },
            mul: function (n) {
              var i = new t.FP2(this.a),
                r = new t.FP2(this.b),
                o = new t.FP2(0),
                s = new t.FP2(this.b);
              (i.mul(n.a),
                r.mul(n.b),
                o.copy(n.b),
                o.add(n.a),
                s.add(this.a),
                o.norm(),
                s.norm(),
                s.mul(o),
                o.copy(i),
                o.neg(),
                s.add(o),
                o.copy(r),
                o.neg(),
                this.b.copy(s),
                this.b.add(o),
                r.mul_ip(),
                this.a.copy(r),
                this.a.add(i),
                this.norm());
            },
            toString: function () {
              return "[" + this.a.toString() + "," + this.b.toString() + "]";
            },
            inverse: function () {
              this.norm();
              var n = new t.FP2(this.a),
                i = new t.FP2(this.b);
              (n.sqr(),
                i.sqr(),
                i.mul_ip(),
                i.norm(),
                n.sub(i),
                n.inverse(),
                this.a.mul(n),
                n.neg(),
                n.norm(),
                this.b.mul(n));
            },
            times_i: function () {
              var n = new t.FP2(this.b),
                i = new t.FP2(this.b);
              (n.times_i(),
                i.add(n),
                this.b.copy(this.a),
                this.a.copy(i),
                this.norm());
            },
            frob: function (t) {
              (this.a.conj(), this.b.conj(), this.b.mul(t));
            },
            pow: function (i) {
              (this.norm(), i.norm());
              for (var r, o = new n(this), s = new t.BIG(i), e = new n(1); ; ) {
                if (
                  ((r = s.parity()),
                  s.fshr(1),
                  1 === r && e.mul(o),
                  s.iszilch())
                )
                  break;
                o.sqr();
              }
              return (e.reduce(), e);
            },
            xtr_A: function (t, i, r) {
              var o = new n(t),
                s = new n(t);
              (o.sub(i),
                o.norm(),
                o.pmul(this.a),
                s.add(i),
                s.norm(),
                s.pmul(this.b),
                s.times_i(),
                this.copy(o),
                this.add(s),
                this.add(r),
                this.reduce());
            },
            xtr_D: function () {
              var t = new n(this);
              (this.sqr(), t.conj(), t.add(t), this.sub(t), this.reduce());
            },
            xtr_pow: function (i) {
              var r,
                o,
                s,
                e,
                h = new n(3),
                u = new n(this),
                c = new n(u),
                f = new n(0),
                a = new n(0);
              for (
                c.xtr_D(),
                  i.norm(),
                  r = i.parity(),
                  o = new t.BIG(i),
                  o.fshr(1),
                  0 === r && (o.dec(1), o.norm()),
                  s = o.nbits(),
                  e = s - 1;
                e >= 0;
                e--
              )
                1 != o.bit(e)
                  ? (f.copy(u),
                    this.conj(),
                    c.conj(),
                    u.xtr_A(h, this, c),
                    this.conj(),
                    c.copy(f),
                    c.xtr_D(),
                    h.xtr_D())
                  : (f.copy(h),
                    f.conj(),
                    h.copy(u),
                    h.xtr_D(),
                    u.xtr_A(c, this, f),
                    c.xtr_D());
              return (0 === r ? a.copy(c) : a.copy(u), a.reduce(), a);
            },
            xtr_pow2: function (i, r, o, s, e) {
              (s.norm(), e.norm());
              var h,
                u = new t.BIG(s),
                c = new t.BIG(e),
                f = new t.BIG(0),
                a = new n(i),
                E = new n(this),
                p = new n(r),
                d = new n(o),
                w = new n(0),
                y = new n(0),
                I = 0;
              while (0 === c.parity() && 0 === u.parity())
                (c.fshr(1), u.fshr(1), I++);
              while (0 !== t.BIG.comp(c, u))
                (t.BIG.comp(c, u) > 0 &&
                  (f.copy(u),
                  f.imul(4),
                  f.norm(),
                  t.BIG.comp(c, f) <= 0
                    ? (f.copy(c),
                      c.copy(u),
                      u.rsub(f),
                      u.norm(),
                      y.copy(E),
                      y.xtr_A(a, p, d),
                      d.copy(p),
                      d.conj(),
                      p.copy(E),
                      E.copy(a),
                      a.copy(y))
                    : 0 === c.parity()
                      ? (c.fshr(1),
                        w.copy(d),
                        w.conj(),
                        y.copy(p),
                        y.xtr_A(a, E, w),
                        d.copy(p),
                        d.xtr_D(),
                        p.copy(y),
                        a.xtr_D())
                      : 1 == u.parity()
                        ? (c.sub(u),
                          c.norm(),
                          c.fshr(1),
                          y.copy(E),
                          y.xtr_A(a, p, d),
                          a.xtr_D(),
                          d.copy(E),
                          d.xtr_D(),
                          d.conj(),
                          E.copy(y))
                        : (f.copy(c),
                          c.copy(u),
                          c.fshr(1),
                          u.copy(f),
                          y.copy(p),
                          y.xtr_D(),
                          p.copy(d),
                          p.conj(),
                          d.copy(y),
                          d.conj(),
                          y.copy(E),
                          y.xtr_D(),
                          E.copy(a),
                          a.copy(y))),
                  t.BIG.comp(c, u) < 0 &&
                    (f.copy(c),
                    f.imul(4),
                    f.norm(),
                    t.BIG.comp(u, f) <= 0
                      ? (u.sub(c),
                        u.norm(),
                        y.copy(E),
                        y.xtr_A(a, p, d),
                        d.copy(p),
                        p.copy(a),
                        a.copy(y))
                      : 0 === u.parity()
                        ? (f.copy(c),
                          c.copy(u),
                          c.fshr(1),
                          u.copy(f),
                          y.copy(p),
                          y.xtr_D(),
                          p.copy(d),
                          p.conj(),
                          d.copy(y),
                          d.conj(),
                          y.copy(E),
                          y.xtr_D(),
                          E.copy(a),
                          a.copy(y))
                        : 1 == c.parity()
                          ? (f.copy(u),
                            u.copy(c),
                            f.sub(c),
                            f.norm(),
                            c.copy(f),
                            c.fshr(1),
                            y.copy(E),
                            y.xtr_A(a, p, d),
                            p.conj(),
                            d.copy(a),
                            d.xtr_D(),
                            d.conj(),
                            a.copy(E),
                            a.xtr_D(),
                            E.copy(y))
                          : (c.fshr(1),
                            w.copy(d),
                            w.conj(),
                            y.copy(p),
                            y.xtr_A(a, E, w),
                            d.copy(p),
                            d.xtr_D(),
                            p.copy(y),
                            a.xtr_D())));
              for (w.copy(E), w.xtr_A(a, p, d), h = 0; h < I; h++) w.xtr_D();
              return ((w = w.xtr_pow(c)), w);
            },
          }),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.FP4 = r);
    },
    3512: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = function () {
          this.table = new Array(128);
          for (var n = 0; n < 128; n++) this.table[n] = new Array(4);
          ((this.stateX = []),
            (this.Y_0 = []),
            (this.counter = 0),
            (this.lenA = []),
            (this.lenC = []),
            (this.status = 0),
            (this.a = new t.AES()));
        };
        return (
          (n.ACCEPTING_HEADER = 0),
          (n.ACCEPTING_CIPHER = 1),
          (n.NOT_ACCEPTING_MORE = 2),
          (n.FINISHED = 3),
          (n.ENCRYPTING = 0),
          (n.DECRYPTING = 1),
          (n.prototype = {
            precompute: function (t) {
              var i,
                r,
                o,
                s = [];
              for (i = r = 0; i < 4; i++, r += 4)
                ((s[0] = t[r]),
                  (s[1] = t[r + 1]),
                  (s[2] = t[r + 2]),
                  (s[3] = t[r + 3]),
                  (this.table[0][i] = n.pack(s)));
              for (i = 1; i < 128; i++) {
                for (o = 0, r = 0; r < 4; r++)
                  ((this.table[i][r] = o | (this.table[i - 1][r] >>> 1)),
                    (o = this.table[i - 1][r] << 31));
                0 !== o && (this.table[i][0] ^= 3774873600);
              }
            },
            gf2mul: function () {
              var t,
                i,
                r,
                o,
                s,
                e = [],
                h = [];
              for (
                e[0] = e[1] = e[2] = e[3] = 0, i = 8, r = 0, t = 0;
                t < 128;
                t++
              ) {
                for (
                  s = (this.stateX[r] >>> --i) & 1, s = 1 + ~s, o = 0;
                  o < 4;
                  o++
                )
                  e[o] ^= this.table[t][o] & s;
                if (0 === i && ((i = 8), r++, 16 == r)) break;
              }
              for (t = i = 0; t < 4; t++, i += 4)
                ((h = n.unpack(e[t])),
                  (this.stateX[i] = h[0]),
                  (this.stateX[i + 1] = h[1]),
                  (this.stateX[i + 2] = h[2]),
                  (this.stateX[i + 3] = h[3]));
            },
            wrap: function () {
              var t,
                i,
                r = [],
                o = [],
                s = [];
              for (
                r[0] =
                  (this.lenA[0] << 3) | ((3758096384 & this.lenA[1]) >>> 29),
                  r[1] = this.lenA[1] << 3,
                  r[2] =
                    (this.lenC[0] << 3) | ((3758096384 & this.lenC[1]) >>> 29),
                  r[3] = this.lenC[1] << 3,
                  t = i = 0;
                t < 4;
                t++, i += 4
              )
                ((s = n.unpack(r[t])),
                  (o[i] = s[0]),
                  (o[i + 1] = s[1]),
                  (o[i + 2] = s[2]),
                  (o[i + 3] = s[3]));
              for (t = 0; t < 16; t++) this.stateX[t] ^= o[t];
              this.gf2mul();
            },
            init: function (i, r, o, s) {
              var e,
                h = [],
                u = [];
              for (e = 0; e < 16; e++) ((h[e] = 0), (this.stateX[e] = 0));
              if (
                (this.a.init(t.AES.ECB, i, r, s),
                this.a.ecb_encrypt(h),
                this.precompute(h),
                (this.lenA[0] = this.lenC[0] = this.lenA[1] = this.lenC[1] = 0),
                12 == o)
              ) {
                for (e = 0; e < 12; e++) this.a.f[e] = s[e];
                for (
                  u = n.unpack(1),
                    this.a.f[12] = u[0],
                    this.a.f[13] = u[1],
                    this.a.f[14] = u[2],
                    this.a.f[15] = u[3],
                    e = 0;
                  e < 16;
                  e++
                )
                  this.Y_0[e] = this.a.f[e];
              } else {
                for (
                  this.status = n.ACCEPTING_CIPHER,
                    this.ghash(s, o),
                    this.wrap(),
                    e = 0;
                  e < 16;
                  e++
                )
                  ((this.a.f[e] = this.stateX[e]),
                    (this.Y_0[e] = this.a.f[e]),
                    (this.stateX[e] = 0));
                this.lenA[0] = this.lenC[0] = this.lenA[1] = this.lenC[1] = 0;
              }
              this.status = n.ACCEPTING_HEADER;
            },
            add_header: function (t, i) {
              var r,
                o = 0;
              if (this.status != n.ACCEPTING_HEADER) return !1;
              while (o < i) {
                for (r = 0; r < 16 && o < i; r++)
                  ((this.stateX[r] ^= t[o++]),
                    this.lenA[1]++,
                    (this.lenA[1] |= 0),
                    0 === this.lenA[1] && this.lenA[0]++);
                this.gf2mul();
              }
              return (i % 16 !== 0 && (this.status = n.ACCEPTING_CIPHER), !0);
            },
            ghash: function (t, i) {
              var r,
                o = 0;
              if (
                (this.status == n.ACCEPTING_HEADER &&
                  (this.status = n.ACCEPTING_CIPHER),
                this.status != n.ACCEPTING_CIPHER)
              )
                return !1;
              while (o < i) {
                for (r = 0; r < 16 && o < i; r++)
                  ((this.stateX[r] ^= t[o++]),
                    this.lenC[1]++,
                    (this.lenC[1] |= 0),
                    0 === this.lenC[1] && this.lenC[0]++);
                this.gf2mul();
              }
              return (i % 16 !== 0 && (this.status = n.NOT_ACCEPTING_MORE), !0);
            },
            add_plain: function (t, i) {
              var r,
                o = [],
                s = [],
                e = [],
                h = 0;
              if (
                (this.status == n.ACCEPTING_HEADER &&
                  (this.status = n.ACCEPTING_CIPHER),
                this.status != n.ACCEPTING_CIPHER)
              )
                return e;
              while (h < i) {
                for (
                  s[0] = this.a.f[12],
                    s[1] = this.a.f[13],
                    s[2] = this.a.f[14],
                    s[3] = this.a.f[15],
                    this.counter = n.pack(s),
                    this.counter++,
                    s = n.unpack(this.counter),
                    this.a.f[12] = s[0],
                    this.a.f[13] = s[1],
                    this.a.f[14] = s[2],
                    this.a.f[15] = s[3],
                    r = 0;
                  r < 16;
                  r++
                )
                  o[r] = this.a.f[r];
                for (this.a.ecb_encrypt(o), r = 0; r < 16 && h < i; r++)
                  ((e[h] = t[h] ^ o[r]),
                    (this.stateX[r] ^= e[h++]),
                    this.lenC[1]++,
                    (this.lenC[1] |= 0),
                    0 === this.lenC[1] && this.lenC[0]++);
                this.gf2mul();
              }
              return (i % 16 !== 0 && (this.status = n.NOT_ACCEPTING_MORE), e);
            },
            add_cipher: function (t, i) {
              var r,
                o,
                s = [],
                e = [],
                h = [],
                u = 0;
              if (
                (this.status == n.ACCEPTING_HEADER &&
                  (this.status = n.ACCEPTING_CIPHER),
                this.status != n.ACCEPTING_CIPHER)
              )
                return h;
              while (u < i) {
                for (
                  e[0] = this.a.f[12],
                    e[1] = this.a.f[13],
                    e[2] = this.a.f[14],
                    e[3] = this.a.f[15],
                    this.counter = n.pack(e),
                    this.counter++,
                    e = n.unpack(this.counter),
                    this.a.f[12] = e[0],
                    this.a.f[13] = e[1],
                    this.a.f[14] = e[2],
                    this.a.f[15] = e[3],
                    r = 0;
                  r < 16;
                  r++
                )
                  s[r] = this.a.f[r];
                for (this.a.ecb_encrypt(s), r = 0; r < 16 && u < i; r++)
                  ((o = t[u]),
                    (h[u] = t[u] ^ s[r]),
                    (this.stateX[r] ^= o),
                    u++,
                    this.lenC[1]++,
                    (this.lenC[1] |= 0),
                    0 === this.lenC[1] && this.lenC[0]++);
                this.gf2mul();
              }
              return (i % 16 !== 0 && (this.status = n.NOT_ACCEPTING_MORE), h);
            },
            finish: function (t) {
              var i,
                r = [];
              if ((this.wrap(), t)) {
                for (this.a.ecb_encrypt(this.Y_0), i = 0; i < 16; i++)
                  this.Y_0[i] ^= this.stateX[i];
                for (i = 0; i < 16; i++)
                  ((r[i] = this.Y_0[i]), (this.Y_0[i] = this.stateX[i] = 0));
              }
              return ((this.status = n.FINISHED), this.a.end(), r);
            },
          }),
          (n.pack = function (t) {
            return (
              ((255 & t[0]) << 24) |
              ((255 & t[1]) << 16) |
              ((255 & t[2]) << 8) |
              (255 & t[3])
            );
          }),
          (n.unpack = function (t) {
            var n = [];
            return (
              (n[3] = 255 & t),
              (n[2] = (t >>> 8) & 255),
              (n[1] = (t >>> 16) & 255),
              (n[0] = (t >>> 24) & 255),
              n
            );
          }),
          (n.hex2bytes = function (t) {
            var n,
              i = t.length,
              r = [];
            for (n = 0; n < i; n += 2) r[n / 2] = parseInt(t.substr(n, 2), 16);
            return r;
          }),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.GCM = r);
    },
    3513: function (t, n, i) {
      var r = function () {
        "use strict";
        var t = function () {
          ((this.length = []), (this.h = []), (this.w = []), this.init());
        };
        return (
          (t.prototype = {
            transform: function () {
              var n, i, r, o, s, e, h, u, c, f, a;
              for (a = 16; a < 64; a++)
                this.w[a] =
                  (t.theta1(this.w[a - 2]) +
                    this.w[a - 7] +
                    t.theta0(this.w[a - 15]) +
                    this.w[a - 16]) |
                  0;
              for (
                n = this.h[0],
                  i = this.h[1],
                  r = this.h[2],
                  o = this.h[3],
                  s = this.h[4],
                  e = this.h[5],
                  h = this.h[6],
                  u = this.h[7],
                  a = 0;
                a < 64;
                a++
              )
                ((c =
                  (u + t.Sig1(s) + t.Ch(s, e, h) + t.HK[a] + this.w[a]) | 0),
                  (f = (t.Sig0(n) + t.Maj(n, i, r)) | 0),
                  (u = h),
                  (h = e),
                  (e = s),
                  (s = (o + c) | 0),
                  (o = r),
                  (r = i),
                  (i = n),
                  (n = (c + f) | 0));
              ((this.h[0] += n),
                (this.h[1] += i),
                (this.h[2] += r),
                (this.h[3] += o),
                (this.h[4] += s),
                (this.h[5] += e),
                (this.h[6] += h),
                (this.h[7] += u));
            },
            init: function () {
              var n;
              for (n = 0; n < 64; n++) this.w[n] = 0;
              ((this.length[0] = this.length[1] = 0),
                (this.h[0] = t.H[0]),
                (this.h[1] = t.H[1]),
                (this.h[2] = t.H[2]),
                (this.h[3] = t.H[3]),
                (this.h[4] = t.H[4]),
                (this.h[5] = t.H[5]),
                (this.h[6] = t.H[6]),
                (this.h[7] = t.H[7]));
            },
            process: function (t) {
              var n;
              ((n = (this.length[0] >>> 5) % 16),
                (this.w[n] <<= 8),
                (this.w[n] |= 255 & t),
                (this.length[0] += 8),
                0 === (4294967295 & this.length[0]) &&
                  (this.length[1]++, (this.length[0] = 0)),
                this.length[0] % 512 === 0 && this.transform());
            },
            process_array: function (t) {
              for (var n = 0; n < t.length; n++) this.process(t[n]);
            },
            process_num: function (t) {
              (this.process((t >> 24) & 255),
                this.process((t >> 16) & 255),
                this.process((t >> 8) & 255),
                this.process(255 & t));
            },
            hash: function () {
              var n,
                i,
                r,
                o = [];
              ((n = this.length[0]), (i = this.length[1]), this.process(128));
              while (this.length[0] % 512 != 448) this.process(0);
              for (
                this.w[14] = i, this.w[15] = n, this.transform(), r = 0;
                r < t.len;
                r++
              )
                o[r] = (this.h[r >>> 2] >> (8 * (3 - (r % 4)))) & 255;
              return (this.init(), o);
            },
          }),
          (t.S = function (t, n) {
            return (n >>> t) | (n << (32 - t));
          }),
          (t.R = function (t, n) {
            return n >>> t;
          }),
          (t.Ch = function (t, n, i) {
            return (t & n) ^ (~t & i);
          }),
          (t.Maj = function (t, n, i) {
            return (t & n) ^ (t & i) ^ (n & i);
          }),
          (t.Sig0 = function (n) {
            return t.S(2, n) ^ t.S(13, n) ^ t.S(22, n);
          }),
          (t.Sig1 = function (n) {
            return t.S(6, n) ^ t.S(11, n) ^ t.S(25, n);
          }),
          (t.theta0 = function (n) {
            return t.S(7, n) ^ t.S(18, n) ^ t.R(3, n);
          }),
          (t.theta1 = function (n) {
            return t.S(17, n) ^ t.S(19, n) ^ t.R(10, n);
          }),
          (t.len = 32),
          (t.H = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          (t.HK = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ]),
          t
        );
      };
      "undefined" !== typeof t.exports && (t.exports.HASH256 = r);
    },
    3514: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = function () {
          ((this.length = []), (this.h = []), (this.w = []), this.init());
        };
        return (
          (n.prototype = {
            transform: function () {
              var t, i, r, o, s, e, h, u, c, f, a;
              for (a = 16; a < 80; a++)
                this.w[a] = n
                  .theta1(this.w[a - 2])
                  .add(this.w[a - 7])
                  .add(n.theta0(this.w[a - 15]))
                  .add(this.w[a - 16]);
              for (
                t = this.h[0].copy(),
                  i = this.h[1].copy(),
                  r = this.h[2].copy(),
                  o = this.h[3].copy(),
                  s = this.h[4].copy(),
                  e = this.h[5].copy(),
                  h = this.h[6].copy(),
                  u = this.h[7].copy(),
                  a = 0;
                a < 80;
                a++
              )
                ((c = u.copy()),
                  c
                    .add(n.Sig1(s))
                    .add(n.Ch(s, e, h))
                    .add(n.HK[a])
                    .add(this.w[a]),
                  (f = n.Sig0(t)),
                  f.add(n.Maj(t, i, r)),
                  (u = h),
                  (h = e),
                  (e = s),
                  (s = o.copy()),
                  s.add(c),
                  (o = r),
                  (r = i),
                  (i = t),
                  (t = c.copy()),
                  t.add(f));
              (this.h[0].add(t),
                this.h[1].add(i),
                this.h[2].add(r),
                this.h[3].add(o),
                this.h[4].add(s),
                this.h[5].add(e),
                this.h[6].add(h),
                this.h[7].add(u));
            },
            init: function () {
              var i;
              for (i = 0; i < 80; i++) this.w[i] = new t.UInt64(0, 0);
              ((this.length[0] = new t.UInt64(0, 0)),
                (this.length[1] = new t.UInt64(0, 0)),
                (this.h[0] = n.H[0].copy()),
                (this.h[1] = n.H[1].copy()),
                (this.h[2] = n.H[2].copy()),
                (this.h[3] = n.H[3].copy()),
                (this.h[4] = n.H[4].copy()),
                (this.h[5] = n.H[5].copy()),
                (this.h[6] = n.H[6].copy()),
                (this.h[7] = n.H[7].copy()));
            },
            process: function (n) {
              var i, r;
              ((i = (this.length[0].bot >>> 6) % 16),
                this.w[i].shlb(),
                (this.w[i].bot |= 255 & n),
                (r = new t.UInt64(0, 8)),
                this.length[0].add(r),
                0 === this.length[0].top &&
                  0 == this.length[0].bot &&
                  ((r = new t.UInt64(0, 1)), this.length[1].add(r)),
                this.length[0].bot % 1024 === 0 && this.transform());
            },
            process_array: function (t) {
              for (var n = 0; n < t.length; n++) this.process(t[n]);
            },
            process_num: function (t) {
              (this.process((t >> 24) & 255),
                this.process((t >> 16) & 255),
                this.process((t >> 8) & 255),
                this.process(255 & t));
            },
            hash: function () {
              var t,
                i,
                r,
                o = [];
              ((t = this.length[0].copy()),
                (i = this.length[1].copy()),
                this.process(128));
              while (this.length[0].bot % 1024 != 896) this.process(0);
              for (
                this.w[14] = i, this.w[15] = t, this.transform(), r = 0;
                r < n.len;
                r++
              )
                o[r] = 255 & n.R(8 * (7 - (r % 8)), this.h[r >>> 3]).bot;
              return (this.init(), o);
            },
          }),
          (n.S = function (n, i) {
            return 0 == n
              ? i
              : n < 32
                ? new t.UInt64(
                    (i.top >>> n) | (i.bot << (32 - n)),
                    (i.bot >>> n) | (i.top << (32 - n)),
                  )
                : new t.UInt64(
                    (i.bot >>> (n - 32)) | (i.top << (64 - n)),
                    (i.top >>> (n - 32)) | (i.bot << (64 - n)),
                  );
          }),
          (n.R = function (n, i) {
            return 0 == n
              ? i
              : n < 32
                ? new t.UInt64(i.top >>> n, (i.bot >>> n) | (i.top << (32 - n)))
                : new t.UInt64(0, i.top >>> (n - 32));
          }),
          (n.Ch = function (n, i, r) {
            return new t.UInt64(
              (n.top & i.top) ^ (~n.top & r.top),
              (n.bot & i.bot) ^ (~n.bot & r.bot),
            );
          }),
          (n.Maj = function (n, i, r) {
            return new t.UInt64(
              (n.top & i.top) ^ (n.top & r.top) ^ (i.top & r.top),
              (n.bot & i.bot) ^ (n.bot & r.bot) ^ (i.bot & r.bot),
            );
          }),
          (n.Sig0 = function (i) {
            var r = n.S(28, i),
              o = n.S(34, i),
              s = n.S(39, i);
            return new t.UInt64(r.top ^ o.top ^ s.top, r.bot ^ o.bot ^ s.bot);
          }),
          (n.Sig1 = function (i) {
            var r = n.S(14, i),
              o = n.S(18, i),
              s = n.S(41, i);
            return new t.UInt64(r.top ^ o.top ^ s.top, r.bot ^ o.bot ^ s.bot);
          }),
          (n.theta0 = function (i) {
            var r = n.S(1, i),
              o = n.S(8, i),
              s = n.R(7, i);
            return new t.UInt64(r.top ^ o.top ^ s.top, r.bot ^ o.bot ^ s.bot);
          }),
          (n.theta1 = function (i) {
            var r = n.S(19, i),
              o = n.S(61, i),
              s = n.R(6, i);
            return new t.UInt64(r.top ^ o.top ^ s.top, r.bot ^ o.bot ^ s.bot);
          }),
          (n.len = 48),
          (n.H = [
            new t.UInt64(3418070365, 3238371032),
            new t.UInt64(1654270250, 914150663),
            new t.UInt64(2438529370, 812702999),
            new t.UInt64(355462360, 4144912697),
            new t.UInt64(1731405415, 4290775857),
            new t.UInt64(2394180231, 1750603025),
            new t.UInt64(3675008525, 1694076839),
            new t.UInt64(1203062813, 3204075428),
          ]),
          (n.HK = [
            new t.UInt64(1116352408, 3609767458),
            new t.UInt64(1899447441, 602891725),
            new t.UInt64(3049323471, 3964484399),
            new t.UInt64(3921009573, 2173295548),
            new t.UInt64(961987163, 4081628472),
            new t.UInt64(1508970993, 3053834265),
            new t.UInt64(2453635748, 2937671579),
            new t.UInt64(2870763221, 3664609560),
            new t.UInt64(3624381080, 2734883394),
            new t.UInt64(310598401, 1164996542),
            new t.UInt64(607225278, 1323610764),
            new t.UInt64(1426881987, 3590304994),
            new t.UInt64(1925078388, 4068182383),
            new t.UInt64(2162078206, 991336113),
            new t.UInt64(2614888103, 633803317),
            new t.UInt64(3248222580, 3479774868),
            new t.UInt64(3835390401, 2666613458),
            new t.UInt64(4022224774, 944711139),
            new t.UInt64(264347078, 2341262773),
            new t.UInt64(604807628, 2007800933),
            new t.UInt64(770255983, 1495990901),
            new t.UInt64(1249150122, 1856431235),
            new t.UInt64(1555081692, 3175218132),
            new t.UInt64(1996064986, 2198950837),
            new t.UInt64(2554220882, 3999719339),
            new t.UInt64(2821834349, 766784016),
            new t.UInt64(2952996808, 2566594879),
            new t.UInt64(3210313671, 3203337956),
            new t.UInt64(3336571891, 1034457026),
            new t.UInt64(3584528711, 2466948901),
            new t.UInt64(113926993, 3758326383),
            new t.UInt64(338241895, 168717936),
            new t.UInt64(666307205, 1188179964),
            new t.UInt64(773529912, 1546045734),
            new t.UInt64(1294757372, 1522805485),
            new t.UInt64(1396182291, 2643833823),
            new t.UInt64(1695183700, 2343527390),
            new t.UInt64(1986661051, 1014477480),
            new t.UInt64(2177026350, 1206759142),
            new t.UInt64(2456956037, 344077627),
            new t.UInt64(2730485921, 1290863460),
            new t.UInt64(2820302411, 3158454273),
            new t.UInt64(3259730800, 3505952657),
            new t.UInt64(3345764771, 106217008),
            new t.UInt64(3516065817, 3606008344),
            new t.UInt64(3600352804, 1432725776),
            new t.UInt64(4094571909, 1467031594),
            new t.UInt64(275423344, 851169720),
            new t.UInt64(430227734, 3100823752),
            new t.UInt64(506948616, 1363258195),
            new t.UInt64(659060556, 3750685593),
            new t.UInt64(883997877, 3785050280),
            new t.UInt64(958139571, 3318307427),
            new t.UInt64(1322822218, 3812723403),
            new t.UInt64(1537002063, 2003034995),
            new t.UInt64(1747873779, 3602036899),
            new t.UInt64(1955562222, 1575990012),
            new t.UInt64(2024104815, 1125592928),
            new t.UInt64(2227730452, 2716904306),
            new t.UInt64(2361852424, 442776044),
            new t.UInt64(2428436474, 593698344),
            new t.UInt64(2756734187, 3733110249),
            new t.UInt64(3204031479, 2999351573),
            new t.UInt64(3329325298, 3815920427),
            new t.UInt64(3391569614, 3928383900),
            new t.UInt64(3515267271, 566280711),
            new t.UInt64(3940187606, 3454069534),
            new t.UInt64(4118630271, 4000239992),
            new t.UInt64(116418474, 1914138554),
            new t.UInt64(174292421, 2731055270),
            new t.UInt64(289380356, 3203993006),
            new t.UInt64(460393269, 320620315),
            new t.UInt64(685471733, 587496836),
            new t.UInt64(852142971, 1086792851),
            new t.UInt64(1017036298, 365543100),
            new t.UInt64(1126000580, 2618297676),
            new t.UInt64(1288033470, 3409855158),
            new t.UInt64(1501505948, 4234509866),
            new t.UInt64(1607167915, 987167468),
            new t.UInt64(1816402316, 1246189591),
          ]),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.HASH384 = r);
    },
    3515: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = function () {
          ((this.length = []), (this.h = []), (this.w = []), this.init());
        };
        return (
          (n.prototype = {
            transform: function () {
              var t, i, r, o, s, e, h, u, c, f, a;
              for (a = 16; a < 80; a++)
                this.w[a] = n
                  .theta1(this.w[a - 2])
                  .add(this.w[a - 7])
                  .add(n.theta0(this.w[a - 15]))
                  .add(this.w[a - 16]);
              for (
                t = this.h[0].copy(),
                  i = this.h[1].copy(),
                  r = this.h[2].copy(),
                  o = this.h[3].copy(),
                  s = this.h[4].copy(),
                  e = this.h[5].copy(),
                  h = this.h[6].copy(),
                  u = this.h[7].copy(),
                  a = 0;
                a < 80;
                a++
              )
                ((c = u.copy()),
                  c
                    .add(n.Sig1(s))
                    .add(n.Ch(s, e, h))
                    .add(n.HK[a])
                    .add(this.w[a]),
                  (f = n.Sig0(t)),
                  f.add(n.Maj(t, i, r)),
                  (u = h),
                  (h = e),
                  (e = s),
                  (s = o.copy()),
                  s.add(c),
                  (o = r),
                  (r = i),
                  (i = t),
                  (t = c.copy()),
                  t.add(f));
              (this.h[0].add(t),
                this.h[1].add(i),
                this.h[2].add(r),
                this.h[3].add(o),
                this.h[4].add(s),
                this.h[5].add(e),
                this.h[6].add(h),
                this.h[7].add(u));
            },
            init: function () {
              var i;
              for (i = 0; i < 80; i++) this.w[i] = new t.UInt64(0, 0);
              ((this.length[0] = new t.UInt64(0, 0)),
                (this.length[1] = new t.UInt64(0, 0)),
                (this.h[0] = n.H[0].copy()),
                (this.h[1] = n.H[1].copy()),
                (this.h[2] = n.H[2].copy()),
                (this.h[3] = n.H[3].copy()),
                (this.h[4] = n.H[4].copy()),
                (this.h[5] = n.H[5].copy()),
                (this.h[6] = n.H[6].copy()),
                (this.h[7] = n.H[7].copy()));
            },
            process: function (n) {
              var i, r;
              ((i = (this.length[0].bot >>> 6) % 16),
                this.w[i].shlb(),
                (this.w[i].bot |= 255 & n),
                (r = new t.UInt64(0, 8)),
                this.length[0].add(r),
                0 === this.length[0].top &&
                  0 == this.length[0].bot &&
                  ((r = new t.UInt64(0, 1)), this.length[1].add(r)),
                this.length[0].bot % 1024 === 0 && this.transform());
            },
            process_array: function (t) {
              for (var n = 0; n < t.length; n++) this.process(t[n]);
            },
            process_num: function (t) {
              (this.process((t >> 24) & 255),
                this.process((t >> 16) & 255),
                this.process((t >> 8) & 255),
                this.process(255 & t));
            },
            hash: function () {
              var t,
                i,
                r,
                o = [];
              ((t = this.length[0].copy()),
                (i = this.length[1].copy()),
                this.process(128));
              while (this.length[0].bot % 1024 != 896) this.process(0);
              for (
                this.w[14] = i, this.w[15] = t, this.transform(), r = 0;
                r < n.len;
                r++
              )
                o[r] = 255 & n.R(8 * (7 - (r % 8)), this.h[r >>> 3]).bot;
              return (this.init(), o);
            },
          }),
          (n.S = function (n, i) {
            return 0 == n
              ? i
              : n < 32
                ? new t.UInt64(
                    (i.top >>> n) | (i.bot << (32 - n)),
                    (i.bot >>> n) | (i.top << (32 - n)),
                  )
                : new t.UInt64(
                    (i.bot >>> (n - 32)) | (i.top << (64 - n)),
                    (i.top >>> (n - 32)) | (i.bot << (64 - n)),
                  );
          }),
          (n.R = function (n, i) {
            return 0 == n
              ? i
              : n < 32
                ? new t.UInt64(i.top >>> n, (i.bot >>> n) | (i.top << (32 - n)))
                : new t.UInt64(0, i.top >>> (n - 32));
          }),
          (n.Ch = function (n, i, r) {
            return new t.UInt64(
              (n.top & i.top) ^ (~n.top & r.top),
              (n.bot & i.bot) ^ (~n.bot & r.bot),
            );
          }),
          (n.Maj = function (n, i, r) {
            return new t.UInt64(
              (n.top & i.top) ^ (n.top & r.top) ^ (i.top & r.top),
              (n.bot & i.bot) ^ (n.bot & r.bot) ^ (i.bot & r.bot),
            );
          }),
          (n.Sig0 = function (i) {
            var r = n.S(28, i),
              o = n.S(34, i),
              s = n.S(39, i);
            return new t.UInt64(r.top ^ o.top ^ s.top, r.bot ^ o.bot ^ s.bot);
          }),
          (n.Sig1 = function (i) {
            var r = n.S(14, i),
              o = n.S(18, i),
              s = n.S(41, i);
            return new t.UInt64(r.top ^ o.top ^ s.top, r.bot ^ o.bot ^ s.bot);
          }),
          (n.theta0 = function (i) {
            var r = n.S(1, i),
              o = n.S(8, i),
              s = n.R(7, i);
            return new t.UInt64(r.top ^ o.top ^ s.top, r.bot ^ o.bot ^ s.bot);
          }),
          (n.theta1 = function (i) {
            var r = n.S(19, i),
              o = n.S(61, i),
              s = n.R(6, i);
            return new t.UInt64(r.top ^ o.top ^ s.top, r.bot ^ o.bot ^ s.bot);
          }),
          (n.len = 64),
          (n.H = [
            new t.UInt64(1779033703, 4089235720),
            new t.UInt64(3144134277, 2227873595),
            new t.UInt64(1013904242, 4271175723),
            new t.UInt64(2773480762, 1595750129),
            new t.UInt64(1359893119, 2917565137),
            new t.UInt64(2600822924, 725511199),
            new t.UInt64(528734635, 4215389547),
            new t.UInt64(1541459225, 327033209),
          ]),
          (n.HK = [
            new t.UInt64(1116352408, 3609767458),
            new t.UInt64(1899447441, 602891725),
            new t.UInt64(3049323471, 3964484399),
            new t.UInt64(3921009573, 2173295548),
            new t.UInt64(961987163, 4081628472),
            new t.UInt64(1508970993, 3053834265),
            new t.UInt64(2453635748, 2937671579),
            new t.UInt64(2870763221, 3664609560),
            new t.UInt64(3624381080, 2734883394),
            new t.UInt64(310598401, 1164996542),
            new t.UInt64(607225278, 1323610764),
            new t.UInt64(1426881987, 3590304994),
            new t.UInt64(1925078388, 4068182383),
            new t.UInt64(2162078206, 991336113),
            new t.UInt64(2614888103, 633803317),
            new t.UInt64(3248222580, 3479774868),
            new t.UInt64(3835390401, 2666613458),
            new t.UInt64(4022224774, 944711139),
            new t.UInt64(264347078, 2341262773),
            new t.UInt64(604807628, 2007800933),
            new t.UInt64(770255983, 1495990901),
            new t.UInt64(1249150122, 1856431235),
            new t.UInt64(1555081692, 3175218132),
            new t.UInt64(1996064986, 2198950837),
            new t.UInt64(2554220882, 3999719339),
            new t.UInt64(2821834349, 766784016),
            new t.UInt64(2952996808, 2566594879),
            new t.UInt64(3210313671, 3203337956),
            new t.UInt64(3336571891, 1034457026),
            new t.UInt64(3584528711, 2466948901),
            new t.UInt64(113926993, 3758326383),
            new t.UInt64(338241895, 168717936),
            new t.UInt64(666307205, 1188179964),
            new t.UInt64(773529912, 1546045734),
            new t.UInt64(1294757372, 1522805485),
            new t.UInt64(1396182291, 2643833823),
            new t.UInt64(1695183700, 2343527390),
            new t.UInt64(1986661051, 1014477480),
            new t.UInt64(2177026350, 1206759142),
            new t.UInt64(2456956037, 344077627),
            new t.UInt64(2730485921, 1290863460),
            new t.UInt64(2820302411, 3158454273),
            new t.UInt64(3259730800, 3505952657),
            new t.UInt64(3345764771, 106217008),
            new t.UInt64(3516065817, 3606008344),
            new t.UInt64(3600352804, 1432725776),
            new t.UInt64(4094571909, 1467031594),
            new t.UInt64(275423344, 851169720),
            new t.UInt64(430227734, 3100823752),
            new t.UInt64(506948616, 1363258195),
            new t.UInt64(659060556, 3750685593),
            new t.UInt64(883997877, 3785050280),
            new t.UInt64(958139571, 3318307427),
            new t.UInt64(1322822218, 3812723403),
            new t.UInt64(1537002063, 2003034995),
            new t.UInt64(1747873779, 3602036899),
            new t.UInt64(1955562222, 1575990012),
            new t.UInt64(2024104815, 1125592928),
            new t.UInt64(2227730452, 2716904306),
            new t.UInt64(2361852424, 442776044),
            new t.UInt64(2428436474, 593698344),
            new t.UInt64(2756734187, 3733110249),
            new t.UInt64(3204031479, 2999351573),
            new t.UInt64(3329325298, 3815920427),
            new t.UInt64(3391569614, 3928383900),
            new t.UInt64(3515267271, 566280711),
            new t.UInt64(3940187606, 3454069534),
            new t.UInt64(4118630271, 4000239992),
            new t.UInt64(116418474, 1914138554),
            new t.UInt64(174292421, 2731055270),
            new t.UInt64(289380356, 3203993006),
            new t.UInt64(460393269, 320620315),
            new t.UInt64(685471733, 587496836),
            new t.UInt64(852142971, 1086792851),
            new t.UInt64(1017036298, 365543100),
            new t.UInt64(1126000580, 2618297676),
            new t.UInt64(1288033470, 3409855158),
            new t.UInt64(1501505948, 4234509866),
            new t.UInt64(1607167915, 987167468),
            new t.UInt64(1816402316, 1246189591),
          ]),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.HASH512 = r);
    },
    3516: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = {
          BAD_PARAMS: -11,
          INVALID_POINT: -14,
          WRONG_ORDER: -18,
          BAD_PIN: -19,
          MAXPIN: 1e4,
          PBLEN: 14,
          TS: 12,
          TRAP: 2e3,
          EFS: t.BIG.MODBYTES,
          EGS: t.BIG.MODBYTES,
          PAS: 16,
          SHA256: 32,
          SHA384: 48,
          SHA512: 64,
          HASH_TYPE: 32,
          today: function () {
            var t = new Date();
            return Math.floor(t.getTime() / 864e5);
          },
          bytestostring: function (t) {
            var n,
              i,
              r = "",
              o = t.length;
            for (i = 0; i < o; i++)
              ((n = t[i]),
                (r += ((n >>> 4) & 15).toString(16)),
                (r += (15 & n).toString(16)));
            return r;
          },
          stringtobytes: function (t) {
            var n,
              i = [];
            for (n = 0; n < t.length; n++) i.push(t.charCodeAt(n));
            return i;
          },
          comparebytes: function (t, n) {
            if (t.length != n.length) return !1;
            for (var i = 0; i < t.length; i++) if (t[i] != n[i]) return !1;
            return !0;
          },
          mpin_hash: function (n, i, r) {
            var o,
              s,
              e,
              h = [],
              u = [],
              c = [];
            for (i.geta().getA().toBytes(u), e = 0; e < this.EFS; e++)
              h[e] = u[e];
            for (
              i.geta().getB().toBytes(u), e = this.EFS;
              e < 2 * this.EFS;
              e++
            )
              h[e] = u[e - this.EFS];
            for (
              i.getb().getA().toBytes(u), e = 2 * this.EFS;
              e < 3 * this.EFS;
              e++
            )
              h[e] = u[e - 2 * this.EFS];
            for (
              i.getb().getB().toBytes(u), e = 3 * this.EFS;
              e < 4 * this.EFS;
              e++
            )
              h[e] = u[e - 3 * this.EFS];
            for (r.getX().toBytes(u), e = 4 * this.EFS; e < 5 * this.EFS; e++)
              h[e] = u[e - 4 * this.EFS];
            for (r.getY().toBytes(u), e = 5 * this.EFS; e < 6 * this.EFS; e++)
              h[e] = u[e - 5 * this.EFS];
            if (
              (n == this.SHA256
                ? (o = new t.HASH256())
                : n == this.SHA384
                  ? (o = new t.HASH384())
                  : n == this.SHA512 && (o = new t.HASH512()),
              o.process_array(h),
              (c = o.hash()),
              0 == c.length)
            )
              return null;
            for (s = [], e = 0; e < this.PAS; e++) s[e] = c[e];
            return s;
          },
          hashit: function (n, i, r) {
            var o,
              s,
              e,
              h,
              u = [];
            if (
              (n == this.SHA256
                ? (o = new t.HASH256())
                : n == this.SHA384
                  ? (o = new t.HASH384())
                  : n == this.SHA512 && (o = new t.HASH512()),
              i > 0 && o.process_num(i),
              o.process_array(r),
              (u = o.hash()),
              0 == u.length)
            )
              return null;
            if (((s = []), (h = t.BIG.MODBYTES), n >= h))
              for (e = 0; e < h; e++) s[e] = u[e];
            else {
              for (e = 0; e < n; e++) s[e + h - n] = u[e];
              for (e = 0; e < h - n; e++) s[e] = 0;
            }
            return s;
          },
          map: function (n, i) {
            var r = new t.ECP(),
              o = new t.BIG(n),
              s = new t.BIG(0);
            for (s.rcopy(t.ROM_FIELD.Modulus), o.mod(s); ; ) {
              if ((r.setxi(o, i), !r.is_infinity())) break;
              (o.inc(1), o.norm());
            }
            return r;
          },
          unmap: function (n, i) {
            var r = i.getS(),
              o = new t.ECP(),
              s = 0,
              e = i.getX();
            for (n.copy(e); ; )
              if ((n.dec(1), n.norm(), s++, o.setxi(n, r), !o.is_infinity()))
                break;
            return s;
          },
          ENCODING: function (n, i) {
            var r,
              o,
              s,
              e,
              h,
              u,
              c,
              f,
              a,
              E,
              p = [];
            for (r = 0; r < this.EFS; r++) p[r] = i[r + 1];
            for (u = t.BIG.fromBytes(p), r = 0; r < this.EFS; r++)
              p[r] = i[r + this.EFS + 1];
            if (
              ((c = t.BIG.fromBytes(p)),
              (f = new t.ECP(0)),
              f.setxy(u, c),
              f.is_infinity())
            )
              return this.INVALID_POINT;
            for (
              a = new t.BIG(0),
                a.rcopy(t.ROM_FIELD.Modulus),
                u = t.BIG.randomnum(a, n),
                e = n.getByte(),
                e < 0 && (e = -e),
                e %= 2,
                E = this.map(u, e),
                f.sub(E),
                h = f.getS(),
                o = this.unmap(c, f),
                s = n.getByte(),
                s < 0 && (s = -s),
                s %= o,
                c.inc(s + 1),
                i[0] = e + 2 * h,
                u.toBytes(p),
                r = 0;
              r < this.EFS;
              r++
            )
              i[r + 1] = p[r];
            for (c.toBytes(p), r = 0; r < this.EFS; r++)
              i[r + this.EFS + 1] = p[r];
            return 0;
          },
          DECODING: function (n) {
            var i,
              r,
              o,
              s,
              e,
              h,
              u,
              c = [];
            if (0 !== (4 & n[0])) return this.INVALID_POINT;
            for (i = 0; i < this.EFS; i++) c[i] = n[i + 1];
            for (s = t.BIG.fromBytes(c), i = 0; i < this.EFS; i++)
              c[i] = n[i + this.EFS + 1];
            for (
              e = t.BIG.fromBytes(c),
                r = 1 & n[0],
                o = (n[0] >> 1) & 1,
                h = this.map(s, r),
                u = this.map(e, o),
                u.add(h),
                s = u.getX(),
                e = u.getY(),
                n[0] = 4,
                s.toBytes(c),
                i = 0;
              i < this.EFS;
              i++
            )
              n[i + 1] = c[i];
            for (e.toBytes(c), i = 0; i < this.EFS; i++)
              n[i + this.EFS + 1] = c[i];
            return 0;
          },
          RECOMBINE_G1: function (n, i, r) {
            var o = t.ECP.fromBytes(n),
              s = t.ECP.fromBytes(i);
            return o.is_infinity() || s.is_infinity()
              ? this.INVALID_POINT
              : (o.add(s), o.toBytes(r), 0);
          },
          RECOMBINE_G2: function (n, i, r) {
            var o = t.ECP2.fromBytes(n),
              s = t.ECP2.fromBytes(i);
            return o.is_infinity() || s.is_infinity()
              ? this.INVALID_POINT
              : (o.add(s), o.toBytes(r), 0);
          },
          HASH_ID: function (t, n) {
            return this.hashit(t, 0, n);
          },
          RANDOM_GENERATE: function (n, i) {
            var r,
              o = new t.BIG(0);
            return (
              o.rcopy(t.ROM_CURVE.CURVE_Order),
              (r = t.BIG.randomnum(o, n)),
              r.toBytes(i),
              0
            );
          },
          EXTRACT_PIN: function (t, n, i, r) {
            return this.EXTRACT_FACTOR(t, n, i % this.MAXPIN, this.PBLEN, r);
          },
          EXTRACT_FACTOR: function (n, i, r, o, s) {
            var e, h, u;
            return (
              (e = t.ECP.fromBytes(s)),
              e.is_infinity()
                ? this.INVALID_POINT
                : ((u = this.hashit(n, 0, i)),
                  (h = t.ECP.mapit(u)),
                  (h = h.pinmul(r, o)),
                  e.sub(h),
                  e.toBytes(s),
                  0)
            );
          },
          RESTORE_FACTOR: function (n, i, r, o, s) {
            var e, h, u;
            return (
              (e = t.ECP.fromBytes(s)),
              e.is_infinity()
                ? this.INVALID_POINT
                : ((u = this.hashit(n, 0, i)),
                  (h = t.ECP.mapit(u)),
                  (h = h.pinmul(r, o)),
                  e.add(h),
                  e.toBytes(s),
                  0)
            );
          },
          GET_SERVER_SECRET: function (n, i) {
            var r,
              o,
              s,
              e,
              h = new t.BIG(0),
              u = new t.BIG(0);
            return (
              h.rcopy(t.ROM_CURVE.CURVE_Pxa),
              u.rcopy(t.ROM_CURVE.CURVE_Pxb),
              (r = new t.FP2(0)),
              r.bset(h, u),
              h.rcopy(t.ROM_CURVE.CURVE_Pya),
              u.rcopy(t.ROM_CURVE.CURVE_Pyb),
              (o = new t.FP2(0)),
              o.bset(h, u),
              (s = new t.ECP2()),
              s.setxy(r, o),
              (e = t.BIG.fromBytes(n)),
              (s = t.PAIR.G2mul(s, e)),
              s.toBytes(i),
              0
            );
          },
          GET_G1_MULTIPLE: function (n, i, r, o, s) {
            var e,
              h,
              u = new t.BIG(0);
            if (
              (u.rcopy(t.ROM_CURVE.CURVE_Order),
              null != n
                ? ((e = t.BIG.randomnum(u, n)), e.toBytes(r))
                : (e = t.BIG.fromBytes(r)),
              0 == i)
            ) {
              if (((h = t.ECP.fromBytes(o)), h.is_infinity()))
                return this.INVALID_POINT;
            } else h = t.ECP.mapit(o);
            return (t.PAIR.G1mul(h, e).toBytes(s), 0);
          },
          GET_CLIENT_SECRET: function (t, n, i) {
            return this.GET_G1_MULTIPLE(null, 1, t, n, i);
          },
          GET_CLIENT_PERMIT: function (n, i, r, o, s) {
            var e = this.hashit(n, i, o),
              h = t.ECP.mapit(e),
              u = t.BIG.fromBytes(r);
            return ((h = t.PAIR.G1mul(h, u)), h.toBytes(s), 0);
          },
          CLIENT_1: function (n, i, r, o, s, e, h, u, c, f, a) {
            var E,
              p,
              d,
              w,
              y,
              I = new t.BIG(0);
            if (
              (I.rcopy(t.ROM_CURVE.CURVE_Order),
              null !== o
                ? ((E = t.BIG.randomnum(I, o)), E.toBytes(s))
                : (E = t.BIG.fromBytes(s)),
              (y = this.hashit(n, 0, r)),
              (p = t.ECP.mapit(y)),
              (d = t.ECP.fromBytes(h)),
              d.is_infinity())
            )
              return this.INVALID_POINT;
            if (
              ((e %= this.MAXPIN),
              (w = p.pinmul(e, this.PBLEN)),
              d.add(w),
              0 != i)
            ) {
              if (((w = t.ECP.fromBytes(a)), w.is_infinity()))
                return this.INVALID_POINT;
              (d.add(w),
                (y = this.hashit(n, i, y)),
                (w = t.ECP.mapit(y)),
                null != c
                  ? ((p = t.PAIR.G1mul(p, E)),
                    p.toBytes(c),
                    (w = t.PAIR.G1mul(w, E)),
                    p.add(w))
                  : (p.add(w), (p = t.PAIR.G1mul(p, E))),
                null != f && p.toBytes(f));
            } else null != c && ((p = t.PAIR.G1mul(p, E)), p.toBytes(c));
            return (d.toBytes(u), 0);
          },
          CLIENT_2: function (n, i, r) {
            var o,
              s,
              e,
              h = new t.BIG(0);
            return (
              h.rcopy(t.ROM_CURVE.CURVE_Order),
              (o = t.ECP.fromBytes(r)),
              o.is_infinity()
                ? this.INVALID_POINT
                : ((s = t.BIG.fromBytes(n)),
                  (e = t.BIG.fromBytes(i)),
                  s.add(e),
                  s.mod(h),
                  (o = t.PAIR.G1mul(o, s)),
                  o.neg(),
                  o.toBytes(r),
                  0)
            );
          },
          SERVER_1: function (n, i, r, o, s) {
            var e,
              h = this.hashit(n, 0, r),
              u = t.ECP.mapit(h);
            (u.toBytes(o),
              0 !== i &&
                ((h = this.hashit(n, i, h)),
                (e = t.ECP.mapit(h)),
                u.add(e),
                u.toBytes(s)));
          },
          SERVER_2: function (n, i, r, o, s, e, h, u, c, f, a) {
            var E, p, d, w, y, I, l, m, B, _;
            if ("undefined" === typeof a || null == a)
              ((p = new t.BIG(0)),
                (d = new t.BIG(0)),
                p.rcopy(t.ROM_CURVE.CURVE_Pxa),
                d.rcopy(t.ROM_CURVE.CURVE_Pxb),
                (w = new t.FP2(0)),
                w.bset(p, d),
                p.rcopy(t.ROM_CURVE.CURVE_Pya),
                d.rcopy(t.ROM_CURVE.CURVE_Pyb),
                (y = new t.FP2(0)),
                y.bset(p, d),
                (E = new t.ECP2()),
                E.setxy(w, y));
            else if (((E = t.ECP2.fromBytes(a)), E.is_infinity()))
              return this.INVALID_POINT;
            if (((I = t.ECP2.fromBytes(s)), I.is_infinity()))
              return this.INVALID_POINT;
            if (0 !== n) l = t.ECP.fromBytes(h);
            else {
              if (null == e) return this.BAD_PARAMS;
              l = t.ECP.fromBytes(e);
            }
            if (l.is_infinity()) return this.INVALID_POINT;
            if (((m = t.BIG.fromBytes(o)), 0 != n)) B = t.ECP.fromBytes(r);
            else {
              if (null == i) return this.BAD_PARAMS;
              B = t.ECP.fromBytes(i);
            }
            if (B.is_infinity()) return this.INVALID_POINT;
            if (
              ((B = t.PAIR.G1mul(B, m)),
              B.add(l),
              B.affine(),
              (l = t.ECP.fromBytes(u)),
              l.is_infinity())
            )
              return this.INVALID_POINT;
            if (
              ((_ = t.PAIR.ate2(E, l, I, B)),
              (_ = t.PAIR.fexp(_)),
              !_.isunity())
            ) {
              if (null != i && null != e && null != c && null != f) {
                if ((_.toBytes(c), 0 !== n)) {
                  if (((B = t.ECP.fromBytes(i)), B.is_infinity()))
                    return this.INVALID_POINT;
                  if (((l = t.ECP.fromBytes(e)), l.is_infinity()))
                    return this.INVALID_POINT;
                  ((B = t.PAIR.G1mul(B, m)), B.add(l), B.affine());
                }
                ((_ = t.PAIR.ate(E, B)), (_ = t.PAIR.fexp(_)), _.toBytes(f));
              }
              return this.BAD_PIN;
            }
            return 0;
          },
          KANGAROO: function (n, i) {
            var r,
              o,
              s,
              e,
              h,
              u,
              c,
              f,
              a = t.FP12.fromBytes(n),
              E = t.FP12.fromBytes(i),
              p = [],
              d = new t.FP12(E),
              w = [];
            for (e = 1, s = 0; s < this.TS; s++)
              ((p[s] = e), (w[s] = new t.FP12(d)), (e *= 2), d.usqr());
            for (d.one(), h = 0, o = 0; o < this.TRAP; o++)
              ((r = d.geta().geta().getA().lastbits(20) % this.TS),
                d.mul(w[r]),
                (h += p[r]));
            (E.copy(d), E.conj(), (f = 0), (u = 0), (c = 0));
            while (u - h < this.MAXPIN) {
              if ((f++, f > 4 * this.TRAP)) break;
              if (
                ((r = a.geta().geta().getA().lastbits(20) % this.TS),
                a.mul(w[r]),
                (u += p[r]),
                a.equals(d))
              ) {
                c = u - h;
                break;
              }
              if (a.equals(E)) {
                c = h - u;
                break;
              }
            }
            return ((f > 4 * this.TRAP || u - h >= this.MAXPIN) && (c = 0), c);
          },
          GET_TIME: function () {
            var t = new Date();
            return Math.floor(t.getTime() / 1e3);
          },
          GET_Y: function (n, i, r, o) {
            var s = new t.BIG(0),
              e = this.hashit(n, i, r),
              h = t.BIG.fromBytes(e);
            return (
              s.rcopy(t.ROM_CURVE.CURVE_Order),
              h.mod(s),
              h.toBytes(o),
              0
            );
          },
          CLIENT: function (t, n, i, r, o, s, e, h, u, c, f, a, E, p) {
            var d,
              w,
              y = 0,
              I = [];
            if (
              (0 == n ? (d = u) : ((d = c), (u = null)),
              (y = this.CLIENT_1(t, n, i, r, o, s, e, h, u, c, f)),
              0 != y)
            )
              return y;
            if (((I = d.slice()), "undefined" !== typeof p || null != p))
              for (w = 0; w < p.length; w++) I.push(p[w]);
            return (
              this.GET_Y(t, a, I, E),
              (y = this.CLIENT_2(o, E, h)),
              0 != y ? y : 0
            );
          },
          SERVER: function (t, n, i, r, o, s, e, h, u, c, f, a, E, p, d) {
            var w,
              y,
              I = 0,
              l = [];
            if (
              ((w = 0 == n ? e : h),
              this.SERVER_1(t, n, a, i, r),
              (l = w.slice()),
              "undefined" !== typeof p || null != p)
            )
              for (y = 0; y < p.length; y++) l.push(p[y]);
            return (
              this.GET_Y(t, E, l, o),
              (I = this.SERVER_2(n, i, r, o, s, e, h, u, c, f, d)),
              0 != I ? I : 0
            );
          },
          PRECOMPUTE: function (n, i, r, o) {
            var s, e, h, u, c, f, a, E;
            return (
              (e = t.ECP.fromBytes(n)),
              e.is_infinity()
                ? this.INVALID_POINT
                : ((s = t.ECP.mapit(i)),
                  (u = new t.BIG(0)),
                  (c = new t.BIG(0)),
                  u.rcopy(t.ROM_CURVE.CURVE_Pxa),
                  c.rcopy(t.ROM_CURVE.CURVE_Pxb),
                  (f = new t.FP2(0)),
                  f.bset(u, c),
                  u.rcopy(t.ROM_CURVE.CURVE_Pya),
                  c.rcopy(t.ROM_CURVE.CURVE_Pyb),
                  (a = new t.FP2(0)),
                  a.bset(u, c),
                  (E = new t.ECP2()),
                  E.setxy(f, a),
                  (h = t.PAIR.ate(E, e)),
                  (h = t.PAIR.fexp(h)),
                  h.toBytes(r),
                  (h = t.PAIR.ate(E, s)),
                  (h = t.PAIR.fexp(h)),
                  h.toBytes(o),
                  0)
            );
          },
          HASH_ALL: function (t, n, i, r, o, s, e, h) {
            var u,
              c = 0,
              f = [];
            for (u = 0; u < n.length; u++) f[u] = n[u];
            if (((c += n.length), null != r)) {
              for (u = 0; u < r.length; u++) f[u + c] = r[u];
              c += r.length;
            } else {
              for (u = 0; u < i.length; u++) f[u + c] = i[u];
              c += i.length;
            }
            for (u = 0; u < o.length; u++) f[u + c] = o[u];
            for (c += o.length, u = 0; u < s.length; u++) f[u + c] = s[u];
            for (c += s.length, u = 0; u < e.length; u++) f[u + c] = e[u];
            for (c += e.length, u = 0; u < h.length; u++) f[u + c] = h[u];
            return ((c += h.length), this.hashit(t, 0, f));
          },
          CLIENT_KEY: function (n, i, r, o, s, e, h, u, c) {
            var f,
              a,
              E,
              p = [],
              d = t.FP12.fromBytes(i),
              w = t.FP12.fromBytes(r),
              y = t.BIG.fromBytes(s),
              I = t.BIG.fromBytes(e),
              l = t.BIG.fromBytes(h),
              m = t.ECP.fromBytes(u);
            if (m.is_infinity()) return this.INVALID_POINT;
            for (
              m = t.PAIR.G1mul(m, I),
                f = new t.BIG(0),
                f.rcopy(t.ROM_CURVE.CURVE_Order),
                y.add(l),
                y.mod(f),
                w.pinpow(o, this.PBLEN),
                d.mul(w),
                a = d.compow(y, f),
                p = this.mpin_hash(n, a, m),
                E = 0;
              E < this.PAS;
              E++
            )
              c[E] = p[E];
            return 0;
          },
          SERVER_KEY: function (n, i, r, o, s, e, h, u, c) {
            var f,
              a,
              E,
              p,
              d,
              w,
              y,
              I,
              l,
              m = [];
            if (((f = t.ECP2.fromBytes(r)), f.is_infinity()))
              return this.INVALID_POINT;
            if (((a = t.ECP.fromBytes(i)), a.is_infinity()))
              return this.INVALID_POINT;
            if (((E = t.ECP.fromBytes(e)), E.is_infinity()))
              return this.INVALID_POINT;
            if (
              ((p = null != u ? t.ECP.fromBytes(u) : t.ECP.fromBytes(h)),
              p.is_infinity())
            )
              return this.INVALID_POINT;
            for (
              d = t.BIG.fromBytes(o),
                w = t.BIG.fromBytes(s),
                E = t.PAIR.G1mul(E, w),
                a.add(E),
                a.affine(),
                p = t.PAIR.G1mul(p, d),
                y = t.PAIR.ate(f, a),
                y = t.PAIR.fexp(y),
                I = y.trace(),
                m = this.mpin_hash(n, I, p),
                l = 0;
              l < this.PAS;
              l++
            )
              c[l] = m[l];
            return 0;
          },
          GET_DVS_KEYPAIR: function (i, r, o) {
            var s,
              e,
              h,
              u,
              c,
              f,
              a = new t.BIG(0);
            return (
              a.rcopy(t.ROM_CURVE.CURVE_Order),
              null != i
                ? ((s = t.BIG.randomnum(a, i)), s.toBytes(r))
                : (s = t.BIG.fromBytes(r)),
              s.invmodp(a),
              (e = new t.BIG(0)),
              (h = new t.BIG(0)),
              e.rcopy(t.ROM_CURVE.CURVE_Pxa),
              h.rcopy(t.ROM_CURVE.CURVE_Pxb),
              (u = new t.FP2(0)),
              u.bset(e, h),
              e.rcopy(t.ROM_CURVE.CURVE_Pya),
              h.rcopy(t.ROM_CURVE.CURVE_Pyb),
              (c = new t.FP2(0)),
              c.bset(e, h),
              (f = new t.ECP2()),
              f.setxy(u, c),
              f.INF
                ? n.INVALID_POINT
                : ((f = t.PAIR.G2mul(f, s)), f.toBytes(o), 0)
            );
          },
        };
        return n;
      };
      "undefined" !== typeof t.exports && (t.exports.MPIN = r);
    },
    3517: function (t, n, i) {
      var r = function () {
        "use strict";
        var t = {
          PRIME: 12289,
          LGN: 10,
          ND: 50343935,
          ONE: 10924,
          R2MODP: 7586,
          MODINV: Math.pow(2, -26),
          DEGREE: 1024,
          WL: 26,
          inv: 4091,
          invpr: 4401,
          roots: [
            10924, 3439, 7271, 11355, 11709, 9879, 10742, 2259, 7036, 2539,
            8427, 9802, 10192, 4635, 1420, 1239, 6050, 10731, 7026, 5040, 6577,
            5505, 10953, 9704, 9373, 11614, 867, 8052, 8079, 8356, 11442, 11524,
            5127, 11769, 941, 9207, 6770, 2705, 895, 3507, 8981, 1510, 2703,
            8477, 3501, 7979, 11817, 9904, 8201, 12253, 10369, 921, 1414, 10113,
            10933, 2417, 9035, 7667, 7466, 5597, 6765, 10100, 2047, 7870, 560,
            7412, 6155, 2904, 6540, 11072, 4731, 7581, 4991, 4e3, 324, 75,
            12204, 2825, 7295, 437, 3820, 3160, 4680, 9276, 4234, 5304, 233,
            11774, 251, 9730, 10988, 7095, 4248, 9176, 1923, 6931, 8295, 8406,
            5916, 4, 1634, 4247, 9401, 7069, 10180, 10094, 1727, 1879, 11798,
            1138, 7441, 5705, 10500, 3796, 1733, 5294, 12024, 10976, 11900,
            10037, 4486, 1266, 6075, 10623, 7623, 6885, 10819, 11266, 3798,
            11120, 7291, 6353, 8366, 1709, 9220, 4410, 8350, 795, 5533, 1167,
            3593, 7090, 5367, 901, 452, 7387, 8918, 8664, 12, 6830, 11982,
            11649, 3414, 1473, 4826, 2255, 5637, 7108, 6327, 6585, 8638, 4958,
            10454, 10385, 8712, 6113, 10609, 2342, 8475, 255, 1311, 2693, 225,
            11317, 9605, 289, 3623, 11876, 10744, 11590, 3250, 10538, 829, 2809,
            2950, 11834, 8504, 6520, 8996, 3903, 11536, 7677, 5059, 1740, 6777,
            4641, 9487, 2765, 4095, 1972, 1616, 6291, 3717, 8029, 4828, 11586,
            3470, 4672, 4226, 4847, 4534, 4008, 2831, 3500, 6428, 4674, 490,
            341, 9994, 2541, 11867, 9688, 8748, 2025, 8115, 4268, 10521, 9604,
            3043, 9466, 9197, 1560, 11648, 1786, 5134, 1416, 853, 4180, 9924,
            7759, 5761, 8047, 7251, 4068, 2763, 5760, 12264, 108, 5722, 4283,
            11321, 6148, 4502, 2180, 9762, 1577, 6849, 8754, 12187, 3390, 8447,
            4800, 10220, 90, 672, 1521, 7386, 1027, 7848, 5913, 8135, 11555,
            1514, 9681, 182, 1180, 2759, 11676, 8270, 8514, 4584, 3792, 5616,
            1300, 2623, 3907, 7653, 11671, 5443, 11387, 9242, 8739, 12216, 9655,
            6988, 12086, 9954, 256, 9557, 9836, 11792, 10012, 1450, 6025, 8601,
            10525, 4232, 8262, 7841, 3977, 7290, 7832, 311, 7013, 9453, 3895,
            11971, 3340, 1991, 4671, 2862, 6807, 6659, 7117, 946, 1812, 10617,
            2799, 11068, 11665, 3587, 3675, 8124, 3246, 1074, 9124, 2845, 7372,
            8118, 12120, 10842, 1827, 11417, 11632, 10, 9788, 9985, 3563, 11528,
            7220, 8204, 7816, 918, 6357, 7237, 196, 6332, 11479, 5956, 2289,
            7260, 3046, 10889, 6048, 519, 6606, 8228, 9187, 10651, 1669, 11183,
            1337, 11593, 9397, 5517, 253, 10901, 589, 2739, 4389, 4857, 5562,
            1704, 11318, 1767, 4164, 878, 4072, 4397, 10007, 9376, 7177, 3613,
            2088, 759, 8027, 4011, 3318, 4914, 7282, 9859, 5582, 6867, 6710,
            588, 2867, 9535, 5507, 7529, 10732, 2983, 12183, 5855, 4200, 2798,
            3151, 5436, 9451, 8397, 5016, 9062, 4601, 3703, 4157, 9738, 206,
            2794, 9067, 11025, 1528, 3663, 1872, 5481, 4341, 10318, 2616, 11782,
            224, 3754, 2462, 9371, 2283, 11159, 12255, 10689, 6912, 12259, 7503,
            2111, 11526, 270, 6207, 10170, 306, 4031, 10605, 5450, 1034, 10087,
            173, 3081, 2420, 10273, 7726, 10450, 4012, 964, 12057, 3540, 11743,
            7747, 7824, 11721, 4420, 10435, 1619, 3900, 7730, 10826, 913, 4387,
            219, 11680, 3614, 1639, 9141, 8249, 2706, 5458, 1491, 5786, 7939,
            4930, 8196, 7005, 11521, 11931, 1055, 11207, 2708, 208, 11882,
            11064, 5292, 10020, 954, 1724, 6316, 11685, 8508, 11356, 3539, 2734,
            11784, 1741, 5751, 8229, 7708, 1460, 3524, 96, 5484, 9833, 7169,
            9899, 7867, 9940, 8673, 5483, 1383, 26, 10702, 9172, 1668, 2937,
            6483, 4166, 7564, 6069, 7208, 7397, 9336, 6360, 6934, 11311, 8649,
            6587, 3004, 10523, 6646, 6265, 12260, 1422, 10570, 6632, 10183,
            12218, 6697, 8985, 7883, 8251, 12037, 11138, 6447, 9898, 9346, 2797,
            4630, 1800, 4513, 3106, 2312, 10488, 9255, 2040, 5934, 3920, 2728,
            6218, 8039, 8913, 3770, 8539, 3911, 10359, 3422, 2268, 525, 11694,
            7486, 1909, 3059, 2162, 9831, 8182, 3487, 5060, 261, 1631, 8684,
            1757, 6665, 3182, 509, 5158, 2787, 1172, 11650, 8909, 9686, 4545,
            28, 11438, 5151, 4362, 327, 9815, 9213, 12089, 864, 8852, 7966,
            2931, 3068, 12055, 1994, 12131, 191, 10434, 3098, 9566, 8814, 6824,
            8862, 5658, 627, 4205, 11328, 1999, 5128, 2008, 4106, 1881, 7604,
            9406, 11963, 3095, 6292, 9294, 5565, 1864, 8169, 573, 474, 702,
            6307, 3164, 2553, 981, 11492, 84, 10943, 10140, 7809, 11609, 10311,
            9204, 3496, 2592, 600, 7422, 9228, 11310, 10128, 11733, 11250,
            11828, 5924, 529, 4105, 10169, 1785, 9177, 6562, 1575, 5485, 5790,
            2023, 783, 9398, 1474, 7396, 10461, 32, 5803, 7374, 8361, 9104,
            10372, 8773, 1527, 2743, 7018, 4583, 10835, 12180, 10572, 7909,
            4964, 7066, 4087, 1515, 11312, 7170, 1441, 7047, 9218, 7368, 12001,
            8126, 5004, 9351, 7160, 3478, 7528, 12211, 8129, 8140, 3430, 2387,
            8513, 5498, 9335, 6371, 12080, 1886, 7649, 5298, 12202, 5783, 9012,
            4817, 2934, 10920, 7802, 213, 11360, 9912, 5971, 4682, 8023, 5157,
            3460, 7173, 1601, 3898, 7052, 3453, 12114, 756, 3187, 5403, 5513,
            6169, 6936, 2971, 6889, 11039, 11076, 12122, 11575, 11441, 9973,
            9022, 10095, 630, 4704, 10647, 2546, 7189, 5780, 4524, 7789, 7151,
            10598, 6322, 1274, 8260, 7024, 7998, 8734, 10442, 7510, 1966, 2445,
            9100, 6072, 2771, 4415, 7963, 1234, 5975, 3249, 12017, 11778, 6140,
            12049, 10868, 8233, 1792, 5454, 7407, 8810, 8639, 10150, 5308,
            11051, 12230, 5046, 8678, 5731, 3261, 1874, 5668, 2177, 12224, 4726,
            2687, 10063, 11091, 1648, 8119, 7745, 10782, 9746, 663, 6622, 395,
            585, 7304, 3742, 7921, 531, 1147, 7712, 10433, 7518, 2423, 7626,
            2448, 7670, 11106, 2160, 500, 6185, 7690, 70, 7071, 8450, 363, 6962,
            1384, 8272, 5556, 6426, 7632, 1503, 1372, 7457, 6619, 4825, 3734,
            1664, 9033, 2489, 5469, 3633, 9375, 8440, 2864, 823, 11683, 4547,
            9359, 7417, 4334, 1752, 1771, 2573, 4123, 6884, 6145, 9421, 2067,
            11928, 5492, 80, 4570, 6146, 3926, 6201, 8604, 4187, 1083, 713,
            2327, 5313, 7033, 3499, 10937, 9820, 1818, 7568, 2207, 11202, 10103,
            4116, 7780, 5300, 1682, 3547, 1390, 8592, 11547, 4118, 4822, 7297,
            9768, 1185, 4712, 9623, 10534, 1989, 7629, 1343, 4521, 6721, 1442,
            7269, 2024, 3441, 10696, 1063, 815, 1500, 5809, 10781, 6023, 8740,
            1568, 1700, 4945, 4152, 3692, 4379, 12051, 1089, 11517, 12079, 3365,
            2488, 6948, 1890, 6582, 9745, 2142, 3639, 501, 1283, 7238, 9164,
            1211, 9278, 4651, 10466, 4926, 11705, 3506, 6748, 10665, 202, 8467,
            5073, 5612, 8313, 6362, 11600, 11333, 2722, 4954, 2048, 6391, 6131,
            1533, 8026, 720, 11473, 2542, 8587, 6653, 1339, 10437, 3635, 6417,
            9932, 8216, 12168, 6913, 9783, 7385, 4715, 6667, 1456, 9440, 3714,
            177, 8695, 6678, 12068, 7345, 8061, 10400, 5758, 195,
          ],
          iroots: [
            10924, 8850, 934, 5018, 10030, 1547, 2410, 580, 11050, 10869, 7654,
            2097, 2487, 3862, 9750, 5253, 765, 847, 3933, 4210, 4237, 11422,
            675, 2916, 2585, 1336, 6784, 5712, 7249, 5263, 1558, 6239, 4419,
            10242, 2189, 5524, 6692, 4823, 4622, 3254, 9872, 1356, 2176, 10875,
            11368, 1920, 36, 4088, 2385, 472, 4310, 8788, 3812, 9586, 10779,
            3308, 8782, 11394, 9584, 5519, 3082, 11348, 520, 7162, 1023, 1470,
            5404, 4666, 1666, 6214, 11023, 7803, 2252, 389, 1313, 265, 6995,
            10556, 8493, 1789, 6584, 4848, 11151, 491, 10410, 10562, 2195, 2109,
            5220, 2888, 8042, 10655, 12285, 6373, 3883, 3994, 5358, 10366, 3113,
            8041, 5194, 1301, 2559, 12038, 515, 12056, 6985, 8055, 3013, 7609,
            9129, 8469, 11852, 4994, 9464, 85, 12214, 11965, 8289, 7298, 4708,
            7558, 1217, 5749, 9385, 6134, 4877, 11729, 10712, 2527, 10109, 7787,
            6141, 968, 8006, 6567, 12181, 25, 6529, 9526, 8221, 5038, 4242,
            6528, 4530, 2365, 8109, 11436, 10873, 7155, 10503, 641, 10729, 3092,
            2823, 9246, 2685, 1768, 8021, 4174, 10264, 3541, 2601, 422, 9748,
            2295, 11948, 11799, 7615, 5861, 8789, 9458, 8281, 7755, 7442, 8063,
            7617, 8819, 703, 7461, 4260, 8572, 5998, 10673, 10317, 8194, 9524,
            2802, 7648, 5512, 10549, 7230, 4612, 753, 8386, 3293, 5769, 3785,
            455, 9339, 9480, 11460, 1751, 9039, 699, 1545, 413, 8666, 12e3,
            2684, 972, 12064, 9596, 10978, 12034, 3814, 9947, 1680, 6176, 3577,
            1904, 1835, 7331, 3651, 5704, 5962, 5181, 6652, 10034, 7463, 10816,
            8875, 640, 307, 5459, 12277, 3625, 3371, 4902, 11837, 11388, 6922,
            5199, 8696, 11122, 6756, 11494, 3939, 7879, 3069, 10580, 3923, 5936,
            4998, 1169, 8491, 8750, 933, 3781, 604, 5973, 10565, 11335, 2269,
            6997, 1225, 407, 12081, 9581, 1082, 11234, 358, 768, 5284, 4093,
            7359, 4350, 6503, 10798, 6831, 9583, 4040, 3148, 10650, 8675, 609,
            12070, 7902, 11376, 1463, 4559, 8389, 10670, 1854, 7869, 568, 4465,
            4542, 546, 8749, 232, 11325, 8277, 1839, 4563, 2016, 9869, 9208,
            12116, 2202, 11255, 6839, 1684, 8258, 11983, 2119, 6082, 12019, 763,
            10178, 4786, 30, 5377, 1600, 34, 1130, 10006, 2918, 9827, 8535,
            12065, 507, 9673, 1971, 7948, 6808, 10417, 8626, 10761, 1264, 3222,
            9495, 12083, 2551, 8132, 8586, 7688, 3227, 7273, 3892, 2838, 6853,
            9138, 9491, 8089, 6434, 106, 9306, 1557, 4760, 6782, 2754, 9422,
            11701, 5579, 5422, 6707, 2430, 5007, 7375, 8971, 8278, 4262, 11530,
            10201, 8676, 5112, 2913, 2282, 7892, 8217, 11411, 8125, 10522, 971,
            10585, 6727, 7432, 7900, 9550, 11700, 1388, 12036, 6772, 2892, 696,
            10952, 1106, 10620, 1638, 3102, 4061, 5683, 11770, 6241, 1400, 9243,
            5029, 1e4, 6333, 810, 5957, 12093, 5052, 5932, 11371, 4473, 4085,
            5069, 761, 8726, 2304, 2501, 12279, 657, 872, 10462, 1447, 169,
            4171, 4917, 9444, 3165, 11215, 9043, 4165, 8614, 8702, 624, 1221,
            9490, 1672, 10477, 11343, 5172, 5630, 5482, 9427, 7618, 10298, 8949,
            318, 8394, 2836, 5276, 11978, 4457, 4999, 8312, 4448, 4027, 8057,
            1764, 3688, 6264, 10839, 2277, 497, 2453, 2732, 12033, 2335, 203,
            5301, 2634, 73, 3550, 3047, 902, 6846, 618, 4636, 8382, 9666, 10989,
            6673, 8497, 7705, 3775, 4019, 613, 9530, 11109, 12107, 2608, 10775,
            734, 4154, 6376, 4441, 11262, 4903, 10768, 11617, 12199, 2069, 7489,
            3842, 8899, 102, 3535, 5440, 12094, 6531, 1889, 4228, 4944, 221,
            5611, 3594, 12112, 8575, 2849, 10833, 5622, 7574, 4904, 2506, 5376,
            121, 4073, 2357, 5872, 8654, 1852, 10950, 5636, 3702, 9747, 816,
            11569, 4263, 10756, 6158, 5898, 10241, 7335, 9567, 956, 689, 5927,
            3976, 6677, 7216, 3822, 12087, 1624, 5541, 8783, 584, 7363, 1823,
            7638, 3011, 11078, 3125, 5051, 11006, 11788, 8650, 10147, 2544,
            5707, 10399, 5341, 9801, 8924, 210, 772, 11200, 238, 7910, 8597,
            8137, 7344, 10589, 10721, 3549, 6266, 1508, 6480, 10789, 11474,
            11226, 1593, 8848, 10265, 5020, 10847, 5568, 7768, 10946, 4660,
            10300, 1755, 2666, 7577, 11104, 2521, 4992, 7467, 8171, 742, 3697,
            10899, 8742, 10607, 6989, 4509, 8173, 2186, 1087, 10082, 4721,
            10471, 2469, 1352, 8790, 5256, 6976, 9962, 11576, 11206, 8102, 3685,
            6088, 8363, 6143, 7719, 12209, 6797, 361, 10222, 2868, 6144, 5405,
            8166, 9716, 10518, 10537, 7955, 4872, 2930, 7742, 606, 11466, 9425,
            3849, 2914, 8656, 6820, 9800, 3256, 10625, 8555, 7464, 5670, 4832,
            10917, 10786, 4657, 5863, 6733, 4017, 10905, 5327, 11926, 3839,
            5218, 12219, 4599, 6104, 11789, 10129, 1183, 4619, 9841, 4663, 9866,
            4771, 1856, 4577, 11142, 11758, 4368, 8547, 4985, 11704, 11894,
            5667, 11626, 2543, 1507, 4544, 4170, 10641, 1198, 2226, 9602, 7563,
            65, 10112, 6621, 10415, 9028, 6558, 3611, 7243, 59, 1238, 6981,
            2139, 3650, 3479, 4882, 6835, 10497, 4056, 1421, 240, 6149, 511,
            272, 9040, 6314, 11055, 4326, 7874, 9518, 6217, 3189, 9844, 10323,
            4779, 1847, 3555, 4291, 5265, 4029, 11015, 5967, 1691, 5138, 4500,
            7765, 6509, 5100, 9743, 1642, 7585, 11659, 2194, 3267, 2316, 848,
            714, 167, 1213, 1250, 5400, 9318, 5353, 6120, 6776, 6886, 9102,
            11533, 175, 8836, 5237, 8391, 10688, 5116, 8829, 7132, 4266, 7607,
            6318, 2377, 929, 12076, 4487, 1369, 9355, 7472, 3277, 6506, 87,
            6991, 4640, 10403, 209, 5918, 2954, 6791, 3776, 9902, 8859, 4149,
            4160, 78, 4761, 8811, 5129, 2938, 7285, 4163, 288, 4921, 3071, 5242,
            10848, 5119, 977, 10774, 8202, 5223, 7325, 4380, 1717, 109, 1454,
            7706, 5271, 9546, 10762, 3516, 1917, 3185, 3928, 4915, 6486, 12257,
            1828, 4893, 10815, 2891, 11506, 10266, 6499, 6804, 10714, 5727,
            3112, 10504, 2120, 8184, 11760, 6365, 461, 1039, 556, 2161, 979,
            3061, 4867, 11689, 9697, 8793, 3085, 1978, 680, 4480, 2149, 1346,
            12205, 797, 11308, 9736, 9125, 5982, 11587, 11815, 11716, 4120,
            10425, 6724, 2995, 5997, 9194, 326, 2883, 4685, 10408, 8183, 10281,
            7161, 10290, 961, 8084, 11662, 6631, 3427, 5465, 3475, 2723, 9191,
            1855, 12098, 158, 10295, 234, 9221, 9358, 4323, 3437, 11425, 200,
            3076, 2474, 11962, 7927, 7138, 851, 12261, 7744, 2603, 3380, 639,
            11117, 9502, 7131, 11780, 9107, 5624, 10532, 3605, 10658, 12028,
            7229, 8802, 4107, 2458, 10127, 9230, 10380, 4803, 595, 11764, 10021,
            8867, 1930, 8378, 3750, 8519, 3376, 4250, 6071, 9561, 8369, 6355,
            10249, 3034, 1801, 9977, 9183, 7776, 10489, 7659, 9492, 2943, 2391,
            5842, 1151, 252, 4038, 4406, 3304, 5592, 71, 2106, 5657, 1719,
            10867, 29, 6024, 5643, 1766, 9285, 5702, 3640, 978, 5355, 5929,
            2953, 4892, 5081, 6220, 4725, 8123, 5806, 9352, 10621, 3117, 1587,
            12263, 10906, 6806, 3616, 2349, 4422, 2390, 5120, 2456, 6805, 12193,
            8765, 10829, 4581, 4060, 6538, 10548, 505, 9555,
          ],
          round: function (t, n) {
            return Math.floor((t + (n >> 1)) / n);
          },
          nabs: function (t) {
            var n = t >> 31;
            return (t + n) ^ n;
          },
          redc: function (n) {
            var i = ((67108863 & n) * t.ND) & 67108863;
            return (i * t.PRIME + n) * t.MODINV;
          },
          nres: function (n) {
            return this.redc(n * t.R2MODP);
          },
          modmul: function (t, n) {
            return this.redc(t * n);
          },
          ntt: function (n) {
            var i,
              r,
              o,
              s,
              e,
              h,
              u,
              c = t.DEGREE / 2,
              f = t.PRIME;
            for (o = 0; o < t.DEGREE; o++) n[o] = this.nres(n[o]);
            i = 1;
            while (i < t.DEGREE) {
              for (s = 0, r = 0; r < i; r++) {
                for (e = t.roots[i + r], o = s; o < s + c; o++)
                  ((h = n[o]),
                    (u = this.modmul(n[o + c], e)),
                    (n[o] = h + u),
                    (n[o + c] = h + 2 * f - u));
                s += 2 * c;
              }
              ((c /= 2), (i *= 2));
            }
          },
          intt: function (n) {
            var i,
              r,
              o,
              s,
              e,
              h,
              u,
              c,
              f = 1,
              a = t.PRIME;
            i = t.DEGREE / 2;
            while (i > 1) {
              for (s = 0, r = 0; r < i; r++) {
                for (e = t.iroots[i + r], o = s; o < s + f; o++)
                  ((h = n[o]),
                    (u = n[o + f]),
                    (n[o] = h + u),
                    (c = h + t.DEGREE * a - u),
                    (n[o + f] = this.modmul(c, e)));
                s += 2 * f;
              }
              ((f *= 2), (i /= 2));
            }
            for (f = t.DEGREE / 2, o = 0; o < f; o++)
              ((h = n[o]),
                (u = n[o + f]),
                (c = h + t.DEGREE * a - u),
                (n[o + f] = this.modmul(c, t.invpr)),
                (n[o] = this.modmul(h + u, t.inv)));
            for (o = 0; o < t.DEGREE; o++)
              ((n[o] = this.redc(n[o])),
                (n[o] -= a),
                (n[o] += (n[o] >> (t.WL - 1)) & a));
          },
        };
        return t;
      };
      "undefined" !== typeof t.exports && (t.exports.NewHope = r);
    },
    3518: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = {
          round: function (t, n) {
            return Math.floor((t + (n >> 1)) / n);
          },
          nabs: function (t) {
            var n = t >> 31;
            return (t + n) ^ n;
          },
          redc: function (t) {
            var i = ((67108863 & t) * n.ND) & 67108863;
            return (i * n.PRIME + t) * n.MODINV;
          },
          nres: function (t) {
            return n.redc(t * n.R2MODP);
          },
          modmul: function (t, i) {
            return n.redc(t * i);
          },
          ntt: function (t) {
            var i,
              r,
              o,
              s,
              e,
              h,
              u,
              c = n.DEGREE / 2,
              f = n.PRIME;
            for (o = 0; o < n.DEGREE; o++) t[o] = n.nres(t[o]);
            i = 1;
            while (i < n.DEGREE) {
              for (s = 0, r = 0; r < i; r++) {
                for (e = n.roots[i + r], o = s; o < s + c; o++)
                  ((h = t[o]),
                    (u = n.modmul(t[o + c], e)),
                    (t[o] = h + u),
                    (t[o + c] = h + 2 * f - u));
                s += 2 * c;
              }
              ((c /= 2), (i *= 2));
            }
          },
          intt: function (t) {
            var i,
              r,
              o,
              s,
              e,
              h,
              u,
              c,
              f = n.PRIME,
              a = 1;
            i = n.DEGREE / 2;
            while (i > 1) {
              for (s = 0, r = 0; r < i; r++) {
                for (e = n.iroots[i + r], o = s; o < s + a; o++)
                  ((h = t[o]),
                    (u = t[o + a]),
                    (t[o] = h + u),
                    (c = h + n.DEGREE * f - u),
                    (t[o + a] = n.modmul(c, e)));
                s += 2 * a;
              }
              ((a *= 2), (i /= 2));
            }
            for (a = n.DEGREE / 2, o = 0; o < a; o++)
              ((h = t[o]),
                (u = t[o + a]),
                (c = h + n.DEGREE * f - u),
                (t[o + a] = n.modmul(c, n.invpr)),
                (t[o] = n.modmul(h + u, n.inv)));
            for (o = 0; o < n.DEGREE; o++)
              ((t[o] = n.redc(t[o])),
                (t[o] -= f),
                (t[o] += (t[o] >> (n.WL - 1)) & f));
          },
          Encode: function (t, i) {
            var r, o, s, e, h, u;
            for (u = n.PRIME / 2, r = o = 0; r < 256; )
              for (h = t[o++], e = 0; e < 8; e++)
                ((s = 1 & h),
                  (i[r] = s * u),
                  (i[r + 256] = s * u),
                  (i[r + 512] = s * u),
                  (i[r + 768] = s * u),
                  (h >>= 1),
                  r++);
          },
          Decode: function (t, i) {
            var r,
              o,
              s,
              e,
              h,
              u = n.PRIME / 2;
            for (r = 0; r < 32; r++) i[r] = 0;
            for (r = o = 0; r < 256; ) {
              for (s = 0; s < 8; s++)
                ((h =
                  n.nabs(t[r] - u) +
                  n.nabs(t[r + 256] - u) +
                  n.nabs(t[r + 512] - u) +
                  n.nabs(t[r + 768] - u)),
                  (e = h - n.PRIME),
                  (e = (e >> 31) & 1),
                  (i[o] = ((255 & i[o]) >> 1) + (e << 7)),
                  r++);
              o++;
            }
          },
          Parse: function (i, r) {
            var o,
              s,
              e,
              h = new t.SHA3(t.SHA3.SHAKE128),
              u = [];
            for (o = 0; o < 32; o++) h.process(i[o]);
            for (h.shake(u, 4 * n.DEGREE), o = s = 0; o < n.DEGREE; o++)
              ((e = 127 & u[s]),
                (e <<= 8),
                (e += 255 & u[s + 1]),
                (e <<= 8),
                (e += 255 & u[s + 2]),
                (e <<= 8),
                (e += 255 & u[s + 3]),
                (s += 4),
                (r[o] = n.modmul(e, n.ONE)));
          },
          pack: function (t, i) {
            var r, o, s, e, h, u;
            for (r = o = 0; r < n.DEGREE; )
              ((s = t[r++]),
                (e = t[r++]),
                (h = t[r++]),
                (u = t[r++]),
                (i[o++] = 255 & s),
                (i[o++] = 255 & ((s >> 8) | (e << 6))),
                (i[o++] = (e >> 2) & 255),
                (i[o++] = 255 & ((e >> 10) | (h << 4))),
                (i[o++] = (h >> 4) & 255),
                (i[o++] = 255 & ((h >> 12) | (u << 2))),
                (i[o++] = u >> 6));
          },
          unpack: function (t, i) {
            var r, o, s, e, h, u, c, f, a;
            for (r = o = 0; r < n.DEGREE; )
              ((s = 255 & t[o++]),
                (e = 255 & t[o++]),
                (h = 255 & t[o++]),
                (u = 255 & t[o++]),
                (c = 255 & t[o++]),
                (f = 255 & t[o++]),
                (a = 255 & t[o++]),
                (i[r++] = s | ((63 & e) << 8)),
                (i[r++] = (e >> 6) | (h << 2) | ((15 & u) << 10)),
                (i[r++] = (u >> 4) | (c << 4) | ((3 & f) << 12)),
                (i[r++] = (f >> 2) | (a << 6)));
          },
          Compress: function (t, i) {
            var r,
              o,
              s,
              e,
              h = 0;
            for (r = o = 0; r < n.DEGREE; ) {
              for (s = 0; s < 8; s++)
                ((e = 7 & n.round(8 * t[r], n.PRIME)), (h = (h << 3) + e), r++);
              ((i[o] = 255 & h),
                (i[o + 1] = (h >>> 8) & 255),
                (i[o + 2] = (h >>> 16) & 255),
                (o += 3),
                (h = 0));
            }
          },
          Decompress: function (t, i) {
            var r,
              o,
              s,
              e,
              h = 0;
            for (r = o = 0; r < n.DEGREE; )
              for (
                h = 255 & t[o + 2],
                  h = (h << 8) + (255 & t[o + 1]),
                  h = (h << 8) + (255 & t[o]),
                  o += 3,
                  s = 0;
                s < 8;
                s++
              )
                ((e = (14680064 & h) >>> 21),
                  (h <<= 3),
                  (i[r] = n.round(e * n.PRIME, 8)),
                  r++);
          },
          Error: function (t, i) {
            var r, o, s, e, h;
            for (e = 0; e < n.DEGREE; e++) {
              for (
                r = t.getByte() + (t.getByte() << 8),
                  o = t.getByte() + (t.getByte() << 8),
                  s = 0,
                  h = 0;
                h < 16;
                h++
              )
                ((s += (1 & r) - (1 & o)), (r >>= 1), (o >>= 1));
              i[e] = s + n.PRIME;
            }
          },
          poly_mul: function (t, i, r) {
            var o;
            for (o = 0; o < n.DEGREE; o++) t[o] = n.modmul(i[o], r[o]);
          },
          poly_add: function (t, i, r) {
            var o;
            for (o = 0; o < n.DEGREE; o++) t[o] = i[o] + r[o];
          },
          poly_sub: function (t, i, r) {
            var o;
            for (o = 0; o < n.DEGREE; o++) t[o] = i[o] + n.PRIME - r[o];
          },
          poly_soft_reduce: function (t) {
            var i, r;
            for (i = 0; i < n.DEGREE; i++)
              ((r = t[i] - n.PRIME),
                (t[i] = r + ((r >> (n.WL - 1)) & n.PRIME)));
          },
          poly_hard_reduce: function (t) {
            var i, r;
            for (i = 0; i < n.DEGREE; i++)
              ((r = n.modmul(t[i], n.ONE)),
                (r -= n.PRIME),
                (t[i] = r + ((r >> (n.WL - 1)) & n.PRIME)));
          },
          bytestostring: function (t) {
            var n,
              i,
              r = "",
              o = t.length;
            for (i = 0; i < o; i++)
              ((n = t[i]),
                (r += ((n >>> 4) & 15).toString(16)),
                (r += (15 & n).toString(16)));
            return r;
          },
          SERVER_1: function (t, i, r) {
            var o,
              s = new Uint8Array(32),
              e = new Uint8Array(1792),
              h = new Int32Array(n.DEGREE),
              u = new Int32Array(n.DEGREE),
              c = new Int32Array(n.DEGREE);
            for (o = 0; o < 32; o++) s[o] = t.getByte();
            for (
              n.Parse(s, c),
                n.Error(t, u),
                n.Error(t, h),
                n.ntt(h),
                n.ntt(u),
                n.poly_mul(c, c, h),
                n.poly_add(c, c, u),
                n.poly_hard_reduce(c),
                n.pack(c, e),
                o = 0;
              o < 32;
              o++
            )
              i[o] = s[o];
            for (o = 0; o < 1792; o++) i[o + 32] = e[o];
            for (n.poly_hard_reduce(h), n.pack(h, e), o = 0; o < 1792; o++)
              r[o] = e[o];
          },
          CLIENT: function (i, r, o, s) {
            var e,
              h = new t.SHA3(t.SHA3.HASH256),
              u = new Uint8Array(32),
              c = new Uint8Array(1792),
              f = new Uint8Array(32),
              a = new Uint8Array(384),
              E = new Int32Array(n.DEGREE),
              p = new Int32Array(n.DEGREE),
              d = new Int32Array(n.DEGREE),
              w = new Int32Array(n.DEGREE),
              y = new Int32Array(n.DEGREE);
            for (
              n.Error(i, E), n.Error(i, p), n.ntt(E), n.ntt(p), e = 0;
              e < 32;
              e++
            )
              u[e] = r[e];
            for (e = 0; e < 1792; e++) c[e] = r[e + 32];
            for (
              n.Parse(u, d),
                n.poly_mul(d, d, E),
                n.poly_add(d, d, p),
                n.poly_hard_reduce(d),
                e = 0;
              e < 32;
              e++
            )
              f[e] = i.getByte();
            for (e = 0; e < 32; e++) h.process(f[e]);
            for (
              h.hash(f),
                n.Encode(f, w),
                n.unpack(c, y),
                n.poly_mul(y, y, E),
                n.intt(y),
                n.Error(i, p),
                n.poly_add(y, y, p),
                n.poly_add(y, y, w),
                n.Compress(y, a),
                h.init(t.SHA3.HASH256),
                e = 0;
              e < 32;
              e++
            )
              h.process(f[e]);
            for (h.hash(f), e = 0; e < 32; e++) s[e] = f[e];
            for (n.pack(d, c), e = 0; e < 1792; e++) o[e] = c[e];
            for (e = 0; e < 384; e++) o[e + 1792] = a[e];
          },
          SERVER_2: function (i, r, o) {
            var s,
              e = new t.SHA3(t.SHA3.HASH256),
              h = new Int32Array(n.DEGREE),
              u = new Int32Array(n.DEGREE),
              c = new Int32Array(n.DEGREE),
              f = new Uint8Array(1792),
              a = new Uint8Array(32),
              E = new Uint8Array(384);
            for (s = 0; s < 1792; s++) f[s] = r[s];
            for (n.unpack(f, c), s = 0; s < 384; s++) E[s] = r[s + 1792];
            for (n.Decompress(E, h), s = 0; s < 1792; s++) f[s] = i[s];
            for (
              n.unpack(f, u),
                n.poly_mul(c, c, u),
                n.intt(c),
                n.poly_sub(c, h, c),
                n.poly_soft_reduce(c),
                n.Decode(c, a),
                s = 0;
              s < 32;
              s++
            )
              e.process(a[s]);
            for (e.hash(a), s = 0; s < 32; s++) o[s] = a[s];
          },
          PRIME: 12289,
          LGN: 10,
          ND: 50343935,
          ONE: 10924,
          R2MODP: 7586,
        };
        return (
          (n.MODINV = Math.pow(2, -26)),
          (n.DEGREE = 1024),
          (n.WL = 26),
          (n.inv = 4091),
          (n.invpr = 4401),
          (n.roots = [
            10924, 3439, 7271, 11355, 11709, 9879, 10742, 2259, 7036, 2539,
            8427, 9802, 10192, 4635, 1420, 1239, 6050, 10731, 7026, 5040, 6577,
            5505, 10953, 9704, 9373, 11614, 867, 8052, 8079, 8356, 11442, 11524,
            5127, 11769, 941, 9207, 6770, 2705, 895, 3507, 8981, 1510, 2703,
            8477, 3501, 7979, 11817, 9904, 8201, 12253, 10369, 921, 1414, 10113,
            10933, 2417, 9035, 7667, 7466, 5597, 6765, 10100, 2047, 7870, 560,
            7412, 6155, 2904, 6540, 11072, 4731, 7581, 4991, 4e3, 324, 75,
            12204, 2825, 7295, 437, 3820, 3160, 4680, 9276, 4234, 5304, 233,
            11774, 251, 9730, 10988, 7095, 4248, 9176, 1923, 6931, 8295, 8406,
            5916, 4, 1634, 4247, 9401, 7069, 10180, 10094, 1727, 1879, 11798,
            1138, 7441, 5705, 10500, 3796, 1733, 5294, 12024, 10976, 11900,
            10037, 4486, 1266, 6075, 10623, 7623, 6885, 10819, 11266, 3798,
            11120, 7291, 6353, 8366, 1709, 9220, 4410, 8350, 795, 5533, 1167,
            3593, 7090, 5367, 901, 452, 7387, 8918, 8664, 12, 6830, 11982,
            11649, 3414, 1473, 4826, 2255, 5637, 7108, 6327, 6585, 8638, 4958,
            10454, 10385, 8712, 6113, 10609, 2342, 8475, 255, 1311, 2693, 225,
            11317, 9605, 289, 3623, 11876, 10744, 11590, 3250, 10538, 829, 2809,
            2950, 11834, 8504, 6520, 8996, 3903, 11536, 7677, 5059, 1740, 6777,
            4641, 9487, 2765, 4095, 1972, 1616, 6291, 3717, 8029, 4828, 11586,
            3470, 4672, 4226, 4847, 4534, 4008, 2831, 3500, 6428, 4674, 490,
            341, 9994, 2541, 11867, 9688, 8748, 2025, 8115, 4268, 10521, 9604,
            3043, 9466, 9197, 1560, 11648, 1786, 5134, 1416, 853, 4180, 9924,
            7759, 5761, 8047, 7251, 4068, 2763, 5760, 12264, 108, 5722, 4283,
            11321, 6148, 4502, 2180, 9762, 1577, 6849, 8754, 12187, 3390, 8447,
            4800, 10220, 90, 672, 1521, 7386, 1027, 7848, 5913, 8135, 11555,
            1514, 9681, 182, 1180, 2759, 11676, 8270, 8514, 4584, 3792, 5616,
            1300, 2623, 3907, 7653, 11671, 5443, 11387, 9242, 8739, 12216, 9655,
            6988, 12086, 9954, 256, 9557, 9836, 11792, 10012, 1450, 6025, 8601,
            10525, 4232, 8262, 7841, 3977, 7290, 7832, 311, 7013, 9453, 3895,
            11971, 3340, 1991, 4671, 2862, 6807, 6659, 7117, 946, 1812, 10617,
            2799, 11068, 11665, 3587, 3675, 8124, 3246, 1074, 9124, 2845, 7372,
            8118, 12120, 10842, 1827, 11417, 11632, 10, 9788, 9985, 3563, 11528,
            7220, 8204, 7816, 918, 6357, 7237, 196, 6332, 11479, 5956, 2289,
            7260, 3046, 10889, 6048, 519, 6606, 8228, 9187, 10651, 1669, 11183,
            1337, 11593, 9397, 5517, 253, 10901, 589, 2739, 4389, 4857, 5562,
            1704, 11318, 1767, 4164, 878, 4072, 4397, 10007, 9376, 7177, 3613,
            2088, 759, 8027, 4011, 3318, 4914, 7282, 9859, 5582, 6867, 6710,
            588, 2867, 9535, 5507, 7529, 10732, 2983, 12183, 5855, 4200, 2798,
            3151, 5436, 9451, 8397, 5016, 9062, 4601, 3703, 4157, 9738, 206,
            2794, 9067, 11025, 1528, 3663, 1872, 5481, 4341, 10318, 2616, 11782,
            224, 3754, 2462, 9371, 2283, 11159, 12255, 10689, 6912, 12259, 7503,
            2111, 11526, 270, 6207, 10170, 306, 4031, 10605, 5450, 1034, 10087,
            173, 3081, 2420, 10273, 7726, 10450, 4012, 964, 12057, 3540, 11743,
            7747, 7824, 11721, 4420, 10435, 1619, 3900, 7730, 10826, 913, 4387,
            219, 11680, 3614, 1639, 9141, 8249, 2706, 5458, 1491, 5786, 7939,
            4930, 8196, 7005, 11521, 11931, 1055, 11207, 2708, 208, 11882,
            11064, 5292, 10020, 954, 1724, 6316, 11685, 8508, 11356, 3539, 2734,
            11784, 1741, 5751, 8229, 7708, 1460, 3524, 96, 5484, 9833, 7169,
            9899, 7867, 9940, 8673, 5483, 1383, 26, 10702, 9172, 1668, 2937,
            6483, 4166, 7564, 6069, 7208, 7397, 9336, 6360, 6934, 11311, 8649,
            6587, 3004, 10523, 6646, 6265, 12260, 1422, 10570, 6632, 10183,
            12218, 6697, 8985, 7883, 8251, 12037, 11138, 6447, 9898, 9346, 2797,
            4630, 1800, 4513, 3106, 2312, 10488, 9255, 2040, 5934, 3920, 2728,
            6218, 8039, 8913, 3770, 8539, 3911, 10359, 3422, 2268, 525, 11694,
            7486, 1909, 3059, 2162, 9831, 8182, 3487, 5060, 261, 1631, 8684,
            1757, 6665, 3182, 509, 5158, 2787, 1172, 11650, 8909, 9686, 4545,
            28, 11438, 5151, 4362, 327, 9815, 9213, 12089, 864, 8852, 7966,
            2931, 3068, 12055, 1994, 12131, 191, 10434, 3098, 9566, 8814, 6824,
            8862, 5658, 627, 4205, 11328, 1999, 5128, 2008, 4106, 1881, 7604,
            9406, 11963, 3095, 6292, 9294, 5565, 1864, 8169, 573, 474, 702,
            6307, 3164, 2553, 981, 11492, 84, 10943, 10140, 7809, 11609, 10311,
            9204, 3496, 2592, 600, 7422, 9228, 11310, 10128, 11733, 11250,
            11828, 5924, 529, 4105, 10169, 1785, 9177, 6562, 1575, 5485, 5790,
            2023, 783, 9398, 1474, 7396, 10461, 32, 5803, 7374, 8361, 9104,
            10372, 8773, 1527, 2743, 7018, 4583, 10835, 12180, 10572, 7909,
            4964, 7066, 4087, 1515, 11312, 7170, 1441, 7047, 9218, 7368, 12001,
            8126, 5004, 9351, 7160, 3478, 7528, 12211, 8129, 8140, 3430, 2387,
            8513, 5498, 9335, 6371, 12080, 1886, 7649, 5298, 12202, 5783, 9012,
            4817, 2934, 10920, 7802, 213, 11360, 9912, 5971, 4682, 8023, 5157,
            3460, 7173, 1601, 3898, 7052, 3453, 12114, 756, 3187, 5403, 5513,
            6169, 6936, 2971, 6889, 11039, 11076, 12122, 11575, 11441, 9973,
            9022, 10095, 630, 4704, 10647, 2546, 7189, 5780, 4524, 7789, 7151,
            10598, 6322, 1274, 8260, 7024, 7998, 8734, 10442, 7510, 1966, 2445,
            9100, 6072, 2771, 4415, 7963, 1234, 5975, 3249, 12017, 11778, 6140,
            12049, 10868, 8233, 1792, 5454, 7407, 8810, 8639, 10150, 5308,
            11051, 12230, 5046, 8678, 5731, 3261, 1874, 5668, 2177, 12224, 4726,
            2687, 10063, 11091, 1648, 8119, 7745, 10782, 9746, 663, 6622, 395,
            585, 7304, 3742, 7921, 531, 1147, 7712, 10433, 7518, 2423, 7626,
            2448, 7670, 11106, 2160, 500, 6185, 7690, 70, 7071, 8450, 363, 6962,
            1384, 8272, 5556, 6426, 7632, 1503, 1372, 7457, 6619, 4825, 3734,
            1664, 9033, 2489, 5469, 3633, 9375, 8440, 2864, 823, 11683, 4547,
            9359, 7417, 4334, 1752, 1771, 2573, 4123, 6884, 6145, 9421, 2067,
            11928, 5492, 80, 4570, 6146, 3926, 6201, 8604, 4187, 1083, 713,
            2327, 5313, 7033, 3499, 10937, 9820, 1818, 7568, 2207, 11202, 10103,
            4116, 7780, 5300, 1682, 3547, 1390, 8592, 11547, 4118, 4822, 7297,
            9768, 1185, 4712, 9623, 10534, 1989, 7629, 1343, 4521, 6721, 1442,
            7269, 2024, 3441, 10696, 1063, 815, 1500, 5809, 10781, 6023, 8740,
            1568, 1700, 4945, 4152, 3692, 4379, 12051, 1089, 11517, 12079, 3365,
            2488, 6948, 1890, 6582, 9745, 2142, 3639, 501, 1283, 7238, 9164,
            1211, 9278, 4651, 10466, 4926, 11705, 3506, 6748, 10665, 202, 8467,
            5073, 5612, 8313, 6362, 11600, 11333, 2722, 4954, 2048, 6391, 6131,
            1533, 8026, 720, 11473, 2542, 8587, 6653, 1339, 10437, 3635, 6417,
            9932, 8216, 12168, 6913, 9783, 7385, 4715, 6667, 1456, 9440, 3714,
            177, 8695, 6678, 12068, 7345, 8061, 10400, 5758, 195,
          ]),
          (n.iroots = [
            10924, 8850, 934, 5018, 10030, 1547, 2410, 580, 11050, 10869, 7654,
            2097, 2487, 3862, 9750, 5253, 765, 847, 3933, 4210, 4237, 11422,
            675, 2916, 2585, 1336, 6784, 5712, 7249, 5263, 1558, 6239, 4419,
            10242, 2189, 5524, 6692, 4823, 4622, 3254, 9872, 1356, 2176, 10875,
            11368, 1920, 36, 4088, 2385, 472, 4310, 8788, 3812, 9586, 10779,
            3308, 8782, 11394, 9584, 5519, 3082, 11348, 520, 7162, 1023, 1470,
            5404, 4666, 1666, 6214, 11023, 7803, 2252, 389, 1313, 265, 6995,
            10556, 8493, 1789, 6584, 4848, 11151, 491, 10410, 10562, 2195, 2109,
            5220, 2888, 8042, 10655, 12285, 6373, 3883, 3994, 5358, 10366, 3113,
            8041, 5194, 1301, 2559, 12038, 515, 12056, 6985, 8055, 3013, 7609,
            9129, 8469, 11852, 4994, 9464, 85, 12214, 11965, 8289, 7298, 4708,
            7558, 1217, 5749, 9385, 6134, 4877, 11729, 10712, 2527, 10109, 7787,
            6141, 968, 8006, 6567, 12181, 25, 6529, 9526, 8221, 5038, 4242,
            6528, 4530, 2365, 8109, 11436, 10873, 7155, 10503, 641, 10729, 3092,
            2823, 9246, 2685, 1768, 8021, 4174, 10264, 3541, 2601, 422, 9748,
            2295, 11948, 11799, 7615, 5861, 8789, 9458, 8281, 7755, 7442, 8063,
            7617, 8819, 703, 7461, 4260, 8572, 5998, 10673, 10317, 8194, 9524,
            2802, 7648, 5512, 10549, 7230, 4612, 753, 8386, 3293, 5769, 3785,
            455, 9339, 9480, 11460, 1751, 9039, 699, 1545, 413, 8666, 12e3,
            2684, 972, 12064, 9596, 10978, 12034, 3814, 9947, 1680, 6176, 3577,
            1904, 1835, 7331, 3651, 5704, 5962, 5181, 6652, 10034, 7463, 10816,
            8875, 640, 307, 5459, 12277, 3625, 3371, 4902, 11837, 11388, 6922,
            5199, 8696, 11122, 6756, 11494, 3939, 7879, 3069, 10580, 3923, 5936,
            4998, 1169, 8491, 8750, 933, 3781, 604, 5973, 10565, 11335, 2269,
            6997, 1225, 407, 12081, 9581, 1082, 11234, 358, 768, 5284, 4093,
            7359, 4350, 6503, 10798, 6831, 9583, 4040, 3148, 10650, 8675, 609,
            12070, 7902, 11376, 1463, 4559, 8389, 10670, 1854, 7869, 568, 4465,
            4542, 546, 8749, 232, 11325, 8277, 1839, 4563, 2016, 9869, 9208,
            12116, 2202, 11255, 6839, 1684, 8258, 11983, 2119, 6082, 12019, 763,
            10178, 4786, 30, 5377, 1600, 34, 1130, 10006, 2918, 9827, 8535,
            12065, 507, 9673, 1971, 7948, 6808, 10417, 8626, 10761, 1264, 3222,
            9495, 12083, 2551, 8132, 8586, 7688, 3227, 7273, 3892, 2838, 6853,
            9138, 9491, 8089, 6434, 106, 9306, 1557, 4760, 6782, 2754, 9422,
            11701, 5579, 5422, 6707, 2430, 5007, 7375, 8971, 8278, 4262, 11530,
            10201, 8676, 5112, 2913, 2282, 7892, 8217, 11411, 8125, 10522, 971,
            10585, 6727, 7432, 7900, 9550, 11700, 1388, 12036, 6772, 2892, 696,
            10952, 1106, 10620, 1638, 3102, 4061, 5683, 11770, 6241, 1400, 9243,
            5029, 1e4, 6333, 810, 5957, 12093, 5052, 5932, 11371, 4473, 4085,
            5069, 761, 8726, 2304, 2501, 12279, 657, 872, 10462, 1447, 169,
            4171, 4917, 9444, 3165, 11215, 9043, 4165, 8614, 8702, 624, 1221,
            9490, 1672, 10477, 11343, 5172, 5630, 5482, 9427, 7618, 10298, 8949,
            318, 8394, 2836, 5276, 11978, 4457, 4999, 8312, 4448, 4027, 8057,
            1764, 3688, 6264, 10839, 2277, 497, 2453, 2732, 12033, 2335, 203,
            5301, 2634, 73, 3550, 3047, 902, 6846, 618, 4636, 8382, 9666, 10989,
            6673, 8497, 7705, 3775, 4019, 613, 9530, 11109, 12107, 2608, 10775,
            734, 4154, 6376, 4441, 11262, 4903, 10768, 11617, 12199, 2069, 7489,
            3842, 8899, 102, 3535, 5440, 12094, 6531, 1889, 4228, 4944, 221,
            5611, 3594, 12112, 8575, 2849, 10833, 5622, 7574, 4904, 2506, 5376,
            121, 4073, 2357, 5872, 8654, 1852, 10950, 5636, 3702, 9747, 816,
            11569, 4263, 10756, 6158, 5898, 10241, 7335, 9567, 956, 689, 5927,
            3976, 6677, 7216, 3822, 12087, 1624, 5541, 8783, 584, 7363, 1823,
            7638, 3011, 11078, 3125, 5051, 11006, 11788, 8650, 10147, 2544,
            5707, 10399, 5341, 9801, 8924, 210, 772, 11200, 238, 7910, 8597,
            8137, 7344, 10589, 10721, 3549, 6266, 1508, 6480, 10789, 11474,
            11226, 1593, 8848, 10265, 5020, 10847, 5568, 7768, 10946, 4660,
            10300, 1755, 2666, 7577, 11104, 2521, 4992, 7467, 8171, 742, 3697,
            10899, 8742, 10607, 6989, 4509, 8173, 2186, 1087, 10082, 4721,
            10471, 2469, 1352, 8790, 5256, 6976, 9962, 11576, 11206, 8102, 3685,
            6088, 8363, 6143, 7719, 12209, 6797, 361, 10222, 2868, 6144, 5405,
            8166, 9716, 10518, 10537, 7955, 4872, 2930, 7742, 606, 11466, 9425,
            3849, 2914, 8656, 6820, 9800, 3256, 10625, 8555, 7464, 5670, 4832,
            10917, 10786, 4657, 5863, 6733, 4017, 10905, 5327, 11926, 3839,
            5218, 12219, 4599, 6104, 11789, 10129, 1183, 4619, 9841, 4663, 9866,
            4771, 1856, 4577, 11142, 11758, 4368, 8547, 4985, 11704, 11894,
            5667, 11626, 2543, 1507, 4544, 4170, 10641, 1198, 2226, 9602, 7563,
            65, 10112, 6621, 10415, 9028, 6558, 3611, 7243, 59, 1238, 6981,
            2139, 3650, 3479, 4882, 6835, 10497, 4056, 1421, 240, 6149, 511,
            272, 9040, 6314, 11055, 4326, 7874, 9518, 6217, 3189, 9844, 10323,
            4779, 1847, 3555, 4291, 5265, 4029, 11015, 5967, 1691, 5138, 4500,
            7765, 6509, 5100, 9743, 1642, 7585, 11659, 2194, 3267, 2316, 848,
            714, 167, 1213, 1250, 5400, 9318, 5353, 6120, 6776, 6886, 9102,
            11533, 175, 8836, 5237, 8391, 10688, 5116, 8829, 7132, 4266, 7607,
            6318, 2377, 929, 12076, 4487, 1369, 9355, 7472, 3277, 6506, 87,
            6991, 4640, 10403, 209, 5918, 2954, 6791, 3776, 9902, 8859, 4149,
            4160, 78, 4761, 8811, 5129, 2938, 7285, 4163, 288, 4921, 3071, 5242,
            10848, 5119, 977, 10774, 8202, 5223, 7325, 4380, 1717, 109, 1454,
            7706, 5271, 9546, 10762, 3516, 1917, 3185, 3928, 4915, 6486, 12257,
            1828, 4893, 10815, 2891, 11506, 10266, 6499, 6804, 10714, 5727,
            3112, 10504, 2120, 8184, 11760, 6365, 461, 1039, 556, 2161, 979,
            3061, 4867, 11689, 9697, 8793, 3085, 1978, 680, 4480, 2149, 1346,
            12205, 797, 11308, 9736, 9125, 5982, 11587, 11815, 11716, 4120,
            10425, 6724, 2995, 5997, 9194, 326, 2883, 4685, 10408, 8183, 10281,
            7161, 10290, 961, 8084, 11662, 6631, 3427, 5465, 3475, 2723, 9191,
            1855, 12098, 158, 10295, 234, 9221, 9358, 4323, 3437, 11425, 200,
            3076, 2474, 11962, 7927, 7138, 851, 12261, 7744, 2603, 3380, 639,
            11117, 9502, 7131, 11780, 9107, 5624, 10532, 3605, 10658, 12028,
            7229, 8802, 4107, 2458, 10127, 9230, 10380, 4803, 595, 11764, 10021,
            8867, 1930, 8378, 3750, 8519, 3376, 4250, 6071, 9561, 8369, 6355,
            10249, 3034, 1801, 9977, 9183, 7776, 10489, 7659, 9492, 2943, 2391,
            5842, 1151, 252, 4038, 4406, 3304, 5592, 71, 2106, 5657, 1719,
            10867, 29, 6024, 5643, 1766, 9285, 5702, 3640, 978, 5355, 5929,
            2953, 4892, 5081, 6220, 4725, 8123, 5806, 9352, 10621, 3117, 1587,
            12263, 10906, 6806, 3616, 2349, 4422, 2390, 5120, 2456, 6805, 12193,
            8765, 10829, 4581, 4060, 6538, 10548, 505, 9555,
          ]),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.NHS = r);
    },
    3519: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = {
          line: function (n, i, r, o) {
            var s,
              e,
              h,
              u,
              c,
              f,
              a,
              E,
              p,
              d,
              w,
              y = new t.FP12(1),
              I = new t.FP4(0);
            return (
              n == i
                ? ((s = new t.FP2(n.getx())),
                  (e = new t.FP2(n.gety())),
                  (h = new t.FP2(n.getz())),
                  (u = new t.FP2(e)),
                  u.mul(h),
                  s.sqr(),
                  e.sqr(),
                  h.sqr(),
                  u.imul(4),
                  u.neg(),
                  u.norm(),
                  u.pmul(o),
                  s.imul(6),
                  s.pmul(r),
                  (c = 3 * t.ROM_CURVE.CURVE_B_I),
                  h.imul(c),
                  t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE && h.div_ip2(),
                  t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE &&
                    (h.mul_ip(), h.add(h), u.mul_ip(), u.norm()),
                  h.norm(),
                  e.add(e),
                  h.sub(e),
                  h.norm(),
                  (d = new t.FP4(u, h)),
                  t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE &&
                    ((w = new t.FP4(s)), (I = new t.FP4(0))),
                  t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE &&
                    ((w = new t.FP4(0)), (I = new t.FP4(s)), I.times_i()),
                  n.dbl())
                : ((f = new t.FP2(n.getx())),
                  (a = new t.FP2(n.gety())),
                  (E = new t.FP2(n.getz())),
                  (p = new t.FP2(n.getz())),
                  E.mul(i.gety()),
                  p.mul(i.getx()),
                  f.sub(p),
                  f.norm(),
                  a.sub(E),
                  a.norm(),
                  E.copy(f),
                  f.pmul(o),
                  t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (f.mul_ip(), f.norm()),
                  E.mul(i.gety()),
                  p.copy(a),
                  p.mul(i.getx()),
                  p.sub(E),
                  p.norm(),
                  a.pmul(r),
                  a.neg(),
                  a.norm(),
                  (d = new t.FP4(f, p)),
                  t.ECP.SEXTIC_TWIST == t.ECP.D_TYPE &&
                    ((w = new t.FP4(a)), (I = new t.FP4(0))),
                  t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE &&
                    ((w = new t.FP4(0)), (I = new t.FP4(a)), I.times_i()),
                  n.add(i)),
              y.set(d, w, I),
              y
            );
          },
          ate: function (i, r) {
            var o, s, e, h, u, c, f, a, E, p, d, w, y, I, l;
            for (
              o = new t.BIG(0),
                o.rcopy(t.ROM_FIELD.Fra),
                s = new t.BIG(0),
                s.rcopy(t.ROM_FIELD.Frb),
                e = new t.FP2(o, s),
                t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (e.inverse(), e.norm()),
                h = new t.BIG(0),
                h.rcopy(t.ROM_CURVE.CURVE_Bnx),
                u = new t.BIG(h),
                f = new t.ECP2(),
                t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN
                  ? (u.pmul(6),
                    t.ECP.SIGN_OF_X == t.ECP.POSITIVEX ? u.inc(2) : u.dec(2))
                  : u.copy(h),
                u.norm(),
                c = new t.BIG(u),
                c.pmul(3),
                c.norm(),
                E = new t.FP(r.getx()),
                p = new t.FP(r.gety()),
                d = new t.ECP2(),
                w = new t.FP12(1),
                d.copy(i),
                y = c.nbits(),
                l = y - 2;
              l >= 1;
              l--
            )
              (w.sqr(),
                (a = n.line(d, d, E, p)),
                w.smul(a, t.ECP.SEXTIC_TWIST),
                (I = c.bit(l) - u.bit(l)),
                1 == I &&
                  ((a = n.line(d, i, E, p)), w.smul(a, t.ECP.SEXTIC_TWIST)),
                -1 == I &&
                  (i.neg(),
                  (a = n.line(d, i, E, p)),
                  w.smul(a, t.ECP.SEXTIC_TWIST),
                  i.neg()));
            return (
              t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN &&
                (t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && (w.conj(), d.neg()),
                f.copy(i),
                f.frob(e),
                (a = n.line(d, f, E, p)),
                w.smul(a, t.ECP.SEXTIC_TWIST),
                f.frob(e),
                f.neg(),
                (a = n.line(d, f, E, p)),
                w.smul(a, t.ECP.SEXTIC_TWIST)),
              w
            );
          },
          ate2: function (i, r, o, s) {
            var e, h, u, c, f, a, E, p, d, w, y, I, l, m, B, _, S, R;
            for (
              e = new t.BIG(0),
                e.rcopy(t.ROM_FIELD.Fra),
                h = new t.BIG(0),
                h.rcopy(t.ROM_FIELD.Frb),
                u = new t.FP2(e, h),
                t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (u.inverse(), u.norm()),
                c = new t.BIG(0),
                c.rcopy(t.ROM_CURVE.CURVE_Bnx),
                f = new t.BIG(c),
                E = new t.ECP2(),
                t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN
                  ? (f.pmul(6),
                    t.ECP.SIGN_OF_X == t.ECP.POSITIVEX ? f.inc(2) : f.dec(2))
                  : f.copy(c),
                f.norm(),
                a = new t.BIG(f),
                a.pmul(3),
                a.norm(),
                d = new t.FP(r.getx()),
                w = new t.FP(r.gety()),
                y = new t.FP(s.getx()),
                I = new t.FP(s.gety()),
                l = new t.ECP2(),
                m = new t.ECP2(),
                B = new t.FP12(1),
                l.copy(i),
                m.copy(o),
                _ = a.nbits(),
                R = _ - 2;
              R >= 1;
              R--
            )
              (B.sqr(),
                (p = n.line(l, l, d, w)),
                B.smul(p, t.ECP.SEXTIC_TWIST),
                (p = n.line(m, m, y, I)),
                B.smul(p, t.ECP.SEXTIC_TWIST),
                (S = a.bit(R) - f.bit(R)),
                1 == S &&
                  ((p = n.line(l, i, d, w)),
                  B.smul(p, t.ECP.SEXTIC_TWIST),
                  (p = n.line(m, o, y, I)),
                  B.smul(p, t.ECP.SEXTIC_TWIST)),
                -1 == S &&
                  (i.neg(),
                  (p = n.line(l, i, d, w)),
                  B.smul(p, t.ECP.SEXTIC_TWIST),
                  i.neg(),
                  o.neg(),
                  (p = n.line(m, o, y, I)),
                  B.smul(p, t.ECP.SEXTIC_TWIST),
                  o.neg()));
            return (
              t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN &&
                (t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX &&
                  (B.conj(), l.neg(), m.neg()),
                E.copy(i),
                E.frob(u),
                (p = n.line(l, E, d, w)),
                B.smul(p, t.ECP.SEXTIC_TWIST),
                E.frob(u),
                E.neg(),
                (p = n.line(l, E, d, w)),
                B.smul(p, t.ECP.SEXTIC_TWIST),
                E.copy(o),
                E.frob(u),
                (p = n.line(m, E, y, I)),
                B.smul(p, t.ECP.SEXTIC_TWIST),
                E.frob(u),
                E.neg(),
                (p = n.line(m, E, y, I)),
                B.smul(p, t.ECP.SEXTIC_TWIST)),
              B
            );
          },
          fexp: function (n) {
            var i, r, o, s, e, h, u, c, f, a, E, p, d, w, y, I;
            return (
              (i = new t.BIG(0)),
              i.rcopy(t.ROM_FIELD.Fra),
              (r = new t.BIG(0)),
              r.rcopy(t.ROM_FIELD.Frb),
              (o = new t.FP2(i, r)),
              (s = new t.BIG(0)),
              s.rcopy(t.ROM_CURVE.CURVE_Bnx),
              (e = new t.FP12(n)),
              (h = new t.FP12(e)),
              h.inverse(),
              e.conj(),
              e.mul(h),
              h.copy(e),
              e.frob(o),
              e.frob(o),
              e.mul(h),
              t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN
                ? (h.copy(e),
                  h.frob(o),
                  (u = new t.FP12(h)),
                  u.frob(o),
                  h.mul(e),
                  u.mul(h),
                  u.frob(o),
                  (c = new t.FP12(e)),
                  c.conj(),
                  (E = e.pow(s)),
                  t.ECP.SIGN_OF_X == t.ECP.POSITIVEX && E.conj(),
                  (a = new t.FP12(E)),
                  a.frob(o),
                  (f = E.pow(s)),
                  t.ECP.SIGN_OF_X == t.ECP.POSITIVEX && f.conj(),
                  (p = new t.FP12(f)),
                  p.conj(),
                  (h = f.pow(s)),
                  t.ECP.SIGN_OF_X == t.ECP.POSITIVEX && h.conj(),
                  f.frob(o),
                  e.copy(f),
                  e.conj(),
                  E.mul(e),
                  f.frob(o),
                  e.copy(h),
                  e.frob(o),
                  h.mul(e),
                  h.usqr(),
                  h.mul(E),
                  h.mul(p),
                  e.copy(a),
                  e.mul(p),
                  e.mul(h),
                  h.mul(f),
                  e.usqr(),
                  e.mul(h),
                  e.usqr(),
                  h.copy(e),
                  h.mul(c),
                  e.mul(u),
                  h.usqr(),
                  e.mul(h),
                  e.reduce())
                : ((d = new t.FP12(e)),
                  d.usqr(),
                  (w = d.pow(s)),
                  t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && w.conj(),
                  s.fshr(1),
                  (y = w.pow(s)),
                  t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && y.conj(),
                  s.fshl(1),
                  (I = new t.FP12(e)),
                  I.conj(),
                  w.mul(I),
                  w.conj(),
                  w.mul(y),
                  (y = w.pow(s)),
                  t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && y.conj(),
                  (I = y.pow(s)),
                  t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && I.conj(),
                  w.conj(),
                  I.mul(w),
                  w.conj(),
                  w.frob(o),
                  w.frob(o),
                  w.frob(o),
                  y.frob(o),
                  y.frob(o),
                  w.mul(y),
                  (y = I.pow(s)),
                  t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX && y.conj(),
                  y.mul(d),
                  y.mul(e),
                  w.mul(y),
                  y.copy(I),
                  y.frob(o),
                  w.mul(y),
                  e.copy(w),
                  e.reduce()),
              e
            );
          },
          glv: function (n) {
            var i,
              r,
              o,
              s,
              e,
              h,
              u,
              c,
              f = [];
            if (t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN) {
              for (
                i = new t.BIG(0),
                  r = new t.BIG(0),
                  o = [],
                  r.rcopy(t.ROM_CURVE.CURVE_Order),
                  u = 0;
                u < 2;
                u++
              )
                (i.rcopy(t.ROM_CURVE.CURVE_W[u]),
                  (s = t.BIG.mul(i, n)),
                  (o[u] = new t.BIG(s.div(r))),
                  (f[u] = new t.BIG(0)));
              for (f[0].copy(n), u = 0; u < 2; u++)
                for (c = 0; c < 2; c++)
                  (i.rcopy(t.ROM_CURVE.CURVE_SB[c][u]),
                    i.copy(t.BIG.modmul(o[c], i, r)),
                    f[u].add(r),
                    f[u].sub(i),
                    f[u].mod(r));
            } else
              ((r = new t.BIG(0)),
                r.rcopy(t.ROM_CURVE.CURVE_Order),
                (e = new t.BIG(0)),
                e.rcopy(t.ROM_CURVE.CURVE_Bnx),
                (h = t.BIG.smul(e, e)),
                (f[0] = new t.BIG(n)),
                f[0].mod(h),
                (f[1] = new t.BIG(n)),
                f[1].div(h),
                f[1].rsub(r));
            return f;
          },
          gs: function (n) {
            var i,
              r,
              o,
              s,
              e,
              h,
              u,
              c,
              f = [];
            if (t.ECP.CURVE_PAIRING_TYPE == t.ECP.BN) {
              for (
                o = new t.BIG(0),
                  s = new t.BIG(0),
                  s.rcopy(t.ROM_CURVE.CURVE_Order),
                  e = [],
                  i = 0;
                i < 4;
                i++
              )
                (o.rcopy(t.ROM_CURVE.CURVE_WB[i]),
                  (h = t.BIG.mul(o, n)),
                  (e[i] = new t.BIG(h.div(s))),
                  (f[i] = new t.BIG(0)));
              for (f[0].copy(n), i = 0; i < 4; i++)
                for (r = 0; r < 4; r++)
                  (o.rcopy(t.ROM_CURVE.CURVE_BB[r][i]),
                    o.copy(t.BIG.modmul(e[r], o, s)),
                    f[i].add(s),
                    f[i].sub(o),
                    f[i].mod(s));
            } else {
              for (
                u = new t.BIG(0),
                  u.rcopy(t.ROM_CURVE.CURVE_Bnx),
                  s = new t.BIG(0),
                  s.rcopy(t.ROM_CURVE.CURVE_Order),
                  c = new t.BIG(n),
                  i = 0;
                i < 3;
                i++
              )
                ((f[i] = new t.BIG(c)), f[i].mod(u), c.div(u));
              ((f[3] = new t.BIG(c)),
                t.ECP.SIGN_OF_X == t.ECP.NEGATIVEX &&
                  (f[1].copy(t.BIG.modneg(f[1], s)),
                  f[3].copy(t.BIG.modneg(f[3], s))));
            }
            return f;
          },
          G1mul: function (i, r) {
            var o, s, e, h, u, c, f, a, E;
            return (
              t.ROM_CURVE.USE_GLV
                ? (i.affine(),
                  (o = new t.ECP()),
                  o.copy(i),
                  (s = new t.ECP()),
                  s.copy(i),
                  (e = new t.BIG(0)),
                  e.rcopy(t.ROM_CURVE.CURVE_Order),
                  (h = new t.BIG(0)),
                  h.rcopy(t.ROM_CURVE.CURVE_Cru),
                  (u = new t.FP(h)),
                  (c = new t.BIG(0)),
                  (f = n.glv(r)),
                  s.getx().mul(u),
                  (a = f[0].nbits()),
                  c.copy(t.BIG.modneg(f[0], e)),
                  (E = c.nbits()),
                  E < a && (f[0].copy(c), o.neg()),
                  (a = f[1].nbits()),
                  c.copy(t.BIG.modneg(f[1], e)),
                  (E = c.nbits()),
                  E < a && (f[1].copy(c), s.neg()),
                  (o = o.mul2(f[0], s, f[1])))
                : (o = i.mul(r)),
              o
            );
          },
          G2mul: function (i, r) {
            var o, s, e, h, u, c, f, a, E, p, d;
            if (t.ROM_CURVE.USE_GS_G2) {
              for (
                s = [],
                  e = new t.BIG(0),
                  e.rcopy(t.ROM_FIELD.Fra),
                  h = new t.BIG(0),
                  h.rcopy(t.ROM_FIELD.Frb),
                  u = new t.FP2(e, h),
                  t.ECP.SEXTIC_TWIST == t.ECP.M_TYPE && (u.inverse(), u.norm()),
                  c = new t.BIG(0),
                  c.rcopy(t.ROM_CURVE.CURVE_Order),
                  f = n.gs(r),
                  a = new t.BIG(0),
                  i.affine(),
                  s[0] = new t.ECP2(),
                  s[0].copy(i),
                  E = 1;
                E < 4;
                E++
              )
                ((s[E] = new t.ECP2()), s[E].copy(s[E - 1]), s[E].frob(u));
              for (E = 0; E < 4; E++)
                ((p = f[E].nbits()),
                  a.copy(t.BIG.modneg(f[E], c)),
                  (d = a.nbits()),
                  d < p && (f[E].copy(a), s[E].neg()));
              o = t.ECP2.mul4(s, f);
            } else o = i.mul(r);
            return o;
          },
          GTpow: function (i, r) {
            var o, s, e, h, u, c, f, a, E, p, d;
            if (t.ROM_CURVE.USE_GS_GT) {
              for (
                s = [],
                  e = new t.BIG(0),
                  e.rcopy(t.ROM_FIELD.Fra),
                  h = new t.BIG(0),
                  h.rcopy(t.ROM_FIELD.Frb),
                  u = new t.FP2(e, h),
                  c = new t.BIG(0),
                  c.rcopy(t.ROM_CURVE.CURVE_Order),
                  f = new t.BIG(0),
                  a = n.gs(r),
                  s[0] = new t.FP12(i),
                  E = 1;
                E < 4;
                E++
              )
                ((s[E] = new t.FP12(0)), s[E].copy(s[E - 1]), s[E].frob(u));
              for (E = 0; E < 4; E++)
                ((p = a[E].nbits()),
                  f.copy(t.BIG.modneg(a[E], c)),
                  (d = f.nbits()),
                  d < p && (a[E].copy(f), s[E].conj()));
              o = t.FP12.pow4(s, a);
            } else o = i.pow(r);
            return o;
          },
        };
        return n;
      };
      "undefined" !== typeof t.exports && (t.exports.PAIR = r);
    },
    3520: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = function () {
          ((this.ira = []),
            (this.rndptr = 0),
            (this.borrow = 0),
            (this.pool_ptr = 0),
            (this.pool = []),
            this.clean());
        };
        return (
          (n.prototype = {
            NK: 21,
            NJ: 6,
            NV: 8,
            clean: function () {
              var t;
              for (t = 0; t < 32; t++) this.pool[t] = 0;
              for (t = 0; t < this.NK; t++) this.ira[t] = 0;
              ((this.rndptr = 0), (this.borrow = 0), (this.pool_ptr = 0));
            },
            sbrand: function () {
              var t, n, i, r;
              if ((this.rndptr++, this.rndptr < this.NK))
                return this.ira[this.rndptr];
              for (
                this.rndptr = 0, t = 0, n = this.NK - this.NJ;
                t < this.NK;
                t++, n++
              )
                (n == this.NK && (n = 0),
                  (r = this.ira[n] >>> 0),
                  (i = (r - this.ira[t] - this.borrow) | 0),
                  (i >>>= 0),
                  i < r && (this.borrow = 0),
                  i > r && (this.borrow = 1),
                  (this.ira[t] = 0 | i));
              return this.ira[0];
            },
            sirand: function (t) {
              var n,
                i,
                r,
                o = 1;
              for (
                this.borrow = 0,
                  this.rndptr = 0,
                  t >>>= 0,
                  this.ira[0] ^= t,
                  n = 1;
                n < this.NK;
                n++
              )
                ((i = (this.NV * n) % this.NK),
                  (this.ira[i] ^= o),
                  (r = o),
                  (o = (t - o) | 0),
                  (t = r));
              for (n = 0; n < 1e4; n++) this.sbrand();
            },
            fill_pool: function () {
              var n,
                i = new t.HASH256();
              for (n = 0; n < 128; n++) i.process(this.sbrand());
              ((this.pool = i.hash()), (this.pool_ptr = 0));
            },
            seed: function (i, r) {
              var o,
                s = new t.HASH256(),
                e = [],
                h = [];
              for (this.pool_ptr = 0, o = 0; o < this.NK; o++) this.ira[o] = 0;
              if (i > 0) {
                for (o = 0; o < i; o++) s.process(r[o]);
                for (e = s.hash(), o = 0; o < 8; o++)
                  ((h[0] = e[4 * o]),
                    (h[1] = e[4 * o + 1]),
                    (h[2] = e[4 * o + 2]),
                    (h[3] = e[4 * o + 3]),
                    this.sirand(n.pack(h)));
              }
              this.fill_pool();
            },
            getByte: function () {
              var t = this.pool[this.pool_ptr++];
              return (this.pool_ptr >= 32 && this.fill_pool(), 255 & t);
            },
          }),
          (n.pack = function (t) {
            return (
              ((255 & t[3]) << 24) |
              ((255 & t[2]) << 16) |
              ((255 & t[1]) << 8) |
              (255 & t[0])
            );
          }),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.RAND = r);
    },
    3521: function (t, n, i) {
      var r, o, s, e, h, u, c, f, a, E, p, d, w, y, I, l, m, B, _, S, R, C;
      ((r = function () {
        var t = {
          CURVE_A: -3,
          CURVE_B_I: 0,
          CURVE_B: [
            8107839, 15570555, 8401013, 14987681, 15469722, 12586975, 7686724,
            871098, 2664752, 4180564, 60981,
          ],
          CURVE_Order: [
            14046689, 13916614, 9707517, 4248255, 14444513, 4414291, 15257154,
            1053293, 3855759, 1543179, 61949,
          ],
          CURVE_Gx: [
            9395455, 8007129, 91337, 11507895, 2609884, 2332044, 4671956,
            3217469, 12663275, 13943638, 46771,
          ],
          CURVE_Gy: [
            404731, 5903700, 14779153, 15262921, 115463, 15698983, 15791084,
            2069105, 11666577, 14743496, 24898,
          ],
        };
        return t;
      }),
        (o = function () {
          var t = {
            CURVE_A: 0,
            CURVE_B_I: 15,
            CURVE_B: [15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Order: [
              3932161, 3397629, 6089858, 591516, 6228314, 7355328, 370220,
              2228452, 3672512, 6145, 32774, 8, 0, 0, 0, 0, 0,
            ],
            CURVE_Gx: [
              7554419, 7238160, 1172241, 2073528, 6143752, 6851466, 1227896,
              4447596, 7613487, 7168259, 5011069, 7176839, 7603501, 1863787,
              6191929, 6105820, 16892,
            ],
            CURVE_Gy: [
              258596, 2931968, 7636148, 4455623, 8210924, 2472906, 2849491,
              2721098, 4493575, 841580, 7616183, 6436556, 1891377, 18781,
              3402944, 735546, 1679,
            ],
            CURVE_Bnx: [
              4608, 2, 262176, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            CURVE_Cof: [
              1482411, 2802346, 8312129, 349663, 2796544, 2731, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0,
            ],
            CURVE_Cru: [
              2802345, 5152861, 4944653, 1506094, 6252570, 6829956, 866216,
              2693029, 7429346, 6928314, 86292, 4866979, 3424366, 1312949,
              2808749, 2837170, 21861,
            ],
            CURVE_Pxa: [
              8334726, 6777946, 7885042, 4909289, 8235879, 6675715, 4020373,
              4165192, 7494612, 1090986, 824327, 997938, 616395, 1576754,
              8061178, 6885891, 1588,
            ],
            CURVE_Pxb: [
              5430805, 4734344, 3653479, 2883376, 4895373, 3861354, 2335925,
              7128532, 5016031, 5978635, 1299043, 1773289, 7434888, 6188878,
              22830, 3932208, 12301,
            ],
            CURVE_Pya: [
              576321, 6387496, 5861795, 1075980, 2022991, 6089577, 2770152,
              4964822, 1785448, 2942867, 3826747, 3253211, 357374, 7940411,
              4756689, 1473694, 13177,
            ],
            CURVE_Pyb: [
              4690067, 820990, 1633121, 7541028, 4442893, 1250818, 1211887,
              7887226, 8032122, 579197, 473141, 5494528, 3833109, 6593999,
              3367706, 1195753, 8421,
            ],
            CURVE_W: [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            CURVE_SB: [
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
            ],
            CURVE_WB: [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            CURVE_BB: [
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
            ],
            USE_GLV: !0,
            USE_GS_G2: !0,
            USE_GS_GT: !0,
            GT_STRONG: !0,
          };
          return t;
        }),
        (s = function () {
          var t = {
            CURVE_A: 0,
            CURVE_B_I: 9,
            CURVE_B: [
              9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            CURVE_Order: [
              1, 0, 7340032, 8355839, 524031, 139264, 8331264, 8257727, 59393,
              4243360, 1535, 8380428, 8388479, 511, 0, 0, 0, 0, 0, 0, 0,
            ],
            CURVE_Gx: [
              6220093, 316693, 5260596, 7813723, 2989056, 6510846, 6686420,
              4265185, 5097761, 2205356, 2631065, 8118601, 4415846, 4547374,
              1716132, 3708539, 819506, 4681332, 3827409, 5670714, 0,
            ],
            CURVE_Gy: [
              5362789, 4598517, 5358557, 6578815, 5339268, 7447595, 424346,
              2943060, 2383689, 1428358, 3019332, 4586784, 1502923, 4135293,
              3351294, 1545149, 6233151, 4116882, 4533441, 3923565, 0,
            ],
            CURVE_Bnx: [
              0, 8387584, 8388591, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0,
            ],
            CURVE_Cof: [
              2796203, 8387925, 5941919, 5603498, 8213930, 2793471, 21845, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            CURVE_Cru: [
              8388606, 1023, 16, 8388352, 8388223, 6422509, 12575, 6488633,
              7190460, 6433522, 7590365, 4434457, 4132489, 656578, 5772288,
              8347647, 131071, 0, 0, 0, 0,
            ],
            CURVE_Pxa: [
              5284732, 2122509, 3217773, 1522414, 1846857, 2952981, 517223,
              8041072, 7667602, 6360502, 1679375, 3582989, 7174356, 7885327,
              2247653, 1971078, 7764293, 4855093, 5122074, 418464, 1,
            ],
            CURVE_Pxb: [
              4309165, 3756421, 3647457, 6427365, 1494374, 4526785, 304454,
              2100579, 4112098, 8037685, 8230597, 5263001, 4566875, 7224745,
              4952912, 1193267, 2259410, 1918713, 5503339, 4907261, 0,
            ],
            CURVE_Pya: [
              3125254, 2196320, 843571, 5394581, 5493140, 1202450, 5780467,
              6505892, 62367, 1996086, 8079080, 4120034, 5111178, 388947,
              3443187, 8024991, 6320372, 7666894, 1194490, 1127780, 0,
            ],
            CURVE_Pyb: [
              7423356, 875515, 172692, 7209569, 5073457, 7194614, 2532292,
              2831477, 6572335, 3045495, 1697866, 2487645, 2231271, 6058157,
              8131344, 141483, 2798032, 6817236, 7159470, 7454848, 0,
            ],
            CURVE_W: [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            CURVE_SB: [
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
            ],
            CURVE_WB: [
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            CURVE_BB: [
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
            ],
            USE_GLV: !0,
            USE_GS_G2: !0,
            USE_GS_GT: !0,
            GT_STRONG: !1,
          };
          return t;
        }),
        (e = function () {
          var t = {
            CURVE_A: 0,
            CURVE_B_I: 3,
            CURVE_B: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Order: [
              741389, 5467345, 1766957, 1218962, 14444027, 10788364, 6221425,
              4646386, 16576717, 16777215, 65535,
            ],
            CURVE_Gx: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Gy: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Bnx: [11577345, 16105520, 26754, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Cof: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Cru: [
              10598407, 664739, 2022172, 15831853, 13490077, 1598875, 4231696,
              3770593, 1, 0, 0,
            ],
            CURVE_Pxa: [
              12623611, 1488521, 3985958, 1228676, 1856410, 9517774, 5733416,
              2643471, 13200416, 3362996, 65036,
            ],
            CURVE_Pxb: [
              8284715, 15545507, 9032297, 8900661, 14514402, 1292580, 12990424,
              14375649, 9093204, 6313843, 20134,
            ],
            CURVE_Pya: [
              14428159, 11829694, 4778249, 9265496, 13313141, 4084207, 7672398,
              7763725, 4367283, 4646853, 28704,
            ],
            CURVE_Pyb: [
              11338907, 8458570, 11788306, 8526488, 5029504, 11706251, 4794750,
              4386470, 8962704, 14925011, 1364,
            ],
            CURVE_W: [
              [344067, 224795, 6699760, 16776824, 16777215, 255, 0, 0, 0, 0, 0],
              [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            CURVE_SB: [
              [
                [
                  6721540, 15658620, 6753269, 16776824, 16777215, 255, 0, 0, 0,
                  0, 0,
                ],
                [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
                [
                  397322, 5242550, 11844413, 1219353, 14444027, 10788108,
                  6221425, 4646386, 16576717, 16777215, 65535,
                ],
              ],
            ],
            CURVE_WB: [
              [3188736, 6786829, 13373472, 5592274, 5592405, 85, 0, 0, 0, 0, 0],
              [
                8243205, 7752717, 11344598, 10554307, 14585790, 1066087,
                8413536, 13698539, 0, 0, 0,
              ],
              [
                1521667, 11929119, 14074284, 5277153, 15681503, 533043,
                12595376, 6849269, 0, 0, 0,
              ],
              [9566209, 5443438, 13426982, 5592274, 5592405, 85, 0, 0, 0, 0, 0],
            ],
            CURVE_BB: [
              [
                [
                  5941261, 6139040, 1740202, 1218962, 14444027, 10788364,
                  6221425, 4646386, 16576717, 16777215, 65535,
                ],
                [
                  5941260, 6139040, 1740202, 1218962, 14444027, 10788364,
                  6221425, 4646386, 16576717, 16777215, 65535,
                ],
                [
                  5941260, 6139040, 1740202, 1218962, 14444027, 10788364,
                  6221425, 4646386, 16576717, 16777215, 65535,
                ],
                [6377474, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
                [
                  5941260, 6139040, 1740202, 1218962, 14444027, 10788364,
                  6221425, 4646386, 16576717, 16777215, 65535,
                ],
                [
                  5941261, 6139040, 1740202, 1218962, 14444027, 10788364,
                  6221425, 4646386, 16576717, 16777215, 65535,
                ],
                [
                  5941260, 6139040, 1740202, 1218962, 14444027, 10788364,
                  6221425, 4646386, 16576717, 16777215, 65535,
                ],
              ],
              [
                [6377474, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
                [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
                [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
                [6377473, 15433825, 53509, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [11577346, 16105520, 26754, 0, 0, 0, 0, 0, 0, 0, 0],
                [12754946, 14090434, 107019, 0, 0, 0, 0, 0, 0, 0, 0],
                [
                  11141130, 6810735, 1713447, 1218962, 14444027, 10788364,
                  6221425, 4646386, 16576717, 16777215, 65535,
                ],
                [11577346, 16105520, 26754, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
            ],
            USE_GLV: !0,
            USE_GS_G2: !0,
            USE_GS_GT: !0,
            GT_STRONG: !1,
          };
          return t;
        }),
        (h = function () {
          var t = {
            CURVE_A: 0,
            CURVE_B_I: 3,
            CURVE_B: [
              3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0,
            ],
            CURVE_Order: [
              1706477, 1359523, 5249689, 2608405, 201696, 3434818, 2804126,
              4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332,
              3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607,
              8388607, 63,
            ],
            CURVE_Gx: [
              1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0,
            ],
            CURVE_Gy: [
              2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0,
            ],
            CURVE_Bnx: [
              1824783, 882364, 4211404, 362431, 3103747, 3344, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            CURVE_Cof: [
              1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0,
            ],
            CURVE_Cru: [
              7940490, 2900280, 338972, 6052030, 7235481, 1201625, 3118232,
              4441267, 5274317, 1128526, 1911936, 589080, 7925622, 7459929,
              3021517, 1388707, 8243261, 8385496, 8388607, 8388607, 8388607,
              8388607, 63,
            ],
            CURVE_Pxa: [
              3557045, 5430299, 8010782, 4733311, 1017649, 7464003, 7286513,
              2875152, 5097180, 7390882, 4231501, 3958405, 5920716, 3618479,
              5071811, 6154573, 6954571, 155257, 28317, 2378436, 1971078,
              6474343, 14,
            ],
            CURVE_Pxb: [
              712937, 1564597, 7141079, 7095432, 4866332, 6003841, 5115734,
              2648944, 7212382, 6621860, 6322313, 6072011, 3155302, 4779345,
              1776572, 5450606, 3441246, 88017, 7155994, 4142660, 4162822,
              230009, 18,
            ],
            CURVE_Pya: [
              6186913, 402779, 1542432, 718812, 2194134, 7834523, 655917,
              1149226, 4099805, 8116266, 5977186, 3460773, 6668632, 1810557,
              5866175, 4380911, 5187440, 1668206, 3921580, 4047177, 5014140,
              6307216, 27,
            ],
            CURVE_Pyb: [
              5213835, 6491536, 5903917, 2489264, 377378, 72702, 8096231,
              1607019, 464036, 509386, 665087, 827629, 3998870, 6394732,
              4596126, 662624, 5840642, 6471403, 888880, 3938518, 4763726,
              3438493, 20,
            ],
            CURVE_W: [
              [
                214403, 7417491, 5227587, 6862091, 6273297, 4717868, 8388413,
                8388607, 8388607, 8388607, 8388607, 7, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0,
              ],
              [
                3649567, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              ],
            ],
            CURVE_SB: [
              [
                [
                  4953444, 5652762, 5193387, 6137228, 65803, 4711180, 8388413,
                  8388607, 8388607, 8388607, 8388607, 7, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0,
                ],
                [
                  6445518, 7983402, 5215488, 1883542, 2382810, 3428129, 2804126,
                  4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332,
                  3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607,
                  8388607, 63,
                ],
              ],
              [
                [
                  3649567, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                  214403, 7417491, 5227587, 6862091, 6273297, 4717868, 8388413,
                  8388607, 8388607, 8388607, 8388607, 7, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0,
                ],
              ],
            ],
            CURVE_WB: [
              [
                5908976, 6739306, 3169130, 2891416, 4467808, 4374399, 5592340,
                2796202, 5592405, 2796202, 5592405, 2, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0,
              ],
              [
                3497291, 153412, 4586412, 7076903, 2161695, 7064478, 2586798,
                2902397, 5952527, 7520457, 4540882, 2730161, 5729219, 273601,
                5798904, 7716912, 53509, 0, 0, 0, 0, 0, 0,
              ],
              [
                2661037, 517888, 4398908, 3719667, 2632721, 3533911, 5487703,
                5645502, 7170567, 3760228, 6464745, 5559384, 7058913, 136800,
                2899452, 8052760, 26754, 0, 0, 0, 0, 0, 0,
              ],
              [
                2259409, 4974578, 3134930, 2166553, 6648922, 4367710, 5592340,
                2796202, 5592405, 2796202, 5592405, 2, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0,
              ],
            ],
            CURVE_BB: [
              [
                [
                  1824784, 882364, 4211404, 362431, 3103747, 3344, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                  1824783, 882364, 4211404, 362431, 3103747, 3344, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                  1824783, 882364, 4211404, 362431, 3103747, 3344, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                  6445519, 7983402, 5215488, 1883542, 2382810, 3428129, 2804126,
                  4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332,
                  3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607,
                  8388607, 63,
                ],
              ],
              [
                [
                  3649567, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                  8270302, 477158, 1038285, 2245974, 5486557, 3431473, 2804126,
                  4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332,
                  3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607,
                  8388607, 63,
                ],
                [
                  8270301, 477158, 1038285, 2245974, 5486557, 3431473, 2804126,
                  4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332,
                  3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607,
                  8388607, 63,
                ],
                [
                  8270302, 477158, 1038285, 2245974, 5486557, 3431473, 2804126,
                  4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332,
                  3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607,
                  8388607, 63,
                ],
              ],
              [
                [
                  3649566, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                  3649567, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                  3649567, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                  3649567, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
              ],
              [
                [
                  8270303, 477158, 1038285, 2245974, 5486557, 3431473, 2804126,
                  4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332,
                  3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607,
                  8388607, 63,
                ],
                [
                  2795951, 6218674, 5181288, 1158679, 4563924, 3421440, 2804126,
                  4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332,
                  3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607,
                  8388607, 63,
                ],
                [
                  3649565, 1764728, 34200, 724863, 6207494, 6688, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ],
                [
                  8270303, 477158, 1038285, 2245974, 5486557, 3431473, 2804126,
                  4600559, 1620196, 4020605, 4528956, 490018, 3936539, 7870332,
                  3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607,
                  8388607, 63,
                ],
              ],
            ],
            USE_GLV: !0,
            USE_GS_G2: !0,
            USE_GS_GT: !0,
            GT_STRONG: !1,
          };
          return t;
        }),
        (u = function () {
          var t = {
            CURVE_A: 0,
            CURVE_B_I: 2,
            CURVE_B: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Order: [
              13, 0, 1089792, 0, 10452992, 2047, 8388608, 12203085, 1, 6586944,
              9507,
            ],
            CURVE_Gx: [
              18, 0, 1287936, 0, 2162688, 2145, 8388608, 12203085, 1, 6586944,
              9507,
            ],
            CURVE_Gy: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Bnx: [1, 0, 16512, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Cof: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Cru: [
              7, 0, 445824, 0, 589824, 585, 4194304, 4830050, 0, 0, 0,
            ],
            CURVE_Pxa: [
              260907, 4334792, 889326, 4757695, 6589371, 15578788, 8293473,
              15437196, 10401327, 1096529, 1562,
            ],
            CURVE_Pxb: [
              13978867, 3457511, 11996556, 11417476, 5076075, 11164447, 9197954,
              3213991, 7567411, 11205050, 1302,
            ],
            CURVE_Pya: [
              13446042, 14710929, 12392944, 12434953, 12389094, 8528681,
              9857420, 10129632, 11506499, 9937003, 536,
            ],
            CURVE_Pyb: [
              3853979, 1764459, 5737005, 14105033, 9438975, 9254832, 5699059,
              9399620, 9114918, 2821756, 3771,
            ],
            CURVE_W: [
              [3, 0, 132096, 0, 8486912, 97, 0, 0, 0, 0, 0],
              [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            CURVE_SB: [
              [
                [4, 0, 165120, 0, 8486912, 97, 0, 0, 0, 0, 0],
                [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
                [
                  10, 0, 957696, 0, 1966080, 1950, 8388608, 12203085, 1,
                  6586944, 9507,
                ],
              ],
            ],
            CURVE_WB: [
              [0, 0, 16512, 0, 8421376, 32, 0, 0, 0, 0, 0],
              [5, 0, 346752, 0, 458752, 455, 8388608, 3220033, 0, 0, 0],
              [3, 0, 181632, 0, 8617984, 227, 12582912, 1610016, 0, 0, 0],
              [1, 0, 49536, 0, 8421376, 32, 0, 0, 0, 0, 0],
            ],
            CURVE_BB: [
              [
                [
                  13, 0, 1073280, 0, 10452992, 2047, 8388608, 12203085, 1,
                  6586944, 9507,
                ],
                [
                  12, 0, 1073280, 0, 10452992, 2047, 8388608, 12203085, 1,
                  6586944, 9507,
                ],
                [
                  12, 0, 1073280, 0, 10452992, 2047, 8388608, 12203085, 1,
                  6586944, 9507,
                ],
                [2, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
                [
                  12, 0, 1073280, 0, 10452992, 2047, 8388608, 12203085, 1,
                  6586944, 9507,
                ],
                [
                  13, 0, 1073280, 0, 10452992, 2047, 8388608, 12203085, 1,
                  6586944, 9507,
                ],
                [
                  12, 0, 1073280, 0, 10452992, 2047, 8388608, 12203085, 1,
                  6586944, 9507,
                ],
              ],
              [
                [2, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 33024, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [2, 0, 16512, 0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 66048, 0, 0, 0, 0, 0, 0, 0, 0],
                [
                  10, 0, 1056768, 0, 10452992, 2047, 8388608, 12203085, 1,
                  6586944, 9507,
                ],
                [2, 0, 16512, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
            ],
            USE_GLV: !0,
            USE_GS_G2: !0,
            USE_GS_GT: !0,
            GT_STRONG: !1,
          };
          return t;
        }),
        (c = function () {
          var t = {
            CURVE_A: 0,
            CURVE_B_I: 2,
            CURVE_B: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Order: [
              15409005, 12625462, 13549073, 837894, 4183790, 6738628, 6584931,
              11582943, 7350797, 8, 9216,
            ],
            CURVE_Gx: [
              1791410, 2355036, 14794342, 1575230, 4183790, 6738724, 6584931,
              11582943, 7350797, 8, 9216,
            ],
            CURVE_Gy: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Bnx: [12587697, 3, 16384, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Cof: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Cru: [
              2317463, 9639828, 5648864, 7466887, 12443492, 4133952, 3240,
              4718592, 0, 0, 0,
            ],
            CURVE_Pxa: [
              13823092, 1896164, 2539653, 10501671, 8160703, 4963216, 62915,
              3509029, 5485142, 2960496, 6504,
            ],
            CURVE_Pxb: [
              2740193, 9341742, 1001381, 12716483, 1808304, 9913336, 3647721,
              10490313, 1701450, 12184638, 5222,
            ],
            CURVE_Pya: [
              778399, 16575439, 11734267, 8683201, 6402877, 14813539, 1408430,
              14163490, 3353485, 15587698, 2681,
            ],
            CURVE_Pyb: [
              10022557, 4924040, 15461776, 6935277, 8801957, 3432898, 5320077,
              3524324, 12894352, 801260, 1558,
            ],
            CURVE_W: [
              [3140483, 6506774, 1179732, 737336, 0, 96, 0, 0, 0, 0, 0],
              [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
            ],
            CURVE_SB: [
              [
                [11538660, 6506781, 1212500, 737336, 0, 96, 0, 0, 0, 0, 0],
                [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
                [
                  12268522, 6118688, 12369341, 100558, 4183790, 6738532,
                  6584931, 11582943, 7350797, 8, 9216,
                ],
              ],
            ],
            CURVE_WB: [
              [8029360, 2168918, 11550748, 245778, 0, 32, 0, 0, 0, 0, 0],
              [
                2229365, 16356798, 10106573, 11061887, 8295661, 2756032, 2160,
                3145728, 0, 0, 0,
              ],
              [
                15797139, 16567008, 13450086, 13919551, 4147830, 1378016, 1080,
                1572864, 0, 0, 0,
              ],
              [16427537, 2168925, 11583516, 245778, 0, 32, 0, 0, 0, 0, 0],
            ],
            CURVE_BB: [
              [
                [
                  2821309, 12625459, 13532689, 837894, 4183790, 6738628,
                  6584931, 11582943, 7350797, 8, 9216,
                ],
                [
                  2821308, 12625459, 13532689, 837894, 4183790, 6738628,
                  6584931, 11582943, 7350797, 8, 9216,
                ],
                [
                  2821308, 12625459, 13532689, 837894, 4183790, 6738628,
                  6584931, 11582943, 7350797, 8, 9216,
                ],
                [8398178, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
                [
                  2821308, 12625459, 13532689, 837894, 4183790, 6738628,
                  6584931, 11582943, 7350797, 8, 9216,
                ],
                [
                  2821309, 12625459, 13532689, 837894, 4183790, 6738628,
                  6584931, 11582943, 7350797, 8, 9216,
                ],
                [
                  2821308, 12625459, 13532689, 837894, 4183790, 6738628,
                  6584931, 11582943, 7350797, 8, 9216,
                ],
              ],
              [
                [8398178, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
                [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
                [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
                [8398177, 7, 32768, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
              [
                [12587698, 3, 16384, 0, 0, 0, 0, 0, 0, 0, 0],
                [19138, 15, 65536, 0, 0, 0, 0, 0, 0, 0, 0],
                [
                  7010826, 12625455, 13516305, 837894, 4183790, 6738628,
                  6584931, 11582943, 7350797, 8, 9216,
                ],
                [12587698, 3, 16384, 0, 0, 0, 0, 0, 0, 0, 0],
              ],
            ],
            USE_GLV: !0,
            USE_GS_G2: !0,
            USE_GS_GT: !0,
            GT_STRONG: !1,
          };
          return t;
        }),
        (f = function () {
          var t = {
            CURVE_A: -3,
            CURVE_B_I: 0,
            CURVE_B: [
              15280900, 8454654, 2452197, 11480905, 9694148, 7780287, 7552267,
              16672423, 14175908, 6407216, 26156,
            ],
            CURVE_Order: [
              4740775, 950935, 16224286, 11887014, 3766947, 9269644, 9477507,
              4089354, 15641020, 5757857, 43515,
            ],
            CURVE_Gx: [
              1246708, 9524782, 2849185, 8040380, 10568388, 6375855, 11680357,
              7545363, 13625271, 15416513, 41960,
            ],
            CURVE_Gy: [
              2476478, 15266651, 7595, 3788839, 12367582, 4292201, 14763588,
              8354594, 3786093, 7111220, 11673,
            ],
          };
          return t;
        }),
        (a = function () {
          var t = {
            CURVE_A: 486662,
            CURVE_B_I: 0,
            CURVE_B: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Order: [
              16110573, 6494812, 14047250, 10680220, 14612958, 20, 0, 0, 0, 0,
              4096,
            ],
            CURVE_Gx: [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Gy: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          };
          return t;
        }),
        (E = function () {
          var t = {
            CURVE_A: 1,
            CURVE_B_I: 3617,
            CURVE_B: [
              3617, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            CURVE_Order: [
              438137, 432004, 110823, 1635270, 211117, 900208, 393771, 340956,
              3983652, 4194220, 4194303, 4194303, 4194303, 4194303, 4194303,
              4194303, 4194303, 4194303, 32767,
            ],
            CURVE_Gx: [
              771477, 2116559, 806867, 1367833, 3406504, 311401, 1489425,
              2806619, 1349796, 1441741, 257151, 2609456, 869942, 637311,
              405955, 34352, 1327920, 2364496, 107316,
            ],
            CURVE_Gy: [
              34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
          };
          return t;
        }),
        (p = function () {
          var t = {
            CURVE_A: -1,
            CURVE_B_I: 0,
            CURVE_B: [
              5863587, 5098003, 11236843, 4276696, 7342669, 15243264, 7960441,
              9226048, 7339635, 7138859, 20995,
            ],
            CURVE_Order: [
              16110573, 6494812, 14047250, 10680220, 14612958, 20, 0, 0, 0, 0,
              4096,
            ],
            CURVE_Gx: [
              2479386, 2973839, 11716950, 9774503, 2934624, 14441577, 3276246,
              12625122, 7230462, 3593165, 8553,
            ],
            CURVE_Gy: [
              6710872, 6710886, 6710886, 6710886, 6710886, 6710886, 6710886,
              6710886, 6710886, 6710886, 26214,
            ],
          };
          return t;
        }),
        (d = function () {
          var t = {
            CURVE_A: 1,
            CURVE_B_I: -39081,
            CURVE_B: [
              8349526, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8257535, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 2047,
            ],
            CURVE_Order: [
              5784819, 337238, 5541347, 7220346, 4990760, 5375021, 7058829,
              2583972, 2353604, 8321428, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 511,
            ],
            CURVE_Gx: [
              5592405, 2796202, 5592405, 2796202, 5592405, 2796202, 5592405,
              2796202, 5592405, 5417642, 2796202, 5592405, 2796202, 5592405,
              2796202, 5592405, 2796202, 5592405, 2796202, 1365,
            ],
            CURVE_Gy: [
              1279725, 7838677, 3107755, 945411, 4926445, 1251191, 5147276,
              3322561, 4503565, 6624689, 6262197, 4353725, 7996248, 28122,
              2207916, 7016488, 897881, 1420809, 1549709, 1392,
            ],
          };
          return t;
        }),
        (w = function () {
          var t = {
            CURVE_A: 1,
            CURVE_B_I: 11111,
            CURVE_B: [11111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Order: [
              2074629, 2829949, 2747582, 4180445, 775864, 5442072, 4523390, 3,
              0, 0, 0, 0, 0, 0, 2048,
            ],
            CURVE_Gx: [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Gy: [
              8291890, 854539, 7097083, 5249838, 5596428, 3595115, 2080013,
              6406286, 3230534, 7382947, 5796865, 815328, 5656622, 3719894, 771,
            ],
          };
          return t;
        }),
        (y = function () {
          var t = {
            CURVE_A: -3,
            CURVE_B_I: 0,
            CURVE_B: [
              13787211, 3948071, 16137166, 13390768, 1902256, 8830053, 5600920,
              11791293, 3838951, 3528874, 23238,
            ],
            CURVE_Order: [
              6497617, 13288188, 8713145, 10950558, 15137453, 16777148,
              16777215, 16777215, 0, 16776960, 65535,
            ],
            CURVE_Gx: [
              10011286, 3753432, 10548385, 3009331, 228737, 4256375, 15033252,
              16301286, 2900551, 13759201, 27415,
            ],
            CURVE_Gy: [
              12538357, 4220983, 13552566, 7024990, 13513559, 10360363, 4881423,
              9365483, 1736603, 4383486, 20451,
            ],
          };
          return t;
        }),
        (I = function () {
          var t = {
            CURVE_A: -3,
            CURVE_B_I: 0,
            CURVE_B: [
              7088879, 1170343, 7645719, 5338764, 6527192, 7035082, 5506273,
              656455, 4264451, 6159618, 6321777, 4286664, 5684799, 1249728,
              1030649, 1561585, 45873,
            ],
            CURVE_Order: [
              4532595, 3331481, 7058352, 4556091, 2153252, 3926787, 8195531,
              3253952, 8388551, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 65535,
            ],
            CURVE_Gx: [
              7735991, 3961060, 3205457, 8038731, 3089883, 4655776, 2135306,
              8102128, 1808473, 4527951, 3699949, 355235, 7466802, 7460408,
              2277709, 6623583, 43655,
            ],
            CURVE_Gy: [
              6950495, 3864865, 7727372, 7074828, 728289, 1573196, 7175214,
              7149705, 1342697, 8016180, 6541430, 1499471, 784681, 7058387,
              625435, 7284043, 13847,
            ],
          };
          return t;
        }),
        (l = function () {
          var t = {
            CURVE_A: -3,
            CURVE_B_I: 0,
            CURVE_B: [
              5259008, 4171990, 4701460, 6906279, 4061315, 6350510, 5172335,
              2711646, 1276694, 2349309, 5792997, 544522, 1644783, 7804561,
              7128444, 3747276, 7250650, 7146113, 6850178, 5307540, 1630665,
              2610988, 5221,
            ],
            CURVE_Order: [
              3695625, 7224610, 3861950, 5038653, 6069128, 3802998, 4047465,
              6684836, 1469311, 491103, 4594206, 8388562, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 32767,
            ],
            CURVE_Gx: [
              6667622, 8151941, 7333369, 2839060, 736280, 1820265, 6864874,
              974995, 5843198, 7331790, 339321, 6942165, 7734964, 4130069,
              5238088, 4234370, 4365412, 4664168, 8072600, 5139697, 7356494,
              3260630, 12705,
            ],
            CURVE_Gy: [
              5334608, 2682175, 140026, 1283602, 4655210, 7087783, 5237569,
              2645120, 2506949, 3325416, 6273482, 7549284, 5337715, 194039,
              6738202, 2237611, 5871861, 5831223, 2719440, 8932, 631740,
              2436431, 17934,
            ],
          };
          return t;
        }),
        (m = function () {
          var t = {
            CURVE_A: 1,
            CURVE_B_I: -15342,
            CURVE_B: [
              16761685, 16777215, 16777215, 16777215, 16777215, 16777215,
              16777215, 16777215, 16777215, 16777215, 65535,
            ],
            CURVE_Order: [
              14502645, 11636974, 10164807, 3103043, 9788069, 65, 0, 0, 0, 0,
              16384,
            ],
            CURVE_Gx: [
              15537114, 12619822, 8823006, 14878773, 3770894, 10212876, 6252832,
              13442621, 15344509, 1375082, 35445,
            ],
            CURVE_Gy: [
              9079270, 1501049, 13840294, 1082734, 6250968, 8392817, 14263883,
              13538917, 14230983, 4104153, 17621,
            ],
          };
          return t;
        }),
        (B = function () {
          var t = {
            CURVE_A: -3,
            CURVE_B_I: 152961,
            CURVE_B: [152961, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CURVE_Order: [
              5351461, 2107719, 6299819, 15345244, 3965557, 16777188, 16777215,
              16777215, 16777215, 16777215, 65535,
            ],
            CURVE_Gx: [
              1748145, 15605426, 3849298, 251079, 5741321, 13306243, 10506050,
              2718357, 11197281, 14071386, 48286,
            ],
            CURVE_Gy: [
              8707743, 12176161, 12288181, 1388815, 5620689, 14693833, 16219652,
              7554187, 10073766, 12644659, 53391,
            ],
          };
          return t;
        }),
        (_ = function () {
          var t = {
            CURVE_A: 1,
            CURVE_B_I: -11556,
            CURVE_B: [
              8376735, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 65535,
            ],
            CURVE_Order: [
              2328957, 3770829, 6587111, 5877315, 4543914, 3796028, 2956024,
              2329870, 8388578, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 16383,
            ],
            CURVE_Gx: [
              2124766, 116952, 5063509, 2763936, 2698006, 6819326, 3984472,
              3276756, 4980823, 904060, 4992977, 2813357, 2173358, 1578708,
              6965659, 589218, 25009,
            ],
            CURVE_Gy: [
              7508882, 508896, 7501364, 3629638, 2822036, 4808718, 8229221,
              511099, 6248067, 6939268, 5944841, 552632, 1720891, 1107734,
              6929324, 2044892, 33432,
            ],
          };
          return t;
        }),
        (S = function () {
          var t = {
            CURVE_A: -3,
            CURVE_B_I: -34568,
            CURVE_B: [
              8353723, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 65535,
            ],
            CURVE_Order: [
              942521, 257270, 6914358, 6405907, 2741204, 1062875, 3856218,
              1005455, 8388566, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 65535,
            ],
            CURVE_Gx: [
              1578282, 7604289, 7319154, 8064547, 7262464, 6834757, 4889393,
              6198413, 7992563, 1832707, 562951, 3116336, 2237456, 593945,
              6014471, 2848856, 30073,
            ],
            CURVE_Gy: [
              1574678, 7461068, 1667538, 8365417, 7032251, 7329690, 4490912,
              1065406, 7576761, 7336190, 4198821, 2522101, 5439576, 1768551,
              6742926, 7451760, 44254,
            ],
          };
          return t;
        }),
        (R = function () {
          var t = {
            CURVE_A: 1,
            CURVE_B_I: -78296,
            CURVE_B: [
              8309743, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 63,
            ],
            CURVE_Order: [
              7263341, 1698359, 8232218, 7307111, 6313862, 6202696, 6040993,
              2092132, 1161886, 5922719, 5489037, 8388605, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 15,
            ],
            CURVE_Gx: [
              7100414, 5657395, 5707494, 6694784, 5395495, 1417724, 1417793,
              6218953, 7540600, 1957004, 1607429, 6031930, 7070323, 4518959,
              7416032, 7589798, 3354577, 1157002, 6499810, 3466192, 5318875,
              7456301, 55,
            ],
            CURVE_Gy: [
              6485473, 4030851, 8178103, 6262400, 7157929, 4169804, 703280,
              852803, 3498592, 6673196, 207183, 7608841, 3758345, 5580141,
              616264, 8098668, 7267446, 5264458, 4445662, 5475525, 3789980,
              2177022, 27,
            ],
          };
          return t;
        }),
        (C = function () {
          var t = {
            CURVE_A: -3,
            CURVE_B_I: 121243,
            CURVE_B: [
              121243, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0,
            ],
            CURVE_Order: [
              3364189, 8286728, 997460, 255634, 6861670, 3721066, 6681647,
              6368374, 203599, 7809487, 7139987, 8388602, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 63,
            ],
            CURVE_Gx: [
              2862679, 994073, 750090, 7043823, 5636407, 3171243, 611717,
              3973443, 3514003, 2232022, 4228741, 3592138, 795952, 2662620,
              4226465, 7085530, 5413066, 4225654, 2998282, 5545681, 7422416,
              5768840, 14,
            ],
            CURVE_Gy: [
              3483558, 966768, 2395778, 6809727, 3523044, 4217317, 2922133,
              1102880, 7203265, 3479069, 659543, 686245, 6342589, 1173860,
              7286499, 7204693, 19351, 4708194, 3914609, 3513968, 2267861,
              477849, 37,
            ],
          };
          return t;
        }),
        "undefined" !== typeof t.exports &&
          (t.exports = {
            ROM_CURVE_ANSSI: r,
            ROM_CURVE_BLS383: o,
            ROM_CURVE_BLS461: s,
            ROM_CURVE_FP256BN: e,
            ROM_CURVE_FP512BN: h,
            ROM_CURVE_BN254: u,
            ROM_CURVE_BN254CX: c,
            ROM_CURVE_BRAINPOOL: f,
            ROM_CURVE_C25519: a,
            ROM_CURVE_C41417: E,
            ROM_CURVE_ED25519: p,
            ROM_CURVE_GOLDILOCKS: d,
            ROM_CURVE_HIFIVE: w,
            ROM_CURVE_NIST256: y,
            ROM_CURVE_NIST384: I,
            ROM_CURVE_NIST521: l,
            ROM_CURVE_NUMS256E: m,
            ROM_CURVE_NUMS256W: B,
            ROM_CURVE_NUMS384E: _,
            ROM_CURVE_NUMS384W: S,
            ROM_CURVE_NUMS512E: R,
            ROM_CURVE_NUMS512W: C,
          }));
    },
    3522: function (t, n, i) {
      var r, o, s, e, h, u, c, f, a, E, p, d, w, y, I, l, m, B;
      ((r = function () {
        var t = {
          Modulus: [
            16777197, 16777215, 16777215, 16777215, 16777215, 16777215,
            16777215, 16777215, 16777215, 16777215, 32767,
          ],
          R2modp: [10747904, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          MConst: 19,
        };
        return t;
      }),
        (o = function () {
          var t = {
            Modulus: [
              16777027, 16777215, 16777215, 16777215, 16777215, 16777215,
              16777215, 16777215, 16777215, 16777215, 65535,
            ],
            R2modp: [8978432, 139, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            MConst: 189,
          };
          return t;
        }),
        (s = function () {
          var t = {
            Modulus: [
              8388291, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 65535,
            ],
            R2modp: [2244608, 196, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            MConst: 317,
          };
          return t;
        }),
        (e = function () {
          var t = {
            Modulus: [
              8388039, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 63,
            ],
            R2modp: [
              0, 362496, 79, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0,
            ],
            MConst: 569,
          };
          return t;
        }),
        (h = function () {
          var t = {
            Modulus: [
              7248899, 15946712, 7203068, 11258058, 6401468, 4414265, 15257154,
              1053293, 3855759, 1543179, 61949,
            ],
            R2modp: [
              11332835, 9584998, 11603918, 7142326, 556738, 4056125, 13815655,
              10911198, 11350258, 772782, 57240,
            ],
            MConst: 5116245,
          };
          return t;
        }),
        (u = function () {
          var t = {
            Modulus: [
              2797739, 3852555, 3107036, 5448745, 4453016, 2002769, 5920841,
              1629184, 2429356, 5891787, 177432, 5542949, 6046206, 3411381,
              2808749, 2837170, 21861,
            ],
            R2modp: [
              2427460, 6878831, 932980, 7935858, 3483107, 925205, 3499542,
              5568036, 5275753, 2565731, 4869296, 3510931, 5989747, 651903,
              6202292, 6356269, 20839,
            ],
            MConst: 3421693,
            Fra: [
              1170113, 3037798, 24907, 7551903, 1263631, 1643629, 3757110,
              2832933, 1738370, 2391924, 3748275, 5937032, 8137745, 422259,
              2087471, 7004033, 8876,
            ],
            Frb: [
              1627626, 814757, 3082129, 6285450, 3189384, 359140, 2163731,
              7184859, 690985, 3499863, 4817765, 7994524, 6297068, 2989121,
              721278, 4221745, 12984,
            ],
          };
          return t;
        }),
        (c = function () {
          var t = {
            Modulus: [
              2796203, 341, 2796208, 2796117, 85, 524292, 5595072, 1267016,
              1884175, 4191416, 2951843, 5809188, 2935367, 4610839, 7297991,
              674223, 5625492, 3451572, 1398069, 2796202, 1,
            ],
            R2modp: [
              6427800, 3889247, 267912, 7305229, 1557049, 1412490, 4790930,
              7568881, 141830, 4588131, 2580466, 5543619, 7162578, 3832646,
              3826467, 1516465, 7741515, 6749478, 5141566, 1828462, 0,
            ],
            MConst: 8388605,
            Fra: [
              76346, 3112759, 15812, 5426402, 1860360, 753428, 4424148, 5428008,
              5821535, 3513488, 1950412, 6382978, 8151531, 7016901, 6566940,
              4332336, 5111546, 3976132, 1236954, 1515560, 1,
            ],
            Frb: [
              2719857, 5276190, 2780395, 5758323, 6528332, 8159471, 1170923,
              4227616, 4451247, 677927, 1001431, 7814818, 3172443, 5982545,
              731050, 4730495, 513945, 7864048, 161114, 1280642, 0,
            ],
          };
          return t;
        }),
        (f = function () {
          var t = {
            Modulus: [
              13840403, 3005358, 8573737, 1218570, 14444027, 10788620, 6221425,
              4646386, 16576717, 16777215, 65535,
            ],
            R2modp: [
              3098625, 16218577, 4095854, 11807290, 13179337, 12741640, 1816341,
              13250262, 5515582, 939918, 30954,
            ],
            MConst: 3663333,
            Fra: [
              9711878, 207023, 9401462, 1981106, 10580305, 6803257, 9296648,
              2955886, 7892789, 7758538, 15713,
            ],
            Frb: [
              4128525, 2798335, 15949491, 16014679, 3863721, 3985363, 13701993,
              1690499, 8683928, 9018677, 49822,
            ],
          };
          return t;
        }),
        (a = function () {
          var t = {
            Modulus: [
              3010355, 5247557, 2020268, 8020771, 2448613, 8139309, 2803931,
              4600559, 1620196, 4020605, 4528956, 490026, 3936539, 7870332,
              3331265, 381164, 8323526, 8385496, 8388607, 8388607, 8388607,
              8388607, 63,
            ],
            R2modp: [
              2352733, 5724727, 4267216, 2711475, 6555241, 3628137, 598933,
              7570578, 7867757, 1822109, 4291754, 3000059, 8301819, 3305539,
              8335303, 992908, 7591731, 2181065, 2804947, 3336952, 3877918,
              870050, 48,
            ],
            MConst: 5004293,
            Fra: [
              3619506, 3105769, 4706904, 1054070, 1381622, 5258286, 3469153,
              5222464, 2931637, 5586186, 6531042, 1061916, 4771630, 3499223,
              2473444, 5293353, 4623182, 2969999, 450118, 8160429, 1897915,
              6218581, 7,
            ],
            Frb: [
              7779457, 2141787, 5701972, 6966700, 1066991, 2881023, 7723386,
              7766702, 7077166, 6823026, 6386521, 7816717, 7553516, 4371108,
              857821, 3476419, 3700343, 5415497, 7938489, 228178, 6490692,
              2170026, 56,
            ],
          };
          return t;
        }),
        (E = function () {
          var t = {
            Modulus: [
              19, 0, 1287936, 0, 2162688, 2145, 8388608, 12203085, 1, 6586944,
              9507,
            ],
            R2modp: [
              3091111, 5468231, 16314740, 12837732, 11242524, 3940405, 431433,
              3641991, 3925545, 7692666, 8007,
            ],
            MConst: 9713125,
            Fra: [
              2780649, 15122543, 12771709, 5062519, 619666, 9781125, 5285958,
              11946395, 3046540, 7739681, 6967,
            ],
            Frb: [
              13996586, 1654672, 5293442, 11714696, 1543021, 6998236, 3102649,
              256690, 13730677, 15624478, 2539,
            ],
          };
          return t;
        }),
        (p = function () {
          var t = {
            Modulus: [
              1791411, 2355036, 14794342, 1575230, 4183790, 6738724, 6584931,
              11582943, 7350797, 8, 9216,
            ],
            R2modp: [
              9365053, 7479262, 13371537, 1098379, 872282, 4987131, 9451258,
              4162655, 10815460, 7924521, 5511,
            ],
            MConst: 7904901,
            Fra: [
              13110947, 537429, 2186201, 15823864, 6779686, 1611880, 9088167,
              11526539, 3801444, 536486, 4953,
            ],
            Frb: [
              5457680, 1817606, 12608141, 2528582, 14181319, 5126843, 14273980,
              56403, 3549353, 16240738, 4262,
            ],
          };
          return t;
        }),
        (d = function () {
          var t = {
            Modulus: [
              7230327, 4726047, 2629651, 13968928, 3929635, 9269870, 9477507,
              4089354, 15641020, 5757857, 43515,
            ],
            R2modp: [
              3520537, 11547688, 15511311, 3691684, 4853461, 2367978, 11163180,
              1023045, 14528088, 4411645, 21176,
            ],
            MConst: 16615865,
          };
          return t;
        }),
        (w = function () {
          var t = {
            Modulus: [
              4194287, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303,
              4194303, 4194303, 4194303, 4194303, 4194303, 4194303, 4194303,
              4194303, 4194303, 4194303, 4194303, 262143,
            ],
            R2modp: [
              73984, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            MConst: 17,
          };
          return t;
        }),
        (y = function () {
          var t = {
            Modulus: [
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8257535, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 2047,
            ],
            R2modp: [
              0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 786432, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            ],
            MConst: 1,
          };
          return t;
        }),
        (I = function () {
          var t = {
            Modulus: [
              8388605, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              16383,
            ],
            R2modp: [2359296, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            MConst: 3,
          };
          return t;
        }),
        (l = function () {
          var t = {
            Modulus: [
              16777215, 16777215, 16777215, 16777215, 0, 0, 0, 0, 1, 16776960,
              65535,
            ],
            R2modp: [
              196608, 0, 0, 16776960, 16515071, 16777215, 16777214, 16777215,
              16646143, 16777215, 4,
            ],
            MConst: 1,
          };
          return t;
        }),
        (m = function () {
          var t = {
            Modulus: [
              8388607, 511, 0, 0, 8388592, 8380415, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              65535,
            ],
            R2modp: [
              16384, 0, 8388606, 511, 524288, 0, 0, 8372224, 4194303, 0, 512,
              131072, 0, 0, 0, 0, 0,
            ],
            MConst: 1,
          };
          return t;
        }),
        (B = function () {
          var t = {
            Modulus: [
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 8388607, 8388607, 8388607, 8388607, 8388607, 8388607,
              8388607, 32767,
            ],
            R2modp: [
              65536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0,
            ],
            MConst: 1,
          };
          return t;
        }),
        "undefined" !== typeof t.exports &&
          (t.exports = {
            ROM_FIELD_25519: r,
            ROM_FIELD_256PM: o,
            ROM_FIELD_384PM: s,
            ROM_FIELD_512PM: e,
            ROM_FIELD_ANSSI: h,
            ROM_FIELD_BLS383: u,
            ROM_FIELD_BLS461: c,
            ROM_FIELD_FP256BN: f,
            ROM_FIELD_FP512BN: a,
            ROM_FIELD_BN254: E,
            ROM_FIELD_BN254CX: p,
            ROM_FIELD_BRAINPOOL: d,
            ROM_FIELD_C41417: w,
            ROM_FIELD_GOLDILOCKS: y,
            ROM_FIELD_HIFIVE: I,
            ROM_FIELD_NIST256: l,
            ROM_FIELD_NIST384: m,
            ROM_FIELD_NIST521: B,
          }));
    },
    3523: function (t, n, i) {
      var r, o, s;
      ((r = function (t) {
        "use strict";
        var n = {
          RFS: t.BIG.MODBYTES * t.FF.FFLEN,
          SHA256: 32,
          SHA384: 48,
          SHA512: 64,
          HASH_TYPE: 32,
          SHA256ID: [
            48, 49, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 1, 5, 0, 4, 32,
          ],
          SHA384ID: [
            48, 65, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 2, 5, 0, 4, 48,
          ],
          SHA512ID: [
            48, 81, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 3, 5, 0, 4, 64,
          ],
          bytestohex: function (t) {
            var n,
              i,
              r = "",
              o = t.length;
            for (i = 0; i < o; i++)
              ((n = t[i]),
                (r += ((n >>> 4) & 15).toString(16)),
                (r += (15 & n).toString(16)));
            return r;
          },
          bytestostring: function (t) {
            var n,
              i = "";
            for (n = 0; n < t.length; n++) i += String.fromCharCode(t[n]);
            return i;
          },
          stringtobytes: function (t) {
            var n,
              i = [];
            for (n = 0; n < t.length; n++) i.push(t.charCodeAt(n));
            return i;
          },
          hashit: function (n, i, r) {
            var o,
              s = [];
            return (
              n == this.SHA256
                ? ((o = new t.HASH256()),
                  null != i && o.process_array(i),
                  r >= 0 && o.process_num(r),
                  (s = o.hash()))
                : n == this.SHA384
                  ? ((o = new t.HASH384()),
                    null != i && o.process_array(i),
                    r >= 0 && o.process_num(r),
                    (s = o.hash()))
                  : n == this.SHA512 &&
                    ((o = new t.HASH512()),
                    null != i && o.process_array(i),
                    r >= 0 && o.process_num(r),
                    (s = o.hash())),
              s
            );
          },
          KEY_PAIR: function (n, i, r, o) {
            for (
              var s = o.n.length >> 1,
                e = new t.FF(s),
                h = new t.FF(s),
                u = new t.FF(s);
              ;
            ) {
              r.p.random(n);
              while (3 != r.p.lastbits(2)) r.p.inc(1);
              while (!t.FF.prime(r.p, n)) r.p.inc(4);
              if ((h.copy(r.p), h.dec(1), !h.cfactor(i))) break;
            }
            for (;;) {
              r.q.random(n);
              while (3 != r.q.lastbits(2)) r.q.inc(1);
              while (!t.FF.prime(r.q, n)) r.q.inc(4);
              if ((u.copy(r.q), u.dec(1), !u.cfactor(i))) break;
            }
            ((o.n = t.FF.mul(r.p, r.q)),
              (o.e = i),
              e.copy(h),
              e.shr(),
              r.dp.set(i),
              r.dp.invmodp(e),
              0 === r.dp.parity() && r.dp.add(e),
              r.dp.norm(),
              e.copy(u),
              e.shr(),
              r.dq.set(i),
              r.dq.invmodp(e),
              0 === r.dq.parity() && r.dq.add(e),
              r.dq.norm(),
              r.c.copy(r.p),
              r.c.invmodp(r.q));
          },
          MGF1: function (t, n, i, r) {
            var o,
              s,
              e,
              h = t,
              u = [],
              c = 0;
            for (e = 0; e < r.length; e++) r[e] = 0;
            for (s = Math.floor(i / h), i % h !== 0 && s++, o = 0; o < s; o++)
              if (((u = this.hashit(t, n, o)), c + h > i))
                for (e = 0; e < i % h; e++) r[c++] = u[e];
              else for (e = 0; e < h; e++) r[c++] = u[e];
          },
          PKCS15: function (n, i, r) {
            var o,
              s,
              e,
              h = t.FF.FF_BITS / 8,
              u = n,
              c = 19;
            if (h < c + u + 10) return !1;
            for (o = this.hashit(n, i, -1), s = 0; s < r.length; s++) r[s] = 0;
            for (s = 0, r[s++] = 0, r[s++] = 1, e = 0; e < h - c - u - 3; e++)
              r[s++] = 255;
            if (((r[s++] = 0), u == this.SHA256))
              for (e = 0; e < c; e++) r[s++] = this.SHA256ID[e];
            else if (u == this.SHA384)
              for (e = 0; e < c; e++) r[s++] = this.SHA384ID[e];
            else if (u == this.SHA512)
              for (e = 0; e < c; e++) r[s++] = this.SHA512ID[e];
            for (e = 0; e < u; e++) r[s++] = o[e];
            return !0;
          },
          OAEP_ENCODE: function (t, i, r, o) {
            var s,
              e,
              h,
              u,
              c,
              f,
              a = n.RFS - 1,
              E = i.length,
              p = [],
              d = [],
              w = [];
            if (((e = s = t), E > a - s - e - 1)) return null;
            for (f = this.hashit(t, o, -1), u = 0; u < s; u++) w[u] = f[u];
            for (h = a - E - s - e - 1, u = 0; u < h; u++) w[s + u] = 0;
            for (w[s + h] = 1, u = 0; u < E; u++) w[s + h + 1 + u] = i[u];
            for (u = 0; u < e; u++) p[u] = r.getByte();
            for (this.MGF1(t, p, a - e, d), u = 0; u < a - e; u++) d[u] ^= w[u];
            for (this.MGF1(t, d, e, w), u = 0; u < e; u++) w[u] ^= p[u];
            for (u = 0; u < a - e; u++) w[u + e] = d[u];
            for (c = 1, u = n.RFS - 1; u >= c; u--) w[u] = w[u - c];
            for (u = c - 1; u >= 0; u--) w[u] = 0;
            return w;
          },
          OAEP_DECODE: function (t, i, r) {
            var o,
              s,
              e,
              h,
              u,
              c,
              f,
              a,
              E,
              p,
              d = n.RFS - 1,
              w = [],
              y = [],
              I = [];
            if (((e = s = t), d < e + s + 1)) return null;
            for (f = 0; f < d - e; f++) I[f] = 0;
            if (r.length < n.RFS) {
              for (c = n.RFS - r.length, f = n.RFS - 1; f >= c; f--)
                r[f] = r[f - c];
              for (f = c - 1; f >= 0; f--) r[f] = 0;
            }
            for (E = this.hashit(t, i, -1), f = 0; f < s; f++) y[f] = E[f];
            for (h = r[0], f = e; f < d; f++) I[f - e] = r[f + 1];
            for (this.MGF1(t, I, e, w), f = 0; f < e; f++) w[f] ^= r[f + 1];
            for (this.MGF1(t, w, d - e, r), f = 0; f < d - e; f++) I[f] ^= r[f];
            for (o = !0, f = 0; f < s; f++) y[f] != I[f] && (o = !1);
            for (f = 0; f < d - e - s; f++) I[f] = I[f + s];
            for (f = 0; f < s; f++) w[f] = y[f] = 0;
            for (a = 0; ; a++) {
              if (a >= d - e - s) return null;
              if (0 !== I[a]) break;
            }
            if (((u = I[a]), !o || 0 !== h || 1 != u)) {
              for (f = 0; f < d - e; f++) I[f] = 0;
              return null;
            }
            for (p = [], f = 0; f < d - e - s - a - 1; f++) p[f] = I[f + a + 1];
            for (f = 0; f < d - e; f++) I[f] = 0;
            return p;
          },
          PRIVATE_KEY_KILL: function (t) {
            (t.p.zero(), t.q.zero(), t.dp.zero(), t.dq.zero(), t.c.zero());
          },
          ENCRYPT: function (n, i, r) {
            var o = n.n.getlen(),
              s = new t.FF(o);
            (t.FF.fromBytes(s, i), s.power(n.e, n.n), s.toBytes(r));
          },
          DECRYPT: function (n, i, r) {
            var o,
              s,
              e,
              h = n.p.getlen(),
              u = new t.FF(2 * h);
            (t.FF.fromBytes(u, i),
              (o = u.dmod(n.p)),
              (s = u.dmod(n.q)),
              o.skpow(n.dp, n.p),
              s.skpow(n.dq, n.q),
              u.zero(),
              u.dscopy(o),
              o.mod(n.q),
              t.FF.comp(o, s) > 0 && s.add(n.q),
              s.sub(o),
              s.norm(),
              (e = t.FF.mul(n.c, s)),
              (s = e.dmod(n.q)),
              (e = t.FF.mul(s, n.p)),
              u.add(e),
              u.norm(),
              u.toBytes(r));
          },
        };
        return n;
      }),
        (o = function (t) {
          "use strict";
          var n = function (n) {
            ((this.p = new t.FF(n)),
              (this.q = new t.FF(n)),
              (this.dp = new t.FF(n)),
              (this.dq = new t.FF(n)),
              (this.c = new t.FF(n)));
          };
          return n;
        }),
        (s = function (t) {
          "use strict";
          var n = function (n) {
            ((this.e = 0), (this.n = new t.FF(n)));
          };
          return n;
        }),
        "undefined" !== typeof t.exports &&
          (t.exports = { RSA: r, rsa_public_key: s, rsa_private_key: o }));
    },
    3524: function (t, n, i) {
      var r = function (t) {
        "use strict";
        var n = function (t) {
          ((this.length = 0),
            (this.rate = 0),
            (this.len = 0),
            (this.S = []),
            this.init(t));
        };
        return (
          (n.prototype = {
            transform: function () {
              var i,
                r,
                o,
                s = [],
                e = [],
                h = [];
              for (o = 0; o < n.ROUNDS; o++) {
                for (
                  s[0] = new t.UInt64(
                    this.S[0][0].top ^
                      this.S[0][1].top ^
                      this.S[0][2].top ^
                      this.S[0][3].top ^
                      this.S[0][4].top,
                    this.S[0][0].bot ^
                      this.S[0][1].bot ^
                      this.S[0][2].bot ^
                      this.S[0][3].bot ^
                      this.S[0][4].bot,
                  ),
                    s[1] = new t.UInt64(
                      this.S[1][0].top ^
                        this.S[1][1].top ^
                        this.S[1][2].top ^
                        this.S[1][3].top ^
                        this.S[1][4].top,
                      this.S[1][0].bot ^
                        this.S[1][1].bot ^
                        this.S[1][2].bot ^
                        this.S[1][3].bot ^
                        this.S[1][4].bot,
                    ),
                    s[2] = new t.UInt64(
                      this.S[2][0].top ^
                        this.S[2][1].top ^
                        this.S[2][2].top ^
                        this.S[2][3].top ^
                        this.S[2][4].top,
                      this.S[2][0].bot ^
                        this.S[2][1].bot ^
                        this.S[2][2].bot ^
                        this.S[2][3].bot ^
                        this.S[2][4].bot,
                    ),
                    s[3] = new t.UInt64(
                      this.S[3][0].top ^
                        this.S[3][1].top ^
                        this.S[3][2].top ^
                        this.S[3][3].top ^
                        this.S[3][4].top,
                      this.S[3][0].bot ^
                        this.S[3][1].bot ^
                        this.S[3][2].bot ^
                        this.S[3][3].bot ^
                        this.S[3][4].bot,
                    ),
                    s[4] = new t.UInt64(
                      this.S[4][0].top ^
                        this.S[4][1].top ^
                        this.S[4][2].top ^
                        this.S[4][3].top ^
                        this.S[4][4].top,
                      this.S[4][0].bot ^
                        this.S[4][1].bot ^
                        this.S[4][2].bot ^
                        this.S[4][3].bot ^
                        this.S[4][4].bot,
                    ),
                    e[0] = n.xor(s[4], n.rotl(s[1], 1)),
                    e[1] = n.xor(s[0], n.rotl(s[2], 1)),
                    e[2] = n.xor(s[1], n.rotl(s[3], 1)),
                    e[3] = n.xor(s[2], n.rotl(s[4], 1)),
                    e[4] = n.xor(s[3], n.rotl(s[0], 1)),
                    i = 0;
                  i < 5;
                  i++
                )
                  for (h[i] = [], r = 0; r < 5; r++)
                    ((h[i][r] = new t.UInt64(0, 0)),
                      (this.S[i][r] = n.xor(this.S[i][r], e[i])));
                for (
                  h[0][0] = this.S[0][0].copy(),
                    h[1][3] = n.rotl(this.S[0][1], 36),
                    h[2][1] = n.rotl(this.S[0][2], 3),
                    h[3][4] = n.rotl(this.S[0][3], 41),
                    h[4][2] = n.rotl(this.S[0][4], 18),
                    h[0][2] = n.rotl(this.S[1][0], 1),
                    h[1][0] = n.rotl(this.S[1][1], 44),
                    h[2][3] = n.rotl(this.S[1][2], 10),
                    h[3][1] = n.rotl(this.S[1][3], 45),
                    h[4][4] = n.rotl(this.S[1][4], 2),
                    h[0][4] = n.rotl(this.S[2][0], 62),
                    h[1][2] = n.rotl(this.S[2][1], 6),
                    h[2][0] = n.rotl(this.S[2][2], 43),
                    h[3][3] = n.rotl(this.S[2][3], 15),
                    h[4][1] = n.rotl(this.S[2][4], 61),
                    h[0][1] = n.rotl(this.S[3][0], 28),
                    h[1][4] = n.rotl(this.S[3][1], 55),
                    h[2][2] = n.rotl(this.S[3][2], 25),
                    h[3][0] = n.rotl(this.S[3][3], 21),
                    h[4][3] = n.rotl(this.S[3][4], 56),
                    h[0][3] = n.rotl(this.S[4][0], 27),
                    h[1][1] = n.rotl(this.S[4][1], 20),
                    h[2][4] = n.rotl(this.S[4][2], 39),
                    h[3][2] = n.rotl(this.S[4][3], 8),
                    h[4][0] = n.rotl(this.S[4][4], 14),
                    i = 0;
                  i < 5;
                  i++
                )
                  for (r = 0; r < 5; r++)
                    this.S[i][r] = n.xor(
                      h[i][r],
                      n.and(n.not(h[(i + 1) % 5][r]), h[(i + 2) % 5][r]),
                    );
                this.S[0][0] = n.xor(this.S[0][0], n.RC[o]);
              }
            },
            init: function (n) {
              var i, r;
              for (i = 0; i < 5; i++)
                for (this.S[i] = [], r = 0; r < 5; r++)
                  this.S[i][r] = new t.UInt64(0, 0);
              ((this.length = 0), (this.len = n), (this.rate = 200 - 2 * n));
            },
            process: function (i) {
              var r, o, s, e, h, u;
              for (
                h = this.length % this.rate,
                  e = h % 8,
                  h >>= 3,
                  r = h % 5,
                  o = Math.floor(h / 5),
                  u = new t.UInt64(0, i),
                  s = 0;
                s < e;
                s++
              )
                u.shlb();
              ((this.S[r][o] = n.xor(this.S[r][o], u)),
                this.length++,
                this.length % this.rate == 0 && this.transform());
            },
            squeeze: function (t, i) {
              var r,
                o,
                s,
                e,
                h,
                u = 0;
              for (r = !1; ; ) {
                for (s = 0; s < 5; s++) {
                  for (o = 0; o < 5; o++) {
                    for (h = this.S[o][s].copy(), e = 0; e < 8; e++) {
                      if (
                        ((t[u++] = 255 & h.bot), u >= i || u % this.rate == 0)
                      ) {
                        r = !0;
                        break;
                      }
                      h = n.rotl(h, 56);
                    }
                    if (r) break;
                  }
                  if (r) break;
                }
                if (u >= i) break;
                ((r = !1), this.transform());
              }
            },
            hash: function (t) {
              var n = this.rate - (this.length % this.rate);
              if (1 == n) this.process(134);
              else {
                this.process(6);
                while (this.length % this.rate != this.rate - 1)
                  this.process(0);
                this.process(128);
              }
              this.squeeze(t, this.len);
            },
            shake: function (t, n) {
              var i = this.rate - (this.length % this.rate);
              if (1 == i) this.process(159);
              else {
                this.process(31);
                while (this.length % this.rate != this.rate - 1)
                  this.process(0);
                this.process(128);
              }
              this.squeeze(t, n);
            },
          }),
          (n.rotl = function (n, i) {
            return 0 == i
              ? n
              : i < 32
                ? new t.UInt64(
                    (n.top << i) | (n.bot >>> (32 - i)),
                    (n.bot << i) | (n.top >>> (32 - i)),
                  )
                : new t.UInt64(
                    (n.bot << (i - 32)) | (n.top >>> (64 - i)),
                    (n.top << (i - 32)) | (n.bot >>> (64 - i)),
                  );
          }),
          (n.xor = function (n, i) {
            return new t.UInt64(n.top ^ i.top, n.bot ^ i.bot);
          }),
          (n.and = function (n, i) {
            return new t.UInt64(n.top & i.top, n.bot & i.bot);
          }),
          (n.not = function (n) {
            return new t.UInt64(~n.top, ~n.bot);
          }),
          (n.ROUNDS = 24),
          (n.HASH224 = 28),
          (n.HASH256 = 32),
          (n.HASH384 = 48),
          (n.HASH512 = 64),
          (n.SHAKE128 = 16),
          (n.SHAKE256 = 32),
          (n.RC = [
            new t.UInt64(0, 1),
            new t.UInt64(0, 32898),
            new t.UInt64(2147483648, 32906),
            new t.UInt64(2147483648, 2147516416),
            new t.UInt64(0, 32907),
            new t.UInt64(0, 2147483649),
            new t.UInt64(2147483648, 2147516545),
            new t.UInt64(2147483648, 32777),
            new t.UInt64(0, 138),
            new t.UInt64(0, 136),
            new t.UInt64(0, 2147516425),
            new t.UInt64(0, 2147483658),
            new t.UInt64(0, 2147516555),
            new t.UInt64(2147483648, 139),
            new t.UInt64(2147483648, 32905),
            new t.UInt64(2147483648, 32771),
            new t.UInt64(2147483648, 32770),
            new t.UInt64(2147483648, 128),
            new t.UInt64(0, 32778),
            new t.UInt64(2147483648, 2147483658),
            new t.UInt64(2147483648, 2147516545),
            new t.UInt64(2147483648, 32896),
            new t.UInt64(0, 2147483649),
            new t.UInt64(2147483648, 2147516424),
          ]),
          n
        );
      };
      "undefined" !== typeof t.exports && (t.exports.SHA3 = r);
    },
    3525: function (t, n, i) {
      var r = function () {
        "use strict";
        var t = function (t, n) {
          ((this.top = t), (this.bot = n));
        };
        return (
          (t.prototype = {
            add: function (t) {
              var n = (this.bot >>> 0) + (t.bot >>> 0),
                i = n >>> 0,
                r = (this.top >>> 0) + (t.top >>> 0);
              return (
                (this.bot = i),
                (this.top = i != n ? (r + 1) >>> 0 : r),
                this
              );
            },
            copy: function () {
              var n = new t(this.top, this.bot);
              return n;
            },
            shlb: function () {
              var t = this.bot >>> 24;
              return ((this.top = t + (this.top << 8)), (this.bot <<= 8), this);
            },
          }),
          t
        );
      };
      "undefined" !== typeof t.exports && (t.exports.UInt64 = r);
    },
    4057: function (t, n, i) {
      "use strict";
      (function (n) {
        function i(t) {
          return (t + "===".slice((t.length + 3) % 4))
            .replace(/-/g, "+")
            .replace(/_/g, "/");
        }
        function r(t) {
          return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        }
        function o(t, i) {
          return r(n.from(t, i || "utf8").toString("base64"));
        }
        function s(t, r) {
          return n.from(i(t), "base64").toString(r || "utf8");
        }
        t.exports = { unescape: i, escape: r, encode: o, decode: s };
      }).call(this, i(2).Buffer);
    },
    4067: function (t, n, i) {
      (function (t, n) {
        (function () {
          var i, r, o, s;
          ((o = (null !== t ? t.exports : void 0) || (window.Base58 = {})),
            (i = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
            (r = {}),
            (s = 0));
          while (s < i.length) ((r[i.charAt(s)] = s), s++);
          ((o.encode = function (t) {
            var n, r, o;
            if (0 === t.length) return "";
            ((s = void 0), (o = void 0), (r = [0]), (s = 0));
            while (s < t.length) {
              o = 0;
              while (o < r.length) ((r[o] <<= 8), o++);
              ((r[0] += t[s]), (n = 0), (o = 0));
              while (o < r.length)
                ((r[o] += n), (n = (r[o] / 58) | 0), (r[o] %= 58), ++o);
              while (n) (r.push(n % 58), (n = (n / 58) | 0));
              s++;
            }
            s = 0;
            while (0 === t[s] && s < t.length - 1) (r.push(0), s++);
            return r
              .reverse()
              .map(function (t) {
                return i[t];
              })
              .join("");
          }),
            (o.decode = function (t) {
              var i, o, e, h;
              if (0 === t.length)
                return new (
                  "undefined" !== typeof Uint8Array && null !== Uint8Array
                    ? Uint8Array
                    : n
                )(0);
              ((s = void 0), (h = void 0), (i = [0]), (s = 0));
              while (s < t.length) {
                if (((o = t[s]), !(o in r)))
                  throw (
                    "Base58.decode received unacceptable input. Character '" +
                    o +
                    "' is not in the Base58 alphabet."
                  );
                h = 0;
                while (h < i.length) ((i[h] *= 58), h++);
                ((i[0] += r[o]), (e = 0), (h = 0));
                while (h < i.length)
                  ((i[h] += e), (e = i[h] >> 8), (i[h] &= 255), ++h);
                while (e) (i.push(255 & e), (e >>= 8));
                s++;
              }
              s = 0;
              while ("1" === t[s] && s < t.length - 1) (i.push(0), s++);
              return new (
                "undefined" !== typeof Uint8Array && null !== Uint8Array
                  ? Uint8Array
                  : n
              )(i.reverse());
            }));
        }).call(this);
      }).call(this, i(20)(t), i(2).Buffer);
    },
    4078: function (t, n, i) {
      (function (n) {
        var r = i(4079),
          o = i(797);
        function s(t, i) {
          var o;
          ((Array.isArray(t) || t instanceof Uint8Array) && (t = new n(t)),
            null != i
              ? ("number" === typeof i && (i = new n([i])),
                (o = n.concat([i, t])))
              : (o = t));
          var s = a(o).slice(0, 4),
            e = n.concat([o, s]);
          return r.encode(e);
        }
        function e(t, i) {
          var o,
            s = r.decode(t),
            e = new n(s);
          if (null == i) o = 0;
          else {
            ("number" === typeof i && (i = new n([i])), (o = i.length));
            var h = e.slice(0, o);
            if (h.toString("hex") !== i.toString("hex"))
              throw new Error("Invalid version");
          }
          var u = e.slice(-4),
            c = e.length - 4,
            f = e.slice(0, c),
            E = a(f).slice(0, 4);
          if (u.toString("hex") !== E.toString("hex"))
            throw new Error("Invalid checksum");
          return f.slice(o);
        }
        function h(t, n) {
          try {
            e(t, n);
          } catch (i) {
            return !1;
          }
          return !0;
        }
        function u(t) {
          return function (n) {
            return s(n, t);
          };
        }
        function c(t) {
          return function (n) {
            return e(n, t);
          };
        }
        function f(t) {
          return function (n) {
            return h(n, t);
          };
        }
        function a(t) {
          var n = o("sha256").update(t).digest();
          return o("sha256").update(n).digest();
        }
        t.exports = {
          encode: s,
          decode: e,
          isValid: h,
          createEncoder: u,
          createDecoder: c,
          createValidator: f,
        };
      }).call(this, i(2).Buffer);
    },
    4079: function (t, n) {
      for (
        var i = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          r = {},
          o = 0;
        o < i.length;
        o++
      )
        r[i.charAt(o)] = o;
      var s = 58;
      function e(t) {
        if (0 === t.length) return "";
        var n,
          r = [0];
        for (h = 0; h < t.length; h++) {
          for (n = 0; n < r.length; n++) r[n] <<= 8;
          r[0] += t[h];
          var o = 0;
          for (n = 0; n < r.length; ++n)
            ((r[n] += o), (o = (r[n] / s) | 0), (r[n] %= s));
          while (o) (r.push(o % s), (o = (o / s) | 0));
        }
        for (h = 0; 0 === t[h] && h < t.length - 1; h++) r.push(0);
        for (var e = "", h = r.length - 1; h >= 0; h--) e += i[r[h]];
        return e;
      }
      function h(t) {
        if (0 === t.length) return [];
        var n,
          i,
          o = [0];
        for (n = 0; n < t.length; n++) {
          var e = t[n];
          if (!(e in r)) throw new Error("Non-base58 character");
          for (i = 0; i < o.length; i++) o[i] *= s;
          o[0] += r[e];
          var h = 0;
          for (i = 0; i < o.length; ++i)
            ((o[i] += h), (h = o[i] >> 8), (o[i] &= 255));
          while (h) (o.push(255 & h), (h >>= 8));
        }
        for (n = 0; "1" === t[n] && n < t.length - 1; n++) o.push(0);
        return o.reverse();
      }
      t.exports = { encode: e, decode: h };
    },
    4086: function (t, n, i) {
      t.exports = i(3266);
    },
    4087: function (t, n, i) {
      var r = {
        "./aes": 3502,
        "./aes.js": 3502,
        "./big": 3503,
        "./big.js": 3503,
        "./ctx": 3266,
        "./ctx.js": 3266,
        "./ecdh": 3504,
        "./ecdh.js": 3504,
        "./ecp": 3505,
        "./ecp.js": 3505,
        "./ecp2": 3506,
        "./ecp2.js": 3506,
        "./ff": 3507,
        "./ff.js": 3507,
        "./fp": 3508,
        "./fp.js": 3508,
        "./fp12": 3509,
        "./fp12.js": 3509,
        "./fp2": 3510,
        "./fp2.js": 3510,
        "./fp4": 3511,
        "./fp4.js": 3511,
        "./gcm": 3512,
        "./gcm.js": 3512,
        "./hash256": 3513,
        "./hash256.js": 3513,
        "./hash384": 3514,
        "./hash384.js": 3514,
        "./hash512": 3515,
        "./hash512.js": 3515,
        "./mpin": 3516,
        "./mpin.js": 3516,
        "./newhope": 3517,
        "./newhope.js": 3517,
        "./nhs": 3518,
        "./nhs.js": 3518,
        "./pair": 3519,
        "./pair.js": 3519,
        "./rand": 3520,
        "./rand.js": 3520,
        "./rom_curve": 3521,
        "./rom_curve.js": 3521,
        "./rom_field": 3522,
        "./rom_field.js": 3522,
        "./rsa": 3523,
        "./rsa.js": 3523,
        "./sha3": 3524,
        "./sha3.js": 3524,
        "./uint64": 3525,
        "./uint64.js": 3525,
      };
      function o(t) {
        var n = s(t);
        return i(n);
      }
      function s(t) {
        if (!i.o(r, t)) {
          var n = new Error("Cannot find module '" + t + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        return r[t];
      }
      ((o.keys = function () {
        return Object.keys(r);
      }),
        (o.resolve = s),
        (t.exports = o),
        (o.id = 4087));
    },
  },
]);
