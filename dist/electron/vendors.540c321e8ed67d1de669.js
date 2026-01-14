(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [15],
  {
    2802: function (e, t, r) {
      var BigInteger = r(3048);
      (r(3268), (e.exports = BigInteger));
    },
    3046: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(49),
          i = r(2897),
          o = r(2852),
          s = function (e) {
            for (var r = t.alloc(e.length), n = 0; n < e.length; n++)
              r[n] = e[e.length - 1 - n];
            return r;
          };
        ((n.Zero = new n(0)),
          (n.One = new n(1)),
          (n.Minus1 = new n(-1)),
          (n.fromNumber = function (e) {
            return (i.checkArgument(o.isNumber(e)), new n(e));
          }),
          (n.fromString = function (e, t) {
            return (i.checkArgument(o.isString(e)), new n(e, t));
          }),
          (n.fromBuffer = function (e, t) {
            "undefined" !== typeof t && "little" === t.endian && (e = s(e));
            var r = e.toString("hex"),
              i = new n(r, 16);
            return i;
          }),
          (n.fromSM = function (e, r) {
            var i;
            if (0 === e.length) return n.fromBuffer(t.from([0]));
            var o = "big";
            return (
              r && (o = r.endian),
              "little" === o && (e = s(e)),
              128 & e[0]
                ? ((e[0] = 127 & e[0]), (i = n.fromBuffer(e)), i.neg().copy(i))
                : (i = n.fromBuffer(e)),
              i
            );
          }),
          (n.prototype.toNumber = function () {
            return parseInt(this.toString(10), 10);
          }),
          (n.prototype.toBuffer = function (e) {
            var r, i;
            if (e && e.size) {
              i = this.toString(16, 2);
              var o = i.length / 2;
              ((r = t.from(i, "hex")),
                o === e.size
                  ? (r = r)
                  : o > e.size
                    ? (r = n.trim(r, o))
                    : o < e.size && (r = n.pad(r, o, e.size)));
            } else ((i = this.toString(16, 2)), (r = t.from(i, "hex")));
            return (
              "undefined" !== typeof e && "little" === e.endian && (r = s(r)),
              r
            );
          }),
          (n.prototype.toSMBigEndian = function () {
            var e;
            return (
              -1 === this.cmp(n.Zero)
                ? ((e = this.neg().toBuffer()),
                  128 & e[0]
                    ? (e = t.concat([t.from([128]), e]))
                    : (e[0] = 128 | e[0]))
                : ((e = this.toBuffer()),
                  128 & e[0] && (e = t.concat([t.from([0]), e]))),
              (1 === e.length) & (0 === e[0]) && (e = t.from([])),
              e
            );
          }),
          (n.prototype.toSM = function (e) {
            var t = e ? e.endian : "big",
              r = this.toSMBigEndian();
            return ("little" === t && (r = s(r)), r);
          }),
          (n.fromScriptNumBuffer = function (e, t, r) {
            var o = r || 4;
            if (
              (i.checkArgument(
                e.length <= o,
                new Error("script number overflow"),
              ),
              t &&
                e.length > 0 &&
                0 === (127 & e[e.length - 1]) &&
                (e.length <= 1 || 0 === (128 & e[e.length - 2])))
            )
              throw new Error("non-minimally encoded script number");
            return n.fromSM(e, { endian: "little" });
          }),
          (n.prototype.toScriptNumBuffer = function () {
            return this.toSM({ endian: "little" });
          }),
          (n.trim = function (e, t) {
            return e.slice(t - e.length, e.length);
          }),
          (n.pad = function (e, r, n) {
            for (var i = t.alloc(n), o = 0; o < e.length; o++)
              i[i.length - 1 - o] = e[e.length - 1 - o];
            for (o = 0; o < n - r; o++) i[o] = 0;
            return i;
          }),
          (e.exports = n));
      }).call(this, r(2).Buffer);
    },
    3047: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(2764),
          i = r(2936),
          o = r(2897),
          s = e.exports;
        ((s.sha1 = function (e) {
          return (
            o.checkArgument(i.isBuffer(e)),
            n.createHash("sha1").update(e).digest()
          );
        }),
          (s.sha1.blocksize = 512),
          (s.sha256 = function (e) {
            return (
              o.checkArgument(i.isBuffer(e)),
              n.createHash("sha256").update(e).digest()
            );
          }),
          (s.sha256.blocksize = 512),
          (s.sha256sha256 = function (e) {
            return (o.checkArgument(i.isBuffer(e)), s.sha256(s.sha256(e)));
          }),
          (s.ripemd160 = function (e) {
            return (
              o.checkArgument(i.isBuffer(e)),
              n.createHash("ripemd160").update(e).digest()
            );
          }),
          (s.sha256ripemd160 = function (e) {
            return (o.checkArgument(i.isBuffer(e)), s.ripemd160(s.sha256(e)));
          }),
          (s.sha512 = function (e) {
            return (
              o.checkArgument(i.isBuffer(e)),
              n.createHash("sha512").update(e).digest()
            );
          }),
          (s.sha512.blocksize = 1024),
          (s.hmac = function (e, r, n) {
            (o.checkArgument(i.isBuffer(r)),
              o.checkArgument(i.isBuffer(n)),
              o.checkArgument(e.blocksize));
            var s = e.blocksize / 8;
            if (n.length > s) n = e(n);
            else if (n < s) {
              var a = t.alloc(s);
              (a.fill(0), n.copy(a), (n = a));
            }
            var u = t.alloc(s);
            u.fill(92);
            var f = t.alloc(s);
            f.fill(54);
            for (var h = t.alloc(s), c = t.alloc(s), l = 0; l < s; l++)
              ((h[l] = u[l] ^ n[l]), (c[l] = f[l] ^ n[l]));
            return e(t.concat([h, e(t.concat([c, r]))]));
          }),
          (s.sha256hmac = function (e, t) {
            return s.hmac(s.sha256, e, t);
          }),
          (s.sha512hmac = function (e, t) {
            return s.hmac(s.sha512, e, t);
          }));
      }).call(this, r(2).Buffer);
    },
    3048: function (e, t, r) {
      function BigInteger(e, t, r) {
        if (!(this instanceof BigInteger)) return new BigInteger(e, t, r);
        null != e &&
          ("number" == typeof e
            ? this.fromNumber(e, t, r)
            : null == t && "string" != typeof e
              ? this.fromString(e, 256)
              : this.fromString(e, t));
      }
      var n,
        i = BigInteger.prototype;
      function o(e, t, r, n, i, o) {
        while (--o >= 0) {
          var s = t * this[e++] + r[n] + i;
          ((i = Math.floor(s / 67108864)), (r[n++] = 67108863 & s));
        }
        return i;
      }
      ((i.__bigi = r(3267).version),
        (BigInteger.isBigInteger = function (e, t) {
          return e && e.__bigi && (!t || e.__bigi === i.__bigi);
        }),
        (BigInteger.prototype.am = o),
        (n = 26),
        (BigInteger.prototype.DB = n),
        (BigInteger.prototype.DM = (1 << n) - 1));
      var s = (BigInteger.prototype.DV = 1 << n),
        a = 52;
      ((BigInteger.prototype.FV = Math.pow(2, a)),
        (BigInteger.prototype.F1 = a - n),
        (BigInteger.prototype.F2 = 2 * n - a));
      var u,
        f,
        h = "0123456789abcdefghijklmnopqrstuvwxyz",
        c = new Array();
      for (u = "0".charCodeAt(0), f = 0; f <= 9; ++f) c[u++] = f;
      for (u = "a".charCodeAt(0), f = 10; f < 36; ++f) c[u++] = f;
      for (u = "A".charCodeAt(0), f = 10; f < 36; ++f) c[u++] = f;
      function l(e) {
        return h.charAt(e);
      }
      function p(e, t) {
        var r = c[e.charCodeAt(t)];
        return null == r ? -1 : r;
      }
      function d(e) {
        for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
        ((e.t = this.t), (e.s = this.s));
      }
      function m(e) {
        ((this.t = 1),
          (this.s = e < 0 ? -1 : 0),
          e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + s) : (this.t = 0));
      }
      function g(e) {
        var t = new BigInteger();
        return (t.fromInt(e), t);
      }
      function y(e, t) {
        var r,
          n = this;
        if (16 == t) r = 4;
        else if (8 == t) r = 3;
        else if (256 == t) r = 8;
        else if (2 == t) r = 1;
        else if (32 == t) r = 5;
        else {
          if (4 != t) return void n.fromRadix(e, t);
          r = 2;
        }
        ((n.t = 0), (n.s = 0));
        var i = e.length,
          o = !1,
          s = 0;
        while (--i >= 0) {
          var a = 8 == r ? 255 & e[i] : p(e, i);
          a < 0
            ? "-" == e.charAt(i) && (o = !0)
            : ((o = !1),
              0 == s
                ? (n[n.t++] = a)
                : s + r > n.DB
                  ? ((n[n.t - 1] |= (a & ((1 << (n.DB - s)) - 1)) << s),
                    (n[n.t++] = a >> (n.DB - s)))
                  : (n[n.t - 1] |= a << s),
              (s += r),
              s >= n.DB && (s -= n.DB));
        }
        (8 == r &&
          0 != (128 & e[0]) &&
          ((n.s = -1), s > 0 && (n[n.t - 1] |= ((1 << (n.DB - s)) - 1) << s)),
          n.clamp(),
          o && BigInteger.ZERO.subTo(n, n));
      }
      function v() {
        var e = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == e) --this.t;
      }
      function b(e) {
        var t,
          r = this;
        if (r.s < 0) return "-" + r.negate().toString(e);
        if (16 == e) t = 4;
        else if (8 == e) t = 3;
        else if (2 == e) t = 1;
        else if (32 == e) t = 5;
        else {
          if (4 != e) return r.toRadix(e);
          t = 2;
        }
        var n,
          i = (1 << t) - 1,
          o = !1,
          s = "",
          a = r.t,
          u = r.DB - ((a * r.DB) % t);
        if (a-- > 0) {
          u < r.DB && (n = r[a] >> u) > 0 && ((o = !0), (s = l(n)));
          while (a >= 0)
            (u < t
              ? ((n = (r[a] & ((1 << u) - 1)) << (t - u)),
                (n |= r[--a] >> (u += r.DB - t)))
              : ((n = (r[a] >> (u -= t)) & i), u <= 0 && ((u += r.DB), --a)),
              n > 0 && (o = !0),
              o && (s += l(n)));
        }
        return o ? s : "0";
      }
      function w() {
        var e = new BigInteger();
        return (BigInteger.ZERO.subTo(this, e), e);
      }
      function B() {
        return this.s < 0 ? this.negate() : this;
      }
      function S(e) {
        var t = this.s - e.s;
        if (0 != t) return t;
        var r = this.t;
        if (((t = r - e.t), 0 != t)) return this.s < 0 ? -t : t;
        while (--r >= 0) if (0 != (t = this[r] - e[r])) return t;
        return 0;
      }
      function k(e) {
        var t,
          r = 1;
        return (
          0 != (t = e >>> 16) && ((e = t), (r += 16)),
          0 != (t = e >> 8) && ((e = t), (r += 8)),
          0 != (t = e >> 4) && ((e = t), (r += 4)),
          0 != (t = e >> 2) && ((e = t), (r += 2)),
          0 != (t = e >> 1) && ((e = t), (r += 1)),
          r
        );
      }
      function T() {
        return this.t <= 0
          ? 0
          : this.DB * (this.t - 1) + k(this[this.t - 1] ^ (this.s & this.DM));
      }
      function E() {
        return this.bitLength() >> 3;
      }
      function I(e, t) {
        var r;
        for (r = this.t - 1; r >= 0; --r) t[r + e] = this[r];
        for (r = e - 1; r >= 0; --r) t[r] = 0;
        ((t.t = this.t + e), (t.s = this.s));
      }
      function P(e, t) {
        for (var r = e; r < this.t; ++r) t[r - e] = this[r];
        ((t.t = Math.max(this.t - e, 0)), (t.s = this.s));
      }
      function x(e, t) {
        var r,
          n = this,
          i = e % n.DB,
          o = n.DB - i,
          s = (1 << o) - 1,
          a = Math.floor(e / n.DB),
          u = (n.s << i) & n.DM;
        for (r = n.t - 1; r >= 0; --r)
          ((t[r + a + 1] = (n[r] >> o) | u), (u = (n[r] & s) << i));
        for (r = a - 1; r >= 0; --r) t[r] = 0;
        ((t[a] = u), (t.t = n.t + a + 1), (t.s = n.s), t.clamp());
      }
      function A(e, t) {
        var r = this;
        t.s = r.s;
        var n = Math.floor(e / r.DB);
        if (n >= r.t) t.t = 0;
        else {
          var i = e % r.DB,
            o = r.DB - i,
            s = (1 << i) - 1;
          t[0] = r[n] >> i;
          for (var a = n + 1; a < r.t; ++a)
            ((t[a - n - 1] |= (r[a] & s) << o), (t[a - n] = r[a] >> i));
          (i > 0 && (t[r.t - n - 1] |= (r.s & s) << o),
            (t.t = r.t - n),
            t.clamp());
        }
      }
      function _(e, t) {
        var r = this,
          n = 0,
          i = 0,
          o = Math.min(e.t, r.t);
        while (n < o) ((i += r[n] - e[n]), (t[n++] = i & r.DM), (i >>= r.DB));
        if (e.t < r.t) {
          i -= e.s;
          while (n < r.t) ((i += r[n]), (t[n++] = i & r.DM), (i >>= r.DB));
          i += r.s;
        } else {
          i += r.s;
          while (n < e.t) ((i -= e[n]), (t[n++] = i & r.DM), (i >>= r.DB));
          i -= e.s;
        }
        ((t.s = i < 0 ? -1 : 0),
          i < -1 ? (t[n++] = r.DV + i) : i > 0 && (t[n++] = i),
          (t.t = n),
          t.clamp());
      }
      function F(e, t) {
        var r = this.abs(),
          n = e.abs(),
          i = r.t;
        t.t = i + n.t;
        while (--i >= 0) t[i] = 0;
        for (i = 0; i < n.t; ++i) t[i + r.t] = r.am(0, n[i], t, i, 0, r.t);
        ((t.s = 0), t.clamp(), this.s != e.s && BigInteger.ZERO.subTo(t, t));
      }
      function N(e) {
        var t = this.abs(),
          r = (e.t = 2 * t.t);
        while (--r >= 0) e[r] = 0;
        for (r = 0; r < t.t - 1; ++r) {
          var n = t.am(r, t[r], e, 2 * r, 0, 1);
          (e[r + t.t] += t.am(r + 1, 2 * t[r], e, 2 * r + 1, n, t.t - r - 1)) >=
            t.DV && ((e[r + t.t] -= t.DV), (e[r + t.t + 1] = 1));
        }
        (e.t > 0 && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)),
          (e.s = 0),
          e.clamp());
      }
      function C(e, t, r) {
        var n = this,
          i = e.abs();
        if (!(i.t <= 0)) {
          var o = n.abs();
          if (o.t < i.t)
            return (null != t && t.fromInt(0), void (null != r && n.copyTo(r)));
          null == r && (r = new BigInteger());
          var s = new BigInteger(),
            a = n.s,
            u = e.s,
            f = n.DB - k(i[i.t - 1]);
          f > 0
            ? (i.lShiftTo(f, s), o.lShiftTo(f, r))
            : (i.copyTo(s), o.copyTo(r));
          var h = s.t,
            c = s[h - 1];
          if (0 != c) {
            var l = c * (1 << n.F1) + (h > 1 ? s[h - 2] >> n.F2 : 0),
              p = n.FV / l,
              d = (1 << n.F1) / l,
              m = 1 << n.F2,
              g = r.t,
              y = g - h,
              v = null == t ? new BigInteger() : t;
            (s.dlShiftTo(y, v),
              r.compareTo(v) >= 0 && ((r[r.t++] = 1), r.subTo(v, r)),
              BigInteger.ONE.dlShiftTo(h, v),
              v.subTo(s, s));
            while (s.t < h) s[s.t++] = 0;
            while (--y >= 0) {
              var b =
                r[--g] == c ? n.DM : Math.floor(r[g] * p + (r[g - 1] + m) * d);
              if ((r[g] += s.am(0, b, r, y, 0, h)) < b) {
                (s.dlShiftTo(y, v), r.subTo(v, r));
                while (r[g] < --b) r.subTo(v, r);
              }
            }
            (null != t &&
              (r.drShiftTo(h, t), a != u && BigInteger.ZERO.subTo(t, t)),
              (r.t = h),
              r.clamp(),
              f > 0 && r.rShiftTo(f, r),
              a < 0 && BigInteger.ZERO.subTo(r, r));
          }
        }
      }
      function H(e) {
        var t = new BigInteger();
        return (
          this.abs().divRemTo(e, null, t),
          this.s < 0 && t.compareTo(BigInteger.ZERO) > 0 && e.subTo(t, t),
          t
        );
      }
      function D(e) {
        this.m = e;
      }
      function K(e) {
        return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
      }
      function O(e) {
        return e;
      }
      function M(e) {
        e.divRemTo(this.m, null, e);
      }
      function R(e, t, r) {
        (e.multiplyTo(t, r), this.reduce(r));
      }
      function U(e, t) {
        (e.squareTo(t), this.reduce(t));
      }
      function z() {
        if (this.t < 1) return 0;
        var e = this[0];
        if (0 == (1 & e)) return 0;
        var t = 3 & e;
        return (
          (t = (t * (2 - (15 & e) * t)) & 15),
          (t = (t * (2 - (255 & e) * t)) & 255),
          (t = (t * (2 - (((65535 & e) * t) & 65535))) & 65535),
          (t = (t * (2 - ((e * t) % this.DV))) % this.DV),
          t > 0 ? this.DV - t : -t
        );
      }
      function V(e) {
        ((this.m = e),
          (this.mp = e.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (e.DB - 15)) - 1),
          (this.mt2 = 2 * e.t));
      }
      function L(e) {
        var t = new BigInteger();
        return (
          e.abs().dlShiftTo(this.m.t, t),
          t.divRemTo(this.m, null, t),
          e.s < 0 && t.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(t, t),
          t
        );
      }
      function j(e) {
        var t = new BigInteger();
        return (e.copyTo(t), this.reduce(t), t);
      }
      function W(e) {
        while (e.t <= this.mt2) e[e.t++] = 0;
        for (var t = 0; t < this.m.t; ++t) {
          var r = 32767 & e[t],
            n =
              (r * this.mpl +
                (((r * this.mph + (e[t] >> 15) * this.mpl) & this.um) << 15)) &
              e.DM;
          ((r = t + this.m.t), (e[r] += this.m.am(0, n, e, t, 0, this.m.t)));
          while (e[r] >= e.DV) ((e[r] -= e.DV), e[++r]++);
        }
        (e.clamp(),
          e.drShiftTo(this.m.t, e),
          e.compareTo(this.m) >= 0 && e.subTo(this.m, e));
      }
      function q(e, t) {
        (e.squareTo(t), this.reduce(t));
      }
      function X(e, t, r) {
        (e.multiplyTo(t, r), this.reduce(r));
      }
      function G() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s);
      }
      function Z(e, t) {
        if (e > 4294967295 || e < 1) return BigInteger.ONE;
        var r = new BigInteger(),
          n = new BigInteger(),
          i = t.convert(this),
          o = k(e) - 1;
        i.copyTo(r);
        while (--o >= 0)
          if ((t.sqrTo(r, n), (e & (1 << o)) > 0)) t.mulTo(n, i, r);
          else {
            var s = r;
            ((r = n), (n = s));
          }
        return t.revert(r);
      }
      function J(e, t) {
        var r;
        return (
          (r = e < 256 || t.isEven() ? new D(t) : new V(t)),
          this.exp(e, r)
        );
      }
      function Y() {
        var e = new BigInteger();
        return (this.copyTo(e), e);
      }
      function Q() {
        if (this.s < 0) {
          if (1 == this.t) return this[0] - this.DV;
          if (0 == this.t) return -1;
        } else {
          if (1 == this.t) return this[0];
          if (0 == this.t) return 0;
        }
        return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
      }
      function $() {
        return 0 == this.t ? this.s : (this[0] << 24) >> 24;
      }
      function ee() {
        return 0 == this.t ? this.s : (this[0] << 16) >> 16;
      }
      function te(e) {
        return Math.floor((Math.LN2 * this.DB) / Math.log(e));
      }
      function re() {
        return this.s < 0
          ? -1
          : this.t <= 0 || (1 == this.t && this[0] <= 0)
            ? 0
            : 1;
      }
      function ne(e) {
        if ((null == e && (e = 10), 0 == this.signum() || e < 2 || e > 36))
          return "0";
        var t = this.chunkSize(e),
          r = Math.pow(e, t),
          n = g(r),
          i = new BigInteger(),
          o = new BigInteger(),
          s = "";
        this.divRemTo(n, i, o);
        while (i.signum() > 0)
          ((s = (r + o.intValue()).toString(e).substr(1) + s),
            i.divRemTo(n, i, o));
        return o.intValue().toString(e) + s;
      }
      function ie(e, t) {
        var r = this;
        (r.fromInt(0), null == t && (t = 10));
        for (
          var n = r.chunkSize(t),
            i = Math.pow(t, n),
            o = !1,
            s = 0,
            a = 0,
            u = 0;
          u < e.length;
          ++u
        ) {
          var f = p(e, u);
          f < 0
            ? "-" == e.charAt(u) && 0 == r.signum() && (o = !0)
            : ((a = t * a + f),
              ++s >= n &&
                (r.dMultiply(i), r.dAddOffset(a, 0), (s = 0), (a = 0)));
        }
        (s > 0 && (r.dMultiply(Math.pow(t, s)), r.dAddOffset(a, 0)),
          o && BigInteger.ZERO.subTo(r, r));
      }
      function oe(e, t, r) {
        var n = this;
        if ("number" == typeof t)
          if (e < 2) n.fromInt(1);
          else {
            (n.fromNumber(e, r),
              n.testBit(e - 1) ||
                n.bitwiseTo(BigInteger.ONE.shiftLeft(e - 1), pe, n),
              n.isEven() && n.dAddOffset(1, 0));
            while (!n.isProbablePrime(t))
              (n.dAddOffset(2, 0),
                n.bitLength() > e &&
                  n.subTo(BigInteger.ONE.shiftLeft(e - 1), n));
          }
        else {
          var i = new Array(),
            o = 7 & e;
          ((i.length = 1 + (e >> 3)),
            t.nextBytes(i),
            o > 0 ? (i[0] &= (1 << o) - 1) : (i[0] = 0),
            n.fromString(i, 256));
        }
      }
      function se() {
        var e = this,
          t = e.t,
          r = new Array();
        r[0] = e.s;
        var n,
          i = e.DB - ((t * e.DB) % 8),
          o = 0;
        if (t-- > 0) {
          i < e.DB &&
            (n = e[t] >> i) != (e.s & e.DM) >> i &&
            (r[o++] = n | (e.s << (e.DB - i)));
          while (t >= 0)
            (i < 8
              ? ((n = (e[t] & ((1 << i) - 1)) << (8 - i)),
                (n |= e[--t] >> (i += e.DB - 8)))
              : ((n = (e[t] >> (i -= 8)) & 255), i <= 0 && ((i += e.DB), --t)),
              0 != (128 & n) && (n |= -256),
              0 === o && (128 & e.s) != (128 & n) && ++o,
              (o > 0 || n != e.s) && (r[o++] = n));
        }
        return r;
      }
      function ae(e) {
        return 0 == this.compareTo(e);
      }
      function ue(e) {
        return this.compareTo(e) < 0 ? this : e;
      }
      function fe(e) {
        return this.compareTo(e) > 0 ? this : e;
      }
      function he(e, t, r) {
        var n,
          i,
          o = this,
          s = Math.min(e.t, o.t);
        for (n = 0; n < s; ++n) r[n] = t(o[n], e[n]);
        if (e.t < o.t) {
          for (i = e.s & o.DM, n = s; n < o.t; ++n) r[n] = t(o[n], i);
          r.t = o.t;
        } else {
          for (i = o.s & o.DM, n = s; n < e.t; ++n) r[n] = t(i, e[n]);
          r.t = e.t;
        }
        ((r.s = t(o.s, e.s)), r.clamp());
      }
      function ce(e, t) {
        return e & t;
      }
      function le(e) {
        var t = new BigInteger();
        return (this.bitwiseTo(e, ce, t), t);
      }
      function pe(e, t) {
        return e | t;
      }
      function de(e) {
        var t = new BigInteger();
        return (this.bitwiseTo(e, pe, t), t);
      }
      function me(e, t) {
        return e ^ t;
      }
      function ge(e) {
        var t = new BigInteger();
        return (this.bitwiseTo(e, me, t), t);
      }
      function ye(e, t) {
        return e & ~t;
      }
      function ve(e) {
        var t = new BigInteger();
        return (this.bitwiseTo(e, ye, t), t);
      }
      function be() {
        for (var e = new BigInteger(), t = 0; t < this.t; ++t)
          e[t] = this.DM & ~this[t];
        return ((e.t = this.t), (e.s = ~this.s), e);
      }
      function we(e) {
        var t = new BigInteger();
        return (e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t);
      }
      function Be(e) {
        var t = new BigInteger();
        return (e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t);
      }
      function Se(e) {
        if (0 == e) return -1;
        var t = 0;
        return (
          0 == (65535 & e) && ((e >>= 16), (t += 16)),
          0 == (255 & e) && ((e >>= 8), (t += 8)),
          0 == (15 & e) && ((e >>= 4), (t += 4)),
          0 == (3 & e) && ((e >>= 2), (t += 2)),
          0 == (1 & e) && ++t,
          t
        );
      }
      function ke() {
        for (var e = 0; e < this.t; ++e)
          if (0 != this[e]) return e * this.DB + Se(this[e]);
        return this.s < 0 ? this.t * this.DB : -1;
      }
      function Te(e) {
        var t = 0;
        while (0 != e) ((e &= e - 1), ++t);
        return t;
      }
      function Ee() {
        for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r)
          e += Te(this[r] ^ t);
        return e;
      }
      function Ie(e) {
        var t = Math.floor(e / this.DB);
        return t >= this.t
          ? 0 != this.s
          : 0 != (this[t] & (1 << (e % this.DB)));
      }
      function Pe(e, t) {
        var r = BigInteger.ONE.shiftLeft(e);
        return (this.bitwiseTo(r, t, r), r);
      }
      function xe(e) {
        return this.changeBit(e, pe);
      }
      function Ae(e) {
        return this.changeBit(e, ye);
      }
      function _e(e) {
        return this.changeBit(e, me);
      }
      function Fe(e, t) {
        var r = this,
          n = 0,
          i = 0,
          o = Math.min(e.t, r.t);
        while (n < o) ((i += r[n] + e[n]), (t[n++] = i & r.DM), (i >>= r.DB));
        if (e.t < r.t) {
          i += e.s;
          while (n < r.t) ((i += r[n]), (t[n++] = i & r.DM), (i >>= r.DB));
          i += r.s;
        } else {
          i += r.s;
          while (n < e.t) ((i += e[n]), (t[n++] = i & r.DM), (i >>= r.DB));
          i += e.s;
        }
        ((t.s = i < 0 ? -1 : 0),
          i > 0 ? (t[n++] = i) : i < -1 && (t[n++] = r.DV + i),
          (t.t = n),
          t.clamp());
      }
      function Ne(e) {
        var t = new BigInteger();
        return (this.addTo(e, t), t);
      }
      function Ce(e) {
        var t = new BigInteger();
        return (this.subTo(e, t), t);
      }
      function He(e) {
        var t = new BigInteger();
        return (this.multiplyTo(e, t), t);
      }
      function De() {
        var e = new BigInteger();
        return (this.squareTo(e), e);
      }
      function Ke(e) {
        var t = new BigInteger();
        return (this.divRemTo(e, t, null), t);
      }
      function Oe(e) {
        var t = new BigInteger();
        return (this.divRemTo(e, null, t), t);
      }
      function Me(e) {
        var t = new BigInteger(),
          r = new BigInteger();
        return (this.divRemTo(e, t, r), new Array(t, r));
      }
      function Re(e) {
        ((this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
          ++this.t,
          this.clamp());
      }
      function Ue(e, t) {
        if (0 != e) {
          while (this.t <= t) this[this.t++] = 0;
          this[t] += e;
          while (this[t] >= this.DV)
            ((this[t] -= this.DV),
              ++t >= this.t && (this[this.t++] = 0),
              ++this[t]);
        }
      }
      function ze() {}
      function Ve(e) {
        return e;
      }
      function Le(e, t, r) {
        e.multiplyTo(t, r);
      }
      function je(e, t) {
        e.squareTo(t);
      }
      function We(e) {
        return this.exp(e, new ze());
      }
      function qe(e, t, r) {
        var n,
          i = Math.min(this.t + e.t, t);
        ((r.s = 0), (r.t = i));
        while (i > 0) r[--i] = 0;
        for (n = r.t - this.t; i < n; ++i)
          r[i + this.t] = this.am(0, e[i], r, i, 0, this.t);
        for (n = Math.min(e.t, t); i < n; ++i) this.am(0, e[i], r, i, 0, t - i);
        r.clamp();
      }
      function Xe(e, t, r) {
        --t;
        var n = (r.t = this.t + e.t - t);
        r.s = 0;
        while (--n >= 0) r[n] = 0;
        for (n = Math.max(t - this.t, 0); n < e.t; ++n)
          r[this.t + n - t] = this.am(t - n, e[n], r, 0, 0, this.t + n - t);
        (r.clamp(), r.drShiftTo(1, r));
      }
      function Ge(e) {
        ((this.r2 = new BigInteger()),
          (this.q3 = new BigInteger()),
          BigInteger.ONE.dlShiftTo(2 * e.t, this.r2),
          (this.mu = this.r2.divide(e)),
          (this.m = e));
      }
      function Ze(e) {
        if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
        if (e.compareTo(this.m) < 0) return e;
        var t = new BigInteger();
        return (e.copyTo(t), this.reduce(t), t);
      }
      function Je(e) {
        return e;
      }
      function Ye(e) {
        var t = this;
        (e.drShiftTo(t.m.t - 1, t.r2),
          e.t > t.m.t + 1 && ((e.t = t.m.t + 1), e.clamp()),
          t.mu.multiplyUpperTo(t.r2, t.m.t + 1, t.q3),
          t.m.multiplyLowerTo(t.q3, t.m.t + 1, t.r2));
        while (e.compareTo(t.r2) < 0) e.dAddOffset(1, t.m.t + 1);
        e.subTo(t.r2, e);
        while (e.compareTo(t.m) >= 0) e.subTo(t.m, e);
      }
      function Qe(e, t) {
        (e.squareTo(t), this.reduce(t));
      }
      function $e(e, t, r) {
        (e.multiplyTo(t, r), this.reduce(r));
      }
      function et(e, t) {
        var r,
          n,
          i = e.bitLength(),
          o = g(1);
        if (i <= 0) return o;
        ((r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6),
          (n = i < 8 ? new D(t) : t.isEven() ? new Ge(t) : new V(t)));
        var s = new Array(),
          a = 3,
          u = r - 1,
          f = (1 << r) - 1;
        if (((s[1] = n.convert(this)), r > 1)) {
          var h = new BigInteger();
          n.sqrTo(s[1], h);
          while (a <= f)
            ((s[a] = new BigInteger()), n.mulTo(h, s[a - 2], s[a]), (a += 2));
        }
        var c,
          l,
          p = e.t - 1,
          d = !0,
          m = new BigInteger();
        i = k(e[p]) - 1;
        while (p >= 0) {
          (i >= u
            ? (c = (e[p] >> (i - u)) & f)
            : ((c = (e[p] & ((1 << (i + 1)) - 1)) << (u - i)),
              p > 0 && (c |= e[p - 1] >> (this.DB + i - u))),
            (a = r));
          while (0 == (1 & c)) ((c >>= 1), --a);
          if (((i -= a) < 0 && ((i += this.DB), --p), d))
            (s[c].copyTo(o), (d = !1));
          else {
            while (a > 1) (n.sqrTo(o, m), n.sqrTo(m, o), (a -= 2));
            (a > 0 ? n.sqrTo(o, m) : ((l = o), (o = m), (m = l)),
              n.mulTo(m, s[c], o));
          }
          while (p >= 0 && 0 == (e[p] & (1 << i)))
            (n.sqrTo(o, m),
              (l = o),
              (o = m),
              (m = l),
              --i < 0 && ((i = this.DB - 1), --p));
        }
        return n.revert(o);
      }
      function tt(e) {
        var t = this.s < 0 ? this.negate() : this.clone(),
          r = e.s < 0 ? e.negate() : e.clone();
        if (t.compareTo(r) < 0) {
          var n = t;
          ((t = r), (r = n));
        }
        var i = t.getLowestSetBit(),
          o = r.getLowestSetBit();
        if (o < 0) return t;
        (i < o && (o = i), o > 0 && (t.rShiftTo(o, t), r.rShiftTo(o, r)));
        while (t.signum() > 0)
          ((i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t),
            (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
            t.compareTo(r) >= 0
              ? (t.subTo(r, t), t.rShiftTo(1, t))
              : (r.subTo(t, r), r.rShiftTo(1, r)));
        return (o > 0 && r.lShiftTo(o, r), r);
      }
      function rt(e) {
        if (e <= 0) return 0;
        var t = this.DV % e,
          r = this.s < 0 ? e - 1 : 0;
        if (this.t > 0)
          if (0 == t) r = this[0] % e;
          else for (var n = this.t - 1; n >= 0; --n) r = (t * r + this[n]) % e;
        return r;
      }
      function nt(e) {
        var t = e.isEven();
        if (0 === this.signum()) throw new Error("division by zero");
        if ((this.isEven() && t) || 0 == e.signum()) return BigInteger.ZERO;
        var r = e.clone(),
          n = this.clone(),
          i = g(1),
          o = g(0),
          s = g(0),
          a = g(1);
        while (0 != r.signum()) {
          while (r.isEven())
            (r.rShiftTo(1, r),
              t
                ? ((i.isEven() && o.isEven()) ||
                    (i.addTo(this, i), o.subTo(e, o)),
                  i.rShiftTo(1, i))
                : o.isEven() || o.subTo(e, o),
              o.rShiftTo(1, o));
          while (n.isEven())
            (n.rShiftTo(1, n),
              t
                ? ((s.isEven() && a.isEven()) ||
                    (s.addTo(this, s), a.subTo(e, a)),
                  s.rShiftTo(1, s))
                : a.isEven() || a.subTo(e, a),
              a.rShiftTo(1, a));
          r.compareTo(n) >= 0
            ? (r.subTo(n, r), t && i.subTo(s, i), o.subTo(a, o))
            : (n.subTo(r, n), t && s.subTo(i, s), a.subTo(o, a));
        }
        if (0 != n.compareTo(BigInteger.ONE)) return BigInteger.ZERO;
        while (a.compareTo(e) >= 0) a.subTo(e, a);
        while (a.signum() < 0) a.addTo(e, a);
        return a;
      }
      ((D.prototype.convert = K),
        (D.prototype.revert = O),
        (D.prototype.reduce = M),
        (D.prototype.mulTo = R),
        (D.prototype.sqrTo = U),
        (V.prototype.convert = L),
        (V.prototype.revert = j),
        (V.prototype.reduce = W),
        (V.prototype.mulTo = X),
        (V.prototype.sqrTo = q),
        (i.copyTo = d),
        (i.fromInt = m),
        (i.fromString = y),
        (i.clamp = v),
        (i.dlShiftTo = I),
        (i.drShiftTo = P),
        (i.lShiftTo = x),
        (i.rShiftTo = A),
        (i.subTo = _),
        (i.multiplyTo = F),
        (i.squareTo = N),
        (i.divRemTo = C),
        (i.invDigit = z),
        (i.isEven = G),
        (i.exp = Z),
        (i.toString = b),
        (i.negate = w),
        (i.abs = B),
        (i.compareTo = S),
        (i.bitLength = T),
        (i.byteLength = E),
        (i.mod = H),
        (i.modPowInt = J),
        (ze.prototype.convert = Ve),
        (ze.prototype.revert = Ve),
        (ze.prototype.mulTo = Le),
        (ze.prototype.sqrTo = je),
        (Ge.prototype.convert = Ze),
        (Ge.prototype.revert = Je),
        (Ge.prototype.reduce = Ye),
        (Ge.prototype.mulTo = $e),
        (Ge.prototype.sqrTo = Qe));
      var it = [
          2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
          67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
          139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
          223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
          293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
          383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
          463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563,
          569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643,
          647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739,
          743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829,
          839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937,
          941, 947, 953, 967, 971, 977, 983, 991, 997,
        ],
        ot = (1 << 26) / it[it.length - 1];
      function st(e) {
        var t,
          r = this.abs();
        if (1 == r.t && r[0] <= it[it.length - 1]) {
          for (t = 0; t < it.length; ++t) if (r[0] == it[t]) return !0;
          return !1;
        }
        if (r.isEven()) return !1;
        t = 1;
        while (t < it.length) {
          var n = it[t],
            i = t + 1;
          while (i < it.length && n < ot) n *= it[i++];
          n = r.modInt(n);
          while (t < i) if (n % it[t++] == 0) return !1;
        }
        return r.millerRabin(e);
      }
      function at(e) {
        var t = this.subtract(BigInteger.ONE),
          r = t.getLowestSetBit();
        if (r <= 0) return !1;
        var n = t.shiftRight(r);
        ((e = (e + 1) >> 1), e > it.length && (e = it.length));
        for (var i = new BigInteger(null), o = [], s = 0; s < e; ++s) {
          for (;;)
            if (
              ((u = it[Math.floor(Math.random() * it.length)]),
              -1 == o.indexOf(u))
            )
              break;
          (o.push(u), i.fromInt(u));
          var a = i.modPow(n, this);
          if (0 != a.compareTo(BigInteger.ONE) && 0 != a.compareTo(t)) {
            var u = 1;
            while (u++ < r && 0 != a.compareTo(t))
              if (
                ((a = a.modPowInt(2, this)), 0 == a.compareTo(BigInteger.ONE))
              )
                return !1;
            if (0 != a.compareTo(t)) return !1;
          }
        }
        return !0;
      }
      ((i.chunkSize = te),
        (i.toRadix = ne),
        (i.fromRadix = ie),
        (i.fromNumber = oe),
        (i.bitwiseTo = he),
        (i.changeBit = Pe),
        (i.addTo = Fe),
        (i.dMultiply = Re),
        (i.dAddOffset = Ue),
        (i.multiplyLowerTo = qe),
        (i.multiplyUpperTo = Xe),
        (i.modInt = rt),
        (i.millerRabin = at),
        (i.clone = Y),
        (i.intValue = Q),
        (i.byteValue = $),
        (i.shortValue = ee),
        (i.signum = re),
        (i.toByteArray = se),
        (i.equals = ae),
        (i.min = ue),
        (i.max = fe),
        (i.and = le),
        (i.or = de),
        (i.xor = ge),
        (i.andNot = ve),
        (i.not = be),
        (i.shiftLeft = we),
        (i.shiftRight = Be),
        (i.getLowestSetBit = ke),
        (i.bitCount = Ee),
        (i.testBit = Ie),
        (i.setBit = xe),
        (i.clearBit = Ae),
        (i.flipBit = _e),
        (i.add = Ne),
        (i.subtract = Ce),
        (i.multiply = He),
        (i.divide = Ke),
        (i.remainder = Oe),
        (i.divideAndRemainder = Me),
        (i.modPow = et),
        (i.modInverse = nt),
        (i.pow = We),
        (i.gcd = tt),
        (i.isProbablePrime = st),
        (i.square = De),
        (BigInteger.ZERO = g(0)),
        (BigInteger.ONE = g(1)),
        (BigInteger.valueOf = g),
        (e.exports = BigInteger));
    },
    3136: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(2936),
          i = r(229),
          o = function e(t) {
            if (!(this instanceof e)) return new e(t);
            ((this.bufLen = 0), t ? this.set(t) : (this.bufs = []));
          };
        ((o.prototype.set = function (e) {
          return (
            (this.bufs = e.bufs || this.bufs || []),
            (this.bufLen = this.bufs.reduce(function (e, t) {
              return e + t.length;
            }, 0)),
            this
          );
        }),
          (o.prototype.toBuffer = function () {
            return this.concat();
          }),
          (o.prototype.concat = function () {
            return t.concat(this.bufs, this.bufLen);
          }),
          (o.prototype.write = function (e) {
            return (
              i(n.isBuffer(e)),
              this.bufs.push(e),
              (this.bufLen += e.length),
              this
            );
          }),
          (o.prototype.writeReverse = function (e) {
            return (
              i(n.isBuffer(e)),
              this.bufs.push(n.reverse(e)),
              (this.bufLen += e.length),
              this
            );
          }),
          (o.prototype.writeUInt8 = function (e) {
            var r = t.alloc(1);
            return (r.writeUInt8(e, 0), this.write(r), this);
          }),
          (o.prototype.writeUInt16BE = function (e) {
            var r = t.alloc(2);
            return (r.writeUInt16BE(e, 0), this.write(r), this);
          }),
          (o.prototype.writeUInt16LE = function (e) {
            var r = t.alloc(2);
            return (r.writeUInt16LE(e, 0), this.write(r), this);
          }),
          (o.prototype.writeUInt32BE = function (e) {
            var r = t.alloc(4);
            return (r.writeUInt32BE(e, 0), this.write(r), this);
          }),
          (o.prototype.writeInt32LE = function (e) {
            var r = t.alloc(4);
            return (r.writeInt32LE(e, 0), this.write(r), this);
          }),
          (o.prototype.writeUInt32LE = function (e) {
            var r = t.alloc(4);
            return (r.writeUInt32LE(e, 0), this.write(r), this);
          }),
          (o.prototype.writeUInt64BEBN = function (e) {
            var t = e.toBuffer({ size: 8 });
            return (this.write(t), this);
          }),
          (o.prototype.writeUInt64LEBN = function (e) {
            var t = e.toBuffer({ size: 8 });
            return (this.writeReverse(t), this);
          }),
          (o.prototype.writeVarintNum = function (e) {
            var t = o.varintBufNum(e);
            return (this.write(t), this);
          }),
          (o.prototype.writeVarintBN = function (e) {
            var t = o.varintBufBN(e);
            return (this.write(t), this);
          }),
          (o.varintBufNum = function (e) {
            var r = void 0;
            return (
              e < 253
                ? ((r = t.alloc(1)), r.writeUInt8(e, 0))
                : e < 65536
                  ? ((r = t.alloc(3)),
                    r.writeUInt8(253, 0),
                    r.writeUInt16LE(e, 1))
                  : e < 4294967296
                    ? ((r = t.alloc(5)),
                      r.writeUInt8(254, 0),
                      r.writeUInt32LE(e, 1))
                    : ((r = t.alloc(9)),
                      r.writeUInt8(255, 0),
                      r.writeInt32LE(-1 & e, 1),
                      r.writeUInt32LE(Math.floor(e / 4294967296), 5)),
              r
            );
          }),
          (o.varintBufBN = function (e) {
            var r = void 0,
              n = e.toNumber();
            if (n < 253) ((r = t.alloc(1)), r.writeUInt8(n, 0));
            else if (n < 65536)
              ((r = t.alloc(3)), r.writeUInt8(253, 0), r.writeUInt16LE(n, 1));
            else if (n < 4294967296)
              ((r = t.alloc(5)), r.writeUInt8(254, 0), r.writeUInt32LE(n, 1));
            else {
              var i = new o();
              (i.writeUInt8(255), i.writeUInt64LEBN(e));
              r = i.concat();
            }
            return r;
          }),
          (e.exports = o));
      }).call(this, r(2).Buffer);
    },
    3168: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(3046),
          i = r(2852),
          o = r(2897),
          s = r(2936),
          a = r(2990),
          u = function e(t, r) {
            if (!(this instanceof e)) return new e(t, r);
            if (t instanceof n) this.set({ r: t, s: r });
            else if (t) {
              var i = t;
              this.set(i);
            }
          };
        ((u.prototype.set = function (e) {
          return (
            (this.r = e.r || this.r || void 0),
            (this.s = e.s || this.s || void 0),
            (this.i = "undefined" !== typeof e.i ? e.i : this.i),
            (this.compressed =
              "undefined" !== typeof e.compressed
                ? e.compressed
                : this.compressed),
            (this.nhashtype = e.nhashtype || this.nhashtype || void 0),
            this
          );
        }),
          (u.fromCompact = function (e) {
            o.checkArgument(
              s.isBuffer(e),
              "Argument is expected to be a Buffer",
            );
            var t = new u(),
              r = !0,
              i = e.slice(0, 1)[0] - 27 - 4;
            i < 0 && ((r = !1), (i += 4));
            var a = e.slice(1, 33),
              f = e.slice(33, 65);
            return (
              o.checkArgument(
                0 === i || 1 === i || 2 === i || 3 === i,
                new Error("i must be 0, 1, 2, or 3"),
              ),
              o.checkArgument(32 === a.length, new Error("r must be 32 bytes")),
              o.checkArgument(32 === f.length, new Error("s must be 32 bytes")),
              (t.compressed = r),
              (t.i = i),
              (t.r = n.fromBuffer(a)),
              (t.s = n.fromBuffer(f)),
              t
            );
          }),
          (u.fromDER = u.fromBuffer =
            function (e, t) {
              var r = u.parseDER(e, t),
                n = new u();
              return ((n.r = r.r), (n.s = r.s), n);
            }),
          (u.fromTxFormat = function (e) {
            var t = e.readUInt8(e.length - 1),
              r = e.slice(0, e.length - 1),
              n = new u.fromDER(r, !1);
            return ((n.nhashtype = t), n);
          }),
          (u.fromString = function (e) {
            var r = t.from(e, "hex");
            return u.fromDER(r);
          }),
          (u.parseDER = function (e, t) {
            (o.checkArgument(
              s.isBuffer(e),
              new Error("DER formatted signature should be a buffer"),
            ),
              i.isUndefined(t) && (t = !0));
            var r = e[0];
            o.checkArgument(48 === r, new Error("Header byte should be 0x30"));
            var a = e[1],
              u = e.slice(2).length;
            (o.checkArgument(
              !t || a === u,
              new Error("Length byte should length of what follows"),
            ),
              (a = a < u ? a : u));
            var f = e[2];
            o.checkArgument(
              2 === f,
              new Error("Integer byte for r should be 0x02"),
            );
            var h = e[3],
              c = e.slice(4, 4 + h),
              l = n.fromBuffer(c),
              p = 0 === e[4];
            o.checkArgument(h === c.length, new Error("Length of r incorrect"));
            var d = e[4 + h + 0];
            o.checkArgument(
              2 === d,
              new Error("Integer byte for s should be 0x02"),
            );
            var m = e[4 + h + 1],
              g = e.slice(4 + h + 2, 4 + h + 2 + m),
              y = n.fromBuffer(g),
              v = 0 === e[4 + h + 2 + 2];
            o.checkArgument(m === g.length, new Error("Length of s incorrect"));
            var b = 4 + h + 2 + m;
            o.checkArgument(
              a === b - 2,
              new Error("Length of signature incorrect"),
            );
            var w = {
              header: r,
              length: a,
              rheader: f,
              rlength: h,
              rneg: p,
              rbuf: c,
              r: l,
              sheader: d,
              slength: m,
              sneg: v,
              sbuf: g,
              s: y,
            };
            return w;
          }),
          (u.prototype.toCompact = function (e, r) {
            if (
              ((e = "number" === typeof e ? e : this.i),
              (r = "boolean" === typeof r ? r : this.compressed),
              0 !== e && 1 !== e && 2 !== e && 3 !== e)
            )
              throw new Error("i must be equal to 0, 1, 2, or 3");
            var n = e + 27 + 4;
            !1 === r && (n -= 4);
            var i = t.from([n]),
              o = this.r.toBuffer({ size: 32 }),
              s = this.s.toBuffer({ size: 32 });
            return t.concat([i, o, s]);
          }),
          (u.prototype.toBuffer = u.prototype.toDER =
            function () {
              var e = this.r.toBuffer(),
                r = this.s.toBuffer(),
                n = !!(128 & e[0]),
                i = !!(128 & r[0]),
                o = n ? t.concat([t.from([0]), e]) : e,
                s = i ? t.concat([t.from([0]), r]) : r,
                a = o.length,
                u = s.length,
                f = 2 + a + 2 + u,
                h = 2,
                c = 2,
                l = 48,
                p = t.concat([t.from([l, f, h, a]), o, t.from([c, u]), s]);
              return p;
            }),
          (u.prototype.toString = function () {
            var e = this.toDER();
            return e.toString("hex");
          }),
          (u.isTxDER = function (e) {
            if (e.length < 9) return !1;
            if (e.length > 73) return !1;
            if (48 !== e[0]) return !1;
            if (e[1] !== e.length - 3) return !1;
            var t = e[3];
            if (5 + t >= e.length) return !1;
            var r = e[5 + t];
            if (t + r + 7 !== e.length) return !1;
            var n = e.slice(4);
            if (2 !== e[2]) return !1;
            if (0 === t) return !1;
            if (128 & n[0]) return !1;
            if (t > 1 && 0 === n[0] && !(128 & n[1])) return !1;
            var i = e.slice(6 + t);
            return (
              2 === e[6 + t - 2] &&
              0 !== r &&
              !(128 & i[0]) &&
              !(r > 1 && 0 === i[0] && !(128 & i[1]))
            );
          }),
          (u.prototype.hasLowS = function () {
            return (
              !this.s.lt(new n(1)) &&
              !this.s.gt(
                new n(
                  "7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0",
                  "hex",
                ),
              )
            );
          }),
          (u.prototype.hasDefinedHashtype = function () {
            if (!a.isNaturalNumber(this.nhashtype)) return !1;
            var e = this.nhashtype & ~u.SIGHASH_ANYONECANPAY;
            return !(e < u.SIGHASH_ALL || e > u.SIGHASH_SINGLE);
          }),
          (u.prototype.toTxFormat = function () {
            var e = this.toDER(),
              r = t.alloc(1);
            return (r.writeUInt8(this.nhashtype, 0), t.concat([e, r]));
          }),
          (u.SIGHASH_ALL = 1),
          (u.SIGHASH_NONE = 2),
          (u.SIGHASH_SINGLE = 3),
          (u.SIGHASH_ANYONECANPAY = 128),
          (e.exports = u));
      }).call(this, r(2).Buffer);
    },
    3209: function (e, t, r) {
      "use strict";
      var n = r(2852);
      function i(e, t) {
        return e.replace("{0}", t[0]).replace("{1}", t[1]).replace("{2}", t[2]);
      }
      var o = function (e, t) {
          var r = function () {
            if (n.isString(t.message)) this.message = i(t.message, arguments);
            else {
              if (!n.isFunction(t.message))
                throw new Error("Invalid error definition for " + t.name);
              this.message = t.message.apply(null, arguments);
            }
            this.stack = this.message + "\n" + new Error().stack;
          };
          return (
            (r.prototype = Object.create(e.prototype)),
            (r.prototype.name = e.prototype.name + t.name),
            (e[t.name] = r),
            t.errors && s(r, t.errors),
            r
          );
        },
        s = function (e, t) {
          n.each(t, function (t) {
            o(e, t);
          });
        },
        a = function (e, t) {
          return (s(e, t), e);
        },
        u = {
          Error: function () {
            ((this.message = "Internal error"),
              (this.stack = this.message + "\n" + new Error().stack));
          },
        };
      ((u.Error.prototype = Object.create(Error.prototype)),
        (u.Error.prototype.name = "bitcore.Error"));
      var f = r(7072);
      (a(u.Error, f),
        (e.exports = u.Error),
        (e.exports.extend = function (e) {
          return o(u.Error, e);
        }));
    },
    3267: function (e) {
      e.exports = JSON.parse(
        '{"name":"bigi","version":"1.4.2","description":"Big integers.","keywords":["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],"devDependencies":{"coveralls":"^2.11.2","istanbul":"^0.3.5","jshint":"^2.5.1","mocha":"^2.1.0","mochify":"^2.1.0"},"repository":{"url":"https://github.com/cryptocoinjs/bigi","type":"git"},"main":"./lib/index.js","scripts":{"browser-test":"./node_modules/.bin/mochify --wd -R spec","test":"./node_modules/.bin/_mocha -- test/*.js","jshint":"./node_modules/.bin/jshint --config jshint.json lib/*.js ; true","unit":"./node_modules/.bin/mocha","coverage":"./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js","coveralls":"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"},"dependencies":{},"testling":{"files":"test/*.js","harness":"mocha","browsers":["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]}}',
      );
    },
    3268: function (e, t, r) {
      (function (e) {
        var t = r(229),
          BigInteger = r(3048);
        ((BigInteger.fromByteArrayUnsigned = function (e) {
          return 128 & e[0] ? new BigInteger([0].concat(e)) : new BigInteger(e);
        }),
          (BigInteger.prototype.toByteArrayUnsigned = function () {
            var e = this.toByteArray();
            return 0 === e[0] ? e.slice(1) : e;
          }),
          (BigInteger.fromDERInteger = function (e) {
            return new BigInteger(e);
          }),
          (BigInteger.prototype.toDERInteger =
            BigInteger.prototype.toByteArray),
          (BigInteger.fromBuffer = function (e) {
            if (128 & e[0]) {
              var t = Array.prototype.slice.call(e);
              return new BigInteger([0].concat(t));
            }
            return new BigInteger(e);
          }),
          (BigInteger.fromHex = function (e) {
            return "" === e
              ? BigInteger.ZERO
              : (t.equal(e, e.match(/^[A-Fa-f0-9]+/), "Invalid hex string"),
                t.equal(e.length % 2, 0, "Incomplete hex"),
                new BigInteger(e, 16));
          }),
          (BigInteger.prototype.toBuffer = function (t) {
            var r = this.toByteArrayUnsigned(),
              n = [],
              i = t - r.length;
            while (n.length < i) n.push(0);
            return new e(n.concat(r));
          }),
          (BigInteger.prototype.toHex = function (e) {
            return this.toBuffer(e).toString("hex");
          }));
      }).call(this, r(2).Buffer);
    },
    3367: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(2852),
          i = r(2897),
          o = r(3209),
          s = r(4098),
          a = r(7073),
          u = r(3637),
          f = r(3047),
          h = r(2990),
          c = r(3366);
        function l(e, t, r, o) {
          if (!(this instanceof l)) return new l(e, t, r);
          if (n.isArray(e) && n.isNumber(t))
            return l.createMultisig(e, t, r, !1, o);
          if (e instanceof l) return e;
          if (
            (i.checkArgument(
              e,
              "First argument is required, please include address data.",
              "guide/address.html",
            ),
            t && !u.get(t))
          )
            throw new TypeError(
              'Second argument must be "livenet" or "testnet".',
            );
          if (
            r &&
            r !== l.PayToPublicKeyHash &&
            r !== l.PayToScriptHash &&
            r !== l.PayToWitnessPublicKeyHash &&
            r !== l.PayToWitnessScriptHash &&
            r !== l.PayToTaproot
          )
            throw new TypeError(
              'Third argument must be "pubkeyhash", "scripthash", "witnesspubkeyhash", "witnessscripthash", or "taproot".',
            );
          var s = this._classifyArguments(e, t, r);
          return (
            (s.network = s.network || u.get(t) || u.defaultNetwork),
            (s.type = s.type || r || l.PayToPublicKeyHash),
            h.defineImmutable(this, {
              hashBuffer: s.hashBuffer,
              network: s.network,
              type: s.type,
            }),
            this
          );
        }
        ((l.prototype._classifyArguments = function (e, r, i) {
          if (
            !(e instanceof t || e instanceof Uint8Array) ||
            (20 !== e.length && 32 !== e.length)
          ) {
            if ((e instanceof t || e instanceof Uint8Array) && e.length >= 21)
              return l._transformBuffer(e, r, i);
            if (e instanceof c) return l._transformPublicKey(e, r, i);
            if (e instanceof p) return l._transformScript(e, r);
            if ("string" === typeof e) return l._transformString(e, r, i);
            if (n.isObject(e)) return l._transformObject(e);
            throw new TypeError(
              "First argument is an unrecognized data format.",
            );
          }
          return l._transformHash(e, r, i);
        }),
          (l.PayToPublicKeyHash = "pubkeyhash"),
          (l.PayToScriptHash = "scripthash"),
          (l.PayToWitnessPublicKeyHash = "witnesspubkeyhash"),
          (l.PayToWitnessScriptHash = "witnessscripthash"),
          (l.PayToTaproot = "taproot"),
          (l._transformHash = function (e, r, n) {
            var i = {};
            if (!(e instanceof t) && !(e instanceof Uint8Array))
              throw new TypeError("Address supplied is not a buffer.");
            if (20 !== e.length && 32 !== e.length)
              throw new TypeError(
                "Address hashbuffers must be either 20 or 32 bytes.",
              );
            return (
              (i.hashBuffer = e),
              (i.network = u.get(r) || u.defaultNetwork),
              (i.type = n),
              i
            );
          }),
          (l._transformObject = function (e) {
            return (
              i.checkArgument(
                e.hash || e.hashBuffer,
                "Must provide a `hash` or `hashBuffer` property",
              ),
              i.checkArgument(e.type, "Must provide a `type` property"),
              {
                hashBuffer: e.hash ? t.from(e.hash, "hex") : e.hashBuffer,
                network: u.get(e.network) || u.defaultNetwork,
                type: e.type,
              }
            );
          }),
          (l._classifyFromVersion = function (e) {
            var t = {};
            if (e.length > 21) {
              var r = a.decode(e.toString("utf8"));
              if (0 !== r.version && 1 !== r.version)
                throw new TypeError(
                  "Only witness v0 and v1 addresses are supported.",
                );
              if (0 === r.version)
                if (20 === r.data.length) t.type = l.PayToWitnessPublicKeyHash;
                else {
                  if (32 !== r.data.length)
                    throw new TypeError(
                      "Witness data must be either 20 or 32 bytes.",
                    );
                  t.type = l.PayToWitnessScriptHash;
                }
              else if (1 === r.version) {
                if (32 !== r.data.length)
                  throw new TypeError("Witness data must be 32 bytes for v1");
                t.type = l.PayToTaproot;
              }
              t.network = u.get(r.prefix, "bech32prefix");
            } else {
              var n = u.get(e[0], "pubkeyhash"),
                i = u.get(e[0], "scripthash");
              n
                ? ((t.network = n), (t.type = l.PayToPublicKeyHash))
                : i && ((t.network = i), (t.type = l.PayToScriptHash));
            }
            return t;
          }),
          (l._transformBuffer = function (e, r, n) {
            var i = {};
            if (!(e instanceof t) && !(e instanceof Uint8Array))
              throw new TypeError("Address supplied is not a buffer.");
            if (e.length < 21)
              throw new TypeError("Address buffer is incorrect length.");
            var o = u.get(r),
              s = l._classifyFromVersion(e);
            if (r && !o) throw new TypeError("Unknown network");
            if (!s.network || (o && o.xpubkey !== s.network.xpubkey))
              throw new TypeError("Address has mismatched network type.");
            if (!s.type || (n && n !== s.type))
              throw new TypeError("Address has mismatched type.");
            return (
              e.length > 21
                ? (i.hashBuffer = a.decode(e.toString("utf8")).data)
                : (i.hashBuffer = e.slice(1)),
              (i.network = s.network),
              (i.type = s.type),
              i
            );
          }),
          (l._transformPublicKey = function (e, t, r) {
            var n = {};
            if (!(e instanceof c))
              throw new TypeError("Address must be an instance of PublicKey.");
            if (
              r &&
              r !== l.PayToScriptHash &&
              r !== l.PayToWitnessPublicKeyHash &&
              r !== l.PayToPublicKeyHash &&
              r !== l.PayToTaproot
            )
              throw new TypeError(
                "Type must be either pubkeyhash, witnesspubkeyhash, scripthash, or taproot to transform public key.",
              );
            if (
              !e.compressed &&
              (r === l.PayToScriptHash || r === l.PayToWitnessPublicKeyHash)
            )
              throw new TypeError(
                "Witness addresses must use compressed public keys.",
              );
            return (
              r === l.PayToScriptHash
                ? (n.hashBuffer = f.sha256ripemd160(
                    p.buildWitnessV0Out(e).toBuffer(),
                  ))
                : r === l.PayToTaproot
                  ? (n.hashBuffer = f.sha256ripemd160(
                      p.buildWitnessV1Out(e).toBuffer(),
                    ))
                  : (n.hashBuffer = f.sha256ripemd160(e.toBuffer())),
              (n.type = r || l.PayToPublicKeyHash),
              n
            );
          }),
          (l._transformScript = function (e, t) {
            i.checkArgument(e instanceof p, "script must be a Script instance");
            var r = e.getAddressInfo(t);
            if (!r) throw new o.Script.CantDeriveAddress(e);
            return r;
          }),
          (l.createMultisig = function (e, t, r, i, o) {
            if (
              ((r = r || e[0].network || u.defaultNetwork),
              o && o !== l.PayToScriptHash && o !== l.PayToWitnessScriptHash)
            )
              throw new TypeError(
                "Type must be either scripthash or witnessscripthash to create multisig.",
              );
            if (i || o === l.PayToWitnessScriptHash) {
              e = n.map(e, c);
              for (var s = 0; s < e.length; s++)
                if (!e[s].compressed)
                  throw new TypeError(
                    "Witness addresses must use compressed public keys.",
                  );
            }
            var a = p.buildMultisigOut(e, t);
            return i
              ? l.payingTo(p.buildWitnessMultisigOutFromScript(a), r)
              : l.payingTo(a, r, o);
          }),
          (l._transformString = function (e, r, n) {
            if ("string" !== typeof e)
              throw new TypeError("data parameter supplied is not a string.");
            if (e.length > 100)
              throw new TypeError("address string is too long");
            if (r && !u.get(r)) throw new TypeError("Unknown network");
            e = e.trim();
            try {
              var i = l._transformBuffer(t.from(e, "utf8"), r, n);
              return i;
            } catch (a) {
              if (
                n === l.PayToWitnessPublicKeyHash ||
                n === l.PayToWitnessScriptHash ||
                n === l.PayToTaproot
              )
                throw a;
            }
            var o = s.decode(e);
            i = l._transformBuffer(o, r, n);
            return i;
          }),
          (l.fromPublicKey = function (e, t, r) {
            var n = l._transformPublicKey(e, t, r);
            return (
              (t = t || u.defaultNetwork),
              new l(n.hashBuffer, t, n.type)
            );
          }),
          (l.fromPublicKeyHash = function (e, t) {
            var r = l._transformHash(e);
            return new l(r.hashBuffer, t, l.PayToPublicKeyHash);
          }),
          (l.fromScriptHash = function (e, t, r) {
            i.checkArgument(e, "hash parameter is required");
            var n = l._transformHash(e);
            if (r === l.PayToWitnessScriptHash && 32 !== e.length)
              throw new TypeError(
                "Address hashbuffer must be exactly 32 bytes for v0 witness script hash.",
              );
            r = r || l.PayToScriptHash;
            return new l(n.hashBuffer, t, r);
          }),
          (l.payingTo = function (e, t, r) {
            var n;
            (i.checkArgument(e, "script is required"),
              i.checkArgument(
                e instanceof p,
                "script must be instance of Script",
              ),
              (n =
                r === l.PayToWitnessScriptHash
                  ? f.sha256(e.toBuffer())
                  : f.sha256ripemd160(e.toBuffer())));
            r = r || l.PayToScriptHash;
            return l.fromScriptHash(n, t, r);
          }),
          (l.fromScript = function (e, t) {
            i.checkArgument(e instanceof p, "script must be a Script instance");
            var r = l._transformScript(e, t);
            return new l(r.hashBuffer, t, r.type);
          }),
          (l.fromBuffer = function (e, t, r) {
            var n = l._transformBuffer(e, t, r);
            return new l(n.hashBuffer, n.network, n.type);
          }),
          (l.fromString = function (e, t, r) {
            var n = l._transformString(e, t, r);
            return new l(n.hashBuffer, n.network, n.type);
          }),
          (l.fromObject = function (e) {
            i.checkState(
              h.isHexa(e.hash),
              'Unexpected hash property, "' + e.hash + '", expected to be hex.',
            );
            var r = t.from(e.hash, "hex");
            return new l(r, e.network, e.type);
          }),
          (l.getValidationError = function (e, t, r) {
            var n;
            try {
              new l(e, t, r);
            } catch (i) {
              n = i;
            }
            return n;
          }),
          (l.isValid = function (e, t, r) {
            return !l.getValidationError(e, t, r);
          }),
          (l.prototype.isPayToPublicKeyHash = function () {
            return this.type === l.PayToPublicKeyHash;
          }),
          (l.prototype.isPayToScriptHash = function () {
            return this.type === l.PayToScriptHash;
          }),
          (l.prototype.isPayToWitnessPublicKeyHash = function () {
            return this.type === l.PayToWitnessPublicKeyHash;
          }),
          (l.prototype.isPayToWitnessScriptHash = function () {
            return this.type === l.PayToWitnessScriptHash;
          }),
          (l.prototype.isPayToTaproot = function () {
            return this.type === l.PayToTaproot;
          }),
          (l.prototype.toBuffer = function () {
            if (
              this.isPayToWitnessPublicKeyHash() ||
              this.isPayToWitnessScriptHash()
            )
              return t.from(this.toString(), "utf8");
            var e = t.from([this.network[this.type]]);
            return t.concat([e, this.hashBuffer]);
          }),
          (l.prototype.toObject = l.prototype.toJSON =
            function () {
              return {
                hash: this.hashBuffer.toString("hex"),
                type: this.type,
                network: this.network.toString(),
              };
            }),
          (l.prototype.toString = function () {
            if (
              this.isPayToWitnessPublicKeyHash() ||
              this.isPayToWitnessScriptHash() ||
              this.isPayToTaproot()
            ) {
              let e = this.network.bech32prefix,
                t = 0,
                r = a.encodings.BECH32;
              return (
                this.isPayToTaproot() && ((t = 1), (r = a.encodings.BECH32M)),
                a.encode(e, t, this.hashBuffer, r)
              );
            }
            return s.encode(this.toBuffer());
          }),
          (l.prototype.inspect = function () {
            return (
              "<Address: " +
              this.toString() +
              ", type: " +
              this.type +
              ", network: " +
              this.network +
              ">"
            );
          }),
          (e.exports = l));
        var p = r(3169);
      }).call(this, r(2).Buffer);
    },
    3410: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(2852),
          i = r(2897),
          o = r(2936),
          s = r(3046),
          a = function e(r) {
            if (!(this instanceof e)) return new e(r);
            if (!n.isUndefined(r))
              if (t.isBuffer(r)) this.set({ buf: r });
              else if (n.isString(r)) this.set({ buf: t.from(r, "hex") });
              else {
                if (!n.isObject(r))
                  throw new TypeError("Unrecognized argument for BufferReader");
                var i = r;
                this.set(i);
              }
          };
        ((a.prototype.set = function (e) {
          return (
            (this.buf = e.buf || this.buf || void 0),
            (this.pos = e.pos || this.pos || 0),
            this
          );
        }),
          (a.prototype.eof = function () {
            return !this.buf || this.pos >= this.buf.length;
          }),
          (a.prototype.finished = a.prototype.eof),
          (a.prototype.read = function (e) {
            i.checkArgument(!n.isUndefined(e), "Must specify a length");
            var t = this.buf.slice(this.pos, this.pos + e);
            return ((this.pos = this.pos + e), t);
          }),
          (a.prototype.readAll = function () {
            var e = this.buf.slice(this.pos, this.buf.length);
            return ((this.pos = this.buf.length), e);
          }),
          (a.prototype.readUInt8 = function () {
            var e = this.buf.readUInt8(this.pos);
            return ((this.pos = this.pos + 1), e);
          }),
          (a.prototype.readUInt16BE = function () {
            var e = this.buf.readUInt16BE(this.pos);
            return ((this.pos = this.pos + 2), e);
          }),
          (a.prototype.readUInt16LE = function () {
            var e = this.buf.readUInt16LE(this.pos);
            return ((this.pos = this.pos + 2), e);
          }),
          (a.prototype.readUInt32BE = function () {
            var e = this.buf.readUInt32BE(this.pos);
            return ((this.pos = this.pos + 4), e);
          }),
          (a.prototype.readUInt32LE = function () {
            var e = this.buf.readUInt32LE(this.pos);
            return ((this.pos = this.pos + 4), e);
          }),
          (a.prototype.readInt32LE = function () {
            var e = this.buf.readInt32LE(this.pos);
            return ((this.pos = this.pos + 4), e);
          }),
          (a.prototype.readUInt64BEBN = function () {
            var e = this.buf.slice(this.pos, this.pos + 8),
              t = s.fromBuffer(e);
            return ((this.pos = this.pos + 8), t);
          }),
          (a.prototype.readUInt64LEBN = function () {
            var e,
              t = this.buf.readUInt32LE(this.pos),
              r = this.buf.readUInt32LE(this.pos + 4),
              n = 4294967296 * r + t;
            if (n <= 9007199254740991) e = new s(n);
            else {
              var i = Array.prototype.slice.call(
                this.buf,
                this.pos,
                this.pos + 8,
              );
              e = new s(i, 10, "le");
            }
            return ((this.pos = this.pos + 8), e);
          }),
          (a.prototype.readVarintNum = function () {
            var e = this.readUInt8();
            switch (e) {
              case 253:
                return this.readUInt16LE();
              case 254:
                return this.readUInt32LE();
              case 255:
                var t = this.readUInt64LEBN(),
                  r = t.toNumber();
                if (r <= Math.pow(2, 53)) return r;
                throw new Error(
                  "number too large to retain precision - use readVarintBN",
                );
              default:
                return e;
            }
          }),
          (a.prototype.readVarLengthBuffer = function () {
            var e = this.readVarintNum(),
              t = this.read(e);
            return (
              i.checkState(
                t.length === e,
                "Invalid length while reading varlength buffer. Expected to read: " +
                  e +
                  " and read " +
                  t.length,
              ),
              t
            );
          }),
          (a.prototype.readVarintBuf = function () {
            var e = this.buf.readUInt8(this.pos);
            switch (e) {
              case 253:
                return this.read(3);
              case 254:
                return this.read(5);
              case 255:
                return this.read(9);
              default:
                return this.read(1);
            }
          }),
          (a.prototype.readVarintBN = function () {
            var e = this.readUInt8();
            switch (e) {
              case 253:
                return new s(this.readUInt16LE());
              case 254:
                return new s(this.readUInt32LE());
              case 255:
                return this.readUInt64LEBN();
              default:
                return new s(e);
            }
          }),
          (a.prototype.reverse = function () {
            for (var e = t.alloc(this.buf.length), r = 0; r < e.length; r++)
              e[r] = this.buf[this.buf.length - 1 - r];
            return ((this.buf = e), this);
          }),
          (a.prototype.readReverse = function (e) {
            n.isUndefined(e) && (e = this.buf.length);
            var t = this.buf.slice(this.pos, this.pos + e);
            return ((this.pos = this.pos + e), o.reverse(t));
          }),
          (e.exports = a));
      }).call(this, r(2).Buffer);
    },
    3636: function (e, t, r) {
      "use strict";
      (function (t, n) {
        var i = e.exports;
        ((i.version = "v" + r(7071).version),
          (i.versionGuard = function (e) {
            if (void 0 !== e) {
              var t =
                "More than one instance of bitcore-lib found. Please make sure to require bitcore-lib and check that submodules do not also include their own bitcore-lib dependency.";
              throw new Error(t);
            }
          }),
          i.versionGuard(t._bitcore),
          (t._bitcore = i.version),
          (i.crypto = {}),
          (i.crypto.BN = r(3046)),
          (i.crypto.ECDSA = r(4611)),
          (i.crypto.Hash = r(3047)),
          (i.crypto.Random = r(4618)),
          (i.crypto.Point = r(3873)),
          (i.crypto.Signature = r(3168)),
          (i.encoding = {}),
          (i.encoding.Base58 = r(4612)),
          (i.encoding.Base58Check = r(4098)),
          (i.encoding.BufferReader = r(3410)),
          (i.encoding.BufferWriter = r(3136)),
          (i.encoding.Varint = r(7084)),
          (i.util = {}),
          (i.util.buffer = r(2936)),
          (i.util.js = r(2990)),
          (i.util.preconditions = r(2897)),
          (i.errors = r(3209)),
          (i.Address = r(3367)),
          (i.Block = r(7085)),
          (i.MerkleBlock = r(5859)),
          (i.BlockHeader = r(4619)),
          (i.HDPrivateKey = r(5860)),
          (i.HDPublicKey = r(5861)),
          (i.Message = r(7087)),
          (i.Networks = r(3637)),
          (i.Opcode = r(4908)),
          (i.PrivateKey = r(4097)),
          (i.PublicKey = r(3366)),
          (i.Script = r(3169)),
          (i.Transaction = r(4613)),
          (i.URI = r(7088)),
          (i.Unit = r(4911)),
          (i.deps = {}),
          (i.deps.bnjs = r(49)),
          (i.deps.bs58 = r(234)),
          (i.deps.Buffer = n),
          (i.deps.elliptic = r(795)),
          (i.deps._ = r(2852)),
          (i.Transaction.sighash = r(3526)));
      }).call(this, r(13), r(2).Buffer);
    },
    3637: function (e, t, r) {
      "use strict";
      var n = r(2852),
        i = r(2936),
        o = r(2990),
        s = [],
        a = {};
      function u() {}
      function f(e, t) {
        if (~s.indexOf(e)) return e;
        if (!t) return a[e] && a[e].length >= 1 ? a[e][0] : a[e];
        n.isArray(t) || (t = [t]);
        var r = function (t) {
          return s[i][t] === e;
        };
        for (var i in s) if (n.some(t, r)) return s[i];
      }
      function h(e) {
        var t = new u();
        return (
          o.defineImmutable(t, {
            name: e.name,
            alias: e.alias,
            pubkeyhash: e.pubkeyhash,
            privatekey: e.privatekey,
            scripthash: e.scripthash,
            bech32prefix: e.bech32prefix,
            xpubkey: e.xpubkey,
            xprivkey: e.xprivkey,
          }),
          e.networkMagic &&
            o.defineImmutable(t, {
              networkMagic: i.integerAsBuffer(e.networkMagic),
            }),
          e.port && o.defineImmutable(t, { port: e.port }),
          e.dnsSeeds && o.defineImmutable(t, { dnsSeeds: e.dnsSeeds }),
          n.each(t, function (e) {
            n.isUndefined(e) ||
              n.isObject(e) ||
              (a[e] || (a[e] = []), a[e].push(t));
          }),
          s.push(t),
          t
        );
      }
      function c(e) {
        "object" !== typeof e && (e = f(e));
        for (var t = 0; t < s.length; t++) s[t] === e && s.splice(t, 1);
        for (var r in a)
          if (a[r].length) {
            const t = a[r].indexOf(e);
            (t >= 0 && a[r].splice(t, 1), 0 === a[r].length && delete a[r]);
          } else a[r] === e && delete a[r];
      }
      ((u.prototype.toString = function () {
        return this.name;
      }),
        h({
          name: "livenet",
          alias: "mainnet",
          pubkeyhash: 0,
          privatekey: 128,
          scripthash: 5,
          bech32prefix: "bc",
          xpubkey: 76067358,
          xprivkey: 76066276,
          networkMagic: 4190024921,
          port: 8333,
          dnsSeeds: [
            "seed.bitcoin.sipa.be",
            "dnsseed.bluematt.me",
            "dnsseed.bitcoin.dashjr.org",
            "seed.bitcoinstats.com",
            "seed.bitnodes.io",
            "bitseed.xf2.org",
          ],
        }));
      var l = f("livenet");
      h({
        name: "testnet",
        alias: "test",
        pubkeyhash: 111,
        privatekey: 239,
        scripthash: 196,
        bech32prefix: "tb",
        xpubkey: 70617039,
        xprivkey: 70615956,
        networkMagic: 185665799,
        port: 18333,
        dnsSeeds: [
          "testnet-seed.bitcoin.petertodd.org",
          "testnet-seed.bluematt.me",
          "testnet-seed.alexykot.me",
          "testnet-seed.bitcoin.schildbach.de",
        ],
      });
      var p = f("testnet");
      h({
        name: "regtest",
        alias: "dev",
        pubkeyhash: 111,
        privatekey: 239,
        scripthash: 196,
        bech32prefix: "bcrt",
        xpubkey: 70617039,
        xprivkey: 70615956,
        networkMagic: 4206867930,
        port: 18444,
        dnsSeeds: [],
      });
      var d = f("regtest");
      function m() {
        p.regtestEnabled = !0;
      }
      function g() {
        p.regtestEnabled = !1;
      }
      e.exports = {
        add: h,
        remove: c,
        defaultNetwork: l,
        livenet: l,
        mainnet: l,
        testnet: p,
        regtest: d,
        get: f,
        enableRegtest: m,
        disableRegtest: g,
      };
    },
    3873: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(3046),
          i = r(2936),
          o = r(795).ec,
          s = new o("secp256k1"),
          a = s.curve.point.bind(s.curve),
          u = s.curve.pointFromX.bind(s.curve),
          Point = function (e, t, r) {
            try {
              var n = a(e, t, r);
            } catch (i) {
              throw new Error("Invalid Point");
            }
            return (n.validate(), n);
          };
        ((Point.prototype = Object.getPrototypeOf(s.curve.point())),
          (Point.fromX = function (e, t) {
            try {
              var r = u(t, e);
            } catch (n) {
              throw new Error("Invalid X");
            }
            return (r.validate(), r);
          }),
          (Point.getG = function () {
            return s.curve.g;
          }),
          (Point.getN = function () {
            return new n(s.curve.n.toArray());
          }),
          (Point.prototype._getX = Point.prototype.getX),
          (Point.prototype.getX = function () {
            return new n(this._getX().toArray());
          }),
          (Point.prototype._getY = Point.prototype.getY),
          (Point.prototype.getY = function () {
            return new n(this._getY().toArray());
          }),
          (Point.prototype.validate = function () {
            if (this.isInfinity())
              throw new Error("Point cannot be equal to Infinity");
            var e;
            try {
              e = u(this.getX(), this.getY().isOdd());
            } catch (t) {
              throw new Error("Point does not lie on the curve");
            }
            if (0 !== e.y.cmp(this.y))
              throw new Error("Invalid y value for curve.");
            if (!this.mul(Point.getN()).isInfinity())
              throw new Error("Point times N must be infinity");
            return this;
          }),
          (Point.pointToCompressed = function (e) {
            var r,
              n = e.getX().toBuffer({ size: 32 }),
              o = e.getY().toBuffer({ size: 32 }),
              s = o[o.length - 1] % 2;
            return ((r = s ? t.from([3]) : t.from([2])), i.concat([r, n]));
          }),
          (e.exports = Point));
      }).call(this, r(2).Buffer);
    },
    4098: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(2852),
          i = r(4612),
          o = (r(2), r(3047).sha256sha256),
          s = function e(r) {
            if (!(this instanceof e)) return new e(r);
            if (t.isBuffer(r)) {
              var n = r;
              this.fromBuffer(n);
            } else if ("string" === typeof r) {
              var i = r;
              this.fromString(i);
            } else r && this.set(r);
          };
        ((s.prototype.set = function (e) {
          return ((this.buf = e.buf || this.buf || void 0), this);
        }),
          (s.validChecksum = function (e, r) {
            return (
              n.isString(e) && (e = t.from(i.decode(e))),
              n.isString(r) && (r = t.from(i.decode(r))),
              r || ((r = e.slice(-4)), (e = e.slice(0, -4))),
              s.checksum(e).toString("hex") === r.toString("hex")
            );
          }),
          (s.decode = function (e) {
            if ("string" !== typeof e)
              throw new Error("Input must be a string");
            var r = t.from(i.decode(e));
            if (r.length < 4) throw new Error("Input string too short");
            var n = r.slice(0, -4),
              s = r.slice(-4),
              a = o(n),
              u = a.slice(0, 4);
            if (s.toString("hex") !== u.toString("hex"))
              throw new Error("Checksum mismatch");
            return n;
          }),
          (s.checksum = function (e) {
            return o(e).slice(0, 4);
          }),
          (s.encode = function (e) {
            if (!t.isBuffer(e)) throw new Error("Input must be a buffer");
            var r = t.alloc(e.length + 4),
              n = s.checksum(e);
            return (e.copy(r), n.copy(r, e.length), i.encode(r));
          }),
          (s.prototype.fromBuffer = function (e) {
            return ((this.buf = e), this);
          }),
          (s.prototype.fromString = function (e) {
            var t = s.decode(e);
            return ((this.buf = t), this);
          }),
          (s.prototype.toBuffer = function () {
            return this.buf;
          }),
          (s.prototype.toString = function () {
            return s.encode(this.buf);
          }),
          (e.exports = s));
      }).call(this, r(2).Buffer);
    },
    4099: function (e, t, r) {
      const BigInteger = r(2802),
        n = r(46).Buffer,
        i = r(4616);
      function o(e) {
        return BigInteger.fromBuffer(e);
      }
      function s(e) {
        return e.toBuffer(32);
      }
      function a(e) {
        return n.from(i.create().update(e).array());
      }
      e.exports = { bufferToInt: o, intToBuffer: s, hash: a };
    },
    4611: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(3046),
          Point = r(3873),
          i = r(3168),
          o = r(3366),
          s = r(4618),
          a = r(3047),
          u = r(2936),
          f = r(2852),
          h = r(2897),
          c = function e(t) {
            if (!(this instanceof e)) return new e(t);
            t && this.set(t);
          };
        ((c.prototype.set = function (e) {
          return (
            (this.hashbuf = e.hashbuf || this.hashbuf),
            (this.endian = e.endian || this.endian),
            (this.privkey = e.privkey || this.privkey),
            (this.pubkey =
              e.pubkey ||
              (this.privkey ? this.privkey.publicKey : this.pubkey)),
            (this.sig = e.sig || this.sig),
            (this.k = e.k || this.k),
            (this.verified = e.verified || this.verified),
            this
          );
        }),
          (c.prototype.privkey2pubkey = function () {
            this.pubkey = this.privkey.toPublicKey();
          }),
          (c.prototype.calci = function () {
            for (var e = 0; e < 4; e++) {
              var t;
              this.sig.i = e;
              try {
                t = this.toPublicKey();
              } catch (r) {
                console.error(r);
                continue;
              }
              if (t.point.eq(this.pubkey.point))
                return ((this.sig.compressed = this.pubkey.compressed), this);
            }
            throw (
              (this.sig.i = void 0),
              new Error("Unable to find valid recovery factor")
            );
          }),
          (c.fromString = function (e) {
            var t = JSON.parse(e);
            return new c(t);
          }),
          (c.prototype.randomK = function () {
            var e,
              t = Point.getN();
            do {
              e = n.fromBuffer(s.getRandomBuffer(32));
            } while (!e.lt(t) || !e.gt(n.Zero));
            return ((this.k = e), this);
          }),
          (c.prototype.deterministicK = function (e) {
            f.isUndefined(e) && (e = 0);
            var r = t.alloc(32);
            r.fill(1);
            var i = t.alloc(32);
            i.fill(0);
            var o = this.privkey.bn.toBuffer({ size: 32 }),
              s =
                "little" === this.endian
                  ? u.reverse(this.hashbuf)
                  : this.hashbuf;
            ((i = a.sha256hmac(t.concat([r, t.from([0]), o, s]), i)),
              (r = a.sha256hmac(r, i)),
              (i = a.sha256hmac(t.concat([r, t.from([1]), o, s]), i)),
              (r = a.sha256hmac(r, i)),
              (r = a.sha256hmac(r, i)));
            for (
              var h = n.fromBuffer(r), c = Point.getN(), l = 0;
              l < e || !h.lt(c) || !h.gt(n.Zero);
              l++
            )
              ((i = a.sha256hmac(t.concat([r, t.from([0])]), i)),
                (r = a.sha256hmac(r, i)),
                (r = a.sha256hmac(r, i)),
                (h = n.fromBuffer(r)));
            return ((this.k = h), this);
          }),
          (c.prototype.toPublicKey = function () {
            var e = this.sig.i;
            h.checkArgument(
              0 === e || 1 === e || 2 === e || 3 === e,
              new Error("i must be equal to 0, 1, 2, or 3"),
            );
            var t = n.fromBuffer(this.hashbuf),
              r = this.sig.r,
              i = this.sig.s,
              s = 1 & e,
              a = e >> 1,
              u = Point.getN(),
              f = Point.getG(),
              c = a ? r.add(u) : r,
              l = Point.fromX(s, c),
              p = l.mul(u);
            if (!p.isInfinity())
              throw new Error("nR is not a valid curve point");
            var d = t.neg().umod(u),
              m = r.invm(u),
              g = l.mul(i).add(f.mul(d)).mul(m),
              y = o.fromPoint(g, this.sig.compressed);
            return y;
          }),
          (c.prototype.sigError = function () {
            if (!u.isBuffer(this.hashbuf) || 32 !== this.hashbuf.length)
              return "hashbuf must be a 32 byte buffer";
            var e = this.sig.r,
              t = this.sig.s;
            if (
              !e.gt(n.Zero) ||
              !e.lt(Point.getN()) ||
              !t.gt(n.Zero) ||
              !t.lt(Point.getN())
            )
              return "r and s not in range";
            var r = n.fromBuffer(
                this.hashbuf,
                this.endian ? { endian: this.endian } : void 0,
              ),
              i = Point.getN(),
              o = t.invm(i),
              s = o.mul(r).umod(i),
              a = o.mul(e).umod(i),
              f = Point.getG().mulAdd(s, this.pubkey.point, a);
            return f.isInfinity()
              ? "p is infinity"
              : 0 !== f.getX().umod(i).cmp(e) && "Invalid signature";
          }),
          (c.toLowS = function (e) {
            return (
              e.gt(
                n.fromBuffer(
                  t.from(
                    "7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0",
                    "hex",
                  ),
                ),
              ) && (e = Point.getN().sub(e)),
              e
            );
          }),
          (c.prototype._findSignature = function (e, t) {
            var r,
              i,
              o,
              s,
              a = Point.getN(),
              u = Point.getG(),
              f = 0;
            do {
              ((!this.k || f > 0) && this.deterministicK(f),
                f++,
                (r = this.k),
                (i = u.mul(r)),
                (o = i.x.umod(a)),
                (s = r
                  .invm(a)
                  .mul(t.add(e.mul(o)))
                  .umod(a)));
            } while (o.cmp(n.Zero) <= 0 || s.cmp(n.Zero) <= 0);
            return ((s = c.toLowS(s)), { s: s, r: o });
          }),
          (c.prototype.sign = function () {
            var e = this.hashbuf,
              t = this.privkey,
              r = t.bn;
            (h.checkState(e && t && r, new Error("invalid parameters")),
              h.checkState(
                u.isBuffer(e) && 32 === e.length,
                new Error("hashbuf must be a 32 byte buffer"),
              ));
            var o = n.fromBuffer(
                e,
                this.endian ? { endian: this.endian } : void 0,
              ),
              s = this._findSignature(r, o);
            return (
              (s.compressed = this.pubkey.compressed),
              (this.sig = new i(s)),
              this
            );
          }),
          (c.prototype.signRandomK = function () {
            return (this.randomK(), this.sign());
          }),
          (c.prototype.toString = function () {
            var e = {};
            return (
              this.hashbuf && (e.hashbuf = this.hashbuf.toString("hex")),
              this.privkey && (e.privkey = this.privkey.toString()),
              this.pubkey && (e.pubkey = this.pubkey.toString()),
              this.sig && (e.sig = this.sig.toString()),
              this.k && (e.k = this.k.toString()),
              JSON.stringify(e)
            );
          }),
          (c.prototype.verify = function () {
            return (
              this.sigError() ? (this.verified = !1) : (this.verified = !0),
              this
            );
          }),
          (c.sign = function (e, t, r) {
            return c().set({ hashbuf: e, endian: r, privkey: t }).sign().sig;
          }),
          (c.verify = function (e, t, r, n) {
            return c()
              .set({ hashbuf: e, endian: n, sig: t, pubkey: r })
              .verify().verified;
          }),
          (e.exports = c));
      }).call(this, r(2).Buffer);
    },
    4612: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(2852),
          i = r(234),
          o = r(2),
          s =
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".split(
              "",
            ),
          a = function e(r) {
            if (!(this instanceof e)) return new e(r);
            if (t.isBuffer(r)) {
              var n = r;
              this.fromBuffer(n);
            } else if ("string" === typeof r) {
              var i = r;
              this.fromString(i);
            } else r && this.set(r);
          };
        ((a.validCharacters = function (e) {
          return (
            o.Buffer.isBuffer(e) && (e = e.toString()),
            n.every(
              n.map(e, function (e) {
                return n.includes(s, e);
              }),
            )
          );
        }),
          (a.prototype.set = function (e) {
            return ((this.buf = e.buf || this.buf || void 0), this);
          }),
          (a.encode = function (e) {
            if (!o.Buffer.isBuffer(e))
              throw new Error("Input should be a buffer");
            return i.encode(e);
          }),
          (a.decode = function (e) {
            if ("string" !== typeof e)
              throw new Error("Input should be a string");
            return t.from(i.decode(e));
          }),
          (a.prototype.fromBuffer = function (e) {
            return ((this.buf = e), this);
          }),
          (a.prototype.fromString = function (e) {
            var t = a.decode(e);
            return ((this.buf = t), this);
          }),
          (a.prototype.toBuffer = function () {
            return this.buf;
          }),
          (a.prototype.toString = function () {
            return a.encode(this.buf);
          }),
          (e.exports = a));
      }).call(this, r(2).Buffer);
    },
    4614: function (e, t, r) {
      const BigInteger = r(2802),
        n = r(46).Buffer,
        i = r(2975),
        o = r(377),
        s = i.getCurveByName("secp256k1"),
        a = r(4615),
        u = r(4099),
        f = n.concat,
        h = s.G,
        c = s.p,
        l = s.n,
        p = BigInteger.ZERO,
        d = BigInteger.ONE,
        m = BigInteger.valueOf(2),
        g = BigInteger.valueOf(3),
        y = BigInteger.valueOf(4),
        v = BigInteger.valueOf(7);
      function b(e, t, r) {
        a.checkSignParams(e, r);
        const n = T("BIP0340/nonce", f([u.intToBuffer(e), t, r])),
          i = u.bufferToInt(n);
        return i.mod(l);
      }
      function w(e) {
        return e.affineY.mod(m).equals(p);
      }
      function B(e, t) {
        return w(e) ? t.clone() : l.subtract(t);
      }
      function S(e, t, r) {
        const n = T("BIP0340/challenge", f([e, t, r]));
        return u.bufferToInt(n).mod(l);
      }
      function k(e, t, r) {
        const n = h.multiply(e),
          i = r.multiply(t);
        return n.add(i.negate());
      }
      function T(e, t) {
        const r = u.hash(e);
        return u.hash(f([r, r, n.from(t)]));
      }
      function E(e) {
        const t = u.bufferToInt(e),
          r = t.pow(g).add(v).mod(c),
          n = r.modPow(c.add(d).divide(y), c);
        if (0 !== r.compareTo(n.modPow(m, c)))
          throw new Error("c is not equal to y^2");
        let o = i.Point.fromAffine(s, t, n);
        return (
          w(o) || (o = i.Point.fromAffine(s, t, c.subtract(n))),
          a.checkPointExists(!0, o),
          o
        );
      }
      function I() {
        let e = null;
        for (;;) {
          e = u.bufferToInt(n.from(o(32)));
          try {
            return (a.checkRange("a", e), e);
          } catch (t) {}
        }
      }
      e.exports = {
        deterministicGetK0: b,
        isEven: w,
        getEvenKey: B,
        getE: S,
        getR: k,
        taggedHash: T,
        liftX: E,
        randomA: I,
      };
    },
    4615: function (e, t, r) {
      const BigInteger = r(2802),
        n = r(46).Buffer,
        i = r(2975),
        o = i.getCurveByName("secp256k1"),
        s = BigInteger.ONE,
        a = o.n,
        u = o.p;
      function f(e, t, r, i) {
        const o = void 0 !== i ? "[" + i + "]" : "";
        if (!n.isBuffer(t)) throw new Error(e + o + " must be a Buffer");
        if (t.length !== r)
          throw new Error(e + o + " must be " + r + " bytes long");
      }
      function h(e, t) {
        if (!t || !t.length)
          throw new Error(e + " must be an array with one or more elements");
      }
      function c(e) {
        h("pubKeys", e);
        for (let t = 0; t < e.length; t++) f("pubKey", e[t], 32, t);
      }
      function l(e) {
        h("messages", e);
        for (let t = 0; t < e.length; t++) f("message", e[t], 32, t);
      }
      function p(e) {
        h("signatures", e);
        for (let t = 0; t < e.length; t++) f("signature", e[t], 64, t);
      }
      function d(e) {
        h("nonces", e);
        for (let t = 0; t < e.length; t++) f("nonce", e[t], 32, t);
      }
      function m(e, t) {
        const r = void 0 !== t ? "[" + t + "]" : "";
        if (!BigInteger.isBigInteger(e) && "string" != typeof e)
          throw new Error(
            "privateKey" + r + " must be a BigInteger or valid hex string",
          );
        if ("string" != typeof e) w("privateKey", e);
        else {
          if (e.match(/[^a-f^A-F^0-9]+/))
            throw new Error(
              "privateKey must be a BigInteger or valid hex string",
            );
          w("privateKey", BigInteger.fromHex(e));
        }
      }
      function g(e, t) {
        (m(e), f("message", t, 32));
      }
      function y(e, t, r) {
        (f("pubKey", e, 32), f("message", t, 32), f("signature", r, 64));
      }
      function v(e, t, r) {
        if ((c(e), l(t), p(r), e.length !== t.length || t.length !== r.length))
          throw new Error(
            "all parameters must be an array with the same length",
          );
      }
      function b(e, t, r, n, i) {
        (g(t, r),
          f("sessionId", e, 32),
          f("pubKeyCombined", n, 32),
          f("ell", i, 32));
      }
      function w(e, t) {
        if (t.compareTo(s) < 0 || t.compareTo(a.subtract(s)) > 0)
          throw new Error(e + " must be an integer in the range 1..n-1");
      }
      function B(e, t) {
        if (e.compareTo(u) >= 0)
          throw new Error("r is larger than or equal to field size");
        if (t.compareTo(a) >= 0)
          throw new Error("s is larger than or equal to curve order");
      }
      function S(e, t) {
        if (t.curve.isInfinity(t)) throw new Error("point is at infinity");
        const r = t.affineY.isEven();
        if (e !== r) throw new Error("point does not exist");
      }
      function k(e) {
        if (32 !== e.length) throw new Error("aux must be 32 bytes");
      }
      e.exports = {
        checkSessionParams: b,
        checkSignParams: g,
        checkVerifyParams: y,
        checkBatchVerifyParams: v,
        checkRange: w,
        checkSignatureInput: B,
        checkPointExists: S,
        checkPubKeyArr: c,
        checkArray: h,
        checkNonceArr: d,
        checkAux: k,
      };
    },
    4618: function (e, t, r) {
      "use strict";
      (function (t, n) {
        function i() {}
        ((i.getRandomBuffer = function (e) {
          return t.browser
            ? i.getRandomBufferBrowser(e)
            : i.getRandomBufferNode(e);
        }),
          (i.getRandomBufferNode = function (e) {
            var t = r(2764);
            return t.randomBytes(e);
          }),
          (i.getRandomBufferBrowser = function (e) {
            if (!window.crypto && !window.msCrypto)
              throw new Error("window.crypto not available");
            if (window.crypto && window.crypto.getRandomValues)
              var t = window.crypto;
            else {
              if (!window.msCrypto || !window.msCrypto.getRandomValues)
                throw new Error("window.crypto.getRandomValues not available");
              t = window.msCrypto;
            }
            var r = new Uint8Array(e);
            t.getRandomValues(r);
            var i = n.from(r);
            return i;
          }),
          (i.getPseudoRandomBuffer = function (e) {
            for (var t, r = 4294967296, i = n.alloc(e), o = 0; o <= e; o++) {
              var s = Math.floor(o / 4),
                a = o - 4 * s;
              0 === a
                ? ((t = Math.random() * r), (i[o] = 255 & t))
                : (i[o] = 255 & (t >>>= 8));
            }
            return i;
          }),
          (e.exports = i));
      }).call(this, r(18), r(2).Buffer);
    },
    4619: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(2852),
          i = r(3046),
          o = r(2936),
          s = r(3410),
          a = r(3136),
          u = r(3047),
          f = (r(2990), r(2897)),
          h = 486604799,
          c = function e(t) {
            if (!(this instanceof e)) return new e(t);
            var r = e._from(t);
            return (
              (this.version = r.version),
              (this.prevHash = r.prevHash),
              (this.merkleRoot = r.merkleRoot),
              (this.time = r.time),
              (this.timestamp = r.time),
              (this.bits = r.bits),
              (this.nonce = r.nonce),
              r.hash &&
                f.checkState(
                  this.hash === r.hash,
                  "Argument object hash property does not match block hash.",
                ),
              this
            );
          };
        ((c._from = function (e) {
          var t = {};
          if (o.isBuffer(e)) t = c._fromBufferReader(s(e));
          else {
            if (!n.isObject(e))
              throw new TypeError("Unrecognized argument for BlockHeader");
            t = c._fromObject(e);
          }
          return t;
        }),
          (c._fromObject = function (e) {
            f.checkArgument(e, "data is required");
            var r = e.prevHash,
              i = e.merkleRoot;
            (n.isString(e.prevHash) &&
              (r = o.reverse(t.from(e.prevHash, "hex"))),
              n.isString(e.merkleRoot) &&
                (i = o.reverse(t.from(e.merkleRoot, "hex"))));
            var s = {
              hash: e.hash,
              version: e.version,
              prevHash: r,
              merkleRoot: i,
              time: e.time,
              timestamp: e.time,
              bits: e.bits,
              nonce: e.nonce,
            };
            return s;
          }),
          (c.fromObject = function (e) {
            var t = c._fromObject(e);
            return new c(t);
          }),
          (c.fromRawBlock = function (e) {
            o.isBuffer(e) || (e = t.from(e, "binary"));
            var r = s(e);
            r.pos = c.Constants.START_OF_HEADER;
            var n = c._fromBufferReader(r);
            return new c(n);
          }),
          (c.fromBuffer = function (e) {
            var t = c._fromBufferReader(s(e));
            return new c(t);
          }),
          (c.fromString = function (e) {
            var r = t.from(e, "hex");
            return c.fromBuffer(r);
          }),
          (c._fromBufferReader = function (e) {
            var t = {};
            return (
              (t.version = e.readInt32LE()),
              (t.prevHash = e.read(32)),
              (t.merkleRoot = e.read(32)),
              (t.time = e.readUInt32LE()),
              (t.bits = e.readUInt32LE()),
              (t.nonce = e.readUInt32LE()),
              t
            );
          }),
          (c.fromBufferReader = function (e) {
            var t = c._fromBufferReader(e);
            return new c(t);
          }),
          (c.prototype.toObject = c.prototype.toJSON =
            function () {
              return {
                hash: this.hash,
                version: this.version,
                prevHash: o.reverse(this.prevHash).toString("hex"),
                merkleRoot: o.reverse(this.merkleRoot).toString("hex"),
                time: this.time,
                bits: this.bits,
                nonce: this.nonce,
              };
            }),
          (c.prototype.toBuffer = function () {
            return this.toBufferWriter().concat();
          }),
          (c.prototype.toString = function () {
            return this.toBuffer().toString("hex");
          }),
          (c.prototype.toBufferWriter = function (e) {
            return (
              e || (e = new a()),
              e.writeInt32LE(this.version),
              e.write(this.prevHash),
              e.write(this.merkleRoot),
              e.writeUInt32LE(this.time),
              e.writeUInt32LE(this.bits),
              e.writeUInt32LE(this.nonce),
              e
            );
          }),
          (c.prototype.getTargetDifficulty = function (e) {
            e = e || this.bits;
            var t = new i(16777215 & e),
              r = 8 * ((e >>> 24) - 3);
            while (r-- > 0) t = t.mul(new i(2));
            return t;
          }),
          (c.prototype.getDifficulty = function () {
            var e = this.getTargetDifficulty(h).mul(new i(Math.pow(10, 8))),
              t = this.getTargetDifficulty(),
              r = e.div(t).toString(10),
              n = r.length - 8;
            return ((r = r.slice(0, n) + "." + r.slice(n)), parseFloat(r));
          }),
          (c.prototype._getHash = function () {
            var e = this.toBuffer();
            return u.sha256sha256(e);
          }));
        var l = {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return (
              this._id ||
                (this._id = s(this._getHash()).readReverse().toString("hex")),
              this._id
            );
          },
          set: n.noop,
        };
        (Object.defineProperty(c.prototype, "id", l),
          Object.defineProperty(c.prototype, "hash", l),
          (c.prototype.validTimestamp = function () {
            var e = Math.round(new Date().getTime() / 1e3);
            return !(this.time > e + c.Constants.MAX_TIME_OFFSET);
          }),
          (c.prototype.validProofOfWork = function () {
            var e = new i(this.id, "hex"),
              t = this.getTargetDifficulty();
            return !(e.cmp(t) > 0);
          }),
          (c.prototype.inspect = function () {
            return "<BlockHeader " + this.id + ">";
          }),
          (c.Constants = {
            START_OF_HEADER: 8,
            MAX_TIME_OFFSET: 7200,
            LARGEST_HASH: new i(
              "10000000000000000000000000000000000000000000000000000000000000000",
              "hex",
            ),
          }),
          (e.exports = c));
      }).call(this, r(2).Buffer);
    },
    5859: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(2852),
          i = r(4619),
          o = r(2936),
          s = r(3410),
          a = r(3136),
          u = r(3047),
          f = (r(2990), r(4613)),
          h = r(3209),
          c = r(2897);
        function l(e) {
          if (!(this instanceof l)) return new l(e);
          var t = {};
          if (o.isBuffer(e)) t = l._fromBufferReader(s(e));
          else {
            if (!n.isObject(e))
              throw new TypeError("Unrecognized argument for MerkleBlock");
            var r;
            ((r = e.header instanceof i ? e.header : i.fromObject(e.header)),
              (t = {
                header: r,
                numTransactions: e.numTransactions,
                hashes: e.hashes,
                flags: e.flags,
              }));
          }
          return (
            n.extend(this, t),
            (this._flagBitsUsed = 0),
            (this._hashesUsed = 0),
            this
          );
        }
        ((l.fromBuffer = function (e) {
          return l.fromBufferReader(s(e));
        }),
          (l.fromBufferReader = function (e) {
            return new l(l._fromBufferReader(e));
          }),
          (l.prototype.toBuffer = function () {
            return this.toBufferWriter().concat();
          }),
          (l.prototype.toBufferWriter = function (e) {
            (e || (e = new a()),
              e.write(this.header.toBuffer()),
              e.writeUInt32LE(this.numTransactions),
              e.writeVarintNum(this.hashes.length));
            for (var r = 0; r < this.hashes.length; r++)
              e.write(t.from(this.hashes[r], "hex"));
            for (
              e.writeVarintNum(this.flags.length), r = 0;
              r < this.flags.length;
              r++
            )
              e.writeUInt8(this.flags[r]);
            return e;
          }),
          (l.prototype.toObject = l.prototype.toJSON =
            function () {
              return {
                header: this.header.toObject(),
                numTransactions: this.numTransactions,
                hashes: this.hashes,
                flags: this.flags,
              };
            }),
          (l.prototype.validMerkleTree = function () {
            if (
              (c.checkState(
                n.isArray(this.flags),
                "MerkleBlock flags is not an array",
              ),
              c.checkState(
                n.isArray(this.hashes),
                "MerkleBlock hashes is not an array",
              ),
              this.hashes.length > this.numTransactions)
            )
              return !1;
            if (8 * this.flags.length < this.hashes.length) return !1;
            var e = this._calcTreeHeight(),
              t = { hashesUsed: 0, flagBitsUsed: 0 },
              r = this._traverseMerkleTree(e, 0, t);
            return (
              t.hashesUsed === this.hashes.length &&
              o.equals(r, this.header.merkleRoot)
            );
          }),
          (l.prototype.filterdTxsHash = function () {
            if (
              (c.checkState(
                n.isArray(this.flags),
                "MerkleBlock flags is not an array",
              ),
              c.checkState(
                n.isArray(this.hashes),
                "MerkleBlock hashes is not an array",
              ),
              this.hashes.length > this.numTransactions)
            )
              throw new h.MerkleBlock.InvalidMerkleTree();
            if (8 * this.flags.length < this.hashes.length)
              throw new h.MerkleBlock.InvalidMerkleTree();
            if (1 === this.hashes.length) return [];
            var e = this._calcTreeHeight(),
              t = { hashesUsed: 0, flagBitsUsed: 0 },
              r = this._traverseMerkleTree(e, 0, t, !0);
            if (t.hashesUsed !== this.hashes.length)
              throw new h.MerkleBlock.InvalidMerkleTree();
            return r;
          }),
          (l.prototype._traverseMerkleTree = function (e, r, n, i) {
            ((n = n || {}),
              (n.txs = n.txs || []),
              (n.flagBitsUsed = n.flagBitsUsed || 0),
              (n.hashesUsed = n.hashesUsed || 0));
            i = i || !1;
            if (n.flagBitsUsed > 8 * this.flags.length) return null;
            var o =
              (this.flags[n.flagBitsUsed >> 3] >>> (7 & n.flagBitsUsed++)) & 1;
            if (0 !== e && o) {
              var s = this._traverseMerkleTree(e - 1, 2 * r, n),
                a = s;
              return (
                2 * r + 1 < this._calcTreeWidth(e - 1) &&
                  (a = this._traverseMerkleTree(e - 1, 2 * r + 1, n)),
                i ? n.txs : u.sha256sha256(new t.concat([s, a]))
              );
            }
            if (n.hashesUsed >= this.hashes.length) return null;
            var f = this.hashes[n.hashesUsed++];
            return (0 === e && o && n.txs.push(f), t.from(f, "hex"));
          }),
          (l.prototype._calcTreeWidth = function (e) {
            return (this.numTransactions + (1 << e) - 1) >> e;
          }),
          (l.prototype._calcTreeHeight = function () {
            var e = 0;
            while (this._calcTreeWidth(e) > 1) e++;
            return e;
          }),
          (l.prototype.hasTransaction = function (e) {
            (c.checkArgument(!n.isUndefined(e), "tx cannot be undefined"),
              c.checkArgument(
                e instanceof f || "string" === typeof e,
                'Invalid tx given, tx must be a "string" or "Transaction"',
              ));
            var r = e;
            e instanceof f &&
              (r = o.reverse(t.from(e.id, "hex")).toString("hex"));
            var i = [],
              s = this._calcTreeHeight();
            return (
              this._traverseMerkleTree(s, 0, { txs: i }),
              -1 !== i.indexOf(r)
            );
          }),
          (l._fromBufferReader = function (e) {
            c.checkState(!e.finished(), "No merkleblock data received");
            var t = {};
            ((t.header = i.fromBufferReader(e)),
              (t.numTransactions = e.readUInt32LE()));
            var r = e.readVarintNum();
            t.hashes = [];
            for (var n = 0; n < r; n++)
              t.hashes.push(e.read(32).toString("hex"));
            var o = e.readVarintNum();
            for (t.flags = [], n = 0; n < o; n++) t.flags.push(e.readUInt8());
            return t;
          }),
          (l.fromObject = function (e) {
            return new l(e);
          }),
          (e.exports = l));
      }).call(this, r(2).Buffer);
    },
    5860: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(229),
          i = r(2),
          o = r(2852),
          s = r(2897),
          a = r(3046),
          u = r(4612),
          f = r(4098),
          h = r(3047),
          c = r(3637),
          Point = r(3873),
          l = r(4097),
          p = r(4618),
          d = r(3209),
          m = d.HDPrivateKey,
          g = r(2936),
          y = r(2990),
          v = 128,
          b = 1 / 8,
          w = 512;
        function B(e) {
          if (e instanceof B) return e;
          if (!(this instanceof B)) return new B(e);
          if (!e) return this._generateRandomly();
          if (c.get(e)) return this._generateRandomly(e);
          if (o.isString(e) || g.isBuffer(e))
            if (B.isValidSerialized(e)) this._buildFromSerialized(e);
            else if (y.isValidJSON(e)) this._buildFromJSON(e);
            else {
              if (!g.isBuffer(e) || !B.isValidSerialized(e.toString()))
                throw B.getSerializedError(e);
              this._buildFromSerialized(e.toString());
            }
          else {
            if (!o.isObject(e)) throw new m.UnrecognizedArgument(e);
            this._buildFromObject(e);
          }
        }
        ((B.isValidPath = function (e, t) {
          if (o.isString(e)) {
            var r = B._getDerivationIndexes(e);
            return null !== r && o.every(r, B.isValidPath);
          }
          return (
            !!o.isNumber(e) &&
            (e < B.Hardened && !0 === t && (e += B.Hardened),
            e >= 0 && e < B.MaxIndex)
          );
        }),
          (B._getDerivationIndexes = function (e) {
            var t = e.split("/");
            if (o.includes(B.RootElementAlias, e)) return [];
            if (!o.includes(B.RootElementAlias, t[0])) return null;
            var r = t.slice(1).map(function (e) {
              var t = "'" === e.slice(-1);
              if ((t && (e = e.slice(0, -1)), !e || "-" === e[0])) return NaN;
              var r = +e;
              return (t && (r += B.Hardened), r);
            });
            return o.some(r, isNaN) ? null : r;
          }),
          (B.prototype.derive = function (e, t) {
            return this.deriveNonCompliantChild(e, t);
          }),
          (B.prototype.deriveChild = function (e, t) {
            if (o.isNumber(e)) return this._deriveWithNumber(e, t);
            if (o.isString(e)) return this._deriveFromString(e);
            throw new m.InvalidDerivationArgument(e);
          }),
          (B.prototype.deriveNonCompliantChild = function (e, t) {
            if (o.isNumber(e)) return this._deriveWithNumber(e, t, !0);
            if (o.isString(e)) return this._deriveFromString(e, !0);
            throw new m.InvalidDerivationArgument(e);
          }),
          (B.prototype._deriveWithNumber = function (e, r, i) {
            if (!B.isValidPath(e, r)) throw new m.InvalidPath(e);
            ((r = e >= B.Hardened || r),
              e < B.Hardened && !0 === r && (e += B.Hardened));
            var o,
              s = g.integerAsBuffer(e);
            if (r && i) {
              var u = this.privateKey.bn.toBuffer();
              o = g.concat([t.from([0]), u, s]);
            } else if (r) {
              var f = this.privateKey.bn.toBuffer({ size: 32 });
              (n(
                32 === f.length,
                "length of private key buffer is expected to be 32 bytes",
              ),
                (o = g.concat([t.from([0]), f, s])));
            } else o = g.concat([this.publicKey.toBuffer(), s]);
            var c = h.sha512hmac(o, this._buffers.chainCode),
              p = a.fromBuffer(c.slice(0, 32), { size: 32 }),
              d = c.slice(32, 64),
              y = p
                .add(this.privateKey.toBigNumber())
                .umod(Point.getN())
                .toBuffer({ size: 32 });
            if (!l.isValid(y)) return this._deriveWithNumber(e + 1, null, i);
            var v = new B({
              network: this.network,
              depth: this.depth + 1,
              parentFingerPrint: this.fingerPrint,
              childIndex: e,
              chainCode: d,
              privateKey: y,
            });
            return v;
          }),
          (B.prototype._deriveFromString = function (e, t) {
            if (!B.isValidPath(e)) throw new m.InvalidPath(e);
            var r = B._getDerivationIndexes(e),
              n = r.reduce(function (e, r) {
                return e._deriveWithNumber(r, null, t);
              }, this);
            return n;
          }),
          (B.isValidSerialized = function (e, t) {
            return !B.getSerializedError(e, t);
          }),
          (B.getSerializedError = function (e, t) {
            if (!o.isString(e) && !g.isBuffer(e))
              return new m.UnrecognizedArgument("Expected string or buffer");
            if (!u.validCharacters(e))
              return new d.InvalidB58Char("(unknown)", e);
            try {
              e = f.decode(e);
            } catch (n) {
              return new d.InvalidB58Checksum(e);
            }
            if (e.length !== B.DataLength) return new m.InvalidLength(e);
            if (!o.isUndefined(t)) {
              var r = B._validateNetwork(e, t);
              if (r) return r;
            }
            return null;
          }),
          (B._validateNetwork = function (e, t) {
            var r = c.get(t);
            if (!r) return new d.InvalidNetworkArgument(t);
            var n = e.slice(0, 4);
            return g.integerFromBuffer(n) !== r.xprivkey
              ? new d.InvalidNetwork(n)
              : null;
          }),
          (B.fromString = function (e) {
            return (
              s.checkArgument(o.isString(e), "No valid string was provided"),
              new B(e)
            );
          }),
          (B.fromObject = function (e) {
            return (
              s.checkArgument(o.isObject(e), "No valid argument was provided"),
              new B(e)
            );
          }),
          (B.prototype._buildFromJSON = function (e) {
            return this._buildFromObject(JSON.parse(e));
          }),
          (B.prototype._buildFromObject = function (e) {
            var r = {
              version: e.network
                ? g.integerAsBuffer(c.get(e.network).xprivkey)
                : e.version,
              depth: o.isNumber(e.depth)
                ? g.integerAsSingleByteBuffer(e.depth)
                : e.depth,
              parentFingerPrint: o.isNumber(e.parentFingerPrint)
                ? g.integerAsBuffer(e.parentFingerPrint)
                : e.parentFingerPrint,
              childIndex: o.isNumber(e.childIndex)
                ? g.integerAsBuffer(e.childIndex)
                : e.childIndex,
              chainCode: o.isString(e.chainCode)
                ? t.from(e.chainCode, "hex")
                : e.chainCode,
              privateKey:
                o.isString(e.privateKey) && y.isHexa(e.privateKey)
                  ? t.from(e.privateKey, "hex")
                  : e.privateKey,
              checksum: e.checksum
                ? e.checksum.length
                  ? e.checksum
                  : g.integerAsBuffer(e.checksum)
                : void 0,
            };
            return this._buildFromBuffers(r);
          }),
          (B.prototype._buildFromSerialized = function (e) {
            var t = f.decode(e),
              r = {
                version: t.slice(B.VersionStart, B.VersionEnd),
                depth: t.slice(B.DepthStart, B.DepthEnd),
                parentFingerPrint: t.slice(
                  B.ParentFingerPrintStart,
                  B.ParentFingerPrintEnd,
                ),
                childIndex: t.slice(B.ChildIndexStart, B.ChildIndexEnd),
                chainCode: t.slice(B.ChainCodeStart, B.ChainCodeEnd),
                privateKey: t.slice(B.PrivateKeyStart, B.PrivateKeyEnd),
                checksum: t.slice(B.ChecksumStart, B.ChecksumEnd),
                xprivkey: e,
              };
            return this._buildFromBuffers(r);
          }),
          (B.prototype._generateRandomly = function (e) {
            return B.fromSeed(p.getRandomBuffer(64), e);
          }),
          (B.fromSeed = function (e, r) {
            if ((y.isHexaString(e) && (e = t.from(e, "hex")), !t.isBuffer(e)))
              throw new m.InvalidEntropyArgument(e);
            if (e.length < v * b)
              throw new m.InvalidEntropyArgument.NotEnoughEntropy(e);
            if (e.length > w * b)
              throw new m.InvalidEntropyArgument.TooMuchEntropy(e);
            var n = h.sha512hmac(e, t.from("Bitcoin seed"));
            return new B({
              network: c.get(r) || c.defaultNetwork,
              depth: 0,
              parentFingerPrint: 0,
              childIndex: 0,
              privateKey: n.slice(0, 32),
              chainCode: n.slice(32, 64),
            });
          }),
          (B.prototype._calcHDPublicKey = function () {
            if (!this._hdPublicKey) {
              var e = r(5861);
              this._hdPublicKey = new e(this);
            }
          }),
          (B.prototype._buildFromBuffers = function (e) {
            (B._validateBufferArguments(e),
              y.defineImmutable(this, { _buffers: e }));
            var r = [
                e.version,
                e.depth,
                e.parentFingerPrint,
                e.childIndex,
                e.chainCode,
                g.emptyBuffer(1),
                e.privateKey,
              ],
              n = i.Buffer.concat(r);
            if (e.checksum && e.checksum.length) {
              if (e.checksum.toString() !== f.checksum(n).toString())
                throw new d.InvalidB58Checksum(n);
            } else e.checksum = f.checksum(n);
            var o,
              s = c.get(g.integerFromBuffer(e.version));
            ((o = f.encode(i.Buffer.concat(r))), (e.xprivkey = t.from(o)));
            var u = new l(a.fromBuffer(e.privateKey), s),
              p = u.toPublicKey(),
              m = B.ParentFingerPrintSize,
              v = h.sha256ripemd160(p.toBuffer()).slice(0, m);
            return (
              y.defineImmutable(this, {
                xprivkey: o,
                network: s,
                depth: g.integerFromSingleByteBuffer(e.depth),
                privateKey: u,
                publicKey: p,
                fingerPrint: v,
              }),
              (this._hdPublicKey = null),
              Object.defineProperty(this, "hdPublicKey", {
                configurable: !1,
                enumerable: !0,
                get: function () {
                  return (this._calcHDPublicKey(), this._hdPublicKey);
                },
              }),
              Object.defineProperty(this, "xpubkey", {
                configurable: !1,
                enumerable: !0,
                get: function () {
                  return (this._calcHDPublicKey(), this._hdPublicKey.xpubkey);
                },
              }),
              this
            );
          }),
          (B._validateBufferArguments = function (e) {
            var t = function (t, r) {
              var i = e[t];
              (n(g.isBuffer(i), t + " argument is not a buffer"),
                n(
                  i.length === r,
                  t +
                    " has not the expected size: found " +
                    i.length +
                    ", expected " +
                    r,
                ));
            };
            (t("version", B.VersionSize),
              t("depth", B.DepthSize),
              t("parentFingerPrint", B.ParentFingerPrintSize),
              t("childIndex", B.ChildIndexSize),
              t("chainCode", B.ChainCodeSize),
              t("privateKey", B.PrivateKeySize),
              e.checksum && e.checksum.length && t("checksum", B.CheckSumSize));
          }),
          (B.prototype.toString = function () {
            return this.xprivkey;
          }),
          (B.prototype.inspect = function () {
            return "<HDPrivateKey: " + this.xprivkey + ">";
          }),
          (B.prototype.toObject = B.prototype.toJSON =
            function () {
              return {
                network: c.get(
                  g.integerFromBuffer(this._buffers.version),
                  "xprivkey",
                ).name,
                depth: g.integerFromSingleByteBuffer(this._buffers.depth),
                fingerPrint: g.integerFromBuffer(this.fingerPrint),
                parentFingerPrint: g.integerFromBuffer(
                  this._buffers.parentFingerPrint,
                ),
                childIndex: g.integerFromBuffer(this._buffers.childIndex),
                chainCode: g.bufferToHex(this._buffers.chainCode),
                privateKey: this.privateKey.toBuffer().toString("hex"),
                checksum: g.integerFromBuffer(this._buffers.checksum),
                xprivkey: this.xprivkey,
              };
            }),
          (B.fromBuffer = function (e) {
            return new B(e.toString());
          }),
          (B.prototype.toBuffer = function () {
            return g.copy(this._buffers.xprivkey);
          }),
          (B.DefaultDepth = 0),
          (B.DefaultFingerprint = 0),
          (B.DefaultChildIndex = 0),
          (B.Hardened = 2147483648),
          (B.MaxIndex = 2 * B.Hardened),
          (B.RootElementAlias = ["m", "M", "m'", "M'"]),
          (B.VersionSize = 4),
          (B.DepthSize = 1),
          (B.ParentFingerPrintSize = 4),
          (B.ChildIndexSize = 4),
          (B.ChainCodeSize = 32),
          (B.PrivateKeySize = 32),
          (B.CheckSumSize = 4),
          (B.DataLength = 78),
          (B.SerializedByteSize = 82),
          (B.VersionStart = 0),
          (B.VersionEnd = B.VersionStart + B.VersionSize),
          (B.DepthStart = B.VersionEnd),
          (B.DepthEnd = B.DepthStart + B.DepthSize),
          (B.ParentFingerPrintStart = B.DepthEnd),
          (B.ParentFingerPrintEnd =
            B.ParentFingerPrintStart + B.ParentFingerPrintSize),
          (B.ChildIndexStart = B.ParentFingerPrintEnd),
          (B.ChildIndexEnd = B.ChildIndexStart + B.ChildIndexSize),
          (B.ChainCodeStart = B.ChildIndexEnd),
          (B.ChainCodeEnd = B.ChainCodeStart + B.ChainCodeSize),
          (B.PrivateKeyStart = B.ChainCodeEnd + 1),
          (B.PrivateKeyEnd = B.PrivateKeyStart + B.PrivateKeySize),
          (B.ChecksumStart = B.PrivateKeyEnd),
          (B.ChecksumEnd = B.ChecksumStart + B.CheckSumSize),
          n(B.ChecksumEnd === B.SerializedByteSize),
          (e.exports = B));
      }).call(this, r(2).Buffer);
    },
    5861: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(2852),
          i = r(2897),
          o = r(3046),
          s = r(4612),
          a = r(4098),
          u = r(3047),
          f = r(5860),
          h = r(3637),
          Point = r(3873),
          c = r(3366),
          l = r(3209),
          p = l,
          d = l.HDPublicKey,
          m = r(229),
          g = r(2990),
          y = r(2936);
        function v(e) {
          if (e instanceof v) return e;
          if (!(this instanceof v)) return new v(e);
          if (e) {
            if (n.isString(e) || y.isBuffer(e)) {
              var t = v.getSerializedError(e);
              if (t) {
                if (y.isBuffer(e) && !v.getSerializedError(e.toString()))
                  return this._buildFromSerialized(e.toString());
                if (t instanceof d.ArgumentIsPrivateExtended)
                  return new f(e).hdPublicKey;
                throw t;
              }
              return this._buildFromSerialized(e);
            }
            if (n.isObject(e))
              return e instanceof f
                ? this._buildFromPrivate(e)
                : this._buildFromObject(e);
            throw new d.UnrecognizedArgument(e);
          }
          throw new d.MustSupplyArgument();
        }
        ((v.isValidPath = function (e) {
          if (n.isString(e)) {
            var t = f._getDerivationIndexes(e);
            return null !== t && n.every(t, v.isValidPath);
          }
          return !!n.isNumber(e) && e >= 0 && e < v.Hardened;
        }),
          (v.prototype.derive = function (e, t) {
            return this.deriveChild(e, t);
          }),
          (v.prototype.deriveChild = function (e, t) {
            if (n.isNumber(e)) return this._deriveWithNumber(e, t);
            if (n.isString(e)) return this._deriveFromString(e);
            throw new d.InvalidDerivationArgument(e);
          }),
          (v.prototype._deriveWithNumber = function (e, t) {
            if (e >= v.Hardened || t)
              throw new d.InvalidIndexCantDeriveHardened();
            if (e < 0) throw new d.InvalidPath(e);
            var r,
              n = y.integerAsBuffer(e),
              i = y.concat([this.publicKey.toBuffer(), n]),
              s = u.sha512hmac(i, this._buffers.chainCode),
              a = o.fromBuffer(s.slice(0, 32), { size: 32 }),
              f = s.slice(32, 64);
            try {
              r = c.fromPoint(Point.getG().mul(a).add(this.publicKey.point));
            } catch (l) {
              return this._deriveWithNumber(e + 1);
            }
            var h = new v({
              network: this.network,
              depth: this.depth + 1,
              parentFingerPrint: this.fingerPrint,
              childIndex: e,
              chainCode: f,
              publicKey: r,
            });
            return h;
          }),
          (v.prototype._deriveFromString = function (e) {
            if (n.includes(e, "'"))
              throw new d.InvalidIndexCantDeriveHardened();
            if (!v.isValidPath(e)) throw new d.InvalidPath(e);
            var t = f._getDerivationIndexes(e),
              r = t.reduce(function (e, t) {
                return e._deriveWithNumber(t);
              }, this);
            return r;
          }),
          (v.isValidSerialized = function (e, t) {
            return n.isNull(v.getSerializedError(e, t));
          }),
          (v.getSerializedError = function (e, t) {
            if (!n.isString(e) && !y.isBuffer(e))
              return new d.UnrecognizedArgument("expected buffer or string");
            if (!s.validCharacters(e))
              return new p.InvalidB58Char("(unknown)", e);
            try {
              e = a.decode(e);
            } catch (o) {
              return new p.InvalidB58Checksum(e);
            }
            if (e.length !== v.DataSize) return new d.InvalidLength(e);
            if (!n.isUndefined(t)) {
              var r = v._validateNetwork(e, t);
              if (r) return r;
            }
            var i = y.integerFromBuffer(e.slice(0, 4));
            return i === h.livenet.xprivkey || i === h.testnet.xprivkey
              ? new d.ArgumentIsPrivateExtended()
              : null;
          }),
          (v._validateNetwork = function (e, t) {
            var r = h.get(t);
            if (!r) return new p.InvalidNetworkArgument(t);
            var n = e.slice(v.VersionStart, v.VersionEnd);
            return y.integerFromBuffer(n) !== r.xpubkey
              ? new p.InvalidNetwork(n)
              : null;
          }),
          (v.prototype._buildFromPrivate = function (e) {
            var t = n.clone(e._buffers),
              r = Point.getG().mul(o.fromBuffer(t.privateKey));
            return (
              (t.publicKey = Point.pointToCompressed(r)),
              (t.version = y.integerAsBuffer(
                h.get(y.integerFromBuffer(t.version)).xpubkey,
              )),
              (t.privateKey = void 0),
              (t.checksum = void 0),
              (t.xprivkey = void 0),
              this._buildFromBuffers(t)
            );
          }),
          (v.prototype._buildFromObject = function (e) {
            var r = {
              version: e.network
                ? y.integerAsBuffer(h.get(e.network).xpubkey)
                : e.version,
              depth: n.isNumber(e.depth)
                ? y.integerAsSingleByteBuffer(e.depth)
                : e.depth,
              parentFingerPrint: n.isNumber(e.parentFingerPrint)
                ? y.integerAsBuffer(e.parentFingerPrint)
                : e.parentFingerPrint,
              childIndex: n.isNumber(e.childIndex)
                ? y.integerAsBuffer(e.childIndex)
                : e.childIndex,
              chainCode: n.isString(e.chainCode)
                ? t.from(e.chainCode, "hex")
                : e.chainCode,
              publicKey: n.isString(e.publicKey)
                ? t.from(e.publicKey, "hex")
                : y.isBuffer(e.publicKey)
                  ? e.publicKey
                  : e.publicKey.toBuffer(),
              checksum: n.isNumber(e.checksum)
                ? y.integerAsBuffer(e.checksum)
                : e.checksum,
            };
            return this._buildFromBuffers(r);
          }),
          (v.prototype._buildFromSerialized = function (e) {
            var t = a.decode(e),
              r = {
                version: t.slice(v.VersionStart, v.VersionEnd),
                depth: t.slice(v.DepthStart, v.DepthEnd),
                parentFingerPrint: t.slice(
                  v.ParentFingerPrintStart,
                  v.ParentFingerPrintEnd,
                ),
                childIndex: t.slice(v.ChildIndexStart, v.ChildIndexEnd),
                chainCode: t.slice(v.ChainCodeStart, v.ChainCodeEnd),
                publicKey: t.slice(v.PublicKeyStart, v.PublicKeyEnd),
                checksum: t.slice(v.ChecksumStart, v.ChecksumEnd),
                xpubkey: e,
              };
            return this._buildFromBuffers(r);
          }),
          (v.prototype._buildFromBuffers = function (e) {
            (v._validateBufferArguments(e),
              g.defineImmutable(this, { _buffers: e }));
            var r = [
                e.version,
                e.depth,
                e.parentFingerPrint,
                e.childIndex,
                e.chainCode,
                e.publicKey,
              ],
              n = y.concat(r),
              i = a.checksum(n);
            if (e.checksum && e.checksum.length) {
              if (e.checksum.toString("hex") !== i.toString("hex"))
                throw new p.InvalidB58Checksum(n, i);
            } else e.checksum = i;
            var o,
              s = h.get(y.integerFromBuffer(e.version));
            ((o = a.encode(y.concat(r))), (e.xpubkey = t.from(o)));
            var f = new c(e.publicKey, { network: s }),
              l = v.ParentFingerPrintSize,
              d = u.sha256ripemd160(f.toBuffer()).slice(0, l);
            return (
              g.defineImmutable(this, {
                xpubkey: o,
                network: s,
                depth: y.integerFromSingleByteBuffer(e.depth),
                publicKey: f,
                fingerPrint: d,
              }),
              this
            );
          }),
          (v._validateBufferArguments = function (e) {
            var t = function (t, r) {
              var n = e[t];
              (m(
                y.isBuffer(n),
                t + " argument is not a buffer, it's " + typeof n,
              ),
                m(
                  n.length === r,
                  t +
                    " has not the expected size: found " +
                    n.length +
                    ", expected " +
                    r,
                ));
            };
            (t("version", v.VersionSize),
              t("depth", v.DepthSize),
              t("parentFingerPrint", v.ParentFingerPrintSize),
              t("childIndex", v.ChildIndexSize),
              t("chainCode", v.ChainCodeSize),
              t("publicKey", v.PublicKeySize),
              e.checksum && e.checksum.length && t("checksum", v.CheckSumSize));
          }),
          (v.fromString = function (e) {
            return (
              i.checkArgument(n.isString(e), "No valid string was provided"),
              new v(e)
            );
          }),
          (v.fromObject = function (e) {
            return (
              i.checkArgument(n.isObject(e), "No valid argument was provided"),
              new v(e)
            );
          }),
          (v.prototype.toString = function () {
            return this.xpubkey;
          }),
          (v.prototype.inspect = function () {
            return "<HDPublicKey: " + this.xpubkey + ">";
          }),
          (v.prototype.toObject = v.prototype.toJSON =
            function () {
              return {
                network: h.get(y.integerFromBuffer(this._buffers.version)).name,
                depth: y.integerFromSingleByteBuffer(this._buffers.depth),
                fingerPrint: y.integerFromBuffer(this.fingerPrint),
                parentFingerPrint: y.integerFromBuffer(
                  this._buffers.parentFingerPrint,
                ),
                childIndex: y.integerFromBuffer(this._buffers.childIndex),
                chainCode: y.bufferToHex(this._buffers.chainCode),
                publicKey: this.publicKey.toString(),
                checksum: y.integerFromBuffer(this._buffers.checksum),
                xpubkey: this.xpubkey,
              };
            }),
          (v.fromBuffer = function (e) {
            return new v(e);
          }),
          (v.prototype.toBuffer = function () {
            return y.copy(this._buffers.xpubkey);
          }),
          (v.Hardened = 2147483648),
          (v.RootElementAlias = ["m", "M"]),
          (v.VersionSize = 4),
          (v.DepthSize = 1),
          (v.ParentFingerPrintSize = 4),
          (v.ChildIndexSize = 4),
          (v.ChainCodeSize = 32),
          (v.PublicKeySize = 33),
          (v.CheckSumSize = 4),
          (v.DataSize = 78),
          (v.SerializedByteSize = 82),
          (v.VersionStart = 0),
          (v.VersionEnd = v.VersionStart + v.VersionSize),
          (v.DepthStart = v.VersionEnd),
          (v.DepthEnd = v.DepthStart + v.DepthSize),
          (v.ParentFingerPrintStart = v.DepthEnd),
          (v.ParentFingerPrintEnd =
            v.ParentFingerPrintStart + v.ParentFingerPrintSize),
          (v.ChildIndexStart = v.ParentFingerPrintEnd),
          (v.ChildIndexEnd = v.ChildIndexStart + v.ChildIndexSize),
          (v.ChainCodeStart = v.ChildIndexEnd),
          (v.ChainCodeEnd = v.ChainCodeStart + v.ChainCodeSize),
          (v.PublicKeyStart = v.ChainCodeEnd),
          (v.PublicKeyEnd = v.PublicKeyStart + v.PublicKeySize),
          (v.ChecksumStart = v.PublicKeyEnd),
          (v.ChecksumEnd = v.ChecksumStart + v.CheckSumSize),
          m(v.PublicKeyEnd === v.DataSize),
          m(v.ChecksumEnd === v.SerializedByteSize),
          (e.exports = v));
      }).call(this, r(2).Buffer);
    },
    7072: function (e, t, r) {
      "use strict";
      var n = "http://bitcore.io/";
      e.exports = [
        {
          name: "InvalidB58Char",
          message: "Invalid Base58 character: {0} in {1}",
        },
        {
          name: "InvalidB58Checksum",
          message: "Invalid Base58 checksum for {0}",
        },
        {
          name: "InvalidNetwork",
          message: "Invalid version for network: got {0}",
        },
        { name: "InvalidState", message: "Invalid state: {0}" },
        {
          name: "NotImplemented",
          message: "Function {0} was not implemented yet",
        },
        {
          name: "InvalidNetworkArgument",
          message: 'Invalid network: must be "livenet" or "testnet", got {0}',
        },
        {
          name: "InvalidArgument",
          message: function () {
            return (
              "Invalid Argument" +
              (arguments[0] ? ": " + arguments[0] : "") +
              (arguments[1] ? " Documentation: " + n + arguments[1] : "")
            );
          },
        },
        {
          name: "AbstractMethodInvoked",
          message: "Abstract Method Invocation: {0}",
        },
        {
          name: "InvalidArgumentType",
          message: function () {
            return (
              "Invalid Argument for " +
              arguments[2] +
              ", expected " +
              arguments[1] +
              " but got " +
              typeof arguments[0]
            );
          },
        },
        {
          name: "Unit",
          message: "Internal Error on Unit {0}",
          errors: [
            { name: "UnknownCode", message: "Unrecognized unit code: {0}" },
            { name: "InvalidRate", message: "Invalid exchange rate: {0}" },
          ],
        },
        {
          name: "MerkleBlock",
          message: "Internal Error on MerkleBlock {0}",
          errors: [
            {
              name: "InvalidMerkleTree",
              message: "This MerkleBlock contain an invalid Merkle Tree",
            },
          ],
        },
        {
          name: "Transaction",
          message: "Internal Error on Transaction {0}",
          errors: [
            {
              name: "Input",
              message: "Internal Error on Input {0}",
              errors: [
                {
                  name: "MissingScript",
                  message: "Need a script to create an input",
                },
                {
                  name: "UnsupportedScript",
                  message: "Unsupported input script type: {0}",
                },
                {
                  name: "MissingPreviousOutput",
                  message: "No previous output information.",
                },
                {
                  name: "BlockHeightOutOfRange",
                  message: "Block Height can only be between 0 and 65535",
                },
                {
                  name: "LockTimeRange",
                  message:
                    "Seconds needs to be more that 0 and less that 33553920",
                },
              ],
            },
            { name: "NeedMoreInfo", message: "{0}" },
            {
              name: "InvalidSorting",
              message:
                "The sorting function provided did not return the change output as one of the array elements",
            },
            { name: "InvalidOutputAmountSum", message: "{0}" },
            {
              name: "MissingSignatures",
              message: "Some inputs have not been fully signed",
            },
            {
              name: "InvalidIndex",
              message: "Invalid index: {0} is not between 0, {1}",
            },
            {
              name: "UnableToVerifySignature",
              message: "Unable to verify signature: {0}",
            },
            {
              name: "DustOutputs",
              message: "Dust amount detected in one output",
            },
            { name: "InvalidSatoshis", message: "Output satoshis are invalid" },
            {
              name: "FeeError",
              message: "Internal Error on Fee {0}",
              errors: [
                { name: "TooSmall", message: "Fee is too small: {0}" },
                { name: "TooLarge", message: "Fee is too large: {0}" },
                {
                  name: "Different",
                  message: "Unspent value is different from specified fee: {0}",
                },
              ],
            },
            {
              name: "ChangeAddressMissing",
              message: "Change address is missing",
            },
            {
              name: "BlockHeightTooHigh",
              message: "Block Height can be at most 2^32 -1",
            },
            {
              name: "NLockTimeOutOfRange",
              message: "Block Height can only be between 0 and 499 999 999",
            },
            {
              name: "LockTimeTooEarly",
              message: "Lock Time can't be earlier than UNIX date 500 000 000",
            },
          ],
        },
        {
          name: "Script",
          message: "Internal Error on Script {0}",
          errors: [
            {
              name: "UnrecognizedAddress",
              message: "Expected argument {0} to be an address",
            },
            {
              name: "CantDeriveAddress",
              message:
                "Can't derive address associated with script {0}, needs to be p2pkh in, p2pkh out, p2sh in, or p2sh out.",
            },
            {
              name: "InvalidBuffer",
              message:
                "Invalid script buffer: can't parse valid script from given buffer {0}",
            },
          ],
        },
        {
          name: "HDPrivateKey",
          message: "Internal Error on HDPrivateKey {0}",
          errors: [
            {
              name: "InvalidDerivationArgument",
              message:
                "Invalid derivation argument {0}, expected string, or number and boolean",
            },
            {
              name: "InvalidEntropyArgument",
              message:
                "Invalid entropy: must be an hexa string or binary buffer, got {0}",
              errors: [
                {
                  name: "TooMuchEntropy",
                  message:
                    'Invalid entropy: more than 512 bits is non standard, got "{0}"',
                },
                {
                  name: "NotEnoughEntropy",
                  message:
                    'Invalid entropy: at least 128 bits needed, got "{0}"',
                },
              ],
            },
            {
              name: "InvalidLength",
              message: "Invalid length for xprivkey string in {0}",
            },
            { name: "InvalidPath", message: "Invalid derivation path: {0}" },
            {
              name: "UnrecognizedArgument",
              message:
                'Invalid argument: creating a HDPrivateKey requires a string, buffer, json or object, got "{0}"',
            },
          ],
        },
        {
          name: "HDPublicKey",
          message: "Internal Error on HDPublicKey {0}",
          errors: [
            {
              name: "ArgumentIsPrivateExtended",
              message: "Argument is an extended private key: {0}",
            },
            {
              name: "InvalidDerivationArgument",
              message: "Invalid derivation argument: got {0}",
            },
            {
              name: "InvalidLength",
              message: 'Invalid length for xpubkey: got "{0}"',
            },
            {
              name: "InvalidPath",
              message:
                'Invalid derivation path, it should look like: "m/1/100", got "{0}"',
            },
            {
              name: "InvalidIndexCantDeriveHardened",
              message:
                "Invalid argument: creating a hardened path requires an HDPrivateKey",
            },
            {
              name: "MustSupplyArgument",
              message: "Must supply an argument to create a HDPublicKey",
            },
            {
              name: "UnrecognizedArgument",
              message:
                "Invalid argument for creation, must be string, json, buffer, or object",
            },
          ],
        },
      ];
    },
    7073: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(7074),
          i = function (e) {
            if ("string" !== typeof e)
              throw new Error("Input should be a string");
            var r;
            let i = n.bech32.fromWords,
              o = s.BECH32;
            try {
              r = n.bech32.decode(e);
            } catch (u) {
              if (!(u.message.indexOf("Invalid checksum") > -1)) throw u;
              ((r = n.bech32m.decode(e)),
                (o = s.BECH32M),
                (i = n.bech32m.fromWords));
            }
            const a = r.words[0];
            if (a >= 1 && o !== s.BECH32M)
              throw new Error(
                "Version 1+ witness address must use Bech32m checksum",
              );
            return {
              prefix: r.prefix,
              data: t.from(i(r.words.slice(1))),
              version: a,
            };
          },
          o = function (e, t, r, i) {
            if ("string" !== typeof e)
              throw new Error("Prefix should be a string");
            if ("number" !== typeof t)
              throw new Error("version should be a number");
            if (
              (i && "string" == typeof i && (i = s[i.toUpperCase()] || -1),
              i && i != s.BECH32 && i != s.BECH32M)
            )
              throw new Error("Invalid encoding specified");
            let o = i == s.BECH32M ? n.bech32m : n.bech32,
              a = o.toWords(r);
            return (a.unshift(t), o.encode(e, a));
          };
        const s = { BECH32: 1, BECH32M: 2 };
        e.exports = { decode: i, encode: o, encodings: s };
      }).call(this, r(2).Buffer);
    },
    7076: function (e, t, r) {
      const n = r(7077);
      ((n.check = r(4615)),
        (n.convert = r(4099)),
        (n.math = r(4614)),
        (n.muSig = r(7078)),
        (n.taproot = r(7079)),
        (e.exports = n));
    },
    7077: function (e, t, r) {
      const BigInteger = r(2802),
        n = r(46).Buffer,
        i = r(2975),
        o = i.getCurveByName("secp256k1"),
        s = r(4614),
        a = r(4615),
        u = r(4099),
        f = n.concat,
        h = o.G,
        c = (o.p, o.n),
        l = BigInteger.ZERO;
      function p(e, t, r) {
        (a.checkSignParams(e, t),
          (e = "string" == typeof e ? BigInteger.fromHex(e) : e));
        const n = h.multiply(e),
          i = u.intToBuffer(n.affineX),
          o = s.getEvenKey(n, e);
        let l;
        if (r) {
          a.checkAux(r);
          const e = u.intToBuffer(
              o.xor(u.bufferToInt(s.taggedHash("BIP0340/aux", r))),
            ),
            n = s.taggedHash("BIP0340/nonce", f([e, i, t]));
          l = u.bufferToInt(n).mod(c);
        } else l = s.deterministicGetK0(o, i, t);
        if (0 === l.signum()) throw new Error("kPrime is zero");
        const p = h.multiply(l),
          d = s.getEvenKey(p, l),
          m = u.intToBuffer(p.affineX),
          g = s.getE(m, i, t);
        return f([m, u.intToBuffer(d.add(g.multiply(o)).mod(c))]);
      }
      function d(e, t, r) {
        a.checkVerifyParams(e, t, r);
        const n = s.liftX(e),
          i = u.intToBuffer(n.affineX),
          o = u.bufferToInt(r.slice(0, 32)),
          f = u.bufferToInt(r.slice(32, 64));
        a.checkSignatureInput(o, f);
        const h = s.getE(u.intToBuffer(o), i, t),
          c = s.getR(f, h, n);
        if (c.curve.isInfinity(c) || !s.isEven(c) || !c.affineX.equals(o))
          throw new Error("signature verification failed");
      }
      function m(e, t, r) {
        a.checkBatchVerifyParams(e, t, r);
        let n = l,
          i = null;
        for (let o = 0; o < e.length; o++) {
          const f = s.liftX(e[o]),
            h = u.intToBuffer(f.affineX),
            c = u.bufferToInt(r[o].slice(0, 32)),
            l = u.bufferToInt(r[o].slice(32, 64));
          a.checkSignatureInput(c, l);
          const p = s.getE(u.intToBuffer(c), h, t[o]),
            d = s.liftX(r[o].slice(0, 32));
          if (0 === o) ((n = n.add(l)), (i = d), (i = i.add(f.multiply(p))));
          else {
            const e = s.randomA();
            ((n = n.add(e.multiply(l))),
              (i = i.add(d.multiply(e))),
              (i = i.add(f.multiply(e.multiply(p)))));
          }
        }
        if (!h.multiply(n).equals(i))
          throw new Error("signature verification failed");
      }
      e.exports = { sign: p, verify: d, batchVerify: m };
    },
    7078: function (e, t, r) {
      const n = r(46).Buffer,
        i = r(2975),
        o = i.getCurveByName("secp256k1"),
        s = r(4614),
        a = r(4615),
        u = r(4099),
        f = n.concat,
        h = o.G,
        c = o.n,
        l = u.hash(n.from("MuSig coefficient"));
      function p(e) {
        return (a.checkPubKeyArr(e), u.hash(f(e)));
      }
      function d(e, t) {
        const r = n.alloc(4);
        r.writeUInt32LE(t);
        const i = f([l, l, e, r]);
        return u.bufferToInt(u.hash(i)).mod(c);
      }
      function m(e, t) {
        const r = t || p(e);
        let n = null;
        for (let i = 0; i < e.length; i++) {
          const t = s.liftX(e[i]),
            o = d(r, i),
            a = t.multiply(o);
          n = null === n ? a : n.add(a);
        }
        return n;
      }
      function g(e, t, r, n, i, o, l) {
        a.checkSessionParams(e, t, r, n, o);
        const p = {
            sessionId: e,
            message: r,
            pubKeyCombined: n,
            pkParity: i,
            ell: o,
            idx: l,
          },
          m = d(o, l);
        ((p.secretKey = t.multiply(m).mod(c)),
          (p.ownKeyParity = s.isEven(h.multiply(t))),
          p.pkParity !== p.ownKeyParity &&
            (p.secretKey = c.subtract(p.secretKey)));
        const g = f([e, r, p.pubKeyCombined, u.intToBuffer(t)]);
        ((p.secretNonce = u.bufferToInt(u.hash(g))),
          a.checkRange("secretNonce", p.secretNonce));
        const y = h.multiply(p.secretNonce);
        return (
          (p.nonce = u.intToBuffer(y.affineX)),
          (p.nonceParity = s.isEven(y)),
          (p.commitment = u.hash(p.nonce)),
          p
        );
      }
      function y(e, t) {
        a.checkNonceArr(t);
        let r = s.liftX(t[0]);
        for (let n = 1; n < t.length; n++) r = r.add(s.liftX(t[n]));
        return (
          (e.combinedNonceParity = s.isEven(r)),
          u.intToBuffer(r.affineX)
        );
      }
      function v(e, t, r, n) {
        const i = s.getE(r, n, t),
          o = e.secretKey;
        let a = e.secretNonce;
        return (
          e.nonceParity !== e.combinedNonceParity && (a = c.subtract(a)),
          o.multiply(i).add(a).mod(c)
        );
      }
      function b(e, t, r, n, i, o) {
        let a = s.getE(r, e.pubKeyCombined, e.message);
        const u = d(e.ell, n),
          f = s.liftX(i),
          h = s.liftX(o);
        e.pkParity || (a = c.subtract(a));
        let l = s.getR(t, a.multiply(u).mod(c), f);
        e.combinedNonceParity && (l = l.negate());
        const p = l.add(h);
        if (!p.curve.isInfinity(p))
          throw new Error("partial signature verification failed");
      }
      function w(e, t) {
        const r = s.liftX(e);
        a.checkArray("partialSigs", t);
        const n = u.intToBuffer(r.affineX);
        let i = t[0];
        for (let o = 1; o < t.length; o++) i = i.add(t[o]).mod(c);
        return f([n, u.intToBuffer(i)]);
      }
      e.exports = {
        computeEll: p,
        computeCoefficient: d,
        pubKeyCombine: m,
        sessionInitialize: g,
        sessionNonceCombine: y,
        partialSign: v,
        partialSigVerify: b,
        partialSigCombine: w,
      };
    },
    7079: function (e, t, r) {
      const n = r(46).Buffer,
        i = r(2975),
        o = i.getCurveByName("secp256k1"),
        s = r(4614),
        a = r(4099),
        u = n.concat,
        f = o.G;
      function h(e, t) {
        t || (t = []);
        const r = c(t),
          n = a.intToBuffer(e.affineX),
          i = s.liftX(n),
          o = a.bufferToInt(s.taggedHash("TapTweak", u([n, r]))),
          h = i.add(f.multiply(o));
        return a.intToBuffer(h.affineX);
      }
      function c(e) {
        let t = n.alloc(32, 0);
        return e && 0 !== e.length ? t : new n(0);
      }
      e.exports = { taprootConstruct: h };
    },
    7084: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(3136),
          i = r(3410),
          o = r(3046),
          s = function e(r) {
            if (!(this instanceof e)) return new e(r);
            if (t.isBuffer(r)) this.buf = r;
            else if ("number" === typeof r) {
              var n = r;
              this.fromNumber(n);
            } else if (r instanceof o) {
              var i = r;
              this.fromBN(i);
            } else if (r) {
              var s = r;
              this.set(s);
            }
          };
        ((s.prototype.set = function (e) {
          return ((this.buf = e.buf || this.buf), this);
        }),
          (s.prototype.fromString = function (e) {
            return (this.set({ buf: t.from(e, "hex") }), this);
          }),
          (s.prototype.toString = function () {
            return this.buf.toString("hex");
          }),
          (s.prototype.fromBuffer = function (e) {
            return ((this.buf = e), this);
          }),
          (s.prototype.fromBufferReader = function (e) {
            return ((this.buf = e.readVarintBuf()), this);
          }),
          (s.prototype.fromBN = function (e) {
            return ((this.buf = n().writeVarintBN(e).concat()), this);
          }),
          (s.prototype.fromNumber = function (e) {
            return ((this.buf = n().writeVarintNum(e).concat()), this);
          }),
          (s.prototype.toBuffer = function () {
            return this.buf;
          }),
          (s.prototype.toBN = function () {
            return i(this.buf).readVarintBN();
          }),
          (s.prototype.toNumber = function () {
            return i(this.buf).readVarintNum();
          }),
          (e.exports = s));
      }).call(this, r(2).Buffer);
    },
    7085: function (e, t, r) {
      ((e.exports = r(7086)),
        (e.exports.BlockHeader = r(4619)),
        (e.exports.MerkleBlock = r(5859)));
    },
    7086: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(2852),
          i = r(4619),
          o = r(3046),
          s = r(2936),
          a = r(3410),
          u = r(3136),
          f = r(3047),
          h = r(4613),
          c = r(2897);
        function Block(e) {
          return this instanceof Block
            ? (n.extend(this, Block._from(e)), this)
            : new Block(e);
        }
        ((Block.MAX_BLOCK_SIZE = 1e6),
          (Block._from = function (e) {
            var t = {};
            if (s.isBuffer(e)) t = Block._fromBufferReader(a(e));
            else {
              if (!n.isObject(e))
                throw new TypeError("Unrecognized argument for Block");
              t = Block._fromObject(e);
            }
            return t;
          }),
          (Block._fromObject = function (e) {
            var t = [];
            e.transactions.forEach(function (e) {
              e instanceof h ? t.push(e) : t.push(h().fromObject(e));
            });
            var r = { header: i.fromObject(e.header), transactions: t };
            return r;
          }),
          (Block.fromObject = function (e) {
            var t = Block._fromObject(e);
            return new Block(t);
          }),
          (Block._fromBufferReader = function (e) {
            var t = {};
            (c.checkState(!e.finished(), "No block data received"),
              (t.header = i.fromBufferReader(e)));
            var r = e.readVarintNum();
            t.transactions = [];
            for (var n = 0; n < r; n++)
              t.transactions.push(h().fromBufferReader(e));
            return t;
          }),
          (Block.fromBufferReader = function (e) {
            c.checkArgument(e, "br is required");
            var t = Block._fromBufferReader(e);
            return new Block(t);
          }),
          (Block.fromBuffer = function (e) {
            return Block.fromBufferReader(new a(e));
          }),
          (Block.fromString = function (e) {
            var r = t.from(e, "hex");
            return Block.fromBuffer(r);
          }),
          (Block.fromRawBlock = function (e) {
            s.isBuffer(e) || (e = t.from(e, "binary"));
            var r = a(e);
            r.pos = Block.Values.START_OF_BLOCK;
            var n = Block._fromBufferReader(r);
            return new Block(n);
          }),
          (Block.prototype.toObject = Block.prototype.toJSON =
            function () {
              var e = [];
              return (
                this.transactions.forEach(function (t) {
                  e.push(t.toObject());
                }),
                { header: this.header.toObject(), transactions: e }
              );
            }),
          (Block.prototype.toBuffer = function () {
            return this.toBufferWriter().concat();
          }),
          (Block.prototype.toString = function () {
            return this.toBuffer().toString("hex");
          }),
          (Block.prototype.toBufferWriter = function (e) {
            (e || (e = new u()),
              e.write(this.header.toBuffer()),
              e.writeVarintNum(this.transactions.length));
            for (var t = 0; t < this.transactions.length; t++)
              this.transactions[t].toBufferWriter(e);
            return e;
          }),
          (Block.prototype.getTransactionHashes = function () {
            var e = [];
            if (0 === this.transactions.length) return [Block.Values.NULL_HASH];
            for (var t = 0; t < this.transactions.length; t++)
              e.push(this.transactions[t]._getHash());
            return e;
          }),
          (Block.prototype.getMerkleTree = function () {
            for (
              var e = this.getTransactionHashes(),
                r = 0,
                n = this.transactions.length;
              n > 1;
              n = Math.floor((n + 1) / 2)
            ) {
              for (var i = 0; i < n; i += 2) {
                var o = Math.min(i + 1, n - 1),
                  s = t.concat([e[r + i], e[r + o]]);
                e.push(f.sha256sha256(s));
              }
              r += n;
            }
            return e;
          }),
          (Block.prototype.getMerkleRoot = function () {
            var e = this.getMerkleTree();
            return e[e.length - 1];
          }),
          (Block.prototype.validMerkleRoot = function () {
            var e = new o(this.header.merkleRoot.toString("hex"), "hex"),
              t = new o(this.getMerkleRoot().toString("hex"), "hex");
            return 0 === e.cmp(t);
          }),
          (Block.prototype._getHash = function () {
            return this.header._getHash();
          }));
        var l = {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return (this._id || (this._id = this.header.id), this._id);
          },
          set: n.noop,
        };
        (Object.defineProperty(Block.prototype, "id", l),
          Object.defineProperty(Block.prototype, "hash", l),
          (Block.prototype.inspect = function () {
            return "<Block " + this.id + ">";
          }),
          (Block.Values = {
            START_OF_BLOCK: 8,
            NULL_HASH: t.from(
              "0000000000000000000000000000000000000000000000000000000000000000",
              "hex",
            ),
          }),
          (e.exports = Block));
      }).call(this, r(2).Buffer);
    },
    7087: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(2852),
          i = r(4097),
          o = r(3366),
          s = r(3367),
          a = r(3136),
          u = r(4611),
          f = r(3168),
          h = r(3047).sha256sha256,
          c = r(2990),
          l = r(2897);
        function p(e) {
          return this instanceof p
            ? (l.checkArgument(
                n.isString(e),
                "First argument should be a string",
              ),
              (this.message = e),
              this)
            : new p(e);
        }
        ((p.MAGIC_BYTES = t.from("Bitcoin Signed Message:\n")),
          (p.prototype.magicHash = function () {
            var e = a.varintBufNum(p.MAGIC_BYTES.length),
              r = t.from(this.message),
              n = a.varintBufNum(r.length),
              i = t.concat([e, p.MAGIC_BYTES, n, r]),
              o = h(i);
            return o;
          }),
          (p.prototype._sign = function (e) {
            l.checkArgument(
              e instanceof i,
              "First argument should be an instance of PrivateKey",
            );
            var t = this.magicHash(),
              r = new u();
            return (
              (r.hashbuf = t),
              (r.privkey = e),
              (r.pubkey = e.toPublicKey()),
              r.signRandomK(),
              r.calci(),
              r.sig
            );
          }),
          (p.prototype.sign = function (e) {
            var t = this._sign(e);
            return t.toCompact().toString("base64");
          }),
          (p.prototype._verify = function (e, t) {
            (l.checkArgument(
              e instanceof o,
              "First argument should be an instance of PublicKey",
            ),
              l.checkArgument(
                t instanceof f,
                "Second argument should be an instance of Signature",
              ));
            var r = this.magicHash(),
              n = u.verify(r, t, e);
            return (n || (this.error = "The signature was invalid"), n);
          }),
          (p.prototype.verify = function (e, r) {
            (l.checkArgument(e),
              l.checkArgument(r && n.isString(r)),
              n.isString(e) && (e = s.fromString(e)));
            var i = f.fromCompact(t.from(r, "base64")),
              o = new u();
            ((o.hashbuf = this.magicHash()), (o.sig = i));
            var a = o.toPublicKey(),
              h = s.fromPublicKey(a, e.network);
            return e.toString() !== h.toString()
              ? ((this.error =
                  "The signature did not match the message digest"),
                !1)
              : this._verify(a, i);
          }),
          (p.prototype.recoverPublicKey = function (e, r) {
            (l.checkArgument(e),
              l.checkArgument(r && n.isString(r)),
              n.isString(e) && (e = s.fromString(e)));
            var i = f.fromCompact(t.from(r, "base64")),
              o = new u();
            ((o.hashbuf = this.magicHash()), (o.sig = i));
            var a = o.toPublicKey(),
              h = s.fromPublicKey(a, e.network);
            return (
              e.toString() !== h.toString() &&
                (this.error = "The signature did not match the message digest"),
              a.toString()
            );
          }),
          (p.fromString = function (e) {
            return new p(e);
          }),
          (p.fromJSON = function (e) {
            return (c.isValidJSON(e) && (e = JSON.parse(e)), new p(e.message));
          }),
          (p.prototype.toObject = function () {
            return { message: this.message };
          }),
          (p.prototype.toJSON = function () {
            return JSON.stringify(this.toObject());
          }),
          (p.prototype.toString = function () {
            return this.message;
          }),
          (p.prototype.inspect = function () {
            return "<Message: " + this.toString() + ">";
          }),
          (e.exports = p));
        r(3169);
      }).call(this, r(2).Buffer);
    },
  },
]);
