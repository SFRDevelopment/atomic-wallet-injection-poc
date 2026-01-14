(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [272],
  {
    2754: function (t, e) {
      t.exports = r;
      var n = null;
      try {
        n = new WebAssembly.Instance(
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
      function r(t, e, n) {
        ((this.low = 0 | t), (this.high = 0 | e), (this.unsigned = !!n));
      }
      function i(t) {
        return !0 === (t && t["__isLong__"]);
      }
      (r.prototype.__isLong__,
        Object.defineProperty(r.prototype, "__isLong__", { value: !0 }),
        (r.isLong = i));
      var s = {},
        o = {};
      function a(t, e) {
        var n, r, i;
        return e
          ? ((t >>>= 0),
            (i = 0 <= t && t < 256) && ((r = o[t]), r)
              ? r
              : ((n = c(t, (0 | t) < 0 ? -1 : 0, !0)), i && (o[t] = n), n))
          : ((t |= 0),
            (i = -128 <= t && t < 128) && ((r = s[t]), r)
              ? r
              : ((n = c(t, t < 0 ? -1 : 0, !1)), i && (s[t] = n), n));
      }
      function u(t, e) {
        if (isNaN(t)) return e ? w : b;
        if (e) {
          if (t < 0) return w;
          if (t >= _) return A;
        } else {
          if (t <= -y) return S;
          if (t + 1 >= y) return I;
        }
        return t < 0 ? u(-t, e).neg() : c((t % p) | 0, (t / p) | 0, e);
      }
      function c(t, e, n) {
        return new r(t, e, n);
      }
      ((r.fromInt = a), (r.fromNumber = u), (r.fromBits = c));
      var l = Math.pow;
      function h(t, e, n) {
        if (0 === t.length) throw Error("empty string");
        if (
          "NaN" === t ||
          "Infinity" === t ||
          "+Infinity" === t ||
          "-Infinity" === t
        )
          return b;
        if (
          ("number" === typeof e ? ((n = e), (e = !1)) : (e = !!e),
          (n = n || 10),
          n < 2 || 36 < n)
        )
          throw RangeError("radix");
        var r;
        if ((r = t.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === r) return h(t.substring(1), e, n).neg();
        for (var i = u(l(n, 8)), s = b, o = 0; o < t.length; o += 8) {
          var a = Math.min(8, t.length - o),
            c = parseInt(t.substring(o, o + a), n);
          if (a < 8) {
            var f = u(l(n, a));
            s = s.mul(f).add(u(c));
          } else ((s = s.mul(i)), (s = s.add(u(c))));
        }
        return ((s.unsigned = e), s);
      }
      function f(t, e) {
        return "number" === typeof t
          ? u(t, e)
          : "string" === typeof t
            ? h(t, e)
            : c(t.low, t.high, "boolean" === typeof e ? e : t.unsigned);
      }
      ((r.fromString = h), (r.fromValue = f));
      var d = 65536,
        g = 1 << 24,
        p = d * d,
        _ = p * p,
        y = _ / 2,
        m = a(g),
        b = a(0);
      r.ZERO = b;
      var w = a(0, !0);
      r.UZERO = w;
      var v = a(1);
      r.ONE = v;
      var T = a(1, !0);
      r.UONE = T;
      var R = a(-1);
      r.NEG_ONE = R;
      var I = c(-1, 2147483647, !1);
      r.MAX_VALUE = I;
      var A = c(-1, -1, !0);
      r.MAX_UNSIGNED_VALUE = A;
      var S = c(0, -2147483648, !1);
      r.MIN_VALUE = S;
      var E = r.prototype;
      ((E.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
      }),
        (E.toNumber = function () {
          return this.unsigned
            ? (this.high >>> 0) * p + (this.low >>> 0)
            : this.high * p + (this.low >>> 0);
        }),
        (E.toString = function (t) {
          if (((t = t || 10), t < 2 || 36 < t)) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative()) {
            if (this.eq(S)) {
              var e = u(t),
                n = this.div(e),
                r = n.mul(e).sub(this);
              return n.toString(t) + r.toInt().toString(t);
            }
            return "-" + this.neg().toString(t);
          }
          var i = u(l(t, 6), this.unsigned),
            s = this,
            o = "";
          while (1) {
            var a = s.div(i),
              c = s.sub(a.mul(i)).toInt() >>> 0,
              h = c.toString(t);
            if (((s = a), s.isZero())) return h + o;
            while (h.length < 6) h = "0" + h;
            o = "" + h + o;
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
            return this.eq(S) ? 64 : this.neg().getNumBitsAbs();
          for (
            var t = 0 != this.high ? this.high : this.low, e = 31;
            e > 0;
            e--
          )
            if (0 != (t & (1 << e))) break;
          return 0 != this.high ? e + 33 : e + 1;
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
            i(t) || (t = f(t)),
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
          if ((i(t) || (t = f(t)), this.eq(t))) return 0;
          var e = this.isNegative(),
            n = t.isNegative();
          return e && !n
            ? -1
            : !e && n
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
          return !this.unsigned && this.eq(S) ? S : this.not().add(v);
        }),
        (E.neg = E.negate),
        (E.add = function (t) {
          i(t) || (t = f(t));
          var e = this.high >>> 16,
            n = 65535 & this.high,
            r = this.low >>> 16,
            s = 65535 & this.low,
            o = t.high >>> 16,
            a = 65535 & t.high,
            u = t.low >>> 16,
            l = 65535 & t.low,
            h = 0,
            d = 0,
            g = 0,
            p = 0;
          return (
            (p += s + l),
            (g += p >>> 16),
            (p &= 65535),
            (g += r + u),
            (d += g >>> 16),
            (g &= 65535),
            (d += n + a),
            (h += d >>> 16),
            (d &= 65535),
            (h += e + o),
            (h &= 65535),
            c((g << 16) | p, (h << 16) | d, this.unsigned)
          );
        }),
        (E.subtract = function (t) {
          return (i(t) || (t = f(t)), this.add(t.neg()));
        }),
        (E.sub = E.subtract),
        (E.multiply = function (t) {
          if (this.isZero()) return b;
          if ((i(t) || (t = f(t)), n)) {
            var e = n.mul(this.low, this.high, t.low, t.high);
            return c(e, n.get_high(), this.unsigned);
          }
          if (t.isZero()) return b;
          if (this.eq(S)) return t.isOdd() ? S : b;
          if (t.eq(S)) return this.isOdd() ? S : b;
          if (this.isNegative())
            return t.isNegative()
              ? this.neg().mul(t.neg())
              : this.neg().mul(t).neg();
          if (t.isNegative()) return this.mul(t.neg()).neg();
          if (this.lt(m) && t.lt(m))
            return u(this.toNumber() * t.toNumber(), this.unsigned);
          var r = this.high >>> 16,
            s = 65535 & this.high,
            o = this.low >>> 16,
            a = 65535 & this.low,
            l = t.high >>> 16,
            h = 65535 & t.high,
            d = t.low >>> 16,
            g = 65535 & t.low,
            p = 0,
            _ = 0,
            y = 0,
            w = 0;
          return (
            (w += a * g),
            (y += w >>> 16),
            (w &= 65535),
            (y += o * g),
            (_ += y >>> 16),
            (y &= 65535),
            (y += a * d),
            (_ += y >>> 16),
            (y &= 65535),
            (_ += s * g),
            (p += _ >>> 16),
            (_ &= 65535),
            (_ += o * d),
            (p += _ >>> 16),
            (_ &= 65535),
            (_ += a * h),
            (p += _ >>> 16),
            (_ &= 65535),
            (p += r * g + s * d + o * h + a * l),
            (p &= 65535),
            c((y << 16) | w, (p << 16) | _, this.unsigned)
          );
        }),
        (E.mul = E.multiply),
        (E.divide = function (t) {
          if ((i(t) || (t = f(t)), t.isZero())) throw Error("division by zero");
          if (n) {
            if (
              !this.unsigned &&
              -2147483648 === this.high &&
              -1 === t.low &&
              -1 === t.high
            )
              return this;
            var e = (this.unsigned ? n.div_u : n.div_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return c(e, n.get_high(), this.unsigned);
          }
          if (this.isZero()) return this.unsigned ? w : b;
          var r, s, o;
          if (this.unsigned) {
            if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return w;
            if (t.gt(this.shru(1))) return T;
            o = w;
          } else {
            if (this.eq(S)) {
              if (t.eq(v) || t.eq(R)) return S;
              if (t.eq(S)) return v;
              var a = this.shr(1);
              return (
                (r = a.div(t).shl(1)),
                r.eq(b)
                  ? t.isNegative()
                    ? v
                    : R
                  : ((s = this.sub(t.mul(r))), (o = r.add(s.div(t))), o)
              );
            }
            if (t.eq(S)) return this.unsigned ? w : b;
            if (this.isNegative())
              return t.isNegative()
                ? this.neg().div(t.neg())
                : this.neg().div(t).neg();
            if (t.isNegative()) return this.div(t.neg()).neg();
            o = b;
          }
          s = this;
          while (s.gte(t)) {
            r = Math.max(1, Math.floor(s.toNumber() / t.toNumber()));
            var h = Math.ceil(Math.log(r) / Math.LN2),
              d = h <= 48 ? 1 : l(2, h - 48),
              g = u(r),
              p = g.mul(t);
            while (p.isNegative() || p.gt(s))
              ((r -= d), (g = u(r, this.unsigned)), (p = g.mul(t)));
            (g.isZero() && (g = v), (o = o.add(g)), (s = s.sub(p)));
          }
          return o;
        }),
        (E.div = E.divide),
        (E.modulo = function (t) {
          if ((i(t) || (t = f(t)), n)) {
            var e = (this.unsigned ? n.rem_u : n.rem_s)(
              this.low,
              this.high,
              t.low,
              t.high,
            );
            return c(e, n.get_high(), this.unsigned);
          }
          return this.sub(this.div(t).mul(t));
        }),
        (E.mod = E.modulo),
        (E.rem = E.modulo),
        (E.not = function () {
          return c(~this.low, ~this.high, this.unsigned);
        }),
        (E.and = function (t) {
          return (
            i(t) || (t = f(t)),
            c(this.low & t.low, this.high & t.high, this.unsigned)
          );
        }),
        (E.or = function (t) {
          return (
            i(t) || (t = f(t)),
            c(this.low | t.low, this.high | t.high, this.unsigned)
          );
        }),
        (E.xor = function (t) {
          return (
            i(t) || (t = f(t)),
            c(this.low ^ t.low, this.high ^ t.high, this.unsigned)
          );
        }),
        (E.shiftLeft = function (t) {
          return (
            i(t) && (t = t.toInt()),
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
        (E.shl = E.shiftLeft),
        (E.shiftRight = function (t) {
          return (
            i(t) && (t = t.toInt()),
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
        (E.shr = E.shiftRight),
        (E.shiftRightUnsigned = function (t) {
          if ((i(t) && (t = t.toInt()), (t &= 63), 0 === t)) return this;
          var e = this.high;
          if (t < 32) {
            var n = this.low;
            return c((n >>> t) | (e << (32 - t)), e >>> t, this.unsigned);
          }
          return c(32 === t ? e : e >>> (t - 32), 0, this.unsigned);
        }),
        (E.shru = E.shiftRightUnsigned),
        (E.shr_u = E.shiftRightUnsigned),
        (E.toSigned = function () {
          return this.unsigned ? c(this.low, this.high, !1) : this;
        }),
        (E.toUnsigned = function () {
          return this.unsigned ? this : c(this.low, this.high, !0);
        }),
        (E.toBytes = function (t) {
          return t ? this.toBytesLE() : this.toBytesBE();
        }),
        (E.toBytesLE = function () {
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
        (E.toBytesBE = function () {
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
        (r.fromBytes = function (t, e, n) {
          return n ? r.fromBytesLE(t, e) : r.fromBytesBE(t, e);
        }),
        (r.fromBytesLE = function (t, e) {
          return new r(
            t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
            t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
            e,
          );
        }),
        (r.fromBytesBE = function (t, e) {
          return new r(
            (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
            (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
            e,
          );
        }));
    },
    2814: function (t, e, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default =
          e.TRANSACTION_REGISTRY =
          e.SCHEDULE_CREATE_TRANSACTION =
          e.DEFAULT_RECORD_THRESHOLD =
          e.DEFAULT_AUTO_RENEW_PERIOD =
          e.CHUNK_SIZE =
            void 0));
      var i = r(n(2831)),
        s = r(n(6088)),
        o = r(n(3093)),
        a = r(n(7911)),
        u = r(n(7912)),
        c = v(n(3557)),
        l = r(n(3555)),
        h = r(n(2754)),
        f = v(n(6119)),
        d = v(n(2950)),
        g = v(n(2826)),
        p = r(n(3899)),
        _ = r(n(2774)),
        y = r(n(3421)),
        m = r(n(5011)),
        b = r(n(2909)),
        w = v(n(3215));
      function v(t, e) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (v = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            s,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((i = e ? r : n)) {
            if (i.has(t)) return i.get(t);
            i.set(t, o);
          }
          for (const n in t)
            "default" !== n &&
              {}.hasOwnProperty.call(t, n) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, n)) &&
              (s.get || s.set)
                ? i(o, n, s)
                : (o[n] = t[n]));
          return o;
        })(t, e);
      }
      ((e.DEFAULT_AUTO_RENEW_PERIOD = h.default.fromValue(7776e3)),
        (e.DEFAULT_RECORD_THRESHOLD = i.default.fromTinybars(
          h.default.fromString("9223372036854775807"),
        )));
      const T = 120,
        R = ((e.CHUNK_SIZE = 1024), (e.TRANSACTION_REGISTRY = new Map()));
      class Transaction extends c.default {
        constructor() {
          (super(),
            (this._transactions = new m.default()),
            (this._signedTransactions = new m.default()),
            (this._signerPublicKeys = new Set()),
            (this._transactionValidDuration = T),
            (this._defaultMaxTransactionFee = new i.default(2)),
            (this._maxTransactionFee = null),
            (this._transactionMemo = ""),
            (this._transactionIds = new m.default()),
            (this._publicKeys = []),
            (this._transactionSigners = []),
            (this._regenerateTransactionId = null));
        }
        static fromBytes(t) {
          const e = [],
            n = [],
            r = [],
            i = [],
            s = [],
            a = [],
            u = g.proto.TransactionList.decode(t).transactionList;
          if (0 === u.length) {
            const e = g.proto.Transaction.decode(t);
            0 !== e.signedTransactionBytes.length
              ? u.push(e)
              : u.push({
                  signedTransactionBytes: g.proto.SignedTransaction.encode({
                    bodyBytes: e.bodyBytes,
                    sigMap: e.sigMap,
                  }).finish(),
                });
          }
          for (const h of u) {
            if (null == h.signedTransactionBytes)
              throw new Error("Transaction.signedTransactionBytes are null");
            const t = g.proto.SignedTransaction.decode(
              h.signedTransactionBytes,
            );
            e.push(t);
            const u = g.proto.TransactionBody.decode(t.bodyBytes);
            if (null == u.data)
              throw new Error("(BUG) body.data was not set in the protobuf");
            if ((a.push(u), null != u.transactionID)) {
              const t = o.default._fromProtobuf(u.transactionID);
              i.includes(t.toString()) || (n.push(t), i.push(t.toString()));
            }
            if (null != u.nodeAccountID) {
              const t = _.default._fromProtobuf(u.nodeAccountID);
              s.includes(t.toString()) || (r.push(t), s.push(t.toString()));
            }
          }
          const c = a[0];
          if (null == c || null == c.data)
            throw new Error(
              "No transaction found in bytes or failed to decode TransactionBody",
            );
          const l = R.get(c.data);
          if (null == l)
            throw new Error(
              "(BUG) Transaction.fromBytes() not implemented for type " +
                c.data,
            );
          return l(u, e, n, r, a);
        }
        schedule() {
          if ((this._requireNotFrozen(), 1 != I.length))
            throw new Error(
              "ScheduleCreateTransaction has not been loaded yet",
            );
          return I[0]()._setScheduledTransaction(this);
        }
        static _fromProtobufTransactions(t, e, n, r, s, o) {
          const a = o[0];
          for (let i = 0; i < r.length; i++)
            for (let t = 0; t < s.length - 1; t++)
              if (
                !w.compare(
                  o[i * s.length + t],
                  o[i * s.length + t + 1],
                  new Set(["nodeAccountID"]),
                )
              )
                throw new Error("failed to validate transaction bodies");
          const u = new _.default(0);
          for (let i = 0; i < s.length; i++) s[i].equals(u) && s.splice(i--, 1);
          (t._transactions.setList(e),
            t._signedTransactions.setList(n).setLocked(),
            t._transactionIds.setList(r).setLocked(),
            t._nodeAccountIds.setList(s).setLocked(),
            (t._transactionValidDuration =
              null != a.transactionValidDuration &&
              null != a.transactionValidDuration.seconds
                ? h.default
                    .fromValue(a.transactionValidDuration.seconds)
                    .toInt()
                : T),
            (t._maxTransactionFee =
              null != a.transactionFee
                ? i.default.fromTinybars(a.transactionFee)
                : new i.default(0)),
            (t._transactionMemo = null != a.memo ? a.memo : ""));
          for (let i = 0; i < s.length; i++) {
            const e = n[i];
            if (null != e.sigMap && null != e.sigMap.sigPair)
              for (const n of e.sigMap.sigPair)
                (t._signerPublicKeys.add(d.encode(n.pubKeyPrefix)),
                  t._publicKeys.push(y.default.fromBytes(n.pubKeyPrefix)),
                  t._transactionSigners.push(null));
          }
          return t;
        }
        setNodeAccountIds(t) {
          return (this._requireNotFrozen(), super.setNodeAccountIds(t), this);
        }
        get transactionValidDuration() {
          return this._transactionValidDuration;
        }
        setTransactionValidDuration(t) {
          return (
            this._requireNotFrozen(),
            (this._transactionValidDuration = t),
            this
          );
        }
        get maxTransactionFee() {
          return this._maxTransactionFee;
        }
        setMaxTransactionFee(t) {
          return (
            this._requireNotFrozen(),
            (this._maxTransactionFee =
              t instanceof i.default ? t : new i.default(t)),
            this
          );
        }
        get regenerateTransactionId() {
          return this._regenerateTransactionId;
        }
        setRegenerateTransactionId(t) {
          return (
            this._requireNotFrozen(),
            (this._regenerateTransactionId = t),
            this
          );
        }
        get transactionMemo() {
          return this._transactionMemo;
        }
        setTransactionMemo(t) {
          return (this._requireNotFrozen(), (this._transactionMemo = t), this);
        }
        get transactionId() {
          return this._transactionIds.isEmpty
            ? null
            : (this._transactionIds.setLocked(), this._transactionIds.current);
        }
        setTransactionId(t) {
          return (
            this._requireNotFrozen(),
            this._transactionIds.setList([t]).setLocked(),
            this
          );
        }
        sign(t) {
          return this.signWith(t.publicKey, (e) => Promise.resolve(t.sign(e)));
        }
        async signWith(t, e) {
          this._signOnDemand || this._requireFrozen();
          const n = t.toBytesRaw(),
            r = d.encode(n);
          if (this._signerPublicKeys.has(r)) return this;
          if (
            (this._transactions.clear(),
            this._signerPublicKeys.add(r),
            this._signOnDemand)
          )
            return (
              this._publicKeys.push(t),
              this._transactionSigners.push(e),
              this
            );
          (this._transactionIds.setLocked(), this._nodeAccountIds.setLocked());
          for (const i of this._signedTransactions.list) {
            const n = i.bodyBytes,
              r = await e(n);
            (null == i.sigMap && (i.sigMap = {}),
              null == i.sigMap.sigPair && (i.sigMap.sigPair = []),
              i.sigMap.sigPair.push(t._toProtobufSignature(r)));
          }
          return this;
        }
        signWithOperator(t) {
          const e = t._operator;
          if (null == e)
            throw new Error(
              "`client` must have an operator to sign with the operator",
            );
          return (
            this._isFrozen() || this.freezeWith(t),
            this.signWith(e.publicKey, e.transactionSigner)
          );
        }
        addSignature(t, e) {
          (this._requireOneNodeAccountId(), this.isFrozen() || this.freeze());
          const n = t.toBytesRaw(),
            r = d.encode(n);
          if (this._signerPublicKeys.has(r)) return this;
          (this._transactions.clear(),
            this._transactionIds.setLocked(),
            this._nodeAccountIds.setLocked(),
            this._signedTransactions.setLocked());
          for (const i of this._signedTransactions.list)
            (null == i.sigMap && (i.sigMap = {}),
              null == i.sigMap.sigPair && (i.sigMap.sigPair = []),
              i.sigMap.sigPair.push(t._toProtobufSignature(e)));
          return (
            this._signerPublicKeys.add(r),
            this._publicKeys.push(t),
            this._transactionSigners.push(null),
            this
          );
        }
        getSignatures() {
          return (
            this._requireFrozen(),
            this._requireNotSignOnDemand(),
            this._buildAllTransactions(),
            this._transactionIds.setLocked(),
            this._nodeAccountIds.setLocked(),
            u.default._fromTransaction(this)
          );
        }
        async getSignaturesAsync() {
          return (
            this._transactionIds.setLocked(),
            this._nodeAccountIds.setLocked(),
            await this._buildAllTransactionsAsync(),
            this._transactions.setLocked(),
            this._signedTransactions.setLocked(),
            u.default._fromTransaction(this)
          );
        }
        _setTransactionId() {
          if (null == this._operatorAccountId && this._transactionIds.isEmpty)
            throw new Error(
              "`transactionId` must be set or `client` must be provided with `freezeWith`",
            );
        }
        _setNodeAccountIds(t) {
          if (this._nodeAccountIds.isEmpty) {
            if (null == t)
              throw new Error(
                "`nodeAccountId` must be set or `client` must be provided with `freezeWith`",
              );
            this._nodeAccountIds.setList(
              t._network.getNodeAccountIdsForExecute(),
            );
          }
        }
        _buildSignedTransactions() {
          this._signedTransactions.locked ||
            this._signedTransactions.setList(
              this._nodeAccountIds.list.map((t) =>
                this._makeSignedTransaction(t),
              ),
            );
        }
        freeze() {
          return this.freezeWith(null);
        }
        _freezeWithAccountId(t) {
          null == this._operatorAccountId && (this._operatorAccountId = t);
        }
        freezeWith(t) {
          if (
            ((this._signOnDemand = null != t && t.signOnDemand),
            (this._operator = null != t ? t._operator : null),
            this._freezeWithAccountId(null != t ? t.operatorAccountId : null),
            (this._maxTransactionFee =
              null == this._maxTransactionFee
                ? null != t && null != t.defaultMaxTransactionFee
                  ? t.defaultMaxTransactionFee
                  : this._defaultMaxTransactionFee
                : this._maxTransactionFee),
            (this._regenerateTransactionId =
              null != t && null == this._regenerateTransactionId
                ? t.defaultRegenerateTransactionId
                : this._regenerateTransactionId),
            this._setNodeAccountIds(t),
            this._setTransactionId(),
            null != t)
          )
            for (const e of this._transactionIds.list)
              null != e.accountId && e.accountId.validateChecksum(t);
          return (
            this._buildNewTransactionIdList(),
            this._signOnDemand || this._buildSignedTransactions(),
            this
          );
        }
        async signWithSigner(t) {
          return (await t.signTransaction(this), this);
        }
        async freezeWithSigner(t) {
          return (await t.populateTransaction(this), this.freeze(), this);
        }
        toBytes() {
          return (
            this._requireFrozen(),
            this._requireNotSignOnDemand(),
            this._transactionIds.setLocked(),
            this._nodeAccountIds.setLocked(),
            this._buildAllTransactions(),
            g.proto.TransactionList.encode({
              transactionList: this._transactions.list,
            }).finish()
          );
        }
        async toBytesAsync() {
          return (
            this._transactionIds.setLocked(),
            this._nodeAccountIds.setLocked(),
            await this._buildAllTransactionsAsync(),
            this._transactions.setLocked(),
            this._signedTransactions.setLocked(),
            g.proto.TransactionList.encode({
              transactionList: this._transactions.list,
            }).finish()
          );
        }
        async getTransactionHash() {
          return (
            this._requireFrozen(),
            this._transactionIds.setLocked(),
            this._nodeAccountIds.setLocked(),
            await this._buildAllTransactionsAsync(),
            this._transactions.setLocked(),
            this._signedTransactions.setLocked(),
            f.digest(this._transactions.get(0).signedTransactionBytes)
          );
        }
        async getTransactionHashPerNode() {
          return (
            this._requireFrozen(),
            this._transactionIds.setLocked(),
            this._nodeAccountIds.setLocked(),
            await this._buildAllTransactionsAsync(),
            await a.default._fromTransaction(this)
          );
        }
        isFrozen() {
          return this._signedTransactions.length > 0;
        }
        _getTransactionId() {
          const t = this.transactionId;
          if (null == t)
            throw new Error(
              "transaction must have been frozen before getting the transaction ID, try calling `freeze`",
            );
          return t;
        }
        _validateChecksums(t) {}
        async _beforeExecute(t) {
          (this._logger &&
            this._logger.info("Network used: " + t._network.networkName),
            this._isFrozen() || this.freezeWith(t),
            t.isAutoValidateChecksumsEnabled() && this._validateChecksums(t),
            (null != this._operator && void 0 != this._operator) ||
              (this._operator = null != t ? t._operator : null),
            (null != this._operatorAccountId &&
              void 0 != this._operatorAccountId) ||
              (this._operatorAccountId =
                null != t && null != t._operator
                  ? t._operator.accountId
                  : null),
            null != this._operator &&
              (await this.signWith(
                this._operator.publicKey,
                this._operator.transactionSigner,
              )));
        }
        async _makeRequestAsync() {
          const t =
            this._transactionIds.index * this._nodeAccountIds.length +
            this._nodeAccountIds.index;
          return this._signOnDemand
            ? await this._buildTransactionAsync()
            : (this._buildTransaction(t), this._transactions.get(t));
        }
        async _signTransaction() {
          const t = this._makeSignedTransaction(this._nodeAccountIds.next),
            e = t.bodyBytes;
          for (let n = 0; n < this._publicKeys.length; n++) {
            const r = this._publicKeys[n],
              i = this._transactionSigners[n];
            if (null == i) continue;
            const s = await i(e);
            (null == t.sigMap && (t.sigMap = {}),
              null == t.sigMap.sigPair && (t.sigMap.sigPair = []),
              t.sigMap.sigPair.push(r._toProtobufSignature(s)));
          }
          return t;
        }
        _buildNewTransactionIdList() {
          if (this._transactionIds.locked || null == this._operatorAccountId)
            return;
          const t = o.default.withValidStart(
            this._operatorAccountId,
            b.default.generate(),
          );
          this._transactionIds.set(this._transactionIds.index, t);
        }
        _buildAllTransactions() {
          for (let t = 0; t < this._signedTransactions.length; t++)
            this._buildTransaction(t);
        }
        async _buildAllTransactionsAsync() {
          if (this._signOnDemand) {
            if ((this._buildSignedTransactions(), !this._transactions.locked))
              for (let t = 0; t < this._signedTransactions.length; t++)
                this._transactions.push(await this._buildTransactionAsync());
          } else this._buildAllTransactions();
        }
        _buildTransaction(t) {
          if (this._transactions.length < t)
            for (let e = this._transactions.length; e < t; e++)
              this._transactions.push(null);
          this._transactions.setIfAbsent(t, () => ({
            signedTransactionBytes: g.proto.SignedTransaction.encode(
              this._signedTransactions.get(t),
            ).finish(),
          }));
        }
        async _buildTransactionAsync() {
          return {
            signedTransactionBytes: g.proto.SignedTransaction.encode(
              await this._signTransaction(),
            ).finish(),
          };
        }
        _shouldRetry(t, e) {
          const { nodeTransactionPrecheckCode: n } = e,
            r = l.default._fromCode(
              null != n ? n : g.proto.ResponseCodeEnum.OK,
            );
          switch (
            (this._logger &&
              (this._logger.debug(
                `[${this._getLogId()}] received status ${r.toString()}`,
              ),
              this._logger.info(
                "SDK Transaction Status Response: " + r.toString(),
              )),
            r)
          ) {
            case l.default.Busy:
            case l.default.Unknown:
            case l.default.PlatformTransactionNotCreated:
            case l.default.PlatformNotActive:
              return [r, c.ExecutionState.Retry];
            case l.default.Ok:
              return [r, c.ExecutionState.Finished];
            case l.default.TransactionExpired:
              return this._transactionIds.locked ||
                (null != this._regenerateTransactionId &&
                  !this._regenerateTransactionId)
                ? [r, c.ExecutionState.Error]
                : (this._buildNewTransactionIdList(),
                  [r, c.ExecutionState.Retry]);
            default:
              return [r, c.ExecutionState.Error];
          }
        }
        _mapStatusError(t, e) {
          const { nodeTransactionPrecheckCode: n } = e,
            r = l.default._fromCode(
              null != n ? n : g.proto.ResponseCodeEnum.OK,
            );
          return (
            this._logger &&
              this._logger.info(
                `Transaction Error Info: ${r.toString()}, ${this.transactionId.toString()}`,
              ),
            new p.default({
              status: r,
              transactionId: this._getTransactionId(),
              contractFunctionResult: null,
            })
          );
        }
        async _mapResponse(t, e, n) {
          const r = await f.digest(n.signedTransactionBytes),
            i = this._getTransactionId();
          return (
            this._transactionIds.advance(),
            this._logger &&
              this._logger.info(
                "Transaction Info: " +
                  JSON.stringify(
                    new s.default({
                      nodeId: e,
                      transactionHash: r,
                      transactionId: i,
                    }).toJSON(),
                  ),
              ),
            new s.default({ nodeId: e, transactionHash: r, transactionId: i })
          );
        }
        _makeSignedTransaction(t) {
          const e = this._makeTransactionBody(t);
          this._logger &&
            this._logger.info("Transaction Body: " + JSON.stringify(e));
          const n = g.proto.TransactionBody.encode(e).finish();
          return { bodyBytes: n, sigMap: { sigPair: [] } };
        }
        _makeTransactionBody(t) {
          return {
            [this._getTransactionDataCase()]: this._makeTransactionData(),
            transactionFee:
              null != this._maxTransactionFee
                ? this._maxTransactionFee.toTinybars()
                : null,
            memo: this._transactionMemo,
            transactionID: this._transactionIds.current._toProtobuf(),
            nodeAccountID: null != t ? t._toProtobuf() : null,
            transactionValidDuration: {
              seconds: h.default.fromNumber(this._transactionValidDuration),
            },
          };
        }
        _getTransactionDataCase() {
          throw new Error("not implemented");
        }
        _getScheduledTransactionBody() {
          return {
            memo: this.transactionMemo,
            transactionFee:
              null == this._maxTransactionFee
                ? this._defaultMaxTransactionFee.toTinybars()
                : this._maxTransactionFee.toTinybars(),
            [this._getTransactionDataCase()]: this._makeTransactionData(),
          };
        }
        _makeTransactionData() {
          throw new Error("not implemented");
        }
        _isFrozen() {
          return (
            this._signOnDemand ||
            this._signedTransactions.length > 0 ||
            this._transactions.length > 0
          );
        }
        _requireNotFrozen() {
          if (this._isFrozen())
            throw new Error(
              "transaction is immutable; it has at least one signature or has been explicitly frozen",
            );
        }
        _requireNotSignOnDemand() {
          if (this._signOnDemand)
            throw new Error(
              "Please use `toBytesAsync()` if `signOnDemand` is enabled",
            );
        }
        _requireFrozen() {
          if (!this._isFrozen())
            throw new Error(
              "transaction must have been frozen before calculating the hash will be stable, try calling `freeze`",
            );
        }
        _requireOneNodeAccountId() {
          if (1 != this._nodeAccountIds.length)
            throw "transaction did not have exactly one node ID set";
        }
        _requestToBytes(t) {
          return g.proto.Transaction.encode(t).finish();
        }
        _responseToBytes(t) {
          return g.proto.TransactionResponse.encode(t).finish();
        }
      }
      e.default = Transaction;
      const I = (e.SCHEDULE_CREATE_TRANSACTION = []);
    },
    2925: function (t, e, n) {
      (function (t) {
        "use strict";
        var e = function (t) {
            var e,
              n = new Float64Array(16);
            if (t) for (e = 0; e < t.length; e++) n[e] = t[e];
            return n;
          },
          r = function () {
            throw new Error("no PRNG");
          },
          i = new Uint8Array(16),
          s = new Uint8Array(32);
        s[0] = 9;
        var o = e(),
          a = e([1]),
          u = e([56129, 1]),
          c = e([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          l = e([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ]),
          h = e([
            54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412,
            64982, 57905, 49316, 21502, 52590, 14035, 8553,
          ]),
          f = e([
            26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
            26214, 26214, 26214, 26214, 26214, 26214, 26214,
          ]),
          d = e([
            41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
            153, 11085, 57099, 20417, 9344, 11139,
          ]);
        function g(t, e, n, r) {
          ((t[e] = (n >> 24) & 255),
            (t[e + 1] = (n >> 16) & 255),
            (t[e + 2] = (n >> 8) & 255),
            (t[e + 3] = 255 & n),
            (t[e + 4] = (r >> 24) & 255),
            (t[e + 5] = (r >> 16) & 255),
            (t[e + 6] = (r >> 8) & 255),
            (t[e + 7] = 255 & r));
        }
        function p(t, e, n, r, i) {
          var s,
            o = 0;
          for (s = 0; s < i; s++) o |= t[e + s] ^ n[r + s];
          return (1 & ((o - 1) >>> 8)) - 1;
        }
        function _(t, e, n, r) {
          return p(t, e, n, r, 16);
        }
        function y(t, e, n, r) {
          return p(t, e, n, r, 32);
        }
        function m(t, e, n, r) {
          for (
            var i,
              s =
                (255 & r[0]) |
                ((255 & r[1]) << 8) |
                ((255 & r[2]) << 16) |
                ((255 & r[3]) << 24),
              o =
                (255 & n[0]) |
                ((255 & n[1]) << 8) |
                ((255 & n[2]) << 16) |
                ((255 & n[3]) << 24),
              a =
                (255 & n[4]) |
                ((255 & n[5]) << 8) |
                ((255 & n[6]) << 16) |
                ((255 & n[7]) << 24),
              u =
                (255 & n[8]) |
                ((255 & n[9]) << 8) |
                ((255 & n[10]) << 16) |
                ((255 & n[11]) << 24),
              c =
                (255 & n[12]) |
                ((255 & n[13]) << 8) |
                ((255 & n[14]) << 16) |
                ((255 & n[15]) << 24),
              l =
                (255 & r[4]) |
                ((255 & r[5]) << 8) |
                ((255 & r[6]) << 16) |
                ((255 & r[7]) << 24),
              h =
                (255 & e[0]) |
                ((255 & e[1]) << 8) |
                ((255 & e[2]) << 16) |
                ((255 & e[3]) << 24),
              f =
                (255 & e[4]) |
                ((255 & e[5]) << 8) |
                ((255 & e[6]) << 16) |
                ((255 & e[7]) << 24),
              d =
                (255 & e[8]) |
                ((255 & e[9]) << 8) |
                ((255 & e[10]) << 16) |
                ((255 & e[11]) << 24),
              g =
                (255 & e[12]) |
                ((255 & e[13]) << 8) |
                ((255 & e[14]) << 16) |
                ((255 & e[15]) << 24),
              p =
                (255 & r[8]) |
                ((255 & r[9]) << 8) |
                ((255 & r[10]) << 16) |
                ((255 & r[11]) << 24),
              _ =
                (255 & n[16]) |
                ((255 & n[17]) << 8) |
                ((255 & n[18]) << 16) |
                ((255 & n[19]) << 24),
              y =
                (255 & n[20]) |
                ((255 & n[21]) << 8) |
                ((255 & n[22]) << 16) |
                ((255 & n[23]) << 24),
              m =
                (255 & n[24]) |
                ((255 & n[25]) << 8) |
                ((255 & n[26]) << 16) |
                ((255 & n[27]) << 24),
              b =
                (255 & n[28]) |
                ((255 & n[29]) << 8) |
                ((255 & n[30]) << 16) |
                ((255 & n[31]) << 24),
              w =
                (255 & r[12]) |
                ((255 & r[13]) << 8) |
                ((255 & r[14]) << 16) |
                ((255 & r[15]) << 24),
              v = s,
              T = o,
              R = a,
              I = u,
              A = c,
              S = l,
              E = h,
              O = f,
              k = d,
              N = g,
              U = p,
              B = _,
              C = y,
              P = m,
              L = b,
              M = w,
              x = 0;
            x < 20;
            x += 2
          )
            ((i = (v + C) | 0),
              (A ^= (i << 7) | (i >>> 25)),
              (i = (A + v) | 0),
              (k ^= (i << 9) | (i >>> 23)),
              (i = (k + A) | 0),
              (C ^= (i << 13) | (i >>> 19)),
              (i = (C + k) | 0),
              (v ^= (i << 18) | (i >>> 14)),
              (i = (S + T) | 0),
              (N ^= (i << 7) | (i >>> 25)),
              (i = (N + S) | 0),
              (P ^= (i << 9) | (i >>> 23)),
              (i = (P + N) | 0),
              (T ^= (i << 13) | (i >>> 19)),
              (i = (T + P) | 0),
              (S ^= (i << 18) | (i >>> 14)),
              (i = (U + E) | 0),
              (L ^= (i << 7) | (i >>> 25)),
              (i = (L + U) | 0),
              (R ^= (i << 9) | (i >>> 23)),
              (i = (R + L) | 0),
              (E ^= (i << 13) | (i >>> 19)),
              (i = (E + R) | 0),
              (U ^= (i << 18) | (i >>> 14)),
              (i = (M + B) | 0),
              (I ^= (i << 7) | (i >>> 25)),
              (i = (I + M) | 0),
              (O ^= (i << 9) | (i >>> 23)),
              (i = (O + I) | 0),
              (B ^= (i << 13) | (i >>> 19)),
              (i = (B + O) | 0),
              (M ^= (i << 18) | (i >>> 14)),
              (i = (v + I) | 0),
              (T ^= (i << 7) | (i >>> 25)),
              (i = (T + v) | 0),
              (R ^= (i << 9) | (i >>> 23)),
              (i = (R + T) | 0),
              (I ^= (i << 13) | (i >>> 19)),
              (i = (I + R) | 0),
              (v ^= (i << 18) | (i >>> 14)),
              (i = (S + A) | 0),
              (E ^= (i << 7) | (i >>> 25)),
              (i = (E + S) | 0),
              (O ^= (i << 9) | (i >>> 23)),
              (i = (O + E) | 0),
              (A ^= (i << 13) | (i >>> 19)),
              (i = (A + O) | 0),
              (S ^= (i << 18) | (i >>> 14)),
              (i = (U + N) | 0),
              (B ^= (i << 7) | (i >>> 25)),
              (i = (B + U) | 0),
              (k ^= (i << 9) | (i >>> 23)),
              (i = (k + B) | 0),
              (N ^= (i << 13) | (i >>> 19)),
              (i = (N + k) | 0),
              (U ^= (i << 18) | (i >>> 14)),
              (i = (M + L) | 0),
              (C ^= (i << 7) | (i >>> 25)),
              (i = (C + M) | 0),
              (P ^= (i << 9) | (i >>> 23)),
              (i = (P + C) | 0),
              (L ^= (i << 13) | (i >>> 19)),
              (i = (L + P) | 0),
              (M ^= (i << 18) | (i >>> 14)));
          ((v = (v + s) | 0),
            (T = (T + o) | 0),
            (R = (R + a) | 0),
            (I = (I + u) | 0),
            (A = (A + c) | 0),
            (S = (S + l) | 0),
            (E = (E + h) | 0),
            (O = (O + f) | 0),
            (k = (k + d) | 0),
            (N = (N + g) | 0),
            (U = (U + p) | 0),
            (B = (B + _) | 0),
            (C = (C + y) | 0),
            (P = (P + m) | 0),
            (L = (L + b) | 0),
            (M = (M + w) | 0),
            (t[0] = (v >>> 0) & 255),
            (t[1] = (v >>> 8) & 255),
            (t[2] = (v >>> 16) & 255),
            (t[3] = (v >>> 24) & 255),
            (t[4] = (T >>> 0) & 255),
            (t[5] = (T >>> 8) & 255),
            (t[6] = (T >>> 16) & 255),
            (t[7] = (T >>> 24) & 255),
            (t[8] = (R >>> 0) & 255),
            (t[9] = (R >>> 8) & 255),
            (t[10] = (R >>> 16) & 255),
            (t[11] = (R >>> 24) & 255),
            (t[12] = (I >>> 0) & 255),
            (t[13] = (I >>> 8) & 255),
            (t[14] = (I >>> 16) & 255),
            (t[15] = (I >>> 24) & 255),
            (t[16] = (A >>> 0) & 255),
            (t[17] = (A >>> 8) & 255),
            (t[18] = (A >>> 16) & 255),
            (t[19] = (A >>> 24) & 255),
            (t[20] = (S >>> 0) & 255),
            (t[21] = (S >>> 8) & 255),
            (t[22] = (S >>> 16) & 255),
            (t[23] = (S >>> 24) & 255),
            (t[24] = (E >>> 0) & 255),
            (t[25] = (E >>> 8) & 255),
            (t[26] = (E >>> 16) & 255),
            (t[27] = (E >>> 24) & 255),
            (t[28] = (O >>> 0) & 255),
            (t[29] = (O >>> 8) & 255),
            (t[30] = (O >>> 16) & 255),
            (t[31] = (O >>> 24) & 255),
            (t[32] = (k >>> 0) & 255),
            (t[33] = (k >>> 8) & 255),
            (t[34] = (k >>> 16) & 255),
            (t[35] = (k >>> 24) & 255),
            (t[36] = (N >>> 0) & 255),
            (t[37] = (N >>> 8) & 255),
            (t[38] = (N >>> 16) & 255),
            (t[39] = (N >>> 24) & 255),
            (t[40] = (U >>> 0) & 255),
            (t[41] = (U >>> 8) & 255),
            (t[42] = (U >>> 16) & 255),
            (t[43] = (U >>> 24) & 255),
            (t[44] = (B >>> 0) & 255),
            (t[45] = (B >>> 8) & 255),
            (t[46] = (B >>> 16) & 255),
            (t[47] = (B >>> 24) & 255),
            (t[48] = (C >>> 0) & 255),
            (t[49] = (C >>> 8) & 255),
            (t[50] = (C >>> 16) & 255),
            (t[51] = (C >>> 24) & 255),
            (t[52] = (P >>> 0) & 255),
            (t[53] = (P >>> 8) & 255),
            (t[54] = (P >>> 16) & 255),
            (t[55] = (P >>> 24) & 255),
            (t[56] = (L >>> 0) & 255),
            (t[57] = (L >>> 8) & 255),
            (t[58] = (L >>> 16) & 255),
            (t[59] = (L >>> 24) & 255),
            (t[60] = (M >>> 0) & 255),
            (t[61] = (M >>> 8) & 255),
            (t[62] = (M >>> 16) & 255),
            (t[63] = (M >>> 24) & 255));
        }
        function b(t, e, n, r) {
          for (
            var i,
              s =
                (255 & r[0]) |
                ((255 & r[1]) << 8) |
                ((255 & r[2]) << 16) |
                ((255 & r[3]) << 24),
              o =
                (255 & n[0]) |
                ((255 & n[1]) << 8) |
                ((255 & n[2]) << 16) |
                ((255 & n[3]) << 24),
              a =
                (255 & n[4]) |
                ((255 & n[5]) << 8) |
                ((255 & n[6]) << 16) |
                ((255 & n[7]) << 24),
              u =
                (255 & n[8]) |
                ((255 & n[9]) << 8) |
                ((255 & n[10]) << 16) |
                ((255 & n[11]) << 24),
              c =
                (255 & n[12]) |
                ((255 & n[13]) << 8) |
                ((255 & n[14]) << 16) |
                ((255 & n[15]) << 24),
              l =
                (255 & r[4]) |
                ((255 & r[5]) << 8) |
                ((255 & r[6]) << 16) |
                ((255 & r[7]) << 24),
              h =
                (255 & e[0]) |
                ((255 & e[1]) << 8) |
                ((255 & e[2]) << 16) |
                ((255 & e[3]) << 24),
              f =
                (255 & e[4]) |
                ((255 & e[5]) << 8) |
                ((255 & e[6]) << 16) |
                ((255 & e[7]) << 24),
              d =
                (255 & e[8]) |
                ((255 & e[9]) << 8) |
                ((255 & e[10]) << 16) |
                ((255 & e[11]) << 24),
              g =
                (255 & e[12]) |
                ((255 & e[13]) << 8) |
                ((255 & e[14]) << 16) |
                ((255 & e[15]) << 24),
              p =
                (255 & r[8]) |
                ((255 & r[9]) << 8) |
                ((255 & r[10]) << 16) |
                ((255 & r[11]) << 24),
              _ =
                (255 & n[16]) |
                ((255 & n[17]) << 8) |
                ((255 & n[18]) << 16) |
                ((255 & n[19]) << 24),
              y =
                (255 & n[20]) |
                ((255 & n[21]) << 8) |
                ((255 & n[22]) << 16) |
                ((255 & n[23]) << 24),
              m =
                (255 & n[24]) |
                ((255 & n[25]) << 8) |
                ((255 & n[26]) << 16) |
                ((255 & n[27]) << 24),
              b =
                (255 & n[28]) |
                ((255 & n[29]) << 8) |
                ((255 & n[30]) << 16) |
                ((255 & n[31]) << 24),
              w =
                (255 & r[12]) |
                ((255 & r[13]) << 8) |
                ((255 & r[14]) << 16) |
                ((255 & r[15]) << 24),
              v = s,
              T = o,
              R = a,
              I = u,
              A = c,
              S = l,
              E = h,
              O = f,
              k = d,
              N = g,
              U = p,
              B = _,
              C = y,
              P = m,
              L = b,
              M = w,
              x = 0;
            x < 20;
            x += 2
          )
            ((i = (v + C) | 0),
              (A ^= (i << 7) | (i >>> 25)),
              (i = (A + v) | 0),
              (k ^= (i << 9) | (i >>> 23)),
              (i = (k + A) | 0),
              (C ^= (i << 13) | (i >>> 19)),
              (i = (C + k) | 0),
              (v ^= (i << 18) | (i >>> 14)),
              (i = (S + T) | 0),
              (N ^= (i << 7) | (i >>> 25)),
              (i = (N + S) | 0),
              (P ^= (i << 9) | (i >>> 23)),
              (i = (P + N) | 0),
              (T ^= (i << 13) | (i >>> 19)),
              (i = (T + P) | 0),
              (S ^= (i << 18) | (i >>> 14)),
              (i = (U + E) | 0),
              (L ^= (i << 7) | (i >>> 25)),
              (i = (L + U) | 0),
              (R ^= (i << 9) | (i >>> 23)),
              (i = (R + L) | 0),
              (E ^= (i << 13) | (i >>> 19)),
              (i = (E + R) | 0),
              (U ^= (i << 18) | (i >>> 14)),
              (i = (M + B) | 0),
              (I ^= (i << 7) | (i >>> 25)),
              (i = (I + M) | 0),
              (O ^= (i << 9) | (i >>> 23)),
              (i = (O + I) | 0),
              (B ^= (i << 13) | (i >>> 19)),
              (i = (B + O) | 0),
              (M ^= (i << 18) | (i >>> 14)),
              (i = (v + I) | 0),
              (T ^= (i << 7) | (i >>> 25)),
              (i = (T + v) | 0),
              (R ^= (i << 9) | (i >>> 23)),
              (i = (R + T) | 0),
              (I ^= (i << 13) | (i >>> 19)),
              (i = (I + R) | 0),
              (v ^= (i << 18) | (i >>> 14)),
              (i = (S + A) | 0),
              (E ^= (i << 7) | (i >>> 25)),
              (i = (E + S) | 0),
              (O ^= (i << 9) | (i >>> 23)),
              (i = (O + E) | 0),
              (A ^= (i << 13) | (i >>> 19)),
              (i = (A + O) | 0),
              (S ^= (i << 18) | (i >>> 14)),
              (i = (U + N) | 0),
              (B ^= (i << 7) | (i >>> 25)),
              (i = (B + U) | 0),
              (k ^= (i << 9) | (i >>> 23)),
              (i = (k + B) | 0),
              (N ^= (i << 13) | (i >>> 19)),
              (i = (N + k) | 0),
              (U ^= (i << 18) | (i >>> 14)),
              (i = (M + L) | 0),
              (C ^= (i << 7) | (i >>> 25)),
              (i = (C + M) | 0),
              (P ^= (i << 9) | (i >>> 23)),
              (i = (P + C) | 0),
              (L ^= (i << 13) | (i >>> 19)),
              (i = (L + P) | 0),
              (M ^= (i << 18) | (i >>> 14)));
          ((t[0] = (v >>> 0) & 255),
            (t[1] = (v >>> 8) & 255),
            (t[2] = (v >>> 16) & 255),
            (t[3] = (v >>> 24) & 255),
            (t[4] = (S >>> 0) & 255),
            (t[5] = (S >>> 8) & 255),
            (t[6] = (S >>> 16) & 255),
            (t[7] = (S >>> 24) & 255),
            (t[8] = (U >>> 0) & 255),
            (t[9] = (U >>> 8) & 255),
            (t[10] = (U >>> 16) & 255),
            (t[11] = (U >>> 24) & 255),
            (t[12] = (M >>> 0) & 255),
            (t[13] = (M >>> 8) & 255),
            (t[14] = (M >>> 16) & 255),
            (t[15] = (M >>> 24) & 255),
            (t[16] = (E >>> 0) & 255),
            (t[17] = (E >>> 8) & 255),
            (t[18] = (E >>> 16) & 255),
            (t[19] = (E >>> 24) & 255),
            (t[20] = (O >>> 0) & 255),
            (t[21] = (O >>> 8) & 255),
            (t[22] = (O >>> 16) & 255),
            (t[23] = (O >>> 24) & 255),
            (t[24] = (k >>> 0) & 255),
            (t[25] = (k >>> 8) & 255),
            (t[26] = (k >>> 16) & 255),
            (t[27] = (k >>> 24) & 255),
            (t[28] = (N >>> 0) & 255),
            (t[29] = (N >>> 8) & 255),
            (t[30] = (N >>> 16) & 255),
            (t[31] = (N >>> 24) & 255));
        }
        function w(t, e, n, r) {
          m(t, e, n, r);
        }
        function v(t, e, n, r) {
          b(t, e, n, r);
        }
        var T = new Uint8Array([
          101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32,
          107,
        ]);
        function R(t, e, n, r, i, s, o) {
          var a,
            u,
            c = new Uint8Array(16),
            l = new Uint8Array(64);
          for (u = 0; u < 16; u++) c[u] = 0;
          for (u = 0; u < 8; u++) c[u] = s[u];
          while (i >= 64) {
            for (w(l, c, o, T), u = 0; u < 64; u++) t[e + u] = n[r + u] ^ l[u];
            for (a = 1, u = 8; u < 16; u++)
              ((a = (a + (255 & c[u])) | 0), (c[u] = 255 & a), (a >>>= 8));
            ((i -= 64), (e += 64), (r += 64));
          }
          if (i > 0)
            for (w(l, c, o, T), u = 0; u < i; u++) t[e + u] = n[r + u] ^ l[u];
          return 0;
        }
        function I(t, e, n, r, i) {
          var s,
            o,
            a = new Uint8Array(16),
            u = new Uint8Array(64);
          for (o = 0; o < 16; o++) a[o] = 0;
          for (o = 0; o < 8; o++) a[o] = r[o];
          while (n >= 64) {
            for (w(u, a, i, T), o = 0; o < 64; o++) t[e + o] = u[o];
            for (s = 1, o = 8; o < 16; o++)
              ((s = (s + (255 & a[o])) | 0), (a[o] = 255 & s), (s >>>= 8));
            ((n -= 64), (e += 64));
          }
          if (n > 0) for (w(u, a, i, T), o = 0; o < n; o++) t[e + o] = u[o];
          return 0;
        }
        function A(t, e, n, r, i) {
          var s = new Uint8Array(32);
          v(s, r, i, T);
          for (var o = new Uint8Array(8), a = 0; a < 8; a++) o[a] = r[a + 16];
          return I(t, e, n, o, s);
        }
        function S(t, e, n, r, i, s, o) {
          var a = new Uint8Array(32);
          v(a, s, o, T);
          for (var u = new Uint8Array(8), c = 0; c < 8; c++) u[c] = s[c + 16];
          return R(t, e, n, r, i, u, a);
        }
        var E = function (t) {
          var e, n, r, i, s, o, a, u;
          ((this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.leftover = 0),
            (this.fin = 0),
            (e = (255 & t[0]) | ((255 & t[1]) << 8)),
            (this.r[0] = 8191 & e),
            (n = (255 & t[2]) | ((255 & t[3]) << 8)),
            (this.r[1] = 8191 & ((e >>> 13) | (n << 3))),
            (r = (255 & t[4]) | ((255 & t[5]) << 8)),
            (this.r[2] = 7939 & ((n >>> 10) | (r << 6))),
            (i = (255 & t[6]) | ((255 & t[7]) << 8)),
            (this.r[3] = 8191 & ((r >>> 7) | (i << 9))),
            (s = (255 & t[8]) | ((255 & t[9]) << 8)),
            (this.r[4] = 255 & ((i >>> 4) | (s << 12))),
            (this.r[5] = (s >>> 1) & 8190),
            (o = (255 & t[10]) | ((255 & t[11]) << 8)),
            (this.r[6] = 8191 & ((s >>> 14) | (o << 2))),
            (a = (255 & t[12]) | ((255 & t[13]) << 8)),
            (this.r[7] = 8065 & ((o >>> 11) | (a << 5))),
            (u = (255 & t[14]) | ((255 & t[15]) << 8)),
            (this.r[8] = 8191 & ((a >>> 8) | (u << 8))),
            (this.r[9] = (u >>> 5) & 127),
            (this.pad[0] = (255 & t[16]) | ((255 & t[17]) << 8)),
            (this.pad[1] = (255 & t[18]) | ((255 & t[19]) << 8)),
            (this.pad[2] = (255 & t[20]) | ((255 & t[21]) << 8)),
            (this.pad[3] = (255 & t[22]) | ((255 & t[23]) << 8)),
            (this.pad[4] = (255 & t[24]) | ((255 & t[25]) << 8)),
            (this.pad[5] = (255 & t[26]) | ((255 & t[27]) << 8)),
            (this.pad[6] = (255 & t[28]) | ((255 & t[29]) << 8)),
            (this.pad[7] = (255 & t[30]) | ((255 & t[31]) << 8)));
        };
        function O(t, e, n, r, i, s) {
          var o = new E(s);
          return (o.update(n, r, i), o.finish(t, e), 0);
        }
        function k(t, e, n, r, i, s) {
          var o = new Uint8Array(16);
          return (O(o, 0, n, r, i, s), _(t, e, o, 0));
        }
        function N(t, e, n, r, i) {
          var s;
          if (n < 32) return -1;
          for (
            S(t, 0, e, 0, n, r, i), O(t, 16, t, 32, n - 32, t), s = 0;
            s < 16;
            s++
          )
            t[s] = 0;
          return 0;
        }
        function U(t, e, n, r, i) {
          var s,
            o = new Uint8Array(32);
          if (n < 32) return -1;
          if ((A(o, 0, 32, r, i), 0 !== k(e, 16, e, 32, n - 32, o))) return -1;
          for (S(t, 0, e, 0, n, r, i), s = 0; s < 32; s++) t[s] = 0;
          return 0;
        }
        function B(t, e) {
          var n;
          for (n = 0; n < 16; n++) t[n] = 0 | e[n];
        }
        function C(t) {
          var e,
            n,
            r = 1;
          for (e = 0; e < 16; e++)
            ((n = t[e] + r + 65535),
              (r = Math.floor(n / 65536)),
              (t[e] = n - 65536 * r));
          t[0] += r - 1 + 37 * (r - 1);
        }
        function P(t, e, n) {
          for (var r, i = ~(n - 1), s = 0; s < 16; s++)
            ((r = i & (t[s] ^ e[s])), (t[s] ^= r), (e[s] ^= r));
        }
        function L(t, n) {
          var r,
            i,
            s,
            o = e(),
            a = e();
          for (r = 0; r < 16; r++) a[r] = n[r];
          for (C(a), C(a), C(a), i = 0; i < 2; i++) {
            for (o[0] = a[0] - 65517, r = 1; r < 15; r++)
              ((o[r] = a[r] - 65535 - ((o[r - 1] >> 16) & 1)),
                (o[r - 1] &= 65535));
            ((o[15] = a[15] - 32767 - ((o[14] >> 16) & 1)),
              (s = (o[15] >> 16) & 1),
              (o[14] &= 65535),
              P(a, o, 1 - s));
          }
          for (r = 0; r < 16; r++)
            ((t[2 * r] = 255 & a[r]), (t[2 * r + 1] = a[r] >> 8));
        }
        function M(t, e) {
          var n = new Uint8Array(32),
            r = new Uint8Array(32);
          return (L(n, t), L(r, e), y(n, 0, r, 0));
        }
        function x(t) {
          var e = new Uint8Array(32);
          return (L(e, t), 1 & e[0]);
        }
        function D(t, e) {
          var n;
          for (n = 0; n < 16; n++) t[n] = e[2 * n] + (e[2 * n + 1] << 8);
          t[15] &= 32767;
        }
        function F(t, e, n) {
          for (var r = 0; r < 16; r++) t[r] = e[r] + n[r];
        }
        function z(t, e, n) {
          for (var r = 0; r < 16; r++) t[r] = e[r] - n[r];
        }
        function j(t, e, n) {
          var r,
            i,
            s = 0,
            o = 0,
            a = 0,
            u = 0,
            c = 0,
            l = 0,
            h = 0,
            f = 0,
            d = 0,
            g = 0,
            p = 0,
            _ = 0,
            y = 0,
            m = 0,
            b = 0,
            w = 0,
            v = 0,
            T = 0,
            R = 0,
            I = 0,
            A = 0,
            S = 0,
            E = 0,
            O = 0,
            k = 0,
            N = 0,
            U = 0,
            B = 0,
            C = 0,
            P = 0,
            L = 0,
            M = n[0],
            x = n[1],
            D = n[2],
            F = n[3],
            z = n[4],
            j = n[5],
            q = n[6],
            H = n[7],
            K = n[8],
            V = n[9],
            W = n[10],
            G = n[11],
            Q = n[12],
            Y = n[13],
            $ = n[14],
            Z = n[15];
          ((r = e[0]),
            (s += r * M),
            (o += r * x),
            (a += r * D),
            (u += r * F),
            (c += r * z),
            (l += r * j),
            (h += r * q),
            (f += r * H),
            (d += r * K),
            (g += r * V),
            (p += r * W),
            (_ += r * G),
            (y += r * Q),
            (m += r * Y),
            (b += r * $),
            (w += r * Z),
            (r = e[1]),
            (o += r * M),
            (a += r * x),
            (u += r * D),
            (c += r * F),
            (l += r * z),
            (h += r * j),
            (f += r * q),
            (d += r * H),
            (g += r * K),
            (p += r * V),
            (_ += r * W),
            (y += r * G),
            (m += r * Q),
            (b += r * Y),
            (w += r * $),
            (v += r * Z),
            (r = e[2]),
            (a += r * M),
            (u += r * x),
            (c += r * D),
            (l += r * F),
            (h += r * z),
            (f += r * j),
            (d += r * q),
            (g += r * H),
            (p += r * K),
            (_ += r * V),
            (y += r * W),
            (m += r * G),
            (b += r * Q),
            (w += r * Y),
            (v += r * $),
            (T += r * Z),
            (r = e[3]),
            (u += r * M),
            (c += r * x),
            (l += r * D),
            (h += r * F),
            (f += r * z),
            (d += r * j),
            (g += r * q),
            (p += r * H),
            (_ += r * K),
            (y += r * V),
            (m += r * W),
            (b += r * G),
            (w += r * Q),
            (v += r * Y),
            (T += r * $),
            (R += r * Z),
            (r = e[4]),
            (c += r * M),
            (l += r * x),
            (h += r * D),
            (f += r * F),
            (d += r * z),
            (g += r * j),
            (p += r * q),
            (_ += r * H),
            (y += r * K),
            (m += r * V),
            (b += r * W),
            (w += r * G),
            (v += r * Q),
            (T += r * Y),
            (R += r * $),
            (I += r * Z),
            (r = e[5]),
            (l += r * M),
            (h += r * x),
            (f += r * D),
            (d += r * F),
            (g += r * z),
            (p += r * j),
            (_ += r * q),
            (y += r * H),
            (m += r * K),
            (b += r * V),
            (w += r * W),
            (v += r * G),
            (T += r * Q),
            (R += r * Y),
            (I += r * $),
            (A += r * Z),
            (r = e[6]),
            (h += r * M),
            (f += r * x),
            (d += r * D),
            (g += r * F),
            (p += r * z),
            (_ += r * j),
            (y += r * q),
            (m += r * H),
            (b += r * K),
            (w += r * V),
            (v += r * W),
            (T += r * G),
            (R += r * Q),
            (I += r * Y),
            (A += r * $),
            (S += r * Z),
            (r = e[7]),
            (f += r * M),
            (d += r * x),
            (g += r * D),
            (p += r * F),
            (_ += r * z),
            (y += r * j),
            (m += r * q),
            (b += r * H),
            (w += r * K),
            (v += r * V),
            (T += r * W),
            (R += r * G),
            (I += r * Q),
            (A += r * Y),
            (S += r * $),
            (E += r * Z),
            (r = e[8]),
            (d += r * M),
            (g += r * x),
            (p += r * D),
            (_ += r * F),
            (y += r * z),
            (m += r * j),
            (b += r * q),
            (w += r * H),
            (v += r * K),
            (T += r * V),
            (R += r * W),
            (I += r * G),
            (A += r * Q),
            (S += r * Y),
            (E += r * $),
            (O += r * Z),
            (r = e[9]),
            (g += r * M),
            (p += r * x),
            (_ += r * D),
            (y += r * F),
            (m += r * z),
            (b += r * j),
            (w += r * q),
            (v += r * H),
            (T += r * K),
            (R += r * V),
            (I += r * W),
            (A += r * G),
            (S += r * Q),
            (E += r * Y),
            (O += r * $),
            (k += r * Z),
            (r = e[10]),
            (p += r * M),
            (_ += r * x),
            (y += r * D),
            (m += r * F),
            (b += r * z),
            (w += r * j),
            (v += r * q),
            (T += r * H),
            (R += r * K),
            (I += r * V),
            (A += r * W),
            (S += r * G),
            (E += r * Q),
            (O += r * Y),
            (k += r * $),
            (N += r * Z),
            (r = e[11]),
            (_ += r * M),
            (y += r * x),
            (m += r * D),
            (b += r * F),
            (w += r * z),
            (v += r * j),
            (T += r * q),
            (R += r * H),
            (I += r * K),
            (A += r * V),
            (S += r * W),
            (E += r * G),
            (O += r * Q),
            (k += r * Y),
            (N += r * $),
            (U += r * Z),
            (r = e[12]),
            (y += r * M),
            (m += r * x),
            (b += r * D),
            (w += r * F),
            (v += r * z),
            (T += r * j),
            (R += r * q),
            (I += r * H),
            (A += r * K),
            (S += r * V),
            (E += r * W),
            (O += r * G),
            (k += r * Q),
            (N += r * Y),
            (U += r * $),
            (B += r * Z),
            (r = e[13]),
            (m += r * M),
            (b += r * x),
            (w += r * D),
            (v += r * F),
            (T += r * z),
            (R += r * j),
            (I += r * q),
            (A += r * H),
            (S += r * K),
            (E += r * V),
            (O += r * W),
            (k += r * G),
            (N += r * Q),
            (U += r * Y),
            (B += r * $),
            (C += r * Z),
            (r = e[14]),
            (b += r * M),
            (w += r * x),
            (v += r * D),
            (T += r * F),
            (R += r * z),
            (I += r * j),
            (A += r * q),
            (S += r * H),
            (E += r * K),
            (O += r * V),
            (k += r * W),
            (N += r * G),
            (U += r * Q),
            (B += r * Y),
            (C += r * $),
            (P += r * Z),
            (r = e[15]),
            (w += r * M),
            (v += r * x),
            (T += r * D),
            (R += r * F),
            (I += r * z),
            (A += r * j),
            (S += r * q),
            (E += r * H),
            (O += r * K),
            (k += r * V),
            (N += r * W),
            (U += r * G),
            (B += r * Q),
            (C += r * Y),
            (P += r * $),
            (L += r * Z),
            (s += 38 * v),
            (o += 38 * T),
            (a += 38 * R),
            (u += 38 * I),
            (c += 38 * A),
            (l += 38 * S),
            (h += 38 * E),
            (f += 38 * O),
            (d += 38 * k),
            (g += 38 * N),
            (p += 38 * U),
            (_ += 38 * B),
            (y += 38 * C),
            (m += 38 * P),
            (b += 38 * L),
            (i = 1),
            (r = s + i + 65535),
            (i = Math.floor(r / 65536)),
            (s = r - 65536 * i),
            (r = o + i + 65535),
            (i = Math.floor(r / 65536)),
            (o = r - 65536 * i),
            (r = a + i + 65535),
            (i = Math.floor(r / 65536)),
            (a = r - 65536 * i),
            (r = u + i + 65535),
            (i = Math.floor(r / 65536)),
            (u = r - 65536 * i),
            (r = c + i + 65535),
            (i = Math.floor(r / 65536)),
            (c = r - 65536 * i),
            (r = l + i + 65535),
            (i = Math.floor(r / 65536)),
            (l = r - 65536 * i),
            (r = h + i + 65535),
            (i = Math.floor(r / 65536)),
            (h = r - 65536 * i),
            (r = f + i + 65535),
            (i = Math.floor(r / 65536)),
            (f = r - 65536 * i),
            (r = d + i + 65535),
            (i = Math.floor(r / 65536)),
            (d = r - 65536 * i),
            (r = g + i + 65535),
            (i = Math.floor(r / 65536)),
            (g = r - 65536 * i),
            (r = p + i + 65535),
            (i = Math.floor(r / 65536)),
            (p = r - 65536 * i),
            (r = _ + i + 65535),
            (i = Math.floor(r / 65536)),
            (_ = r - 65536 * i),
            (r = y + i + 65535),
            (i = Math.floor(r / 65536)),
            (y = r - 65536 * i),
            (r = m + i + 65535),
            (i = Math.floor(r / 65536)),
            (m = r - 65536 * i),
            (r = b + i + 65535),
            (i = Math.floor(r / 65536)),
            (b = r - 65536 * i),
            (r = w + i + 65535),
            (i = Math.floor(r / 65536)),
            (w = r - 65536 * i),
            (s += i - 1 + 37 * (i - 1)),
            (i = 1),
            (r = s + i + 65535),
            (i = Math.floor(r / 65536)),
            (s = r - 65536 * i),
            (r = o + i + 65535),
            (i = Math.floor(r / 65536)),
            (o = r - 65536 * i),
            (r = a + i + 65535),
            (i = Math.floor(r / 65536)),
            (a = r - 65536 * i),
            (r = u + i + 65535),
            (i = Math.floor(r / 65536)),
            (u = r - 65536 * i),
            (r = c + i + 65535),
            (i = Math.floor(r / 65536)),
            (c = r - 65536 * i),
            (r = l + i + 65535),
            (i = Math.floor(r / 65536)),
            (l = r - 65536 * i),
            (r = h + i + 65535),
            (i = Math.floor(r / 65536)),
            (h = r - 65536 * i),
            (r = f + i + 65535),
            (i = Math.floor(r / 65536)),
            (f = r - 65536 * i),
            (r = d + i + 65535),
            (i = Math.floor(r / 65536)),
            (d = r - 65536 * i),
            (r = g + i + 65535),
            (i = Math.floor(r / 65536)),
            (g = r - 65536 * i),
            (r = p + i + 65535),
            (i = Math.floor(r / 65536)),
            (p = r - 65536 * i),
            (r = _ + i + 65535),
            (i = Math.floor(r / 65536)),
            (_ = r - 65536 * i),
            (r = y + i + 65535),
            (i = Math.floor(r / 65536)),
            (y = r - 65536 * i),
            (r = m + i + 65535),
            (i = Math.floor(r / 65536)),
            (m = r - 65536 * i),
            (r = b + i + 65535),
            (i = Math.floor(r / 65536)),
            (b = r - 65536 * i),
            (r = w + i + 65535),
            (i = Math.floor(r / 65536)),
            (w = r - 65536 * i),
            (s += i - 1 + 37 * (i - 1)),
            (t[0] = s),
            (t[1] = o),
            (t[2] = a),
            (t[3] = u),
            (t[4] = c),
            (t[5] = l),
            (t[6] = h),
            (t[7] = f),
            (t[8] = d),
            (t[9] = g),
            (t[10] = p),
            (t[11] = _),
            (t[12] = y),
            (t[13] = m),
            (t[14] = b),
            (t[15] = w));
        }
        function q(t, e) {
          j(t, e, e);
        }
        function H(t, n) {
          var r,
            i = e();
          for (r = 0; r < 16; r++) i[r] = n[r];
          for (r = 253; r >= 0; r--)
            (q(i, i), 2 !== r && 4 !== r && j(i, i, n));
          for (r = 0; r < 16; r++) t[r] = i[r];
        }
        function K(t, n) {
          var r,
            i = e();
          for (r = 0; r < 16; r++) i[r] = n[r];
          for (r = 250; r >= 0; r--) (q(i, i), 1 !== r && j(i, i, n));
          for (r = 0; r < 16; r++) t[r] = i[r];
        }
        function V(t, n, r) {
          var i,
            s,
            o = new Uint8Array(32),
            a = new Float64Array(80),
            c = e(),
            l = e(),
            h = e(),
            f = e(),
            d = e(),
            g = e();
          for (s = 0; s < 31; s++) o[s] = n[s];
          for (
            o[31] = (127 & n[31]) | 64, o[0] &= 248, D(a, r), s = 0;
            s < 16;
            s++
          )
            ((l[s] = a[s]), (f[s] = c[s] = h[s] = 0));
          for (c[0] = f[0] = 1, s = 254; s >= 0; --s)
            ((i = (o[s >>> 3] >>> (7 & s)) & 1),
              P(c, l, i),
              P(h, f, i),
              F(d, c, h),
              z(c, c, h),
              F(h, l, f),
              z(l, l, f),
              q(f, d),
              q(g, c),
              j(c, h, c),
              j(h, l, d),
              F(d, c, h),
              z(c, c, h),
              q(l, c),
              z(h, f, g),
              j(c, h, u),
              F(c, c, f),
              j(h, h, c),
              j(c, f, g),
              j(f, l, a),
              q(l, d),
              P(c, l, i),
              P(h, f, i));
          for (s = 0; s < 16; s++)
            ((a[s + 16] = c[s]),
              (a[s + 32] = h[s]),
              (a[s + 48] = l[s]),
              (a[s + 64] = f[s]));
          var p = a.subarray(32),
            _ = a.subarray(16);
          return (H(p, p), j(_, _, p), L(t, _), 0);
        }
        function W(t, e) {
          return V(t, e, s);
        }
        function G(t, e) {
          return (r(e, 32), W(t, e));
        }
        function Q(t, e, n) {
          var r = new Uint8Array(32);
          return (V(r, n, e), v(t, i, r, T));
        }
        ((E.prototype.blocks = function (t, e, n) {
          var r,
            i,
            s,
            o,
            a,
            u,
            c,
            l,
            h,
            f,
            d,
            g,
            p,
            _,
            y,
            m,
            b,
            w,
            v,
            T = this.fin ? 0 : 2048,
            R = this.h[0],
            I = this.h[1],
            A = this.h[2],
            S = this.h[3],
            E = this.h[4],
            O = this.h[5],
            k = this.h[6],
            N = this.h[7],
            U = this.h[8],
            B = this.h[9],
            C = this.r[0],
            P = this.r[1],
            L = this.r[2],
            M = this.r[3],
            x = this.r[4],
            D = this.r[5],
            F = this.r[6],
            z = this.r[7],
            j = this.r[8],
            q = this.r[9];
          while (n >= 16)
            ((r = (255 & t[e + 0]) | ((255 & t[e + 1]) << 8)),
              (R += 8191 & r),
              (i = (255 & t[e + 2]) | ((255 & t[e + 3]) << 8)),
              (I += 8191 & ((r >>> 13) | (i << 3))),
              (s = (255 & t[e + 4]) | ((255 & t[e + 5]) << 8)),
              (A += 8191 & ((i >>> 10) | (s << 6))),
              (o = (255 & t[e + 6]) | ((255 & t[e + 7]) << 8)),
              (S += 8191 & ((s >>> 7) | (o << 9))),
              (a = (255 & t[e + 8]) | ((255 & t[e + 9]) << 8)),
              (E += 8191 & ((o >>> 4) | (a << 12))),
              (O += (a >>> 1) & 8191),
              (u = (255 & t[e + 10]) | ((255 & t[e + 11]) << 8)),
              (k += 8191 & ((a >>> 14) | (u << 2))),
              (c = (255 & t[e + 12]) | ((255 & t[e + 13]) << 8)),
              (N += 8191 & ((u >>> 11) | (c << 5))),
              (l = (255 & t[e + 14]) | ((255 & t[e + 15]) << 8)),
              (U += 8191 & ((c >>> 8) | (l << 8))),
              (B += (l >>> 5) | T),
              (h = 0),
              (f = h),
              (f += R * C),
              (f += I * (5 * q)),
              (f += A * (5 * j)),
              (f += S * (5 * z)),
              (f += E * (5 * F)),
              (h = f >>> 13),
              (f &= 8191),
              (f += O * (5 * D)),
              (f += k * (5 * x)),
              (f += N * (5 * M)),
              (f += U * (5 * L)),
              (f += B * (5 * P)),
              (h += f >>> 13),
              (f &= 8191),
              (d = h),
              (d += R * P),
              (d += I * C),
              (d += A * (5 * q)),
              (d += S * (5 * j)),
              (d += E * (5 * z)),
              (h = d >>> 13),
              (d &= 8191),
              (d += O * (5 * F)),
              (d += k * (5 * D)),
              (d += N * (5 * x)),
              (d += U * (5 * M)),
              (d += B * (5 * L)),
              (h += d >>> 13),
              (d &= 8191),
              (g = h),
              (g += R * L),
              (g += I * P),
              (g += A * C),
              (g += S * (5 * q)),
              (g += E * (5 * j)),
              (h = g >>> 13),
              (g &= 8191),
              (g += O * (5 * z)),
              (g += k * (5 * F)),
              (g += N * (5 * D)),
              (g += U * (5 * x)),
              (g += B * (5 * M)),
              (h += g >>> 13),
              (g &= 8191),
              (p = h),
              (p += R * M),
              (p += I * L),
              (p += A * P),
              (p += S * C),
              (p += E * (5 * q)),
              (h = p >>> 13),
              (p &= 8191),
              (p += O * (5 * j)),
              (p += k * (5 * z)),
              (p += N * (5 * F)),
              (p += U * (5 * D)),
              (p += B * (5 * x)),
              (h += p >>> 13),
              (p &= 8191),
              (_ = h),
              (_ += R * x),
              (_ += I * M),
              (_ += A * L),
              (_ += S * P),
              (_ += E * C),
              (h = _ >>> 13),
              (_ &= 8191),
              (_ += O * (5 * q)),
              (_ += k * (5 * j)),
              (_ += N * (5 * z)),
              (_ += U * (5 * F)),
              (_ += B * (5 * D)),
              (h += _ >>> 13),
              (_ &= 8191),
              (y = h),
              (y += R * D),
              (y += I * x),
              (y += A * M),
              (y += S * L),
              (y += E * P),
              (h = y >>> 13),
              (y &= 8191),
              (y += O * C),
              (y += k * (5 * q)),
              (y += N * (5 * j)),
              (y += U * (5 * z)),
              (y += B * (5 * F)),
              (h += y >>> 13),
              (y &= 8191),
              (m = h),
              (m += R * F),
              (m += I * D),
              (m += A * x),
              (m += S * M),
              (m += E * L),
              (h = m >>> 13),
              (m &= 8191),
              (m += O * P),
              (m += k * C),
              (m += N * (5 * q)),
              (m += U * (5 * j)),
              (m += B * (5 * z)),
              (h += m >>> 13),
              (m &= 8191),
              (b = h),
              (b += R * z),
              (b += I * F),
              (b += A * D),
              (b += S * x),
              (b += E * M),
              (h = b >>> 13),
              (b &= 8191),
              (b += O * L),
              (b += k * P),
              (b += N * C),
              (b += U * (5 * q)),
              (b += B * (5 * j)),
              (h += b >>> 13),
              (b &= 8191),
              (w = h),
              (w += R * j),
              (w += I * z),
              (w += A * F),
              (w += S * D),
              (w += E * x),
              (h = w >>> 13),
              (w &= 8191),
              (w += O * M),
              (w += k * L),
              (w += N * P),
              (w += U * C),
              (w += B * (5 * q)),
              (h += w >>> 13),
              (w &= 8191),
              (v = h),
              (v += R * q),
              (v += I * j),
              (v += A * z),
              (v += S * F),
              (v += E * D),
              (h = v >>> 13),
              (v &= 8191),
              (v += O * x),
              (v += k * M),
              (v += N * L),
              (v += U * P),
              (v += B * C),
              (h += v >>> 13),
              (v &= 8191),
              (h = ((h << 2) + h) | 0),
              (h = (h + f) | 0),
              (f = 8191 & h),
              (h >>>= 13),
              (d += h),
              (R = f),
              (I = d),
              (A = g),
              (S = p),
              (E = _),
              (O = y),
              (k = m),
              (N = b),
              (U = w),
              (B = v),
              (e += 16),
              (n -= 16));
          ((this.h[0] = R),
            (this.h[1] = I),
            (this.h[2] = A),
            (this.h[3] = S),
            (this.h[4] = E),
            (this.h[5] = O),
            (this.h[6] = k),
            (this.h[7] = N),
            (this.h[8] = U),
            (this.h[9] = B));
        }),
          (E.prototype.finish = function (t, e) {
            var n,
              r,
              i,
              s,
              o = new Uint16Array(10);
            if (this.leftover) {
              for (s = this.leftover, this.buffer[s++] = 1; s < 16; s++)
                this.buffer[s] = 0;
              ((this.fin = 1), this.blocks(this.buffer, 0, 16));
            }
            for (n = this.h[1] >>> 13, this.h[1] &= 8191, s = 2; s < 10; s++)
              ((this.h[s] += n), (n = this.h[s] >>> 13), (this.h[s] &= 8191));
            for (
              this.h[0] += 5 * n,
                n = this.h[0] >>> 13,
                this.h[0] &= 8191,
                this.h[1] += n,
                n = this.h[1] >>> 13,
                this.h[1] &= 8191,
                this.h[2] += n,
                o[0] = this.h[0] + 5,
                n = o[0] >>> 13,
                o[0] &= 8191,
                s = 1;
              s < 10;
              s++
            )
              ((o[s] = this.h[s] + n), (n = o[s] >>> 13), (o[s] &= 8191));
            for (o[9] -= 8192, r = (1 ^ n) - 1, s = 0; s < 10; s++) o[s] &= r;
            for (r = ~r, s = 0; s < 10; s++) this.h[s] = (this.h[s] & r) | o[s];
            for (
              this.h[0] = 65535 & (this.h[0] | (this.h[1] << 13)),
                this.h[1] = 65535 & ((this.h[1] >>> 3) | (this.h[2] << 10)),
                this.h[2] = 65535 & ((this.h[2] >>> 6) | (this.h[3] << 7)),
                this.h[3] = 65535 & ((this.h[3] >>> 9) | (this.h[4] << 4)),
                this.h[4] =
                  65535 &
                  ((this.h[4] >>> 12) | (this.h[5] << 1) | (this.h[6] << 14)),
                this.h[5] = 65535 & ((this.h[6] >>> 2) | (this.h[7] << 11)),
                this.h[6] = 65535 & ((this.h[7] >>> 5) | (this.h[8] << 8)),
                this.h[7] = 65535 & ((this.h[8] >>> 8) | (this.h[9] << 5)),
                i = this.h[0] + this.pad[0],
                this.h[0] = 65535 & i,
                s = 1;
              s < 8;
              s++
            )
              ((i = (((this.h[s] + this.pad[s]) | 0) + (i >>> 16)) | 0),
                (this.h[s] = 65535 & i));
            ((t[e + 0] = (this.h[0] >>> 0) & 255),
              (t[e + 1] = (this.h[0] >>> 8) & 255),
              (t[e + 2] = (this.h[1] >>> 0) & 255),
              (t[e + 3] = (this.h[1] >>> 8) & 255),
              (t[e + 4] = (this.h[2] >>> 0) & 255),
              (t[e + 5] = (this.h[2] >>> 8) & 255),
              (t[e + 6] = (this.h[3] >>> 0) & 255),
              (t[e + 7] = (this.h[3] >>> 8) & 255),
              (t[e + 8] = (this.h[4] >>> 0) & 255),
              (t[e + 9] = (this.h[4] >>> 8) & 255),
              (t[e + 10] = (this.h[5] >>> 0) & 255),
              (t[e + 11] = (this.h[5] >>> 8) & 255),
              (t[e + 12] = (this.h[6] >>> 0) & 255),
              (t[e + 13] = (this.h[6] >>> 8) & 255),
              (t[e + 14] = (this.h[7] >>> 0) & 255),
              (t[e + 15] = (this.h[7] >>> 8) & 255));
          }),
          (E.prototype.update = function (t, e, n) {
            var r, i;
            if (this.leftover) {
              for (i = 16 - this.leftover, i > n && (i = n), r = 0; r < i; r++)
                this.buffer[this.leftover + r] = t[e + r];
              if (
                ((n -= i), (e += i), (this.leftover += i), this.leftover < 16)
              )
                return;
              (this.blocks(this.buffer, 0, 16), (this.leftover = 0));
            }
            if (
              (n >= 16 &&
                ((i = n - (n % 16)), this.blocks(t, e, i), (e += i), (n -= i)),
              n)
            ) {
              for (r = 0; r < n; r++) this.buffer[this.leftover + r] = t[e + r];
              this.leftover += n;
            }
          }));
        var Y = N,
          $ = U;
        function Z(t, e, n, r, i, s) {
          var o = new Uint8Array(32);
          return (Q(o, i, s), Y(t, e, n, r, o));
        }
        function J(t, e, n, r, i, s) {
          var o = new Uint8Array(32);
          return (Q(o, i, s), $(t, e, n, r, o));
        }
        var X = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ];
        function tt(t, e, n, r) {
          var i,
            s,
            o,
            a,
            u,
            c,
            l,
            h,
            f,
            d,
            g,
            p,
            _,
            y,
            m,
            b,
            w,
            v,
            T,
            R,
            I,
            A,
            S,
            E,
            O,
            k,
            N = new Int32Array(16),
            U = new Int32Array(16),
            B = t[0],
            C = t[1],
            P = t[2],
            L = t[3],
            M = t[4],
            x = t[5],
            D = t[6],
            F = t[7],
            z = e[0],
            j = e[1],
            q = e[2],
            H = e[3],
            K = e[4],
            V = e[5],
            W = e[6],
            G = e[7],
            Q = 0;
          while (r >= 128) {
            for (T = 0; T < 16; T++)
              ((R = 8 * T + Q),
                (N[T] =
                  (n[R + 0] << 24) |
                  (n[R + 1] << 16) |
                  (n[R + 2] << 8) |
                  n[R + 3]),
                (U[T] =
                  (n[R + 4] << 24) |
                  (n[R + 5] << 16) |
                  (n[R + 6] << 8) |
                  n[R + 7]));
            for (T = 0; T < 80; T++)
              if (
                ((i = B),
                (s = C),
                (o = P),
                (a = L),
                (u = M),
                (c = x),
                (l = D),
                (h = F),
                (f = z),
                (d = j),
                (g = q),
                (p = H),
                (_ = K),
                (y = V),
                (m = W),
                (b = G),
                (I = F),
                (A = G),
                (S = 65535 & A),
                (E = A >>> 16),
                (O = 65535 & I),
                (k = I >>> 16),
                (I =
                  ((M >>> 14) | (K << 18)) ^
                  ((M >>> 18) | (K << 14)) ^
                  ((K >>> 9) | (M << 23))),
                (A =
                  ((K >>> 14) | (M << 18)) ^
                  ((K >>> 18) | (M << 14)) ^
                  ((M >>> 9) | (K << 23))),
                (S += 65535 & A),
                (E += A >>> 16),
                (O += 65535 & I),
                (k += I >>> 16),
                (I = (M & x) ^ (~M & D)),
                (A = (K & V) ^ (~K & W)),
                (S += 65535 & A),
                (E += A >>> 16),
                (O += 65535 & I),
                (k += I >>> 16),
                (I = X[2 * T]),
                (A = X[2 * T + 1]),
                (S += 65535 & A),
                (E += A >>> 16),
                (O += 65535 & I),
                (k += I >>> 16),
                (I = N[T % 16]),
                (A = U[T % 16]),
                (S += 65535 & A),
                (E += A >>> 16),
                (O += 65535 & I),
                (k += I >>> 16),
                (E += S >>> 16),
                (O += E >>> 16),
                (k += O >>> 16),
                (w = (65535 & O) | (k << 16)),
                (v = (65535 & S) | (E << 16)),
                (I = w),
                (A = v),
                (S = 65535 & A),
                (E = A >>> 16),
                (O = 65535 & I),
                (k = I >>> 16),
                (I =
                  ((B >>> 28) | (z << 4)) ^
                  ((z >>> 2) | (B << 30)) ^
                  ((z >>> 7) | (B << 25))),
                (A =
                  ((z >>> 28) | (B << 4)) ^
                  ((B >>> 2) | (z << 30)) ^
                  ((B >>> 7) | (z << 25))),
                (S += 65535 & A),
                (E += A >>> 16),
                (O += 65535 & I),
                (k += I >>> 16),
                (I = (B & C) ^ (B & P) ^ (C & P)),
                (A = (z & j) ^ (z & q) ^ (j & q)),
                (S += 65535 & A),
                (E += A >>> 16),
                (O += 65535 & I),
                (k += I >>> 16),
                (E += S >>> 16),
                (O += E >>> 16),
                (k += O >>> 16),
                (h = (65535 & O) | (k << 16)),
                (b = (65535 & S) | (E << 16)),
                (I = a),
                (A = p),
                (S = 65535 & A),
                (E = A >>> 16),
                (O = 65535 & I),
                (k = I >>> 16),
                (I = w),
                (A = v),
                (S += 65535 & A),
                (E += A >>> 16),
                (O += 65535 & I),
                (k += I >>> 16),
                (E += S >>> 16),
                (O += E >>> 16),
                (k += O >>> 16),
                (a = (65535 & O) | (k << 16)),
                (p = (65535 & S) | (E << 16)),
                (C = i),
                (P = s),
                (L = o),
                (M = a),
                (x = u),
                (D = c),
                (F = l),
                (B = h),
                (j = f),
                (q = d),
                (H = g),
                (K = p),
                (V = _),
                (W = y),
                (G = m),
                (z = b),
                T % 16 === 15)
              )
                for (R = 0; R < 16; R++)
                  ((I = N[R]),
                    (A = U[R]),
                    (S = 65535 & A),
                    (E = A >>> 16),
                    (O = 65535 & I),
                    (k = I >>> 16),
                    (I = N[(R + 9) % 16]),
                    (A = U[(R + 9) % 16]),
                    (S += 65535 & A),
                    (E += A >>> 16),
                    (O += 65535 & I),
                    (k += I >>> 16),
                    (w = N[(R + 1) % 16]),
                    (v = U[(R + 1) % 16]),
                    (I =
                      ((w >>> 1) | (v << 31)) ^
                      ((w >>> 8) | (v << 24)) ^
                      (w >>> 7)),
                    (A =
                      ((v >>> 1) | (w << 31)) ^
                      ((v >>> 8) | (w << 24)) ^
                      ((v >>> 7) | (w << 25))),
                    (S += 65535 & A),
                    (E += A >>> 16),
                    (O += 65535 & I),
                    (k += I >>> 16),
                    (w = N[(R + 14) % 16]),
                    (v = U[(R + 14) % 16]),
                    (I =
                      ((w >>> 19) | (v << 13)) ^
                      ((v >>> 29) | (w << 3)) ^
                      (w >>> 6)),
                    (A =
                      ((v >>> 19) | (w << 13)) ^
                      ((w >>> 29) | (v << 3)) ^
                      ((v >>> 6) | (w << 26))),
                    (S += 65535 & A),
                    (E += A >>> 16),
                    (O += 65535 & I),
                    (k += I >>> 16),
                    (E += S >>> 16),
                    (O += E >>> 16),
                    (k += O >>> 16),
                    (N[R] = (65535 & O) | (k << 16)),
                    (U[R] = (65535 & S) | (E << 16)));
            ((I = B),
              (A = z),
              (S = 65535 & A),
              (E = A >>> 16),
              (O = 65535 & I),
              (k = I >>> 16),
              (I = t[0]),
              (A = e[0]),
              (S += 65535 & A),
              (E += A >>> 16),
              (O += 65535 & I),
              (k += I >>> 16),
              (E += S >>> 16),
              (O += E >>> 16),
              (k += O >>> 16),
              (t[0] = B = (65535 & O) | (k << 16)),
              (e[0] = z = (65535 & S) | (E << 16)),
              (I = C),
              (A = j),
              (S = 65535 & A),
              (E = A >>> 16),
              (O = 65535 & I),
              (k = I >>> 16),
              (I = t[1]),
              (A = e[1]),
              (S += 65535 & A),
              (E += A >>> 16),
              (O += 65535 & I),
              (k += I >>> 16),
              (E += S >>> 16),
              (O += E >>> 16),
              (k += O >>> 16),
              (t[1] = C = (65535 & O) | (k << 16)),
              (e[1] = j = (65535 & S) | (E << 16)),
              (I = P),
              (A = q),
              (S = 65535 & A),
              (E = A >>> 16),
              (O = 65535 & I),
              (k = I >>> 16),
              (I = t[2]),
              (A = e[2]),
              (S += 65535 & A),
              (E += A >>> 16),
              (O += 65535 & I),
              (k += I >>> 16),
              (E += S >>> 16),
              (O += E >>> 16),
              (k += O >>> 16),
              (t[2] = P = (65535 & O) | (k << 16)),
              (e[2] = q = (65535 & S) | (E << 16)),
              (I = L),
              (A = H),
              (S = 65535 & A),
              (E = A >>> 16),
              (O = 65535 & I),
              (k = I >>> 16),
              (I = t[3]),
              (A = e[3]),
              (S += 65535 & A),
              (E += A >>> 16),
              (O += 65535 & I),
              (k += I >>> 16),
              (E += S >>> 16),
              (O += E >>> 16),
              (k += O >>> 16),
              (t[3] = L = (65535 & O) | (k << 16)),
              (e[3] = H = (65535 & S) | (E << 16)),
              (I = M),
              (A = K),
              (S = 65535 & A),
              (E = A >>> 16),
              (O = 65535 & I),
              (k = I >>> 16),
              (I = t[4]),
              (A = e[4]),
              (S += 65535 & A),
              (E += A >>> 16),
              (O += 65535 & I),
              (k += I >>> 16),
              (E += S >>> 16),
              (O += E >>> 16),
              (k += O >>> 16),
              (t[4] = M = (65535 & O) | (k << 16)),
              (e[4] = K = (65535 & S) | (E << 16)),
              (I = x),
              (A = V),
              (S = 65535 & A),
              (E = A >>> 16),
              (O = 65535 & I),
              (k = I >>> 16),
              (I = t[5]),
              (A = e[5]),
              (S += 65535 & A),
              (E += A >>> 16),
              (O += 65535 & I),
              (k += I >>> 16),
              (E += S >>> 16),
              (O += E >>> 16),
              (k += O >>> 16),
              (t[5] = x = (65535 & O) | (k << 16)),
              (e[5] = V = (65535 & S) | (E << 16)),
              (I = D),
              (A = W),
              (S = 65535 & A),
              (E = A >>> 16),
              (O = 65535 & I),
              (k = I >>> 16),
              (I = t[6]),
              (A = e[6]),
              (S += 65535 & A),
              (E += A >>> 16),
              (O += 65535 & I),
              (k += I >>> 16),
              (E += S >>> 16),
              (O += E >>> 16),
              (k += O >>> 16),
              (t[6] = D = (65535 & O) | (k << 16)),
              (e[6] = W = (65535 & S) | (E << 16)),
              (I = F),
              (A = G),
              (S = 65535 & A),
              (E = A >>> 16),
              (O = 65535 & I),
              (k = I >>> 16),
              (I = t[7]),
              (A = e[7]),
              (S += 65535 & A),
              (E += A >>> 16),
              (O += 65535 & I),
              (k += I >>> 16),
              (E += S >>> 16),
              (O += E >>> 16),
              (k += O >>> 16),
              (t[7] = F = (65535 & O) | (k << 16)),
              (e[7] = G = (65535 & S) | (E << 16)),
              (Q += 128),
              (r -= 128));
          }
          return r;
        }
        function et(t, e, n) {
          var r,
            i = new Int32Array(8),
            s = new Int32Array(8),
            o = new Uint8Array(256),
            a = n;
          for (
            i[0] = 1779033703,
              i[1] = 3144134277,
              i[2] = 1013904242,
              i[3] = 2773480762,
              i[4] = 1359893119,
              i[5] = 2600822924,
              i[6] = 528734635,
              i[7] = 1541459225,
              s[0] = 4089235720,
              s[1] = 2227873595,
              s[2] = 4271175723,
              s[3] = 1595750129,
              s[4] = 2917565137,
              s[5] = 725511199,
              s[6] = 4215389547,
              s[7] = 327033209,
              tt(i, s, e, n),
              n %= 128,
              r = 0;
            r < n;
            r++
          )
            o[r] = e[a - n + r];
          for (
            o[n] = 128,
              n = 256 - 128 * (n < 112 ? 1 : 0),
              o[n - 9] = 0,
              g(o, n - 8, (a / 536870912) | 0, a << 3),
              tt(i, s, o, n),
              r = 0;
            r < 8;
            r++
          )
            g(t, 8 * r, i[r], s[r]);
          return 0;
        }
        function nt(t, n) {
          var r = e(),
            i = e(),
            s = e(),
            o = e(),
            a = e(),
            u = e(),
            c = e(),
            h = e(),
            f = e();
          (z(r, t[1], t[0]),
            z(f, n[1], n[0]),
            j(r, r, f),
            F(i, t[0], t[1]),
            F(f, n[0], n[1]),
            j(i, i, f),
            j(s, t[3], n[3]),
            j(s, s, l),
            j(o, t[2], n[2]),
            F(o, o, o),
            z(a, i, r),
            z(u, o, s),
            F(c, o, s),
            F(h, i, r),
            j(t[0], a, u),
            j(t[1], h, c),
            j(t[2], c, u),
            j(t[3], a, h));
        }
        function rt(t, e, n) {
          var r;
          for (r = 0; r < 4; r++) P(t[r], e[r], n);
        }
        function it(t, n) {
          var r = e(),
            i = e(),
            s = e();
          (H(s, n[2]),
            j(r, n[0], s),
            j(i, n[1], s),
            L(t, i),
            (t[31] ^= x(r) << 7));
        }
        function st(t, e, n) {
          var r, i;
          for (
            B(t[0], o), B(t[1], a), B(t[2], a), B(t[3], o), i = 255;
            i >= 0;
            --i
          )
            ((r = (n[(i / 8) | 0] >> (7 & i)) & 1),
              rt(t, e, r),
              nt(e, t),
              nt(t, t),
              rt(t, e, r));
        }
        function ot(t, n) {
          var r = [e(), e(), e(), e()];
          (B(r[0], h), B(r[1], f), B(r[2], a), j(r[3], h, f), st(t, r, n));
        }
        function at(t, n, i) {
          var s,
            o = new Uint8Array(64),
            a = [e(), e(), e(), e()];
          for (
            i || r(n, 32),
              et(o, n, 32),
              o[0] &= 248,
              o[31] &= 127,
              o[31] |= 64,
              ot(a, o),
              it(t, a),
              s = 0;
            s < 32;
            s++
          )
            n[s + 32] = t[s];
          return 0;
        }
        var ut = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
          20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
        ]);
        function ct(t, e) {
          var n, r, i, s;
          for (r = 63; r >= 32; --r) {
            for (n = 0, i = r - 32, s = r - 12; i < s; ++i)
              ((e[i] += n - 16 * e[r] * ut[i - (r - 32)]),
                (n = Math.floor((e[i] + 128) / 256)),
                (e[i] -= 256 * n));
            ((e[i] += n), (e[r] = 0));
          }
          for (n = 0, i = 0; i < 32; i++)
            ((e[i] += n - (e[31] >> 4) * ut[i]),
              (n = e[i] >> 8),
              (e[i] &= 255));
          for (i = 0; i < 32; i++) e[i] -= n * ut[i];
          for (r = 0; r < 32; r++)
            ((e[r + 1] += e[r] >> 8), (t[r] = 255 & e[r]));
        }
        function lt(t) {
          var e,
            n = new Float64Array(64);
          for (e = 0; e < 64; e++) n[e] = t[e];
          for (e = 0; e < 64; e++) t[e] = 0;
          ct(t, n);
        }
        function ht(t, n, r, i) {
          var s,
            o,
            a = new Uint8Array(64),
            u = new Uint8Array(64),
            c = new Uint8Array(64),
            l = new Float64Array(64),
            h = [e(), e(), e(), e()];
          (et(a, i, 32), (a[0] &= 248), (a[31] &= 127), (a[31] |= 64));
          var f = r + 64;
          for (s = 0; s < r; s++) t[64 + s] = n[s];
          for (s = 0; s < 32; s++) t[32 + s] = a[32 + s];
          for (
            et(c, t.subarray(32), r + 32), lt(c), ot(h, c), it(t, h), s = 32;
            s < 64;
            s++
          )
            t[s] = i[s];
          for (et(u, t, r + 64), lt(u), s = 0; s < 64; s++) l[s] = 0;
          for (s = 0; s < 32; s++) l[s] = c[s];
          for (s = 0; s < 32; s++)
            for (o = 0; o < 32; o++) l[s + o] += u[s] * a[o];
          return (ct(t.subarray(32), l), f);
        }
        function ft(t, n) {
          var r = e(),
            i = e(),
            s = e(),
            u = e(),
            l = e(),
            h = e(),
            f = e();
          return (
            B(t[2], a),
            D(t[1], n),
            q(s, t[1]),
            j(u, s, c),
            z(s, s, t[2]),
            F(u, t[2], u),
            q(l, u),
            q(h, l),
            j(f, h, l),
            j(r, f, s),
            j(r, r, u),
            K(r, r),
            j(r, r, s),
            j(r, r, u),
            j(r, r, u),
            j(t[0], r, u),
            q(i, t[0]),
            j(i, i, u),
            M(i, s) && j(t[0], t[0], d),
            q(i, t[0]),
            j(i, i, u),
            M(i, s)
              ? -1
              : (x(t[0]) === n[31] >> 7 && z(t[0], o, t[0]),
                j(t[3], t[0], t[1]),
                0)
          );
        }
        function dt(t, n, r, i) {
          var s,
            o = new Uint8Array(32),
            a = new Uint8Array(64),
            u = [e(), e(), e(), e()],
            c = [e(), e(), e(), e()];
          if (r < 64) return -1;
          if (ft(c, i)) return -1;
          for (s = 0; s < r; s++) t[s] = n[s];
          for (s = 0; s < 32; s++) t[s + 32] = i[s];
          if (
            (et(a, t, r),
            lt(a),
            st(u, c, a),
            ot(c, n.subarray(32)),
            nt(u, c),
            it(o, u),
            (r -= 64),
            y(n, 0, o, 0))
          ) {
            for (s = 0; s < r; s++) t[s] = 0;
            return -1;
          }
          for (s = 0; s < r; s++) t[s] = n[s + 64];
          return r;
        }
        var gt = 32,
          pt = 24,
          _t = 32,
          yt = 16,
          mt = 32,
          bt = 32,
          wt = 32,
          vt = 32,
          Tt = 32,
          Rt = pt,
          It = _t,
          At = yt,
          St = 64,
          Et = 32,
          Ot = 64,
          kt = 32,
          Nt = 64;
        function Ut(t, e) {
          if (t.length !== gt) throw new Error("bad key size");
          if (e.length !== pt) throw new Error("bad nonce size");
        }
        function Bt(t, e) {
          if (t.length !== wt) throw new Error("bad public key size");
          if (e.length !== vt) throw new Error("bad secret key size");
        }
        function Ct() {
          for (var t = 0; t < arguments.length; t++)
            if (!(arguments[t] instanceof Uint8Array))
              throw new TypeError("unexpected type, use Uint8Array");
        }
        function Pt(t) {
          for (var e = 0; e < t.length; e++) t[e] = 0;
        }
        ((t.lowlevel = {
          crypto_core_hsalsa20: v,
          crypto_stream_xor: S,
          crypto_stream: A,
          crypto_stream_salsa20_xor: R,
          crypto_stream_salsa20: I,
          crypto_onetimeauth: O,
          crypto_onetimeauth_verify: k,
          crypto_verify_16: _,
          crypto_verify_32: y,
          crypto_secretbox: N,
          crypto_secretbox_open: U,
          crypto_scalarmult: V,
          crypto_scalarmult_base: W,
          crypto_box_beforenm: Q,
          crypto_box_afternm: Y,
          crypto_box: Z,
          crypto_box_open: J,
          crypto_box_keypair: G,
          crypto_hash: et,
          crypto_sign: ht,
          crypto_sign_keypair: at,
          crypto_sign_open: dt,
          crypto_secretbox_KEYBYTES: gt,
          crypto_secretbox_NONCEBYTES: pt,
          crypto_secretbox_ZEROBYTES: _t,
          crypto_secretbox_BOXZEROBYTES: yt,
          crypto_scalarmult_BYTES: mt,
          crypto_scalarmult_SCALARBYTES: bt,
          crypto_box_PUBLICKEYBYTES: wt,
          crypto_box_SECRETKEYBYTES: vt,
          crypto_box_BEFORENMBYTES: Tt,
          crypto_box_NONCEBYTES: Rt,
          crypto_box_ZEROBYTES: It,
          crypto_box_BOXZEROBYTES: At,
          crypto_sign_BYTES: St,
          crypto_sign_PUBLICKEYBYTES: Et,
          crypto_sign_SECRETKEYBYTES: Ot,
          crypto_sign_SEEDBYTES: kt,
          crypto_hash_BYTES: Nt,
          gf: e,
          D: c,
          L: ut,
          pack25519: L,
          unpack25519: D,
          M: j,
          A: F,
          S: q,
          Z: z,
          pow2523: K,
          add: nt,
          set25519: B,
          modL: ct,
          scalarmult: st,
          scalarbase: ot,
        }),
          (t.randomBytes = function (t) {
            var e = new Uint8Array(t);
            return (r(e, t), e);
          }),
          (t.secretbox = function (t, e, n) {
            (Ct(t, e, n), Ut(n, e));
            for (
              var r = new Uint8Array(_t + t.length),
                i = new Uint8Array(r.length),
                s = 0;
              s < t.length;
              s++
            )
              r[s + _t] = t[s];
            return (N(i, r, r.length, e, n), i.subarray(yt));
          }),
          (t.secretbox.open = function (t, e, n) {
            (Ct(t, e, n), Ut(n, e));
            for (
              var r = new Uint8Array(yt + t.length),
                i = new Uint8Array(r.length),
                s = 0;
              s < t.length;
              s++
            )
              r[s + yt] = t[s];
            return r.length < 32 || 0 !== U(i, r, r.length, e, n)
              ? null
              : i.subarray(_t);
          }),
          (t.secretbox.keyLength = gt),
          (t.secretbox.nonceLength = pt),
          (t.secretbox.overheadLength = yt),
          (t.scalarMult = function (t, e) {
            if ((Ct(t, e), t.length !== bt)) throw new Error("bad n size");
            if (e.length !== mt) throw new Error("bad p size");
            var n = new Uint8Array(mt);
            return (V(n, t, e), n);
          }),
          (t.scalarMult.base = function (t) {
            if ((Ct(t), t.length !== bt)) throw new Error("bad n size");
            var e = new Uint8Array(mt);
            return (W(e, t), e);
          }),
          (t.scalarMult.scalarLength = bt),
          (t.scalarMult.groupElementLength = mt),
          (t.box = function (e, n, r, i) {
            var s = t.box.before(r, i);
            return t.secretbox(e, n, s);
          }),
          (t.box.before = function (t, e) {
            (Ct(t, e), Bt(t, e));
            var n = new Uint8Array(Tt);
            return (Q(n, t, e), n);
          }),
          (t.box.after = t.secretbox),
          (t.box.open = function (e, n, r, i) {
            var s = t.box.before(r, i);
            return t.secretbox.open(e, n, s);
          }),
          (t.box.open.after = t.secretbox.open),
          (t.box.keyPair = function () {
            var t = new Uint8Array(wt),
              e = new Uint8Array(vt);
            return (G(t, e), { publicKey: t, secretKey: e });
          }),
          (t.box.keyPair.fromSecretKey = function (t) {
            if ((Ct(t), t.length !== vt))
              throw new Error("bad secret key size");
            var e = new Uint8Array(wt);
            return (W(e, t), { publicKey: e, secretKey: new Uint8Array(t) });
          }),
          (t.box.publicKeyLength = wt),
          (t.box.secretKeyLength = vt),
          (t.box.sharedKeyLength = Tt),
          (t.box.nonceLength = Rt),
          (t.box.overheadLength = t.secretbox.overheadLength),
          (t.sign = function (t, e) {
            if ((Ct(t, e), e.length !== Ot))
              throw new Error("bad secret key size");
            var n = new Uint8Array(St + t.length);
            return (ht(n, t, t.length, e), n);
          }),
          (t.sign.open = function (t, e) {
            if ((Ct(t, e), e.length !== Et))
              throw new Error("bad public key size");
            var n = new Uint8Array(t.length),
              r = dt(n, t, t.length, e);
            if (r < 0) return null;
            for (var i = new Uint8Array(r), s = 0; s < i.length; s++)
              i[s] = n[s];
            return i;
          }),
          (t.sign.detached = function (e, n) {
            for (
              var r = t.sign(e, n), i = new Uint8Array(St), s = 0;
              s < i.length;
              s++
            )
              i[s] = r[s];
            return i;
          }),
          (t.sign.detached.verify = function (t, e, n) {
            if ((Ct(t, e, n), e.length !== St))
              throw new Error("bad signature size");
            if (n.length !== Et) throw new Error("bad public key size");
            var r,
              i = new Uint8Array(St + t.length),
              s = new Uint8Array(St + t.length);
            for (r = 0; r < St; r++) i[r] = e[r];
            for (r = 0; r < t.length; r++) i[r + St] = t[r];
            return dt(s, i, i.length, n) >= 0;
          }),
          (t.sign.keyPair = function () {
            var t = new Uint8Array(Et),
              e = new Uint8Array(Ot);
            return (at(t, e), { publicKey: t, secretKey: e });
          }),
          (t.sign.keyPair.fromSecretKey = function (t) {
            if ((Ct(t), t.length !== Ot))
              throw new Error("bad secret key size");
            for (var e = new Uint8Array(Et), n = 0; n < e.length; n++)
              e[n] = t[32 + n];
            return { publicKey: e, secretKey: new Uint8Array(t) };
          }),
          (t.sign.keyPair.fromSeed = function (t) {
            if ((Ct(t), t.length !== kt)) throw new Error("bad seed size");
            for (
              var e = new Uint8Array(Et), n = new Uint8Array(Ot), r = 0;
              r < 32;
              r++
            )
              n[r] = t[r];
            return (at(e, n, !0), { publicKey: e, secretKey: n });
          }),
          (t.sign.publicKeyLength = Et),
          (t.sign.secretKeyLength = Ot),
          (t.sign.seedLength = kt),
          (t.sign.signatureLength = St),
          (t.hash = function (t) {
            Ct(t);
            var e = new Uint8Array(Nt);
            return (et(e, t, t.length), e);
          }),
          (t.hash.hashLength = Nt),
          (t.verify = function (t, e) {
            return (
              Ct(t, e),
              0 !== t.length &&
                0 !== e.length &&
                t.length === e.length &&
                0 === p(t, 0, e, 0, t.length)
            );
          }),
          (t.setPRNG = function (t) {
            r = t;
          }),
          (function () {
            var e =
              "undefined" !== typeof self ? self.crypto || self.msCrypto : null;
            if (e && e.getRandomValues) {
              var r = 65536;
              t.setPRNG(function (t, n) {
                var i,
                  s = new Uint8Array(n);
                for (i = 0; i < n; i += r)
                  e.getRandomValues(s.subarray(i, i + Math.min(n - i, r)));
                for (i = 0; i < n; i++) t[i] = s[i];
                Pt(s);
              });
            } else
              ((e = n(3053)),
                e &&
                  e.randomBytes &&
                  t.setPRNG(function (t, n) {
                    var r,
                      i = e.randomBytes(n);
                    for (r = 0; r < n; r++) t[r] = i[r];
                    Pt(i);
                  }));
          })());
      })(t.exports ? t.exports : (self.nacl = self.nacl || {}));
    },
    3093: function (t, e, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = r(n(2774)),
        s = r(n(2909)),
        o = c(n(2826)),
        a = r(n(2754)),
        u = r(n(3056));
      function c(t, e) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (c = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            s,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((i = e ? r : n)) {
            if (i.has(t)) return i.get(t);
            i.set(t, o);
          }
          for (const n in t)
            "default" !== n &&
              {}.hasOwnProperty.call(t, n) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, n)) &&
              (s.get || s.set)
                ? i(o, n, s)
                : (o[n] = t[n]));
          return o;
        })(t, e);
      }
      class TransactionId {
        constructor(t, e, n, r) {
          (void 0 === n && (n = !1),
            void 0 === r && (r = null),
            (this.accountId = t),
            (this.validStart = e),
            (this.scheduled = n),
            (this.nonce = null),
            null != r && 0 != r && this.setNonce(r),
            Object.seal(this));
        }
        setNonce(t) {
          return (
            (this.nonce = "number" === typeof t ? a.default.fromNumber(t) : t),
            this
          );
        }
        static withValidStart(t, e) {
          return new TransactionId(t, e);
        }
        static generate(t) {
          return new TransactionId(
            "string" === typeof t ? i.default.fromString(t) : new i.default(t),
            s.default.generate(),
          );
        }
        static fromString(t) {
          let e, n, r, o, u, c;
          return (
            ([e, c] = t.split("@")),
            ([n, c] = c.split(".")),
            c.includes("?")
              ? (([r, c] = c.split("?scheduled")),
                (o = !0),
                (u = c.includes("/") ? c.replace("/", "") : null))
              : c.includes("/")
                ? (([r, u] = c.split("/")), (o = !1))
                : (r = c),
            new TransactionId(
              i.default.fromString(e),
              new s.default(a.default.fromValue(n), a.default.fromValue(r)),
              o,
              null != u ? a.default.fromString(u) : null,
            )
          );
        }
        setScheduled(t) {
          return ((this.scheduled = t), this);
        }
        toString() {
          if (null != this.accountId && null != this.validStart) {
            const t = String(this.validStart.nanos).padStart(9, "0"),
              e = null != this.nonce ? "/".concat(this.nonce.toString()) : "",
              n = this.scheduled ? "?scheduled" : "";
            return `${this.accountId.toString()}@${this.validStart.seconds.toString()}.${t}${n}${e}`;
          }
          throw new Error("neither `accountId` nor `validStart` are set");
        }
        static _fromProtobuf(t) {
          if (null != t.accountID && null != t.transactionValidStart)
            return new TransactionId(
              i.default._fromProtobuf(t.accountID),
              s.default._fromProtobuf(t.transactionValidStart),
              null != t.scheduled ? t.scheduled : void 0,
              null != t.nonce ? t.nonce : void 0,
            );
          throw new Error(
            "Neither `nonce` or `accountID` and `transactionValidStart` are set",
          );
        }
        _toProtobuf() {
          return {
            accountID:
              null != this.accountId ? this.accountId._toProtobuf() : null,
            transactionValidStart:
              null != this.validStart ? this.validStart._toProtobuf() : null,
            scheduled: this.scheduled,
            nonce: null != this.nonce ? this.nonce.toInt() : null,
          };
        }
        static fromBytes(t) {
          return TransactionId._fromProtobuf(o.proto.TransactionID.decode(t));
        }
        toBytes() {
          return o.proto.TransactionID.encode(this._toProtobuf()).finish();
        }
        clone() {
          return new TransactionId(
            this.accountId,
            this.validStart,
            this.scheduled,
            this.nonce,
          );
        }
        compare(t) {
          const e = this.accountId.compare(t.accountId);
          return 0 != e ? e : this.validStart.compare(t.validStart);
        }
        getReceipt(t) {
          return u.default
            .transactionReceiptQueryConstructor()
            .setTransactionId(this)
            .execute(t);
        }
        async getRecord(t) {
          return (
            await this.getReceipt(t),
            u.default
              .transactionRecordQueryConstructor()
              .setTransactionId(this)
              .execute(t)
          );
        }
      }
      e.default = TransactionId;
    },
    3215: function (t, e, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.REQUIRE_UINT8ARRAY_ERROR =
          e.REQUIRE_TYPE_ERROR =
          e.REQUIRE_STRING_OR_UINT8ARRAY_ERROR =
          e.REQUIRE_STRING_ERROR =
          e.REQUIRE_NUMBER_ERROR =
          e.REQUIRE_NON_NULL_ERROR =
          e.REQUIRE_LONG_ERROR =
          e.REQUIRE_BIGNUMBER_ERROR =
          e.REQUIRE_ARRAY_ERROR =
          e.FUNCTION_CONVERT_TO_NUMBER_PARSE_ERROR =
          e.FUNCTION_CONVERT_TO_NUMBER_ERROR =
          e.FUNCTION_CONVERT_TO_BIGNUMBER_ERROR =
            void 0),
        (e.arrayEqual = q),
        (e.compare = z),
        (e.convertToBigNumber = M),
        (e.convertToBigNumberArray = x),
        (e.convertToNumber = D),
        (e.isBigNumber = T),
        (e.isLong = R),
        (e.isLongZeroAddress = S),
        (e.isNonNull = m),
        (e.isNumber = v),
        (e.isString = I),
        (e.isStringOrUint8Array = A),
        (e.isType = b),
        (e.isUint8Array = w),
        (e.requireBigNumber = N),
        (e.requireLong = U),
        (e.requireNonNull = O),
        (e.requireNotNegative = E),
        (e.requireNumber = P),
        (e.requireString = B),
        (e.requireStringOrUint8Array = L),
        (e.requireType = k),
        (e.requireUint8Array = C),
        (e.safeView = F),
        (e.shuffle = j));
      var i = r(n(800)),
        s = r(n(2754));
      const o = (e.REQUIRE_NON_NULL_ERROR =
          "This value cannot be null | undefined."),
        a = (e.REQUIRE_STRING_ERROR = "This value must be a string."),
        u = (e.REQUIRE_UINT8ARRAY_ERROR = "This value must be a Uint8Array."),
        c = (e.REQUIRE_STRING_OR_UINT8ARRAY_ERROR =
          "This value must be a string or Uint8Array."),
        l = (e.REQUIRE_NUMBER_ERROR = "This value must be a Number."),
        h = (e.REQUIRE_BIGNUMBER_ERROR = "This value must be a BigNumber."),
        f = (e.REQUIRE_ARRAY_ERROR = "The provided variable must be an Array."),
        d = (e.REQUIRE_LONG_ERROR = "This value must be a Long."),
        g = (e.REQUIRE_TYPE_ERROR =
          "The provided variables are not matching types."),
        p = (e.FUNCTION_CONVERT_TO_BIGNUMBER_ERROR =
          "This value must be a String, Number, or BigNumber to be converted."),
        _ = (e.FUNCTION_CONVERT_TO_NUMBER_ERROR =
          "This value must be a String, Number, or BigNumber to be converted."),
        y = (e.FUNCTION_CONVERT_TO_NUMBER_PARSE_ERROR =
          "Unable to parse given variable. Returns NaN.");
      function m(t) {
        return null != t;
      }
      function b(t, e) {
        return typeof t == typeof e;
      }
      function w(t) {
        return m(t) && t instanceof Uint8Array;
      }
      function v(t) {
        return m(t) && ("number" == typeof t || t instanceof Number);
      }
      function T(t) {
        return m(t) && t instanceof i.default;
      }
      function R(t) {
        return m(t) && t instanceof s.default;
      }
      function I(t) {
        return m(t) && "string" == typeof t;
      }
      function A(t) {
        return m(t) && (I(t) || w(t));
      }
      function S(t) {
        for (let e = 0; e < 12; e++) if (0 != t[e]) return !1;
        return !0;
      }
      function E(t) {
        if (t.isNegative()) throw new Error("negative value not allowed");
        return t;
      }
      function O(t) {
        if (m(t)) return t;
        throw new Error(o);
      }
      function k(t, e) {
        if (b(t, e)) return t;
        throw new Error(g);
      }
      function N(t) {
        if (T(O(t))) return t;
        throw new Error(h);
      }
      function U(t) {
        if (R(O(t))) return t;
        throw new Error(d);
      }
      function B(t) {
        if (I(O(t))) return t;
        throw new Error(a);
      }
      function C(t) {
        if (w(O(t))) return t;
        throw new Error(u);
      }
      function P(t) {
        if (v(O(t))) return t;
        throw new Error(l);
      }
      function L(t) {
        if (A(O(t))) return t;
        throw new Error(c);
      }
      function M(t) {
        if ((O(t), T(t) || I(t) || v(t) || R(t))) return new i.default(t);
        throw new Error(p);
      }
      function x(t) {
        if (t instanceof Array) return t.map(M);
        throw new Error(f);
      }
      function D(t) {
        if ((O(t), T(t) || I(t) || v(t) || R(t))) {
          const e = parseInt(t);
          if (isNaN(e)) throw new Error(y);
          return e;
        }
        throw new Error(_);
      }
      function F(t, e, n) {
        if (
          (void 0 === e && (e = 0),
          void 0 === n && (n = t.byteLength),
          !(Number.isInteger(e) && e >= 0))
        )
          throw new Error("Invalid offset!");
        if (!(Number.isInteger(n) && n >= 0))
          throw new Error("Invalid length!");
        return new DataView(
          t.buffer,
          t.byteOffset + e,
          Math.min(n, t.byteLength - e),
        );
      }
      function z(t, e, n) {
        if (
          (void 0 === n && (n = new Set()),
          "object" === typeof t && "object" === typeof e)
        ) {
          const r = Object.keys(t),
            i = Object.keys(e);
          if (r.length !== i.length) return !1;
          for (let s = 0; s < r.length; s++) {
            if (r[s] !== i[s]) return !1;
            if (!n.has(r[s]) && !z(t[r[s]], e[i[s]], n)) return !1;
          }
          return !0;
        }
        return (
          (("number" === typeof t && "number" === typeof e) ||
            ("string" === typeof t && "string" === typeof e) ||
            ("boolean" === typeof t && "boolean" === typeof e)) &&
          t === e
        );
      }
      function j(t) {
        var e,
          n,
          r = t.length;
        while (0 !== r)
          ((n = Math.floor(Math.random() * r)),
            (r -= 1),
            (e = t[r]),
            (t[r] = t[n]),
            (t[n] = e));
      }
      function q(t, e) {
        if (t === e) return !0;
        if (t.byteLength !== e.byteLength) return !1;
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength),
          r = new DataView(e.buffer, e.byteOffset, e.byteLength);
        let i = t.byteLength;
        while (i--) if (n.getUint8(i) !== r.getUint8(i)) return !1;
        return !0;
      }
    },
    4677: function (t, e, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = r(n(2774)),
        s = r(n(3028)),
        o = r(n(3079)),
        a = r(n(3558)),
        u = r(n(2835)),
        c = r(n(3664)),
        l = r(n(5012)),
        h = r(n(3555)),
        f = r(n(2754)),
        d = _(n(2826)),
        g = r(n(3093)),
        p = _(n(2950));
      function _(t, e) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (_ = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            s,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((i = e ? r : n)) {
            if (i.has(t)) return i.get(t);
            i.set(t, o);
          }
          for (const n in t)
            "default" !== n &&
              {}.hasOwnProperty.call(t, n) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, n)) &&
              (s.get || s.set)
                ? i(o, n, s)
                : (o[n] = t[n]));
          return o;
        })(t, e);
      }
      class TransactionReceipt {
        constructor(t) {
          var e, n, r;
          ((this.status = t.status),
            (this.accountId = t.accountId),
            (this.fileId = t.fileId),
            (this.contractId = t.contractId),
            (this.topicId = t.topicId),
            (this.tokenId = t.tokenId),
            (this.scheduleId = t.scheduleId),
            (this.exchangeRate = t.exchangeRate),
            (this.topicSequenceNumber = t.topicSequenceNumber),
            (this.topicRunningHash = t.topicRunningHash),
            (this.totalSupply = t.totalSupply),
            (this.scheduledTransactionId = t.scheduledTransactionId),
            (this.serials = null !== (e = t.serials) && void 0 !== e ? e : []),
            (this.duplicates =
              null !== (n = t.duplicates) && void 0 !== n ? n : []),
            (this.children =
              null !== (r = t.children) && void 0 !== r ? r : []),
            Object.freeze(this));
        }
        _toProtobuf() {
          const t = this.duplicates.map((t) => t._toProtobuf().receipt),
            e = this.children.map((t) => t._toProtobuf().receipt);
          return {
            duplicateTransactionReceipts: t,
            childTransactionReceipts: e,
            receipt: {
              status: this.status.valueOf(),
              accountID:
                null != this.accountId ? this.accountId._toProtobuf() : null,
              fileID: null != this.fileId ? this.fileId._toProtobuf() : null,
              contractID:
                null != this.contractId ? this.contractId._toProtobuf() : null,
              topicID: null != this.topicId ? this.topicId._toProtobuf() : null,
              tokenID: null != this.tokenId ? this.tokenId._toProtobuf() : null,
              scheduleID:
                null != this.scheduleId ? this.scheduleId._toProtobuf() : null,
              topicRunningHash:
                null == this.topicRunningHash ? null : this.topicRunningHash,
              topicSequenceNumber: this.topicSequenceNumber,
              exchangeRate: {
                nextRate: null,
                currentRate:
                  null != this.exchangeRate
                    ? this.exchangeRate._toProtobuf()
                    : null,
              },
              scheduledTransactionID:
                null != this.scheduledTransactionId
                  ? this.scheduledTransactionId._toProtobuf()
                  : null,
              serialNumbers: this.serials,
              newTotalSupply: this.totalSupply,
            },
          };
        }
        static _fromProtobuf(t) {
          const e = t.receipt,
            n = e.exchangeRate,
            r =
              null != t.childTransactionReceipts
                ? t.childTransactionReceipts.map((t) =>
                    TransactionReceipt._fromProtobuf({ receipt: t }),
                  )
                : [],
            d =
              null != t.duplicateTransactionReceipts
                ? t.duplicateTransactionReceipts.map((t) =>
                    TransactionReceipt._fromProtobuf({ receipt: t }),
                  )
                : [];
          return new TransactionReceipt({
            status: h.default._fromCode(null != e.status ? e.status : 0),
            accountId:
              null != e.accountID ? i.default._fromProtobuf(e.accountID) : null,
            fileId: null != e.fileID ? o.default._fromProtobuf(e.fileID) : null,
            contractId:
              null != e.contractID
                ? s.default._fromProtobuf(e.contractID)
                : null,
            topicId:
              null != e.topicID ? a.default._fromProtobuf(e.topicID) : null,
            tokenId:
              null != e.tokenID ? u.default._fromProtobuf(e.tokenID) : null,
            scheduleId:
              null != e.scheduleID
                ? c.default._fromProtobuf(e.scheduleID)
                : null,
            exchangeRate:
              null != e.exchangeRate
                ? l.default._fromProtobuf(n.currentRate)
                : null,
            topicSequenceNumber:
              null == e.topicSequenceNumber
                ? null
                : f.default.fromString(e.topicSequenceNumber.toString()),
            topicRunningHash:
              null != e.topicRunningHash
                ? new Uint8Array(e.topicRunningHash)
                : null,
            totalSupply:
              null != e.newTotalSupply
                ? f.default.fromString(e.newTotalSupply.toString())
                : null,
            scheduledTransactionId:
              null != e.scheduledTransactionID
                ? g.default._fromProtobuf(e.scheduledTransactionID)
                : null,
            serials:
              null != e.serialNumbers
                ? e.serialNumbers.map((t) => f.default.fromValue(t))
                : [],
            children: r,
            duplicates: d,
          });
        }
        static fromBytes(t) {
          return TransactionReceipt._fromProtobuf(
            d.proto.TransactionGetReceiptResponse.decode(t),
          );
        }
        toBytes() {
          return d.proto.TransactionGetReceiptResponse.encode(
            this._toProtobuf(),
          ).finish();
        }
        toJSON() {
          var t, e, n, r, i, s, o, a, u, c;
          return {
            status: this.status.toString(),
            accountId:
              (null === (t = this.accountId) || void 0 === t
                ? void 0
                : t.toString()) || null,
            filedId:
              (null === (e = this.fileId) || void 0 === e
                ? void 0
                : e.toString()) || null,
            contractId:
              (null === (n = this.contractId) || void 0 === n
                ? void 0
                : n.toString()) || null,
            topicId:
              (null === (r = this.topicId) || void 0 === r
                ? void 0
                : r.toString()) || null,
            tokenId:
              (null === (i = this.tokenId) || void 0 === i
                ? void 0
                : i.toString()) || null,
            scheduleId:
              (null === (s = this.scheduleId) || void 0 === s
                ? void 0
                : s.toString()) || null,
            exchangeRate:
              (null === (o = this.exchangeRate) || void 0 === o
                ? void 0
                : o.toJSON()) || null,
            topicSequenceNumber:
              (null === (a = this.topicSequenceNumber) || void 0 === a
                ? void 0
                : a.toString()) || null,
            topicRunningHash:
              null != this.topicRunningHash
                ? p.encode(this.topicRunningHash)
                : null,
            totalSupply:
              (null === (u = this.totalSupply) || void 0 === u
                ? void 0
                : u.toString()) || null,
            scheduledTransactionId:
              (null === (c = this.scheduledTransactionId) || void 0 === c
                ? void 0
                : c.toString()) || null,
            serials: this.serials.map((t) => t.toString()),
            duplicates: this.duplicates.map((t) => t.toJSON()),
            children: this.children.map((t) => t.toJSON()),
          };
        }
        toString() {
          return JSON.stringify(this.toJSON());
        }
      }
      e.default = TransactionReceipt;
    },
    5011: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      class List {
        constructor() {
          ((this.list = []), (this.locked = !1), (this.index = 0));
        }
        setList(t) {
          if (this.locked) throw new Error("list is locked");
          return ((this.list = t), (this.index = 0), this);
        }
        push() {
          if (this.locked) throw new Error("list is locked");
          return (this.list.push(...arguments), this);
        }
        setLocked() {
          return ((this.locked = !0), this);
        }
        clear() {
          ((this.list = []), (this.index = 0));
        }
        get(t) {
          return this.list[t];
        }
        set(t, e) {
          return (
            t === this.length ? this.list.push(e) : (this.list[t] = e),
            this
          );
        }
        setIfAbsent(t, e) {
          return (
            (t != this.length && null != this.list[t]) || this.set(t, e()),
            this
          );
        }
        get next() {
          return this.get(this.advance());
        }
        get current() {
          return this.get(this.index);
        }
        advance() {
          const t = this.index;
          return ((this.index = (this.index + 1) % this.list.length), t);
        }
        get isEmpty() {
          return 0 === this.length;
        }
        get length() {
          return this.list.length;
        }
        clone() {
          const t = new List();
          return ((t.list = this.list), (t.locked = this.locked), t);
        }
      }
      e.default = List;
    },
    5013: function (t, e, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = r(n(4677)),
        s = r(n(3093)),
        o = r(n(2909)),
        a = r(n(2831)),
        u = r(n(5014)),
        c = r(n(5015)),
        l = r(n(6114)),
        h = r(n(6116)),
        f = v(n(2826)),
        d = r(n(3664)),
        g = r(n(6117)),
        p = r(n(7909)),
        _ = r(n(2934)),
        y = r(n(3421)),
        m = r(n(6118)),
        b = r(n(4292)),
        w = v(n(2950));
      function v(t, e) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (v = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            s,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((i = e ? r : n)) {
            if (i.has(t)) return i.get(t);
            i.set(t, o);
          }
          for (const n in t)
            "default" !== n &&
              {}.hasOwnProperty.call(t, n) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, n)) &&
              (s.get || s.set)
                ? i(o, n, s)
                : (o[n] = t[n]));
          return o;
        })(t, e);
      }
      class TransactionRecord {
        constructor(t) {
          ((this.receipt = t.receipt),
            (this.transactionHash = t.transactionHash),
            (this.consensusTimestamp = t.consensusTimestamp),
            (this.transactionId = t.transactionId),
            (this.transactionMemo = t.transactionMemo),
            (this.transactionFee = t.transactionFee),
            (this.transfers = t.transfers),
            (this.contractFunctionResult =
              null != t.contractFunctionResult
                ? t.contractFunctionResult
                : null),
            (this.tokenTransfers = t.tokenTransfers),
            (this.tokenTransfersList = t.tokenTransfersList),
            (this.scheduleRef = t.scheduleRef),
            (this.assessedCustomFees = t.assessedCustomFees),
            (this.nftTransfers = t.nftTransfers),
            (this.automaticTokenAssociations = t.automaticTokenAssociations),
            (this.parentConsensusTimestamp = t.parentConsensusTimestamp),
            (this.aliasKey = t.aliasKey),
            (this.duplicates = t.duplicates),
            (this.children = t.children),
            (this.hbarAllowanceAdjustments = t.hbarAllowanceAdjustments),
            (this.tokenAllowanceAdjustments = t.tokenAllowanceAdjustments),
            (this.nftAllowanceAdjustments = t.nftAllowanceAdjustments),
            (this.ethereumHash = t.ethereumHash),
            (this.paidStakingRewards = t.paidStakingRewards),
            (this.prngBytes = t.prngBytes),
            (this.prngNumber = t.prngNumber),
            (this.evmAddress = t.evmAddress),
            Object.freeze(this));
        }
        _toProtobuf() {
          const t = this.tokenTransfers._toProtobuf(),
            e = this.nftTransfers._toProtobuf(),
            n = [];
          for (const s of t)
            for (const t of e)
              null != s.token &&
              null != t.token &&
              s.token.shardNum === t.token.shardNum &&
              s.token.realmNum === t.token.realmNum &&
              s.token.tokenNum === t.token.tokenNum
                ? n.push({
                    token: s.token,
                    transfers: s.transfers,
                    nftTransfers: s.nftTransfers,
                  })
                : (n.push(s), n.push(t));
          const r = this.duplicates.map(
              (t) => t._toProtobuf().transactionRecord,
            ),
            i = this.children.map((t) => t._toProtobuf().transactionRecord);
          return {
            duplicateTransactionRecords: r,
            childTransactionRecords: i,
            transactionRecord: {
              receipt: this.receipt._toProtobuf().receipt,
              transactionHash:
                null != this.transactionHash ? this.transactionHash : null,
              consensusTimestamp:
                null != this.consensusTimestamp
                  ? this.consensusTimestamp._toProtobuf()
                  : null,
              transactionID:
                null != this.transactionId
                  ? this.transactionId._toProtobuf()
                  : null,
              memo: null != this.transactionMemo ? this.transactionMemo : null,
              transactionFee:
                null != this.transactionFee
                  ? this.transactionFee.toTinybars()
                  : null,
              contractCallResult:
                null == this.contractFunctionResult ||
                this.contractFunctionResult._createResult
                  ? null
                  : this.contractFunctionResult._toProtobuf(),
              contractCreateResult:
                null != this.contractFunctionResult &&
                this.contractFunctionResult._createResult
                  ? this.contractFunctionResult._toProtobuf()
                  : null,
              transferList:
                null != this.transfers
                  ? {
                      accountAmounts: this.transfers.map((t) =>
                        t._toProtobuf(),
                      ),
                    }
                  : null,
              tokenTransferLists: n,
              scheduleRef:
                null != this.scheduleRef
                  ? this.scheduleRef._toProtobuf()
                  : null,
              assessedCustomFees: this.assessedCustomFees.map((t) =>
                t._toProtobuf(),
              ),
              automaticTokenAssociations: this.automaticTokenAssociations.map(
                (t) => t._toProtobuf(),
              ),
              parentConsensusTimestamp:
                null != this.parentConsensusTimestamp
                  ? this.parentConsensusTimestamp._toProtobuf()
                  : null,
              alias:
                null != this.aliasKey
                  ? f.proto.Key.encode(this.aliasKey._toProtobufKey()).finish()
                  : null,
              ethereumHash: this.ethereumHash,
              paidStakingRewards: this.paidStakingRewards.map((t) =>
                t._toProtobuf(),
              ),
              prngBytes: this.prngBytes,
              prngNumber: null != this.prngNumber ? this.prngNumber : null,
              evmAddress:
                null != this.evmAddress ? this.evmAddress.toBytes() : null,
            },
          };
        }
        static _fromProtobuf(t) {
          const e = t.transactionRecord;
          let n =
            null != e.alias && e.alias.length > 0
              ? _.default._fromProtobufKey(f.proto.Key.decode(e.alias))
              : null;
          n instanceof y.default || (n = null);
          const r =
              null != t.childTransactionRecords
                ? t.childTransactionRecords.map((t) =>
                    TransactionRecord._fromProtobuf({ transactionRecord: t }),
                  )
                : [],
            w =
              null != t.duplicateTransactionRecords
                ? t.duplicateTransactionRecords.map((t) =>
                    TransactionRecord._fromProtobuf({ transactionRecord: t }),
                  )
                : [],
            v =
              null != e.contractCallResult
                ? c.default._fromProtobuf(e.contractCallResult, !1)
                : null != e.contractCreateResult
                  ? c.default._fromProtobuf(e.contractCreateResult, !0)
                  : void 0;
          return new TransactionRecord({
            receipt: i.default._fromProtobuf({ receipt: e.receipt }),
            transactionHash:
              null != e.transactionHash ? e.transactionHash : new Uint8Array(),
            consensusTimestamp: o.default._fromProtobuf(e.consensusTimestamp),
            transactionId: s.default._fromProtobuf(e.transactionID),
            transactionMemo: null != e.memo ? e.memo : "",
            transactionFee: a.default.fromTinybars(
              null != e.transactionFee ? e.transactionFee : 0,
            ),
            transfers: u.default._fromProtobuf(
              null != e.transferList && null != e.transferList.accountAmounts
                ? e.transferList.accountAmounts
                : [],
            ),
            contractFunctionResult: v,
            tokenTransfers: l.default._fromProtobuf(
              null != e.tokenTransferLists ? e.tokenTransferLists : [],
            ),
            tokenTransfersList: m.default._fromProtobuf(
              null != e.tokenTransferLists ? e.tokenTransferLists : [],
            ),
            scheduleRef:
              null != e.scheduleRef
                ? d.default._fromProtobuf(e.scheduleRef)
                : null,
            assessedCustomFees:
              null != e.assessedCustomFees
                ? e.assessedCustomFees.map((t) => g.default._fromProtobuf(t))
                : [],
            nftTransfers: h.default._fromProtobuf(
              null != e.tokenTransferLists ? e.tokenTransferLists : [],
            ),
            automaticTokenAssociations:
              null != e.automaticTokenAssociations
                ? e.automaticTokenAssociations.map((t) =>
                    p.default._fromProtobuf(t),
                  )
                : [],
            parentConsensusTimestamp:
              null != e.parentConsensusTimestamp
                ? o.default._fromProtobuf(e.parentConsensusTimestamp)
                : null,
            aliasKey: n,
            duplicates: w,
            children: r,
            hbarAllowanceAdjustments: [],
            tokenAllowanceAdjustments: [],
            nftAllowanceAdjustments: [],
            ethereumHash: null != e.ethereumHash ? e.ethereumHash : null,
            paidStakingRewards:
              null != e.paidStakingRewards
                ? u.default._fromProtobuf(e.paidStakingRewards)
                : [],
            prngBytes: null != e.prngBytes ? e.prngBytes : null,
            prngNumber: null != e.prngNumber ? e.prngNumber : null,
            evmAddress:
              null != e.evmAddress ? b.default.fromBytes(e.evmAddress) : null,
          });
        }
        static fromBytes(t) {
          return TransactionRecord._fromProtobuf(
            f.proto.TransactionGetRecordResponse.decode(t),
          );
        }
        toBytes() {
          return f.proto.TransactionGetRecordResponse.encode(
            this._toProtobuf(),
          ).finish();
        }
        toJSON() {
          var t, e, n, r;
          return {
            receipt: this.receipt.toJSON(),
            transactionHash: w.encode(this.transactionHash),
            consensusTimestamp: this.consensusTimestamp.toDate(),
            transactionId: this.transactionId.toString(),
            transactionMemo: this.transactionMemo,
            transactionFee: this.transactionFee.toTinybars().toString(),
            transfers: this.transfers.map((t) => t.toJSON()),
            tokenTransfers: this.tokenTransfers,
            tokenTransfersList: this.tokenTransfersList.map((t) => t.toJSON()),
            scheduleRef:
              (null === (t = this.scheduleRef) || void 0 === t
                ? void 0
                : t.toString()) || null,
            assessedCustomFees: this.assessedCustomFees,
            nftTransfers: this.nftTransfers,
            automaticTokenAssociations: this.automaticTokenAssociations,
            parentConsensusTimestamp:
              (null === (e = this.parentConsensusTimestamp) || void 0 === e
                ? void 0
                : e.toDate()) || null,
            aliasKey:
              (null === (n = this.aliasKey) || void 0 === n
                ? void 0
                : n.toString()) || null,
            duplicates: this.duplicates,
            children: this.children,
            ethereumHash:
              null != this.ethereumHash ? w.encode(this.ethereumHash) : null,
            paidStakingRewards: this.paidStakingRewards,
            prngBytes: null != this.prngBytes ? w.encode(this.prngBytes) : null,
            prngNumber: this.prngNumber,
            evmAddress:
              (null === (r = this.evmAddress) || void 0 === r
                ? void 0
                : r.toString()) || null,
          };
        }
        toString() {
          return JSON.stringify(this.toJSON());
        }
      }
      e.default = TransactionRecord;
    },
    6088: function (t, e, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = r(n(4674)),
        s = r(n(3555)),
        o = r(n(6089)),
        a = r(n(6111)),
        u = r(n(2774)),
        c = r(n(3093)),
        l = h(n(2950));
      function h(t, e) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (h = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            s,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((i = e ? r : n)) {
            if (i.has(t)) return i.get(t);
            i.set(t, o);
          }
          for (const n in t)
            "default" !== n &&
              {}.hasOwnProperty.call(t, n) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, n)) &&
              (s.get || s.set)
                ? i(o, n, s)
                : (o[n] = t[n]));
          return o;
        })(t, e);
      }
      class TransactionResponse {
        constructor(t) {
          ((this.nodeId = t.nodeId),
            (this.transactionHash = t.transactionHash),
            (this.transactionId = t.transactionId),
            Object.freeze(this));
        }
        static fromJSON(t) {
          return new TransactionResponse({
            nodeId: u.default.fromString(t.nodeId),
            transactionHash: l.decode(t.transactionHash),
            transactionId: c.default.fromString(t.transactionId),
          });
        }
        async getReceipt(t) {
          const e = await this.getReceiptQuery().execute(t);
          if (e.status !== s.default.Success)
            throw new i.default({
              transactionReceipt: e,
              status: e.status,
              transactionId: this.transactionId,
            });
          return e;
        }
        async getRecord(t) {
          return (await this.getReceipt(t), this.getRecordQuery().execute(t));
        }
        async getVerboseRecord(t) {
          try {
            return (
              await this.getReceiptQuery().execute(t),
              this.getRecordQuery().execute(t)
            );
          } catch (e) {
            return this.getRecordQuery().execute(t);
          }
        }
        async getReceiptWithSigner(t) {
          const e = await this.getReceiptQuery().executeWithSigner(t);
          if (e.status !== s.default.Success)
            throw new i.default({
              transactionReceipt: e,
              status: e.status,
              transactionId: this.transactionId,
            });
          return e;
        }
        async getRecordWithSigner(t) {
          return (
            await this.getReceiptWithSigner(t),
            this.getRecordQuery().executeWithSigner(t)
          );
        }
        getReceiptQuery() {
          return new o.default()
            .setTransactionId(this.transactionId)
            .setNodeAccountIds([this.nodeId]);
        }
        getRecordQuery() {
          return new a.default()
            .setTransactionId(this.transactionId)
            .setNodeAccountIds([this.nodeId]);
        }
        toJSON() {
          return {
            nodeId: this.nodeId.toString(),
            transactionHash: l.encode(this.transactionHash),
            transactionId: this.transactionId.toString(),
          };
        }
        toString() {
          return JSON.stringify(this.toJSON());
        }
      }
      e.default = TransactionResponse;
    },
    6089: function (t, e, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = f(n(2978)),
        s = r(n(3555)),
        o = r(n(4677)),
        a = r(n(3093)),
        u = r(n(3899)),
        c = r(n(4674)),
        l = n(3557),
        h = f(n(2826));
      function f(t, e) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (f = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            s,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((i = e ? r : n)) {
            if (i.has(t)) return i.get(t);
            i.set(t, o);
          }
          for (const n in t)
            "default" !== n &&
              {}.hasOwnProperty.call(t, n) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, n)) &&
              (s.get || s.set)
                ? i(o, n, s)
                : (o[n] = t[n]));
          return o;
        })(t, e);
      }
      const { proto: d } = h;
      class TransactionReceiptQuery extends i.default {
        constructor(t) {
          (void 0 === t && (t = {}),
            super(),
            (this._transactionId = null),
            (this._includeChildren = null),
            (this._includeDuplicates = null),
            (this._validateStatus = !0),
            null != t.transactionId && this.setTransactionId(t.transactionId),
            null != t.includeChildren &&
              this.setIncludeChildren(t.includeChildren),
            null != t.includeDuplicates &&
              this.setIncludeDuplicates(t.includeDuplicates),
            null != t.validateStatus &&
              this.setValidateStatus(t.validateStatus));
        }
        static _fromProtobuf(t) {
          const e = t.transactionGetReceipt;
          return new TransactionReceiptQuery({
            transactionId: e.transactionID
              ? a.default._fromProtobuf(e.transactionID)
              : void 0,
            includeDuplicates:
              null != e.includeDuplicates ? e.includeDuplicates : void 0,
            includeChildren:
              null != e.includeChildReceipts ? e.includeChildReceipts : void 0,
          });
        }
        get transactionId() {
          return this._transactionId;
        }
        setTransactionId(t) {
          return (
            (this._transactionId =
              "string" === typeof t ? a.default.fromString(t) : t.clone()),
            this
          );
        }
        setIncludeDuplicates(t) {
          return ((this._includeDuplicates = t), this);
        }
        get includeDuplicates() {
          return null != this._includeDuplicates && this._includeDuplicates;
        }
        setIncludeChildren(t) {
          return ((this._includeChildren = t), this);
        }
        get includeChildren() {
          return null != this._includeChildren && this._includeChildren;
        }
        setValidateStatus(t) {
          return ((this._validateStatus = t), this);
        }
        get validateStatus() {
          return this._validateStatus;
        }
        _isPaymentRequired() {
          return !1;
        }
        _shouldRetry(t, e) {
          const { nodeTransactionPrecheckCode: n } = this._mapResponseHeader(e);
          let r = s.default._fromCode(null != n ? n : d.ResponseCodeEnum.OK);
          switch (
            (this._logger &&
              this._logger.debug(
                `[${this._getLogId()}] received node precheck status ${r.toString()}`,
              ),
            r)
          ) {
            case s.default.Busy:
            case s.default.Unknown:
            case s.default.ReceiptNotFound:
              return [r, l.ExecutionState.Retry];
            case s.default.Ok:
              break;
            default:
              return [r, l.ExecutionState.Error];
          }
          const i = e.transactionGetReceipt,
            o = i.receipt,
            a = o.status;
          switch (
            ((r = s.default._fromCode(a)),
            this._logger &&
              this._logger.debug(
                `[${this._getLogId()}] received receipt status ${r.toString()}`,
              ),
            r)
          ) {
            case s.default.Busy:
            case s.default.Unknown:
            case s.default.ReceiptNotFound:
              return [r, l.ExecutionState.Retry];
            case s.default.Success:
              return [r, l.ExecutionState.Finished];
            default:
              return [
                r,
                this._validateStatus
                  ? l.ExecutionState.Error
                  : l.ExecutionState.Finished,
              ];
          }
        }
        _getTransactionId() {
          return null != this._transactionId
            ? this._transactionId
            : super._getTransactionId();
        }
        _mapStatusError(t, e) {
          const { nodeTransactionPrecheckCode: n } = this._mapResponseHeader(e);
          let r = s.default._fromCode(null != n ? n : d.ResponseCodeEnum.OK);
          switch (r) {
            case s.default.Ok:
              break;
            default:
              return new u.default({
                status: r,
                transactionId: this._getTransactionId(),
                contractFunctionResult: null,
              });
          }
          const i = e.transactionGetReceipt,
            a = i.receipt,
            l = a.status;
          if (((r = s.default._fromCode(l)), null == this._transactionId))
            throw new Error(
              "Failed to construct `ReceiptStatusError` because `transactionId` is `null`",
            );
          return new c.default({
            status: r,
            transactionId: this._transactionId,
            transactionReceipt: o.default._fromProtobuf(i),
          });
        }
        _validateChecksums(t) {
          null != this._transactionId &&
            null != this._transactionId.accountId &&
            this._transactionId.accountId.validateChecksum(t);
        }
        _execute(t, e) {
          return t.crypto.getTransactionReceipts(e);
        }
        _mapResponseHeader(t) {
          const e = t.transactionGetReceipt;
          return e.header;
        }
        _mapResponse(t, e, n) {
          const r = t.transactionGetReceipt;
          return Promise.resolve(o.default._fromProtobuf(r));
        }
        _onMakeRequest(t) {
          return {
            transactionGetReceipt: {
              header: t,
              transactionID:
                null != this._transactionId
                  ? this._transactionId._toProtobuf()
                  : null,
              includeDuplicates: this._includeDuplicates,
              includeChildReceipts: this._includeChildren,
            },
          };
        }
        _getLogId() {
          return "TransactionReceiptQuery:" + this._timestamp.toString();
        }
      }
      ((e.default = TransactionReceiptQuery),
        i.QUERY_REGISTRY.set(
          "transactionGetReceipt",
          TransactionReceiptQuery._fromProtobuf,
        ));
    },
    6111: function (t, e, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = g(n(2978)),
        s = r(n(5013)),
        o = r(n(4677)),
        a = r(n(3093)),
        u = r(n(3555)),
        c = r(n(3899)),
        l = r(n(4674)),
        h = r(n(7910)),
        f = n(3557),
        d = g(n(2826));
      function g(t, e) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (g = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            s,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((i = e ? r : n)) {
            if (i.has(t)) return i.get(t);
            i.set(t, o);
          }
          for (const n in t)
            "default" !== n &&
              {}.hasOwnProperty.call(t, n) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, n)) &&
              (s.get || s.set)
                ? i(o, n, s)
                : (o[n] = t[n]));
          return o;
        })(t, e);
      }
      const { proto: p } = d;
      class TransactionRecordQuery extends i.default {
        constructor(t) {
          (void 0 === t && (t = {}),
            super(),
            (this._transactionId = null),
            (this._includeChildren = null),
            (this._includeDuplicates = null),
            (this._validateReceiptStatus = !0),
            null != t.transactionId && this.setTransactionId(t.transactionId),
            null != t.includeChildren &&
              this.setIncludeChildren(t.includeChildren),
            null != t.includeDuplicates &&
              this.setIncludeDuplicates(t.includeDuplicates),
            null != t.validateReceiptStatus &&
              this.setValidateReceiptStatus(t.validateReceiptStatus));
        }
        get transactionId() {
          return this._transactionId;
        }
        static _fromProtobuf(t) {
          const e = t.transactionGetRecord;
          return new TransactionRecordQuery({
            transactionId: e.transactionID
              ? a.default._fromProtobuf(e.transactionID)
              : void 0,
            includeChildren:
              null != e.includeChildRecords ? e.includeChildRecords : void 0,
            includeDuplicates:
              null != e.includeDuplicates ? e.includeDuplicates : void 0,
          });
        }
        setTransactionId(t) {
          return (
            (this._transactionId =
              "string" === typeof t ? a.default.fromString(t) : t.clone()),
            this
          );
        }
        setIncludeChildren(t) {
          return ((this._includeChildren = t), this);
        }
        get includeChildren() {
          return null != this._includeChildren && this._includeChildren;
        }
        setIncludeDuplicates(t) {
          return ((this._duplicates = t), this);
        }
        get includeDuplicates() {
          return null != this._duplicates && this._duplicates;
        }
        setValidateReceiptStatus(t) {
          return ((this._validateReceiptStatus = t), this);
        }
        get validateReceiptStatus() {
          return this._validateReceiptStatus;
        }
        _shouldRetry(t, e) {
          const { nodeTransactionPrecheckCode: n } = this._mapResponseHeader(e);
          let r = u.default._fromCode(null != n ? n : p.ResponseCodeEnum.OK);
          switch (
            (this._logger &&
              this._logger.debug(
                `[${this._getLogId()}] received node precheck status ${r.toString()}`,
              ),
            r)
          ) {
            case u.default.Busy:
            case u.default.Unknown:
            case u.default.ReceiptNotFound:
            case u.default.RecordNotFound:
              return [r, f.ExecutionState.Retry];
            case u.default.Ok:
              break;
            default:
              return [r, f.ExecutionState.Error];
          }
          const i = e.transactionGetRecord,
            s = i.header;
          if (s.responseType === d.proto.ResponseType.COST_ANSWER)
            return [r, f.ExecutionState.Finished];
          const o = i.transactionRecord,
            a = o.receipt,
            c = a.status;
          switch (
            ((r = u.default._fromCode(c)),
            this._logger &&
              this._logger.debug(
                `[${this._getLogId()}] received record's receipt ${r.toString()}`,
              ),
            r)
          ) {
            case u.default.Ok:
            case u.default.Busy:
            case u.default.Unknown:
            case u.default.ReceiptNotFound:
            case u.default.RecordNotFound:
              return [r, f.ExecutionState.Retry];
            case u.default.Success:
              return [r, f.ExecutionState.Finished];
            default:
              return [
                r,
                this._validateReceiptStatus
                  ? f.ExecutionState.Error
                  : f.ExecutionState.Finished,
              ];
          }
        }
        _mapStatusError(t, e) {
          const { nodeTransactionPrecheckCode: n } = this._mapResponseHeader(e);
          let r = u.default._fromCode(null != n ? n : p.ResponseCodeEnum.OK);
          switch (r) {
            case u.default.Ok:
              break;
            case u.default.ContractRevertExecuted:
              return new h.default({
                status: r,
                transactionId: this._getTransactionId(),
                transactionRecord: s.default._fromProtobuf({
                  transactionRecord: e.transactionGetRecord.transactionRecord,
                }),
              });
            default:
              return new c.default({
                status: r,
                transactionId: this._getTransactionId(),
                contractFunctionResult: null,
              });
          }
          const i = e.transactionGetRecord,
            a = i.transactionRecord,
            f = a.receipt,
            d = f.status;
          switch (((r = u.default._fromCode(d)), r)) {
            case u.default.ContractRevertExecuted:
              return new h.default({
                status: r,
                transactionId: this._getTransactionId(),
                transactionRecord: s.default._fromProtobuf({
                  transactionRecord: e.transactionGetRecord.transactionRecord,
                }),
              });
            default:
              return new l.default({
                status: r,
                transactionId: this._getTransactionId(),
                transactionReceipt: o.default._fromProtobuf({ receipt: f }),
              });
          }
        }
        _validateChecksums(t) {
          null != this._transactionId &&
            null != this._transactionId.accountId &&
            this._transactionId.accountId.validateChecksum(t);
        }
        _execute(t, e) {
          return t.crypto.getTxRecordByTxID(e);
        }
        _mapResponseHeader(t) {
          const e = t.transactionGetRecord;
          return e.header;
        }
        _mapResponse(t, e, n) {
          const r = t.transactionGetRecord;
          return Promise.resolve(s.default._fromProtobuf(r));
        }
        _onMakeRequest(t) {
          return {
            transactionGetRecord: {
              header: t,
              transactionID:
                null != this._transactionId
                  ? this._transactionId._toProtobuf()
                  : null,
              includeChildRecords: this._includeChildren,
              includeDuplicates: this._includeDuplicates,
            },
          };
        }
        _getLogId() {
          const t =
            null != this._paymentTransactionId &&
            null != this._paymentTransactionId.validStart
              ? this._paymentTransactionId.validStart
              : this._timestamp;
          return "TransactionRecordQuery:" + t.toString();
        }
      }
      ((e.default = TransactionRecordQuery),
        i.QUERY_REGISTRY.set(
          "transactionGetRecord",
          TransactionRecordQuery._fromProtobuf,
        ));
    },
    7863: function (t, e, n) {
      "use strict";
      (function (t) {
        const n = "[object ArrayBuffer]";
        class BufferSourceConverter {
          static isArrayBuffer(t) {
            return Object.prototype.toString.call(t) === n;
          }
          static toArrayBuffer(t) {
            return this.isArrayBuffer(t)
              ? t
              : t.byteLength === t.buffer.byteLength ||
                  (0 === t.byteOffset && t.byteLength === t.buffer.byteLength)
                ? t.buffer
                : this.toUint8Array(t.buffer).slice(
                    t.byteOffset,
                    t.byteOffset + t.byteLength,
                  ).buffer;
          }
          static toUint8Array(t) {
            return this.toView(t, Uint8Array);
          }
          static toView(t, e) {
            if (t.constructor === e) return t;
            if (this.isArrayBuffer(t)) return new e(t);
            if (this.isArrayBufferView(t))
              return new e(t.buffer, t.byteOffset, t.byteLength);
            throw new TypeError(
              "The provided value is not of type '(ArrayBuffer or ArrayBufferView)'",
            );
          }
          static isBufferSource(t) {
            return this.isArrayBufferView(t) || this.isArrayBuffer(t);
          }
          static isArrayBufferView(t) {
            return ArrayBuffer.isView(t) || (t && this.isArrayBuffer(t.buffer));
          }
          static isEqual(t, e) {
            const n = BufferSourceConverter.toUint8Array(t),
              r = BufferSourceConverter.toUint8Array(e);
            if (n.length !== r.byteLength) return !1;
            for (let i = 0; i < n.length; i++) if (n[i] !== r[i]) return !1;
            return !0;
          }
          static concat() {
            let t;
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            t =
              !Array.isArray(n[0]) || n[1] instanceof Function
                ? Array.isArray(n[0]) && n[1] instanceof Function
                  ? n[0]
                  : n[n.length - 1] instanceof Function
                    ? n.slice(0, n.length - 1)
                    : n
                : n[0];
            let i = 0;
            for (const a of t) i += a.byteLength;
            const s = new Uint8Array(i);
            let o = 0;
            for (const a of t) {
              const t = this.toUint8Array(a);
              (s.set(t, o), (o += t.length));
            }
            return n[n.length - 1] instanceof Function
              ? this.toView(s, n[n.length - 1])
              : s.buffer;
          }
        }
        const r = "string",
          i = /^[0-9a-f\s]+$/i,
          s =
            /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,
          o = /^[a-zA-Z0-9-_]+$/;
        class Utf8Converter {
          static fromString(t) {
            const e = unescape(encodeURIComponent(t)),
              n = new Uint8Array(e.length);
            for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
            return n.buffer;
          }
          static toString(t) {
            const e = BufferSourceConverter.toUint8Array(t);
            let n = "";
            for (let i = 0; i < e.length; i++) n += String.fromCharCode(e[i]);
            const r = decodeURIComponent(escape(n));
            return r;
          }
        }
        class Utf16Converter {
          static toString(t, e) {
            void 0 === e && (e = !1);
            const n = BufferSourceConverter.toArrayBuffer(t),
              r = new DataView(n);
            let i = "";
            for (let s = 0; s < n.byteLength; s += 2) {
              const t = r.getUint16(s, e);
              i += String.fromCharCode(t);
            }
            return i;
          }
          static fromString(t, e) {
            void 0 === e && (e = !1);
            const n = new ArrayBuffer(2 * t.length),
              r = new DataView(n);
            for (let i = 0; i < t.length; i++)
              r.setUint16(2 * i, t.charCodeAt(i), e);
            return n;
          }
        }
        class Convert {
          static isHex(t) {
            return typeof t === r && i.test(t);
          }
          static isBase64(t) {
            return typeof t === r && s.test(t);
          }
          static isBase64Url(t) {
            return typeof t === r && o.test(t);
          }
          static ToString(t, e) {
            void 0 === e && (e = "utf8");
            const n = BufferSourceConverter.toUint8Array(t);
            switch (e.toLowerCase()) {
              case "utf8":
                return this.ToUtf8String(n);
              case "binary":
                return this.ToBinary(n);
              case "hex":
                return this.ToHex(n);
              case "base64":
                return this.ToBase64(n);
              case "base64url":
                return this.ToBase64Url(n);
              case "utf16le":
                return Utf16Converter.toString(n, !0);
              case "utf16":
              case "utf16be":
                return Utf16Converter.toString(n);
              default:
                throw new Error(`Unknown type of encoding '${e}'`);
            }
          }
          static FromString(t, e) {
            if ((void 0 === e && (e = "utf8"), !t)) return new ArrayBuffer(0);
            switch (e.toLowerCase()) {
              case "utf8":
                return this.FromUtf8String(t);
              case "binary":
                return this.FromBinary(t);
              case "hex":
                return this.FromHex(t);
              case "base64":
                return this.FromBase64(t);
              case "base64url":
                return this.FromBase64Url(t);
              case "utf16le":
                return Utf16Converter.fromString(t, !0);
              case "utf16":
              case "utf16be":
                return Utf16Converter.fromString(t);
              default:
                throw new Error(`Unknown type of encoding '${e}'`);
            }
          }
          static ToBase64(e) {
            const n = BufferSourceConverter.toUint8Array(e);
            if ("undefined" !== typeof btoa) {
              const t = this.ToString(n, "binary");
              return btoa(t);
            }
            return t.from(n).toString("base64");
          }
          static FromBase64(e) {
            const n = this.formatString(e);
            if (!n) return new ArrayBuffer(0);
            if (!Convert.isBase64(n))
              throw new TypeError(
                "Argument 'base64Text' is not Base64 encoded",
              );
            return "undefined" !== typeof atob
              ? this.FromBinary(atob(n))
              : new Uint8Array(t.from(n, "base64")).buffer;
          }
          static FromBase64Url(t) {
            const e = this.formatString(t);
            if (!e) return new ArrayBuffer(0);
            if (!Convert.isBase64Url(e))
              throw new TypeError(
                "Argument 'base64url' is not Base64Url encoded",
              );
            return this.FromBase64(
              this.Base64Padding(e.replace(/\-/g, "+").replace(/\_/g, "/")),
            );
          }
          static ToBase64Url(t) {
            return this.ToBase64(t)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/\=/g, "");
          }
          static FromUtf8String(t, e) {
            switch ((void 0 === e && (e = Convert.DEFAULT_UTF8_ENCODING), e)) {
              case "ascii":
                return this.FromBinary(t);
              case "utf8":
                return Utf8Converter.fromString(t);
              case "utf16":
              case "utf16be":
                return Utf16Converter.fromString(t);
              case "utf16le":
              case "usc2":
                return Utf16Converter.fromString(t, !0);
              default:
                throw new Error(`Unknown type of encoding '${e}'`);
            }
          }
          static ToUtf8String(t, e) {
            switch ((void 0 === e && (e = Convert.DEFAULT_UTF8_ENCODING), e)) {
              case "ascii":
                return this.ToBinary(t);
              case "utf8":
                return Utf8Converter.toString(t);
              case "utf16":
              case "utf16be":
                return Utf16Converter.toString(t);
              case "utf16le":
              case "usc2":
                return Utf16Converter.toString(t, !0);
              default:
                throw new Error(`Unknown type of encoding '${e}'`);
            }
          }
          static FromBinary(t) {
            const e = t.length,
              n = new Uint8Array(e);
            for (let r = 0; r < e; r++) n[r] = t.charCodeAt(r);
            return n.buffer;
          }
          static ToBinary(t) {
            const e = BufferSourceConverter.toUint8Array(t);
            let n = "";
            for (let r = 0; r < e.length; r++) n += String.fromCharCode(e[r]);
            return n;
          }
          static ToHex(t) {
            const e = BufferSourceConverter.toUint8Array(t);
            let n = "";
            const r = e.length;
            for (let i = 0; i < r; i++) {
              const t = e[i];
              (t < 16 && (n += "0"), (n += t.toString(16)));
            }
            return n;
          }
          static FromHex(t) {
            let e = this.formatString(t);
            if (!e) return new ArrayBuffer(0);
            if (!Convert.isHex(e))
              throw new TypeError("Argument 'hexString' is not HEX encoded");
            e.length % 2 && (e = "0" + e);
            const n = new Uint8Array(e.length / 2);
            for (let r = 0; r < e.length; r += 2) {
              const t = e.slice(r, r + 2);
              n[r / 2] = parseInt(t, 16);
            }
            return n.buffer;
          }
          static ToUtf16String(t, e) {
            return (void 0 === e && (e = !1), Utf16Converter.toString(t, e));
          }
          static FromUtf16String(t, e) {
            return (void 0 === e && (e = !1), Utf16Converter.fromString(t, e));
          }
          static Base64Padding(t) {
            const e = 4 - (t.length % 4);
            if (e < 4) for (let n = 0; n < e; n++) t += "=";
            return t;
          }
          static formatString(t) {
            return (
              (null === t || void 0 === t
                ? void 0
                : t.replace(/[\n\r\t ]/g, "")) || ""
            );
          }
        }
        function a(t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          const i = arguments[0];
          for (let s = 1; s < arguments.length; s++) {
            const t = arguments[s];
            for (const e in t) i[e] = t[e];
          }
          return i;
        }
        function u() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          const r = e.map((t) => t.byteLength).reduce((t, e) => t + e),
            i = new Uint8Array(r);
          let s = 0;
          return (
            e
              .map((t) => new Uint8Array(t))
              .forEach((t) => {
                for (const e of t) i[s++] = e;
              }),
            i.buffer
          );
        }
        function c(t, e) {
          if (!t || !e) return !1;
          if (t.byteLength !== e.byteLength) return !1;
          const n = new Uint8Array(t),
            r = new Uint8Array(e);
          for (let i = 0; i < t.byteLength; i++) if (n[i] !== r[i]) return !1;
          return !0;
        }
        ((Convert.DEFAULT_UTF8_ENCODING = "utf8"),
          (e.BufferSourceConverter = BufferSourceConverter),
          (e.Convert = Convert),
          (e.assign = a),
          (e.combine = u),
          (e.isEqual = c));
      }).call(this, n(2).Buffer);
    },
    7864: function (t, e, n) {
      "use strict";
      function r(t) {
        return new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
      }
      function i(t, e, n) {
        var r;
        return t instanceof Object === !1
          ? n
          : null !== (r = t[e]) && void 0 !== r
            ? r
            : n;
      }
      function s(t, e, n, r) {
        (void 0 === e && (e = 0),
          void 0 === n && (n = t.byteLength - e),
          void 0 === r && (r = !1));
        let i = "";
        for (const s of new Uint8Array(t, e, n)) {
          const t = s.toString(16).toUpperCase();
          (1 === t.length && (i += "0"), (i += t), r && (i += " "));
        }
        return i.trim();
      }
      function o(t, e, n, r) {
        return e instanceof ArrayBuffer
          ? e.byteLength
            ? n < 0
              ? ((t.error = "Wrong parameter: inputOffset less than zero"), !1)
              : r < 0
                ? ((t.error = "Wrong parameter: inputLength less than zero"),
                  !1)
                : !(e.byteLength - n - r < 0) ||
                  ((t.error =
                    "End of input reached before message was fully decoded (inconsistent offset and length values)"),
                  !1)
            : ((t.error = "Wrong parameter: inputBuffer has zero length"), !1)
          : ((t.error = 'Wrong parameter: inputBuffer must be "ArrayBuffer"'),
            !1);
      }
      function a(t, e) {
        let n = 0;
        if (1 === t.length) return t[0];
        for (let r = t.length - 1; r >= 0; r--)
          n += t[t.length - 1 - r] * Math.pow(2, e * r);
        return n;
      }
      function u(t, e, n) {
        void 0 === n && (n = -1);
        const r = n;
        let i = t,
          s = 0,
          o = Math.pow(2, e);
        for (let a = 1; a < 8; a++) {
          if (t < o) {
            let t;
            if (r < 0) ((t = new ArrayBuffer(a)), (s = a));
            else {
              if (r < a) return new ArrayBuffer(0);
              ((t = new ArrayBuffer(r)), (s = r));
            }
            const n = new Uint8Array(t);
            for (let r = a - 1; r >= 0; r--) {
              const t = Math.pow(2, r * e);
              ((n[s - r - 1] = Math.floor(i / t)), (i -= n[s - r - 1] * t));
            }
            return t;
          }
          o *= Math.pow(2, e);
        }
        return new ArrayBuffer(0);
      }
      function c() {
        let t = 0,
          e = 0;
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        for (const a of r) t += a.byteLength;
        const s = new ArrayBuffer(t),
          o = new Uint8Array(s);
        for (const a of r) (o.set(new Uint8Array(a), e), (e += a.byteLength));
        return s;
      }
      function l() {
        let t = 0,
          e = 0;
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        for (const a of r) t += a.length;
        const s = new ArrayBuffer(t),
          o = new Uint8Array(s);
        for (const a of r) (o.set(a, e), (e += a.length));
        return o;
      }
      function h() {
        const t = new Uint8Array(this.valueHex);
        if (this.valueHex.byteLength >= 2) {
          const e = 255 === t[0] && 128 & t[1],
            n = 0 === t[0] && 0 === (128 & t[1]);
          (e || n) && this.warnings.push("Needlessly long format");
        }
        const e = new ArrayBuffer(this.valueHex.byteLength),
          n = new Uint8Array(e);
        for (let a = 0; a < this.valueHex.byteLength; a++) n[a] = 0;
        n[0] = 128 & t[0];
        const r = a(n, 8),
          i = new ArrayBuffer(this.valueHex.byteLength),
          s = new Uint8Array(i);
        for (let a = 0; a < this.valueHex.byteLength; a++) s[a] = t[a];
        s[0] &= 127;
        const o = a(s, 8);
        return o - r;
      }
      function f(t) {
        const e = t < 0 ? -1 * t : t;
        let n = 128;
        for (let r = 1; r < 8; r++) {
          if (e <= n) {
            if (t < 0) {
              const t = n - e,
                i = u(t, 8, r),
                s = new Uint8Array(i);
              return ((s[0] |= 128), i);
            }
            let i = u(e, 8, r),
              s = new Uint8Array(i);
            if (128 & s[0]) {
              const t = i.slice(0),
                e = new Uint8Array(t);
              ((i = new ArrayBuffer(i.byteLength + 1)),
                (s = new Uint8Array(i)));
              for (let n = 0; n < t.byteLength; n++) s[n + 1] = e[n];
              s[0] = 0;
            }
            return i;
          }
          n *= Math.pow(2, 8);
        }
        return new ArrayBuffer(0);
      }
      function d(t, e) {
        if (t.byteLength !== e.byteLength) return !1;
        const n = new Uint8Array(t),
          r = new Uint8Array(e);
        for (let i = 0; i < n.length; i++) if (n[i] !== r[i]) return !1;
        return !0;
      }
      function g(t, e) {
        const n = t.toString(10);
        if (e < n.length) return "";
        const r = e - n.length,
          i = new Array(r);
        for (let o = 0; o < r; o++) i[o] = "0";
        const s = i.join("");
        return s.concat(n);
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.arrayBufferToString = b),
        (e.bufferToHexCodes = s),
        (e.checkBufferParams = o),
        (e.clearProps = R),
        (e.fromBase64 = m),
        (e.getParametersValue = i),
        (e.getUTCDate = r),
        (e.isEqualBuffer = d),
        (e.nearestPowerOf2 = T),
        (e.padNumber = g),
        (e.stringToArrayBuffer = w),
        (e.toBase64 = y),
        (e.utilConcatBuf = c),
        (e.utilConcatView = l),
        (e.utilDecodeTC = h),
        (e.utilEncodeTC = f),
        (e.utilFromBase = a),
        (e.utilToBase = u));
      const p =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
      function y(t, e, n, r) {
        (void 0 === e && (e = !1),
          void 0 === n && (n = !1),
          void 0 === r && (r = !1));
        let i = 0,
          s = 0,
          o = 0,
          a = "";
        const u = e ? _ : p;
        if (r) {
          let e = 0;
          for (let n = 0; n < t.length; n++)
            if (0 !== t.charCodeAt(n)) {
              e = n;
              break;
            }
          t = t.slice(e);
        }
        while (i < t.length) {
          const e = t.charCodeAt(i++);
          i >= t.length && (s = 1);
          const r = t.charCodeAt(i++);
          i >= t.length && (o = 1);
          const c = t.charCodeAt(i++),
            l = e >> 2,
            h = ((3 & e) << 4) | (r >> 4);
          let f = ((15 & r) << 2) | (c >> 6),
            d = 63 & c;
          (1 === s ? (f = d = 64) : 1 === o && (d = 64),
            (a += n
              ? 64 === f
                ? `${u.charAt(l)}${u.charAt(h)}`
                : 64 === d
                  ? `${u.charAt(l)}${u.charAt(h)}${u.charAt(f)}`
                  : `${u.charAt(l)}${u.charAt(h)}${u.charAt(f)}${u.charAt(d)}`
              : `${u.charAt(l)}${u.charAt(h)}${u.charAt(f)}${u.charAt(d)}`));
        }
        return a;
      }
      function m(t, e, n) {
        (void 0 === e && (e = !1), void 0 === n && (n = !1));
        const r = e ? _ : p;
        function i(t) {
          for (let e = 0; e < 64; e++) if (r.charAt(e) === t) return e;
          return 64;
        }
        function s(t) {
          return 64 === t ? 0 : t;
        }
        let o = 0,
          a = "";
        while (o < t.length) {
          const e = i(t.charAt(o++)),
            n = o >= t.length ? 0 : i(t.charAt(o++)),
            r = o >= t.length ? 0 : i(t.charAt(o++)),
            u = o >= t.length ? 0 : i(t.charAt(o++)),
            c = (s(e) << 2) | (s(n) >> 4),
            l = ((15 & s(n)) << 4) | (s(r) >> 2),
            h = ((3 & s(r)) << 6) | s(u);
          ((a += String.fromCharCode(c)),
            64 !== r && (a += String.fromCharCode(l)),
            64 !== u && (a += String.fromCharCode(h)));
        }
        if (n) {
          const t = a.length;
          let e = -1;
          for (let n = t - 1; n >= 0; n--)
            if (0 !== a.charCodeAt(n)) {
              e = n;
              break;
            }
          a = -1 !== e ? a.slice(0, e + 1) : "";
        }
        return a;
      }
      function b(t) {
        let e = "";
        const n = new Uint8Array(t);
        for (const r of n) e += String.fromCharCode(r);
        return e;
      }
      function w(t) {
        const e = t.length,
          n = new ArrayBuffer(e),
          r = new Uint8Array(n);
        for (let i = 0; i < e; i++) r[i] = t.charCodeAt(i);
        return n;
      }
      const v = Math.log(2);
      function T(t) {
        const e = Math.log(t) / v,
          n = Math.floor(e),
          r = Math.round(e);
        return n === r ? n : r;
      }
      function R(t, e) {
        for (const n of e) delete t[n];
      }
    },
    7911: function (t, e, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = r(n(2774)),
        s = a(n(6119)),
        o = r(n(3295));
      function a(t, e) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (a = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            s,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((i = e ? r : n)) {
            if (i.has(t)) return i.get(t);
            i.set(t, o);
          }
          for (const n in t)
            "default" !== n &&
              {}.hasOwnProperty.call(t, n) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, n)) &&
              (s.get || s.set)
                ? i(o, n, s)
                : (o[n] = t[n]));
          return o;
        })(t, e);
      }
      class TransactionHashMap extends o.default {
        constructor() {
          super((t) => i.default.fromString(t));
        }
        static async _fromTransaction(t) {
          const e = new TransactionHashMap();
          for (let n = 0; n < t._nodeAccountIds.length; n++) {
            const r = t._nodeAccountIds.list[n],
              i = t._transactions.get(n),
              o = await s.digest(i.signedTransactionBytes);
            e._set(r, o);
          }
          return e;
        }
      }
      e.default = TransactionHashMap;
    },
    7912: function (t, e, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = r(n(7913)),
        s = r(n(3295)),
        o = r(n(2774));
      class SignatureMap extends s.default {
        constructor() {
          super((t) => o.default.fromString(t));
        }
        static _fromTransaction(t) {
          const e = new SignatureMap();
          for (let n = 0; n < t._nodeAccountIds.length; n++) {
            const r = t._signedTransactions.get(n).sigMap;
            null != r &&
              e._set(
                t._nodeAccountIds.list[n],
                i.default._fromTransactionSigMap(r),
              );
          }
          return e;
        }
      }
      e.default = SignatureMap;
    },
    7913: function (t, e, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = r(n(3295)),
        s = r(n(3421));
      class NodeAccountIdSignatureMap extends i.default {
        constructor() {
          super((t) => s.default.fromString(t));
        }
        static _fromTransactionSigMap(t) {
          const e = new NodeAccountIdSignatureMap(),
            n = null != t.sigPair ? t.sigPair : [];
          for (const r of n)
            null != r.pubKeyPrefix &&
              (null != r.ed25519
                ? e._set(s.default.fromBytesED25519(r.pubKeyPrefix), r.ed25519)
                : null != r.ECDSASecp256k1 &&
                  e._set(
                    s.default.fromBytesECDSA(r.pubKeyPrefix),
                    r.ECDSASecp256k1,
                  ));
          return e;
        }
      }
      e.default = NodeAccountIdSignatureMap;
    },
    7989: function (t, e, n) {
      "use strict";
      const r = n(7990);
      t.exports = d;
      const i = C().console || {},
        s = {
          mapHttpRequest: S,
          mapHttpResponse: S,
          wrapRequestSerializer: E,
          wrapResponseSerializer: E,
          wrapErrorSerializer: E,
          req: S,
          res: S,
          err: I,
          errWithCause: I,
        };
      function o(t, e) {
        return "silent" === t ? 1 / 0 : e.levels.values[t];
      }
      const a = Symbol("pino.logFuncs"),
        u = Symbol("pino.hierarchy"),
        c = {
          error: "log",
          fatal: "error",
          warn: "error",
          info: "log",
          debug: "log",
          trace: "log",
        };
      function l(t, e) {
        const n = { logger: e, parent: t[u] };
        e[u] = n;
      }
      function h(t, e, n) {
        const r = {};
        (e.forEach((t) => {
          r[t] = n[t] ? n[t] : i[t] || i[c[t] || "log"] || O;
        }),
          (t[a] = r));
      }
      function f(t, e) {
        if (Array.isArray(t)) {
          const e = t.filter(function (t) {
            return "!stdSerializers.err" !== t;
          });
          return e;
        }
        return !0 === t && Object.keys(e);
      }
      function d(t) {
        ((t = t || {}), (t.browser = t.browser || {}));
        const e = t.browser.transmit;
        if (e && "function" !== typeof e.send)
          throw Error("pino: transmit option must have a send function");
        const n = t.browser.write || i;
        t.browser.write && (t.browser.asObject = !0);
        const r = t.serializers || {},
          s = f(t.browser.serialize, r);
        let a = t.browser.serialize;
        Array.isArray(t.browser.serialize) &&
          t.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (a = !1);
        const u = Object.keys(t.customLevels || {}),
          c = ["error", "fatal", "warn", "info", "debug", "trace"].concat(u);
        ("function" === typeof n &&
          c.forEach(function (t) {
            n[t] = n;
          }),
          (!1 === t.enabled || t.browser.disabled) && (t.level = "silent"));
        const d = t.level || "info",
          p = Object.create(n);
        (p.log || (p.log = O),
          h(p, c, n),
          l({}, p),
          Object.defineProperty(p, "levelVal", { get: m }),
          Object.defineProperty(p, "level", { get: b, set: w }));
        const _ = {
          transmit: e,
          serialize: s,
          asObject: t.browser.asObject,
          formatters: t.browser.formatters,
          levels: c,
          timestamp: A(t),
        };
        function m() {
          return o(this.level, this);
        }
        function b() {
          return this._level;
        }
        function w(t) {
          if ("silent" !== t && !this.levels.values[t])
            throw Error("unknown level " + t);
          ((this._level = t),
            y(this, _, p, "error"),
            y(this, _, p, "fatal"),
            y(this, _, p, "warn"),
            y(this, _, p, "info"),
            y(this, _, p, "debug"),
            y(this, _, p, "trace"),
            u.forEach((t) => {
              y(this, _, p, t);
            }));
        }
        function T(n, i) {
          if (!n) throw new Error("missing bindings for child Pino");
          ((i = i || {}),
            s && n.serializers && (i.serializers = n.serializers));
          const o = i.serializers;
          if (s && o) {
            var a = Object.assign({}, r, o),
              u = !0 === t.browser.serialize ? Object.keys(a) : s;
            (delete n.serializers, v([n], u, a, this._stdErrSerialize));
          }
          function c(t) {
            ((this._childLevel = 1 + (0 | t._childLevel)),
              (this.bindings = n),
              a && ((this.serializers = a), (this._serialize = u)),
              e && (this._logEvent = R([].concat(t._logEvent.bindings, n))));
          }
          c.prototype = this;
          const h = new c(this);
          return (l(this, h), (h.level = this.level), h);
        }
        return (
          (p.levels = g(t)),
          (p.level = d),
          (p.setMaxListeners =
            p.getMaxListeners =
            p.emit =
            p.addListener =
            p.on =
            p.prependListener =
            p.once =
            p.prependOnceListener =
            p.removeListener =
            p.removeAllListeners =
            p.listeners =
            p.listenerCount =
            p.eventNames =
            p.write =
            p.flush =
              O),
          (p.serializers = r),
          (p._serialize = s),
          (p._stdErrSerialize = a),
          (p.child = T),
          e && (p._logEvent = R()),
          p
        );
      }
      function g(t) {
        const e = t.customLevels || {},
          n = Object.assign({}, d.levels.values, e),
          r = Object.assign({}, d.levels.labels, p(e));
        return { values: n, labels: r };
      }
      function p(t) {
        const e = {};
        return (
          Object.keys(t).forEach(function (n) {
            e[t[n]] = n;
          }),
          e
        );
      }
      function _(t) {
        const e = [];
        t.bindings && e.push(t.bindings);
        let n = t[u];
        while (n.parent)
          ((n = n.parent), n.logger.bindings && e.push(n.logger.bindings));
        return e.reverse();
      }
      function y(t, e, n, r) {
        if (
          (Object.defineProperty(t, r, {
            value: o(t.level, n) > o(r, n) ? O : n[a][r],
            writable: !0,
            enumerable: !0,
            configurable: !0,
          }),
          !e.transmit && t[r] === O)
        )
          return;
        t[r] = b(t, e, n, r);
        const i = _(t);
        0 !== i.length && (t[r] = m(i, t[r]));
      }
      function m(t, e) {
        return function () {
          return e.apply(this, [...t, ...arguments]);
        };
      }
      function b(t, e, n, r) {
        return (function (s) {
          return function () {
            const a = e.timestamp(),
              u = new Array(arguments.length),
              c =
                Object.getPrototypeOf && Object.getPrototypeOf(this) === i
                  ? i
                  : this;
            for (var l = 0; l < u.length; l++) u[l] = arguments[l];
            if (
              (e.serialize &&
                !e.asObject &&
                v(u, this._serialize, this.serializers, this._stdErrSerialize),
              e.asObject || e.formatters
                ? s.call(c, w(this, r, u, a, e.formatters))
                : s.apply(c, u),
              e.transmit)
            ) {
              const i = e.transmit.level || t._level,
                s = n.levels.values[i],
                c = n.levels.values[r];
              if (c < s) return;
              T(
                this,
                {
                  ts: a,
                  methodLevel: r,
                  methodValue: c,
                  transmitLevel: i,
                  transmitValue: n.levels.values[e.transmit.level || t._level],
                  send: e.transmit.send,
                  val: o(t._level, n),
                },
                u,
              );
            }
          };
        })(t[a][r]);
      }
      function w(t, e, n, i, s) {
        void 0 === s && (s = {});
        const { level: o = () => t.levels.values[e], log: a = (t) => t } = s;
        t._serialize && v(n, t._serialize, t.serializers, t._stdErrSerialize);
        const u = n.slice();
        let c = u[0];
        const l = {};
        (i && (l.time = i), (l.level = o(e, t.levels.values[e])));
        let h = 1 + (0 | t._childLevel);
        if ((h < 1 && (h = 1), null !== c && "object" === typeof c)) {
          while (h-- && "object" === typeof u[0]) Object.assign(l, u.shift());
          c = u.length ? r(u.shift(), u) : void 0;
        } else "string" === typeof c && (c = r(u.shift(), u));
        void 0 !== c && (l.msg = c);
        const f = a(l);
        return f;
      }
      function v(t, e, n, r) {
        for (const i in t)
          if (r && t[i] instanceof Error) t[i] = d.stdSerializers.err(t[i]);
          else if ("object" === typeof t[i] && !Array.isArray(t[i]))
            for (const r in t[i])
              e && e.indexOf(r) > -1 && r in n && (t[i][r] = n[r](t[i][r]));
      }
      function T(t, e, n) {
        const r = e.send,
          i = e.ts,
          s = e.methodLevel,
          o = e.methodValue,
          a = e.val,
          u = t._logEvent.bindings;
        (v(
          n,
          t._serialize || Object.keys(t.serializers),
          t.serializers,
          void 0 === t._stdErrSerialize || t._stdErrSerialize,
        ),
          (t._logEvent.ts = i),
          (t._logEvent.messages = n.filter(function (t) {
            return -1 === u.indexOf(t);
          })),
          (t._logEvent.level.label = s),
          (t._logEvent.level.value = o),
          r(s, t._logEvent, a),
          (t._logEvent = R(u)));
      }
      function R(t) {
        return {
          ts: 0,
          messages: [],
          bindings: t || [],
          level: { label: "", value: 0 },
        };
      }
      function I(t) {
        const e = { type: t.constructor.name, msg: t.message, stack: t.stack };
        for (const n in t) void 0 === e[n] && (e[n] = t[n]);
        return e;
      }
      function A(t) {
        return "function" === typeof t.timestamp
          ? t.timestamp
          : !1 === t.timestamp
            ? k
            : N;
      }
      function S() {
        return {};
      }
      function E(t) {
        return t;
      }
      function O() {}
      function k() {
        return !1;
      }
      function N() {
        return Date.now();
      }
      function U() {
        return Math.round(Date.now() / 1e3);
      }
      function B() {
        return new Date(Date.now()).toISOString();
      }
      function C() {
        function t(t) {
          return "undefined" !== typeof t && t;
        }
        try {
          return (
            "undefined" !== typeof globalThis ||
              Object.defineProperty(Object.prototype, "globalThis", {
                get: function () {
                  return (
                    delete Object.prototype.globalThis,
                    (this.globalThis = this)
                  );
                },
                configurable: !0,
              }),
            globalThis
          );
        } catch (e) {
          return t(self) || t(window) || t(this) || {};
        }
      }
      ((d.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (d.stdSerializers = s),
        (d.stdTimeFunctions = Object.assign(
          {},
          { nullTime: k, epochTime: N, unixTime: U, isoTime: B },
        )),
        (t.exports.default = d),
        (t.exports.pino = d));
    },
    7990: function (t, e, n) {
      "use strict";
      function r(t) {
        try {
          return JSON.stringify(t);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      function i(t, e, n) {
        var i = (n && n.stringify) || r,
          s = 1;
        if ("object" === typeof t && null !== t) {
          var o = e.length + s;
          if (1 === o) return t;
          var a = new Array(o);
          a[0] = i(t);
          for (var u = 1; u < o; u++) a[u] = i(e[u]);
          return a.join(" ");
        }
        if ("string" !== typeof t) return t;
        var c = e.length;
        if (0 === c) return t;
        for (
          var l = "", h = 1 - s, f = -1, d = (t && t.length) || 0, g = 0;
          g < d;
        ) {
          if (37 === t.charCodeAt(g) && g + 1 < d) {
            switch (((f = f > -1 ? f : 0), t.charCodeAt(g + 1))) {
              case 100:
              case 102:
                if (h >= c) break;
                if (null == e[h]) break;
                (f < g && (l += t.slice(f, g)),
                  (l += Number(e[h])),
                  (f = g + 2),
                  g++);
                break;
              case 105:
                if (h >= c) break;
                if (null == e[h]) break;
                (f < g && (l += t.slice(f, g)),
                  (l += Math.floor(Number(e[h]))),
                  (f = g + 2),
                  g++);
                break;
              case 79:
              case 111:
              case 106:
                if (h >= c) break;
                if (void 0 === e[h]) break;
                f < g && (l += t.slice(f, g));
                var p = typeof e[h];
                if ("string" === p) {
                  ((l += "'" + e[h] + "'"), (f = g + 2), g++);
                  break;
                }
                if ("function" === p) {
                  ((l += e[h].name || "<anonymous>"), (f = g + 2), g++);
                  break;
                }
                ((l += i(e[h])), (f = g + 2), g++);
                break;
              case 115:
                if (h >= c) break;
                (f < g && (l += t.slice(f, g)),
                  (l += String(e[h])),
                  (f = g + 2),
                  g++);
                break;
              case 37:
                (f < g && (l += t.slice(f, g)),
                  (l += "%"),
                  (f = g + 2),
                  g++,
                  h--);
                break;
            }
            ++h;
          }
          ++g;
        }
        return -1 === f ? t : (f < d && (l += t.slice(f)), l);
      }
      t.exports = i;
    },
  },
]);
