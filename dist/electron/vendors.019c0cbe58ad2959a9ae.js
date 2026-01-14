(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [231, 32],
  {
    10978: function (e, r, t) {
      "use strict";
      var n =
        (this && this.__extends) ||
        (function () {
          var e = function (r, t) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, r) {
                    e.__proto__ = r;
                  }) ||
                function (e, r) {
                  for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
                }),
              e(r, t)
            );
          };
          return function (r, t) {
            function n() {
              this.constructor = r;
            }
            (e(r, t),
              (r.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n())));
          };
        })();
      Object.defineProperty(r, "__esModule", { value: !0 });
      var o = t(5651),
        i = t(5653),
        a = t(4571),
        s = t(5654),
        u = t(4847),
        c = t(3960),
        l = t(3959),
        f = t(3960);
      function h(e) {
        if (!e) throw new Error("Asset ID should not be empty");
        return e === f.WAVES_ID ? f.WAVES_BLOCKCHAIN_ID : e;
      }
      function p(e) {
        var r = s.default.stringToByteArrayWithSize(e);
        return [f.ALIAS_VERSION, l.config.getNetworkByte()].concat(r);
      }
      function d(e) {
        var r = e.replace("base64:", "");
        return r.length > 0 && r.length % 4 === 0;
      }
      var y = (function () {
        function e(e) {
          this.name = e;
        }
        return e;
      })();
      r.ByteProcessor = y;
      var g = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            var r = a.default.decode(e);
            return Promise.resolve(r);
          }),
          r
        );
      })(y);
      r.Base58 = g;
      var m = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            if ("string" !== typeof e)
              throw new Error(
                "You should pass a string to BinaryDataEntry constructor",
              );
            if (d(e)) {
              if ("base64:" !== e.slice(0, 7))
                throw new Error(
                  'Blob should be encoded in base64 and prefixed with "base64:"',
                );
              var r = e.slice(7),
                t = Uint8Array.from(i.toByteArray(r)),
                n = Uint8Array.from(s.default.shortToByteArray(t.length));
              return Promise.resolve(u.concatUint8Arrays(n, t));
            }
            return Promise.resolve(Uint8Array.from([]));
          }),
          r
        );
      })(y);
      r.Base64 = m;
      var w = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            if (null != e && "string" !== typeof e)
              throw new Error(
                "You should pass a string to BinaryDataEntry constructor",
              );
            if (null != e && d(e)) {
              if ("base64:" !== e.slice(0, 7))
                throw new Error(
                  'Blob should be encoded in base64 and prefixed with "base64:"',
                );
              var r = e.slice(7),
                t = Uint8Array.from(i.toByteArray(r)),
                n = Uint8Array.from(s.default.shortToByteArray(t.length));
              return Promise.resolve(u.concatUint8Arrays(n, t));
            }
            return Promise.resolve(Uint8Array.from([]));
          }),
          r
        );
      })(y);
      r.Base64Asset = w;
      var A = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            var r = s.default.booleanToBytes(e);
            return Promise.resolve(Uint8Array.from(r));
          }),
          r
        );
      })(y);
      r.Bool = A;
      var v = (function (e) {
        function r(r, t) {
          var n = e.call(this, r) || this;
          return ((n.length = t), n);
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            var r;
            return (
              "number" === typeof e
                ? (r = s.default.longToByteArray(e, this.length))
                : ("string" === typeof e && (e = new o.BigNumber(e)),
                  (r = s.default.bigNumberToByteArray(e, this.length))),
              Promise.resolve(Uint8Array.from(r))
            );
          }),
          r
        );
      })(y);
      r.Int = v;
      var b = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            var r;
            return (
              "number" === typeof e
                ? (r = s.default.longToByteArray(e, 8))
                : ("string" === typeof e && (e = new o.BigNumber(e)),
                  (r = s.default.signBigNumberToByteArray(e))),
              Promise.resolve(Uint8Array.from(r))
            );
          }),
          r
        );
      })(y);
      r.SignLong = b;
      var E = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            if ("number" !== typeof e)
              throw new Error("You should pass a number to Short constructor");
            if (e < 0 || e > 65535)
              throw new Error("Short value must fit between 0 and 65535");
            return Promise.resolve(
              Uint8Array.from(s.default.shortToByteArray(e)),
            );
          }),
          r
        );
      })(y);
      r.Short = E;
      var _ = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            var r = s.default.stringToByteArrayWithSize(e);
            return Promise.resolve(Uint8Array.from(r));
          }),
          r
        );
      })(y);
      r.StringWithLength = _;
      var S = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            var r = p(e),
              t = s.default.bytesToByteArrayWithSize(r);
            return Promise.resolve(Uint8Array.from(t));
          }),
          r
        );
      })(y);
      r.Alias = S;
      var T = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            e = h(e);
            var r = e
              ? u.concatUint8Arrays(Uint8Array.from([1]), a.default.decode(e))
              : Uint8Array.from([0]);
            return Promise.resolve(r);
          }),
          r
        );
      })(y);
      r.AssetId = T;
      var N = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            if (
              ("string" === typeof e &&
                (e = Uint8Array.from(s.default.stringToByteArray(e))),
              e.length > f.TRANSFER_ATTACHMENT_BYTE_LIMIT)
            )
              throw new Error("Maximum attachment length is exceeded");
            var r = s.default.bytesToByteArrayWithSize(e);
            return Promise.resolve(Uint8Array.from(r));
          }),
          r
        );
      })(y);
      r.Attachment = N;
      var I = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            return ((e = h(e)), Promise.resolve(a.default.decode(e)));
          }),
          r
        );
      })(y);
      r.MandatoryAssetId = I;
      var B = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            if ("buy" === e) return A.prototype.process.call(this, !1);
            if ("sell" === e) return A.prototype.process.call(this, !0);
            throw new Error(
              'There are no other order types besides "buy" and "sell"',
            );
          }),
          r
        );
      })(y);
      r.OrderType = B;
      var R = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            if (e.length <= 30) {
              var r = p(e);
              return Promise.resolve(Uint8Array.from(r));
            }
            var t = a.default.decode(e);
            return Promise.resolve(Uint8Array.from(t));
          }),
          r
        );
      })(y);
      r.Recipient = R;
      var k = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            return d(e)
              ? Promise.resolve(Uint8Array.from([c.SET_SCRIPT_LANG_VERSION]))
              : Promise.resolve(Uint8Array.from([0]));
          }),
          r
        );
      })(y);
      r.ScriptVersion = k;
      var P = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            for (
              var r = new R(c.STUB_NAME),
                t = new v(c.STUB_NAME, 8),
                n = [],
                o = 0;
              o < e.length;
              o++
            )
              (n.push(r.process(e[o].recipient)),
                n.push(t.process(e[o].amount)));
            return Promise.all(n).then(function (r) {
              var t = s.default.shortToByteArray(e.length),
                n = Uint8Array.from(t);
              return u.concatUint8Arrays.apply(void 0, [n].concat(r));
            });
          }),
          r
        );
      })(y);
      r.Transfers = P;
      var U = 0,
        O = 1,
        C = 2,
        M = 3,
        x = (function (e) {
          function r() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(r, e),
            (r.prototype.process = function (e) {
              return b.prototype.process.call(this, e).then(function (e) {
                var r = Uint8Array.from([U]);
                return u.concatUint8Arrays(r, e);
              });
            }),
            r
          );
        })(y);
      r.IntegerDataEntry = x;
      var L = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            return A.prototype.process.call(this, e).then(function (e) {
              var r = Uint8Array.from([O]);
              return u.concatUint8Arrays(r, e);
            });
          }),
          r
        );
      })(y);
      r.BooleanDataEntry = L;
      var D = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            return m.prototype.process.call(this, e).then(function (e) {
              var r = Uint8Array.from([C]);
              return Promise.resolve(u.concatUint8Arrays(r, e));
            });
          }),
          r
        );
      })(y);
      r.BinaryDataEntry = D;
      var j = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            return _.prototype.process.call(this, e).then(function (e) {
              var r = Uint8Array.from([M]);
              return u.concatUint8Arrays(r, e);
            });
          }),
          r
        );
      })(y);
      r.StringDataEntry = j;
      var F = (function (e) {
        function r() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(r, e),
          (r.prototype.process = function (e) {
            var r = this,
              t = Uint8Array.from(s.default.shortToByteArray(e.length));
            return e.length
              ? Promise.all(
                  e.map(function (e) {
                    var t = function (t) {
                      return _.prototype.process
                        .call(r, e.key)
                        .then(function (e) {
                          return u.concatUint8Arrays(e, t);
                        });
                    };
                    switch (e.type) {
                      case "integer":
                        return x.prototype.process.call(r, e.value).then(t);
                      case "boolean":
                        return L.prototype.process.call(r, e.value).then(t);
                      case "binary":
                        return D.prototype.process.call(r, e.value).then(t);
                      case "string":
                        return j.prototype.process.call(r, e.value).then(t);
                      default:
                        throw new Error(
                          'There is no data type "' + e.type + '"',
                        );
                    }
                  }),
                ).then(function (e) {
                  var r = u.concatUint8Arrays.apply(void 0, [t].concat(e));
                  if (r.length > c.DATA_ENTRIES_BYTE_LIMIT)
                    throw new Error(
                      "Data transaction is too large (140KB max)",
                    );
                  return r;
                })
              : Promise.resolve(Uint8Array.from([0, 0]));
          }),
          r
        );
      })(y);
      r.DataEntries = F;
    },
    10979: function (e, r, t) {
      var n;
      (function (o) {
        "use strict";
        var i,
          a = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          s = Math.ceil,
          u = Math.floor,
          c = "[BigNumber Error] ",
          l = c + "Number primitive has more than 15 significant digits: ",
          f = 1e14,
          h = 14,
          p = 9007199254740991,
          d = [
            1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
            1e13,
          ],
          y = 1e7,
          g = 1e9;
        function m(e) {
          var r,
            t,
            n,
            o = (L.prototype = {
              constructor: L,
              toString: null,
              valueOf: null,
            }),
            i = new L(1),
            N = 20,
            I = 4,
            B = -7,
            R = 21,
            k = -1e7,
            P = 1e7,
            U = !1,
            O = 1,
            C = 0,
            M = {
              decimalSeparator: ".",
              groupSeparator: ",",
              groupSize: 3,
              secondaryGroupSize: 0,
              fractionGroupSeparator: " ",
              fractionGroupSize: 0,
            },
            x = "0123456789abcdefghijklmnopqrstuvwxyz";
          function L(e, r) {
            var o,
              i,
              s,
              c,
              f,
              d,
              y,
              g = this;
            if (!(g instanceof L)) return new L(e, r);
            if (null == r) {
              if (e instanceof L)
                return (
                  (g.s = e.s),
                  (g.e = e.e),
                  void (g.c = (e = e.c) ? e.slice() : e)
                );
              if (((f = "number" == typeof e), f && 0 * e == 0)) {
                if (((g.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                  for (s = 0, c = e; c >= 10; c /= 10, s++);
                  return ((g.e = s), void (g.c = [e]));
                }
                y = e + "";
              } else {
                if (!a.test((y = e + ""))) return n(g, y, f);
                g.s = 45 == y.charCodeAt(0) ? ((y = y.slice(1)), -1) : 1;
              }
            } else {
              if ((b(r, 2, x.length, "Base"), (y = e + ""), 10 == r))
                return (
                  (g = new L(e instanceof L ? e : y)),
                  V(g, N + g.e + 1, I)
                );
              if (((f = "number" == typeof e), f)) {
                if (0 * e != 0) return n(g, y, f, r);
                if (
                  ((g.s = 1 / e < 0 ? ((y = y.slice(1)), -1) : 1),
                  L.DEBUG && y.replace(/^0\.0*|\./, "").length > 15)
                )
                  throw Error(l + e);
                f = !1;
              } else
                ((g.s = 45 === y.charCodeAt(0) ? ((y = y.slice(1)), -1) : 1),
                  r > 10 && r < 37 && (y = y.toLowerCase()));
              for (o = x.slice(0, r), s = c = 0, d = y.length; c < d; c++)
                if (o.indexOf((i = y.charAt(c))) < 0) {
                  if ("." == i && c > s) {
                    s = d;
                    continue;
                  }
                  return n(g, e + "", f, r);
                }
              y = t(y, r, 10, g.s);
            }
            for (
              (s = y.indexOf(".")) > -1 && (y = y.replace(".", "")),
                (c = y.search(/e/i)) > 0
                  ? (s < 0 && (s = c),
                    (s += +y.slice(c + 1)),
                    (y = y.substring(0, c)))
                  : s < 0 && (s = y.length),
                c = 0;
              48 === y.charCodeAt(c);
              c++
            );
            for (d = y.length; 48 === y.charCodeAt(--d); );
            if (((y = y.slice(c, ++d)), y)) {
              if (((d -= c), f && L.DEBUG && d > 15 && (e > p || e !== u(e))))
                throw Error(l + g.s * e);
              if (((s = s - c - 1), s > P)) g.c = g.e = null;
              else if (s < k) g.c = [(g.e = 0)];
              else {
                if (
                  ((g.e = s),
                  (g.c = []),
                  (c = (s + 1) % h),
                  s < 0 && (c += h),
                  c < d)
                ) {
                  for (c && g.c.push(+y.slice(0, c)), d -= h; c < d; )
                    g.c.push(+y.slice(c, (c += h)));
                  ((y = y.slice(c)), (c = h - y.length));
                } else c -= d;
                for (; c--; y += "0");
                g.c.push(+y);
              }
            } else g.c = [(g.e = 0)];
          }
          function D(e, r, t, n) {
            var o, i, a, s, u;
            if ((null == t ? (t = I) : b(t, 0, 8), !e.c)) return e.toString();
            if (((o = e.c[0]), (a = e.e), null == r))
              ((u = A(e.c)),
                (u = 1 == n || (2 == n && a <= B) ? S(u, a) : T(u, a, "0")));
            else if (
              ((e = V(new L(e), r, t)),
              (i = e.e),
              (u = A(e.c)),
              (s = u.length),
              1 == n || (2 == n && (r <= i || i <= B)))
            ) {
              for (; s < r; u += "0", s++);
              u = S(u, i);
            } else if (((r -= a), (u = T(u, i, "0")), i + 1 > s)) {
              if (--r > 0) for (u += "."; r--; u += "0");
            } else if (((r += i - s), r > 0))
              for (i + 1 == s && (u += "."); r--; u += "0");
            return e.s < 0 && o ? "-" + u : u;
          }
          function j(e, r) {
            var t,
              n,
              o = 0;
            for (E(e[0]) && (e = e[0]), t = new L(e[0]); ++o < e.length; ) {
              if (((n = new L(e[o])), !n.s)) {
                t = n;
                break;
              }
              r.call(t, n) && (t = n);
            }
            return t;
          }
          function F(e, r, t) {
            for (var n = 1, o = r.length; !r[--o]; r.pop());
            for (o = r[0]; o >= 10; o /= 10, n++);
            return (
              (t = n + t * h - 1) > P
                ? (e.c = e.e = null)
                : t < k
                  ? (e.c = [(e.e = 0)])
                  : ((e.e = t), (e.c = r)),
              e
            );
          }
          function V(e, r, t, n) {
            var o,
              i,
              a,
              c,
              l,
              p,
              y,
              g = e.c,
              m = d;
            if (g) {
              e: {
                for (o = 1, c = g[0]; c >= 10; c /= 10, o++);
                if (((i = r - o), i < 0))
                  ((i += h),
                    (a = r),
                    (l = g[(p = 0)]),
                    (y = ((l / m[o - a - 1]) % 10) | 0));
                else if (((p = s((i + 1) / h)), p >= g.length)) {
                  if (!n) break e;
                  for (; g.length <= p; g.push(0));
                  ((l = y = 0), (o = 1), (i %= h), (a = i - h + 1));
                } else {
                  for (l = c = g[p], o = 1; c >= 10; c /= 10, o++);
                  ((i %= h),
                    (a = i - h + o),
                    (y = a < 0 ? 0 : ((l / m[o - a - 1]) % 10) | 0));
                }
                if (
                  ((n =
                    n ||
                    r < 0 ||
                    null != g[p + 1] ||
                    (a < 0 ? l : l % m[o - a - 1])),
                  (n =
                    t < 4
                      ? (y || n) && (0 == t || t == (e.s < 0 ? 3 : 2))
                      : y > 5 ||
                        (5 == y &&
                          (4 == t ||
                            n ||
                            (6 == t &&
                              ((i > 0 ? (a > 0 ? l / m[o - a] : 0) : g[p - 1]) %
                                10) &
                                1) ||
                            t == (e.s < 0 ? 8 : 7)))),
                  r < 1 || !g[0])
                )
                  return (
                    (g.length = 0),
                    n
                      ? ((r -= e.e + 1),
                        (g[0] = m[(h - (r % h)) % h]),
                        (e.e = -r || 0))
                      : (g[0] = e.e = 0),
                    e
                  );
                if (
                  (0 == i
                    ? ((g.length = p), (c = 1), p--)
                    : ((g.length = p + 1),
                      (c = m[h - i]),
                      (g[p] = a > 0 ? u((l / m[o - a]) % m[a]) * c : 0)),
                  n)
                )
                  for (;;) {
                    if (0 == p) {
                      for (i = 1, a = g[0]; a >= 10; a /= 10, i++);
                      for (a = g[0] += c, c = 1; a >= 10; a /= 10, c++);
                      i != c && (e.e++, g[0] == f && (g[0] = 1));
                      break;
                    }
                    if (((g[p] += c), g[p] != f)) break;
                    ((g[p--] = 0), (c = 1));
                  }
                for (i = g.length; 0 === g[--i]; g.pop());
              }
              e.e > P ? (e.c = e.e = null) : e.e < k && (e.c = [(e.e = 0)]);
            }
            return e;
          }
          return (
            (L.clone = m),
            (L.ROUND_UP = 0),
            (L.ROUND_DOWN = 1),
            (L.ROUND_CEIL = 2),
            (L.ROUND_FLOOR = 3),
            (L.ROUND_HALF_UP = 4),
            (L.ROUND_HALF_DOWN = 5),
            (L.ROUND_HALF_EVEN = 6),
            (L.ROUND_HALF_CEIL = 7),
            (L.ROUND_HALF_FLOOR = 8),
            (L.EUCLID = 9),
            (L.config = L.set =
              function (e) {
                var r, t;
                if (null != e) {
                  if ("object" != typeof e)
                    throw Error(c + "Object expected: " + e);
                  if (
                    (e.hasOwnProperty((r = "DECIMAL_PLACES")) &&
                      ((t = e[r]), b(t, 0, g, r), (N = t)),
                    e.hasOwnProperty((r = "ROUNDING_MODE")) &&
                      ((t = e[r]), b(t, 0, 8, r), (I = t)),
                    e.hasOwnProperty((r = "EXPONENTIAL_AT")) &&
                      ((t = e[r]),
                      E(t)
                        ? (b(t[0], -g, 0, r),
                          b(t[1], 0, g, r),
                          (B = t[0]),
                          (R = t[1]))
                        : (b(t, -g, g, r), (B = -(R = t < 0 ? -t : t)))),
                    e.hasOwnProperty((r = "RANGE")))
                  )
                    if (((t = e[r]), E(t)))
                      (b(t[0], -g, -1, r),
                        b(t[1], 1, g, r),
                        (k = t[0]),
                        (P = t[1]));
                    else {
                      if ((b(t, -g, g, r), !t))
                        throw Error(c + r + " cannot be zero: " + t);
                      k = -(P = t < 0 ? -t : t);
                    }
                  if (e.hasOwnProperty((r = "CRYPTO"))) {
                    if (((t = e[r]), t !== !!t))
                      throw Error(c + r + " not true or false: " + t);
                    if (t) {
                      if (
                        "undefined" == typeof crypto ||
                        !crypto ||
                        (!crypto.getRandomValues && !crypto.randomBytes)
                      )
                        throw ((U = !t), Error(c + "crypto unavailable"));
                      U = t;
                    } else U = t;
                  }
                  if (
                    (e.hasOwnProperty((r = "MODULO_MODE")) &&
                      ((t = e[r]), b(t, 0, 9, r), (O = t)),
                    e.hasOwnProperty((r = "POW_PRECISION")) &&
                      ((t = e[r]), b(t, 0, g, r), (C = t)),
                    e.hasOwnProperty((r = "FORMAT")))
                  ) {
                    if (((t = e[r]), "object" != typeof t))
                      throw Error(c + r + " not an object: " + t);
                    M = t;
                  }
                  if (e.hasOwnProperty((r = "ALPHABET"))) {
                    if (
                      ((t = e[r]),
                      "string" != typeof t || /^.$|\.|(.).*\1/.test(t))
                    )
                      throw Error(c + r + " invalid: " + t);
                    x = t;
                  }
                }
                return {
                  DECIMAL_PLACES: N,
                  ROUNDING_MODE: I,
                  EXPONENTIAL_AT: [B, R],
                  RANGE: [k, P],
                  CRYPTO: U,
                  MODULO_MODE: O,
                  POW_PRECISION: C,
                  FORMAT: M,
                  ALPHABET: x,
                };
              }),
            (L.isBigNumber = function (e) {
              return e instanceof L || (e && !0 === e._isBigNumber) || !1;
            }),
            (L.maximum = L.max =
              function () {
                return j(arguments, o.lt);
              }),
            (L.minimum = L.min =
              function () {
                return j(arguments, o.gt);
              }),
            (L.random = (function () {
              var e = 9007199254740992,
                r =
                  (Math.random() * e) & 2097151
                    ? function () {
                        return u(Math.random() * e);
                      }
                    : function () {
                        return (
                          8388608 * ((1073741824 * Math.random()) | 0) +
                          ((8388608 * Math.random()) | 0)
                        );
                      };
              return function (e) {
                var t,
                  n,
                  o,
                  a,
                  l,
                  f = 0,
                  p = [],
                  y = new L(i);
                if ((null == e ? (e = N) : b(e, 0, g), (a = s(e / h)), U))
                  if (crypto.getRandomValues) {
                    for (
                      t = crypto.getRandomValues(new Uint32Array((a *= 2)));
                      f < a;
                    )
                      ((l = 131072 * t[f] + (t[f + 1] >>> 11)),
                        l >= 9e15
                          ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                            (t[f] = n[0]),
                            (t[f + 1] = n[1]))
                          : (p.push(l % 1e14), (f += 2)));
                    f = a / 2;
                  } else {
                    if (!crypto.randomBytes)
                      throw ((U = !1), Error(c + "crypto unavailable"));
                    for (t = crypto.randomBytes((a *= 7)); f < a; )
                      ((l =
                        281474976710656 * (31 & t[f]) +
                        1099511627776 * t[f + 1] +
                        4294967296 * t[f + 2] +
                        16777216 * t[f + 3] +
                        (t[f + 4] << 16) +
                        (t[f + 5] << 8) +
                        t[f + 6]),
                        l >= 9e15
                          ? crypto.randomBytes(7).copy(t, f)
                          : (p.push(l % 1e14), (f += 7)));
                    f = a / 7;
                  }
                if (!U)
                  for (; f < a; ) ((l = r()), l < 9e15 && (p[f++] = l % 1e14));
                for (
                  a = p[--f],
                    e %= h,
                    a && e && ((l = d[h - e]), (p[f] = u(a / l) * l));
                  0 === p[f];
                  p.pop(), f--
                );
                if (f < 0) p = [(o = 0)];
                else {
                  for (o = -1; 0 === p[0]; p.splice(0, 1), o -= h);
                  for (f = 1, l = p[0]; l >= 10; l /= 10, f++);
                  f < h && (o -= h - f);
                }
                return ((y.e = o), (y.c = p), y);
              };
            })()),
            (t = (function () {
              var e = "0123456789";
              function t(e, r, t, n) {
                for (var o, i, a = [0], s = 0, u = e.length; s < u; ) {
                  for (i = a.length; i--; a[i] *= r);
                  for (
                    a[0] += n.indexOf(e.charAt(s++)), o = 0;
                    o < a.length;
                    o++
                  )
                    a[o] > t - 1 &&
                      (null == a[o + 1] && (a[o + 1] = 0),
                      (a[o + 1] += (a[o] / t) | 0),
                      (a[o] %= t));
                }
                return a.reverse();
              }
              return function (n, o, i, a, s) {
                var u,
                  c,
                  l,
                  f,
                  h,
                  p,
                  d,
                  y,
                  g = n.indexOf("."),
                  m = N,
                  w = I;
                for (
                  g >= 0 &&
                    ((f = C),
                    (C = 0),
                    (n = n.replace(".", "")),
                    (y = new L(o)),
                    (p = y.pow(n.length - g)),
                    (C = f),
                    (y.c = t(T(A(p.c), p.e, "0"), 10, i, e)),
                    (y.e = y.c.length)),
                    d = t(n, o, i, s ? ((u = x), e) : ((u = e), x)),
                    l = f = d.length;
                  0 == d[--f];
                  d.pop()
                );
                if (!d[0]) return u.charAt(0);
                if (
                  (g < 0
                    ? --l
                    : ((p.c = d),
                      (p.e = l),
                      (p.s = a),
                      (p = r(p, y, m, w, i)),
                      (d = p.c),
                      (h = p.r),
                      (l = p.e)),
                  (c = l + m + 1),
                  (g = d[c]),
                  (f = i / 2),
                  (h = h || c < 0 || null != d[c + 1]),
                  (h =
                    w < 4
                      ? (null != g || h) && (0 == w || w == (p.s < 0 ? 3 : 2))
                      : g > f ||
                        (g == f &&
                          (4 == w ||
                            h ||
                            (6 == w && 1 & d[c - 1]) ||
                            w == (p.s < 0 ? 8 : 7)))),
                  c < 1 || !d[0])
                )
                  n = h ? T(u.charAt(1), -m, u.charAt(0)) : u.charAt(0);
                else {
                  if (((d.length = c), h))
                    for (--i; ++d[--c] > i; )
                      ((d[c] = 0), c || (++l, (d = [1].concat(d))));
                  for (f = d.length; !d[--f]; );
                  for (g = 0, n = ""; g <= f; n += u.charAt(d[g++]));
                  n = T(n, l, u.charAt(0));
                }
                return n;
              };
            })()),
            (r = (function () {
              function e(e, r, t) {
                var n,
                  o,
                  i,
                  a,
                  s = 0,
                  u = e.length,
                  c = r % y,
                  l = (r / y) | 0;
                for (e = e.slice(); u--; )
                  ((i = e[u] % y),
                    (a = (e[u] / y) | 0),
                    (n = l * i + a * c),
                    (o = c * i + (n % y) * y + s),
                    (s = ((o / t) | 0) + ((n / y) | 0) + l * a),
                    (e[u] = o % t));
                return (s && (e = [s].concat(e)), e);
              }
              function r(e, r, t, n) {
                var o, i;
                if (t != n) i = t > n ? 1 : -1;
                else
                  for (o = i = 0; o < t; o++)
                    if (e[o] != r[o]) {
                      i = e[o] > r[o] ? 1 : -1;
                      break;
                    }
                return i;
              }
              function t(e, r, t, n) {
                for (var o = 0; t--; )
                  ((e[t] -= o),
                    (o = e[t] < r[t] ? 1 : 0),
                    (e[t] = o * n + e[t] - r[t]));
                for (; !e[0] && e.length > 1; e.splice(0, 1));
              }
              return function (n, o, i, a, s) {
                var c,
                  l,
                  p,
                  d,
                  y,
                  g,
                  m,
                  A,
                  v,
                  b,
                  E,
                  _,
                  S,
                  T,
                  N,
                  I,
                  B,
                  R = n.s == o.s ? 1 : -1,
                  k = n.c,
                  P = o.c;
                if (!k || !k[0] || !P || !P[0])
                  return new L(
                    n.s && o.s && (k ? !P || k[0] != P[0] : P)
                      ? (k && 0 == k[0]) || !P
                        ? 0 * R
                        : R / 0
                      : NaN,
                  );
                for (
                  A = new L(R),
                    v = A.c = [],
                    l = n.e - o.e,
                    R = i + l + 1,
                    s ||
                      ((s = f),
                      (l = w(n.e / h) - w(o.e / h)),
                      (R = (R / h) | 0)),
                    p = 0;
                  P[p] == (k[p] || 0);
                  p++
                );
                if ((P[p] > (k[p] || 0) && l--, R < 0)) (v.push(1), (d = !0));
                else {
                  for (
                    T = k.length,
                      I = P.length,
                      p = 0,
                      R += 2,
                      y = u(s / (P[0] + 1)),
                      y > 1 &&
                        ((P = e(P, y, s)),
                        (k = e(k, y, s)),
                        (I = P.length),
                        (T = k.length)),
                      S = I,
                      b = k.slice(0, I),
                      E = b.length;
                    E < I;
                    b[E++] = 0
                  );
                  ((B = P.slice()),
                    (B = [0].concat(B)),
                    (N = P[0]),
                    P[1] >= s / 2 && N++);
                  do {
                    if (((y = 0), (c = r(P, b, I, E)), c < 0)) {
                      if (
                        ((_ = b[0]),
                        I != E && (_ = _ * s + (b[1] || 0)),
                        (y = u(_ / N)),
                        y > 1)
                      ) {
                        (y >= s && (y = s - 1),
                          (g = e(P, y, s)),
                          (m = g.length),
                          (E = b.length));
                        while (1 == r(g, b, m, E))
                          (y--,
                            t(g, I < m ? B : P, m, s),
                            (m = g.length),
                            (c = 1));
                      } else
                        (0 == y && (c = y = 1),
                          (g = P.slice()),
                          (m = g.length));
                      if (
                        (m < E && (g = [0].concat(g)),
                        t(b, g, E, s),
                        (E = b.length),
                        -1 == c)
                      )
                        while (r(P, b, I, E) < 1)
                          (y++, t(b, I < E ? B : P, E, s), (E = b.length));
                    } else 0 === c && (y++, (b = [0]));
                    ((v[p++] = y),
                      b[0] ? (b[E++] = k[S] || 0) : ((b = [k[S]]), (E = 1)));
                  } while ((S++ < T || null != b[0]) && R--);
                  ((d = null != b[0]), v[0] || v.splice(0, 1));
                }
                if (s == f) {
                  for (p = 1, R = v[0]; R >= 10; R /= 10, p++);
                  V(A, i + (A.e = p + l * h - 1) + 1, a, d);
                } else ((A.e = l), (A.r = +d));
                return A;
              };
            })()),
            (n = (function () {
              var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                r = /^([^.]+)\.$/,
                t = /^\.([^.]+)$/,
                n = /^-?(Infinity|NaN)$/,
                o = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
              return function (i, a, s, u) {
                var l,
                  f = s ? a : a.replace(o, "");
                if (n.test(f))
                  ((i.s = isNaN(f) ? null : f < 0 ? -1 : 1),
                    (i.c = i.e = null));
                else {
                  if (
                    !s &&
                    ((f = f.replace(e, function (e, r, t) {
                      return (
                        (l =
                          "x" == (t = t.toLowerCase()) ? 16 : "b" == t ? 2 : 8),
                        u && u != l ? e : r
                      );
                    })),
                    u && ((l = u), (f = f.replace(r, "$1").replace(t, "0.$1"))),
                    a != f)
                  )
                    return new L(f, l);
                  if (L.DEBUG)
                    throw Error(
                      c + "Not a" + (u ? " base " + u : "") + " number: " + a,
                    );
                  i.c = i.e = i.s = null;
                }
              };
            })()),
            (o.absoluteValue = o.abs =
              function () {
                var e = new L(this);
                return (e.s < 0 && (e.s = 1), e);
              }),
            (o.comparedTo = function (e, r) {
              return v(this, new L(e, r));
            }),
            (o.decimalPlaces = o.dp =
              function (e, r) {
                var t,
                  n,
                  o,
                  i = this;
                if (null != e)
                  return (
                    b(e, 0, g),
                    null == r ? (r = I) : b(r, 0, 8),
                    V(new L(i), e + i.e + 1, r)
                  );
                if (!(t = i.c)) return null;
                if (
                  ((n = ((o = t.length - 1) - w(this.e / h)) * h), (o = t[o]))
                )
                  for (; o % 10 == 0; o /= 10, n--);
                return (n < 0 && (n = 0), n);
              }),
            (o.dividedBy = o.div =
              function (e, t) {
                return r(this, new L(e, t), N, I);
              }),
            (o.dividedToIntegerBy = o.idiv =
              function (e, t) {
                return r(this, new L(e, t), 0, 1);
              }),
            (o.exponentiatedBy = o.pow =
              function (e, r) {
                var t,
                  n,
                  o,
                  a,
                  l,
                  f,
                  p,
                  d,
                  y = this;
                if (((e = new L(e)), e.c && !e.isInteger()))
                  throw Error(c + "Exponent not an integer: " + e);
                if (
                  (null != r && (r = new L(r)),
                  (l = e.e > 14),
                  !y.c ||
                    !y.c[0] ||
                    (1 == y.c[0] && !y.e && 1 == y.c.length) ||
                    !e.c ||
                    !e.c[0])
                )
                  return (
                    (d = new L(Math.pow(+y.valueOf(), l ? 2 - _(e) : +e))),
                    r ? d.mod(r) : d
                  );
                if (((f = e.s < 0), r)) {
                  if (r.c ? !r.c[0] : !r.s) return new L(NaN);
                  ((n = !f && y.isInteger() && r.isInteger()),
                    n && (y = y.mod(r)));
                } else {
                  if (
                    e.e > 9 &&
                    (y.e > 0 ||
                      y.e < -1 ||
                      (0 == y.e
                        ? y.c[0] > 1 || (l && y.c[1] >= 24e7)
                        : y.c[0] < 8e13 || (l && y.c[0] <= 9999975e7)))
                  )
                    return (
                      (o = y.s < 0 && _(e) ? -0 : 0),
                      y.e > -1 && (o = 1 / o),
                      new L(f ? 1 / o : o)
                    );
                  C && (o = s(C / h + 2));
                }
                for (
                  l ? ((t = new L(0.5)), (p = _(e))) : (p = e % 2),
                    f && (e.s = 1),
                    d = new L(i);
                  ;
                ) {
                  if (p) {
                    if (((d = d.times(y)), !d.c)) break;
                    o
                      ? d.c.length > o && (d.c.length = o)
                      : n && (d = d.mod(r));
                  }
                  if (l) {
                    if (((e = e.times(t)), V(e, e.e + 1, 1), !e.c[0])) break;
                    ((l = e.e > 14), (p = _(e)));
                  } else {
                    if (((e = u(e / 2)), !e)) break;
                    p = e % 2;
                  }
                  ((y = y.times(y)),
                    o
                      ? y.c && y.c.length > o && (y.c.length = o)
                      : n && (y = y.mod(r)));
                }
                return n
                  ? d
                  : (f && (d = i.div(d)), r ? d.mod(r) : o ? V(d, C, I, a) : d);
              }),
            (o.integerValue = function (e) {
              var r = new L(this);
              return (null == e ? (e = I) : b(e, 0, 8), V(r, r.e + 1, e));
            }),
            (o.isEqualTo = o.eq =
              function (e, r) {
                return 0 === v(this, new L(e, r));
              }),
            (o.isFinite = function () {
              return !!this.c;
            }),
            (o.isGreaterThan = o.gt =
              function (e, r) {
                return v(this, new L(e, r)) > 0;
              }),
            (o.isGreaterThanOrEqualTo = o.gte =
              function (e, r) {
                return 1 === (r = v(this, new L(e, r))) || 0 === r;
              }),
            (o.isInteger = function () {
              return !!this.c && w(this.e / h) > this.c.length - 2;
            }),
            (o.isLessThan = o.lt =
              function (e, r) {
                return v(this, new L(e, r)) < 0;
              }),
            (o.isLessThanOrEqualTo = o.lte =
              function (e, r) {
                return -1 === (r = v(this, new L(e, r))) || 0 === r;
              }),
            (o.isNaN = function () {
              return !this.s;
            }),
            (o.isNegative = function () {
              return this.s < 0;
            }),
            (o.isPositive = function () {
              return this.s > 0;
            }),
            (o.isZero = function () {
              return !!this.c && 0 == this.c[0];
            }),
            (o.minus = function (e, r) {
              var t,
                n,
                o,
                i,
                a = this,
                s = a.s;
              if (((e = new L(e, r)), (r = e.s), !s || !r)) return new L(NaN);
              if (s != r) return ((e.s = -r), a.plus(e));
              var u = a.e / h,
                c = e.e / h,
                l = a.c,
                p = e.c;
              if (!u || !c) {
                if (!l || !p) return l ? ((e.s = -r), e) : new L(p ? a : NaN);
                if (!l[0] || !p[0])
                  return p[0]
                    ? ((e.s = -r), e)
                    : new L(l[0] ? a : 3 == I ? -0 : 0);
              }
              if (((u = w(u)), (c = w(c)), (l = l.slice()), (s = u - c))) {
                for (
                  (i = s < 0) ? ((s = -s), (o = l)) : ((c = u), (o = p)),
                    o.reverse(),
                    r = s;
                  r--;
                  o.push(0)
                );
                o.reverse();
              } else
                for (
                  n = (i = (s = l.length) < (r = p.length)) ? s : r, s = r = 0;
                  r < n;
                  r++
                )
                  if (l[r] != p[r]) {
                    i = l[r] < p[r];
                    break;
                  }
              if (
                (i && ((o = l), (l = p), (p = o), (e.s = -e.s)),
                (r = (n = p.length) - (t = l.length)),
                r > 0)
              )
                for (; r--; l[t++] = 0);
              for (r = f - 1; n > s; ) {
                if (l[--n] < p[n]) {
                  for (t = n; t && !l[--t]; l[t] = r);
                  (--l[t], (l[n] += f));
                }
                l[n] -= p[n];
              }
              for (; 0 == l[0]; l.splice(0, 1), --c);
              return l[0]
                ? F(e, l, c)
                : ((e.s = 3 == I ? -1 : 1), (e.c = [(e.e = 0)]), e);
            }),
            (o.modulo = o.mod =
              function (e, t) {
                var n,
                  o,
                  i = this;
                return (
                  (e = new L(e, t)),
                  !i.c || !e.s || (e.c && !e.c[0])
                    ? new L(NaN)
                    : !e.c || (i.c && !i.c[0])
                      ? new L(i)
                      : (9 == O
                          ? ((o = e.s),
                            (e.s = 1),
                            (n = r(i, e, 0, 3)),
                            (e.s = o),
                            (n.s *= o))
                          : (n = r(i, e, 0, O)),
                        (e = i.minus(n.times(e))),
                        e.c[0] || 1 != O || (e.s = i.s),
                        e)
                );
              }),
            (o.multipliedBy = o.times =
              function (e, r) {
                var t,
                  n,
                  o,
                  i,
                  a,
                  s,
                  u,
                  c,
                  l,
                  p,
                  d,
                  g,
                  m,
                  A,
                  v,
                  b = this,
                  E = b.c,
                  _ = (e = new L(e, r)).c;
                if (!E || !_ || !E[0] || !_[0])
                  return (
                    !b.s || !e.s || (E && !E[0] && !_) || (_ && !_[0] && !E)
                      ? (e.c = e.e = e.s = null)
                      : ((e.s *= b.s),
                        E && _ ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null)),
                    e
                  );
                for (
                  n = w(b.e / h) + w(e.e / h),
                    e.s *= b.s,
                    u = E.length,
                    p = _.length,
                    u < p &&
                      ((m = E), (E = _), (_ = m), (o = u), (u = p), (p = o)),
                    o = u + p,
                    m = [];
                  o--;
                  m.push(0)
                );
                for (A = f, v = y, o = p; --o >= 0; ) {
                  for (
                    t = 0, d = _[o] % v, g = (_[o] / v) | 0, a = u, i = o + a;
                    i > o;
                  )
                    ((c = E[--a] % v),
                      (l = (E[a] / v) | 0),
                      (s = g * c + l * d),
                      (c = d * c + (s % v) * v + m[i] + t),
                      (t = ((c / A) | 0) + ((s / v) | 0) + g * l),
                      (m[i--] = c % A));
                  m[i] = t;
                }
                return (t ? ++n : m.splice(0, 1), F(e, m, n));
              }),
            (o.negated = function () {
              var e = new L(this);
              return ((e.s = -e.s || null), e);
            }),
            (o.plus = function (e, r) {
              var t,
                n = this,
                o = n.s;
              if (((e = new L(e, r)), (r = e.s), !o || !r)) return new L(NaN);
              if (o != r) return ((e.s = -r), n.minus(e));
              var i = n.e / h,
                a = e.e / h,
                s = n.c,
                u = e.c;
              if (!i || !a) {
                if (!s || !u) return new L(o / 0);
                if (!s[0] || !u[0]) return u[0] ? e : new L(s[0] ? n : 0 * o);
              }
              if (((i = w(i)), (a = w(a)), (s = s.slice()), (o = i - a))) {
                for (
                  o > 0 ? ((a = i), (t = u)) : ((o = -o), (t = s)), t.reverse();
                  o--;
                  t.push(0)
                );
                t.reverse();
              }
              for (
                o = s.length,
                  r = u.length,
                  o - r < 0 && ((t = u), (u = s), (s = t), (r = o)),
                  o = 0;
                r;
              )
                ((o = ((s[--r] = s[r] + u[r] + o) / f) | 0),
                  (s[r] = f === s[r] ? 0 : s[r] % f));
              return (o && ((s = [o].concat(s)), ++a), F(e, s, a));
            }),
            (o.precision = o.sd =
              function (e, r) {
                var t,
                  n,
                  o,
                  i = this;
                if (null != e && e !== !!e)
                  return (
                    b(e, 1, g),
                    null == r ? (r = I) : b(r, 0, 8),
                    V(new L(i), e, r)
                  );
                if (!(t = i.c)) return null;
                if (((o = t.length - 1), (n = o * h + 1), (o = t[o]))) {
                  for (; o % 10 == 0; o /= 10, n--);
                  for (o = t[0]; o >= 10; o /= 10, n++);
                }
                return (e && i.e + 1 > n && (n = i.e + 1), n);
              }),
            (o.shiftedBy = function (e) {
              return (b(e, -p, p), this.times("1e" + e));
            }),
            (o.squareRoot = o.sqrt =
              function () {
                var e,
                  t,
                  n,
                  o,
                  i,
                  a = this,
                  s = a.c,
                  u = a.s,
                  c = a.e,
                  l = N + 4,
                  f = new L("0.5");
                if (1 !== u || !s || !s[0])
                  return new L(
                    !u || (u < 0 && (!s || s[0])) ? NaN : s ? a : 1 / 0,
                  );
                if (
                  ((u = Math.sqrt(+a)),
                  0 == u || u == 1 / 0
                    ? ((t = A(s)),
                      (t.length + c) % 2 == 0 && (t += "0"),
                      (u = Math.sqrt(t)),
                      (c = w((c + 1) / 2) - (c < 0 || c % 2)),
                      u == 1 / 0
                        ? (t = "1e" + c)
                        : ((t = u.toExponential()),
                          (t = t.slice(0, t.indexOf("e") + 1) + c)),
                      (n = new L(t)))
                    : (n = new L(u + "")),
                  n.c[0])
                )
                  for (c = n.e, u = c + l, u < 3 && (u = 0); ; )
                    if (
                      ((i = n),
                      (n = f.times(i.plus(r(a, i, l, 1)))),
                      A(i.c).slice(0, u) === (t = A(n.c)).slice(0, u))
                    ) {
                      if (
                        (n.e < c && --u,
                        (t = t.slice(u - 3, u + 1)),
                        "9999" != t && (o || "4999" != t))
                      ) {
                        (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                          (V(n, n.e + N + 2, 1), (e = !n.times(n).eq(a)));
                        break;
                      }
                      if (!o && (V(i, i.e + N + 2, 0), i.times(i).eq(a))) {
                        n = i;
                        break;
                      }
                      ((l += 4), (u += 4), (o = 1));
                    }
                return V(n, n.e + N + 1, I, e);
              }),
            (o.toExponential = function (e, r) {
              return (null != e && (b(e, 0, g), e++), D(this, e, r, 1));
            }),
            (o.toFixed = function (e, r) {
              return (
                null != e && (b(e, 0, g), (e = e + this.e + 1)),
                D(this, e, r)
              );
            }),
            (o.toFormat = function (e, r) {
              var t = this.toFixed(e, r);
              if (this.c) {
                var n,
                  o = t.split("."),
                  i = +M.groupSize,
                  a = +M.secondaryGroupSize,
                  s = M.groupSeparator,
                  u = o[0],
                  c = o[1],
                  l = this.s < 0,
                  f = l ? u.slice(1) : u,
                  h = f.length;
                if (
                  (a && ((n = i), (i = a), (a = n), (h -= n)), i > 0 && h > 0)
                ) {
                  for (n = h % i || i, u = f.substr(0, n); n < h; n += i)
                    u += s + f.substr(n, i);
                  (a > 0 && (u += s + f.slice(n)), l && (u = "-" + u));
                }
                t = c
                  ? u +
                    M.decimalSeparator +
                    ((a = +M.fractionGroupSize)
                      ? c.replace(
                          new RegExp("\\d{" + a + "}\\B", "g"),
                          "$&" + M.fractionGroupSeparator,
                        )
                      : c)
                  : u;
              }
              return t;
            }),
            (o.toFraction = function (e) {
              var t,
                n,
                o,
                a,
                s,
                u,
                l,
                f,
                p,
                y,
                g,
                m,
                w = this,
                v = w.c;
              if (
                null != e &&
                ((f = new L(e)),
                (!f.isInteger() && (f.c || 1 !== f.s)) || f.lt(i))
              )
                throw Error(
                  c +
                    "Argument " +
                    (f.isInteger() ? "out of range: " : "not an integer: ") +
                    e,
                );
              if (!v) return w.toString();
              for (
                n = new L(i),
                  y = o = new L(i),
                  a = p = new L(i),
                  m = A(v),
                  u = n.e = m.length - w.e - 1,
                  n.c[0] = d[(l = u % h) < 0 ? h + l : l],
                  e = !e || f.comparedTo(n) > 0 ? (u > 0 ? n : y) : f,
                  l = P,
                  P = 1 / 0,
                  f = new L(m),
                  p.c[0] = 0;
                ;
              ) {
                if (
                  ((g = r(f, n, 0, 1)),
                  (s = o.plus(g.times(a))),
                  1 == s.comparedTo(e))
                )
                  break;
                ((o = a),
                  (a = s),
                  (y = p.plus(g.times((s = y)))),
                  (p = s),
                  (n = f.minus(g.times((s = n)))),
                  (f = s));
              }
              return (
                (s = r(e.minus(o), a, 0, 1)),
                (p = p.plus(s.times(y))),
                (o = o.plus(s.times(a))),
                (p.s = y.s = w.s),
                (u *= 2),
                (t =
                  r(y, a, u, I)
                    .minus(w)
                    .abs()
                    .comparedTo(r(p, o, u, I).minus(w).abs()) < 1
                    ? [y.toString(), a.toString()]
                    : [p.toString(), o.toString()]),
                (P = l),
                t
              );
            }),
            (o.toNumber = function () {
              return +this;
            }),
            (o.toPrecision = function (e, r) {
              return (null != e && b(e, 1, g), D(this, e, r, 2));
            }),
            (o.toString = function (e) {
              var r,
                n = this,
                o = n.s,
                i = n.e;
              return (
                null === i
                  ? o
                    ? ((r = "Infinity"), o < 0 && (r = "-" + r))
                    : (r = "NaN")
                  : ((r = A(n.c)),
                    null == e
                      ? (r = i <= B || i >= R ? S(r, i) : T(r, i, "0"))
                      : (b(e, 2, x.length, "Base"),
                        (r = t(T(r, i, "0"), 10, e, o, !0))),
                    o < 0 && n.c[0] && (r = "-" + r)),
                r
              );
            }),
            (o.valueOf = o.toJSON =
              function () {
                var e,
                  r = this,
                  t = r.e;
                return null === t
                  ? r.toString()
                  : ((e = A(r.c)),
                    (e = t <= B || t >= R ? S(e, t) : T(e, t, "0")),
                    r.s < 0 ? "-" + e : e);
              }),
            (o._isBigNumber = !0),
            null != e && L.set(e),
            L
          );
        }
        function w(e) {
          var r = 0 | e;
          return e > 0 || e === r ? r : r - 1;
        }
        function A(e) {
          for (var r, t, n = 1, o = e.length, i = e[0] + ""; n < o; ) {
            for (r = e[n++] + "", t = h - r.length; t--; r = "0" + r);
            i += r;
          }
          for (o = i.length; 48 === i.charCodeAt(--o); );
          return i.slice(0, o + 1 || 1);
        }
        function v(e, r) {
          var t,
            n,
            o = e.c,
            i = r.c,
            a = e.s,
            s = r.s,
            u = e.e,
            c = r.e;
          if (!a || !s) return null;
          if (((t = o && !o[0]), (n = i && !i[0]), t || n))
            return t ? (n ? 0 : -s) : a;
          if (a != s) return a;
          if (((t = a < 0), (n = u == c), !o || !i))
            return n ? 0 : !o ^ t ? 1 : -1;
          if (!n) return (u > c) ^ t ? 1 : -1;
          for (s = (u = o.length) < (c = i.length) ? u : c, a = 0; a < s; a++)
            if (o[a] != i[a]) return (o[a] > i[a]) ^ t ? 1 : -1;
          return u == c ? 0 : (u > c) ^ t ? 1 : -1;
        }
        function b(e, r, t, n) {
          if (e < r || e > t || e !== (e < 0 ? s(e) : u(e)))
            throw Error(
              c +
                (n || "Argument") +
                ("number" == typeof e
                  ? e < r || e > t
                    ? " out of range: "
                    : " not an integer: "
                  : " not a primitive number: ") +
                e,
            );
        }
        function E(e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        }
        function _(e) {
          var r = e.c.length - 1;
          return w(e.e / h) == r && e.c[r] % 2 != 0;
        }
        function S(e, r) {
          return (
            (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
            (r < 0 ? "e" : "e+") +
            r
          );
        }
        function T(e, r, t) {
          var n, o;
          if (r < 0) {
            for (o = t + "."; ++r; o += t);
            e = o + e;
          } else if (((n = e.length), ++r > n)) {
            for (o = t, r -= n; --r; o += t);
            e += o;
          } else r < n && (e = e.slice(0, r) + "." + e.slice(r));
          return e;
        }
        ((i = m()),
          (i["default"] = i.BigNumber = i),
          (n = function () {
            return i;
          }.call(r, t, r, e)),
          void 0 === n || (e.exports = n));
      })();
    },
    10980: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(5652),
        o = t(4845),
        i = (function () {
          function e(e) {
            ((e = n.config.get("remapAsset")(e)),
              (this.quantity = o.toBigNumber(e.quantity)),
              (this.minSponsoredFee = o.toBigNumber(e.minSponsoredFee)),
              (this.ticker = e.ticker || null),
              (this.id = e.id),
              (this.name = e.name),
              (this.precision = e.precision),
              (this.description = e.description),
              (this.height = e.height),
              (this.timestamp = e.timestamp),
              (this.sender = e.sender),
              (this.reissuable = e.reissuable),
              (this.hasScript = e.hasScript || !1),
              (this.displayName = e.ticker || e.name));
          }
          return (
            (e.prototype.toJSON = function () {
              return {
                ticker: this.ticker,
                id: this.id,
                name: this.name,
                precision: this.precision,
                description: this.description,
                height: this.height,
                timestamp: this.timestamp,
                sender: this.sender,
                quantity: this.quantity,
                reissuable: this.reissuable,
                hasScript: this.hasScript,
                minSponsoredFee: this.minSponsoredFee,
              };
            }),
            (e.prototype.toString = function () {
              return this.id;
            }),
            (e.isAsset = function (r) {
              return r instanceof e;
            }),
            e
          );
        })();
      r.Asset = i;
    },
    10981: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(5652),
        o = t(4845),
        i = (function () {
          function e(e) {
            var r = this;
            e = n.config.get("remapCandle")(e);
            var t = [
              "open",
              "close",
              "high",
              "low",
              "volume",
              "quoteVolume",
              "weightedAveragePrice",
            ];
            (t.forEach(function (t) {
              return (r[t] = o.toBigNumber(e[t]));
            }),
              (this.time = e.time),
              (this.maxHeight = e.maxHeight),
              (this.txsCount = e.txsCount));
          }
          return (
            (e.prototype.toJSON = function () {
              return {
                time: this.time,
                open: this.open,
                close: this.close,
                high: this.high,
                low: this.low,
                volume: this.volume,
                quoteVolume: this.quoteVolume,
                weightedAveragePrice: this.weightedAveragePrice,
                maxHeight: this.maxHeight,
                txsCount: this.txsCount,
              };
            }),
            (e.prototype.toString = function () {
              return "[object Candle]";
            }),
            (e.isCandle = function (r) {
              return r instanceof e;
            }),
            e
          );
        })();
      r.Candle = i;
    },
    10982: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(4844),
        o = t(4845),
        i = (function () {
          function e(r, t) {
            var n = e._getDivider(t.precision);
            ((this.asset = t),
              (this._coins = o.toBigNumber(r).dp(0)),
              (this._tokens = this._coins.div(n)));
          }
          return (
            (e.prototype.getCoins = function () {
              return this._coins.plus(0);
            }),
            (e.prototype.getTokens = function () {
              return this._tokens.plus(0);
            }),
            (e.prototype.toCoins = function () {
              return this._coins.toFixed(0);
            }),
            (e.prototype.toTokens = function () {
              return this._tokens.toFixed(this.asset.precision);
            }),
            (e.prototype.toFormat = function (e) {
              return this._tokens.toFormat(e);
            }),
            (e.prototype.add = function (r) {
              this._matchAssets(r);
              var t = r.getCoins(),
                n = this._coins.plus(t);
              return new e(n, this.asset);
            }),
            (e.prototype.plus = function (e) {
              return this.add(e);
            }),
            (e.prototype.sub = function (r) {
              this._matchAssets(r);
              var t = r.getCoins(),
                n = this._coins.minus(t);
              return new e(n, this.asset);
            }),
            (e.prototype.minus = function (e) {
              return this.sub(e);
            }),
            (e.prototype.times = function (r) {
              return (
                this._matchAssets(r),
                new e(this.getTokens().times(r.getTokens()), this.asset)
              );
            }),
            (e.prototype.div = function (r) {
              return (
                this._matchAssets(r),
                new e(this.getTokens().div(r.getTokens()), this.asset)
              );
            }),
            (e.prototype.eq = function (e) {
              return (this._matchAssets(e), this._coins.eq(e.getCoins()));
            }),
            (e.prototype.lt = function (e) {
              return (this._matchAssets(e), this._coins.lt(e.getCoins()));
            }),
            (e.prototype.lte = function (e) {
              return (this._matchAssets(e), this._coins.lte(e.getCoins()));
            }),
            (e.prototype.gt = function (e) {
              return (this._matchAssets(e), this._coins.gt(e.getCoins()));
            }),
            (e.prototype.gte = function (e) {
              return (this._matchAssets(e), this._coins.gte(e.getCoins()));
            }),
            (e.prototype.safeSub = function (e) {
              return this.asset.id === e.asset.id ? this.sub(e) : this;
            }),
            (e.prototype.toNonNegative = function () {
              return this.getTokens().lt(0) ? this.cloneWithTokens(0) : this;
            }),
            (e.prototype.cloneWithCoins = function (r) {
              return new e(new n.BigNumber(r), this.asset);
            }),
            (e.prototype.cloneWithTokens = function (r) {
              var t = e._tokensToCoins(r, this.asset.precision);
              return new e(t, this.asset);
            }),
            (e.prototype.convertTo = function (r, t) {
              return e.convert(this, r, o.toBigNumber(t));
            }),
            (e.prototype.toJSON = function () {
              return { assetId: this.asset.id, tokens: this.toTokens() };
            }),
            (e.prototype.toString = function () {
              return this.toTokens() + " " + this.asset.id;
            }),
            (e.prototype._matchAssets = function (e) {
              if (this.asset.id !== e.asset.id)
                throw new Error(
                  "You cannot apply arithmetic operations to Money created with different assets",
                );
            }),
            (e.max = function () {
              for (var e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              return e.reduce(function (e, r) {
                return e.gte(r) ? e : r;
              });
            }),
            (e.min = function () {
              for (var e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
              return e.reduce(function (e, r) {
                return e.lte(r) ? e : r;
              });
            }),
            (e.isMoney = function (r) {
              return r instanceof e;
            }),
            (e.convert = function (r, t, o) {
              if (r.asset === t) return r;
              var i = r.asset.precision - t.precision,
                a = new n.BigNumber(10).pow(i),
                s = r.getCoins(),
                u = s.multipliedBy(o).div(a).toFixed(0, n.BigNumber.ROUND_DOWN);
              return new e(new n.BigNumber(u), t);
            }),
            (e.fromTokens = function (r, t) {
              var i = o.toBigNumber(r);
              return new e(i.times(new n.BigNumber(10).pow(t.precision)), t);
            }),
            (e.fromCoins = function (r, t) {
              return new e(r, t);
            }),
            (e._tokensToCoins = function (r, t) {
              var o = e._getDivider(t);
              return (
                (r = new n.BigNumber(r).toFixed(t)),
                new n.BigNumber(r).multipliedBy(o)
              );
            }),
            (e._getDivider = function (e) {
              return new n.BigNumber(10).pow(e);
            }),
            e
          );
        })();
      r.Money = i;
    },
    10983: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(4844),
        o = t(4845),
        i = (function () {
          function e(r, t) {
            var n = e._getMatcherDivider(t.precisionDifference);
            ((this.pair = t),
              (this._matcherCoins = r),
              (this._tokens = this._matcherCoins.div(n)));
          }
          return (
            (e.prototype.getMatcherCoins = function () {
              return this._matcherCoins.plus(0);
            }),
            (e.prototype.getTokens = function () {
              return this._tokens.plus(0);
            }),
            (e.prototype.toMatcherCoins = function () {
              return this._matcherCoins.toFixed(0);
            }),
            (e.prototype.toTokens = function () {
              return this._tokens.toFixed(this.pair.priceAsset.precision);
            }),
            (e.prototype.toFormat = function () {
              return this._tokens.toFormat(this.pair.priceAsset.precision);
            }),
            (e.prototype.toJSON = function () {
              return {
                amountAssetId: this.pair.amountAsset.id,
                priceAssetId: this.pair.priceAsset.id,
                priceTokens: this.toTokens(),
              };
            }),
            (e.prototype.toString = function () {
              return (
                this.toTokens() +
                " " +
                this.pair.amountAsset.id +
                "/" +
                this.pair.priceAsset.id
              );
            }),
            (e.fromMatcherCoins = function (r, t) {
              return (e._checkAmount(r), new e(o.toBigNumber(r), t));
            }),
            (e.fromTokens = function (r, t) {
              (e._checkAmount(r),
                (r = o.toBigNumber(r).toFixed(t.priceAsset.precision)));
              var i = e._getMatcherDivider(t.precisionDifference),
                a = new n.BigNumber(r).times(i);
              return new e(a, t);
            }),
            (e._getMatcherDivider = function (r) {
              return new n.BigNumber(10).pow(r).multipliedBy(e._MATCHER_SCALE);
            }),
            (e.isOrderPrice = function (r) {
              return r instanceof e;
            }),
            (e._checkAmount = function (e) {
              if (
                !(
                  ["string", "number"].includes(typeof e) ||
                  e instanceof n.BigNumber
                )
              )
                throw new Error(
                  "Please use strings to create instances of OrderPrice",
                );
            }),
            (e._MATCHER_SCALE = new n.BigNumber(10).pow(8)),
            e
          );
        })();
      r.OrderPrice = i;
    },
    10984: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = (function () {
        function e(e, r) {
          ((this.amountAsset = e),
            (this.priceAsset = r),
            (this.precisionDifference =
              this.priceAsset.precision - this.amountAsset.precision));
        }
        return (
          (e.prototype.toJSON = function () {
            return {
              amountAsset: this.amountAsset.id,
              priceAsset: this.priceAsset.id,
            };
          }),
          (e.prototype.toString = function () {
            return this.amountAsset + "/" + this.priceAsset;
          }),
          (e.isAssetPair = function (r) {
            return r instanceof e;
          }),
          e
        );
      })();
      r.AssetPair = n;
    },
    10985: function (e, r, t) {
      "use strict";
      var n,
        o =
          (this && this.__extends) ||
          (function () {
            var e = function (r, t) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, r) {
                      e.__proto__ = r;
                    }) ||
                  function (e, r) {
                    for (var t in r) r.hasOwnProperty(t) && (e[t] = r[t]);
                  }),
                e(r, t)
              );
            };
            return function (r, t) {
              function n() {
                this.constructor = r;
              }
              (e(r, t),
                (r.prototype =
                  null === t
                    ? Object.create(t)
                    : ((n.prototype = t.prototype), new n())));
            };
          })(),
        i =
          (this && this.__assign) ||
          function () {
            return (
              (i =
                Object.assign ||
                function (e) {
                  for (var r, t = 1, n = arguments.length; t < n; t++)
                    for (var o in ((r = arguments[t]), r))
                      Object.prototype.hasOwnProperty.call(r, o) &&
                        (e[o] = r[o]);
                  return e;
                }),
              i.apply(this, arguments)
            );
          };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = t(3959),
        s = t(4847),
        u = t(6803),
        c = t(3960),
        l = t(5654),
        f = t(4571),
        h = {
          NO_DATA: { code: "NO_DATA", message: "No data" },
          FIELD_ERROR: {
            code: "FIELD_ERROR",
            message: "Invalid field",
            field: null,
          },
        };
      function p(e) {
        var r = [];
        (e && e.length) || r.push(h.NO_DATA);
        var t = Object.create(null),
          n = [];
        if (
          (e.forEach(function (e) {
            e instanceof a.ByteProcessor
              ? ((t[e.name] = e),
                n.push(function (r) {
                  try {
                    return e.process(r[e.name]);
                  } catch (t) {
                    throw i({}, h.FIELD_ERROR, {
                      field: e.name,
                      message: t.message,
                    });
                  }
                }))
              : "number" === typeof e
                ? n.push(Uint8Array.from([e]))
                : r.push(i({}, h.FIELD_ERROR, { field: e }));
          }),
          r.length)
        )
          throw r;
        var o = (function () {
          function r(e) {
            void 0 === e && (e = {});
            var r = this;
            if (
              ((this._errors = []),
              (this._rawData = Object.keys(t).reduce(function (r, t) {
                return ((r[t] = e[t]), r);
              }, {})),
              (this._dataHolders = n.map(function (e) {
                if ("function" !== typeof e) return e;
                try {
                  return e(r._rawData);
                } catch (t) {
                  r._errors.push(t);
                }
              })),
              this._errors.length)
            )
              throw this._errors;
          }
          return (
            (r.prototype.getSignature = function (e) {
              return this.getBytes().then(function (r) {
                return u.default.buildTransactionSignature(r, e);
              });
            }),
            (r.prototype.getBytes = function () {
              return Promise.all(this._dataHolders).then(function (e) {
                return 1 === e.length
                  ? e[0]
                  : s.concatUint8Arrays.apply(void 0, e);
              });
            }),
            (r.prototype.getDebugBytes = function () {
              var r = this;
              return Promise.all(
                e.map(function (e, t) {
                  var n = e && e.name ? r._rawData[e.name] : null,
                    o = r._dataHolders[t];
                  return o instanceof Promise
                    ? o.then(function (r) {
                        return { bytes: r, from: (e && e.name) || e, value: n };
                      })
                    : Promise.resolve({ bytes: o, from: e, value: n });
                }),
              );
            }),
            (r.prototype.getExactBytes = function (e) {
              if (!(e in t))
                throw new Error(
                  "There is no field '" + e + "' in 'RequestDataType class",
                );
              var r = t[e],
                n = this._rawData[e];
              return r.process(n);
            }),
            r
          );
        })();
        return o;
      }
      ((r.generate = p),
        (r.TX_NUMBER_MAP = Object.create(null)),
        (r.TX_TYPE_MAP = Object.create(null)),
        (r.CREATE_ORDER_SIGNATURE = p([
          new a.Base58("senderPublicKey"),
          new a.Base58("matcherPublicKey"),
          new a.AssetId("amountAsset"),
          new a.AssetId("priceAsset"),
          new a.OrderType("orderType"),
          new a.Int("price", 8),
          new a.Int("amount", 8),
          new a.Int("timestamp", 8),
          new a.Int("expiration", 8),
          new a.Int("matcherFee", 8),
        ])),
        (r.CREATE_ORDER_SIGNATURE_V2 = p([
          c.ORDER_VERSION,
          new a.Base58("senderPublicKey"),
          new a.Base58("matcherPublicKey"),
          new a.AssetId("amountAsset"),
          new a.AssetId("priceAsset"),
          new a.OrderType("orderType"),
          new a.Int("price", 8),
          new a.Int("amount", 8),
          new a.Int("timestamp", 8),
          new a.Int("expiration", 8),
          new a.Int("matcherFee", 8),
        ])),
        (r.AUTH_ORDER_SIGNATURE = p([
          new a.Base58("senderPublicKey"),
          new a.Int("timestamp", 8),
        ])),
        (r.CANCEL_ORDER_SIGNATURE = p([
          new a.Base58("senderPublicKey"),
          new a.Base58("orderId"),
        ])),
        (r.CANCEL_ALL_ORDERS_SIGNATURE = p([
          new a.Base58("senderPublicKey"),
          new a.Int("timestamp", 8),
        ])),
        (r.MATCHER_BYTES_GENERATOR_MAP = {
          CREATE_ORDER: {
            1: r.CREATE_ORDER_SIGNATURE,
            2: r.CREATE_ORDER_SIGNATURE_V2,
          },
          AUTH_ORDER: { 1: r.AUTH_ORDER_SIGNATURE },
          CANCEL_ORDER: { 1: r.CANCEL_ORDER_SIGNATURE },
          CANCEL_ALL_ORDERS: { 1: r.CANCEL_ALL_ORDERS_SIGNATURE },
        }),
        (r.ISSUE = p([
          3,
          new a.Base58("senderPublicKey"),
          new a.StringWithLength("name"),
          new a.StringWithLength("description"),
          new a.Int("quantity", 8),
          new a.Int("precision", 1),
          new a.Bool("reissuable"),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
          new a.ScriptVersion("script"),
          new a.Base64Asset("script"),
        ])),
        (r.ISSUE_V2 = p([
          3,
          2,
          new a.Int("chainId", 1),
          new a.Base58("senderPublicKey"),
          new a.StringWithLength("name"),
          new a.StringWithLength("description"),
          new a.Int("quantity", 8),
          new a.Int("precision", 1),
          new a.Bool("reissuable"),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
          new a.ScriptVersion("script"),
          new a.Base64Asset("script"),
        ])),
        (r.TX_NUMBER_MAP[3] = r.ISSUE_V2),
        (r.TX_TYPE_MAP["issue"] = r.ISSUE_V2),
        (r.TRANSFER = p([
          4,
          new a.Base58("senderPublicKey"),
          new a.AssetId("assetId"),
          new a.AssetId("feeAssetId"),
          new a.Int("timestamp", 8),
          new a.Int("amount", 8),
          new a.Int("fee", 8),
          new a.Recipient("recipient"),
          new a.Attachment("attachment"),
        ])),
        (r.TRANSFER_V2 = p([
          4,
          2,
          new a.Base58("senderPublicKey"),
          new a.AssetId("assetId"),
          new a.AssetId("feeAssetId"),
          new a.Int("timestamp", 8),
          new a.Int("amount", 8),
          new a.Int("fee", 8),
          new a.Recipient("recipient"),
          new a.Attachment("attachment"),
        ])),
        (r.TX_NUMBER_MAP[4] = r.TRANSFER_V2),
        (r.TX_TYPE_MAP["transfer"] = r.TRANSFER_V2),
        (r.REISSUE = p([
          5,
          new a.Base58("senderPublicKey"),
          new a.MandatoryAssetId("assetId"),
          new a.Int("quantity", 8),
          new a.Bool("reissuable"),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
        ])),
        (r.REISSUE_V2 = p([
          5,
          2,
          new a.Int("chainId", 1),
          new a.Base58("senderPublicKey"),
          new a.MandatoryAssetId("assetId"),
          new a.Int("quantity", 8),
          new a.Bool("reissuable"),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
        ])),
        (r.TX_NUMBER_MAP[5] = r.REISSUE_V2),
        (r.TX_TYPE_MAP["reissue"] = r.REISSUE_V2),
        (r.BURN = p([
          6,
          new a.Base58("senderPublicKey"),
          new a.MandatoryAssetId("assetId"),
          new a.Int("quantity", 8),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
        ])),
        (r.BURN_V2 = p([
          6,
          2,
          new a.Int("chainId", 1),
          new a.Base58("senderPublicKey"),
          new a.MandatoryAssetId("assetId"),
          new a.Int("quantity", 8),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
        ])),
        (r.TX_NUMBER_MAP[6] = r.BURN_V2),
        (r.TX_TYPE_MAP["burn"] = r.BURN_V2));
      var d = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.process = function (e) {
            var t,
              n = e.version || 0,
              o = r.MATCHER_BYTES_GENERATOR_MAP.CREATE_ORDER[n];
            if (!o)
              throw new Error('Has no order schema with version "' + n + '"');
            if (2 === e.version) {
              var i = e.proofs.map(function (e) {
                var r = f.default.decode(e);
                return s.concatUint8Arrays(
                  Uint8Array.from(l.default.longToByteArray(r.length, 2)),
                  r,
                );
              });
              t = s.concatUint8Arrays.apply(
                void 0,
                [
                  Uint8Array.from([1]),
                  Uint8Array.from(
                    l.default.longToByteArray(e.proofs.length, 2),
                  ),
                ].concat(i),
              );
            } else t = f.default.decode(e.signature);
            return new o(e).getBytes().then(function (e) {
              return s.concatUint8Arrays(
                Uint8Array.from(
                  l.default.longToByteArray(e.length + t.length, 4),
                ),
                Uint8Array.from(l.default.longToByteArray(n || 1, 1)),
                e.slice(2 === n ? 1 : 0),
                t,
              );
            });
          }),
          t
        );
      })(a.ByteProcessor);
      ((r.Order = d),
        (r.EXCHANGE = p([
          7,
          new d("buyOrder"),
          new d("sellOrder"),
          new a.Int("price", 8),
          new a.Int("amount", 8),
          new a.Int("buyMatcherFee", 8),
          new a.Int("sellMatcherFee", 8),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
        ])),
        (r.EXCHANGE_V2 = p([
          0,
          7,
          2,
          new d("buyOrder"),
          new d("sellOrder"),
          new a.Int("price", 8),
          new a.Int("amount", 8),
          new a.Int("buyMatcherFee", 8),
          new a.Int("sellMatcherFee", 8),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
        ])),
        (r.LEASE = p([
          8,
          0,
          new a.Base58("senderPublicKey"),
          new a.Recipient("recipient"),
          new a.Int("amount", 8),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
        ])),
        (r.LEASE_V2 = p([
          8,
          2,
          0,
          new a.Base58("senderPublicKey"),
          new a.Recipient("recipient"),
          new a.Int("amount", 8),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
        ])),
        (r.TX_NUMBER_MAP[8] = r.LEASE_V2),
        (r.TX_TYPE_MAP["lease"] = r.LEASE_V2),
        (r.CANCEL_LEASING = p([
          9,
          new a.Base58("senderPublicKey"),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
          new a.Base58("transactionId"),
        ])),
        (r.CANCEL_LEASING_V2 = p([
          9,
          2,
          new a.Int("chainId", 1),
          new a.Base58("senderPublicKey"),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
          new a.Base58("transactionId"),
        ])),
        (r.TX_NUMBER_MAP[9] = r.CANCEL_LEASING_V2),
        (r.TX_TYPE_MAP["cancelLeasing"] = r.CANCEL_LEASING_V2),
        (r.CREATE_ALIAS = p([
          10,
          new a.Base58("senderPublicKey"),
          new a.Alias("alias"),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
        ])),
        (r.CREATE_ALIAS_V2 = p([
          10,
          2,
          new a.Base58("senderPublicKey"),
          new a.Alias("alias"),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
        ])),
        (r.TX_NUMBER_MAP[10] = r.CREATE_ALIAS_V2),
        (r.TX_TYPE_MAP["createAlias"] = r.CREATE_ALIAS_V2),
        (r.MASS_TRANSFER = p([
          11,
          1,
          new a.Base58("senderPublicKey"),
          new a.AssetId("assetId"),
          new a.Transfers("transfers"),
          new a.Int("timestamp", 8),
          new a.Int("fee", 8),
          new a.Attachment("attachment"),
        ])),
        (r.TX_NUMBER_MAP[11] = r.MASS_TRANSFER),
        (r.TX_TYPE_MAP["massTransfer"] = r.MASS_TRANSFER),
        (r.DATA = p([
          12,
          1,
          new a.Base58("senderPublicKey"),
          new a.DataEntries("data"),
          new a.Int("timestamp", 8),
          new a.Int("fee", 8),
        ])),
        (r.TX_NUMBER_MAP[12] = r.DATA),
        (r.TX_TYPE_MAP["data"] = r.DATA),
        (r.SET_SCRIPT = p([
          13,
          1,
          new a.Int("chainId", 1),
          new a.Base58("senderPublicKey"),
          new a.ScriptVersion("script"),
          new a.Base64("script"),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
        ])),
        (r.TX_NUMBER_MAP[13] = r.SET_SCRIPT),
        (r.TX_TYPE_MAP["setScript"] = r.SET_SCRIPT),
        (r.SET_ASSET_SCRIPT = p([
          15,
          1,
          new a.Int("chainId", 1),
          new a.Base58("senderPublicKey"),
          new a.MandatoryAssetId("assetId"),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
          new a.ScriptVersion("script"),
          new a.Base64("script"),
        ])),
        (r.TX_NUMBER_MAP[15] = r.SET_ASSET_SCRIPT),
        (r.TX_TYPE_MAP["setAssetScript"] = r.SET_ASSET_SCRIPT),
        (r.SPONSORSHIP = p([
          14,
          1,
          new a.Base58("senderPublicKey"),
          new a.Base58("assetId"),
          new a.Int("minSponsoredAssetFee", 8),
          new a.Int("fee", 8),
          new a.Int("timestamp", 8),
        ])),
        (r.TX_NUMBER_MAP[14] = r.SPONSORSHIP),
        (r.TX_TYPE_MAP["sponsorship"] = r.SPONSORSHIP),
        (r.BYTES_GENERATORS_MAP =
          ((n = {}),
          (n[3] = { 1: r.ISSUE, 2: r.ISSUE_V2 }),
          (n[4] = { 1: r.TRANSFER, 2: r.TRANSFER_V2 }),
          (n[5] = { 1: r.REISSUE, 2: r.REISSUE_V2 }),
          (n[6] = { 1: r.BURN, 2: r.BURN_V2 }),
          (n[7] = { 1: r.EXCHANGE, 2: r.EXCHANGE_V2 }),
          (n[8] = { 1: r.LEASE, 2: r.LEASE_V2 }),
          (n[9] = { 1: r.CANCEL_LEASING, 2: r.CANCEL_LEASING_V2 }),
          (n[10] = { 1: r.CREATE_ALIAS, 2: r.CREATE_ALIAS_V2 }),
          (n[11] = { 1: r.MASS_TRANSFER }),
          (n[12] = { 1: r.DATA }),
          (n[13] = { 1: r.SET_SCRIPT }),
          (n[14] = { 1: r.SPONSORSHIP }),
          (n[15] = { 1: r.SET_ASSET_SCRIPT }),
          n)));
    },
    10986: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(6802),
        o = t(3959),
        i = t(6808),
        a = (function () {
          function e(e) {
            if (e.length < n.config.get("minimalSeedLength"))
              throw new Error(
                "Your seed length is less than allowed in config",
              );
            var r = o.utils.crypto.buildKeyPair(e);
            ((this.phrase = e),
              (this.address = o.utils.crypto.buildRawAddress(r.publicKey)),
              (this.keyPair = {
                privateKey: o.libs.base58.encode(r.privateKey),
                publicKey: o.libs.base58.encode(r.publicKey),
              }),
              Object.freeze(this),
              Object.freeze(this.keyPair));
          }
          return (
            (e.prototype.encrypt = function (r, t) {
              return e.encryptSeedPhrase(this.phrase, r, t);
            }),
            (e.encryptSeedPhrase = function (e, r, t) {
              if (
                (void 0 === t && (t = 5e3),
                r && r.length,
                e.length < n.config.get("minimalSeedLength"))
              )
                throw new Error(
                  "The seed phrase you are trying to encrypt is too short",
                );
              return o.utils.crypto.encryptSeed(e, r, t);
            }),
            (e.decryptSeedPhrase = function (e, r, t) {
              void 0 === t && (t = 5e3);
              var i,
                a = "The password is wrong";
              try {
                i = o.utils.crypto.decryptSeed(e, r, t);
              } catch (s) {
                throw new Error(a);
              }
              if ("" === i || i.length < n.config.get("minimalSeedLength"))
                throw new Error(a);
              return i;
            }),
            (e.create = function (r) {
              void 0 === r && (r = 15);
              var t = e._generateNewSeed(r),
                o = n.config.get("minimalSeedLength");
              if (t.length < o)
                throw new Error(
                  "The resulted seed length is less than the minimum length (" +
                    o +
                    ")",
                );
              return new e(t);
            }),
            (e.fromExistingPhrase = function (r) {
              var t = n.config.get("minimalSeedLength");
              if (r.length < t)
                throw new Error(
                  "The resulted seed length is less than the minimum length (" +
                    t +
                    ")",
                );
              return new e(r);
            }),
            (e._generateNewSeed = function (e) {
              for (
                var r = o.utils.crypto.generateRandomUint32Array(e),
                  t = i.default.length,
                  n = [],
                  a = 0;
                a < e;
                a++
              ) {
                var s = r[a] % t;
                n.push(i.default[s]);
              }
              return (r.set(new Uint8Array(r.length)), n.join(" "));
            }),
            e
          );
        })();
      r.Seed = a;
    },
    10987: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(10988);
      function o(e) {
        var t = n.getNumberFromBytes(e, 1);
        switch (t) {
          case 3:
            return r.parseIssueTx(e);
          case 4:
            return r.parseTransferTx(e);
          case 5:
            return r.parseReissueTx(e);
          case 6:
            return r.parseBurnTx(e);
          case 8:
            return r.parseLeaseTx(e);
          case 9:
            return r.parseCancelLeaseTx(e);
          case 10:
            return r.parseCreateAliasTx(e);
          case 11:
            return r.parseMassTransferTx(e);
          case 7:
            throw new Error("Exchange transaction parser is not supported!");
          case 12:
            return r.parseDataTx(e);
          case 13:
            return r.parseSetScriptTx(e);
          case 14:
            return r.parseSponsorshipTx(e);
          case 15:
            return r.parseSetAssetScriptTx(e);
          default:
            throw new Error("Type " + t + " is not supported!");
        }
      }
      function i() {}
      ((r.parseTransactionBytes = o),
        (r.parseOrderBytes = i),
        (r.parseIssueTx = n.parseConstructor([
          n.toNumber("type"),
          n.toNumber("version"),
          n.toNumber("chainId"),
          n.toBase58("senderPublicKey"),
          n.toStringWithLength("name"),
          n.toStringWithLength("description"),
          n.toBigNumber("quantity"),
          n.toNumber("precision"),
          n.toBoolean("reissuable"),
          n.toBigNumber("fee"),
          n.toBigNumber("timestamp"),
          n.toScript("script"),
        ])),
        (r.parseTransferTx = n.parseConstructor([
          n.toNumber("type"),
          n.toNumber("version"),
          n.toBase58("senderPublicKey"),
          n.toAssetId("assetId"),
          n.toAssetId("feeAssetId"),
          n.toBigNumber("timestamp"),
          n.toBigNumber("amount"),
          n.toBigNumber("fee"),
          n.toAddressOrAlias("recipient"),
          n.toStringWithLength("attachment"),
        ])),
        (r.parseReissueTx = n.parseConstructor([
          n.toNumber("type"),
          n.toNumber("version"),
          n.toNumber("chainId"),
          n.toBase58("senderPublicKey"),
          n.toBase58("assetId"),
          n.toBigNumber("quantity"),
          n.toBoolean("reissuable"),
          n.toBigNumber("fee"),
          n.toBigNumber("timestamp"),
        ])),
        (r.parseBurnTx = n.parseConstructor([
          n.toNumber("type"),
          n.toNumber("version"),
          n.toNumber("chainId"),
          n.toBase58("senderPublicKey"),
          n.toBase58("assetId"),
          n.toBigNumber("quantity"),
          n.toBigNumber("fee"),
          n.toBigNumber("timestamp"),
        ])),
        (r.parseLeaseTx = n.parseConstructor([
          n.toNumber("type"),
          n.toNumber("version"),
          n.toAssetId("leaseAssetId"),
          n.toBase58("senderPublicKey"),
          n.toAddressOrAlias("recipient"),
          n.toBigNumber("amount"),
          n.toBigNumber("fee"),
          n.toBigNumber("timestamp"),
        ])),
        (r.parseCancelLeaseTx = n.parseConstructor([
          n.toNumber("type"),
          n.toNumber("version"),
          n.toNumber("chainId"),
          n.toBase58("senderPublicKey"),
          n.toBigNumber("fee"),
          n.toBigNumber("timestamp"),
          n.toBase58("transactionId"),
        ])),
        (r.parseCreateAliasTx = n.parseConstructor([
          n.toNumber("type"),
          n.toNumber("version"),
          n.toBase58("senderPublicKey"),
          n.toNewAlias("alias"),
          n.toBigNumber("fee"),
          n.toBigNumber("timestamp"),
        ])),
        (r.parseMassTransferTx = n.parseConstructor([
          n.toNumber("type"),
          n.toNumber("version"),
          n.toBase58("senderPublicKey"),
          n.toAssetId("assetId"),
          n.toTransfers("transfers"),
          n.toBigNumber("timestamp"),
          n.toBigNumber("fee"),
          n.toStringWithLength("attachment"),
        ])),
        (r.parseDataTx = n.parseConstructor([
          n.toNumber("type"),
          n.toNumber("version"),
          n.toBase58("senderPublicKey"),
          n.toData("data"),
          n.toBigNumber("timestamp"),
          n.toBigNumber("fee"),
        ])),
        (r.parseSetScriptTx = n.parseConstructor([
          n.toNumber("type"),
          n.toNumber("version"),
          n.toNumber("chainId"),
          n.toBase58("senderPublicKey"),
          n.toScript("script"),
          n.toBigNumber("fee"),
          n.toBigNumber("timestamp"),
        ])),
        (r.parseSetAssetScriptTx = n.parseConstructor([
          n.toNumber("type"),
          n.toNumber("version"),
          n.toNumber("chainId"),
          n.toBase58("senderPublicKey"),
          n.toBase58("assetId"),
          n.toBigNumber("fee"),
          n.toBigNumber("timestamp"),
          n.toScript("script"),
        ])),
        (r.parseSponsorshipTx = n.parseConstructor([
          n.toNumber("type"),
          n.toNumber("version"),
          n.toBase58("senderPublicKey"),
          n.toBase58("assetId"),
          n.toBigNumber("minSponsoredAssetFee"),
          n.toBigNumber("fee"),
          n.toBigNumber("timestamp"),
        ])));
    },
    10988: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(4846),
        o = t(4571),
        i = t(5653),
        a = t(3960),
        s = 2,
        u = 8,
        c = function (e) {
          switch (e) {
            case 0:
              return "integer";
            case 1:
              return "boolean";
            case 2:
              return "binary";
            case 3:
              return "string";
            default:
              throw new Error("Unknown data field code " + e + "!");
          }
        },
        l = function (e, r) {
          return function (t, n) {
            return (
              t.data || (t.data = Object.create(null)),
              (t.data[e] = h(r)(t, n)),
              t
            );
          };
        },
        f = function (e, r) {
          return (e.cursor || (e.cursor = 0), (e.cursor += r), e);
        },
        h = function (e) {
          return function (r, t) {
            var n = r.cursor || 0,
              o = e(t, n),
              i = o.shift,
              a = o.value;
            return (f(r, i), a);
          };
        },
        p = function (e) {
          return function (r, t) {
            var o = n.default.byteArrayToBigInteger(r.slice(t, t + e));
            return { value: o, shift: e };
          };
        },
        d = function (e) {
          return function (r, t) {
            var o = n.default.byteArrayToSignBigInteger(r.slice(t, t + e));
            return { value: o, shift: e };
          };
        },
        y = function (e) {
          return function (r, t) {
            var n = p(e)(r, t);
            return { shift: e, value: n.value.toNumber() };
          };
        },
        g = function (e, r) {
          var t = !!e[r];
          return { value: t, shift: 1 };
        },
        m = function (e) {
          return function (r, t) {
            var o = n.default.byteArrayToString(r.slice(t, t + e));
            return { shift: e, value: o };
          };
        },
        w = function (e, r) {
          var t = y(s)(e, r),
            n = m(t.value)(e, r + s).value;
          return { shift: t.value + s, value: n };
        },
        A = function (e, r, t) {
          var n = t || 32,
            i = o.default.encode(e.slice(r, r + n));
          return { value: i, shift: n };
        },
        v = function (e, r) {
          var t = 33,
            n = !e[r];
          if (n) return { shift: 1, value: "WAVES" };
          var o = A(e, r + 1).value;
          return { shift: t, value: o };
        },
        b = function (e, r) {
          if (e[r] === a.ALIAS_VERSION) {
            var t = w(e, r + 2);
            return { shift: t.shift + 2, value: t.value };
          }
          return A(e, r, 26);
        },
        E = function (e, r) {
          var t = y(s)(e, r).value + s,
            n = w(e, r + 4).value;
          return { shift: t, value: n };
        },
        _ = function (e, r) {
          for (var t = y(s)(e, r).value, n = [], o = s, i = 0; i < t; i++) {
            var a = b(e, r + o);
            o += a.shift;
            var c = p(u)(e, r + o);
            ((o += c.shift), n.push({ recipient: a.value, amount: c.value }));
          }
          return { shift: o, value: n };
        },
        S = function (e, r) {
          var t = 1;
          if (0 === e[r]) return { shift: t, value: "base64:" };
          var n = y(s)(e, r + t),
            o = r + t + n.shift,
            a = r + t + n.shift + n.value,
            u = "base64:" + i.fromByteArray(e.slice(o, a));
          return { value: u, shift: a - r };
        },
        T = function (e, t) {
          for (
            var n = r.getNumberFromBytes(e, s, t), o = [], a = s, l = 0;
            l < n;
            l++
          ) {
            var f = r.getNumberFromBytes(e, s, t + a);
            a += s;
            var h = m(f)(e, t + a).value;
            a += f;
            var p = r.getNumberFromBytes(e, 1, t + a);
            a += 1;
            var y = c(p),
              w = void 0;
            switch (p) {
              case 0:
                ((w = d(u)(e, t + a).value), (a += u));
                break;
              case 1:
                var A = g(e, t + a);
                ((w = A.value), (a += A.shift));
                break;
              case 2:
                var v = r.getNumberFromBytes(e, s, t + a);
                ((a += s),
                  (w = "base64:" + i.fromByteArray(e.slice(t + a, t + a + v))),
                  (a += v));
                break;
              case 3:
                var b = r.getNumberFromBytes(e, s, t + a);
                ((a += s), (w = m(b)(e, t + a).value), (a += b));
                break;
            }
            o.push({ key: h, type: y, value: w });
          }
          return { value: o, shift: a };
        };
      function N(e) {
        return l(e, g);
      }
      function I(e) {
        return l(e, p(u));
      }
      function B(e) {
        return l(e, y(1));
      }
      function R(e) {
        return l(e, w);
      }
      function k(e) {
        return l(e, A);
      }
      function P(e) {
        return l(e, v);
      }
      function U(e) {
        return l(e, b);
      }
      function O(e) {
        return l(e, E);
      }
      function C(e) {
        return l(e, _);
      }
      function M(e) {
        return l(e, S);
      }
      function x(e) {
        return l(e, T);
      }
      function L(e) {
        return function (r) {
          return e.reduce(function (e, t) {
            return t(e, r);
          }, Object.create(null)).data;
        };
      }
      ((r.getNumberFromBytes = function (e, r, t) {
        return (void 0 === t && (t = 0), y(r)(e, t).value);
      }),
        (r.toBoolean = N),
        (r.toBigNumber = I),
        (r.toNumber = B),
        (r.toStringWithLength = R),
        (r.toBase58 = k),
        (r.toAssetId = P),
        (r.toAddressOrAlias = U),
        (r.toNewAlias = O),
        (r.toTransfers = C),
        (r.toScript = M),
        (r.toData = x),
        (r.parseConstructor = L));
    },
    2798: function (e, r) {},
    2799: function (e, r) {},
    3959: function (e, r, t) {
      "use strict";
      function n(e) {
        for (var t in e) r.hasOwnProperty(t) || (r[t] = e[t]);
      }
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        n(t(3960)),
        n(t(10978)),
        n(t(6802)),
        n(t(10985)),
        n(t(10986)),
        n(t(6808)),
        n(t(10987)));
      var o = t(4571),
        i = t(4846),
        a = t(6804),
        s = t(6805),
        u = t(6807),
        c = t(6806),
        l = t(5653),
        f = t(4847),
        h = t(5654),
        p = t(6803);
      ((r.libs = {
        base64: l,
        base58: o.default,
        converters: i.default,
        axlsign: a.default,
        blake2b: s,
        secureRandom: c.default,
        keccak256: u.keccak256,
      }),
        (r.utils = {
          concatUint8Arrays: f.concatUint8Arrays,
          convert: h.default,
          crypto: p.default,
        }));
    },
    3960: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e) {
          ((e[(e["SEND_OLD"] = 2)] = "SEND_OLD"),
            (e[(e["ISSUE"] = 3)] = "ISSUE"),
            (e[(e["TRANSFER"] = 4)] = "TRANSFER"),
            (e[(e["REISSUE"] = 5)] = "REISSUE"),
            (e[(e["BURN"] = 6)] = "BURN"),
            (e[(e["EXCHANGE"] = 7)] = "EXCHANGE"),
            (e[(e["LEASE"] = 8)] = "LEASE"),
            (e[(e["CANCEL_LEASING"] = 9)] = "CANCEL_LEASING"),
            (e[(e["CREATE_ALIAS"] = 10)] = "CREATE_ALIAS"),
            (e[(e["MASS_TRANSFER"] = 11)] = "MASS_TRANSFER"),
            (e[(e["DATA"] = 12)] = "DATA"),
            (e[(e["SET_SCRIPT"] = 13)] = "SET_SCRIPT"),
            (e[(e["SPONSORSHIP"] = 14)] = "SPONSORSHIP"),
            (e[(e["SET_ASSET_SCRIPT"] = 15)] = "SET_ASSET_SCRIPT"));
        })(r.TRANSACTION_TYPE_NUMBER || (r.TRANSACTION_TYPE_NUMBER = {})),
        (function (e) {
          ((e["ISSUE"] = "issue"),
            (e["TRANSFER"] = "transfer"),
            (e["REISSUE"] = "reissue"),
            (e["BURN"] = "burn"),
            (e["EXCHANGE"] = "exchange"),
            (e["LEASE"] = "lease"),
            (e["CANCEL_LEASING"] = "cancelLeasing"),
            (e["CREATE_ALIAS"] = "createAlias"),
            (e["MASS_TRANSFER"] = "massTransfer"),
            (e["DATA"] = "data"),
            (e["SET_SCRIPT"] = "setScript"),
            (e["SET_ASSET_SCRIPT"] = "setAssetScript"),
            (e["SPONSORSHIP"] = "sponsorship"));
        })(r.TRANSACTION_TYPE || (r.TRANSACTION_TYPE = {})),
        (function (e) {
          ((e[(e["ISSUE"] = 2)] = "ISSUE"),
            (e[(e["TRANSFER"] = 2)] = "TRANSFER"),
            (e[(e["REISSUE"] = 2)] = "REISSUE"),
            (e[(e["BURN"] = 2)] = "BURN"),
            (e[(e["EXCHANGE"] = 2)] = "EXCHANGE"),
            (e[(e["LEASE"] = 2)] = "LEASE"),
            (e[(e["CANCEL_LEASING"] = 2)] = "CANCEL_LEASING"),
            (e[(e["CREATE_ALIAS"] = 2)] = "CREATE_ALIAS"),
            (e[(e["MASS_TRANSFER"] = 1)] = "MASS_TRANSFER"),
            (e[(e["DATA"] = 1)] = "DATA"),
            (e[(e["SET_SCRIPT"] = 1)] = "SET_SCRIPT"),
            (e[(e["SET_ASSET_SCRIPT"] = 1)] = "SET_ASSET_SCRIPT"),
            (e[(e["SPONSORSHIP"] = 1)] = "SPONSORSHIP"));
        })(r.TRANSACTION_TYPE_VERSION || (r.TRANSACTION_TYPE_VERSION = {})),
        (r.ORDER_VERSION = 2),
        (function (e) {
          ((e[(e["INTEGER"] = 0)] = "INTEGER"),
            (e[(e["BOOLEAN"] = 1)] = "BOOLEAN"),
            (e[(e["BINARY"] = 2)] = "BINARY"),
            (e[(e["STRING"] = 3)] = "STRING"));
        })(
          r.DATA_TRANSACTION_FIELD_TYPES ||
            (r.DATA_TRANSACTION_FIELD_TYPES = {}),
        ),
        (r.WAVES_ID = "WAVES"),
        (r.WAVES_BLOCKCHAIN_ID = ""),
        (r.MAINNET_BYTE = "W".charCodeAt(0)),
        (r.TESTNET_BYTE = "T".charCodeAt(0)),
        (r.ADDRESS_VERSION = 1),
        (r.ALIAS_VERSION = 2),
        (r.SET_SCRIPT_LANG_VERSION = 1),
        (r.TRANSFER_ATTACHMENT_BYTE_LIMIT = 140),
        (r.DATA_TX_SIZE_WITHOUT_ENTRIES = 52),
        (r.DATA_ENTRIES_BYTE_LIMIT = 143360 - r.DATA_TX_SIZE_WITHOUT_ENTRIES),
        (r.INITIAL_NONCE = 0),
        (r.PRIVATE_KEY_LENGTH = 32),
        (r.PUBLIC_KEY_LENGTH = 32),
        (r.STUB_NAME = "reservedName"));
    },
    4571: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        o = n.split("").reduce(function (e, r, t) {
          return ((e[r] = t), e);
        }, {});
      r.default = {
        encode: function (e) {
          if (!e.length) return "";
          for (var r = [0], t = 0; t < e.length; t++) {
            for (var o = 0; o < r.length; o++) r[o] <<= 8;
            r[0] += e[t];
            for (var i = 0, a = 0; a < r.length; a++)
              ((r[a] += i), (i = (r[a] / 58) | 0), (r[a] %= 58));
            while (i) (r.push(i % 58), (i = (i / 58) | 0));
          }
          for (t = 0; 0 === e[t] && t < e.length - 1; t++) r.push(0);
          return r
            .reverse()
            .map(function (e) {
              return n[e];
            })
            .join("");
        },
        decode: function (e) {
          if (!e.length) return new Uint8Array(0);
          for (var r = [0], t = 0; t < e.length; t++) {
            var n = e[t];
            if (!(n in o))
              throw 'There is no character "' + n + '" in the Base58 sequence!';
            for (var i = 0; i < r.length; i++) r[i] *= 58;
            r[0] += o[n];
            var a = 0;
            for (i = 0; i < r.length; i++)
              ((r[i] += a), (a = r[i] >> 8), (r[i] &= 255));
            while (a) (r.push(255 & a), (a >>= 8));
          }
          for (t = 0; "1" === e[t] && t < e.length - 1; t++) r.push(0);
          return new Uint8Array(r.reverse());
        },
      };
    },
    4844: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(10979);
      ((r.BigNumber = n.default),
        n.default.config({ ROUNDING_MODE: n.default.ROUND_DOWN }));
    },
    4845: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(4844);
      function o(e) {
        return e instanceof n.BigNumber ? e : new n.BigNumber(e);
      }
      r.toBigNumber = o;
    },
    4846: function (e, r, t) {
      var n = t(816),
        o = t(5651).BigNumber,
        i = (function () {
          var e,
            r = {},
            t = [];
          for (e = 0; e <= 9; ++e) {
            var a = e.toString();
            ((r[a] = e), t.push(a));
          }
          for (e = 10; e <= 15; ++e) {
            var s = String.fromCharCode("a".charCodeAt(0) + e - 10),
              u = String.fromCharCode("A".charCodeAt(0) + e - 10);
            ((r[s] = e), (r[u] = e), t.push(s));
          }
          return {
            byteArrayToHexString: function (e) {
              for (var r = "", n = 0; n < e.length; ++n)
                (e[n] < 0 && (e[n] += 256), (r += t[e[n] >> 4] + t[15 & e[n]]));
              return r;
            },
            stringToByteArray: function (e) {
              for (var r = [], t = 0; t < e.length; t++) {
                var n = e.charCodeAt(t);
                n < 128
                  ? r.push(n)
                  : n < 2048
                    ? r.push(192 | (n >> 6), 128 | (63 & n))
                    : n < 55296 || n >= 57344
                      ? r.push(
                          224 | (n >> 12),
                          128 | ((n >> 6) & 63),
                          128 | (63 & n),
                        )
                      : (t++,
                        (n =
                          65536 +
                          (((1023 & n) << 10) | (1023 & e.charCodeAt(t)))),
                        r.push(
                          240 | (n >> 18),
                          128 | ((n >> 12) & 63),
                          128 | ((n >> 6) & 63),
                          128 | (63 & n),
                        ));
              }
              return r;
            },
            hexStringToByteArray: function (e) {
              var t = [],
                n = 0;
              for (
                0 !== e.length % 2 && (t.push(r[e.charAt(0)]), ++n);
                n < e.length - 1;
                n += 2
              )
                t.push((r[e.charAt(n)] << 4) + r[e.charAt(n + 1)]);
              return t;
            },
            stringToHexString: function (e) {
              return this.byteArrayToHexString(this.stringToByteArray(e));
            },
            hexStringToString: function (e) {
              return this.byteArrayToString(this.hexStringToByteArray(e));
            },
            checkBytesToIntInput: function (e, r, t) {
              var n = t || 0;
              if (n < 0) throw new Error("Start index should not be negative");
              if (e.length < n + r)
                throw new Error(
                  "Need at least " + r + " bytes to convert to an integer",
                );
              return n;
            },
            byteArrayToSignedShort: function (e, r) {
              var t = this.checkBytesToIntInput(e, 2, r),
                n = e[t];
              return ((n += e[t + 1] << 8), n);
            },
            byteArrayToSignedInt32: function (e, r) {
              var t = this.checkBytesToIntInput(e, 4, r),
                n = e[t];
              return (
                (n += e[t + 1] << 8),
                (n += e[t + 2] << 16),
                (n += e[t + 3] << 24),
                n
              );
            },
            byteArrayToBigInteger: function (e) {
              for (
                var r,
                  t = new o("256", 10),
                  n = new o("0", 10),
                  i = e.length - 1;
                i >= 0;
                i--
              ) {
                var a = e[i];
                ((r = new o(a).times(t.pow(e.length - 1 - i))),
                  (n = n.plus(r)));
              }
              return n;
            },
            byteArrayToSignBigInteger: function (e) {
              for (
                var r,
                  t = e[0] >= 128 && 8 === e.length,
                  n = new o("0", 10),
                  i = e.length - 1;
                i >= 0;
                i--
              ) {
                var a = e[i];
                (t && (a = 255 & ~a),
                  (r = new o(a).times(new o("256", 10).pow(e.length - 1 - i))),
                  (n = n.plus(r)));
              }
              return (t && ((n = n.plus(1)), (n = new o(0).minus(n))), n);
            },
            byteArrayToWordArray: function (e) {
              var r = 0,
                t = 0,
                n = 0,
                o = e.length,
                i = new Uint32Array(((o / 4) | 0) + (o % 4 == 0 ? 0 : 1));
              while (r < o - (o % 4))
                i[t++] =
                  (e[r++] << 24) | (e[r++] << 16) | (e[r++] << 8) | e[r++];
              o % 4 != 0 &&
                ((n = e[r++] << 24),
                o % 4 > 1 && (n |= e[r++] << 16),
                o % 4 > 2 && (n |= e[r++] << 8),
                (i[t] = n));
              var a = new Object();
              return ((a.sigBytes = o), (a.words = i), a);
            },
            wordArrayToByteArray: function (e) {
              return i.wordArrayToByteArrayImpl(e, !0);
            },
            wordArrayToByteArrayImpl: function (e, r) {
              var t = e.words.length;
              if (0 == t) return new Array(0);
              var n,
                o,
                i = new Array(e.sigBytes),
                a = 0;
              for (o = 0; o < t - 1; o++)
                ((n = e.words[o]),
                  (i[a++] = r ? n >> 24 : (n >> 24) & 255),
                  (i[a++] = (n >> 16) & 255),
                  (i[a++] = (n >> 8) & 255),
                  (i[a++] = 255 & n));
              return (
                (n = e.words[t - 1]),
                (i[a++] = r ? n >> 24 : (n >> 24) & 255),
                e.sigBytes % 4 == 0 &&
                  ((i[a++] = (n >> 16) & 255),
                  (i[a++] = (n >> 8) & 255),
                  (i[a++] = 255 & n)),
                e.sigBytes % 4 > 1 && (i[a++] = (n >> 16) & 255),
                e.sigBytes % 4 > 2 && (i[a++] = (n >> 8) & 255),
                i
              );
            },
            byteArrayToString: function (e, r, t) {
              if (0 == t) return "";
              if (r && t) {
                var n = this.checkBytesToIntInput(
                  e,
                  parseInt(t, 10),
                  parseInt(r, 10),
                );
                e = e.slice(r, r + t);
              }
              var o = [1, 1, 1, 1, 2, 2, 3, 0],
                i = e.length,
                a = "";
              for (n = 0; n < i; ) {
                var s = e[n++];
                if (128 & s) {
                  var u = o[(s >> 3) & 7];
                  if (!(64 & s) || !u || n + u > i) return null;
                  for (s &= 63 >> u; u > 0; u -= 1) {
                    var c = e[n++];
                    if (128 != (192 & c)) return null;
                    s = (s << 6) | (63 & c);
                  }
                }
                a += String.fromCharCode(s);
              }
              return a;
            },
            byteArrayToShortArray: function (e) {
              var r,
                t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (r = 0; r < 16; r++) t[r] = e[2 * r] | (e[2 * r + 1] << 8);
              return t;
            },
            shortArrayToByteArray: function (e) {
              var r,
                t = [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ];
              for (r = 0; r < 16; r++)
                ((t[2 * r] = 255 & e[r]), (t[2 * r + 1] = e[r] >> 8));
              return t;
            },
            shortArrayToHexString: function (e) {
              for (var r = "", n = 0; n < e.length; n++)
                r +=
                  t[(e[n] >> 4) & 15] +
                  t[15 & e[n]] +
                  t[(e[n] >> 12) & 15] +
                  t[(e[n] >> 8) & 15];
              return r;
            },
            intToBytes_: function (e, r, t, n) {
              var o = Math.floor(t / 2),
                i = -1 * (o + 1);
              if (e != Math.floor(e) || e < i || e > t)
                throw new Error(e + " is not a " + 8 * r + " bit integer");
              var a,
                s = [],
                u = e >= 0 && e <= o ? 0 : e > o && e <= t ? 1 : 2;
              2 == u && (e = -1 * e - 1);
              for (var c = 0; c < r; c++)
                ((a = 2 == u ? 255 - (e % 256) : e % 256),
                  n ? s.unshift(a) : s.push(a),
                  1 == u ? (e = Math.floor(e / 256)) : (e >>= 8));
              return s;
            },
            int32ToBytes: function (e, r) {
              return i.intToBytes_(e, 4, 4294967295, r);
            },
            int16ToBytes: function (e, r) {
              return i.intToBytes_(e, 2, 65535, r);
            },
            wordArrayToByteArrayEx: function (e) {
              for (
                var r = e.words, t = e.sigBytes, n = new Uint8Array(t), o = 0;
                o < t;
                o++
              ) {
                var i = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                n[o] = i;
              }
              return n;
            },
            byteArrayToWordArrayEx: function (e) {
              for (var r = e.length, t = [], o = 0; o < r; o++)
                t[o >>> 2] |= (255 & e[o]) << (24 - (o % 4) * 8);
              return n.lib.WordArray.create(t, r);
            },
          };
        })();
      r["default"] = i;
    },
    4847: function (e, r, t) {
      "use strict";
      function n() {
        for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
        if (e.length < 2)
          throw new Error("Two or more Uint8Array are expected");
        if (
          !e.every(function (e) {
            return e instanceof Uint8Array;
          })
        )
          throw new Error("One of arguments is not a Uint8Array");
        for (
          var t = e.length,
            n = e.reduce(function (e, r) {
              return e + r.length;
            }, 0),
            o = new Uint8Array(n),
            i = 0,
            a = 0;
          a < t;
          a++
        )
          (o.set(e[a], i), (i += e[a].length));
        return o;
      }
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.concatUint8Arrays = n));
    },
    5651: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(4844);
      r.BigNumber = n.BigNumber;
      var o = t(10980);
      r.Asset = o.Asset;
      var i = t(10981);
      r.Candle = i.Candle;
      var a = t(10982);
      r.Money = a.Money;
      var s = t(10983);
      r.OrderPrice = s.OrderPrice;
      var u = t(10984);
      r.AssetPair = u.AssetPair;
      var c = t(5652);
      r.config = c.config;
    },
    5652: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = {
        remapAsset: function (e) {
          return e;
        },
        remapCandle: function (e) {
          return e;
        },
      };
      (function (e) {
        function r(e) {
          return n[e];
        }
        function t(e, r) {
          "string" === typeof e
            ? (n[e] = r)
            : Object.keys(e).forEach(function (r) {
                return t(r, e[r]);
              });
        }
        ((e.get = r), (e.set = t));
      })(r.config || (r.config = {}));
    },
    5653: function (e, r, t) {
      "use strict";
      ((r.byteLength = l), (r.toByteArray = h), (r.fromByteArray = y));
      for (
        var n = [],
          o = [],
          i = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
          a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          u = a.length;
        s < u;
        ++s
      )
        ((n[s] = a[s]), (o[a.charCodeAt(s)] = s));
      function c(e) {
        var r = e.length;
        if (r % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var t = e.indexOf("=");
        -1 === t && (t = r);
        var n = t === r ? 0 : 4 - (t % 4);
        return [t, n];
      }
      function l(e) {
        var r = c(e),
          t = r[0],
          n = r[1];
        return (3 * (t + n)) / 4 - n;
      }
      function f(e, r, t) {
        return (3 * (r + t)) / 4 - t;
      }
      function h(e) {
        for (
          var r,
            t = c(e),
            n = t[0],
            a = t[1],
            s = new i(f(e, n, a)),
            u = 0,
            l = a > 0 ? n - 4 : n,
            h = 0;
          h < l;
          h += 4
        )
          ((r =
            (o[e.charCodeAt(h)] << 18) |
            (o[e.charCodeAt(h + 1)] << 12) |
            (o[e.charCodeAt(h + 2)] << 6) |
            o[e.charCodeAt(h + 3)]),
            (s[u++] = (r >> 16) & 255),
            (s[u++] = (r >> 8) & 255),
            (s[u++] = 255 & r));
        return (
          2 === a &&
            ((r = (o[e.charCodeAt(h)] << 2) | (o[e.charCodeAt(h + 1)] >> 4)),
            (s[u++] = 255 & r)),
          1 === a &&
            ((r =
              (o[e.charCodeAt(h)] << 10) |
              (o[e.charCodeAt(h + 1)] << 4) |
              (o[e.charCodeAt(h + 2)] >> 2)),
            (s[u++] = (r >> 8) & 255),
            (s[u++] = 255 & r)),
          s
        );
      }
      function p(e) {
        return (
          n[(e >> 18) & 63] + n[(e >> 12) & 63] + n[(e >> 6) & 63] + n[63 & e]
        );
      }
      function d(e, r, t) {
        for (var n, o = [], i = r; i < t; i += 3)
          ((n =
            ((e[i] << 16) & 16711680) +
            ((e[i + 1] << 8) & 65280) +
            (255 & e[i + 2])),
            o.push(p(n)));
        return o.join("");
      }
      function y(e) {
        for (
          var r, t = e.length, o = t % 3, i = [], a = 16383, s = 0, u = t - o;
          s < u;
          s += a
        )
          i.push(d(e, s, s + a > u ? u : s + a));
        return (
          1 === o
            ? ((r = e[t - 1]), i.push(n[r >> 2] + n[(r << 4) & 63] + "=="))
            : 2 === o &&
              ((r = (e[t - 2] << 8) + e[t - 1]),
              i.push(n[r >> 10] + n[(r >> 4) & 63] + n[(r << 2) & 63] + "=")),
          i.join("")
        );
      }
      ((o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63));
    },
    5654: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(4846),
        o = t(5651);
      function i(e, r) {
        for (
          var t = e.toString(2).split(".")[0],
            n = r.toString(2).split(".")[0],
            o = Math.min(t.length, n.length),
            i = t.slice(t.length - o),
            a = n.slice(n.length - o),
            s = new Array(o),
            u = o - 1;
          u >= 0;
          u--
        )
          s[u] = "1" === i[u] && "1" === a[u] ? "1" : "0";
        return parseInt(s.join(""), 2);
      }
      r.default = {
        booleanToBytes: function (e) {
          if ("boolean" !== typeof e)
            throw new Error("Boolean input is expected");
          return e ? [1] : [0];
        },
        bytesToBoolean: function (e) {
          if (1 !== e.length) throw new Error("Wrong bytes length");
          return !!e[0];
        },
        shortToByteArray: function (e) {
          if ("number" !== typeof e)
            throw new Error("Numeric input is expected");
          return n.default.int16ToBytes(e, !0);
        },
        bytesToByteArrayWithSize: function (e) {
          if (!(e instanceof Array || e instanceof Uint8Array))
            throw new Error("Byte array or Uint8Array input is expected");
          if (
            e instanceof Array &&
            !e.every(function (e) {
              return "number" === typeof e;
            })
          )
            throw new Error("Byte array contains non-numeric elements");
          e instanceof Array || (e = Array.prototype.slice.call(e));
          var r = n.default.int16ToBytes(e.length, !0);
          return r.concat(e);
        },
        longToByteArray: function (e, r) {
          if ("number" !== typeof e)
            throw new Error("Numeric input is expected");
          for (var t = new Array(r), n = r - 1; n >= 0; n--)
            ((t[n] = 255 & e), (e /= 256));
          return t;
        },
        signLongToByteArray: function (e) {
          if ("number" !== typeof e)
            throw new Error("Numeric input is expected");
          for (var r = [0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < r.length; t++) {
            var n = 255 & e;
            ((r[t] = n), (e = (e - n) / 256));
          }
          return r.reverse();
        },
        bigNumberToByteArray: function (e, r) {
          if (!(e instanceof o.BigNumber))
            throw new Error("BigNumber input is expected");
          for (
            var t = i.bind(null, new o.BigNumber(255)), n = [], a = r - 1;
            a >= 0;
            a--
          )
            ((n[a] = t(e)), (e = e.div(256)));
          return n;
        },
        signBigNumberToByteArray: function (e) {
          if (!(e instanceof o.BigNumber))
            throw new Error("BigNumber input is expected");
          var r = e.lt(new o.BigNumber(0)),
            t = i.bind(null, new o.BigNumber(255));
          r && (e = e.plus(1, 10));
          for (var n = new Array(8), a = 7; a >= 0; a--)
            ((n[a] = t(e)), r && (n[a] = 255 & ~n[a]), (e = e.div(256)));
          return n;
        },
        stringToByteArray: function (e) {
          if (("number" === typeof e && (e = String(e)), "string" !== typeof e))
            throw new Error("String input is expected");
          return n.default.stringToByteArray(e);
        },
        stringToByteArrayWithSize: function (e) {
          if (("number" === typeof e && (e = String(e)), "string" !== typeof e))
            throw new Error("String input is expected");
          var r = n.default.stringToByteArray(e),
            t = n.default.int16ToBytes(r.length, !0);
          return t.concat(r);
        },
      };
    },
    6802: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(3959),
        o = {
          networkByte: n.MAINNET_BYTE,
          logLevel: "warning",
          minimalSeedLength: 15,
        },
        i = (function () {
          function e() {
            this.props = Object.assign(Object.create(null), o);
          }
          return (
            (e.prototype.getNetworkByte = function () {
              return this.props.networkByte;
            }),
            (e.prototype.getLogLevel = function () {
              return this.props.logLevel;
            }),
            (e.prototype.set = function (e) {
              Object.assign(this.props, e);
            }),
            (e.prototype.get = function (e) {
              return this.props[e];
            }),
            (e.prototype.clear = function () {
              this.props = Object.assign(Object.create(null), o);
            }),
            e
          );
        })();
      r.config = new i();
    },
    6803: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = t(816),
        o = t(6804),
        i = t(4571),
        a = t(6805),
        s = t(4846),
        u = t(6806),
        c = t(6807),
        l = t(4847),
        f = t(3959),
        h = t(3960);
      function p(e) {
        var r;
        r = "string" === typeof e ? s.default.stringToByteArray(e) : e;
        var t = s.default.byteArrayToWordArrayEx(Uint8Array.from(r)),
          o = n.SHA256(t);
        return s.default.wordArrayToByteArrayEx(o);
      }
      function d(e) {
        return a.blake2b(e, null, 32);
      }
      function y(e) {
        return c.keccak256.array(e);
      }
      function g(e) {
        return y(d(e));
      }
      function m(e) {
        var r = new Uint8Array(s.default.int32ToBytes(h.INITIAL_NONCE, !0)),
          t = l.concatUint8Arrays(r, e),
          n = g(t);
        return p(n);
      }
      function w(e, r) {
        void 0 === r && (r = 5e3);
        while (r--) e = s.default.byteArrayToHexString(p(e));
        return e;
      }
      r.default = {
        buildTransactionSignature: function (e, r) {
          if (!e || !(e instanceof Uint8Array))
            throw new Error("Missing or invalid data");
          if (!r || "string" !== typeof r)
            throw new Error("Missing or invalid private key");
          var t = i.default.decode(r);
          if (t.length !== h.PRIVATE_KEY_LENGTH)
            throw new Error("Invalid public key");
          var n = o.default.sign(t, e, u.default.randomUint8Array(64));
          return i.default.encode(n);
        },
        isValidSignature: function (e, r, t) {
          if (!e || !(e instanceof Uint8Array))
            throw new Error("Missing or invalid data");
          if (!r || "string" !== typeof r)
            throw new Error("Missing or invalid signature");
          if (!t || "string" !== typeof t)
            throw new Error("Missing or invalid public key");
          var n = i.default.decode(r),
            a = i.default.decode(t);
          if (a.length !== h.PUBLIC_KEY_LENGTH)
            throw new Error("Invalid public key");
          return o.default.verify(a, e, n);
        },
        buildTransactionId: function (e) {
          if (!e || !(e instanceof Uint8Array))
            throw new Error("Missing or invalid data");
          var r = d(e);
          return i.default.encode(r);
        },
        buildKeyPair: function (e) {
          if (!e || "string" !== typeof e)
            throw new Error("Missing or invalid seed phrase");
          var r = Uint8Array.from(s.default.stringToByteArray(e)),
            t = m(r),
            n = o.default.generateKeyPair(t);
          return { privateKey: n.private, publicKey: n.public };
        },
        isValidAddress: function (e) {
          if (!e || "string" !== typeof e)
            throw new Error("Missing or invalid address");
          var r = i.default.decode(e);
          if (1 !== r[0] || r[1] !== f.config.getNetworkByte()) return !1;
          for (
            var t = r.slice(0, 22),
              n = r.slice(22, 26),
              o = g(t).slice(0, 4),
              a = 0;
            a < 4;
            a++
          )
            if (n[a] !== o[a]) return !1;
          return !0;
        },
        buildRawAddress: function (e) {
          if (
            !e ||
            e.length !== h.PUBLIC_KEY_LENGTH ||
            !(e instanceof Uint8Array)
          )
            throw new Error("Missing or invalid public key");
          var r = Uint8Array.from([
              h.ADDRESS_VERSION,
              f.config.getNetworkByte(),
            ]),
            t = Uint8Array.from(g(e).slice(0, 20)),
            n = l.concatUint8Arrays(r, t),
            o = Uint8Array.from(g(n).slice(0, 4));
          return i.default.encode(l.concatUint8Arrays(n, o));
        },
        encryptSeed: function (e, r, t) {
          if (!e || "string" !== typeof e) throw new Error("Seed is required");
          if (!r || "string" !== typeof r)
            throw new Error("Password is required");
          return ((r = w(r, t)), n.AES.encrypt(e, r).toString());
        },
        decryptSeed: function (e, r, t) {
          if (!e || "string" !== typeof e)
            throw new Error("Encrypted seed is required");
          if (!r || "string" !== typeof r)
            throw new Error("Password is required");
          r = w(r, t);
          var o = n.AES.decrypt(e, r);
          return s.default.hexStringToString(o.toString());
        },
        generateRandomUint32Array: function (e) {
          if (!e || e < 0) throw new Error("Missing or invalid array length");
          for (
            var r = u.default.randomUint8Array(e),
              t = u.default.randomUint8Array(e),
              n = new Uint32Array(e),
              o = 0;
            o < e;
            o++
          ) {
            var i = s.default.byteArrayToHexString(p("" + r[o] + t[o])),
              a = parseInt(i.slice(0, 13), 16);
            n.set([a], o);
          }
          return n;
        },
      };
    },
    6804: function (e, r, t) {
      "use strict";
      r.__esModule = !0;
      var n = Object.create(null),
        o = function (e) {
          var r,
            t = new Float64Array(16);
          if (e) for (r = 0; r < e.length; r++) t[r] = e[r];
          return t;
        },
        i = (new Uint8Array(16), new Uint8Array(32));
      i[0] = 9;
      var a = o(),
        s = o([1]),
        u = o([56129, 1]),
        c = o([
          30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
          16505, 36039, 65139, 11119, 27886, 20995,
        ]),
        l = o([
          61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
          33010, 6542, 64743, 22239, 55772, 9222,
        ]),
        f = o([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        h = o([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]),
        p = o([
          41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
          153, 11085, 57099, 20417, 9344, 11139,
        ]);
      function d(e, r, t, n) {
        ((e[r] = (t >> 24) & 255),
          (e[r + 1] = (t >> 16) & 255),
          (e[r + 2] = (t >> 8) & 255),
          (e[r + 3] = 255 & t),
          (e[r + 4] = (n >> 24) & 255),
          (e[r + 5] = (n >> 16) & 255),
          (e[r + 6] = (n >> 8) & 255),
          (e[r + 7] = 255 & n));
      }
      function y(e, r, t, n, o) {
        var i,
          a = 0;
        for (i = 0; i < o; i++) a |= e[r + i] ^ t[n + i];
        return (1 & ((a - 1) >>> 8)) - 1;
      }
      function g(e, r, t, n) {
        return y(e, r, t, n, 32);
      }
      function m(e, r) {
        for (var t = 0; t < 16; t++) e[t] = 0 | r[t];
      }
      function w(e) {
        var r,
          t,
          n = 1;
        for (r = 0; r < 16; r++)
          ((t = e[r] + n + 65535),
            (n = Math.floor(t / 65536)),
            (e[r] = t - 65536 * n));
        e[0] += n - 1 + 37 * (n - 1);
      }
      function A(e, r, t) {
        for (var n, o = ~(t - 1), i = 0; i < 16; i++)
          ((n = o & (e[i] ^ r[i])), (e[i] ^= n), (r[i] ^= n));
      }
      function v(e, r) {
        var t,
          n,
          i,
          a = o(),
          s = o();
        for (t = 0; t < 16; t++) s[t] = r[t];
        for (w(s), w(s), w(s), n = 0; n < 2; n++) {
          for (a[0] = s[0] - 65517, t = 1; t < 15; t++)
            ((a[t] = s[t] - 65535 - ((a[t - 1] >> 16) & 1)),
              (a[t - 1] &= 65535));
          ((a[15] = s[15] - 32767 - ((a[14] >> 16) & 1)),
            (i = (a[15] >> 16) & 1),
            (a[14] &= 65535),
            A(s, a, 1 - i));
        }
        for (t = 0; t < 16; t++)
          ((e[2 * t] = 255 & s[t]), (e[2 * t + 1] = s[t] >> 8));
      }
      function b(e, r) {
        var t = new Uint8Array(32),
          n = new Uint8Array(32);
        return (v(t, e), v(n, r), g(t, 0, n, 0));
      }
      function E(e) {
        var r = new Uint8Array(32);
        return (v(r, e), 1 & r[0]);
      }
      function _(e, r) {
        for (var t = 0; t < 16; t++) e[t] = r[2 * t] + (r[2 * t + 1] << 8);
        e[15] &= 32767;
      }
      function S(e, r, t) {
        for (var n = 0; n < 16; n++) e[n] = r[n] + t[n];
      }
      function T(e, r, t) {
        for (var n = 0; n < 16; n++) e[n] = r[n] - t[n];
      }
      function N(e, r, t) {
        var n,
          o,
          i = 0,
          a = 0,
          s = 0,
          u = 0,
          c = 0,
          l = 0,
          f = 0,
          h = 0,
          p = 0,
          d = 0,
          y = 0,
          g = 0,
          m = 0,
          w = 0,
          A = 0,
          v = 0,
          b = 0,
          E = 0,
          _ = 0,
          S = 0,
          T = 0,
          N = 0,
          I = 0,
          B = 0,
          R = 0,
          k = 0,
          P = 0,
          U = 0,
          O = 0,
          C = 0,
          M = 0,
          x = t[0],
          L = t[1],
          D = t[2],
          j = t[3],
          F = t[4],
          V = t[5],
          G = t[6],
          H = t[7],
          K = t[8],
          q = t[9],
          z = t[10],
          Y = t[11],
          W = t[12],
          X = t[13],
          J = t[14],
          $ = t[15];
        ((n = r[0]),
          (i += n * x),
          (a += n * L),
          (s += n * D),
          (u += n * j),
          (c += n * F),
          (l += n * V),
          (f += n * G),
          (h += n * H),
          (p += n * K),
          (d += n * q),
          (y += n * z),
          (g += n * Y),
          (m += n * W),
          (w += n * X),
          (A += n * J),
          (v += n * $),
          (n = r[1]),
          (a += n * x),
          (s += n * L),
          (u += n * D),
          (c += n * j),
          (l += n * F),
          (f += n * V),
          (h += n * G),
          (p += n * H),
          (d += n * K),
          (y += n * q),
          (g += n * z),
          (m += n * Y),
          (w += n * W),
          (A += n * X),
          (v += n * J),
          (b += n * $),
          (n = r[2]),
          (s += n * x),
          (u += n * L),
          (c += n * D),
          (l += n * j),
          (f += n * F),
          (h += n * V),
          (p += n * G),
          (d += n * H),
          (y += n * K),
          (g += n * q),
          (m += n * z),
          (w += n * Y),
          (A += n * W),
          (v += n * X),
          (b += n * J),
          (E += n * $),
          (n = r[3]),
          (u += n * x),
          (c += n * L),
          (l += n * D),
          (f += n * j),
          (h += n * F),
          (p += n * V),
          (d += n * G),
          (y += n * H),
          (g += n * K),
          (m += n * q),
          (w += n * z),
          (A += n * Y),
          (v += n * W),
          (b += n * X),
          (E += n * J),
          (_ += n * $),
          (n = r[4]),
          (c += n * x),
          (l += n * L),
          (f += n * D),
          (h += n * j),
          (p += n * F),
          (d += n * V),
          (y += n * G),
          (g += n * H),
          (m += n * K),
          (w += n * q),
          (A += n * z),
          (v += n * Y),
          (b += n * W),
          (E += n * X),
          (_ += n * J),
          (S += n * $),
          (n = r[5]),
          (l += n * x),
          (f += n * L),
          (h += n * D),
          (p += n * j),
          (d += n * F),
          (y += n * V),
          (g += n * G),
          (m += n * H),
          (w += n * K),
          (A += n * q),
          (v += n * z),
          (b += n * Y),
          (E += n * W),
          (_ += n * X),
          (S += n * J),
          (T += n * $),
          (n = r[6]),
          (f += n * x),
          (h += n * L),
          (p += n * D),
          (d += n * j),
          (y += n * F),
          (g += n * V),
          (m += n * G),
          (w += n * H),
          (A += n * K),
          (v += n * q),
          (b += n * z),
          (E += n * Y),
          (_ += n * W),
          (S += n * X),
          (T += n * J),
          (N += n * $),
          (n = r[7]),
          (h += n * x),
          (p += n * L),
          (d += n * D),
          (y += n * j),
          (g += n * F),
          (m += n * V),
          (w += n * G),
          (A += n * H),
          (v += n * K),
          (b += n * q),
          (E += n * z),
          (_ += n * Y),
          (S += n * W),
          (T += n * X),
          (N += n * J),
          (I += n * $),
          (n = r[8]),
          (p += n * x),
          (d += n * L),
          (y += n * D),
          (g += n * j),
          (m += n * F),
          (w += n * V),
          (A += n * G),
          (v += n * H),
          (b += n * K),
          (E += n * q),
          (_ += n * z),
          (S += n * Y),
          (T += n * W),
          (N += n * X),
          (I += n * J),
          (B += n * $),
          (n = r[9]),
          (d += n * x),
          (y += n * L),
          (g += n * D),
          (m += n * j),
          (w += n * F),
          (A += n * V),
          (v += n * G),
          (b += n * H),
          (E += n * K),
          (_ += n * q),
          (S += n * z),
          (T += n * Y),
          (N += n * W),
          (I += n * X),
          (B += n * J),
          (R += n * $),
          (n = r[10]),
          (y += n * x),
          (g += n * L),
          (m += n * D),
          (w += n * j),
          (A += n * F),
          (v += n * V),
          (b += n * G),
          (E += n * H),
          (_ += n * K),
          (S += n * q),
          (T += n * z),
          (N += n * Y),
          (I += n * W),
          (B += n * X),
          (R += n * J),
          (k += n * $),
          (n = r[11]),
          (g += n * x),
          (m += n * L),
          (w += n * D),
          (A += n * j),
          (v += n * F),
          (b += n * V),
          (E += n * G),
          (_ += n * H),
          (S += n * K),
          (T += n * q),
          (N += n * z),
          (I += n * Y),
          (B += n * W),
          (R += n * X),
          (k += n * J),
          (P += n * $),
          (n = r[12]),
          (m += n * x),
          (w += n * L),
          (A += n * D),
          (v += n * j),
          (b += n * F),
          (E += n * V),
          (_ += n * G),
          (S += n * H),
          (T += n * K),
          (N += n * q),
          (I += n * z),
          (B += n * Y),
          (R += n * W),
          (k += n * X),
          (P += n * J),
          (U += n * $),
          (n = r[13]),
          (w += n * x),
          (A += n * L),
          (v += n * D),
          (b += n * j),
          (E += n * F),
          (_ += n * V),
          (S += n * G),
          (T += n * H),
          (N += n * K),
          (I += n * q),
          (B += n * z),
          (R += n * Y),
          (k += n * W),
          (P += n * X),
          (U += n * J),
          (O += n * $),
          (n = r[14]),
          (A += n * x),
          (v += n * L),
          (b += n * D),
          (E += n * j),
          (_ += n * F),
          (S += n * V),
          (T += n * G),
          (N += n * H),
          (I += n * K),
          (B += n * q),
          (R += n * z),
          (k += n * Y),
          (P += n * W),
          (U += n * X),
          (O += n * J),
          (C += n * $),
          (n = r[15]),
          (v += n * x),
          (b += n * L),
          (E += n * D),
          (_ += n * j),
          (S += n * F),
          (T += n * V),
          (N += n * G),
          (I += n * H),
          (B += n * K),
          (R += n * q),
          (k += n * z),
          (P += n * Y),
          (U += n * W),
          (O += n * X),
          (C += n * J),
          (M += n * $),
          (i += 38 * b),
          (a += 38 * E),
          (s += 38 * _),
          (u += 38 * S),
          (c += 38 * T),
          (l += 38 * N),
          (f += 38 * I),
          (h += 38 * B),
          (p += 38 * R),
          (d += 38 * k),
          (y += 38 * P),
          (g += 38 * U),
          (m += 38 * O),
          (w += 38 * C),
          (A += 38 * M),
          (o = 1),
          (n = i + o + 65535),
          (o = Math.floor(n / 65536)),
          (i = n - 65536 * o),
          (n = a + o + 65535),
          (o = Math.floor(n / 65536)),
          (a = n - 65536 * o),
          (n = s + o + 65535),
          (o = Math.floor(n / 65536)),
          (s = n - 65536 * o),
          (n = u + o + 65535),
          (o = Math.floor(n / 65536)),
          (u = n - 65536 * o),
          (n = c + o + 65535),
          (o = Math.floor(n / 65536)),
          (c = n - 65536 * o),
          (n = l + o + 65535),
          (o = Math.floor(n / 65536)),
          (l = n - 65536 * o),
          (n = f + o + 65535),
          (o = Math.floor(n / 65536)),
          (f = n - 65536 * o),
          (n = h + o + 65535),
          (o = Math.floor(n / 65536)),
          (h = n - 65536 * o),
          (n = p + o + 65535),
          (o = Math.floor(n / 65536)),
          (p = n - 65536 * o),
          (n = d + o + 65535),
          (o = Math.floor(n / 65536)),
          (d = n - 65536 * o),
          (n = y + o + 65535),
          (o = Math.floor(n / 65536)),
          (y = n - 65536 * o),
          (n = g + o + 65535),
          (o = Math.floor(n / 65536)),
          (g = n - 65536 * o),
          (n = m + o + 65535),
          (o = Math.floor(n / 65536)),
          (m = n - 65536 * o),
          (n = w + o + 65535),
          (o = Math.floor(n / 65536)),
          (w = n - 65536 * o),
          (n = A + o + 65535),
          (o = Math.floor(n / 65536)),
          (A = n - 65536 * o),
          (n = v + o + 65535),
          (o = Math.floor(n / 65536)),
          (v = n - 65536 * o),
          (i += o - 1 + 37 * (o - 1)),
          (o = 1),
          (n = i + o + 65535),
          (o = Math.floor(n / 65536)),
          (i = n - 65536 * o),
          (n = a + o + 65535),
          (o = Math.floor(n / 65536)),
          (a = n - 65536 * o),
          (n = s + o + 65535),
          (o = Math.floor(n / 65536)),
          (s = n - 65536 * o),
          (n = u + o + 65535),
          (o = Math.floor(n / 65536)),
          (u = n - 65536 * o),
          (n = c + o + 65535),
          (o = Math.floor(n / 65536)),
          (c = n - 65536 * o),
          (n = l + o + 65535),
          (o = Math.floor(n / 65536)),
          (l = n - 65536 * o),
          (n = f + o + 65535),
          (o = Math.floor(n / 65536)),
          (f = n - 65536 * o),
          (n = h + o + 65535),
          (o = Math.floor(n / 65536)),
          (h = n - 65536 * o),
          (n = p + o + 65535),
          (o = Math.floor(n / 65536)),
          (p = n - 65536 * o),
          (n = d + o + 65535),
          (o = Math.floor(n / 65536)),
          (d = n - 65536 * o),
          (n = y + o + 65535),
          (o = Math.floor(n / 65536)),
          (y = n - 65536 * o),
          (n = g + o + 65535),
          (o = Math.floor(n / 65536)),
          (g = n - 65536 * o),
          (n = m + o + 65535),
          (o = Math.floor(n / 65536)),
          (m = n - 65536 * o),
          (n = w + o + 65535),
          (o = Math.floor(n / 65536)),
          (w = n - 65536 * o),
          (n = A + o + 65535),
          (o = Math.floor(n / 65536)),
          (A = n - 65536 * o),
          (n = v + o + 65535),
          (o = Math.floor(n / 65536)),
          (v = n - 65536 * o),
          (i += o - 1 + 37 * (o - 1)),
          (e[0] = i),
          (e[1] = a),
          (e[2] = s),
          (e[3] = u),
          (e[4] = c),
          (e[5] = l),
          (e[6] = f),
          (e[7] = h),
          (e[8] = p),
          (e[9] = d),
          (e[10] = y),
          (e[11] = g),
          (e[12] = m),
          (e[13] = w),
          (e[14] = A),
          (e[15] = v));
      }
      function I(e, r) {
        N(e, r, r);
      }
      function B(e, r) {
        var t,
          n = o();
        for (t = 0; t < 16; t++) n[t] = r[t];
        for (t = 253; t >= 0; t--) (I(n, n), 2 !== t && 4 !== t && N(n, n, r));
        for (t = 0; t < 16; t++) e[t] = n[t];
      }
      function R(e, r) {
        var t,
          n = o();
        for (t = 0; t < 16; t++) n[t] = r[t];
        for (t = 250; t >= 0; t--) (I(n, n), 1 !== t && N(n, n, r));
        for (t = 0; t < 16; t++) e[t] = n[t];
      }
      function k(e, r, t) {
        var n,
          i,
          a = new Uint8Array(32),
          s = new Float64Array(80),
          c = o(),
          l = o(),
          f = o(),
          h = o(),
          p = o(),
          d = o();
        for (i = 0; i < 31; i++) a[i] = r[i];
        for (
          a[31] = (127 & r[31]) | 64, a[0] &= 248, _(s, t), i = 0;
          i < 16;
          i++
        )
          ((l[i] = s[i]), (h[i] = c[i] = f[i] = 0));
        for (c[0] = h[0] = 1, i = 254; i >= 0; --i)
          ((n = (a[i >>> 3] >>> (7 & i)) & 1),
            A(c, l, n),
            A(f, h, n),
            S(p, c, f),
            T(c, c, f),
            S(f, l, h),
            T(l, l, h),
            I(h, p),
            I(d, c),
            N(c, f, c),
            N(f, l, p),
            S(p, c, f),
            T(c, c, f),
            I(l, c),
            T(f, h, d),
            N(c, f, u),
            S(c, c, h),
            N(f, f, c),
            N(c, h, d),
            N(h, l, s),
            I(l, p),
            A(c, l, n),
            A(f, h, n));
        for (i = 0; i < 16; i++)
          ((s[i + 16] = c[i]),
            (s[i + 32] = f[i]),
            (s[i + 48] = l[i]),
            (s[i + 64] = h[i]));
        var y = s.subarray(32),
          g = s.subarray(16);
        return (B(y, y), N(g, g, y), v(e, g), 0);
      }
      function P(e, r) {
        return k(e, r, i);
      }
      var U = [
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ];
      function O(e, r, t, n) {
        var o,
          i,
          a,
          s,
          u,
          c,
          l,
          f,
          h,
          p,
          d,
          y,
          g,
          m,
          w,
          A,
          v,
          b,
          E,
          _,
          S,
          T,
          N,
          I,
          B,
          R,
          k = new Int32Array(16),
          P = new Int32Array(16),
          O = e[0],
          C = e[1],
          M = e[2],
          x = e[3],
          L = e[4],
          D = e[5],
          j = e[6],
          F = e[7],
          V = r[0],
          G = r[1],
          H = r[2],
          K = r[3],
          q = r[4],
          z = r[5],
          Y = r[6],
          W = r[7],
          X = 0;
        while (n >= 128) {
          for (E = 0; E < 16; E++)
            ((_ = 8 * E + X),
              (k[E] =
                (t[_ + 0] << 24) |
                (t[_ + 1] << 16) |
                (t[_ + 2] << 8) |
                t[_ + 3]),
              (P[E] =
                (t[_ + 4] << 24) |
                (t[_ + 5] << 16) |
                (t[_ + 6] << 8) |
                t[_ + 7]));
          for (E = 0; E < 80; E++)
            if (
              ((o = O),
              (i = C),
              (a = M),
              (s = x),
              (u = L),
              (c = D),
              (l = j),
              (f = F),
              (h = V),
              (p = G),
              (d = H),
              (y = K),
              (g = q),
              (m = z),
              (w = Y),
              (A = W),
              (S = F),
              (T = W),
              (N = 65535 & T),
              (I = T >>> 16),
              (B = 65535 & S),
              (R = S >>> 16),
              (S =
                ((L >>> 14) | (q << 18)) ^
                ((L >>> 18) | (q << 14)) ^
                ((q >>> 9) | (L << 23))),
              (T =
                ((q >>> 14) | (L << 18)) ^
                ((q >>> 18) | (L << 14)) ^
                ((L >>> 9) | (q << 23))),
              (N += 65535 & T),
              (I += T >>> 16),
              (B += 65535 & S),
              (R += S >>> 16),
              (S = (L & D) ^ (~L & j)),
              (T = (q & z) ^ (~q & Y)),
              (N += 65535 & T),
              (I += T >>> 16),
              (B += 65535 & S),
              (R += S >>> 16),
              (S = U[2 * E]),
              (T = U[2 * E + 1]),
              (N += 65535 & T),
              (I += T >>> 16),
              (B += 65535 & S),
              (R += S >>> 16),
              (S = k[E % 16]),
              (T = P[E % 16]),
              (N += 65535 & T),
              (I += T >>> 16),
              (B += 65535 & S),
              (R += S >>> 16),
              (I += N >>> 16),
              (B += I >>> 16),
              (R += B >>> 16),
              (v = (65535 & B) | (R << 16)),
              (b = (65535 & N) | (I << 16)),
              (S = v),
              (T = b),
              (N = 65535 & T),
              (I = T >>> 16),
              (B = 65535 & S),
              (R = S >>> 16),
              (S =
                ((O >>> 28) | (V << 4)) ^
                ((V >>> 2) | (O << 30)) ^
                ((V >>> 7) | (O << 25))),
              (T =
                ((V >>> 28) | (O << 4)) ^
                ((O >>> 2) | (V << 30)) ^
                ((O >>> 7) | (V << 25))),
              (N += 65535 & T),
              (I += T >>> 16),
              (B += 65535 & S),
              (R += S >>> 16),
              (S = (O & C) ^ (O & M) ^ (C & M)),
              (T = (V & G) ^ (V & H) ^ (G & H)),
              (N += 65535 & T),
              (I += T >>> 16),
              (B += 65535 & S),
              (R += S >>> 16),
              (I += N >>> 16),
              (B += I >>> 16),
              (R += B >>> 16),
              (f = (65535 & B) | (R << 16)),
              (A = (65535 & N) | (I << 16)),
              (S = s),
              (T = y),
              (N = 65535 & T),
              (I = T >>> 16),
              (B = 65535 & S),
              (R = S >>> 16),
              (S = v),
              (T = b),
              (N += 65535 & T),
              (I += T >>> 16),
              (B += 65535 & S),
              (R += S >>> 16),
              (I += N >>> 16),
              (B += I >>> 16),
              (R += B >>> 16),
              (s = (65535 & B) | (R << 16)),
              (y = (65535 & N) | (I << 16)),
              (C = o),
              (M = i),
              (x = a),
              (L = s),
              (D = u),
              (j = c),
              (F = l),
              (O = f),
              (G = h),
              (H = p),
              (K = d),
              (q = y),
              (z = g),
              (Y = m),
              (W = w),
              (V = A),
              E % 16 === 15)
            )
              for (_ = 0; _ < 16; _++)
                ((S = k[_]),
                  (T = P[_]),
                  (N = 65535 & T),
                  (I = T >>> 16),
                  (B = 65535 & S),
                  (R = S >>> 16),
                  (S = k[(_ + 9) % 16]),
                  (T = P[(_ + 9) % 16]),
                  (N += 65535 & T),
                  (I += T >>> 16),
                  (B += 65535 & S),
                  (R += S >>> 16),
                  (v = k[(_ + 1) % 16]),
                  (b = P[(_ + 1) % 16]),
                  (S =
                    ((v >>> 1) | (b << 31)) ^
                    ((v >>> 8) | (b << 24)) ^
                    (v >>> 7)),
                  (T =
                    ((b >>> 1) | (v << 31)) ^
                    ((b >>> 8) | (v << 24)) ^
                    ((b >>> 7) | (v << 25))),
                  (N += 65535 & T),
                  (I += T >>> 16),
                  (B += 65535 & S),
                  (R += S >>> 16),
                  (v = k[(_ + 14) % 16]),
                  (b = P[(_ + 14) % 16]),
                  (S =
                    ((v >>> 19) | (b << 13)) ^
                    ((b >>> 29) | (v << 3)) ^
                    (v >>> 6)),
                  (T =
                    ((b >>> 19) | (v << 13)) ^
                    ((v >>> 29) | (b << 3)) ^
                    ((b >>> 6) | (v << 26))),
                  (N += 65535 & T),
                  (I += T >>> 16),
                  (B += 65535 & S),
                  (R += S >>> 16),
                  (I += N >>> 16),
                  (B += I >>> 16),
                  (R += B >>> 16),
                  (k[_] = (65535 & B) | (R << 16)),
                  (P[_] = (65535 & N) | (I << 16)));
          ((S = O),
            (T = V),
            (N = 65535 & T),
            (I = T >>> 16),
            (B = 65535 & S),
            (R = S >>> 16),
            (S = e[0]),
            (T = r[0]),
            (N += 65535 & T),
            (I += T >>> 16),
            (B += 65535 & S),
            (R += S >>> 16),
            (I += N >>> 16),
            (B += I >>> 16),
            (R += B >>> 16),
            (e[0] = O = (65535 & B) | (R << 16)),
            (r[0] = V = (65535 & N) | (I << 16)),
            (S = C),
            (T = G),
            (N = 65535 & T),
            (I = T >>> 16),
            (B = 65535 & S),
            (R = S >>> 16),
            (S = e[1]),
            (T = r[1]),
            (N += 65535 & T),
            (I += T >>> 16),
            (B += 65535 & S),
            (R += S >>> 16),
            (I += N >>> 16),
            (B += I >>> 16),
            (R += B >>> 16),
            (e[1] = C = (65535 & B) | (R << 16)),
            (r[1] = G = (65535 & N) | (I << 16)),
            (S = M),
            (T = H),
            (N = 65535 & T),
            (I = T >>> 16),
            (B = 65535 & S),
            (R = S >>> 16),
            (S = e[2]),
            (T = r[2]),
            (N += 65535 & T),
            (I += T >>> 16),
            (B += 65535 & S),
            (R += S >>> 16),
            (I += N >>> 16),
            (B += I >>> 16),
            (R += B >>> 16),
            (e[2] = M = (65535 & B) | (R << 16)),
            (r[2] = H = (65535 & N) | (I << 16)),
            (S = x),
            (T = K),
            (N = 65535 & T),
            (I = T >>> 16),
            (B = 65535 & S),
            (R = S >>> 16),
            (S = e[3]),
            (T = r[3]),
            (N += 65535 & T),
            (I += T >>> 16),
            (B += 65535 & S),
            (R += S >>> 16),
            (I += N >>> 16),
            (B += I >>> 16),
            (R += B >>> 16),
            (e[3] = x = (65535 & B) | (R << 16)),
            (r[3] = K = (65535 & N) | (I << 16)),
            (S = L),
            (T = q),
            (N = 65535 & T),
            (I = T >>> 16),
            (B = 65535 & S),
            (R = S >>> 16),
            (S = e[4]),
            (T = r[4]),
            (N += 65535 & T),
            (I += T >>> 16),
            (B += 65535 & S),
            (R += S >>> 16),
            (I += N >>> 16),
            (B += I >>> 16),
            (R += B >>> 16),
            (e[4] = L = (65535 & B) | (R << 16)),
            (r[4] = q = (65535 & N) | (I << 16)),
            (S = D),
            (T = z),
            (N = 65535 & T),
            (I = T >>> 16),
            (B = 65535 & S),
            (R = S >>> 16),
            (S = e[5]),
            (T = r[5]),
            (N += 65535 & T),
            (I += T >>> 16),
            (B += 65535 & S),
            (R += S >>> 16),
            (I += N >>> 16),
            (B += I >>> 16),
            (R += B >>> 16),
            (e[5] = D = (65535 & B) | (R << 16)),
            (r[5] = z = (65535 & N) | (I << 16)),
            (S = j),
            (T = Y),
            (N = 65535 & T),
            (I = T >>> 16),
            (B = 65535 & S),
            (R = S >>> 16),
            (S = e[6]),
            (T = r[6]),
            (N += 65535 & T),
            (I += T >>> 16),
            (B += 65535 & S),
            (R += S >>> 16),
            (I += N >>> 16),
            (B += I >>> 16),
            (R += B >>> 16),
            (e[6] = j = (65535 & B) | (R << 16)),
            (r[6] = Y = (65535 & N) | (I << 16)),
            (S = F),
            (T = W),
            (N = 65535 & T),
            (I = T >>> 16),
            (B = 65535 & S),
            (R = S >>> 16),
            (S = e[7]),
            (T = r[7]),
            (N += 65535 & T),
            (I += T >>> 16),
            (B += 65535 & S),
            (R += S >>> 16),
            (I += N >>> 16),
            (B += I >>> 16),
            (R += B >>> 16),
            (e[7] = F = (65535 & B) | (R << 16)),
            (r[7] = W = (65535 & N) | (I << 16)),
            (X += 128),
            (n -= 128));
        }
        return n;
      }
      function C(e, r, t) {
        var n,
          o = new Int32Array(8),
          i = new Int32Array(8),
          a = new Uint8Array(256),
          s = t;
        for (
          o[0] = 1779033703,
            o[1] = 3144134277,
            o[2] = 1013904242,
            o[3] = 2773480762,
            o[4] = 1359893119,
            o[5] = 2600822924,
            o[6] = 528734635,
            o[7] = 1541459225,
            i[0] = 4089235720,
            i[1] = 2227873595,
            i[2] = 4271175723,
            i[3] = 1595750129,
            i[4] = 2917565137,
            i[5] = 725511199,
            i[6] = 4215389547,
            i[7] = 327033209,
            O(o, i, r, t),
            t %= 128,
            n = 0;
          n < t;
          n++
        )
          a[n] = r[s - t + n];
        for (
          a[t] = 128,
            t = 256 - 128 * (t < 112 ? 1 : 0),
            a[t - 9] = 0,
            d(a, t - 8, (s / 536870912) | 0, s << 3),
            O(o, i, a, t),
            n = 0;
          n < 8;
          n++
        )
          d(e, 8 * n, o[n], i[n]);
        return 0;
      }
      function M(e, r) {
        var t = o(),
          n = o(),
          i = o(),
          a = o(),
          s = o(),
          u = o(),
          c = o(),
          f = o(),
          h = o();
        (T(t, e[1], e[0]),
          T(h, r[1], r[0]),
          N(t, t, h),
          S(n, e[0], e[1]),
          S(h, r[0], r[1]),
          N(n, n, h),
          N(i, e[3], r[3]),
          N(i, i, l),
          N(a, e[2], r[2]),
          S(a, a, a),
          T(s, n, t),
          T(u, a, i),
          S(c, a, i),
          S(f, n, t),
          N(e[0], s, u),
          N(e[1], f, c),
          N(e[2], c, u),
          N(e[3], s, f));
      }
      function x(e, r, t) {
        for (var n = 0; n < 4; n++) A(e[n], r[n], t);
      }
      function L(e, r) {
        var t = o(),
          n = o(),
          i = o();
        (B(i, r[2]),
          N(t, r[0], i),
          N(n, r[1], i),
          v(e, n),
          (e[31] ^= E(t) << 7));
      }
      function D(e, r, t) {
        var n, o;
        for (
          m(e[0], a), m(e[1], s), m(e[2], s), m(e[3], a), o = 255;
          o >= 0;
          --o
        )
          ((n = (t[(o / 8) | 0] >> (7 & o)) & 1),
            x(e, r, n),
            M(r, e),
            M(e, e),
            x(e, r, n));
      }
      function j(e, r) {
        var t = [o(), o(), o(), o()];
        (m(t[0], f), m(t[1], h), m(t[2], s), N(t[3], f, h), D(e, t, r));
      }
      var F = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function V(e, r) {
        var t, n, o, i;
        for (n = 63; n >= 32; --n) {
          for (t = 0, o = n - 32, i = n - 12; o < i; ++o)
            ((r[o] += t - 16 * r[n] * F[o - (n - 32)]),
              (t = (r[o] + 128) >> 8),
              (r[o] -= 256 * t));
          ((r[o] += t), (r[n] = 0));
        }
        for (t = 0, o = 0; o < 32; o++)
          ((r[o] += t - (r[31] >> 4) * F[o]), (t = r[o] >> 8), (r[o] &= 255));
        for (o = 0; o < 32; o++) r[o] -= t * F[o];
        for (n = 0; n < 32; n++) ((r[n + 1] += r[n] >> 8), (e[n] = 255 & r[n]));
      }
      function G(e) {
        var r,
          t = new Float64Array(64);
        for (r = 0; r < 64; r++) t[r] = e[r];
        for (r = 0; r < 64; r++) e[r] = 0;
        V(e, t);
      }
      function H(e, r, t, n) {
        new Uint8Array(64);
        var i,
          a,
          s = new Uint8Array(64),
          u = new Uint8Array(64),
          c = new Float64Array(64),
          l = [o(), o(), o(), o()];
        for (i = 0; i < t; i++) e[64 + i] = r[i];
        for (i = 0; i < 32; i++) e[32 + i] = n[i];
        for (
          C(u, e.subarray(32), t + 32), G(u), j(l, u), L(e, l), i = 0;
          i < 32;
          i++
        )
          e[i + 32] = n[32 + i];
        for (C(s, e, t + 64), G(s), i = 0; i < 64; i++) c[i] = 0;
        for (i = 0; i < 32; i++) c[i] = u[i];
        for (i = 0; i < 32; i++)
          for (a = 0; a < 32; a++) c[i + a] += s[i] * n[a];
        return (V(e.subarray(32), c), t + 64);
      }
      function K(e, r, t, n, i) {
        new Uint8Array(64);
        var a,
          s,
          u = new Uint8Array(64),
          c = new Uint8Array(64),
          l = new Float64Array(64),
          f = [o(), o(), o(), o()];
        for (e[0] = 254, a = 1; a < 32; a++) e[a] = 255;
        for (a = 0; a < 32; a++) e[32 + a] = n[a];
        for (a = 0; a < t; a++) e[64 + a] = r[a];
        for (a = 0; a < 64; a++) e[t + 64 + a] = i[a];
        for (C(c, e, t + 128), G(c), j(f, c), L(e, f), a = 0; a < 32; a++)
          e[a + 32] = n[32 + a];
        for (C(u, e, t + 64), G(u), a = 0; a < 64; a++) e[t + 64 + a] = 0;
        for (a = 0; a < 64; a++) l[a] = 0;
        for (a = 0; a < 32; a++) l[a] = c[a];
        for (a = 0; a < 32; a++)
          for (s = 0; s < 32; s++) l[a + s] += u[a] * n[s];
        return (V(e.subarray(32, t + 64), l), t + 64);
      }
      function q(e, r, t, n, i) {
        for (
          var a = new Uint8Array(64), s = [o(), o(), o(), o()], u = 0;
          u < 32;
          u++
        )
          a[u] = n[u];
        ((a[0] &= 248),
          (a[31] &= 127),
          (a[31] |= 64),
          j(s, a),
          L(a.subarray(32), s));
        var c,
          l = 128 & a[63];
        return ((c = i ? K(e, r, t, a, i) : H(e, r, t, a)), (e[63] |= l), c);
      }
      function z(e, r) {
        var t = o(),
          n = o(),
          i = o(),
          u = o(),
          l = o(),
          f = o(),
          h = o();
        return (
          m(e[2], s),
          _(e[1], r),
          I(i, e[1]),
          N(u, i, c),
          T(i, i, e[2]),
          S(u, e[2], u),
          I(l, u),
          I(f, l),
          N(h, f, l),
          N(t, h, i),
          N(t, t, u),
          R(t, t),
          N(t, t, i),
          N(t, t, u),
          N(t, t, u),
          N(e[0], t, u),
          I(n, e[0]),
          N(n, n, u),
          b(n, i) && N(e[0], e[0], p),
          I(n, e[0]),
          N(n, n, u),
          b(n, i)
            ? -1
            : (E(e[0]) === r[31] >> 7 && T(e[0], a, e[0]),
              N(e[3], e[0], e[1]),
              0)
        );
      }
      function Y(e, r, t, n) {
        var i,
          a,
          s = new Uint8Array(32),
          u = new Uint8Array(64),
          c = [o(), o(), o(), o()],
          l = [o(), o(), o(), o()];
        if (((a = -1), t < 64)) return -1;
        if (z(l, n)) return -1;
        for (i = 0; i < t; i++) e[i] = r[i];
        for (i = 0; i < 32; i++) e[i + 32] = n[i];
        if (
          (C(u, e, t),
          G(u),
          D(c, l, u),
          j(l, r.subarray(32)),
          M(c, l),
          L(s, c),
          (t -= 64),
          g(r, 0, s, 0))
        ) {
          for (i = 0; i < t; i++) e[i] = 0;
          return -1;
        }
        for (i = 0; i < t; i++) e[i] = r[i + 64];
        return ((a = t), a);
      }
      function W(e) {
        var r = new Uint8Array(32),
          t = o(),
          n = o(),
          i = o();
        return (
          _(t, e),
          S(n, t, s),
          T(i, t, s),
          B(n, n),
          N(n, n, i),
          v(r, n),
          r
        );
      }
      function X(e, r, t, n) {
        var o = W(n);
        return ((o[31] |= 128 & r[63]), (r[63] &= 127), Y(e, r, t, o));
      }
      function J() {
        for (var e, r, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        for (r = 0; r < arguments.length; r++)
          if (
            "[object Uint8Array]" !==
            (e = Object.prototype.toString.call(arguments[r]))
          )
            throw new TypeError("unexpected type " + e + ", use Uint8Array");
      }
      ((n.sharedKey = function (e, r) {
        if ((J(r, e), 32 !== r.length))
          throw new Error("wrong public key length");
        if (32 !== e.length) throw new Error("wrong secret key length");
        var t = new Uint8Array(32);
        return (k(t, e, r), t);
      }),
        (n.signMessage = function (e, r, t) {
          if ((J(r, e), 32 !== e.length))
            throw new Error("wrong secret key length");
          if (t) {
            if ((J(t), 64 !== t.length))
              throw new Error("wrong random data length");
            var n = new Uint8Array(128 + r.length);
            return (
              q(n, r, r.length, e, t),
              new Uint8Array(n.subarray(0, 64 + r.length))
            );
          }
          var o = new Uint8Array(64 + r.length);
          return (q(o, r, r.length, e), o);
        }),
        (n.openMessage = function (e, r) {
          if ((J(r, e), 32 !== e.length))
            throw new Error("wrong public key length");
          var t = new Uint8Array(r.length),
            n = X(t, r, r.length, e);
          if (n < 0) return null;
          for (var o = new Uint8Array(n), i = 0; i < o.length; i++) o[i] = t[i];
          return o;
        }),
        (n.sign = function (e, r, t) {
          if ((J(e, r), 32 !== e.length))
            throw new Error("wrong secret key length");
          if (t && (J(t), 64 !== t.length))
            throw new Error("wrong random data length");
          var n = new Uint8Array((t ? 128 : 64) + r.length);
          q(n, r, r.length, e, t);
          for (var o = new Uint8Array(64), i = 0; i < o.length; i++)
            o[i] = n[i];
          return o;
        }),
        (n.verify = function (e, r, t) {
          if ((J(r, t, e), 64 !== t.length))
            throw new Error("wrong signature length");
          if (32 !== e.length) throw new Error("wrong public key length");
          var n,
            o = new Uint8Array(64 + r.length),
            i = new Uint8Array(64 + r.length);
          for (n = 0; n < 64; n++) o[n] = t[n];
          for (n = 0; n < r.length; n++) o[n + 64] = r[n];
          return X(i, o, o.length, e) >= 0;
        }),
        (n.generateKeyPair = function (e) {
          if ((J(e), 32 !== e.length)) throw new Error("wrong seed length");
          for (
            var r = new Uint8Array(32), t = new Uint8Array(32), n = 0;
            n < 32;
            n++
          )
            r[n] = e[n];
          return (
            P(t, r),
            (r[0] &= 248),
            (r[31] &= 127),
            (r[31] |= 64),
            (t[31] &= 127),
            { public: t, private: r }
          );
        }),
        (r["default"] = n));
    },
    6805: function (e, r, t) {
      "use strict";
      (function (e) {
        r.__esModule = !0;
        var t = "Input must be an string, Buffer or Uint8Array";
        function n(r) {
          var n;
          if (r instanceof Uint8Array) n = r;
          else if (r instanceof e) n = new Uint8Array(r);
          else {
            if ("string" !== typeof r) throw new Error(t);
            n = new Uint8Array(e.from(r, "utf8"));
          }
          return n;
        }
        function o(e) {
          return Array.prototype.map
            .call(e, function (e) {
              return (e < 16 ? "0" : "") + e.toString(16);
            })
            .join("");
        }
        function i(e, r, t) {
          var n = e[r] + e[t],
            o = e[r + 1] + e[t + 1];
          (n >= 4294967296 && o++, (e[r] = n), (e[r + 1] = o));
        }
        function a(e, r, t, n) {
          var o = e[r] + t;
          t < 0 && (o += 4294967296);
          var i = e[r + 1] + n;
          (o >= 4294967296 && i++, (e[r] = o), (e[r + 1] = i));
        }
        function s(e, r) {
          return e[r] ^ (e[r + 1] << 8) ^ (e[r + 2] << 16) ^ (e[r + 3] << 24);
        }
        function u(e, r, t, n, o, s) {
          var u = p[o],
            c = p[o + 1],
            l = p[s],
            f = p[s + 1];
          (i(h, e, r), a(h, e, u, c));
          var d = h[n] ^ h[e],
            y = h[n + 1] ^ h[e + 1];
          ((h[n] = y),
            (h[n + 1] = d),
            i(h, t, n),
            (d = h[r] ^ h[t]),
            (y = h[r + 1] ^ h[t + 1]),
            (h[r] = (d >>> 24) ^ (y << 8)),
            (h[r + 1] = (y >>> 24) ^ (d << 8)),
            i(h, e, r),
            a(h, e, l, f),
            (d = h[n] ^ h[e]),
            (y = h[n + 1] ^ h[e + 1]),
            (h[n] = (d >>> 16) ^ (y << 16)),
            (h[n + 1] = (y >>> 16) ^ (d << 16)),
            i(h, t, n),
            (d = h[r] ^ h[t]),
            (y = h[r + 1] ^ h[t + 1]),
            (h[r] = (y >>> 31) ^ (d << 1)),
            (h[r + 1] = (d >>> 31) ^ (y << 1)));
        }
        var c = new Uint32Array([
            4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
            1013904242, 1595750129, 2773480762, 2917565137, 1359893119,
            725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225,
          ]),
          l = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8,
            9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13,
            10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10,
            4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
            2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15,
            14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9,
            5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7,
            1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8,
            9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
          ],
          f = new Uint8Array(
            l.map(function (e) {
              return 2 * e;
            }),
          ),
          h = new Uint32Array(32),
          p = new Uint32Array(32);
        function d(e, r) {
          var t = 0;
          for (t = 0; t < 16; t++) ((h[t] = e.h[t]), (h[t + 16] = c[t]));
          for (
            h[24] = h[24] ^ e.t,
              h[25] = h[25] ^ (e.t / 4294967296),
              r && ((h[28] = ~h[28]), (h[29] = ~h[29])),
              t = 0;
            t < 32;
            t++
          )
            p[t] = s(e.b, 4 * t);
          for (t = 0; t < 12; t++)
            (u(0, 8, 16, 24, f[16 * t + 0], f[16 * t + 1]),
              u(2, 10, 18, 26, f[16 * t + 2], f[16 * t + 3]),
              u(4, 12, 20, 28, f[16 * t + 4], f[16 * t + 5]),
              u(6, 14, 22, 30, f[16 * t + 6], f[16 * t + 7]),
              u(0, 10, 20, 30, f[16 * t + 8], f[16 * t + 9]),
              u(2, 12, 22, 24, f[16 * t + 10], f[16 * t + 11]),
              u(4, 14, 16, 26, f[16 * t + 12], f[16 * t + 13]),
              u(6, 8, 18, 28, f[16 * t + 14], f[16 * t + 15]));
          for (t = 0; t < 16; t++) e.h[t] = e.h[t] ^ h[t] ^ h[t + 16];
        }
        function y(e, r) {
          if (0 === e || e > 64)
            throw new Error("Illegal output length, expected 0 < length <= 64");
          if (r && r.length > 64)
            throw new Error(
              "Illegal key, expected Uint8Array with 0 < length <= 64",
            );
          for (
            var t = {
                b: new Uint8Array(128),
                h: new Uint32Array(16),
                t: 0,
                c: 0,
                outlen: e,
              },
              n = 0;
            n < 16;
            n++
          )
            t.h[n] = c[n];
          var o = r ? r.length : 0;
          return (
            (t.h[0] ^= 16842752 ^ (o << 8) ^ e),
            r && (g(t, r), (t.c = 128)),
            t
          );
        }
        function g(e, r) {
          for (var t = 0; t < r.length; t++)
            (128 === e.c && ((e.t += e.c), d(e, !1), (e.c = 0)),
              (e.b[e.c++] = r[t]));
        }
        function m(e) {
          e.t += e.c;
          while (e.c < 128) e.b[e.c++] = 0;
          d(e, !0);
          for (var r = new Uint8Array(e.outlen), t = 0; t < e.outlen; t++)
            r[t] = e.h[t >> 2] >> (8 * (3 & t));
          return r;
        }
        function w(e, r, t) {
          ((t = t || 64), (e = n(e)));
          var o = y(t, r);
          return (g(o, e), m(o));
        }
        function A(e, r, t) {
          var n = w(e, r, t);
          return o(n);
        }
        ((r.blake2bInit = y),
          (r.blake2bUpdate = g),
          (r.blake2bFinal = m),
          (r.blake2b = w),
          (r.blake2bHex = A));
      }).call(this, t(2).Buffer);
    },
    6806: function (e, r, t) {
      "use strict";
      (function (e) {
        function n(e, r) {
          var n = t(2764),
            o = n.randomBytes(e);
          switch (r.type) {
            case "Array":
              return [].slice.call(o);
            case "Buffer":
              return o;
            case "Uint8Array":
              for (var i = new Uint8Array(e), a = 0; a < e; ++a)
                i[a] = o.readUInt8(a);
              return i;
            default:
              throw new Error(r.type + " is unsupported.");
          }
        }
        function o(r, t) {
          var n = new Uint8Array(r),
            o = self.crypto || self.msCrypto;
          switch ((o.getRandomValues(n), t.type)) {
            case "Array":
              return [].slice.call(n);
            case "Buffer":
              try {
                new e(1);
              } catch (i) {
                throw new Error(
                  "Buffer not supported in this environment. Use Node.js or Browserify for browser support.",
                );
              }
              return new e(n);
            case "Uint8Array":
              return n;
            default:
              throw new Error(t.type + " is unsupported.");
          }
        }
        function i(e, r) {
          return (
            (r = r || { type: "Array" }),
            "undefined" !== typeof window || "undefined" !== typeof self
              ? o(e, r)
              : n(e, r)
          );
        }
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.default = {
            secureRandom: i,
            randomArray: function (e) {
              return i(e, { type: "Array" });
            },
            randomUint8Array: function (e) {
              return i(e, { type: "Uint8Array" });
            },
            randomBuffer: function (e) {
              return i(e, { type: "Buffer" });
            },
          }));
      }).call(this, t(2).Buffer);
    },
    6807: function (e, r, t) {
      "use strict";
      /**
       * [js-sha3]{@link https://github.com/emn178/js-sha3}
       *
       * @version 0.5.7
       * @author Chen, Yi-Cyuan [emn178@gmail.com]
       * @copyright Chen, Yi-Cyuan 2015-2016
       * @license MIT
       */ r.__esModule = !0;
      for (
        var n = "0123456789abcdef".split(""),
          o = [31, 7936, 2031616, 520093696],
          i = [1, 256, 65536, 16777216],
          a = [6, 1536, 393216, 100663296],
          s = [0, 8, 16, 24],
          u = [
            1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
            2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0,
            136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
            2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648,
            128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545,
            2147483648, 32896, 2147483648, 2147483649, 0, 2147516424,
            2147483648,
          ],
          c = [224, 256, 384, 512],
          l = [128, 256],
          f = ["hex", "buffer", "arrayBuffer", "array"],
          h = function (e, r, t) {
            return function (n) {
              return new S(e, r, e).update(n)[t]();
            };
          },
          p = function (e, r, t) {
            return function (n, o) {
              return new S(e, r, o).update(n)[t]();
            };
          },
          d = function (e, r) {
            var t = h(e, r, "hex");
            ((t.create = function () {
              return new S(e, r, e);
            }),
              (t.update = function (e) {
                return t.create().update(e);
              }));
            for (var n = 0; n < f.length; ++n) {
              var o = f[n];
              t[o] = h(e, r, o);
            }
            return t;
          },
          y = function (e, r) {
            var t = p(e, r, "hex");
            ((t.create = function (t) {
              return new S(e, r, t);
            }),
              (t.update = function (e, r) {
                return t.create(r).update(e);
              }));
            for (var n = 0; n < f.length; ++n) {
              var o = f[n];
              t[o] = p(e, r, o);
            }
            return t;
          },
          g = [
            { name: "keccak", padding: i, bits: c, createMethod: d },
            { name: "sha3", padding: a, bits: c, createMethod: d },
            { name: "shake", padding: o, bits: l, createMethod: y },
          ],
          m = {},
          w = [],
          A = 0;
        A < g.length;
        ++A
      )
        for (var v = g[A], b = v.bits, E = 0; E < b.length; ++E) {
          var _ = v.name + "_" + b[E];
          (w.push(_), (m[_] = v.createMethod(b[E], v.padding)));
        }
      function S(e, r, t) {
        ((this.blocks = []),
          (this.s = []),
          (this.padding = r),
          (this.outputBits = t),
          (this.reset = !0),
          (this.block = 0),
          (this.start = 0),
          (this.blockCount = (1600 - (e << 1)) >> 5),
          (this.byteCount = this.blockCount << 2),
          (this.outputBlocks = t >> 5),
          (this.extraBytes = (31 & t) >> 3));
        for (var n = 0; n < 50; ++n) this.s[n] = 0;
      }
      ((S.prototype.update = function (e) {
        var r = "string" !== typeof e;
        r && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
        var t,
          n,
          o = e.length,
          i = this.blocks,
          a = this.byteCount,
          u = this.blockCount,
          c = 0,
          l = this.s;
        while (c < o) {
          if (this.reset)
            for (this.reset = !1, i[0] = this.block, t = 1; t < u + 1; ++t)
              i[t] = 0;
          if (r)
            for (t = this.start; c < o && t < a; ++c)
              i[t >> 2] |= e[c] << s[3 & t++];
          else
            for (t = this.start; c < o && t < a; ++c)
              ((n = e.charCodeAt(c)),
                n < 128
                  ? (i[t >> 2] |= n << s[3 & t++])
                  : n < 2048
                    ? ((i[t >> 2] |= (192 | (n >> 6)) << s[3 & t++]),
                      (i[t >> 2] |= (128 | (63 & n)) << s[3 & t++]))
                    : n < 55296 || n >= 57344
                      ? ((i[t >> 2] |= (224 | (n >> 12)) << s[3 & t++]),
                        (i[t >> 2] |= (128 | ((n >> 6) & 63)) << s[3 & t++]),
                        (i[t >> 2] |= (128 | (63 & n)) << s[3 & t++]))
                      : ((n =
                          65536 +
                          (((1023 & n) << 10) | (1023 & e.charCodeAt(++c)))),
                        (i[t >> 2] |= (240 | (n >> 18)) << s[3 & t++]),
                        (i[t >> 2] |= (128 | ((n >> 12) & 63)) << s[3 & t++]),
                        (i[t >> 2] |= (128 | ((n >> 6) & 63)) << s[3 & t++]),
                        (i[t >> 2] |= (128 | (63 & n)) << s[3 & t++])));
          if (((this.lastByteIndex = t), t >= a)) {
            for (this.start = t - a, this.block = i[u], t = 0; t < u; ++t)
              l[t] ^= i[t];
            (T(l), (this.reset = !0));
          } else this.start = t;
        }
        return this;
      }),
        (S.prototype.finalize = function () {
          var e = this.blocks,
            r = this.lastByteIndex,
            t = this.blockCount,
            n = this.s;
          if (
            ((e[r >> 2] |= this.padding[3 & r]),
            this.lastByteIndex === this.byteCount)
          )
            for (e[0] = e[t], r = 1; r < t + 1; ++r) e[r] = 0;
          for (e[t - 1] |= 2147483648, r = 0; r < t; ++r) n[r] ^= e[r];
          T(n);
        }),
        (S.prototype.toString = S.prototype.hex =
          function () {
            this.finalize();
            var e,
              r = this.blockCount,
              t = this.s,
              o = this.outputBlocks,
              i = this.extraBytes,
              a = 0,
              s = 0,
              u = "";
            while (s < o) {
              for (a = 0; a < r && s < o; ++a, ++s)
                ((e = t[a]),
                  (u +=
                    n[(e >> 4) & 15] +
                    n[15 & e] +
                    n[(e >> 12) & 15] +
                    n[(e >> 8) & 15] +
                    n[(e >> 20) & 15] +
                    n[(e >> 16) & 15] +
                    n[(e >> 28) & 15] +
                    n[(e >> 24) & 15]));
              s % r === 0 && (T(t), (a = 0));
            }
            return (
              i &&
                ((e = t[a]),
                i > 0 && (u += n[(e >> 4) & 15] + n[15 & e]),
                i > 1 && (u += n[(e >> 12) & 15] + n[(e >> 8) & 15]),
                i > 2 && (u += n[(e >> 20) & 15] + n[(e >> 16) & 15])),
              u
            );
          }),
        (S.prototype.arrayBuffer = function () {
          this.finalize();
          var e,
            r = this.blockCount,
            t = this.s,
            n = this.outputBlocks,
            o = this.extraBytes,
            i = 0,
            a = 0,
            s = this.outputBits >> 3;
          e = o ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(s);
          var u = new Uint32Array(e);
          while (a < n) {
            for (i = 0; i < r && a < n; ++i, ++a) u[a] = t[i];
            a % r === 0 && T(t);
          }
          return (o && ((u[i] = t[i]), (e = e.slice(0, s))), e);
        }),
        (S.prototype.buffer = S.prototype.arrayBuffer),
        (S.prototype.digest = S.prototype.array =
          function () {
            this.finalize();
            var e,
              r,
              t = this.blockCount,
              n = this.s,
              o = this.outputBlocks,
              i = this.extraBytes,
              a = 0,
              s = 0,
              u = [];
            while (s < o) {
              for (a = 0; a < t && s < o; ++a, ++s)
                ((e = s << 2),
                  (r = n[a]),
                  (u[e] = 255 & r),
                  (u[e + 1] = (r >> 8) & 255),
                  (u[e + 2] = (r >> 16) & 255),
                  (u[e + 3] = (r >> 24) & 255));
              s % t === 0 && T(n);
            }
            return (
              i &&
                ((e = s << 2),
                (r = n[a]),
                i > 0 && (u[e] = 255 & r),
                i > 1 && (u[e + 1] = (r >> 8) & 255),
                i > 2 && (u[e + 2] = (r >> 16) & 255)),
              u
            );
          }));
      var T = function (e) {
        var r,
          t,
          n,
          o,
          i,
          a,
          s,
          c,
          l,
          f,
          h,
          p,
          d,
          y,
          g,
          m,
          w,
          A,
          v,
          b,
          E,
          _,
          S,
          T,
          N,
          I,
          B,
          R,
          k,
          P,
          U,
          O,
          C,
          M,
          x,
          L,
          D,
          j,
          F,
          V,
          G,
          H,
          K,
          q,
          z,
          Y,
          W,
          X,
          J,
          $,
          Z,
          Q,
          ee,
          re,
          te,
          ne,
          oe,
          ie,
          ae,
          se,
          ue,
          ce,
          le;
        for (n = 0; n < 48; n += 2)
          ((o = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
            (i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
            (a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
            (s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
            (c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
            (l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
            (f = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
            (h = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
            (p = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]),
            (d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]),
            (r = p ^ ((a << 1) | (s >>> 31))),
            (t = d ^ ((s << 1) | (a >>> 31))),
            (e[0] ^= r),
            (e[1] ^= t),
            (e[10] ^= r),
            (e[11] ^= t),
            (e[20] ^= r),
            (e[21] ^= t),
            (e[30] ^= r),
            (e[31] ^= t),
            (e[40] ^= r),
            (e[41] ^= t),
            (r = o ^ ((c << 1) | (l >>> 31))),
            (t = i ^ ((l << 1) | (c >>> 31))),
            (e[2] ^= r),
            (e[3] ^= t),
            (e[12] ^= r),
            (e[13] ^= t),
            (e[22] ^= r),
            (e[23] ^= t),
            (e[32] ^= r),
            (e[33] ^= t),
            (e[42] ^= r),
            (e[43] ^= t),
            (r = a ^ ((f << 1) | (h >>> 31))),
            (t = s ^ ((h << 1) | (f >>> 31))),
            (e[4] ^= r),
            (e[5] ^= t),
            (e[14] ^= r),
            (e[15] ^= t),
            (e[24] ^= r),
            (e[25] ^= t),
            (e[34] ^= r),
            (e[35] ^= t),
            (e[44] ^= r),
            (e[45] ^= t),
            (r = c ^ ((p << 1) | (d >>> 31))),
            (t = l ^ ((d << 1) | (p >>> 31))),
            (e[6] ^= r),
            (e[7] ^= t),
            (e[16] ^= r),
            (e[17] ^= t),
            (e[26] ^= r),
            (e[27] ^= t),
            (e[36] ^= r),
            (e[37] ^= t),
            (e[46] ^= r),
            (e[47] ^= t),
            (r = f ^ ((o << 1) | (i >>> 31))),
            (t = h ^ ((i << 1) | (o >>> 31))),
            (e[8] ^= r),
            (e[9] ^= t),
            (e[18] ^= r),
            (e[19] ^= t),
            (e[28] ^= r),
            (e[29] ^= t),
            (e[38] ^= r),
            (e[39] ^= t),
            (e[48] ^= r),
            (e[49] ^= t),
            (y = e[0]),
            (g = e[1]),
            (Y = (e[11] << 4) | (e[10] >>> 28)),
            (W = (e[10] << 4) | (e[11] >>> 28)),
            (R = (e[20] << 3) | (e[21] >>> 29)),
            (k = (e[21] << 3) | (e[20] >>> 29)),
            (se = (e[31] << 9) | (e[30] >>> 23)),
            (ue = (e[30] << 9) | (e[31] >>> 23)),
            (H = (e[40] << 18) | (e[41] >>> 14)),
            (K = (e[41] << 18) | (e[40] >>> 14)),
            (M = (e[2] << 1) | (e[3] >>> 31)),
            (x = (e[3] << 1) | (e[2] >>> 31)),
            (m = (e[13] << 12) | (e[12] >>> 20)),
            (w = (e[12] << 12) | (e[13] >>> 20)),
            (X = (e[22] << 10) | (e[23] >>> 22)),
            (J = (e[23] << 10) | (e[22] >>> 22)),
            (P = (e[33] << 13) | (e[32] >>> 19)),
            (U = (e[32] << 13) | (e[33] >>> 19)),
            (ce = (e[42] << 2) | (e[43] >>> 30)),
            (le = (e[43] << 2) | (e[42] >>> 30)),
            (re = (e[5] << 30) | (e[4] >>> 2)),
            (te = (e[4] << 30) | (e[5] >>> 2)),
            (L = (e[14] << 6) | (e[15] >>> 26)),
            (D = (e[15] << 6) | (e[14] >>> 26)),
            (A = (e[25] << 11) | (e[24] >>> 21)),
            (v = (e[24] << 11) | (e[25] >>> 21)),
            ($ = (e[34] << 15) | (e[35] >>> 17)),
            (Z = (e[35] << 15) | (e[34] >>> 17)),
            (O = (e[45] << 29) | (e[44] >>> 3)),
            (C = (e[44] << 29) | (e[45] >>> 3)),
            (T = (e[6] << 28) | (e[7] >>> 4)),
            (N = (e[7] << 28) | (e[6] >>> 4)),
            (ne = (e[17] << 23) | (e[16] >>> 9)),
            (oe = (e[16] << 23) | (e[17] >>> 9)),
            (j = (e[26] << 25) | (e[27] >>> 7)),
            (F = (e[27] << 25) | (e[26] >>> 7)),
            (b = (e[36] << 21) | (e[37] >>> 11)),
            (E = (e[37] << 21) | (e[36] >>> 11)),
            (Q = (e[47] << 24) | (e[46] >>> 8)),
            (ee = (e[46] << 24) | (e[47] >>> 8)),
            (q = (e[8] << 27) | (e[9] >>> 5)),
            (z = (e[9] << 27) | (e[8] >>> 5)),
            (I = (e[18] << 20) | (e[19] >>> 12)),
            (B = (e[19] << 20) | (e[18] >>> 12)),
            (ie = (e[29] << 7) | (e[28] >>> 25)),
            (ae = (e[28] << 7) | (e[29] >>> 25)),
            (V = (e[38] << 8) | (e[39] >>> 24)),
            (G = (e[39] << 8) | (e[38] >>> 24)),
            (_ = (e[48] << 14) | (e[49] >>> 18)),
            (S = (e[49] << 14) | (e[48] >>> 18)),
            (e[0] = y ^ (~m & A)),
            (e[1] = g ^ (~w & v)),
            (e[10] = T ^ (~I & R)),
            (e[11] = N ^ (~B & k)),
            (e[20] = M ^ (~L & j)),
            (e[21] = x ^ (~D & F)),
            (e[30] = q ^ (~Y & X)),
            (e[31] = z ^ (~W & J)),
            (e[40] = re ^ (~ne & ie)),
            (e[41] = te ^ (~oe & ae)),
            (e[2] = m ^ (~A & b)),
            (e[3] = w ^ (~v & E)),
            (e[12] = I ^ (~R & P)),
            (e[13] = B ^ (~k & U)),
            (e[22] = L ^ (~j & V)),
            (e[23] = D ^ (~F & G)),
            (e[32] = Y ^ (~X & $)),
            (e[33] = W ^ (~J & Z)),
            (e[42] = ne ^ (~ie & se)),
            (e[43] = oe ^ (~ae & ue)),
            (e[4] = A ^ (~b & _)),
            (e[5] = v ^ (~E & S)),
            (e[14] = R ^ (~P & O)),
            (e[15] = k ^ (~U & C)),
            (e[24] = j ^ (~V & H)),
            (e[25] = F ^ (~G & K)),
            (e[34] = X ^ (~$ & Q)),
            (e[35] = J ^ (~Z & ee)),
            (e[44] = ie ^ (~se & ce)),
            (e[45] = ae ^ (~ue & le)),
            (e[6] = b ^ (~_ & y)),
            (e[7] = E ^ (~S & g)),
            (e[16] = P ^ (~O & T)),
            (e[17] = U ^ (~C & N)),
            (e[26] = V ^ (~H & M)),
            (e[27] = G ^ (~K & x)),
            (e[36] = $ ^ (~Q & q)),
            (e[37] = Z ^ (~ee & z)),
            (e[46] = se ^ (~ce & re)),
            (e[47] = ue ^ (~le & te)),
            (e[8] = _ ^ (~y & m)),
            (e[9] = S ^ (~g & w)),
            (e[18] = O ^ (~T & I)),
            (e[19] = C ^ (~N & B)),
            (e[28] = H ^ (~M & L)),
            (e[29] = K ^ (~x & D)),
            (e[38] = Q ^ (~q & Y)),
            (e[39] = ee ^ (~z & W)),
            (e[48] = ce ^ (~re & ne)),
            (e[49] = le ^ (~te & oe)),
            (e[0] ^= u[n]),
            (e[1] ^= u[n + 1]));
      };
      r.keccak256 = m.keccak_256;
    },
    6808: function (e, r, t) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default = [
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
        ]));
    },
  },
]);
