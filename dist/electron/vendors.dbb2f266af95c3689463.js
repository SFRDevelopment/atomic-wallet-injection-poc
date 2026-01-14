(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [78],
  {
    147: function (t, e, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.keccak256 = s));
      var i = n(r(53)),
        o = r(59);
      function s(t) {
        return "0x" + i.default.keccak_256((0, o.arrayify)(t));
      }
    },
    1541: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "_TypedDataEncoder", {
          enumerable: !0,
          get: function () {
            return s.TypedDataEncoder;
          },
        }),
        Object.defineProperty(e, "dnsEncode", {
          enumerable: !0,
          get: function () {
            return i.dnsEncode;
          },
        }),
        Object.defineProperty(e, "ensNormalize", {
          enumerable: !0,
          get: function () {
            return i.ensNormalize;
          },
        }),
        Object.defineProperty(e, "hashMessage", {
          enumerable: !0,
          get: function () {
            return o.hashMessage;
          },
        }),
        Object.defineProperty(e, "id", {
          enumerable: !0,
          get: function () {
            return n.id;
          },
        }),
        Object.defineProperty(e, "isValidName", {
          enumerable: !0,
          get: function () {
            return i.isValidName;
          },
        }),
        Object.defineProperty(e, "messagePrefix", {
          enumerable: !0,
          get: function () {
            return o.messagePrefix;
          },
        }),
        Object.defineProperty(e, "namehash", {
          enumerable: !0,
          get: function () {
            return i.namehash;
          },
        }));
      var n = r(541),
        i = r(1555),
        o = r(1560),
        s = r(1561);
    },
    1542: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "logger/5.8.0";
    },
    1543: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "bytes/5.8.0";
    },
    1544: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.formatBytes32String = s),
        (e.parseBytes32String = u));
      var n = r(1545),
        i = r(59),
        o = r(284);
      function s(t) {
        const e = (0, o.toUtf8Bytes)(t);
        if (e.length > 31)
          throw new Error("bytes32 string must be less than 32 bytes");
        return (0, i.hexlify)((0, i.concat)([e, n.HashZero]).slice(0, 32));
      }
      function u(t) {
        const e = (0, i.arrayify)(t);
        if (32 !== e.length)
          throw new Error("invalid bytes32 - not 32 bytes long");
        if (0 !== e[31])
          throw new Error("invalid bytes32 string - no null terminator");
        let r = 31;
        while (0 === e[r - 1]) r--;
        return (0, o.toUtf8String)(e.slice(0, r));
      }
    },
    1545: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AddressZero", {
          enumerable: !0,
          get: function () {
            return n.AddressZero;
          },
        }),
        Object.defineProperty(e, "EtherSymbol", {
          enumerable: !0,
          get: function () {
            return s.EtherSymbol;
          },
        }),
        Object.defineProperty(e, "HashZero", {
          enumerable: !0,
          get: function () {
            return o.HashZero;
          },
        }),
        Object.defineProperty(e, "MaxInt256", {
          enumerable: !0,
          get: function () {
            return i.MaxInt256;
          },
        }),
        Object.defineProperty(e, "MaxUint256", {
          enumerable: !0,
          get: function () {
            return i.MaxUint256;
          },
        }),
        Object.defineProperty(e, "MinInt256", {
          enumerable: !0,
          get: function () {
            return i.MinInt256;
          },
        }),
        Object.defineProperty(e, "NegativeOne", {
          enumerable: !0,
          get: function () {
            return i.NegativeOne;
          },
        }),
        Object.defineProperty(e, "One", {
          enumerable: !0,
          get: function () {
            return i.One;
          },
        }),
        Object.defineProperty(e, "Two", {
          enumerable: !0,
          get: function () {
            return i.Two;
          },
        }),
        Object.defineProperty(e, "WeiPerEther", {
          enumerable: !0,
          get: function () {
            return i.WeiPerEther;
          },
        }),
        Object.defineProperty(e, "Zero", {
          enumerable: !0,
          get: function () {
            return i.Zero;
          },
        }));
      var n = r(1546),
        i = r(1547),
        o = r(1551),
        s = r(1552);
    },
    1546: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AddressZero = void 0));
      e.AddressZero = "0x0000000000000000000000000000000000000000";
    },
    1547: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Zero =
          e.WeiPerEther =
          e.Two =
          e.One =
          e.NegativeOne =
          e.MinInt256 =
          e.MaxUint256 =
          e.MaxInt256 =
            void 0));
      var n = r(283);
      ((e.NegativeOne = n.BigNumber.from(-1)),
        (e.Zero = n.BigNumber.from(0)),
        (e.One = n.BigNumber.from(1)),
        (e.Two = n.BigNumber.from(2)),
        (e.WeiPerEther = n.BigNumber.from("1000000000000000000")),
        (e.MaxUint256 = n.BigNumber.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )),
        (e.MinInt256 = n.BigNumber.from(
          "-0x8000000000000000000000000000000000000000000000000000000000000000",
        )),
        (e.MaxInt256 = n.BigNumber.from(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )));
    },
    1548: function (t, e, r) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function n(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function i(t, e) {
            t.super_ = e;
            var r = function () {};
            ((r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t));
          }
          function o(t, e, r) {
            if (o.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
                this._init(t || 0, e || 10, r || "be")));
          }
          var s;
          ("object" === typeof t ? (t.exports = o) : (e.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : r(1549).Buffer;
          } catch (S) {}
          function u(t, e) {
            var r = t.charCodeAt(e);
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
                ? r - 55
                : r >= 97 && r <= 102
                  ? r - 87
                  : void n(!1, "Invalid character in " + t);
          }
          function h(t, e, r) {
            var n = u(t, r);
            return (r - 1 >= e && (n |= u(t, r - 1) << 4), n);
          }
          function a(t, e, r, i) {
            for (
              var o = 0, s = 0, u = Math.min(t.length, r), h = e;
              h < u;
              h++
            ) {
              var a = t.charCodeAt(h) - 48;
              ((o *= i),
                (s = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a),
                n(a >= 0 && s < i, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function l(t, e) {
            ((t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red));
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
            (o.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (o.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (o.prototype._init = function (t, e, r) {
              if ("number" === typeof t) return this._initNumber(t, e, r);
              if ("object" === typeof t) return this._initArray(t, e, r);
              ("hex" === e && (e = 16),
                n(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var i = 0;
              ("-" === t[0] && (i++, (this.negative = 1)),
                i < t.length &&
                  (16 === e
                    ? this._parseHex(t, i, r)
                    : (this._parseBase(t, e, i),
                      "le" === r && this._initArray(this.toArray(), e, r))));
            }),
            (o.prototype._initNumber = function (t, e, r) {
              (t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                    ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                      (this.length = 2))
                    : (n(t < 9007199254740992),
                      (this.words = [
                        67108863 & t,
                        (t / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === r && this._initArray(this.toArray(), e, r));
            }),
            (o.prototype._initArray = function (t, e, r) {
              if ((n("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var o,
                s,
                u = 0;
              if ("be" === r)
                for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                  ((s = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                    (this.words[o] |= (s << u) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - u)) & 67108863),
                    (u += 24),
                    u >= 26 && ((u -= 26), o++));
              else if ("le" === r)
                for (i = 0, o = 0; i < t.length; i += 3)
                  ((s = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                    (this.words[o] |= (s << u) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - u)) & 67108863),
                    (u += 24),
                    u >= 26 && ((u -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, e, r) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var i,
                o = 0,
                s = 0;
              if ("be" === r)
                for (n = t.length - 1; n >= e; n -= 2)
                  ((i = h(t, e, n) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                      : (o += 8));
              else {
                var u = t.length - e;
                for (n = u % 2 === 0 ? e + 1 : e; n < t.length; n += 2)
                  ((i = h(t, e, n) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (t, e, r) {
              ((this.words = [0]), (this.length = 1));
              for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
              (n--, (i = (i / e) | 0));
              for (
                var o = t.length - r,
                  s = o % n,
                  u = Math.min(o, o - s) + r,
                  h = 0,
                  l = r;
                l < u;
                l += n
              )
                ((h = a(t, l, l + n, e)),
                  this.imuln(i),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              if (0 !== s) {
                var f = 1;
                for (h = a(t, l, t.length, e), l = 0; l < s; l++) f *= e;
                (this.imuln(f),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
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
            } catch (S) {
              o.prototype.inspect = f;
            }
          else o.prototype.inspect = f;
          function f() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var c = [
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
            g = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (t, e) {
            var r;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              r = "";
              for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                var u = this.words[s],
                  h = (16777215 & ((u << i) | o)).toString(16);
                ((o = (u >>> (24 - i)) & 16777215),
                  (i += 2),
                  i >= 26 && ((i -= 26), s--),
                  (r =
                    0 !== o || s !== this.length - 1
                      ? c[6 - h.length] + h + r
                      : h + r));
              }
              0 !== o && (r = o.toString(16) + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var a = m[t],
                l = g[t];
              r = "";
              var f = this.clone();
              f.negative = 0;
              while (!f.isZero()) {
                var d = f.modrn(l).toString(t);
                ((f = f.idivn(l)),
                  (r = f.isZero() ? d + r : c[a - d.length] + d + r));
              }
              this.isZero() && (r = "0" + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            n(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (t += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      n(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (o.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(s, t, e);
              }),
            (o.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }));
          var d = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function p(t) {
            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
              var n = (r / 26) | 0,
                i = r % 26;
              e[r] = (t.words[n] >>> i) & 1;
            }
            return e;
          }
          function A(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var n = (t.length + e.length) | 0;
            ((r.length = n), (n = (n - 1) | 0));
            var i = 0 | t.words[0],
              o = 0 | e.words[0],
              s = i * o,
              u = 67108863 & s,
              h = (s / 67108864) | 0;
            r.words[0] = u;
            for (var a = 1; a < n; a++) {
              for (
                var l = h >>> 26,
                  f = 67108863 & h,
                  c = Math.min(a, e.length - 1),
                  m = Math.max(0, a - t.length + 1);
                m <= c;
                m++
              ) {
                var g = (a - m) | 0;
                ((i = 0 | t.words[g]),
                  (o = 0 | e.words[m]),
                  (s = i * o + f),
                  (l += (s / 67108864) | 0),
                  (f = 67108863 & s));
              }
              ((r.words[a] = 0 | f), (h = 0 | l));
            }
            return (0 !== h ? (r.words[a] = 0 | h) : r.length--, r._strip());
          }
          ((o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            (n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0"));
            var s = d(t, o),
              u = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + u](s, i), s);
          }),
            (o.prototype._toArrayLikeLE = function (t, e) {
              for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                var s = (this.words[i] << o) | n;
                ((t[r++] = 255 & s),
                  r < t.length && (t[r++] = (s >> 8) & 255),
                  r < t.length && (t[r++] = (s >> 16) & 255),
                  6 === o
                    ? (r < t.length && (t[r++] = (s >> 24) & 255),
                      (n = 0),
                      (o = 0))
                    : ((n = s >>> 24), (o += 2)));
              }
              if (r < t.length) {
                t[r++] = n;
                while (r < t.length) t[r++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (t, e) {
              for (
                var r = t.length - 1, n = 0, i = 0, o = 0;
                i < this.length;
                i++
              ) {
                var s = (this.words[i] << o) | n;
                ((t[r--] = 255 & s),
                  r >= 0 && (t[r--] = (s >> 8) & 255),
                  r >= 0 && (t[r--] = (s >> 16) & 255),
                  6 === o
                    ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                    : ((n = s >>> 24), (o += 2)));
              }
              if (r >= 0) {
                t[r--] = n;
                while (r >= 0) t[r--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var e = t,
                    r = 0;
                  return (
                    e >= 4096 && ((r += 13), (e >>>= 13)),
                    e >= 64 && ((r += 7), (e >>>= 7)),
                    e >= 8 && ((r += 4), (e >>>= 4)),
                    e >= 2 && ((r += 2), (e >>>= 2)),
                    r + e
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                r = 0;
              return (
                0 === (8191 & e) && ((r += 13), (e >>>= 13)),
                0 === (127 & e) && ((r += 7), (e >>>= 7)),
                0 === (15 & e) && ((r += 4), (e >>>= 4)),
                0 === (3 & e) && ((r += 2), (e >>>= 2)),
                0 === (1 & e) && r++,
                r
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e]);
                if (((t += r), 26 !== r)) break;
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
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (o.prototype.ior = function (t) {
              return (n(0 === (this.negative | t.negative)), this.iuor(t));
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
              var e;
              e = this.length > t.length ? t : this;
              for (var r = 0; r < e.length; r++)
                this.words[r] = this.words[r] & t.words[r];
              return ((this.length = e.length), this._strip());
            }),
            (o.prototype.iand = function (t) {
              return (n(0 === (this.negative | t.negative)), this.iuand(t));
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
              var e, r;
              this.length > t.length
                ? ((e = this), (r = t))
                : ((e = t), (r = this));
              for (var n = 0; n < r.length; n++)
                this.words[n] = e.words[n] ^ r.words[n];
              if (this !== e)
                for (; n < e.length; n++) this.words[n] = e.words[n];
              return ((this.length = e.length), this._strip());
            }),
            (o.prototype.ixor = function (t) {
              return (n(0 === (this.negative | t.negative)), this.iuxor(t));
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
              n("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                r = t % 26;
              (this._expand(e), r > 0 && e--);
              for (var i = 0; i < e; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                r > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              n("number" === typeof t && t >= 0);
              var r = (t / 26) | 0,
                i = t % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = e
                  ? this.words[r] | (1 << i)
                  : this.words[r] & ~(1 << i)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, r, n;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((r = this), (n = t))
                : ((r = t), (n = this));
              for (var i = 0, o = 0; o < n.length; o++)
                ((e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26));
              for (; 0 !== i && o < r.length; o++)
                ((e = (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26));
              if (((this.length = r.length), 0 !== i))
                ((this.words[this.length] = i), this.length++);
              else if (r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (e = t.sub(this)),
                    (this.negative = 1),
                    e)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return ((t.negative = 1), e._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                n,
                i = this.cmp(t);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this));
              for (var o = 0, s = 0; s < n.length; s++)
                ((e = (0 | r.words[s]) - (0 | n.words[s]) + o),
                  (o = e >> 26),
                  (this.words[s] = 67108863 & e));
              for (; 0 !== o && s < r.length; s++)
                ((e = (0 | r.words[s]) + o),
                  (o = e >> 26),
                  (this.words[s] = 67108863 & e));
              if (0 === o && s < r.length && r !== this)
                for (; s < r.length; s++) this.words[s] = r.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                r !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var v = function (t, e, r) {
            var n,
              i,
              o,
              s = t.words,
              u = e.words,
              h = r.words,
              a = 0,
              l = 0 | s[0],
              f = 8191 & l,
              c = l >>> 13,
              m = 0 | s[1],
              g = 8191 & m,
              d = m >>> 13,
              p = 0 | s[2],
              A = 8191 & p,
              v = p >>> 13,
              w = 0 | s[3],
              y = 8191 & w,
              M = w >>> 13,
              b = 0 | s[4],
              E = 8191 & b,
              B = b >>> 13,
              N = 0 | s[5],
              C = 8191 & N,
              x = N >>> 13,
              F = 0 | s[6],
              O = 8191 & F,
              S = F >>> 13,
              U = 0 | s[7],
              I = 8191 & U,
              P = U >>> 13,
              R = 0 | s[8],
              D = 8191 & R,
              T = R >>> 13,
              _ = 0 | s[9],
              k = 8191 & _,
              L = _ >>> 13,
              Q = 0 | u[0],
              j = 8191 & Q,
              H = Q >>> 13,
              G = 0 | u[1],
              Y = 8191 & G,
              z = G >>> 13,
              J = 0 | u[2],
              K = 8191 & J,
              q = J >>> 13,
              Z = 0 | u[3],
              X = 8191 & Z,
              V = Z >>> 13,
              W = 0 | u[4],
              $ = 8191 & W,
              tt = W >>> 13,
              et = 0 | u[5],
              rt = 8191 & et,
              nt = et >>> 13,
              it = 0 | u[6],
              ot = 8191 & it,
              st = it >>> 13,
              ut = 0 | u[7],
              ht = 8191 & ut,
              at = ut >>> 13,
              lt = 0 | u[8],
              ft = 8191 & lt,
              ct = lt >>> 13,
              mt = 0 | u[9],
              gt = 8191 & mt,
              dt = mt >>> 13;
            ((r.negative = t.negative ^ e.negative),
              (r.length = 19),
              (n = Math.imul(f, j)),
              (i = Math.imul(f, H)),
              (i = (i + Math.imul(c, j)) | 0),
              (o = Math.imul(c, H)));
            var pt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (pt >>> 26)) | 0),
              (pt &= 67108863),
              (n = Math.imul(g, j)),
              (i = Math.imul(g, H)),
              (i = (i + Math.imul(d, j)) | 0),
              (o = Math.imul(d, H)),
              (n = (n + Math.imul(f, Y)) | 0),
              (i = (i + Math.imul(f, z)) | 0),
              (i = (i + Math.imul(c, Y)) | 0),
              (o = (o + Math.imul(c, z)) | 0));
            var At = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (n = Math.imul(A, j)),
              (i = Math.imul(A, H)),
              (i = (i + Math.imul(v, j)) | 0),
              (o = Math.imul(v, H)),
              (n = (n + Math.imul(g, Y)) | 0),
              (i = (i + Math.imul(g, z)) | 0),
              (i = (i + Math.imul(d, Y)) | 0),
              (o = (o + Math.imul(d, z)) | 0),
              (n = (n + Math.imul(f, K)) | 0),
              (i = (i + Math.imul(f, q)) | 0),
              (i = (i + Math.imul(c, K)) | 0),
              (o = (o + Math.imul(c, q)) | 0));
            var vt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (n = Math.imul(y, j)),
              (i = Math.imul(y, H)),
              (i = (i + Math.imul(M, j)) | 0),
              (o = Math.imul(M, H)),
              (n = (n + Math.imul(A, Y)) | 0),
              (i = (i + Math.imul(A, z)) | 0),
              (i = (i + Math.imul(v, Y)) | 0),
              (o = (o + Math.imul(v, z)) | 0),
              (n = (n + Math.imul(g, K)) | 0),
              (i = (i + Math.imul(g, q)) | 0),
              (i = (i + Math.imul(d, K)) | 0),
              (o = (o + Math.imul(d, q)) | 0),
              (n = (n + Math.imul(f, X)) | 0),
              (i = (i + Math.imul(f, V)) | 0),
              (i = (i + Math.imul(c, X)) | 0),
              (o = (o + Math.imul(c, V)) | 0));
            var wt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (n = Math.imul(E, j)),
              (i = Math.imul(E, H)),
              (i = (i + Math.imul(B, j)) | 0),
              (o = Math.imul(B, H)),
              (n = (n + Math.imul(y, Y)) | 0),
              (i = (i + Math.imul(y, z)) | 0),
              (i = (i + Math.imul(M, Y)) | 0),
              (o = (o + Math.imul(M, z)) | 0),
              (n = (n + Math.imul(A, K)) | 0),
              (i = (i + Math.imul(A, q)) | 0),
              (i = (i + Math.imul(v, K)) | 0),
              (o = (o + Math.imul(v, q)) | 0),
              (n = (n + Math.imul(g, X)) | 0),
              (i = (i + Math.imul(g, V)) | 0),
              (i = (i + Math.imul(d, X)) | 0),
              (o = (o + Math.imul(d, V)) | 0),
              (n = (n + Math.imul(f, $)) | 0),
              (i = (i + Math.imul(f, tt)) | 0),
              (i = (i + Math.imul(c, $)) | 0),
              (o = (o + Math.imul(c, tt)) | 0));
            var yt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (n = Math.imul(C, j)),
              (i = Math.imul(C, H)),
              (i = (i + Math.imul(x, j)) | 0),
              (o = Math.imul(x, H)),
              (n = (n + Math.imul(E, Y)) | 0),
              (i = (i + Math.imul(E, z)) | 0),
              (i = (i + Math.imul(B, Y)) | 0),
              (o = (o + Math.imul(B, z)) | 0),
              (n = (n + Math.imul(y, K)) | 0),
              (i = (i + Math.imul(y, q)) | 0),
              (i = (i + Math.imul(M, K)) | 0),
              (o = (o + Math.imul(M, q)) | 0),
              (n = (n + Math.imul(A, X)) | 0),
              (i = (i + Math.imul(A, V)) | 0),
              (i = (i + Math.imul(v, X)) | 0),
              (o = (o + Math.imul(v, V)) | 0),
              (n = (n + Math.imul(g, $)) | 0),
              (i = (i + Math.imul(g, tt)) | 0),
              (i = (i + Math.imul(d, $)) | 0),
              (o = (o + Math.imul(d, tt)) | 0),
              (n = (n + Math.imul(f, rt)) | 0),
              (i = (i + Math.imul(f, nt)) | 0),
              (i = (i + Math.imul(c, rt)) | 0),
              (o = (o + Math.imul(c, nt)) | 0));
            var Mt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (n = Math.imul(O, j)),
              (i = Math.imul(O, H)),
              (i = (i + Math.imul(S, j)) | 0),
              (o = Math.imul(S, H)),
              (n = (n + Math.imul(C, Y)) | 0),
              (i = (i + Math.imul(C, z)) | 0),
              (i = (i + Math.imul(x, Y)) | 0),
              (o = (o + Math.imul(x, z)) | 0),
              (n = (n + Math.imul(E, K)) | 0),
              (i = (i + Math.imul(E, q)) | 0),
              (i = (i + Math.imul(B, K)) | 0),
              (o = (o + Math.imul(B, q)) | 0),
              (n = (n + Math.imul(y, X)) | 0),
              (i = (i + Math.imul(y, V)) | 0),
              (i = (i + Math.imul(M, X)) | 0),
              (o = (o + Math.imul(M, V)) | 0),
              (n = (n + Math.imul(A, $)) | 0),
              (i = (i + Math.imul(A, tt)) | 0),
              (i = (i + Math.imul(v, $)) | 0),
              (o = (o + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(g, rt)) | 0),
              (i = (i + Math.imul(g, nt)) | 0),
              (i = (i + Math.imul(d, rt)) | 0),
              (o = (o + Math.imul(d, nt)) | 0),
              (n = (n + Math.imul(f, ot)) | 0),
              (i = (i + Math.imul(f, st)) | 0),
              (i = (i + Math.imul(c, ot)) | 0),
              (o = (o + Math.imul(c, st)) | 0));
            var bt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (n = Math.imul(I, j)),
              (i = Math.imul(I, H)),
              (i = (i + Math.imul(P, j)) | 0),
              (o = Math.imul(P, H)),
              (n = (n + Math.imul(O, Y)) | 0),
              (i = (i + Math.imul(O, z)) | 0),
              (i = (i + Math.imul(S, Y)) | 0),
              (o = (o + Math.imul(S, z)) | 0),
              (n = (n + Math.imul(C, K)) | 0),
              (i = (i + Math.imul(C, q)) | 0),
              (i = (i + Math.imul(x, K)) | 0),
              (o = (o + Math.imul(x, q)) | 0),
              (n = (n + Math.imul(E, X)) | 0),
              (i = (i + Math.imul(E, V)) | 0),
              (i = (i + Math.imul(B, X)) | 0),
              (o = (o + Math.imul(B, V)) | 0),
              (n = (n + Math.imul(y, $)) | 0),
              (i = (i + Math.imul(y, tt)) | 0),
              (i = (i + Math.imul(M, $)) | 0),
              (o = (o + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(A, rt)) | 0),
              (i = (i + Math.imul(A, nt)) | 0),
              (i = (i + Math.imul(v, rt)) | 0),
              (o = (o + Math.imul(v, nt)) | 0),
              (n = (n + Math.imul(g, ot)) | 0),
              (i = (i + Math.imul(g, st)) | 0),
              (i = (i + Math.imul(d, ot)) | 0),
              (o = (o + Math.imul(d, st)) | 0),
              (n = (n + Math.imul(f, ht)) | 0),
              (i = (i + Math.imul(f, at)) | 0),
              (i = (i + Math.imul(c, ht)) | 0),
              (o = (o + Math.imul(c, at)) | 0));
            var Et = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (n = Math.imul(D, j)),
              (i = Math.imul(D, H)),
              (i = (i + Math.imul(T, j)) | 0),
              (o = Math.imul(T, H)),
              (n = (n + Math.imul(I, Y)) | 0),
              (i = (i + Math.imul(I, z)) | 0),
              (i = (i + Math.imul(P, Y)) | 0),
              (o = (o + Math.imul(P, z)) | 0),
              (n = (n + Math.imul(O, K)) | 0),
              (i = (i + Math.imul(O, q)) | 0),
              (i = (i + Math.imul(S, K)) | 0),
              (o = (o + Math.imul(S, q)) | 0),
              (n = (n + Math.imul(C, X)) | 0),
              (i = (i + Math.imul(C, V)) | 0),
              (i = (i + Math.imul(x, X)) | 0),
              (o = (o + Math.imul(x, V)) | 0),
              (n = (n + Math.imul(E, $)) | 0),
              (i = (i + Math.imul(E, tt)) | 0),
              (i = (i + Math.imul(B, $)) | 0),
              (o = (o + Math.imul(B, tt)) | 0),
              (n = (n + Math.imul(y, rt)) | 0),
              (i = (i + Math.imul(y, nt)) | 0),
              (i = (i + Math.imul(M, rt)) | 0),
              (o = (o + Math.imul(M, nt)) | 0),
              (n = (n + Math.imul(A, ot)) | 0),
              (i = (i + Math.imul(A, st)) | 0),
              (i = (i + Math.imul(v, ot)) | 0),
              (o = (o + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(g, ht)) | 0),
              (i = (i + Math.imul(g, at)) | 0),
              (i = (i + Math.imul(d, ht)) | 0),
              (o = (o + Math.imul(d, at)) | 0),
              (n = (n + Math.imul(f, ft)) | 0),
              (i = (i + Math.imul(f, ct)) | 0),
              (i = (i + Math.imul(c, ft)) | 0),
              (o = (o + Math.imul(c, ct)) | 0));
            var Bt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (n = Math.imul(k, j)),
              (i = Math.imul(k, H)),
              (i = (i + Math.imul(L, j)) | 0),
              (o = Math.imul(L, H)),
              (n = (n + Math.imul(D, Y)) | 0),
              (i = (i + Math.imul(D, z)) | 0),
              (i = (i + Math.imul(T, Y)) | 0),
              (o = (o + Math.imul(T, z)) | 0),
              (n = (n + Math.imul(I, K)) | 0),
              (i = (i + Math.imul(I, q)) | 0),
              (i = (i + Math.imul(P, K)) | 0),
              (o = (o + Math.imul(P, q)) | 0),
              (n = (n + Math.imul(O, X)) | 0),
              (i = (i + Math.imul(O, V)) | 0),
              (i = (i + Math.imul(S, X)) | 0),
              (o = (o + Math.imul(S, V)) | 0),
              (n = (n + Math.imul(C, $)) | 0),
              (i = (i + Math.imul(C, tt)) | 0),
              (i = (i + Math.imul(x, $)) | 0),
              (o = (o + Math.imul(x, tt)) | 0),
              (n = (n + Math.imul(E, rt)) | 0),
              (i = (i + Math.imul(E, nt)) | 0),
              (i = (i + Math.imul(B, rt)) | 0),
              (o = (o + Math.imul(B, nt)) | 0),
              (n = (n + Math.imul(y, ot)) | 0),
              (i = (i + Math.imul(y, st)) | 0),
              (i = (i + Math.imul(M, ot)) | 0),
              (o = (o + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(A, ht)) | 0),
              (i = (i + Math.imul(A, at)) | 0),
              (i = (i + Math.imul(v, ht)) | 0),
              (o = (o + Math.imul(v, at)) | 0),
              (n = (n + Math.imul(g, ft)) | 0),
              (i = (i + Math.imul(g, ct)) | 0),
              (i = (i + Math.imul(d, ft)) | 0),
              (o = (o + Math.imul(d, ct)) | 0),
              (n = (n + Math.imul(f, gt)) | 0),
              (i = (i + Math.imul(f, dt)) | 0),
              (i = (i + Math.imul(c, gt)) | 0),
              (o = (o + Math.imul(c, dt)) | 0));
            var Nt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (n = Math.imul(k, Y)),
              (i = Math.imul(k, z)),
              (i = (i + Math.imul(L, Y)) | 0),
              (o = Math.imul(L, z)),
              (n = (n + Math.imul(D, K)) | 0),
              (i = (i + Math.imul(D, q)) | 0),
              (i = (i + Math.imul(T, K)) | 0),
              (o = (o + Math.imul(T, q)) | 0),
              (n = (n + Math.imul(I, X)) | 0),
              (i = (i + Math.imul(I, V)) | 0),
              (i = (i + Math.imul(P, X)) | 0),
              (o = (o + Math.imul(P, V)) | 0),
              (n = (n + Math.imul(O, $)) | 0),
              (i = (i + Math.imul(O, tt)) | 0),
              (i = (i + Math.imul(S, $)) | 0),
              (o = (o + Math.imul(S, tt)) | 0),
              (n = (n + Math.imul(C, rt)) | 0),
              (i = (i + Math.imul(C, nt)) | 0),
              (i = (i + Math.imul(x, rt)) | 0),
              (o = (o + Math.imul(x, nt)) | 0),
              (n = (n + Math.imul(E, ot)) | 0),
              (i = (i + Math.imul(E, st)) | 0),
              (i = (i + Math.imul(B, ot)) | 0),
              (o = (o + Math.imul(B, st)) | 0),
              (n = (n + Math.imul(y, ht)) | 0),
              (i = (i + Math.imul(y, at)) | 0),
              (i = (i + Math.imul(M, ht)) | 0),
              (o = (o + Math.imul(M, at)) | 0),
              (n = (n + Math.imul(A, ft)) | 0),
              (i = (i + Math.imul(A, ct)) | 0),
              (i = (i + Math.imul(v, ft)) | 0),
              (o = (o + Math.imul(v, ct)) | 0),
              (n = (n + Math.imul(g, gt)) | 0),
              (i = (i + Math.imul(g, dt)) | 0),
              (i = (i + Math.imul(d, gt)) | 0),
              (o = (o + Math.imul(d, dt)) | 0));
            var Ct = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Ct >>> 26)) | 0),
              (Ct &= 67108863),
              (n = Math.imul(k, K)),
              (i = Math.imul(k, q)),
              (i = (i + Math.imul(L, K)) | 0),
              (o = Math.imul(L, q)),
              (n = (n + Math.imul(D, X)) | 0),
              (i = (i + Math.imul(D, V)) | 0),
              (i = (i + Math.imul(T, X)) | 0),
              (o = (o + Math.imul(T, V)) | 0),
              (n = (n + Math.imul(I, $)) | 0),
              (i = (i + Math.imul(I, tt)) | 0),
              (i = (i + Math.imul(P, $)) | 0),
              (o = (o + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(O, rt)) | 0),
              (i = (i + Math.imul(O, nt)) | 0),
              (i = (i + Math.imul(S, rt)) | 0),
              (o = (o + Math.imul(S, nt)) | 0),
              (n = (n + Math.imul(C, ot)) | 0),
              (i = (i + Math.imul(C, st)) | 0),
              (i = (i + Math.imul(x, ot)) | 0),
              (o = (o + Math.imul(x, st)) | 0),
              (n = (n + Math.imul(E, ht)) | 0),
              (i = (i + Math.imul(E, at)) | 0),
              (i = (i + Math.imul(B, ht)) | 0),
              (o = (o + Math.imul(B, at)) | 0),
              (n = (n + Math.imul(y, ft)) | 0),
              (i = (i + Math.imul(y, ct)) | 0),
              (i = (i + Math.imul(M, ft)) | 0),
              (o = (o + Math.imul(M, ct)) | 0),
              (n = (n + Math.imul(A, gt)) | 0),
              (i = (i + Math.imul(A, dt)) | 0),
              (i = (i + Math.imul(v, gt)) | 0),
              (o = (o + Math.imul(v, dt)) | 0));
            var xt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (n = Math.imul(k, X)),
              (i = Math.imul(k, V)),
              (i = (i + Math.imul(L, X)) | 0),
              (o = Math.imul(L, V)),
              (n = (n + Math.imul(D, $)) | 0),
              (i = (i + Math.imul(D, tt)) | 0),
              (i = (i + Math.imul(T, $)) | 0),
              (o = (o + Math.imul(T, tt)) | 0),
              (n = (n + Math.imul(I, rt)) | 0),
              (i = (i + Math.imul(I, nt)) | 0),
              (i = (i + Math.imul(P, rt)) | 0),
              (o = (o + Math.imul(P, nt)) | 0),
              (n = (n + Math.imul(O, ot)) | 0),
              (i = (i + Math.imul(O, st)) | 0),
              (i = (i + Math.imul(S, ot)) | 0),
              (o = (o + Math.imul(S, st)) | 0),
              (n = (n + Math.imul(C, ht)) | 0),
              (i = (i + Math.imul(C, at)) | 0),
              (i = (i + Math.imul(x, ht)) | 0),
              (o = (o + Math.imul(x, at)) | 0),
              (n = (n + Math.imul(E, ft)) | 0),
              (i = (i + Math.imul(E, ct)) | 0),
              (i = (i + Math.imul(B, ft)) | 0),
              (o = (o + Math.imul(B, ct)) | 0),
              (n = (n + Math.imul(y, gt)) | 0),
              (i = (i + Math.imul(y, dt)) | 0),
              (i = (i + Math.imul(M, gt)) | 0),
              (o = (o + Math.imul(M, dt)) | 0));
            var Ft = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Ft >>> 26)) | 0),
              (Ft &= 67108863),
              (n = Math.imul(k, $)),
              (i = Math.imul(k, tt)),
              (i = (i + Math.imul(L, $)) | 0),
              (o = Math.imul(L, tt)),
              (n = (n + Math.imul(D, rt)) | 0),
              (i = (i + Math.imul(D, nt)) | 0),
              (i = (i + Math.imul(T, rt)) | 0),
              (o = (o + Math.imul(T, nt)) | 0),
              (n = (n + Math.imul(I, ot)) | 0),
              (i = (i + Math.imul(I, st)) | 0),
              (i = (i + Math.imul(P, ot)) | 0),
              (o = (o + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(O, ht)) | 0),
              (i = (i + Math.imul(O, at)) | 0),
              (i = (i + Math.imul(S, ht)) | 0),
              (o = (o + Math.imul(S, at)) | 0),
              (n = (n + Math.imul(C, ft)) | 0),
              (i = (i + Math.imul(C, ct)) | 0),
              (i = (i + Math.imul(x, ft)) | 0),
              (o = (o + Math.imul(x, ct)) | 0),
              (n = (n + Math.imul(E, gt)) | 0),
              (i = (i + Math.imul(E, dt)) | 0),
              (i = (i + Math.imul(B, gt)) | 0),
              (o = (o + Math.imul(B, dt)) | 0));
            var Ot = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (n = Math.imul(k, rt)),
              (i = Math.imul(k, nt)),
              (i = (i + Math.imul(L, rt)) | 0),
              (o = Math.imul(L, nt)),
              (n = (n + Math.imul(D, ot)) | 0),
              (i = (i + Math.imul(D, st)) | 0),
              (i = (i + Math.imul(T, ot)) | 0),
              (o = (o + Math.imul(T, st)) | 0),
              (n = (n + Math.imul(I, ht)) | 0),
              (i = (i + Math.imul(I, at)) | 0),
              (i = (i + Math.imul(P, ht)) | 0),
              (o = (o + Math.imul(P, at)) | 0),
              (n = (n + Math.imul(O, ft)) | 0),
              (i = (i + Math.imul(O, ct)) | 0),
              (i = (i + Math.imul(S, ft)) | 0),
              (o = (o + Math.imul(S, ct)) | 0),
              (n = (n + Math.imul(C, gt)) | 0),
              (i = (i + Math.imul(C, dt)) | 0),
              (i = (i + Math.imul(x, gt)) | 0),
              (o = (o + Math.imul(x, dt)) | 0));
            var St = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (n = Math.imul(k, ot)),
              (i = Math.imul(k, st)),
              (i = (i + Math.imul(L, ot)) | 0),
              (o = Math.imul(L, st)),
              (n = (n + Math.imul(D, ht)) | 0),
              (i = (i + Math.imul(D, at)) | 0),
              (i = (i + Math.imul(T, ht)) | 0),
              (o = (o + Math.imul(T, at)) | 0),
              (n = (n + Math.imul(I, ft)) | 0),
              (i = (i + Math.imul(I, ct)) | 0),
              (i = (i + Math.imul(P, ft)) | 0),
              (o = (o + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(O, gt)) | 0),
              (i = (i + Math.imul(O, dt)) | 0),
              (i = (i + Math.imul(S, gt)) | 0),
              (o = (o + Math.imul(S, dt)) | 0));
            var Ut = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Ut >>> 26)) | 0),
              (Ut &= 67108863),
              (n = Math.imul(k, ht)),
              (i = Math.imul(k, at)),
              (i = (i + Math.imul(L, ht)) | 0),
              (o = Math.imul(L, at)),
              (n = (n + Math.imul(D, ft)) | 0),
              (i = (i + Math.imul(D, ct)) | 0),
              (i = (i + Math.imul(T, ft)) | 0),
              (o = (o + Math.imul(T, ct)) | 0),
              (n = (n + Math.imul(I, gt)) | 0),
              (i = (i + Math.imul(I, dt)) | 0),
              (i = (i + Math.imul(P, gt)) | 0),
              (o = (o + Math.imul(P, dt)) | 0));
            var It = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (n = Math.imul(k, ft)),
              (i = Math.imul(k, ct)),
              (i = (i + Math.imul(L, ft)) | 0),
              (o = Math.imul(L, ct)),
              (n = (n + Math.imul(D, gt)) | 0),
              (i = (i + Math.imul(D, dt)) | 0),
              (i = (i + Math.imul(T, gt)) | 0),
              (o = (o + Math.imul(T, dt)) | 0));
            var Pt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (n = Math.imul(k, gt)),
              (i = Math.imul(k, dt)),
              (i = (i + Math.imul(L, gt)) | 0),
              (o = Math.imul(L, dt)));
            var Rt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            return (
              (a = (((o + (i >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (h[0] = pt),
              (h[1] = At),
              (h[2] = vt),
              (h[3] = wt),
              (h[4] = yt),
              (h[5] = Mt),
              (h[6] = bt),
              (h[7] = Et),
              (h[8] = Bt),
              (h[9] = Nt),
              (h[10] = Ct),
              (h[11] = xt),
              (h[12] = Ft),
              (h[13] = Ot),
              (h[14] = St),
              (h[15] = Ut),
              (h[16] = It),
              (h[17] = Pt),
              (h[18] = Rt),
              0 !== a && ((h[19] = a), r.length++),
              r
            );
          };
          function w(t, e, r) {
            ((r.negative = e.negative ^ t.negative),
              (r.length = t.length + e.length));
            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
              var s = i;
              i = 0;
              for (
                var u = 67108863 & n,
                  h = Math.min(o, e.length - 1),
                  a = Math.max(0, o - t.length + 1);
                a <= h;
                a++
              ) {
                var l = o - a,
                  f = 0 | t.words[l],
                  c = 0 | e.words[a],
                  m = f * c,
                  g = 67108863 & m;
                ((s = (s + ((m / 67108864) | 0)) | 0),
                  (g = (g + u) | 0),
                  (u = 67108863 & g),
                  (s = (s + (g >>> 26)) | 0),
                  (i += s >>> 26),
                  (s &= 67108863));
              }
              ((r.words[o] = u), (n = s), (s = i));
            }
            return (0 !== n ? (r.words[o] = n) : r.length--, r._strip());
          }
          function y(t, e, r) {
            return w(t, e, r);
          }
          function M(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (v = A),
            (o.prototype.mulTo = function (t, e) {
              var r,
                n = this.length + t.length;
              return (
                (r =
                  10 === this.length && 10 === t.length
                    ? v(this, t, e)
                    : n < 63
                      ? A(this, t, e)
                      : n < 1024
                        ? w(this, t, e)
                        : y(this, t, e)),
                r
              );
            }),
            (M.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
                n < t;
                n++
              )
                e[n] = this.revBin(n, r, t);
              return e;
            }),
            (M.prototype.revBin = function (t, e, r) {
              if (0 === t || t === r - 1) return t;
              for (var n = 0, i = 0; i < e; i++)
                ((n |= (1 & t) << (e - i - 1)), (t >>= 1));
              return n;
            }),
            (M.prototype.permute = function (t, e, r, n, i, o) {
              for (var s = 0; s < o; s++) ((n[s] = e[t[s]]), (i[s] = r[t[s]]));
            }),
            (M.prototype.transform = function (t, e, r, n, i, o) {
              this.permute(o, t, e, r, n, i);
              for (var s = 1; s < i; s <<= 1)
                for (
                  var u = s << 1,
                    h = Math.cos((2 * Math.PI) / u),
                    a = Math.sin((2 * Math.PI) / u),
                    l = 0;
                  l < i;
                  l += u
                )
                  for (var f = h, c = a, m = 0; m < s; m++) {
                    var g = r[l + m],
                      d = n[l + m],
                      p = r[l + m + s],
                      A = n[l + m + s],
                      v = f * p - c * A;
                    ((A = f * A + c * p),
                      (p = v),
                      (r[l + m] = g + p),
                      (n[l + m] = d + A),
                      (r[l + m + s] = g - p),
                      (n[l + m + s] = d - A),
                      m !== u &&
                        ((v = h * f - a * c), (c = h * c + a * f), (f = v)));
                  }
            }),
            (M.prototype.guessLen13b = function (t, e) {
              var r = 1 | Math.max(e, t),
                n = 1 & r,
                i = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) i++;
              return 1 << (i + 1 + n);
            }),
            (M.prototype.conjugate = function (t, e, r) {
              if (!(r <= 1))
                for (var n = 0; n < r / 2; n++) {
                  var i = t[n];
                  ((t[n] = t[r - n - 1]),
                    (t[r - n - 1] = i),
                    (i = e[n]),
                    (e[n] = -e[r - n - 1]),
                    (e[r - n - 1] = -i));
                }
            }),
            (M.prototype.normalize13b = function (t, e) {
              for (var r = 0, n = 0; n < e / 2; n++) {
                var i =
                  8192 * Math.round(t[2 * n + 1] / e) +
                  Math.round(t[2 * n] / e) +
                  r;
                ((t[n] = 67108863 & i),
                  (r = i < 67108864 ? 0 : (i / 67108864) | 0));
              }
              return t;
            }),
            (M.prototype.convert13b = function (t, e, r, i) {
              for (var o = 0, s = 0; s < e; s++)
                ((o += 0 | t[s]),
                  (r[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * e; s < i; ++s) r[s] = 0;
              (n(0 === o), n(0 === (-8192 & o)));
            }),
            (M.prototype.stub = function (t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
              return e;
            }),
            (M.prototype.mulp = function (t, e, r) {
              var n = 2 * this.guessLen13b(t.length, e.length),
                i = this.makeRBT(n),
                o = this.stub(n),
                s = new Array(n),
                u = new Array(n),
                h = new Array(n),
                a = new Array(n),
                l = new Array(n),
                f = new Array(n),
                c = r.words;
              ((c.length = n),
                this.convert13b(t.words, t.length, s, n),
                this.convert13b(e.words, e.length, a, n),
                this.transform(s, o, u, h, n, i),
                this.transform(a, o, l, f, n, i));
              for (var m = 0; m < n; m++) {
                var g = u[m] * l[m] - h[m] * f[m];
                ((h[m] = u[m] * f[m] + h[m] * l[m]), (u[m] = g));
              }
              return (
                this.conjugate(u, h, n),
                this.transform(u, h, c, o, n, i),
                this.conjugate(c, o, n),
                this.normalize13b(c, n),
                (r.negative = t.negative ^ e.negative),
                (r.length = t.length + e.length),
                r._strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)),
                this.mulTo(t, e)
              );
            }),
            (o.prototype.mulf = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)),
                y(this, t, e)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var e = t < 0;
              (e && (t = -t), n("number" === typeof t), n(t < 67108864));
              for (var r = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * t,
                  s = (67108863 & o) + (67108863 & r);
                ((r >>= 26),
                  (r += (o / 67108864) | 0),
                  (r += s >>> 26),
                  (this.words[i] = 67108863 & s));
              }
              return (
                0 !== r && ((this.words[i] = r), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                e ? this.ineg() : this
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
              var e = p(t);
              if (0 === e.length) return new o(1);
              for (var r = this, n = 0; n < e.length; n++, r = r.sqr())
                if (0 !== e[n]) break;
              if (++n < e.length)
                for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                  0 !== e[n] && (r = r.mul(i));
              return r;
            }),
            (o.prototype.iushln = function (t) {
              n("number" === typeof t && t >= 0);
              var e,
                r = t % 26,
                i = (t - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var s = 0;
                for (e = 0; e < this.length; e++) {
                  var u = this.words[e] & o,
                    h = ((0 | this.words[e]) - u) << r;
                  ((this.words[e] = h | s), (s = u >>> (26 - r)));
                }
                s && ((this.words[e] = s), this.length++);
              }
              if (0 !== i) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + i] = this.words[e];
                for (e = 0; e < i; e++) this.words[e] = 0;
                this.length += i;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return (n(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, e, r) {
              var i;
              (n("number" === typeof t && t >= 0),
                (i = e ? (e - (e % 26)) / 26 : 0));
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                u = 67108863 ^ ((67108863 >>> o) << o),
                h = r;
              if (((i -= s), (i = Math.max(0, i)), h)) {
                for (var a = 0; a < s; a++) h.words[a] = this.words[a];
                h.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, a = 0; a < this.length; a++)
                  this.words[a] = this.words[a + s];
              else ((this.words[0] = 0), (this.length = 1));
              var l = 0;
              for (a = this.length - 1; a >= 0 && (0 !== l || a >= i); a--) {
                var f = 0 | this.words[a];
                ((this.words[a] = (l << (26 - o)) | (f >>> o)), (l = f & u));
              }
              return (
                h && 0 !== l && (h.words[h.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, e, r) {
              return (n(0 === this.negative), this.iushrn(t, e, r));
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
              n("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e;
              if (this.length <= r) return !1;
              var o = this.words[r];
              return !!(o & i);
            }),
            (o.prototype.imaskn = function (t) {
              n("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26;
              if (
                (n(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= r)
              )
                return this;
              if (
                (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e)
              ) {
                var i = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= i;
              }
              return this._strip();
            }),
            (o.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (o.prototype.iaddn = function (t) {
              return (
                n("number" === typeof t),
                n(t < 67108864),
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
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
            }),
            (o.prototype.isubn = function (t) {
              if ((n("number" === typeof t), n(t < 67108864), t < 0))
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
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  ((this.words[e] += 67108864), (this.words[e + 1] -= 1));
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
            (o.prototype._ishlnsubmul = function (t, e, r) {
              var i,
                o,
                s = t.length + r;
              this._expand(s);
              var u = 0;
              for (i = 0; i < t.length; i++) {
                o = (0 | this.words[i + r]) + u;
                var h = (0 | t.words[i]) * e;
                ((o -= 67108863 & h),
                  (u = (o >> 26) - ((h / 67108864) | 0)),
                  (this.words[i + r] = 67108863 & o));
              }
              for (; i < this.length - r; i++)
                ((o = (0 | this.words[i + r]) + u),
                  (u = o >> 26),
                  (this.words[i + r] = 67108863 & o));
              if (0 === u) return this._strip();
              for (n(-1 === u), u = 0, i = 0; i < this.length; i++)
                ((o = -(0 | this.words[i]) + u),
                  (u = o >> 26),
                  (this.words[i] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, e) {
              var r = this.length - t.length,
                n = this.clone(),
                i = t,
                s = 0 | i.words[i.length - 1],
                u = this._countBits(s);
              ((r = 26 - u),
                0 !== r &&
                  ((i = i.ushln(r)),
                  n.iushln(r),
                  (s = 0 | i.words[i.length - 1])));
              var h,
                a = n.length - i.length;
              if ("mod" !== e) {
                ((h = new o(null)),
                  (h.length = a + 1),
                  (h.words = new Array(h.length)));
                for (var l = 0; l < h.length; l++) h.words[l] = 0;
              }
              var f = n.clone()._ishlnsubmul(i, 1, a);
              0 === f.negative && ((n = f), h && (h.words[a] = 1));
              for (var c = a - 1; c >= 0; c--) {
                var m =
                  67108864 * (0 | n.words[i.length + c]) +
                  (0 | n.words[i.length + c - 1]);
                ((m = Math.min((m / s) | 0, 67108863)),
                  n._ishlnsubmul(i, m, c));
                while (0 !== n.negative)
                  (m--,
                    (n.negative = 0),
                    n._ishlnsubmul(i, 1, c),
                    n.isZero() || (n.negative ^= 1));
                h && (h.words[c] = m);
              }
              return (
                h && h._strip(),
                n._strip(),
                "div" !== e && 0 !== r && n.iushrn(r),
                { div: h || null, mod: n }
              );
            }),
            (o.prototype.divmod = function (t, e, r) {
              return (
                n(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((u = this.neg().divmod(t, e)),
                      "mod" !== e && (i = u.div.neg()),
                      "div" !== e &&
                        ((s = u.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                      { div: i, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((u = this.divmod(t.neg(), e)),
                        "mod" !== e && (i = u.div.neg()),
                        { div: i, mod: u.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((u = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((s = u.mod.neg()),
                            r && 0 !== s.negative && s.isub(t)),
                          { div: u.div, mod: s })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
              );
              var i, s, u;
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
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                n = t.ushrn(1),
                i = t.andln(1),
                o = r.cmp(n);
              return o < 0 || (1 === i && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var e = t < 0;
              (e && (t = -t), n(t <= 67108863));
              for (
                var r = (1 << 26) % t, i = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                i = (r * i + (0 | this.words[o])) % t;
              return e ? -i : i;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var e = t < 0;
              (e && (t = -t), n(t <= 67108863));
              for (var r = 0, i = this.length - 1; i >= 0; i--) {
                var o = (0 | this.words[i]) + 67108864 * r;
                ((this.words[i] = (o / t) | 0), (r = o % t));
              }
              return (this._strip(), e ? this.ineg() : this);
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (n(0 === t.negative), n(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var i = new o(1),
                s = new o(0),
                u = new o(0),
                h = new o(1),
                a = 0;
              while (e.isEven() && r.isEven()) (e.iushrn(1), r.iushrn(1), ++a);
              var l = r.clone(),
                f = e.clone();
              while (!e.isZero()) {
                for (
                  var c = 0, m = 1;
                  0 === (e.words[0] & m) && c < 26;
                  ++c, m <<= 1
                );
                if (c > 0) {
                  e.iushrn(c);
                  while (c-- > 0)
                    ((i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(f)),
                      i.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var g = 0, d = 1;
                  0 === (r.words[0] & d) && g < 26;
                  ++g, d <<= 1
                );
                if (g > 0) {
                  r.iushrn(g);
                  while (g-- > 0)
                    ((u.isOdd() || h.isOdd()) && (u.iadd(l), h.isub(f)),
                      u.iushrn(1),
                      h.iushrn(1));
                }
                e.cmp(r) >= 0
                  ? (e.isub(r), i.isub(u), s.isub(h))
                  : (r.isub(e), u.isub(i), h.isub(s));
              }
              return { a: u, b: h, gcd: r.iushln(a) };
            }),
            (o.prototype._invmp = function (t) {
              (n(0 === t.negative), n(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var i,
                s = new o(1),
                u = new o(0),
                h = r.clone();
              while (e.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var a = 0, l = 1;
                  0 === (e.words[0] & l) && a < 26;
                  ++a, l <<= 1
                );
                if (a > 0) {
                  e.iushrn(a);
                  while (a-- > 0) (s.isOdd() && s.iadd(h), s.iushrn(1));
                }
                for (
                  var f = 0, c = 1;
                  0 === (r.words[0] & c) && f < 26;
                  ++f, c <<= 1
                );
                if (f > 0) {
                  r.iushrn(f);
                  while (f-- > 0) (u.isOdd() && u.iadd(h), u.iushrn(1));
                }
                e.cmp(r) >= 0 ? (e.isub(r), s.isub(u)) : (r.isub(e), u.isub(s));
              }
              return (
                (i = 0 === e.cmpn(1) ? s : u),
                i.cmpn(0) < 0 && i.iadd(t),
                i
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                r = t.clone();
              ((e.negative = 0), (r.negative = 0));
              for (var n = 0; e.isEven() && r.isEven(); n++)
                (e.iushrn(1), r.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (r.isEven()) r.iushrn(1);
                var i = e.cmp(r);
                if (i < 0) {
                  var o = e;
                  ((e = r), (r = o));
                } else if (0 === i || 0 === r.cmpn(1)) break;
                e.isub(r);
              } while (1);
              return r.iushln(n);
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
              n("number" === typeof t);
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e;
              if (this.length <= r)
                return (this._expand(r + 1), (this.words[r] |= i), this);
              for (var o = i, s = r; 0 !== o && s < this.length; s++) {
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
              var e,
                r = t < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                (r && (t = -t), n(t <= 67108863, "Number is too big"));
                var i = 0 | this.words[0];
                e = i === t ? 0 : i < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var n = 0 | this.words[r],
                  i = 0 | t.words[r];
                if (n !== i) {
                  n < i ? (e = -1) : n > i && (e = 1);
                  break;
                }
              }
              return e;
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
              return new F(t);
            }),
            (o.prototype.toRed = function (t) {
              return (
                n(!this.red, "Already a number in reduction context"),
                n(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                n(
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
                n(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (o.prototype.redAdd = function (t) {
              return (
                n(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (o.prototype.redIAdd = function (t) {
              return (
                n(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (o.prototype.redSub = function (t) {
              return (
                n(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (o.prototype.redISub = function (t) {
              return (
                n(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (o.prototype.redShl = function (t) {
              return (
                n(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (o.prototype.redMul = function (t) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (o.prototype.redIMul = function (t) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                n(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                n(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                n(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                n(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                n(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (t) {
              return (
                n(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var b = { k256: null, p224: null, p192: null, p25519: null };
          function E(t, e) {
            ((this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function B() {
            E.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function N() {
            E.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function C() {
            E.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function x() {
            E.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function F(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (n(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function O(t) {
            (F.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((E.prototype._tmp = function () {
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (E.prototype.ireduce = function (t) {
              var e,
                r = t;
              do {
                (this.split(r, this.tmp),
                  (r = this.imulK(r)),
                  (r = r.iadd(this.tmp)),
                  (e = r.bitLength()));
              } while (e > this.n);
              var n = e < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === n
                  ? ((r.words[0] = 0), (r.length = 1))
                  : n > 0
                    ? r.isub(this.p)
                    : void 0 !== r.strip
                      ? r.strip()
                      : r._strip(),
                r
              );
            }),
            (E.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (E.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            i(B, E),
            (B.prototype.split = function (t, e) {
              for (
                var r = 4194303, n = Math.min(t.length, 9), i = 0;
                i < n;
                i++
              )
                e.words[i] = t.words[i];
              if (((e.length = n), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
                var s = 0 | t.words[i];
                ((t.words[i - 10] = ((s & r) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (t.words[i - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (B.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 0 | t.words[r];
                ((e += 977 * n),
                  (t.words[r] = 67108863 & e),
                  (e = 64 * n + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            i(N, E),
            i(C, E),
            i(x, E),
            (x.prototype.imulK = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 19 * (0 | t.words[r]) + e,
                  i = 67108863 & n;
                ((n >>>= 26), (t.words[r] = i), (e = n));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (o._prime = function (t) {
              if (b[t]) return b[t];
              var e;
              if ("k256" === t) e = new B();
              else if ("p224" === t) e = new N();
              else if ("p192" === t) e = new C();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new x();
              }
              return ((b[t] = e), e);
            }),
            (F.prototype._verify1 = function (t) {
              (n(0 === t.negative, "red works only with positives"),
                n(t.red, "red works only with red numbers"));
            }),
            (F.prototype._verify2 = function (t, e) {
              (n(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                n(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (F.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (F.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (F.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (F.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (F.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (F.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (F.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (F.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (F.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (F.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (F.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (F.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((n(e % 2 === 1), 3 === e)) {
                var r = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, r);
              }
              var i = this.m.subn(1),
                s = 0;
              while (!i.isZero() && 0 === i.andln(1)) (s++, i.iushrn(1));
              n(!i.isZero());
              var u = new o(1).toRed(this),
                h = u.redNeg(),
                a = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              l = new o(2 * l * l).toRed(this);
              while (0 !== this.pow(l, a).cmp(h)) l.redIAdd(h);
              var f = this.pow(l, i),
                c = this.pow(t, i.addn(1).iushrn(1)),
                m = this.pow(t, i),
                g = s;
              while (0 !== m.cmp(u)) {
                for (var d = m, p = 0; 0 !== d.cmp(u); p++) d = d.redSqr();
                n(p < g);
                var A = this.pow(f, new o(1).iushln(g - p - 1));
                ((c = c.redMul(A)),
                  (f = A.redSqr()),
                  (m = m.redMul(f)),
                  (g = p));
              }
              return c;
            }),
            (F.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (F.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var r = 4,
                n = new Array(1 << r);
              ((n[0] = new o(1).toRed(this)), (n[1] = t));
              for (var i = 2; i < n.length; i++) n[i] = this.mul(n[i - 1], t);
              var s = n[0],
                u = 0,
                h = 0,
                a = e.bitLength() % 26;
              for (0 === a && (a = 26), i = e.length - 1; i >= 0; i--) {
                for (var l = e.words[i], f = a - 1; f >= 0; f--) {
                  var c = (l >> f) & 1;
                  (s !== n[0] && (s = this.sqr(s)),
                    0 !== c || 0 !== u
                      ? ((u <<= 1),
                        (u |= c),
                        h++,
                        (h === r || (0 === i && 0 === f)) &&
                          ((s = this.mul(s, n[u])), (h = 0), (u = 0)))
                      : (h = 0));
                }
                a = 26;
              }
              return s;
            }),
            (F.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (F.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (o.mont = function (t) {
              return new O(t);
            }),
            i(O, F),
            (O.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (O.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (O.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var r = t.imul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                o = i;
              return (
                i.cmp(this.m) >= 0
                  ? (o = i.isub(this.m))
                  : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (O.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
              var r = t.mul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                s = i;
              return (
                i.cmp(this.m) >= 0
                  ? (s = i.isub(this.m))
                  : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (O.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, r(20)(t));
    },
    1550: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FixedNumber = e.FixedFormat = void 0),
        (e.formatFixed = g),
        (e.parseFixed = d));
      var n = r(59),
        i = r(71),
        o = r(543),
        s = r(542);
      const u = new i.Logger(o.version),
        h = {},
        a = s.BigNumber.from(0),
        l = s.BigNumber.from(-1);
      function f(t, e, r, n) {
        const o = { fault: e, operation: r };
        return (
          void 0 !== n && (o.value = n),
          u.throwError(t, i.Logger.errors.NUMERIC_FAULT, o)
        );
      }
      let c = "0";
      while (c.length < 256) c += c;
      function m(t) {
        if ("number" !== typeof t)
          try {
            t = s.BigNumber.from(t).toNumber();
          } catch (e) {}
        return "number" === typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + c.substring(0, t)
          : u.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function g(t, e) {
        null == e && (e = 0);
        const r = m(e);
        t = s.BigNumber.from(t);
        const n = t.lt(a);
        n && (t = t.mul(l));
        let i = t.mod(r).toString();
        while (i.length < r.length - 1) i = "0" + i;
        i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = t.div(r).toString();
        return ((t = 1 === r.length ? o : o + "." + i), n && (t = "-" + t), t);
      }
      function d(t, e) {
        null == e && (e = 0);
        const r = m(e);
        ("string" === typeof t && t.match(/^-?[0-9.]+$/)) ||
          u.throwArgumentError("invalid decimal value", "value", t);
        const n = "-" === t.substring(0, 1);
        (n && (t = t.substring(1)),
          "." === t && u.throwArgumentError("missing value", "value", t));
        const i = t.split(".");
        i.length > 2 &&
          u.throwArgumentError("too many decimal points", "value", t);
        let o = i[0],
          h = i[1];
        (o || (o = "0"), h || (h = "0"));
        while ("0" === h[h.length - 1]) h = h.substring(0, h.length - 1);
        (h.length > r.length - 1 &&
          f("fractional component exceeds decimals", "underflow", "parseFixed"),
          "" === h && (h = "0"));
        while (h.length < r.length - 1) h += "0";
        const a = s.BigNumber.from(o),
          c = s.BigNumber.from(h);
        let g = a.mul(r).add(c);
        return (n && (g = g.mul(l)), g);
      }
      class FixedFormat {
        constructor(t, e, r, n) {
          (t !== h &&
            u.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.signed = e),
            (this.width = r),
            (this.decimals = n),
            (this.name =
              (e ? "" : "u") + "fixed" + String(r) + "x" + String(n)),
            (this._multiplier = m(n)),
            Object.freeze(this));
        }
        static from(t) {
          if (t instanceof FixedFormat) return t;
          "number" === typeof t && (t = "fixed128x" + t);
          let e = !0,
            r = 128,
            n = 18;
          if ("string" === typeof t)
            if ("fixed" === t);
            else if ("ufixed" === t) e = !1;
            else {
              const i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              (i || u.throwArgumentError("invalid fixed format", "format", t),
                (e = "u" !== i[1]),
                (r = parseInt(i[2])),
                (n = parseInt(i[3])));
            }
          else if (t) {
            const i = (e, r, n) =>
              null == t[e]
                ? n
                : (typeof t[e] !== r &&
                    u.throwArgumentError(
                      "invalid fixed format (" + e + " not " + r + ")",
                      "format." + e,
                      t[e],
                    ),
                  t[e]);
            ((e = i("signed", "boolean", e)),
              (r = i("width", "number", r)),
              (n = i("decimals", "number", n)));
          }
          return (
            r % 8 &&
              u.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                r,
              ),
            n > 80 &&
              u.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                n,
              ),
            new FixedFormat(h, e, r, n)
          );
        }
      }
      e.FixedFormat = FixedFormat;
      class FixedNumber {
        constructor(t, e, r, n) {
          (t !== h &&
            u.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.format = n),
            (this._hex = e),
            (this._value = r),
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
          const e = d(this._value, this.format.decimals),
            r = d(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            e.add(r),
            this.format.decimals,
            this.format,
          );
        }
        subUnsafe(t) {
          this._checkFormat(t);
          const e = d(this._value, this.format.decimals),
            r = d(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            e.sub(r),
            this.format.decimals,
            this.format,
          );
        }
        mulUnsafe(t) {
          this._checkFormat(t);
          const e = d(this._value, this.format.decimals),
            r = d(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            e.mul(r).div(this.format._multiplier),
            this.format.decimals,
            this.format,
          );
        }
        divUnsafe(t) {
          this._checkFormat(t);
          const e = d(this._value, this.format.decimals),
            r = d(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            e.mul(this.format._multiplier).div(r),
            this.format.decimals,
            this.format,
          );
        }
        floor() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = FixedNumber.from(t[0], this.format);
          const r = !t[1].match(/^(0*)$/);
          return (
            this.isNegative() && r && (e = e.subUnsafe(p.toFormat(e.format))),
            e
          );
        }
        ceiling() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let e = FixedNumber.from(t[0], this.format);
          const r = !t[1].match(/^(0*)$/);
          return (
            !this.isNegative() && r && (e = e.addUnsafe(p.toFormat(e.format))),
            e
          );
        }
        round(t) {
          null == t && (t = 0);
          const e = this.toString().split(".");
          if (
            (1 === e.length && e.push("0"),
            (t < 0 || t > 80 || t % 1) &&
              u.throwArgumentError("invalid decimal count", "decimals", t),
            e[1].length <= t)
          )
            return this;
          const r = FixedNumber.from("1" + c.substring(0, t), this.format),
            n = A.toFormat(this.format);
          return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r);
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
          const e = s.BigNumber.from(this._hex)
            .fromTwos(this.format.width)
            .toTwos(t)
            .toHexString();
          return (0, n.hexZeroPad)(e, t / 8);
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return FixedNumber.fromString(this._value, t);
        }
        static fromValue(t, e, r) {
          return (
            null != r ||
              null == e ||
              (0, s.isBigNumberish)(e) ||
              ((r = e), (e = null)),
            null == e && (e = 0),
            null == r && (r = "fixed"),
            FixedNumber.fromString(g(t, e), FixedFormat.from(r))
          );
        }
        static fromString(t, e) {
          null == e && (e = "fixed");
          const r = FixedFormat.from(e),
            i = d(t, r.decimals);
          !r.signed &&
            i.lt(a) &&
            f("unsigned value cannot be negative", "overflow", "value", t);
          let o = null;
          r.signed
            ? (o = i.toTwos(r.width).toHexString())
            : ((o = i.toHexString()), (o = (0, n.hexZeroPad)(o, r.width / 8)));
          const s = g(i, r.decimals);
          return new FixedNumber(h, o, s, r);
        }
        static fromBytes(t, e) {
          null == e && (e = "fixed");
          const r = FixedFormat.from(e);
          if ((0, n.arrayify)(t).length > r.width / 8)
            throw new Error("overflow");
          let i = s.BigNumber.from(t);
          r.signed && (i = i.fromTwos(r.width));
          const o = i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
            u = g(i, r.decimals);
          return new FixedNumber(h, o, u, r);
        }
        static from(t, e) {
          if ("string" === typeof t) return FixedNumber.fromString(t, e);
          if ((0, n.isBytes)(t)) return FixedNumber.fromBytes(t, e);
          try {
            return FixedNumber.fromValue(t, 0, e);
          } catch (r) {
            if (r.code !== i.Logger.errors.INVALID_ARGUMENT) throw r;
          }
          return u.throwArgumentError("invalid FixedNumber value", "value", t);
        }
        static isFixedNumber(t) {
          return !(!t || !t._isFixedNumber);
        }
      }
      e.FixedNumber = FixedNumber;
      const p = FixedNumber.from(1),
        A = FixedNumber.from("0.5");
    },
    1551: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HashZero = void 0));
      e.HashZero =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    1552: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EtherSymbol = void 0));
      e.EtherSymbol = "Ξ";
    },
    1553: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "strings/5.8.0";
    },
    1554: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._nameprepTableA1 = p),
        (e._nameprepTableB2 = A),
        (e._nameprepTableC = v),
        (e.nameprep = w));
      var n = r(284);
      function i(t) {
        if (t.length % 4 !== 0) throw new Error("bad data");
        let e = [];
        for (let r = 0; r < t.length; r += 4)
          e.push(parseInt(t.substring(r, r + 4), 16));
        return e;
      }
      function o(t, e) {
        e ||
          (e = function (t) {
            return [parseInt(t, 16)];
          });
        let r = 0,
          n = {};
        return (
          t.split(",").forEach((t) => {
            let i = t.split(":");
            ((r += parseInt(i[0], 16)), (n[r] = e(i[1])));
          }),
          n
        );
      }
      function s(t) {
        let e = 0;
        return t.split(",").map((t) => {
          let r = t.split("-");
          1 === r.length ? (r[1] = "0") : "" === r[1] && (r[1] = "1");
          let n = e + parseInt(r[0], 16);
          return ((e = parseInt(r[1], 16)), { l: n, h: e });
        });
      }
      function u(t, e) {
        let r = 0;
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          if (
            ((r += i.l), t >= r && t <= r + i.h && (t - r) % (i.d || 1) === 0)
          ) {
            if (i.e && -1 !== i.e.indexOf(t - r)) continue;
            return i;
          }
        }
        return null;
      }
      const h = s(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d",
        ),
        a = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
          .split(",")
          .map((t) => parseInt(t, 16)),
        l = [
          { h: 25, s: 32, l: 65 },
          { h: 30, s: 32, e: [23], l: 127 },
          { h: 54, s: 1, e: [48], l: 64, d: 2 },
          { h: 14, s: 1, l: 57, d: 2 },
          { h: 44, s: 1, l: 17, d: 2 },
          { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
          { h: 16, s: 1, l: 68, d: 2 },
          { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
          { h: 26, s: 32, e: [17], l: 435 },
          { h: 22, s: 1, l: 71, d: 2 },
          { h: 15, s: 80, l: 40 },
          { h: 31, s: 32, l: 16 },
          { h: 32, s: 1, l: 80, d: 2 },
          { h: 52, s: 1, l: 42, d: 2 },
          { h: 12, s: 1, l: 55, d: 2 },
          { h: 40, s: 1, e: [38], l: 15, d: 2 },
          { h: 14, s: 1, l: 48, d: 2 },
          { h: 37, s: 48, l: 49 },
          { h: 148, s: 1, l: 6351, d: 2 },
          { h: 88, s: 1, l: 160, d: 2 },
          { h: 15, s: 16, l: 704 },
          { h: 25, s: 26, l: 854 },
          { h: 25, s: 32, l: 55915 },
          { h: 37, s: 40, l: 1247 },
          { h: 25, s: -119711, l: 53248 },
          { h: 25, s: -119763, l: 52 },
          { h: 25, s: -119815, l: 52 },
          { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
          { h: 25, s: -119919, l: 52 },
          { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
          { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
          { h: 25, s: -120075, l: 52 },
          { h: 25, s: -120127, l: 52 },
          { h: 25, s: -120179, l: 52 },
          { h: 25, s: -120231, l: 52 },
          { h: 25, s: -120283, l: 52 },
          { h: 25, s: -120335, l: 52 },
          { h: 24, s: -119543, e: [17], l: 56 },
          { h: 24, s: -119601, e: [17], l: 58 },
          { h: 24, s: -119659, e: [17], l: 58 },
          { h: 24, s: -119717, e: [17], l: 58 },
          { h: 24, s: -119775, e: [17], l: 58 },
        ],
        f = o(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3",
        ),
        c = o(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7",
        ),
        m = o(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          i,
        ),
        g = s(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001",
        );
      function d(t) {
        return t.reduce(
          (t, e) => (
            e.forEach((e) => {
              t.push(e);
            }),
            t
          ),
          [],
        );
      }
      function p(t) {
        return !!u(t, h);
      }
      function A(t) {
        let e = u(t, l);
        if (e) return [t + e.s];
        let r = f[t];
        if (r) return r;
        let n = c[t];
        if (n) return [t + n[0]];
        let i = m[t];
        return i || null;
      }
      function v(t) {
        return !!u(t, g);
      }
      function w(t) {
        if (t.match(/^[a-z0-9-]*$/i) && t.length <= 59) return t.toLowerCase();
        let e = (0, n.toUtf8CodePoints)(t);
        ((e = d(
          e.map((t) => {
            if (a.indexOf(t) >= 0) return [];
            if (t >= 65024 && t <= 65039) return [];
            let e = A(t);
            return e || [t];
          }),
        )),
          (e = (0, n.toUtf8CodePoints)(
            (0, n._toUtf8String)(e),
            n.UnicodeNormalizationForm.NFKC,
          )),
          e.forEach((t) => {
            if (v(t)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
          }),
          e.forEach((t) => {
            if (p(t)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
          }));
        let r = (0, n._toUtf8String)(e);
        if (
          "-" === r.substring(0, 1) ||
          "--" === r.substring(2, 4) ||
          "-" === r.substring(r.length - 1)
        )
          throw new Error("invalid hyphen");
        return r;
      }
    },
    1555: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.dnsEncode = p),
        (e.ensNormalize = m),
        (e.isValidName = g),
        (e.namehash = d));
      var n = r(59),
        i = r(176),
        o = r(147),
        s = r(71),
        u = r(544),
        h = r(1556);
      const a = new s.Logger(u.version),
        l = new Uint8Array(32);
      function f(t) {
        if (0 === t.length)
          throw new Error("invalid ENS name; empty component");
        return t;
      }
      function c(t) {
        const e = (0, i.toUtf8Bytes)((0, h.ens_normalize)(t)),
          r = [];
        if (0 === t.length) return r;
        let n = 0;
        for (let i = 0; i < e.length; i++) {
          const t = e[i];
          46 === t && (r.push(f(e.slice(n, i))), (n = i + 1));
        }
        if (n >= e.length) throw new Error("invalid ENS name; empty component");
        return (r.push(f(e.slice(n))), r);
      }
      function m(t) {
        return c(t)
          .map((t) => (0, i.toUtf8String)(t))
          .join(".");
      }
      function g(t) {
        try {
          return 0 !== c(t).length;
        } catch (e) {}
        return !1;
      }
      function d(t) {
        "string" !== typeof t &&
          a.throwArgumentError("invalid ENS name; not a string", "name", t);
        let e = l;
        const r = c(t);
        while (r.length)
          e = (0, o.keccak256)((0, n.concat)([e, (0, o.keccak256)(r.pop())]));
        return (0, n.hexlify)(e);
      }
      function p(t) {
        return (
          (0, n.hexlify)(
            (0, n.concat)(
              c(t).map((t) => {
                if (t.length > 63)
                  throw new Error(
                    "invalid DNS encoded entry; length exceeds 63 bytes",
                  );
                const e = new Uint8Array(t.length + 1);
                return (e.set(t, 1), (e[0] = e.length - 1), e);
              }),
            ),
          ) + "00"
        );
      }
      l.fill(0);
    },
    1556: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ens_normalize = p),
        (e.ens_normalize_post_check = d));
      var n = r(176),
        i = r(1557),
        o = r(545);
      const s = (0, i.getData)(),
        u = new Set((0, o.read_member_array)(s)),
        h = new Set((0, o.read_member_array)(s)),
        a = (0, o.read_mapped_map)(s),
        l = (0, o.read_emoji_trie)(s),
        f = 45,
        c = 95;
      function m(t) {
        return (0, n.toUtf8CodePoints)(t);
      }
      function g(t) {
        return t.filter((t) => 65039 != t);
      }
      function d(t) {
        for (let r of t.split(".")) {
          let t = m(r);
          try {
            for (let e = t.lastIndexOf(c) - 1; e >= 0; e--)
              if (t[e] !== c)
                throw new Error("underscore only allowed at start");
            if (
              t.length >= 4 &&
              t.every((t) => t < 128) &&
              t[2] === f &&
              t[3] === f
            )
              throw new Error("invalid label extension");
          } catch (e) {
            throw new Error(`Invalid label "${r}": ${e.message}`);
          }
        }
        return t;
      }
      function p(t) {
        return d(A(t, g));
      }
      function A(t, e) {
        let r = m(t).reverse(),
          n = [];
        while (r.length) {
          let t = w(r);
          if (t) {
            n.push(...e(t));
            continue;
          }
          let i = r.pop();
          if (u.has(i)) {
            n.push(i);
            continue;
          }
          if (h.has(i)) continue;
          let o = a[i];
          if (!o)
            throw new Error(
              "Disallowed codepoint: 0x" + i.toString(16).toUpperCase(),
            );
          n.push(...o);
        }
        return d(v(String.fromCodePoint(...n)));
      }
      function v(t) {
        return t.normalize("NFC");
      }
      function w(t, e) {
        var r;
        let n,
          i,
          o = l,
          s = [],
          u = t.length;
        e && (e.length = 0);
        while (u) {
          let h = t[--u];
          if (
            ((o =
              null === (r = o.branches.find((t) => t.set.has(h))) ||
              void 0 === r
                ? void 0
                : r.node),
            !o)
          )
            break;
          if (o.save) i = h;
          else if (o.check && h === i) break;
          (s.push(h),
            o.fe0f && (s.push(65039), u > 0 && 65039 == t[u - 1] && u--),
            o.valid &&
              ((n = s.slice()),
              2 == o.valid && n.splice(1, 1),
              e && e.push(...t.slice(u).reverse()),
              (t.length = u)));
        }
        return n;
      }
    },
    1557: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.getData = o));
      var n = r(1558),
        i = r(545);
      function o() {
        return (0, i.read_compressed_payload)(
          (0, n.decode)(
            "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",
          ),
        );
      }
    },
    1558: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "decode", {
          enumerable: !0,
          get: function () {
            return n.decode;
          },
        }),
        Object.defineProperty(e, "encode", {
          enumerable: !0,
          get: function () {
            return n.encode;
          },
        }));
      var n = r(1559);
    },
    1559: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.decode = i),
        (e.encode = o));
      var n = r(59);
      function i(t) {
        t = atob(t);
        const e = [];
        for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
        return (0, n.arrayify)(e);
      }
      function o(t) {
        t = (0, n.arrayify)(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
        return btoa(e);
      }
    },
    1560: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.hashMessage = u),
        (e.messagePrefix = void 0));
      var n = r(59),
        i = r(147),
        o = r(176);
      const s = (e.messagePrefix = "Ethereum Signed Message:\n");
      function u(t) {
        return (
          "string" === typeof t && (t = (0, o.toUtf8Bytes)(t)),
          (0, i.keccak256)(
            (0, n.concat)([
              (0, o.toUtf8Bytes)(s),
              (0, o.toUtf8Bytes)(String(t.length)),
              t,
            ]),
          )
        );
      }
    },
    1561: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TypedDataEncoder = void 0));
      var n = r(1562),
        i = r(283),
        o = r(59),
        s = r(147),
        u = r(1566),
        h = r(71),
        a = r(544),
        l = r(541),
        f = function (t, e, r, n) {
          function i(t) {
            return t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function s(t) {
              try {
                h(n.next(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              try {
                h(n["throw"](t));
              } catch (e) {
                o(e);
              }
            }
            function h(t) {
              t.done ? r(t.value) : i(t.value).then(s, u);
            }
            h((n = n.apply(t, e || [])).next());
          });
        };
      const c = new h.Logger(a.version),
        m = new Uint8Array(32);
      m.fill(0);
      const g = i.BigNumber.from(-1),
        d = i.BigNumber.from(0),
        p = i.BigNumber.from(1),
        A = i.BigNumber.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        );
      function v(t) {
        const e = (0, o.arrayify)(t),
          r = e.length % 32;
        return r ? (0, o.hexConcat)([e, m.slice(r)]) : (0, o.hexlify)(e);
      }
      const w = (0, o.hexZeroPad)(p.toHexString(), 32),
        y = (0, o.hexZeroPad)(d.toHexString(), 32),
        M = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        b = ["name", "version", "chainId", "verifyingContract", "salt"];
      function E(t) {
        return function (e) {
          return (
            "string" !== typeof e &&
              c.throwArgumentError(
                "invalid domain value for " + JSON.stringify(t),
                "domain." + t,
                e,
              ),
            e
          );
        };
      }
      const B = {
        name: E("name"),
        version: E("version"),
        chainId: function (t) {
          try {
            return i.BigNumber.from(t).toString();
          } catch (e) {}
          return c.throwArgumentError(
            'invalid domain value for "chainId"',
            "domain.chainId",
            t,
          );
        },
        verifyingContract: function (t) {
          try {
            return (0, n.getAddress)(t).toLowerCase();
          } catch (e) {}
          return c.throwArgumentError(
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            t,
          );
        },
        salt: function (t) {
          try {
            const e = (0, o.arrayify)(t);
            if (32 !== e.length) throw new Error("bad length");
            return (0, o.hexlify)(e);
          } catch (e) {}
          return c.throwArgumentError(
            'invalid domain value "salt"',
            "domain.salt",
            t,
          );
        },
      };
      function N(t) {
        {
          const e = t.match(/^(u?)int(\d*)$/);
          if (e) {
            const r = "" === e[1],
              n = parseInt(e[2] || "256");
            (n % 8 !== 0 || n > 256 || (e[2] && e[2] !== String(n))) &&
              c.throwArgumentError("invalid numeric width", "type", t);
            const s = A.mask(r ? n - 1 : n),
              u = r ? s.add(p).mul(g) : d;
            return function (e) {
              const r = i.BigNumber.from(e);
              return (
                (r.lt(u) || r.gt(s)) &&
                  c.throwArgumentError(
                    "value out-of-bounds for " + t,
                    "value",
                    e,
                  ),
                (0, o.hexZeroPad)(r.toTwos(256).toHexString(), 32)
              );
            };
          }
        }
        {
          const e = t.match(/^bytes(\d+)$/);
          if (e) {
            const r = parseInt(e[1]);
            return (
              (0 === r || r > 32 || e[1] !== String(r)) &&
                c.throwArgumentError("invalid bytes width", "type", t),
              function (e) {
                const n = (0, o.arrayify)(e);
                return (
                  n.length !== r &&
                    c.throwArgumentError("invalid length for " + t, "value", e),
                  v(e)
                );
              }
            );
          }
        }
        switch (t) {
          case "address":
            return function (t) {
              return (0, o.hexZeroPad)((0, n.getAddress)(t), 32);
            };
          case "bool":
            return function (t) {
              return t ? w : y;
            };
          case "bytes":
            return function (t) {
              return (0, s.keccak256)(t);
            };
          case "string":
            return function (t) {
              return (0, l.id)(t);
            };
        }
        return null;
      }
      function C(t, e) {
        return `${t}(${e
          .map((t) => {
            let { name: e, type: r } = t;
            return r + " " + e;
          })
          .join(",")})`;
      }
      class TypedDataEncoder {
        constructor(t) {
          ((0, u.defineReadOnly)(
            this,
            "types",
            Object.freeze((0, u.deepCopy)(t)),
          ),
            (0, u.defineReadOnly)(this, "_encoderCache", {}),
            (0, u.defineReadOnly)(this, "_types", {}));
          const e = {},
            r = {},
            n = {};
          Object.keys(t).forEach((t) => {
            ((e[t] = {}), (r[t] = []), (n[t] = {}));
          });
          for (const s in t) {
            const n = {};
            t[s].forEach((i) => {
              (n[i.name] &&
                c.throwArgumentError(
                  `duplicate variable name ${JSON.stringify(i.name)} in ${JSON.stringify(s)}`,
                  "types",
                  t,
                ),
                (n[i.name] = !0));
              const o = i.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              o === s &&
                c.throwArgumentError(
                  "circular type reference to " + JSON.stringify(o),
                  "types",
                  t,
                );
              const u = N(o);
              u ||
                (r[o] ||
                  c.throwArgumentError(
                    "unknown type " + JSON.stringify(o),
                    "types",
                    t,
                  ),
                r[o].push(s),
                (e[s][o] = !0));
            });
          }
          const i = Object.keys(r).filter((t) => 0 === r[t].length);
          function o(i, s) {
            (s[i] &&
              c.throwArgumentError(
                "circular type reference to " + JSON.stringify(i),
                "types",
                t,
              ),
              (s[i] = !0),
              Object.keys(e[i]).forEach((t) => {
                r[t] &&
                  (o(t, s),
                  Object.keys(s).forEach((e) => {
                    n[e][t] = !0;
                  }));
              }),
              delete s[i]);
          }
          (0 === i.length
            ? c.throwArgumentError("missing primary type", "types", t)
            : i.length > 1 &&
              c.throwArgumentError(
                "ambiguous primary types or unused types: " +
                  i.map((t) => JSON.stringify(t)).join(", "),
                "types",
                t,
              ),
            (0, u.defineReadOnly)(this, "primaryType", i[0]),
            o(this.primaryType, {}));
          for (const s in n) {
            const e = Object.keys(n[s]);
            (e.sort(),
              (this._types[s] =
                C(s, t[s]) + e.map((e) => C(e, t[e])).join("")));
          }
        }
        getEncoder(t) {
          let e = this._encoderCache[t];
          return (e || (e = this._encoderCache[t] = this._getEncoder(t)), e);
        }
        _getEncoder(t) {
          {
            const e = N(t);
            if (e) return e;
          }
          const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (e) {
            const t = e[1],
              r = this.getEncoder(t),
              n = parseInt(e[3]);
            return (e) => {
              n >= 0 &&
                e.length !== n &&
                c.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  e,
                );
              let i = e.map(r);
              return (
                this._types[t] && (i = i.map(s.keccak256)),
                (0, s.keccak256)((0, o.hexConcat)(i))
              );
            };
          }
          const r = this.types[t];
          if (r) {
            const e = (0, l.id)(this._types[t]);
            return (t) => {
              const n = r.map((e) => {
                let { name: r, type: n } = e;
                const i = this.getEncoder(n)(t[r]);
                return this._types[n] ? (0, s.keccak256)(i) : i;
              });
              return (n.unshift(e), (0, o.hexConcat)(n));
            };
          }
          return c.throwArgumentError("unknown type: " + t, "type", t);
        }
        encodeType(t) {
          const e = this._types[t];
          return (
            e ||
              c.throwArgumentError(
                "unknown type: " + JSON.stringify(t),
                "name",
                t,
              ),
            e
          );
        }
        encodeData(t, e) {
          return this.getEncoder(t)(e);
        }
        hashStruct(t, e) {
          return (0, s.keccak256)(this.encodeData(t, e));
        }
        encode(t) {
          return this.encodeData(this.primaryType, t);
        }
        hash(t) {
          return this.hashStruct(this.primaryType, t);
        }
        _visit(t, e, r) {
          {
            const n = N(t);
            if (n) return r(t, e);
          }
          const n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            const t = n[1],
              i = parseInt(n[3]);
            return (
              i >= 0 &&
                e.length !== i &&
                c.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  e,
                ),
              e.map((e) => this._visit(t, e, r))
            );
          }
          const i = this.types[t];
          return i
            ? i.reduce((t, n) => {
                let { name: i, type: o } = n;
                return ((t[i] = this._visit(o, e[i], r)), t);
              }, {})
            : c.throwArgumentError("unknown type: " + t, "type", t);
        }
        visit(t, e) {
          return this._visit(this.primaryType, t, e);
        }
        static from(t) {
          return new TypedDataEncoder(t);
        }
        static getPrimaryType(t) {
          return TypedDataEncoder.from(t).primaryType;
        }
        static hashStruct(t, e, r) {
          return TypedDataEncoder.from(e).hashStruct(t, r);
        }
        static hashDomain(t) {
          const e = [];
          for (const r in t) {
            const n = M[r];
            (n ||
              c.throwArgumentError(
                "invalid typed-data domain key: " + JSON.stringify(r),
                "domain",
                t,
              ),
              e.push({ name: r, type: n }));
          }
          return (
            e.sort((t, e) => b.indexOf(t.name) - b.indexOf(e.name)),
            TypedDataEncoder.hashStruct("EIP712Domain", { EIP712Domain: e }, t)
          );
        }
        static encode(t, e, r) {
          return (0, o.hexConcat)([
            "0x1901",
            TypedDataEncoder.hashDomain(t),
            TypedDataEncoder.from(e).hash(r),
          ]);
        }
        static hash(t, e, r) {
          return (0, s.keccak256)(TypedDataEncoder.encode(t, e, r));
        }
        static resolveNames(t, e, r, n) {
          return f(this, void 0, void 0, function* () {
            t = (0, u.shallowCopy)(t);
            const i = {};
            t.verifyingContract &&
              !(0, o.isHexString)(t.verifyingContract, 20) &&
              (i[t.verifyingContract] = "0x");
            const s = TypedDataEncoder.from(e);
            s.visit(
              r,
              (t, e) => (
                "address" !== t || (0, o.isHexString)(e, 20) || (i[e] = "0x"),
                e
              ),
            );
            for (const t in i) i[t] = yield n(t);
            return (
              t.verifyingContract &&
                i[t.verifyingContract] &&
                (t.verifyingContract = i[t.verifyingContract]),
              (r = s.visit(r, (t, e) => ("address" === t && i[e] ? i[e] : e))),
              { domain: t, value: r }
            );
          });
        }
        static getPayload(t, e, r) {
          TypedDataEncoder.hashDomain(t);
          const n = {},
            s = [];
          b.forEach((e) => {
            const r = t[e];
            null != r && ((n[e] = B[e](r)), s.push({ name: e, type: M[e] }));
          });
          const h = TypedDataEncoder.from(e),
            a = (0, u.shallowCopy)(e);
          return (
            a.EIP712Domain
              ? c.throwArgumentError(
                  "types must not contain EIP712Domain type",
                  "types.EIP712Domain",
                  e,
                )
              : (a.EIP712Domain = s),
            h.encode(r),
            {
              types: a,
              domain: n,
              primaryType: h.primaryType,
              message: h.visit(r, (t, e) => {
                if (t.match(/^bytes(\d*)/))
                  return (0, o.hexlify)((0, o.arrayify)(e));
                if (t.match(/^u?int/)) return i.BigNumber.from(e).toString();
                switch (t) {
                  case "address":
                    return e.toLowerCase();
                  case "bool":
                    return !!e;
                  case "string":
                    return (
                      "string" !== typeof e &&
                        c.throwArgumentError("invalid string", "value", e),
                      e
                    );
                }
                return c.throwArgumentError("unsupported type", "type", t);
              }),
            }
          );
        }
      }
      e.TypedDataEncoder = TypedDataEncoder;
    },
    1562: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getAddress = p),
        (e.getContractAddress = w),
        (e.getCreate2Address = y),
        (e.getIcapAddress = v),
        (e.isAddress = A));
      var n = r(59),
        i = r(283),
        o = r(147),
        s = r(1563),
        u = r(71),
        h = r(1565);
      const a = new u.Logger(h.version);
      function l(t) {
        ((0, n.isHexString)(t, 20) ||
          a.throwArgumentError("invalid address", "address", t),
          (t = t.toLowerCase()));
        const e = t.substring(2).split(""),
          r = new Uint8Array(40);
        for (let n = 0; n < 40; n++) r[n] = e[n].charCodeAt(0);
        const i = (0, n.arrayify)((0, o.keccak256)(r));
        for (let n = 0; n < 40; n += 2)
          (i[n >> 1] >> 4 >= 8 && (e[n] = e[n].toUpperCase()),
            (15 & i[n >> 1]) >= 8 && (e[n + 1] = e[n + 1].toUpperCase()));
        return "0x" + e.join("");
      }
      const f = 9007199254740991;
      function c(t) {
        return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10;
      }
      const m = {};
      for (let M = 0; M < 10; M++) m[String(M)] = String(M);
      for (let M = 0; M < 26; M++)
        m[String.fromCharCode(65 + M)] = String(10 + M);
      const g = Math.floor(c(f));
      function d(t) {
        ((t = t.toUpperCase()),
          (t = t.substring(4) + t.substring(0, 2) + "00"));
        let e = t
          .split("")
          .map((t) => m[t])
          .join("");
        while (e.length >= g) {
          let t = e.substring(0, g);
          e = (parseInt(t, 10) % 97) + e.substring(t.length);
        }
        let r = String(98 - (parseInt(e, 10) % 97));
        while (r.length < 2) r = "0" + r;
        return r;
      }
      function p(t) {
        let e = null;
        if (
          ("string" !== typeof t &&
            a.throwArgumentError("invalid address", "address", t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          ("0x" !== t.substring(0, 2) && (t = "0x" + t),
            (e = l(t)),
            t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              e !== t &&
              a.throwArgumentError("bad address checksum", "address", t));
        else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          (t.substring(2, 4) !== d(t) &&
            a.throwArgumentError("bad icap checksum", "address", t),
            (e = (0, i._base36To16)(t.substring(4))));
          while (e.length < 40) e = "0" + e;
          e = l("0x" + e);
        } else a.throwArgumentError("invalid address", "address", t);
        return e;
      }
      function A(t) {
        try {
          return (p(t), !0);
        } catch (e) {}
        return !1;
      }
      function v(t) {
        let e = (0, i._base16To36)(p(t).substring(2)).toUpperCase();
        while (e.length < 30) e = "0" + e;
        return "XE" + d("XE00" + e) + e;
      }
      function w(t) {
        let e = null;
        try {
          e = p(t.from);
        } catch (u) {
          a.throwArgumentError("missing from address", "transaction", t);
        }
        const r = (0, n.stripZeros)(
          (0, n.arrayify)(i.BigNumber.from(t.nonce).toHexString()),
        );
        return p(
          (0, n.hexDataSlice)((0, o.keccak256)((0, s.encode)([e, r])), 12),
        );
      }
      function y(t, e, r) {
        return (
          32 !== (0, n.hexDataLength)(e) &&
            a.throwArgumentError("salt must be 32 bytes", "salt", e),
          32 !== (0, n.hexDataLength)(r) &&
            a.throwArgumentError(
              "initCodeHash must be 32 bytes",
              "initCodeHash",
              r,
            ),
          p(
            (0, n.hexDataSlice)(
              (0, o.keccak256)((0, n.concat)(["0xff", p(t), e, r])),
              12,
            ),
          )
        );
      }
    },
    1563: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.decode = m),
        (e.encode = l));
      var n = r(59),
        i = r(71),
        o = r(1564);
      const s = new i.Logger(o.version);
      function u(t) {
        const e = [];
        while (t) (e.unshift(255 & t), (t >>= 8));
        return e;
      }
      function h(t, e, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
        return n;
      }
      function a(t) {
        if (Array.isArray(t)) {
          let e = [];
          if (
            (t.forEach(function (t) {
              e = e.concat(a(t));
            }),
            e.length <= 55)
          )
            return (e.unshift(192 + e.length), e);
          const r = u(e.length);
          return (r.unshift(247 + r.length), r.concat(e));
        }
        (0, n.isBytesLike)(t) ||
          s.throwArgumentError("RLP object must be BytesLike", "object", t);
        const e = Array.prototype.slice.call((0, n.arrayify)(t));
        if (1 === e.length && e[0] <= 127) return e;
        if (e.length <= 55) return (e.unshift(128 + e.length), e);
        const r = u(e.length);
        return (r.unshift(183 + r.length), r.concat(e));
      }
      function l(t) {
        return (0, n.hexlify)(a(t));
      }
      function f(t, e, r, n) {
        const o = [];
        while (r < e + 1 + n) {
          const u = c(t, r);
          (o.push(u.result),
            (r += u.consumed),
            r > e + 1 + n &&
              s.throwError(
                "child data too short",
                i.Logger.errors.BUFFER_OVERRUN,
                {},
              ));
        }
        return { consumed: 1 + n, result: o };
      }
      function c(t, e) {
        if (
          (0 === t.length &&
            s.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {}),
          t[e] >= 248)
        ) {
          const r = t[e] - 247;
          e + 1 + r > t.length &&
            s.throwError(
              "data short segment too short",
              i.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const n = h(t, e + 1, r);
          return (
            e + 1 + r + n > t.length &&
              s.throwError(
                "data long segment too short",
                i.Logger.errors.BUFFER_OVERRUN,
                {},
              ),
            f(t, e, e + 1 + r, r + n)
          );
        }
        if (t[e] >= 192) {
          const r = t[e] - 192;
          return (
            e + 1 + r > t.length &&
              s.throwError(
                "data array too short",
                i.Logger.errors.BUFFER_OVERRUN,
                {},
              ),
            f(t, e, e + 1, r)
          );
        }
        if (t[e] >= 184) {
          const r = t[e] - 183;
          e + 1 + r > t.length &&
            s.throwError(
              "data array too short",
              i.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const o = h(t, e + 1, r);
          e + 1 + r + o > t.length &&
            s.throwError(
              "data array too short",
              i.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const u = (0, n.hexlify)(t.slice(e + 1 + r, e + 1 + r + o));
          return { consumed: 1 + r + o, result: u };
        }
        if (t[e] >= 128) {
          const r = t[e] - 128;
          e + 1 + r > t.length &&
            s.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {});
          const o = (0, n.hexlify)(t.slice(e + 1, e + 1 + r));
          return { consumed: 1 + r, result: o };
        }
        return { consumed: 1, result: (0, n.hexlify)(t[e]) };
      }
      function m(t) {
        const e = (0, n.arrayify)(t),
          r = c(e, 0);
        return (
          r.consumed !== e.length &&
            s.throwArgumentError("invalid rlp data", "data", t),
          r.result
        );
      }
    },
    1564: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "rlp/5.8.0";
    },
    1565: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "address/5.8.0";
    },
    1566: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Description = void 0),
        (e.checkProperties = l),
        (e.deepCopy = d),
        (e.defineReadOnly = u),
        (e.getStatic = h),
        (e.resolveProperties = a),
        (e.shallowCopy = f));
      var n = r(71),
        i = r(1567),
        o = function (t, e, r, n) {
          function i(t) {
            return t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function s(t) {
              try {
                h(n.next(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              try {
                h(n["throw"](t));
              } catch (e) {
                o(e);
              }
            }
            function h(t) {
              t.done ? r(t.value) : i(t.value).then(s, u);
            }
            h((n = n.apply(t, e || [])).next());
          });
        };
      const s = new n.Logger(i.version);
      function u(t, e, r) {
        Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 });
      }
      function h(t, e) {
        for (let r = 0; r < 32; r++) {
          if (t[e]) return t[e];
          if (!t.prototype || "object" !== typeof t.prototype) break;
          t = Object.getPrototypeOf(t.prototype).constructor;
        }
        return null;
      }
      function a(t) {
        return o(this, void 0, void 0, function* () {
          const e = Object.keys(t).map((e) => {
              const r = t[e];
              return Promise.resolve(r).then((t) => ({ key: e, value: t }));
            }),
            r = yield Promise.all(e);
          return r.reduce((t, e) => ((t[e.key] = e.value), t), {});
        });
      }
      function l(t, e) {
        ((t && "object" === typeof t) ||
          s.throwArgumentError("invalid object", "object", t),
          Object.keys(t).forEach((r) => {
            e[r] ||
              s.throwArgumentError(
                "invalid object key - " + r,
                "transaction:" + r,
                t,
              );
          }));
      }
      function f(t) {
        const e = {};
        for (const r in t) e[r] = t[r];
        return e;
      }
      const c = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function m(t) {
        if (void 0 === t || null === t || c[typeof t]) return !0;
        if (Array.isArray(t) || "object" === typeof t) {
          if (!Object.isFrozen(t)) return !1;
          const r = Object.keys(t);
          for (let n = 0; n < r.length; n++) {
            let i = null;
            try {
              i = t[r[n]];
            } catch (e) {
              continue;
            }
            if (!m(i)) return !1;
          }
          return !0;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function g(t) {
        if (m(t)) return t;
        if (Array.isArray(t)) return Object.freeze(t.map((t) => d(t)));
        if ("object" === typeof t) {
          const e = {};
          for (const r in t) {
            const n = t[r];
            void 0 !== n && u(e, r, d(n));
          }
          return e;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function d(t) {
        return g(t);
      }
      class Description {
        constructor(t) {
          for (const e in t) this[e] = d(t[e]);
        }
      }
      e.Description = Description;
    },
    1567: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "properties/5.8.0";
    },
    176: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "UnicodeNormalizationForm", {
          enumerable: !0,
          get: function () {
            return o.UnicodeNormalizationForm;
          },
        }),
        Object.defineProperty(e, "Utf8ErrorFuncs", {
          enumerable: !0,
          get: function () {
            return o.Utf8ErrorFuncs;
          },
        }),
        Object.defineProperty(e, "Utf8ErrorReason", {
          enumerable: !0,
          get: function () {
            return o.Utf8ErrorReason;
          },
        }),
        Object.defineProperty(e, "_toEscapedUtf8String", {
          enumerable: !0,
          get: function () {
            return o._toEscapedUtf8String;
          },
        }),
        Object.defineProperty(e, "formatBytes32String", {
          enumerable: !0,
          get: function () {
            return n.formatBytes32String;
          },
        }),
        Object.defineProperty(e, "nameprep", {
          enumerable: !0,
          get: function () {
            return i.nameprep;
          },
        }),
        Object.defineProperty(e, "parseBytes32String", {
          enumerable: !0,
          get: function () {
            return n.parseBytes32String;
          },
        }),
        Object.defineProperty(e, "toUtf8Bytes", {
          enumerable: !0,
          get: function () {
            return o.toUtf8Bytes;
          },
        }),
        Object.defineProperty(e, "toUtf8CodePoints", {
          enumerable: !0,
          get: function () {
            return o.toUtf8CodePoints;
          },
        }),
        Object.defineProperty(e, "toUtf8String", {
          enumerable: !0,
          get: function () {
            return o.toUtf8String;
          },
        }));
      var n = r(1544),
        i = r(1554),
        o = r(284);
    },
    283: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "BigNumber", {
          enumerable: !0,
          get: function () {
            return n.BigNumber;
          },
        }),
        Object.defineProperty(e, "FixedFormat", {
          enumerable: !0,
          get: function () {
            return i.FixedFormat;
          },
        }),
        Object.defineProperty(e, "FixedNumber", {
          enumerable: !0,
          get: function () {
            return i.FixedNumber;
          },
        }),
        Object.defineProperty(e, "_base16To36", {
          enumerable: !0,
          get: function () {
            return n._base16To36;
          },
        }),
        Object.defineProperty(e, "_base36To16", {
          enumerable: !0,
          get: function () {
            return n._base36To16;
          },
        }),
        Object.defineProperty(e, "formatFixed", {
          enumerable: !0,
          get: function () {
            return i.formatFixed;
          },
        }),
        Object.defineProperty(e, "parseFixed", {
          enumerable: !0,
          get: function () {
            return i.parseFixed;
          },
        }));
      var n = r(542),
        i = r(1550);
    },
    284: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Utf8ErrorReason =
          e.Utf8ErrorFuncs =
          e.UnicodeNormalizationForm =
            void 0),
        (e._toEscapedUtf8String = p),
        (e._toUtf8String = A),
        (e.toUtf8Bytes = g),
        (e.toUtf8CodePoints = w),
        (e.toUtf8String = v));
      var n = r(59),
        i = r(71),
        o = r(1553);
      const s = new i.Logger(o.version);
      var u, h;
      function a(t, e, r, n, i) {
        return s.throwArgumentError(
          `invalid codepoint at offset ${e}; ${t}`,
          "bytes",
          r,
        );
      }
      function l(t, e, r, n, i) {
        if (t === h.BAD_PREFIX || t === h.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let n = e + 1; n < r.length; n++) {
            if (r[n] >> 6 !== 2) break;
            t++;
          }
          return t;
        }
        return t === h.OVERRUN ? r.length - e - 1 : 0;
      }
      function f(t, e, r, n, i) {
        return t === h.OVERLONG
          ? (n.push(i), 0)
          : (n.push(65533), l(t, e, r, n, i));
      }
      ((function (t) {
        ((t["current"] = ""),
          (t["NFC"] = "NFC"),
          (t["NFD"] = "NFD"),
          (t["NFKC"] = "NFKC"),
          (t["NFKD"] = "NFKD"));
      })(u || (e.UnicodeNormalizationForm = u = {})),
        (function (t) {
          ((t["UNEXPECTED_CONTINUE"] = "unexpected continuation byte"),
            (t["BAD_PREFIX"] = "bad codepoint prefix"),
            (t["OVERRUN"] = "string overrun"),
            (t["MISSING_CONTINUE"] = "missing continuation byte"),
            (t["OUT_OF_RANGE"] = "out of UTF-8 range"),
            (t["UTF16_SURROGATE"] = "UTF-16 surrogate"),
            (t["OVERLONG"] = "overlong representation"));
        })(h || (e.Utf8ErrorReason = h = {})));
      const c = (e.Utf8ErrorFuncs = Object.freeze({
        error: a,
        ignore: l,
        replace: f,
      }));
      function m(t, e) {
        (null == e && (e = c.error), (t = (0, n.arrayify)(t)));
        const r = [];
        let i = 0;
        while (i < t.length) {
          const n = t[i++];
          if (n >> 7 === 0) {
            r.push(n);
            continue;
          }
          let o = null,
            s = null;
          if (192 === (224 & n)) ((o = 1), (s = 127));
          else if (224 === (240 & n)) ((o = 2), (s = 2047));
          else {
            if (240 !== (248 & n)) {
              i += e(
                128 === (192 & n) ? h.UNEXPECTED_CONTINUE : h.BAD_PREFIX,
                i - 1,
                t,
                r,
              );
              continue;
            }
            ((o = 3), (s = 65535));
          }
          if (i - 1 + o >= t.length) {
            i += e(h.OVERRUN, i - 1, t, r);
            continue;
          }
          let u = n & ((1 << (8 - o - 1)) - 1);
          for (let a = 0; a < o; a++) {
            let n = t[i];
            if (128 != (192 & n)) {
              ((i += e(h.MISSING_CONTINUE, i, t, r)), (u = null));
              break;
            }
            ((u = (u << 6) | (63 & n)), i++);
          }
          null !== u &&
            (u > 1114111
              ? (i += e(h.OUT_OF_RANGE, i - 1 - o, t, r, u))
              : u >= 55296 && u <= 57343
                ? (i += e(h.UTF16_SURROGATE, i - 1 - o, t, r, u))
                : u <= s
                  ? (i += e(h.OVERLONG, i - 1 - o, t, r, u))
                  : r.push(u));
        }
        return r;
      }
      function g(t, e) {
        (void 0 === e && (e = u.current),
          e != u.current && (s.checkNormalize(), (t = t.normalize(e))));
        let r = [];
        for (let n = 0; n < t.length; n++) {
          const e = t.charCodeAt(n);
          if (e < 128) r.push(e);
          else if (e < 2048) (r.push((e >> 6) | 192), r.push((63 & e) | 128));
          else if (55296 == (64512 & e)) {
            n++;
            const i = t.charCodeAt(n);
            if (n >= t.length || 56320 !== (64512 & i))
              throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & e) << 10) + (1023 & i);
            (r.push((o >> 18) | 240),
              r.push(((o >> 12) & 63) | 128),
              r.push(((o >> 6) & 63) | 128),
              r.push((63 & o) | 128));
          } else
            (r.push((e >> 12) | 224),
              r.push(((e >> 6) & 63) | 128),
              r.push((63 & e) | 128));
        }
        return (0, n.arrayify)(r);
      }
      function d(t) {
        const e = "0000" + t.toString(16);
        return "\\u" + e.substring(e.length - 4);
      }
      function p(t, e) {
        return (
          '"' +
          m(t, e)
            .map((t) => {
              if (t < 256) {
                switch (t) {
                  case 8:
                    return "\\b";
                  case 9:
                    return "\\t";
                  case 10:
                    return "\\n";
                  case 13:
                    return "\\r";
                  case 34:
                    return '\\"';
                  case 92:
                    return "\\\\";
                }
                if (t >= 32 && t < 127) return String.fromCharCode(t);
              }
              return t <= 65535
                ? d(t)
                : ((t -= 65536),
                  d(55296 + ((t >> 10) & 1023)) + d(56320 + (1023 & t)));
            })
            .join("") +
          '"'
        );
      }
      function A(t) {
        return t
          .map((t) =>
            t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536),
                String.fromCharCode(
                  55296 + ((t >> 10) & 1023),
                  56320 + (1023 & t),
                )),
          )
          .join("");
      }
      function v(t, e) {
        return A(m(t, e));
      }
      function w(t, e) {
        return (void 0 === e && (e = u.current), m(g(t, e)));
      }
    },
    541: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.id = o));
      var n = r(147),
        i = r(176);
      function o(t) {
        return (0, n.keccak256)((0, i.toUtf8Bytes)(t));
      }
    },
    542: function (t, e, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BigNumber = void 0),
        (e._base16To36 = w),
        (e._base36To16 = v),
        (e.isBigNumberish = c));
      var i = n(r(1548)),
        o = r(59),
        s = r(71),
        u = r(543),
        h = i.default.BN;
      const a = new s.Logger(u.version),
        l = {},
        f = 9007199254740991;
      function c(t) {
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
        constructor(t, e) {
          (t !== l &&
            a.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" },
            ),
            (this._hex = e),
            (this._isBigNumber = !0),
            Object.freeze(this));
        }
        fromTwos(t) {
          return d(p(this).fromTwos(t));
        }
        toTwos(t) {
          return d(p(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0]
            ? BigNumber.from(this._hex.substring(1))
            : this;
        }
        add(t) {
          return d(p(this).add(p(t)));
        }
        sub(t) {
          return d(p(this).sub(p(t)));
        }
        div(t) {
          const e = BigNumber.from(t);
          return (
            e.isZero() && A("division-by-zero", "div"),
            d(p(this).div(p(t)))
          );
        }
        mul(t) {
          return d(p(this).mul(p(t)));
        }
        mod(t) {
          const e = p(t);
          return (
            e.isNeg() && A("division-by-zero", "mod"),
            d(p(this).umod(e))
          );
        }
        pow(t) {
          const e = p(t);
          return (e.isNeg() && A("negative-power", "pow"), d(p(this).pow(e)));
        }
        and(t) {
          const e = p(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              A("unbound-bitwise-result", "and"),
            d(p(this).and(e))
          );
        }
        or(t) {
          const e = p(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              A("unbound-bitwise-result", "or"),
            d(p(this).or(e))
          );
        }
        xor(t) {
          const e = p(t);
          return (
            (this.isNegative() || e.isNeg()) &&
              A("unbound-bitwise-result", "xor"),
            d(p(this).xor(e))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && A("negative-width", "mask"),
            d(p(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && A("negative-width", "shl"),
            d(p(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && A("negative-width", "shr"),
            d(p(this).shrn(t))
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
            A("overflow", "toNumber", this.toString());
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
              ? new BigNumber(l, g(t))
              : t.match(/^-?[0-9]+$/)
                ? new BigNumber(l, g(new h(t)))
                : a.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" === typeof t)
            return (
              t % 1 && A("underflow", "BigNumber.from", t),
              (t >= f || t <= -f) && A("overflow", "BigNumber.from", t),
              BigNumber.from(String(t))
            );
          const e = t;
          if ("bigint" === typeof e) return BigNumber.from(e.toString());
          if ((0, o.isBytes)(e)) return BigNumber.from((0, o.hexlify)(e));
          if (e)
            if (e.toHexString) {
              const t = e.toHexString();
              if ("string" === typeof t) return BigNumber.from(t);
            } else {
              let t = e._hex;
              if (
                (null == t && "BigNumber" === e.type && (t = e.hex),
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
      function g(t) {
        if ("string" !== typeof t) return g(t.toString(16));
        if ("-" === t[0])
          return (
            (t = t.substring(1)),
            "-" === t[0] && a.throwArgumentError("invalid hex", "value", t),
            (t = g(t)),
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
        return BigNumber.from(g(t));
      }
      function p(t) {
        const e = BigNumber.from(t).toHexString();
        return "-" === e[0]
          ? new h("-" + e.substring(3), 16)
          : new h(e.substring(2), 16);
      }
      function A(t, e, r) {
        const n = { fault: t, operation: e };
        return (
          null != r && (n.value = r),
          a.throwError(t, s.Logger.errors.NUMERIC_FAULT, n)
        );
      }
      function v(t) {
        return new h(t, 36).toString(16);
      }
      function w(t) {
        return new h(t, 16).toString(36);
      }
      e.BigNumber = BigNumber;
    },
    543: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "bignumber/5.8.0";
    },
    544: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "hash/5.7.0";
    },
    545: function (t, e, r) {
      "use strict";
      function n(t, e) {
        null == e && (e = 1);
        const r = [],
          n = r.forEach,
          i = function (t, e) {
            n.call(t, function (t) {
              e > 0 && Array.isArray(t) ? i(t, e - 1) : r.push(t);
            });
          };
        return (i(t, e), r);
      }
      function i(t) {
        const e = {};
        for (let r = 0; r < t.length; r++) {
          const n = t[r];
          e[n[0]] = n[1];
        }
        return e;
      }
      function o(t) {
        let e = 0;
        function r() {
          return (t[e++] << 8) | t[e++];
        }
        let n = r(),
          i = 1,
          o = [0, 1];
        for (let M = 1; M < n; M++) o.push((i += r()));
        let s = r(),
          u = e;
        e += s;
        let h = 0,
          a = 0;
        function l() {
          return (0 == h && ((a = (a << 8) | t[e++]), (h = 8)), (a >> --h) & 1);
        }
        const f = 31,
          c = Math.pow(2, f),
          m = c >>> 1,
          g = m >> 1,
          d = c - 1;
        let p = 0;
        for (let M = 0; M < f; M++) p = (p << 1) | l();
        let A = [],
          v = 0,
          w = c;
        while (1) {
          let t = Math.floor(((p - v + 1) * i - 1) / w),
            e = 0,
            r = n;
          while (r - e > 1) {
            let n = (e + r) >>> 1;
            t < o[n] ? (r = n) : (e = n);
          }
          if (0 == e) break;
          A.push(e);
          let s = v + Math.floor((w * o[e]) / i),
            u = v + Math.floor((w * o[e + 1]) / i) - 1;
          while (0 == ((s ^ u) & m))
            ((p = ((p << 1) & d) | l()),
              (s = (s << 1) & d),
              (u = ((u << 1) & d) | 1));
          while (s & ~u & g)
            ((p = (p & m) | ((p << 1) & (d >>> 1)) | l()),
              (s = (s << 1) ^ m),
              (u = ((u ^ m) << 1) | m | 1));
          ((v = s), (w = 1 + u - s));
        }
        let y = n - 4;
        return A.map((e) => {
          switch (e - y) {
            case 3:
              return y + 65792 + ((t[u++] << 16) | (t[u++] << 8) | t[u++]);
            case 2:
              return y + 256 + ((t[u++] << 8) | t[u++]);
            case 1:
              return y + t[u++];
            default:
              return e - 1;
          }
        });
      }
      function s(t) {
        let e = 0;
        return () => t[e++];
      }
      function u(t) {
        return s(o(t));
      }
      function h(t) {
        return 1 & t ? ~t >> 1 : t >> 1;
      }
      function a(t, e) {
        let r = Array(t);
        for (let n = 0; n < t; n++) r[n] = 1 + e();
        return r;
      }
      function l(t, e) {
        let r = Array(t);
        for (let n = 0, i = -1; n < t; n++) r[n] = i += 1 + e();
        return r;
      }
      function f(t, e) {
        let r = Array(t);
        for (let n = 0, i = 0; n < t; n++) r[n] = i += h(e());
        return r;
      }
      function c(t, e) {
        let r = l(t(), t),
          n = t(),
          i = l(n, t),
          o = a(n, t);
        for (let s = 0; s < n; s++)
          for (let t = 0; t < o[s]; t++) r.push(i[s] + t);
        return e ? r.map((t) => e[t]) : r;
      }
      function m(t) {
        let e = [];
        while (1) {
          let r = t();
          if (0 == r) break;
          e.push(p(r, t));
        }
        while (1) {
          let r = t() - 1;
          if (r < 0) break;
          e.push(A(r, t));
        }
        return i(n(e));
      }
      function g(t) {
        let e = [];
        while (1) {
          let r = t();
          if (0 == r) break;
          e.push(r);
        }
        return e;
      }
      function d(t, e, r) {
        let n = Array(t)
          .fill(void 0)
          .map(() => []);
        for (let i = 0; i < e; i++) f(t, r).forEach((t, e) => n[e].push(t));
        return n;
      }
      function p(t, e) {
        let r = 1 + e(),
          i = e(),
          o = g(e),
          s = d(o.length, 1 + t, e);
        return n(
          s.map((t, e) => {
            const n = t[0],
              s = t.slice(1);
            return Array(o[e])
              .fill(void 0)
              .map((t, e) => {
                let o = e * i;
                return [n + e * r, s.map((t) => t + o)];
              });
          }),
        );
      }
      function A(t, e) {
        let r = 1 + e(),
          n = d(r, 1 + t, e);
        return n.map((t) => [t[0], t.slice(1)]);
      }
      function v(t) {
        let e = c(t).sort((t, e) => t - e);
        return r();
        function r() {
          let n = [];
          while (1) {
            let i = c(t, e);
            if (0 == i.length) break;
            n.push({ set: new Set(i), node: r() });
          }
          n.sort((t, e) => e.set.size - t.set.size);
          let i = t(),
            o = i % 3;
          i = (i / 3) | 0;
          let s = !!(1 & i);
          i >>= 1;
          let u = 1 == i,
            h = 2 == i;
          return { branches: n, valid: o, fe0f: s, save: u, check: h };
        }
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.decode_arithmetic = o),
        (e.read_compressed_payload = u),
        (e.read_emoji_trie = v),
        (e.read_mapped_map = m),
        (e.read_member_array = c),
        (e.read_payload = s),
        (e.read_zero_terminated_array = g),
        (e.signed = h));
    },
    59: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.arrayify = f),
        (e.concat = c),
        (e.hexConcat = y),
        (e.hexDataLength = v),
        (e.hexDataSlice = w),
        (e.hexStripZeros = b),
        (e.hexValue = M),
        (e.hexZeroPad = E),
        (e.hexlify = A),
        (e.isBytes = l),
        (e.isBytesLike = h),
        (e.isHexString = d),
        (e.joinSignature = N),
        (e.splitSignature = B),
        (e.stripZeros = m),
        (e.zeroPad = g));
      var n = r(71),
        i = r(1543);
      const o = new n.Logger(i.version);
      function s(t) {
        return !!t.toHexString;
      }
      function u(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const e = Array.prototype.slice.call(arguments);
              return u(new Uint8Array(Array.prototype.slice.apply(t, e)));
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
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (!a(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function f(t, e) {
        if ((e || (e = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid arrayify value");
          const e = [];
          while (t) (e.unshift(255 & t), (t = parseInt(String(t / 256))));
          return (0 === e.length && e.push(0), u(new Uint8Array(e)));
        }
        if (
          (e.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t) && (t = t.toHexString()),
          d(t))
        ) {
          let r = t.substring(2);
          r.length % 2 &&
            ("left" === e.hexPad
              ? (r = "0" + r)
              : "right" === e.hexPad
                ? (r += "0")
                : o.throwArgumentError("hex data is odd-length", "value", t));
          const n = [];
          for (let t = 0; t < r.length; t += 2)
            n.push(parseInt(r.substring(t, t + 2), 16));
          return u(new Uint8Array(n));
        }
        return l(t)
          ? u(new Uint8Array(t))
          : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function c(t) {
        const e = t.map((t) => f(t)),
          r = e.reduce((t, e) => t + e.length, 0),
          n = new Uint8Array(r);
        return (e.reduce((t, e) => (n.set(e, t), t + e.length), 0), u(n));
      }
      function m(t) {
        let e = f(t);
        if (0 === e.length) return e;
        let r = 0;
        while (r < e.length && 0 === e[r]) r++;
        return (r && (e = e.slice(r)), e);
      }
      function g(t, e) {
        ((t = f(t)),
          t.length > e &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const r = new Uint8Array(e);
        return (r.set(t, e - t.length), u(r));
      }
      function d(t, e) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || t.length === 2 + 2 * e)
        );
      }
      const p = "0123456789abcdef";
      function A(t, e) {
        if ((e || (e = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid hexlify value");
          let e = "";
          while (t) ((e = p[15 & t] + e), (t = Math.floor(t / 16)));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" === typeof t)
          return ((t = t.toString(16)), t.length % 2 ? "0x0" + t : "0x" + t);
        if (
          (e.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t))
        )
          return t.toHexString();
        if (d(t))
          return (
            t.length % 2 &&
              ("left" === e.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === e.hexPad
                  ? (t += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (l(t)) {
          let e = "0x";
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            e += p[(240 & n) >> 4] + p[15 & n];
          }
          return e;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function v(t) {
        if ("string" !== typeof t) t = A(t);
        else if (!d(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function w(t, e, r) {
        return (
          "string" !== typeof t
            ? (t = A(t))
            : (!d(t) || t.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", t),
          (e = 2 + 2 * e),
          null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
        );
      }
      function y(t) {
        let e = "0x";
        return (
          t.forEach((t) => {
            e += A(t).substring(2);
          }),
          e
        );
      }
      function M(t) {
        const e = b(A(t, { hexPad: "left" }));
        return "0x" === e ? "0x0" : e;
      }
      function b(t) {
        ("string" !== typeof t && (t = A(t)),
          d(t) || o.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2)));
        let e = 0;
        while (e < t.length && "0" === t[e]) e++;
        return "0x" + t.substring(e);
      }
      function E(t, e) {
        ("string" !== typeof t
          ? (t = A(t))
          : d(t) || o.throwArgumentError("invalid hex string", "value", t),
          t.length > 2 * e + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (t.length < 2 * e + 2) t = "0x0" + t.substring(2);
        return t;
      }
      function B(t) {
        const e = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (h(t)) {
          let r = f(t);
          (64 === r.length
            ? ((e.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (e.r = A(r.slice(0, 32))),
              (e.s = A(r.slice(32, 64))))
            : 65 === r.length
              ? ((e.r = A(r.slice(0, 32))),
                (e.s = A(r.slice(32, 64))),
                (e.v = r[64]))
              : o.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  t,
                ),
            e.v < 27 &&
              (0 === e.v || 1 === e.v
                ? (e.v += 27)
                : o.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t,
                  )),
            (e.recoveryParam = 1 - (e.v % 2)),
            e.recoveryParam && (r[32] |= 128),
            (e._vs = A(r.slice(32, 64))));
        } else {
          if (
            ((e.r = t.r),
            (e.s = t.s),
            (e.v = t.v),
            (e.recoveryParam = t.recoveryParam),
            (e._vs = t._vs),
            null != e._vs)
          ) {
            const r = g(f(e._vs), 32);
            e._vs = A(r);
            const n = r[0] >= 128 ? 1 : 0;
            (null == e.recoveryParam
              ? (e.recoveryParam = n)
              : e.recoveryParam !== n &&
                o.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t,
                ),
              (r[0] &= 127));
            const i = A(r);
            null == e.s
              ? (e.s = i)
              : e.s !== i &&
                o.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t,
                );
          }
          if (null == e.recoveryParam)
            null == e.v
              ? o.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t,
                )
              : 0 === e.v || 1 === e.v
                ? (e.recoveryParam = e.v)
                : (e.recoveryParam = 1 - (e.v % 2));
          else if (null == e.v) e.v = 27 + e.recoveryParam;
          else {
            const r = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2);
            e.recoveryParam !== r &&
              o.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t,
              );
          }
          (null != e.r && d(e.r)
            ? (e.r = E(e.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t,
              ),
            null != e.s && d(e.s)
              ? (e.s = E(e.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t,
                ));
          const r = f(e.s);
          (r[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", t),
            e.recoveryParam && (r[0] |= 128));
          const n = A(r);
          (e._vs &&
            (d(e._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", t),
            (e._vs = E(e._vs, 32))),
            null == e._vs
              ? (e._vs = n)
              : e._vs !== n &&
                o.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t,
                ));
        }
        return (
          (e.yParityAndS = e._vs),
          (e.compact = e.r + e.yParityAndS.substring(2)),
          e
        );
      }
      function N(t) {
        return (
          (t = B(t)),
          A(c([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    71: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Logger = e.LogLevel = e.ErrorCode = void 0));
      var n = r(1542);
      let i = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let u = s["default"],
        h = null;
      function a() {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (r) {
                t.push(e);
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
      var f, c;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(f || (e.LogLevel = f = {})),
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
        })(c || (e.ErrorCode = c = {})));
      const m = "0123456789abcdef";
      class Logger {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, e) {
          const r = t.toLowerCase();
          (null == s[r] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            u > s[r] || console.log.apply(console, e));
        }
        debug() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.DEBUG, e);
        }
        info() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.INFO, e);
        }
        warn() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.WARNING, e);
        }
        makeError(t, e, r) {
          if (o) return this.makeError("censored error", e, {});
          (e || (e = Logger.errors.UNKNOWN_ERROR), r || (r = {}));
          const n = [];
          (Object.keys(r).forEach((t) => {
            const e = r[t];
            try {
              if (e instanceof Uint8Array) {
                let r = "";
                for (let t = 0; t < e.length; t++)
                  ((r += m[e[t] >> 4]), (r += m[15 & e[t]]));
                n.push(t + "=Uint8Array(0x" + r + ")");
              } else n.push(t + "=" + JSON.stringify(e));
            } catch (u) {
              n.push(t + "=" + JSON.stringify(r[t].toString()));
            }
          }),
            n.push("code=" + e),
            n.push("version=" + this.version));
          const i = t;
          let s = "";
          switch (e) {
            case c.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const e = t;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + e;
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
            case c.CALL_EXCEPTION:
            case c.INSUFFICIENT_FUNDS:
            case c.MISSING_NEW:
            case c.NONCE_EXPIRED:
            case c.REPLACEMENT_UNDERPRICED:
            case c.TRANSACTION_REPLACED:
            case c.UNPREDICTABLE_GAS_LIMIT:
              s = e;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (t += " (" + n.join(", ") + ")"));
          const u = new Error(t);
          return (
            (u.reason = i),
            (u.code = e),
            Object.keys(r).forEach(function (t) {
              u[t] = r[t];
            }),
            u
          );
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
            argument: e,
            value: r,
          });
        }
        assert(t, e, r, n) {
          t || this.throwError(e, r, n);
        }
        assertArgument(t, e, r, n) {
          t || this.throwArgumentError(e, r, n);
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
        checkSafeUint53(t, e) {
          "number" === typeof t &&
            (null == e && (e = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(e, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(e, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, e, r) {
          ((r = r ? ": " + r : ""),
            t < e &&
              this.throwError(
                "missing argument" + r,
                Logger.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: e },
              ),
            t > e &&
              this.throwError(
                "too many arguments" + r,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: e },
              ));
        }
        checkNew(t, e) {
          (t !== Object && null != t) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" },
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return (h || (h = new Logger(n.version)), h);
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            i)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((o = !!t), (i = !!e));
        }
        static setLogLevel(t) {
          const e = s[t.toLowerCase()];
          null != e
            ? (u = e)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((e.Logger = Logger), (Logger.errors = c), (Logger.levels = f));
    },
  },
]);
