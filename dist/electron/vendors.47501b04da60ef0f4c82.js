(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [166],
  {
    3055: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CallBuilder = void 0));
        var n,
          o = r(2924),
          i = o.__importDefault(r(7579)),
          s = o.__importDefault(r(3888)),
          a = o.__importDefault(r(7580)),
          u = r(3887),
          l = o.__importDefault(r(4970)),
          c = r(4942).version,
          f = ["transaction"],
          d = e;
        n = d.EventSource
          ? d.EventSource
          : i.default
            ? r(6007)
            : d.window.EventSource
              ? d.window.EventSource
              : r(6007);
        var p = (function () {
          function e(e, t) {
            (void 0 === t && (t = ""),
              (this.url = e.clone()),
              (this.filter = []),
              (this.originalSegments = this.url.segment() || []),
              (this.neighborRoot = t));
          }
          return (
            (e.prototype.call = function () {
              var e = this;
              return (
                this.checkFilter(),
                this._sendNormalRequest(this.url).then(function (t) {
                  return e._parseResponse(t);
                })
              );
            }),
            (e.prototype.stream = function (e) {
              var t,
                r,
                o = this;
              (void 0 === e && (e = {}),
                this.checkFilter(),
                this.url.setQuery("X-Client-Name", "js-stellar-sdk"),
                this.url.setQuery("X-Client-Version", c));
              var i = function () {
                  r = setTimeout(function () {
                    (t && t.close(), (t = s()));
                  }, e.reconnectTimeout || 15e3);
                },
                s = function () {
                  try {
                    t = new n(o.url.toString());
                  } catch (f) {
                    e.onerror && e.onerror(f);
                  }
                  if ((i(), t)) {
                    var a = !1,
                      u = function () {
                        a || (clearTimeout(r), t.close(), s(), (a = !0));
                      },
                      l = function (t) {
                        if ("close" !== t.type) {
                          var n = t.data
                            ? o._parseRecord(JSON.parse(t.data))
                            : t;
                          (n.paging_token &&
                            o.url.setQuery("cursor", n.paging_token),
                            clearTimeout(r),
                            i(),
                            "undefined" !== typeof e.onmessage &&
                              e.onmessage(n));
                        } else u();
                      },
                      c = function (t) {
                        e.onerror && e.onerror(t);
                      };
                    t.addEventListener
                      ? (t.addEventListener("message", l.bind(o)),
                        t.addEventListener("error", c.bind(o)),
                        t.addEventListener("close", u.bind(o)))
                      : ((t.onmessage = l.bind(o)), (t.onerror = c.bind(o)));
                  }
                  return t;
                };
              return (
                s(),
                function () {
                  (clearTimeout(r), t && t.close());
                }
              );
            }),
            (e.prototype.cursor = function (e) {
              return (this.url.setQuery("cursor", e), this);
            }),
            (e.prototype.limit = function (e) {
              return (this.url.setQuery("limit", e.toString()), this);
            }),
            (e.prototype.order = function (e) {
              return (this.url.setQuery("order", e), this);
            }),
            (e.prototype.join = function (e) {
              return (this.url.setQuery("join", e), this);
            }),
            (e.prototype.forEndpoint = function (e, t) {
              if ("" === this.neighborRoot)
                throw new Error(
                  "Invalid usage: neighborRoot not set in constructor",
                );
              return (this.filter.push([e, t, this.neighborRoot]), this);
            }),
            (e.prototype.checkFilter = function () {
              if (this.filter.length >= 2)
                throw new u.BadRequestError(
                  "Too many filters specified",
                  this.filter,
                );
              if (1 === this.filter.length) {
                var e = this.originalSegments.concat(this.filter[0]);
                this.url.segment(e);
              }
            }),
            (e.prototype._requestFnForLink = function (e) {
              var t = this;
              return function (r) {
                return (
                  void 0 === r && (r = {}),
                  o.__awaiter(t, void 0, void 0, function () {
                    var t, n, i;
                    return o.__generator(this, function (o) {
                      switch (o.label) {
                        case 0:
                          return (
                            e.templated
                              ? ((n = a.default(e.href)),
                                (t = s.default(n.expand(r))))
                              : (t = s.default(e.href)),
                            [4, this._sendNormalRequest(t)]
                          );
                        case 1:
                          return ((i = o.sent()), [2, this._parseResponse(i)]);
                      }
                    });
                  })
                );
              };
            }),
            (e.prototype._parseRecord = function (e) {
              var t = this;
              if (!e._links) return e;
              for (
                var r = function (r) {
                    var i = e._links[r],
                      s = !1;
                    if (
                      ("undefined" !== typeof e[r] &&
                        ((e[r + "_attr"] = e[r]), (s = !0)),
                      s && f.indexOf(r) >= 0)
                    ) {
                      var a = n._parseRecord(e[r]);
                      e[r] = function () {
                        return o.__awaiter(t, void 0, void 0, function () {
                          return o.__generator(this, function (e) {
                            return [2, a];
                          });
                        });
                      };
                    } else e[r] = n._requestFnForLink(i);
                  },
                  n = this,
                  i = 0,
                  s = Object.keys(e._links);
                i < s.length;
                i++
              ) {
                var a = s[i];
                r(a);
              }
              return e;
            }),
            (e.prototype._sendNormalRequest = function (e) {
              return o.__awaiter(this, void 0, void 0, function () {
                var t;
                return o.__generator(this, function (r) {
                  return (
                    (t = e),
                    "" === t.authority() &&
                      (t = t.authority(this.url.authority())),
                    "" === t.protocol() &&
                      (t = t.protocol(this.url.protocol())),
                    [
                      2,
                      l.default
                        .get(t.toString())
                        .then(function (e) {
                          return e.data;
                        })
                        .catch(this._handleNetworkError),
                    ]
                  );
                });
              });
            }),
            (e.prototype._parseResponse = function (e) {
              return e._embedded && e._embedded.records
                ? this._toCollectionPage(e)
                : this._parseRecord(e);
            }),
            (e.prototype._toCollectionPage = function (e) {
              for (var t = this, r = 0; r < e._embedded.records.length; r += 1)
                e._embedded.records[r] = this._parseRecord(
                  e._embedded.records[r],
                );
              return {
                records: e._embedded.records,
                next: function () {
                  return o.__awaiter(t, void 0, void 0, function () {
                    var t;
                    return o.__generator(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [
                            4,
                            this._sendNormalRequest(
                              s.default(e._links.next.href),
                            ),
                          ];
                        case 1:
                          return (
                            (t = r.sent()),
                            [2, this._toCollectionPage(t)]
                          );
                      }
                    });
                  });
                },
                prev: function () {
                  return o.__awaiter(t, void 0, void 0, function () {
                    var t;
                    return o.__generator(this, function (r) {
                      switch (r.label) {
                        case 0:
                          return [
                            4,
                            this._sendNormalRequest(
                              s.default(e._links.prev.href),
                            ),
                          ];
                        case 1:
                          return (
                            (t = r.sent()),
                            [2, this._toCollectionPage(t)]
                          );
                      }
                    });
                  });
                },
              };
            }),
            (e.prototype._handleNetworkError = function (e) {
              return o.__awaiter(this, void 0, void 0, function () {
                return o.__generator(this, function (t) {
                  if (
                    !(e.response && e.response.status && e.response.statusText)
                  )
                    return [2, Promise.reject(new Error(e.message))];
                  switch (e.response.status) {
                    case 404:
                      return [
                        2,
                        Promise.reject(
                          new u.NotFoundError(
                            e.response.statusText,
                            e.response.data,
                          ),
                        ),
                      ];
                    default:
                      return [
                        2,
                        Promise.reject(
                          new u.NetworkError(
                            e.response.statusText,
                            e.response.data,
                          ),
                        ),
                      ];
                  }
                  return [2];
                });
              });
            }),
            e
          );
        })();
        t.CallBuilder = p;
      }).call(this, r(13));
    },
    3145: function (e, t, r) {
      "use strict";
      var n = r(5999),
        o = Object.prototype.toString;
      function i(e) {
        return Array.isArray(e);
      }
      function s(e) {
        return "undefined" === typeof e;
      }
      function a(e) {
        return (
          null !== e &&
          !s(e) &&
          null !== e.constructor &&
          !s(e.constructor) &&
          "function" === typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      }
      function u(e) {
        return "[object ArrayBuffer]" === o.call(e);
      }
      function l(e) {
        return "[object FormData]" === o.call(e);
      }
      function c(e) {
        var t;
        return (
          (t =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && u(e.buffer)),
          t
        );
      }
      function f(e) {
        return "string" === typeof e;
      }
      function d(e) {
        return "number" === typeof e;
      }
      function p(e) {
        return null !== e && "object" === typeof e;
      }
      function h(e) {
        if ("[object Object]" !== o.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
      }
      function v(e) {
        return "[object Date]" === o.call(e);
      }
      function m(e) {
        return "[object File]" === o.call(e);
      }
      function _(e) {
        return "[object Blob]" === o.call(e);
      }
      function g(e) {
        return "[object Function]" === o.call(e);
      }
      function y(e) {
        return p(e) && g(e.pipe);
      }
      function w(e) {
        return "[object URLSearchParams]" === o.call(e);
      }
      function b(e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      }
      function E() {
        return (
          ("undefined" === typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" !== typeof window &&
          "undefined" !== typeof document
        );
      }
      function S(e, t) {
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), i(e)))
            for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
          else
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.call(null, e[o], o, e);
      }
      function T() {
        var e = {};
        function t(t, r) {
          h(e[r]) && h(t)
            ? (e[r] = T(e[r], t))
            : h(t)
              ? (e[r] = T({}, t))
              : i(t)
                ? (e[r] = t.slice())
                : (e[r] = t);
        }
        for (var r = 0, n = arguments.length; r < n; r++) S(arguments[r], t);
        return e;
      }
      function C(e, t, r) {
        return (
          S(t, function (t, o) {
            e[o] = r && "function" === typeof t ? n(t, r) : t;
          }),
          e
        );
      }
      function R(e) {
        return (65279 === e.charCodeAt(0) && (e = e.slice(1)), e);
      }
      e.exports = {
        isArray: i,
        isArrayBuffer: u,
        isBuffer: a,
        isFormData: l,
        isArrayBufferView: c,
        isString: f,
        isNumber: d,
        isObject: p,
        isPlainObject: h,
        isUndefined: s,
        isDate: v,
        isFile: m,
        isBlob: _,
        isFunction: g,
        isStream: y,
        isURLSearchParams: w,
        isStandardBrowserEnv: E,
        forEach: S,
        merge: T,
        extend: C,
        trim: b,
        stripBOM: R,
      };
    },
    3549: function (e, t, r) {
      var n;
      (function (o) {
        "use strict";
        var i,
          s = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          a = Math.ceil,
          u = Math.floor,
          l = " not a boolean or binary digit",
          c = "rounding mode",
          f = "number type has more than 15 significant digits",
          d =
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_",
          p = 1e14,
          h = 14,
          v = 9007199254740991,
          m = [
            1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
            1e13,
          ],
          _ = 1e7,
          g = 1e9;
        function y(e) {
          var t,
            r,
            n = 0,
            o = F.prototype,
            i = new F(1),
            x = 20,
            I = 4,
            N = -7,
            B = 21,
            P = -1e7,
            L = 1e7,
            M = !0,
            q = V,
            D = !1,
            j = 1,
            k = 0,
            U = {
              decimalSeparator: ".",
              groupSeparator: ",",
              groupSize: 3,
              secondaryGroupSize: 0,
              fractionGroupSeparator: " ",
              fractionGroupSize: 0,
            };
          function F(e, t) {
            var o,
              i,
              a,
              l,
              c,
              p,
              m = this;
            if (!(m instanceof F))
              return (
                M && K(26, "constructor call without new", e),
                new F(e, t)
              );
            if (null != t && q(t, 2, 64, n, "base")) {
              if (((t |= 0), (p = e + ""), 10 == t))
                return (
                  (m = new F(e instanceof F ? e : p)),
                  J(m, x + m.e + 1, I)
                );
              if (
                ((l = "number" == typeof e) && 0 * e != 0) ||
                !new RegExp(
                  "^-?" +
                    (o = "[" + d.slice(0, t) + "]+") +
                    "(?:\\." +
                    o +
                    ")?$",
                  t < 37 ? "i" : "",
                ).test(p)
              )
                return r(m, p, l, t);
              (l
                ? ((m.s = 1 / e < 0 ? ((p = p.slice(1)), -1) : 1),
                  M && p.replace(/^0\.0*|\./, "").length > 15 && K(n, f, e),
                  (l = !1))
                : (m.s = 45 === p.charCodeAt(0) ? ((p = p.slice(1)), -1) : 1),
                (p = Q(p, 10, t, m.s)));
            } else {
              if (e instanceof F)
                return (
                  (m.s = e.s),
                  (m.e = e.e),
                  (m.c = (e = e.c) ? e.slice() : e),
                  void (n = 0)
                );
              if ((l = "number" == typeof e) && 0 * e == 0) {
                if (((m.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                  for (i = 0, a = e; a >= 10; a /= 10, i++);
                  return ((m.e = i), (m.c = [e]), void (n = 0));
                }
                p = e + "";
              } else {
                if (!s.test((p = e + ""))) return r(m, p, l);
                m.s = 45 === p.charCodeAt(0) ? ((p = p.slice(1)), -1) : 1;
              }
            }
            for (
              (i = p.indexOf(".")) > -1 && (p = p.replace(".", "")),
                (a = p.search(/e/i)) > 0
                  ? (i < 0 && (i = a),
                    (i += +p.slice(a + 1)),
                    (p = p.substring(0, a)))
                  : i < 0 && (i = p.length),
                a = 0;
              48 === p.charCodeAt(a);
              a++
            );
            for (c = p.length; 48 === p.charCodeAt(--c); );
            if (((p = p.slice(a, c + 1)), p))
              if (
                ((c = p.length),
                l && M && c > 15 && (e > v || e !== u(e)) && K(n, f, m.s * e),
                (i = i - a - 1),
                i > L)
              )
                m.c = m.e = null;
              else if (i < P) m.c = [(m.e = 0)];
              else {
                if (
                  ((m.e = i),
                  (m.c = []),
                  (a = (i + 1) % h),
                  i < 0 && (a += h),
                  a < c)
                ) {
                  for (a && m.c.push(+p.slice(0, a)), c -= h; a < c; )
                    m.c.push(+p.slice(a, (a += h)));
                  ((p = p.slice(a)), (a = h - p.length));
                } else a -= c;
                for (; a--; p += "0");
                m.c.push(+p);
              }
            else m.c = [(m.e = 0)];
            n = 0;
          }
          function Q(e, r, n, o) {
            var i,
              s,
              a,
              u,
              l,
              c,
              f,
              p = e.indexOf("."),
              h = x,
              v = I;
            for (
              n < 37 && (e = e.toLowerCase()),
                p >= 0 &&
                  ((a = k),
                  (k = 0),
                  (e = e.replace(".", "")),
                  (f = new F(n)),
                  (l = f.pow(e.length - p)),
                  (k = a),
                  (f.c = C(O(b(l.c), l.e), 10, r)),
                  (f.e = f.c.length)),
                c = C(e, n, r),
                s = a = c.length;
              0 == c[--a];
              c.pop()
            );
            if (!c[0]) return "0";
            if (
              (p < 0
                ? --s
                : ((l.c = c),
                  (l.e = s),
                  (l.s = o),
                  (l = t(l, f, h, v, r)),
                  (c = l.c),
                  (u = l.r),
                  (s = l.e)),
              (i = s + h + 1),
              (p = c[i]),
              (a = r / 2),
              (u = u || i < 0 || null != c[i + 1]),
              (u =
                v < 4
                  ? (null != p || u) && (0 == v || v == (l.s < 0 ? 3 : 2))
                  : p > a ||
                    (p == a &&
                      (4 == v ||
                        u ||
                        (6 == v && 1 & c[i - 1]) ||
                        v == (l.s < 0 ? 8 : 7)))),
              i < 1 || !c[0])
            )
              e = u ? O("1", -h) : "0";
            else {
              if (((c.length = i), u))
                for (--r; ++c[--i] > r; )
                  ((c[i] = 0), i || (++s, (c = [1].concat(c))));
              for (a = c.length; !c[--a]; );
              for (p = 0, e = ""; p <= a; e += d.charAt(c[p++]));
              e = O(e, s);
            }
            return e;
          }
          function X(e, t, r, n) {
            var o, i, s, a, u;
            if (((r = null != r && q(r, 0, 8, n, c) ? 0 | r : I), !e.c))
              return e.toString();
            if (((o = e.c[0]), (s = e.e), null == t))
              ((u = b(e.c)),
                (u = 19 == n || (24 == n && s <= N) ? R(u, s) : O(u, s)));
            else if (
              ((e = J(new F(e), t, r)),
              (i = e.e),
              (u = b(e.c)),
              (a = u.length),
              19 == n || (24 == n && (t <= i || i <= N)))
            ) {
              for (; a < t; u += "0", a++);
              u = R(u, i);
            } else if (((t -= s), (u = O(u, i)), i + 1 > a)) {
              if (--t > 0) for (u += "."; t--; u += "0");
            } else if (((t += i - a), t > 0))
              for (i + 1 == a && (u += "."); t--; u += "0");
            return e.s < 0 && o ? "-" + u : u;
          }
          function H(e, t) {
            var r,
              n,
              o = 0;
            for (T(e[0]) && (e = e[0]), r = new F(e[0]); ++o < e.length; ) {
              if (((n = new F(e[o])), !n.s)) {
                r = n;
                break;
              }
              t.call(r, n) && (r = n);
            }
            return r;
          }
          function V(e, t, r, n, o) {
            return (
              (e < t || e > r || e != A(e)) &&
                K(
                  n,
                  (o || "decimal places") +
                    (e < t || e > r ? " out of range" : " not an integer"),
                  e,
                ),
              !0
            );
          }
          function z(e, t, r) {
            for (var n = 1, o = t.length; !t[--o]; t.pop());
            for (o = t[0]; o >= 10; o /= 10, n++);
            return (
              (r = n + r * h - 1) > L
                ? (e.c = e.e = null)
                : r < P
                  ? (e.c = [(e.e = 0)])
                  : ((e.e = r), (e.c = t)),
              e
            );
          }
          function K(e, t, r) {
            var o = new Error(
              [
                "new BigNumber",
                "cmp",
                "config",
                "div",
                "divToInt",
                "eq",
                "gt",
                "gte",
                "lt",
                "lte",
                "minus",
                "mod",
                "plus",
                "precision",
                "random",
                "round",
                "shift",
                "times",
                "toDigits",
                "toExponential",
                "toFixed",
                "toFormat",
                "toFraction",
                "pow",
                "toPrecision",
                "toString",
                "BigNumber",
              ][e] +
                "() " +
                t +
                ": " +
                r,
            );
            throw ((o.name = "BigNumber Error"), (n = 0), o);
          }
          function J(e, t, r, n) {
            var o,
              i,
              s,
              l,
              c,
              f,
              d,
              v = e.c,
              _ = m;
            if (v) {
              e: {
                for (o = 1, l = v[0]; l >= 10; l /= 10, o++);
                if (((i = t - o), i < 0))
                  ((i += h),
                    (s = t),
                    (c = v[(f = 0)]),
                    (d = ((c / _[o - s - 1]) % 10) | 0));
                else if (((f = a((i + 1) / h)), f >= v.length)) {
                  if (!n) break e;
                  for (; v.length <= f; v.push(0));
                  ((c = d = 0), (o = 1), (i %= h), (s = i - h + 1));
                } else {
                  for (c = l = v[f], o = 1; l >= 10; l /= 10, o++);
                  ((i %= h),
                    (s = i - h + o),
                    (d = s < 0 ? 0 : ((c / _[o - s - 1]) % 10) | 0));
                }
                if (
                  ((n =
                    n ||
                    t < 0 ||
                    null != v[f + 1] ||
                    (s < 0 ? c : c % _[o - s - 1])),
                  (n =
                    r < 4
                      ? (d || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                      : d > 5 ||
                        (5 == d &&
                          (4 == r ||
                            n ||
                            (6 == r &&
                              ((i > 0 ? (s > 0 ? c / _[o - s] : 0) : v[f - 1]) %
                                10) &
                                1) ||
                            r == (e.s < 0 ? 8 : 7)))),
                  t < 1 || !v[0])
                )
                  return (
                    (v.length = 0),
                    n
                      ? ((t -= e.e + 1),
                        (v[0] = _[(h - (t % h)) % h]),
                        (e.e = -t || 0))
                      : (v[0] = e.e = 0),
                    e
                  );
                if (
                  (0 == i
                    ? ((v.length = f), (l = 1), f--)
                    : ((v.length = f + 1),
                      (l = _[h - i]),
                      (v[f] = s > 0 ? u((c / _[o - s]) % _[s]) * l : 0)),
                  n)
                )
                  for (;;) {
                    if (0 == f) {
                      for (i = 1, s = v[0]; s >= 10; s /= 10, i++);
                      for (s = v[0] += l, l = 1; s >= 10; s /= 10, l++);
                      i != l && (e.e++, v[0] == p && (v[0] = 1));
                      break;
                    }
                    if (((v[f] += l), v[f] != p)) break;
                    ((v[f--] = 0), (l = 1));
                  }
                for (i = v.length; 0 === v[--i]; v.pop());
              }
              e.e > L ? (e.c = e.e = null) : e.e < P && (e.c = [(e.e = 0)]);
            }
            return e;
          }
          return (
            (F.another = y),
            (F.ROUND_UP = 0),
            (F.ROUND_DOWN = 1),
            (F.ROUND_CEIL = 2),
            (F.ROUND_FLOOR = 3),
            (F.ROUND_HALF_UP = 4),
            (F.ROUND_HALF_DOWN = 5),
            (F.ROUND_HALF_EVEN = 6),
            (F.ROUND_HALF_CEIL = 7),
            (F.ROUND_HALF_FLOOR = 8),
            (F.EUCLID = 9),
            (F.config = F.set =
              function () {
                var e,
                  t,
                  r = 0,
                  o = {},
                  i = arguments,
                  s = i[0],
                  a =
                    s && "object" == typeof s
                      ? function () {
                          if (s.hasOwnProperty(t)) return null != (e = s[t]);
                        }
                      : function () {
                          if (i.length > r) return null != (e = i[r++]);
                        };
                return (
                  a((t = "DECIMAL_PLACES")) && q(e, 0, g, 2, t) && (x = 0 | e),
                  (o[t] = x),
                  a((t = "ROUNDING_MODE")) && q(e, 0, 8, 2, t) && (I = 0 | e),
                  (o[t] = I),
                  a((t = "EXPONENTIAL_AT")) &&
                    (T(e)
                      ? q(e[0], -g, 0, 2, t) &&
                        q(e[1], 0, g, 2, t) &&
                        ((N = 0 | e[0]), (B = 0 | e[1]))
                      : q(e, -g, g, 2, t) && (N = -(B = 0 | (e < 0 ? -e : e)))),
                  (o[t] = [N, B]),
                  a((t = "RANGE")) &&
                    (T(e)
                      ? q(e[0], -g, -1, 2, t) &&
                        q(e[1], 1, g, 2, t) &&
                        ((P = 0 | e[0]), (L = 0 | e[1]))
                      : q(e, -g, g, 2, t) &&
                        (0 | e
                          ? (P = -(L = 0 | (e < 0 ? -e : e)))
                          : M && K(2, t + " cannot be zero", e))),
                  (o[t] = [P, L]),
                  a((t = "ERRORS")) &&
                    (e === !!e || 1 === e || 0 === e
                      ? ((n = 0), (q = (M = !!e) ? V : S))
                      : M && K(2, t + l, e)),
                  (o[t] = M),
                  a((t = "CRYPTO")) &&
                    (!0 === e || !1 === e || 1 === e || 0 === e
                      ? e
                        ? ((e = "undefined" == typeof crypto),
                          !e &&
                          crypto &&
                          (crypto.getRandomValues || crypto.randomBytes)
                            ? (D = !0)
                            : M
                              ? K(2, "crypto unavailable", e ? void 0 : crypto)
                              : (D = !1))
                        : (D = !1)
                      : M && K(2, t + l, e)),
                  (o[t] = D),
                  a((t = "MODULO_MODE")) && q(e, 0, 9, 2, t) && (j = 0 | e),
                  (o[t] = j),
                  a((t = "POW_PRECISION")) && q(e, 0, g, 2, t) && (k = 0 | e),
                  (o[t] = k),
                  a((t = "FORMAT")) &&
                    ("object" == typeof e
                      ? (U = e)
                      : M && K(2, t + " not an object", e)),
                  (o[t] = U),
                  o
                );
              }),
            (F.max = function () {
              return H(arguments, o.lt);
            }),
            (F.min = function () {
              return H(arguments, o.gt);
            }),
            (F.random = (function () {
              var e = 9007199254740992,
                t =
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
                var r,
                  n,
                  o,
                  s,
                  l,
                  c = 0,
                  f = [],
                  d = new F(i);
                if (
                  ((e = null != e && q(e, 0, g, 14) ? 0 | e : x),
                  (s = a(e / h)),
                  D)
                )
                  if (crypto.getRandomValues) {
                    for (
                      r = crypto.getRandomValues(new Uint32Array((s *= 2)));
                      c < s;
                    )
                      ((l = 131072 * r[c] + (r[c + 1] >>> 11)),
                        l >= 9e15
                          ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                            (r[c] = n[0]),
                            (r[c + 1] = n[1]))
                          : (f.push(l % 1e14), (c += 2)));
                    c = s / 2;
                  } else if (crypto.randomBytes) {
                    for (r = crypto.randomBytes((s *= 7)); c < s; )
                      ((l =
                        281474976710656 * (31 & r[c]) +
                        1099511627776 * r[c + 1] +
                        4294967296 * r[c + 2] +
                        16777216 * r[c + 3] +
                        (r[c + 4] << 16) +
                        (r[c + 5] << 8) +
                        r[c + 6]),
                        l >= 9e15
                          ? crypto.randomBytes(7).copy(r, c)
                          : (f.push(l % 1e14), (c += 7)));
                    c = s / 7;
                  } else ((D = !1), M && K(14, "crypto unavailable", crypto));
                if (!D)
                  for (; c < s; ) ((l = t()), l < 9e15 && (f[c++] = l % 1e14));
                for (
                  s = f[--c],
                    e %= h,
                    s && e && ((l = m[h - e]), (f[c] = u(s / l) * l));
                  0 === f[c];
                  f.pop(), c--
                );
                if (c < 0) f = [(o = 0)];
                else {
                  for (o = -1; 0 === f[0]; f.splice(0, 1), o -= h);
                  for (c = 1, l = f[0]; l >= 10; l /= 10, c++);
                  c < h && (o -= h - c);
                }
                return ((d.e = o), (d.c = f), d);
              };
            })()),
            (t = (function () {
              function e(e, t, r) {
                var n,
                  o,
                  i,
                  s,
                  a = 0,
                  u = e.length,
                  l = t % _,
                  c = (t / _) | 0;
                for (e = e.slice(); u--; )
                  ((i = e[u] % _),
                    (s = (e[u] / _) | 0),
                    (n = c * i + s * l),
                    (o = l * i + (n % _) * _ + a),
                    (a = ((o / r) | 0) + ((n / _) | 0) + c * s),
                    (e[u] = o % r));
                return (a && (e = [a].concat(e)), e);
              }
              function t(e, t, r, n) {
                var o, i;
                if (r != n) i = r > n ? 1 : -1;
                else
                  for (o = i = 0; o < r; o++)
                    if (e[o] != t[o]) {
                      i = e[o] > t[o] ? 1 : -1;
                      break;
                    }
                return i;
              }
              function r(e, t, r, n) {
                for (var o = 0; r--; )
                  ((e[r] -= o),
                    (o = e[r] < t[r] ? 1 : 0),
                    (e[r] = o * n + e[r] - t[r]));
                for (; !e[0] && e.length > 1; e.splice(0, 1));
              }
              return function (n, o, i, s, a) {
                var l,
                  c,
                  f,
                  d,
                  v,
                  m,
                  _,
                  g,
                  y,
                  b,
                  E,
                  S,
                  T,
                  C,
                  R,
                  O,
                  A,
                  x = n.s == o.s ? 1 : -1,
                  I = n.c,
                  N = o.c;
                if (!I || !I[0] || !N || !N[0])
                  return new F(
                    n.s && o.s && (I ? !N || I[0] != N[0] : N)
                      ? (I && 0 == I[0]) || !N
                        ? 0 * x
                        : x / 0
                      : NaN,
                  );
                for (
                  g = new F(x),
                    y = g.c = [],
                    c = n.e - o.e,
                    x = i + c + 1,
                    a ||
                      ((a = p),
                      (c = w(n.e / h) - w(o.e / h)),
                      (x = (x / h) | 0)),
                    f = 0;
                  N[f] == (I[f] || 0);
                  f++
                );
                if ((N[f] > (I[f] || 0) && c--, x < 0)) (y.push(1), (d = !0));
                else {
                  for (
                    C = I.length,
                      O = N.length,
                      f = 0,
                      x += 2,
                      v = u(a / (N[0] + 1)),
                      v > 1 &&
                        ((N = e(N, v, a)),
                        (I = e(I, v, a)),
                        (O = N.length),
                        (C = I.length)),
                      T = O,
                      b = I.slice(0, O),
                      E = b.length;
                    E < O;
                    b[E++] = 0
                  );
                  ((A = N.slice()),
                    (A = [0].concat(A)),
                    (R = N[0]),
                    N[1] >= a / 2 && R++);
                  do {
                    if (((v = 0), (l = t(N, b, O, E)), l < 0)) {
                      if (
                        ((S = b[0]),
                        O != E && (S = S * a + (b[1] || 0)),
                        (v = u(S / R)),
                        v > 1)
                      ) {
                        (v >= a && (v = a - 1),
                          (m = e(N, v, a)),
                          (_ = m.length),
                          (E = b.length));
                        while (1 == t(m, b, _, E))
                          (v--,
                            r(m, O < _ ? A : N, _, a),
                            (_ = m.length),
                            (l = 1));
                      } else
                        (0 == v && (l = v = 1),
                          (m = N.slice()),
                          (_ = m.length));
                      if (
                        (_ < E && (m = [0].concat(m)),
                        r(b, m, E, a),
                        (E = b.length),
                        -1 == l)
                      )
                        while (t(N, b, O, E) < 1)
                          (v++, r(b, O < E ? A : N, E, a), (E = b.length));
                    } else 0 === l && (v++, (b = [0]));
                    ((y[f++] = v),
                      b[0] ? (b[E++] = I[T] || 0) : ((b = [I[T]]), (E = 1)));
                  } while ((T++ < C || null != b[0]) && x--);
                  ((d = null != b[0]), y[0] || y.splice(0, 1));
                }
                if (a == p) {
                  for (f = 1, x = y[0]; x >= 10; x /= 10, f++);
                  J(g, i + (g.e = f + c * h - 1) + 1, s, d);
                } else ((g.e = c), (g.r = +d));
                return g;
              };
            })()),
            (r = (function () {
              var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                t = /^([^.]+)\.$/,
                r = /^\.([^.]+)$/,
                o = /^-?(Infinity|NaN)$/,
                i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
              return function (s, a, u, l) {
                var c,
                  f = u ? a : a.replace(i, "");
                if (o.test(f)) s.s = isNaN(f) ? null : f < 0 ? -1 : 1;
                else {
                  if (
                    !u &&
                    ((f = f.replace(e, function (e, t, r) {
                      return (
                        (c =
                          "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                        l && l != c ? e : t
                      );
                    })),
                    l && ((c = l), (f = f.replace(t, "$1").replace(r, "0.$1"))),
                    a != f)
                  )
                    return new F(f, c);
                  (M && K(n, "not a" + (l ? " base " + l : "") + " number", a),
                    (s.s = null));
                }
                ((s.c = s.e = null), (n = 0));
              };
            })()),
            (o.absoluteValue = o.abs =
              function () {
                var e = new F(this);
                return (e.s < 0 && (e.s = 1), e);
              }),
            (o.ceil = function () {
              return J(new F(this), this.e + 1, 2);
            }),
            (o.comparedTo = o.cmp =
              function (e, t) {
                return ((n = 1), E(this, new F(e, t)));
              }),
            (o.decimalPlaces = o.dp =
              function () {
                var e,
                  t,
                  r = this.c;
                if (!r) return null;
                if (
                  ((e = ((t = r.length - 1) - w(this.e / h)) * h), (t = r[t]))
                )
                  for (; t % 10 == 0; t /= 10, e--);
                return (e < 0 && (e = 0), e);
              }),
            (o.dividedBy = o.div =
              function (e, r) {
                return ((n = 3), t(this, new F(e, r), x, I));
              }),
            (o.dividedToIntegerBy = o.divToInt =
              function (e, r) {
                return ((n = 4), t(this, new F(e, r), 0, 1));
              }),
            (o.equals = o.eq =
              function (e, t) {
                return ((n = 5), 0 === E(this, new F(e, t)));
              }),
            (o.floor = function () {
              return J(new F(this), this.e + 1, 3);
            }),
            (o.greaterThan = o.gt =
              function (e, t) {
                return ((n = 6), E(this, new F(e, t)) > 0);
              }),
            (o.greaterThanOrEqualTo = o.gte =
              function (e, t) {
                return ((n = 7), 1 === (t = E(this, new F(e, t))) || 0 === t);
              }),
            (o.isFinite = function () {
              return !!this.c;
            }),
            (o.isInteger = o.isInt =
              function () {
                return !!this.c && w(this.e / h) > this.c.length - 2;
              }),
            (o.isNaN = function () {
              return !this.s;
            }),
            (o.isNegative = o.isNeg =
              function () {
                return this.s < 0;
              }),
            (o.isZero = function () {
              return !!this.c && 0 == this.c[0];
            }),
            (o.lessThan = o.lt =
              function (e, t) {
                return ((n = 8), E(this, new F(e, t)) < 0);
              }),
            (o.lessThanOrEqualTo = o.lte =
              function (e, t) {
                return ((n = 9), -1 === (t = E(this, new F(e, t))) || 0 === t);
              }),
            (o.minus = o.sub =
              function (e, t) {
                var r,
                  o,
                  i,
                  s,
                  a = this,
                  u = a.s;
                if (((n = 10), (e = new F(e, t)), (t = e.s), !u || !t))
                  return new F(NaN);
                if (u != t) return ((e.s = -t), a.plus(e));
                var l = a.e / h,
                  c = e.e / h,
                  f = a.c,
                  d = e.c;
                if (!l || !c) {
                  if (!f || !d) return f ? ((e.s = -t), e) : new F(d ? a : NaN);
                  if (!f[0] || !d[0])
                    return d[0]
                      ? ((e.s = -t), e)
                      : new F(f[0] ? a : 3 == I ? -0 : 0);
                }
                if (((l = w(l)), (c = w(c)), (f = f.slice()), (u = l - c))) {
                  for (
                    (s = u < 0) ? ((u = -u), (i = f)) : ((c = l), (i = d)),
                      i.reverse(),
                      t = u;
                    t--;
                    i.push(0)
                  );
                  i.reverse();
                } else
                  for (
                    o = (s = (u = f.length) < (t = d.length)) ? u : t,
                      u = t = 0;
                    t < o;
                    t++
                  )
                    if (f[t] != d[t]) {
                      s = f[t] < d[t];
                      break;
                    }
                if (
                  (s && ((i = f), (f = d), (d = i), (e.s = -e.s)),
                  (t = (o = d.length) - (r = f.length)),
                  t > 0)
                )
                  for (; t--; f[r++] = 0);
                for (t = p - 1; o > u; ) {
                  if (f[--o] < d[o]) {
                    for (r = o; r && !f[--r]; f[r] = t);
                    (--f[r], (f[o] += p));
                  }
                  f[o] -= d[o];
                }
                for (; 0 == f[0]; f.splice(0, 1), --c);
                return f[0]
                  ? z(e, f, c)
                  : ((e.s = 3 == I ? -1 : 1), (e.c = [(e.e = 0)]), e);
              }),
            (o.modulo = o.mod =
              function (e, r) {
                var o,
                  i,
                  s = this;
                return (
                  (n = 11),
                  (e = new F(e, r)),
                  !s.c || !e.s || (e.c && !e.c[0])
                    ? new F(NaN)
                    : !e.c || (s.c && !s.c[0])
                      ? new F(s)
                      : (9 == j
                          ? ((i = e.s),
                            (e.s = 1),
                            (o = t(s, e, 0, 3)),
                            (e.s = i),
                            (o.s *= i))
                          : (o = t(s, e, 0, j)),
                        s.minus(o.times(e)))
                );
              }),
            (o.negated = o.neg =
              function () {
                var e = new F(this);
                return ((e.s = -e.s || null), e);
              }),
            (o.plus = o.add =
              function (e, t) {
                var r,
                  o = this,
                  i = o.s;
                if (((n = 12), (e = new F(e, t)), (t = e.s), !i || !t))
                  return new F(NaN);
                if (i != t) return ((e.s = -t), o.minus(e));
                var s = o.e / h,
                  a = e.e / h,
                  u = o.c,
                  l = e.c;
                if (!s || !a) {
                  if (!u || !l) return new F(i / 0);
                  if (!u[0] || !l[0]) return l[0] ? e : new F(u[0] ? o : 0 * i);
                }
                if (((s = w(s)), (a = w(a)), (u = u.slice()), (i = s - a))) {
                  for (
                    i > 0 ? ((a = s), (r = l)) : ((i = -i), (r = u)),
                      r.reverse();
                    i--;
                    r.push(0)
                  );
                  r.reverse();
                }
                for (
                  i = u.length,
                    t = l.length,
                    i - t < 0 && ((r = l), (l = u), (u = r), (t = i)),
                    i = 0;
                  t;
                )
                  ((i = ((u[--t] = u[t] + l[t] + i) / p) | 0),
                    (u[t] = p === u[t] ? 0 : u[t] % p));
                return (i && ((u = [i].concat(u)), ++a), z(e, u, a));
              }),
            (o.precision = o.sd =
              function (e) {
                var t,
                  r,
                  n = this,
                  o = n.c;
                if (
                  (null != e &&
                    e !== !!e &&
                    1 !== e &&
                    0 !== e &&
                    (M && K(13, "argument" + l, e), e != !!e && (e = null)),
                  !o)
                )
                  return null;
                if (((r = o.length - 1), (t = r * h + 1), (r = o[r]))) {
                  for (; r % 10 == 0; r /= 10, t--);
                  for (r = o[0]; r >= 10; r /= 10, t++);
                }
                return (e && n.e + 1 > t && (t = n.e + 1), t);
              }),
            (o.round = function (e, t) {
              var r = new F(this);
              return (
                (null == e || q(e, 0, g, 15)) &&
                  J(
                    r,
                    ~~e + this.e + 1,
                    null != t && q(t, 0, 8, 15, c) ? 0 | t : I,
                  ),
                r
              );
            }),
            (o.shift = function (e) {
              var t = this;
              return q(e, -v, v, 16, "argument")
                ? t.times("1e" + A(e))
                : new F(
                    t.c && t.c[0] && (e < -v || e > v)
                      ? t.s * (e < 0 ? 0 : 1 / 0)
                      : t,
                  );
            }),
            (o.squareRoot = o.sqrt =
              function () {
                var e,
                  r,
                  n,
                  o,
                  i,
                  s = this,
                  a = s.c,
                  u = s.s,
                  l = s.e,
                  c = x + 4,
                  f = new F("0.5");
                if (1 !== u || !a || !a[0])
                  return new F(
                    !u || (u < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0,
                  );
                if (
                  ((u = Math.sqrt(+s)),
                  0 == u || u == 1 / 0
                    ? ((r = b(a)),
                      (r.length + l) % 2 == 0 && (r += "0"),
                      (u = Math.sqrt(r)),
                      (l = w((l + 1) / 2) - (l < 0 || l % 2)),
                      u == 1 / 0
                        ? (r = "1e" + l)
                        : ((r = u.toExponential()),
                          (r = r.slice(0, r.indexOf("e") + 1) + l)),
                      (n = new F(r)))
                    : (n = new F(u + "")),
                  n.c[0])
                )
                  for (l = n.e, u = l + c, u < 3 && (u = 0); ; )
                    if (
                      ((i = n),
                      (n = f.times(i.plus(t(s, i, c, 1)))),
                      b(i.c).slice(0, u) === (r = b(n.c)).slice(0, u))
                    ) {
                      if (
                        (n.e < l && --u,
                        (r = r.slice(u - 3, u + 1)),
                        "9999" != r && (o || "4999" != r))
                      ) {
                        (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                          (J(n, n.e + x + 2, 1), (e = !n.times(n).eq(s)));
                        break;
                      }
                      if (!o && (J(i, i.e + x + 2, 0), i.times(i).eq(s))) {
                        n = i;
                        break;
                      }
                      ((c += 4), (u += 4), (o = 1));
                    }
                return J(n, n.e + x + 1, I, e);
              }),
            (o.times = o.mul =
              function (e, t) {
                var r,
                  o,
                  i,
                  s,
                  a,
                  u,
                  l,
                  c,
                  f,
                  d,
                  v,
                  m,
                  g,
                  y,
                  b,
                  E = this,
                  S = E.c,
                  T = ((n = 17), (e = new F(e, t))).c;
                if (!S || !T || !S[0] || !T[0])
                  return (
                    !E.s || !e.s || (S && !S[0] && !T) || (T && !T[0] && !S)
                      ? (e.c = e.e = e.s = null)
                      : ((e.s *= E.s),
                        S && T ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null)),
                    e
                  );
                for (
                  o = w(E.e / h) + w(e.e / h),
                    e.s *= E.s,
                    l = S.length,
                    d = T.length,
                    l < d &&
                      ((g = S), (S = T), (T = g), (i = l), (l = d), (d = i)),
                    i = l + d,
                    g = [];
                  i--;
                  g.push(0)
                );
                for (y = p, b = _, i = d; --i >= 0; ) {
                  for (
                    r = 0, v = T[i] % b, m = (T[i] / b) | 0, a = l, s = i + a;
                    s > i;
                  )
                    ((c = S[--a] % b),
                      (f = (S[a] / b) | 0),
                      (u = m * c + f * v),
                      (c = v * c + (u % b) * b + g[s] + r),
                      (r = ((c / y) | 0) + ((u / b) | 0) + m * f),
                      (g[s--] = c % y));
                  g[s] = r;
                }
                return (r ? ++o : g.splice(0, 1), z(e, g, o));
              }),
            (o.toDigits = function (e, t) {
              var r = new F(this);
              return (
                (e = null != e && q(e, 1, g, 18, "precision") ? 0 | e : null),
                (t = null != t && q(t, 0, 8, 18, c) ? 0 | t : I),
                e ? J(r, e, t) : r
              );
            }),
            (o.toExponential = function (e, t) {
              return X(
                this,
                null != e && q(e, 0, g, 19) ? 1 + ~~e : null,
                t,
                19,
              );
            }),
            (o.toFixed = function (e, t) {
              return X(
                this,
                null != e && q(e, 0, g, 20) ? ~~e + this.e + 1 : null,
                t,
                20,
              );
            }),
            (o.toFormat = function (e, t) {
              var r = X(
                this,
                null != e && q(e, 0, g, 21) ? ~~e + this.e + 1 : null,
                t,
                21,
              );
              if (this.c) {
                var n,
                  o = r.split("."),
                  i = +U.groupSize,
                  s = +U.secondaryGroupSize,
                  a = U.groupSeparator,
                  u = o[0],
                  l = o[1],
                  c = this.s < 0,
                  f = c ? u.slice(1) : u,
                  d = f.length;
                if (
                  (s && ((n = i), (i = s), (s = n), (d -= n)), i > 0 && d > 0)
                ) {
                  for (n = d % i || i, u = f.substr(0, n); n < d; n += i)
                    u += a + f.substr(n, i);
                  (s > 0 && (u += a + f.slice(n)), c && (u = "-" + u));
                }
                r = l
                  ? u +
                    U.decimalSeparator +
                    ((s = +U.fractionGroupSize)
                      ? l.replace(
                          new RegExp("\\d{" + s + "}\\B", "g"),
                          "$&" + U.fractionGroupSeparator,
                        )
                      : l)
                  : u;
              }
              return r;
            }),
            (o.toFraction = function (e) {
              var r,
                n,
                o,
                s,
                a,
                u,
                l,
                c,
                f,
                d = M,
                p = this,
                v = p.c,
                _ = new F(i),
                g = (n = new F(i)),
                y = (l = new F(i));
              if (
                (null != e &&
                  ((M = !1),
                  (u = new F(e)),
                  (M = d),
                  ((d = u.isInt()) && !u.lt(i)) ||
                    (M &&
                      K(
                        22,
                        "max denominator " +
                          (d ? "out of range" : "not an integer"),
                        e,
                      ),
                    (e = !d && u.c && J(u, u.e + 1, 1).gte(i) ? u : null))),
                !v)
              )
                return p.toString();
              for (
                f = b(v),
                  s = _.e = f.length - p.e - 1,
                  _.c[0] = m[(a = s % h) < 0 ? h + a : a],
                  e = !e || u.cmp(_) > 0 ? (s > 0 ? _ : g) : u,
                  a = L,
                  L = 1 / 0,
                  u = new F(f),
                  l.c[0] = 0;
                ;
              ) {
                if (
                  ((c = t(u, _, 0, 1)), (o = n.plus(c.times(y))), 1 == o.cmp(e))
                )
                  break;
                ((n = y),
                  (y = o),
                  (g = l.plus(c.times((o = g)))),
                  (l = o),
                  (_ = u.minus(c.times((o = _)))),
                  (u = o));
              }
              return (
                (o = t(e.minus(n), y, 0, 1)),
                (l = l.plus(o.times(g))),
                (n = n.plus(o.times(y))),
                (l.s = g.s = p.s),
                (s *= 2),
                (r =
                  t(g, y, s, I)
                    .minus(p)
                    .abs()
                    .cmp(t(l, n, s, I).minus(p).abs()) < 1
                    ? [g.toString(), y.toString()]
                    : [l.toString(), n.toString()]),
                (L = a),
                r
              );
            }),
            (o.toNumber = function () {
              return +this;
            }),
            (o.toPower = o.pow =
              function (e, t) {
                var r,
                  o,
                  s,
                  l = u(e < 0 ? -e : +e),
                  c = this;
                if (
                  (null != t && ((n = 23), (t = new F(t))),
                  (!q(e, -v, v, 23, "exponent") &&
                    (!isFinite(e) ||
                      (l > v && (e /= 0)) ||
                      (parseFloat(e) != e && !(e = NaN)))) ||
                    0 == e)
                )
                  return ((r = Math.pow(+c, e)), new F(t ? r % t : r));
                for (
                  t
                    ? e > 1 && c.gt(i) && c.isInt() && t.gt(i) && t.isInt()
                      ? (c = c.mod(t))
                      : ((s = t), (t = null))
                    : k && (r = a(k / h + 2)),
                    o = new F(i);
                  ;
                ) {
                  if (l % 2) {
                    if (((o = o.times(c)), !o.c)) break;
                    r
                      ? o.c.length > r && (o.c.length = r)
                      : t && (o = o.mod(t));
                  }
                  if (((l = u(l / 2)), !l)) break;
                  ((c = c.times(c)),
                    r
                      ? c.c && c.c.length > r && (c.c.length = r)
                      : t && (c = c.mod(t)));
                }
                return t
                  ? o
                  : (e < 0 && (o = i.div(o)),
                    s ? o.mod(s) : r ? J(o, k, I) : o);
              }),
            (o.toPrecision = function (e, t) {
              return X(
                this,
                null != e && q(e, 1, g, 24, "precision") ? 0 | e : null,
                t,
                24,
              );
            }),
            (o.toString = function (e) {
              var t,
                r = this,
                n = r.s,
                o = r.e;
              return (
                null === o
                  ? n
                    ? ((t = "Infinity"), n < 0 && (t = "-" + t))
                    : (t = "NaN")
                  : ((t = b(r.c)),
                    (t =
                      null != e && q(e, 2, 64, 25, "base")
                        ? Q(O(t, o), 0 | e, 10, n)
                        : o <= N || o >= B
                          ? R(t, o)
                          : O(t, o)),
                    n < 0 && r.c[0] && (t = "-" + t)),
                t
              );
            }),
            (o.truncated = o.trunc =
              function () {
                return J(new F(this), this.e + 1, 1);
              }),
            (o.valueOf = o.toJSON =
              function () {
                var e,
                  t = this,
                  r = t.e;
                return null === r
                  ? t.toString()
                  : ((e = b(t.c)),
                    (e = r <= N || r >= B ? R(e, r) : O(e, r)),
                    t.s < 0 ? "-" + e : e);
              }),
            (o.isBigNumber = !0),
            null != e && F.config(e),
            F
          );
        }
        function w(e) {
          var t = 0 | e;
          return e > 0 || e === t ? t : t - 1;
        }
        function b(e) {
          for (var t, r, n = 1, o = e.length, i = e[0] + ""; n < o; ) {
            for (t = e[n++] + "", r = h - t.length; r--; t = "0" + t);
            i += t;
          }
          for (o = i.length; 48 === i.charCodeAt(--o); );
          return i.slice(0, o + 1 || 1);
        }
        function E(e, t) {
          var r,
            n,
            o = e.c,
            i = t.c,
            s = e.s,
            a = t.s,
            u = e.e,
            l = t.e;
          if (!s || !a) return null;
          if (((r = o && !o[0]), (n = i && !i[0]), r || n))
            return r ? (n ? 0 : -a) : s;
          if (s != a) return s;
          if (((r = s < 0), (n = u == l), !o || !i))
            return n ? 0 : !o ^ r ? 1 : -1;
          if (!n) return (u > l) ^ r ? 1 : -1;
          for (a = (u = o.length) < (l = i.length) ? u : l, s = 0; s < a; s++)
            if (o[s] != i[s]) return (o[s] > i[s]) ^ r ? 1 : -1;
          return u == l ? 0 : (u > l) ^ r ? 1 : -1;
        }
        function S(e, t, r) {
          return (e = A(e)) >= t && e <= r;
        }
        function T(e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        }
        function C(e, t, r) {
          for (var n, o, i = [0], s = 0, a = e.length; s < a; ) {
            for (o = i.length; o--; i[o] *= t);
            for (i[(n = 0)] += d.indexOf(e.charAt(s++)); n < i.length; n++)
              i[n] > r - 1 &&
                (null == i[n + 1] && (i[n + 1] = 0),
                (i[n + 1] += (i[n] / r) | 0),
                (i[n] %= r));
          }
          return i.reverse();
        }
        function R(e, t) {
          return (
            (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
            (t < 0 ? "e" : "e+") +
            t
          );
        }
        function O(e, t) {
          var r, n;
          if (t < 0) {
            for (n = "0."; ++t; n += "0");
            e = n + e;
          } else if (((r = e.length), ++t > r)) {
            for (n = "0", t -= r; --t; n += "0");
            e += n;
          } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
          return e;
        }
        function A(e) {
          return ((e = parseFloat(e)), e < 0 ? a(e) : u(e));
        }
        ((i = y()),
          (i["default"] = i.BigNumber = i),
          (n = function () {
            return i;
          }.call(t, r, t, e)),
          void 0 === n || (e.exports = n));
      })();
    },
    3887: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AccountRequiresMemoError =
          t.InvalidSep10ChallengeError =
          t.BadResponseError =
          t.BadRequestError =
          t.NotFoundError =
          t.NetworkError =
            void 0));
      var n = r(2924),
        o = (function (e) {
          function t(r, n) {
            var o = this.constructor,
              i = this,
              s = o.prototype;
            return (
              (i = e.call(this, r) || this),
              (i.__proto__ = s),
              (i.constructor = t),
              (i.response = n),
              i
            );
          }
          return (
            n.__extends(t, e),
            (t.prototype.getResponse = function () {
              return this.response;
            }),
            t
          );
        })(Error);
      t.NetworkError = o;
      var i = (function (e) {
        function t(r, n) {
          var o = this.constructor,
            i = this,
            s = o.prototype;
          return (
            (i = e.call(this, r, n) || this),
            (i.__proto__ = s),
            (i.constructor = t),
            (i.name = "NotFoundError"),
            i
          );
        }
        return (n.__extends(t, e), t);
      })(o);
      t.NotFoundError = i;
      var s = (function (e) {
        function t(r, n) {
          var o = this.constructor,
            i = this,
            s = o.prototype;
          return (
            (i = e.call(this, r, n) || this),
            (i.__proto__ = s),
            (i.constructor = t),
            (i.name = "BadRequestError"),
            i
          );
        }
        return (n.__extends(t, e), t);
      })(o);
      t.BadRequestError = s;
      var a = (function (e) {
        function t(r, n) {
          var o = this.constructor,
            i = this,
            s = o.prototype;
          return (
            (i = e.call(this, r, n) || this),
            (i.__proto__ = s),
            (i.constructor = t),
            (i.name = "BadResponseError"),
            i
          );
        }
        return (n.__extends(t, e), t);
      })(o);
      t.BadResponseError = a;
      var u = (function (e) {
        function t(r) {
          var n = this.constructor,
            o = this,
            i = n.prototype;
          return (
            (o = e.call(this, r) || this),
            (o.__proto__ = i),
            (o.constructor = t),
            (o.name = "InvalidSep10ChallengeError"),
            o
          );
        }
        return (n.__extends(t, e), t);
      })(Error);
      t.InvalidSep10ChallengeError = u;
      var l = (function (e) {
        function t(r, n, o) {
          var i = this.constructor,
            s = this,
            a = i.prototype;
          return (
            (s = e.call(this, r) || this),
            (s.__proto__ = a),
            (s.constructor = t),
            (s.name = "AccountRequiresMemoError"),
            (s.accountId = n),
            (s.operationIndex = o),
            s
          );
        }
        return (n.__extends(t, e), t);
      })(Error);
      t.AccountRequiresMemoError = l;
    },
    4648: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Config = void 0));
      var n = r(2924),
        o = n.__importDefault(r(3369)),
        i = { allowHttp: !1, timeout: 0 },
        s = o.default(i),
        a = (function () {
          function e() {}
          return (
            (e.setAllowHttp = function (e) {
              s.allowHttp = e;
            }),
            (e.setTimeout = function (e) {
              s.timeout = e;
            }),
            (e.isAllowHttp = function () {
              return s.allowHttp;
            }),
            (e.getTimeout = function () {
              return s.timeout;
            }),
            (e.setDefault = function () {
              s = Object.assign({}, i);
            }),
            e
          );
        })();
      t.Config = a;
    },
    4649: function (e, t, r) {
      "use strict";
      (function (t) {
        var n = r(3145),
          o = r(7586),
          i = r(6001),
          s = { "Content-Type": "application/x-www-form-urlencoded" };
        function a(e, t) {
          !n.isUndefined(e) &&
            n.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        function u() {
          var e;
          return (
            ("undefined" !== typeof XMLHttpRequest ||
              ("undefined" !== typeof t &&
                "[object process]" === Object.prototype.toString.call(t))) &&
              (e = r(6002)),
            e
          );
        }
        function l(e, t, r) {
          if (n.isString(e))
            try {
              return ((t || JSON.parse)(e), n.trim(e));
            } catch (o) {
              if ("SyntaxError" !== o.name) throw o;
            }
          return (r || JSON.stringify)(e);
        }
        var c = {
          transitional: {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          adapter: u(),
          transformRequest: [
            function (e, t) {
              return (
                o(t, "Accept"),
                o(t, "Content-Type"),
                n.isFormData(e) ||
                n.isArrayBuffer(e) ||
                n.isBuffer(e) ||
                n.isStream(e) ||
                n.isFile(e) ||
                n.isBlob(e)
                  ? e
                  : n.isArrayBufferView(e)
                    ? e.buffer
                    : n.isURLSearchParams(e)
                      ? (a(
                          t,
                          "application/x-www-form-urlencoded;charset=utf-8",
                        ),
                        e.toString())
                      : n.isObject(e) ||
                          (t && "application/json" === t["Content-Type"])
                        ? (a(t, "application/json"), l(e))
                        : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional || c.transitional,
                r = t && t.silentJSONParsing,
                o = t && t.forcedJSONParsing,
                s = !r && "json" === this.responseType;
              if (s || (o && n.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (a) {
                  if (s) {
                    if ("SyntaxError" === a.name)
                      throw i(a, this, "E_JSON_PARSE");
                    throw a;
                  }
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
        (n.forEach(["delete", "get", "head"], function (e) {
          c.headers[e] = {};
        }),
          n.forEach(["post", "put", "patch"], function (e) {
            c.headers[e] = n.merge(s);
          }),
          (e.exports = c));
      }).call(this, r(18));
    },
    4650: function (e, t, r) {
      "use strict";
      function n(e) {
        this.message = e;
      }
      ((n.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (n.prototype.__CANCEL__ = !0),
        (e.exports = n));
    },
    4970: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getCurrentServerTime = t.SERVER_TIME_MAP = void 0));
      var n = r(2924),
        o = n.__importDefault(r(4971)),
        i = n.__importDefault(r(3888)),
        s = r(4942).version;
      t.SERVER_TIME_MAP = {};
      var a = o.default.create({
        headers: { "X-Client-Name": "js-stellar-sdk", "X-Client-Version": s },
      });
      function u(e) {
        return Math.floor(e / 1e3);
      }
      function l(e) {
        var r = t.SERVER_TIME_MAP[e];
        if (!r || !r.localTimeRecorded || !r.serverTime) return null;
        var n = r.serverTime,
          o = r.localTimeRecorded,
          i = u(new Date().getTime());
        return i - o > 300 ? null : i - o + n;
      }
      (a.interceptors.response.use(function (e) {
        var r = i.default(e.config.url).hostname(),
          n = u(Date.parse(e.headers.date)),
          o = u(new Date().getTime());
        return (
          isNaN(n) ||
            (t.SERVER_TIME_MAP[r] = { serverTime: n, localTimeRecorded: o }),
          e
        );
      }),
        (t.default = a),
        (t.getCurrentServerTime = l));
    },
    4971: function (e, t, r) {
      e.exports = r(7581);
    },
    5943: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      var n = r(2924);
      r(7397).polyfill();
      var o = r(4942).version;
      ((t.version = o),
        n.__exportStar(r(7398), t),
        n.__exportStar(r(7399), t),
        n.__exportStar(r(5944), t),
        n.__exportStar(r(3887), t));
      var i = r(4648);
      Object.defineProperty(t, "Config", {
        enumerable: !0,
        get: function () {
          return i.Config;
        },
      });
      var s = r(7571);
      Object.defineProperty(t, "Server", {
        enumerable: !0,
        get: function () {
          return s.Server;
        },
      });
      var a = r(7614);
      (Object.defineProperty(t, "FederationServer", {
        enumerable: !0,
        get: function () {
          return a.FederationServer;
        },
      }),
        Object.defineProperty(t, "FEDERATION_RESPONSE_MAX_SIZE", {
          enumerable: !0,
          get: function () {
            return a.FEDERATION_RESPONSE_MAX_SIZE;
          },
        }));
      var u = r(6008);
      (Object.defineProperty(t, "StellarTomlResolver", {
        enumerable: !0,
        get: function () {
          return u.StellarTomlResolver;
        },
      }),
        Object.defineProperty(t, "STELLAR_TOML_MAX_SIZE", {
          enumerable: !0,
          get: function () {
            return u.STELLAR_TOML_MAX_SIZE;
          },
        }));
      var l = r(4970);
      (Object.defineProperty(t, "HorizonAxiosClient", {
        enumerable: !0,
        get: function () {
          return l.default;
        },
      }),
        Object.defineProperty(t, "SERVER_TIME_MAP", {
          enumerable: !0,
          get: function () {
            return l.SERVER_TIME_MAP;
          },
        }),
        Object.defineProperty(t, "getCurrentServerTime", {
          enumerable: !0,
          get: function () {
            return l.getCurrentServerTime;
          },
        }),
        n.__exportStar(r(7618), t),
        n.__exportStar(r(4277), t),
        (t.default = e.exports));
    },
    5944: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AccountResponse = void 0));
      var n = r(2924),
        o = n.__importDefault(r(7400)),
        i = r(4277),
        s = (function () {
          function e(e) {
            var t = this;
            ((this._baseAccount = new i.Account(e.account_id, e.sequence)),
              o.default(e, function (e, r) {
                t[r] = e;
              }));
          }
          return (
            (e.prototype.accountId = function () {
              return this._baseAccount.accountId();
            }),
            (e.prototype.sequenceNumber = function () {
              return this._baseAccount.sequenceNumber();
            }),
            (e.prototype.incrementSequenceNumber = function () {
              (this._baseAccount.incrementSequenceNumber(),
                (this.sequence = this._baseAccount.sequenceNumber()));
            }),
            e
          );
        })();
      t.AccountResponse = s;
    },
    5999: function (e, t, r) {
      "use strict";
      e.exports = function (e, t) {
        return function () {
          for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
            r[n] = arguments[n];
          return e.apply(t, r);
        };
      };
    },
    6e3: function (e, t, r) {
      "use strict";
      var n = r(3145);
      function o(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      e.exports = function (e, t, r) {
        if (!t) return e;
        var i;
        if (r) i = r(t);
        else if (n.isURLSearchParams(t)) i = t.toString();
        else {
          var s = [];
          (n.forEach(t, function (e, t) {
            null !== e &&
              "undefined" !== typeof e &&
              (n.isArray(e) ? (t += "[]") : (e = [e]),
              n.forEach(e, function (e) {
                (n.isDate(e)
                  ? (e = e.toISOString())
                  : n.isObject(e) && (e = JSON.stringify(e)),
                  s.push(o(t) + "=" + o(e)));
              }));
          }),
            (i = s.join("&")));
        }
        if (i) {
          var a = e.indexOf("#");
          (-1 !== a && (e = e.slice(0, a)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + i));
        }
        return e;
      };
    },
    6001: function (e, t, r) {
      "use strict";
      e.exports = function (e, t, r, n, o) {
        return (
          (e.config = t),
          r && (e.code = r),
          (e.request = n),
          (e.response = o),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          }),
          e
        );
      };
    },
    6002: function (e, t, r) {
      "use strict";
      var n = r(3145),
        o = r(7587),
        i = r(7588),
        s = r(6e3),
        a = r(7589),
        u = r(7592),
        l = r(7593),
        c = r(6003),
        f = r(4649),
        d = r(4650);
      e.exports = function (e) {
        return new Promise(function (t, r) {
          var p,
            h = e.data,
            v = e.headers,
            m = e.responseType;
          function _() {
            (e.cancelToken && e.cancelToken.unsubscribe(p),
              e.signal && e.signal.removeEventListener("abort", p));
          }
          n.isFormData(h) && delete v["Content-Type"];
          var g = new XMLHttpRequest();
          if (e.auth) {
            var y = e.auth.username || "",
              w = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            v.Authorization = "Basic " + btoa(y + ":" + w);
          }
          var b = a(e.baseURL, e.url);
          function E() {
            if (g) {
              var n =
                  "getAllResponseHeaders" in g
                    ? u(g.getAllResponseHeaders())
                    : null,
                i =
                  m && "text" !== m && "json" !== m
                    ? g.response
                    : g.responseText,
                s = {
                  data: i,
                  status: g.status,
                  statusText: g.statusText,
                  headers: n,
                  config: e,
                  request: g,
                };
              (o(
                function (e) {
                  (t(e), _());
                },
                function (e) {
                  (r(e), _());
                },
                s,
              ),
                (g = null));
            }
          }
          if (
            (g.open(
              e.method.toUpperCase(),
              s(b, e.params, e.paramsSerializer),
              !0,
            ),
            (g.timeout = e.timeout),
            "onloadend" in g
              ? (g.onloadend = E)
              : (g.onreadystatechange = function () {
                  g &&
                    4 === g.readyState &&
                    (0 !== g.status ||
                      (g.responseURL &&
                        0 === g.responseURL.indexOf("file:"))) &&
                    setTimeout(E);
                }),
            (g.onabort = function () {
              g && (r(c("Request aborted", e, "ECONNABORTED", g)), (g = null));
            }),
            (g.onerror = function () {
              (r(c("Network Error", e, null, g)), (g = null));
            }),
            (g.ontimeout = function () {
              var t = e.timeout
                  ? "timeout of " + e.timeout + "ms exceeded"
                  : "timeout exceeded",
                n = e.transitional || f.transitional;
              (e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                r(
                  c(
                    t,
                    e,
                    n.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
                    g,
                  ),
                ),
                (g = null));
            }),
            n.isStandardBrowserEnv())
          ) {
            var S =
              (e.withCredentials || l(b)) && e.xsrfCookieName
                ? i.read(e.xsrfCookieName)
                : void 0;
            S && (v[e.xsrfHeaderName] = S);
          }
          ("setRequestHeader" in g &&
            n.forEach(v, function (e, t) {
              "undefined" === typeof h && "content-type" === t.toLowerCase()
                ? delete v[t]
                : g.setRequestHeader(t, e);
            }),
            n.isUndefined(e.withCredentials) ||
              (g.withCredentials = !!e.withCredentials),
            m && "json" !== m && (g.responseType = e.responseType),
            "function" === typeof e.onDownloadProgress &&
              g.addEventListener("progress", e.onDownloadProgress),
            "function" === typeof e.onUploadProgress &&
              g.upload &&
              g.upload.addEventListener("progress", e.onUploadProgress),
            (e.cancelToken || e.signal) &&
              ((p = function (e) {
                g &&
                  (r(!e || (e && e.type) ? new d("canceled") : e),
                  g.abort(),
                  (g = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(p),
              e.signal &&
                (e.signal.aborted
                  ? p()
                  : e.signal.addEventListener("abort", p))),
            h || (h = null),
            g.send(h));
        });
      };
    },
    6003: function (e, t, r) {
      "use strict";
      var n = r(6001);
      e.exports = function (e, t, r, o, i) {
        var s = new Error(e);
        return n(s, t, r, o, i);
      };
    },
    6004: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    6005: function (e, t, r) {
      "use strict";
      var n = r(3145);
      e.exports = function (e, t) {
        t = t || {};
        var r = {};
        function o(e, t) {
          return n.isPlainObject(e) && n.isPlainObject(t)
            ? n.merge(e, t)
            : n.isPlainObject(t)
              ? n.merge({}, t)
              : n.isArray(t)
                ? t.slice()
                : t;
        }
        function i(r) {
          return n.isUndefined(t[r])
            ? n.isUndefined(e[r])
              ? void 0
              : o(void 0, e[r])
            : o(e[r], t[r]);
        }
        function s(e) {
          if (!n.isUndefined(t[e])) return o(void 0, t[e]);
        }
        function a(r) {
          return n.isUndefined(t[r])
            ? n.isUndefined(e[r])
              ? void 0
              : o(void 0, e[r])
            : o(void 0, t[r]);
        }
        function u(r) {
          return r in t ? o(e[r], t[r]) : r in e ? o(void 0, e[r]) : void 0;
        }
        var l = {
          url: s,
          method: s,
          data: s,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: u,
        };
        return (
          n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
            var t = l[e] || i,
              o = t(e);
            (n.isUndefined(o) && t !== u) || (r[e] = o);
          }),
          r
        );
      };
    },
    6006: function (e, t) {
      e.exports = { version: "0.25.0" };
    },
    6008: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StellarTomlResolver = t.STELLAR_TOML_MAX_SIZE = void 0));
      var n = r(2924),
        o = n.__importDefault(r(4971)),
        i = n.__importDefault(r(7615)),
        s = r(4648);
      t.STELLAR_TOML_MAX_SIZE = 102400;
      var a = o.default.CancelToken,
        u = (function () {
          function e() {}
          return (
            (e.resolve = function (e, r) {
              return (
                void 0 === r && (r = {}),
                n.__awaiter(this, void 0, void 0, function () {
                  var u, l, c;
                  return n.__generator(this, function (n) {
                    return (
                      (u =
                        "undefined" === typeof r.allowHttp
                          ? s.Config.isAllowHttp()
                          : r.allowHttp),
                      (l =
                        "undefined" === typeof r.timeout
                          ? s.Config.getTimeout()
                          : r.timeout),
                      (c = u ? "http" : "https"),
                      [
                        2,
                        o.default
                          .get(c + "://" + e + "/.well-known/stellar.toml", {
                            maxContentLength: t.STELLAR_TOML_MAX_SIZE,
                            cancelToken: l
                              ? new a(function (e) {
                                  return setTimeout(function () {
                                    return e("timeout of " + l + "ms exceeded");
                                  }, l);
                                })
                              : void 0,
                            timeout: l,
                          })
                          .then(function (e) {
                            try {
                              var t = i.default.parse(e.data);
                              return Promise.resolve(t);
                            } catch (r) {
                              return Promise.reject(
                                new Error(
                                  "stellar.toml is invalid - Parsing error on line " +
                                    r.line +
                                    ", column " +
                                    r.column +
                                    ": " +
                                    r.message,
                                ),
                              );
                            }
                          })
                          .catch(function (e) {
                            throw e.message.match(/^maxContentLength size/)
                              ? new Error(
                                  "stellar.toml file exceeds allowed size of " +
                                    t.STELLAR_TOML_MAX_SIZE,
                                )
                              : e;
                          }),
                      ]
                    );
                  });
                })
              );
            }),
            e
          );
        })();
      t.StellarTomlResolver = u;
    },
    7398: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Horizon = void 0),
        (function (e) {
          ((function (e) {
            e["constantProduct"] = "constant_product";
          })(e.LiquidityPoolType || (e.LiquidityPoolType = {})),
            (function (e) {
              ((e["createAccount"] = "create_account"),
                (e["payment"] = "payment"),
                (e["pathPayment"] = "path_payment_strict_receive"),
                (e["createPassiveOffer"] = "create_passive_sell_offer"),
                (e["manageOffer"] = "manage_sell_offer"),
                (e["setOptions"] = "set_options"),
                (e["changeTrust"] = "change_trust"),
                (e["allowTrust"] = "allow_trust"),
                (e["accountMerge"] = "account_merge"),
                (e["inflation"] = "inflation"),
                (e["manageData"] = "manage_data"),
                (e["bumpSequence"] = "bump_sequence"),
                (e["manageBuyOffer"] = "manage_buy_offer"),
                (e["pathPaymentStrictSend"] = "path_payment_strict_send"),
                (e["createClaimableBalance"] = "create_claimable_balance"),
                (e["claimClaimableBalance"] = "claim_claimable_balance"),
                (e["beginSponsoringFutureReserves"] =
                  "begin_sponsoring_future_reserves"),
                (e["endSponsoringFutureReserves"] =
                  "end_sponsoring_future_reserves"),
                (e["revokeSponsorship"] = "revoke_sponsorship"),
                (e["clawback"] = "clawback"),
                (e["clawbackClaimableBalance"] = "clawback_claimable_balance"),
                (e["setTrustLineFlags"] = "set_trust_line_flags"),
                (e["liquidityPoolDeposit"] = "liquidity_pool_deposit"),
                (e["liquidityPoolWithdraw"] = "liquidity_pool_withdraw"));
            })(e.OperationResponseType || (e.OperationResponseType = {})),
            (function (e) {
              ((e[(e["createAccount"] = 0)] = "createAccount"),
                (e[(e["payment"] = 1)] = "payment"),
                (e[(e["pathPayment"] = 2)] = "pathPayment"),
                (e[(e["createPassiveOffer"] = 3)] = "createPassiveOffer"),
                (e[(e["manageOffer"] = 4)] = "manageOffer"),
                (e[(e["setOptions"] = 5)] = "setOptions"),
                (e[(e["changeTrust"] = 6)] = "changeTrust"),
                (e[(e["allowTrust"] = 7)] = "allowTrust"),
                (e[(e["accountMerge"] = 8)] = "accountMerge"),
                (e[(e["inflation"] = 9)] = "inflation"),
                (e[(e["manageData"] = 10)] = "manageData"),
                (e[(e["bumpSequence"] = 11)] = "bumpSequence"),
                (e[(e["manageBuyOffer"] = 12)] = "manageBuyOffer"),
                (e[(e["pathPaymentStrictSend"] = 13)] =
                  "pathPaymentStrictSend"),
                (e[(e["createClaimableBalance"] = 14)] =
                  "createClaimableBalance"),
                (e[(e["claimClaimableBalance"] = 15)] =
                  "claimClaimableBalance"),
                (e[(e["beginSponsoringFutureReserves"] = 16)] =
                  "beginSponsoringFutureReserves"),
                (e[(e["endSponsoringFutureReserves"] = 17)] =
                  "endSponsoringFutureReserves"),
                (e[(e["revokeSponsorship"] = 18)] = "revokeSponsorship"),
                (e[(e["clawback"] = 19)] = "clawback"),
                (e[(e["clawbackClaimableBalance"] = 20)] =
                  "clawbackClaimableBalance"),
                (e[(e["setTrustLineFlags"] = 21)] = "setTrustLineFlags"),
                (e[(e["liquidityPoolDeposit"] = 22)] = "liquidityPoolDeposit"),
                (e[(e["liquidityPoolWithdraw"] = 23)] =
                  "liquidityPoolWithdraw"));
            })(e.OperationResponseTypeI || (e.OperationResponseTypeI = {})),
            (function (e) {
              ((e["TX_FAILED"] = "tx_failed"),
                (e["TX_BAD_SEQ"] = "tx_bad_seq"),
                (e["TX_BAD_AUTH"] = "tx_bad_auth"),
                (e["TX_BAD_AUTH_EXTRA"] = "tx_bad_auth_extra"),
                (e["TX_FEE_BUMP_INNER_SUCCESS"] = "tx_fee_bump_inner_success"),
                (e["TX_FEE_BUMP_INNER_FAILED"] = "tx_fee_bump_inner_failed"),
                (e["TX_NOT_SUPPORTED"] = "tx_not_supported"),
                (e["TX_SUCCESS"] = "tx_success"),
                (e["TX_TOO_EARLY"] = "tx_too_early"),
                (e["TX_TOO_LATE"] = "tx_too_late"),
                (e["TX_MISSING_OPERATION"] = "tx_missing_operation"),
                (e["TX_INSUFFICIENT_BALANCE"] = "tx_insufficient_balance"),
                (e["TX_NO_SOURCE_ACCOUNT"] = "tx_no_source_account"),
                (e["TX_INSUFFICIENT_FEE"] = "tx_insufficient_fee"),
                (e["TX_INTERNAL_ERROR"] = "tx_internal_error"));
            })(
              e.TransactionFailedResultCodes ||
                (e.TransactionFailedResultCodes = {}),
            ));
        })(t.Horizon || (t.Horizon = {})));
    },
    7399: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ServerApi = void 0),
        (function (e) {
          (function (e) {
            ((e["all"] = "all"),
              (e["liquidityPools"] = "liquidity_pool"),
              (e["orderbook"] = "orderbook"));
          })(e.TradeType || (e.TradeType = {}));
        })(t.ServerApi || (t.ServerApi = {})));
    },
    7571: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Server = t.SUBMIT_TRANSACTION_TIMEOUT = void 0));
      var n = r(2924),
        o = n.__importDefault(r(3549)),
        i = n.__importDefault(r(7572)),
        s = n.__importDefault(r(7573)),
        a = r(4277),
        u = n.__importDefault(r(3888)),
        l = r(3055),
        c = r(4648),
        f = r(3887),
        d = r(7598),
        p = r(5944),
        h = r(7599),
        v = r(7600),
        m = r(7601),
        _ = r(7602),
        g = r(7603),
        y = r(7604),
        w = r(7605),
        b = r(7606),
        E = r(7607),
        S = r(7608),
        T = r(7609),
        C = r(7610),
        R = r(7611),
        O = r(7612),
        A = r(7613),
        x = n.__importStar(r(4970));
      t.SUBMIT_TRANSACTION_TIMEOUT = 6e4;
      var I = 1e7,
        N = "MQ==";
      function B(e) {
        return new o.default(e).div(I).toString();
      }
      var P = (function () {
        function e(e, t) {
          (void 0 === t && (t = {}), (this.serverURL = u.default(e)));
          var r =
              "undefined" === typeof t.allowHttp
                ? c.Config.isAllowHttp()
                : t.allowHttp,
            n = {};
          if (
            (t.appName && (n["X-App-Name"] = t.appName),
            t.appVersion && (n["X-App-Version"] = t.appVersion),
            i.default(n) ||
              x.default.interceptors.request.use(function (e) {
                return ((e.headers = s.default(n, e.headers)), e);
              }),
            "https" !== this.serverURL.protocol() && !r)
          )
            throw new Error("Cannot connect to insecure horizon server");
        }
        return (
          (e.prototype.fetchTimebounds = function (e, t) {
            return (
              void 0 === t && (t = !1),
              n.__awaiter(this, void 0, void 0, function () {
                var r;
                return n.__generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (r = x.getCurrentServerTime(this.serverURL.hostname())),
                        r
                          ? [2, { minTime: 0, maxTime: r + e }]
                          : t
                            ? [
                                2,
                                {
                                  minTime: 0,
                                  maxTime:
                                    Math.floor(new Date().getTime() / 1e3) + e,
                                },
                              ]
                            : [
                                4,
                                x.default.get(
                                  u.default(this.serverURL).toString(),
                                ),
                              ]
                      );
                    case 1:
                      return (n.sent(), [4, this.fetchTimebounds(e, !0)]);
                    case 2:
                      return [2, n.sent()];
                  }
                });
              })
            );
          }),
          (e.prototype.fetchBaseFee = function () {
            return n.__awaiter(this, void 0, void 0, function () {
              var e;
              return n.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.feeStats()];
                  case 1:
                    return (
                      (e = t.sent()),
                      [2, parseInt(e.last_ledger_base_fee, 10) || 100]
                    );
                }
              });
            });
          }),
          (e.prototype.feeStats = function () {
            return n.__awaiter(this, void 0, void 0, function () {
              var e;
              return n.__generator(this, function (t) {
                return (
                  (e = new l.CallBuilder(u.default(this.serverURL))),
                  e.filter.push(["fee_stats"]),
                  [2, e.call()]
                );
              });
            });
          }),
          (e.prototype.submitTransaction = function (e, r) {
            return (
              void 0 === r && (r = { skipMemoRequiredCheck: !1 }),
              n.__awaiter(this, void 0, void 0, function () {
                var i;
                return n.__generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return r.skipMemoRequiredCheck
                        ? [3, 2]
                        : [4, this.checkMemoRequired(e)];
                    case 1:
                      (n.sent(), (n.label = 2));
                    case 2:
                      return (
                        (i = encodeURIComponent(
                          e.toEnvelope().toXDR().toString("base64"),
                        )),
                        [
                          2,
                          x.default
                            .post(
                              u
                                .default(this.serverURL)
                                .segment("transactions")
                                .toString(),
                              "tx=" + i,
                              { timeout: t.SUBMIT_TRANSACTION_TIMEOUT },
                            )
                            .then(function (e) {
                              if (!e.data.result_xdr) return e.data;
                              var t,
                                r,
                                n = a.xdr.TransactionResult.fromXDR(
                                  e.data.result_xdr,
                                  "base64",
                                ),
                                i = n.result().value();
                              return (
                                i.length &&
                                  (t = i
                                    .map(function (e, t) {
                                      if (
                                        "manageBuyOffer" !==
                                          e.value().switch().name &&
                                        "manageSellOffer" !==
                                          e.value().switch().name
                                      )
                                        return null;
                                      r = !0;
                                      var n,
                                        i = new o.default(0),
                                        s = new o.default(0),
                                        u = e.value().value().success(),
                                        l = u.offersClaimed().map(function (e) {
                                          var t = e.value(),
                                            r = "";
                                          switch (e.switch()) {
                                            case a.xdr.ClaimAtomType.claimAtomTypeV0():
                                              r =
                                                a.StrKey.encodeEd25519PublicKey(
                                                  t.sellerEd25519(),
                                                );
                                              break;
                                            case a.xdr.ClaimAtomType.claimAtomTypeOrderBook():
                                              r =
                                                a.StrKey.encodeEd25519PublicKey(
                                                  t.sellerId().ed25519(),
                                                );
                                              break;
                                            default:
                                              throw new Error(
                                                "Invalid offer result type: " +
                                                  e.switch(),
                                              );
                                          }
                                          var n = new o.default(
                                              t.amountBought().toString(),
                                            ),
                                            u = new o.default(
                                              t.amountSold().toString(),
                                            );
                                          ((i = i.add(u)), (s = s.add(n)));
                                          var l = a.Asset.fromOperation(
                                              t.assetSold(),
                                            ),
                                            c = a.Asset.fromOperation(
                                              t.assetBought(),
                                            ),
                                            f = {
                                              type: l.getAssetType(),
                                              assetCode: l.getCode(),
                                              issuer: l.getIssuer(),
                                            },
                                            d = {
                                              type: c.getAssetType(),
                                              assetCode: c.getCode(),
                                              issuer: c.getIssuer(),
                                            };
                                          return {
                                            sellerId: r,
                                            offerId: t.offerId().toString(),
                                            assetSold: f,
                                            amountSold: B(u),
                                            assetBought: d,
                                            amountBought: B(n),
                                          };
                                        }),
                                        c = u.offer().switch().name;
                                      if (
                                        "function" === typeof u.offer().value &&
                                        u.offer().value()
                                      ) {
                                        var f = u.offer().value();
                                        n = {
                                          offerId: f.offerId().toString(),
                                          selling: {},
                                          buying: {},
                                          amount: B(f.amount().toString()),
                                          price: {
                                            n: f.price().n(),
                                            d: f.price().d(),
                                          },
                                        };
                                        var d = a.Asset.fromOperation(
                                          f.selling(),
                                        );
                                        n.selling = {
                                          type: d.getAssetType(),
                                          assetCode: d.getCode(),
                                          issuer: d.getIssuer(),
                                        };
                                        var p = a.Asset.fromOperation(
                                          f.buying(),
                                        );
                                        n.buying = {
                                          type: p.getAssetType(),
                                          assetCode: p.getCode(),
                                          issuer: p.getIssuer(),
                                        };
                                      }
                                      return {
                                        offersClaimed: l,
                                        effect: c,
                                        operationIndex: t,
                                        currentOffer: n,
                                        amountBought: B(i),
                                        amountSold: B(s),
                                        isFullyOpen:
                                          !l.length &&
                                          "manageOfferDeleted" !== c,
                                        wasPartiallyFilled:
                                          !!l.length &&
                                          "manageOfferDeleted" !== c,
                                        wasImmediatelyFilled:
                                          !!l.length &&
                                          "manageOfferDeleted" === c,
                                        wasImmediatelyDeleted:
                                          !l.length &&
                                          "manageOfferDeleted" === c,
                                      };
                                    })
                                    .filter(function (e) {
                                      return !!e;
                                    })),
                                Object.assign({}, e.data, {
                                  offerResults: r ? t : void 0,
                                })
                              );
                            })
                            .catch(function (e) {
                              return e instanceof Error
                                ? Promise.reject(e)
                                : Promise.reject(
                                    new f.BadResponseError(
                                      "Transaction submission failed. Server responded: " +
                                        e.status +
                                        " " +
                                        e.statusText,
                                      e.data,
                                    ),
                                  );
                            }),
                        ]
                      );
                  }
                });
              })
            );
          }),
          (e.prototype.accounts = function () {
            return new d.AccountCallBuilder(u.default(this.serverURL));
          }),
          (e.prototype.claimableBalances = function () {
            return new v.ClaimableBalanceCallBuilder(u.default(this.serverURL));
          }),
          (e.prototype.ledgers = function () {
            return new g.LedgerCallBuilder(u.default(this.serverURL));
          }),
          (e.prototype.transactions = function () {
            return new A.TransactionCallBuilder(u.default(this.serverURL));
          }),
          (e.prototype.offers = function () {
            return new w.OfferCallBuilder(u.default(this.serverURL));
          }),
          (e.prototype.orderbook = function (e, t) {
            return new E.OrderbookCallBuilder(u.default(this.serverURL), e, t);
          }),
          (e.prototype.trades = function () {
            return new O.TradesCallBuilder(u.default(this.serverURL));
          }),
          (e.prototype.operations = function () {
            return new b.OperationCallBuilder(u.default(this.serverURL));
          }),
          (e.prototype.liquidityPools = function () {
            return new y.LiquidityPoolCallBuilder(u.default(this.serverURL));
          }),
          (e.prototype.strictReceivePaths = function (e, t, r) {
            return new T.StrictReceivePathCallBuilder(
              u.default(this.serverURL),
              e,
              t,
              r,
            );
          }),
          (e.prototype.strictSendPaths = function (e, t, r) {
            return new C.StrictSendPathCallBuilder(
              u.default(this.serverURL),
              e,
              t,
              r,
            );
          }),
          (e.prototype.payments = function () {
            return new S.PaymentCallBuilder(u.default(this.serverURL));
          }),
          (e.prototype.effects = function () {
            return new m.EffectCallBuilder(u.default(this.serverURL));
          }),
          (e.prototype.friendbot = function (e) {
            return new _.FriendbotBuilder(u.default(this.serverURL), e);
          }),
          (e.prototype.assets = function () {
            return new h.AssetsCallBuilder(u.default(this.serverURL));
          }),
          (e.prototype.loadAccount = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              var t;
              return n.__generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.accounts().accountId(e).call()];
                  case 1:
                    return ((t = r.sent()), [2, new p.AccountResponse(t)]);
                }
              });
            });
          }),
          (e.prototype.tradeAggregation = function (e, t, r, n, o, i) {
            return new R.TradeAggregationCallBuilder(
              u.default(this.serverURL),
              e,
              t,
              r,
              n,
              o,
              i,
            );
          }),
          (e.prototype.checkMemoRequired = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              var t, r, o, i, s, u;
              return n.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (
                      (e instanceof a.FeeBumpTransaction &&
                        (e = e.innerTransaction),
                      "none" !== e.memo.type)
                    )
                      return [2];
                    ((t = new Set()), (r = 0), (n.label = 1));
                  case 1:
                    if (!(r < e.operations.length)) return [3, 6];
                    switch (((o = e.operations[r]), o.type)) {
                      case "payment":
                      case "pathPaymentStrictReceive":
                      case "pathPaymentStrictSend":
                      case "accountMerge":
                        break;
                      default:
                        return [3, 5];
                    }
                    if (((i = o.destination), t.has(i))) return [3, 5];
                    if ((t.add(i), i.startsWith("M"))) return [3, 5];
                    n.label = 2;
                  case 2:
                    return (n.trys.push([2, 4, , 5]), [4, this.loadAccount(i)]);
                  case 3:
                    if (
                      ((s = n.sent()),
                      s.data_attr["config.memo_required"] === N)
                    )
                      throw new f.AccountRequiresMemoError(
                        "account requires memo",
                        i,
                        r,
                      );
                    return [3, 5];
                  case 4:
                    if (
                      ((u = n.sent()), u instanceof f.AccountRequiresMemoError)
                    )
                      throw u;
                    if (!(u instanceof f.NotFoundError)) throw u;
                    return [3, 5];
                  case 5:
                    return (r++, [3, 1]);
                  case 6:
                    return [2];
                }
              });
            });
          }),
          e
        );
      })();
      t.Server = P;
    },
    7581: function (e, t, r) {
      "use strict";
      var n = r(3145),
        o = r(5999),
        i = r(7582),
        s = r(6005),
        a = r(4649);
      function u(e) {
        var t = new i(e),
          r = o(i.prototype.request, t);
        return (
          n.extend(r, i.prototype, t),
          n.extend(r, t),
          (r.create = function (t) {
            return u(s(e, t));
          }),
          r
        );
      }
      var l = u(a);
      ((l.Axios = i),
        (l.Cancel = r(4650)),
        (l.CancelToken = r(7595)),
        (l.isCancel = r(6004)),
        (l.VERSION = r(6006).version),
        (l.all = function (e) {
          return Promise.all(e);
        }),
        (l.spread = r(7596)),
        (l.isAxiosError = r(7597)),
        (e.exports = l),
        (e.exports.default = l));
    },
    7582: function (e, t, r) {
      "use strict";
      var n = r(3145),
        o = r(6e3),
        i = r(7583),
        s = r(7584),
        a = r(6005),
        u = r(7594),
        l = u.validators;
      function c(e) {
        ((this.defaults = e),
          (this.interceptors = { request: new i(), response: new i() }));
      }
      ((c.prototype.request = function (e, t) {
        if (
          ("string" === typeof e ? ((t = t || {}), (t.url = e)) : (t = e || {}),
          !t.url)
        )
          throw new Error("Provided config url is not valid");
        ((t = a(this.defaults, t)),
          t.method
            ? (t.method = t.method.toLowerCase())
            : this.defaults.method
              ? (t.method = this.defaults.method.toLowerCase())
              : (t.method = "get"));
        var r = t.transitional;
        void 0 !== r &&
          u.assertOptions(
            r,
            {
              silentJSONParsing: l.transitional(l.boolean),
              forcedJSONParsing: l.transitional(l.boolean),
              clarifyTimeoutError: l.transitional(l.boolean),
            },
            !1,
          );
        var n = [],
          o = !0;
        this.interceptors.request.forEach(function (e) {
          ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
            ((o = o && e.synchronous), n.unshift(e.fulfilled, e.rejected));
        });
        var i,
          c = [];
        if (
          (this.interceptors.response.forEach(function (e) {
            c.push(e.fulfilled, e.rejected);
          }),
          !o)
        ) {
          var f = [s, void 0];
          (Array.prototype.unshift.apply(f, n),
            (f = f.concat(c)),
            (i = Promise.resolve(t)));
          while (f.length) i = i.then(f.shift(), f.shift());
          return i;
        }
        var d = t;
        while (n.length) {
          var p = n.shift(),
            h = n.shift();
          try {
            d = p(d);
          } catch (v) {
            h(v);
            break;
          }
        }
        try {
          i = s(d);
        } catch (v) {
          return Promise.reject(v);
        }
        while (c.length) i = i.then(c.shift(), c.shift());
        return i;
      }),
        (c.prototype.getUri = function (e) {
          if (!e.url) throw new Error("Provided config url is not valid");
          return (
            (e = a(this.defaults, e)),
            o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
          );
        }),
        n.forEach(["delete", "get", "head", "options"], function (e) {
          c.prototype[e] = function (t, r) {
            return this.request(
              a(r || {}, { method: e, url: t, data: (r || {}).data }),
            );
          };
        }),
        n.forEach(["post", "put", "patch"], function (e) {
          c.prototype[e] = function (t, r, n) {
            return this.request(a(n || {}, { method: e, url: t, data: r }));
          };
        }),
        (e.exports = c));
    },
    7583: function (e, t, r) {
      "use strict";
      var n = r(3145);
      function o() {
        this.handlers = [];
      }
      ((o.prototype.use = function (e, t, r) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!r && r.synchronous,
            runWhen: r ? r.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }),
        (o.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (o.prototype.forEach = function (e) {
          n.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = o));
    },
    7584: function (e, t, r) {
      "use strict";
      var n = r(3145),
        o = r(7585),
        i = r(6004),
        s = r(4649),
        a = r(4650);
      function u(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new a("canceled");
      }
      e.exports = function (e) {
        (u(e),
          (e.headers = e.headers || {}),
          (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
          (e.headers = n.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers,
          )),
          n.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (t) {
              delete e.headers[t];
            },
          ));
        var t = e.adapter || s.adapter;
        return t(e).then(
          function (t) {
            return (
              u(e),
              (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
              t
            );
          },
          function (t) {
            return (
              i(t) ||
                (u(e),
                t &&
                  t.response &&
                  (t.response.data = o.call(
                    e,
                    t.response.data,
                    t.response.headers,
                    e.transformResponse,
                  ))),
              Promise.reject(t)
            );
          },
        );
      };
    },
    7585: function (e, t, r) {
      "use strict";
      var n = r(3145),
        o = r(4649);
      e.exports = function (e, t, r) {
        var i = this || o;
        return (
          n.forEach(r, function (r) {
            e = r.call(i, e, t);
          }),
          e
        );
      };
    },
    7586: function (e, t, r) {
      "use strict";
      var n = r(3145);
      e.exports = function (e, t) {
        n.forEach(e, function (r, n) {
          n !== t &&
            n.toUpperCase() === t.toUpperCase() &&
            ((e[t] = r), delete e[n]);
        });
      };
    },
    7587: function (e, t, r) {
      "use strict";
      var n = r(6003);
      e.exports = function (e, t, r) {
        var o = r.config.validateStatus;
        r.status && o && !o(r.status)
          ? t(
              n(
                "Request failed with status code " + r.status,
                r.config,
                null,
                r.request,
                r,
              ),
            )
          : e(r);
      };
    },
    7588: function (e, t, r) {
      "use strict";
      var n = r(3145);
      e.exports = n.isStandardBrowserEnv()
        ? (function () {
            return {
              write: function (e, t, r, o, i, s) {
                var a = [];
                (a.push(e + "=" + encodeURIComponent(t)),
                  n.isNumber(r) &&
                    a.push("expires=" + new Date(r).toGMTString()),
                  n.isString(o) && a.push("path=" + o),
                  n.isString(i) && a.push("domain=" + i),
                  !0 === s && a.push("secure"),
                  (document.cookie = a.join("; ")));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            };
          })()
        : (function () {
            return {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
          })();
    },
    7589: function (e, t, r) {
      "use strict";
      var n = r(7590),
        o = r(7591);
      e.exports = function (e, t) {
        return e && !n(t) ? o(e, t) : t;
      };
    },
    7590: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
      };
    },
    7591: function (e, t, r) {
      "use strict";
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    },
    7592: function (e, t, r) {
      "use strict";
      var n = r(3145),
        o = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      e.exports = function (e) {
        var t,
          r,
          i,
          s = {};
        return e
          ? (n.forEach(e.split("\n"), function (e) {
              if (
                ((i = e.indexOf(":")),
                (t = n.trim(e.substr(0, i)).toLowerCase()),
                (r = n.trim(e.substr(i + 1))),
                t)
              ) {
                if (s[t] && o.indexOf(t) >= 0) return;
                s[t] =
                  "set-cookie" === t
                    ? (s[t] ? s[t] : []).concat([r])
                    : s[t]
                      ? s[t] + ", " + r
                      : r;
              }
            }),
            s)
          : s;
      };
    },
    7593: function (e, t, r) {
      "use strict";
      var n = r(3145);
      e.exports = n.isStandardBrowserEnv()
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              r = document.createElement("a");
            function o(e) {
              var n = e;
              return (
                t && (r.setAttribute("href", n), (n = r.href)),
                r.setAttribute("href", n),
                {
                  href: r.href,
                  protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                  host: r.host,
                  search: r.search ? r.search.replace(/^\?/, "") : "",
                  hash: r.hash ? r.hash.replace(/^#/, "") : "",
                  hostname: r.hostname,
                  port: r.port,
                  pathname:
                    "/" === r.pathname.charAt(0)
                      ? r.pathname
                      : "/" + r.pathname,
                }
              );
            }
            return (
              (e = o(window.location.href)),
              function (t) {
                var r = n.isString(t) ? o(t) : t;
                return r.protocol === e.protocol && r.host === e.host;
              }
            );
          })()
        : (function () {
            return function () {
              return !0;
            };
          })();
    },
    7594: function (e, t, r) {
      "use strict";
      var n = r(6006).version,
        o = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          o[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        },
      );
      var i = {};
      function s(e, t, r) {
        if ("object" !== typeof e)
          throw new TypeError("options must be an object");
        var n = Object.keys(e),
          o = n.length;
        while (o-- > 0) {
          var i = n[o],
            s = t[i];
          if (s) {
            var a = e[i],
              u = void 0 === a || s(a, i, e);
            if (!0 !== u) throw new TypeError("option " + i + " must be " + u);
          } else if (!0 !== r) throw Error("Unknown option " + i);
        }
      }
      ((o.transitional = function (e, t, r) {
        function o(e, t) {
          return (
            "[Axios v" +
            n +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? ". " + r : "")
          );
        }
        return function (r, n, s) {
          if (!1 === e)
            throw new Error(o(n, " has been removed" + (t ? " in " + t : "")));
          return (
            t &&
              !i[n] &&
              ((i[n] = !0),
              console.warn(
                o(
                  n,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future",
                ),
              )),
            !e || e(r, n, s)
          );
        };
      }),
        (e.exports = { assertOptions: s, validators: o }));
    },
    7595: function (e, t, r) {
      "use strict";
      var n = r(4650);
      function o(e) {
        if ("function" !== typeof e)
          throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var r = this;
        (this.promise.then(function (e) {
          if (r._listeners) {
            var t,
              n = r._listeners.length;
            for (t = 0; t < n; t++) r._listeners[t](e);
            r._listeners = null;
          }
        }),
          (this.promise.then = function (e) {
            var t,
              n = new Promise(function (e) {
                (r.subscribe(e), (t = e));
              }).then(e);
            return (
              (n.cancel = function () {
                r.unsubscribe(t);
              }),
              n
            );
          }),
          e(function (e) {
            r.reason || ((r.reason = new n(e)), t(r.reason));
          }));
      }
      ((o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (o.prototype.subscribe = function (e) {
          this.reason
            ? e(this.reason)
            : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
        }),
        (o.prototype.unsubscribe = function (e) {
          if (this._listeners) {
            var t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
        }),
        (o.source = function () {
          var e,
            t = new o(function (t) {
              e = t;
            });
          return { token: t, cancel: e };
        }),
        (e.exports = o));
    },
    7596: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
    7597: function (e, t, r) {
      "use strict";
      var n = r(3145);
      e.exports = function (e) {
        return n.isObject(e) && !0 === e.isAxiosError;
      };
    },
    7598: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AccountCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (r.url.segment("accounts"), r);
          }
          return (
            n.__extends(t, e),
            (t.prototype.accountId = function (e) {
              var t = new o.CallBuilder(this.url.clone());
              return (t.filter.push([e]), t);
            }),
            (t.prototype.forSigner = function (e) {
              return (this.url.setQuery("signer", e), this);
            }),
            (t.prototype.forAsset = function (e) {
              return (this.url.setQuery("asset", "" + e), this);
            }),
            (t.prototype.sponsor = function (e) {
              return (this.url.setQuery("sponsor", e), this);
            }),
            (t.prototype.forLiquidityPool = function (e) {
              return (this.url.setQuery("liquidity_pool", e), this);
            }),
            t
          );
        })(o.CallBuilder);
      t.AccountCallBuilder = i;
    },
    7599: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AssetsCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (r.url.segment("assets"), r);
          }
          return (
            n.__extends(t, e),
            (t.prototype.forCode = function (e) {
              return (this.url.setQuery("asset_code", e), this);
            }),
            (t.prototype.forIssuer = function (e) {
              return (this.url.setQuery("asset_issuer", e), this);
            }),
            t
          );
        })(o.CallBuilder);
      t.AssetsCallBuilder = i;
    },
    7600: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ClaimableBalanceCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (r.url.segment("claimable_balances"), r);
          }
          return (
            n.__extends(t, e),
            (t.prototype.claimableBalance = function (e) {
              var t = new o.CallBuilder(this.url.clone());
              return (t.filter.push([e]), t);
            }),
            (t.prototype.sponsor = function (e) {
              return (this.url.setQuery("sponsor", e), this);
            }),
            (t.prototype.claimant = function (e) {
              return (this.url.setQuery("claimant", e), this);
            }),
            (t.prototype.asset = function (e) {
              return (this.url.setQuery("asset", e.toString()), this);
            }),
            t
          );
        })(o.CallBuilder);
      t.ClaimableBalanceCallBuilder = i;
    },
    7601: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EffectCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t) {
            var r = e.call(this, t, "effects") || this;
            return (r.url.segment("effects"), r);
          }
          return (
            n.__extends(t, e),
            (t.prototype.forAccount = function (e) {
              return this.forEndpoint("accounts", e);
            }),
            (t.prototype.forLedger = function (e) {
              return this.forEndpoint("ledgers", e.toString());
            }),
            (t.prototype.forTransaction = function (e) {
              return this.forEndpoint("transactions", e);
            }),
            (t.prototype.forOperation = function (e) {
              return this.forEndpoint("operations", e);
            }),
            (t.prototype.forLiquidityPool = function (e) {
              return this.forEndpoint("liquidity_pools", e);
            }),
            t
          );
        })(o.CallBuilder);
      t.EffectCallBuilder = i;
    },
    7602: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FriendbotBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t, r) {
            var n = e.call(this, t) || this;
            return (n.url.segment("friendbot"), n.url.setQuery("addr", r), n);
          }
          return (n.__extends(t, e), t);
        })(o.CallBuilder);
      t.FriendbotBuilder = i;
    },
    7603: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LedgerCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (r.url.segment("ledgers"), r);
          }
          return (
            n.__extends(t, e),
            (t.prototype.ledger = function (e) {
              return (this.filter.push(["ledgers", e.toString()]), this);
            }),
            t
          );
        })(o.CallBuilder);
      t.LedgerCallBuilder = i;
    },
    7604: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LiquidityPoolCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (r.url.segment("liquidity_pools"), r);
          }
          return (
            n.__extends(t, e),
            (t.prototype.forAssets = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var r = e
                .map(function (e) {
                  return e.toString();
                })
                .join(",");
              return (this.url.setQuery("reserves", r), this);
            }),
            (t.prototype.forAccount = function (e) {
              return (this.url.setQuery("account", e), this);
            }),
            (t.prototype.liquidityPoolId = function (e) {
              if (!e.match(/[a-fA-F0-9]{64}/))
                throw new TypeError(
                  e + " does not look like a liquidity pool ID",
                );
              var t = new o.CallBuilder(this.url.clone());
              return (t.filter.push([e.toLowerCase()]), t);
            }),
            t
          );
        })(o.CallBuilder);
      t.LiquidityPoolCallBuilder = i;
    },
    7605: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.OfferCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t) {
            var r = e.call(this, t, "offers") || this;
            return (r.url.segment("offers"), r);
          }
          return (
            n.__extends(t, e),
            (t.prototype.offer = function (e) {
              var t = new o.CallBuilder(this.url.clone());
              return (t.filter.push([e]), t);
            }),
            (t.prototype.forAccount = function (e) {
              return this.forEndpoint("accounts", e);
            }),
            (t.prototype.buying = function (e) {
              return (
                e.isNative()
                  ? this.url.setQuery("buying_asset_type", "native")
                  : (this.url.setQuery("buying_asset_type", e.getAssetType()),
                    this.url.setQuery("buying_asset_code", e.getCode()),
                    this.url.setQuery("buying_asset_issuer", e.getIssuer())),
                this
              );
            }),
            (t.prototype.selling = function (e) {
              return (
                e.isNative()
                  ? this.url.setQuery("selling_asset_type", "native")
                  : (this.url.setQuery("selling_asset_type", e.getAssetType()),
                    this.url.setQuery("selling_asset_code", e.getCode()),
                    this.url.setQuery("selling_asset_issuer", e.getIssuer())),
                this
              );
            }),
            (t.prototype.sponsor = function (e) {
              return (this.url.setQuery("sponsor", e), this);
            }),
            (t.prototype.seller = function (e) {
              return (this.url.setQuery("seller", e), this);
            }),
            t
          );
        })(o.CallBuilder);
      t.OfferCallBuilder = i;
    },
    7606: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.OperationCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t) {
            var r = e.call(this, t, "operations") || this;
            return (r.url.segment("operations"), r);
          }
          return (
            n.__extends(t, e),
            (t.prototype.operation = function (e) {
              var t = new o.CallBuilder(this.url.clone());
              return (t.filter.push([e]), t);
            }),
            (t.prototype.forAccount = function (e) {
              return this.forEndpoint("accounts", e);
            }),
            (t.prototype.forClaimableBalance = function (e) {
              return this.forEndpoint("claimable_balances", e);
            }),
            (t.prototype.forLedger = function (e) {
              return this.forEndpoint("ledgers", e.toString());
            }),
            (t.prototype.forTransaction = function (e) {
              return this.forEndpoint("transactions", e);
            }),
            (t.prototype.forLiquidityPool = function (e) {
              return this.forEndpoint("liquidity_pools", e);
            }),
            (t.prototype.includeFailed = function (e) {
              return (this.url.setQuery("include_failed", e.toString()), this);
            }),
            t
          );
        })(o.CallBuilder);
      t.OperationCallBuilder = i;
    },
    7607: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.OrderbookCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t, r, n) {
            var o = e.call(this, t) || this;
            return (
              o.url.segment("order_book"),
              r.isNative()
                ? o.url.setQuery("selling_asset_type", "native")
                : (o.url.setQuery("selling_asset_type", r.getAssetType()),
                  o.url.setQuery("selling_asset_code", r.getCode()),
                  o.url.setQuery("selling_asset_issuer", r.getIssuer())),
              n.isNative()
                ? o.url.setQuery("buying_asset_type", "native")
                : (o.url.setQuery("buying_asset_type", n.getAssetType()),
                  o.url.setQuery("buying_asset_code", n.getCode()),
                  o.url.setQuery("buying_asset_issuer", n.getIssuer())),
              o
            );
          }
          return (n.__extends(t, e), t);
        })(o.CallBuilder);
      t.OrderbookCallBuilder = i;
    },
    7608: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PaymentCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t) {
            var r = e.call(this, t, "payments") || this;
            return (r.url.segment("payments"), r);
          }
          return (
            n.__extends(t, e),
            (t.prototype.forAccount = function (e) {
              return this.forEndpoint("accounts", e);
            }),
            (t.prototype.forLedger = function (e) {
              return this.forEndpoint("ledgers", e.toString());
            }),
            (t.prototype.forTransaction = function (e) {
              return this.forEndpoint("transactions", e);
            }),
            t
          );
        })(o.CallBuilder);
      t.PaymentCallBuilder = i;
    },
    7609: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StrictReceivePathCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t, r, n, o) {
            var i = e.call(this, t) || this;
            if ((i.url.segment("paths/strict-receive"), "string" === typeof r))
              i.url.setQuery("source_account", r);
            else {
              var s = r
                .map(function (e) {
                  return e.isNative()
                    ? "native"
                    : e.getCode() + ":" + e.getIssuer();
                })
                .join(",");
              i.url.setQuery("source_assets", s);
            }
            return (
              i.url.setQuery("destination_amount", o),
              n.isNative()
                ? i.url.setQuery("destination_asset_type", "native")
                : (i.url.setQuery("destination_asset_type", n.getAssetType()),
                  i.url.setQuery("destination_asset_code", n.getCode()),
                  i.url.setQuery("destination_asset_issuer", n.getIssuer())),
              i
            );
          }
          return (n.__extends(t, e), t);
        })(o.CallBuilder);
      t.StrictReceivePathCallBuilder = i;
    },
    7610: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StrictSendPathCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t, r, n, o) {
            var i = e.call(this, t) || this;
            if (
              (i.url.segment("paths/strict-send"),
              r.isNative()
                ? i.url.setQuery("source_asset_type", "native")
                : (i.url.setQuery("source_asset_type", r.getAssetType()),
                  i.url.setQuery("source_asset_code", r.getCode()),
                  i.url.setQuery("source_asset_issuer", r.getIssuer())),
              i.url.setQuery("source_amount", n),
              "string" === typeof o)
            )
              i.url.setQuery("destination_account", o);
            else {
              var s = o
                .map(function (e) {
                  return e.isNative()
                    ? "native"
                    : e.getCode() + ":" + e.getIssuer();
                })
                .join(",");
              i.url.setQuery("destination_assets", s);
            }
            return i;
          }
          return (n.__extends(t, e), t);
        })(o.CallBuilder);
      t.StrictSendPathCallBuilder = i;
    },
    7611: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TradeAggregationCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = r(3887),
        s = [6e4, 3e5, 9e5, 36e5, 864e5, 6048e5],
        a = (function (e) {
          function t(t, r, n, o, s, a, u) {
            var l = e.call(this, t) || this;
            if (
              (l.url.segment("trade_aggregations"),
              r.isNative()
                ? l.url.setQuery("base_asset_type", "native")
                : (l.url.setQuery("base_asset_type", r.getAssetType()),
                  l.url.setQuery("base_asset_code", r.getCode()),
                  l.url.setQuery("base_asset_issuer", r.getIssuer())),
              n.isNative()
                ? l.url.setQuery("counter_asset_type", "native")
                : (l.url.setQuery("counter_asset_type", n.getAssetType()),
                  l.url.setQuery("counter_asset_code", n.getCode()),
                  l.url.setQuery("counter_asset_issuer", n.getIssuer())),
              "number" !== typeof o || "number" !== typeof s)
            )
              throw new i.BadRequestError("Invalid time bounds", [o, s]);
            if (
              (l.url.setQuery("start_time", o.toString()),
              l.url.setQuery("end_time", s.toString()),
              !l.isValidResolution(a))
            )
              throw new i.BadRequestError("Invalid resolution", a);
            if (
              (l.url.setQuery("resolution", a.toString()),
              !l.isValidOffset(u, a))
            )
              throw new i.BadRequestError("Invalid offset", u);
            return (l.url.setQuery("offset", u.toString()), l);
          }
          return (
            n.__extends(t, e),
            (t.prototype.isValidResolution = function (e) {
              for (var t = 0, r = s; t < r.length; t++) {
                var n = r[t];
                if (n === e) return !0;
              }
              return !1;
            }),
            (t.prototype.isValidOffset = function (e, t) {
              var r = 36e5;
              return !(e > t || e >= 24 * r || e % r !== 0);
            }),
            t
          );
        })(o.CallBuilder);
      t.TradeAggregationCallBuilder = a;
    },
    7612: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TradesCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t) {
            var r = e.call(this, t, "trades") || this;
            return (r.url.segment("trades"), r);
          }
          return (
            n.__extends(t, e),
            (t.prototype.forAssetPair = function (e, t) {
              return (
                e.isNative()
                  ? this.url.setQuery("base_asset_type", "native")
                  : (this.url.setQuery("base_asset_type", e.getAssetType()),
                    this.url.setQuery("base_asset_code", e.getCode()),
                    this.url.setQuery("base_asset_issuer", e.getIssuer())),
                t.isNative()
                  ? this.url.setQuery("counter_asset_type", "native")
                  : (this.url.setQuery("counter_asset_type", t.getAssetType()),
                    this.url.setQuery("counter_asset_code", t.getCode()),
                    this.url.setQuery("counter_asset_issuer", t.getIssuer())),
                this
              );
            }),
            (t.prototype.forOffer = function (e) {
              return (this.url.setQuery("offer_id", e), this);
            }),
            (t.prototype.forType = function (e) {
              return (this.url.setQuery("trade_type", e), this);
            }),
            (t.prototype.forAccount = function (e) {
              return this.forEndpoint("accounts", e);
            }),
            (t.prototype.forLiquidityPool = function (e) {
              return this.forEndpoint("liquidity_pools", e);
            }),
            t
          );
        })(o.CallBuilder);
      t.TradesCallBuilder = i;
    },
    7613: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionCallBuilder = void 0));
      var n = r(2924),
        o = r(3055),
        i = (function (e) {
          function t(t) {
            var r = e.call(this, t, "transactions") || this;
            return (r.url.segment("transactions"), r);
          }
          return (
            n.__extends(t, e),
            (t.prototype.transaction = function (e) {
              var t = new o.CallBuilder(this.url.clone());
              return (t.filter.push([e]), t);
            }),
            (t.prototype.forAccount = function (e) {
              return this.forEndpoint("accounts", e);
            }),
            (t.prototype.forClaimableBalance = function (e) {
              return this.forEndpoint("claimable_balances", e);
            }),
            (t.prototype.forLedger = function (e) {
              return this.forEndpoint("ledgers", e.toString());
            }),
            (t.prototype.forLiquidityPool = function (e) {
              return this.forEndpoint("liquidity_pools", e);
            }),
            (t.prototype.includeFailed = function (e) {
              return (this.url.setQuery("include_failed", e.toString()), this);
            }),
            t
          );
        })(o.CallBuilder);
      t.TransactionCallBuilder = i;
    },
    7614: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FederationServer = t.FEDERATION_RESPONSE_MAX_SIZE = void 0));
      var n = r(2924),
        o = n.__importDefault(r(4971)),
        i = r(4277),
        s = n.__importDefault(r(3888)),
        a = r(4648),
        u = r(3887),
        l = r(6008);
      t.FEDERATION_RESPONSE_MAX_SIZE = 102400;
      var c = (function () {
        function e(e, t, r) {
          (void 0 === r && (r = {}),
            (this.serverURL = s.default(e)),
            (this.domain = t));
          var n =
            "undefined" === typeof r.allowHttp
              ? a.Config.isAllowHttp()
              : r.allowHttp;
          if (
            ((this.timeout =
              "undefined" === typeof r.timeout
                ? a.Config.getTimeout()
                : r.timeout),
            "https" !== this.serverURL.protocol() && !n)
          )
            throw new Error("Cannot connect to insecure federation server");
        }
        return (
          (e.resolve = function (t, r) {
            return (
              void 0 === r && (r = {}),
              n.__awaiter(this, void 0, void 0, function () {
                var o, s, a;
                return n.__generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return t.indexOf("*") < 0
                        ? i.StrKey.isValidEd25519PublicKey(t)
                          ? [2, Promise.resolve({ account_id: t })]
                          : [2, Promise.reject(new Error("Invalid Account ID"))]
                        : ((o = t.split("*")),
                          (s = o[1]),
                          2 === o.length && s
                            ? [4, e.createForDomain(s, r)]
                            : [
                                2,
                                Promise.reject(
                                  new Error("Invalid Stellar address"),
                                ),
                              ]);
                    case 1:
                      return ((a = n.sent()), [2, a.resolveAddress(t)]);
                  }
                });
              })
            );
          }),
          (e.createForDomain = function (t, r) {
            return (
              void 0 === r && (r = {}),
              n.__awaiter(this, void 0, void 0, function () {
                var o;
                return n.__generator(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, l.StellarTomlResolver.resolve(t, r)];
                    case 1:
                      return (
                        (o = n.sent()),
                        o.FEDERATION_SERVER
                          ? [2, new e(o.FEDERATION_SERVER, t, r)]
                          : [
                              2,
                              Promise.reject(
                                new Error(
                                  "stellar.toml does not contain FEDERATION_SERVER field",
                                ),
                              ),
                            ]
                      );
                  }
                });
              })
            );
          }),
          (e.prototype.resolveAddress = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              var t, r;
              return n.__generator(this, function (n) {
                if (((t = e), e.indexOf("*") < 0)) {
                  if (!this.domain)
                    return [
                      2,
                      Promise.reject(
                        new Error(
                          "Unknown domain. Make sure `address` contains a domain (ex. `bob*stellar.org`) or pass `domain` parameter when instantiating the server object.",
                        ),
                      ),
                    ];
                  t = e + "*" + this.domain;
                }
                return (
                  (r = this.serverURL.query({ type: "name", q: t })),
                  [2, this._sendRequest(r)]
                );
              });
            });
          }),
          (e.prototype.resolveAccountId = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              var t;
              return n.__generator(this, function (r) {
                return (
                  (t = this.serverURL.query({ type: "id", q: e })),
                  [2, this._sendRequest(t)]
                );
              });
            });
          }),
          (e.prototype.resolveTransactionId = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              var t;
              return n.__generator(this, function (r) {
                return (
                  (t = this.serverURL.query({ type: "txid", q: e })),
                  [2, this._sendRequest(t)]
                );
              });
            });
          }),
          (e.prototype._sendRequest = function (e) {
            return n.__awaiter(this, void 0, void 0, function () {
              var r;
              return n.__generator(this, function (n) {
                return (
                  (r = this.timeout),
                  [
                    2,
                    o.default
                      .get(e.toString(), {
                        maxContentLength: t.FEDERATION_RESPONSE_MAX_SIZE,
                        timeout: r,
                      })
                      .then(function (e) {
                        if (
                          "undefined" !== typeof e.data.memo &&
                          "string" !== typeof e.data.memo
                        )
                          throw new Error(
                            "memo value should be of type string",
                          );
                        return e.data;
                      })
                      .catch(function (e) {
                        if (e instanceof Error) {
                          if (e.message.match(/^maxContentLength size/))
                            throw new Error(
                              "federation response exceeds allowed size of " +
                                t.FEDERATION_RESPONSE_MAX_SIZE,
                            );
                          return Promise.reject(e);
                        }
                        return Promise.reject(
                          new u.BadResponseError(
                            "Server query failed. Server responded: " +
                              e.status +
                              " " +
                              e.statusText,
                            e.data,
                          ),
                        );
                      }),
                  ]
                );
              });
            });
          }),
          e
        );
      })();
      t.FederationServer = c;
    },
    7618: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Utils = void 0));
        var n = r(2924),
          o = n.__importDefault(r(3369)),
          i = n.__importDefault(r(377)),
          s = r(4277),
          a = r(3887);
        (function (t) {
          function r(e, t, r, n, o, a, u, l, c) {
            if (
              (void 0 === n && (n = 300),
              void 0 === u && (u = null),
              void 0 === l && (l = null),
              void 0 === c && (c = null),
              t.startsWith("M") && u)
            )
              throw Error(
                "memo cannot be used if clientAccountID is a muxed account",
              );
            var f = new s.Account(e.publicKey(), "-1"),
              d = Math.floor(Date.now() / 1e3),
              p = i.default(48).toString("base64"),
              h = new s.TransactionBuilder(f, {
                fee: s.BASE_FEE,
                networkPassphrase: o,
                timebounds: { minTime: d, maxTime: d + n },
              })
                .addOperation(
                  s.Operation.manageData({
                    name: r + " auth",
                    value: p,
                    source: t,
                  }),
                )
                .addOperation(
                  s.Operation.manageData({
                    name: "web_auth_domain",
                    value: a,
                    source: f.accountId(),
                  }),
                );
            if (l) {
              if (!c)
                throw Error(
                  "clientSigningKey is required if clientDomain is provided",
                );
              h.addOperation(
                s.Operation.manageData({
                  name: "client_domain",
                  value: l,
                  source: c,
                }),
              );
            }
            u && h.addMemo(s.Memo.id(u));
            var v = h.build();
            return (v.sign(e), v.toEnvelope().toXDR("base64").toString());
          }
          function u(t, r, n, o, i) {
            var u, l;
            if (r.startsWith("M"))
              throw Error(
                "Invalid serverAccountID: multiplexed accounts are not supported.",
              );
            try {
              l = new s.Transaction(t, n);
            } catch (E) {
              try {
                l = new s.FeeBumpTransaction(t, n);
              } catch (S) {
                throw new a.InvalidSep10ChallengeError(
                  "Invalid challenge: unable to deserialize challengeTx transaction string",
                );
              }
              throw new a.InvalidSep10ChallengeError(
                "Invalid challenge: expected a Transaction but received a FeeBumpTransaction",
              );
            }
            var c = Number.parseInt(l.sequence, 10);
            if (0 !== c)
              throw new a.InvalidSep10ChallengeError(
                "The transaction sequence number should be zero",
              );
            if (l.source !== r)
              throw new a.InvalidSep10ChallengeError(
                "The transaction source account is not equal to the server's account",
              );
            if (l.operations.length < 1)
              throw new a.InvalidSep10ChallengeError(
                "The transaction should contain at least one operation",
              );
            var d = l.operations,
              h = d[0],
              v = d.slice(1);
            if (!h.source)
              throw new a.InvalidSep10ChallengeError(
                "The transaction's operation should contain a source account",
              );
            var m,
              _ = h.source,
              g = null;
            if (l.memo.type !== s.MemoNone) {
              if (_.startsWith("M"))
                throw new a.InvalidSep10ChallengeError(
                  "The transaction has a memo but the client account ID is a muxed account",
                );
              if (l.memo.type !== s.MemoID)
                throw new a.InvalidSep10ChallengeError(
                  "The transaction's memo must be of type `id`",
                );
              g = l.memo.value;
            }
            if ("manageData" !== h.type)
              throw new a.InvalidSep10ChallengeError(
                "The transaction's operation type should be 'manageData'",
              );
            if (
              l.timeBounds &&
              Number.parseInt(
                null === (u = l.timeBounds) || void 0 === u
                  ? void 0
                  : u.maxTime,
                10,
              ) === s.TimeoutInfinite
            )
              throw new a.InvalidSep10ChallengeError(
                "The transaction requires non-infinite timebounds",
              );
            if (!p(l, 300))
              throw new a.InvalidSep10ChallengeError(
                "The transaction has expired",
              );
            if (void 0 === h.value)
              throw new a.InvalidSep10ChallengeError(
                "The transaction's operation values should not be null",
              );
            if (!h.value)
              throw new a.InvalidSep10ChallengeError(
                "The transaction's operation value should not be null",
              );
            if (48 !== e.from(h.value.toString(), "base64").length)
              throw new a.InvalidSep10ChallengeError(
                "The transaction's operation value should be a 64 bytes base64 random string",
              );
            if (!o)
              throw new a.InvalidSep10ChallengeError(
                "Invalid homeDomains: a home domain must be provided for verification",
              );
            if ("string" === typeof o) o + " auth" === h.name && (m = o);
            else {
              if (!Array.isArray(o))
                throw new a.InvalidSep10ChallengeError(
                  "Invalid homeDomains: homeDomains type is " +
                    typeof o +
                    " but should be a string or an array",
                );
              m = o.find(function (e) {
                return e + " auth" === h.name;
              });
            }
            if (!m)
              throw new a.InvalidSep10ChallengeError(
                "Invalid homeDomains: the transaction's operation key name does not match the expected home domain",
              );
            for (var y = 0, w = v; y < w.length; y++) {
              var b = w[y];
              if ("manageData" !== b.type)
                throw new a.InvalidSep10ChallengeError(
                  "The transaction has operations that are not of type 'manageData'",
                );
              if (b.source !== r && "client_domain" !== b.name)
                throw new a.InvalidSep10ChallengeError(
                  "The transaction has operations that are unrecognized",
                );
              if ("web_auth_domain" === b.name) {
                if (void 0 === b.value)
                  throw new a.InvalidSep10ChallengeError(
                    "'web_auth_domain' operation value should not be null",
                  );
                if (b.value.compare(e.from(i)))
                  throw new a.InvalidSep10ChallengeError(
                    "'web_auth_domain' operation value does not match " + i,
                  );
              }
            }
            if (!f(l, r))
              throw new a.InvalidSep10ChallengeError(
                "Transaction not signed by server: '" + r + "'",
              );
            return { tx: l, clientAccountID: _, matchedHomeDomain: m, memo: g };
          }
          function l(e, t, r, n, o, i, s) {
            for (
              var u,
                l = o.map(function (e) {
                  return e.key;
                }),
                f = c(e, t, r, l, i, s),
                d = 0,
                p = function (e) {
                  var t =
                    (null ===
                      (u = o.find(function (t) {
                        return t.key === e;
                      })) || void 0 === u
                      ? void 0
                      : u.weight) || 0;
                  d += t;
                },
                h = 0,
                v = f;
              h < v.length;
              h++
            ) {
              var m = v[h];
              p(m);
            }
            if (d < n)
              throw new a.InvalidSep10ChallengeError(
                "signers with weight " +
                  d +
                  " do not meet threshold " +
                  n +
                  '"',
              );
            return f;
          }
          function c(e, t, r, o, i, l) {
            var c,
              f = u(e, t, r, i, l).tx;
            try {
              c = s.Keypair.fromPublicKey(t);
            } catch (O) {
              throw new Error(
                "Couldn't infer keypair from the provided 'serverAccountID': " +
                  O.message,
              );
            }
            for (var p, h = new Set(), v = 0, m = o; v < m.length; v++) {
              var _ = m[v];
              _ !== c.publicKey() && "G" === _.charAt(0) && h.add(_);
            }
            if (0 === h.size)
              throw new a.InvalidSep10ChallengeError(
                "No verifiable client signers provided, at least one G... address must be provided",
              );
            for (var g = 0, y = f.operations; g < y.length; g++) {
              var w = y[g];
              if ("manageData" === w.type && "client_domain" === w.name) {
                if (p)
                  throw new a.InvalidSep10ChallengeError(
                    "Found more than one client_domain operation",
                  );
                p = w.source;
              }
            }
            var b = n.__spreadArrays([c.publicKey()], Array.from(h));
            p && b.push(p);
            for (
              var E = d(f, b), S = !1, T = !1, C = 0, R = E;
              C < R.length;
              C++
            ) {
              _ = R[C];
              (_ === c.publicKey() && (S = !0), _ === p && (T = !0));
            }
            if (!S)
              throw new a.InvalidSep10ChallengeError(
                "Transaction not signed by server: '" + c.publicKey() + "'",
              );
            if (p && !T)
              throw new a.InvalidSep10ChallengeError(
                "Transaction not signed by the source account of the 'client_domain' ManageData operation",
              );
            if (1 === E.length)
              throw new a.InvalidSep10ChallengeError(
                "None of the given signers match the transaction signatures",
              );
            if (E.length !== f.signatures.length)
              throw new a.InvalidSep10ChallengeError(
                "Transaction has unrecognized signatures",
              );
            return (
              E.splice(E.indexOf(c.publicKey()), 1),
              p && E.splice(E.indexOf(p), 1),
              E
            );
          }
          function f(e, t) {
            return 0 !== d(e, [t]).length;
          }
          function d(e, t) {
            for (
              var r = e.hash(),
                n = o.default(e.signatures),
                i = new Set(),
                u = 0,
                l = t;
              u < l.length;
              u++
            ) {
              var c = l[u];
              if (0 === n.length) break;
              var f = void 0;
              try {
                f = s.Keypair.fromPublicKey(c);
              } catch (h) {
                throw new a.InvalidSep10ChallengeError(
                  "Signer is not a valid address: " + h.message,
                );
              }
              for (var d = 0; d < n.length; d++) {
                var p = n[d];
                if (
                  p.hint().equals(f.signatureHint()) &&
                  f.verify(r, p.signature())
                ) {
                  (i.add(c), n.splice(d, 1));
                  break;
                }
              }
            }
            return Array.from(i);
          }
          function p(e, t) {
            if ((void 0 === t && (t = 0), !e.timeBounds)) return !1;
            var r = Math.floor(Date.now() / 1e3),
              n = e.timeBounds,
              o = n.minTime,
              i = n.maxTime;
            return (
              r >= Number.parseInt(o, 10) - t && r <= Number.parseInt(i, 10) + t
            );
          }
          ((t.buildChallengeTx = r),
            (t.readChallengeTx = u),
            (t.verifyChallengeTxThreshold = l),
            (t.verifyChallengeTxSigners = c),
            (t.verifyTxSignedBy = f),
            (t.gatherTxSigners = d));
        })(t.Utils || (t.Utils = {}));
      }).call(this, r(2).Buffer);
    },
  },
]);
