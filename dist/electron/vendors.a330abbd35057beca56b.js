(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [266],
  {
    11326: function (e) {
      e.exports = JSON.parse(
        '{"name":"elliptic","version":"3.1.0","description":"EC cryptography","main":"lib/elliptic.js","scripts":{"test":"make lint && mocha --reporter=spec test/*-test.js"},"repository":{"type":"git","url":"git@github.com:indutny/elliptic"},"keywords":["EC","Elliptic","curve","Cryptography"],"author":"Fedor Indutny <fedor@indutny.com>","license":"MIT","bugs":{"url":"https://github.com/indutny/elliptic/issues"},"homepage":"https://github.com/indutny/elliptic","devDependencies":{"browserify":"^3.44.2","jscs":"^1.11.3","jshint":"^2.6.0","mocha":"^2.1.0","uglify-js":"^2.4.13"},"dependencies":{"bn.js":"^2.0.3","brorand":"^1.0.1","hash.js":"^1.0.0","inherits":"^2.0.1"}}',
      );
    },
    11327: function (e, t, r) {
      "use strict";
      var d = t;
      function f(e, t) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var r = [];
        if ("string" !== typeof e) {
          for (var d = 0; d < e.length; d++) r[d] = 0 | e[d];
          return r;
        }
        if (t) {
          if ("hex" === t) {
            ((e = e.replace(/[^a-z0-9]+/gi, "")),
              e.length % 2 !== 0 && (e = "0" + e));
            for (d = 0; d < e.length; d += 2)
              r.push(parseInt(e[d] + e[d + 1], 16));
          }
        } else
          for (var d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d),
              i = f >> 8,
              n = 255 & f;
            i ? r.push(i, n) : r.push(n);
          }
        return r;
      }
      function i(e) {
        return 1 === e.length ? "0" + e : e;
      }
      function n(e) {
        for (var t = "", r = 0; r < e.length; r++) t += i(e[r].toString(16));
        return t;
      }
      function c(e, t) {
        var r = [],
          d = 1 << (t + 1),
          f = e.clone();
        while (f.cmpn(1) >= 0) {
          var i;
          if (f.isOdd()) {
            var n = f.andln(d - 1);
            ((i = n > (d >> 1) - 1 ? (d >> 1) - n : n), f.isubn(i));
          } else i = 0;
          r.push(i);
          for (
            var c = 0 !== f.cmpn(0) && 0 === f.andln(d - 1) ? t + 1 : 1, a = 1;
            a < c;
            a++
          )
            r.push(0);
          f.ishrn(c);
        }
        return r;
      }
      function a(e, t) {
        var r = [[], []];
        ((e = e.clone()), (t = t.clone()));
        var d = 0,
          f = 0;
        while (e.cmpn(-d) > 0 || t.cmpn(-f) > 0) {
          var i,
            n,
            c = (e.andln(3) + d) & 3,
            a = (t.andln(3) + f) & 3;
          if ((3 === c && (c = -1), 3 === a && (a = -1), 0 === (1 & c))) i = 0;
          else {
            var s = (e.andln(7) + d) & 7;
            i = (3 !== s && 5 !== s) || 2 !== a ? c : -c;
          }
          if ((r[0].push(i), 0 === (1 & a))) n = 0;
          else {
            s = (t.andln(7) + f) & 7;
            n = (3 !== s && 5 !== s) || 2 !== c ? a : -a;
          }
          (r[1].push(n),
            2 * d === i + 1 && (d = 1 - d),
            2 * f === n + 1 && (f = 1 - f),
            e.ishrn(1),
            t.ishrn(1));
        }
        return r;
      }
      ((d.assert = function (e, t) {
        if (!e) throw new Error(t || "Assertion failed");
      }),
        (d.toArray = f),
        (d.zero2 = i),
        (d.toHex = n),
        (d.encode = function (e, t) {
          return "hex" === t ? n(e) : e;
        }),
        (d.getNAF = c),
        (d.getJSF = a));
    },
    11328: function (e, t, r) {
      "use strict";
      var d = r(43),
        f = r(3402),
        i = f.utils,
        n = i.assert;
      function c(e) {
        if (!(this instanceof c)) return new c(e);
        ((this.hash = e.hash),
          (this.predResist = !!e.predResist),
          (this.outLen = this.hash.outSize),
          (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
          (this.reseed = null),
          (this.reseedInterval = null),
          (this.K = null),
          (this.V = null));
        var t = i.toArray(e.entropy, e.entropyEnc),
          r = i.toArray(e.nonce, e.nonceEnc),
          d = i.toArray(e.pers, e.persEnc);
        (n(
          t.length >= this.minEntropy / 8,
          "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
        ),
          this._init(t, r, d));
      }
      ((e.exports = c),
        (c.prototype._init = function (e, t, r) {
          var d = e.concat(t).concat(r);
          ((this.K = new Array(this.outLen / 8)),
            (this.V = new Array(this.outLen / 8)));
          for (var f = 0; f < this.V.length; f++)
            ((this.K[f] = 0), (this.V[f] = 1));
          (this._update(d),
            (this.reseed = 1),
            (this.reseedInterval = 281474976710656));
        }),
        (c.prototype._hmac = function () {
          return new d.hmac(this.hash, this.K);
        }),
        (c.prototype._update = function (e) {
          var t = this._hmac().update(this.V).update([0]);
          (e && (t = t.update(e)),
            (this.K = t.digest()),
            (this.V = this._hmac().update(this.V).digest()),
            e &&
              ((this.K = this._hmac()
                .update(this.V)
                .update([1])
                .update(e)
                .digest()),
              (this.V = this._hmac().update(this.V).digest())));
        }),
        (c.prototype.reseed = function (e, t, r, d) {
          ("string" !== typeof t && ((d = r), (r = t), (t = null)),
            (e = i.toBuffer(e, t)),
            (r = i.toBuffer(r, d)),
            n(
              e.length >= this.minEntropy / 8,
              "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
            ),
            this._update(e.concat(r || [])),
            (this.reseed = 1));
        }),
        (c.prototype.generate = function (e, t, r, d) {
          if (this.reseed > this.reseedInterval)
            throw new Error("Reseed is required");
          ("string" !== typeof t && ((d = r), (r = t), (t = null)),
            r && ((r = i.toArray(r, d)), this._update(r)));
          var f = [];
          while (f.length < e)
            ((this.V = this._hmac().update(this.V).digest()),
              (f = f.concat(this.V)));
          var n = f.slice(0, e);
          return (this._update(r), this.reseed++, i.encode(n, t));
        }));
    },
    11329: function (e, t, r) {
      "use strict";
      var d = r(3467),
        f = r(3402),
        i = f.utils.getNAF,
        n = f.utils.getJSF,
        c = f.utils.assert;
      function a(e, t) {
        ((this.type = e),
          (this.p = new d(t.p, 16)),
          (this.red = t.prime ? d.red(t.prime) : d.mont(this.p)),
          (this.zero = new d(0).toRed(this.red)),
          (this.one = new d(1).toRed(this.red)),
          (this.two = new d(2).toRed(this.red)),
          (this.n = t.n && new d(t.n, 16)),
          (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
          (this._wnafT1 = new Array(4)),
          (this._wnafT2 = new Array(4)),
          (this._wnafT3 = new Array(4)),
          (this._wnafT4 = new Array(4)));
      }
      function s(e, t) {
        ((this.curve = e), (this.type = t), (this.precomputed = null));
      }
      ((e.exports = a),
        (a.prototype.point = function () {
          throw new Error("Not implemented");
        }),
        (a.prototype.validate = function () {
          throw new Error("Not implemented");
        }),
        (a.prototype._fixedNafMul = function (e, t) {
          c(e.precomputed);
          var r = e._getDoubles(),
            d = i(t, 1),
            f = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1);
          f /= 3;
          for (var n = [], a = 0; a < d.length; a += r.step) {
            var s = 0;
            for (t = a + r.step - 1; t >= a; t--) s = (s << 1) + d[t];
            n.push(s);
          }
          for (
            var o = this.jpoint(null, null, null),
              b = this.jpoint(null, null, null),
              h = f;
            h > 0;
            h--
          ) {
            for (a = 0; a < n.length; a++) {
              s = n[a];
              s === h
                ? (b = b.mixedAdd(r.points[a]))
                : s === -h && (b = b.mixedAdd(r.points[a].neg()));
            }
            o = o.add(b);
          }
          return o.toP();
        }),
        (a.prototype._wnafMul = function (e, t) {
          var r = 4,
            d = e._getNAFPoints(r);
          r = d.wnd;
          for (
            var f = d.points,
              n = i(t, r),
              a = this.jpoint(null, null, null),
              s = n.length - 1;
            s >= 0;
            s--
          ) {
            for (t = 0; s >= 0 && 0 === n[s]; s--) t++;
            if ((s >= 0 && t++, (a = a.dblp(t)), s < 0)) break;
            var o = n[s];
            (c(0 !== o),
              (a =
                "affine" === e.type
                  ? o > 0
                    ? a.mixedAdd(f[(o - 1) >> 1])
                    : a.mixedAdd(f[(-o - 1) >> 1].neg())
                  : o > 0
                    ? a.add(f[(o - 1) >> 1])
                    : a.add(f[(-o - 1) >> 1].neg())));
          }
          return "affine" === e.type ? a.toP() : a;
        }),
        (a.prototype._wnafMulAdd = function (e, t, r, d) {
          for (
            var f = this._wnafT1,
              c = this._wnafT2,
              a = this._wnafT3,
              s = 0,
              o = 0;
            o < d;
            o++
          ) {
            var b = t[o],
              h = b._getNAFPoints(e);
            ((f[o] = h.wnd), (c[o] = h.points));
          }
          for (o = d - 1; o >= 1; o -= 2) {
            var u = o - 1,
              p = o;
            if (1 === f[u] && 1 === f[p]) {
              var l = [t[u], null, null, t[p]];
              0 === t[u].y.cmp(t[p].y)
                ? ((l[1] = t[u].add(t[p])),
                  (l[2] = t[u].toJ().mixedAdd(t[p].neg())))
                : 0 === t[u].y.cmp(t[p].y.redNeg())
                  ? ((l[1] = t[u].toJ().mixedAdd(t[p])),
                    (l[2] = t[u].add(t[p].neg())))
                  : ((l[1] = t[u].toJ().mixedAdd(t[p])),
                    (l[2] = t[u].toJ().mixedAdd(t[p].neg())));
              var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                m = n(r[u], r[p]);
              ((s = Math.max(m[0].length, s)),
                (a[u] = new Array(s)),
                (a[p] = new Array(s)));
              for (var y = 0; y < s; y++) {
                var g = 0 | m[0][y],
                  w = 0 | m[1][y];
                ((a[u][y] = v[3 * (g + 1) + (w + 1)]),
                  (a[p][y] = 0),
                  (c[u] = l));
              }
            } else
              ((a[u] = i(r[u], f[u])),
                (a[p] = i(r[p], f[p])),
                (s = Math.max(a[u].length, s)),
                (s = Math.max(a[p].length, s)));
          }
          var S = this.jpoint(null, null, null),
            A = this._wnafT4;
          for (o = s; o >= 0; o--) {
            var x = 0;
            while (o >= 0) {
              var M = !0;
              for (y = 0; y < d; y++)
                ((A[y] = 0 | a[y][o]), 0 !== A[y] && (M = !1));
              if (!M) break;
              (x++, o--);
            }
            if ((o >= 0 && x++, (S = S.dblp(x)), o < 0)) break;
            for (y = 0; y < d; y++) {
              var I = A[y];
              0 !== I &&
                (I > 0
                  ? (b = c[y][(I - 1) >> 1])
                  : I < 0 && (b = c[y][(-I - 1) >> 1].neg()),
                (S = "affine" === b.type ? S.mixedAdd(b) : S.add(b)));
            }
          }
          for (o = 0; o < d; o++) c[o] = null;
          return S.toP();
        }),
        (a.BasePoint = s),
        (s.prototype.validate = function () {
          return this.curve.validate(this);
        }),
        (s.prototype.precompute = function (e) {
          if (this.precomputed) return this;
          var t = { doubles: null, naf: null, beta: null };
          return (
            (t.naf = this._getNAFPoints(8)),
            (t.doubles = this._getDoubles(4, e)),
            (t.beta = this._getBeta()),
            (this.precomputed = t),
            this
          );
        }),
        (s.prototype._hasDoubles = function (e) {
          if (!this.precomputed) return !1;
          var t = this.precomputed.doubles;
          return (
            !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
          );
        }),
        (s.prototype._getDoubles = function (e, t) {
          if (this.precomputed && this.precomputed.doubles)
            return this.precomputed.doubles;
          for (var r = [this], d = this, f = 0; f < t; f += e) {
            for (var i = 0; i < e; i++) d = d.dbl();
            r.push(d);
          }
          return { step: e, points: r };
        }),
        (s.prototype._getNAFPoints = function (e) {
          if (this.precomputed && this.precomputed.naf)
            return this.precomputed.naf;
          for (
            var t = [this],
              r = (1 << e) - 1,
              d = 1 === r ? null : this.dbl(),
              f = 1;
            f < r;
            f++
          )
            t[f] = t[f - 1].add(d);
          return { wnd: e, points: t };
        }),
        (s.prototype._getBeta = function () {
          return null;
        }),
        (s.prototype.dblp = function (e) {
          for (var t = this, r = 0; r < e; r++) t = t.dbl();
          return t;
        }));
    },
    11330: function (e, t, r) {
      "use strict";
      var d = r(4867),
        f = r(3402),
        i = r(3467),
        n = r(16),
        c = d.base,
        a = f.utils.assert;
      function s(e) {
        (c.call(this, "short", e),
          (this.a = new i(e.a, 16).toRed(this.red)),
          (this.b = new i(e.b, 16).toRed(this.red)),
          (this.tinv = this.two.redInvm()),
          (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
          (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
          (this.endo = this._getEndomorphism(e)),
          (this._endoWnafT1 = new Array(4)),
          (this._endoWnafT2 = new Array(4)));
      }
      function Point(e, t, r, d) {
        (c.BasePoint.call(this, e, "affine"),
          null === t && null === r
            ? ((this.x = null), (this.y = null), (this.inf = !0))
            : ((this.x = new i(t, 16)),
              (this.y = new i(r, 16)),
              d &&
                (this.x.forceRed(this.curve.red),
                this.y.forceRed(this.curve.red)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              (this.inf = !1)));
      }
      function o(e, t, r, d) {
        (c.BasePoint.call(this, e, "jacobian"),
          null === t && null === r && null === d
            ? ((this.x = this.curve.one),
              (this.y = this.curve.one),
              (this.z = new i(0)))
            : ((this.x = new i(t, 16)),
              (this.y = new i(r, 16)),
              (this.z = new i(d, 16))),
          this.x.red || (this.x = this.x.toRed(this.curve.red)),
          this.y.red || (this.y = this.y.toRed(this.curve.red)),
          this.z.red || (this.z = this.z.toRed(this.curve.red)),
          (this.zOne = this.z === this.curve.one));
      }
      (n(s, c),
        (e.exports = s),
        (s.prototype._getEndomorphism = function (e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, r, d;
            if (e.beta) t = new i(e.beta, 16).toRed(this.red);
            else {
              var f = this._getEndoRoots(this.p);
              ((t = f[0].cmp(f[1]) < 0 ? f[0] : f[1]), (t = t.toRed(this.red)));
            }
            if (e.lambda) r = new i(e.lambda, 16);
            else {
              var n = this._getEndoRoots(this.n);
              0 === this.g.mul(n[0]).x.cmp(this.g.x.redMul(t))
                ? (r = n[0])
                : ((r = n[1]),
                  a(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return (
              (d = e.basis
                ? e.basis.map(function (e) {
                    return { a: new i(e.a, 16), b: new i(e.b, 16) };
                  })
                : this._getEndoBasis(r)),
              { beta: t, lambda: r, basis: d }
            );
          }
        }),
        (s.prototype._getEndoRoots = function (e) {
          var t = e === this.p ? this.red : i.mont(e),
            r = new i(2).toRed(t).redInvm(),
            d = r.redNeg(),
            f = new i(3).toRed(t).redNeg().redSqrt().redMul(r),
            n = d.redAdd(f).fromRed(),
            c = d.redSub(f).fromRed();
          return [n, c];
        }),
        (s.prototype._getEndoBasis = function (e) {
          var t,
            r,
            d,
            f,
            n,
            c,
            a,
            s,
            o,
            b = this.n.shrn(Math.floor(this.n.bitLength() / 2)),
            h = e,
            u = this.n.clone(),
            p = new i(1),
            l = new i(0),
            v = new i(0),
            m = new i(1),
            y = 0;
          while (0 !== h.cmpn(0)) {
            var g = u.div(h);
            ((s = u.sub(g.mul(h))), (o = v.sub(g.mul(p))));
            var w = m.sub(g.mul(l));
            if (!d && s.cmp(b) < 0)
              ((t = a.neg()), (r = p), (d = s.neg()), (f = o));
            else if (d && 2 === ++y) break;
            ((a = s), (u = h), (h = s), (v = p), (p = o), (m = l), (l = w));
          }
          ((n = s.neg()), (c = o));
          var S = d.sqr().add(f.sqr()),
            A = n.sqr().add(c.sqr());
          return (
            A.cmp(S) >= 0 && ((n = t), (c = r)),
            d.sign && ((d = d.neg()), (f = f.neg())),
            n.sign && ((n = n.neg()), (c = c.neg())),
            [
              { a: d, b: f },
              { a: n, b: c },
            ]
          );
        }),
        (s.prototype._endoSplit = function (e) {
          var t = this.endo.basis,
            r = t[0],
            d = t[1],
            f = d.b.mul(e).divRound(this.n),
            i = r.b.neg().mul(e).divRound(this.n),
            n = f.mul(r.a),
            c = i.mul(d.a),
            a = f.mul(r.b),
            s = i.mul(d.b),
            o = e.sub(n).sub(c),
            b = a.add(s).neg();
          return { k1: o, k2: b };
        }),
        (s.prototype.pointFromX = function (e, t) {
          ((t = new i(t, 16)), t.red || (t = t.toRed(this.red)));
          var r = t
              .redSqr()
              .redMul(t)
              .redIAdd(t.redMul(this.a))
              .redIAdd(this.b),
            d = r.redSqrt(),
            f = d.fromRed().isOdd();
          return (
            ((e && !f) || (!e && f)) && (d = d.redNeg()),
            this.point(t, d)
          );
        }),
        (s.prototype.validate = function (e) {
          if (e.inf) return !0;
          var t = e.x,
            r = e.y,
            d = this.a.redMul(t),
            f = t.redSqr().redMul(t).redIAdd(d).redIAdd(this.b);
          return 0 === r.redSqr().redISub(f).cmpn(0);
        }),
        (s.prototype._endoWnafMulAdd = function (e, t) {
          for (
            var r = this._endoWnafT1, d = this._endoWnafT2, f = 0;
            f < e.length;
            f++
          ) {
            var i = this._endoSplit(t[f]),
              n = e[f],
              c = n._getBeta();
            (i.k1.sign && ((i.k1.sign = !i.k1.sign), (n = n.neg(!0))),
              i.k2.sign && ((i.k2.sign = !i.k2.sign), (c = c.neg(!0))),
              (r[2 * f] = n),
              (r[2 * f + 1] = c),
              (d[2 * f] = i.k1),
              (d[2 * f + 1] = i.k2));
          }
          for (var a = this._wnafMulAdd(1, r, d, 2 * f), s = 0; s < 2 * f; s++)
            ((r[s] = null), (d[s] = null));
          return a;
        }),
        n(Point, c.BasePoint),
        (s.prototype.point = function (e, t, r) {
          return new Point(this, e, t, r);
        }),
        (s.prototype.pointFromJSON = function (e, t) {
          return Point.fromJSON(this, e, t);
        }),
        (Point.prototype._getBeta = function () {
          if (this.curve.endo) {
            var e = this.precomputed;
            if (e && e.beta) return e.beta;
            var t = this.curve.point(
              this.x.redMul(this.curve.endo.beta),
              this.y,
            );
            if (e) {
              var r = this.curve,
                d = function (e) {
                  return r.point(e.x.redMul(r.endo.beta), e.y);
                };
              ((e.beta = t),
                (t.precomputed = {
                  beta: null,
                  naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(d) },
                  doubles: e.doubles && {
                    step: e.doubles.step,
                    points: e.doubles.points.map(d),
                  },
                }));
            }
            return t;
          }
        }),
        (Point.prototype.toJSON = function () {
          return this.precomputed
            ? [
                this.x,
                this.y,
                this.precomputed && {
                  doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1),
                  },
                  naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1),
                  },
                },
              ]
            : [this.x, this.y];
        }),
        (Point.fromJSON = function (e, t, r) {
          "string" === typeof t && (t = JSON.parse(t));
          var d = e.point(t[0], t[1], r);
          if (!t[2]) return d;
          function f(t) {
            return e.point(t[0], t[1], r);
          }
          var i = t[2];
          return (
            (d.precomputed = {
              beta: null,
              doubles: i.doubles && {
                step: i.doubles.step,
                points: [d].concat(i.doubles.points.map(f)),
              },
              naf: i.naf && {
                wnd: i.naf.wnd,
                points: [d].concat(i.naf.points.map(f)),
              },
            }),
            d
          );
        }),
        (Point.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                ">";
        }),
        (Point.prototype.isInfinity = function () {
          return this.inf;
        }),
        (Point.prototype.add = function (e) {
          if (this.inf) return e;
          if (e.inf) return this;
          if (this.eq(e)) return this.dbl();
          if (this.neg().eq(e)) return this.curve.point(null, null);
          if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
          var t = this.y.redSub(e.y);
          0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
          var r = t.redSqr().redISub(this.x).redISub(e.x),
            d = t.redMul(this.x.redSub(r)).redISub(this.y);
          return this.curve.point(r, d);
        }),
        (Point.prototype.dbl = function () {
          if (this.inf) return this;
          var e = this.y.redAdd(this.y);
          if (0 === e.cmpn(0)) return this.curve.point(null, null);
          var t = this.curve.a,
            r = this.x.redSqr(),
            d = e.redInvm(),
            f = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(d),
            i = f.redSqr().redISub(this.x.redAdd(this.x)),
            n = f.redMul(this.x.redSub(i)).redISub(this.y);
          return this.curve.point(i, n);
        }),
        (Point.prototype.getX = function () {
          return this.x.fromRed();
        }),
        (Point.prototype.getY = function () {
          return this.y.fromRed();
        }),
        (Point.prototype.mul = function (e) {
          return (
            (e = new i(e, 16)),
            this._hasDoubles(e)
              ? this.curve._fixedNafMul(this, e)
              : this.curve.endo
                ? this.curve._endoWnafMulAdd([this], [e])
                : this.curve._wnafMul(this, e)
          );
        }),
        (Point.prototype.mulAdd = function (e, t, r) {
          var d = [this, t],
            f = [e, r];
          return this.curve.endo
            ? this.curve._endoWnafMulAdd(d, f)
            : this.curve._wnafMulAdd(1, d, f, 2);
        }),
        (Point.prototype.eq = function (e) {
          return (
            this === e ||
            (this.inf === e.inf &&
              (this.inf || (0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))))
          );
        }),
        (Point.prototype.neg = function (e) {
          if (this.inf) return this;
          var t = this.curve.point(this.x, this.y.redNeg());
          if (e && this.precomputed) {
            var r = this.precomputed,
              d = function (e) {
                return e.neg();
              };
            t.precomputed = {
              naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(d) },
              doubles: r.doubles && {
                step: r.doubles.step,
                points: r.doubles.points.map(d),
              },
            };
          }
          return t;
        }),
        (Point.prototype.toJ = function () {
          if (this.inf) return this.curve.jpoint(null, null, null);
          var e = this.curve.jpoint(this.x, this.y, this.curve.one);
          return e;
        }),
        n(o, c.BasePoint),
        (s.prototype.jpoint = function (e, t, r) {
          return new o(this, e, t, r);
        }),
        (o.prototype.toP = function () {
          if (this.isInfinity()) return this.curve.point(null, null);
          var e = this.z.redInvm(),
            t = e.redSqr(),
            r = this.x.redMul(t),
            d = this.y.redMul(t).redMul(e);
          return this.curve.point(r, d);
        }),
        (o.prototype.neg = function () {
          return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
        }),
        (o.prototype.add = function (e) {
          if (this.isInfinity()) return e;
          if (e.isInfinity()) return this;
          var t = e.z.redSqr(),
            r = this.z.redSqr(),
            d = this.x.redMul(t),
            f = e.x.redMul(r),
            i = this.y.redMul(t.redMul(e.z)),
            n = e.y.redMul(r.redMul(this.z)),
            c = d.redSub(f),
            a = i.redSub(n);
          if (0 === c.cmpn(0))
            return 0 !== a.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var s = c.redSqr(),
            o = s.redMul(c),
            b = d.redMul(s),
            h = a.redSqr().redIAdd(o).redISub(b).redISub(b),
            u = a.redMul(b.redISub(h)).redISub(i.redMul(o)),
            p = this.z.redMul(e.z).redMul(c);
          return this.curve.jpoint(h, u, p);
        }),
        (o.prototype.mixedAdd = function (e) {
          if (this.isInfinity()) return e.toJ();
          if (e.isInfinity()) return this;
          var t = this.z.redSqr(),
            r = this.x,
            d = e.x.redMul(t),
            f = this.y,
            i = e.y.redMul(t).redMul(this.z),
            n = r.redSub(d),
            c = f.redSub(i);
          if (0 === n.cmpn(0))
            return 0 !== c.cmpn(0)
              ? this.curve.jpoint(null, null, null)
              : this.dbl();
          var a = n.redSqr(),
            s = a.redMul(n),
            o = r.redMul(a),
            b = c.redSqr().redIAdd(s).redISub(o).redISub(o),
            h = c.redMul(o.redISub(b)).redISub(f.redMul(s)),
            u = this.z.redMul(n);
          return this.curve.jpoint(b, h, u);
        }),
        (o.prototype.dblp = function (e) {
          if (0 === e) return this;
          if (this.isInfinity()) return this;
          if (!e) return this.dbl();
          if (this.curve.zeroA || this.curve.threeA) {
            for (var t = this, r = 0; r < e; r++) t = t.dbl();
            return t;
          }
          var d = this.curve.a,
            f = this.curve.tinv,
            i = this.x,
            n = this.y,
            c = this.z,
            a = c.redSqr().redSqr(),
            s = n.redAdd(n);
          for (r = 0; r < e; r++) {
            var o = i.redSqr(),
              b = s.redSqr(),
              h = b.redSqr(),
              u = o.redAdd(o).redIAdd(o).redIAdd(d.redMul(a)),
              p = i.redMul(b),
              l = u.redSqr().redISub(p.redAdd(p)),
              v = p.redISub(l),
              m = u.redMul(v);
            m = m.redIAdd(m).redISub(h);
            var y = s.redMul(c);
            (r + 1 < e && (a = a.redMul(h)), (i = l), (c = y), (s = m));
          }
          return this.curve.jpoint(i, s.redMul(f), c);
        }),
        (o.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.zeroA
              ? this._zeroDbl()
              : this.curve.threeA
                ? this._threeDbl()
                : this._dbl();
        }),
        (o.prototype._zeroDbl = function () {
          var e, t, r;
          if (this.zOne) {
            var d = this.x.redSqr(),
              f = this.y.redSqr(),
              i = f.redSqr(),
              n = this.x.redAdd(f).redSqr().redISub(d).redISub(i);
            n = n.redIAdd(n);
            var c = d.redAdd(d).redIAdd(d),
              a = c.redSqr().redISub(n).redISub(n),
              s = i.redIAdd(i);
            ((s = s.redIAdd(s)),
              (s = s.redIAdd(s)),
              (e = a),
              (t = c.redMul(n.redISub(a)).redISub(s)),
              (r = this.y.redAdd(this.y)));
          } else {
            var o = this.x.redSqr(),
              b = this.y.redSqr(),
              h = b.redSqr(),
              u = this.x.redAdd(b).redSqr().redISub(o).redISub(h);
            u = u.redIAdd(u);
            var p = o.redAdd(o).redIAdd(o),
              l = p.redSqr(),
              v = h.redIAdd(h);
            ((v = v.redIAdd(v)),
              (v = v.redIAdd(v)),
              (e = l.redISub(u).redISub(u)),
              (t = p.redMul(u.redISub(e)).redISub(v)),
              (r = this.y.redMul(this.z)),
              (r = r.redIAdd(r)));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (o.prototype._threeDbl = function () {
          var e, t, r;
          if (this.zOne) {
            var d = this.x.redSqr(),
              f = this.y.redSqr(),
              i = f.redSqr(),
              n = this.x.redAdd(f).redSqr().redISub(d).redISub(i);
            n = n.redIAdd(n);
            var c = d.redAdd(d).redIAdd(d).redIAdd(this.curve.a),
              a = c.redSqr().redISub(n).redISub(n);
            e = a;
            var s = i.redIAdd(i);
            ((s = s.redIAdd(s)),
              (s = s.redIAdd(s)),
              (t = c.redMul(n.redISub(a)).redISub(s)),
              (r = this.y.redAdd(this.y)));
          } else {
            var o = this.z.redSqr(),
              b = this.y.redSqr(),
              h = this.x.redMul(b),
              u = this.x.redSub(o).redMul(this.x.redAdd(o));
            u = u.redAdd(u).redIAdd(u);
            var p = h.redIAdd(h);
            p = p.redIAdd(p);
            var l = p.redAdd(p);
            ((e = u.redSqr().redISub(l)),
              (r = this.y.redAdd(this.z).redSqr().redISub(b).redISub(o)));
            var v = b.redSqr();
            ((v = v.redIAdd(v)),
              (v = v.redIAdd(v)),
              (v = v.redIAdd(v)),
              (t = u.redMul(p.redISub(e)).redISub(v)));
          }
          return this.curve.jpoint(e, t, r);
        }),
        (o.prototype._dbl = function () {
          var e = this.curve.a,
            t = this.x,
            r = this.y,
            d = this.z,
            f = d.redSqr().redSqr(),
            i = t.redSqr(),
            n = r.redSqr(),
            c = i.redAdd(i).redIAdd(i).redIAdd(e.redMul(f)),
            a = t.redAdd(t);
          a = a.redIAdd(a);
          var s = a.redMul(n),
            o = c.redSqr().redISub(s.redAdd(s)),
            b = s.redISub(o),
            h = n.redSqr();
          ((h = h.redIAdd(h)), (h = h.redIAdd(h)), (h = h.redIAdd(h)));
          var u = c.redMul(b).redISub(h),
            p = r.redAdd(r).redMul(d);
          return this.curve.jpoint(o, u, p);
        }),
        (o.prototype.trpl = function () {
          if (!this.curve.zeroA) return this.dbl().add(this);
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr(),
            d = t.redSqr(),
            f = e.redAdd(e).redIAdd(e),
            i = f.redSqr(),
            n = this.x.redAdd(t).redSqr().redISub(e).redISub(d);
          ((n = n.redIAdd(n)),
            (n = n.redAdd(n).redIAdd(n)),
            (n = n.redISub(i)));
          var c = n.redSqr(),
            a = d.redIAdd(d);
          ((a = a.redIAdd(a)), (a = a.redIAdd(a)), (a = a.redIAdd(a)));
          var s = f.redIAdd(n).redSqr().redISub(i).redISub(c).redISub(a),
            o = t.redMul(s);
          ((o = o.redIAdd(o)), (o = o.redIAdd(o)));
          var b = this.x.redMul(c).redISub(o);
          ((b = b.redIAdd(b)), (b = b.redIAdd(b)));
          var h = this.y.redMul(s.redMul(a.redISub(s)).redISub(n.redMul(c)));
          ((h = h.redIAdd(h)), (h = h.redIAdd(h)), (h = h.redIAdd(h)));
          var u = this.z.redAdd(n).redSqr().redISub(r).redISub(c);
          return this.curve.jpoint(b, h, u);
        }),
        (o.prototype.mul = function (e, t) {
          return ((e = new i(e, t)), this.curve._wnafMul(this, e));
        }),
        (o.prototype.eq = function (e) {
          if ("affine" === e.type) return this.eq(e.toJ());
          if (this === e) return !0;
          var t = this.z.redSqr(),
            r = e.z.redSqr();
          if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0)) return !1;
          var d = t.redMul(this.z),
            f = r.redMul(e.z);
          return 0 === this.y.redMul(f).redISub(e.y.redMul(d)).cmpn(0);
        }),
        (o.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC JPoint Infinity>"
            : "<EC JPoint x: " +
                this.x.toString(16, 2) +
                " y: " +
                this.y.toString(16, 2) +
                " z: " +
                this.z.toString(16, 2) +
                ">";
        }),
        (o.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        }));
    },
    11331: function (e, t, r) {
      "use strict";
      var d = r(4867),
        f = r(3467),
        i = r(16),
        n = d.base;
      function c(e) {
        (n.call(this, "mont", e),
          (this.a = new f(e.a, 16).toRed(this.red)),
          (this.b = new f(e.b, 16).toRed(this.red)),
          (this.i4 = new f(4).toRed(this.red).redInvm()),
          (this.two = new f(2).toRed(this.red)),
          (this.a24 = this.i4.redMul(this.a.redAdd(this.two))));
      }
      function Point(e, t, r) {
        (n.BasePoint.call(this, e, "projective"),
          null === t && null === r
            ? ((this.x = this.curve.one), (this.z = this.curve.zero))
            : ((this.x = new f(t, 16)),
              (this.z = new f(r, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red))));
      }
      (i(c, n),
        (e.exports = c),
        (c.prototype.validate = function (e) {
          var t = e.normalize().x,
            r = t.redSqr(),
            d = r.redMul(t).redAdd(r.redMul(this.a)).redAdd(t),
            f = d.redSqrt();
          return 0 === f.redSqr().cmp(d);
        }),
        i(Point, n.BasePoint),
        (c.prototype.point = function (e, t) {
          return new Point(this, e, t);
        }),
        (c.prototype.pointFromJSON = function (e) {
          return Point.fromJSON(this, e);
        }),
        (Point.prototype.precompute = function () {}),
        (Point.fromJSON = function (e, t) {
          return new Point(e, t[0], t[1] || e.one);
        }),
        (Point.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (Point.prototype.isInfinity = function () {
          return 0 === this.z.cmpn(0);
        }),
        (Point.prototype.dbl = function () {
          var e = this.x.redAdd(this.z),
            t = e.redSqr(),
            r = this.x.redSub(this.z),
            d = r.redSqr(),
            f = t.redSub(d),
            i = t.redMul(d),
            n = f.redMul(d.redAdd(this.curve.a24.redMul(f)));
          return this.curve.point(i, n);
        }),
        (Point.prototype.add = function () {
          throw new Error("Not supported on Montgomery curve");
        }),
        (Point.prototype.diffAdd = function (e, t) {
          var r = this.x.redAdd(this.z),
            d = this.x.redSub(this.z),
            f = e.x.redAdd(e.z),
            i = e.x.redSub(e.z),
            n = i.redMul(r),
            c = f.redMul(d),
            a = t.z.redMul(n.redAdd(c).redSqr()),
            s = t.x.redMul(n.redISub(c).redSqr());
          return this.curve.point(a, s);
        }),
        (Point.prototype.mul = function (e) {
          for (
            var t = e.clone(),
              r = this,
              d = this.curve.point(null, null),
              f = this,
              i = [];
            0 !== t.cmpn(0);
            t.ishrn(1)
          )
            i.push(t.andln(1));
          for (var n = i.length - 1; n >= 0; n--)
            0 === i[n]
              ? ((r = r.diffAdd(d, f)), (d = d.dbl()))
              : ((d = r.diffAdd(d, f)), (r = r.dbl()));
          return d;
        }),
        (Point.prototype.mulAdd = function () {
          throw new Error("Not supported on Montgomery curve");
        }),
        (Point.prototype.normalize = function () {
          return (
            (this.x = this.x.redMul(this.z.redInvm())),
            (this.z = this.curve.one),
            this
          );
        }),
        (Point.prototype.getX = function () {
          return (this.normalize(), this.x.fromRed());
        }));
    },
    11332: function (e, t, r) {
      "use strict";
      var d = r(4867),
        f = r(3402),
        i = r(3467),
        n = r(16),
        c = d.base,
        a = f.utils.assert;
      function s(e) {
        ((this.twisted = 1 !== (0 | e.a)),
          (this.mOneA = this.twisted && -1 === (0 | e.a)),
          (this.extended = this.mOneA),
          c.call(this, "edwards", e),
          (this.a = new i(e.a, 16).mod(this.red.m).toRed(this.red)),
          (this.c = new i(e.c, 16).toRed(this.red)),
          (this.c2 = this.c.redSqr()),
          (this.d = new i(e.d, 16).toRed(this.red)),
          (this.dd = this.d.redAdd(this.d)),
          a(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
          (this.oneC = 1 === (0 | e.c)));
      }
      function Point(e, t, r, d, f) {
        (c.BasePoint.call(this, e, "projective"),
          null === t && null === r && null === d
            ? ((this.x = this.curve.zero),
              (this.y = this.curve.one),
              (this.z = this.curve.one),
              (this.t = this.curve.zero),
              (this.zOne = !0))
            : ((this.x = new i(t, 16)),
              (this.y = new i(r, 16)),
              (this.z = d ? new i(d, 16) : this.curve.one),
              (this.t = f && new i(f, 16)),
              this.x.red || (this.x = this.x.toRed(this.curve.red)),
              this.y.red || (this.y = this.y.toRed(this.curve.red)),
              this.z.red || (this.z = this.z.toRed(this.curve.red)),
              this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)),
              (this.zOne = this.z === this.curve.one),
              this.curve.extended &&
                !this.t &&
                ((this.t = this.x.redMul(this.y)),
                this.zOne || (this.t = this.t.redMul(this.z.redInvm())))));
      }
      (n(s, c),
        (e.exports = s),
        (s.prototype._mulA = function (e) {
          return this.mOneA ? e.redNeg() : this.a.redMul(e);
        }),
        (s.prototype._mulC = function (e) {
          return this.oneC ? e : this.c.redMul(e);
        }),
        (s.prototype.jpoint = function (e, t, r, d) {
          return this.point(e, t, r, d);
        }),
        (s.prototype.pointFromX = function (e, t) {
          ((t = new i(t, 16)), t.red || (t = t.toRed(this.red)));
          var r = t.redSqr(),
            f = this.c2.redSub(this.a.redMul(r)),
            n = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
            c = f.redMul(n.redInvm()).redSqrt(),
            a = c.fromRed().isOdd();
          return (
            ((e && !a) || (!e && a)) && (c = c.redNeg()),
            this.point(t, c, d.one)
          );
        }),
        (s.prototype.validate = function (e) {
          if (e.isInfinity()) return !0;
          e.normalize();
          var t = e.x.redSqr(),
            r = e.y.redSqr(),
            d = t.redMul(this.a).redAdd(r),
            f = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(r)));
          return 0 === d.cmp(f);
        }),
        n(Point, c.BasePoint),
        (s.prototype.pointFromJSON = function (e) {
          return Point.fromJSON(this, e);
        }),
        (s.prototype.point = function (e, t, r, d) {
          return new Point(this, e, t, r, d);
        }),
        (Point.fromJSON = function (e, t) {
          return new Point(e, t[0], t[1], t[2]);
        }),
        (Point.prototype.inspect = function () {
          return this.isInfinity()
            ? "<EC Point Infinity>"
            : "<EC Point x: " +
                this.x.fromRed().toString(16, 2) +
                " y: " +
                this.y.fromRed().toString(16, 2) +
                " z: " +
                this.z.fromRed().toString(16, 2) +
                ">";
        }),
        (Point.prototype.isInfinity = function () {
          return 0 === this.x.cmpn(0) && 0 === this.y.cmp(this.z);
        }),
        (Point.prototype._extDbl = function () {
          var e = this.x.redSqr(),
            t = this.y.redSqr(),
            r = this.z.redSqr();
          r = r.redIAdd(r);
          var d = this.curve._mulA(e),
            f = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
            i = d.redAdd(t),
            n = i.redSub(r),
            c = d.redSub(t),
            a = f.redMul(n),
            s = i.redMul(c),
            o = f.redMul(c),
            b = n.redMul(i);
          return this.curve.point(a, s, b, o);
        }),
        (Point.prototype._projDbl = function () {
          var e,
            t,
            r,
            d = this.x.redAdd(this.y).redSqr(),
            f = this.x.redSqr(),
            i = this.y.redSqr();
          if (this.curve.twisted) {
            var n = this.curve._mulA(f),
              c = n.redAdd(i);
            if (this.zOne)
              ((e = d.redSub(f).redSub(i).redMul(c.redSub(this.curve.two))),
                (t = c.redMul(n.redSub(i))),
                (r = c.redSqr().redSub(c).redSub(c)));
            else {
              var a = this.z.redSqr(),
                s = c.redSub(a).redISub(a);
              ((e = d.redSub(f).redISub(i).redMul(s)),
                (t = c.redMul(n.redSub(i))),
                (r = c.redMul(s)));
            }
          } else {
            ((n = f.redAdd(i)),
              (a = this.curve._mulC(this.c.redMul(this.z)).redSqr()),
              (s = n.redSub(a).redSub(a)));
            ((e = this.curve._mulC(d.redISub(n)).redMul(s)),
              (t = this.curve._mulC(n).redMul(f.redISub(i))),
              (r = n.redMul(s)));
          }
          return this.curve.point(e, t, r);
        }),
        (Point.prototype.dbl = function () {
          return this.isInfinity()
            ? this
            : this.curve.extended
              ? this._extDbl()
              : this._projDbl();
        }),
        (Point.prototype._extAdd = function (e) {
          var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
            r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
            d = this.t.redMul(this.curve.dd).redMul(e.t),
            f = this.z.redMul(e.z.redAdd(e.z)),
            i = r.redSub(t),
            n = f.redSub(d),
            c = f.redAdd(d),
            a = r.redAdd(t),
            s = i.redMul(n),
            o = c.redMul(a),
            b = i.redMul(a),
            h = n.redMul(c);
          return this.curve.point(s, o, h, b);
        }),
        (Point.prototype._projAdd = function (e) {
          var t,
            r,
            d = this.z.redMul(e.z),
            f = d.redSqr(),
            i = this.x.redMul(e.x),
            n = this.y.redMul(e.y),
            c = this.curve.d.redMul(i).redMul(n),
            a = f.redSub(c),
            s = f.redAdd(c),
            o = this.x
              .redAdd(this.y)
              .redMul(e.x.redAdd(e.y))
              .redISub(i)
              .redISub(n),
            b = d.redMul(a).redMul(o);
          return (
            this.curve.twisted
              ? ((t = d.redMul(s).redMul(n.redSub(this.curve._mulA(i)))),
                (r = a.redMul(s)))
              : ((t = d.redMul(s).redMul(n.redSub(i))),
                (r = this.curve._mulC(a).redMul(s))),
            this.curve.point(b, t, r)
          );
        }),
        (Point.prototype.add = function (e) {
          return this.isInfinity()
            ? e
            : e.isInfinity()
              ? this
              : this.curve.extended
                ? this._extAdd(e)
                : this._projAdd(e);
        }),
        (Point.prototype.mul = function (e) {
          return this._hasDoubles(e)
            ? this.curve._fixedNafMul(this, e)
            : this.curve._wnafMul(this, e);
        }),
        (Point.prototype.mulAdd = function (e, t, r) {
          return this.curve._wnafMulAdd(1, [this, t], [e, r], 2);
        }),
        (Point.prototype.normalize = function () {
          if (this.zOne) return this;
          var e = this.z.redInvm();
          return (
            (this.x = this.x.redMul(e)),
            (this.y = this.y.redMul(e)),
            this.t && (this.t = this.t.redMul(e)),
            (this.z = this.curve.one),
            (this.zOne = !0),
            this
          );
        }),
        (Point.prototype.neg = function () {
          return this.curve.point(
            this.x.redNeg(),
            this.y,
            this.z,
            this.t && this.t.redNeg(),
          );
        }),
        (Point.prototype.getX = function () {
          return (this.normalize(), this.x.fromRed());
        }),
        (Point.prototype.getY = function () {
          return (this.normalize(), this.y.fromRed());
        }),
        (Point.prototype.toP = Point.prototype.normalize),
        (Point.prototype.mixedAdd = Point.prototype.add));
    },
    11333: function (e, t, r) {
      "use strict";
      var d,
        f = t,
        i = r(43),
        n = r(3402),
        c = n.utils.assert;
      function a(e) {
        ("short" === e.type
          ? (this.curve = new n.curve.short(e))
          : "edwards" === e.type
            ? (this.curve = new n.curve.edwards(e))
            : (this.curve = new n.curve.mont(e)),
          (this.g = this.curve.g),
          (this.n = this.curve.n),
          (this.hash = e.hash),
          c(this.g.validate(), "Invalid curve"),
          c(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O"));
      }
      function s(e, t) {
        Object.defineProperty(f, e, {
          configurable: !0,
          enumerable: !0,
          get: function () {
            var r = new a(t);
            return (
              Object.defineProperty(f, e, {
                configurable: !0,
                enumerable: !0,
                value: r,
              }),
              r
            );
          },
        });
      }
      ((f.PresetCurve = a),
        s("p192", {
          type: "short",
          prime: "p192",
          p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
          b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
          n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
          hash: i.sha256,
          gRed: !1,
          g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
          ],
        }),
        s("p224", {
          type: "short",
          prime: "p224",
          p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
          a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
          b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
          n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
          hash: i.sha256,
          gRed: !1,
          g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
          ],
        }),
        s("p256", {
          type: "short",
          prime: null,
          p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
          a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
          b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
          n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
          hash: i.sha256,
          gRed: !1,
          g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
          ],
        }),
        s("curve25519", {
          type: "mont",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "76d06",
          b: "0",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: i.sha256,
          gRed: !1,
          g: ["9"],
        }),
        s("ed25519", {
          type: "edwards",
          prime: "p25519",
          p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
          a: "-1",
          c: "1",
          d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
          n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
          hash: i.sha256,
          gRed: !1,
          g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658",
          ],
        }));
      try {
        d = r(11334);
      } catch (o) {
        d = void 0;
      }
      s("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: i.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda:
          "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [
          {
            a: "3086d221a7d46bcde86c90e49284eb15",
            b: "-e4437ed6010e88286f547fa90abfe4c3",
          },
          {
            a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
            b: "3086d221a7d46bcde86c90e49284eb15",
          },
        ],
        gRed: !1,
        g: [
          "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
          "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
          d,
        ],
      });
    },
    11334: function (e, t) {
      e.exports = {
        doubles: {
          step: 4,
          points: [
            [
              "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
              "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821",
            ],
            [
              "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
              "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf",
            ],
            [
              "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
              "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695",
            ],
            [
              "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
              "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9",
            ],
            [
              "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
              "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36",
            ],
            [
              "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
              "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f",
            ],
            [
              "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
              "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999",
            ],
            [
              "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
              "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09",
            ],
            [
              "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
              "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d",
            ],
            [
              "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
              "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088",
            ],
            [
              "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
              "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d",
            ],
            [
              "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
              "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8",
            ],
            [
              "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
              "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a",
            ],
            [
              "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
              "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453",
            ],
            [
              "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
              "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160",
            ],
            [
              "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
              "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0",
            ],
            [
              "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
              "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6",
            ],
            [
              "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
              "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589",
            ],
            [
              "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
              "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17",
            ],
            [
              "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
              "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda",
            ],
            [
              "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
              "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd",
            ],
            [
              "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
              "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2",
            ],
            [
              "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
              "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6",
            ],
            [
              "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
              "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f",
            ],
            [
              "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
              "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01",
            ],
            [
              "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
              "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3",
            ],
            [
              "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
              "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f",
            ],
            [
              "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
              "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7",
            ],
            [
              "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
              "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78",
            ],
            [
              "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
              "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1",
            ],
            [
              "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
              "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150",
            ],
            [
              "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
              "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82",
            ],
            [
              "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
              "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc",
            ],
            [
              "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
              "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b",
            ],
            [
              "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
              "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51",
            ],
            [
              "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
              "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45",
            ],
            [
              "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
              "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120",
            ],
            [
              "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
              "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84",
            ],
            [
              "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
              "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d",
            ],
            [
              "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
              "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d",
            ],
            [
              "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
              "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8",
            ],
            [
              "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
              "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8",
            ],
            [
              "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
              "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac",
            ],
            [
              "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
              "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f",
            ],
            [
              "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
              "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962",
            ],
            [
              "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
              "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907",
            ],
            [
              "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
              "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec",
            ],
            [
              "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
              "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d",
            ],
            [
              "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
              "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414",
            ],
            [
              "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
              "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd",
            ],
            [
              "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
              "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0",
            ],
            [
              "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
              "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811",
            ],
            [
              "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
              "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1",
            ],
            [
              "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
              "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c",
            ],
            [
              "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
              "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73",
            ],
            [
              "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
              "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd",
            ],
            [
              "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
              "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405",
            ],
            [
              "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
              "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589",
            ],
            [
              "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
              "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e",
            ],
            [
              "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
              "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27",
            ],
            [
              "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
              "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1",
            ],
            [
              "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
              "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482",
            ],
            [
              "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
              "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945",
            ],
            [
              "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
              "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573",
            ],
            [
              "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
              "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82",
            ],
          ],
        },
        naf: {
          wnd: 7,
          points: [
            [
              "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
              "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672",
            ],
            [
              "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
              "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6",
            ],
            [
              "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
              "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da",
            ],
            [
              "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
              "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37",
            ],
            [
              "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
              "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b",
            ],
            [
              "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
              "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81",
            ],
            [
              "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
              "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58",
            ],
            [
              "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
              "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77",
            ],
            [
              "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
              "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a",
            ],
            [
              "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
              "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c",
            ],
            [
              "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
              "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67",
            ],
            [
              "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
              "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402",
            ],
            [
              "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
              "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55",
            ],
            [
              "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
              "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482",
            ],
            [
              "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
              "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82",
            ],
            [
              "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
              "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396",
            ],
            [
              "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
              "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49",
            ],
            [
              "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
              "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf",
            ],
            [
              "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
              "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a",
            ],
            [
              "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
              "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7",
            ],
            [
              "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
              "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933",
            ],
            [
              "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
              "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a",
            ],
            [
              "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
              "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6",
            ],
            [
              "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
              "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37",
            ],
            [
              "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
              "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e",
            ],
            [
              "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
              "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6",
            ],
            [
              "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
              "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476",
            ],
            [
              "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
              "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40",
            ],
            [
              "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
              "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61",
            ],
            [
              "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
              "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683",
            ],
            [
              "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
              "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5",
            ],
            [
              "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
              "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b",
            ],
            [
              "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
              "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417",
            ],
            [
              "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
              "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868",
            ],
            [
              "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
              "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a",
            ],
            [
              "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
              "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6",
            ],
            [
              "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
              "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996",
            ],
            [
              "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
              "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e",
            ],
            [
              "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
              "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d",
            ],
            [
              "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
              "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2",
            ],
            [
              "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
              "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e",
            ],
            [
              "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
              "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437",
            ],
            [
              "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
              "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311",
            ],
            [
              "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
              "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4",
            ],
            [
              "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
              "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575",
            ],
            [
              "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
              "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d",
            ],
            [
              "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
              "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d",
            ],
            [
              "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
              "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629",
            ],
            [
              "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
              "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06",
            ],
            [
              "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
              "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374",
            ],
            [
              "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
              "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee",
            ],
            [
              "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
              "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1",
            ],
            [
              "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
              "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b",
            ],
            [
              "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
              "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661",
            ],
            [
              "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
              "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6",
            ],
            [
              "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
              "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e",
            ],
            [
              "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
              "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d",
            ],
            [
              "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
              "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc",
            ],
            [
              "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
              "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4",
            ],
            [
              "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
              "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c",
            ],
            [
              "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
              "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b",
            ],
            [
              "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
              "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913",
            ],
            [
              "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
              "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154",
            ],
            [
              "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
              "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865",
            ],
            [
              "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
              "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc",
            ],
            [
              "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
              "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224",
            ],
            [
              "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
              "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e",
            ],
            [
              "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
              "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6",
            ],
            [
              "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
              "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511",
            ],
            [
              "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
              "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b",
            ],
            [
              "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
              "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2",
            ],
            [
              "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
              "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c",
            ],
            [
              "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
              "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3",
            ],
            [
              "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
              "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d",
            ],
            [
              "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
              "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700",
            ],
            [
              "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
              "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4",
            ],
            [
              "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
              "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196",
            ],
            [
              "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
              "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4",
            ],
            [
              "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
              "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257",
            ],
            [
              "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
              "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13",
            ],
            [
              "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
              "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096",
            ],
            [
              "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
              "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38",
            ],
            [
              "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
              "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f",
            ],
            [
              "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
              "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448",
            ],
            [
              "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
              "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a",
            ],
            [
              "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
              "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4",
            ],
            [
              "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
              "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437",
            ],
            [
              "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
              "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7",
            ],
            [
              "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
              "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d",
            ],
            [
              "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
              "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a",
            ],
            [
              "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
              "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54",
            ],
            [
              "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
              "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77",
            ],
            [
              "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
              "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517",
            ],
            [
              "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
              "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10",
            ],
            [
              "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
              "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125",
            ],
            [
              "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
              "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e",
            ],
            [
              "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
              "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1",
            ],
            [
              "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
              "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2",
            ],
            [
              "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
              "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423",
            ],
            [
              "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
              "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8",
            ],
            [
              "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
              "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758",
            ],
            [
              "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
              "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375",
            ],
            [
              "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
              "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d",
            ],
            [
              "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
              "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec",
            ],
            [
              "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
              "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0",
            ],
            [
              "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
              "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c",
            ],
            [
              "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
              "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4",
            ],
            [
              "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
              "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f",
            ],
            [
              "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
              "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649",
            ],
            [
              "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
              "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826",
            ],
            [
              "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
              "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5",
            ],
            [
              "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
              "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87",
            ],
            [
              "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
              "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b",
            ],
            [
              "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
              "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc",
            ],
            [
              "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
              "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c",
            ],
            [
              "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
              "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f",
            ],
            [
              "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
              "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a",
            ],
            [
              "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
              "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46",
            ],
            [
              "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
              "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f",
            ],
            [
              "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
              "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03",
            ],
            [
              "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
              "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08",
            ],
            [
              "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
              "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8",
            ],
            [
              "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
              "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373",
            ],
            [
              "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
              "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3",
            ],
            [
              "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
              "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8",
            ],
            [
              "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
              "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1",
            ],
            [
              "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
              "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9",
            ],
          ],
        },
      };
    },
    11335: function (e, t, r) {
      "use strict";
      var d = r(3467),
        f = r(3402),
        i = f.utils,
        n = i.assert,
        c = r(11336),
        a = r(11337);
      function s(e) {
        if (!(this instanceof s)) return new s(e);
        ("string" === typeof e &&
          (n(f.curves.hasOwnProperty(e), "Unknown curve " + e),
          (e = f.curves[e])),
          e instanceof f.curves.PresetCurve && (e = { curve: e }),
          (this.curve = e.curve.curve),
          (this.n = this.curve.n),
          (this.nh = this.n.shrn(1)),
          (this.g = this.curve.g),
          (this.g = e.curve.g),
          this.g.precompute(e.curve.n.bitLength() + 1),
          (this.hash = e.hash || e.curve.hash));
      }
      ((e.exports = s),
        (s.prototype.keyPair = function (e) {
          return new c(this, e);
        }),
        (s.prototype.keyFromPrivate = function (e, t) {
          return c.fromPrivate(this, e, t);
        }),
        (s.prototype.keyFromPublic = function (e, t) {
          return c.fromPublic(this, e, t);
        }),
        (s.prototype.genKeyPair = function (e) {
          e || (e = {});
          var t = new f.hmacDRBG({
              hash: this.hash,
              pers: e.pers,
              entropy: e.entropy || f.rand(this.hash.hmacStrength),
              nonce: this.n.toArray(),
            }),
            r = this.n.byteLength(),
            i = this.n.sub(new d(2));
          do {
            var n = new d(t.generate(r));
            if (!(n.cmp(i) > 0)) return (n.iaddn(1), this.keyFromPrivate(n));
          } while (1);
        }),
        (s.prototype._truncateToN = function (e, t) {
          var r = 8 * e.byteLength() - this.n.bitLength();
          return (
            r > 0 && (e = e.shrn(r)),
            !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
          );
        }),
        (s.prototype.sign = function (e, t, r, i) {
          ("object" === typeof r && ((i = r), (r = null)),
            i || (i = {}),
            (t = this.keyFromPrivate(t, r)),
            (e = this._truncateToN(new d(e, 16))));
          for (
            var n = this.n.byteLength(),
              c = t.getPrivate().toArray(),
              s = c.length;
            s < 21;
            s++
          )
            c.unshift(0);
          var o = e.toArray();
          for (s = o.length; s < n; s++) o.unshift(0);
          var b = new f.hmacDRBG({ hash: this.hash, entropy: c, nonce: o }),
            h = this.n.sub(new d(1));
          do {
            var u = new d(b.generate(this.n.byteLength()));
            if (
              ((u = this._truncateToN(u, !0)),
              !(u.cmpn(1) <= 0 || u.cmp(h) >= 0))
            ) {
              var p = this.g.mul(u);
              if (!p.isInfinity()) {
                var l = p.getX(),
                  v = l.mod(this.n);
                if (0 !== v.cmpn(0)) {
                  var m = u
                    .invm(this.n)
                    .mul(v.mul(t.getPrivate()).iadd(e))
                    .mod(this.n);
                  if (0 !== m.cmpn(0)) {
                    i.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m));
                    var y =
                      (p.getY().isOdd() ? 1 : 0) | (0 !== l.cmp(v) ? 2 : 0);
                    return new a({ r: v, s: m, recoveryParam: y });
                  }
                }
              }
            }
          } while (1);
        }),
        (s.prototype.verify = function (e, t, r, f) {
          ((e = this._truncateToN(new d(e, 16))),
            (r = this.keyFromPublic(r, f)),
            (t = new a(t, "hex")));
          var i = t.r,
            n = t.s;
          if (i.cmpn(1) < 0 || i.cmp(this.n) >= 0) return !1;
          if (n.cmpn(1) < 0 || n.cmp(this.n) >= 0) return !1;
          var c = n.invm(this.n),
            s = c.mul(e).mod(this.n),
            o = c.mul(i).mod(this.n),
            b = this.g.mulAdd(s, r.getPublic(), o);
          return !b.isInfinity() && 0 === b.getX().mod(this.n).cmp(i);
        }),
        (s.prototype.recoverPubKey = function (e, t, r, f) {
          (n((3 & r) === r, "The recovery param is more than two bits"),
            (t = new a(t, f)));
          var i = this.n,
            c = new d(e),
            s = t.r,
            o = t.s,
            b = 1 & r,
            h = r >> 1;
          if (s.cmp(this.curve.p.mod(this.curve.n)) >= 0 && h)
            throw new Error("Unable to find sencond key candinate");
          s = this.curve.pointFromX(b, s);
          var u = c.neg().mod(i),
            p = t.r.invm(i);
          return s.mul(o).add(this.g.mul(u)).mul(p);
        }),
        (s.prototype.getKeyRecoveryParam = function (e, t, r, d) {
          if (((t = new a(t, d)), null !== t.recoveryParam))
            return t.recoveryParam;
          for (var f = 0; f < 4; f++) {
            var i = this.recoverPubKey(e, t, f);
            if (i.eq(r)) return f;
          }
          throw new Error("Unable to find valid recovery factor");
        }));
    },
    11336: function (e, t, r) {
      "use strict";
      var d = r(3467),
        f = r(3402),
        i = f.utils;
      function n(e, t) {
        ((this.ec = e),
          (this.priv = null),
          (this.pub = null),
          t.priv && this._importPrivate(t.priv, t.privEnc),
          t.pub && this._importPublic(t.pub, t.pubEnc));
      }
      ((e.exports = n),
        (n.fromPublic = function (e, t, r) {
          return t instanceof n ? t : new n(e, { pub: t, pubEnc: r });
        }),
        (n.fromPrivate = function (e, t, r) {
          return t instanceof n ? t : new n(e, { priv: t, privEnc: r });
        }),
        (n.prototype.validate = function () {
          var e = this.getPublic();
          return e.isInfinity()
            ? { result: !1, reason: "Invalid public key" }
            : e.validate()
              ? e.mul(this.ec.curve.n).isInfinity()
                ? { result: !0, reason: null }
                : { result: !1, reason: "Public key * N != O" }
              : { result: !1, reason: "Public key is not a point" };
        }),
        (n.prototype.getPublic = function (e, t) {
          if (
            (this.pub || (this.pub = this.ec.g.mul(this.priv)),
            "string" === typeof e && ((t = e), (e = null)),
            !t)
          )
            return this.pub;
          for (
            var r = this.ec.curve.p.byteLength(),
              d = this.pub.getX().toArray(),
              f = d.length;
            f < r;
            f++
          )
            d.unshift(0);
          if ("mont" !== this.ec.curve.type)
            if (e) c = [this.pub.getY().isEven() ? 2 : 3].concat(d);
            else {
              var n = this.pub.getY().toArray();
              for (f = n.length; f < r; f++) n.unshift(0);
              var c = [4].concat(d, n);
            }
          else c = d;
          return i.encode(c, t);
        }),
        (n.prototype.getPrivate = function (e) {
          return "hex" === e ? this.priv.toString(16, 2) : this.priv;
        }),
        (n.prototype._importPrivate = function (e, t) {
          ((this.priv = new d(e, t || 16)),
            (this.priv = this.priv.mod(this.ec.curve.n)));
        }),
        (n.prototype._importPublic = function (e, t) {
          if (!e.x && !e.y)
            return (
              (e = i.toArray(e, t)),
              "mont" !== this.ec.curve.type
                ? this._importPublicShort(e)
                : this._importPublicMont(e)
            );
          this.pub = this.ec.curve.point(e.x, e.y);
        }),
        (n.prototype._importPublicShort = function (e) {
          var t = this.ec.curve.p.byteLength();
          4 === e[0] && e.length - 1 === 2 * t
            ? (this.pub = this.ec.curve.point(
                e.slice(1, 1 + t),
                e.slice(1 + t, 1 + 2 * t),
              ))
            : (2 !== e[0] && 3 !== e[0]) ||
              e.length - 1 !== t ||
              (this.pub = this.ec.curve.pointFromX(
                3 === e[0],
                e.slice(1, 1 + t),
              ));
        }),
        (n.prototype._importPublicMont = function (e) {
          this.pub = this.ec.curve.point(e, 1);
        }),
        (n.prototype.derive = function (e) {
          return e.mul(this.priv).getX();
        }),
        (n.prototype.sign = function (e) {
          return this.ec.sign(e, this);
        }),
        (n.prototype.verify = function (e, t) {
          return this.ec.verify(e, t, this);
        }),
        (n.prototype.inspect = function () {
          return (
            "<Key priv: " +
            (this.priv && this.priv.toString(16, 2)) +
            " pub: " +
            (this.pub && this.pub.inspect()) +
            " >"
          );
        }));
    },
    11337: function (e, t, r) {
      "use strict";
      var d = r(3467),
        f = r(3402),
        i = f.utils,
        n = i.assert;
      function c(e, t) {
        if (e instanceof c) return e;
        this._importDER(e, t) ||
          (n(e.r && e.s, "Signature without r or s"),
          (this.r = new d(e.r, 16)),
          (this.s = new d(e.s, 16)),
          null !== e.recoveryParam
            ? (this.recoveryParam = e.recoveryParam)
            : (this.recoveryParam = null));
      }
      ((e.exports = c),
        (c.prototype._importDER = function (e, t) {
          if (
            ((e = i.toArray(e, t)), e.length < 6 || 48 !== e[0] || 2 !== e[2])
          )
            return !1;
          var r = e[1];
          if (1 + r > e.length) return !1;
          var f = e[3];
          if (f >= 128) return !1;
          if (4 + f + 2 >= e.length) return !1;
          if (2 !== e[4 + f]) return !1;
          var n = e[5 + f];
          return (
            !(n >= 128) &&
            !(4 + f + 2 + n > e.length) &&
            ((this.r = new d(e.slice(4, 4 + f))),
            (this.s = new d(e.slice(4 + f + 2, 4 + f + 2 + n))),
            (this.recoveryParam = null),
            !0)
          );
        }),
        (c.prototype.toDER = function (e) {
          var t = this.r.toArray(),
            r = this.s.toArray();
          (128 & t[0] && (t = [0].concat(t)),
            128 & r[0] && (r = [0].concat(r)));
          var d = t.length + r.length + 4,
            f = [48, d, 2, t.length];
          return ((f = f.concat(t, [2, r.length], r)), i.encode(f, e));
        }));
    },
    11354: function (e, t, r) {
      "use strict";
      var d = r(2896),
        f = r(231),
        i = r(3849),
        n = r(5709),
        c = function (e, t) {
          if (!(this instanceof c)) return new c(e, t);
          if (
            ((this.extras = {}),
            (this.knownParams = t || []),
            (this.address = this.network = this.amount = this.message = null),
            "string" === typeof e)
          ) {
            var r = c.parse(e);
            (r.amount && (r.amount = this._parseAmount(r.amount)),
              this._fromObject(r));
          } else {
            if ("object" !== typeof e)
              throw new TypeError("Unrecognized data format.");
            this._fromObject(e);
          }
        };
      ((c.fromString = function (e) {
        if ("string" !== typeof e) throw new TypeError("Expected a string");
        return new c(e);
      }),
        (c.fromObject = function (e) {
          return new c(e);
        }),
        (c.isValid = function (e, t) {
          try {
            new c(e, t);
          } catch (r) {
            return !1;
          }
          return !0;
        }),
        (c.parse = function (e) {
          var t = f.parse(e, !0);
          if ("decred:" !== t.protocol)
            throw new TypeError("Invalid decred URI");
          var r = /[^:]*:\/?\/?([^?]*)/.exec(e);
          return ((t.query.address = (r && r[1]) || void 0), t.query);
        }),
        (c.Members = ["address", "amount", "message", "label", "r"]),
        (c.prototype._fromObject = function (e) {
          if (!i.isValid(e.address))
            throw new TypeError("Invalid bitcoin address");
          for (var t in ((this.address = new i(e.address)),
          (this.network = this.address.network),
          (this.amount = e.amount),
          e))
            if ("address" !== t && "amount" !== t) {
              if (/^req-/.exec(t) && -1 === this.knownParams.indexOf(t))
                throw Error("Unknown required argument " + t);
              var r = c.Members.indexOf(t) > -1 ? this : this.extras;
              r[t] = e[t];
            }
        }),
        (c.prototype._parseAmount = function (e) {
          if (((e = Number(e)), isNaN(e)))
            throw new TypeError("Invalid amount");
          return n.fromDCR(e).toAtoms();
        }),
        (c.prototype.toObject = c.prototype.toJSON =
          function () {
            for (var e = {}, t = 0; t < c.Members.length; t++) {
              var r = c.Members[t];
              this.hasOwnProperty(r) &&
                "undefined" !== typeof this[r] &&
                (e[r] = this[r].toString());
            }
            return (d.extend(e, this.extras), e);
          }),
        (c.prototype.toString = function () {
          var e = {};
          return (
            this.amount && (e.amount = n.fromAtoms(this.amount).toDCR()),
            this.message && (e.message = this.message),
            this.label && (e.label = this.label),
            this.r && (e.r = this.r),
            d.extend(e, this.extras),
            f.format({ protocol: "decred:", host: this.address, query: e })
          );
        }),
        (c.prototype.inspect = function () {
          return "<URI: " + this.toString() + ">";
        }),
        (e.exports = c));
    },
    2912: function (e, t, r) {
      "use strict";
      var d = r(3358),
        f = r(2896);
      e.exports = {
        checkState: function (e, t) {
          if (!e) throw new d.InvalidState(t);
        },
        checkArgument: function (e, t, r, f) {
          if (!e) throw new d.InvalidArgument(t, r, f);
        },
        checkArgumentType: function (e, t, i) {
          if (((i = i || "(unknown name)"), f.isString(t))) {
            if ("Buffer" === t) {
              var n = r(2941);
              if (!n.isBuffer(e)) throw new d.InvalidArgumentType(e, t, i);
            } else if (typeof e !== t) throw new d.InvalidArgumentType(e, t, i);
          } else if (!(e instanceof t))
            throw new d.InvalidArgumentType(e, t.name, i);
        },
      };
    },
    2941: function (e, t, r) {
      "use strict";
      (function (t) {
        var d = r(2),
          f = r(229),
          i = r(3036),
          n = r(2912);
        function c(e, t) {
          if (e.length !== t.length) return !1;
          for (var r = e.length, d = 0; d < r; d++)
            if (e[d] !== t[d]) return !1;
          return !0;
        }
        ((e.exports = {
          fill: function (e, t) {
            (n.checkArgumentType(e, "Buffer", "buffer"),
              n.checkArgumentType(t, "number", "value"));
            for (var r = e.length, d = 0; d < r; d++) e[d] = t;
            return e;
          },
          copy: function (e) {
            var r = new t(e.length);
            return (e.copy(r), r);
          },
          isBuffer: function (e) {
            return d.Buffer.isBuffer(e) || e instanceof Uint8Array;
          },
          emptyBuffer: function (e) {
            n.checkArgumentType(e, "number", "bytes");
            for (var t = new d.Buffer(e), r = 0; r < e; r++) t.write("\0", r);
            return t;
          },
          concat: d.Buffer.concat,
          equals: c,
          equal: c,
          integerAsSingleByteBuffer: function (e) {
            return (
              n.checkArgumentType(e, "number", "integer"),
              new d.Buffer([255 & e])
            );
          },
          integerAsBuffer: function (e) {
            n.checkArgumentType(e, "number", "integer");
            var r = [];
            return (
              r.push((e >> 24) & 255),
              r.push((e >> 16) & 255),
              r.push((e >> 8) & 255),
              r.push(255 & e),
              new t(r)
            );
          },
          integerFromBuffer: function (e) {
            return (
              n.checkArgumentType(e, "Buffer", "buffer"),
              (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3]
            );
          },
          integerFromSingleByteBuffer: function (e) {
            return (n.checkArgumentType(e, "Buffer", "buffer"), e[0]);
          },
          bufferToHex: function (e) {
            return (
              n.checkArgumentType(e, "Buffer", "buffer"),
              e.toString("hex")
            );
          },
          reverse: function (e) {
            for (var t = new d.Buffer(e.length), r = 0; r < e.length; r++)
              t[r] = e[e.length - r - 1];
            return t;
          },
          hexToBuffer: function (e) {
            return (f(i.isHexa(e)), new d.Buffer(e, "hex"));
          },
        }),
          (e.exports.NULL_HASH = e.exports.fill(new t(32), 0)),
          (e.exports.EMPTY_BUFFER = new t(0)));
      }).call(this, r(2).Buffer);
    },
    3036: function (e, t, r) {
      "use strict";
      var d = r(2896),
        f = function (e) {
          return !!d.isString(e) && /^[0-9a-fA-F]+$/.test(e);
        };
      e.exports = {
        isValidJSON: function (e) {
          var t;
          if (!d.isString(e)) return !1;
          try {
            t = JSON.parse(e);
          } catch (r) {
            return !1;
          }
          return "object" === typeof t;
        },
        isHexa: f,
        isHexaString: f,
        cloneArray: function (e) {
          return [].concat(e);
        },
        defineImmutable: function (e, t) {
          return (
            Object.keys(t).forEach(function (r) {
              Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                value: t[r],
              });
            }),
            e
          );
        },
        isNaturalNumber: function (e) {
          return (
            "number" === typeof e &&
            isFinite(e) &&
            Math.floor(e) === e &&
            e >= 0
          );
        },
      };
    },
    3402: function (e, t, r) {
      "use strict";
      var d = t;
      ((d.version = r(11326).version),
        (d.utils = r(11327)),
        (d.rand = r(390)),
        (d.hmacDRBG = r(11328)),
        (d.curve = r(4867)),
        (d.curves = r(11333)),
        (d.ec = r(11335)));
    },
    3467: function (e, t, r) {
      (function (e) {
        (function (e, t) {
          "use strict";
          function r(e, t) {
            if (!e) throw new Error(t || "Assertion failed");
          }
          function d(e, t) {
            e.super_ = t;
            var r = function () {};
            ((r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e));
          }
          function f(e, t, r) {
            if (null !== e && "object" === typeof e && Array.isArray(e.words))
              return e;
            ((this.sign = !1),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              ("le" !== t && "be" !== t) || ((r = t), (t = 10)),
              null !== e && this._init(e || 0, t || 10, r || "be"));
          }
          function i(e, t, r) {
            for (var d = 0, f = Math.min(e.length, r), i = t; i < f; i++) {
              var n = e.charCodeAt(i) - 48;
              ((d <<= 4),
                (d |=
                  n >= 49 && n <= 54
                    ? n - 49 + 10
                    : n >= 17 && n <= 22
                      ? n - 17 + 10
                      : 15 & n));
            }
            return d;
          }
          function n(e, t, r, d) {
            for (var f = 0, i = Math.min(e.length, r), n = t; n < i; n++) {
              var c = e.charCodeAt(n) - 48;
              ((f *= d),
                (f += c >= 49 ? c - 49 + 10 : c >= 17 ? c - 17 + 10 : c));
            }
            return f;
          }
          ("object" === typeof e ? (e.exports = f) : (t.BN = f),
            (f.BN = f),
            (f.wordSize = 26),
            (f.prototype._init = function (e, t, d) {
              if ("number" === typeof e) return this._initNumber(e, t, d);
              if ("object" === typeof e) return this._initArray(e, t, d);
              ("hex" === t && (t = 16),
                r(t === (0 | t) && t >= 2 && t <= 36),
                (e = e.toString().replace(/\s+/g, "")));
              var f = 0;
              ("-" === e[0] && f++,
                16 === t ? this._parseHex(e, f) : this._parseBase(e, t, f),
                "-" === e[0] && (this.sign = !0),
                this.strip(),
                "le" === d && this._initArray(this.toArray(), t, d));
            }),
            (f.prototype._initNumber = function (e, t, d) {
              (e < 0 && ((this.sign = !0), (e = -e)),
                e < 67108864
                  ? ((this.words = [67108863 & e]), (this.length = 1))
                  : e < 4503599627370496
                    ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                      (this.length = 2))
                    : (r(e < 9007199254740992),
                      (this.words = [
                        67108863 & e,
                        (e / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === d && this._initArray(this.toArray(), t, d));
            }),
            (f.prototype._initArray = function (e, t, d) {
              if ((r("number" === typeof e.length), e.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(e.length / 3)),
                (this.words = new Array(this.length)));
              for (var f = 0; f < this.length; f++) this.words[f] = 0;
              var i = 0;
              if ("be" === d) {
                f = e.length - 1;
                for (var n = 0; f >= 0; f -= 3) {
                  var c = e[f] | (e[f - 1] << 8) | (e[f - 2] << 16);
                  ((this.words[n] |= (c << i) & 67108863),
                    (this.words[n + 1] = (c >>> (26 - i)) & 67108863),
                    (i += 24),
                    i >= 26 && ((i -= 26), n++));
                }
              } else if ("le" === d)
                for (f = 0, n = 0; f < e.length; f += 3) {
                  c = e[f] | (e[f + 1] << 8) | (e[f + 2] << 16);
                  ((this.words[n] |= (c << i) & 67108863),
                    (this.words[n + 1] = (c >>> (26 - i)) & 67108863),
                    (i += 24),
                    i >= 26 && ((i -= 26), n++));
                }
              return this.strip();
            }),
            (f.prototype._parseHex = function (e, t) {
              ((this.length = Math.ceil((e.length - t) / 6)),
                (this.words = new Array(this.length)));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              for (var d = 0, f = ((r = e.length - 6), 0); r >= t; r -= 6) {
                var n = i(e, r, r + 6);
                ((this.words[f] |= (n << d) & 67108863),
                  (this.words[f + 1] |= (n >>> (26 - d)) & 4194303),
                  (d += 24),
                  d >= 26 && ((d -= 26), f++));
              }
              if (r + 6 !== t) {
                n = i(e, t, r + 6);
                ((this.words[f] |= (n << d) & 67108863),
                  (this.words[f + 1] |= (n >>> (26 - d)) & 4194303));
              }
              this.strip();
            }),
            (f.prototype._parseBase = function (e, t, r) {
              ((this.words = [0]), (this.length = 1));
              for (var d = 0, f = 1; f <= 67108863; f *= t) d++;
              (d--, (f = (f / t) | 0));
              for (
                var i = e.length - r,
                  c = i % d,
                  a = Math.min(i, i - c) + r,
                  s = 0,
                  o = r;
                o < a;
                o += d
              )
                ((s = n(e, o, o + d, t)),
                  this.imuln(f),
                  this.words[0] + s < 67108864
                    ? (this.words[0] += s)
                    : this._iaddn(s));
              if (0 !== c) {
                var b = 1;
                for (s = n(e, o, e.length, t), o = 0; o < c; o++) b *= t;
                (this.imuln(b),
                  this.words[0] + s < 67108864
                    ? (this.words[0] += s)
                    : this._iaddn(s));
              }
            }),
            (f.prototype.copy = function (e) {
              e.words = new Array(this.length);
              for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
              ((e.length = this.length),
                (e.sign = this.sign),
                (e.red = this.red));
            }),
            (f.prototype.clone = function () {
              var e = new f(null);
              return (this.copy(e), e);
            }),
            (f.prototype.strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (f.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.sign = !1),
                this
              );
            }),
            (f.prototype.inspect = function () {
              return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            }));
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
            a = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            s = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((f.prototype.toString = function (e, t) {
            if (((e = e || 10), 16 === e || "hex" === e)) {
              for (
                var d = "", f = 0, i = ((t = 0 | t || 1), 0), n = 0;
                n < this.length;
                n++
              ) {
                var o = this.words[n],
                  b = (16777215 & ((o << f) | i)).toString(16);
                ((i = (o >>> (24 - f)) & 16777215),
                  (d =
                    0 !== i || n !== this.length - 1
                      ? c[6 - b.length] + b + d
                      : b + d),
                  (f += 2),
                  f >= 26 && ((f -= 26), n--));
              }
              0 !== i && (d = i.toString(16) + d);
              while (d.length % t !== 0) d = "0" + d;
              return (this.sign && (d = "-" + d), d);
            }
            if (e === (0 | e) && e >= 2 && e <= 36) {
              var h = a[e],
                u = s[e],
                p = ((d = ""), this.clone());
              p.sign = !1;
              while (0 !== p.cmpn(0)) {
                var l = p.modn(u).toString(e);
                ((p = p.idivn(u)),
                  (d = 0 !== p.cmpn(0) ? c[h - l.length] + l + d : l + d));
              }
              return (
                0 === this.cmpn(0) && (d = "0" + d),
                this.sign && (d = "-" + d),
                d
              );
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (f.prototype.toJSON = function () {
              return this.toString(16);
            }),
            (f.prototype.toArray = function (e) {
              this.strip();
              var t = new Array(this.byteLength());
              t[0] = 0;
              var r = this.clone();
              if ("le" !== e)
                for (var d = 0; 0 !== r.cmpn(0); d++) {
                  var f = r.andln(255);
                  (r.ishrn(8), (t[t.length - d - 1] = f));
                }
              else
                for (d = 0; 0 !== r.cmpn(0); d++) {
                  f = r.andln(255);
                  (r.ishrn(8), (t[d] = f));
                }
              return t;
            }),
            Math.clz32
              ? (f.prototype._countBits = function (e) {
                  return 32 - Math.clz32(e);
                })
              : (f.prototype._countBits = function (e) {
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
            (f.prototype._zeroBits = function (e) {
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
            (f.prototype.bitLength = function () {
              var e = 0,
                t = this.words[this.length - 1];
              e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (f.prototype.zeroBits = function () {
              if (0 === this.cmpn(0)) return 0;
              for (var e = 0, t = 0; t < this.length; t++) {
                var r = this._zeroBits(this.words[t]);
                if (((e += r), 26 !== r)) break;
              }
              return e;
            }),
            (f.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (f.prototype.neg = function () {
              if (0 === this.cmpn(0)) return this.clone();
              var e = this.clone();
              return ((e.sign = !this.sign), e);
            }),
            (f.prototype.ior = function (e) {
              this.sign = this.sign || e.sign;
              while (this.length < e.length) this.words[this.length++] = 0;
              for (var t = 0; t < e.length; t++)
                this.words[t] = this.words[t] | e.words[t];
              return this.strip();
            }),
            (f.prototype.or = function (e) {
              return this.length > e.length
                ? this.clone().ior(e)
                : e.clone().ior(this);
            }),
            (f.prototype.iand = function (e) {
              var t;
              ((this.sign = this.sign && e.sign),
                (t = this.length > e.length ? e : this));
              for (var r = 0; r < t.length; r++)
                this.words[r] = this.words[r] & e.words[r];
              return ((this.length = t.length), this.strip());
            }),
            (f.prototype.and = function (e) {
              return this.length > e.length
                ? this.clone().iand(e)
                : e.clone().iand(this);
            }),
            (f.prototype.ixor = function (e) {
              var t, r;
              ((this.sign = this.sign || e.sign),
                this.length > e.length
                  ? ((t = this), (r = e))
                  : ((t = e), (r = this)));
              for (var d = 0; d < r.length; d++)
                this.words[d] = t.words[d] ^ r.words[d];
              if (this !== t)
                for (; d < t.length; d++) this.words[d] = t.words[d];
              return ((this.length = t.length), this.strip());
            }),
            (f.prototype.xor = function (e) {
              return this.length > e.length
                ? this.clone().ixor(e)
                : e.clone().ixor(this);
            }),
            (f.prototype.setn = function (e, t) {
              r("number" === typeof e && e >= 0);
              var d = (e / 26) | 0,
                f = e % 26;
              while (this.length <= d) this.words[this.length++] = 0;
              return (
                (this.words[d] = t
                  ? this.words[d] | (1 << f)
                  : this.words[d] & ~(1 << f)),
                this.strip()
              );
            }),
            (f.prototype.iadd = function (e) {
              if (this.sign && !e.sign) {
                this.sign = !1;
                var t = this.isub(e);
                return ((this.sign = !this.sign), this._normSign());
              }
              if (!this.sign && e.sign) {
                e.sign = !1;
                t = this.isub(e);
                return ((e.sign = !0), t._normSign());
              }
              var r, d;
              this.length > e.length
                ? ((r = this), (d = e))
                : ((r = e), (d = this));
              for (var f = 0, i = 0; i < d.length; i++) {
                t = r.words[i] + d.words[i] + f;
                ((this.words[i] = 67108863 & t), (f = t >>> 26));
              }
              for (; 0 !== f && i < r.length; i++) {
                t = r.words[i] + f;
                ((this.words[i] = 67108863 & t), (f = t >>> 26));
              }
              if (((this.length = r.length), 0 !== f))
                ((this.words[this.length] = f), this.length++);
              else if (r !== this)
                for (; i < r.length; i++) this.words[i] = r.words[i];
              return this;
            }),
            (f.prototype.add = function (e) {
              if (e.sign && !this.sign) {
                e.sign = !1;
                var t = this.sub(e);
                return ((e.sign = !0), t);
              }
              if (!e.sign && this.sign) {
                this.sign = !1;
                t = e.sub(this);
                return ((this.sign = !0), t);
              }
              return this.length > e.length
                ? this.clone().iadd(e)
                : e.clone().iadd(this);
            }),
            (f.prototype.isub = function (e) {
              if (e.sign) {
                e.sign = !1;
                var t = this.iadd(e);
                return ((e.sign = !0), t._normSign());
              }
              if (this.sign)
                return (
                  (this.sign = !1),
                  this.iadd(e),
                  (this.sign = !0),
                  this._normSign()
                );
              var r,
                d,
                f = this.cmp(e);
              if (0 === f)
                return (
                  (this.sign = !1),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              f > 0 ? ((r = this), (d = e)) : ((r = e), (d = this));
              for (var i = 0, n = 0; n < d.length; n++) {
                t = r.words[n] - d.words[n] + i;
                ((i = t >> 26), (this.words[n] = 67108863 & t));
              }
              for (; 0 !== i && n < r.length; n++) {
                t = r.words[n] + i;
                ((i = t >> 26), (this.words[n] = 67108863 & t));
              }
              if (0 === i && n < r.length && r !== this)
                for (; n < r.length; n++) this.words[n] = r.words[n];
              return (
                (this.length = Math.max(this.length, n)),
                r !== this && (this.sign = !0),
                this.strip()
              );
            }),
            (f.prototype.sub = function (e) {
              return this.clone().isub(e);
            }),
            (f.prototype._smallMulTo = function (e, t) {
              ((t.sign = e.sign !== this.sign),
                (t.length = this.length + e.length));
              for (var r = 0, d = 0; d < t.length - 1; d++) {
                for (
                  var f = r >>> 26,
                    i = 67108863 & r,
                    n = Math.min(d, e.length - 1),
                    c = Math.max(0, d - this.length + 1);
                  c <= n;
                  c++
                ) {
                  var a = d - c,
                    s = 0 | this.words[a],
                    o = 0 | e.words[c],
                    b = s * o,
                    h = 67108863 & b;
                  ((f = (f + ((b / 67108864) | 0)) | 0),
                    (h = (h + i) | 0),
                    (i = 67108863 & h),
                    (f = (f + (h >>> 26)) | 0));
                }
                ((t.words[d] = i), (r = f));
              }
              return (0 !== r ? (t.words[d] = r) : t.length--, t.strip());
            }),
            (f.prototype._bigMulTo = function (e, t) {
              ((t.sign = e.sign !== this.sign),
                (t.length = this.length + e.length));
              for (var r = 0, d = 0, f = 0; f < t.length - 1; f++) {
                var i = d;
                d = 0;
                for (
                  var n = 67108863 & r,
                    c = Math.min(f, e.length - 1),
                    a = Math.max(0, f - this.length + 1);
                  a <= c;
                  a++
                ) {
                  var s = f - a,
                    o = 0 | this.words[s],
                    b = 0 | e.words[a],
                    h = o * b,
                    u = 67108863 & h;
                  ((i = (i + ((h / 67108864) | 0)) | 0),
                    (u = (u + n) | 0),
                    (n = 67108863 & u),
                    (i = (i + (u >>> 26)) | 0),
                    (d += i >>> 26),
                    (i &= 67108863));
                }
                ((t.words[f] = n), (r = i), (i = d));
              }
              return (0 !== r ? (t.words[f] = r) : t.length--, t.strip());
            }),
            (f.prototype.mulTo = function (e, t) {
              var r;
              return (
                (r =
                  this.length + e.length < 63
                    ? this._smallMulTo(e, t)
                    : this._bigMulTo(e, t)),
                r
              );
            }),
            (f.prototype.mul = function (e) {
              var t = new f(null);
              return (
                (t.words = new Array(this.length + e.length)),
                this.mulTo(e, t)
              );
            }),
            (f.prototype.imul = function (e) {
              if (0 === this.cmpn(0) || 0 === e.cmpn(0))
                return ((this.words[0] = 0), (this.length = 1), this);
              var t = this.length,
                r = e.length;
              ((this.sign = e.sign !== this.sign),
                (this.length = this.length + e.length),
                (this.words[this.length - 1] = 0));
              for (var d = this.length - 2; d >= 0; d--) {
                for (
                  var f = 0,
                    i = 0,
                    n = Math.min(d, r - 1),
                    c = Math.max(0, d - t + 1);
                  c <= n;
                  c++
                ) {
                  var a = d - c,
                    s = this.words[a],
                    o = e.words[c],
                    b = s * o,
                    h = 67108863 & b;
                  ((f += (b / 67108864) | 0),
                    (h += i),
                    (i = 67108863 & h),
                    (f += h >>> 26));
                }
                ((this.words[d] = i), (this.words[d + 1] += f), (f = 0));
              }
              for (f = 0, a = 1; a < this.length; a++) {
                var u = this.words[a] + f;
                ((this.words[a] = 67108863 & u), (f = u >>> 26));
              }
              return this.strip();
            }),
            (f.prototype.imuln = function (e) {
              r("number" === typeof e);
              for (var t = 0, d = 0; d < this.length; d++) {
                var f = this.words[d] * e,
                  i = (67108863 & f) + (67108863 & t);
                ((t >>= 26),
                  (t += (f / 67108864) | 0),
                  (t += i >>> 26),
                  (this.words[d] = 67108863 & i));
              }
              return (0 !== t && ((this.words[d] = t), this.length++), this);
            }),
            (f.prototype.muln = function (e) {
              return this.clone().imuln(e);
            }),
            (f.prototype.sqr = function () {
              return this.mul(this);
            }),
            (f.prototype.isqr = function () {
              return this.mul(this);
            }),
            (f.prototype.ishln = function (e) {
              r("number" === typeof e && e >= 0);
              var t = e % 26,
                d = (e - t) / 26,
                f = (67108863 >>> (26 - t)) << (26 - t);
              if (0 !== t) {
                for (var i = 0, n = 0; n < this.length; n++) {
                  var c = this.words[n] & f,
                    a = (this.words[n] - c) << t;
                  ((this.words[n] = a | i), (i = c >>> (26 - t)));
                }
                i && ((this.words[n] = i), this.length++);
              }
              if (0 !== d) {
                for (n = this.length - 1; n >= 0; n--)
                  this.words[n + d] = this.words[n];
                for (n = 0; n < d; n++) this.words[n] = 0;
                this.length += d;
              }
              return this.strip();
            }),
            (f.prototype.ishrn = function (e, t, d) {
              var f;
              (r("number" === typeof e && e >= 0),
                (f = t ? (t - (t % 26)) / 26 : 0));
              var i = e % 26,
                n = Math.min((e - i) / 26, this.length),
                c = 67108863 ^ ((67108863 >>> i) << i),
                a = d;
              if (((f -= n), (f = Math.max(0, f)), a)) {
                for (var s = 0; s < n; s++) a.words[s] = this.words[s];
                a.length = n;
              }
              if (0 === n);
              else if (this.length > n) {
                this.length -= n;
                for (s = 0; s < this.length; s++)
                  this.words[s] = this.words[s + n];
              } else ((this.words[0] = 0), (this.length = 1));
              var o = 0;
              for (s = this.length - 1; s >= 0 && (0 !== o || s >= f); s--) {
                var b = this.words[s];
                ((this.words[s] = (o << (26 - i)) | (b >>> i)), (o = b & c));
              }
              return (
                a && 0 !== o && (a.words[a.length++] = o),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this.strip(),
                this
              );
            }),
            (f.prototype.shln = function (e) {
              return this.clone().ishln(e);
            }),
            (f.prototype.shrn = function (e) {
              return this.clone().ishrn(e);
            }),
            (f.prototype.testn = function (e) {
              r("number" === typeof e && e >= 0);
              var t = e % 26,
                d = (e - t) / 26,
                f = 1 << t;
              if (this.length <= d) return !1;
              var i = this.words[d];
              return !!(i & f);
            }),
            (f.prototype.imaskn = function (e) {
              r("number" === typeof e && e >= 0);
              var t = e % 26,
                d = (e - t) / 26;
              if (
                (r(!this.sign, "imaskn works only with positive numbers"),
                0 !== t && d++,
                (this.length = Math.min(d, this.length)),
                0 !== t)
              ) {
                var f = 67108863 ^ ((67108863 >>> t) << t);
                this.words[this.length - 1] &= f;
              }
              return this.strip();
            }),
            (f.prototype.maskn = function (e) {
              return this.clone().imaskn(e);
            }),
            (f.prototype.iaddn = function (e) {
              return (
                r("number" === typeof e),
                e < 0
                  ? this.isubn(-e)
                  : this.sign
                    ? 1 === this.length && this.words[0] < e
                      ? ((this.words[0] = e - this.words[0]),
                        (this.sign = !1),
                        this)
                      : ((this.sign = !1),
                        this.isubn(e),
                        (this.sign = !0),
                        this)
                    : this._iaddn(e)
              );
            }),
            (f.prototype._iaddn = function (e) {
              this.words[0] += e;
              for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                ((this.words[t] -= 67108864),
                  t === this.length - 1
                    ? (this.words[t + 1] = 1)
                    : this.words[t + 1]++);
              return ((this.length = Math.max(this.length, t + 1)), this);
            }),
            (f.prototype.isubn = function (e) {
              if ((r("number" === typeof e), e < 0)) return this.iaddn(-e);
              if (this.sign)
                return (
                  (this.sign = !1),
                  this.iaddn(e),
                  (this.sign = !0),
                  this
                );
              this.words[0] -= e;
              for (var t = 0; t < this.length && this.words[t] < 0; t++)
                ((this.words[t] += 67108864), (this.words[t + 1] -= 1));
              return this.strip();
            }),
            (f.prototype.addn = function (e) {
              return this.clone().iaddn(e);
            }),
            (f.prototype.subn = function (e) {
              return this.clone().isubn(e);
            }),
            (f.prototype.iabs = function () {
              return ((this.sign = !1), this);
            }),
            (f.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (f.prototype._ishlnsubmul = function (e, t, d) {
              var f = e.length + d;
              if (this.words.length < f) {
                for (var i = new Array(f), n = 0; n < this.length; n++)
                  i[n] = this.words[n];
                this.words = i;
              } else n = this.length;
              for (this.length = Math.max(this.length, f); n < this.length; n++)
                this.words[n] = 0;
              var c = 0;
              for (n = 0; n < e.length; n++) {
                var a = this.words[n + d] + c,
                  s = e.words[n] * t;
                ((a -= 67108863 & s),
                  (c = (a >> 26) - ((s / 67108864) | 0)),
                  (this.words[n + d] = 67108863 & a));
              }
              for (; n < this.length - d; n++) {
                a = this.words[n + d] + c;
                ((c = a >> 26), (this.words[n + d] = 67108863 & a));
              }
              if (0 === c) return this.strip();
              (r(-1 === c), (c = 0));
              for (n = 0; n < this.length; n++) {
                a = -this.words[n] + c;
                ((c = a >> 26), (this.words[n] = 67108863 & a));
              }
              return ((this.sign = !0), this.strip());
            }),
            (f.prototype._wordDiv = function (e, t) {
              var r = this.length - e.length,
                d = this.clone(),
                i = e,
                n = i.words[i.length - 1],
                c = this._countBits(n);
              ((r = 26 - c),
                0 !== r &&
                  ((i = i.shln(r)), d.ishln(r), (n = i.words[i.length - 1])));
              var a,
                s = d.length - i.length;
              if ("mod" !== t) {
                ((a = new f(null)),
                  (a.length = s + 1),
                  (a.words = new Array(a.length)));
                for (var o = 0; o < a.length; o++) a.words[o] = 0;
              }
              var b = d.clone()._ishlnsubmul(i, 1, s);
              b.sign || ((d = b), a && (a.words[s] = 1));
              for (var h = s - 1; h >= 0; h--) {
                var u =
                  67108864 * d.words[i.length + h] + d.words[i.length + h - 1];
                ((u = Math.min((u / n) | 0, 67108863)),
                  d._ishlnsubmul(i, u, h));
                while (d.sign)
                  (u--,
                    (d.sign = !1),
                    d._ishlnsubmul(i, 1, h),
                    0 !== d.cmpn(0) && (d.sign = !d.sign));
                a && (a.words[h] = u);
              }
              return (
                a && a.strip(),
                d.strip(),
                "div" !== t && 0 !== r && d.ishrn(r),
                { div: a || null, mod: d }
              );
            }),
            (f.prototype.divmod = function (e, t) {
              if ((r(0 !== e.cmpn(0)), this.sign && !e.sign)) {
                var d,
                  i = this.neg().divmod(e, t);
                return (
                  "mod" !== t && (n = i.div.neg()),
                  "div" !== t &&
                    (d = 0 === i.mod.cmpn(0) ? i.mod : e.sub(i.mod)),
                  { div: n, mod: d }
                );
              }
              if (!this.sign && e.sign) {
                var n;
                i = this.divmod(e.neg(), t);
                return (
                  "mod" !== t && (n = i.div.neg()),
                  { div: n, mod: i.mod }
                );
              }
              return this.sign && e.sign
                ? this.neg().divmod(e.neg(), t)
                : e.length > this.length || this.cmp(e) < 0
                  ? { div: new f(0), mod: this }
                  : 1 === e.length
                    ? "div" === t
                      ? { div: this.divn(e.words[0]), mod: null }
                      : "mod" === t
                        ? { div: null, mod: new f(this.modn(e.words[0])) }
                        : {
                            div: this.divn(e.words[0]),
                            mod: new f(this.modn(e.words[0])),
                          }
                    : this._wordDiv(e, t);
            }),
            (f.prototype.div = function (e) {
              return this.divmod(e, "div").div;
            }),
            (f.prototype.mod = function (e) {
              return this.divmod(e, "mod").mod;
            }),
            (f.prototype.divRound = function (e) {
              var t = this.divmod(e);
              if (0 === t.mod.cmpn(0)) return t.div;
              var r = t.div.sign ? t.mod.isub(e) : t.mod,
                d = e.shrn(1),
                f = e.andln(1),
                i = r.cmp(d);
              return i < 0 || (1 === f && 0 === i)
                ? t.div
                : t.div.sign
                  ? t.div.isubn(1)
                  : t.div.iaddn(1);
            }),
            (f.prototype.modn = function (e) {
              r(e <= 67108863);
              for (
                var t = (1 << 26) % e, d = 0, f = this.length - 1;
                f >= 0;
                f--
              )
                d = (t * d + this.words[f]) % e;
              return d;
            }),
            (f.prototype.idivn = function (e) {
              r(e <= 67108863);
              for (var t = 0, d = this.length - 1; d >= 0; d--) {
                var f = this.words[d] + 67108864 * t;
                ((this.words[d] = (f / e) | 0), (t = f % e));
              }
              return this.strip();
            }),
            (f.prototype.divn = function (e) {
              return this.clone().idivn(e);
            }),
            (f.prototype.egcd = function (e) {
              (r(!e.sign), r(0 !== e.cmpn(0)));
              var t = this,
                d = e.clone();
              t = t.sign ? t.mod(e) : t.clone();
              var i = new f(1),
                n = new f(0),
                c = new f(0),
                a = new f(1),
                s = 0;
              while (t.isEven() && d.isEven()) (t.ishrn(1), d.ishrn(1), ++s);
              var o = d.clone(),
                b = t.clone();
              while (0 !== t.cmpn(0)) {
                while (t.isEven())
                  (t.ishrn(1),
                    i.isEven() && n.isEven()
                      ? (i.ishrn(1), n.ishrn(1))
                      : (i.iadd(o).ishrn(1), n.isub(b).ishrn(1)));
                while (d.isEven())
                  (d.ishrn(1),
                    c.isEven() && a.isEven()
                      ? (c.ishrn(1), a.ishrn(1))
                      : (c.iadd(o).ishrn(1), a.isub(b).ishrn(1)));
                t.cmp(d) >= 0
                  ? (t.isub(d), i.isub(c), n.isub(a))
                  : (d.isub(t), c.isub(i), a.isub(n));
              }
              return { a: c, b: a, gcd: d.ishln(s) };
            }),
            (f.prototype._invmp = function (e) {
              (r(!e.sign), r(0 !== e.cmpn(0)));
              var t = this,
                d = e.clone();
              t = t.sign ? t.mod(e) : t.clone();
              var i = new f(1),
                n = new f(0),
                c = d.clone();
              while (t.cmpn(1) > 0 && d.cmpn(1) > 0) {
                while (t.isEven())
                  (t.ishrn(1), i.isEven() ? i.ishrn(1) : i.iadd(c).ishrn(1));
                while (d.isEven())
                  (d.ishrn(1), n.isEven() ? n.ishrn(1) : n.iadd(c).ishrn(1));
                t.cmp(d) >= 0 ? (t.isub(d), i.isub(n)) : (d.isub(t), n.isub(i));
              }
              return 0 === t.cmpn(1) ? i : n;
            }),
            (f.prototype.gcd = function (e) {
              if (0 === this.cmpn(0)) return e.clone();
              if (0 === e.cmpn(0)) return this.clone();
              var t = this.clone(),
                r = e.clone();
              ((t.sign = !1), (r.sign = !1));
              for (var d = 0; t.isEven() && r.isEven(); d++)
                (t.ishrn(1), r.ishrn(1));
              do {
                while (t.isEven()) t.ishrn(1);
                while (r.isEven()) r.ishrn(1);
                var f = t.cmp(r);
                if (f < 0) {
                  var i = t;
                  ((t = r), (r = i));
                } else if (0 === f || 0 === r.cmpn(1)) break;
                t.isub(r);
              } while (1);
              return r.ishln(d);
            }),
            (f.prototype.invm = function (e) {
              return this.egcd(e).a.mod(e);
            }),
            (f.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (f.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (f.prototype.andln = function (e) {
              return this.words[0] & e;
            }),
            (f.prototype.bincn = function (e) {
              r("number" === typeof e);
              var t = e % 26,
                d = (e - t) / 26,
                f = 1 << t;
              if (this.length <= d) {
                for (var i = this.length; i < d + 1; i++) this.words[i] = 0;
                return ((this.words[d] |= f), (this.length = d + 1), this);
              }
              var n = f;
              for (i = d; 0 !== n && i < this.length; i++) {
                var c = this.words[i];
                ((c += n),
                  (n = c >>> 26),
                  (c &= 67108863),
                  (this.words[i] = c));
              }
              return (0 !== n && ((this.words[i] = n), this.length++), this);
            }),
            (f.prototype.cmpn = function (e) {
              var t,
                r = e < 0;
              if ((r && (e = -e), this.sign && !r)) return -1;
              if (!this.sign && r) return 1;
              if (((e &= 67108863), this.strip(), this.length > 1)) t = 1;
              else {
                var d = this.words[0];
                t = d === e ? 0 : d < e ? -1 : 1;
              }
              return (this.sign && (t = -t), t);
            }),
            (f.prototype.cmp = function (e) {
              if (this.sign && !e.sign) return -1;
              if (!this.sign && e.sign) return 1;
              var t = this.ucmp(e);
              return this.sign ? -t : t;
            }),
            (f.prototype.ucmp = function (e) {
              if (this.length > e.length) return 1;
              if (this.length < e.length) return -1;
              for (var t = 0, r = this.length - 1; r >= 0; r--) {
                var d = this.words[r],
                  f = e.words[r];
                if (d !== f) {
                  d < f ? (t = -1) : d > f && (t = 1);
                  break;
                }
              }
              return t;
            }),
            (f.red = function (e) {
              return new v(e);
            }),
            (f.prototype.toRed = function (e) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(!this.sign, "red works only with positives"),
                e.convertTo(this)._forceRed(e)
              );
            }),
            (f.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (f.prototype._forceRed = function (e) {
              return ((this.red = e), this);
            }),
            (f.prototype.forceRed = function (e) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(e)
              );
            }),
            (f.prototype.redAdd = function (e) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, e)
              );
            }),
            (f.prototype.redIAdd = function (e) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, e)
              );
            }),
            (f.prototype.redSub = function (e) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, e)
              );
            }),
            (f.prototype.redISub = function (e) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, e)
              );
            }),
            (f.prototype.redShl = function (e) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, e)
              );
            }),
            (f.prototype.redMul = function (e) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.mul(this, e)
              );
            }),
            (f.prototype.redIMul = function (e) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.imul(this, e)
              );
            }),
            (f.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (f.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (f.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (f.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (f.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (f.prototype.redPow = function (e) {
              return (
                r(this.red && !e.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, e)
              );
            }));
          var o = { k256: null, p224: null, p192: null, p25519: null };
          function b(e, t) {
            ((this.name = e),
              (this.p = new f(t, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new f(1).ishln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function h() {
            b.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function u() {
            b.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function p() {
            b.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function l() {
            b.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function v(e) {
            if ("string" === typeof e) {
              var t = f._prime(e);
              ((this.m = t.p), (this.prime = t));
            } else ((this.m = e), (this.prime = null));
          }
          function m(e) {
            (v.call(this, e),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new f(1).ishln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv.sign = !0),
              (this.minv = this.minv.mod(this.r)));
          }
          ((b.prototype._tmp = function () {
            var e = new f(null);
            return ((e.words = new Array(Math.ceil(this.n / 13))), e);
          }),
            (b.prototype.ireduce = function (e) {
              var t,
                r = e;
              do {
                (this.split(r, this.tmp),
                  (r = this.imulK(r)),
                  (r = r.iadd(this.tmp)),
                  (t = r.bitLength()));
              } while (t > this.n);
              var d = t < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === d
                  ? ((r.words[0] = 0), (r.length = 1))
                  : d > 0
                    ? r.isub(this.p)
                    : r.strip(),
                r
              );
            }),
            (b.prototype.split = function (e, t) {
              e.ishrn(this.n, 0, t);
            }),
            (b.prototype.imulK = function (e) {
              return e.imul(this.k);
            }),
            d(h, b),
            (h.prototype.split = function (e, t) {
              for (
                var r = 4194303, d = Math.min(e.length, 9), f = 0;
                f < d;
                f++
              )
                t.words[f] = e.words[f];
              if (((t.length = d), e.length <= 9))
                return ((e.words[0] = 0), void (e.length = 1));
              var i = e.words[9];
              t.words[t.length++] = i & r;
              for (f = 10; f < e.length; f++) {
                var n = e.words[f];
                ((e.words[f - 10] = ((n & r) << 4) | (i >>> 22)), (i = n));
              }
              ((e.words[f - 10] = i >>> 22), (e.length -= 9));
            }),
            (h.prototype.imulK = function (e) {
              var t;
              ((e.words[e.length] = 0),
                (e.words[e.length + 1] = 0),
                (e.length += 2));
              for (var r = 0, d = 0; d < e.length; d++) {
                var f = e.words[d];
                ((t = 64 * f),
                  (r += 977 * f),
                  (t += (r / 67108864) | 0),
                  (r &= 67108863),
                  (e.words[d] = r),
                  (r = t));
              }
              return (
                0 === e.words[e.length - 1] &&
                  (e.length--, 0 === e.words[e.length - 1] && e.length--),
                e
              );
            }),
            d(u, b),
            d(p, b),
            d(l, b),
            (l.prototype.imulK = function (e) {
              for (var t = 0, r = 0; r < e.length; r++) {
                var d = 19 * e.words[r] + t,
                  f = 67108863 & d;
                ((d >>>= 26), (e.words[r] = f), (t = d));
              }
              return (0 !== t && (e.words[e.length++] = t), e);
            }),
            (f._prime = function (e) {
              if (o[e]) return o[e];
              var t;
              if ("k256" === e) t = new h();
              else if ("p224" === e) t = new u();
              else if ("p192" === e) t = new p();
              else {
                if ("p25519" !== e) throw new Error("Unknown prime " + e);
                t = new l();
              }
              return ((o[e] = t), t);
            }),
            (v.prototype._verify1 = function (e) {
              (r(!e.sign, "red works only with positives"),
                r(e.red, "red works only with red numbers"));
            }),
            (v.prototype._verify2 = function (e, t) {
              (r(!e.sign && !t.sign, "red works only with positives"),
                r(e.red && e.red === t.red, "red works only with red numbers"));
            }),
            (v.prototype.imod = function (e) {
              return this.prime
                ? this.prime.ireduce(e)._forceRed(this)
                : e.mod(this.m)._forceRed(this);
            }),
            (v.prototype.neg = function (e) {
              var t = e.clone();
              return ((t.sign = !t.sign), t.iadd(this.m)._forceRed(this));
            }),
            (v.prototype.add = function (e, t) {
              this._verify2(e, t);
              var r = e.add(t);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (v.prototype.iadd = function (e, t) {
              this._verify2(e, t);
              var r = e.iadd(t);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (v.prototype.sub = function (e, t) {
              this._verify2(e, t);
              var r = e.sub(t);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (v.prototype.isub = function (e, t) {
              this._verify2(e, t);
              var r = e.isub(t);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (v.prototype.shl = function (e, t) {
              return (this._verify1(e), this.imod(e.shln(t)));
            }),
            (v.prototype.imul = function (e, t) {
              return (this._verify2(e, t), this.imod(e.imul(t)));
            }),
            (v.prototype.mul = function (e, t) {
              return (this._verify2(e, t), this.imod(e.mul(t)));
            }),
            (v.prototype.isqr = function (e) {
              return this.imul(e, e);
            }),
            (v.prototype.sqr = function (e) {
              return this.mul(e, e);
            }),
            (v.prototype.sqrt = function (e) {
              if (0 === e.cmpn(0)) return e.clone();
              var t = this.m.andln(3);
              if ((r(t % 2 === 1), 3 === t)) {
                var d = this.m.add(new f(1)).ishrn(2),
                  i = this.pow(e, d);
                return i;
              }
              var n = this.m.subn(1),
                c = 0;
              while (0 !== n.cmpn(0) && 0 === n.andln(1)) (c++, n.ishrn(1));
              r(0 !== n.cmpn(0));
              var a = new f(1).toRed(this),
                s = a.redNeg(),
                o = this.m.subn(1).ishrn(1),
                b = this.m.bitLength();
              b = new f(2 * b * b).toRed(this);
              while (0 !== this.pow(b, o).cmp(s)) b.redIAdd(s);
              var h = this.pow(b, n),
                u = ((i = this.pow(e, n.addn(1).ishrn(1))), this.pow(e, n)),
                p = c;
              while (0 !== u.cmp(a)) {
                for (var l = u, v = 0; 0 !== l.cmp(a); v++) l = l.redSqr();
                r(v < p);
                var m = this.pow(h, new f(1).ishln(p - v - 1));
                ((i = i.redMul(m)),
                  (h = m.redSqr()),
                  (u = u.redMul(h)),
                  (p = v));
              }
              return i;
            }),
            (v.prototype.invm = function (e) {
              var t = e._invmp(this.m);
              return t.sign
                ? ((t.sign = !1), this.imod(t).redNeg())
                : this.imod(t);
            }),
            (v.prototype.pow = function (e, t) {
              var r = [];
              if (0 === t.cmpn(0)) return new f(1);
              var d = t.clone();
              while (0 !== d.cmpn(0)) (r.push(d.andln(1)), d.ishrn(1));
              for (var i = e, n = 0; n < r.length; n++, i = this.sqr(i))
                if (0 !== r[n]) break;
              if (++n < r.length)
                for (d = this.sqr(i); n < r.length; n++, d = this.sqr(d))
                  0 !== r[n] && (i = this.mul(i, d));
              return i;
            }),
            (v.prototype.convertTo = function (e) {
              var t = e.mod(this.m);
              return t === e ? t.clone() : t;
            }),
            (v.prototype.convertFrom = function (e) {
              var t = e.clone();
              return ((t.red = null), t);
            }),
            (f.mont = function (e) {
              return new m(e);
            }),
            d(m, v),
            (m.prototype.convertTo = function (e) {
              return this.imod(e.shln(this.shift));
            }),
            (m.prototype.convertFrom = function (e) {
              var t = this.imod(e.mul(this.rinv));
              return ((t.red = null), t);
            }),
            (m.prototype.imul = function (e, t) {
              if (0 === e.cmpn(0) || 0 === t.cmpn(0))
                return ((e.words[0] = 0), (e.length = 1), e);
              var r = e.imul(t),
                d = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                f = r.isub(d).ishrn(this.shift),
                i = f;
              return (
                f.cmp(this.m) >= 0
                  ? (i = f.isub(this.m))
                  : f.cmpn(0) < 0 && (i = f.iadd(this.m)),
                i._forceRed(this)
              );
            }),
            (m.prototype.mul = function (e, t) {
              if (0 === e.cmpn(0) || 0 === t.cmpn(0))
                return new f(0)._forceRed(this);
              var r = e.mul(t),
                d = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(d).ishrn(this.shift),
                n = i;
              return (
                i.cmp(this.m) >= 0
                  ? (n = i.isub(this.m))
                  : i.cmpn(0) < 0 && (n = i.iadd(this.m)),
                n._forceRed(this)
              );
            }),
            (m.prototype.invm = function (e) {
              var t = this.imod(e._invmp(this.m).mul(this.r2));
              return t._forceRed(this);
            }));
        })(e, this);
      }).call(this, r(20)(e));
    },
    4867: function (e, t, r) {
      "use strict";
      var d = t;
      ((d.base = r(11329)),
        (d.short = r(11330)),
        (d.mont = r(11331)),
        (d.edwards = r(11332)));
    },
    5709: function (e, t, r) {
      "use strict";
      var d = r(2896),
        f = r(3358),
        i = r(2912),
        n = {
          DCR: [1e8, 8],
          mDCR: [1e5, 5],
          uDCR: [100, 2],
          bits: [100, 2],
          dbits: [100, 2],
          atoms: [1, 0],
        };
      function c(e, t) {
        if (!(this instanceof c)) return new c(e, t);
        if (d.isNumber(t)) {
          if (t <= 0) throw new f.Unit.InvalidRate(t);
          ((e /= t), (t = c.DCR));
        }
        this._value = this._from(e, t);
        var r = this,
          i = function (e) {
            Object.defineProperty(r, e, {
              get: function () {
                return r.to(e);
              },
              enumerable: !0,
            });
          };
        Object.keys(n).forEach(i);
      }
      (Object.keys(n).forEach(function (e) {
        c[e] = e;
      }),
        (c.fromObject = function (e) {
          return (
            i.checkArgument(
              d.isObject(e),
              "Argument is expected to be an object",
            ),
            new c(e.amount, e.code)
          );
        }),
        (c.fromDCR = function (e) {
          return new c(e, c.DCR);
        }),
        (c.fromMillis = c.fromMilis =
          function (e) {
            return new c(e, c.mDCR);
          }),
        (c.fromMicros = c.fromDbits =
          function (e) {
            return new c(e, c.dbits);
          }),
        (c.fromAtoms = function (e) {
          return new c(e, c.atoms);
        }),
        (c.fromFiat = function (e, t) {
          return new c(e, t);
        }),
        (c.prototype._from = function (e, t) {
          if (!n[t]) throw new f.Unit.UnknownCode(t);
          return parseInt((e * n[t][0]).toFixed());
        }),
        (c.prototype.to = function (e) {
          if (d.isNumber(e)) {
            if (e <= 0) throw new f.Unit.InvalidRate(e);
            return parseFloat((this.DCR * e).toFixed(2));
          }
          if (!n[e]) throw new f.Unit.UnknownCode(e);
          var t = this._value / n[e][0];
          return parseFloat(t.toFixed(n[e][1]));
        }),
        (c.prototype.toDCR = function () {
          return this.to(c.DCR);
        }),
        (c.prototype.toMillis = c.prototype.toMilis =
          function () {
            return this.to(c.mDCR);
          }),
        (c.prototype.toMicros = c.prototype.toDbits =
          function () {
            return this.to(c.dbits);
          }),
        (c.prototype.toAtoms = function () {
          return this.to(c.atoms);
        }),
        (c.prototype.atRate = function (e) {
          return this.to(e);
        }),
        (c.prototype.toString = function () {
          return this.atoms + " atoms";
        }),
        (c.prototype.toObject = c.prototype.toJSON =
          function () {
            return { amount: this.DCR, code: c.DCR };
          }),
        (c.prototype.inspect = function () {
          return "<Unit: " + this.toString() + ">";
        }),
        (e.exports = c));
    },
  },
]);
