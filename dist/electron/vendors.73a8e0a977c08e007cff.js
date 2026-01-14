(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [117],
  {
    105: function (e, t, r) {
      var n;
      (function (i) {
        "use strict";
        var o,
          s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          a = Math.ceil,
          u = Math.floor,
          l = "[BigNumber Error] ",
          h = l + "Number primitive has more than 15 significant digits: ",
          f = 1e14,
          c = 14,
          d = 9007199254740991,
          m = [
            1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
            1e13,
          ],
          g = 1e7,
          p = 1e9;
        function A(e) {
          var t,
            r,
            n,
            i = (k.prototype = {
              constructor: k,
              toString: null,
              valueOf: null,
            }),
            o = new k(1),
            S = 20,
            C = 4,
            N = -7,
            P = 21,
            F = -1e7,
            O = 1e7,
            D = !1,
            R = 1,
            T = 0,
            x = {
              prefix: "",
              groupSize: 3,
              secondaryGroupSize: 0,
              groupSeparator: ",",
              decimalSeparator: ".",
              fractionGroupSize: 0,
              fractionGroupSeparator: " ",
              suffix: "",
            },
            I = "0123456789abcdefghijklmnopqrstuvwxyz",
            U = !0;
          function k(e, t) {
            var i,
              o,
              a,
              l,
              f,
              m,
              g,
              p,
              A = this;
            if (!(A instanceof k)) return new k(e, t);
            if (null == t) {
              if (e && !0 === e._isBigNumber)
                return (
                  (A.s = e.s),
                  void (!e.c || e.e > O
                    ? (A.c = A.e = null)
                    : e.e < F
                      ? (A.c = [(A.e = 0)])
                      : ((A.e = e.e), (A.c = e.c.slice())))
                );
              if ((m = "number" == typeof e) && 0 * e == 0) {
                if (((A.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                  for (l = 0, f = e; f >= 10; f /= 10, l++);
                  return void (l > O
                    ? (A.c = A.e = null)
                    : ((A.e = l), (A.c = [e])));
                }
                p = String(e);
              } else {
                if (!s.test((p = String(e)))) return n(A, p, m);
                A.s = 45 == p.charCodeAt(0) ? ((p = p.slice(1)), -1) : 1;
              }
              ((l = p.indexOf(".")) > -1 && (p = p.replace(".", "")),
                (f = p.search(/e/i)) > 0
                  ? (l < 0 && (l = f),
                    (l += +p.slice(f + 1)),
                    (p = p.substring(0, f)))
                  : l < 0 && (l = p.length));
            } else {
              if ((b(t, 2, I.length, "Base"), 10 == t && U))
                return ((A = new k(e)), H(A, S + A.e + 1, C));
              if (((p = String(e)), (m = "number" == typeof e))) {
                if (0 * e != 0) return n(A, p, m, t);
                if (
                  ((A.s = 1 / e < 0 ? ((p = p.slice(1)), -1) : 1),
                  k.DEBUG && p.replace(/^0\.0*|\./, "").length > 15)
                )
                  throw Error(h + e);
              } else A.s = 45 === p.charCodeAt(0) ? ((p = p.slice(1)), -1) : 1;
              for (i = I.slice(0, t), l = f = 0, g = p.length; f < g; f++)
                if (i.indexOf((o = p.charAt(f))) < 0) {
                  if ("." == o) {
                    if (f > l) {
                      l = g;
                      continue;
                    }
                  } else if (
                    !a &&
                    ((p == p.toUpperCase() && (p = p.toLowerCase())) ||
                      (p == p.toLowerCase() && (p = p.toUpperCase())))
                  ) {
                    ((a = !0), (f = -1), (l = 0));
                    continue;
                  }
                  return n(A, String(e), m, t);
                }
              ((m = !1),
                (p = r(p, t, 10, A.s)),
                (l = p.indexOf(".")) > -1
                  ? (p = p.replace(".", ""))
                  : (l = p.length));
            }
            for (f = 0; 48 === p.charCodeAt(f); f++);
            for (g = p.length; 48 === p.charCodeAt(--g); );
            if ((p = p.slice(f, ++g))) {
              if (((g -= f), m && k.DEBUG && g > 15 && (e > d || e !== u(e))))
                throw Error(h + A.s * e);
              if ((l = l - f - 1) > O) A.c = A.e = null;
              else if (l < F) A.c = [(A.e = 0)];
              else {
                if (
                  ((A.e = l),
                  (A.c = []),
                  (f = (l + 1) % c),
                  l < 0 && (f += c),
                  f < g)
                ) {
                  for (f && A.c.push(+p.slice(0, f)), g -= c; f < g; )
                    A.c.push(+p.slice(f, (f += c)));
                  f = c - (p = p.slice(f)).length;
                } else f -= g;
                for (; f--; p += "0");
                A.c.push(+p);
              }
            } else A.c = [(A.e = 0)];
          }
          function L(e, t, r, n) {
            var i, o, s, a, u;
            if ((null == r ? (r = C) : b(r, 0, 8), !e.c)) return e.toString();
            if (((i = e.c[0]), (s = e.e), null == t))
              ((u = v(e.c)),
                (u =
                  1 == n || (2 == n && (s <= N || s >= P))
                    ? E(u, s)
                    : B(u, s, "0")));
            else if (
              ((e = H(new k(e), t, r)),
              (o = e.e),
              (u = v(e.c)),
              (a = u.length),
              1 == n || (2 == n && (t <= o || o <= N)))
            ) {
              for (; a < t; u += "0", a++);
              u = E(u, o);
            } else if (((t -= s), (u = B(u, o, "0")), o + 1 > a)) {
              if (--t > 0) for (u += "."; t--; u += "0");
            } else if (((t += o - a), t > 0))
              for (o + 1 == a && (u += "."); t--; u += "0");
            return e.s < 0 && i ? "-" + u : u;
          }
          function _(e, t) {
            for (var r, n = 1, i = new k(e[0]); n < e.length; n++) {
              if (((r = new k(e[n])), !r.s)) {
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
              (r = n + r * c - 1) > O
                ? (e.c = e.e = null)
                : r < F
                  ? (e.c = [(e.e = 0)])
                  : ((e.e = r), (e.c = t)),
              e
            );
          }
          function H(e, t, r, n) {
            var i,
              o,
              s,
              l,
              h,
              d,
              g,
              p = e.c,
              A = m;
            if (p) {
              e: {
                for (i = 1, l = p[0]; l >= 10; l /= 10, i++);
                if (((o = t - i), o < 0))
                  ((o += c),
                    (s = t),
                    (h = p[(d = 0)]),
                    (g = ((h / A[i - s - 1]) % 10) | 0));
                else if (((d = a((o + 1) / c)), d >= p.length)) {
                  if (!n) break e;
                  for (; p.length <= d; p.push(0));
                  ((h = g = 0), (i = 1), (o %= c), (s = o - c + 1));
                } else {
                  for (h = l = p[d], i = 1; l >= 10; l /= 10, i++);
                  ((o %= c),
                    (s = o - c + i),
                    (g = s < 0 ? 0 : ((h / A[i - s - 1]) % 10) | 0));
                }
                if (
                  ((n =
                    n ||
                    t < 0 ||
                    null != p[d + 1] ||
                    (s < 0 ? h : h % A[i - s - 1])),
                  (n =
                    r < 4
                      ? (g || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                      : g > 5 ||
                        (5 == g &&
                          (4 == r ||
                            n ||
                            (6 == r &&
                              ((o > 0 ? (s > 0 ? h / A[i - s] : 0) : p[d - 1]) %
                                10) &
                                1) ||
                            r == (e.s < 0 ? 8 : 7)))),
                  t < 1 || !p[0])
                )
                  return (
                    (p.length = 0),
                    n
                      ? ((t -= e.e + 1),
                        (p[0] = A[(c - (t % c)) % c]),
                        (e.e = -t || 0))
                      : (p[0] = e.e = 0),
                    e
                  );
                if (
                  (0 == o
                    ? ((p.length = d), (l = 1), d--)
                    : ((p.length = d + 1),
                      (l = A[c - o]),
                      (p[d] = s > 0 ? u((h / A[i - s]) % A[s]) * l : 0)),
                  n)
                )
                  for (;;) {
                    if (0 == d) {
                      for (o = 1, s = p[0]; s >= 10; s /= 10, o++);
                      for (s = p[0] += l, l = 1; s >= 10; s /= 10, l++);
                      o != l && (e.e++, p[0] == f && (p[0] = 1));
                      break;
                    }
                    if (((p[d] += l), p[d] != f)) break;
                    ((p[d--] = 0), (l = 1));
                  }
                for (o = p.length; 0 === p[--o]; p.pop());
              }
              e.e > O ? (e.c = e.e = null) : e.e < F && (e.c = [(e.e = 0)]);
            }
            return e;
          }
          function j(e) {
            var t,
              r = e.e;
            return null === r
              ? e.toString()
              : ((t = v(e.c)),
                (t = r <= N || r >= P ? E(t, r) : B(t, r, "0")),
                e.s < 0 ? "-" + t : t);
          }
          return (
            (k.clone = A),
            (k.ROUND_UP = 0),
            (k.ROUND_DOWN = 1),
            (k.ROUND_CEIL = 2),
            (k.ROUND_FLOOR = 3),
            (k.ROUND_HALF_UP = 4),
            (k.ROUND_HALF_DOWN = 5),
            (k.ROUND_HALF_EVEN = 6),
            (k.ROUND_HALF_CEIL = 7),
            (k.ROUND_HALF_FLOOR = 8),
            (k.EUCLID = 9),
            (k.config = k.set =
              function (e) {
                var t, r;
                if (null != e) {
                  if ("object" != typeof e)
                    throw Error(l + "Object expected: " + e);
                  if (
                    (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                      ((r = e[t]), b(r, 0, p, t), (S = r)),
                    e.hasOwnProperty((t = "ROUNDING_MODE")) &&
                      ((r = e[t]), b(r, 0, 8, t), (C = r)),
                    e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                      ((r = e[t]),
                      r && r.pop
                        ? (b(r[0], -p, 0, t),
                          b(r[1], 0, p, t),
                          (N = r[0]),
                          (P = r[1]))
                        : (b(r, -p, p, t), (N = -(P = r < 0 ? -r : r)))),
                    e.hasOwnProperty((t = "RANGE")))
                  )
                    if (((r = e[t]), r && r.pop))
                      (b(r[0], -p, -1, t),
                        b(r[1], 1, p, t),
                        (F = r[0]),
                        (O = r[1]));
                    else {
                      if ((b(r, -p, p, t), !r))
                        throw Error(l + t + " cannot be zero: " + r);
                      F = -(O = r < 0 ? -r : r);
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
                        throw ((D = !r), Error(l + "crypto unavailable"));
                      D = r;
                    } else D = r;
                  }
                  if (
                    (e.hasOwnProperty((t = "MODULO_MODE")) &&
                      ((r = e[t]), b(r, 0, 9, t), (R = r)),
                    e.hasOwnProperty((t = "POW_PRECISION")) &&
                      ((r = e[t]), b(r, 0, p, t), (T = r)),
                    e.hasOwnProperty((t = "FORMAT")))
                  ) {
                    if (((r = e[t]), "object" != typeof r))
                      throw Error(l + t + " not an object: " + r);
                    x = r;
                  }
                  if (e.hasOwnProperty((t = "ALPHABET"))) {
                    if (
                      ((r = e[t]),
                      "string" != typeof r || /^.?$|[+\-.\s]|(.).*\1/.test(r))
                    )
                      throw Error(l + t + " invalid: " + r);
                    ((U = "0123456789" == r.slice(0, 10)), (I = r));
                  }
                }
                return {
                  DECIMAL_PLACES: S,
                  ROUNDING_MODE: C,
                  EXPONENTIAL_AT: [N, P],
                  RANGE: [F, O],
                  CRYPTO: D,
                  MODULO_MODE: R,
                  POW_PRECISION: T,
                  FORMAT: x,
                  ALPHABET: I,
                };
              }),
            (k.isBigNumber = function (e) {
              if (!e || !0 !== e._isBigNumber) return !1;
              if (!k.DEBUG) return !0;
              var t,
                r,
                n = e.c,
                i = e.e,
                o = e.s;
              e: if ("[object Array]" == {}.toString.call(n)) {
                if ((1 === o || -1 === o) && i >= -p && i <= p && i === u(i)) {
                  if (0 === n[0]) {
                    if (0 === i && 1 === n.length) return !0;
                    break e;
                  }
                  if (
                    ((t = (i + 1) % c),
                    t < 1 && (t += c),
                    String(n[0]).length == t)
                  ) {
                    for (t = 0; t < n.length; t++)
                      if (((r = n[t]), r < 0 || r >= f || r !== u(r))) break e;
                    if (0 !== r) return !0;
                  }
                }
              } else if (
                null === n &&
                null === i &&
                (null === o || 1 === o || -1 === o)
              )
                return !0;
              throw Error(l + "Invalid BigNumber: " + e);
            }),
            (k.maximum = k.max =
              function () {
                return _(arguments, i.lt);
              }),
            (k.minimum = k.min =
              function () {
                return _(arguments, i.gt);
              }),
            (k.random = (function () {
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
                  i,
                  s,
                  h,
                  f = 0,
                  d = [],
                  g = new k(o);
                if ((null == e ? (e = S) : b(e, 0, p), (s = a(e / c)), D))
                  if (crypto.getRandomValues) {
                    for (
                      r = crypto.getRandomValues(new Uint32Array((s *= 2)));
                      f < s;
                    )
                      ((h = 131072 * r[f] + (r[f + 1] >>> 11)),
                        h >= 9e15
                          ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                            (r[f] = n[0]),
                            (r[f + 1] = n[1]))
                          : (d.push(h % 1e14), (f += 2)));
                    f = s / 2;
                  } else {
                    if (!crypto.randomBytes)
                      throw ((D = !1), Error(l + "crypto unavailable"));
                    for (r = crypto.randomBytes((s *= 7)); f < s; )
                      ((h =
                        281474976710656 * (31 & r[f]) +
                        1099511627776 * r[f + 1] +
                        4294967296 * r[f + 2] +
                        16777216 * r[f + 3] +
                        (r[f + 4] << 16) +
                        (r[f + 5] << 8) +
                        r[f + 6]),
                        h >= 9e15
                          ? crypto.randomBytes(7).copy(r, f)
                          : (d.push(h % 1e14), (f += 7)));
                    f = s / 7;
                  }
                if (!D)
                  for (; f < s; ) ((h = t()), h < 9e15 && (d[f++] = h % 1e14));
                for (
                  s = d[--f],
                    e %= c,
                    s && e && ((h = m[c - e]), (d[f] = u(s / h) * h));
                  0 === d[f];
                  d.pop(), f--
                );
                if (f < 0) d = [(i = 0)];
                else {
                  for (i = -1; 0 === d[0]; d.splice(0, 1), i -= c);
                  for (f = 1, h = d[0]; h >= 10; h /= 10, f++);
                  f < c && (i -= c - f);
                }
                return ((g.e = i), (g.c = d), g);
              };
            })()),
            (k.sum = function () {
              for (var e = 1, t = arguments, r = new k(t[0]); e < t.length; )
                r = r.plus(t[e++]);
              return r;
            }),
            (r = (function () {
              var e = "0123456789";
              function r(e, t, r, n) {
                for (var i, o, s = [0], a = 0, u = e.length; a < u; ) {
                  for (o = s.length; o--; s[o] *= t);
                  for (
                    s[0] += n.indexOf(e.charAt(a++)), i = 0;
                    i < s.length;
                    i++
                  )
                    s[i] > r - 1 &&
                      (null == s[i + 1] && (s[i + 1] = 0),
                      (s[i + 1] += (s[i] / r) | 0),
                      (s[i] %= r));
                }
                return s.reverse();
              }
              return function (n, i, o, s, a) {
                var u,
                  l,
                  h,
                  f,
                  c,
                  d,
                  m,
                  g,
                  p = n.indexOf("."),
                  A = S,
                  y = C;
                for (
                  p >= 0 &&
                    ((f = T),
                    (T = 0),
                    (n = n.replace(".", "")),
                    (g = new k(i)),
                    (d = g.pow(n.length - p)),
                    (T = f),
                    (g.c = r(B(v(d.c), d.e, "0"), 10, o, e)),
                    (g.e = g.c.length)),
                    m = r(n, i, o, a ? ((u = I), e) : ((u = e), I)),
                    h = f = m.length;
                  0 == m[--f];
                  m.pop()
                );
                if (!m[0]) return u.charAt(0);
                if (
                  (p < 0
                    ? --h
                    : ((d.c = m),
                      (d.e = h),
                      (d.s = s),
                      (d = t(d, g, A, y, o)),
                      (m = d.c),
                      (c = d.r),
                      (h = d.e)),
                  (l = h + A + 1),
                  (p = m[l]),
                  (f = o / 2),
                  (c = c || l < 0 || null != m[l + 1]),
                  (c =
                    y < 4
                      ? (null != p || c) && (0 == y || y == (d.s < 0 ? 3 : 2))
                      : p > f ||
                        (p == f &&
                          (4 == y ||
                            c ||
                            (6 == y && 1 & m[l - 1]) ||
                            y == (d.s < 0 ? 8 : 7)))),
                  l < 1 || !m[0])
                )
                  n = c ? B(u.charAt(1), -A, u.charAt(0)) : u.charAt(0);
                else {
                  if (((m.length = l), c))
                    for (--o; ++m[--l] > o; )
                      ((m[l] = 0), l || (++h, (m = [1].concat(m))));
                  for (f = m.length; !m[--f]; );
                  for (p = 0, n = ""; p <= f; n += u.charAt(m[p++]));
                  n = B(n, h, u.charAt(0));
                }
                return n;
              };
            })()),
            (t = (function () {
              function e(e, t, r) {
                var n,
                  i,
                  o,
                  s,
                  a = 0,
                  u = e.length,
                  l = t % g,
                  h = (t / g) | 0;
                for (e = e.slice(); u--; )
                  ((o = e[u] % g),
                    (s = (e[u] / g) | 0),
                    (n = h * o + s * l),
                    (i = l * o + (n % g) * g + a),
                    (a = ((i / r) | 0) + ((n / g) | 0) + h * s),
                    (e[u] = i % r));
                return (a && (e = [a].concat(e)), e);
              }
              function t(e, t, r, n) {
                var i, o;
                if (r != n) o = r > n ? 1 : -1;
                else
                  for (i = o = 0; i < r; i++)
                    if (e[i] != t[i]) {
                      o = e[i] > t[i] ? 1 : -1;
                      break;
                    }
                return o;
              }
              function r(e, t, r, n) {
                for (var i = 0; r--; )
                  ((e[r] -= i),
                    (i = e[r] < t[r] ? 1 : 0),
                    (e[r] = i * n + e[r] - t[r]));
                for (; !e[0] && e.length > 1; e.splice(0, 1));
              }
              return function (n, i, o, s, a) {
                var l,
                  h,
                  d,
                  m,
                  g,
                  p,
                  A,
                  v,
                  w,
                  b,
                  M,
                  E,
                  B,
                  S,
                  C,
                  N,
                  P,
                  F = n.s == i.s ? 1 : -1,
                  O = n.c,
                  D = i.c;
                if (!O || !O[0] || !D || !D[0])
                  return new k(
                    n.s && i.s && (O ? !D || O[0] != D[0] : D)
                      ? (O && 0 == O[0]) || !D
                        ? 0 * F
                        : F / 0
                      : NaN,
                  );
                for (
                  v = new k(F),
                    w = v.c = [],
                    h = n.e - i.e,
                    F = o + h + 1,
                    a ||
                      ((a = f),
                      (h = y(n.e / c) - y(i.e / c)),
                      (F = (F / c) | 0)),
                    d = 0;
                  D[d] == (O[d] || 0);
                  d++
                );
                if ((D[d] > (O[d] || 0) && h--, F < 0)) (w.push(1), (m = !0));
                else {
                  for (
                    S = O.length,
                      N = D.length,
                      d = 0,
                      F += 2,
                      g = u(a / (D[0] + 1)),
                      g > 1 &&
                        ((D = e(D, g, a)),
                        (O = e(O, g, a)),
                        (N = D.length),
                        (S = O.length)),
                      B = N,
                      b = O.slice(0, N),
                      M = b.length;
                    M < N;
                    b[M++] = 0
                  );
                  ((P = D.slice()),
                    (P = [0].concat(P)),
                    (C = D[0]),
                    D[1] >= a / 2 && C++);
                  do {
                    if (((g = 0), (l = t(D, b, N, M)), l < 0)) {
                      if (
                        ((E = b[0]),
                        N != M && (E = E * a + (b[1] || 0)),
                        (g = u(E / C)),
                        g > 1)
                      ) {
                        (g >= a && (g = a - 1),
                          (p = e(D, g, a)),
                          (A = p.length),
                          (M = b.length));
                        while (1 == t(p, b, A, M))
                          (g--,
                            r(p, N < A ? P : D, A, a),
                            (A = p.length),
                            (l = 1));
                      } else
                        (0 == g && (l = g = 1),
                          (p = D.slice()),
                          (A = p.length));
                      if (
                        (A < M && (p = [0].concat(p)),
                        r(b, p, M, a),
                        (M = b.length),
                        -1 == l)
                      )
                        while (t(D, b, N, M) < 1)
                          (g++, r(b, N < M ? P : D, M, a), (M = b.length));
                    } else 0 === l && (g++, (b = [0]));
                    ((w[d++] = g),
                      b[0] ? (b[M++] = O[B] || 0) : ((b = [O[B]]), (M = 1)));
                  } while ((B++ < S || null != b[0]) && F--);
                  ((m = null != b[0]), w[0] || w.splice(0, 1));
                }
                if (a == f) {
                  for (d = 1, F = w[0]; F >= 10; F /= 10, d++);
                  H(v, o + (v.e = d + h * c - 1) + 1, s, m);
                } else ((v.e = h), (v.r = +m));
                return v;
              };
            })()),
            (n = (function () {
              var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                t = /^([^.]+)\.$/,
                r = /^\.([^.]+)$/,
                n = /^-?(Infinity|NaN)$/,
                i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
              return function (o, s, a, u) {
                var h,
                  f = a ? s : s.replace(i, "");
                if (n.test(f)) o.s = isNaN(f) ? null : f < 0 ? -1 : 1;
                else {
                  if (
                    !a &&
                    ((f = f.replace(e, function (e, t, r) {
                      return (
                        (h =
                          "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                        u && u != h ? e : t
                      );
                    })),
                    u && ((h = u), (f = f.replace(t, "$1").replace(r, "0.$1"))),
                    s != f)
                  )
                    return new k(f, h);
                  if (k.DEBUG)
                    throw Error(
                      l + "Not a" + (u ? " base " + u : "") + " number: " + s,
                    );
                  o.s = null;
                }
                o.c = o.e = null;
              };
            })()),
            (i.absoluteValue = i.abs =
              function () {
                var e = new k(this);
                return (e.s < 0 && (e.s = 1), e);
              }),
            (i.comparedTo = function (e, t) {
              return w(this, new k(e, t));
            }),
            (i.decimalPlaces = i.dp =
              function (e, t) {
                var r,
                  n,
                  i,
                  o = this;
                if (null != e)
                  return (
                    b(e, 0, p),
                    null == t ? (t = C) : b(t, 0, 8),
                    H(new k(o), e + o.e + 1, t)
                  );
                if (!(r = o.c)) return null;
                if (
                  ((n = ((i = r.length - 1) - y(this.e / c)) * c), (i = r[i]))
                )
                  for (; i % 10 == 0; i /= 10, n--);
                return (n < 0 && (n = 0), n);
              }),
            (i.dividedBy = i.div =
              function (e, r) {
                return t(this, new k(e, r), S, C);
              }),
            (i.dividedToIntegerBy = i.idiv =
              function (e, r) {
                return t(this, new k(e, r), 0, 1);
              }),
            (i.exponentiatedBy = i.pow =
              function (e, t) {
                var r,
                  n,
                  i,
                  s,
                  h,
                  f,
                  d,
                  m,
                  g,
                  p = this;
                if (((e = new k(e)), e.c && !e.isInteger()))
                  throw Error(l + "Exponent not an integer: " + j(e));
                if (
                  (null != t && (t = new k(t)),
                  (f = e.e > 14),
                  !p.c ||
                    !p.c[0] ||
                    (1 == p.c[0] && !p.e && 1 == p.c.length) ||
                    !e.c ||
                    !e.c[0])
                )
                  return (
                    (g = new k(Math.pow(+j(p), f ? e.s * (2 - M(e)) : +j(e)))),
                    t ? g.mod(t) : g
                  );
                if (((d = e.s < 0), t)) {
                  if (t.c ? !t.c[0] : !t.s) return new k(NaN);
                  ((n = !d && p.isInteger() && t.isInteger()),
                    n && (p = p.mod(t)));
                } else {
                  if (
                    e.e > 9 &&
                    (p.e > 0 ||
                      p.e < -1 ||
                      (0 == p.e
                        ? p.c[0] > 1 || (f && p.c[1] >= 24e7)
                        : p.c[0] < 8e13 || (f && p.c[0] <= 9999975e7)))
                  )
                    return (
                      (s = p.s < 0 && M(e) ? -0 : 0),
                      p.e > -1 && (s = 1 / s),
                      new k(d ? 1 / s : s)
                    );
                  T && (s = a(T / c + 2));
                }
                for (
                  f
                    ? ((r = new k(0.5)), d && (e.s = 1), (m = M(e)))
                    : ((i = Math.abs(+j(e))), (m = i % 2)),
                    g = new k(o);
                  ;
                ) {
                  if (m) {
                    if (((g = g.times(p)), !g.c)) break;
                    s
                      ? g.c.length > s && (g.c.length = s)
                      : n && (g = g.mod(t));
                  }
                  if (i) {
                    if (((i = u(i / 2)), 0 === i)) break;
                    m = i % 2;
                  } else if (((e = e.times(r)), H(e, e.e + 1, 1), e.e > 14))
                    m = M(e);
                  else {
                    if (((i = +j(e)), 0 === i)) break;
                    m = i % 2;
                  }
                  ((p = p.times(p)),
                    s
                      ? p.c && p.c.length > s && (p.c.length = s)
                      : n && (p = p.mod(t)));
                }
                return n
                  ? g
                  : (d && (g = o.div(g)), t ? g.mod(t) : s ? H(g, T, C, h) : g);
              }),
            (i.integerValue = function (e) {
              var t = new k(this);
              return (null == e ? (e = C) : b(e, 0, 8), H(t, t.e + 1, e));
            }),
            (i.isEqualTo = i.eq =
              function (e, t) {
                return 0 === w(this, new k(e, t));
              }),
            (i.isFinite = function () {
              return !!this.c;
            }),
            (i.isGreaterThan = i.gt =
              function (e, t) {
                return w(this, new k(e, t)) > 0;
              }),
            (i.isGreaterThanOrEqualTo = i.gte =
              function (e, t) {
                return 1 === (t = w(this, new k(e, t))) || 0 === t;
              }),
            (i.isInteger = function () {
              return !!this.c && y(this.e / c) > this.c.length - 2;
            }),
            (i.isLessThan = i.lt =
              function (e, t) {
                return w(this, new k(e, t)) < 0;
              }),
            (i.isLessThanOrEqualTo = i.lte =
              function (e, t) {
                return -1 === (t = w(this, new k(e, t))) || 0 === t;
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
                o,
                s = this,
                a = s.s;
              if (((e = new k(e, t)), (t = e.s), !a || !t)) return new k(NaN);
              if (a != t) return ((e.s = -t), s.plus(e));
              var u = s.e / c,
                l = e.e / c,
                h = s.c,
                d = e.c;
              if (!u || !l) {
                if (!h || !d) return h ? ((e.s = -t), e) : new k(d ? s : NaN);
                if (!h[0] || !d[0])
                  return d[0]
                    ? ((e.s = -t), e)
                    : new k(h[0] ? s : 3 == C ? -0 : 0);
              }
              if (((u = y(u)), (l = y(l)), (h = h.slice()), (a = u - l))) {
                for (
                  (o = a < 0) ? ((a = -a), (i = h)) : ((l = u), (i = d)),
                    i.reverse(),
                    t = a;
                  t--;
                  i.push(0)
                );
                i.reverse();
              } else
                for (
                  n = (o = (a = h.length) < (t = d.length)) ? a : t, a = t = 0;
                  t < n;
                  t++
                )
                  if (h[t] != d[t]) {
                    o = h[t] < d[t];
                    break;
                  }
              if (
                (o && ((i = h), (h = d), (d = i), (e.s = -e.s)),
                (t = (n = d.length) - (r = h.length)),
                t > 0)
              )
                for (; t--; h[r++] = 0);
              for (t = f - 1; n > a; ) {
                if (h[--n] < d[n]) {
                  for (r = n; r && !h[--r]; h[r] = t);
                  (--h[r], (h[n] += f));
                }
                h[n] -= d[n];
              }
              for (; 0 == h[0]; h.splice(0, 1), --l);
              return h[0]
                ? G(e, h, l)
                : ((e.s = 3 == C ? -1 : 1), (e.c = [(e.e = 0)]), e);
            }),
            (i.modulo = i.mod =
              function (e, r) {
                var n,
                  i,
                  o = this;
                return (
                  (e = new k(e, r)),
                  !o.c || !e.s || (e.c && !e.c[0])
                    ? new k(NaN)
                    : !e.c || (o.c && !o.c[0])
                      ? new k(o)
                      : (9 == R
                          ? ((i = e.s),
                            (e.s = 1),
                            (n = t(o, e, 0, 3)),
                            (e.s = i),
                            (n.s *= i))
                          : (n = t(o, e, 0, R)),
                        (e = o.minus(n.times(e))),
                        e.c[0] || 1 != R || (e.s = o.s),
                        e)
                );
              }),
            (i.multipliedBy = i.times =
              function (e, t) {
                var r,
                  n,
                  i,
                  o,
                  s,
                  a,
                  u,
                  l,
                  h,
                  d,
                  m,
                  p,
                  A,
                  v,
                  w,
                  b = this,
                  M = b.c,
                  E = (e = new k(e, t)).c;
                if (!M || !E || !M[0] || !E[0])
                  return (
                    !b.s || !e.s || (M && !M[0] && !E) || (E && !E[0] && !M)
                      ? (e.c = e.e = e.s = null)
                      : ((e.s *= b.s),
                        M && E ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null)),
                    e
                  );
                for (
                  n = y(b.e / c) + y(e.e / c),
                    e.s *= b.s,
                    u = M.length,
                    d = E.length,
                    u < d &&
                      ((A = M), (M = E), (E = A), (i = u), (u = d), (d = i)),
                    i = u + d,
                    A = [];
                  i--;
                  A.push(0)
                );
                for (v = f, w = g, i = d; --i >= 0; ) {
                  for (
                    r = 0, m = E[i] % w, p = (E[i] / w) | 0, s = u, o = i + s;
                    o > i;
                  )
                    ((l = M[--s] % w),
                      (h = (M[s] / w) | 0),
                      (a = p * l + h * m),
                      (l = m * l + (a % w) * w + A[o] + r),
                      (r = ((l / v) | 0) + ((a / w) | 0) + p * h),
                      (A[o--] = l % v));
                  A[o] = r;
                }
                return (r ? ++n : A.splice(0, 1), G(e, A, n));
              }),
            (i.negated = function () {
              var e = new k(this);
              return ((e.s = -e.s || null), e);
            }),
            (i.plus = function (e, t) {
              var r,
                n = this,
                i = n.s;
              if (((e = new k(e, t)), (t = e.s), !i || !t)) return new k(NaN);
              if (i != t) return ((e.s = -t), n.minus(e));
              var o = n.e / c,
                s = e.e / c,
                a = n.c,
                u = e.c;
              if (!o || !s) {
                if (!a || !u) return new k(i / 0);
                if (!a[0] || !u[0]) return u[0] ? e : new k(a[0] ? n : 0 * i);
              }
              if (((o = y(o)), (s = y(s)), (a = a.slice()), (i = o - s))) {
                for (
                  i > 0 ? ((s = o), (r = u)) : ((i = -i), (r = a)), r.reverse();
                  i--;
                  r.push(0)
                );
                r.reverse();
              }
              for (
                i = a.length,
                  t = u.length,
                  i - t < 0 && ((r = u), (u = a), (a = r), (t = i)),
                  i = 0;
                t;
              )
                ((i = ((a[--t] = a[t] + u[t] + i) / f) | 0),
                  (a[t] = f === a[t] ? 0 : a[t] % f));
              return (i && ((a = [i].concat(a)), ++s), G(e, a, s));
            }),
            (i.precision = i.sd =
              function (e, t) {
                var r,
                  n,
                  i,
                  o = this;
                if (null != e && e !== !!e)
                  return (
                    b(e, 1, p),
                    null == t ? (t = C) : b(t, 0, 8),
                    H(new k(o), e, t)
                  );
                if (!(r = o.c)) return null;
                if (((i = r.length - 1), (n = i * c + 1), (i = r[i]))) {
                  for (; i % 10 == 0; i /= 10, n--);
                  for (i = r[0]; i >= 10; i /= 10, n++);
                }
                return (e && o.e + 1 > n && (n = o.e + 1), n);
              }),
            (i.shiftedBy = function (e) {
              return (b(e, -d, d), this.times("1e" + e));
            }),
            (i.squareRoot = i.sqrt =
              function () {
                var e,
                  r,
                  n,
                  i,
                  o,
                  s = this,
                  a = s.c,
                  u = s.s,
                  l = s.e,
                  h = S + 4,
                  f = new k("0.5");
                if (1 !== u || !a || !a[0])
                  return new k(
                    !u || (u < 0 && (!a || a[0])) ? NaN : a ? s : 1 / 0,
                  );
                if (
                  ((u = Math.sqrt(+j(s))),
                  0 == u || u == 1 / 0
                    ? ((r = v(a)),
                      (r.length + l) % 2 == 0 && (r += "0"),
                      (u = Math.sqrt(+r)),
                      (l = y((l + 1) / 2) - (l < 0 || l % 2)),
                      u == 1 / 0
                        ? (r = "5e" + l)
                        : ((r = u.toExponential()),
                          (r = r.slice(0, r.indexOf("e") + 1) + l)),
                      (n = new k(r)))
                    : (n = new k(u + "")),
                  n.c[0])
                )
                  for (l = n.e, u = l + h, u < 3 && (u = 0); ; )
                    if (
                      ((o = n),
                      (n = f.times(o.plus(t(s, o, h, 1)))),
                      v(o.c).slice(0, u) === (r = v(n.c)).slice(0, u))
                    ) {
                      if (
                        (n.e < l && --u,
                        (r = r.slice(u - 3, u + 1)),
                        "9999" != r && (i || "4999" != r))
                      ) {
                        (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                          (H(n, n.e + S + 2, 1), (e = !n.times(n).eq(s)));
                        break;
                      }
                      if (!i && (H(o, o.e + S + 2, 0), o.times(o).eq(s))) {
                        n = o;
                        break;
                      }
                      ((h += 4), (u += 4), (i = 1));
                    }
                return H(n, n.e + S + 1, C, e);
              }),
            (i.toExponential = function (e, t) {
              return (null != e && (b(e, 0, p), e++), L(this, e, t, 1));
            }),
            (i.toFixed = function (e, t) {
              return (
                null != e && (b(e, 0, p), (e = e + this.e + 1)),
                L(this, e, t)
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
                    : (r = x);
              else if ("object" != typeof r)
                throw Error(l + "Argument not an object: " + r);
              if (((n = i.toFixed(e, t)), i.c)) {
                var o,
                  s = n.split("."),
                  a = +r.groupSize,
                  u = +r.secondaryGroupSize,
                  h = r.groupSeparator || "",
                  f = s[0],
                  c = s[1],
                  d = i.s < 0,
                  m = d ? f.slice(1) : f,
                  g = m.length;
                if (
                  (u && ((o = a), (a = u), (u = o), (g -= o)), a > 0 && g > 0)
                ) {
                  for (o = g % a || a, f = m.substr(0, o); o < g; o += a)
                    f += h + m.substr(o, a);
                  (u > 0 && (f += h + m.slice(o)), d && (f = "-" + f));
                }
                n = c
                  ? f +
                    (r.decimalSeparator || "") +
                    ((u = +r.fractionGroupSize)
                      ? c.replace(
                          new RegExp("\\d{" + u + "}\\B", "g"),
                          "$&" + (r.fractionGroupSeparator || ""),
                        )
                      : c)
                  : f;
              }
              return (r.prefix || "") + n + (r.suffix || "");
            }),
            (i.toFraction = function (e) {
              var r,
                n,
                i,
                s,
                a,
                u,
                h,
                f,
                d,
                g,
                p,
                A,
                y = this,
                w = y.c;
              if (
                null != e &&
                ((h = new k(e)),
                (!h.isInteger() && (h.c || 1 !== h.s)) || h.lt(o))
              )
                throw Error(
                  l +
                    "Argument " +
                    (h.isInteger() ? "out of range: " : "not an integer: ") +
                    j(h),
                );
              if (!w) return new k(y);
              for (
                r = new k(o),
                  d = n = new k(o),
                  i = f = new k(o),
                  A = v(w),
                  a = r.e = A.length - y.e - 1,
                  r.c[0] = m[(u = a % c) < 0 ? c + u : u],
                  e = !e || h.comparedTo(r) > 0 ? (a > 0 ? r : d) : h,
                  u = O,
                  O = 1 / 0,
                  h = new k(A),
                  f.c[0] = 0;
                ;
              ) {
                if (
                  ((g = t(h, r, 0, 1)),
                  (s = n.plus(g.times(i))),
                  1 == s.comparedTo(e))
                )
                  break;
                ((n = i),
                  (i = s),
                  (d = f.plus(g.times((s = d)))),
                  (f = s),
                  (r = h.minus(g.times((s = r)))),
                  (h = s));
              }
              return (
                (s = t(e.minus(n), i, 0, 1)),
                (f = f.plus(s.times(d))),
                (n = n.plus(s.times(i))),
                (f.s = d.s = y.s),
                (a *= 2),
                (p =
                  t(d, i, a, C)
                    .minus(y)
                    .abs()
                    .comparedTo(t(f, n, a, C).minus(y).abs()) < 1
                    ? [d, i]
                    : [f, n]),
                (O = u),
                p
              );
            }),
            (i.toNumber = function () {
              return +j(this);
            }),
            (i.toPrecision = function (e, t) {
              return (null != e && b(e, 1, p), L(this, e, t, 2));
            }),
            (i.toString = function (e) {
              var t,
                n = this,
                i = n.s,
                o = n.e;
              return (
                null === o
                  ? i
                    ? ((t = "Infinity"), i < 0 && (t = "-" + t))
                    : (t = "NaN")
                  : (null == e
                      ? (t =
                          o <= N || o >= P ? E(v(n.c), o) : B(v(n.c), o, "0"))
                      : 10 === e && U
                        ? ((n = H(new k(n), S + o + 1, C)),
                          (t = B(v(n.c), n.e, "0")))
                        : (b(e, 2, I.length, "Base"),
                          (t = r(B(v(n.c), o, "0"), 10, e, i, !0))),
                    i < 0 && n.c[0] && (t = "-" + t)),
                t
              );
            }),
            (i.valueOf = i.toJSON =
              function () {
                return j(this);
              }),
            (i._isBigNumber = !0),
            null != e && k.set(e),
            k
          );
        }
        function y(e) {
          var t = 0 | e;
          return e > 0 || e === t ? t : t - 1;
        }
        function v(e) {
          for (var t, r, n = 1, i = e.length, o = e[0] + ""; n < i; ) {
            for (t = e[n++] + "", r = c - t.length; r--; t = "0" + t);
            o += t;
          }
          for (i = o.length; 48 === o.charCodeAt(--i); );
          return o.slice(0, i + 1 || 1);
        }
        function w(e, t) {
          var r,
            n,
            i = e.c,
            o = t.c,
            s = e.s,
            a = t.s,
            u = e.e,
            l = t.e;
          if (!s || !a) return null;
          if (((r = i && !i[0]), (n = o && !o[0]), r || n))
            return r ? (n ? 0 : -a) : s;
          if (s != a) return s;
          if (((r = s < 0), (n = u == l), !i || !o))
            return n ? 0 : !i ^ r ? 1 : -1;
          if (!n) return (u > l) ^ r ? 1 : -1;
          for (a = (u = i.length) < (l = o.length) ? u : l, s = 0; s < a; s++)
            if (i[s] != o[s]) return (i[s] > o[s]) ^ r ? 1 : -1;
          return u == l ? 0 : (u > l) ^ r ? 1 : -1;
        }
        function b(e, t, r, n) {
          if (e < t || e > r || e !== u(e))
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
        function M(e) {
          var t = e.c.length - 1;
          return y(e.e / c) == t && e.c[t] % 2 != 0;
        }
        function E(e, t) {
          return (
            (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
            (t < 0 ? "e" : "e+") +
            t
          );
        }
        function B(e, t, r) {
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
        ((o = A()),
          (o["default"] = o.BigNumber = o),
          (n = function () {
            return o;
          }.call(t, r, t, e)),
          void 0 === n || (e.exports = n));
      })();
    },
    141: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.keccak256 = s));
      var i = n(r(53)),
        o = r(57);
      function s(e) {
        return "0x" + i.default.keccak_256((0, o.arrayify)(e));
      }
    },
    1449: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Wordlist", {
          enumerable: !0,
          get: function () {
            return n.Wordlist;
          },
        }),
        Object.defineProperty(t, "logger", {
          enumerable: !0,
          get: function () {
            return n.logger;
          },
        }),
        Object.defineProperty(t, "wordlists", {
          enumerable: !0,
          get: function () {
            return i.wordlists;
          },
        }));
      var n = r(522),
        i = r(1477);
    },
    1450: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "_TypedDataEncoder", {
          enumerable: !0,
          get: function () {
            return s.TypedDataEncoder;
          },
        }),
        Object.defineProperty(t, "dnsEncode", {
          enumerable: !0,
          get: function () {
            return i.dnsEncode;
          },
        }),
        Object.defineProperty(t, "ensNormalize", {
          enumerable: !0,
          get: function () {
            return i.ensNormalize;
          },
        }),
        Object.defineProperty(t, "hashMessage", {
          enumerable: !0,
          get: function () {
            return o.hashMessage;
          },
        }),
        Object.defineProperty(t, "id", {
          enumerable: !0,
          get: function () {
            return n.id;
          },
        }),
        Object.defineProperty(t, "isValidName", {
          enumerable: !0,
          get: function () {
            return i.isValidName;
          },
        }),
        Object.defineProperty(t, "messagePrefix", {
          enumerable: !0,
          get: function () {
            return o.messagePrefix;
          },
        }),
        Object.defineProperty(t, "namehash", {
          enumerable: !0,
          get: function () {
            return i.namehash;
          },
        }));
      var n = r(523),
        i = r(1464),
        o = r(1469),
        s = r(1470);
    },
    1451: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "logger/5.8.0";
    },
    1452: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "bytes/5.8.0";
    },
    1453: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatBytes32String = s),
        (t.parseBytes32String = a));
      var n = r(1454),
        i = r(57),
        o = r(279);
      function s(e) {
        const t = (0, o.toUtf8Bytes)(e);
        if (t.length > 31)
          throw new Error("bytes32 string must be less than 32 bytes");
        return (0, i.hexlify)((0, i.concat)([t, n.HashZero]).slice(0, 32));
      }
      function a(e) {
        const t = (0, i.arrayify)(e);
        if (32 !== t.length)
          throw new Error("invalid bytes32 - not 32 bytes long");
        if (0 !== t[31])
          throw new Error("invalid bytes32 string - no null terminator");
        let r = 31;
        while (0 === t[r - 1]) r--;
        return (0, o.toUtf8String)(t.slice(0, r));
      }
    },
    1454: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AddressZero", {
          enumerable: !0,
          get: function () {
            return n.AddressZero;
          },
        }),
        Object.defineProperty(t, "EtherSymbol", {
          enumerable: !0,
          get: function () {
            return s.EtherSymbol;
          },
        }),
        Object.defineProperty(t, "HashZero", {
          enumerable: !0,
          get: function () {
            return o.HashZero;
          },
        }),
        Object.defineProperty(t, "MaxInt256", {
          enumerable: !0,
          get: function () {
            return i.MaxInt256;
          },
        }),
        Object.defineProperty(t, "MaxUint256", {
          enumerable: !0,
          get: function () {
            return i.MaxUint256;
          },
        }),
        Object.defineProperty(t, "MinInt256", {
          enumerable: !0,
          get: function () {
            return i.MinInt256;
          },
        }),
        Object.defineProperty(t, "NegativeOne", {
          enumerable: !0,
          get: function () {
            return i.NegativeOne;
          },
        }),
        Object.defineProperty(t, "One", {
          enumerable: !0,
          get: function () {
            return i.One;
          },
        }),
        Object.defineProperty(t, "Two", {
          enumerable: !0,
          get: function () {
            return i.Two;
          },
        }),
        Object.defineProperty(t, "WeiPerEther", {
          enumerable: !0,
          get: function () {
            return i.WeiPerEther;
          },
        }),
        Object.defineProperty(t, "Zero", {
          enumerable: !0,
          get: function () {
            return i.Zero;
          },
        }));
      var n = r(1455),
        i = r(1456),
        o = r(1460),
        s = r(1461);
    },
    1455: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AddressZero = void 0));
      t.AddressZero = "0x0000000000000000000000000000000000000000";
    },
    1456: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Zero =
          t.WeiPerEther =
          t.Two =
          t.One =
          t.NegativeOne =
          t.MinInt256 =
          t.MaxUint256 =
          t.MaxInt256 =
            void 0));
      var n = r(278);
      ((t.NegativeOne = n.BigNumber.from(-1)),
        (t.Zero = n.BigNumber.from(0)),
        (t.One = n.BigNumber.from(1)),
        (t.Two = n.BigNumber.from(2)),
        (t.WeiPerEther = n.BigNumber.from("1000000000000000000")),
        (t.MaxUint256 = n.BigNumber.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )),
        (t.MinInt256 = n.BigNumber.from(
          "-0x8000000000000000000000000000000000000000000000000000000000000000",
        )),
        (t.MaxInt256 = n.BigNumber.from(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )));
    },
    1457: function (e, t, r) {
      (function (e) {
        (function (e, t) {
          "use strict";
          function n(e, t) {
            if (!e) throw new Error(t || "Assertion failed");
          }
          function i(e, t) {
            e.super_ = t;
            var r = function () {};
            ((r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e));
          }
          function o(e, t, r) {
            if (o.isBN(e)) return e;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== e &&
                (("le" !== t && "be" !== t) || ((r = t), (t = 10)),
                this._init(e || 0, t || 10, r || "be")));
          }
          var s;
          ("object" === typeof e ? (e.exports = o) : (t.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : r(1458).Buffer;
          } catch (O) {}
          function a(e, t) {
            var r = e.charCodeAt(t);
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
                ? r - 55
                : r >= 97 && r <= 102
                  ? r - 87
                  : void n(!1, "Invalid character in " + e);
          }
          function u(e, t, r) {
            var n = a(e, r);
            return (r - 1 >= t && (n |= a(e, r - 1) << 4), n);
          }
          function l(e, t, r, i) {
            for (
              var o = 0, s = 0, a = Math.min(e.length, r), u = t;
              u < a;
              u++
            ) {
              var l = e.charCodeAt(u) - 48;
              ((o *= i),
                (s = l >= 49 ? l - 49 + 10 : l >= 17 ? l - 17 + 10 : l),
                n(l >= 0 && s < i, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function h(e, t) {
            ((e.words = t.words),
              (e.length = t.length),
              (e.negative = t.negative),
              (e.red = t.red));
          }
          if (
            ((o.isBN = function (e) {
              return (
                e instanceof o ||
                (null !== e &&
                  "object" === typeof e &&
                  e.constructor.wordSize === o.wordSize &&
                  Array.isArray(e.words))
              );
            }),
            (o.max = function (e, t) {
              return e.cmp(t) > 0 ? e : t;
            }),
            (o.min = function (e, t) {
              return e.cmp(t) < 0 ? e : t;
            }),
            (o.prototype._init = function (e, t, r) {
              if ("number" === typeof e) return this._initNumber(e, t, r);
              if ("object" === typeof e) return this._initArray(e, t, r);
              ("hex" === t && (t = 16),
                n(t === (0 | t) && t >= 2 && t <= 36),
                (e = e.toString().replace(/\s+/g, "")));
              var i = 0;
              ("-" === e[0] && (i++, (this.negative = 1)),
                i < e.length &&
                  (16 === t
                    ? this._parseHex(e, i, r)
                    : (this._parseBase(e, t, i),
                      "le" === r && this._initArray(this.toArray(), t, r))));
            }),
            (o.prototype._initNumber = function (e, t, r) {
              (e < 0 && ((this.negative = 1), (e = -e)),
                e < 67108864
                  ? ((this.words = [67108863 & e]), (this.length = 1))
                  : e < 4503599627370496
                    ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                      (this.length = 2))
                    : (n(e < 9007199254740992),
                      (this.words = [
                        67108863 & e,
                        (e / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === r && this._initArray(this.toArray(), t, r));
            }),
            (o.prototype._initArray = function (e, t, r) {
              if ((n("number" === typeof e.length), e.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(e.length / 3)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var o,
                s,
                a = 0;
              if ("be" === r)
                for (i = e.length - 1, o = 0; i >= 0; i -= 3)
                  ((s = e[i] | (e[i - 1] << 8) | (e[i - 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), o++));
              else if ("le" === r)
                for (i = 0, o = 0; i < e.length; i += 3)
                  ((s = e[i] | (e[i + 1] << 8) | (e[i + 2] << 16)),
                    (this.words[o] |= (s << a) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (e, t, r) {
              ((this.length = Math.ceil((e.length - t) / 6)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var i,
                o = 0,
                s = 0;
              if ("be" === r)
                for (n = e.length - 1; n >= t; n -= 2)
                  ((i = u(e, t, n) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                      : (o += 8));
              else {
                var a = e.length - t;
                for (n = a % 2 === 0 ? t + 1 : t; n < e.length; n += 2)
                  ((i = u(e, t, n) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (e, t, r) {
              ((this.words = [0]), (this.length = 1));
              for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
              (n--, (i = (i / t) | 0));
              for (
                var o = e.length - r,
                  s = o % n,
                  a = Math.min(o, o - s) + r,
                  u = 0,
                  h = r;
                h < a;
                h += n
              )
                ((u = l(e, h, h + n, t)),
                  this.imuln(i),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              if (0 !== s) {
                var f = 1;
                for (u = l(e, h, e.length, t), h = 0; h < s; h++) f *= t;
                (this.imuln(f),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              }
              this._strip();
            }),
            (o.prototype.copy = function (e) {
              e.words = new Array(this.length);
              for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
              ((e.length = this.length),
                (e.negative = this.negative),
                (e.red = this.red));
            }),
            (o.prototype._move = function (e) {
              h(e, this);
            }),
            (o.prototype.clone = function () {
              var e = new o(null);
              return (this.copy(e), e);
            }),
            (o.prototype._expand = function (e) {
              while (this.length < e) this.words[this.length++] = 0;
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
            } catch (O) {
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
          ((o.prototype.toString = function (e, t) {
            var r;
            if (((e = e || 10), (t = 0 | t || 1), 16 === e || "hex" === e)) {
              r = "";
              for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                var a = this.words[s],
                  u = (16777215 & ((a << i) | o)).toString(16);
                ((o = (a >>> (24 - i)) & 16777215),
                  (i += 2),
                  i >= 26 && ((i -= 26), s--),
                  (r =
                    0 !== o || s !== this.length - 1
                      ? c[6 - u.length] + u + r
                      : u + r));
              }
              0 !== o && (r = o.toString(16) + r);
              while (r.length % t !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (e === (0 | e) && e >= 2 && e <= 36) {
              var l = d[e],
                h = m[e];
              r = "";
              var f = this.clone();
              f.negative = 0;
              while (!f.isZero()) {
                var g = f.modrn(h).toString(e);
                ((f = f.idivn(h)),
                  (r = f.isZero() ? g + r : c[l - g.length] + g + r));
              }
              this.isZero() && (r = "0" + r);
              while (r.length % t !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            n(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var e = this.words[0];
              return (
                2 === this.length
                  ? (e += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (e += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      n(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -e : e
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (o.prototype.toBuffer = function (e, t) {
                return this.toArrayLike(s, e, t);
              }),
            (o.prototype.toArray = function (e, t) {
              return this.toArrayLike(Array, e, t);
            }));
          var g = function (e, t) {
            return e.allocUnsafe ? e.allocUnsafe(t) : new e(t);
          };
          function p(e) {
            for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
              var n = (r / 26) | 0,
                i = r % 26;
              t[r] = (e.words[n] >>> i) & 1;
            }
            return t;
          }
          function A(e, t, r) {
            r.negative = t.negative ^ e.negative;
            var n = (e.length + t.length) | 0;
            ((r.length = n), (n = (n - 1) | 0));
            var i = 0 | e.words[0],
              o = 0 | t.words[0],
              s = i * o,
              a = 67108863 & s,
              u = (s / 67108864) | 0;
            r.words[0] = a;
            for (var l = 1; l < n; l++) {
              for (
                var h = u >>> 26,
                  f = 67108863 & u,
                  c = Math.min(l, t.length - 1),
                  d = Math.max(0, l - e.length + 1);
                d <= c;
                d++
              ) {
                var m = (l - d) | 0;
                ((i = 0 | e.words[m]),
                  (o = 0 | t.words[d]),
                  (s = i * o + f),
                  (h += (s / 67108864) | 0),
                  (f = 67108863 & s));
              }
              ((r.words[l] = 0 | f), (u = 0 | h));
            }
            return (0 !== u ? (r.words[l] = 0 | u) : r.length--, r._strip());
          }
          ((o.prototype.toArrayLike = function (e, t, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            (n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0"));
            var s = g(e, o),
              a = "le" === t ? "LE" : "BE";
            return (this["_toArrayLike" + a](s, i), s);
          }),
            (o.prototype._toArrayLikeLE = function (e, t) {
              for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                var s = (this.words[i] << o) | n;
                ((e[r++] = 255 & s),
                  r < e.length && (e[r++] = (s >> 8) & 255),
                  r < e.length && (e[r++] = (s >> 16) & 255),
                  6 === o
                    ? (r < e.length && (e[r++] = (s >> 24) & 255),
                      (n = 0),
                      (o = 0))
                    : ((n = s >>> 24), (o += 2)));
              }
              if (r < e.length) {
                e[r++] = n;
                while (r < e.length) e[r++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (e, t) {
              for (
                var r = e.length - 1, n = 0, i = 0, o = 0;
                i < this.length;
                i++
              ) {
                var s = (this.words[i] << o) | n;
                ((e[r--] = 255 & s),
                  r >= 0 && (e[r--] = (s >> 8) & 255),
                  r >= 0 && (e[r--] = (s >> 16) & 255),
                  6 === o
                    ? (r >= 0 && (e[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                    : ((n = s >>> 24), (o += 2)));
              }
              if (r >= 0) {
                e[r--] = n;
                while (r >= 0) e[r--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (e) {
                  return 32 - Math.clz32(e);
                })
              : (o.prototype._countBits = function (e) {
                  var t = e,
                    r = 0;
                  return (
                    t >= 4096 && ((r += 13), (t >>>= 13)),
                    t >= 64 && ((r += 7), (t >>>= 7)),
                    t >= 8 && ((r += 4), (t >>>= 4)),
                    t >= 2 && ((r += 2), (t >>>= 2)),
                    r + t
                  );
                }),
            (o.prototype._zeroBits = function (e) {
              if (0 === e) return 26;
              var t = e,
                r = 0;
              return (
                0 === (8191 & t) && ((r += 13), (t >>>= 13)),
                0 === (127 & t) && ((r += 7), (t >>>= 7)),
                0 === (15 & t) && ((r += 4), (t >>>= 4)),
                0 === (3 & t) && ((r += 2), (t >>>= 2)),
                0 === (1 & t) && r++,
                r
              );
            }),
            (o.prototype.bitLength = function () {
              var e = this.words[this.length - 1],
                t = this._countBits(e);
              return 26 * (this.length - 1) + t;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var e = 0, t = 0; t < this.length; t++) {
                var r = this._zeroBits(this.words[t]);
                if (((e += r), 26 !== r)) break;
              }
              return e;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (e) {
              return 0 !== this.negative
                ? this.abs().inotn(e).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (e) {
              return this.testn(e - 1)
                ? this.notn(e).iaddn(1).ineg()
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
            (o.prototype.iuor = function (e) {
              while (this.length < e.length) this.words[this.length++] = 0;
              for (var t = 0; t < e.length; t++)
                this.words[t] = this.words[t] | e.words[t];
              return this._strip();
            }),
            (o.prototype.ior = function (e) {
              return (n(0 === (this.negative | e.negative)), this.iuor(e));
            }),
            (o.prototype.or = function (e) {
              return this.length > e.length
                ? this.clone().ior(e)
                : e.clone().ior(this);
            }),
            (o.prototype.uor = function (e) {
              return this.length > e.length
                ? this.clone().iuor(e)
                : e.clone().iuor(this);
            }),
            (o.prototype.iuand = function (e) {
              var t;
              t = this.length > e.length ? e : this;
              for (var r = 0; r < t.length; r++)
                this.words[r] = this.words[r] & e.words[r];
              return ((this.length = t.length), this._strip());
            }),
            (o.prototype.iand = function (e) {
              return (n(0 === (this.negative | e.negative)), this.iuand(e));
            }),
            (o.prototype.and = function (e) {
              return this.length > e.length
                ? this.clone().iand(e)
                : e.clone().iand(this);
            }),
            (o.prototype.uand = function (e) {
              return this.length > e.length
                ? this.clone().iuand(e)
                : e.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (e) {
              var t, r;
              this.length > e.length
                ? ((t = this), (r = e))
                : ((t = e), (r = this));
              for (var n = 0; n < r.length; n++)
                this.words[n] = t.words[n] ^ r.words[n];
              if (this !== t)
                for (; n < t.length; n++) this.words[n] = t.words[n];
              return ((this.length = t.length), this._strip());
            }),
            (o.prototype.ixor = function (e) {
              return (n(0 === (this.negative | e.negative)), this.iuxor(e));
            }),
            (o.prototype.xor = function (e) {
              return this.length > e.length
                ? this.clone().ixor(e)
                : e.clone().ixor(this);
            }),
            (o.prototype.uxor = function (e) {
              return this.length > e.length
                ? this.clone().iuxor(e)
                : e.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (e) {
              n("number" === typeof e && e >= 0);
              var t = 0 | Math.ceil(e / 26),
                r = e % 26;
              (this._expand(t), r > 0 && t--);
              for (var i = 0; i < t; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                r > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (e) {
              return this.clone().inotn(e);
            }),
            (o.prototype.setn = function (e, t) {
              n("number" === typeof e && e >= 0);
              var r = (e / 26) | 0,
                i = e % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = t
                  ? this.words[r] | (1 << i)
                  : this.words[r] & ~(1 << i)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (e) {
              var t, r, n;
              if (0 !== this.negative && 0 === e.negative)
                return (
                  (this.negative = 0),
                  (t = this.isub(e)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== e.negative)
                return (
                  (e.negative = 0),
                  (t = this.isub(e)),
                  (e.negative = 1),
                  t._normSign()
                );
              this.length > e.length
                ? ((r = this), (n = e))
                : ((r = e), (n = this));
              for (var i = 0, o = 0; o < n.length; o++)
                ((t = (0 | r.words[o]) + (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & t),
                  (i = t >>> 26));
              for (; 0 !== i && o < r.length; o++)
                ((t = (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & t),
                  (i = t >>> 26));
              if (((this.length = r.length), 0 !== i))
                ((this.words[this.length] = i), this.length++);
              else if (r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return this;
            }),
            (o.prototype.add = function (e) {
              var t;
              return 0 !== e.negative && 0 === this.negative
                ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
                : 0 === e.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (t = e.sub(this)),
                    (this.negative = 1),
                    t)
                  : this.length > e.length
                    ? this.clone().iadd(e)
                    : e.clone().iadd(this);
            }),
            (o.prototype.isub = function (e) {
              if (0 !== e.negative) {
                e.negative = 0;
                var t = this.iadd(e);
                return ((e.negative = 1), t._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(e),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                n,
                i = this.cmp(e);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((r = this), (n = e)) : ((r = e), (n = this));
              for (var o = 0, s = 0; s < n.length; s++)
                ((t = (0 | r.words[s]) - (0 | n.words[s]) + o),
                  (o = t >> 26),
                  (this.words[s] = 67108863 & t));
              for (; 0 !== o && s < r.length; s++)
                ((t = (0 | r.words[s]) + o),
                  (o = t >> 26),
                  (this.words[s] = 67108863 & t));
              if (0 === o && s < r.length && r !== this)
                for (; s < r.length; s++) this.words[s] = r.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                r !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (e) {
              return this.clone().isub(e);
            }));
          var y = function (e, t, r) {
            var n,
              i,
              o,
              s = e.words,
              a = t.words,
              u = r.words,
              l = 0,
              h = 0 | s[0],
              f = 8191 & h,
              c = h >>> 13,
              d = 0 | s[1],
              m = 8191 & d,
              g = d >>> 13,
              p = 0 | s[2],
              A = 8191 & p,
              y = p >>> 13,
              v = 0 | s[3],
              w = 8191 & v,
              b = v >>> 13,
              M = 0 | s[4],
              E = 8191 & M,
              B = M >>> 13,
              S = 0 | s[5],
              C = 8191 & S,
              N = S >>> 13,
              P = 0 | s[6],
              F = 8191 & P,
              O = P >>> 13,
              D = 0 | s[7],
              R = 8191 & D,
              T = D >>> 13,
              x = 0 | s[8],
              I = 8191 & x,
              U = x >>> 13,
              k = 0 | s[9],
              L = 8191 & k,
              _ = k >>> 13,
              G = 0 | a[0],
              H = 8191 & G,
              j = G >>> 13,
              Q = 0 | a[1],
              W = 8191 & Q,
              z = Q >>> 13,
              J = 0 | a[2],
              K = 8191 & J,
              Y = J >>> 13,
              q = 0 | a[3],
              V = 8191 & q,
              Z = q >>> 13,
              X = 0 | a[4],
              $ = 8191 & X,
              ee = X >>> 13,
              te = 0 | a[5],
              re = 8191 & te,
              ne = te >>> 13,
              ie = 0 | a[6],
              oe = 8191 & ie,
              se = ie >>> 13,
              ae = 0 | a[7],
              ue = 8191 & ae,
              le = ae >>> 13,
              he = 0 | a[8],
              fe = 8191 & he,
              ce = he >>> 13,
              de = 0 | a[9],
              me = 8191 & de,
              ge = de >>> 13;
            ((r.negative = e.negative ^ t.negative),
              (r.length = 19),
              (n = Math.imul(f, H)),
              (i = Math.imul(f, j)),
              (i = (i + Math.imul(c, H)) | 0),
              (o = Math.imul(c, j)));
            var pe = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (pe >>> 26)) | 0),
              (pe &= 67108863),
              (n = Math.imul(m, H)),
              (i = Math.imul(m, j)),
              (i = (i + Math.imul(g, H)) | 0),
              (o = Math.imul(g, j)),
              (n = (n + Math.imul(f, W)) | 0),
              (i = (i + Math.imul(f, z)) | 0),
              (i = (i + Math.imul(c, W)) | 0),
              (o = (o + Math.imul(c, z)) | 0));
            var Ae = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Ae >>> 26)) | 0),
              (Ae &= 67108863),
              (n = Math.imul(A, H)),
              (i = Math.imul(A, j)),
              (i = (i + Math.imul(y, H)) | 0),
              (o = Math.imul(y, j)),
              (n = (n + Math.imul(m, W)) | 0),
              (i = (i + Math.imul(m, z)) | 0),
              (i = (i + Math.imul(g, W)) | 0),
              (o = (o + Math.imul(g, z)) | 0),
              (n = (n + Math.imul(f, K)) | 0),
              (i = (i + Math.imul(f, Y)) | 0),
              (i = (i + Math.imul(c, K)) | 0),
              (o = (o + Math.imul(c, Y)) | 0));
            var ye = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (ye >>> 26)) | 0),
              (ye &= 67108863),
              (n = Math.imul(w, H)),
              (i = Math.imul(w, j)),
              (i = (i + Math.imul(b, H)) | 0),
              (o = Math.imul(b, j)),
              (n = (n + Math.imul(A, W)) | 0),
              (i = (i + Math.imul(A, z)) | 0),
              (i = (i + Math.imul(y, W)) | 0),
              (o = (o + Math.imul(y, z)) | 0),
              (n = (n + Math.imul(m, K)) | 0),
              (i = (i + Math.imul(m, Y)) | 0),
              (i = (i + Math.imul(g, K)) | 0),
              (o = (o + Math.imul(g, Y)) | 0),
              (n = (n + Math.imul(f, V)) | 0),
              (i = (i + Math.imul(f, Z)) | 0),
              (i = (i + Math.imul(c, V)) | 0),
              (o = (o + Math.imul(c, Z)) | 0));
            var ve = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (ve >>> 26)) | 0),
              (ve &= 67108863),
              (n = Math.imul(E, H)),
              (i = Math.imul(E, j)),
              (i = (i + Math.imul(B, H)) | 0),
              (o = Math.imul(B, j)),
              (n = (n + Math.imul(w, W)) | 0),
              (i = (i + Math.imul(w, z)) | 0),
              (i = (i + Math.imul(b, W)) | 0),
              (o = (o + Math.imul(b, z)) | 0),
              (n = (n + Math.imul(A, K)) | 0),
              (i = (i + Math.imul(A, Y)) | 0),
              (i = (i + Math.imul(y, K)) | 0),
              (o = (o + Math.imul(y, Y)) | 0),
              (n = (n + Math.imul(m, V)) | 0),
              (i = (i + Math.imul(m, Z)) | 0),
              (i = (i + Math.imul(g, V)) | 0),
              (o = (o + Math.imul(g, Z)) | 0),
              (n = (n + Math.imul(f, $)) | 0),
              (i = (i + Math.imul(f, ee)) | 0),
              (i = (i + Math.imul(c, $)) | 0),
              (o = (o + Math.imul(c, ee)) | 0));
            var we = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (we >>> 26)) | 0),
              (we &= 67108863),
              (n = Math.imul(C, H)),
              (i = Math.imul(C, j)),
              (i = (i + Math.imul(N, H)) | 0),
              (o = Math.imul(N, j)),
              (n = (n + Math.imul(E, W)) | 0),
              (i = (i + Math.imul(E, z)) | 0),
              (i = (i + Math.imul(B, W)) | 0),
              (o = (o + Math.imul(B, z)) | 0),
              (n = (n + Math.imul(w, K)) | 0),
              (i = (i + Math.imul(w, Y)) | 0),
              (i = (i + Math.imul(b, K)) | 0),
              (o = (o + Math.imul(b, Y)) | 0),
              (n = (n + Math.imul(A, V)) | 0),
              (i = (i + Math.imul(A, Z)) | 0),
              (i = (i + Math.imul(y, V)) | 0),
              (o = (o + Math.imul(y, Z)) | 0),
              (n = (n + Math.imul(m, $)) | 0),
              (i = (i + Math.imul(m, ee)) | 0),
              (i = (i + Math.imul(g, $)) | 0),
              (o = (o + Math.imul(g, ee)) | 0),
              (n = (n + Math.imul(f, re)) | 0),
              (i = (i + Math.imul(f, ne)) | 0),
              (i = (i + Math.imul(c, re)) | 0),
              (o = (o + Math.imul(c, ne)) | 0));
            var be = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (be >>> 26)) | 0),
              (be &= 67108863),
              (n = Math.imul(F, H)),
              (i = Math.imul(F, j)),
              (i = (i + Math.imul(O, H)) | 0),
              (o = Math.imul(O, j)),
              (n = (n + Math.imul(C, W)) | 0),
              (i = (i + Math.imul(C, z)) | 0),
              (i = (i + Math.imul(N, W)) | 0),
              (o = (o + Math.imul(N, z)) | 0),
              (n = (n + Math.imul(E, K)) | 0),
              (i = (i + Math.imul(E, Y)) | 0),
              (i = (i + Math.imul(B, K)) | 0),
              (o = (o + Math.imul(B, Y)) | 0),
              (n = (n + Math.imul(w, V)) | 0),
              (i = (i + Math.imul(w, Z)) | 0),
              (i = (i + Math.imul(b, V)) | 0),
              (o = (o + Math.imul(b, Z)) | 0),
              (n = (n + Math.imul(A, $)) | 0),
              (i = (i + Math.imul(A, ee)) | 0),
              (i = (i + Math.imul(y, $)) | 0),
              (o = (o + Math.imul(y, ee)) | 0),
              (n = (n + Math.imul(m, re)) | 0),
              (i = (i + Math.imul(m, ne)) | 0),
              (i = (i + Math.imul(g, re)) | 0),
              (o = (o + Math.imul(g, ne)) | 0),
              (n = (n + Math.imul(f, oe)) | 0),
              (i = (i + Math.imul(f, se)) | 0),
              (i = (i + Math.imul(c, oe)) | 0),
              (o = (o + Math.imul(c, se)) | 0));
            var Me = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Me >>> 26)) | 0),
              (Me &= 67108863),
              (n = Math.imul(R, H)),
              (i = Math.imul(R, j)),
              (i = (i + Math.imul(T, H)) | 0),
              (o = Math.imul(T, j)),
              (n = (n + Math.imul(F, W)) | 0),
              (i = (i + Math.imul(F, z)) | 0),
              (i = (i + Math.imul(O, W)) | 0),
              (o = (o + Math.imul(O, z)) | 0),
              (n = (n + Math.imul(C, K)) | 0),
              (i = (i + Math.imul(C, Y)) | 0),
              (i = (i + Math.imul(N, K)) | 0),
              (o = (o + Math.imul(N, Y)) | 0),
              (n = (n + Math.imul(E, V)) | 0),
              (i = (i + Math.imul(E, Z)) | 0),
              (i = (i + Math.imul(B, V)) | 0),
              (o = (o + Math.imul(B, Z)) | 0),
              (n = (n + Math.imul(w, $)) | 0),
              (i = (i + Math.imul(w, ee)) | 0),
              (i = (i + Math.imul(b, $)) | 0),
              (o = (o + Math.imul(b, ee)) | 0),
              (n = (n + Math.imul(A, re)) | 0),
              (i = (i + Math.imul(A, ne)) | 0),
              (i = (i + Math.imul(y, re)) | 0),
              (o = (o + Math.imul(y, ne)) | 0),
              (n = (n + Math.imul(m, oe)) | 0),
              (i = (i + Math.imul(m, se)) | 0),
              (i = (i + Math.imul(g, oe)) | 0),
              (o = (o + Math.imul(g, se)) | 0),
              (n = (n + Math.imul(f, ue)) | 0),
              (i = (i + Math.imul(f, le)) | 0),
              (i = (i + Math.imul(c, ue)) | 0),
              (o = (o + Math.imul(c, le)) | 0));
            var Ee = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Ee >>> 26)) | 0),
              (Ee &= 67108863),
              (n = Math.imul(I, H)),
              (i = Math.imul(I, j)),
              (i = (i + Math.imul(U, H)) | 0),
              (o = Math.imul(U, j)),
              (n = (n + Math.imul(R, W)) | 0),
              (i = (i + Math.imul(R, z)) | 0),
              (i = (i + Math.imul(T, W)) | 0),
              (o = (o + Math.imul(T, z)) | 0),
              (n = (n + Math.imul(F, K)) | 0),
              (i = (i + Math.imul(F, Y)) | 0),
              (i = (i + Math.imul(O, K)) | 0),
              (o = (o + Math.imul(O, Y)) | 0),
              (n = (n + Math.imul(C, V)) | 0),
              (i = (i + Math.imul(C, Z)) | 0),
              (i = (i + Math.imul(N, V)) | 0),
              (o = (o + Math.imul(N, Z)) | 0),
              (n = (n + Math.imul(E, $)) | 0),
              (i = (i + Math.imul(E, ee)) | 0),
              (i = (i + Math.imul(B, $)) | 0),
              (o = (o + Math.imul(B, ee)) | 0),
              (n = (n + Math.imul(w, re)) | 0),
              (i = (i + Math.imul(w, ne)) | 0),
              (i = (i + Math.imul(b, re)) | 0),
              (o = (o + Math.imul(b, ne)) | 0),
              (n = (n + Math.imul(A, oe)) | 0),
              (i = (i + Math.imul(A, se)) | 0),
              (i = (i + Math.imul(y, oe)) | 0),
              (o = (o + Math.imul(y, se)) | 0),
              (n = (n + Math.imul(m, ue)) | 0),
              (i = (i + Math.imul(m, le)) | 0),
              (i = (i + Math.imul(g, ue)) | 0),
              (o = (o + Math.imul(g, le)) | 0),
              (n = (n + Math.imul(f, fe)) | 0),
              (i = (i + Math.imul(f, ce)) | 0),
              (i = (i + Math.imul(c, fe)) | 0),
              (o = (o + Math.imul(c, ce)) | 0));
            var Be = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Be >>> 26)) | 0),
              (Be &= 67108863),
              (n = Math.imul(L, H)),
              (i = Math.imul(L, j)),
              (i = (i + Math.imul(_, H)) | 0),
              (o = Math.imul(_, j)),
              (n = (n + Math.imul(I, W)) | 0),
              (i = (i + Math.imul(I, z)) | 0),
              (i = (i + Math.imul(U, W)) | 0),
              (o = (o + Math.imul(U, z)) | 0),
              (n = (n + Math.imul(R, K)) | 0),
              (i = (i + Math.imul(R, Y)) | 0),
              (i = (i + Math.imul(T, K)) | 0),
              (o = (o + Math.imul(T, Y)) | 0),
              (n = (n + Math.imul(F, V)) | 0),
              (i = (i + Math.imul(F, Z)) | 0),
              (i = (i + Math.imul(O, V)) | 0),
              (o = (o + Math.imul(O, Z)) | 0),
              (n = (n + Math.imul(C, $)) | 0),
              (i = (i + Math.imul(C, ee)) | 0),
              (i = (i + Math.imul(N, $)) | 0),
              (o = (o + Math.imul(N, ee)) | 0),
              (n = (n + Math.imul(E, re)) | 0),
              (i = (i + Math.imul(E, ne)) | 0),
              (i = (i + Math.imul(B, re)) | 0),
              (o = (o + Math.imul(B, ne)) | 0),
              (n = (n + Math.imul(w, oe)) | 0),
              (i = (i + Math.imul(w, se)) | 0),
              (i = (i + Math.imul(b, oe)) | 0),
              (o = (o + Math.imul(b, se)) | 0),
              (n = (n + Math.imul(A, ue)) | 0),
              (i = (i + Math.imul(A, le)) | 0),
              (i = (i + Math.imul(y, ue)) | 0),
              (o = (o + Math.imul(y, le)) | 0),
              (n = (n + Math.imul(m, fe)) | 0),
              (i = (i + Math.imul(m, ce)) | 0),
              (i = (i + Math.imul(g, fe)) | 0),
              (o = (o + Math.imul(g, ce)) | 0),
              (n = (n + Math.imul(f, me)) | 0),
              (i = (i + Math.imul(f, ge)) | 0),
              (i = (i + Math.imul(c, me)) | 0),
              (o = (o + Math.imul(c, ge)) | 0));
            var Se = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Se >>> 26)) | 0),
              (Se &= 67108863),
              (n = Math.imul(L, W)),
              (i = Math.imul(L, z)),
              (i = (i + Math.imul(_, W)) | 0),
              (o = Math.imul(_, z)),
              (n = (n + Math.imul(I, K)) | 0),
              (i = (i + Math.imul(I, Y)) | 0),
              (i = (i + Math.imul(U, K)) | 0),
              (o = (o + Math.imul(U, Y)) | 0),
              (n = (n + Math.imul(R, V)) | 0),
              (i = (i + Math.imul(R, Z)) | 0),
              (i = (i + Math.imul(T, V)) | 0),
              (o = (o + Math.imul(T, Z)) | 0),
              (n = (n + Math.imul(F, $)) | 0),
              (i = (i + Math.imul(F, ee)) | 0),
              (i = (i + Math.imul(O, $)) | 0),
              (o = (o + Math.imul(O, ee)) | 0),
              (n = (n + Math.imul(C, re)) | 0),
              (i = (i + Math.imul(C, ne)) | 0),
              (i = (i + Math.imul(N, re)) | 0),
              (o = (o + Math.imul(N, ne)) | 0),
              (n = (n + Math.imul(E, oe)) | 0),
              (i = (i + Math.imul(E, se)) | 0),
              (i = (i + Math.imul(B, oe)) | 0),
              (o = (o + Math.imul(B, se)) | 0),
              (n = (n + Math.imul(w, ue)) | 0),
              (i = (i + Math.imul(w, le)) | 0),
              (i = (i + Math.imul(b, ue)) | 0),
              (o = (o + Math.imul(b, le)) | 0),
              (n = (n + Math.imul(A, fe)) | 0),
              (i = (i + Math.imul(A, ce)) | 0),
              (i = (i + Math.imul(y, fe)) | 0),
              (o = (o + Math.imul(y, ce)) | 0),
              (n = (n + Math.imul(m, me)) | 0),
              (i = (i + Math.imul(m, ge)) | 0),
              (i = (i + Math.imul(g, me)) | 0),
              (o = (o + Math.imul(g, ge)) | 0));
            var Ce = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Ce >>> 26)) | 0),
              (Ce &= 67108863),
              (n = Math.imul(L, K)),
              (i = Math.imul(L, Y)),
              (i = (i + Math.imul(_, K)) | 0),
              (o = Math.imul(_, Y)),
              (n = (n + Math.imul(I, V)) | 0),
              (i = (i + Math.imul(I, Z)) | 0),
              (i = (i + Math.imul(U, V)) | 0),
              (o = (o + Math.imul(U, Z)) | 0),
              (n = (n + Math.imul(R, $)) | 0),
              (i = (i + Math.imul(R, ee)) | 0),
              (i = (i + Math.imul(T, $)) | 0),
              (o = (o + Math.imul(T, ee)) | 0),
              (n = (n + Math.imul(F, re)) | 0),
              (i = (i + Math.imul(F, ne)) | 0),
              (i = (i + Math.imul(O, re)) | 0),
              (o = (o + Math.imul(O, ne)) | 0),
              (n = (n + Math.imul(C, oe)) | 0),
              (i = (i + Math.imul(C, se)) | 0),
              (i = (i + Math.imul(N, oe)) | 0),
              (o = (o + Math.imul(N, se)) | 0),
              (n = (n + Math.imul(E, ue)) | 0),
              (i = (i + Math.imul(E, le)) | 0),
              (i = (i + Math.imul(B, ue)) | 0),
              (o = (o + Math.imul(B, le)) | 0),
              (n = (n + Math.imul(w, fe)) | 0),
              (i = (i + Math.imul(w, ce)) | 0),
              (i = (i + Math.imul(b, fe)) | 0),
              (o = (o + Math.imul(b, ce)) | 0),
              (n = (n + Math.imul(A, me)) | 0),
              (i = (i + Math.imul(A, ge)) | 0),
              (i = (i + Math.imul(y, me)) | 0),
              (o = (o + Math.imul(y, ge)) | 0));
            var Ne = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Ne >>> 26)) | 0),
              (Ne &= 67108863),
              (n = Math.imul(L, V)),
              (i = Math.imul(L, Z)),
              (i = (i + Math.imul(_, V)) | 0),
              (o = Math.imul(_, Z)),
              (n = (n + Math.imul(I, $)) | 0),
              (i = (i + Math.imul(I, ee)) | 0),
              (i = (i + Math.imul(U, $)) | 0),
              (o = (o + Math.imul(U, ee)) | 0),
              (n = (n + Math.imul(R, re)) | 0),
              (i = (i + Math.imul(R, ne)) | 0),
              (i = (i + Math.imul(T, re)) | 0),
              (o = (o + Math.imul(T, ne)) | 0),
              (n = (n + Math.imul(F, oe)) | 0),
              (i = (i + Math.imul(F, se)) | 0),
              (i = (i + Math.imul(O, oe)) | 0),
              (o = (o + Math.imul(O, se)) | 0),
              (n = (n + Math.imul(C, ue)) | 0),
              (i = (i + Math.imul(C, le)) | 0),
              (i = (i + Math.imul(N, ue)) | 0),
              (o = (o + Math.imul(N, le)) | 0),
              (n = (n + Math.imul(E, fe)) | 0),
              (i = (i + Math.imul(E, ce)) | 0),
              (i = (i + Math.imul(B, fe)) | 0),
              (o = (o + Math.imul(B, ce)) | 0),
              (n = (n + Math.imul(w, me)) | 0),
              (i = (i + Math.imul(w, ge)) | 0),
              (i = (i + Math.imul(b, me)) | 0),
              (o = (o + Math.imul(b, ge)) | 0));
            var Pe = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Pe >>> 26)) | 0),
              (Pe &= 67108863),
              (n = Math.imul(L, $)),
              (i = Math.imul(L, ee)),
              (i = (i + Math.imul(_, $)) | 0),
              (o = Math.imul(_, ee)),
              (n = (n + Math.imul(I, re)) | 0),
              (i = (i + Math.imul(I, ne)) | 0),
              (i = (i + Math.imul(U, re)) | 0),
              (o = (o + Math.imul(U, ne)) | 0),
              (n = (n + Math.imul(R, oe)) | 0),
              (i = (i + Math.imul(R, se)) | 0),
              (i = (i + Math.imul(T, oe)) | 0),
              (o = (o + Math.imul(T, se)) | 0),
              (n = (n + Math.imul(F, ue)) | 0),
              (i = (i + Math.imul(F, le)) | 0),
              (i = (i + Math.imul(O, ue)) | 0),
              (o = (o + Math.imul(O, le)) | 0),
              (n = (n + Math.imul(C, fe)) | 0),
              (i = (i + Math.imul(C, ce)) | 0),
              (i = (i + Math.imul(N, fe)) | 0),
              (o = (o + Math.imul(N, ce)) | 0),
              (n = (n + Math.imul(E, me)) | 0),
              (i = (i + Math.imul(E, ge)) | 0),
              (i = (i + Math.imul(B, me)) | 0),
              (o = (o + Math.imul(B, ge)) | 0));
            var Fe = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Fe >>> 26)) | 0),
              (Fe &= 67108863),
              (n = Math.imul(L, re)),
              (i = Math.imul(L, ne)),
              (i = (i + Math.imul(_, re)) | 0),
              (o = Math.imul(_, ne)),
              (n = (n + Math.imul(I, oe)) | 0),
              (i = (i + Math.imul(I, se)) | 0),
              (i = (i + Math.imul(U, oe)) | 0),
              (o = (o + Math.imul(U, se)) | 0),
              (n = (n + Math.imul(R, ue)) | 0),
              (i = (i + Math.imul(R, le)) | 0),
              (i = (i + Math.imul(T, ue)) | 0),
              (o = (o + Math.imul(T, le)) | 0),
              (n = (n + Math.imul(F, fe)) | 0),
              (i = (i + Math.imul(F, ce)) | 0),
              (i = (i + Math.imul(O, fe)) | 0),
              (o = (o + Math.imul(O, ce)) | 0),
              (n = (n + Math.imul(C, me)) | 0),
              (i = (i + Math.imul(C, ge)) | 0),
              (i = (i + Math.imul(N, me)) | 0),
              (o = (o + Math.imul(N, ge)) | 0));
            var Oe = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Oe >>> 26)) | 0),
              (Oe &= 67108863),
              (n = Math.imul(L, oe)),
              (i = Math.imul(L, se)),
              (i = (i + Math.imul(_, oe)) | 0),
              (o = Math.imul(_, se)),
              (n = (n + Math.imul(I, ue)) | 0),
              (i = (i + Math.imul(I, le)) | 0),
              (i = (i + Math.imul(U, ue)) | 0),
              (o = (o + Math.imul(U, le)) | 0),
              (n = (n + Math.imul(R, fe)) | 0),
              (i = (i + Math.imul(R, ce)) | 0),
              (i = (i + Math.imul(T, fe)) | 0),
              (o = (o + Math.imul(T, ce)) | 0),
              (n = (n + Math.imul(F, me)) | 0),
              (i = (i + Math.imul(F, ge)) | 0),
              (i = (i + Math.imul(O, me)) | 0),
              (o = (o + Math.imul(O, ge)) | 0));
            var De = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (De >>> 26)) | 0),
              (De &= 67108863),
              (n = Math.imul(L, ue)),
              (i = Math.imul(L, le)),
              (i = (i + Math.imul(_, ue)) | 0),
              (o = Math.imul(_, le)),
              (n = (n + Math.imul(I, fe)) | 0),
              (i = (i + Math.imul(I, ce)) | 0),
              (i = (i + Math.imul(U, fe)) | 0),
              (o = (o + Math.imul(U, ce)) | 0),
              (n = (n + Math.imul(R, me)) | 0),
              (i = (i + Math.imul(R, ge)) | 0),
              (i = (i + Math.imul(T, me)) | 0),
              (o = (o + Math.imul(T, ge)) | 0));
            var Re = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Re >>> 26)) | 0),
              (Re &= 67108863),
              (n = Math.imul(L, fe)),
              (i = Math.imul(L, ce)),
              (i = (i + Math.imul(_, fe)) | 0),
              (o = Math.imul(_, ce)),
              (n = (n + Math.imul(I, me)) | 0),
              (i = (i + Math.imul(I, ge)) | 0),
              (i = (i + Math.imul(U, me)) | 0),
              (o = (o + Math.imul(U, ge)) | 0));
            var Te = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            ((l = (((o + (i >>> 13)) | 0) + (Te >>> 26)) | 0),
              (Te &= 67108863),
              (n = Math.imul(L, me)),
              (i = Math.imul(L, ge)),
              (i = (i + Math.imul(_, me)) | 0),
              (o = Math.imul(_, ge)));
            var xe = (((l + n) | 0) + ((8191 & i) << 13)) | 0;
            return (
              (l = (((o + (i >>> 13)) | 0) + (xe >>> 26)) | 0),
              (xe &= 67108863),
              (u[0] = pe),
              (u[1] = Ae),
              (u[2] = ye),
              (u[3] = ve),
              (u[4] = we),
              (u[5] = be),
              (u[6] = Me),
              (u[7] = Ee),
              (u[8] = Be),
              (u[9] = Se),
              (u[10] = Ce),
              (u[11] = Ne),
              (u[12] = Pe),
              (u[13] = Fe),
              (u[14] = Oe),
              (u[15] = De),
              (u[16] = Re),
              (u[17] = Te),
              (u[18] = xe),
              0 !== l && ((u[19] = l), r.length++),
              r
            );
          };
          function v(e, t, r) {
            ((r.negative = t.negative ^ e.negative),
              (r.length = e.length + t.length));
            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
              var s = i;
              i = 0;
              for (
                var a = 67108863 & n,
                  u = Math.min(o, t.length - 1),
                  l = Math.max(0, o - e.length + 1);
                l <= u;
                l++
              ) {
                var h = o - l,
                  f = 0 | e.words[h],
                  c = 0 | t.words[l],
                  d = f * c,
                  m = 67108863 & d;
                ((s = (s + ((d / 67108864) | 0)) | 0),
                  (m = (m + a) | 0),
                  (a = 67108863 & m),
                  (s = (s + (m >>> 26)) | 0),
                  (i += s >>> 26),
                  (s &= 67108863));
              }
              ((r.words[o] = a), (n = s), (s = i));
            }
            return (0 !== n ? (r.words[o] = n) : r.length--, r._strip());
          }
          function w(e, t, r) {
            return v(e, t, r);
          }
          function b(e, t) {
            ((this.x = e), (this.y = t));
          }
          (Math.imul || (y = A),
            (o.prototype.mulTo = function (e, t) {
              var r,
                n = this.length + e.length;
              return (
                (r =
                  10 === this.length && 10 === e.length
                    ? y(this, e, t)
                    : n < 63
                      ? A(this, e, t)
                      : n < 1024
                        ? v(this, e, t)
                        : w(this, e, t)),
                r
              );
            }),
            (b.prototype.makeRBT = function (e) {
              for (
                var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0;
                n < e;
                n++
              )
                t[n] = this.revBin(n, r, e);
              return t;
            }),
            (b.prototype.revBin = function (e, t, r) {
              if (0 === e || e === r - 1) return e;
              for (var n = 0, i = 0; i < t; i++)
                ((n |= (1 & e) << (t - i - 1)), (e >>= 1));
              return n;
            }),
            (b.prototype.permute = function (e, t, r, n, i, o) {
              for (var s = 0; s < o; s++) ((n[s] = t[e[s]]), (i[s] = r[e[s]]));
            }),
            (b.prototype.transform = function (e, t, r, n, i, o) {
              this.permute(o, e, t, r, n, i);
              for (var s = 1; s < i; s <<= 1)
                for (
                  var a = s << 1,
                    u = Math.cos((2 * Math.PI) / a),
                    l = Math.sin((2 * Math.PI) / a),
                    h = 0;
                  h < i;
                  h += a
                )
                  for (var f = u, c = l, d = 0; d < s; d++) {
                    var m = r[h + d],
                      g = n[h + d],
                      p = r[h + d + s],
                      A = n[h + d + s],
                      y = f * p - c * A;
                    ((A = f * A + c * p),
                      (p = y),
                      (r[h + d] = m + p),
                      (n[h + d] = g + A),
                      (r[h + d + s] = m - p),
                      (n[h + d + s] = g - A),
                      d !== a &&
                        ((y = u * f - l * c), (c = u * c + l * f), (f = y)));
                  }
            }),
            (b.prototype.guessLen13b = function (e, t) {
              var r = 1 | Math.max(t, e),
                n = 1 & r,
                i = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) i++;
              return 1 << (i + 1 + n);
            }),
            (b.prototype.conjugate = function (e, t, r) {
              if (!(r <= 1))
                for (var n = 0; n < r / 2; n++) {
                  var i = e[n];
                  ((e[n] = e[r - n - 1]),
                    (e[r - n - 1] = i),
                    (i = t[n]),
                    (t[n] = -t[r - n - 1]),
                    (t[r - n - 1] = -i));
                }
            }),
            (b.prototype.normalize13b = function (e, t) {
              for (var r = 0, n = 0; n < t / 2; n++) {
                var i =
                  8192 * Math.round(e[2 * n + 1] / t) +
                  Math.round(e[2 * n] / t) +
                  r;
                ((e[n] = 67108863 & i),
                  (r = i < 67108864 ? 0 : (i / 67108864) | 0));
              }
              return e;
            }),
            (b.prototype.convert13b = function (e, t, r, i) {
              for (var o = 0, s = 0; s < t; s++)
                ((o += 0 | e[s]),
                  (r[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * t; s < i; ++s) r[s] = 0;
              (n(0 === o), n(0 === (-8192 & o)));
            }),
            (b.prototype.stub = function (e) {
              for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
              return t;
            }),
            (b.prototype.mulp = function (e, t, r) {
              var n = 2 * this.guessLen13b(e.length, t.length),
                i = this.makeRBT(n),
                o = this.stub(n),
                s = new Array(n),
                a = new Array(n),
                u = new Array(n),
                l = new Array(n),
                h = new Array(n),
                f = new Array(n),
                c = r.words;
              ((c.length = n),
                this.convert13b(e.words, e.length, s, n),
                this.convert13b(t.words, t.length, l, n),
                this.transform(s, o, a, u, n, i),
                this.transform(l, o, h, f, n, i));
              for (var d = 0; d < n; d++) {
                var m = a[d] * h[d] - u[d] * f[d];
                ((u[d] = a[d] * f[d] + u[d] * h[d]), (a[d] = m));
              }
              return (
                this.conjugate(a, u, n),
                this.transform(a, u, c, o, n, i),
                this.conjugate(c, o, n),
                this.normalize13b(c, n),
                (r.negative = e.negative ^ t.negative),
                (r.length = e.length + t.length),
                r._strip()
              );
            }),
            (o.prototype.mul = function (e) {
              var t = new o(null);
              return (
                (t.words = new Array(this.length + e.length)),
                this.mulTo(e, t)
              );
            }),
            (o.prototype.mulf = function (e) {
              var t = new o(null);
              return (
                (t.words = new Array(this.length + e.length)),
                w(this, e, t)
              );
            }),
            (o.prototype.imul = function (e) {
              return this.clone().mulTo(e, this);
            }),
            (o.prototype.imuln = function (e) {
              var t = e < 0;
              (t && (e = -e), n("number" === typeof e), n(e < 67108864));
              for (var r = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * e,
                  s = (67108863 & o) + (67108863 & r);
                ((r >>= 26),
                  (r += (o / 67108864) | 0),
                  (r += s >>> 26),
                  (this.words[i] = 67108863 & s));
              }
              return (
                0 !== r && ((this.words[i] = r), this.length++),
                (this.length = 0 === e ? 1 : this.length),
                t ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (e) {
              return this.clone().imuln(e);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (e) {
              var t = p(e);
              if (0 === t.length) return new o(1);
              for (var r = this, n = 0; n < t.length; n++, r = r.sqr())
                if (0 !== t[n]) break;
              if (++n < t.length)
                for (var i = r.sqr(); n < t.length; n++, i = i.sqr())
                  0 !== t[n] && (r = r.mul(i));
              return r;
            }),
            (o.prototype.iushln = function (e) {
              n("number" === typeof e && e >= 0);
              var t,
                r = e % 26,
                i = (e - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var s = 0;
                for (t = 0; t < this.length; t++) {
                  var a = this.words[t] & o,
                    u = ((0 | this.words[t]) - a) << r;
                  ((this.words[t] = u | s), (s = a >>> (26 - r)));
                }
                s && ((this.words[t] = s), this.length++);
              }
              if (0 !== i) {
                for (t = this.length - 1; t >= 0; t--)
                  this.words[t + i] = this.words[t];
                for (t = 0; t < i; t++) this.words[t] = 0;
                this.length += i;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (e) {
              return (n(0 === this.negative), this.iushln(e));
            }),
            (o.prototype.iushrn = function (e, t, r) {
              var i;
              (n("number" === typeof e && e >= 0),
                (i = t ? (t - (t % 26)) / 26 : 0));
              var o = e % 26,
                s = Math.min((e - o) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> o) << o),
                u = r;
              if (((i -= s), (i = Math.max(0, i)), u)) {
                for (var l = 0; l < s; l++) u.words[l] = this.words[l];
                u.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, l = 0; l < this.length; l++)
                  this.words[l] = this.words[l + s];
              else ((this.words[0] = 0), (this.length = 1));
              var h = 0;
              for (l = this.length - 1; l >= 0 && (0 !== h || l >= i); l--) {
                var f = 0 | this.words[l];
                ((this.words[l] = (h << (26 - o)) | (f >>> o)), (h = f & a));
              }
              return (
                u && 0 !== h && (u.words[u.length++] = h),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (e, t, r) {
              return (n(0 === this.negative), this.iushrn(e, t, r));
            }),
            (o.prototype.shln = function (e) {
              return this.clone().ishln(e);
            }),
            (o.prototype.ushln = function (e) {
              return this.clone().iushln(e);
            }),
            (o.prototype.shrn = function (e) {
              return this.clone().ishrn(e);
            }),
            (o.prototype.ushrn = function (e) {
              return this.clone().iushrn(e);
            }),
            (o.prototype.testn = function (e) {
              n("number" === typeof e && e >= 0);
              var t = e % 26,
                r = (e - t) / 26,
                i = 1 << t;
              if (this.length <= r) return !1;
              var o = this.words[r];
              return !!(o & i);
            }),
            (o.prototype.imaskn = function (e) {
              n("number" === typeof e && e >= 0);
              var t = e % 26,
                r = (e - t) / 26;
              if (
                (n(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= r)
              )
                return this;
              if (
                (0 !== t && r++,
                (this.length = Math.min(r, this.length)),
                0 !== t)
              ) {
                var i = 67108863 ^ ((67108863 >>> t) << t);
                this.words[this.length - 1] &= i;
              }
              return this._strip();
            }),
            (o.prototype.maskn = function (e) {
              return this.clone().imaskn(e);
            }),
            (o.prototype.iaddn = function (e) {
              return (
                n("number" === typeof e),
                n(e < 67108864),
                e < 0
                  ? this.isubn(-e)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= e
                      ? ((this.words[0] = e - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(e),
                        (this.negative = 1),
                        this)
                    : this._iaddn(e)
              );
            }),
            (o.prototype._iaddn = function (e) {
              this.words[0] += e;
              for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                ((this.words[t] -= 67108864),
                  t === this.length - 1
                    ? (this.words[t + 1] = 1)
                    : this.words[t + 1]++);
              return ((this.length = Math.max(this.length, t + 1)), this);
            }),
            (o.prototype.isubn = function (e) {
              if ((n("number" === typeof e), n(e < 67108864), e < 0))
                return this.iaddn(-e);
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(e),
                  (this.negative = 1),
                  this
                );
              if (
                ((this.words[0] -= e), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var t = 0; t < this.length && this.words[t] < 0; t++)
                  ((this.words[t] += 67108864), (this.words[t + 1] -= 1));
              return this._strip();
            }),
            (o.prototype.addn = function (e) {
              return this.clone().iaddn(e);
            }),
            (o.prototype.subn = function (e) {
              return this.clone().isubn(e);
            }),
            (o.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (e, t, r) {
              var i,
                o,
                s = e.length + r;
              this._expand(s);
              var a = 0;
              for (i = 0; i < e.length; i++) {
                o = (0 | this.words[i + r]) + a;
                var u = (0 | e.words[i]) * t;
                ((o -= 67108863 & u),
                  (a = (o >> 26) - ((u / 67108864) | 0)),
                  (this.words[i + r] = 67108863 & o));
              }
              for (; i < this.length - r; i++)
                ((o = (0 | this.words[i + r]) + a),
                  (a = o >> 26),
                  (this.words[i + r] = 67108863 & o));
              if (0 === a) return this._strip();
              for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
                ((o = -(0 | this.words[i]) + a),
                  (a = o >> 26),
                  (this.words[i] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (e, t) {
              var r = this.length - e.length,
                n = this.clone(),
                i = e,
                s = 0 | i.words[i.length - 1],
                a = this._countBits(s);
              ((r = 26 - a),
                0 !== r &&
                  ((i = i.ushln(r)),
                  n.iushln(r),
                  (s = 0 | i.words[i.length - 1])));
              var u,
                l = n.length - i.length;
              if ("mod" !== t) {
                ((u = new o(null)),
                  (u.length = l + 1),
                  (u.words = new Array(u.length)));
                for (var h = 0; h < u.length; h++) u.words[h] = 0;
              }
              var f = n.clone()._ishlnsubmul(i, 1, l);
              0 === f.negative && ((n = f), u && (u.words[l] = 1));
              for (var c = l - 1; c >= 0; c--) {
                var d =
                  67108864 * (0 | n.words[i.length + c]) +
                  (0 | n.words[i.length + c - 1]);
                ((d = Math.min((d / s) | 0, 67108863)),
                  n._ishlnsubmul(i, d, c));
                while (0 !== n.negative)
                  (d--,
                    (n.negative = 0),
                    n._ishlnsubmul(i, 1, c),
                    n.isZero() || (n.negative ^= 1));
                u && (u.words[c] = d);
              }
              return (
                u && u._strip(),
                n._strip(),
                "div" !== t && 0 !== r && n.iushrn(r),
                { div: u || null, mod: n }
              );
            }),
            (o.prototype.divmod = function (e, t, r) {
              return (
                n(!e.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === e.negative
                    ? ((a = this.neg().divmod(e, t)),
                      "mod" !== t && (i = a.div.neg()),
                      "div" !== t &&
                        ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(e)),
                      { div: i, mod: s })
                    : 0 === this.negative && 0 !== e.negative
                      ? ((a = this.divmod(e.neg(), t)),
                        "mod" !== t && (i = a.div.neg()),
                        { div: i, mod: a.mod })
                      : 0 !== (this.negative & e.negative)
                        ? ((a = this.neg().divmod(e.neg(), t)),
                          "div" !== t &&
                            ((s = a.mod.neg()),
                            r && 0 !== s.negative && s.isub(e)),
                          { div: a.div, mod: s })
                        : e.length > this.length || this.cmp(e) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === e.length
                            ? "div" === t
                              ? { div: this.divn(e.words[0]), mod: null }
                              : "mod" === t
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(e.words[0])),
                                  }
                                : {
                                    div: this.divn(e.words[0]),
                                    mod: new o(this.modrn(e.words[0])),
                                  }
                            : this._wordDiv(e, t)
              );
              var i, s, a;
            }),
            (o.prototype.div = function (e) {
              return this.divmod(e, "div", !1).div;
            }),
            (o.prototype.mod = function (e) {
              return this.divmod(e, "mod", !1).mod;
            }),
            (o.prototype.umod = function (e) {
              return this.divmod(e, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (e) {
              var t = this.divmod(e);
              if (t.mod.isZero()) return t.div;
              var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                n = e.ushrn(1),
                i = e.andln(1),
                o = r.cmp(n);
              return o < 0 || (1 === i && 0 === o)
                ? t.div
                : 0 !== t.div.negative
                  ? t.div.isubn(1)
                  : t.div.iaddn(1);
            }),
            (o.prototype.modrn = function (e) {
              var t = e < 0;
              (t && (e = -e), n(e <= 67108863));
              for (
                var r = (1 << 26) % e, i = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                i = (r * i + (0 | this.words[o])) % e;
              return t ? -i : i;
            }),
            (o.prototype.modn = function (e) {
              return this.modrn(e);
            }),
            (o.prototype.idivn = function (e) {
              var t = e < 0;
              (t && (e = -e), n(e <= 67108863));
              for (var r = 0, i = this.length - 1; i >= 0; i--) {
                var o = (0 | this.words[i]) + 67108864 * r;
                ((this.words[i] = (o / e) | 0), (r = o % e));
              }
              return (this._strip(), t ? this.ineg() : this);
            }),
            (o.prototype.divn = function (e) {
              return this.clone().idivn(e);
            }),
            (o.prototype.egcd = function (e) {
              (n(0 === e.negative), n(!e.isZero()));
              var t = this,
                r = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              var i = new o(1),
                s = new o(0),
                a = new o(0),
                u = new o(1),
                l = 0;
              while (t.isEven() && r.isEven()) (t.iushrn(1), r.iushrn(1), ++l);
              var h = r.clone(),
                f = t.clone();
              while (!t.isZero()) {
                for (
                  var c = 0, d = 1;
                  0 === (t.words[0] & d) && c < 26;
                  ++c, d <<= 1
                );
                if (c > 0) {
                  t.iushrn(c);
                  while (c-- > 0)
                    ((i.isOdd() || s.isOdd()) && (i.iadd(h), s.isub(f)),
                      i.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var m = 0, g = 1;
                  0 === (r.words[0] & g) && m < 26;
                  ++m, g <<= 1
                );
                if (m > 0) {
                  r.iushrn(m);
                  while (m-- > 0)
                    ((a.isOdd() || u.isOdd()) && (a.iadd(h), u.isub(f)),
                      a.iushrn(1),
                      u.iushrn(1));
                }
                t.cmp(r) >= 0
                  ? (t.isub(r), i.isub(a), s.isub(u))
                  : (r.isub(t), a.isub(i), u.isub(s));
              }
              return { a: a, b: u, gcd: r.iushln(l) };
            }),
            (o.prototype._invmp = function (e) {
              (n(0 === e.negative), n(!e.isZero()));
              var t = this,
                r = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              var i,
                s = new o(1),
                a = new o(0),
                u = r.clone();
              while (t.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var l = 0, h = 1;
                  0 === (t.words[0] & h) && l < 26;
                  ++l, h <<= 1
                );
                if (l > 0) {
                  t.iushrn(l);
                  while (l-- > 0) (s.isOdd() && s.iadd(u), s.iushrn(1));
                }
                for (
                  var f = 0, c = 1;
                  0 === (r.words[0] & c) && f < 26;
                  ++f, c <<= 1
                );
                if (f > 0) {
                  r.iushrn(f);
                  while (f-- > 0) (a.isOdd() && a.iadd(u), a.iushrn(1));
                }
                t.cmp(r) >= 0 ? (t.isub(r), s.isub(a)) : (r.isub(t), a.isub(s));
              }
              return (
                (i = 0 === t.cmpn(1) ? s : a),
                i.cmpn(0) < 0 && i.iadd(e),
                i
              );
            }),
            (o.prototype.gcd = function (e) {
              if (this.isZero()) return e.abs();
              if (e.isZero()) return this.abs();
              var t = this.clone(),
                r = e.clone();
              ((t.negative = 0), (r.negative = 0));
              for (var n = 0; t.isEven() && r.isEven(); n++)
                (t.iushrn(1), r.iushrn(1));
              do {
                while (t.isEven()) t.iushrn(1);
                while (r.isEven()) r.iushrn(1);
                var i = t.cmp(r);
                if (i < 0) {
                  var o = t;
                  ((t = r), (r = o));
                } else if (0 === i || 0 === r.cmpn(1)) break;
                t.isub(r);
              } while (1);
              return r.iushln(n);
            }),
            (o.prototype.invm = function (e) {
              return this.egcd(e).a.umod(e);
            }),
            (o.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (o.prototype.andln = function (e) {
              return this.words[0] & e;
            }),
            (o.prototype.bincn = function (e) {
              n("number" === typeof e);
              var t = e % 26,
                r = (e - t) / 26,
                i = 1 << t;
              if (this.length <= r)
                return (this._expand(r + 1), (this.words[r] |= i), this);
              for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                var a = 0 | this.words[s];
                ((a += o),
                  (o = a >>> 26),
                  (a &= 67108863),
                  (this.words[s] = a));
              }
              return (0 !== o && ((this.words[s] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (e) {
              var t,
                r = e < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this._strip(), this.length > 1)) t = 1;
              else {
                (r && (e = -e), n(e <= 67108863, "Number is too big"));
                var i = 0 | this.words[0];
                t = i === e ? 0 : i < e ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (o.prototype.cmp = function (e) {
              if (0 !== this.negative && 0 === e.negative) return -1;
              if (0 === this.negative && 0 !== e.negative) return 1;
              var t = this.ucmp(e);
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (o.prototype.ucmp = function (e) {
              if (this.length > e.length) return 1;
              if (this.length < e.length) return -1;
              for (var t = 0, r = this.length - 1; r >= 0; r--) {
                var n = 0 | this.words[r],
                  i = 0 | e.words[r];
                if (n !== i) {
                  n < i ? (t = -1) : n > i && (t = 1);
                  break;
                }
              }
              return t;
            }),
            (o.prototype.gtn = function (e) {
              return 1 === this.cmpn(e);
            }),
            (o.prototype.gt = function (e) {
              return 1 === this.cmp(e);
            }),
            (o.prototype.gten = function (e) {
              return this.cmpn(e) >= 0;
            }),
            (o.prototype.gte = function (e) {
              return this.cmp(e) >= 0;
            }),
            (o.prototype.ltn = function (e) {
              return -1 === this.cmpn(e);
            }),
            (o.prototype.lt = function (e) {
              return -1 === this.cmp(e);
            }),
            (o.prototype.lten = function (e) {
              return this.cmpn(e) <= 0;
            }),
            (o.prototype.lte = function (e) {
              return this.cmp(e) <= 0;
            }),
            (o.prototype.eqn = function (e) {
              return 0 === this.cmpn(e);
            }),
            (o.prototype.eq = function (e) {
              return 0 === this.cmp(e);
            }),
            (o.red = function (e) {
              return new P(e);
            }),
            (o.prototype.toRed = function (e) {
              return (
                n(!this.red, "Already a number in reduction context"),
                n(0 === this.negative, "red works only with positives"),
                e.convertTo(this)._forceRed(e)
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
            (o.prototype._forceRed = function (e) {
              return ((this.red = e), this);
            }),
            (o.prototype.forceRed = function (e) {
              return (
                n(!this.red, "Already a number in reduction context"),
                this._forceRed(e)
              );
            }),
            (o.prototype.redAdd = function (e) {
              return (
                n(this.red, "redAdd works only with red numbers"),
                this.red.add(this, e)
              );
            }),
            (o.prototype.redIAdd = function (e) {
              return (
                n(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, e)
              );
            }),
            (o.prototype.redSub = function (e) {
              return (
                n(this.red, "redSub works only with red numbers"),
                this.red.sub(this, e)
              );
            }),
            (o.prototype.redISub = function (e) {
              return (
                n(this.red, "redISub works only with red numbers"),
                this.red.isub(this, e)
              );
            }),
            (o.prototype.redShl = function (e) {
              return (
                n(this.red, "redShl works only with red numbers"),
                this.red.shl(this, e)
              );
            }),
            (o.prototype.redMul = function (e) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.mul(this, e)
              );
            }),
            (o.prototype.redIMul = function (e) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.imul(this, e)
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
            (o.prototype.redPow = function (e) {
              return (
                n(this.red && !e.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, e)
              );
            }));
          var M = { k256: null, p224: null, p192: null, p25519: null };
          function E(e, t) {
            ((this.name = e),
              (this.p = new o(t, 16)),
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
          function S() {
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
          function N() {
            E.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function P(e) {
            if ("string" === typeof e) {
              var t = o._prime(e);
              ((this.m = t.p), (this.prime = t));
            } else
              (n(e.gtn(1), "modulus must be greater than 1"),
                (this.m = e),
                (this.prime = null));
          }
          function F(e) {
            (P.call(this, e),
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
            var e = new o(null);
            return ((e.words = new Array(Math.ceil(this.n / 13))), e);
          }),
            (E.prototype.ireduce = function (e) {
              var t,
                r = e;
              do {
                (this.split(r, this.tmp),
                  (r = this.imulK(r)),
                  (r = r.iadd(this.tmp)),
                  (t = r.bitLength()));
              } while (t > this.n);
              var n = t < this.n ? -1 : r.ucmp(this.p);
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
            (E.prototype.split = function (e, t) {
              e.iushrn(this.n, 0, t);
            }),
            (E.prototype.imulK = function (e) {
              return e.imul(this.k);
            }),
            i(B, E),
            (B.prototype.split = function (e, t) {
              for (
                var r = 4194303, n = Math.min(e.length, 9), i = 0;
                i < n;
                i++
              )
                t.words[i] = e.words[i];
              if (((t.length = n), e.length <= 9))
                return ((e.words[0] = 0), void (e.length = 1));
              var o = e.words[9];
              for (t.words[t.length++] = o & r, i = 10; i < e.length; i++) {
                var s = 0 | e.words[i];
                ((e.words[i - 10] = ((s & r) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (e.words[i - 10] = o),
                0 === o && e.length > 10 ? (e.length -= 10) : (e.length -= 9));
            }),
            (B.prototype.imulK = function (e) {
              ((e.words[e.length] = 0),
                (e.words[e.length + 1] = 0),
                (e.length += 2));
              for (var t = 0, r = 0; r < e.length; r++) {
                var n = 0 | e.words[r];
                ((t += 977 * n),
                  (e.words[r] = 67108863 & t),
                  (t = 64 * n + ((t / 67108864) | 0)));
              }
              return (
                0 === e.words[e.length - 1] &&
                  (e.length--, 0 === e.words[e.length - 1] && e.length--),
                e
              );
            }),
            i(S, E),
            i(C, E),
            i(N, E),
            (N.prototype.imulK = function (e) {
              for (var t = 0, r = 0; r < e.length; r++) {
                var n = 19 * (0 | e.words[r]) + t,
                  i = 67108863 & n;
                ((n >>>= 26), (e.words[r] = i), (t = n));
              }
              return (0 !== t && (e.words[e.length++] = t), e);
            }),
            (o._prime = function (e) {
              if (M[e]) return M[e];
              var t;
              if ("k256" === e) t = new B();
              else if ("p224" === e) t = new S();
              else if ("p192" === e) t = new C();
              else {
                if ("p25519" !== e) throw new Error("Unknown prime " + e);
                t = new N();
              }
              return ((M[e] = t), t);
            }),
            (P.prototype._verify1 = function (e) {
              (n(0 === e.negative, "red works only with positives"),
                n(e.red, "red works only with red numbers"));
            }),
            (P.prototype._verify2 = function (e, t) {
              (n(
                0 === (e.negative | t.negative),
                "red works only with positives",
              ),
                n(e.red && e.red === t.red, "red works only with red numbers"));
            }),
            (P.prototype.imod = function (e) {
              return this.prime
                ? this.prime.ireduce(e)._forceRed(this)
                : (h(e, e.umod(this.m)._forceRed(this)), e);
            }),
            (P.prototype.neg = function (e) {
              return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
            }),
            (P.prototype.add = function (e, t) {
              this._verify2(e, t);
              var r = e.add(t);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (P.prototype.iadd = function (e, t) {
              this._verify2(e, t);
              var r = e.iadd(t);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (P.prototype.sub = function (e, t) {
              this._verify2(e, t);
              var r = e.sub(t);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (P.prototype.isub = function (e, t) {
              this._verify2(e, t);
              var r = e.isub(t);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (P.prototype.shl = function (e, t) {
              return (this._verify1(e), this.imod(e.ushln(t)));
            }),
            (P.prototype.imul = function (e, t) {
              return (this._verify2(e, t), this.imod(e.imul(t)));
            }),
            (P.prototype.mul = function (e, t) {
              return (this._verify2(e, t), this.imod(e.mul(t)));
            }),
            (P.prototype.isqr = function (e) {
              return this.imul(e, e.clone());
            }),
            (P.prototype.sqr = function (e) {
              return this.mul(e, e);
            }),
            (P.prototype.sqrt = function (e) {
              if (e.isZero()) return e.clone();
              var t = this.m.andln(3);
              if ((n(t % 2 === 1), 3 === t)) {
                var r = this.m.add(new o(1)).iushrn(2);
                return this.pow(e, r);
              }
              var i = this.m.subn(1),
                s = 0;
              while (!i.isZero() && 0 === i.andln(1)) (s++, i.iushrn(1));
              n(!i.isZero());
              var a = new o(1).toRed(this),
                u = a.redNeg(),
                l = this.m.subn(1).iushrn(1),
                h = this.m.bitLength();
              h = new o(2 * h * h).toRed(this);
              while (0 !== this.pow(h, l).cmp(u)) h.redIAdd(u);
              var f = this.pow(h, i),
                c = this.pow(e, i.addn(1).iushrn(1)),
                d = this.pow(e, i),
                m = s;
              while (0 !== d.cmp(a)) {
                for (var g = d, p = 0; 0 !== g.cmp(a); p++) g = g.redSqr();
                n(p < m);
                var A = this.pow(f, new o(1).iushln(m - p - 1));
                ((c = c.redMul(A)),
                  (f = A.redSqr()),
                  (d = d.redMul(f)),
                  (m = p));
              }
              return c;
            }),
            (P.prototype.invm = function (e) {
              var t = e._invmp(this.m);
              return 0 !== t.negative
                ? ((t.negative = 0), this.imod(t).redNeg())
                : this.imod(t);
            }),
            (P.prototype.pow = function (e, t) {
              if (t.isZero()) return new o(1).toRed(this);
              if (0 === t.cmpn(1)) return e.clone();
              var r = 4,
                n = new Array(1 << r);
              ((n[0] = new o(1).toRed(this)), (n[1] = e));
              for (var i = 2; i < n.length; i++) n[i] = this.mul(n[i - 1], e);
              var s = n[0],
                a = 0,
                u = 0,
                l = t.bitLength() % 26;
              for (0 === l && (l = 26), i = t.length - 1; i >= 0; i--) {
                for (var h = t.words[i], f = l - 1; f >= 0; f--) {
                  var c = (h >> f) & 1;
                  (s !== n[0] && (s = this.sqr(s)),
                    0 !== c || 0 !== a
                      ? ((a <<= 1),
                        (a |= c),
                        u++,
                        (u === r || (0 === i && 0 === f)) &&
                          ((s = this.mul(s, n[a])), (u = 0), (a = 0)))
                      : (u = 0));
                }
                l = 26;
              }
              return s;
            }),
            (P.prototype.convertTo = function (e) {
              var t = e.umod(this.m);
              return t === e ? t.clone() : t;
            }),
            (P.prototype.convertFrom = function (e) {
              var t = e.clone();
              return ((t.red = null), t);
            }),
            (o.mont = function (e) {
              return new F(e);
            }),
            i(F, P),
            (F.prototype.convertTo = function (e) {
              return this.imod(e.ushln(this.shift));
            }),
            (F.prototype.convertFrom = function (e) {
              var t = this.imod(e.mul(this.rinv));
              return ((t.red = null), t);
            }),
            (F.prototype.imul = function (e, t) {
              if (e.isZero() || t.isZero())
                return ((e.words[0] = 0), (e.length = 1), e);
              var r = e.imul(t),
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
            (F.prototype.mul = function (e, t) {
              if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
              var r = e.mul(t),
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
            (F.prototype.invm = function (e) {
              var t = this.imod(e._invmp(this.m).mul(this.r2));
              return t._forceRed(this);
            }));
        })(e, this);
      }).call(this, r(20)(e));
    },
    1459: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FixedNumber = t.FixedFormat = void 0),
        (t.formatFixed = m),
        (t.parseFixed = g));
      var n = r(57),
        i = r(66),
        o = r(525),
        s = r(524);
      const a = new i.Logger(o.version),
        u = {},
        l = s.BigNumber.from(0),
        h = s.BigNumber.from(-1);
      function f(e, t, r, n) {
        const o = { fault: t, operation: r };
        return (
          void 0 !== n && (o.value = n),
          a.throwError(e, i.Logger.errors.NUMERIC_FAULT, o)
        );
      }
      let c = "0";
      while (c.length < 256) c += c;
      function d(e) {
        if ("number" !== typeof e)
          try {
            e = s.BigNumber.from(e).toNumber();
          } catch (t) {}
        return "number" === typeof e && e >= 0 && e <= 256 && !(e % 1)
          ? "1" + c.substring(0, e)
          : a.throwArgumentError("invalid decimal size", "decimals", e);
      }
      function m(e, t) {
        null == t && (t = 0);
        const r = d(t);
        e = s.BigNumber.from(e);
        const n = e.lt(l);
        n && (e = e.mul(h));
        let i = e.mod(r).toString();
        while (i.length < r.length - 1) i = "0" + i;
        i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = e.div(r).toString();
        return ((e = 1 === r.length ? o : o + "." + i), n && (e = "-" + e), e);
      }
      function g(e, t) {
        null == t && (t = 0);
        const r = d(t);
        ("string" === typeof e && e.match(/^-?[0-9.]+$/)) ||
          a.throwArgumentError("invalid decimal value", "value", e);
        const n = "-" === e.substring(0, 1);
        (n && (e = e.substring(1)),
          "." === e && a.throwArgumentError("missing value", "value", e));
        const i = e.split(".");
        i.length > 2 &&
          a.throwArgumentError("too many decimal points", "value", e);
        let o = i[0],
          u = i[1];
        (o || (o = "0"), u || (u = "0"));
        while ("0" === u[u.length - 1]) u = u.substring(0, u.length - 1);
        (u.length > r.length - 1 &&
          f("fractional component exceeds decimals", "underflow", "parseFixed"),
          "" === u && (u = "0"));
        while (u.length < r.length - 1) u += "0";
        const l = s.BigNumber.from(o),
          c = s.BigNumber.from(u);
        let m = l.mul(r).add(c);
        return (n && (m = m.mul(h)), m);
      }
      class FixedFormat {
        constructor(e, t, r, n) {
          (e !== u &&
            a.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.signed = t),
            (this.width = r),
            (this.decimals = n),
            (this.name =
              (t ? "" : "u") + "fixed" + String(r) + "x" + String(n)),
            (this._multiplier = d(n)),
            Object.freeze(this));
        }
        static from(e) {
          if (e instanceof FixedFormat) return e;
          "number" === typeof e && (e = "fixed128x" + e);
          let t = !0,
            r = 128,
            n = 18;
          if ("string" === typeof e)
            if ("fixed" === e);
            else if ("ufixed" === e) t = !1;
            else {
              const i = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              (i || a.throwArgumentError("invalid fixed format", "format", e),
                (t = "u" !== i[1]),
                (r = parseInt(i[2])),
                (n = parseInt(i[3])));
            }
          else if (e) {
            const i = (t, r, n) =>
              null == e[t]
                ? n
                : (typeof e[t] !== r &&
                    a.throwArgumentError(
                      "invalid fixed format (" + t + " not " + r + ")",
                      "format." + t,
                      e[t],
                    ),
                  e[t]);
            ((t = i("signed", "boolean", t)),
              (r = i("width", "number", r)),
              (n = i("decimals", "number", n)));
          }
          return (
            r % 8 &&
              a.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                r,
              ),
            n > 80 &&
              a.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                n,
              ),
            new FixedFormat(u, t, r, n)
          );
        }
      }
      t.FixedFormat = FixedFormat;
      class FixedNumber {
        constructor(e, t, r, n) {
          (e !== u &&
            a.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              i.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.format = n),
            (this._hex = t),
            (this._value = r),
            (this._isFixedNumber = !0),
            Object.freeze(this));
        }
        _checkFormat(e) {
          this.format.name !== e.format.name &&
            a.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              e,
            );
        }
        addUnsafe(e) {
          this._checkFormat(e);
          const t = g(this._value, this.format.decimals),
            r = g(e._value, e.format.decimals);
          return FixedNumber.fromValue(
            t.add(r),
            this.format.decimals,
            this.format,
          );
        }
        subUnsafe(e) {
          this._checkFormat(e);
          const t = g(this._value, this.format.decimals),
            r = g(e._value, e.format.decimals);
          return FixedNumber.fromValue(
            t.sub(r),
            this.format.decimals,
            this.format,
          );
        }
        mulUnsafe(e) {
          this._checkFormat(e);
          const t = g(this._value, this.format.decimals),
            r = g(e._value, e.format.decimals);
          return FixedNumber.fromValue(
            t.mul(r).div(this.format._multiplier),
            this.format.decimals,
            this.format,
          );
        }
        divUnsafe(e) {
          this._checkFormat(e);
          const t = g(this._value, this.format.decimals),
            r = g(e._value, e.format.decimals);
          return FixedNumber.fromValue(
            t.mul(this.format._multiplier).div(r),
            this.format.decimals,
            this.format,
          );
        }
        floor() {
          const e = this.toString().split(".");
          1 === e.length && e.push("0");
          let t = FixedNumber.from(e[0], this.format);
          const r = !e[1].match(/^(0*)$/);
          return (
            this.isNegative() && r && (t = t.subUnsafe(p.toFormat(t.format))),
            t
          );
        }
        ceiling() {
          const e = this.toString().split(".");
          1 === e.length && e.push("0");
          let t = FixedNumber.from(e[0], this.format);
          const r = !e[1].match(/^(0*)$/);
          return (
            !this.isNegative() && r && (t = t.addUnsafe(p.toFormat(t.format))),
            t
          );
        }
        round(e) {
          null == e && (e = 0);
          const t = this.toString().split(".");
          if (
            (1 === t.length && t.push("0"),
            (e < 0 || e > 80 || e % 1) &&
              a.throwArgumentError("invalid decimal count", "decimals", e),
            t[1].length <= e)
          )
            return this;
          const r = FixedNumber.from("1" + c.substring(0, e), this.format),
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
        toHexString(e) {
          if (null == e) return this._hex;
          e % 8 && a.throwArgumentError("invalid byte width", "width", e);
          const t = s.BigNumber.from(this._hex)
            .fromTwos(this.format.width)
            .toTwos(e)
            .toHexString();
          return (0, n.hexZeroPad)(t, e / 8);
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(e) {
          return FixedNumber.fromString(this._value, e);
        }
        static fromValue(e, t, r) {
          return (
            null != r ||
              null == t ||
              (0, s.isBigNumberish)(t) ||
              ((r = t), (t = null)),
            null == t && (t = 0),
            null == r && (r = "fixed"),
            FixedNumber.fromString(m(e, t), FixedFormat.from(r))
          );
        }
        static fromString(e, t) {
          null == t && (t = "fixed");
          const r = FixedFormat.from(t),
            i = g(e, r.decimals);
          !r.signed &&
            i.lt(l) &&
            f("unsigned value cannot be negative", "overflow", "value", e);
          let o = null;
          r.signed
            ? (o = i.toTwos(r.width).toHexString())
            : ((o = i.toHexString()), (o = (0, n.hexZeroPad)(o, r.width / 8)));
          const s = m(i, r.decimals);
          return new FixedNumber(u, o, s, r);
        }
        static fromBytes(e, t) {
          null == t && (t = "fixed");
          const r = FixedFormat.from(t);
          if ((0, n.arrayify)(e).length > r.width / 8)
            throw new Error("overflow");
          let i = s.BigNumber.from(e);
          r.signed && (i = i.fromTwos(r.width));
          const o = i.toTwos((r.signed ? 0 : 1) + r.width).toHexString(),
            a = m(i, r.decimals);
          return new FixedNumber(u, o, a, r);
        }
        static from(e, t) {
          if ("string" === typeof e) return FixedNumber.fromString(e, t);
          if ((0, n.isBytes)(e)) return FixedNumber.fromBytes(e, t);
          try {
            return FixedNumber.fromValue(e, 0, t);
          } catch (r) {
            if (r.code !== i.Logger.errors.INVALID_ARGUMENT) throw r;
          }
          return a.throwArgumentError("invalid FixedNumber value", "value", e);
        }
        static isFixedNumber(e) {
          return !(!e || !e._isFixedNumber);
        }
      }
      t.FixedNumber = FixedNumber;
      const p = FixedNumber.from(1),
        A = FixedNumber.from("0.5");
    },
    1460: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HashZero = void 0));
      t.HashZero =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    1461: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EtherSymbol = void 0));
      t.EtherSymbol = "Ξ";
    },
    1462: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "strings/5.8.0";
    },
    1463: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._nameprepTableA1 = p),
        (t._nameprepTableB2 = A),
        (t._nameprepTableC = y),
        (t.nameprep = v));
      var n = r(279);
      function i(e) {
        if (e.length % 4 !== 0) throw new Error("bad data");
        let t = [];
        for (let r = 0; r < e.length; r += 4)
          t.push(parseInt(e.substring(r, r + 4), 16));
        return t;
      }
      function o(e, t) {
        t ||
          (t = function (e) {
            return [parseInt(e, 16)];
          });
        let r = 0,
          n = {};
        return (
          e.split(",").forEach((e) => {
            let i = e.split(":");
            ((r += parseInt(i[0], 16)), (n[r] = t(i[1])));
          }),
          n
        );
      }
      function s(e) {
        let t = 0;
        return e.split(",").map((e) => {
          let r = e.split("-");
          1 === r.length ? (r[1] = "0") : "" === r[1] && (r[1] = "1");
          let n = t + parseInt(r[0], 16);
          return ((t = parseInt(r[1], 16)), { l: n, h: t });
        });
      }
      function a(e, t) {
        let r = 0;
        for (let n = 0; n < t.length; n++) {
          let i = t[n];
          if (
            ((r += i.l), e >= r && e <= r + i.h && (e - r) % (i.d || 1) === 0)
          ) {
            if (i.e && -1 !== i.e.indexOf(e - r)) continue;
            return i;
          }
        }
        return null;
      }
      const u = s(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d",
        ),
        l = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
          .split(",")
          .map((e) => parseInt(e, 16)),
        h = [
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
        d = o(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          i,
        ),
        m = s(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001",
        );
      function g(e) {
        return e.reduce(
          (e, t) => (
            t.forEach((t) => {
              e.push(t);
            }),
            e
          ),
          [],
        );
      }
      function p(e) {
        return !!a(e, u);
      }
      function A(e) {
        let t = a(e, h);
        if (t) return [e + t.s];
        let r = f[e];
        if (r) return r;
        let n = c[e];
        if (n) return [e + n[0]];
        let i = d[e];
        return i || null;
      }
      function y(e) {
        return !!a(e, m);
      }
      function v(e) {
        if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
        let t = (0, n.toUtf8CodePoints)(e);
        ((t = g(
          t.map((e) => {
            if (l.indexOf(e) >= 0) return [];
            if (e >= 65024 && e <= 65039) return [];
            let t = A(e);
            return t || [e];
          }),
        )),
          (t = (0, n.toUtf8CodePoints)(
            (0, n._toUtf8String)(t),
            n.UnicodeNormalizationForm.NFKC,
          )),
          t.forEach((e) => {
            if (y(e)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
          }),
          t.forEach((e) => {
            if (p(e)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
          }));
        let r = (0, n._toUtf8String)(t);
        if (
          "-" === r.substring(0, 1) ||
          "--" === r.substring(2, 4) ||
          "-" === r.substring(r.length - 1)
        )
          throw new Error("invalid hyphen");
        return r;
      }
    },
    1464: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.dnsEncode = p),
        (t.ensNormalize = d),
        (t.isValidName = m),
        (t.namehash = g));
      var n = r(57),
        i = r(175),
        o = r(141),
        s = r(66),
        a = r(526),
        u = r(1465);
      const l = new s.Logger(a.version),
        h = new Uint8Array(32);
      function f(e) {
        if (0 === e.length)
          throw new Error("invalid ENS name; empty component");
        return e;
      }
      function c(e) {
        const t = (0, i.toUtf8Bytes)((0, u.ens_normalize)(e)),
          r = [];
        if (0 === e.length) return r;
        let n = 0;
        for (let i = 0; i < t.length; i++) {
          const e = t[i];
          46 === e && (r.push(f(t.slice(n, i))), (n = i + 1));
        }
        if (n >= t.length) throw new Error("invalid ENS name; empty component");
        return (r.push(f(t.slice(n))), r);
      }
      function d(e) {
        return c(e)
          .map((e) => (0, i.toUtf8String)(e))
          .join(".");
      }
      function m(e) {
        try {
          return 0 !== c(e).length;
        } catch (t) {}
        return !1;
      }
      function g(e) {
        "string" !== typeof e &&
          l.throwArgumentError("invalid ENS name; not a string", "name", e);
        let t = h;
        const r = c(e);
        while (r.length)
          t = (0, o.keccak256)((0, n.concat)([t, (0, o.keccak256)(r.pop())]));
        return (0, n.hexlify)(t);
      }
      function p(e) {
        return (
          (0, n.hexlify)(
            (0, n.concat)(
              c(e).map((e) => {
                if (e.length > 63)
                  throw new Error(
                    "invalid DNS encoded entry; length exceeds 63 bytes",
                  );
                const t = new Uint8Array(e.length + 1);
                return (t.set(e, 1), (t[0] = t.length - 1), t);
              }),
            ),
          ) + "00"
        );
      }
      h.fill(0);
    },
    1465: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ens_normalize = p),
        (t.ens_normalize_post_check = g));
      var n = r(175),
        i = r(1466),
        o = r(527);
      const s = (0, i.getData)(),
        a = new Set((0, o.read_member_array)(s)),
        u = new Set((0, o.read_member_array)(s)),
        l = (0, o.read_mapped_map)(s),
        h = (0, o.read_emoji_trie)(s),
        f = 45,
        c = 95;
      function d(e) {
        return (0, n.toUtf8CodePoints)(e);
      }
      function m(e) {
        return e.filter((e) => 65039 != e);
      }
      function g(e) {
        for (let r of e.split(".")) {
          let e = d(r);
          try {
            for (let t = e.lastIndexOf(c) - 1; t >= 0; t--)
              if (e[t] !== c)
                throw new Error("underscore only allowed at start");
            if (
              e.length >= 4 &&
              e.every((e) => e < 128) &&
              e[2] === f &&
              e[3] === f
            )
              throw new Error("invalid label extension");
          } catch (t) {
            throw new Error(`Invalid label "${r}": ${t.message}`);
          }
        }
        return e;
      }
      function p(e) {
        return g(A(e, m));
      }
      function A(e, t) {
        let r = d(e).reverse(),
          n = [];
        while (r.length) {
          let e = v(r);
          if (e) {
            n.push(...t(e));
            continue;
          }
          let i = r.pop();
          if (a.has(i)) {
            n.push(i);
            continue;
          }
          if (u.has(i)) continue;
          let o = l[i];
          if (!o)
            throw new Error(
              "Disallowed codepoint: 0x" + i.toString(16).toUpperCase(),
            );
          n.push(...o);
        }
        return g(y(String.fromCodePoint(...n)));
      }
      function y(e) {
        return e.normalize("NFC");
      }
      function v(e, t) {
        var r;
        let n,
          i,
          o = h,
          s = [],
          a = e.length;
        t && (t.length = 0);
        while (a) {
          let u = e[--a];
          if (
            ((o =
              null === (r = o.branches.find((e) => e.set.has(u))) ||
              void 0 === r
                ? void 0
                : r.node),
            !o)
          )
            break;
          if (o.save) i = u;
          else if (o.check && u === i) break;
          (s.push(u),
            o.fe0f && (s.push(65039), a > 0 && 65039 == e[a - 1] && a--),
            o.valid &&
              ((n = s.slice()),
              2 == o.valid && n.splice(1, 1),
              t && t.push(...e.slice(a).reverse()),
              (e.length = a)));
        }
        return n;
      }
    },
    1466: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getData = o));
      var n = r(1467),
        i = r(527);
      function o() {
        return (0, i.read_compressed_payload)(
          (0, n.decode)(
            "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",
          ),
        );
      }
    },
    1467: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "decode", {
          enumerable: !0,
          get: function () {
            return n.decode;
          },
        }),
        Object.defineProperty(t, "encode", {
          enumerable: !0,
          get: function () {
            return n.encode;
          },
        }));
      var n = r(1468);
    },
    1468: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decode = i),
        (t.encode = o));
      var n = r(57);
      function i(e) {
        e = atob(e);
        const t = [];
        for (let r = 0; r < e.length; r++) t.push(e.charCodeAt(r));
        return (0, n.arrayify)(t);
      }
      function o(e) {
        e = (0, n.arrayify)(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
        return btoa(t);
      }
    },
    1469: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hashMessage = a),
        (t.messagePrefix = void 0));
      var n = r(57),
        i = r(141),
        o = r(175);
      const s = (t.messagePrefix = "Ethereum Signed Message:\n");
      function a(e) {
        return (
          "string" === typeof e && (e = (0, o.toUtf8Bytes)(e)),
          (0, i.keccak256)(
            (0, n.concat)([
              (0, o.toUtf8Bytes)(s),
              (0, o.toUtf8Bytes)(String(e.length)),
              e,
            ]),
          )
        );
      }
    },
    1470: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TypedDataEncoder = void 0));
      var n = r(1471),
        i = r(278),
        o = r(57),
        s = r(141),
        a = r(528),
        u = r(66),
        l = r(526),
        h = r(523),
        f = function (e, t, r, n) {
          function i(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function s(e) {
              try {
                u(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function a(e) {
              try {
                u(n["throw"](e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              e.done ? r(e.value) : i(e.value).then(s, a);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      const c = new u.Logger(l.version),
        d = new Uint8Array(32);
      d.fill(0);
      const m = i.BigNumber.from(-1),
        g = i.BigNumber.from(0),
        p = i.BigNumber.from(1),
        A = i.BigNumber.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        );
      function y(e) {
        const t = (0, o.arrayify)(e),
          r = t.length % 32;
        return r ? (0, o.hexConcat)([t, d.slice(r)]) : (0, o.hexlify)(t);
      }
      const v = (0, o.hexZeroPad)(p.toHexString(), 32),
        w = (0, o.hexZeroPad)(g.toHexString(), 32),
        b = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        M = ["name", "version", "chainId", "verifyingContract", "salt"];
      function E(e) {
        return function (t) {
          return (
            "string" !== typeof t &&
              c.throwArgumentError(
                "invalid domain value for " + JSON.stringify(e),
                "domain." + e,
                t,
              ),
            t
          );
        };
      }
      const B = {
        name: E("name"),
        version: E("version"),
        chainId: function (e) {
          try {
            return i.BigNumber.from(e).toString();
          } catch (t) {}
          return c.throwArgumentError(
            'invalid domain value for "chainId"',
            "domain.chainId",
            e,
          );
        },
        verifyingContract: function (e) {
          try {
            return (0, n.getAddress)(e).toLowerCase();
          } catch (t) {}
          return c.throwArgumentError(
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            e,
          );
        },
        salt: function (e) {
          try {
            const t = (0, o.arrayify)(e);
            if (32 !== t.length) throw new Error("bad length");
            return (0, o.hexlify)(t);
          } catch (t) {}
          return c.throwArgumentError(
            'invalid domain value "salt"',
            "domain.salt",
            e,
          );
        },
      };
      function S(e) {
        {
          const t = e.match(/^(u?)int(\d*)$/);
          if (t) {
            const r = "" === t[1],
              n = parseInt(t[2] || "256");
            (n % 8 !== 0 || n > 256 || (t[2] && t[2] !== String(n))) &&
              c.throwArgumentError("invalid numeric width", "type", e);
            const s = A.mask(r ? n - 1 : n),
              a = r ? s.add(p).mul(m) : g;
            return function (t) {
              const r = i.BigNumber.from(t);
              return (
                (r.lt(a) || r.gt(s)) &&
                  c.throwArgumentError(
                    "value out-of-bounds for " + e,
                    "value",
                    t,
                  ),
                (0, o.hexZeroPad)(r.toTwos(256).toHexString(), 32)
              );
            };
          }
        }
        {
          const t = e.match(/^bytes(\d+)$/);
          if (t) {
            const r = parseInt(t[1]);
            return (
              (0 === r || r > 32 || t[1] !== String(r)) &&
                c.throwArgumentError("invalid bytes width", "type", e),
              function (t) {
                const n = (0, o.arrayify)(t);
                return (
                  n.length !== r &&
                    c.throwArgumentError("invalid length for " + e, "value", t),
                  y(t)
                );
              }
            );
          }
        }
        switch (e) {
          case "address":
            return function (e) {
              return (0, o.hexZeroPad)((0, n.getAddress)(e), 32);
            };
          case "bool":
            return function (e) {
              return e ? v : w;
            };
          case "bytes":
            return function (e) {
              return (0, s.keccak256)(e);
            };
          case "string":
            return function (e) {
              return (0, h.id)(e);
            };
        }
        return null;
      }
      function C(e, t) {
        return `${e}(${t
          .map((e) => {
            let { name: t, type: r } = e;
            return r + " " + t;
          })
          .join(",")})`;
      }
      class TypedDataEncoder {
        constructor(e) {
          ((0, a.defineReadOnly)(
            this,
            "types",
            Object.freeze((0, a.deepCopy)(e)),
          ),
            (0, a.defineReadOnly)(this, "_encoderCache", {}),
            (0, a.defineReadOnly)(this, "_types", {}));
          const t = {},
            r = {},
            n = {};
          Object.keys(e).forEach((e) => {
            ((t[e] = {}), (r[e] = []), (n[e] = {}));
          });
          for (const s in e) {
            const n = {};
            e[s].forEach((i) => {
              (n[i.name] &&
                c.throwArgumentError(
                  `duplicate variable name ${JSON.stringify(i.name)} in ${JSON.stringify(s)}`,
                  "types",
                  e,
                ),
                (n[i.name] = !0));
              const o = i.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              o === s &&
                c.throwArgumentError(
                  "circular type reference to " + JSON.stringify(o),
                  "types",
                  e,
                );
              const a = S(o);
              a ||
                (r[o] ||
                  c.throwArgumentError(
                    "unknown type " + JSON.stringify(o),
                    "types",
                    e,
                  ),
                r[o].push(s),
                (t[s][o] = !0));
            });
          }
          const i = Object.keys(r).filter((e) => 0 === r[e].length);
          function o(i, s) {
            (s[i] &&
              c.throwArgumentError(
                "circular type reference to " + JSON.stringify(i),
                "types",
                e,
              ),
              (s[i] = !0),
              Object.keys(t[i]).forEach((e) => {
                r[e] &&
                  (o(e, s),
                  Object.keys(s).forEach((t) => {
                    n[t][e] = !0;
                  }));
              }),
              delete s[i]);
          }
          (0 === i.length
            ? c.throwArgumentError("missing primary type", "types", e)
            : i.length > 1 &&
              c.throwArgumentError(
                "ambiguous primary types or unused types: " +
                  i.map((e) => JSON.stringify(e)).join(", "),
                "types",
                e,
              ),
            (0, a.defineReadOnly)(this, "primaryType", i[0]),
            o(this.primaryType, {}));
          for (const s in n) {
            const t = Object.keys(n[s]);
            (t.sort(),
              (this._types[s] =
                C(s, e[s]) + t.map((t) => C(t, e[t])).join("")));
          }
        }
        getEncoder(e) {
          let t = this._encoderCache[e];
          return (t || (t = this._encoderCache[e] = this._getEncoder(e)), t);
        }
        _getEncoder(e) {
          {
            const t = S(e);
            if (t) return t;
          }
          const t = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (t) {
            const e = t[1],
              r = this.getEncoder(e),
              n = parseInt(t[3]);
            return (t) => {
              n >= 0 &&
                t.length !== n &&
                c.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  t,
                );
              let i = t.map(r);
              return (
                this._types[e] && (i = i.map(s.keccak256)),
                (0, s.keccak256)((0, o.hexConcat)(i))
              );
            };
          }
          const r = this.types[e];
          if (r) {
            const t = (0, h.id)(this._types[e]);
            return (e) => {
              const n = r.map((t) => {
                let { name: r, type: n } = t;
                const i = this.getEncoder(n)(e[r]);
                return this._types[n] ? (0, s.keccak256)(i) : i;
              });
              return (n.unshift(t), (0, o.hexConcat)(n));
            };
          }
          return c.throwArgumentError("unknown type: " + e, "type", e);
        }
        encodeType(e) {
          const t = this._types[e];
          return (
            t ||
              c.throwArgumentError(
                "unknown type: " + JSON.stringify(e),
                "name",
                e,
              ),
            t
          );
        }
        encodeData(e, t) {
          return this.getEncoder(e)(t);
        }
        hashStruct(e, t) {
          return (0, s.keccak256)(this.encodeData(e, t));
        }
        encode(e) {
          return this.encodeData(this.primaryType, e);
        }
        hash(e) {
          return this.hashStruct(this.primaryType, e);
        }
        _visit(e, t, r) {
          {
            const n = S(e);
            if (n) return r(e, t);
          }
          const n = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            const e = n[1],
              i = parseInt(n[3]);
            return (
              i >= 0 &&
                t.length !== i &&
                c.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  t,
                ),
              t.map((t) => this._visit(e, t, r))
            );
          }
          const i = this.types[e];
          return i
            ? i.reduce((e, n) => {
                let { name: i, type: o } = n;
                return ((e[i] = this._visit(o, t[i], r)), e);
              }, {})
            : c.throwArgumentError("unknown type: " + e, "type", e);
        }
        visit(e, t) {
          return this._visit(this.primaryType, e, t);
        }
        static from(e) {
          return new TypedDataEncoder(e);
        }
        static getPrimaryType(e) {
          return TypedDataEncoder.from(e).primaryType;
        }
        static hashStruct(e, t, r) {
          return TypedDataEncoder.from(t).hashStruct(e, r);
        }
        static hashDomain(e) {
          const t = [];
          for (const r in e) {
            const n = b[r];
            (n ||
              c.throwArgumentError(
                "invalid typed-data domain key: " + JSON.stringify(r),
                "domain",
                e,
              ),
              t.push({ name: r, type: n }));
          }
          return (
            t.sort((e, t) => M.indexOf(e.name) - M.indexOf(t.name)),
            TypedDataEncoder.hashStruct("EIP712Domain", { EIP712Domain: t }, e)
          );
        }
        static encode(e, t, r) {
          return (0, o.hexConcat)([
            "0x1901",
            TypedDataEncoder.hashDomain(e),
            TypedDataEncoder.from(t).hash(r),
          ]);
        }
        static hash(e, t, r) {
          return (0, s.keccak256)(TypedDataEncoder.encode(e, t, r));
        }
        static resolveNames(e, t, r, n) {
          return f(this, void 0, void 0, function* () {
            e = (0, a.shallowCopy)(e);
            const i = {};
            e.verifyingContract &&
              !(0, o.isHexString)(e.verifyingContract, 20) &&
              (i[e.verifyingContract] = "0x");
            const s = TypedDataEncoder.from(t);
            s.visit(
              r,
              (e, t) => (
                "address" !== e || (0, o.isHexString)(t, 20) || (i[t] = "0x"),
                t
              ),
            );
            for (const e in i) i[e] = yield n(e);
            return (
              e.verifyingContract &&
                i[e.verifyingContract] &&
                (e.verifyingContract = i[e.verifyingContract]),
              (r = s.visit(r, (e, t) => ("address" === e && i[t] ? i[t] : t))),
              { domain: e, value: r }
            );
          });
        }
        static getPayload(e, t, r) {
          TypedDataEncoder.hashDomain(e);
          const n = {},
            s = [];
          M.forEach((t) => {
            const r = e[t];
            null != r && ((n[t] = B[t](r)), s.push({ name: t, type: b[t] }));
          });
          const u = TypedDataEncoder.from(t),
            l = (0, a.shallowCopy)(t);
          return (
            l.EIP712Domain
              ? c.throwArgumentError(
                  "types must not contain EIP712Domain type",
                  "types.EIP712Domain",
                  t,
                )
              : (l.EIP712Domain = s),
            u.encode(r),
            {
              types: l,
              domain: n,
              primaryType: u.primaryType,
              message: u.visit(r, (e, t) => {
                if (e.match(/^bytes(\d*)/))
                  return (0, o.hexlify)((0, o.arrayify)(t));
                if (e.match(/^u?int/)) return i.BigNumber.from(t).toString();
                switch (e) {
                  case "address":
                    return t.toLowerCase();
                  case "bool":
                    return !!t;
                  case "string":
                    return (
                      "string" !== typeof t &&
                        c.throwArgumentError("invalid string", "value", t),
                      t
                    );
                }
                return c.throwArgumentError("unsupported type", "type", e);
              }),
            }
          );
        }
      }
      t.TypedDataEncoder = TypedDataEncoder;
    },
    1471: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getAddress = p),
        (t.getContractAddress = v),
        (t.getCreate2Address = w),
        (t.getIcapAddress = y),
        (t.isAddress = A));
      var n = r(57),
        i = r(278),
        o = r(141),
        s = r(1472),
        a = r(66),
        u = r(1474);
      const l = new a.Logger(u.version);
      function h(e) {
        ((0, n.isHexString)(e, 20) ||
          l.throwArgumentError("invalid address", "address", e),
          (e = e.toLowerCase()));
        const t = e.substring(2).split(""),
          r = new Uint8Array(40);
        for (let n = 0; n < 40; n++) r[n] = t[n].charCodeAt(0);
        const i = (0, n.arrayify)((0, o.keccak256)(r));
        for (let n = 0; n < 40; n += 2)
          (i[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()),
            (15 & i[n >> 1]) >= 8 && (t[n + 1] = t[n + 1].toUpperCase()));
        return "0x" + t.join("");
      }
      const f = 9007199254740991;
      function c(e) {
        return Math.log10 ? Math.log10(e) : Math.log(e) / Math.LN10;
      }
      const d = {};
      for (let b = 0; b < 10; b++) d[String(b)] = String(b);
      for (let b = 0; b < 26; b++)
        d[String.fromCharCode(65 + b)] = String(10 + b);
      const m = Math.floor(c(f));
      function g(e) {
        ((e = e.toUpperCase()),
          (e = e.substring(4) + e.substring(0, 2) + "00"));
        let t = e
          .split("")
          .map((e) => d[e])
          .join("");
        while (t.length >= m) {
          let e = t.substring(0, m);
          t = (parseInt(e, 10) % 97) + t.substring(e.length);
        }
        let r = String(98 - (parseInt(t, 10) % 97));
        while (r.length < 2) r = "0" + r;
        return r;
      }
      function p(e) {
        let t = null;
        if (
          ("string" !== typeof e &&
            l.throwArgumentError("invalid address", "address", e),
          e.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          ("0x" !== e.substring(0, 2) && (e = "0x" + e),
            (t = h(e)),
            e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              t !== e &&
              l.throwArgumentError("bad address checksum", "address", e));
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          (e.substring(2, 4) !== g(e) &&
            l.throwArgumentError("bad icap checksum", "address", e),
            (t = (0, i._base36To16)(e.substring(4))));
          while (t.length < 40) t = "0" + t;
          t = h("0x" + t);
        } else l.throwArgumentError("invalid address", "address", e);
        return t;
      }
      function A(e) {
        try {
          return (p(e), !0);
        } catch (t) {}
        return !1;
      }
      function y(e) {
        let t = (0, i._base16To36)(p(e).substring(2)).toUpperCase();
        while (t.length < 30) t = "0" + t;
        return "XE" + g("XE00" + t) + t;
      }
      function v(e) {
        let t = null;
        try {
          t = p(e.from);
        } catch (a) {
          l.throwArgumentError("missing from address", "transaction", e);
        }
        const r = (0, n.stripZeros)(
          (0, n.arrayify)(i.BigNumber.from(e.nonce).toHexString()),
        );
        return p(
          (0, n.hexDataSlice)((0, o.keccak256)((0, s.encode)([t, r])), 12),
        );
      }
      function w(e, t, r) {
        return (
          32 !== (0, n.hexDataLength)(t) &&
            l.throwArgumentError("salt must be 32 bytes", "salt", t),
          32 !== (0, n.hexDataLength)(r) &&
            l.throwArgumentError(
              "initCodeHash must be 32 bytes",
              "initCodeHash",
              r,
            ),
          p(
            (0, n.hexDataSlice)(
              (0, o.keccak256)((0, n.concat)(["0xff", p(e), t, r])),
              12,
            ),
          )
        );
      }
    },
    1472: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decode = d),
        (t.encode = h));
      var n = r(57),
        i = r(66),
        o = r(1473);
      const s = new i.Logger(o.version);
      function a(e) {
        const t = [];
        while (e) (t.unshift(255 & e), (e >>= 8));
        return t;
      }
      function u(e, t, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + e[t + i];
        return n;
      }
      function l(e) {
        if (Array.isArray(e)) {
          let t = [];
          if (
            (e.forEach(function (e) {
              t = t.concat(l(e));
            }),
            t.length <= 55)
          )
            return (t.unshift(192 + t.length), t);
          const r = a(t.length);
          return (r.unshift(247 + r.length), r.concat(t));
        }
        (0, n.isBytesLike)(e) ||
          s.throwArgumentError("RLP object must be BytesLike", "object", e);
        const t = Array.prototype.slice.call((0, n.arrayify)(e));
        if (1 === t.length && t[0] <= 127) return t;
        if (t.length <= 55) return (t.unshift(128 + t.length), t);
        const r = a(t.length);
        return (r.unshift(183 + r.length), r.concat(t));
      }
      function h(e) {
        return (0, n.hexlify)(l(e));
      }
      function f(e, t, r, n) {
        const o = [];
        while (r < t + 1 + n) {
          const a = c(e, r);
          (o.push(a.result),
            (r += a.consumed),
            r > t + 1 + n &&
              s.throwError(
                "child data too short",
                i.Logger.errors.BUFFER_OVERRUN,
                {},
              ));
        }
        return { consumed: 1 + n, result: o };
      }
      function c(e, t) {
        if (
          (0 === e.length &&
            s.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {}),
          e[t] >= 248)
        ) {
          const r = e[t] - 247;
          t + 1 + r > e.length &&
            s.throwError(
              "data short segment too short",
              i.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const n = u(e, t + 1, r);
          return (
            t + 1 + r + n > e.length &&
              s.throwError(
                "data long segment too short",
                i.Logger.errors.BUFFER_OVERRUN,
                {},
              ),
            f(e, t, t + 1 + r, r + n)
          );
        }
        if (e[t] >= 192) {
          const r = e[t] - 192;
          return (
            t + 1 + r > e.length &&
              s.throwError(
                "data array too short",
                i.Logger.errors.BUFFER_OVERRUN,
                {},
              ),
            f(e, t, t + 1, r)
          );
        }
        if (e[t] >= 184) {
          const r = e[t] - 183;
          t + 1 + r > e.length &&
            s.throwError(
              "data array too short",
              i.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const o = u(e, t + 1, r);
          t + 1 + r + o > e.length &&
            s.throwError(
              "data array too short",
              i.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const a = (0, n.hexlify)(e.slice(t + 1 + r, t + 1 + r + o));
          return { consumed: 1 + r + o, result: a };
        }
        if (e[t] >= 128) {
          const r = e[t] - 128;
          t + 1 + r > e.length &&
            s.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {});
          const o = (0, n.hexlify)(e.slice(t + 1, t + 1 + r));
          return { consumed: 1 + r, result: o };
        }
        return { consumed: 1, result: (0, n.hexlify)(e[t]) };
      }
      function d(e) {
        const t = (0, n.arrayify)(e),
          r = c(t, 0);
        return (
          r.consumed !== t.length &&
            s.throwArgumentError("invalid rlp data", "data", e),
          r.result
        );
      }
    },
    1473: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "rlp/5.8.0";
    },
    1474: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "address/5.8.0";
    },
    1475: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "properties/5.8.0";
    },
    1476: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "wordlists/5.7.0";
    },
    1477: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.wordlists = void 0));
      var n = r(1478);
      t.wordlists = { en: n.langEn };
    },
    1478: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.langEn = void 0));
      var n = r(522);
      const i =
        "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo";
      let o = null;
      function s(e) {
        if (
          null == o &&
          ((o = i
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()
            .substring(1)
            .split(" ")),
          "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !==
            n.Wordlist.check(e))
        )
          throw (
            (o = null),
            new Error("BIP39 Wordlist for en (English) FAILED")
          );
      }
      class LangEn extends n.Wordlist {
        constructor() {
          super("en");
        }
        getWord(e) {
          return (s(this), o[e]);
        }
        getWordIndex(e) {
          return (s(this), o.indexOf(e));
        }
      }
      const a = (t.langEn = new LangEn());
      n.Wordlist.register(a);
    },
    175: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "UnicodeNormalizationForm", {
          enumerable: !0,
          get: function () {
            return o.UnicodeNormalizationForm;
          },
        }),
        Object.defineProperty(t, "Utf8ErrorFuncs", {
          enumerable: !0,
          get: function () {
            return o.Utf8ErrorFuncs;
          },
        }),
        Object.defineProperty(t, "Utf8ErrorReason", {
          enumerable: !0,
          get: function () {
            return o.Utf8ErrorReason;
          },
        }),
        Object.defineProperty(t, "_toEscapedUtf8String", {
          enumerable: !0,
          get: function () {
            return o._toEscapedUtf8String;
          },
        }),
        Object.defineProperty(t, "formatBytes32String", {
          enumerable: !0,
          get: function () {
            return n.formatBytes32String;
          },
        }),
        Object.defineProperty(t, "nameprep", {
          enumerable: !0,
          get: function () {
            return i.nameprep;
          },
        }),
        Object.defineProperty(t, "parseBytes32String", {
          enumerable: !0,
          get: function () {
            return n.parseBytes32String;
          },
        }),
        Object.defineProperty(t, "toUtf8Bytes", {
          enumerable: !0,
          get: function () {
            return o.toUtf8Bytes;
          },
        }),
        Object.defineProperty(t, "toUtf8CodePoints", {
          enumerable: !0,
          get: function () {
            return o.toUtf8CodePoints;
          },
        }),
        Object.defineProperty(t, "toUtf8String", {
          enumerable: !0,
          get: function () {
            return o.toUtf8String;
          },
        }));
      var n = r(1453),
        i = r(1463),
        o = r(279);
    },
    278: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BigNumber", {
          enumerable: !0,
          get: function () {
            return n.BigNumber;
          },
        }),
        Object.defineProperty(t, "FixedFormat", {
          enumerable: !0,
          get: function () {
            return i.FixedFormat;
          },
        }),
        Object.defineProperty(t, "FixedNumber", {
          enumerable: !0,
          get: function () {
            return i.FixedNumber;
          },
        }),
        Object.defineProperty(t, "_base16To36", {
          enumerable: !0,
          get: function () {
            return n._base16To36;
          },
        }),
        Object.defineProperty(t, "_base36To16", {
          enumerable: !0,
          get: function () {
            return n._base36To16;
          },
        }),
        Object.defineProperty(t, "formatFixed", {
          enumerable: !0,
          get: function () {
            return i.formatFixed;
          },
        }),
        Object.defineProperty(t, "parseFixed", {
          enumerable: !0,
          get: function () {
            return i.parseFixed;
          },
        }));
      var n = r(524),
        i = r(1459);
    },
    279: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Utf8ErrorReason =
          t.Utf8ErrorFuncs =
          t.UnicodeNormalizationForm =
            void 0),
        (t._toEscapedUtf8String = p),
        (t._toUtf8String = A),
        (t.toUtf8Bytes = m),
        (t.toUtf8CodePoints = v),
        (t.toUtf8String = y));
      var n = r(57),
        i = r(66),
        o = r(1462);
      const s = new i.Logger(o.version);
      var a, u;
      function l(e, t, r, n, i) {
        return s.throwArgumentError(
          `invalid codepoint at offset ${t}; ${e}`,
          "bytes",
          r,
        );
      }
      function h(e, t, r, n, i) {
        if (e === u.BAD_PREFIX || e === u.UNEXPECTED_CONTINUE) {
          let e = 0;
          for (let n = t + 1; n < r.length; n++) {
            if (r[n] >> 6 !== 2) break;
            e++;
          }
          return e;
        }
        return e === u.OVERRUN ? r.length - t - 1 : 0;
      }
      function f(e, t, r, n, i) {
        return e === u.OVERLONG
          ? (n.push(i), 0)
          : (n.push(65533), h(e, t, r, n, i));
      }
      ((function (e) {
        ((e["current"] = ""),
          (e["NFC"] = "NFC"),
          (e["NFD"] = "NFD"),
          (e["NFKC"] = "NFKC"),
          (e["NFKD"] = "NFKD"));
      })(a || (t.UnicodeNormalizationForm = a = {})),
        (function (e) {
          ((e["UNEXPECTED_CONTINUE"] = "unexpected continuation byte"),
            (e["BAD_PREFIX"] = "bad codepoint prefix"),
            (e["OVERRUN"] = "string overrun"),
            (e["MISSING_CONTINUE"] = "missing continuation byte"),
            (e["OUT_OF_RANGE"] = "out of UTF-8 range"),
            (e["UTF16_SURROGATE"] = "UTF-16 surrogate"),
            (e["OVERLONG"] = "overlong representation"));
        })(u || (t.Utf8ErrorReason = u = {})));
      const c = (t.Utf8ErrorFuncs = Object.freeze({
        error: l,
        ignore: h,
        replace: f,
      }));
      function d(e, t) {
        (null == t && (t = c.error), (e = (0, n.arrayify)(e)));
        const r = [];
        let i = 0;
        while (i < e.length) {
          const n = e[i++];
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
              i += t(
                128 === (192 & n) ? u.UNEXPECTED_CONTINUE : u.BAD_PREFIX,
                i - 1,
                e,
                r,
              );
              continue;
            }
            ((o = 3), (s = 65535));
          }
          if (i - 1 + o >= e.length) {
            i += t(u.OVERRUN, i - 1, e, r);
            continue;
          }
          let a = n & ((1 << (8 - o - 1)) - 1);
          for (let l = 0; l < o; l++) {
            let n = e[i];
            if (128 != (192 & n)) {
              ((i += t(u.MISSING_CONTINUE, i, e, r)), (a = null));
              break;
            }
            ((a = (a << 6) | (63 & n)), i++);
          }
          null !== a &&
            (a > 1114111
              ? (i += t(u.OUT_OF_RANGE, i - 1 - o, e, r, a))
              : a >= 55296 && a <= 57343
                ? (i += t(u.UTF16_SURROGATE, i - 1 - o, e, r, a))
                : a <= s
                  ? (i += t(u.OVERLONG, i - 1 - o, e, r, a))
                  : r.push(a));
        }
        return r;
      }
      function m(e, t) {
        (void 0 === t && (t = a.current),
          t != a.current && (s.checkNormalize(), (e = e.normalize(t))));
        let r = [];
        for (let n = 0; n < e.length; n++) {
          const t = e.charCodeAt(n);
          if (t < 128) r.push(t);
          else if (t < 2048) (r.push((t >> 6) | 192), r.push((63 & t) | 128));
          else if (55296 == (64512 & t)) {
            n++;
            const i = e.charCodeAt(n);
            if (n >= e.length || 56320 !== (64512 & i))
              throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & t) << 10) + (1023 & i);
            (r.push((o >> 18) | 240),
              r.push(((o >> 12) & 63) | 128),
              r.push(((o >> 6) & 63) | 128),
              r.push((63 & o) | 128));
          } else
            (r.push((t >> 12) | 224),
              r.push(((t >> 6) & 63) | 128),
              r.push((63 & t) | 128));
        }
        return (0, n.arrayify)(r);
      }
      function g(e) {
        const t = "0000" + e.toString(16);
        return "\\u" + t.substring(t.length - 4);
      }
      function p(e, t) {
        return (
          '"' +
          d(e, t)
            .map((e) => {
              if (e < 256) {
                switch (e) {
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
                if (e >= 32 && e < 127) return String.fromCharCode(e);
              }
              return e <= 65535
                ? g(e)
                : ((e -= 65536),
                  g(55296 + ((e >> 10) & 1023)) + g(56320 + (1023 & e)));
            })
            .join("") +
          '"'
        );
      }
      function A(e) {
        return e
          .map((e) =>
            e <= 65535
              ? String.fromCharCode(e)
              : ((e -= 65536),
                String.fromCharCode(
                  55296 + ((e >> 10) & 1023),
                  56320 + (1023 & e),
                )),
          )
          .join("");
      }
      function y(e, t) {
        return A(d(e, t));
      }
      function v(e, t) {
        return (void 0 === t && (t = a.current), d(m(e, t)));
      }
    },
    522: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.logger = t.Wordlist = void 0));
      var n = r(1450),
        i = r(528),
        o = r(66),
        s = r(1476);
      const a = !1,
        u = (t.logger = new o.Logger(s.version));
      class Wordlist {
        constructor(e) {
          (u.checkAbstract(new.target, Wordlist),
            (0, i.defineReadOnly)(this, "locale", e));
        }
        split(e) {
          return e.toLowerCase().split(/ +/g);
        }
        join(e) {
          return e.join(" ");
        }
        static check(e) {
          const t = [];
          for (let r = 0; r < 2048; r++) {
            const n = e.getWord(r);
            if (r !== e.getWordIndex(n)) return "0x";
            t.push(n);
          }
          return (0, n.id)(t.join("\n") + "\n");
        }
        static register(e, t) {
          if ((t || (t = e.locale), a))
            try {
              const r = window;
              r._ethers &&
                r._ethers.wordlists &&
                (r._ethers.wordlists[t] ||
                  (0, i.defineReadOnly)(r._ethers.wordlists, t, e));
            } catch (r) {}
        }
      }
      t.Wordlist = Wordlist;
    },
    523: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.id = o));
      var n = r(141),
        i = r(175);
      function o(e) {
        return (0, n.keccak256)((0, i.toUtf8Bytes)(e));
      }
    },
    524: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BigNumber = void 0),
        (t._base16To36 = v),
        (t._base36To16 = y),
        (t.isBigNumberish = c));
      var i = n(r(1457)),
        o = r(57),
        s = r(66),
        a = r(525),
        u = i.default.BN;
      const l = new s.Logger(a.version),
        h = {},
        f = 9007199254740991;
      function c(e) {
        return (
          null != e &&
          (BigNumber.isBigNumber(e) ||
            ("number" === typeof e && e % 1 === 0) ||
            ("string" === typeof e && !!e.match(/^-?[0-9]+$/)) ||
            (0, o.isHexString)(e) ||
            "bigint" === typeof e ||
            (0, o.isBytes)(e))
        );
      }
      let d = !1;
      class BigNumber {
        constructor(e, t) {
          (e !== h &&
            l.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" },
            ),
            (this._hex = t),
            (this._isBigNumber = !0),
            Object.freeze(this));
        }
        fromTwos(e) {
          return g(p(this).fromTwos(e));
        }
        toTwos(e) {
          return g(p(this).toTwos(e));
        }
        abs() {
          return "-" === this._hex[0]
            ? BigNumber.from(this._hex.substring(1))
            : this;
        }
        add(e) {
          return g(p(this).add(p(e)));
        }
        sub(e) {
          return g(p(this).sub(p(e)));
        }
        div(e) {
          const t = BigNumber.from(e);
          return (
            t.isZero() && A("division-by-zero", "div"),
            g(p(this).div(p(e)))
          );
        }
        mul(e) {
          return g(p(this).mul(p(e)));
        }
        mod(e) {
          const t = p(e);
          return (
            t.isNeg() && A("division-by-zero", "mod"),
            g(p(this).umod(t))
          );
        }
        pow(e) {
          const t = p(e);
          return (t.isNeg() && A("negative-power", "pow"), g(p(this).pow(t)));
        }
        and(e) {
          const t = p(e);
          return (
            (this.isNegative() || t.isNeg()) &&
              A("unbound-bitwise-result", "and"),
            g(p(this).and(t))
          );
        }
        or(e) {
          const t = p(e);
          return (
            (this.isNegative() || t.isNeg()) &&
              A("unbound-bitwise-result", "or"),
            g(p(this).or(t))
          );
        }
        xor(e) {
          const t = p(e);
          return (
            (this.isNegative() || t.isNeg()) &&
              A("unbound-bitwise-result", "xor"),
            g(p(this).xor(t))
          );
        }
        mask(e) {
          return (
            (this.isNegative() || e < 0) && A("negative-width", "mask"),
            g(p(this).maskn(e))
          );
        }
        shl(e) {
          return (
            (this.isNegative() || e < 0) && A("negative-width", "shl"),
            g(p(this).shln(e))
          );
        }
        shr(e) {
          return (
            (this.isNegative() || e < 0) && A("negative-width", "shr"),
            g(p(this).shrn(e))
          );
        }
        eq(e) {
          return p(this).eq(p(e));
        }
        lt(e) {
          return p(this).lt(p(e));
        }
        lte(e) {
          return p(this).lte(p(e));
        }
        gt(e) {
          return p(this).gt(p(e));
        }
        gte(e) {
          return p(this).gte(p(e));
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
          } catch (e) {
            A("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (e) {}
          return l.throwError(
            "this platform does not support BigInt",
            s.Logger.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() },
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? d ||
                  ((d = !0),
                  l.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed",
                  ))
                : 16 === arguments[0]
                  ? l.throwError(
                      "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                      s.Logger.errors.UNEXPECTED_ARGUMENT,
                      {},
                    )
                  : l.throwError(
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
        toJSON(e) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(e) {
          if (e instanceof BigNumber) return e;
          if ("string" === typeof e)
            return e.match(/^-?0x[0-9a-f]+$/i)
              ? new BigNumber(h, m(e))
              : e.match(/^-?[0-9]+$/)
                ? new BigNumber(h, m(new u(e)))
                : l.throwArgumentError("invalid BigNumber string", "value", e);
          if ("number" === typeof e)
            return (
              e % 1 && A("underflow", "BigNumber.from", e),
              (e >= f || e <= -f) && A("overflow", "BigNumber.from", e),
              BigNumber.from(String(e))
            );
          const t = e;
          if ("bigint" === typeof t) return BigNumber.from(t.toString());
          if ((0, o.isBytes)(t)) return BigNumber.from((0, o.hexlify)(t));
          if (t)
            if (t.toHexString) {
              const e = t.toHexString();
              if ("string" === typeof e) return BigNumber.from(e);
            } else {
              let e = t._hex;
              if (
                (null == e && "BigNumber" === t.type && (e = t.hex),
                "string" === typeof e &&
                  ((0, o.isHexString)(e) ||
                    ("-" === e[0] && (0, o.isHexString)(e.substring(1)))))
              )
                return BigNumber.from(e);
            }
          return l.throwArgumentError("invalid BigNumber value", "value", e);
        }
        static isBigNumber(e) {
          return !(!e || !e._isBigNumber);
        }
      }
      function m(e) {
        if ("string" !== typeof e) return m(e.toString(16));
        if ("-" === e[0])
          return (
            (e = e.substring(1)),
            "-" === e[0] && l.throwArgumentError("invalid hex", "value", e),
            (e = m(e)),
            "0x00" === e ? e : "-" + e
          );
        if (("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e))
          return "0x00";
        e.length % 2 && (e = "0x0" + e.substring(2));
        while (e.length > 4 && "0x00" === e.substring(0, 4))
          e = "0x" + e.substring(4);
        return e;
      }
      function g(e) {
        return BigNumber.from(m(e));
      }
      function p(e) {
        const t = BigNumber.from(e).toHexString();
        return "-" === t[0]
          ? new u("-" + t.substring(3), 16)
          : new u(t.substring(2), 16);
      }
      function A(e, t, r) {
        const n = { fault: e, operation: t };
        return (
          null != r && (n.value = r),
          l.throwError(e, s.Logger.errors.NUMERIC_FAULT, n)
        );
      }
      function y(e) {
        return new u(e, 36).toString(16);
      }
      function v(e) {
        return new u(e, 16).toString(36);
      }
      t.BigNumber = BigNumber;
    },
    525: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "bignumber/5.8.0";
    },
    526: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "hash/5.8.0";
    },
    527: function (e, t, r) {
      "use strict";
      function n(e, t) {
        null == t && (t = 1);
        const r = [],
          n = r.forEach,
          i = function (e, t) {
            n.call(e, function (e) {
              t > 0 && Array.isArray(e) ? i(e, t - 1) : r.push(e);
            });
          };
        return (i(e, t), r);
      }
      function i(e) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
          const n = e[r];
          t[n[0]] = n[1];
        }
        return t;
      }
      function o(e) {
        let t = 0;
        function r() {
          return (e[t++] << 8) | e[t++];
        }
        let n = r(),
          i = 1,
          o = [0, 1];
        for (let b = 1; b < n; b++) o.push((i += r()));
        let s = r(),
          a = t;
        t += s;
        let u = 0,
          l = 0;
        function h() {
          return (0 == u && ((l = (l << 8) | e[t++]), (u = 8)), (l >> --u) & 1);
        }
        const f = 31,
          c = Math.pow(2, f),
          d = c >>> 1,
          m = d >> 1,
          g = c - 1;
        let p = 0;
        for (let b = 0; b < f; b++) p = (p << 1) | h();
        let A = [],
          y = 0,
          v = c;
        while (1) {
          let e = Math.floor(((p - y + 1) * i - 1) / v),
            t = 0,
            r = n;
          while (r - t > 1) {
            let n = (t + r) >>> 1;
            e < o[n] ? (r = n) : (t = n);
          }
          if (0 == t) break;
          A.push(t);
          let s = y + Math.floor((v * o[t]) / i),
            a = y + Math.floor((v * o[t + 1]) / i) - 1;
          while (0 == ((s ^ a) & d))
            ((p = ((p << 1) & g) | h()),
              (s = (s << 1) & g),
              (a = ((a << 1) & g) | 1));
          while (s & ~a & m)
            ((p = (p & d) | ((p << 1) & (g >>> 1)) | h()),
              (s = (s << 1) ^ d),
              (a = ((a ^ d) << 1) | d | 1));
          ((y = s), (v = 1 + a - s));
        }
        let w = n - 4;
        return A.map((t) => {
          switch (t - w) {
            case 3:
              return w + 65792 + ((e[a++] << 16) | (e[a++] << 8) | e[a++]);
            case 2:
              return w + 256 + ((e[a++] << 8) | e[a++]);
            case 1:
              return w + e[a++];
            default:
              return t - 1;
          }
        });
      }
      function s(e) {
        let t = 0;
        return () => e[t++];
      }
      function a(e) {
        return s(o(e));
      }
      function u(e) {
        return 1 & e ? ~e >> 1 : e >> 1;
      }
      function l(e, t) {
        let r = Array(e);
        for (let n = 0; n < e; n++) r[n] = 1 + t();
        return r;
      }
      function h(e, t) {
        let r = Array(e);
        for (let n = 0, i = -1; n < e; n++) r[n] = i += 1 + t();
        return r;
      }
      function f(e, t) {
        let r = Array(e);
        for (let n = 0, i = 0; n < e; n++) r[n] = i += u(t());
        return r;
      }
      function c(e, t) {
        let r = h(e(), e),
          n = e(),
          i = h(n, e),
          o = l(n, e);
        for (let s = 0; s < n; s++)
          for (let e = 0; e < o[s]; e++) r.push(i[s] + e);
        return t ? r.map((e) => t[e]) : r;
      }
      function d(e) {
        let t = [];
        while (1) {
          let r = e();
          if (0 == r) break;
          t.push(p(r, e));
        }
        while (1) {
          let r = e() - 1;
          if (r < 0) break;
          t.push(A(r, e));
        }
        return i(n(t));
      }
      function m(e) {
        let t = [];
        while (1) {
          let r = e();
          if (0 == r) break;
          t.push(r);
        }
        return t;
      }
      function g(e, t, r) {
        let n = Array(e)
          .fill(void 0)
          .map(() => []);
        for (let i = 0; i < t; i++) f(e, r).forEach((e, t) => n[t].push(e));
        return n;
      }
      function p(e, t) {
        let r = 1 + t(),
          i = t(),
          o = m(t),
          s = g(o.length, 1 + e, t);
        return n(
          s.map((e, t) => {
            const n = e[0],
              s = e.slice(1);
            return Array(o[t])
              .fill(void 0)
              .map((e, t) => {
                let o = t * i;
                return [n + t * r, s.map((e) => e + o)];
              });
          }),
        );
      }
      function A(e, t) {
        let r = 1 + t(),
          n = g(r, 1 + e, t);
        return n.map((e) => [e[0], e.slice(1)]);
      }
      function y(e) {
        let t = c(e).sort((e, t) => e - t);
        return r();
        function r() {
          let n = [];
          while (1) {
            let i = c(e, t);
            if (0 == i.length) break;
            n.push({ set: new Set(i), node: r() });
          }
          n.sort((e, t) => t.set.size - e.set.size);
          let i = e(),
            o = i % 3;
          i = (i / 3) | 0;
          let s = !!(1 & i);
          i >>= 1;
          let a = 1 == i,
            u = 2 == i;
          return { branches: n, valid: o, fe0f: s, save: a, check: u };
        }
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decode_arithmetic = o),
        (t.read_compressed_payload = a),
        (t.read_emoji_trie = y),
        (t.read_mapped_map = d),
        (t.read_member_array = c),
        (t.read_payload = s),
        (t.read_zero_terminated_array = m),
        (t.signed = u));
    },
    528: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Description = void 0),
        (t.checkProperties = h),
        (t.deepCopy = g),
        (t.defineReadOnly = a),
        (t.getStatic = u),
        (t.resolveProperties = l),
        (t.shallowCopy = f));
      var n = r(66),
        i = r(1475),
        o = function (e, t, r, n) {
          function i(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function s(e) {
              try {
                u(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function a(e) {
              try {
                u(n["throw"](e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              e.done ? r(e.value) : i(e.value).then(s, a);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      const s = new n.Logger(i.version);
      function a(e, t, r) {
        Object.defineProperty(e, t, { enumerable: !0, value: r, writable: !1 });
      }
      function u(e, t) {
        for (let r = 0; r < 32; r++) {
          if (e[t]) return e[t];
          if (!e.prototype || "object" !== typeof e.prototype) break;
          e = Object.getPrototypeOf(e.prototype).constructor;
        }
        return null;
      }
      function l(e) {
        return o(this, void 0, void 0, function* () {
          const t = Object.keys(e).map((t) => {
              const r = e[t];
              return Promise.resolve(r).then((e) => ({ key: t, value: e }));
            }),
            r = yield Promise.all(t);
          return r.reduce((e, t) => ((e[t.key] = t.value), e), {});
        });
      }
      function h(e, t) {
        ((e && "object" === typeof e) ||
          s.throwArgumentError("invalid object", "object", e),
          Object.keys(e).forEach((r) => {
            t[r] ||
              s.throwArgumentError(
                "invalid object key - " + r,
                "transaction:" + r,
                e,
              );
          }));
      }
      function f(e) {
        const t = {};
        for (const r in e) t[r] = e[r];
        return t;
      }
      const c = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function d(e) {
        if (void 0 === e || null === e || c[typeof e]) return !0;
        if (Array.isArray(e) || "object" === typeof e) {
          if (!Object.isFrozen(e)) return !1;
          const r = Object.keys(e);
          for (let n = 0; n < r.length; n++) {
            let i = null;
            try {
              i = e[r[n]];
            } catch (t) {
              continue;
            }
            if (!d(i)) return !1;
          }
          return !0;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function m(e) {
        if (d(e)) return e;
        if (Array.isArray(e)) return Object.freeze(e.map((e) => g(e)));
        if ("object" === typeof e) {
          const t = {};
          for (const r in e) {
            const n = e[r];
            void 0 !== n && a(t, r, g(n));
          }
          return t;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function g(e) {
        return m(e);
      }
      class Description {
        constructor(e) {
          for (const t in e) this[t] = g(e[t]);
        }
      }
      t.Description = Description;
    },
    57: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.arrayify = f),
        (t.concat = c),
        (t.hexConcat = w),
        (t.hexDataLength = y),
        (t.hexDataSlice = v),
        (t.hexStripZeros = M),
        (t.hexValue = b),
        (t.hexZeroPad = E),
        (t.hexlify = A),
        (t.isBytes = h),
        (t.isBytesLike = u),
        (t.isHexString = g),
        (t.joinSignature = S),
        (t.splitSignature = B),
        (t.stripZeros = d),
        (t.zeroPad = m));
      var n = r(66),
        i = r(1452);
      const o = new n.Logger(i.version);
      function s(e) {
        return !!e.toHexString;
      }
      function a(e) {
        return (
          e.slice ||
            (e.slice = function () {
              const t = Array.prototype.slice.call(arguments);
              return a(new Uint8Array(Array.prototype.slice.apply(e, t)));
            }),
          e
        );
      }
      function u(e) {
        return (g(e) && !(e.length % 2)) || h(e);
      }
      function l(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function h(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!l(e.length) || e.length < 0) return !1;
        for (let t = 0; t < e.length; t++) {
          const r = e[t];
          if (!l(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function f(e, t) {
        if ((t || (t = {}), "number" === typeof e)) {
          o.checkSafeUint53(e, "invalid arrayify value");
          const t = [];
          while (e) (t.unshift(255 & e), (e = parseInt(String(e / 256))));
          return (0 === t.length && t.push(0), a(new Uint8Array(t)));
        }
        if (
          (t.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          s(e) && (e = e.toHexString()),
          g(e))
        ) {
          let r = e.substring(2);
          r.length % 2 &&
            ("left" === t.hexPad
              ? (r = "0" + r)
              : "right" === t.hexPad
                ? (r += "0")
                : o.throwArgumentError("hex data is odd-length", "value", e));
          const n = [];
          for (let e = 0; e < r.length; e += 2)
            n.push(parseInt(r.substring(e, e + 2), 16));
          return a(new Uint8Array(n));
        }
        return h(e)
          ? a(new Uint8Array(e))
          : o.throwArgumentError("invalid arrayify value", "value", e);
      }
      function c(e) {
        const t = e.map((e) => f(e)),
          r = t.reduce((e, t) => e + t.length, 0),
          n = new Uint8Array(r);
        return (t.reduce((e, t) => (n.set(t, e), e + t.length), 0), a(n));
      }
      function d(e) {
        let t = f(e);
        if (0 === t.length) return t;
        let r = 0;
        while (r < t.length && 0 === t[r]) r++;
        return (r && (t = t.slice(r)), t);
      }
      function m(e, t) {
        ((e = f(e)),
          e.length > t &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const r = new Uint8Array(t);
        return (r.set(e, t - e.length), a(r));
      }
      function g(e, t) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!t || e.length === 2 + 2 * t)
        );
      }
      const p = "0123456789abcdef";
      function A(e, t) {
        if ((t || (t = {}), "number" === typeof e)) {
          o.checkSafeUint53(e, "invalid hexlify value");
          let t = "";
          while (e) ((t = p[15 & e] + t), (e = Math.floor(e / 16)));
          return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
        }
        if ("bigint" === typeof e)
          return ((e = e.toString(16)), e.length % 2 ? "0x0" + e : "0x" + e);
        if (
          (t.allowMissingPrefix &&
            "string" === typeof e &&
            "0x" !== e.substring(0, 2) &&
            (e = "0x" + e),
          s(e))
        )
          return e.toHexString();
        if (g(e))
          return (
            e.length % 2 &&
              ("left" === t.hexPad
                ? (e = "0x0" + e.substring(2))
                : "right" === t.hexPad
                  ? (e += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", e)),
            e.toLowerCase()
          );
        if (h(e)) {
          let t = "0x";
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            t += p[(240 & n) >> 4] + p[15 & n];
          }
          return t;
        }
        return o.throwArgumentError("invalid hexlify value", "value", e);
      }
      function y(e) {
        if ("string" !== typeof e) e = A(e);
        else if (!g(e) || e.length % 2) return null;
        return (e.length - 2) / 2;
      }
      function v(e, t, r) {
        return (
          "string" !== typeof e
            ? (e = A(e))
            : (!g(e) || e.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", e),
          (t = 2 + 2 * t),
          null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
        );
      }
      function w(e) {
        let t = "0x";
        return (
          e.forEach((e) => {
            t += A(e).substring(2);
          }),
          t
        );
      }
      function b(e) {
        const t = M(A(e, { hexPad: "left" }));
        return "0x" === t ? "0x0" : t;
      }
      function M(e) {
        ("string" !== typeof e && (e = A(e)),
          g(e) || o.throwArgumentError("invalid hex string", "value", e),
          (e = e.substring(2)));
        let t = 0;
        while (t < e.length && "0" === e[t]) t++;
        return "0x" + e.substring(t);
      }
      function E(e, t) {
        ("string" !== typeof e
          ? (e = A(e))
          : g(e) || o.throwArgumentError("invalid hex string", "value", e),
          e.length > 2 * t + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (e.length < 2 * t + 2) e = "0x0" + e.substring(2);
        return e;
      }
      function B(e) {
        const t = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (u(e)) {
          let r = f(e);
          (64 === r.length
            ? ((t.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (t.r = A(r.slice(0, 32))),
              (t.s = A(r.slice(32, 64))))
            : 65 === r.length
              ? ((t.r = A(r.slice(0, 32))),
                (t.s = A(r.slice(32, 64))),
                (t.v = r[64]))
              : o.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  e,
                ),
            t.v < 27 &&
              (0 === t.v || 1 === t.v
                ? (t.v += 27)
                : o.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    e,
                  )),
            (t.recoveryParam = 1 - (t.v % 2)),
            t.recoveryParam && (r[32] |= 128),
            (t._vs = A(r.slice(32, 64))));
        } else {
          if (
            ((t.r = e.r),
            (t.s = e.s),
            (t.v = e.v),
            (t.recoveryParam = e.recoveryParam),
            (t._vs = e._vs),
            null != t._vs)
          ) {
            const r = m(f(t._vs), 32);
            t._vs = A(r);
            const n = r[0] >= 128 ? 1 : 0;
            (null == t.recoveryParam
              ? (t.recoveryParam = n)
              : t.recoveryParam !== n &&
                o.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  e,
                ),
              (r[0] &= 127));
            const i = A(r);
            null == t.s
              ? (t.s = i)
              : t.s !== i &&
                o.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  e,
                );
          }
          if (null == t.recoveryParam)
            null == t.v
              ? o.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  e,
                )
              : 0 === t.v || 1 === t.v
                ? (t.recoveryParam = t.v)
                : (t.recoveryParam = 1 - (t.v % 2));
          else if (null == t.v) t.v = 27 + t.recoveryParam;
          else {
            const r = 0 === t.v || 1 === t.v ? t.v : 1 - (t.v % 2);
            t.recoveryParam !== r &&
              o.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                e,
              );
          }
          (null != t.r && g(t.r)
            ? (t.r = E(t.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                e,
              ),
            null != t.s && g(t.s)
              ? (t.s = E(t.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  e,
                ));
          const r = f(t.s);
          (r[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", e),
            t.recoveryParam && (r[0] |= 128));
          const n = A(r);
          (t._vs &&
            (g(t._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", e),
            (t._vs = E(t._vs, 32))),
            null == t._vs
              ? (t._vs = n)
              : t._vs !== n &&
                o.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  e,
                ));
        }
        return (
          (t.yParityAndS = t._vs),
          (t.compact = t.r + t.yParityAndS.substring(2)),
          t
        );
      }
      function S(e) {
        return (
          (e = B(e)),
          A(c([e.r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    66: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Logger = t.LogLevel = t.ErrorCode = void 0));
      var n = r(1451);
      let i = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let a = s["default"],
        u = null;
      function l() {
        try {
          const e = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((t) => {
              try {
                if ("test" !== "test".normalize(t))
                  throw new Error("bad normalize");
              } catch (r) {
                e.push(t);
              }
            }),
            e.length)
          )
            throw new Error("missing " + e.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (e) {
          return e.message;
        }
        return null;
      }
      const h = l();
      var f, c;
      ((function (e) {
        ((e["DEBUG"] = "DEBUG"),
          (e["INFO"] = "INFO"),
          (e["WARNING"] = "WARNING"),
          (e["ERROR"] = "ERROR"),
          (e["OFF"] = "OFF"));
      })(f || (t.LogLevel = f = {})),
        (function (e) {
          ((e["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"),
            (e["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"),
            (e["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"),
            (e["NETWORK_ERROR"] = "NETWORK_ERROR"),
            (e["SERVER_ERROR"] = "SERVER_ERROR"),
            (e["TIMEOUT"] = "TIMEOUT"),
            (e["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"),
            (e["NUMERIC_FAULT"] = "NUMERIC_FAULT"),
            (e["MISSING_NEW"] = "MISSING_NEW"),
            (e["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"),
            (e["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"),
            (e["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"),
            (e["CALL_EXCEPTION"] = "CALL_EXCEPTION"),
            (e["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"),
            (e["NONCE_EXPIRED"] = "NONCE_EXPIRED"),
            (e["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"),
            (e["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT"),
            (e["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"),
            (e["ACTION_REJECTED"] = "ACTION_REJECTED"));
        })(c || (t.ErrorCode = c = {})));
      const d = "0123456789abcdef";
      class Logger {
        constructor(e) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: e,
            writable: !1,
          });
        }
        _log(e, t) {
          const r = e.toLowerCase();
          (null == s[r] &&
            this.throwArgumentError("invalid log level name", "logLevel", e),
            a > s[r] || console.log.apply(console, t));
        }
        debug() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          this._log(Logger.levels.DEBUG, t);
        }
        info() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          this._log(Logger.levels.INFO, t);
        }
        warn() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          this._log(Logger.levels.WARNING, t);
        }
        makeError(e, t, r) {
          if (o) return this.makeError("censored error", t, {});
          (t || (t = Logger.errors.UNKNOWN_ERROR), r || (r = {}));
          const n = [];
          (Object.keys(r).forEach((e) => {
            const t = r[e];
            try {
              if (t instanceof Uint8Array) {
                let r = "";
                for (let e = 0; e < t.length; e++)
                  ((r += d[t[e] >> 4]), (r += d[15 & t[e]]));
                n.push(e + "=Uint8Array(0x" + r + ")");
              } else n.push(e + "=" + JSON.stringify(t));
            } catch (a) {
              n.push(e + "=" + JSON.stringify(r[e].toString()));
            }
          }),
            n.push("code=" + t),
            n.push("version=" + this.version));
          const i = e;
          let s = "";
          switch (t) {
            case c.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const t = e;
              switch (t) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + t;
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
              s = t;
              break;
          }
          (s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            n.length && (e += " (" + n.join(", ") + ")"));
          const a = new Error(e);
          return (
            (a.reason = i),
            (a.code = t),
            Object.keys(r).forEach(function (e) {
              a[e] = r[e];
            }),
            a
          );
        }
        throwError(e, t, r) {
          throw this.makeError(e, t, r);
        }
        throwArgumentError(e, t, r) {
          return this.throwError(e, Logger.errors.INVALID_ARGUMENT, {
            argument: t,
            value: r,
          });
        }
        assert(e, t, r, n) {
          e || this.throwError(t, r, n);
        }
        assertArgument(e, t, r, n) {
          e || this.throwArgumentError(t, r, n);
        }
        checkNormalize(e) {
          (null == e && (e = "platform missing String.prototype.normalize"),
            h &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: h },
              ));
        }
        checkSafeUint53(e, t) {
          "number" === typeof e &&
            (null == t && (t = "value not safe"),
            (e < 0 || e >= 9007199254740991) &&
              this.throwError(t, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: e,
              }),
            e % 1 &&
              this.throwError(t, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: e,
              }));
        }
        checkArgumentCount(e, t, r) {
          ((r = r ? ": " + r : ""),
            e < t &&
              this.throwError(
                "missing argument" + r,
                Logger.errors.MISSING_ARGUMENT,
                { count: e, expectedCount: t },
              ),
            e > t &&
              this.throwError(
                "too many arguments" + r,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: e, expectedCount: t },
              ));
        }
        checkNew(e, t) {
          (e !== Object && null != e) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: t.name,
            });
        }
        checkAbstract(e, t) {
          e === t
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(t.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: e.name, operation: "new" },
              )
            : (e !== Object && null != e) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: t.name,
              });
        }
        static globalLogger() {
          return (u || (u = new Logger(n.version)), u);
        }
        static setCensorship(e, t) {
          if (
            (!e &&
              t &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            i)
          ) {
            if (!e) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((o = !!e), (i = !!t));
        }
        static setLogLevel(e) {
          const t = s[e.toLowerCase()];
          null != t
            ? (a = t)
            : Logger.globalLogger().warn("invalid log level - " + e);
        }
        static from(e) {
          return new Logger(e);
        }
      }
      ((t.Logger = Logger), (Logger.errors = c), (Logger.levels = f));
    },
  },
]);
