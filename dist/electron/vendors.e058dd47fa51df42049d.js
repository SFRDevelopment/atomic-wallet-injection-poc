(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [80],
  {
    1789: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n,
        o,
        s = i(r(603)),
        h = i(r(180)),
        a = 0,
        u = 0;
      function f(t, e, r) {
        var i = (e && r) || 0,
          f = e || new Array(16);
        t = t || {};
        var l = t.node || n,
          c = void 0 !== t.clockseq ? t.clockseq : o;
        if (null == l || null == c) {
          var d = t.random || (t.rng || s.default)();
          (null == l && (l = n = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]),
            null == c && (c = o = 16383 & ((d[6] << 8) | d[7])));
        }
        var m = void 0 !== t.msecs ? t.msecs : Date.now(),
          p = void 0 !== t.nsecs ? t.nsecs : u + 1,
          g = m - a + (p - u) / 1e4;
        if (
          (g < 0 && void 0 === t.clockseq && (c = (c + 1) & 16383),
          (g < 0 || m > a) && void 0 === t.nsecs && (p = 0),
          p >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        ((a = m), (u = p), (o = c), (m += 122192928e5));
        var y = (1e4 * (268435455 & m) + p) % 4294967296;
        ((f[i++] = (y >>> 24) & 255),
          (f[i++] = (y >>> 16) & 255),
          (f[i++] = (y >>> 8) & 255),
          (f[i++] = 255 & y));
        var v = ((m / 4294967296) * 1e4) & 268435455;
        ((f[i++] = (v >>> 8) & 255),
          (f[i++] = 255 & v),
          (f[i++] = ((v >>> 24) & 15) | 16),
          (f[i++] = (v >>> 16) & 255),
          (f[i++] = (c >>> 8) | 128),
          (f[i++] = 255 & c));
        for (var w = 0; w < 6; ++w) f[i + w] = l[w];
        return e || (0, h.default)(f);
      }
      e.default = f;
    },
    1790: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    },
    1791: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(604)),
        o = i(r(1792)),
        s = (0, n.default)("v3", 48, o.default);
      e.default = s;
    },
    1792: function (t, e, r) {
      "use strict";
      function i(t) {
        if ("string" === typeof t) {
          var e = unescape(encodeURIComponent(t));
          t = new Uint8Array(e.length);
          for (var r = 0; r < e.length; ++r) t[r] = e.charCodeAt(r);
        }
        return n(s(h(t), 8 * t.length));
      }
      function n(t) {
        for (
          var e = [], r = 32 * t.length, i = "0123456789abcdef", n = 0;
          n < r;
          n += 8
        ) {
          var o = (t[n >> 5] >>> (n % 32)) & 255,
            s = parseInt(i.charAt((o >>> 4) & 15) + i.charAt(15 & o), 16);
          e.push(s);
        }
        return e;
      }
      function o(t) {
        return 14 + (((t + 64) >>> 9) << 4) + 1;
      }
      function s(t, e) {
        ((t[e >> 5] |= 128 << (e % 32)), (t[o(e) - 1] = e));
        for (
          var r = 1732584193,
            i = -271733879,
            n = -1732584194,
            s = 271733878,
            h = 0;
          h < t.length;
          h += 16
        ) {
          var u = r,
            f = i,
            p = n,
            g = s;
          ((r = l(r, i, n, s, t[h], 7, -680876936)),
            (s = l(s, r, i, n, t[h + 1], 12, -389564586)),
            (n = l(n, s, r, i, t[h + 2], 17, 606105819)),
            (i = l(i, n, s, r, t[h + 3], 22, -1044525330)),
            (r = l(r, i, n, s, t[h + 4], 7, -176418897)),
            (s = l(s, r, i, n, t[h + 5], 12, 1200080426)),
            (n = l(n, s, r, i, t[h + 6], 17, -1473231341)),
            (i = l(i, n, s, r, t[h + 7], 22, -45705983)),
            (r = l(r, i, n, s, t[h + 8], 7, 1770035416)),
            (s = l(s, r, i, n, t[h + 9], 12, -1958414417)),
            (n = l(n, s, r, i, t[h + 10], 17, -42063)),
            (i = l(i, n, s, r, t[h + 11], 22, -1990404162)),
            (r = l(r, i, n, s, t[h + 12], 7, 1804603682)),
            (s = l(s, r, i, n, t[h + 13], 12, -40341101)),
            (n = l(n, s, r, i, t[h + 14], 17, -1502002290)),
            (i = l(i, n, s, r, t[h + 15], 22, 1236535329)),
            (r = c(r, i, n, s, t[h + 1], 5, -165796510)),
            (s = c(s, r, i, n, t[h + 6], 9, -1069501632)),
            (n = c(n, s, r, i, t[h + 11], 14, 643717713)),
            (i = c(i, n, s, r, t[h], 20, -373897302)),
            (r = c(r, i, n, s, t[h + 5], 5, -701558691)),
            (s = c(s, r, i, n, t[h + 10], 9, 38016083)),
            (n = c(n, s, r, i, t[h + 15], 14, -660478335)),
            (i = c(i, n, s, r, t[h + 4], 20, -405537848)),
            (r = c(r, i, n, s, t[h + 9], 5, 568446438)),
            (s = c(s, r, i, n, t[h + 14], 9, -1019803690)),
            (n = c(n, s, r, i, t[h + 3], 14, -187363961)),
            (i = c(i, n, s, r, t[h + 8], 20, 1163531501)),
            (r = c(r, i, n, s, t[h + 13], 5, -1444681467)),
            (s = c(s, r, i, n, t[h + 2], 9, -51403784)),
            (n = c(n, s, r, i, t[h + 7], 14, 1735328473)),
            (i = c(i, n, s, r, t[h + 12], 20, -1926607734)),
            (r = d(r, i, n, s, t[h + 5], 4, -378558)),
            (s = d(s, r, i, n, t[h + 8], 11, -2022574463)),
            (n = d(n, s, r, i, t[h + 11], 16, 1839030562)),
            (i = d(i, n, s, r, t[h + 14], 23, -35309556)),
            (r = d(r, i, n, s, t[h + 1], 4, -1530992060)),
            (s = d(s, r, i, n, t[h + 4], 11, 1272893353)),
            (n = d(n, s, r, i, t[h + 7], 16, -155497632)),
            (i = d(i, n, s, r, t[h + 10], 23, -1094730640)),
            (r = d(r, i, n, s, t[h + 13], 4, 681279174)),
            (s = d(s, r, i, n, t[h], 11, -358537222)),
            (n = d(n, s, r, i, t[h + 3], 16, -722521979)),
            (i = d(i, n, s, r, t[h + 6], 23, 76029189)),
            (r = d(r, i, n, s, t[h + 9], 4, -640364487)),
            (s = d(s, r, i, n, t[h + 12], 11, -421815835)),
            (n = d(n, s, r, i, t[h + 15], 16, 530742520)),
            (i = d(i, n, s, r, t[h + 2], 23, -995338651)),
            (r = m(r, i, n, s, t[h], 6, -198630844)),
            (s = m(s, r, i, n, t[h + 7], 10, 1126891415)),
            (n = m(n, s, r, i, t[h + 14], 15, -1416354905)),
            (i = m(i, n, s, r, t[h + 5], 21, -57434055)),
            (r = m(r, i, n, s, t[h + 12], 6, 1700485571)),
            (s = m(s, r, i, n, t[h + 3], 10, -1894986606)),
            (n = m(n, s, r, i, t[h + 10], 15, -1051523)),
            (i = m(i, n, s, r, t[h + 1], 21, -2054922799)),
            (r = m(r, i, n, s, t[h + 8], 6, 1873313359)),
            (s = m(s, r, i, n, t[h + 15], 10, -30611744)),
            (n = m(n, s, r, i, t[h + 6], 15, -1560198380)),
            (i = m(i, n, s, r, t[h + 13], 21, 1309151649)),
            (r = m(r, i, n, s, t[h + 4], 6, -145523070)),
            (s = m(s, r, i, n, t[h + 11], 10, -1120210379)),
            (n = m(n, s, r, i, t[h + 2], 15, 718787259)),
            (i = m(i, n, s, r, t[h + 9], 21, -343485551)),
            (r = a(r, u)),
            (i = a(i, f)),
            (n = a(n, p)),
            (s = a(s, g)));
        }
        return [r, i, n, s];
      }
      function h(t) {
        if (0 === t.length) return [];
        for (
          var e = 8 * t.length, r = new Uint32Array(o(e)), i = 0;
          i < e;
          i += 8
        )
          r[i >> 5] |= (255 & t[i / 8]) << (i % 32);
        return r;
      }
      function a(t, e) {
        var r = (65535 & t) + (65535 & e),
          i = (t >> 16) + (e >> 16) + (r >> 16);
        return (i << 16) | (65535 & r);
      }
      function u(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function f(t, e, r, i, n, o) {
        return a(u(a(a(e, t), a(i, o)), n), r);
      }
      function l(t, e, r, i, n, o, s) {
        return f((e & r) | (~e & i), t, e, n, o, s);
      }
      function c(t, e, r, i, n, o, s) {
        return f((e & i) | (r & ~i), t, e, n, o, s);
      }
      function d(t, e, r, i, n, o, s) {
        return f(e ^ r ^ i, t, e, n, o, s);
      }
      function m(t, e, r, i, n, o, s) {
        return f(r ^ (e | ~i), t, e, n, o, s);
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = i;
    },
    1793: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(603)),
        o = i(r(180));
      function s(t, e, r) {
        t = t || {};
        var i = t.random || (t.rng || n.default)();
        if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), e)) {
          r = r || 0;
          for (var s = 0; s < 16; ++s) e[r + s] = i[s];
          return e;
        }
        return (0, o.default)(i);
      }
      e.default = s;
    },
    1794: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(604)),
        o = i(r(1795)),
        s = (0, n.default)("v5", 80, o.default);
      e.default = s;
    },
    1795: function (t, e, r) {
      "use strict";
      function i(t, e, r, i) {
        switch (t) {
          case 0:
            return (e & r) ^ (~e & i);
          case 1:
            return e ^ r ^ i;
          case 2:
            return (e & r) ^ (e & i) ^ (r & i);
          case 3:
            return e ^ r ^ i;
        }
      }
      function n(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      function o(t) {
        var e = [1518500249, 1859775393, 2400959708, 3395469782],
          r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if ("string" === typeof t) {
          var o = unescape(encodeURIComponent(t));
          t = [];
          for (var s = 0; s < o.length; ++s) t.push(o.charCodeAt(s));
        } else Array.isArray(t) || (t = Array.prototype.slice.call(t));
        t.push(128);
        for (
          var h = t.length / 4 + 2,
            a = Math.ceil(h / 16),
            u = new Array(a),
            f = 0;
          f < a;
          ++f
        ) {
          for (var l = new Uint32Array(16), c = 0; c < 16; ++c)
            l[c] =
              (t[64 * f + 4 * c] << 24) |
              (t[64 * f + 4 * c + 1] << 16) |
              (t[64 * f + 4 * c + 2] << 8) |
              t[64 * f + 4 * c + 3];
          u[f] = l;
        }
        ((u[a - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
          (u[a - 1][14] = Math.floor(u[a - 1][14])),
          (u[a - 1][15] = (8 * (t.length - 1)) & 4294967295));
        for (var d = 0; d < a; ++d) {
          for (var m = new Uint32Array(80), p = 0; p < 16; ++p) m[p] = u[d][p];
          for (var g = 16; g < 80; ++g)
            m[g] = n(m[g - 3] ^ m[g - 8] ^ m[g - 14] ^ m[g - 16], 1);
          for (
            var y = r[0], v = r[1], w = r[2], M = r[3], b = r[4], _ = 0;
            _ < 80;
            ++_
          ) {
            var E = Math.floor(_ / 20),
              A = (n(y, 5) + i(E, v, w, M) + b + e[E] + m[_]) >>> 0;
            ((b = M), (M = w), (w = n(v, 30) >>> 0), (v = y), (y = A));
          }
          ((r[0] = (r[0] + y) >>> 0),
            (r[1] = (r[1] + v) >>> 0),
            (r[2] = (r[2] + w) >>> 0),
            (r[3] = (r[3] + M) >>> 0),
            (r[4] = (r[4] + b) >>> 0));
        }
        return [
          (r[0] >> 24) & 255,
          (r[0] >> 16) & 255,
          (r[0] >> 8) & 255,
          255 & r[0],
          (r[1] >> 24) & 255,
          (r[1] >> 16) & 255,
          (r[1] >> 8) & 255,
          255 & r[1],
          (r[2] >> 24) & 255,
          (r[2] >> 16) & 255,
          (r[2] >> 8) & 255,
          255 & r[2],
          (r[3] >> 24) & 255,
          (r[3] >> 16) & 255,
          (r[3] >> 8) & 255,
          255 & r[3],
          (r[4] >> 24) & 255,
          (r[4] >> 16) & 255,
          (r[4] >> 8) & 255,
          255 & r[4],
        ];
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = o;
    },
    1796: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = "00000000-0000-0000-0000-000000000000";
    },
    1797: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(181));
      function o(t) {
        if (!(0, n.default)(t)) throw TypeError("Invalid UUID");
        return parseInt(t.substr(14, 1), 16);
      }
      e.default = o;
    },
    1798: function (t, e, r) {
      "use strict";
      const i = r(602).v4,
        n = function (t, e, r, n) {
          if ("string" !== typeof t)
            throw new TypeError(t + " must be a string");
          n = n || {};
          const o = "number" === typeof n.version ? n.version : 2;
          if (1 !== o && 2 !== o) throw new TypeError(o + " must be 1 or 2");
          const s = { method: t };
          if ((2 === o && (s.jsonrpc = "2.0"), e)) {
            if ("object" !== typeof e && !Array.isArray(e))
              throw new TypeError(e + " must be an object, array or omitted");
            s.params = e;
          }
          if ("undefined" === typeof r) {
            const t =
              "function" === typeof n.generator
                ? n.generator
                : function () {
                    return i();
                  };
            s.id = t(s, n);
          } else
            2 === o && null === r
              ? n.notificationIdNull && (s.id = null)
              : (s.id = r);
          return s;
        };
      t.exports = n;
    },
    180: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      for (var n = i(r(181)), o = [], s = 0; s < 256; ++s)
        o.push((s + 256).toString(16).substr(1));
      function h(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = (
            o[t[e + 0]] +
            o[t[e + 1]] +
            o[t[e + 2]] +
            o[t[e + 3]] +
            "-" +
            o[t[e + 4]] +
            o[t[e + 5]] +
            "-" +
            o[t[e + 6]] +
            o[t[e + 7]] +
            "-" +
            o[t[e + 8]] +
            o[t[e + 9]] +
            "-" +
            o[t[e + 10]] +
            o[t[e + 11]] +
            o[t[e + 12]] +
            o[t[e + 13]] +
            o[t[e + 14]] +
            o[t[e + 15]]
          ).toLowerCase();
        if (!(0, n.default)(r)) throw TypeError("Stringified UUID is invalid");
        return r;
      }
      e.default = h;
    },
    181: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(1790));
      function o(t) {
        return "string" === typeof t && n.default.test(t);
      }
      e.default = o;
    },
    294: function (t, e, r) {
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
                : r(1784).Buffer;
          } catch (k) {}
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
          function a(t, e, r) {
            var i = h(t, r);
            return (r - 1 >= e && (i |= h(t, r - 1) << 4), i);
          }
          function u(t, e, r, n) {
            for (
              var o = 0, s = 0, h = Math.min(t.length, r), a = e;
              a < h;
              a++
            ) {
              var u = t.charCodeAt(a) - 48;
              ((o *= n),
                (s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
                i(u >= 0 && s < n, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function f(t, e) {
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
                  ((n = a(t, e, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var h = t.length - e;
                for (i = h % 2 === 0 ? e + 1 : e; i < t.length; i += 2)
                  ((n = a(t, e, i) << o),
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
                  a = 0,
                  f = r;
                f < h;
                f += i
              )
                ((a = u(t, f, f + i, e)),
                  this.imuln(n),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a));
              if (0 !== s) {
                var l = 1;
                for (a = u(t, f, t.length, e), f = 0; f < s; f++) l *= e;
                (this.imuln(l),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a));
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
              f(t, this);
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
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = l;
            } catch (k) {
              o.prototype.inspect = l;
            }
          else o.prototype.inspect = l;
          function l() {
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
            d = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            m = [
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
                  a = (16777215 & ((h << n) | o)).toString(16);
                ((o = (h >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (r =
                    0 !== o || s !== this.length - 1
                      ? c[6 - a.length] + a + r
                      : a + r));
              }
              0 !== o && (r = o.toString(16) + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var u = d[t],
                f = m[t];
              r = "";
              var l = this.clone();
              l.negative = 0;
              while (!l.isZero()) {
                var p = l.modrn(f).toString(t);
                ((l = l.idivn(f)),
                  (r = l.isZero() ? p + r : c[u - p.length] + p + r));
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
          var p = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function g(t) {
            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
              var i = (r / 26) | 0,
                n = r % 26;
              e[r] = (t.words[i] >>> n) & 1;
            }
            return e;
          }
          function y(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var i = (t.length + e.length) | 0;
            ((r.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | e.words[0],
              s = n * o,
              h = 67108863 & s,
              a = (s / 67108864) | 0;
            r.words[0] = h;
            for (var u = 1; u < i; u++) {
              for (
                var f = a >>> 26,
                  l = 67108863 & a,
                  c = Math.min(u, e.length - 1),
                  d = Math.max(0, u - t.length + 1);
                d <= c;
                d++
              ) {
                var m = (u - d) | 0;
                ((n = 0 | t.words[m]),
                  (o = 0 | e.words[d]),
                  (s = n * o + l),
                  (f += (s / 67108864) | 0),
                  (l = 67108863 & s));
              }
              ((r.words[u] = 0 | l), (a = 0 | f));
            }
            return (0 !== a ? (r.words[u] = 0 | a) : r.length--, r._strip());
          }
          ((o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var n = this.byteLength(),
              o = r || Math.max(1, n);
            (i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"));
            var s = p(t, o),
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
          var v = function (t, e, r) {
            var i,
              n,
              o,
              s = t.words,
              h = e.words,
              a = r.words,
              u = 0,
              f = 0 | s[0],
              l = 8191 & f,
              c = f >>> 13,
              d = 0 | s[1],
              m = 8191 & d,
              p = d >>> 13,
              g = 0 | s[2],
              y = 8191 & g,
              v = g >>> 13,
              w = 0 | s[3],
              M = 8191 & w,
              b = w >>> 13,
              _ = 0 | s[4],
              E = 8191 & _,
              A = _ >>> 13,
              S = 0 | s[5],
              x = 8191 & S,
              B = S >>> 13,
              P = 0 | s[6],
              R = 8191 & P,
              k = P >>> 13,
              U = 0 | s[7],
              I = 8191 & U,
              O = U >>> 13,
              z = 0 | s[8],
              j = 8191 & z,
              N = z >>> 13,
              T = 0 | s[9],
              H = 8191 & T,
              C = T >>> 13,
              J = 0 | h[0],
              Z = 8191 & J,
              q = J >>> 13,
              D = 0 | h[1],
              L = 8191 & D,
              $ = D >>> 13,
              F = 0 | h[2],
              V = 8191 & F,
              W = F >>> 13,
              K = 0 | h[3],
              G = 8191 & K,
              X = K >>> 13,
              Y = 0 | h[4],
              Q = 8191 & Y,
              tt = Y >>> 13,
              et = 0 | h[5],
              rt = 8191 & et,
              it = et >>> 13,
              nt = 0 | h[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              ht = 0 | h[7],
              at = 8191 & ht,
              ut = ht >>> 13,
              ft = 0 | h[8],
              lt = 8191 & ft,
              ct = ft >>> 13,
              dt = 0 | h[9],
              mt = 8191 & dt,
              pt = dt >>> 13;
            ((r.negative = t.negative ^ e.negative),
              (r.length = 19),
              (i = Math.imul(l, Z)),
              (n = Math.imul(l, q)),
              (n = (n + Math.imul(c, Z)) | 0),
              (o = Math.imul(c, q)));
            var gt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (i = Math.imul(m, Z)),
              (n = Math.imul(m, q)),
              (n = (n + Math.imul(p, Z)) | 0),
              (o = Math.imul(p, q)),
              (i = (i + Math.imul(l, L)) | 0),
              (n = (n + Math.imul(l, $)) | 0),
              (n = (n + Math.imul(c, L)) | 0),
              (o = (o + Math.imul(c, $)) | 0));
            var yt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(y, Z)),
              (n = Math.imul(y, q)),
              (n = (n + Math.imul(v, Z)) | 0),
              (o = Math.imul(v, q)),
              (i = (i + Math.imul(m, L)) | 0),
              (n = (n + Math.imul(m, $)) | 0),
              (n = (n + Math.imul(p, L)) | 0),
              (o = (o + Math.imul(p, $)) | 0),
              (i = (i + Math.imul(l, V)) | 0),
              (n = (n + Math.imul(l, W)) | 0),
              (n = (n + Math.imul(c, V)) | 0),
              (o = (o + Math.imul(c, W)) | 0));
            var vt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(M, Z)),
              (n = Math.imul(M, q)),
              (n = (n + Math.imul(b, Z)) | 0),
              (o = Math.imul(b, q)),
              (i = (i + Math.imul(y, L)) | 0),
              (n = (n + Math.imul(y, $)) | 0),
              (n = (n + Math.imul(v, L)) | 0),
              (o = (o + Math.imul(v, $)) | 0),
              (i = (i + Math.imul(m, V)) | 0),
              (n = (n + Math.imul(m, W)) | 0),
              (n = (n + Math.imul(p, V)) | 0),
              (o = (o + Math.imul(p, W)) | 0),
              (i = (i + Math.imul(l, G)) | 0),
              (n = (n + Math.imul(l, X)) | 0),
              (n = (n + Math.imul(c, G)) | 0),
              (o = (o + Math.imul(c, X)) | 0));
            var wt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(E, Z)),
              (n = Math.imul(E, q)),
              (n = (n + Math.imul(A, Z)) | 0),
              (o = Math.imul(A, q)),
              (i = (i + Math.imul(M, L)) | 0),
              (n = (n + Math.imul(M, $)) | 0),
              (n = (n + Math.imul(b, L)) | 0),
              (o = (o + Math.imul(b, $)) | 0),
              (i = (i + Math.imul(y, V)) | 0),
              (n = (n + Math.imul(y, W)) | 0),
              (n = (n + Math.imul(v, V)) | 0),
              (o = (o + Math.imul(v, W)) | 0),
              (i = (i + Math.imul(m, G)) | 0),
              (n = (n + Math.imul(m, X)) | 0),
              (n = (n + Math.imul(p, G)) | 0),
              (o = (o + Math.imul(p, X)) | 0),
              (i = (i + Math.imul(l, Q)) | 0),
              (n = (n + Math.imul(l, tt)) | 0),
              (n = (n + Math.imul(c, Q)) | 0),
              (o = (o + Math.imul(c, tt)) | 0));
            var Mt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(x, Z)),
              (n = Math.imul(x, q)),
              (n = (n + Math.imul(B, Z)) | 0),
              (o = Math.imul(B, q)),
              (i = (i + Math.imul(E, L)) | 0),
              (n = (n + Math.imul(E, $)) | 0),
              (n = (n + Math.imul(A, L)) | 0),
              (o = (o + Math.imul(A, $)) | 0),
              (i = (i + Math.imul(M, V)) | 0),
              (n = (n + Math.imul(M, W)) | 0),
              (n = (n + Math.imul(b, V)) | 0),
              (o = (o + Math.imul(b, W)) | 0),
              (i = (i + Math.imul(y, G)) | 0),
              (n = (n + Math.imul(y, X)) | 0),
              (n = (n + Math.imul(v, G)) | 0),
              (o = (o + Math.imul(v, X)) | 0),
              (i = (i + Math.imul(m, Q)) | 0),
              (n = (n + Math.imul(m, tt)) | 0),
              (n = (n + Math.imul(p, Q)) | 0),
              (o = (o + Math.imul(p, tt)) | 0),
              (i = (i + Math.imul(l, rt)) | 0),
              (n = (n + Math.imul(l, it)) | 0),
              (n = (n + Math.imul(c, rt)) | 0),
              (o = (o + Math.imul(c, it)) | 0));
            var bt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(R, Z)),
              (n = Math.imul(R, q)),
              (n = (n + Math.imul(k, Z)) | 0),
              (o = Math.imul(k, q)),
              (i = (i + Math.imul(x, L)) | 0),
              (n = (n + Math.imul(x, $)) | 0),
              (n = (n + Math.imul(B, L)) | 0),
              (o = (o + Math.imul(B, $)) | 0),
              (i = (i + Math.imul(E, V)) | 0),
              (n = (n + Math.imul(E, W)) | 0),
              (n = (n + Math.imul(A, V)) | 0),
              (o = (o + Math.imul(A, W)) | 0),
              (i = (i + Math.imul(M, G)) | 0),
              (n = (n + Math.imul(M, X)) | 0),
              (n = (n + Math.imul(b, G)) | 0),
              (o = (o + Math.imul(b, X)) | 0),
              (i = (i + Math.imul(y, Q)) | 0),
              (n = (n + Math.imul(y, tt)) | 0),
              (n = (n + Math.imul(v, Q)) | 0),
              (o = (o + Math.imul(v, tt)) | 0),
              (i = (i + Math.imul(m, rt)) | 0),
              (n = (n + Math.imul(m, it)) | 0),
              (n = (n + Math.imul(p, rt)) | 0),
              (o = (o + Math.imul(p, it)) | 0),
              (i = (i + Math.imul(l, ot)) | 0),
              (n = (n + Math.imul(l, st)) | 0),
              (n = (n + Math.imul(c, ot)) | 0),
              (o = (o + Math.imul(c, st)) | 0));
            var _t = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(I, Z)),
              (n = Math.imul(I, q)),
              (n = (n + Math.imul(O, Z)) | 0),
              (o = Math.imul(O, q)),
              (i = (i + Math.imul(R, L)) | 0),
              (n = (n + Math.imul(R, $)) | 0),
              (n = (n + Math.imul(k, L)) | 0),
              (o = (o + Math.imul(k, $)) | 0),
              (i = (i + Math.imul(x, V)) | 0),
              (n = (n + Math.imul(x, W)) | 0),
              (n = (n + Math.imul(B, V)) | 0),
              (o = (o + Math.imul(B, W)) | 0),
              (i = (i + Math.imul(E, G)) | 0),
              (n = (n + Math.imul(E, X)) | 0),
              (n = (n + Math.imul(A, G)) | 0),
              (o = (o + Math.imul(A, X)) | 0),
              (i = (i + Math.imul(M, Q)) | 0),
              (n = (n + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(b, Q)) | 0),
              (o = (o + Math.imul(b, tt)) | 0),
              (i = (i + Math.imul(y, rt)) | 0),
              (n = (n + Math.imul(y, it)) | 0),
              (n = (n + Math.imul(v, rt)) | 0),
              (o = (o + Math.imul(v, it)) | 0),
              (i = (i + Math.imul(m, ot)) | 0),
              (n = (n + Math.imul(m, st)) | 0),
              (n = (n + Math.imul(p, ot)) | 0),
              (o = (o + Math.imul(p, st)) | 0),
              (i = (i + Math.imul(l, at)) | 0),
              (n = (n + Math.imul(l, ut)) | 0),
              (n = (n + Math.imul(c, at)) | 0),
              (o = (o + Math.imul(c, ut)) | 0));
            var Et = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(j, Z)),
              (n = Math.imul(j, q)),
              (n = (n + Math.imul(N, Z)) | 0),
              (o = Math.imul(N, q)),
              (i = (i + Math.imul(I, L)) | 0),
              (n = (n + Math.imul(I, $)) | 0),
              (n = (n + Math.imul(O, L)) | 0),
              (o = (o + Math.imul(O, $)) | 0),
              (i = (i + Math.imul(R, V)) | 0),
              (n = (n + Math.imul(R, W)) | 0),
              (n = (n + Math.imul(k, V)) | 0),
              (o = (o + Math.imul(k, W)) | 0),
              (i = (i + Math.imul(x, G)) | 0),
              (n = (n + Math.imul(x, X)) | 0),
              (n = (n + Math.imul(B, G)) | 0),
              (o = (o + Math.imul(B, X)) | 0),
              (i = (i + Math.imul(E, Q)) | 0),
              (n = (n + Math.imul(E, tt)) | 0),
              (n = (n + Math.imul(A, Q)) | 0),
              (o = (o + Math.imul(A, tt)) | 0),
              (i = (i + Math.imul(M, rt)) | 0),
              (n = (n + Math.imul(M, it)) | 0),
              (n = (n + Math.imul(b, rt)) | 0),
              (o = (o + Math.imul(b, it)) | 0),
              (i = (i + Math.imul(y, ot)) | 0),
              (n = (n + Math.imul(y, st)) | 0),
              (n = (n + Math.imul(v, ot)) | 0),
              (o = (o + Math.imul(v, st)) | 0),
              (i = (i + Math.imul(m, at)) | 0),
              (n = (n + Math.imul(m, ut)) | 0),
              (n = (n + Math.imul(p, at)) | 0),
              (o = (o + Math.imul(p, ut)) | 0),
              (i = (i + Math.imul(l, lt)) | 0),
              (n = (n + Math.imul(l, ct)) | 0),
              (n = (n + Math.imul(c, lt)) | 0),
              (o = (o + Math.imul(c, ct)) | 0));
            var At = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(H, Z)),
              (n = Math.imul(H, q)),
              (n = (n + Math.imul(C, Z)) | 0),
              (o = Math.imul(C, q)),
              (i = (i + Math.imul(j, L)) | 0),
              (n = (n + Math.imul(j, $)) | 0),
              (n = (n + Math.imul(N, L)) | 0),
              (o = (o + Math.imul(N, $)) | 0),
              (i = (i + Math.imul(I, V)) | 0),
              (n = (n + Math.imul(I, W)) | 0),
              (n = (n + Math.imul(O, V)) | 0),
              (o = (o + Math.imul(O, W)) | 0),
              (i = (i + Math.imul(R, G)) | 0),
              (n = (n + Math.imul(R, X)) | 0),
              (n = (n + Math.imul(k, G)) | 0),
              (o = (o + Math.imul(k, X)) | 0),
              (i = (i + Math.imul(x, Q)) | 0),
              (n = (n + Math.imul(x, tt)) | 0),
              (n = (n + Math.imul(B, Q)) | 0),
              (o = (o + Math.imul(B, tt)) | 0),
              (i = (i + Math.imul(E, rt)) | 0),
              (n = (n + Math.imul(E, it)) | 0),
              (n = (n + Math.imul(A, rt)) | 0),
              (o = (o + Math.imul(A, it)) | 0),
              (i = (i + Math.imul(M, ot)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (o = (o + Math.imul(b, st)) | 0),
              (i = (i + Math.imul(y, at)) | 0),
              (n = (n + Math.imul(y, ut)) | 0),
              (n = (n + Math.imul(v, at)) | 0),
              (o = (o + Math.imul(v, ut)) | 0),
              (i = (i + Math.imul(m, lt)) | 0),
              (n = (n + Math.imul(m, ct)) | 0),
              (n = (n + Math.imul(p, lt)) | 0),
              (o = (o + Math.imul(p, ct)) | 0),
              (i = (i + Math.imul(l, mt)) | 0),
              (n = (n + Math.imul(l, pt)) | 0),
              (n = (n + Math.imul(c, mt)) | 0),
              (o = (o + Math.imul(c, pt)) | 0));
            var St = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(H, L)),
              (n = Math.imul(H, $)),
              (n = (n + Math.imul(C, L)) | 0),
              (o = Math.imul(C, $)),
              (i = (i + Math.imul(j, V)) | 0),
              (n = (n + Math.imul(j, W)) | 0),
              (n = (n + Math.imul(N, V)) | 0),
              (o = (o + Math.imul(N, W)) | 0),
              (i = (i + Math.imul(I, G)) | 0),
              (n = (n + Math.imul(I, X)) | 0),
              (n = (n + Math.imul(O, G)) | 0),
              (o = (o + Math.imul(O, X)) | 0),
              (i = (i + Math.imul(R, Q)) | 0),
              (n = (n + Math.imul(R, tt)) | 0),
              (n = (n + Math.imul(k, Q)) | 0),
              (o = (o + Math.imul(k, tt)) | 0),
              (i = (i + Math.imul(x, rt)) | 0),
              (n = (n + Math.imul(x, it)) | 0),
              (n = (n + Math.imul(B, rt)) | 0),
              (o = (o + Math.imul(B, it)) | 0),
              (i = (i + Math.imul(E, ot)) | 0),
              (n = (n + Math.imul(E, st)) | 0),
              (n = (n + Math.imul(A, ot)) | 0),
              (o = (o + Math.imul(A, st)) | 0),
              (i = (i + Math.imul(M, at)) | 0),
              (n = (n + Math.imul(M, ut)) | 0),
              (n = (n + Math.imul(b, at)) | 0),
              (o = (o + Math.imul(b, ut)) | 0),
              (i = (i + Math.imul(y, lt)) | 0),
              (n = (n + Math.imul(y, ct)) | 0),
              (n = (n + Math.imul(v, lt)) | 0),
              (o = (o + Math.imul(v, ct)) | 0),
              (i = (i + Math.imul(m, mt)) | 0),
              (n = (n + Math.imul(m, pt)) | 0),
              (n = (n + Math.imul(p, mt)) | 0),
              (o = (o + Math.imul(p, pt)) | 0));
            var xt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(H, V)),
              (n = Math.imul(H, W)),
              (n = (n + Math.imul(C, V)) | 0),
              (o = Math.imul(C, W)),
              (i = (i + Math.imul(j, G)) | 0),
              (n = (n + Math.imul(j, X)) | 0),
              (n = (n + Math.imul(N, G)) | 0),
              (o = (o + Math.imul(N, X)) | 0),
              (i = (i + Math.imul(I, Q)) | 0),
              (n = (n + Math.imul(I, tt)) | 0),
              (n = (n + Math.imul(O, Q)) | 0),
              (o = (o + Math.imul(O, tt)) | 0),
              (i = (i + Math.imul(R, rt)) | 0),
              (n = (n + Math.imul(R, it)) | 0),
              (n = (n + Math.imul(k, rt)) | 0),
              (o = (o + Math.imul(k, it)) | 0),
              (i = (i + Math.imul(x, ot)) | 0),
              (n = (n + Math.imul(x, st)) | 0),
              (n = (n + Math.imul(B, ot)) | 0),
              (o = (o + Math.imul(B, st)) | 0),
              (i = (i + Math.imul(E, at)) | 0),
              (n = (n + Math.imul(E, ut)) | 0),
              (n = (n + Math.imul(A, at)) | 0),
              (o = (o + Math.imul(A, ut)) | 0),
              (i = (i + Math.imul(M, lt)) | 0),
              (n = (n + Math.imul(M, ct)) | 0),
              (n = (n + Math.imul(b, lt)) | 0),
              (o = (o + Math.imul(b, ct)) | 0),
              (i = (i + Math.imul(y, mt)) | 0),
              (n = (n + Math.imul(y, pt)) | 0),
              (n = (n + Math.imul(v, mt)) | 0),
              (o = (o + Math.imul(v, pt)) | 0));
            var Bt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (i = Math.imul(H, G)),
              (n = Math.imul(H, X)),
              (n = (n + Math.imul(C, G)) | 0),
              (o = Math.imul(C, X)),
              (i = (i + Math.imul(j, Q)) | 0),
              (n = (n + Math.imul(j, tt)) | 0),
              (n = (n + Math.imul(N, Q)) | 0),
              (o = (o + Math.imul(N, tt)) | 0),
              (i = (i + Math.imul(I, rt)) | 0),
              (n = (n + Math.imul(I, it)) | 0),
              (n = (n + Math.imul(O, rt)) | 0),
              (o = (o + Math.imul(O, it)) | 0),
              (i = (i + Math.imul(R, ot)) | 0),
              (n = (n + Math.imul(R, st)) | 0),
              (n = (n + Math.imul(k, ot)) | 0),
              (o = (o + Math.imul(k, st)) | 0),
              (i = (i + Math.imul(x, at)) | 0),
              (n = (n + Math.imul(x, ut)) | 0),
              (n = (n + Math.imul(B, at)) | 0),
              (o = (o + Math.imul(B, ut)) | 0),
              (i = (i + Math.imul(E, lt)) | 0),
              (n = (n + Math.imul(E, ct)) | 0),
              (n = (n + Math.imul(A, lt)) | 0),
              (o = (o + Math.imul(A, ct)) | 0),
              (i = (i + Math.imul(M, mt)) | 0),
              (n = (n + Math.imul(M, pt)) | 0),
              (n = (n + Math.imul(b, mt)) | 0),
              (o = (o + Math.imul(b, pt)) | 0));
            var Pt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(H, Q)),
              (n = Math.imul(H, tt)),
              (n = (n + Math.imul(C, Q)) | 0),
              (o = Math.imul(C, tt)),
              (i = (i + Math.imul(j, rt)) | 0),
              (n = (n + Math.imul(j, it)) | 0),
              (n = (n + Math.imul(N, rt)) | 0),
              (o = (o + Math.imul(N, it)) | 0),
              (i = (i + Math.imul(I, ot)) | 0),
              (n = (n + Math.imul(I, st)) | 0),
              (n = (n + Math.imul(O, ot)) | 0),
              (o = (o + Math.imul(O, st)) | 0),
              (i = (i + Math.imul(R, at)) | 0),
              (n = (n + Math.imul(R, ut)) | 0),
              (n = (n + Math.imul(k, at)) | 0),
              (o = (o + Math.imul(k, ut)) | 0),
              (i = (i + Math.imul(x, lt)) | 0),
              (n = (n + Math.imul(x, ct)) | 0),
              (n = (n + Math.imul(B, lt)) | 0),
              (o = (o + Math.imul(B, ct)) | 0),
              (i = (i + Math.imul(E, mt)) | 0),
              (n = (n + Math.imul(E, pt)) | 0),
              (n = (n + Math.imul(A, mt)) | 0),
              (o = (o + Math.imul(A, pt)) | 0));
            var Rt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(H, rt)),
              (n = Math.imul(H, it)),
              (n = (n + Math.imul(C, rt)) | 0),
              (o = Math.imul(C, it)),
              (i = (i + Math.imul(j, ot)) | 0),
              (n = (n + Math.imul(j, st)) | 0),
              (n = (n + Math.imul(N, ot)) | 0),
              (o = (o + Math.imul(N, st)) | 0),
              (i = (i + Math.imul(I, at)) | 0),
              (n = (n + Math.imul(I, ut)) | 0),
              (n = (n + Math.imul(O, at)) | 0),
              (o = (o + Math.imul(O, ut)) | 0),
              (i = (i + Math.imul(R, lt)) | 0),
              (n = (n + Math.imul(R, ct)) | 0),
              (n = (n + Math.imul(k, lt)) | 0),
              (o = (o + Math.imul(k, ct)) | 0),
              (i = (i + Math.imul(x, mt)) | 0),
              (n = (n + Math.imul(x, pt)) | 0),
              (n = (n + Math.imul(B, mt)) | 0),
              (o = (o + Math.imul(B, pt)) | 0));
            var kt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (i = Math.imul(H, ot)),
              (n = Math.imul(H, st)),
              (n = (n + Math.imul(C, ot)) | 0),
              (o = Math.imul(C, st)),
              (i = (i + Math.imul(j, at)) | 0),
              (n = (n + Math.imul(j, ut)) | 0),
              (n = (n + Math.imul(N, at)) | 0),
              (o = (o + Math.imul(N, ut)) | 0),
              (i = (i + Math.imul(I, lt)) | 0),
              (n = (n + Math.imul(I, ct)) | 0),
              (n = (n + Math.imul(O, lt)) | 0),
              (o = (o + Math.imul(O, ct)) | 0),
              (i = (i + Math.imul(R, mt)) | 0),
              (n = (n + Math.imul(R, pt)) | 0),
              (n = (n + Math.imul(k, mt)) | 0),
              (o = (o + Math.imul(k, pt)) | 0));
            var Ut = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Ut >>> 26)) | 0),
              (Ut &= 67108863),
              (i = Math.imul(H, at)),
              (n = Math.imul(H, ut)),
              (n = (n + Math.imul(C, at)) | 0),
              (o = Math.imul(C, ut)),
              (i = (i + Math.imul(j, lt)) | 0),
              (n = (n + Math.imul(j, ct)) | 0),
              (n = (n + Math.imul(N, lt)) | 0),
              (o = (o + Math.imul(N, ct)) | 0),
              (i = (i + Math.imul(I, mt)) | 0),
              (n = (n + Math.imul(I, pt)) | 0),
              (n = (n + Math.imul(O, mt)) | 0),
              (o = (o + Math.imul(O, pt)) | 0));
            var It = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (i = Math.imul(H, lt)),
              (n = Math.imul(H, ct)),
              (n = (n + Math.imul(C, lt)) | 0),
              (o = Math.imul(C, ct)),
              (i = (i + Math.imul(j, mt)) | 0),
              (n = (n + Math.imul(j, pt)) | 0),
              (n = (n + Math.imul(N, mt)) | 0),
              (o = (o + Math.imul(N, pt)) | 0));
            var Ot = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(H, mt)),
              (n = Math.imul(H, pt)),
              (n = (n + Math.imul(C, mt)) | 0),
              (o = Math.imul(C, pt)));
            var zt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (u = (((o + (n >>> 13)) | 0) + (zt >>> 26)) | 0),
              (zt &= 67108863),
              (a[0] = gt),
              (a[1] = yt),
              (a[2] = vt),
              (a[3] = wt),
              (a[4] = Mt),
              (a[5] = bt),
              (a[6] = _t),
              (a[7] = Et),
              (a[8] = At),
              (a[9] = St),
              (a[10] = xt),
              (a[11] = Bt),
              (a[12] = Pt),
              (a[13] = Rt),
              (a[14] = kt),
              (a[15] = Ut),
              (a[16] = It),
              (a[17] = Ot),
              (a[18] = zt),
              0 !== u && ((a[19] = u), r.length++),
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
                  a = Math.min(o, e.length - 1),
                  u = Math.max(0, o - t.length + 1);
                u <= a;
                u++
              ) {
                var f = o - u,
                  l = 0 | t.words[f],
                  c = 0 | e.words[u],
                  d = l * c,
                  m = 67108863 & d;
                ((s = (s + ((d / 67108864) | 0)) | 0),
                  (m = (m + h) | 0),
                  (h = 67108863 & m),
                  (s = (s + (m >>> 26)) | 0),
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
          (Math.imul || (v = y),
            (o.prototype.mulTo = function (t, e) {
              var r,
                i = this.length + t.length;
              return (
                (r =
                  10 === this.length && 10 === t.length
                    ? v(this, t, e)
                    : i < 63
                      ? y(this, t, e)
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
                    a = Math.cos((2 * Math.PI) / h),
                    u = Math.sin((2 * Math.PI) / h),
                    f = 0;
                  f < n;
                  f += h
                )
                  for (var l = a, c = u, d = 0; d < s; d++) {
                    var m = r[f + d],
                      p = i[f + d],
                      g = r[f + d + s],
                      y = i[f + d + s],
                      v = l * g - c * y;
                    ((y = l * y + c * g),
                      (g = v),
                      (r[f + d] = m + g),
                      (i[f + d] = p + y),
                      (r[f + d + s] = m - g),
                      (i[f + d + s] = p - y),
                      d !== h &&
                        ((v = a * l - u * c), (c = a * c + u * l), (l = v)));
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
                a = new Array(i),
                u = new Array(i),
                f = new Array(i),
                l = new Array(i),
                c = r.words;
              ((c.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(e.words, e.length, u, i),
                this.transform(s, o, h, a, i, n),
                this.transform(u, o, f, l, i, n));
              for (var d = 0; d < i; d++) {
                var m = h[d] * f[d] - a[d] * l[d];
                ((a[d] = h[d] * l[d] + a[d] * f[d]), (h[d] = m));
              }
              return (
                this.conjugate(h, a, i),
                this.transform(h, a, c, o, i, n),
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
              var e = g(t);
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
                    a = ((0 | this.words[e]) - h) << r;
                  ((this.words[e] = a | s), (s = h >>> (26 - r)));
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
                a = r;
              if (((n -= s), (n = Math.max(0, n)), a)) {
                for (var u = 0; u < s; u++) a.words[u] = this.words[u];
                a.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, u = 0; u < this.length; u++)
                  this.words[u] = this.words[u + s];
              else ((this.words[0] = 0), (this.length = 1));
              var f = 0;
              for (u = this.length - 1; u >= 0 && (0 !== f || u >= n); u--) {
                var l = 0 | this.words[u];
                ((this.words[u] = (f << (26 - o)) | (l >>> o)), (f = l & h));
              }
              return (
                a && 0 !== f && (a.words[a.length++] = f),
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
                var a = (0 | t.words[n]) * e;
                ((o -= 67108863 & a),
                  (h = (o >> 26) - ((a / 67108864) | 0)),
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
              var a,
                u = i.length - n.length;
              if ("mod" !== e) {
                ((a = new o(null)),
                  (a.length = u + 1),
                  (a.words = new Array(a.length)));
                for (var f = 0; f < a.length; f++) a.words[f] = 0;
              }
              var l = i.clone()._ishlnsubmul(n, 1, u);
              0 === l.negative && ((i = l), a && (a.words[u] = 1));
              for (var c = u - 1; c >= 0; c--) {
                var d =
                  67108864 * (0 | i.words[n.length + c]) +
                  (0 | i.words[n.length + c - 1]);
                ((d = Math.min((d / s) | 0, 67108863)),
                  i._ishlnsubmul(n, d, c));
                while (0 !== i.negative)
                  (d--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, c),
                    i.isZero() || (i.negative ^= 1));
                a && (a.words[c] = d);
              }
              return (
                a && a._strip(),
                i._strip(),
                "div" !== e && 0 !== r && i.iushrn(r),
                { div: a || null, mod: i }
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
                a = new o(1),
                u = 0;
              while (e.isEven() && r.isEven()) (e.iushrn(1), r.iushrn(1), ++u);
              var f = r.clone(),
                l = e.clone();
              while (!e.isZero()) {
                for (
                  var c = 0, d = 1;
                  0 === (e.words[0] & d) && c < 26;
                  ++c, d <<= 1
                );
                if (c > 0) {
                  e.iushrn(c);
                  while (c-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(f), s.isub(l)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var m = 0, p = 1;
                  0 === (r.words[0] & p) && m < 26;
                  ++m, p <<= 1
                );
                if (m > 0) {
                  r.iushrn(m);
                  while (m-- > 0)
                    ((h.isOdd() || a.isOdd()) && (h.iadd(f), a.isub(l)),
                      h.iushrn(1),
                      a.iushrn(1));
                }
                e.cmp(r) >= 0
                  ? (e.isub(r), n.isub(h), s.isub(a))
                  : (r.isub(e), h.isub(n), a.isub(s));
              }
              return { a: h, b: a, gcd: r.iushln(u) };
            }),
            (o.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                s = new o(1),
                h = new o(0),
                a = r.clone();
              while (e.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var u = 0, f = 1;
                  0 === (e.words[0] & f) && u < 26;
                  ++u, f <<= 1
                );
                if (u > 0) {
                  e.iushrn(u);
                  while (u-- > 0) (s.isOdd() && s.iadd(a), s.iushrn(1));
                }
                for (
                  var l = 0, c = 1;
                  0 === (r.words[0] & c) && l < 26;
                  ++l, c <<= 1
                );
                if (l > 0) {
                  r.iushrn(l);
                  while (l-- > 0) (h.isOdd() && h.iadd(a), h.iushrn(1));
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
              return new P(t);
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
          function E(t, e) {
            ((this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function A() {
            E.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function S() {
            E.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function x() {
            E.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function B() {
            E.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function P(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function R(t) {
            (P.call(this, t),
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
            (E.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (E.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(A, E),
            (A.prototype.split = function (t, e) {
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
            (A.prototype.imulK = function (t) {
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
            n(S, E),
            n(x, E),
            n(B, E),
            (B.prototype.imulK = function (t) {
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
              if ("k256" === t) e = new A();
              else if ("p224" === t) e = new S();
              else if ("p192" === t) e = new x();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new B();
              }
              return ((_[t] = e), e);
            }),
            (P.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (P.prototype._verify2 = function (t, e) {
              (i(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (P.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (f(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (P.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (P.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (P.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (P.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (P.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (P.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (P.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (P.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (P.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (P.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (P.prototype.sqrt = function (t) {
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
                a = h.redNeg(),
                u = this.m.subn(1).iushrn(1),
                f = this.m.bitLength();
              f = new o(2 * f * f).toRed(this);
              while (0 !== this.pow(f, u).cmp(a)) f.redIAdd(a);
              var l = this.pow(f, n),
                c = this.pow(t, n.addn(1).iushrn(1)),
                d = this.pow(t, n),
                m = s;
              while (0 !== d.cmp(h)) {
                for (var p = d, g = 0; 0 !== p.cmp(h); g++) p = p.redSqr();
                i(g < m);
                var y = this.pow(l, new o(1).iushln(m - g - 1));
                ((c = c.redMul(y)),
                  (l = y.redSqr()),
                  (d = d.redMul(l)),
                  (m = g));
              }
              return c;
            }),
            (P.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (P.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var r = 4,
                i = new Array(1 << r);
              ((i[0] = new o(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var s = i[0],
                h = 0,
                a = 0,
                u = e.bitLength() % 26;
              for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                for (var f = e.words[n], l = u - 1; l >= 0; l--) {
                  var c = (f >> l) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== c || 0 !== h
                      ? ((h <<= 1),
                        (h |= c),
                        a++,
                        (a === r || (0 === n && 0 === l)) &&
                          ((s = this.mul(s, i[h])), (a = 0), (h = 0)))
                      : (a = 0));
                }
                u = 26;
              }
              return s;
            }),
            (P.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (P.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (o.mont = function (t) {
              return new R(t);
            }),
            n(R, P),
            (R.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (R.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (R.prototype.imul = function (t, e) {
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
            (R.prototype.mul = function (t, e) {
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
            (R.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, r(20)(t));
    },
    598: function (t, e, r) {
      "use strict";
      (function (t) {
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, r, i) {
                  (void 0 === i && (i = r),
                    Object.defineProperty(t, i, {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    }));
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
            (this && this.__decorate) ||
            function (t, e, r, i) {
              var n,
                o = arguments.length,
                s =
                  o < 3
                    ? e
                    : null === i
                      ? (i = Object.getOwnPropertyDescriptor(e, r))
                      : i;
              if (
                "object" === typeof Reflect &&
                "function" === typeof Reflect.decorate
              )
                s = Reflect.decorate(t, e, r, i);
              else
                for (var h = t.length - 1; h >= 0; h--)
                  (n = t[h]) &&
                    (s = (o < 3 ? n(s) : o > 3 ? n(e, r, s) : n(e, r)) || s);
              return (o > 3 && s && Object.defineProperty(e, r, s), s);
            },
          s =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var r in t)
                  "default" !== r &&
                    Object.hasOwnProperty.call(t, r) &&
                    i(e, t, r);
              return (n(e, t), e);
            },
          h =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.deserializeUnchecked =
            e.deserialize =
            e.serialize =
            e.BinaryReader =
            e.BinaryWriter =
            e.BorshError =
            e.baseDecode =
            e.baseEncode =
              void 0));
        const a = h(r(294)),
          u = h(r(234)),
          f = s(r(843)),
          l = "function" !== typeof TextDecoder ? f.TextDecoder : TextDecoder,
          c = new l("utf-8", { fatal: !0 });
        function d(e) {
          return (
            "string" === typeof e && (e = t.from(e, "utf8")),
            u.default.encode(t.from(e))
          );
        }
        function m(e) {
          return t.from(u.default.decode(e));
        }
        ((e.baseEncode = d), (e.baseDecode = m));
        const p = 1024;
        class BorshError extends Error {
          constructor(t) {
            (super(t), (this.fieldPath = []), (this.originalMessage = t));
          }
          addToFieldPath(t) {
            (this.fieldPath.splice(0, 0, t),
              (this.message =
                this.originalMessage + ": " + this.fieldPath.join(".")));
          }
        }
        e.BorshError = BorshError;
        class BinaryWriter {
          constructor() {
            ((this.buf = t.alloc(p)), (this.length = 0));
          }
          maybeResize() {
            this.buf.length < 16 + this.length &&
              (this.buf = t.concat([this.buf, t.alloc(p)]));
          }
          writeU8(t) {
            (this.maybeResize(),
              this.buf.writeUInt8(t, this.length),
              (this.length += 1));
          }
          writeU16(t) {
            (this.maybeResize(),
              this.buf.writeUInt16LE(t, this.length),
              (this.length += 2));
          }
          writeU32(t) {
            (this.maybeResize(),
              this.buf.writeUInt32LE(t, this.length),
              (this.length += 4));
          }
          writeU64(e) {
            (this.maybeResize(),
              this.writeBuffer(t.from(new a.default(e).toArray("le", 8))));
          }
          writeU128(e) {
            (this.maybeResize(),
              this.writeBuffer(t.from(new a.default(e).toArray("le", 16))));
          }
          writeU256(e) {
            (this.maybeResize(),
              this.writeBuffer(t.from(new a.default(e).toArray("le", 32))));
          }
          writeU512(e) {
            (this.maybeResize(),
              this.writeBuffer(t.from(new a.default(e).toArray("le", 64))));
          }
          writeBuffer(e) {
            ((this.buf = t.concat([
              t.from(this.buf.subarray(0, this.length)),
              e,
              t.alloc(p),
            ])),
              (this.length += e.length));
          }
          writeString(e) {
            this.maybeResize();
            const r = t.from(e, "utf8");
            (this.writeU32(r.length), this.writeBuffer(r));
          }
          writeFixedArray(e) {
            this.writeBuffer(t.from(e));
          }
          writeArray(t, e) {
            (this.maybeResize(), this.writeU32(t.length));
            for (const r of t) (this.maybeResize(), e(r));
          }
          toArray() {
            return this.buf.subarray(0, this.length);
          }
        }
        function g(t, e, r) {
          const i = r.value;
          r.value = function () {
            try {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                r < t;
                r++
              )
                e[r] = arguments[r];
              return i.apply(this, e);
            } catch (n) {
              if (n instanceof RangeError) {
                const t = n.code;
                if (
                  ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(t) >=
                  0
                )
                  throw new BorshError(
                    "Reached the end of buffer when deserializing",
                  );
              }
              throw n;
            }
          };
        }
        e.BinaryWriter = BinaryWriter;
        class BinaryReader {
          constructor(t) {
            ((this.buf = t), (this.offset = 0));
          }
          readU8() {
            const t = this.buf.readUInt8(this.offset);
            return ((this.offset += 1), t);
          }
          readU16() {
            const t = this.buf.readUInt16LE(this.offset);
            return ((this.offset += 2), t);
          }
          readU32() {
            const t = this.buf.readUInt32LE(this.offset);
            return ((this.offset += 4), t);
          }
          readU64() {
            const t = this.readBuffer(8);
            return new a.default(t, "le");
          }
          readU128() {
            const t = this.readBuffer(16);
            return new a.default(t, "le");
          }
          readU256() {
            const t = this.readBuffer(32);
            return new a.default(t, "le");
          }
          readU512() {
            const t = this.readBuffer(64);
            return new a.default(t, "le");
          }
          readBuffer(t) {
            if (this.offset + t > this.buf.length)
              throw new BorshError(
                `Expected buffer length ${t} isn't within bounds`,
              );
            const e = this.buf.slice(this.offset, this.offset + t);
            return ((this.offset += t), e);
          }
          readString() {
            const t = this.readU32(),
              e = this.readBuffer(t);
            try {
              return c.decode(e);
            } catch (r) {
              throw new BorshError("Error decoding UTF-8 string: " + r);
            }
          }
          readFixedArray(t) {
            return new Uint8Array(this.readBuffer(t));
          }
          readArray(t) {
            const e = this.readU32(),
              r = Array();
            for (let i = 0; i < e; ++i) r.push(t());
            return r;
          }
        }
        function y(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }
        function v(t, e, r, i, n) {
          try {
            if ("string" === typeof i) n["write" + y(i)](r);
            else if (i instanceof Array)
              if ("number" === typeof i[0]) {
                if (r.length !== i[0])
                  throw new BorshError(
                    `Expecting byte array of length ${i[0]}, but got ${r.length} bytes`,
                  );
                n.writeFixedArray(r);
              } else if (2 === i.length && "number" === typeof i[1]) {
                if (r.length !== i[1])
                  throw new BorshError(
                    `Expecting byte array of length ${i[1]}, but got ${r.length} bytes`,
                  );
                for (let e = 0; e < i[1]; e++) v(t, null, r[e], i[0], n);
              } else
                n.writeArray(r, (r) => {
                  v(t, e, r, i[0], n);
                });
            else if (void 0 !== i.kind)
              switch (i.kind) {
                case "option":
                  null === r || void 0 === r
                    ? n.writeU8(0)
                    : (n.writeU8(1), v(t, e, r, i.type, n));
                  break;
                case "map":
                  (n.writeU32(r.size),
                    r.forEach((r, o) => {
                      (v(t, e, o, i.key, n), v(t, e, r, i.value, n));
                    }));
                  break;
                default:
                  throw new BorshError(`FieldType ${i} unrecognized`);
              }
            else w(t, r, n);
          } catch (o) {
            throw (o instanceof BorshError && o.addToFieldPath(e), o);
          }
        }
        function w(t, e, r) {
          if ("function" === typeof e.borshSerialize)
            return void e.borshSerialize(r);
          const i = t.get(e.constructor);
          if (!i)
            throw new BorshError(
              `Class ${e.constructor.name} is missing in schema`,
            );
          if ("struct" === i.kind)
            i.fields.map((i) => {
              let [n, o] = i;
              v(t, n, e[n], o, r);
            });
          else {
            if ("enum" !== i.kind)
              throw new BorshError(
                `Unexpected schema kind: ${i.kind} for ${e.constructor.name}`,
              );
            {
              const n = e[i.field];
              for (let o = 0; o < i.values.length; ++o) {
                const [s, h] = i.values[o];
                if (s === n) {
                  (r.writeU8(o), v(t, s, e[s], h, r));
                  break;
                }
              }
            }
          }
        }
        function M(t, e, r) {
          void 0 === r && (r = BinaryWriter);
          const i = new r();
          return (w(t, e, i), i.toArray());
        }
        function b(t, e, r, i) {
          try {
            if ("string" === typeof r) return i["read" + y(r)]();
            if (r instanceof Array) {
              if ("number" === typeof r[0]) return i.readFixedArray(r[0]);
              if ("number" === typeof r[1]) {
                const e = [];
                for (let n = 0; n < r[1]; n++) e.push(b(t, null, r[0], i));
                return e;
              }
              return i.readArray(() => b(t, e, r[0], i));
            }
            if ("option" === r.kind) {
              const n = i.readU8();
              return n ? b(t, e, r.type, i) : void 0;
            }
            if ("map" === r.kind) {
              let n = new Map();
              const o = i.readU32();
              for (let s = 0; s < o; s++) {
                const o = b(t, e, r.key, i),
                  s = b(t, e, r.value, i);
                n.set(o, s);
              }
              return n;
            }
            return _(t, r, i);
          } catch (n) {
            throw (n instanceof BorshError && n.addToFieldPath(e), n);
          }
        }
        function _(t, e, r) {
          if ("function" === typeof e.borshDeserialize)
            return e.borshDeserialize(r);
          const i = t.get(e);
          if (!i) throw new BorshError(`Class ${e.name} is missing in schema`);
          if ("struct" === i.kind) {
            const i = {};
            for (const [n, o] of t.get(e).fields) i[n] = b(t, n, o, r);
            return new e(i);
          }
          if ("enum" === i.kind) {
            const n = r.readU8();
            if (n >= i.values.length)
              throw new BorshError(`Enum index: ${n} is out of range`);
            const [o, s] = i.values[n],
              h = b(t, o, s, r);
            return new e({ [o]: h });
          }
          throw new BorshError(
            `Unexpected schema kind: ${i.kind} for ${e.constructor.name}`,
          );
        }
        function E(t, e, r, i) {
          void 0 === i && (i = BinaryReader);
          const n = new i(r),
            o = _(t, e, n);
          if (n.offset < r.length)
            throw new BorshError(
              `Unexpected ${r.length - n.offset} bytes after deserialized data`,
            );
          return o;
        }
        function A(t, e, r, i) {
          void 0 === i && (i = BinaryReader);
          const n = new i(r);
          return _(t, e, n);
        }
        (o([g], BinaryReader.prototype, "readU8", null),
          o([g], BinaryReader.prototype, "readU16", null),
          o([g], BinaryReader.prototype, "readU32", null),
          o([g], BinaryReader.prototype, "readU64", null),
          o([g], BinaryReader.prototype, "readU128", null),
          o([g], BinaryReader.prototype, "readU256", null),
          o([g], BinaryReader.prototype, "readU512", null),
          o([g], BinaryReader.prototype, "readString", null),
          o([g], BinaryReader.prototype, "readFixedArray", null),
          o([g], BinaryReader.prototype, "readArray", null),
          (e.BinaryReader = BinaryReader),
          (e.serialize = M),
          (e.deserialize = E),
          (e.deserializeUnchecked = A));
      }).call(this, r(2).Buffer);
    },
    601: function (t, e, r) {
      "use strict";
      const i = r(602).v4,
        n = r(1798),
        o = function (t, e) {
          if (!(this instanceof o)) return new o(t, e);
          (e || (e = {}),
            (this.options = {
              reviver: "undefined" !== typeof e.reviver ? e.reviver : null,
              replacer: "undefined" !== typeof e.replacer ? e.replacer : null,
              generator:
                "undefined" !== typeof e.generator
                  ? e.generator
                  : function () {
                      return i();
                    },
              version: "undefined" !== typeof e.version ? e.version : 2,
              notificationIdNull:
                "boolean" === typeof e.notificationIdNull &&
                e.notificationIdNull,
            }),
            (this.callServer = t));
        };
      ((t.exports = o),
        (o.prototype.request = function (t, e, r, i) {
          const o = this;
          let s = null;
          const h = Array.isArray(t) && "function" === typeof e;
          if (1 === this.options.version && h)
            throw new TypeError("JSON-RPC 1.0 does not support batching");
          const a = !h && t && "object" === typeof t && "function" === typeof e;
          if (h || a) ((i = e), (s = t));
          else {
            "function" === typeof r && ((i = r), (r = void 0));
            const o = "function" === typeof i;
            try {
              s = n(t, e, r, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull,
              });
            } catch (f) {
              if (o) return i(f);
              throw f;
            }
            if (!o) return s;
          }
          let u;
          try {
            u = JSON.stringify(s, this.options.replacer);
          } catch (f) {
            return i(f);
          }
          return (
            this.callServer(u, function (t, e) {
              o._parseResponse(t, e, i);
            }),
            s
          );
        }),
        (o.prototype._parseResponse = function (t, e, r) {
          if (t) return void r(t);
          if (!e) return r();
          let i;
          try {
            i = JSON.parse(e, this.options.reviver);
          } catch (t) {
            return r(t);
          }
          if (3 === r.length) {
            if (Array.isArray(i)) {
              const t = function (t) {
                  return "undefined" !== typeof t.error;
                },
                e = function (e) {
                  return !t(e);
                };
              return r(null, i.filter(t), i.filter(e));
            }
            return r(null, i.error, i.result);
          }
          r(null, i);
        }));
    },
    602: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "NIL", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(e, "parse", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(e, "stringify", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(e, "v1", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(e, "v3", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(e, "v4", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(e, "v5", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(e, "validate", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(e, "version", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }));
      var n = i(r(1789)),
        o = i(r(1791)),
        s = i(r(1793)),
        h = i(r(1794)),
        a = i(r(1796)),
        u = i(r(1797)),
        f = i(r(181)),
        l = i(r(180)),
        c = i(r(605));
    },
    603: function (t, e, r) {
      "use strict";
      var i;
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o));
      var n = new Uint8Array(16);
      function o() {
        if (
          !i &&
          ((i =
            ("undefined" !== typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" !== typeof msCrypto &&
              "function" === typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto))),
          !i)
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
          );
        return i(n);
      }
    },
    604: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.URL = e.DNS = void 0),
        (e.default = u));
      var n = i(r(180)),
        o = i(r(605));
      function s(t) {
        t = unescape(encodeURIComponent(t));
        for (var e = [], r = 0; r < t.length; ++r) e.push(t.charCodeAt(r));
        return e;
      }
      var h = (e.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
        a = (e.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8");
      function u(t, e, r) {
        function i(t, i, h, a) {
          if (
            ("string" === typeof t && (t = s(t)),
            "string" === typeof i && (i = (0, o.default)(i)),
            16 !== i.length)
          )
            throw TypeError(
              "Namespace must be array-like (16 iterable integer values, 0-255)",
            );
          var u = new Uint8Array(16 + t.length);
          if (
            (u.set(i),
            u.set(t, i.length),
            (u = r(u)),
            (u[6] = (15 & u[6]) | e),
            (u[8] = (63 & u[8]) | 128),
            h)
          ) {
            a = a || 0;
            for (var f = 0; f < 16; ++f) h[a + f] = u[f];
            return h;
          }
          return (0, n.default)(u);
        }
        try {
          i.name = t;
        } catch (u) {}
        return ((i.DNS = h), (i.URL = a), i);
      }
    },
    605: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(181));
      function o(t) {
        if (!(0, n.default)(t)) throw TypeError("Invalid UUID");
        var e,
          r = new Uint8Array(16);
        return (
          (r[0] = (e = parseInt(t.slice(0, 8), 16)) >>> 24),
          (r[1] = (e >>> 16) & 255),
          (r[2] = (e >>> 8) & 255),
          (r[3] = 255 & e),
          (r[4] = (e = parseInt(t.slice(9, 13), 16)) >>> 8),
          (r[5] = 255 & e),
          (r[6] = (e = parseInt(t.slice(14, 18), 16)) >>> 8),
          (r[7] = 255 & e),
          (r[8] = (e = parseInt(t.slice(19, 23), 16)) >>> 8),
          (r[9] = 255 & e),
          (r[10] = ((e = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255),
          (r[11] = (e / 4294967296) & 255),
          (r[12] = (e >>> 24) & 255),
          (r[13] = (e >>> 16) & 255),
          (r[14] = (e >>> 8) & 255),
          (r[15] = 255 & e),
          r
        );
      }
      e.default = o;
    },
    606: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Signature = e.Point = e.CURVE = void 0),
        (e.bytesToHex = k),
        (e.getPublicKey = it),
        (e.getSharedSecret = st),
        (e.hexToBytes = O),
        (e.recoverPublicKey = nt),
        (e.schnorr = void 0),
        (e.sign = ct),
        (e.signSync = dt),
        (e.utils = void 0),
        (e.verify = pt));
      var i = n(r(1799));
      function n(t, e) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            i = new WeakMap();
        return (n = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var n,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((n = e ? i : r)) {
            if (n.has(t)) return n.get(t);
            n.set(t, s);
          }
          for (const r in t)
            "default" !== r &&
              {}.hasOwnProperty.call(t, r) &&
              ((o =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, r)) &&
              (o.get || o.set)
                ? n(s, r, o)
                : (s[r] = t[r]));
          return s;
        })(t, e);
      }
      const o = BigInt(0),
        s = BigInt(1),
        h = BigInt(2),
        a = BigInt(3),
        u = BigInt(8),
        f = (e.CURVE = Object.freeze({
          a: o,
          b: BigInt(7),
          P: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
          ),
          n: BigInt(
            "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
          ),
          h: s,
          Gx: BigInt(
            "55066263022277343669578718895168534326250603453777594175500187360389116729240",
          ),
          Gy: BigInt(
            "32670510020758816978083085130507043184471273380659243275938904335757337482424",
          ),
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
          ),
        })),
        l = (t, e) => (t + e / h) / e,
        c = {
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
          ),
          splitScalar(t) {
            const { n: e } = f,
              r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
              i = -s * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
              n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
              o = r,
              h = BigInt("0x100000000000000000000000000000000"),
              a = l(o * t, e),
              u = l(-i * t, e);
            let c = q(t - a * r - u * n, e),
              d = q(-a * i - u * o, e);
            const m = c > h,
              p = d > h;
            if ((m && (c = e - c), p && (d = e - d), c > h || d > h))
              throw new Error("splitScalarEndo: Endomorphism failed, k=" + t);
            return { k1neg: m, k1: c, k2neg: p, k2: d };
          },
        },
        d = 32,
        m = 32,
        p = 32,
        g = d + 1,
        y = 2 * d + 1;
      function v(t) {
        const { a: e, b: r } = f,
          i = q(t * t),
          n = q(i * t);
        return q(n + e * t + r);
      }
      const w = f.a === o;
      class ShaError extends Error {
        constructor(t) {
          super(t);
        }
      }
      function M(t) {
        if (!(t instanceof JacobianPoint))
          throw new TypeError("JacobianPoint expected");
      }
      class JacobianPoint {
        constructor(t, e, r) {
          ((this.x = t), (this.y = e), (this.z = r));
        }
        static fromAffine(t) {
          if (!(t instanceof Point))
            throw new TypeError("JacobianPoint#fromAffine: expected Point");
          return t.equals(Point.ZERO)
            ? JacobianPoint.ZERO
            : new JacobianPoint(t.x, t.y, s);
        }
        static toAffineBatch(t) {
          const e = F(t.map((t) => t.z));
          return t.map((t, r) => t.toAffine(e[r]));
        }
        static normalizeZ(t) {
          return JacobianPoint.toAffineBatch(t).map(JacobianPoint.fromAffine);
        }
        equals(t) {
          M(t);
          const { x: e, y: r, z: i } = this,
            { x: n, y: o, z: s } = t,
            h = q(i * i),
            a = q(s * s),
            u = q(e * a),
            f = q(n * h),
            l = q(q(r * s) * a),
            c = q(q(o * i) * h);
          return u === f && l === c;
        }
        negate() {
          return new JacobianPoint(this.x, q(-this.y), this.z);
        }
        double() {
          const { x: t, y: e, z: r } = this,
            i = q(t * t),
            n = q(e * e),
            o = q(n * n),
            s = t + n,
            f = q(h * (q(s * s) - i - o)),
            l = q(a * i),
            c = q(l * l),
            d = q(c - h * f),
            m = q(l * (f - d) - u * o),
            p = q(h * e * r);
          return new JacobianPoint(d, m, p);
        }
        add(t) {
          M(t);
          const { x: e, y: r, z: i } = this,
            { x: n, y: s, z: a } = t;
          if (n === o || s === o) return this;
          if (e === o || r === o) return t;
          const u = q(i * i),
            f = q(a * a),
            l = q(e * f),
            c = q(n * u),
            d = q(q(r * a) * f),
            m = q(q(s * i) * u),
            p = q(c - l),
            g = q(m - d);
          if (p === o) return g === o ? this.double() : JacobianPoint.ZERO;
          const y = q(p * p),
            v = q(p * y),
            w = q(l * y),
            b = q(g * g - v - h * w),
            _ = q(g * (w - b) - d * v),
            E = q(i * a * p);
          return new JacobianPoint(b, _, E);
        }
        subtract(t) {
          return this.add(t.negate());
        }
        multiplyUnsafe(t) {
          const e = JacobianPoint.ZERO;
          if ("bigint" === typeof t && t === o) return e;
          let r = Z(t);
          if (r === s) return this;
          if (!w) {
            let t = e,
              i = this;
            while (r > o)
              (r & s && (t = t.add(i)), (i = i.double()), (r >>= s));
            return t;
          }
          let { k1neg: i, k1: n, k2neg: h, k2: a } = c.splitScalar(r),
            u = e,
            f = e,
            l = this;
          while (n > o || a > o)
            (n & s && (u = u.add(l)),
              a & s && (f = f.add(l)),
              (l = l.double()),
              (n >>= s),
              (a >>= s));
          return (
            i && (u = u.negate()),
            h && (f = f.negate()),
            (f = new JacobianPoint(q(f.x * c.beta), f.y, f.z)),
            u.add(f)
          );
        }
        precomputeWindow(t) {
          const e = w ? 128 / t + 1 : 256 / t + 1,
            r = [];
          let i = this,
            n = i;
          for (let o = 0; o < e; o++) {
            ((n = i), r.push(n));
            for (let e = 1; e < 2 ** (t - 1); e++) ((n = n.add(i)), r.push(n));
            i = n.double();
          }
          return r;
        }
        wNAF(t, e) {
          !e && this.equals(JacobianPoint.BASE) && (e = Point.BASE);
          const r = (e && e._WINDOW_SIZE) || 1;
          if (256 % r)
            throw new Error(
              "Point#wNAF: Invalid precomputation window, must be power of 2",
            );
          let i = e && _.get(e);
          i ||
            ((i = this.precomputeWindow(r)),
            e && 1 !== r && ((i = JacobianPoint.normalizeZ(i)), _.set(e, i)));
          let n = JacobianPoint.ZERO,
            o = JacobianPoint.BASE;
          const h = 1 + (w ? 128 / r : 256 / r),
            a = 2 ** (r - 1),
            u = BigInt(2 ** r - 1),
            f = 2 ** r,
            l = BigInt(r);
          for (let c = 0; c < h; c++) {
            const e = c * a;
            let r = Number(t & u);
            ((t >>= l), r > a && ((r -= f), (t += s)));
            const h = e,
              d = e + Math.abs(r) - 1,
              m = c % 2 !== 0,
              p = r < 0;
            0 === r ? (o = o.add(b(m, i[h]))) : (n = n.add(b(p, i[d])));
          }
          return { p: n, f: o };
        }
        multiply(t, e) {
          let r,
            i,
            n = Z(t);
          if (w) {
            const { k1neg: t, k1: o, k2neg: s, k2: h } = c.splitScalar(n);
            let { p: a, f: u } = this.wNAF(o, e),
              { p: f, f: l } = this.wNAF(h, e);
            ((a = b(t, a)),
              (f = b(s, f)),
              (f = new JacobianPoint(q(f.x * c.beta), f.y, f.z)),
              (r = a.add(f)),
              (i = u.add(l)));
          } else {
            const { p: t, f: o } = this.wNAF(n, e);
            ((r = t), (i = o));
          }
          return JacobianPoint.normalizeZ([r, i])[0];
        }
        toAffine(t) {
          const { x: e, y: r, z: i } = this,
            n = this.equals(JacobianPoint.ZERO);
          null == t && (t = n ? u : $(i));
          const o = t,
            h = q(o * o),
            a = q(h * o),
            f = q(e * h),
            l = q(r * a),
            c = q(i * o);
          if (n) return Point.ZERO;
          if (c !== s) throw new Error("invZ was invalid");
          return new Point(f, l);
        }
      }
      function b(t, e) {
        const r = e.negate();
        return t ? r : e;
      }
      ((JacobianPoint.BASE = new JacobianPoint(f.Gx, f.Gy, s)),
        (JacobianPoint.ZERO = new JacobianPoint(o, s, o)));
      const _ = new WeakMap();
      class Point {
        constructor(t, e) {
          ((this.x = t), (this.y = e));
        }
        _setWindowSize(t) {
          ((this._WINDOW_SIZE = t), _.delete(this));
        }
        hasEvenY() {
          return this.y % h === o;
        }
        static fromCompressedHex(t) {
          const e = 32 === t.length,
            r = C(e ? t : t.subarray(1));
          if (!Y(r)) throw new Error("Point is not on curve");
          const i = v(r);
          let n = L(i);
          const o = (n & s) === s;
          if (e) o && (n = q(-n));
          else {
            const e = 1 === (1 & t[0]);
            e !== o && (n = q(-n));
          }
          const h = new Point(r, n);
          return (h.assertValidity(), h);
        }
        static fromUncompressedHex(t) {
          const e = C(t.subarray(1, d + 1)),
            r = C(t.subarray(d + 1, 2 * d + 1)),
            i = new Point(e, r);
          return (i.assertValidity(), i);
        }
        static fromHex(t) {
          const e = J(t),
            r = e.length,
            i = e[0];
          if (r === d) return this.fromCompressedHex(e);
          if (r === g && (2 === i || 3 === i)) return this.fromCompressedHex(e);
          if (r === y && 4 === i) return this.fromUncompressedHex(e);
          throw new Error(
            `Point.fromHex: received invalid point. Expected 32-${g} compressed bytes or ${y} uncompressed bytes, not ${r}`,
          );
        }
        static fromPrivateKey(t) {
          return Point.BASE.multiply(tt(t));
        }
        static fromSignature(t, e, r) {
          const { r: i, s: n } = rt(e);
          if (![0, 1, 2, 3].includes(r))
            throw new Error("Cannot recover: invalid recovery bit");
          const o = W(J(t)),
            { n: s } = f,
            h = 2 === r || 3 === r ? i + s : i,
            a = $(h, s),
            u = q(-o * a, s),
            l = q(n * a, s),
            c = 1 & r ? "03" : "02",
            d = Point.fromHex(c + j(h)),
            m = Point.BASE.multiplyAndAddUnsafe(d, u, l);
          if (!m)
            throw new Error("Cannot recover signature: point at infinify");
          return (m.assertValidity(), m);
        }
        toRawBytes(t) {
          return (void 0 === t && (t = !1), O(this.toHex(t)));
        }
        toHex(t) {
          void 0 === t && (t = !1);
          const e = j(this.x);
          if (t) {
            const t = this.hasEvenY() ? "02" : "03";
            return `${t}${e}`;
          }
          return `04${e}${j(this.y)}`;
        }
        toHexX() {
          return this.toHex(!0).slice(2);
        }
        toRawX() {
          return this.toRawBytes(!0).slice(1);
        }
        assertValidity() {
          const t = "Point is not on elliptic curve",
            { x: e, y: r } = this;
          if (!Y(e) || !Y(r)) throw new Error(t);
          const i = q(r * r),
            n = v(e);
          if (q(i - n) !== o) throw new Error(t);
        }
        equals(t) {
          return this.x === t.x && this.y === t.y;
        }
        negate() {
          return new Point(this.x, q(-this.y));
        }
        double() {
          return JacobianPoint.fromAffine(this).double().toAffine();
        }
        add(t) {
          return JacobianPoint.fromAffine(this)
            .add(JacobianPoint.fromAffine(t))
            .toAffine();
        }
        subtract(t) {
          return this.add(t.negate());
        }
        multiply(t) {
          return JacobianPoint.fromAffine(this).multiply(t, this).toAffine();
        }
        multiplyAndAddUnsafe(t, e, r) {
          const i = JacobianPoint.fromAffine(this),
            n =
              e === o || e === s || this !== Point.BASE
                ? i.multiplyUnsafe(e)
                : i.multiply(e),
            h = JacobianPoint.fromAffine(t).multiplyUnsafe(r),
            a = n.add(h);
          return a.equals(JacobianPoint.ZERO) ? void 0 : a.toAffine();
        }
      }
      function E(t) {
        return Number.parseInt(t[0], 16) >= 8 ? "00" + t : t;
      }
      function A(t) {
        if (t.length < 2 || 2 !== t[0])
          throw new Error("Invalid signature integer tag: " + k(t));
        const e = t[1],
          r = t.subarray(2, e + 2);
        if (!e || r.length !== e)
          throw new Error("Invalid signature integer: wrong length");
        if (0 === r[0] && r[1] <= 127)
          throw new Error("Invalid signature integer: trailing length");
        return { data: C(r), left: t.subarray(e + 2) };
      }
      function S(t) {
        if (t.length < 2 || 48 != t[0])
          throw new Error("Invalid signature tag: " + k(t));
        if (t[1] !== t.length - 2)
          throw new Error("Invalid signature: incorrect length");
        const { data: e, left: r } = A(t.subarray(2)),
          { data: i, left: n } = A(r);
        if (n.length)
          throw new Error(
            "Invalid signature: left bytes after parsing: " + k(n),
          );
        return { r: e, s: i };
      }
      ((e.Point = Point),
        (Point.BASE = new Point(f.Gx, f.Gy)),
        (Point.ZERO = new Point(o, o)));
      class Signature {
        constructor(t, e) {
          ((this.r = t), (this.s = e), this.assertValidity());
        }
        static fromCompact(t) {
          const e = x(t),
            r = "Signature.fromCompact";
          if ("string" !== typeof t && !e)
            throw new TypeError(r + ": Expected string or Uint8Array");
          const i = e ? k(t) : t;
          if (128 !== i.length) throw new Error(r + ": Expected 64-byte hex");
          return new Signature(H(i.slice(0, 64)), H(i.slice(64, 128)));
        }
        static fromDER(t) {
          const e = x(t);
          if ("string" !== typeof t && !e)
            throw new TypeError(
              "Signature.fromDER: Expected string or Uint8Array",
            );
          const { r: r, s: i } = S(e ? t : O(t));
          return new Signature(r, i);
        }
        static fromHex(t) {
          return this.fromDER(t);
        }
        assertValidity() {
          const { r: t, s: e } = this;
          if (!X(t)) throw new Error("Invalid Signature: r must be 0 < r < n");
          if (!X(e)) throw new Error("Invalid Signature: s must be 0 < s < n");
        }
        hasHighS() {
          const t = f.n >> s;
          return this.s > t;
        }
        normalizeS() {
          return this.hasHighS()
            ? new Signature(this.r, q(-this.s, f.n))
            : this;
        }
        toDERRawBytes() {
          return O(this.toDERHex());
        }
        toDERHex() {
          const t = E(T(this.s)),
            e = E(T(this.r)),
            r = t.length / 2,
            i = e.length / 2,
            n = T(r),
            o = T(i),
            s = T(i + r + 4);
          return `30${s}02${o}${e}02${n}${t}`;
        }
        toRawBytes() {
          return this.toDERRawBytes();
        }
        toHex() {
          return this.toDERHex();
        }
        toCompactRawBytes() {
          return O(this.toCompactHex());
        }
        toCompactHex() {
          return j(this.r) + j(this.s);
        }
      }
      function x(t) {
        return (
          t instanceof Uint8Array ||
          (ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name)
        );
      }
      function B(t) {
        if (!x(t)) throw new Error("Uint8Array expected");
      }
      function P() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        if ((e.every(B), 1 === e.length)) return e[0];
        const i = e.reduce((t, e) => t + e.length, 0),
          n = new Uint8Array(i);
        for (let o = 0, s = 0; o < e.length; o++) {
          const t = e[o];
          (n.set(t, s), (s += t.length));
        }
        return n;
      }
      e.Signature = Signature;
      const R = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0"),
      );
      function k(t) {
        B(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += R[t[r]];
        return e;
      }
      const U = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function I(t) {
        return t >= U._0 && t <= U._9
          ? t - U._0
          : t >= U.A && t <= U.F
            ? t - (U.A - 10)
            : t >= U.a && t <= U.f
              ? t - (U.a - 10)
              : void 0;
      }
      function O(t) {
        if ("string" !== typeof t)
          throw new Error("hex string expected, got " + typeof t);
        const e = t.length,
          r = e / 2;
        if (e % 2)
          throw new Error(
            "hex string expected, got unpadded hex of length " + e,
          );
        const i = new Uint8Array(r);
        for (let n = 0, o = 0; n < r; n++, o += 2) {
          const e = I(t.charCodeAt(o)),
            r = I(t.charCodeAt(o + 1));
          if (void 0 === e || void 0 === r) {
            const e = t[o] + t[o + 1];
            throw new Error(
              'hex string expected, got non-hex character "' +
                e +
                '" at index ' +
                o,
            );
          }
          i[n] = 16 * e + r;
        }
        return i;
      }
      const z = BigInt(
        "0x10000000000000000000000000000000000000000000000000000000000000000",
      );
      function j(t) {
        if ("bigint" !== typeof t) throw new Error("Expected bigint");
        if (!(o <= t && t < z))
          throw new Error("Expected number 0 <= n < 2^256");
        return t.toString(16).padStart(64, "0");
      }
      function N(t) {
        const e = O(j(t));
        if (32 !== e.length) throw new Error("Error: expected 32 bytes");
        return e;
      }
      function T(t) {
        const e = t.toString(16);
        return 1 & e.length ? "0" + e : e;
      }
      function H(t) {
        if ("string" !== typeof t)
          throw new TypeError("hexToNumber: expected string, got " + typeof t);
        return BigInt("0x" + t);
      }
      function C(t) {
        return H(k(t));
      }
      function J(t) {
        return x(t) ? Uint8Array.from(t) : O(t);
      }
      function Z(t) {
        if ("number" === typeof t && Number.isSafeInteger(t) && t > 0)
          return BigInt(t);
        if ("bigint" === typeof t && X(t)) return t;
        throw new TypeError(
          "Expected valid private scalar: 0 < scalar < curve.n",
        );
      }
      function q(t, e) {
        void 0 === e && (e = f.P);
        const r = t % e;
        return r >= o ? r : e + r;
      }
      function D(t, e) {
        const { P: r } = f;
        let i = t;
        while (e-- > o) ((i *= i), (i %= r));
        return i;
      }
      function L(t) {
        const { P: e } = f,
          r = BigInt(6),
          i = BigInt(11),
          n = BigInt(22),
          o = BigInt(23),
          s = BigInt(44),
          u = BigInt(88),
          l = (t * t * t) % e,
          c = (l * l * t) % e,
          d = (D(c, a) * c) % e,
          m = (D(d, a) * c) % e,
          p = (D(m, h) * l) % e,
          g = (D(p, i) * p) % e,
          y = (D(g, n) * g) % e,
          v = (D(y, s) * y) % e,
          w = (D(v, u) * v) % e,
          M = (D(w, s) * y) % e,
          b = (D(M, a) * c) % e,
          _ = (D(b, o) * g) % e,
          E = (D(_, r) * l) % e,
          A = D(E, h),
          S = (A * A) % e;
        if (S !== t) throw new Error("Cannot find square root");
        return A;
      }
      function $(t, e) {
        if ((void 0 === e && (e = f.P), t === o || e <= o))
          throw new Error(
            `invert: expected positive integers, got n=${t} mod=${e}`,
          );
        let r = q(t, e),
          i = e,
          n = o,
          h = s,
          a = s,
          u = o;
        while (r !== o) {
          const t = i / r,
            e = i % r,
            o = n - a * t,
            s = h - u * t;
          ((i = r), (r = e), (n = a), (h = u), (a = o), (u = s));
        }
        const l = i;
        if (l !== s) throw new Error("invert: does not exist");
        return q(n, e);
      }
      function F(t, e) {
        void 0 === e && (e = f.P);
        const r = new Array(t.length),
          i = t.reduce(
            (t, i, n) => (i === o ? t : ((r[n] = t), q(t * i, e))),
            s,
          ),
          n = $(i, e);
        return (
          t.reduceRight(
            (t, i, n) => (i === o ? t : ((r[n] = q(t * r[n], e)), q(t * i, e))),
            n,
          ),
          r
        );
      }
      function V(t) {
        const e = 8 * t.length - 8 * m,
          r = C(t);
        return e > 0 ? r >> BigInt(e) : r;
      }
      function W(t, e) {
        void 0 === e && (e = !1);
        const r = V(t);
        if (e) return r;
        const { n: i } = f;
        return r >= i ? r - i : r;
      }
      let K, G;
      class HmacDrbg {
        constructor(t, e) {
          if (
            ((this.hashLen = t),
            (this.qByteLen = e),
            "number" !== typeof t || t < 2)
          )
            throw new Error("hashLen must be a number");
          if ("number" !== typeof e || e < 2)
            throw new Error("qByteLen must be a number");
          ((this.v = new Uint8Array(t).fill(1)),
            (this.k = new Uint8Array(t).fill(0)),
            (this.counter = 0));
        }
        hmac() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          return Bt.hmacSha256(this.k, ...e);
        }
        hmacSync() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          return G(this.k, ...e);
        }
        checkSync() {
          if ("function" !== typeof G)
            throw new ShaError("hmacSha256Sync needs to be set");
        }
        incr() {
          if (this.counter >= 1e3)
            throw new Error(
              "Tried 1,000 k values for sign(), all were invalid",
            );
          this.counter += 1;
        }
        async reseed(t) {
          (void 0 === t && (t = new Uint8Array()),
            (this.k = await this.hmac(this.v, Uint8Array.from([0]), t)),
            (this.v = await this.hmac(this.v)),
            0 !== t.length &&
              ((this.k = await this.hmac(this.v, Uint8Array.from([1]), t)),
              (this.v = await this.hmac(this.v))));
        }
        reseedSync(t) {
          (void 0 === t && (t = new Uint8Array()),
            this.checkSync(),
            (this.k = this.hmacSync(this.v, Uint8Array.from([0]), t)),
            (this.v = this.hmacSync(this.v)),
            0 !== t.length &&
              ((this.k = this.hmacSync(this.v, Uint8Array.from([1]), t)),
              (this.v = this.hmacSync(this.v))));
        }
        async generate() {
          this.incr();
          let t = 0;
          const e = [];
          while (t < this.qByteLen) {
            this.v = await this.hmac(this.v);
            const r = this.v.slice();
            (e.push(r), (t += this.v.length));
          }
          return P(...e);
        }
        generateSync() {
          (this.checkSync(), this.incr());
          let t = 0;
          const e = [];
          while (t < this.qByteLen) {
            this.v = this.hmacSync(this.v);
            const r = this.v.slice();
            (e.push(r), (t += this.v.length));
          }
          return P(...e);
        }
      }
      function X(t) {
        return o < t && t < f.n;
      }
      function Y(t) {
        return o < t && t < f.P;
      }
      function Q(t, e, r, i) {
        void 0 === i && (i = !0);
        const { n: n } = f,
          h = W(t, !0);
        if (!X(h)) return;
        const a = $(h, n),
          u = Point.BASE.multiply(h),
          l = q(u.x, n);
        if (l === o) return;
        const c = q(a * q(e + r * l, n), n);
        if (c === o) return;
        let d = new Signature(l, c),
          m = (u.x === d.r ? 0 : 2) | Number(u.y & s);
        return (
          i && d.hasHighS() && ((d = d.normalizeS()), (m ^= 1)),
          { sig: d, recovery: m }
        );
      }
      function tt(t) {
        let e;
        if ("bigint" === typeof t) e = t;
        else if ("number" === typeof t && Number.isSafeInteger(t) && t > 0)
          e = BigInt(t);
        else if ("string" === typeof t) {
          if (t.length !== 2 * m)
            throw new Error("Expected 32 bytes of private key");
          e = H(t);
        } else {
          if (!x(t)) throw new TypeError("Expected valid private key");
          if (t.length !== m)
            throw new Error("Expected 32 bytes of private key");
          e = C(t);
        }
        if (!X(e)) throw new Error("Expected private key: 0 < key < n");
        return e;
      }
      function et(t) {
        return t instanceof Point ? (t.assertValidity(), t) : Point.fromHex(t);
      }
      function rt(t) {
        if (t instanceof Signature) return (t.assertValidity(), t);
        try {
          return Signature.fromDER(t);
        } catch (e) {
          return Signature.fromCompact(t);
        }
      }
      function it(t, e) {
        return (
          void 0 === e && (e = !1),
          Point.fromPrivateKey(t).toRawBytes(e)
        );
      }
      function nt(t, e, r, i) {
        return (
          void 0 === i && (i = !1),
          Point.fromSignature(t, e, r).toRawBytes(i)
        );
      }
      function ot(t) {
        const e = x(t),
          r = "string" === typeof t,
          i = (e || r) && t.length;
        return e
          ? i === g || i === y
          : r
            ? i === 2 * g || i === 2 * y
            : t instanceof Point;
      }
      function st(t, e, r) {
        if ((void 0 === r && (r = !1), ot(t)))
          throw new TypeError("getSharedSecret: first arg must be private key");
        if (!ot(e))
          throw new TypeError("getSharedSecret: second arg must be public key");
        const i = et(e);
        return (i.assertValidity(), i.multiply(tt(t)).toRawBytes(r));
      }
      function ht(t) {
        const e = t.length > d ? t.slice(0, d) : t;
        return C(e);
      }
      function at(t) {
        const e = ht(t),
          r = q(e, f.n);
        return ut(r < o ? e : r);
      }
      function ut(t) {
        return N(t);
      }
      function ft(t, e, r) {
        if (null == t)
          throw new Error(`sign: expected valid message hash, not "${t}"`);
        const i = J(t),
          n = tt(e),
          o = [ut(n), at(i)];
        if (null != r) {
          !0 === r && (r = Bt.randomBytes(d));
          const t = J(r);
          if (t.length !== d)
            throw new Error(`sign: Expected ${d} bytes of extra data`);
          o.push(t);
        }
        const s = P(...o),
          h = ht(i);
        return { seed: s, m: h, d: n };
      }
      function lt(t, e) {
        const { sig: r, recovery: i } = t,
          { der: n, recovered: o } = Object.assign(
            { canonical: !0, der: !0 },
            e,
          ),
          s = n ? r.toDERRawBytes() : r.toCompactRawBytes();
        return o ? [s, i] : s;
      }
      async function ct(t, e, r) {
        void 0 === r && (r = {});
        const { seed: i, m: n, d: o } = ft(t, e, r.extraEntropy),
          s = new HmacDrbg(p, m);
        let h;
        await s.reseed(i);
        while (!(h = Q(await s.generate(), n, o, r.canonical)))
          await s.reseed();
        return lt(h, r);
      }
      function dt(t, e, r) {
        void 0 === r && (r = {});
        const { seed: i, m: n, d: o } = ft(t, e, r.extraEntropy),
          s = new HmacDrbg(p, m);
        let h;
        s.reseedSync(i);
        while (!(h = Q(s.generateSync(), n, o, r.canonical))) s.reseedSync();
        return lt(h, r);
      }
      const mt = { strict: !0 };
      function pt(t, e, r, i) {
        let n;
        void 0 === i && (i = mt);
        try {
          ((n = rt(t)), (e = J(e)));
        } catch (g) {
          return !1;
        }
        const { r: o, s: s } = n;
        if (i.strict && n.hasHighS()) return !1;
        const h = W(e);
        let a;
        try {
          a = et(r);
        } catch (g) {
          return !1;
        }
        const { n: u } = f,
          l = $(s, u),
          c = q(h * l, u),
          d = q(o * l, u),
          m = Point.BASE.multiplyAndAddUnsafe(a, c, d);
        if (!m) return !1;
        const p = q(m.x, u);
        return p === o;
      }
      function gt(t) {
        return q(C(t), f.n);
      }
      class SchnorrSignature {
        constructor(t, e) {
          ((this.r = t), (this.s = e), this.assertValidity());
        }
        static fromHex(t) {
          const e = J(t);
          if (64 !== e.length)
            throw new TypeError(
              "SchnorrSignature.fromHex: expected 64 bytes, not " + e.length,
            );
          const r = C(e.subarray(0, 32)),
            i = C(e.subarray(32, 64));
          return new SchnorrSignature(r, i);
        }
        assertValidity() {
          const { r: t, s: e } = this;
          if (!Y(t) || !X(e)) throw new Error("Invalid signature");
        }
        toHex() {
          return j(this.r) + j(this.s);
        }
        toRawBytes() {
          return O(this.toHex());
        }
      }
      function yt(t) {
        return Point.fromPrivateKey(t).toRawX();
      }
      class InternalSchnorrSignature {
        constructor(t, e, r) {
          if ((void 0 === r && (r = Bt.randomBytes()), null == t))
            throw new TypeError(`sign: Expected valid message, not "${t}"`);
          this.m = J(t);
          const { x: i, scalar: n } = this.getScalar(tt(e));
          if (
            ((this.px = i),
            (this.d = n),
            (this.rand = J(r)),
            32 !== this.rand.length)
          )
            throw new TypeError("sign: Expected 32 bytes of aux randomness");
        }
        getScalar(t) {
          const e = Point.fromPrivateKey(t),
            r = e.hasEvenY() ? t : f.n - t;
          return { point: e, scalar: r, x: e.toRawX() };
        }
        initNonce(t, e) {
          return N(t ^ C(e));
        }
        finalizeNonce(t) {
          const e = q(C(t), f.n);
          if (e === o)
            throw new Error("sign: Creation of signature failed. k is zero");
          const { point: r, x: i, scalar: n } = this.getScalar(e);
          return { R: r, rx: i, k: n };
        }
        finalizeSig(t, e, r, i) {
          return new SchnorrSignature(t.x, q(e + r * i, f.n)).toRawBytes();
        }
        error() {
          throw new Error("sign: Invalid signature produced");
        }
        async calc() {
          const { m: t, d: e, px: r, rand: i } = this,
            n = Bt.taggedHash,
            o = this.initNonce(e, await n(St.aux, i)),
            {
              R: s,
              rx: h,
              k: a,
            } = this.finalizeNonce(await n(St.nonce, o, r, t)),
            u = gt(await n(St.challenge, h, r, t)),
            f = this.finalizeSig(s, a, u, e);
          return ((await _t(f, t, r)) || this.error(), f);
        }
        calcSync() {
          const { m: t, d: e, px: r, rand: i } = this,
            n = Bt.taggedHashSync,
            o = this.initNonce(e, n(St.aux, i)),
            { R: s, rx: h, k: a } = this.finalizeNonce(n(St.nonce, o, r, t)),
            u = gt(n(St.challenge, h, r, t)),
            f = this.finalizeSig(s, a, u, e);
          return (Et(f, t, r) || this.error(), f);
        }
      }
      async function vt(t, e, r) {
        return new InternalSchnorrSignature(t, e, r).calc();
      }
      function wt(t, e, r) {
        return new InternalSchnorrSignature(t, e, r).calcSync();
      }
      function Mt(t, e, r) {
        const i = t instanceof SchnorrSignature,
          n = i ? t : SchnorrSignature.fromHex(t);
        return (i && n.assertValidity(), { ...n, m: J(e), P: et(r) });
      }
      function bt(t, e, r, i) {
        const n = Point.BASE.multiplyAndAddUnsafe(e, tt(r), q(-i, f.n));
        return !(!n || !n.hasEvenY() || n.x !== t);
      }
      async function _t(t, e, r) {
        try {
          const { r: i, s: n, m: o, P: s } = Mt(t, e, r),
            h = gt(await Bt.taggedHash(St.challenge, N(i), s.toRawX(), o));
          return bt(i, s, n, h);
        } catch (i) {
          return !1;
        }
      }
      function Et(t, e, r) {
        try {
          const { r: i, s: n, m: o, P: s } = Mt(t, e, r),
            h = gt(Bt.taggedHashSync(St.challenge, N(i), s.toRawX(), o));
          return bt(i, s, n, h);
        } catch (i) {
          if (i instanceof ShaError) throw i;
          return !1;
        }
      }
      e.schnorr = {
        Signature: SchnorrSignature,
        getPublicKey: yt,
        sign: vt,
        verify: _t,
        signSync: wt,
        verifySync: Et,
      };
      Point.BASE._setWindowSize(8);
      const At = {
          node: i,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        },
        St = {
          challenge: "BIP0340/challenge",
          aux: "BIP0340/aux",
          nonce: "BIP0340/nonce",
        },
        xt = {},
        Bt = (e.utils = {
          bytesToHex: k,
          hexToBytes: O,
          concatBytes: P,
          mod: q,
          invert: $,
          isValidPrivateKey(t) {
            try {
              return (tt(t), !0);
            } catch (e) {
              return !1;
            }
          },
          _bigintTo32Bytes: N,
          _normalizePrivateKey: tt,
          hashToPrivateKey: (t) => {
            t = J(t);
            const e = m + 8;
            if (t.length < e || t.length > 1024)
              throw new Error(
                "Expected valid bytes of private key as per FIPS 186",
              );
            const r = q(C(t), f.n - s) + s;
            return N(r);
          },
          randomBytes: function (t) {
            if ((void 0 === t && (t = 32), At.web))
              return At.web.getRandomValues(new Uint8Array(t));
            if (At.node) {
              const { randomBytes: e } = At.node;
              return Uint8Array.from(e(t));
            }
            throw new Error(
              "The environment doesn't have randomBytes function",
            );
          },
          randomPrivateKey: () => Bt.hashToPrivateKey(Bt.randomBytes(m + 8)),
          precompute(t, e) {
            (void 0 === t && (t = 8), void 0 === e && (e = Point.BASE));
            const r = e === Point.BASE ? e : new Point(e.x, e.y);
            return (r._setWindowSize(t), r.multiply(a), r);
          },
          sha256: async function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            if (At.web) {
              const t = await At.web.subtle.digest("SHA-256", P(...e));
              return new Uint8Array(t);
            }
            if (At.node) {
              const { createHash: t } = At.node,
                r = t("sha256");
              return (
                e.forEach((t) => r.update(t)),
                Uint8Array.from(r.digest())
              );
            }
            throw new Error("The environment doesn't have sha256 function");
          },
          hmacSha256: async function (t) {
            for (
              var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1;
              i < e;
              i++
            )
              r[i - 1] = arguments[i];
            if (At.web) {
              const e = await At.web.subtle.importKey(
                  "raw",
                  t,
                  { name: "HMAC", hash: { name: "SHA-256" } },
                  !1,
                  ["sign"],
                ),
                i = P(...r),
                n = await At.web.subtle.sign("HMAC", e, i);
              return new Uint8Array(n);
            }
            if (At.node) {
              const { createHmac: e } = At.node,
                i = e("sha256", t);
              return (
                r.forEach((t) => i.update(t)),
                Uint8Array.from(i.digest())
              );
            }
            throw new Error(
              "The environment doesn't have hmac-sha256 function",
            );
          },
          sha256Sync: void 0,
          hmacSha256Sync: void 0,
          taggedHash: async function (t) {
            let e = xt[t];
            if (void 0 === e) {
              const r = await Bt.sha256(
                Uint8Array.from(t, (t) => t.charCodeAt(0)),
              );
              ((e = P(r, r)), (xt[t] = e));
            }
            for (
              var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1;
              n < r;
              n++
            )
              i[n - 1] = arguments[n];
            return Bt.sha256(e, ...i);
          },
          taggedHashSync: function (t) {
            if ("function" !== typeof K)
              throw new ShaError("sha256Sync is undefined, you need to set it");
            let e = xt[t];
            if (void 0 === e) {
              const r = K(Uint8Array.from(t, (t) => t.charCodeAt(0)));
              ((e = P(r, r)), (xt[t] = e));
            }
            for (
              var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1;
              n < r;
              n++
            )
              i[n - 1] = arguments[n];
            return K(e, ...i);
          },
          _JacobianPoint: JacobianPoint,
        });
      Object.defineProperties(Bt, {
        sha256Sync: {
          configurable: !1,
          get() {
            return K;
          },
          set(t) {
            K || (K = t);
          },
        },
        hmacSha256Sync: {
          configurable: !1,
          get() {
            return G;
          },
          set(t) {
            G || (G = t);
          },
        },
      });
    },
  },
]);
