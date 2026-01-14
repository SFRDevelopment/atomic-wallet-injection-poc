(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [107],
  {
    1708: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "AddressZero", {
          enumerable: !0,
          get: function () {
            return i.AddressZero;
          },
        }),
        Object.defineProperty(r, "EtherSymbol", {
          enumerable: !0,
          get: function () {
            return s.EtherSymbol;
          },
        }),
        Object.defineProperty(r, "HashZero", {
          enumerable: !0,
          get: function () {
            return o.HashZero;
          },
        }),
        Object.defineProperty(r, "MaxInt256", {
          enumerable: !0,
          get: function () {
            return n.MaxInt256;
          },
        }),
        Object.defineProperty(r, "MaxUint256", {
          enumerable: !0,
          get: function () {
            return n.MaxUint256;
          },
        }),
        Object.defineProperty(r, "MinInt256", {
          enumerable: !0,
          get: function () {
            return n.MinInt256;
          },
        }),
        Object.defineProperty(r, "NegativeOne", {
          enumerable: !0,
          get: function () {
            return n.NegativeOne;
          },
        }),
        Object.defineProperty(r, "One", {
          enumerable: !0,
          get: function () {
            return n.One;
          },
        }),
        Object.defineProperty(r, "Two", {
          enumerable: !0,
          get: function () {
            return n.Two;
          },
        }),
        Object.defineProperty(r, "WeiPerEther", {
          enumerable: !0,
          get: function () {
            return n.WeiPerEther;
          },
        }),
        Object.defineProperty(r, "Zero", {
          enumerable: !0,
          get: function () {
            return n.Zero;
          },
        }));
      var i = e(1709),
        n = e(1710),
        o = e(1717),
        s = e(1718);
    },
    1709: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.AddressZero = void 0));
      r.AddressZero = "0x0000000000000000000000000000000000000000";
    },
    1710: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Zero =
          r.WeiPerEther =
          r.Two =
          r.One =
          r.NegativeOne =
          r.MinInt256 =
          r.MaxUint256 =
          r.MaxInt256 =
            void 0));
      var i = e(1711);
      ((r.NegativeOne = i.BigNumber.from(-1)),
        (r.Zero = i.BigNumber.from(0)),
        (r.One = i.BigNumber.from(1)),
        (r.Two = i.BigNumber.from(2)),
        (r.WeiPerEther = i.BigNumber.from("1000000000000000000")),
        (r.MaxUint256 = i.BigNumber.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )),
        (r.MinInt256 = i.BigNumber.from(
          "-0x8000000000000000000000000000000000000000000000000000000000000000",
        )),
        (r.MaxInt256 = i.BigNumber.from(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )));
    },
    1711: function (t, r, e) {
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
      var i = e(583),
        n = e(1716);
    },
    1712: function (t, r, e) {
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
                : e(1713).Buffer;
          } catch (I) {}
          function h(t, r) {
            var e = t.charCodeAt(r);
            return e >= 48 && e <= 57
              ? e - 48
              : e >= 65 && e <= 70
                ? e - 55
                : e >= 97 && e <= 102
                  ? e - 87
                  : void i(!1, "Invalid character in " + t);
          }
          function u(t, r, e) {
            var i = h(t, e);
            return (e - 1 >= r && (i |= h(t, e - 1) << 4), i);
          }
          function a(t, r, e, n) {
            for (
              var o = 0, s = 0, h = Math.min(t.length, e), u = r;
              u < h;
              u++
            ) {
              var a = t.charCodeAt(u) - 48;
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
                h = 0;
              if ("be" === e)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                  ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[o] |= (s << h) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - h)) & 67108863),
                    (h += 24),
                    h >= 26 && ((h -= 26), o++));
              else if ("le" === e)
                for (n = 0, o = 0; n < t.length; n += 3)
                  ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[o] |= (s << h) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - h)) & 67108863),
                    (h += 24),
                    h >= 26 && ((h -= 26), o++));
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
                  ((n = u(t, r, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var h = t.length - r;
                for (i = h % 2 === 0 ? r + 1 : r; i < t.length; i += 2)
                  ((n = u(t, r, i) << o),
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
                  h = Math.min(o, o - s) + e,
                  u = 0,
                  l = e;
                l < h;
                l += i
              )
                ((u = a(t, l, l + i, r)),
                  this.imuln(n),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              if (0 !== s) {
                var f = 1;
                for (u = a(t, l, t.length, r), l = 0; l < s; l++) f *= r;
                (this.imuln(f),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
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
          var m = [
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
            c = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            d = [
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
                var h = this.words[s],
                  u = (16777215 & ((h << n) | o)).toString(16);
                ((o = (h >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (e =
                    0 !== o || s !== this.length - 1
                      ? m[6 - u.length] + u + e
                      : u + e));
              }
              0 !== o && (e = o.toString(16) + e);
              while (e.length % r !== 0) e = "0" + e;
              return (0 !== this.negative && (e = "-" + e), e);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var a = c[t],
                l = d[t];
              e = "";
              var f = this.clone();
              f.negative = 0;
              while (!f.isZero()) {
                var g = f.modrn(l).toString(t);
                ((f = f.idivn(l)),
                  (e = f.isZero() ? g + e : m[a - g.length] + g + e));
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
          var g = function (t, r) {
            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r);
          };
          function p(t) {
            for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
              var i = (e / 26) | 0,
                n = e % 26;
              r[e] = (t.words[i] >>> n) & 1;
            }
            return r;
          }
          function v(t, r, e) {
            e.negative = r.negative ^ t.negative;
            var i = (t.length + r.length) | 0;
            ((e.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | r.words[0],
              s = n * o,
              h = 67108863 & s,
              u = (s / 67108864) | 0;
            e.words[0] = h;
            for (var a = 1; a < i; a++) {
              for (
                var l = u >>> 26,
                  f = 67108863 & u,
                  m = Math.min(a, r.length - 1),
                  c = Math.max(0, a - t.length + 1);
                c <= m;
                c++
              ) {
                var d = (a - c) | 0;
                ((n = 0 | t.words[d]),
                  (o = 0 | r.words[c]),
                  (s = n * o + f),
                  (l += (s / 67108864) | 0),
                  (f = 67108863 & s));
              }
              ((e.words[a] = 0 | f), (u = 0 | l));
            }
            return (0 !== u ? (e.words[a] = 0 | u) : e.length--, e._strip());
          }
          ((o.prototype.toArrayLike = function (t, r, e) {
            this._strip();
            var n = this.byteLength(),
              o = e || Math.max(1, n);
            (i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"));
            var s = g(t, o),
              h = "le" === r ? "LE" : "BE";
            return (this["_toArrayLike" + h](s, n), s);
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
              h = r.words,
              u = e.words,
              a = 0,
              l = 0 | s[0],
              f = 8191 & l,
              m = l >>> 13,
              c = 0 | s[1],
              d = 8191 & c,
              g = c >>> 13,
              p = 0 | s[2],
              v = 8191 & p,
              w = p >>> 13,
              y = 0 | s[3],
              M = 8191 & y,
              b = y >>> 13,
              _ = 0 | s[4],
              N = 8191 & _,
              E = _ >>> 13,
              x = 0 | s[5],
              A = 8191 & x,
              P = x >>> 13,
              S = 0 | s[6],
              O = 8191 & S,
              I = S >>> 13,
              R = 0 | s[7],
              L = 8191 & R,
              F = R >>> 13,
              T = 0 | s[8],
              U = 8191 & T,
              B = T >>> 13,
              k = 0 | s[9],
              C = 8191 & k,
              Z = k >>> 13,
              D = 0 | h[0],
              j = 8191 & D,
              G = D >>> 13,
              q = 0 | h[1],
              z = 8191 & q,
              H = q >>> 13,
              W = 0 | h[2],
              K = 8191 & W,
              V = W >>> 13,
              X = 0 | h[3],
              $ = 8191 & X,
              J = X >>> 13,
              Q = 0 | h[4],
              Y = 8191 & Q,
              tt = Q >>> 13,
              rt = 0 | h[5],
              et = 8191 & rt,
              it = rt >>> 13,
              nt = 0 | h[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              ht = 0 | h[7],
              ut = 8191 & ht,
              at = ht >>> 13,
              lt = 0 | h[8],
              ft = 8191 & lt,
              mt = lt >>> 13,
              ct = 0 | h[9],
              dt = 8191 & ct,
              gt = ct >>> 13;
            ((e.negative = t.negative ^ r.negative),
              (e.length = 19),
              (i = Math.imul(f, j)),
              (n = Math.imul(f, G)),
              (n = (n + Math.imul(m, j)) | 0),
              (o = Math.imul(m, G)));
            var pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (pt >>> 26)) | 0),
              (pt &= 67108863),
              (i = Math.imul(d, j)),
              (n = Math.imul(d, G)),
              (n = (n + Math.imul(g, j)) | 0),
              (o = Math.imul(g, G)),
              (i = (i + Math.imul(f, z)) | 0),
              (n = (n + Math.imul(f, H)) | 0),
              (n = (n + Math.imul(m, z)) | 0),
              (o = (o + Math.imul(m, H)) | 0));
            var vt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(v, j)),
              (n = Math.imul(v, G)),
              (n = (n + Math.imul(w, j)) | 0),
              (o = Math.imul(w, G)),
              (i = (i + Math.imul(d, z)) | 0),
              (n = (n + Math.imul(d, H)) | 0),
              (n = (n + Math.imul(g, z)) | 0),
              (o = (o + Math.imul(g, H)) | 0),
              (i = (i + Math.imul(f, K)) | 0),
              (n = (n + Math.imul(f, V)) | 0),
              (n = (n + Math.imul(m, K)) | 0),
              (o = (o + Math.imul(m, V)) | 0));
            var wt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(M, j)),
              (n = Math.imul(M, G)),
              (n = (n + Math.imul(b, j)) | 0),
              (o = Math.imul(b, G)),
              (i = (i + Math.imul(v, z)) | 0),
              (n = (n + Math.imul(v, H)) | 0),
              (n = (n + Math.imul(w, z)) | 0),
              (o = (o + Math.imul(w, H)) | 0),
              (i = (i + Math.imul(d, K)) | 0),
              (n = (n + Math.imul(d, V)) | 0),
              (n = (n + Math.imul(g, K)) | 0),
              (o = (o + Math.imul(g, V)) | 0),
              (i = (i + Math.imul(f, $)) | 0),
              (n = (n + Math.imul(f, J)) | 0),
              (n = (n + Math.imul(m, $)) | 0),
              (o = (o + Math.imul(m, J)) | 0));
            var yt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(N, j)),
              (n = Math.imul(N, G)),
              (n = (n + Math.imul(E, j)) | 0),
              (o = Math.imul(E, G)),
              (i = (i + Math.imul(M, z)) | 0),
              (n = (n + Math.imul(M, H)) | 0),
              (n = (n + Math.imul(b, z)) | 0),
              (o = (o + Math.imul(b, H)) | 0),
              (i = (i + Math.imul(v, K)) | 0),
              (n = (n + Math.imul(v, V)) | 0),
              (n = (n + Math.imul(w, K)) | 0),
              (o = (o + Math.imul(w, V)) | 0),
              (i = (i + Math.imul(d, $)) | 0),
              (n = (n + Math.imul(d, J)) | 0),
              (n = (n + Math.imul(g, $)) | 0),
              (o = (o + Math.imul(g, J)) | 0),
              (i = (i + Math.imul(f, Y)) | 0),
              (n = (n + Math.imul(f, tt)) | 0),
              (n = (n + Math.imul(m, Y)) | 0),
              (o = (o + Math.imul(m, tt)) | 0));
            var Mt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(A, j)),
              (n = Math.imul(A, G)),
              (n = (n + Math.imul(P, j)) | 0),
              (o = Math.imul(P, G)),
              (i = (i + Math.imul(N, z)) | 0),
              (n = (n + Math.imul(N, H)) | 0),
              (n = (n + Math.imul(E, z)) | 0),
              (o = (o + Math.imul(E, H)) | 0),
              (i = (i + Math.imul(M, K)) | 0),
              (n = (n + Math.imul(M, V)) | 0),
              (n = (n + Math.imul(b, K)) | 0),
              (o = (o + Math.imul(b, V)) | 0),
              (i = (i + Math.imul(v, $)) | 0),
              (n = (n + Math.imul(v, J)) | 0),
              (n = (n + Math.imul(w, $)) | 0),
              (o = (o + Math.imul(w, J)) | 0),
              (i = (i + Math.imul(d, Y)) | 0),
              (n = (n + Math.imul(d, tt)) | 0),
              (n = (n + Math.imul(g, Y)) | 0),
              (o = (o + Math.imul(g, tt)) | 0),
              (i = (i + Math.imul(f, et)) | 0),
              (n = (n + Math.imul(f, it)) | 0),
              (n = (n + Math.imul(m, et)) | 0),
              (o = (o + Math.imul(m, it)) | 0));
            var bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(O, j)),
              (n = Math.imul(O, G)),
              (n = (n + Math.imul(I, j)) | 0),
              (o = Math.imul(I, G)),
              (i = (i + Math.imul(A, z)) | 0),
              (n = (n + Math.imul(A, H)) | 0),
              (n = (n + Math.imul(P, z)) | 0),
              (o = (o + Math.imul(P, H)) | 0),
              (i = (i + Math.imul(N, K)) | 0),
              (n = (n + Math.imul(N, V)) | 0),
              (n = (n + Math.imul(E, K)) | 0),
              (o = (o + Math.imul(E, V)) | 0),
              (i = (i + Math.imul(M, $)) | 0),
              (n = (n + Math.imul(M, J)) | 0),
              (n = (n + Math.imul(b, $)) | 0),
              (o = (o + Math.imul(b, J)) | 0),
              (i = (i + Math.imul(v, Y)) | 0),
              (n = (n + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(w, Y)) | 0),
              (o = (o + Math.imul(w, tt)) | 0),
              (i = (i + Math.imul(d, et)) | 0),
              (n = (n + Math.imul(d, it)) | 0),
              (n = (n + Math.imul(g, et)) | 0),
              (o = (o + Math.imul(g, it)) | 0),
              (i = (i + Math.imul(f, ot)) | 0),
              (n = (n + Math.imul(f, st)) | 0),
              (n = (n + Math.imul(m, ot)) | 0),
              (o = (o + Math.imul(m, st)) | 0));
            var _t = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(L, j)),
              (n = Math.imul(L, G)),
              (n = (n + Math.imul(F, j)) | 0),
              (o = Math.imul(F, G)),
              (i = (i + Math.imul(O, z)) | 0),
              (n = (n + Math.imul(O, H)) | 0),
              (n = (n + Math.imul(I, z)) | 0),
              (o = (o + Math.imul(I, H)) | 0),
              (i = (i + Math.imul(A, K)) | 0),
              (n = (n + Math.imul(A, V)) | 0),
              (n = (n + Math.imul(P, K)) | 0),
              (o = (o + Math.imul(P, V)) | 0),
              (i = (i + Math.imul(N, $)) | 0),
              (n = (n + Math.imul(N, J)) | 0),
              (n = (n + Math.imul(E, $)) | 0),
              (o = (o + Math.imul(E, J)) | 0),
              (i = (i + Math.imul(M, Y)) | 0),
              (n = (n + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (o = (o + Math.imul(b, tt)) | 0),
              (i = (i + Math.imul(v, et)) | 0),
              (n = (n + Math.imul(v, it)) | 0),
              (n = (n + Math.imul(w, et)) | 0),
              (o = (o + Math.imul(w, it)) | 0),
              (i = (i + Math.imul(d, ot)) | 0),
              (n = (n + Math.imul(d, st)) | 0),
              (n = (n + Math.imul(g, ot)) | 0),
              (o = (o + Math.imul(g, st)) | 0),
              (i = (i + Math.imul(f, ut)) | 0),
              (n = (n + Math.imul(f, at)) | 0),
              (n = (n + Math.imul(m, ut)) | 0),
              (o = (o + Math.imul(m, at)) | 0));
            var Nt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (i = Math.imul(U, j)),
              (n = Math.imul(U, G)),
              (n = (n + Math.imul(B, j)) | 0),
              (o = Math.imul(B, G)),
              (i = (i + Math.imul(L, z)) | 0),
              (n = (n + Math.imul(L, H)) | 0),
              (n = (n + Math.imul(F, z)) | 0),
              (o = (o + Math.imul(F, H)) | 0),
              (i = (i + Math.imul(O, K)) | 0),
              (n = (n + Math.imul(O, V)) | 0),
              (n = (n + Math.imul(I, K)) | 0),
              (o = (o + Math.imul(I, V)) | 0),
              (i = (i + Math.imul(A, $)) | 0),
              (n = (n + Math.imul(A, J)) | 0),
              (n = (n + Math.imul(P, $)) | 0),
              (o = (o + Math.imul(P, J)) | 0),
              (i = (i + Math.imul(N, Y)) | 0),
              (n = (n + Math.imul(N, tt)) | 0),
              (n = (n + Math.imul(E, Y)) | 0),
              (o = (o + Math.imul(E, tt)) | 0),
              (i = (i + Math.imul(M, et)) | 0),
              (n = (n + Math.imul(M, it)) | 0),
              (n = (n + Math.imul(b, et)) | 0),
              (o = (o + Math.imul(b, it)) | 0),
              (i = (i + Math.imul(v, ot)) | 0),
              (n = (n + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(w, ot)) | 0),
              (o = (o + Math.imul(w, st)) | 0),
              (i = (i + Math.imul(d, ut)) | 0),
              (n = (n + Math.imul(d, at)) | 0),
              (n = (n + Math.imul(g, ut)) | 0),
              (o = (o + Math.imul(g, at)) | 0),
              (i = (i + Math.imul(f, ft)) | 0),
              (n = (n + Math.imul(f, mt)) | 0),
              (n = (n + Math.imul(m, ft)) | 0),
              (o = (o + Math.imul(m, mt)) | 0));
            var Et = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(C, j)),
              (n = Math.imul(C, G)),
              (n = (n + Math.imul(Z, j)) | 0),
              (o = Math.imul(Z, G)),
              (i = (i + Math.imul(U, z)) | 0),
              (n = (n + Math.imul(U, H)) | 0),
              (n = (n + Math.imul(B, z)) | 0),
              (o = (o + Math.imul(B, H)) | 0),
              (i = (i + Math.imul(L, K)) | 0),
              (n = (n + Math.imul(L, V)) | 0),
              (n = (n + Math.imul(F, K)) | 0),
              (o = (o + Math.imul(F, V)) | 0),
              (i = (i + Math.imul(O, $)) | 0),
              (n = (n + Math.imul(O, J)) | 0),
              (n = (n + Math.imul(I, $)) | 0),
              (o = (o + Math.imul(I, J)) | 0),
              (i = (i + Math.imul(A, Y)) | 0),
              (n = (n + Math.imul(A, tt)) | 0),
              (n = (n + Math.imul(P, Y)) | 0),
              (o = (o + Math.imul(P, tt)) | 0),
              (i = (i + Math.imul(N, et)) | 0),
              (n = (n + Math.imul(N, it)) | 0),
              (n = (n + Math.imul(E, et)) | 0),
              (o = (o + Math.imul(E, it)) | 0),
              (i = (i + Math.imul(M, ot)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (o = (o + Math.imul(b, st)) | 0),
              (i = (i + Math.imul(v, ut)) | 0),
              (n = (n + Math.imul(v, at)) | 0),
              (n = (n + Math.imul(w, ut)) | 0),
              (o = (o + Math.imul(w, at)) | 0),
              (i = (i + Math.imul(d, ft)) | 0),
              (n = (n + Math.imul(d, mt)) | 0),
              (n = (n + Math.imul(g, ft)) | 0),
              (o = (o + Math.imul(g, mt)) | 0),
              (i = (i + Math.imul(f, dt)) | 0),
              (n = (n + Math.imul(f, gt)) | 0),
              (n = (n + Math.imul(m, dt)) | 0),
              (o = (o + Math.imul(m, gt)) | 0));
            var xt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(C, z)),
              (n = Math.imul(C, H)),
              (n = (n + Math.imul(Z, z)) | 0),
              (o = Math.imul(Z, H)),
              (i = (i + Math.imul(U, K)) | 0),
              (n = (n + Math.imul(U, V)) | 0),
              (n = (n + Math.imul(B, K)) | 0),
              (o = (o + Math.imul(B, V)) | 0),
              (i = (i + Math.imul(L, $)) | 0),
              (n = (n + Math.imul(L, J)) | 0),
              (n = (n + Math.imul(F, $)) | 0),
              (o = (o + Math.imul(F, J)) | 0),
              (i = (i + Math.imul(O, Y)) | 0),
              (n = (n + Math.imul(O, tt)) | 0),
              (n = (n + Math.imul(I, Y)) | 0),
              (o = (o + Math.imul(I, tt)) | 0),
              (i = (i + Math.imul(A, et)) | 0),
              (n = (n + Math.imul(A, it)) | 0),
              (n = (n + Math.imul(P, et)) | 0),
              (o = (o + Math.imul(P, it)) | 0),
              (i = (i + Math.imul(N, ot)) | 0),
              (n = (n + Math.imul(N, st)) | 0),
              (n = (n + Math.imul(E, ot)) | 0),
              (o = (o + Math.imul(E, st)) | 0),
              (i = (i + Math.imul(M, ut)) | 0),
              (n = (n + Math.imul(M, at)) | 0),
              (n = (n + Math.imul(b, ut)) | 0),
              (o = (o + Math.imul(b, at)) | 0),
              (i = (i + Math.imul(v, ft)) | 0),
              (n = (n + Math.imul(v, mt)) | 0),
              (n = (n + Math.imul(w, ft)) | 0),
              (o = (o + Math.imul(w, mt)) | 0),
              (i = (i + Math.imul(d, dt)) | 0),
              (n = (n + Math.imul(d, gt)) | 0),
              (n = (n + Math.imul(g, dt)) | 0),
              (o = (o + Math.imul(g, gt)) | 0));
            var At = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(C, K)),
              (n = Math.imul(C, V)),
              (n = (n + Math.imul(Z, K)) | 0),
              (o = Math.imul(Z, V)),
              (i = (i + Math.imul(U, $)) | 0),
              (n = (n + Math.imul(U, J)) | 0),
              (n = (n + Math.imul(B, $)) | 0),
              (o = (o + Math.imul(B, J)) | 0),
              (i = (i + Math.imul(L, Y)) | 0),
              (n = (n + Math.imul(L, tt)) | 0),
              (n = (n + Math.imul(F, Y)) | 0),
              (o = (o + Math.imul(F, tt)) | 0),
              (i = (i + Math.imul(O, et)) | 0),
              (n = (n + Math.imul(O, it)) | 0),
              (n = (n + Math.imul(I, et)) | 0),
              (o = (o + Math.imul(I, it)) | 0),
              (i = (i + Math.imul(A, ot)) | 0),
              (n = (n + Math.imul(A, st)) | 0),
              (n = (n + Math.imul(P, ot)) | 0),
              (o = (o + Math.imul(P, st)) | 0),
              (i = (i + Math.imul(N, ut)) | 0),
              (n = (n + Math.imul(N, at)) | 0),
              (n = (n + Math.imul(E, ut)) | 0),
              (o = (o + Math.imul(E, at)) | 0),
              (i = (i + Math.imul(M, ft)) | 0),
              (n = (n + Math.imul(M, mt)) | 0),
              (n = (n + Math.imul(b, ft)) | 0),
              (o = (o + Math.imul(b, mt)) | 0),
              (i = (i + Math.imul(v, dt)) | 0),
              (n = (n + Math.imul(v, gt)) | 0),
              (n = (n + Math.imul(w, dt)) | 0),
              (o = (o + Math.imul(w, gt)) | 0));
            var Pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(C, $)),
              (n = Math.imul(C, J)),
              (n = (n + Math.imul(Z, $)) | 0),
              (o = Math.imul(Z, J)),
              (i = (i + Math.imul(U, Y)) | 0),
              (n = (n + Math.imul(U, tt)) | 0),
              (n = (n + Math.imul(B, Y)) | 0),
              (o = (o + Math.imul(B, tt)) | 0),
              (i = (i + Math.imul(L, et)) | 0),
              (n = (n + Math.imul(L, it)) | 0),
              (n = (n + Math.imul(F, et)) | 0),
              (o = (o + Math.imul(F, it)) | 0),
              (i = (i + Math.imul(O, ot)) | 0),
              (n = (n + Math.imul(O, st)) | 0),
              (n = (n + Math.imul(I, ot)) | 0),
              (o = (o + Math.imul(I, st)) | 0),
              (i = (i + Math.imul(A, ut)) | 0),
              (n = (n + Math.imul(A, at)) | 0),
              (n = (n + Math.imul(P, ut)) | 0),
              (o = (o + Math.imul(P, at)) | 0),
              (i = (i + Math.imul(N, ft)) | 0),
              (n = (n + Math.imul(N, mt)) | 0),
              (n = (n + Math.imul(E, ft)) | 0),
              (o = (o + Math.imul(E, mt)) | 0),
              (i = (i + Math.imul(M, dt)) | 0),
              (n = (n + Math.imul(M, gt)) | 0),
              (n = (n + Math.imul(b, dt)) | 0),
              (o = (o + Math.imul(b, gt)) | 0));
            var St = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(C, Y)),
              (n = Math.imul(C, tt)),
              (n = (n + Math.imul(Z, Y)) | 0),
              (o = Math.imul(Z, tt)),
              (i = (i + Math.imul(U, et)) | 0),
              (n = (n + Math.imul(U, it)) | 0),
              (n = (n + Math.imul(B, et)) | 0),
              (o = (o + Math.imul(B, it)) | 0),
              (i = (i + Math.imul(L, ot)) | 0),
              (n = (n + Math.imul(L, st)) | 0),
              (n = (n + Math.imul(F, ot)) | 0),
              (o = (o + Math.imul(F, st)) | 0),
              (i = (i + Math.imul(O, ut)) | 0),
              (n = (n + Math.imul(O, at)) | 0),
              (n = (n + Math.imul(I, ut)) | 0),
              (o = (o + Math.imul(I, at)) | 0),
              (i = (i + Math.imul(A, ft)) | 0),
              (n = (n + Math.imul(A, mt)) | 0),
              (n = (n + Math.imul(P, ft)) | 0),
              (o = (o + Math.imul(P, mt)) | 0),
              (i = (i + Math.imul(N, dt)) | 0),
              (n = (n + Math.imul(N, gt)) | 0),
              (n = (n + Math.imul(E, dt)) | 0),
              (o = (o + Math.imul(E, gt)) | 0));
            var Ot = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(C, et)),
              (n = Math.imul(C, it)),
              (n = (n + Math.imul(Z, et)) | 0),
              (o = Math.imul(Z, it)),
              (i = (i + Math.imul(U, ot)) | 0),
              (n = (n + Math.imul(U, st)) | 0),
              (n = (n + Math.imul(B, ot)) | 0),
              (o = (o + Math.imul(B, st)) | 0),
              (i = (i + Math.imul(L, ut)) | 0),
              (n = (n + Math.imul(L, at)) | 0),
              (n = (n + Math.imul(F, ut)) | 0),
              (o = (o + Math.imul(F, at)) | 0),
              (i = (i + Math.imul(O, ft)) | 0),
              (n = (n + Math.imul(O, mt)) | 0),
              (n = (n + Math.imul(I, ft)) | 0),
              (o = (o + Math.imul(I, mt)) | 0),
              (i = (i + Math.imul(A, dt)) | 0),
              (n = (n + Math.imul(A, gt)) | 0),
              (n = (n + Math.imul(P, dt)) | 0),
              (o = (o + Math.imul(P, gt)) | 0));
            var It = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (i = Math.imul(C, ot)),
              (n = Math.imul(C, st)),
              (n = (n + Math.imul(Z, ot)) | 0),
              (o = Math.imul(Z, st)),
              (i = (i + Math.imul(U, ut)) | 0),
              (n = (n + Math.imul(U, at)) | 0),
              (n = (n + Math.imul(B, ut)) | 0),
              (o = (o + Math.imul(B, at)) | 0),
              (i = (i + Math.imul(L, ft)) | 0),
              (n = (n + Math.imul(L, mt)) | 0),
              (n = (n + Math.imul(F, ft)) | 0),
              (o = (o + Math.imul(F, mt)) | 0),
              (i = (i + Math.imul(O, dt)) | 0),
              (n = (n + Math.imul(O, gt)) | 0),
              (n = (n + Math.imul(I, dt)) | 0),
              (o = (o + Math.imul(I, gt)) | 0));
            var Rt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(C, ut)),
              (n = Math.imul(C, at)),
              (n = (n + Math.imul(Z, ut)) | 0),
              (o = Math.imul(Z, at)),
              (i = (i + Math.imul(U, ft)) | 0),
              (n = (n + Math.imul(U, mt)) | 0),
              (n = (n + Math.imul(B, ft)) | 0),
              (o = (o + Math.imul(B, mt)) | 0),
              (i = (i + Math.imul(L, dt)) | 0),
              (n = (n + Math.imul(L, gt)) | 0),
              (n = (n + Math.imul(F, dt)) | 0),
              (o = (o + Math.imul(F, gt)) | 0));
            var Lt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Lt >>> 26)) | 0),
              (Lt &= 67108863),
              (i = Math.imul(C, ft)),
              (n = Math.imul(C, mt)),
              (n = (n + Math.imul(Z, ft)) | 0),
              (o = Math.imul(Z, mt)),
              (i = (i + Math.imul(U, dt)) | 0),
              (n = (n + Math.imul(U, gt)) | 0),
              (n = (n + Math.imul(B, dt)) | 0),
              (o = (o + Math.imul(B, gt)) | 0));
            var Ft = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ft >>> 26)) | 0),
              (Ft &= 67108863),
              (i = Math.imul(C, dt)),
              (n = Math.imul(C, gt)),
              (n = (n + Math.imul(Z, dt)) | 0),
              (o = Math.imul(Z, gt)));
            var Tt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (a = (((o + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (u[0] = pt),
              (u[1] = vt),
              (u[2] = wt),
              (u[3] = yt),
              (u[4] = Mt),
              (u[5] = bt),
              (u[6] = _t),
              (u[7] = Nt),
              (u[8] = Et),
              (u[9] = xt),
              (u[10] = At),
              (u[11] = Pt),
              (u[12] = St),
              (u[13] = Ot),
              (u[14] = It),
              (u[15] = Rt),
              (u[16] = Lt),
              (u[17] = Ft),
              (u[18] = Tt),
              0 !== a && ((u[19] = a), e.length++),
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
                var h = 67108863 & i,
                  u = Math.min(o, r.length - 1),
                  a = Math.max(0, o - t.length + 1);
                a <= u;
                a++
              ) {
                var l = o - a,
                  f = 0 | t.words[l],
                  m = 0 | r.words[a],
                  c = f * m,
                  d = 67108863 & c;
                ((s = (s + ((c / 67108864) | 0)) | 0),
                  (d = (d + h) | 0),
                  (h = 67108863 & d),
                  (s = (s + (d >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((e.words[o] = h), (i = s), (s = n));
            }
            return (0 !== i ? (e.words[o] = i) : e.length--, e._strip());
          }
          function M(t, r, e) {
            return y(t, r, e);
          }
          function b(t, r) {
            ((this.x = t), (this.y = r));
          }
          (Math.imul || (w = v),
            (o.prototype.mulTo = function (t, r) {
              var e,
                i = this.length + t.length;
              return (
                (e =
                  10 === this.length && 10 === t.length
                    ? w(this, t, r)
                    : i < 63
                      ? v(this, t, r)
                      : i < 1024
                        ? y(this, t, r)
                        : M(this, t, r)),
                e
              );
            }),
            (b.prototype.makeRBT = function (t) {
              for (
                var r = new Array(t), e = o.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                r[i] = this.revBin(i, e, t);
              return r;
            }),
            (b.prototype.revBin = function (t, r, e) {
              if (0 === t || t === e - 1) return t;
              for (var i = 0, n = 0; n < r; n++)
                ((i |= (1 & t) << (r - n - 1)), (t >>= 1));
              return i;
            }),
            (b.prototype.permute = function (t, r, e, i, n, o) {
              for (var s = 0; s < o; s++) ((i[s] = r[t[s]]), (n[s] = e[t[s]]));
            }),
            (b.prototype.transform = function (t, r, e, i, n, o) {
              this.permute(o, t, r, e, i, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var h = s << 1,
                    u = Math.cos((2 * Math.PI) / h),
                    a = Math.sin((2 * Math.PI) / h),
                    l = 0;
                  l < n;
                  l += h
                )
                  for (var f = u, m = a, c = 0; c < s; c++) {
                    var d = e[l + c],
                      g = i[l + c],
                      p = e[l + c + s],
                      v = i[l + c + s],
                      w = f * p - m * v;
                    ((v = f * v + m * p),
                      (p = w),
                      (e[l + c] = d + p),
                      (i[l + c] = g + v),
                      (e[l + c + s] = d - p),
                      (i[l + c + s] = g - v),
                      c !== h &&
                        ((w = u * f - a * m), (m = u * m + a * f), (f = w)));
                  }
            }),
            (b.prototype.guessLen13b = function (t, r) {
              var e = 1 | Math.max(r, t),
                i = 1 & e,
                n = 0;
              for (e = (e / 2) | 0; e; e >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (b.prototype.conjugate = function (t, r, e) {
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
            (b.prototype.normalize13b = function (t, r) {
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
            (b.prototype.convert13b = function (t, r, e, n) {
              for (var o = 0, s = 0; s < r; s++)
                ((o += 0 | t[s]),
                  (e[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (e[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * r; s < n; ++s) e[s] = 0;
              (i(0 === o), i(0 === (-8192 & o)));
            }),
            (b.prototype.stub = function (t) {
              for (var r = new Array(t), e = 0; e < t; e++) r[e] = 0;
              return r;
            }),
            (b.prototype.mulp = function (t, r, e) {
              var i = 2 * this.guessLen13b(t.length, r.length),
                n = this.makeRBT(i),
                o = this.stub(i),
                s = new Array(i),
                h = new Array(i),
                u = new Array(i),
                a = new Array(i),
                l = new Array(i),
                f = new Array(i),
                m = e.words;
              ((m.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(r.words, r.length, a, i),
                this.transform(s, o, h, u, i, n),
                this.transform(a, o, l, f, i, n));
              for (var c = 0; c < i; c++) {
                var d = h[c] * l[c] - u[c] * f[c];
                ((u[c] = h[c] * f[c] + u[c] * l[c]), (h[c] = d));
              }
              return (
                this.conjugate(h, u, i),
                this.transform(h, u, m, o, i, n),
                this.conjugate(m, o, i),
                this.normalize13b(m, i),
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
              var r = p(t);
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
                  var h = this.words[r] & o,
                    u = ((0 | this.words[r]) - h) << e;
                  ((this.words[r] = u | s), (s = h >>> (26 - e)));
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
                h = 67108863 ^ ((67108863 >>> o) << o),
                u = e;
              if (((n -= s), (n = Math.max(0, n)), u)) {
                for (var a = 0; a < s; a++) u.words[a] = this.words[a];
                u.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, a = 0; a < this.length; a++)
                  this.words[a] = this.words[a + s];
              else ((this.words[0] = 0), (this.length = 1));
              var l = 0;
              for (a = this.length - 1; a >= 0 && (0 !== l || a >= n); a--) {
                var f = 0 | this.words[a];
                ((this.words[a] = (l << (26 - o)) | (f >>> o)), (l = f & h));
              }
              return (
                u && 0 !== l && (u.words[u.length++] = l),
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
              var h = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + e]) + h;
                var u = (0 | t.words[n]) * r;
                ((o -= 67108863 & u),
                  (h = (o >> 26) - ((u / 67108864) | 0)),
                  (this.words[n + e] = 67108863 & o));
              }
              for (; n < this.length - e; n++)
                ((o = (0 | this.words[n + e]) + h),
                  (h = o >> 26),
                  (this.words[n + e] = 67108863 & o));
              if (0 === h) return this._strip();
              for (i(-1 === h), h = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + h),
                  (h = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, r) {
              var e = this.length - t.length,
                i = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                h = this._countBits(s);
              ((e = 26 - h),
                0 !== e &&
                  ((n = n.ushln(e)),
                  i.iushln(e),
                  (s = 0 | n.words[n.length - 1])));
              var u,
                a = i.length - n.length;
              if ("mod" !== r) {
                ((u = new o(null)),
                  (u.length = a + 1),
                  (u.words = new Array(u.length)));
                for (var l = 0; l < u.length; l++) u.words[l] = 0;
              }
              var f = i.clone()._ishlnsubmul(n, 1, a);
              0 === f.negative && ((i = f), u && (u.words[a] = 1));
              for (var m = a - 1; m >= 0; m--) {
                var c =
                  67108864 * (0 | i.words[n.length + m]) +
                  (0 | i.words[n.length + m - 1]);
                ((c = Math.min((c / s) | 0, 67108863)),
                  i._ishlnsubmul(n, c, m));
                while (0 !== i.negative)
                  (c--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, m),
                    i.isZero() || (i.negative ^= 1));
                u && (u.words[m] = c);
              }
              return (
                u && u._strip(),
                i._strip(),
                "div" !== r && 0 !== e && i.iushrn(e),
                { div: u || null, mod: i }
              );
            }),
            (o.prototype.divmod = function (t, r, e) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((h = this.neg().divmod(t, r)),
                      "mod" !== r && (n = h.div.neg()),
                      "div" !== r &&
                        ((s = h.mod.neg()), e && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((h = this.divmod(t.neg(), r)),
                        "mod" !== r && (n = h.div.neg()),
                        { div: n, mod: h.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((h = this.neg().divmod(t.neg(), r)),
                          "div" !== r &&
                            ((s = h.mod.neg()),
                            e && 0 !== s.negative && s.isub(t)),
                          { div: h.div, mod: s })
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
              var n, s, h;
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
                h = new o(0),
                u = new o(1),
                a = 0;
              while (r.isEven() && e.isEven()) (r.iushrn(1), e.iushrn(1), ++a);
              var l = e.clone(),
                f = r.clone();
              while (!r.isZero()) {
                for (
                  var m = 0, c = 1;
                  0 === (r.words[0] & c) && m < 26;
                  ++m, c <<= 1
                );
                if (m > 0) {
                  r.iushrn(m);
                  while (m-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(f)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var d = 0, g = 1;
                  0 === (e.words[0] & g) && d < 26;
                  ++d, g <<= 1
                );
                if (d > 0) {
                  e.iushrn(d);
                  while (d-- > 0)
                    ((h.isOdd() || u.isOdd()) && (h.iadd(l), u.isub(f)),
                      h.iushrn(1),
                      u.iushrn(1));
                }
                r.cmp(e) >= 0
                  ? (r.isub(e), n.isub(h), s.isub(u))
                  : (e.isub(r), h.isub(n), u.isub(s));
              }
              return { a: h, b: u, gcd: e.iushln(a) };
            }),
            (o.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var r = this,
                e = t.clone();
              r = 0 !== r.negative ? r.umod(t) : r.clone();
              var n,
                s = new o(1),
                h = new o(0),
                u = e.clone();
              while (r.cmpn(1) > 0 && e.cmpn(1) > 0) {
                for (
                  var a = 0, l = 1;
                  0 === (r.words[0] & l) && a < 26;
                  ++a, l <<= 1
                );
                if (a > 0) {
                  r.iushrn(a);
                  while (a-- > 0) (s.isOdd() && s.iadd(u), s.iushrn(1));
                }
                for (
                  var f = 0, m = 1;
                  0 === (e.words[0] & m) && f < 26;
                  ++f, m <<= 1
                );
                if (f > 0) {
                  e.iushrn(f);
                  while (f-- > 0) (h.isOdd() && h.iadd(u), h.iushrn(1));
                }
                r.cmp(e) >= 0 ? (r.isub(e), s.isub(h)) : (e.isub(r), h.isub(s));
              }
              return (
                (n = 0 === r.cmpn(1) ? s : h),
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
                var h = 0 | this.words[s];
                ((h += o),
                  (o = h >>> 26),
                  (h &= 67108863),
                  (this.words[s] = h));
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
          var _ = { k256: null, p224: null, p192: null, p25519: null };
          function N(t, r) {
            ((this.name = t),
              (this.p = new o(r, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function E() {
            N.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function x() {
            N.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function A() {
            N.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function P() {
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
          function O(t) {
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
            n(E, N),
            (E.prototype.split = function (t, r) {
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
            (E.prototype.imulK = function (t) {
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
            n(x, N),
            n(A, N),
            n(P, N),
            (P.prototype.imulK = function (t) {
              for (var r = 0, e = 0; e < t.length; e++) {
                var i = 19 * (0 | t.words[e]) + r,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[e] = n), (r = i));
              }
              return (0 !== r && (t.words[t.length++] = r), t);
            }),
            (o._prime = function (t) {
              if (_[t]) return _[t];
              var r;
              if ("k256" === t) r = new E();
              else if ("p224" === t) r = new x();
              else if ("p192" === t) r = new A();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                r = new P();
              }
              return ((_[t] = r), r);
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
              var h = new o(1).toRed(this),
                u = h.redNeg(),
                a = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              l = new o(2 * l * l).toRed(this);
              while (0 !== this.pow(l, a).cmp(u)) l.redIAdd(u);
              var f = this.pow(l, n),
                m = this.pow(t, n.addn(1).iushrn(1)),
                c = this.pow(t, n),
                d = s;
              while (0 !== c.cmp(h)) {
                for (var g = c, p = 0; 0 !== g.cmp(h); p++) g = g.redSqr();
                i(p < d);
                var v = this.pow(f, new o(1).iushln(d - p - 1));
                ((m = m.redMul(v)),
                  (f = v.redSqr()),
                  (c = c.redMul(f)),
                  (d = p));
              }
              return m;
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
                h = 0,
                u = 0,
                a = r.bitLength() % 26;
              for (0 === a && (a = 26), n = r.length - 1; n >= 0; n--) {
                for (var l = r.words[n], f = a - 1; f >= 0; f--) {
                  var m = (l >> f) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== m || 0 !== h
                      ? ((h <<= 1),
                        (h |= m),
                        u++,
                        (u === e || (0 === n && 0 === f)) &&
                          ((s = this.mul(s, i[h])), (u = 0), (h = 0)))
                      : (u = 0));
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
              return new O(t);
            }),
            n(O, S),
            (O.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (O.prototype.convertFrom = function (t) {
              var r = this.imod(t.mul(this.rinv));
              return ((r.red = null), r);
            }),
            (O.prototype.imul = function (t, r) {
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
            (O.prototype.mul = function (t, r) {
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
            (O.prototype.invm = function (t) {
              var r = this.imod(t._invmp(this.m).mul(this.r2));
              return r._forceRed(this);
            }));
        })(t, this);
      }).call(this, e(20)(t));
    },
    1714: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "logger/5.8.0";
    },
    1715: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bytes/5.8.0";
    },
    1716: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.FixedNumber = r.FixedFormat = void 0),
        (r.formatFixed = d),
        (r.parseFixed = g));
      var i = e(177),
        n = e(178),
        o = e(584),
        s = e(583);
      const h = new n.Logger(o.version),
        u = {},
        a = s.BigNumber.from(0),
        l = s.BigNumber.from(-1);
      function f(t, r, e, i) {
        const o = { fault: r, operation: e };
        return (
          void 0 !== i && (o.value = i),
          h.throwError(t, n.Logger.errors.NUMERIC_FAULT, o)
        );
      }
      let m = "0";
      while (m.length < 256) m += m;
      function c(t) {
        if ("number" !== typeof t)
          try {
            t = s.BigNumber.from(t).toNumber();
          } catch (r) {}
        return "number" === typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + m.substring(0, t)
          : h.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function d(t, r) {
        null == r && (r = 0);
        const e = c(r);
        t = s.BigNumber.from(t);
        const i = t.lt(a);
        i && (t = t.mul(l));
        let n = t.mod(e).toString();
        while (n.length < e.length - 1) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = t.div(e).toString();
        return ((t = 1 === e.length ? o : o + "." + n), i && (t = "-" + t), t);
      }
      function g(t, r) {
        null == r && (r = 0);
        const e = c(r);
        ("string" === typeof t && t.match(/^-?[0-9.]+$/)) ||
          h.throwArgumentError("invalid decimal value", "value", t);
        const i = "-" === t.substring(0, 1);
        (i && (t = t.substring(1)),
          "." === t && h.throwArgumentError("missing value", "value", t));
        const n = t.split(".");
        n.length > 2 &&
          h.throwArgumentError("too many decimal points", "value", t);
        let o = n[0],
          u = n[1];
        (o || (o = "0"), u || (u = "0"));
        while ("0" === u[u.length - 1]) u = u.substring(0, u.length - 1);
        (u.length > e.length - 1 &&
          f("fractional component exceeds decimals", "underflow", "parseFixed"),
          "" === u && (u = "0"));
        while (u.length < e.length - 1) u += "0";
        const a = s.BigNumber.from(o),
          m = s.BigNumber.from(u);
        let d = a.mul(e).add(m);
        return (i && (d = d.mul(l)), d);
      }
      class FixedFormat {
        constructor(t, r, e, i) {
          (t !== u &&
            h.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              n.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.signed = r),
            (this.width = e),
            (this.decimals = i),
            (this.name =
              (r ? "" : "u") + "fixed" + String(e) + "x" + String(i)),
            (this._multiplier = c(i)),
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
              (n || h.throwArgumentError("invalid fixed format", "format", t),
                (r = "u" !== n[1]),
                (e = parseInt(n[2])),
                (i = parseInt(n[3])));
            }
          else if (t) {
            const n = (r, e, i) =>
              null == t[r]
                ? i
                : (typeof t[r] !== e &&
                    h.throwArgumentError(
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
              h.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                e,
              ),
            i > 80 &&
              h.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                i,
              ),
            new FixedFormat(u, r, e, i)
          );
        }
      }
      r.FixedFormat = FixedFormat;
      class FixedNumber {
        constructor(t, r, e, i) {
          (t !== u &&
            h.throwError(
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
            h.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              t,
            );
        }
        addUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.add(e),
            this.format.decimals,
            this.format,
          );
        }
        subUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.sub(e),
            this.format.decimals,
            this.format,
          );
        }
        mulUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.mul(e).div(this.format._multiplier),
            this.format.decimals,
            this.format,
          );
        }
        divUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
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
            this.isNegative() && e && (r = r.subUnsafe(p.toFormat(r.format))),
            r
          );
        }
        ceiling() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let r = FixedNumber.from(t[0], this.format);
          const e = !t[1].match(/^(0*)$/);
          return (
            !this.isNegative() && e && (r = r.addUnsafe(p.toFormat(r.format))),
            r
          );
        }
        round(t) {
          null == t && (t = 0);
          const r = this.toString().split(".");
          if (
            (1 === r.length && r.push("0"),
            (t < 0 || t > 80 || t % 1) &&
              h.throwArgumentError("invalid decimal count", "decimals", t),
            r[1].length <= t)
          )
            return this;
          const e = FixedNumber.from("1" + m.substring(0, t), this.format),
            i = v.toFormat(this.format);
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
          t % 8 && h.throwArgumentError("invalid byte width", "width", t);
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
            FixedNumber.fromString(d(t, r), FixedFormat.from(e))
          );
        }
        static fromString(t, r) {
          null == r && (r = "fixed");
          const e = FixedFormat.from(r),
            n = g(t, e.decimals);
          !e.signed &&
            n.lt(a) &&
            f("unsigned value cannot be negative", "overflow", "value", t);
          let o = null;
          e.signed
            ? (o = n.toTwos(e.width).toHexString())
            : ((o = n.toHexString()), (o = (0, i.hexZeroPad)(o, e.width / 8)));
          const s = d(n, e.decimals);
          return new FixedNumber(u, o, s, e);
        }
        static fromBytes(t, r) {
          null == r && (r = "fixed");
          const e = FixedFormat.from(r);
          if ((0, i.arrayify)(t).length > e.width / 8)
            throw new Error("overflow");
          let n = s.BigNumber.from(t);
          e.signed && (n = n.fromTwos(e.width));
          const o = n.toTwos((e.signed ? 0 : 1) + e.width).toHexString(),
            h = d(n, e.decimals);
          return new FixedNumber(u, o, h, e);
        }
        static from(t, r) {
          if ("string" === typeof t) return FixedNumber.fromString(t, r);
          if ((0, i.isBytes)(t)) return FixedNumber.fromBytes(t, r);
          try {
            return FixedNumber.fromValue(t, 0, r);
          } catch (e) {
            if (e.code !== n.Logger.errors.INVALID_ARGUMENT) throw e;
          }
          return h.throwArgumentError("invalid FixedNumber value", "value", t);
        }
        static isFixedNumber(t) {
          return !(!t || !t._isFixedNumber);
        }
      }
      r.FixedNumber = FixedNumber;
      const p = FixedNumber.from(1),
        v = FixedNumber.from("0.5");
    },
    1717: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.HashZero = void 0));
      r.HashZero =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    1718: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.EtherSymbol = void 0));
      r.EtherSymbol = "Ξ";
    },
    1721: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.TransactionTypes = void 0),
        (r.accessListify = E),
        (r.computeAddress = M),
        (r.parse = T),
        (r.recoverAddress = b),
        (r.serialize = O));
      var i = e(1722),
        n = e(291),
        o = e(96),
        s = e(1729),
        h = e(588),
        u = e(590),
        a = c(e(589)),
        l = e(1735),
        f = e(77),
        m = e(1738);
      function c(t, r) {
        if ("function" == typeof WeakMap)
          var e = new WeakMap(),
            i = new WeakMap();
        return (c = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var n,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((n = r ? i : e)) {
            if (n.has(t)) return n.get(t);
            n.set(t, s);
          }
          for (const e in t)
            "default" !== e &&
              {}.hasOwnProperty.call(t, e) &&
              ((o =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, e)) &&
              (o.get || o.set)
                ? n(s, e, o)
                : (s[e] = t[e]));
          return s;
        })(t, r);
      }
      const d = new f.Logger(m.version);
      var g;
      function p(t) {
        return "0x" === t ? null : (0, i.getAddress)(t);
      }
      function v(t) {
        return "0x" === t ? s.Zero : n.BigNumber.from(t);
      }
      (function (t) {
        ((t[(t["legacy"] = 0)] = "legacy"),
          (t[(t["eip2930"] = 1)] = "eip2930"),
          (t[(t["eip1559"] = 2)] = "eip1559"));
      })(g || (r.TransactionTypes = g = {}));
      const w = [
          { name: "nonce", maxLength: 32, numeric: !0 },
          { name: "gasPrice", maxLength: 32, numeric: !0 },
          { name: "gasLimit", maxLength: 32, numeric: !0 },
          { name: "to", length: 20 },
          { name: "value", maxLength: 32, numeric: !0 },
          { name: "data" },
        ],
        y = {
          chainId: !0,
          data: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          type: !0,
          value: !0,
        };
      function M(t) {
        const r = (0, l.computePublicKey)(t);
        return (0, i.getAddress)(
          (0, o.hexDataSlice)((0, h.keccak256)((0, o.hexDataSlice)(r, 1)), 12),
        );
      }
      function b(t, r) {
        return M((0, l.recoverPublicKey)((0, o.arrayify)(t), r));
      }
      function _(t, r) {
        const e = (0, o.stripZeros)(n.BigNumber.from(t).toHexString());
        return (
          e.length > 32 &&
            d.throwArgumentError(
              "invalid length for " + r,
              "transaction:" + r,
              t,
            ),
          e
        );
      }
      function N(t, r) {
        return {
          address: (0, i.getAddress)(t),
          storageKeys: (r || []).map(
            (r, e) => (
              32 !== (0, o.hexDataLength)(r) &&
                d.throwArgumentError(
                  "invalid access list storageKey",
                  `accessList[${t}:${e}]`,
                  r,
                ),
              r.toLowerCase()
            ),
          ),
        };
      }
      function E(t) {
        if (Array.isArray(t))
          return t.map((t, r) =>
            Array.isArray(t)
              ? (t.length > 2 &&
                  d.throwArgumentError(
                    "access list expected to be [ address, storageKeys[] ]",
                    `value[${r}]`,
                    t,
                  ),
                N(t[0], t[1]))
              : N(t.address, t.storageKeys),
          );
        const r = Object.keys(t).map((r) => {
          const e = t[r].reduce((t, r) => ((t[r] = !0), t), {});
          return N(r, Object.keys(e).sort());
        });
        return (r.sort((t, r) => t.address.localeCompare(r.address)), r);
      }
      function x(t) {
        return E(t).map((t) => [t.address, t.storageKeys]);
      }
      function A(t, r) {
        if (null != t.gasPrice) {
          const r = n.BigNumber.from(t.gasPrice),
            e = n.BigNumber.from(t.maxFeePerGas || 0);
          r.eq(e) ||
            d.throwArgumentError(
              "mismatch EIP-1559 gasPrice != maxFeePerGas",
              "tx",
              { gasPrice: r, maxFeePerGas: e },
            );
        }
        const e = [
          _(t.chainId || 0, "chainId"),
          _(t.nonce || 0, "nonce"),
          _(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          _(t.maxFeePerGas || 0, "maxFeePerGas"),
          _(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, i.getAddress)(t.to) : "0x",
          _(t.value || 0, "value"),
          t.data || "0x",
          x(t.accessList || []),
        ];
        if (r) {
          const t = (0, o.splitSignature)(r);
          (e.push(_(t.recoveryParam, "recoveryParam")),
            e.push((0, o.stripZeros)(t.r)),
            e.push((0, o.stripZeros)(t.s)));
        }
        return (0, o.hexConcat)(["0x02", a.encode(e)]);
      }
      function P(t, r) {
        const e = [
          _(t.chainId || 0, "chainId"),
          _(t.nonce || 0, "nonce"),
          _(t.gasPrice || 0, "gasPrice"),
          _(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, i.getAddress)(t.to) : "0x",
          _(t.value || 0, "value"),
          t.data || "0x",
          x(t.accessList || []),
        ];
        if (r) {
          const t = (0, o.splitSignature)(r);
          (e.push(_(t.recoveryParam, "recoveryParam")),
            e.push((0, o.stripZeros)(t.r)),
            e.push((0, o.stripZeros)(t.s)));
        }
        return (0, o.hexConcat)(["0x01", a.encode(e)]);
      }
      function S(t, r) {
        (0, u.checkProperties)(t, y);
        const e = [];
        w.forEach(function (r) {
          let i = t[r.name] || [];
          const n = {};
          (r.numeric && (n.hexPad = "left"),
            (i = (0, o.arrayify)((0, o.hexlify)(i, n))),
            r.length &&
              i.length !== r.length &&
              i.length > 0 &&
              d.throwArgumentError(
                "invalid length for " + r.name,
                "transaction:" + r.name,
                i,
              ),
            r.maxLength &&
              ((i = (0, o.stripZeros)(i)),
              i.length > r.maxLength &&
                d.throwArgumentError(
                  "invalid length for " + r.name,
                  "transaction:" + r.name,
                  i,
                )),
            e.push((0, o.hexlify)(i)));
        });
        let i = 0;
        if (
          (null != t.chainId
            ? ((i = t.chainId),
              "number" !== typeof i &&
                d.throwArgumentError(
                  "invalid transaction.chainId",
                  "transaction",
                  t,
                ))
            : r &&
              !(0, o.isBytesLike)(r) &&
              r.v > 28 &&
              (i = Math.floor((r.v - 35) / 2)),
          0 !== i && (e.push((0, o.hexlify)(i)), e.push("0x"), e.push("0x")),
          !r)
        )
          return a.encode(e);
        const n = (0, o.splitSignature)(r);
        let s = 27 + n.recoveryParam;
        return (
          0 !== i
            ? (e.pop(),
              e.pop(),
              e.pop(),
              (s += 2 * i + 8),
              n.v > 28 &&
                n.v !== s &&
                d.throwArgumentError(
                  "transaction.chainId/signature.v mismatch",
                  "signature",
                  r,
                ))
            : n.v !== s &&
              d.throwArgumentError(
                "transaction.chainId/signature.v mismatch",
                "signature",
                r,
              ),
          e.push((0, o.hexlify)(s)),
          e.push((0, o.stripZeros)((0, o.arrayify)(n.r))),
          e.push((0, o.stripZeros)((0, o.arrayify)(n.s))),
          a.encode(e)
        );
      }
      function O(t, r) {
        if (null == t.type || 0 === t.type)
          return (
            null != t.accessList &&
              d.throwArgumentError(
                "untyped transactions do not support accessList; include type: 1",
                "transaction",
                t,
              ),
            S(t, r)
          );
        switch (t.type) {
          case 1:
            return P(t, r);
          case 2:
            return A(t, r);
          default:
            break;
        }
        return d.throwError(
          "unsupported transaction type: " + t.type,
          f.Logger.errors.UNSUPPORTED_OPERATION,
          { operation: "serializeTransaction", transactionType: t.type },
        );
      }
      function I(t, r, e) {
        try {
          const e = v(r[0]).toNumber();
          if (0 !== e && 1 !== e) throw new Error("bad recid");
          t.v = e;
        } catch (i) {
          d.throwArgumentError("invalid v for transaction type: 1", "v", r[0]);
        }
        ((t.r = (0, o.hexZeroPad)(r[1], 32)),
          (t.s = (0, o.hexZeroPad)(r[2], 32)));
        try {
          const r = (0, h.keccak256)(e(t));
          t.from = b(r, { r: t.r, s: t.s, recoveryParam: t.v });
        } catch (i) {}
      }
      function R(t) {
        const r = a.decode(t.slice(1));
        9 !== r.length &&
          12 !== r.length &&
          d.throwArgumentError(
            "invalid component count for transaction type: 2",
            "payload",
            (0, o.hexlify)(t),
          );
        const e = v(r[2]),
          i = v(r[3]),
          n = {
            type: 2,
            chainId: v(r[0]).toNumber(),
            nonce: v(r[1]).toNumber(),
            maxPriorityFeePerGas: e,
            maxFeePerGas: i,
            gasPrice: null,
            gasLimit: v(r[4]),
            to: p(r[5]),
            value: v(r[6]),
            data: r[7],
            accessList: E(r[8]),
          };
        return (
          9 === r.length ||
            ((n.hash = (0, h.keccak256)(t)), I(n, r.slice(9), A)),
          n
        );
      }
      function L(t) {
        const r = a.decode(t.slice(1));
        8 !== r.length &&
          11 !== r.length &&
          d.throwArgumentError(
            "invalid component count for transaction type: 1",
            "payload",
            (0, o.hexlify)(t),
          );
        const e = {
          type: 1,
          chainId: v(r[0]).toNumber(),
          nonce: v(r[1]).toNumber(),
          gasPrice: v(r[2]),
          gasLimit: v(r[3]),
          to: p(r[4]),
          value: v(r[5]),
          data: r[6],
          accessList: E(r[7]),
        };
        return (
          8 === r.length ||
            ((e.hash = (0, h.keccak256)(t)), I(e, r.slice(8), P)),
          e
        );
      }
      function F(t) {
        const r = a.decode(t);
        9 !== r.length &&
          6 !== r.length &&
          d.throwArgumentError("invalid raw transaction", "rawTransaction", t);
        const e = {
          nonce: v(r[0]).toNumber(),
          gasPrice: v(r[1]),
          gasLimit: v(r[2]),
          to: p(r[3]),
          value: v(r[4]),
          data: r[5],
          chainId: 0,
        };
        if (6 === r.length) return e;
        try {
          e.v = n.BigNumber.from(r[6]).toNumber();
        } catch (i) {
          return e;
        }
        if (
          ((e.r = (0, o.hexZeroPad)(r[7], 32)),
          (e.s = (0, o.hexZeroPad)(r[8], 32)),
          n.BigNumber.from(e.r).isZero() && n.BigNumber.from(e.s).isZero())
        )
          ((e.chainId = e.v), (e.v = 0));
        else {
          ((e.chainId = Math.floor((e.v - 35) / 2)),
            e.chainId < 0 && (e.chainId = 0));
          let n = e.v - 27;
          const s = r.slice(0, 6);
          0 !== e.chainId &&
            (s.push((0, o.hexlify)(e.chainId)),
            s.push("0x"),
            s.push("0x"),
            (n -= 2 * e.chainId + 8));
          const u = (0, h.keccak256)(a.encode(s));
          try {
            e.from = b(u, {
              r: (0, o.hexlify)(e.r),
              s: (0, o.hexlify)(e.s),
              recoveryParam: n,
            });
          } catch (i) {}
          e.hash = (0, h.keccak256)(t);
        }
        return ((e.type = null), e);
      }
      function T(t) {
        const r = (0, o.arrayify)(t);
        if (r[0] > 127) return F(r);
        switch (r[0]) {
          case 1:
            return L(r);
          case 2:
            return R(r);
          default:
            break;
        }
        return d.throwError(
          "unsupported transaction type: " + r[0],
          f.Logger.errors.UNSUPPORTED_OPERATION,
          { operation: "parseTransaction", transactionType: r[0] },
        );
      }
    },
    1738: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "transactions/5.7.0";
    },
    177: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.arrayify = f),
        (r.concat = m),
        (r.hexConcat = M),
        (r.hexDataLength = w),
        (r.hexDataSlice = y),
        (r.hexStripZeros = _),
        (r.hexValue = b),
        (r.hexZeroPad = N),
        (r.hexlify = v),
        (r.isBytes = l),
        (r.isBytesLike = u),
        (r.isHexString = g),
        (r.joinSignature = x),
        (r.splitSignature = E),
        (r.stripZeros = c),
        (r.zeroPad = d));
      var i = e(178),
        n = e(1715);
      const o = new i.Logger(n.version);
      function s(t) {
        return !!t.toHexString;
      }
      function h(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return h(new Uint8Array(Array.prototype.slice.apply(t, r)));
            }),
          t
        );
      }
      function u(t) {
        return (g(t) && !(t.length % 2)) || l(t);
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
          return (0 === r.length && r.push(0), h(new Uint8Array(r)));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t) && (t = t.toHexString()),
          g(t))
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
          return h(new Uint8Array(i));
        }
        return l(t)
          ? h(new Uint8Array(t))
          : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function m(t) {
        const r = t.map((t) => f(t)),
          e = r.reduce((t, r) => t + r.length, 0),
          i = new Uint8Array(e);
        return (r.reduce((t, r) => (i.set(r, t), t + r.length), 0), h(i));
      }
      function c(t) {
        let r = f(t);
        if (0 === r.length) return r;
        let e = 0;
        while (e < r.length && 0 === r[e]) e++;
        return (e && (r = r.slice(e)), r);
      }
      function d(t, r) {
        ((t = f(t)),
          t.length > r &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const e = new Uint8Array(r);
        return (e.set(t, r - t.length), h(e));
      }
      function g(t, r) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || t.length === 2 + 2 * r)
        );
      }
      const p = "0123456789abcdef";
      function v(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid hexlify value");
          let r = "";
          while (t) ((r = p[15 & t] + r), (t = Math.floor(t / 16)));
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
        if (g(t))
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
            r += p[(240 & i) >> 4] + p[15 & i];
          }
          return r;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function w(t) {
        if ("string" !== typeof t) t = v(t);
        else if (!g(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function y(t, r, e) {
        return (
          "string" !== typeof t
            ? (t = v(t))
            : (!g(t) || t.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", t),
          (r = 2 + 2 * r),
          null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
        );
      }
      function M(t) {
        let r = "0x";
        return (
          t.forEach((t) => {
            r += v(t).substring(2);
          }),
          r
        );
      }
      function b(t) {
        const r = _(v(t, { hexPad: "left" }));
        return "0x" === r ? "0x0" : r;
      }
      function _(t) {
        ("string" !== typeof t && (t = v(t)),
          g(t) || o.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2)));
        let r = 0;
        while (r < t.length && "0" === t[r]) r++;
        return "0x" + t.substring(r);
      }
      function N(t, r) {
        ("string" !== typeof t
          ? (t = v(t))
          : g(t) || o.throwArgumentError("invalid hex string", "value", t),
          t.length > 2 * r + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (t.length < 2 * r + 2) t = "0x0" + t.substring(2);
        return t;
      }
      function E(t) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (u(t)) {
          let e = f(t);
          (64 === e.length
            ? ((r.v = 27 + (e[32] >> 7)),
              (e[32] &= 127),
              (r.r = v(e.slice(0, 32))),
              (r.s = v(e.slice(32, 64))))
            : 65 === e.length
              ? ((r.r = v(e.slice(0, 32))),
                (r.s = v(e.slice(32, 64))),
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
            (r._vs = v(e.slice(32, 64))));
        } else {
          if (
            ((r.r = t.r),
            (r.s = t.s),
            (r.v = t.v),
            (r.recoveryParam = t.recoveryParam),
            (r._vs = t._vs),
            null != r._vs)
          ) {
            const e = d(f(r._vs), 32);
            r._vs = v(e);
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
            const n = v(e);
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
          (null != r.r && g(r.r)
            ? (r.r = N(r.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t,
              ),
            null != r.s && g(r.s)
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
          const i = v(e);
          (r._vs &&
            (g(r._vs) ||
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
      function x(t) {
        return (
          (t = E(t)),
          v(m([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    178: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Logger = r.LogLevel = r.ErrorCode = void 0));
      var i = e(1714);
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let h = s["default"],
        u = null;
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
      var f, m;
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
        })(m || (r.ErrorCode = m = {})));
      const c = "0123456789abcdef";
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
            h > s[e] || console.log.apply(console, r));
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
                  ((e += c[r[t] >> 4]), (e += c[15 & r[t]]));
                i.push(t + "=Uint8Array(0x" + e + ")");
              } else i.push(t + "=" + JSON.stringify(r));
            } catch (h) {
              i.push(t + "=" + JSON.stringify(e[t].toString()));
            }
          }),
            i.push("code=" + r),
            i.push("version=" + this.version));
          const n = t;
          let s = "";
          switch (r) {
            case m.NUMERIC_FAULT: {
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
            case m.CALL_EXCEPTION:
            case m.INSUFFICIENT_FUNDS:
            case m.MISSING_NEW:
            case m.NONCE_EXPIRED:
            case m.REPLACEMENT_UNDERPRICED:
            case m.TRANSACTION_REPLACED:
            case m.UNPREDICTABLE_GAS_LIMIT:
              s = r;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            i.length && (t += " (" + i.join(", ") + ")"));
          const h = new Error(t);
          return (
            (h.reason = n),
            (h.code = r),
            Object.keys(e).forEach(function (t) {
              h[t] = e[t];
            }),
            h
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
          return (u || (u = new Logger(i.version)), u);
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
            ? (h = r)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((r.Logger = Logger), (Logger.errors = m), (Logger.levels = f));
    },
    583: function (t, r, e) {
      "use strict";
      var i = e(0);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.BigNumber = void 0),
        (r._base16To36 = y),
        (r._base36To16 = w),
        (r.isBigNumberish = m));
      var n = i(e(1712)),
        o = e(177),
        s = e(178),
        h = e(584),
        u = n.default.BN;
      const a = new s.Logger(h.version),
        l = {},
        f = 9007199254740991;
      function m(t) {
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
      let c = !1;
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
          return g(p(this).fromTwos(t));
        }
        toTwos(t) {
          return g(p(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0]
            ? BigNumber.from(this._hex.substring(1))
            : this;
        }
        add(t) {
          return g(p(this).add(p(t)));
        }
        sub(t) {
          return g(p(this).sub(p(t)));
        }
        div(t) {
          const r = BigNumber.from(t);
          return (
            r.isZero() && v("division-by-zero", "div"),
            g(p(this).div(p(t)))
          );
        }
        mul(t) {
          return g(p(this).mul(p(t)));
        }
        mod(t) {
          const r = p(t);
          return (
            r.isNeg() && v("division-by-zero", "mod"),
            g(p(this).umod(r))
          );
        }
        pow(t) {
          const r = p(t);
          return (r.isNeg() && v("negative-power", "pow"), g(p(this).pow(r)));
        }
        and(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "and"),
            g(p(this).and(r))
          );
        }
        or(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "or"),
            g(p(this).or(r))
          );
        }
        xor(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "xor"),
            g(p(this).xor(r))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "mask"),
            g(p(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "shl"),
            g(p(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "shr"),
            g(p(this).shrn(t))
          );
        }
        eq(t) {
          return p(this).eq(p(t));
        }
        lt(t) {
          return p(this).lt(p(t));
        }
        lte(t) {
          return p(this).lte(p(t));
        }
        gt(t) {
          return p(this).gt(p(t));
        }
        gte(t) {
          return p(this).gte(p(t));
        }
        isNegative() {
          return "-" === this._hex[0];
        }
        isZero() {
          return p(this).isZero();
        }
        toNumber() {
          try {
            return p(this).toNumber();
          } catch (t) {
            v("overflow", "toNumber", this.toString());
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
                ? c ||
                  ((c = !0),
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
            p(this).toString(10)
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
              ? new BigNumber(l, d(t))
              : t.match(/^-?[0-9]+$/)
                ? new BigNumber(l, d(new u(t)))
                : a.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" === typeof t)
            return (
              t % 1 && v("underflow", "BigNumber.from", t),
              (t >= f || t <= -f) && v("overflow", "BigNumber.from", t),
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
      function d(t) {
        if ("string" !== typeof t) return d(t.toString(16));
        if ("-" === t[0])
          return (
            (t = t.substring(1)),
            "-" === t[0] && a.throwArgumentError("invalid hex", "value", t),
            (t = d(t)),
            "0x00" === t ? t : "-" + t
          );
        if (("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t))
          return "0x00";
        t.length % 2 && (t = "0x0" + t.substring(2));
        while (t.length > 4 && "0x00" === t.substring(0, 4))
          t = "0x" + t.substring(4);
        return t;
      }
      function g(t) {
        return BigNumber.from(d(t));
      }
      function p(t) {
        const r = BigNumber.from(t).toHexString();
        return "-" === r[0]
          ? new u("-" + r.substring(3), 16)
          : new u(r.substring(2), 16);
      }
      function v(t, r, e) {
        const i = { fault: t, operation: r };
        return (
          null != e && (i.value = e),
          a.throwError(t, s.Logger.errors.NUMERIC_FAULT, i)
        );
      }
      function w(t) {
        return new u(t, 36).toString(16);
      }
      function y(t) {
        return new u(t, 16).toString(36);
      }
      r.BigNumber = BigNumber;
    },
    584: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bignumber/5.8.0";
    },
  },
]);
