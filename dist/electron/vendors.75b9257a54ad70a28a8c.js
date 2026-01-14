(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [243, 244],
  {
    2754: function (t, e) {
      t.exports = n;
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
      } catch (A) {}
      function n(t, e, r) {
        ((this.low = 0 | t), (this.high = 0 | e), (this.unsigned = !!r));
      }
      function s(t) {
        return !0 === (t && t["__isLong__"]);
      }
      (n.prototype.__isLong__,
        Object.defineProperty(n.prototype, "__isLong__", { value: !0 }),
        (n.isLong = s));
      var o = {},
        a = {};
      function i(t, e) {
        var r, n, s;
        return e
          ? ((t >>>= 0),
            (s = 0 <= t && t < 256) && ((n = a[t]), n)
              ? n
              : ((r = c(t, (0 | t) < 0 ? -1 : 0, !0)), s && (a[t] = r), r))
          : ((t |= 0),
            (s = -128 <= t && t < 128) && ((n = o[t]), n)
              ? n
              : ((r = c(t, t < 0 ? -1 : 0, !1)), s && (o[t] = r), r));
      }
      function _(t, e) {
        if (isNaN(t)) return e ? m : b;
        if (e) {
          if (t < 0) return m;
          if (t >= d) return k;
        } else {
          if (t <= -v) return T;
          if (t + 1 >= v) return S;
        }
        return t < 0 ? _(-t, e).neg() : c((t % f) | 0, (t / f) | 0, e);
      }
      function c(t, e, r) {
        return new n(t, e, r);
      }
      ((n.fromInt = i), (n.fromNumber = _), (n.fromBits = c));
      var h = Math.pow;
      function u(t, e, r) {
        if (0 === t.length) throw Error("empty string");
        if (
          "NaN" === t ||
          "Infinity" === t ||
          "+Infinity" === t ||
          "-Infinity" === t
        )
          return b;
        if (
          ("number" === typeof e ? ((r = e), (e = !1)) : (e = !!e),
          (r = r || 10),
          r < 2 || 36 < r)
        )
          throw RangeError("radix");
        var n;
        if ((n = t.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === n) return u(t.substring(1), e, r).neg();
        for (var s = _(h(r, 8)), o = b, a = 0; a < t.length; a += 8) {
          var i = Math.min(8, t.length - a),
            c = parseInt(t.substring(a, a + i), r);
          if (i < 8) {
            var p = _(h(r, i));
            o = o.mul(p).add(_(c));
          } else ((o = o.mul(s)), (o = o.add(_(c))));
        }
        return ((o.unsigned = e), o);
      }
      function p(t, e) {
        return "number" === typeof t
          ? _(t, e)
          : "string" === typeof t
            ? u(t, e)
            : c(t.low, t.high, "boolean" === typeof e ? e : t.unsigned);
      }
      ((n.fromString = u), (n.fromValue = p));
      var l = 65536,
        y = 1 << 24,
        f = l * l,
        d = f * f,
        v = d / 2,
        g = i(y),
        b = i(0);
      n.ZERO = b;
      var m = i(0, !0);
      n.UZERO = m;
      var w = i(1);
      n.ONE = w;
      var E = i(1, !0);
      n.UONE = E;
      var x = i(-1);
      n.NEG_ONE = x;
      var S = c(-1, 2147483647, !1);
      n.MAX_VALUE = S;
      var k = c(-1, -1, !0);
      n.MAX_UNSIGNED_VALUE = k;
      var T = c(0, -2147483648, !1);
      n.MIN_VALUE = T;
      var B = n.prototype;
      ((B.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
      }),
        (B.toNumber = function () {
          return this.unsigned
            ? (this.high >>> 0) * f + (this.low >>> 0)
            : this.high * f + (this.low >>> 0);
        }),
        (B.toString = function (t) {
          if (((t = t || 10), t < 2 || 36 < t)) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative()) {
            if (this.eq(T)) {
              var e = _(t),
                r = this.div(e),
                n = r.mul(e).sub(this);
              return r.toString(t) + n.toInt().toString(t);
            }
            return "-" + this.neg().toString(t);
          }
          var s = _(h(t, 6), this.unsigned),
            o = this,
            a = "";
          while (1) {
            var i = o.div(s),
              c = o.sub(i.mul(s)).toInt() >>> 0,
              u = c.toString(t);
            if (((o = i), o.isZero())) return u + a;
            while (u.length < 6) u = "0" + u;
            a = "" + u + a;
          }
        }),
        (B.getHighBits = function () {
          return this.high;
        }),
        (B.getHighBitsUnsigned = function () {
          return this.high >>> 0;
        }),
        (B.getLowBits = function () {
          return this.low;
        }),
        (B.getLowBitsUnsigned = function () {
          return this.low >>> 0;
        }),
        (B.getNumBitsAbs = function () {
          if (this.isNegative())
            return this.eq(T) ? 64 : this.neg().getNumBitsAbs();
          for (
            var t = 0 != this.high ? this.high : this.low, e = 31;
            e > 0;
            e--
          )
            if (0 != (t & (1 << e))) break;
          return 0 != this.high ? e + 33 : e + 1;
        }),
        (B.isZero = function () {
          return 0 === this.high && 0 === this.low;
        }),
        (B.eqz = B.isZero),
        (B.isNegative = function () {
          return !this.unsigned && this.high < 0;
        }),
        (B.isPositive = function () {
          return this.unsigned || this.high >= 0;
        }),
        (B.isOdd = function () {
          return 1 === (1 & this.low);
        }),
        (B.isEven = function () {
          return 0 === (1 & this.low);
        }),
        (B.equals = function (t) {
          return (
            s(t) || (t = p(t)),
            (this.unsigned === t.unsigned ||
              this.high >>> 31 !== 1 ||
              t.high >>> 31 !== 1) &&
              this.high === t.high &&
              this.low === t.low
          );
        }),
        (B.eq = B.equals),
        (B.notEquals = function (t) {
          return !this.eq(t);
        }),
        (B.neq = B.notEquals),
        (B.ne = B.notEquals),
        (B.lessThan = function (t) {
          return this.comp(t) < 0;
        }),
        (B.lt = B.lessThan),
        (B.lessThanOrEqual = function (t) {
          return this.comp(t) <= 0;
        }),
        (B.lte = B.lessThanOrEqual),
        (B.le = B.lessThanOrEqual),
        (B.greaterThan = function (t) {
          return this.comp(t) > 0;
        }),
        (B.gt = B.greaterThan),
        (B.greaterThanOrEqual = function (t) {
          return this.comp(t) >= 0;
        }),
        (B.gte = B.greaterThanOrEqual),
        (B.ge = B.greaterThanOrEqual),
        (B.compare = function (t) {
          if ((s(t) || (t = p(t)), this.eq(t))) return 0;
          var e = this.isNegative(),
            r = t.isNegative();
          return e && !r
            ? -1
            : !e && r
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
        (B.comp = B.compare),
        (B.negate = function () {
          return !this.unsigned && this.eq(T) ? T : this.not().add(w);
        }),
        (B.neg = B.negate),
        (B.add = function (t) {
          s(t) || (t = p(t));
          var e = this.high >>> 16,
            r = 65535 & this.high,
            n = this.low >>> 16,
            o = 65535 & this.low,
            a = t.high >>> 16,
            i = 65535 & t.high,
            _ = t.low >>> 16,
            h = 65535 & t.low,
            u = 0,
            l = 0,
            y = 0,
            f = 0;
          return (
            (f += o + h),
            (y += f >>> 16),
            (f &= 65535),
            (y += n + _),
            (l += y >>> 16),
            (y &= 65535),
            (l += r + i),
            (u += l >>> 16),
            (l &= 65535),
            (u += e + a),
            (u &= 65535),
            c((y << 16) | f, (u << 16) | l, this.unsigned)
          );
        }),
        (B.subtract = function (t) {
          return (s(t) || (t = p(t)), this.add(t.neg()));
        }),
        (B.sub = B.subtract),
        (B.multiply = function (t) {
          if (this.isZero()) return b;
          if ((s(t) || (t = p(t)), r)) {
            var e = r.mul(this.low, this.high, t.low, t.high);
            return c(e, r.get_high(), this.unsigned);
          }
          if (t.isZero()) return b;
          if (this.eq(T)) return t.isOdd() ? T : b;
          if (t.eq(T)) return this.isOdd() ? T : b;
          if (this.isNegative())
            return t.isNegative()
              ? this.neg().mul(t.neg())
              : this.neg().mul(t).neg();
          if (t.isNegative()) return this.mul(t.neg()).neg();
          if (this.lt(g) && t.lt(g))
            return _(this.toNumber() * t.toNumber(), this.unsigned);
          var n = this.high >>> 16,
            o = 65535 & this.high,
            a = this.low >>> 16,
            i = 65535 & this.low,
            h = t.high >>> 16,
            u = 65535 & t.high,
            l = t.low >>> 16,
            y = 65535 & t.low,
            f = 0,
            d = 0,
            v = 0,
            m = 0;
          return (
            (m += i * y),
            (v += m >>> 16),
            (m &= 65535),
            (v += a * y),
            (d += v >>> 16),
            (v &= 65535),
            (v += i * l),
            (d += v >>> 16),
            (v &= 65535),
            (d += o * y),
            (f += d >>> 16),
            (d &= 65535),
            (d += a * l),
            (f += d >>> 16),
            (d &= 65535),
            (d += i * u),
            (f += d >>> 16),
            (d &= 65535),
            (f += n * y + o * l + a * u + i * h),
            (f &= 65535),
            c((v << 16) | m, (f << 16) | d, this.unsigned)
          );
        }),
        (B.mul = B.multiply),
        (B.divide = function (t) {
          if ((s(t) || (t = p(t)), t.isZero())) throw Error("division by zero");
          if (r) {
            if (
              !this.unsigned &&
              -2147483648 === this.high &&
              -1 === t.low &&
              -1 === t.high
            )
              return this;
            var e = (this.unsigned ? r.div_u : r.div_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return c(e, r.get_high(), this.unsigned);
          }
          if (this.isZero()) return this.unsigned ? m : b;
          var n, o, a;
          if (this.unsigned) {
            if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return m;
            if (t.gt(this.shru(1))) return E;
            a = m;
          } else {
            if (this.eq(T)) {
              if (t.eq(w) || t.eq(x)) return T;
              if (t.eq(T)) return w;
              var i = this.shr(1);
              return (
                (n = i.div(t).shl(1)),
                n.eq(b)
                  ? t.isNegative()
                    ? w
                    : x
                  : ((o = this.sub(t.mul(n))), (a = n.add(o.div(t))), a)
              );
            }
            if (t.eq(T)) return this.unsigned ? m : b;
            if (this.isNegative())
              return t.isNegative()
                ? this.neg().div(t.neg())
                : this.neg().div(t).neg();
            if (t.isNegative()) return this.div(t.neg()).neg();
            a = b;
          }
          o = this;
          while (o.gte(t)) {
            n = Math.max(1, Math.floor(o.toNumber() / t.toNumber()));
            var u = Math.ceil(Math.log(n) / Math.LN2),
              l = u <= 48 ? 1 : h(2, u - 48),
              y = _(n),
              f = y.mul(t);
            while (f.isNegative() || f.gt(o))
              ((n -= l), (y = _(n, this.unsigned)), (f = y.mul(t)));
            (y.isZero() && (y = w), (a = a.add(y)), (o = o.sub(f)));
          }
          return a;
        }),
        (B.div = B.divide),
        (B.modulo = function (t) {
          if ((s(t) || (t = p(t)), r)) {
            var e = (this.unsigned ? r.rem_u : r.rem_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return c(e, r.get_high(), this.unsigned);
          }
          return this.sub(this.div(t).mul(t));
        }),
        (B.mod = B.modulo),
        (B.rem = B.modulo),
        (B.not = function () {
          return c(~this.low, ~this.high, this.unsigned);
        }),
        (B.and = function (t) {
          return (
            s(t) || (t = p(t)),
            c(this.low & t.low, this.high & t.high, this.unsigned)
          );
        }),
        (B.or = function (t) {
          return (
            s(t) || (t = p(t)),
            c(this.low | t.low, this.high | t.high, this.unsigned)
          );
        }),
        (B.xor = function (t) {
          return (
            s(t) || (t = p(t)),
            c(this.low ^ t.low, this.high ^ t.high, this.unsigned)
          );
        }),
        (B.shiftLeft = function (t) {
          return (
            s(t) && (t = t.toInt()),
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
        (B.shl = B.shiftLeft),
        (B.shiftRight = function (t) {
          return (
            s(t) && (t = t.toInt()),
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
        (B.shr = B.shiftRight),
        (B.shiftRightUnsigned = function (t) {
          if ((s(t) && (t = t.toInt()), (t &= 63), 0 === t)) return this;
          var e = this.high;
          if (t < 32) {
            var r = this.low;
            return c((r >>> t) | (e << (32 - t)), e >>> t, this.unsigned);
          }
          return c(32 === t ? e : e >>> (t - 32), 0, this.unsigned);
        }),
        (B.shru = B.shiftRightUnsigned),
        (B.shr_u = B.shiftRightUnsigned),
        (B.toSigned = function () {
          return this.unsigned ? c(this.low, this.high, !1) : this;
        }),
        (B.toUnsigned = function () {
          return this.unsigned ? this : c(this.low, this.high, !0);
        }),
        (B.toBytes = function (t) {
          return t ? this.toBytesLE() : this.toBytesBE();
        }),
        (B.toBytesLE = function () {
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
        (B.toBytesBE = function () {
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
        (n.fromBytes = function (t, e, r) {
          return r ? n.fromBytesLE(t, e) : n.fromBytesBE(t, e);
        }),
        (n.fromBytesLE = function (t, e) {
          return new n(
            t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
            t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
            e,
          );
        }),
        (n.fromBytesBE = function (t, e) {
          return new n(
            (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
            (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
            e,
          );
        }));
    },
    2755: function (t, e, r) {
      "use strict";
      t.exports = r(3094);
    },
    2758: function (t, e, r) {
      var n = r(2848),
        s = r(2813),
        o = n.tfJSON,
        a = n.TfTypeError,
        i = n.TfPropertyTypeError,
        _ = n.tfSubError,
        c = n.getValueTypeName,
        h = {
          arrayOf: function (t, e) {
            function r(r, n) {
              return (
                !!s.Array(r) &&
                !s.Nil(r) &&
                !(void 0 !== e.minLength && r.length < e.minLength) &&
                !(void 0 !== e.maxLength && r.length > e.maxLength) &&
                (void 0 === e.length || r.length === e.length) &&
                r.every(function (e, r) {
                  try {
                    return p(t, e, n);
                  } catch (s) {
                    throw _(s, r);
                  }
                })
              );
            }
            return (
              (t = u(t)),
              (e = e || {}),
              (r.toJSON = function () {
                var r = "[" + o(t) + "]";
                return (
                  void 0 !== e.length
                    ? (r += "{" + e.length + "}")
                    : (void 0 === e.minLength && void 0 === e.maxLength) ||
                      (r +=
                        "{" +
                        (void 0 === e.minLength ? 0 : e.minLength) +
                        "," +
                        (void 0 === e.maxLength ? 1 / 0 : e.maxLength) +
                        "}"),
                  r
                );
              }),
              r
            );
          },
          maybe: function t(e) {
            function r(r, n) {
              return s.Nil(r) || e(r, n, t);
            }
            return (
              (e = u(e)),
              (r.toJSON = function () {
                return "?" + o(e);
              }),
              r
            );
          },
          map: function (t, e) {
            function r(r, n) {
              if (!s.Object(r)) return !1;
              if (s.Nil(r)) return !1;
              for (var o in r) {
                try {
                  e && p(e, o, n);
                } catch (i) {
                  throw _(i, o, "key");
                }
                try {
                  var a = r[o];
                  p(t, a, n);
                } catch (i) {
                  throw _(i, o);
                }
              }
              return !0;
            }
            return (
              (t = u(t)),
              e && (e = u(e)),
              (r.toJSON = e
                ? function () {
                    return "{" + o(e) + ": " + o(t) + "}";
                  }
                : function () {
                    return "{" + o(t) + "}";
                  }),
              r
            );
          },
          object: function (t) {
            var e = {};
            for (var r in t) e[r] = u(t[r]);
            function n(t, r) {
              if (!s.Object(t)) return !1;
              if (s.Nil(t)) return !1;
              var n;
              try {
                for (n in e) {
                  var o = e[n],
                    a = t[n];
                  p(o, a, r);
                }
              } catch (c) {
                throw _(c, n);
              }
              if (r) for (n in t) if (!e[n]) throw new i(void 0, n);
              return !0;
            }
            return (
              (n.toJSON = function () {
                return o(e);
              }),
              n
            );
          },
          anyOf: function () {
            var t = [].slice.call(arguments).map(u);
            function e(e, r) {
              return t.some(function (t) {
                try {
                  return p(t, e, r);
                } catch (n) {
                  return !1;
                }
              });
            }
            return (
              (e.toJSON = function () {
                return t.map(o).join("|");
              }),
              e
            );
          },
          allOf: function () {
            var t = [].slice.call(arguments).map(u);
            function e(e, r) {
              return t.every(function (t) {
                try {
                  return p(t, e, r);
                } catch (n) {
                  return !1;
                }
              });
            }
            return (
              (e.toJSON = function () {
                return t.map(o).join(" & ");
              }),
              e
            );
          },
          quacksLike: function (t) {
            function e(e) {
              return t === c(e);
            }
            return (
              (e.toJSON = function () {
                return t;
              }),
              e
            );
          },
          tuple: function () {
            var t = [].slice.call(arguments).map(u);
            function e(e, r) {
              return (
                !s.Nil(e) &&
                !s.Nil(e.length) &&
                (!r || e.length === t.length) &&
                t.every(function (t, n) {
                  try {
                    return p(t, e[n], r);
                  } catch (s) {
                    throw _(s, n);
                  }
                })
              );
            }
            return (
              (e.toJSON = function () {
                return "(" + t.map(o).join(", ") + ")";
              }),
              e
            );
          },
          value: function (t) {
            function e(e) {
              return e === t;
            }
            return (
              (e.toJSON = function () {
                return t;
              }),
              e
            );
          },
        };
      function u(t) {
        if (s.String(t))
          return "?" === t[0] ? h.maybe(t.slice(1)) : s[t] || h.quacksLike(t);
        if (t && s.Object(t)) {
          if (s.Array(t)) {
            if (1 !== t.length)
              throw new TypeError(
                "Expected compile() parameter of type Array of length 1",
              );
            return h.arrayOf(t[0]);
          }
          return h.object(t);
        }
        return s.Function(t) ? t : h.value(t);
      }
      function p(t, e, r, n) {
        if (s.Function(t)) {
          if (t(e, r)) return !0;
          throw new a(n || t, e);
        }
        return p(u(t), e, r);
      }
      for (var l in ((h.oneOf = h.anyOf), s)) p[l] = s[l];
      for (l in h) p[l] = h[l];
      var y = r(2954);
      for (l in y) p[l] = y[l];
      ((p.compile = u),
        (p.TfTypeError = a),
        (p.TfPropertyTypeError = i),
        (t.exports = p));
    },
    2791: function (t, e, r) {
      "use strict";
      (function (t) {
        var n = e;
        function s(t, e, r) {
          for (var n = Object.keys(e), s = 0; s < n.length; ++s)
            (void 0 !== t[n[s]] && r) || (t[n[s]] = e[n[s]]);
          return t;
        }
        function o(t) {
          function e(t, r) {
            if (!(this instanceof e)) return new e(t, r);
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
              r && s(this, r));
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
        ((n.asPromise = r(3021)),
          (n.base64 = r(3022)),
          (n.EventEmitter = r(3023)),
          (n.float = r(3024)),
          (n.inquire = r(3025)),
          (n.utf8 = r(3026)),
          (n.pool = r(3027)),
          (n.LongBits = r(3095)),
          (n.isNode = Boolean(
            "undefined" !== typeof t &&
            t &&
            t.process &&
            t.process.versions &&
            t.process.versions.node,
          )),
          (n.global =
            (n.isNode && t) ||
            ("undefined" !== typeof window && window) ||
            ("undefined" !== typeof self && self) ||
            this),
          (n.emptyArray = Object.freeze ? Object.freeze([]) : []),
          (n.emptyObject = Object.freeze ? Object.freeze({}) : {}),
          (n.isInteger =
            Number.isInteger ||
            function (t) {
              return (
                "number" === typeof t && isFinite(t) && Math.floor(t) === t
              );
            }),
          (n.isString = function (t) {
            return "string" === typeof t || t instanceof String;
          }),
          (n.isObject = function (t) {
            return t && "object" === typeof t;
          }),
          (n.isset = n.isSet =
            function (t, e) {
              var r = t[e];
              return (
                !(null == r || !t.hasOwnProperty(e)) &&
                ("object" !== typeof r ||
                  (Array.isArray(r) ? r.length : Object.keys(r).length) > 0)
              );
            }),
          (n.Buffer = (function () {
            try {
              var t = n.inquire("buffer").Buffer;
              return t.prototype.utf8Write ? t : null;
            } catch (e) {
              return null;
            }
          })()),
          (n._Buffer_from = null),
          (n._Buffer_allocUnsafe = null),
          (n.newBuffer = function (t) {
            return "number" === typeof t
              ? n.Buffer
                ? n._Buffer_allocUnsafe(t)
                : new n.Array(t)
              : n.Buffer
                ? n._Buffer_from(t)
                : "undefined" === typeof Uint8Array
                  ? t
                  : new Uint8Array(t);
          }),
          (n.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array),
          (n.Long =
            (n.global.dcodeIO && n.global.dcodeIO.Long) ||
            n.global.Long ||
            n.inquire("long")),
          (n.key2Re = /^true|false|0|1$/),
          (n.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
          (n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
          (n.longToHash = function (t) {
            return t ? n.LongBits.from(t).toHash() : n.LongBits.zeroHash;
          }),
          (n.longFromHash = function (t, e) {
            var r = n.LongBits.fromHash(t);
            return n.Long
              ? n.Long.fromBits(r.lo, r.hi, e)
              : r.toNumber(Boolean(e));
          }),
          (n.merge = s),
          (n.lcFirst = function (t) {
            return t.charAt(0).toLowerCase() + t.substring(1);
          }),
          (n.newError = o),
          (n.ProtocolError = o("ProtocolError")),
          (n.oneOfGetter = function (t) {
            for (var e = {}, r = 0; r < t.length; ++r) e[t[r]] = 1;
            return function () {
              for (var t = Object.keys(this), r = t.length - 1; r > -1; --r)
                if (
                  1 === e[t[r]] &&
                  void 0 !== this[t[r]] &&
                  null !== this[t[r]]
                )
                  return t[r];
            };
          }),
          (n.oneOfSetter = function (t) {
            return function (e) {
              for (var r = 0; r < t.length; ++r)
                t[r] !== e && delete this[t[r]];
            };
          }),
          (n.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0,
          }),
          (n._configure = function () {
            var t = n.Buffer;
            t
              ? ((n._Buffer_from =
                  (t.from !== Uint8Array.from && t.from) ||
                  function (e, r) {
                    return new t(e, r);
                  }),
                (n._Buffer_allocUnsafe =
                  t.allocUnsafe ||
                  function (e) {
                    return new t(e);
                  }))
              : (n._Buffer_from = n._Buffer_allocUnsafe = null);
          }));
      }).call(this, r(13));
    },
    2813: function (t, e) {
      var r = {
        Array: function (t) {
          return null !== t && void 0 !== t && t.constructor === Array;
        },
        Boolean: function (t) {
          return "boolean" === typeof t;
        },
        Function: function (t) {
          return "function" === typeof t;
        },
        Nil: function (t) {
          return void 0 === t || null === t;
        },
        Number: function (t) {
          return "number" === typeof t;
        },
        Object: function (t) {
          return "object" === typeof t;
        },
        String: function (t) {
          return "string" === typeof t;
        },
        "": function () {
          return !0;
        },
      };
      for (var n in ((r.Null = r.Nil), r))
        r[n].toJSON = function (t) {
          return t;
        }.bind(null, n);
      t.exports = r;
    },
    2819: function (t, e, r) {
      (function (e) {
        const n = r(49),
          s = r(795).ec,
          o = new s("secp256k1"),
          a = r(3104),
          i = e.alloc(32, 0),
          _ = e.from(
            "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
            "hex",
          ),
          c = e.from(
            "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
            "hex",
          ),
          h = o.curve.n,
          u = h.shrn(1),
          p = o.curve.g,
          l = "Expected Private",
          y = "Expected Point",
          f = "Expected Tweak",
          d = "Expected Hash",
          v = "Expected Signature",
          g = "Expected Extra Data (32 bytes)";
        function b(t) {
          return e.isBuffer(t) && 32 === t.length;
        }
        function m(t) {
          return !!b(t) && t.compare(_) < 0;
        }
        function w(t) {
          if (!e.isBuffer(t)) return !1;
          if (t.length < 33) return !1;
          const r = t[0],
            n = t.slice(1, 33);
          if (0 === n.compare(i)) return !1;
          if (n.compare(c) >= 0) return !1;
          if ((2 === r || 3 === r) && 33 === t.length) {
            try {
              Y(t);
            } catch (o) {
              return !1;
            }
            return !0;
          }
          const s = t.slice(33);
          return (
            0 !== s.compare(i) &&
            !(s.compare(c) >= 0) &&
            4 === r &&
            65 === t.length
          );
        }
        function E(t) {
          return 4 !== t[0];
        }
        function x(t) {
          return !!w(t) && E(t);
        }
        function S(t) {
          return !!b(t) && t.compare(i) > 0 && t.compare(_) < 0;
        }
        function k(t) {
          const r = t.slice(0, 32),
            n = t.slice(32, 64);
          return (
            e.isBuffer(t) &&
            64 === t.length &&
            r.compare(_) < 0 &&
            n.compare(_) < 0
          );
        }
        function T(t, e) {
          return void 0 === t && void 0 !== e ? E(e) : void 0 === t || t;
        }
        function B(t) {
          return new n(t);
        }
        function A(t) {
          return t.toArrayLike(e, "be", 32);
        }
        function Y(t) {
          return o.curve.decodePoint(t);
        }
        function N(t, r) {
          return e.from(t._encode(r));
        }
        function I(t, e, r) {
          if (!w(t)) throw new TypeError(y);
          if (!w(e)) throw new TypeError(y);
          const n = Y(t),
            s = Y(e),
            o = n.add(s);
          if (o.isInfinity()) return null;
          const a = T(r, t);
          return N(o, a);
        }
        function O(t, e, r) {
          if (!w(t)) throw new TypeError(y);
          if (!m(e)) throw new TypeError(f);
          const n = T(r, t),
            s = Y(t);
          if (0 === e.compare(i)) return N(s, n);
          const o = B(e),
            a = p.mul(o),
            _ = s.add(a);
          return _.isInfinity() ? null : N(_, n);
        }
        function L(t, e) {
          if (!w(t)) throw new TypeError(y);
          const r = Y(t);
          if (r.isInfinity()) throw new TypeError(y);
          const n = T(e, t);
          return N(r, n);
        }
        function M(t, e) {
          if (!S(t)) throw new TypeError(l);
          const r = B(t),
            n = p.mul(r);
          if (n.isInfinity()) return null;
          const s = T(e);
          return N(n, s);
        }
        function U(t, e, r) {
          if (!w(t)) throw new TypeError(y);
          if (!m(e)) throw new TypeError(f);
          const n = T(r, t),
            s = Y(t),
            o = B(e),
            a = s.mul(o);
          return a.isInfinity() ? null : N(a, n);
        }
        function K(t, e) {
          if (!S(t)) throw new TypeError(l);
          if (!m(e)) throw new TypeError(f);
          const r = B(t),
            n = B(e),
            s = A(r.add(n).umod(h));
          return S(s) ? s : null;
        }
        function P(t, e) {
          if (!S(t)) throw new TypeError(l);
          if (!m(e)) throw new TypeError(f);
          const r = B(t),
            n = B(e),
            s = A(r.sub(n).umod(h));
          return S(s) ? s : null;
        }
        function R(t, e) {
          return D(t, e);
        }
        function C(t, e, r) {
          return D(t, e, r);
        }
        function D(t, r, n) {
          if (!b(t)) throw new TypeError(d);
          if (!S(r)) throw new TypeError(l);
          if (void 0 !== n && !b(n)) throw new TypeError(g);
          const s = B(r),
            o = B(t);
          let i, _;
          const c = function (t) {
            const e = B(t),
              r = p.mul(e);
            return (
              !r.isInfinity() &&
              ((i = r.x.umod(h)),
              0 !== i.isZero() &&
                ((_ = e
                  .invm(h)
                  .mul(o.add(s.mul(i)))
                  .umod(h)),
                0 !== _.isZero()))
            );
          };
          (a(t, r, c, S, n), _.cmp(u) > 0 && (_ = h.sub(_)));
          const y = e.allocUnsafe(64);
          return (A(i).copy(y, 0), A(_).copy(y, 32), y);
        }
        function F(t, e, r, n) {
          if (!b(t)) throw new TypeError(d);
          if (!w(e)) throw new TypeError(y);
          if (!k(r)) throw new TypeError(v);
          const s = Y(e),
            o = B(r.slice(0, 32)),
            a = B(r.slice(32, 64));
          if (n && a.cmp(u) > 0) return !1;
          if (o.gtn(0) <= 0) return !1;
          if (a.gtn(0) <= 0) return !1;
          const i = B(t),
            _ = a.invm(h),
            c = i.mul(_).umod(h),
            l = o.mul(_).umod(h),
            f = p.mulAdd(c, s, l);
          if (f.isInfinity()) return !1;
          const g = f.x,
            m = g.umod(h);
          return m.eq(o);
        }
        t.exports = {
          isPoint: w,
          isPointCompressed: x,
          isPrivate: S,
          pointAdd: I,
          pointAddScalar: O,
          pointCompress: L,
          pointFromScalar: M,
          pointMultiply: U,
          privateAdd: K,
          privateSub: P,
          sign: R,
          signWithEntropy: C,
          verify: F,
        };
      }).call(this, r(2).Buffer);
    },
    2838: function (t, e, r) {
      (function (e) {
        var n = r(2792);
        function s(t, e) {
          if (void 0 !== e && t[0] !== e)
            throw new Error("Invalid network version");
          if (33 === t.length)
            return {
              version: t[0],
              privateKey: t.slice(1, 33),
              compressed: !1,
            };
          if (34 !== t.length) throw new Error("Invalid WIF length");
          if (1 !== t[33]) throw new Error("Invalid compression flag");
          return { version: t[0], privateKey: t.slice(1, 33), compressed: !0 };
        }
        function o(t, r, n) {
          var s = new e(n ? 34 : 33);
          return (s.writeUInt8(t, 0), r.copy(s, 1), n && (s[33] = 1), s);
        }
        function a(t, e) {
          return s(n.decode(t), e);
        }
        function i(t, e, r) {
          return "number" === typeof t
            ? n.encode(o(t, e, r))
            : n.encode(o(t.version, t.privateKey, t.compressed));
        }
        t.exports = { decode: a, decodeRaw: s, encode: i, encodeRaw: o };
      }).call(this, r(2).Buffer);
    },
    2848: function (t, e, r) {
      var n = r(2813);
      function s(t) {
        return t.name || t.toString().match(/function (.*?)\s*\(/)[1];
      }
      function o(t) {
        return n.Nil(t) ? "" : s(t.constructor);
      }
      function a(t) {
        return n.Function(t)
          ? ""
          : n.String(t)
            ? JSON.stringify(t)
            : t && n.Object(t)
              ? ""
              : t;
      }
      function i(t, e) {
        Error.captureStackTrace && Error.captureStackTrace(t, e);
      }
      function _(t) {
        return n.Function(t)
          ? t.toJSON
            ? t.toJSON()
            : s(t)
          : n.Array(t)
            ? "Array"
            : t && n.Object(t)
              ? "Object"
              : void 0 !== t
                ? t
                : "";
      }
      function c(t, e, r) {
        var n = a(e);
        return (
          "Expected " +
          _(t) +
          ", got" +
          ("" !== r ? " " + r : "") +
          ("" !== n ? " " + n : "")
        );
      }
      function h(t, e, r) {
        ((r = r || o(e)),
          (this.message = c(t, e, r)),
          i(this, h),
          (this.__type = t),
          (this.__value = e),
          (this.__valueTypeName = r));
      }
      function u(t, e, r, n, s) {
        var o = '" of type ';
        return (
          "key" === e && (o = '" with key type '),
          c('property "' + _(r) + o + _(t), n, s)
        );
      }
      function p(t, e, r, n, s) {
        (t
          ? ((s = s || o(n)), (this.message = u(t, r, e, n, s)))
          : (this.message = 'Unexpected property "' + e + '"'),
          i(this, h),
          (this.__label = r),
          (this.__property = e),
          (this.__type = t),
          (this.__value = n),
          (this.__valueTypeName = s));
      }
      function l(t, e) {
        return new h(t, {}, e);
      }
      function y(t, e, r) {
        return (
          t instanceof p
            ? ((e = e + "." + t.__property),
              (t = new p(t.__type, e, t.__label, t.__value, t.__valueTypeName)))
            : t instanceof h &&
              (t = new p(t.__type, e, r, t.__value, t.__valueTypeName)),
          i(t),
          t
        );
      }
      ((h.prototype = Object.create(Error.prototype)),
        (h.prototype.constructor = h),
        (p.prototype = Object.create(Error.prototype)),
        (p.prototype.constructor = h),
        (t.exports = {
          TfTypeError: h,
          TfPropertyTypeError: p,
          tfCustomError: l,
          tfSubError: y,
          tfJSON: _,
          getValueTypeName: o,
        }));
    },
    2864: function (t, e, r) {
      "use strict";
      var n = r(46).Buffer,
        s = 9007199254740991;
      function o(t) {
        if (t < 0 || t > s || t % 1 !== 0)
          throw new RangeError("value out of range");
      }
      function a(t, e, r) {
        if ((o(t), e || (e = n.allocUnsafe(_(t))), !n.isBuffer(e)))
          throw new TypeError("buffer must be a Buffer instance");
        return (
          r || (r = 0),
          t < 253
            ? (e.writeUInt8(t, r), (a.bytes = 1))
            : t <= 65535
              ? (e.writeUInt8(253, r), e.writeUInt16LE(t, r + 1), (a.bytes = 3))
              : t <= 4294967295
                ? (e.writeUInt8(254, r),
                  e.writeUInt32LE(t, r + 1),
                  (a.bytes = 5))
                : (e.writeUInt8(255, r),
                  e.writeUInt32LE(t >>> 0, r + 1),
                  e.writeUInt32LE((t / 4294967296) | 0, r + 5),
                  (a.bytes = 9)),
          e
        );
      }
      function i(t, e) {
        if (!n.isBuffer(t))
          throw new TypeError("buffer must be a Buffer instance");
        e || (e = 0);
        var r = t.readUInt8(e);
        if (r < 253) return ((i.bytes = 1), r);
        if (253 === r) return ((i.bytes = 3), t.readUInt16LE(e + 1));
        if (254 === r) return ((i.bytes = 5), t.readUInt32LE(e + 1));
        i.bytes = 9;
        var s = t.readUInt32LE(e + 1),
          a = t.readUInt32LE(e + 5),
          _ = 4294967296 * a + s;
        return (o(_), _);
      }
      function _(t) {
        return (o(t), t < 253 ? 1 : t <= 65535 ? 3 : t <= 4294967295 ? 5 : 9);
      }
      t.exports = { encode: a, decode: i, encodingLength: _ };
    },
    2951: function (t, e, r) {
      "use strict";
      t.exports = u;
      var n,
        s = r(2791),
        o = s.LongBits,
        a = s.base64,
        i = s.utf8;
      function _(t, e, r) {
        ((this.fn = t), (this.len = e), (this.next = void 0), (this.val = r));
      }
      function c() {}
      function h(t) {
        ((this.head = t.head),
          (this.tail = t.tail),
          (this.len = t.len),
          (this.next = t.states));
      }
      function u() {
        ((this.len = 0),
          (this.head = new _(c, 0, 0)),
          (this.tail = this.head),
          (this.states = null));
      }
      var p = function () {
        return s.Buffer
          ? function () {
              return (u.create = function () {
                return new n();
              })();
            }
          : function () {
              return new u();
            };
      };
      function l(t, e, r) {
        e[r] = 255 & t;
      }
      function y(t, e, r) {
        while (t > 127) ((e[r++] = (127 & t) | 128), (t >>>= 7));
        e[r] = t;
      }
      function f(t, e) {
        ((this.len = t), (this.next = void 0), (this.val = e));
      }
      function d(t, e, r) {
        while (t.hi)
          ((e[r++] = (127 & t.lo) | 128),
            (t.lo = ((t.lo >>> 7) | (t.hi << 25)) >>> 0),
            (t.hi >>>= 7));
        while (t.lo > 127) ((e[r++] = (127 & t.lo) | 128), (t.lo = t.lo >>> 7));
        e[r++] = t.lo;
      }
      function v(t, e, r) {
        ((e[r] = 255 & t),
          (e[r + 1] = (t >>> 8) & 255),
          (e[r + 2] = (t >>> 16) & 255),
          (e[r + 3] = t >>> 24));
      }
      ((u.create = p()),
        (u.alloc = function (t) {
          return new s.Array(t);
        }),
        s.Array !== Array &&
          (u.alloc = s.pool(u.alloc, s.Array.prototype.subarray)),
        (u.prototype._push = function (t, e, r) {
          return (
            (this.tail = this.tail.next = new _(t, e, r)),
            (this.len += e),
            this
          );
        }),
        (f.prototype = Object.create(_.prototype)),
        (f.prototype.fn = y),
        (u.prototype.uint32 = function (t) {
          return (
            (this.len += (this.tail = this.tail.next =
              new f(
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
        (u.prototype.int32 = function (t) {
          return t < 0 ? this._push(d, 10, o.fromNumber(t)) : this.uint32(t);
        }),
        (u.prototype.sint32 = function (t) {
          return this.uint32(((t << 1) ^ (t >> 31)) >>> 0);
        }),
        (u.prototype.uint64 = function (t) {
          var e = o.from(t);
          return this._push(d, e.length(), e);
        }),
        (u.prototype.int64 = u.prototype.uint64),
        (u.prototype.sint64 = function (t) {
          var e = o.from(t).zzEncode();
          return this._push(d, e.length(), e);
        }),
        (u.prototype.bool = function (t) {
          return this._push(l, 1, t ? 1 : 0);
        }),
        (u.prototype.fixed32 = function (t) {
          return this._push(v, 4, t >>> 0);
        }),
        (u.prototype.sfixed32 = u.prototype.fixed32),
        (u.prototype.fixed64 = function (t) {
          var e = o.from(t);
          return this._push(v, 4, e.lo)._push(v, 4, e.hi);
        }),
        (u.prototype.sfixed64 = u.prototype.fixed64),
        (u.prototype.float = function (t) {
          return this._push(s.float.writeFloatLE, 4, t);
        }),
        (u.prototype.double = function (t) {
          return this._push(s.float.writeDoubleLE, 8, t);
        }));
      var g = s.Array.prototype.set
        ? function (t, e, r) {
            e.set(t, r);
          }
        : function (t, e, r) {
            for (var n = 0; n < t.length; ++n) e[r + n] = t[n];
          };
      ((u.prototype.bytes = function (t) {
        var e = t.length >>> 0;
        if (!e) return this._push(l, 1, 0);
        if (s.isString(t)) {
          var r = u.alloc((e = a.length(t)));
          (a.decode(t, r, 0), (t = r));
        }
        return this.uint32(e)._push(g, e, t);
      }),
        (u.prototype.string = function (t) {
          var e = i.length(t);
          return e ? this.uint32(e)._push(i.write, e, t) : this._push(l, 1, 0);
        }),
        (u.prototype.fork = function () {
          return (
            (this.states = new h(this)),
            (this.head = this.tail = new _(c, 0, 0)),
            (this.len = 0),
            this
          );
        }),
        (u.prototype.reset = function () {
          return (
            this.states
              ? ((this.head = this.states.head),
                (this.tail = this.states.tail),
                (this.len = this.states.len),
                (this.states = this.states.next))
              : ((this.head = this.tail = new _(c, 0, 0)), (this.len = 0)),
            this
          );
        }),
        (u.prototype.ldelim = function () {
          var t = this.head,
            e = this.tail,
            r = this.len;
          return (
            this.reset().uint32(r),
            r && ((this.tail.next = t.next), (this.tail = e), (this.len += r)),
            this
          );
        }),
        (u.prototype.finish = function () {
          var t = this.head.next,
            e = this.constructor.alloc(this.len),
            r = 0;
          while (t) (t.fn(t.val, e, r), (r += t.len), (t = t.next));
          return e;
        }),
        (u._configure = function (t) {
          ((n = t), (u.create = p()), n._configure());
        }));
    },
    2952: function (t, e, r) {
      "use strict";
      t.exports = _;
      var n,
        s = r(2791),
        o = s.LongBits,
        a = s.utf8;
      function i(t, e) {
        return RangeError(
          "index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len,
        );
      }
      function _(t) {
        ((this.buf = t), (this.pos = 0), (this.len = t.length));
      }
      var c =
          "undefined" !== typeof Uint8Array
            ? function (t) {
                if (t instanceof Uint8Array || Array.isArray(t))
                  return new _(t);
                throw Error("illegal buffer");
              }
            : function (t) {
                if (Array.isArray(t)) return new _(t);
                throw Error("illegal buffer");
              },
        h = function () {
          return s.Buffer
            ? function (t) {
                return (_.create = function (t) {
                  return s.Buffer.isBuffer(t) ? new n(t) : c(t);
                })(t);
              }
            : c;
        };
      function u() {
        var t = new o(0, 0),
          e = 0;
        if (!(this.len - this.pos > 4)) {
          for (; e < 3; ++e) {
            if (this.pos >= this.len) throw i(this);
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
            if (this.pos >= this.len) throw i(this);
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * e + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
        throw Error("invalid varint encoding");
      }
      function p(t, e) {
        return (
          (t[e - 4] | (t[e - 3] << 8) | (t[e - 2] << 16) | (t[e - 1] << 24)) >>>
          0
        );
      }
      function l() {
        if (this.pos + 8 > this.len) throw i(this, 8);
        return new o(
          p(this.buf, (this.pos += 4)),
          p(this.buf, (this.pos += 4)),
        );
      }
      ((_.create = h()),
        (_.prototype._slice =
          s.Array.prototype.subarray || s.Array.prototype.slice),
        (_.prototype.uint32 = (function () {
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
              throw ((this.pos = this.len), i(this, 10));
            return t;
          };
        })()),
        (_.prototype.int32 = function () {
          return 0 | this.uint32();
        }),
        (_.prototype.sint32 = function () {
          var t = this.uint32();
          return ((t >>> 1) ^ -(1 & t)) | 0;
        }),
        (_.prototype.bool = function () {
          return 0 !== this.uint32();
        }),
        (_.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) throw i(this, 4);
          return p(this.buf, (this.pos += 4));
        }),
        (_.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) throw i(this, 4);
          return 0 | p(this.buf, (this.pos += 4));
        }),
        (_.prototype.float = function () {
          if (this.pos + 4 > this.len) throw i(this, 4);
          var t = s.float.readFloatLE(this.buf, this.pos);
          return ((this.pos += 4), t);
        }),
        (_.prototype.double = function () {
          if (this.pos + 8 > this.len) throw i(this, 4);
          var t = s.float.readDoubleLE(this.buf, this.pos);
          return ((this.pos += 8), t);
        }),
        (_.prototype.bytes = function () {
          var t = this.uint32(),
            e = this.pos,
            r = this.pos + t;
          if (r > this.len) throw i(this, t);
          return (
            (this.pos += t),
            Array.isArray(this.buf)
              ? this.buf.slice(e, r)
              : e === r
                ? new this.buf.constructor(0)
                : this._slice.call(this.buf, e, r)
          );
        }),
        (_.prototype.string = function () {
          var t = this.bytes();
          return a.read(t, 0, t.length);
        }),
        (_.prototype.skip = function (t) {
          if ("number" === typeof t) {
            if (this.pos + t > this.len) throw i(this, t);
            this.pos += t;
          } else
            do {
              if (this.pos >= this.len) throw i(this);
            } while (128 & this.buf[this.pos++]);
          return this;
        }),
        (_.prototype.skipType = function (t) {
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
        (_._configure = function (t) {
          ((n = t), (_.create = h()), n._configure());
          var e = s.Long ? "toLong" : "toNumber";
          s.merge(_.prototype, {
            int64: function () {
              return u.call(this)[e](!1);
            },
            uint64: function () {
              return u.call(this)[e](!0);
            },
            sint64: function () {
              return u.call(this).zzDecode()[e](!1);
            },
            fixed64: function () {
              return l.call(this)[e](!0);
            },
            sfixed64: function () {
              return l.call(this)[e](!1);
            },
          });
        }));
    },
    2954: function (t, e, r) {
      (function (e) {
        var n = r(2813),
          s = r(2848);
        function o(t) {
          return e.isBuffer(t);
        }
        function a(t) {
          return "string" === typeof t && /^([0-9a-f]{2})+$/i.test(t);
        }
        function i(t, e) {
          var r = t.toJSON();
          function n(n) {
            if (!t(n)) return !1;
            if (n.length === e) return !0;
            throw s.tfCustomError(
              r + "(Length: " + e + ")",
              r + "(Length: " + n.length + ")",
            );
          }
          return (
            (n.toJSON = function () {
              return r;
            }),
            n
          );
        }
        var _ = i.bind(null, n.Array),
          c = i.bind(null, o),
          h = i.bind(null, a),
          u = i.bind(null, n.String);
        function p(t, e, r) {
          function s(n, s) {
            return r(n, s) && n > t && n < e;
          }
          return (
            (r = r || n.Number),
            (s.toJSON = function () {
              return `${r.toJSON()} between [${t}, ${e}]`;
            }),
            s
          );
        }
        var l = Math.pow(2, 53) - 1;
        function y(t) {
          return "number" === typeof t && isFinite(t);
        }
        function f(t) {
          return (t << 24) >> 24 === t;
        }
        function d(t) {
          return (t << 16) >> 16 === t;
        }
        function v(t) {
          return (0 | t) === t;
        }
        function g(t) {
          return (
            "number" === typeof t && t >= -l && t <= l && Math.floor(t) === t
          );
        }
        function b(t) {
          return (255 & t) === t;
        }
        function m(t) {
          return (65535 & t) === t;
        }
        function w(t) {
          return t >>> 0 === t;
        }
        function E(t) {
          return (
            "number" === typeof t && t >= 0 && t <= l && Math.floor(t) === t
          );
        }
        var x = {
          ArrayN: _,
          Buffer: o,
          BufferN: c,
          Finite: y,
          Hex: a,
          HexN: h,
          Int8: f,
          Int16: d,
          Int32: v,
          Int53: g,
          Range: p,
          StringN: u,
          UInt8: b,
          UInt16: m,
          UInt32: w,
          UInt53: E,
        };
        for (var S in x)
          x[S].toJSON = function (t) {
            return t;
          }.bind(null, S);
        t.exports = x;
      }).call(this, r(2).Buffer);
    },
    2955: function (t, e, r) {
      "use strict";
      var n =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                }),
              t(e, r)
            );
          };
          return function (e, r) {
            function n() {
              this.constructor = e;
            }
            (t(e, r),
              (e.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n())));
          };
        })();
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.NO_IL = e.NO = e.MemoryStream = e.Stream = void 0));
      var s = r(4417),
        o = r(4419),
        a = s.default(o.getPolyfill()),
        i = {};
      function _() {}
      function c(t) {
        for (var e = t.length, r = Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r;
      }
      function h(t, e) {
        return function (r) {
          return t(r) && e(r);
        };
      }
      function u(t, e, r) {
        try {
          return t.f(e);
        } catch (n) {
          return (r._e(n), i);
        }
      }
      e.NO = i;
      var p = { _n: _, _e: _, _c: _ };
      function l(t) {
        ((t._start = function (t) {
          ((t.next = t._n),
            (t.error = t._e),
            (t.complete = t._c),
            this.start(t));
        }),
          (t._stop = t.stop));
      }
      e.NO_IL = p;
      var y = (function () {
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
        f = (function () {
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
        d = (function () {
          function t(t) {
            ((this.type = "fromObservable"),
              (this.ins = t),
              (this.active = !1));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t),
                (this.active = !0),
                (this._sub = this.ins.subscribe(new f(t))),
                this.active || this._sub.unsubscribe());
            }),
            (t.prototype._stop = function () {
              (this._sub && this._sub.unsubscribe(), (this.active = !1));
            }),
            t
          );
        })(),
        v = (function () {
          function t(t) {
            ((this.type = "merge"),
              (this.insArr = t),
              (this.out = i),
              (this.ac = 0));
          }
          return (
            (t.prototype._start = function (t) {
              this.out = t;
              var e = this.insArr,
                r = e.length;
              this.ac = r;
              for (var n = 0; n < r; n++) e[n]._add(this);
            }),
            (t.prototype._stop = function () {
              for (var t = this.insArr, e = t.length, r = 0; r < e; r++)
                t[r]._remove(this);
              this.out = i;
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              e !== i && e._n(t);
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== i && e._e(t);
            }),
            (t.prototype._c = function () {
              if (--this.ac <= 0) {
                var t = this.out;
                if (t === i) return;
                t._c();
              }
            }),
            t
          );
        })(),
        g = (function () {
          function t(t, e, r) {
            ((this.i = t), (this.out = e), (this.p = r), r.ils.push(this));
          }
          return (
            (t.prototype._n = function (t) {
              var e = this.p,
                r = this.out;
              if (r !== i && e.up(t, this.i)) {
                var n = c(e.vals);
                r._n(n);
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== i && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.p;
              t.out !== i && 0 === --t.Nc && t.out._c();
            }),
            t
          );
        })(),
        b = (function () {
          function t(t) {
            ((this.type = "combine"),
              (this.insArr = t),
              (this.out = i),
              (this.ils = []),
              (this.Nc = this.Nn = 0),
              (this.vals = []));
          }
          return (
            (t.prototype.up = function (t, e) {
              var r = this.vals[e],
                n = this.Nn ? (r === i ? --this.Nn : this.Nn) : 0;
              return ((this.vals[e] = t), 0 === n);
            }),
            (t.prototype._start = function (t) {
              this.out = t;
              var e = this.insArr,
                r = (this.Nc = this.Nn = e.length),
                n = (this.vals = new Array(r));
              if (0 === r) (t._n([]), t._c());
              else
                for (var s = 0; s < r; s++)
                  ((n[s] = i), e[s]._add(new g(s, t, this)));
            }),
            (t.prototype._stop = function () {
              for (
                var t = this.insArr, e = t.length, r = this.ils, n = 0;
                n < e;
                n++
              )
                t[n]._remove(r[n]);
              ((this.out = i), (this.ils = []), (this.vals = []));
            }),
            t
          );
        })(),
        m = (function () {
          function t(t) {
            ((this.type = "fromArray"), (this.a = t));
          }
          return (
            (t.prototype._start = function (t) {
              for (var e = this.a, r = 0, n = e.length; r < n; r++) t._n(e[r]);
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
                    function (r) {
                      e.on && (t._n(r), t._c());
                    },
                    function (e) {
                      t._e(e);
                    },
                  )
                  .then(_, function (t) {
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
        E = (function () {
          function t(t) {
            ((this.type = "periodic"),
              (this.period = t),
              (this.intervalID = -1),
              (this.i = 0));
          }
          return (
            (t.prototype._start = function (t) {
              var e = this;
              function r() {
                t._n(e.i++);
              }
              this.intervalID = setInterval(r, this.period);
            }),
            (t.prototype._stop = function () {
              (-1 !== this.intervalID && clearInterval(this.intervalID),
                (this.intervalID = -1),
                (this.i = 0));
            }),
            t
          );
        })(),
        x = (function () {
          function t(t, e) {
            ((this.type = "debug"),
              (this.ins = t),
              (this.out = i),
              (this.s = _),
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
              (this.ins._remove(this), (this.out = i));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              if (e !== i) {
                var r = this.s,
                  n = this.l;
                if (r !== _)
                  try {
                    r(t);
                  } catch (s) {
                    e._e(s);
                  }
                else n ? console.log(n + ":", t) : console.log(t);
                e._n(t);
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== i && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== i && t._c();
            }),
            t
          );
        })(),
        S = (function () {
          function t(t, e) {
            ((this.type = "drop"),
              (this.ins = e),
              (this.out = i),
              (this.max = t),
              (this.dropped = 0));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), (this.dropped = 0), this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = i));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              e !== i && this.dropped++ >= this.max && e._n(t);
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== i && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== i && t._c();
            }),
            t
          );
        })(),
        k = (function () {
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
        T = (function () {
          function t(t, e) {
            ((this.type = "endWhen"),
              (this.ins = e),
              (this.out = i),
              (this.o = t),
              (this.oil = p));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t),
                this.o._add((this.oil = new k(t, this))),
                this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this),
                this.o._remove(this.oil),
                (this.out = i),
                (this.oil = p));
            }),
            (t.prototype.end = function () {
              var t = this.out;
              t !== i && t._c();
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              e !== i && e._n(t);
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== i && e._e(t);
            }),
            (t.prototype._c = function () {
              this.end();
            }),
            t
          );
        })(),
        B = (function () {
          function t(t, e) {
            ((this.type = "filter"),
              (this.ins = e),
              (this.out = i),
              (this.f = t));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = i));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              if (e !== i) {
                var r = u(this, t, e);
                r !== i && r && e._n(t);
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== i && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== i && t._c();
            }),
            t
          );
        })(),
        A = (function () {
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
              ((this.op.inner = i), this.op.less());
            }),
            t
          );
        })(),
        Y = (function () {
          function t(t) {
            ((this.type = "flatten"),
              (this.ins = t),
              (this.out = i),
              (this.open = !0),
              (this.inner = i),
              (this.il = p));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t),
                (this.open = !0),
                (this.inner = i),
                (this.il = p),
                this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this),
                this.inner !== i && this.inner._remove(this.il),
                (this.out = i),
                (this.open = !0),
                (this.inner = i),
                (this.il = p));
            }),
            (t.prototype.less = function () {
              var t = this.out;
              t !== i && (this.open || this.inner !== i || t._c());
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              if (e !== i) {
                var r = this,
                  n = r.inner,
                  s = r.il;
                (n !== i && s !== p && n._remove(s),
                  (this.inner = t)._add((this.il = new A(e, this))));
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== i && e._e(t);
            }),
            (t.prototype._c = function () {
              ((this.open = !1), this.less());
            }),
            t
          );
        })(),
        N = (function () {
          function t(t, e, r) {
            var n = this;
            ((this.type = "fold"),
              (this.ins = r),
              (this.out = i),
              (this.f = function (e) {
                return t(n.acc, e);
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
              (this.ins._remove(this), (this.out = i), (this.acc = this.seed));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              if (e !== i) {
                var r = u(this, t, e);
                r !== i && e._n((this.acc = r));
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== i && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== i && t._c();
            }),
            t
          );
        })(),
        I = (function () {
          function t(t) {
            ((this.type = "last"),
              (this.ins = t),
              (this.out = i),
              (this.has = !1),
              (this.val = i));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), (this.has = !1), this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = i), (this.val = i));
            }),
            (t.prototype._n = function (t) {
              ((this.has = !0), (this.val = t));
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== i && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== i &&
                (this.has
                  ? (t._n(this.val), t._c())
                  : t._e(
                      new Error("last() failed because input stream completed"),
                    ));
            }),
            t
          );
        })(),
        O = (function () {
          function t(t, e) {
            ((this.type = "map"), (this.ins = e), (this.out = i), (this.f = t));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = i));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              if (e !== i) {
                var r = u(this, t, e);
                r !== i && e._n(r);
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== i && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== i && t._c();
            }),
            t
          );
        })(),
        L = (function () {
          function t(t) {
            ((this.type = "remember"), (this.ins = t), (this.out = i));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), this.ins._add(t));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this.out), (this.out = i));
            }),
            t
          );
        })(),
        M = (function () {
          function t(t, e) {
            ((this.type = "replaceError"),
              (this.ins = e),
              (this.out = i),
              (this.f = t));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), this.ins._add(this));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this), (this.out = i));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              e !== i && e._n(t);
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              if (e !== i)
                try {
                  (this.ins._remove(this), (this.ins = this.f(t))._add(this));
                } catch (r) {
                  e._e(r);
                }
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== i && t._c();
            }),
            t
          );
        })(),
        U = (function () {
          function t(t, e) {
            ((this.type = "startWith"),
              (this.ins = t),
              (this.out = i),
              (this.val = e));
          }
          return (
            (t.prototype._start = function (t) {
              ((this.out = t), this.out._n(this.val), this.ins._add(t));
            }),
            (t.prototype._stop = function () {
              (this.ins._remove(this.out), (this.out = i));
            }),
            t
          );
        })(),
        K = (function () {
          function t(t, e) {
            ((this.type = "take"),
              (this.ins = e),
              (this.out = i),
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
              (this.ins._remove(this), (this.out = i));
            }),
            (t.prototype._n = function (t) {
              var e = this.out;
              if (e !== i) {
                var r = ++this.taken;
                r < this.max ? e._n(t) : r === this.max && (e._n(t), e._c());
              }
            }),
            (t.prototype._e = function (t) {
              var e = this.out;
              e !== i && e._e(t);
            }),
            (t.prototype._c = function () {
              var t = this.out;
              t !== i && t._c();
            }),
            t
          );
        })(),
        P = (function () {
          function t(t) {
            ((this._prod = t || i),
              (this._ils = []),
              (this._stopID = i),
              (this._dl = i),
              (this._d = !1),
              (this._target = null),
              (this._err = i));
          }
          return (
            (t.prototype._n = function (t) {
              var e = this._ils,
                r = e.length;
              if ((this._d && this._dl._n(t), 1 == r)) e[0]._n(t);
              else {
                if (0 == r) return;
                for (var n = c(e), s = 0; s < r; s++) n[s]._n(t);
              }
            }),
            (t.prototype._e = function (t) {
              if (this._err === i) {
                this._err = t;
                var e = this._ils,
                  r = e.length;
                if ((this._x(), this._d && this._dl._e(t), 1 == r)) e[0]._e(t);
                else {
                  if (0 == r) return;
                  for (var n = c(e), s = 0; s < r; s++) n[s]._e(t);
                }
                if (!this._d && 0 == r) throw this._err;
              }
            }),
            (t.prototype._c = function () {
              var t = this._ils,
                e = t.length;
              if ((this._x(), this._d && this._dl._c(), 1 == e)) t[0]._c();
              else {
                if (0 == e) return;
                for (var r = c(t), n = 0; n < e; n++) r[n]._c();
              }
            }),
            (t.prototype._x = function () {
              0 !== this._ils.length &&
                (this._prod !== i && this._prod._stop(),
                (this._err = i),
                (this._ils = []));
            }),
            (t.prototype._stopNow = function () {
              (this._prod._stop(), (this._err = i), (this._stopID = i));
            }),
            (t.prototype._add = function (t) {
              var e = this._target;
              if (e) return e._add(t);
              var r = this._ils;
              if ((r.push(t), !(r.length > 1)))
                if (this._stopID !== i)
                  (clearTimeout(this._stopID), (this._stopID = i));
                else {
                  var n = this._prod;
                  n !== i && n._start(this);
                }
            }),
            (t.prototype._remove = function (t) {
              var e = this,
                r = this._target;
              if (r) return r._remove(t);
              var n = this._ils,
                s = n.indexOf(t);
              s > -1 &&
                (n.splice(s, 1),
                this._prod !== i && n.length <= 0
                  ? ((this._err = i),
                    (this._stopID = setTimeout(function () {
                      return e._stopNow();
                    })))
                  : 1 === n.length && this._pruneCycles());
            }),
            (t.prototype._pruneCycles = function () {
              this._hasNoSinks(this, []) && this._remove(this._ils[0]);
            }),
            (t.prototype._hasNoSinks = function (t, e) {
              if (-1 !== e.indexOf(t)) return !0;
              if (t.out === this) return !0;
              if (t.out && t.out !== i)
                return this._hasNoSinks(t.out, e.concat(t));
              if (t._ils) {
                for (var r = 0, n = t._ils.length; r < n; r++)
                  if (!this._hasNoSinks(t._ils[r], e.concat(t))) return !1;
                return !0;
              }
              return !1;
            }),
            (t.prototype.ctor = function () {
              return this instanceof R ? R : t;
            }),
            (t.prototype.addListener = function (t) {
              ((t._n = t.next || _),
                (t._e = t.error || _),
                (t._c = t.complete || _),
                this._add(t));
            }),
            (t.prototype.removeListener = function (t) {
              this._remove(t);
            }),
            (t.prototype.subscribe = function (t) {
              return (this.addListener(t), new y(this, t));
            }),
            (t.prototype[a] = function () {
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
                l(e);
              }
              return new t(e);
            }),
            (t.createWithMemory = function (t) {
              return (t && l(t), new R(t));
            }),
            (t.never = function () {
              return new t({ _start: _, _stop: _ });
            }),
            (t.empty = function () {
              return new t({
                _start: function (t) {
                  t._c();
                },
                _stop: _,
              });
            }),
            (t.throw = function (e) {
              return new t({
                _start: function (t) {
                  t._e(e);
                },
                _stop: _,
              });
            }),
            (t.from = function (e) {
              if ("function" === typeof e[a]) return t.fromObservable(e);
              if ("function" === typeof e.then) return t.fromPromise(e);
              if (Array.isArray(e)) return t.fromArray(e);
              throw new TypeError(
                "Type of input to from() must be an Array, Promise, or Observable",
              );
            }),
            (t.of = function () {
              for (var e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              return t.fromArray(e);
            }),
            (t.fromArray = function (e) {
              return new t(new m(e));
            }),
            (t.fromPromise = function (e) {
              return new t(new w(e));
            }),
            (t.fromObservable = function (e) {
              if (void 0 !== e.endWhen) return e;
              var r = "function" === typeof e[a] ? e[a]() : e;
              return new t(new d(r));
            }),
            (t.periodic = function (e) {
              return new t(new E(e));
            }),
            (t.prototype._map = function (t) {
              return new (this.ctor())(new O(t, this));
            }),
            (t.prototype.map = function (t) {
              return this._map(t);
            }),
            (t.prototype.mapTo = function (t) {
              var e = this.map(function () {
                  return t;
                }),
                r = e._prod;
              return ((r.type = "mapTo"), e);
            }),
            (t.prototype.filter = function (e) {
              var r = this._prod;
              return new t(
                r instanceof B ? new B(h(r.f, e), r.ins) : new B(e, this),
              );
            }),
            (t.prototype.take = function (t) {
              return new (this.ctor())(new K(t, this));
            }),
            (t.prototype.drop = function (e) {
              return new t(new S(e, this));
            }),
            (t.prototype.last = function () {
              return new t(new I(this));
            }),
            (t.prototype.startWith = function (t) {
              return new R(new U(this, t));
            }),
            (t.prototype.endWhen = function (t) {
              return new (this.ctor())(new T(t, this));
            }),
            (t.prototype.fold = function (t, e) {
              return new R(new N(t, e, this));
            }),
            (t.prototype.replaceError = function (t) {
              return new (this.ctor())(new M(t, this));
            }),
            (t.prototype.flatten = function () {
              return new t(new Y(this));
            }),
            (t.prototype.compose = function (t) {
              return t(this);
            }),
            (t.prototype.remember = function () {
              return new R(new L(this));
            }),
            (t.prototype.debug = function (t) {
              return new (this.ctor())(new x(this, t));
            }),
            (t.prototype.imitate = function (t) {
              if (t instanceof R)
                throw new Error(
                  "A MemoryStream was given to imitate(), but it only supports a Stream. Read more about this restriction here: https://github.com/staltz/xstream#faq",
                );
              this._target = t;
              for (var e = this._ils, r = e.length, n = 0; n < r; n++)
                t._add(e[n]);
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
                  (t._n = t.next || _),
                  (t._e = t.error || _),
                  (t._c = t.complete || _),
                  (this._dl = t))
                : ((this._d = !1), (this._dl = i));
            }),
            (t.merge = function () {
              for (var e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              return new t(new v(e));
            }),
            (t.combine = function () {
              for (var e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              return new t(new b(e));
            }),
            t
          );
        })();
      e.Stream = P;
      var R = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return ((r._has = !1), r);
        }
        return (
          n(e, t),
          (e.prototype._n = function (e) {
            ((this._v = e), (this._has = !0), t.prototype._n.call(this, e));
          }),
          (e.prototype._add = function (t) {
            var e = this._target;
            if (e) return e._add(t);
            var r = this._ils;
            if ((r.push(t), r.length > 1)) this._has && t._n(this._v);
            else if (this._stopID !== i)
              (this._has && t._n(this._v),
                clearTimeout(this._stopID),
                (this._stopID = i));
            else if (this._has) t._n(this._v);
            else {
              var n = this._prod;
              n !== i && n._start(this);
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
      })(P);
      e.MemoryStream = R;
      var C = P;
      e.default = C;
    },
    3062: function (t, e, r) {
      var n = r(2771);
      function s(t) {
        return t < n.OP_PUSHDATA1 ? 1 : t <= 255 ? 2 : t <= 65535 ? 3 : 5;
      }
      function o(t, e, r) {
        var o = s(e);
        return (
          1 === o
            ? t.writeUInt8(e, r)
            : 2 === o
              ? (t.writeUInt8(n.OP_PUSHDATA1, r), t.writeUInt8(e, r + 1))
              : 3 === o
                ? (t.writeUInt8(n.OP_PUSHDATA2, r), t.writeUInt16LE(e, r + 1))
                : (t.writeUInt8(n.OP_PUSHDATA4, r), t.writeUInt32LE(e, r + 1)),
          o
        );
      }
      function a(t, e) {
        var r,
          s,
          o = t.readUInt8(e);
        if (o < n.OP_PUSHDATA1) ((r = o), (s = 1));
        else if (o === n.OP_PUSHDATA1) {
          if (e + 2 > t.length) return null;
          ((r = t.readUInt8(e + 1)), (s = 2));
        } else if (o === n.OP_PUSHDATA2) {
          if (e + 3 > t.length) return null;
          ((r = t.readUInt16LE(e + 1)), (s = 3));
        } else {
          if (e + 5 > t.length) return null;
          if (o !== n.OP_PUSHDATA4) throw new Error("Unexpected opcode");
          ((r = t.readUInt32LE(e + 1)), (s = 5));
        }
        return { opcode: o, number: r, size: s };
      }
      t.exports = { encodingLength: s, encode: o, decode: a };
    },
    3094: function (t, e, r) {
      "use strict";
      var n = e;
      function s() {
        (n.util._configure(),
          n.Writer._configure(n.BufferWriter),
          n.Reader._configure(n.BufferReader));
      }
      ((n.build = "minimal"),
        (n.Writer = r(2951)),
        (n.BufferWriter = r(3096)),
        (n.Reader = r(2952)),
        (n.BufferReader = r(3097)),
        (n.util = r(2791)),
        (n.rpc = r(3098)),
        (n.roots = r(3100)),
        (n.configure = s),
        s());
    },
    3095: function (t, e, r) {
      "use strict";
      t.exports = s;
      var n = r(2791);
      function s(t, e) {
        ((this.lo = t >>> 0), (this.hi = e >>> 0));
      }
      var o = (s.zero = new s(0, 0));
      ((o.toNumber = function () {
        return 0;
      }),
        (o.zzEncode = o.zzDecode =
          function () {
            return this;
          }),
        (o.length = function () {
          return 1;
        }));
      var a = (s.zeroHash = "\0\0\0\0\0\0\0\0");
      ((s.fromNumber = function (t) {
        if (0 === t) return o;
        var e = t < 0;
        e && (t = -t);
        var r = t >>> 0,
          n = ((t - r) / 4294967296) >>> 0;
        return (
          e &&
            ((n = ~n >>> 0),
            (r = ~r >>> 0),
            ++r > 4294967295 && ((r = 0), ++n > 4294967295 && (n = 0))),
          new s(r, n)
        );
      }),
        (s.from = function (t) {
          if ("number" === typeof t) return s.fromNumber(t);
          if (n.isString(t)) {
            if (!n.Long) return s.fromNumber(parseInt(t, 10));
            t = n.Long.fromString(t);
          }
          return t.low || t.high ? new s(t.low >>> 0, t.high >>> 0) : o;
        }),
        (s.prototype.toNumber = function (t) {
          if (!t && this.hi >>> 31) {
            var e = (1 + ~this.lo) >>> 0,
              r = ~this.hi >>> 0;
            return (e || (r = (r + 1) >>> 0), -(e + 4294967296 * r));
          }
          return this.lo + 4294967296 * this.hi;
        }),
        (s.prototype.toLong = function (t) {
          return n.Long
            ? new n.Long(0 | this.lo, 0 | this.hi, Boolean(t))
            : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(t) };
        }));
      var i = String.prototype.charCodeAt;
      ((s.fromHash = function (t) {
        return t === a
          ? o
          : new s(
              (i.call(t, 0) |
                (i.call(t, 1) << 8) |
                (i.call(t, 2) << 16) |
                (i.call(t, 3) << 24)) >>>
                0,
              (i.call(t, 4) |
                (i.call(t, 5) << 8) |
                (i.call(t, 6) << 16) |
                (i.call(t, 7) << 24)) >>>
                0,
            );
      }),
        (s.prototype.toHash = function () {
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
        (s.prototype.zzEncode = function () {
          var t = this.hi >> 31;
          return (
            (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ t) >>> 0),
            (this.lo = ((this.lo << 1) ^ t) >>> 0),
            this
          );
        }),
        (s.prototype.zzDecode = function () {
          var t = -(1 & this.lo);
          return (
            (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ t) >>> 0),
            (this.hi = ((this.hi >>> 1) ^ t) >>> 0),
            this
          );
        }),
        (s.prototype.length = function () {
          var t = this.lo,
            e = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
            r = this.hi >>> 24;
          return 0 === r
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
            : r < 128
              ? 9
              : 10;
        }));
    },
    3096: function (t, e, r) {
      "use strict";
      t.exports = o;
      var n = r(2951);
      (o.prototype = Object.create(n.prototype)).constructor = o;
      var s = r(2791);
      function o() {
        n.call(this);
      }
      function a(t, e, r) {
        t.length < 40
          ? s.utf8.write(t, e, r)
          : e.utf8Write
            ? e.utf8Write(t, r)
            : e.write(t, r);
      }
      ((o._configure = function () {
        ((o.alloc = s._Buffer_allocUnsafe),
          (o.writeBytesBuffer =
            s.Buffer &&
            s.Buffer.prototype instanceof Uint8Array &&
            "set" === s.Buffer.prototype.set.name
              ? function (t, e, r) {
                  e.set(t, r);
                }
              : function (t, e, r) {
                  if (t.copy) t.copy(e, r, 0, t.length);
                  else for (var n = 0; n < t.length; ) e[r++] = t[n++];
                }));
      }),
        (o.prototype.bytes = function (t) {
          s.isString(t) && (t = s._Buffer_from(t, "base64"));
          var e = t.length >>> 0;
          return (
            this.uint32(e),
            e && this._push(o.writeBytesBuffer, e, t),
            this
          );
        }),
        (o.prototype.string = function (t) {
          var e = s.Buffer.byteLength(t);
          return (this.uint32(e), e && this._push(a, e, t), this);
        }),
        o._configure());
    },
    3097: function (t, e, r) {
      "use strict";
      t.exports = o;
      var n = r(2952);
      (o.prototype = Object.create(n.prototype)).constructor = o;
      var s = r(2791);
      function o(t) {
        n.call(this, t);
      }
      ((o._configure = function () {
        s.Buffer && (o.prototype._slice = s.Buffer.prototype.slice);
      }),
        (o.prototype.string = function () {
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
        o._configure());
    },
    3098: function (t, e, r) {
      "use strict";
      var n = e;
      n.Service = r(3099);
    },
    3099: function (t, e, r) {
      "use strict";
      t.exports = s;
      var n = r(2791);
      function s(t, e, r) {
        if ("function" !== typeof t)
          throw TypeError("rpcImpl must be a function");
        (n.EventEmitter.call(this),
          (this.rpcImpl = t),
          (this.requestDelimited = Boolean(e)),
          (this.responseDelimited = Boolean(r)));
      }
      (((s.prototype = Object.create(n.EventEmitter.prototype)).constructor =
        s),
        (s.prototype.rpcCall = function t(e, r, s, o, a) {
          if (!o) throw TypeError("request must be specified");
          var i = this;
          if (!a) return n.asPromise(t, i, e, r, s, o);
          if (i.rpcImpl)
            try {
              return i.rpcImpl(
                e,
                r[i.requestDelimited ? "encodeDelimited" : "encode"](
                  o,
                ).finish(),
                function (t, r) {
                  if (t) return (i.emit("error", t, e), a(t));
                  if (null !== r) {
                    if (!(r instanceof s))
                      try {
                        r =
                          s[i.responseDelimited ? "decodeDelimited" : "decode"](
                            r,
                          );
                      } catch (t) {
                        return (i.emit("error", t, e), a(t));
                      }
                    return (i.emit("data", r, e), a(null, r));
                  }
                  i.end(!0);
                },
              );
            } catch (_) {
              return (
                i.emit("error", _, e),
                void setTimeout(function () {
                  a(_);
                }, 0)
              );
            }
          else
            setTimeout(function () {
              a(Error("already ended"));
            }, 0);
        }),
        (s.prototype.end = function (t) {
          return (
            this.rpcImpl &&
              (t || this.rpcImpl(null, null, null),
              (this.rpcImpl = null),
              this.emit("end").off()),
            this
          );
        }));
    },
    3100: function (t, e, r) {
      "use strict";
      t.exports = {};
    },
    3104: function (t, e, r) {
      (function (e) {
        const n = r(2828),
          s = e.alloc(1, 1),
          o = e.alloc(1, 0);
        function a(t, r, a, i, _) {
          let c = e.alloc(32, 0),
            h = e.alloc(32, 1);
          ((c = n("sha256", c)
            .update(h)
            .update(o)
            .update(r)
            .update(t)
            .update(_ || "")
            .digest()),
            (h = n("sha256", c).update(h).digest()),
            (c = n("sha256", c)
              .update(h)
              .update(s)
              .update(r)
              .update(t)
              .update(_ || "")
              .digest()),
            (h = n("sha256", c).update(h).digest()),
            (h = n("sha256", c).update(h).digest()));
          let u = h;
          while (!i(u) || !a(u))
            ((c = n("sha256", c).update(h).update(o).digest()),
              (h = n("sha256", c).update(h).digest()),
              (h = n("sha256", c).update(h).digest()),
              (u = h));
          return u;
        }
        t.exports = a;
      }).call(this, r(2).Buffer);
    },
    3110: function (t, e, r) {
      (function (e) {
        t.exports = function (t, r) {
          if (!Array.isArray(t)) throw TypeError("Expected values Array");
          if ("function" !== typeof r)
            throw TypeError("Expected digest Function");
          var n = t.length,
            s = t.concat();
          while (n > 1) {
            for (var o = 0, a = 0; a < n; a += 2, ++o) {
              var i = s[a],
                _ = a + 1 === n ? i : s[a + 1],
                c = e.concat([i, _]);
              s[o] = r(c);
            }
            n = o;
          }
          return s[0];
        };
      }).call(this, r(2).Buffer);
    },
    3560: function (t, e, r) {
      var n, s, o;
      !(function (a) {
        function i(t, e) {
          "use strict";
          var r,
            n = "uint8array",
            s = e.ready.then(function () {
              function n() {
                if (0 !== r._sodium_init())
                  throw new Error("libsodium was not correctly initialized.");
                for (
                  var e = [
                      "crypto_aead_chacha20poly1305_decrypt",
                      "crypto_aead_chacha20poly1305_decrypt_detached",
                      "crypto_aead_chacha20poly1305_encrypt",
                      "crypto_aead_chacha20poly1305_encrypt_detached",
                      "crypto_aead_chacha20poly1305_ietf_decrypt",
                      "crypto_aead_chacha20poly1305_ietf_decrypt_detached",
                      "crypto_aead_chacha20poly1305_ietf_encrypt",
                      "crypto_aead_chacha20poly1305_ietf_encrypt_detached",
                      "crypto_aead_chacha20poly1305_ietf_keygen",
                      "crypto_aead_chacha20poly1305_keygen",
                      "crypto_aead_xchacha20poly1305_ietf_decrypt",
                      "crypto_aead_xchacha20poly1305_ietf_decrypt_detached",
                      "crypto_aead_xchacha20poly1305_ietf_encrypt",
                      "crypto_aead_xchacha20poly1305_ietf_encrypt_detached",
                      "crypto_aead_xchacha20poly1305_ietf_keygen",
                      "crypto_auth",
                      "crypto_auth_hmacsha256",
                      "crypto_auth_hmacsha256_final",
                      "crypto_auth_hmacsha256_init",
                      "crypto_auth_hmacsha256_keygen",
                      "crypto_auth_hmacsha256_update",
                      "crypto_auth_hmacsha256_verify",
                      "crypto_auth_hmacsha512",
                      "crypto_auth_hmacsha512_final",
                      "crypto_auth_hmacsha512_init",
                      "crypto_auth_hmacsha512_keygen",
                      "crypto_auth_hmacsha512_update",
                      "crypto_auth_hmacsha512_verify",
                      "crypto_auth_keygen",
                      "crypto_auth_verify",
                      "crypto_box_beforenm",
                      "crypto_box_curve25519xchacha20poly1305_keypair",
                      "crypto_box_curve25519xchacha20poly1305_seal",
                      "crypto_box_curve25519xchacha20poly1305_seal_open",
                      "crypto_box_detached",
                      "crypto_box_easy",
                      "crypto_box_easy_afternm",
                      "crypto_box_keypair",
                      "crypto_box_open_detached",
                      "crypto_box_open_easy",
                      "crypto_box_open_easy_afternm",
                      "crypto_box_seal",
                      "crypto_box_seal_open",
                      "crypto_box_seed_keypair",
                      "crypto_core_ed25519_add",
                      "crypto_core_ed25519_from_hash",
                      "crypto_core_ed25519_from_uniform",
                      "crypto_core_ed25519_is_valid_point",
                      "crypto_core_ed25519_random",
                      "crypto_core_ed25519_scalar_add",
                      "crypto_core_ed25519_scalar_complement",
                      "crypto_core_ed25519_scalar_invert",
                      "crypto_core_ed25519_scalar_mul",
                      "crypto_core_ed25519_scalar_negate",
                      "crypto_core_ed25519_scalar_random",
                      "crypto_core_ed25519_scalar_reduce",
                      "crypto_core_ed25519_scalar_sub",
                      "crypto_core_ed25519_sub",
                      "crypto_core_hchacha20",
                      "crypto_core_hsalsa20",
                      "crypto_core_ristretto255_add",
                      "crypto_core_ristretto255_from_hash",
                      "crypto_core_ristretto255_is_valid_point",
                      "crypto_core_ristretto255_random",
                      "crypto_core_ristretto255_scalar_add",
                      "crypto_core_ristretto255_scalar_complement",
                      "crypto_core_ristretto255_scalar_invert",
                      "crypto_core_ristretto255_scalar_mul",
                      "crypto_core_ristretto255_scalar_negate",
                      "crypto_core_ristretto255_scalar_random",
                      "crypto_core_ristretto255_scalar_reduce",
                      "crypto_core_ristretto255_scalar_sub",
                      "crypto_core_ristretto255_sub",
                      "crypto_generichash",
                      "crypto_generichash_blake2b_salt_personal",
                      "crypto_generichash_final",
                      "crypto_generichash_init",
                      "crypto_generichash_keygen",
                      "crypto_generichash_update",
                      "crypto_hash",
                      "crypto_hash_sha256",
                      "crypto_hash_sha256_final",
                      "crypto_hash_sha256_init",
                      "crypto_hash_sha256_update",
                      "crypto_hash_sha512",
                      "crypto_hash_sha512_final",
                      "crypto_hash_sha512_init",
                      "crypto_hash_sha512_update",
                      "crypto_kdf_derive_from_key",
                      "crypto_kdf_keygen",
                      "crypto_kx_client_session_keys",
                      "crypto_kx_keypair",
                      "crypto_kx_seed_keypair",
                      "crypto_kx_server_session_keys",
                      "crypto_onetimeauth",
                      "crypto_onetimeauth_final",
                      "crypto_onetimeauth_init",
                      "crypto_onetimeauth_keygen",
                      "crypto_onetimeauth_update",
                      "crypto_onetimeauth_verify",
                      "crypto_pwhash",
                      "crypto_pwhash_scryptsalsa208sha256",
                      "crypto_pwhash_scryptsalsa208sha256_ll",
                      "crypto_pwhash_scryptsalsa208sha256_str",
                      "crypto_pwhash_scryptsalsa208sha256_str_verify",
                      "crypto_pwhash_str",
                      "crypto_pwhash_str_needs_rehash",
                      "crypto_pwhash_str_verify",
                      "crypto_scalarmult",
                      "crypto_scalarmult_base",
                      "crypto_scalarmult_ed25519",
                      "crypto_scalarmult_ed25519_base",
                      "crypto_scalarmult_ed25519_base_noclamp",
                      "crypto_scalarmult_ed25519_noclamp",
                      "crypto_scalarmult_ristretto255",
                      "crypto_scalarmult_ristretto255_base",
                      "crypto_secretbox_detached",
                      "crypto_secretbox_easy",
                      "crypto_secretbox_keygen",
                      "crypto_secretbox_open_detached",
                      "crypto_secretbox_open_easy",
                      "crypto_secretstream_xchacha20poly1305_init_pull",
                      "crypto_secretstream_xchacha20poly1305_init_push",
                      "crypto_secretstream_xchacha20poly1305_keygen",
                      "crypto_secretstream_xchacha20poly1305_pull",
                      "crypto_secretstream_xchacha20poly1305_push",
                      "crypto_secretstream_xchacha20poly1305_rekey",
                      "crypto_shorthash",
                      "crypto_shorthash_keygen",
                      "crypto_shorthash_siphashx24",
                      "crypto_sign",
                      "crypto_sign_detached",
                      "crypto_sign_ed25519_pk_to_curve25519",
                      "crypto_sign_ed25519_sk_to_curve25519",
                      "crypto_sign_ed25519_sk_to_pk",
                      "crypto_sign_ed25519_sk_to_seed",
                      "crypto_sign_final_create",
                      "crypto_sign_final_verify",
                      "crypto_sign_init",
                      "crypto_sign_keypair",
                      "crypto_sign_open",
                      "crypto_sign_seed_keypair",
                      "crypto_sign_update",
                      "crypto_sign_verify_detached",
                      "crypto_stream_chacha20",
                      "crypto_stream_chacha20_ietf_xor",
                      "crypto_stream_chacha20_ietf_xor_ic",
                      "crypto_stream_chacha20_keygen",
                      "crypto_stream_chacha20_xor",
                      "crypto_stream_chacha20_xor_ic",
                      "crypto_stream_keygen",
                      "crypto_stream_xchacha20_keygen",
                      "crypto_stream_xchacha20_xor",
                      "crypto_stream_xchacha20_xor_ic",
                      "randombytes_buf",
                      "randombytes_buf_deterministic",
                      "randombytes_close",
                      "randombytes_random",
                      "randombytes_set_implementation",
                      "randombytes_stir",
                      "randombytes_uniform",
                      "sodium_version_string",
                    ],
                    n = [
                      E,
                      x,
                      S,
                      k,
                      T,
                      B,
                      A,
                      Y,
                      N,
                      I,
                      O,
                      L,
                      M,
                      U,
                      K,
                      P,
                      R,
                      C,
                      D,
                      F,
                      G,
                      q,
                      j,
                      X,
                      z,
                      W,
                      H,
                      J,
                      V,
                      Z,
                      $,
                      Q,
                      tt,
                      et,
                      rt,
                      nt,
                      st,
                      ot,
                      at,
                      it,
                      _t,
                      ct,
                      ht,
                      ut,
                      pt,
                      lt,
                      yt,
                      ft,
                      dt,
                      vt,
                      gt,
                      bt,
                      mt,
                      wt,
                      Et,
                      xt,
                      St,
                      kt,
                      Tt,
                      Bt,
                      At,
                      Yt,
                      Nt,
                      It,
                      Ot,
                      Lt,
                      Mt,
                      Ut,
                      Kt,
                      Pt,
                      Rt,
                      Ct,
                      Dt,
                      Ft,
                      Gt,
                      qt,
                      jt,
                      Xt,
                      zt,
                      Wt,
                      Ht,
                      Jt,
                      Vt,
                      Zt,
                      $t,
                      Qt,
                      te,
                      ee,
                      re,
                      ne,
                      se,
                      oe,
                      ae,
                      ie,
                      _e,
                      ce,
                      he,
                      ue,
                      pe,
                      le,
                      ye,
                      fe,
                      de,
                      ve,
                      ge,
                      be,
                      me,
                      we,
                      Ee,
                      xe,
                      Se,
                      ke,
                      Te,
                      Be,
                      Ae,
                      Ye,
                      Ne,
                      Ie,
                      Oe,
                      Le,
                      Me,
                      Ue,
                      Ke,
                      Pe,
                      Re,
                      Ce,
                      De,
                      Fe,
                      Ge,
                      qe,
                      je,
                      Xe,
                      ze,
                      We,
                      He,
                      Je,
                      Ve,
                      Ze,
                      $e,
                      Qe,
                      tr,
                      er,
                      rr,
                      nr,
                      sr,
                      or,
                      ar,
                      ir,
                      _r,
                      cr,
                      hr,
                      ur,
                      pr,
                      lr,
                      yr,
                      fr,
                      dr,
                      vr,
                      gr,
                      br,
                      mr,
                      wr,
                    ],
                    s = 0;
                  s < n.length;
                  s++
                )
                  "function" == typeof r["_" + e[s]] && (t[e[s]] = n[s]);
                var o = [
                  "SODIUM_LIBRARY_VERSION_MAJOR",
                  "SODIUM_LIBRARY_VERSION_MINOR",
                  "crypto_aead_chacha20poly1305_ABYTES",
                  "crypto_aead_chacha20poly1305_IETF_ABYTES",
                  "crypto_aead_chacha20poly1305_IETF_KEYBYTES",
                  "crypto_aead_chacha20poly1305_IETF_MESSAGEBYTES_MAX",
                  "crypto_aead_chacha20poly1305_IETF_NPUBBYTES",
                  "crypto_aead_chacha20poly1305_IETF_NSECBYTES",
                  "crypto_aead_chacha20poly1305_KEYBYTES",
                  "crypto_aead_chacha20poly1305_MESSAGEBYTES_MAX",
                  "crypto_aead_chacha20poly1305_NPUBBYTES",
                  "crypto_aead_chacha20poly1305_NSECBYTES",
                  "crypto_aead_chacha20poly1305_ietf_ABYTES",
                  "crypto_aead_chacha20poly1305_ietf_KEYBYTES",
                  "crypto_aead_chacha20poly1305_ietf_MESSAGEBYTES_MAX",
                  "crypto_aead_chacha20poly1305_ietf_NPUBBYTES",
                  "crypto_aead_chacha20poly1305_ietf_NSECBYTES",
                  "crypto_aead_xchacha20poly1305_IETF_ABYTES",
                  "crypto_aead_xchacha20poly1305_IETF_KEYBYTES",
                  "crypto_aead_xchacha20poly1305_IETF_MESSAGEBYTES_MAX",
                  "crypto_aead_xchacha20poly1305_IETF_NPUBBYTES",
                  "crypto_aead_xchacha20poly1305_IETF_NSECBYTES",
                  "crypto_aead_xchacha20poly1305_ietf_ABYTES",
                  "crypto_aead_xchacha20poly1305_ietf_KEYBYTES",
                  "crypto_aead_xchacha20poly1305_ietf_MESSAGEBYTES_MAX",
                  "crypto_aead_xchacha20poly1305_ietf_NPUBBYTES",
                  "crypto_aead_xchacha20poly1305_ietf_NSECBYTES",
                  "crypto_auth_BYTES",
                  "crypto_auth_KEYBYTES",
                  "crypto_auth_hmacsha256_BYTES",
                  "crypto_auth_hmacsha256_KEYBYTES",
                  "crypto_auth_hmacsha512256_BYTES",
                  "crypto_auth_hmacsha512256_KEYBYTES",
                  "crypto_auth_hmacsha512_BYTES",
                  "crypto_auth_hmacsha512_KEYBYTES",
                  "crypto_box_BEFORENMBYTES",
                  "crypto_box_MACBYTES",
                  "crypto_box_MESSAGEBYTES_MAX",
                  "crypto_box_NONCEBYTES",
                  "crypto_box_PUBLICKEYBYTES",
                  "crypto_box_SEALBYTES",
                  "crypto_box_SECRETKEYBYTES",
                  "crypto_box_SEEDBYTES",
                  "crypto_box_curve25519xchacha20poly1305_BEFORENMBYTES",
                  "crypto_box_curve25519xchacha20poly1305_MACBYTES",
                  "crypto_box_curve25519xchacha20poly1305_MESSAGEBYTES_MAX",
                  "crypto_box_curve25519xchacha20poly1305_NONCEBYTES",
                  "crypto_box_curve25519xchacha20poly1305_PUBLICKEYBYTES",
                  "crypto_box_curve25519xchacha20poly1305_SEALBYTES",
                  "crypto_box_curve25519xchacha20poly1305_SECRETKEYBYTES",
                  "crypto_box_curve25519xchacha20poly1305_SEEDBYTES",
                  "crypto_box_curve25519xsalsa20poly1305_BEFORENMBYTES",
                  "crypto_box_curve25519xsalsa20poly1305_MACBYTES",
                  "crypto_box_curve25519xsalsa20poly1305_MESSAGEBYTES_MAX",
                  "crypto_box_curve25519xsalsa20poly1305_NONCEBYTES",
                  "crypto_box_curve25519xsalsa20poly1305_PUBLICKEYBYTES",
                  "crypto_box_curve25519xsalsa20poly1305_SECRETKEYBYTES",
                  "crypto_box_curve25519xsalsa20poly1305_SEEDBYTES",
                  "crypto_core_ed25519_BYTES",
                  "crypto_core_ed25519_HASHBYTES",
                  "crypto_core_ed25519_NONREDUCEDSCALARBYTES",
                  "crypto_core_ed25519_SCALARBYTES",
                  "crypto_core_ed25519_UNIFORMBYTES",
                  "crypto_core_hchacha20_CONSTBYTES",
                  "crypto_core_hchacha20_INPUTBYTES",
                  "crypto_core_hchacha20_KEYBYTES",
                  "crypto_core_hchacha20_OUTPUTBYTES",
                  "crypto_core_hsalsa20_CONSTBYTES",
                  "crypto_core_hsalsa20_INPUTBYTES",
                  "crypto_core_hsalsa20_KEYBYTES",
                  "crypto_core_hsalsa20_OUTPUTBYTES",
                  "crypto_core_ristretto255_BYTES",
                  "crypto_core_ristretto255_HASHBYTES",
                  "crypto_core_ristretto255_NONREDUCEDSCALARBYTES",
                  "crypto_core_ristretto255_SCALARBYTES",
                  "crypto_core_salsa2012_CONSTBYTES",
                  "crypto_core_salsa2012_INPUTBYTES",
                  "crypto_core_salsa2012_KEYBYTES",
                  "crypto_core_salsa2012_OUTPUTBYTES",
                  "crypto_core_salsa20_CONSTBYTES",
                  "crypto_core_salsa20_INPUTBYTES",
                  "crypto_core_salsa20_KEYBYTES",
                  "crypto_core_salsa20_OUTPUTBYTES",
                  "crypto_generichash_BYTES",
                  "crypto_generichash_BYTES_MAX",
                  "crypto_generichash_BYTES_MIN",
                  "crypto_generichash_KEYBYTES",
                  "crypto_generichash_KEYBYTES_MAX",
                  "crypto_generichash_KEYBYTES_MIN",
                  "crypto_generichash_blake2b_BYTES",
                  "crypto_generichash_blake2b_BYTES_MAX",
                  "crypto_generichash_blake2b_BYTES_MIN",
                  "crypto_generichash_blake2b_KEYBYTES",
                  "crypto_generichash_blake2b_KEYBYTES_MAX",
                  "crypto_generichash_blake2b_KEYBYTES_MIN",
                  "crypto_generichash_blake2b_PERSONALBYTES",
                  "crypto_generichash_blake2b_SALTBYTES",
                  "crypto_hash_BYTES",
                  "crypto_hash_sha256_BYTES",
                  "crypto_hash_sha512_BYTES",
                  "crypto_kdf_BYTES_MAX",
                  "crypto_kdf_BYTES_MIN",
                  "crypto_kdf_CONTEXTBYTES",
                  "crypto_kdf_KEYBYTES",
                  "crypto_kdf_blake2b_BYTES_MAX",
                  "crypto_kdf_blake2b_BYTES_MIN",
                  "crypto_kdf_blake2b_CONTEXTBYTES",
                  "crypto_kdf_blake2b_KEYBYTES",
                  "crypto_kx_PUBLICKEYBYTES",
                  "crypto_kx_SECRETKEYBYTES",
                  "crypto_kx_SEEDBYTES",
                  "crypto_kx_SESSIONKEYBYTES",
                  "crypto_onetimeauth_BYTES",
                  "crypto_onetimeauth_KEYBYTES",
                  "crypto_onetimeauth_poly1305_BYTES",
                  "crypto_onetimeauth_poly1305_KEYBYTES",
                  "crypto_pwhash_ALG_ARGON2I13",
                  "crypto_pwhash_ALG_ARGON2ID13",
                  "crypto_pwhash_ALG_DEFAULT",
                  "crypto_pwhash_BYTES_MAX",
                  "crypto_pwhash_BYTES_MIN",
                  "crypto_pwhash_MEMLIMIT_INTERACTIVE",
                  "crypto_pwhash_MEMLIMIT_MAX",
                  "crypto_pwhash_MEMLIMIT_MIN",
                  "crypto_pwhash_MEMLIMIT_MODERATE",
                  "crypto_pwhash_MEMLIMIT_SENSITIVE",
                  "crypto_pwhash_OPSLIMIT_INTERACTIVE",
                  "crypto_pwhash_OPSLIMIT_MAX",
                  "crypto_pwhash_OPSLIMIT_MIN",
                  "crypto_pwhash_OPSLIMIT_MODERATE",
                  "crypto_pwhash_OPSLIMIT_SENSITIVE",
                  "crypto_pwhash_PASSWD_MAX",
                  "crypto_pwhash_PASSWD_MIN",
                  "crypto_pwhash_SALTBYTES",
                  "crypto_pwhash_STRBYTES",
                  "crypto_pwhash_argon2i_BYTES_MAX",
                  "crypto_pwhash_argon2i_BYTES_MIN",
                  "crypto_pwhash_argon2i_SALTBYTES",
                  "crypto_pwhash_argon2i_STRBYTES",
                  "crypto_pwhash_argon2id_BYTES_MAX",
                  "crypto_pwhash_argon2id_BYTES_MIN",
                  "crypto_pwhash_argon2id_SALTBYTES",
                  "crypto_pwhash_argon2id_STRBYTES",
                  "crypto_pwhash_scryptsalsa208sha256_BYTES_MAX",
                  "crypto_pwhash_scryptsalsa208sha256_BYTES_MIN",
                  "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_INTERACTIVE",
                  "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MAX",
                  "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_MIN",
                  "crypto_pwhash_scryptsalsa208sha256_MEMLIMIT_SENSITIVE",
                  "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_INTERACTIVE",
                  "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MAX",
                  "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_MIN",
                  "crypto_pwhash_scryptsalsa208sha256_OPSLIMIT_SENSITIVE",
                  "crypto_pwhash_scryptsalsa208sha256_SALTBYTES",
                  "crypto_pwhash_scryptsalsa208sha256_STRBYTES",
                  "crypto_scalarmult_BYTES",
                  "crypto_scalarmult_SCALARBYTES",
                  "crypto_scalarmult_curve25519_BYTES",
                  "crypto_scalarmult_curve25519_SCALARBYTES",
                  "crypto_scalarmult_ed25519_BYTES",
                  "crypto_scalarmult_ed25519_SCALARBYTES",
                  "crypto_scalarmult_ristretto255_BYTES",
                  "crypto_scalarmult_ristretto255_SCALARBYTES",
                  "crypto_secretbox_KEYBYTES",
                  "crypto_secretbox_MACBYTES",
                  "crypto_secretbox_MESSAGEBYTES_MAX",
                  "crypto_secretbox_NONCEBYTES",
                  "crypto_secretbox_xchacha20poly1305_KEYBYTES",
                  "crypto_secretbox_xchacha20poly1305_MACBYTES",
                  "crypto_secretbox_xchacha20poly1305_MESSAGEBYTES_MAX",
                  "crypto_secretbox_xchacha20poly1305_NONCEBYTES",
                  "crypto_secretbox_xsalsa20poly1305_KEYBYTES",
                  "crypto_secretbox_xsalsa20poly1305_MACBYTES",
                  "crypto_secretbox_xsalsa20poly1305_MESSAGEBYTES_MAX",
                  "crypto_secretbox_xsalsa20poly1305_NONCEBYTES",
                  "crypto_secretstream_xchacha20poly1305_ABYTES",
                  "crypto_secretstream_xchacha20poly1305_HEADERBYTES",
                  "crypto_secretstream_xchacha20poly1305_KEYBYTES",
                  "crypto_secretstream_xchacha20poly1305_MESSAGEBYTES_MAX",
                  "crypto_secretstream_xchacha20poly1305_TAG_FINAL",
                  "crypto_secretstream_xchacha20poly1305_TAG_MESSAGE",
                  "crypto_secretstream_xchacha20poly1305_TAG_PUSH",
                  "crypto_secretstream_xchacha20poly1305_TAG_REKEY",
                  "crypto_shorthash_BYTES",
                  "crypto_shorthash_KEYBYTES",
                  "crypto_shorthash_siphash24_BYTES",
                  "crypto_shorthash_siphash24_KEYBYTES",
                  "crypto_shorthash_siphashx24_BYTES",
                  "crypto_shorthash_siphashx24_KEYBYTES",
                  "crypto_sign_BYTES",
                  "crypto_sign_MESSAGEBYTES_MAX",
                  "crypto_sign_PUBLICKEYBYTES",
                  "crypto_sign_SECRETKEYBYTES",
                  "crypto_sign_SEEDBYTES",
                  "crypto_sign_ed25519_BYTES",
                  "crypto_sign_ed25519_MESSAGEBYTES_MAX",
                  "crypto_sign_ed25519_PUBLICKEYBYTES",
                  "crypto_sign_ed25519_SECRETKEYBYTES",
                  "crypto_sign_ed25519_SEEDBYTES",
                  "crypto_stream_KEYBYTES",
                  "crypto_stream_MESSAGEBYTES_MAX",
                  "crypto_stream_NONCEBYTES",
                  "crypto_stream_chacha20_IETF_KEYBYTES",
                  "crypto_stream_chacha20_IETF_MESSAGEBYTES_MAX",
                  "crypto_stream_chacha20_IETF_NONCEBYTES",
                  "crypto_stream_chacha20_KEYBYTES",
                  "crypto_stream_chacha20_MESSAGEBYTES_MAX",
                  "crypto_stream_chacha20_NONCEBYTES",
                  "crypto_stream_chacha20_ietf_KEYBYTES",
                  "crypto_stream_chacha20_ietf_MESSAGEBYTES_MAX",
                  "crypto_stream_chacha20_ietf_NONCEBYTES",
                  "crypto_stream_salsa2012_KEYBYTES",
                  "crypto_stream_salsa2012_MESSAGEBYTES_MAX",
                  "crypto_stream_salsa2012_NONCEBYTES",
                  "crypto_stream_salsa208_KEYBYTES",
                  "crypto_stream_salsa208_MESSAGEBYTES_MAX",
                  "crypto_stream_salsa208_NONCEBYTES",
                  "crypto_stream_salsa20_KEYBYTES",
                  "crypto_stream_salsa20_MESSAGEBYTES_MAX",
                  "crypto_stream_salsa20_NONCEBYTES",
                  "crypto_stream_xchacha20_KEYBYTES",
                  "crypto_stream_xchacha20_MESSAGEBYTES_MAX",
                  "crypto_stream_xchacha20_NONCEBYTES",
                  "crypto_stream_xsalsa20_KEYBYTES",
                  "crypto_stream_xsalsa20_MESSAGEBYTES_MAX",
                  "crypto_stream_xsalsa20_NONCEBYTES",
                  "crypto_verify_16_BYTES",
                  "crypto_verify_32_BYTES",
                  "crypto_verify_64_BYTES",
                ];
                for (s = 0; s < o.length; s++)
                  "function" == typeof (i = r["_" + o[s].toLowerCase()]) &&
                    (t[o[s]] = i());
                var a = [
                  "SODIUM_VERSION_STRING",
                  "crypto_pwhash_STRPREFIX",
                  "crypto_pwhash_scryptsalsa208sha256_STRPREFIX",
                ];
                for (s = 0; s < a.length; s++) {
                  var i;
                  "function" == typeof (i = r["_" + a[s].toLowerCase()]) &&
                    (t[a[s]] = r.UTF8ToString(i()));
                }
              }
              r = e;
              try {
                n();
                var s = new Uint8Array([98, 97, 108, 108, 115]),
                  o = t.randombytes_buf(t.crypto_secretbox_NONCEBYTES),
                  a = t.randombytes_buf(t.crypto_secretbox_KEYBYTES),
                  i = t.crypto_secretbox_easy(s, o, a),
                  _ = t.crypto_secretbox_open_easy(i, o, a);
                if (t.memcmp(s, _)) return;
              } catch (t) {
                if (null == r.useBackupModule)
                  throw new Error("Both wasm and asm failed to load" + t);
              }
              (r.useBackupModule(), n());
            });
          function o(t) {
            if ("function" == typeof TextEncoder)
              return new TextEncoder().encode(t);
            t = unescape(encodeURIComponent(t));
            for (
              var e = new Uint8Array(t.length), r = 0, n = t.length;
              r < n;
              r++
            )
              e[r] = t.charCodeAt(r);
            return e;
          }
          function a(t) {
            if ("function" == typeof TextDecoder)
              return new TextDecoder("utf-8", { fatal: !0 }).decode(t);
            var e = 8192,
              r = Math.ceil(t.length / e);
            if (r <= 1)
              try {
                return decodeURIComponent(
                  escape(String.fromCharCode.apply(null, t)),
                );
              } catch (t) {
                throw new TypeError("The encoded data was not valid.");
              }
            for (var n = "", s = 0, o = 0; o < r; o++) {
              var i = Array.prototype.slice.call(t, o * e + s, (o + 1) * e + s);
              if (0 != i.length) {
                var _,
                  c = i.length,
                  h = 0;
                do {
                  var u = i[--c];
                  u >= 240
                    ? ((h = 4), (_ = !0))
                    : u >= 224
                      ? ((h = 3), (_ = !0))
                      : u >= 192
                        ? ((h = 2), (_ = !0))
                        : u < 128 && ((h = 1), (_ = !0));
                } while (!_);
                for (var p = h - (i.length - c), l = 0; l < p; l++)
                  (s--, i.pop());
                n += a(i);
              }
            }
            return n;
          }
          function i(t) {
            t = w(null, t, "input");
            for (var e, r, n, s = "", o = 0; o < t.length; o++)
              ((n =
                ((87 + (r = 15 & t[o]) + (((r - 10) >> 8) & -39)) << 8) |
                (87 + (e = t[o] >>> 4) + (((e - 10) >> 8) & -39))),
                (s +=
                  String.fromCharCode(255 & n) + String.fromCharCode(n >>> 8)));
            return s;
          }
          var _ = {
            ORIGINAL: 1,
            ORIGINAL_NO_PADDING: 3,
            URLSAFE: 5,
            URLSAFE_NO_PADDING: 7,
          };
          function c(t) {
            if (null == t) return _.URLSAFE_NO_PADDING;
            if (
              t !== _.ORIGINAL &&
              t !== _.ORIGINAL_NO_PADDING &&
              t !== _.URLSAFE &&
              t != _.URLSAFE_NO_PADDING
            )
              throw new Error("unsupported base64 variant");
            return t;
          }
          function h(t, e) {
            ((e = c(e)), (t = w(s, t, "input")));
            var n,
              s = [],
              o = 0 | Math.floor(t.length / 3),
              i = t.length - 3 * o,
              _ = 4 * o + (0 !== i ? (0 == (2 & e) ? 4 : 2 + (i >>> 1)) : 0),
              h = new y(_ + 1),
              u = f(t);
            return (
              s.push(u),
              s.push(h.address),
              0 === r._sodium_bin2base64(h.address, h.length, u, t.length, e) &&
                g(s, "conversion failed"),
              (h.length = _),
              (n = a(h.to_Uint8Array())),
              v(s),
              n
            );
          }
          function u(t, e) {
            var r = e || n;
            if (!p(r)) throw new Error(r + " output format is not available");
            if (t instanceof y) {
              if ("uint8array" === r) return t.to_Uint8Array();
              if ("text" === r) return a(t.to_Uint8Array());
              if ("hex" === r) return i(t.to_Uint8Array());
              if ("base64" === r)
                return h(t.to_Uint8Array(), _.URLSAFE_NO_PADDING);
              throw new Error('What is output format "' + r + '"?');
            }
            if ("object" == typeof t) {
              for (var s = Object.keys(t), o = {}, c = 0; c < s.length; c++)
                o[s[c]] = u(t[s[c]], r);
              return o;
            }
            if ("string" == typeof t) return t;
            throw new TypeError("Cannot format output");
          }
          function p(t) {
            for (
              var e = ["uint8array", "text", "hex", "base64"], r = 0;
              r < e.length;
              r++
            )
              if (e[r] === t) return !0;
            return !1;
          }
          function l(t) {
            if (t) {
              if ("string" != typeof t)
                throw new TypeError(
                  "When defined, the output format must be a string",
                );
              if (!p(t))
                throw new Error(t + " is not a supported output format");
            }
          }
          function y(t) {
            ((this.length = t), (this.address = d(t)));
          }
          function f(t) {
            var e = d(t.length);
            return (r.HEAPU8.set(t, e), e);
          }
          function d(t) {
            var e = r._malloc(t);
            if (0 === e) throw { message: "_malloc() failed", length: t };
            return e;
          }
          function v(t) {
            if (t) for (var e = 0; e < t.length; e++) ((n = t[e]), r._free(n));
            var n;
          }
          function g(t, e) {
            throw (v(t), new Error(e));
          }
          function b(t, e) {
            throw (v(t), new TypeError(e));
          }
          function m(t, e, r) {
            null == e && b(t, r + " cannot be null or undefined");
          }
          function w(t, e, r) {
            return (
              m(t, e, r),
              e instanceof Uint8Array
                ? e
                : "string" == typeof e
                  ? o(e)
                  : void b(t, "unsupported input type for " + r)
            );
          }
          function E(t, e, n, s, o, a) {
            var i = [];
            l(a);
            var _ = null;
            (null != t &&
              ((_ = f((t = w(i, t, "secret_nonce")))), t.length, i.push(_)),
              (e = w(i, e, "ciphertext")));
            var c,
              h = r._crypto_aead_chacha20poly1305_abytes(),
              p = e.length;
            (p < h && b(i, "ciphertext is too short"), (c = f(e)), i.push(c));
            var d = null,
              m = 0;
            (null != n &&
              ((d = f((n = w(i, n, "additional_data")))),
              (m = n.length),
              i.push(d)),
              (s = w(i, s, "public_nonce")));
            var E,
              x = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
            (s.length !== x && b(i, "invalid public_nonce length"),
              (E = f(s)),
              i.push(E),
              (o = w(i, o, "key")));
            var S,
              k = 0 | r._crypto_aead_chacha20poly1305_keybytes();
            (o.length !== k && b(i, "invalid key length"),
              (S = f(o)),
              i.push(S));
            var T = new y((p - r._crypto_aead_chacha20poly1305_abytes()) | 0),
              B = T.address;
            if (
              (i.push(B),
              0 ===
                r._crypto_aead_chacha20poly1305_decrypt(
                  B,
                  null,
                  _,
                  c,
                  p,
                  0,
                  d,
                  m,
                  0,
                  E,
                  S,
                ))
            ) {
              var A = u(T, a);
              return (v(i), A);
            }
            g(i, "ciphertext cannot be decrypted using that key");
          }
          function x(t, e, n, s, o, a, i) {
            var _ = [];
            l(i);
            var c = null;
            null != t &&
              ((c = f((t = w(_, t, "secret_nonce")))), t.length, _.push(c));
            var h = f((e = w(_, e, "ciphertext"))),
              p = e.length;
            (_.push(h), (n = w(_, n, "mac")));
            var d,
              m = 0 | r._crypto_box_macbytes();
            (n.length !== m && b(_, "invalid mac length"),
              (d = f(n)),
              _.push(d));
            var E = null,
              x = 0;
            (null != s &&
              ((E = f((s = w(_, s, "additional_data")))),
              (x = s.length),
              _.push(E)),
              (o = w(_, o, "public_nonce")));
            var S,
              k = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
            (o.length !== k && b(_, "invalid public_nonce length"),
              (S = f(o)),
              _.push(S),
              (a = w(_, a, "key")));
            var T,
              B = 0 | r._crypto_aead_chacha20poly1305_keybytes();
            (a.length !== B && b(_, "invalid key length"),
              (T = f(a)),
              _.push(T));
            var A = new y(0 | p),
              Y = A.address;
            if (
              (_.push(Y),
              0 ===
                r._crypto_aead_chacha20poly1305_decrypt_detached(
                  Y,
                  c,
                  h,
                  p,
                  0,
                  d,
                  E,
                  x,
                  0,
                  S,
                  T,
                ))
            ) {
              var N = u(A, i);
              return (v(_), N);
            }
            g(_, "ciphertext cannot be decrypted using that key");
          }
          function S(t, e, n, s, o, a) {
            var i = [];
            l(a);
            var _ = f((t = w(i, t, "message"))),
              c = t.length;
            i.push(_);
            var h = null,
              p = 0;
            null != e &&
              ((h = f((e = w(i, e, "additional_data")))),
              (p = e.length),
              i.push(h));
            var d = null;
            (null != n &&
              ((d = f((n = w(i, n, "secret_nonce")))), n.length, i.push(d)),
              (s = w(i, s, "public_nonce")));
            var m,
              E = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
            (s.length !== E && b(i, "invalid public_nonce length"),
              (m = f(s)),
              i.push(m),
              (o = w(i, o, "key")));
            var x,
              S = 0 | r._crypto_aead_chacha20poly1305_keybytes();
            (o.length !== S && b(i, "invalid key length"),
              (x = f(o)),
              i.push(x));
            var k = new y((c + r._crypto_aead_chacha20poly1305_abytes()) | 0),
              T = k.address;
            if (
              (i.push(T),
              0 ===
                r._crypto_aead_chacha20poly1305_encrypt(
                  T,
                  null,
                  _,
                  c,
                  0,
                  h,
                  p,
                  0,
                  d,
                  m,
                  x,
                ))
            ) {
              var B = u(k, a);
              return (v(i), B);
            }
            g(i, "invalid usage");
          }
          function k(t, e, n, s, o, a) {
            var i = [];
            l(a);
            var _ = f((t = w(i, t, "message"))),
              c = t.length;
            i.push(_);
            var h = null,
              p = 0;
            null != e &&
              ((h = f((e = w(i, e, "additional_data")))),
              (p = e.length),
              i.push(h));
            var d = null;
            (null != n &&
              ((d = f((n = w(i, n, "secret_nonce")))), n.length, i.push(d)),
              (s = w(i, s, "public_nonce")));
            var m,
              E = 0 | r._crypto_aead_chacha20poly1305_npubbytes();
            (s.length !== E && b(i, "invalid public_nonce length"),
              (m = f(s)),
              i.push(m),
              (o = w(i, o, "key")));
            var x,
              S = 0 | r._crypto_aead_chacha20poly1305_keybytes();
            (o.length !== S && b(i, "invalid key length"),
              (x = f(o)),
              i.push(x));
            var k = new y(0 | c),
              T = k.address;
            i.push(T);
            var B = new y(0 | r._crypto_aead_chacha20poly1305_abytes()),
              A = B.address;
            if (
              (i.push(A),
              0 ===
                r._crypto_aead_chacha20poly1305_encrypt_detached(
                  T,
                  A,
                  null,
                  _,
                  c,
                  0,
                  h,
                  p,
                  0,
                  d,
                  m,
                  x,
                ))
            ) {
              var Y = u({ ciphertext: k, mac: B }, a);
              return (v(i), Y);
            }
            g(i, "invalid usage");
          }
          function T(t, e, n, s, o, a) {
            var i = [];
            l(a);
            var _ = null;
            (null != t &&
              ((_ = f((t = w(i, t, "secret_nonce")))), t.length, i.push(_)),
              (e = w(i, e, "ciphertext")));
            var c,
              h = r._crypto_aead_chacha20poly1305_ietf_abytes(),
              p = e.length;
            (p < h && b(i, "ciphertext is too short"), (c = f(e)), i.push(c));
            var d = null,
              m = 0;
            (null != n &&
              ((d = f((n = w(i, n, "additional_data")))),
              (m = n.length),
              i.push(d)),
              (s = w(i, s, "public_nonce")));
            var E,
              x = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
            (s.length !== x && b(i, "invalid public_nonce length"),
              (E = f(s)),
              i.push(E),
              (o = w(i, o, "key")));
            var S,
              k = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
            (o.length !== k && b(i, "invalid key length"),
              (S = f(o)),
              i.push(S));
            var T = new y(
                (p - r._crypto_aead_chacha20poly1305_ietf_abytes()) | 0,
              ),
              B = T.address;
            if (
              (i.push(B),
              0 ===
                r._crypto_aead_chacha20poly1305_ietf_decrypt(
                  B,
                  null,
                  _,
                  c,
                  p,
                  0,
                  d,
                  m,
                  0,
                  E,
                  S,
                ))
            ) {
              var A = u(T, a);
              return (v(i), A);
            }
            g(i, "ciphertext cannot be decrypted using that key");
          }
          function B(t, e, n, s, o, a, i) {
            var _ = [];
            l(i);
            var c = null;
            null != t &&
              ((c = f((t = w(_, t, "secret_nonce")))), t.length, _.push(c));
            var h = f((e = w(_, e, "ciphertext"))),
              p = e.length;
            (_.push(h), (n = w(_, n, "mac")));
            var d,
              m = 0 | r._crypto_box_macbytes();
            (n.length !== m && b(_, "invalid mac length"),
              (d = f(n)),
              _.push(d));
            var E = null,
              x = 0;
            (null != s &&
              ((E = f((s = w(_, s, "additional_data")))),
              (x = s.length),
              _.push(E)),
              (o = w(_, o, "public_nonce")));
            var S,
              k = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
            (o.length !== k && b(_, "invalid public_nonce length"),
              (S = f(o)),
              _.push(S),
              (a = w(_, a, "key")));
            var T,
              B = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
            (a.length !== B && b(_, "invalid key length"),
              (T = f(a)),
              _.push(T));
            var A = new y(0 | p),
              Y = A.address;
            if (
              (_.push(Y),
              0 ===
                r._crypto_aead_chacha20poly1305_ietf_decrypt_detached(
                  Y,
                  c,
                  h,
                  p,
                  0,
                  d,
                  E,
                  x,
                  0,
                  S,
                  T,
                ))
            ) {
              var N = u(A, i);
              return (v(_), N);
            }
            g(_, "ciphertext cannot be decrypted using that key");
          }
          function A(t, e, n, s, o, a) {
            var i = [];
            l(a);
            var _ = f((t = w(i, t, "message"))),
              c = t.length;
            i.push(_);
            var h = null,
              p = 0;
            null != e &&
              ((h = f((e = w(i, e, "additional_data")))),
              (p = e.length),
              i.push(h));
            var d = null;
            (null != n &&
              ((d = f((n = w(i, n, "secret_nonce")))), n.length, i.push(d)),
              (s = w(i, s, "public_nonce")));
            var m,
              E = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
            (s.length !== E && b(i, "invalid public_nonce length"),
              (m = f(s)),
              i.push(m),
              (o = w(i, o, "key")));
            var x,
              S = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
            (o.length !== S && b(i, "invalid key length"),
              (x = f(o)),
              i.push(x));
            var k = new y(
                (c + r._crypto_aead_chacha20poly1305_ietf_abytes()) | 0,
              ),
              T = k.address;
            if (
              (i.push(T),
              0 ===
                r._crypto_aead_chacha20poly1305_ietf_encrypt(
                  T,
                  null,
                  _,
                  c,
                  0,
                  h,
                  p,
                  0,
                  d,
                  m,
                  x,
                ))
            ) {
              var B = u(k, a);
              return (v(i), B);
            }
            g(i, "invalid usage");
          }
          function Y(t, e, n, s, o, a) {
            var i = [];
            l(a);
            var _ = f((t = w(i, t, "message"))),
              c = t.length;
            i.push(_);
            var h = null,
              p = 0;
            null != e &&
              ((h = f((e = w(i, e, "additional_data")))),
              (p = e.length),
              i.push(h));
            var d = null;
            (null != n &&
              ((d = f((n = w(i, n, "secret_nonce")))), n.length, i.push(d)),
              (s = w(i, s, "public_nonce")));
            var m,
              E = 0 | r._crypto_aead_chacha20poly1305_ietf_npubbytes();
            (s.length !== E && b(i, "invalid public_nonce length"),
              (m = f(s)),
              i.push(m),
              (o = w(i, o, "key")));
            var x,
              S = 0 | r._crypto_aead_chacha20poly1305_ietf_keybytes();
            (o.length !== S && b(i, "invalid key length"),
              (x = f(o)),
              i.push(x));
            var k = new y(0 | c),
              T = k.address;
            i.push(T);
            var B = new y(0 | r._crypto_aead_chacha20poly1305_ietf_abytes()),
              A = B.address;
            if (
              (i.push(A),
              0 ===
                r._crypto_aead_chacha20poly1305_ietf_encrypt_detached(
                  T,
                  A,
                  null,
                  _,
                  c,
                  0,
                  h,
                  p,
                  0,
                  d,
                  m,
                  x,
                ))
            ) {
              var Y = u({ ciphertext: k, mac: B }, a);
              return (v(i), Y);
            }
            g(i, "invalid usage");
          }
          function N(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_aead_chacha20poly1305_ietf_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_aead_chacha20poly1305_ietf_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function I(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_aead_chacha20poly1305_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_aead_chacha20poly1305_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function O(t, e, n, s, o, a) {
            var i = [];
            l(a);
            var _ = null;
            (null != t &&
              ((_ = f((t = w(i, t, "secret_nonce")))), t.length, i.push(_)),
              (e = w(i, e, "ciphertext")));
            var c,
              h = r._crypto_aead_xchacha20poly1305_ietf_abytes(),
              p = e.length;
            (p < h && b(i, "ciphertext is too short"), (c = f(e)), i.push(c));
            var d = null,
              m = 0;
            (null != n &&
              ((d = f((n = w(i, n, "additional_data")))),
              (m = n.length),
              i.push(d)),
              (s = w(i, s, "public_nonce")));
            var E,
              x = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
            (s.length !== x && b(i, "invalid public_nonce length"),
              (E = f(s)),
              i.push(E),
              (o = w(i, o, "key")));
            var S,
              k = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
            (o.length !== k && b(i, "invalid key length"),
              (S = f(o)),
              i.push(S));
            var T = new y(
                (p - r._crypto_aead_xchacha20poly1305_ietf_abytes()) | 0,
              ),
              B = T.address;
            if (
              (i.push(B),
              0 ===
                r._crypto_aead_xchacha20poly1305_ietf_decrypt(
                  B,
                  null,
                  _,
                  c,
                  p,
                  0,
                  d,
                  m,
                  0,
                  E,
                  S,
                ))
            ) {
              var A = u(T, a);
              return (v(i), A);
            }
            g(i, "ciphertext cannot be decrypted using that key");
          }
          function L(t, e, n, s, o, a, i) {
            var _ = [];
            l(i);
            var c = null;
            null != t &&
              ((c = f((t = w(_, t, "secret_nonce")))), t.length, _.push(c));
            var h = f((e = w(_, e, "ciphertext"))),
              p = e.length;
            (_.push(h), (n = w(_, n, "mac")));
            var d,
              m = 0 | r._crypto_box_macbytes();
            (n.length !== m && b(_, "invalid mac length"),
              (d = f(n)),
              _.push(d));
            var E = null,
              x = 0;
            (null != s &&
              ((E = f((s = w(_, s, "additional_data")))),
              (x = s.length),
              _.push(E)),
              (o = w(_, o, "public_nonce")));
            var S,
              k = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
            (o.length !== k && b(_, "invalid public_nonce length"),
              (S = f(o)),
              _.push(S),
              (a = w(_, a, "key")));
            var T,
              B = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
            (a.length !== B && b(_, "invalid key length"),
              (T = f(a)),
              _.push(T));
            var A = new y(0 | p),
              Y = A.address;
            if (
              (_.push(Y),
              0 ===
                r._crypto_aead_xchacha20poly1305_ietf_decrypt_detached(
                  Y,
                  c,
                  h,
                  p,
                  0,
                  d,
                  E,
                  x,
                  0,
                  S,
                  T,
                ))
            ) {
              var N = u(A, i);
              return (v(_), N);
            }
            g(_, "ciphertext cannot be decrypted using that key");
          }
          function M(t, e, n, s, o, a) {
            var i = [];
            l(a);
            var _ = f((t = w(i, t, "message"))),
              c = t.length;
            i.push(_);
            var h = null,
              p = 0;
            null != e &&
              ((h = f((e = w(i, e, "additional_data")))),
              (p = e.length),
              i.push(h));
            var d = null;
            (null != n &&
              ((d = f((n = w(i, n, "secret_nonce")))), n.length, i.push(d)),
              (s = w(i, s, "public_nonce")));
            var m,
              E = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
            (s.length !== E && b(i, "invalid public_nonce length"),
              (m = f(s)),
              i.push(m),
              (o = w(i, o, "key")));
            var x,
              S = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
            (o.length !== S && b(i, "invalid key length"),
              (x = f(o)),
              i.push(x));
            var k = new y(
                (c + r._crypto_aead_xchacha20poly1305_ietf_abytes()) | 0,
              ),
              T = k.address;
            if (
              (i.push(T),
              0 ===
                r._crypto_aead_xchacha20poly1305_ietf_encrypt(
                  T,
                  null,
                  _,
                  c,
                  0,
                  h,
                  p,
                  0,
                  d,
                  m,
                  x,
                ))
            ) {
              var B = u(k, a);
              return (v(i), B);
            }
            g(i, "invalid usage");
          }
          function U(t, e, n, s, o, a) {
            var i = [];
            l(a);
            var _ = f((t = w(i, t, "message"))),
              c = t.length;
            i.push(_);
            var h = null,
              p = 0;
            null != e &&
              ((h = f((e = w(i, e, "additional_data")))),
              (p = e.length),
              i.push(h));
            var d = null;
            (null != n &&
              ((d = f((n = w(i, n, "secret_nonce")))), n.length, i.push(d)),
              (s = w(i, s, "public_nonce")));
            var m,
              E = 0 | r._crypto_aead_xchacha20poly1305_ietf_npubbytes();
            (s.length !== E && b(i, "invalid public_nonce length"),
              (m = f(s)),
              i.push(m),
              (o = w(i, o, "key")));
            var x,
              S = 0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes();
            (o.length !== S && b(i, "invalid key length"),
              (x = f(o)),
              i.push(x));
            var k = new y(0 | c),
              T = k.address;
            i.push(T);
            var B = new y(0 | r._crypto_aead_xchacha20poly1305_ietf_abytes()),
              A = B.address;
            if (
              (i.push(A),
              0 ===
                r._crypto_aead_xchacha20poly1305_ietf_encrypt_detached(
                  T,
                  A,
                  null,
                  _,
                  c,
                  0,
                  h,
                  p,
                  0,
                  d,
                  m,
                  x,
                ))
            ) {
              var Y = u({ ciphertext: k, mac: B }, a);
              return (v(i), Y);
            }
            g(i, "invalid usage");
          }
          function K(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_aead_xchacha20poly1305_ietf_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_aead_xchacha20poly1305_ietf_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function P(t, e, n) {
            var s = [];
            l(n);
            var o = f((t = w(s, t, "message"))),
              a = t.length;
            (s.push(o), (e = w(s, e, "key")));
            var i,
              _ = 0 | r._crypto_auth_keybytes();
            (e.length !== _ && b(s, "invalid key length"),
              (i = f(e)),
              s.push(i));
            var c = new y(0 | r._crypto_auth_bytes()),
              h = c.address;
            if ((s.push(h), 0 == (0 | r._crypto_auth(h, o, a, 0, i)))) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "invalid usage");
          }
          function R(t, e, n) {
            var s = [];
            l(n);
            var o = f((t = w(s, t, "message"))),
              a = t.length;
            (s.push(o), (e = w(s, e, "key")));
            var i,
              _ = 0 | r._crypto_auth_hmacsha256_keybytes();
            (e.length !== _ && b(s, "invalid key length"),
              (i = f(e)),
              s.push(i));
            var c = new y(0 | r._crypto_auth_hmacsha256_bytes()),
              h = c.address;
            if (
              (s.push(h), 0 == (0 | r._crypto_auth_hmacsha256(h, o, a, 0, i)))
            ) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "invalid usage");
          }
          function C(t, e) {
            var n = [];
            (l(e), m(n, t, "state_address"));
            var s = new y(0 | r._crypto_auth_hmacsha256_bytes()),
              o = s.address;
            if ((n.push(o), 0 == (0 | r._crypto_auth_hmacsha256_final(t, o)))) {
              var a = (r._free(t), u(s, e));
              return (v(n), a);
            }
            g(n, "invalid usage");
          }
          function D(t, e) {
            var n = [];
            l(e);
            var s = null,
              o = 0;
            null != t &&
              ((s = f((t = w(n, t, "key")))), (o = t.length), n.push(s));
            var a = new y(208).address;
            if (0 == (0 | r._crypto_auth_hmacsha256_init(a, s, o))) {
              var i = a;
              return (v(n), i);
            }
            g(n, "invalid usage");
          }
          function F(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_auth_hmacsha256_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_auth_hmacsha256_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function G(t, e, n) {
            var s = [];
            (l(n), m(s, t, "state_address"));
            var o = f((e = w(s, e, "message_chunk"))),
              a = e.length;
            (s.push(o),
              0 != (0 | r._crypto_auth_hmacsha256_update(t, o, a)) &&
                g(s, "invalid usage"),
              v(s));
          }
          function q(t, e, n) {
            var s = [];
            t = w(s, t, "tag");
            var o,
              a = 0 | r._crypto_auth_hmacsha256_bytes();
            (t.length !== a && b(s, "invalid tag length"),
              (o = f(t)),
              s.push(o));
            var i = f((e = w(s, e, "message"))),
              _ = e.length;
            (s.push(i), (n = w(s, n, "key")));
            var c,
              h = 0 | r._crypto_auth_hmacsha256_keybytes();
            (n.length !== h && b(s, "invalid key length"),
              (c = f(n)),
              s.push(c));
            var u = 0 == (0 | r._crypto_auth_hmacsha256_verify(o, i, _, 0, c));
            return (v(s), u);
          }
          function j(t, e, n) {
            var s = [];
            l(n);
            var o = f((t = w(s, t, "message"))),
              a = t.length;
            (s.push(o), (e = w(s, e, "key")));
            var i,
              _ = 0 | r._crypto_auth_hmacsha512_keybytes();
            (e.length !== _ && b(s, "invalid key length"),
              (i = f(e)),
              s.push(i));
            var c = new y(0 | r._crypto_auth_hmacsha512_bytes()),
              h = c.address;
            if (
              (s.push(h), 0 == (0 | r._crypto_auth_hmacsha512(h, o, a, 0, i)))
            ) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "invalid usage");
          }
          function X(t, e) {
            var n = [];
            (l(e), m(n, t, "state_address"));
            var s = new y(0 | r._crypto_auth_hmacsha512_bytes()),
              o = s.address;
            if ((n.push(o), 0 == (0 | r._crypto_auth_hmacsha512_final(t, o)))) {
              var a = (r._free(t), u(s, e));
              return (v(n), a);
            }
            g(n, "invalid usage");
          }
          function z(t, e) {
            var n = [];
            l(e);
            var s = null,
              o = 0;
            null != t &&
              ((s = f((t = w(n, t, "key")))), (o = t.length), n.push(s));
            var a = new y(416).address;
            if (0 == (0 | r._crypto_auth_hmacsha512_init(a, s, o))) {
              var i = a;
              return (v(n), i);
            }
            g(n, "invalid usage");
          }
          function W(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_auth_hmacsha512_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_auth_hmacsha512_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function H(t, e, n) {
            var s = [];
            (l(n), m(s, t, "state_address"));
            var o = f((e = w(s, e, "message_chunk"))),
              a = e.length;
            (s.push(o),
              0 != (0 | r._crypto_auth_hmacsha512_update(t, o, a)) &&
                g(s, "invalid usage"),
              v(s));
          }
          function J(t, e, n) {
            var s = [];
            t = w(s, t, "tag");
            var o,
              a = 0 | r._crypto_auth_hmacsha512_bytes();
            (t.length !== a && b(s, "invalid tag length"),
              (o = f(t)),
              s.push(o));
            var i = f((e = w(s, e, "message"))),
              _ = e.length;
            (s.push(i), (n = w(s, n, "key")));
            var c,
              h = 0 | r._crypto_auth_hmacsha512_keybytes();
            (n.length !== h && b(s, "invalid key length"),
              (c = f(n)),
              s.push(c));
            var u = 0 == (0 | r._crypto_auth_hmacsha512_verify(o, i, _, 0, c));
            return (v(s), u);
          }
          function V(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_auth_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_auth_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function Z(t, e, n) {
            var s = [];
            t = w(s, t, "tag");
            var o,
              a = 0 | r._crypto_auth_bytes();
            (t.length !== a && b(s, "invalid tag length"),
              (o = f(t)),
              s.push(o));
            var i = f((e = w(s, e, "message"))),
              _ = e.length;
            (s.push(i), (n = w(s, n, "key")));
            var c,
              h = 0 | r._crypto_auth_keybytes();
            (n.length !== h && b(s, "invalid key length"),
              (c = f(n)),
              s.push(c));
            var u = 0 == (0 | r._crypto_auth_verify(o, i, _, 0, c));
            return (v(s), u);
          }
          function $(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "publicKey")));
            var o,
              a = 0 | r._crypto_box_publickeybytes();
            (t.length !== a && b(s, "invalid publicKey length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "privateKey")));
            var i,
              _ = 0 | r._crypto_box_secretkeybytes();
            (e.length !== _ && b(s, "invalid privateKey length"),
              (i = f(e)),
              s.push(i));
            var c = new y(0 | r._crypto_box_beforenmbytes()),
              h = c.address;
            if ((s.push(h), 0 == (0 | r._crypto_box_beforenm(h, o, i)))) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "invalid usage");
          }
          function Q(t) {
            var e = [];
            l(t);
            var n = new y(
                0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes(),
              ),
              s = n.address;
            e.push(s);
            var o = new y(
                0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes(),
              ),
              a = o.address;
            (e.push(a),
              r._crypto_box_curve25519xchacha20poly1305_keypair(s, a));
            var i = u(
              { publicKey: n, privateKey: o, keyType: "curve25519" },
              t,
            );
            return (v(e), i);
          }
          function tt(t, e, n) {
            var s = [];
            l(n);
            var o = f((t = w(s, t, "message"))),
              a = t.length;
            (s.push(o), (e = w(s, e, "publicKey")));
            var i,
              _ =
                0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
            (e.length !== _ && b(s, "invalid publicKey length"),
              (i = f(e)),
              s.push(i));
            var c = new y(
                (a + r._crypto_box_curve25519xchacha20poly1305_sealbytes()) | 0,
              ),
              h = c.address;
            (s.push(h),
              r._crypto_box_curve25519xchacha20poly1305_seal(h, o, a, 0, i));
            var p = u(c, n);
            return (v(s), p);
          }
          function et(t, e, n, s) {
            var o = [];
            (l(s), (t = w(o, t, "ciphertext")));
            var a,
              i = r._crypto_box_curve25519xchacha20poly1305_sealbytes(),
              _ = t.length;
            (_ < i && b(o, "ciphertext is too short"),
              (a = f(t)),
              o.push(a),
              (e = w(o, e, "publicKey")));
            var c,
              h =
                0 | r._crypto_box_curve25519xchacha20poly1305_publickeybytes();
            (e.length !== h && b(o, "invalid publicKey length"),
              (c = f(e)),
              o.push(c),
              (n = w(o, n, "secretKey")));
            var p,
              d =
                0 | r._crypto_box_curve25519xchacha20poly1305_secretkeybytes();
            (n.length !== d && b(o, "invalid secretKey length"),
              (p = f(n)),
              o.push(p));
            var g = new y(
                (_ - r._crypto_box_curve25519xchacha20poly1305_sealbytes()) | 0,
              ),
              m = g.address;
            (o.push(m),
              r._crypto_box_curve25519xchacha20poly1305_seal_open(
                m,
                a,
                _,
                0,
                c,
                p,
              ));
            var E = u(g, s);
            return (v(o), E);
          }
          function rt(t, e, n, s, o) {
            var a = [];
            l(o);
            var i = f((t = w(a, t, "message"))),
              _ = t.length;
            (a.push(i), (e = w(a, e, "nonce")));
            var c,
              h = 0 | r._crypto_box_noncebytes();
            (e.length !== h && b(a, "invalid nonce length"),
              (c = f(e)),
              a.push(c),
              (n = w(a, n, "publicKey")));
            var p,
              d = 0 | r._crypto_box_publickeybytes();
            (n.length !== d && b(a, "invalid publicKey length"),
              (p = f(n)),
              a.push(p),
              (s = w(a, s, "privateKey")));
            var m,
              E = 0 | r._crypto_box_secretkeybytes();
            (s.length !== E && b(a, "invalid privateKey length"),
              (m = f(s)),
              a.push(m));
            var x = new y(0 | _),
              S = x.address;
            a.push(S);
            var k = new y(0 | r._crypto_box_macbytes()),
              T = k.address;
            if (
              (a.push(T),
              0 == (0 | r._crypto_box_detached(S, T, i, _, 0, c, p, m)))
            ) {
              var B = u({ ciphertext: x, mac: k }, o);
              return (v(a), B);
            }
            g(a, "invalid usage");
          }
          function nt(t, e, n, s, o) {
            var a = [];
            l(o);
            var i = f((t = w(a, t, "message"))),
              _ = t.length;
            (a.push(i), (e = w(a, e, "nonce")));
            var c,
              h = 0 | r._crypto_box_noncebytes();
            (e.length !== h && b(a, "invalid nonce length"),
              (c = f(e)),
              a.push(c),
              (n = w(a, n, "publicKey")));
            var p,
              d = 0 | r._crypto_box_publickeybytes();
            (n.length !== d && b(a, "invalid publicKey length"),
              (p = f(n)),
              a.push(p),
              (s = w(a, s, "privateKey")));
            var m,
              E = 0 | r._crypto_box_secretkeybytes();
            (s.length !== E && b(a, "invalid privateKey length"),
              (m = f(s)),
              a.push(m));
            var x = new y((_ + r._crypto_box_macbytes()) | 0),
              S = x.address;
            if (
              (a.push(S), 0 == (0 | r._crypto_box_easy(S, i, _, 0, c, p, m)))
            ) {
              var k = u(x, o);
              return (v(a), k);
            }
            g(a, "invalid usage");
          }
          function st(t, e, n, s) {
            var o = [];
            l(s);
            var a = f((t = w(o, t, "message"))),
              i = t.length;
            (o.push(a), (e = w(o, e, "nonce")));
            var _,
              c = 0 | r._crypto_box_noncebytes();
            (e.length !== c && b(o, "invalid nonce length"),
              (_ = f(e)),
              o.push(_),
              (n = w(o, n, "sharedKey")));
            var h,
              p = 0 | r._crypto_box_beforenmbytes();
            (n.length !== p && b(o, "invalid sharedKey length"),
              (h = f(n)),
              o.push(h));
            var d = new y((i + r._crypto_box_macbytes()) | 0),
              m = d.address;
            if (
              (o.push(m),
              0 == (0 | r._crypto_box_easy_afternm(m, a, i, 0, _, h)))
            ) {
              var E = u(d, s);
              return (v(o), E);
            }
            g(o, "invalid usage");
          }
          function ot(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_box_publickeybytes()),
              s = n.address;
            e.push(s);
            var o = new y(0 | r._crypto_box_secretkeybytes()),
              a = o.address;
            if ((e.push(a), 0 == (0 | r._crypto_box_keypair(s, a)))) {
              var i = {
                publicKey: u(n, t),
                privateKey: u(o, t),
                keyType: "x25519",
              };
              return (v(e), i);
            }
            g(e, "internal error");
          }
          function at(t, e, n, s, o, a) {
            var i = [];
            l(a);
            var _ = f((t = w(i, t, "ciphertext"))),
              c = t.length;
            (i.push(_), (e = w(i, e, "mac")));
            var h,
              p = 0 | r._crypto_box_macbytes();
            (e.length !== p && b(i, "invalid mac length"),
              (h = f(e)),
              i.push(h),
              (n = w(i, n, "nonce")));
            var d,
              m = 0 | r._crypto_box_noncebytes();
            (n.length !== m && b(i, "invalid nonce length"),
              (d = f(n)),
              i.push(d),
              (s = w(i, s, "publicKey")));
            var E,
              x = 0 | r._crypto_box_publickeybytes();
            (s.length !== x && b(i, "invalid publicKey length"),
              (E = f(s)),
              i.push(E),
              (o = w(i, o, "privateKey")));
            var S,
              k = 0 | r._crypto_box_secretkeybytes();
            (o.length !== k && b(i, "invalid privateKey length"),
              (S = f(o)),
              i.push(S));
            var T = new y(0 | c),
              B = T.address;
            if (
              (i.push(B),
              0 == (0 | r._crypto_box_open_detached(B, _, h, c, 0, d, E, S)))
            ) {
              var A = u(T, a);
              return (v(i), A);
            }
            g(i, "incorrect key pair for the given ciphertext");
          }
          function it(t, e, n, s, o) {
            var a = [];
            (l(o), (t = w(a, t, "ciphertext")));
            var i,
              _ = r._crypto_box_macbytes(),
              c = t.length;
            (c < _ && b(a, "ciphertext is too short"),
              (i = f(t)),
              a.push(i),
              (e = w(a, e, "nonce")));
            var h,
              p = 0 | r._crypto_box_noncebytes();
            (e.length !== p && b(a, "invalid nonce length"),
              (h = f(e)),
              a.push(h),
              (n = w(a, n, "publicKey")));
            var d,
              m = 0 | r._crypto_box_publickeybytes();
            (n.length !== m && b(a, "invalid publicKey length"),
              (d = f(n)),
              a.push(d),
              (s = w(a, s, "privateKey")));
            var E,
              x = 0 | r._crypto_box_secretkeybytes();
            (s.length !== x && b(a, "invalid privateKey length"),
              (E = f(s)),
              a.push(E));
            var S = new y((c - r._crypto_box_macbytes()) | 0),
              k = S.address;
            if (
              (a.push(k),
              0 == (0 | r._crypto_box_open_easy(k, i, c, 0, h, d, E)))
            ) {
              var T = u(S, o);
              return (v(a), T);
            }
            g(a, "incorrect key pair for the given ciphertext");
          }
          function _t(t, e, n, s) {
            var o = [];
            l(s);
            var a = f((t = w(o, t, "ciphertext"))),
              i = t.length;
            (o.push(a), (e = w(o, e, "nonce")));
            var _,
              c = 0 | r._crypto_box_noncebytes();
            (e.length !== c && b(o, "invalid nonce length"),
              (_ = f(e)),
              o.push(_),
              (n = w(o, n, "sharedKey")));
            var h,
              p = 0 | r._crypto_box_beforenmbytes();
            (n.length !== p && b(o, "invalid sharedKey length"),
              (h = f(n)),
              o.push(h));
            var d = new y((i - r._crypto_box_macbytes()) | 0),
              m = d.address;
            if (
              (o.push(m),
              0 == (0 | r._crypto_box_open_easy_afternm(m, a, i, 0, _, h)))
            ) {
              var E = u(d, s);
              return (v(o), E);
            }
            g(o, "incorrect secret key for the given ciphertext");
          }
          function ct(t, e, n) {
            var s = [];
            l(n);
            var o = f((t = w(s, t, "message"))),
              a = t.length;
            (s.push(o), (e = w(s, e, "publicKey")));
            var i,
              _ = 0 | r._crypto_box_publickeybytes();
            (e.length !== _ && b(s, "invalid publicKey length"),
              (i = f(e)),
              s.push(i));
            var c = new y((a + r._crypto_box_sealbytes()) | 0),
              h = c.address;
            if ((s.push(h), 0 == (0 | r._crypto_box_seal(h, o, a, 0, i)))) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "invalid usage");
          }
          function ht(t, e, n, s) {
            var o = [];
            (l(s), (t = w(o, t, "ciphertext")));
            var a,
              i = r._crypto_box_sealbytes(),
              _ = t.length;
            (_ < i && b(o, "ciphertext is too short"),
              (a = f(t)),
              o.push(a),
              (e = w(o, e, "publicKey")));
            var c,
              h = 0 | r._crypto_box_publickeybytes();
            (e.length !== h && b(o, "invalid publicKey length"),
              (c = f(e)),
              o.push(c),
              (n = w(o, n, "privateKey")));
            var p,
              d = 0 | r._crypto_box_secretkeybytes();
            (n.length !== d && b(o, "invalid privateKey length"),
              (p = f(n)),
              o.push(p));
            var m = new y((_ - r._crypto_box_sealbytes()) | 0),
              E = m.address;
            if (
              (o.push(E), 0 == (0 | r._crypto_box_seal_open(E, a, _, 0, c, p)))
            ) {
              var x = u(m, s);
              return (v(o), x);
            }
            g(o, "incorrect key pair for the given ciphertext");
          }
          function ut(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "seed")));
            var s,
              o = 0 | r._crypto_box_seedbytes();
            (t.length !== o && b(n, "invalid seed length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_box_publickeybytes()),
              i = a.address;
            n.push(i);
            var _ = new y(0 | r._crypto_box_secretkeybytes()),
              c = _.address;
            if ((n.push(c), 0 == (0 | r._crypto_box_seed_keypair(i, c, s)))) {
              var h = {
                publicKey: u(a, e),
                privateKey: u(_, e),
                keyType: "x25519",
              };
              return (v(n), h);
            }
            g(n, "invalid usage");
          }
          function pt(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "p")));
            var o,
              a = 0 | r._crypto_core_ed25519_bytes();
            (t.length !== a && b(s, "invalid p length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "q")));
            var i,
              _ = 0 | r._crypto_core_ed25519_bytes();
            (e.length !== _ && b(s, "invalid q length"), (i = f(e)), s.push(i));
            var c = new y(0 | r._crypto_core_ed25519_bytes()),
              h = c.address;
            if ((s.push(h), 0 == (0 | r._crypto_core_ed25519_add(h, o, i)))) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "input is an invalid element");
          }
          function lt(t, e) {
            var n = [];
            l(e);
            var s = f((t = w(n, t, "r")));
            (t.length, n.push(s));
            var o = new y(0 | r._crypto_core_ed25519_bytes()),
              a = o.address;
            if (
              (n.push(a), 0 == (0 | r._crypto_core_ed25519_from_hash(a, s)))
            ) {
              var i = u(o, e);
              return (v(n), i);
            }
            g(n, "invalid usage");
          }
          function yt(t, e) {
            var n = [];
            l(e);
            var s = f((t = w(n, t, "r")));
            (t.length, n.push(s));
            var o = new y(0 | r._crypto_core_ed25519_bytes()),
              a = o.address;
            if (
              (n.push(a), 0 == (0 | r._crypto_core_ed25519_from_uniform(a, s)))
            ) {
              var i = u(o, e);
              return (v(n), i);
            }
            g(n, "invalid usage");
          }
          function ft(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "repr")));
            var s,
              o = 0 | r._crypto_core_ed25519_bytes();
            (t.length !== o && b(n, "invalid repr length"),
              (s = f(t)),
              n.push(s));
            var a = 1 == (0 | r._crypto_core_ed25519_is_valid_point(s));
            return (v(n), a);
          }
          function dt(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_core_ed25519_bytes()),
              s = n.address;
            (e.push(s), r._crypto_core_ed25519_random(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function vt(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "x")));
            var o,
              a = 0 | r._crypto_core_ed25519_scalarbytes();
            (t.length !== a && b(s, "invalid x length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "y")));
            var i,
              _ = 0 | r._crypto_core_ed25519_scalarbytes();
            (e.length !== _ && b(s, "invalid y length"), (i = f(e)), s.push(i));
            var c = new y(0 | r._crypto_core_ed25519_scalarbytes()),
              h = c.address;
            (s.push(h), r._crypto_core_ed25519_scalar_add(h, o, i));
            var p = u(c, n);
            return (v(s), p);
          }
          function gt(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "s")));
            var s,
              o = 0 | r._crypto_core_ed25519_scalarbytes();
            (t.length !== o && b(n, "invalid s length"), (s = f(t)), n.push(s));
            var a = new y(0 | r._crypto_core_ed25519_scalarbytes()),
              i = a.address;
            (n.push(i), r._crypto_core_ed25519_scalar_complement(i, s));
            var _ = u(a, e);
            return (v(n), _);
          }
          function bt(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "s")));
            var s,
              o = 0 | r._crypto_core_ed25519_scalarbytes();
            (t.length !== o && b(n, "invalid s length"), (s = f(t)), n.push(s));
            var a = new y(0 | r._crypto_core_ed25519_scalarbytes()),
              i = a.address;
            if (
              (n.push(i), 0 == (0 | r._crypto_core_ed25519_scalar_invert(i, s)))
            ) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "invalid reciprocate");
          }
          function mt(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "x")));
            var o,
              a = 0 | r._crypto_core_ed25519_scalarbytes();
            (t.length !== a && b(s, "invalid x length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "y")));
            var i,
              _ = 0 | r._crypto_core_ed25519_scalarbytes();
            (e.length !== _ && b(s, "invalid y length"), (i = f(e)), s.push(i));
            var c = new y(0 | r._crypto_core_ed25519_scalarbytes()),
              h = c.address;
            (s.push(h), r._crypto_core_ed25519_scalar_mul(h, o, i));
            var p = u(c, n);
            return (v(s), p);
          }
          function wt(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "s")));
            var s,
              o = 0 | r._crypto_core_ed25519_scalarbytes();
            (t.length !== o && b(n, "invalid s length"), (s = f(t)), n.push(s));
            var a = new y(0 | r._crypto_core_ed25519_scalarbytes()),
              i = a.address;
            (n.push(i), r._crypto_core_ed25519_scalar_negate(i, s));
            var _ = u(a, e);
            return (v(n), _);
          }
          function Et(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_core_ed25519_scalarbytes()),
              s = n.address;
            (e.push(s), r._crypto_core_ed25519_scalar_random(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function xt(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "sample")));
            var s,
              o = 0 | r._crypto_core_ed25519_nonreducedscalarbytes();
            (t.length !== o && b(n, "invalid sample length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_core_ed25519_scalarbytes()),
              i = a.address;
            (n.push(i), r._crypto_core_ed25519_scalar_reduce(i, s));
            var _ = u(a, e);
            return (v(n), _);
          }
          function St(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "x")));
            var o,
              a = 0 | r._crypto_core_ed25519_scalarbytes();
            (t.length !== a && b(s, "invalid x length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "y")));
            var i,
              _ = 0 | r._crypto_core_ed25519_scalarbytes();
            (e.length !== _ && b(s, "invalid y length"), (i = f(e)), s.push(i));
            var c = new y(0 | r._crypto_core_ed25519_scalarbytes()),
              h = c.address;
            (s.push(h), r._crypto_core_ed25519_scalar_sub(h, o, i));
            var p = u(c, n);
            return (v(s), p);
          }
          function kt(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "p")));
            var o,
              a = 0 | r._crypto_core_ed25519_bytes();
            (t.length !== a && b(s, "invalid p length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "q")));
            var i,
              _ = 0 | r._crypto_core_ed25519_bytes();
            (e.length !== _ && b(s, "invalid q length"), (i = f(e)), s.push(i));
            var c = new y(0 | r._crypto_core_ed25519_bytes()),
              h = c.address;
            if ((s.push(h), 0 == (0 | r._crypto_core_ed25519_sub(h, o, i)))) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "input is an invalid element");
          }
          function Tt(t, e, n, s) {
            var o = [];
            (l(s), (t = w(o, t, "input")));
            var a,
              i = 0 | r._crypto_core_hchacha20_inputbytes();
            (t.length !== i && b(o, "invalid input length"),
              (a = f(t)),
              o.push(a),
              (e = w(o, e, "privateKey")));
            var _,
              c = 0 | r._crypto_core_hchacha20_keybytes();
            (e.length !== c && b(o, "invalid privateKey length"),
              (_ = f(e)),
              o.push(_));
            var h = null;
            null != n &&
              ((h = f((n = w(o, n, "constant")))), n.length, o.push(h));
            var p = new y(0 | r._crypto_core_hchacha20_outputbytes()),
              d = p.address;
            if ((o.push(d), 0 == (0 | r._crypto_core_hchacha20(d, a, _, h)))) {
              var m = u(p, s);
              return (v(o), m);
            }
            g(o, "invalid usage");
          }
          function Bt(t, e, n, s) {
            var o = [];
            (l(s), (t = w(o, t, "input")));
            var a,
              i = 0 | r._crypto_core_hsalsa20_inputbytes();
            (t.length !== i && b(o, "invalid input length"),
              (a = f(t)),
              o.push(a),
              (e = w(o, e, "privateKey")));
            var _,
              c = 0 | r._crypto_core_hsalsa20_keybytes();
            (e.length !== c && b(o, "invalid privateKey length"),
              (_ = f(e)),
              o.push(_));
            var h = null;
            null != n &&
              ((h = f((n = w(o, n, "constant")))), n.length, o.push(h));
            var p = new y(0 | r._crypto_core_hsalsa20_outputbytes()),
              d = p.address;
            if ((o.push(d), 0 == (0 | r._crypto_core_hsalsa20(d, a, _, h)))) {
              var m = u(p, s);
              return (v(o), m);
            }
            g(o, "invalid usage");
          }
          function At(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "p")));
            var o,
              a = 0 | r._crypto_core_ristretto255_bytes();
            (t.length !== a && b(s, "invalid p length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "q")));
            var i,
              _ = 0 | r._crypto_core_ristretto255_bytes();
            (e.length !== _ && b(s, "invalid q length"), (i = f(e)), s.push(i));
            var c = new y(0 | r._crypto_core_ristretto255_bytes()),
              h = c.address;
            if (
              (s.push(h), 0 == (0 | r._crypto_core_ristretto255_add(h, o, i)))
            ) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "input is an invalid element");
          }
          function Yt(t, e) {
            var n = [];
            l(e);
            var s = f((t = w(n, t, "r")));
            (t.length, n.push(s));
            var o = new y(0 | r._crypto_core_ristretto255_bytes()),
              a = o.address;
            if (
              (n.push(a),
              0 == (0 | r._crypto_core_ristretto255_from_hash(a, s)))
            ) {
              var i = u(o, e);
              return (v(n), i);
            }
            g(n, "invalid usage");
          }
          function Nt(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "repr")));
            var s,
              o = 0 | r._crypto_core_ristretto255_bytes();
            (t.length !== o && b(n, "invalid repr length"),
              (s = f(t)),
              n.push(s));
            var a = 1 == (0 | r._crypto_core_ristretto255_is_valid_point(s));
            return (v(n), a);
          }
          function It(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_core_ristretto255_bytes()),
              s = n.address;
            (e.push(s), r._crypto_core_ristretto255_random(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function Ot(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "x")));
            var o,
              a = 0 | r._crypto_core_ristretto255_scalarbytes();
            (t.length !== a && b(s, "invalid x length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "y")));
            var i,
              _ = 0 | r._crypto_core_ristretto255_scalarbytes();
            (e.length !== _ && b(s, "invalid y length"), (i = f(e)), s.push(i));
            var c = new y(0 | r._crypto_core_ristretto255_scalarbytes()),
              h = c.address;
            (s.push(h), r._crypto_core_ristretto255_scalar_add(h, o, i));
            var p = u(c, n);
            return (v(s), p);
          }
          function Lt(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "s")));
            var s,
              o = 0 | r._crypto_core_ristretto255_scalarbytes();
            (t.length !== o && b(n, "invalid s length"), (s = f(t)), n.push(s));
            var a = new y(0 | r._crypto_core_ristretto255_scalarbytes()),
              i = a.address;
            (n.push(i), r._crypto_core_ristretto255_scalar_complement(i, s));
            var _ = u(a, e);
            return (v(n), _);
          }
          function Mt(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "s")));
            var s,
              o = 0 | r._crypto_core_ristretto255_scalarbytes();
            (t.length !== o && b(n, "invalid s length"), (s = f(t)), n.push(s));
            var a = new y(0 | r._crypto_core_ristretto255_scalarbytes()),
              i = a.address;
            if (
              (n.push(i),
              0 == (0 | r._crypto_core_ristretto255_scalar_invert(i, s)))
            ) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "invalid reciprocate");
          }
          function Ut(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "x")));
            var o,
              a = 0 | r._crypto_core_ristretto255_scalarbytes();
            (t.length !== a && b(s, "invalid x length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "y")));
            var i,
              _ = 0 | r._crypto_core_ristretto255_scalarbytes();
            (e.length !== _ && b(s, "invalid y length"), (i = f(e)), s.push(i));
            var c = new y(0 | r._crypto_core_ristretto255_scalarbytes()),
              h = c.address;
            (s.push(h), r._crypto_core_ristretto255_scalar_mul(h, o, i));
            var p = u(c, n);
            return (v(s), p);
          }
          function Kt(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "s")));
            var s,
              o = 0 | r._crypto_core_ristretto255_scalarbytes();
            (t.length !== o && b(n, "invalid s length"), (s = f(t)), n.push(s));
            var a = new y(0 | r._crypto_core_ristretto255_scalarbytes()),
              i = a.address;
            (n.push(i), r._crypto_core_ristretto255_scalar_negate(i, s));
            var _ = u(a, e);
            return (v(n), _);
          }
          function Pt(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_core_ristretto255_scalarbytes()),
              s = n.address;
            (e.push(s), r._crypto_core_ristretto255_scalar_random(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function Rt(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "sample")));
            var s,
              o = 0 | r._crypto_core_ristretto255_nonreducedscalarbytes();
            (t.length !== o && b(n, "invalid sample length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_core_ristretto255_scalarbytes()),
              i = a.address;
            (n.push(i), r._crypto_core_ristretto255_scalar_reduce(i, s));
            var _ = u(a, e);
            return (v(n), _);
          }
          function Ct(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "x")));
            var o,
              a = 0 | r._crypto_core_ristretto255_scalarbytes();
            (t.length !== a && b(s, "invalid x length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "y")));
            var i,
              _ = 0 | r._crypto_core_ristretto255_scalarbytes();
            (e.length !== _ && b(s, "invalid y length"), (i = f(e)), s.push(i));
            var c = new y(0 | r._crypto_core_ristretto255_scalarbytes()),
              h = c.address;
            (s.push(h), r._crypto_core_ristretto255_scalar_sub(h, o, i));
            var p = u(c, n);
            return (v(s), p);
          }
          function Dt(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "p")));
            var o,
              a = 0 | r._crypto_core_ristretto255_bytes();
            (t.length !== a && b(s, "invalid p length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "q")));
            var i,
              _ = 0 | r._crypto_core_ristretto255_bytes();
            (e.length !== _ && b(s, "invalid q length"), (i = f(e)), s.push(i));
            var c = new y(0 | r._crypto_core_ristretto255_bytes()),
              h = c.address;
            if (
              (s.push(h), 0 == (0 | r._crypto_core_ristretto255_sub(h, o, i)))
            ) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "input is an invalid element");
          }
          function Ft(t, e, n, s) {
            var o = [];
            (l(s),
              m(o, t, "hash_length"),
              ("number" != typeof t || (0 | t) !== t || t < 0) &&
                b(o, "hash_length must be an unsigned integer"));
            var a = f((e = w(o, e, "message"))),
              i = e.length;
            o.push(a);
            var _ = null,
              c = 0;
            null != n &&
              ((_ = f((n = w(o, n, "key")))), (c = n.length), o.push(_));
            var h = new y((t |= 0)),
              p = h.address;
            if (
              (o.push(p), 0 == (0 | r._crypto_generichash(p, t, a, i, 0, _, c)))
            ) {
              var d = u(h, s);
              return (v(o), d);
            }
            g(o, "invalid usage");
          }
          function Gt(t, e, n, s, o) {
            var a = [];
            (l(o),
              m(a, t, "subkey_len"),
              ("number" != typeof t || (0 | t) !== t || t < 0) &&
                b(a, "subkey_len must be an unsigned integer"));
            var i = null,
              _ = 0;
            null != e &&
              ((i = f((e = w(a, e, "key")))), (_ = e.length), a.push(i));
            var c = null,
              h = 0;
            null != n &&
              ((n = w(a, n, "id")),
              (h = 0 | r._crypto_generichash_blake2b_saltbytes()),
              n.length !== h && b(a, "invalid id length"),
              (c = f(n)),
              a.push(c));
            var p = null,
              d = 0;
            null != s &&
              ((s = w(a, s, "ctx")),
              (d = 0 | r._crypto_generichash_blake2b_personalbytes()),
              s.length !== d && b(a, "invalid ctx length"),
              (p = f(s)),
              a.push(p));
            var E = new y(0 | t),
              x = E.address;
            if (
              (a.push(x),
              0 ==
                (0 |
                  r._crypto_generichash_blake2b_salt_personal(
                    x,
                    t,
                    null,
                    0,
                    0,
                    i,
                    _,
                    c,
                    p,
                  )))
            ) {
              var S = u(E, o);
              return (v(a), S);
            }
            g(a, "invalid usage");
          }
          function qt(t, e, n) {
            var s = [];
            (l(n),
              m(s, t, "state_address"),
              m(s, e, "hash_length"),
              ("number" != typeof e || (0 | e) !== e || e < 0) &&
                b(s, "hash_length must be an unsigned integer"));
            var o = new y((e |= 0)),
              a = o.address;
            if ((s.push(a), 0 == (0 | r._crypto_generichash_final(t, a, e)))) {
              var i = (r._free(t), u(o, n));
              return (v(s), i);
            }
            g(s, "invalid usage");
          }
          function jt(t, e, n) {
            var s = [];
            l(n);
            var o = null,
              a = 0;
            (null != t &&
              ((o = f((t = w(s, t, "key")))), (a = t.length), s.push(o)),
              m(s, e, "hash_length"),
              ("number" != typeof e || (0 | e) !== e || e < 0) &&
                b(s, "hash_length must be an unsigned integer"));
            var i = new y(357).address;
            if (0 == (0 | r._crypto_generichash_init(i, o, a, e))) {
              var _ = i;
              return (v(s), _);
            }
            g(s, "invalid usage");
          }
          function Xt(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_generichash_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_generichash_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function zt(t, e, n) {
            var s = [];
            (l(n), m(s, t, "state_address"));
            var o = f((e = w(s, e, "message_chunk"))),
              a = e.length;
            (s.push(o),
              0 != (0 | r._crypto_generichash_update(t, o, a)) &&
                g(s, "invalid usage"),
              v(s));
          }
          function Wt(t, e) {
            var n = [];
            l(e);
            var s = f((t = w(n, t, "message"))),
              o = t.length;
            n.push(s);
            var a = new y(0 | r._crypto_hash_bytes()),
              i = a.address;
            if ((n.push(i), 0 == (0 | r._crypto_hash(i, s, o, 0)))) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "invalid usage");
          }
          function Ht(t, e) {
            var n = [];
            l(e);
            var s = f((t = w(n, t, "message"))),
              o = t.length;
            n.push(s);
            var a = new y(0 | r._crypto_hash_sha256_bytes()),
              i = a.address;
            if ((n.push(i), 0 == (0 | r._crypto_hash_sha256(i, s, o, 0)))) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "invalid usage");
          }
          function Jt(t, e) {
            var n = [];
            (l(e), m(n, t, "state_address"));
            var s = new y(0 | r._crypto_hash_sha256_bytes()),
              o = s.address;
            if ((n.push(o), 0 == (0 | r._crypto_hash_sha256_final(t, o)))) {
              var a = (r._free(t), u(s, e));
              return (v(n), a);
            }
            g(n, "invalid usage");
          }
          function Vt(t) {
            var e = [];
            l(t);
            var n = new y(104).address;
            if (0 == (0 | r._crypto_hash_sha256_init(n))) {
              var s = n;
              return (v(e), s);
            }
            g(e, "invalid usage");
          }
          function Zt(t, e, n) {
            var s = [];
            (l(n), m(s, t, "state_address"));
            var o = f((e = w(s, e, "message_chunk"))),
              a = e.length;
            (s.push(o),
              0 != (0 | r._crypto_hash_sha256_update(t, o, a)) &&
                g(s, "invalid usage"),
              v(s));
          }
          function $t(t, e) {
            var n = [];
            l(e);
            var s = f((t = w(n, t, "message"))),
              o = t.length;
            n.push(s);
            var a = new y(0 | r._crypto_hash_sha512_bytes()),
              i = a.address;
            if ((n.push(i), 0 == (0 | r._crypto_hash_sha512(i, s, o, 0)))) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "invalid usage");
          }
          function Qt(t, e) {
            var n = [];
            (l(e), m(n, t, "state_address"));
            var s = new y(0 | r._crypto_hash_sha512_bytes()),
              o = s.address;
            if ((n.push(o), 0 == (0 | r._crypto_hash_sha512_final(t, o)))) {
              var a = (r._free(t), u(s, e));
              return (v(n), a);
            }
            g(n, "invalid usage");
          }
          function te(t) {
            var e = [];
            l(t);
            var n = new y(208).address;
            if (0 == (0 | r._crypto_hash_sha512_init(n))) {
              var s = n;
              return (v(e), s);
            }
            g(e, "invalid usage");
          }
          function ee(t, e, n) {
            var s = [];
            (l(n), m(s, t, "state_address"));
            var o = f((e = w(s, e, "message_chunk"))),
              a = e.length;
            (s.push(o),
              0 != (0 | r._crypto_hash_sha512_update(t, o, a)) &&
                g(s, "invalid usage"),
              v(s));
          }
          function re(t, e, n, s, a) {
            var i = [];
            (l(a),
              m(i, t, "subkey_len"),
              ("number" != typeof t || (0 | t) !== t || t < 0) &&
                b(i, "subkey_len must be an unsigned integer"),
              m(i, e, "subkey_id"),
              ("number" != typeof e || (0 | e) !== e || e < 0) &&
                b(i, "subkey_id must be an unsigned integer"),
              "string" != typeof n && b(i, "ctx must be a string"),
              (n = o(n + "\0")),
              null != c && n.length - 1 !== c && b(i, "invalid ctx length"));
            var _ = f(n),
              c = n.length - 1;
            (i.push(_), (s = w(i, s, "key")));
            var h,
              p = 0 | r._crypto_kdf_keybytes();
            (s.length !== p && b(i, "invalid key length"),
              (h = f(s)),
              i.push(h));
            var d = new y(0 | t),
              g = d.address;
            (i.push(g),
              r._crypto_kdf_derive_from_key(g, t, e, (e >>> 24) >>> 8, _, h));
            var E = u(d, a);
            return (v(i), E);
          }
          function ne(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_kdf_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_kdf_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function se(t, e, n, s) {
            var o = [];
            (l(s), (t = w(o, t, "clientPublicKey")));
            var a,
              i = 0 | r._crypto_kx_publickeybytes();
            (t.length !== i && b(o, "invalid clientPublicKey length"),
              (a = f(t)),
              o.push(a),
              (e = w(o, e, "clientSecretKey")));
            var _,
              c = 0 | r._crypto_kx_secretkeybytes();
            (e.length !== c && b(o, "invalid clientSecretKey length"),
              (_ = f(e)),
              o.push(_),
              (n = w(o, n, "serverPublicKey")));
            var h,
              p = 0 | r._crypto_kx_publickeybytes();
            (n.length !== p && b(o, "invalid serverPublicKey length"),
              (h = f(n)),
              o.push(h));
            var d = new y(0 | r._crypto_kx_sessionkeybytes()),
              m = d.address;
            o.push(m);
            var E = new y(0 | r._crypto_kx_sessionkeybytes()),
              x = E.address;
            if (
              (o.push(x),
              0 == (0 | r._crypto_kx_client_session_keys(m, x, a, _, h)))
            ) {
              var S = u({ sharedRx: d, sharedTx: E }, s);
              return (v(o), S);
            }
            g(o, "invalid usage");
          }
          function oe(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_kx_publickeybytes()),
              s = n.address;
            e.push(s);
            var o = new y(0 | r._crypto_kx_secretkeybytes()),
              a = o.address;
            if ((e.push(a), 0 == (0 | r._crypto_kx_keypair(s, a)))) {
              var i = {
                publicKey: u(n, t),
                privateKey: u(o, t),
                keyType: "x25519",
              };
              return (v(e), i);
            }
            g(e, "internal error");
          }
          function ae(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "seed")));
            var s,
              o = 0 | r._crypto_kx_seedbytes();
            (t.length !== o && b(n, "invalid seed length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_kx_publickeybytes()),
              i = a.address;
            n.push(i);
            var _ = new y(0 | r._crypto_kx_secretkeybytes()),
              c = _.address;
            if ((n.push(c), 0 == (0 | r._crypto_kx_seed_keypair(i, c, s)))) {
              var h = {
                publicKey: u(a, e),
                privateKey: u(_, e),
                keyType: "x25519",
              };
              return (v(n), h);
            }
            g(n, "internal error");
          }
          function ie(t, e, n, s) {
            var o = [];
            (l(s), (t = w(o, t, "serverPublicKey")));
            var a,
              i = 0 | r._crypto_kx_publickeybytes();
            (t.length !== i && b(o, "invalid serverPublicKey length"),
              (a = f(t)),
              o.push(a),
              (e = w(o, e, "serverSecretKey")));
            var _,
              c = 0 | r._crypto_kx_secretkeybytes();
            (e.length !== c && b(o, "invalid serverSecretKey length"),
              (_ = f(e)),
              o.push(_),
              (n = w(o, n, "clientPublicKey")));
            var h,
              p = 0 | r._crypto_kx_publickeybytes();
            (n.length !== p && b(o, "invalid clientPublicKey length"),
              (h = f(n)),
              o.push(h));
            var d = new y(0 | r._crypto_kx_sessionkeybytes()),
              m = d.address;
            o.push(m);
            var E = new y(0 | r._crypto_kx_sessionkeybytes()),
              x = E.address;
            if (
              (o.push(x),
              0 == (0 | r._crypto_kx_server_session_keys(m, x, a, _, h)))
            ) {
              var S = u({ sharedRx: d, sharedTx: E }, s);
              return (v(o), S);
            }
            g(o, "invalid usage");
          }
          function _e(t, e, n) {
            var s = [];
            l(n);
            var o = f((t = w(s, t, "message"))),
              a = t.length;
            (s.push(o), (e = w(s, e, "key")));
            var i,
              _ = 0 | r._crypto_onetimeauth_keybytes();
            (e.length !== _ && b(s, "invalid key length"),
              (i = f(e)),
              s.push(i));
            var c = new y(0 | r._crypto_onetimeauth_bytes()),
              h = c.address;
            if ((s.push(h), 0 == (0 | r._crypto_onetimeauth(h, o, a, 0, i)))) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "invalid usage");
          }
          function ce(t, e) {
            var n = [];
            (l(e), m(n, t, "state_address"));
            var s = new y(0 | r._crypto_onetimeauth_bytes()),
              o = s.address;
            if ((n.push(o), 0 == (0 | r._crypto_onetimeauth_final(t, o)))) {
              var a = (r._free(t), u(s, e));
              return (v(n), a);
            }
            g(n, "invalid usage");
          }
          function he(t, e) {
            var n = [];
            l(e);
            var s = null;
            null != t && ((s = f((t = w(n, t, "key")))), t.length, n.push(s));
            var o = new y(144).address;
            if (0 == (0 | r._crypto_onetimeauth_init(o, s))) {
              var a = o;
              return (v(n), a);
            }
            g(n, "invalid usage");
          }
          function ue(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_onetimeauth_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_onetimeauth_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function pe(t, e, n) {
            var s = [];
            (l(n), m(s, t, "state_address"));
            var o = f((e = w(s, e, "message_chunk"))),
              a = e.length;
            (s.push(o),
              0 != (0 | r._crypto_onetimeauth_update(t, o, a)) &&
                g(s, "invalid usage"),
              v(s));
          }
          function le(t, e, n) {
            var s = [];
            t = w(s, t, "hash");
            var o,
              a = 0 | r._crypto_onetimeauth_bytes();
            (t.length !== a && b(s, "invalid hash length"),
              (o = f(t)),
              s.push(o));
            var i = f((e = w(s, e, "message"))),
              _ = e.length;
            (s.push(i), (n = w(s, n, "key")));
            var c,
              h = 0 | r._crypto_onetimeauth_keybytes();
            (n.length !== h && b(s, "invalid key length"),
              (c = f(n)),
              s.push(c));
            var u = 0 == (0 | r._crypto_onetimeauth_verify(o, i, _, 0, c));
            return (v(s), u);
          }
          function ye(t, e, n, s, o, a, i) {
            var _ = [];
            (l(i),
              m(_, t, "keyLength"),
              ("number" != typeof t || (0 | t) !== t || t < 0) &&
                b(_, "keyLength must be an unsigned integer"));
            var c = f((e = w(_, e, "password"))),
              h = e.length;
            (_.push(c), (n = w(_, n, "salt")));
            var p,
              d = 0 | r._crypto_pwhash_saltbytes();
            (n.length !== d && b(_, "invalid salt length"),
              (p = f(n)),
              _.push(p),
              m(_, s, "opsLimit"),
              ("number" != typeof s || (0 | s) !== s || s < 0) &&
                b(_, "opsLimit must be an unsigned integer"),
              m(_, o, "memLimit"),
              ("number" != typeof o || (0 | o) !== o || o < 0) &&
                b(_, "memLimit must be an unsigned integer"),
              m(_, a, "algorithm"),
              ("number" != typeof a || (0 | a) !== a || a < 0) &&
                b(_, "algorithm must be an unsigned integer"));
            var E = new y(0 | t),
              x = E.address;
            if (
              (_.push(x),
              0 == (0 | r._crypto_pwhash(x, t, 0, c, h, 0, p, s, 0, o, a)))
            ) {
              var S = u(E, i);
              return (v(_), S);
            }
            g(_, "invalid usage");
          }
          function fe(t, e, n, s, o, a) {
            var i = [];
            (l(a),
              m(i, t, "keyLength"),
              ("number" != typeof t || (0 | t) !== t || t < 0) &&
                b(i, "keyLength must be an unsigned integer"));
            var _ = f((e = w(i, e, "password"))),
              c = e.length;
            (i.push(_), (n = w(i, n, "salt")));
            var h,
              p = 0 | r._crypto_pwhash_scryptsalsa208sha256_saltbytes();
            (n.length !== p && b(i, "invalid salt length"),
              (h = f(n)),
              i.push(h),
              m(i, s, "opsLimit"),
              ("number" != typeof s || (0 | s) !== s || s < 0) &&
                b(i, "opsLimit must be an unsigned integer"),
              m(i, o, "memLimit"),
              ("number" != typeof o || (0 | o) !== o || o < 0) &&
                b(i, "memLimit must be an unsigned integer"));
            var d = new y(0 | t),
              E = d.address;
            if (
              (i.push(E),
              0 ==
                (0 |
                  r._crypto_pwhash_scryptsalsa208sha256(
                    E,
                    t,
                    0,
                    _,
                    c,
                    0,
                    h,
                    s,
                    0,
                    o,
                  )))
            ) {
              var x = u(d, a);
              return (v(i), x);
            }
            g(i, "invalid usage");
          }
          function de(t, e, n, s, o, a, i) {
            var _ = [];
            l(i);
            var c = f((t = w(_, t, "password"))),
              h = t.length;
            _.push(c);
            var p = f((e = w(_, e, "salt"))),
              d = e.length;
            (_.push(p),
              m(_, n, "opsLimit"),
              ("number" != typeof n || (0 | n) !== n || n < 0) &&
                b(_, "opsLimit must be an unsigned integer"),
              m(_, s, "r"),
              ("number" != typeof s || (0 | s) !== s || s < 0) &&
                b(_, "r must be an unsigned integer"),
              m(_, o, "p"),
              ("number" != typeof o || (0 | o) !== o || o < 0) &&
                b(_, "p must be an unsigned integer"),
              m(_, a, "keyLength"),
              ("number" != typeof a || (0 | a) !== a || a < 0) &&
                b(_, "keyLength must be an unsigned integer"));
            var E = new y(0 | a),
              x = E.address;
            if (
              (_.push(x),
              0 ==
                (0 |
                  r._crypto_pwhash_scryptsalsa208sha256_ll(
                    c,
                    h,
                    p,
                    d,
                    n,
                    0,
                    s,
                    o,
                    x,
                    a,
                  )))
            ) {
              var S = u(E, i);
              return (v(_), S);
            }
            g(_, "invalid usage");
          }
          function ve(t, e, n, s) {
            var o = [];
            l(s);
            var a = f((t = w(o, t, "password"))),
              i = t.length;
            (o.push(a),
              m(o, e, "opsLimit"),
              ("number" != typeof e || (0 | e) !== e || e < 0) &&
                b(o, "opsLimit must be an unsigned integer"),
              m(o, n, "memLimit"),
              ("number" != typeof n || (0 | n) !== n || n < 0) &&
                b(o, "memLimit must be an unsigned integer"));
            var _ = new y(0 | r._crypto_pwhash_scryptsalsa208sha256_strbytes())
              .address;
            if (
              (o.push(_),
              0 ==
                (0 |
                  r._crypto_pwhash_scryptsalsa208sha256_str(
                    _,
                    a,
                    i,
                    0,
                    e,
                    0,
                    n,
                  )))
            ) {
              var c = r.UTF8ToString(_);
              return (v(o), c);
            }
            g(o, "invalid usage");
          }
          function ge(t, e, n) {
            var s = [];
            (l(n),
              "string" != typeof t && b(s, "hashed_password must be a string"),
              (t = o(t + "\0")),
              null != i &&
                t.length - 1 !== i &&
                b(s, "invalid hashed_password length"));
            var a = f(t),
              i = t.length - 1;
            s.push(a);
            var _ = f((e = w(s, e, "password"))),
              c = e.length;
            s.push(_);
            var h =
              0 ==
              (0 |
                r._crypto_pwhash_scryptsalsa208sha256_str_verify(a, _, c, 0));
            return (v(s), h);
          }
          function be(t, e, n, s) {
            var o = [];
            l(s);
            var a = f((t = w(o, t, "password"))),
              i = t.length;
            (o.push(a),
              m(o, e, "opsLimit"),
              ("number" != typeof e || (0 | e) !== e || e < 0) &&
                b(o, "opsLimit must be an unsigned integer"),
              m(o, n, "memLimit"),
              ("number" != typeof n || (0 | n) !== n || n < 0) &&
                b(o, "memLimit must be an unsigned integer"));
            var _ = new y(0 | r._crypto_pwhash_strbytes()).address;
            if (
              (o.push(_), 0 == (0 | r._crypto_pwhash_str(_, a, i, 0, e, 0, n)))
            ) {
              var c = r.UTF8ToString(_);
              return (v(o), c);
            }
            g(o, "invalid usage");
          }
          function me(t, e, n, s) {
            var a = [];
            (l(s),
              "string" != typeof t && b(a, "hashed_password must be a string"),
              (t = o(t + "\0")),
              null != _ &&
                t.length - 1 !== _ &&
                b(a, "invalid hashed_password length"));
            var i = f(t),
              _ = t.length - 1;
            (a.push(i),
              m(a, e, "opsLimit"),
              ("number" != typeof e || (0 | e) !== e || e < 0) &&
                b(a, "opsLimit must be an unsigned integer"),
              m(a, n, "memLimit"),
              ("number" != typeof n || (0 | n) !== n || n < 0) &&
                b(a, "memLimit must be an unsigned integer"));
            var c = 0 != (0 | r._crypto_pwhash_str_needs_rehash(i, e, 0, n));
            return (v(a), c);
          }
          function we(t, e, n) {
            var s = [];
            (l(n),
              "string" != typeof t && b(s, "hashed_password must be a string"),
              (t = o(t + "\0")),
              null != i &&
                t.length - 1 !== i &&
                b(s, "invalid hashed_password length"));
            var a = f(t),
              i = t.length - 1;
            s.push(a);
            var _ = f((e = w(s, e, "password"))),
              c = e.length;
            s.push(_);
            var h = 0 == (0 | r._crypto_pwhash_str_verify(a, _, c, 0));
            return (v(s), h);
          }
          function Ee(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "privateKey")));
            var o,
              a = 0 | r._crypto_scalarmult_scalarbytes();
            (t.length !== a && b(s, "invalid privateKey length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "publicKey")));
            var i,
              _ = 0 | r._crypto_scalarmult_bytes();
            (e.length !== _ && b(s, "invalid publicKey length"),
              (i = f(e)),
              s.push(i));
            var c = new y(0 | r._crypto_scalarmult_bytes()),
              h = c.address;
            if ((s.push(h), 0 == (0 | r._crypto_scalarmult(h, o, i)))) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "weak public key");
          }
          function xe(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "privateKey")));
            var s,
              o = 0 | r._crypto_scalarmult_scalarbytes();
            (t.length !== o && b(n, "invalid privateKey length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_scalarmult_bytes()),
              i = a.address;
            if ((n.push(i), 0 == (0 | r._crypto_scalarmult_base(i, s)))) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "unknown error");
          }
          function Se(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "n")));
            var o,
              a = 0 | r._crypto_scalarmult_ed25519_scalarbytes();
            (t.length !== a && b(s, "invalid n length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "p")));
            var i,
              _ = 0 | r._crypto_scalarmult_ed25519_bytes();
            (e.length !== _ && b(s, "invalid p length"), (i = f(e)), s.push(i));
            var c = new y(0 | r._crypto_scalarmult_ed25519_bytes()),
              h = c.address;
            if ((s.push(h), 0 == (0 | r._crypto_scalarmult_ed25519(h, o, i)))) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "invalid point or scalar is 0");
          }
          function ke(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "scalar")));
            var s,
              o = 0 | r._crypto_scalarmult_ed25519_scalarbytes();
            (t.length !== o && b(n, "invalid scalar length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_scalarmult_ed25519_bytes()),
              i = a.address;
            if (
              (n.push(i), 0 == (0 | r._crypto_scalarmult_ed25519_base(i, s)))
            ) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "scalar is 0");
          }
          function Te(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "scalar")));
            var s,
              o = 0 | r._crypto_scalarmult_ed25519_scalarbytes();
            (t.length !== o && b(n, "invalid scalar length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_scalarmult_ed25519_bytes()),
              i = a.address;
            if (
              (n.push(i),
              0 == (0 | r._crypto_scalarmult_ed25519_base_noclamp(i, s)))
            ) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "scalar is 0");
          }
          function Be(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "n")));
            var o,
              a = 0 | r._crypto_scalarmult_ed25519_scalarbytes();
            (t.length !== a && b(s, "invalid n length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "p")));
            var i,
              _ = 0 | r._crypto_scalarmult_ed25519_bytes();
            (e.length !== _ && b(s, "invalid p length"), (i = f(e)), s.push(i));
            var c = new y(0 | r._crypto_scalarmult_ed25519_bytes()),
              h = c.address;
            if (
              (s.push(h),
              0 == (0 | r._crypto_scalarmult_ed25519_noclamp(h, o, i)))
            ) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "invalid point or scalar is 0");
          }
          function Ae(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "scalar")));
            var o,
              a = 0 | r._crypto_scalarmult_ristretto255_scalarbytes();
            (t.length !== a && b(s, "invalid scalar length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "element")));
            var i,
              _ = 0 | r._crypto_scalarmult_ristretto255_bytes();
            (e.length !== _ && b(s, "invalid element length"),
              (i = f(e)),
              s.push(i));
            var c = new y(0 | r._crypto_scalarmult_ristretto255_bytes()),
              h = c.address;
            if (
              (s.push(h), 0 == (0 | r._crypto_scalarmult_ristretto255(h, o, i)))
            ) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "result is identity element");
          }
          function Ye(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "scalar")));
            var s,
              o = 0 | r._crypto_core_ristretto255_scalarbytes();
            (t.length !== o && b(n, "invalid scalar length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_core_ristretto255_bytes()),
              i = a.address;
            if (
              (n.push(i),
              0 == (0 | r._crypto_scalarmult_ristretto255_base(i, s)))
            ) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "scalar is 0");
          }
          function Ne(t, e, n, s) {
            var o = [];
            l(s);
            var a = f((t = w(o, t, "message"))),
              i = t.length;
            (o.push(a), (e = w(o, e, "nonce")));
            var _,
              c = 0 | r._crypto_secretbox_noncebytes();
            (e.length !== c && b(o, "invalid nonce length"),
              (_ = f(e)),
              o.push(_),
              (n = w(o, n, "key")));
            var h,
              p = 0 | r._crypto_secretbox_keybytes();
            (n.length !== p && b(o, "invalid key length"),
              (h = f(n)),
              o.push(h));
            var d = new y(0 | i),
              m = d.address;
            o.push(m);
            var E = new y(0 | r._crypto_secretbox_macbytes()),
              x = E.address;
            if (
              (o.push(x),
              0 == (0 | r._crypto_secretbox_detached(m, x, a, i, 0, _, h)))
            ) {
              var S = u({ mac: E, cipher: d }, s);
              return (v(o), S);
            }
            g(o, "invalid usage");
          }
          function Ie(t, e, n, s) {
            var o = [];
            l(s);
            var a = f((t = w(o, t, "message"))),
              i = t.length;
            (o.push(a), (e = w(o, e, "nonce")));
            var _,
              c = 0 | r._crypto_secretbox_noncebytes();
            (e.length !== c && b(o, "invalid nonce length"),
              (_ = f(e)),
              o.push(_),
              (n = w(o, n, "key")));
            var h,
              p = 0 | r._crypto_secretbox_keybytes();
            (n.length !== p && b(o, "invalid key length"),
              (h = f(n)),
              o.push(h));
            var d = new y((i + r._crypto_secretbox_macbytes()) | 0),
              m = d.address;
            if (
              (o.push(m), 0 == (0 | r._crypto_secretbox_easy(m, a, i, 0, _, h)))
            ) {
              var E = u(d, s);
              return (v(o), E);
            }
            g(o, "invalid usage");
          }
          function Oe(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_secretbox_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_secretbox_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function Le(t, e, n, s, o) {
            var a = [];
            l(o);
            var i = f((t = w(a, t, "ciphertext"))),
              _ = t.length;
            (a.push(i), (e = w(a, e, "mac")));
            var c,
              h = 0 | r._crypto_secretbox_macbytes();
            (e.length !== h && b(a, "invalid mac length"),
              (c = f(e)),
              a.push(c),
              (n = w(a, n, "nonce")));
            var p,
              d = 0 | r._crypto_secretbox_noncebytes();
            (n.length !== d && b(a, "invalid nonce length"),
              (p = f(n)),
              a.push(p),
              (s = w(a, s, "key")));
            var m,
              E = 0 | r._crypto_secretbox_keybytes();
            (s.length !== E && b(a, "invalid key length"),
              (m = f(s)),
              a.push(m));
            var x = new y(0 | _),
              S = x.address;
            if (
              (a.push(S),
              0 == (0 | r._crypto_secretbox_open_detached(S, i, c, _, 0, p, m)))
            ) {
              var k = u(x, o);
              return (v(a), k);
            }
            g(a, "wrong secret key for the given ciphertext");
          }
          function Me(t, e, n, s) {
            var o = [];
            (l(s), (t = w(o, t, "ciphertext")));
            var a,
              i = r._crypto_secretbox_macbytes(),
              _ = t.length;
            (_ < i && b(o, "ciphertext is too short"),
              (a = f(t)),
              o.push(a),
              (e = w(o, e, "nonce")));
            var c,
              h = 0 | r._crypto_secretbox_noncebytes();
            (e.length !== h && b(o, "invalid nonce length"),
              (c = f(e)),
              o.push(c),
              (n = w(o, n, "key")));
            var p,
              d = 0 | r._crypto_secretbox_keybytes();
            (n.length !== d && b(o, "invalid key length"),
              (p = f(n)),
              o.push(p));
            var m = new y((_ - r._crypto_secretbox_macbytes()) | 0),
              E = m.address;
            if (
              (o.push(E),
              0 == (0 | r._crypto_secretbox_open_easy(E, a, _, 0, c, p)))
            ) {
              var x = u(m, s);
              return (v(o), x);
            }
            g(o, "wrong secret key for the given ciphertext");
          }
          function Ue(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "header")));
            var o,
              a = 0 | r._crypto_secretstream_xchacha20poly1305_headerbytes();
            (t.length !== a && b(s, "invalid header length"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "key")));
            var i,
              _ = 0 | r._crypto_secretstream_xchacha20poly1305_keybytes();
            (e.length !== _ && b(s, "invalid key length"),
              (i = f(e)),
              s.push(i));
            var c = new y(52).address;
            if (
              0 ==
              (0 | r._crypto_secretstream_xchacha20poly1305_init_pull(c, o, i))
            ) {
              var h = c;
              return (v(s), h);
            }
            g(s, "invalid usage");
          }
          function Ke(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "key")));
            var s,
              o = 0 | r._crypto_secretstream_xchacha20poly1305_keybytes();
            (t.length !== o && b(n, "invalid key length"),
              (s = f(t)),
              n.push(s));
            var a = new y(52).address,
              i = new y(
                0 | r._crypto_secretstream_xchacha20poly1305_headerbytes(),
              ),
              _ = i.address;
            if (
              (n.push(_),
              0 ==
                (0 |
                  r._crypto_secretstream_xchacha20poly1305_init_push(a, _, s)))
            ) {
              var c = { state: a, header: u(i, e) };
              return (v(n), c);
            }
            g(n, "invalid usage");
          }
          function Pe(t) {
            var e = [];
            l(t);
            var n = new y(
                0 | r._crypto_secretstream_xchacha20poly1305_keybytes(),
              ),
              s = n.address;
            (e.push(s), r._crypto_secretstream_xchacha20poly1305_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function Re(t, e, n, s) {
            var o = [];
            (l(s), m(o, t, "state_address"), (e = w(o, e, "cipher")));
            var a,
              i = r._crypto_secretstream_xchacha20poly1305_abytes(),
              _ = e.length;
            (_ < i && b(o, "cipher is too short"), (a = f(e)), o.push(a));
            var c = null,
              h = 0;
            null != n &&
              ((c = f((n = w(o, n, "ad")))), (h = n.length), o.push(c));
            var p = new y(
                (_ - r._crypto_secretstream_xchacha20poly1305_abytes()) | 0,
              ),
              g = p.address;
            o.push(g);
            var E,
              x =
                ((E = d(1)),
                o.push(E),
                (x = 0 ===
                  r._crypto_secretstream_xchacha20poly1305_pull(
                    t,
                    g,
                    0,
                    E,
                    a,
                    _,
                    0,
                    c,
                    h,
                  ) && { tag: r.HEAPU8[E], message: p }) && {
                  message: u(x.message, s),
                  tag: x.tag,
                });
            return (v(o), x);
          }
          function Ce(t, e, n, s, o) {
            var a = [];
            (l(o), m(a, t, "state_address"));
            var i = f((e = w(a, e, "message_chunk"))),
              _ = e.length;
            a.push(i);
            var c = null,
              h = 0;
            (null != n &&
              ((c = f((n = w(a, n, "ad")))), (h = n.length), a.push(c)),
              m(a, s, "tag"),
              ("number" != typeof s || (0 | s) !== s || s < 0) &&
                b(a, "tag must be an unsigned integer"));
            var p = new y(
                (_ + r._crypto_secretstream_xchacha20poly1305_abytes()) | 0,
              ),
              d = p.address;
            if (
              (a.push(d),
              0 ==
                (0 |
                  r._crypto_secretstream_xchacha20poly1305_push(
                    t,
                    d,
                    0,
                    i,
                    _,
                    0,
                    c,
                    h,
                    0,
                    s,
                  )))
            ) {
              var E = u(p, o);
              return (v(a), E);
            }
            g(a, "invalid usage");
          }
          function De(t, e) {
            var n = [];
            return (
              l(e),
              m(n, t, "state_address"),
              r._crypto_secretstream_xchacha20poly1305_rekey(t),
              v(n),
              !0
            );
          }
          function Fe(t, e, n) {
            var s = [];
            l(n);
            var o = f((t = w(s, t, "message"))),
              a = t.length;
            (s.push(o), (e = w(s, e, "key")));
            var i,
              _ = 0 | r._crypto_shorthash_keybytes();
            (e.length !== _ && b(s, "invalid key length"),
              (i = f(e)),
              s.push(i));
            var c = new y(0 | r._crypto_shorthash_bytes()),
              h = c.address;
            if ((s.push(h), 0 == (0 | r._crypto_shorthash(h, o, a, 0, i)))) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "invalid usage");
          }
          function Ge(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_shorthash_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_shorthash_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function qe(t, e, n) {
            var s = [];
            l(n);
            var o = f((t = w(s, t, "message"))),
              a = t.length;
            (s.push(o), (e = w(s, e, "key")));
            var i,
              _ = 0 | r._crypto_shorthash_siphashx24_keybytes();
            (e.length !== _ && b(s, "invalid key length"),
              (i = f(e)),
              s.push(i));
            var c = new y(0 | r._crypto_shorthash_siphashx24_bytes()),
              h = c.address;
            if (
              (s.push(h),
              0 == (0 | r._crypto_shorthash_siphashx24(h, o, a, 0, i)))
            ) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "invalid usage");
          }
          function je(t, e, n) {
            var s = [];
            l(n);
            var o = f((t = w(s, t, "message"))),
              a = t.length;
            (s.push(o), (e = w(s, e, "privateKey")));
            var i,
              _ = 0 | r._crypto_sign_secretkeybytes();
            (e.length !== _ && b(s, "invalid privateKey length"),
              (i = f(e)),
              s.push(i));
            var c = new y((t.length + r._crypto_sign_bytes()) | 0),
              h = c.address;
            if ((s.push(h), 0 == (0 | r._crypto_sign(h, null, o, a, 0, i)))) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "invalid usage");
          }
          function Xe(t, e, n) {
            var s = [];
            l(n);
            var o = f((t = w(s, t, "message"))),
              a = t.length;
            (s.push(o), (e = w(s, e, "privateKey")));
            var i,
              _ = 0 | r._crypto_sign_secretkeybytes();
            (e.length !== _ && b(s, "invalid privateKey length"),
              (i = f(e)),
              s.push(i));
            var c = new y(0 | r._crypto_sign_bytes()),
              h = c.address;
            if (
              (s.push(h),
              0 == (0 | r._crypto_sign_detached(h, null, o, a, 0, i)))
            ) {
              var p = u(c, n);
              return (v(s), p);
            }
            g(s, "invalid usage");
          }
          function ze(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "edPk")));
            var s,
              o = 0 | r._crypto_sign_publickeybytes();
            (t.length !== o && b(n, "invalid edPk length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_scalarmult_scalarbytes()),
              i = a.address;
            if (
              (n.push(i),
              0 == (0 | r._crypto_sign_ed25519_pk_to_curve25519(i, s)))
            ) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "invalid key");
          }
          function We(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "edSk")));
            var s,
              o = 0 | r._crypto_sign_secretkeybytes();
            (t.length !== o && b(n, "invalid edSk length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_scalarmult_scalarbytes()),
              i = a.address;
            if (
              (n.push(i),
              0 == (0 | r._crypto_sign_ed25519_sk_to_curve25519(i, s)))
            ) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "invalid key");
          }
          function He(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "privateKey")));
            var s,
              o = 0 | r._crypto_sign_secretkeybytes();
            (t.length !== o && b(n, "invalid privateKey length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_sign_publickeybytes()),
              i = a.address;
            if ((n.push(i), 0 == (0 | r._crypto_sign_ed25519_sk_to_pk(i, s)))) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "invalid key");
          }
          function Je(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "privateKey")));
            var s,
              o = 0 | r._crypto_sign_secretkeybytes();
            (t.length !== o && b(n, "invalid privateKey length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_sign_seedbytes()),
              i = a.address;
            if (
              (n.push(i), 0 == (0 | r._crypto_sign_ed25519_sk_to_seed(i, s)))
            ) {
              var _ = u(a, e);
              return (v(n), _);
            }
            g(n, "invalid key");
          }
          function Ve(t, e, n) {
            var s = [];
            (l(n), m(s, t, "state_address"), (e = w(s, e, "privateKey")));
            var o,
              a = 0 | r._crypto_sign_secretkeybytes();
            (e.length !== a && b(s, "invalid privateKey length"),
              (o = f(e)),
              s.push(o));
            var i = new y(0 | r._crypto_sign_bytes()),
              _ = i.address;
            if (
              (s.push(_), 0 == (0 | r._crypto_sign_final_create(t, _, null, o)))
            ) {
              var c = (r._free(t), u(i, n));
              return (v(s), c);
            }
            g(s, "invalid usage");
          }
          function Ze(t, e, n, s) {
            var o = [];
            (l(s), m(o, t, "state_address"), (e = w(o, e, "signature")));
            var a,
              i = 0 | r._crypto_sign_bytes();
            (e.length !== i && b(o, "invalid signature length"),
              (a = f(e)),
              o.push(a),
              (n = w(o, n, "publicKey")));
            var _,
              c = 0 | r._crypto_sign_publickeybytes();
            (n.length !== c && b(o, "invalid publicKey length"),
              (_ = f(n)),
              o.push(_));
            var h = 0 == (0 | r._crypto_sign_final_verify(t, a, _));
            return (v(o), h);
          }
          function $e(t) {
            var e = [];
            l(t);
            var n = new y(208).address;
            if (0 == (0 | r._crypto_sign_init(n))) {
              var s = n;
              return (v(e), s);
            }
            g(e, "internal error");
          }
          function Qe(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_sign_publickeybytes()),
              s = n.address;
            e.push(s);
            var o = new y(0 | r._crypto_sign_secretkeybytes()),
              a = o.address;
            if ((e.push(a), 0 == (0 | r._crypto_sign_keypair(s, a)))) {
              var i = {
                publicKey: u(n, t),
                privateKey: u(o, t),
                keyType: "ed25519",
              };
              return (v(e), i);
            }
            g(e, "internal error");
          }
          function tr(t, e, n) {
            var s = [];
            (l(n), (t = w(s, t, "signedMessage")));
            var o,
              a = r._crypto_sign_bytes(),
              i = t.length;
            (i < a && b(s, "signedMessage is too short"),
              (o = f(t)),
              s.push(o),
              (e = w(s, e, "publicKey")));
            var _,
              c = 0 | r._crypto_sign_publickeybytes();
            (e.length !== c && b(s, "invalid publicKey length"),
              (_ = f(e)),
              s.push(_));
            var h = new y((i - r._crypto_sign_bytes()) | 0),
              p = h.address;
            if (
              (s.push(p), 0 == (0 | r._crypto_sign_open(p, null, o, i, 0, _)))
            ) {
              var d = u(h, n);
              return (v(s), d);
            }
            g(s, "incorrect signature for the given public key");
          }
          function er(t, e) {
            var n = [];
            (l(e), (t = w(n, t, "seed")));
            var s,
              o = 0 | r._crypto_sign_seedbytes();
            (t.length !== o && b(n, "invalid seed length"),
              (s = f(t)),
              n.push(s));
            var a = new y(0 | r._crypto_sign_publickeybytes()),
              i = a.address;
            n.push(i);
            var _ = new y(0 | r._crypto_sign_secretkeybytes()),
              c = _.address;
            if ((n.push(c), 0 == (0 | r._crypto_sign_seed_keypair(i, c, s)))) {
              var h = {
                publicKey: u(a, e),
                privateKey: u(_, e),
                keyType: "ed25519",
              };
              return (v(n), h);
            }
            g(n, "invalid usage");
          }
          function rr(t, e, n) {
            var s = [];
            (l(n), m(s, t, "state_address"));
            var o = f((e = w(s, e, "message_chunk"))),
              a = e.length;
            (s.push(o),
              0 != (0 | r._crypto_sign_update(t, o, a, 0)) &&
                g(s, "invalid usage"),
              v(s));
          }
          function nr(t, e, n) {
            var s = [];
            t = w(s, t, "signature");
            var o,
              a = 0 | r._crypto_sign_bytes();
            (t.length !== a && b(s, "invalid signature length"),
              (o = f(t)),
              s.push(o));
            var i = f((e = w(s, e, "message"))),
              _ = e.length;
            (s.push(i), (n = w(s, n, "publicKey")));
            var c,
              h = 0 | r._crypto_sign_publickeybytes();
            (n.length !== h && b(s, "invalid publicKey length"),
              (c = f(n)),
              s.push(c));
            var u = 0 == (0 | r._crypto_sign_verify_detached(o, i, _, 0, c));
            return (v(s), u);
          }
          function sr(t, e, n, s) {
            var o = [];
            (l(s),
              m(o, t, "outLength"),
              ("number" != typeof t || (0 | t) !== t || t < 0) &&
                b(o, "outLength must be an unsigned integer"),
              (e = w(o, e, "key")));
            var a,
              i = 0 | r._crypto_stream_chacha20_keybytes();
            (e.length !== i && b(o, "invalid key length"),
              (a = f(e)),
              o.push(a),
              (n = w(o, n, "nonce")));
            var _,
              c = 0 | r._crypto_stream_chacha20_noncebytes();
            (n.length !== c && b(o, "invalid nonce length"),
              (_ = f(n)),
              o.push(_));
            var h = new y(0 | t),
              p = h.address;
            (o.push(p), r._crypto_stream_chacha20(p, t, 0, _, a));
            var d = u(h, s);
            return (v(o), d);
          }
          function or(t, e, n, s) {
            var o = [];
            l(s);
            var a = f((t = w(o, t, "input_message"))),
              i = t.length;
            (o.push(a), (e = w(o, e, "nonce")));
            var _,
              c = 0 | r._crypto_stream_chacha20_ietf_noncebytes();
            (e.length !== c && b(o, "invalid nonce length"),
              (_ = f(e)),
              o.push(_),
              (n = w(o, n, "key")));
            var h,
              p = 0 | r._crypto_stream_chacha20_ietf_keybytes();
            (n.length !== p && b(o, "invalid key length"),
              (h = f(n)),
              o.push(h));
            var d = new y(0 | i),
              m = d.address;
            if (
              (o.push(m),
              0 === r._crypto_stream_chacha20_ietf_xor(m, a, i, 0, _, h))
            ) {
              var E = u(d, s);
              return (v(o), E);
            }
            g(o, "invalid usage");
          }
          function ar(t, e, n, s, o) {
            var a = [];
            l(o);
            var i = f((t = w(a, t, "input_message"))),
              _ = t.length;
            (a.push(i), (e = w(a, e, "nonce")));
            var c,
              h = 0 | r._crypto_stream_chacha20_ietf_noncebytes();
            (e.length !== h && b(a, "invalid nonce length"),
              (c = f(e)),
              a.push(c),
              m(a, n, "nonce_increment"),
              ("number" != typeof n || (0 | n) !== n || n < 0) &&
                b(a, "nonce_increment must be an unsigned integer"),
              (s = w(a, s, "key")));
            var p,
              d = 0 | r._crypto_stream_chacha20_ietf_keybytes();
            (s.length !== d && b(a, "invalid key length"),
              (p = f(s)),
              a.push(p));
            var E = new y(0 | _),
              x = E.address;
            if (
              (a.push(x),
              0 === r._crypto_stream_chacha20_ietf_xor_ic(x, i, _, 0, c, n, p))
            ) {
              var S = u(E, o);
              return (v(a), S);
            }
            g(a, "invalid usage");
          }
          function ir(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_stream_chacha20_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_stream_chacha20_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function _r(t, e, n, s) {
            var o = [];
            l(s);
            var a = f((t = w(o, t, "input_message"))),
              i = t.length;
            (o.push(a), (e = w(o, e, "nonce")));
            var _,
              c = 0 | r._crypto_stream_chacha20_noncebytes();
            (e.length !== c && b(o, "invalid nonce length"),
              (_ = f(e)),
              o.push(_),
              (n = w(o, n, "key")));
            var h,
              p = 0 | r._crypto_stream_chacha20_keybytes();
            (n.length !== p && b(o, "invalid key length"),
              (h = f(n)),
              o.push(h));
            var d = new y(0 | i),
              m = d.address;
            if (
              (o.push(m), 0 === r._crypto_stream_chacha20_xor(m, a, i, 0, _, h))
            ) {
              var E = u(d, s);
              return (v(o), E);
            }
            g(o, "invalid usage");
          }
          function cr(t, e, n, s, o) {
            var a = [];
            l(o);
            var i = f((t = w(a, t, "input_message"))),
              _ = t.length;
            (a.push(i), (e = w(a, e, "nonce")));
            var c,
              h = 0 | r._crypto_stream_chacha20_noncebytes();
            (e.length !== h && b(a, "invalid nonce length"),
              (c = f(e)),
              a.push(c),
              m(a, n, "nonce_increment"),
              ("number" != typeof n || (0 | n) !== n || n < 0) &&
                b(a, "nonce_increment must be an unsigned integer"),
              (s = w(a, s, "key")));
            var p,
              d = 0 | r._crypto_stream_chacha20_keybytes();
            (s.length !== d && b(a, "invalid key length"),
              (p = f(s)),
              a.push(p));
            var E = new y(0 | _),
              x = E.address;
            if (
              (a.push(x),
              0 === r._crypto_stream_chacha20_xor_ic(x, i, _, 0, c, n, 0, p))
            ) {
              var S = u(E, o);
              return (v(a), S);
            }
            g(a, "invalid usage");
          }
          function hr(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_stream_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_stream_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function ur(t) {
            var e = [];
            l(t);
            var n = new y(0 | r._crypto_stream_xchacha20_keybytes()),
              s = n.address;
            (e.push(s), r._crypto_stream_xchacha20_keygen(s));
            var o = u(n, t);
            return (v(e), o);
          }
          function pr(t, e, n, s) {
            var o = [];
            l(s);
            var a = f((t = w(o, t, "input_message"))),
              i = t.length;
            (o.push(a), (e = w(o, e, "nonce")));
            var _,
              c = 0 | r._crypto_stream_xchacha20_noncebytes();
            (e.length !== c && b(o, "invalid nonce length"),
              (_ = f(e)),
              o.push(_),
              (n = w(o, n, "key")));
            var h,
              p = 0 | r._crypto_stream_xchacha20_keybytes();
            (n.length !== p && b(o, "invalid key length"),
              (h = f(n)),
              o.push(h));
            var d = new y(0 | i),
              m = d.address;
            if (
              (o.push(m),
              0 === r._crypto_stream_xchacha20_xor(m, a, i, 0, _, h))
            ) {
              var E = u(d, s);
              return (v(o), E);
            }
            g(o, "invalid usage");
          }
          function lr(t, e, n, s, o) {
            var a = [];
            l(o);
            var i = f((t = w(a, t, "input_message"))),
              _ = t.length;
            (a.push(i), (e = w(a, e, "nonce")));
            var c,
              h = 0 | r._crypto_stream_xchacha20_noncebytes();
            (e.length !== h && b(a, "invalid nonce length"),
              (c = f(e)),
              a.push(c),
              m(a, n, "nonce_increment"),
              ("number" != typeof n || (0 | n) !== n || n < 0) &&
                b(a, "nonce_increment must be an unsigned integer"),
              (s = w(a, s, "key")));
            var p,
              d = 0 | r._crypto_stream_xchacha20_keybytes();
            (s.length !== d && b(a, "invalid key length"),
              (p = f(s)),
              a.push(p));
            var E = new y(0 | _),
              x = E.address;
            if (
              (a.push(x),
              0 === r._crypto_stream_xchacha20_xor_ic(x, i, _, 0, c, n, 0, p))
            ) {
              var S = u(E, o);
              return (v(a), S);
            }
            g(a, "invalid usage");
          }
          function yr(t, e) {
            var n = [];
            (l(e),
              m(n, t, "length"),
              ("number" != typeof t || (0 | t) !== t || t < 0) &&
                b(n, "length must be an unsigned integer"));
            var s = new y(0 | t),
              o = s.address;
            (n.push(o), r._randombytes_buf(o, t));
            var a = u(s, e);
            return (v(n), a);
          }
          function fr(t, e, n) {
            var s = [];
            (l(n),
              m(s, t, "length"),
              ("number" != typeof t || (0 | t) !== t || t < 0) &&
                b(s, "length must be an unsigned integer"),
              (e = w(s, e, "seed")));
            var o,
              a = 0 | r._randombytes_seedbytes();
            (e.length !== a && b(s, "invalid seed length"),
              (o = f(e)),
              s.push(o));
            var i = new y(0 | t),
              _ = i.address;
            (s.push(_), r._randombytes_buf_deterministic(_, t, o));
            var c = u(i, n);
            return (v(s), c);
          }
          function dr(t) {
            (l(t), r._randombytes_close());
          }
          function vr(t) {
            l(t);
            var e = r._randombytes_random() >>> 0;
            return (v([]), e);
          }
          function gr(t, e) {
            var n = [];
            l(e);
            for (var s = r._malloc(24), o = 0; o < 6; o++)
              r.setValue(
                s + 4 * o,
                r.Runtime.addFunction(
                  t[
                    [
                      "implementation_name",
                      "random",
                      "stir",
                      "uniform",
                      "buf",
                      "close",
                    ][o]
                  ],
                ),
                "i32",
              );
            (0 != (0 | r._randombytes_set_implementation(s)) &&
              g(n, "unsupported implementation"),
              v(n));
          }
          function br(t) {
            (l(t), r._randombytes_stir());
          }
          function mr(t, e) {
            var n = [];
            (l(e),
              m(n, t, "upper_bound"),
              ("number" != typeof t || (0 | t) !== t || t < 0) &&
                b(n, "upper_bound must be an unsigned integer"));
            var s = r._randombytes_uniform(t) >>> 0;
            return (v(n), s);
          }
          function wr() {
            var t = r._sodium_version_string(),
              e = r.UTF8ToString(t);
            return (v([]), e);
          }
          return (
            (y.prototype.to_Uint8Array = function () {
              var t = new Uint8Array(this.length);
              return (
                t.set(
                  r.HEAPU8.subarray(this.address, this.address + this.length),
                ),
                t
              );
            }),
            (t.add = function (t, e) {
              if (!(t instanceof Uint8Array && e instanceof Uint8Array))
                throw new TypeError("Only Uint8Array instances can added");
              var r = t.length,
                n = 0,
                s = 0;
              if (e.length != t.length)
                throw new TypeError("Arguments must have the same length");
              for (s = 0; s < r; s++)
                ((n >>= 8), (n += t[s] + e[s]), (t[s] = 255 & n));
            }),
            (t.base64_variants = _),
            (t.compare = function (t, e) {
              if (!(t instanceof Uint8Array && e instanceof Uint8Array))
                throw new TypeError(
                  "Only Uint8Array instances can be compared",
                );
              if (t.length !== e.length)
                throw new TypeError(
                  "Only instances of identical length can be compared",
                );
              for (var r = 0, n = 1, s = t.length; s-- > 0; )
                ((r |= ((e[s] - t[s]) >> 8) & n),
                  (n &= ((e[s] ^ t[s]) - 1) >> 8));
              return r + r + n - 1;
            }),
            (t.from_base64 = function (t, e) {
              e = c(e);
              var n,
                s = [],
                o = new y((3 * (t = w(s, t, "input")).length) / 4),
                a = f(t),
                i = d(4),
                _ = d(4);
              return (
                s.push(a),
                s.push(o.address),
                s.push(o.result_bin_len_p),
                s.push(o.b64_end_p),
                0 !==
                  r._sodium_base642bin(
                    o.address,
                    o.length,
                    a,
                    t.length,
                    0,
                    i,
                    _,
                    e,
                  ) && g(s, "invalid input"),
                r.getValue(_, "i32") - a !== t.length &&
                  g(s, "incomplete input"),
                (o.length = r.getValue(i, "i32")),
                (n = o.to_Uint8Array()),
                v(s),
                n
              );
            }),
            (t.from_hex = function (t) {
              var e,
                n = [],
                s = new y((t = w(n, t, "input")).length / 2),
                o = f(t),
                a = d(4);
              return (
                n.push(o),
                n.push(s.address),
                n.push(s.hex_end_p),
                0 !==
                  r._sodium_hex2bin(
                    s.address,
                    s.length,
                    o,
                    t.length,
                    0,
                    0,
                    a,
                  ) && g(n, "invalid input"),
                r.getValue(a, "i32") - o !== t.length &&
                  g(n, "incomplete input"),
                (e = s.to_Uint8Array()),
                v(n),
                e
              );
            }),
            (t.from_string = o),
            (t.increment = function (t) {
              if (!(t instanceof Uint8Array))
                throw new TypeError(
                  "Only Uint8Array instances can be incremented",
                );
              for (var e = 256, r = 0, n = t.length; r < n; r++)
                ((e >>= 8), (e += t[r]), (t[r] = 255 & e));
            }),
            (t.is_zero = function (t) {
              if (!(t instanceof Uint8Array))
                throw new TypeError("Only Uint8Array instances can be checked");
              for (var e = 0, r = 0, n = t.length; r < n; r++) e |= t[r];
              return 0 === e;
            }),
            (t.libsodium = e),
            (t.memcmp = function (t, e) {
              if (!(t instanceof Uint8Array && e instanceof Uint8Array))
                throw new TypeError(
                  "Only Uint8Array instances can be compared",
                );
              if (t.length !== e.length)
                throw new TypeError(
                  "Only instances of identical length can be compared",
                );
              for (var r = 0, n = 0, s = t.length; n < s; n++) r |= t[n] ^ e[n];
              return 0 === r;
            }),
            (t.memzero = function (t) {
              if (!(t instanceof Uint8Array))
                throw new TypeError("Only Uint8Array instances can be wiped");
              for (var e = 0, r = t.length; e < r; e++) t[e] = 0;
            }),
            (t.output_formats = function () {
              return ["uint8array", "text", "hex", "base64"];
            }),
            (t.pad = function (t, e) {
              if (!(t instanceof Uint8Array))
                throw new TypeError("buffer must be a Uint8Array");
              if ((e |= 0) <= 0) throw new Error("block size must be > 0");
              var n,
                s = [],
                o = d(4),
                a = 1,
                i = 0,
                _ = 0 | t.length,
                c = new y(_ + e);
              (s.push(o), s.push(c.address));
              for (var h = c.address, u = c.address + _ + e; h < u; h++)
                ((r.HEAPU8[h] = t[i]),
                  (i += a =
                    1 &
                    ~(
                      ((65535 &
                        (((_ -= a) >>> 48) | (_ >>> 32) | (_ >>> 16) | _)) -
                        1) >>
                      16
                    )));
              return (
                0 !== r._sodium_pad(o, c.address, t.length, e, c.length) &&
                  g(s, "internal error"),
                (c.length = r.getValue(o, "i32")),
                (n = c.to_Uint8Array()),
                v(s),
                n
              );
            }),
            (t.unpad = function (t, e) {
              if (!(t instanceof Uint8Array))
                throw new TypeError("buffer must be a Uint8Array");
              if ((e |= 0) <= 0) throw new Error("block size must be > 0");
              var n = [],
                s = f(t),
                o = d(4);
              return (
                n.push(s),
                n.push(o),
                0 !== r._sodium_unpad(o, s, t.length, e) &&
                  g(n, "unsupported/invalid padding"),
                (t = (t = new Uint8Array(t)).subarray(0, r.getValue(o, "i32"))),
                v(n),
                t
              );
            }),
            (t.ready = s),
            (t.symbols = function () {
              return Object.keys(t).sort();
            }),
            (t.to_base64 = h),
            (t.to_hex = i),
            (t.to_string = a),
            t
          );
        }
        var _ =
          "object" == typeof a.sodium && "function" == typeof a.sodium.onload
            ? a.sodium.onload
            : null;
        ((s = [e, r(3771)]),
          (n = i),
          (o = "function" === typeof n ? n.apply(e, s) : n),
          void 0 !== o && (t.exports = o),
          _ &&
            a.sodium.ready.then(function () {
              _(a.sodium);
            }));
      })(this);
    },
    3657: function (t, e, r) {
      "use strict";
      var n = r(818),
        s = function () {
          return !!n;
        };
      ((s.hasArrayLengthDefineBug = function () {
        if (!n) return null;
        try {
          return 1 !== n([], "length", { value: 1 }).length;
        } catch (t) {
          return !0;
        }
      }),
        (t.exports = s));
    },
    4417: function (t, e, r) {
      t.exports = r(4418);
    },
    4418: function (t, e, r) {
      "use strict";
      function n(t) {
        var e,
          r = t.Symbol;
        if ("function" === typeof r)
          if (r.observable) e = r.observable;
          else {
            e = r["for"]("https://github.com/benlesh/symbol-observable");
            try {
              r.observable = e;
            } catch (n) {}
          }
        else e = "@@observable";
        return e;
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e["default"] = n));
    },
    4454: function (t, e, r) {
      (function (e) {
        var r = null;
        ("undefined" !== typeof WebSocket
          ? (r = WebSocket)
          : "undefined" !== typeof MozWebSocket
            ? (r = MozWebSocket)
            : "undefined" !== typeof e
              ? (r = e.WebSocket || e.MozWebSocket)
              : "undefined" !== typeof window
                ? (r = window.WebSocket || window.MozWebSocket)
                : "undefined" !== typeof self &&
                  (r = self.WebSocket || self.MozWebSocket),
          (t.exports = r));
      }).call(this, r(13));
    },
  },
]);
