(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [171],
  {
    2826: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.proto = r.google = r.com = r.Writer = r.Reader = void 0));
      var i = l(a(6090)),
        o = n(a(2754)),
        s = l(a(7880));
      function l(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (l = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      (() => {
        var t = i.util;
        null == t.Long &&
          (console.log("Patching Protobuf Long.js instance..."),
          (t.Long = o.default),
          null != i.Reader._configure && i.Reader._configure(i.BufferReader));
      })();
      ((r.Reader = i.Reader),
        (r.Writer = i.Writer),
        (r.proto = s.proto),
        (r.com = s.com),
        (r.google = s.google));
    },
    3021: function (t, r, a) {
      "use strict";
      function n(t, r) {
        var a = new Array(arguments.length - 1),
          n = 0,
          i = 2,
          o = !0;
        while (i < arguments.length) a[n++] = arguments[i++];
        return new Promise(function (i, s) {
          a[n] = function (t) {
            if (o)
              if (((o = !1), t)) s(t);
              else {
                var r = new Array(arguments.length - 1),
                  a = 0;
                while (a < r.length) r[a++] = arguments[a];
                i.apply(null, r);
              }
          };
          try {
            t.apply(r || null, a);
          } catch (l) {
            o && ((o = !1), s(l));
          }
        });
      }
      t.exports = n;
    },
    3022: function (t, r, a) {
      "use strict";
      var n = r;
      n.length = function (t) {
        var r = t.length;
        if (!r) return 0;
        var a = 0;
        while (--r % 4 > 1 && "=" === t.charAt(r)) ++a;
        return Math.ceil(3 * t.length) / 4 - a;
      };
      for (var i = new Array(64), o = new Array(123), s = 0; s < 64; )
        o[
          (i[s] =
            s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : (s - 59) | 43)
        ] = s++;
      n.encode = function (t, r, a) {
        var n,
          o = null,
          s = [],
          l = 0,
          u = 0;
        while (r < a) {
          var c = t[r++];
          switch (u) {
            case 0:
              ((s[l++] = i[c >> 2]), (n = (3 & c) << 4), (u = 1));
              break;
            case 1:
              ((s[l++] = i[n | (c >> 4)]), (n = (15 & c) << 2), (u = 2));
              break;
            case 2:
              ((s[l++] = i[n | (c >> 6)]), (s[l++] = i[63 & c]), (u = 0));
              break;
          }
          l > 8191 &&
            ((o || (o = [])).push(String.fromCharCode.apply(String, s)),
            (l = 0));
        }
        return (
          u && ((s[l++] = i[n]), (s[l++] = 61), 1 === u && (s[l++] = 61)),
          o
            ? (l && o.push(String.fromCharCode.apply(String, s.slice(0, l))),
              o.join(""))
            : String.fromCharCode.apply(String, s.slice(0, l))
        );
      };
      var l = "invalid encoding";
      ((n.decode = function (t, r, a) {
        for (var n, i = a, s = 0, u = 0; u < t.length; ) {
          var c = t.charCodeAt(u++);
          if (61 === c && s > 1) break;
          if (void 0 === (c = o[c])) throw Error(l);
          switch (s) {
            case 0:
              ((n = c), (s = 1));
              break;
            case 1:
              ((r[a++] = (n << 2) | ((48 & c) >> 4)), (n = c), (s = 2));
              break;
            case 2:
              ((r[a++] = ((15 & n) << 4) | ((60 & c) >> 2)), (n = c), (s = 3));
              break;
            case 3:
              ((r[a++] = ((3 & n) << 6) | c), (s = 0));
              break;
          }
        }
        if (1 === s) throw Error(l);
        return a - i;
      }),
        (n.test = function (t) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
            t,
          );
        }));
    },
    3023: function (t, r, a) {
      "use strict";
      function n() {
        this._listeners = {};
      }
      ((t.exports = n),
        (n.prototype.on = function (t, r, a) {
          return (
            (this._listeners[t] || (this._listeners[t] = [])).push({
              fn: r,
              ctx: a || this,
            }),
            this
          );
        }),
        (n.prototype.off = function (t, r) {
          if (void 0 === t) this._listeners = {};
          else if (void 0 === r) this._listeners[t] = [];
          else
            for (var a = this._listeners[t], n = 0; n < a.length; )
              a[n].fn === r ? a.splice(n, 1) : ++n;
          return this;
        }),
        (n.prototype.emit = function (t) {
          var r = this._listeners[t];
          if (r) {
            for (var a = [], n = 1; n < arguments.length; )
              a.push(arguments[n++]);
            for (n = 0; n < r.length; ) r[n].fn.apply(r[n++].ctx, a);
          }
          return this;
        }));
    },
    3024: function (t, r, a) {
      "use strict";
      function n(t) {
        return (
          "undefined" !== typeof Float32Array
            ? (function () {
                var r = new Float32Array([-0]),
                  a = new Uint8Array(r.buffer),
                  n = 128 === a[3];
                function i(t, n, i) {
                  ((r[0] = t),
                    (n[i] = a[0]),
                    (n[i + 1] = a[1]),
                    (n[i + 2] = a[2]),
                    (n[i + 3] = a[3]));
                }
                function o(t, n, i) {
                  ((r[0] = t),
                    (n[i] = a[3]),
                    (n[i + 1] = a[2]),
                    (n[i + 2] = a[1]),
                    (n[i + 3] = a[0]));
                }
                function s(t, n) {
                  return (
                    (a[0] = t[n]),
                    (a[1] = t[n + 1]),
                    (a[2] = t[n + 2]),
                    (a[3] = t[n + 3]),
                    r[0]
                  );
                }
                function l(t, n) {
                  return (
                    (a[3] = t[n]),
                    (a[2] = t[n + 1]),
                    (a[1] = t[n + 2]),
                    (a[0] = t[n + 3]),
                    r[0]
                  );
                }
                ((t.writeFloatLE = n ? i : o),
                  (t.writeFloatBE = n ? o : i),
                  (t.readFloatLE = n ? s : l),
                  (t.readFloatBE = n ? l : s));
              })()
            : (function () {
                function r(t, r, a, n) {
                  var i = r < 0 ? 1 : 0;
                  if ((i && (r = -r), 0 === r))
                    t(1 / r > 0 ? 0 : 2147483648, a, n);
                  else if (isNaN(r)) t(2143289344, a, n);
                  else if (r > 34028234663852886e22)
                    t(((i << 31) | 2139095040) >>> 0, a, n);
                  else if (r < 11754943508222875e-54)
                    t(
                      ((i << 31) | Math.round(r / 1401298464324817e-60)) >>> 0,
                      a,
                      n,
                    );
                  else {
                    var o = Math.floor(Math.log(r) / Math.LN2),
                      s = 8388607 & Math.round(r * Math.pow(2, -o) * 8388608);
                    t(((i << 31) | ((o + 127) << 23) | s) >>> 0, a, n);
                  }
                }
                function a(t, r, a) {
                  var n = t(r, a),
                    i = 2 * (n >> 31) + 1,
                    o = (n >>> 23) & 255,
                    s = 8388607 & n;
                  return 255 === o
                    ? s
                      ? NaN
                      : i * (1 / 0)
                    : 0 === o
                      ? 1401298464324817e-60 * i * s
                      : i * Math.pow(2, o - 150) * (s + 8388608);
                }
                ((t.writeFloatLE = r.bind(null, i)),
                  (t.writeFloatBE = r.bind(null, o)),
                  (t.readFloatLE = a.bind(null, s)),
                  (t.readFloatBE = a.bind(null, l)));
              })(),
          "undefined" !== typeof Float64Array
            ? (function () {
                var r = new Float64Array([-0]),
                  a = new Uint8Array(r.buffer),
                  n = 128 === a[7];
                function i(t, n, i) {
                  ((r[0] = t),
                    (n[i] = a[0]),
                    (n[i + 1] = a[1]),
                    (n[i + 2] = a[2]),
                    (n[i + 3] = a[3]),
                    (n[i + 4] = a[4]),
                    (n[i + 5] = a[5]),
                    (n[i + 6] = a[6]),
                    (n[i + 7] = a[7]));
                }
                function o(t, n, i) {
                  ((r[0] = t),
                    (n[i] = a[7]),
                    (n[i + 1] = a[6]),
                    (n[i + 2] = a[5]),
                    (n[i + 3] = a[4]),
                    (n[i + 4] = a[3]),
                    (n[i + 5] = a[2]),
                    (n[i + 6] = a[1]),
                    (n[i + 7] = a[0]));
                }
                function s(t, n) {
                  return (
                    (a[0] = t[n]),
                    (a[1] = t[n + 1]),
                    (a[2] = t[n + 2]),
                    (a[3] = t[n + 3]),
                    (a[4] = t[n + 4]),
                    (a[5] = t[n + 5]),
                    (a[6] = t[n + 6]),
                    (a[7] = t[n + 7]),
                    r[0]
                  );
                }
                function l(t, n) {
                  return (
                    (a[7] = t[n]),
                    (a[6] = t[n + 1]),
                    (a[5] = t[n + 2]),
                    (a[4] = t[n + 3]),
                    (a[3] = t[n + 4]),
                    (a[2] = t[n + 5]),
                    (a[1] = t[n + 6]),
                    (a[0] = t[n + 7]),
                    r[0]
                  );
                }
                ((t.writeDoubleLE = n ? i : o),
                  (t.writeDoubleBE = n ? o : i),
                  (t.readDoubleLE = n ? s : l),
                  (t.readDoubleBE = n ? l : s));
              })()
            : (function () {
                function r(t, r, a, n, i, o) {
                  var s = n < 0 ? 1 : 0;
                  if ((s && (n = -n), 0 === n))
                    (t(0, i, o + r), t(1 / n > 0 ? 0 : 2147483648, i, o + a));
                  else if (isNaN(n)) (t(0, i, o + r), t(2146959360, i, o + a));
                  else if (n > 17976931348623157e292)
                    (t(0, i, o + r),
                      t(((s << 31) | 2146435072) >>> 0, i, o + a));
                  else {
                    var l;
                    if (n < 22250738585072014e-324)
                      ((l = n / 5e-324),
                        t(l >>> 0, i, o + r),
                        t(((s << 31) | (l / 4294967296)) >>> 0, i, o + a));
                    else {
                      var u = Math.floor(Math.log(n) / Math.LN2);
                      (1024 === u && (u = 1023),
                        (l = n * Math.pow(2, -u)),
                        t((4503599627370496 * l) >>> 0, i, o + r),
                        t(
                          ((s << 31) |
                            ((u + 1023) << 20) |
                            ((1048576 * l) & 1048575)) >>>
                            0,
                          i,
                          o + a,
                        ));
                    }
                  }
                }
                function a(t, r, a, n, i) {
                  var o = t(n, i + r),
                    s = t(n, i + a),
                    l = 2 * (s >> 31) + 1,
                    u = (s >>> 20) & 2047,
                    c = 4294967296 * (1048575 & s) + o;
                  return 2047 === u
                    ? c
                      ? NaN
                      : l * (1 / 0)
                    : 0 === u
                      ? 5e-324 * l * c
                      : l * Math.pow(2, u - 1075) * (c + 4503599627370496);
                }
                ((t.writeDoubleLE = r.bind(null, i, 0, 4)),
                  (t.writeDoubleBE = r.bind(null, o, 4, 0)),
                  (t.readDoubleLE = a.bind(null, s, 0, 4)),
                  (t.readDoubleBE = a.bind(null, l, 4, 0)));
              })(),
          t
        );
      }
      function i(t, r, a) {
        ((r[a] = 255 & t),
          (r[a + 1] = (t >>> 8) & 255),
          (r[a + 2] = (t >>> 16) & 255),
          (r[a + 3] = t >>> 24));
      }
      function o(t, r, a) {
        ((r[a] = t >>> 24),
          (r[a + 1] = (t >>> 16) & 255),
          (r[a + 2] = (t >>> 8) & 255),
          (r[a + 3] = 255 & t));
      }
      function s(t, r) {
        return (
          (t[r] | (t[r + 1] << 8) | (t[r + 2] << 16) | (t[r + 3] << 24)) >>> 0
        );
      }
      function l(t, r) {
        return (
          ((t[r] << 24) | (t[r + 1] << 16) | (t[r + 2] << 8) | t[r + 3]) >>> 0
        );
      }
      t.exports = n(n);
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
    3026: function (t, r, a) {
      "use strict";
      var n = r;
      ((n.length = function (t) {
        for (var r = 0, a = 0, n = 0; n < t.length; ++n)
          ((a = t.charCodeAt(n)),
            a < 128
              ? (r += 1)
              : a < 2048
                ? (r += 2)
                : 55296 === (64512 & a) &&
                    56320 === (64512 & t.charCodeAt(n + 1))
                  ? (++n, (r += 4))
                  : (r += 3));
        return r;
      }),
        (n.read = function (t, r, a) {
          var n = a - r;
          if (n < 1) return "";
          var i,
            o = null,
            s = [],
            l = 0;
          while (r < a)
            ((i = t[r++]),
              i < 128
                ? (s[l++] = i)
                : i > 191 && i < 224
                  ? (s[l++] = ((31 & i) << 6) | (63 & t[r++]))
                  : i > 239 && i < 365
                    ? ((i =
                        (((7 & i) << 18) |
                          ((63 & t[r++]) << 12) |
                          ((63 & t[r++]) << 6) |
                          (63 & t[r++])) -
                        65536),
                      (s[l++] = 55296 + (i >> 10)),
                      (s[l++] = 56320 + (1023 & i)))
                    : (s[l++] =
                        ((15 & i) << 12) |
                        ((63 & t[r++]) << 6) |
                        (63 & t[r++])),
              l > 8191 &&
                ((o || (o = [])).push(String.fromCharCode.apply(String, s)),
                (l = 0)));
          return o
            ? (l && o.push(String.fromCharCode.apply(String, s.slice(0, l))),
              o.join(""))
            : String.fromCharCode.apply(String, s.slice(0, l));
        }),
        (n.write = function (t, r, a) {
          for (var n, i, o = a, s = 0; s < t.length; ++s)
            ((n = t.charCodeAt(s)),
              n < 128
                ? (r[a++] = n)
                : n < 2048
                  ? ((r[a++] = (n >> 6) | 192), (r[a++] = (63 & n) | 128))
                  : 55296 === (64512 & n) &&
                      56320 === (64512 & (i = t.charCodeAt(s + 1)))
                    ? ((n = 65536 + ((1023 & n) << 10) + (1023 & i)),
                      ++s,
                      (r[a++] = (n >> 18) | 240),
                      (r[a++] = ((n >> 12) & 63) | 128),
                      (r[a++] = ((n >> 6) & 63) | 128),
                      (r[a++] = (63 & n) | 128))
                    : ((r[a++] = (n >> 12) | 224),
                      (r[a++] = ((n >> 6) & 63) | 128),
                      (r[a++] = (63 & n) | 128)));
          return a - o;
        }));
    },
    3027: function (t, r, a) {
      "use strict";
      function n(t, r, a) {
        var n = a || 8192,
          i = n >>> 1,
          o = null,
          s = n;
        return function (a) {
          if (a < 1 || a > i) return t(a);
          s + a > n && ((o = t(n)), (s = 0));
          var l = r.call(o, s, (s += a));
          return (7 & s && (s = 1 + (7 | s)), l);
        };
      }
      t.exports = n;
    },
    3293: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.decode = o),
        (r.encode = i),
        (r.hexZeroPadded = s));
      const n = [];
      for (let l = 0; l <= 255; l += 1) n.push(l.toString(16).padStart(2, "0"));
      function i(t) {
        let r = "";
        for (const a of t) r += n[a];
        return r;
      }
      function o(t) {
        const r = t.startsWith("0x") ? t.substring(2) : t,
          a = r.match(/.{1,2}/gu);
        return new Uint8Array((null == a ? [] : a).map((t) => parseInt(t, 16)));
      }
      function s(t, r) {
        const a = "0123456789abcdef";
        let n = "0x";
        for (let i = 0; i < t.length; i++) {
          let r = t[i];
          n += a[(240 & r) >> 4] + a[15 & r];
        }
        n.length > 2 * r + 2 && console.log("result out of range", "result");
        while (n.length < 2 * r + 2) n = "0x0" + n.substring(2);
        return n.substring(2);
      }
    },
    3553: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      class BadKeyError extends Error {
        constructor(t) {
          (super(t instanceof Error ? t.message : t),
            (this.name = "BadKeyError"),
            t instanceof Error && ((this.cause = t), (this.stack = t.stack)));
        }
      }
      r.default = BadKeyError;
    },
    3661: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.HashAlgorithm = void 0),
        (r.hash = o));
      var n = i(a(4670));
      function i(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (i = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      r.HashAlgorithm = {
        Sha256: "SHA-256",
        Sha384: "SHA-384",
        Sha512: "SHA-512",
      };
      async function o(t, r, a) {
        const i = "string" === typeof r ? n.encode(r) : r,
          o = "string" === typeof a ? n.encode(a) : a;
        try {
          const r = await window.crypto.subtle.importKey(
            "raw",
            i,
            { name: "HMAC", hash: t },
            !1,
            ["sign"],
          );
          return new Uint8Array(await window.crypto.subtle.sign("HMAC", r, o));
        } catch {
          throw new Error("Fallback if SubtleCrypto fails is not implemented");
        }
      }
    },
    3662: function (t, r, a) {
      "use strict";
      (function (t) {
        var n = r;
        function i(t, r, a) {
          for (var n = Object.keys(r), i = 0; i < n.length; ++i)
            (void 0 !== t[n[i]] && a) || (t[n[i]] = r[n[i]]);
          return t;
        }
        function o(t) {
          function r(t, a) {
            if (!(this instanceof r)) return new r(t, a);
            (Object.defineProperty(this, "message", {
              get: function () {
                return t;
              },
            }),
              Error.captureStackTrace
                ? Error.captureStackTrace(this, r)
                : Object.defineProperty(this, "stack", {
                    value: new Error().stack || "",
                  }),
              a && i(this, a));
          }
          return (
            (r.prototype = Object.create(Error.prototype, {
              constructor: {
                value: r,
                writable: !0,
                enumerable: !1,
                configurable: !0,
              },
              name: {
                get: function () {
                  return t;
                },
                set: void 0,
                enumerable: !1,
                configurable: !0,
              },
              toString: {
                value: function () {
                  return this.name + ": " + this.message;
                },
                writable: !0,
                enumerable: !1,
                configurable: !0,
              },
            })),
            r
          );
        }
        ((n.asPromise = a(3021)),
          (n.base64 = a(3022)),
          (n.EventEmitter = a(3023)),
          (n.float = a(3024)),
          (n.inquire = a(3025)),
          (n.utf8 = a(3026)),
          (n.pool = a(3027)),
          (n.LongBits = a(7874)),
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
            function (t, r) {
              var a = t[r];
              return (
                !(null == a || !t.hasOwnProperty(r)) &&
                ("object" !== typeof a ||
                  (Array.isArray(a) ? a.length : Object.keys(a).length) > 0)
              );
            }),
          (n.Buffer = (function () {
            try {
              var t = n.inquire("buffer").Buffer;
              return t.prototype.utf8Write ? t : null;
            } catch (r) {
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
          (n.longFromHash = function (t, r) {
            var a = n.LongBits.fromHash(t);
            return n.Long
              ? n.Long.fromBits(a.lo, a.hi, r)
              : a.toNumber(Boolean(r));
          }),
          (n.merge = i),
          (n.lcFirst = function (t) {
            return t.charAt(0).toLowerCase() + t.substring(1);
          }),
          (n.newError = o),
          (n.ProtocolError = o("ProtocolError")),
          (n.oneOfGetter = function (t) {
            for (var r = {}, a = 0; a < t.length; ++a) r[t[a]] = 1;
            return function () {
              for (var t = Object.keys(this), a = t.length - 1; a > -1; --a)
                if (
                  1 === r[t[a]] &&
                  void 0 !== this[t[a]] &&
                  null !== this[t[a]]
                )
                  return t[a];
            };
          }),
          (n.oneOfSetter = function (t) {
            return function (r) {
              for (var a = 0; a < t.length; ++a)
                t[a] !== r && delete this[t[a]];
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
                  function (r, a) {
                    return new t(r, a);
                  }),
                (n._Buffer_allocUnsafe =
                  t.allocUnsafe ||
                  function (r) {
                    return new t(r);
                  }))
              : (n._Buffer_from = n._Buffer_allocUnsafe = null);
          }));
      }).call(this, a(13));
    },
    3897: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      class Key {}
      r.default = Key;
    },
    4665: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "BadKeyError", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(r, "BadMnemonicError", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(r, "BadMnemonicReason", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(r, "HEDERA_PATH", {
          enumerable: !0,
          get: function () {
            return u.HEDERA_PATH;
          },
        }),
        Object.defineProperty(r, "Key", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(r, "KeyList", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(r, "Mnemonic", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(r, "PrivateKey", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(r, "PublicKey", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(r, "SLIP44_ECDSA_ETH_PATH", {
          enumerable: !0,
          get: function () {
            return u.SLIP44_ECDSA_ETH_PATH;
          },
        }),
        Object.defineProperty(r, "SLIP44_ECDSA_HEDERA_PATH", {
          enumerable: !0,
          get: function () {
            return u.SLIP44_ECDSA_HEDERA_PATH;
          },
        }));
      var i = n(a(3897)),
        o = n(a(7844)),
        s = n(a(6063)),
        l = n(a(6080)),
        u = h(a(7866)),
        c = n(a(3553)),
        f = n(a(6083)),
        d = n(a(5006));
      function h(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (h = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
    },
    4666: function (t, r, a) {
      "use strict";
      function n(t, r) {
        if (t === r) return !0;
        if (t.byteLength !== r.byteLength) return !1;
        const a = new DataView(t.buffer, t.byteOffset, t.byteLength),
          n = new DataView(r.buffer, r.byteOffset, r.byteLength);
        let i = t.byteLength;
        while (i--) if (a.getUint8(i) !== n.getUint8(i)) return !1;
        return !0;
      }
      function i(t, r) {
        if (t.byteLength < r.byteLength) return !1;
        let a = r.byteLength;
        while (a--) if (t[a] !== r[a]) return !1;
        return !0;
      }
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.arrayEqual = n),
        (r.arrayStartsWith = i));
    },
    4670: function (t, r, a) {
      "use strict";
      function n(t) {
        return new TextDecoder().decode(t);
      }
      function i(t) {
        return new TextEncoder().encode(t);
      }
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.decode = n),
        (r.encode = i));
    },
    4671: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.derive = h),
        (r.fromSeed = p),
        (r.isHardenedIndex = m),
        (r.toHardenedIndex = y));
      var i = u(a(3661)),
        o = u(a(3293)),
        s = n(a(795)),
        l = n(a(7855));
      function u(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (u = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      const c = new s.default.ec("secp256k1"),
        f = new l.default(
          "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
          "hex",
        ),
        d = 2147483648;
      async function h(t, r, a) {
        const n = m(a),
          s = new Uint8Array(37),
          l = o.decode(c.keyFromPrivate(t).getPublic(!0, "hex"));
        (n ? ((s[0] = 0), s.set(t, 1)) : s.set(l, 0),
          new DataView(s.buffer, s.byteOffset, s.byteLength).setUint32(
            33,
            a,
            !1,
          ));
        const u = await i.hash(i.HashAlgorithm.Sha512, r, s),
          d = u.subarray(0, 32),
          p = u.subarray(32);
        try {
          const n = c
              .keyFromPrivate(t)
              .getPrivate()
              .add(c.keyFromPrivate(d).getPrivate())
              .mod(f),
            i = o.hexZeroPadded(Uint8Array.from(n.toArray()), 32);
          return n.eqn(0)
            ? h(t, r, a + 1)
            : { keyData: o.decode(i), chainCode: p };
        } catch {
          return h(t, r, a + 1);
        }
      }
      async function p(t) {
        if (t.length < 16)
          throw new TypeError("Seed should be at least 128 bits");
        if (t.length > 64)
          throw new TypeError("Seed should be at most 512 bits");
        const r = await i.hash(i.HashAlgorithm.Sha512, "Bitcoin seed", t),
          a = r.subarray(0, 32),
          n = r.subarray(32);
        return { keyData: a, chainCode: n };
      }
      function y(t) {
        return t | d;
      }
      function m(t) {
        return 0 !== (t & d);
      }
    },
    4672: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.fromBytes = d),
        (r.generate = c),
        (r.generateAsync = f),
        (r.getFullPublicKey = h),
        (r.sign = p),
        (r.verify = y));
      var i = a(6079),
        o = l(a(3293)),
        s = n(a(795));
      function l(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (l = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      const u = new s.default.ec("secp256k1");
      function c() {
        const t = u.genKeyPair();
        return {
          privateKey: o.decode(t.getPrivate("hex")),
          publicKey: o.decode(t.getPublic(!0, "hex")),
        };
      }
      async function f() {
        return Promise.resolve(c());
      }
      function d(t) {
        const r = u.keyFromPrivate(t);
        return {
          privateKey: o.decode(r.getPrivate("hex")),
          publicKey: o.decode(r.getPublic(!0, "hex")),
        };
      }
      function h(t) {
        const r = u.keyFromPublic(t);
        return o.decode(r.getPublic(!1, "hex"));
      }
      function p(t, r) {
        const a = o.encode(r),
          n = o.decode((0, i.keccak256)("0x" + a)),
          s = u.keyFromPrivate(t),
          l = s.sign(n),
          c = l.r.toArray("be", 32),
          f = l.s.toArray("be", 32),
          d = new Uint8Array(64);
        return (d.set(c, 0), d.set(f, 32), d);
      }
      function y(t, r, a) {
        const n = o.encode(r),
          s = o.decode((0, i.keccak256)("0x" + n)),
          l = u.keyFromPublic(t);
        return l.verify(s, { r: a.subarray(0, 32), s: a.subarray(32, 64) });
      }
    },
    4673: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.deriveKey = o));
      var n = i(a(4670));
      function i(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (i = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      async function o(t, r, a, i, o) {
        const s = "string" === typeof r ? n.encode(r) : r,
          l = "string" === typeof a ? n.encode(a) : a;
        try {
          const r = await window.crypto.subtle.importKey(
            "raw",
            s,
            { name: "PBKDF2", hash: t },
            !1,
            ["deriveBits"],
          );
          return new Uint8Array(
            await window.crypto.subtle.deriveBits(
              { name: "PBKDF2", hash: t, salt: l, iterations: i },
              r,
              o << 3,
            ),
          );
        } catch {
          throw new Error(
            "(BUG) Non-Exhaustive switch statement for algorithms",
          );
        }
      }
    },
    4994: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.derPrefixBytes = r.derPrefix = r.default = void 0));
      var i = n(a(3553)),
        o = n(a(6064)),
        s = n(a(2925)),
        l = d(a(3293)),
        u = d(a(5002)),
        c = d(a(5003)),
        f = n(a(4995));
      function d(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (d = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      const h = (r.derPrefix = "302e020100300506032b657004220420"),
        p = (r.derPrefixBytes = l.decode(h));
      class Ed25519PrivateKey {
        constructor(t, r) {
          ((this._keyPair =
            t instanceof Uint8Array ? s.default.sign.keyPair.fromSeed(t) : t),
            (this._chainCode = null != r ? r : null));
        }
        get _type() {
          return "ED25519";
        }
        static generate() {
          const t = u.bytes(64);
          return new Ed25519PrivateKey(
            s.default.sign.keyPair.fromSeed(t.subarray(0, 32)),
            t.subarray(32),
          );
        }
        static async generateAsync() {
          const t = await u.bytesAsync(64);
          return new Ed25519PrivateKey(
            s.default.sign.keyPair.fromSeed(t.subarray(0, 32)),
            t.subarray(32),
          );
        }
        static fromBytes(t) {
          switch (t.length) {
            case 48:
              return Ed25519PrivateKey.fromBytesDer(t);
            case 32:
            case 64:
              return Ed25519PrivateKey.fromBytesRaw(t);
            default:
              throw new i.default(
                `invalid private key length: ${t.length} bytes`,
              );
          }
        }
        static fromBytesDer(t) {
          const r = f.default.asn1.fromDer(
            new f.default.util.ByteStringBuffer(t),
          );
          let a;
          try {
            a = f.default.pki.ed25519.privateKeyFromAsn1(r).privateKeyBytes;
          } catch (o) {
            const t = null != o && null != o.message ? o.message : "";
            throw new i.default(
              "cannot decode ED25519 private key data from DER format: " + t,
            );
          }
          const n = s.default.sign.keyPair.fromSeed(a);
          return new Ed25519PrivateKey(n);
        }
        static fromBytesRaw(t) {
          switch (t.length) {
            case 32:
              return new Ed25519PrivateKey(s.default.sign.keyPair.fromSeed(t));
            case 64:
              return new Ed25519PrivateKey(
                s.default.sign.keyPair.fromSecretKey(t),
              );
            default:
          }
          throw new i.default(`invalid private key length: ${t.length} bytes`);
        }
        static fromString(t) {
          return Ed25519PrivateKey.fromBytes(l.decode(t));
        }
        static fromStringDer(t) {
          return Ed25519PrivateKey.fromBytesDer(l.decode(t));
        }
        static fromStringRaw(t) {
          return Ed25519PrivateKey.fromBytesRaw(l.decode(t));
        }
        static async fromSeed(t) {
          const { keyData: r, chainCode: a } = await c.fromSeed(t);
          return new Ed25519PrivateKey(r, a);
        }
        get publicKey() {
          return new o.default(this._keyPair.publicKey);
        }
        sign(t) {
          return s.default.sign.detached(t, this._keyPair.secretKey);
        }
        toBytesDer() {
          const t = new Uint8Array(p.length + 32);
          return (
            t.set(p, 0),
            t.set(this._keyPair.secretKey.subarray(0, 32), p.length),
            t
          );
        }
        toBytesRaw() {
          return this._keyPair.secretKey.slice(0, 32);
        }
      }
      r.default = Ed25519PrivateKey;
    },
    5002: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.bytes = o),
        (r.bytesAsync = s));
      var i = n(a(2925));
      function o(t) {
        return i.default.randomBytes(t);
      }
      function s(t) {
        return Promise.resolve(i.default.randomBytes(t));
      }
    },
    5003: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.derive = s),
        (r.fromSeed = l));
      var n = o(a(3661)),
        i = o(a(4671));
      function o(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (o = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      async function s(t, r, a) {
        if (i.isHardenedIndex(a))
          throw new Error("the index should not be pre-hardened");
        const o = new Uint8Array(37);
        ((o[0] = 0),
          o.set(t, 1),
          new DataView(o.buffer, o.byteOffset, o.byteLength).setUint32(
            33,
            a,
            !1,
          ),
          (o[33] |= 128));
        const s = await n.hash(n.HashAlgorithm.Sha512, r, o);
        return { keyData: s.subarray(0, 32), chainCode: s.subarray(32) };
      }
      async function l(t) {
        const r = await n.hash(n.HashAlgorithm.Sha512, "ed25519 seed", t);
        return { keyData: r.subarray(0, 32), chainCode: r.subarray(32) };
      }
    },
    5004: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      var i = n(a(6078)),
        o = c(a(3293)),
        s = c(a(4672)),
        l = c(a(4671)),
        u = a(4666);
      function c(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (c = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      const f = "3030020100300706052b8104000a04220420",
        d = o.decode(f),
        h = "30540201010420",
        p = o.decode(h);
      class EcdsaPrivateKey {
        constructor(t, r) {
          ((this._keyPair = t), (this._chainCode = null != r ? r : null));
        }
        get _type() {
          return "secp256k1";
        }
        static generate() {
          return new EcdsaPrivateKey(s.generate());
        }
        static async generateAsync() {
          return new EcdsaPrivateKey(await s.generateAsync());
        }
        static fromBytes(t) {
          switch (t.length) {
            case 32:
              return EcdsaPrivateKey.fromBytesRaw(t);
            default:
              return EcdsaPrivateKey.fromBytesDer(t);
          }
        }
        static fromBytesDer(t) {
          let r = new Uint8Array();
          return (
            (r = (0, u.arrayStartsWith)(t, d)
              ? t.subarray(d.length)
              : t.subarray(p.length, p.length + 32)),
            new EcdsaPrivateKey(s.fromBytes(r))
          );
        }
        static fromBytesRaw(t) {
          return new EcdsaPrivateKey(s.fromBytes(t));
        }
        static fromString(t) {
          return EcdsaPrivateKey.fromBytes(o.decode(t));
        }
        static fromStringDer(t) {
          return EcdsaPrivateKey.fromBytesDer(o.decode(t));
        }
        static fromStringRaw(t) {
          return EcdsaPrivateKey.fromBytesRaw(o.decode(t));
        }
        static async fromSeed(t) {
          const { keyData: r, chainCode: a } = await l.fromSeed(t);
          return new EcdsaPrivateKey(s.fromBytes(r), a);
        }
        get publicKey() {
          return new i.default(this._keyPair.publicKey);
        }
        sign(t) {
          return s.sign(this._keyPair.privateKey, t);
        }
        toBytesDer() {
          const t = new Uint8Array(d.length + 32);
          return (
            t.set(d, 0),
            t.set(this._keyPair.privateKey.subarray(0, 32), d.length),
            t
          );
        }
        toBytesRaw() {
          const t = new Uint8Array(32);
          return (t.set(this._keyPair.privateKey.slice(0, 32), 0), t);
        }
      }
      r.default = EcdsaPrivateKey;
    },
    5005: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.CipherAlgorithm = void 0),
        (r.createCipheriv = f),
        (r.createDecipheriv = d),
        (r.messageDigest = h));
      var i = u(a(3293)),
        o = u(a(4670)),
        s = n(a(7858)),
        l = a(2);
      function u(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (u = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      const c = (r.CipherAlgorithm = {
        Aes128Ctr: "AES-128-CTR",
        Aes128Cbc: "AES-128-CBC",
      });
      async function f(t, r, a, n) {
        let i;
        switch (t.toUpperCase()) {
          case c.Aes128Ctr:
            i = { name: "AES-CTR", counter: a, length: 128 };
            break;
          case c.Aes128Cbc:
            i = { name: "AES-CBC", iv: a };
            break;
          default:
            throw new Error(
              "(BUG) non-exhaustive switch statement for CipherAlgorithm",
            );
        }
        const o = await window.crypto.subtle.importKey("raw", r, i.name, !1, [
          "encrypt",
        ]);
        return new Uint8Array(await window.crypto.subtle.encrypt(i, o, n));
      }
      async function d(t, r, a, n) {
        let i;
        switch (t.toUpperCase()) {
          case c.Aes128Ctr:
            i = { name: "AES-CTR", counter: a, length: 128 };
            break;
          case c.Aes128Cbc:
            i = { name: "AES-CBC", iv: a };
            break;
          default:
            throw new Error(
              "(BUG) non-exhaustive switch statement for CipherAlgorithm",
            );
        }
        const o = await window.crypto.subtle.importKey("raw", r, i.name, !1, [
          "decrypt",
        ]);
        let s;
        try {
          s = await window.crypto.subtle.decrypt(i, o, n);
        } catch (l) {
          const t = null != l && null != l.message ? l.message : "";
          throw new Error("Unable to decrypt: " + t);
        }
        return new Uint8Array(s);
      }
      async function h(t, r) {
        const a = o.encode(t),
          n = i.decode(r).slice(0, 8),
          u = s.default.ArrayBuffer.hash(
            l.Buffer.concat([l.Buffer.from(a), l.Buffer.from(n)]),
          );
        return Promise.resolve(i.decode(u));
      }
    },
    5006: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      const n = Object.freeze({
        BadLength: "BadLength",
        UnknownWords: "UnknownWords",
        ChecksumMismatch: "ChecksumMismatch",
      });
      r.default = n;
    },
    6063: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      var i = n(a(3553)),
        o = n(a(3897)),
        s = n(a(4994)),
        l = n(a(5004)),
        u = n(a(6080)),
        c = a(7857),
        f = a(7859),
        d = b(a(3293)),
        h = b(a(5003)),
        p = b(a(4671)),
        y = b(a(7865)),
        m = b(a(4672)),
        g = n(a(6082));
      function b(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (b = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      class PrivateKey extends o.default {
        constructor(t) {
          (super(), (this._key = t));
        }
        get _type() {
          return this._key._type;
        }
        get _chainCode() {
          return this._key._chainCode;
        }
        static generateED25519() {
          return new PrivateKey(s.default.generate());
        }
        static generateECDSA() {
          return new PrivateKey(l.default.generate());
        }
        static generate() {
          return PrivateKey.generateED25519();
        }
        static async generateAsync() {
          return PrivateKey.generateED25519Async();
        }
        static async generateED25519Async() {
          return new PrivateKey(await s.default.generateAsync());
        }
        static async generateECDSAAsync() {
          return new PrivateKey(await l.default.generateAsync());
        }
        static fromBytes(t) {
          let r;
          32 == t.length &&
            console.warn(
              "WARNING: Consider using fromStringECDSA() or fromStringED2551() on a HEX-encoded string and fromStringDer() on a HEX-encoded string with DER prefix instead.",
            );
          try {
            return new PrivateKey(s.default.fromBytes(t));
          } catch (a) {
            r = null != a && null != a.message ? a.message : "";
          }
          try {
            return new PrivateKey(l.default.fromBytes(t));
          } catch (a) {
            r = null != a && null != a.message ? a.message : "";
          }
          throw new i.default("private key cannot be decoded from bytes: " + r);
        }
        static fromBytesECDSA(t) {
          return new PrivateKey(l.default.fromBytes(t));
        }
        static fromBytesED25519(t) {
          return new PrivateKey(s.default.fromBytes(t));
        }
        static fromString(t) {
          return PrivateKey.fromBytes(d.decode(t));
        }
        static fromStringECDSA(t) {
          return PrivateKey.fromBytesECDSA(d.decode(t));
        }
        static fromStringED25519(t) {
          return PrivateKey.fromBytesED25519(d.decode(t));
        }
        static async fromSeedED25519(t) {
          const r = await s.default.fromSeed(t);
          return new PrivateKey(r);
        }
        static async fromSeedECDSAsecp256k1(t) {
          const r = await l.default.fromSeed(t);
          return new PrivateKey(r);
        }
        static async fromMnemonic(t, r) {
          if ((void 0 === r && (r = ""), null == g.default.mnemonicFromString))
            throw new Error("Mnemonic not found in cache");
          return (
            "string" === typeof t ? g.default.mnemonicFromString(t) : t
          ).toEd25519PrivateKey(r);
        }
        static async fromKeystore(t, r) {
          return (
            void 0 === r && (r = ""),
            PrivateKey.fromBytes(await (0, c.loadKeystore)(t, r))
          );
        }
        static async fromPem(t, r) {
          void 0 === r && (r = "");
          const a = await (0, f.read)(t, r);
          if (a instanceof s.default || a instanceof l.default)
            return new PrivateKey(a);
          const n = !!t.includes("BEGIN EC PRIVATE KEY");
          return new PrivateKey(
            n ? l.default.fromBytes(a) : s.default.fromBytes(a),
          );
        }
        async derive(t) {
          if (null == this._key._chainCode)
            throw new Error("this private key does not support key derivation");
          if (this._key instanceof s.default) {
            const { keyData: r, chainCode: a } = await h.derive(
              this.toBytesRaw(),
              this._key._chainCode,
              t,
            );
            return new PrivateKey(new s.default(r, a));
          }
          {
            const { keyData: r, chainCode: a } = await p.derive(
              this.toBytesRaw(),
              this._key._chainCode,
              t,
            );
            return new PrivateKey(new l.default(m.fromBytes(r), a));
          }
        }
        async legacyDerive(t) {
          const r = await y.legacy(this.toBytesRaw().subarray(0, 32), t),
            a = this._key.constructor;
          return new PrivateKey(new a(r));
        }
        get publicKey() {
          return new u.default(this._key.publicKey);
        }
        sign(t) {
          return this._key.sign(t);
        }
        signTransaction(t) {
          if ((t.isFrozen() || t.freeze(), 1 != t._signedTransactions.length))
            throw new Error(
              "`PrivateKey.signTransaction()` requires `Transaction` to have a single node `AccountId` set",
            );
          const r = t._signedTransactions[0],
            a = d.encode(this.publicKey.toBytesRaw());
          (null == r.sigMap && (r.sigMap = {}),
            null == r.sigMap.sigPair && (r.sigMap.sigPair = []));
          for (const o of r.sigMap.sigPair)
            if (null != o.pubKeyPrefix && d.encode(o.pubKeyPrefix) === a)
              switch (this._type) {
                case "ED25519":
                  return o.ed25519;
                case "secp256k1":
                  return o.ECDSASecp256k1;
              }
          const n = this.sign(
              null != r.bodyBytes ? r.bodyBytes : new Uint8Array(),
            ),
            i = { pubKeyPrefix: this.publicKey.toBytesRaw() };
          switch (this._type) {
            case "ED25519":
              i.ed25519 = n;
              break;
            case "secp256k1":
              i.ECDSASecp256k1 = n;
              break;
          }
          return (r.sigMap.sigPair.push(i), t._signerPublicKeys.add(a), n);
        }
        isDerivable() {
          return null != this._key._chainCode;
        }
        toBytes() {
          return this._key instanceof s.default
            ? this.toBytesRaw()
            : this.toBytesDer();
        }
        toBytesDer() {
          return this._key.toBytesDer();
        }
        toBytesRaw() {
          return this._key.toBytesRaw();
        }
        toString() {
          return this.toStringDer();
        }
        toStringDer() {
          return d.encode(this.toBytesDer());
        }
        toStringRaw() {
          return d.encode(this.toBytesRaw());
        }
        toKeystore(t) {
          return (
            void 0 === t && (t = ""),
            (0, c.createKeystore)(this.toBytesRaw(), t)
          );
        }
      }
      ((r.default = PrivateKey),
        (g.default.privateKeyConstructor = (t) => new PrivateKey(t)),
        (g.default.privateKeyFromBytes = (t) => PrivateKey.fromBytes(t)));
    },
    6064: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      var i = n(a(3897)),
        o = n(a(3553)),
        s = n(a(2925)),
        l = a(4666),
        u = f(a(3293)),
        c = n(a(4995));
      function f(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (f = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      const d = "302a300506032b6570032100",
        h = u.decode(d);
      class Ed25519PublicKey extends i.default {
        constructor(t) {
          (super(), (this._keyData = t));
        }
        get _type() {
          return "ED25519";
        }
        static fromBytes(t) {
          switch (t.length) {
            case 32:
              return Ed25519PublicKey.fromBytesRaw(t);
            case 44:
              return Ed25519PublicKey.fromBytesDer(t);
            default:
              throw new o.default(
                `invalid public key length: ${t.length} bytes`,
              );
          }
        }
        static fromBytesDer(t) {
          const r = c.default.asn1.fromDer(
            new c.default.util.ByteStringBuffer(t),
          );
          let a;
          try {
            a = c.default.pki.ed25519.publicKeyFromAsn1(r);
          } catch (n) {
            const t = null != n && null != n.message ? n.message : "";
            throw new o.default(
              "cannot decode ED25519 public key data from DER format: " + t,
            );
          }
          return new Ed25519PublicKey(a);
        }
        static fromBytesRaw(t) {
          if (32 != t.length)
            throw new o.default(`invalid public key length: ${t.length} bytes`);
          return new Ed25519PublicKey(t);
        }
        static fromString(t) {
          return Ed25519PublicKey.fromBytes(u.decode(t));
        }
        verify(t, r) {
          return s.default.sign.detached.verify(t, r, this._keyData);
        }
        toBytesDer() {
          const t = new Uint8Array(h.length + 32);
          return (
            t.set(h, 0),
            t.set(this._keyData.subarray(0, 32), h.length),
            t
          );
        }
        toBytesRaw() {
          return this._keyData.slice();
        }
        equals(t) {
          return (0, l.arrayEqual)(this._keyData, t._keyData);
        }
      }
      r.default = Ed25519PublicKey;
    },
    6078: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      var i = n(a(3897)),
        o = n(a(3553)),
        s = a(4666),
        l = d(a(3293)),
        u = d(a(4672)),
        c = a(6079),
        f = n(a(795));
      function d(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (d = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      const h = new f.default.ec("secp256k1"),
        p = "302d300706052b8104000a032200",
        y = l.decode(p),
        m = "3036301006072a8648ce3d020106052b8104000a032200",
        g = l.decode(m);
      class EcdsaPublicKey extends i.default {
        constructor(t) {
          (super(), (this._keyData = t));
        }
        get _type() {
          return "secp256k1";
        }
        static fromBytes(t) {
          switch (t.length) {
            case 33:
              return EcdsaPublicKey.fromBytesRaw(t);
            default:
              return EcdsaPublicKey.fromBytesDer(t);
          }
        }
        static fromBytesDer(t) {
          let r = new Uint8Array();
          switch (t.length) {
            case 47:
              r = t.subarray(y.length);
              break;
            case 56:
              r = t.subarray(g.length, g.length + 33);
              break;
            default:
              const a = h.keyFromPublic(t.subarray(g.length), "der"),
                n = a.getPublic(),
                i = n.encodeCompressed("hex");
              r = l.decode(i);
              break;
          }
          if (0 == r.length)
            throw new o.default(
              "cannot decode ECDSA private key data from DER format",
            );
          return new EcdsaPublicKey(r);
        }
        static fromBytesRaw(t) {
          if (33 != t.length)
            throw new o.default(`invalid public key length: ${t.length} bytes`);
          return new EcdsaPublicKey(t);
        }
        static fromString(t) {
          return EcdsaPublicKey.fromBytes(l.decode(t));
        }
        verify(t, r) {
          return u.verify(this._keyData, t, r);
        }
        toBytesDer() {
          const t = new Uint8Array(y.length + this._keyData.length);
          return (t.set(y, 0), t.set(this._keyData, y.length), t);
        }
        toBytesRaw() {
          return new Uint8Array(this._keyData.subarray());
        }
        toEthereumAddress() {
          const t = l.decode(
            (0, c.keccak256)(
              "0x" +
                l.encode(u.getFullPublicKey(this.toBytesRaw()).subarray(1)),
            ),
          );
          return l.encode(t.subarray(12));
        }
        equals(t) {
          return (0, s.arrayEqual)(this._keyData, t._keyData);
        }
      }
      r.default = EcdsaPublicKey;
    },
    6079: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.keccak256 = void 0));
      const n = "0123456789abcdef".split(""),
        i = [1, 256, 65536, 16777216],
        o = [0, 8, 16, 24],
        s = [
          1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
          2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
          0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648,
          32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128,
          2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648,
          32896, 2147483648, 2147483649, 0, 2147516424, 2147483648,
        ],
        l = (t) => ({
          blocks: [],
          reset: !0,
          block: 0,
          start: 0,
          blockCount: (1600 - (t << 1)) >> 5,
          outputBlocks: t >> 5,
          s: ((t) => [].concat(t, t, t, t, t))([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        }),
        u = (t, r) => {
          var a,
            s,
            l = r.length,
            u = t.blocks,
            f = t.blockCount << 2,
            d = t.blockCount,
            h = t.outputBlocks,
            p = t.s,
            y = 0;
          while (y < l) {
            if (t.reset)
              for (t.reset = !1, u[0] = t.block, a = 1; a < d + 1; ++a)
                u[a] = 0;
            if ("string" !== typeof r)
              for (a = t.start; y < l && a < f; ++y)
                u[a >> 2] |= r[y] << o[3 & a++];
            else
              for (a = t.start; y < l && a < f; ++y)
                ((s = r.charCodeAt(y)),
                  s < 128
                    ? (u[a >> 2] |= s << o[3 & a++])
                    : s < 2048
                      ? ((u[a >> 2] |= (192 | (s >> 6)) << o[3 & a++]),
                        (u[a >> 2] |= (128 | (63 & s)) << o[3 & a++]))
                      : s < 55296 || s >= 57344
                        ? ((u[a >> 2] |= (224 | (s >> 12)) << o[3 & a++]),
                          (u[a >> 2] |= (128 | ((s >> 6) & 63)) << o[3 & a++]),
                          (u[a >> 2] |= (128 | (63 & s)) << o[3 & a++]))
                        : ((s =
                            65536 +
                            (((1023 & s) << 10) | (1023 & r.charCodeAt(++y)))),
                          (u[a >> 2] |= (240 | (s >> 18)) << o[3 & a++]),
                          (u[a >> 2] |= (128 | ((s >> 12) & 63)) << o[3 & a++]),
                          (u[a >> 2] |= (128 | ((s >> 6) & 63)) << o[3 & a++]),
                          (u[a >> 2] |= (128 | (63 & s)) << o[3 & a++])));
            if (((t.lastByteIndex = a), a >= f)) {
              for (t.start = a - f, t.block = u[d], a = 0; a < d; ++a)
                p[a] ^= u[a];
              (c(p), (t.reset = !0));
            } else t.start = a;
          }
          if (
            ((a = t.lastByteIndex),
            (u[a >> 2] |= i[3 & a]),
            t.lastByteIndex === f)
          )
            for (u[0] = u[d], a = 1; a < d + 1; ++a) u[a] = 0;
          for (u[d - 1] |= 2147483648, a = 0; a < d; ++a) p[a] ^= u[a];
          c(p);
          var m,
            g = "",
            b = 0;
          a = 0;
          while (b < h) {
            for (a = 0; a < d && b < h; ++a, ++b)
              ((m = p[a]),
                (g +=
                  n[(m >> 4) & 15] +
                  n[15 & m] +
                  n[(m >> 12) & 15] +
                  n[(m >> 8) & 15] +
                  n[(m >> 20) & 15] +
                  n[(m >> 16) & 15] +
                  n[(m >> 28) & 15] +
                  n[(m >> 24) & 15]));
            b % d === 0 && (c(p), (a = 0));
          }
          return "0x" + g;
        },
        c = (t) => {
          var r,
            a,
            n,
            i,
            o,
            l,
            u,
            c,
            f,
            d,
            h,
            p,
            y,
            m,
            g,
            b,
            w,
            v,
            k,
            _,
            P,
            E,
            j,
            B,
            A,
            x,
            S,
            D,
            K,
            O,
            M,
            C,
            z,
            q,
            I,
            W,
            L,
            R,
            H,
            U,
            N,
            F,
            T,
            J,
            $,
            V,
            G,
            Z,
            X,
            Y,
            Q,
            ee,
            te,
            re,
            ae,
            ne,
            ie,
            oe,
            se,
            le,
            ue,
            ce,
            fe;
          for (n = 0; n < 48; n += 2)
            ((i = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (l = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (u = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (c = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (f = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (d = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (h = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (p = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]),
              (y = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]),
              (r = p ^ ((l << 1) | (u >>> 31))),
              (a = y ^ ((u << 1) | (l >>> 31))),
              (t[0] ^= r),
              (t[1] ^= a),
              (t[10] ^= r),
              (t[11] ^= a),
              (t[20] ^= r),
              (t[21] ^= a),
              (t[30] ^= r),
              (t[31] ^= a),
              (t[40] ^= r),
              (t[41] ^= a),
              (r = i ^ ((c << 1) | (f >>> 31))),
              (a = o ^ ((f << 1) | (c >>> 31))),
              (t[2] ^= r),
              (t[3] ^= a),
              (t[12] ^= r),
              (t[13] ^= a),
              (t[22] ^= r),
              (t[23] ^= a),
              (t[32] ^= r),
              (t[33] ^= a),
              (t[42] ^= r),
              (t[43] ^= a),
              (r = l ^ ((d << 1) | (h >>> 31))),
              (a = u ^ ((h << 1) | (d >>> 31))),
              (t[4] ^= r),
              (t[5] ^= a),
              (t[14] ^= r),
              (t[15] ^= a),
              (t[24] ^= r),
              (t[25] ^= a),
              (t[34] ^= r),
              (t[35] ^= a),
              (t[44] ^= r),
              (t[45] ^= a),
              (r = c ^ ((p << 1) | (y >>> 31))),
              (a = f ^ ((y << 1) | (p >>> 31))),
              (t[6] ^= r),
              (t[7] ^= a),
              (t[16] ^= r),
              (t[17] ^= a),
              (t[26] ^= r),
              (t[27] ^= a),
              (t[36] ^= r),
              (t[37] ^= a),
              (t[46] ^= r),
              (t[47] ^= a),
              (r = d ^ ((i << 1) | (o >>> 31))),
              (a = h ^ ((o << 1) | (i >>> 31))),
              (t[8] ^= r),
              (t[9] ^= a),
              (t[18] ^= r),
              (t[19] ^= a),
              (t[28] ^= r),
              (t[29] ^= a),
              (t[38] ^= r),
              (t[39] ^= a),
              (t[48] ^= r),
              (t[49] ^= a),
              (m = t[0]),
              (g = t[1]),
              (V = (t[11] << 4) | (t[10] >>> 28)),
              (G = (t[10] << 4) | (t[11] >>> 28)),
              (D = (t[20] << 3) | (t[21] >>> 29)),
              (K = (t[21] << 3) | (t[20] >>> 29)),
              (le = (t[31] << 9) | (t[30] >>> 23)),
              (ue = (t[30] << 9) | (t[31] >>> 23)),
              (F = (t[40] << 18) | (t[41] >>> 14)),
              (T = (t[41] << 18) | (t[40] >>> 14)),
              (q = (t[2] << 1) | (t[3] >>> 31)),
              (I = (t[3] << 1) | (t[2] >>> 31)),
              (b = (t[13] << 12) | (t[12] >>> 20)),
              (w = (t[12] << 12) | (t[13] >>> 20)),
              (Z = (t[22] << 10) | (t[23] >>> 22)),
              (X = (t[23] << 10) | (t[22] >>> 22)),
              (O = (t[33] << 13) | (t[32] >>> 19)),
              (M = (t[32] << 13) | (t[33] >>> 19)),
              (ce = (t[42] << 2) | (t[43] >>> 30)),
              (fe = (t[43] << 2) | (t[42] >>> 30)),
              (re = (t[5] << 30) | (t[4] >>> 2)),
              (ae = (t[4] << 30) | (t[5] >>> 2)),
              (W = (t[14] << 6) | (t[15] >>> 26)),
              (L = (t[15] << 6) | (t[14] >>> 26)),
              (v = (t[25] << 11) | (t[24] >>> 21)),
              (k = (t[24] << 11) | (t[25] >>> 21)),
              (Y = (t[34] << 15) | (t[35] >>> 17)),
              (Q = (t[35] << 15) | (t[34] >>> 17)),
              (C = (t[45] << 29) | (t[44] >>> 3)),
              (z = (t[44] << 29) | (t[45] >>> 3)),
              (B = (t[6] << 28) | (t[7] >>> 4)),
              (A = (t[7] << 28) | (t[6] >>> 4)),
              (ne = (t[17] << 23) | (t[16] >>> 9)),
              (ie = (t[16] << 23) | (t[17] >>> 9)),
              (R = (t[26] << 25) | (t[27] >>> 7)),
              (H = (t[27] << 25) | (t[26] >>> 7)),
              (_ = (t[36] << 21) | (t[37] >>> 11)),
              (P = (t[37] << 21) | (t[36] >>> 11)),
              (ee = (t[47] << 24) | (t[46] >>> 8)),
              (te = (t[46] << 24) | (t[47] >>> 8)),
              (J = (t[8] << 27) | (t[9] >>> 5)),
              ($ = (t[9] << 27) | (t[8] >>> 5)),
              (x = (t[18] << 20) | (t[19] >>> 12)),
              (S = (t[19] << 20) | (t[18] >>> 12)),
              (oe = (t[29] << 7) | (t[28] >>> 25)),
              (se = (t[28] << 7) | (t[29] >>> 25)),
              (U = (t[38] << 8) | (t[39] >>> 24)),
              (N = (t[39] << 8) | (t[38] >>> 24)),
              (E = (t[48] << 14) | (t[49] >>> 18)),
              (j = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = m ^ (~b & v)),
              (t[1] = g ^ (~w & k)),
              (t[10] = B ^ (~x & D)),
              (t[11] = A ^ (~S & K)),
              (t[20] = q ^ (~W & R)),
              (t[21] = I ^ (~L & H)),
              (t[30] = J ^ (~V & Z)),
              (t[31] = $ ^ (~G & X)),
              (t[40] = re ^ (~ne & oe)),
              (t[41] = ae ^ (~ie & se)),
              (t[2] = b ^ (~v & _)),
              (t[3] = w ^ (~k & P)),
              (t[12] = x ^ (~D & O)),
              (t[13] = S ^ (~K & M)),
              (t[22] = W ^ (~R & U)),
              (t[23] = L ^ (~H & N)),
              (t[32] = V ^ (~Z & Y)),
              (t[33] = G ^ (~X & Q)),
              (t[42] = ne ^ (~oe & le)),
              (t[43] = ie ^ (~se & ue)),
              (t[4] = v ^ (~_ & E)),
              (t[5] = k ^ (~P & j)),
              (t[14] = D ^ (~O & C)),
              (t[15] = K ^ (~M & z)),
              (t[24] = R ^ (~U & F)),
              (t[25] = H ^ (~N & T)),
              (t[34] = Z ^ (~Y & ee)),
              (t[35] = X ^ (~Q & te)),
              (t[44] = oe ^ (~le & ce)),
              (t[45] = se ^ (~ue & fe)),
              (t[6] = _ ^ (~E & m)),
              (t[7] = P ^ (~j & g)),
              (t[16] = O ^ (~C & B)),
              (t[17] = M ^ (~z & A)),
              (t[26] = U ^ (~F & q)),
              (t[27] = N ^ (~T & I)),
              (t[36] = Y ^ (~ee & J)),
              (t[37] = Q ^ (~te & $)),
              (t[46] = le ^ (~ce & re)),
              (t[47] = ue ^ (~fe & ae)),
              (t[8] = E ^ (~m & b)),
              (t[9] = j ^ (~g & w)),
              (t[18] = C ^ (~B & x)),
              (t[19] = z ^ (~A & S)),
              (t[28] = F ^ (~q & W)),
              (t[29] = T ^ (~I & L)),
              (t[38] = ee ^ (~J & V)),
              (t[39] = te ^ (~$ & G)),
              (t[48] = ce ^ (~re & ne)),
              (t[49] = fe ^ (~ae & ie)),
              (t[0] ^= s[n]),
              (t[1] ^= s[n + 1]));
        },
        f = (t) => (r) => {
          var a;
          if ("0x" === r.slice(0, 2)) {
            a = [];
            for (var n = 2, i = r.length; n < i; n += 2)
              a.push(parseInt(r.slice(n, n + 2), 16));
          } else a = r;
          return u(l(t), a);
        };
      r.keccak256 = f(256);
    },
    6080: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      var i = n(a(3897)),
        o = n(a(3553)),
        s = n(a(6064)),
        l = n(a(6078)),
        u = a(4666),
        c = f(a(3293));
      function f(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (f = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      class PublicKey extends i.default {
        constructor(t) {
          (super(), (this._key = t));
        }
        get _type() {
          return this._key._type;
        }
        static fromBytes(t) {
          let r;
          try {
            return new PublicKey(s.default.fromBytes(t));
          } catch (a) {
            r = null != a && null != a.message ? a.message : "";
          }
          try {
            return new PublicKey(l.default.fromBytes(t));
          } catch (a) {
            r = null != a && null != a.message ? a.message : "";
          }
          throw new o.default("public key cannot be decoded from bytes: " + r);
        }
        static fromBytesED25519(t) {
          return new PublicKey(s.default.fromBytes(t));
        }
        static fromBytesECDSA(t) {
          return new PublicKey(l.default.fromBytes(t));
        }
        static fromString(t) {
          return PublicKey.fromBytes(c.decode(t));
        }
        static fromStringED25519(t) {
          return PublicKey.fromBytesED25519(c.decode(t));
        }
        static fromStringECDSA(t) {
          return PublicKey.fromBytesECDSA(c.decode(t));
        }
        verify(t, r) {
          return this._key.verify(t, r);
        }
        verifyTransaction(t) {
          (console.log("Deprecated: use `@hashgraph/sdk`.PublicKey instead"),
            t._requireFrozen(),
            t.isFrozen() || t.freeze());
          for (const r of t._signedTransactions)
            if (null != r.sigMap && null != r.sigMap.sigPair) {
              let t = !1;
              for (const a of r.sigMap.sigPair) {
                const n = a.pubKeyPrefix;
                if ((0, u.arrayEqual)(n, this.toBytesRaw())) {
                  t = !0;
                  const n = r.bodyBytes,
                    i = null != a.ed25519 ? a.ed25519 : a.ECDSASecp256k1;
                  if (!this.verify(n, i)) return !1;
                }
              }
              if (!t) return !1;
            }
          return !0;
        }
        toBytes() {
          return this._key instanceof s.default
            ? this.toBytesRaw()
            : this.toBytesDer();
        }
        toBytesDer() {
          return this._key.toBytesDer();
        }
        toBytesRaw() {
          return this._key.toBytesRaw();
        }
        toString() {
          return this.toStringDer();
        }
        toStringDer() {
          return c.encode(this.toBytesDer());
        }
        toStringRaw() {
          return c.encode(this.toBytesRaw());
        }
        toEthereumAddress() {
          if (this._key instanceof l.default)
            return this._key.toEthereumAddress();
          throw new Error("unsupported operation on Ed25519PublicKey");
        }
        equals(t) {
          return (
            ((this._key instanceof s.default && t._key instanceof s.default) ||
              (this._key instanceof l.default &&
                t._key instanceof l.default)) &&
            this._key.equals(t._key)
          );
        }
      }
      r.default = PublicKey;
    },
    6081: function (t, r, a) {
      "use strict";
      function n(t) {
        return i(t)[0];
      }
      function i(t) {
        const [r, a] = l(t.subarray(1)),
          n = a.subarray(0, r),
          i = a.subarray(r);
        switch (t[0]) {
          case 2:
            return [{ int: u(n) }, i];
          case 4:
            return [{ bytes: n }, i];
          case 5:
            return [{}, i];
          case 6:
            return [{ ident: s(n) }, i];
          case 48:
            return [{ seq: o(n) }, i];
          default:
            throw new Error("unsupported DER type tag: " + t[0]);
        }
      }
      function o(t) {
        let r = t;
        const a = [];
        while (0 !== r.length) {
          const [t, n] = i(r);
          (a.push(t), (r = n));
        }
        return a;
      }
      function s(t) {
        const r = [Math.floor(t[0] / 40), t[0] % 40];
        let a = 0;
        for (const n of t.subarray(1))
          ((a *= 128),
            n < 128 ? ((a += n), r.push(a), (a = 0)) : (a += 127 & n));
        return r.join(".");
      }
      function l(t) {
        if (t[0] < 128) return [t[0], t.subarray(1)];
        const r = t[0] - 128,
          a = t.subarray(1, r + 1),
          n = t.subarray(r + 1);
        return [u(a), n];
      }
      function u(t) {
        const r = t.length;
        if (1 === r) return t[0];
        let a = new DataView(t.buffer, t.byteOffset, t.byteLength);
        if (2 === r) return a.getUint16(0, !1);
        if (3 === r) {
          const r = Uint8Array.of(0, ...t);
          a = new DataView(r.buffer, r.byteOffset, r.byteLength);
        }
        if (r > 4)
          throw new Error(`unsupported DER integer length of ${r} bytes`);
        return a.getUint32(0, !1);
      }
      (Object.defineProperty(r, "__esModule", { value: !0 }), (r.decode = n));
    },
    6082: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      const n = {
        privateKeyConstructor: null,
        privateKeyFromBytes: null,
        mnemonicFromString: null,
      };
      r.default = n;
    },
    6083: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      var i = n(a(5006));
      class BadMnemonicError extends Error {
        constructor(t, r, a) {
          let n;
          switch (r) {
            case i.default.BadLength:
              n = "mnemonic is of an unexpected number of words";
              break;
            case i.default.ChecksumMismatch:
              n =
                "checksum byte in mnemonic did not match the rest of the mnemonic";
              break;
            case i.default.UnknownWords:
              n =
                "mnemonic contained words that are not in the standard word list";
              break;
            default:
              throw new Error(`unexpected value ${r.toString()} for 'reason'`);
          }
          (super("invalid mnemonic: " + n),
            "undefined" !== typeof Error.captureStackTrace &&
              Error.captureStackTrace(this, BadMnemonicError),
            (this.name = "BadMnemonicError"),
            (this.reason = r),
            (this.mnemonic = t),
            (this.unknownWordIndices = a));
        }
      }
      r.default = BadMnemonicError;
    },
    6084: function (t, r, a) {
      "use strict";
      async function n(t) {
        return new Uint8Array(await crypto.subtle.digest("SHA-256", t));
      }
      (Object.defineProperty(r, "__esModule", { value: !0 }), (r.digest = n));
    },
    6090: function (t, r, a) {
      "use strict";
      t.exports = a(7873);
    },
    6091: function (t, r, a) {
      "use strict";
      t.exports = d;
      var n,
        i = a(3662),
        o = i.LongBits,
        s = i.base64,
        l = i.utf8;
      function u(t, r, a) {
        ((this.fn = t), (this.len = r), (this.next = void 0), (this.val = a));
      }
      function c() {}
      function f(t) {
        ((this.head = t.head),
          (this.tail = t.tail),
          (this.len = t.len),
          (this.next = t.states));
      }
      function d() {
        ((this.len = 0),
          (this.head = new u(c, 0, 0)),
          (this.tail = this.head),
          (this.states = null));
      }
      var h = function () {
        return i.Buffer
          ? function () {
              return (d.create = function () {
                return new n();
              })();
            }
          : function () {
              return new d();
            };
      };
      function p(t, r, a) {
        r[a] = 255 & t;
      }
      function y(t, r, a) {
        while (t > 127) ((r[a++] = (127 & t) | 128), (t >>>= 7));
        r[a] = t;
      }
      function m(t, r) {
        ((this.len = t), (this.next = void 0), (this.val = r));
      }
      function g(t, r, a) {
        while (t.hi)
          ((r[a++] = (127 & t.lo) | 128),
            (t.lo = ((t.lo >>> 7) | (t.hi << 25)) >>> 0),
            (t.hi >>>= 7));
        while (t.lo > 127) ((r[a++] = (127 & t.lo) | 128), (t.lo = t.lo >>> 7));
        r[a++] = t.lo;
      }
      function b(t, r, a) {
        ((r[a] = 255 & t),
          (r[a + 1] = (t >>> 8) & 255),
          (r[a + 2] = (t >>> 16) & 255),
          (r[a + 3] = t >>> 24));
      }
      ((d.create = h()),
        (d.alloc = function (t) {
          return new i.Array(t);
        }),
        i.Array !== Array &&
          (d.alloc = i.pool(d.alloc, i.Array.prototype.subarray)),
        (d.prototype._push = function (t, r, a) {
          return (
            (this.tail = this.tail.next = new u(t, r, a)),
            (this.len += r),
            this
          );
        }),
        (m.prototype = Object.create(u.prototype)),
        (m.prototype.fn = y),
        (d.prototype.uint32 = function (t) {
          return (
            (this.len += (this.tail = this.tail.next =
              new m(
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
        (d.prototype.int32 = function (t) {
          return t < 0 ? this._push(g, 10, o.fromNumber(t)) : this.uint32(t);
        }),
        (d.prototype.sint32 = function (t) {
          return this.uint32(((t << 1) ^ (t >> 31)) >>> 0);
        }),
        (d.prototype.uint64 = function (t) {
          var r = o.from(t);
          return this._push(g, r.length(), r);
        }),
        (d.prototype.int64 = d.prototype.uint64),
        (d.prototype.sint64 = function (t) {
          var r = o.from(t).zzEncode();
          return this._push(g, r.length(), r);
        }),
        (d.prototype.bool = function (t) {
          return this._push(p, 1, t ? 1 : 0);
        }),
        (d.prototype.fixed32 = function (t) {
          return this._push(b, 4, t >>> 0);
        }),
        (d.prototype.sfixed32 = d.prototype.fixed32),
        (d.prototype.fixed64 = function (t) {
          var r = o.from(t);
          return this._push(b, 4, r.lo)._push(b, 4, r.hi);
        }),
        (d.prototype.sfixed64 = d.prototype.fixed64),
        (d.prototype.float = function (t) {
          return this._push(i.float.writeFloatLE, 4, t);
        }),
        (d.prototype.double = function (t) {
          return this._push(i.float.writeDoubleLE, 8, t);
        }));
      var w = i.Array.prototype.set
        ? function (t, r, a) {
            r.set(t, a);
          }
        : function (t, r, a) {
            for (var n = 0; n < t.length; ++n) r[a + n] = t[n];
          };
      ((d.prototype.bytes = function (t) {
        var r = t.length >>> 0;
        if (!r) return this._push(p, 1, 0);
        if (i.isString(t)) {
          var a = d.alloc((r = s.length(t)));
          (s.decode(t, a, 0), (t = a));
        }
        return this.uint32(r)._push(w, r, t);
      }),
        (d.prototype.string = function (t) {
          var r = l.length(t);
          return r ? this.uint32(r)._push(l.write, r, t) : this._push(p, 1, 0);
        }),
        (d.prototype.fork = function () {
          return (
            (this.states = new f(this)),
            (this.head = this.tail = new u(c, 0, 0)),
            (this.len = 0),
            this
          );
        }),
        (d.prototype.reset = function () {
          return (
            this.states
              ? ((this.head = this.states.head),
                (this.tail = this.states.tail),
                (this.len = this.states.len),
                (this.states = this.states.next))
              : ((this.head = this.tail = new u(c, 0, 0)), (this.len = 0)),
            this
          );
        }),
        (d.prototype.ldelim = function () {
          var t = this.head,
            r = this.tail,
            a = this.len;
          return (
            this.reset().uint32(a),
            a && ((this.tail.next = t.next), (this.tail = r), (this.len += a)),
            this
          );
        }),
        (d.prototype.finish = function () {
          var t = this.head.next,
            r = this.constructor.alloc(this.len),
            a = 0;
          while (t) (t.fn(t.val, r, a), (a += t.len), (t = t.next));
          return r;
        }),
        (d._configure = function (t) {
          ((n = t), (d.create = h()), n._configure());
        }));
    },
    6092: function (t, r, a) {
      "use strict";
      t.exports = u;
      var n,
        i = a(3662),
        o = i.LongBits,
        s = i.utf8;
      function l(t, r) {
        return RangeError(
          "index out of range: " + t.pos + " + " + (r || 1) + " > " + t.len,
        );
      }
      function u(t) {
        ((this.buf = t), (this.pos = 0), (this.len = t.length));
      }
      var c =
          "undefined" !== typeof Uint8Array
            ? function (t) {
                if (t instanceof Uint8Array || Array.isArray(t))
                  return new u(t);
                throw Error("illegal buffer");
              }
            : function (t) {
                if (Array.isArray(t)) return new u(t);
                throw Error("illegal buffer");
              },
        f = function () {
          return i.Buffer
            ? function (t) {
                return (u.create = function (t) {
                  return i.Buffer.isBuffer(t) ? new n(t) : c(t);
                })(t);
              }
            : c;
        };
      function d() {
        var t = new o(0, 0),
          r = 0;
        if (!(this.len - this.pos > 4)) {
          for (; r < 3; ++r) {
            if (this.pos >= this.len) throw l(this);
            if (
              ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * r))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
          return (
            (t.lo = (t.lo | ((127 & this.buf[this.pos++]) << (7 * r))) >>> 0),
            t
          );
        }
        for (; r < 4; ++r)
          if (
            ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * r))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return t;
        if (
          ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
          (t.hi = (t.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return t;
        if (((r = 0), this.len - this.pos > 4)) {
          for (; r < 5; ++r)
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * r + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
        } else
          for (; r < 5; ++r) {
            if (this.pos >= this.len) throw l(this);
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * r + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
        throw Error("invalid varint encoding");
      }
      function h(t, r) {
        return (
          (t[r - 4] | (t[r - 3] << 8) | (t[r - 2] << 16) | (t[r - 1] << 24)) >>>
          0
        );
      }
      function p() {
        if (this.pos + 8 > this.len) throw l(this, 8);
        return new o(
          h(this.buf, (this.pos += 4)),
          h(this.buf, (this.pos += 4)),
        );
      }
      ((u.create = f()),
        (u.prototype._slice =
          i.Array.prototype.subarray || i.Array.prototype.slice),
        (u.prototype.uint32 = (function () {
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
              throw ((this.pos = this.len), l(this, 10));
            return t;
          };
        })()),
        (u.prototype.int32 = function () {
          return 0 | this.uint32();
        }),
        (u.prototype.sint32 = function () {
          var t = this.uint32();
          return ((t >>> 1) ^ -(1 & t)) | 0;
        }),
        (u.prototype.bool = function () {
          return 0 !== this.uint32();
        }),
        (u.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) throw l(this, 4);
          return h(this.buf, (this.pos += 4));
        }),
        (u.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) throw l(this, 4);
          return 0 | h(this.buf, (this.pos += 4));
        }),
        (u.prototype.float = function () {
          if (this.pos + 4 > this.len) throw l(this, 4);
          var t = i.float.readFloatLE(this.buf, this.pos);
          return ((this.pos += 4), t);
        }),
        (u.prototype.double = function () {
          if (this.pos + 8 > this.len) throw l(this, 4);
          var t = i.float.readDoubleLE(this.buf, this.pos);
          return ((this.pos += 8), t);
        }),
        (u.prototype.bytes = function () {
          var t = this.uint32(),
            r = this.pos,
            a = this.pos + t;
          if (a > this.len) throw l(this, t);
          if (((this.pos += t), Array.isArray(this.buf)))
            return this.buf.slice(r, a);
          if (r === a) {
            var n = i.Buffer;
            return n ? n.alloc(0) : new this.buf.constructor(0);
          }
          return this._slice.call(this.buf, r, a);
        }),
        (u.prototype.string = function () {
          var t = this.bytes();
          return s.read(t, 0, t.length);
        }),
        (u.prototype.skip = function (t) {
          if ("number" === typeof t) {
            if (this.pos + t > this.len) throw l(this, t);
            this.pos += t;
          } else
            do {
              if (this.pos >= this.len) throw l(this);
            } while (128 & this.buf[this.pos++]);
          return this;
        }),
        (u.prototype.skipType = function (t) {
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
        (u._configure = function (t) {
          ((n = t), (u.create = f()), n._configure());
          var r = i.Long ? "toLong" : "toNumber";
          i.merge(u.prototype, {
            int64: function () {
              return d.call(this)[r](!1);
            },
            uint64: function () {
              return d.call(this)[r](!0);
            },
            sint64: function () {
              return d.call(this).zzDecode()[r](!1);
            },
            fixed64: function () {
              return p.call(this)[r](!0);
            },
            sfixed64: function () {
              return p.call(this)[r](!1);
            },
          });
        }));
    },
    7844: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      var i = n(a(3897));
      class KeyList extends i.default {
        constructor(t, r) {
          (super(),
            null == t
              ? (this._keys = [])
              : t instanceof i.default
                ? (this._keys = [t])
                : (this._keys = t),
            (this._threshold = null == r ? null : r));
        }
        static of() {
          for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++)
            r[a] = arguments[a];
          return new KeyList(r, null);
        }
        static from(t, r, a) {
          return new KeyList(null == r ? Array.from(t) : Array.from(t, r, a));
        }
        get threshold() {
          return this._threshold;
        }
        setThreshold(t) {
          return ((this._threshold = t), this);
        }
        push() {
          return this._keys.push(...arguments);
        }
        splice(t, r) {
          for (
            var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), i = 2;
            i < a;
            i++
          )
            n[i - 2] = arguments[i];
          return new KeyList(this._keys.splice(t, r, ...n), this.threshold);
        }
        slice(t, r) {
          return new KeyList(this._keys.slice(t, r), this.threshold);
        }
        [Symbol.iterator]() {
          return this._keys[Symbol.iterator]();
        }
        toArray() {
          return this._keys.slice();
        }
        toString() {
          return JSON.stringify({
            threshold: this._threshold,
            keys: this._keys.toString(),
          });
        }
      }
      r.default = KeyList;
    },
    7857: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.createKeystore = p),
        (r.loadKeystore = y));
      var i = n(a(3553)),
        o = d(a(5005)),
        s = d(a(3293)),
        l = d(a(4670)),
        u = d(a(3661)),
        c = d(a(4673)),
        f = d(a(5002));
      function d(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (d = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      const h = "hmac-sha256";
      async function p(t, r) {
        const a = 32,
          n = 262144,
          i = 32,
          d = await f.bytesAsync(i),
          p = await c.deriveKey(u.HashAlgorithm.Sha256, r, d, n, a),
          y = await f.bytesAsync(16),
          m = await o.createCipheriv(
            o.CipherAlgorithm.Aes128Ctr,
            p.slice(0, 16),
            y,
            t,
          ),
          g = await u.hash(u.HashAlgorithm.Sha384, p.slice(16), m),
          b = {
            version: 1,
            crypto: {
              ciphertext: s.encode(m),
              cipherparams: { iv: s.encode(y) },
              cipher: o.CipherAlgorithm.Aes128Ctr,
              kdf: "pbkdf2",
              kdfparams: { dkLen: a, salt: s.encode(d), c: n, prf: h },
              mac: s.encode(g),
            },
          };
        return l.encode(JSON.stringify(b));
      }
      async function y(t, r) {
        const a = JSON.parse(l.decode(t));
        if (1 !== a.version)
          throw new i.default("unsupported keystore version: " + a.version);
        const {
          ciphertext: n,
          cipherparams: { iv: f },
          cipher: d,
          kdf: p,
          kdfparams: { dkLen: y, salt: m, c: g, prf: b },
          mac: w,
        } = a.crypto;
        if ("pbkdf2" !== p)
          throw new i.default('unsupported key derivation function:" + ' + p);
        if (b !== h)
          throw new i.default("unsupported key derivation hash function: " + b);
        const v = s.decode(m),
          k = s.decode(f),
          _ = s.decode(n),
          P = await c.deriveKey(u.HashAlgorithm.Sha256, r, v, g, y),
          E = s.decode(w),
          j = await u.hash(u.HashAlgorithm.Sha384, P.slice(16), _);
        if (!E.every((t, r) => t === j[r]))
          throw new i.default("HMAC mismatch; passphrase is incorrect");
        return o.createDecipheriv(d, P.slice(0, 16), k, _);
      }
    },
    7859: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.read = v),
        (r.readPemECDSA = w),
        (r.readPemED25519 = b));
      var i = n(a(3553)),
        o = a(7860),
        s = m(a(6081)),
        l = m(a(7861)),
        u = n(a(4994)),
        c = n(a(5004)),
        f = m(a(7862)),
        d = n(a(4995)),
        h = m(a(3293)),
        p = m(a(5005)),
        y = a(2);
      function m(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (m = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      const g = "1.3.101.112";
      async function b(t, r) {
        const a = t.replace(
            /-----BEGIN (.*)-----|-----END (.*)-----|\n|\r/g,
            "",
          ),
          n = l.decode(a);
        if (r) {
          let t;
          try {
            t = o.EncryptedPrivateKeyInfo.parse(n);
          } catch (c) {
            const t = null != c && null != c.message ? c.message : "";
            throw new i.default("failed to parse encrypted private key: " + t);
          }
          const a = await t.decrypt(r);
          let l = null;
          if (a.algId.algIdent !== g)
            throw new i.default(
              "unknown private key algorithm " + a.algId.toString(),
            );
          l = u.default;
          const f = s.decode(a.privateKey);
          if (!("bytes" in f))
            throw new i.default("expected ASN bytes, got " + JSON.stringify(f));
          return l.fromBytes(f.bytes);
        }
        return n.subarray(16);
      }
      async function w(t, r) {
        const a = t.replace(
            /-----BEGIN (.*)-----|-----END (.*)-----|\n|\r/g,
            "",
          ),
          n = l.decode(a);
        if (r) {
          const a = d.default.pem.decode(t)[0],
            n = a.dekInfo.parameters,
            i = h.decode(n),
            o = t.split("\n"),
            s = await p.messageDigest(r, n),
            l = y.Buffer.from(o.slice(4, o.length - 1).join(""), "base64"),
            u = await p.createDecipheriv(p.CipherAlgorithm.Aes128Cbc, s, i, l);
          return c.default.fromBytesDer(u);
        }
        {
          const t = f.fromBER(n),
            r = t.result;
          return r.valueBlock.value[1].valueBlock.valueHexView;
        }
      }
      async function v(t, r) {
        const a = !!t.includes("BEGIN EC PRIVATE KEY");
        return a ? w(t, r) : b(t, r);
      }
    },
    7860: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.PrivateKeyInfo =
          r.EncryptedPrivateKeyInfo =
          r.AlgorithmIdentifier =
            void 0));
      var n = l(a(5005)),
        i = l(a(6081)),
        o = l(a(4673)),
        s = l(a(3661));
      function l(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (l = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      class AlgorithmIdentifier {
        constructor(t) {
          if (!("seq" in t && t.seq.length >= 1 && "ident" in t.seq[0]))
            throw new Error(
              "error parsing AlgorithmIdentifier from " + JSON.stringify(t),
            );
          ((this.algIdent = t.seq[0].ident), (this.parameters = t.seq[1]));
        }
        toString() {
          return JSON.stringify(this);
        }
      }
      r.AlgorithmIdentifier = AlgorithmIdentifier;
      class PBES2Params {
        constructor(t) {
          if (!("seq" in t) || 2 !== t.seq.length)
            throw new Error(
              "error parsing PBES2Params from " + JSON.stringify(t),
            );
          ((this.kdf = new AlgorithmIdentifier(t.seq[0])),
            (this.encScheme = new AlgorithmIdentifier(t.seq[1])));
        }
      }
      class PBKDF2Params {
        constructor(t) {
          if (
            "seq" in t &&
            t.seq.length >= 2 &&
            "bytes" in t.seq[0] &&
            "int" in t.seq[1] &&
            ((this.salt = t.seq[0].bytes),
            (this.iterCount = t.seq[1]["int"]),
            t.seq.length > 2)
          )
            return "seq" in t.seq[2]
              ? void (this.prf = new AlgorithmIdentifier(t.seq[2]))
              : ("int" in t.seq[2] && (this.keyLength = t.seq[2]["int"]),
                void (
                  4 === t.seq.length &&
                  (this.prf = new AlgorithmIdentifier(t.seq[3]))
                ));
          throw new Error(
            "error parsing PBKDF2Params from " + JSON.stringify(t),
          );
        }
      }
      class PrivateKeyInfo {
        constructor(t) {
          if (!("seq" in t) || 3 !== t.seq.length)
            throw new Error(
              "error parsing PrivateKeyInfo from " + JSON.stringify(t),
            );
          if (!("int" in t.seq[0]) || 0 !== t.seq[0]["int"])
            throw new Error(
              "expected version = 0, got " + JSON.stringify(t.seq[0]),
            );
          if (
            ((this.version = 0),
            (this.algId = new AlgorithmIdentifier(t.seq[1])),
            !("bytes" in t.seq[2]))
          )
            throw new Error(
              "expected octet string as 3rd element, got " +
                JSON.stringify(t.seq[2]),
            );
          this.privateKey = t.seq[2].bytes;
        }
        static parse(t) {
          return new PrivateKeyInfo(i.decode(t));
        }
      }
      r.PrivateKeyInfo = PrivateKeyInfo;
      class EncryptedPrivateKeyInfo {
        constructor(t) {
          if ("seq" in t && 2 === t.seq.length && "bytes" in t.seq[1])
            return (
              (this.algId = new AlgorithmIdentifier(t.seq[0])),
              void (this.data = t.seq[1].bytes)
            );
          throw new Error(
            "error parsing EncryptedPrivateKeyInfo from " + JSON.stringify(t),
          );
        }
        static parse(t) {
          return new EncryptedPrivateKeyInfo(i.decode(t));
        }
        async decrypt(t) {
          if (
            "1.2.840.113549.1.5.13" !== this.algId.algIdent ||
            !this.algId.parameters
          )
            throw new Error(
              "unsupported key encryption algorithm: " + this.algId.toString(),
            );
          const r = new PBES2Params(this.algId.parameters);
          if ("1.2.840.113549.1.5.12" !== r.kdf.algIdent || !r.kdf.parameters)
            throw new Error(
              "unsupported key derivation function: " + r.kdf.toString(),
            );
          const a = new PBKDF2Params(r.kdf.parameters);
          if (!a.prf) throw new Error("unsupported PRF HMAC-SHA-1");
          if ("1.2.840.113549.2.9" !== a.prf.algIdent)
            throw new Error("unsupported PRF " + a.prf.toString());
          if ("2.16.840.1.101.3.4.1.2" !== r.encScheme.algIdent)
            throw new Error(
              "unsupported encryption scheme: " + r.encScheme.toString(),
            );
          if (!r.encScheme.parameters || !("bytes" in r.encScheme.parameters))
            throw new Error(
              "expected IV as bytes for AES-128-CBC, got: " +
                JSON.stringify(r.encScheme.parameters),
            );
          const i = a.keyLength || 16,
            l = r.encScheme.parameters.bytes,
            u = await o.deriveKey(
              s.HashAlgorithm.Sha256,
              t,
              a.salt,
              a.iterCount,
              i,
            ),
            c = await n.createDecipheriv(
              n.CipherAlgorithm.Aes128Cbc,
              u,
              l,
              this.data,
            );
          return PrivateKeyInfo.parse(c);
        }
      }
      r.EncryptedPrivateKeyInfo = EncryptedPrivateKeyInfo;
    },
    7861: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.decode = i),
        (r.encode = o));
      var n = a(2);
      function i(t) {
        return Uint8Array.from(n.Buffer.from(t, "base64"));
      }
      function o(t) {
        return n.Buffer.from(t).toString("base64");
      }
    },
    7865: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }), (r.legacy = s));
      var n = o(a(4673)),
        i = o(a(3661));
      function o(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (o = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      function s(t, r) {
        const a = new Uint8Array(t.length + 8);
        a.set(t, 0);
        const o = new DataView(a.buffer, a.byteOffset, a.byteLength);
        0xffffffffff === r
          ? (o.setInt32(t.length + 0, 255), o.setInt32(t.length + 4, -1))
          : (o.setInt32(t.length + 0, r < 0 ? -1 : 0),
            o.setInt32(t.length + 4, r));
        const s = Uint8Array.from([255]);
        return n.deriveKey(i.HashAlgorithm.Sha512, a, s, 2048, 32);
      }
    },
    7866: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default =
          r.SLIP44_ECDSA_HEDERA_PATH =
          r.SLIP44_ECDSA_ETH_PATH =
          r.HEDERA_PATH =
          r.HARDENED =
            void 0));
      var i = n(a(6082)),
        o = n(a(4994)),
        s = n(a(6083)),
        l = n(a(5006)),
        u = n(a(7867)),
        c = n(a(7868)),
        f = n(a(2925)),
        d = _(a(6084)),
        h = _(a(3661)),
        p = _(a(5003)),
        y = _(a(4671)),
        m = _(a(7869)),
        g = _(a(7870)),
        b = _(a(5002)),
        w = n(a(5004)),
        v = n(a(6063)),
        k = _(a(4672));
      function _(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (_ = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      const P = "ed25519 seed",
        E = "Bitcoin seed",
        j = (r.HARDENED = 2147483648),
        B = (r.HEDERA_PATH = [44, 3030, 0, 0]);
      ((r.SLIP44_ECDSA_HEDERA_PATH = [44 | j, 3030 | j, 0 | j, 0]),
        (r.SLIP44_ECDSA_ETH_PATH = [44 | j, 60 | j, 0 | j, 0, 0]));
      class Mnemonic {
        constructor(t) {
          let { words: r } = t;
          this.words = r;
        }
        static generate() {
          return Mnemonic._generate(24);
        }
        static generate12() {
          return Mnemonic._generate(12);
        }
        static async _generate(t) {
          let r;
          if (12 === t) r = 16;
          else {
            if (24 !== t)
              throw new Error(
                `unsupported phrase length ${t}, only 12 or 24 are supported`,
              );
            r = 32;
          }
          const a = await b.bytesAsync(r),
            n = x(Array.from(a)),
            i = await S(a),
            o = n + i,
            s = o.match(/(.{1,11})/g),
            l = (null != s ? s : []).map((t) => c.default[A(t)]);
          return new Mnemonic({ words: l });
        }
        static fromWords(t) {
          return new Mnemonic({ words: t })._validate();
        }
        toPrivateKey(t) {
          return (void 0 === t && (t = ""), this.toEd25519PrivateKey(t));
        }
        async toEd25519PrivateKey(t, r) {
          (void 0 === t && (t = ""), void 0 === r && (r = B));
          let { keyData: a, chainCode: n } = await this._toKeyData(t, P);
          for (const i of r)
            ({ keyData: a, chainCode: n } = await p.derive(a, n, i));
          const s = f.default.sign.keyPair.fromSeed(a);
          if (null == i.default.privateKeyConstructor)
            throw new Error("PrivateKey not found in cache");
          return i.default.privateKeyConstructor(new o.default(s, n));
        }
        async toStandardEd25519PrivateKey(t, r) {
          void 0 === t && (t = "");
          const a = await Mnemonic.toSeed(this.words, t);
          let n = await v.default.fromSeedED25519(a);
          r = null == r ? 0 : r;
          for (const i of [44, 3030, 0, 0, r]) n = await n.derive(i);
          return n;
        }
        async toEcdsaPrivateKey(t, r) {
          (void 0 === t && (t = ""), void 0 === r && (r = B));
          let { keyData: a, chainCode: n } = await this._toKeyData(t, E);
          for (const i of r)
            ({ keyData: a, chainCode: n } = await y.derive(a, n, i));
          if (null == i.default.privateKeyConstructor)
            throw new Error("PrivateKey not found in cache");
          return i.default.privateKeyConstructor(
            new w.default(k.fromBytes(a), n),
          );
        }
        async toStandardECDSAsecp256k1PrivateKey(t, r) {
          void 0 === t && (t = "");
          const a = await Mnemonic.toSeed(this.words, t);
          let n = await v.default.fromSeedECDSAsecp256k1(a);
          r = null == r ? 0 : r;
          for (const i of [
            y.toHardenedIndex(44),
            y.toHardenedIndex(3030),
            y.toHardenedIndex(0),
            0,
            r,
          ])
            n = await n.derive(i);
          return n;
        }
        static async toSeed(t, r) {
          return await m.toSeed(t, r);
        }
        async _toKeyData(t, r) {
          const a = await m.toSeed(this.words, t),
            n = await h.hash(h.HashAlgorithm.Sha512, r, a);
          return { keyData: n.subarray(0, 32), chainCode: n.subarray(32) };
        }
        static async fromString(t) {
          return Mnemonic.fromWords(t.split(/\s|,/));
        }
        async _validate() {
          if (22 === this.words.length) {
            const t = this.words.reduce(
              (t, r, a) =>
                u.default.includes(r.toLowerCase()) ? t : [...t, a],
              [],
            );
            if (t.length > 0)
              throw new s.default(this, l.default.UnknownWords, t);
            const [r, a] = g.legacy1(this.words, u.default),
              n = g.crc8(r);
            if (a !== n)
              throw new s.default(this, l.default.ChecksumMismatch, []);
          } else {
            if (12 !== this.words.length && 24 !== this.words.length)
              throw new s.default(this, l.default.BadLength, []);
            const t = this.words.reduce(
              (t, r, a) => (c.default.includes(r) ? t : [...t, a]),
              [],
            );
            if (t.length > 0)
              throw new s.default(this, l.default.UnknownWords, t);
            const r = this.words
                .map((t) => c.default.indexOf(t).toString(2).padStart(11, "0"))
                .join(""),
              a = 32 * Math.floor(r.length / 33),
              n = r.slice(0, a),
              i = r.slice(a),
              o = n.match(/(.{1,8})/g),
              u = o.map(A),
              f = await S(Uint8Array.from(u));
            if (f !== i)
              throw new s.default(this, l.default.ChecksumMismatch, []);
          }
          return this;
        }
        async toLegacyPrivateKey() {
          let t;
          if (
            (22 === this.words.length
              ? ([t] = g.legacy1(this.words, u.default))
              : (t = await g.legacy2(this.words, c.default)),
            null == i.default.privateKeyFromBytes)
          )
            throw new Error("PrivateKey not found in cache");
          return i.default.privateKeyFromBytes(t);
        }
        toString() {
          return this.words.join(" ");
        }
      }
      function A(t) {
        return parseInt(t, 2);
      }
      function x(t) {
        return t.map((t) => t.toString(2).padStart(8, "0")).join("");
      }
      async function S(t) {
        const r = 8 * t.length,
          a = r / 32,
          n = await d.digest(t);
        return x(Array.from(n)).slice(0, a);
      }
      r.default = Mnemonic;
    },
    7867: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      r.default = [
        "aback",
        "abbey",
        "abbot",
        "abide",
        "ablaze",
        "able",
        "aboard",
        "abode",
        "abort",
        "abound",
        "about",
        "above",
        "abroad",
        "abrupt",
        "absent",
        "absorb",
        "absurd",
        "abuse",
        "accent",
        "accept",
        "access",
        "accord",
        "accuse",
        "ace",
        "ache",
        "aching",
        "acid",
        "acidic",
        "acorn",
        "acre",
        "across",
        "act",
        "action",
        "active",
        "actor",
        "actual",
        "acute",
        "adam",
        "adapt",
        "add",
        "added",
        "addict",
        "adept",
        "adhere",
        "adjust",
        "admire",
        "admit",
        "adobe",
        "adopt",
        "adrift",
        "adult",
        "adverb",
        "advice",
        "aerial",
        "afar",
        "affair",
        "affect",
        "afford",
        "afghan",
        "afield",
        "afloat",
        "afraid",
        "afresh",
        "after",
        "again",
        "age",
        "agency",
        "agenda",
        "agent",
        "aghast",
        "agile",
        "ago",
        "agony",
        "agree",
        "agreed",
        "ahead",
        "aid",
        "aide",
        "aim",
        "air",
        "airman",
        "airy",
        "akin",
        "alarm",
        "alaska",
        "albeit",
        "album",
        "ale",
        "alert",
        "alibi",
        "alice",
        "alien",
        "alight",
        "align",
        "alike",
        "alive",
        "alkali",
        "all",
        "alley",
        "allied",
        "allow",
        "alloy",
        "ally",
        "almond",
        "almost",
        "aloft",
        "alone",
        "along",
        "aloof",
        "aloud",
        "alpha",
        "alpine",
        "also",
        "altar",
        "alter",
        "always",
        "amaze",
        "amazon",
        "amber",
        "ambush",
        "amen",
        "amend",
        "amid",
        "amidst",
        "amiss",
        "among",
        "amount",
        "ample",
        "amuse",
        "anchor",
        "and",
        "andrew",
        "anew",
        "angel",
        "anger",
        "angle",
        "angry",
        "animal",
        "ankle",
        "annoy",
        "annual",
        "answer",
        "anthem",
        "any",
        "anyhow",
        "anyway",
        "apart",
        "apathy",
        "apex",
        "apiece",
        "appeal",
        "appear",
        "apple",
        "apply",
        "april",
        "apron",
        "arab",
        "arcade",
        "arcane",
        "arch",
        "arctic",
        "ardent",
        "are",
        "area",
        "argue",
        "arid",
        "arise",
        "ark",
        "arm",
        "armful",
        "army",
        "aroma",
        "around",
        "arouse",
        "array",
        "arrest",
        "arrive",
        "arrow",
        "arson",
        "art",
        "artery",
        "artful",
        "artist",
        "ascent",
        "ash",
        "ashen",
        "ashore",
        "aside",
        "ask",
        "asleep",
        "aspect",
        "assay",
        "assent",
        "assert",
        "assess",
        "asset",
        "assign",
        "assist",
        "assume",
        "assure",
        "asthma",
        "astute",
        "asylum",
        "ate",
        "athens",
        "atlas",
        "atom",
        "atomic",
        "attach",
        "attack",
        "attain",
        "attend",
        "attic",
        "auburn",
        "audio",
        "audit",
        "august",
        "aunt",
        "auntie",
        "aura",
        "austin",
        "author",
        "auto",
        "autumn",
        "avail",
        "avenge",
        "avenue",
        "avert",
        "avid",
        "avoid",
        "await",
        "awake",
        "awaken",
        "award",
        "aware",
        "awash",
        "away",
        "awful",
        "awhile",
        "axe",
        "axes",
        "axiom",
        "axis",
        "axle",
        "aye",
        "babe",
        "baby",
        "bach",
        "back",
        "backup",
        "bacon",
        "bad",
        "badge",
        "badly",
        "bag",
        "baggy",
        "bail",
        "bait",
        "bake",
        "baker",
        "bakery",
        "bald",
        "ball",
        "ballad",
        "ballet",
        "ballot",
        "baltic",
        "bamboo",
        "ban",
        "banal",
        "banana",
        "band",
        "bang",
        "bank",
        "bar",
        "barber",
        "bare",
        "barely",
        "barge",
        "bark",
        "barley",
        "barn",
        "baron",
        "barrel",
        "barren",
        "basalt",
        "base",
        "basic",
        "basil",
        "basin",
        "basis",
        "basket",
        "bass",
        "bat",
        "batch",
        "bath",
        "baton",
        "battle",
        "bay",
        "beach",
        "beacon",
        "beak",
        "beam",
        "bean",
        "bear",
        "beard",
        "beast",
        "beat",
        "beauty",
        "become",
        "bed",
        "beech",
        "beef",
        "beefy",
        "beep",
        "beer",
        "beet",
        "beetle",
        "before",
        "beg",
        "beggar",
        "begin",
        "behalf",
        "behave",
        "behind",
        "beige",
        "being",
        "belief",
        "bell",
        "belly",
        "belong",
        "below",
        "belt",
        "bench",
        "bend",
        "benign",
        "bent",
        "berlin",
        "berry",
        "berth",
        "beset",
        "beside",
        "best",
        "bestow",
        "bet",
        "beta",
        "betray",
        "better",
        "beware",
        "beyond",
        "bias",
        "biceps",
        "bicker",
        "bid",
        "big",
        "bigger",
        "bike",
        "bile",
        "bill",
        "bin",
        "binary",
        "bind",
        "biopsy",
        "birch",
        "bird",
        "birdie",
        "birth",
        "bishop",
        "bit",
        "bitch",
        "bite",
        "bitter",
        "black",
        "blade",
        "blame",
        "bland",
        "blast",
        "blaze",
        "bleak",
        "blend",
        "bless",
        "blew",
        "blind",
        "blink",
        "blip",
        "bliss",
        "blitz",
        "block",
        "blond",
        "blood",
        "bloody",
        "bloom",
        "blot",
        "blouse",
        "blow",
        "blue",
        "bluff",
        "blunt",
        "blur",
        "blush",
        "boar",
        "board",
        "boast",
        "boat",
        "bob",
        "bodily",
        "body",
        "bogus",
        "boil",
        "bold",
        "bolt",
        "bomb",
        "bombay",
        "bond",
        "bone",
        "bonn",
        "bonnet",
        "bonus",
        "bony",
        "book",
        "boom",
        "boost",
        "boot",
        "booth",
        "booze",
        "border",
        "bore",
        "borrow",
        "bosom",
        "boss",
        "boston",
        "both",
        "bother",
        "bottle",
        "bottom",
        "bought",
        "bounce",
        "bound",
        "bounty",
        "bout",
        "bovine",
        "bow",
        "bowel",
        "bowl",
        "box",
        "boy",
        "boyish",
        "brace",
        "brain",
        "brainy",
        "brake",
        "bran",
        "branch",
        "brand",
        "brandy",
        "brass",
        "brave",
        "bravo",
        "brazil",
        "breach",
        "bread",
        "break",
        "breast",
        "breath",
        "bred",
        "breed",
        "breeze",
        "brew",
        "bribe",
        "brick",
        "bride",
        "bridge",
        "brief",
        "bright",
        "brim",
        "brine",
        "bring",
        "brink",
        "brisk",
        "broad",
        "broke",
        "broken",
        "bronze",
        "brook",
        "broom",
        "brown",
        "bruise",
        "brush",
        "brutal",
        "brute",
        "bubble",
        "buck",
        "bucket",
        "buckle",
        "budget",
        "buffet",
        "buggy",
        "build",
        "bulb",
        "bulge",
        "bulk",
        "bulky",
        "bull",
        "bullet",
        "bully",
        "bump",
        "bumpy",
        "bunch",
        "bundle",
        "bunk",
        "bunny",
        "burden",
        "bureau",
        "burial",
        "buried",
        "burly",
        "burn",
        "burnt",
        "burrow",
        "burst",
        "bury",
        "bus",
        "bush",
        "bust",
        "bustle",
        "busy",
        "but",
        "butler",
        "butt",
        "butter",
        "button",
        "buy",
        "buyer",
        "buzz",
        "bye",
        "byte",
        "cab",
        "cabin",
        "cable",
        "cache",
        "cactus",
        "caesar",
        "cage",
        "cairo",
        "cajun",
        "cajole",
        "cake",
        "calf",
        "call",
        "caller",
        "calm",
        "calmly",
        "came",
        "camel",
        "camera",
        "camp",
        "campus",
        "can",
        "canada",
        "canal",
        "canary",
        "cancel",
        "cancer",
        "candid",
        "candle",
        "candy",
        "cane",
        "canine",
        "canoe",
        "canopy",
        "canvas",
        "canyon",
        "cap",
        "cape",
        "car",
        "carbon",
        "card",
        "care",
        "career",
        "caress",
        "cargo",
        "carl",
        "carnal",
        "carol",
        "carp",
        "carpet",
        "carrot",
        "carry",
        "cart",
        "cartel",
        "case",
        "cash",
        "cask",
        "cast",
        "castle",
        "casual",
        "cat",
        "catch",
        "cater",
        "cattle",
        "caught",
        "causal",
        "cause",
        "cave",
        "cease",
        "celery",
        "cell",
        "cellar",
        "celtic",
        "cement",
        "censor",
        "census",
        "cent",
        "cereal",
        "chain",
        "chair",
        "chalk",
        "chalky",
        "champ",
        "chance",
        "change",
        "chant",
        "chaos",
        "chap",
        "chapel",
        "charge",
        "charm",
        "chart",
        "chase",
        "chat",
        "cheap",
        "cheat",
        "check",
        "cheek",
        "cheeky",
        "cheer",
        "cheery",
        "cheese",
        "chef",
        "cheque",
        "cherry",
        "chess",
        "chest",
        "chew",
        "chic",
        "chick",
        "chief",
        "child",
        "chile",
        "chill",
        "chilly",
        "chin",
        "china",
        "chip",
        "choice",
        "choir",
        "choose",
        "chop",
        "choppy",
        "chord",
        "chorus",
        "chose",
        "chosen",
        "chris",
        "chrome",
        "chunk",
        "chunky",
        "church",
        "cider",
        "cigar",
        "cinema",
        "circa",
        "circle",
        "circus",
        "cite",
        "city",
        "civic",
        "civil",
        "clad",
        "claim",
        "clammy",
        "clan",
        "clap",
        "clash",
        "clasp",
        "class",
        "clause",
        "claw",
        "clay",
        "clean",
        "clear",
        "clergy",
        "clerk",
        "clever",
        "click",
        "client",
        "cliff",
        "climax",
        "climb",
        "clinch",
        "cling",
        "clinic",
        "clip",
        "cloak",
        "clock",
        "clone",
        "close",
        "closer",
        "closet",
        "cloth",
        "cloud",
        "cloudy",
        "clout",
        "clown",
        "club",
        "clue",
        "clumsy",
        "clung",
        "clutch",
        "coach",
        "coal",
        "coarse",
        "coast",
        "coat",
        "coax",
        "cobalt",
        "cobra",
        "coca",
        "cock",
        "cocoa",
        "code",
        "coffee",
        "coffin",
        "cohort",
        "coil",
        "coin",
        "coke",
        "cold",
        "collar",
        "colon",
        "colony",
        "colt",
        "column",
        "comb",
        "combat",
        "come",
        "comedy",
        "comic",
        "commit",
        "common",
        "compel",
        "comply",
        "concur",
        "cone",
        "confer",
        "congo",
        "consul",
        "convex",
        "convey",
        "convoy",
        "cook",
        "cool",
        "cope",
        "copper",
        "copy",
        "coral",
        "cord",
        "core",
        "cork",
        "corn",
        "corner",
        "corps",
        "corpse",
        "corpus",
        "cortex",
        "cosmic",
        "cosmos",
        "cost",
        "costly",
        "cotton",
        "couch",
        "cough",
        "could",
        "count",
        "county",
        "coup",
        "couple",
        "coupon",
        "course",
        "court",
        "cousin",
        "cove",
        "cover",
        "covert",
        "cow",
        "coward",
        "cowboy",
        "cozy",
        "crab",
        "crack",
        "cradle",
        "craft",
        "crafty",
        "crag",
        "crane",
        "crash",
        "crate",
        "crater",
        "crawl",
        "crazy",
        "creak",
        "cream",
        "creamy",
        "create",
        "credit",
        "creed",
        "creek",
        "creep",
        "creepy",
        "crept",
        "crest",
        "crew",
        "cried",
        "crime",
        "crisis",
        "crisp",
        "critic",
        "crook",
        "crop",
        "cross",
        "crow",
        "crowd",
        "crown",
        "crude",
        "cruel",
        "cruise",
        "crunch",
        "crush",
        "crust",
        "crux",
        "cry",
        "crypt",
        "cuba",
        "cube",
        "cubic",
        "cuckoo",
        "cuff",
        "cult",
        "cup",
        "curb",
        "cure",
        "curfew",
        "curl",
        "curry",
        "curse",
        "cursor",
        "curve",
        "cuss",
        "custom",
        "cut",
        "cute",
        "cycle",
        "cyclic",
        "cynic",
        "czech",
        "dad",
        "daddy",
        "dagger",
        "daily",
        "dairy",
        "daisy",
        "dale",
        "dam",
        "damage",
        "damp",
        "dampen",
        "dance",
        "danger",
        "danish",
        "dare",
        "dark",
        "darken",
        "darn",
        "dart",
        "dash",
        "data",
        "date",
        "david",
        "dawn",
        "day",
        "dead",
        "deadly",
        "deaf",
        "deal",
        "dealer",
        "dean",
        "dear",
        "death",
        "debate",
        "debit",
        "debris",
        "debt",
        "debtor",
        "decade",
        "decay",
        "decent",
        "decide",
        "deck",
        "decor",
        "decree",
        "deduce",
        "deed",
        "deep",
        "deeply",
        "deer",
        "defeat",
        "defect",
        "defend",
        "defer",
        "define",
        "defy",
        "degree",
        "deity",
        "delay",
        "delete",
        "delhi",
        "delta",
        "demand",
        "demise",
        "demo",
        "demure",
        "denial",
        "denote",
        "dense",
        "dental",
        "deny",
        "depart",
        "depend",
        "depict",
        "deploy",
        "depot",
        "depth",
        "deputy",
        "derive",
        "desert",
        "design",
        "desire",
        "desist",
        "desk",
        "detail",
        "detect",
        "deter",
        "detest",
        "detour",
        "device",
        "devise",
        "devoid",
        "devote",
        "devour",
        "dial",
        "diana",
        "diary",
        "dice",
        "dictum",
        "did",
        "die",
        "diesel",
        "diet",
        "differ",
        "dig",
        "digest",
        "digit",
        "dine",
        "dinghy",
        "dinner",
        "diode",
        "dip",
        "dire",
        "direct",
        "dirt",
        "dirty",
        "disc",
        "disco",
        "dish",
        "disk",
        "dismal",
        "dispel",
        "ditch",
        "dive",
        "divert",
        "divide",
        "divine",
        "dizzy",
        "docile",
        "dock",
        "doctor",
        "dog",
        "dogma",
        "dole",
        "doll",
        "dollar",
        "dolly",
        "domain",
        "dome",
        "domino",
        "donate",
        "done",
        "donkey",
        "donor",
        "doom",
        "door",
        "dorsal",
        "dose",
        "dot",
        "double",
        "doubt",
        "dough",
        "dour",
        "dove",
        "down",
        "dozen",
        "draft",
        "drag",
        "dragon",
        "drain",
        "drama",
        "drank",
        "draw",
        "drawer",
        "dread",
        "dream",
        "dreary",
        "dress",
        "drew",
        "dried",
        "drift",
        "drill",
        "drink",
        "drip",
        "drive",
        "driver",
        "drop",
        "drove",
        "drown",
        "drug",
        "drum",
        "drunk",
        "dry",
        "dual",
        "duck",
        "duct",
        "due",
        "duel",
        "duet",
        "duke",
        "dull",
        "duly",
        "dumb",
        "dummy",
        "dump",
        "dune",
        "dung",
        "duress",
        "during",
        "dusk",
        "dust",
        "dusty",
        "dutch",
        "duty",
        "dwarf",
        "dwell",
        "dyer",
        "dying",
        "dynamo",
        "each",
        "eager",
        "eagle",
        "ear",
        "earl",
        "early",
        "earn",
        "earth",
        "ease",
        "easel",
        "easily",
        "east",
        "easter",
        "easy",
        "eat",
        "eaten",
        "eater",
        "echo",
        "eddy",
        "eden",
        "edge",
        "edible",
        "edict",
        "edit",
        "editor",
        "eel",
        "eerie",
        "eerily",
        "effect",
        "effort",
        "egg",
        "ego",
        "eight",
        "eighth",
        "eighty",
        "either",
        "elbow",
        "elder",
        "eldest",
        "elect",
        "eleven",
        "elicit",
        "elite",
        "else",
        "elude",
        "elves",
        "embark",
        "emblem",
        "embryo",
        "emerge",
        "emit",
        "empire",
        "employ",
        "empty",
        "enable",
        "enamel",
        "end",
        "endure",
        "enemy",
        "energy",
        "engage",
        "engine",
        "enjoy",
        "enlist",
        "enough",
        "ensure",
        "entail",
        "enter",
        "entire",
        "entry",
        "envoy",
        "envy",
        "enzyme",
        "epic",
        "epoch",
        "equal",
        "equate",
        "equip",
        "equity",
        "era",
        "erect",
        "eric",
        "erode",
        "erotic",
        "errant",
        "error",
        "escape",
        "escort",
        "essay",
        "essex",
        "estate",
        "esteem",
        "ethic",
        "ethnic",
        "europe",
        "evade",
        "eve",
        "even",
        "event",
        "ever",
        "every",
        "evict",
        "evil",
        "evoke",
        "evolve",
        "exact",
        "exam",
        "exceed",
        "excel",
        "except",
        "excess",
        "excise",
        "excite",
        "excuse",
        "exempt",
        "exert",
        "exile",
        "exist",
        "exit",
        "exodus",
        "exotic",
        "expand",
        "expect",
        "expert",
        "expire",
        "export",
        "expose",
        "extend",
        "extra",
        "eye",
        "eyed",
        "fabric",
        "face",
        "facial",
        "fact",
        "factor",
        "fade",
        "fail",
        "faint",
        "fair",
        "fairly",
        "fairy",
        "faith",
        "fake",
        "falcon",
        "fall",
        "false",
        "falter",
        "fame",
        "family",
        "famine",
        "famous",
        "fan",
        "fancy",
        "far",
        "farce",
        "fare",
        "farm",
        "farmer",
        "fast",
        "fasten",
        "faster",
        "fat",
        "fatal",
        "fate",
        "father",
        "fatty",
        "fault",
        "faulty",
        "fauna",
        "fear",
        "feast",
        "feat",
        "fed",
        "fee",
        "feeble",
        "feed",
        "feel",
        "feet",
        "fell",
        "fellow",
        "felt",
        "female",
        "fence",
        "fend",
        "ferry",
        "fetal",
        "fetch",
        "feudal",
        "fever",
        "few",
        "fewer",
        "fiasco",
        "fiddle",
        "field",
        "fiend",
        "fierce",
        "fiery",
        "fifth",
        "fifty",
        "fig",
        "fight",
        "figure",
        "file",
        "fill",
        "filled",
        "filler",
        "film",
        "filter",
        "filth",
        "filthy",
        "final",
        "finale",
        "find",
        "fine",
        "finery",
        "finger",
        "finish",
        "finite",
        "fire",
        "firm",
        "firmly",
        "first",
        "fiscal",
        "fish",
        "fisher",
        "fist",
        "fit",
        "fitful",
        "five",
        "fix",
        "flag",
        "flair",
        "flak",
        "flame",
        "flank",
        "flap",
        "flare",
        "flash",
        "flask",
        "flat",
        "flavor",
        "flaw",
        "fled",
        "flee",
        "fleece",
        "fleet",
        "flesh",
        "fleshy",
        "flew",
        "flick",
        "flight",
        "flimsy",
        "flint",
        "flirt",
        "float",
        "flock",
        "flood",
        "floor",
        "floppy",
        "flora",
        "floral",
        "flour",
        "flow",
        "flower",
        "fluent",
        "fluffy",
        "fluid",
        "flung",
        "flurry",
        "flush",
        "flute",
        "flux",
        "fly",
        "flyer",
        "foal",
        "foam",
        "focal",
        "focus",
        "fog",
        "foil",
        "fold",
        "folk",
        "follow",
        "folly",
        "fond",
        "fondly",
        "font",
        "food",
        "fool",
        "foot",
        "for",
        "forbid",
        "force",
        "ford",
        "forest",
        "forge",
        "forget",
        "fork",
        "form",
        "formal",
        "format",
        "former",
        "fort",
        "forth",
        "forty",
        "forum",
        "fossil",
        "foster",
        "foul",
        "found",
        "four",
        "fourth",
        "fox",
        "foyer",
        "frail",
        "frame",
        "franc",
        "france",
        "frank",
        "fraud",
        "fred",
        "free",
        "freed",
        "freely",
        "freeze",
        "french",
        "frenzy",
        "fresh",
        "friar",
        "friday",
        "fridge",
        "fried",
        "friend",
        "fright",
        "fringe",
        "frock",
        "frog",
        "from",
        "front",
        "frost",
        "frosty",
        "frown",
        "frozen",
        "frugal",
        "fruit",
        "fry",
        "fudge",
        "fuel",
        "full",
        "fully",
        "fumes",
        "fun",
        "fund",
        "funny",
        "fur",
        "furry",
        "fury",
        "fuse",
        "fusion",
        "fuss",
        "fussy",
        "futile",
        "future",
        "fuzzy",
        "gadget",
        "gain",
        "gala",
        "galaxy",
        "gale",
        "gall",
        "galley",
        "gallon",
        "gallop",
        "gamble",
        "game",
        "gamma",
        "gandhi",
        "gang",
        "gap",
        "garage",
        "garden",
        "garlic",
        "gas",
        "gasp",
        "gate",
        "gather",
        "gauge",
        "gaunt",
        "gave",
        "gaze",
        "gear",
        "geese",
        "gem",
        "gemini",
        "gender",
        "gene",
        "geneva",
        "genial",
        "genius",
        "genre",
        "gentle",
        "gently",
        "gentry",
        "genus",
        "george",
        "germ",
        "get",
        "ghetto",
        "ghost",
        "giant",
        "gift",
        "giggle",
        "gill",
        "gilt",
        "ginger",
        "girl",
        "give",
        "given",
        "glad",
        "glade",
        "glance",
        "gland",
        "glare",
        "glass",
        "glassy",
        "gleam",
        "glee",
        "glide",
        "global",
        "globe",
        "gloom",
        "gloomy",
        "gloria",
        "glory",
        "gloss",
        "glossy",
        "glove",
        "glow",
        "glue",
        "gnat",
        "gnu",
        "goal",
        "goat",
        "gold",
        "golden",
        "golf",
        "gone",
        "gong",
        "goo",
        "good",
        "goose",
        "gore",
        "gorge",
        "gory",
        "gosh",
        "gospel",
        "gossip",
        "got",
        "gothic",
        "govern",
        "gown",
        "grab",
        "grace",
        "grade",
        "grail",
        "grain",
        "grand",
        "grant",
        "grape",
        "graph",
        "grasp",
        "grass",
        "grassy",
        "grate",
        "grave",
        "gravel",
        "gravy",
        "grease",
        "greasy",
        "great",
        "greece",
        "greed",
        "greedy",
        "greek",
        "green",
        "greet",
        "grew",
        "grey",
        "grid",
        "grief",
        "grill",
        "grim",
        "grin",
        "grind",
        "grip",
        "grit",
        "gritty",
        "groan",
        "groin",
        "groom",
        "groove",
        "gross",
        "ground",
        "group",
        "grove",
        "grow",
        "grown",
        "growth",
        "grudge",
        "grunt",
        "guard",
        "guess",
        "guest",
        "guide",
        "guild",
        "guilt",
        "guilty",
        "guise",
        "guitar",
        "gulf",
        "gully",
        "gun",
        "gunman",
        "guru",
        "gut",
        "guy",
        "gypsy",
        "habit",
        "hack",
        "had",
        "hail",
        "hair",
        "hairy",
        "haiti",
        "hale",
        "half",
        "hall",
        "halt",
        "hamlet",
        "hammer",
        "hand",
        "handle",
        "handy",
        "hang",
        "hangar",
        "hanoi",
        "happen",
        "happy",
        "harass",
        "harbor",
        "hard",
        "harder",
        "hardly",
        "hare",
        "harem",
        "harm",
        "harp",
        "harry",
        "harsh",
        "has",
        "hash",
        "hassle",
        "haste",
        "hasten",
        "hasty",
        "hat",
        "hatch",
        "hate",
        "haul",
        "haunt",
        "havana",
        "have",
        "haven",
        "havoc",
        "hawaii",
        "hawk",
        "hay",
        "hazard",
        "haze",
        "hazel",
        "hazy",
        "head",
        "heal",
        "health",
        "heap",
        "hear",
        "heard",
        "heart",
        "hearth",
        "hearty",
        "heat",
        "heater",
        "heaven",
        "heavy",
        "hebrew",
        "heck",
        "hectic",
        "hedge",
        "heel",
        "hefty",
        "height",
        "heir",
        "held",
        "helium",
        "helix",
        "hell",
        "hello",
        "helm",
        "helmet",
        "help",
        "hemp",
        "hence",
        "henry",
        "her",
        "herald",
        "herb",
        "herd",
        "here",
        "hereby",
        "hermes",
        "hernia",
        "hero",
        "heroic",
        "heroin",
        "hey",
        "heyday",
        "hick",
        "hidden",
        "hide",
        "high",
        "higher",
        "highly",
        "hill",
        "him",
        "hind",
        "hinder",
        "hint",
        "hippie",
        "hire",
        "his",
        "hiss",
        "hit",
        "hive",
        "hoard",
        "hoarse",
        "hobby",
        "hockey",
        "hold",
        "holder",
        "hole",
        "hollow",
        "holly",
        "holy",
        "home",
        "honest",
        "honey",
        "hood",
        "hook",
        "hope",
        "horn",
        "horrid",
        "horror",
        "horse",
        "hose",
        "host",
        "hot",
        "hotel",
        "hound",
        "hour",
        "house",
        "hover",
        "how",
        "huge",
        "hull",
        "human",
        "humane",
        "humble",
        "humid",
        "hung",
        "hunger",
        "hungry",
        "hunt",
        "hurdle",
        "hurl",
        "hurry",
        "hurt",
        "hush",
        "hut",
        "hybrid",
        "hymn",
        "hyphen",
        "ice",
        "icing",
        "icon",
        "idaho",
        "idea",
        "ideal",
        "idiom",
        "idiot",
        "idle",
        "idly",
        "idol",
        "ignite",
        "ignore",
        "ill",
        "image",
        "immune",
        "impact",
        "imply",
        "import",
        "impose",
        "inca",
        "incest",
        "inch",
        "income",
        "incur",
        "indeed",
        "index",
        "india",
        "indian",
        "indoor",
        "induce",
        "inept",
        "inert",
        "infant",
        "infect",
        "infer",
        "influx",
        "inform",
        "inject",
        "injure",
        "injury",
        "ink",
        "inlaid",
        "inland",
        "inlet",
        "inmate",
        "inn",
        "innate",
        "inner",
        "input",
        "insane",
        "insect",
        "insert",
        "inset",
        "inside",
        "insist",
        "insult",
        "insure",
        "intact",
        "intake",
        "intend",
        "inter",
        "into",
        "invade",
        "invent",
        "invest",
        "invite",
        "invoke",
        "inward",
        "iowa",
        "iran",
        "iraq",
        "irish",
        "iron",
        "ironic",
        "irony",
        "isaac",
        "isabel",
        "island",
        "isle",
        "israel",
        "issue",
        "italy",
        "itch",
        "item",
        "itself",
        "ivan",
        "ivory",
        "jack",
        "jacket",
        "jacob",
        "jade",
        "jaguar",
        "jail",
        "james",
        "jane",
        "japan",
        "jargon",
        "java",
        "jaw",
        "jazz",
        "jeep",
        "jelly",
        "jerky",
        "jest",
        "jet",
        "jewel",
        "jewish",
        "jim",
        "job",
        "jock",
        "jockey",
        "joe",
        "john",
        "join",
        "joint",
        "joke",
        "jolly",
        "jolt",
        "jordan",
        "joseph",
        "joy",
        "joyful",
        "joyous",
        "judge",
        "judy",
        "juice",
        "juicy",
        "july",
        "jumble",
        "jumbo",
        "jump",
        "june",
        "jungle",
        "junior",
        "junk",
        "junta",
        "jury",
        "just",
        "kansas",
        "karate",
        "karl",
        "keel",
        "keen",
        "keep",
        "keeper",
        "kenya",
        "kept",
        "kernel",
        "kettle",
        "key",
        "khaki",
        "kick",
        "kid",
        "kidnap",
        "kidney",
        "kill",
        "killer",
        "kin",
        "kind",
        "kindly",
        "king",
        "kiss",
        "kite",
        "kitten",
        "knack",
        "knee",
        "kneel",
        "knew",
        "knife",
        "knight",
        "knit",
        "knob",
        "knock",
        "knot",
        "know",
        "known",
        "koran",
        "korea",
        "kuwait",
        "label",
        "lace",
        "lack",
        "lad",
        "ladder",
        "laden",
        "lady",
        "lagoon",
        "laity",
        "lake",
        "lamb",
        "lame",
        "lamp",
        "lance",
        "land",
        "lane",
        "lap",
        "lapse",
        "large",
        "larval",
        "laser",
        "last",
        "latch",
        "late",
        "lately",
        "latent",
        "later",
        "latest",
        "latin",
        "latter",
        "laugh",
        "launch",
        "lava",
        "lavish",
        "law",
        "lawful",
        "lawn",
        "lawyer",
        "lay",
        "layer",
        "layman",
        "lazy",
        "lead",
        "leader",
        "leaf",
        "leafy",
        "league",
        "leak",
        "leaky",
        "lean",
        "leap",
        "learn",
        "lease",
        "leash",
        "least",
        "leave",
        "led",
        "ledge",
        "left",
        "leg",
        "legacy",
        "legal",
        "legend",
        "legion",
        "lemon",
        "lend",
        "length",
        "lens",
        "lent",
        "leo",
        "leper",
        "lesion",
        "less",
        "lessen",
        "lesser",
        "lesson",
        "lest",
        "let",
        "lethal",
        "letter",
        "level",
        "lever",
        "levy",
        "lewis",
        "liable",
        "liar",
        "libel",
        "libya",
        "lice",
        "lick",
        "lid",
        "lie",
        "lied",
        "lier",
        "life",
        "lift",
        "light",
        "like",
        "likely",
        "limb",
        "lime",
        "limit",
        "limp",
        "line",
        "linear",
        "linen",
        "linger",
        "link",
        "lint",
        "lion",
        "lip",
        "liquid",
        "liquor",
        "list",
        "listen",
        "lit",
        "live",
        "lively",
        "liver",
        "liz",
        "lizard",
        "load",
        "loaf",
        "loan",
        "lobby",
        "lobe",
        "local",
        "locate",
        "lock",
        "locus",
        "lodge",
        "loft",
        "lofty",
        "log",
        "logic",
        "logo",
        "london",
        "lone",
        "lonely",
        "long",
        "longer",
        "look",
        "loop",
        "loose",
        "loosen",
        "loot",
        "lord",
        "lorry",
        "lose",
        "loss",
        "lost",
        "lot",
        "lotion",
        "lotus",
        "loud",
        "loudly",
        "lounge",
        "lousy",
        "love",
        "lovely",
        "lover",
        "low",
        "lower",
        "lowest",
        "loyal",
        "lucid",
        "luck",
        "lucky",
        "lucy",
        "lull",
        "lump",
        "lumpy",
        "lunacy",
        "lunar",
        "lunch",
        "lung",
        "lure",
        "lurid",
        "lush",
        "lust",
        "lute",
        "luther",
        "luxury",
        "lying",
        "lymph",
        "lynch",
        "lyric",
        "macho",
        "macro",
        "mad",
        "madam",
        "made",
        "mafia",
        "magic",
        "magma",
        "magnet",
        "magnum",
        "magpie",
        "maid",
        "maiden",
        "mail",
        "main",
        "mainly",
        "major",
        "make",
        "maker",
        "male",
        "malice",
        "mall",
        "malt",
        "mammal",
        "manage",
        "mane",
        "mania",
        "manic",
        "manner",
        "manor",
        "mantle",
        "manual",
        "manure",
        "many",
        "map",
        "maple",
        "marble",
        "march",
        "mare",
        "margin",
        "maria",
        "marina",
        "mark",
        "market",
        "marry",
        "mars",
        "marsh",
        "martin",
        "martyr",
        "mary",
        "mask",
        "mason",
        "mass",
        "mast",
        "master",
        "mat",
        "match",
        "mate",
        "matrix",
        "matter",
        "mature",
        "maxim",
        "may",
        "maybe",
        "mayor",
        "maze",
        "mead",
        "meadow",
        "meal",
        "mean",
        "meant",
        "meat",
        "medal",
        "media",
        "median",
        "medic",
        "medium",
        "meet",
        "mellow",
        "melody",
        "melon",
        "melt",
        "member",
        "memo",
        "memory",
        "menace",
        "mend",
        "mental",
        "mentor",
        "menu",
        "mercy",
        "mere",
        "merely",
        "merge",
        "merger",
        "merit",
        "merry",
        "mesh",
        "mess",
        "messy",
        "met",
        "metal",
        "meter",
        "method",
        "methyl",
        "metric",
        "metro",
        "mexico",
        "miami",
        "mickey",
        "mid",
        "midday",
        "middle",
        "midst",
        "midway",
        "might",
        "mighty",
        "mild",
        "mildew",
        "mile",
        "milk",
        "milky",
        "mill",
        "mimic",
        "mince",
        "mind",
        "mine",
        "mini",
        "mink",
        "minor",
        "mint",
        "minus",
        "minute",
        "mire",
        "mirror",
        "mirth",
        "misery",
        "miss",
        "mist",
        "misty",
        "mite",
        "mix",
        "moan",
        "moat",
        "mob",
        "mobile",
        "mock",
        "mode",
        "model",
        "modem",
        "modern",
        "modest",
        "modify",
        "module",
        "moist",
        "molar",
        "mold",
        "mole",
        "molten",
        "moment",
        "monday",
        "money",
        "monk",
        "monkey",
        "month",
        "mood",
        "moody",
        "moon",
        "moor",
        "moral",
        "morale",
        "morbid",
        "more",
        "morgue",
        "mortal",
        "mortar",
        "mosaic",
        "moscow",
        "moses",
        "mosque",
        "moss",
        "most",
        "mostly",
        "moth",
        "mother",
        "motion",
        "motive",
        "motor",
        "mount",
        "mourn",
        "mouse",
        "mouth",
        "move",
        "movie",
        "mrs",
        "much",
        "muck",
        "mucus",
        "mud",
        "muddle",
        "muddy",
        "mule",
        "mummy",
        "munich",
        "murder",
        "murky",
        "murmur",
        "muscle",
        "museum",
        "music",
        "mussel",
        "must",
        "mutant",
        "mute",
        "mutiny",
        "mutter",
        "mutton",
        "mutual",
        "muzzle",
        "myopic",
        "myriad",
        "myself",
        "mystic",
        "myth",
        "nadir",
        "nail",
        "naked",
        "name",
        "namely",
        "nape",
        "napkin",
        "naples",
        "narrow",
        "nasal",
        "nasty",
        "nathan",
        "nation",
        "native",
        "nature",
        "nausea",
        "naval",
        "nave",
        "navy",
        "near",
        "nearer",
        "nearly",
        "neat",
        "neatly",
        "neck",
        "need",
        "needle",
        "needy",
        "negate",
        "neon",
        "nepal",
        "nephew",
        "nerve",
        "nest",
        "net",
        "neural",
        "never",
        "newly",
        "next",
        "nice",
        "nicely",
        "niche",
        "nickel",
        "niece",
        "night",
        "nile",
        "nimble",
        "nine",
        "ninety",
        "ninth",
        "nobel",
        "noble",
        "nobody",
        "node",
        "noise",
        "noisy",
        "none",
        "noon",
        "nor",
        "norm",
        "normal",
        "north",
        "norway",
        "nose",
        "nosy",
        "not",
        "note",
        "notice",
        "notify",
        "notion",
        "noun",
        "novel",
        "novice",
        "now",
        "nozzle",
        "null",
        "numb",
        "number",
        "nurse",
        "nut",
        "nylon",
        "nymph",
        "oak",
        "oar",
        "oasis",
        "oath",
        "obese",
        "obey",
        "object",
        "oblige",
        "oboe",
        "obtain",
        "obtuse",
        "occult",
        "occupy",
        "occur",
        "ocean",
        "octave",
        "odd",
        "off",
        "offend",
        "offer",
        "office",
        "offset",
        "often",
        "ohio",
        "oil",
        "oily",
        "okay",
        "old",
        "older",
        "oldest",
        "olive",
        "omega",
        "omen",
        "omit",
        "once",
        "one",
        "onion",
        "only",
        "onset",
        "onto",
        "onus",
        "onward",
        "opaque",
        "open",
        "openly",
        "opera",
        "opium",
        "oppose",
        "optic",
        "option",
        "oracle",
        "oral",
        "orange",
        "orbit",
        "orchid",
        "ordeal",
        "order",
        "organ",
        "orgasm",
        "orient",
        "origin",
        "ornate",
        "orphan",
        "oscar",
        "other",
        "otter",
        "ought",
        "ounce",
        "our",
        "out",
        "outer",
        "output",
        "outset",
        "oval",
        "oven",
        "over",
        "overt",
        "owe",
        "owing",
        "owl",
        "own",
        "owner",
        "oxford",
        "oxide",
        "oxygen",
        "oyster",
        "ozone",
        "pace",
        "pack",
        "packet",
        "pact",
        "pad",
        "paddle",
        "paddy",
        "pagan",
        "page",
        "paid",
        "pain",
        "paint",
        "pair",
        "palace",
        "pale",
        "palm",
        "pan",
        "panama",
        "panel",
        "panic",
        "papa",
        "papal",
        "paper",
        "parade",
        "parcel",
        "pardon",
        "parent",
        "paris",
        "parish",
        "park",
        "parody",
        "parrot",
        "part",
        "partly",
        "party",
        "pascal",
        "pass",
        "past",
        "paste",
        "pastel",
        "pastor",
        "pastry",
        "pat",
        "patch",
        "patent",
        "path",
        "patio",
        "patrol",
        "patron",
        "paul",
        "pause",
        "pave",
        "paw",
        "pawn",
        "pay",
        "peace",
        "peach",
        "peak",
        "pear",
        "pearl",
        "pedal",
        "peel",
        "peer",
        "peking",
        "pelvic",
        "pelvis",
        "pen",
        "penal",
        "pence",
        "pencil",
        "penny",
        "people",
        "pepper",
        "per",
        "perch",
        "peril",
        "period",
        "perish",
        "permit",
        "person",
        "peru",
        "pest",
        "pet",
        "peter",
        "petite",
        "petrol",
        "petty",
        "phase",
        "philip",
        "phone",
        "photo",
        "phrase",
        "piano",
        "pick",
        "picket",
        "picnic",
        "pie",
        "piece",
        "pier",
        "pierce",
        "piety",
        "pig",
        "pigeon",
        "piggy",
        "pike",
        "pile",
        "pill",
        "pillar",
        "pillow",
        "pilot",
        "pin",
        "pinch",
        "pine",
        "pink",
        "pint",
        "pious",
        "pipe",
        "pirate",
        "piss",
        "pistol",
        "piston",
        "pit",
        "pitch",
        "pity",
        "pivot",
        "pixel",
        "pizza",
        "place",
        "placid",
        "plague",
        "plain",
        "plan",
        "plane",
        "planet",
        "plank",
        "plant",
        "plasma",
        "plate",
        "play",
        "player",
        "plea",
        "plead",
        "please",
        "pledge",
        "plenty",
        "plight",
        "plot",
        "plough",
        "ploy",
        "plug",
        "plum",
        "plump",
        "plunge",
        "plural",
        "plus",
        "plush",
        "pocket",
        "poem",
        "poet",
        "poetic",
        "poetry",
        "point",
        "poison",
        "poland",
        "polar",
        "pole",
        "police",
        "policy",
        "polish",
        "polite",
        "poll",
        "pollen",
        "polo",
        "pond",
        "ponder",
        "pony",
        "pool",
        "poor",
        "poorly",
        "pop",
        "poppy",
        "pore",
        "pork",
        "port",
        "portal",
        "pose",
        "posh",
        "post",
        "postal",
        "pot",
        "potato",
        "potent",
        "pouch",
        "pound",
        "pour",
        "powder",
        "power",
        "praise",
        "pray",
        "prayer",
        "preach",
        "prefer",
        "prefix",
        "press",
        "pretty",
        "price",
        "pride",
        "priest",
        "primal",
        "prime",
        "prince",
        "print",
        "prior",
        "prism",
        "prison",
        "privy",
        "prize",
        "probe",
        "profit",
        "prompt",
        "prone",
        "proof",
        "propel",
        "proper",
        "prose",
        "proton",
        "proud",
        "prove",
        "proven",
        "proxy",
        "prune",
        "pry",
        "psalm",
        "pseudo",
        "psyche",
        "pub",
        "public",
        "puff",
        "pull",
        "pulp",
        "pulpit",
        "pulsar",
        "pulse",
        "pump",
        "punch",
        "punish",
        "punk",
        "pupil",
        "puppet",
        "puppy",
        "pure",
        "purely",
        "purge",
        "purify",
        "purple",
        "purse",
        "pursue",
        "push",
        "pushy",
        "put",
        "putt",
        "puzzle",
        "quaint",
        "quake",
        "quarry",
        "quart",
        "quartz",
        "quebec",
        "queen",
        "queer",
        "query",
        "quest",
        "queue",
        "quick",
        "quid",
        "quiet",
        "quilt",
        "quirk",
        "quit",
        "quite",
        "quiver",
        "quiz",
        "quota",
        "quote",
        "rabbit",
        "race",
        "racial",
        "racism",
        "rack",
        "racket",
        "radar",
        "radio",
        "radish",
        "radius",
        "raffle",
        "raft",
        "rage",
        "raid",
        "rail",
        "rain",
        "rainy",
        "raise",
        "rake",
        "rally",
        "ramp",
        "random",
        "range",
        "rank",
        "ransom",
        "rape",
        "rapid",
        "rare",
        "rarely",
        "rarity",
        "rash",
        "rat",
        "rate",
        "rather",
        "ratify",
        "ratio",
        "rattle",
        "rave",
        "raven",
        "raw",
        "ray",
        "razor",
        "reach",
        "react",
        "read",
        "reader",
        "ready",
        "real",
        "really",
        "realm",
        "reap",
        "rear",
        "reason",
        "rebel",
        "recall",
        "recent",
        "recess",
        "recipe",
        "reckon",
        "record",
        "recoup",
        "rector",
        "red",
        "redeem",
        "redo",
        "reduce",
        "reed",
        "reef",
        "reek",
        "refer",
        "reform",
        "refuge",
        "refuse",
        "regal",
        "regard",
        "regent",
        "regime",
        "region",
        "regret",
        "reign",
        "reject",
        "relate",
        "relax",
        "relay",
        "relic",
        "relief",
        "relish",
        "rely",
        "remain",
        "remark",
        "remedy",
        "remind",
        "remit",
        "remote",
        "remove",
        "renal",
        "render",
        "rent",
        "rental",
        "repair",
        "repeal",
        "repeat",
        "repent",
        "reply",
        "report",
        "rescue",
        "resent",
        "reside",
        "resign",
        "resin",
        "resist",
        "resort",
        "rest",
        "result",
        "resume",
        "retail",
        "retain",
        "retina",
        "retire",
        "return",
        "reveal",
        "review",
        "revise",
        "revive",
        "revolt",
        "reward",
        "rex",
        "rhine",
        "rhino",
        "rhyme",
        "rhythm",
        "ribbon",
        "rice",
        "rich",
        "rick",
        "rid",
        "ride",
        "rider",
        "ridge",
        "rife",
        "rifle",
        "rift",
        "right",
        "rigid",
        "rile",
        "rim",
        "ring",
        "rinse",
        "riot",
        "ripe",
        "ripen",
        "ripple",
        "rise",
        "risk",
        "risky",
        "rite",
        "ritual",
        "ritz",
        "rival",
        "river",
        "road",
        "roar",
        "roast",
        "rob",
        "robe",
        "robert",
        "robin",
        "robot",
        "robust",
        "rock",
        "rocket",
        "rocky",
        "rod",
        "rode",
        "rodent",
        "rogue",
        "role",
        "roll",
        "roman",
        "rome",
        "roof",
        "room",
        "root",
        "rope",
        "rose",
        "rosy",
        "rot",
        "rotate",
        "rotor",
        "rotten",
        "rouge",
        "rough",
        "round",
        "route",
        "rover",
        "row",
        "royal",
        "rub",
        "rubber",
        "rubble",
        "ruby",
        "rudder",
        "rude",
        "rug",
        "rugby",
        "ruin",
        "rule",
        "ruler",
        "rumble",
        "rump",
        "run",
        "rune",
        "rung",
        "runway",
        "rural",
        "rush",
        "russia",
        "rust",
        "rustic",
        "rusty",
        "sack",
        "sacred",
        "sad",
        "saddle",
        "sadism",
        "sadly",
        "safari",
        "safe",
        "safely",
        "safer",
        "safety",
        "saga",
        "sage",
        "sahara",
        "said",
        "sail",
        "sailor",
        "saint",
        "sake",
        "salad",
        "salary",
        "sale",
        "saline",
        "saliva",
        "salmon",
        "saloon",
        "salt",
        "salty",
        "salute",
        "sam",
        "same",
        "sample",
        "sand",
        "sandy",
        "sane",
        "sash",
        "satin",
        "satire",
        "saturn",
        "sauce",
        "saucer",
        "saudi",
        "sauna",
        "savage",
        "save",
        "saw",
        "say",
        "scale",
        "scalp",
        "scan",
        "scant",
        "scar",
        "scarce",
        "scare",
        "scarf",
        "scary",
        "scene",
        "scenic",
        "scent",
        "school",
        "scold",
        "scope",
        "score",
        "scorn",
        "scotch",
        "scott",
        "scout",
        "scrap",
        "scrape",
        "scream",
        "screen",
        "screw",
        "script",
        "scroll",
        "scrub",
        "scum",
        "sea",
        "seal",
        "seam",
        "seaman",
        "search",
        "season",
        "seat",
        "second",
        "secret",
        "sect",
        "sector",
        "secure",
        "see",
        "seed",
        "seeing",
        "seek",
        "seem",
        "seize",
        "seldom",
        "select",
        "self",
        "sell",
        "seller",
        "semi",
        "senate",
        "send",
        "senile",
        "senior",
        "sense",
        "sensor",
        "sent",
        "sentry",
        "seoul",
        "sequel",
        "serene",
        "serial",
        "series",
        "sermon",
        "serum",
        "serve",
        "server",
        "set",
        "settle",
        "seven",
        "severe",
        "sew",
        "sewage",
        "shabby",
        "shade",
        "shadow",
        "shady",
        "shaft",
        "shaggy",
        "shah",
        "shake",
        "shaky",
        "shall",
        "sham",
        "shame",
        "shape",
        "share",
        "shark",
        "sharp",
        "shawl",
        "she",
        "shear",
        "sheen",
        "sheep",
        "sheer",
        "sheet",
        "shelf",
        "shell",
        "sherry",
        "shield",
        "shift",
        "shine",
        "shiny",
        "ship",
        "shire",
        "shirk",
        "shirt",
        "shiver",
        "shock",
        "shoe",
        "shook",
        "shoot",
        "shop",
        "shore",
        "short",
        "shot",
        "should",
        "shout",
        "show",
        "shower",
        "shrank",
        "shrewd",
        "shrill",
        "shrimp",
        "shrine",
        "shrink",
        "shrub",
        "shrug",
        "shut",
        "shy",
        "shyly",
        "sick",
        "side",
        "siege",
        "sigh",
        "sight",
        "sigma",
        "sign",
        "signal",
        "silent",
        "silk",
        "silken",
        "silky",
        "sill",
        "silly",
        "silo",
        "silver",
        "simple",
        "simply",
        "since",
        "sinful",
        "sing",
        "singer",
        "single",
        "sink",
        "sir",
        "sire",
        "siren",
        "sister",
        "sit",
        "site",
        "sitter",
        "six",
        "sixth",
        "sixty",
        "size",
        "sketch",
        "skill",
        "skin",
        "skinny",
        "skip",
        "skirt",
        "skull",
        "sky",
        "slab",
        "slack",
        "slain",
        "slam",
        "slang",
        "slap",
        "slat",
        "slate",
        "slave",
        "sleek",
        "sleep",
        "sleepy",
        "sleeve",
        "slice",
        "slick",
        "slid",
        "slide",
        "slight",
        "slim",
        "slimy",
        "sling",
        "slip",
        "slit",
        "slogan",
        "slope",
        "sloppy",
        "slot",
        "slow",
        "slowly",
        "slug",
        "slum",
        "slump",
        "smack",
        "small",
        "smart",
        "smash",
        "smear",
        "smell",
        "smelly",
        "smelt",
        "smile",
        "smite",
        "smoke",
        "smoky",
        "smooth",
        "smug",
        "snack",
        "snail",
        "snake",
        "snap",
        "snatch",
        "sneak",
        "snow",
        "snowy",
        "snug",
        "soak",
        "soap",
        "sober",
        "soccer",
        "social",
        "sock",
        "socket",
        "socks",
        "soda",
        "sodden",
        "sodium",
        "sofa",
        "soft",
        "soften",
        "softly",
        "soggy",
        "soil",
        "solar",
        "sold",
        "sole",
        "solely",
        "solemn",
        "solid",
        "solo",
        "solve",
        "some",
        "son",
        "sonar",
        "sonata",
        "song",
        "sonic",
        "sony",
        "soon",
        "sooner",
        "soot",
        "soothe",
        "sordid",
        "sore",
        "sorrow",
        "sorry",
        "sort",
        "soul",
        "sound",
        "soup",
        "sour",
        "source",
        "soviet",
        "sow",
        "space",
        "spade",
        "spain",
        "span",
        "spare",
        "spark",
        "sparse",
        "spasm",
        "spat",
        "spate",
        "speak",
        "spear",
        "speech",
        "speed",
        "speedy",
        "spell",
        "spend",
        "sphere",
        "spice",
        "spicy",
        "spider",
        "spiky",
        "spill",
        "spin",
        "spinal",
        "spine",
        "spiral",
        "spirit",
        "spit",
        "spite",
        "splash",
        "split",
        "spoil",
        "spoke",
        "sponge",
        "spoon",
        "sport",
        "spot",
        "spouse",
        "spray",
        "spread",
        "spree",
        "spring",
        "sprint",
        "spur",
        "squad",
        "square",
        "squash",
        "squat",
        "squid",
        "stab",
        "stable",
        "stack",
        "staff",
        "stage",
        "stain",
        "stair",
        "stairs",
        "stake",
        "stale",
        "stall",
        "stamp",
        "stance",
        "stand",
        "staple",
        "star",
        "starch",
        "stare",
        "stark",
        "start",
        "starve",
        "state",
        "static",
        "statue",
        "status",
        "stay",
        "stead",
        "steady",
        "steak",
        "steal",
        "steam",
        "steel",
        "steep",
        "steer",
        "stem",
        "stench",
        "step",
        "stereo",
        "stern",
        "stew",
        "stick",
        "sticky",
        "stiff",
        "stifle",
        "stigma",
        "still",
        "sting",
        "stint",
        "stir",
        "stitch",
        "stock",
        "stocky",
        "stone",
        "stony",
        "stool",
        "stop",
        "store",
        "storm",
        "stormy",
        "story",
        "stout",
        "stove",
        "stow",
        "strain",
        "strait",
        "strand",
        "strap",
        "strata",
        "straw",
        "stray",
        "streak",
        "stream",
        "street",
        "stress",
        "strict",
        "stride",
        "strife",
        "strike",
        "string",
        "strip",
        "stripe",
        "strive",
        "stroke",
        "stroll",
        "strong",
        "stud",
        "studio",
        "study",
        "stuff",
        "stuffy",
        "stunt",
        "stupid",
        "sturdy",
        "style",
        "submit",
        "subtle",
        "subtly",
        "suburb",
        "such",
        "sudden",
        "sue",
        "suez",
        "suffer",
        "sugar",
        "suit",
        "suite",
        "suitor",
        "sullen",
        "sultan",
        "sum",
        "summer",
        "summit",
        "summon",
        "sun",
        "sunday",
        "sunny",
        "sunset",
        "super",
        "superb",
        "supper",
        "supple",
        "supply",
        "sure",
        "surely",
        "surf",
        "surge",
        "survey",
        "suture",
        "swamp",
        "swan",
        "swap",
        "swarm",
        "sway",
        "swear",
        "sweat",
        "sweaty",
        "sweden",
        "sweep",
        "sweet",
        "swell",
        "swift",
        "swim",
        "swine",
        "swing",
        "swirl",
        "swiss",
        "switch",
        "sword",
        "swore",
        "sydney",
        "symbol",
        "synod",
        "syntax",
        "syria",
        "syrup",
        "system",
        "table",
        "tablet",
        "taboo",
        "tacit",
        "tackle",
        "tact",
        "tactic",
        "tail",
        "tailor",
        "taiwan",
        "take",
        "tale",
        "talent",
        "talk",
        "tall",
        "tally",
        "tame",
        "tampa",
        "tan",
        "tandem",
        "tangle",
        "tank",
        "tap",
        "tape",
        "target",
        "tariff",
        "tarp",
        "tart",
        "tarzan",
        "task",
        "taste",
        "tasty",
        "tattoo",
        "taurus",
        "taut",
        "tavern",
        "tax",
        "taxi",
        "tea",
        "teach",
        "teak",
        "team",
        "tear",
        "tease",
        "tech",
        "teeth",
        "tell",
        "temper",
        "temple",
        "tempo",
        "tempt",
        "ten",
        "tenant",
        "tend",
        "tender",
        "tendon",
        "tennis",
        "tenor",
        "tense",
        "tent",
        "tenth",
        "tenure",
        "teresa",
        "term",
        "terror",
        "terse",
        "test",
        "texas",
        "text",
        "thank",
        "thaw",
        "them",
        "theme",
        "thence",
        "theory",
        "there",
        "these",
        "thesis",
        "they",
        "thick",
        "thief",
        "thigh",
        "thin",
        "thing",
        "think",
        "third",
        "thirst",
        "thirty",
        "this",
        "thomas",
        "thorn",
        "those",
        "though",
        "thread",
        "threat",
        "three",
        "thrill",
        "thrive",
        "throat",
        "throne",
        "throng",
        "throw",
        "thrust",
        "thud",
        "thug",
        "thumb",
        "thus",
        "thyme",
        "tibet",
        "tick",
        "ticket",
        "tidal",
        "tide",
        "tidy",
        "tie",
        "tier",
        "tiger",
        "tight",
        "tile",
        "till",
        "tilt",
        "timber",
        "time",
        "timid",
        "tin",
        "tiny",
        "tip",
        "tire",
        "tissue",
        "title",
        "toad",
        "toast",
        "today",
        "toe",
        "toilet",
        "token",
        "tokyo",
        "told",
        "toll",
        "tom",
        "tomato",
        "tomb",
        "tonal",
        "tone",
        "tongue",
        "tonic",
        "too",
        "took",
        "tool",
        "tooth",
        "top",
        "topaz",
        "topic",
        "torch",
        "torque",
        "torso",
        "tort",
        "toss",
        "total",
        "touch",
        "tough",
        "tour",
        "toward",
        "towel",
        "tower",
        "town",
        "toxic",
        "toxin",
        "toy",
        "trace",
        "track",
        "tract",
        "trade",
        "tragic",
        "trail",
        "train",
        "trait",
        "tram",
        "trance",
        "trap",
        "trauma",
        "travel",
        "tray",
        "tread",
        "treat",
        "treaty",
        "treble",
        "tree",
        "trek",
        "tremor",
        "trench",
        "trend",
        "trendy",
        "trial",
        "tribal",
        "tribe",
        "trick",
        "tricky",
        "tried",
        "trifle",
        "trim",
        "trio",
        "trip",
        "triple",
        "troop",
        "trophy",
        "trot",
        "trough",
        "trout",
        "truce",
        "truck",
        "true",
        "truly",
        "trunk",
        "trust",
        "truth",
        "try",
        "tube",
        "tumble",
        "tuna",
        "tundra",
        "tune",
        "tunic",
        "tunnel",
        "turban",
        "turf",
        "turk",
        "turkey",
        "turn",
        "turtle",
        "tutor",
        "tweed",
        "twelve",
        "twenty",
        "twice",
        "twin",
        "twist",
        "two",
        "tycoon",
        "tying",
        "type",
        "tyrant",
        "ugly",
        "ulcer",
        "ultra",
        "umpire",
        "unable",
        "uncle",
        "under",
        "uneasy",
        "unfair",
        "unify",
        "union",
        "unique",
        "unit",
        "unite",
        "unity",
        "unlike",
        "unrest",
        "unruly",
        "until",
        "update",
        "upheld",
        "uphill",
        "uphold",
        "upon",
        "upper",
        "uproar",
        "upset",
        "upshot",
        "uptake",
        "upturn",
        "upward",
        "urban",
        "urge",
        "urgent",
        "urging",
        "urine",
        "usable",
        "usage",
        "use",
        "useful",
        "user",
        "usual",
        "utmost",
        "utter",
        "vacant",
        "vacuum",
        "vague",
        "vain",
        "valet",
        "valid",
        "valley",
        "value",
        "valve",
        "van",
        "vanish",
        "vanity",
        "vary",
        "vase",
        "vast",
        "vat",
        "vault",
        "vector",
        "veil",
        "vein",
        "velvet",
        "vendor",
        "veneer",
        "venice",
        "venom",
        "vent",
        "venue",
        "venus",
        "verb",
        "verbal",
        "verge",
        "verify",
        "verity",
        "verse",
        "versus",
        "very",
        "vessel",
        "vest",
        "vet",
        "veto",
        "via",
        "viable",
        "vicar",
        "vice",
        "victim",
        "victor",
        "video",
        "vienna",
        "view",
        "vigil",
        "viking",
        "vile",
        "villa",
        "vine",
        "vinyl",
        "viola",
        "violet",
        "violin",
        "viral",
        "virgo",
        "virtue",
        "virus",
        "visa",
        "vision",
        "visit",
        "visual",
        "vital",
        "vivid",
        "vocal",
        "vodka",
        "vogue",
        "voice",
        "void",
        "volley",
        "volume",
        "vote",
        "vowel",
        "voyage",
        "vulgar",
        "wade",
        "wage",
        "waist",
        "wait",
        "waiter",
        "wake",
        "walk",
        "walker",
        "wall",
        "wallet",
        "walnut",
        "wander",
        "want",
        "war",
        "warden",
        "warm",
        "warmth",
        "warn",
        "warp",
        "warsaw",
        "wary",
        "was",
        "wash",
        "wasp",
        "waste",
        "watch",
        "water",
        "watery",
        "wave",
        "wax",
        "way",
        "weak",
        "weaken",
        "wealth",
        "weapon",
        "wear",
        "weary",
        "weave",
        "wedge",
        "wee",
        "weed",
        "week",
        "weekly",
        "weep",
        "weigh",
        "weight",
        "weird",
        "well",
        "were",
        "west",
        "wet",
        "whale",
        "wharf",
        "what",
        "wheat",
        "wheel",
        "when",
        "whence",
        "where",
        "which",
        "whiff",
        "while",
        "whim",
        "whip",
        "whisky",
        "white",
        "who",
        "whole",
        "wholly",
        "whom",
        "whose",
        "why",
        "wicked",
        "wide",
        "widely",
        "widen",
        "wider",
        "widow",
        "width",
        "wife",
        "wig",
        "wild",
        "wildly",
        "will",
        "willow",
        "wily",
        "win",
        "wind",
        "window",
        "windy",
        "wine",
        "wing",
        "wink",
        "winner",
        "winter",
        "wipe",
        "wire",
        "wisdom",
        "wise",
        "wish",
        "wit",
        "witch",
        "with",
        "within",
        "witty",
        "wizard",
        "woke",
        "wolf",
        "wolves",
        "woman",
        "womb",
        "won",
        "wonder",
        "wood",
        "wooden",
        "woods",
        "woody",
        "wool",
        "word",
        "work",
        "worker",
        "world",
        "worm",
        "worry",
        "worse",
        "worst",
        "worth",
        "worthy",
        "would",
        "wound",
        "wrap",
        "wrath",
        "wreath",
        "wreck",
        "wring",
        "wrist",
        "writ",
        "write",
        "writer",
        "wrong",
        "xerox",
        "yacht",
        "yale",
        "yard",
        "yarn",
        "yeah",
        "year",
        "yeard",
        "yeast",
        "yellow",
        "yet",
        "yield",
        "yogurt",
        "yolk",
        "you",
        "young",
        "your",
        "youth",
        "zaire",
        "zeal",
        "zebra",
        "zenith",
        "zero",
        "zeus",
        "zigzag",
        "zinc",
        "zombie",
        "zone",
      ];
    },
    7868: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = void 0));
      r.default = [
        "abandon",
        "ability",
        "able",
        "about",
        "above",
        "absent",
        "absorb",
        "abstract",
        "absurd",
        "abuse",
        "access",
        "accident",
        "account",
        "accuse",
        "achieve",
        "acid",
        "acoustic",
        "acquire",
        "across",
        "act",
        "action",
        "actor",
        "actress",
        "actual",
        "adapt",
        "add",
        "addict",
        "address",
        "adjust",
        "admit",
        "adult",
        "advance",
        "advice",
        "aerobic",
        "affair",
        "afford",
        "afraid",
        "again",
        "age",
        "agent",
        "agree",
        "ahead",
        "aim",
        "air",
        "airport",
        "aisle",
        "alarm",
        "album",
        "alcohol",
        "alert",
        "alien",
        "all",
        "alley",
        "allow",
        "almost",
        "alone",
        "alpha",
        "already",
        "also",
        "alter",
        "always",
        "amateur",
        "amazing",
        "among",
        "amount",
        "amused",
        "analyst",
        "anchor",
        "ancient",
        "anger",
        "angle",
        "angry",
        "animal",
        "ankle",
        "announce",
        "annual",
        "another",
        "answer",
        "antenna",
        "antique",
        "anxiety",
        "any",
        "apart",
        "apology",
        "appear",
        "apple",
        "approve",
        "april",
        "arch",
        "arctic",
        "area",
        "arena",
        "argue",
        "arm",
        "armed",
        "armor",
        "army",
        "around",
        "arrange",
        "arrest",
        "arrive",
        "arrow",
        "art",
        "artefact",
        "artist",
        "artwork",
        "ask",
        "aspect",
        "assault",
        "asset",
        "assist",
        "assume",
        "asthma",
        "athlete",
        "atom",
        "attack",
        "attend",
        "attitude",
        "attract",
        "auction",
        "audit",
        "august",
        "aunt",
        "author",
        "auto",
        "autumn",
        "average",
        "avocado",
        "avoid",
        "awake",
        "aware",
        "away",
        "awesome",
        "awful",
        "awkward",
        "axis",
        "baby",
        "bachelor",
        "bacon",
        "badge",
        "bag",
        "balance",
        "balcony",
        "ball",
        "bamboo",
        "banana",
        "banner",
        "bar",
        "barely",
        "bargain",
        "barrel",
        "base",
        "basic",
        "basket",
        "battle",
        "beach",
        "bean",
        "beauty",
        "because",
        "become",
        "beef",
        "before",
        "begin",
        "behave",
        "behind",
        "believe",
        "below",
        "belt",
        "bench",
        "benefit",
        "best",
        "betray",
        "better",
        "between",
        "beyond",
        "bicycle",
        "bid",
        "bike",
        "bind",
        "biology",
        "bird",
        "birth",
        "bitter",
        "black",
        "blade",
        "blame",
        "blanket",
        "blast",
        "bleak",
        "bless",
        "blind",
        "blood",
        "blossom",
        "blouse",
        "blue",
        "blur",
        "blush",
        "board",
        "boat",
        "body",
        "boil",
        "bomb",
        "bone",
        "bonus",
        "book",
        "boost",
        "border",
        "boring",
        "borrow",
        "boss",
        "bottom",
        "bounce",
        "box",
        "boy",
        "bracket",
        "brain",
        "brand",
        "brass",
        "brave",
        "bread",
        "breeze",
        "brick",
        "bridge",
        "brief",
        "bright",
        "bring",
        "brisk",
        "broccoli",
        "broken",
        "bronze",
        "broom",
        "brother",
        "brown",
        "brush",
        "bubble",
        "buddy",
        "budget",
        "buffalo",
        "build",
        "bulb",
        "bulk",
        "bullet",
        "bundle",
        "bunker",
        "burden",
        "burger",
        "burst",
        "bus",
        "business",
        "busy",
        "butter",
        "buyer",
        "buzz",
        "cabbage",
        "cabin",
        "cable",
        "cactus",
        "cage",
        "cake",
        "call",
        "calm",
        "camera",
        "camp",
        "can",
        "canal",
        "cancel",
        "candy",
        "cannon",
        "canoe",
        "canvas",
        "canyon",
        "capable",
        "capital",
        "captain",
        "car",
        "carbon",
        "card",
        "cargo",
        "carpet",
        "carry",
        "cart",
        "case",
        "cash",
        "casino",
        "castle",
        "casual",
        "cat",
        "catalog",
        "catch",
        "category",
        "cattle",
        "caught",
        "cause",
        "caution",
        "cave",
        "ceiling",
        "celery",
        "cement",
        "census",
        "century",
        "cereal",
        "certain",
        "chair",
        "chalk",
        "champion",
        "change",
        "chaos",
        "chapter",
        "charge",
        "chase",
        "chat",
        "cheap",
        "check",
        "cheese",
        "chef",
        "cherry",
        "chest",
        "chicken",
        "chief",
        "child",
        "chimney",
        "choice",
        "choose",
        "chronic",
        "chuckle",
        "chunk",
        "churn",
        "cigar",
        "cinnamon",
        "circle",
        "citizen",
        "city",
        "civil",
        "claim",
        "clap",
        "clarify",
        "claw",
        "clay",
        "clean",
        "clerk",
        "clever",
        "click",
        "client",
        "cliff",
        "climb",
        "clinic",
        "clip",
        "clock",
        "clog",
        "close",
        "cloth",
        "cloud",
        "clown",
        "club",
        "clump",
        "cluster",
        "clutch",
        "coach",
        "coast",
        "coconut",
        "code",
        "coffee",
        "coil",
        "coin",
        "collect",
        "color",
        "column",
        "combine",
        "come",
        "comfort",
        "comic",
        "common",
        "company",
        "concert",
        "conduct",
        "confirm",
        "congress",
        "connect",
        "consider",
        "control",
        "convince",
        "cook",
        "cool",
        "copper",
        "copy",
        "coral",
        "core",
        "corn",
        "correct",
        "cost",
        "cotton",
        "couch",
        "country",
        "couple",
        "course",
        "cousin",
        "cover",
        "coyote",
        "crack",
        "cradle",
        "craft",
        "cram",
        "crane",
        "crash",
        "crater",
        "crawl",
        "crazy",
        "cream",
        "credit",
        "creek",
        "crew",
        "cricket",
        "crime",
        "crisp",
        "critic",
        "crop",
        "cross",
        "crouch",
        "crowd",
        "crucial",
        "cruel",
        "cruise",
        "crumble",
        "crunch",
        "crush",
        "cry",
        "crystal",
        "cube",
        "culture",
        "cup",
        "cupboard",
        "curious",
        "current",
        "curtain",
        "curve",
        "cushion",
        "custom",
        "cute",
        "cycle",
        "dad",
        "damage",
        "damp",
        "dance",
        "danger",
        "daring",
        "dash",
        "daughter",
        "dawn",
        "day",
        "deal",
        "debate",
        "debris",
        "decade",
        "december",
        "decide",
        "decline",
        "decorate",
        "decrease",
        "deer",
        "defense",
        "define",
        "defy",
        "degree",
        "delay",
        "deliver",
        "demand",
        "demise",
        "denial",
        "dentist",
        "deny",
        "depart",
        "depend",
        "deposit",
        "depth",
        "deputy",
        "derive",
        "describe",
        "desert",
        "design",
        "desk",
        "despair",
        "destroy",
        "detail",
        "detect",
        "develop",
        "device",
        "devote",
        "diagram",
        "dial",
        "diamond",
        "diary",
        "dice",
        "diesel",
        "diet",
        "differ",
        "digital",
        "dignity",
        "dilemma",
        "dinner",
        "dinosaur",
        "direct",
        "dirt",
        "disagree",
        "discover",
        "disease",
        "dish",
        "dismiss",
        "disorder",
        "display",
        "distance",
        "divert",
        "divide",
        "divorce",
        "dizzy",
        "doctor",
        "document",
        "dog",
        "doll",
        "dolphin",
        "domain",
        "donate",
        "donkey",
        "donor",
        "door",
        "dose",
        "double",
        "dove",
        "draft",
        "dragon",
        "drama",
        "drastic",
        "draw",
        "dream",
        "dress",
        "drift",
        "drill",
        "drink",
        "drip",
        "drive",
        "drop",
        "drum",
        "dry",
        "duck",
        "dumb",
        "dune",
        "during",
        "dust",
        "dutch",
        "duty",
        "dwarf",
        "dynamic",
        "eager",
        "eagle",
        "early",
        "earn",
        "earth",
        "easily",
        "east",
        "easy",
        "echo",
        "ecology",
        "economy",
        "edge",
        "edit",
        "educate",
        "effort",
        "egg",
        "eight",
        "either",
        "elbow",
        "elder",
        "electric",
        "elegant",
        "element",
        "elephant",
        "elevator",
        "elite",
        "else",
        "embark",
        "embody",
        "embrace",
        "emerge",
        "emotion",
        "employ",
        "empower",
        "empty",
        "enable",
        "enact",
        "end",
        "endless",
        "endorse",
        "enemy",
        "energy",
        "enforce",
        "engage",
        "engine",
        "enhance",
        "enjoy",
        "enlist",
        "enough",
        "enrich",
        "enroll",
        "ensure",
        "enter",
        "entire",
        "entry",
        "envelope",
        "episode",
        "equal",
        "equip",
        "era",
        "erase",
        "erode",
        "erosion",
        "error",
        "erupt",
        "escape",
        "essay",
        "essence",
        "estate",
        "eternal",
        "ethics",
        "evidence",
        "evil",
        "evoke",
        "evolve",
        "exact",
        "example",
        "excess",
        "exchange",
        "excite",
        "exclude",
        "excuse",
        "execute",
        "exercise",
        "exhaust",
        "exhibit",
        "exile",
        "exist",
        "exit",
        "exotic",
        "expand",
        "expect",
        "expire",
        "explain",
        "expose",
        "express",
        "extend",
        "extra",
        "eye",
        "eyebrow",
        "fabric",
        "face",
        "faculty",
        "fade",
        "faint",
        "faith",
        "fall",
        "false",
        "fame",
        "family",
        "famous",
        "fan",
        "fancy",
        "fantasy",
        "farm",
        "fashion",
        "fat",
        "fatal",
        "father",
        "fatigue",
        "fault",
        "favorite",
        "feature",
        "february",
        "federal",
        "fee",
        "feed",
        "feel",
        "female",
        "fence",
        "festival",
        "fetch",
        "fever",
        "few",
        "fiber",
        "fiction",
        "field",
        "figure",
        "file",
        "film",
        "filter",
        "final",
        "find",
        "fine",
        "finger",
        "finish",
        "fire",
        "firm",
        "first",
        "fiscal",
        "fish",
        "fit",
        "fitness",
        "fix",
        "flag",
        "flame",
        "flash",
        "flat",
        "flavor",
        "flee",
        "flight",
        "flip",
        "float",
        "flock",
        "floor",
        "flower",
        "fluid",
        "flush",
        "fly",
        "foam",
        "focus",
        "fog",
        "foil",
        "fold",
        "follow",
        "food",
        "foot",
        "force",
        "forest",
        "forget",
        "fork",
        "fortune",
        "forum",
        "forward",
        "fossil",
        "foster",
        "found",
        "fox",
        "fragile",
        "frame",
        "frequent",
        "fresh",
        "friend",
        "fringe",
        "frog",
        "front",
        "frost",
        "frown",
        "frozen",
        "fruit",
        "fuel",
        "fun",
        "funny",
        "furnace",
        "fury",
        "future",
        "gadget",
        "gain",
        "galaxy",
        "gallery",
        "game",
        "gap",
        "garage",
        "garbage",
        "garden",
        "garlic",
        "garment",
        "gas",
        "gasp",
        "gate",
        "gather",
        "gauge",
        "gaze",
        "general",
        "genius",
        "genre",
        "gentle",
        "genuine",
        "gesture",
        "ghost",
        "giant",
        "gift",
        "giggle",
        "ginger",
        "giraffe",
        "girl",
        "give",
        "glad",
        "glance",
        "glare",
        "glass",
        "glide",
        "glimpse",
        "globe",
        "gloom",
        "glory",
        "glove",
        "glow",
        "glue",
        "goat",
        "goddess",
        "gold",
        "good",
        "goose",
        "gorilla",
        "gospel",
        "gossip",
        "govern",
        "gown",
        "grab",
        "grace",
        "grain",
        "grant",
        "grape",
        "grass",
        "gravity",
        "great",
        "green",
        "grid",
        "grief",
        "grit",
        "grocery",
        "group",
        "grow",
        "grunt",
        "guard",
        "guess",
        "guide",
        "guilt",
        "guitar",
        "gun",
        "gym",
        "habit",
        "hair",
        "half",
        "hammer",
        "hamster",
        "hand",
        "happy",
        "harbor",
        "hard",
        "harsh",
        "harvest",
        "hat",
        "have",
        "hawk",
        "hazard",
        "head",
        "health",
        "heart",
        "heavy",
        "hedgehog",
        "height",
        "hello",
        "helmet",
        "help",
        "hen",
        "hero",
        "hidden",
        "high",
        "hill",
        "hint",
        "hip",
        "hire",
        "history",
        "hobby",
        "hockey",
        "hold",
        "hole",
        "holiday",
        "hollow",
        "home",
        "honey",
        "hood",
        "hope",
        "horn",
        "horror",
        "horse",
        "hospital",
        "host",
        "hotel",
        "hour",
        "hover",
        "hub",
        "huge",
        "human",
        "humble",
        "humor",
        "hundred",
        "hungry",
        "hunt",
        "hurdle",
        "hurry",
        "hurt",
        "husband",
        "hybrid",
        "ice",
        "icon",
        "idea",
        "identify",
        "idle",
        "ignore",
        "ill",
        "illegal",
        "illness",
        "image",
        "imitate",
        "immense",
        "immune",
        "impact",
        "impose",
        "improve",
        "impulse",
        "inch",
        "include",
        "income",
        "increase",
        "index",
        "indicate",
        "indoor",
        "industry",
        "infant",
        "inflict",
        "inform",
        "inhale",
        "inherit",
        "initial",
        "inject",
        "injury",
        "inmate",
        "inner",
        "innocent",
        "input",
        "inquiry",
        "insane",
        "insect",
        "inside",
        "inspire",
        "install",
        "intact",
        "interest",
        "into",
        "invest",
        "invite",
        "involve",
        "iron",
        "island",
        "isolate",
        "issue",
        "item",
        "ivory",
        "jacket",
        "jaguar",
        "jar",
        "jazz",
        "jealous",
        "jeans",
        "jelly",
        "jewel",
        "job",
        "join",
        "joke",
        "journey",
        "joy",
        "judge",
        "juice",
        "jump",
        "jungle",
        "junior",
        "junk",
        "just",
        "kangaroo",
        "keen",
        "keep",
        "ketchup",
        "key",
        "kick",
        "kid",
        "kidney",
        "kind",
        "kingdom",
        "kiss",
        "kit",
        "kitchen",
        "kite",
        "kitten",
        "kiwi",
        "knee",
        "knife",
        "knock",
        "know",
        "lab",
        "label",
        "labor",
        "ladder",
        "lady",
        "lake",
        "lamp",
        "language",
        "laptop",
        "large",
        "later",
        "latin",
        "laugh",
        "laundry",
        "lava",
        "law",
        "lawn",
        "lawsuit",
        "layer",
        "lazy",
        "leader",
        "leaf",
        "learn",
        "leave",
        "lecture",
        "left",
        "leg",
        "legal",
        "legend",
        "leisure",
        "lemon",
        "lend",
        "length",
        "lens",
        "leopard",
        "lesson",
        "letter",
        "level",
        "liar",
        "liberty",
        "library",
        "license",
        "life",
        "lift",
        "light",
        "like",
        "limb",
        "limit",
        "link",
        "lion",
        "liquid",
        "list",
        "little",
        "live",
        "lizard",
        "load",
        "loan",
        "lobster",
        "local",
        "lock",
        "logic",
        "lonely",
        "long",
        "loop",
        "lottery",
        "loud",
        "lounge",
        "love",
        "loyal",
        "lucky",
        "luggage",
        "lumber",
        "lunar",
        "lunch",
        "luxury",
        "lyrics",
        "machine",
        "mad",
        "magic",
        "magnet",
        "maid",
        "mail",
        "main",
        "major",
        "make",
        "mammal",
        "man",
        "manage",
        "mandate",
        "mango",
        "mansion",
        "manual",
        "maple",
        "marble",
        "march",
        "margin",
        "marine",
        "market",
        "marriage",
        "mask",
        "mass",
        "master",
        "match",
        "material",
        "math",
        "matrix",
        "matter",
        "maximum",
        "maze",
        "meadow",
        "mean",
        "measure",
        "meat",
        "mechanic",
        "medal",
        "media",
        "melody",
        "melt",
        "member",
        "memory",
        "mention",
        "menu",
        "mercy",
        "merge",
        "merit",
        "merry",
        "mesh",
        "message",
        "metal",
        "method",
        "middle",
        "midnight",
        "milk",
        "million",
        "mimic",
        "mind",
        "minimum",
        "minor",
        "minute",
        "miracle",
        "mirror",
        "misery",
        "miss",
        "mistake",
        "mix",
        "mixed",
        "mixture",
        "mobile",
        "model",
        "modify",
        "mom",
        "moment",
        "monitor",
        "monkey",
        "monster",
        "month",
        "moon",
        "moral",
        "more",
        "morning",
        "mosquito",
        "mother",
        "motion",
        "motor",
        "mountain",
        "mouse",
        "move",
        "movie",
        "much",
        "muffin",
        "mule",
        "multiply",
        "muscle",
        "museum",
        "mushroom",
        "music",
        "must",
        "mutual",
        "myself",
        "mystery",
        "myth",
        "naive",
        "name",
        "napkin",
        "narrow",
        "nasty",
        "nation",
        "nature",
        "near",
        "neck",
        "need",
        "negative",
        "neglect",
        "neither",
        "nephew",
        "nerve",
        "nest",
        "net",
        "network",
        "neutral",
        "never",
        "news",
        "next",
        "nice",
        "night",
        "noble",
        "noise",
        "nominee",
        "noodle",
        "normal",
        "north",
        "nose",
        "notable",
        "note",
        "nothing",
        "notice",
        "novel",
        "now",
        "nuclear",
        "number",
        "nurse",
        "nut",
        "oak",
        "obey",
        "object",
        "oblige",
        "obscure",
        "observe",
        "obtain",
        "obvious",
        "occur",
        "ocean",
        "october",
        "odor",
        "off",
        "offer",
        "office",
        "often",
        "oil",
        "okay",
        "old",
        "olive",
        "olympic",
        "omit",
        "once",
        "one",
        "onion",
        "online",
        "only",
        "open",
        "opera",
        "opinion",
        "oppose",
        "option",
        "orange",
        "orbit",
        "orchard",
        "order",
        "ordinary",
        "organ",
        "orient",
        "original",
        "orphan",
        "ostrich",
        "other",
        "outdoor",
        "outer",
        "output",
        "outside",
        "oval",
        "oven",
        "over",
        "own",
        "owner",
        "oxygen",
        "oyster",
        "ozone",
        "pact",
        "paddle",
        "page",
        "pair",
        "palace",
        "palm",
        "panda",
        "panel",
        "panic",
        "panther",
        "paper",
        "parade",
        "parent",
        "park",
        "parrot",
        "party",
        "pass",
        "patch",
        "path",
        "patient",
        "patrol",
        "pattern",
        "pause",
        "pave",
        "payment",
        "peace",
        "peanut",
        "pear",
        "peasant",
        "pelican",
        "pen",
        "penalty",
        "pencil",
        "people",
        "pepper",
        "perfect",
        "permit",
        "person",
        "pet",
        "phone",
        "photo",
        "phrase",
        "physical",
        "piano",
        "picnic",
        "picture",
        "piece",
        "pig",
        "pigeon",
        "pill",
        "pilot",
        "pink",
        "pioneer",
        "pipe",
        "pistol",
        "pitch",
        "pizza",
        "place",
        "planet",
        "plastic",
        "plate",
        "play",
        "please",
        "pledge",
        "pluck",
        "plug",
        "plunge",
        "poem",
        "poet",
        "point",
        "polar",
        "pole",
        "police",
        "pond",
        "pony",
        "pool",
        "popular",
        "portion",
        "position",
        "possible",
        "post",
        "potato",
        "pottery",
        "poverty",
        "powder",
        "power",
        "practice",
        "praise",
        "predict",
        "prefer",
        "prepare",
        "present",
        "pretty",
        "prevent",
        "price",
        "pride",
        "primary",
        "print",
        "priority",
        "prison",
        "private",
        "prize",
        "problem",
        "process",
        "produce",
        "profit",
        "program",
        "project",
        "promote",
        "proof",
        "property",
        "prosper",
        "protect",
        "proud",
        "provide",
        "public",
        "pudding",
        "pull",
        "pulp",
        "pulse",
        "pumpkin",
        "punch",
        "pupil",
        "puppy",
        "purchase",
        "purity",
        "purpose",
        "purse",
        "push",
        "put",
        "puzzle",
        "pyramid",
        "quality",
        "quantum",
        "quarter",
        "question",
        "quick",
        "quit",
        "quiz",
        "quote",
        "rabbit",
        "raccoon",
        "race",
        "rack",
        "radar",
        "radio",
        "rail",
        "rain",
        "raise",
        "rally",
        "ramp",
        "ranch",
        "random",
        "range",
        "rapid",
        "rare",
        "rate",
        "rather",
        "raven",
        "raw",
        "razor",
        "ready",
        "real",
        "reason",
        "rebel",
        "rebuild",
        "recall",
        "receive",
        "recipe",
        "record",
        "recycle",
        "reduce",
        "reflect",
        "reform",
        "refuse",
        "region",
        "regret",
        "regular",
        "reject",
        "relax",
        "release",
        "relief",
        "rely",
        "remain",
        "remember",
        "remind",
        "remove",
        "render",
        "renew",
        "rent",
        "reopen",
        "repair",
        "repeat",
        "replace",
        "report",
        "require",
        "rescue",
        "resemble",
        "resist",
        "resource",
        "response",
        "result",
        "retire",
        "retreat",
        "return",
        "reunion",
        "reveal",
        "review",
        "reward",
        "rhythm",
        "rib",
        "ribbon",
        "rice",
        "rich",
        "ride",
        "ridge",
        "rifle",
        "right",
        "rigid",
        "ring",
        "riot",
        "ripple",
        "risk",
        "ritual",
        "rival",
        "river",
        "road",
        "roast",
        "robot",
        "robust",
        "rocket",
        "romance",
        "roof",
        "rookie",
        "room",
        "rose",
        "rotate",
        "rough",
        "round",
        "route",
        "royal",
        "rubber",
        "rude",
        "rug",
        "rule",
        "run",
        "runway",
        "rural",
        "sad",
        "saddle",
        "sadness",
        "safe",
        "sail",
        "salad",
        "salmon",
        "salon",
        "salt",
        "salute",
        "same",
        "sample",
        "sand",
        "satisfy",
        "satoshi",
        "sauce",
        "sausage",
        "save",
        "say",
        "scale",
        "scan",
        "scare",
        "scatter",
        "scene",
        "scheme",
        "school",
        "science",
        "scissors",
        "scorpion",
        "scout",
        "scrap",
        "screen",
        "script",
        "scrub",
        "sea",
        "search",
        "season",
        "seat",
        "second",
        "secret",
        "section",
        "security",
        "seed",
        "seek",
        "segment",
        "select",
        "sell",
        "seminar",
        "senior",
        "sense",
        "sentence",
        "series",
        "service",
        "session",
        "settle",
        "setup",
        "seven",
        "shadow",
        "shaft",
        "shallow",
        "share",
        "shed",
        "shell",
        "sheriff",
        "shield",
        "shift",
        "shine",
        "ship",
        "shiver",
        "shock",
        "shoe",
        "shoot",
        "shop",
        "short",
        "shoulder",
        "shove",
        "shrimp",
        "shrug",
        "shuffle",
        "shy",
        "sibling",
        "sick",
        "side",
        "siege",
        "sight",
        "sign",
        "silent",
        "silk",
        "silly",
        "silver",
        "similar",
        "simple",
        "since",
        "sing",
        "siren",
        "sister",
        "situate",
        "six",
        "size",
        "skate",
        "sketch",
        "ski",
        "skill",
        "skin",
        "skirt",
        "skull",
        "slab",
        "slam",
        "sleep",
        "slender",
        "slice",
        "slide",
        "slight",
        "slim",
        "slogan",
        "slot",
        "slow",
        "slush",
        "small",
        "smart",
        "smile",
        "smoke",
        "smooth",
        "snack",
        "snake",
        "snap",
        "sniff",
        "snow",
        "soap",
        "soccer",
        "social",
        "sock",
        "soda",
        "soft",
        "solar",
        "soldier",
        "solid",
        "solution",
        "solve",
        "someone",
        "song",
        "soon",
        "sorry",
        "sort",
        "soul",
        "sound",
        "soup",
        "source",
        "south",
        "space",
        "spare",
        "spatial",
        "spawn",
        "speak",
        "special",
        "speed",
        "spell",
        "spend",
        "sphere",
        "spice",
        "spider",
        "spike",
        "spin",
        "spirit",
        "split",
        "spoil",
        "sponsor",
        "spoon",
        "sport",
        "spot",
        "spray",
        "spread",
        "spring",
        "spy",
        "square",
        "squeeze",
        "squirrel",
        "stable",
        "stadium",
        "staff",
        "stage",
        "stairs",
        "stamp",
        "stand",
        "start",
        "state",
        "stay",
        "steak",
        "steel",
        "stem",
        "step",
        "stereo",
        "stick",
        "still",
        "sting",
        "stock",
        "stomach",
        "stone",
        "stool",
        "story",
        "stove",
        "strategy",
        "street",
        "strike",
        "strong",
        "struggle",
        "student",
        "stuff",
        "stumble",
        "style",
        "subject",
        "submit",
        "subway",
        "success",
        "such",
        "sudden",
        "suffer",
        "sugar",
        "suggest",
        "suit",
        "summer",
        "sun",
        "sunny",
        "sunset",
        "super",
        "supply",
        "supreme",
        "sure",
        "surface",
        "surge",
        "surprise",
        "surround",
        "survey",
        "suspect",
        "sustain",
        "swallow",
        "swamp",
        "swap",
        "swarm",
        "swear",
        "sweet",
        "swift",
        "swim",
        "swing",
        "switch",
        "sword",
        "symbol",
        "symptom",
        "syrup",
        "system",
        "table",
        "tackle",
        "tag",
        "tail",
        "talent",
        "talk",
        "tank",
        "tape",
        "target",
        "task",
        "taste",
        "tattoo",
        "taxi",
        "teach",
        "team",
        "tell",
        "ten",
        "tenant",
        "tennis",
        "tent",
        "term",
        "test",
        "text",
        "thank",
        "that",
        "theme",
        "then",
        "theory",
        "there",
        "they",
        "thing",
        "this",
        "thought",
        "three",
        "thrive",
        "throw",
        "thumb",
        "thunder",
        "ticket",
        "tide",
        "tiger",
        "tilt",
        "timber",
        "time",
        "tiny",
        "tip",
        "tired",
        "tissue",
        "title",
        "toast",
        "tobacco",
        "today",
        "toddler",
        "toe",
        "together",
        "toilet",
        "token",
        "tomato",
        "tomorrow",
        "tone",
        "tongue",
        "tonight",
        "tool",
        "tooth",
        "top",
        "topic",
        "topple",
        "torch",
        "tornado",
        "tortoise",
        "toss",
        "total",
        "tourist",
        "toward",
        "tower",
        "town",
        "toy",
        "track",
        "trade",
        "traffic",
        "tragic",
        "train",
        "transfer",
        "trap",
        "trash",
        "travel",
        "tray",
        "treat",
        "tree",
        "trend",
        "trial",
        "tribe",
        "trick",
        "trigger",
        "trim",
        "trip",
        "trophy",
        "trouble",
        "truck",
        "true",
        "truly",
        "trumpet",
        "trust",
        "truth",
        "try",
        "tube",
        "tuition",
        "tumble",
        "tuna",
        "tunnel",
        "turkey",
        "turn",
        "turtle",
        "twelve",
        "twenty",
        "twice",
        "twin",
        "twist",
        "two",
        "type",
        "typical",
        "ugly",
        "umbrella",
        "unable",
        "unaware",
        "uncle",
        "uncover",
        "under",
        "undo",
        "unfair",
        "unfold",
        "unhappy",
        "uniform",
        "unique",
        "unit",
        "universe",
        "unknown",
        "unlock",
        "until",
        "unusual",
        "unveil",
        "update",
        "upgrade",
        "uphold",
        "upon",
        "upper",
        "upset",
        "urban",
        "urge",
        "usage",
        "use",
        "used",
        "useful",
        "useless",
        "usual",
        "utility",
        "vacant",
        "vacuum",
        "vague",
        "valid",
        "valley",
        "valve",
        "van",
        "vanish",
        "vapor",
        "various",
        "vast",
        "vault",
        "vehicle",
        "velvet",
        "vendor",
        "venture",
        "venue",
        "verb",
        "verify",
        "version",
        "very",
        "vessel",
        "veteran",
        "viable",
        "vibrant",
        "vicious",
        "victory",
        "video",
        "view",
        "village",
        "vintage",
        "violin",
        "virtual",
        "virus",
        "visa",
        "visit",
        "visual",
        "vital",
        "vivid",
        "vocal",
        "voice",
        "void",
        "volcano",
        "volume",
        "vote",
        "voyage",
        "wage",
        "wagon",
        "wait",
        "walk",
        "wall",
        "walnut",
        "want",
        "warfare",
        "warm",
        "warrior",
        "wash",
        "wasp",
        "waste",
        "water",
        "wave",
        "way",
        "wealth",
        "weapon",
        "wear",
        "weasel",
        "weather",
        "web",
        "wedding",
        "weekend",
        "weird",
        "welcome",
        "west",
        "wet",
        "whale",
        "what",
        "wheat",
        "wheel",
        "when",
        "where",
        "whip",
        "whisper",
        "wide",
        "width",
        "wife",
        "wild",
        "will",
        "win",
        "window",
        "wine",
        "wing",
        "wink",
        "winner",
        "winter",
        "wire",
        "wisdom",
        "wise",
        "wish",
        "witness",
        "wolf",
        "woman",
        "wonder",
        "wood",
        "wool",
        "word",
        "work",
        "world",
        "worry",
        "worth",
        "wrap",
        "wreck",
        "wrestle",
        "wrist",
        "write",
        "wrong",
        "yard",
        "year",
        "yellow",
        "you",
        "young",
        "youth",
        "zebra",
        "zero",
        "zone",
        "zoo",
      ];
    },
    7869: function (t, r, a) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }), (r.toSeed = s));
      var n = o(a(3661)),
        i = o(a(4673));
      function o(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (o = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      async function s(t, r) {
        const a = t.join(" "),
          o = ("mnemonic" + r).normalize("NFKD");
        return i.deriveKey(n.HashAlgorithm.Sha512, a, o, 2048, 64);
      }
    },
    7870: function (t, r, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.bytesToBits = d),
        (r.convertRadix = f),
        (r.crc8 = c),
        (r.legacy1 = l),
        (r.legacy2 = u));
      var i = n(a(800)),
        o = s(a(6084));
      function s(t, r) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (s = function (t, r) {
          if (!r && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = r ? n : a)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (o.get || o.set)
                ? i(s, a, o)
                : (s[a] = t[a]));
          return s;
        })(t, r);
      }
      function l(t, r) {
        const a = t.map((t) => r.indexOf(t.toLowerCase())),
          n = f(a, r.length, 256, 33),
          i = n[n.length - 1],
          o = new Uint8Array(n.length - 1);
        for (let s = 0; s < n.length - 1; s += 1) o[s] = n[s] ^ i;
        return [o, i];
      }
      async function u(t, r) {
        const a = 11 * t.length,
          n = [];
        n.fill(!1, 0, a);
        for (const [o, f] of t.entries()) {
          const t = r.indexOf(f.toLowerCase());
          if (t < 0) throw new Error("Word not found in wordlist: " + f);
          for (let r = 0; r < 11; r += 1)
            n[11 * o + r] = 0 !== (t & (1 << (10 - r)));
        }
        const i = a / 33,
          s = a - i,
          l = new Uint8Array(s / 8);
        for (let o = 0; o < l.length; o += 1)
          for (let t = 0; t < 8; t += 1) n[8 * o + t] && (l[o] |= 1 << (7 - t));
        const u = await o.digest(l),
          c = d(u);
        for (let o = 0; o < i; o += 1)
          if (n[s + o] !== c[o]) throw new Error("Checksum mismatch");
        return l;
      }
      function c(t) {
        let r = 255;
        for (let a = 0; a < t.length - 1; a += 1) {
          r ^= t[a];
          for (let t = 0; t < 8; t += 1)
            r = (r >>> 1) ^ (0 === (1 & r) ? 0 : 178);
        }
        return 255 ^ r;
      }
      function f(t, r, a, n) {
        let o = new i.default(0);
        for (const i of t) ((o = o.times(r)), (o = o.plus(i)));
        const s = new Uint8Array(n);
        for (let i = n - 1; i >= 0; i -= 1) {
          const t = o.dividedToIntegerBy(a),
            r = o.modulo(a);
          ((o = t), (s[i] = r.toNumber()));
        }
        return s;
      }
      function d(t) {
        const r = [];
        r.fill(!1, 0, 8 * t.length);
        for (let a = 0; a < t.length; a += 1)
          for (let n = 0; n < 8; n += 1)
            r[8 * a + n] = 0 !== (t[a] & (1 << (7 - n)));
        return r;
      }
    },
    7873: function (t, r, a) {
      "use strict";
      var n = r;
      function i() {
        (n.util._configure(),
          n.Writer._configure(n.BufferWriter),
          n.Reader._configure(n.BufferReader));
      }
      ((n.build = "minimal"),
        (n.Writer = a(6091)),
        (n.BufferWriter = a(7875)),
        (n.Reader = a(6092)),
        (n.BufferReader = a(7876)),
        (n.util = a(3662)),
        (n.rpc = a(7877)),
        (n.roots = a(7879)),
        (n.configure = i),
        i());
    },
    7874: function (t, r, a) {
      "use strict";
      t.exports = i;
      var n = a(3662);
      function i(t, r) {
        ((this.lo = t >>> 0), (this.hi = r >>> 0));
      }
      var o = (i.zero = new i(0, 0));
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
      var s = (i.zeroHash = "\0\0\0\0\0\0\0\0");
      ((i.fromNumber = function (t) {
        if (0 === t) return o;
        var r = t < 0;
        r && (t = -t);
        var a = t >>> 0,
          n = ((t - a) / 4294967296) >>> 0;
        return (
          r &&
            ((n = ~n >>> 0),
            (a = ~a >>> 0),
            ++a > 4294967295 && ((a = 0), ++n > 4294967295 && (n = 0))),
          new i(a, n)
        );
      }),
        (i.from = function (t) {
          if ("number" === typeof t) return i.fromNumber(t);
          if (n.isString(t)) {
            if (!n.Long) return i.fromNumber(parseInt(t, 10));
            t = n.Long.fromString(t);
          }
          return t.low || t.high ? new i(t.low >>> 0, t.high >>> 0) : o;
        }),
        (i.prototype.toNumber = function (t) {
          if (!t && this.hi >>> 31) {
            var r = (1 + ~this.lo) >>> 0,
              a = ~this.hi >>> 0;
            return (r || (a = (a + 1) >>> 0), -(r + 4294967296 * a));
          }
          return this.lo + 4294967296 * this.hi;
        }),
        (i.prototype.toLong = function (t) {
          return n.Long
            ? new n.Long(0 | this.lo, 0 | this.hi, Boolean(t))
            : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(t) };
        }));
      var l = String.prototype.charCodeAt;
      ((i.fromHash = function (t) {
        return t === s
          ? o
          : new i(
              (l.call(t, 0) |
                (l.call(t, 1) << 8) |
                (l.call(t, 2) << 16) |
                (l.call(t, 3) << 24)) >>>
                0,
              (l.call(t, 4) |
                (l.call(t, 5) << 8) |
                (l.call(t, 6) << 16) |
                (l.call(t, 7) << 24)) >>>
                0,
            );
      }),
        (i.prototype.toHash = function () {
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
        (i.prototype.zzEncode = function () {
          var t = this.hi >> 31;
          return (
            (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ t) >>> 0),
            (this.lo = ((this.lo << 1) ^ t) >>> 0),
            this
          );
        }),
        (i.prototype.zzDecode = function () {
          var t = -(1 & this.lo);
          return (
            (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ t) >>> 0),
            (this.hi = ((this.hi >>> 1) ^ t) >>> 0),
            this
          );
        }),
        (i.prototype.length = function () {
          var t = this.lo,
            r = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
            a = this.hi >>> 24;
          return 0 === a
            ? 0 === r
              ? t < 16384
                ? t < 128
                  ? 1
                  : 2
                : t < 2097152
                  ? 3
                  : 4
              : r < 16384
                ? r < 128
                  ? 5
                  : 6
                : r < 2097152
                  ? 7
                  : 8
            : a < 128
              ? 9
              : 10;
        }));
    },
    7875: function (t, r, a) {
      "use strict";
      t.exports = o;
      var n = a(6091);
      (o.prototype = Object.create(n.prototype)).constructor = o;
      var i = a(3662);
      function o() {
        n.call(this);
      }
      function s(t, r, a) {
        t.length < 40
          ? i.utf8.write(t, r, a)
          : r.utf8Write
            ? r.utf8Write(t, a)
            : r.write(t, a);
      }
      ((o._configure = function () {
        ((o.alloc = i._Buffer_allocUnsafe),
          (o.writeBytesBuffer =
            i.Buffer &&
            i.Buffer.prototype instanceof Uint8Array &&
            "set" === i.Buffer.prototype.set.name
              ? function (t, r, a) {
                  r.set(t, a);
                }
              : function (t, r, a) {
                  if (t.copy) t.copy(r, a, 0, t.length);
                  else for (var n = 0; n < t.length; ) r[a++] = t[n++];
                }));
      }),
        (o.prototype.bytes = function (t) {
          i.isString(t) && (t = i._Buffer_from(t, "base64"));
          var r = t.length >>> 0;
          return (
            this.uint32(r),
            r && this._push(o.writeBytesBuffer, r, t),
            this
          );
        }),
        (o.prototype.string = function (t) {
          var r = i.Buffer.byteLength(t);
          return (this.uint32(r), r && this._push(s, r, t), this);
        }),
        o._configure());
    },
    7876: function (t, r, a) {
      "use strict";
      t.exports = o;
      var n = a(6092);
      (o.prototype = Object.create(n.prototype)).constructor = o;
      var i = a(3662);
      function o(t) {
        n.call(this, t);
      }
      ((o._configure = function () {
        i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice);
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
    7877: function (t, r, a) {
      "use strict";
      var n = r;
      n.Service = a(7878);
    },
    7878: function (t, r, a) {
      "use strict";
      t.exports = i;
      var n = a(3662);
      function i(t, r, a) {
        if ("function" !== typeof t)
          throw TypeError("rpcImpl must be a function");
        (n.EventEmitter.call(this),
          (this.rpcImpl = t),
          (this.requestDelimited = Boolean(r)),
          (this.responseDelimited = Boolean(a)));
      }
      (((i.prototype = Object.create(n.EventEmitter.prototype)).constructor =
        i),
        (i.prototype.rpcCall = function t(r, a, i, o, s) {
          if (!o) throw TypeError("request must be specified");
          var l = this;
          if (!s) return n.asPromise(t, l, r, a, i, o);
          if (l.rpcImpl)
            try {
              return l.rpcImpl(
                r,
                a[l.requestDelimited ? "encodeDelimited" : "encode"](
                  o,
                ).finish(),
                function (t, a) {
                  if (t) return (l.emit("error", t, r), s(t));
                  if (null !== a) {
                    if (!(a instanceof i))
                      try {
                        a =
                          i[l.responseDelimited ? "decodeDelimited" : "decode"](
                            a,
                          );
                      } catch (t) {
                        return (l.emit("error", t, r), s(t));
                      }
                    return (l.emit("data", a, r), s(null, a));
                  }
                  l.end(!0);
                },
              );
            } catch (u) {
              return (
                l.emit("error", u, r),
                void setTimeout(function () {
                  s(u);
                }, 0)
              );
            }
          else
            setTimeout(function () {
              s(Error("already ended"));
            }, 0);
        }),
        (i.prototype.end = function (t) {
          return (
            this.rpcImpl &&
              (t || this.rpcImpl(null, null, null),
              (this.rpcImpl = null),
              this.emit("end").off()),
            this
          );
        }));
    },
    7879: function (t, r, a) {
      "use strict";
      t.exports = {};
    },
  },
]);
