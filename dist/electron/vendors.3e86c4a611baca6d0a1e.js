(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [3],
  {
    3077: function (e, t, r) {
      (function (e) {
        function r(e, t) {
          for (var r = 0, n = e.length - 1; n >= 0; n--) {
            var i = e[n];
            "." === i
              ? e.splice(n, 1)
              : ".." === i
                ? (e.splice(n, 1), r++)
                : r && (e.splice(n, 1), r--);
          }
          if (t) for (; r--; r) e.unshift("..");
          return e;
        }
        function n(e) {
          "string" !== typeof e && (e += "");
          var t,
            r = 0,
            n = -1,
            i = !0;
          for (t = e.length - 1; t >= 0; --t)
            if (47 === e.charCodeAt(t)) {
              if (!i) {
                r = t + 1;
                break;
              }
            } else -1 === n && ((i = !1), (n = t + 1));
          return -1 === n ? "" : e.slice(r, n);
        }
        function i(e, t) {
          if (e.filter) return e.filter(t);
          for (var r = [], n = 0; n < e.length; n++)
            t(e[n], n, e) && r.push(e[n]);
          return r;
        }
        ((t.resolve = function () {
          for (
            var t = "", n = !1, s = arguments.length - 1;
            s >= -1 && !n;
            s--
          ) {
            var o = s >= 0 ? arguments[s] : e.cwd();
            if ("string" !== typeof o)
              throw new TypeError("Arguments to path.resolve must be strings");
            o && ((t = o + "/" + t), (n = "/" === o.charAt(0)));
          }
          return (
            (t = r(
              i(t.split("/"), function (e) {
                return !!e;
              }),
              !n,
            ).join("/")),
            (n ? "/" : "") + t || "."
          );
        }),
          (t.normalize = function (e) {
            var n = t.isAbsolute(e),
              o = "/" === s(e, -1);
            return (
              (e = r(
                i(e.split("/"), function (e) {
                  return !!e;
                }),
                !n,
              ).join("/")),
              e || n || (e = "."),
              e && o && (e += "/"),
              (n ? "/" : "") + e
            );
          }),
          (t.isAbsolute = function (e) {
            return "/" === e.charAt(0);
          }),
          (t.join = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(
              i(e, function (e, t) {
                if ("string" !== typeof e)
                  throw new TypeError("Arguments to path.join must be strings");
                return e;
              }).join("/"),
            );
          }),
          (t.relative = function (e, r) {
            function n(e) {
              for (var t = 0; t < e.length; t++) if ("" !== e[t]) break;
              for (var r = e.length - 1; r >= 0; r--) if ("" !== e[r]) break;
              return t > r ? [] : e.slice(t, r - t + 1);
            }
            ((e = t.resolve(e).substr(1)), (r = t.resolve(r).substr(1)));
            for (
              var i = n(e.split("/")),
                s = n(r.split("/")),
                o = Math.min(i.length, s.length),
                u = o,
                a = 0;
              a < o;
              a++
            )
              if (i[a] !== s[a]) {
                u = a;
                break;
              }
            var c = [];
            for (a = u; a < i.length; a++) c.push("..");
            return ((c = c.concat(s.slice(u))), c.join("/"));
          }),
          (t.sep = "/"),
          (t.delimiter = ":"),
          (t.dirname = function (e) {
            if (("string" !== typeof e && (e += ""), 0 === e.length))
              return ".";
            for (
              var t = e.charCodeAt(0),
                r = 47 === t,
                n = -1,
                i = !0,
                s = e.length - 1;
              s >= 1;
              --s
            )
              if (((t = e.charCodeAt(s)), 47 === t)) {
                if (!i) {
                  n = s;
                  break;
                }
              } else i = !1;
            return -1 === n
              ? r
                ? "/"
                : "."
              : r && 1 === n
                ? "/"
                : e.slice(0, n);
          }),
          (t.basename = function (e, t) {
            var r = n(e);
            return (
              t &&
                r.substr(-1 * t.length) === t &&
                (r = r.substr(0, r.length - t.length)),
              r
            );
          }),
          (t.extname = function (e) {
            "string" !== typeof e && (e += "");
            for (
              var t = -1, r = 0, n = -1, i = !0, s = 0, o = e.length - 1;
              o >= 0;
              --o
            ) {
              var u = e.charCodeAt(o);
              if (47 !== u)
                (-1 === n && ((i = !1), (n = o + 1)),
                  46 === u
                    ? -1 === t
                      ? (t = o)
                      : 1 !== s && (s = 1)
                    : -1 !== t && (s = -1));
              else if (!i) {
                r = o + 1;
                break;
              }
            }
            return -1 === t ||
              -1 === n ||
              0 === s ||
              (1 === s && t === n - 1 && t === r + 1)
              ? ""
              : e.slice(t, n);
          }));
        var s =
          "b" === "ab".substr(-1)
            ? function (e, t, r) {
                return e.substr(t, r);
              }
            : function (e, t, r) {
                return (t < 0 && (t = e.length + t), e.substr(t, r));
              };
      }).call(this, r(18));
    },
    3139: function (e, t) {},
    3639: function (e, t, r) {
      "use strict";
      ((t.MT = {
        POS_INT: 0,
        NEG_INT: 1,
        BYTE_STRING: 2,
        UTF8_STRING: 3,
        ARRAY: 4,
        MAP: 5,
        TAG: 6,
        SIMPLE_FLOAT: 7,
      }),
        (t.TAG = {
          DATE_STRING: 0,
          DATE_EPOCH: 1,
          POS_BIGINT: 2,
          NEG_BIGINT: 3,
          DECIMAL_FRAC: 4,
          BIGFLOAT: 5,
          BASE64URL_EXPECTED: 21,
          BASE64_EXPECTED: 22,
          BASE16_EXPECTED: 23,
          CBOR: 24,
          URI: 32,
          BASE64URL: 33,
          BASE64: 34,
          REGEXP: 35,
          MIME: 36,
        }),
        (t.NUMBYTES = {
          ZERO: 0,
          ONE: 24,
          TWO: 25,
          FOUR: 26,
          EIGHT: 27,
          INDEFINITE: 31,
        }),
        (t.SIMPLE = { FALSE: 20, TRUE: 21, NULL: 22, UNDEFINED: 23 }),
        (t.SYMS = {
          NULL: Symbol("null"),
          UNDEFINED: Symbol("undef"),
          PARENT: Symbol("parent"),
          BREAK: Symbol("break"),
          STREAM: Symbol("stream"),
        }),
        (t.SHIFT32 = Math.pow(2, 32)));
    },
    3874: function (e, t, r) {
      "use strict";
      (function (e, n) {
        const i = r(2807),
          s = r(235),
          o = r(3875).BigNumber,
          u = r(3639),
          a = u.NUMBYTES,
          c = u.SHIFT32,
          l = 2097151;
        ((t.hasBigInt = "function" === typeof BigInt),
          (t.parseCBORint = function (e, t) {
            switch (e) {
              case a.ONE:
                return t.readUInt8(0);
              case a.TWO:
                return t.readUInt16BE(0);
              case a.FOUR:
                return t.readUInt32BE(0);
              case a.EIGHT:
                const r = t.readUInt32BE(0),
                  n = t.readUInt32BE(4);
                return r > l ? new o(r).times(c).plus(n) : r * c + n;
              default:
                throw new Error("Invalid additional info for int: " + e);
            }
          }),
          (t.writeHalf = function (t, r) {
            const n = e.allocUnsafe(4);
            n.writeFloatBE(r);
            const i = n.readUInt32BE(0);
            if (0 !== (8191 & i)) return !1;
            let s = (i >> 16) & 32768;
            const o = (i >> 23) & 255,
              u = 8388607 & i;
            if (o >= 113 && o <= 142) s += ((o - 112) << 10) + (u >> 13);
            else {
              if (!(o >= 103 && o < 113)) return !1;
              if (u & ((1 << (126 - o)) - 1)) return !1;
              s += (u + 8388608) >> (126 - o);
            }
            return (t.writeUInt16BE(s), !0);
          }),
          (t.parseHalf = function (e) {
            const t = 128 & e[0] ? -1 : 1,
              r = (124 & e[0]) >> 2,
              n = ((3 & e[0]) << 8) | e[1];
            return r
              ? 31 === r
                ? t * (n ? NaN : Infinity)
                : t * Math.pow(2, r - 25) * (1024 + n)
              : 5.960464477539063e-8 * t * n;
          }),
          (t.parseCBORfloat = function (e) {
            switch (e.length) {
              case 2:
                return t.parseHalf(e);
              case 4:
                return e.readFloatBE(0);
              case 8:
                return e.readDoubleBE(0);
              default:
                throw new Error("Invalid float size: " + e.length);
            }
          }),
          (t.hex = function (t) {
            return e.from(t.replace(/^0x/, ""), "hex");
          }),
          (t.bin = function (t) {
            t = t.replace(/\s/g, "");
            let r = 0,
              n = t.length % 8 || 8;
            const i = [];
            while (n <= t.length)
              (i.push(parseInt(t.slice(r, n), 2)), (r = n), (n += 8));
            return e.from(i);
          }),
          (t.extend = function () {
            let e = arguments[0];
            const t =
                2 <= arguments.length
                  ? Array.prototype.slice.call(arguments, 1)
                  : [],
              r = t.length;
            null == e && (e = {});
            for (let n = 0; n < r; n++) {
              const r = t[n];
              for (const t in r) {
                const n = r[t];
                e[t] = n;
              }
            }
            return e;
          }),
          (t.arrayEqual = function (e, t) {
            return (
              (null == e && null == t) ||
              (null != e &&
                null != t &&
                e.length === t.length &&
                e.every((e, r) => e === t[r]))
            );
          }),
          (t.bufferEqual = function (t, r) {
            if (null == t && null == r) return !0;
            if (null == t || null == r) return !1;
            if (!e.isBuffer(t) || !e.isBuffer(r) || t.length !== r.length)
              return !1;
            const n = t.length;
            let i,
              s,
              o = !0;
            for (i = s = 0; s < n; i = ++s) {
              const e = t[i];
              o &= r[i] === e;
            }
            return !!o;
          }),
          (t.bufferToBignumber = function (e) {
            return new o(e.toString("hex"), 16);
          }),
          (t.bufferToBigInt = function (e) {
            return BigInt("0x" + e.toString("hex"));
          }),
          (t.DeHexStream = class DeHexStream extends s.Readable {
            constructor(t) {
              (super(),
                (t = t.replace(/^0x/, "")),
                t && this.push(e.from(t, "hex")),
                this.push(null));
            }
          }),
          (t.HexStream = class HexStream extends s.Transform {
            constructor(e) {
              super(e);
            }
            _transform(e, t, r) {
              return (this.push(e.toString("hex")), r());
            }
          }),
          (t.printError = function (e) {
            if (null != e) return console.error(e);
          }),
          (t.streamFiles = function (e, r, o) {
            const u = e.shift();
            if (!u) return o();
            const a = r();
            (a.on("end", () => t.streamFiles(e, r, o)), a.on("error", o));
            const c =
              "-" === u
                ? n.stdin
                : u instanceof s.Stream
                  ? u
                  : i.createReadStream(u);
            return (c.on("error", o), c.pipe(a));
          }),
          (t.guessEncoding = function (t) {
            switch (!1) {
              case "string" !== typeof t:
                return "hex";
              case !e.isBuffer(t):
                return;
              default:
                throw new Error("Unknown input type");
            }
          }));
      }).call(this, r(2).Buffer, r(18));
    },
    3875: function (e, t, r) {
      var n;
      (function (i) {
        "use strict";
        var s,
          o = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
          a = Math.ceil,
          c = Math.floor,
          l = "[BigNumber Error] ",
          h = l + "Number primitive has more than 15 significant digits: ",
          f = 1e14,
          p = 14,
          d = 9007199254740991,
          g = [
            1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
            1e13,
          ],
          y = 1e7,
          w = 1e9;
        function v(e) {
          var t,
            r,
            n,
            i = (D.prototype = {
              constructor: D,
              toString: null,
              valueOf: null,
            }),
            s = new D(1),
            S = 20,
            T = 4,
            B = -7,
            M = 21,
            U = -1e7,
            O = 1e7,
            x = !1,
            R = 1,
            L = 0,
            F = {
              prefix: "",
              groupSize: 3,
              secondaryGroupSize: 0,
              groupSeparator: ",",
              decimalSeparator: ".",
              fractionGroupSize: 0,
              fractionGroupSeparator: " ",
              suffix: "",
            },
            P = "0123456789abcdefghijklmnopqrstuvwxyz";
          function D(e, t) {
            var i,
              s,
              u,
              a,
              l,
              f,
              g,
              y,
              w = this;
            if (!(w instanceof D)) return new D(e, t);
            if (null == t) {
              if (e && !0 === e._isBigNumber)
                return (
                  (w.s = e.s),
                  void (!e.c || e.e > O
                    ? (w.c = w.e = null)
                    : e.e < U
                      ? (w.c = [(w.e = 0)])
                      : ((w.e = e.e), (w.c = e.c.slice())))
                );
              if ((f = "number" == typeof e) && 0 * e == 0) {
                if (((w.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                  for (a = 0, l = e; l >= 10; l /= 10, a++);
                  return void (a > O
                    ? (w.c = w.e = null)
                    : ((w.e = a), (w.c = [e])));
                }
                y = String(e);
              } else {
                if (!o.test((y = String(e)))) return n(w, y, f);
                w.s = 45 == y.charCodeAt(0) ? ((y = y.slice(1)), -1) : 1;
              }
              ((a = y.indexOf(".")) > -1 && (y = y.replace(".", "")),
                (l = y.search(/e/i)) > 0
                  ? (a < 0 && (a = l),
                    (a += +y.slice(l + 1)),
                    (y = y.substring(0, l)))
                  : a < 0 && (a = y.length));
            } else {
              if ((E(t, 2, P.length, "Base"), 10 == t))
                return ((w = new D(e)), j(w, S + w.e + 1, T));
              if (((y = String(e)), (f = "number" == typeof e))) {
                if (0 * e != 0) return n(w, y, f, t);
                if (
                  ((w.s = 1 / e < 0 ? ((y = y.slice(1)), -1) : 1),
                  D.DEBUG && y.replace(/^0\.0*|\./, "").length > 15)
                )
                  throw Error(h + e);
              } else w.s = 45 === y.charCodeAt(0) ? ((y = y.slice(1)), -1) : 1;
              for (i = P.slice(0, t), a = l = 0, g = y.length; l < g; l++)
                if (i.indexOf((s = y.charAt(l))) < 0) {
                  if ("." == s) {
                    if (l > a) {
                      a = g;
                      continue;
                    }
                  } else if (
                    !u &&
                    ((y == y.toUpperCase() && (y = y.toLowerCase())) ||
                      (y == y.toLowerCase() && (y = y.toUpperCase())))
                  ) {
                    ((u = !0), (l = -1), (a = 0));
                    continue;
                  }
                  return n(w, String(e), f, t);
                }
              ((f = !1),
                (y = r(y, t, 10, w.s)),
                (a = y.indexOf(".")) > -1
                  ? (y = y.replace(".", ""))
                  : (a = y.length));
            }
            for (l = 0; 48 === y.charCodeAt(l); l++);
            for (g = y.length; 48 === y.charCodeAt(--g); );
            if ((y = y.slice(l, ++g))) {
              if (((g -= l), f && D.DEBUG && g > 15 && (e > d || e !== c(e))))
                throw Error(h + w.s * e);
              if ((a = a - l - 1) > O) w.c = w.e = null;
              else if (a < U) w.c = [(w.e = 0)];
              else {
                if (
                  ((w.e = a),
                  (w.c = []),
                  (l = (a + 1) % p),
                  a < 0 && (l += p),
                  l < g)
                ) {
                  for (l && w.c.push(+y.slice(0, l)), g -= p; l < g; )
                    w.c.push(+y.slice(l, (l += p)));
                  l = p - (y = y.slice(l)).length;
                } else l -= g;
                for (; l--; y += "0");
                w.c.push(+y);
              }
            } else w.c = [(w.e = 0)];
          }
          function k(e, t, r, n) {
            var i, s, o, u, a;
            if ((null == r ? (r = T) : E(r, 0, 8), !e.c)) return e.toString();
            if (((i = e.c[0]), (o = e.e), null == t))
              ((a = b(e.c)),
                (a =
                  1 == n || (2 == n && (o <= B || o >= M))
                    ? I(a, o)
                    : N(a, o, "0")));
            else if (
              ((e = j(new D(e), t, r)),
              (s = e.e),
              (a = b(e.c)),
              (u = a.length),
              1 == n || (2 == n && (t <= s || s <= B)))
            ) {
              for (; u < t; a += "0", u++);
              a = I(a, s);
            } else if (((t -= o), (a = N(a, s, "0")), s + 1 > u)) {
              if (--t > 0) for (a += "."; t--; a += "0");
            } else if (((t += s - u), t > 0))
              for (s + 1 == u && (a += "."); t--; a += "0");
            return e.s < 0 && i ? "-" + a : a;
          }
          function C(e, t) {
            for (var r, n = 1, i = new D(e[0]); n < e.length; n++) {
              if (((r = new D(e[n])), !r.s)) {
                i = r;
                break;
              }
              t.call(i, r) && (i = r);
            }
            return i;
          }
          function G(e, t, r) {
            for (var n = 1, i = t.length; !t[--i]; t.pop());
            for (i = t[0]; i >= 10; i /= 10, n++);
            return (
              (r = n + r * p - 1) > O
                ? (e.c = e.e = null)
                : r < U
                  ? (e.c = [(e.e = 0)])
                  : ((e.e = r), (e.c = t)),
              e
            );
          }
          function j(e, t, r, n) {
            var i,
              s,
              o,
              u,
              l,
              h,
              d,
              y = e.c,
              w = g;
            if (y) {
              e: {
                for (i = 1, u = y[0]; u >= 10; u /= 10, i++);
                if (((s = t - i), s < 0))
                  ((s += p),
                    (o = t),
                    (l = y[(h = 0)]),
                    (d = ((l / w[i - o - 1]) % 10) | 0));
                else if (((h = a((s + 1) / p)), h >= y.length)) {
                  if (!n) break e;
                  for (; y.length <= h; y.push(0));
                  ((l = d = 0), (i = 1), (s %= p), (o = s - p + 1));
                } else {
                  for (l = u = y[h], i = 1; u >= 10; u /= 10, i++);
                  ((s %= p),
                    (o = s - p + i),
                    (d = o < 0 ? 0 : ((l / w[i - o - 1]) % 10) | 0));
                }
                if (
                  ((n =
                    n ||
                    t < 0 ||
                    null != y[h + 1] ||
                    (o < 0 ? l : l % w[i - o - 1])),
                  (n =
                    r < 4
                      ? (d || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                      : d > 5 ||
                        (5 == d &&
                          (4 == r ||
                            n ||
                            (6 == r &&
                              ((s > 0 ? (o > 0 ? l / w[i - o] : 0) : y[h - 1]) %
                                10) &
                                1) ||
                            r == (e.s < 0 ? 8 : 7)))),
                  t < 1 || !y[0])
                )
                  return (
                    (y.length = 0),
                    n
                      ? ((t -= e.e + 1),
                        (y[0] = w[(p - (t % p)) % p]),
                        (e.e = -t || 0))
                      : (y[0] = e.e = 0),
                    e
                  );
                if (
                  (0 == s
                    ? ((y.length = h), (u = 1), h--)
                    : ((y.length = h + 1),
                      (u = w[p - s]),
                      (y[h] = o > 0 ? c((l / w[i - o]) % w[o]) * u : 0)),
                  n)
                )
                  for (;;) {
                    if (0 == h) {
                      for (s = 1, o = y[0]; o >= 10; o /= 10, s++);
                      for (o = y[0] += u, u = 1; o >= 10; o /= 10, u++);
                      s != u && (e.e++, y[0] == f && (y[0] = 1));
                      break;
                    }
                    if (((y[h] += u), y[h] != f)) break;
                    ((y[h--] = 0), (u = 1));
                  }
                for (s = y.length; 0 === y[--s]; y.pop());
              }
              e.e > O ? (e.c = e.e = null) : e.e < U && (e.c = [(e.e = 0)]);
            }
            return e;
          }
          function q(e) {
            var t,
              r = e.e;
            return null === r
              ? e.toString()
              : ((t = b(e.c)),
                (t = r <= B || r >= M ? I(t, r) : N(t, r, "0")),
                e.s < 0 ? "-" + t : t);
          }
          return (
            (D.clone = v),
            (D.ROUND_UP = 0),
            (D.ROUND_DOWN = 1),
            (D.ROUND_CEIL = 2),
            (D.ROUND_FLOOR = 3),
            (D.ROUND_HALF_UP = 4),
            (D.ROUND_HALF_DOWN = 5),
            (D.ROUND_HALF_EVEN = 6),
            (D.ROUND_HALF_CEIL = 7),
            (D.ROUND_HALF_FLOOR = 8),
            (D.EUCLID = 9),
            (D.config = D.set =
              function (e) {
                var t, r;
                if (null != e) {
                  if ("object" != typeof e)
                    throw Error(l + "Object expected: " + e);
                  if (
                    (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                      ((r = e[t]), E(r, 0, w, t), (S = r)),
                    e.hasOwnProperty((t = "ROUNDING_MODE")) &&
                      ((r = e[t]), E(r, 0, 8, t), (T = r)),
                    e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                      ((r = e[t]),
                      r && r.pop
                        ? (E(r[0], -w, 0, t),
                          E(r[1], 0, w, t),
                          (B = r[0]),
                          (M = r[1]))
                        : (E(r, -w, w, t), (B = -(M = r < 0 ? -r : r)))),
                    e.hasOwnProperty((t = "RANGE")))
                  )
                    if (((r = e[t]), r && r.pop))
                      (E(r[0], -w, -1, t),
                        E(r[1], 1, w, t),
                        (U = r[0]),
                        (O = r[1]));
                    else {
                      if ((E(r, -w, w, t), !r))
                        throw Error(l + t + " cannot be zero: " + r);
                      U = -(O = r < 0 ? -r : r);
                    }
                  if (e.hasOwnProperty((t = "CRYPTO"))) {
                    if (((r = e[t]), r !== !!r))
                      throw Error(l + t + " not true or false: " + r);
                    if (r) {
                      if (
                        "undefined" == typeof crypto ||
                        !crypto ||
                        (!crypto.getRandomValues && !crypto.randomBytes)
                      )
                        throw ((x = !r), Error(l + "crypto unavailable"));
                      x = r;
                    } else x = r;
                  }
                  if (
                    (e.hasOwnProperty((t = "MODULO_MODE")) &&
                      ((r = e[t]), E(r, 0, 9, t), (R = r)),
                    e.hasOwnProperty((t = "POW_PRECISION")) &&
                      ((r = e[t]), E(r, 0, w, t), (L = r)),
                    e.hasOwnProperty((t = "FORMAT")))
                  ) {
                    if (((r = e[t]), "object" != typeof r))
                      throw Error(l + t + " not an object: " + r);
                    F = r;
                  }
                  if (e.hasOwnProperty((t = "ALPHABET"))) {
                    if (
                      ((r = e[t]),
                      "string" != typeof r || /^.$|[+-.\s]|(.).*\1/.test(r))
                    )
                      throw Error(l + t + " invalid: " + r);
                    P = r;
                  }
                }
                return {
                  DECIMAL_PLACES: S,
                  ROUNDING_MODE: T,
                  EXPONENTIAL_AT: [B, M],
                  RANGE: [U, O],
                  CRYPTO: x,
                  MODULO_MODE: R,
                  POW_PRECISION: L,
                  FORMAT: F,
                  ALPHABET: P,
                };
              }),
            (D.isBigNumber = function (e) {
              if (!e || !0 !== e._isBigNumber) return !1;
              if (!D.DEBUG) return !0;
              var t,
                r,
                n = e.c,
                i = e.e,
                s = e.s;
              e: if ("[object Array]" == {}.toString.call(n)) {
                if ((1 === s || -1 === s) && i >= -w && i <= w && i === c(i)) {
                  if (0 === n[0]) {
                    if (0 === i && 1 === n.length) return !0;
                    break e;
                  }
                  if (
                    ((t = (i + 1) % p),
                    t < 1 && (t += p),
                    String(n[0]).length == t)
                  ) {
                    for (t = 0; t < n.length; t++)
                      if (((r = n[t]), r < 0 || r >= f || r !== c(r))) break e;
                    if (0 !== r) return !0;
                  }
                }
              } else if (
                null === n &&
                null === i &&
                (null === s || 1 === s || -1 === s)
              )
                return !0;
              throw Error(l + "Invalid BigNumber: " + e);
            }),
            (D.maximum = D.max =
              function () {
                return C(arguments, i.lt);
              }),
            (D.minimum = D.min =
              function () {
                return C(arguments, i.gt);
              }),
            (D.random = (function () {
              var e = 9007199254740992,
                t =
                  (Math.random() * e) & 2097151
                    ? function () {
                        return c(Math.random() * e);
                      }
                    : function () {
                        return (
                          8388608 * ((1073741824 * Math.random()) | 0) +
                          ((8388608 * Math.random()) | 0)
                        );
                      };
              return function (e) {
                var r,
                  n,
                  i,
                  o,
                  u,
                  h = 0,
                  f = [],
                  d = new D(s);
                if ((null == e ? (e = S) : E(e, 0, w), (o = a(e / p)), x))
                  if (crypto.getRandomValues) {
                    for (
                      r = crypto.getRandomValues(new Uint32Array((o *= 2)));
                      h < o;
                    )
                      ((u = 131072 * r[h] + (r[h + 1] >>> 11)),
                        u >= 9e15
                          ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                            (r[h] = n[0]),
                            (r[h + 1] = n[1]))
                          : (f.push(u % 1e14), (h += 2)));
                    h = o / 2;
                  } else {
                    if (!crypto.randomBytes)
                      throw ((x = !1), Error(l + "crypto unavailable"));
                    for (r = crypto.randomBytes((o *= 7)); h < o; )
                      ((u =
                        281474976710656 * (31 & r[h]) +
                        1099511627776 * r[h + 1] +
                        4294967296 * r[h + 2] +
                        16777216 * r[h + 3] +
                        (r[h + 4] << 16) +
                        (r[h + 5] << 8) +
                        r[h + 6]),
                        u >= 9e15
                          ? crypto.randomBytes(7).copy(r, h)
                          : (f.push(u % 1e14), (h += 7)));
                    h = o / 7;
                  }
                if (!x)
                  for (; h < o; ) ((u = t()), u < 9e15 && (f[h++] = u % 1e14));
                for (
                  o = f[--h],
                    e %= p,
                    o && e && ((u = g[p - e]), (f[h] = c(o / u) * u));
                  0 === f[h];
                  f.pop(), h--
                );
                if (h < 0) f = [(i = 0)];
                else {
                  for (i = -1; 0 === f[0]; f.splice(0, 1), i -= p);
                  for (h = 1, u = f[0]; u >= 10; u /= 10, h++);
                  h < p && (i -= p - h);
                }
                return ((d.e = i), (d.c = f), d);
              };
            })()),
            (D.sum = function () {
              for (var e = 1, t = arguments, r = new D(t[0]); e < t.length; )
                r = r.plus(t[e++]);
              return r;
            }),
            (r = (function () {
              var e = "0123456789";
              function r(e, t, r, n) {
                for (var i, s, o = [0], u = 0, a = e.length; u < a; ) {
                  for (s = o.length; s--; o[s] *= t);
                  for (
                    o[0] += n.indexOf(e.charAt(u++)), i = 0;
                    i < o.length;
                    i++
                  )
                    o[i] > r - 1 &&
                      (null == o[i + 1] && (o[i + 1] = 0),
                      (o[i + 1] += (o[i] / r) | 0),
                      (o[i] %= r));
                }
                return o.reverse();
              }
              return function (n, i, s, o, u) {
                var a,
                  c,
                  l,
                  h,
                  f,
                  p,
                  d,
                  g,
                  y = n.indexOf("."),
                  w = S,
                  v = T;
                for (
                  y >= 0 &&
                    ((h = L),
                    (L = 0),
                    (n = n.replace(".", "")),
                    (g = new D(i)),
                    (p = g.pow(n.length - y)),
                    (L = h),
                    (g.c = r(N(b(p.c), p.e, "0"), 10, s, e)),
                    (g.e = g.c.length)),
                    d = r(n, i, s, u ? ((a = P), e) : ((a = e), P)),
                    l = h = d.length;
                  0 == d[--h];
                  d.pop()
                );
                if (!d[0]) return a.charAt(0);
                if (
                  (y < 0
                    ? --l
                    : ((p.c = d),
                      (p.e = l),
                      (p.s = o),
                      (p = t(p, g, w, v, s)),
                      (d = p.c),
                      (f = p.r),
                      (l = p.e)),
                  (c = l + w + 1),
                  (y = d[c]),
                  (h = s / 2),
                  (f = f || c < 0 || null != d[c + 1]),
                  (f =
                    v < 4
                      ? (null != y || f) && (0 == v || v == (p.s < 0 ? 3 : 2))
                      : y > h ||
                        (y == h &&
                          (4 == v ||
                            f ||
                            (6 == v && 1 & d[c - 1]) ||
                            v == (p.s < 0 ? 8 : 7)))),
                  c < 1 || !d[0])
                )
                  n = f ? N(a.charAt(1), -w, a.charAt(0)) : a.charAt(0);
                else {
                  if (((d.length = c), f))
                    for (--s; ++d[--c] > s; )
                      ((d[c] = 0), c || (++l, (d = [1].concat(d))));
                  for (h = d.length; !d[--h]; );
                  for (y = 0, n = ""; y <= h; n += a.charAt(d[y++]));
                  n = N(n, l, a.charAt(0));
                }
                return n;
              };
            })()),
            (t = (function () {
              function e(e, t, r) {
                var n,
                  i,
                  s,
                  o,
                  u = 0,
                  a = e.length,
                  c = t % y,
                  l = (t / y) | 0;
                for (e = e.slice(); a--; )
                  ((s = e[a] % y),
                    (o = (e[a] / y) | 0),
                    (n = l * s + o * c),
                    (i = c * s + (n % y) * y + u),
                    (u = ((i / r) | 0) + ((n / y) | 0) + l * o),
                    (e[a] = i % r));
                return (u && (e = [u].concat(e)), e);
              }
              function t(e, t, r, n) {
                var i, s;
                if (r != n) s = r > n ? 1 : -1;
                else
                  for (i = s = 0; i < r; i++)
                    if (e[i] != t[i]) {
                      s = e[i] > t[i] ? 1 : -1;
                      break;
                    }
                return s;
              }
              function r(e, t, r, n) {
                for (var i = 0; r--; )
                  ((e[r] -= i),
                    (i = e[r] < t[r] ? 1 : 0),
                    (e[r] = i * n + e[r] - t[r]));
                for (; !e[0] && e.length > 1; e.splice(0, 1));
              }
              return function (n, i, s, o, u) {
                var a,
                  l,
                  h,
                  d,
                  g,
                  y,
                  w,
                  v,
                  b,
                  _,
                  E,
                  A,
                  I,
                  N,
                  S,
                  T,
                  B,
                  M = n.s == i.s ? 1 : -1,
                  U = n.c,
                  O = i.c;
                if (!U || !U[0] || !O || !O[0])
                  return new D(
                    n.s && i.s && (U ? !O || U[0] != O[0] : O)
                      ? (U && 0 == U[0]) || !O
                        ? 0 * M
                        : M / 0
                      : NaN,
                  );
                for (
                  v = new D(M),
                    b = v.c = [],
                    l = n.e - i.e,
                    M = s + l + 1,
                    u ||
                      ((u = f),
                      (l = m(n.e / p) - m(i.e / p)),
                      (M = (M / p) | 0)),
                    h = 0;
                  O[h] == (U[h] || 0);
                  h++
                );
                if ((O[h] > (U[h] || 0) && l--, M < 0)) (b.push(1), (d = !0));
                else {
                  for (
                    N = U.length,
                      T = O.length,
                      h = 0,
                      M += 2,
                      g = c(u / (O[0] + 1)),
                      g > 1 &&
                        ((O = e(O, g, u)),
                        (U = e(U, g, u)),
                        (T = O.length),
                        (N = U.length)),
                      I = T,
                      _ = U.slice(0, T),
                      E = _.length;
                    E < T;
                    _[E++] = 0
                  );
                  ((B = O.slice()),
                    (B = [0].concat(B)),
                    (S = O[0]),
                    O[1] >= u / 2 && S++);
                  do {
                    if (((g = 0), (a = t(O, _, T, E)), a < 0)) {
                      if (
                        ((A = _[0]),
                        T != E && (A = A * u + (_[1] || 0)),
                        (g = c(A / S)),
                        g > 1)
                      ) {
                        (g >= u && (g = u - 1),
                          (y = e(O, g, u)),
                          (w = y.length),
                          (E = _.length));
                        while (1 == t(y, _, w, E))
                          (g--,
                            r(y, T < w ? B : O, w, u),
                            (w = y.length),
                            (a = 1));
                      } else
                        (0 == g && (a = g = 1),
                          (y = O.slice()),
                          (w = y.length));
                      if (
                        (w < E && (y = [0].concat(y)),
                        r(_, y, E, u),
                        (E = _.length),
                        -1 == a)
                      )
                        while (t(O, _, T, E) < 1)
                          (g++, r(_, T < E ? B : O, E, u), (E = _.length));
                    } else 0 === a && (g++, (_ = [0]));
                    ((b[h++] = g),
                      _[0] ? (_[E++] = U[I] || 0) : ((_ = [U[I]]), (E = 1)));
                  } while ((I++ < N || null != _[0]) && M--);
                  ((d = null != _[0]), b[0] || b.splice(0, 1));
                }
                if (u == f) {
                  for (h = 1, M = b[0]; M >= 10; M /= 10, h++);
                  j(v, s + (v.e = h + l * p - 1) + 1, o, d);
                } else ((v.e = l), (v.r = +d));
                return v;
              };
            })()),
            (n = (function () {
              var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                t = /^([^.]+)\.$/,
                r = /^\.([^.]+)$/,
                n = /^-?(Infinity|NaN)$/,
                i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
              return function (s, o, u, a) {
                var c,
                  h = u ? o : o.replace(i, "");
                if (n.test(h)) s.s = isNaN(h) ? null : h < 0 ? -1 : 1;
                else {
                  if (
                    !u &&
                    ((h = h.replace(e, function (e, t, r) {
                      return (
                        (c =
                          "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                        a && a != c ? e : t
                      );
                    })),
                    a && ((c = a), (h = h.replace(t, "$1").replace(r, "0.$1"))),
                    o != h)
                  )
                    return new D(h, c);
                  if (D.DEBUG)
                    throw Error(
                      l + "Not a" + (a ? " base " + a : "") + " number: " + o,
                    );
                  s.s = null;
                }
                s.c = s.e = null;
              };
            })()),
            (i.absoluteValue = i.abs =
              function () {
                var e = new D(this);
                return (e.s < 0 && (e.s = 1), e);
              }),
            (i.comparedTo = function (e, t) {
              return _(this, new D(e, t));
            }),
            (i.decimalPlaces = i.dp =
              function (e, t) {
                var r,
                  n,
                  i,
                  s = this;
                if (null != e)
                  return (
                    E(e, 0, w),
                    null == t ? (t = T) : E(t, 0, 8),
                    j(new D(s), e + s.e + 1, t)
                  );
                if (!(r = s.c)) return null;
                if (
                  ((n = ((i = r.length - 1) - m(this.e / p)) * p), (i = r[i]))
                )
                  for (; i % 10 == 0; i /= 10, n--);
                return (n < 0 && (n = 0), n);
              }),
            (i.dividedBy = i.div =
              function (e, r) {
                return t(this, new D(e, r), S, T);
              }),
            (i.dividedToIntegerBy = i.idiv =
              function (e, r) {
                return t(this, new D(e, r), 0, 1);
              }),
            (i.exponentiatedBy = i.pow =
              function (e, t) {
                var r,
                  n,
                  i,
                  o,
                  u,
                  h,
                  f,
                  d,
                  g,
                  y = this;
                if (((e = new D(e)), e.c && !e.isInteger()))
                  throw Error(l + "Exponent not an integer: " + q(e));
                if (
                  (null != t && (t = new D(t)),
                  (h = e.e > 14),
                  !y.c ||
                    !y.c[0] ||
                    (1 == y.c[0] && !y.e && 1 == y.c.length) ||
                    !e.c ||
                    !e.c[0])
                )
                  return (
                    (g = new D(Math.pow(+q(y), h ? 2 - A(e) : +q(e)))),
                    t ? g.mod(t) : g
                  );
                if (((f = e.s < 0), t)) {
                  if (t.c ? !t.c[0] : !t.s) return new D(NaN);
                  ((n = !f && y.isInteger() && t.isInteger()),
                    n && (y = y.mod(t)));
                } else {
                  if (
                    e.e > 9 &&
                    (y.e > 0 ||
                      y.e < -1 ||
                      (0 == y.e
                        ? y.c[0] > 1 || (h && y.c[1] >= 24e7)
                        : y.c[0] < 8e13 || (h && y.c[0] <= 9999975e7)))
                  )
                    return (
                      (o = y.s < 0 && A(e) ? -0 : 0),
                      y.e > -1 && (o = 1 / o),
                      new D(f ? 1 / o : o)
                    );
                  L && (o = a(L / p + 2));
                }
                for (
                  h
                    ? ((r = new D(0.5)), f && (e.s = 1), (d = A(e)))
                    : ((i = Math.abs(+q(e))), (d = i % 2)),
                    g = new D(s);
                  ;
                ) {
                  if (d) {
                    if (((g = g.times(y)), !g.c)) break;
                    o
                      ? g.c.length > o && (g.c.length = o)
                      : n && (g = g.mod(t));
                  }
                  if (i) {
                    if (((i = c(i / 2)), 0 === i)) break;
                    d = i % 2;
                  } else if (((e = e.times(r)), j(e, e.e + 1, 1), e.e > 14))
                    d = A(e);
                  else {
                    if (((i = +q(e)), 0 === i)) break;
                    d = i % 2;
                  }
                  ((y = y.times(y)),
                    o
                      ? y.c && y.c.length > o && (y.c.length = o)
                      : n && (y = y.mod(t)));
                }
                return n
                  ? g
                  : (f && (g = s.div(g)), t ? g.mod(t) : o ? j(g, L, T, u) : g);
              }),
            (i.integerValue = function (e) {
              var t = new D(this);
              return (null == e ? (e = T) : E(e, 0, 8), j(t, t.e + 1, e));
            }),
            (i.isEqualTo = i.eq =
              function (e, t) {
                return 0 === _(this, new D(e, t));
              }),
            (i.isFinite = function () {
              return !!this.c;
            }),
            (i.isGreaterThan = i.gt =
              function (e, t) {
                return _(this, new D(e, t)) > 0;
              }),
            (i.isGreaterThanOrEqualTo = i.gte =
              function (e, t) {
                return 1 === (t = _(this, new D(e, t))) || 0 === t;
              }),
            (i.isInteger = function () {
              return !!this.c && m(this.e / p) > this.c.length - 2;
            }),
            (i.isLessThan = i.lt =
              function (e, t) {
                return _(this, new D(e, t)) < 0;
              }),
            (i.isLessThanOrEqualTo = i.lte =
              function (e, t) {
                return -1 === (t = _(this, new D(e, t))) || 0 === t;
              }),
            (i.isNaN = function () {
              return !this.s;
            }),
            (i.isNegative = function () {
              return this.s < 0;
            }),
            (i.isPositive = function () {
              return this.s > 0;
            }),
            (i.isZero = function () {
              return !!this.c && 0 == this.c[0];
            }),
            (i.minus = function (e, t) {
              var r,
                n,
                i,
                s,
                o = this,
                u = o.s;
              if (((e = new D(e, t)), (t = e.s), !u || !t)) return new D(NaN);
              if (u != t) return ((e.s = -t), o.plus(e));
              var a = o.e / p,
                c = e.e / p,
                l = o.c,
                h = e.c;
              if (!a || !c) {
                if (!l || !h) return l ? ((e.s = -t), e) : new D(h ? o : NaN);
                if (!l[0] || !h[0])
                  return h[0]
                    ? ((e.s = -t), e)
                    : new D(l[0] ? o : 3 == T ? -0 : 0);
              }
              if (((a = m(a)), (c = m(c)), (l = l.slice()), (u = a - c))) {
                for (
                  (s = u < 0) ? ((u = -u), (i = l)) : ((c = a), (i = h)),
                    i.reverse(),
                    t = u;
                  t--;
                  i.push(0)
                );
                i.reverse();
              } else
                for (
                  n = (s = (u = l.length) < (t = h.length)) ? u : t, u = t = 0;
                  t < n;
                  t++
                )
                  if (l[t] != h[t]) {
                    s = l[t] < h[t];
                    break;
                  }
              if (
                (s && ((i = l), (l = h), (h = i), (e.s = -e.s)),
                (t = (n = h.length) - (r = l.length)),
                t > 0)
              )
                for (; t--; l[r++] = 0);
              for (t = f - 1; n > u; ) {
                if (l[--n] < h[n]) {
                  for (r = n; r && !l[--r]; l[r] = t);
                  (--l[r], (l[n] += f));
                }
                l[n] -= h[n];
              }
              for (; 0 == l[0]; l.splice(0, 1), --c);
              return l[0]
                ? G(e, l, c)
                : ((e.s = 3 == T ? -1 : 1), (e.c = [(e.e = 0)]), e);
            }),
            (i.modulo = i.mod =
              function (e, r) {
                var n,
                  i,
                  s = this;
                return (
                  (e = new D(e, r)),
                  !s.c || !e.s || (e.c && !e.c[0])
                    ? new D(NaN)
                    : !e.c || (s.c && !s.c[0])
                      ? new D(s)
                      : (9 == R
                          ? ((i = e.s),
                            (e.s = 1),
                            (n = t(s, e, 0, 3)),
                            (e.s = i),
                            (n.s *= i))
                          : (n = t(s, e, 0, R)),
                        (e = s.minus(n.times(e))),
                        e.c[0] || 1 != R || (e.s = s.s),
                        e)
                );
              }),
            (i.multipliedBy = i.times =
              function (e, t) {
                var r,
                  n,
                  i,
                  s,
                  o,
                  u,
                  a,
                  c,
                  l,
                  h,
                  d,
                  g,
                  w,
                  v,
                  b,
                  _ = this,
                  E = _.c,
                  A = (e = new D(e, t)).c;
                if (!E || !A || !E[0] || !A[0])
                  return (
                    !_.s || !e.s || (E && !E[0] && !A) || (A && !A[0] && !E)
                      ? (e.c = e.e = e.s = null)
                      : ((e.s *= _.s),
                        E && A ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null)),
                    e
                  );
                for (
                  n = m(_.e / p) + m(e.e / p),
                    e.s *= _.s,
                    a = E.length,
                    h = A.length,
                    a < h &&
                      ((w = E), (E = A), (A = w), (i = a), (a = h), (h = i)),
                    i = a + h,
                    w = [];
                  i--;
                  w.push(0)
                );
                for (v = f, b = y, i = h; --i >= 0; ) {
                  for (
                    r = 0, d = A[i] % b, g = (A[i] / b) | 0, o = a, s = i + o;
                    s > i;
                  )
                    ((c = E[--o] % b),
                      (l = (E[o] / b) | 0),
                      (u = g * c + l * d),
                      (c = d * c + (u % b) * b + w[s] + r),
                      (r = ((c / v) | 0) + ((u / b) | 0) + g * l),
                      (w[s--] = c % v));
                  w[s] = r;
                }
                return (r ? ++n : w.splice(0, 1), G(e, w, n));
              }),
            (i.negated = function () {
              var e = new D(this);
              return ((e.s = -e.s || null), e);
            }),
            (i.plus = function (e, t) {
              var r,
                n = this,
                i = n.s;
              if (((e = new D(e, t)), (t = e.s), !i || !t)) return new D(NaN);
              if (i != t) return ((e.s = -t), n.minus(e));
              var s = n.e / p,
                o = e.e / p,
                u = n.c,
                a = e.c;
              if (!s || !o) {
                if (!u || !a) return new D(i / 0);
                if (!u[0] || !a[0]) return a[0] ? e : new D(u[0] ? n : 0 * i);
              }
              if (((s = m(s)), (o = m(o)), (u = u.slice()), (i = s - o))) {
                for (
                  i > 0 ? ((o = s), (r = a)) : ((i = -i), (r = u)), r.reverse();
                  i--;
                  r.push(0)
                );
                r.reverse();
              }
              for (
                i = u.length,
                  t = a.length,
                  i - t < 0 && ((r = a), (a = u), (u = r), (t = i)),
                  i = 0;
                t;
              )
                ((i = ((u[--t] = u[t] + a[t] + i) / f) | 0),
                  (u[t] = f === u[t] ? 0 : u[t] % f));
              return (i && ((u = [i].concat(u)), ++o), G(e, u, o));
            }),
            (i.precision = i.sd =
              function (e, t) {
                var r,
                  n,
                  i,
                  s = this;
                if (null != e && e !== !!e)
                  return (
                    E(e, 1, w),
                    null == t ? (t = T) : E(t, 0, 8),
                    j(new D(s), e, t)
                  );
                if (!(r = s.c)) return null;
                if (((i = r.length - 1), (n = i * p + 1), (i = r[i]))) {
                  for (; i % 10 == 0; i /= 10, n--);
                  for (i = r[0]; i >= 10; i /= 10, n++);
                }
                return (e && s.e + 1 > n && (n = s.e + 1), n);
              }),
            (i.shiftedBy = function (e) {
              return (E(e, -d, d), this.times("1e" + e));
            }),
            (i.squareRoot = i.sqrt =
              function () {
                var e,
                  r,
                  n,
                  i,
                  s,
                  o = this,
                  u = o.c,
                  a = o.s,
                  c = o.e,
                  l = S + 4,
                  h = new D("0.5");
                if (1 !== a || !u || !u[0])
                  return new D(
                    !a || (a < 0 && (!u || u[0])) ? NaN : u ? o : 1 / 0,
                  );
                if (
                  ((a = Math.sqrt(+q(o))),
                  0 == a || a == 1 / 0
                    ? ((r = b(u)),
                      (r.length + c) % 2 == 0 && (r += "0"),
                      (a = Math.sqrt(+r)),
                      (c = m((c + 1) / 2) - (c < 0 || c % 2)),
                      a == 1 / 0
                        ? (r = "1e" + c)
                        : ((r = a.toExponential()),
                          (r = r.slice(0, r.indexOf("e") + 1) + c)),
                      (n = new D(r)))
                    : (n = new D(a + "")),
                  n.c[0])
                )
                  for (c = n.e, a = c + l, a < 3 && (a = 0); ; )
                    if (
                      ((s = n),
                      (n = h.times(s.plus(t(o, s, l, 1)))),
                      b(s.c).slice(0, a) === (r = b(n.c)).slice(0, a))
                    ) {
                      if (
                        (n.e < c && --a,
                        (r = r.slice(a - 3, a + 1)),
                        "9999" != r && (i || "4999" != r))
                      ) {
                        (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                          (j(n, n.e + S + 2, 1), (e = !n.times(n).eq(o)));
                        break;
                      }
                      if (!i && (j(s, s.e + S + 2, 0), s.times(s).eq(o))) {
                        n = s;
                        break;
                      }
                      ((l += 4), (a += 4), (i = 1));
                    }
                return j(n, n.e + S + 1, T, e);
              }),
            (i.toExponential = function (e, t) {
              return (null != e && (E(e, 0, w), e++), k(this, e, t, 1));
            }),
            (i.toFixed = function (e, t) {
              return (
                null != e && (E(e, 0, w), (e = e + this.e + 1)),
                k(this, e, t)
              );
            }),
            (i.toFormat = function (e, t, r) {
              var n,
                i = this;
              if (null == r)
                null != e && t && "object" == typeof t
                  ? ((r = t), (t = null))
                  : e && "object" == typeof e
                    ? ((r = e), (e = t = null))
                    : (r = F);
              else if ("object" != typeof r)
                throw Error(l + "Argument not an object: " + r);
              if (((n = i.toFixed(e, t)), i.c)) {
                var s,
                  o = n.split("."),
                  u = +r.groupSize,
                  a = +r.secondaryGroupSize,
                  c = r.groupSeparator || "",
                  h = o[0],
                  f = o[1],
                  p = i.s < 0,
                  d = p ? h.slice(1) : h,
                  g = d.length;
                if (
                  (a && ((s = u), (u = a), (a = s), (g -= s)), u > 0 && g > 0)
                ) {
                  for (s = g % u || u, h = d.substr(0, s); s < g; s += u)
                    h += c + d.substr(s, u);
                  (a > 0 && (h += c + d.slice(s)), p && (h = "-" + h));
                }
                n = f
                  ? h +
                    (r.decimalSeparator || "") +
                    ((a = +r.fractionGroupSize)
                      ? f.replace(
                          new RegExp("\\d{" + a + "}\\B", "g"),
                          "$&" + (r.fractionGroupSeparator || ""),
                        )
                      : f)
                  : h;
              }
              return (r.prefix || "") + n + (r.suffix || "");
            }),
            (i.toFraction = function (e) {
              var r,
                n,
                i,
                o,
                u,
                a,
                c,
                h,
                f,
                d,
                y,
                w,
                v = this,
                m = v.c;
              if (
                null != e &&
                ((c = new D(e)),
                (!c.isInteger() && (c.c || 1 !== c.s)) || c.lt(s))
              )
                throw Error(
                  l +
                    "Argument " +
                    (c.isInteger() ? "out of range: " : "not an integer: ") +
                    q(c),
                );
              if (!m) return new D(v);
              for (
                r = new D(s),
                  f = n = new D(s),
                  i = h = new D(s),
                  w = b(m),
                  u = r.e = w.length - v.e - 1,
                  r.c[0] = g[(a = u % p) < 0 ? p + a : a],
                  e = !e || c.comparedTo(r) > 0 ? (u > 0 ? r : f) : c,
                  a = O,
                  O = 1 / 0,
                  c = new D(w),
                  h.c[0] = 0;
                ;
              ) {
                if (
                  ((d = t(c, r, 0, 1)),
                  (o = n.plus(d.times(i))),
                  1 == o.comparedTo(e))
                )
                  break;
                ((n = i),
                  (i = o),
                  (f = h.plus(d.times((o = f)))),
                  (h = o),
                  (r = c.minus(d.times((o = r)))),
                  (c = o));
              }
              return (
                (o = t(e.minus(n), i, 0, 1)),
                (h = h.plus(o.times(f))),
                (n = n.plus(o.times(i))),
                (h.s = f.s = v.s),
                (u *= 2),
                (y =
                  t(f, i, u, T)
                    .minus(v)
                    .abs()
                    .comparedTo(t(h, n, u, T).minus(v).abs()) < 1
                    ? [f, i]
                    : [h, n]),
                (O = a),
                y
              );
            }),
            (i.toNumber = function () {
              return +q(this);
            }),
            (i.toPrecision = function (e, t) {
              return (null != e && E(e, 1, w), k(this, e, t, 2));
            }),
            (i.toString = function (e) {
              var t,
                n = this,
                i = n.s,
                s = n.e;
              return (
                null === s
                  ? i
                    ? ((t = "Infinity"), i < 0 && (t = "-" + t))
                    : (t = "NaN")
                  : (null == e
                      ? (t =
                          s <= B || s >= M ? I(b(n.c), s) : N(b(n.c), s, "0"))
                      : 10 === e
                        ? ((n = j(new D(n), S + s + 1, T)),
                          (t = N(b(n.c), n.e, "0")))
                        : (E(e, 2, P.length, "Base"),
                          (t = r(N(b(n.c), s, "0"), 10, e, i, !0))),
                    i < 0 && n.c[0] && (t = "-" + t)),
                t
              );
            }),
            (i.valueOf = i.toJSON =
              function () {
                return q(this);
              }),
            (i._isBigNumber = !0),
            u &&
              ((i[Symbol.toStringTag] = "BigNumber"),
              (i[Symbol.for("nodejs.util.inspect.custom")] = i.valueOf)),
            null != e && D.set(e),
            D
          );
        }
        function m(e) {
          var t = 0 | e;
          return e > 0 || e === t ? t : t - 1;
        }
        function b(e) {
          for (var t, r, n = 1, i = e.length, s = e[0] + ""; n < i; ) {
            for (t = e[n++] + "", r = p - t.length; r--; t = "0" + t);
            s += t;
          }
          for (i = s.length; 48 === s.charCodeAt(--i); );
          return s.slice(0, i + 1 || 1);
        }
        function _(e, t) {
          var r,
            n,
            i = e.c,
            s = t.c,
            o = e.s,
            u = t.s,
            a = e.e,
            c = t.e;
          if (!o || !u) return null;
          if (((r = i && !i[0]), (n = s && !s[0]), r || n))
            return r ? (n ? 0 : -u) : o;
          if (o != u) return o;
          if (((r = o < 0), (n = a == c), !i || !s))
            return n ? 0 : !i ^ r ? 1 : -1;
          if (!n) return (a > c) ^ r ? 1 : -1;
          for (u = (a = i.length) < (c = s.length) ? a : c, o = 0; o < u; o++)
            if (i[o] != s[o]) return (i[o] > s[o]) ^ r ? 1 : -1;
          return a == c ? 0 : (a > c) ^ r ? 1 : -1;
        }
        function E(e, t, r, n) {
          if (e < t || e > r || e !== c(e))
            throw Error(
              l +
                (n || "Argument") +
                ("number" == typeof e
                  ? e < t || e > r
                    ? " out of range: "
                    : " not an integer: "
                  : " not a primitive number: ") +
                String(e),
            );
        }
        function A(e) {
          var t = e.c.length - 1;
          return m(e.e / p) == t && e.c[t] % 2 != 0;
        }
        function I(e, t) {
          return (
            (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
            (t < 0 ? "e" : "e+") +
            t
          );
        }
        function N(e, t, r) {
          var n, i;
          if (t < 0) {
            for (i = r + "."; ++t; i += r);
            e = i + e;
          } else if (((n = e.length), ++t > n)) {
            for (i = r, t -= n; --t; i += r);
            e += i;
          } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
          return e;
        }
        ((s = v()),
          (s["default"] = s.BigNumber = s),
          (n = function () {
            return s;
          }.call(t, r, t, e)),
          void 0 === n || (e.exports = n));
      })();
    },
    4103: function (e, t, r) {
      "use strict";
      const n = r(799),
        i = r(3639),
        s = i.MT,
        o = i.SIMPLE,
        u = i.SYMS;
      class Simple {
        constructor(e) {
          if ("number" !== typeof e)
            throw new Error("Invalid Simple type: " + typeof e);
          if (e < 0 || e > 255 || (0 | e) !== e)
            throw new Error("value must be a small positive integer: " + e);
          this.value = e;
        }
        toString() {
          return "simple(" + this.value + ")";
        }
        [n.inspect.custom](e, t) {
          return "simple(" + this.value + ")";
        }
        inspect(e, t) {
          return "simple(" + this.value + ")";
        }
        encodeCBOR(e) {
          return e._pushInt(this.value, s.SIMPLE_FLOAT);
        }
        static isSimple(e) {
          return e instanceof Simple;
        }
        static decode(e, t) {
          switch ((null == t && (t = !0), e)) {
            case o.FALSE:
              return !1;
            case o.TRUE:
              return !0;
            case o.NULL:
              return t ? null : u.NULL;
            case o.UNDEFINED:
              return t ? void 0 : u.UNDEFINED;
            case -1:
              if (!t) throw new Error("Invalid BREAK");
              return u.BREAK;
            default:
              return new Simple(e);
          }
        }
      }
      e.exports = Simple;
    },
    4104: function (e, t, r) {
      "use strict";
      (function (t) {
        const n = r(235),
          i = r(799);
        class NoFilter extends n.Transform {
          constructor(e, r, n) {
            let i, s;
            switch ((null == n && (n = {}), typeof e)) {
              case "object":
                t.isBuffer(e)
                  ? ((i = e), null != r && "object" === typeof r && (n = r))
                  : (n = e);
                break;
              case "string":
                ((i = e),
                  null != r && "object" === typeof r ? (n = r) : (s = r));
                break;
            }
            (null == n && (n = {}),
              null == i && (i = n.input),
              null == s && (s = n.inputEncoding),
              delete n.input,
              delete n.inputEncoding);
            const o = null == n.watchPipe || n.watchPipe;
            delete n.watchPipe;
            const u = !!n.readError;
            (delete n.readError,
              super(n),
              (this.readError = u),
              o &&
                this.on("pipe", (e) => {
                  const t = e._readableState.objectMode;
                  if (this.length > 0 && t !== this._readableState.objectMode)
                    throw new Error(
                      "Do not switch objectMode in the middle of the stream",
                    );
                  return (
                    (this._readableState.objectMode = t),
                    (this._writableState.objectMode = t)
                  );
                }),
              null != i && this.end(i, s));
          }
          static isNoFilter(e) {
            return e instanceof this;
          }
          static compare(e, t) {
            if (!(e instanceof this))
              throw new TypeError("Arguments must be NoFilters");
            return e === t ? 0 : e.compare(t);
          }
          static concat(e, r) {
            if (!Array.isArray(e))
              throw new TypeError(
                "list argument must be an Array of NoFilters",
              );
            if (0 === e.length || 0 === r) return t.alloc(0);
            null == r &&
              (r = e.reduce((e, t) => {
                if (!(t instanceof NoFilter))
                  throw new TypeError(
                    "list argument must be an Array of NoFilters",
                  );
                return e + t.length;
              }, 0));
            let n = !0,
              i = !0;
            const s = e.map((e) => {
              if (!(e instanceof NoFilter))
                throw new TypeError(
                  "list argument must be an Array of NoFilters",
                );
              const r = e.slice();
              return (t.isBuffer(r) ? (i = !1) : (n = !1), r);
            });
            if (n) return t.concat(s, r);
            if (i) return [].concat(...s).slice(0, r);
            throw new Error(
              "Concatenating mixed object and byte streams not supported",
            );
          }
          _transform(e, r, n) {
            (this._readableState.objectMode ||
              t.isBuffer(e) ||
              (e = t.from(e, r)),
              this.push(e),
              n());
          }
          _bufArray() {
            let e = this._readableState.buffer;
            if (!Array.isArray(e)) {
              let t = e.head;
              e = [];
              while (null != t) (e.push(t.data), (t = t.next));
            }
            return e;
          }
          read(e) {
            const t = super.read(e);
            if (null != t) {
              if ((this.emit("read", t), this.readError && t.length < e))
                throw new Error(`Read ${t.length}, wanted ${e}`);
            } else if (this.readError)
              throw new Error("No data available, wanted " + e);
            return t;
          }
          promise(e) {
            let t = !1;
            return new Promise((r, n) => {
              (this.on("finish", () => {
                const n = this.read();
                (null == e || t || ((t = !0), e(null, n)), r(n));
              }),
                this.on("error", (r) => {
                  (null == e || t || ((t = !0), e(r)), n(r));
                }));
            });
          }
          compare(e) {
            if (!(e instanceof NoFilter))
              throw new TypeError("Arguments must be NoFilters");
            if (this === e) return 0;
            {
              const r = this.slice(),
                n = e.slice();
              if (t.isBuffer(r) && t.isBuffer(n)) return r.compare(n);
              throw new Error("Cannot compare streams in object mode");
            }
          }
          equals(e) {
            return 0 === this.compare(e);
          }
          slice(e, r) {
            if (this._readableState.objectMode)
              return this._bufArray().slice(e, r);
            const n = this._bufArray();
            switch (n.length) {
              case 0:
                return t.alloc(0);
              case 1:
                return n[0].slice(e, r);
              default:
                const i = t.concat(n);
                return i.slice(e, r);
            }
          }
          get(e) {
            return this.slice()[e];
          }
          toJSON() {
            const e = this.slice();
            return t.isBuffer(e) ? e.toJSON() : e;
          }
          toString(e, r, n) {
            const s = this.slice(r, n);
            if (!t.isBuffer(s)) return JSON.stringify(s);
            if ((!e || "utf8" === e) && i.TextDecoder) {
              const e = new i.TextDecoder("utf8", { fatal: !0, ignoreBOM: !0 });
              return e.decode(s);
            }
            return s.toString(e, r, n);
          }
          inspect(e, t) {
            return this[i.inspect.custom](e, t);
          }
          [i.inspect.custom](e, r) {
            const n = this._bufArray(),
              s = n
                .map((e) =>
                  t.isBuffer(e)
                    ? (null != r ? r.stylize : void 0)
                      ? r.stylize(e.toString("hex"), "string")
                      : e.toString("hex")
                    : i.inspect(e, r),
                )
                .join(", ");
            return `${this.constructor.name} [${s}]`;
          }
          get length() {
            return this._readableState.length;
          }
          writeBigInt(e) {
            let r = e.toString(16);
            if (e < 0) {
              const t = BigInt(Math.floor(r.length / 2)),
                n = BigInt(1) << (t * BigInt(8));
              ((e = n + e), (r = e.toString(16)));
            }
            return (r.length % 2 && (r = "0" + r), this.push(t.from(r, "hex")));
          }
          readUBigInt(e) {
            const r = this.read(e);
            return t.isBuffer(r) ? BigInt("0x" + r.toString("hex")) : null;
          }
          readBigInt(e) {
            const r = this.read(e);
            if (!t.isBuffer(r)) return null;
            let n = BigInt("0x" + r.toString("hex"));
            if (128 & r[0]) {
              const e = BigInt(1) << (BigInt(r.length) * BigInt(8));
              n -= e;
            }
            return n;
          }
        }
        function s(e, r) {
          return function (n) {
            const i = this.read(r);
            return t.isBuffer(i) ? i[e].call(i, 0, !0) : null;
          };
        }
        function o(e, r) {
          return function (n) {
            const i = t.alloc(r);
            return (i[e].call(i, n, 0, !0), this.push(i));
          };
        }
        (Object.assign(NoFilter.prototype, {
          writeUInt8: o("writeUInt8", 1),
          writeUInt16LE: o("writeUInt16LE", 2),
          writeUInt16BE: o("writeUInt16BE", 2),
          writeUInt32LE: o("writeUInt32LE", 4),
          writeUInt32BE: o("writeUInt32BE", 4),
          writeInt8: o("writeInt8", 1),
          writeInt16LE: o("writeInt16LE", 2),
          writeInt16BE: o("writeInt16BE", 2),
          writeInt32LE: o("writeInt32LE", 4),
          writeInt32BE: o("writeInt32BE", 4),
          writeFloatLE: o("writeFloatLE", 4),
          writeFloatBE: o("writeFloatBE", 4),
          writeDoubleLE: o("writeDoubleLE", 8),
          writeDoubleBE: o("writeDoubleBE", 8),
          readUInt8: s("readUInt8", 1),
          readUInt16LE: s("readUInt16LE", 2),
          readUInt16BE: s("readUInt16BE", 2),
          readUInt32LE: s("readUInt32LE", 4),
          readUInt32BE: s("readUInt32BE", 4),
          readInt8: s("readInt8", 1),
          readInt16LE: s("readInt16LE", 2),
          readInt16BE: s("readInt16BE", 2),
          readInt32LE: s("readInt32LE", 4),
          readInt32BE: s("readInt32BE", 4),
          readFloatLE: s("readFloatLE", 4),
          readFloatBE: s("readFloatBE", 4),
          readDoubleLE: s("readDoubleLE", 8),
          readDoubleBE: s("readDoubleBE", 8),
        }),
          (e.exports = NoFilter));
      }).call(this, r(2).Buffer);
    },
    4622: function (e, t, r) {
      "use strict";
      (function (t) {
        const n = r(7137),
          i = r(4915),
          s = r(4103),
          o = r(3874),
          u = r(3875).BigNumber,
          a = r(4104),
          c = r(3639),
          l = c.MT,
          h = c.NUMBYTES,
          f = (c.SIMPLE, c.SYMS),
          p = new u(-1),
          d = p.minus(new u(Number.MAX_SAFE_INTEGER.toString(16), 16)),
          g = Symbol("count"),
          y = (Symbol("pending_key"), Symbol("major type")),
          w = Symbol("error"),
          v = Symbol("not found");
        function m(e, t, r) {
          const n = [];
          return ((n[g] = r), (n[f.PARENT] = e), (n[y] = t), n);
        }
        function b(e, t) {
          const r = new a();
          return ((r[f.PARENT] = e), (r[y] = t), r);
        }
        function _(e) {
          return o.bufferToBigInt(e);
        }
        const E = o.hasBigInt ? BigInt("-1") : -1;
        function A(e) {
          return E - o.bufferToBigInt(e);
        }
        class Decoder extends n {
          constructor(e) {
            e = e || {};
            const t = e.tags;
            delete e.tags;
            const r = null != e.max_depth ? e.max_depth : -1;
            delete e.max_depth;
            const n = !!o.hasBigInt && !!e.bigint;
            (delete e.bigint,
              super(e),
              (this.running = !0),
              (this.max_depth = r),
              (this.tags = t),
              n &&
                (null == this.tags && (this.tags = {}),
                (this.tags[2] = _),
                (this.tags[3] = A)));
          }
          static nullcheck(e) {
            switch (e) {
              case f.NULL:
                return null;
              case f.UNDEFINED:
                return;
              case v:
                throw new Error("Value not found");
              default:
                return e;
            }
          }
          static decodeFirstSync(e, t) {
            t = t || { encoding: "hex" };
            let r,
              n = {};
            switch (typeof t) {
              case "string":
                r = t;
                break;
              case "object":
                ((n = o.extend({}, t)), (r = n.encoding), delete n.encoding);
                break;
            }
            const i = new Decoder(n),
              s = new a(e, null != r ? r : o.guessEncoding(e)),
              u = i._parse();
            let c = u.next();
            while (!c.done) {
              const e = s.read(c.value);
              if (null == e || e.length !== c.value)
                throw new Error("Insufficient data");
              c = u.next(e);
            }
            return Decoder.nullcheck(c.value);
          }
          static decodeAllSync(e, t) {
            t = t || { encoding: "hex" };
            let r,
              n = {};
            switch (typeof t) {
              case "string":
                r = t;
                break;
              case "object":
                ((n = o.extend({}, t)), (r = n.encoding), delete n.encoding);
            }
            const i = new Decoder(n),
              s = new a(e, null != r ? r : o.guessEncoding(e)),
              u = [];
            while (s.length > 0) {
              const e = i._parse();
              let t = e.next();
              while (!t.done) {
                const r = s.read(t.value);
                if (null == r || r.length !== t.value)
                  throw new Error("Insufficient data");
                t = e.next(r);
              }
              u.push(Decoder.nullcheck(t.value));
            }
            return u;
          }
          static decodeFirst(e, t, r) {
            let n = {},
              i = !1,
              s = "hex";
            switch (typeof t) {
              case "function":
                ((r = t), (s = o.guessEncoding(e)));
                break;
              case "string":
                s = t;
                break;
              case "object":
                ((n = o.extend({}, t)),
                  (s = null != n.encoding ? n.encoding : o.guessEncoding(e)),
                  delete n.encoding,
                  (i = null != n.required && n.required),
                  delete n.required);
            }
            const u = new Decoder(n);
            let a,
              c = v;
            return (
              u.on("data", (e) => {
                ((c = Decoder.nullcheck(e)), u.close());
              }),
              "function" === typeof r
                ? (u.once("error", (e) => {
                    const t = c;
                    return ((c = w), u.close(), r(e, t));
                  }),
                  u.once("end", () => {
                    switch (c) {
                      case v:
                        return i ? r(new Error("No CBOR found")) : r(null, c);
                      case w:
                        return;
                      default:
                        return r(null, c);
                    }
                  }))
                : (a = new Promise(
                    (e, t) => (
                      u.once("error", (e) => ((c = w), u.close(), t(e))),
                      u.once("end", () => {
                        switch (c) {
                          case v:
                            return i ? t(new Error("No CBOR found")) : e(c);
                          case w:
                            return;
                          default:
                            return e(c);
                        }
                      })
                    ),
                  )),
              u.end(e, s),
              a
            );
          }
          static decodeAll(e, t, r) {
            let n = {},
              i = "hex";
            switch (typeof t) {
              case "function":
                ((r = t), (i = o.guessEncoding(e)));
                break;
              case "string":
                i = t;
                break;
              case "object":
                ((n = o.extend({}, t)),
                  (i = null != n.encoding ? n.encoding : o.guessEncoding(e)),
                  delete n.encoding);
            }
            const s = new Decoder(n);
            let u;
            const a = [];
            return (
              s.on("data", (e) => a.push(Decoder.nullcheck(e))),
              "function" === typeof r
                ? (s.on("error", r), s.on("end", () => r(null, a)))
                : (u = new Promise((e, t) => {
                    (s.on("error", t), s.on("end", () => e(a)));
                  })),
              s.end(e, i),
              u
            );
          }
          close() {
            ((this.running = !1), (this.__fresh = !0));
          }
          *_parse() {
            let e = null,
              r = 0,
              n = null;
            while (1) {
              if (this.max_depth >= 0 && r > this.max_depth)
                throw new Error(
                  "Maximum depth " + this.max_depth + " exceeded",
                );
              const c = (yield 1)[0];
              if (!this.running)
                throw new Error("Unexpected data: 0x" + c.toString(16));
              const w = c >> 5,
                v = 31 & c,
                _ = null != e ? e[y] : void 0,
                E = null != e ? e.length : void 0;
              switch (v) {
                case h.ONE:
                  (this.emit("more-bytes", w, 1, _, E), (n = (yield 1)[0]));
                  break;
                case h.TWO:
                case h.FOUR:
                case h.EIGHT:
                  const e = 1 << (v - 24);
                  this.emit("more-bytes", w, e, _, E);
                  const t = yield e;
                  n = w === l.SIMPLE_FLOAT ? t : o.parseCBORint(v, t);
                  break;
                case 28:
                case 29:
                case 30:
                  throw (
                    (this.running = !1),
                    new Error("Additional info not implemented: " + v)
                  );
                case h.INDEFINITE:
                  n = -1;
                  break;
                default:
                  n = v;
              }
              switch (w) {
                case l.POS_INT:
                  break;
                case l.NEG_INT:
                  n =
                    n === Number.MAX_SAFE_INTEGER
                      ? d
                      : n instanceof u
                        ? p.minus(n)
                        : -1 - n;
                  break;
                case l.BYTE_STRING:
                case l.UTF8_STRING:
                  switch (n) {
                    case 0:
                      (this.emit("start-string", w, n, _, E),
                        (n = w === l.BYTE_STRING ? t.allocUnsafe(0) : ""));
                      break;
                    case -1:
                      (this.emit("start", w, f.STREAM, _, E),
                        (e = b(e, w)),
                        r++);
                      continue;
                    default:
                      (this.emit("start-string", w, n, _, E),
                        (n = yield n),
                        w === l.UTF8_STRING && (n = n.toString("utf-8")));
                  }
                  break;
                case l.ARRAY:
                case l.MAP:
                  switch (n) {
                    case 0:
                      n = w === l.MAP ? {} : [];
                      break;
                    case -1:
                      (this.emit("start", w, f.STREAM, _, E),
                        (e = m(e, w, -1)),
                        r++);
                      continue;
                    default:
                      (this.emit("start", w, n, _, E),
                        (e = m(e, w, n * (w - 3))),
                        r++);
                      continue;
                  }
                  break;
                case l.TAG:
                  (this.emit("start", w, n, _, E),
                    (e = m(e, w, 1)),
                    e.push(n),
                    r++);
                  continue;
                case l.SIMPLE_FLOAT:
                  n =
                    "number" === typeof n
                      ? s.decode(n, null != e)
                      : o.parseCBORfloat(n);
              }
              this.emit("value", n, _, E, v);
              let A = !1;
              while (null != e) {
                switch (!1) {
                  case n !== f.BREAK:
                    e[g] = 1;
                    break;
                  case !Array.isArray(e):
                    e.push(n);
                    break;
                  case !(e instanceof a):
                    const t = e[y];
                    if (null != t && t !== w)
                      throw (
                        (this.running = !1),
                        new Error("Invalid major type in indefinite encoding")
                      );
                    e.write(n);
                }
                if (0 !== --e[g]) {
                  A = !0;
                  break;
                }
                if (
                  (--r, delete e[g], this.emit("stop", e[y]), Array.isArray(e))
                )
                  switch (e[y]) {
                    case l.ARRAY:
                      n = e;
                      break;
                    case l.MAP:
                      let t = !0;
                      if (e.length % 2 !== 0)
                        throw new Error("Invalid map length: " + e.length);
                      for (let n = 0, i = e.length; n < i; n += 2)
                        if ("string" !== typeof e[n]) {
                          t = !1;
                          break;
                        }
                      if (t) {
                        n = {};
                        for (let t = 0, r = e.length; t < r; t += 2)
                          n[e[t]] = e[t + 1];
                      } else {
                        n = new Map();
                        for (let t = 0, r = e.length; t < r; t += 2)
                          n.set(e[t], e[t + 1]);
                      }
                      break;
                    case l.TAG:
                      const r = new i(e[0], e[1]);
                      n = r.convert(this.tags);
                      break;
                  }
                else if (e instanceof a)
                  switch (e[y]) {
                    case l.BYTE_STRING:
                      n = e.slice();
                      break;
                    case l.UTF8_STRING:
                      n = e.toString("utf-8");
                      break;
                  }
                const t = e;
                ((e = e[f.PARENT]), delete t[f.PARENT], delete t[y]);
              }
              if (!A) return n;
            }
          }
        }
        ((Decoder.NOT_FOUND = v), (e.exports = Decoder));
      }).call(this, r(2).Buffer);
    },
    4915: function (e, t, r) {
      "use strict";
      const n = r(3875).BigNumber,
        i = r(3874),
        s = r(231),
        o = new n(-1),
        u = new n(10),
        a = new n(2);
      class Tagged {
        constructor(e, t, r) {
          if (
            ((this.tag = e),
            (this.value = t),
            (this.err = r),
            "number" !== typeof this.tag)
          )
            throw new Error("Invalid tag type (" + typeof this.tag + ")");
          if (this.tag < 0 || (0 | this.tag) !== this.tag)
            throw new Error("Tag must be a positive integer: " + this.tag);
        }
        toString() {
          return `${this.tag}(${JSON.stringify(this.value)})`;
        }
        encodeCBOR(e) {
          return (e._pushTag(this.tag), e.pushAny(this.value));
        }
        convert(e) {
          let t = null != e ? e[this.tag] : void 0;
          if (
            "function" !== typeof t &&
            ((t = Tagged["_tag_" + this.tag]), "function" !== typeof t)
          )
            return this;
          try {
            return t.call(Tagged, this.value);
          } catch (r) {
            return ((this.err = r), this);
          }
        }
        static _tag_0(e) {
          return new Date(e);
        }
        static _tag_1(e) {
          return new Date(1e3 * e);
        }
        static _tag_2(e) {
          return i.bufferToBignumber(e);
        }
        static _tag_3(e) {
          return o.minus(i.bufferToBignumber(e));
        }
        static _tag_4(e) {
          return u.pow(e[0]).times(e[1]);
        }
        static _tag_5(e) {
          return a.pow(e[0]).times(e[1]);
        }
        static _tag_32(e) {
          return s.parse(e);
        }
        static _tag_35(e) {
          return new RegExp(e);
        }
      }
      e.exports = Tagged;
    },
    4916: function (e, t) {
      var r = 10,
        n = 41,
        i = 106,
        s = 9,
        o = 25;
      function u(e) {
        return n + (e.script ? e.script.length : i);
      }
      function a(e) {
        return s + (e.script ? e.script.length : o);
      }
      function c(e, t) {
        return u({}) * t;
      }
      function l(e, t) {
        return (
          r +
          e.reduce(function (e, t) {
            return e + u(t);
          }, 0) +
          t.reduce(function (e, t) {
            return e + a(t);
          }, 0)
        );
      }
      function h(e) {
        return "number" !== typeof e
          ? NaN
          : isFinite(e)
            ? Math.floor(e) !== e || e < 0
              ? NaN
              : e
            : NaN;
      }
      function f(e) {
        return e.reduce(function (e, t) {
          return e + (isFinite(t.value) ? t.value : 0);
        }, 0);
      }
      function p(e) {
        return e.reduce(function (e, t) {
          return e + h(t.value);
        }, 0);
      }
      var d = a({});
      function g(e, t, r) {
        var n = l(e, t),
          i = r * (n + d),
          s = p(e) - (p(t) + i);
        s > c({}, r) && (t = t.concat({ value: s }));
        var o = p(e) - p(t);
        return isFinite(o) ? { inputs: e, outputs: t, fee: o } : { fee: r * n };
      }
      e.exports = {
        dustThreshold: c,
        finalize: g,
        inputBytes: u,
        outputBytes: a,
        sumOrNaN: p,
        sumForgiving: f,
        transactionBytes: l,
        uintOrNaN: h,
      };
    },
    4917: function (e, t, r) {
      "use strict";
      /**
       * @license
       * https://github.com/ealmansi/cashaddrjs
       * Copyright (c) 2017-2020 Emilio Almansi
       * Distributed under the MIT software license, see the accompanying
       * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
       */ function n(e) {
        var t = new Error();
        ((this.name = t.name = "ValidationError"),
          (this.message = t.message = e),
          (this.stack = t.stack));
      }
      function i(e, t) {
        if (!e) throw new n(t);
      }
      ((n.prototype = Object.create(Error.prototype)),
        (e.exports = { ValidationError: n, validate: i }));
    },
    5879: function (e, t, r) {
      "use strict";
      (function (t) {
        const n = r(235),
          i = r(231),
          s = r(3875).BigNumber,
          o = r(4104),
          u = (r(4915), r(4103), r(3874)),
          a = r(3639),
          c = a.MT,
          l = a.NUMBYTES,
          h = a.SHIFT32,
          f = a.SYMS,
          p = a.TAG,
          d = (a.MT.SIMPLE_FLOAT << 5) | a.NUMBYTES.TWO,
          g = (a.MT.SIMPLE_FLOAT << 5) | a.NUMBYTES.FOUR,
          y = (a.MT.SIMPLE_FLOAT << 5) | a.NUMBYTES.EIGHT,
          w = (a.MT.SIMPLE_FLOAT << 5) | a.SIMPLE.TRUE,
          v = (a.MT.SIMPLE_FLOAT << 5) | a.SIMPLE.FALSE,
          m = (a.MT.SIMPLE_FLOAT << 5) | a.SIMPLE.UNDEFINED,
          b = (a.MT.SIMPLE_FLOAT << 5) | a.SIMPLE.NULL,
          _ = new s("0x20000000000000"),
          E = u.hasBigInt ? BigInt("-1") : -1,
          A = t.from("f97e00", "hex"),
          I = t.from("f9fc00", "hex"),
          N = t.from("f97c00", "hex"),
          S = t.from("f98000", "hex"),
          T = Symbol("CBOR_LOOP_DETECT");
        class Encoder extends n.Transform {
          constructor(e) {
            ((e = e || {}),
              (e.readableObjectMode = !1),
              (e.writableObjectMode = !0),
              super(e),
              (this.canonical = e.canonical),
              (this.encodeUndefined = e.encodeUndefined),
              (this.disallowUndefinedKeys = !!e.disallowUndefinedKeys),
              (this.dateType =
                null != e.dateType ? e.dateType.toLowerCase() : "number"),
              "symbol" === typeof e.detectLoops
                ? (this.detectLoops = e.detectLoops)
                : (this.detectLoops = e.detectLoops
                    ? Symbol("CBOR_DETECT")
                    : null),
              (this.semanticTypes = [
                Array,
                this._pushArray,
                Date,
                this._pushDate,
                t,
                this._pushBuffer,
                Map,
                this._pushMap,
                o,
                this._pushNoFilter,
                RegExp,
                this._pushRegexp,
                Set,
                this._pushSet,
                i.Url,
                this._pushUrl,
                s,
                this._pushBigNumber,
                ArrayBuffer,
                this._pushUint8Array,
                Uint8ClampedArray,
                this._pushUint8Array,
                Uint8Array,
                this._pushUint8Array,
                Uint16Array,
                this._pushArray,
                Uint32Array,
                this._pushArray,
                Int8Array,
                this._pushArray,
                Int16Array,
                this._pushArray,
                Int32Array,
                this._pushArray,
                Float32Array,
                this._pushFloatArray,
                Float64Array,
                this._pushFloatArray,
              ]));
            const r = e.genTypes || [];
            for (let t = 0, n = r.length; t < n; t += 2)
              this.addSemanticType(r[t], r[t + 1]);
          }
          _transform(e, t, r) {
            const n = this.pushAny(e);
            return r(!1 === n ? new Error("Push Error") : void 0);
          }
          _flush(e) {
            return e();
          }
          addSemanticType(e, t) {
            for (let r = 0, n = this.semanticTypes.length; r < n; r += 2) {
              const n = this.semanticTypes[r];
              if (n === e) {
                const e = this.semanticTypes[r + 1];
                return ((this.semanticTypes[r + 1] = t), e);
              }
            }
            return (this.semanticTypes.push(e, t), null);
          }
          _pushUInt8(e) {
            const r = t.allocUnsafe(1);
            return (r.writeUInt8(e), this.push(r));
          }
          _pushUInt16BE(e) {
            const r = t.allocUnsafe(2);
            return (r.writeUInt16BE(e), this.push(r));
          }
          _pushUInt32BE(e) {
            const r = t.allocUnsafe(4);
            return (r.writeUInt32BE(e), this.push(r));
          }
          _pushDoubleBE(e) {
            const r = t.allocUnsafe(8);
            return (r.writeDoubleBE(e), this.push(r));
          }
          _pushNaN() {
            return this.push(A);
          }
          _pushInfinity(e) {
            const t = e < 0 ? I : N;
            return this.push(t);
          }
          _pushFloat(e) {
            if (this.canonical) {
              const r = t.allocUnsafe(2);
              if (u.writeHalf(r, e) && u.parseHalf(r) === e)
                return this._pushUInt8(d) && this.push(r);
              const n = t.allocUnsafe(4);
              if ((n.writeFloatBE(e), n.readFloatBE(0) === e))
                return this._pushUInt8(g) && this.push(n);
            }
            return this._pushUInt8(y) && this._pushDoubleBE(e);
          }
          _pushInt(e, t, r) {
            const n = t << 5;
            switch (!1) {
              case !(e < 24):
                return this._pushUInt8(n | e);
              case !(e <= 255):
                return this._pushUInt8(n | l.ONE) && this._pushUInt8(e);
              case !(e <= 65535):
                return this._pushUInt8(n | l.TWO) && this._pushUInt16BE(e);
              case !(e <= 4294967295):
                return this._pushUInt8(n | l.FOUR) && this._pushUInt32BE(e);
              case !(e <= Number.MAX_SAFE_INTEGER):
                return (
                  this._pushUInt8(n | l.EIGHT) &&
                  this._pushUInt32BE(Math.floor(e / h)) &&
                  this._pushUInt32BE(e % h)
                );
              default:
                return t === c.NEG_INT
                  ? this._pushFloat(r)
                  : this._pushFloat(e);
            }
          }
          _pushIntNum(e) {
            return Object.is(e, -0)
              ? this.push(S)
              : e < 0
                ? this._pushInt(-e - 1, c.NEG_INT, e)
                : this._pushInt(e, c.POS_INT);
          }
          _pushNumber(e) {
            switch (!1) {
              case !isNaN(e):
                return this._pushNaN(e);
              case isFinite(e):
                return this._pushInfinity(e);
              case Math.round(e) !== e:
                return this._pushIntNum(e);
              default:
                return this._pushFloat(e);
            }
          }
          _pushString(e) {
            const r = t.byteLength(e, "utf8");
            return this._pushInt(r, c.UTF8_STRING) && this.push(e, "utf8");
          }
          _pushBoolean(e) {
            return this._pushUInt8(e ? w : v);
          }
          _pushUndefined(e) {
            switch (typeof this.encodeUndefined) {
              case "undefined":
                return this._pushUInt8(m);
              case "function":
                return this.pushAny(this.encodeUndefined.call(this, e));
              case "object":
                if (t.isBuffer(this.encodeUndefined))
                  return this.push(this.encodeUndefined);
            }
            return this.pushAny(this.encodeUndefined);
          }
          _pushNull(e) {
            return this._pushUInt8(b);
          }
          _pushArray(e, t) {
            const r = t.length;
            if (!e._pushInt(r, c.ARRAY)) return !1;
            for (let n = 0; n < r; n++) if (!e.pushAny(t[n])) return !1;
            return !0;
          }
          _pushTag(e) {
            return this._pushInt(e, c.TAG);
          }
          _pushDate(e, t) {
            switch (e.dateType) {
              case "string":
                return (
                  e._pushTag(p.DATE_STRING) && e._pushString(t.toISOString())
                );
              case "int":
              case "integer":
                return (
                  e._pushTag(p.DATE_EPOCH) && e._pushIntNum(Math.round(t / 1e3))
                );
              case "float":
                return e._pushTag(p.DATE_EPOCH) && e._pushFloat(t / 1e3);
              case "number":
              default:
                return e._pushTag(p.DATE_EPOCH) && e.pushAny(t / 1e3);
            }
          }
          _pushBuffer(e, t) {
            return e._pushInt(t.length, c.BYTE_STRING) && e.push(t);
          }
          _pushNoFilter(e, t) {
            return e._pushBuffer(e, t.slice());
          }
          _pushRegexp(e, t) {
            return e._pushTag(p.REGEXP) && e.pushAny(t.source);
          }
          _pushSet(e, t) {
            if (!e._pushInt(t.size, c.ARRAY)) return !1;
            for (const r of t) if (!e.pushAny(r)) return !1;
            return !0;
          }
          _pushUrl(e, t) {
            return e._pushTag(p.URI) && e.pushAny(t.format());
          }
          _pushBigint(e, r) {
            void 0 === r && (r = !1);
            let n = p.POS_BIGINT;
            r
              ? e < 0 && ((e = -e + E), (n = p.NEG_BIGINT))
              : e.isNegative() &&
                ((e = e.negated().minus(1)), (n = p.NEG_BIGINT));
            let i = e.toString(16);
            i.length % 2 && (i = "0" + i);
            const s = t.from(i, "hex");
            return this._pushTag(n) && this._pushBuffer(this, s);
          }
          _pushBigNumber(e, t) {
            if (t.isNaN()) return e._pushNaN();
            if (!t.isFinite())
              return e._pushInfinity(t.isNegative() ? -1 / 0 : 1 / 0);
            if (t.isInteger()) return e._pushBigint(t);
            if (!e._pushTag(p.DECIMAL_FRAC) || !e._pushInt(2, c.ARRAY))
              return !1;
            const r = t.decimalPlaces(),
              n = t.times(new s(10).pow(r));
            return (
              !!e._pushIntNum(-r) &&
              (n.abs().isLessThan(_)
                ? e._pushIntNum(n.toNumber())
                : e._pushBigint(n))
            );
          }
          _pushMap(e, t) {
            if (!e._pushInt(t.size, c.MAP)) return !1;
            if (e.canonical) {
              const r = [];
              for (const e of t.entries()) r.push(e);
              r.sort((e, t) => {
                const r = Encoder.encode(e[0]),
                  n = Encoder.encode(t[0]);
                return r.compare(n);
              });
              for (const [t, n] of r) {
                if (e.disallowUndefinedKeys && "undefined" === typeof t)
                  throw new Error("Invalid Map key: undefined");
                if (!e.pushAny(t) || !e.pushAny(n)) return !1;
              }
            } else
              for (const [r, n] of t) {
                if (e.disallowUndefinedKeys && "undefined" === typeof r)
                  throw new Error("Invalid Map key: undefined");
                if (!e.pushAny(r) || !e.pushAny(n)) return !1;
              }
            return !0;
          }
          _pushUint8Array(e, r) {
            return e._pushBuffer(e, t.from(r));
          }
          _pushFloatArray(e, t) {
            const r = t.length;
            if (!e._pushInt(r, c.ARRAY)) return !1;
            for (let n = 0; n < r; n++) if (!e._pushFloat(t[n])) return !1;
            return !0;
          }
          removeLoopDetectors(e) {
            if (!this.detectLoops || "object" !== typeof e || !e) return !1;
            const t = e[T];
            if (!t || t !== this.detectLoops) return !1;
            if ((delete e[T], Array.isArray(e)))
              for (const r of e) this.removeLoopDetectors(r);
            else for (const r in e) this.removeLoopDetectors(e[r]);
            return !0;
          }
          _pushObject(e) {
            if (!e) return this._pushNull(e);
            if (this.detectLoops) {
              if (e[T] === this.detectLoops)
                throw new Error("Loop detected while CBOR encoding");
              e[T] = this.detectLoops;
            }
            const t = e.encodeCBOR;
            if ("function" === typeof t) return t.call(e, this);
            for (let s = 0, o = this.semanticTypes.length; s < o; s += 2) {
              const t = this.semanticTypes[s];
              if (e instanceof t)
                return this.semanticTypes[s + 1].call(e, this, e);
            }
            const r = Object.keys(e),
              n = {};
            if (
              (this.canonical &&
                r.sort((e, t) => {
                  const r = n[e] || (n[e] = Encoder.encode(e)),
                    i = n[t] || (n[t] = Encoder.encode(t));
                  return r.compare(i);
                }),
              !this._pushInt(r.length, c.MAP))
            )
              return !1;
            let i;
            for (let s = 0, o = r.length; s < o; s++) {
              const t = r[s];
              if (this.canonical && (i = n[t])) {
                if (!this.push(i)) return !1;
              } else if (!this._pushString(t)) return !1;
              if (!this.pushAny(e[t])) return !1;
            }
            return !0;
          }
          pushAny(e) {
            switch (typeof e) {
              case "number":
                return this._pushNumber(e);
              case "bigint":
                return this._pushBigint(e, !0);
              case "string":
                return this._pushString(e);
              case "boolean":
                return this._pushBoolean(e);
              case "undefined":
                return this._pushUndefined(e);
              case "object":
                return this._pushObject(e);
              case "symbol":
                switch (e) {
                  case f.NULL:
                    return this._pushNull(null);
                  case f.UNDEFINED:
                    return this._pushUndefined(void 0);
                  default:
                    throw new Error("Unknown symbol: " + e.toString());
                }
              default:
                throw new Error(
                  "Unknown type: " + typeof e + ", " + (e ? e.toString() : ""),
                );
            }
          }
          _pushAny(e) {
            return this.pushAny(e);
          }
          _encodeAll(e) {
            const t = new o();
            this.pipe(t);
            for (const r of e)
              "undefined" === typeof r
                ? this._pushUndefined()
                : null === r
                  ? this._pushNull(null)
                  : this.write(r);
            return (this.end(), t.read());
          }
          static encode() {
            const e = Array.prototype.slice.apply(arguments);
            return new Encoder()._encodeAll(e);
          }
          static encodeCanonical() {
            const e = Array.prototype.slice.apply(arguments);
            return new Encoder({ canonical: !0 })._encodeAll(e);
          }
          static encodeOne(e, t) {
            return new Encoder(t)._encodeAll([e]);
          }
        }
        e.exports = Encoder;
      }).call(this, r(2).Buffer);
    },
    5880: function (e, t, r) {
      var n = r(7142),
        i = r(7143),
        s = r(4916);
      function o(e, t) {
        return e.value - t * s.inputBytes(e);
      }
      e.exports = function (e, t, r) {
        e = e.concat().sort(function (e, t) {
          return o(t, r) - o(e, r);
        });
        var s = i(e, t, r);
        return s.inputs ? s : n(e, t, r);
      };
    },
    7135: function (e, t, r) {
      "use strict";
      ((t.Commented = r(7136)),
        (t.Diagnose = r(7138)),
        (t.Decoder = r(4622)),
        (t.Encoder = r(5879)),
        (t.Simple = r(4103)),
        (t.Tagged = r(4915)),
        (t.Map = r(7139)),
        (t.comment = t.Commented.comment),
        (t.decodeAll = t.Decoder.decodeAll),
        (t.decodeFirst = t.Decoder.decodeFirst),
        (t.decodeAllSync = t.Decoder.decodeAllSync),
        (t.decodeFirstSync = t.Decoder.decodeFirstSync),
        (t.diagnose = t.Diagnose.diagnose),
        (t.encode = t.Encoder.encode),
        (t.encodeCanonical = t.Encoder.encodeCanonical),
        (t.encodeOne = t.Encoder.encodeOne),
        (t.decode = t.Decoder.decodeFirstSync),
        (t.leveldb = {
          decode: t.Decoder.decodeAllSync,
          encode: t.Encoder.encode,
          buffer: !0,
          name: "cbor",
        }),
        (t.hasBigInt = r(3874).hasBigInt));
    },
    7136: function (e, t, r) {
      "use strict";
      (function (t) {
        const n = r(235),
          i = r(799),
          s = (r(3874), r(4103), r(4622)),
          o = r(3639),
          u = r(3875).BigNumber,
          a = r(4104),
          c = o.MT,
          l = o.NUMBYTES,
          h = o.SYMS;
        function f(e) {
          return e > 1 ? "s" : "";
        }
        class Commented extends n.Transform {
          constructor(e) {
            ((e = e || {}),
              (e.readableObjectMode = !1),
              (e.writableObjectMode = !1));
            const t = null != e.max_depth ? e.max_depth : 10;
            (delete e.max_depth,
              super(e),
              (this.depth = 1),
              (this.max_depth = t),
              (this.all = new a()),
              (this.parser = new s(e)),
              this.parser.on("value", this._on_value.bind(this)),
              this.parser.on("start", this._on_start.bind(this)),
              this.parser.on("start-string", this._on_start_string.bind(this)),
              this.parser.on("stop", this._on_stop.bind(this)),
              this.parser.on("more-bytes", this._on_more.bind(this)),
              this.parser.on("error", this._on_error.bind(this)),
              this.parser.on("data", this._on_data.bind(this)),
              this.parser.bs.on("read", this._on_read.bind(this)));
          }
          _transform(e, t, r) {
            this.parser.write(e, t, r);
          }
          _flush(e) {
            return this.parser._flush(e);
          }
          static comment(e, t, r) {
            if (null == e) throw new Error("input required");
            let n = "string" === typeof e ? "hex" : void 0,
              i = 10;
            switch (typeof t) {
              case "function":
                r = t;
                break;
              case "string":
                n = t;
                break;
              case "number":
                i = t;
                break;
              case "object":
                const e = t.encoding,
                  s = t.max_depth;
                ((n = null != e ? e : n), (i = null != s ? s : i));
                break;
              case "undefined":
                break;
              default:
                throw new Error("Unknown option type");
            }
            const s = new a(),
              o = new Commented({ max_depth: i });
            let u = null;
            return (
              "function" === typeof r
                ? (o.on("end", () => {
                    r(null, s.toString("utf8"));
                  }),
                  o.on("error", r))
                : (u = new Promise(
                    (e, t) => (
                      o.on("end", () => {
                        e(s.toString("utf8"));
                      }),
                      o.on("error", t)
                    ),
                  )),
              o.pipe(s),
              o.end(e, n),
              u
            );
          }
          _on_error(e) {
            return (
              this.push("ERROR: ") && this.push(e.toString()) && this.push("\n")
            );
          }
          _on_read(e) {
            this.all.write(e);
            const t = e.toString("hex");
            (this.push(new Array(this.depth + 1).join("  ")), this.push(t));
            let r = 2 * (this.max_depth - this.depth);
            return (
              (r -= t.length),
              r < 1 && (r = 1),
              this.push(new Array(r + 1).join(" ")),
              this.push("-- ")
            );
          }
          _on_more(e, t, r, n) {
            this.depth++;
            let i = "";
            switch (e) {
              case c.POS_INT:
                i = "Positive number,";
                break;
              case c.NEG_INT:
                i = "Negative number,";
                break;
              case c.ARRAY:
                i = "Array, length";
                break;
              case c.MAP:
                i = "Map, count";
                break;
              case c.BYTE_STRING:
                i = "Bytes, length";
                break;
              case c.UTF8_STRING:
                i = "String, length";
                break;
              case c.SIMPLE_FLOAT:
                i = 1 === t ? "Simple value," : "Float,";
                break;
            }
            return this.push(i + " next " + t + " byte" + f(t) + "\n");
          }
          _on_start_string(e, t, r, n) {
            this.depth++;
            let i = "";
            switch (e) {
              case c.BYTE_STRING:
                i = "Bytes, length: " + t;
                break;
              case c.UTF8_STRING:
                i = "String, length: " + t.toString();
                break;
            }
            return this.push(i + "\n");
          }
          _on_start(e, t, r, n) {
            return (
              this.depth++,
              t !== h.BREAK &&
                this.push(
                  (() => {
                    switch (r) {
                      case c.ARRAY:
                        return "[" + n + "], ";
                      case c.MAP:
                        return n % 2
                          ? "{Val:" + Math.floor(n / 2) + "}, "
                          : "{Key:" + Math.floor(n / 2) + "}, ";
                    }
                  })(),
                ),
              this.push(
                (() => {
                  switch (e) {
                    case c.TAG:
                      return "Tag #" + t;
                    case c.ARRAY:
                      return t === h.STREAM
                        ? "Array (streaming)"
                        : "Array, " + t + " item" + f(t);
                    case c.MAP:
                      return t === h.STREAM
                        ? "Map (streaming)"
                        : "Map, " + t + " pair" + f(t);
                    case c.BYTE_STRING:
                      return "Bytes (streaming)";
                    case c.UTF8_STRING:
                      return "String (streaming)";
                  }
                })(),
              ),
              this.push("\n")
            );
          }
          _on_stop(e) {
            return this.depth--;
          }
          _on_value(e, r, n, s) {
            switch (
              (e !== h.BREAK &&
                this.push(
                  (() => {
                    switch (r) {
                      case c.ARRAY:
                        return "[" + n + "], ";
                      case c.MAP:
                        return n % 2
                          ? "{Val:" + Math.floor(n / 2) + "}, "
                          : "{Key:" + Math.floor(n / 2) + "}, ";
                    }
                  })(),
                ),
              e === h.BREAK
                ? this.push("BREAK\n")
                : e === h.NULL
                  ? this.push("null\n")
                  : e === h.UNDEFINED
                    ? this.push("undefined\n")
                    : "string" === typeof e
                      ? (this.depth--,
                        e.length > 0 &&
                          (this.push(JSON.stringify(e)), this.push("\n")))
                      : t.isBuffer(e)
                        ? (this.depth--,
                          e.length > 0 &&
                            (this.push(e.toString("hex")), this.push("\n")))
                        : e instanceof u
                          ? (this.push(e.toString()), this.push("\n"))
                          : (this.push(i.inspect(e)), this.push("\n")),
              s)
            ) {
              case l.ONE:
              case l.TWO:
              case l.FOUR:
              case l.EIGHT:
                this.depth--;
            }
          }
          _on_data() {
            return (
              this.push("0x"),
              this.push(this.all.read().toString("hex")),
              this.push("\n")
            );
          }
        }
        e.exports = Commented;
      }).call(this, r(2).Buffer);
    },
    7137: function (e, t, r) {
      "use strict";
      t = e.exports = u;
      var n = r(235),
        i = n.Transform,
        s = r(799).inherits,
        o = r(4104);
      function u(e) {
        (i.call(this, e),
          (this._writableState.objectMode = !1),
          (this._readableState.objectMode = !0),
          (this.bs = new o()),
          this.__restart());
      }
      ((t.One = -1),
        s(u, i),
        (u.prototype._transform = function (e, t, r) {
          this.bs.write(e);
          while (this.bs.length >= this.__needed) {
            var n,
              i = null === this.__needed ? void 0 : this.bs.read(this.__needed);
            try {
              n = this.__parser.next(i);
            } catch (s) {
              return r(s);
            }
            (this.__needed && (this.__fresh = !1),
              n.done
                ? (this.push(n.value), this.__restart())
                : (this.__needed = 0 | n.value));
          }
          return r();
        }),
        (u.prototype.__restart = function () {
          ((this.__needed = null),
            (this.__parser = this._parse()),
            (this.__fresh = !0));
        }),
        (u.prototype._flush = function (e) {
          e(this.__fresh ? null : new Error("unexpected end of input"));
        }));
    },
    7138: function (e, t, r) {
      "use strict";
      (function (t) {
        const n = r(235),
          i = r(799),
          s = r(4622),
          o = (r(4103), r(3874)),
          u = r(3639),
          a = r(3875).BigNumber,
          c = r(4104),
          l = u.MT,
          h = u.SYMS;
        class Diagnose extends n.Transform {
          constructor(e) {
            e = e || {};
            const t = null != e.separator ? e.separator : "\n";
            delete e.separator;
            const r = null != e.stream_errors && e.stream_errors;
            (delete e.stream_errors,
              (e.readableObjectMode = !1),
              (e.writableObjectMode = !1),
              super(e),
              (this.float_bytes = -1),
              (this.separator = t),
              (this.stream_errors = r),
              (this.parser = new s(e)),
              this.parser.on("more-bytes", this._on_more.bind(this)),
              this.parser.on("value", this._on_value.bind(this)),
              this.parser.on("start", this._on_start.bind(this)),
              this.parser.on("stop", this._on_stop.bind(this)),
              this.parser.on("data", this._on_data.bind(this)),
              this.parser.on("error", this._on_error.bind(this)));
          }
          _transform(e, t, r) {
            return this.parser.write(e, t, r);
          }
          _flush(e) {
            return this.parser._flush((t) =>
              this.stream_errors ? (t && this._on_error(t), e()) : e(t),
            );
          }
          static diagnose(e, t, r) {
            if (null == e) throw new Error("input required");
            let n = {},
              i = "hex";
            switch (typeof t) {
              case "function":
                ((r = t), (i = o.guessEncoding(e)));
                break;
              case "object":
                ((n = o.extend({}, t)),
                  (i = null != n.encoding ? n.encoding : o.guessEncoding(e)),
                  delete n.encoding);
                break;
              default:
                i = null != t ? t : "hex";
            }
            const s = new c(),
              u = new Diagnose(n);
            let a = null;
            return (
              "function" === typeof r
                ? (u.on("end", () => r(null, s.toString("utf8"))),
                  u.on("error", r))
                : (a = new Promise(
                    (e, t) => (
                      u.on("end", () => e(s.toString("utf8"))),
                      u.on("error", t)
                    ),
                  )),
              u.pipe(s),
              u.end(e, i),
              a
            );
          }
          _on_error(e) {
            return this.stream_errors
              ? this.push(e.toString())
              : this.emit("error", e);
          }
          _on_more(e, t, r, n) {
            if (e === l.SIMPLE_FLOAT)
              return (this.float_bytes = (function () {
                switch (t) {
                  case 2:
                    return 1;
                  case 4:
                    return 2;
                  case 8:
                    return 3;
                }
              })());
          }
          _fore(e, t) {
            switch (e) {
              case l.BYTE_STRING:
              case l.UTF8_STRING:
              case l.ARRAY:
                if (t > 0) return this.push(", ");
                break;
              case l.MAP:
                if (t > 0) return t % 2 ? this.push(": ") : this.push(", ");
            }
          }
          _on_value(e, r, n) {
            if (e !== h.BREAK)
              return (
                this._fore(r, n),
                this.push(
                  function () {
                    switch (!1) {
                      case e !== h.NULL:
                        return "null";
                      case e !== h.UNDEFINED:
                        return "undefined";
                      case "string" !== typeof e:
                        return JSON.stringify(e);
                      case !(this.float_bytes > 0):
                        const r = this.float_bytes;
                        return (
                          (this.float_bytes = -1),
                          i.inspect(e) + "_" + r
                        );
                      case !t.isBuffer(e):
                        return "h'" + e.toString("hex") + "'";
                      case !(e instanceof a):
                        return e.toString();
                      default:
                        return i.inspect(e);
                    }
                  }.call(this),
                )
              );
          }
          _on_start(e, t, r, n) {
            if (
              (this._fore(r, n),
              this.push(
                (function () {
                  switch (e) {
                    case l.TAG:
                      return t + "(";
                    case l.ARRAY:
                      return "[";
                    case l.MAP:
                      return "{";
                    case l.BYTE_STRING:
                    case l.UTF8_STRING:
                      return "(";
                    default:
                      throw new Error("Unknown diagnostic type: " + e);
                  }
                })(),
              ),
              t === h.STREAM)
            )
              return this.push("_ ");
          }
          _on_stop(e) {
            return this.push(
              (function () {
                switch (e) {
                  case l.TAG:
                    return ")";
                  case l.ARRAY:
                    return "]";
                  case l.MAP:
                    return "}";
                  case l.BYTE_STRING:
                  case l.UTF8_STRING:
                    return ")";
                  default:
                    throw new Error("Unknown diagnostic type: " + e);
                }
              })(),
            );
          }
          _on_data() {
            return this.push(this.separator);
          }
        }
        e.exports = Diagnose;
      }).call(this, r(2).Buffer);
    },
    7139: function (e, t, r) {
      "use strict";
      (function (t) {
        const n = r(5879),
          i = r(4622),
          s = r(3639),
          o = s.MT;
        class CborMap extends Map {
          constructor(e) {
            super(e);
          }
          static _encode(e) {
            return n.encodeCanonical(e).toString("base64");
          }
          static _decode(e) {
            return i.decodeFirstSync(e, "base64");
          }
          get(e) {
            return super.get(CborMap._encode(e));
          }
          set(e, t) {
            return super.set(CborMap._encode(e), t);
          }
          delete(e) {
            return super.delete(CborMap._encode(e));
          }
          has(e) {
            return super.has(CborMap._encode(e));
          }
          *keys() {
            for (const e of super.keys()) yield CborMap._decode(e);
          }
          *entries() {
            for (const e of super.entries())
              yield [CborMap._decode(e[0]), e[1]];
          }
          [Symbol.iterator]() {
            return this.entries();
          }
          forEach(e, t) {
            if ("function" !== typeof e)
              throw new TypeError("Must be function");
            for (const r of super.entries())
              e.call(this, r[1], CborMap._decode(r[0]), this);
          }
          encodeCBOR(e) {
            if (!e._pushInt(this.size, o.MAP)) return !1;
            if (e.canonical) {
              const r = Array.from(super.entries()).map((e) => [
                t.from(e[0], "base64"),
                e[1],
              ]);
              r.sort((e, t) => e[0].compare(t[0]));
              for (const t of r)
                if (!e.push(t[0]) || !e.pushAny(t[1])) return !1;
            } else
              for (const r of super.entries())
                if (!e.push(t.from(r[0], "base64")) || !e.pushAny(r[1]))
                  return !1;
            return !0;
          }
        }
        e.exports = CborMap;
      }).call(this, r(2).Buffer);
    },
    7142: function (e, t, r) {
      var n = r(4916);
      e.exports = function (e, t, r) {
        if (!isFinite(n.uintOrNaN(r))) return {};
        for (
          var i = n.transactionBytes([], t),
            s = 0,
            o = [],
            u = n.sumOrNaN(t),
            a = 0;
          a < e.length;
          ++a
        ) {
          var c = e[a],
            l = n.inputBytes(c),
            h = r * l,
            f = n.uintOrNaN(c.value);
          if (h > c.value) {
            if (a === e.length - 1) return { fee: r * (i + l) };
          } else {
            ((i += l), (s += f), o.push(c));
            var p = r * i;
            if (!(s < u + p)) return n.finalize(o, t, r);
          }
        }
        return { fee: r * i };
      };
    },
    7143: function (e, t, r) {
      var n = r(4916);
      e.exports = function (e, t, r) {
        if (!isFinite(n.uintOrNaN(r))) return {};
        for (
          var i = n.transactionBytes([], t),
            s = 0,
            o = [],
            u = n.sumOrNaN(t),
            a = n.dustThreshold({}, r),
            c = 0;
          c < e.length;
          ++c
        ) {
          var l = e[c],
            h = n.inputBytes(l),
            f = r * (i + h),
            p = n.uintOrNaN(l.value);
          if (
            !(s + p > u + f + a) &&
            ((i += h), (s += p), o.push(l), !(s < u + f))
          )
            return n.finalize(o, t, r);
        }
        return { fee: r * i };
      };
    },
    7147: function (e, t, r) {
      "use strict";
      /**
       * @license
       * https://github.com/ealmansi/cashaddrjs
       * Copyright (c) 2017-2020 Emilio Almansi
       * Distributed under the MIT software license, see the accompanying
       * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
       */ var n = r(7148),
        i = r(7149),
        s = r(7150),
        o = r(4917),
        u = o.validate;
      function a(e, t, r) {
        (u("string" === typeof e && f(e), "Invalid prefix: " + e + "."),
          u("string" === typeof t, "Invalid type: " + t + "."),
          u(r instanceof Uint8Array, "Invalid hash: " + r + "."));
        var i = _(p(e), new Uint8Array(1)),
          s = g(t) + w(r),
          o = m(_(new Uint8Array([s]), r)),
          a = _(_(i, o), new Uint8Array(8)),
          c = _(o, d(E(a)));
        return e + ":" + n.encode(c);
      }
      function c(e) {
        u("string" === typeof e && I(e), "Invalid address: " + e + ".");
        var t = e.toLowerCase().split(":");
        u(2 === t.length, "Missing prefix: " + e + ".");
        var r = t[0],
          i = n.decode(t[1]);
        u(A(r, i), "Invalid checksum: " + e + ".");
        var s = b(i.subarray(0, -8)),
          o = s[0],
          a = s.subarray(1);
        u(v(o) === 8 * a.length, "Invalid hash size: " + e + ".");
        var c = y(o);
        return { prefix: r, type: c, hash: a };
      }
      var l = o.ValidationError,
        h = ["bitcoincash", "bchtest", "bchreg"];
      function f(e) {
        return I(e) && -1 !== h.indexOf(e.toLowerCase());
      }
      function p(e) {
        for (var t = new Uint8Array(e.length), r = 0; r < e.length; ++r)
          t[r] = 31 & e[r].charCodeAt(0);
        return t;
      }
      function d(e) {
        for (var t = new Uint8Array(8), r = 0; r < 8; ++r)
          ((t[7 - r] = e.and(31).toJSNumber()), (e = e.shiftRight(5)));
        return t;
      }
      function g(e) {
        switch (e) {
          case "P2PKH":
            return 0;
          case "P2SH":
            return 8;
          default:
            throw new l("Invalid type: " + e + ".");
        }
      }
      function y(e) {
        switch (120 & e) {
          case 0:
            return "P2PKH";
          case 8:
            return "P2SH";
          default:
            throw new l("Invalid address type in version byte: " + e + ".");
        }
      }
      function w(e) {
        switch (8 * e.length) {
          case 160:
            return 0;
          case 192:
            return 1;
          case 224:
            return 2;
          case 256:
            return 3;
          case 320:
            return 4;
          case 384:
            return 5;
          case 448:
            return 6;
          case 512:
            return 7;
          default:
            throw new l("Invalid hash size: " + e.length + ".");
        }
      }
      function v(e) {
        switch (7 & e) {
          case 0:
            return 160;
          case 1:
            return 192;
          case 2:
            return 224;
          case 3:
            return 256;
          case 4:
            return 320;
          case 5:
            return 384;
          case 6:
            return 448;
          case 7:
            return 512;
        }
      }
      function m(e) {
        return s(e, 8, 5);
      }
      function b(e) {
        return s(e, 5, 8, !0);
      }
      function _(e, t) {
        var r = new Uint8Array(e.length + t.length);
        return (r.set(e), r.set(t, e.length), r);
      }
      function E(e) {
        for (
          var t = [
              656907472481, 522768456162, 0xf33e5fb3c4, 748107326120,
              130178868336,
            ],
            r = i(1),
            n = 0;
          n < e.length;
          ++n
        ) {
          var s = e[n],
            o = r.shiftRight(35);
          r = r.and(34359738367).shiftLeft(5).xor(s);
          for (var u = 0; u < t.length; ++u)
            o.shiftRight(u).and(1).equals(1) && (r = r.xor(t[u]));
        }
        return r.xor(1);
      }
      function A(e, t) {
        var r = _(p(e), new Uint8Array(1)),
          n = _(r, t);
        return E(n).equals(0);
      }
      function I(e) {
        return e === e.toLowerCase() || e === e.toUpperCase();
      }
      e.exports = { encode: a, decode: c, ValidationError: l };
    },
    7148: function (e, t, r) {
      "use strict";
      /**
       * @license
       * https://github.com/ealmansi/cashaddrjs
       * Copyright (c) 2017-2020 Emilio Almansi
       * Distributed under the MIT software license, see the accompanying
       * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
       */ var n = r(4917).validate,
        i = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
        s = {
          q: 0,
          p: 1,
          z: 2,
          r: 3,
          y: 4,
          9: 5,
          x: 6,
          8: 7,
          g: 8,
          f: 9,
          2: 10,
          t: 11,
          v: 12,
          d: 13,
          w: 14,
          0: 15,
          s: 16,
          3: 17,
          j: 18,
          n: 19,
          5: 20,
          4: 21,
          k: 22,
          h: 23,
          c: 24,
          e: 25,
          6: 26,
          m: 27,
          u: 28,
          a: 29,
          7: 30,
          l: 31,
        };
      function o(e) {
        n(e instanceof Uint8Array, "Invalid data: " + e + ".");
        for (var t = "", r = 0; r < e.length; ++r) {
          var s = e[r];
          (n(0 <= s && s < 32, "Invalid value: " + s + "."), (t += i[s]));
        }
        return t;
      }
      function u(e) {
        n("string" === typeof e, "Invalid base32-encoded string: " + e + ".");
        for (var t = new Uint8Array(e.length), r = 0; r < e.length; ++r) {
          var i = e[r];
          (n(i in s, "Invalid value: " + i + "."), (t[r] = s[i]));
        }
        return t;
      }
      e.exports = { encode: o, decode: u };
    },
    7149: function (e, t, r) {
      (function (e) {
        var r,
          n,
          i = (function (e) {
            "use strict";
            var t = 1e7,
              r = 7,
              n = 9007199254740992,
              s = l(n),
              o = Math.log(n);
            function u(e, t) {
              return "undefined" === typeof e
                ? u[0]
                : "undefined" !== typeof t
                  ? 10 === +t
                    ? re(e)
                    : $(e, t)
                  : re(e);
            }
            function BigInteger(e, t) {
              ((this.value = e), (this.sign = t), (this.isSmall = !1));
            }
            function a(e) {
              ((this.value = e), (this.sign = e < 0), (this.isSmall = !0));
            }
            function c(e) {
              return -n < e && e < n;
            }
            function l(e) {
              return e < 1e7
                ? [e]
                : e < 1e14
                  ? [e % 1e7, Math.floor(e / 1e7)]
                  : [e % 1e7, Math.floor(e / 1e7) % 1e7, Math.floor(e / 1e14)];
            }
            function h(e) {
              f(e);
              var r = e.length;
              if (r < 4 && x(e, s) < 0)
                switch (r) {
                  case 0:
                    return 0;
                  case 1:
                    return e[0];
                  case 2:
                    return e[0] + e[1] * t;
                  default:
                    return e[0] + (e[1] + e[2] * t) * t;
                }
              return e;
            }
            function f(e) {
              var t = e.length;
              while (0 === e[--t]);
              e.length = t + 1;
            }
            function p(e) {
              var t = new Array(e),
                r = -1;
              while (++r < e) t[r] = 0;
              return t;
            }
            function d(e) {
              return e > 0 ? Math.floor(e) : Math.ceil(e);
            }
            function g(e, r) {
              var n,
                i,
                s = e.length,
                o = r.length,
                u = new Array(s),
                a = 0,
                c = t;
              for (i = 0; i < o; i++)
                ((n = e[i] + r[i] + a),
                  (a = n >= c ? 1 : 0),
                  (u[i] = n - a * c));
              while (i < s)
                ((n = e[i] + a), (a = n === c ? 1 : 0), (u[i++] = n - a * c));
              return (a > 0 && u.push(a), u);
            }
            function y(e, t) {
              return e.length >= t.length ? g(e, t) : g(t, e);
            }
            function w(e, r) {
              var n,
                i,
                s = e.length,
                o = new Array(s),
                u = t;
              for (i = 0; i < s; i++)
                ((n = e[i] - u + r),
                  (r = Math.floor(n / u)),
                  (o[i] = n - r * u),
                  (r += 1));
              while (r > 0) ((o[i++] = r % u), (r = Math.floor(r / u)));
              return o;
            }
            function v(e, r) {
              var n,
                i,
                s = e.length,
                o = r.length,
                u = new Array(s),
                a = 0,
                c = t;
              for (n = 0; n < o; n++)
                ((i = e[n] - a - r[n]),
                  i < 0 ? ((i += c), (a = 1)) : (a = 0),
                  (u[n] = i));
              for (n = o; n < s; n++) {
                if (((i = e[n] - a), !(i < 0))) {
                  u[n++] = i;
                  break;
                }
                ((i += c), (u[n] = i));
              }
              for (; n < s; n++) u[n] = e[n];
              return (f(u), u);
            }
            function m(e, t, r) {
              var n;
              return (
                x(e, t) >= 0 ? (n = v(e, t)) : ((n = v(t, e)), (r = !r)),
                (n = h(n)),
                "number" === typeof n
                  ? (r && (n = -n), new a(n))
                  : new BigInteger(n, r)
              );
            }
            function b(e, r, n) {
              var i,
                s,
                o = e.length,
                u = new Array(o),
                c = -r,
                l = t;
              for (i = 0; i < o; i++)
                ((s = e[i] + c),
                  (c = Math.floor(s / l)),
                  (s %= l),
                  (u[i] = s < 0 ? s + l : s));
              return (
                (u = h(u)),
                "number" === typeof u
                  ? (n && (u = -u), new a(u))
                  : new BigInteger(u, n)
              );
            }
            function _(e, r) {
              var n,
                i,
                s,
                o,
                u,
                a = e.length,
                c = r.length,
                l = a + c,
                h = p(l),
                d = t;
              for (s = 0; s < a; ++s) {
                o = e[s];
                for (var g = 0; g < c; ++g)
                  ((u = r[g]),
                    (n = o * u + h[s + g]),
                    (i = Math.floor(n / d)),
                    (h[s + g] = n - i * d),
                    (h[s + g + 1] += i));
              }
              return (f(h), h);
            }
            function E(e, r) {
              var n,
                i,
                s = e.length,
                o = new Array(s),
                u = t,
                a = 0;
              for (i = 0; i < s; i++)
                ((n = e[i] * r + a),
                  (a = Math.floor(n / u)),
                  (o[i] = n - a * u));
              while (a > 0) ((o[i++] = a % u), (a = Math.floor(a / u)));
              return o;
            }
            function A(e, t) {
              var r = [];
              while (t-- > 0) r.push(0);
              return r.concat(e);
            }
            function I(e, t) {
              var r = Math.max(e.length, t.length);
              if (r <= 30) return _(e, t);
              r = Math.ceil(r / 2);
              var n = e.slice(r),
                i = e.slice(0, r),
                s = t.slice(r),
                o = t.slice(0, r),
                u = I(i, o),
                a = I(n, s),
                c = I(y(i, n), y(o, s)),
                l = y(y(u, A(v(v(c, u), a), r)), A(a, 2 * r));
              return (f(l), l);
            }
            function N(e, t) {
              return -0.012 * e - 0.012 * t + 15e-6 * e * t > 0;
            }
            function S(e, r, n) {
              return new BigInteger(e < t ? E(r, e) : _(r, l(e)), n);
            }
            function T(e) {
              var r,
                n,
                i,
                s,
                o,
                u = e.length,
                a = p(u + u),
                c = t;
              for (i = 0; i < u; i++) {
                ((s = e[i]), (n = 0 - s * s));
                for (var l = i; l < u; l++)
                  ((o = e[l]),
                    (r = s * o * 2 + a[i + l] + n),
                    (n = Math.floor(r / c)),
                    (a[i + l] = r - n * c));
                a[i + u] = n;
              }
              return (f(a), a);
            }
            function B(e, r) {
              var n,
                i,
                s,
                o,
                u,
                a,
                c,
                l = e.length,
                f = r.length,
                d = t,
                g = p(r.length),
                y = r[f - 1],
                w = Math.ceil(d / (2 * y)),
                v = E(e, w),
                m = E(r, w);
              for (
                v.length <= l && v.push(0), m.push(0), y = m[f - 1], i = l - f;
                i >= 0;
                i--
              ) {
                for (
                  n = d - 1,
                    v[i + f] !== y &&
                      (n = Math.floor((v[i + f] * d + v[i + f - 1]) / y)),
                    s = 0,
                    o = 0,
                    a = m.length,
                    u = 0;
                  u < a;
                  u++
                )
                  ((s += n * m[u]),
                    (c = Math.floor(s / d)),
                    (o += v[i + u] - (s - c * d)),
                    (s = c),
                    o < 0
                      ? ((v[i + u] = o + d), (o = -1))
                      : ((v[i + u] = o), (o = 0)));
                while (0 !== o) {
                  for (n -= 1, s = 0, u = 0; u < a; u++)
                    ((s += v[i + u] - d + m[u]),
                      s < 0
                        ? ((v[i + u] = s + d), (s = 0))
                        : ((v[i + u] = s), (s = 1)));
                  o += s;
                }
                g[i] = n;
              }
              return ((v = U(v, w)[0]), [h(g), h(v)]);
            }
            function M(e, r) {
              var n,
                i,
                s,
                o,
                u,
                a = e.length,
                c = r.length,
                l = [],
                p = [],
                d = t;
              while (a)
                if ((p.unshift(e[--a]), f(p), x(p, r) < 0)) l.push(0);
                else {
                  ((i = p.length),
                    (s = p[i - 1] * d + p[i - 2]),
                    (o = r[c - 1] * d + r[c - 2]),
                    i > c && (s = (s + 1) * d),
                    (n = Math.ceil(s / o)));
                  do {
                    if (((u = E(r, n)), x(u, p) <= 0)) break;
                    n--;
                  } while (n);
                  (l.push(n), (p = v(p, u)));
                }
              return (l.reverse(), [h(l), h(p)]);
            }
            function U(e, r) {
              var n,
                i,
                s,
                o,
                u = e.length,
                a = p(u),
                c = t;
              for (s = 0, n = u - 1; n >= 0; --n)
                ((o = s * c + e[n]),
                  (i = d(o / r)),
                  (s = o - i * r),
                  (a[n] = 0 | i));
              return [a, 0 | s];
            }
            function O(e, r) {
              var n,
                i,
                s = re(r),
                o = e.value,
                c = s.value;
              if (0 === c) throw new Error("Cannot divide by zero");
              if (e.isSmall)
                return s.isSmall ? [new a(d(o / c)), new a(o % c)] : [u[0], e];
              if (s.isSmall) {
                if (1 === c) return [e, u[0]];
                if (-1 == c) return [e.negate(), u[0]];
                var f = Math.abs(c);
                if (f < t) {
                  ((n = U(o, f)), (i = h(n[0])));
                  var p = n[1];
                  return (
                    e.sign && (p = -p),
                    "number" === typeof i
                      ? (e.sign !== s.sign && (i = -i), [new a(i), new a(p)])
                      : [new BigInteger(i, e.sign !== s.sign), new a(p)]
                  );
                }
                c = l(f);
              }
              var g = x(o, c);
              if (-1 === g) return [u[0], e];
              if (0 === g) return [u[e.sign === s.sign ? 1 : -1], u[0]];
              ((n = o.length + c.length <= 200 ? B(o, c) : M(o, c)),
                (i = n[0]));
              var y = e.sign !== s.sign,
                w = n[1],
                v = e.sign;
              return (
                "number" === typeof i
                  ? (y && (i = -i), (i = new a(i)))
                  : (i = new BigInteger(i, y)),
                "number" === typeof w
                  ? (v && (w = -w), (w = new a(w)))
                  : (w = new BigInteger(w, v)),
                [i, w]
              );
            }
            function x(e, t) {
              if (e.length !== t.length) return e.length > t.length ? 1 : -1;
              for (var r = e.length - 1; r >= 0; r--)
                if (e[r] !== t[r]) return e[r] > t[r] ? 1 : -1;
              return 0;
            }
            function R(e) {
              var t = e.abs();
              return (
                !t.isUnit() &&
                (!!(t.equals(2) || t.equals(3) || t.equals(5)) ||
                  (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) &&
                    (!!t.lesser(49) || void 0)))
              );
            }
            function L(e, t) {
              var r,
                n,
                s,
                o = e.prev(),
                a = o,
                c = 0;
              while (a.isEven()) ((a = a.divide(2)), c++);
              e: for (n = 0; n < t.length; n++)
                if (
                  !e.lesser(t[n]) &&
                  ((s = i(t[n]).modPow(a, e)), !s.equals(u[1]) && !s.equals(o))
                ) {
                  for (r = c - 1; 0 != r; r--) {
                    if (((s = s.square().mod(e)), s.isUnit())) return !1;
                    if (s.equals(o)) continue e;
                  }
                  return !1;
                }
              return !0;
            }
            ((BigInteger.prototype = Object.create(u.prototype)),
              (a.prototype = Object.create(u.prototype)),
              (BigInteger.prototype.add = function (e) {
                var t = re(e);
                if (this.sign !== t.sign) return this.subtract(t.negate());
                var r = this.value,
                  n = t.value;
                return t.isSmall
                  ? new BigInteger(w(r, Math.abs(n)), this.sign)
                  : new BigInteger(y(r, n), this.sign);
              }),
              (BigInteger.prototype.plus = BigInteger.prototype.add),
              (a.prototype.add = function (e) {
                var t = re(e),
                  r = this.value;
                if (r < 0 !== t.sign) return this.subtract(t.negate());
                var n = t.value;
                if (t.isSmall) {
                  if (c(r + n)) return new a(r + n);
                  n = l(Math.abs(n));
                }
                return new BigInteger(w(n, Math.abs(r)), r < 0);
              }),
              (a.prototype.plus = a.prototype.add),
              (BigInteger.prototype.subtract = function (e) {
                var t = re(e);
                if (this.sign !== t.sign) return this.add(t.negate());
                var r = this.value,
                  n = t.value;
                return t.isSmall
                  ? b(r, Math.abs(n), this.sign)
                  : m(r, n, this.sign);
              }),
              (BigInteger.prototype.minus = BigInteger.prototype.subtract),
              (a.prototype.subtract = function (e) {
                var t = re(e),
                  r = this.value;
                if (r < 0 !== t.sign) return this.add(t.negate());
                var n = t.value;
                return t.isSmall ? new a(r - n) : b(n, Math.abs(r), r >= 0);
              }),
              (a.prototype.minus = a.prototype.subtract),
              (BigInteger.prototype.negate = function () {
                return new BigInteger(this.value, !this.sign);
              }),
              (a.prototype.negate = function () {
                var e = this.sign,
                  t = new a(-this.value);
                return ((t.sign = !e), t);
              }),
              (BigInteger.prototype.abs = function () {
                return new BigInteger(this.value, !1);
              }),
              (a.prototype.abs = function () {
                return new a(Math.abs(this.value));
              }),
              (BigInteger.prototype.multiply = function (e) {
                var r,
                  n = re(e),
                  i = this.value,
                  s = n.value,
                  o = this.sign !== n.sign;
                if (n.isSmall) {
                  if (0 === s) return u[0];
                  if (1 === s) return this;
                  if (-1 === s) return this.negate();
                  if (((r = Math.abs(s)), r < t))
                    return new BigInteger(E(i, r), o);
                  s = l(r);
                }
                return N(i.length, s.length)
                  ? new BigInteger(I(i, s), o)
                  : new BigInteger(_(i, s), o);
              }),
              (BigInteger.prototype.times = BigInteger.prototype.multiply),
              (a.prototype._multiplyBySmall = function (e) {
                return c(e.value * this.value)
                  ? new a(e.value * this.value)
                  : S(
                      Math.abs(e.value),
                      l(Math.abs(this.value)),
                      this.sign !== e.sign,
                    );
              }),
              (BigInteger.prototype._multiplyBySmall = function (e) {
                return 0 === e.value
                  ? u[0]
                  : 1 === e.value
                    ? this
                    : -1 === e.value
                      ? this.negate()
                      : S(Math.abs(e.value), this.value, this.sign !== e.sign);
              }),
              (a.prototype.multiply = function (e) {
                return re(e)._multiplyBySmall(this);
              }),
              (a.prototype.times = a.prototype.multiply),
              (BigInteger.prototype.square = function () {
                return new BigInteger(T(this.value), !1);
              }),
              (a.prototype.square = function () {
                var e = this.value * this.value;
                return c(e)
                  ? new a(e)
                  : new BigInteger(T(l(Math.abs(this.value))), !1);
              }),
              (BigInteger.prototype.divmod = function (e) {
                var t = O(this, e);
                return { quotient: t[0], remainder: t[1] };
              }),
              (a.prototype.divmod = BigInteger.prototype.divmod),
              (BigInteger.prototype.divide = function (e) {
                return O(this, e)[0];
              }),
              (a.prototype.over =
                a.prototype.divide =
                BigInteger.prototype.over =
                  BigInteger.prototype.divide),
              (BigInteger.prototype.mod = function (e) {
                return O(this, e)[1];
              }),
              (a.prototype.remainder =
                a.prototype.mod =
                BigInteger.prototype.remainder =
                  BigInteger.prototype.mod),
              (BigInteger.prototype.pow = function (e) {
                var t,
                  r,
                  n,
                  i = re(e),
                  s = this.value,
                  o = i.value;
                if (0 === o) return u[1];
                if (0 === s) return u[0];
                if (1 === s) return u[1];
                if (-1 === s) return i.isEven() ? u[1] : u[-1];
                if (i.sign) return u[0];
                if (!i.isSmall)
                  throw new Error(
                    "The exponent " + i.toString() + " is too large.",
                  );
                if (this.isSmall && c((t = Math.pow(s, o)))) return new a(d(t));
                ((r = this), (n = u[1]));
                while (1) {
                  if ((!0 & o && ((n = n.times(r)), --o), 0 === o)) break;
                  ((o /= 2), (r = r.square()));
                }
                return n;
              }),
              (a.prototype.pow = BigInteger.prototype.pow),
              (BigInteger.prototype.modPow = function (e, t) {
                if (((e = re(e)), (t = re(t)), t.isZero()))
                  throw new Error("Cannot take modPow with modulus 0");
                var r = u[1],
                  n = this.mod(t);
                while (e.isPositive()) {
                  if (n.isZero()) return u[0];
                  (e.isOdd() && (r = r.multiply(n).mod(t)),
                    (e = e.divide(2)),
                    (n = n.square().mod(t)));
                }
                return r;
              }),
              (a.prototype.modPow = BigInteger.prototype.modPow),
              (BigInteger.prototype.compareAbs = function (e) {
                var t = re(e),
                  r = this.value,
                  n = t.value;
                return t.isSmall ? 1 : x(r, n);
              }),
              (a.prototype.compareAbs = function (e) {
                var t = re(e),
                  r = Math.abs(this.value),
                  n = t.value;
                return t.isSmall
                  ? ((n = Math.abs(n)), r === n ? 0 : r > n ? 1 : -1)
                  : -1;
              }),
              (BigInteger.prototype.compare = function (e) {
                if (e === 1 / 0) return -1;
                if (e === -1 / 0) return 1;
                var t = re(e),
                  r = this.value,
                  n = t.value;
                return this.sign !== t.sign
                  ? t.sign
                    ? 1
                    : -1
                  : t.isSmall
                    ? this.sign
                      ? -1
                      : 1
                    : x(r, n) * (this.sign ? -1 : 1);
              }),
              (BigInteger.prototype.compareTo = BigInteger.prototype.compare),
              (a.prototype.compare = function (e) {
                if (e === 1 / 0) return -1;
                if (e === -1 / 0) return 1;
                var t = re(e),
                  r = this.value,
                  n = t.value;
                return t.isSmall
                  ? r == n
                    ? 0
                    : r > n
                      ? 1
                      : -1
                  : r < 0 !== t.sign
                    ? r < 0
                      ? -1
                      : 1
                    : r < 0
                      ? 1
                      : -1;
              }),
              (a.prototype.compareTo = a.prototype.compare),
              (BigInteger.prototype.equals = function (e) {
                return 0 === this.compare(e);
              }),
              (a.prototype.eq =
                a.prototype.equals =
                BigInteger.prototype.eq =
                  BigInteger.prototype.equals),
              (BigInteger.prototype.notEquals = function (e) {
                return 0 !== this.compare(e);
              }),
              (a.prototype.neq =
                a.prototype.notEquals =
                BigInteger.prototype.neq =
                  BigInteger.prototype.notEquals),
              (BigInteger.prototype.greater = function (e) {
                return this.compare(e) > 0;
              }),
              (a.prototype.gt =
                a.prototype.greater =
                BigInteger.prototype.gt =
                  BigInteger.prototype.greater),
              (BigInteger.prototype.lesser = function (e) {
                return this.compare(e) < 0;
              }),
              (a.prototype.lt =
                a.prototype.lesser =
                BigInteger.prototype.lt =
                  BigInteger.prototype.lesser),
              (BigInteger.prototype.greaterOrEquals = function (e) {
                return this.compare(e) >= 0;
              }),
              (a.prototype.geq =
                a.prototype.greaterOrEquals =
                BigInteger.prototype.geq =
                  BigInteger.prototype.greaterOrEquals),
              (BigInteger.prototype.lesserOrEquals = function (e) {
                return this.compare(e) <= 0;
              }),
              (a.prototype.leq =
                a.prototype.lesserOrEquals =
                BigInteger.prototype.leq =
                  BigInteger.prototype.lesserOrEquals),
              (BigInteger.prototype.isEven = function () {
                return 0 === (1 & this.value[0]);
              }),
              (a.prototype.isEven = function () {
                return 0 === (1 & this.value);
              }),
              (BigInteger.prototype.isOdd = function () {
                return 1 === (1 & this.value[0]);
              }),
              (a.prototype.isOdd = function () {
                return 1 === (1 & this.value);
              }),
              (BigInteger.prototype.isPositive = function () {
                return !this.sign;
              }),
              (a.prototype.isPositive = function () {
                return this.value > 0;
              }),
              (BigInteger.prototype.isNegative = function () {
                return this.sign;
              }),
              (a.prototype.isNegative = function () {
                return this.value < 0;
              }),
              (BigInteger.prototype.isUnit = function () {
                return !1;
              }),
              (a.prototype.isUnit = function () {
                return 1 === Math.abs(this.value);
              }),
              (BigInteger.prototype.isZero = function () {
                return !1;
              }),
              (a.prototype.isZero = function () {
                return 0 === this.value;
              }),
              (BigInteger.prototype.isDivisibleBy = function (e) {
                var t = re(e),
                  r = t.value;
                return (
                  0 !== r &&
                  (1 === r ||
                    (2 === r ? this.isEven() : this.mod(t).equals(u[0])))
                );
              }),
              (a.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy),
              (BigInteger.prototype.isPrime = function (t) {
                var r = R(this);
                if (r !== e) return r;
                var n = this.abs(),
                  s = n.bitLength();
                if (s <= 64)
                  return L(
                    n,
                    [2, 325, 9375, 28178, 450775, 9780504, 1795265022],
                  );
                for (
                  var o = Math.log(2) * s,
                    u = Math.ceil(!0 === t ? 2 * Math.pow(o, 2) : o),
                    a = [],
                    c = 0;
                  c < u;
                  c++
                )
                  a.push(i(c + 2));
                return L(n, a);
              }),
              (a.prototype.isPrime = BigInteger.prototype.isPrime),
              (BigInteger.prototype.isProbablePrime = function (t) {
                var r = R(this);
                if (r !== e) return r;
                for (
                  var n = this.abs(), s = t === e ? 5 : t, o = [], u = 0;
                  u < s;
                  u++
                )
                  o.push(i.randBetween(2, n.minus(2)));
                return L(n, o);
              }),
              (a.prototype.isProbablePrime =
                BigInteger.prototype.isProbablePrime),
              (BigInteger.prototype.modInv = function (e) {
                var t,
                  r,
                  n,
                  s = i.zero,
                  o = i.one,
                  u = re(e),
                  a = this.abs();
                while (!a.equals(i.zero))
                  ((t = u.divide(a)),
                    (r = s),
                    (n = u),
                    (s = o),
                    (u = a),
                    (o = r.subtract(t.multiply(o))),
                    (a = n.subtract(t.multiply(a))));
                if (!u.equals(1))
                  throw new Error(
                    this.toString() +
                      " and " +
                      e.toString() +
                      " are not co-prime",
                  );
                return (
                  -1 === s.compare(0) && (s = s.add(e)),
                  this.isNegative() ? s.negate() : s
                );
              }),
              (a.prototype.modInv = BigInteger.prototype.modInv),
              (BigInteger.prototype.next = function () {
                var e = this.value;
                return this.sign
                  ? b(e, 1, this.sign)
                  : new BigInteger(w(e, 1), this.sign);
              }),
              (a.prototype.next = function () {
                var e = this.value;
                return e + 1 < n ? new a(e + 1) : new BigInteger(s, !1);
              }),
              (BigInteger.prototype.prev = function () {
                var e = this.value;
                return this.sign
                  ? new BigInteger(w(e, 1), !0)
                  : b(e, 1, this.sign);
              }),
              (a.prototype.prev = function () {
                var e = this.value;
                return e - 1 > -n ? new a(e - 1) : new BigInteger(s, !0);
              }));
            var F = [1];
            while (2 * F[F.length - 1] <= t) F.push(2 * F[F.length - 1]);
            var P = F.length,
              D = F[P - 1];
            function k(e) {
              return (
                (("number" === typeof e || "string" === typeof e) &&
                  +Math.abs(e) <= t) ||
                (e instanceof BigInteger && e.value.length <= 1)
              );
            }
            function C(e, t, r) {
              t = re(t);
              var n = e.isNegative(),
                s = t.isNegative(),
                o = n ? e.not() : e,
                u = s ? t.not() : t,
                a = 0,
                c = 0,
                l = null,
                h = null,
                f = [];
              while (!o.isZero() || !u.isZero())
                ((l = O(o, D)),
                  (a = l[1].toJSNumber()),
                  n && (a = D - 1 - a),
                  (h = O(u, D)),
                  (c = h[1].toJSNumber()),
                  s && (c = D - 1 - c),
                  (o = l[0]),
                  (u = h[0]),
                  f.push(r(a, c)));
              for (
                var p = 0 !== r(n ? 1 : 0, s ? 1 : 0) ? i(-1) : i(0),
                  d = f.length - 1;
                d >= 0;
                d -= 1
              )
                p = p.multiply(D).add(i(f[d]));
              return p;
            }
            ((BigInteger.prototype.shiftLeft = function (e) {
              if (!k(e))
                throw new Error(String(e) + " is too large for shifting.");
              if (((e = +e), e < 0)) return this.shiftRight(-e);
              var t = this;
              if (t.isZero()) return t;
              while (e >= P) ((t = t.multiply(D)), (e -= P - 1));
              return t.multiply(F[e]);
            }),
              (a.prototype.shiftLeft = BigInteger.prototype.shiftLeft),
              (BigInteger.prototype.shiftRight = function (e) {
                var t;
                if (!k(e))
                  throw new Error(String(e) + " is too large for shifting.");
                if (((e = +e), e < 0)) return this.shiftLeft(-e);
                var r = this;
                while (e >= P) {
                  if (r.isZero() || (r.isNegative() && r.isUnit())) return r;
                  ((t = O(r, D)),
                    (r = t[1].isNegative() ? t[0].prev() : t[0]),
                    (e -= P - 1));
                }
                return (
                  (t = O(r, F[e])),
                  t[1].isNegative() ? t[0].prev() : t[0]
                );
              }),
              (a.prototype.shiftRight = BigInteger.prototype.shiftRight),
              (BigInteger.prototype.not = function () {
                return this.negate().prev();
              }),
              (a.prototype.not = BigInteger.prototype.not),
              (BigInteger.prototype.and = function (e) {
                return C(this, e, function (e, t) {
                  return e & t;
                });
              }),
              (a.prototype.and = BigInteger.prototype.and),
              (BigInteger.prototype.or = function (e) {
                return C(this, e, function (e, t) {
                  return e | t;
                });
              }),
              (a.prototype.or = BigInteger.prototype.or),
              (BigInteger.prototype.xor = function (e) {
                return C(this, e, function (e, t) {
                  return e ^ t;
                });
              }),
              (a.prototype.xor = BigInteger.prototype.xor));
            var G = 1 << 30,
              j = ((t & -t) * (t & -t)) | G;
            function q(e) {
              var r = e.value,
                n = "number" === typeof r ? r | G : (r[0] + r[1] * t) | j;
              return n & -n;
            }
            function Y(e, t) {
              if (t.compareTo(e) <= 0) {
                var r = Y(e, t.square(t)),
                  n = r.p,
                  s = r.e,
                  o = n.multiply(t);
                return o.compareTo(e) <= 0
                  ? { p: o, e: 2 * s + 1 }
                  : { p: n, e: 2 * s };
              }
              return { p: i(1), e: 0 };
            }
            function H(e, t) {
              return ((e = re(e)), (t = re(t)), e.greater(t) ? e : t);
            }
            function z(e, t) {
              return ((e = re(e)), (t = re(t)), e.lesser(t) ? e : t);
            }
            function J(e, t) {
              if (((e = re(e).abs()), (t = re(t).abs()), e.equals(t))) return e;
              if (e.isZero()) return t;
              if (t.isZero()) return e;
              var r,
                n,
                i = u[1];
              while (e.isEven() && t.isEven())
                ((r = Math.min(q(e), q(t))),
                  (e = e.divide(r)),
                  (t = t.divide(r)),
                  (i = i.multiply(r)));
              while (e.isEven()) e = e.divide(q(e));
              do {
                while (t.isEven()) t = t.divide(q(t));
                (e.greater(t) && ((n = t), (t = e), (e = n)),
                  (t = t.subtract(e)));
              } while (!t.isZero());
              return i.isUnit() ? e : e.multiply(i);
            }
            function K(e, t) {
              return (
                (e = re(e).abs()),
                (t = re(t).abs()),
                e.divide(J(e, t)).multiply(t)
              );
            }
            function Z(e, r) {
              ((e = re(e)), (r = re(r)));
              var n = z(e, r),
                i = H(e, r),
                s = i.subtract(n).add(1);
              if (s.isSmall) return n.add(Math.floor(Math.random() * s));
              for (
                var o = s.value.length - 1, u = [], c = !0, l = o;
                l >= 0;
                l--
              ) {
                var f = c ? s.value[l] : t,
                  p = d(Math.random() * f);
                (u.unshift(p), p < f && (c = !1));
              }
              return (
                (u = h(u)),
                n.add("number" === typeof u ? new a(u) : new BigInteger(u, !1))
              );
            }
            ((BigInteger.prototype.bitLength = function () {
              var e = this;
              return (
                e.compareTo(i(0)) < 0 && (e = e.negate().subtract(i(1))),
                0 === e.compareTo(i(0)) ? i(0) : i(Y(e, i(2)).e).add(i(1))
              );
            }),
              (a.prototype.bitLength = BigInteger.prototype.bitLength));
            var $ = function (e, t) {
              for (var r = e.length, n = Math.abs(t), i = 0; i < r; i++) {
                var s = e[i].toLowerCase();
                if ("-" !== s && /[a-z0-9]/.test(s)) {
                  if (/[0-9]/.test(s) && +s >= n) {
                    if ("1" === s && 1 === n) continue;
                    throw new Error(
                      s + " is not a valid digit in base " + t + ".",
                    );
                  }
                  if (s.charCodeAt(0) - 87 >= n)
                    throw new Error(
                      s + " is not a valid digit in base " + t + ".",
                    );
                }
              }
              if (2 <= t && t <= 36 && r <= o / Math.log(t)) {
                var u = parseInt(e, t);
                if (isNaN(u))
                  throw new Error(
                    s + " is not a valid digit in base " + t + ".",
                  );
                return new a(parseInt(e, t));
              }
              t = re(t);
              var c = [],
                l = "-" === e[0];
              for (i = l ? 1 : 0; i < e.length; i++) {
                s = e[i].toLowerCase();
                var h = s.charCodeAt(0);
                if (48 <= h && h <= 57) c.push(re(s));
                else if (97 <= h && h <= 122) c.push(re(s.charCodeAt(0) - 87));
                else {
                  if ("<" !== s)
                    throw new Error(s + " is not a valid character");
                  var f = i;
                  do {
                    i++;
                  } while (">" !== e[i]);
                  c.push(re(e.slice(f + 1, i)));
                }
              }
              return V(c, t, l);
            };
            function V(e, t, r) {
              var n,
                i = u[0],
                s = u[1];
              for (n = e.length - 1; n >= 0; n--)
                ((i = i.add(e[n].times(s))), (s = s.times(t)));
              return r ? i.negate() : i;
            }
            function W(e) {
              return e <= 35
                ? "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e)
                : "<" + e + ">";
            }
            function X(e, t) {
              if (((t = i(t)), t.isZero())) {
                if (e.isZero()) return { value: [0], isNegative: !1 };
                throw new Error("Cannot convert nonzero numbers to base 0.");
              }
              if (t.equals(-1)) {
                if (e.isZero()) return { value: [0], isNegative: !1 };
                if (e.isNegative())
                  return {
                    value: [].concat.apply(
                      [],
                      Array.apply(null, Array(-e)).map(
                        Array.prototype.valueOf,
                        [1, 0],
                      ),
                    ),
                    isNegative: !1,
                  };
                var r = Array.apply(null, Array(+e - 1)).map(
                  Array.prototype.valueOf,
                  [0, 1],
                );
                return (
                  r.unshift([1]),
                  { value: [].concat.apply([], r), isNegative: !1 }
                );
              }
              var n = !1;
              if (
                (e.isNegative() && t.isPositive() && ((n = !0), (e = e.abs())),
                t.equals(1))
              )
                return e.isZero()
                  ? { value: [0], isNegative: !1 }
                  : {
                      value: Array.apply(null, Array(+e)).map(
                        Number.prototype.valueOf,
                        1,
                      ),
                      isNegative: n,
                    };
              var s,
                o = [],
                u = e;
              while (u.isNegative() || u.compareAbs(t) >= 0) {
                ((s = u.divmod(t)), (u = s.quotient));
                var a = s.remainder;
                (a.isNegative() && ((a = t.minus(a).abs()), (u = u.next())),
                  o.push(a.toJSNumber()));
              }
              return (
                o.push(u.toJSNumber()),
                { value: o.reverse(), isNegative: n }
              );
            }
            function Q(e, t) {
              var r = X(e, t);
              return (r.isNegative ? "-" : "") + r.value.map(W).join("");
            }
            function ee(e) {
              if (c(+e)) {
                var t = +e;
                if (t === d(t)) return new a(t);
                throw new Error("Invalid integer: " + e);
              }
              var n = "-" === e[0];
              n && (e = e.slice(1));
              var i = e.split(/e/i);
              if (i.length > 2)
                throw new Error("Invalid integer: " + i.join("e"));
              if (2 === i.length) {
                var s = i[1];
                if (
                  ("+" === s[0] && (s = s.slice(1)),
                  (s = +s),
                  s !== d(s) || !c(s))
                )
                  throw new Error(
                    "Invalid integer: " + s + " is not a valid exponent.",
                  );
                var o = i[0],
                  u = o.indexOf(".");
                if (
                  (u >= 0 &&
                    ((s -= o.length - u - 1),
                    (o = o.slice(0, u) + o.slice(u + 1))),
                  s < 0)
                )
                  throw new Error(
                    "Cannot include negative exponent part for integers",
                  );
                ((o += new Array(s + 1).join("0")), (e = o));
              }
              var l = /^([0-9][0-9]*)$/.test(e);
              if (!l) throw new Error("Invalid integer: " + e);
              var h = [],
                p = e.length,
                g = r,
                y = p - g;
              while (p > 0)
                (h.push(+e.slice(y, p)), (y -= g), y < 0 && (y = 0), (p -= g));
              return (f(h), new BigInteger(h, n));
            }
            function te(e) {
              if (c(e)) {
                if (e !== d(e)) throw new Error(e + " is not an integer.");
                return new a(e);
              }
              return ee(e.toString());
            }
            function re(e) {
              return "number" === typeof e
                ? te(e)
                : "string" === typeof e
                  ? ee(e)
                  : e;
            }
            ((BigInteger.prototype.toArray = function (e) {
              return X(this, e);
            }),
              (a.prototype.toArray = function (e) {
                return X(this, e);
              }),
              (BigInteger.prototype.toString = function (t) {
                if ((t === e && (t = 10), 10 !== t)) return Q(this, t);
                var r,
                  n = this.value,
                  i = n.length,
                  s = String(n[--i]),
                  o = "0000000";
                while (--i >= 0)
                  ((r = String(n[i])), (s += o.slice(r.length) + r));
                var u = this.sign ? "-" : "";
                return u + s;
              }),
              (a.prototype.toString = function (t) {
                return (
                  t === e && (t = 10),
                  10 != t ? Q(this, t) : String(this.value)
                );
              }),
              (BigInteger.prototype.toJSON = a.prototype.toJSON =
                function () {
                  return this.toString();
                }),
              (BigInteger.prototype.valueOf = function () {
                return parseInt(this.toString(), 10);
              }),
              (BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf),
              (a.prototype.valueOf = function () {
                return this.value;
              }),
              (a.prototype.toJSNumber = a.prototype.valueOf));
            for (var ne = 0; ne < 1e3; ne++)
              ((u[ne] = new a(ne)), ne > 0 && (u[-ne] = new a(-ne)));
            return (
              (u.one = u[1]),
              (u.zero = u[0]),
              (u.minusOne = u[-1]),
              (u.max = H),
              (u.min = z),
              (u.gcd = J),
              (u.lcm = K),
              (u.isInstance = function (e) {
                return e instanceof BigInteger || e instanceof a;
              }),
              (u.randBetween = Z),
              (u.fromArray = function (e, t, r) {
                return V(e.map(re), re(t || 10), r);
              }),
              u
            );
          })();
        (e.hasOwnProperty("exports") && (e.exports = i),
          (r = []),
          (n = function () {
            return i;
          }.apply(t, r)),
          void 0 === n || (e.exports = n));
      }).call(this, r(20)(e));
    },
    7150: function (e, t, r) {
      "use strict";
      var n = r(4917).validate;
      e.exports = function (e, t, r, i) {
        for (
          var s = i
              ? Math.floor((e.length * t) / r)
              : Math.ceil((e.length * t) / r),
            o = (1 << r) - 1,
            u = new Uint8Array(s),
            a = 0,
            c = 0,
            l = 0,
            h = 0;
          h < e.length;
          ++h
        ) {
          var f = e[h];
          (n(0 <= f && f >> t === 0, "Invalid value: " + f + "."),
            (c = (c << t) | f),
            (l += t));
          while (l >= r) ((l -= r), (u[a] = (c >> l) & o), ++a);
        }
        return (
          i
            ? n(
                l < t && 0 === ((c << (r - l)) & o),
                "Input cannot be converted to " +
                  r +
                  " bits without padding, but strict mode was used.",
              )
            : l > 0 && ((u[a] = (c << (r - l)) & o), ++a),
          u
        );
      };
    },
  },
]);
