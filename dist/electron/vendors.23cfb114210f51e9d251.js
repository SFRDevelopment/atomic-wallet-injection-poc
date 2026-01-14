(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [145, 146, 162],
  {
    2815: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isUint8Array =
          n.isNonNullObject =
          n.sleep =
          n.assertDefinedAndNotNull =
          n.assertDefined =
          n.assert =
          n.arrayContentStartsWith =
          n.arrayContentEquals =
            void 0));
      var s = r(3767);
      (Object.defineProperty(n, "arrayContentEquals", {
        enumerable: !0,
        get: function () {
          return s.arrayContentEquals;
        },
      }),
        Object.defineProperty(n, "arrayContentStartsWith", {
          enumerable: !0,
          get: function () {
            return s.arrayContentStartsWith;
          },
        }));
      var o = r(3768);
      (Object.defineProperty(n, "assert", {
        enumerable: !0,
        get: function () {
          return o.assert;
        },
      }),
        Object.defineProperty(n, "assertDefined", {
          enumerable: !0,
          get: function () {
            return o.assertDefined;
          },
        }),
        Object.defineProperty(n, "assertDefinedAndNotNull", {
          enumerable: !0,
          get: function () {
            return o.assertDefinedAndNotNull;
          },
        }));
      var i = r(3769);
      Object.defineProperty(n, "sleep", {
        enumerable: !0,
        get: function () {
          return i.sleep;
        },
      });
      var a = r(3770);
      (Object.defineProperty(n, "isNonNullObject", {
        enumerable: !0,
        get: function () {
          return a.isNonNullObject;
        },
      }),
        Object.defineProperty(n, "isUint8Array", {
          enumerable: !0,
          get: function () {
            return a.isUint8Array;
          },
        }));
    },
    2956: function (t, n, r) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.longify =
          n.createProtobufRpcClient =
          n.createPagination =
          n.toAccAddress =
            void 0));
      const o = r(2762),
        i = r(2796),
        a = s(r(2754));
      function c(t) {
        return o.Bech32.decode(t).data;
      }
      function u(t) {
        return t
          ? {
              key: t,
              offset: a.default.fromNumber(0, !0),
              limit: a.default.fromNumber(0, !0),
              countTotal: !1,
            }
          : void 0;
      }
      function d(t) {
        return {
          request: (n, r, s) => {
            const o = `/${n}/${r}`;
            return t.queryUnverified(o, s);
          },
        };
      }
      function l(t) {
        const n = i.Uint64.fromString(t.toString());
        return a.default.fromBytesBE([...n.toBytesBigEndian()], !0);
      }
      ((n.toAccAddress = c),
        (n.createPagination = u),
        (n.createProtobufRpcClient = d),
        (n.longify = l));
    },
    2966: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.pbkdf2 = c),
        (n.pbkdf2Async = u));
      const s = r(379),
        o = r(130);
      function i(t, n, r, i) {
        (0, o.ahash)(t);
        const a = (0, o.checkOpts)({ dkLen: 32, asyncTick: 10 }, i),
          { c: c, dkLen: u, asyncTick: d } = a;
        if (((0, o.anumber)(c), (0, o.anumber)(u), (0, o.anumber)(d), c < 1))
          throw new Error("iterations (c) should be >= 1");
        const l = (0, o.kdfInputToBytes)(n),
          h = (0, o.kdfInputToBytes)(r),
          p = new Uint8Array(u),
          m = s.hmac.create(t, l),
          f = m._cloneInto().update(h);
        return { c: c, dkLen: u, asyncTick: d, DK: p, PRF: m, PRFSalt: f };
      }
      function a(t, n, r, s, i) {
        return (t.destroy(), n.destroy(), s && s.destroy(), (0, o.clean)(i), r);
      }
      function c(t, n, r, s) {
        const { c: c, dkLen: u, DK: d, PRF: l, PRFSalt: h } = i(t, n, r, s);
        let p;
        const m = new Uint8Array(4),
          f = (0, o.createView)(m),
          g = new Uint8Array(l.outputLen);
        for (let o = 1, i = 0; i < u; o++, i += l.outputLen) {
          const t = d.subarray(i, i + l.outputLen);
          (f.setInt32(0, o, !1),
            (p = h._cloneInto(p)).update(m).digestInto(g),
            t.set(g.subarray(0, t.length)));
          for (let n = 1; n < c; n++) {
            l._cloneInto(p).update(g).digestInto(g);
            for (let n = 0; n < t.length; n++) t[n] ^= g[n];
          }
        }
        return a(l, h, d, p, g);
      }
      async function u(t, n, r, s) {
        const {
          c: c,
          dkLen: u,
          asyncTick: d,
          DK: l,
          PRF: h,
          PRFSalt: p,
        } = i(t, n, r, s);
        let m;
        const f = new Uint8Array(4),
          g = (0, o.createView)(f),
          y = new Uint8Array(h.outputLen);
        for (let i = 1, a = 0; a < u; i++, a += h.outputLen) {
          const t = l.subarray(a, a + h.outputLen);
          (g.setInt32(0, i, !1),
            (m = p._cloneInto(m)).update(f).digestInto(y),
            t.set(y.subarray(0, t.length)),
            await (0, o.asyncLoop)(c - 1, d, () => {
              h._cloneInto(m).update(y).digestInto(y);
              for (let n = 0; n < t.length; n++) t[n] ^= y[n];
            }));
        }
        return a(h, p, l, m, y);
      }
    },
    3021: function (t, n, r) {
      "use strict";
      function s(t, n) {
        var r = new Array(arguments.length - 1),
          s = 0,
          o = 2,
          i = !0;
        while (o < arguments.length) r[s++] = arguments[o++];
        return new Promise(function (o, a) {
          r[s] = function (t) {
            if (i)
              if (((i = !1), t)) a(t);
              else {
                var n = new Array(arguments.length - 1),
                  r = 0;
                while (r < n.length) n[r++] = arguments[r];
                o.apply(null, n);
              }
          };
          try {
            t.apply(n || null, r);
          } catch (c) {
            i && ((i = !1), a(c));
          }
        });
      }
      t.exports = s;
    },
    3022: function (t, n, r) {
      "use strict";
      var s = n;
      s.length = function (t) {
        var n = t.length;
        if (!n) return 0;
        var r = 0;
        while (--n % 4 > 1 && "=" === t.charAt(n)) ++r;
        return Math.ceil(3 * t.length) / 4 - r;
      };
      for (var o = new Array(64), i = new Array(123), a = 0; a < 64; )
        i[
          (o[a] =
            a < 26 ? a + 65 : a < 52 ? a + 71 : a < 62 ? a - 4 : (a - 59) | 43)
        ] = a++;
      s.encode = function (t, n, r) {
        var s,
          i = null,
          a = [],
          c = 0,
          u = 0;
        while (n < r) {
          var d = t[n++];
          switch (u) {
            case 0:
              ((a[c++] = o[d >> 2]), (s = (3 & d) << 4), (u = 1));
              break;
            case 1:
              ((a[c++] = o[s | (d >> 4)]), (s = (15 & d) << 2), (u = 2));
              break;
            case 2:
              ((a[c++] = o[s | (d >> 6)]), (a[c++] = o[63 & d]), (u = 0));
              break;
          }
          c > 8191 &&
            ((i || (i = [])).push(String.fromCharCode.apply(String, a)),
            (c = 0));
        }
        return (
          u && ((a[c++] = o[s]), (a[c++] = 61), 1 === u && (a[c++] = 61)),
          i
            ? (c && i.push(String.fromCharCode.apply(String, a.slice(0, c))),
              i.join(""))
            : String.fromCharCode.apply(String, a.slice(0, c))
        );
      };
      var c = "invalid encoding";
      ((s.decode = function (t, n, r) {
        for (var s, o = r, a = 0, u = 0; u < t.length; ) {
          var d = t.charCodeAt(u++);
          if (61 === d && a > 1) break;
          if (void 0 === (d = i[d])) throw Error(c);
          switch (a) {
            case 0:
              ((s = d), (a = 1));
              break;
            case 1:
              ((n[r++] = (s << 2) | ((48 & d) >> 4)), (s = d), (a = 2));
              break;
            case 2:
              ((n[r++] = ((15 & s) << 4) | ((60 & d) >> 2)), (s = d), (a = 3));
              break;
            case 3:
              ((n[r++] = ((3 & s) << 6) | d), (a = 0));
              break;
          }
        }
        if (1 === a) throw Error(c);
        return r - o;
      }),
        (s.test = function (t) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            t,
          );
        }));
    },
    3023: function (t, n, r) {
      "use strict";
      function s() {
        this._listeners = {};
      }
      ((t.exports = s),
        (s.prototype.on = function (t, n, r) {
          return (
            (this._listeners[t] || (this._listeners[t] = [])).push({
              fn: n,
              ctx: r || this,
            }),
            this
          );
        }),
        (s.prototype.off = function (t, n) {
          if (void 0 === t) this._listeners = {};
          else if (void 0 === n) this._listeners[t] = [];
          else
            for (var r = this._listeners[t], s = 0; s < r.length; )
              r[s].fn === n ? r.splice(s, 1) : ++s;
          return this;
        }),
        (s.prototype.emit = function (t) {
          var n = this._listeners[t];
          if (n) {
            for (var r = [], s = 1; s < arguments.length; )
              r.push(arguments[s++]);
            for (s = 0; s < n.length; ) n[s].fn.apply(n[s++].ctx, r);
          }
          return this;
        }));
    },
    3024: function (t, n, r) {
      "use strict";
      function s(t) {
        return (
          "undefined" !== typeof Float32Array
            ? (function () {
                var n = new Float32Array([-0]),
                  r = new Uint8Array(n.buffer),
                  s = 128 === r[3];
                function o(t, s, o) {
                  ((n[0] = t),
                    (s[o] = r[0]),
                    (s[o + 1] = r[1]),
                    (s[o + 2] = r[2]),
                    (s[o + 3] = r[3]));
                }
                function i(t, s, o) {
                  ((n[0] = t),
                    (s[o] = r[3]),
                    (s[o + 1] = r[2]),
                    (s[o + 2] = r[1]),
                    (s[o + 3] = r[0]));
                }
                function a(t, s) {
                  return (
                    (r[0] = t[s]),
                    (r[1] = t[s + 1]),
                    (r[2] = t[s + 2]),
                    (r[3] = t[s + 3]),
                    n[0]
                  );
                }
                function c(t, s) {
                  return (
                    (r[3] = t[s]),
                    (r[2] = t[s + 1]),
                    (r[1] = t[s + 2]),
                    (r[0] = t[s + 3]),
                    n[0]
                  );
                }
                ((t.writeFloatLE = s ? o : i),
                  (t.writeFloatBE = s ? i : o),
                  (t.readFloatLE = s ? a : c),
                  (t.readFloatBE = s ? c : a));
              })()
            : (function () {
                function n(t, n, r, s) {
                  var o = n < 0 ? 1 : 0;
                  if ((o && (n = -n), 0 === n))
                    t(1 / n > 0 ? 0 : 2147483648, r, s);
                  else if (isNaN(n)) t(2143289344, r, s);
                  else if (n > 34028234663852886e22)
                    t(((o << 31) | 2139095040) >>> 0, r, s);
                  else if (n < 11754943508222875e-54)
                    t(
                      ((o << 31) | Math.round(n / 1401298464324817e-60)) >>> 0,
                      r,
                      s,
                    );
                  else {
                    var i = Math.floor(Math.log(n) / Math.LN2),
                      a = 8388607 & Math.round(n * Math.pow(2, -i) * 8388608);
                    t(((o << 31) | ((i + 127) << 23) | a) >>> 0, r, s);
                  }
                }
                function r(t, n, r) {
                  var s = t(n, r),
                    o = 2 * (s >> 31) + 1,
                    i = (s >>> 23) & 255,
                    a = 8388607 & s;
                  return 255 === i
                    ? a
                      ? NaN
                      : o * (1 / 0)
                    : 0 === i
                      ? 1401298464324817e-60 * o * a
                      : o * Math.pow(2, i - 150) * (a + 8388608);
                }
                ((t.writeFloatLE = n.bind(null, o)),
                  (t.writeFloatBE = n.bind(null, i)),
                  (t.readFloatLE = r.bind(null, a)),
                  (t.readFloatBE = r.bind(null, c)));
              })(),
          "undefined" !== typeof Float64Array
            ? (function () {
                var n = new Float64Array([-0]),
                  r = new Uint8Array(n.buffer),
                  s = 128 === r[7];
                function o(t, s, o) {
                  ((n[0] = t),
                    (s[o] = r[0]),
                    (s[o + 1] = r[1]),
                    (s[o + 2] = r[2]),
                    (s[o + 3] = r[3]),
                    (s[o + 4] = r[4]),
                    (s[o + 5] = r[5]),
                    (s[o + 6] = r[6]),
                    (s[o + 7] = r[7]));
                }
                function i(t, s, o) {
                  ((n[0] = t),
                    (s[o] = r[7]),
                    (s[o + 1] = r[6]),
                    (s[o + 2] = r[5]),
                    (s[o + 3] = r[4]),
                    (s[o + 4] = r[3]),
                    (s[o + 5] = r[2]),
                    (s[o + 6] = r[1]),
                    (s[o + 7] = r[0]));
                }
                function a(t, s) {
                  return (
                    (r[0] = t[s]),
                    (r[1] = t[s + 1]),
                    (r[2] = t[s + 2]),
                    (r[3] = t[s + 3]),
                    (r[4] = t[s + 4]),
                    (r[5] = t[s + 5]),
                    (r[6] = t[s + 6]),
                    (r[7] = t[s + 7]),
                    n[0]
                  );
                }
                function c(t, s) {
                  return (
                    (r[7] = t[s]),
                    (r[6] = t[s + 1]),
                    (r[5] = t[s + 2]),
                    (r[4] = t[s + 3]),
                    (r[3] = t[s + 4]),
                    (r[2] = t[s + 5]),
                    (r[1] = t[s + 6]),
                    (r[0] = t[s + 7]),
                    n[0]
                  );
                }
                ((t.writeDoubleLE = s ? o : i),
                  (t.writeDoubleBE = s ? i : o),
                  (t.readDoubleLE = s ? a : c),
                  (t.readDoubleBE = s ? c : a));
              })()
            : (function () {
                function n(t, n, r, s, o, i) {
                  var a = s < 0 ? 1 : 0;
                  if ((a && (s = -s), 0 === s))
                    (t(0, o, i + n), t(1 / s > 0 ? 0 : 2147483648, o, i + r));
                  else if (isNaN(s)) (t(0, o, i + n), t(2146959360, o, i + r));
                  else if (s > 17976931348623157e292)
                    (t(0, o, i + n),
                      t(((a << 31) | 2146435072) >>> 0, o, i + r));
                  else {
                    var c;
                    if (s < 22250738585072014e-324)
                      ((c = s / 5e-324),
                        t(c >>> 0, o, i + n),
                        t(((a << 31) | (c / 4294967296)) >>> 0, o, i + r));
                    else {
                      var u = Math.floor(Math.log(s) / Math.LN2);
                      (1024 === u && (u = 1023),
                        (c = s * Math.pow(2, -u)),
                        t((4503599627370496 * c) >>> 0, o, i + n),
                        t(
                          ((a << 31) |
                            ((u + 1023) << 20) |
                            ((1048576 * c) & 1048575)) >>>
                            0,
                          o,
                          i + r,
                        ));
                    }
                  }
                }
                function r(t, n, r, s, o) {
                  var i = t(s, o + n),
                    a = t(s, o + r),
                    c = 2 * (a >> 31) + 1,
                    u = (a >>> 20) & 2047,
                    d = 4294967296 * (1048575 & a) + i;
                  return 2047 === u
                    ? d
                      ? NaN
                      : c * (1 / 0)
                    : 0 === u
                      ? 5e-324 * c * d
                      : c * Math.pow(2, u - 1075) * (d + 4503599627370496);
                }
                ((t.writeDoubleLE = n.bind(null, o, 0, 4)),
                  (t.writeDoubleBE = n.bind(null, i, 4, 0)),
                  (t.readDoubleLE = r.bind(null, a, 0, 4)),
                  (t.readDoubleBE = r.bind(null, c, 4, 0)));
              })(),
          t
        );
      }
      function o(t, n, r) {
        ((n[r] = 255 & t),
          (n[r + 1] = (t >>> 8) & 255),
          (n[r + 2] = (t >>> 16) & 255),
          (n[r + 3] = t >>> 24));
      }
      function i(t, n, r) {
        ((n[r] = t >>> 24),
          (n[r + 1] = (t >>> 16) & 255),
          (n[r + 2] = (t >>> 8) & 255),
          (n[r + 3] = 255 & t));
      }
      function a(t, n) {
        return (
          (t[n] | (t[n + 1] << 8) | (t[n + 2] << 16) | (t[n + 3] << 24)) >>> 0
        );
      }
      function c(t, n) {
        return (
          ((t[n] << 24) | (t[n + 1] << 16) | (t[n + 2] << 8) | t[n + 3]) >>> 0
        );
      }
      t.exports = s(s);
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
    3026: function (t, n, r) {
      "use strict";
      var s = n;
      ((s.length = function (t) {
        for (var n = 0, r = 0, s = 0; s < t.length; ++s)
          ((r = t.charCodeAt(s)),
            r < 128
              ? (n += 1)
              : r < 2048
                ? (n += 2)
                : 55296 === (64512 & r) &&
                    56320 === (64512 & t.charCodeAt(s + 1))
                  ? (++s, (n += 4))
                  : (n += 3));
        return n;
      }),
        (s.read = function (t, n, r) {
          var s = r - n;
          if (s < 1) return "";
          var o,
            i = null,
            a = [],
            c = 0;
          while (n < r)
            ((o = t[n++]),
              o < 128
                ? (a[c++] = o)
                : o > 191 && o < 224
                  ? (a[c++] = ((31 & o) << 6) | (63 & t[n++]))
                  : o > 239 && o < 365
                    ? ((o =
                        (((7 & o) << 18) |
                          ((63 & t[n++]) << 12) |
                          ((63 & t[n++]) << 6) |
                          (63 & t[n++])) -
                        65536),
                      (a[c++] = 55296 + (o >> 10)),
                      (a[c++] = 56320 + (1023 & o)))
                    : (a[c++] =
                        ((15 & o) << 12) |
                        ((63 & t[n++]) << 6) |
                        (63 & t[n++])),
              c > 8191 &&
                ((i || (i = [])).push(String.fromCharCode.apply(String, a)),
                (c = 0)));
          return i
            ? (c && i.push(String.fromCharCode.apply(String, a.slice(0, c))),
              i.join(""))
            : String.fromCharCode.apply(String, a.slice(0, c));
        }),
        (s.write = function (t, n, r) {
          for (var s, o, i = r, a = 0; a < t.length; ++a)
            ((s = t.charCodeAt(a)),
              s < 128
                ? (n[r++] = s)
                : s < 2048
                  ? ((n[r++] = (s >> 6) | 192), (n[r++] = (63 & s) | 128))
                  : 55296 === (64512 & s) &&
                      56320 === (64512 & (o = t.charCodeAt(a + 1)))
                    ? ((s = 65536 + ((1023 & s) << 10) + (1023 & o)),
                      ++a,
                      (n[r++] = (s >> 18) | 240),
                      (n[r++] = ((s >> 12) & 63) | 128),
                      (n[r++] = ((s >> 6) & 63) | 128),
                      (n[r++] = (63 & s) | 128))
                    : ((n[r++] = (s >> 12) | 224),
                      (n[r++] = ((s >> 6) & 63) | 128),
                      (n[r++] = (63 & s) | 128)));
          return r - i;
        }));
    },
    3027: function (t, n, r) {
      "use strict";
      function s(t, n, r) {
        var s = r || 8192,
          o = s >>> 1,
          i = null,
          a = s;
        return function (r) {
          if (r < 1 || r > o) return t(r);
          a + r > s && ((i = t(s)), (a = 0));
          var c = n.call(i, a, (a += r));
          return (7 & a && (a = 1 + (7 | a)), c);
        };
      }
      t.exports = s;
    },
    3154: function (t, n, r) {
      "use strict";
      var s =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, n, r, s) {
                (void 0 === s && (s = r),
                  Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: function () {
                      return n[r];
                    },
                  }));
              }
            : function (t, n, r, s) {
                (void 0 === s && (s = r), (t[s] = n[r]));
              }),
        o =
          (this && this.__exportStar) ||
          function (t, n) {
            for (var r in t)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(n, r) ||
                s(n, t, r);
          };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.ValueAndUpdates =
          n.toListPromise =
          n.fromListPromise =
          n.firstEvent =
          n.dropDuplicates =
          n.concat =
          n.DefaultValueProducer =
            void 0));
      var i = r(4415);
      Object.defineProperty(n, "DefaultValueProducer", {
        enumerable: !0,
        get: function () {
          return i.DefaultValueProducer;
        },
      });
      var a = r(4416);
      Object.defineProperty(n, "concat", {
        enumerable: !0,
        get: function () {
          return a.concat;
        },
      });
      var c = r(4421);
      Object.defineProperty(n, "dropDuplicates", {
        enumerable: !0,
        get: function () {
          return c.dropDuplicates;
        },
      });
      var u = r(4422);
      (Object.defineProperty(n, "firstEvent", {
        enumerable: !0,
        get: function () {
          return u.firstEvent;
        },
      }),
        Object.defineProperty(n, "fromListPromise", {
          enumerable: !0,
          get: function () {
            return u.fromListPromise;
          },
        }),
        Object.defineProperty(n, "toListPromise", {
          enumerable: !0,
          get: function () {
            return u.toListPromise;
          },
        }),
        o(r(4423), n));
      var d = r(4424);
      Object.defineProperty(n, "ValueAndUpdates", {
        enumerable: !0,
        get: function () {
          return d.ValueAndUpdates;
        },
      });
    },
    3155: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.createJsonRpcRequest = void 0));
      const s = "123456789";
      function o() {
        return s[Math.floor(Math.random() * s.length)];
      }
      function i() {
        return parseInt(
          Array.from({ length: 12 })
            .map(() => o())
            .join(""),
          10,
        );
      }
      function a(t, n) {
        const r = n ? Object.assign({}, n) : {};
        return { jsonrpc: "2.0", id: i(), method: t, params: r };
      }
      n.createJsonRpcRequest = a;
    },
    3327: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.DateTime =
          n.toSeconds =
          n.fromSeconds =
          n.toRfc3339WithNanoseconds =
          n.fromRfc3339WithNanoseconds =
            void 0));
      const s = r(2762),
        o = r(2796);
      function i(t) {
        const n = s.fromRfc3339(t),
          r = t.match(/\.(\d+)Z$/),
          o = r ? r[1].slice(3) : "";
        return ((n.nanoseconds = parseInt(o.padEnd(6, "0"), 10)), n);
      }
      function a(t) {
        var n, r;
        const s = t.toISOString(),
          o =
            null !==
              (r =
                null === (n = t.nanoseconds) || void 0 === n
                  ? void 0
                  : n.toString()) && void 0 !== r
              ? r
              : "";
        return `${s.slice(0, -1)}${o.padStart(6, "0")}Z`;
      }
      function c(t, n) {
        void 0 === n && (n = 0);
        const r = new o.Uint32(n).toNumber();
        if (r > 999999999)
          throw new Error("Nano seconds must not exceed 999999999");
        const s = new Date(1e3 * t + Math.floor(r / 1e6));
        return ((s.nanoseconds = r % 1e6), s);
      }
      function u(t) {
        var n;
        return {
          seconds: Math.floor(t.getTime() / 1e3),
          nanos:
            (t.getTime() % 1e3) * 1e6 +
            (null !== (n = t.nanoseconds) && void 0 !== n ? n : 0),
        };
      }
      ((n.fromRfc3339WithNanoseconds = i),
        (n.toRfc3339WithNanoseconds = a),
        (n.fromSeconds = c),
        (n.toSeconds = u));
      class DateTime {
        static decode(t) {
          return i(t);
        }
        static encode(t) {
          return a(t);
        }
      }
      n.DateTime = DateTime;
    },
    3328: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.WebsocketClient =
          n.HttpClient =
          n.instanceOfRpcStreamingClient =
            void 0));
      var s = r(3329);
      Object.defineProperty(n, "instanceOfRpcStreamingClient", {
        enumerable: !0,
        get: function () {
          return s.instanceOfRpcStreamingClient;
        },
      });
      var o = r(4447);
      Object.defineProperty(n, "HttpClient", {
        enumerable: !0,
        get: function () {
          return o.HttpClient;
        },
      });
      var i = r(4452);
      Object.defineProperty(n, "WebsocketClient", {
        enumerable: !0,
        get: function () {
          return i.WebsocketClient;
        },
      });
    },
    3329: function (t, n, r) {
      "use strict";
      function s(t) {
        return "function" === typeof t.listen;
      }
      function o(t) {
        return -1 !== t.search("://");
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.hasProtocol = n.instanceOfRpcStreamingClient = void 0),
        (n.instanceOfRpcStreamingClient = s),
        (n.hasProtocol = o));
    },
    3330: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.BlockIdFlag = void 0),
        (function (t) {
          ((t[(t["Unknown"] = 0)] = "Unknown"),
            (t[(t["Absent"] = 1)] = "Absent"),
            (t[(t["Commit"] = 2)] = "Commit"),
            (t[(t["Nil"] = 3)] = "Nil"),
            (t[(t["Unrecognized"] = -1)] = "Unrecognized"));
        })(n.BlockIdFlag || (n.BlockIdFlag = {})));
    },
    3331: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.encodeBlockId =
          n.encodeVersion =
          n.encodeBytes =
          n.encodeTime =
          n.encodeInt =
          n.encodeString =
          n.Integer =
          n.dictionaryToStringMap =
          n.may =
          n.optional =
          n.assertNotEmpty =
          n.assertObject =
          n.assertArray =
          n.assertNumber =
          n.assertString =
          n.assertBoolean =
          n.assertSet =
            void 0));
      const s = r(2762),
        o = r(2796);
      function i(t) {
        if (void 0 === t) throw new Error("Value must not be undefined");
        if (null === t) throw new Error("Value must not be null");
        return t;
      }
      function a(t) {
        if ((i(t), "boolean" !== typeof t))
          throw new Error("Value must be a boolean");
        return t;
      }
      function c(t) {
        if ((i(t), "string" !== typeof t))
          throw new Error("Value must be a string");
        return t;
      }
      function u(t) {
        if ((i(t), "number" !== typeof t))
          throw new Error("Value must be a number");
        return t;
      }
      function d(t) {
        if ((i(t), !Array.isArray(t)))
          throw new Error("Value must be a an array");
        return t;
      }
      function l(t) {
        if ((i(t), "object" !== typeof t))
          throw new Error("Value must be an object");
        if ("[object Object]" !== Object.prototype.toString.call(t))
          throw new Error("Value must be a simple object");
        return t;
      }
      function h(t) {
        if ((i(t), "number" === typeof t && 0 === t))
          throw new Error("must provide a non-zero value");
        if (0 === t.length) throw new Error("must provide a non-empty value");
        return t;
      }
      function p(t, n) {
        return void 0 === t || null === t ? n : t;
      }
      function m(t, n) {
        return void 0 === n || null === n ? void 0 : t(n);
      }
      function f(t) {
        const n = new Map();
        for (const r of Object.keys(t)) {
          const s = t[r];
          if ("string" !== typeof s)
            throw new Error("Found dictionary value of type other than string");
          n.set(r, s);
        }
        return n;
      }
      ((n.assertSet = i),
        (n.assertBoolean = a),
        (n.assertString = c),
        (n.assertNumber = u),
        (n.assertArray = d),
        (n.assertObject = l),
        (n.assertNotEmpty = h),
        (n.optional = p),
        (n.may = m),
        (n.dictionaryToStringMap = f));
      class Integer {
        static parse(t) {
          const n =
            "number" === typeof t ? new o.Int53(t) : o.Int53.fromString(t);
          return n.toNumber();
        }
        static encode(t) {
          return new o.Int53(t).toString();
        }
      }
      function g(t) {
        const n = s.toUtf8(t);
        return Uint8Array.from([n.length, ...n]);
      }
      function y(t) {
        return t >= 128
          ? Uint8Array.from([(255 & t) | 128, ...y(t >> 7)])
          : Uint8Array.from([255 & t]);
      }
      function b(t) {
        const n = t.getTime(),
          r = Math.floor(n / 1e3),
          s = r ? [8, ...y(r)] : new Uint8Array(),
          o = (t.nanoseconds || 0) + (n % 1e3) * 1e6,
          i = o ? [16, ...y(o)] : new Uint8Array();
        return Uint8Array.from([...s, ...i]);
      }
      function v(t) {
        if (t.length >= 128)
          throw new Error(
            "Not implemented for byte arrays of length 128 or more",
          );
        return t.length ? Uint8Array.from([t.length, ...t]) : new Uint8Array();
      }
      function w(t) {
        const n = t.block
            ? Uint8Array.from([8, ...y(t.block)])
            : new Uint8Array(),
          r = t.app ? Uint8Array.from([16, ...y(t.app)]) : new Uint8Array();
        return Uint8Array.from([...n, ...r]);
      }
      function k(t) {
        return Uint8Array.from([
          10,
          t.hash.length,
          ...t.hash,
          18,
          t.parts.hash.length + 4,
          8,
          t.parts.total,
          18,
          t.parts.hash.length,
          ...t.parts.hash,
        ]);
      }
      ((n.Integer = Integer),
        (n.encodeString = g),
        (n.encodeInt = y),
        (n.encodeTime = b),
        (n.encodeBytes = v),
        (n.encodeVersion = w),
        (n.encodeBlockId = k));
    },
    3332: function (t, n, r) {
      "use strict";
      function s(t) {
        const n = t.tags ? t.tags : [],
          r = n.map((t) => `${t.key}='${t.value}'`),
          s = t.raw ? [t.raw] : [];
        return [...r, ...s].join(" AND ");
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.buildQuery = n.SubscriptionEventType = n.Method = void 0),
        (function (t) {
          ((t["AbciInfo"] = "abci_info"),
            (t["AbciQuery"] = "abci_query"),
            (t["Block"] = "block"),
            (t["Blockchain"] = "blockchain"),
            (t["BlockResults"] = "block_results"),
            (t["BroadcastTxAsync"] = "broadcast_tx_async"),
            (t["BroadcastTxSync"] = "broadcast_tx_sync"),
            (t["BroadcastTxCommit"] = "broadcast_tx_commit"),
            (t["Commit"] = "commit"),
            (t["Genesis"] = "genesis"),
            (t["Health"] = "health"),
            (t["Status"] = "status"),
            (t["Subscribe"] = "subscribe"),
            (t["Tx"] = "tx"),
            (t["TxSearch"] = "tx_search"),
            (t["Validators"] = "validators"),
            (t["Unsubscribe"] = "unsubscribe"));
        })(n.Method || (n.Method = {})),
        (function (t) {
          ((t["NewBlock"] = "NewBlock"),
            (t["NewBlockHeader"] = "NewBlockHeader"),
            (t["Tx"] = "Tx"));
        })(n.SubscriptionEventType || (n.SubscriptionEventType = {})),
        (n.buildQuery = s));
    },
    3333: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.encodeBlockId =
          n.encodeVersion =
          n.encodeBytes =
          n.encodeTime =
          n.encodeInt =
          n.encodeString =
          n.Integer =
          n.dictionaryToStringMap =
          n.may =
          n.optional =
          n.assertNotEmpty =
          n.assertObject =
          n.assertArray =
          n.assertNumber =
          n.assertString =
          n.assertBoolean =
          n.assertSet =
            void 0));
      const s = r(2762),
        o = r(2796);
      function i(t) {
        if (void 0 === t) throw new Error("Value must not be undefined");
        if (null === t) throw new Error("Value must not be null");
        return t;
      }
      function a(t) {
        if ((i(t), "boolean" !== typeof t))
          throw new Error("Value must be a boolean");
        return t;
      }
      function c(t) {
        if ((i(t), "string" !== typeof t))
          throw new Error("Value must be a string");
        return t;
      }
      function u(t) {
        if ((i(t), "number" !== typeof t))
          throw new Error("Value must be a number");
        return t;
      }
      function d(t) {
        if ((i(t), !Array.isArray(t)))
          throw new Error("Value must be a an array");
        return t;
      }
      function l(t) {
        if ((i(t), "object" !== typeof t))
          throw new Error("Value must be an object");
        if ("[object Object]" !== Object.prototype.toString.call(t))
          throw new Error("Value must be a simple object");
        return t;
      }
      function h(t) {
        if ((i(t), "number" === typeof t && 0 === t))
          throw new Error("must provide a non-zero value");
        if (0 === t.length) throw new Error("must provide a non-empty value");
        return t;
      }
      function p(t, n) {
        return void 0 === t || null === t ? n : t;
      }
      function m(t, n) {
        return void 0 === n || null === n ? void 0 : t(n);
      }
      function f(t) {
        const n = new Map();
        for (const r of Object.keys(t)) {
          const s = t[r];
          if ("string" !== typeof s)
            throw new Error("Found dictionary value of type other than string");
          n.set(r, s);
        }
        return n;
      }
      ((n.assertSet = i),
        (n.assertBoolean = a),
        (n.assertString = c),
        (n.assertNumber = u),
        (n.assertArray = d),
        (n.assertObject = l),
        (n.assertNotEmpty = h),
        (n.optional = p),
        (n.may = m),
        (n.dictionaryToStringMap = f));
      class Integer {
        static parse(t) {
          const n =
            "number" === typeof t ? new o.Int53(t) : o.Int53.fromString(t);
          return n.toNumber();
        }
        static encode(t) {
          return new o.Int53(t).toString();
        }
      }
      function g(t) {
        const n = s.toUtf8(t);
        return Uint8Array.from([n.length, ...n]);
      }
      function y(t) {
        return t >= 128
          ? Uint8Array.from([(255 & t) | 128, ...y(t >> 7)])
          : Uint8Array.from([255 & t]);
      }
      function b(t) {
        const n = t.getTime(),
          r = Math.floor(n / 1e3),
          s = r ? [8, ...y(r)] : new Uint8Array(),
          o = (t.nanoseconds || 0) + (n % 1e3) * 1e6,
          i = o ? [16, ...y(o)] : new Uint8Array();
        return Uint8Array.from([...s, ...i]);
      }
      function v(t) {
        if (t.length >= 128)
          throw new Error(
            "Not implemented for byte arrays of length 128 or more",
          );
        return t.length ? Uint8Array.from([t.length, ...t]) : new Uint8Array();
      }
      function w(t) {
        const n = t.block
            ? Uint8Array.from([8, ...y(t.block)])
            : new Uint8Array(),
          r = t.app ? Uint8Array.from([16, ...y(t.app)]) : new Uint8Array();
        return Uint8Array.from([...n, ...r]);
      }
      function k(t) {
        return Uint8Array.from([
          10,
          t.hash.length,
          ...t.hash,
          18,
          t.parts.hash.length + 4,
          8,
          t.parts.total,
          18,
          t.parts.hash.length,
          ...t.parts.hash,
        ]);
      }
      ((n.Integer = Integer),
        (n.encodeString = g),
        (n.encodeInt = y),
        (n.encodeTime = b),
        (n.encodeBytes = v),
        (n.encodeVersion = w),
        (n.encodeBlockId = k));
    },
    3334: function (t, n, r) {
      "use strict";
      function s(t) {
        const n = t.tags ? t.tags : [],
          r = n.map((t) => `${t.key}='${t.value}'`),
          s = t.raw ? [t.raw] : [];
        return [...r, ...s].join(" AND ");
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.buildQuery = n.SubscriptionEventType = n.Method = void 0),
        (function (t) {
          ((t["AbciInfo"] = "abci_info"),
            (t["AbciQuery"] = "abci_query"),
            (t["Block"] = "block"),
            (t["Blockchain"] = "blockchain"),
            (t["BlockResults"] = "block_results"),
            (t["BlockSearch"] = "block_search"),
            (t["BroadcastTxAsync"] = "broadcast_tx_async"),
            (t["BroadcastTxSync"] = "broadcast_tx_sync"),
            (t["BroadcastTxCommit"] = "broadcast_tx_commit"),
            (t["Commit"] = "commit"),
            (t["Genesis"] = "genesis"),
            (t["Health"] = "health"),
            (t["Status"] = "status"),
            (t["Subscribe"] = "subscribe"),
            (t["Tx"] = "tx"),
            (t["TxSearch"] = "tx_search"),
            (t["Validators"] = "validators"),
            (t["Unsubscribe"] = "unsubscribe"));
        })(n.Method || (n.Method = {})),
        (function (t) {
          ((t["NewBlock"] = "NewBlock"),
            (t["NewBlockHeader"] = "NewBlockHeader"),
            (t["Tx"] = "Tx"));
        })(n.SubscriptionEventType || (n.SubscriptionEventType = {})),
        (n.buildQuery = s));
    },
    3561: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.accountFromAny = void 0));
      const s = r(2796),
        o = r(2968),
        i = r(2815),
        a = r(3323),
        c = r(4403);
      function u(t) {
        return s.Uint64.fromString(t.toString());
      }
      function d(t) {
        const { address: n, pubKey: r, accountNumber: s, sequence: i } = t,
          a = o.decodePubkey(r);
        return {
          address: n,
          pubkey: a,
          accountNumber: u(s).toNumber(),
          sequence: u(i).toNumber(),
        };
      }
      function l(t) {
        var n, r, s, o, u, l, h;
        const { typeUrl: p, value: m } = t;
        switch (p) {
          case "/cosmos.auth.v1beta1.BaseAccount":
            return d(a.BaseAccount.decode(m));
          case "/cosmos.auth.v1beta1.ModuleAccount": {
            const t = a.ModuleAccount.decode(m).baseAccount;
            return (i.assert(t), d(t));
          }
          case "/cosmos.vesting.v1beta1.BaseVestingAccount": {
            const t =
              null === (n = c.BaseVestingAccount.decode(m)) || void 0 === n
                ? void 0
                : n.baseAccount;
            return (i.assert(t), d(t));
          }
          case "/cosmos.vesting.v1beta1.ContinuousVestingAccount": {
            const t =
              null ===
                (s =
                  null === (r = c.ContinuousVestingAccount.decode(m)) ||
                  void 0 === r
                    ? void 0
                    : r.baseVestingAccount) || void 0 === s
                ? void 0
                : s.baseAccount;
            return (i.assert(t), d(t));
          }
          case "/cosmos.vesting.v1beta1.DelayedVestingAccount": {
            const t =
              null ===
                (u =
                  null === (o = c.DelayedVestingAccount.decode(m)) ||
                  void 0 === o
                    ? void 0
                    : o.baseVestingAccount) || void 0 === u
                ? void 0
                : u.baseAccount;
            return (i.assert(t), d(t));
          }
          case "/cosmos.vesting.v1beta1.PeriodicVestingAccount": {
            const t =
              null ===
                (h =
                  null === (l = c.PeriodicVestingAccount.decode(m)) ||
                  void 0 === l
                    ? void 0
                    : l.baseVestingAccount) || void 0 === h
                ? void 0
                : h.baseAccount;
            return (i.assert(t), d(t));
          }
          default:
            throw new Error(`Unsupported type: '${p}'`);
        }
      }
      n.accountFromAny = l;
    },
    3562: function (t, n, r) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.AminoTypes = void 0));
      const o = r(2910),
        i = r(2762),
        a = r(2815),
        c = r(3324),
        u = r(2781),
        d = s(r(2754));
      function l(t) {
        if ("string" === typeof t) return "" === t ? void 0 : t;
        if ("number" === typeof t) return 0 === t ? void 0 : t;
        if (d.default.isLong(t)) return t.isZero() ? void 0 : t;
        throw new Error(`Got unsupported type '${typeof t}'`);
      }
      function h(t) {
        return {
          "/cosmos.bank.v1beta1.MsgSend": {
            aminoType: "cosmos-sdk/MsgSend",
            toAmino: (t) => {
              let { fromAddress: n, toAddress: r, amount: s } = t;
              return { from_address: n, to_address: r, amount: [...s] };
            },
            fromAmino: (t) => {
              let { from_address: n, to_address: r, amount: s } = t;
              return { fromAddress: n, toAddress: r, amount: [...s] };
            },
          },
          "/cosmos.bank.v1beta1.MsgMultiSend": {
            aminoType: "cosmos-sdk/MsgMultiSend",
            toAmino: (t) => {
              let { inputs: n, outputs: r } = t;
              return {
                inputs: n.map((t) => ({
                  address: t.address,
                  coins: [...t.coins],
                })),
                outputs: r.map((t) => ({
                  address: t.address,
                  coins: [...t.coins],
                })),
              };
            },
            fromAmino: (t) => {
              let { inputs: n, outputs: r } = t;
              return {
                inputs: n.map((t) => ({
                  address: t.address,
                  coins: [...t.coins],
                })),
                outputs: r.map((t) => ({
                  address: t.address,
                  coins: [...t.coins],
                })),
              };
            },
          },
          "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
            aminoType: "cosmos-sdk/MsgFundCommunityPool",
            toAmino: (t) => {
              let { amount: n, depositor: r } = t;
              return { amount: [...n], depositor: r };
            },
            fromAmino: (t) => {
              let { amount: n, depositor: r } = t;
              return { amount: [...n], depositor: r };
            },
          },
          "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
            aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
            toAmino: (t) => {
              let { delegatorAddress: n, withdrawAddress: r } = t;
              return { delegator_address: n, withdraw_address: r };
            },
            fromAmino: (t) => {
              let { delegator_address: n, withdraw_address: r } = t;
              return { delegatorAddress: n, withdrawAddress: r };
            },
          },
          "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
            aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
            toAmino: (t) => {
              let { delegatorAddress: n, validatorAddress: r } = t;
              return { delegator_address: n, validator_address: r };
            },
            fromAmino: (t) => {
              let { delegator_address: n, validator_address: r } = t;
              return { delegatorAddress: n, validatorAddress: r };
            },
          },
          "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
            aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
            toAmino: (t) => {
              let { validatorAddress: n } = t;
              return { validator_address: n };
            },
            fromAmino: (t) => {
              let { validator_address: n } = t;
              return { validatorAddress: n };
            },
          },
          "/cosmos.gov.v1beta1.MsgDeposit": {
            aminoType: "cosmos-sdk/MsgDeposit",
            toAmino: (t) => {
              let { amount: n, depositor: r, proposalId: s } = t;
              return { amount: n, depositor: r, proposal_id: s.toString() };
            },
            fromAmino: (t) => {
              let { amount: n, depositor: r, proposal_id: s } = t;
              return {
                amount: Array.from(n),
                depositor: r,
                proposalId: d.default.fromString(s),
              };
            },
          },
          "/cosmos.gov.v1beta1.MsgVote": {
            aminoType: "cosmos-sdk/MsgVote",
            toAmino: (t) => {
              let { option: n, proposalId: r, voter: s } = t;
              return { option: n, proposal_id: r.toString(), voter: s };
            },
            fromAmino: (t) => {
              let { option: n, proposal_id: r, voter: s } = t;
              return {
                option: c.voteOptionFromJSON(n),
                proposalId: d.default.fromString(r),
                voter: s,
              };
            },
          },
          "/cosmos.gov.v1beta1.MsgSubmitProposal": {
            aminoType: "cosmos-sdk/MsgSubmitProposal",
            toAmino: (t) => {
              let n,
                { initialDeposit: r, proposer: s, content: o } = t;
              switch ((a.assertDefinedAndNotNull(o), o.typeUrl)) {
                case "/cosmos.gov.v1beta1.TextProposal": {
                  const t = c.TextProposal.decode(o.value);
                  n = {
                    type: "cosmos-sdk/TextProposal",
                    value: { description: t.description, title: t.title },
                  };
                  break;
                }
                default:
                  throw new Error(`Unsupported proposal type: '${o.typeUrl}'`);
              }
              return { initial_deposit: r, proposer: s, content: n };
            },
            fromAmino: (t) => {
              let n,
                { initial_deposit: r, proposer: s, content: o } = t;
              switch (o.type) {
                case "cosmos-sdk/TextProposal": {
                  const { value: t } = o;
                  a.assert(a.isNonNullObject(t));
                  const { title: r, description: s } = t;
                  (a.assert("string" === typeof r),
                    a.assert("string" === typeof s),
                    (n = u.Any.fromPartial({
                      typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                      value: c.TextProposal.encode(
                        c.TextProposal.fromPartial({
                          title: r,
                          description: s,
                        }),
                      ).finish(),
                    })));
                  break;
                }
                default:
                  throw new Error(`Unsupported proposal type: '${o.type}'`);
              }
              return { initialDeposit: Array.from(r), proposer: s, content: n };
            },
          },
          "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
            aminoType: "cosmos-sdk/MsgBeginRedelegate",
            toAmino: (t) => {
              let {
                delegatorAddress: n,
                validatorSrcAddress: r,
                validatorDstAddress: s,
                amount: o,
              } = t;
              return (
                a.assertDefinedAndNotNull(o, "missing amount"),
                {
                  delegator_address: n,
                  validator_src_address: r,
                  validator_dst_address: s,
                  amount: o,
                }
              );
            },
            fromAmino: (t) => {
              let {
                delegator_address: n,
                validator_src_address: r,
                validator_dst_address: s,
                amount: o,
              } = t;
              return {
                delegatorAddress: n,
                validatorSrcAddress: r,
                validatorDstAddress: s,
                amount: o,
              };
            },
          },
          "/cosmos.staking.v1beta1.MsgCreateValidator": {
            aminoType: "cosmos-sdk/MsgCreateValidator",
            toAmino: (n) => {
              let {
                description: r,
                commission: s,
                minSelfDelegation: c,
                delegatorAddress: u,
                validatorAddress: d,
                pubkey: l,
                value: h,
              } = n;
              return (
                a.assertDefinedAndNotNull(r, "missing description"),
                a.assertDefinedAndNotNull(s, "missing commission"),
                a.assertDefinedAndNotNull(l, "missing pubkey"),
                a.assertDefinedAndNotNull(h, "missing value"),
                {
                  description: {
                    moniker: r.moniker,
                    identity: r.identity,
                    website: r.website,
                    security_contact: r.securityContact,
                    details: r.details,
                  },
                  commission: {
                    rate: s.rate,
                    max_rate: s.maxRate,
                    max_change_rate: s.maxChangeRate,
                  },
                  min_self_delegation: c,
                  delegator_address: u,
                  validator_address: d,
                  pubkey: o.encodeBech32Pubkey(
                    {
                      type: "tendermint/PubKeySecp256k1",
                      value: i.toBase64(l.value),
                    },
                    t,
                  ),
                  value: h,
                }
              );
            },
            fromAmino: (t) => {
              let {
                description: n,
                commission: r,
                min_self_delegation: s,
                delegator_address: a,
                validator_address: c,
                pubkey: u,
                value: d,
              } = t;
              const l = o.decodeBech32Pubkey(u);
              if ("tendermint/PubKeySecp256k1" !== l.type)
                throw new Error("Only Secp256k1 public keys are supported");
              return {
                description: {
                  moniker: n.moniker,
                  identity: n.identity,
                  website: n.website,
                  securityContact: n.security_contact,
                  details: n.details,
                },
                commission: {
                  rate: r.rate,
                  maxRate: r.max_rate,
                  maxChangeRate: r.max_change_rate,
                },
                minSelfDelegation: s,
                delegatorAddress: a,
                validatorAddress: c,
                pubkey: {
                  typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                  value: i.fromBase64(l.value),
                },
                value: d,
              };
            },
          },
          "/cosmos.staking.v1beta1.MsgDelegate": {
            aminoType: "cosmos-sdk/MsgDelegate",
            toAmino: (t) => {
              let { delegatorAddress: n, validatorAddress: r, amount: s } = t;
              return (
                a.assertDefinedAndNotNull(s, "missing amount"),
                { delegator_address: n, validator_address: r, amount: s }
              );
            },
            fromAmino: (t) => {
              let { delegator_address: n, validator_address: r, amount: s } = t;
              return { delegatorAddress: n, validatorAddress: r, amount: s };
            },
          },
          "/cosmos.staking.v1beta1.MsgEditValidator": {
            aminoType: "cosmos-sdk/MsgEditValidator",
            toAmino: (t) => {
              let {
                description: n,
                commissionRate: r,
                minSelfDelegation: s,
                validatorAddress: o,
              } = t;
              return (
                a.assertDefinedAndNotNull(n, "missing description"),
                {
                  description: {
                    moniker: n.moniker,
                    identity: n.identity,
                    website: n.website,
                    security_contact: n.securityContact,
                    details: n.details,
                  },
                  commission_rate: r,
                  min_self_delegation: s,
                  validator_address: o,
                }
              );
            },
            fromAmino: (t) => {
              let {
                description: n,
                commission_rate: r,
                min_self_delegation: s,
                validator_address: o,
              } = t;
              return {
                description: {
                  moniker: n.moniker,
                  identity: n.identity,
                  website: n.website,
                  securityContact: n.security_contact,
                  details: n.details,
                },
                commissionRate: r,
                minSelfDelegation: s,
                validatorAddress: o,
              };
            },
          },
          "/cosmos.staking.v1beta1.MsgUndelegate": {
            aminoType: "cosmos-sdk/MsgUndelegate",
            toAmino: (t) => {
              let { delegatorAddress: n, validatorAddress: r, amount: s } = t;
              return (
                a.assertDefinedAndNotNull(s, "missing amount"),
                { delegator_address: n, validator_address: r, amount: s }
              );
            },
            fromAmino: (t) => {
              let { delegator_address: n, validator_address: r, amount: s } = t;
              return { delegatorAddress: n, validatorAddress: r, amount: s };
            },
          },
          "/ibc.applications.transfer.v1.MsgTransfer": {
            aminoType: "cosmos-sdk/MsgTransfer",
            toAmino: (t) => {
              let {
                sourcePort: n,
                sourceChannel: r,
                token: s,
                sender: o,
                receiver: i,
                timeoutHeight: a,
                timeoutTimestamp: c,
              } = t;
              var u, d, h;
              return {
                source_port: n,
                source_channel: r,
                token: s,
                sender: o,
                receiver: i,
                timeout_height: a
                  ? {
                      revision_height:
                        null === (u = l(a.revisionHeight)) || void 0 === u
                          ? void 0
                          : u.toString(),
                      revision_number:
                        null === (d = l(a.revisionNumber)) || void 0 === d
                          ? void 0
                          : d.toString(),
                    }
                  : {},
                timeout_timestamp:
                  null === (h = l(c)) || void 0 === h ? void 0 : h.toString(),
              };
            },
            fromAmino: (t) => {
              let {
                source_port: n,
                source_channel: r,
                token: s,
                sender: o,
                receiver: i,
                timeout_height: a,
                timeout_timestamp: c,
              } = t;
              return {
                sourcePort: n,
                sourceChannel: r,
                token: s,
                sender: o,
                receiver: i,
                timeoutHeight: a
                  ? {
                      revisionHeight: d.default.fromString(
                        a.revision_height || "0",
                        !0,
                      ),
                      revisionNumber: d.default.fromString(
                        a.revision_number || "0",
                        !0,
                      ),
                    }
                  : void 0,
                timeoutTimestamp: d.default.fromString(c || "0", !0),
              };
            },
          },
        };
      }
      class AminoTypes {
        constructor(t) {
          let { additions: n = {}, prefix: r = "cosmos" } =
            void 0 === t ? {} : t;
          const s = Object.values(n),
            o = Object.entries(h(r)).reduce((t, n) => {
              let [r, o] = n;
              return s.find((t) => {
                let { aminoType: n } = t;
                return o.aminoType === n;
              })
                ? t
                : Object.assign(Object.assign({}, t), { [r]: o });
            }, {});
          this.register = Object.assign(Object.assign({}, o), n);
        }
        toAmino(t) {
          let { typeUrl: n, value: r } = t;
          const s = this.register[n];
          if (!s)
            throw new Error(
              "Type URL does not exist in the Amino message type register. If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues.",
            );
          return { type: s.aminoType, value: s.toAmino(r) };
        }
        fromAmino(t) {
          let { type: n, value: r } = t;
          const s = Object.entries(this.register).find((t) => {
            let [r, { aminoType: s }] = t;
            return s === n;
          });
          if (!s)
            throw new Error(
              "Type does not exist in the Amino message type register. If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues.",
            );
          const [o, i] = s;
          return { typeUrl: o, value: i.fromAmino(r) };
        }
      }
      n.AminoTypes = AminoTypes;
    },
    3563: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.createProtobufRpcClient =
          n.createPagination =
          n.setupStakingExtension =
          n.setupIbcExtension =
          n.setupGovExtension =
          n.setupDistributionExtension =
          n.setupBankExtension =
          n.setupAuthExtension =
          n.QueryClient =
            void 0));
      var s = r(4409);
      Object.defineProperty(n, "QueryClient", {
        enumerable: !0,
        get: function () {
          return s.QueryClient;
        },
      });
      var o = r(4425);
      Object.defineProperty(n, "setupAuthExtension", {
        enumerable: !0,
        get: function () {
          return o.setupAuthExtension;
        },
      });
      var i = r(4427);
      Object.defineProperty(n, "setupBankExtension", {
        enumerable: !0,
        get: function () {
          return i.setupBankExtension;
        },
      });
      var a = r(4429);
      Object.defineProperty(n, "setupDistributionExtension", {
        enumerable: !0,
        get: function () {
          return a.setupDistributionExtension;
        },
      });
      var c = r(4432);
      Object.defineProperty(n, "setupGovExtension", {
        enumerable: !0,
        get: function () {
          return c.setupGovExtension;
        },
      });
      var u = r(4434);
      Object.defineProperty(n, "setupIbcExtension", {
        enumerable: !0,
        get: function () {
          return u.setupIbcExtension;
        },
      });
      var d = r(4444);
      Object.defineProperty(n, "setupStakingExtension", {
        enumerable: !0,
        get: function () {
          return d.setupStakingExtension;
        },
      });
      var l = r(2956);
      (Object.defineProperty(n, "createPagination", {
        enumerable: !0,
        get: function () {
          return l.createPagination;
        },
      }),
        Object.defineProperty(n, "createProtobufRpcClient", {
          enumerable: !0,
          get: function () {
            return l.createProtobufRpcClient;
          },
        }));
    },
    3575: function (t, n, r) {
      "use strict";
      function s(t) {
        return void 0 !== t.height;
      }
      function o(t) {
        return void 0 !== t.sentFromOrTo;
      }
      function i(t) {
        return void 0 !== t.tags;
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isSearchByTagsQuery =
          n.isSearchBySentFromOrToQuery =
          n.isSearchByHeightQuery =
            void 0),
        (n.isSearchByHeightQuery = s),
        (n.isSearchBySentFromOrToQuery = o),
        (n.isSearchByTagsQuery = i));
    },
    3576: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.StargateClient =
          n.assertIsBroadcastTxSuccess =
          n.isBroadcastTxSuccess =
          n.isBroadcastTxFailure =
          n.TimeoutError =
            void 0));
      const s = r(2762),
        o = r(2796),
        i = r(3577),
        a = r(2815),
        c = r(3561),
        u = r(3563),
        d = r(3575);
      class TimeoutError extends Error {
        constructor(t, n) {
          (super(t), (this.txId = n));
        }
      }
      function l(t) {
        return !!t.code;
      }
      function h(t) {
        return !l(t);
      }
      function p(t) {
        if (l(t))
          throw new Error(
            `Error when broadcasting tx ${t.transactionHash} at height ${t.height}. Code: ${t.code}; Raw log: ${t.rawLog}`,
          );
      }
      ((n.TimeoutError = TimeoutError),
        (n.isBroadcastTxFailure = l),
        (n.isBroadcastTxSuccess = h),
        (n.assertIsBroadcastTxSuccess = p));
      class StargateClient {
        constructor(t) {
          t &&
            ((this.tmClient = t),
            (this.queryClient = u.QueryClient.withExtensions(
              t,
              u.setupAuthExtension,
              u.setupBankExtension,
              u.setupStakingExtension,
            )));
        }
        static async connect(t) {
          const n = await i.Tendermint34Client.connect(t);
          return new StargateClient(n);
        }
        getTmClient() {
          return this.tmClient;
        }
        forceGetTmClient() {
          if (!this.tmClient)
            throw new Error(
              "Tendermint client not available. You cannot use online functionality in offline mode.",
            );
          return this.tmClient;
        }
        getQueryClient() {
          return this.queryClient;
        }
        forceGetQueryClient() {
          if (!this.queryClient)
            throw new Error(
              "Query client not available. You cannot use online functionality in offline mode.",
            );
          return this.queryClient;
        }
        async getChainId() {
          if (!this.chainId) {
            const t = await this.forceGetTmClient().status(),
              n = t.nodeInfo.network;
            if (!n) throw new Error("Chain ID must not be empty");
            this.chainId = n;
          }
          return this.chainId;
        }
        async getHeight() {
          const t = await this.forceGetTmClient().status();
          return t.syncInfo.latestBlockHeight;
        }
        async getAccount(t) {
          try {
            const n = await this.forceGetQueryClient().auth.account(t);
            return n ? c.accountFromAny(n) : null;
          } catch (n) {
            if (/rpc error: code = NotFound/i.test(n)) return null;
            throw n;
          }
        }
        async getAccountVerified(t) {
          const n = await this.forceGetQueryClient().auth.verified.account(t);
          return n ? c.accountFromAny(n) : null;
        }
        async getSequence(t) {
          const n = await this.getAccount(t);
          if (!n)
            throw new Error(
              "Account does not exist on chain. Send some tokens there before trying to query sequence.",
            );
          return { accountNumber: n.accountNumber, sequence: n.sequence };
        }
        async getBlock(t) {
          const n = await this.forceGetTmClient().block(t);
          return {
            id: s.toHex(n.blockId.hash).toUpperCase(),
            header: {
              version: {
                block: new o.Uint53(n.block.header.version.block).toString(),
                app: new o.Uint53(n.block.header.version.app).toString(),
              },
              height: n.block.header.height,
              chainId: n.block.header.chainId,
              time: i.toRfc3339WithNanoseconds(n.block.header.time),
            },
            txs: n.block.txs,
          };
        }
        async getBalance(t, n) {
          return this.forceGetQueryClient().bank.balance(t, n);
        }
        async getAllBalances(t) {
          return this.forceGetQueryClient().bank.allBalances(t);
        }
        async getDelegation(t, n) {
          var r;
          let s;
          try {
            s =
              null ===
                (r = (await this.forceGetQueryClient().staking.delegation(t, n))
                  .delegationResponse) || void 0 === r
                ? void 0
                : r.balance;
          } catch (o) {
            if (!o.toString().includes("key not found")) throw o;
          }
          return s || null;
        }
        async getTx(t) {
          var n;
          const r = await this.txsQuery(`tx.hash='${t}'`);
          return null !== (n = r[0]) && void 0 !== n ? n : null;
        }
        async searchTx(t, n) {
          void 0 === n && (n = {});
          const r = n.minHeight || 0,
            s = n.maxHeight || Number.MAX_SAFE_INTEGER;
          if (s < r) return [];
          function o(t) {
            return `${t} AND tx.height>=${r} AND tx.height<=${s}`;
          }
          let i;
          if (d.isSearchByHeightQuery(t))
            i =
              t.height >= r && t.height <= s
                ? await this.txsQuery("tx.height=" + t.height)
                : [];
          else if (d.isSearchBySentFromOrToQuery(t)) {
            const n = o(
                `message.module='bank' AND transfer.sender='${t.sentFromOrTo}'`,
              ),
              r = o(
                `message.module='bank' AND transfer.recipient='${t.sentFromOrTo}'`,
              ),
              [s, a] = await Promise.all([n, r].map((t) => this.txsQuery(t))),
              c = s.map((t) => t.hash);
            i = [...s, ...a.filter((t) => !c.includes(t.hash))];
          } else {
            if (!d.isSearchByTagsQuery(t))
              throw new Error("Unknown query type");
            {
              const n = o(
                t.tags.map((t) => `${t.key}='${t.value}'`).join(" AND "),
              );
              i = await this.txsQuery(n);
            }
          }
          const a = i.filter((t) => t.height >= r && t.height <= s);
          return a;
        }
        disconnect() {
          this.tmClient && this.tmClient.disconnect();
        }
        async broadcastTx(t, n, r) {
          (void 0 === n && (n = 6e4), void 0 === r && (r = 3e3));
          let o = !1;
          const i = setTimeout(() => {
              o = !0;
            }, n),
            c = async (t) => {
              if (o)
                throw new TimeoutError(
                  `Transaction with ID ${t} was submitted but was not yet found on the chain. You might want to check later.`,
                  t,
                );
              await a.sleep(r);
              const n = await this.getTx(t);
              return n
                ? {
                    code: n.code,
                    height: n.height,
                    rawLog: n.rawLog,
                    transactionHash: t,
                    gasUsed: n.gasUsed,
                    gasWanted: n.gasWanted,
                  }
                : c(t);
            },
            u = await this.forceGetTmClient().broadcastTxSync({ tx: t });
          if (u.code)
            throw new Error(
              `Broadcasting transaction failed with code ${u.code} (codespace: ${u.codeSpace}). Log: ${u.log}`,
            );
          const d = s.toHex(u.hash).toUpperCase();
          return new Promise((t, n) =>
            c(d).then(
              (n) => {
                (clearTimeout(i), t(n));
              },
              (t) => {
                (clearTimeout(i), n(t));
              },
            ),
          );
        }
        async txsQuery(t) {
          const n = await this.forceGetTmClient().txSearchAll({ query: t });
          return n.txs.map((t) => ({
            height: t.height,
            hash: s.toHex(t.hash).toUpperCase(),
            code: t.result.code,
            rawLog: t.result.log || "",
            tx: t.tx,
            gasUsed: t.result.gasUsed,
            gasWanted: t.result.gasWanted,
          }));
        }
      }
      n.StargateClient = StargateClient;
    },
    3577: function (t, n, r) {
      "use strict";
      var s =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, n, r, s) {
                (void 0 === s && (s = r),
                  Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: function () {
                      return n[r];
                    },
                  }));
              }
            : function (t, n, r, s) {
                (void 0 === s && (s = r), (t[s] = n[r]));
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, n) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: n,
                });
              }
            : function (t, n) {
                t["default"] = n;
              }),
        i =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t)
              for (var r in t)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(t, r) &&
                  s(n, t, r);
            return (o(n, t), n);
          };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Tendermint34Client =
          n.tendermint34 =
          n.SubscriptionEventType =
          n.Method =
          n.VoteType =
          n.broadcastTxSyncSuccess =
          n.broadcastTxCommitSuccess =
          n.Tendermint33Client =
          n.tendermint33 =
          n.BlockIdFlag =
          n.WebsocketClient =
          n.HttpClient =
          n.toSeconds =
          n.toRfc3339WithNanoseconds =
          n.fromSeconds =
          n.fromRfc3339WithNanoseconds =
          n.DateTime =
          n.rawSecp256k1PubkeyToRawAddress =
          n.rawEd25519PubkeyToRawAddress =
          n.pubkeyToRawAddress =
          n.pubkeyToAddress =
            void 0));
      var a = r(4446);
      (Object.defineProperty(n, "pubkeyToAddress", {
        enumerable: !0,
        get: function () {
          return a.pubkeyToAddress;
        },
      }),
        Object.defineProperty(n, "pubkeyToRawAddress", {
          enumerable: !0,
          get: function () {
            return a.pubkeyToRawAddress;
          },
        }),
        Object.defineProperty(n, "rawEd25519PubkeyToRawAddress", {
          enumerable: !0,
          get: function () {
            return a.rawEd25519PubkeyToRawAddress;
          },
        }),
        Object.defineProperty(n, "rawSecp256k1PubkeyToRawAddress", {
          enumerable: !0,
          get: function () {
            return a.rawSecp256k1PubkeyToRawAddress;
          },
        }));
      var c = r(3327);
      (Object.defineProperty(n, "DateTime", {
        enumerable: !0,
        get: function () {
          return c.DateTime;
        },
      }),
        Object.defineProperty(n, "fromRfc3339WithNanoseconds", {
          enumerable: !0,
          get: function () {
            return c.fromRfc3339WithNanoseconds;
          },
        }),
        Object.defineProperty(n, "fromSeconds", {
          enumerable: !0,
          get: function () {
            return c.fromSeconds;
          },
        }),
        Object.defineProperty(n, "toRfc3339WithNanoseconds", {
          enumerable: !0,
          get: function () {
            return c.toRfc3339WithNanoseconds;
          },
        }),
        Object.defineProperty(n, "toSeconds", {
          enumerable: !0,
          get: function () {
            return c.toSeconds;
          },
        }));
      var u = r(3328);
      (Object.defineProperty(n, "HttpClient", {
        enumerable: !0,
        get: function () {
          return u.HttpClient;
        },
      }),
        Object.defineProperty(n, "WebsocketClient", {
          enumerable: !0,
          get: function () {
            return u.WebsocketClient;
          },
        }));
      var d = r(3330);
      (Object.defineProperty(n, "BlockIdFlag", {
        enumerable: !0,
        get: function () {
          return d.BlockIdFlag;
        },
      }),
        (n.tendermint33 = i(r(3583))));
      var l = r(3583);
      (Object.defineProperty(n, "Tendermint33Client", {
        enumerable: !0,
        get: function () {
          return l.Tendermint33Client;
        },
      }),
        Object.defineProperty(n, "broadcastTxCommitSuccess", {
          enumerable: !0,
          get: function () {
            return l.broadcastTxCommitSuccess;
          },
        }),
        Object.defineProperty(n, "broadcastTxSyncSuccess", {
          enumerable: !0,
          get: function () {
            return l.broadcastTxSyncSuccess;
          },
        }),
        Object.defineProperty(n, "VoteType", {
          enumerable: !0,
          get: function () {
            return l.VoteType;
          },
        }),
        Object.defineProperty(n, "Method", {
          enumerable: !0,
          get: function () {
            return l.Method;
          },
        }),
        Object.defineProperty(n, "SubscriptionEventType", {
          enumerable: !0,
          get: function () {
            return l.SubscriptionEventType;
          },
        }),
        (n.tendermint34 = i(r(3585))));
      var h = r(3585);
      Object.defineProperty(n, "Tendermint34Client", {
        enumerable: !0,
        get: function () {
          return h.Tendermint34Client;
        },
      });
    },
    3580: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.QueueingStreamingSocket = n.ConnectionStatus = void 0));
      const s = r(3154),
        o = r(2955),
        i = r(3581);
      var a;
      (function (t) {
        ((t[(t["Unconnected"] = 0)] = "Unconnected"),
          (t[(t["Connecting"] = 1)] = "Connecting"),
          (t[(t["Connected"] = 2)] = "Connected"),
          (t[(t["Disconnected"] = 3)] = "Disconnected"));
      })((a = n.ConnectionStatus || (n.ConnectionStatus = {})));
      class QueueingStreamingSocket {
        constructor(t, n, r) {
          (void 0 === n && (n = 1e4),
            (this.queue = []),
            (this.isProcessingQueue = !1),
            (this.url = t),
            (this.timeout = n),
            (this.reconnectedHandler = r));
          const c = {
            start: (t) => (this.eventProducerListener = t),
            stop: () => (this.eventProducerListener = void 0),
          };
          ((this.events = o.Stream.create(c)),
            (this.connectionStatusProducer = new s.DefaultValueProducer(
              a.Unconnected,
            )),
            (this.connectionStatus = new s.ValueAndUpdates(
              this.connectionStatusProducer,
            )),
            (this.socket = new i.StreamingSocket(this.url, this.timeout)),
            this.socket.events.subscribe({
              next: (t) => {
                if (!this.eventProducerListener)
                  throw new Error("No event producer listener set");
                this.eventProducerListener.next(t);
              },
              error: () => this.connectionStatusProducer.update(a.Disconnected),
            }));
        }
        connect() {
          (this.connectionStatusProducer.update(a.Connecting),
            this.socket.connected.then(
              async () => (
                this.connectionStatusProducer.update(a.Connected),
                this.processQueue()
              ),
              () => this.connectionStatusProducer.update(a.Disconnected),
            ),
            this.socket.connect());
        }
        disconnect() {
          (this.connectionStatusProducer.update(a.Disconnected),
            this.socket.disconnect());
        }
        reconnect() {
          ((this.socket = new i.StreamingSocket(this.url, this.timeout)),
            this.socket.events.subscribe({
              next: (t) => {
                if (!this.eventProducerListener)
                  throw new Error("No event producer listener set");
                this.eventProducerListener.next(t);
              },
              error: () => this.connectionStatusProducer.update(a.Disconnected),
            }),
            this.socket.connected.then(() => {
              this.reconnectedHandler && this.reconnectedHandler();
            }),
            this.connect());
        }
        getQueueLength() {
          return this.queue.length;
        }
        queueRequest(t) {
          (this.queue.push(t), this.processQueue());
        }
        async processQueue() {
          if (
            this.isProcessingQueue ||
            this.connectionStatus.value !== a.Connected
          )
            return;
          let t;
          this.isProcessingQueue = !0;
          while ((t = this.queue.shift()))
            try {
              (await this.socket.send(t), (this.isProcessingQueue = !1));
            } catch (n) {
              return (
                this.queue.unshift(t),
                void (this.isProcessingQueue = !1)
              );
            }
        }
      }
      n.QueueingStreamingSocket = QueueingStreamingSocket;
    },
    3581: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.StreamingSocket = void 0));
      const s = r(2955),
        o = r(3582);
      class StreamingSocket {
        constructor(t, n) {
          (void 0 === n && (n = 1e4),
            (this.socket = new o.SocketWrapper(
              t,
              (t) => {
                this.eventProducerListener &&
                  this.eventProducerListener.next(t);
              },
              (t) => {
                this.eventProducerListener &&
                  this.eventProducerListener.error(t);
              },
              () => {},
              (t) => {
                this.eventProducerListener &&
                  (t.wasClean
                    ? this.eventProducerListener.complete()
                    : this.eventProducerListener.error(
                        "Socket was closed unclean",
                      ));
              },
              n,
            )),
            (this.connected = this.socket.connected));
          const r = {
            start: (t) => (this.eventProducerListener = t),
            stop: () => (this.eventProducerListener = void 0),
          };
          this.events = s.Stream.create(r);
        }
        connect() {
          this.socket.connect();
        }
        disconnect() {
          this.socket.disconnect();
        }
        async send(t) {
          return this.socket.send(t);
        }
      }
      n.StreamingSocket = StreamingSocket;
    },
    3582: function (t, n, r) {
      "use strict";
      (function (t) {
        var s =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.SocketWrapper = void 0));
        const o = s(r(4454));
        function i() {
          return (
            "undefined" !== typeof t &&
            "undefined" !== typeof t.versions &&
            "undefined" !== typeof t.versions.node
          );
        }
        class SocketWrapper {
          constructor(t, n, r, s, o, i) {
            (void 0 === i && (i = 1e4),
              (this.closed = !1),
              (this.connected = new Promise((t, n) => {
                ((this.connectedResolver = t), (this.connectedRejecter = n));
              })),
              (this.url = t),
              (this.messageHandler = n),
              (this.errorHandler = r),
              (this.openHandler = s),
              (this.closeHandler = o),
              (this.timeout = i));
          }
          connect() {
            const t = new o.default(this.url);
            ((t.onerror = (t) => {
              (this.clearTimeout(), this.errorHandler && this.errorHandler(t));
            }),
              (t.onmessage = (t) => {
                this.messageHandler({ type: t.type, data: t.data });
              }),
              (t.onopen = (t) => {
                (this.clearTimeout(),
                  this.connectedResolver(),
                  this.openHandler && this.openHandler());
              }),
              (t.onclose = (t) => {
                ((this.closed = !0), this.closeHandler && this.closeHandler(t));
              }));
            const n = Date.now();
            ((this.timeoutId = setTimeout(() => {
              ((t.onmessage = () => 0),
                (t.onerror = () => 0),
                (t.onopen = () => 0),
                (t.onclose = () => 0),
                t.close(),
                (this.socket = void 0));
              const r = Math.floor(Date.now() - n);
              this.connectedRejecter(
                `Connection attempt timed out after ${r} ms`,
              );
            }, this.timeout)),
              (this.socket = t));
          }
          disconnect() {
            if (!this.socket)
              throw new Error(
                "Socket undefined. This must be called after connecting.",
              );
            switch ((this.clearTimeout(), this.socket.readyState)) {
              case o.default.OPEN:
                this.socket.close(1e3);
                break;
              case o.default.CLOSED:
                break;
              case o.default.CONNECTING:
                ((this.socket.onopen = () => 0),
                  (this.socket.onclose = () => 0),
                  (this.socket.onerror = () => 0),
                  (this.socket.onmessage = () => 0),
                  (this.socket = void 0),
                  this.closeHandler &&
                    this.closeHandler({ wasClean: !1, code: 4001 }));
                break;
              case o.default.CLOSING:
                break;
              default:
                throw new Error(
                  "Unknown readyState: " + this.socket.readyState,
                );
            }
          }
          async send(t) {
            return new Promise((n, r) => {
              if (!this.socket)
                throw new Error(
                  "Socket undefined. This must be called after connecting.",
                );
              if (this.closed)
                throw new Error(
                  "Socket was closed, so no data can be sent anymore.",
                );
              if (this.socket.readyState !== o.default.OPEN)
                throw new Error("Websocket is not open");
              i()
                ? this.socket.send(t, (t) => (t ? r(t) : n()))
                : (this.socket.send(t), n());
            });
          }
          clearTimeout() {
            if (!this.timeoutId)
              throw new Error(
                "Timeout ID not set. This should not happen and usually means connect() was not called.",
              );
            clearTimeout(this.timeoutId);
          }
        }
        n.SocketWrapper = SocketWrapper;
      }).call(this, r(18));
    },
    3583: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.VoteType =
          n.broadcastTxSyncSuccess =
          n.broadcastTxCommitSuccess =
          n.SubscriptionEventType =
          n.Method =
          n.Tendermint33Client =
            void 0));
      var s = r(4456);
      Object.defineProperty(n, "Tendermint33Client", {
        enumerable: !0,
        get: function () {
          return s.Tendermint33Client;
        },
      });
      var o = r(3332);
      (Object.defineProperty(n, "Method", {
        enumerable: !0,
        get: function () {
          return o.Method;
        },
      }),
        Object.defineProperty(n, "SubscriptionEventType", {
          enumerable: !0,
          get: function () {
            return o.SubscriptionEventType;
          },
        }));
      var i = r(4460);
      (Object.defineProperty(n, "broadcastTxCommitSuccess", {
        enumerable: !0,
        get: function () {
          return i.broadcastTxCommitSuccess;
        },
      }),
        Object.defineProperty(n, "broadcastTxSyncSuccess", {
          enumerable: !0,
          get: function () {
            return i.broadcastTxSyncSuccess;
          },
        }),
        Object.defineProperty(n, "VoteType", {
          enumerable: !0,
          get: function () {
            return i.VoteType;
          },
        }));
    },
    3584: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.hashBlock = n.hashTx = void 0));
      const s = r(2800),
        o = r(3331);
      function i(t) {
        return s.sha256(t);
      }
      function a(t) {
        if (t < 1) throw new Error("Cannot split an empty tree");
        const n = 2 ** Math.floor(Math.log2(t));
        return n < t ? n : n / 2;
      }
      function c(t) {
        const n = new s.Sha256(Uint8Array.from([0]));
        return (n.update(t), n.digest());
      }
      function u(t, n) {
        const r = new s.Sha256(Uint8Array.from([1]));
        return (r.update(t), r.update(n), r.digest());
      }
      function d(t) {
        switch (t.length) {
          case 0:
            throw new Error("Cannot hash empty tree");
          case 1:
            return c(t[0]);
          default: {
            const n = a(t.length),
              r = d(t.slice(0, n)),
              s = d(t.slice(n));
            return u(r, s);
          }
        }
      }
      function l(t) {
        const n = [
          o.encodeVersion(t.version),
          o.encodeString(t.chainId),
          o.encodeInt(t.height),
          o.encodeTime(t.time),
          o.encodeBlockId(t.lastBlockId),
          o.encodeBytes(t.lastCommitHash),
          o.encodeBytes(t.dataHash),
          o.encodeBytes(t.validatorsHash),
          o.encodeBytes(t.nextValidatorsHash),
          o.encodeBytes(t.consensusHash),
          o.encodeBytes(t.appHash),
          o.encodeBytes(t.lastResultsHash),
          o.encodeBytes(t.evidenceHash),
          o.encodeBytes(t.proposerAddress),
        ];
        return d(n);
      }
      ((n.hashTx = i), (n.hashBlock = l));
    },
    3585: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.VoteType =
          n.broadcastTxSyncSuccess =
          n.broadcastTxCommitSuccess =
          n.SubscriptionEventType =
          n.Method =
          n.Tendermint34Client =
            void 0));
      var s = r(4461);
      Object.defineProperty(n, "Tendermint34Client", {
        enumerable: !0,
        get: function () {
          return s.Tendermint34Client;
        },
      });
      var o = r(3334);
      (Object.defineProperty(n, "Method", {
        enumerable: !0,
        get: function () {
          return o.Method;
        },
      }),
        Object.defineProperty(n, "SubscriptionEventType", {
          enumerable: !0,
          get: function () {
            return o.SubscriptionEventType;
          },
        }));
      var i = r(4465);
      (Object.defineProperty(n, "broadcastTxCommitSuccess", {
        enumerable: !0,
        get: function () {
          return i.broadcastTxCommitSuccess;
        },
      }),
        Object.defineProperty(n, "broadcastTxSyncSuccess", {
          enumerable: !0,
          get: function () {
            return i.broadcastTxSyncSuccess;
          },
        }),
        Object.defineProperty(n, "VoteType", {
          enumerable: !0,
          get: function () {
            return i.VoteType;
          },
        }));
    },
    3586: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.hashBlock = n.hashTx = void 0));
      const s = r(2800),
        o = r(3333);
      function i(t) {
        return s.sha256(t);
      }
      function a(t) {
        if (t < 1) throw new Error("Cannot split an empty tree");
        const n = 2 ** Math.floor(Math.log2(t));
        return n < t ? n : n / 2;
      }
      function c(t) {
        const n = new s.Sha256(Uint8Array.from([0]));
        return (n.update(t), n.digest());
      }
      function u(t, n) {
        const r = new s.Sha256(Uint8Array.from([1]));
        return (r.update(t), r.update(n), r.digest());
      }
      function d(t) {
        switch (t.length) {
          case 0:
            throw new Error("Cannot hash empty tree");
          case 1:
            return c(t[0]);
          default: {
            const n = a(t.length),
              r = d(t.slice(0, n)),
              s = d(t.slice(n));
            return u(r, s);
          }
        }
      }
      function l(t) {
        if (!t.lastBlockId)
          throw new Error(
            "Hashing a block header with no last block ID (i.e. header at height 1) is not supported. If you need this, contributions are welcome. Please add documentation and test vectors for this case.",
          );
        const n = [
          o.encodeVersion(t.version),
          o.encodeString(t.chainId),
          o.encodeInt(t.height),
          o.encodeTime(t.time),
          o.encodeBlockId(t.lastBlockId),
          o.encodeBytes(t.lastCommitHash),
          o.encodeBytes(t.dataHash),
          o.encodeBytes(t.validatorsHash),
          o.encodeBytes(t.nextValidatorsHash),
          o.encodeBytes(t.consensusHash),
          o.encodeBytes(t.appHash),
          o.encodeBytes(t.lastResultsHash),
          o.encodeBytes(t.evidenceHash),
          o.encodeBytes(t.proposerAddress),
        ];
        return d(n);
      }
      ((n.hashTx = i), (n.hashBlock = l));
    },
    3695: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.ripemd160 = n.RIPEMD160 = n.md5 = n.MD5 = n.sha1 = n.SHA1 = void 0));
      const s = r(825),
        o = r(130),
        i = Uint32Array.from([
          1732584193, 4023233417, 2562383102, 271733878, 3285377520,
        ]),
        a = new Uint32Array(80);
      class SHA1 extends s.HashMD {
        constructor() {
          (super(64, 20, 8, !1),
            (this.A = 0 | i[0]),
            (this.B = 0 | i[1]),
            (this.C = 0 | i[2]),
            (this.D = 0 | i[3]),
            (this.E = 0 | i[4]));
        }
        get() {
          const { A: t, B: n, C: r, D: s, E: o } = this;
          return [t, n, r, s, o];
        }
        set(t, n, r, s, o) {
          ((this.A = 0 | t),
            (this.B = 0 | n),
            (this.C = 0 | r),
            (this.D = 0 | s),
            (this.E = 0 | o));
        }
        process(t, n) {
          for (let s = 0; s < 16; s++, n += 4) a[s] = t.getUint32(n, !1);
          for (let s = 16; s < 80; s++)
            a[s] = (0, o.rotl)(a[s - 3] ^ a[s - 8] ^ a[s - 14] ^ a[s - 16], 1);
          let { A: r, B: i, C: c, D: u, E: d } = this;
          for (let l = 0; l < 80; l++) {
            let t, n;
            l < 20
              ? ((t = (0, s.Chi)(i, c, u)), (n = 1518500249))
              : l < 40
                ? ((t = i ^ c ^ u), (n = 1859775393))
                : l < 60
                  ? ((t = (0, s.Maj)(i, c, u)), (n = 2400959708))
                  : ((t = i ^ c ^ u), (n = 3395469782));
            const h = ((0, o.rotl)(r, 5) + t + d + n + a[l]) | 0;
            ((d = u), (u = c), (c = (0, o.rotl)(i, 30)), (i = r), (r = h));
          }
          ((r = (r + this.A) | 0),
            (i = (i + this.B) | 0),
            (c = (c + this.C) | 0),
            (u = (u + this.D) | 0),
            (d = (d + this.E) | 0),
            this.set(r, i, c, u, d));
        }
        roundClean() {
          (0, o.clean)(a);
        }
        destroy() {
          (this.set(0, 0, 0, 0, 0), (0, o.clean)(this.buffer));
        }
      }
      ((n.SHA1 = SHA1), (n.sha1 = (0, o.createHasher)(() => new SHA1())));
      const c = Math.pow(2, 32),
        u = Array.from({ length: 64 }, (t, n) =>
          Math.floor(c * Math.abs(Math.sin(n + 1))),
        ),
        d = i.slice(0, 4),
        l = new Uint32Array(16);
      class MD5 extends s.HashMD {
        constructor() {
          (super(64, 16, 8, !0),
            (this.A = 0 | d[0]),
            (this.B = 0 | d[1]),
            (this.C = 0 | d[2]),
            (this.D = 0 | d[3]));
        }
        get() {
          const { A: t, B: n, C: r, D: s } = this;
          return [t, n, r, s];
        }
        set(t, n, r, s) {
          ((this.A = 0 | t),
            (this.B = 0 | n),
            (this.C = 0 | r),
            (this.D = 0 | s));
        }
        process(t, n) {
          for (let s = 0; s < 16; s++, n += 4) l[s] = t.getUint32(n, !0);
          let { A: r, B: i, C: a, D: c } = this;
          for (let d = 0; d < 64; d++) {
            let t, n, h;
            (d < 16
              ? ((t = (0, s.Chi)(i, a, c)), (n = d), (h = [7, 12, 17, 22]))
              : d < 32
                ? ((t = (0, s.Chi)(c, i, a)),
                  (n = (5 * d + 1) % 16),
                  (h = [5, 9, 14, 20]))
                : d < 48
                  ? ((t = i ^ a ^ c),
                    (n = (3 * d + 5) % 16),
                    (h = [4, 11, 16, 23]))
                  : ((t = a ^ (i | ~c)),
                    (n = (7 * d) % 16),
                    (h = [6, 10, 15, 21])),
              (t = t + r + u[d] + l[n]),
              (r = c),
              (c = a),
              (a = i),
              (i += (0, o.rotl)(t, h[d % 4])));
          }
          ((r = (r + this.A) | 0),
            (i = (i + this.B) | 0),
            (a = (a + this.C) | 0),
            (c = (c + this.D) | 0),
            this.set(r, i, a, c));
        }
        roundClean() {
          (0, o.clean)(l);
        }
        destroy() {
          (this.set(0, 0, 0, 0), (0, o.clean)(this.buffer));
        }
      }
      ((n.MD5 = MD5), (n.md5 = (0, o.createHasher)(() => new MD5())));
      const h = Uint8Array.from([
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
        ]),
        p = (() => Uint8Array.from(new Array(16).fill(0).map((t, n) => n)))(),
        m = (() => p.map((t) => (9 * t + 5) % 16))(),
        f = (() => {
          const t = [p],
            n = [m],
            r = [t, n];
          for (let s = 0; s < 4; s++)
            for (let t of r) t.push(t[s].map((t) => h[t]));
          return r;
        })(),
        g = (() => f[0])(),
        y = (() => f[1])(),
        b = [
          [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8],
          [12, 13, 11, 15, 6, 9, 9, 7, 12, 15, 11, 13, 7, 8, 7, 7],
          [13, 15, 14, 11, 7, 7, 6, 8, 13, 14, 13, 12, 5, 5, 6, 9],
          [14, 11, 12, 14, 8, 6, 5, 5, 15, 12, 15, 14, 9, 9, 8, 6],
          [15, 12, 13, 13, 9, 5, 8, 6, 14, 11, 12, 11, 8, 6, 5, 5],
        ].map((t) => Uint8Array.from(t)),
        v = g.map((t, n) => t.map((t) => b[n][t])),
        w = y.map((t, n) => t.map((t) => b[n][t])),
        k = Uint32Array.from([
          0, 1518500249, 1859775393, 2400959708, 2840853838,
        ]),
        S = Uint32Array.from([
          1352829926, 1548603684, 1836072691, 2053994217, 0,
        ]);
      function A(t, n, r, s) {
        return 0 === t
          ? n ^ r ^ s
          : 1 === t
            ? (n & r) | (~n & s)
            : 2 === t
              ? (n | ~r) ^ s
              : 3 === t
                ? (n & s) | (r & ~s)
                : n ^ (r | ~s);
      }
      const _ = new Uint32Array(16);
      class RIPEMD160 extends s.HashMD {
        constructor() {
          (super(64, 20, 8, !0),
            (this.h0 = 1732584193),
            (this.h1 = -271733879),
            (this.h2 = -1732584194),
            (this.h3 = 271733878),
            (this.h4 = -1009589776));
        }
        get() {
          const { h0: t, h1: n, h2: r, h3: s, h4: o } = this;
          return [t, n, r, s, o];
        }
        set(t, n, r, s, o) {
          ((this.h0 = 0 | t),
            (this.h1 = 0 | n),
            (this.h2 = 0 | r),
            (this.h3 = 0 | s),
            (this.h4 = 0 | o));
        }
        process(t, n) {
          for (let o = 0; o < 16; o++, n += 4) _[o] = t.getUint32(n, !0);
          let r = 0 | this.h0,
            s = r,
            i = 0 | this.h1,
            a = i,
            c = 0 | this.h2,
            u = c,
            d = 0 | this.h3,
            l = d,
            h = 0 | this.h4,
            p = h;
          for (let m = 0; m < 5; m++) {
            const t = 4 - m,
              n = k[m],
              f = S[m],
              b = g[m],
              M = y[m],
              P = v[m],
              x = w[m];
            for (let s = 0; s < 16; s++) {
              const t =
                ((0, o.rotl)(r + A(m, i, c, d) + _[b[s]] + n, P[s]) + h) | 0;
              ((r = h),
                (h = d),
                (d = 0 | (0, o.rotl)(c, 10)),
                (c = i),
                (i = t));
            }
            for (let r = 0; r < 16; r++) {
              const n =
                ((0, o.rotl)(s + A(t, a, u, l) + _[M[r]] + f, x[r]) + p) | 0;
              ((s = p),
                (p = l),
                (l = 0 | (0, o.rotl)(u, 10)),
                (u = a),
                (a = n));
            }
          }
          this.set(
            (this.h1 + c + l) | 0,
            (this.h2 + d + p) | 0,
            (this.h3 + h + s) | 0,
            (this.h4 + r + a) | 0,
            (this.h0 + i + u) | 0,
          );
        }
        roundClean() {
          (0, o.clean)(_);
        }
        destroy() {
          ((this.destroyed = !0),
            (0, o.clean)(this.buffer),
            this.set(0, 0, 0, 0, 0));
        }
      }
      ((n.RIPEMD160 = RIPEMD160),
        (n.ripemd160 = (0, o.createHasher)(() => new RIPEMD160())));
    },
    3767: function (t, n, r) {
      "use strict";
      function s(t, n) {
        if (t.length !== n.length) return !1;
        for (let r = 0; r < t.length; ++r) if (t[r] !== n[r]) return !1;
        return !0;
      }
      function o(t, n) {
        if (t.length < n.length) return !1;
        for (let r = 0; r < n.length; ++r) if (t[r] !== n[r]) return !1;
        return !0;
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.arrayContentStartsWith = n.arrayContentEquals = void 0),
        (n.arrayContentEquals = s),
        (n.arrayContentStartsWith = o));
    },
    3768: function (t, n, r) {
      "use strict";
      function s(t, n) {
        if (!t) throw new Error(n || "condition is not truthy");
      }
      function o(t, n) {
        if (void 0 === t)
          throw new Error(
            null !== n && void 0 !== n ? n : "value is undefined",
          );
      }
      function i(t, n) {
        if (void 0 === t || null === t)
          throw new Error(
            null !== n && void 0 !== n ? n : "value is undefined or null",
          );
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.assertDefinedAndNotNull = n.assertDefined = n.assert = void 0),
        (n.assert = s),
        (n.assertDefined = o),
        (n.assertDefinedAndNotNull = i));
    },
    3769: function (t, n, r) {
      "use strict";
      async function s(t) {
        return new Promise((n) => setTimeout(n, t));
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.sleep = void 0),
        (n.sleep = s));
    },
    3770: function (t, n, r) {
      "use strict";
      (function (t) {
        function r(t) {
          return "object" === typeof t && null !== t;
        }
        function s(n) {
          return (
            !!r(n) &&
            "[object Uint8Array]" === Object.prototype.toString.call(n) &&
            ("undefined" === typeof t ||
              "undefined" === typeof t.isBuffer ||
              !t.isBuffer(n))
          );
        }
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.isUint8Array = n.isNonNullObject = void 0),
          (n.isNonNullObject = r),
          (n.isUint8Array = s));
      }).call(this, r(2).Buffer);
    },
    3914: function (t, n, r) {
      "use strict";
      var s =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, n, r, s) {
                (void 0 === s && (s = r),
                  Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: function () {
                      return n[r];
                    },
                  }));
              }
            : function (t, n, r, s) {
                (void 0 === s && (s = r), (t[s] = n[r]));
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, n) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: n,
                });
              }
            : function (t, n) {
                t["default"] = n;
              }),
        i =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t)
              for (var r in t)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(t, r) &&
                  s(n, t, r);
            return (o(n, t), n);
          };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isBroadcastTxSuccess =
          n.isBroadcastTxFailure =
          n.assertIsBroadcastTxSuccess =
          n.isSearchByTagsQuery =
          n.isSearchBySentFromOrToQuery =
          n.isSearchByHeightQuery =
          n.setupStakingExtension =
          n.setupIbcExtension =
          n.setupGovExtension =
          n.setupDistributionExtension =
          n.setupBankExtension =
          n.setupAuthExtension =
          n.QueryClient =
          n.createProtobufRpcClient =
          n.createPagination =
          n.makeMultisignedTx =
          n.logs =
          n.GasPrice =
          n.calculateFee =
          n.isMsgWithdrawDelegatorRewardEncodeObject =
          n.isMsgVoteEncodeObject =
          n.isMsgUndelegateEncodeObject =
          n.isMsgTransferEncodeObject =
          n.isMsgSubmitProposalEncodeObject =
          n.isMsgSendEncodeObject =
          n.isMsgDepositEncodeObject =
          n.isMsgDelegateEncodeObject =
          n.AminoTypes =
          n.isAminoMsgWithdrawValidatorCommission =
          n.isAminoMsgWithdrawDelegatorReward =
          n.isAminoMsgVote =
          n.isAminoMsgVerifyInvariant =
          n.isAminoMsgUnjail =
          n.isAminoMsgUndelegate =
          n.isAminoMsgSubmitProposal =
          n.isAminoMsgSubmitEvidence =
          n.isAminoMsgSetWithdrawAddress =
          n.isAminoMsgSend =
          n.isAminoMsgMultiSend =
          n.isAminoMsgFundCommunityPool =
          n.isAminoMsgEditValidator =
          n.isAminoMsgDeposit =
          n.isAminoMsgDelegate =
          n.isAminoMsgCreateValidator =
          n.isAminoMsgBeginRedelegate =
          n.accountFromAny =
          n.parseCoins =
          n.makeCosmoshubPath =
          n.coins =
          n.coin =
            void 0),
        (n.SigningStargateClient =
          n.defaultRegistryTypes =
          n.TimeoutError =
          n.StargateClient =
            void 0));
      var a = r(2968);
      (Object.defineProperty(n, "coin", {
        enumerable: !0,
        get: function () {
          return a.coin;
        },
      }),
        Object.defineProperty(n, "coins", {
          enumerable: !0,
          get: function () {
            return a.coins;
          },
        }),
        Object.defineProperty(n, "makeCosmoshubPath", {
          enumerable: !0,
          get: function () {
            return a.makeCosmoshubPath;
          },
        }),
        Object.defineProperty(n, "parseCoins", {
          enumerable: !0,
          get: function () {
            return a.parseCoins;
          },
        }));
      var c = r(3561);
      Object.defineProperty(n, "accountFromAny", {
        enumerable: !0,
        get: function () {
          return c.accountFromAny;
        },
      });
      var u = r(4404);
      (Object.defineProperty(n, "isAminoMsgBeginRedelegate", {
        enumerable: !0,
        get: function () {
          return u.isAminoMsgBeginRedelegate;
        },
      }),
        Object.defineProperty(n, "isAminoMsgCreateValidator", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgCreateValidator;
          },
        }),
        Object.defineProperty(n, "isAminoMsgDelegate", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgDelegate;
          },
        }),
        Object.defineProperty(n, "isAminoMsgDeposit", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgDeposit;
          },
        }),
        Object.defineProperty(n, "isAminoMsgEditValidator", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgEditValidator;
          },
        }),
        Object.defineProperty(n, "isAminoMsgFundCommunityPool", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgFundCommunityPool;
          },
        }),
        Object.defineProperty(n, "isAminoMsgMultiSend", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgMultiSend;
          },
        }),
        Object.defineProperty(n, "isAminoMsgSend", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgSend;
          },
        }),
        Object.defineProperty(n, "isAminoMsgSetWithdrawAddress", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgSetWithdrawAddress;
          },
        }),
        Object.defineProperty(n, "isAminoMsgSubmitEvidence", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgSubmitEvidence;
          },
        }),
        Object.defineProperty(n, "isAminoMsgSubmitProposal", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgSubmitProposal;
          },
        }),
        Object.defineProperty(n, "isAminoMsgUndelegate", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgUndelegate;
          },
        }),
        Object.defineProperty(n, "isAminoMsgUnjail", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgUnjail;
          },
        }),
        Object.defineProperty(n, "isAminoMsgVerifyInvariant", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgVerifyInvariant;
          },
        }),
        Object.defineProperty(n, "isAminoMsgVote", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgVote;
          },
        }),
        Object.defineProperty(n, "isAminoMsgWithdrawDelegatorReward", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgWithdrawDelegatorReward;
          },
        }),
        Object.defineProperty(n, "isAminoMsgWithdrawValidatorCommission", {
          enumerable: !0,
          get: function () {
            return u.isAminoMsgWithdrawValidatorCommission;
          },
        }));
      var d = r(3562);
      Object.defineProperty(n, "AminoTypes", {
        enumerable: !0,
        get: function () {
          return d.AminoTypes;
        },
      });
      var l = r(4405);
      (Object.defineProperty(n, "isMsgDelegateEncodeObject", {
        enumerable: !0,
        get: function () {
          return l.isMsgDelegateEncodeObject;
        },
      }),
        Object.defineProperty(n, "isMsgDepositEncodeObject", {
          enumerable: !0,
          get: function () {
            return l.isMsgDepositEncodeObject;
          },
        }),
        Object.defineProperty(n, "isMsgSendEncodeObject", {
          enumerable: !0,
          get: function () {
            return l.isMsgSendEncodeObject;
          },
        }),
        Object.defineProperty(n, "isMsgSubmitProposalEncodeObject", {
          enumerable: !0,
          get: function () {
            return l.isMsgSubmitProposalEncodeObject;
          },
        }),
        Object.defineProperty(n, "isMsgTransferEncodeObject", {
          enumerable: !0,
          get: function () {
            return l.isMsgTransferEncodeObject;
          },
        }),
        Object.defineProperty(n, "isMsgUndelegateEncodeObject", {
          enumerable: !0,
          get: function () {
            return l.isMsgUndelegateEncodeObject;
          },
        }),
        Object.defineProperty(n, "isMsgVoteEncodeObject", {
          enumerable: !0,
          get: function () {
            return l.isMsgVoteEncodeObject;
          },
        }),
        Object.defineProperty(n, "isMsgWithdrawDelegatorRewardEncodeObject", {
          enumerable: !0,
          get: function () {
            return l.isMsgWithdrawDelegatorRewardEncodeObject;
          },
        }));
      var h = r(4406);
      (Object.defineProperty(n, "calculateFee", {
        enumerable: !0,
        get: function () {
          return h.calculateFee;
        },
      }),
        Object.defineProperty(n, "GasPrice", {
          enumerable: !0,
          get: function () {
            return h.GasPrice;
          },
        }),
        (n.logs = i(r(4407))));
      var p = r(4408);
      Object.defineProperty(n, "makeMultisignedTx", {
        enumerable: !0,
        get: function () {
          return p.makeMultisignedTx;
        },
      });
      var m = r(3563);
      (Object.defineProperty(n, "createPagination", {
        enumerable: !0,
        get: function () {
          return m.createPagination;
        },
      }),
        Object.defineProperty(n, "createProtobufRpcClient", {
          enumerable: !0,
          get: function () {
            return m.createProtobufRpcClient;
          },
        }),
        Object.defineProperty(n, "QueryClient", {
          enumerable: !0,
          get: function () {
            return m.QueryClient;
          },
        }),
        Object.defineProperty(n, "setupAuthExtension", {
          enumerable: !0,
          get: function () {
            return m.setupAuthExtension;
          },
        }),
        Object.defineProperty(n, "setupBankExtension", {
          enumerable: !0,
          get: function () {
            return m.setupBankExtension;
          },
        }),
        Object.defineProperty(n, "setupDistributionExtension", {
          enumerable: !0,
          get: function () {
            return m.setupDistributionExtension;
          },
        }),
        Object.defineProperty(n, "setupGovExtension", {
          enumerable: !0,
          get: function () {
            return m.setupGovExtension;
          },
        }),
        Object.defineProperty(n, "setupIbcExtension", {
          enumerable: !0,
          get: function () {
            return m.setupIbcExtension;
          },
        }),
        Object.defineProperty(n, "setupStakingExtension", {
          enumerable: !0,
          get: function () {
            return m.setupStakingExtension;
          },
        }));
      var f = r(3575);
      (Object.defineProperty(n, "isSearchByHeightQuery", {
        enumerable: !0,
        get: function () {
          return f.isSearchByHeightQuery;
        },
      }),
        Object.defineProperty(n, "isSearchBySentFromOrToQuery", {
          enumerable: !0,
          get: function () {
            return f.isSearchBySentFromOrToQuery;
          },
        }),
        Object.defineProperty(n, "isSearchByTagsQuery", {
          enumerable: !0,
          get: function () {
            return f.isSearchByTagsQuery;
          },
        }));
      var g = r(3576);
      (Object.defineProperty(n, "assertIsBroadcastTxSuccess", {
        enumerable: !0,
        get: function () {
          return g.assertIsBroadcastTxSuccess;
        },
      }),
        Object.defineProperty(n, "isBroadcastTxFailure", {
          enumerable: !0,
          get: function () {
            return g.isBroadcastTxFailure;
          },
        }),
        Object.defineProperty(n, "isBroadcastTxSuccess", {
          enumerable: !0,
          get: function () {
            return g.isBroadcastTxSuccess;
          },
        }),
        Object.defineProperty(n, "StargateClient", {
          enumerable: !0,
          get: function () {
            return g.StargateClient;
          },
        }),
        Object.defineProperty(n, "TimeoutError", {
          enumerable: !0,
          get: function () {
            return g.TimeoutError;
          },
        }));
      var y = r(4466);
      (Object.defineProperty(n, "defaultRegistryTypes", {
        enumerable: !0,
        get: function () {
          return y.defaultRegistryTypes;
        },
      }),
        Object.defineProperty(n, "SigningStargateClient", {
          enumerable: !0,
          get: function () {
            return y.SigningStargateClient;
          },
        }));
    },
    4404: function (t, n, r) {
      "use strict";
      function s(t) {
        return "cosmos-sdk/MsgSend" === t.type;
      }
      function o(t) {
        return "cosmos-sdk/MsgMultiSend" === t.type;
      }
      function i(t) {
        return "cosmos-sdk/MsgVerifyInvariant" === t.type;
      }
      function a(t) {
        return "cosmos-sdk/MsgModifyWithdrawAddress" === t.type;
      }
      function c(t) {
        return "cosmos-sdk/MsgWithdrawDelegationReward" === t.type;
      }
      function u(t) {
        return "cosmos-sdk/MsgWithdrawValidatorCommission" === t.type;
      }
      function d(t) {
        return "cosmos-sdk/MsgFundCommunityPool" === t.type;
      }
      function l(t) {
        return "cosmos-sdk/MsgSubmitEvidence" === t.type;
      }
      function h(t) {
        return "cosmos-sdk/MsgSubmitProposal" === t.type;
      }
      function p(t) {
        return "cosmos-sdk/MsgVote" === t.type;
      }
      function m(t) {
        return "cosmos-sdk/MsgDeposit" === t.type;
      }
      function f(t) {
        return "cosmos-sdk/MsgUnjail" === t.type;
      }
      function g(t) {
        return "cosmos-sdk/MsgCreateValidator" === t.type;
      }
      function y(t) {
        return "cosmos-sdk/MsgEditValidator" === t.type;
      }
      function b(t) {
        return "cosmos-sdk/MsgDelegate" === t.type;
      }
      function v(t) {
        return "cosmos-sdk/MsgBeginRedelegate" === t.type;
      }
      function w(t) {
        return "cosmos-sdk/MsgUndelegate" === t.type;
      }
      function k(t) {
        return "cosmos-sdk/MsgTransfer" === t.type;
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isAminoMsgTransfer =
          n.isAminoMsgUndelegate =
          n.isAminoMsgBeginRedelegate =
          n.isAminoMsgDelegate =
          n.isAminoMsgEditValidator =
          n.isAminoMsgCreateValidator =
          n.isAminoMsgUnjail =
          n.isAminoMsgDeposit =
          n.isAminoMsgVote =
          n.isAminoMsgSubmitProposal =
          n.isAminoMsgSubmitEvidence =
          n.isAminoMsgFundCommunityPool =
          n.isAminoMsgWithdrawValidatorCommission =
          n.isAminoMsgWithdrawDelegatorReward =
          n.isAminoMsgSetWithdrawAddress =
          n.isAminoMsgVerifyInvariant =
          n.isAminoMsgMultiSend =
          n.isAminoMsgSend =
            void 0),
        (n.isAminoMsgSend = s),
        (n.isAminoMsgMultiSend = o),
        (n.isAminoMsgVerifyInvariant = i),
        (n.isAminoMsgSetWithdrawAddress = a),
        (n.isAminoMsgWithdrawDelegatorReward = c),
        (n.isAminoMsgWithdrawValidatorCommission = u),
        (n.isAminoMsgFundCommunityPool = d),
        (n.isAminoMsgSubmitEvidence = l),
        (n.isAminoMsgSubmitProposal = h),
        (n.isAminoMsgVote = p),
        (n.isAminoMsgDeposit = m),
        (n.isAminoMsgUnjail = f),
        (n.isAminoMsgCreateValidator = g),
        (n.isAminoMsgEditValidator = y),
        (n.isAminoMsgDelegate = b),
        (n.isAminoMsgBeginRedelegate = v),
        (n.isAminoMsgUndelegate = w),
        (n.isAminoMsgTransfer = k));
    },
    4405: function (t, n, r) {
      "use strict";
      function s(t) {
        return "/cosmos.bank.v1beta1.MsgSend" === t.typeUrl;
      }
      function o(t) {
        return "/cosmos.staking.v1beta1.MsgDelegate" === t.typeUrl;
      }
      function i(t) {
        return "/cosmos.staking.v1beta1.MsgUndelegate" === t.typeUrl;
      }
      function a(t) {
        return (
          "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward" ===
          t.typeUrl
        );
      }
      function c(t) {
        return "/ibc.applications.transfer.v1.MsgTransfer" === t.typeUrl;
      }
      function u(t) {
        return "/cosmos.gov.v1beta1.MsgDeposit" === t.typeUrl;
      }
      function d(t) {
        return "/cosmos.gov.v1beta1.MsgSubmitProposal" === t.typeUrl;
      }
      function l(t) {
        return "/cosmos.gov.v1beta1.MsgVote" === t.typeUrl;
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.isMsgVoteEncodeObject =
          n.isMsgSubmitProposalEncodeObject =
          n.isMsgDepositEncodeObject =
          n.isMsgTransferEncodeObject =
          n.isMsgWithdrawDelegatorRewardEncodeObject =
          n.isMsgUndelegateEncodeObject =
          n.isMsgDelegateEncodeObject =
          n.isMsgSendEncodeObject =
            void 0),
        (n.isMsgSendEncodeObject = s),
        (n.isMsgDelegateEncodeObject = o),
        (n.isMsgUndelegateEncodeObject = i),
        (n.isMsgWithdrawDelegatorRewardEncodeObject = a),
        (n.isMsgTransferEncodeObject = c),
        (n.isMsgDepositEncodeObject = u),
        (n.isMsgSubmitProposalEncodeObject = d),
        (n.isMsgVoteEncodeObject = l));
    },
    4406: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.calculateFee = n.GasPrice = void 0));
      const s = r(2796),
        o = r(2968);
      function i(t) {
        if (t.length < 3 || t.length > 128)
          throw new Error("Denom must be between 3 and 128 characters");
      }
      class GasPrice {
        constructor(t, n) {
          ((this.amount = t), (this.denom = n));
        }
        static fromString(t) {
          const n = t.match(/^([0-9.]+)([a-z][a-z0-9]*)$/i);
          if (!n) throw new Error("Invalid gas price string");
          const [r, o, a] = n;
          i(a);
          const c = 18,
            u = s.Decimal.fromUserInput(o, c);
          return new GasPrice(u, a);
        }
      }
      function a(t, n) {
        const r = "string" === typeof n ? GasPrice.fromString(n) : n,
          { denom: i, amount: a } = r,
          c = Math.ceil(a.multiply(new s.Uint53(t)).toFloatApproximation());
        return { amount: o.coins(c, i), gas: t.toString() };
      }
      ((n.GasPrice = GasPrice), (n.calculateFee = a));
    },
    4407: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.findAttribute =
          n.parseRawLog =
          n.parseLogs =
          n.parseLog =
          n.parseEvent =
          n.parseAttribute =
            void 0));
      const s = r(2815);
      function o(t) {
        if (!s.isNonNullObject(t))
          throw new Error("Attribute must be a non-null object");
        const { key: n, value: r } = t;
        if ("string" !== typeof n || !n)
          throw new Error("Attribute's key must be a non-empty string");
        if ("string" !== typeof r && "undefined" !== typeof r)
          throw new Error("Attribute's value must be a string or unset");
        return { key: n, value: r || "" };
      }
      function i(t) {
        if (!s.isNonNullObject(t))
          throw new Error("Event must be a non-null object");
        const { type: n, attributes: r } = t;
        if ("string" !== typeof n || "" === n)
          throw new Error("Event type must be a non-empty string");
        if (!Array.isArray(r))
          throw new Error("Event's attributes must be an array");
        return { type: n, attributes: r.map(o) };
      }
      function a(t) {
        if (!s.isNonNullObject(t))
          throw new Error("Log must be a non-null object");
        const { msg_index: n, log: r, events: o } = t;
        if ("number" !== typeof n)
          throw new Error("Log's msg_index must be a number");
        if ("string" !== typeof r)
          throw new Error("Log's log must be a string");
        if (!Array.isArray(o)) throw new Error("Log's events must be an array");
        return { msg_index: n, log: r, events: o.map(i) };
      }
      function c(t) {
        if (!Array.isArray(t)) throw new Error("Logs must be an array");
        return t.map(a);
      }
      function u(t) {
        void 0 === t && (t = "[]");
        const n = JSON.parse(t).map((t, n) => {
          let { events: r } = t;
          return { msg_index: n, events: r, log: "" };
        });
        return c(n);
      }
      function d(t, n, r) {
        var s;
        const o = t.find(() => !0),
          i =
            null ===
              (s =
                null === o || void 0 === o
                  ? void 0
                  : o.events.find((t) => t.type === n)) || void 0 === s
              ? void 0
              : s.attributes.find((t) => t.key === r);
        if (!i)
          throw new Error(
            `Could not find attribute '${r}' in first event of type '${n}' in first log.`,
          );
        return i;
      }
      ((n.parseAttribute = o),
        (n.parseEvent = i),
        (n.parseLog = a),
        (n.parseLogs = c),
        (n.parseRawLog = u),
        (n.findAttribute = d));
    },
    4408: function (t, n, r) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.makeMultisignedTx = n.makeCompactBitArray = void 0));
      const o = r(2910),
        i = r(2762),
        a = r(2968),
        c = r(3152),
        u = r(3063),
        d = r(2937),
        l = r(2937),
        h = s(r(2754));
      function p(t) {
        const n = Math.ceil(t.length / 8),
          r = t.length - 8 * Math.floor(t.length / 8),
          s = new Uint8Array(n);
        return (
          t.forEach((t, n) => {
            const r = Math.floor(n / 8),
              o = n % 8;
            t && (s[r] |= 1 << (7 - o));
          }),
          c.CompactBitArray.fromPartial({ elems: s, extraBitsStored: r })
        );
      }
      function m(t, n, r, s, m) {
        const f = Array.from(m.keys()),
          g = i.Bech32.decode(f[0]).prefix,
          y = Array(t.value.pubkeys.length).fill(!1),
          b = new Array();
        for (let i = 0; i < t.value.pubkeys.length; i++) {
          const n = o.pubkeyToAddress(t.value.pubkeys[i], g),
            r = m.get(n);
          r && ((y[i] = !0), b.push(r));
        }
        const v = {
            publicKey: a.encodePubkey(t),
            modeInfo: {
              multi: {
                bitarray: p(y),
                modeInfos: b.map((t) => ({
                  single: { mode: u.SignMode.SIGN_MODE_LEGACY_AMINO_JSON },
                })),
              },
            },
            sequence: h.default.fromNumber(n),
          },
          w = d.AuthInfo.fromPartial({
            signerInfos: [v],
            fee: {
              amount: [...r.amount],
              gasLimit: h.default.fromString(r.gas),
            },
          }),
          k = d.AuthInfo.encode(w).finish(),
          S = l.TxRaw.fromPartial({
            bodyBytes: s,
            authInfoBytes: k,
            signatures: [
              c.MultiSignature.encode(
                c.MultiSignature.fromPartial({ signatures: b }),
              ).finish(),
            ],
          });
        return S;
      }
      ((n.makeCompactBitArray = p), (n.makeMultisignedTx = m));
    },
    4409: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.QueryClient = void 0));
      const s = r(4410),
        o = r(2762),
        i = r(3154),
        a = r(2815);
      function c(t, n, r) {
        if (t.type !== n)
          throw new Error(`Op expected to be ${n}, got "${t.type}`);
        if (!a.arrayContentEquals(r, t.key))
          throw new Error(
            `Proven key different than queried key.\nQuery: ${o.toHex(r)}\nProven: ${o.toHex(t.key)}`,
          );
        return s.ics23.CommitmentProof.decode(t.data);
      }
      class QueryClient {
        constructor(t) {
          this.tmClient = t;
        }
        static withExtensions(t) {
          const n = new QueryClient(t);
          for (
            var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            s[o - 1] = arguments[o];
          const i = s.map((t) => t(n));
          for (const c of i) {
            a.assert(
              a.isNonNullObject(c),
              "Extension must be a non-null object",
            );
            for (const [t, r] of Object.entries(c)) {
              a.assert(
                a.isNonNullObject(r),
                `Module must be a non-null object. Found type ${typeof r} for module "${t}".`,
              );
              const s = n[t] || {};
              n[t] = Object.assign(Object.assign({}, s), r);
            }
          }
          return n;
        }
        async queryVerified(t, n, r) {
          const {
              height: i,
              proof: u,
              value: d,
            } = await this.queryRawProof(t, n, r),
            l = c(u.ops[0], "ics23:iavl", n),
            h = c(u.ops[1], "ics23:simple", o.toAscii(t));
          (a.assert(h.exist),
            a.assert(h.exist.value),
            d && 0 !== d.length
              ? (a.assert(l.exist),
                a.assert(l.exist.value),
                s.verifyExistence(l.exist, s.iavlSpec, h.exist.value, n, d))
              : (a.assert(l.nonexist),
                s.verifyNonExistence(
                  l.nonexist,
                  s.iavlSpec,
                  h.exist.value,
                  n,
                )));
          const p = await this.getNextHeader(i);
          return (
            s.verifyExistence(
              h.exist,
              s.tendermintSpec,
              p.appHash,
              o.toAscii(t),
              h.exist.value,
            ),
            d
          );
        }
        async queryRawProof(t, n, r) {
          var s;
          const {
            key: i,
            value: u,
            height: d,
            proof: l,
            code: h,
            log: p,
          } = await this.tmClient.abciQuery({
            path: `/store/${t}/key`,
            data: n,
            prove: !0,
            height: r,
          });
          if (h) throw new Error(`Query failed with (${h}): ${p}`);
          if (!a.arrayContentEquals(n, i))
            throw new Error(
              `Response key ${o.toHex(i)} doesn't match query key ${o.toHex(n)}`,
            );
          if (!d) throw new Error("No query height returned");
          if (!l || 2 !== l.ops.length)
            throw new Error(
              `Expected 2 proof ops, got ${null !== (s = null === l || void 0 === l ? void 0 : l.ops.length) && void 0 !== s ? s : 0}. Are you using stargate?`,
            );
          return (
            c(l.ops[0], "ics23:iavl", i),
            c(l.ops[1], "ics23:simple", o.toAscii(t)),
            { key: i, value: u, height: d, proof: { ops: [...l.ops] } }
          );
        }
        async queryUnverified(t, n) {
          const r = await this.tmClient.abciQuery({
            path: t,
            data: n,
            prove: !1,
          });
          if (r.code)
            throw new Error(`Query failed with (${r.code}): ${r.log}`);
          return r.value;
        }
        async getNextHeader(t) {
          if ((a.assertDefined(t), 0 === t))
            throw new Error("Query returned height 0, cannot prove it");
          const n = t + 1;
          let r, s;
          try {
            s = this.tmClient.subscribeNewBlockHeader();
          } catch (o) {}
          if (s) {
            const t = await i.firstEvent(s);
            t.height === n && (r = t);
          }
          while (!r) {
            const s = (await this.tmClient.blockchain(t, n)).blockMetas
              .map((t) => t.header)
              .find((t) => t.height === n);
            s ? (r = s) : await a.sleep(1e3);
          }
          return (
            a.assert(
              r.height === n,
              "Got wrong header. This is a bug in the logic above.",
            ),
            r
          );
        }
      }
      n.QueryClient = QueryClient;
    },
    4414: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.ripemd160 = n.RIPEMD160 = void 0));
      const s = r(3695);
      ((n.RIPEMD160 = s.RIPEMD160), (n.ripemd160 = s.ripemd160));
    },
    4415: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.DefaultValueProducer = void 0));
      class DefaultValueProducer {
        constructor(t, n) {
          ((this.callbacks = n), (this.internalValue = t));
        }
        get value() {
          return this.internalValue;
        }
        update(t) {
          ((this.internalValue = t), this.listener && this.listener.next(t));
        }
        error(t) {
          this.listener && this.listener.error(t);
        }
        start(t) {
          ((this.listener = t),
            t.next(this.internalValue),
            this.callbacks && this.callbacks.onStarted());
        }
        stop() {
          (this.callbacks && this.callbacks.onStop(), (this.listener = void 0));
        }
      }
      n.DefaultValueProducer = DefaultValueProducer;
    },
    4416: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.concat = void 0));
      const s = r(2955);
      function o() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        const o = new Array(),
          i = new Array(),
          a = new Set();
        let c = 0;
        function u() {
          while (o.length > 0) {
            const t = o.shift();
            t.unsubscribe();
          }
          ((i.length = 0), a.clear(), (c = 0));
        }
        const d = {
          start: (t) => {
            function r(n) {
              while (1) {
                const r = i[n].shift();
                if (void 0 === r) return;
                t.next(r);
              }
            }
            function s() {
              return c >= n.length;
            }
            (n.forEach((t) => i.push([])),
              s()
                ? t.complete()
                : n.forEach((n, d) => {
                    o.push(
                      n.subscribe({
                        next: (n) => {
                          d === c ? t.next(n) : i[d].push(n);
                        },
                        complete: () => {
                          a.add(d);
                          while (a.has(c)) (r(c), c++);
                          s() ? t.complete() : r(c);
                        },
                        error: (n) => {
                          (t.error(n), u());
                        },
                      }),
                    );
                  }));
          },
          stop: () => {
            u();
          },
        };
        return s.Stream.create(d);
      }
      n.concat = o;
    },
    4421: function (t, n, r) {
      "use strict";
      function s(t) {
        const n = (n) => {
          const r = new Set(),
            s = n.filter((n) => !r.has(t(n))).debug((n) => r.add(t(n)));
          return s;
        };
        return n;
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.dropDuplicates = void 0),
        (n.dropDuplicates = s));
    },
    4422: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.firstEvent = n.toListPromise = n.fromListPromise = void 0));
      const s = r(2955);
      function o(t) {
        const n = {
          start: (n) => {
            t.then((t) => {
              for (const r of t) n.next(r);
              n.complete();
            }).catch((t) => n.error(t));
          },
          stop: () => {},
        };
        return s.Stream.create(n);
      }
      async function i(t, n) {
        return new Promise((r, s) => {
          if (0 === n) return void r([]);
          const o = new Array();
          t.take(n).subscribe({
            next: (t) => {
              (o.push(t), o.length === n && r(o));
            },
            complete: () => {
              s(
                `Stream completed before all events could be collected. Collected ${o.length}, expected ${n}`,
              );
            },
            error: (t) => s(t),
          });
        });
      }
      async function a(t) {
        return (await i(t, 1))[0];
      }
      ((n.fromListPromise = o), (n.toListPromise = i), (n.firstEvent = a));
    },
    4423: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.lastValue = n.asArray = n.countStream = n.Reducer = void 0));
      class Reducer {
        constructor(t, n, r) {
          ((this.stream = t),
            (this.reducer = n),
            (this.state = r),
            (this.completed = new Promise((t, n) => {
              const r = this.stream.subscribe({
                next: (t) => {
                  this.state = this.reducer(this.state, t);
                },
                complete: () => {
                  (t(), r.unsubscribe());
                },
                error: (t) => {
                  (n(t), r.unsubscribe());
                },
              });
            })));
        }
        value() {
          return this.state;
        }
        async finished() {
          return this.completed;
        }
      }
      function s(t, n) {
        return t + 1;
      }
      function o(t) {
        return new Reducer(t, s, 0);
      }
      function i(t, n) {
        return [...t, n];
      }
      function a(t) {
        return new Reducer(t, i, []);
      }
      function c(t, n) {
        return n;
      }
      function u(t) {
        return new Reducer(t, c, void 0);
      }
      ((n.Reducer = Reducer),
        (n.countStream = o),
        (n.asArray = a),
        (n.lastValue = u));
    },
    4424: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.ValueAndUpdates = void 0));
      const s = r(2955);
      class ValueAndUpdates {
        constructor(t) {
          ((this.producer = t),
            (this.updates = s.MemoryStream.createWithMemory(this.producer)));
        }
        get value() {
          return this.producer.value;
        }
        async waitFor(t) {
          const n = "function" === typeof t ? t : (n) => n === t;
          return new Promise((t, r) => {
            const s = this.updates.subscribe({
              next: (r) => {
                n(r) && (t(r), setTimeout(() => s.unsubscribe(), 0));
              },
              complete: () => {
                (s.unsubscribe(),
                  r("Update stream completed without expected value"));
              },
              error: (t) => {
                r(t);
              },
            });
          });
        }
      }
      n.ValueAndUpdates = ValueAndUpdates;
    },
    4425: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.setupAuthExtension = void 0));
      const s = r(4426),
        o = r(2781),
        i = r(2956);
      function a(t) {
        const n = i.createProtobufRpcClient(t),
          r = new s.QueryClientImpl(n);
        return {
          auth: {
            account: async (t) => {
              const { account: n } = await r.Account({ address: t });
              return null !== n && void 0 !== n ? n : null;
            },
            verified: {
              account: async (n) => {
                const r = Uint8Array.from([1, ...i.toAccAddress(n)]),
                  s = await t.queryVerified("acc", r);
                return 0 === s.length ? null : o.Any.decode(s);
              },
            },
          },
        };
      }
      n.setupAuthExtension = a;
    },
    4427: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.setupBankExtension = void 0));
      const s = r(2762),
        o = r(2815),
        i = r(4428),
        a = r(2801),
        c = r(2956);
      function u(t) {
        const n = c.createProtobufRpcClient(t),
          r = new i.QueryClientImpl(n);
        return {
          bank: {
            balance: async (t, n) => {
              const { balance: s } = await r.Balance({ address: t, denom: n });
              return (o.assert(s), s);
            },
            allBalances: async (t) => {
              const { balances: n } = await r.AllBalances({ address: t });
              return n;
            },
            totalSupply: async () => {
              const { supply: t } = await r.TotalSupply({});
              return t;
            },
            supplyOf: async (t) => {
              const { amount: n } = await r.SupplyOf({ denom: t });
              return (o.assert(n), n);
            },
            verified: {
              balance: async (n, r) => {
                const o = Uint8Array.from([
                    ...s.toAscii("balances"),
                    ...c.toAccAddress(n),
                    ...s.toAscii(r),
                  ]),
                  i = await t.queryVerified("bank", o);
                return i.length ? a.Coin.decode(i) : null;
              },
            },
          },
        };
      }
      n.setupBankExtension = u;
    },
    4429: function (t, n, r) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.setupDistributionExtension = void 0));
      const o = r(4430),
        i = s(r(2754)),
        a = r(2956);
      function c(t) {
        const n = a.createProtobufRpcClient(t),
          r = new o.QueryClientImpl(n);
        return {
          distribution: {
            communityPool: async () => {
              const t = await r.CommunityPool({});
              return t;
            },
            delegationRewards: async (t, n) => {
              const s = await r.DelegationRewards({
                delegatorAddress: t,
                validatorAddress: n,
              });
              return s;
            },
            delegationTotalRewards: async (t) => {
              const n = await r.DelegationTotalRewards({ delegatorAddress: t });
              return n;
            },
            delegatorValidators: async (t) => {
              const n = await r.DelegatorValidators({ delegatorAddress: t });
              return n;
            },
            delegatorWithdrawAddress: async (t) => {
              const n = await r.DelegatorWithdrawAddress({
                delegatorAddress: t,
              });
              return n;
            },
            params: async () => {
              const t = await r.Params({});
              return t;
            },
            validatorCommission: async (t) => {
              const n = await r.ValidatorCommission({ validatorAddress: t });
              return n;
            },
            validatorOutstandingRewards: async (t) => {
              const n = await r.ValidatorOutstandingRewards({
                validatorAddress: t,
              });
              return n;
            },
            validatorSlashes: async (t, n, s, o) => {
              const c = await r.ValidatorSlashes({
                validatorAddress: t,
                startingHeight: i.default.fromNumber(n, !0),
                endingHeight: i.default.fromNumber(s, !0),
                pagination: a.createPagination(o),
              });
              return c;
            },
          },
        };
      }
      n.setupDistributionExtension = c;
    },
    4432: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.setupGovExtension = void 0));
      const s = r(4433),
        o = r(2956);
      function i(t) {
        const n = o.createProtobufRpcClient(t),
          r = new s.QueryClientImpl(n);
        return {
          gov: {
            params: async (t) => {
              const n = await r.Params({ paramsType: t });
              return n;
            },
            proposals: async (t, n, s, i) => {
              const a = await r.Proposals({
                proposalStatus: t,
                depositor: n,
                voter: s,
                pagination: o.createPagination(i),
              });
              return a;
            },
            proposal: async (t) => {
              const n = await r.Proposal({ proposalId: o.longify(t) });
              return n;
            },
            deposits: async (t, n) => {
              const s = await r.Deposits({
                proposalId: o.longify(t),
                pagination: o.createPagination(n),
              });
              return s;
            },
            deposit: async (t, n) => {
              const s = await r.Deposit({
                proposalId: o.longify(t),
                depositor: n,
              });
              return s;
            },
            tally: async (t) => {
              const n = await r.TallyResult({ proposalId: o.longify(t) });
              return n;
            },
            votes: async (t, n) => {
              const s = await r.Votes({
                proposalId: o.longify(t),
                pagination: o.createPagination(n),
              });
              return s;
            },
            vote: async (t, n) => {
              const s = await r.Vote({ proposalId: o.longify(t), voter: n });
              return s;
            },
          },
        };
      }
      n.setupGovExtension = i;
    },
    4434: function (t, n, r) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.setupIbcExtension = void 0));
      const o = r(2762),
        i = r(2796),
        a = r(4435),
        c = r(3326),
        u = r(4437),
        d = r(4438),
        l = r(4439),
        h = r(4440),
        p = s(r(2754)),
        m = r(2956);
      function f(t) {
        if (
          "/ibc.lightclients.tendermint.v1.ClientState" !==
          (null === t || void 0 === t ? void 0 : t.typeUrl)
        )
          throw new Error(
            "Unexpected client state type: " +
              (null === t || void 0 === t ? void 0 : t.typeUrl),
          );
        return h.ClientState.decode(t.value);
      }
      function g(t) {
        if (
          "/ibc.lightclients.tendermint.v1.ConsensusState" !==
          (null === t || void 0 === t ? void 0 : t.typeUrl)
        )
          throw new Error(
            "Unexpected client state type: " +
              (null === t || void 0 === t ? void 0 : t.typeUrl),
          );
        return h.ConsensusState.decode(t.value);
      }
      function y(t) {
        const n = m.createProtobufRpcClient(t),
          r = new u.QueryClientImpl(n),
          s = new d.QueryClientImpl(n),
          h = new l.QueryClientImpl(n),
          y = new a.QueryClientImpl(n);
        return {
          ibc: {
            channel: {
              channel: async (t, n) => r.Channel({ portId: t, channelId: n }),
              channels: async (t) =>
                r.Channels({ pagination: m.createPagination(t) }),
              allChannels: async () => {
                var t;
                const n = [];
                let s, o;
                do {
                  ((s = await r.Channels({
                    pagination: m.createPagination(o),
                  })),
                    n.push(...s.channels),
                    (o =
                      null === (t = s.pagination) || void 0 === t
                        ? void 0
                        : t.nextKey));
                } while (o && o.length);
                return { channels: n, height: s.height };
              },
              connectionChannels: async (t, n) =>
                r.ConnectionChannels({
                  connection: t,
                  pagination: m.createPagination(n),
                }),
              allConnectionChannels: async (t) => {
                var n;
                const s = [];
                let o, i;
                do {
                  ((o = await r.ConnectionChannels({
                    connection: t,
                    pagination: m.createPagination(i),
                  })),
                    s.push(...o.channels),
                    (i =
                      null === (n = o.pagination) || void 0 === n
                        ? void 0
                        : n.nextKey));
                } while (i && i.length);
                return { channels: s, height: o.height };
              },
              clientState: async (t, n) =>
                r.ChannelClientState({ portId: t, channelId: n }),
              consensusState: async (t, n, s, o) =>
                r.ChannelConsensusState({
                  portId: t,
                  channelId: n,
                  revisionNumber: p.default.fromNumber(s, !0),
                  revisionHeight: p.default.fromNumber(o, !0),
                }),
              packetCommitment: async (t, n, s) =>
                r.PacketCommitment({ portId: t, channelId: n, sequence: s }),
              packetCommitments: async (t, n, s) =>
                r.PacketCommitments({
                  channelId: n,
                  portId: t,
                  pagination: m.createPagination(s),
                }),
              allPacketCommitments: async (t, n) => {
                var s;
                const o = [];
                let i, a;
                do {
                  ((i = await r.PacketCommitments({
                    channelId: n,
                    portId: t,
                    pagination: m.createPagination(a),
                  })),
                    o.push(...i.commitments),
                    (a =
                      null === (s = i.pagination) || void 0 === s
                        ? void 0
                        : s.nextKey));
                } while (a && a.length);
                return { commitments: o, height: i.height };
              },
              packetReceipt: async (t, n, s) =>
                r.PacketReceipt({
                  portId: t,
                  channelId: n,
                  sequence: p.default.fromNumber(s, !0),
                }),
              packetAcknowledgement: async (t, n, s) =>
                r.PacketAcknowledgement({
                  portId: t,
                  channelId: n,
                  sequence: p.default.fromNumber(s, !0),
                }),
              packetAcknowledgements: async (t, n, s) =>
                r.PacketAcknowledgements({
                  portId: t,
                  channelId: n,
                  pagination: m.createPagination(s),
                }),
              allPacketAcknowledgements: async (t, n) => {
                var s;
                const o = [];
                let i, a;
                do {
                  ((i = await r.PacketAcknowledgements({
                    channelId: n,
                    portId: t,
                    pagination: m.createPagination(a),
                  })),
                    o.push(...i.acknowledgements),
                    (a =
                      null === (s = i.pagination) || void 0 === s
                        ? void 0
                        : s.nextKey));
                } while (a && a.length);
                return { acknowledgements: o, height: i.height };
              },
              unreceivedPackets: async (t, n, s) =>
                r.UnreceivedPackets({
                  portId: t,
                  channelId: n,
                  packetCommitmentSequences: s.map((t) =>
                    p.default.fromNumber(t, !0),
                  ),
                }),
              unreceivedAcks: async (t, n, s) =>
                r.UnreceivedAcks({
                  portId: t,
                  channelId: n,
                  packetAckSequences: s.map((t) => p.default.fromNumber(t, !0)),
                }),
              nextSequenceReceive: async (t, n) =>
                r.NextSequenceReceive({ portId: t, channelId: n }),
            },
            client: {
              state: async (t) => s.ClientState({ clientId: t }),
              states: async (t) =>
                s.ClientStates({ pagination: m.createPagination(t) }),
              allStates: async () => {
                var t;
                const n = [];
                let r, o;
                do {
                  ((r = await s.ClientStates({
                    pagination: m.createPagination(o),
                  })),
                    n.push(...r.clientStates),
                    (o =
                      null === (t = r.pagination) || void 0 === t
                        ? void 0
                        : t.nextKey));
                } while (o && o.length);
                return { clientStates: n };
              },
              consensusState: async (t, n) =>
                s.ConsensusState(
                  d.QueryConsensusStateRequest.fromPartial({
                    clientId: t,
                    revisionHeight:
                      void 0 !== n ? p.default.fromNumber(n, !0) : void 0,
                    latestHeight: void 0 === n,
                  }),
                ),
              consensusStates: async (t, n) =>
                s.ConsensusStates({
                  clientId: t,
                  pagination: m.createPagination(n),
                }),
              allConsensusStates: async (t) => {
                var n;
                const r = [];
                let o, i;
                do {
                  ((o = await s.ConsensusStates({
                    clientId: t,
                    pagination: m.createPagination(i),
                  })),
                    r.push(...o.consensusStates),
                    (i =
                      null === (n = o.pagination) || void 0 === n
                        ? void 0
                        : n.nextKey));
                } while (i && i.length);
                return { consensusStates: r };
              },
              params: async () => s.ClientParams({}),
              stateTm: async (t) => {
                const n = await s.ClientState({ clientId: t });
                return f(n.clientState);
              },
              statesTm: async (t) => {
                const { clientStates: n } = await s.ClientStates({
                  pagination: m.createPagination(t),
                });
                return n.map((t) => {
                  let { clientState: n } = t;
                  return f(n);
                });
              },
              allStatesTm: async () => {
                var t;
                const n = [];
                let r, o;
                do {
                  ((r = await s.ClientStates({
                    pagination: m.createPagination(o),
                  })),
                    n.push(...r.clientStates),
                    (o =
                      null === (t = r.pagination) || void 0 === t
                        ? void 0
                        : t.nextKey));
                } while (o && o.length);
                return n.map((t) => {
                  let { clientState: n } = t;
                  return f(n);
                });
              },
              consensusStateTm: async (t, n) => {
                const r = await s.ConsensusState(
                  d.QueryConsensusStateRequest.fromPartial({
                    clientId: t,
                    revisionHeight:
                      null === n || void 0 === n ? void 0 : n.revisionHeight,
                    revisionNumber:
                      null === n || void 0 === n ? void 0 : n.revisionNumber,
                    latestHeight: void 0 === n,
                  }),
                );
                return g(r.consensusState);
              },
            },
            connection: {
              connection: async (t) => h.Connection({ connectionId: t }),
              connections: async (t) =>
                h.Connections({ pagination: m.createPagination(t) }),
              allConnections: async () => {
                var t;
                const n = [];
                let r, s;
                do {
                  ((r = await h.Connections({
                    pagination: m.createPagination(s),
                  })),
                    n.push(...r.connections),
                    (s =
                      null === (t = r.pagination) || void 0 === t
                        ? void 0
                        : t.nextKey));
                } while (s && s.length);
                return { connections: n, height: r.height };
              },
              clientConnections: async (t) =>
                h.ClientConnections({ clientId: t }),
              clientState: async (t) =>
                h.ConnectionClientState({ connectionId: t }),
              consensusState: async (t, n) =>
                h.ConnectionConsensusState(
                  l.QueryConnectionConsensusStateRequest.fromPartial({
                    connectionId: t,
                    revisionHeight: p.default.fromNumber(n, !0),
                  }),
                ),
            },
            transfer: {
              denomTrace: async (t) => y.DenomTrace({ hash: t }),
              denomTraces: async (t) =>
                y.DenomTraces({ pagination: m.createPagination(t) }),
              allDenomTraces: async () => {
                var t;
                const n = [];
                let r, s;
                do {
                  ((r = await y.DenomTraces({
                    pagination: m.createPagination(s),
                  })),
                    n.push(...r.denomTraces),
                    (s =
                      null === (t = r.pagination) || void 0 === t
                        ? void 0
                        : t.nextKey));
                } while (s && s.length);
                return { denomTraces: n };
              },
              params: async () => y.Params({}),
            },
            verified: {
              channel: {
                channel: async (n, r) => {
                  const s = o.toAscii(`channelEnds/ports/${n}/channels/${r}`),
                    i = await t.queryVerified("ibc", s);
                  return i.length ? c.Channel.decode(i) : null;
                },
                packetCommitment: async (n, r, s) => {
                  const i = o.toAscii(
                      `commitments/ports/${n}/channels/${r}/packets/${s}`,
                    ),
                    a = await t.queryVerified("ibc", i);
                  return a;
                },
                packetAcknowledgement: async (n, r, s) => {
                  const i = o.toAscii(
                      `acks/ports/${n}/channels/${r}/acknowledgements/${s}`,
                    ),
                    a = await t.queryVerified("ibc", i);
                  return a;
                },
                nextSequenceReceive: async (n, r) => {
                  const s = o.toAscii(
                      `seqAcks/ports/${n}/channels/${r}/nextSequenceAck`,
                    ),
                    a = await t.queryVerified("ibc", s);
                  return a.length ? i.Uint64.fromBytes(a).toNumber() : null;
                },
              },
            },
          },
        };
      }
      n.setupIbcExtension = y;
    },
    4444: function (t, n, r) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.setupStakingExtension = void 0));
      const o = r(4445),
        i = s(r(2754)),
        a = r(2956);
      function c(t) {
        const n = a.createProtobufRpcClient(t),
          r = new o.QueryClientImpl(n);
        return {
          staking: {
            delegation: async (t, n) => {
              const s = await r.Delegation({
                delegatorAddr: t,
                validatorAddr: n,
              });
              return s;
            },
            delegatorDelegations: async (t, n) => {
              const s = await r.DelegatorDelegations({
                delegatorAddr: t,
                pagination: a.createPagination(n),
              });
              return s;
            },
            delegatorUnbondingDelegations: async (t, n) => {
              const s = await r.DelegatorUnbondingDelegations({
                delegatorAddr: t,
                pagination: a.createPagination(n),
              });
              return s;
            },
            delegatorValidator: async (t, n) => {
              const s = await r.DelegatorValidator({
                delegatorAddr: t,
                validatorAddr: n,
              });
              return s;
            },
            delegatorValidators: async (t, n) => {
              const s = await r.DelegatorValidators({
                delegatorAddr: t,
                pagination: a.createPagination(n),
              });
              return s;
            },
            historicalInfo: async (t) => {
              const n = await r.HistoricalInfo({
                height: i.default.fromNumber(t, !0),
              });
              return n;
            },
            params: async () => {
              const t = await r.Params({});
              return t;
            },
            pool: async () => {
              const t = await r.Pool({});
              return t;
            },
            redelegations: async (t, n, s, o) => {
              const i = await r.Redelegations({
                delegatorAddr: t,
                srcValidatorAddr: n,
                dstValidatorAddr: s,
                pagination: a.createPagination(o),
              });
              return i;
            },
            unbondingDelegation: async (t, n) => {
              const s = await r.UnbondingDelegation({
                delegatorAddr: t,
                validatorAddr: n,
              });
              return s;
            },
            validator: async (t) => {
              const n = await r.Validator({ validatorAddr: t });
              return n;
            },
            validatorDelegations: async (t, n) => {
              const s = await r.ValidatorDelegations({
                validatorAddr: t,
                pagination: a.createPagination(n),
              });
              return s;
            },
            validators: async (t, n) => {
              const s = await r.Validators({
                status: t,
                pagination: a.createPagination(n),
              });
              return s;
            },
            validatorUnbondingDelegations: async (t, n) => {
              const s = await r.ValidatorUnbondingDelegations({
                validatorAddr: t,
                pagination: a.createPagination(n),
              });
              return s;
            },
          },
        };
      }
      n.setupStakingExtension = c;
    },
    4446: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.pubkeyToAddress =
          n.pubkeyToRawAddress =
          n.rawSecp256k1PubkeyToRawAddress =
          n.rawEd25519PubkeyToRawAddress =
            void 0));
      const s = r(2800),
        o = r(2762);
      function i(t) {
        if (32 !== t.length)
          throw new Error("Invalid Ed25519 pubkey length: " + t.length);
        return s.sha256(t).slice(0, 20);
      }
      function a(t) {
        if (33 !== t.length)
          throw new Error(
            "Invalid Secp256k1 pubkey length (compressed): " + t.length,
          );
        return s.ripemd160(s.sha256(t));
      }
      function c(t, n) {
        switch (t) {
          case "ed25519":
            return i(n);
          case "secp256k1":
            return a(n);
          default:
            throw new Error(`Pubkey type ${t} not supported`);
        }
      }
      function u(t, n) {
        return o.toHex(c(t, n)).toUpperCase();
      }
      ((n.rawEd25519PubkeyToRawAddress = i),
        (n.rawSecp256k1PubkeyToRawAddress = a),
        (n.pubkeyToRawAddress = c),
        (n.pubkeyToAddress = u));
    },
    4447: function (t, n, r) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.HttpClient = void 0));
      const o = r(3578),
        i = s(r(14)),
        a = r(3329);
      function c(t) {
        if (t.status >= 400)
          throw new Error("Bad status on response: " + t.status);
        return t;
      }
      async function u(t, n, r) {
        if ("undefined" !== typeof fetch) {
          const s = r ? JSON.stringify(r) : void 0;
          return fetch(n, { method: t, body: s })
            .then(c)
            .then((t) => t.json());
        }
        return i.default
          .request({ url: n, method: t, data: r })
          .then((t) => t.data);
      }
      class HttpClient {
        constructor(t) {
          (void 0 === t && (t = "http://localhost:46657"),
            (this.url = a.hasProtocol(t) ? t : "http://" + t));
        }
        disconnect() {}
        async execute(t) {
          const n = o.parseJsonRpcResponse(await u("POST", this.url, t));
          if (o.isJsonRpcErrorResponse(n))
            throw new Error(JSON.stringify(n.error));
          return n;
        }
      }
      n.HttpClient = HttpClient;
    },
    4452: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.WebsocketClient = void 0));
      const s = r(3578),
        o = r(4453),
        i = r(3154),
        a = r(2955),
        c = r(3329);
      function u(t) {
        throw t;
      }
      function d(t) {
        if ("message" !== t.type)
          throw new Error("Unexcepted message type on websocket: " + t.type);
        const n = s.parseJsonRpcResponse(JSON.parse(t.data));
        return n;
      }
      class RpcEventProducer {
        constructor(t, n) {
          ((this.running = !1),
            (this.subscriptions = []),
            (this.request = t),
            (this.socket = n));
        }
        start(t) {
          if (this.running)
            throw Error(
              "Already started. Please stop first before restarting.",
            );
          ((this.running = !0),
            this.connectToClient(t),
            this.socket.queueRequest(JSON.stringify(this.request)));
        }
        stop() {
          this.running = !1;
          const t = Object.assign(Object.assign({}, this.request), {
            method: "unsubscribe",
          });
          try {
            this.socket.queueRequest(JSON.stringify(t));
          } catch (n) {
            if (
              !(
                n instanceof Error &&
                n.message.match(/socket has disconnected/i)
              )
            )
              throw n;
          }
        }
        connectToClient(t) {
          const n = this.socket.events.map(d),
            r = n
              .filter((t) => t.id === this.request.id)
              .subscribe({
                next: (n) => {
                  (s.isJsonRpcErrorResponse(n) &&
                    (this.closeSubscriptions(),
                    t.error(JSON.stringify(n.error))),
                    r.unsubscribe());
                },
              }),
            o = n
              .filter((t) => t.id === this.request.id)
              .subscribe({
                next: (n) => {
                  s.isJsonRpcErrorResponse(n)
                    ? (this.closeSubscriptions(),
                      t.error(JSON.stringify(n.error)))
                    : t.next(n.result);
                },
              }),
            i = n.subscribe({
              error: (n) => {
                (this.closeSubscriptions(), t.error(n));
              },
              complete: () => {
                (this.closeSubscriptions(), t.complete());
              },
            });
          this.subscriptions.push(r, o, i);
        }
        closeSubscriptions() {
          for (const t of this.subscriptions) t.unsubscribe();
          this.subscriptions = [];
        }
      }
      class WebsocketClient {
        constructor(t, n) {
          (void 0 === t && (t = "ws://localhost:46657"),
            void 0 === n && (n = u),
            (this.subscriptionStreams = new Map()));
          const r = t.endsWith("/") ? "websocket" : "/websocket",
            s = c.hasProtocol(t) ? t : "ws://" + t;
          ((this.url = s + r),
            (this.socket = new o.ReconnectingSocket(this.url)));
          const i = this.socket.events.subscribe({
            error: (t) => {
              (n(t), i.unsubscribe());
            },
          });
          ((this.jsonRpcResponseStream = this.socket.events.map(d)),
            this.socket.connect());
        }
        async execute(t) {
          const n = this.responseForRequestId(t.id);
          this.socket.queueRequest(JSON.stringify(t));
          const r = await n;
          if (s.isJsonRpcErrorResponse(r))
            throw new Error(JSON.stringify(r.error));
          return r;
        }
        listen(t) {
          if ("subscribe" !== t.method)
            throw new Error(
              'Request method must be "subscribe" to start event listening',
            );
          const n = t.params.query;
          if ("string" !== typeof n)
            throw new Error("request.params.query must be a string");
          if (!this.subscriptionStreams.has(n)) {
            const r = new RpcEventProducer(t, this.socket),
              s = a.Stream.create(r);
            this.subscriptionStreams.set(n, s);
          }
          return this.subscriptionStreams
            .get(n)
            .filter((t) => void 0 !== t.query);
        }
        async connected() {
          await this.socket.connectionStatus.waitFor(
            o.ConnectionStatus.Connected,
          );
        }
        disconnect() {
          this.socket.disconnect();
        }
        async responseForRequestId(t) {
          return i.firstEvent(
            this.jsonRpcResponseStream.filter((n) => n.id === t),
          );
        }
      }
      n.WebsocketClient = WebsocketClient;
    },
    4453: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.StreamingSocket =
          n.SocketWrapper =
          n.ReconnectingSocket =
          n.QueueingStreamingSocket =
          n.ConnectionStatus =
            void 0));
      var s = r(3580);
      (Object.defineProperty(n, "ConnectionStatus", {
        enumerable: !0,
        get: function () {
          return s.ConnectionStatus;
        },
      }),
        Object.defineProperty(n, "QueueingStreamingSocket", {
          enumerable: !0,
          get: function () {
            return s.QueueingStreamingSocket;
          },
        }));
      var o = r(4455);
      Object.defineProperty(n, "ReconnectingSocket", {
        enumerable: !0,
        get: function () {
          return o.ReconnectingSocket;
        },
      });
      var i = r(3582);
      Object.defineProperty(n, "SocketWrapper", {
        enumerable: !0,
        get: function () {
          return i.SocketWrapper;
        },
      });
      var a = r(3581);
      Object.defineProperty(n, "StreamingSocket", {
        enumerable: !0,
        get: function () {
          return a.StreamingSocket;
        },
      });
    },
    4455: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.ReconnectingSocket = void 0));
      const s = r(2955),
        o = r(3580);
      class ReconnectingSocket {
        constructor(t, n, r) {
          (void 0 === n && (n = 1e4),
            (this.unconnected = !0),
            (this.disconnected = !1),
            (this.timeoutIndex = 0),
            (this.reconnectTimeout = null));
          const i = {
            start: (t) => (this.eventProducerListener = t),
            stop: () => (this.eventProducerListener = void 0),
          };
          ((this.events = s.Stream.create(i)),
            (this.socket = new o.QueueingStreamingSocket(t, n, r)),
            this.socket.events.subscribe({
              next: (t) => {
                this.eventProducerListener &&
                  this.eventProducerListener.next(t);
              },
              error: (t) => {
                this.eventProducerListener &&
                  this.eventProducerListener.error(t);
              },
            }),
            (this.connectionStatus = this.socket.connectionStatus),
            this.connectionStatus.updates.subscribe({
              next: (t) => {
                (t === o.ConnectionStatus.Connected && (this.timeoutIndex = 0),
                  t === o.ConnectionStatus.Disconnected &&
                    (this.reconnectTimeout &&
                      (clearTimeout(this.reconnectTimeout),
                      (this.reconnectTimeout = null)),
                    (this.reconnectTimeout = setTimeout(
                      () => this.socket.reconnect(),
                      ReconnectingSocket.calculateTimeout(this.timeoutIndex++),
                    ))));
              },
            }));
        }
        static calculateTimeout(t) {
          return Math.min(2 ** t * 100, 5e3);
        }
        connect() {
          if (!this.unconnected)
            throw new Error("Cannot connect: socket has already connected");
          (this.socket.connect(), (this.unconnected = !1));
        }
        disconnect() {
          if (this.unconnected)
            throw new Error("Cannot disconnect: socket has not yet connected");
          (this.socket.disconnect(),
            this.eventProducerListener && this.eventProducerListener.complete(),
            (this.disconnected = !0));
        }
        queueRequest(t) {
          if (this.disconnected)
            throw new Error("Cannot queue request: socket has disconnected");
          this.socket.queueRequest(t);
        }
      }
      n.ReconnectingSocket = ReconnectingSocket;
    },
    4456: function (t, n, r) {
      "use strict";
      var s =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, n, r, s) {
                (void 0 === s && (s = r),
                  Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: function () {
                      return n[r];
                    },
                  }));
              }
            : function (t, n, r, s) {
                (void 0 === s && (s = r), (t[s] = n[r]));
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, n) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: n,
                });
              }
            : function (t, n) {
                t["default"] = n;
              }),
        i =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t)
              for (var r in t)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(t, r) &&
                  s(n, t, r);
            return (o(n, t), n);
          };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Tendermint33Client = void 0));
      const a = r(3155),
        c = r(3328),
        u = r(4457),
        d = i(r(3332));
      class Tendermint33Client {
        constructor(t) {
          ((this.client = t),
            (this.p = u.adaptor33.params),
            (this.r = u.adaptor33.responses));
        }
        static async connect(t) {
          const n = t.startsWith("http://") || t.startsWith("https://"),
            r = n ? new c.HttpClient(t) : new c.WebsocketClient(t);
          return Tendermint33Client.create(r);
        }
        static async create(t) {
          await this.detectVersion(t);
          return new Tendermint33Client(t);
        }
        static async detectVersion(t) {
          const n = a.createJsonRpcRequest(d.Method.Status),
            r = await t.execute(n),
            s = r.result;
          if (!s || !s.node_info)
            throw new Error("Unrecognized format for status response");
          const o = s.node_info.version;
          if ("string" !== typeof o)
            throw new Error("Unrecognized version format: must be string");
          return o;
        }
        disconnect() {
          this.client.disconnect();
        }
        async abciInfo() {
          const t = { method: d.Method.AbciInfo };
          return this.doCall(t, this.p.encodeAbciInfo, this.r.decodeAbciInfo);
        }
        async abciQuery(t) {
          const n = { params: t, method: d.Method.AbciQuery };
          return this.doCall(n, this.p.encodeAbciQuery, this.r.decodeAbciQuery);
        }
        async block(t) {
          const n = { method: d.Method.Block, params: { height: t } };
          return this.doCall(n, this.p.encodeBlock, this.r.decodeBlock);
        }
        async blockResults(t) {
          const n = { method: d.Method.BlockResults, params: { height: t } };
          return this.doCall(
            n,
            this.p.encodeBlockResults,
            this.r.decodeBlockResults,
          );
        }
        async blockchain(t, n) {
          const r = {
            method: d.Method.Blockchain,
            params: { minHeight: t, maxHeight: n },
          };
          return this.doCall(
            r,
            this.p.encodeBlockchain,
            this.r.decodeBlockchain,
          );
        }
        async broadcastTxSync(t) {
          const n = { params: t, method: d.Method.BroadcastTxSync };
          return this.doCall(
            n,
            this.p.encodeBroadcastTx,
            this.r.decodeBroadcastTxSync,
          );
        }
        async broadcastTxAsync(t) {
          const n = { params: t, method: d.Method.BroadcastTxAsync };
          return this.doCall(
            n,
            this.p.encodeBroadcastTx,
            this.r.decodeBroadcastTxAsync,
          );
        }
        async broadcastTxCommit(t) {
          const n = { params: t, method: d.Method.BroadcastTxCommit };
          return this.doCall(
            n,
            this.p.encodeBroadcastTx,
            this.r.decodeBroadcastTxCommit,
          );
        }
        async commit(t) {
          const n = { method: d.Method.Commit, params: { height: t } };
          return this.doCall(n, this.p.encodeCommit, this.r.decodeCommit);
        }
        async genesis() {
          const t = { method: d.Method.Genesis };
          return this.doCall(t, this.p.encodeGenesis, this.r.decodeGenesis);
        }
        async health() {
          const t = { method: d.Method.Health };
          return this.doCall(t, this.p.encodeHealth, this.r.decodeHealth);
        }
        async status() {
          const t = { method: d.Method.Status };
          return this.doCall(t, this.p.encodeStatus, this.r.decodeStatus);
        }
        subscribeNewBlock() {
          const t = {
            method: d.Method.Subscribe,
            query: { type: d.SubscriptionEventType.NewBlock },
          };
          return this.subscribe(t, this.r.decodeNewBlockEvent);
        }
        subscribeNewBlockHeader() {
          const t = {
            method: d.Method.Subscribe,
            query: { type: d.SubscriptionEventType.NewBlockHeader },
          };
          return this.subscribe(t, this.r.decodeNewBlockHeaderEvent);
        }
        subscribeTx(t) {
          const n = {
            method: d.Method.Subscribe,
            query: { type: d.SubscriptionEventType.Tx, raw: t },
          };
          return this.subscribe(n, this.r.decodeTxEvent);
        }
        async tx(t) {
          const n = { params: t, method: d.Method.Tx };
          return this.doCall(n, this.p.encodeTx, this.r.decodeTx);
        }
        async txSearch(t) {
          const n = { params: t, method: d.Method.TxSearch };
          return this.doCall(n, this.p.encodeTxSearch, this.r.decodeTxSearch);
        }
        async txSearchAll(t) {
          let n = t.page || 1;
          const r = [];
          let s = !1;
          while (!s) {
            const o = await this.txSearch(
              Object.assign(Object.assign({}, t), { page: n }),
            );
            (r.push(...o.txs), r.length < o.totalCount ? n++ : (s = !0));
          }
          return { totalCount: r.length, txs: r };
        }
        async validators(t) {
          const n = { method: d.Method.Validators, params: t };
          return this.doCall(
            n,
            this.p.encodeValidators,
            this.r.decodeValidators,
          );
        }
        async validatorsAll(t) {
          const n = [];
          let r = 1,
            s = !1,
            o = t;
          while (!s) {
            const t = await this.validators({
              per_page: 50,
              height: o,
              page: r,
            });
            (n.push(...t.validators),
              (o = o || t.blockHeight),
              n.length < t.total ? r++ : (s = !0));
          }
          return {
            blockHeight: null !== o && void 0 !== o ? o : 0,
            count: n.length,
            total: n.length,
            validators: n,
          };
        }
        async doCall(t, n, r) {
          const s = n(t),
            o = await this.client.execute(s);
          return r(o);
        }
        subscribe(t, n) {
          if (!c.instanceOfRpcStreamingClient(this.client))
            throw new Error("This RPC client type cannot subscribe to events");
          const r = this.p.encodeSubscribe(t),
            s = this.client.listen(r);
          return s.map((t) => n(t));
        }
      }
      n.Tendermint33Client = Tendermint33Client;
    },
    4457: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.adaptor33 = void 0));
      const s = r(3584),
        o = r(4458),
        i = r(4459);
      n.adaptor33 = {
        params: o.Params,
        responses: i.Responses,
        hashTx: s.hashTx,
        hashBlock: s.hashBlock,
      };
    },
    4458: function (t, n, r) {
      "use strict";
      var s =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, n, r, s) {
                (void 0 === s && (s = r),
                  Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: function () {
                      return n[r];
                    },
                  }));
              }
            : function (t, n, r, s) {
                (void 0 === s && (s = r), (t[s] = n[r]));
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, n) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: n,
                });
              }
            : function (t, n) {
                t["default"] = n;
              }),
        i =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t)
              for (var r in t)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(t, r) &&
                  s(n, t, r);
            return (o(n, t), n);
          };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Params = void 0));
      const a = r(2762),
        c = r(3155),
        u = r(3331),
        d = i(r(3332));
      function l(t) {
        return { height: u.may(u.Integer.encode, t.height) };
      }
      function h(t) {
        return {
          minHeight: u.may(u.Integer.encode, t.minHeight),
          maxHeight: u.may(u.Integer.encode, t.maxHeight),
        };
      }
      function p(t) {
        return {
          path: u.assertNotEmpty(t.path),
          data: a.toHex(t.data),
          height: u.may(u.Integer.encode, t.height),
          prove: t.prove,
        };
      }
      function m(t) {
        return { tx: a.toBase64(u.assertNotEmpty(t.tx)) };
      }
      function f(t) {
        return { hash: a.toBase64(u.assertNotEmpty(t.hash)), prove: t.prove };
      }
      function g(t) {
        return {
          query: t.query,
          prove: t.prove,
          page: u.may(u.Integer.encode, t.page),
          per_page: u.may(u.Integer.encode, t.per_page),
          order_by: t.order_by,
        };
      }
      function y(t) {
        return {
          height: u.may(u.Integer.encode, t.height),
          page: u.may(u.Integer.encode, t.page),
          per_page: u.may(u.Integer.encode, t.per_page),
        };
      }
      class Params {
        static encodeAbciInfo(t) {
          return c.createJsonRpcRequest(t.method);
        }
        static encodeAbciQuery(t) {
          return c.createJsonRpcRequest(t.method, p(t.params));
        }
        static encodeBlock(t) {
          return c.createJsonRpcRequest(t.method, l(t.params));
        }
        static encodeBlockchain(t) {
          return c.createJsonRpcRequest(t.method, h(t.params));
        }
        static encodeBlockResults(t) {
          return c.createJsonRpcRequest(t.method, l(t.params));
        }
        static encodeBroadcastTx(t) {
          return c.createJsonRpcRequest(t.method, m(t.params));
        }
        static encodeCommit(t) {
          return c.createJsonRpcRequest(t.method, l(t.params));
        }
        static encodeGenesis(t) {
          return c.createJsonRpcRequest(t.method);
        }
        static encodeHealth(t) {
          return c.createJsonRpcRequest(t.method);
        }
        static encodeStatus(t) {
          return c.createJsonRpcRequest(t.method);
        }
        static encodeSubscribe(t) {
          const n = { key: "tm.event", value: t.query.type },
            r = d.buildQuery({ tags: [n], raw: t.query.raw });
          return c.createJsonRpcRequest("subscribe", { query: r });
        }
        static encodeTx(t) {
          return c.createJsonRpcRequest(t.method, f(t.params));
        }
        static encodeTxSearch(t) {
          return c.createJsonRpcRequest(t.method, g(t.params));
        }
        static encodeValidators(t) {
          return c.createJsonRpcRequest(t.method, y(t.params));
        }
      }
      n.Params = Params;
    },
    4459: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Responses = void 0));
      const s = r(2762),
        o = r(2815),
        i = r(3327),
        a = r(3330),
        c = r(3331),
        u = r(3584);
      function d(t) {
        return {
          data: t.data,
          lastBlockHeight: c.may(c.Integer.parse, t.last_block_height),
          lastBlockAppHash: c.may(s.fromBase64, t.last_block_app_hash),
        };
      }
      function l(t) {
        return {
          ops: t.ops.map((t) => ({
            type: t.type,
            key: s.fromBase64(t.key),
            data: s.fromBase64(t.data),
          })),
        };
      }
      function h(t) {
        return {
          key: s.fromBase64(c.optional(t.key, "")),
          value: s.fromBase64(c.optional(t.value, "")),
          proof: c.may(l, t.proofOps),
          height: c.may(c.Integer.parse, t.height),
          code: c.may(c.Integer.parse, t.code),
          index: c.may(c.Integer.parse, t.index),
          log: t.log,
        };
      }
      function p(t) {
        return {
          key: s.fromBase64(c.assertNotEmpty(t.key)),
          value: s.fromBase64(c.optional(t.value, "")),
        };
      }
      function m(t) {
        return c.assertArray(t).map(p);
      }
      function f(t) {
        return { type: t.type, attributes: m(t.attributes) };
      }
      function g(t) {
        return c.assertArray(t).map(f);
      }
      function y(t) {
        return {
          data: c.may(s.fromBase64, t.data),
          log: t.log,
          code: c.Integer.parse(c.assertNumber(c.optional(t.code, 0))),
          events: g(t.events),
        };
      }
      function b(t) {
        switch (t.type) {
          case "tendermint/PubKeyEd25519":
            return {
              algorithm: "ed25519",
              data: s.fromBase64(c.assertNotEmpty(t.value)),
            };
          case "tendermint/PubKeySecp256k1":
            return {
              algorithm: "secp256k1",
              data: s.fromBase64(c.assertNotEmpty(t.value)),
            };
          default:
            throw new Error("unknown pubkey type: " + t.type);
        }
      }
      function v(t) {
        return {
          pubkey: b(c.assertObject(t.pub_key)),
          votingPower: c.Integer.parse(c.assertNotEmpty(t.voting_power)),
          address: s.fromHex(c.assertNotEmpty(t.address)),
          proposerPriority: c.Integer.parse(t.proposer_priority),
        };
      }
      function w(t) {
        return {
          maxBytes: c.Integer.parse(c.assertNotEmpty(t.max_bytes)),
          maxGas: c.Integer.parse(c.assertNotEmpty(t.max_gas)),
        };
      }
      function k(t) {
        return {
          maxAgeNumBlocks: c.Integer.parse(
            c.assertNotEmpty(t.max_age_num_blocks),
          ),
          maxAgeDuration: c.Integer.parse(c.assertNotEmpty(t.max_age_duration)),
        };
      }
      function S(t) {
        return {
          block: w(c.assertObject(t.block)),
          evidence: k(c.assertObject(t.evidence)),
        };
      }
      function A(t) {
        return {
          height: c.Integer.parse(c.assertNotEmpty(t.height)),
          results: (t.txs_results || []).map(y),
          validatorUpdates: (t.validator_updates || []).map(v),
          consensusUpdates: c.may(S, t.consensus_param_updates),
          beginBlockEvents: g(t.begin_block_events || []),
          endBlockEvents: g(t.end_block_events || []),
        };
      }
      function _(t) {
        return {
          hash: s.fromHex(c.assertNotEmpty(t.hash)),
          parts: {
            total: c.Integer.parse(c.assertNotEmpty(t.parts.total)),
            hash: s.fromHex(c.assertNotEmpty(t.parts.hash)),
          },
        };
      }
      function M(t) {
        var n;
        return {
          block: c.Integer.parse(t.block),
          app: c.Integer.parse(null !== (n = t.app) && void 0 !== n ? n : 0),
        };
      }
      function P(t) {
        return {
          version: M(t.version),
          chainId: c.assertNotEmpty(t.chain_id),
          height: c.Integer.parse(c.assertNotEmpty(t.height)),
          time: i.fromRfc3339WithNanoseconds(c.assertNotEmpty(t.time)),
          lastBlockId: _(t.last_block_id),
          lastCommitHash: s.fromHex(c.assertNotEmpty(t.last_commit_hash)),
          dataHash: s.fromHex(c.assertSet(t.data_hash)),
          validatorsHash: s.fromHex(c.assertNotEmpty(t.validators_hash)),
          nextValidatorsHash: s.fromHex(
            c.assertNotEmpty(t.next_validators_hash),
          ),
          consensusHash: s.fromHex(c.assertNotEmpty(t.consensus_hash)),
          appHash: s.fromHex(c.assertNotEmpty(t.app_hash)),
          lastResultsHash: s.fromHex(c.assertSet(t.last_results_hash)),
          evidenceHash: s.fromHex(c.assertSet(t.evidence_hash)),
          proposerAddress: s.fromHex(c.assertNotEmpty(t.proposer_address)),
        };
      }
      function x(t) {
        return { blockId: _(t.block_id), header: P(t.header) };
      }
      function E(t) {
        return {
          lastHeight: c.Integer.parse(c.assertNotEmpty(t.last_height)),
          blockMetas: c.assertArray(t.block_metas).map(x),
        };
      }
      function C(t) {
        return Object.assign(Object.assign({}, y(t)), {
          hash: s.fromHex(c.assertNotEmpty(t.hash)),
        });
      }
      function T(t) {
        return {
          height: c.Integer.parse(t.height),
          hash: s.fromHex(c.assertNotEmpty(t.hash)),
          checkTx: y(c.assertObject(t.check_tx)),
          deliverTx: c.may(y, t.deliver_tx),
        };
      }
      function O(t) {
        return (o.assert(t in a.BlockIdFlag), t);
      }
      function j(t) {
        return {
          blockIdFlag: O(t.block_id_flag),
          validatorAddress: s.fromHex(t.validator_address),
          timestamp: i.fromRfc3339WithNanoseconds(
            c.assertNotEmpty(t.timestamp),
          ),
          signature: s.fromBase64(c.assertNotEmpty(t.signature)),
        };
      }
      function B(t) {
        return {
          blockId: _(c.assertObject(t.block_id)),
          height: c.Integer.parse(c.assertNotEmpty(t.height)),
          round: c.Integer.parse(t.round),
          signatures: c.assertArray(t.signatures).map(j),
        };
      }
      function I(t) {
        return {
          canonical: c.assertBoolean(t.canonical),
          header: P(t.signed_header.header),
          commit: B(t.signed_header.commit),
        };
      }
      function N(t) {
        return {
          address: s.fromHex(c.assertNotEmpty(t.address)),
          pubkey: b(c.assertObject(t.pub_key)),
          votingPower: c.Integer.parse(c.assertNotEmpty(t.power)),
        };
      }
      function R(t) {
        return {
          genesisTime: i.fromRfc3339WithNanoseconds(
            c.assertNotEmpty(t.genesis_time),
          ),
          chainId: c.assertNotEmpty(t.chain_id),
          consensusParams: S(t.consensus_params),
          validators: t.validators ? c.assertArray(t.validators).map(N) : [],
          appHash: s.fromHex(c.assertSet(t.app_hash)),
          appState: t.app_state,
        };
      }
      function D(t) {
        return {
          pubkey: b(c.assertObject(t.pub_key)),
          votingPower: c.Integer.parse(c.assertNotEmpty(t.voting_power)),
          address: s.fromHex(c.assertNotEmpty(t.address)),
        };
      }
      function H(t) {
        return {
          id: s.fromHex(c.assertNotEmpty(t.id)),
          listenAddr: c.assertNotEmpty(t.listen_addr),
          network: c.assertNotEmpty(t.network),
          version: c.assertString(t.version),
          channels: c.assertNotEmpty(t.channels),
          moniker: c.assertNotEmpty(t.moniker),
          other: c.dictionaryToStringMap(t.other),
          protocolVersion: {
            app: c.Integer.parse(c.assertNotEmpty(t.protocol_version.app)),
            block: c.Integer.parse(c.assertNotEmpty(t.protocol_version.block)),
            p2p: c.Integer.parse(c.assertNotEmpty(t.protocol_version.p2p)),
          },
        };
      }
      function U(t) {
        return {
          latestBlockHash: s.fromHex(c.assertNotEmpty(t.latest_block_hash)),
          latestAppHash: s.fromHex(c.assertNotEmpty(t.latest_app_hash)),
          latestBlockTime: i.fromRfc3339WithNanoseconds(
            c.assertNotEmpty(t.latest_block_time),
          ),
          latestBlockHeight: c.Integer.parse(
            c.assertNotEmpty(t.latest_block_height),
          ),
          catchingUp: c.assertBoolean(t.catching_up),
        };
      }
      function V(t) {
        return {
          nodeInfo: H(t.node_info),
          syncInfo: U(t.sync_info),
          validatorInfo: D(t.validator_info),
        };
      }
      function q(t) {
        return {
          data: s.fromBase64(c.assertNotEmpty(t.data)),
          rootHash: s.fromHex(c.assertNotEmpty(t.root_hash)),
          proof: {
            total: c.Integer.parse(c.assertNotEmpty(t.proof.total)),
            index: c.Integer.parse(c.assertNotEmpty(t.proof.index)),
            leafHash: s.fromBase64(c.assertNotEmpty(t.proof.leaf_hash)),
            aunts: c.assertArray(t.proof.aunts).map(s.fromBase64),
          },
        };
      }
      function Q(t) {
        return {
          tx: s.fromBase64(c.assertNotEmpty(t.tx)),
          result: y(c.assertObject(t.tx_result)),
          height: c.Integer.parse(c.assertNotEmpty(t.height)),
          index: c.Integer.parse(c.assertNumber(t.index)),
          hash: s.fromHex(c.assertNotEmpty(t.hash)),
          proof: c.may(q, t.proof),
        };
      }
      function W(t) {
        return {
          totalCount: c.Integer.parse(c.assertNotEmpty(t.total_count)),
          txs: c.assertArray(t.txs).map(Q),
        };
      }
      function L(t) {
        const n = s.fromBase64(c.assertNotEmpty(t.tx));
        return {
          tx: n,
          hash: u.hashTx(n),
          result: y(t.result),
          height: c.Integer.parse(c.assertNotEmpty(t.height)),
          index: c.may(c.Integer.parse, t.index),
        };
      }
      function F(t) {
        return {
          blockHeight: c.Integer.parse(c.assertNotEmpty(t.block_height)),
          validators: c.assertArray(t.validators).map(v),
          count: c.Integer.parse(c.assertNotEmpty(t.count)),
          total: c.Integer.parse(c.assertNotEmpty(t.total)),
        };
      }
      function $(t) {
        return {
          type: c.assertNotEmpty(t.type),
          height: c.Integer.parse(c.assertNotEmpty(t.height)),
          time: c.Integer.parse(c.assertNotEmpty(t.time)),
          totalVotingPower: c.Integer.parse(
            c.assertNotEmpty(t.totalVotingPower),
          ),
          validator: v(t.validator),
        };
      }
      function J(t) {
        return c.assertArray(t).map($);
      }
      function G(t) {
        return {
          header: P(c.assertObject(t.header)),
          lastCommit: B(c.assertObject(t.last_commit)),
          txs: t.data.txs ? c.assertArray(t.data.txs).map(s.fromBase64) : [],
          evidence: t.evidence && c.may(J, t.evidence.evidence),
        };
      }
      function K(t) {
        return { blockId: _(t.block_id), block: G(t.block) };
      }
      class Responses {
        static decodeAbciInfo(t) {
          return d(c.assertObject(t.result.response));
        }
        static decodeAbciQuery(t) {
          return h(c.assertObject(t.result.response));
        }
        static decodeBlock(t) {
          return K(t.result);
        }
        static decodeBlockResults(t) {
          return A(t.result);
        }
        static decodeBlockchain(t) {
          return E(t.result);
        }
        static decodeBroadcastTxSync(t) {
          return C(t.result);
        }
        static decodeBroadcastTxAsync(t) {
          return this.decodeBroadcastTxSync(t);
        }
        static decodeBroadcastTxCommit(t) {
          return T(t.result);
        }
        static decodeCommit(t) {
          return I(t.result);
        }
        static decodeGenesis(t) {
          return R(c.assertObject(t.result.genesis));
        }
        static decodeHealth() {
          return null;
        }
        static decodeStatus(t) {
          return V(t.result);
        }
        static decodeNewBlockEvent(t) {
          return G(t.data.value.block);
        }
        static decodeNewBlockHeaderEvent(t) {
          return P(t.data.value.header);
        }
        static decodeTxEvent(t) {
          return L(t.data.value.TxResult);
        }
        static decodeTx(t) {
          return Q(t.result);
        }
        static decodeTxSearch(t) {
          return W(t.result);
        }
        static decodeValidators(t) {
          return F(t.result);
        }
      }
      n.Responses = Responses;
    },
    4460: function (t, n, r) {
      "use strict";
      function s(t) {
        return 0 === t.code;
      }
      function o(t) {
        return 0 === t.checkTx.code && !!t.deliverTx && 0 === t.deliverTx.code;
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.VoteType =
          n.broadcastTxCommitSuccess =
          n.broadcastTxSyncSuccess =
            void 0),
        (n.broadcastTxSyncSuccess = s),
        (n.broadcastTxCommitSuccess = o),
        (function (t) {
          ((t[(t["PreVote"] = 1)] = "PreVote"),
            (t[(t["PreCommit"] = 2)] = "PreCommit"));
        })(n.VoteType || (n.VoteType = {})));
    },
    4461: function (t, n, r) {
      "use strict";
      var s =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, n, r, s) {
                (void 0 === s && (s = r),
                  Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: function () {
                      return n[r];
                    },
                  }));
              }
            : function (t, n, r, s) {
                (void 0 === s && (s = r), (t[s] = n[r]));
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, n) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: n,
                });
              }
            : function (t, n) {
                t["default"] = n;
              }),
        i =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t)
              for (var r in t)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(t, r) &&
                  s(n, t, r);
            return (o(n, t), n);
          };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Tendermint34Client = void 0));
      const a = r(3155),
        c = r(3328),
        u = r(4462),
        d = i(r(3334));
      class Tendermint34Client {
        constructor(t) {
          ((this.client = t),
            (this.p = u.adaptor34.params),
            (this.r = u.adaptor34.responses));
        }
        static async connect(t) {
          const n = t.startsWith("http://") || t.startsWith("https://"),
            r = n ? new c.HttpClient(t) : new c.WebsocketClient(t);
          return Tendermint34Client.create(r);
        }
        static async create(t) {
          await this.detectVersion(t);
          return new Tendermint34Client(t);
        }
        static async detectVersion(t) {
          const n = a.createJsonRpcRequest(d.Method.Status),
            r = await t.execute(n),
            s = r.result;
          if (!s || !s.node_info)
            throw new Error("Unrecognized format for status response");
          const o = s.node_info.version;
          if ("string" !== typeof o)
            throw new Error("Unrecognized version format: must be string");
          return o;
        }
        disconnect() {
          this.client.disconnect();
        }
        async abciInfo() {
          const t = { method: d.Method.AbciInfo };
          return this.doCall(t, this.p.encodeAbciInfo, this.r.decodeAbciInfo);
        }
        async abciQuery(t) {
          const n = { params: t, method: d.Method.AbciQuery };
          return this.doCall(n, this.p.encodeAbciQuery, this.r.decodeAbciQuery);
        }
        async block(t) {
          const n = { method: d.Method.Block, params: { height: t } };
          return this.doCall(n, this.p.encodeBlock, this.r.decodeBlock);
        }
        async blockResults(t) {
          const n = { method: d.Method.BlockResults, params: { height: t } };
          return this.doCall(
            n,
            this.p.encodeBlockResults,
            this.r.decodeBlockResults,
          );
        }
        async blockSearch(t) {
          const n = { params: t, method: d.Method.BlockSearch },
            r = await this.doCall(
              n,
              this.p.encodeBlockSearch,
              this.r.decodeBlockSearch,
            );
          return Object.assign(Object.assign({}, r), {
            blocks: [...r.blocks].sort(
              (t, n) => t.block.header.height - n.block.header.height,
            ),
          });
        }
        async blockSearchAll(t) {
          let n = t.page || 1;
          const r = [];
          let s = !1;
          while (!s) {
            const o = await this.blockSearch(
              Object.assign(Object.assign({}, t), { page: n }),
            );
            (r.push(...o.blocks), r.length < o.totalCount ? n++ : (s = !0));
          }
          return (
            r.sort((t, n) => t.block.header.height - n.block.header.height),
            { totalCount: r.length, blocks: r }
          );
        }
        async blockchain(t, n) {
          const r = {
            method: d.Method.Blockchain,
            params: { minHeight: t, maxHeight: n },
          };
          return this.doCall(
            r,
            this.p.encodeBlockchain,
            this.r.decodeBlockchain,
          );
        }
        async broadcastTxSync(t) {
          const n = { params: t, method: d.Method.BroadcastTxSync };
          return this.doCall(
            n,
            this.p.encodeBroadcastTx,
            this.r.decodeBroadcastTxSync,
          );
        }
        async broadcastTxAsync(t) {
          const n = { params: t, method: d.Method.BroadcastTxAsync };
          return this.doCall(
            n,
            this.p.encodeBroadcastTx,
            this.r.decodeBroadcastTxAsync,
          );
        }
        async broadcastTxCommit(t) {
          const n = { params: t, method: d.Method.BroadcastTxCommit };
          return this.doCall(
            n,
            this.p.encodeBroadcastTx,
            this.r.decodeBroadcastTxCommit,
          );
        }
        async commit(t) {
          const n = { method: d.Method.Commit, params: { height: t } };
          return this.doCall(n, this.p.encodeCommit, this.r.decodeCommit);
        }
        async genesis() {
          const t = { method: d.Method.Genesis };
          return this.doCall(t, this.p.encodeGenesis, this.r.decodeGenesis);
        }
        async health() {
          const t = { method: d.Method.Health };
          return this.doCall(t, this.p.encodeHealth, this.r.decodeHealth);
        }
        async status() {
          const t = { method: d.Method.Status };
          return this.doCall(t, this.p.encodeStatus, this.r.decodeStatus);
        }
        subscribeNewBlock() {
          const t = {
            method: d.Method.Subscribe,
            query: { type: d.SubscriptionEventType.NewBlock },
          };
          return this.subscribe(t, this.r.decodeNewBlockEvent);
        }
        subscribeNewBlockHeader() {
          const t = {
            method: d.Method.Subscribe,
            query: { type: d.SubscriptionEventType.NewBlockHeader },
          };
          return this.subscribe(t, this.r.decodeNewBlockHeaderEvent);
        }
        subscribeTx(t) {
          const n = {
            method: d.Method.Subscribe,
            query: { type: d.SubscriptionEventType.Tx, raw: t },
          };
          return this.subscribe(n, this.r.decodeTxEvent);
        }
        async tx(t) {
          const n = { params: t, method: d.Method.Tx };
          return this.doCall(n, this.p.encodeTx, this.r.decodeTx);
        }
        async txSearch(t) {
          const n = { params: t, method: d.Method.TxSearch };
          return this.doCall(n, this.p.encodeTxSearch, this.r.decodeTxSearch);
        }
        async txSearchAll(t) {
          let n = t.page || 1;
          const r = [];
          let s = !1;
          while (!s) {
            const o = await this.txSearch(
              Object.assign(Object.assign({}, t), { page: n }),
            );
            (r.push(...o.txs), r.length < o.totalCount ? n++ : (s = !0));
          }
          return { totalCount: r.length, txs: r };
        }
        async validators(t) {
          const n = { method: d.Method.Validators, params: t };
          return this.doCall(
            n,
            this.p.encodeValidators,
            this.r.decodeValidators,
          );
        }
        async validatorsAll(t) {
          const n = [];
          let r = 1,
            s = !1,
            o = t;
          while (!s) {
            const t = await this.validators({
              per_page: 50,
              height: o,
              page: r,
            });
            (n.push(...t.validators),
              (o = o || t.blockHeight),
              n.length < t.total ? r++ : (s = !0));
          }
          return {
            blockHeight: null !== o && void 0 !== o ? o : 0,
            count: n.length,
            total: n.length,
            validators: n,
          };
        }
        async doCall(t, n, r) {
          const s = n(t),
            o = await this.client.execute(s);
          return r(o);
        }
        subscribe(t, n) {
          if (!c.instanceOfRpcStreamingClient(this.client))
            throw new Error("This RPC client type cannot subscribe to events");
          const r = this.p.encodeSubscribe(t),
            s = this.client.listen(r);
          return s.map((t) => n(t));
        }
      }
      n.Tendermint34Client = Tendermint34Client;
    },
    4462: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.adaptor34 = void 0));
      const s = r(3586),
        o = r(4463),
        i = r(4464);
      n.adaptor34 = {
        params: o.Params,
        responses: i.Responses,
        hashTx: s.hashTx,
        hashBlock: s.hashBlock,
      };
    },
    4463: function (t, n, r) {
      "use strict";
      var s =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, n, r, s) {
                (void 0 === s && (s = r),
                  Object.defineProperty(t, s, {
                    enumerable: !0,
                    get: function () {
                      return n[r];
                    },
                  }));
              }
            : function (t, n, r, s) {
                (void 0 === s && (s = r), (t[s] = n[r]));
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, n) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: n,
                });
              }
            : function (t, n) {
                t["default"] = n;
              }),
        i =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var n = {};
            if (null != t)
              for (var r in t)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(t, r) &&
                  s(n, t, r);
            return (o(n, t), n);
          };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Params = void 0));
      const a = r(2762),
        c = r(3155),
        u = r(3333),
        d = i(r(3334));
      function l(t) {
        return { height: u.may(u.Integer.encode, t.height) };
      }
      function h(t) {
        return {
          minHeight: u.may(u.Integer.encode, t.minHeight),
          maxHeight: u.may(u.Integer.encode, t.maxHeight),
        };
      }
      function p(t) {
        return {
          query: t.query,
          page: u.may(u.Integer.encode, t.page),
          per_page: u.may(u.Integer.encode, t.per_page),
          order_by: t.order_by,
        };
      }
      function m(t) {
        return {
          path: u.assertNotEmpty(t.path),
          data: a.toHex(t.data),
          height: u.may(u.Integer.encode, t.height),
          prove: t.prove,
        };
      }
      function f(t) {
        return { tx: a.toBase64(u.assertNotEmpty(t.tx)) };
      }
      function g(t) {
        return { hash: a.toBase64(u.assertNotEmpty(t.hash)), prove: t.prove };
      }
      function y(t) {
        return {
          query: t.query,
          prove: t.prove,
          page: u.may(u.Integer.encode, t.page),
          per_page: u.may(u.Integer.encode, t.per_page),
          order_by: t.order_by,
        };
      }
      function b(t) {
        return {
          height: u.may(u.Integer.encode, t.height),
          page: u.may(u.Integer.encode, t.page),
          per_page: u.may(u.Integer.encode, t.per_page),
        };
      }
      class Params {
        static encodeAbciInfo(t) {
          return c.createJsonRpcRequest(t.method);
        }
        static encodeAbciQuery(t) {
          return c.createJsonRpcRequest(t.method, m(t.params));
        }
        static encodeBlock(t) {
          return c.createJsonRpcRequest(t.method, l(t.params));
        }
        static encodeBlockchain(t) {
          return c.createJsonRpcRequest(t.method, h(t.params));
        }
        static encodeBlockResults(t) {
          return c.createJsonRpcRequest(t.method, l(t.params));
        }
        static encodeBlockSearch(t) {
          return c.createJsonRpcRequest(t.method, p(t.params));
        }
        static encodeBroadcastTx(t) {
          return c.createJsonRpcRequest(t.method, f(t.params));
        }
        static encodeCommit(t) {
          return c.createJsonRpcRequest(t.method, l(t.params));
        }
        static encodeGenesis(t) {
          return c.createJsonRpcRequest(t.method);
        }
        static encodeHealth(t) {
          return c.createJsonRpcRequest(t.method);
        }
        static encodeStatus(t) {
          return c.createJsonRpcRequest(t.method);
        }
        static encodeSubscribe(t) {
          const n = { key: "tm.event", value: t.query.type },
            r = d.buildQuery({ tags: [n], raw: t.query.raw });
          return c.createJsonRpcRequest("subscribe", { query: r });
        }
        static encodeTx(t) {
          return c.createJsonRpcRequest(t.method, g(t.params));
        }
        static encodeTxSearch(t) {
          return c.createJsonRpcRequest(t.method, y(t.params));
        }
        static encodeValidators(t) {
          return c.createJsonRpcRequest(t.method, b(t.params));
        }
      }
      n.Params = Params;
    },
    4464: function (t, n, r) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.Responses = void 0));
      const s = r(2762),
        o = r(2815),
        i = r(3327),
        a = r(3330),
        c = r(3333),
        u = r(3586);
      function d(t) {
        return {
          data: t.data,
          lastBlockHeight: c.may(c.Integer.parse, t.last_block_height),
          lastBlockAppHash: c.may(s.fromBase64, t.last_block_app_hash),
        };
      }
      function l(t) {
        return {
          ops: t.ops.map((t) => ({
            type: t.type,
            key: s.fromBase64(t.key),
            data: s.fromBase64(t.data),
          })),
        };
      }
      function h(t) {
        return {
          key: s.fromBase64(c.optional(t.key, "")),
          value: s.fromBase64(c.optional(t.value, "")),
          proof: c.may(l, t.proofOps),
          height: c.may(c.Integer.parse, t.height),
          code: c.may(c.Integer.parse, t.code),
          index: c.may(c.Integer.parse, t.index),
          log: t.log,
        };
      }
      function p(t) {
        return {
          key: s.fromBase64(c.assertNotEmpty(t.key)),
          value: s.fromBase64(c.optional(t.value, "")),
        };
      }
      function m(t) {
        return c.assertArray(t).map(p);
      }
      function f(t) {
        return { type: t.type, attributes: m(t.attributes) };
      }
      function g(t) {
        return c.assertArray(t).map(f);
      }
      function y(t) {
        return {
          code: c.Integer.parse(c.assertNumber(c.optional(t.code, 0))),
          codeSpace: t.codespace,
          log: t.log,
          data: c.may(s.fromBase64, t.data),
          events: t.events ? g(t.events) : [],
          gasWanted: c.Integer.parse(c.optional(t.gas_wanted, "0")),
          gasUsed: c.Integer.parse(c.optional(t.gas_used, "0")),
        };
      }
      function b(t) {
        switch (t.type) {
          case "tendermint/PubKeyEd25519":
            return {
              algorithm: "ed25519",
              data: s.fromBase64(c.assertNotEmpty(t.value)),
            };
          case "tendermint/PubKeySecp256k1":
            return {
              algorithm: "secp256k1",
              data: s.fromBase64(c.assertNotEmpty(t.value)),
            };
          default:
            throw new Error("unknown pubkey type: " + t.type);
        }
      }
      function v(t) {
        return {
          pubkey: b(c.assertObject(t.pub_key)),
          votingPower: c.Integer.parse(c.assertNotEmpty(t.voting_power)),
          address: s.fromHex(c.assertNotEmpty(t.address)),
          proposerPriority: c.Integer.parse(t.proposer_priority),
        };
      }
      function w(t) {
        return {
          maxBytes: c.Integer.parse(c.assertNotEmpty(t.max_bytes)),
          maxGas: c.Integer.parse(c.assertNotEmpty(t.max_gas)),
        };
      }
      function k(t) {
        return {
          maxAgeNumBlocks: c.Integer.parse(
            c.assertNotEmpty(t.max_age_num_blocks),
          ),
          maxAgeDuration: c.Integer.parse(c.assertNotEmpty(t.max_age_duration)),
        };
      }
      function S(t) {
        return {
          block: w(c.assertObject(t.block)),
          evidence: k(c.assertObject(t.evidence)),
        };
      }
      function A(t) {
        return {
          height: c.Integer.parse(c.assertNotEmpty(t.height)),
          results: (t.txs_results || []).map(y),
          validatorUpdates: (t.validator_updates || []).map(v),
          consensusUpdates: c.may(S, t.consensus_param_updates),
          beginBlockEvents: g(t.begin_block_events || []),
          endBlockEvents: g(t.end_block_events || []),
        };
      }
      function _(t) {
        return {
          hash: s.fromHex(c.assertNotEmpty(t.hash)),
          parts: {
            total: c.assertNotEmpty(t.parts.total),
            hash: s.fromHex(c.assertNotEmpty(t.parts.hash)),
          },
        };
      }
      function M(t) {
        var n;
        return {
          block: c.Integer.parse(t.block),
          app: c.Integer.parse(null !== (n = t.app) && void 0 !== n ? n : 0),
        };
      }
      function P(t) {
        return {
          version: M(t.version),
          chainId: c.assertNotEmpty(t.chain_id),
          height: c.Integer.parse(c.assertNotEmpty(t.height)),
          time: i.fromRfc3339WithNanoseconds(c.assertNotEmpty(t.time)),
          lastBlockId: t.last_block_id.hash ? _(t.last_block_id) : null,
          lastCommitHash: s.fromHex(c.assertSet(t.last_commit_hash)),
          dataHash: s.fromHex(c.assertSet(t.data_hash)),
          validatorsHash: s.fromHex(c.assertSet(t.validators_hash)),
          nextValidatorsHash: s.fromHex(c.assertSet(t.next_validators_hash)),
          consensusHash: s.fromHex(c.assertSet(t.consensus_hash)),
          appHash: s.fromHex(c.assertSet(t.app_hash)),
          lastResultsHash: s.fromHex(c.assertSet(t.last_results_hash)),
          evidenceHash: s.fromHex(c.assertSet(t.evidence_hash)),
          proposerAddress: s.fromHex(c.assertNotEmpty(t.proposer_address)),
        };
      }
      function x(t) {
        return {
          blockId: _(t.block_id),
          blockSize: c.Integer.parse(c.assertNotEmpty(t.block_size)),
          header: P(t.header),
          numTxs: c.Integer.parse(c.assertNotEmpty(t.num_txs)),
        };
      }
      function E(t) {
        return {
          lastHeight: c.Integer.parse(c.assertNotEmpty(t.last_height)),
          blockMetas: c.assertArray(t.block_metas).map(x),
        };
      }
      function C(t) {
        return Object.assign(Object.assign({}, y(t)), {
          hash: s.fromHex(c.assertNotEmpty(t.hash)),
        });
      }
      function T(t) {
        return {
          height: c.Integer.parse(t.height),
          hash: s.fromHex(c.assertNotEmpty(t.hash)),
          checkTx: y(c.assertObject(t.check_tx)),
          deliverTx: c.may(y, t.deliver_tx),
        };
      }
      function O(t) {
        return (o.assert(t in a.BlockIdFlag), t);
      }
      function j(t) {
        const n = t && !t.startsWith("0001-01-01");
        return n ? i.fromRfc3339WithNanoseconds(t) : void 0;
      }
      function B(t) {
        return {
          blockIdFlag: O(t.block_id_flag),
          validatorAddress: t.validator_address
            ? s.fromHex(t.validator_address)
            : void 0,
          timestamp: j(t.timestamp),
          signature: t.signature ? s.fromBase64(t.signature) : void 0,
        };
      }
      function I(t) {
        return {
          blockId: _(c.assertObject(t.block_id)),
          height: c.Integer.parse(c.assertNotEmpty(t.height)),
          round: c.Integer.parse(t.round),
          signatures: c.assertArray(t.signatures).map(B),
        };
      }
      function N(t) {
        return {
          canonical: c.assertBoolean(t.canonical),
          header: P(t.signed_header.header),
          commit: I(t.signed_header.commit),
        };
      }
      function R(t) {
        return {
          address: s.fromHex(c.assertNotEmpty(t.address)),
          pubkey: b(c.assertObject(t.pub_key)),
          votingPower: c.Integer.parse(c.assertNotEmpty(t.power)),
        };
      }
      function D(t) {
        return {
          genesisTime: i.fromRfc3339WithNanoseconds(
            c.assertNotEmpty(t.genesis_time),
          ),
          chainId: c.assertNotEmpty(t.chain_id),
          consensusParams: S(t.consensus_params),
          validators: t.validators ? c.assertArray(t.validators).map(R) : [],
          appHash: s.fromHex(c.assertSet(t.app_hash)),
          appState: t.app_state,
        };
      }
      function H(t) {
        return {
          pubkey: b(c.assertObject(t.pub_key)),
          votingPower: c.Integer.parse(c.assertNotEmpty(t.voting_power)),
          address: s.fromHex(c.assertNotEmpty(t.address)),
        };
      }
      function U(t) {
        return {
          id: s.fromHex(c.assertNotEmpty(t.id)),
          listenAddr: c.assertNotEmpty(t.listen_addr),
          network: c.assertNotEmpty(t.network),
          version: c.assertString(t.version),
          channels: c.assertNotEmpty(t.channels),
          moniker: c.assertNotEmpty(t.moniker),
          other: c.dictionaryToStringMap(t.other),
          protocolVersion: {
            app: c.Integer.parse(c.assertNotEmpty(t.protocol_version.app)),
            block: c.Integer.parse(c.assertNotEmpty(t.protocol_version.block)),
            p2p: c.Integer.parse(c.assertNotEmpty(t.protocol_version.p2p)),
          },
        };
      }
      function V(t) {
        return {
          latestBlockHash: s.fromHex(c.assertNotEmpty(t.latest_block_hash)),
          latestAppHash: s.fromHex(c.assertNotEmpty(t.latest_app_hash)),
          latestBlockTime: i.fromRfc3339WithNanoseconds(
            c.assertNotEmpty(t.latest_block_time),
          ),
          latestBlockHeight: c.Integer.parse(
            c.assertNotEmpty(t.latest_block_height),
          ),
          catchingUp: c.assertBoolean(t.catching_up),
        };
      }
      function q(t) {
        return {
          nodeInfo: U(t.node_info),
          syncInfo: V(t.sync_info),
          validatorInfo: H(t.validator_info),
        };
      }
      function Q(t) {
        return {
          data: s.fromBase64(c.assertNotEmpty(t.data)),
          rootHash: s.fromHex(c.assertNotEmpty(t.root_hash)),
          proof: {
            total: c.Integer.parse(c.assertNotEmpty(t.proof.total)),
            index: c.Integer.parse(c.assertNotEmpty(t.proof.index)),
            leafHash: s.fromBase64(c.assertNotEmpty(t.proof.leaf_hash)),
            aunts: c.assertArray(t.proof.aunts).map(s.fromBase64),
          },
        };
      }
      function W(t) {
        return {
          tx: s.fromBase64(c.assertNotEmpty(t.tx)),
          result: y(c.assertObject(t.tx_result)),
          height: c.Integer.parse(c.assertNotEmpty(t.height)),
          index: c.Integer.parse(c.assertNumber(t.index)),
          hash: s.fromHex(c.assertNotEmpty(t.hash)),
          proof: c.may(Q, t.proof),
        };
      }
      function L(t) {
        return {
          totalCount: c.Integer.parse(c.assertNotEmpty(t.total_count)),
          txs: c.assertArray(t.txs).map(W),
        };
      }
      function F(t) {
        const n = s.fromBase64(c.assertNotEmpty(t.tx));
        return {
          tx: n,
          hash: u.hashTx(n),
          result: y(t.result),
          height: c.Integer.parse(c.assertNotEmpty(t.height)),
          index: c.may(c.Integer.parse, t.index),
        };
      }
      function $(t) {
        return {
          blockHeight: c.Integer.parse(c.assertNotEmpty(t.block_height)),
          validators: c.assertArray(t.validators).map(v),
          count: c.Integer.parse(c.assertNotEmpty(t.count)),
          total: c.Integer.parse(c.assertNotEmpty(t.total)),
        };
      }
      function J(t) {
        return {
          type: c.assertNotEmpty(t.type),
          height: c.Integer.parse(c.assertNotEmpty(t.height)),
          time: c.Integer.parse(c.assertNotEmpty(t.time)),
          totalVotingPower: c.Integer.parse(
            c.assertNotEmpty(t.totalVotingPower),
          ),
          validator: v(t.validator),
        };
      }
      function G(t) {
        return c.assertArray(t).map(J);
      }
      function K(t) {
        return {
          header: P(c.assertObject(t.header)),
          lastCommit: t.last_commit.block_id.hash
            ? I(c.assertObject(t.last_commit))
            : null,
          txs: t.data.txs ? c.assertArray(t.data.txs).map(s.fromBase64) : [],
          evidence: t.evidence && c.may(G, t.evidence.evidence),
        };
      }
      function z(t) {
        return { blockId: _(t.block_id), block: K(t.block) };
      }
      function Z(t) {
        return {
          totalCount: c.Integer.parse(c.assertNotEmpty(t.total_count)),
          blocks: c.assertArray(t.blocks).map(z),
        };
      }
      class Responses {
        static decodeAbciInfo(t) {
          return d(c.assertObject(t.result.response));
        }
        static decodeAbciQuery(t) {
          return h(c.assertObject(t.result.response));
        }
        static decodeBlock(t) {
          return z(t.result);
        }
        static decodeBlockResults(t) {
          return A(t.result);
        }
        static decodeBlockSearch(t) {
          return Z(t.result);
        }
        static decodeBlockchain(t) {
          return E(t.result);
        }
        static decodeBroadcastTxSync(t) {
          return C(t.result);
        }
        static decodeBroadcastTxAsync(t) {
          return this.decodeBroadcastTxSync(t);
        }
        static decodeBroadcastTxCommit(t) {
          return T(t.result);
        }
        static decodeCommit(t) {
          return N(t.result);
        }
        static decodeGenesis(t) {
          return D(c.assertObject(t.result.genesis));
        }
        static decodeHealth() {
          return null;
        }
        static decodeStatus(t) {
          return q(t.result);
        }
        static decodeNewBlockEvent(t) {
          return K(t.data.value.block);
        }
        static decodeNewBlockHeaderEvent(t) {
          return P(t.data.value.header);
        }
        static decodeTxEvent(t) {
          return F(t.data.value.TxResult);
        }
        static decodeTx(t) {
          return W(t.result);
        }
        static decodeTxSearch(t) {
          return L(t.result);
        }
        static decodeValidators(t) {
          return $(t.result);
        }
      }
      n.Responses = Responses;
    },
    4465: function (t, n, r) {
      "use strict";
      function s(t) {
        return 0 === t.code;
      }
      function o(t) {
        return 0 === t.checkTx.code && !!t.deliverTx && 0 === t.deliverTx.code;
      }
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.VoteType =
          n.broadcastTxCommitSuccess =
          n.broadcastTxSyncSuccess =
            void 0),
        (n.broadcastTxSyncSuccess = s),
        (n.broadcastTxCommitSuccess = o),
        (function (t) {
          ((t[(t["PreVote"] = 1)] = "PreVote"),
            (t[(t["PreCommit"] = 2)] = "PreCommit"));
        })(n.VoteType || (n.VoteType = {})));
    },
    4466: function (t, n, r) {
      "use strict";
      var s =
        (this && this.__importDefault) ||
        function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.SigningStargateClient = n.defaultRegistryTypes = void 0));
      const o = r(2910),
        i = r(2762),
        a = r(2796),
        c = r(2968),
        u = r(3577),
        d = r(2815),
        l = r(3378),
        h = r(4467),
        p = r(4468),
        m = r(4469),
        f = r(3063),
        g = r(2937),
        y = r(4470),
        b = r(4471),
        v = r(4472),
        w = r(4473),
        k = s(r(2754)),
        S = r(3562),
        A = r(3576);
      function _() {
        return new c.Registry(n.defaultRegistryTypes);
      }
      n.defaultRegistryTypes = [
        ["/cosmos.bank.v1beta1.MsgMultiSend", l.MsgMultiSend],
        [
          "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
          h.MsgFundCommunityPool,
        ],
        [
          "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
          h.MsgSetWithdrawAddress,
        ],
        [
          "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
          h.MsgWithdrawDelegatorReward,
        ],
        [
          "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
          h.MsgWithdrawValidatorCommission,
        ],
        ["/cosmos.gov.v1beta1.MsgDeposit", p.MsgDeposit],
        ["/cosmos.gov.v1beta1.MsgSubmitProposal", p.MsgSubmitProposal],
        ["/cosmos.gov.v1beta1.MsgVote", p.MsgVote],
        ["/cosmos.staking.v1beta1.MsgBeginRedelegate", m.MsgBeginRedelegate],
        ["/cosmos.staking.v1beta1.MsgCreateValidator", m.MsgCreateValidator],
        ["/cosmos.staking.v1beta1.MsgDelegate", m.MsgDelegate],
        ["/cosmos.staking.v1beta1.MsgEditValidator", m.MsgEditValidator],
        ["/cosmos.staking.v1beta1.MsgUndelegate", m.MsgUndelegate],
        ["/ibc.core.channel.v1.MsgChannelOpenInit", b.MsgChannelOpenInit],
        ["/ibc.core.channel.v1.MsgChannelOpenTry", b.MsgChannelOpenTry],
        ["/ibc.core.channel.v1.MsgChannelOpenAck", b.MsgChannelOpenAck],
        ["/ibc.core.channel.v1.MsgChannelOpenConfirm", b.MsgChannelOpenConfirm],
        ["/ibc.core.channel.v1.MsgChannelCloseInit", b.MsgChannelCloseInit],
        [
          "/ibc.core.channel.v1.MsgChannelCloseConfirm",
          b.MsgChannelCloseConfirm,
        ],
        ["/ibc.core.channel.v1.MsgRecvPacket", b.MsgRecvPacket],
        ["/ibc.core.channel.v1.MsgTimeout ", b.MsgTimeout],
        ["/ibc.core.channel.v1.MsgTimeoutOnClose", b.MsgTimeoutOnClose],
        ["/ibc.core.channel.v1.MsgAcknowledgement", b.MsgAcknowledgement],
        ["/ibc.core.client.v1.MsgCreateClient", v.MsgCreateClient],
        ["/ibc.core.client.v1.MsgUpdateClient", v.MsgUpdateClient],
        ["/ibc.core.client.v1.MsgUpgradeClient", v.MsgUpgradeClient],
        ["/ibc.core.client.v1.MsgSubmitMisbehaviour", v.MsgSubmitMisbehaviour],
        [
          "/ibc.core.connection.v1.MsgConnectionOpenInit",
          w.MsgConnectionOpenInit,
        ],
        [
          "/ibc.core.connection.v1.MsgConnectionOpenTry",
          w.MsgConnectionOpenTry,
        ],
        [
          "/ibc.core.connection.v1.MsgConnectionOpenAck",
          w.MsgConnectionOpenAck,
        ],
        [
          "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
          w.MsgConnectionOpenConfirm,
        ],
        ["/ibc.applications.transfer.v1.MsgTransfer", y.MsgTransfer],
      ];
      class SigningStargateClient extends A.StargateClient {
        constructor(t, n, r) {
          super(t);
          const {
            registry: s = _(),
            aminoTypes: o = new S.AminoTypes({ prefix: r.prefix }),
          } = r;
          ((this.registry = s),
            (this.aminoTypes = o),
            (this.signer = n),
            (this.broadcastTimeoutMs = r.broadcastTimeoutMs),
            (this.broadcastPollIntervalMs = r.broadcastPollIntervalMs));
        }
        static async connectWithSigner(t, n, r) {
          void 0 === r && (r = {});
          const s = await u.Tendermint34Client.connect(t);
          return new SigningStargateClient(s, n, r);
        }
        static async offline(t, n) {
          return (
            void 0 === n && (n = {}),
            new SigningStargateClient(void 0, t, n)
          );
        }
        async sendTokens(t, n, r, s, o) {
          void 0 === o && (o = "");
          const i = {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: { fromAddress: t, toAddress: n, amount: [...r] },
          };
          return this.signAndBroadcast(t, [i], s, o);
        }
        async delegateTokens(t, n, r, s, o) {
          void 0 === o && (o = "");
          const i = {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
            value: m.MsgDelegate.fromPartial({
              delegatorAddress: t,
              validatorAddress: n,
              amount: r,
            }),
          };
          return this.signAndBroadcast(t, [i], s, o);
        }
        async undelegateTokens(t, n, r, s, o) {
          void 0 === o && (o = "");
          const i = {
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
            value: m.MsgUndelegate.fromPartial({
              delegatorAddress: t,
              validatorAddress: n,
              amount: r,
            }),
          };
          return this.signAndBroadcast(t, [i], s, o);
        }
        async withdrawRewards(t, n, r, s) {
          void 0 === s && (s = "");
          const o = {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: h.MsgWithdrawDelegatorReward.fromPartial({
              delegatorAddress: t,
              validatorAddress: n,
            }),
          };
          return this.signAndBroadcast(t, [o], r, s);
        }
        async sendIbcTokens(t, n, r, s, o, i, a, c, u) {
          void 0 === u && (u = "");
          const d = a ? k.default.fromNumber(a).multiply(1e9) : void 0,
            l = {
              typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
              value: y.MsgTransfer.fromPartial({
                sourcePort: s,
                sourceChannel: o,
                sender: t,
                receiver: n,
                token: r,
                timeoutHeight: i,
                timeoutTimestamp: d,
              }),
            };
          return this.signAndBroadcast(t, [l], c, u);
        }
        async signAndBroadcast(t, n, r, s) {
          void 0 === s && (s = "");
          const o = await this.sign(t, n, r, s),
            i = g.TxRaw.encode(o).finish();
          return this.broadcastTx(
            i,
            this.broadcastTimeoutMs,
            this.broadcastPollIntervalMs,
          );
        }
        async sign(t, n, r, s, o) {
          let i;
          if (o) i = o;
          else {
            const { accountNumber: n, sequence: r } = await this.getSequence(t),
              s = await this.getChainId();
            i = { accountNumber: n, sequence: r, chainId: s };
          }
          return c.isOfflineDirectSigner(this.signer)
            ? this.signDirect(t, n, r, s, i)
            : this.signAmino(t, n, r, s, i);
        }
        async signAmino(t, n, r, s, u) {
          let { accountNumber: l, sequence: h, chainId: p } = u;
          d.assert(!c.isOfflineDirectSigner(this.signer));
          const m = (await this.signer.getAccounts()).find(
            (n) => n.address === t,
          );
          if (!m) throw new Error("Failed to retrieve account from signer");
          const y = c.encodePubkey(o.encodeSecp256k1Pubkey(m.pubkey)),
            b = f.SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
            v = n.map((t) => this.aminoTypes.toAmino(t)),
            w = o.makeSignDoc(v, r, p, s, l, h),
            { signature: k, signed: S } = await this.signer.signAmino(t, w),
            A = {
              messages: S.msgs.map((t) => this.aminoTypes.fromAmino(t)),
              memo: S.memo,
            },
            _ = { typeUrl: "/cosmos.tx.v1beta1.TxBody", value: A },
            M = this.registry.encode(_),
            P = a.Int53.fromString(S.fee.gas).toNumber(),
            x = a.Int53.fromString(S.sequence).toNumber(),
            E = c.makeAuthInfoBytes(
              [{ pubkey: y, sequence: x }],
              S.fee.amount,
              P,
              b,
            );
          return g.TxRaw.fromPartial({
            bodyBytes: M,
            authInfoBytes: E,
            signatures: [i.fromBase64(k.signature)],
          });
        }
        async signDirect(t, n, r, s, u) {
          let { accountNumber: l, sequence: h, chainId: p } = u;
          d.assert(c.isOfflineDirectSigner(this.signer));
          const m = (await this.signer.getAccounts()).find(
            (n) => n.address === t,
          );
          if (!m) throw new Error("Failed to retrieve account from signer");
          const f = c.encodePubkey(o.encodeSecp256k1Pubkey(m.pubkey)),
            y = {
              typeUrl: "/cosmos.tx.v1beta1.TxBody",
              value: { messages: n, memo: s },
            },
            b = this.registry.encode(y),
            v = a.Int53.fromString(r.gas).toNumber(),
            w = c.makeAuthInfoBytes([{ pubkey: f, sequence: h }], r.amount, v),
            k = c.makeSignDoc(b, w, p, l),
            { signature: S, signed: A } = await this.signer.signDirect(t, k);
          return g.TxRaw.fromPartial({
            bodyBytes: A.bodyBytes,
            authInfoBytes: A.authInfoBytes,
            signatures: [i.fromBase64(S.signature)],
          });
        }
      }
      n.SigningStargateClient = SigningStargateClient;
    },
  },
]);
