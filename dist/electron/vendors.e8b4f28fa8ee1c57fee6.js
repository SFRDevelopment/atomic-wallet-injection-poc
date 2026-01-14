(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [113],
  {
    118: function (t, e, r) {
      "use strict";
      (function (t) {
        function r(t) {
          if ("string" !== typeof t)
            throw new Error(
              "[isHexPrefixed] input must be type 'string', received type ".concat(
                typeof t,
              ),
            );
          return "0" === t[0] && "x" === t[1];
        }
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.isHexString =
            e.getKeys =
            e.fromAscii =
            e.fromUtf8 =
            e.toAscii =
            e.arrayContainsArray =
            e.getBinarySize =
            e.padToEven =
            e.stripHexPrefix =
            e.isHexPrefixed =
              void 0),
          (e.isHexPrefixed = r));
        var i = function (t) {
          if ("string" !== typeof t)
            throw new Error(
              "[stripHexPrefix] input must be type 'string', received ".concat(
                typeof t,
              ),
            );
          return r(t) ? t.slice(2) : t;
        };
        function n(t) {
          var e = t;
          if ("string" !== typeof e)
            throw new Error(
              "[padToEven] value must be type 'string', received ".concat(
                typeof e,
              ),
            );
          return (e.length % 2 && (e = "0".concat(e)), e);
        }
        function o(e) {
          if ("string" !== typeof e)
            throw new Error(
              "[getBinarySize] method requires input type 'string', recieved ".concat(
                typeof e,
              ),
            );
          return t.byteLength(e, "utf8");
        }
        function s(t, e, r) {
          if (!0 !== Array.isArray(t))
            throw new Error(
              "[arrayContainsArray] method requires input 'superset' to be an array, got type '".concat(
                typeof t,
                "'",
              ),
            );
          if (!0 !== Array.isArray(e))
            throw new Error(
              "[arrayContainsArray] method requires input 'subset' to be an array, got type '".concat(
                typeof e,
                "'",
              ),
            );
          return e[r ? "some" : "every"](function (e) {
            return t.indexOf(e) >= 0;
          });
        }
        function h(t) {
          var e = "",
            r = 0,
            i = t.length;
          for ("0x" === t.substring(0, 2) && (r = 2); r < i; r += 2) {
            var n = parseInt(t.substr(r, 2), 16);
            e += String.fromCharCode(n);
          }
          return e;
        }
        function u(e) {
          var r = t.from(e, "utf8");
          return "0x".concat(n(r.toString("hex")).replace(/^0+|0+$/g, ""));
        }
        function a(t) {
          for (var e = "", r = 0; r < t.length; r++) {
            var i = t.charCodeAt(r),
              n = i.toString(16);
            e += n.length < 2 ? "0".concat(n) : n;
          }
          return "0x".concat(e);
        }
        function l(t, e, r) {
          if (!Array.isArray(t))
            throw new Error(
              "[getKeys] method expects input 'params' to be an array, got ".concat(
                typeof t,
              ),
            );
          if ("string" !== typeof e)
            throw new Error(
              "[getKeys] method expects input 'key' to be type 'string', got ".concat(
                typeof t,
              ),
            );
          for (var i = [], n = 0; n < t.length; n++) {
            var o = t[n][e];
            if (r && !o) o = "";
            else if ("string" !== typeof o)
              throw new Error(
                "invalid abi - expected type 'string', received ".concat(
                  typeof o,
                ),
              );
            i.push(o);
          }
          return i;
        }
        function f(t, e) {
          return (
            !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
            (!e || t.length === 2 + 2 * e)
          );
        }
        ((e.stripHexPrefix = i),
          (e.padToEven = n),
          (e.getBinarySize = o),
          (e.arrayContainsArray = s),
          (e.toAscii = h),
          (e.fromUtf8 = u),
          (e.fromAscii = a),
          (e.getKeys = l),
          (e.isHexString = f));
      }).call(this, r(2).Buffer);
    },
    1254: function (t, e) {
      try {
        t.exports =
          "undefined" !== typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (r) {
        t.exports = !1;
      }
    },
    1257: function (t, e) {
      var r = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == r.call(t);
        };
    },
    1323: function (t, e, r) {
      "use strict";
      ((e.sha1 = r(1324)),
        (e.sha224 = r(1325)),
        (e.sha256 = r(394)),
        (e.sha384 = r(1326)),
        (e.sha512 = r(487)));
    },
    1324: function (t, e, r) {
      "use strict";
      var i = r(64),
        n = r(138),
        o = r(486),
        s = i.rotl32,
        h = i.sum32,
        u = i.sum32_5,
        a = o.ft_1,
        l = n.BlockHash,
        f = [1518500249, 1859775393, 2400959708, 3395469782];
      function c() {
        if (!(this instanceof c)) return new c();
        (l.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.W = new Array(80)));
      }
      (i.inherits(c, l),
        (t.exports = c),
        (c.blockSize = 512),
        (c.outSize = 160),
        (c.hmacStrength = 80),
        (c.padLength = 64),
        (c.prototype._update = function (t, e) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
          for (; i < r.length; i++)
            r[i] = s(r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16], 1);
          var n = this.h[0],
            o = this.h[1],
            l = this.h[2],
            c = this.h[3],
            p = this.h[4];
          for (i = 0; i < r.length; i++) {
            var d = ~~(i / 20),
              m = u(s(n, 5), a(d, o, l, c), p, r[i], f[d]);
            ((p = c), (c = l), (l = s(o, 30)), (o = n), (n = m));
          }
          ((this.h[0] = h(this.h[0], n)),
            (this.h[1] = h(this.h[1], o)),
            (this.h[2] = h(this.h[2], l)),
            (this.h[3] = h(this.h[3], c)),
            (this.h[4] = h(this.h[4], p)));
        }),
        (c.prototype._digest = function (t) {
          return "hex" === t
            ? i.toHex32(this.h, "big")
            : i.split32(this.h, "big");
        }));
    },
    1325: function (t, e, r) {
      "use strict";
      var i = r(64),
        n = r(394);
      function o() {
        if (!(this instanceof o)) return new o();
        (n.call(this),
          (this.h = [
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ]));
      }
      (i.inherits(o, n),
        (t.exports = o),
        (o.blockSize = 512),
        (o.outSize = 224),
        (o.hmacStrength = 192),
        (o.padLength = 64),
        (o.prototype._digest = function (t) {
          return "hex" === t
            ? i.toHex32(this.h.slice(0, 7), "big")
            : i.split32(this.h.slice(0, 7), "big");
        }));
    },
    1326: function (t, e, r) {
      "use strict";
      var i = r(64),
        n = r(487);
      function o() {
        if (!(this instanceof o)) return new o();
        (n.call(this),
          (this.h = [
            3418070365, 3238371032, 1654270250, 914150663, 2438529370,
            812702999, 355462360, 4144912697, 1731405415, 4290775857,
            2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
            3204075428,
          ]));
      }
      (i.inherits(o, n),
        (t.exports = o),
        (o.blockSize = 1024),
        (o.outSize = 384),
        (o.hmacStrength = 192),
        (o.padLength = 128),
        (o.prototype._digest = function (t) {
          return "hex" === t
            ? i.toHex32(this.h.slice(0, 12), "big")
            : i.split32(this.h.slice(0, 12), "big");
        }));
    },
    1327: function (t, e, r) {
      "use strict";
      var i = r(64),
        n = r(83);
      function o(t, e, r) {
        if (!(this instanceof o)) return new o(t, e, r);
        ((this.Hash = t),
          (this.blockSize = t.blockSize / 8),
          (this.outSize = t.outSize / 8),
          (this.inner = null),
          (this.outer = null),
          this._init(i.toArray(e, r)));
      }
      ((t.exports = o),
        (o.prototype._init = function (t) {
          (t.length > this.blockSize &&
            (t = new this.Hash().update(t).digest()),
            n(t.length <= this.blockSize));
          for (var e = t.length; e < this.blockSize; e++) t.push(0);
          for (e = 0; e < t.length; e++) t[e] ^= 54;
          for (this.inner = new this.Hash().update(t), e = 0; e < t.length; e++)
            t[e] ^= 106;
          this.outer = new this.Hash().update(t);
        }),
        (o.prototype.update = function (t, e) {
          return (this.inner.update(t, e), this);
        }),
        (o.prototype.digest = function (t) {
          return (this.outer.update(this.inner.digest()), this.outer.digest(t));
        }));
    },
    138: function (t, e, r) {
      "use strict";
      var i = r(64),
        n = r(83);
      function o() {
        ((this.pending = null),
          (this.pendingTotal = 0),
          (this.blockSize = this.constructor.blockSize),
          (this.outSize = this.constructor.outSize),
          (this.hmacStrength = this.constructor.hmacStrength),
          (this.padLength = this.constructor.padLength / 8),
          (this.endian = "big"),
          (this._delta8 = this.blockSize / 8),
          (this._delta32 = this.blockSize / 32));
      }
      ((e.BlockHash = o),
        (o.prototype.update = function (t, e) {
          if (
            ((t = i.toArray(t, e)),
            this.pending
              ? (this.pending = this.pending.concat(t))
              : (this.pending = t),
            (this.pendingTotal += t.length),
            this.pending.length >= this._delta8)
          ) {
            t = this.pending;
            var r = t.length % this._delta8;
            ((this.pending = t.slice(t.length - r, t.length)),
              0 === this.pending.length && (this.pending = null),
              (t = i.join32(t, 0, t.length - r, this.endian)));
            for (var n = 0; n < t.length; n += this._delta32)
              this._update(t, n, n + this._delta32);
          }
          return this;
        }),
        (o.prototype.digest = function (t) {
          return (
            this.update(this._pad()),
            n(null === this.pending),
            this._digest(t)
          );
        }),
        (o.prototype._pad = function () {
          var t = this.pendingTotal,
            e = this._delta8,
            r = e - ((t + this.padLength) % e),
            i = new Array(r + this.padLength);
          i[0] = 128;
          for (var n = 1; n < r; n++) i[n] = 0;
          if (((t <<= 3), "big" === this.endian)) {
            for (var o = 8; o < this.padLength; o++) i[n++] = 0;
            ((i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = 0),
              (i[n++] = (t >>> 24) & 255),
              (i[n++] = (t >>> 16) & 255),
              (i[n++] = (t >>> 8) & 255),
              (i[n++] = 255 & t));
          } else
            for (
              i[n++] = 255 & t,
                i[n++] = (t >>> 8) & 255,
                i[n++] = (t >>> 16) & 255,
                i[n++] = (t >>> 24) & 255,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                i[n++] = 0,
                o = 8;
              o < this.padLength;
              o++
            )
              i[n++] = 0;
          return i;
        }));
    },
    162: function (t, e, r) {
      "use strict";
      var i = r(1908);
      t.exports = Function.prototype.bind || i;
    },
    1879: function (t, e, r) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function i(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function n(t, e) {
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
            s = r(2).Buffer;
          } catch (E) {}
          function h(t, e, r) {
            for (var i = 0, n = Math.min(t.length, r), o = e; o < n; o++) {
              var s = t.charCodeAt(o) - 48;
              ((i <<= 4),
                (i |=
                  s >= 49 && s <= 54
                    ? s - 49 + 10
                    : s >= 17 && s <= 22
                      ? s - 17 + 10
                      : 15 & s));
            }
            return i;
          }
          function u(t, e, r, i) {
            for (var n = 0, o = Math.min(t.length, r), s = e; s < o; s++) {
              var h = t.charCodeAt(s) - 48;
              ((n *= i),
                (n += h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h));
            }
            return n;
          }
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
                i(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var n = 0;
              ("-" === t[0] && n++,
                16 === e ? this._parseHex(t, n) : this._parseBase(t, e, n),
                "-" === t[0] && (this.negative = 1),
                this.strip(),
                "le" === r && this._initArray(this.toArray(), e, r));
            }),
            (o.prototype._initNumber = function (t, e, r) {
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
                "le" === r && this._initArray(this.toArray(), e, r));
            }),
            (o.prototype._initArray = function (t, e, r) {
              if ((i("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var o,
                s,
                h = 0;
              if ("be" === r)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                  ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[o] |= (s << h) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - h)) & 67108863),
                    (h += 24),
                    h >= 26 && ((h -= 26), o++));
              else if ("le" === r)
                for (n = 0, o = 0; n < t.length; n += 3)
                  ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[o] |= (s << h) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - h)) & 67108863),
                    (h += 24),
                    h >= 26 && ((h -= 26), o++));
              return this.strip();
            }),
            (o.prototype._parseHex = function (t, e) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var i,
                n,
                o = 0;
              for (r = t.length - 6, i = 0; r >= e; r -= 6)
                ((n = h(t, r, r + 6)),
                  (this.words[i] |= (n << o) & 67108863),
                  (this.words[i + 1] |= (n >>> (26 - o)) & 4194303),
                  (o += 24),
                  o >= 26 && ((o -= 26), i++));
              (r + 6 !== e &&
                ((n = h(t, e, r + 6)),
                (this.words[i] |= (n << o) & 67108863),
                (this.words[i + 1] |= (n >>> (26 - o)) & 4194303)),
                this.strip());
            }),
            (o.prototype._parseBase = function (t, e, r) {
              ((this.words = [0]), (this.length = 1));
              for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
              (i--, (n = (n / e) | 0));
              for (
                var o = t.length - r,
                  s = o % i,
                  h = Math.min(o, o - s) + r,
                  a = 0,
                  l = r;
                l < h;
                l += i
              )
                ((a = u(t, l, l + i, e)),
                  this.imuln(n),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a));
              if (0 !== s) {
                var f = 1;
                for (a = u(t, l, t.length, e), l = 0; l < s; l++) f *= e;
                (this.imuln(f),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a));
              }
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (o.prototype.clone = function () {
              var t = new o(null);
              return (this.copy(t), t);
            }),
            (o.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype.strip = function () {
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
            (o.prototype.inspect = function () {
              return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            }));
          var a = [
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
            l = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            f = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          function c(t) {
            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
              var i = (r / 26) | 0,
                n = r % 26;
              e[r] = (t.words[i] & (1 << n)) >>> n;
            }
            return e;
          }
          function p(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var i = (t.length + e.length) | 0;
            ((r.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | e.words[0],
              s = n * o,
              h = 67108863 & s,
              u = (s / 67108864) | 0;
            r.words[0] = h;
            for (var a = 1; a < i; a++) {
              for (
                var l = u >>> 26,
                  f = 67108863 & u,
                  c = Math.min(a, e.length - 1),
                  p = Math.max(0, a - t.length + 1);
                p <= c;
                p++
              ) {
                var d = (a - p) | 0;
                ((n = 0 | t.words[d]),
                  (o = 0 | e.words[p]),
                  (s = n * o + f),
                  (l += (s / 67108864) | 0),
                  (f = 67108863 & s));
              }
              ((r.words[a] = 0 | f), (u = 0 | l));
            }
            return (0 !== u ? (r.words[a] = 0 | u) : r.length--, r.strip());
          }
          ((o.prototype.toString = function (t, e) {
            var r;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              r = "";
              for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var h = this.words[s],
                  u = (16777215 & ((h << n) | o)).toString(16);
                ((o = (h >>> (24 - n)) & 16777215),
                  (r =
                    0 !== o || s !== this.length - 1
                      ? a[6 - u.length] + u + r
                      : u + r),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--));
              }
              0 !== o && (r = o.toString(16) + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var c = l[t],
                p = f[t];
              r = "";
              var d = this.clone();
              d.negative = 0;
              while (!d.isZero()) {
                var m = d.modn(p).toString(t);
                ((d = d.idivn(p)),
                  (r = d.isZero() ? m + r : a[c - m.length] + m + r));
              }
              this.isZero() && (r = "0" + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
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
              return this.toString(16);
            }),
            (o.prototype.toBuffer = function (t, e) {
              return (i("undefined" !== typeof s), this.toArrayLike(s, t, e));
            }),
            (o.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }),
            (o.prototype.toArrayLike = function (t, e, r) {
              var n = this.byteLength(),
                o = r || Math.max(1, n);
              (i(n <= o, "byte array longer than desired length"),
                i(o > 0, "Requested array length <= 0"),
                this.strip());
              var s,
                h,
                u = "le" === e,
                a = new t(o),
                l = this.clone();
              if (u) {
                for (h = 0; !l.isZero(); h++)
                  ((s = l.andln(255)), l.iushrn(8), (a[h] = s));
                for (; h < o; h++) a[h] = 0;
              } else {
                for (h = 0; h < o - n; h++) a[h] = 0;
                for (h = 0; !l.isZero(); h++)
                  ((s = l.andln(255)), l.iushrn(8), (a[o - h - 1] = s));
              }
              return a;
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
              return this.strip();
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
              var e;
              e = this.length > t.length ? t : this;
              for (var r = 0; r < e.length; r++)
                this.words[r] = this.words[r] & t.words[r];
              return ((this.length = e.length), this.strip());
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
              var e, r;
              this.length > t.length
                ? ((e = this), (r = t))
                : ((e = t), (r = this));
              for (var i = 0; i < r.length; i++)
                this.words[i] = e.words[i] ^ r.words[i];
              if (this !== e)
                for (; i < e.length; i++) this.words[i] = e.words[i];
              return ((this.length = e.length), this.strip());
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
              var e = 0 | Math.ceil(t / 26),
                r = t % 26;
              (this._expand(e), r > 0 && e--);
              for (var n = 0; n < e; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                r > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
                this.strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              i("number" === typeof t && t >= 0);
              var r = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = e
                  ? this.words[r] | (1 << n)
                  : this.words[r] & ~(1 << n)),
                this.strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, r, i;
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
                ? ((r = this), (i = t))
                : ((r = t), (i = this));
              for (var n = 0, o = 0; o < i.length; o++)
                ((e = (0 | r.words[o]) + (0 | i.words[o]) + n),
                  (this.words[o] = 67108863 & e),
                  (n = e >>> 26));
              for (; 0 !== n && o < r.length; o++)
                ((e = (0 | r.words[o]) + n),
                  (this.words[o] = 67108863 & e),
                  (n = e >>> 26));
              if (((this.length = r.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
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
                i,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((r = this), (i = t)) : ((r = t), (i = this));
              for (var o = 0, s = 0; s < i.length; s++)
                ((e = (0 | r.words[s]) - (0 | i.words[s]) + o),
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
                this.strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var d = function (t, e, r) {
            var i,
              n,
              o,
              s = t.words,
              h = e.words,
              u = r.words,
              a = 0,
              l = 0 | s[0],
              f = 8191 & l,
              c = l >>> 13,
              p = 0 | s[1],
              d = 8191 & p,
              m = p >>> 13,
              y = 0 | s[2],
              v = 8191 & y,
              g = y >>> 13,
              w = 0 | s[3],
              M = 8191 & w,
              b = w >>> 13,
              _ = 0 | s[4],
              A = 8191 & _,
              S = _ >>> 13,
              x = 0 | s[5],
              E = 8191 & x,
              k = x >>> 13,
              B = 0 | s[6],
              P = 8191 & B,
              I = B >>> 13,
              O = 0 | s[7],
              L = 8191 & O,
              R = O >>> 13,
              T = 0 | s[8],
              N = 8191 & T,
              K = T >>> 13,
              j = 0 | s[9],
              C = 8191 & j,
              U = j >>> 13,
              F = 0 | h[0],
              H = 8191 & F,
              z = F >>> 13,
              Z = 0 | h[1],
              q = 8191 & Z,
              V = Z >>> 13,
              D = 0 | h[2],
              W = 8191 & D,
              G = D >>> 13,
              $ = 0 | h[3],
              Y = 8191 & $,
              J = $ >>> 13,
              X = 0 | h[4],
              Q = 8191 & X,
              tt = X >>> 13,
              et = 0 | h[5],
              rt = 8191 & et,
              it = et >>> 13,
              nt = 0 | h[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              ht = 0 | h[7],
              ut = 8191 & ht,
              at = ht >>> 13,
              lt = 0 | h[8],
              ft = 8191 & lt,
              ct = lt >>> 13,
              pt = 0 | h[9],
              dt = 8191 & pt,
              mt = pt >>> 13;
            ((r.negative = t.negative ^ e.negative),
              (r.length = 19),
              (i = Math.imul(f, H)),
              (n = Math.imul(f, z)),
              (n = (n + Math.imul(c, H)) | 0),
              (o = Math.imul(c, z)));
            var yt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(d, H)),
              (n = Math.imul(d, z)),
              (n = (n + Math.imul(m, H)) | 0),
              (o = Math.imul(m, z)),
              (i = (i + Math.imul(f, q)) | 0),
              (n = (n + Math.imul(f, V)) | 0),
              (n = (n + Math.imul(c, q)) | 0),
              (o = (o + Math.imul(c, V)) | 0));
            var vt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(v, H)),
              (n = Math.imul(v, z)),
              (n = (n + Math.imul(g, H)) | 0),
              (o = Math.imul(g, z)),
              (i = (i + Math.imul(d, q)) | 0),
              (n = (n + Math.imul(d, V)) | 0),
              (n = (n + Math.imul(m, q)) | 0),
              (o = (o + Math.imul(m, V)) | 0),
              (i = (i + Math.imul(f, W)) | 0),
              (n = (n + Math.imul(f, G)) | 0),
              (n = (n + Math.imul(c, W)) | 0),
              (o = (o + Math.imul(c, G)) | 0));
            var gt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (i = Math.imul(M, H)),
              (n = Math.imul(M, z)),
              (n = (n + Math.imul(b, H)) | 0),
              (o = Math.imul(b, z)),
              (i = (i + Math.imul(v, q)) | 0),
              (n = (n + Math.imul(v, V)) | 0),
              (n = (n + Math.imul(g, q)) | 0),
              (o = (o + Math.imul(g, V)) | 0),
              (i = (i + Math.imul(d, W)) | 0),
              (n = (n + Math.imul(d, G)) | 0),
              (n = (n + Math.imul(m, W)) | 0),
              (o = (o + Math.imul(m, G)) | 0),
              (i = (i + Math.imul(f, Y)) | 0),
              (n = (n + Math.imul(f, J)) | 0),
              (n = (n + Math.imul(c, Y)) | 0),
              (o = (o + Math.imul(c, J)) | 0));
            var wt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(A, H)),
              (n = Math.imul(A, z)),
              (n = (n + Math.imul(S, H)) | 0),
              (o = Math.imul(S, z)),
              (i = (i + Math.imul(M, q)) | 0),
              (n = (n + Math.imul(M, V)) | 0),
              (n = (n + Math.imul(b, q)) | 0),
              (o = (o + Math.imul(b, V)) | 0),
              (i = (i + Math.imul(v, W)) | 0),
              (n = (n + Math.imul(v, G)) | 0),
              (n = (n + Math.imul(g, W)) | 0),
              (o = (o + Math.imul(g, G)) | 0),
              (i = (i + Math.imul(d, Y)) | 0),
              (n = (n + Math.imul(d, J)) | 0),
              (n = (n + Math.imul(m, Y)) | 0),
              (o = (o + Math.imul(m, J)) | 0),
              (i = (i + Math.imul(f, Q)) | 0),
              (n = (n + Math.imul(f, tt)) | 0),
              (n = (n + Math.imul(c, Q)) | 0),
              (o = (o + Math.imul(c, tt)) | 0));
            var Mt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(E, H)),
              (n = Math.imul(E, z)),
              (n = (n + Math.imul(k, H)) | 0),
              (o = Math.imul(k, z)),
              (i = (i + Math.imul(A, q)) | 0),
              (n = (n + Math.imul(A, V)) | 0),
              (n = (n + Math.imul(S, q)) | 0),
              (o = (o + Math.imul(S, V)) | 0),
              (i = (i + Math.imul(M, W)) | 0),
              (n = (n + Math.imul(M, G)) | 0),
              (n = (n + Math.imul(b, W)) | 0),
              (o = (o + Math.imul(b, G)) | 0),
              (i = (i + Math.imul(v, Y)) | 0),
              (n = (n + Math.imul(v, J)) | 0),
              (n = (n + Math.imul(g, Y)) | 0),
              (o = (o + Math.imul(g, J)) | 0),
              (i = (i + Math.imul(d, Q)) | 0),
              (n = (n + Math.imul(d, tt)) | 0),
              (n = (n + Math.imul(m, Q)) | 0),
              (o = (o + Math.imul(m, tt)) | 0),
              (i = (i + Math.imul(f, rt)) | 0),
              (n = (n + Math.imul(f, it)) | 0),
              (n = (n + Math.imul(c, rt)) | 0),
              (o = (o + Math.imul(c, it)) | 0));
            var bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(P, H)),
              (n = Math.imul(P, z)),
              (n = (n + Math.imul(I, H)) | 0),
              (o = Math.imul(I, z)),
              (i = (i + Math.imul(E, q)) | 0),
              (n = (n + Math.imul(E, V)) | 0),
              (n = (n + Math.imul(k, q)) | 0),
              (o = (o + Math.imul(k, V)) | 0),
              (i = (i + Math.imul(A, W)) | 0),
              (n = (n + Math.imul(A, G)) | 0),
              (n = (n + Math.imul(S, W)) | 0),
              (o = (o + Math.imul(S, G)) | 0),
              (i = (i + Math.imul(M, Y)) | 0),
              (n = (n + Math.imul(M, J)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (o = (o + Math.imul(b, J)) | 0),
              (i = (i + Math.imul(v, Q)) | 0),
              (n = (n + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(g, Q)) | 0),
              (o = (o + Math.imul(g, tt)) | 0),
              (i = (i + Math.imul(d, rt)) | 0),
              (n = (n + Math.imul(d, it)) | 0),
              (n = (n + Math.imul(m, rt)) | 0),
              (o = (o + Math.imul(m, it)) | 0),
              (i = (i + Math.imul(f, ot)) | 0),
              (n = (n + Math.imul(f, st)) | 0),
              (n = (n + Math.imul(c, ot)) | 0),
              (o = (o + Math.imul(c, st)) | 0));
            var _t = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(L, H)),
              (n = Math.imul(L, z)),
              (n = (n + Math.imul(R, H)) | 0),
              (o = Math.imul(R, z)),
              (i = (i + Math.imul(P, q)) | 0),
              (n = (n + Math.imul(P, V)) | 0),
              (n = (n + Math.imul(I, q)) | 0),
              (o = (o + Math.imul(I, V)) | 0),
              (i = (i + Math.imul(E, W)) | 0),
              (n = (n + Math.imul(E, G)) | 0),
              (n = (n + Math.imul(k, W)) | 0),
              (o = (o + Math.imul(k, G)) | 0),
              (i = (i + Math.imul(A, Y)) | 0),
              (n = (n + Math.imul(A, J)) | 0),
              (n = (n + Math.imul(S, Y)) | 0),
              (o = (o + Math.imul(S, J)) | 0),
              (i = (i + Math.imul(M, Q)) | 0),
              (n = (n + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(b, Q)) | 0),
              (o = (o + Math.imul(b, tt)) | 0),
              (i = (i + Math.imul(v, rt)) | 0),
              (n = (n + Math.imul(v, it)) | 0),
              (n = (n + Math.imul(g, rt)) | 0),
              (o = (o + Math.imul(g, it)) | 0),
              (i = (i + Math.imul(d, ot)) | 0),
              (n = (n + Math.imul(d, st)) | 0),
              (n = (n + Math.imul(m, ot)) | 0),
              (o = (o + Math.imul(m, st)) | 0),
              (i = (i + Math.imul(f, ut)) | 0),
              (n = (n + Math.imul(f, at)) | 0),
              (n = (n + Math.imul(c, ut)) | 0),
              (o = (o + Math.imul(c, at)) | 0));
            var At = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(N, H)),
              (n = Math.imul(N, z)),
              (n = (n + Math.imul(K, H)) | 0),
              (o = Math.imul(K, z)),
              (i = (i + Math.imul(L, q)) | 0),
              (n = (n + Math.imul(L, V)) | 0),
              (n = (n + Math.imul(R, q)) | 0),
              (o = (o + Math.imul(R, V)) | 0),
              (i = (i + Math.imul(P, W)) | 0),
              (n = (n + Math.imul(P, G)) | 0),
              (n = (n + Math.imul(I, W)) | 0),
              (o = (o + Math.imul(I, G)) | 0),
              (i = (i + Math.imul(E, Y)) | 0),
              (n = (n + Math.imul(E, J)) | 0),
              (n = (n + Math.imul(k, Y)) | 0),
              (o = (o + Math.imul(k, J)) | 0),
              (i = (i + Math.imul(A, Q)) | 0),
              (n = (n + Math.imul(A, tt)) | 0),
              (n = (n + Math.imul(S, Q)) | 0),
              (o = (o + Math.imul(S, tt)) | 0),
              (i = (i + Math.imul(M, rt)) | 0),
              (n = (n + Math.imul(M, it)) | 0),
              (n = (n + Math.imul(b, rt)) | 0),
              (o = (o + Math.imul(b, it)) | 0),
              (i = (i + Math.imul(v, ot)) | 0),
              (n = (n + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(g, ot)) | 0),
              (o = (o + Math.imul(g, st)) | 0),
              (i = (i + Math.imul(d, ut)) | 0),
              (n = (n + Math.imul(d, at)) | 0),
              (n = (n + Math.imul(m, ut)) | 0),
              (o = (o + Math.imul(m, at)) | 0),
              (i = (i + Math.imul(f, ft)) | 0),
              (n = (n + Math.imul(f, ct)) | 0),
              (n = (n + Math.imul(c, ft)) | 0),
              (o = (o + Math.imul(c, ct)) | 0));
            var St = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(C, H)),
              (n = Math.imul(C, z)),
              (n = (n + Math.imul(U, H)) | 0),
              (o = Math.imul(U, z)),
              (i = (i + Math.imul(N, q)) | 0),
              (n = (n + Math.imul(N, V)) | 0),
              (n = (n + Math.imul(K, q)) | 0),
              (o = (o + Math.imul(K, V)) | 0),
              (i = (i + Math.imul(L, W)) | 0),
              (n = (n + Math.imul(L, G)) | 0),
              (n = (n + Math.imul(R, W)) | 0),
              (o = (o + Math.imul(R, G)) | 0),
              (i = (i + Math.imul(P, Y)) | 0),
              (n = (n + Math.imul(P, J)) | 0),
              (n = (n + Math.imul(I, Y)) | 0),
              (o = (o + Math.imul(I, J)) | 0),
              (i = (i + Math.imul(E, Q)) | 0),
              (n = (n + Math.imul(E, tt)) | 0),
              (n = (n + Math.imul(k, Q)) | 0),
              (o = (o + Math.imul(k, tt)) | 0),
              (i = (i + Math.imul(A, rt)) | 0),
              (n = (n + Math.imul(A, it)) | 0),
              (n = (n + Math.imul(S, rt)) | 0),
              (o = (o + Math.imul(S, it)) | 0),
              (i = (i + Math.imul(M, ot)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (o = (o + Math.imul(b, st)) | 0),
              (i = (i + Math.imul(v, ut)) | 0),
              (n = (n + Math.imul(v, at)) | 0),
              (n = (n + Math.imul(g, ut)) | 0),
              (o = (o + Math.imul(g, at)) | 0),
              (i = (i + Math.imul(d, ft)) | 0),
              (n = (n + Math.imul(d, ct)) | 0),
              (n = (n + Math.imul(m, ft)) | 0),
              (o = (o + Math.imul(m, ct)) | 0),
              (i = (i + Math.imul(f, dt)) | 0),
              (n = (n + Math.imul(f, mt)) | 0),
              (n = (n + Math.imul(c, dt)) | 0),
              (o = (o + Math.imul(c, mt)) | 0));
            var xt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(C, q)),
              (n = Math.imul(C, V)),
              (n = (n + Math.imul(U, q)) | 0),
              (o = Math.imul(U, V)),
              (i = (i + Math.imul(N, W)) | 0),
              (n = (n + Math.imul(N, G)) | 0),
              (n = (n + Math.imul(K, W)) | 0),
              (o = (o + Math.imul(K, G)) | 0),
              (i = (i + Math.imul(L, Y)) | 0),
              (n = (n + Math.imul(L, J)) | 0),
              (n = (n + Math.imul(R, Y)) | 0),
              (o = (o + Math.imul(R, J)) | 0),
              (i = (i + Math.imul(P, Q)) | 0),
              (n = (n + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(I, Q)) | 0),
              (o = (o + Math.imul(I, tt)) | 0),
              (i = (i + Math.imul(E, rt)) | 0),
              (n = (n + Math.imul(E, it)) | 0),
              (n = (n + Math.imul(k, rt)) | 0),
              (o = (o + Math.imul(k, it)) | 0),
              (i = (i + Math.imul(A, ot)) | 0),
              (n = (n + Math.imul(A, st)) | 0),
              (n = (n + Math.imul(S, ot)) | 0),
              (o = (o + Math.imul(S, st)) | 0),
              (i = (i + Math.imul(M, ut)) | 0),
              (n = (n + Math.imul(M, at)) | 0),
              (n = (n + Math.imul(b, ut)) | 0),
              (o = (o + Math.imul(b, at)) | 0),
              (i = (i + Math.imul(v, ft)) | 0),
              (n = (n + Math.imul(v, ct)) | 0),
              (n = (n + Math.imul(g, ft)) | 0),
              (o = (o + Math.imul(g, ct)) | 0),
              (i = (i + Math.imul(d, dt)) | 0),
              (n = (n + Math.imul(d, mt)) | 0),
              (n = (n + Math.imul(m, dt)) | 0),
              (o = (o + Math.imul(m, mt)) | 0));
            var Et = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(C, W)),
              (n = Math.imul(C, G)),
              (n = (n + Math.imul(U, W)) | 0),
              (o = Math.imul(U, G)),
              (i = (i + Math.imul(N, Y)) | 0),
              (n = (n + Math.imul(N, J)) | 0),
              (n = (n + Math.imul(K, Y)) | 0),
              (o = (o + Math.imul(K, J)) | 0),
              (i = (i + Math.imul(L, Q)) | 0),
              (n = (n + Math.imul(L, tt)) | 0),
              (n = (n + Math.imul(R, Q)) | 0),
              (o = (o + Math.imul(R, tt)) | 0),
              (i = (i + Math.imul(P, rt)) | 0),
              (n = (n + Math.imul(P, it)) | 0),
              (n = (n + Math.imul(I, rt)) | 0),
              (o = (o + Math.imul(I, it)) | 0),
              (i = (i + Math.imul(E, ot)) | 0),
              (n = (n + Math.imul(E, st)) | 0),
              (n = (n + Math.imul(k, ot)) | 0),
              (o = (o + Math.imul(k, st)) | 0),
              (i = (i + Math.imul(A, ut)) | 0),
              (n = (n + Math.imul(A, at)) | 0),
              (n = (n + Math.imul(S, ut)) | 0),
              (o = (o + Math.imul(S, at)) | 0),
              (i = (i + Math.imul(M, ft)) | 0),
              (n = (n + Math.imul(M, ct)) | 0),
              (n = (n + Math.imul(b, ft)) | 0),
              (o = (o + Math.imul(b, ct)) | 0),
              (i = (i + Math.imul(v, dt)) | 0),
              (n = (n + Math.imul(v, mt)) | 0),
              (n = (n + Math.imul(g, dt)) | 0),
              (o = (o + Math.imul(g, mt)) | 0));
            var kt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (i = Math.imul(C, Y)),
              (n = Math.imul(C, J)),
              (n = (n + Math.imul(U, Y)) | 0),
              (o = Math.imul(U, J)),
              (i = (i + Math.imul(N, Q)) | 0),
              (n = (n + Math.imul(N, tt)) | 0),
              (n = (n + Math.imul(K, Q)) | 0),
              (o = (o + Math.imul(K, tt)) | 0),
              (i = (i + Math.imul(L, rt)) | 0),
              (n = (n + Math.imul(L, it)) | 0),
              (n = (n + Math.imul(R, rt)) | 0),
              (o = (o + Math.imul(R, it)) | 0),
              (i = (i + Math.imul(P, ot)) | 0),
              (n = (n + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(I, ot)) | 0),
              (o = (o + Math.imul(I, st)) | 0),
              (i = (i + Math.imul(E, ut)) | 0),
              (n = (n + Math.imul(E, at)) | 0),
              (n = (n + Math.imul(k, ut)) | 0),
              (o = (o + Math.imul(k, at)) | 0),
              (i = (i + Math.imul(A, ft)) | 0),
              (n = (n + Math.imul(A, ct)) | 0),
              (n = (n + Math.imul(S, ft)) | 0),
              (o = (o + Math.imul(S, ct)) | 0),
              (i = (i + Math.imul(M, dt)) | 0),
              (n = (n + Math.imul(M, mt)) | 0),
              (n = (n + Math.imul(b, dt)) | 0),
              (o = (o + Math.imul(b, mt)) | 0));
            var Bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (i = Math.imul(C, Q)),
              (n = Math.imul(C, tt)),
              (n = (n + Math.imul(U, Q)) | 0),
              (o = Math.imul(U, tt)),
              (i = (i + Math.imul(N, rt)) | 0),
              (n = (n + Math.imul(N, it)) | 0),
              (n = (n + Math.imul(K, rt)) | 0),
              (o = (o + Math.imul(K, it)) | 0),
              (i = (i + Math.imul(L, ot)) | 0),
              (n = (n + Math.imul(L, st)) | 0),
              (n = (n + Math.imul(R, ot)) | 0),
              (o = (o + Math.imul(R, st)) | 0),
              (i = (i + Math.imul(P, ut)) | 0),
              (n = (n + Math.imul(P, at)) | 0),
              (n = (n + Math.imul(I, ut)) | 0),
              (o = (o + Math.imul(I, at)) | 0),
              (i = (i + Math.imul(E, ft)) | 0),
              (n = (n + Math.imul(E, ct)) | 0),
              (n = (n + Math.imul(k, ft)) | 0),
              (o = (o + Math.imul(k, ct)) | 0),
              (i = (i + Math.imul(A, dt)) | 0),
              (n = (n + Math.imul(A, mt)) | 0),
              (n = (n + Math.imul(S, dt)) | 0),
              (o = (o + Math.imul(S, mt)) | 0));
            var Pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(C, rt)),
              (n = Math.imul(C, it)),
              (n = (n + Math.imul(U, rt)) | 0),
              (o = Math.imul(U, it)),
              (i = (i + Math.imul(N, ot)) | 0),
              (n = (n + Math.imul(N, st)) | 0),
              (n = (n + Math.imul(K, ot)) | 0),
              (o = (o + Math.imul(K, st)) | 0),
              (i = (i + Math.imul(L, ut)) | 0),
              (n = (n + Math.imul(L, at)) | 0),
              (n = (n + Math.imul(R, ut)) | 0),
              (o = (o + Math.imul(R, at)) | 0),
              (i = (i + Math.imul(P, ft)) | 0),
              (n = (n + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(I, ft)) | 0),
              (o = (o + Math.imul(I, ct)) | 0),
              (i = (i + Math.imul(E, dt)) | 0),
              (n = (n + Math.imul(E, mt)) | 0),
              (n = (n + Math.imul(k, dt)) | 0),
              (o = (o + Math.imul(k, mt)) | 0));
            var It = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (i = Math.imul(C, ot)),
              (n = Math.imul(C, st)),
              (n = (n + Math.imul(U, ot)) | 0),
              (o = Math.imul(U, st)),
              (i = (i + Math.imul(N, ut)) | 0),
              (n = (n + Math.imul(N, at)) | 0),
              (n = (n + Math.imul(K, ut)) | 0),
              (o = (o + Math.imul(K, at)) | 0),
              (i = (i + Math.imul(L, ft)) | 0),
              (n = (n + Math.imul(L, ct)) | 0),
              (n = (n + Math.imul(R, ft)) | 0),
              (o = (o + Math.imul(R, ct)) | 0),
              (i = (i + Math.imul(P, dt)) | 0),
              (n = (n + Math.imul(P, mt)) | 0),
              (n = (n + Math.imul(I, dt)) | 0),
              (o = (o + Math.imul(I, mt)) | 0));
            var Ot = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(C, ut)),
              (n = Math.imul(C, at)),
              (n = (n + Math.imul(U, ut)) | 0),
              (o = Math.imul(U, at)),
              (i = (i + Math.imul(N, ft)) | 0),
              (n = (n + Math.imul(N, ct)) | 0),
              (n = (n + Math.imul(K, ft)) | 0),
              (o = (o + Math.imul(K, ct)) | 0),
              (i = (i + Math.imul(L, dt)) | 0),
              (n = (n + Math.imul(L, mt)) | 0),
              (n = (n + Math.imul(R, dt)) | 0),
              (o = (o + Math.imul(R, mt)) | 0));
            var Lt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Lt >>> 26)) | 0),
              (Lt &= 67108863),
              (i = Math.imul(C, ft)),
              (n = Math.imul(C, ct)),
              (n = (n + Math.imul(U, ft)) | 0),
              (o = Math.imul(U, ct)),
              (i = (i + Math.imul(N, dt)) | 0),
              (n = (n + Math.imul(N, mt)) | 0),
              (n = (n + Math.imul(K, dt)) | 0),
              (o = (o + Math.imul(K, mt)) | 0));
            var Rt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(C, dt)),
              (n = Math.imul(C, mt)),
              (n = (n + Math.imul(U, dt)) | 0),
              (o = Math.imul(U, mt)));
            var Tt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (a = (((o + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (u[0] = yt),
              (u[1] = vt),
              (u[2] = gt),
              (u[3] = wt),
              (u[4] = Mt),
              (u[5] = bt),
              (u[6] = _t),
              (u[7] = At),
              (u[8] = St),
              (u[9] = xt),
              (u[10] = Et),
              (u[11] = kt),
              (u[12] = Bt),
              (u[13] = Pt),
              (u[14] = It),
              (u[15] = Ot),
              (u[16] = Lt),
              (u[17] = Rt),
              (u[18] = Tt),
              0 !== a && ((u[19] = a), r.length++),
              r
            );
          };
          function m(t, e, r) {
            ((r.negative = e.negative ^ t.negative),
              (r.length = t.length + e.length));
            for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
              var s = n;
              n = 0;
              for (
                var h = 67108863 & i,
                  u = Math.min(o, e.length - 1),
                  a = Math.max(0, o - t.length + 1);
                a <= u;
                a++
              ) {
                var l = o - a,
                  f = 0 | t.words[l],
                  c = 0 | e.words[a],
                  p = f * c,
                  d = 67108863 & p;
                ((s = (s + ((p / 67108864) | 0)) | 0),
                  (d = (d + h) | 0),
                  (h = 67108863 & d),
                  (s = (s + (d >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((r.words[o] = h), (i = s), (s = n));
            }
            return (0 !== i ? (r.words[o] = i) : r.length--, r.strip());
          }
          function y(t, e, r) {
            var i = new v();
            return i.mulp(t, e, r);
          }
          function v(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (d = p),
            (o.prototype.mulTo = function (t, e) {
              var r,
                i = this.length + t.length;
              return (
                (r =
                  10 === this.length && 10 === t.length
                    ? d(this, t, e)
                    : i < 63
                      ? p(this, t, e)
                      : i < 1024
                        ? m(this, t, e)
                        : y(this, t, e)),
                r
              );
            }),
            (v.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), r = o.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                e[i] = this.revBin(i, r, t);
              return e;
            }),
            (v.prototype.revBin = function (t, e, r) {
              if (0 === t || t === r - 1) return t;
              for (var i = 0, n = 0; n < e; n++)
                ((i |= (1 & t) << (e - n - 1)), (t >>= 1));
              return i;
            }),
            (v.prototype.permute = function (t, e, r, i, n, o) {
              for (var s = 0; s < o; s++) ((i[s] = e[t[s]]), (n[s] = r[t[s]]));
            }),
            (v.prototype.transform = function (t, e, r, i, n, o) {
              this.permute(o, t, e, r, i, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var h = s << 1,
                    u = Math.cos((2 * Math.PI) / h),
                    a = Math.sin((2 * Math.PI) / h),
                    l = 0;
                  l < n;
                  l += h
                )
                  for (var f = u, c = a, p = 0; p < s; p++) {
                    var d = r[l + p],
                      m = i[l + p],
                      y = r[l + p + s],
                      v = i[l + p + s],
                      g = f * y - c * v;
                    ((v = f * v + c * y),
                      (y = g),
                      (r[l + p] = d + y),
                      (i[l + p] = m + v),
                      (r[l + p + s] = d - y),
                      (i[l + p + s] = m - v),
                      p !== h &&
                        ((g = u * f - a * c), (c = u * c + a * f), (f = g)));
                  }
            }),
            (v.prototype.guessLen13b = function (t, e) {
              var r = 1 | Math.max(e, t),
                i = 1 & r,
                n = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (v.prototype.conjugate = function (t, e, r) {
              if (!(r <= 1))
                for (var i = 0; i < r / 2; i++) {
                  var n = t[i];
                  ((t[i] = t[r - i - 1]),
                    (t[r - i - 1] = n),
                    (n = e[i]),
                    (e[i] = -e[r - i - 1]),
                    (e[r - i - 1] = -n));
                }
            }),
            (v.prototype.normalize13b = function (t, e) {
              for (var r = 0, i = 0; i < e / 2; i++) {
                var n =
                  8192 * Math.round(t[2 * i + 1] / e) +
                  Math.round(t[2 * i] / e) +
                  r;
                ((t[i] = 67108863 & n),
                  (r = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (v.prototype.convert13b = function (t, e, r, n) {
              for (var o = 0, s = 0; s < e; s++)
                ((o += 0 | t[s]),
                  (r[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * e; s < n; ++s) r[s] = 0;
              (i(0 === o), i(0 === (-8192 & o)));
            }),
            (v.prototype.stub = function (t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
              return e;
            }),
            (v.prototype.mulp = function (t, e, r) {
              var i = 2 * this.guessLen13b(t.length, e.length),
                n = this.makeRBT(i),
                o = this.stub(i),
                s = new Array(i),
                h = new Array(i),
                u = new Array(i),
                a = new Array(i),
                l = new Array(i),
                f = new Array(i),
                c = r.words;
              ((c.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(e.words, e.length, a, i),
                this.transform(s, o, h, u, i, n),
                this.transform(a, o, l, f, i, n));
              for (var p = 0; p < i; p++) {
                var d = h[p] * l[p] - u[p] * f[p];
                ((u[p] = h[p] * f[p] + u[p] * l[p]), (h[p] = d));
              }
              return (
                this.conjugate(h, u, i),
                this.transform(h, u, c, o, i, n),
                this.conjugate(c, o, i),
                this.normalize13b(c, i),
                (r.negative = t.negative ^ e.negative),
                (r.length = t.length + e.length),
                r.strip()
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
              (i("number" === typeof t), i(t < 67108864));
              for (var e = 0, r = 0; r < this.length; r++) {
                var n = (0 | this.words[r]) * t,
                  o = (67108863 & n) + (67108863 & e);
                ((e >>= 26),
                  (e += (n / 67108864) | 0),
                  (e += o >>> 26),
                  (this.words[r] = 67108863 & o));
              }
              return (0 !== e && ((this.words[r] = e), this.length++), this);
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
              var e = c(t);
              if (0 === e.length) return new o(1);
              for (var r = this, i = 0; i < e.length; i++, r = r.sqr())
                if (0 !== e[i]) break;
              if (++i < e.length)
                for (var n = r.sqr(); i < e.length; i++, n = n.sqr())
                  0 !== e[i] && (r = r.mul(n));
              return r;
            }),
            (o.prototype.iushln = function (t) {
              i("number" === typeof t && t >= 0);
              var e,
                r = t % 26,
                n = (t - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var s = 0;
                for (e = 0; e < this.length; e++) {
                  var h = this.words[e] & o,
                    u = ((0 | this.words[e]) - h) << r;
                  ((this.words[e] = u | s), (s = h >>> (26 - r)));
                }
                s && ((this.words[e] = s), this.length++);
              }
              if (0 !== n) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + n] = this.words[e];
                for (e = 0; e < n; e++) this.words[e] = 0;
                this.length += n;
              }
              return this.strip();
            }),
            (o.prototype.ishln = function (t) {
              return (i(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, e, r) {
              var n;
              (i("number" === typeof t && t >= 0),
                (n = e ? (e - (e % 26)) / 26 : 0));
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                h = 67108863 ^ ((67108863 >>> o) << o),
                u = r;
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
                this.strip()
              );
            }),
            (o.prototype.ishrn = function (t, e, r) {
              return (i(0 === this.negative), this.iushrn(t, e, r));
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
              var e = t % 26,
                r = (t - e) / 26,
                n = 1 << e;
              if (this.length <= r) return !1;
              var o = this.words[r];
              return !!(o & n);
            }),
            (o.prototype.imaskn = function (t) {
              i("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26;
              if (
                (i(
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
                var n = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= n;
              }
              return this.strip();
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
                    ? 1 === this.length && (0 | this.words[0]) < t
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
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  ((this.words[e] += 67108864), (this.words[e + 1] -= 1));
              return this.strip();
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
              var n,
                o,
                s = t.length + r;
              this._expand(s);
              var h = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + r]) + h;
                var u = (0 | t.words[n]) * e;
                ((o -= 67108863 & u),
                  (h = (o >> 26) - ((u / 67108864) | 0)),
                  (this.words[n + r] = 67108863 & o));
              }
              for (; n < this.length - r; n++)
                ((o = (0 | this.words[n + r]) + h),
                  (h = o >> 26),
                  (this.words[n + r] = 67108863 & o));
              if (0 === h) return this.strip();
              for (i(-1 === h), h = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + h),
                  (h = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this.strip());
            }),
            (o.prototype._wordDiv = function (t, e) {
              var r = this.length - t.length,
                i = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                h = this._countBits(s);
              ((r = 26 - h),
                0 !== r &&
                  ((n = n.ushln(r)),
                  i.iushln(r),
                  (s = 0 | n.words[n.length - 1])));
              var u,
                a = i.length - n.length;
              if ("mod" !== e) {
                ((u = new o(null)),
                  (u.length = a + 1),
                  (u.words = new Array(u.length)));
                for (var l = 0; l < u.length; l++) u.words[l] = 0;
              }
              var f = i.clone()._ishlnsubmul(n, 1, a);
              0 === f.negative && ((i = f), u && (u.words[a] = 1));
              for (var c = a - 1; c >= 0; c--) {
                var p =
                  67108864 * (0 | i.words[n.length + c]) +
                  (0 | i.words[n.length + c - 1]);
                ((p = Math.min((p / s) | 0, 67108863)),
                  i._ishlnsubmul(n, p, c));
                while (0 !== i.negative)
                  (p--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, c),
                    i.isZero() || (i.negative ^= 1));
                u && (u.words[c] = p);
              }
              return (
                u && u.strip(),
                i.strip(),
                "div" !== e && 0 !== r && i.iushrn(r),
                { div: u || null, mod: i }
              );
            }),
            (o.prototype.divmod = function (t, e, r) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((h = this.neg().divmod(t, e)),
                      "mod" !== e && (n = h.div.neg()),
                      "div" !== e &&
                        ((s = h.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((h = this.divmod(t.neg(), e)),
                        "mod" !== e && (n = h.div.neg()),
                        { div: n, mod: h.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((h = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((s = h.mod.neg()),
                            r && 0 !== s.negative && s.isub(t)),
                          { div: h.div, mod: s })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new o(this.modn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new o(this.modn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
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
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                i = t.ushrn(1),
                n = t.andln(1),
                o = r.cmp(i);
              return o < 0 || (1 === n && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (o.prototype.modn = function (t) {
              i(t <= 67108863);
              for (
                var e = (1 << 26) % t, r = 0, n = this.length - 1;
                n >= 0;
                n--
              )
                r = (e * r + (0 | this.words[n])) % t;
              return r;
            }),
            (o.prototype.idivn = function (t) {
              i(t <= 67108863);
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var n = (0 | this.words[r]) + 67108864 * e;
                ((this.words[r] = (n / t) | 0), (e = n % t));
              }
              return this.strip();
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n = new o(1),
                s = new o(0),
                h = new o(0),
                u = new o(1),
                a = 0;
              while (e.isEven() && r.isEven()) (e.iushrn(1), r.iushrn(1), ++a);
              var l = r.clone(),
                f = e.clone();
              while (!e.isZero()) {
                for (
                  var c = 0, p = 1;
                  0 === (e.words[0] & p) && c < 26;
                  ++c, p <<= 1
                );
                if (c > 0) {
                  e.iushrn(c);
                  while (c-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(f)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var d = 0, m = 1;
                  0 === (r.words[0] & m) && d < 26;
                  ++d, m <<= 1
                );
                if (d > 0) {
                  r.iushrn(d);
                  while (d-- > 0)
                    ((h.isOdd() || u.isOdd()) && (h.iadd(l), u.isub(f)),
                      h.iushrn(1),
                      u.iushrn(1));
                }
                e.cmp(r) >= 0
                  ? (e.isub(r), n.isub(h), s.isub(u))
                  : (r.isub(e), h.isub(n), u.isub(s));
              }
              return { a: h, b: u, gcd: r.iushln(a) };
            }),
            (o.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                s = new o(1),
                h = new o(0),
                u = r.clone();
              while (e.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var a = 0, l = 1;
                  0 === (e.words[0] & l) && a < 26;
                  ++a, l <<= 1
                );
                if (a > 0) {
                  e.iushrn(a);
                  while (a-- > 0) (s.isOdd() && s.iadd(u), s.iushrn(1));
                }
                for (
                  var f = 0, c = 1;
                  0 === (r.words[0] & c) && f < 26;
                  ++f, c <<= 1
                );
                if (f > 0) {
                  r.iushrn(f);
                  while (f-- > 0) (h.isOdd() && h.iadd(u), h.iushrn(1));
                }
                e.cmp(r) >= 0 ? (e.isub(r), s.isub(h)) : (r.isub(e), h.isub(s));
              }
              return (
                (n = 0 === e.cmpn(1) ? s : h),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                r = t.clone();
              ((e.negative = 0), (r.negative = 0));
              for (var i = 0; e.isEven() && r.isEven(); i++)
                (e.iushrn(1), r.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (r.isEven()) r.iushrn(1);
                var n = e.cmp(r);
                if (n < 0) {
                  var o = e;
                  ((e = r), (r = o));
                } else if (0 === n || 0 === r.cmpn(1)) break;
                e.isub(r);
              } while (1);
              return r.iushln(i);
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
              var e = t % 26,
                r = (t - e) / 26,
                n = 1 << e;
              if (this.length <= r)
                return (this._expand(r + 1), (this.words[r] |= n), this);
              for (var o = n, s = r; 0 !== o && s < this.length; s++) {
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
              var e,
                r = t < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this.strip(), this.length > 1)) e = 1;
              else {
                (r && (t = -t), i(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                e = n === t ? 0 : n < t ? -1 : 1;
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
                var i = 0 | this.words[r],
                  n = 0 | t.words[r];
                if (i !== n) {
                  i < n ? (e = -1) : i > n && (e = 1);
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
          var g = { k256: null, p224: null, p192: null, p25519: null };
          function w(t, e) {
            ((this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function M() {
            w.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function b() {
            w.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function _() {
            w.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function A() {
            w.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function S(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function x(t) {
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
          ((w.prototype._tmp = function () {
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (w.prototype.ireduce = function (t) {
              var e,
                r = t;
              do {
                (this.split(r, this.tmp),
                  (r = this.imulK(r)),
                  (r = r.iadd(this.tmp)),
                  (e = r.bitLength()));
              } while (e > this.n);
              var i = e < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === i
                  ? ((r.words[0] = 0), (r.length = 1))
                  : i > 0
                    ? r.isub(this.p)
                    : r.strip(),
                r
              );
            }),
            (w.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (w.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(M, w),
            (M.prototype.split = function (t, e) {
              for (
                var r = 4194303, i = Math.min(t.length, 9), n = 0;
                n < i;
                n++
              )
                e.words[n] = t.words[n];
              if (((e.length = i), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (e.words[e.length++] = o & r, n = 10; n < t.length; n++) {
                var s = 0 | t.words[n];
                ((t.words[n - 10] = ((s & r) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (t.words[n - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (M.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 0 | t.words[r];
                ((e += 977 * i),
                  (t.words[r] = 67108863 & e),
                  (e = 64 * i + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(b, w),
            n(_, w),
            n(A, w),
            (A.prototype.imulK = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 19 * (0 | t.words[r]) + e,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[r] = n), (e = i));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (o._prime = function (t) {
              if (g[t]) return g[t];
              var e;
              if ("k256" === t) e = new M();
              else if ("p224" === t) e = new b();
              else if ("p192" === t) e = new _();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new A();
              }
              return ((g[t] = e), e);
            }),
            (S.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (S.prototype._verify2 = function (t, e) {
              (i(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (S.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : t.umod(this.m)._forceRed(this);
            }),
            (S.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (S.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (S.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (S.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (S.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (S.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (S.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (S.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (S.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (S.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (S.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((i(e % 2 === 1), 3 === e)) {
                var r = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, r);
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
                c = this.pow(t, n.addn(1).iushrn(1)),
                p = this.pow(t, n),
                d = s;
              while (0 !== p.cmp(h)) {
                for (var m = p, y = 0; 0 !== m.cmp(h); y++) m = m.redSqr();
                i(y < d);
                var v = this.pow(f, new o(1).iushln(d - y - 1));
                ((c = c.redMul(v)),
                  (f = v.redSqr()),
                  (p = p.redMul(f)),
                  (d = y));
              }
              return c;
            }),
            (S.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (S.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1);
              if (0 === e.cmpn(1)) return t.clone();
              var r = 4,
                i = new Array(1 << r);
              ((i[0] = new o(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var s = i[0],
                h = 0,
                u = 0,
                a = e.bitLength() % 26;
              for (0 === a && (a = 26), n = e.length - 1; n >= 0; n--) {
                for (var l = e.words[n], f = a - 1; f >= 0; f--) {
                  var c = (l >> f) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== c || 0 !== h
                      ? ((h <<= 1),
                        (h |= c),
                        u++,
                        (u === r || (0 === n && 0 === f)) &&
                          ((s = this.mul(s, i[h])), (u = 0), (h = 0)))
                      : (u = 0));
                }
                a = 26;
              }
              return s;
            }),
            (S.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (S.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (o.mont = function (t) {
              return new x(t);
            }),
            n(x, S),
            (x.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (x.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (x.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var r = t.imul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                o = n;
              return (
                n.cmp(this.m) >= 0
                  ? (o = n.isub(this.m))
                  : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (x.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
              var r = t.mul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (x.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, r(20)(t));
    },
    1884: function (t, e, r) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function i(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function n(t, e) {
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
                : r(1885).Buffer;
          } catch (I) {}
          function h(t, e) {
            var r = t.charCodeAt(e);
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
                ? r - 55
                : r >= 97 && r <= 102
                  ? r - 87
                  : void i(!1, "Invalid character in " + t);
          }
          function u(t, e, r) {
            var i = h(t, r);
            return (r - 1 >= e && (i |= h(t, r - 1) << 4), i);
          }
          function a(t, e, r, n) {
            for (
              var o = 0, s = 0, h = Math.min(t.length, r), u = e;
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
                i(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var n = 0;
              ("-" === t[0] && (n++, (this.negative = 1)),
                n < t.length &&
                  (16 === e
                    ? this._parseHex(t, n, r)
                    : (this._parseBase(t, e, n),
                      "le" === r && this._initArray(this.toArray(), e, r))));
            }),
            (o.prototype._initNumber = function (t, e, r) {
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
                "le" === r && this._initArray(this.toArray(), e, r));
            }),
            (o.prototype._initArray = function (t, e, r) {
              if ((i("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var o,
                s,
                h = 0;
              if ("be" === r)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                  ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[o] |= (s << h) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - h)) & 67108863),
                    (h += 24),
                    h >= 26 && ((h -= 26), o++));
              else if ("le" === r)
                for (n = 0, o = 0; n < t.length; n += 3)
                  ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[o] |= (s << h) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - h)) & 67108863),
                    (h += 24),
                    h >= 26 && ((h -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, e, r) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var n,
                o = 0,
                s = 0;
              if ("be" === r)
                for (i = t.length - 1; i >= e; i -= 2)
                  ((n = u(t, e, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var h = t.length - e;
                for (i = h % 2 === 0 ? e + 1 : e; i < t.length; i += 2)
                  ((n = u(t, e, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (t, e, r) {
              ((this.words = [0]), (this.length = 1));
              for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
              (i--, (n = (n / e) | 0));
              for (
                var o = t.length - r,
                  s = o % i,
                  h = Math.min(o, o - s) + r,
                  u = 0,
                  l = r;
                l < h;
                l += i
              )
                ((u = a(t, l, l + i, e)),
                  this.imuln(n),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              if (0 !== s) {
                var f = 1;
                for (u = a(t, l, t.length, e), l = 0; l < s; l++) f *= e;
                (this.imuln(f),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
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
            } catch (I) {
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
            p = [
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
          ((o.prototype.toString = function (t, e) {
            var r;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              r = "";
              for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var h = this.words[s],
                  u = (16777215 & ((h << n) | o)).toString(16);
                ((o = (h >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (r =
                    0 !== o || s !== this.length - 1
                      ? c[6 - u.length] + u + r
                      : u + r));
              }
              0 !== o && (r = o.toString(16) + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var a = p[t],
                l = d[t];
              r = "";
              var f = this.clone();
              f.negative = 0;
              while (!f.isZero()) {
                var m = f.modrn(l).toString(t);
                ((f = f.idivn(l)),
                  (r = f.isZero() ? m + r : c[a - m.length] + m + r));
              }
              this.isZero() && (r = "0" + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
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
              (o.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(s, t, e);
              }),
            (o.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }));
          var m = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function y(t) {
            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
              var i = (r / 26) | 0,
                n = r % 26;
              e[r] = (t.words[i] >>> n) & 1;
            }
            return e;
          }
          function v(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var i = (t.length + e.length) | 0;
            ((r.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | e.words[0],
              s = n * o,
              h = 67108863 & s,
              u = (s / 67108864) | 0;
            r.words[0] = h;
            for (var a = 1; a < i; a++) {
              for (
                var l = u >>> 26,
                  f = 67108863 & u,
                  c = Math.min(a, e.length - 1),
                  p = Math.max(0, a - t.length + 1);
                p <= c;
                p++
              ) {
                var d = (a - p) | 0;
                ((n = 0 | t.words[d]),
                  (o = 0 | e.words[p]),
                  (s = n * o + f),
                  (l += (s / 67108864) | 0),
                  (f = 67108863 & s));
              }
              ((r.words[a] = 0 | f), (u = 0 | l));
            }
            return (0 !== u ? (r.words[a] = 0 | u) : r.length--, r._strip());
          }
          ((o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var n = this.byteLength(),
              o = r || Math.max(1, n);
            (i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"));
            var s = m(t, o),
              h = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + h](s, n), s);
          }),
            (o.prototype._toArrayLikeLE = function (t, e) {
              for (var r = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                var s = (this.words[n] << o) | i;
                ((t[r++] = 255 & s),
                  r < t.length && (t[r++] = (s >> 8) & 255),
                  r < t.length && (t[r++] = (s >> 16) & 255),
                  6 === o
                    ? (r < t.length && (t[r++] = (s >> 24) & 255),
                      (i = 0),
                      (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (r < t.length) {
                t[r++] = i;
                while (r < t.length) t[r++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (t, e) {
              for (
                var r = t.length - 1, i = 0, n = 0, o = 0;
                n < this.length;
                n++
              ) {
                var s = (this.words[n] << o) | i;
                ((t[r--] = 255 & s),
                  r >= 0 && (t[r--] = (s >> 8) & 255),
                  r >= 0 && (t[r--] = (s >> 16) & 255),
                  6 === o
                    ? (r >= 0 && (t[r--] = (s >> 24) & 255), (i = 0), (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (r >= 0) {
                t[r--] = i;
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
              var e;
              e = this.length > t.length ? t : this;
              for (var r = 0; r < e.length; r++)
                this.words[r] = this.words[r] & t.words[r];
              return ((this.length = e.length), this._strip());
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
              var e, r;
              this.length > t.length
                ? ((e = this), (r = t))
                : ((e = t), (r = this));
              for (var i = 0; i < r.length; i++)
                this.words[i] = e.words[i] ^ r.words[i];
              if (this !== e)
                for (; i < e.length; i++) this.words[i] = e.words[i];
              return ((this.length = e.length), this._strip());
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
              var e = 0 | Math.ceil(t / 26),
                r = t % 26;
              (this._expand(e), r > 0 && e--);
              for (var n = 0; n < e; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                r > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              i("number" === typeof t && t >= 0);
              var r = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = e
                  ? this.words[r] | (1 << n)
                  : this.words[r] & ~(1 << n)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, r, i;
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
                ? ((r = this), (i = t))
                : ((r = t), (i = this));
              for (var n = 0, o = 0; o < i.length; o++)
                ((e = (0 | r.words[o]) + (0 | i.words[o]) + n),
                  (this.words[o] = 67108863 & e),
                  (n = e >>> 26));
              for (; 0 !== n && o < r.length; o++)
                ((e = (0 | r.words[o]) + n),
                  (this.words[o] = 67108863 & e),
                  (n = e >>> 26));
              if (((this.length = r.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
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
                i,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((r = this), (i = t)) : ((r = t), (i = this));
              for (var o = 0, s = 0; s < i.length; s++)
                ((e = (0 | r.words[s]) - (0 | i.words[s]) + o),
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
          var g = function (t, e, r) {
            var i,
              n,
              o,
              s = t.words,
              h = e.words,
              u = r.words,
              a = 0,
              l = 0 | s[0],
              f = 8191 & l,
              c = l >>> 13,
              p = 0 | s[1],
              d = 8191 & p,
              m = p >>> 13,
              y = 0 | s[2],
              v = 8191 & y,
              g = y >>> 13,
              w = 0 | s[3],
              M = 8191 & w,
              b = w >>> 13,
              _ = 0 | s[4],
              A = 8191 & _,
              S = _ >>> 13,
              x = 0 | s[5],
              E = 8191 & x,
              k = x >>> 13,
              B = 0 | s[6],
              P = 8191 & B,
              I = B >>> 13,
              O = 0 | s[7],
              L = 8191 & O,
              R = O >>> 13,
              T = 0 | s[8],
              N = 8191 & T,
              K = T >>> 13,
              j = 0 | s[9],
              C = 8191 & j,
              U = j >>> 13,
              F = 0 | h[0],
              H = 8191 & F,
              z = F >>> 13,
              Z = 0 | h[1],
              q = 8191 & Z,
              V = Z >>> 13,
              D = 0 | h[2],
              W = 8191 & D,
              G = D >>> 13,
              $ = 0 | h[3],
              Y = 8191 & $,
              J = $ >>> 13,
              X = 0 | h[4],
              Q = 8191 & X,
              tt = X >>> 13,
              et = 0 | h[5],
              rt = 8191 & et,
              it = et >>> 13,
              nt = 0 | h[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              ht = 0 | h[7],
              ut = 8191 & ht,
              at = ht >>> 13,
              lt = 0 | h[8],
              ft = 8191 & lt,
              ct = lt >>> 13,
              pt = 0 | h[9],
              dt = 8191 & pt,
              mt = pt >>> 13;
            ((r.negative = t.negative ^ e.negative),
              (r.length = 19),
              (i = Math.imul(f, H)),
              (n = Math.imul(f, z)),
              (n = (n + Math.imul(c, H)) | 0),
              (o = Math.imul(c, z)));
            var yt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(d, H)),
              (n = Math.imul(d, z)),
              (n = (n + Math.imul(m, H)) | 0),
              (o = Math.imul(m, z)),
              (i = (i + Math.imul(f, q)) | 0),
              (n = (n + Math.imul(f, V)) | 0),
              (n = (n + Math.imul(c, q)) | 0),
              (o = (o + Math.imul(c, V)) | 0));
            var vt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(v, H)),
              (n = Math.imul(v, z)),
              (n = (n + Math.imul(g, H)) | 0),
              (o = Math.imul(g, z)),
              (i = (i + Math.imul(d, q)) | 0),
              (n = (n + Math.imul(d, V)) | 0),
              (n = (n + Math.imul(m, q)) | 0),
              (o = (o + Math.imul(m, V)) | 0),
              (i = (i + Math.imul(f, W)) | 0),
              (n = (n + Math.imul(f, G)) | 0),
              (n = (n + Math.imul(c, W)) | 0),
              (o = (o + Math.imul(c, G)) | 0));
            var gt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (i = Math.imul(M, H)),
              (n = Math.imul(M, z)),
              (n = (n + Math.imul(b, H)) | 0),
              (o = Math.imul(b, z)),
              (i = (i + Math.imul(v, q)) | 0),
              (n = (n + Math.imul(v, V)) | 0),
              (n = (n + Math.imul(g, q)) | 0),
              (o = (o + Math.imul(g, V)) | 0),
              (i = (i + Math.imul(d, W)) | 0),
              (n = (n + Math.imul(d, G)) | 0),
              (n = (n + Math.imul(m, W)) | 0),
              (o = (o + Math.imul(m, G)) | 0),
              (i = (i + Math.imul(f, Y)) | 0),
              (n = (n + Math.imul(f, J)) | 0),
              (n = (n + Math.imul(c, Y)) | 0),
              (o = (o + Math.imul(c, J)) | 0));
            var wt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(A, H)),
              (n = Math.imul(A, z)),
              (n = (n + Math.imul(S, H)) | 0),
              (o = Math.imul(S, z)),
              (i = (i + Math.imul(M, q)) | 0),
              (n = (n + Math.imul(M, V)) | 0),
              (n = (n + Math.imul(b, q)) | 0),
              (o = (o + Math.imul(b, V)) | 0),
              (i = (i + Math.imul(v, W)) | 0),
              (n = (n + Math.imul(v, G)) | 0),
              (n = (n + Math.imul(g, W)) | 0),
              (o = (o + Math.imul(g, G)) | 0),
              (i = (i + Math.imul(d, Y)) | 0),
              (n = (n + Math.imul(d, J)) | 0),
              (n = (n + Math.imul(m, Y)) | 0),
              (o = (o + Math.imul(m, J)) | 0),
              (i = (i + Math.imul(f, Q)) | 0),
              (n = (n + Math.imul(f, tt)) | 0),
              (n = (n + Math.imul(c, Q)) | 0),
              (o = (o + Math.imul(c, tt)) | 0));
            var Mt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(E, H)),
              (n = Math.imul(E, z)),
              (n = (n + Math.imul(k, H)) | 0),
              (o = Math.imul(k, z)),
              (i = (i + Math.imul(A, q)) | 0),
              (n = (n + Math.imul(A, V)) | 0),
              (n = (n + Math.imul(S, q)) | 0),
              (o = (o + Math.imul(S, V)) | 0),
              (i = (i + Math.imul(M, W)) | 0),
              (n = (n + Math.imul(M, G)) | 0),
              (n = (n + Math.imul(b, W)) | 0),
              (o = (o + Math.imul(b, G)) | 0),
              (i = (i + Math.imul(v, Y)) | 0),
              (n = (n + Math.imul(v, J)) | 0),
              (n = (n + Math.imul(g, Y)) | 0),
              (o = (o + Math.imul(g, J)) | 0),
              (i = (i + Math.imul(d, Q)) | 0),
              (n = (n + Math.imul(d, tt)) | 0),
              (n = (n + Math.imul(m, Q)) | 0),
              (o = (o + Math.imul(m, tt)) | 0),
              (i = (i + Math.imul(f, rt)) | 0),
              (n = (n + Math.imul(f, it)) | 0),
              (n = (n + Math.imul(c, rt)) | 0),
              (o = (o + Math.imul(c, it)) | 0));
            var bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(P, H)),
              (n = Math.imul(P, z)),
              (n = (n + Math.imul(I, H)) | 0),
              (o = Math.imul(I, z)),
              (i = (i + Math.imul(E, q)) | 0),
              (n = (n + Math.imul(E, V)) | 0),
              (n = (n + Math.imul(k, q)) | 0),
              (o = (o + Math.imul(k, V)) | 0),
              (i = (i + Math.imul(A, W)) | 0),
              (n = (n + Math.imul(A, G)) | 0),
              (n = (n + Math.imul(S, W)) | 0),
              (o = (o + Math.imul(S, G)) | 0),
              (i = (i + Math.imul(M, Y)) | 0),
              (n = (n + Math.imul(M, J)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (o = (o + Math.imul(b, J)) | 0),
              (i = (i + Math.imul(v, Q)) | 0),
              (n = (n + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(g, Q)) | 0),
              (o = (o + Math.imul(g, tt)) | 0),
              (i = (i + Math.imul(d, rt)) | 0),
              (n = (n + Math.imul(d, it)) | 0),
              (n = (n + Math.imul(m, rt)) | 0),
              (o = (o + Math.imul(m, it)) | 0),
              (i = (i + Math.imul(f, ot)) | 0),
              (n = (n + Math.imul(f, st)) | 0),
              (n = (n + Math.imul(c, ot)) | 0),
              (o = (o + Math.imul(c, st)) | 0));
            var _t = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(L, H)),
              (n = Math.imul(L, z)),
              (n = (n + Math.imul(R, H)) | 0),
              (o = Math.imul(R, z)),
              (i = (i + Math.imul(P, q)) | 0),
              (n = (n + Math.imul(P, V)) | 0),
              (n = (n + Math.imul(I, q)) | 0),
              (o = (o + Math.imul(I, V)) | 0),
              (i = (i + Math.imul(E, W)) | 0),
              (n = (n + Math.imul(E, G)) | 0),
              (n = (n + Math.imul(k, W)) | 0),
              (o = (o + Math.imul(k, G)) | 0),
              (i = (i + Math.imul(A, Y)) | 0),
              (n = (n + Math.imul(A, J)) | 0),
              (n = (n + Math.imul(S, Y)) | 0),
              (o = (o + Math.imul(S, J)) | 0),
              (i = (i + Math.imul(M, Q)) | 0),
              (n = (n + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(b, Q)) | 0),
              (o = (o + Math.imul(b, tt)) | 0),
              (i = (i + Math.imul(v, rt)) | 0),
              (n = (n + Math.imul(v, it)) | 0),
              (n = (n + Math.imul(g, rt)) | 0),
              (o = (o + Math.imul(g, it)) | 0),
              (i = (i + Math.imul(d, ot)) | 0),
              (n = (n + Math.imul(d, st)) | 0),
              (n = (n + Math.imul(m, ot)) | 0),
              (o = (o + Math.imul(m, st)) | 0),
              (i = (i + Math.imul(f, ut)) | 0),
              (n = (n + Math.imul(f, at)) | 0),
              (n = (n + Math.imul(c, ut)) | 0),
              (o = (o + Math.imul(c, at)) | 0));
            var At = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(N, H)),
              (n = Math.imul(N, z)),
              (n = (n + Math.imul(K, H)) | 0),
              (o = Math.imul(K, z)),
              (i = (i + Math.imul(L, q)) | 0),
              (n = (n + Math.imul(L, V)) | 0),
              (n = (n + Math.imul(R, q)) | 0),
              (o = (o + Math.imul(R, V)) | 0),
              (i = (i + Math.imul(P, W)) | 0),
              (n = (n + Math.imul(P, G)) | 0),
              (n = (n + Math.imul(I, W)) | 0),
              (o = (o + Math.imul(I, G)) | 0),
              (i = (i + Math.imul(E, Y)) | 0),
              (n = (n + Math.imul(E, J)) | 0),
              (n = (n + Math.imul(k, Y)) | 0),
              (o = (o + Math.imul(k, J)) | 0),
              (i = (i + Math.imul(A, Q)) | 0),
              (n = (n + Math.imul(A, tt)) | 0),
              (n = (n + Math.imul(S, Q)) | 0),
              (o = (o + Math.imul(S, tt)) | 0),
              (i = (i + Math.imul(M, rt)) | 0),
              (n = (n + Math.imul(M, it)) | 0),
              (n = (n + Math.imul(b, rt)) | 0),
              (o = (o + Math.imul(b, it)) | 0),
              (i = (i + Math.imul(v, ot)) | 0),
              (n = (n + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(g, ot)) | 0),
              (o = (o + Math.imul(g, st)) | 0),
              (i = (i + Math.imul(d, ut)) | 0),
              (n = (n + Math.imul(d, at)) | 0),
              (n = (n + Math.imul(m, ut)) | 0),
              (o = (o + Math.imul(m, at)) | 0),
              (i = (i + Math.imul(f, ft)) | 0),
              (n = (n + Math.imul(f, ct)) | 0),
              (n = (n + Math.imul(c, ft)) | 0),
              (o = (o + Math.imul(c, ct)) | 0));
            var St = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(C, H)),
              (n = Math.imul(C, z)),
              (n = (n + Math.imul(U, H)) | 0),
              (o = Math.imul(U, z)),
              (i = (i + Math.imul(N, q)) | 0),
              (n = (n + Math.imul(N, V)) | 0),
              (n = (n + Math.imul(K, q)) | 0),
              (o = (o + Math.imul(K, V)) | 0),
              (i = (i + Math.imul(L, W)) | 0),
              (n = (n + Math.imul(L, G)) | 0),
              (n = (n + Math.imul(R, W)) | 0),
              (o = (o + Math.imul(R, G)) | 0),
              (i = (i + Math.imul(P, Y)) | 0),
              (n = (n + Math.imul(P, J)) | 0),
              (n = (n + Math.imul(I, Y)) | 0),
              (o = (o + Math.imul(I, J)) | 0),
              (i = (i + Math.imul(E, Q)) | 0),
              (n = (n + Math.imul(E, tt)) | 0),
              (n = (n + Math.imul(k, Q)) | 0),
              (o = (o + Math.imul(k, tt)) | 0),
              (i = (i + Math.imul(A, rt)) | 0),
              (n = (n + Math.imul(A, it)) | 0),
              (n = (n + Math.imul(S, rt)) | 0),
              (o = (o + Math.imul(S, it)) | 0),
              (i = (i + Math.imul(M, ot)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (o = (o + Math.imul(b, st)) | 0),
              (i = (i + Math.imul(v, ut)) | 0),
              (n = (n + Math.imul(v, at)) | 0),
              (n = (n + Math.imul(g, ut)) | 0),
              (o = (o + Math.imul(g, at)) | 0),
              (i = (i + Math.imul(d, ft)) | 0),
              (n = (n + Math.imul(d, ct)) | 0),
              (n = (n + Math.imul(m, ft)) | 0),
              (o = (o + Math.imul(m, ct)) | 0),
              (i = (i + Math.imul(f, dt)) | 0),
              (n = (n + Math.imul(f, mt)) | 0),
              (n = (n + Math.imul(c, dt)) | 0),
              (o = (o + Math.imul(c, mt)) | 0));
            var xt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(C, q)),
              (n = Math.imul(C, V)),
              (n = (n + Math.imul(U, q)) | 0),
              (o = Math.imul(U, V)),
              (i = (i + Math.imul(N, W)) | 0),
              (n = (n + Math.imul(N, G)) | 0),
              (n = (n + Math.imul(K, W)) | 0),
              (o = (o + Math.imul(K, G)) | 0),
              (i = (i + Math.imul(L, Y)) | 0),
              (n = (n + Math.imul(L, J)) | 0),
              (n = (n + Math.imul(R, Y)) | 0),
              (o = (o + Math.imul(R, J)) | 0),
              (i = (i + Math.imul(P, Q)) | 0),
              (n = (n + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(I, Q)) | 0),
              (o = (o + Math.imul(I, tt)) | 0),
              (i = (i + Math.imul(E, rt)) | 0),
              (n = (n + Math.imul(E, it)) | 0),
              (n = (n + Math.imul(k, rt)) | 0),
              (o = (o + Math.imul(k, it)) | 0),
              (i = (i + Math.imul(A, ot)) | 0),
              (n = (n + Math.imul(A, st)) | 0),
              (n = (n + Math.imul(S, ot)) | 0),
              (o = (o + Math.imul(S, st)) | 0),
              (i = (i + Math.imul(M, ut)) | 0),
              (n = (n + Math.imul(M, at)) | 0),
              (n = (n + Math.imul(b, ut)) | 0),
              (o = (o + Math.imul(b, at)) | 0),
              (i = (i + Math.imul(v, ft)) | 0),
              (n = (n + Math.imul(v, ct)) | 0),
              (n = (n + Math.imul(g, ft)) | 0),
              (o = (o + Math.imul(g, ct)) | 0),
              (i = (i + Math.imul(d, dt)) | 0),
              (n = (n + Math.imul(d, mt)) | 0),
              (n = (n + Math.imul(m, dt)) | 0),
              (o = (o + Math.imul(m, mt)) | 0));
            var Et = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(C, W)),
              (n = Math.imul(C, G)),
              (n = (n + Math.imul(U, W)) | 0),
              (o = Math.imul(U, G)),
              (i = (i + Math.imul(N, Y)) | 0),
              (n = (n + Math.imul(N, J)) | 0),
              (n = (n + Math.imul(K, Y)) | 0),
              (o = (o + Math.imul(K, J)) | 0),
              (i = (i + Math.imul(L, Q)) | 0),
              (n = (n + Math.imul(L, tt)) | 0),
              (n = (n + Math.imul(R, Q)) | 0),
              (o = (o + Math.imul(R, tt)) | 0),
              (i = (i + Math.imul(P, rt)) | 0),
              (n = (n + Math.imul(P, it)) | 0),
              (n = (n + Math.imul(I, rt)) | 0),
              (o = (o + Math.imul(I, it)) | 0),
              (i = (i + Math.imul(E, ot)) | 0),
              (n = (n + Math.imul(E, st)) | 0),
              (n = (n + Math.imul(k, ot)) | 0),
              (o = (o + Math.imul(k, st)) | 0),
              (i = (i + Math.imul(A, ut)) | 0),
              (n = (n + Math.imul(A, at)) | 0),
              (n = (n + Math.imul(S, ut)) | 0),
              (o = (o + Math.imul(S, at)) | 0),
              (i = (i + Math.imul(M, ft)) | 0),
              (n = (n + Math.imul(M, ct)) | 0),
              (n = (n + Math.imul(b, ft)) | 0),
              (o = (o + Math.imul(b, ct)) | 0),
              (i = (i + Math.imul(v, dt)) | 0),
              (n = (n + Math.imul(v, mt)) | 0),
              (n = (n + Math.imul(g, dt)) | 0),
              (o = (o + Math.imul(g, mt)) | 0));
            var kt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (i = Math.imul(C, Y)),
              (n = Math.imul(C, J)),
              (n = (n + Math.imul(U, Y)) | 0),
              (o = Math.imul(U, J)),
              (i = (i + Math.imul(N, Q)) | 0),
              (n = (n + Math.imul(N, tt)) | 0),
              (n = (n + Math.imul(K, Q)) | 0),
              (o = (o + Math.imul(K, tt)) | 0),
              (i = (i + Math.imul(L, rt)) | 0),
              (n = (n + Math.imul(L, it)) | 0),
              (n = (n + Math.imul(R, rt)) | 0),
              (o = (o + Math.imul(R, it)) | 0),
              (i = (i + Math.imul(P, ot)) | 0),
              (n = (n + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(I, ot)) | 0),
              (o = (o + Math.imul(I, st)) | 0),
              (i = (i + Math.imul(E, ut)) | 0),
              (n = (n + Math.imul(E, at)) | 0),
              (n = (n + Math.imul(k, ut)) | 0),
              (o = (o + Math.imul(k, at)) | 0),
              (i = (i + Math.imul(A, ft)) | 0),
              (n = (n + Math.imul(A, ct)) | 0),
              (n = (n + Math.imul(S, ft)) | 0),
              (o = (o + Math.imul(S, ct)) | 0),
              (i = (i + Math.imul(M, dt)) | 0),
              (n = (n + Math.imul(M, mt)) | 0),
              (n = (n + Math.imul(b, dt)) | 0),
              (o = (o + Math.imul(b, mt)) | 0));
            var Bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (i = Math.imul(C, Q)),
              (n = Math.imul(C, tt)),
              (n = (n + Math.imul(U, Q)) | 0),
              (o = Math.imul(U, tt)),
              (i = (i + Math.imul(N, rt)) | 0),
              (n = (n + Math.imul(N, it)) | 0),
              (n = (n + Math.imul(K, rt)) | 0),
              (o = (o + Math.imul(K, it)) | 0),
              (i = (i + Math.imul(L, ot)) | 0),
              (n = (n + Math.imul(L, st)) | 0),
              (n = (n + Math.imul(R, ot)) | 0),
              (o = (o + Math.imul(R, st)) | 0),
              (i = (i + Math.imul(P, ut)) | 0),
              (n = (n + Math.imul(P, at)) | 0),
              (n = (n + Math.imul(I, ut)) | 0),
              (o = (o + Math.imul(I, at)) | 0),
              (i = (i + Math.imul(E, ft)) | 0),
              (n = (n + Math.imul(E, ct)) | 0),
              (n = (n + Math.imul(k, ft)) | 0),
              (o = (o + Math.imul(k, ct)) | 0),
              (i = (i + Math.imul(A, dt)) | 0),
              (n = (n + Math.imul(A, mt)) | 0),
              (n = (n + Math.imul(S, dt)) | 0),
              (o = (o + Math.imul(S, mt)) | 0));
            var Pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(C, rt)),
              (n = Math.imul(C, it)),
              (n = (n + Math.imul(U, rt)) | 0),
              (o = Math.imul(U, it)),
              (i = (i + Math.imul(N, ot)) | 0),
              (n = (n + Math.imul(N, st)) | 0),
              (n = (n + Math.imul(K, ot)) | 0),
              (o = (o + Math.imul(K, st)) | 0),
              (i = (i + Math.imul(L, ut)) | 0),
              (n = (n + Math.imul(L, at)) | 0),
              (n = (n + Math.imul(R, ut)) | 0),
              (o = (o + Math.imul(R, at)) | 0),
              (i = (i + Math.imul(P, ft)) | 0),
              (n = (n + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(I, ft)) | 0),
              (o = (o + Math.imul(I, ct)) | 0),
              (i = (i + Math.imul(E, dt)) | 0),
              (n = (n + Math.imul(E, mt)) | 0),
              (n = (n + Math.imul(k, dt)) | 0),
              (o = (o + Math.imul(k, mt)) | 0));
            var It = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (i = Math.imul(C, ot)),
              (n = Math.imul(C, st)),
              (n = (n + Math.imul(U, ot)) | 0),
              (o = Math.imul(U, st)),
              (i = (i + Math.imul(N, ut)) | 0),
              (n = (n + Math.imul(N, at)) | 0),
              (n = (n + Math.imul(K, ut)) | 0),
              (o = (o + Math.imul(K, at)) | 0),
              (i = (i + Math.imul(L, ft)) | 0),
              (n = (n + Math.imul(L, ct)) | 0),
              (n = (n + Math.imul(R, ft)) | 0),
              (o = (o + Math.imul(R, ct)) | 0),
              (i = (i + Math.imul(P, dt)) | 0),
              (n = (n + Math.imul(P, mt)) | 0),
              (n = (n + Math.imul(I, dt)) | 0),
              (o = (o + Math.imul(I, mt)) | 0));
            var Ot = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(C, ut)),
              (n = Math.imul(C, at)),
              (n = (n + Math.imul(U, ut)) | 0),
              (o = Math.imul(U, at)),
              (i = (i + Math.imul(N, ft)) | 0),
              (n = (n + Math.imul(N, ct)) | 0),
              (n = (n + Math.imul(K, ft)) | 0),
              (o = (o + Math.imul(K, ct)) | 0),
              (i = (i + Math.imul(L, dt)) | 0),
              (n = (n + Math.imul(L, mt)) | 0),
              (n = (n + Math.imul(R, dt)) | 0),
              (o = (o + Math.imul(R, mt)) | 0));
            var Lt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Lt >>> 26)) | 0),
              (Lt &= 67108863),
              (i = Math.imul(C, ft)),
              (n = Math.imul(C, ct)),
              (n = (n + Math.imul(U, ft)) | 0),
              (o = Math.imul(U, ct)),
              (i = (i + Math.imul(N, dt)) | 0),
              (n = (n + Math.imul(N, mt)) | 0),
              (n = (n + Math.imul(K, dt)) | 0),
              (o = (o + Math.imul(K, mt)) | 0));
            var Rt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(C, dt)),
              (n = Math.imul(C, mt)),
              (n = (n + Math.imul(U, dt)) | 0),
              (o = Math.imul(U, mt)));
            var Tt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (a = (((o + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (u[0] = yt),
              (u[1] = vt),
              (u[2] = gt),
              (u[3] = wt),
              (u[4] = Mt),
              (u[5] = bt),
              (u[6] = _t),
              (u[7] = At),
              (u[8] = St),
              (u[9] = xt),
              (u[10] = Et),
              (u[11] = kt),
              (u[12] = Bt),
              (u[13] = Pt),
              (u[14] = It),
              (u[15] = Ot),
              (u[16] = Lt),
              (u[17] = Rt),
              (u[18] = Tt),
              0 !== a && ((u[19] = a), r.length++),
              r
            );
          };
          function w(t, e, r) {
            ((r.negative = e.negative ^ t.negative),
              (r.length = t.length + e.length));
            for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
              var s = n;
              n = 0;
              for (
                var h = 67108863 & i,
                  u = Math.min(o, e.length - 1),
                  a = Math.max(0, o - t.length + 1);
                a <= u;
                a++
              ) {
                var l = o - a,
                  f = 0 | t.words[l],
                  c = 0 | e.words[a],
                  p = f * c,
                  d = 67108863 & p;
                ((s = (s + ((p / 67108864) | 0)) | 0),
                  (d = (d + h) | 0),
                  (h = 67108863 & d),
                  (s = (s + (d >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((r.words[o] = h), (i = s), (s = n));
            }
            return (0 !== i ? (r.words[o] = i) : r.length--, r._strip());
          }
          function M(t, e, r) {
            return w(t, e, r);
          }
          function b(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (g = v),
            (o.prototype.mulTo = function (t, e) {
              var r,
                i = this.length + t.length;
              return (
                (r =
                  10 === this.length && 10 === t.length
                    ? g(this, t, e)
                    : i < 63
                      ? v(this, t, e)
                      : i < 1024
                        ? w(this, t, e)
                        : M(this, t, e)),
                r
              );
            }),
            (b.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), r = o.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                e[i] = this.revBin(i, r, t);
              return e;
            }),
            (b.prototype.revBin = function (t, e, r) {
              if (0 === t || t === r - 1) return t;
              for (var i = 0, n = 0; n < e; n++)
                ((i |= (1 & t) << (e - n - 1)), (t >>= 1));
              return i;
            }),
            (b.prototype.permute = function (t, e, r, i, n, o) {
              for (var s = 0; s < o; s++) ((i[s] = e[t[s]]), (n[s] = r[t[s]]));
            }),
            (b.prototype.transform = function (t, e, r, i, n, o) {
              this.permute(o, t, e, r, i, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var h = s << 1,
                    u = Math.cos((2 * Math.PI) / h),
                    a = Math.sin((2 * Math.PI) / h),
                    l = 0;
                  l < n;
                  l += h
                )
                  for (var f = u, c = a, p = 0; p < s; p++) {
                    var d = r[l + p],
                      m = i[l + p],
                      y = r[l + p + s],
                      v = i[l + p + s],
                      g = f * y - c * v;
                    ((v = f * v + c * y),
                      (y = g),
                      (r[l + p] = d + y),
                      (i[l + p] = m + v),
                      (r[l + p + s] = d - y),
                      (i[l + p + s] = m - v),
                      p !== h &&
                        ((g = u * f - a * c), (c = u * c + a * f), (f = g)));
                  }
            }),
            (b.prototype.guessLen13b = function (t, e) {
              var r = 1 | Math.max(e, t),
                i = 1 & r,
                n = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (b.prototype.conjugate = function (t, e, r) {
              if (!(r <= 1))
                for (var i = 0; i < r / 2; i++) {
                  var n = t[i];
                  ((t[i] = t[r - i - 1]),
                    (t[r - i - 1] = n),
                    (n = e[i]),
                    (e[i] = -e[r - i - 1]),
                    (e[r - i - 1] = -n));
                }
            }),
            (b.prototype.normalize13b = function (t, e) {
              for (var r = 0, i = 0; i < e / 2; i++) {
                var n =
                  8192 * Math.round(t[2 * i + 1] / e) +
                  Math.round(t[2 * i] / e) +
                  r;
                ((t[i] = 67108863 & n),
                  (r = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (b.prototype.convert13b = function (t, e, r, n) {
              for (var o = 0, s = 0; s < e; s++)
                ((o += 0 | t[s]),
                  (r[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * e; s < n; ++s) r[s] = 0;
              (i(0 === o), i(0 === (-8192 & o)));
            }),
            (b.prototype.stub = function (t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
              return e;
            }),
            (b.prototype.mulp = function (t, e, r) {
              var i = 2 * this.guessLen13b(t.length, e.length),
                n = this.makeRBT(i),
                o = this.stub(i),
                s = new Array(i),
                h = new Array(i),
                u = new Array(i),
                a = new Array(i),
                l = new Array(i),
                f = new Array(i),
                c = r.words;
              ((c.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(e.words, e.length, a, i),
                this.transform(s, o, h, u, i, n),
                this.transform(a, o, l, f, i, n));
              for (var p = 0; p < i; p++) {
                var d = h[p] * l[p] - u[p] * f[p];
                ((u[p] = h[p] * f[p] + u[p] * l[p]), (h[p] = d));
              }
              return (
                this.conjugate(h, u, i),
                this.transform(h, u, c, o, i, n),
                this.conjugate(c, o, i),
                this.normalize13b(c, i),
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
                M(this, t, e)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var e = t < 0;
              (e && (t = -t), i("number" === typeof t), i(t < 67108864));
              for (var r = 0, n = 0; n < this.length; n++) {
                var o = (0 | this.words[n]) * t,
                  s = (67108863 & o) + (67108863 & r);
                ((r >>= 26),
                  (r += (o / 67108864) | 0),
                  (r += s >>> 26),
                  (this.words[n] = 67108863 & s));
              }
              return (
                0 !== r && ((this.words[n] = r), this.length++),
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
              var e = y(t);
              if (0 === e.length) return new o(1);
              for (var r = this, i = 0; i < e.length; i++, r = r.sqr())
                if (0 !== e[i]) break;
              if (++i < e.length)
                for (var n = r.sqr(); i < e.length; i++, n = n.sqr())
                  0 !== e[i] && (r = r.mul(n));
              return r;
            }),
            (o.prototype.iushln = function (t) {
              i("number" === typeof t && t >= 0);
              var e,
                r = t % 26,
                n = (t - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var s = 0;
                for (e = 0; e < this.length; e++) {
                  var h = this.words[e] & o,
                    u = ((0 | this.words[e]) - h) << r;
                  ((this.words[e] = u | s), (s = h >>> (26 - r)));
                }
                s && ((this.words[e] = s), this.length++);
              }
              if (0 !== n) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + n] = this.words[e];
                for (e = 0; e < n; e++) this.words[e] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return (i(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, e, r) {
              var n;
              (i("number" === typeof t && t >= 0),
                (n = e ? (e - (e % 26)) / 26 : 0));
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                h = 67108863 ^ ((67108863 >>> o) << o),
                u = r;
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
            (o.prototype.ishrn = function (t, e, r) {
              return (i(0 === this.negative), this.iushrn(t, e, r));
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
              var e = t % 26,
                r = (t - e) / 26,
                n = 1 << e;
              if (this.length <= r) return !1;
              var o = this.words[r];
              return !!(o & n);
            }),
            (o.prototype.imaskn = function (t) {
              i("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26;
              if (
                (i(
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
                var n = 67108863 ^ ((67108863 >>> e) << e);
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
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
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
              var n,
                o,
                s = t.length + r;
              this._expand(s);
              var h = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + r]) + h;
                var u = (0 | t.words[n]) * e;
                ((o -= 67108863 & u),
                  (h = (o >> 26) - ((u / 67108864) | 0)),
                  (this.words[n + r] = 67108863 & o));
              }
              for (; n < this.length - r; n++)
                ((o = (0 | this.words[n + r]) + h),
                  (h = o >> 26),
                  (this.words[n + r] = 67108863 & o));
              if (0 === h) return this._strip();
              for (i(-1 === h), h = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + h),
                  (h = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, e) {
              var r = this.length - t.length,
                i = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                h = this._countBits(s);
              ((r = 26 - h),
                0 !== r &&
                  ((n = n.ushln(r)),
                  i.iushln(r),
                  (s = 0 | n.words[n.length - 1])));
              var u,
                a = i.length - n.length;
              if ("mod" !== e) {
                ((u = new o(null)),
                  (u.length = a + 1),
                  (u.words = new Array(u.length)));
                for (var l = 0; l < u.length; l++) u.words[l] = 0;
              }
              var f = i.clone()._ishlnsubmul(n, 1, a);
              0 === f.negative && ((i = f), u && (u.words[a] = 1));
              for (var c = a - 1; c >= 0; c--) {
                var p =
                  67108864 * (0 | i.words[n.length + c]) +
                  (0 | i.words[n.length + c - 1]);
                ((p = Math.min((p / s) | 0, 67108863)),
                  i._ishlnsubmul(n, p, c));
                while (0 !== i.negative)
                  (p--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, c),
                    i.isZero() || (i.negative ^= 1));
                u && (u.words[c] = p);
              }
              return (
                u && u._strip(),
                i._strip(),
                "div" !== e && 0 !== r && i.iushrn(r),
                { div: u || null, mod: i }
              );
            }),
            (o.prototype.divmod = function (t, e, r) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((h = this.neg().divmod(t, e)),
                      "mod" !== e && (n = h.div.neg()),
                      "div" !== e &&
                        ((s = h.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((h = this.divmod(t.neg(), e)),
                        "mod" !== e && (n = h.div.neg()),
                        { div: n, mod: h.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((h = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((s = h.mod.neg()),
                            r && 0 !== s.negative && s.isub(t)),
                          { div: h.div, mod: s })
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
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                i = t.ushrn(1),
                n = t.andln(1),
                o = r.cmp(i);
              return o < 0 || (1 === n && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var e = t < 0;
              (e && (t = -t), i(t <= 67108863));
              for (
                var r = (1 << 26) % t, n = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                n = (r * n + (0 | this.words[o])) % t;
              return e ? -n : n;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var e = t < 0;
              (e && (t = -t), i(t <= 67108863));
              for (var r = 0, n = this.length - 1; n >= 0; n--) {
                var o = (0 | this.words[n]) + 67108864 * r;
                ((this.words[n] = (o / t) | 0), (r = o % t));
              }
              return (this._strip(), e ? this.ineg() : this);
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n = new o(1),
                s = new o(0),
                h = new o(0),
                u = new o(1),
                a = 0;
              while (e.isEven() && r.isEven()) (e.iushrn(1), r.iushrn(1), ++a);
              var l = r.clone(),
                f = e.clone();
              while (!e.isZero()) {
                for (
                  var c = 0, p = 1;
                  0 === (e.words[0] & p) && c < 26;
                  ++c, p <<= 1
                );
                if (c > 0) {
                  e.iushrn(c);
                  while (c-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(f)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var d = 0, m = 1;
                  0 === (r.words[0] & m) && d < 26;
                  ++d, m <<= 1
                );
                if (d > 0) {
                  r.iushrn(d);
                  while (d-- > 0)
                    ((h.isOdd() || u.isOdd()) && (h.iadd(l), u.isub(f)),
                      h.iushrn(1),
                      u.iushrn(1));
                }
                e.cmp(r) >= 0
                  ? (e.isub(r), n.isub(h), s.isub(u))
                  : (r.isub(e), h.isub(n), u.isub(s));
              }
              return { a: h, b: u, gcd: r.iushln(a) };
            }),
            (o.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                s = new o(1),
                h = new o(0),
                u = r.clone();
              while (e.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var a = 0, l = 1;
                  0 === (e.words[0] & l) && a < 26;
                  ++a, l <<= 1
                );
                if (a > 0) {
                  e.iushrn(a);
                  while (a-- > 0) (s.isOdd() && s.iadd(u), s.iushrn(1));
                }
                for (
                  var f = 0, c = 1;
                  0 === (r.words[0] & c) && f < 26;
                  ++f, c <<= 1
                );
                if (f > 0) {
                  r.iushrn(f);
                  while (f-- > 0) (h.isOdd() && h.iadd(u), h.iushrn(1));
                }
                e.cmp(r) >= 0 ? (e.isub(r), s.isub(h)) : (r.isub(e), h.isub(s));
              }
              return (
                (n = 0 === e.cmpn(1) ? s : h),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                r = t.clone();
              ((e.negative = 0), (r.negative = 0));
              for (var i = 0; e.isEven() && r.isEven(); i++)
                (e.iushrn(1), r.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (r.isEven()) r.iushrn(1);
                var n = e.cmp(r);
                if (n < 0) {
                  var o = e;
                  ((e = r), (r = o));
                } else if (0 === n || 0 === r.cmpn(1)) break;
                e.isub(r);
              } while (1);
              return r.iushln(i);
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
              var e = t % 26,
                r = (t - e) / 26,
                n = 1 << e;
              if (this.length <= r)
                return (this._expand(r + 1), (this.words[r] |= n), this);
              for (var o = n, s = r; 0 !== o && s < this.length; s++) {
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
              var e,
                r = t < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                (r && (t = -t), i(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                e = n === t ? 0 : n < t ? -1 : 1;
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
                var i = 0 | this.words[r],
                  n = 0 | t.words[r];
                if (i !== n) {
                  i < n ? (e = -1) : i > n && (e = 1);
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
              return new B(t);
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
          function A(t, e) {
            ((this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function S() {
            A.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function x() {
            A.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function E() {
            A.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function k() {
            A.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function B(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function P(t) {
            (B.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((A.prototype._tmp = function () {
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (A.prototype.ireduce = function (t) {
              var e,
                r = t;
              do {
                (this.split(r, this.tmp),
                  (r = this.imulK(r)),
                  (r = r.iadd(this.tmp)),
                  (e = r.bitLength()));
              } while (e > this.n);
              var i = e < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === i
                  ? ((r.words[0] = 0), (r.length = 1))
                  : i > 0
                    ? r.isub(this.p)
                    : void 0 !== r.strip
                      ? r.strip()
                      : r._strip(),
                r
              );
            }),
            (A.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (A.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(S, A),
            (S.prototype.split = function (t, e) {
              for (
                var r = 4194303, i = Math.min(t.length, 9), n = 0;
                n < i;
                n++
              )
                e.words[n] = t.words[n];
              if (((e.length = i), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (e.words[e.length++] = o & r, n = 10; n < t.length; n++) {
                var s = 0 | t.words[n];
                ((t.words[n - 10] = ((s & r) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (t.words[n - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (S.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 0 | t.words[r];
                ((e += 977 * i),
                  (t.words[r] = 67108863 & e),
                  (e = 64 * i + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(x, A),
            n(E, A),
            n(k, A),
            (k.prototype.imulK = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 19 * (0 | t.words[r]) + e,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[r] = n), (e = i));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (o._prime = function (t) {
              if (_[t]) return _[t];
              var e;
              if ("k256" === t) e = new S();
              else if ("p224" === t) e = new x();
              else if ("p192" === t) e = new E();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new k();
              }
              return ((_[t] = e), e);
            }),
            (B.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (B.prototype._verify2 = function (t, e) {
              (i(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (B.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (B.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (B.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (B.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (B.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (B.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (B.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (B.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (B.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (B.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (B.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (B.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((i(e % 2 === 1), 3 === e)) {
                var r = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, r);
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
                c = this.pow(t, n.addn(1).iushrn(1)),
                p = this.pow(t, n),
                d = s;
              while (0 !== p.cmp(h)) {
                for (var m = p, y = 0; 0 !== m.cmp(h); y++) m = m.redSqr();
                i(y < d);
                var v = this.pow(f, new o(1).iushln(d - y - 1));
                ((c = c.redMul(v)),
                  (f = v.redSqr()),
                  (p = p.redMul(f)),
                  (d = y));
              }
              return c;
            }),
            (B.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (B.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var r = 4,
                i = new Array(1 << r);
              ((i[0] = new o(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var s = i[0],
                h = 0,
                u = 0,
                a = e.bitLength() % 26;
              for (0 === a && (a = 26), n = e.length - 1; n >= 0; n--) {
                for (var l = e.words[n], f = a - 1; f >= 0; f--) {
                  var c = (l >> f) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== c || 0 !== h
                      ? ((h <<= 1),
                        (h |= c),
                        u++,
                        (u === r || (0 === n && 0 === f)) &&
                          ((s = this.mul(s, i[h])), (u = 0), (h = 0)))
                      : (u = 0));
                }
                a = 26;
              }
              return s;
            }),
            (B.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (B.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (o.mont = function (t) {
              return new P(t);
            }),
            n(P, B),
            (P.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (P.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (P.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var r = t.imul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                o = n;
              return (
                n.cmp(this.m) >= 0
                  ? (o = n.isub(this.m))
                  : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (P.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
              var r = t.mul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (P.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, r(20)(t));
    },
    189: function (t, e, r) {
      "use strict";
      (function (t) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.assertIsString =
            e.assertIsArray =
            e.assertIsBuffer =
            e.assertIsHexString =
              void 0));
        var i = r(118),
          n = function (t) {
            if (!(0, i.isHexString)(t)) {
              var e =
                "This method only supports 0x-prefixed hex strings but input was: ".concat(
                  t,
                );
              throw new Error(e);
            }
          };
        e.assertIsHexString = n;
        var o = function (e) {
          if (!t.isBuffer(e)) {
            var r = "This method only supports Buffer but input was: ".concat(
              e,
            );
            throw new Error(r);
          }
        };
        e.assertIsBuffer = o;
        var s = function (t) {
          if (!Array.isArray(t)) {
            var e =
              "This method only supports number arrays but input was: ".concat(
                t,
              );
            throw new Error(e);
          }
        };
        e.assertIsArray = s;
        var h = function (t) {
          if ("string" !== typeof t) {
            var e = "This method only supports strings but input was: ".concat(
              t,
            );
            throw new Error(e);
          }
        };
        e.assertIsString = h;
      }).call(this, r(2).Buffer);
    },
    1904: function (t, e, r) {
      "use strict";
      t.exports = Object.getOwnPropertyDescriptor;
    },
    1905: function (t, e, r) {
      "use strict";
      var i = "undefined" !== typeof Symbol && Symbol,
        n = r(648);
      t.exports = function () {
        return (
          "function" === typeof i &&
          "function" === typeof Symbol &&
          "symbol" === typeof i("foo") &&
          "symbol" === typeof Symbol("bar") &&
          n()
        );
      };
    },
    1906: function (t, e, r) {
      "use strict";
      var i = r(649),
        n = r(650),
        o = r(1907);
      t.exports = i
        ? function (t) {
            return i(t);
          }
        : n
          ? function (t) {
              if (!t || ("object" !== typeof t && "function" !== typeof t))
                throw new TypeError("getProto: not an object");
              return n(t);
            }
          : o
            ? function (t) {
                return o(t);
              }
            : null;
    },
    1908: function (t, e, r) {
      "use strict";
      var i = "Function.prototype.bind called on incompatible ",
        n = Object.prototype.toString,
        o = Math.max,
        s = "[object Function]",
        h = function (t, e) {
          for (var r = [], i = 0; i < t.length; i += 1) r[i] = t[i];
          for (var n = 0; n < e.length; n += 1) r[n + t.length] = e[n];
          return r;
        },
        u = function (t, e) {
          for (var r = [], i = e || 0, n = 0; i < t.length; i += 1, n += 1)
            r[n] = t[i];
          return r;
        },
        a = function (t, e) {
          for (var r = "", i = 0; i < t.length; i += 1)
            ((r += t[i]), i + 1 < t.length && (r += e));
          return r;
        };
      t.exports = function (t) {
        var e = this;
        if ("function" !== typeof e || n.apply(e) !== s)
          throw new TypeError(i + e);
        for (
          var r,
            l = u(arguments, 1),
            f = function () {
              if (this instanceof r) {
                var i = e.apply(this, h(l, arguments));
                return Object(i) === i ? i : this;
              }
              return e.apply(t, h(l, arguments));
            },
            c = o(0, e.length - l.length),
            p = [],
            d = 0;
          d < c;
          d++
        )
          p[d] = "$" + d;
        if (
          ((r = Function(
            "binder",
            "return function (" +
              a(p, ",") +
              "){ return binder.apply(this,arguments); }",
          )(f)),
          e.prototype)
        ) {
          var m = function () {};
          ((m.prototype = e.prototype),
            (r.prototype = new m()),
            (m.prototype = null));
        }
        return r;
      };
    },
    1910: function (t, e, r) {
      "use strict";
      var i = Function.prototype.call,
        n = Object.prototype.hasOwnProperty,
        o = r(162);
      t.exports = o.call(i, n);
    },
    1913: function (t, e) {
      const r = {
        IMPOSSIBLE_CASE: "Impossible case. Please create issue.",
        TWEAK_ADD:
          "The tweak was out of range or the resulted private key is invalid",
        TWEAK_MUL: "The tweak was out of range or equal to zero",
        CONTEXT_RANDOMIZE_UNKNOW: "Unknow error on context randomization",
        SECKEY_INVALID: "Private Key is invalid",
        PUBKEY_PARSE: "Public Key could not be parsed",
        PUBKEY_SERIALIZE: "Public Key serialization error",
        PUBKEY_COMBINE: "The sum of the public keys is not valid",
        SIG_PARSE: "Signature could not be parsed",
        SIGN: "The nonce generation function failed, or the private key was invalid",
        RECOVER: "Public key could not be recover",
        ECDH: "Scalar was invalid (zero or overflow)",
      };
      function i(t, e) {
        if (!t) throw new Error(e);
      }
      function n(t, e, r) {
        if (
          (i(e instanceof Uint8Array, `Expected ${t} to be an Uint8Array`),
          void 0 !== r)
        )
          if (Array.isArray(r)) {
            const n = r.join(", "),
              o = `Expected ${t} to be an Uint8Array with length [${n}]`;
            i(r.includes(e.length), o);
          } else {
            const n = `Expected ${t} to be an Uint8Array with length ${r}`;
            i(e.length === r, n);
          }
      }
      function o(t) {
        i("Boolean" === h(t), "Expected compressed to be a Boolean");
      }
      function s(t, e) {
        return (
          void 0 === t && (t = (t) => new Uint8Array(t)),
          "function" === typeof t && (t = t(e)),
          n("output", t, e),
          t
        );
      }
      function h(t) {
        return Object.prototype.toString.call(t).slice(8, -1);
      }
      t.exports = (t) => ({
        contextRandomize(e) {
          switch (
            (i(
              null === e || e instanceof Uint8Array,
              "Expected seed to be an Uint8Array or null",
            ),
            null !== e && n("seed", e, 32),
            t.contextRandomize(e))
          ) {
            case 1:
              throw new Error(r.CONTEXT_RANDOMIZE_UNKNOW);
          }
        },
        privateKeyVerify(e) {
          return (n("private key", e, 32), 0 === t.privateKeyVerify(e));
        },
        privateKeyNegate(e) {
          switch ((n("private key", e, 32), t.privateKeyNegate(e))) {
            case 0:
              return e;
            case 1:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        privateKeyTweakAdd(e, i) {
          switch (
            (n("private key", e, 32),
            n("tweak", i, 32),
            t.privateKeyTweakAdd(e, i))
          ) {
            case 0:
              return e;
            case 1:
              throw new Error(r.TWEAK_ADD);
          }
        },
        privateKeyTweakMul(e, i) {
          switch (
            (n("private key", e, 32),
            n("tweak", i, 32),
            t.privateKeyTweakMul(e, i))
          ) {
            case 0:
              return e;
            case 1:
              throw new Error(r.TWEAK_MUL);
          }
        },
        publicKeyVerify(e) {
          return (n("public key", e, [33, 65]), 0 === t.publicKeyVerify(e));
        },
        publicKeyCreate(e, i, h) {
          switch (
            (void 0 === i && (i = !0),
            n("private key", e, 32),
            o(i),
            (h = s(h, i ? 33 : 65)),
            t.publicKeyCreate(h, e))
          ) {
            case 0:
              return h;
            case 1:
              throw new Error(r.SECKEY_INVALID);
            case 2:
              throw new Error(r.PUBKEY_SERIALIZE);
          }
        },
        publicKeyConvert(e, i, h) {
          switch (
            (void 0 === i && (i = !0),
            n("public key", e, [33, 65]),
            o(i),
            (h = s(h, i ? 33 : 65)),
            t.publicKeyConvert(h, e))
          ) {
            case 0:
              return h;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.PUBKEY_SERIALIZE);
          }
        },
        publicKeyNegate(e, i, h) {
          switch (
            (void 0 === i && (i = !0),
            n("public key", e, [33, 65]),
            o(i),
            (h = s(h, i ? 33 : 65)),
            t.publicKeyNegate(h, e))
          ) {
            case 0:
              return h;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.IMPOSSIBLE_CASE);
            case 3:
              throw new Error(r.PUBKEY_SERIALIZE);
          }
        },
        publicKeyCombine(e, h, u) {
          (void 0 === h && (h = !0),
            i(Array.isArray(e), "Expected public keys to be an Array"),
            i(
              e.length > 0,
              "Expected public keys array will have more than zero items",
            ));
          for (const t of e) n("public key", t, [33, 65]);
          switch ((o(h), (u = s(u, h ? 33 : 65)), t.publicKeyCombine(u, e))) {
            case 0:
              return u;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.PUBKEY_COMBINE);
            case 3:
              throw new Error(r.PUBKEY_SERIALIZE);
          }
        },
        publicKeyTweakAdd(e, i, h, u) {
          switch (
            (void 0 === h && (h = !0),
            n("public key", e, [33, 65]),
            n("tweak", i, 32),
            o(h),
            (u = s(u, h ? 33 : 65)),
            t.publicKeyTweakAdd(u, e, i))
          ) {
            case 0:
              return u;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.TWEAK_ADD);
          }
        },
        publicKeyTweakMul(e, i, h, u) {
          switch (
            (void 0 === h && (h = !0),
            n("public key", e, [33, 65]),
            n("tweak", i, 32),
            o(h),
            (u = s(u, h ? 33 : 65)),
            t.publicKeyTweakMul(u, e, i))
          ) {
            case 0:
              return u;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.TWEAK_MUL);
          }
        },
        signatureNormalize(e) {
          switch ((n("signature", e, 64), t.signatureNormalize(e))) {
            case 0:
              return e;
            case 1:
              throw new Error(r.SIG_PARSE);
          }
        },
        signatureExport(e, i) {
          (n("signature", e, 64), (i = s(i, 72)));
          const o = { output: i, outputlen: 72 };
          switch (t.signatureExport(o, e)) {
            case 0:
              return i.slice(0, o.outputlen);
            case 1:
              throw new Error(r.SIG_PARSE);
            case 2:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        signatureImport(e, i) {
          switch (
            (n("signature", e), (i = s(i, 64)), t.signatureImport(i, e))
          ) {
            case 0:
              return i;
            case 1:
              throw new Error(r.SIG_PARSE);
            case 2:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        ecdsaSign(e, o, u, a) {
          (void 0 === u && (u = {}),
            n("message", e, 32),
            n("private key", o, 32),
            i("Object" === h(u), "Expected options to be an Object"),
            void 0 !== u.data && n("options.data", u.data),
            void 0 !== u.noncefn &&
              i(
                "Function" === h(u.noncefn),
                "Expected options.noncefn to be a Function",
              ),
            (a = s(a, 64)));
          const l = { signature: a, recid: null };
          switch (t.ecdsaSign(l, e, o, u.data, u.noncefn)) {
            case 0:
              return l;
            case 1:
              throw new Error(r.SIGN);
            case 2:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        ecdsaVerify(e, i, o) {
          switch (
            (n("signature", e, 64),
            n("message", i, 32),
            n("public key", o, [33, 65]),
            t.ecdsaVerify(e, i, o))
          ) {
            case 0:
              return !0;
            case 3:
              return !1;
            case 1:
              throw new Error(r.SIG_PARSE);
            case 2:
              throw new Error(r.PUBKEY_PARSE);
          }
        },
        ecdsaRecover(e, u, a, l, f) {
          switch (
            (void 0 === l && (l = !0),
            n("signature", e, 64),
            i(
              "Number" === h(u) && u >= 0 && u <= 3,
              "Expected recovery id to be a Number within interval [0, 3]",
            ),
            n("message", a, 32),
            o(l),
            (f = s(f, l ? 33 : 65)),
            t.ecdsaRecover(f, e, u, a))
          ) {
            case 0:
              return f;
            case 1:
              throw new Error(r.SIG_PARSE);
            case 2:
              throw new Error(r.RECOVER);
            case 3:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        ecdh(e, o, u, a) {
          switch (
            (void 0 === u && (u = {}),
            n("public key", e, [33, 65]),
            n("private key", o, 32),
            i("Object" === h(u), "Expected options to be an Object"),
            void 0 !== u.data && n("options.data", u.data),
            void 0 !== u.hashfn
              ? (i(
                  "Function" === h(u.hashfn),
                  "Expected options.hashfn to be a Function",
                ),
                void 0 !== u.xbuf && n("options.xbuf", u.xbuf, 32),
                void 0 !== u.ybuf && n("options.ybuf", u.ybuf, 32),
                n("output", a))
              : (a = s(a, 32)),
            t.ecdh(a, e, o, u.data, u.hashfn, u.xbuf, u.ybuf))
          ) {
            case 0:
              return a;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.ECDH);
          }
        },
      });
    },
    1914: function (t, e, r) {
      const i = r(795).ec,
        n = new i("secp256k1"),
        o = n.curve,
        s = o.n.constructor;
      function h(t, e) {
        let r = new s(e);
        if (r.cmp(o.p) >= 0) return null;
        r = r.toRed(o.red);
        let i = r.redSqr().redIMul(r).redIAdd(o.b).redSqrt();
        (3 === t) !== i.isOdd() && (i = i.redNeg());
        const h = r.redSqr().redIMul(r);
        return i.redSqr().redISub(h.redIAdd(o.b)).isZero()
          ? n.keyPair({ pub: { x: r, y: i } })
          : null;
      }
      function u(t, e, r) {
        let i = new s(e),
          h = new s(r);
        if (i.cmp(o.p) >= 0 || h.cmp(o.p) >= 0) return null;
        if (
          ((i = i.toRed(o.red)),
          (h = h.toRed(o.red)),
          (6 === t || 7 === t) && h.isOdd() !== (7 === t))
        )
          return null;
        const u = i.redSqr().redIMul(i);
        return h.redSqr().redISub(u.redIAdd(o.b)).isZero()
          ? n.keyPair({ pub: { x: i, y: h } })
          : null;
      }
      function a(t) {
        const e = t[0];
        switch (e) {
          case 2:
          case 3:
            return 33 !== t.length ? null : h(e, t.subarray(1, 33));
          case 4:
          case 6:
          case 7:
            return 65 !== t.length
              ? null
              : u(e, t.subarray(1, 33), t.subarray(33, 65));
          default:
            return null;
        }
      }
      function l(t, e) {
        const r = e.encode(null, 33 === t.length);
        for (let i = 0; i < t.length; ++i) t[i] = r[i];
      }
      t.exports = {
        contextRandomize() {
          return 0;
        },
        privateKeyVerify(t) {
          const e = new s(t);
          return e.cmp(o.n) < 0 && !e.isZero() ? 0 : 1;
        },
        privateKeyNegate(t) {
          const e = new s(t),
            r = o.n.sub(e).umod(o.n).toArrayLike(Uint8Array, "be", 32);
          return (t.set(r), 0);
        },
        privateKeyTweakAdd(t, e) {
          const r = new s(e);
          if (r.cmp(o.n) >= 0) return 1;
          if ((r.iadd(new s(t)), r.cmp(o.n) >= 0 && r.isub(o.n), r.isZero()))
            return 1;
          const i = r.toArrayLike(Uint8Array, "be", 32);
          return (t.set(i), 0);
        },
        privateKeyTweakMul(t, e) {
          let r = new s(e);
          if (r.cmp(o.n) >= 0 || r.isZero()) return 1;
          (r.imul(new s(t)), r.cmp(o.n) >= 0 && (r = r.umod(o.n)));
          const i = r.toArrayLike(Uint8Array, "be", 32);
          return (t.set(i), 0);
        },
        publicKeyVerify(t) {
          const e = a(t);
          return null === e ? 1 : 0;
        },
        publicKeyCreate(t, e) {
          const r = new s(e);
          if (r.cmp(o.n) >= 0 || r.isZero()) return 1;
          const i = n.keyFromPrivate(e).getPublic();
          return (l(t, i), 0);
        },
        publicKeyConvert(t, e) {
          const r = a(e);
          if (null === r) return 1;
          const i = r.getPublic();
          return (l(t, i), 0);
        },
        publicKeyNegate(t, e) {
          const r = a(e);
          if (null === r) return 1;
          const i = r.getPublic();
          return ((i.y = i.y.redNeg()), l(t, i), 0);
        },
        publicKeyCombine(t, e) {
          const r = new Array(e.length);
          for (let n = 0; n < e.length; ++n)
            if (((r[n] = a(e[n])), null === r[n])) return 1;
          let i = r[0].getPublic();
          for (let n = 1; n < r.length; ++n) i = i.add(r[n].pub);
          return i.isInfinity() ? 2 : (l(t, i), 0);
        },
        publicKeyTweakAdd(t, e, r) {
          const i = a(e);
          if (null === i) return 1;
          if (((r = new s(r)), r.cmp(o.n) >= 0)) return 2;
          const n = i.getPublic().add(o.g.mul(r));
          return n.isInfinity() ? 2 : (l(t, n), 0);
        },
        publicKeyTweakMul(t, e, r) {
          const i = a(e);
          if (null === i) return 1;
          if (((r = new s(r)), r.cmp(o.n) >= 0 || r.isZero())) return 2;
          const n = i.getPublic().mul(r);
          return (l(t, n), 0);
        },
        signatureNormalize(t) {
          const e = new s(t.subarray(0, 32)),
            r = new s(t.subarray(32, 64));
          return e.cmp(o.n) >= 0 || r.cmp(o.n) >= 0
            ? 1
            : (1 === r.cmp(n.nh) &&
                t.set(o.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32),
              0);
        },
        signatureExport(t, e) {
          const r = e.subarray(0, 32),
            i = e.subarray(32, 64);
          if (new s(r).cmp(o.n) >= 0) return 1;
          if (new s(i).cmp(o.n) >= 0) return 1;
          const { output: n } = t;
          let h = n.subarray(4, 37);
          ((h[0] = 0), h.set(r, 1));
          let u = 33,
            a = 0;
          for (; u > 1 && 0 === h[a] && !(128 & h[a + 1]); --u, ++a);
          if (((h = h.subarray(a)), 128 & h[0])) return 1;
          if (u > 1 && 0 === h[0] && !(128 & h[1])) return 1;
          let l = n.subarray(39, 72);
          ((l[0] = 0), l.set(i, 1));
          let f = 33,
            c = 0;
          for (; f > 1 && 0 === l[c] && !(128 & l[c + 1]); --f, ++c);
          return (
            (l = l.subarray(c)),
            128 & l[0] || (f > 1 && 0 === l[0] && !(128 & l[1]))
              ? 1
              : ((t.outputlen = 6 + u + f),
                (n[0] = 48),
                (n[1] = t.outputlen - 2),
                (n[2] = 2),
                (n[3] = h.length),
                n.set(h, 4),
                (n[4 + u] = 2),
                (n[5 + u] = l.length),
                n.set(l, 6 + u),
                0)
          );
        },
        signatureImport(t, e) {
          if (e.length < 8) return 1;
          if (e.length > 72) return 1;
          if (48 !== e[0]) return 1;
          if (e[1] !== e.length - 2) return 1;
          if (2 !== e[2]) return 1;
          const r = e[3];
          if (0 === r) return 1;
          if (5 + r >= e.length) return 1;
          if (2 !== e[4 + r]) return 1;
          const i = e[5 + r];
          if (0 === i) return 1;
          if (6 + r + i !== e.length) return 1;
          if (128 & e[4]) return 1;
          if (r > 1 && 0 === e[4] && !(128 & e[5])) return 1;
          if (128 & e[r + 6]) return 1;
          if (i > 1 && 0 === e[r + 6] && !(128 & e[r + 7])) return 1;
          let n = e.subarray(4, 4 + r);
          if (
            (33 === n.length && 0 === n[0] && (n = n.subarray(1)),
            n.length > 32)
          )
            return 1;
          let h = e.subarray(6 + r);
          if (
            (33 === h.length && 0 === h[0] && (h = h.slice(1)), h.length > 32)
          )
            throw new Error("S length is too long");
          let u = new s(n);
          u.cmp(o.n) >= 0 && (u = new s(0));
          let a = new s(e.subarray(6 + r));
          return (
            a.cmp(o.n) >= 0 && (a = new s(0)),
            t.set(u.toArrayLike(Uint8Array, "be", 32), 0),
            t.set(a.toArrayLike(Uint8Array, "be", 32), 32),
            0
          );
        },
        ecdsaSign(t, e, r, i, h) {
          if (h) {
            const t = h;
            h = (n) => {
              const o = t(e, r, null, i, n),
                h = o instanceof Uint8Array && 32 === o.length;
              if (!h) throw new Error("This is the way");
              return new s(o);
            };
          }
          const u = new s(r);
          if (u.cmp(o.n) >= 0 || u.isZero()) return 1;
          let a;
          try {
            a = n.sign(e, r, { canonical: !0, k: h, pers: i });
          } catch (l) {
            return 1;
          }
          return (
            t.signature.set(a.r.toArrayLike(Uint8Array, "be", 32), 0),
            t.signature.set(a.s.toArrayLike(Uint8Array, "be", 32), 32),
            (t.recid = a.recoveryParam),
            0
          );
        },
        ecdsaVerify(t, e, r) {
          const i = { r: t.subarray(0, 32), s: t.subarray(32, 64) },
            h = new s(i.r),
            u = new s(i.s);
          if (h.cmp(o.n) >= 0 || u.cmp(o.n) >= 0) return 1;
          if (1 === u.cmp(n.nh) || h.isZero() || u.isZero()) return 3;
          const l = a(r);
          if (null === l) return 2;
          const f = l.getPublic(),
            c = n.verify(e, i, f);
          return c ? 0 : 3;
        },
        ecdsaRecover(t, e, r, i) {
          const h = { r: e.slice(0, 32), s: e.slice(32, 64) },
            u = new s(h.r),
            a = new s(h.s);
          if (u.cmp(o.n) >= 0 || a.cmp(o.n) >= 0) return 1;
          if (u.isZero() || a.isZero()) return 2;
          let f;
          try {
            f = n.recoverPubKey(i, h, r);
          } catch (c) {
            return 2;
          }
          return (l(t, f), 0);
        },
        ecdh(t, e, r, i, h, u, l) {
          const f = a(e);
          if (null === f) return 1;
          const c = new s(r);
          if (c.cmp(o.n) >= 0 || c.isZero()) return 2;
          const p = f.getPublic().mul(c);
          if (void 0 === h) {
            const e = p.encode(null, !0),
              r = n.hash().update(e).digest();
            for (let i = 0; i < 32; ++i) t[i] = r[i];
          } else {
            u || (u = new Uint8Array(32));
            const e = p.getX().toArray("be", 32);
            for (let t = 0; t < 32; ++t) u[t] = e[t];
            l || (l = new Uint8Array(32));
            const r = p.getY().toArray("be", 32);
            for (let t = 0; t < 32; ++t) l[t] = r[t];
            const n = h(u, l, i),
              o = n instanceof Uint8Array && n.length === t.length;
            if (!o) return 2;
            t.set(n);
          }
          return 0;
        },
      };
    },
    1927: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = r(377);
      function n(t) {
        return new Promise(function (e, r) {
          i(t, function (t, i) {
            t ? r(t) : e(i);
          });
        });
      }
      function o(t) {
        return i(t);
      }
      ((e.getRandomBytes = n), (e.getRandomBytesSync = o));
    },
    1928: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = r(827),
        n = r(832);
      ((e.keccak224 = i.createHashFunction(function () {
        return n("keccak224");
      })),
        (e.keccak256 = i.createHashFunction(function () {
          return n("keccak256");
        })),
        (e.keccak384 = i.createHashFunction(function () {
          return n("keccak384");
        })),
        (e.keccak512 = i.createHashFunction(function () {
          return n("keccak512");
        })));
    },
    1965: function (t, e, r) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Address = void 0));
        var n = i(r(229)),
          o = r(72),
          s = r(98),
          h = r(646),
          u = (function () {
            function e(t) {
              ((0, n.default)(20 === t.length, "Invalid address length"),
                (this.buf = t));
            }
            return (
              (e.zero = function () {
                return new e((0, s.zeros)(20));
              }),
              (e.fromString = function (t) {
                return (
                  (0, n.default)((0, h.isValidAddress)(t), "Invalid address"),
                  new e((0, s.toBuffer)(t))
                );
              }),
              (e.fromPublicKey = function (r) {
                (0, n.default)(t.isBuffer(r), "Public key should be Buffer");
                var i = (0, h.pubToAddress)(r);
                return new e(i);
              }),
              (e.fromPrivateKey = function (r) {
                (0, n.default)(t.isBuffer(r), "Private key should be Buffer");
                var i = (0, h.privateToAddress)(r);
                return new e(i);
              }),
              (e.generate = function (r, i) {
                return (
                  (0, n.default)(o.BN.isBN(i)),
                  new e((0, h.generateAddress)(r.buf, i.toArrayLike(t)))
                );
              }),
              (e.generate2 = function (r, i, o) {
                return (
                  (0, n.default)(t.isBuffer(i)),
                  (0, n.default)(t.isBuffer(o)),
                  new e((0, h.generateAddress2)(r.buf, i, o))
                );
              }),
              (e.prototype.equals = function (t) {
                return this.buf.equals(t.buf);
              }),
              (e.prototype.isZero = function () {
                return this.equals(e.zero());
              }),
              (e.prototype.isPrecompileOrSystemAddress = function () {
                var t = new o.BN(this.buf),
                  e = new o.BN(0),
                  r = new o.BN("ffff", "hex");
                return t.gte(e) && t.lte(r);
              }),
              (e.prototype.toString = function () {
                return "0x" + this.buf.toString("hex");
              }),
              (e.prototype.toBuffer = function () {
                return t.from(this.buf);
              }),
              e
            );
          })();
        e.Address = u;
      }).call(this, r(2).Buffer);
    },
    1966: function (t, e, r) {
      "use strict";
      (function (t) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.hashPersonalMessage =
            e.isValidSignature =
            e.fromRpcSig =
            e.toCompactSig =
            e.toRpcSig =
            e.ecrecover =
            e.ecsign =
              void 0));
        var i = r(651),
          n = r(72),
          o = r(98),
          s = r(322),
          h = r(189),
          u = r(327);
        function a(e, r, n) {
          var o = (0, i.ecdsaSign)(e, r),
            s = o.signature,
            h = o.recid,
            a = t.from(s.slice(0, 32)),
            l = t.from(s.slice(32, 64));
          if (!n || "number" === typeof n) {
            if (n && !Number.isSafeInteger(n))
              throw new Error(
                "The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)",
              );
            var f = n ? h + (2 * n + 35) : h + 27;
            return { r: a, s: l, v: f };
          }
          var c = (0, u.toType)(n, u.TypeOutput.BN),
            p = c.muln(2).addn(35).addn(h).toArrayLike(t);
          return { r: a, s: l, v: p };
        }
        function l(t, e) {
          var r = (0, u.toType)(t, u.TypeOutput.BN);
          if (r.eqn(0) || r.eqn(1)) return (0, u.toType)(t, u.TypeOutput.BN);
          if (!e) return r.subn(27);
          var i = (0, u.toType)(e, u.TypeOutput.BN);
          return r.sub(i.muln(2).addn(35));
        }
        function f(t) {
          var e = new n.BN(t);
          return e.eqn(0) || e.eqn(1);
        }
        e.ecsign = a;
        var c = function (e, r, n, s, h) {
          var u = t.concat(
              [(0, o.setLengthLeft)(n, 32), (0, o.setLengthLeft)(s, 32)],
              64,
            ),
            a = l(r, h);
          if (!f(a)) throw new Error("Invalid signature v value");
          var c = (0, i.ecdsaRecover)(u, a.toNumber(), e);
          return t.from((0, i.publicKeyConvert)(c, !1).slice(1));
        };
        e.ecrecover = c;
        var p = function (e, r, i, n) {
          var s = l(e, n);
          if (!f(s)) throw new Error("Invalid signature v value");
          return (0, o.bufferToHex)(
            t.concat([
              (0, o.setLengthLeft)(r, 32),
              (0, o.setLengthLeft)(i, 32),
              (0, o.toBuffer)(e),
            ]),
          );
        };
        e.toRpcSig = p;
        var d = function (e, r, i, n) {
          var s = l(e, n);
          if (!f(s)) throw new Error("Invalid signature v value");
          var h = (0, u.toType)(e, u.TypeOutput.Number),
            a = i;
          return (
            ((h > 28 && h % 2 === 1) || 1 === h || 28 === h) &&
              ((a = t.from(i)), (a[0] |= 128)),
            (0, o.bufferToHex)(
              t.concat([
                (0, o.setLengthLeft)(r, 32),
                (0, o.setLengthLeft)(a, 32),
              ]),
            )
          );
        };
        e.toCompactSig = d;
        var m = function (t) {
          var e,
            r,
            i,
            n = (0, o.toBuffer)(t);
          if (n.length >= 65)
            ((e = n.slice(0, 32)),
              (r = n.slice(32, 64)),
              (i = (0, o.bufferToInt)(n.slice(64))));
          else {
            if (64 !== n.length) throw new Error("Invalid signature length");
            ((e = n.slice(0, 32)),
              (r = n.slice(32, 64)),
              (i = (0, o.bufferToInt)(n.slice(32, 33)) >> 7),
              (r[0] &= 127));
          }
          return (i < 27 && (i += 27), { v: i, r: e, s: r });
        };
        e.fromRpcSig = m;
        var y = function (t, e, r, i, o) {
          void 0 === i && (i = !0);
          var s = new n.BN(
              "7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",
              16,
            ),
            h = new n.BN(
              "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
              16,
            );
          if (32 !== e.length || 32 !== r.length) return !1;
          if (!f(l(t, o))) return !1;
          var u = new n.BN(e),
            a = new n.BN(r);
          return (
            !(u.isZero() || u.gt(h) || a.isZero() || a.gt(h)) &&
            (!i || 1 !== a.cmp(s))
          );
        };
        e.isValidSignature = y;
        var v = function (e) {
          (0, h.assertIsBuffer)(e);
          var r = t.from(
            "Ethereum Signed Message:\n".concat(e.length),
            "utf-8",
          );
          return (0, s.keccak)(t.concat([r, e]));
        };
        e.hashPersonalMessage = v;
      }).call(this, r(2).Buffer);
    },
    1967: function (t, e, r) {
      "use strict";
      (function (t) {
        var i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.defineProperties = void 0));
        var n = i(r(229)),
          o = r(118),
          s = r(72),
          h = r(98),
          u = function (e, r, i) {
            if (
              ((e.raw = []),
              (e._fields = []),
              (e.toJSON = function (t) {
                if ((void 0 === t && (t = !1), t)) {
                  var r = {};
                  return (
                    e._fields.forEach(function (t) {
                      r[t] = "0x".concat(e[t].toString("hex"));
                    }),
                    r
                  );
                }
                return (0, h.baToJSON)(e.raw);
              }),
              (e.serialize = function () {
                return s.rlp.encode(e.raw);
              }),
              r.forEach(function (r, i) {
                function o() {
                  return e.raw[i];
                }
                function s(o) {
                  ((o = (0, h.toBuffer)(o)),
                    "00" !== o.toString("hex") ||
                      r.allowZero ||
                      (o = t.allocUnsafe(0)),
                    r.allowLess && r.length
                      ? ((o = (0, h.unpadBuffer)(o)),
                        (0, n.default)(
                          r.length >= o.length,
                          "The field "
                            .concat(r.name, " must not have more ")
                            .concat(r.length, " bytes"),
                        ))
                      : (r.allowZero && 0 === o.length) ||
                        !r.length ||
                        (0, n.default)(
                          r.length === o.length,
                          "The field "
                            .concat(r.name, " must have byte length of ")
                            .concat(r.length),
                        ),
                    (e.raw[i] = o));
                }
                (e._fields.push(r.name),
                  Object.defineProperty(e, r.name, {
                    enumerable: !0,
                    configurable: !0,
                    get: o,
                    set: s,
                  }),
                  r.default && (e[r.name] = r.default),
                  r.alias &&
                    Object.defineProperty(e, r.alias, {
                      enumerable: !1,
                      configurable: !0,
                      set: s,
                      get: o,
                    }));
              }),
              i)
            )
              if (
                ("string" === typeof i &&
                  (i = t.from((0, o.stripHexPrefix)(i), "hex")),
                t.isBuffer(i) && (i = s.rlp.decode(i)),
                Array.isArray(i))
              ) {
                if (i.length > e._fields.length)
                  throw new Error("wrong number of fields in data");
                i.forEach(function (t, r) {
                  e[e._fields[r]] = (0, h.toBuffer)(t);
                });
              } else {
                if ("object" !== typeof i) throw new Error("invalid data");
                var u = Object.keys(i);
                r.forEach(function (t) {
                  (-1 !== u.indexOf(t.name) && (e[t.name] = i[t.name]),
                    -1 !== u.indexOf(t.alias) && (e[t.alias] = i[t.alias]));
                });
              }
          };
        e.defineProperties = u;
      }).call(this, r(2).Buffer);
    },
    1968: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const i = r(1969);
      function n(t) {
        return (
          "string" === typeof t &&
          !!/^(0x)?[0-9a-f]{512}$/i.test(t) &&
          !(!/^(0x)?[0-9a-f]{512}$/.test(t) && !/^(0x)?[0-9A-F]{512}$/.test(t))
        );
      }
      function o(t, e) {
        "object" === typeof e &&
          e.constructor === Uint8Array &&
          (e = i.bytesToHex(e));
        const r = i.keccak256(e).replace("0x", "");
        for (let i = 0; i < 12; i += 4) {
          const e =
              ((parseInt(r.substr(i, 2), 16) << 8) +
                parseInt(r.substr(i + 2, 2), 16)) &
              2047,
            n = s(t.charCodeAt(t.length - 1 - Math.floor(e / 4))),
            o = 1 << (e % 4);
          if ((n & o) !== o) return !1;
        }
        return !0;
      }
      function s(t) {
        if (t >= 48 && t <= 57) return t - 48;
        if (t >= 65 && t <= 70) return t - 55;
        if (t >= 97 && t <= 102) return t - 87;
        throw new Error("invalid bloom");
      }
      function h(t, e) {
        if (!n(t)) throw new Error("Invalid bloom given");
        if (!f(e)) throw new Error(`Invalid ethereum address given: "${e}"`);
        const r = i.padLeft(e, 64);
        return o(t, r);
      }
      function u(t, e) {
        if (!n(t)) throw new Error("Invalid bloom given");
        if (!f(e)) throw new Error(`Invalid contract address given: "${e}"`);
        return o(t, e);
      }
      function a(t, e) {
        if (!n(t)) throw new Error("Invalid bloom given");
        if (!l(e)) throw new Error("Invalid topic");
        return o(t, e);
      }
      function l(t) {
        return (
          "string" === typeof t &&
          !!/^(0x)?[0-9a-f]{64}$/i.test(t) &&
          !(!/^(0x)?[0-9a-f]{64}$/.test(t) && !/^(0x)?[0-9A-F]{64}$/.test(t))
        );
      }
      function f(t) {
        return (
          "string" === typeof t &&
          (!!t.match(/^(0x)?[0-9a-fA-F]{40}$/) ||
            !!t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/))
        );
      }
      ((e.isBloom = n),
        (e.isInBloom = o),
        (e.isUserEthereumAddressInBloom = h),
        (e.isContractAddressInBloom = u),
        (e.isTopicInBloom = a),
        (e.isTopic = l),
        (e.isAddress = f));
    },
    1969: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const i = r(239),
        n = r(130);
      function o(t) {
        return s(i.keccak_256(h(t)));
      }
      function s(t) {
        return "0x" + n.bytesToHex(t);
      }
      function h(t) {
        if (null == t) throw new Error("cannot convert null value to array");
        if ("string" === typeof t) {
          const e = t.match(/^(0x)?[0-9a-fA-F]*$/);
          if (!e) throw new Error("invalid hexidecimal string");
          if ("0x" !== e[1]) throw new Error("hex string must have 0x prefix");
          ((t = t.substring(2)), t.length % 2 && (t = "0" + t));
          const r = [];
          for (let i = 0; i < t.length; i += 2)
            r.push(parseInt(t.substr(i, 2), 16));
          return a(new Uint8Array(r));
        }
        if (u(t)) return a(new Uint8Array(t));
        throw new Error("invalid arrayify value");
      }
      function u(t) {
        if (
          !t ||
          parseInt(String(t.length)) != t.length ||
          "string" === typeof t
        )
          return !1;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (r < 0 || r >= 256 || parseInt(String(r)) != r) return !1;
        }
        return !0;
      }
      function a(t) {
        return (
          void 0 !== t.slice ||
            (t.slice = () => {
              const e = Array.prototype.slice.call(arguments);
              return a(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        );
      }
      ((e.keccak256 = o),
        (e.padLeft = (t, e) => {
          const r = /^0x/i.test(t) || "number" === typeof t;
          t = t.toString().replace(/^0x/i, "");
          const i = e - t.length + 1 >= 0 ? e - t.length + 1 : 0;
          return (r ? "0x" : "") + new Array(i).join("0") + t;
        }),
        (e.bytesToHex = s),
        (e.toByteArray = h));
    },
    243: function (t, e, r) {
      "use strict";
      var i,
        n = r(319),
        o = r(1891),
        s = r(1892),
        h = r(1893),
        u = r(1894),
        a = r(836),
        l = r(104),
        f = r(1895),
        c = r(1896),
        p = r(1897),
        d = r(1898),
        m = r(1899),
        y = r(1900),
        v = r(1901),
        g = r(1902),
        w = Function,
        M = function (t) {
          try {
            return w('"use strict"; return (' + t + ").constructor;")();
          } catch (e) {}
        },
        b = r(387),
        _ = r(818),
        A = function () {
          throw new l();
        },
        S = b
          ? (function () {
              try {
                return A;
              } catch (t) {
                try {
                  return b(arguments, "callee").get;
                } catch (e) {
                  return A;
                }
              }
            })()
          : A,
        x = r(1905)(),
        E = r(1906),
        k = r(650),
        B = r(649),
        P = r(407),
        I = r(320),
        O = {},
        L = "undefined" !== typeof Uint8Array && E ? E(Uint8Array) : i,
        R = {
          __proto__: null,
          "%AggregateError%":
            "undefined" === typeof AggregateError ? i : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? i : ArrayBuffer,
          "%ArrayIteratorPrototype%": x && E ? E([][Symbol.iterator]()) : i,
          "%AsyncFromSyncIteratorPrototype%": i,
          "%AsyncFunction%": O,
          "%AsyncGenerator%": O,
          "%AsyncGeneratorFunction%": O,
          "%AsyncIteratorPrototype%": O,
          "%Atomics%": "undefined" === typeof Atomics ? i : Atomics,
          "%BigInt%": "undefined" === typeof BigInt ? i : BigInt,
          "%BigInt64Array%":
            "undefined" === typeof BigInt64Array ? i : BigInt64Array,
          "%BigUint64Array%":
            "undefined" === typeof BigUint64Array ? i : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" === typeof DataView ? i : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": o,
          "%eval%": eval,
          "%EvalError%": s,
          "%Float16Array%":
            "undefined" === typeof Float16Array ? i : Float16Array,
          "%Float32Array%":
            "undefined" === typeof Float32Array ? i : Float32Array,
          "%Float64Array%":
            "undefined" === typeof Float64Array ? i : Float64Array,
          "%FinalizationRegistry%":
            "undefined" === typeof FinalizationRegistry
              ? i
              : FinalizationRegistry,
          "%Function%": w,
          "%GeneratorFunction%": O,
          "%Int8Array%": "undefined" === typeof Int8Array ? i : Int8Array,
          "%Int16Array%": "undefined" === typeof Int16Array ? i : Int16Array,
          "%Int32Array%": "undefined" === typeof Int32Array ? i : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": x && E ? E(E([][Symbol.iterator]())) : i,
          "%JSON%": "object" === typeof JSON ? JSON : i,
          "%Map%": "undefined" === typeof Map ? i : Map,
          "%MapIteratorPrototype%":
            "undefined" !== typeof Map && x && E
              ? E(new Map()[Symbol.iterator]())
              : i,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": n,
          "%Object.getOwnPropertyDescriptor%": b,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" === typeof Promise ? i : Promise,
          "%Proxy%": "undefined" === typeof Proxy ? i : Proxy,
          "%RangeError%": h,
          "%ReferenceError%": u,
          "%Reflect%": "undefined" === typeof Reflect ? i : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" === typeof Set ? i : Set,
          "%SetIteratorPrototype%":
            "undefined" !== typeof Set && x && E
              ? E(new Set()[Symbol.iterator]())
              : i,
          "%SharedArrayBuffer%":
            "undefined" === typeof SharedArrayBuffer ? i : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": x && E ? E(""[Symbol.iterator]()) : i,
          "%Symbol%": x ? Symbol : i,
          "%SyntaxError%": a,
          "%ThrowTypeError%": S,
          "%TypedArray%": L,
          "%TypeError%": l,
          "%Uint8Array%": "undefined" === typeof Uint8Array ? i : Uint8Array,
          "%Uint8ClampedArray%":
            "undefined" === typeof Uint8ClampedArray ? i : Uint8ClampedArray,
          "%Uint16Array%": "undefined" === typeof Uint16Array ? i : Uint16Array,
          "%Uint32Array%": "undefined" === typeof Uint32Array ? i : Uint32Array,
          "%URIError%": f,
          "%WeakMap%": "undefined" === typeof WeakMap ? i : WeakMap,
          "%WeakRef%": "undefined" === typeof WeakRef ? i : WeakRef,
          "%WeakSet%": "undefined" === typeof WeakSet ? i : WeakSet,
          "%Function.prototype.call%": I,
          "%Function.prototype.apply%": P,
          "%Object.defineProperty%": _,
          "%Object.getPrototypeOf%": k,
          "%Math.abs%": c,
          "%Math.floor%": p,
          "%Math.max%": d,
          "%Math.min%": m,
          "%Math.pow%": y,
          "%Math.round%": v,
          "%Math.sign%": g,
          "%Reflect.getPrototypeOf%": B,
        };
      if (E)
        try {
          null.error;
        } catch (G) {
          var T = E(E(G));
          R["%Error.prototype%"] = T;
        }
      var N = function t(e) {
          var r;
          if ("%AsyncFunction%" === e) r = M("async function () {}");
          else if ("%GeneratorFunction%" === e) r = M("function* () {}");
          else if ("%AsyncGeneratorFunction%" === e)
            r = M("async function* () {}");
          else if ("%AsyncGenerator%" === e) {
            var i = t("%AsyncGeneratorFunction%");
            i && (r = i.prototype);
          } else if ("%AsyncIteratorPrototype%" === e) {
            var n = t("%AsyncGenerator%");
            n && E && (r = E(n.prototype));
          }
          return ((R[e] = r), r);
        },
        K = {
          __proto__: null,
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        j = r(162),
        C = r(1910),
        U = j.call(I, Array.prototype.concat),
        F = j.call(P, Array.prototype.splice),
        H = j.call(I, String.prototype.replace),
        z = j.call(I, String.prototype.slice),
        Z = j.call(I, RegExp.prototype.exec),
        q =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        V = /\\(\\)?/g,
        D = function (t) {
          var e = z(t, 0, 1),
            r = z(t, -1);
          if ("%" === e && "%" !== r)
            throw new a("invalid intrinsic syntax, expected closing `%`");
          if ("%" === r && "%" !== e)
            throw new a("invalid intrinsic syntax, expected opening `%`");
          var i = [];
          return (
            H(t, q, function (t, e, r, n) {
              i[i.length] = r ? H(n, V, "$1") : e || t;
            }),
            i
          );
        },
        W = function (t, e) {
          var r,
            i = t;
          if ((C(K, i) && ((r = K[i]), (i = "%" + r[0] + "%")), C(R, i))) {
            var n = R[i];
            if ((n === O && (n = N(i)), "undefined" === typeof n && !e))
              throw new l(
                "intrinsic " +
                  t +
                  " exists, but is not available. Please file an issue!",
              );
            return { alias: r, name: i, value: n };
          }
          throw new a("intrinsic " + t + " does not exist!");
        };
      t.exports = function (t, e) {
        if ("string" !== typeof t || 0 === t.length)
          throw new l("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" !== typeof e)
          throw new l('"allowMissing" argument must be a boolean');
        if (null === Z(/^%?[^%]*%?$/, t))
          throw new a(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name",
          );
        var r = D(t),
          i = r.length > 0 ? r[0] : "",
          n = W("%" + i + "%", e),
          o = n.name,
          s = n.value,
          h = !1,
          u = n.alias;
        u && ((i = u[0]), F(r, U([0, 1], u)));
        for (var f = 1, c = !0; f < r.length; f += 1) {
          var p = r[f],
            d = z(p, 0, 1),
            m = z(p, -1);
          if (
            ('"' === d ||
              "'" === d ||
              "`" === d ||
              '"' === m ||
              "'" === m ||
              "`" === m) &&
            d !== m
          )
            throw new a("property names with quotes must have matching quotes");
          if (
            (("constructor" !== p && c) || (h = !0),
            (i += "." + p),
            (o = "%" + i + "%"),
            C(R, o))
          )
            s = R[o];
          else if (null != s) {
            if (!(p in s)) {
              if (!e)
                throw new l(
                  "base intrinsic for " +
                    t +
                    " exists, but the property is not available.",
                );
              return;
            }
            if (b && f + 1 >= r.length) {
              var y = b(s, p);
              ((c = !!y),
                (s =
                  c && "get" in y && !("originalValue" in y.get)
                    ? y.get
                    : s[p]));
            } else ((c = C(s, p)), (s = s[p]));
            c && !h && (R[o] = s);
          }
        }
        return s;
      };
    },
    319: function (t, e, r) {
      "use strict";
      t.exports = Object;
    },
    322: function (t, e, r) {
      "use strict";
      (function (t) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.rlphash =
            e.ripemd160FromArray =
            e.ripemd160FromString =
            e.ripemd160 =
            e.sha256FromArray =
            e.sha256FromString =
            e.sha256 =
            e.keccakFromArray =
            e.keccakFromHexString =
            e.keccakFromString =
            e.keccak256 =
            e.keccak =
              void 0));
        var i = r(1928),
          n = r(797),
          o = r(72),
          s = r(98),
          h = r(189),
          u = function (t, e) {
            switch ((void 0 === e && (e = 256), (0, h.assertIsBuffer)(t), e)) {
              case 224:
                return (0, i.keccak224)(t);
              case 256:
                return (0, i.keccak256)(t);
              case 384:
                return (0, i.keccak384)(t);
              case 512:
                return (0, i.keccak512)(t);
              default:
                throw new Error("Invald algorithm: keccak".concat(e));
            }
          };
        e.keccak = u;
        var a = function (t) {
          return (0, e.keccak)(t);
        };
        e.keccak256 = a;
        var l = function (r, i) {
          (void 0 === i && (i = 256), (0, h.assertIsString)(r));
          var n = t.from(r, "utf8");
          return (0, e.keccak)(n, i);
        };
        e.keccakFromString = l;
        var f = function (t, r) {
          return (
            void 0 === r && (r = 256),
            (0, h.assertIsHexString)(t),
            (0, e.keccak)((0, s.toBuffer)(t), r)
          );
        };
        e.keccakFromHexString = f;
        var c = function (t, r) {
          return (
            void 0 === r && (r = 256),
            (0, h.assertIsArray)(t),
            (0, e.keccak)((0, s.toBuffer)(t), r)
          );
        };
        e.keccakFromArray = c;
        var p = function (t) {
            return ((t = (0, s.toBuffer)(t)), n("sha256").update(t).digest());
          },
          d = function (t) {
            return ((0, h.assertIsBuffer)(t), p(t));
          };
        e.sha256 = d;
        var m = function (t) {
          return ((0, h.assertIsString)(t), p(t));
        };
        e.sha256FromString = m;
        var y = function (t) {
          return ((0, h.assertIsArray)(t), p(t));
        };
        e.sha256FromArray = y;
        var v = function (t, e) {
            t = (0, s.toBuffer)(t);
            var r = n("rmd160").update(t).digest();
            return !0 === e ? (0, s.setLengthLeft)(r, 32) : r;
          },
          g = function (t, e) {
            return ((0, h.assertIsBuffer)(t), v(t, e));
          };
        e.ripemd160 = g;
        var w = function (t, e) {
          return ((0, h.assertIsString)(t), v(t, e));
        };
        e.ripemd160FromString = w;
        var M = function (t, e) {
          return ((0, h.assertIsArray)(t), v(t, e));
        };
        e.ripemd160FromArray = M;
        var b = function (t) {
          return (0, e.keccak)(o.rlp.encode(t));
        };
        e.rlphash = b;
      }).call(this, r(2).Buffer);
    },
    327: function (t, e, r) {
      "use strict";
      (function (t) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.toType =
            e.TypeOutput =
            e.bnToRlp =
            e.bnToUnpaddedBuffer =
            e.bnToHex =
              void 0));
        var i,
          n = r(72),
          o = r(118),
          s = r(98);
        function h(t) {
          return "0x".concat(t.toString(16));
        }
        function u(e) {
          return (0, s.unpadBuffer)(e.toArrayLike(t));
        }
        function a(t) {
          return u(t);
        }
        function l(t, e) {
          if (null === t) return null;
          if (void 0 !== t) {
            if ("string" === typeof t && !(0, o.isHexString)(t))
              throw new Error(
                "A string must be provided with a 0x-prefix, given: ".concat(t),
              );
            if ("number" === typeof t && !Number.isSafeInteger(t))
              throw new Error(
                "The provided number is greater than MAX_SAFE_INTEGER (please use an alternative input type)",
              );
            var r = (0, s.toBuffer)(t);
            if (e === i.Buffer) return r;
            if (e === i.BN) return new n.BN(r);
            if (e === i.Number) {
              var h = new n.BN(r),
                u = new n.BN(Number.MAX_SAFE_INTEGER.toString());
              if (h.gt(u))
                throw new Error(
                  "The provided number is greater than MAX_SAFE_INTEGER (please use an alternative output type)",
                );
              return h.toNumber();
            }
            return "0x".concat(r.toString("hex"));
          }
        }
        ((e.bnToHex = h),
          (e.bnToUnpaddedBuffer = u),
          (e.bnToRlp = a),
          (function (t) {
            ((t[(t["Number"] = 0)] = "Number"),
              (t[(t["BN"] = 1)] = "BN"),
              (t[(t["Buffer"] = 2)] = "Buffer"),
              (t[(t["PrefixedHexString"] = 3)] = "PrefixedHexString"));
          })((i = e.TypeOutput || (e.TypeOutput = {}))),
          (e.toType = l));
      }).call(this, r(2).Buffer);
    },
    387: function (t, e, r) {
      "use strict";
      var i = r(1904);
      if (i)
        try {
          i([], "length");
        } catch (n) {
          i = null;
        }
      t.exports = i;
    },
    394: function (t, e, r) {
      "use strict";
      var i = r(64),
        n = r(138),
        o = r(486),
        s = r(83),
        h = i.sum32,
        u = i.sum32_4,
        a = i.sum32_5,
        l = o.ch32,
        f = o.maj32,
        c = o.s0_256,
        p = o.s1_256,
        d = o.g0_256,
        m = o.g1_256,
        y = n.BlockHash,
        v = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ];
      function g() {
        if (!(this instanceof g)) return new g();
        (y.call(this),
          (this.h = [
            1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
            2600822924, 528734635, 1541459225,
          ]),
          (this.k = v),
          (this.W = new Array(64)));
      }
      (i.inherits(g, y),
        (t.exports = g),
        (g.blockSize = 512),
        (g.outSize = 256),
        (g.hmacStrength = 192),
        (g.padLength = 64),
        (g.prototype._update = function (t, e) {
          for (var r = this.W, i = 0; i < 16; i++) r[i] = t[e + i];
          for (; i < r.length; i++)
            r[i] = u(m(r[i - 2]), r[i - 7], d(r[i - 15]), r[i - 16]);
          var n = this.h[0],
            o = this.h[1],
            y = this.h[2],
            v = this.h[3],
            g = this.h[4],
            w = this.h[5],
            M = this.h[6],
            b = this.h[7];
          for (s(this.k.length === r.length), i = 0; i < r.length; i++) {
            var _ = a(b, p(g), l(g, w, M), this.k[i], r[i]),
              A = h(c(n), f(n, o, y));
            ((b = M),
              (M = w),
              (w = g),
              (g = h(v, _)),
              (v = y),
              (y = o),
              (o = n),
              (n = h(_, A)));
          }
          ((this.h[0] = h(this.h[0], n)),
            (this.h[1] = h(this.h[1], o)),
            (this.h[2] = h(this.h[2], y)),
            (this.h[3] = h(this.h[3], v)),
            (this.h[4] = h(this.h[4], g)),
            (this.h[5] = h(this.h[5], w)),
            (this.h[6] = h(this.h[6], M)),
            (this.h[7] = h(this.h[7], b)));
        }),
        (g.prototype._digest = function (t) {
          return "hex" === t
            ? i.toHex32(this.h, "big")
            : i.split32(this.h, "big");
        }));
    },
    396: function (t, e, r) {
      t.exports = r(1913)(r(1914));
    },
    43: function (t, e, r) {
      var i = e;
      ((i.utils = r(64)),
        (i.common = r(138)),
        (i.sha = r(1323)),
        (i.ripemd = r(842)),
        (i.hmac = r(1327)),
        (i.sha1 = i.sha.sha1),
        (i.sha256 = i.sha.sha256),
        (i.sha224 = i.sha.sha224),
        (i.sha384 = i.sha.sha384),
        (i.sha512 = i.sha.sha512),
        (i.ripemd160 = i.ripemd.ripemd160));
    },
    469: function (t, e, r) {
      (function (e) {
        var i = r(1257),
          n = Object.prototype.toString,
          o =
            "function" === typeof Blob ||
            ("undefined" !== typeof Blob &&
              "[object BlobConstructor]" === n.call(Blob)),
          s =
            "function" === typeof File ||
            ("undefined" !== typeof File &&
              "[object FileConstructor]" === n.call(File));
        function h(t) {
          if (!t || "object" !== typeof t) return !1;
          if (i(t)) {
            for (var r = 0, n = t.length; r < n; r++) if (h(t[r])) return !0;
            return !1;
          }
          if (
            ("function" === typeof e && e.isBuffer && e.isBuffer(t)) ||
            ("function" === typeof ArrayBuffer && t instanceof ArrayBuffer) ||
            (o && t instanceof Blob) ||
            (s && t instanceof File)
          )
            return !0;
          if (
            t.toJSON &&
            "function" === typeof t.toJSON &&
            1 === arguments.length
          )
            return h(t.toJSON(), !0);
          for (var u in t)
            if (Object.prototype.hasOwnProperty.call(t, u) && h(t[u]))
              return !0;
          return !1;
        }
        t.exports = h;
      }).call(this, r(2).Buffer);
    },
    486: function (t, e, r) {
      "use strict";
      var i = r(64),
        n = i.rotr32;
      function o(t, e, r, i) {
        return 0 === t
          ? s(e, r, i)
          : 1 === t || 3 === t
            ? u(e, r, i)
            : 2 === t
              ? h(e, r, i)
              : void 0;
      }
      function s(t, e, r) {
        return (t & e) ^ (~t & r);
      }
      function h(t, e, r) {
        return (t & e) ^ (t & r) ^ (e & r);
      }
      function u(t, e, r) {
        return t ^ e ^ r;
      }
      function a(t) {
        return n(t, 2) ^ n(t, 13) ^ n(t, 22);
      }
      function l(t) {
        return n(t, 6) ^ n(t, 11) ^ n(t, 25);
      }
      function f(t) {
        return n(t, 7) ^ n(t, 18) ^ (t >>> 3);
      }
      function c(t) {
        return n(t, 17) ^ n(t, 19) ^ (t >>> 10);
      }
      ((e.ft_1 = o),
        (e.ch32 = s),
        (e.maj32 = h),
        (e.p32 = u),
        (e.s0_256 = a),
        (e.s1_256 = l),
        (e.g0_256 = f),
        (e.g1_256 = c));
    },
    487: function (t, e, r) {
      "use strict";
      var i = r(64),
        n = r(138),
        o = r(83),
        s = i.rotr64_hi,
        h = i.rotr64_lo,
        u = i.shr64_hi,
        a = i.shr64_lo,
        l = i.sum64,
        f = i.sum64_hi,
        c = i.sum64_lo,
        p = i.sum64_4_hi,
        d = i.sum64_4_lo,
        m = i.sum64_5_hi,
        y = i.sum64_5_lo,
        v = n.BlockHash,
        g = [
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
      function w() {
        if (!(this instanceof w)) return new w();
        (v.call(this),
          (this.h = [
            1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
            4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
            2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209,
          ]),
          (this.k = g),
          (this.W = new Array(160)));
      }
      function M(t, e, r, i, n) {
        var o = (t & r) ^ (~t & n);
        return (o < 0 && (o += 4294967296), o);
      }
      function b(t, e, r, i, n, o) {
        var s = (e & i) ^ (~e & o);
        return (s < 0 && (s += 4294967296), s);
      }
      function _(t, e, r, i, n) {
        var o = (t & r) ^ (t & n) ^ (r & n);
        return (o < 0 && (o += 4294967296), o);
      }
      function A(t, e, r, i, n, o) {
        var s = (e & i) ^ (e & o) ^ (i & o);
        return (s < 0 && (s += 4294967296), s);
      }
      function S(t, e) {
        var r = s(t, e, 28),
          i = s(e, t, 2),
          n = s(e, t, 7),
          o = r ^ i ^ n;
        return (o < 0 && (o += 4294967296), o);
      }
      function x(t, e) {
        var r = h(t, e, 28),
          i = h(e, t, 2),
          n = h(e, t, 7),
          o = r ^ i ^ n;
        return (o < 0 && (o += 4294967296), o);
      }
      function E(t, e) {
        var r = s(t, e, 14),
          i = s(t, e, 18),
          n = s(e, t, 9),
          o = r ^ i ^ n;
        return (o < 0 && (o += 4294967296), o);
      }
      function k(t, e) {
        var r = h(t, e, 14),
          i = h(t, e, 18),
          n = h(e, t, 9),
          o = r ^ i ^ n;
        return (o < 0 && (o += 4294967296), o);
      }
      function B(t, e) {
        var r = s(t, e, 1),
          i = s(t, e, 8),
          n = u(t, e, 7),
          o = r ^ i ^ n;
        return (o < 0 && (o += 4294967296), o);
      }
      function P(t, e) {
        var r = h(t, e, 1),
          i = h(t, e, 8),
          n = a(t, e, 7),
          o = r ^ i ^ n;
        return (o < 0 && (o += 4294967296), o);
      }
      function I(t, e) {
        var r = s(t, e, 19),
          i = s(e, t, 29),
          n = u(t, e, 6),
          o = r ^ i ^ n;
        return (o < 0 && (o += 4294967296), o);
      }
      function O(t, e) {
        var r = h(t, e, 19),
          i = h(e, t, 29),
          n = a(t, e, 6),
          o = r ^ i ^ n;
        return (o < 0 && (o += 4294967296), o);
      }
      (i.inherits(w, v),
        (t.exports = w),
        (w.blockSize = 1024),
        (w.outSize = 512),
        (w.hmacStrength = 192),
        (w.padLength = 128),
        (w.prototype._prepareBlock = function (t, e) {
          for (var r = this.W, i = 0; i < 32; i++) r[i] = t[e + i];
          for (; i < r.length; i += 2) {
            var n = I(r[i - 4], r[i - 3]),
              o = O(r[i - 4], r[i - 3]),
              s = r[i - 14],
              h = r[i - 13],
              u = B(r[i - 30], r[i - 29]),
              a = P(r[i - 30], r[i - 29]),
              l = r[i - 32],
              f = r[i - 31];
            ((r[i] = p(n, o, s, h, u, a, l, f)),
              (r[i + 1] = d(n, o, s, h, u, a, l, f)));
          }
        }),
        (w.prototype._update = function (t, e) {
          this._prepareBlock(t, e);
          var r = this.W,
            i = this.h[0],
            n = this.h[1],
            s = this.h[2],
            h = this.h[3],
            u = this.h[4],
            a = this.h[5],
            p = this.h[6],
            d = this.h[7],
            v = this.h[8],
            g = this.h[9],
            w = this.h[10],
            B = this.h[11],
            P = this.h[12],
            I = this.h[13],
            O = this.h[14],
            L = this.h[15];
          o(this.k.length === r.length);
          for (var R = 0; R < r.length; R += 2) {
            var T = O,
              N = L,
              K = E(v, g),
              j = k(v, g),
              C = M(v, g, w, B, P, I),
              U = b(v, g, w, B, P, I),
              F = this.k[R],
              H = this.k[R + 1],
              z = r[R],
              Z = r[R + 1],
              q = m(T, N, K, j, C, U, F, H, z, Z),
              V = y(T, N, K, j, C, U, F, H, z, Z);
            ((T = S(i, n)),
              (N = x(i, n)),
              (K = _(i, n, s, h, u, a)),
              (j = A(i, n, s, h, u, a)));
            var D = f(T, N, K, j),
              W = c(T, N, K, j);
            ((O = P),
              (L = I),
              (P = w),
              (I = B),
              (w = v),
              (B = g),
              (v = f(p, d, q, V)),
              (g = c(d, d, q, V)),
              (p = u),
              (d = a),
              (u = s),
              (a = h),
              (s = i),
              (h = n),
              (i = f(q, V, D, W)),
              (n = c(q, V, D, W)));
          }
          (l(this.h, 0, i, n),
            l(this.h, 2, s, h),
            l(this.h, 4, u, a),
            l(this.h, 6, p, d),
            l(this.h, 8, v, g),
            l(this.h, 10, w, B),
            l(this.h, 12, P, I),
            l(this.h, 14, O, L));
        }),
        (w.prototype._digest = function (t) {
          return "hex" === t
            ? i.toHex32(this.h, "big")
            : i.split32(this.h, "big");
        }));
    },
    52: function (t, e, r) {
      "use strict";
      var i,
        n = "object" === typeof Reflect ? Reflect : null,
        o =
          n && "function" === typeof n.apply
            ? n.apply
            : function (t, e, r) {
                return Function.prototype.apply.call(t, e, r);
              };
      function s(t) {
        console && console.warn && console.warn(t);
      }
      i =
        n && "function" === typeof n.ownKeys
          ? n.ownKeys
          : Object.getOwnPropertySymbols
            ? function (t) {
                return Object.getOwnPropertyNames(t).concat(
                  Object.getOwnPropertySymbols(t),
                );
              }
            : function (t) {
                return Object.getOwnPropertyNames(t);
              };
      var h =
        Number.isNaN ||
        function (t) {
          return t !== t;
        };
      function u() {
        u.init.call(this);
      }
      ((t.exports = u),
        (t.exports.once = M),
        (u.EventEmitter = u),
        (u.prototype._events = void 0),
        (u.prototype._eventsCount = 0),
        (u.prototype._maxListeners = void 0));
      var a = 10;
      function l(t) {
        if ("function" !== typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t,
          );
      }
      function f(t) {
        return void 0 === t._maxListeners
          ? u.defaultMaxListeners
          : t._maxListeners;
      }
      function c(t, e, r, i) {
        var n, o, h;
        if (
          (l(r),
          (o = t._events),
          void 0 === o
            ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (t.emit("newListener", e, r.listener ? r.listener : r),
                (o = t._events)),
              (h = o[e])),
          void 0 === h)
        )
          ((h = o[e] = r), ++t._eventsCount);
        else if (
          ("function" === typeof h
            ? (h = o[e] = i ? [r, h] : [h, r])
            : i
              ? h.unshift(r)
              : h.push(r),
          (n = f(t)),
          n > 0 && h.length > n && !h.warned)
        ) {
          h.warned = !0;
          var u = new Error(
            "Possible EventEmitter memory leak detected. " +
              h.length +
              " " +
              String(e) +
              " listeners added. Use emitter.setMaxListeners() to increase limit",
          );
          ((u.name = "MaxListenersExceededWarning"),
            (u.emitter = t),
            (u.type = e),
            (u.count = h.length),
            s(u));
        }
        return t;
      }
      function p() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function d(t, e, r) {
        var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
          n = p.bind(i);
        return ((n.listener = r), (i.wrapFn = n), n);
      }
      function m(t, e, r) {
        var i = t._events;
        if (void 0 === i) return [];
        var n = i[e];
        return void 0 === n
          ? []
          : "function" === typeof n
            ? r
              ? [n.listener || n]
              : [n]
            : r
              ? w(n)
              : v(n, n.length);
      }
      function y(t) {
        var e = this._events;
        if (void 0 !== e) {
          var r = e[t];
          if ("function" === typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function v(t, e) {
        for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
        return r;
      }
      function g(t, e) {
        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
        t.pop();
      }
      function w(t) {
        for (var e = new Array(t.length), r = 0; r < e.length; ++r)
          e[r] = t[r].listener || t[r];
        return e;
      }
      function M(t, e) {
        return new Promise(function (r, i) {
          function n(r) {
            (t.removeListener(e, o), i(r));
          }
          function o() {
            ("function" === typeof t.removeListener &&
              t.removeListener("error", n),
              r([].slice.call(arguments)));
          }
          (_(t, e, o, { once: !0 }), "error" !== e && b(t, n, { once: !0 }));
        });
      }
      function b(t, e, r) {
        "function" === typeof t.on && _(t, "error", e, r);
      }
      function _(t, e, r, i) {
        if ("function" === typeof t.on) i.once ? t.once(e, r) : t.on(e, r);
        else {
          if ("function" !== typeof t.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof t,
            );
          t.addEventListener(e, function n(o) {
            (i.once && t.removeEventListener(e, n), r(o));
          });
        }
      }
      (Object.defineProperty(u, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return a;
        },
        set: function (t) {
          if ("number" !== typeof t || t < 0 || h(t))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                t +
                ".",
            );
          a = t;
        },
      }),
        (u.init = function () {
          ((void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0));
        }),
        (u.prototype.setMaxListeners = function (t) {
          if ("number" !== typeof t || t < 0 || h(t))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                t +
                ".",
            );
          return ((this._maxListeners = t), this);
        }),
        (u.prototype.getMaxListeners = function () {
          return f(this);
        }),
        (u.prototype.emit = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e.push(arguments[r]);
          var i = "error" === t,
            n = this._events;
          if (void 0 !== n) i = i && void 0 === n.error;
          else if (!i) return !1;
          if (i) {
            var s;
            if ((e.length > 0 && (s = e[0]), s instanceof Error)) throw s;
            var h = new Error(
              "Unhandled error." + (s ? " (" + s.message + ")" : ""),
            );
            throw ((h.context = s), h);
          }
          var u = n[t];
          if (void 0 === u) return !1;
          if ("function" === typeof u) o(u, this, e);
          else {
            var a = u.length,
              l = v(u, a);
            for (r = 0; r < a; ++r) o(l[r], this, e);
          }
          return !0;
        }),
        (u.prototype.addListener = function (t, e) {
          return c(this, t, e, !1);
        }),
        (u.prototype.on = u.prototype.addListener),
        (u.prototype.prependListener = function (t, e) {
          return c(this, t, e, !0);
        }),
        (u.prototype.once = function (t, e) {
          return (l(e), this.on(t, d(this, t, e)), this);
        }),
        (u.prototype.prependOnceListener = function (t, e) {
          return (l(e), this.prependListener(t, d(this, t, e)), this);
        }),
        (u.prototype.removeListener = function (t, e) {
          var r, i, n, o, s;
          if ((l(e), (i = this._events), void 0 === i)) return this;
          if (((r = i[t]), void 0 === r)) return this;
          if (r === e || r.listener === e)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete i[t],
                i.removeListener &&
                  this.emit("removeListener", t, r.listener || e));
          else if ("function" !== typeof r) {
            for (n = -1, o = r.length - 1; o >= 0; o--)
              if (r[o] === e || r[o].listener === e) {
                ((s = r[o].listener), (n = o));
                break;
              }
            if (n < 0) return this;
            (0 === n ? r.shift() : g(r, n),
              1 === r.length && (i[t] = r[0]),
              void 0 !== i.removeListener &&
                this.emit("removeListener", t, s || e));
          }
          return this;
        }),
        (u.prototype.off = u.prototype.removeListener),
        (u.prototype.removeAllListeners = function (t) {
          var e, r, i;
          if (((r = this._events), void 0 === r)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[t] &&
                  (0 === --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[t]),
              this
            );
          if (0 === arguments.length) {
            var n,
              o = Object.keys(r);
            for (i = 0; i < o.length; ++i)
              ((n = o[i]),
                "removeListener" !== n && this.removeAllListeners(n));
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if (((e = r[t]), "function" === typeof e)) this.removeListener(t, e);
          else if (void 0 !== e)
            for (i = e.length - 1; i >= 0; i--) this.removeListener(t, e[i]);
          return this;
        }),
        (u.prototype.listeners = function (t) {
          return m(this, t, !0);
        }),
        (u.prototype.rawListeners = function (t) {
          return m(this, t, !1);
        }),
        (u.listenerCount = function (t, e) {
          return "function" === typeof t.listenerCount
            ? t.listenerCount(e)
            : y.call(t, e);
        }),
        (u.prototype.listenerCount = y),
        (u.prototype.eventNames = function () {
          return this._eventsCount > 0 ? i(this._events) : [];
        }));
    },
    64: function (t, e, r) {
      "use strict";
      var i = r(83),
        n = r(16);
      function o(t, e) {
        return (
          55296 === (64512 & t.charCodeAt(e)) &&
          !(e < 0 || e + 1 >= t.length) &&
          56320 === (64512 & t.charCodeAt(e + 1))
        );
      }
      function s(t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var r = [];
        if ("string" === typeof t)
          if (e) {
            if ("hex" === e)
              for (
                t = t.replace(/[^a-z0-9]+/gi, ""),
                  t.length % 2 !== 0 && (t = "0" + t),
                  n = 0;
                n < t.length;
                n += 2
              )
                r.push(parseInt(t[n] + t[n + 1], 16));
          } else
            for (var i = 0, n = 0; n < t.length; n++) {
              var s = t.charCodeAt(n);
              s < 128
                ? (r[i++] = s)
                : s < 2048
                  ? ((r[i++] = (s >> 6) | 192), (r[i++] = (63 & s) | 128))
                  : o(t, n)
                    ? ((s =
                        65536 +
                        ((1023 & s) << 10) +
                        (1023 & t.charCodeAt(++n))),
                      (r[i++] = (s >> 18) | 240),
                      (r[i++] = ((s >> 12) & 63) | 128),
                      (r[i++] = ((s >> 6) & 63) | 128),
                      (r[i++] = (63 & s) | 128))
                    : ((r[i++] = (s >> 12) | 224),
                      (r[i++] = ((s >> 6) & 63) | 128),
                      (r[i++] = (63 & s) | 128));
            }
        else for (n = 0; n < t.length; n++) r[n] = 0 | t[n];
        return r;
      }
      function h(t) {
        for (var e = "", r = 0; r < t.length; r++) e += l(t[r].toString(16));
        return e;
      }
      function u(t) {
        var e =
          (t >>> 24) |
          ((t >>> 8) & 65280) |
          ((t << 8) & 16711680) |
          ((255 & t) << 24);
        return e >>> 0;
      }
      function a(t, e) {
        for (var r = "", i = 0; i < t.length; i++) {
          var n = t[i];
          ("little" === e && (n = u(n)), (r += f(n.toString(16))));
        }
        return r;
      }
      function l(t) {
        return 1 === t.length ? "0" + t : t;
      }
      function f(t) {
        return 7 === t.length
          ? "0" + t
          : 6 === t.length
            ? "00" + t
            : 5 === t.length
              ? "000" + t
              : 4 === t.length
                ? "0000" + t
                : 3 === t.length
                  ? "00000" + t
                  : 2 === t.length
                    ? "000000" + t
                    : 1 === t.length
                      ? "0000000" + t
                      : t;
      }
      function c(t, e, r, n) {
        var o = r - e;
        i(o % 4 === 0);
        for (
          var s = new Array(o / 4), h = 0, u = e;
          h < s.length;
          h++, u += 4
        ) {
          var a;
          ((a =
            "big" === n
              ? (t[u] << 24) | (t[u + 1] << 16) | (t[u + 2] << 8) | t[u + 3]
              : (t[u + 3] << 24) | (t[u + 2] << 16) | (t[u + 1] << 8) | t[u]),
            (s[h] = a >>> 0));
        }
        return s;
      }
      function p(t, e) {
        for (
          var r = new Array(4 * t.length), i = 0, n = 0;
          i < t.length;
          i++, n += 4
        ) {
          var o = t[i];
          "big" === e
            ? ((r[n] = o >>> 24),
              (r[n + 1] = (o >>> 16) & 255),
              (r[n + 2] = (o >>> 8) & 255),
              (r[n + 3] = 255 & o))
            : ((r[n + 3] = o >>> 24),
              (r[n + 2] = (o >>> 16) & 255),
              (r[n + 1] = (o >>> 8) & 255),
              (r[n] = 255 & o));
        }
        return r;
      }
      function d(t, e) {
        return (t >>> e) | (t << (32 - e));
      }
      function m(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function y(t, e) {
        return (t + e) >>> 0;
      }
      function v(t, e, r) {
        return (t + e + r) >>> 0;
      }
      function g(t, e, r, i) {
        return (t + e + r + i) >>> 0;
      }
      function w(t, e, r, i, n) {
        return (t + e + r + i + n) >>> 0;
      }
      function M(t, e, r, i) {
        var n = t[e],
          o = t[e + 1],
          s = (i + o) >>> 0,
          h = (s < i ? 1 : 0) + r + n;
        ((t[e] = h >>> 0), (t[e + 1] = s));
      }
      function b(t, e, r, i) {
        var n = (e + i) >>> 0,
          o = (n < e ? 1 : 0) + t + r;
        return o >>> 0;
      }
      function _(t, e, r, i) {
        var n = e + i;
        return n >>> 0;
      }
      function A(t, e, r, i, n, o, s, h) {
        var u = 0,
          a = e;
        ((a = (a + i) >>> 0),
          (u += a < e ? 1 : 0),
          (a = (a + o) >>> 0),
          (u += a < o ? 1 : 0),
          (a = (a + h) >>> 0),
          (u += a < h ? 1 : 0));
        var l = t + r + n + s + u;
        return l >>> 0;
      }
      function S(t, e, r, i, n, o, s, h) {
        var u = e + i + o + h;
        return u >>> 0;
      }
      function x(t, e, r, i, n, o, s, h, u, a) {
        var l = 0,
          f = e;
        ((f = (f + i) >>> 0),
          (l += f < e ? 1 : 0),
          (f = (f + o) >>> 0),
          (l += f < o ? 1 : 0),
          (f = (f + h) >>> 0),
          (l += f < h ? 1 : 0),
          (f = (f + a) >>> 0),
          (l += f < a ? 1 : 0));
        var c = t + r + n + s + u + l;
        return c >>> 0;
      }
      function E(t, e, r, i, n, o, s, h, u, a) {
        var l = e + i + o + h + a;
        return l >>> 0;
      }
      function k(t, e, r) {
        var i = (e << (32 - r)) | (t >>> r);
        return i >>> 0;
      }
      function B(t, e, r) {
        var i = (t << (32 - r)) | (e >>> r);
        return i >>> 0;
      }
      function P(t, e, r) {
        return t >>> r;
      }
      function I(t, e, r) {
        var i = (t << (32 - r)) | (e >>> r);
        return i >>> 0;
      }
      ((e.inherits = n),
        (e.toArray = s),
        (e.toHex = h),
        (e.htonl = u),
        (e.toHex32 = a),
        (e.zero2 = l),
        (e.zero8 = f),
        (e.join32 = c),
        (e.split32 = p),
        (e.rotr32 = d),
        (e.rotl32 = m),
        (e.sum32 = y),
        (e.sum32_3 = v),
        (e.sum32_4 = g),
        (e.sum32_5 = w),
        (e.sum64 = M),
        (e.sum64_hi = b),
        (e.sum64_lo = _),
        (e.sum64_4_hi = A),
        (e.sum64_4_lo = S),
        (e.sum64_5_hi = x),
        (e.sum64_5_lo = E),
        (e.rotr64_hi = k),
        (e.rotr64_lo = B),
        (e.shr64_hi = P),
        (e.shr64_lo = I));
    },
    645: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.KECCAK256_RLP =
          e.KECCAK256_RLP_S =
          e.KECCAK256_RLP_ARRAY =
          e.KECCAK256_RLP_ARRAY_S =
          e.KECCAK256_NULL =
          e.KECCAK256_NULL_S =
          e.TWO_POW256 =
          e.MAX_INTEGER =
          e.MAX_UINT64 =
            void 0));
      var i = r(2),
        n = r(72);
      ((e.MAX_UINT64 = new n.BN("ffffffffffffffff", 16)),
        (e.MAX_INTEGER = new n.BN(
          "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          16,
        )),
        (e.TWO_POW256 = new n.BN(
          "10000000000000000000000000000000000000000000000000000000000000000",
          16,
        )),
        (e.KECCAK256_NULL_S =
          "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470"),
        (e.KECCAK256_NULL = i.Buffer.from(e.KECCAK256_NULL_S, "hex")),
        (e.KECCAK256_RLP_ARRAY_S =
          "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"),
        (e.KECCAK256_RLP_ARRAY = i.Buffer.from(e.KECCAK256_RLP_ARRAY_S, "hex")),
        (e.KECCAK256_RLP_S =
          "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"),
        (e.KECCAK256_RLP = i.Buffer.from(e.KECCAK256_RLP_S, "hex")));
    },
    646: function (t, e, r) {
      "use strict";
      (function (t) {
        var i =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" === typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var i,
                n,
                o = r.call(t),
                s = [];
              try {
                while ((void 0 === e || e-- > 0) && !(i = o.next()).done)
                  s.push(i.value);
              } catch (h) {
                n = { error: h };
              } finally {
                try {
                  i && !i.done && (r = o["return"]) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
              return s;
            },
          n =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.isZeroAddress =
            e.zeroAddress =
            e.importPublic =
            e.privateToAddress =
            e.privateToPublic =
            e.publicToAddress =
            e.pubToAddress =
            e.isValidPublic =
            e.isValidPrivate =
            e.generateAddress2 =
            e.generateAddress =
            e.isValidChecksumAddress =
            e.toChecksumAddress =
            e.isValidAddress =
            e.Account =
              void 0));
        var o = n(r(229)),
          s = r(72),
          h = r(651),
          u = r(118),
          a = r(645),
          l = r(98),
          f = r(322),
          c = r(189),
          p = r(327),
          d = (function () {
            function t(t, e, r, i) {
              (void 0 === t && (t = new s.BN(0)),
                void 0 === e && (e = new s.BN(0)),
                void 0 === r && (r = a.KECCAK256_RLP),
                void 0 === i && (i = a.KECCAK256_NULL),
                (this.nonce = t),
                (this.balance = e),
                (this.stateRoot = r),
                (this.codeHash = i),
                this._validate());
            }
            return (
              (t.fromAccountData = function (e) {
                var r = e.nonce,
                  i = e.balance,
                  n = e.stateRoot,
                  o = e.codeHash;
                return new t(
                  r ? new s.BN((0, l.toBuffer)(r)) : void 0,
                  i ? new s.BN((0, l.toBuffer)(i)) : void 0,
                  n ? (0, l.toBuffer)(n) : void 0,
                  o ? (0, l.toBuffer)(o) : void 0,
                );
              }),
              (t.fromRlpSerializedAccount = function (t) {
                var e = s.rlp.decode(t);
                if (!Array.isArray(e))
                  throw new Error(
                    "Invalid serialized account input. Must be array",
                  );
                return this.fromValuesArray(e);
              }),
              (t.fromValuesArray = function (e) {
                var r = i(e, 4),
                  n = r[0],
                  o = r[1],
                  h = r[2],
                  u = r[3];
                return new t(new s.BN(n), new s.BN(o), h, u);
              }),
              (t.prototype._validate = function () {
                if (this.nonce.lt(new s.BN(0)))
                  throw new Error("nonce must be greater than zero");
                if (this.balance.lt(new s.BN(0)))
                  throw new Error("balance must be greater than zero");
                if (32 !== this.stateRoot.length)
                  throw new Error("stateRoot must have a length of 32");
                if (32 !== this.codeHash.length)
                  throw new Error("codeHash must have a length of 32");
              }),
              (t.prototype.raw = function () {
                return [
                  (0, p.bnToUnpaddedBuffer)(this.nonce),
                  (0, p.bnToUnpaddedBuffer)(this.balance),
                  this.stateRoot,
                  this.codeHash,
                ];
              }),
              (t.prototype.serialize = function () {
                return s.rlp.encode(this.raw());
              }),
              (t.prototype.isContract = function () {
                return !this.codeHash.equals(a.KECCAK256_NULL);
              }),
              (t.prototype.isEmpty = function () {
                return (
                  this.balance.isZero() &&
                  this.nonce.isZero() &&
                  this.codeHash.equals(a.KECCAK256_NULL)
                );
              }),
              t
            );
          })();
        e.Account = d;
        var m = function (t) {
          try {
            (0, c.assertIsString)(t);
          } catch (e) {
            return !1;
          }
          return /^0x[0-9a-fA-F]{40}$/.test(t);
        };
        e.isValidAddress = m;
        var y = function (t, e) {
          (0, c.assertIsHexString)(t);
          var r = (0, u.stripHexPrefix)(t).toLowerCase(),
            i = "";
          if (e) {
            var n = (0, p.toType)(e, p.TypeOutput.BN);
            i = n.toString() + "0x";
          }
          for (
            var o = (0, f.keccakFromString)(i + r).toString("hex"),
              s = "0x",
              h = 0;
            h < r.length;
            h++
          )
            parseInt(o[h], 16) >= 8 ? (s += r[h].toUpperCase()) : (s += r[h]);
          return s;
        };
        e.toChecksumAddress = y;
        var v = function (t, r) {
          return (
            (0, e.isValidAddress)(t) && (0, e.toChecksumAddress)(t, r) === t
          );
        };
        e.isValidChecksumAddress = v;
        var g = function (e, r) {
          ((0, c.assertIsBuffer)(e), (0, c.assertIsBuffer)(r));
          var i = new s.BN(r);
          return i.isZero()
            ? (0, f.rlphash)([e, null]).slice(-20)
            : (0, f.rlphash)([e, t.from(i.toArray())]).slice(-20);
        };
        e.generateAddress = g;
        var w = function (e, r, i) {
          ((0, c.assertIsBuffer)(e),
            (0, c.assertIsBuffer)(r),
            (0, c.assertIsBuffer)(i),
            (0, o.default)(20 === e.length),
            (0, o.default)(32 === r.length));
          var n = (0, f.keccak256)(
            t.concat([t.from("ff", "hex"), e, r, (0, f.keccak256)(i)]),
          );
          return n.slice(-20);
        };
        e.generateAddress2 = w;
        var M = function (t) {
          return (0, h.privateKeyVerify)(t);
        };
        e.isValidPrivate = M;
        var b = function (e, r) {
          return (
            void 0 === r && (r = !1),
            (0, c.assertIsBuffer)(e),
            64 === e.length
              ? (0, h.publicKeyVerify)(t.concat([t.from([4]), e]))
              : !!r && (0, h.publicKeyVerify)(e)
          );
        };
        e.isValidPublic = b;
        var _ = function (e, r) {
          return (
            void 0 === r && (r = !1),
            (0, c.assertIsBuffer)(e),
            r &&
              64 !== e.length &&
              (e = t.from((0, h.publicKeyConvert)(e, !1).slice(1))),
            (0, o.default)(64 === e.length),
            (0, f.keccak)(e).slice(-20)
          );
        };
        ((e.pubToAddress = _), (e.publicToAddress = e.pubToAddress));
        var A = function (e) {
          return (
            (0, c.assertIsBuffer)(e),
            t.from((0, h.publicKeyCreate)(e, !1)).slice(1)
          );
        };
        e.privateToPublic = A;
        var S = function (t) {
          return (0, e.publicToAddress)((0, e.privateToPublic)(t));
        };
        e.privateToAddress = S;
        var x = function (e) {
          return (
            (0, c.assertIsBuffer)(e),
            64 !== e.length &&
              (e = t.from((0, h.publicKeyConvert)(e, !1).slice(1))),
            e
          );
        };
        e.importPublic = x;
        var E = function () {
          var t = 20,
            e = (0, l.zeros)(t);
          return (0, l.bufferToHex)(e);
        };
        e.zeroAddress = E;
        var k = function (t) {
          try {
            (0, c.assertIsString)(t);
          } catch (i) {
            return !1;
          }
          var r = (0, e.zeroAddress)();
          return r === t;
        };
        e.isZeroAddress = k;
      }).call(this, r(2).Buffer);
    },
    648: function (t, e, r) {
      "use strict";
      t.exports = function () {
        if (
          "function" !== typeof Symbol ||
          "function" !== typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" === typeof Symbol.iterator) return !0;
        var t = {},
          e = Symbol("test"),
          r = Object(e);
        if ("string" === typeof e) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
        var i = 42;
        for (var n in ((t[e] = i), t)) return !1;
        if ("function" === typeof Object.keys && 0 !== Object.keys(t).length)
          return !1;
        if (
          "function" === typeof Object.getOwnPropertyNames &&
          0 !== Object.getOwnPropertyNames(t).length
        )
          return !1;
        var o = Object.getOwnPropertySymbols(t);
        if (1 !== o.length || o[0] !== e) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
        if ("function" === typeof Object.getOwnPropertyDescriptor) {
          var s = Object.getOwnPropertyDescriptor(t, e);
          if (s.value !== i || !0 !== s.enumerable) return !1;
        }
        return !0;
      };
    },
    649: function (t, e, r) {
      "use strict";
      t.exports =
        ("undefined" !== typeof Reflect && Reflect.getPrototypeOf) || null;
    },
    650: function (t, e, r) {
      "use strict";
      var i = r(319);
      t.exports = i.getPrototypeOf || null;
    },
    651: function (t, e, r) {
      "use strict";
      var i =
          (this && this.__awaiter) ||
          function (t, e, r, i) {
            function n(t) {
              return t instanceof r
                ? t
                : new r(function (e) {
                    e(t);
                  });
            }
            return new (r || (r = Promise))(function (r, o) {
              function s(t) {
                try {
                  u(i.next(t));
                } catch (e) {
                  o(e);
                }
              }
              function h(t) {
                try {
                  u(i["throw"](t));
                } catch (e) {
                  o(e);
                }
              }
              function u(t) {
                t.done ? r(t.value) : n(t.value).then(s, h);
              }
              u((i = i.apply(t, e || [])).next());
            });
          },
        n =
          (this && this.__generator) ||
          function (t, e) {
            var r,
              i,
              n,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & n[0]) throw n[1];
                  return n[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: h(0), throw: h(1), return: h(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function h(t) {
              return function (e) {
                return u([t, e]);
              };
            }
            function u(o) {
              if (r) throw new TypeError("Generator is already executing.");
              while (s)
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & o[0]
                          ? i["return"]
                          : o[0]
                            ? i["throw"] || ((n = i["return"]) && n.call(i), 0)
                            : i.next) &&
                      !(n = n.call(i, o[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                    case 0:
                    case 1:
                      n = o;
                      break;
                    case 4:
                      return (s.label++, { value: o[1], done: !1 });
                    case 5:
                      (s.label++, (i = o[1]), (o = [0]));
                      continue;
                    case 7:
                      ((o = s.ops.pop()), s.trys.pop());
                      continue;
                    default:
                      if (
                        ((n = s.trys),
                        !(n = n.length > 0 && n[n.length - 1]) &&
                          (6 === o[0] || 2 === o[0]))
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < n[1]) {
                        ((s.label = n[1]), (n = o));
                        break;
                      }
                      if (n && s.label < n[2]) {
                        ((s.label = n[2]), s.ops.push(o));
                        break;
                      }
                      (n[2] && s.ops.pop(), s.trys.pop());
                      continue;
                  }
                  o = e.call(t, s);
                } catch (h) {
                  ((o = [6, h]), (i = 0));
                } finally {
                  r = n = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            }
          };
      function o(t) {
        for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r]);
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = r(396),
        h = r(1927),
        u = 32;
      function a() {
        return i(this, void 0, void 0, function () {
          var t;
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, h.getRandomBytes(u)];
              case 1:
                return (
                  (t = e.sent()),
                  s.privateKeyVerify(t) ? [2, t] : [3, 0]
                );
              case 2:
                return [2];
            }
          });
        });
      }
      function l() {
        while (1) {
          var t = h.getRandomBytesSync(u);
          if (s.privateKeyVerify(t)) return t;
        }
      }
      ((e.createPrivateKey = a), (e.createPrivateKeySync = l), o(r(396)));
    },
    72: function (t, e, r) {
      "use strict";
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, i) {
                void 0 === i && (i = r);
                var n = Object.getOwnPropertyDescriptor(e, r);
                ((n &&
                  !("get" in n
                    ? !e.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }),
                  Object.defineProperty(t, i, n));
              }
            : function (t, e, r, i) {
                (void 0 === i && (i = r), (t[i] = e[r]));
              }),
        n =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: e,
                });
              }
            : function (t, e) {
                t["default"] = e;
              }),
        o =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var r in t)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(t, r) &&
                  i(e, t, r);
            return (n(e, t), e);
          },
        s =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.rlp = e.BN = void 0));
      var h = s(r(1884));
      e.BN = h.default;
      var u = o(r(878));
      e.rlp = u;
    },
    801: function (t, e, r) {
      "use strict";
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, i) {
                void 0 === i && (i = r);
                var n = Object.getOwnPropertyDescriptor(e, r);
                ((n &&
                  !("get" in n
                    ? !e.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  }),
                  Object.defineProperty(t, i, n));
              }
            : function (t, e, r, i) {
                (void 0 === i && (i = r), (t[i] = e[r]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var r in t)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(e, r) ||
                i(e, t, r);
          };
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isHexString =
          e.getKeys =
          e.fromAscii =
          e.fromUtf8 =
          e.toAscii =
          e.arrayContainsArray =
          e.getBinarySize =
          e.padToEven =
          e.stripHexPrefix =
          e.isHexPrefixed =
            void 0),
        n(r(645), e),
        n(r(646), e),
        n(r(1965), e),
        n(r(322), e),
        n(r(1966), e),
        n(r(98), e),
        n(r(1967), e),
        n(r(72), e),
        n(r(327), e));
      var o = r(118);
      (Object.defineProperty(e, "isHexPrefixed", {
        enumerable: !0,
        get: function () {
          return o.isHexPrefixed;
        },
      }),
        Object.defineProperty(e, "stripHexPrefix", {
          enumerable: !0,
          get: function () {
            return o.stripHexPrefix;
          },
        }),
        Object.defineProperty(e, "padToEven", {
          enumerable: !0,
          get: function () {
            return o.padToEven;
          },
        }),
        Object.defineProperty(e, "getBinarySize", {
          enumerable: !0,
          get: function () {
            return o.getBinarySize;
          },
        }),
        Object.defineProperty(e, "arrayContainsArray", {
          enumerable: !0,
          get: function () {
            return o.arrayContainsArray;
          },
        }),
        Object.defineProperty(e, "toAscii", {
          enumerable: !0,
          get: function () {
            return o.toAscii;
          },
        }),
        Object.defineProperty(e, "fromUtf8", {
          enumerable: !0,
          get: function () {
            return o.fromUtf8;
          },
        }),
        Object.defineProperty(e, "fromAscii", {
          enumerable: !0,
          get: function () {
            return o.fromAscii;
          },
        }),
        Object.defineProperty(e, "getKeys", {
          enumerable: !0,
          get: function () {
            return o.getKeys;
          },
        }),
        Object.defineProperty(e, "isHexString", {
          enumerable: !0,
          get: function () {
            return o.isHexString;
          },
        }));
    },
    827: function (t, e, r) {
      "use strict";
      (function (t) {
        function r(e) {
          return function (r) {
            var i = e();
            return (i.update(r), t.from(i.digest()));
          };
        }
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createHashFunction = r));
      }).call(this, r(2).Buffer);
    },
    842: function (t, e, r) {
      "use strict";
      var i = r(64),
        n = r(138),
        o = i.rotl32,
        s = i.sum32,
        h = i.sum32_3,
        u = i.sum32_4,
        a = n.BlockHash;
      function l() {
        if (!(this instanceof l)) return new l();
        (a.call(this),
          (this.h = [
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]),
          (this.endian = "little"));
      }
      function f(t, e, r, i) {
        return t <= 15
          ? e ^ r ^ i
          : t <= 31
            ? (e & r) | (~e & i)
            : t <= 47
              ? (e | ~r) ^ i
              : t <= 63
                ? (e & i) | (r & ~i)
                : e ^ (r | ~i);
      }
      function c(t) {
        return t <= 15
          ? 0
          : t <= 31
            ? 1518500249
            : t <= 47
              ? 1859775393
              : t <= 63
                ? 2400959708
                : 2840853838;
      }
      function p(t) {
        return t <= 15
          ? 1352829926
          : t <= 31
            ? 1548603684
            : t <= 47
              ? 1836072691
              : t <= 63
                ? 2053994217
                : 0;
      }
      (i.inherits(l, a),
        (e.ripemd160 = l),
        (l.blockSize = 512),
        (l.outSize = 160),
        (l.hmacStrength = 192),
        (l.padLength = 64),
        (l.prototype._update = function (t, e) {
          for (
            var r = this.h[0],
              i = this.h[1],
              n = this.h[2],
              a = this.h[3],
              l = this.h[4],
              g = r,
              w = i,
              M = n,
              b = a,
              _ = l,
              A = 0;
            A < 80;
            A++
          ) {
            var S = s(o(u(r, f(A, i, n, a), t[d[A] + e], c(A)), y[A]), l);
            ((r = l),
              (l = a),
              (a = o(n, 10)),
              (n = i),
              (i = S),
              (S = s(o(u(g, f(79 - A, w, M, b), t[m[A] + e], p(A)), v[A]), _)),
              (g = _),
              (_ = b),
              (b = o(M, 10)),
              (M = w),
              (w = S));
          }
          ((S = h(this.h[1], n, b)),
            (this.h[1] = h(this.h[2], a, _)),
            (this.h[2] = h(this.h[3], l, g)),
            (this.h[3] = h(this.h[4], r, w)),
            (this.h[4] = h(this.h[0], i, M)),
            (this.h[0] = S));
        }),
        (l.prototype._digest = function (t) {
          return "hex" === t
            ? i.toHex32(this.h, "little")
            : i.split32(this.h, "little");
        }));
      var d = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ],
        m = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ],
        y = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ],
        v = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ];
    },
    877: function (t, e, r) {
      "use strict";
      var i = r(1879),
        n = r(643),
        o = new i(0),
        s = new i(-1),
        h = {
          noether: "0",
          wei: "1",
          kwei: "1000",
          Kwei: "1000",
          babbage: "1000",
          femtoether: "1000",
          mwei: "1000000",
          Mwei: "1000000",
          lovelace: "1000000",
          picoether: "1000000",
          gwei: "1000000000",
          Gwei: "1000000000",
          shannon: "1000000000",
          nanoether: "1000000000",
          nano: "1000000000",
          szabo: "1000000000000",
          microether: "1000000000000",
          micro: "1000000000000",
          finney: "1000000000000000",
          milliether: "1000000000000000",
          milli: "1000000000000000",
          ether: "1000000000000000000",
          kether: "1000000000000000000000",
          grand: "1000000000000000000000",
          mether: "1000000000000000000000000",
          gether: "1000000000000000000000000000",
          tether: "1000000000000000000000000000000",
        };
      function u(t) {
        var e = t ? t.toLowerCase() : "ether",
          r = h[e];
        if ("string" !== typeof r)
          throw new Error(
            "[ethjs-unit] the unit provided " +
              t +
              " doesn't exists, please use the one of the following units " +
              JSON.stringify(h, null, 2),
          );
        return new i(r, 10);
      }
      function a(t) {
        if ("string" === typeof t) {
          if (!t.match(/^-?[0-9.]+$/))
            throw new Error(
              "while converting number to string, invalid number value '" +
                t +
                "', should be a number matching (^-?[0-9.]+).",
            );
          return t;
        }
        if ("number" === typeof t) return String(t);
        if (
          "object" === typeof t &&
          t.toString &&
          (t.toTwos || t.dividedToIntegerBy)
        )
          return t.toPrecision ? String(t.toPrecision()) : t.toString(10);
        throw new Error(
          "while converting number to string, invalid number value '" +
            t +
            "' type " +
            typeof t +
            ".",
        );
      }
      function l(t, e, r) {
        var i = n(t),
          a = i.lt(o),
          l = u(e),
          f = h[e].length - 1 || 1,
          c = r || {};
        a && (i = i.mul(s));
        var p = i.mod(l).toString(10);
        while (p.length < f) p = "0" + p;
        c.pad || (p = p.match(/^([0-9]*[1-9]|0)(0*)/)[1]);
        var d = i.div(l).toString(10);
        c.commify && (d = d.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        var m = d + ("0" == p ? "" : "." + p);
        return (a && (m = "-" + m), m);
      }
      function f(t, e) {
        var r = a(t),
          n = u(e),
          o = h[e].length - 1 || 1,
          l = "-" === r.substring(0, 1);
        if ((l && (r = r.substring(1)), "." === r))
          throw new Error(
            "[ethjs-unit] while converting number " +
              t +
              " to wei, invalid value",
          );
        var f = r.split(".");
        if (f.length > 2)
          throw new Error(
            "[ethjs-unit] while converting number " +
              t +
              " to wei,  too many decimal points",
          );
        var c = f[0],
          p = f[1];
        if ((c || (c = "0"), p || (p = "0"), p.length > o))
          throw new Error(
            "[ethjs-unit] while converting number " +
              t +
              " to wei, too many decimal places",
          );
        while (p.length < o) p += "0";
        ((c = new i(c)), (p = new i(p)));
        var d = c.mul(n).add(p);
        return (l && (d = d.mul(s)), new i(d.toString(10), 10));
      }
      t.exports = {
        unitMap: h,
        numberToString: a,
        getValueOfUnit: u,
        fromWei: l,
        toWei: f,
      };
    },
    98: function (t, e, r) {
      "use strict";
      (function (t) {
        var i =
            (this && this.__values) ||
            function (t) {
              var e = "function" === typeof Symbol && Symbol.iterator,
                r = e && t[e],
                i = 0;
              if (r) return r.call(t);
              if (t && "number" === typeof t.length)
                return {
                  next: function () {
                    return (
                      t && i >= t.length && (t = void 0),
                      { value: t && t[i++], done: !t }
                    );
                  },
                };
              throw new TypeError(
                e
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined.",
              );
            },
          n =
            (this && this.__read) ||
            function (t, e) {
              var r = "function" === typeof Symbol && t[Symbol.iterator];
              if (!r) return t;
              var i,
                n,
                o = r.call(t),
                s = [];
              try {
                while ((void 0 === e || e-- > 0) && !(i = o.next()).done)
                  s.push(i.value);
              } catch (h) {
                n = { error: h };
              } finally {
                try {
                  i && !i.done && (r = o["return"]) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
              return s;
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.bufArrToArr =
            e.arrToBufArr =
            e.validateNoLeadingZeroes =
            e.baToJSON =
            e.toUtf8 =
            e.addHexPrefix =
            e.toUnsigned =
            e.fromSigned =
            e.bufferToHex =
            e.bufferToInt =
            e.toBuffer =
            e.unpadHexString =
            e.unpadArray =
            e.unpadBuffer =
            e.setLengthRight =
            e.setLengthLeft =
            e.zeros =
            e.intToBuffer =
            e.intToHex =
              void 0));
        var o = r(72),
          s = r(118),
          h = r(189),
          u = function (t) {
            if (!Number.isSafeInteger(t) || t < 0)
              throw new Error("Received an invalid integer type: ".concat(t));
            return "0x".concat(t.toString(16));
          };
        e.intToHex = u;
        var a = function (r) {
          var i = (0, e.intToHex)(r);
          return t.from((0, s.padToEven)(i.slice(2)), "hex");
        };
        e.intToBuffer = a;
        var l = function (e) {
          return t.allocUnsafe(e).fill(0);
        };
        e.zeros = l;
        var f = function (t, r, i) {
            var n = (0, e.zeros)(r);
            return i
              ? t.length < r
                ? (t.copy(n), n)
                : t.slice(0, r)
              : t.length < r
                ? (t.copy(n, r - t.length), n)
                : t.slice(-r);
          },
          c = function (t, e) {
            return ((0, h.assertIsBuffer)(t), f(t, e, !1));
          };
        e.setLengthLeft = c;
        var p = function (t, e) {
          return ((0, h.assertIsBuffer)(t), f(t, e, !0));
        };
        e.setLengthRight = p;
        var d = function (t) {
            var e = t[0];
            while (t.length > 0 && "0" === e.toString())
              ((t = t.slice(1)), (e = t[0]));
            return t;
          },
          m = function (t) {
            return ((0, h.assertIsBuffer)(t), d(t));
          };
        e.unpadBuffer = m;
        var y = function (t) {
          return ((0, h.assertIsArray)(t), d(t));
        };
        e.unpadArray = y;
        var v = function (t) {
          return (
            (0, h.assertIsHexString)(t),
            (t = (0, s.stripHexPrefix)(t)),
            d(t)
          );
        };
        e.unpadHexString = v;
        var g = function (r) {
          if (null === r || void 0 === r) return t.allocUnsafe(0);
          if (t.isBuffer(r)) return t.from(r);
          if (Array.isArray(r) || r instanceof Uint8Array) return t.from(r);
          if ("string" === typeof r) {
            if (!(0, s.isHexString)(r))
              throw new Error(
                "Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: ".concat(
                  r,
                ),
              );
            return t.from((0, s.padToEven)((0, s.stripHexPrefix)(r)), "hex");
          }
          if ("number" === typeof r) return (0, e.intToBuffer)(r);
          if (o.BN.isBN(r)) {
            if (r.isNeg())
              throw new Error(
                "Cannot convert negative BN to buffer. Given: ".concat(r),
              );
            return r.toArrayLike(t);
          }
          if (r.toArray) return t.from(r.toArray());
          if (r.toBuffer) return t.from(r.toBuffer());
          throw new Error("invalid type");
        };
        e.toBuffer = g;
        var w = function (t) {
          return new o.BN((0, e.toBuffer)(t)).toNumber();
        };
        e.bufferToInt = w;
        var M = function (t) {
          return ((t = (0, e.toBuffer)(t)), "0x" + t.toString("hex"));
        };
        e.bufferToHex = M;
        var b = function (t) {
          return new o.BN(t).fromTwos(256);
        };
        e.fromSigned = b;
        var _ = function (e) {
          return t.from(e.toTwos(256).toArray());
        };
        e.toUnsigned = _;
        var A = function (t) {
          return "string" !== typeof t || (0, s.isHexPrefixed)(t)
            ? t
            : "0x" + t;
        };
        e.addHexPrefix = A;
        var S = function (e) {
          var r = /^(00)+|(00)+$/g;
          if (((e = (0, s.stripHexPrefix)(e)), e.length % 2 !== 0))
            throw new Error(
              "Invalid non-even hex string input for toUtf8() provided",
            );
          var i = t.from(e.replace(r, ""), "hex");
          return i.toString("utf8");
        };
        e.toUtf8 = S;
        var x = function (r) {
          if (t.isBuffer(r)) return "0x".concat(r.toString("hex"));
          if (r instanceof Array) {
            for (var i = [], n = 0; n < r.length; n++)
              i.push((0, e.baToJSON)(r[n]));
            return i;
          }
        };
        e.baToJSON = x;
        var E = function (t) {
          var e, r;
          try {
            for (
              var o = i(Object.entries(t)), s = o.next();
              !s.done;
              s = o.next()
            ) {
              var h = n(s.value, 2),
                u = h[0],
                a = h[1];
              if (void 0 !== a && a.length > 0 && 0 === a[0])
                throw new Error(
                  ""
                    .concat(u, " cannot have leading zeroes, received: ")
                    .concat(a.toString("hex")),
                );
            }
          } catch (l) {
            e = { error: l };
          } finally {
            try {
              s && !s.done && (r = o.return) && r.call(o);
            } finally {
              if (e) throw e.error;
            }
          }
        };
        function k(e) {
          return Array.isArray(e)
            ? e.map(function (t) {
                return k(t);
              })
            : t.from(e);
        }
        function B(t) {
          return Array.isArray(t)
            ? t.map(function (t) {
                return B(t);
              })
            : Uint8Array.from(null !== t && void 0 !== t ? t : []);
        }
        ((e.validateNoLeadingZeroes = E),
          (e.arrToBufArr = k),
          (e.bufArrToArr = B));
      }).call(this, r(2).Buffer);
    },
  },
]);
