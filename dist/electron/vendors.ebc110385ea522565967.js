(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [189],
  {
    2758: function (t, e, n) {
      var r = n(2848),
        o = n(2813),
        i = r.tfJSON,
        u = r.TfTypeError,
        a = r.TfPropertyTypeError,
        f = r.tfSubError,
        c = r.getValueTypeName,
        s = {
          arrayOf: function (t, e) {
            function n(n, r) {
              return (
                !!o.Array(n) &&
                !o.Nil(n) &&
                !(void 0 !== e.minLength && n.length < e.minLength) &&
                !(void 0 !== e.maxLength && n.length > e.maxLength) &&
                (void 0 === e.length || n.length === e.length) &&
                n.every(function (e, n) {
                  try {
                    return l(t, e, r);
                  } catch (o) {
                    throw f(o, n);
                  }
                })
              );
            }
            return (
              (t = d(t)),
              (e = e || {}),
              (n.toJSON = function () {
                var n = "[" + i(t) + "]";
                return (
                  void 0 !== e.length
                    ? (n += "{" + e.length + "}")
                    : (void 0 === e.minLength && void 0 === e.maxLength) ||
                      (n +=
                        "{" +
                        (void 0 === e.minLength ? 0 : e.minLength) +
                        "," +
                        (void 0 === e.maxLength ? 1 / 0 : e.maxLength) +
                        "}"),
                  n
                );
              }),
              n
            );
          },
          maybe: function t(e) {
            function n(n, r) {
              return o.Nil(n) || e(n, r, t);
            }
            return (
              (e = d(e)),
              (n.toJSON = function () {
                return "?" + i(e);
              }),
              n
            );
          },
          map: function (t, e) {
            function n(n, r) {
              if (!o.Object(n)) return !1;
              if (o.Nil(n)) return !1;
              for (var i in n) {
                try {
                  e && l(e, i, r);
                } catch (a) {
                  throw f(a, i, "key");
                }
                try {
                  var u = n[i];
                  l(t, u, r);
                } catch (a) {
                  throw f(a, i);
                }
              }
              return !0;
            }
            return (
              (t = d(t)),
              e && (e = d(e)),
              (n.toJSON = e
                ? function () {
                    return "{" + i(e) + ": " + i(t) + "}";
                  }
                : function () {
                    return "{" + i(t) + "}";
                  }),
              n
            );
          },
          object: function (t) {
            var e = {};
            for (var n in t) e[n] = d(t[n]);
            function r(t, n) {
              if (!o.Object(t)) return !1;
              if (o.Nil(t)) return !1;
              var r;
              try {
                for (r in e) {
                  var i = e[r],
                    u = t[r];
                  l(i, u, n);
                }
              } catch (c) {
                throw f(c, r);
              }
              if (n) for (r in t) if (!e[r]) throw new a(void 0, r);
              return !0;
            }
            return (
              (r.toJSON = function () {
                return i(e);
              }),
              r
            );
          },
          anyOf: function () {
            var t = [].slice.call(arguments).map(d);
            function e(e, n) {
              return t.some(function (t) {
                try {
                  return l(t, e, n);
                } catch (r) {
                  return !1;
                }
              });
            }
            return (
              (e.toJSON = function () {
                return t.map(i).join("|");
              }),
              e
            );
          },
          allOf: function () {
            var t = [].slice.call(arguments).map(d);
            function e(e, n) {
              return t.every(function (t) {
                try {
                  return l(t, e, n);
                } catch (r) {
                  return !1;
                }
              });
            }
            return (
              (e.toJSON = function () {
                return t.map(i).join(" & ");
              }),
              e
            );
          },
          quacksLike: function (t) {
            function e(e) {
              return t === c(e);
            }
            return (
              (e.toJSON = function () {
                return t;
              }),
              e
            );
          },
          tuple: function () {
            var t = [].slice.call(arguments).map(d);
            function e(e, n) {
              return (
                !o.Nil(e) &&
                !o.Nil(e.length) &&
                (!n || e.length === t.length) &&
                t.every(function (t, r) {
                  try {
                    return l(t, e[r], n);
                  } catch (o) {
                    throw f(o, r);
                  }
                })
              );
            }
            return (
              (e.toJSON = function () {
                return "(" + t.map(i).join(", ") + ")";
              }),
              e
            );
          },
          value: function (t) {
            function e(e) {
              return e === t;
            }
            return (
              (e.toJSON = function () {
                return t;
              }),
              e
            );
          },
        };
      function d(t) {
        if (o.String(t))
          return "?" === t[0] ? s.maybe(t.slice(1)) : o[t] || s.quacksLike(t);
        if (t && o.Object(t)) {
          if (o.Array(t)) {
            if (1 !== t.length)
              throw new TypeError(
                "Expected compile() parameter of type Array of length 1",
              );
            return s.arrayOf(t[0]);
          }
          return s.object(t);
        }
        return o.Function(t) ? t : s.value(t);
      }
      function l(t, e, n, r) {
        if (o.Function(t)) {
          if (t(e, n)) return !0;
          throw new u(r || t, e);
        }
        return l(d(t), e, n);
      }
      for (var h in ((s.oneOf = s.anyOf), o)) l[h] = o[h];
      for (h in s) l[h] = s[h];
      var p = n(2954);
      for (h in p) l[h] = p[h];
      ((l.compile = d),
        (l.TfTypeError = u),
        (l.TfPropertyTypeError = a),
        (t.exports = l));
    },
    2813: function (t, e) {
      var n = {
        Array: function (t) {
          return null !== t && void 0 !== t && t.constructor === Array;
        },
        Boolean: function (t) {
          return "boolean" === typeof t;
        },
        Function: function (t) {
          return "function" === typeof t;
        },
        Nil: function (t) {
          return void 0 === t || null === t;
        },
        Number: function (t) {
          return "number" === typeof t;
        },
        Object: function (t) {
          return "object" === typeof t;
        },
        String: function (t) {
          return "string" === typeof t;
        },
        "": function () {
          return !0;
        },
      };
      for (var r in ((n.Null = n.Nil), n))
        n[r].toJSON = function (t) {
          return t;
        }.bind(null, r);
      t.exports = n;
    },
    2819: function (t, e, n) {
      (function (e) {
        const r = n(49),
          o = n(795).ec,
          i = new o("secp256k1"),
          u = n(3104),
          a = e.alloc(32, 0),
          f = e.from(
            "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
            "hex",
          ),
          c = e.from(
            "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
            "hex",
          ),
          s = i.curve.n,
          d = s.shrn(1),
          l = i.curve.g,
          h = "Expected Private",
          p = "Expected Point",
          y = "Expected Tweak",
          g = "Expected Hash",
          b = "Expected Signature",
          w = "Expected Extra Data (32 bytes)";
        function v(t) {
          return e.isBuffer(t) && 32 === t.length;
        }
        function m(t) {
          return !!v(t) && t.compare(f) < 0;
        }
        function _(t) {
          if (!e.isBuffer(t)) return !1;
          if (t.length < 33) return !1;
          const n = t[0],
            r = t.slice(1, 33);
          if (0 === r.compare(a)) return !1;
          if (r.compare(c) >= 0) return !1;
          if ((2 === n || 3 === n) && 33 === t.length) {
            try {
              A(t);
            } catch (i) {
              return !1;
            }
            return !0;
          }
          const o = t.slice(33);
          return (
            0 !== o.compare(a) &&
            !(o.compare(c) >= 0) &&
            4 === n &&
            65 === t.length
          );
        }
        function E(t) {
          return 4 !== t[0];
        }
        function F(t) {
          return !!_(t) && E(t);
        }
        function L(t) {
          return !!v(t) && t.compare(a) > 0 && t.compare(f) < 0;
        }
        function x(t) {
          const n = t.slice(0, 32),
            r = t.slice(32, 64);
          return (
            e.isBuffer(t) &&
            64 === t.length &&
            n.compare(f) < 0 &&
            r.compare(f) < 0
          );
        }
        function D(t, e) {
          return void 0 === t && void 0 !== e ? E(e) : void 0 === t || t;
        }
        function S(t) {
          return new r(t);
        }
        function T(t) {
          return t.toArrayLike(e, "be", 32);
        }
        function A(t) {
          return i.curve.decodePoint(t);
        }
        function I(t, n) {
          return e.from(t._encode(n));
        }
        function O(t, e, n) {
          if (!_(t)) throw new TypeError(p);
          if (!_(e)) throw new TypeError(p);
          const r = A(t),
            o = A(e),
            i = r.add(o);
          if (i.isInfinity()) return null;
          const u = D(n, t);
          return I(i, u);
        }
        function C(t, e, n) {
          if (!_(t)) throw new TypeError(p);
          if (!m(e)) throw new TypeError(y);
          const r = D(n, t),
            o = A(t);
          if (0 === e.compare(a)) return I(o, r);
          const i = S(e),
            u = l.mul(i),
            f = o.add(u);
          return f.isInfinity() ? null : I(f, r);
        }
        function N(t, e) {
          if (!_(t)) throw new TypeError(p);
          const n = A(t);
          if (n.isInfinity()) throw new TypeError(p);
          const r = D(e, t);
          return I(n, r);
        }
        function U(t, e) {
          if (!L(t)) throw new TypeError(h);
          const n = S(t),
            r = l.mul(n);
          if (r.isInfinity()) return null;
          const o = D(e);
          return I(r, o);
        }
        function M(t, e, n) {
          if (!_(t)) throw new TypeError(p);
          if (!m(e)) throw new TypeError(y);
          const r = D(n, t),
            o = A(t),
            i = S(e),
            u = o.mul(i);
          return u.isInfinity() ? null : I(u, r);
        }
        function R(t, e) {
          if (!L(t)) throw new TypeError(h);
          if (!m(e)) throw new TypeError(y);
          const n = S(t),
            r = S(e),
            o = T(n.add(r).umod(s));
          return L(o) ? o : null;
        }
        function k(t, e) {
          if (!L(t)) throw new TypeError(h);
          if (!m(e)) throw new TypeError(y);
          const n = S(t),
            r = S(e),
            o = T(n.sub(r).umod(s));
          return L(o) ? o : null;
        }
        function P(t, e) {
          return B(t, e);
        }
        function j(t, e, n) {
          return B(t, e, n);
        }
        function B(t, n, r) {
          if (!v(t)) throw new TypeError(g);
          if (!L(n)) throw new TypeError(h);
          if (void 0 !== r && !v(r)) throw new TypeError(w);
          const o = S(n),
            i = S(t);
          let a, f;
          const c = function (t) {
            const e = S(t),
              n = l.mul(e);
            return (
              !n.isInfinity() &&
              ((a = n.x.umod(s)),
              0 !== a.isZero() &&
                ((f = e
                  .invm(s)
                  .mul(i.add(o.mul(a)))
                  .umod(s)),
                0 !== f.isZero()))
            );
          };
          (u(t, n, c, L, r), f.cmp(d) > 0 && (f = s.sub(f)));
          const p = e.allocUnsafe(64);
          return (T(a).copy(p, 0), T(f).copy(p, 32), p);
        }
        function W(t, e, n, r) {
          if (!v(t)) throw new TypeError(g);
          if (!_(e)) throw new TypeError(p);
          if (!x(n)) throw new TypeError(b);
          const o = A(e),
            i = S(n.slice(0, 32)),
            u = S(n.slice(32, 64));
          if (r && u.cmp(d) > 0) return !1;
          if (i.gtn(0) <= 0) return !1;
          if (u.gtn(0) <= 0) return !1;
          const a = S(t),
            f = u.invm(s),
            c = a.mul(f).umod(s),
            h = i.mul(f).umod(s),
            y = l.mulAdd(c, o, h);
          if (y.isInfinity()) return !1;
          const w = y.x,
            m = w.umod(s);
          return m.eq(i);
        }
        t.exports = {
          isPoint: _,
          isPointCompressed: F,
          isPrivate: L,
          pointAdd: O,
          pointAddScalar: C,
          pointCompress: N,
          pointFromScalar: U,
          pointMultiply: M,
          privateAdd: R,
          privateSub: k,
          sign: P,
          signWithEntropy: j,
          verify: W,
        };
      }).call(this, n(2).Buffer);
    },
    2838: function (t, e, n) {
      (function (e) {
        var r = n(2792);
        function o(t, e) {
          if (void 0 !== e && t[0] !== e)
            throw new Error("Invalid network version");
          if (33 === t.length)
            return {
              version: t[0],
              privateKey: t.slice(1, 33),
              compressed: !1,
            };
          if (34 !== t.length) throw new Error("Invalid WIF length");
          if (1 !== t[33]) throw new Error("Invalid compression flag");
          return { version: t[0], privateKey: t.slice(1, 33), compressed: !0 };
        }
        function i(t, n, r) {
          var o = new e(r ? 34 : 33);
          return (o.writeUInt8(t, 0), n.copy(o, 1), r && (o[33] = 1), o);
        }
        function u(t, e) {
          return o(r.decode(t), e);
        }
        function a(t, e, n) {
          return "number" === typeof t
            ? r.encode(i(t, e, n))
            : r.encode(i(t.version, t.privateKey, t.compressed));
        }
        t.exports = { decode: u, decodeRaw: o, encode: a, encodeRaw: i };
      }).call(this, n(2).Buffer);
    },
    2848: function (t, e, n) {
      var r = n(2813);
      function o(t) {
        return t.name || t.toString().match(/function (.*?)\s*\(/)[1];
      }
      function i(t) {
        return r.Nil(t) ? "" : o(t.constructor);
      }
      function u(t) {
        return r.Function(t)
          ? ""
          : r.String(t)
            ? JSON.stringify(t)
            : t && r.Object(t)
              ? ""
              : t;
      }
      function a(t, e) {
        Error.captureStackTrace && Error.captureStackTrace(t, e);
      }
      function f(t) {
        return r.Function(t)
          ? t.toJSON
            ? t.toJSON()
            : o(t)
          : r.Array(t)
            ? "Array"
            : t && r.Object(t)
              ? "Object"
              : void 0 !== t
                ? t
                : "";
      }
      function c(t, e, n) {
        var r = u(e);
        return (
          "Expected " +
          f(t) +
          ", got" +
          ("" !== n ? " " + n : "") +
          ("" !== r ? " " + r : "")
        );
      }
      function s(t, e, n) {
        ((n = n || i(e)),
          (this.message = c(t, e, n)),
          a(this, s),
          (this.__type = t),
          (this.__value = e),
          (this.__valueTypeName = n));
      }
      function d(t, e, n, r, o) {
        var i = '" of type ';
        return (
          "key" === e && (i = '" with key type '),
          c('property "' + f(n) + i + f(t), r, o)
        );
      }
      function l(t, e, n, r, o) {
        (t
          ? ((o = o || i(r)), (this.message = d(t, n, e, r, o)))
          : (this.message = 'Unexpected property "' + e + '"'),
          a(this, s),
          (this.__label = n),
          (this.__property = e),
          (this.__type = t),
          (this.__value = r),
          (this.__valueTypeName = o));
      }
      function h(t, e) {
        return new s(t, {}, e);
      }
      function p(t, e, n) {
        return (
          t instanceof l
            ? ((e = e + "." + t.__property),
              (t = new l(t.__type, e, t.__label, t.__value, t.__valueTypeName)))
            : t instanceof s &&
              (t = new l(t.__type, e, n, t.__value, t.__valueTypeName)),
          a(t),
          t
        );
      }
      ((s.prototype = Object.create(Error.prototype)),
        (s.prototype.constructor = s),
        (l.prototype = Object.create(Error.prototype)),
        (l.prototype.constructor = s),
        (t.exports = {
          TfTypeError: s,
          TfPropertyTypeError: l,
          tfCustomError: h,
          tfSubError: p,
          tfJSON: f,
          getValueTypeName: i,
        }));
    },
    2954: function (t, e, n) {
      (function (e) {
        var r = n(2813),
          o = n(2848);
        function i(t) {
          return e.isBuffer(t);
        }
        function u(t) {
          return "string" === typeof t && /^([0-9a-f]{2})+$/i.test(t);
        }
        function a(t, e) {
          var n = t.toJSON();
          function r(r) {
            if (!t(r)) return !1;
            if (r.length === e) return !0;
            throw o.tfCustomError(
              n + "(Length: " + e + ")",
              n + "(Length: " + r.length + ")",
            );
          }
          return (
            (r.toJSON = function () {
              return n;
            }),
            r
          );
        }
        var f = a.bind(null, r.Array),
          c = a.bind(null, i),
          s = a.bind(null, u),
          d = a.bind(null, r.String);
        function l(t, e, n) {
          function o(r, o) {
            return n(r, o) && r > t && r < e;
          }
          return (
            (n = n || r.Number),
            (o.toJSON = function () {
              return `${n.toJSON()} between [${t}, ${e}]`;
            }),
            o
          );
        }
        var h = Math.pow(2, 53) - 1;
        function p(t) {
          return "number" === typeof t && isFinite(t);
        }
        function y(t) {
          return (t << 24) >> 24 === t;
        }
        function g(t) {
          return (t << 16) >> 16 === t;
        }
        function b(t) {
          return (0 | t) === t;
        }
        function w(t) {
          return (
            "number" === typeof t && t >= -h && t <= h && Math.floor(t) === t
          );
        }
        function v(t) {
          return (255 & t) === t;
        }
        function m(t) {
          return (65535 & t) === t;
        }
        function _(t) {
          return t >>> 0 === t;
        }
        function E(t) {
          return (
            "number" === typeof t && t >= 0 && t <= h && Math.floor(t) === t
          );
        }
        var F = {
          ArrayN: f,
          Buffer: i,
          BufferN: c,
          Finite: p,
          Hex: u,
          HexN: s,
          Int8: y,
          Int16: g,
          Int32: b,
          Int53: w,
          Range: l,
          StringN: d,
          UInt8: v,
          UInt16: m,
          UInt32: _,
          UInt53: E,
        };
        for (var L in F)
          F[L].toJSON = function (t) {
            return t;
          }.bind(null, L);
        t.exports = F;
      }).call(this, n(2).Buffer);
    },
    2991: function (t, e, n) {
      t.exports = { encode: n(3640), decode: n(3641), encodingLength: n(3642) };
    },
    3075: function (t, e) {
      var n =
        ("undefined" != typeof crypto &&
          crypto.getRandomValues &&
          crypto.getRandomValues.bind(crypto)) ||
        ("undefined" != typeof msCrypto &&
          "function" == typeof window.msCrypto.getRandomValues &&
          msCrypto.getRandomValues.bind(msCrypto));
      if (n) {
        var r = new Uint8Array(16);
        t.exports = function () {
          return (n(r), r);
        };
      } else {
        var o = new Array(16);
        t.exports = function () {
          for (var t, e = 0; e < 16; e++)
            (0 === (3 & e) && (t = 4294967296 * Math.random()),
              (o[e] = (t >>> ((3 & e) << 3)) & 255));
          return o;
        };
      }
    },
    3076: function (t, e) {
      for (var n = [], r = 0; r < 256; ++r)
        n[r] = (r + 256).toString(16).substr(1);
      function o(t, e) {
        var r = e || 0,
          o = n;
        return [
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          "-",
          o[t[r++]],
          o[t[r++]],
          "-",
          o[t[r++]],
          o[t[r++]],
          "-",
          o[t[r++]],
          o[t[r++]],
          "-",
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
          o[t[r++]],
        ].join("");
      }
      t.exports = o;
    },
    3104: function (t, e, n) {
      (function (e) {
        const r = n(2828),
          o = e.alloc(1, 1),
          i = e.alloc(1, 0);
        function u(t, n, u, a, f) {
          let c = e.alloc(32, 0),
            s = e.alloc(32, 1);
          ((c = r("sha256", c)
            .update(s)
            .update(i)
            .update(n)
            .update(t)
            .update(f || "")
            .digest()),
            (s = r("sha256", c).update(s).digest()),
            (c = r("sha256", c)
              .update(s)
              .update(o)
              .update(n)
              .update(t)
              .update(f || "")
              .digest()),
            (s = r("sha256", c).update(s).digest()),
            (s = r("sha256", c).update(s).digest()));
          let d = s;
          while (!a(d) || !u(d))
            ((c = r("sha256", c).update(s).update(i).digest()),
              (s = r("sha256", c).update(s).digest()),
              (s = r("sha256", c).update(s).digest()),
              (d = s));
          return d;
        }
        t.exports = u;
      }).call(this, n(2).Buffer);
    },
    3177: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(3178);
      ((e.fromSeed = r.fromSeed),
        (e.fromBase58 = r.fromBase58),
        (e.fromPublicKey = r.fromPublicKey),
        (e.fromPrivateKey = r.fromPrivateKey));
    },
    3178: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(3179),
          o = n(2792),
          i = n(2819),
          u = n(2758),
          a = n(2838),
          f = u.BufferN(32),
          c = u.compile({
            wif: u.UInt8,
            bip32: { public: u.UInt32, private: u.UInt32 },
          }),
          s = {
            messagePrefix: "Bitcoin Signed Message:\n",
            bech32: "bc",
            bip32: { public: 76067358, private: 76066276 },
            pubKeyHash: 0,
            scriptHash: 5,
            wif: 128,
          },
          d = 2147483648,
          l = Math.pow(2, 31) - 1;
        function h(t) {
          return u.String(t) && null !== t.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
        }
        function p(t) {
          return u.UInt32(t) && t <= l;
        }
        class BIP32 {
          constructor(t, e, n, r, o, i, a) {
            (void 0 === o && (o = 0),
              void 0 === i && (i = 0),
              void 0 === a && (a = 0),
              (this.__D = t),
              (this.__Q = e),
              (this.chainCode = n),
              (this.network = r),
              (this.__DEPTH = o),
              (this.__INDEX = i),
              (this.__PARENT_FINGERPRINT = a),
              u(c, r),
              (this.lowR = !1));
          }
          get depth() {
            return this.__DEPTH;
          }
          get index() {
            return this.__INDEX;
          }
          get parentFingerprint() {
            return this.__PARENT_FINGERPRINT;
          }
          get publicKey() {
            return (
              void 0 === this.__Q &&
                (this.__Q = i.pointFromScalar(this.__D, !0)),
              this.__Q
            );
          }
          get privateKey() {
            return this.__D;
          }
          get identifier() {
            return r.hash160(this.publicKey);
          }
          get fingerprint() {
            return this.identifier.slice(0, 4);
          }
          get compressed() {
            return !0;
          }
          isNeutered() {
            return void 0 === this.__D;
          }
          neutered() {
            return v(
              this.publicKey,
              this.chainCode,
              this.network,
              this.depth,
              this.index,
              this.parentFingerprint,
            );
          }
          toBase58() {
            const e = this.network,
              n = this.isNeutered() ? e.bip32.public : e.bip32.private,
              r = t.allocUnsafe(78);
            return (
              r.writeUInt32BE(n, 0),
              r.writeUInt8(this.depth, 4),
              r.writeUInt32BE(this.parentFingerprint, 5),
              r.writeUInt32BE(this.index, 9),
              this.chainCode.copy(r, 13),
              this.isNeutered()
                ? this.publicKey.copy(r, 45)
                : (r.writeUInt8(0, 45), this.privateKey.copy(r, 46)),
              o.encode(r)
            );
          }
          toWIF() {
            if (!this.privateKey) throw new TypeError("Missing private key");
            return a.encode(this.network.wif, this.privateKey, !0);
          }
          derive(e) {
            u(u.UInt32, e);
            const n = e >= d,
              o = t.allocUnsafe(37);
            if (n) {
              if (this.isNeutered())
                throw new TypeError(
                  "Missing private key for hardened child key",
                );
              ((o[0] = 0), this.privateKey.copy(o, 1), o.writeUInt32BE(e, 33));
            } else (this.publicKey.copy(o, 0), o.writeUInt32BE(e, 33));
            const a = r.hmacSHA512(this.chainCode, o),
              f = a.slice(0, 32),
              c = a.slice(32);
            if (!i.isPrivate(f)) return this.derive(e + 1);
            let s;
            if (this.isNeutered()) {
              const t = i.pointAddScalar(this.publicKey, f, !0);
              if (null === t) return this.derive(e + 1);
              s = v(
                t,
                c,
                this.network,
                this.depth + 1,
                e,
                this.fingerprint.readUInt32BE(0),
              );
            } else {
              const t = i.privateAdd(this.privateKey, f);
              if (null == t) return this.derive(e + 1);
              s = b(
                t,
                c,
                this.network,
                this.depth + 1,
                e,
                this.fingerprint.readUInt32BE(0),
              );
            }
            return s;
          }
          deriveHardened(t) {
            return (u(p, t), this.derive(t + d));
          }
          derivePath(t) {
            u(h, t);
            let e = t.split("/");
            if ("m" === e[0]) {
              if (this.parentFingerprint)
                throw new TypeError("Expected master, got child");
              e = e.slice(1);
            }
            return e.reduce((t, e) => {
              let n;
              return "'" === e.slice(-1)
                ? ((n = parseInt(e.slice(0, -1), 10)), t.deriveHardened(n))
                : ((n = parseInt(e, 10)), t.derive(n));
            }, this);
          }
          sign(e, n) {
            if (!this.privateKey) throw new Error("Missing private key");
            if ((void 0 === n && (n = this.lowR), !1 === n))
              return i.sign(e, this.privateKey);
            {
              let n = i.sign(e, this.privateKey);
              const r = t.alloc(32, 0);
              let o = 0;
              while (n[0] > 127)
                (o++,
                  r.writeUIntLE(o, 0, 6),
                  (n = i.signWithEntropy(e, this.privateKey, r)));
              return n;
            }
          }
          verify(t, e) {
            return i.verify(t, this.publicKey, e);
          }
        }
        function y(t, e) {
          const n = o.decode(t);
          if (78 !== n.length) throw new TypeError("Invalid buffer length");
          e = e || s;
          const r = n.readUInt32BE(0);
          if (r !== e.bip32.private && r !== e.bip32.public)
            throw new TypeError("Invalid network version");
          const i = n[4],
            u = n.readUInt32BE(5);
          if (0 === i && 0 !== u)
            throw new TypeError("Invalid parent fingerprint");
          const a = n.readUInt32BE(9);
          if (0 === i && 0 !== a) throw new TypeError("Invalid index");
          const f = n.slice(13, 45);
          let c;
          if (r === e.bip32.private) {
            if (0 !== n.readUInt8(45))
              throw new TypeError("Invalid private key");
            const t = n.slice(46, 78);
            c = b(t, f, e, i, a, u);
          } else {
            const t = n.slice(45, 78);
            c = v(t, f, e, i, a, u);
          }
          return c;
        }
        function g(t, e, n) {
          return b(t, e, n);
        }
        function b(t, e, n, r, o, a) {
          if (
            (u(
              { privateKey: f, chainCode: f },
              { privateKey: t, chainCode: e },
            ),
            (n = n || s),
            !i.isPrivate(t))
          )
            throw new TypeError("Private key not in range [1, n)");
          return new BIP32(t, void 0, e, n, r, o, a);
        }
        function w(t, e, n) {
          return v(t, e, n);
        }
        function v(t, e, n, r, o, a) {
          if (
            (u(
              { publicKey: u.BufferN(33), chainCode: f },
              { publicKey: t, chainCode: e },
            ),
            (n = n || s),
            !i.isPoint(t))
          )
            throw new TypeError("Point is not on the curve");
          return new BIP32(void 0, t, e, n, r, o, a);
        }
        function m(e, n) {
          if ((u(u.Buffer, e), e.length < 16))
            throw new TypeError("Seed should be at least 128 bits");
          if (e.length > 64)
            throw new TypeError("Seed should be at most 512 bits");
          n = n || s;
          const o = r.hmacSHA512(t.from("Bitcoin seed", "utf8"), e),
            i = o.slice(0, 32),
            a = o.slice(32);
          return g(i, a, n);
        }
        ((e.fromBase58 = y),
          (e.fromPrivateKey = g),
          (e.fromPublicKey = w),
          (e.fromSeed = m));
      }).call(this, n(2).Buffer);
    },
    3179: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const r = n(797),
        o = n(2828);
      function i(t) {
        const e = r("sha256").update(t).digest();
        try {
          return r("rmd160").update(e).digest();
        } catch (n) {
          return r("ripemd160").update(e).digest();
        }
      }
      function u(t, e) {
        return o("sha512", t).update(e).digest();
      }
      ((e.hash160 = i), (e.hmacSHA512 = u));
    },
    3264: function (t, e, n) {
      var r = n(3409),
        o = n(3265),
        i = o;
      ((i.v1 = r), (i.v4 = o), (t.exports = i));
    },
    3265: function (t, e, n) {
      var r = n(3075),
        o = n(3076);
      function i(t, e, n) {
        var i = (e && n) || 0;
        ("string" == typeof t &&
          ((e = "binary" === t ? new Array(16) : null), (t = null)),
          (t = t || {}));
        var u = t.random || (t.rng || r)();
        if (((u[6] = (15 & u[6]) | 64), (u[8] = (63 & u[8]) | 128), e))
          for (var a = 0; a < 16; ++a) e[i + a] = u[a];
        return e || o(u);
      }
      t.exports = i;
    },
    3409: function (t, e, n) {
      var r,
        o,
        i = n(3075),
        u = n(3076),
        a = 0,
        f = 0;
      function c(t, e, n) {
        var c = (e && n) || 0,
          s = e || [];
        t = t || {};
        var d = t.node || r,
          l = void 0 !== t.clockseq ? t.clockseq : o;
        if (null == d || null == l) {
          var h = i();
          (null == d && (d = r = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]),
            null == l && (l = o = 16383 & ((h[6] << 8) | h[7])));
        }
        var p = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
          y = void 0 !== t.nsecs ? t.nsecs : f + 1,
          g = p - a + (y - f) / 1e4;
        if (
          (g < 0 && void 0 === t.clockseq && (l = (l + 1) & 16383),
          (g < 0 || p > a) && void 0 === t.nsecs && (y = 0),
          y >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        ((a = p), (f = y), (o = l), (p += 122192928e5));
        var b = (1e4 * (268435455 & p) + y) % 4294967296;
        ((s[c++] = (b >>> 24) & 255),
          (s[c++] = (b >>> 16) & 255),
          (s[c++] = (b >>> 8) & 255),
          (s[c++] = 255 & b));
        var w = ((p / 4294967296) * 1e4) & 268435455;
        ((s[c++] = (w >>> 8) & 255),
          (s[c++] = 255 & w),
          (s[c++] = ((w >>> 24) & 15) | 16),
          (s[c++] = (w >>> 16) & 255),
          (s[c++] = (l >>> 8) | 128),
          (s[c++] = 255 & l));
        for (var v = 0; v < 6; ++v) s[c + v] = d[v];
        return e || u(s);
      }
      t.exports = c;
    },
    3445: function (t, e, n) {
      const r = n(3446),
        o = n(3447),
        i = n(3448),
        u = n(3449),
        a = n(3450),
        f = 255 === new Uint8Array(Uint16Array.of(255).buffer)[0];
      function c(t) {
        switch (t) {
          case "ascii":
            return r;
          case "base64":
            return o;
          case "hex":
            return i;
          case "utf8":
          case "utf-8":
          case void 0:
          case null:
            return u;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return a;
          default:
            throw new Error("Unknown encoding: " + t);
        }
      }
      function s(t) {
        return t instanceof Uint8Array;
      }
      function d(t) {
        try {
          return (c(t), !0);
        } catch {
          return !1;
        }
      }
      function l(t, n, r) {
        const o = new Uint8Array(t);
        return (void 0 !== n && e.fill(o, n, 0, o.byteLength, r), o);
      }
      function h(t) {
        return new Uint8Array(t);
      }
      function p(t) {
        return new Uint8Array(t);
      }
      function y(t, e) {
        return c(e).byteLength(t);
      }
      function g(t, e) {
        if (t === e) return 0;
        const n = Math.min(t.byteLength, e.byteLength);
        ((t = new DataView(t.buffer, t.byteOffset, t.byteLength)),
          (e = new DataView(e.buffer, e.byteOffset, e.byteLength)));
        let r = 0;
        for (let o = n - (n % 4); r < o; r += 4) {
          const n = t.getUint32(r, f),
            o = e.getUint32(r, f);
          if (n !== o) break;
        }
        for (; r < n; r++) {
          const n = t.getUint8(r),
            o = e.getUint8(r);
          if (n < o) return -1;
          if (n > o) return 1;
        }
        return t.byteLength > e.byteLength
          ? 1
          : t.byteLength < e.byteLength
            ? -1
            : 0;
      }
      function b(t, e) {
        void 0 === e && (e = t.reduce((t, e) => t + e.byteLength, 0));
        const n = new Uint8Array(e);
        let r = 0;
        for (const o of t) {
          if (r + o.byteLength > n.byteLength) {
            const t = o.subarray(0, n.byteLength - r);
            return (n.set(t, r), n);
          }
          (n.set(o, r), (r += o.byteLength));
        }
        return n;
      }
      function w(t, e, n, r, o) {
        if (
          (void 0 === n && (n = 0),
          void 0 === r && (r = 0),
          void 0 === o && (o = t.byteLength),
          o > 0 && o < r)
        )
          return 0;
        if (o === r) return 0;
        if (0 === t.byteLength || 0 === e.byteLength) return 0;
        if (n < 0) throw new RangeError("targetStart is out of range");
        if (r < 0 || r >= t.byteLength)
          throw new RangeError("sourceStart is out of range");
        if (o < 0) throw new RangeError("sourceEnd is out of range");
        (n >= e.byteLength && (n = e.byteLength),
          o > t.byteLength && (o = t.byteLength),
          e.byteLength - n < o - r && (o = e.length - n + r));
        const i = o - r;
        return (
          t === e ? e.copyWithin(n, r, o) : e.set(t.subarray(r, o), n),
          i
        );
      }
      function v(t, e) {
        if (t === e) return !0;
        if (t.byteLength !== e.byteLength) return !1;
        const n = t.byteLength;
        ((t = new DataView(t.buffer, t.byteOffset, t.byteLength)),
          (e = new DataView(e.buffer, e.byteOffset, e.byteLength)));
        let r = 0;
        for (let o = n - (n % 4); r < o; r += 4)
          if (t.getUint32(r, f) !== e.getUint32(r, f)) return !1;
        for (; r < n; r++) if (t.getUint8(r) !== e.getUint8(r)) return !1;
        return !0;
      }
      function m(t, e, n, r, o) {
        if (
          ("string" === typeof e
            ? "string" === typeof n
              ? ((o = n), (n = 0), (r = t.byteLength))
              : "string" === typeof r && ((o = r), (r = t.byteLength))
            : "number" === typeof e
              ? (e &= 255)
              : "boolean" === typeof e && (e = +e),
          n < 0 || t.byteLength < n || t.byteLength < r)
        )
          throw new RangeError("Out of range index");
        if (
          (void 0 === n && (n = 0), void 0 === r && (r = t.byteLength), r <= n)
        )
          return t;
        if ((e || (e = 0), "number" === typeof e))
          for (let i = n; i < r; ++i) t[i] = e;
        else {
          e = s(e) ? e : _(e, o);
          const i = e.byteLength;
          for (let o = 0; o < r - n; ++o) t[o + n] = e[o % i];
        }
        return t;
      }
      function _(t, e, n) {
        return "string" === typeof t
          ? E(t, e)
          : Array.isArray(t)
            ? F(t)
            : ArrayBuffer.isView(t)
              ? L(t)
              : x(t, e, n);
      }
      function E(t, e) {
        const n = c(e),
          r = new Uint8Array(n.byteLength(t));
        return (n.write(r, t, 0, r.byteLength), r);
      }
      function F(t) {
        const e = new Uint8Array(t.length);
        return (e.set(t), e);
      }
      function L(t) {
        const e = new Uint8Array(t.byteLength);
        return (e.set(t), e);
      }
      function x(t, e, n) {
        return new Uint8Array(t, e, n);
      }
      function D(t, e, n, r) {
        return -1 !== T(t, e, n, r);
      }
      function S(t, e, n, r, o) {
        if (0 === t.byteLength) return -1;
        if (
          ("string" === typeof n
            ? ((r = n), (n = 0))
            : void 0 === n
              ? (n = o ? 0 : t.length - 1)
              : n < 0 && (n += t.byteLength),
          n >= t.byteLength)
        ) {
          if (o) return -1;
          n = t.byteLength - 1;
        } else if (n < 0) {
          if (!o) return -1;
          n = 0;
        }
        if ("string" === typeof e) e = _(e, r);
        else if ("number" === typeof e)
          return ((e &= 255), o ? t.indexOf(e, n) : t.lastIndexOf(e, n));
        if (0 === e.byteLength) return -1;
        if (o) {
          let r = -1;
          for (let o = n; o < t.byteLength; o++)
            if (t[o] === e[-1 === r ? 0 : o - r]) {
              if ((-1 === r && (r = o), o - r + 1 === e.byteLength)) return r;
            } else (-1 !== r && (o -= o - r), (r = -1));
        } else {
          n + e.byteLength > t.byteLength && (n = t.byteLength - e.byteLength);
          for (let r = n; r >= 0; r--) {
            let n = !0;
            for (let o = 0; o < e.byteLength; o++)
              if (t[r + o] !== e[o]) {
                n = !1;
                break;
              }
            if (n) return r;
          }
        }
        return -1;
      }
      function T(t, e, n, r) {
        return S(t, e, n, r, !0);
      }
      function A(t, e, n, r) {
        return S(t, e, n, r, !1);
      }
      function I(t, e, n) {
        const r = t[e];
        ((t[e] = t[n]), (t[n] = r));
      }
      function O(t) {
        const e = t.byteLength;
        if (e % 2 !== 0)
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let n = 0; n < e; n += 2) I(t, n, n + 1);
        return t;
      }
      function C(t) {
        const e = t.byteLength;
        if (e % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let n = 0; n < e; n += 4) (I(t, n, n + 3), I(t, n + 1, n + 2));
        return t;
      }
      function N(t) {
        const e = t.byteLength;
        if (e % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let n = 0; n < e; n += 8)
          (I(t, n, n + 7),
            I(t, n + 1, n + 6),
            I(t, n + 2, n + 5),
            I(t, n + 3, n + 4));
        return t;
      }
      function U(t) {
        return t;
      }
      function M(t, e, n, r) {
        (void 0 === n && (n = 0), void 0 === r && (r = t.byteLength));
        const o = t.byteLength;
        return n >= o || r <= n
          ? ""
          : (n < 0 && (n = 0),
            r > o && (r = o),
            (0 !== n || r < o) && (t = t.subarray(n, r)),
            c(e).toString(t));
      }
      function R(t, e, n, r, o) {
        return (
          void 0 === n
            ? (o = "utf8")
            : void 0 === r && "string" === typeof n
              ? ((o = n), (n = void 0))
              : void 0 === o &&
                "string" === typeof r &&
                ((o = r), (r = void 0)),
          c(o).write(t, e, n, r)
        );
      }
      function k(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat64(n, e, !0), n + 8);
      }
      function P(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat32(n, e, !0), n + 4);
      }
      function j(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setUint32(n, e, !0), n + 4);
      }
      function B(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setInt32(n, e, !0), n + 4);
      }
      function W(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getFloat64(e, !0);
      }
      function V(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getFloat32(e, !0);
      }
      function q(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getUint32(e, !0);
      }
      function K(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getInt32(e, !0);
      }
      function z(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat64(n, e, !1), n + 8);
      }
      function J(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setFloat32(n, e, !1), n + 4);
      }
      function $(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setUint32(n, e, !1), n + 4);
      }
      function H(t, e, n) {
        void 0 === n && (n = 0);
        const r = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return (r.setInt32(n, e, !1), n + 4);
      }
      function G(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getFloat64(e, !1);
      }
      function Q(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getFloat32(e, !1);
      }
      function Y(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getUint32(e, !1);
      }
      function Z(t, e) {
        void 0 === e && (e = 0);
        const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
        return n.getInt32(e, !1);
      }
      t.exports = e = {
        isBuffer: s,
        isEncoding: d,
        alloc: l,
        allocUnsafe: h,
        allocUnsafeSlow: p,
        byteLength: y,
        compare: g,
        concat: b,
        copy: w,
        equals: v,
        fill: m,
        from: _,
        includes: D,
        indexOf: T,
        lastIndexOf: A,
        swap16: O,
        swap32: C,
        swap64: N,
        toBuffer: U,
        toString: M,
        write: R,
        writeDoubleLE: k,
        writeFloatLE: P,
        writeUInt32LE: j,
        writeInt32LE: B,
        readDoubleLE: W,
        readFloatLE: V,
        readUInt32LE: q,
        readInt32LE: K,
        writeDoubleBE: z,
        writeFloatBE: J,
        writeUInt32BE: $,
        writeInt32BE: H,
        readDoubleBE: G,
        readFloatBE: Q,
        readUInt32BE: Y,
        readInt32BE: Z,
      };
    },
    3446: function (t, e) {
      function n(t) {
        return t.length;
      }
      function r(t) {
        const e = t.byteLength;
        let n = "";
        for (let r = 0; r < e; r++) n += String.fromCharCode(t[r]);
        return n;
      }
      function o(t, e, r, o) {
        (void 0 === r && (r = 0), void 0 === o && (o = n(e)));
        const i = Math.min(o, t.byteLength - r);
        for (let n = 0; n < i; n++) t[r + n] = e.charCodeAt(n);
        return i;
      }
      t.exports = { byteLength: n, toString: r, write: o };
    },
    3447: function (t, e) {
      const n =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        r = new Uint8Array(256);
      for (let a = 0; a < n.length; a++) r[n.charCodeAt(a)] = a;
      function o(t) {
        let e = t.length;
        return (
          61 === t.charCodeAt(e - 1) && e--,
          e > 1 && 61 === t.charCodeAt(e - 1) && e--,
          (3 * e) >>> 2
        );
      }
      function i(t) {
        const e = t.byteLength;
        let r = "";
        for (let o = 0; o < e; o += 3)
          r +=
            n[t[o] >> 2] +
            n[((3 & t[o]) << 4) | (t[o + 1] >> 4)] +
            n[((15 & t[o + 1]) << 2) | (t[o + 2] >> 6)] +
            n[63 & t[o + 2]];
        return (
          e % 3 === 2
            ? (r = r.substring(0, r.length - 1) + "=")
            : e % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="),
          r
        );
      }
      function u(t, e, n, i) {
        (void 0 === n && (n = 0), void 0 === i && (i = o(e)));
        const u = Math.min(i, t.byteLength - n);
        for (let o = 0, a = 0; a < u; o += 4) {
          const n = r[e.charCodeAt(o)],
            i = r[e.charCodeAt(o + 1)],
            u = r[e.charCodeAt(o + 2)],
            f = r[e.charCodeAt(o + 3)];
          ((t[a++] = (n << 2) | (i >> 4)),
            (t[a++] = ((15 & i) << 4) | (u >> 2)),
            (t[a++] = ((3 & u) << 6) | (63 & f)));
        }
        return u;
      }
      ((r[45] = 62),
        (r[95] = 63),
        (t.exports = { byteLength: o, toString: i, write: u }));
    },
    3448: function (t, e) {
      function n(t) {
        return t.length >>> 1;
      }
      function r(t) {
        const e = t.byteLength;
        t = new DataView(t.buffer, t.byteOffset, e);
        let n = "",
          r = 0;
        for (let o = e - (e % 4); r < o; r += 4)
          n += t.getUint32(r).toString(16).padStart(8, "0");
        for (; r < e; r++) n += t.getUint8(r).toString(16).padStart(2, "0");
        return n;
      }
      function o(t, e, r, o) {
        (void 0 === r && (r = 0), void 0 === o && (o = n(e)));
        const u = Math.min(o, t.byteLength - r);
        for (let n = 0; n < u; n++) {
          const o = i(e.charCodeAt(2 * n)),
            u = i(e.charCodeAt(2 * n + 1));
          if (void 0 === o || void 0 === u) return t.subarray(0, n);
          t[r + n] = (o << 4) | u;
        }
        return u;
      }
      function i(t) {
        return t >= 48 && t <= 57
          ? t - 48
          : t >= 65 && t <= 70
            ? t - 65 + 10
            : t >= 97 && t <= 102
              ? t - 97 + 10
              : void 0;
      }
      t.exports = { byteLength: n, toString: r, write: o };
    },
    3449: function (t, e) {
      function n(t) {
        let e = 0;
        for (let n = 0, r = t.length; n < r; n++) {
          const o = t.charCodeAt(n);
          if (o >= 55296 && o <= 56319 && n + 1 < r) {
            const r = t.charCodeAt(n + 1);
            if (r >= 56320 && r <= 57343) {
              ((e += 4), n++);
              continue;
            }
          }
          e += o <= 127 ? 1 : o <= 2047 ? 2 : 3;
        }
        return e;
      }
      let r, o;
      if ("undefined" !== typeof TextDecoder) {
        const t = new TextDecoder();
        r = function (e) {
          return t.decode(e);
        };
      } else
        r = function (t) {
          const e = t.byteLength;
          let n = "",
            r = 0;
          while (r < e) {
            let o = t[r];
            if (o <= 127) {
              ((n += String.fromCharCode(o)), r++);
              continue;
            }
            let i = 0,
              u = 0;
            if (
              (o <= 223
                ? ((i = 1), (u = 31 & o))
                : o <= 239
                  ? ((i = 2), (u = 15 & o))
                  : o <= 244 && ((i = 3), (u = 7 & o)),
              e - r - i > 0)
            ) {
              let e = 0;
              while (e < i)
                ((o = t[r + e + 1]), (u = (u << 6) | (63 & o)), (e += 1));
            } else ((u = 65533), (i = e - r));
            ((n += String.fromCodePoint(u)), (r += i + 1));
          }
          return n;
        };
      if ("undefined" !== typeof TextEncoder) {
        const t = new TextEncoder();
        o = function (e, r, o, i) {
          (void 0 === o && (o = 0), void 0 === i && (i = n(r)));
          const u = Math.min(i, e.byteLength - o);
          return (t.encodeInto(r, e.subarray(o, o + u)), u);
        };
      } else
        o = function (t, e, r, o) {
          (void 0 === r && (r = 0), void 0 === o && (o = n(e)));
          const i = Math.min(o, t.byteLength - r);
          t = t.subarray(r, r + i);
          let u = 0,
            a = 0;
          while (u < e.length) {
            const n = e.codePointAt(u);
            if (n <= 127) {
              ((t[a++] = n), u++);
              continue;
            }
            let r = 0,
              o = 0;
            (n <= 2047
              ? ((r = 6), (o = 192))
              : n <= 65535
                ? ((r = 12), (o = 224))
                : n <= 2097151 && ((r = 18), (o = 240)),
              (t[a++] = o | (n >> r)),
              (r -= 6));
            while (r >= 0) ((t[a++] = 128 | ((n >> r) & 63)), (r -= 6));
            u += n >= 65536 ? 2 : 1;
          }
          return i;
        };
      t.exports = { byteLength: n, toString: r, write: o };
    },
    3450: function (t, e) {
      function n(t) {
        return 2 * t.length;
      }
      function r(t) {
        const e = t.byteLength;
        let n = "";
        for (let r = 0; r < e - 1; r += 2)
          n += String.fromCharCode(t[r] + 256 * t[r + 1]);
        return n;
      }
      function o(t, e, r, o) {
        (void 0 === r && (r = 0), void 0 === o && (o = n(e)));
        const i = Math.min(o, t.byteLength - r);
        let u = i;
        for (let n = 0; n < e.length; ++n) {
          if ((u -= 2) < 0) break;
          const o = e.charCodeAt(n),
            i = o >> 8,
            a = o % 256;
          ((t[r + 2 * n] = a), (t[r + 2 * n + 1] = i));
        }
        return i;
      }
      t.exports = { byteLength: n, toString: r, write: o };
    },
    3634: function (t, e, n) {
      (function (r, o) {
        var i, u;
        !(function (a) {
          "use strict";
          function f(t, e) {
            if (
              ((e = e || { type: "Array" }),
              "undefined" != typeof r &&
                "number" == typeof r.pid &&
                r.versions &&
                r.versions.node)
            )
              return c(t, e);
            var n = window.crypto || window.msCrypto;
            if (!n)
              throw new Error("Your browser does not support window.crypto.");
            return s(t, e);
          }
          function c(t, e) {
            var r = n(3635),
              o = r.randomBytes(t);
            switch (e.type) {
              case "Array":
                return [].slice.call(o);
              case "Buffer":
                return o;
              case "Uint8Array":
                for (var i = new Uint8Array(t), u = 0; u < t; ++u)
                  i[u] = o.readUInt8(u);
                return i;
              default:
                throw new Error(e.type + " is unsupported.");
            }
          }
          function s(t, e) {
            var n = new Uint8Array(t),
              r = window.crypto || window.msCrypto;
            switch ((r.getRandomValues(n), e.type)) {
              case "Array":
                return [].slice.call(n);
              case "Buffer":
                try {
                  new o(1);
                } catch (i) {
                  throw new Error(
                    "Buffer not supported in this environment. Use Node.js or Browserify for browser support.",
                  );
                }
                return new o(n);
              case "Uint8Array":
                return n;
              default:
                throw new Error(e.type + " is unsupported.");
            }
          }
          ((i = []),
            (u = function () {
              return f;
            }.apply(e, i)),
            void 0 === u || (t.exports = u),
            (f.randomArray = function (t) {
              return f(t, { type: "Array" });
            }),
            (f.randomUint8Array = function (t) {
              return f(t, { type: "Uint8Array" });
            }),
            (f.randomBuffer = function (t) {
              return f(t, { type: "Buffer" });
            }));
        })();
      }).call(this, n(18), n(2).Buffer);
    },
    3640: function (t, e) {
      t.exports = u;
      var n = 128,
        r = 127,
        o = ~r,
        i = Math.pow(2, 31);
      function u(t, e, r) {
        ((e = e || []), (r = r || 0));
        var a = r;
        while (t >= i) ((e[r++] = (255 & t) | n), (t /= 128));
        while (t & o) ((e[r++] = (255 & t) | n), (t >>>= 7));
        return ((e[r] = 0 | t), (u.bytes = r - a + 1), e);
      }
    },
    3641: function (t, e) {
      t.exports = o;
      var n = 128,
        r = 127;
      function o(t, e) {
        var i,
          u = 0,
          a = ((e = e || 0), 0),
          f = e,
          c = t.length;
        do {
          if (f >= c)
            throw ((o.bytes = 0), new RangeError("Could not decode varint"));
          ((i = t[f++]),
            (u += a < 28 ? (i & r) << a : (i & r) * Math.pow(2, a)),
            (a += 7));
        } while (i >= n);
        return ((o.bytes = f - e), u);
      }
    },
    3642: function (t, e) {
      var n = Math.pow(2, 7),
        r = Math.pow(2, 14),
        o = Math.pow(2, 21),
        i = Math.pow(2, 28),
        u = Math.pow(2, 35),
        a = Math.pow(2, 42),
        f = Math.pow(2, 49),
        c = Math.pow(2, 56),
        s = Math.pow(2, 63);
      t.exports = function (t) {
        return t < n
          ? 1
          : t < r
            ? 2
            : t < o
              ? 3
              : t < i
                ? 4
                : t < u
                  ? 5
                  : t < a
                    ? 6
                    : t < f
                      ? 7
                      : t < c
                        ? 8
                        : t < s
                          ? 9
                          : 10;
      };
    },
    4517: function (t, e, n) {
      (function (r) {
        var o;
        /*!
         * is.js 0.8.0
         * Author: Aras Atasaygin
         */ (function (r, i) {
          ((o = function () {
            return (r.is = i());
          }.call(e, n, e, t)),
            void 0 === o || (t.exports = o));
        })(this, function () {
          var t = { VERSION: "0.8.0", not: {}, all: {}, any: {} },
            e = Object.prototype.toString,
            n = Array.prototype.slice,
            o = Object.prototype.hasOwnProperty;
          function i(t) {
            return function () {
              return !t.apply(null, n.call(arguments));
            };
          }
          function u(t) {
            return function () {
              for (var e = s(arguments), n = e.length, r = 0; r < n; r++)
                if (!t.call(null, e[r])) return !1;
              return !0;
            };
          }
          function a(t) {
            return function () {
              for (var e = s(arguments), n = e.length, r = 0; r < n; r++)
                if (t.call(null, e[r])) return !0;
              return !1;
            };
          }
          var f = {
            "<": function (t, e) {
              return t < e;
            },
            "<=": function (t, e) {
              return t <= e;
            },
            ">": function (t, e) {
              return t > e;
            },
            ">=": function (t, e) {
              return t >= e;
            },
          };
          function c(t, e) {
            var n = e + "",
              r = +(n.match(/\d+/) || NaN),
              o = n.match(/^[<>]=?|/)[0];
            return f[o] ? f[o](t, r) : t == r || r !== r;
          }
          function s(e) {
            var r = n.call(e),
              o = r.length;
            return (1 === o && t.array(r[0]) && (r = r[0]), r);
          }
          ((t.arguments = function (t) {
            return (
              "[object Arguments]" === e.call(t) ||
              (null != t && "object" === typeof t && "callee" in t)
            );
          }),
            (t.array =
              Array.isArray ||
              function (t) {
                return "[object Array]" === e.call(t);
              }),
            (t.boolean = function (t) {
              return !0 === t || !1 === t || "[object Boolean]" === e.call(t);
            }),
            (t.char = function (e) {
              return t.string(e) && 1 === e.length;
            }),
            (t.date = function (t) {
              return "[object Date]" === e.call(t);
            }),
            (t.domNode = function (e) {
              return t.object(e) && e.nodeType > 0;
            }),
            (t.error = function (t) {
              return "[object Error]" === e.call(t);
            }),
            (t["function"] = function (t) {
              return (
                "[object Function]" === e.call(t) || "function" === typeof t
              );
            }),
            (t.json = function (t) {
              return "[object Object]" === e.call(t);
            }),
            (t.nan = function (t) {
              return t !== t;
            }),
            (t["null"] = function (t) {
              return null === t;
            }),
            (t.number = function (n) {
              return t.not.nan(n) && "[object Number]" === e.call(n);
            }),
            (t.object = function (t) {
              return Object(t) === t;
            }),
            (t.regexp = function (t) {
              return "[object RegExp]" === e.call(t);
            }),
            (t.sameType = function (n, r) {
              var o = e.call(n);
              return (
                o === e.call(r) &&
                ("[object Number]" !== o || !t.any.nan(n, r) || t.all.nan(n, r))
              );
            }),
            (t.sameType.api = ["not"]),
            (t.string = function (t) {
              return "[object String]" === e.call(t);
            }),
            (t.undefined = function (t) {
              return void 0 === t;
            }),
            (t.windowObject = function (t) {
              return null != t && "object" === typeof t && "setInterval" in t;
            }),
            (t.empty = function (e) {
              if (t.object(e)) {
                var n = Object.getOwnPropertyNames(e).length;
                return !!(
                  0 === n ||
                  (1 === n && t.array(e)) ||
                  (2 === n && t.arguments(e))
                );
              }
              return "" === e;
            }),
            (t.existy = function (t) {
              return null != t;
            }),
            (t.falsy = function (t) {
              return !t;
            }),
            (t.truthy = i(t.falsy)),
            (t.above = function (e, n) {
              return t.all.number(e, n) && e > n;
            }),
            (t.above.api = ["not"]),
            (t.decimal = function (e) {
              return t.number(e) && e % 1 !== 0;
            }),
            (t.equal = function (e, n) {
              return t.all.number(e, n)
                ? e === n && 1 / e === 1 / n
                : t.all.string(e, n) || t.all.regexp(e, n)
                  ? "" + e === "" + n
                  : !!t.all.boolean(e, n) && e === n;
            }),
            (t.equal.api = ["not"]),
            (t.even = function (e) {
              return t.number(e) && e % 2 === 0;
            }),
            (t.finite =
              isFinite ||
              function (e) {
                return t.not.infinite(e) && t.not.nan(e);
              }),
            (t.infinite = function (t) {
              return t === 1 / 0 || t === -1 / 0;
            }),
            (t.integer = function (e) {
              return t.number(e) && e % 1 === 0;
            }),
            (t.negative = function (e) {
              return t.number(e) && e < 0;
            }),
            (t.odd = function (e) {
              return t.number(e) && e % 2 === 1;
            }),
            (t.positive = function (e) {
              return t.number(e) && e > 0;
            }),
            (t.under = function (e, n) {
              return t.all.number(e, n) && e < n;
            }),
            (t.under.api = ["not"]),
            (t.within = function (e, n, r) {
              return t.all.number(e, n, r) && e > n && e < r;
            }),
            (t.within.api = ["not"]));
          var d = {
            affirmative: /^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,
            alphaNumeric: /^[A-Za-z0-9]+$/,
            caPostalCode: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/,
            creditCard:
              /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,
            dateString:
              /^(1[0-2]|0?[1-9])([\/-])(3[01]|[12][0-9]|0?[1-9])(?:\2)(?:[0-9]{2})?[0-9]{2}$/,
            email:
              /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
            eppPhone: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,
            hexadecimal: /^(?:0x)?[0-9a-fA-F]+$/,
            hexColor: /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
            ipv4: /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
            ipv6: /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,
            nanpPhone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
            socialSecurityNumber:
              /^(?!000|666)[0-8][0-9]{2}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4}$/,
            timeString: /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,
            ukPostCode:
              /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,
            url: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
            usZipCode: /^[0-9]{5}(?:-[0-9]{4})?$/,
          };
          function l(e, n) {
            t[e] = function (t) {
              return n[e].test(t);
            };
          }
          for (var h in d) d.hasOwnProperty(h) && l(h, d);
          ((t.ip = function (e) {
            return t.ipv4(e) || t.ipv6(e);
          }),
            (t.capitalized = function (e) {
              if (t.not.string(e)) return !1;
              for (var n = e.split(" "), r = 0; r < n.length; r++) {
                var o = n[r];
                if (o.length) {
                  var i = o.charAt(0);
                  if (i !== i.toUpperCase()) return !1;
                }
              }
              return !0;
            }),
            (t.endWith = function (e, n) {
              if (t.not.string(e)) return !1;
              n += "";
              var r = e.length - n.length;
              return r >= 0 && e.indexOf(n, r) === r;
            }),
            (t.endWith.api = ["not"]),
            (t.include = function (t, e) {
              return t.indexOf(e) > -1;
            }),
            (t.include.api = ["not"]),
            (t.lowerCase = function (e) {
              return t.string(e) && e === e.toLowerCase();
            }),
            (t.palindrome = function (e) {
              if (t.not.string(e)) return !1;
              e = e.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
              for (
                var n = e.length - 1, r = 0, o = Math.floor(n / 2);
                r <= o;
                r++
              )
                if (e.charAt(r) !== e.charAt(n - r)) return !1;
              return !0;
            }),
            (t.space = function (e) {
              if (t.not.char(e)) return !1;
              var n = e.charCodeAt(0);
              return (n > 8 && n < 14) || 32 === n;
            }),
            (t.startWith = function (e, n) {
              return t.string(e) && 0 === e.indexOf(n);
            }),
            (t.startWith.api = ["not"]),
            (t.upperCase = function (e) {
              return t.string(e) && e === e.toUpperCase();
            }));
          var p = [
              "sunday",
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday",
              "saturday",
            ],
            y = [
              "january",
              "february",
              "march",
              "april",
              "may",
              "june",
              "july",
              "august",
              "september",
              "october",
              "november",
              "december",
            ];
          ((t.day = function (e, n) {
            return t.date(e) && n.toLowerCase() === p[e.getDay()];
          }),
            (t.day.api = ["not"]),
            (t.dayLightSavingTime = function (t) {
              var e = new Date(t.getFullYear(), 0, 1),
                n = new Date(t.getFullYear(), 6, 1),
                r = Math.max(e.getTimezoneOffset(), n.getTimezoneOffset());
              return t.getTimezoneOffset() < r;
            }),
            (t.future = function (e) {
              var n = new Date();
              return t.date(e) && e.getTime() > n.getTime();
            }),
            (t.inDateRange = function (e, n, r) {
              if (t.not.date(e) || t.not.date(n) || t.not.date(r)) return !1;
              var o = e.getTime();
              return o > n.getTime() && o < r.getTime();
            }),
            (t.inDateRange.api = ["not"]),
            (t.inLastMonth = function (e) {
              return t.inDateRange(
                e,
                new Date(new Date().setMonth(new Date().getMonth() - 1)),
                new Date(),
              );
            }),
            (t.inLastWeek = function (e) {
              return t.inDateRange(
                e,
                new Date(new Date().setDate(new Date().getDate() - 7)),
                new Date(),
              );
            }),
            (t.inLastYear = function (e) {
              return t.inDateRange(
                e,
                new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
                new Date(),
              );
            }),
            (t.inNextMonth = function (e) {
              return t.inDateRange(
                e,
                new Date(),
                new Date(new Date().setMonth(new Date().getMonth() + 1)),
              );
            }),
            (t.inNextWeek = function (e) {
              return t.inDateRange(
                e,
                new Date(),
                new Date(new Date().setDate(new Date().getDate() + 7)),
              );
            }),
            (t.inNextYear = function (e) {
              return t.inDateRange(
                e,
                new Date(),
                new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
              );
            }),
            (t.leapYear = function (e) {
              return (
                t.number(e) && ((e % 4 === 0 && e % 100 !== 0) || e % 400 === 0)
              );
            }),
            (t.month = function (e, n) {
              return t.date(e) && n.toLowerCase() === y[e.getMonth()];
            }),
            (t.month.api = ["not"]),
            (t.past = function (e) {
              var n = new Date();
              return t.date(e) && e.getTime() < n.getTime();
            }),
            (t.quarterOfYear = function (e, n) {
              return (
                t.date(e) &&
                t.number(n) &&
                n === Math.floor((e.getMonth() + 3) / 3)
              );
            }),
            (t.quarterOfYear.api = ["not"]),
            (t.today = function (e) {
              var n = new Date(),
                r = n.toDateString();
              return t.date(e) && e.toDateString() === r;
            }),
            (t.tomorrow = function (e) {
              var n = new Date(),
                r = new Date(n.setDate(n.getDate() + 1)).toDateString();
              return t.date(e) && e.toDateString() === r;
            }),
            (t.weekend = function (e) {
              return t.date(e) && (6 === e.getDay() || 0 === e.getDay());
            }),
            (t.weekday = i(t.weekend)),
            (t.year = function (e, n) {
              return t.date(e) && t.number(n) && n === e.getFullYear();
            }),
            (t.year.api = ["not"]),
            (t.yesterday = function (e) {
              var n = new Date(),
                r = new Date(n.setDate(n.getDate() - 1)).toDateString();
              return t.date(e) && e.toDateString() === r;
            }));
          var g = t.windowObject("object" == typeof r && r) && r,
            b = t.windowObject("object" == typeof self && self) && self,
            w = t.windowObject("object" == typeof this && this) && this,
            v = g || b || w || Function("return this")(),
            m = b && b.document,
            _ = v.is,
            E = b && b.navigator,
            F = ((E && E.appVersion) || "").toLowerCase(),
            L = ((E && E.userAgent) || "").toLowerCase(),
            x = ((E && E.vendor) || "").toLowerCase();
          function D() {
            var e = t;
            for (var n in e)
              if (o.call(e, n) && t["function"](e[n]))
                for (
                  var r = e[n].api || ["not", "all", "any"], f = 0;
                  f < r.length;
                  f++
                )
                  ("not" === r[f] && (t.not[n] = i(t[n])),
                    "all" === r[f] && (t.all[n] = u(t[n])),
                    "any" === r[f] && (t.any[n] = a(t[n])));
          }
          return (
            (t.android = function () {
              return /android/.test(L);
            }),
            (t.android.api = ["not"]),
            (t.androidPhone = function () {
              return /android/.test(L) && /mobile/.test(L);
            }),
            (t.androidPhone.api = ["not"]),
            (t.androidTablet = function () {
              return /android/.test(L) && !/mobile/.test(L);
            }),
            (t.androidTablet.api = ["not"]),
            (t.blackberry = function () {
              return /blackberry/.test(L) || /bb10/.test(L);
            }),
            (t.blackberry.api = ["not"]),
            (t.chrome = function (t) {
              var e = /google inc/.test(x)
                ? L.match(/(?:chrome|crios)\/(\d+)/)
                : null;
              return null !== e && c(e[1], t);
            }),
            (t.chrome.api = ["not"]),
            (t.desktop = function () {
              return t.not.mobile() && t.not.tablet();
            }),
            (t.desktop.api = ["not"]),
            (t.edge = function (t) {
              var e = L.match(/edge\/(\d+)/);
              return null !== e && c(e[1], t);
            }),
            (t.edge.api = ["not"]),
            (t.firefox = function (t) {
              var e = L.match(/(?:firefox|fxios)\/(\d+)/);
              return null !== e && c(e[1], t);
            }),
            (t.firefox.api = ["not"]),
            (t.ie = function (t) {
              var e = L.match(/(?:msie |trident.+?; rv:)(\d+)/);
              return null !== e && c(e[1], t);
            }),
            (t.ie.api = ["not"]),
            (t.ios = function () {
              return t.iphone() || t.ipad() || t.ipod();
            }),
            (t.ios.api = ["not"]),
            (t.ipad = function (t) {
              var e = L.match(/ipad.+?os (\d+)/);
              return null !== e && c(e[1], t);
            }),
            (t.ipad.api = ["not"]),
            (t.iphone = function (t) {
              var e = L.match(/iphone(?:.+?os (\d+))?/);
              return null !== e && c(e[1] || 1, t);
            }),
            (t.iphone.api = ["not"]),
            (t.ipod = function (t) {
              var e = L.match(/ipod.+?os (\d+)/);
              return null !== e && c(e[1], t);
            }),
            (t.ipod.api = ["not"]),
            (t.linux = function () {
              return /linux/.test(F);
            }),
            (t.linux.api = ["not"]),
            (t.mac = function () {
              return /mac/.test(F);
            }),
            (t.mac.api = ["not"]),
            (t.mobile = function () {
              return (
                t.iphone() ||
                t.ipod() ||
                t.androidPhone() ||
                t.blackberry() ||
                t.windowsPhone()
              );
            }),
            (t.mobile.api = ["not"]),
            (t.offline = i(t.online)),
            (t.offline.api = ["not"]),
            (t.online = function () {
              return !E || !0 === E.onLine;
            }),
            (t.online.api = ["not"]),
            (t.opera = function (t) {
              var e = L.match(/(?:^opera.+?version|opr)\/(\d+)/);
              return null !== e && c(e[1], t);
            }),
            (t.opera.api = ["not"]),
            (t.phantom = function (t) {
              var e = L.match(/phantomjs\/(\d+)/);
              return null !== e && c(e[1], t);
            }),
            (t.phantom.api = ["not"]),
            (t.safari = function (t) {
              var e = L.match(/version\/(\d+).+?safari/);
              return null !== e && c(e[1], t);
            }),
            (t.safari.api = ["not"]),
            (t.tablet = function () {
              return t.ipad() || t.androidTablet() || t.windowsTablet();
            }),
            (t.tablet.api = ["not"]),
            (t.touchDevice = function () {
              return (
                !!m &&
                ("ontouchstart" in b ||
                  ("DocumentTouch" in b && m instanceof DocumentTouch))
              );
            }),
            (t.touchDevice.api = ["not"]),
            (t.windows = function () {
              return /win/.test(F);
            }),
            (t.windows.api = ["not"]),
            (t.windowsPhone = function () {
              return t.windows() && /phone/.test(L);
            }),
            (t.windowsPhone.api = ["not"]),
            (t.windowsTablet = function () {
              return t.windows() && t.not.windowsPhone() && /touch/.test(L);
            }),
            (t.windowsTablet.api = ["not"]),
            (t.propertyCount = function (e, n) {
              if (t.not.object(e) || t.not.number(n)) return !1;
              var r = 0;
              for (var i in e) if (o.call(e, i) && ++r > n) return !1;
              return r === n;
            }),
            (t.propertyCount.api = ["not"]),
            (t.propertyDefined = function (e, n) {
              return t.object(e) && t.string(n) && n in e;
            }),
            (t.propertyDefined.api = ["not"]),
            (t.inArray = function (e, n) {
              if (t.not.array(n)) return !1;
              for (var r = 0; r < n.length; r++) if (n[r] === e) return !0;
              return !1;
            }),
            (t.inArray.api = ["not"]),
            (t.sorted = function (e, n) {
              if (t.not.array(e)) return !1;
              for (var r = f[n] || f[">="], o = 1; o < e.length; o++)
                if (!r(e[o], e[o - 1])) return !1;
              return !0;
            }),
            D(),
            (t.setNamespace = function () {
              return ((v.is = _), this);
            }),
            (t.setRegexp = function (t, e) {
              for (var n in d) o.call(d, n) && e === n && (d[n] = t);
            }),
            t
          );
        });
      }).call(this, n(13));
    },
    4979: function (t, e) {
      function n(t, e, n, o) {
        return JSON.stringify(t, r(e, o), n);
      }
      function r(t, e) {
        var n = [],
          r = [];
        return (
          null == e &&
            (e = function (t, e) {
              return n[0] === e
                ? "[Circular ~]"
                : "[Circular ~." + r.slice(0, n.indexOf(e)).join(".") + "]";
            }),
          function (o, i) {
            if (n.length > 0) {
              var u = n.indexOf(this);
              (~u ? n.splice(u + 1) : n.push(this),
                ~u ? r.splice(u, 1 / 0, o) : r.push(o),
                ~n.indexOf(i) && (i = e.call(this, o, i)));
            } else n.push(i);
            return null == t ? i : t.call(this, o, i);
          }
        );
      }
      ((e = t.exports = n), (e.getSerialize = r));
    },
    5435: function (t, e, n) {
      "use strict";
      t.exports = n(5436);
    },
    5436: function (t, e, n) {
      "use strict";
      (function (e) {
        t.exports = c;
        var r = n(5437),
          o = "undefined" !== typeof navigator && !!navigator.userAgent,
          i =
            o &&
            navigator.userAgent.match(/Safari\//) &&
            !navigator.userAgent.match(/Chrome\//),
          u = o && navigator.userAgent.match(/Edge\/1[2345]/),
          a = null;
        function f(t) {
          return (
            a ||
              (a = new t(function (t, e) {
                function n() {
                  t({ u2f: null, native: !0 });
                }
                if (!o) return n();
                if (i) return n();
                var a =
                  "undefined" !== typeof window.u2f &&
                  "function" === typeof window.u2f.sign;
                return (
                  a && t({ u2f: window.u2f, native: !0 }),
                  u ||
                  "http:" === location.protocol ||
                  "undefined" === typeof MessageChannel
                    ? n()
                    : void r.isSupported(function (e) {
                        e ? t({ u2f: r, native: !1 }) : n();
                      })
                );
              })),
            a
          );
        }
        function c(t) {
          return {
            isSupported: l.bind(t),
            ensureSupport: p.bind(t),
            register: y.bind(t),
            sign: g.bind(t),
            ErrorCodes: c.ErrorCodes,
            ErrorNames: c.ErrorNames,
          };
        }
        function s(t, e) {
          var n = null != e ? e.errorCode : 1,
            r = c.ErrorNames["" + n],
            o = new Error(t);
          return ((o.metaData = { type: r, code: n }), o);
        }
        function d(t, e) {
          var n = {};
          return (
            (n.promise = new t(function (t, r) {
              ((n.resolve = t), (n.reject = r), e.then(t, r));
            })),
            (n.promise.cancel = function (e, r) {
              f(t).then(function (t) {
                (r && !t.native && t.u2f.disconnect(),
                  n.reject(s(e, { errorCode: -1 })));
              });
            }),
            n
          );
        }
        function l() {
          var t = this;
          return f(t).then(function (t) {
            return !!t.u2f;
          });
        }
        function h(t) {
          if (!t.u2f) {
            if ("http:" === location.protocol)
              throw new Error("U2F isn't supported over http, only https");
            throw new Error("U2F not supported");
          }
        }
        function p() {
          var t = this;
          return f(t).then(h);
        }
        function y(t, e, n) {
          var r = this;
          return (
            Array.isArray(t) || (t = [t]),
            "number" === typeof e &&
              "undefined" === typeof n &&
              ((n = e), (e = null)),
            e || (e = []),
            d(
              r,
              f(r).then(function (o) {
                h(o);
                var i = o.native,
                  u = o.u2f;
                return new r(function (r, o) {
                  function a(t) {
                    t.errorCode
                      ? o(s("Registration failed", t))
                      : (delete t.errorCode, r(t));
                  }
                  function f(t, e) {
                    t
                      ? o(t)
                      : e.errorCode
                        ? o(s("Registration failed", e))
                        : r(e);
                  }
                  if (i) {
                    var c = t[0].appId;
                    u.register(c, t, e, a, n);
                  } else u.register(t, e, f, n);
                });
              }),
            ).promise
          );
        }
        function g(t, e) {
          var n = this;
          return (
            Array.isArray(t) || (t = [t]),
            d(
              n,
              f(n).then(function (r) {
                h(r);
                var o = r.native,
                  i = r.u2f;
                return new n(function (n, r) {
                  function u(t) {
                    t.errorCode
                      ? r(s("Sign failed", t))
                      : (delete t.errorCode, n(t));
                  }
                  function a(t, e) {
                    t ? r(t) : e.errorCode ? r(s("Sign failed", e)) : n(e);
                  }
                  if (o) {
                    var f = t[0].appId,
                      c = t[0].challenge;
                    i.sign(f, c, t, u, e);
                  } else i.sign(t, a, e);
                });
              }),
            ).promise
          );
        }
        function b(t) {
          c[t] = function () {
            if (!e.Promise)
              throw new Error("The platform doesn't natively support promises");
            var n = [].slice.call(arguments);
            return c(e.Promise)[t].apply(null, n);
          };
        }
        ((c.ErrorCodes = {
          CANCELLED: -1,
          OK: 0,
          OTHER_ERROR: 1,
          BAD_REQUEST: 2,
          CONFIGURATION_UNSUPPORTED: 3,
          DEVICE_INELIGIBLE: 4,
          TIMEOUT: 5,
        }),
          (c.ErrorNames = {
            "-1": "CANCELLED",
            0: "OK",
            1: "OTHER_ERROR",
            2: "BAD_REQUEST",
            3: "CONFIGURATION_UNSUPPORTED",
            4: "DEVICE_INELIGIBLE",
            5: "TIMEOUT",
          }),
          b("isSupported"),
          b("ensureSupport"),
          b("register"),
          b("sign"));
      }).call(this, n(13));
    },
    5437: function (t, e, n) {
      "use strict";
      var r = r || {};
      ((t.exports = r),
        (r.EXTENSION_ID = "kmendfapggjehodndflmmgagdbamhnfd"),
        (r.MessageTypes = {
          U2F_REGISTER_REQUEST: "u2f_register_request",
          U2F_SIGN_REQUEST: "u2f_sign_request",
          U2F_REGISTER_RESPONSE: "u2f_register_response",
          U2F_SIGN_RESPONSE: "u2f_sign_response",
        }),
        (r.ErrorCodes = {
          OK: 0,
          OTHER_ERROR: 1,
          BAD_REQUEST: 2,
          CONFIGURATION_UNSUPPORTED: 3,
          DEVICE_INELIGIBLE: 4,
          TIMEOUT: 5,
        }),
        r.Request,
        r.Response,
        r.Error,
        r.SignRequest,
        r.SignResponse,
        r.RegisterRequest,
        r.RegisterResponse,
        (r.disconnect = function () {
          r.port_ &&
            r.port_.port_ &&
            (r.port_.port_.disconnect(), (r.port_ = null));
        }),
        (r.getMessagePort = function (t) {
          if ("undefined" != typeof chrome && chrome.runtime) {
            var e = { type: r.MessageTypes.U2F_SIGN_REQUEST, signRequests: [] };
            chrome.runtime.sendMessage(r.EXTENSION_ID, e, function () {
              chrome.runtime.lastError
                ? r.getIframePort_(t)
                : r.getChromeRuntimePort_(t);
            });
          } else r.getIframePort_(t);
        }),
        (r.getChromeRuntimePort_ = function (t) {
          var e = chrome.runtime.connect(r.EXTENSION_ID, {
            includeTlsChannelId: !0,
          });
          setTimeout(function () {
            t(null, new r.WrappedChromeRuntimePort_(e));
          }, 0);
        }),
        (r.WrappedChromeRuntimePort_ = function (t) {
          this.port_ = t;
        }),
        (r.WrappedChromeRuntimePort_.prototype.postMessage = function (t) {
          this.port_.postMessage(t);
        }),
        (r.WrappedChromeRuntimePort_.prototype.addEventListener = function (
          t,
          e,
        ) {
          var n = t.toLowerCase();
          "message" == n || "onmessage" == n
            ? this.port_.onMessage.addListener(function (t) {
                e({ data: t });
              })
            : console.error("WrappedChromeRuntimePort only supports onMessage");
        }),
        (r.getIframePort_ = function (t) {
          var e = "chrome-extension://" + r.EXTENSION_ID,
            n = document.createElement("iframe");
          ((n.src = e + "/u2f-comms.html"),
            n.setAttribute("style", "display:none"),
            document.body.appendChild(n));
          var o = !1,
            i = new MessageChannel(),
            u = function (e) {
              "ready" == e.data
                ? (i.port1.removeEventListener("message", u),
                  o || ((o = !0), t(null, i.port1)))
                : console.error('First event on iframe port was not "ready"');
            };
          (i.port1.addEventListener("message", u),
            i.port1.start(),
            n.addEventListener("load", function () {
              n.contentWindow.postMessage("init", e, [i.port2]);
            }),
            setTimeout(function () {
              o || ((o = !0), t(new Error("IFrame extension not supported")));
            }, 200));
        }),
        (r.EXTENSION_TIMEOUT_SEC = 30),
        (r.port_ = null),
        (r.waitingForPort_ = []),
        (r.reqCounter_ = 0),
        (r.callbackMap_ = {}),
        (r.getPortSingleton_ = function (t) {
          r.port_
            ? t(null, r.port_)
            : (0 == r.waitingForPort_.length &&
                r.getMessagePort(function (t, e) {
                  t ||
                    ((r.port_ = e),
                    r.port_.addEventListener("message", r.responseHandler_));
                  while (r.waitingForPort_.length)
                    r.waitingForPort_.shift()(t, e);
                }),
              r.waitingForPort_.push(t));
        }),
        (r.responseHandler_ = function (t) {
          var e = t.data,
            n = e["requestId"];
          if (n && r.callbackMap_[n]) {
            var o = r.callbackMap_[n];
            (delete r.callbackMap_[n], o(null, e["responseData"]));
          } else console.error("Unknown or missing requestId in response.");
        }),
        (r.isSupported = function (t) {
          r.getPortSingleton_(function (e, n) {
            t(!e);
          });
        }),
        (r.sign = function (t, e, n) {
          r.getPortSingleton_(function (o, i) {
            if (o) return e(o);
            var u = ++r.reqCounter_;
            r.callbackMap_[u] = e;
            var a = {
              type: r.MessageTypes.U2F_SIGN_REQUEST,
              signRequests: t,
              timeoutSeconds:
                "undefined" !== typeof n ? n : r.EXTENSION_TIMEOUT_SEC,
              requestId: u,
            };
            i.postMessage(a);
          });
        }),
        (r.register = function (t, e, n, o) {
          r.getPortSingleton_(function (i, u) {
            if (i) return n(i);
            var a = ++r.reqCounter_;
            r.callbackMap_[a] = n;
            var f = {
              type: r.MessageTypes.U2F_REGISTER_REQUEST,
              signRequests: e,
              registerRequests: t,
              timeoutSeconds:
                "undefined" !== typeof o ? o : r.EXTENSION_TIMEOUT_SEC,
              requestId: a,
            };
            u.postMessage(f);
          });
        }));
    },
    5456: function (t, e, n) {
      (function (e) {
        var r = n(6431),
          o = function () {},
          i = function (t) {
            return t.setHeader && "function" === typeof t.abort;
          },
          u = function (t) {
            return t.stdio && Array.isArray(t.stdio) && 3 === t.stdio.length;
          },
          a = function (t, n, f) {
            if ("function" === typeof n) return a(t, null, n);
            (n || (n = {}), (f = r(f || o)));
            var c = t._writableState,
              s = t._readableState,
              d = n.readable || (!1 !== n.readable && t.readable),
              l = n.writable || (!1 !== n.writable && t.writable),
              h = !1,
              p = function () {
                t.writable || y();
              },
              y = function () {
                ((l = !1), d || f.call(t));
              },
              g = function () {
                ((d = !1), l || f.call(t));
              },
              b = function (e) {
                f.call(t, e ? new Error("exited with error code: " + e) : null);
              },
              w = function (e) {
                f.call(t, e);
              },
              v = function () {
                e.nextTick(m);
              },
              m = function () {
                if (!h)
                  return (!d || (s && s.ended && !s.destroyed)) &&
                    (!l || (c && c.ended && !c.destroyed))
                    ? void 0
                    : f.call(t, new Error("premature close"));
              },
              _ = function () {
                t.req.on("finish", y);
              };
            return (
              i(t)
                ? (t.on("complete", y),
                  t.on("abort", v),
                  t.req ? _() : t.on("request", _))
                : l && !c && (t.on("end", p), t.on("close", p)),
              u(t) && t.on("exit", b),
              t.on("end", g),
              t.on("finish", y),
              !1 !== n.error && t.on("error", w),
              t.on("close", v),
              function () {
                ((h = !0),
                  t.removeListener("complete", y),
                  t.removeListener("abort", v),
                  t.removeListener("request", _),
                  t.req && t.req.removeListener("finish", y),
                  t.removeListener("end", p),
                  t.removeListener("close", p),
                  t.removeListener("finish", y),
                  t.removeListener("exit", b),
                  t.removeListener("end", g),
                  t.removeListener("error", w),
                  t.removeListener("close", v));
              }
            );
          };
        t.exports = a;
      }).call(this, n(18));
    },
    6386: function (t, e, n) {
      var r = n(8993),
        o = n(8997),
        i = n(3445);
      function u(t, e, n, r) {
        return (
          (e.bytes = n.bytes = 0),
          { type: t, encode: e, decode: n, encodingLength: r }
        );
      }
      function a(t) {
        return i.isBuffer(t) ? t.length : i.byteLength(t);
      }
      ((e.make = u),
        (e.name = function (t) {
          for (var n = Object.keys(e), r = 0; r < n.length; r++)
            if (e[n[r]] === t) return n[r];
          return null;
        }),
        (e.skip = function (t, e, n) {
          switch (t) {
            case 0:
              return (r.decode(e, n), n + r.decode.bytes);
            case 1:
              return n + 8;
            case 2:
              var o = r.decode(e, n);
              return n + r.decode.bytes + o;
            case 3:
            case 4:
              throw new Error("Groups are not supported");
            case 5:
              return n + 4;
          }
          throw new Error("Unknown wire type: " + t);
        }),
        (e.bytes = u(
          2,
          function t(e, n, o) {
            var u = o,
              f = a(e);
            return (
              r.encode(f, n, o),
              (o += r.encode.bytes),
              i.isBuffer(e) ? i.copy(e, n, o) : i.write(n, e, o, f),
              (o += f),
              (t.bytes = o - u),
              n
            );
          },
          function t(e, n) {
            var o = n,
              i = r.decode(e, n);
            n += r.decode.bytes;
            var u = e.subarray(n, n + i);
            return ((n += u.length), (t.bytes = n - o), u);
          },
          function (t) {
            var e = a(t);
            return r.encodingLength(e) + e;
          },
        )),
        (e.string = u(
          2,
          function t(e, n, o) {
            var u = o,
              a = i.byteLength(e);
            return (
              r.encode(a, n, o, "utf-8"),
              (o += r.encode.bytes),
              i.write(n, e, o, a),
              (o += a),
              (t.bytes = o - u),
              n
            );
          },
          function t(e, n) {
            var o = n,
              u = r.decode(e, n);
            n += r.decode.bytes;
            var a = i.toString(e, "utf-8", n, n + u);
            return ((n += u), (t.bytes = n - o), a);
          },
          function (t) {
            var e = i.byteLength(t);
            return r.encodingLength(e) + e;
          },
        )),
        (e.bool = u(
          0,
          function t(e, n, r) {
            return ((n[r] = e ? 1 : 0), (t.bytes = 1), n);
          },
          function t(e, n) {
            var r = e[n] > 0;
            return ((t.bytes = 1), r);
          },
          function () {
            return 1;
          },
        )),
        (e.int32 = u(
          0,
          function t(e, n, o) {
            return (
              r.encode(e < 0 ? e + 4294967296 : e, n, o),
              (t.bytes = r.encode.bytes),
              n
            );
          },
          function t(e, n) {
            var o = r.decode(e, n);
            return (
              (t.bytes = r.decode.bytes),
              o > 2147483647 ? o - 4294967296 : o
            );
          },
          function (t) {
            return r.encodingLength(t < 0 ? t + 4294967296 : t);
          },
        )),
        (e.int64 = u(
          0,
          function t(e, n, o) {
            if (e < 0) {
              var i = o + 9;
              (r.encode(-1 * e, n, o),
                (o += r.encode.bytes - 1),
                (n[o] = 128 | n[o]));
              while (o < i - 1) (o++, (n[o] = 255));
              ((n[i] = 1), (t.bytes = 10));
            } else (r.encode(e, n, o), (t.bytes = r.encode.bytes));
            return n;
          },
          function t(e, n) {
            var o = r.decode(e, n);
            if (o >= Math.pow(2, 63)) {
              var u = 9;
              while (255 === e[n + u - 1]) u--;
              u = u || 9;
              var a = i.allocUnsafe(u);
              (i.copy(e, a, 0, n, n + u),
                (a[u - 1] = 127 & a[u - 1]),
                (o = -1 * r.decode(a, 0)),
                (t.bytes = 10));
            } else t.bytes = r.decode.bytes;
            return o;
          },
          function (t) {
            return t < 0 ? 10 : r.encodingLength(t);
          },
        )),
        (e.sint32 = e.sint64 = u(0, o.encode, o.decode, o.encodingLength)),
        (e.uint32 =
          e.uint64 =
          e.enum =
          e.varint =
            u(0, r.encode, r.decode, r.encodingLength)),
        (e.fixed64 = e.sfixed64 =
          u(
            1,
            function t(e, n, r) {
              return (i.copy(e, n, r), (t.bytes = 8), n);
            },
            function t(e, n) {
              var r = e.subarray(n, n + 8);
              return ((t.bytes = 8), r);
            },
            function () {
              return 8;
            },
          )),
        (e.double = u(
          1,
          function t(e, n, r) {
            return (i.writeDoubleLE(n, e, r), (t.bytes = 8), n);
          },
          function t(e, n) {
            var r = i.readDoubleLE(e, n);
            return ((t.bytes = 8), r);
          },
          function () {
            return 8;
          },
        )),
        (e.fixed32 = u(
          5,
          function t(e, n, r) {
            return (i.writeUInt32LE(n, e, r), (t.bytes = 4), n);
          },
          function t(e, n) {
            var r = i.readUInt32LE(e, n);
            return ((t.bytes = 4), r);
          },
          function () {
            return 4;
          },
        )),
        (e.sfixed32 = u(
          5,
          function t(e, n, r) {
            return (i.writeInt32LE(n, e, r), (t.bytes = 4), n);
          },
          function t(e, n) {
            var r = i.readInt32LE(e, n);
            return ((t.bytes = 4), r);
          },
          function () {
            return 4;
          },
        )),
        (e.float = u(
          5,
          function t(e, n, r) {
            return (i.writeFloatLE(n, e, r), (t.bytes = 4), n);
          },
          function t(e, n) {
            var r = i.readFloatLE(e, n);
            return ((t.bytes = 4), r);
          },
          function () {
            return 4;
          },
        )));
    },
    6430: function (t, e, n) {
      (function (e) {
        var r = n(131).Transform,
          o = n(799).inherits,
          i = n(839);
        function u(t) {
          (r.call(this, t), (this._destroyed = !1));
        }
        function a(t, e, n) {
          n(null, t);
        }
        function f(t) {
          return function (e, n, r) {
            return (
              "function" == typeof e && ((r = n), (n = e), (e = {})),
              "function" != typeof n && (n = a),
              "function" != typeof r && (r = null),
              t(e, n, r)
            );
          };
        }
        (o(u, r),
          (u.prototype.destroy = function (t) {
            if (!this._destroyed) {
              this._destroyed = !0;
              var n = this;
              e.nextTick(function () {
                (t && n.emit("error", t), n.emit("close"));
              });
            }
          }),
          (t.exports = f(function (t, e, n) {
            var r = new u(t);
            return ((r._transform = e), n && (r._flush = n), r);
          })),
          (t.exports.ctor = f(function (t, e, n) {
            function r(e) {
              if (!(this instanceof r)) return new r(e);
              ((this.options = i(t, e)), u.call(this, this.options));
            }
            return (
              o(r, u),
              (r.prototype._transform = e),
              n && (r.prototype._flush = n),
              r
            );
          })),
          (t.exports.obj = f(function (t, e, n) {
            var r = new u(i({ objectMode: !0, highWaterMark: 16 }, t));
            return ((r._transform = e), n && (r._flush = n), r);
          })));
      }).call(this, n(18));
    },
    6431: function (t, e, n) {
      var r = n(9194);
      function o(t) {
        var e = function () {
          return e.called
            ? e.value
            : ((e.called = !0), (e.value = t.apply(this, arguments)));
        };
        return ((e.called = !1), e);
      }
      function i(t) {
        var e = function () {
            if (e.called) throw new Error(e.onceError);
            return ((e.called = !0), (e.value = t.apply(this, arguments)));
          },
          n = t.name || "Function wrapped with `once`";
        return (
          (e.onceError = n + " shouldn't be called more than once"),
          (e.called = !1),
          e
        );
      }
      ((t.exports = r(o)),
        (t.exports.strict = r(i)),
        (o.proto = o(function () {
          (Object.defineProperty(Function.prototype, "once", {
            value: function () {
              return o(this);
            },
            configurable: !0,
          }),
            Object.defineProperty(Function.prototype, "onceStrict", {
              value: function () {
                return i(this);
              },
              configurable: !0,
            }));
        })));
    },
    6438: function (t, e) {
      function n(t) {
        var e = t._readableState;
        return e
          ? e.objectMode || "number" === typeof t._duplexState
            ? t.read()
            : t.read(r(e))
          : null;
      }
      function r(t) {
        if (t.buffer.length) {
          var e = t.bufferIndex || 0;
          if (t.buffer.head) return t.buffer.head.data.length;
          if (t.buffer.length - e > 0 && t.buffer[e]) return t.buffer[e].length;
        }
        return t.length;
      }
      t.exports = n;
    },
    8993: function (t, e, n) {
      t.exports = { encode: n(8994), decode: n(8995), encodingLength: n(8996) };
    },
    8994: function (t, e) {
      t.exports = u;
      var n = 128,
        r = 127,
        o = ~r,
        i = Math.pow(2, 31);
      function u(t, e, r) {
        ((e = e || []), (r = r || 0));
        var a = r;
        while (t >= i) ((e[r++] = (255 & t) | n), (t /= 128));
        while (t & o) ((e[r++] = (255 & t) | n), (t >>>= 7));
        return ((e[r] = 0 | t), (u.bytes = r - a + 1), e);
      }
    },
    8995: function (t, e) {
      t.exports = o;
      var n = 128,
        r = 127;
      function o(t, e) {
        var i,
          u = 0,
          a = ((e = e || 0), 0),
          f = e,
          c = t.length;
        do {
          if (f >= c)
            throw ((o.bytes = 0), new RangeError("Could not decode varint"));
          ((i = t[f++]),
            (u += a < 28 ? (i & r) << a : (i & r) * Math.pow(2, a)),
            (a += 7));
        } while (i >= n);
        return ((o.bytes = f - e), u);
      }
    },
    8996: function (t, e) {
      var n = Math.pow(2, 7),
        r = Math.pow(2, 14),
        o = Math.pow(2, 21),
        i = Math.pow(2, 28),
        u = Math.pow(2, 35),
        a = Math.pow(2, 42),
        f = Math.pow(2, 49),
        c = Math.pow(2, 56),
        s = Math.pow(2, 63);
      t.exports = function (t) {
        return t < n
          ? 1
          : t < r
            ? 2
            : t < o
              ? 3
              : t < i
                ? 4
                : t < u
                  ? 5
                  : t < a
                    ? 6
                    : t < f
                      ? 7
                      : t < c
                        ? 8
                        : t < s
                          ? 9
                          : 10;
      };
    },
    8997: function (t, e, n) {
      var r = n(2991);
      ((e.encode = function t(e, n, o) {
        e = e >= 0 ? 2 * e : -2 * e - 1;
        var i = r.encode(e, n, o);
        return ((t.bytes = r.encode.bytes), i);
      }),
        (e.decode = function t(e, n) {
          var o = r.decode(e, n);
          return ((t.bytes = r.decode.bytes), 1 & o ? (o + 1) / -2 : o / 2);
        }),
        (e.encodingLength = function (t) {
          return r.encodingLength(t >= 0 ? 2 * t : -2 * t - 1);
        }));
    },
    9013: function (t, e, n) {
      (function (e, r) {
        t.exports = r(n(15));
      })(0, function (t) {
        return t.enc.Hex;
      });
    },
    9190: function (t, e, n) {
      var r = n(6430),
        o = n(9191),
        i = n(851).EOL,
        u = n(4979);
      function a(t) {
        function e(e) {
          try {
            if (e) return JSON.parse(e);
          } catch (n) {
            t.strict &&
              this.emit(
                "error",
                new Error("Could not parse row " + e.slice(0, 50) + "..."),
              );
          }
        }
        return ((t = t || {}), (t.strict = !1 !== t.strict), o(e, t));
      }
      function f(t) {
        return r.obj(t, function (t, e, n) {
          n(null, u(t) + i);
        });
      }
      ((t.exports = a),
        (t.exports.serialize = t.exports.stringify = f),
        (t.exports.parse = a));
    },
    9191: function (t, e, n) {
      "use strict";
      var r = n(6430),
        o = n(82).StringDecoder;
      function i(t, e, n) {
        if (
          ((this._last += this._decoder.write(t)),
          this._last.length > this.maxLength)
        )
          return n(new Error("maximum buffer reached"));
        var r = this._last.split(this.matcher);
        this._last = r.pop();
        for (var o = 0; o < r.length; o++) a(this, this.mapper(r[o]));
        n();
      }
      function u(t) {
        ((this._last += this._decoder.end()),
          this._last && a(this, this.mapper(this._last)),
          t());
      }
      function a(t, e) {
        void 0 !== e && t.push(e);
      }
      function f(t) {
        return t;
      }
      function c(t, e, n) {
        switch (
          ((t = t || /\r?\n/), (e = e || f), (n = n || {}), arguments.length)
        ) {
          case 1:
            "function" === typeof t
              ? ((e = t), (t = /\r?\n/))
              : "object" !== typeof t ||
                t instanceof RegExp ||
                ((n = t), (t = /\r?\n/));
            break;
          case 2:
            "function" === typeof t
              ? ((n = e), (e = t), (t = /\r?\n/))
              : "object" === typeof e && ((n = e), (e = f));
        }
        var a = r(n, i, u);
        return (
          (a._readableState.objectMode = !0),
          a._readableState.highWaterMark &&
            !n.highWaterMark &&
            (a._readableState.highWaterMark = 16),
          (a._last = ""),
          (a._decoder = new o("utf8")),
          (a.matcher = t),
          (a.mapper = e),
          (a.maxLength = n.maxLength),
          a
        );
      }
      t.exports = c;
    },
    9193: function (t, e, n) {
      (function (e) {
        var r,
          o = n(6431),
          i = n(5456);
        try {
          r = n(9195);
        } catch (y) {}
        var u = function () {},
          a = /^v?\.0/.test(e.version),
          f = function (t) {
            return "function" === typeof t;
          },
          c = function (t) {
            return (
              !!a &&
              !!r &&
              (t instanceof (r.ReadStream || u) ||
                t instanceof (r.WriteStream || u)) &&
              f(t.close)
            );
          },
          s = function (t) {
            return t.setHeader && f(t.abort);
          },
          d = function (t, e, n, r) {
            r = o(r);
            var a = !1;
            (t.on("close", function () {
              a = !0;
            }),
              i(t, { readable: e, writable: n }, function (t) {
                if (t) return r(t);
                ((a = !0), r());
              }));
            var d = !1;
            return function (e) {
              if (!a && !d)
                return (
                  (d = !0),
                  c(t)
                    ? t.close(u)
                    : s(t)
                      ? t.abort()
                      : f(t.destroy)
                        ? t.destroy()
                        : void r(e || new Error("stream was destroyed"))
                );
            };
          },
          l = function (t) {
            t();
          },
          h = function (t, e) {
            return t.pipe(e);
          },
          p = function () {
            var t,
              e = Array.prototype.slice.call(arguments),
              n = (f(e[e.length - 1] || u) && e.pop()) || u;
            if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
              throw new Error("pump requires two streams per minimum");
            var r = e.map(function (o, i) {
              var u = i < e.length - 1,
                a = i > 0;
              return d(o, u, a, function (e) {
                (t || (t = e), e && r.forEach(l), u || (r.forEach(l), n(t)));
              });
            });
            return e.reduce(h);
          };
        t.exports = p;
      }).call(this, n(18));
    },
    9194: function (t, e) {
      function n(t, e) {
        if (t && e) return n(t)(e);
        if ("function" !== typeof t)
          throw new TypeError("need wrapper function");
        return (
          Object.keys(t).forEach(function (e) {
            r[e] = t[e];
          }),
          r
        );
        function r() {
          for (var e = new Array(arguments.length), n = 0; n < e.length; n++)
            e[n] = arguments[n];
          var r = t.apply(this, e),
            o = e[e.length - 1];
          return (
            "function" === typeof r &&
              r !== o &&
              Object.keys(o).forEach(function (t) {
                r[t] = o[t];
              }),
            r
          );
        }
      }
      t.exports = n;
    },
    9205: function (t, e, n) {
      "use strict";
      (function (e, r) {
        var o = n(131).Transform,
          i = n(9206),
          u = n(9207),
          a = n(46).Buffer;
        function f(t, e, n) {
          var r = new o({ objectMode: t.objectMode });
          return ((r._write = e), (r._flush = n), r);
        }
        function c(t, n, o) {
          var c,
            s,
            d = "browser" === e.title,
            l = !!r.WebSocket,
            h = d ? m : v;
          (n &&
            !Array.isArray(n) &&
            "object" === typeof n &&
            ((o = n),
            (n = null),
            ("string" === typeof o.protocol || Array.isArray(o.protocol)) &&
              (n = o.protocol)),
            o || (o = {}),
            void 0 === o.objectMode &&
              (o.objectMode = !(!0 === o.binary || void 0 === o.binary)));
          var p = f(o, h, _);
          o.objectMode || (p._writev = S);
          var y = o.browserBufferSize || 524288,
            g = o.browserBufferTimeout || 1e3;
          "object" === typeof t
            ? (s = t)
            : ((s = l && d ? new u(t, n) : new u(t, n, o)),
              (s.binaryType = "arraybuffer"));
          var b = "undefined" === typeof s.addEventListener;
          (s.readyState === s.OPEN
            ? (c = p)
            : ((c = c = i(void 0, void 0, o)),
              o.objectMode || (c._writev = S),
              b ? s.addEventListener("open", E) : (s.onopen = E)),
            (c.socket = s),
            b
              ? (s.addEventListener("close", F),
                s.addEventListener("error", L),
                s.addEventListener("message", x))
              : ((s.onclose = F), (s.onerror = L), (s.onmessage = x)),
            p.on("close", D));
          var w = !o.objectMode;
          function v(t, e, n) {
            s.readyState === s.OPEN
              ? (w && "string" === typeof t && (t = a.from(t, "utf8")),
                s.send(t, n))
              : n();
          }
          function m(t, e, n) {
            if (s.bufferedAmount > y) setTimeout(m, g, t, e, n);
            else {
              w && "string" === typeof t && (t = a.from(t, "utf8"));
              try {
                s.send(t);
              } catch (r) {
                return n(r);
              }
              n();
            }
          }
          function _(t) {
            (s.close(), t());
          }
          function E() {
            (c.setReadable(p), c.setWritable(p), c.emit("connect"));
          }
          function F() {
            (c.end(), c.destroy());
          }
          function L(t) {
            c.destroy(t);
          }
          function x(t) {
            var e = t.data;
            ((e = e instanceof ArrayBuffer ? a.from(e) : a.from(e, "utf8")),
              p.push(e));
          }
          function D() {
            s.close();
          }
          function S(t, e) {
            for (var n = new Array(t.length), r = 0; r < t.length; r++)
              "string" === typeof t[r].chunk
                ? (n[r] = a.from(t[r], "utf8"))
                : (n[r] = t[r].chunk);
            this._write(a.concat(n), "binary", e);
          }
          return c;
        }
        t.exports = c;
      }).call(this, n(18), n(13));
    },
    9206: function (t, e, n) {
      (function (e, r) {
        var o = n(131),
          i = n(5456),
          u = n(16),
          a = n(6438),
          f = e.from && e.from !== Uint8Array.from ? e.from([0]) : new e([0]),
          c = function (t, e) {
            t._corked ? t.once("uncork", e) : e();
          },
          s = function (t, e) {
            t._autoDestroy && t.destroy(e);
          },
          d = function (t, e) {
            return function (n) {
              n
                ? s(t, "premature close" === n.message ? null : n)
                : e && !t._ended && t.end();
            };
          },
          l = function (t, e) {
            return t
              ? t._writableState && t._writableState.finished
                ? e()
                : t._writableState
                  ? t.end(e)
                  : (t.end(), void e())
              : e();
          },
          h = function (t) {
            return new o.Readable({ objectMode: !0, highWaterMark: 16 }).wrap(
              t,
            );
          },
          p = function (t, e, n) {
            if (!(this instanceof p)) return new p(t, e, n);
            (o.Duplex.call(this, n),
              (this._writable = null),
              (this._readable = null),
              (this._readable2 = null),
              (this._autoDestroy = !n || !1 !== n.autoDestroy),
              (this._forwardDestroy = !n || !1 !== n.destroy),
              (this._forwardEnd = !n || !1 !== n.end),
              (this._corked = 1),
              (this._ondrain = null),
              (this._drained = !1),
              (this._forwarding = !1),
              (this._unwrite = null),
              (this._unread = null),
              (this._ended = !1),
              (this.destroyed = !1),
              t && this.setWritable(t),
              e && this.setReadable(e));
          };
        (u(p, o.Duplex),
          (p.obj = function (t, e, n) {
            return (
              n || (n = {}),
              (n.objectMode = !0),
              (n.highWaterMark = 16),
              new p(t, e, n)
            );
          }),
          (p.prototype.cork = function () {
            1 === ++this._corked && this.emit("cork");
          }),
          (p.prototype.uncork = function () {
            this._corked && 0 === --this._corked && this.emit("uncork");
          }),
          (p.prototype.setWritable = function (t) {
            if ((this._unwrite && this._unwrite(), this.destroyed))
              t && t.destroy && t.destroy();
            else if (null !== t && !1 !== t) {
              var e = this,
                n = i(
                  t,
                  { writable: !0, readable: !1 },
                  d(this, this._forwardEnd),
                ),
                o = function () {
                  var t = e._ondrain;
                  ((e._ondrain = null), t && t());
                },
                u = function () {
                  (e._writable.removeListener("drain", o), n());
                };
              (this._unwrite && r.nextTick(o),
                (this._writable = t),
                this._writable.on("drain", o),
                (this._unwrite = u),
                this.uncork());
            } else this.end();
          }),
          (p.prototype.setReadable = function (t) {
            if ((this._unread && this._unread(), this.destroyed))
              t && t.destroy && t.destroy();
            else {
              if (null === t || !1 === t)
                return (this.push(null), void this.resume());
              var e = this,
                n = i(t, { writable: !1, readable: !0 }, d(this)),
                r = function () {
                  e._forward();
                },
                o = function () {
                  e.push(null);
                },
                u = function () {
                  (e._readable2.removeListener("readable", r),
                    e._readable2.removeListener("end", o),
                    n());
                };
              ((this._drained = !0),
                (this._readable = t),
                (this._readable2 = t._readableState ? t : h(t)),
                this._readable2.on("readable", r),
                this._readable2.on("end", o),
                (this._unread = u),
                this._forward());
            }
          }),
          (p.prototype._read = function () {
            ((this._drained = !0), this._forward());
          }),
          (p.prototype._forward = function () {
            if (!this._forwarding && this._readable2 && this._drained) {
              var t;
              this._forwarding = !0;
              while (this._drained && null !== (t = a(this._readable2)))
                this.destroyed || (this._drained = this.push(t));
              this._forwarding = !1;
            }
          }),
          (p.prototype.destroy = function (t) {
            if (!this.destroyed) {
              this.destroyed = !0;
              var e = this;
              r.nextTick(function () {
                e._destroy(t);
              });
            }
          }),
          (p.prototype._destroy = function (t) {
            if (t) {
              var e = this._ondrain;
              ((this._ondrain = null), e ? e(t) : this.emit("error", t));
            }
            (this._forwardDestroy &&
              (this._readable &&
                this._readable.destroy &&
                this._readable.destroy(),
              this._writable &&
                this._writable.destroy &&
                this._writable.destroy()),
              this.emit("close"));
          }),
          (p.prototype._write = function (t, e, n) {
            return this.destroyed
              ? n()
              : this._corked
                ? c(this, this._write.bind(this, t, e, n))
                : t === f
                  ? this._finish(n)
                  : this._writable
                    ? void (!1 === this._writable.write(t)
                        ? (this._ondrain = n)
                        : n())
                    : n();
          }),
          (p.prototype._finish = function (t) {
            var e = this;
            (this.emit("preend"),
              c(this, function () {
                l(e._forwardEnd && e._writable, function () {
                  (!1 === e._writableState.prefinished &&
                    (e._writableState.prefinished = !0),
                    e.emit("prefinish"),
                    c(e, t));
                });
              }));
          }),
          (p.prototype.end = function (t, e, n) {
            return "function" === typeof t
              ? this.end(null, null, t)
              : "function" === typeof e
                ? this.end(t, null, e)
                : ((this._ended = !0),
                  t && this.write(t),
                  this._writableState.ending || this.write(f),
                  o.Writable.prototype.end.call(this, n));
          }),
          (t.exports = p));
      }).call(this, n(2).Buffer, n(18));
    },
    9207: function (t, e) {
      var n = null;
      ("undefined" !== typeof WebSocket
        ? (n = WebSocket)
        : "undefined" !== typeof MozWebSocket
          ? (n = MozWebSocket)
          : "undefined" !== typeof window &&
            (n = window.WebSocket || window.MozWebSocket),
        (t.exports = n));
    },
  },
]);
