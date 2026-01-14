(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [89],
  {
    1331: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "BigNumber", {
          enumerable: !0,
          get: function () {
            return i.BigNumber;
          },
        }),
        Object.defineProperty(r, "FixedFormat", {
          enumerable: !0,
          get: function () {
            return n.FixedFormat;
          },
        }),
        Object.defineProperty(r, "FixedNumber", {
          enumerable: !0,
          get: function () {
            return n.FixedNumber;
          },
        }),
        Object.defineProperty(r, "_base16To36", {
          enumerable: !0,
          get: function () {
            return i._base16To36;
          },
        }),
        Object.defineProperty(r, "_base36To16", {
          enumerable: !0,
          get: function () {
            return i._base36To16;
          },
        }),
        Object.defineProperty(r, "formatFixed", {
          enumerable: !0,
          get: function () {
            return n.formatFixed;
          },
        }),
        Object.defineProperty(r, "parseFixed", {
          enumerable: !0,
          get: function () {
            return n.parseFixed;
          },
        }));
      var i = e(488),
        n = e(1336);
    },
    1332: function (t, r, e) {
      (function (t) {
        (function (t, r) {
          "use strict";
          function i(t, r) {
            if (!t) throw new Error(r || "Assertion failed");
          }
          function n(t, r) {
            t.super_ = r;
            var e = function () {};
            ((e.prototype = r.prototype),
              (t.prototype = new e()),
              (t.prototype.constructor = t));
          }
          function o(t, r, e) {
            if (o.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== r && "be" !== r) || ((e = r), (r = 10)),
                this._init(t || 0, r || 10, e || "be")));
          }
          var s;
          ("object" === typeof t ? (t.exports = o) : (r.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : e(1333).Buffer;
          } catch (I) {}
          function u(t, r) {
            var e = t.charCodeAt(r);
            return e >= 48 && e <= 57
              ? e - 48
              : e >= 65 && e <= 70
                ? e - 55
                : e >= 97 && e <= 102
                  ? e - 87
                  : void i(!1, "Invalid character in " + t);
          }
          function h(t, r, e) {
            var i = u(t, e);
            return (e - 1 >= r && (i |= u(t, e - 1) << 4), i);
          }
          function a(t, r, e, n) {
            for (
              var o = 0, s = 0, u = Math.min(t.length, e), h = r;
              h < u;
              h++
            ) {
              var a = t.charCodeAt(h) - 48;
              ((o *= n),
                (s = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a),
                i(a >= 0 && s < n, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function l(t, r) {
            ((t.words = r.words),
              (t.length = r.length),
              (t.negative = r.negative),
              (t.red = r.red));
          }
          if (
            ((o.isBN = function (t) {
              return (
                t instanceof o ||
                (null !== t &&
                  "object" === typeof t &&
                  t.constructor.wordSize === o.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (o.max = function (t, r) {
              return t.cmp(r) > 0 ? t : r;
            }),
            (o.min = function (t, r) {
              return t.cmp(r) < 0 ? t : r;
            }),
            (o.prototype._init = function (t, r, e) {
              if ("number" === typeof t) return this._initNumber(t, r, e);
              if ("object" === typeof t) return this._initArray(t, r, e);
              ("hex" === r && (r = 16),
                i(r === (0 | r) && r >= 2 && r <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var n = 0;
              ("-" === t[0] && (n++, (this.negative = 1)),
                n < t.length &&
                  (16 === r
                    ? this._parseHex(t, n, e)
                    : (this._parseBase(t, r, n),
                      "le" === e && this._initArray(this.toArray(), r, e))));
            }),
            (o.prototype._initNumber = function (t, r, e) {
              (t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                    ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                      (this.length = 2))
                    : (i(t < 9007199254740992),
                      (this.words = [
                        67108863 & t,
                        (t / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === e && this._initArray(this.toArray(), r, e));
            }),
            (o.prototype._initArray = function (t, r, e) {
              if ((i("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var o,
                s,
                u = 0;
              if ("be" === e)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                  ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[o] |= (s << u) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - u)) & 67108863),
                    (u += 24),
                    u >= 26 && ((u -= 26), o++));
              else if ("le" === e)
                for (n = 0, o = 0; n < t.length; n += 3)
                  ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[o] |= (s << u) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - u)) & 67108863),
                    (u += 24),
                    u >= 26 && ((u -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, r, e) {
              ((this.length = Math.ceil((t.length - r) / 6)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var n,
                o = 0,
                s = 0;
              if ("be" === e)
                for (i = t.length - 1; i >= r; i -= 2)
                  ((n = h(t, r, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var u = t.length - r;
                for (i = u % 2 === 0 ? r + 1 : r; i < t.length; i += 2)
                  ((n = h(t, r, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (t, r, e) {
              ((this.words = [0]), (this.length = 1));
              for (var i = 0, n = 1; n <= 67108863; n *= r) i++;
              (i--, (n = (n / r) | 0));
              for (
                var o = t.length - e,
                  s = o % i,
                  u = Math.min(o, o - s) + e,
                  h = 0,
                  l = e;
                l < u;
                l += i
              )
                ((h = a(t, l, l + i, r)),
                  this.imuln(n),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              if (0 !== s) {
                var f = 1;
                for (h = a(t, l, t.length, r), l = 0; l < s; l++) f *= r;
                (this.imuln(f),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (o.prototype._move = function (t) {
              l(t, this);
            }),
            (o.prototype.clone = function () {
              var t = new o(null);
              return (this.copy(t), t);
            }),
            (o.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype._strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = f;
            } catch (I) {
              o.prototype.inspect = f;
            }
          else o.prototype.inspect = f;
          function f() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var g = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            m = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            c = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (t, r) {
            var e;
            if (((t = t || 10), (r = 0 | r || 1), 16 === t || "hex" === t)) {
              e = "";
              for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var u = this.words[s],
                  h = (16777215 & ((u << n) | o)).toString(16);
                ((o = (u >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (e =
                    0 !== o || s !== this.length - 1
                      ? g[6 - h.length] + h + e
                      : h + e));
              }
              0 !== o && (e = o.toString(16) + e);
              while (e.length % r !== 0) e = "0" + e;
              return (0 !== this.negative && (e = "-" + e), e);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var a = m[t],
                l = c[t];
              e = "";
              var f = this.clone();
              f.negative = 0;
              while (!f.isZero()) {
                var d = f.modrn(l).toString(t);
                ((f = f.idivn(l)),
                  (e = f.isZero() ? d + e : g[a - d.length] + d + e));
              }
              this.isZero() && (e = "0" + e);
              while (e.length % r !== 0) e = "0" + e;
              return (0 !== this.negative && (e = "-" + e), e);
            }
            i(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (t += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      i(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (o.prototype.toBuffer = function (t, r) {
                return this.toArrayLike(s, t, r);
              }),
            (o.prototype.toArray = function (t, r) {
              return this.toArrayLike(Array, t, r);
            }));
          var d = function (t, r) {
            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r);
          };
          function v(t) {
            for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
              var i = (e / 26) | 0,
                n = e % 26;
              r[e] = (t.words[i] >>> n) & 1;
            }
            return r;
          }
          function p(t, r, e) {
            e.negative = r.negative ^ t.negative;
            var i = (t.length + r.length) | 0;
            ((e.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | r.words[0],
              s = n * o,
              u = 67108863 & s,
              h = (s / 67108864) | 0;
            e.words[0] = u;
            for (var a = 1; a < i; a++) {
              for (
                var l = h >>> 26,
                  f = 67108863 & h,
                  g = Math.min(a, r.length - 1),
                  m = Math.max(0, a - t.length + 1);
                m <= g;
                m++
              ) {
                var c = (a - m) | 0;
                ((n = 0 | t.words[c]),
                  (o = 0 | r.words[m]),
                  (s = n * o + f),
                  (l += (s / 67108864) | 0),
                  (f = 67108863 & s));
              }
              ((e.words[a] = 0 | f), (h = 0 | l));
            }
            return (0 !== h ? (e.words[a] = 0 | h) : e.length--, e._strip());
          }
          ((o.prototype.toArrayLike = function (t, r, e) {
            this._strip();
            var n = this.byteLength(),
              o = e || Math.max(1, n);
            (i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"));
            var s = d(t, o),
              u = "le" === r ? "LE" : "BE";
            return (this["_toArrayLike" + u](s, n), s);
          }),
            (o.prototype._toArrayLikeLE = function (t, r) {
              for (var e = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                var s = (this.words[n] << o) | i;
                ((t[e++] = 255 & s),
                  e < t.length && (t[e++] = (s >> 8) & 255),
                  e < t.length && (t[e++] = (s >> 16) & 255),
                  6 === o
                    ? (e < t.length && (t[e++] = (s >> 24) & 255),
                      (i = 0),
                      (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (e < t.length) {
                t[e++] = i;
                while (e < t.length) t[e++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (t, r) {
              for (
                var e = t.length - 1, i = 0, n = 0, o = 0;
                n < this.length;
                n++
              ) {
                var s = (this.words[n] << o) | i;
                ((t[e--] = 255 & s),
                  e >= 0 && (t[e--] = (s >> 8) & 255),
                  e >= 0 && (t[e--] = (s >> 16) & 255),
                  6 === o
                    ? (e >= 0 && (t[e--] = (s >> 24) & 255), (i = 0), (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (e >= 0) {
                t[e--] = i;
                while (e >= 0) t[e--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var r = t,
                    e = 0;
                  return (
                    r >= 4096 && ((e += 13), (r >>>= 13)),
                    r >= 64 && ((e += 7), (r >>>= 7)),
                    r >= 8 && ((e += 4), (r >>>= 4)),
                    r >= 2 && ((e += 2), (r >>>= 2)),
                    e + r
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var r = t,
                e = 0;
              return (
                0 === (8191 & r) && ((e += 13), (r >>>= 13)),
                0 === (127 & r) && ((e += 7), (r >>>= 7)),
                0 === (15 & r) && ((e += 4), (r >>>= 4)),
                0 === (3 & r) && ((e += 2), (r >>>= 2)),
                0 === (1 & r) && e++,
                e
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                r = this._countBits(t);
              return 26 * (this.length - 1) + r;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, r = 0; r < this.length; r++) {
                var e = this._zeroBits(this.words[r]);
                if (((t += e), 26 !== e)) break;
              }
              return t;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (o.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var r = 0; r < t.length; r++)
                this.words[r] = this.words[r] | t.words[r];
              return this._strip();
            }),
            (o.prototype.ior = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuor(t));
            }),
            (o.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (o.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (o.prototype.iuand = function (t) {
              var r;
              r = this.length > t.length ? t : this;
              for (var e = 0; e < r.length; e++)
                this.words[e] = this.words[e] & t.words[e];
              return ((this.length = r.length), this._strip());
            }),
            (o.prototype.iand = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuand(t));
            }),
            (o.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (o.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (t) {
              var r, e;
              this.length > t.length
                ? ((r = this), (e = t))
                : ((r = t), (e = this));
              for (var i = 0; i < e.length; i++)
                this.words[i] = r.words[i] ^ e.words[i];
              if (this !== r)
                for (; i < r.length; i++) this.words[i] = r.words[i];
              return ((this.length = r.length), this._strip());
            }),
            (o.prototype.ixor = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuxor(t));
            }),
            (o.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (o.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (t) {
              i("number" === typeof t && t >= 0);
              var r = 0 | Math.ceil(t / 26),
                e = t % 26;
              (this._expand(r), e > 0 && r--);
              for (var n = 0; n < r; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                e > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - e))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, r) {
              i("number" === typeof t && t >= 0);
              var e = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(e + 1),
                (this.words[e] = r
                  ? this.words[e] | (1 << n)
                  : this.words[e] & ~(1 << n)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var r, e, i;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (r = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (r = this.isub(t)),
                  (t.negative = 1),
                  r._normSign()
                );
              this.length > t.length
                ? ((e = this), (i = t))
                : ((e = t), (i = this));
              for (var n = 0, o = 0; o < i.length; o++)
                ((r = (0 | e.words[o]) + (0 | i.words[o]) + n),
                  (this.words[o] = 67108863 & r),
                  (n = r >>> 26));
              for (; 0 !== n && o < e.length; o++)
                ((r = (0 | e.words[o]) + n),
                  (this.words[o] = 67108863 & r),
                  (n = r >>> 26));
              if (((this.length = e.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (e !== this)
                for (; o < e.length; o++) this.words[o] = e.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var r;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (r = this.sub(t)), (t.negative ^= 1), r)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (r = t.sub(this)),
                    (this.negative = 1),
                    r)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var r = this.iadd(t);
                return ((t.negative = 1), r._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var e,
                i,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((e = this), (i = t)) : ((e = t), (i = this));
              for (var o = 0, s = 0; s < i.length; s++)
                ((r = (0 | e.words[s]) - (0 | i.words[s]) + o),
                  (o = r >> 26),
                  (this.words[s] = 67108863 & r));
              for (; 0 !== o && s < e.length; s++)
                ((r = (0 | e.words[s]) + o),
                  (o = r >> 26),
                  (this.words[s] = 67108863 & r));
              if (0 === o && s < e.length && e !== this)
                for (; s < e.length; s++) this.words[s] = e.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                e !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var w = function (t, r, e) {
            var i,
              n,
              o,
              s = t.words,
              u = r.words,
              h = e.words,
              a = 0,
              l = 0 | s[0],
              f = 8191 & l,
              g = l >>> 13,
              m = 0 | s[1],
              c = 8191 & m,
              d = m >>> 13,
              v = 0 | s[2],
              p = 8191 & v,
              w = v >>> 13,
              y = 0 | s[3],
              M = 8191 & y,
              E = y >>> 13,
              b = 0 | s[4],
              N = 8191 & b,
              _ = b >>> 13,
              A = 0 | s[5],
              R = 8191 & A,
              x = A >>> 13,
              S = 0 | s[6],
              P = 8191 & S,
              I = S >>> 13,
              O = 0 | s[7],
              U = 8191 & O,
              L = O >>> 13,
              T = 0 | s[8],
              C = 8191 & T,
              F = T >>> 13,
              D = 0 | s[9],
              k = 8191 & D,
              B = D >>> 13,
              j = 0 | u[0],
              G = 8191 & j,
              z = j >>> 13,
              W = 0 | u[1],
              Z = 8191 & W,
              X = W >>> 13,
              V = 0 | u[2],
              H = 8191 & V,
              q = V >>> 13,
              K = 0 | u[3],
              J = 8191 & K,
              $ = K >>> 13,
              Q = 0 | u[4],
              Y = 8191 & Q,
              tt = Q >>> 13,
              rt = 0 | u[5],
              et = 8191 & rt,
              it = rt >>> 13,
              nt = 0 | u[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              ut = 0 | u[7],
              ht = 8191 & ut,
              at = ut >>> 13,
              lt = 0 | u[8],
              ft = 8191 & lt,
              gt = lt >>> 13,
              mt = 0 | u[9],
              ct = 8191 & mt,
              dt = mt >>> 13;
            ((e.negative = t.negative ^ r.negative),
              (e.length = 19),
              (i = Math.imul(f, G)),
              (n = Math.imul(f, z)),
              (n = (n + Math.imul(g, G)) | 0),
              (o = Math.imul(g, z)));
            var vt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(c, G)),
              (n = Math.imul(c, z)),
              (n = (n + Math.imul(d, G)) | 0),
              (o = Math.imul(d, z)),
              (i = (i + Math.imul(f, Z)) | 0),
              (n = (n + Math.imul(f, X)) | 0),
              (n = (n + Math.imul(g, Z)) | 0),
              (o = (o + Math.imul(g, X)) | 0));
            var pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (pt >>> 26)) | 0),
              (pt &= 67108863),
              (i = Math.imul(p, G)),
              (n = Math.imul(p, z)),
              (n = (n + Math.imul(w, G)) | 0),
              (o = Math.imul(w, z)),
              (i = (i + Math.imul(c, Z)) | 0),
              (n = (n + Math.imul(c, X)) | 0),
              (n = (n + Math.imul(d, Z)) | 0),
              (o = (o + Math.imul(d, X)) | 0),
              (i = (i + Math.imul(f, H)) | 0),
              (n = (n + Math.imul(f, q)) | 0),
              (n = (n + Math.imul(g, H)) | 0),
              (o = (o + Math.imul(g, q)) | 0));
            var wt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(M, G)),
              (n = Math.imul(M, z)),
              (n = (n + Math.imul(E, G)) | 0),
              (o = Math.imul(E, z)),
              (i = (i + Math.imul(p, Z)) | 0),
              (n = (n + Math.imul(p, X)) | 0),
              (n = (n + Math.imul(w, Z)) | 0),
              (o = (o + Math.imul(w, X)) | 0),
              (i = (i + Math.imul(c, H)) | 0),
              (n = (n + Math.imul(c, q)) | 0),
              (n = (n + Math.imul(d, H)) | 0),
              (o = (o + Math.imul(d, q)) | 0),
              (i = (i + Math.imul(f, J)) | 0),
              (n = (n + Math.imul(f, $)) | 0),
              (n = (n + Math.imul(g, J)) | 0),
              (o = (o + Math.imul(g, $)) | 0));
            var yt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(N, G)),
              (n = Math.imul(N, z)),
              (n = (n + Math.imul(_, G)) | 0),
              (o = Math.imul(_, z)),
              (i = (i + Math.imul(M, Z)) | 0),
              (n = (n + Math.imul(M, X)) | 0),
              (n = (n + Math.imul(E, Z)) | 0),
              (o = (o + Math.imul(E, X)) | 0),
              (i = (i + Math.imul(p, H)) | 0),
              (n = (n + Math.imul(p, q)) | 0),
              (n = (n + Math.imul(w, H)) | 0),
              (o = (o + Math.imul(w, q)) | 0),
              (i = (i + Math.imul(c, J)) | 0),
              (n = (n + Math.imul(c, $)) | 0),
              (n = (n + Math.imul(d, J)) | 0),
              (o = (o + Math.imul(d, $)) | 0),
              (i = (i + Math.imul(f, Y)) | 0),
              (n = (n + Math.imul(f, tt)) | 0),
              (n = (n + Math.imul(g, Y)) | 0),
              (o = (o + Math.imul(g, tt)) | 0));
            var Mt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(R, G)),
              (n = Math.imul(R, z)),
              (n = (n + Math.imul(x, G)) | 0),
              (o = Math.imul(x, z)),
              (i = (i + Math.imul(N, Z)) | 0),
              (n = (n + Math.imul(N, X)) | 0),
              (n = (n + Math.imul(_, Z)) | 0),
              (o = (o + Math.imul(_, X)) | 0),
              (i = (i + Math.imul(M, H)) | 0),
              (n = (n + Math.imul(M, q)) | 0),
              (n = (n + Math.imul(E, H)) | 0),
              (o = (o + Math.imul(E, q)) | 0),
              (i = (i + Math.imul(p, J)) | 0),
              (n = (n + Math.imul(p, $)) | 0),
              (n = (n + Math.imul(w, J)) | 0),
              (o = (o + Math.imul(w, $)) | 0),
              (i = (i + Math.imul(c, Y)) | 0),
              (n = (n + Math.imul(c, tt)) | 0),
              (n = (n + Math.imul(d, Y)) | 0),
              (o = (o + Math.imul(d, tt)) | 0),
              (i = (i + Math.imul(f, et)) | 0),
              (n = (n + Math.imul(f, it)) | 0),
              (n = (n + Math.imul(g, et)) | 0),
              (o = (o + Math.imul(g, it)) | 0));
            var Et = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(P, G)),
              (n = Math.imul(P, z)),
              (n = (n + Math.imul(I, G)) | 0),
              (o = Math.imul(I, z)),
              (i = (i + Math.imul(R, Z)) | 0),
              (n = (n + Math.imul(R, X)) | 0),
              (n = (n + Math.imul(x, Z)) | 0),
              (o = (o + Math.imul(x, X)) | 0),
              (i = (i + Math.imul(N, H)) | 0),
              (n = (n + Math.imul(N, q)) | 0),
              (n = (n + Math.imul(_, H)) | 0),
              (o = (o + Math.imul(_, q)) | 0),
              (i = (i + Math.imul(M, J)) | 0),
              (n = (n + Math.imul(M, $)) | 0),
              (n = (n + Math.imul(E, J)) | 0),
              (o = (o + Math.imul(E, $)) | 0),
              (i = (i + Math.imul(p, Y)) | 0),
              (n = (n + Math.imul(p, tt)) | 0),
              (n = (n + Math.imul(w, Y)) | 0),
              (o = (o + Math.imul(w, tt)) | 0),
              (i = (i + Math.imul(c, et)) | 0),
              (n = (n + Math.imul(c, it)) | 0),
              (n = (n + Math.imul(d, et)) | 0),
              (o = (o + Math.imul(d, it)) | 0),
              (i = (i + Math.imul(f, ot)) | 0),
              (n = (n + Math.imul(f, st)) | 0),
              (n = (n + Math.imul(g, ot)) | 0),
              (o = (o + Math.imul(g, st)) | 0));
            var bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(U, G)),
              (n = Math.imul(U, z)),
              (n = (n + Math.imul(L, G)) | 0),
              (o = Math.imul(L, z)),
              (i = (i + Math.imul(P, Z)) | 0),
              (n = (n + Math.imul(P, X)) | 0),
              (n = (n + Math.imul(I, Z)) | 0),
              (o = (o + Math.imul(I, X)) | 0),
              (i = (i + Math.imul(R, H)) | 0),
              (n = (n + Math.imul(R, q)) | 0),
              (n = (n + Math.imul(x, H)) | 0),
              (o = (o + Math.imul(x, q)) | 0),
              (i = (i + Math.imul(N, J)) | 0),
              (n = (n + Math.imul(N, $)) | 0),
              (n = (n + Math.imul(_, J)) | 0),
              (o = (o + Math.imul(_, $)) | 0),
              (i = (i + Math.imul(M, Y)) | 0),
              (n = (n + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(E, Y)) | 0),
              (o = (o + Math.imul(E, tt)) | 0),
              (i = (i + Math.imul(p, et)) | 0),
              (n = (n + Math.imul(p, it)) | 0),
              (n = (n + Math.imul(w, et)) | 0),
              (o = (o + Math.imul(w, it)) | 0),
              (i = (i + Math.imul(c, ot)) | 0),
              (n = (n + Math.imul(c, st)) | 0),
              (n = (n + Math.imul(d, ot)) | 0),
              (o = (o + Math.imul(d, st)) | 0),
              (i = (i + Math.imul(f, ht)) | 0),
              (n = (n + Math.imul(f, at)) | 0),
              (n = (n + Math.imul(g, ht)) | 0),
              (o = (o + Math.imul(g, at)) | 0));
            var Nt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (i = Math.imul(C, G)),
              (n = Math.imul(C, z)),
              (n = (n + Math.imul(F, G)) | 0),
              (o = Math.imul(F, z)),
              (i = (i + Math.imul(U, Z)) | 0),
              (n = (n + Math.imul(U, X)) | 0),
              (n = (n + Math.imul(L, Z)) | 0),
              (o = (o + Math.imul(L, X)) | 0),
              (i = (i + Math.imul(P, H)) | 0),
              (n = (n + Math.imul(P, q)) | 0),
              (n = (n + Math.imul(I, H)) | 0),
              (o = (o + Math.imul(I, q)) | 0),
              (i = (i + Math.imul(R, J)) | 0),
              (n = (n + Math.imul(R, $)) | 0),
              (n = (n + Math.imul(x, J)) | 0),
              (o = (o + Math.imul(x, $)) | 0),
              (i = (i + Math.imul(N, Y)) | 0),
              (n = (n + Math.imul(N, tt)) | 0),
              (n = (n + Math.imul(_, Y)) | 0),
              (o = (o + Math.imul(_, tt)) | 0),
              (i = (i + Math.imul(M, et)) | 0),
              (n = (n + Math.imul(M, it)) | 0),
              (n = (n + Math.imul(E, et)) | 0),
              (o = (o + Math.imul(E, it)) | 0),
              (i = (i + Math.imul(p, ot)) | 0),
              (n = (n + Math.imul(p, st)) | 0),
              (n = (n + Math.imul(w, ot)) | 0),
              (o = (o + Math.imul(w, st)) | 0),
              (i = (i + Math.imul(c, ht)) | 0),
              (n = (n + Math.imul(c, at)) | 0),
              (n = (n + Math.imul(d, ht)) | 0),
              (o = (o + Math.imul(d, at)) | 0),
              (i = (i + Math.imul(f, ft)) | 0),
              (n = (n + Math.imul(f, gt)) | 0),
              (n = (n + Math.imul(g, ft)) | 0),
              (o = (o + Math.imul(g, gt)) | 0));
            var _t = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(k, G)),
              (n = Math.imul(k, z)),
              (n = (n + Math.imul(B, G)) | 0),
              (o = Math.imul(B, z)),
              (i = (i + Math.imul(C, Z)) | 0),
              (n = (n + Math.imul(C, X)) | 0),
              (n = (n + Math.imul(F, Z)) | 0),
              (o = (o + Math.imul(F, X)) | 0),
              (i = (i + Math.imul(U, H)) | 0),
              (n = (n + Math.imul(U, q)) | 0),
              (n = (n + Math.imul(L, H)) | 0),
              (o = (o + Math.imul(L, q)) | 0),
              (i = (i + Math.imul(P, J)) | 0),
              (n = (n + Math.imul(P, $)) | 0),
              (n = (n + Math.imul(I, J)) | 0),
              (o = (o + Math.imul(I, $)) | 0),
              (i = (i + Math.imul(R, Y)) | 0),
              (n = (n + Math.imul(R, tt)) | 0),
              (n = (n + Math.imul(x, Y)) | 0),
              (o = (o + Math.imul(x, tt)) | 0),
              (i = (i + Math.imul(N, et)) | 0),
              (n = (n + Math.imul(N, it)) | 0),
              (n = (n + Math.imul(_, et)) | 0),
              (o = (o + Math.imul(_, it)) | 0),
              (i = (i + Math.imul(M, ot)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(E, ot)) | 0),
              (o = (o + Math.imul(E, st)) | 0),
              (i = (i + Math.imul(p, ht)) | 0),
              (n = (n + Math.imul(p, at)) | 0),
              (n = (n + Math.imul(w, ht)) | 0),
              (o = (o + Math.imul(w, at)) | 0),
              (i = (i + Math.imul(c, ft)) | 0),
              (n = (n + Math.imul(c, gt)) | 0),
              (n = (n + Math.imul(d, ft)) | 0),
              (o = (o + Math.imul(d, gt)) | 0),
              (i = (i + Math.imul(f, ct)) | 0),
              (n = (n + Math.imul(f, dt)) | 0),
              (n = (n + Math.imul(g, ct)) | 0),
              (o = (o + Math.imul(g, dt)) | 0));
            var At = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(k, Z)),
              (n = Math.imul(k, X)),
              (n = (n + Math.imul(B, Z)) | 0),
              (o = Math.imul(B, X)),
              (i = (i + Math.imul(C, H)) | 0),
              (n = (n + Math.imul(C, q)) | 0),
              (n = (n + Math.imul(F, H)) | 0),
              (o = (o + Math.imul(F, q)) | 0),
              (i = (i + Math.imul(U, J)) | 0),
              (n = (n + Math.imul(U, $)) | 0),
              (n = (n + Math.imul(L, J)) | 0),
              (o = (o + Math.imul(L, $)) | 0),
              (i = (i + Math.imul(P, Y)) | 0),
              (n = (n + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(I, Y)) | 0),
              (o = (o + Math.imul(I, tt)) | 0),
              (i = (i + Math.imul(R, et)) | 0),
              (n = (n + Math.imul(R, it)) | 0),
              (n = (n + Math.imul(x, et)) | 0),
              (o = (o + Math.imul(x, it)) | 0),
              (i = (i + Math.imul(N, ot)) | 0),
              (n = (n + Math.imul(N, st)) | 0),
              (n = (n + Math.imul(_, ot)) | 0),
              (o = (o + Math.imul(_, st)) | 0),
              (i = (i + Math.imul(M, ht)) | 0),
              (n = (n + Math.imul(M, at)) | 0),
              (n = (n + Math.imul(E, ht)) | 0),
              (o = (o + Math.imul(E, at)) | 0),
              (i = (i + Math.imul(p, ft)) | 0),
              (n = (n + Math.imul(p, gt)) | 0),
              (n = (n + Math.imul(w, ft)) | 0),
              (o = (o + Math.imul(w, gt)) | 0),
              (i = (i + Math.imul(c, ct)) | 0),
              (n = (n + Math.imul(c, dt)) | 0),
              (n = (n + Math.imul(d, ct)) | 0),
              (o = (o + Math.imul(d, dt)) | 0));
            var Rt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(k, H)),
              (n = Math.imul(k, q)),
              (n = (n + Math.imul(B, H)) | 0),
              (o = Math.imul(B, q)),
              (i = (i + Math.imul(C, J)) | 0),
              (n = (n + Math.imul(C, $)) | 0),
              (n = (n + Math.imul(F, J)) | 0),
              (o = (o + Math.imul(F, $)) | 0),
              (i = (i + Math.imul(U, Y)) | 0),
              (n = (n + Math.imul(U, tt)) | 0),
              (n = (n + Math.imul(L, Y)) | 0),
              (o = (o + Math.imul(L, tt)) | 0),
              (i = (i + Math.imul(P, et)) | 0),
              (n = (n + Math.imul(P, it)) | 0),
              (n = (n + Math.imul(I, et)) | 0),
              (o = (o + Math.imul(I, it)) | 0),
              (i = (i + Math.imul(R, ot)) | 0),
              (n = (n + Math.imul(R, st)) | 0),
              (n = (n + Math.imul(x, ot)) | 0),
              (o = (o + Math.imul(x, st)) | 0),
              (i = (i + Math.imul(N, ht)) | 0),
              (n = (n + Math.imul(N, at)) | 0),
              (n = (n + Math.imul(_, ht)) | 0),
              (o = (o + Math.imul(_, at)) | 0),
              (i = (i + Math.imul(M, ft)) | 0),
              (n = (n + Math.imul(M, gt)) | 0),
              (n = (n + Math.imul(E, ft)) | 0),
              (o = (o + Math.imul(E, gt)) | 0),
              (i = (i + Math.imul(p, ct)) | 0),
              (n = (n + Math.imul(p, dt)) | 0),
              (n = (n + Math.imul(w, ct)) | 0),
              (o = (o + Math.imul(w, dt)) | 0));
            var xt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(k, J)),
              (n = Math.imul(k, $)),
              (n = (n + Math.imul(B, J)) | 0),
              (o = Math.imul(B, $)),
              (i = (i + Math.imul(C, Y)) | 0),
              (n = (n + Math.imul(C, tt)) | 0),
              (n = (n + Math.imul(F, Y)) | 0),
              (o = (o + Math.imul(F, tt)) | 0),
              (i = (i + Math.imul(U, et)) | 0),
              (n = (n + Math.imul(U, it)) | 0),
              (n = (n + Math.imul(L, et)) | 0),
              (o = (o + Math.imul(L, it)) | 0),
              (i = (i + Math.imul(P, ot)) | 0),
              (n = (n + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(I, ot)) | 0),
              (o = (o + Math.imul(I, st)) | 0),
              (i = (i + Math.imul(R, ht)) | 0),
              (n = (n + Math.imul(R, at)) | 0),
              (n = (n + Math.imul(x, ht)) | 0),
              (o = (o + Math.imul(x, at)) | 0),
              (i = (i + Math.imul(N, ft)) | 0),
              (n = (n + Math.imul(N, gt)) | 0),
              (n = (n + Math.imul(_, ft)) | 0),
              (o = (o + Math.imul(_, gt)) | 0),
              (i = (i + Math.imul(M, ct)) | 0),
              (n = (n + Math.imul(M, dt)) | 0),
              (n = (n + Math.imul(E, ct)) | 0),
              (o = (o + Math.imul(E, dt)) | 0));
            var St = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(k, Y)),
              (n = Math.imul(k, tt)),
              (n = (n + Math.imul(B, Y)) | 0),
              (o = Math.imul(B, tt)),
              (i = (i + Math.imul(C, et)) | 0),
              (n = (n + Math.imul(C, it)) | 0),
              (n = (n + Math.imul(F, et)) | 0),
              (o = (o + Math.imul(F, it)) | 0),
              (i = (i + Math.imul(U, ot)) | 0),
              (n = (n + Math.imul(U, st)) | 0),
              (n = (n + Math.imul(L, ot)) | 0),
              (o = (o + Math.imul(L, st)) | 0),
              (i = (i + Math.imul(P, ht)) | 0),
              (n = (n + Math.imul(P, at)) | 0),
              (n = (n + Math.imul(I, ht)) | 0),
              (o = (o + Math.imul(I, at)) | 0),
              (i = (i + Math.imul(R, ft)) | 0),
              (n = (n + Math.imul(R, gt)) | 0),
              (n = (n + Math.imul(x, ft)) | 0),
              (o = (o + Math.imul(x, gt)) | 0),
              (i = (i + Math.imul(N, ct)) | 0),
              (n = (n + Math.imul(N, dt)) | 0),
              (n = (n + Math.imul(_, ct)) | 0),
              (o = (o + Math.imul(_, dt)) | 0));
            var Pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(k, et)),
              (n = Math.imul(k, it)),
              (n = (n + Math.imul(B, et)) | 0),
              (o = Math.imul(B, it)),
              (i = (i + Math.imul(C, ot)) | 0),
              (n = (n + Math.imul(C, st)) | 0),
              (n = (n + Math.imul(F, ot)) | 0),
              (o = (o + Math.imul(F, st)) | 0),
              (i = (i + Math.imul(U, ht)) | 0),
              (n = (n + Math.imul(U, at)) | 0),
              (n = (n + Math.imul(L, ht)) | 0),
              (o = (o + Math.imul(L, at)) | 0),
              (i = (i + Math.imul(P, ft)) | 0),
              (n = (n + Math.imul(P, gt)) | 0),
              (n = (n + Math.imul(I, ft)) | 0),
              (o = (o + Math.imul(I, gt)) | 0),
              (i = (i + Math.imul(R, ct)) | 0),
              (n = (n + Math.imul(R, dt)) | 0),
              (n = (n + Math.imul(x, ct)) | 0),
              (o = (o + Math.imul(x, dt)) | 0));
            var It = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (i = Math.imul(k, ot)),
              (n = Math.imul(k, st)),
              (n = (n + Math.imul(B, ot)) | 0),
              (o = Math.imul(B, st)),
              (i = (i + Math.imul(C, ht)) | 0),
              (n = (n + Math.imul(C, at)) | 0),
              (n = (n + Math.imul(F, ht)) | 0),
              (o = (o + Math.imul(F, at)) | 0),
              (i = (i + Math.imul(U, ft)) | 0),
              (n = (n + Math.imul(U, gt)) | 0),
              (n = (n + Math.imul(L, ft)) | 0),
              (o = (o + Math.imul(L, gt)) | 0),
              (i = (i + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(P, dt)) | 0),
              (n = (n + Math.imul(I, ct)) | 0),
              (o = (o + Math.imul(I, dt)) | 0));
            var Ot = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(k, ht)),
              (n = Math.imul(k, at)),
              (n = (n + Math.imul(B, ht)) | 0),
              (o = Math.imul(B, at)),
              (i = (i + Math.imul(C, ft)) | 0),
              (n = (n + Math.imul(C, gt)) | 0),
              (n = (n + Math.imul(F, ft)) | 0),
              (o = (o + Math.imul(F, gt)) | 0),
              (i = (i + Math.imul(U, ct)) | 0),
              (n = (n + Math.imul(U, dt)) | 0),
              (n = (n + Math.imul(L, ct)) | 0),
              (o = (o + Math.imul(L, dt)) | 0));
            var Ut = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ut >>> 26)) | 0),
              (Ut &= 67108863),
              (i = Math.imul(k, ft)),
              (n = Math.imul(k, gt)),
              (n = (n + Math.imul(B, ft)) | 0),
              (o = Math.imul(B, gt)),
              (i = (i + Math.imul(C, ct)) | 0),
              (n = (n + Math.imul(C, dt)) | 0),
              (n = (n + Math.imul(F, ct)) | 0),
              (o = (o + Math.imul(F, dt)) | 0));
            var Lt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Lt >>> 26)) | 0),
              (Lt &= 67108863),
              (i = Math.imul(k, ct)),
              (n = Math.imul(k, dt)),
              (n = (n + Math.imul(B, ct)) | 0),
              (o = Math.imul(B, dt)));
            var Tt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (a = (((o + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (h[0] = vt),
              (h[1] = pt),
              (h[2] = wt),
              (h[3] = yt),
              (h[4] = Mt),
              (h[5] = Et),
              (h[6] = bt),
              (h[7] = Nt),
              (h[8] = _t),
              (h[9] = At),
              (h[10] = Rt),
              (h[11] = xt),
              (h[12] = St),
              (h[13] = Pt),
              (h[14] = It),
              (h[15] = Ot),
              (h[16] = Ut),
              (h[17] = Lt),
              (h[18] = Tt),
              0 !== a && ((h[19] = a), e.length++),
              e
            );
          };
          function y(t, r, e) {
            ((e.negative = r.negative ^ t.negative),
              (e.length = t.length + r.length));
            for (var i = 0, n = 0, o = 0; o < e.length - 1; o++) {
              var s = n;
              n = 0;
              for (
                var u = 67108863 & i,
                  h = Math.min(o, r.length - 1),
                  a = Math.max(0, o - t.length + 1);
                a <= h;
                a++
              ) {
                var l = o - a,
                  f = 0 | t.words[l],
                  g = 0 | r.words[a],
                  m = f * g,
                  c = 67108863 & m;
                ((s = (s + ((m / 67108864) | 0)) | 0),
                  (c = (c + u) | 0),
                  (u = 67108863 & c),
                  (s = (s + (c >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((e.words[o] = u), (i = s), (s = n));
            }
            return (0 !== i ? (e.words[o] = i) : e.length--, e._strip());
          }
          function M(t, r, e) {
            return y(t, r, e);
          }
          function E(t, r) {
            ((this.x = t), (this.y = r));
          }
          (Math.imul || (w = p),
            (o.prototype.mulTo = function (t, r) {
              var e,
                i = this.length + t.length;
              return (
                (e =
                  10 === this.length && 10 === t.length
                    ? w(this, t, r)
                    : i < 63
                      ? p(this, t, r)
                      : i < 1024
                        ? y(this, t, r)
                        : M(this, t, r)),
                e
              );
            }),
            (E.prototype.makeRBT = function (t) {
              for (
                var r = new Array(t), e = o.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                r[i] = this.revBin(i, e, t);
              return r;
            }),
            (E.prototype.revBin = function (t, r, e) {
              if (0 === t || t === e - 1) return t;
              for (var i = 0, n = 0; n < r; n++)
                ((i |= (1 & t) << (r - n - 1)), (t >>= 1));
              return i;
            }),
            (E.prototype.permute = function (t, r, e, i, n, o) {
              for (var s = 0; s < o; s++) ((i[s] = r[t[s]]), (n[s] = e[t[s]]));
            }),
            (E.prototype.transform = function (t, r, e, i, n, o) {
              this.permute(o, t, r, e, i, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var u = s << 1,
                    h = Math.cos((2 * Math.PI) / u),
                    a = Math.sin((2 * Math.PI) / u),
                    l = 0;
                  l < n;
                  l += u
                )
                  for (var f = h, g = a, m = 0; m < s; m++) {
                    var c = e[l + m],
                      d = i[l + m],
                      v = e[l + m + s],
                      p = i[l + m + s],
                      w = f * v - g * p;
                    ((p = f * p + g * v),
                      (v = w),
                      (e[l + m] = c + v),
                      (i[l + m] = d + p),
                      (e[l + m + s] = c - v),
                      (i[l + m + s] = d - p),
                      m !== u &&
                        ((w = h * f - a * g), (g = h * g + a * f), (f = w)));
                  }
            }),
            (E.prototype.guessLen13b = function (t, r) {
              var e = 1 | Math.max(r, t),
                i = 1 & e,
                n = 0;
              for (e = (e / 2) | 0; e; e >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (E.prototype.conjugate = function (t, r, e) {
              if (!(e <= 1))
                for (var i = 0; i < e / 2; i++) {
                  var n = t[i];
                  ((t[i] = t[e - i - 1]),
                    (t[e - i - 1] = n),
                    (n = r[i]),
                    (r[i] = -r[e - i - 1]),
                    (r[e - i - 1] = -n));
                }
            }),
            (E.prototype.normalize13b = function (t, r) {
              for (var e = 0, i = 0; i < r / 2; i++) {
                var n =
                  8192 * Math.round(t[2 * i + 1] / r) +
                  Math.round(t[2 * i] / r) +
                  e;
                ((t[i] = 67108863 & n),
                  (e = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (E.prototype.convert13b = function (t, r, e, n) {
              for (var o = 0, s = 0; s < r; s++)
                ((o += 0 | t[s]),
                  (e[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (e[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * r; s < n; ++s) e[s] = 0;
              (i(0 === o), i(0 === (-8192 & o)));
            }),
            (E.prototype.stub = function (t) {
              for (var r = new Array(t), e = 0; e < t; e++) r[e] = 0;
              return r;
            }),
            (E.prototype.mulp = function (t, r, e) {
              var i = 2 * this.guessLen13b(t.length, r.length),
                n = this.makeRBT(i),
                o = this.stub(i),
                s = new Array(i),
                u = new Array(i),
                h = new Array(i),
                a = new Array(i),
                l = new Array(i),
                f = new Array(i),
                g = e.words;
              ((g.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(r.words, r.length, a, i),
                this.transform(s, o, u, h, i, n),
                this.transform(a, o, l, f, i, n));
              for (var m = 0; m < i; m++) {
                var c = u[m] * l[m] - h[m] * f[m];
                ((h[m] = u[m] * f[m] + h[m] * l[m]), (u[m] = c));
              }
              return (
                this.conjugate(u, h, i),
                this.transform(u, h, g, o, i, n),
                this.conjugate(g, o, i),
                this.normalize13b(g, i),
                (e.negative = t.negative ^ r.negative),
                (e.length = t.length + r.length),
                e._strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var r = new o(null);
              return (
                (r.words = new Array(this.length + t.length)),
                this.mulTo(t, r)
              );
            }),
            (o.prototype.mulf = function (t) {
              var r = new o(null);
              return (
                (r.words = new Array(this.length + t.length)),
                M(this, t, r)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var r = t < 0;
              (r && (t = -t), i("number" === typeof t), i(t < 67108864));
              for (var e = 0, n = 0; n < this.length; n++) {
                var o = (0 | this.words[n]) * t,
                  s = (67108863 & o) + (67108863 & e);
                ((e >>= 26),
                  (e += (o / 67108864) | 0),
                  (e += s >>> 26),
                  (this.words[n] = 67108863 & s));
              }
              return (
                0 !== e && ((this.words[n] = e), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                r ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (t) {
              var r = v(t);
              if (0 === r.length) return new o(1);
              for (var e = this, i = 0; i < r.length; i++, e = e.sqr())
                if (0 !== r[i]) break;
              if (++i < r.length)
                for (var n = e.sqr(); i < r.length; i++, n = n.sqr())
                  0 !== r[i] && (e = e.mul(n));
              return e;
            }),
            (o.prototype.iushln = function (t) {
              i("number" === typeof t && t >= 0);
              var r,
                e = t % 26,
                n = (t - e) / 26,
                o = (67108863 >>> (26 - e)) << (26 - e);
              if (0 !== e) {
                var s = 0;
                for (r = 0; r < this.length; r++) {
                  var u = this.words[r] & o,
                    h = ((0 | this.words[r]) - u) << e;
                  ((this.words[r] = h | s), (s = u >>> (26 - e)));
                }
                s && ((this.words[r] = s), this.length++);
              }
              if (0 !== n) {
                for (r = this.length - 1; r >= 0; r--)
                  this.words[r + n] = this.words[r];
                for (r = 0; r < n; r++) this.words[r] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return (i(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, r, e) {
              var n;
              (i("number" === typeof t && t >= 0),
                (n = r ? (r - (r % 26)) / 26 : 0));
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                u = 67108863 ^ ((67108863 >>> o) << o),
                h = e;
              if (((n -= s), (n = Math.max(0, n)), h)) {
                for (var a = 0; a < s; a++) h.words[a] = this.words[a];
                h.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, a = 0; a < this.length; a++)
                  this.words[a] = this.words[a + s];
              else ((this.words[0] = 0), (this.length = 1));
              var l = 0;
              for (a = this.length - 1; a >= 0 && (0 !== l || a >= n); a--) {
                var f = 0 | this.words[a];
                ((this.words[a] = (l << (26 - o)) | (f >>> o)), (l = f & u));
              }
              return (
                h && 0 !== l && (h.words[h.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, r, e) {
              return (i(0 === this.negative), this.iushrn(t, r, e));
            }),
            (o.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (o.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (o.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (o.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (o.prototype.testn = function (t) {
              i("number" === typeof t && t >= 0);
              var r = t % 26,
                e = (t - r) / 26,
                n = 1 << r;
              if (this.length <= e) return !1;
              var o = this.words[e];
              return !!(o & n);
            }),
            (o.prototype.imaskn = function (t) {
              i("number" === typeof t && t >= 0);
              var r = t % 26,
                e = (t - r) / 26;
              if (
                (i(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= e)
              )
                return this;
              if (
                (0 !== r && e++,
                (this.length = Math.min(e, this.length)),
                0 !== r)
              ) {
                var n = 67108863 ^ ((67108863 >>> r) << r);
                this.words[this.length - 1] &= n;
              }
              return this._strip();
            }),
            (o.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (o.prototype.iaddn = function (t) {
              return (
                i("number" === typeof t),
                i(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= t
                      ? ((this.words[0] = t - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(t),
                        (this.negative = 1),
                        this)
                    : this._iaddn(t)
              );
            }),
            (o.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var r = 0; r < this.length && this.words[r] >= 67108864; r++)
                ((this.words[r] -= 67108864),
                  r === this.length - 1
                    ? (this.words[r + 1] = 1)
                    : this.words[r + 1]++);
              return ((this.length = Math.max(this.length, r + 1)), this);
            }),
            (o.prototype.isubn = function (t) {
              if ((i("number" === typeof t), i(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(t),
                  (this.negative = 1),
                  this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var r = 0; r < this.length && this.words[r] < 0; r++)
                  ((this.words[r] += 67108864), (this.words[r + 1] -= 1));
              return this._strip();
            }),
            (o.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (o.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (o.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (t, r, e) {
              var n,
                o,
                s = t.length + e;
              this._expand(s);
              var u = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + e]) + u;
                var h = (0 | t.words[n]) * r;
                ((o -= 67108863 & h),
                  (u = (o >> 26) - ((h / 67108864) | 0)),
                  (this.words[n + e] = 67108863 & o));
              }
              for (; n < this.length - e; n++)
                ((o = (0 | this.words[n + e]) + u),
                  (u = o >> 26),
                  (this.words[n + e] = 67108863 & o));
              if (0 === u) return this._strip();
              for (i(-1 === u), u = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + u),
                  (u = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, r) {
              var e = this.length - t.length,
                i = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                u = this._countBits(s);
              ((e = 26 - u),
                0 !== e &&
                  ((n = n.ushln(e)),
                  i.iushln(e),
                  (s = 0 | n.words[n.length - 1])));
              var h,
                a = i.length - n.length;
              if ("mod" !== r) {
                ((h = new o(null)),
                  (h.length = a + 1),
                  (h.words = new Array(h.length)));
                for (var l = 0; l < h.length; l++) h.words[l] = 0;
              }
              var f = i.clone()._ishlnsubmul(n, 1, a);
              0 === f.negative && ((i = f), h && (h.words[a] = 1));
              for (var g = a - 1; g >= 0; g--) {
                var m =
                  67108864 * (0 | i.words[n.length + g]) +
                  (0 | i.words[n.length + g - 1]);
                ((m = Math.min((m / s) | 0, 67108863)),
                  i._ishlnsubmul(n, m, g));
                while (0 !== i.negative)
                  (m--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, g),
                    i.isZero() || (i.negative ^= 1));
                h && (h.words[g] = m);
              }
              return (
                h && h._strip(),
                i._strip(),
                "div" !== r && 0 !== e && i.iushrn(e),
                { div: h || null, mod: i }
              );
            }),
            (o.prototype.divmod = function (t, r, e) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((u = this.neg().divmod(t, r)),
                      "mod" !== r && (n = u.div.neg()),
                      "div" !== r &&
                        ((s = u.mod.neg()), e && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((u = this.divmod(t.neg(), r)),
                        "mod" !== r && (n = u.div.neg()),
                        { div: n, mod: u.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((u = this.neg().divmod(t.neg(), r)),
                          "div" !== r &&
                            ((s = u.mod.neg()),
                            e && 0 !== s.negative && s.isub(t)),
                          { div: u.div, mod: s })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === t.length
                            ? "div" === r
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === r
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, r)
              );
              var n, s, u;
            }),
            (o.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (o.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (o.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (t) {
              var r = this.divmod(t);
              if (r.mod.isZero()) return r.div;
              var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                i = t.ushrn(1),
                n = t.andln(1),
                o = e.cmp(i);
              return o < 0 || (1 === n && 0 === o)
                ? r.div
                : 0 !== r.div.negative
                  ? r.div.isubn(1)
                  : r.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var r = t < 0;
              (r && (t = -t), i(t <= 67108863));
              for (
                var e = (1 << 26) % t, n = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                n = (e * n + (0 | this.words[o])) % t;
              return r ? -n : n;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var r = t < 0;
              (r && (t = -t), i(t <= 67108863));
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var o = (0 | this.words[n]) + 67108864 * e;
                ((this.words[n] = (o / t) | 0), (e = o % t));
              }
              return (this._strip(), r ? this.ineg() : this);
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var r = this,
                e = t.clone();
              r = 0 !== r.negative ? r.umod(t) : r.clone();
              var n = new o(1),
                s = new o(0),
                u = new o(0),
                h = new o(1),
                a = 0;
              while (r.isEven() && e.isEven()) (r.iushrn(1), e.iushrn(1), ++a);
              var l = e.clone(),
                f = r.clone();
              while (!r.isZero()) {
                for (
                  var g = 0, m = 1;
                  0 === (r.words[0] & m) && g < 26;
                  ++g, m <<= 1
                );
                if (g > 0) {
                  r.iushrn(g);
                  while (g-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(f)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var c = 0, d = 1;
                  0 === (e.words[0] & d) && c < 26;
                  ++c, d <<= 1
                );
                if (c > 0) {
                  e.iushrn(c);
                  while (c-- > 0)
                    ((u.isOdd() || h.isOdd()) && (u.iadd(l), h.isub(f)),
                      u.iushrn(1),
                      h.iushrn(1));
                }
                r.cmp(e) >= 0
                  ? (r.isub(e), n.isub(u), s.isub(h))
                  : (e.isub(r), u.isub(n), h.isub(s));
              }
              return { a: u, b: h, gcd: e.iushln(a) };
            }),
            (o.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var r = this,
                e = t.clone();
              r = 0 !== r.negative ? r.umod(t) : r.clone();
              var n,
                s = new o(1),
                u = new o(0),
                h = e.clone();
              while (r.cmpn(1) > 0 && e.cmpn(1) > 0) {
                for (
                  var a = 0, l = 1;
                  0 === (r.words[0] & l) && a < 26;
                  ++a, l <<= 1
                );
                if (a > 0) {
                  r.iushrn(a);
                  while (a-- > 0) (s.isOdd() && s.iadd(h), s.iushrn(1));
                }
                for (
                  var f = 0, g = 1;
                  0 === (e.words[0] & g) && f < 26;
                  ++f, g <<= 1
                );
                if (f > 0) {
                  e.iushrn(f);
                  while (f-- > 0) (u.isOdd() && u.iadd(h), u.iushrn(1));
                }
                r.cmp(e) >= 0 ? (r.isub(e), s.isub(u)) : (e.isub(r), u.isub(s));
              }
              return (
                (n = 0 === r.cmpn(1) ? s : u),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var r = this.clone(),
                e = t.clone();
              ((r.negative = 0), (e.negative = 0));
              for (var i = 0; r.isEven() && e.isEven(); i++)
                (r.iushrn(1), e.iushrn(1));
              do {
                while (r.isEven()) r.iushrn(1);
                while (e.isEven()) e.iushrn(1);
                var n = r.cmp(e);
                if (n < 0) {
                  var o = r;
                  ((r = e), (e = o));
                } else if (0 === n || 0 === e.cmpn(1)) break;
                r.isub(e);
              } while (1);
              return e.iushln(i);
            }),
            (o.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (o.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (o.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (o.prototype.bincn = function (t) {
              i("number" === typeof t);
              var r = t % 26,
                e = (t - r) / 26,
                n = 1 << r;
              if (this.length <= e)
                return (this._expand(e + 1), (this.words[e] |= n), this);
              for (var o = n, s = e; 0 !== o && s < this.length; s++) {
                var u = 0 | this.words[s];
                ((u += o),
                  (o = u >>> 26),
                  (u &= 67108863),
                  (this.words[s] = u));
              }
              return (0 !== o && ((this.words[s] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var r,
                e = t < 0;
              if (0 !== this.negative && !e) return -1;
              if (0 === this.negative && e) return 1;
              if ((this._strip(), this.length > 1)) r = 1;
              else {
                (e && (t = -t), i(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                r = n === t ? 0 : n < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -r : r;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var r = this.ucmp(t);
              return 0 !== this.negative ? 0 | -r : r;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var r = 0, e = this.length - 1; e >= 0; e--) {
                var i = 0 | this.words[e],
                  n = 0 | t.words[e];
                if (i !== n) {
                  i < n ? (r = -1) : i > n && (r = 1);
                  break;
                }
              }
              return r;
            }),
            (o.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (o.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (o.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (o.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (o.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (o.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (o.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (o.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (o.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (o.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (o.red = function (t) {
              return new S(t);
            }),
            (o.prototype.toRed = function (t) {
              return (
                i(!this.red, "Already a number in reduction context"),
                i(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                i(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (t) {
              return ((this.red = t), this);
            }),
            (o.prototype.forceRed = function (t) {
              return (
                i(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (o.prototype.redAdd = function (t) {
              return (
                i(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (o.prototype.redIAdd = function (t) {
              return (
                i(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (o.prototype.redSub = function (t) {
              return (
                i(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (o.prototype.redISub = function (t) {
              return (
                i(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (o.prototype.redShl = function (t) {
              return (
                i(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (o.prototype.redMul = function (t) {
              return (
                i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (o.prototype.redIMul = function (t) {
              return (
                i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                i(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                i(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                i(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                i(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                i(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (t) {
              return (
                i(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var b = { k256: null, p224: null, p192: null, p25519: null };
          function N(t, r) {
            ((this.name = t),
              (this.p = new o(r, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function _() {
            N.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function A() {
            N.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function R() {
            N.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function x() {
            N.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function S(t) {
            if ("string" === typeof t) {
              var r = o._prime(t);
              ((this.m = r.p), (this.prime = r));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function P(t) {
            (S.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((N.prototype._tmp = function () {
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (N.prototype.ireduce = function (t) {
              var r,
                e = t;
              do {
                (this.split(e, this.tmp),
                  (e = this.imulK(e)),
                  (e = e.iadd(this.tmp)),
                  (r = e.bitLength()));
              } while (r > this.n);
              var i = r < this.n ? -1 : e.ucmp(this.p);
              return (
                0 === i
                  ? ((e.words[0] = 0), (e.length = 1))
                  : i > 0
                    ? e.isub(this.p)
                    : void 0 !== e.strip
                      ? e.strip()
                      : e._strip(),
                e
              );
            }),
            (N.prototype.split = function (t, r) {
              t.iushrn(this.n, 0, r);
            }),
            (N.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(_, N),
            (_.prototype.split = function (t, r) {
              for (
                var e = 4194303, i = Math.min(t.length, 9), n = 0;
                n < i;
                n++
              )
                r.words[n] = t.words[n];
              if (((r.length = i), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (r.words[r.length++] = o & e, n = 10; n < t.length; n++) {
                var s = 0 | t.words[n];
                ((t.words[n - 10] = ((s & e) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (t.words[n - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (_.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var r = 0, e = 0; e < t.length; e++) {
                var i = 0 | t.words[e];
                ((r += 977 * i),
                  (t.words[e] = 67108863 & r),
                  (r = 64 * i + ((r / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(A, N),
            n(R, N),
            n(x, N),
            (x.prototype.imulK = function (t) {
              for (var r = 0, e = 0; e < t.length; e++) {
                var i = 19 * (0 | t.words[e]) + r,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[e] = n), (r = i));
              }
              return (0 !== r && (t.words[t.length++] = r), t);
            }),
            (o._prime = function (t) {
              if (b[t]) return b[t];
              var r;
              if ("k256" === t) r = new _();
              else if ("p224" === t) r = new A();
              else if ("p192" === t) r = new R();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                r = new x();
              }
              return ((b[t] = r), r);
            }),
            (S.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (S.prototype._verify2 = function (t, r) {
              (i(
                0 === (t.negative | r.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === r.red, "red works only with red numbers"));
            }),
            (S.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (S.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (S.prototype.add = function (t, r) {
              this._verify2(t, r);
              var e = t.add(r);
              return (e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this));
            }),
            (S.prototype.iadd = function (t, r) {
              this._verify2(t, r);
              var e = t.iadd(r);
              return (e.cmp(this.m) >= 0 && e.isub(this.m), e);
            }),
            (S.prototype.sub = function (t, r) {
              this._verify2(t, r);
              var e = t.sub(r);
              return (e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this));
            }),
            (S.prototype.isub = function (t, r) {
              this._verify2(t, r);
              var e = t.isub(r);
              return (e.cmpn(0) < 0 && e.iadd(this.m), e);
            }),
            (S.prototype.shl = function (t, r) {
              return (this._verify1(t), this.imod(t.ushln(r)));
            }),
            (S.prototype.imul = function (t, r) {
              return (this._verify2(t, r), this.imod(t.imul(r)));
            }),
            (S.prototype.mul = function (t, r) {
              return (this._verify2(t, r), this.imod(t.mul(r)));
            }),
            (S.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (S.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (S.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var r = this.m.andln(3);
              if ((i(r % 2 === 1), 3 === r)) {
                var e = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, e);
              }
              var n = this.m.subn(1),
                s = 0;
              while (!n.isZero() && 0 === n.andln(1)) (s++, n.iushrn(1));
              i(!n.isZero());
              var u = new o(1).toRed(this),
                h = u.redNeg(),
                a = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              l = new o(2 * l * l).toRed(this);
              while (0 !== this.pow(l, a).cmp(h)) l.redIAdd(h);
              var f = this.pow(l, n),
                g = this.pow(t, n.addn(1).iushrn(1)),
                m = this.pow(t, n),
                c = s;
              while (0 !== m.cmp(u)) {
                for (var d = m, v = 0; 0 !== d.cmp(u); v++) d = d.redSqr();
                i(v < c);
                var p = this.pow(f, new o(1).iushln(c - v - 1));
                ((g = g.redMul(p)),
                  (f = p.redSqr()),
                  (m = m.redMul(f)),
                  (c = v));
              }
              return g;
            }),
            (S.prototype.invm = function (t) {
              var r = t._invmp(this.m);
              return 0 !== r.negative
                ? ((r.negative = 0), this.imod(r).redNeg())
                : this.imod(r);
            }),
            (S.prototype.pow = function (t, r) {
              if (r.isZero()) return new o(1).toRed(this);
              if (0 === r.cmpn(1)) return t.clone();
              var e = 4,
                i = new Array(1 << e);
              ((i[0] = new o(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var s = i[0],
                u = 0,
                h = 0,
                a = r.bitLength() % 26;
              for (0 === a && (a = 26), n = r.length - 1; n >= 0; n--) {
                for (var l = r.words[n], f = a - 1; f >= 0; f--) {
                  var g = (l >> f) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== g || 0 !== u
                      ? ((u <<= 1),
                        (u |= g),
                        h++,
                        (h === e || (0 === n && 0 === f)) &&
                          ((s = this.mul(s, i[u])), (h = 0), (u = 0)))
                      : (h = 0));
                }
                a = 26;
              }
              return s;
            }),
            (S.prototype.convertTo = function (t) {
              var r = t.umod(this.m);
              return r === t ? r.clone() : r;
            }),
            (S.prototype.convertFrom = function (t) {
              var r = t.clone();
              return ((r.red = null), r);
            }),
            (o.mont = function (t) {
              return new P(t);
            }),
            n(P, S),
            (P.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (P.prototype.convertFrom = function (t) {
              var r = this.imod(t.mul(this.rinv));
              return ((r.red = null), r);
            }),
            (P.prototype.imul = function (t, r) {
              if (t.isZero() || r.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var e = t.imul(r),
                i = e
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = e.isub(i).iushrn(this.shift),
                o = n;
              return (
                n.cmp(this.m) >= 0
                  ? (o = n.isub(this.m))
                  : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (P.prototype.mul = function (t, r) {
              if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
              var e = t.mul(r),
                i = e
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = e.isub(i).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (P.prototype.invm = function (t) {
              var r = this.imod(t._invmp(this.m).mul(this.r2));
              return r._forceRed(this);
            }));
        })(t, this);
      }).call(this, e(20)(t));
    },
    1334: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "logger/5.8.0";
    },
    1335: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bytes/5.8.0";
    },
    1336: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.FixedNumber = r.FixedFormat = void 0),
        (r.formatFixed = c),
        (r.parseFixed = d));
      var i = e(489),
        n = e(266),
        o = e(490),
        s = e(488);
      const u = new n.Logger(o.version),
        h = {},
        a = s.BigNumber.from(0),
        l = s.BigNumber.from(-1);
      function f(t, r, e, i) {
        const o = { fault: r, operation: e };
        return (
          void 0 !== i && (o.value = i),
          u.throwError(t, n.Logger.errors.NUMERIC_FAULT, o)
        );
      }
      let g = "0";
      while (g.length < 256) g += g;
      function m(t) {
        if ("number" !== typeof t)
          try {
            t = s.BigNumber.from(t).toNumber();
          } catch (r) {}
        return "number" === typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + g.substring(0, t)
          : u.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function c(t, r) {
        null == r && (r = 0);
        const e = m(r);
        t = s.BigNumber.from(t);
        const i = t.lt(a);
        i && (t = t.mul(l));
        let n = t.mod(e).toString();
        while (n.length < e.length - 1) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = t.div(e).toString();
        return ((t = 1 === e.length ? o : o + "." + n), i && (t = "-" + t), t);
      }
      function d(t, r) {
        null == r && (r = 0);
        const e = m(r);
        ("string" === typeof t && t.match(/^-?[0-9.]+$/)) ||
          u.throwArgumentError("invalid decimal value", "value", t);
        const i = "-" === t.substring(0, 1);
        (i && (t = t.substring(1)),
          "." === t && u.throwArgumentError("missing value", "value", t));
        const n = t.split(".");
        n.length > 2 &&
          u.throwArgumentError("too many decimal points", "value", t);
        let o = n[0],
          h = n[1];
        (o || (o = "0"), h || (h = "0"));
        while ("0" === h[h.length - 1]) h = h.substring(0, h.length - 1);
        (h.length > e.length - 1 &&
          f("fractional component exceeds decimals", "underflow", "parseFixed"),
          "" === h && (h = "0"));
        while (h.length < e.length - 1) h += "0";
        const a = s.BigNumber.from(o),
          g = s.BigNumber.from(h);
        let c = a.mul(e).add(g);
        return (i && (c = c.mul(l)), c);
      }
      class FixedFormat {
        constructor(t, r, e, i) {
          (t !== h &&
            u.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              n.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.signed = r),
            (this.width = e),
            (this.decimals = i),
            (this.name =
              (r ? "" : "u") + "fixed" + String(e) + "x" + String(i)),
            (this._multiplier = m(i)),
            Object.freeze(this));
        }
        static from(t) {
          if (t instanceof FixedFormat) return t;
          "number" === typeof t && (t = "fixed128x" + t);
          let r = !0,
            e = 128,
            i = 18;
          if ("string" === typeof t)
            if ("fixed" === t);
            else if ("ufixed" === t) r = !1;
            else {
              const n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              (n || u.throwArgumentError("invalid fixed format", "format", t),
                (r = "u" !== n[1]),
                (e = parseInt(n[2])),
                (i = parseInt(n[3])));
            }
          else if (t) {
            const n = (r, e, i) =>
              null == t[r]
                ? i
                : (typeof t[r] !== e &&
                    u.throwArgumentError(
                      "invalid fixed format (" + r + " not " + e + ")",
                      "format." + r,
                      t[r],
                    ),
                  t[r]);
            ((r = n("signed", "boolean", r)),
              (e = n("width", "number", e)),
              (i = n("decimals", "number", i)));
          }
          return (
            e % 8 &&
              u.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                e,
              ),
            i > 80 &&
              u.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                i,
              ),
            new FixedFormat(h, r, e, i)
          );
        }
      }
      r.FixedFormat = FixedFormat;
      class FixedNumber {
        constructor(t, r, e, i) {
          (t !== h &&
            u.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              n.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.format = i),
            (this._hex = r),
            (this._value = e),
            (this._isFixedNumber = !0),
            Object.freeze(this));
        }
        _checkFormat(t) {
          this.format.name !== t.format.name &&
            u.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              t,
            );
        }
        addUnsafe(t) {
          this._checkFormat(t);
          const r = d(this._value, this.format.decimals),
            e = d(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.add(e),
            this.format.decimals,
            this.format,
          );
        }
        subUnsafe(t) {
          this._checkFormat(t);
          const r = d(this._value, this.format.decimals),
            e = d(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.sub(e),
            this.format.decimals,
            this.format,
          );
        }
        mulUnsafe(t) {
          this._checkFormat(t);
          const r = d(this._value, this.format.decimals),
            e = d(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.mul(e).div(this.format._multiplier),
            this.format.decimals,
            this.format,
          );
        }
        divUnsafe(t) {
          this._checkFormat(t);
          const r = d(this._value, this.format.decimals),
            e = d(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.mul(this.format._multiplier).div(e),
            this.format.decimals,
            this.format,
          );
        }
        floor() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let r = FixedNumber.from(t[0], this.format);
          const e = !t[1].match(/^(0*)$/);
          return (
            this.isNegative() && e && (r = r.subUnsafe(v.toFormat(r.format))),
            r
          );
        }
        ceiling() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let r = FixedNumber.from(t[0], this.format);
          const e = !t[1].match(/^(0*)$/);
          return (
            !this.isNegative() && e && (r = r.addUnsafe(v.toFormat(r.format))),
            r
          );
        }
        round(t) {
          null == t && (t = 0);
          const r = this.toString().split(".");
          if (
            (1 === r.length && r.push("0"),
            (t < 0 || t > 80 || t % 1) &&
              u.throwArgumentError("invalid decimal count", "decimals", t),
            r[1].length <= t)
          )
            return this;
          const e = FixedNumber.from("1" + g.substring(0, t), this.format),
            i = p.toFormat(this.format);
          return this.mulUnsafe(e).addUnsafe(i).floor().divUnsafe(e);
        }
        isZero() {
          return "0.0" === this._value || "0" === this._value;
        }
        isNegative() {
          return "-" === this._value[0];
        }
        toString() {
          return this._value;
        }
        toHexString(t) {
          if (null == t) return this._hex;
          t % 8 && u.throwArgumentError("invalid byte width", "width", t);
          const r = s.BigNumber.from(this._hex)
            .fromTwos(this.format.width)
            .toTwos(t)
            .toHexString();
          return (0, i.hexZeroPad)(r, t / 8);
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return FixedNumber.fromString(this._value, t);
        }
        static fromValue(t, r, e) {
          return (
            null != e ||
              null == r ||
              (0, s.isBigNumberish)(r) ||
              ((e = r), (r = null)),
            null == r && (r = 0),
            null == e && (e = "fixed"),
            FixedNumber.fromString(c(t, r), FixedFormat.from(e))
          );
        }
        static fromString(t, r) {
          null == r && (r = "fixed");
          const e = FixedFormat.from(r),
            n = d(t, e.decimals);
          !e.signed &&
            n.lt(a) &&
            f("unsigned value cannot be negative", "overflow", "value", t);
          let o = null;
          e.signed
            ? (o = n.toTwos(e.width).toHexString())
            : ((o = n.toHexString()), (o = (0, i.hexZeroPad)(o, e.width / 8)));
          const s = c(n, e.decimals);
          return new FixedNumber(h, o, s, e);
        }
        static fromBytes(t, r) {
          null == r && (r = "fixed");
          const e = FixedFormat.from(r);
          if ((0, i.arrayify)(t).length > e.width / 8)
            throw new Error("overflow");
          let n = s.BigNumber.from(t);
          e.signed && (n = n.fromTwos(e.width));
          const o = n.toTwos((e.signed ? 0 : 1) + e.width).toHexString(),
            u = c(n, e.decimals);
          return new FixedNumber(h, o, u, e);
        }
        static from(t, r) {
          if ("string" === typeof t) return FixedNumber.fromString(t, r);
          if ((0, i.isBytes)(t)) return FixedNumber.fromBytes(t, r);
          try {
            return FixedNumber.fromValue(t, 0, r);
          } catch (e) {
            if (e.code !== n.Logger.errors.INVALID_ARGUMENT) throw e;
          }
          return u.throwArgumentError("invalid FixedNumber value", "value", t);
        }
        static isFixedNumber(t) {
          return !(!t || !t._isFixedNumber);
        }
      }
      r.FixedNumber = FixedNumber;
      const v = FixedNumber.from(1),
        p = FixedNumber.from("0.5");
    },
    1525: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "decode", {
          enumerable: !0,
          get: function () {
            return i.decode;
          },
        }),
        Object.defineProperty(r, "encode", {
          enumerable: !0,
          get: function () {
            return i.encode;
          },
        }));
      var i = e(1526);
    },
    1526: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.decode = n),
        (r.encode = o));
      var i = e(1527);
      function n(t) {
        t = atob(t);
        const r = [];
        for (let e = 0; e < t.length; e++) r.push(t.charCodeAt(e));
        return (0, i.arrayify)(r);
      }
      function o(t) {
        t = (0, i.arrayify)(t);
        let r = "";
        for (let e = 0; e < t.length; e++) r += String.fromCharCode(t[e]);
        return btoa(r);
      }
    },
    1527: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.arrayify = f),
        (r.concat = g),
        (r.hexConcat = M),
        (r.hexDataLength = w),
        (r.hexDataSlice = y),
        (r.hexStripZeros = b),
        (r.hexValue = E),
        (r.hexZeroPad = N),
        (r.hexlify = p),
        (r.isBytes = l),
        (r.isBytesLike = h),
        (r.isHexString = d),
        (r.joinSignature = A),
        (r.splitSignature = _),
        (r.stripZeros = m),
        (r.zeroPad = c));
      var i = e(1528),
        n = e(1530);
      const o = new i.Logger(n.version);
      function s(t) {
        return !!t.toHexString;
      }
      function u(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return u(new Uint8Array(Array.prototype.slice.apply(t, r)));
            }),
          t
        );
      }
      function h(t) {
        return (d(t) && !(t.length % 2)) || l(t);
      }
      function a(t) {
        return "number" === typeof t && t == t && t % 1 === 0;
      }
      function l(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" === typeof t) return !1;
        if (!a(t.length) || t.length < 0) return !1;
        for (let r = 0; r < t.length; r++) {
          const e = t[r];
          if (!a(e) || e < 0 || e >= 256) return !1;
        }
        return !0;
      }
      function f(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid arrayify value");
          const r = [];
          while (t) (r.unshift(255 & t), (t = parseInt(String(t / 256))));
          return (0 === r.length && r.push(0), u(new Uint8Array(r)));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t) && (t = t.toHexString()),
          d(t))
        ) {
          let e = t.substring(2);
          e.length % 2 &&
            ("left" === r.hexPad
              ? (e = "0" + e)
              : "right" === r.hexPad
                ? (e += "0")
                : o.throwArgumentError("hex data is odd-length", "value", t));
          const i = [];
          for (let t = 0; t < e.length; t += 2)
            i.push(parseInt(e.substring(t, t + 2), 16));
          return u(new Uint8Array(i));
        }
        return l(t)
          ? u(new Uint8Array(t))
          : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function g(t) {
        const r = t.map((t) => f(t)),
          e = r.reduce((t, r) => t + r.length, 0),
          i = new Uint8Array(e);
        return (r.reduce((t, r) => (i.set(r, t), t + r.length), 0), u(i));
      }
      function m(t) {
        let r = f(t);
        if (0 === r.length) return r;
        let e = 0;
        while (e < r.length && 0 === r[e]) e++;
        return (e && (r = r.slice(e)), r);
      }
      function c(t, r) {
        ((t = f(t)),
          t.length > r &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const e = new Uint8Array(r);
        return (e.set(t, r - t.length), u(e));
      }
      function d(t, r) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || t.length === 2 + 2 * r)
        );
      }
      const v = "0123456789abcdef";
      function p(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid hexlify value");
          let r = "";
          while (t) ((r = v[15 & t] + r), (t = Math.floor(t / 16)));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof t)
          return ((t = t.toString(16)), t.length % 2 ? "0x0" + t : "0x" + t);
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t))
        )
          return t.toHexString();
        if (d(t))
          return (
            t.length % 2 &&
              ("left" === r.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === r.hexPad
                  ? (t += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (l(t)) {
          let r = "0x";
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            r += v[(240 & i) >> 4] + v[15 & i];
          }
          return r;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function w(t) {
        if ("string" !== typeof t) t = p(t);
        else if (!d(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function y(t, r, e) {
        return (
          "string" !== typeof t
            ? (t = p(t))
            : (!d(t) || t.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", t),
          (r = 2 + 2 * r),
          null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
        );
      }
      function M(t) {
        let r = "0x";
        return (
          t.forEach((t) => {
            r += p(t).substring(2);
          }),
          r
        );
      }
      function E(t) {
        const r = b(p(t, { hexPad: "left" }));
        return "0x" === r ? "0x0" : r;
      }
      function b(t) {
        ("string" !== typeof t && (t = p(t)),
          d(t) || o.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2)));
        let r = 0;
        while (r < t.length && "0" === t[r]) r++;
        return "0x" + t.substring(r);
      }
      function N(t, r) {
        ("string" !== typeof t
          ? (t = p(t))
          : d(t) || o.throwArgumentError("invalid hex string", "value", t),
          t.length > 2 * r + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (t.length < 2 * r + 2) t = "0x0" + t.substring(2);
        return t;
      }
      function _(t) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (h(t)) {
          let e = f(t);
          (64 === e.length
            ? ((r.v = 27 + (e[32] >> 7)),
              (e[32] &= 127),
              (r.r = p(e.slice(0, 32))),
              (r.s = p(e.slice(32, 64))))
            : 65 === e.length
              ? ((r.r = p(e.slice(0, 32))),
                (r.s = p(e.slice(32, 64))),
                (r.v = e[64]))
              : o.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  t,
                ),
            r.v < 27 &&
              (0 === r.v || 1 === r.v
                ? (r.v += 27)
                : o.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t,
                  )),
            (r.recoveryParam = 1 - (r.v % 2)),
            r.recoveryParam && (e[32] |= 128),
            (r._vs = p(e.slice(32, 64))));
        } else {
          if (
            ((r.r = t.r),
            (r.s = t.s),
            (r.v = t.v),
            (r.recoveryParam = t.recoveryParam),
            (r._vs = t._vs),
            null != r._vs)
          ) {
            const e = c(f(r._vs), 32);
            r._vs = p(e);
            const i = e[0] >= 128 ? 1 : 0;
            (null == r.recoveryParam
              ? (r.recoveryParam = i)
              : r.recoveryParam !== i &&
                o.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t,
                ),
              (e[0] &= 127));
            const n = p(e);
            null == r.s
              ? (r.s = n)
              : r.s !== n &&
                o.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t,
                );
          }
          if (null == r.recoveryParam)
            null == r.v
              ? o.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t,
                )
              : 0 === r.v || 1 === r.v
                ? (r.recoveryParam = r.v)
                : (r.recoveryParam = 1 - (r.v % 2));
          else if (null == r.v) r.v = 27 + r.recoveryParam;
          else {
            const e = 0 === r.v || 1 === r.v ? r.v : 1 - (r.v % 2);
            r.recoveryParam !== e &&
              o.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t,
              );
          }
          (null != r.r && d(r.r)
            ? (r.r = N(r.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t,
              ),
            null != r.s && d(r.s)
              ? (r.s = N(r.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t,
                ));
          const e = f(r.s);
          (e[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", t),
            r.recoveryParam && (e[0] |= 128));
          const i = p(e);
          (r._vs &&
            (d(r._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", t),
            (r._vs = N(r._vs, 32))),
            null == r._vs
              ? (r._vs = i)
              : r._vs !== i &&
                o.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t,
                ));
        }
        return (
          (r.yParityAndS = r._vs),
          (r.compact = r.r + r.yParityAndS.substring(2)),
          r
        );
      }
      function A(t) {
        return (
          (t = _(t)),
          p(g([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    1528: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Logger = r.LogLevel = r.ErrorCode = void 0));
      var i = e(1529);
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let u = s["default"],
        h = null;
      function a() {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (e) {
                t.push(r);
              }
            }),
            t.length)
          )
            throw new Error("missing " + t.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (t) {
          return t.message;
        }
        return null;
      }
      const l = a();
      var f, g;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(f || (r.LogLevel = f = {})),
        (function (t) {
          ((t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"),
            (t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"),
            (t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"),
            (t["NETWORK_ERROR"] = "NETWORK_ERROR"),
            (t["SERVER_ERROR"] = "SERVER_ERROR"),
            (t["TIMEOUT"] = "TIMEOUT"),
            (t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"),
            (t["NUMERIC_FAULT"] = "NUMERIC_FAULT"),
            (t["MISSING_NEW"] = "MISSING_NEW"),
            (t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"),
            (t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"),
            (t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"),
            (t["CALL_EXCEPTION"] = "CALL_EXCEPTION"),
            (t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"),
            (t["NONCE_EXPIRED"] = "NONCE_EXPIRED"),
            (t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"),
            (t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT"),
            (t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"),
            (t["ACTION_REJECTED"] = "ACTION_REJECTED"));
        })(g || (r.ErrorCode = g = {})));
      const m = "0123456789abcdef";
      class Logger {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, r) {
          const e = t.toLowerCase();
          (null == s[e] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            u > s[e] || console.log.apply(console, r));
        }
        debug() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.DEBUG, r);
        }
        info() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.INFO, r);
        }
        warn() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.WARNING, r);
        }
        makeError(t, r, e) {
          if (o) return this.makeError("censored error", r, {});
          (r || (r = Logger.errors.UNKNOWN_ERROR), e || (e = {}));
          const i = [];
          (Object.keys(e).forEach((t) => {
            const r = e[t];
            try {
              if (r instanceof Uint8Array) {
                let e = "";
                for (let t = 0; t < r.length; t++)
                  ((e += m[r[t] >> 4]), (e += m[15 & r[t]]));
                i.push(t + "=Uint8Array(0x" + e + ")");
              } else i.push(t + "=" + JSON.stringify(r));
            } catch (u) {
              i.push(t + "=" + JSON.stringify(e[t].toString()));
            }
          }),
            i.push("code=" + r),
            i.push("version=" + this.version));
          const n = t;
          let s = "";
          switch (r) {
            case g.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = t;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
                  break;
              }
              break;
            }
            case g.CALL_EXCEPTION:
            case g.INSUFFICIENT_FUNDS:
            case g.MISSING_NEW:
            case g.NONCE_EXPIRED:
            case g.REPLACEMENT_UNDERPRICED:
            case g.TRANSACTION_REPLACED:
            case g.UNPREDICTABLE_GAS_LIMIT:
              s = r;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            i.length && (t += " (" + i.join(", ") + ")"));
          const u = new Error(t);
          return (
            (u.reason = n),
            (u.code = r),
            Object.keys(e).forEach(function (t) {
              u[t] = e[t];
            }),
            u
          );
        }
        throwError(t, r, e) {
          throw this.makeError(t, r, e);
        }
        throwArgumentError(t, r, e) {
          return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
            argument: r,
            value: e,
          });
        }
        assert(t, r, e, i) {
          t || this.throwError(r, e, i);
        }
        assertArgument(t, r, e, i) {
          t || this.throwArgumentError(r, e, i);
        }
        checkNormalize(t) {
          (null == t && (t = "platform missing String.prototype.normalize"),
            l &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: l },
              ));
        }
        checkSafeUint53(t, r) {
          "number" === typeof t &&
            (null == r && (r = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, r, e) {
          ((e = e ? ": " + e : ""),
            t < r &&
              this.throwError(
                "missing argument" + e,
                Logger.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: r },
              ),
            t > r &&
              this.throwError(
                "too many arguments" + e,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: r },
              ));
        }
        checkNew(t, r) {
          (t !== Object && null != t) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(t, r) {
          t === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" },
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return (h || (h = new Logger(i.version)), h);
        }
        static setCensorship(t, r) {
          if (
            (!t &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            n)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((o = !!t), (n = !!r));
        }
        static setLogLevel(t) {
          const r = s[t.toLowerCase()];
          null != r
            ? (u = r)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((r.Logger = Logger), (Logger.errors = g), (Logger.levels = f));
    },
    1529: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "logger/5.8.0";
    },
    1530: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bytes/5.8.0";
    },
    1531: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.BaseX = r.Base58 = r.Base32 = void 0));
      var i = e(1532),
        n = e(1535);
      class BaseX {
        constructor(t) {
          ((0, n.defineReadOnly)(this, "alphabet", t),
            (0, n.defineReadOnly)(this, "base", t.length),
            (0, n.defineReadOnly)(this, "_alphabetMap", {}),
            (0, n.defineReadOnly)(this, "_leader", t.charAt(0)));
          for (let r = 0; r < t.length; r++) this._alphabetMap[t.charAt(r)] = r;
        }
        encode(t) {
          let r = (0, i.arrayify)(t);
          if (0 === r.length) return "";
          let e = [0];
          for (let i = 0; i < r.length; ++i) {
            let t = r[i];
            for (let r = 0; r < e.length; ++r)
              ((t += e[r] << 8),
                (e[r] = t % this.base),
                (t = (t / this.base) | 0));
            while (t > 0) (e.push(t % this.base), (t = (t / this.base) | 0));
          }
          let n = "";
          for (let i = 0; 0 === r[i] && i < r.length - 1; ++i)
            n += this._leader;
          for (let i = e.length - 1; i >= 0; --i) n += this.alphabet[e[i]];
          return n;
        }
        decode(t) {
          if ("string" !== typeof t) throw new TypeError("Expected String");
          let r = [];
          if (0 === t.length) return new Uint8Array(r);
          r.push(0);
          for (let e = 0; e < t.length; e++) {
            let i = this._alphabetMap[t[e]];
            if (void 0 === i)
              throw new Error("Non-base" + this.base + " character");
            let n = i;
            for (let t = 0; t < r.length; ++t)
              ((n += r[t] * this.base), (r[t] = 255 & n), (n >>= 8));
            while (n > 0) (r.push(255 & n), (n >>= 8));
          }
          for (let e = 0; t[e] === this._leader && e < t.length - 1; ++e)
            r.push(0);
          return (0, i.arrayify)(new Uint8Array(r.reverse()));
        }
      }
      r.BaseX = BaseX;
      ((r.Base32 = new BaseX("abcdefghijklmnopqrstuvwxyz234567")),
        (r.Base58 = new BaseX(
          "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        )));
    },
    1532: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.arrayify = f),
        (r.concat = g),
        (r.hexConcat = M),
        (r.hexDataLength = w),
        (r.hexDataSlice = y),
        (r.hexStripZeros = b),
        (r.hexValue = E),
        (r.hexZeroPad = N),
        (r.hexlify = p),
        (r.isBytes = l),
        (r.isBytesLike = h),
        (r.isHexString = d),
        (r.joinSignature = A),
        (r.splitSignature = _),
        (r.stripZeros = m),
        (r.zeroPad = c));
      var i = e(540),
        n = e(1534);
      const o = new i.Logger(n.version);
      function s(t) {
        return !!t.toHexString;
      }
      function u(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return u(new Uint8Array(Array.prototype.slice.apply(t, r)));
            }),
          t
        );
      }
      function h(t) {
        return (d(t) && !(t.length % 2)) || l(t);
      }
      function a(t) {
        return "number" === typeof t && t == t && t % 1 === 0;
      }
      function l(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" === typeof t) return !1;
        if (!a(t.length) || t.length < 0) return !1;
        for (let r = 0; r < t.length; r++) {
          const e = t[r];
          if (!a(e) || e < 0 || e >= 256) return !1;
        }
        return !0;
      }
      function f(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid arrayify value");
          const r = [];
          while (t) (r.unshift(255 & t), (t = parseInt(String(t / 256))));
          return (0 === r.length && r.push(0), u(new Uint8Array(r)));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t) && (t = t.toHexString()),
          d(t))
        ) {
          let e = t.substring(2);
          e.length % 2 &&
            ("left" === r.hexPad
              ? (e = "0" + e)
              : "right" === r.hexPad
                ? (e += "0")
                : o.throwArgumentError("hex data is odd-length", "value", t));
          const i = [];
          for (let t = 0; t < e.length; t += 2)
            i.push(parseInt(e.substring(t, t + 2), 16));
          return u(new Uint8Array(i));
        }
        return l(t)
          ? u(new Uint8Array(t))
          : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function g(t) {
        const r = t.map((t) => f(t)),
          e = r.reduce((t, r) => t + r.length, 0),
          i = new Uint8Array(e);
        return (r.reduce((t, r) => (i.set(r, t), t + r.length), 0), u(i));
      }
      function m(t) {
        let r = f(t);
        if (0 === r.length) return r;
        let e = 0;
        while (e < r.length && 0 === r[e]) e++;
        return (e && (r = r.slice(e)), r);
      }
      function c(t, r) {
        ((t = f(t)),
          t.length > r &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const e = new Uint8Array(r);
        return (e.set(t, r - t.length), u(e));
      }
      function d(t, r) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || t.length === 2 + 2 * r)
        );
      }
      const v = "0123456789abcdef";
      function p(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid hexlify value");
          let r = "";
          while (t) ((r = v[15 & t] + r), (t = Math.floor(t / 16)));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof t)
          return ((t = t.toString(16)), t.length % 2 ? "0x0" + t : "0x" + t);
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t))
        )
          return t.toHexString();
        if (d(t))
          return (
            t.length % 2 &&
              ("left" === r.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === r.hexPad
                  ? (t += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (l(t)) {
          let r = "0x";
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            r += v[(240 & i) >> 4] + v[15 & i];
          }
          return r;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function w(t) {
        if ("string" !== typeof t) t = p(t);
        else if (!d(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function y(t, r, e) {
        return (
          "string" !== typeof t
            ? (t = p(t))
            : (!d(t) || t.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", t),
          (r = 2 + 2 * r),
          null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
        );
      }
      function M(t) {
        let r = "0x";
        return (
          t.forEach((t) => {
            r += p(t).substring(2);
          }),
          r
        );
      }
      function E(t) {
        const r = b(p(t, { hexPad: "left" }));
        return "0x" === r ? "0x0" : r;
      }
      function b(t) {
        ("string" !== typeof t && (t = p(t)),
          d(t) || o.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2)));
        let r = 0;
        while (r < t.length && "0" === t[r]) r++;
        return "0x" + t.substring(r);
      }
      function N(t, r) {
        ("string" !== typeof t
          ? (t = p(t))
          : d(t) || o.throwArgumentError("invalid hex string", "value", t),
          t.length > 2 * r + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (t.length < 2 * r + 2) t = "0x0" + t.substring(2);
        return t;
      }
      function _(t) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (h(t)) {
          let e = f(t);
          (64 === e.length
            ? ((r.v = 27 + (e[32] >> 7)),
              (e[32] &= 127),
              (r.r = p(e.slice(0, 32))),
              (r.s = p(e.slice(32, 64))))
            : 65 === e.length
              ? ((r.r = p(e.slice(0, 32))),
                (r.s = p(e.slice(32, 64))),
                (r.v = e[64]))
              : o.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  t,
                ),
            r.v < 27 &&
              (0 === r.v || 1 === r.v
                ? (r.v += 27)
                : o.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t,
                  )),
            (r.recoveryParam = 1 - (r.v % 2)),
            r.recoveryParam && (e[32] |= 128),
            (r._vs = p(e.slice(32, 64))));
        } else {
          if (
            ((r.r = t.r),
            (r.s = t.s),
            (r.v = t.v),
            (r.recoveryParam = t.recoveryParam),
            (r._vs = t._vs),
            null != r._vs)
          ) {
            const e = c(f(r._vs), 32);
            r._vs = p(e);
            const i = e[0] >= 128 ? 1 : 0;
            (null == r.recoveryParam
              ? (r.recoveryParam = i)
              : r.recoveryParam !== i &&
                o.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t,
                ),
              (e[0] &= 127));
            const n = p(e);
            null == r.s
              ? (r.s = n)
              : r.s !== n &&
                o.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t,
                );
          }
          if (null == r.recoveryParam)
            null == r.v
              ? o.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t,
                )
              : 0 === r.v || 1 === r.v
                ? (r.recoveryParam = r.v)
                : (r.recoveryParam = 1 - (r.v % 2));
          else if (null == r.v) r.v = 27 + r.recoveryParam;
          else {
            const e = 0 === r.v || 1 === r.v ? r.v : 1 - (r.v % 2);
            r.recoveryParam !== e &&
              o.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t,
              );
          }
          (null != r.r && d(r.r)
            ? (r.r = N(r.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t,
              ),
            null != r.s && d(r.s)
              ? (r.s = N(r.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t,
                ));
          const e = f(r.s);
          (e[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", t),
            r.recoveryParam && (e[0] |= 128));
          const i = p(e);
          (r._vs &&
            (d(r._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", t),
            (r._vs = N(r._vs, 32))),
            null == r._vs
              ? (r._vs = i)
              : r._vs !== i &&
                o.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t,
                ));
        }
        return (
          (r.yParityAndS = r._vs),
          (r.compact = r.r + r.yParityAndS.substring(2)),
          r
        );
      }
      function A(t) {
        return (
          (t = _(t)),
          p(g([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    1533: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "logger/5.8.0";
    },
    1534: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bytes/5.8.0";
    },
    1535: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Description = void 0),
        (r.checkProperties = l),
        (r.deepCopy = d),
        (r.defineReadOnly = u),
        (r.getStatic = h),
        (r.resolveProperties = a),
        (r.shallowCopy = f));
      var i = e(540),
        n = e(1536),
        o = function (t, r, e, i) {
          function n(t) {
            return t instanceof e
              ? t
              : new e(function (r) {
                  r(t);
                });
          }
          return new (e || (e = Promise))(function (e, o) {
            function s(t) {
              try {
                h(i.next(t));
              } catch (r) {
                o(r);
              }
            }
            function u(t) {
              try {
                h(i["throw"](t));
              } catch (r) {
                o(r);
              }
            }
            function h(t) {
              t.done ? e(t.value) : n(t.value).then(s, u);
            }
            h((i = i.apply(t, r || [])).next());
          });
        };
      const s = new i.Logger(n.version);
      function u(t, r, e) {
        Object.defineProperty(t, r, { enumerable: !0, value: e, writable: !1 });
      }
      function h(t, r) {
        for (let e = 0; e < 32; e++) {
          if (t[r]) return t[r];
          if (!t.prototype || "object" !== typeof t.prototype) break;
          t = Object.getPrototypeOf(t.prototype).constructor;
        }
        return null;
      }
      function a(t) {
        return o(this, void 0, void 0, function* () {
          const r = Object.keys(t).map((r) => {
              const e = t[r];
              return Promise.resolve(e).then((t) => ({ key: r, value: t }));
            }),
            e = yield Promise.all(r);
          return e.reduce((t, r) => ((t[r.key] = r.value), t), {});
        });
      }
      function l(t, r) {
        ((t && "object" === typeof t) ||
          s.throwArgumentError("invalid object", "object", t),
          Object.keys(t).forEach((e) => {
            r[e] ||
              s.throwArgumentError(
                "invalid object key - " + e,
                "transaction:" + e,
                t,
              );
          }));
      }
      function f(t) {
        const r = {};
        for (const e in t) r[e] = t[e];
        return r;
      }
      const g = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function m(t) {
        if (void 0 === t || null === t || g[typeof t]) return !0;
        if (Array.isArray(t) || "object" === typeof t) {
          if (!Object.isFrozen(t)) return !1;
          const e = Object.keys(t);
          for (let i = 0; i < e.length; i++) {
            let n = null;
            try {
              n = t[e[i]];
            } catch (r) {
              continue;
            }
            if (!m(n)) return !1;
          }
          return !0;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function c(t) {
        if (m(t)) return t;
        if (Array.isArray(t)) return Object.freeze(t.map((t) => d(t)));
        if ("object" === typeof t) {
          const r = {};
          for (const e in t) {
            const i = t[e];
            void 0 !== i && u(r, e, d(i));
          }
          return r;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function d(t) {
        return c(t);
      }
      class Description {
        constructor(t) {
          for (const r in t) this[r] = d(t[r]);
        }
      }
      r.Description = Description;
    },
    1536: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "properties/5.8.0";
    },
    266: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Logger = r.LogLevel = r.ErrorCode = void 0));
      var i = e(1334);
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let u = s["default"],
        h = null;
      function a() {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (e) {
                t.push(r);
              }
            }),
            t.length)
          )
            throw new Error("missing " + t.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (t) {
          return t.message;
        }
        return null;
      }
      const l = a();
      var f, g;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(f || (r.LogLevel = f = {})),
        (function (t) {
          ((t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"),
            (t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"),
            (t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"),
            (t["NETWORK_ERROR"] = "NETWORK_ERROR"),
            (t["SERVER_ERROR"] = "SERVER_ERROR"),
            (t["TIMEOUT"] = "TIMEOUT"),
            (t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"),
            (t["NUMERIC_FAULT"] = "NUMERIC_FAULT"),
            (t["MISSING_NEW"] = "MISSING_NEW"),
            (t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"),
            (t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"),
            (t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"),
            (t["CALL_EXCEPTION"] = "CALL_EXCEPTION"),
            (t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"),
            (t["NONCE_EXPIRED"] = "NONCE_EXPIRED"),
            (t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"),
            (t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT"),
            (t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"),
            (t["ACTION_REJECTED"] = "ACTION_REJECTED"));
        })(g || (r.ErrorCode = g = {})));
      const m = "0123456789abcdef";
      class Logger {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, r) {
          const e = t.toLowerCase();
          (null == s[e] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            u > s[e] || console.log.apply(console, r));
        }
        debug() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.DEBUG, r);
        }
        info() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.INFO, r);
        }
        warn() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.WARNING, r);
        }
        makeError(t, r, e) {
          if (o) return this.makeError("censored error", r, {});
          (r || (r = Logger.errors.UNKNOWN_ERROR), e || (e = {}));
          const i = [];
          (Object.keys(e).forEach((t) => {
            const r = e[t];
            try {
              if (r instanceof Uint8Array) {
                let e = "";
                for (let t = 0; t < r.length; t++)
                  ((e += m[r[t] >> 4]), (e += m[15 & r[t]]));
                i.push(t + "=Uint8Array(0x" + e + ")");
              } else i.push(t + "=" + JSON.stringify(r));
            } catch (u) {
              i.push(t + "=" + JSON.stringify(e[t].toString()));
            }
          }),
            i.push("code=" + r),
            i.push("version=" + this.version));
          const n = t;
          let s = "";
          switch (r) {
            case g.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = t;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
                  break;
              }
              break;
            }
            case g.CALL_EXCEPTION:
            case g.INSUFFICIENT_FUNDS:
            case g.MISSING_NEW:
            case g.NONCE_EXPIRED:
            case g.REPLACEMENT_UNDERPRICED:
            case g.TRANSACTION_REPLACED:
            case g.UNPREDICTABLE_GAS_LIMIT:
              s = r;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            i.length && (t += " (" + i.join(", ") + ")"));
          const u = new Error(t);
          return (
            (u.reason = n),
            (u.code = r),
            Object.keys(e).forEach(function (t) {
              u[t] = e[t];
            }),
            u
          );
        }
        throwError(t, r, e) {
          throw this.makeError(t, r, e);
        }
        throwArgumentError(t, r, e) {
          return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
            argument: r,
            value: e,
          });
        }
        assert(t, r, e, i) {
          t || this.throwError(r, e, i);
        }
        assertArgument(t, r, e, i) {
          t || this.throwArgumentError(r, e, i);
        }
        checkNormalize(t) {
          (null == t && (t = "platform missing String.prototype.normalize"),
            l &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: l },
              ));
        }
        checkSafeUint53(t, r) {
          "number" === typeof t &&
            (null == r && (r = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, r, e) {
          ((e = e ? ": " + e : ""),
            t < r &&
              this.throwError(
                "missing argument" + e,
                Logger.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: r },
              ),
            t > r &&
              this.throwError(
                "too many arguments" + e,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: r },
              ));
        }
        checkNew(t, r) {
          (t !== Object && null != t) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(t, r) {
          t === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" },
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return (h || (h = new Logger(i.version)), h);
        }
        static setCensorship(t, r) {
          if (
            (!t &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            n)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((o = !!t), (n = !!r));
        }
        static setLogLevel(t) {
          const r = s[t.toLowerCase()];
          null != r
            ? (u = r)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((r.Logger = Logger), (Logger.errors = g), (Logger.levels = f));
    },
    488: function (t, r, e) {
      "use strict";
      var i = e(0);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.BigNumber = void 0),
        (r._base16To36 = y),
        (r._base36To16 = w),
        (r.isBigNumberish = g));
      var n = i(e(1332)),
        o = e(489),
        s = e(266),
        u = e(490),
        h = n.default.BN;
      const a = new s.Logger(u.version),
        l = {},
        f = 9007199254740991;
      function g(t) {
        return (
          null != t &&
          (BigNumber.isBigNumber(t) ||
            ("number" === typeof t && t % 1 === 0) ||
            ("string" === typeof t && !!t.match(/^-?[0-9]+$/)) ||
            (0, o.isHexString)(t) ||
            "bigint" === typeof t ||
            (0, o.isBytes)(t))
        );
      }
      let m = !1;
      class BigNumber {
        constructor(t, r) {
          (t !== l &&
            a.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" },
            ),
            (this._hex = r),
            (this._isBigNumber = !0),
            Object.freeze(this));
        }
        fromTwos(t) {
          return d(v(this).fromTwos(t));
        }
        toTwos(t) {
          return d(v(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0]
            ? BigNumber.from(this._hex.substring(1))
            : this;
        }
        add(t) {
          return d(v(this).add(v(t)));
        }
        sub(t) {
          return d(v(this).sub(v(t)));
        }
        div(t) {
          const r = BigNumber.from(t);
          return (
            r.isZero() && p("division-by-zero", "div"),
            d(v(this).div(v(t)))
          );
        }
        mul(t) {
          return d(v(this).mul(v(t)));
        }
        mod(t) {
          const r = v(t);
          return (
            r.isNeg() && p("division-by-zero", "mod"),
            d(v(this).umod(r))
          );
        }
        pow(t) {
          const r = v(t);
          return (r.isNeg() && p("negative-power", "pow"), d(v(this).pow(r)));
        }
        and(t) {
          const r = v(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              p("unbound-bitwise-result", "and"),
            d(v(this).and(r))
          );
        }
        or(t) {
          const r = v(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              p("unbound-bitwise-result", "or"),
            d(v(this).or(r))
          );
        }
        xor(t) {
          const r = v(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              p("unbound-bitwise-result", "xor"),
            d(v(this).xor(r))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && p("negative-width", "mask"),
            d(v(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && p("negative-width", "shl"),
            d(v(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && p("negative-width", "shr"),
            d(v(this).shrn(t))
          );
        }
        eq(t) {
          return v(this).eq(v(t));
        }
        lt(t) {
          return v(this).lt(v(t));
        }
        lte(t) {
          return v(this).lte(v(t));
        }
        gt(t) {
          return v(this).gt(v(t));
        }
        gte(t) {
          return v(this).gte(v(t));
        }
        isNegative() {
          return "-" === this._hex[0];
        }
        isZero() {
          return v(this).isZero();
        }
        toNumber() {
          try {
            return v(this).toNumber();
          } catch (t) {
            p("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (t) {}
          return a.throwError(
            "this platform does not support BigInt",
            s.Logger.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() },
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? m ||
                  ((m = !0),
                  a.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed",
                  ))
                : 16 === arguments[0]
                  ? a.throwError(
                      "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                      s.Logger.errors.UNEXPECTED_ARGUMENT,
                      {},
                    )
                  : a.throwError(
                      "BigNumber.toString does not accept parameters",
                      s.Logger.errors.UNEXPECTED_ARGUMENT,
                      {},
                    )),
            v(this).toString(10)
          );
        }
        toHexString() {
          return this._hex;
        }
        toJSON(t) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(t) {
          if (t instanceof BigNumber) return t;
          if ("string" === typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new BigNumber(l, c(t))
              : t.match(/^-?[0-9]+$/)
                ? new BigNumber(l, c(new h(t)))
                : a.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" === typeof t)
            return (
              t % 1 && p("underflow", "BigNumber.from", t),
              (t >= f || t <= -f) && p("overflow", "BigNumber.from", t),
              BigNumber.from(String(t))
            );
          const r = t;
          if ("bigint" === typeof r) return BigNumber.from(r.toString());
          if ((0, o.isBytes)(r)) return BigNumber.from((0, o.hexlify)(r));
          if (r)
            if (r.toHexString) {
              const t = r.toHexString();
              if ("string" === typeof t) return BigNumber.from(t);
            } else {
              let t = r._hex;
              if (
                (null == t && "BigNumber" === r.type && (t = r.hex),
                "string" === typeof t &&
                  ((0, o.isHexString)(t) ||
                    ("-" === t[0] && (0, o.isHexString)(t.substring(1)))))
              )
                return BigNumber.from(t);
            }
          return a.throwArgumentError("invalid BigNumber value", "value", t);
        }
        static isBigNumber(t) {
          return !(!t || !t._isBigNumber);
        }
      }
      function c(t) {
        if ("string" !== typeof t) return c(t.toString(16));
        if ("-" === t[0])
          return (
            (t = t.substring(1)),
            "-" === t[0] && a.throwArgumentError("invalid hex", "value", t),
            (t = c(t)),
            "0x00" === t ? t : "-" + t
          );
        if (("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t))
          return "0x00";
        t.length % 2 && (t = "0x0" + t.substring(2));
        while (t.length > 4 && "0x00" === t.substring(0, 4))
          t = "0x" + t.substring(4);
        return t;
      }
      function d(t) {
        return BigNumber.from(c(t));
      }
      function v(t) {
        const r = BigNumber.from(t).toHexString();
        return "-" === r[0]
          ? new h("-" + r.substring(3), 16)
          : new h(r.substring(2), 16);
      }
      function p(t, r, e) {
        const i = { fault: t, operation: r };
        return (
          null != e && (i.value = e),
          a.throwError(t, s.Logger.errors.NUMERIC_FAULT, i)
        );
      }
      function w(t) {
        return new h(t, 36).toString(16);
      }
      function y(t) {
        return new h(t, 16).toString(36);
      }
      r.BigNumber = BigNumber;
    },
    489: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.arrayify = f),
        (r.concat = g),
        (r.hexConcat = M),
        (r.hexDataLength = w),
        (r.hexDataSlice = y),
        (r.hexStripZeros = b),
        (r.hexValue = E),
        (r.hexZeroPad = N),
        (r.hexlify = p),
        (r.isBytes = l),
        (r.isBytesLike = h),
        (r.isHexString = d),
        (r.joinSignature = A),
        (r.splitSignature = _),
        (r.stripZeros = m),
        (r.zeroPad = c));
      var i = e(266),
        n = e(1335);
      const o = new i.Logger(n.version);
      function s(t) {
        return !!t.toHexString;
      }
      function u(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return u(new Uint8Array(Array.prototype.slice.apply(t, r)));
            }),
          t
        );
      }
      function h(t) {
        return (d(t) && !(t.length % 2)) || l(t);
      }
      function a(t) {
        return "number" === typeof t && t == t && t % 1 === 0;
      }
      function l(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" === typeof t) return !1;
        if (!a(t.length) || t.length < 0) return !1;
        for (let r = 0; r < t.length; r++) {
          const e = t[r];
          if (!a(e) || e < 0 || e >= 256) return !1;
        }
        return !0;
      }
      function f(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid arrayify value");
          const r = [];
          while (t) (r.unshift(255 & t), (t = parseInt(String(t / 256))));
          return (0 === r.length && r.push(0), u(new Uint8Array(r)));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t) && (t = t.toHexString()),
          d(t))
        ) {
          let e = t.substring(2);
          e.length % 2 &&
            ("left" === r.hexPad
              ? (e = "0" + e)
              : "right" === r.hexPad
                ? (e += "0")
                : o.throwArgumentError("hex data is odd-length", "value", t));
          const i = [];
          for (let t = 0; t < e.length; t += 2)
            i.push(parseInt(e.substring(t, t + 2), 16));
          return u(new Uint8Array(i));
        }
        return l(t)
          ? u(new Uint8Array(t))
          : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function g(t) {
        const r = t.map((t) => f(t)),
          e = r.reduce((t, r) => t + r.length, 0),
          i = new Uint8Array(e);
        return (r.reduce((t, r) => (i.set(r, t), t + r.length), 0), u(i));
      }
      function m(t) {
        let r = f(t);
        if (0 === r.length) return r;
        let e = 0;
        while (e < r.length && 0 === r[e]) e++;
        return (e && (r = r.slice(e)), r);
      }
      function c(t, r) {
        ((t = f(t)),
          t.length > r &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const e = new Uint8Array(r);
        return (e.set(t, r - t.length), u(e));
      }
      function d(t, r) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || t.length === 2 + 2 * r)
        );
      }
      const v = "0123456789abcdef";
      function p(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid hexlify value");
          let r = "";
          while (t) ((r = v[15 & t] + r), (t = Math.floor(t / 16)));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof t)
          return ((t = t.toString(16)), t.length % 2 ? "0x0" + t : "0x" + t);
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t))
        )
          return t.toHexString();
        if (d(t))
          return (
            t.length % 2 &&
              ("left" === r.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === r.hexPad
                  ? (t += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (l(t)) {
          let r = "0x";
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            r += v[(240 & i) >> 4] + v[15 & i];
          }
          return r;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function w(t) {
        if ("string" !== typeof t) t = p(t);
        else if (!d(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function y(t, r, e) {
        return (
          "string" !== typeof t
            ? (t = p(t))
            : (!d(t) || t.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", t),
          (r = 2 + 2 * r),
          null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
        );
      }
      function M(t) {
        let r = "0x";
        return (
          t.forEach((t) => {
            r += p(t).substring(2);
          }),
          r
        );
      }
      function E(t) {
        const r = b(p(t, { hexPad: "left" }));
        return "0x" === r ? "0x0" : r;
      }
      function b(t) {
        ("string" !== typeof t && (t = p(t)),
          d(t) || o.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2)));
        let r = 0;
        while (r < t.length && "0" === t[r]) r++;
        return "0x" + t.substring(r);
      }
      function N(t, r) {
        ("string" !== typeof t
          ? (t = p(t))
          : d(t) || o.throwArgumentError("invalid hex string", "value", t),
          t.length > 2 * r + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (t.length < 2 * r + 2) t = "0x0" + t.substring(2);
        return t;
      }
      function _(t) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (h(t)) {
          let e = f(t);
          (64 === e.length
            ? ((r.v = 27 + (e[32] >> 7)),
              (e[32] &= 127),
              (r.r = p(e.slice(0, 32))),
              (r.s = p(e.slice(32, 64))))
            : 65 === e.length
              ? ((r.r = p(e.slice(0, 32))),
                (r.s = p(e.slice(32, 64))),
                (r.v = e[64]))
              : o.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  t,
                ),
            r.v < 27 &&
              (0 === r.v || 1 === r.v
                ? (r.v += 27)
                : o.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t,
                  )),
            (r.recoveryParam = 1 - (r.v % 2)),
            r.recoveryParam && (e[32] |= 128),
            (r._vs = p(e.slice(32, 64))));
        } else {
          if (
            ((r.r = t.r),
            (r.s = t.s),
            (r.v = t.v),
            (r.recoveryParam = t.recoveryParam),
            (r._vs = t._vs),
            null != r._vs)
          ) {
            const e = c(f(r._vs), 32);
            r._vs = p(e);
            const i = e[0] >= 128 ? 1 : 0;
            (null == r.recoveryParam
              ? (r.recoveryParam = i)
              : r.recoveryParam !== i &&
                o.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t,
                ),
              (e[0] &= 127));
            const n = p(e);
            null == r.s
              ? (r.s = n)
              : r.s !== n &&
                o.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t,
                );
          }
          if (null == r.recoveryParam)
            null == r.v
              ? o.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t,
                )
              : 0 === r.v || 1 === r.v
                ? (r.recoveryParam = r.v)
                : (r.recoveryParam = 1 - (r.v % 2));
          else if (null == r.v) r.v = 27 + r.recoveryParam;
          else {
            const e = 0 === r.v || 1 === r.v ? r.v : 1 - (r.v % 2);
            r.recoveryParam !== e &&
              o.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t,
              );
          }
          (null != r.r && d(r.r)
            ? (r.r = N(r.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t,
              ),
            null != r.s && d(r.s)
              ? (r.s = N(r.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t,
                ));
          const e = f(r.s);
          (e[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", t),
            r.recoveryParam && (e[0] |= 128));
          const i = p(e);
          (r._vs &&
            (d(r._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", t),
            (r._vs = N(r._vs, 32))),
            null == r._vs
              ? (r._vs = i)
              : r._vs !== i &&
                o.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t,
                ));
        }
        return (
          (r.yParityAndS = r._vs),
          (r.compact = r.r + r.yParityAndS.substring(2)),
          r
        );
      }
      function A(t) {
        return (
          (t = _(t)),
          p(g([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    490: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bignumber/5.7.0";
    },
    540: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Logger = r.LogLevel = r.ErrorCode = void 0));
      var i = e(1533);
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let u = s["default"],
        h = null;
      function a() {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (e) {
                t.push(r);
              }
            }),
            t.length)
          )
            throw new Error("missing " + t.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (t) {
          return t.message;
        }
        return null;
      }
      const l = a();
      var f, g;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(f || (r.LogLevel = f = {})),
        (function (t) {
          ((t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"),
            (t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"),
            (t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"),
            (t["NETWORK_ERROR"] = "NETWORK_ERROR"),
            (t["SERVER_ERROR"] = "SERVER_ERROR"),
            (t["TIMEOUT"] = "TIMEOUT"),
            (t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"),
            (t["NUMERIC_FAULT"] = "NUMERIC_FAULT"),
            (t["MISSING_NEW"] = "MISSING_NEW"),
            (t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"),
            (t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"),
            (t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"),
            (t["CALL_EXCEPTION"] = "CALL_EXCEPTION"),
            (t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"),
            (t["NONCE_EXPIRED"] = "NONCE_EXPIRED"),
            (t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"),
            (t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT"),
            (t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"),
            (t["ACTION_REJECTED"] = "ACTION_REJECTED"));
        })(g || (r.ErrorCode = g = {})));
      const m = "0123456789abcdef";
      class Logger {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, r) {
          const e = t.toLowerCase();
          (null == s[e] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            u > s[e] || console.log.apply(console, r));
        }
        debug() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.DEBUG, r);
        }
        info() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.INFO, r);
        }
        warn() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.WARNING, r);
        }
        makeError(t, r, e) {
          if (o) return this.makeError("censored error", r, {});
          (r || (r = Logger.errors.UNKNOWN_ERROR), e || (e = {}));
          const i = [];
          (Object.keys(e).forEach((t) => {
            const r = e[t];
            try {
              if (r instanceof Uint8Array) {
                let e = "";
                for (let t = 0; t < r.length; t++)
                  ((e += m[r[t] >> 4]), (e += m[15 & r[t]]));
                i.push(t + "=Uint8Array(0x" + e + ")");
              } else i.push(t + "=" + JSON.stringify(r));
            } catch (u) {
              i.push(t + "=" + JSON.stringify(e[t].toString()));
            }
          }),
            i.push("code=" + r),
            i.push("version=" + this.version));
          const n = t;
          let s = "";
          switch (r) {
            case g.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = t;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
                  break;
                case "negative-power":
                case "negative-width":
                  s += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  s += "-unbound-result";
                  break;
              }
              break;
            }
            case g.CALL_EXCEPTION:
            case g.INSUFFICIENT_FUNDS:
            case g.MISSING_NEW:
            case g.NONCE_EXPIRED:
            case g.REPLACEMENT_UNDERPRICED:
            case g.TRANSACTION_REPLACED:
            case g.UNPREDICTABLE_GAS_LIMIT:
              s = r;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            i.length && (t += " (" + i.join(", ") + ")"));
          const u = new Error(t);
          return (
            (u.reason = n),
            (u.code = r),
            Object.keys(e).forEach(function (t) {
              u[t] = e[t];
            }),
            u
          );
        }
        throwError(t, r, e) {
          throw this.makeError(t, r, e);
        }
        throwArgumentError(t, r, e) {
          return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
            argument: r,
            value: e,
          });
        }
        assert(t, r, e, i) {
          t || this.throwError(r, e, i);
        }
        assertArgument(t, r, e, i) {
          t || this.throwArgumentError(r, e, i);
        }
        checkNormalize(t) {
          (null == t && (t = "platform missing String.prototype.normalize"),
            l &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: l },
              ));
        }
        checkSafeUint53(t, r) {
          "number" === typeof t &&
            (null == r && (r = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, r, e) {
          ((e = e ? ": " + e : ""),
            t < r &&
              this.throwError(
                "missing argument" + e,
                Logger.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: r },
              ),
            t > r &&
              this.throwError(
                "too many arguments" + e,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: r },
              ));
        }
        checkNew(t, r) {
          (t !== Object && null != t) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(t, r) {
          t === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" },
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return (h || (h = new Logger(i.version)), h);
        }
        static setCensorship(t, r) {
          if (
            (!t &&
              r &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            n)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((o = !!t), (n = !!r));
        }
        static setLogLevel(t) {
          const r = s[t.toLowerCase()];
          null != r
            ? (u = r)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((r.Logger = Logger), (Logger.errors = g), (Logger.levels = f));
    },
  },
]);
