(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [4],
  {
    2792: function (e, t, r) {
      "use strict";
      var n = r(797),
        i = r(3263);
      function s(e) {
        var t = n("sha256").update(e).digest();
        return n("sha256").update(t).digest();
      }
      e.exports = i(s);
    },
    3263: function (e, t, r) {
      "use strict";
      var n = r(234),
        i = r(46).Buffer;
      e.exports = function (e) {
        function t(t) {
          var r = e(t);
          return n.encode(i.concat([t, r], t.length + 4));
        }
        function r(t) {
          var r = t.slice(0, -4),
            n = t.slice(-4),
            i = e(r);
          if (!((n[0] ^ i[0]) | (n[1] ^ i[1]) | (n[2] ^ i[2]) | (n[3] ^ i[3])))
            return r;
        }
        function s(e) {
          var t = n.decodeUnsafe(e);
          if (t) return r(t);
        }
        function a(t) {
          var i = n.decode(t),
            s = r(i, e);
          if (!s) throw new Error("Invalid checksum");
          return s;
        }
        return { encode: t, decode: a, decodeUnsafe: s };
      };
    },
    4620: function (e, t, r) {
      var n;
      (function (i) {
        "use strict";
        var s,
          a = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
          u = Math.ceil,
          c = Math.floor,
          h = "[BigNumber Error] ",
          l = h + "Number primitive has more than 15 significant digits: ",
          p = 1e14,
          f = 14,
          d = 9007199254740991,
          g = [
            1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
            1e13,
          ],
          m = 1e7,
          y = 1e9;
        function b(e) {
          var t,
            r,
            n,
            i = (M.prototype = {
              constructor: M,
              toString: null,
              valueOf: null,
            }),
            s = new M(1),
            I = 20,
            A = 4,
            k = -7,
            P = 21,
            U = -1e7,
            B = 1e7,
            F = !1,
            x = 1,
            O = 0,
            R = {
              prefix: "",
              groupSize: 3,
              secondaryGroupSize: 0,
              groupSeparator: ",",
              decimalSeparator: ".",
              fractionGroupSize: 0,
              fractionGroupSeparator: " ",
              suffix: "",
            },
            L = "0123456789abcdefghijklmnopqrstuvwxyz";
          function M(e, t) {
            var i,
              s,
              o,
              u,
              h,
              p,
              g,
              m,
              y = this;
            if (!(y instanceof M)) return new M(e, t);
            if (null == t) {
              if (e && !0 === e._isBigNumber)
                return (
                  (y.s = e.s),
                  void (!e.c || e.e > B
                    ? (y.c = y.e = null)
                    : e.e < U
                      ? (y.c = [(y.e = 0)])
                      : ((y.e = e.e), (y.c = e.c.slice())))
                );
              if ((p = "number" == typeof e) && 0 * e == 0) {
                if (((y.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                  for (u = 0, h = e; h >= 10; h /= 10, u++);
                  return void (u > B
                    ? (y.c = y.e = null)
                    : ((y.e = u), (y.c = [e])));
                }
                m = String(e);
              } else {
                if (!a.test((m = String(e)))) return n(y, m, p);
                y.s = 45 == m.charCodeAt(0) ? ((m = m.slice(1)), -1) : 1;
              }
              ((u = m.indexOf(".")) > -1 && (m = m.replace(".", "")),
                (h = m.search(/e/i)) > 0
                  ? (u < 0 && (u = h),
                    (u += +m.slice(h + 1)),
                    (m = m.substring(0, h)))
                  : u < 0 && (u = m.length));
            } else {
              if ((S(t, 2, L.length, "Base"), 10 == t))
                return ((y = new M(e)), G(y, I + y.e + 1, A));
              if (((m = String(e)), (p = "number" == typeof e))) {
                if (0 * e != 0) return n(y, m, p, t);
                if (
                  ((y.s = 1 / e < 0 ? ((m = m.slice(1)), -1) : 1),
                  M.DEBUG && m.replace(/^0\.0*|\./, "").length > 15)
                )
                  throw Error(l + e);
              } else y.s = 45 === m.charCodeAt(0) ? ((m = m.slice(1)), -1) : 1;
              for (i = L.slice(0, t), u = h = 0, g = m.length; h < g; h++)
                if (i.indexOf((s = m.charAt(h))) < 0) {
                  if ("." == s) {
                    if (h > u) {
                      u = g;
                      continue;
                    }
                  } else if (
                    !o &&
                    ((m == m.toUpperCase() && (m = m.toLowerCase())) ||
                      (m == m.toLowerCase() && (m = m.toUpperCase())))
                  ) {
                    ((o = !0), (h = -1), (u = 0));
                    continue;
                  }
                  return n(y, String(e), p, t);
                }
              ((p = !1),
                (m = r(m, t, 10, y.s)),
                (u = m.indexOf(".")) > -1
                  ? (m = m.replace(".", ""))
                  : (u = m.length));
            }
            for (h = 0; 48 === m.charCodeAt(h); h++);
            for (g = m.length; 48 === m.charCodeAt(--g); );
            if ((m = m.slice(h, ++g))) {
              if (((g -= h), p && M.DEBUG && g > 15 && (e > d || e !== c(e))))
                throw Error(l + y.s * e);
              if ((u = u - h - 1) > B) y.c = y.e = null;
              else if (u < U) y.c = [(y.e = 0)];
              else {
                if (
                  ((y.e = u),
                  (y.c = []),
                  (h = (u + 1) % f),
                  u < 0 && (h += f),
                  h < g)
                ) {
                  for (h && y.c.push(+m.slice(0, h)), g -= f; h < g; )
                    y.c.push(+m.slice(h, (h += f)));
                  h = f - (m = m.slice(h)).length;
                } else h -= g;
                for (; h--; m += "0");
                y.c.push(+m);
              }
            } else y.c = [(y.e = 0)];
          }
          function j(e, t, r, n) {
            var i, s, a, o, u;
            if ((null == r ? (r = A) : S(r, 0, 8), !e.c)) return e.toString();
            if (((i = e.c[0]), (a = e.e), null == t))
              ((u = v(e.c)),
                (u =
                  1 == n || (2 == n && (a <= k || a >= P))
                    ? E(u, a)
                    : T(u, a, "0")));
            else if (
              ((e = G(new M(e), t, r)),
              (s = e.e),
              (u = v(e.c)),
              (o = u.length),
              1 == n || (2 == n && (t <= s || s <= k)))
            ) {
              for (; o < t; u += "0", o++);
              u = E(u, s);
            } else if (((t -= a), (u = T(u, s, "0")), s + 1 > o)) {
              if (--t > 0) for (u += "."; t--; u += "0");
            } else if (((t += s - o), t > 0))
              for (s + 1 == o && (u += "."); t--; u += "0");
            return e.s < 0 && i ? "-" + u : u;
          }
          function D(e, t) {
            for (var r, n = 1, i = new M(e[0]); n < e.length; n++) {
              if (((r = new M(e[n])), !r.s)) {
                i = r;
                break;
              }
              t.call(i, r) && (i = r);
            }
            return i;
          }
          function H(e, t, r) {
            for (var n = 1, i = t.length; !t[--i]; t.pop());
            for (i = t[0]; i >= 10; i /= 10, n++);
            return (
              (r = n + r * f - 1) > B
                ? (e.c = e.e = null)
                : r < U
                  ? (e.c = [(e.e = 0)])
                  : ((e.e = r), (e.c = t)),
              e
            );
          }
          function G(e, t, r, n) {
            var i,
              s,
              a,
              o,
              h,
              l,
              d,
              m = e.c,
              y = g;
            if (m) {
              e: {
                for (i = 1, o = m[0]; o >= 10; o /= 10, i++);
                if (((s = t - i), s < 0))
                  ((s += f),
                    (a = t),
                    (h = m[(l = 0)]),
                    (d = ((h / y[i - a - 1]) % 10) | 0));
                else if (((l = u((s + 1) / f)), l >= m.length)) {
                  if (!n) break e;
                  for (; m.length <= l; m.push(0));
                  ((h = d = 0), (i = 1), (s %= f), (a = s - f + 1));
                } else {
                  for (h = o = m[l], i = 1; o >= 10; o /= 10, i++);
                  ((s %= f),
                    (a = s - f + i),
                    (d = a < 0 ? 0 : ((h / y[i - a - 1]) % 10) | 0));
                }
                if (
                  ((n =
                    n ||
                    t < 0 ||
                    null != m[l + 1] ||
                    (a < 0 ? h : h % y[i - a - 1])),
                  (n =
                    r < 4
                      ? (d || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                      : d > 5 ||
                        (5 == d &&
                          (4 == r ||
                            n ||
                            (6 == r &&
                              ((s > 0 ? (a > 0 ? h / y[i - a] : 0) : m[l - 1]) %
                                10) &
                                1) ||
                            r == (e.s < 0 ? 8 : 7)))),
                  t < 1 || !m[0])
                )
                  return (
                    (m.length = 0),
                    n
                      ? ((t -= e.e + 1),
                        (m[0] = y[(f - (t % f)) % f]),
                        (e.e = -t || 0))
                      : (m[0] = e.e = 0),
                    e
                  );
                if (
                  (0 == s
                    ? ((m.length = l), (o = 1), l--)
                    : ((m.length = l + 1),
                      (o = y[f - s]),
                      (m[l] = a > 0 ? c((h / y[i - a]) % y[a]) * o : 0)),
                  n)
                )
                  for (;;) {
                    if (0 == l) {
                      for (s = 1, a = m[0]; a >= 10; a /= 10, s++);
                      for (a = m[0] += o, o = 1; a >= 10; a /= 10, o++);
                      s != o && (e.e++, m[0] == p && (m[0] = 1));
                      break;
                    }
                    if (((m[l] += o), m[l] != p)) break;
                    ((m[l--] = 0), (o = 1));
                  }
                for (s = m.length; 0 === m[--s]; m.pop());
              }
              e.e > B ? (e.c = e.e = null) : e.e < U && (e.c = [(e.e = 0)]);
            }
            return e;
          }
          function z(e) {
            var t,
              r = e.e;
            return null === r
              ? e.toString()
              : ((t = v(e.c)),
                (t = r <= k || r >= P ? E(t, r) : T(t, r, "0")),
                e.s < 0 ? "-" + t : t);
          }
          return (
            (M.clone = b),
            (M.ROUND_UP = 0),
            (M.ROUND_DOWN = 1),
            (M.ROUND_CEIL = 2),
            (M.ROUND_FLOOR = 3),
            (M.ROUND_HALF_UP = 4),
            (M.ROUND_HALF_DOWN = 5),
            (M.ROUND_HALF_EVEN = 6),
            (M.ROUND_HALF_CEIL = 7),
            (M.ROUND_HALF_FLOOR = 8),
            (M.EUCLID = 9),
            (M.config = M.set =
              function (e) {
                var t, r;
                if (null != e) {
                  if ("object" != typeof e)
                    throw Error(h + "Object expected: " + e);
                  if (
                    (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                      ((r = e[t]), S(r, 0, y, t), (I = r)),
                    e.hasOwnProperty((t = "ROUNDING_MODE")) &&
                      ((r = e[t]), S(r, 0, 8, t), (A = r)),
                    e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                      ((r = e[t]),
                      r && r.pop
                        ? (S(r[0], -y, 0, t),
                          S(r[1], 0, y, t),
                          (k = r[0]),
                          (P = r[1]))
                        : (S(r, -y, y, t), (k = -(P = r < 0 ? -r : r)))),
                    e.hasOwnProperty((t = "RANGE")))
                  )
                    if (((r = e[t]), r && r.pop))
                      (S(r[0], -y, -1, t),
                        S(r[1], 1, y, t),
                        (U = r[0]),
                        (B = r[1]));
                    else {
                      if ((S(r, -y, y, t), !r))
                        throw Error(h + t + " cannot be zero: " + r);
                      U = -(B = r < 0 ? -r : r);
                    }
                  if (e.hasOwnProperty((t = "CRYPTO"))) {
                    if (((r = e[t]), r !== !!r))
                      throw Error(h + t + " not true or false: " + r);
                    if (r) {
                      if (
                        "undefined" == typeof crypto ||
                        !crypto ||
                        (!crypto.getRandomValues && !crypto.randomBytes)
                      )
                        throw ((F = !r), Error(h + "crypto unavailable"));
                      F = r;
                    } else F = r;
                  }
                  if (
                    (e.hasOwnProperty((t = "MODULO_MODE")) &&
                      ((r = e[t]), S(r, 0, 9, t), (x = r)),
                    e.hasOwnProperty((t = "POW_PRECISION")) &&
                      ((r = e[t]), S(r, 0, y, t), (O = r)),
                    e.hasOwnProperty((t = "FORMAT")))
                  ) {
                    if (((r = e[t]), "object" != typeof r))
                      throw Error(h + t + " not an object: " + r);
                    R = r;
                  }
                  if (e.hasOwnProperty((t = "ALPHABET"))) {
                    if (
                      ((r = e[t]),
                      "string" != typeof r || /^.$|[+-.\s]|(.).*\1/.test(r))
                    )
                      throw Error(h + t + " invalid: " + r);
                    L = r;
                  }
                }
                return {
                  DECIMAL_PLACES: I,
                  ROUNDING_MODE: A,
                  EXPONENTIAL_AT: [k, P],
                  RANGE: [U, B],
                  CRYPTO: F,
                  MODULO_MODE: x,
                  POW_PRECISION: O,
                  FORMAT: R,
                  ALPHABET: L,
                };
              }),
            (M.isBigNumber = function (e) {
              if (!e || !0 !== e._isBigNumber) return !1;
              if (!M.DEBUG) return !0;
              var t,
                r,
                n = e.c,
                i = e.e,
                s = e.s;
              e: if ("[object Array]" == {}.toString.call(n)) {
                if ((1 === s || -1 === s) && i >= -y && i <= y && i === c(i)) {
                  if (0 === n[0]) {
                    if (0 === i && 1 === n.length) return !0;
                    break e;
                  }
                  if (
                    ((t = (i + 1) % f),
                    t < 1 && (t += f),
                    String(n[0]).length == t)
                  ) {
                    for (t = 0; t < n.length; t++)
                      if (((r = n[t]), r < 0 || r >= p || r !== c(r))) break e;
                    if (0 !== r) return !0;
                  }
                }
              } else if (
                null === n &&
                null === i &&
                (null === s || 1 === s || -1 === s)
              )
                return !0;
              throw Error(h + "Invalid BigNumber: " + e);
            }),
            (M.maximum = M.max =
              function () {
                return D(arguments, i.lt);
              }),
            (M.minimum = M.min =
              function () {
                return D(arguments, i.gt);
              }),
            (M.random = (function () {
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
                  a,
                  o,
                  l = 0,
                  p = [],
                  d = new M(s);
                if ((null == e ? (e = I) : S(e, 0, y), (a = u(e / f)), F))
                  if (crypto.getRandomValues) {
                    for (
                      r = crypto.getRandomValues(new Uint32Array((a *= 2)));
                      l < a;
                    )
                      ((o = 131072 * r[l] + (r[l + 1] >>> 11)),
                        o >= 9e15
                          ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                            (r[l] = n[0]),
                            (r[l + 1] = n[1]))
                          : (p.push(o % 1e14), (l += 2)));
                    l = a / 2;
                  } else {
                    if (!crypto.randomBytes)
                      throw ((F = !1), Error(h + "crypto unavailable"));
                    for (r = crypto.randomBytes((a *= 7)); l < a; )
                      ((o =
                        281474976710656 * (31 & r[l]) +
                        1099511627776 * r[l + 1] +
                        4294967296 * r[l + 2] +
                        16777216 * r[l + 3] +
                        (r[l + 4] << 16) +
                        (r[l + 5] << 8) +
                        r[l + 6]),
                        o >= 9e15
                          ? crypto.randomBytes(7).copy(r, l)
                          : (p.push(o % 1e14), (l += 7)));
                    l = a / 7;
                  }
                if (!F)
                  for (; l < a; ) ((o = t()), o < 9e15 && (p[l++] = o % 1e14));
                for (
                  a = p[--l],
                    e %= f,
                    a && e && ((o = g[f - e]), (p[l] = c(a / o) * o));
                  0 === p[l];
                  p.pop(), l--
                );
                if (l < 0) p = [(i = 0)];
                else {
                  for (i = -1; 0 === p[0]; p.splice(0, 1), i -= f);
                  for (l = 1, o = p[0]; o >= 10; o /= 10, l++);
                  l < f && (i -= f - l);
                }
                return ((d.e = i), (d.c = p), d);
              };
            })()),
            (M.sum = function () {
              for (var e = 1, t = arguments, r = new M(t[0]); e < t.length; )
                r = r.plus(t[e++]);
              return r;
            }),
            (r = (function () {
              var e = "0123456789";
              function r(e, t, r, n) {
                for (var i, s, a = [0], o = 0, u = e.length; o < u; ) {
                  for (s = a.length; s--; a[s] *= t);
                  for (
                    a[0] += n.indexOf(e.charAt(o++)), i = 0;
                    i < a.length;
                    i++
                  )
                    a[i] > r - 1 &&
                      (null == a[i + 1] && (a[i + 1] = 0),
                      (a[i + 1] += (a[i] / r) | 0),
                      (a[i] %= r));
                }
                return a.reverse();
              }
              return function (n, i, s, a, o) {
                var u,
                  c,
                  h,
                  l,
                  p,
                  f,
                  d,
                  g,
                  m = n.indexOf("."),
                  y = I,
                  b = A;
                for (
                  m >= 0 &&
                    ((l = O),
                    (O = 0),
                    (n = n.replace(".", "")),
                    (g = new M(i)),
                    (f = g.pow(n.length - m)),
                    (O = l),
                    (g.c = r(T(v(f.c), f.e, "0"), 10, s, e)),
                    (g.e = g.c.length)),
                    d = r(n, i, s, o ? ((u = L), e) : ((u = e), L)),
                    h = l = d.length;
                  0 == d[--l];
                  d.pop()
                );
                if (!d[0]) return u.charAt(0);
                if (
                  (m < 0
                    ? --h
                    : ((f.c = d),
                      (f.e = h),
                      (f.s = a),
                      (f = t(f, g, y, b, s)),
                      (d = f.c),
                      (p = f.r),
                      (h = f.e)),
                  (c = h + y + 1),
                  (m = d[c]),
                  (l = s / 2),
                  (p = p || c < 0 || null != d[c + 1]),
                  (p =
                    b < 4
                      ? (null != m || p) && (0 == b || b == (f.s < 0 ? 3 : 2))
                      : m > l ||
                        (m == l &&
                          (4 == b ||
                            p ||
                            (6 == b && 1 & d[c - 1]) ||
                            b == (f.s < 0 ? 8 : 7)))),
                  c < 1 || !d[0])
                )
                  n = p ? T(u.charAt(1), -y, u.charAt(0)) : u.charAt(0);
                else {
                  if (((d.length = c), p))
                    for (--s; ++d[--c] > s; )
                      ((d[c] = 0), c || (++h, (d = [1].concat(d))));
                  for (l = d.length; !d[--l]; );
                  for (m = 0, n = ""; m <= l; n += u.charAt(d[m++]));
                  n = T(n, h, u.charAt(0));
                }
                return n;
              };
            })()),
            (t = (function () {
              function e(e, t, r) {
                var n,
                  i,
                  s,
                  a,
                  o = 0,
                  u = e.length,
                  c = t % m,
                  h = (t / m) | 0;
                for (e = e.slice(); u--; )
                  ((s = e[u] % m),
                    (a = (e[u] / m) | 0),
                    (n = h * s + a * c),
                    (i = c * s + (n % m) * m + o),
                    (o = ((i / r) | 0) + ((n / m) | 0) + h * a),
                    (e[u] = i % r));
                return (o && (e = [o].concat(e)), e);
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
              return function (n, i, s, a, o) {
                var u,
                  h,
                  l,
                  d,
                  g,
                  m,
                  y,
                  b,
                  v,
                  _,
                  S,
                  N,
                  E,
                  T,
                  I,
                  A,
                  k,
                  P = n.s == i.s ? 1 : -1,
                  U = n.c,
                  B = i.c;
                if (!U || !U[0] || !B || !B[0])
                  return new M(
                    n.s && i.s && (U ? !B || U[0] != B[0] : B)
                      ? (U && 0 == U[0]) || !B
                        ? 0 * P
                        : P / 0
                      : NaN,
                  );
                for (
                  b = new M(P),
                    v = b.c = [],
                    h = n.e - i.e,
                    P = s + h + 1,
                    o ||
                      ((o = p),
                      (h = w(n.e / f) - w(i.e / f)),
                      (P = (P / f) | 0)),
                    l = 0;
                  B[l] == (U[l] || 0);
                  l++
                );
                if ((B[l] > (U[l] || 0) && h--, P < 0)) (v.push(1), (d = !0));
                else {
                  for (
                    T = U.length,
                      A = B.length,
                      l = 0,
                      P += 2,
                      g = c(o / (B[0] + 1)),
                      g > 1 &&
                        ((B = e(B, g, o)),
                        (U = e(U, g, o)),
                        (A = B.length),
                        (T = U.length)),
                      E = A,
                      _ = U.slice(0, A),
                      S = _.length;
                    S < A;
                    _[S++] = 0
                  );
                  ((k = B.slice()),
                    (k = [0].concat(k)),
                    (I = B[0]),
                    B[1] >= o / 2 && I++);
                  do {
                    if (((g = 0), (u = t(B, _, A, S)), u < 0)) {
                      if (
                        ((N = _[0]),
                        A != S && (N = N * o + (_[1] || 0)),
                        (g = c(N / I)),
                        g > 1)
                      ) {
                        (g >= o && (g = o - 1),
                          (m = e(B, g, o)),
                          (y = m.length),
                          (S = _.length));
                        while (1 == t(m, _, y, S))
                          (g--,
                            r(m, A < y ? k : B, y, o),
                            (y = m.length),
                            (u = 1));
                      } else
                        (0 == g && (u = g = 1),
                          (m = B.slice()),
                          (y = m.length));
                      if (
                        (y < S && (m = [0].concat(m)),
                        r(_, m, S, o),
                        (S = _.length),
                        -1 == u)
                      )
                        while (t(B, _, A, S) < 1)
                          (g++, r(_, A < S ? k : B, S, o), (S = _.length));
                    } else 0 === u && (g++, (_ = [0]));
                    ((v[l++] = g),
                      _[0] ? (_[S++] = U[E] || 0) : ((_ = [U[E]]), (S = 1)));
                  } while ((E++ < T || null != _[0]) && P--);
                  ((d = null != _[0]), v[0] || v.splice(0, 1));
                }
                if (o == p) {
                  for (l = 1, P = v[0]; P >= 10; P /= 10, l++);
                  G(b, s + (b.e = l + h * f - 1) + 1, a, d);
                } else ((b.e = h), (b.r = +d));
                return b;
              };
            })()),
            (n = (function () {
              var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                t = /^([^.]+)\.$/,
                r = /^\.([^.]+)$/,
                n = /^-?(Infinity|NaN)$/,
                i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
              return function (s, a, o, u) {
                var c,
                  l = o ? a : a.replace(i, "");
                if (n.test(l)) s.s = isNaN(l) ? null : l < 0 ? -1 : 1;
                else {
                  if (
                    !o &&
                    ((l = l.replace(e, function (e, t, r) {
                      return (
                        (c =
                          "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                        u && u != c ? e : t
                      );
                    })),
                    u && ((c = u), (l = l.replace(t, "$1").replace(r, "0.$1"))),
                    a != l)
                  )
                    return new M(l, c);
                  if (M.DEBUG)
                    throw Error(
                      h + "Not a" + (u ? " base " + u : "") + " number: " + a,
                    );
                  s.s = null;
                }
                s.c = s.e = null;
              };
            })()),
            (i.absoluteValue = i.abs =
              function () {
                var e = new M(this);
                return (e.s < 0 && (e.s = 1), e);
              }),
            (i.comparedTo = function (e, t) {
              return _(this, new M(e, t));
            }),
            (i.decimalPlaces = i.dp =
              function (e, t) {
                var r,
                  n,
                  i,
                  s = this;
                if (null != e)
                  return (
                    S(e, 0, y),
                    null == t ? (t = A) : S(t, 0, 8),
                    G(new M(s), e + s.e + 1, t)
                  );
                if (!(r = s.c)) return null;
                if (
                  ((n = ((i = r.length - 1) - w(this.e / f)) * f), (i = r[i]))
                )
                  for (; i % 10 == 0; i /= 10, n--);
                return (n < 0 && (n = 0), n);
              }),
            (i.dividedBy = i.div =
              function (e, r) {
                return t(this, new M(e, r), I, A);
              }),
            (i.dividedToIntegerBy = i.idiv =
              function (e, r) {
                return t(this, new M(e, r), 0, 1);
              }),
            (i.exponentiatedBy = i.pow =
              function (e, t) {
                var r,
                  n,
                  i,
                  a,
                  o,
                  l,
                  p,
                  d,
                  g,
                  m = this;
                if (((e = new M(e)), e.c && !e.isInteger()))
                  throw Error(h + "Exponent not an integer: " + z(e));
                if (
                  (null != t && (t = new M(t)),
                  (l = e.e > 14),
                  !m.c ||
                    !m.c[0] ||
                    (1 == m.c[0] && !m.e && 1 == m.c.length) ||
                    !e.c ||
                    !e.c[0])
                )
                  return (
                    (g = new M(Math.pow(+z(m), l ? 2 - N(e) : +z(e)))),
                    t ? g.mod(t) : g
                  );
                if (((p = e.s < 0), t)) {
                  if (t.c ? !t.c[0] : !t.s) return new M(NaN);
                  ((n = !p && m.isInteger() && t.isInteger()),
                    n && (m = m.mod(t)));
                } else {
                  if (
                    e.e > 9 &&
                    (m.e > 0 ||
                      m.e < -1 ||
                      (0 == m.e
                        ? m.c[0] > 1 || (l && m.c[1] >= 24e7)
                        : m.c[0] < 8e13 || (l && m.c[0] <= 9999975e7)))
                  )
                    return (
                      (a = m.s < 0 && N(e) ? -0 : 0),
                      m.e > -1 && (a = 1 / a),
                      new M(p ? 1 / a : a)
                    );
                  O && (a = u(O / f + 2));
                }
                for (
                  l
                    ? ((r = new M(0.5)), p && (e.s = 1), (d = N(e)))
                    : ((i = Math.abs(+z(e))), (d = i % 2)),
                    g = new M(s);
                  ;
                ) {
                  if (d) {
                    if (((g = g.times(m)), !g.c)) break;
                    a
                      ? g.c.length > a && (g.c.length = a)
                      : n && (g = g.mod(t));
                  }
                  if (i) {
                    if (((i = c(i / 2)), 0 === i)) break;
                    d = i % 2;
                  } else if (((e = e.times(r)), G(e, e.e + 1, 1), e.e > 14))
                    d = N(e);
                  else {
                    if (((i = +z(e)), 0 === i)) break;
                    d = i % 2;
                  }
                  ((m = m.times(m)),
                    a
                      ? m.c && m.c.length > a && (m.c.length = a)
                      : n && (m = m.mod(t)));
                }
                return n
                  ? g
                  : (p && (g = s.div(g)), t ? g.mod(t) : a ? G(g, O, A, o) : g);
              }),
            (i.integerValue = function (e) {
              var t = new M(this);
              return (null == e ? (e = A) : S(e, 0, 8), G(t, t.e + 1, e));
            }),
            (i.isEqualTo = i.eq =
              function (e, t) {
                return 0 === _(this, new M(e, t));
              }),
            (i.isFinite = function () {
              return !!this.c;
            }),
            (i.isGreaterThan = i.gt =
              function (e, t) {
                return _(this, new M(e, t)) > 0;
              }),
            (i.isGreaterThanOrEqualTo = i.gte =
              function (e, t) {
                return 1 === (t = _(this, new M(e, t))) || 0 === t;
              }),
            (i.isInteger = function () {
              return !!this.c && w(this.e / f) > this.c.length - 2;
            }),
            (i.isLessThan = i.lt =
              function (e, t) {
                return _(this, new M(e, t)) < 0;
              }),
            (i.isLessThanOrEqualTo = i.lte =
              function (e, t) {
                return -1 === (t = _(this, new M(e, t))) || 0 === t;
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
                a = this,
                o = a.s;
              if (((e = new M(e, t)), (t = e.s), !o || !t)) return new M(NaN);
              if (o != t) return ((e.s = -t), a.plus(e));
              var u = a.e / f,
                c = e.e / f,
                h = a.c,
                l = e.c;
              if (!u || !c) {
                if (!h || !l) return h ? ((e.s = -t), e) : new M(l ? a : NaN);
                if (!h[0] || !l[0])
                  return l[0]
                    ? ((e.s = -t), e)
                    : new M(h[0] ? a : 3 == A ? -0 : 0);
              }
              if (((u = w(u)), (c = w(c)), (h = h.slice()), (o = u - c))) {
                for (
                  (s = o < 0) ? ((o = -o), (i = h)) : ((c = u), (i = l)),
                    i.reverse(),
                    t = o;
                  t--;
                  i.push(0)
                );
                i.reverse();
              } else
                for (
                  n = (s = (o = h.length) < (t = l.length)) ? o : t, o = t = 0;
                  t < n;
                  t++
                )
                  if (h[t] != l[t]) {
                    s = h[t] < l[t];
                    break;
                  }
              if (
                (s && ((i = h), (h = l), (l = i), (e.s = -e.s)),
                (t = (n = l.length) - (r = h.length)),
                t > 0)
              )
                for (; t--; h[r++] = 0);
              for (t = p - 1; n > o; ) {
                if (h[--n] < l[n]) {
                  for (r = n; r && !h[--r]; h[r] = t);
                  (--h[r], (h[n] += p));
                }
                h[n] -= l[n];
              }
              for (; 0 == h[0]; h.splice(0, 1), --c);
              return h[0]
                ? H(e, h, c)
                : ((e.s = 3 == A ? -1 : 1), (e.c = [(e.e = 0)]), e);
            }),
            (i.modulo = i.mod =
              function (e, r) {
                var n,
                  i,
                  s = this;
                return (
                  (e = new M(e, r)),
                  !s.c || !e.s || (e.c && !e.c[0])
                    ? new M(NaN)
                    : !e.c || (s.c && !s.c[0])
                      ? new M(s)
                      : (9 == x
                          ? ((i = e.s),
                            (e.s = 1),
                            (n = t(s, e, 0, 3)),
                            (e.s = i),
                            (n.s *= i))
                          : (n = t(s, e, 0, x)),
                        (e = s.minus(n.times(e))),
                        e.c[0] || 1 != x || (e.s = s.s),
                        e)
                );
              }),
            (i.multipliedBy = i.times =
              function (e, t) {
                var r,
                  n,
                  i,
                  s,
                  a,
                  o,
                  u,
                  c,
                  h,
                  l,
                  d,
                  g,
                  y,
                  b,
                  v,
                  _ = this,
                  S = _.c,
                  N = (e = new M(e, t)).c;
                if (!S || !N || !S[0] || !N[0])
                  return (
                    !_.s || !e.s || (S && !S[0] && !N) || (N && !N[0] && !S)
                      ? (e.c = e.e = e.s = null)
                      : ((e.s *= _.s),
                        S && N ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null)),
                    e
                  );
                for (
                  n = w(_.e / f) + w(e.e / f),
                    e.s *= _.s,
                    u = S.length,
                    l = N.length,
                    u < l &&
                      ((y = S), (S = N), (N = y), (i = u), (u = l), (l = i)),
                    i = u + l,
                    y = [];
                  i--;
                  y.push(0)
                );
                for (b = p, v = m, i = l; --i >= 0; ) {
                  for (
                    r = 0, d = N[i] % v, g = (N[i] / v) | 0, a = u, s = i + a;
                    s > i;
                  )
                    ((c = S[--a] % v),
                      (h = (S[a] / v) | 0),
                      (o = g * c + h * d),
                      (c = d * c + (o % v) * v + y[s] + r),
                      (r = ((c / b) | 0) + ((o / v) | 0) + g * h),
                      (y[s--] = c % b));
                  y[s] = r;
                }
                return (r ? ++n : y.splice(0, 1), H(e, y, n));
              }),
            (i.negated = function () {
              var e = new M(this);
              return ((e.s = -e.s || null), e);
            }),
            (i.plus = function (e, t) {
              var r,
                n = this,
                i = n.s;
              if (((e = new M(e, t)), (t = e.s), !i || !t)) return new M(NaN);
              if (i != t) return ((e.s = -t), n.minus(e));
              var s = n.e / f,
                a = e.e / f,
                o = n.c,
                u = e.c;
              if (!s || !a) {
                if (!o || !u) return new M(i / 0);
                if (!o[0] || !u[0]) return u[0] ? e : new M(o[0] ? n : 0 * i);
              }
              if (((s = w(s)), (a = w(a)), (o = o.slice()), (i = s - a))) {
                for (
                  i > 0 ? ((a = s), (r = u)) : ((i = -i), (r = o)), r.reverse();
                  i--;
                  r.push(0)
                );
                r.reverse();
              }
              for (
                i = o.length,
                  t = u.length,
                  i - t < 0 && ((r = u), (u = o), (o = r), (t = i)),
                  i = 0;
                t;
              )
                ((i = ((o[--t] = o[t] + u[t] + i) / p) | 0),
                  (o[t] = p === o[t] ? 0 : o[t] % p));
              return (i && ((o = [i].concat(o)), ++a), H(e, o, a));
            }),
            (i.precision = i.sd =
              function (e, t) {
                var r,
                  n,
                  i,
                  s = this;
                if (null != e && e !== !!e)
                  return (
                    S(e, 1, y),
                    null == t ? (t = A) : S(t, 0, 8),
                    G(new M(s), e, t)
                  );
                if (!(r = s.c)) return null;
                if (((i = r.length - 1), (n = i * f + 1), (i = r[i]))) {
                  for (; i % 10 == 0; i /= 10, n--);
                  for (i = r[0]; i >= 10; i /= 10, n++);
                }
                return (e && s.e + 1 > n && (n = s.e + 1), n);
              }),
            (i.shiftedBy = function (e) {
              return (S(e, -d, d), this.times("1e" + e));
            }),
            (i.squareRoot = i.sqrt =
              function () {
                var e,
                  r,
                  n,
                  i,
                  s,
                  a = this,
                  o = a.c,
                  u = a.s,
                  c = a.e,
                  h = I + 4,
                  l = new M("0.5");
                if (1 !== u || !o || !o[0])
                  return new M(
                    !u || (u < 0 && (!o || o[0])) ? NaN : o ? a : 1 / 0,
                  );
                if (
                  ((u = Math.sqrt(+z(a))),
                  0 == u || u == 1 / 0
                    ? ((r = v(o)),
                      (r.length + c) % 2 == 0 && (r += "0"),
                      (u = Math.sqrt(+r)),
                      (c = w((c + 1) / 2) - (c < 0 || c % 2)),
                      u == 1 / 0
                        ? (r = "1e" + c)
                        : ((r = u.toExponential()),
                          (r = r.slice(0, r.indexOf("e") + 1) + c)),
                      (n = new M(r)))
                    : (n = new M(u + "")),
                  n.c[0])
                )
                  for (c = n.e, u = c + h, u < 3 && (u = 0); ; )
                    if (
                      ((s = n),
                      (n = l.times(s.plus(t(a, s, h, 1)))),
                      v(s.c).slice(0, u) === (r = v(n.c)).slice(0, u))
                    ) {
                      if (
                        (n.e < c && --u,
                        (r = r.slice(u - 3, u + 1)),
                        "9999" != r && (i || "4999" != r))
                      ) {
                        (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                          (G(n, n.e + I + 2, 1), (e = !n.times(n).eq(a)));
                        break;
                      }
                      if (!i && (G(s, s.e + I + 2, 0), s.times(s).eq(a))) {
                        n = s;
                        break;
                      }
                      ((h += 4), (u += 4), (i = 1));
                    }
                return G(n, n.e + I + 1, A, e);
              }),
            (i.toExponential = function (e, t) {
              return (null != e && (S(e, 0, y), e++), j(this, e, t, 1));
            }),
            (i.toFixed = function (e, t) {
              return (
                null != e && (S(e, 0, y), (e = e + this.e + 1)),
                j(this, e, t)
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
                    : (r = R);
              else if ("object" != typeof r)
                throw Error(h + "Argument not an object: " + r);
              if (((n = i.toFixed(e, t)), i.c)) {
                var s,
                  a = n.split("."),
                  o = +r.groupSize,
                  u = +r.secondaryGroupSize,
                  c = r.groupSeparator || "",
                  l = a[0],
                  p = a[1],
                  f = i.s < 0,
                  d = f ? l.slice(1) : l,
                  g = d.length;
                if (
                  (u && ((s = o), (o = u), (u = s), (g -= s)), o > 0 && g > 0)
                ) {
                  for (s = g % o || o, l = d.substr(0, s); s < g; s += o)
                    l += c + d.substr(s, o);
                  (u > 0 && (l += c + d.slice(s)), f && (l = "-" + l));
                }
                n = p
                  ? l +
                    (r.decimalSeparator || "") +
                    ((u = +r.fractionGroupSize)
                      ? p.replace(
                          new RegExp("\\d{" + u + "}\\B", "g"),
                          "$&" + (r.fractionGroupSeparator || ""),
                        )
                      : p)
                  : l;
              }
              return (r.prefix || "") + n + (r.suffix || "");
            }),
            (i.toFraction = function (e) {
              var r,
                n,
                i,
                a,
                o,
                u,
                c,
                l,
                p,
                d,
                m,
                y,
                b = this,
                w = b.c;
              if (
                null != e &&
                ((c = new M(e)),
                (!c.isInteger() && (c.c || 1 !== c.s)) || c.lt(s))
              )
                throw Error(
                  h +
                    "Argument " +
                    (c.isInteger() ? "out of range: " : "not an integer: ") +
                    z(c),
                );
              if (!w) return new M(b);
              for (
                r = new M(s),
                  p = n = new M(s),
                  i = l = new M(s),
                  y = v(w),
                  o = r.e = y.length - b.e - 1,
                  r.c[0] = g[(u = o % f) < 0 ? f + u : u],
                  e = !e || c.comparedTo(r) > 0 ? (o > 0 ? r : p) : c,
                  u = B,
                  B = 1 / 0,
                  c = new M(y),
                  l.c[0] = 0;
                ;
              ) {
                if (
                  ((d = t(c, r, 0, 1)),
                  (a = n.plus(d.times(i))),
                  1 == a.comparedTo(e))
                )
                  break;
                ((n = i),
                  (i = a),
                  (p = l.plus(d.times((a = p)))),
                  (l = a),
                  (r = c.minus(d.times((a = r)))),
                  (c = a));
              }
              return (
                (a = t(e.minus(n), i, 0, 1)),
                (l = l.plus(a.times(p))),
                (n = n.plus(a.times(i))),
                (l.s = p.s = b.s),
                (o *= 2),
                (m =
                  t(p, i, o, A)
                    .minus(b)
                    .abs()
                    .comparedTo(t(l, n, o, A).minus(b).abs()) < 1
                    ? [p, i]
                    : [l, n]),
                (B = u),
                m
              );
            }),
            (i.toNumber = function () {
              return +z(this);
            }),
            (i.toPrecision = function (e, t) {
              return (null != e && S(e, 1, y), j(this, e, t, 2));
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
                          s <= k || s >= P ? E(v(n.c), s) : T(v(n.c), s, "0"))
                      : 10 === e
                        ? ((n = G(new M(n), I + s + 1, A)),
                          (t = T(v(n.c), n.e, "0")))
                        : (S(e, 2, L.length, "Base"),
                          (t = r(T(v(n.c), s, "0"), 10, e, i, !0))),
                    i < 0 && n.c[0] && (t = "-" + t)),
                t
              );
            }),
            (i.valueOf = i.toJSON =
              function () {
                return z(this);
              }),
            (i._isBigNumber = !0),
            o &&
              ((i[Symbol.toStringTag] = "BigNumber"),
              (i[Symbol.for("nodejs.util.inspect.custom")] = i.valueOf)),
            null != e && M.set(e),
            M
          );
        }
        function w(e) {
          var t = 0 | e;
          return e > 0 || e === t ? t : t - 1;
        }
        function v(e) {
          for (var t, r, n = 1, i = e.length, s = e[0] + ""; n < i; ) {
            for (t = e[n++] + "", r = f - t.length; r--; t = "0" + t);
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
            a = e.s,
            o = t.s,
            u = e.e,
            c = t.e;
          if (!a || !o) return null;
          if (((r = i && !i[0]), (n = s && !s[0]), r || n))
            return r ? (n ? 0 : -o) : a;
          if (a != o) return a;
          if (((r = a < 0), (n = u == c), !i || !s))
            return n ? 0 : !i ^ r ? 1 : -1;
          if (!n) return (u > c) ^ r ? 1 : -1;
          for (o = (u = i.length) < (c = s.length) ? u : c, a = 0; a < o; a++)
            if (i[a] != s[a]) return (i[a] > s[a]) ^ r ? 1 : -1;
          return u == c ? 0 : (u > c) ^ r ? 1 : -1;
        }
        function S(e, t, r, n) {
          if (e < t || e > r || e !== c(e))
            throw Error(
              h +
                (n || "Argument") +
                ("number" == typeof e
                  ? e < t || e > r
                    ? " out of range: "
                    : " not an integer: "
                  : " not a primitive number: ") +
                String(e),
            );
        }
        function N(e) {
          var t = e.c.length - 1;
          return w(e.e / f) == t && e.c[t] % 2 != 0;
        }
        function E(e, t) {
          return (
            (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
            (t < 0 ? "e" : "e+") +
            t
          );
        }
        function T(e, t, r) {
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
        ((s = b()),
          (s["default"] = s.BigNumber = s),
          (n = function () {
            return s;
          }.call(t, r, t, e)),
          void 0 === n || (e.exports = n));
      })();
    },
    4621: function (e, t, r) {
      "use strict";
      const n = r(4620);
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
        (t.SHIFT32 = Math.pow(2, 32)),
        (t.SHIFT16 = Math.pow(2, 16)),
        (t.MAX_SAFE_HIGH = 2097151),
        (t.NEG_ONE = new n(-1)),
        (t.TEN = new n(10)),
        (t.TWO = new n(2)),
        (t.PARENT = {
          ARRAY: 0,
          OBJECT: 1,
          MAP: 2,
          TAG: 3,
          BYTE_STRING: 4,
          UTF8_STRING: 5,
        }));
    },
    4913: function (e, t, r) {
      "use strict";
      (function (e) {
        const n = r(4620),
          i = r(4621),
          s = i.SHIFT32,
          a = i.SHIFT16,
          o = 2097151;
        function u(e) {
          return e < 16 ? "0" + e.toString(16) : e.toString(16);
        }
        ((t.parseHalf = function (e) {
          var t, r, n;
          return (
            (n = 128 & e[0] ? -1 : 1),
            (t = (124 & e[0]) >> 2),
            (r = ((3 & e[0]) << 8) | e[1]),
            t
              ? 31 === t
                ? n * (r ? NaN : Infinity)
                : n * Math.pow(2, t - 25) * (1024 + r)
              : 5.960464477539063e-8 * n * r
          );
        }),
          (t.arrayBufferToBignumber = function (e) {
            const t = e.byteLength;
            let r = "";
            for (let n = 0; n < t; n++) r += u(e[n]);
            return new n(r, 16);
          }),
          (t.buildMap = (e) => {
            const t = new Map(),
              r = Object.keys(e),
              n = r.length;
            for (let i = 0; i < n; i++) t.set(r[i], e[r[i]]);
            return t;
          }),
          (t.buildInt32 = (e, t) => e * a + t),
          (t.buildInt64 = (e, r, i, a) => {
            const u = t.buildInt32(e, r),
              c = t.buildInt32(i, a);
            return u > o ? new n(u).times(s).plus(c) : u * s + c;
          }),
          (t.writeHalf = function (t, r) {
            const n = e.allocUnsafe(4);
            n.writeFloatBE(r, 0);
            const i = n.readUInt32BE(0);
            if (0 !== (8191 & i)) return !1;
            var s = (i >> 16) & 32768;
            const a = (i >> 23) & 255,
              o = 8388607 & i;
            if (a >= 113 && a <= 142) s += ((a - 112) << 10) + (o >> 13);
            else {
              if (!(a >= 103 && a < 113)) return !1;
              if (o & ((1 << (126 - a)) - 1)) return !1;
              s += (o + 8388608) >> (126 - a);
            }
            return (t.writeUInt16BE(s, 0), !0);
          }),
          (t.keySorter = function (e, t) {
            var r = e[0].byteLength,
              n = t[0].byteLength;
            return r > n ? 1 : n > r ? -1 : e[0].compare(t[0]);
          }),
          (t.isNegativeZero = (e) => 0 === e && 1 / e < 0),
          (t.nextPowerOf2 = (e) => {
            let t = 0;
            if (e && !(e & (e - 1))) return e;
            while (0 !== e) ((e >>= 1), (t += 1));
            return 1 << t;
          }));
      }).call(this, r(2).Buffer);
    },
    5870: function (e, t, r) {
      (function (t) {
        var n;
        n =
          "undefined" !== typeof window && window.crypto
            ? function (e) {
                var r = new Uint32Array(e);
                return t.from(window.crypto.getRandomValues(r));
              }
            : r(2764).randomBytes;
        var i = r(797),
          s = r(3135).pbkdf2Sync,
          a = r(7119),
          o = a,
          u = "Invalid mnemonic",
          c = "Invalid entropy",
          h = "Invalid mnemonic checksum";
        function l(e, t, r) {
          while (e.length < r) e = t + e;
          return e;
        }
        function p(e) {
          return parseInt(e, 2);
        }
        function f(e) {
          return e
            .map(function (e) {
              return l(e.toString(2), "0", 8);
            })
            .join("");
        }
        function d(e) {
          var t = 8 * e.length,
            r = t / 32,
            n = i("sha256").update(e).digest();
          return f([].slice.call(n)).slice(0, r);
        }
        function g(e) {
          return "mnemonic" + (e || "");
        }
        function m(e, r) {
          var n = t.from(e, "utf8"),
            i = t.from(g(r), "utf8");
          return s(n, i, 2048, 64, "sha512");
        }
        function y(e, t) {
          return m(e, t).toString("hex");
        }
        function b(e, r) {
          r = r || o;
          var n = e.split(" ");
          if (n.length % 3 !== 0) throw new Error(u);
          var i = n
              .map(function (e) {
                var t = r.indexOf(e);
                if (-1 === t) throw new Error(u);
                return l(t.toString(2), "0", 11);
              })
              .join(""),
            s = 32 * Math.floor(i.length / 33),
            a = i.slice(0, s),
            f = i.slice(s),
            g = a.match(/(.{1,8})/g).map(p);
          if (g.length < 16) throw new Error(c);
          if (g.length > 32) throw new Error(c);
          if (g.length % 4 !== 0) throw new Error(c);
          var m = t.from(g),
            y = d(m);
          if (y !== f) throw new Error(h);
          return m.toString("hex");
        }
        function w(e, r) {
          if (
            (t.isBuffer(e) || (e = t.from(e, "hex")),
            (r = r || o),
            e.length < 16)
          )
            throw new TypeError(c);
          if (e.length > 32) throw new TypeError(c);
          if (e.length % 4 !== 0) throw new TypeError(c);
          var n = f([].slice.call(e)),
            i = d(e),
            s = n + i,
            a = s.match(/(.{1,11})/g),
            u = a.map(function (e) {
              var t = p(e);
              return r[t];
            });
          return u.join(" ");
        }
        function v(e, t, r) {
          if (((e = e || 128), e % 32 !== 0)) throw new TypeError(c);
          return ((t = t || n), w(t(e / 8), r));
        }
        function _(e, t) {
          try {
            b(e, t);
          } catch (r) {
            return !1;
          }
          return !0;
        }
        e.exports = {
          mnemonicToSeed: m,
          mnemonicToSeedHex: y,
          mnemonicToEntropy: b,
          entropyToMnemonic: w,
          generateMnemonic: v,
          validateMnemonic: _,
          wordlists: { EN: a },
        };
      }).call(this, r(2).Buffer);
    },
    5871: function (e, t, r) {
      "use strict";
      ((t.Diagnose = r(7120)),
        (t.Decoder = r(5872)),
        (t.Encoder = r(7123)),
        (t.Simple = r(5873)),
        (t.Tagged = r(5874)),
        (t.decodeAll = t.Decoder.decodeAll),
        (t.decodeFirst = t.Decoder.decodeFirst),
        (t.diagnose = t.Diagnose.diagnose),
        (t.encode = t.Encoder.encode),
        (t.decode = t.Decoder.decode),
        (t.leveldb = {
          decode: t.Decoder.decodeAll,
          encode: t.Encoder.encode,
          buffer: !0,
          name: "cbor",
        }));
    },
    5872: function (e, t, r) {
      "use strict";
      (function (t, n) {
        const i = r(869),
          s = r(4620),
          a = r(7121),
          o = r(4913),
          u = r(4621),
          c = r(5873),
          h = r(5874),
          { URL: l } = r(5875);
        class Decoder {
          constructor(e) {
            ((e = e || {}),
              !e.size || e.size < 65536
                ? (e.size = 65536)
                : (e.size = o.nextPowerOf2(e.size)),
              (this._heap = new ArrayBuffer(e.size)),
              (this._heap8 = new Uint8Array(this._heap)),
              (this._buffer = t.from(this._heap)),
              this._reset(),
              (this._knownTags = Object.assign(
                {
                  0: (e) => new Date(e),
                  1: (e) => new Date(1e3 * e),
                  2: (e) => o.arrayBufferToBignumber(e),
                  3: (e) => u.NEG_ONE.minus(o.arrayBufferToBignumber(e)),
                  4: (e) => u.TEN.pow(e[0]).times(e[1]),
                  5: (e) => u.TWO.pow(e[0]).times(e[1]),
                  32: (e) => new l(e),
                  35: (e) => new RegExp(e),
                },
                e.tags,
              )),
              (this.parser = a(
                n,
                {
                  log: console.log.bind(console),
                  pushInt: this.pushInt.bind(this),
                  pushInt32: this.pushInt32.bind(this),
                  pushInt32Neg: this.pushInt32Neg.bind(this),
                  pushInt64: this.pushInt64.bind(this),
                  pushInt64Neg: this.pushInt64Neg.bind(this),
                  pushFloat: this.pushFloat.bind(this),
                  pushFloatSingle: this.pushFloatSingle.bind(this),
                  pushFloatDouble: this.pushFloatDouble.bind(this),
                  pushTrue: this.pushTrue.bind(this),
                  pushFalse: this.pushFalse.bind(this),
                  pushUndefined: this.pushUndefined.bind(this),
                  pushNull: this.pushNull.bind(this),
                  pushInfinity: this.pushInfinity.bind(this),
                  pushInfinityNeg: this.pushInfinityNeg.bind(this),
                  pushNaN: this.pushNaN.bind(this),
                  pushNaNNeg: this.pushNaNNeg.bind(this),
                  pushArrayStart: this.pushArrayStart.bind(this),
                  pushArrayStartFixed: this.pushArrayStartFixed.bind(this),
                  pushArrayStartFixed32: this.pushArrayStartFixed32.bind(this),
                  pushArrayStartFixed64: this.pushArrayStartFixed64.bind(this),
                  pushObjectStart: this.pushObjectStart.bind(this),
                  pushObjectStartFixed: this.pushObjectStartFixed.bind(this),
                  pushObjectStartFixed32:
                    this.pushObjectStartFixed32.bind(this),
                  pushObjectStartFixed64:
                    this.pushObjectStartFixed64.bind(this),
                  pushByteString: this.pushByteString.bind(this),
                  pushByteStringStart: this.pushByteStringStart.bind(this),
                  pushUtf8String: this.pushUtf8String.bind(this),
                  pushUtf8StringStart: this.pushUtf8StringStart.bind(this),
                  pushSimpleUnassigned: this.pushSimpleUnassigned.bind(this),
                  pushTagUnassigned: this.pushTagUnassigned.bind(this),
                  pushTagStart: this.pushTagStart.bind(this),
                  pushTagStart4: this.pushTagStart4.bind(this),
                  pushTagStart8: this.pushTagStart8.bind(this),
                  pushBreak: this.pushBreak.bind(this),
                },
                this._heap,
              )));
          }
          get _depth() {
            return this._parents.length;
          }
          get _currentParent() {
            return this._parents[this._depth - 1];
          }
          get _ref() {
            return this._currentParent.ref;
          }
          _closeParent() {
            var e = this._parents.pop();
            if (e.length > 0) throw new Error(`Missing ${e.length} elements`);
            switch (e.type) {
              case u.PARENT.TAG:
                this._push(this.createTag(e.ref[0], e.ref[1]));
                break;
              case u.PARENT.BYTE_STRING:
                this._push(this.createByteString(e.ref, e.length));
                break;
              case u.PARENT.UTF8_STRING:
                this._push(this.createUtf8String(e.ref, e.length));
                break;
              case u.PARENT.MAP:
                if (e.values % 2 > 0)
                  throw new Error("Odd number of elements in the map");
                this._push(this.createMap(e.ref, e.length));
                break;
              case u.PARENT.OBJECT:
                if (e.values % 2 > 0)
                  throw new Error("Odd number of elements in the map");
                this._push(this.createObject(e.ref, e.length));
                break;
              case u.PARENT.ARRAY:
                this._push(this.createArray(e.ref, e.length));
                break;
              default:
                break;
            }
            this._currentParent &&
              this._currentParent.type === u.PARENT.TAG &&
              this._dec();
          }
          _dec() {
            const e = this._currentParent;
            e.length < 0 || (e.length--, 0 === e.length && this._closeParent());
          }
          _push(e, t) {
            const r = this._currentParent;
            switch ((r.values++, r.type)) {
              case u.PARENT.ARRAY:
              case u.PARENT.BYTE_STRING:
              case u.PARENT.UTF8_STRING:
                (r.length > -1
                  ? (this._ref[this._ref.length - r.length] = e)
                  : this._ref.push(e),
                  this._dec());
                break;
              case u.PARENT.OBJECT:
                null != r.tmpKey
                  ? ((this._ref[r.tmpKey] = e), (r.tmpKey = null), this._dec())
                  : ((r.tmpKey = e),
                    "string" !== typeof r.tmpKey &&
                      ((r.type = u.PARENT.MAP), (r.ref = o.buildMap(r.ref))));
                break;
              case u.PARENT.MAP:
                null != r.tmpKey
                  ? (this._ref.set(r.tmpKey, e), (r.tmpKey = null), this._dec())
                  : (r.tmpKey = e);
                break;
              case u.PARENT.TAG:
                (this._ref.push(e), t || this._dec());
                break;
              default:
                throw new Error("Unknown parent type");
            }
          }
          _createParent(e, t, r) {
            this._parents[this._depth] = {
              type: t,
              length: r,
              ref: e,
              values: 0,
              tmpKey: null,
            };
          }
          _reset() {
            ((this._res = []),
              (this._parents = [
                {
                  type: u.PARENT.ARRAY,
                  length: -1,
                  ref: this._res,
                  values: 0,
                  tmpKey: null,
                },
              ]));
          }
          createTag(e, t) {
            const r = this._knownTags[e];
            return r ? r(t) : new h(e, t);
          }
          createMap(e, t) {
            return e;
          }
          createObject(e, t) {
            return e;
          }
          createArray(e, t) {
            return e;
          }
          createByteString(e, r) {
            return t.concat(e);
          }
          createByteStringFromHeap(e, r) {
            return e === r ? t.alloc(0) : t.from(this._heap.slice(e, r));
          }
          createInt(e) {
            return e;
          }
          createInt32(e, t) {
            return o.buildInt32(e, t);
          }
          createInt64(e, t, r, n) {
            return o.buildInt64(e, t, r, n);
          }
          createFloat(e) {
            return e;
          }
          createFloatSingle(e, t, r, n) {
            return i.read([e, t, r, n], 0, !1, 23, 4);
          }
          createFloatDouble(e, t, r, n, s, a, o, u) {
            return i.read([e, t, r, n, s, a, o, u], 0, !1, 52, 8);
          }
          createInt32Neg(e, t) {
            return -1 - o.buildInt32(e, t);
          }
          createInt64Neg(e, t, r, n) {
            const i = o.buildInt32(e, t),
              a = o.buildInt32(r, n);
            return i > u.MAX_SAFE_HIGH
              ? u.NEG_ONE.minus(new s(i).times(u.SHIFT32).plus(a))
              : -1 - (i * u.SHIFT32 + a);
          }
          createTrue() {
            return !0;
          }
          createFalse() {
            return !1;
          }
          createNull() {
            return null;
          }
          createUndefined() {}
          createInfinity() {
            return 1 / 0;
          }
          createInfinityNeg() {
            return -1 / 0;
          }
          createNaN() {
            return NaN;
          }
          createNaNNeg() {
            return NaN;
          }
          createUtf8String(e, t) {
            return e.join("");
          }
          createUtf8StringFromHeap(e, t) {
            return e === t ? "" : this._buffer.toString("utf8", e, t);
          }
          createSimpleUnassigned(e) {
            return new c(e);
          }
          pushInt(e) {
            this._push(this.createInt(e));
          }
          pushInt32(e, t) {
            this._push(this.createInt32(e, t));
          }
          pushInt64(e, t, r, n) {
            this._push(this.createInt64(e, t, r, n));
          }
          pushFloat(e) {
            this._push(this.createFloat(e));
          }
          pushFloatSingle(e, t, r, n) {
            this._push(this.createFloatSingle(e, t, r, n));
          }
          pushFloatDouble(e, t, r, n, i, s, a, o) {
            this._push(this.createFloatDouble(e, t, r, n, i, s, a, o));
          }
          pushInt32Neg(e, t) {
            this._push(this.createInt32Neg(e, t));
          }
          pushInt64Neg(e, t, r, n) {
            this._push(this.createInt64Neg(e, t, r, n));
          }
          pushTrue() {
            this._push(this.createTrue());
          }
          pushFalse() {
            this._push(this.createFalse());
          }
          pushNull() {
            this._push(this.createNull());
          }
          pushUndefined() {
            this._push(this.createUndefined());
          }
          pushInfinity() {
            this._push(this.createInfinity());
          }
          pushInfinityNeg() {
            this._push(this.createInfinityNeg());
          }
          pushNaN() {
            this._push(this.createNaN());
          }
          pushNaNNeg() {
            this._push(this.createNaNNeg());
          }
          pushArrayStart() {
            this._createParent([], u.PARENT.ARRAY, -1);
          }
          pushArrayStartFixed(e) {
            this._createArrayStartFixed(e);
          }
          pushArrayStartFixed32(e, t) {
            const r = o.buildInt32(e, t);
            this._createArrayStartFixed(r);
          }
          pushArrayStartFixed64(e, t, r, n) {
            const i = o.buildInt64(e, t, r, n);
            this._createArrayStartFixed(i);
          }
          pushObjectStart() {
            this._createObjectStartFixed(-1);
          }
          pushObjectStartFixed(e) {
            this._createObjectStartFixed(e);
          }
          pushObjectStartFixed32(e, t) {
            const r = o.buildInt32(e, t);
            this._createObjectStartFixed(r);
          }
          pushObjectStartFixed64(e, t, r, n) {
            const i = o.buildInt64(e, t, r, n);
            this._createObjectStartFixed(i);
          }
          pushByteStringStart() {
            this._parents[this._depth] = {
              type: u.PARENT.BYTE_STRING,
              length: -1,
              ref: [],
              values: 0,
              tmpKey: null,
            };
          }
          pushByteString(e, t) {
            this._push(this.createByteStringFromHeap(e, t));
          }
          pushUtf8StringStart() {
            this._parents[this._depth] = {
              type: u.PARENT.UTF8_STRING,
              length: -1,
              ref: [],
              values: 0,
              tmpKey: null,
            };
          }
          pushUtf8String(e, t) {
            this._push(this.createUtf8StringFromHeap(e, t));
          }
          pushSimpleUnassigned(e) {
            this._push(this.createSimpleUnassigned(e));
          }
          pushTagStart(e) {
            this._parents[this._depth] = {
              type: u.PARENT.TAG,
              length: 1,
              ref: [e],
            };
          }
          pushTagStart4(e, t) {
            this.pushTagStart(o.buildInt32(e, t));
          }
          pushTagStart8(e, t, r, n) {
            this.pushTagStart(o.buildInt64(e, t, r, n));
          }
          pushTagUnassigned(e) {
            this._push(this.createTag(e));
          }
          pushBreak() {
            if (this._currentParent.length > -1)
              throw new Error("Unexpected break");
            this._closeParent();
          }
          _createObjectStartFixed(e) {
            0 !== e
              ? this._createParent({}, u.PARENT.OBJECT, e)
              : this._push(this.createObject({}));
          }
          _createArrayStartFixed(e) {
            0 !== e
              ? this._createParent(new Array(e), u.PARENT.ARRAY, e)
              : this._push(this.createArray([]));
          }
          _decode(e) {
            if (0 === e.byteLength) throw new Error("Input too short");
            (this._reset(), this._heap8.set(e));
            const t = this.parser.parse(e.byteLength);
            if (this._depth > 1) {
              while (0 === this._currentParent.length) this._closeParent();
              if (this._depth > 1) throw new Error("Undeterminated nesting");
            }
            if (t > 0) throw new Error("Failed to parse");
            if (0 === this._res.length) throw new Error("No valid result");
          }
          decodeFirst(e) {
            return (this._decode(e), this._res[0]);
          }
          decodeAll(e) {
            return (this._decode(e), this._res);
          }
          static decode(e, r) {
            "string" === typeof e && (e = t.from(e, r || "hex"));
            const n = new Decoder({ size: e.length });
            return n.decodeFirst(e);
          }
          static decodeAll(e, r) {
            "string" === typeof e && (e = t.from(e, r || "hex"));
            const n = new Decoder({ size: e.length });
            return n.decodeAll(e);
          }
        }
        ((Decoder.decodeFirst = Decoder.decode), (e.exports = Decoder));
      }).call(this, r(2).Buffer, r(13));
    },
    5873: function (e, t, r) {
      "use strict";
      const n = r(4621),
        i = n.MT,
        s = n.SIMPLE,
        a = n.SYMS;
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
        inspect() {
          return "simple(" + this.value + ")";
        }
        encodeCBOR(e) {
          return e._pushInt(this.value, i.SIMPLE_FLOAT);
        }
        static isSimple(e) {
          return e instanceof Simple;
        }
        static decode(e, t) {
          switch ((null == t && (t = !0), e)) {
            case s.FALSE:
              return !1;
            case s.TRUE:
              return !0;
            case s.NULL:
              return t ? null : a.NULL;
            case s.UNDEFINED:
              return t ? void 0 : a.UNDEFINED;
            case -1:
              if (!t) throw new Error("Invalid BREAK");
              return a.BREAK;
            default:
              return new Simple(e);
          }
        }
      }
      e.exports = Simple;
    },
    5874: function (e, t, r) {
      "use strict";
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
          var t, r;
          if (
            ((r = null != e ? e[this.tag] : void 0),
            "function" !== typeof r &&
              ((r = Tagged["_tag" + this.tag]), "function" !== typeof r))
          )
            return this;
          try {
            return r.call(Tagged, this.value);
          } catch (n) {
            return ((t = n), (this.err = t), this);
          }
        }
      }
      e.exports = Tagged;
    },
    5875: function (e, t, r) {
      "use strict";
      const {
          URLWithLegacySupport: n,
          format: i,
          URLSearchParams: s,
          defaultBase: a,
        } = r(5876),
        o = r(7122);
      e.exports = {
        URL: n,
        URLSearchParams: s,
        format: i,
        relative: o,
        defaultBase: a,
      };
    },
    5876: function (e, t, r) {
      "use strict";
      const n = self.location
          ? self.location.protocol + "//" + self.location.host
          : "",
        i = self.URL;
      class URLWithLegacySupport {
        constructor(e, t) {
          (void 0 === e && (e = ""),
            void 0 === t && (t = n),
            (this.super = new i(e, t)),
            (this.path = this.pathname + this.search),
            (this.auth =
              this.username && this.password
                ? this.username + ":" + this.password
                : null),
            (this.query =
              this.search && this.search.startsWith("?")
                ? this.search.slice(1)
                : null));
        }
        get hash() {
          return this.super.hash;
        }
        get host() {
          return this.super.host;
        }
        get hostname() {
          return this.super.hostname;
        }
        get href() {
          return this.super.href;
        }
        get origin() {
          return this.super.origin;
        }
        get password() {
          return this.super.password;
        }
        get pathname() {
          return this.super.pathname;
        }
        get port() {
          return this.super.port;
        }
        get protocol() {
          return this.super.protocol;
        }
        get search() {
          return this.super.search;
        }
        get searchParams() {
          return this.super.searchParams;
        }
        get username() {
          return this.super.username;
        }
        set hash(e) {
          this.super.hash = e;
        }
        set host(e) {
          this.super.host = e;
        }
        set hostname(e) {
          this.super.hostname = e;
        }
        set href(e) {
          this.super.href = e;
        }
        set origin(e) {
          this.super.origin = e;
        }
        set password(e) {
          this.super.password = e;
        }
        set pathname(e) {
          this.super.pathname = e;
        }
        set port(e) {
          this.super.port = e;
        }
        set protocol(e) {
          this.super.protocol = e;
        }
        set search(e) {
          this.super.search = e;
        }
        set searchParams(e) {
          this.super.searchParams = e;
        }
        set username(e) {
          this.super.username = e;
        }
        createObjectURL(e) {
          return this.super.createObjectURL(e);
        }
        revokeObjectURL(e) {
          this.super.revokeObjectURL(e);
        }
        toJSON() {
          return this.super.toJSON();
        }
        toString() {
          return this.super.toString();
        }
        format() {
          return this.toString();
        }
      }
      function s(e) {
        if ("string" === typeof e) {
          const t = new i(e);
          return t.toString();
        }
        if (!(e instanceof i)) {
          const t =
              e.username && e.password ? `${e.username}:${e.password}@` : "",
            r = e.auth ? e.auth + "@" : "",
            n = e.port ? ":" + e.port : "",
            i = e.protocol ? e.protocol + "//" : "",
            s = e.host || "",
            a = e.hostname || "",
            o = e.search || (e.query ? "?" + e.query : ""),
            u = e.hash || "",
            c = e.pathname || "",
            h = e.path || c + o;
          return `${i}${t || r}${s || a + n}${h}${u}`;
        }
      }
      e.exports = {
        URLWithLegacySupport: URLWithLegacySupport,
        URLSearchParams: self.URLSearchParams,
        defaultBase: n,
        format: s,
      };
    },
    5881: function (e, t, r) {
      (function (t) {
        /***
         * @license
         * https://github.com/bitcoincashjs/bchaddr
         * Copyright (c) 2018 Emilio Almansi
         * Distributed under the MIT software license, see the accompanying
         * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
         */
        var n = r(2792),
          i = r(7147),
          s = { Legacy: "legacy", Bitpay: "bitpay", Cashaddr: "cashaddr" },
          a = { Mainnet: "mainnet", Testnet: "testnet" },
          o = {};
        function u(e) {
          return g(e).format;
        }
        function c(e) {
          return g(e).network;
        }
        function h(e) {
          return g(e).type;
        }
        function l(e) {
          var t = g(e);
          return t.format === s.Legacy ? e : v(t);
        }
        function p(e) {
          var t = g(e);
          return t.format === s.Bitpay ? e : _(t);
        }
        function f(e) {
          var t = g(e);
          return S(t);
        }
        ((o.P2PKH = "p2pkh"), (o.P2SH = "p2sh"));
        var d = {};
        function g(e) {
          try {
            return y(e);
          } catch (t) {}
          try {
            return b(e);
          } catch (t) {}
          throw new U();
        }
        ((d[s.Legacy] = {}),
          (d[s.Legacy][a.Mainnet] = {}),
          (d[s.Legacy][a.Mainnet][o.P2PKH] = 0),
          (d[s.Legacy][a.Mainnet][o.P2SH] = 5),
          (d[s.Legacy][a.Testnet] = {}),
          (d[s.Legacy][a.Testnet][o.P2PKH] = 111),
          (d[s.Legacy][a.Testnet][o.P2SH] = 196),
          (d[s.Bitpay] = {}),
          (d[s.Bitpay][a.Mainnet] = {}),
          (d[s.Bitpay][a.Mainnet][o.P2PKH] = 28),
          (d[s.Bitpay][a.Mainnet][o.P2SH] = 40),
          (d[s.Bitpay][a.Testnet] = {}),
          (d[s.Bitpay][a.Testnet][o.P2PKH] = 111),
          (d[s.Bitpay][a.Testnet][o.P2SH] = 196));
        var m = 21;
        function y(e) {
          try {
            var t = n.decode(e);
            if (t.length !== m) throw new U();
            var r = t[0],
              i = Array.prototype.slice.call(t, 1);
            switch (r) {
              case d[s.Legacy][a.Mainnet][o.P2PKH]:
                return {
                  hash: i,
                  format: s.Legacy,
                  network: a.Mainnet,
                  type: o.P2PKH,
                };
              case d[s.Legacy][a.Mainnet][o.P2SH]:
                return {
                  hash: i,
                  format: s.Legacy,
                  network: a.Mainnet,
                  type: o.P2SH,
                };
              case d[s.Legacy][a.Testnet][o.P2PKH]:
                return {
                  hash: i,
                  format: s.Legacy,
                  network: a.Testnet,
                  type: o.P2PKH,
                };
              case d[s.Legacy][a.Testnet][o.P2SH]:
                return {
                  hash: i,
                  format: s.Legacy,
                  network: a.Testnet,
                  type: o.P2SH,
                };
              case d[s.Bitpay][a.Mainnet][o.P2PKH]:
                return {
                  hash: i,
                  format: s.Bitpay,
                  network: a.Mainnet,
                  type: o.P2PKH,
                };
              case d[s.Bitpay][a.Mainnet][o.P2SH]:
                return {
                  hash: i,
                  format: s.Bitpay,
                  network: a.Mainnet,
                  type: o.P2SH,
                };
            }
          } catch (u) {}
          throw new U();
        }
        function b(e) {
          if (-1 !== e.indexOf(":"))
            try {
              return w(e);
            } catch (i) {}
          else
            for (
              var t = ["bitcoincash", "bchtest", "bchreg"], r = 0;
              r < t.length;
              ++r
            )
              try {
                var n = t[r];
                return w(n + ":" + e);
              } catch (i) {}
          throw new U();
        }
        function w(e) {
          try {
            var t = i.decode(e),
              r = Array.prototype.slice.call(t.hash, 0),
              n = "P2PKH" === t.type ? o.P2PKH : o.P2SH;
            switch (t.prefix) {
              case "bitcoincash":
                return {
                  hash: r,
                  format: s.Cashaddr,
                  network: a.Mainnet,
                  type: n,
                };
              case "bchtest":
              case "bchreg":
                return {
                  hash: r,
                  format: s.Cashaddr,
                  network: a.Testnet,
                  type: n,
                };
            }
          } catch (u) {}
          throw new U();
        }
        function v(e) {
          var r = d[s.Legacy][e.network][e.type],
            i = t.alloc(1 + e.hash.length);
          return ((i[0] = r), i.set(e.hash, 1), n.encode(i));
        }
        function _(e) {
          var r = d[s.Bitpay][e.network][e.type],
            i = t.alloc(1 + e.hash.length);
          return ((i[0] = r), i.set(e.hash, 1), n.encode(i));
        }
        function S(e) {
          var t = e.network === a.Mainnet ? "bitcoincash" : "bchtest",
            r = e.type === o.P2PKH ? "P2PKH" : "P2SH",
            n = new Uint8Array(e.hash);
          return i.encode(t, r, n);
        }
        function N(e) {
          return u(e) === s.Legacy;
        }
        function E(e) {
          return u(e) === s.Bitpay;
        }
        function T(e) {
          return u(e) === s.Cashaddr;
        }
        function I(e) {
          return c(e) === a.Mainnet;
        }
        function A(e) {
          return c(e) === a.Testnet;
        }
        function k(e) {
          return h(e) === o.P2PKH;
        }
        function P(e) {
          return h(e) === o.P2SH;
        }
        function U() {
          var e = new Error();
          ((this.name = e.name = "InvalidAddressError"),
            (this.message = e.message =
              "Received an invalid Bitcoin Cash address as input."),
            (this.stack = e.stack));
        }
        ((U.prototype = Object.create(Error.prototype)),
          (e.exports = {
            Format: s,
            Network: a,
            Type: o,
            detectAddressFormat: u,
            detectAddressNetwork: c,
            detectAddressType: h,
            toLegacyAddress: l,
            toBitpayAddress: p,
            toCashAddress: f,
            isLegacyAddress: N,
            isBitpayAddress: E,
            isCashAddress: T,
            isMainnetAddress: I,
            isTestnetAddress: A,
            isP2PKHAddress: k,
            isP2SHAddress: P,
            InvalidAddressError: U,
          }));
      }).call(this, r(2).Buffer);
    },
    7101: function (e, t, r) {
      "use strict";
      (function (t) {
        const n = r(2764),
          i = r(7102);
        ((e.exports.encode = function (e, r, s) {
          if (
            (void 0 === r && (r = "00"),
            void 0 === s && (s = "hex"),
            "string" === typeof e && (e = new t(e, s)),
            !(e instanceof t))
          )
            throw new TypeError('"data" argument must be an Array of Buffers');
          r instanceof t || (r = new t(r, s));
          let a = t.concat([r, e]);
          return (
            (a = n.createHash("sha256").update(a).digest()),
            (a = n.createHash("sha256").update(a).digest()),
            (a = t.concat([r, e, a.slice(0, 4)])),
            i.encode(a)
          );
        }),
          (e.exports.decode = (e, r) => {
            const s = new t(i.decode(e));
            let a = s.slice(0, 1),
              o = s.slice(1, -4),
              u = t.concat([a, o]);
            return (
              (u = n.createHash("sha256").update(u).digest()),
              (u = n.createHash("sha256").update(u).digest()),
              s.slice(-4).forEach((e, t) => {
                if (e !== u[t]) throw new Error("Invalid checksum");
              }),
              r && ((a = a.toString(r)), (o = o.toString(r))),
              { prefix: a, data: o }
            );
          }));
      }).call(this, r(2).Buffer);
    },
    7102: function (e, t, r) {
      var n = r(7103),
        i = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      e.exports = n(i);
    },
    7103: function (e, t) {
      e.exports = function (e) {
        for (
          var t = {}, r = e.length, n = e.charAt(0), i = 0;
          i < e.length;
          i++
        )
          t[e.charAt(i)] = i;
        function s(t) {
          if (0 === t.length) return "";
          for (var n = [0], i = 0; i < t.length; ++i) {
            for (var s = 0, a = t[i]; s < n.length; ++s)
              ((a += n[s] << 8), (n[s] = a % r), (a = (a / r) | 0));
            while (a > 0) (n.push(a % r), (a = (a / r) | 0));
          }
          for (var o = "", u = 0; 0 === t[u] && u < t.length - 1; ++u)
            o += e[0];
          for (var c = n.length - 1; c >= 0; --c) o += e[n[c]];
          return o;
        }
        function a(e) {
          if (0 === e.length) return [];
          for (var i = [0], s = 0; s < e.length; s++) {
            var a = t[e[s]];
            if (void 0 === a) return;
            for (var o = 0, u = a; o < i.length; ++o)
              ((u += i[o] * r), (i[o] = 255 & u), (u >>= 8));
            while (u > 0) (i.push(255 & u), (u >>= 8));
          }
          for (var c = 0; e[c] === n && c < e.length - 1; ++c) i.push(0);
          return i.reverse();
        }
        function o(e) {
          var t = a(e);
          if (t) return t;
          throw new Error("Non-base" + r + " character");
        }
        return { encode: s, decodeUnsafe: a, decode: o };
      };
    },
    7119: function (e) {
      e.exports = JSON.parse(
        '["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"]',
      );
    },
    7120: function (e, t, r) {
      "use strict";
      (function (t) {
        const n = r(5872),
          i = r(4913);
        class Diagnose extends n {
          createTag(e, t) {
            return `${e}(${t})`;
          }
          createInt(e) {
            return super.createInt(e).toString();
          }
          createInt32(e, t) {
            return super.createInt32(e, t).toString();
          }
          createInt64(e, t, r, n) {
            return super.createInt64(e, t, r, n).toString();
          }
          createInt32Neg(e, t) {
            return super.createInt32Neg(e, t).toString();
          }
          createInt64Neg(e, t, r, n) {
            return super.createInt64Neg(e, t, r, n).toString();
          }
          createTrue() {
            return "true";
          }
          createFalse() {
            return "false";
          }
          createFloat(e) {
            const t = super.createFloat(e);
            return i.isNegativeZero(e) ? "-0_1" : t + "_1";
          }
          createFloatSingle(e, t, r, n) {
            const i = super.createFloatSingle(e, t, r, n);
            return i + "_2";
          }
          createFloatDouble(e, t, r, n, i, s, a, o) {
            const u = super.createFloatDouble(e, t, r, n, i, s, a, o);
            return u + "_3";
          }
          createByteString(e, t) {
            const r = e.join(", ");
            return -1 === t ? `(_ ${r})` : "h'" + r;
          }
          createByteStringFromHeap(e, r) {
            const n = t
              .from(super.createByteStringFromHeap(e, r))
              .toString("hex");
            return `h'${n}'`;
          }
          createInfinity() {
            return "Infinity_1";
          }
          createInfinityNeg() {
            return "-Infinity_1";
          }
          createNaN() {
            return "NaN_1";
          }
          createNaNNeg() {
            return "-NaN_1";
          }
          createNull() {
            return "null";
          }
          createUndefined() {
            return "undefined";
          }
          createSimpleUnassigned(e) {
            return `simple(${e})`;
          }
          createArray(e, t) {
            const r = super.createArray(e, t);
            return -1 === t ? `[_ ${r.join(", ")}]` : `[${r.join(", ")}]`;
          }
          createMap(e, t) {
            const r = super.createMap(e),
              n = Array.from(r.keys()).reduce(s(r), "");
            return -1 === t ? `{_ ${n}}` : `{${n}}`;
          }
          createObject(e, t) {
            const r = super.createObject(e),
              n = Object.keys(r).reduce(s(r), "");
            return -1 === t ? `{_ ${n}}` : `{${n}}`;
          }
          createUtf8String(e, t) {
            const r = e.join(", ");
            return -1 === t ? `(_ ${r})` : `"${r}"`;
          }
          createUtf8StringFromHeap(e, r) {
            const n = t
              .from(super.createUtf8StringFromHeap(e, r))
              .toString("utf8");
            return `"${n}"`;
          }
          static diagnose(e, r) {
            "string" === typeof e && (e = t.from(e, r || "hex"));
            const n = new Diagnose();
            return n.decodeFirst(e);
          }
        }
        function s(e) {
          return (t, r) => (t ? `${t}, ${r}: ${e[r]}` : `${r}: ${e[r]}`);
        }
        e.exports = Diagnose;
      }).call(this, r(2).Buffer);
    },
    7121: function (e, t) {
      e.exports = function (e, t, r) {
        "use asm";
        var n = new e.Uint8Array(r);
        var i = t.pushInt;
        var s = t.pushInt32;
        var a = t.pushInt32Neg;
        var o = t.pushInt64;
        var u = t.pushInt64Neg;
        var c = t.pushFloat;
        var h = t.pushFloatSingle;
        var l = t.pushFloatDouble;
        var p = t.pushTrue;
        var f = t.pushFalse;
        var d = t.pushUndefined;
        var g = t.pushNull;
        var m = t.pushInfinity;
        var y = t.pushInfinityNeg;
        var b = t.pushNaN;
        var w = t.pushNaNNeg;
        var v = t.pushArrayStart;
        var _ = t.pushArrayStartFixed;
        var S = t.pushArrayStartFixed32;
        var N = t.pushArrayStartFixed64;
        var E = t.pushObjectStart;
        var T = t.pushObjectStartFixed;
        var I = t.pushObjectStartFixed32;
        var A = t.pushObjectStartFixed64;
        var k = t.pushByteString;
        var P = t.pushByteStringStart;
        var U = t.pushUtf8String;
        var B = t.pushUtf8StringStart;
        var F = t.pushSimpleUnassigned;
        var x = t.pushTagStart;
        var O = t.pushTagStart4;
        var R = t.pushTagStart8;
        var L = t.pushTagUnassigned;
        var M = t.pushBreak;
        var j = e.Math.pow;
        var D = 0;
        var H = 0;
        var G = 0;
        function z(e) {
          e = e | 0;
          D = 0;
          H = e;
          while ((D | 0) < (H | 0)) {
            G = Xe[n[D] & 255](n[D] | 0) | 0;
            if ((G | 0) > 0) {
              break;
            }
          }
          return G | 0;
        }
        function C(e) {
          e = e | 0;
          if ((((D | 0) + (e | 0)) | 0) < (H | 0)) {
            return 0;
          }
          return 1;
        }
        function $(e) {
          e = e | 0;
          return (n[e | 0] << 8) | n[(e + 1) | 0] | 0;
        }
        function q(e) {
          e = e | 0;
          return (
            (n[e | 0] << 24) |
            (n[(e + 1) | 0] << 16) |
            (n[(e + 2) | 0] << 8) |
            n[(e + 3) | 0] |
            0
          );
        }
        function K(e) {
          e = e | 0;
          i(e | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function Y(e) {
          e = e | 0;
          if (C(1) | 0) {
            return 1;
          }
          i(n[(D + 1) | 0] | 0);
          D = (D + 2) | 0;
          return 0;
        }
        function W(e) {
          e = e | 0;
          if (C(2) | 0) {
            return 1;
          }
          i($((D + 1) | 0) | 0);
          D = (D + 3) | 0;
          return 0;
        }
        function J(e) {
          e = e | 0;
          if (C(4) | 0) {
            return 1;
          }
          s($((D + 1) | 0) | 0, $((D + 3) | 0) | 0);
          D = (D + 5) | 0;
          return 0;
        }
        function X(e) {
          e = e | 0;
          if (C(8) | 0) {
            return 1;
          }
          o(
            $((D + 1) | 0) | 0,
            $((D + 3) | 0) | 0,
            $((D + 5) | 0) | 0,
            $((D + 7) | 0) | 0,
          );
          D = (D + 9) | 0;
          return 0;
        }
        function V(e) {
          e = e | 0;
          i((-1 - ((e - 32) | 0)) | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function Z(e) {
          e = e | 0;
          if (C(1) | 0) {
            return 1;
          }
          i((-1 - (n[(D + 1) | 0] | 0)) | 0);
          D = (D + 2) | 0;
          return 0;
        }
        function Q(e) {
          e = e | 0;
          var t = 0;
          if (C(2) | 0) {
            return 1;
          }
          t = $((D + 1) | 0) | 0;
          i((-1 - (t | 0)) | 0);
          D = (D + 3) | 0;
          return 0;
        }
        function ee(e) {
          e = e | 0;
          if (C(4) | 0) {
            return 1;
          }
          a($((D + 1) | 0) | 0, $((D + 3) | 0) | 0);
          D = (D + 5) | 0;
          return 0;
        }
        function te(e) {
          e = e | 0;
          if (C(8) | 0) {
            return 1;
          }
          u(
            $((D + 1) | 0) | 0,
            $((D + 3) | 0) | 0,
            $((D + 5) | 0) | 0,
            $((D + 7) | 0) | 0,
          );
          D = (D + 9) | 0;
          return 0;
        }
        function re(e) {
          e = e | 0;
          var t = 0;
          var r = 0;
          var n = 0;
          n = (e - 64) | 0;
          if (C(n | 0) | 0) {
            return 1;
          }
          t = (D + 1) | 0;
          r = (((D + 1) | 0) + (n | 0)) | 0;
          k(t | 0, r | 0);
          D = r | 0;
          return 0;
        }
        function ne(e) {
          e = e | 0;
          var t = 0;
          var r = 0;
          var i = 0;
          if (C(1) | 0) {
            return 1;
          }
          i = n[(D + 1) | 0] | 0;
          t = (D + 2) | 0;
          r = (((D + 2) | 0) + (i | 0)) | 0;
          if (C((i + 1) | 0) | 0) {
            return 1;
          }
          k(t | 0, r | 0);
          D = r | 0;
          return 0;
        }
        function ie(e) {
          e = e | 0;
          var t = 0;
          var r = 0;
          var n = 0;
          if (C(2) | 0) {
            return 1;
          }
          n = $((D + 1) | 0) | 0;
          t = (D + 3) | 0;
          r = (((D + 3) | 0) + (n | 0)) | 0;
          if (C((n + 2) | 0) | 0) {
            return 1;
          }
          k(t | 0, r | 0);
          D = r | 0;
          return 0;
        }
        function se(e) {
          e = e | 0;
          var t = 0;
          var r = 0;
          var n = 0;
          if (C(4) | 0) {
            return 1;
          }
          n = q((D + 1) | 0) | 0;
          t = (D + 5) | 0;
          r = (((D + 5) | 0) + (n | 0)) | 0;
          if (C((n + 4) | 0) | 0) {
            return 1;
          }
          k(t | 0, r | 0);
          D = r | 0;
          return 0;
        }
        function ae(e) {
          e = e | 0;
          return 1;
        }
        function oe(e) {
          e = e | 0;
          P();
          D = (D + 1) | 0;
          return 0;
        }
        function ue(e) {
          e = e | 0;
          var t = 0;
          var r = 0;
          var n = 0;
          n = (e - 96) | 0;
          if (C(n | 0) | 0) {
            return 1;
          }
          t = (D + 1) | 0;
          r = (((D + 1) | 0) + (n | 0)) | 0;
          U(t | 0, r | 0);
          D = r | 0;
          return 0;
        }
        function ce(e) {
          e = e | 0;
          var t = 0;
          var r = 0;
          var i = 0;
          if (C(1) | 0) {
            return 1;
          }
          i = n[(D + 1) | 0] | 0;
          t = (D + 2) | 0;
          r = (((D + 2) | 0) + (i | 0)) | 0;
          if (C((i + 1) | 0) | 0) {
            return 1;
          }
          U(t | 0, r | 0);
          D = r | 0;
          return 0;
        }
        function he(e) {
          e = e | 0;
          var t = 0;
          var r = 0;
          var n = 0;
          if (C(2) | 0) {
            return 1;
          }
          n = $((D + 1) | 0) | 0;
          t = (D + 3) | 0;
          r = (((D + 3) | 0) + (n | 0)) | 0;
          if (C((n + 2) | 0) | 0) {
            return 1;
          }
          U(t | 0, r | 0);
          D = r | 0;
          return 0;
        }
        function le(e) {
          e = e | 0;
          var t = 0;
          var r = 0;
          var n = 0;
          if (C(4) | 0) {
            return 1;
          }
          n = q((D + 1) | 0) | 0;
          t = (D + 5) | 0;
          r = (((D + 5) | 0) + (n | 0)) | 0;
          if (C((n + 4) | 0) | 0) {
            return 1;
          }
          U(t | 0, r | 0);
          D = r | 0;
          return 0;
        }
        function pe(e) {
          e = e | 0;
          return 1;
        }
        function fe(e) {
          e = e | 0;
          B();
          D = (D + 1) | 0;
          return 0;
        }
        function de(e) {
          e = e | 0;
          _((e - 128) | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function ge(e) {
          e = e | 0;
          if (C(1) | 0) {
            return 1;
          }
          _(n[(D + 1) | 0] | 0);
          D = (D + 2) | 0;
          return 0;
        }
        function me(e) {
          e = e | 0;
          if (C(2) | 0) {
            return 1;
          }
          _($((D + 1) | 0) | 0);
          D = (D + 3) | 0;
          return 0;
        }
        function ye(e) {
          e = e | 0;
          if (C(4) | 0) {
            return 1;
          }
          S($((D + 1) | 0) | 0, $((D + 3) | 0) | 0);
          D = (D + 5) | 0;
          return 0;
        }
        function be(e) {
          e = e | 0;
          if (C(8) | 0) {
            return 1;
          }
          N(
            $((D + 1) | 0) | 0,
            $((D + 3) | 0) | 0,
            $((D + 5) | 0) | 0,
            $((D + 7) | 0) | 0,
          );
          D = (D + 9) | 0;
          return 0;
        }
        function we(e) {
          e = e | 0;
          v();
          D = (D + 1) | 0;
          return 0;
        }
        function ve(e) {
          e = e | 0;
          var t = 0;
          t = (e - 160) | 0;
          if (C(t | 0) | 0) {
            return 1;
          }
          T(t | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function _e(e) {
          e = e | 0;
          if (C(1) | 0) {
            return 1;
          }
          T(n[(D + 1) | 0] | 0);
          D = (D + 2) | 0;
          return 0;
        }
        function Se(e) {
          e = e | 0;
          if (C(2) | 0) {
            return 1;
          }
          T($((D + 1) | 0) | 0);
          D = (D + 3) | 0;
          return 0;
        }
        function Ne(e) {
          e = e | 0;
          if (C(4) | 0) {
            return 1;
          }
          I($((D + 1) | 0) | 0, $((D + 3) | 0) | 0);
          D = (D + 5) | 0;
          return 0;
        }
        function Ee(e) {
          e = e | 0;
          if (C(8) | 0) {
            return 1;
          }
          A(
            $((D + 1) | 0) | 0,
            $((D + 3) | 0) | 0,
            $((D + 5) | 0) | 0,
            $((D + 7) | 0) | 0,
          );
          D = (D + 9) | 0;
          return 0;
        }
        function Te(e) {
          e = e | 0;
          E();
          D = (D + 1) | 0;
          return 0;
        }
        function Ie(e) {
          e = e | 0;
          x((e - 192) | 0 | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function Ae(e) {
          e | 0;
          x(e | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function ke(e) {
          e | 0;
          x(e | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function Pe(e) {
          e | 0;
          x(e | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function Ue(e) {
          e | 0;
          x(e | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function Be(e) {
          e = e | 0;
          x((e - 192) | 0 | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function Fe(e) {
          e | 0;
          x(e | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function xe(e) {
          e | 0;
          x(e | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function Oe(e) {
          e | 0;
          x(e | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function Re(e) {
          e = e | 0;
          if (C(1) | 0) {
            return 1;
          }
          x(n[(D + 1) | 0] | 0);
          D = (D + 2) | 0;
          return 0;
        }
        function Le(e) {
          e = e | 0;
          if (C(2) | 0) {
            return 1;
          }
          x($((D + 1) | 0) | 0);
          D = (D + 3) | 0;
          return 0;
        }
        function Me(e) {
          e = e | 0;
          if (C(4) | 0) {
            return 1;
          }
          O($((D + 1) | 0) | 0, $((D + 3) | 0) | 0);
          D = (D + 5) | 0;
          return 0;
        }
        function je(e) {
          e = e | 0;
          if (C(8) | 0) {
            return 1;
          }
          R(
            $((D + 1) | 0) | 0,
            $((D + 3) | 0) | 0,
            $((D + 5) | 0) | 0,
            $((D + 7) | 0) | 0,
          );
          D = (D + 9) | 0;
          return 0;
        }
        function De(e) {
          e = e | 0;
          F(((e | 0) - 224) | 0);
          D = (D + 1) | 0;
          return 0;
        }
        function He(e) {
          e = e | 0;
          f();
          D = (D + 1) | 0;
          return 0;
        }
        function Ge(e) {
          e = e | 0;
          p();
          D = (D + 1) | 0;
          return 0;
        }
        function ze(e) {
          e = e | 0;
          g();
          D = (D + 1) | 0;
          return 0;
        }
        function Ce(e) {
          e = e | 0;
          d();
          D = (D + 1) | 0;
          return 0;
        }
        function $e(e) {
          e = e | 0;
          if (C(1) | 0) {
            return 1;
          }
          F(n[(D + 1) | 0] | 0);
          D = (D + 2) | 0;
          return 0;
        }
        function qe(e) {
          e = e | 0;
          var t = 0;
          var r = 0;
          var i = 1.0;
          var s = 0.0;
          var a = 0.0;
          var o = 0.0;
          if (C(2) | 0) {
            return 1;
          }
          t = n[(D + 1) | 0] | 0;
          r = n[(D + 2) | 0] | 0;
          if ((t | 0) & 0x80) {
            i = -1.0;
          }
          s = +(((t | 0) & 0x7c) >> 2);
          a = +((((t | 0) & 0x03) << 8) | r);
          if (+s == 0.0) {
            c(+(+i * +5.9604644775390625e-8 * +a));
          } else if (+s == 31.0) {
            if (+i == 1.0) {
              if (+a > 0.0) {
                b();
              } else {
                m();
              }
            } else {
              if (+a > 0.0) {
                w();
              } else {
                y();
              }
            }
          } else {
            c(+(+i * j(+2, +(+s - 25.0)) * +(1024.0 + a)));
          }
          D = (D + 3) | 0;
          return 0;
        }
        function Ke(e) {
          e = e | 0;
          if (C(4) | 0) {
            return 1;
          }
          h(
            n[(D + 1) | 0] | 0,
            n[(D + 2) | 0] | 0,
            n[(D + 3) | 0] | 0,
            n[(D + 4) | 0] | 0,
          );
          D = (D + 5) | 0;
          return 0;
        }
        function Ye(e) {
          e = e | 0;
          if (C(8) | 0) {
            return 1;
          }
          l(
            n[(D + 1) | 0] | 0,
            n[(D + 2) | 0] | 0,
            n[(D + 3) | 0] | 0,
            n[(D + 4) | 0] | 0,
            n[(D + 5) | 0] | 0,
            n[(D + 6) | 0] | 0,
            n[(D + 7) | 0] | 0,
            n[(D + 8) | 0] | 0,
          );
          D = (D + 9) | 0;
          return 0;
        }
        function We(e) {
          e = e | 0;
          return 1;
        }
        function Je(e) {
          e = e | 0;
          M();
          D = (D + 1) | 0;
          return 0;
        }
        var Xe = [
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          K,
          Y,
          W,
          J,
          X,
          We,
          We,
          We,
          We,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          V,
          Z,
          Q,
          ee,
          te,
          We,
          We,
          We,
          We,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          re,
          ne,
          ie,
          se,
          ae,
          We,
          We,
          We,
          oe,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ue,
          ce,
          he,
          le,
          pe,
          We,
          We,
          We,
          fe,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          de,
          ge,
          me,
          ye,
          be,
          We,
          We,
          We,
          we,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          ve,
          _e,
          Se,
          Ne,
          Ee,
          We,
          We,
          We,
          Te,
          Ie,
          Ie,
          Ie,
          Ie,
          Ie,
          Ie,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Be,
          Re,
          Le,
          Me,
          je,
          We,
          We,
          We,
          We,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          De,
          He,
          Ge,
          ze,
          Ce,
          $e,
          qe,
          Ke,
          Ye,
          We,
          We,
          We,
          Je,
        ];
        return { parse: z };
      };
    },
    7122: function (e, t, r) {
      "use strict";
      const { URLWithLegacySupport: n, format: i } = r(5876);
      e.exports = function (e, t, r, s) {
        (void 0 === t && (t = {}), void 0 === r && (r = {}));
        let a,
          o = t.protocol ? t.protocol.replace(":", "") : "http";
        o = (r[o] || s || o) + ":";
        try {
          a = new n(e);
        } catch (c) {
          a = {};
        }
        const u = Object.assign({}, t, {
          protocol: o || a.protocol,
          host: t.host || a.host,
        });
        return new n(e, i(u)).toString();
      };
    },
    7123: function (e, t, r) {
      "use strict";
      (function (t) {
        const { URL: n } = r(5875),
          i = r(4620),
          s = r(4913),
          a = r(4621),
          o = a.MT,
          u = a.NUMBYTES,
          c = a.SHIFT32,
          h = a.SYMS,
          l = a.TAG,
          p = (a.MT.SIMPLE_FLOAT << 5) | a.NUMBYTES.TWO,
          f = (a.MT.SIMPLE_FLOAT << 5) | a.NUMBYTES.FOUR,
          d = (a.MT.SIMPLE_FLOAT << 5) | a.NUMBYTES.EIGHT,
          g = (a.MT.SIMPLE_FLOAT << 5) | a.SIMPLE.TRUE,
          m = (a.MT.SIMPLE_FLOAT << 5) | a.SIMPLE.FALSE,
          y = (a.MT.SIMPLE_FLOAT << 5) | a.SIMPLE.UNDEFINED,
          b = (a.MT.SIMPLE_FLOAT << 5) | a.SIMPLE.NULL,
          w = new i("0x20000000000000"),
          v = t.from("f97e00", "hex"),
          _ = t.from("f9fc00", "hex"),
          S = t.from("f97c00", "hex");
        function N(e) {
          return {}.toString.call(e).slice(8, -1);
        }
        class Encoder {
          constructor(e) {
            ((e = e || {}),
              (this.streaming = "function" === typeof e.stream),
              (this.onData = e.stream),
              (this.semanticTypes = [
                [n, this._pushUrl],
                [i, this._pushBigNumber],
              ]));
            const t = e.genTypes || [],
              r = t.length;
            for (let n = 0; n < r; n++) this.addSemanticType(t[n][0], t[n][1]);
            this._reset();
          }
          addSemanticType(e, t) {
            const r = this.semanticTypes.length;
            for (let n = 0; n < r; n++) {
              const r = this.semanticTypes[n][0];
              if (r === e) {
                const e = this.semanticTypes[n][1];
                return ((this.semanticTypes[n][1] = t), e);
              }
            }
            return (this.semanticTypes.push([e, t]), null);
          }
          push(e) {
            return (
              !e ||
              ((this.result[this.offset] = e),
              (this.resultMethod[this.offset] = 0),
              (this.resultLength[this.offset] = e.length),
              this.offset++,
              this.streaming && this.onData(this.finalize()),
              !0)
            );
          }
          pushWrite(e, t, r) {
            return (
              (this.result[this.offset] = e),
              (this.resultMethod[this.offset] = t),
              (this.resultLength[this.offset] = r),
              this.offset++,
              this.streaming && this.onData(this.finalize()),
              !0
            );
          }
          _pushUInt8(e) {
            return this.pushWrite(e, 1, 1);
          }
          _pushUInt16BE(e) {
            return this.pushWrite(e, 2, 2);
          }
          _pushUInt32BE(e) {
            return this.pushWrite(e, 3, 4);
          }
          _pushDoubleBE(e) {
            return this.pushWrite(e, 4, 8);
          }
          _pushNaN() {
            return this.push(v);
          }
          _pushInfinity(e) {
            const t = e < 0 ? _ : S;
            return this.push(t);
          }
          _pushFloat(e) {
            const r = t.allocUnsafe(2);
            if (s.writeHalf(r, e) && s.parseHalf(r) === e)
              return this._pushUInt8(p) && this.push(r);
            const n = t.allocUnsafe(4);
            return (
              n.writeFloatBE(e, 0),
              n.readFloatBE(0) === e
                ? this._pushUInt8(f) && this.push(n)
                : this._pushUInt8(d) && this._pushDoubleBE(e)
            );
          }
          _pushInt(e, t, r) {
            const n = t << 5;
            return e < 24
              ? this._pushUInt8(n | e)
              : e <= 255
                ? this._pushUInt8(n | u.ONE) && this._pushUInt8(e)
                : e <= 65535
                  ? this._pushUInt8(n | u.TWO) && this._pushUInt16BE(e)
                  : e <= 4294967295
                    ? this._pushUInt8(n | u.FOUR) && this._pushUInt32BE(e)
                    : e <= Number.MAX_SAFE_INTEGER
                      ? this._pushUInt8(n | u.EIGHT) &&
                        this._pushUInt32BE(Math.floor(e / c)) &&
                        this._pushUInt32BE(e % c)
                      : t === o.NEG_INT
                        ? this._pushFloat(r)
                        : this._pushFloat(e);
          }
          _pushIntNum(e) {
            return e < 0
              ? this._pushInt(-e - 1, o.NEG_INT, e)
              : this._pushInt(e, o.POS_INT);
          }
          _pushNumber(e) {
            switch (!1) {
              case e === e:
                return this._pushNaN(e);
              case isFinite(e):
                return this._pushInfinity(e);
              case e % 1 !== 0:
                return this._pushIntNum(e);
              default:
                return this._pushFloat(e);
            }
          }
          _pushString(e) {
            const r = t.byteLength(e, "utf8");
            return this._pushInt(r, o.UTF8_STRING) && this.pushWrite(e, 5, r);
          }
          _pushBoolean(e) {
            return this._pushUInt8(e ? g : m);
          }
          _pushUndefined(e) {
            return this._pushUInt8(y);
          }
          _pushArray(e, t) {
            const r = t.length;
            if (!e._pushInt(r, o.ARRAY)) return !1;
            for (let n = 0; n < r; n++) if (!e.pushAny(t[n])) return !1;
            return !0;
          }
          _pushTag(e) {
            return this._pushInt(e, o.TAG);
          }
          _pushDate(e, t) {
            return e._pushTag(l.DATE_EPOCH) && e.pushAny(Math.round(t / 1e3));
          }
          _pushBuffer(e, t) {
            return e._pushInt(t.length, o.BYTE_STRING) && e.push(t);
          }
          _pushNoFilter(e, t) {
            return e._pushBuffer(e, t.slice());
          }
          _pushRegexp(e, t) {
            return e._pushTag(l.REGEXP) && e.pushAny(t.source);
          }
          _pushSet(e, t) {
            if (!e._pushInt(t.size, o.ARRAY)) return !1;
            for (let r of t) if (!e.pushAny(r)) return !1;
            return !0;
          }
          _pushUrl(e, t) {
            return e._pushTag(l.URI) && e.pushAny(t.format());
          }
          _pushBigint(e) {
            let r = l.POS_BIGINT;
            e.isNegative() && ((e = e.negated().minus(1)), (r = l.NEG_BIGINT));
            let n = e.toString(16);
            n.length % 2 && (n = "0" + n);
            const i = t.from(n, "hex");
            return this._pushTag(r) && this._pushBuffer(this, i);
          }
          _pushBigNumber(e, t) {
            if (t.isNaN()) return e._pushNaN();
            if (!t.isFinite())
              return e._pushInfinity(t.isNegative() ? -1 / 0 : 1 / 0);
            if (t.isInteger()) return e._pushBigint(t);
            if (!e._pushTag(l.DECIMAL_FRAC) || !e._pushInt(2, o.ARRAY))
              return !1;
            const r = t.decimalPlaces(),
              n = t.multipliedBy(new i(10).pow(r));
            return (
              !!e._pushIntNum(-r) &&
              (n.abs().isLessThan(w)
                ? e._pushIntNum(n.toNumber())
                : e._pushBigint(n))
            );
          }
          _pushMap(e, t) {
            return (
              !!e._pushInt(t.size, o.MAP) &&
              this._pushRawMap(t.size, Array.from(t))
            );
          }
          _pushObject(e) {
            if (!e) return this._pushUInt8(b);
            for (var t = this.semanticTypes.length, r = 0; r < t; r++)
              if (e instanceof this.semanticTypes[r][0])
                return this.semanticTypes[r][1].call(e, this, e);
            var n = e.encodeCBOR;
            if ("function" === typeof n) return n.call(e, this);
            var i = Object.keys(e),
              s = i.length;
            return (
              !!this._pushInt(s, o.MAP) &&
              this._pushRawMap(
                s,
                i.map((t) => [t, e[t]]),
              )
            );
          }
          _pushRawMap(e, t) {
            t = t
              .map(function (e) {
                return ((e[0] = Encoder.encode(e[0])), e);
              })
              .sort(s.keySorter);
            for (var r = 0; r < e; r++) {
              if (!this.push(t[r][0])) return !1;
              if (!this.pushAny(t[r][1])) return !1;
            }
            return !0;
          }
          write(e) {
            return this.pushAny(e);
          }
          pushAny(e) {
            var r = N(e);
            switch (r) {
              case "Number":
                return this._pushNumber(e);
              case "String":
                return this._pushString(e);
              case "Boolean":
                return this._pushBoolean(e);
              case "Object":
                return this._pushObject(e);
              case "Array":
                return this._pushArray(this, e);
              case "Uint8Array":
                return this._pushBuffer(this, t.isBuffer(e) ? e : t.from(e));
              case "Null":
                return this._pushUInt8(b);
              case "Undefined":
                return this._pushUndefined(e);
              case "Map":
                return this._pushMap(this, e);
              case "Set":
                return this._pushSet(this, e);
              case "URL":
                return this._pushUrl(this, e);
              case "BigNumber":
                return this._pushBigNumber(this, e);
              case "Date":
                return this._pushDate(this, e);
              case "RegExp":
                return this._pushRegexp(this, e);
              case "Symbol":
                switch (e) {
                  case h.NULL:
                    return this._pushObject(null);
                  case h.UNDEFINED:
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
          finalize() {
            if (0 === this.offset) return null;
            for (
              var e = this.result,
                r = this.resultLength,
                n = this.resultMethod,
                i = this.offset,
                s = 0,
                a = 0;
              a < i;
              a++
            )
              s += r[a];
            var o = t.allocUnsafe(s),
              u = 0,
              c = 0;
            for (a = 0; a < i; a++) {
              switch (((c = r[a]), n[a])) {
                case 0:
                  e[a].copy(o, u);
                  break;
                case 1:
                  o.writeUInt8(e[a], u, !0);
                  break;
                case 2:
                  o.writeUInt16BE(e[a], u, !0);
                  break;
                case 3:
                  o.writeUInt32BE(e[a], u, !0);
                  break;
                case 4:
                  o.writeDoubleBE(e[a], u, !0);
                  break;
                case 5:
                  o.write(e[a], u, c, "utf8");
                  break;
                default:
                  throw new Error("unkown method");
              }
              u += c;
            }
            var h = o;
            return (this._reset(), h);
          }
          _reset() {
            ((this.result = []),
              (this.resultMethod = []),
              (this.resultLength = []),
              (this.offset = 0));
          }
          static encode(e) {
            const t = new Encoder(),
              r = t.pushAny(e);
            if (!r) throw new Error("Failed to encode input");
            return t.finalize();
          }
        }
        e.exports = Encoder;
      }).call(this, r(2).Buffer);
    },
  },
]);
