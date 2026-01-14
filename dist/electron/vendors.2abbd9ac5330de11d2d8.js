(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [112],
  {
    1654: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "SupportedAlgorithm", {
          enumerable: !0,
          get: function () {
            return n.SupportedAlgorithm;
          },
        }),
        Object.defineProperty(e, "computeHmac", {
          enumerable: !0,
          get: function () {
            return i.computeHmac;
          },
        }),
        Object.defineProperty(e, "ripemd160", {
          enumerable: !0,
          get: function () {
            return i.ripemd160;
          },
        }),
        Object.defineProperty(e, "sha256", {
          enumerable: !0,
          get: function () {
            return i.sha256;
          },
        }),
        Object.defineProperty(e, "sha512", {
          enumerable: !0,
          get: function () {
            return i.sha512;
          },
        }));
      var i = r(1655),
        n = r(576);
    },
    1655: function (t, e, r) {
      "use strict";
      var i = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.computeHmac = c),
        (e.ripemd160 = a),
        (e.sha256 = l),
        (e.sha512 = d));
      var n = i(r(43)),
        o = r(1656),
        s = r(576),
        f = r(575),
        h = r(1659);
      const u = new f.Logger(h.version);
      function a(t) {
        return (
          "0x" +
          n.default
            .ripemd160()
            .update((0, o.arrayify)(t))
            .digest("hex")
        );
      }
      function l(t) {
        return (
          "0x" +
          n.default
            .sha256()
            .update((0, o.arrayify)(t))
            .digest("hex")
        );
      }
      function d(t) {
        return (
          "0x" +
          n.default
            .sha512()
            .update((0, o.arrayify)(t))
            .digest("hex")
        );
      }
      function c(t, e, r) {
        return (
          s.SupportedAlgorithm[t] ||
            u.throwError(
              "unsupported algorithm " + t,
              f.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "hmac", algorithm: t },
            ),
          "0x" +
            n.default
              .hmac(n.default[t], (0, o.arrayify)(e))
              .update((0, o.arrayify)(r))
              .digest("hex")
        );
      }
    },
    1656: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.arrayify = l),
        (e.concat = d),
        (e.hexConcat = w),
        (e.hexDataLength = y),
        (e.hexDataSlice = b),
        (e.hexStripZeros = E),
        (e.hexValue = M),
        (e.hexZeroPad = A),
        (e.hexlify = v),
        (e.isBytes = a),
        (e.isBytesLike = h),
        (e.isHexString = m),
        (e.joinSignature = S),
        (e.splitSignature = _),
        (e.stripZeros = c),
        (e.zeroPad = p));
      var i = r(575),
        n = r(1658);
      const o = new i.Logger(n.version);
      function s(t) {
        return !!t.toHexString;
      }
      function f(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const e = Array.prototype.slice.call(arguments);
              return f(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        );
      }
      function h(t) {
        return (m(t) && !(t.length % 2)) || a(t);
      }
      function u(t) {
        return "number" === typeof t && t == t && t % 1 === 0;
      }
      function a(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" === typeof t) return !1;
        if (!u(t.length) || t.length < 0) return !1;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (!u(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function l(t, e) {
        if ((e || (e = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid arrayify value");
          const e = [];
          while (t) (e.unshift(255 & t), (t = parseInt(String(t / 256))));
          return (0 === e.length && e.push(0), f(new Uint8Array(e)));
        }
        if (
          (e.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t) && (t = t.toHexString()),
          m(t))
        ) {
          let r = t.substring(2);
          r.length % 2 &&
            ("left" === e.hexPad
              ? (r = "0" + r)
              : "right" === e.hexPad
                ? (r += "0")
                : o.throwArgumentError("hex data is odd-length", "value", t));
          const i = [];
          for (let t = 0; t < r.length; t += 2)
            i.push(parseInt(r.substring(t, t + 2), 16));
          return f(new Uint8Array(i));
        }
        return a(t)
          ? f(new Uint8Array(t))
          : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function d(t) {
        const e = t.map((t) => l(t)),
          r = e.reduce((t, e) => t + e.length, 0),
          i = new Uint8Array(r);
        return (e.reduce((t, e) => (i.set(e, t), t + e.length), 0), f(i));
      }
      function c(t) {
        let e = l(t);
        if (0 === e.length) return e;
        let r = 0;
        while (r < e.length && 0 === e[r]) r++;
        return (r && (e = e.slice(r)), e);
      }
      function p(t, e) {
        ((t = l(t)),
          t.length > e &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const r = new Uint8Array(e);
        return (r.set(t, e - t.length), f(r));
      }
      function m(t, e) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || t.length === 2 + 2 * e)
        );
      }
      const g = "0123456789abcdef";
      function v(t, e) {
        if ((e || (e = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid hexlify value");
          let e = "";
          while (t) ((e = g[15 & t] + e), (t = Math.floor(t / 16)));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" === typeof t)
          return ((t = t.toString(16)), t.length % 2 ? "0x0" + t : "0x" + t);
        if (
          (e.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t))
        )
          return t.toHexString();
        if (m(t))
          return (
            t.length % 2 &&
              ("left" === e.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === e.hexPad
                  ? (t += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (a(t)) {
          let e = "0x";
          for (let r = 0; r < t.length; r++) {
            let i = t[r];
            e += g[(240 & i) >> 4] + g[15 & i];
          }
          return e;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function y(t) {
        if ("string" !== typeof t) t = v(t);
        else if (!m(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function b(t, e, r) {
        return (
          "string" !== typeof t
            ? (t = v(t))
            : (!m(t) || t.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", t),
          (e = 2 + 2 * e),
          null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
        );
      }
      function w(t) {
        let e = "0x";
        return (
          t.forEach((t) => {
            e += v(t).substring(2);
          }),
          e
        );
      }
      function M(t) {
        const e = E(v(t, { hexPad: "left" }));
        return "0x" === e ? "0x0" : e;
      }
      function E(t) {
        ("string" !== typeof t && (t = v(t)),
          m(t) || o.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2)));
        let e = 0;
        while (e < t.length && "0" === t[e]) e++;
        return "0x" + t.substring(e);
      }
      function A(t, e) {
        ("string" !== typeof t
          ? (t = v(t))
          : m(t) || o.throwArgumentError("invalid hex string", "value", t),
          t.length > 2 * e + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (t.length < 2 * e + 2) t = "0x0" + t.substring(2);
        return t;
      }
      function _(t) {
        const e = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (h(t)) {
          let r = l(t);
          (64 === r.length
            ? ((e.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (e.r = v(r.slice(0, 32))),
              (e.s = v(r.slice(32, 64))))
            : 65 === r.length
              ? ((e.r = v(r.slice(0, 32))),
                (e.s = v(r.slice(32, 64))),
                (e.v = r[64]))
              : o.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  t,
                ),
            e.v < 27 &&
              (0 === e.v || 1 === e.v
                ? (e.v += 27)
                : o.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t,
                  )),
            (e.recoveryParam = 1 - (e.v % 2)),
            e.recoveryParam && (r[32] |= 128),
            (e._vs = v(r.slice(32, 64))));
        } else {
          if (
            ((e.r = t.r),
            (e.s = t.s),
            (e.v = t.v),
            (e.recoveryParam = t.recoveryParam),
            (e._vs = t._vs),
            null != e._vs)
          ) {
            const r = p(l(e._vs), 32);
            e._vs = v(r);
            const i = r[0] >= 128 ? 1 : 0;
            (null == e.recoveryParam
              ? (e.recoveryParam = i)
              : e.recoveryParam !== i &&
                o.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t,
                ),
              (r[0] &= 127));
            const n = v(r);
            null == e.s
              ? (e.s = n)
              : e.s !== n &&
                o.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t,
                );
          }
          if (null == e.recoveryParam)
            null == e.v
              ? o.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t,
                )
              : 0 === e.v || 1 === e.v
                ? (e.recoveryParam = e.v)
                : (e.recoveryParam = 1 - (e.v % 2));
          else if (null == e.v) e.v = 27 + e.recoveryParam;
          else {
            const r = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2);
            e.recoveryParam !== r &&
              o.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t,
              );
          }
          (null != e.r && m(e.r)
            ? (e.r = A(e.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t,
              ),
            null != e.s && m(e.s)
              ? (e.s = A(e.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t,
                ));
          const r = l(e.s);
          (r[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", t),
            e.recoveryParam && (r[0] |= 128));
          const i = v(r);
          (e._vs &&
            (m(e._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", t),
            (e._vs = A(e._vs, 32))),
            null == e._vs
              ? (e._vs = i)
              : e._vs !== i &&
                o.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t,
                ));
        }
        return (
          (e.yParityAndS = e._vs),
          (e.compact = e.r + e.yParityAndS.substring(2)),
          e
        );
      }
      function S(t) {
        return (
          (t = _(t)),
          v(d([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    1657: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "logger/5.8.0";
    },
    1658: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "bytes/5.8.0";
    },
    1659: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "sha2/5.7.0";
    },
    1696: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SigningKey = void 0),
        (e.computePublicKey = d),
        (e.recoverPublicKey = l));
      var i = r(1697),
        n = r(1700),
        o = r(1703),
        s = r(289),
        f = r(1705);
      const h = new s.Logger(f.version);
      let u = null;
      function a() {
        return (u || (u = new i.EC("secp256k1")), u);
      }
      class SigningKey {
        constructor(t) {
          ((0, o.defineReadOnly)(this, "curve", "secp256k1"),
            (0, o.defineReadOnly)(this, "privateKey", (0, n.hexlify)(t)),
            32 !== (0, n.hexDataLength)(this.privateKey) &&
              h.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]",
              ));
          const e = a().keyFromPrivate((0, n.arrayify)(this.privateKey));
          ((0, o.defineReadOnly)(
            this,
            "publicKey",
            "0x" + e.getPublic(!1, "hex"),
          ),
            (0, o.defineReadOnly)(
              this,
              "compressedPublicKey",
              "0x" + e.getPublic(!0, "hex"),
            ),
            (0, o.defineReadOnly)(this, "_isSigningKey", !0));
        }
        _addPoint(t) {
          const e = a().keyFromPublic((0, n.arrayify)(this.publicKey)),
            r = a().keyFromPublic((0, n.arrayify)(t));
          return "0x" + e.pub.add(r.pub).encodeCompressed("hex");
        }
        signDigest(t) {
          const e = a().keyFromPrivate((0, n.arrayify)(this.privateKey)),
            r = (0, n.arrayify)(t);
          32 !== r.length &&
            h.throwArgumentError("bad digest length", "digest", t);
          const i = e.sign(r, { canonical: !0 });
          return (0, n.splitSignature)({
            recoveryParam: i.recoveryParam,
            r: (0, n.hexZeroPad)("0x" + i.r.toString(16), 32),
            s: (0, n.hexZeroPad)("0x" + i.s.toString(16), 32),
          });
        }
        computeSharedSecret(t) {
          const e = a().keyFromPrivate((0, n.arrayify)(this.privateKey)),
            r = a().keyFromPublic((0, n.arrayify)(d(t)));
          return (0, n.hexZeroPad)(
            "0x" + e.derive(r.getPublic()).toString(16),
            32,
          );
        }
        static isSigningKey(t) {
          return !(!t || !t._isSigningKey);
        }
      }
      function l(t, e) {
        const r = (0, n.splitSignature)(e),
          i = { r: (0, n.arrayify)(r.r), s: (0, n.arrayify)(r.s) };
        return (
          "0x" +
          a()
            .recoverPubKey((0, n.arrayify)(t), i, r.recoveryParam)
            .encode("hex", !1)
        );
      }
      function d(t, e) {
        const r = (0, n.arrayify)(t);
        if (32 === r.length) {
          const t = new SigningKey(r);
          return e
            ? "0x" + a().keyFromPrivate(r).getPublic(!0, "hex")
            : t.publicKey;
        }
        return 33 === r.length
          ? e
            ? (0, n.hexlify)(r)
            : "0x" + a().keyFromPublic(r).getPublic(!1, "hex")
          : 65 === r.length
            ? e
              ? "0x" + a().keyFromPublic(r).getPublic(!0, "hex")
              : (0, n.hexlify)(r)
            : h.throwArgumentError(
                "invalid public or private key",
                "key",
                "[REDACTED]",
              );
      }
      e.SigningKey = SigningKey;
    },
    1697: function (t, e, r) {
      "use strict";
      (function (t) {
        var i = r(0);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.EC = void 0));
        var n = i(r(1698)),
          o = i(r(43));
        "undefined" !== typeof globalThis
          ? globalThis
          : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof t || ("undefined" !== typeof self && self);
        function s(t, e, r) {
          return (
            (r = {
              path: e,
              exports: {},
              require: function (t, e) {
                return f(t, void 0 === e || null === e ? r.path : e);
              },
            }),
            t(r, r.exports),
            r.exports
          );
        }
        function f() {
          throw new Error(
            "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
          );
        }
        var h = u;
        function u(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        u.equal = function (t, e, r) {
          if (t != e)
            throw new Error(r || "Assertion failed: " + t + " != " + e);
        };
        var a = s(function (t, e) {
            var r = e;
            function i(t, e) {
              if (Array.isArray(t)) return t.slice();
              if (!t) return [];
              var r = [];
              if ("string" !== typeof t) {
                for (var i = 0; i < t.length; i++) r[i] = 0 | t[i];
                return r;
              }
              if ("hex" === e) {
                ((t = t.replace(/[^a-z0-9]+/gi, "")),
                  t.length % 2 !== 0 && (t = "0" + t));
                for (i = 0; i < t.length; i += 2)
                  r.push(parseInt(t[i] + t[i + 1], 16));
              } else
                for (i = 0; i < t.length; i++) {
                  var n = t.charCodeAt(i),
                    o = n >> 8,
                    s = 255 & n;
                  o ? r.push(o, s) : r.push(s);
                }
              return r;
            }
            function n(t) {
              return 1 === t.length ? "0" + t : t;
            }
            function o(t) {
              for (var e = "", r = 0; r < t.length; r++)
                e += n(t[r].toString(16));
              return e;
            }
            ((r.toArray = i),
              (r.zero2 = n),
              (r.toHex = o),
              (r.encode = function (t, e) {
                return "hex" === e ? o(t) : t;
              }));
          }),
          l = s(function (t, e) {
            var r = e;
            function i(t, e, r) {
              var i = new Array(Math.max(t.bitLength(), r) + 1);
              i.fill(0);
              for (
                var n = 1 << (e + 1), o = t.clone(), s = 0;
                s < i.length;
                s++
              ) {
                var f,
                  h = o.andln(n - 1);
                (o.isOdd()
                  ? ((f = h > (n >> 1) - 1 ? (n >> 1) - h : h), o.isubn(f))
                  : (f = 0),
                  (i[s] = f),
                  o.iushrn(1));
              }
              return i;
            }
            function o(t, e) {
              var r = [[], []];
              ((t = t.clone()), (e = e.clone()));
              var i,
                n = 0,
                o = 0;
              while (t.cmpn(-n) > 0 || e.cmpn(-o) > 0) {
                var s,
                  f,
                  h = (t.andln(3) + n) & 3,
                  u = (e.andln(3) + o) & 3;
                (3 === h && (h = -1),
                  3 === u && (u = -1),
                  0 === (1 & h)
                    ? (s = 0)
                    : ((i = (t.andln(7) + n) & 7),
                      (s = (3 !== i && 5 !== i) || 2 !== u ? h : -h)),
                  r[0].push(s),
                  0 === (1 & u)
                    ? (f = 0)
                    : ((i = (e.andln(7) + o) & 7),
                      (f = (3 !== i && 5 !== i) || 2 !== h ? u : -u)),
                  r[1].push(f),
                  2 * n === s + 1 && (n = 1 - n),
                  2 * o === f + 1 && (o = 1 - o),
                  t.iushrn(1),
                  e.iushrn(1));
              }
              return r;
            }
            function s(t, e, r) {
              var i = "_" + e;
              t.prototype[e] = function () {
                return void 0 !== this[i] ? this[i] : (this[i] = r.call(this));
              };
            }
            function f(t) {
              return "string" === typeof t ? r.toArray(t, "hex") : t;
            }
            function u(t) {
              return new n.default(t, "hex", "le");
            }
            ((r.assert = h),
              (r.toArray = a.toArray),
              (r.zero2 = a.zero2),
              (r.toHex = a.toHex),
              (r.encode = a.encode),
              (r.getNAF = i),
              (r.getJSF = o),
              (r.cachedProperty = s),
              (r.parseBytes = f),
              (r.intFromLE = u));
          }),
          d = l.getNAF,
          c = l.getJSF,
          p = l.assert;
        function m(t, e) {
          ((this.type = t),
            (this.p = new n.default(e.p, 16)),
            (this.red = e.prime
              ? n.default.red(e.prime)
              : n.default.mont(this.p)),
            (this.zero = new n.default(0).toRed(this.red)),
            (this.one = new n.default(1).toRed(this.red)),
            (this.two = new n.default(2).toRed(this.red)),
            (this.n = e.n && new n.default(e.n, 16)),
            (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
            (this._wnafT1 = new Array(4)),
            (this._wnafT2 = new Array(4)),
            (this._wnafT3 = new Array(4)),
            (this._wnafT4 = new Array(4)),
            (this._bitLength = this.n ? this.n.bitLength() : 0));
          var r = this.n && this.p.div(this.n);
          !r || r.cmpn(100) > 0
            ? (this.redN = null)
            : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
        }
        var g = m;
        function v(t, e) {
          ((this.curve = t), (this.type = e), (this.precomputed = null));
        }
        ((m.prototype.point = function () {
          throw new Error("Not implemented");
        }),
          (m.prototype.validate = function () {
            throw new Error("Not implemented");
          }),
          (m.prototype._fixedNafMul = function (t, e) {
            p(t.precomputed);
            var r = t._getDoubles(),
              i = d(e, 1, this._bitLength),
              n = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1);
            n /= 3;
            var o,
              s,
              f = [];
            for (o = 0; o < i.length; o += r.step) {
              s = 0;
              for (var h = o + r.step - 1; h >= o; h--) s = (s << 1) + i[h];
              f.push(s);
            }
            for (
              var u = this.jpoint(null, null, null),
                a = this.jpoint(null, null, null),
                l = n;
              l > 0;
              l--
            ) {
              for (o = 0; o < f.length; o++)
                ((s = f[o]),
                  s === l
                    ? (a = a.mixedAdd(r.points[o]))
                    : s === -l && (a = a.mixedAdd(r.points[o].neg())));
              u = u.add(a);
            }
            return u.toP();
          }),
          (m.prototype._wnafMul = function (t, e) {
            var r = 4,
              i = t._getNAFPoints(r);
            r = i.wnd;
            for (
              var n = i.points,
                o = d(e, r, this._bitLength),
                s = this.jpoint(null, null, null),
                f = o.length - 1;
              f >= 0;
              f--
            ) {
              for (var h = 0; f >= 0 && 0 === o[f]; f--) h++;
              if ((f >= 0 && h++, (s = s.dblp(h)), f < 0)) break;
              var u = o[f];
              (p(0 !== u),
                (s =
                  "affine" === t.type
                    ? u > 0
                      ? s.mixedAdd(n[(u - 1) >> 1])
                      : s.mixedAdd(n[(-u - 1) >> 1].neg())
                    : u > 0
                      ? s.add(n[(u - 1) >> 1])
                      : s.add(n[(-u - 1) >> 1].neg())));
            }
            return "affine" === t.type ? s.toP() : s;
          }),
          (m.prototype._wnafMulAdd = function (t, e, r, i, n) {
            var o,
              s,
              f,
              h = this._wnafT1,
              u = this._wnafT2,
              a = this._wnafT3,
              l = 0;
            for (o = 0; o < i; o++) {
              f = e[o];
              var p = f._getNAFPoints(t);
              ((h[o] = p.wnd), (u[o] = p.points));
            }
            for (o = i - 1; o >= 1; o -= 2) {
              var m = o - 1,
                g = o;
              if (1 === h[m] && 1 === h[g]) {
                var v = [e[m], null, null, e[g]];
                0 === e[m].y.cmp(e[g].y)
                  ? ((v[1] = e[m].add(e[g])),
                    (v[2] = e[m].toJ().mixedAdd(e[g].neg())))
                  : 0 === e[m].y.cmp(e[g].y.redNeg())
                    ? ((v[1] = e[m].toJ().mixedAdd(e[g])),
                      (v[2] = e[m].add(e[g].neg())))
                    : ((v[1] = e[m].toJ().mixedAdd(e[g])),
                      (v[2] = e[m].toJ().mixedAdd(e[g].neg())));
                var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                  b = c(r[m], r[g]);
                for (
                  l = Math.max(b[0].length, l),
                    a[m] = new Array(l),
                    a[g] = new Array(l),
                    s = 0;
                  s < l;
                  s++
                ) {
                  var w = 0 | b[0][s],
                    M = 0 | b[1][s];
                  ((a[m][s] = y[3 * (w + 1) + (M + 1)]),
                    (a[g][s] = 0),
                    (u[m] = v));
                }
              } else
                ((a[m] = d(r[m], h[m], this._bitLength)),
                  (a[g] = d(r[g], h[g], this._bitLength)),
                  (l = Math.max(a[m].length, l)),
                  (l = Math.max(a[g].length, l)));
            }
            var E = this.jpoint(null, null, null),
              A = this._wnafT4;
            for (o = l; o >= 0; o--) {
              var _ = 0;
              while (o >= 0) {
                var S = !0;
                for (s = 0; s < i; s++)
                  ((A[s] = 0 | a[s][o]), 0 !== A[s] && (S = !1));
                if (!S) break;
                (_++, o--);
              }
              if ((o >= 0 && _++, (E = E.dblp(_)), o < 0)) break;
              for (s = 0; s < i; s++) {
                var I = A[s];
                0 !== I &&
                  (I > 0
                    ? (f = u[s][(I - 1) >> 1])
                    : I < 0 && (f = u[s][(-I - 1) >> 1].neg()),
                  (E = "affine" === f.type ? E.mixedAdd(f) : E.add(f)));
              }
            }
            for (o = 0; o < i; o++) u[o] = null;
            return n ? E : E.toP();
          }),
          (m.BasePoint = v),
          (v.prototype.eq = function () {
            throw new Error("Not implemented");
          }),
          (v.prototype.validate = function () {
            return this.curve.validate(this);
          }),
          (m.prototype.decodePoint = function (t, e) {
            t = l.toArray(t, e);
            var r = this.p.byteLength();
            if (
              (4 === t[0] || 6 === t[0] || 7 === t[0]) &&
              t.length - 1 === 2 * r
            ) {
              6 === t[0]
                ? p(t[t.length - 1] % 2 === 0)
                : 7 === t[0] && p(t[t.length - 1] % 2 === 1);
              var i = this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
              return i;
            }
            if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
              return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
            throw new Error("Unknown point format");
          }),
          (v.prototype.encodeCompressed = function (t) {
            return this.encode(t, !0);
          }),
          (v.prototype._encode = function (t) {
            var e = this.curve.p.byteLength(),
              r = this.getX().toArray("be", e);
            return t
              ? [this.getY().isEven() ? 2 : 3].concat(r)
              : [4].concat(r, this.getY().toArray("be", e));
          }),
          (v.prototype.encode = function (t, e) {
            return l.encode(this._encode(e), t);
          }),
          (v.prototype.precompute = function (t) {
            if (this.precomputed) return this;
            var e = { doubles: null, naf: null, beta: null };
            return (
              (e.naf = this._getNAFPoints(8)),
              (e.doubles = this._getDoubles(4, t)),
              (e.beta = this._getBeta()),
              (this.precomputed = e),
              this
            );
          }),
          (v.prototype._hasDoubles = function (t) {
            if (!this.precomputed) return !1;
            var e = this.precomputed.doubles;
            return (
              !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            );
          }),
          (v.prototype._getDoubles = function (t, e) {
            if (this.precomputed && this.precomputed.doubles)
              return this.precomputed.doubles;
            for (var r = [this], i = this, n = 0; n < e; n += t) {
              for (var o = 0; o < t; o++) i = i.dbl();
              r.push(i);
            }
            return { step: t, points: r };
          }),
          (v.prototype._getNAFPoints = function (t) {
            if (this.precomputed && this.precomputed.naf)
              return this.precomputed.naf;
            for (
              var e = [this],
                r = (1 << t) - 1,
                i = 1 === r ? null : this.dbl(),
                n = 1;
              n < r;
              n++
            )
              e[n] = e[n - 1].add(i);
            return { wnd: t, points: e };
          }),
          (v.prototype._getBeta = function () {
            return null;
          }),
          (v.prototype.dblp = function (t) {
            for (var e = this, r = 0; r < t; r++) e = e.dbl();
            return e;
          }));
        var y = s(function (t) {
            "function" === typeof Object.create
              ? (t.exports = function (t, e) {
                  e &&
                    ((t.super_ = e),
                    (t.prototype = Object.create(e.prototype, {
                      constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })));
                })
              : (t.exports = function (t, e) {
                  if (e) {
                    t.super_ = e;
                    var r = function () {};
                    ((r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.prototype.constructor = t));
                  }
                });
          }),
          b = l.assert;
        function w(t) {
          (g.call(this, "short", t),
            (this.a = new n.default(t.a, 16).toRed(this.red)),
            (this.b = new n.default(t.b, 16).toRed(this.red)),
            (this.tinv = this.two.redInvm()),
            (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
            (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
            (this.endo = this._getEndomorphism(t)),
            (this._endoWnafT1 = new Array(4)),
            (this._endoWnafT2 = new Array(4)));
        }
        y(w, g);
        var M = w;
        function Point(t, e, r, i) {
          (g.BasePoint.call(this, t, "affine"),
            null === e && null === r
              ? ((this.x = null), (this.y = null), (this.inf = !0))
              : ((this.x = new n.default(e, 16)),
                (this.y = new n.default(r, 16)),
                i &&
                  (this.x.forceRed(this.curve.red),
                  this.y.forceRed(this.curve.red)),
                this.x.red || (this.x = this.x.toRed(this.curve.red)),
                this.y.red || (this.y = this.y.toRed(this.curve.red)),
                (this.inf = !1)));
        }
        function E(t, e, r, i) {
          (g.BasePoint.call(this, t, "jacobian"),
            null === e && null === r && null === i
              ? ((this.x = this.curve.one),
                (this.y = this.curve.one),
                (this.z = new n.default(0)))
              : ((this.x = new n.default(e, 16)),
                (this.y = new n.default(r, 16)),
                (this.z = new n.default(i, 16))),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            (this.zOne = this.z === this.curve.one));
        }
        ((w.prototype._getEndomorphism = function (t) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var e, r, i;
            if (t.beta) e = new n.default(t.beta, 16).toRed(this.red);
            else {
              var o = this._getEndoRoots(this.p);
              ((e = o[0].cmp(o[1]) < 0 ? o[0] : o[1]), (e = e.toRed(this.red)));
            }
            if (t.lambda) r = new n.default(t.lambda, 16);
            else {
              var s = this._getEndoRoots(this.n);
              0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(e))
                ? (r = s[0])
                : ((r = s[1]),
                  b(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
            }
            return (
              (i = t.basis
                ? t.basis.map(function (t) {
                    return {
                      a: new n.default(t.a, 16),
                      b: new n.default(t.b, 16),
                    };
                  })
                : this._getEndoBasis(r)),
              { beta: e, lambda: r, basis: i }
            );
          }
        }),
          (w.prototype._getEndoRoots = function (t) {
            var e = t === this.p ? this.red : n.default.mont(t),
              r = new n.default(2).toRed(e).redInvm(),
              i = r.redNeg(),
              o = new n.default(3).toRed(e).redNeg().redSqrt().redMul(r),
              s = i.redAdd(o).fromRed(),
              f = i.redSub(o).fromRed();
            return [s, f];
          }),
          (w.prototype._getEndoBasis = function (t) {
            var e,
              r,
              i,
              o,
              s,
              f,
              h,
              u,
              a,
              l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              d = t,
              c = this.n.clone(),
              p = new n.default(1),
              m = new n.default(0),
              g = new n.default(0),
              v = new n.default(1),
              y = 0;
            while (0 !== d.cmpn(0)) {
              var b = c.div(d);
              ((u = c.sub(b.mul(d))), (a = g.sub(b.mul(p))));
              var w = v.sub(b.mul(m));
              if (!i && u.cmp(l) < 0)
                ((e = h.neg()), (r = p), (i = u.neg()), (o = a));
              else if (i && 2 === ++y) break;
              ((h = u), (c = d), (d = u), (g = p), (p = a), (v = m), (m = w));
            }
            ((s = u.neg()), (f = a));
            var M = i.sqr().add(o.sqr()),
              E = s.sqr().add(f.sqr());
            return (
              E.cmp(M) >= 0 && ((s = e), (f = r)),
              i.negative && ((i = i.neg()), (o = o.neg())),
              s.negative && ((s = s.neg()), (f = f.neg())),
              [
                { a: i, b: o },
                { a: s, b: f },
              ]
            );
          }),
          (w.prototype._endoSplit = function (t) {
            var e = this.endo.basis,
              r = e[0],
              i = e[1],
              n = i.b.mul(t).divRound(this.n),
              o = r.b.neg().mul(t).divRound(this.n),
              s = n.mul(r.a),
              f = o.mul(i.a),
              h = n.mul(r.b),
              u = o.mul(i.b),
              a = t.sub(s).sub(f),
              l = h.add(u).neg();
            return { k1: a, k2: l };
          }),
          (w.prototype.pointFromX = function (t, e) {
            ((t = new n.default(t, 16)), t.red || (t = t.toRed(this.red)));
            var r = t
                .redSqr()
                .redMul(t)
                .redIAdd(t.redMul(this.a))
                .redIAdd(this.b),
              i = r.redSqrt();
            if (0 !== i.redSqr().redSub(r).cmp(this.zero))
              throw new Error("invalid point");
            var o = i.fromRed().isOdd();
            return (
              ((e && !o) || (!e && o)) && (i = i.redNeg()),
              this.point(t, i)
            );
          }),
          (w.prototype.validate = function (t) {
            if (t.inf) return !0;
            var e = t.x,
              r = t.y,
              i = this.a.redMul(e),
              n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
            return 0 === r.redSqr().redISub(n).cmpn(0);
          }),
          (w.prototype._endoWnafMulAdd = function (t, e, r) {
            for (
              var i = this._endoWnafT1, n = this._endoWnafT2, o = 0;
              o < t.length;
              o++
            ) {
              var s = this._endoSplit(e[o]),
                f = t[o],
                h = f._getBeta();
              (s.k1.negative && (s.k1.ineg(), (f = f.neg(!0))),
                s.k2.negative && (s.k2.ineg(), (h = h.neg(!0))),
                (i[2 * o] = f),
                (i[2 * o + 1] = h),
                (n[2 * o] = s.k1),
                (n[2 * o + 1] = s.k2));
            }
            for (
              var u = this._wnafMulAdd(1, i, n, 2 * o, r), a = 0;
              a < 2 * o;
              a++
            )
              ((i[a] = null), (n[a] = null));
            return u;
          }),
          y(Point, g.BasePoint),
          (w.prototype.point = function (t, e, r) {
            return new Point(this, t, e, r);
          }),
          (w.prototype.pointFromJSON = function (t, e) {
            return Point.fromJSON(this, t, e);
          }),
          (Point.prototype._getBeta = function () {
            if (this.curve.endo) {
              var t = this.precomputed;
              if (t && t.beta) return t.beta;
              var e = this.curve.point(
                this.x.redMul(this.curve.endo.beta),
                this.y,
              );
              if (t) {
                var r = this.curve,
                  i = function (t) {
                    return r.point(t.x.redMul(r.endo.beta), t.y);
                  };
                ((t.beta = e),
                  (e.precomputed = {
                    beta: null,
                    naf: t.naf && {
                      wnd: t.naf.wnd,
                      points: t.naf.points.map(i),
                    },
                    doubles: t.doubles && {
                      step: t.doubles.step,
                      points: t.doubles.points.map(i),
                    },
                  }));
              }
              return e;
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
          (Point.fromJSON = function (t, e, r) {
            "string" === typeof e && (e = JSON.parse(e));
            var i = t.point(e[0], e[1], r);
            if (!e[2]) return i;
            function n(e) {
              return t.point(e[0], e[1], r);
            }
            var o = e[2];
            return (
              (i.precomputed = {
                beta: null,
                doubles: o.doubles && {
                  step: o.doubles.step,
                  points: [i].concat(o.doubles.points.map(n)),
                },
                naf: o.naf && {
                  wnd: o.naf.wnd,
                  points: [i].concat(o.naf.points.map(n)),
                },
              }),
              i
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
          (Point.prototype.add = function (t) {
            if (this.inf) return t;
            if (t.inf) return this;
            if (this.eq(t)) return this.dbl();
            if (this.neg().eq(t)) return this.curve.point(null, null);
            if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
            var e = this.y.redSub(t.y);
            0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
            var r = e.redSqr().redISub(this.x).redISub(t.x),
              i = e.redMul(this.x.redSub(r)).redISub(this.y);
            return this.curve.point(r, i);
          }),
          (Point.prototype.dbl = function () {
            if (this.inf) return this;
            var t = this.y.redAdd(this.y);
            if (0 === t.cmpn(0)) return this.curve.point(null, null);
            var e = this.curve.a,
              r = this.x.redSqr(),
              i = t.redInvm(),
              n = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(i),
              o = n.redSqr().redISub(this.x.redAdd(this.x)),
              s = n.redMul(this.x.redSub(o)).redISub(this.y);
            return this.curve.point(o, s);
          }),
          (Point.prototype.getX = function () {
            return this.x.fromRed();
          }),
          (Point.prototype.getY = function () {
            return this.y.fromRed();
          }),
          (Point.prototype.mul = function (t) {
            return (
              (t = new n.default(t, 16)),
              this.isInfinity()
                ? this
                : this._hasDoubles(t)
                  ? this.curve._fixedNafMul(this, t)
                  : this.curve.endo
                    ? this.curve._endoWnafMulAdd([this], [t])
                    : this.curve._wnafMul(this, t)
            );
          }),
          (Point.prototype.mulAdd = function (t, e, r) {
            var i = [this, e],
              n = [t, r];
            return this.curve.endo
              ? this.curve._endoWnafMulAdd(i, n)
              : this.curve._wnafMulAdd(1, i, n, 2);
          }),
          (Point.prototype.jmulAdd = function (t, e, r) {
            var i = [this, e],
              n = [t, r];
            return this.curve.endo
              ? this.curve._endoWnafMulAdd(i, n, !0)
              : this.curve._wnafMulAdd(1, i, n, 2, !0);
          }),
          (Point.prototype.eq = function (t) {
            return (
              this === t ||
              (this.inf === t.inf &&
                (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
            );
          }),
          (Point.prototype.neg = function (t) {
            if (this.inf) return this;
            var e = this.curve.point(this.x, this.y.redNeg());
            if (t && this.precomputed) {
              var r = this.precomputed,
                i = function (t) {
                  return t.neg();
                };
              e.precomputed = {
                naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) },
                doubles: r.doubles && {
                  step: r.doubles.step,
                  points: r.doubles.points.map(i),
                },
              };
            }
            return e;
          }),
          (Point.prototype.toJ = function () {
            if (this.inf) return this.curve.jpoint(null, null, null);
            var t = this.curve.jpoint(this.x, this.y, this.curve.one);
            return t;
          }),
          y(E, g.BasePoint),
          (w.prototype.jpoint = function (t, e, r) {
            return new E(this, t, e, r);
          }),
          (E.prototype.toP = function () {
            if (this.isInfinity()) return this.curve.point(null, null);
            var t = this.z.redInvm(),
              e = t.redSqr(),
              r = this.x.redMul(e),
              i = this.y.redMul(e).redMul(t);
            return this.curve.point(r, i);
          }),
          (E.prototype.neg = function () {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
          }),
          (E.prototype.add = function (t) {
            if (this.isInfinity()) return t;
            if (t.isInfinity()) return this;
            var e = t.z.redSqr(),
              r = this.z.redSqr(),
              i = this.x.redMul(e),
              n = t.x.redMul(r),
              o = this.y.redMul(e.redMul(t.z)),
              s = t.y.redMul(r.redMul(this.z)),
              f = i.redSub(n),
              h = o.redSub(s);
            if (0 === f.cmpn(0))
              return 0 !== h.cmpn(0)
                ? this.curve.jpoint(null, null, null)
                : this.dbl();
            var u = f.redSqr(),
              a = u.redMul(f),
              l = i.redMul(u),
              d = h.redSqr().redIAdd(a).redISub(l).redISub(l),
              c = h.redMul(l.redISub(d)).redISub(o.redMul(a)),
              p = this.z.redMul(t.z).redMul(f);
            return this.curve.jpoint(d, c, p);
          }),
          (E.prototype.mixedAdd = function (t) {
            if (this.isInfinity()) return t.toJ();
            if (t.isInfinity()) return this;
            var e = this.z.redSqr(),
              r = this.x,
              i = t.x.redMul(e),
              n = this.y,
              o = t.y.redMul(e).redMul(this.z),
              s = r.redSub(i),
              f = n.redSub(o);
            if (0 === s.cmpn(0))
              return 0 !== f.cmpn(0)
                ? this.curve.jpoint(null, null, null)
                : this.dbl();
            var h = s.redSqr(),
              u = h.redMul(s),
              a = r.redMul(h),
              l = f.redSqr().redIAdd(u).redISub(a).redISub(a),
              d = f.redMul(a.redISub(l)).redISub(n.redMul(u)),
              c = this.z.redMul(s);
            return this.curve.jpoint(l, d, c);
          }),
          (E.prototype.dblp = function (t) {
            if (0 === t) return this;
            if (this.isInfinity()) return this;
            if (!t) return this.dbl();
            var e;
            if (this.curve.zeroA || this.curve.threeA) {
              var r = this;
              for (e = 0; e < t; e++) r = r.dbl();
              return r;
            }
            var i = this.curve.a,
              n = this.curve.tinv,
              o = this.x,
              s = this.y,
              f = this.z,
              h = f.redSqr().redSqr(),
              u = s.redAdd(s);
            for (e = 0; e < t; e++) {
              var a = o.redSqr(),
                l = u.redSqr(),
                d = l.redSqr(),
                c = a.redAdd(a).redIAdd(a).redIAdd(i.redMul(h)),
                p = o.redMul(l),
                m = c.redSqr().redISub(p.redAdd(p)),
                g = p.redISub(m),
                v = c.redMul(g);
              v = v.redIAdd(v).redISub(d);
              var y = u.redMul(f);
              (e + 1 < t && (h = h.redMul(d)), (o = m), (f = y), (u = v));
            }
            return this.curve.jpoint(o, u.redMul(n), f);
          }),
          (E.prototype.dbl = function () {
            return this.isInfinity()
              ? this
              : this.curve.zeroA
                ? this._zeroDbl()
                : this.curve.threeA
                  ? this._threeDbl()
                  : this._dbl();
          }),
          (E.prototype._zeroDbl = function () {
            var t, e, r;
            if (this.zOne) {
              var i = this.x.redSqr(),
                n = this.y.redSqr(),
                o = n.redSqr(),
                s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
              s = s.redIAdd(s);
              var f = i.redAdd(i).redIAdd(i),
                h = f.redSqr().redISub(s).redISub(s),
                u = o.redIAdd(o);
              ((u = u.redIAdd(u)),
                (u = u.redIAdd(u)),
                (t = h),
                (e = f.redMul(s.redISub(h)).redISub(u)),
                (r = this.y.redAdd(this.y)));
            } else {
              var a = this.x.redSqr(),
                l = this.y.redSqr(),
                d = l.redSqr(),
                c = this.x.redAdd(l).redSqr().redISub(a).redISub(d);
              c = c.redIAdd(c);
              var p = a.redAdd(a).redIAdd(a),
                m = p.redSqr(),
                g = d.redIAdd(d);
              ((g = g.redIAdd(g)),
                (g = g.redIAdd(g)),
                (t = m.redISub(c).redISub(c)),
                (e = p.redMul(c.redISub(t)).redISub(g)),
                (r = this.y.redMul(this.z)),
                (r = r.redIAdd(r)));
            }
            return this.curve.jpoint(t, e, r);
          }),
          (E.prototype._threeDbl = function () {
            var t, e, r;
            if (this.zOne) {
              var i = this.x.redSqr(),
                n = this.y.redSqr(),
                o = n.redSqr(),
                s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
              s = s.redIAdd(s);
              var f = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                h = f.redSqr().redISub(s).redISub(s);
              t = h;
              var u = o.redIAdd(o);
              ((u = u.redIAdd(u)),
                (u = u.redIAdd(u)),
                (e = f.redMul(s.redISub(h)).redISub(u)),
                (r = this.y.redAdd(this.y)));
            } else {
              var a = this.z.redSqr(),
                l = this.y.redSqr(),
                d = this.x.redMul(l),
                c = this.x.redSub(a).redMul(this.x.redAdd(a));
              c = c.redAdd(c).redIAdd(c);
              var p = d.redIAdd(d);
              p = p.redIAdd(p);
              var m = p.redAdd(p);
              ((t = c.redSqr().redISub(m)),
                (r = this.y.redAdd(this.z).redSqr().redISub(l).redISub(a)));
              var g = l.redSqr();
              ((g = g.redIAdd(g)),
                (g = g.redIAdd(g)),
                (g = g.redIAdd(g)),
                (e = c.redMul(p.redISub(t)).redISub(g)));
            }
            return this.curve.jpoint(t, e, r);
          }),
          (E.prototype._dbl = function () {
            var t = this.curve.a,
              e = this.x,
              r = this.y,
              i = this.z,
              n = i.redSqr().redSqr(),
              o = e.redSqr(),
              s = r.redSqr(),
              f = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(n)),
              h = e.redAdd(e);
            h = h.redIAdd(h);
            var u = h.redMul(s),
              a = f.redSqr().redISub(u.redAdd(u)),
              l = u.redISub(a),
              d = s.redSqr();
            ((d = d.redIAdd(d)), (d = d.redIAdd(d)), (d = d.redIAdd(d)));
            var c = f.redMul(l).redISub(d),
              p = r.redAdd(r).redMul(i);
            return this.curve.jpoint(a, c, p);
          }),
          (E.prototype.trpl = function () {
            if (!this.curve.zeroA) return this.dbl().add(this);
            var t = this.x.redSqr(),
              e = this.y.redSqr(),
              r = this.z.redSqr(),
              i = e.redSqr(),
              n = t.redAdd(t).redIAdd(t),
              o = n.redSqr(),
              s = this.x.redAdd(e).redSqr().redISub(t).redISub(i);
            ((s = s.redIAdd(s)),
              (s = s.redAdd(s).redIAdd(s)),
              (s = s.redISub(o)));
            var f = s.redSqr(),
              h = i.redIAdd(i);
            ((h = h.redIAdd(h)), (h = h.redIAdd(h)), (h = h.redIAdd(h)));
            var u = n.redIAdd(s).redSqr().redISub(o).redISub(f).redISub(h),
              a = e.redMul(u);
            ((a = a.redIAdd(a)), (a = a.redIAdd(a)));
            var l = this.x.redMul(f).redISub(a);
            ((l = l.redIAdd(l)), (l = l.redIAdd(l)));
            var d = this.y.redMul(u.redMul(h.redISub(u)).redISub(s.redMul(f)));
            ((d = d.redIAdd(d)), (d = d.redIAdd(d)), (d = d.redIAdd(d)));
            var c = this.z.redAdd(s).redSqr().redISub(r).redISub(f);
            return this.curve.jpoint(l, d, c);
          }),
          (E.prototype.mul = function (t, e) {
            return ((t = new n.default(t, e)), this.curve._wnafMul(this, t));
          }),
          (E.prototype.eq = function (t) {
            if ("affine" === t.type) return this.eq(t.toJ());
            if (this === t) return !0;
            var e = this.z.redSqr(),
              r = t.z.redSqr();
            if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0))
              return !1;
            var i = e.redMul(this.z),
              n = r.redMul(t.z);
            return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0);
          }),
          (E.prototype.eqXToP = function (t) {
            var e = this.z.redSqr(),
              r = t.toRed(this.curve.red).redMul(e);
            if (0 === this.x.cmp(r)) return !0;
            for (var i = t.clone(), n = this.curve.redN.redMul(e); ; ) {
              if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
              if ((r.redIAdd(n), 0 === this.x.cmp(r))) return !0;
            }
          }),
          (E.prototype.inspect = function () {
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
          (E.prototype.isInfinity = function () {
            return 0 === this.z.cmpn(0);
          }));
        var A = s(function (t, e) {
            var r = e;
            ((r.base = g), (r.short = M), (r.mont = null), (r.edwards = null));
          }),
          _ = s(function (t, e) {
            var r,
              i = e,
              n = l.assert;
            function s(t) {
              ("short" === t.type
                ? (this.curve = new A.short(t))
                : "edwards" === t.type
                  ? (this.curve = new A.edwards(t))
                  : (this.curve = new A.mont(t)),
                (this.g = this.curve.g),
                (this.n = this.curve.n),
                (this.hash = t.hash),
                n(this.g.validate(), "Invalid curve"),
                n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O"));
            }
            function f(t, e) {
              Object.defineProperty(i, t, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  var r = new s(e);
                  return (
                    Object.defineProperty(i, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: r,
                    }),
                    r
                  );
                },
              });
            }
            ((i.PresetCurve = s),
              f("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: o.default.sha256,
                gRed: !1,
                g: [
                  "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                  "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
                ],
              }),
              f("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: o.default.sha256,
                gRed: !1,
                g: [
                  "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                  "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
                ],
              }),
              f("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: o.default.sha256,
                gRed: !1,
                g: [
                  "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                  "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
                ],
              }),
              f("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: o.default.sha384,
                gRed: !1,
                g: [
                  "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                  "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
                ],
              }),
              f("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: o.default.sha512,
                gRed: !1,
                g: [
                  "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                  "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
                ],
              }),
              f("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: o.default.sha256,
                gRed: !1,
                g: ["9"],
              }),
              f("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: o.default.sha256,
                gRed: !1,
                g: [
                  "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                  "6666666666666666666666666666666666666666666666666666666666666658",
                ],
              }));
            try {
              r = null.crash();
            } catch (h) {
              r = void 0;
            }
            f("secp256k1", {
              type: "short",
              prime: "k256",
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
              a: "0",
              b: "7",
              n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
              h: "1",
              hash: o.default.sha256,
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
                r,
              ],
            });
          });
        function S(t) {
          if (!(this instanceof S)) return new S(t);
          ((this.hash = t.hash),
            (this.predResist = !!t.predResist),
            (this.outLen = this.hash.outSize),
            (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
            (this._reseed = null),
            (this.reseedInterval = null),
            (this.K = null),
            (this.V = null));
          var e = a.toArray(t.entropy, t.entropyEnc || "hex"),
            r = a.toArray(t.nonce, t.nonceEnc || "hex"),
            i = a.toArray(t.pers, t.persEnc || "hex");
          (h(
            e.length >= this.minEntropy / 8,
            "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
          ),
            this._init(e, r, i));
        }
        var I = S;
        ((S.prototype._init = function (t, e, r) {
          var i = t.concat(e).concat(r);
          ((this.K = new Array(this.outLen / 8)),
            (this.V = new Array(this.outLen / 8)));
          for (var n = 0; n < this.V.length; n++)
            ((this.K[n] = 0), (this.V[n] = 1));
          (this._update(i),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656));
        }),
          (S.prototype._hmac = function () {
            return new o.default.hmac(this.hash, this.K);
          }),
          (S.prototype._update = function (t) {
            var e = this._hmac().update(this.V).update([0]);
            (t && (e = e.update(t)),
              (this.K = e.digest()),
              (this.V = this._hmac().update(this.V).digest()),
              t &&
                ((this.K = this._hmac()
                  .update(this.V)
                  .update([1])
                  .update(t)
                  .digest()),
                (this.V = this._hmac().update(this.V).digest())));
          }),
          (S.prototype.reseed = function (t, e, r, i) {
            ("string" !== typeof e && ((i = r), (r = e), (e = null)),
              (t = a.toArray(t, e)),
              (r = a.toArray(r, i)),
              h(
                t.length >= this.minEntropy / 8,
                "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
              ),
              this._update(t.concat(r || [])),
              (this._reseed = 1));
          }),
          (S.prototype.generate = function (t, e, r, i) {
            if (this._reseed > this.reseedInterval)
              throw new Error("Reseed is required");
            ("string" !== typeof e && ((i = r), (r = e), (e = null)),
              r && ((r = a.toArray(r, i || "hex")), this._update(r)));
            var n = [];
            while (n.length < t)
              ((this.V = this._hmac().update(this.V).digest()),
                (n = n.concat(this.V)));
            var o = n.slice(0, t);
            return (this._update(r), this._reseed++, a.encode(o, e));
          }));
        var N = l.assert;
        function x(t, e) {
          ((this.ec = t),
            (this.priv = null),
            (this.pub = null),
            e.priv && this._importPrivate(e.priv, e.privEnc),
            e.pub && this._importPublic(e.pub, e.pubEnc));
        }
        var P = x;
        ((x.fromPublic = function (t, e, r) {
          return e instanceof x ? e : new x(t, { pub: e, pubEnc: r });
        }),
          (x.fromPrivate = function (t, e, r) {
            return e instanceof x ? e : new x(t, { priv: e, privEnc: r });
          }),
          (x.prototype.validate = function () {
            var t = this.getPublic();
            return t.isInfinity()
              ? { result: !1, reason: "Invalid public key" }
              : t.validate()
                ? t.mul(this.ec.curve.n).isInfinity()
                  ? { result: !0, reason: null }
                  : { result: !1, reason: "Public key * N != O" }
                : { result: !1, reason: "Public key is not a point" };
          }),
          (x.prototype.getPublic = function (t, e) {
            return (
              "string" === typeof t && ((e = t), (t = null)),
              this.pub || (this.pub = this.ec.g.mul(this.priv)),
              e ? this.pub.encode(e, t) : this.pub
            );
          }),
          (x.prototype.getPrivate = function (t) {
            return "hex" === t ? this.priv.toString(16, 2) : this.priv;
          }),
          (x.prototype._importPrivate = function (t, e) {
            ((this.priv = new n.default(t, e || 16)),
              (this.priv = this.priv.umod(this.ec.curve.n)));
          }),
          (x.prototype._importPublic = function (t, e) {
            if (t.x || t.y)
              return (
                "mont" === this.ec.curve.type
                  ? N(t.x, "Need x coordinate")
                  : ("short" !== this.ec.curve.type &&
                      "edwards" !== this.ec.curve.type) ||
                    N(t.x && t.y, "Need both x and y coordinate"),
                void (this.pub = this.ec.curve.point(t.x, t.y))
              );
            this.pub = this.ec.curve.decodePoint(t, e);
          }),
          (x.prototype.derive = function (t) {
            return (
              t.validate() || N(t.validate(), "public point not validated"),
              t.mul(this.priv).getX()
            );
          }),
          (x.prototype.sign = function (t, e, r) {
            return this.ec.sign(t, this, e, r);
          }),
          (x.prototype.verify = function (t, e) {
            return this.ec.verify(t, e, this);
          }),
          (x.prototype.inspect = function () {
            return (
              "<Key priv: " +
              (this.priv && this.priv.toString(16, 2)) +
              " pub: " +
              (this.pub && this.pub.inspect()) +
              " >"
            );
          }));
        var R = l.assert;
        function O(t, e) {
          if (t instanceof O) return t;
          this._importDER(t, e) ||
            (R(t.r && t.s, "Signature without r or s"),
            (this.r = new n.default(t.r, 16)),
            (this.s = new n.default(t.s, 16)),
            void 0 === t.recoveryParam
              ? (this.recoveryParam = null)
              : (this.recoveryParam = t.recoveryParam));
        }
        var L = O;
        function T() {
          this.place = 0;
        }
        function U(t, e) {
          var r = t[e.place++];
          if (!(128 & r)) return r;
          var i = 15 & r;
          if (0 === i || i > 4) return !1;
          for (var n = 0, o = 0, s = e.place; o < i; o++, s++)
            ((n <<= 8), (n |= t[s]), (n >>>= 0));
          return !(n <= 127) && ((e.place = s), n);
        }
        function k(t) {
          var e = 0,
            r = t.length - 1;
          while (!t[e] && !(128 & t[e + 1]) && e < r) e++;
          return 0 === e ? t : t.slice(e);
        }
        function C(t, e) {
          if (e < 128) t.push(e);
          else {
            var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
            t.push(128 | r);
            while (--r) t.push((e >>> (r << 3)) & 255);
            t.push(e);
          }
        }
        ((O.prototype._importDER = function (t, e) {
          t = l.toArray(t, e);
          var r = new T();
          if (48 !== t[r.place++]) return !1;
          var i = U(t, r);
          if (!1 === i) return !1;
          if (i + r.place !== t.length) return !1;
          if (2 !== t[r.place++]) return !1;
          var o = U(t, r);
          if (!1 === o) return !1;
          var s = t.slice(r.place, o + r.place);
          if (((r.place += o), 2 !== t[r.place++])) return !1;
          var f = U(t, r);
          if (!1 === f) return !1;
          if (t.length !== f + r.place) return !1;
          var h = t.slice(r.place, f + r.place);
          if (0 === s[0]) {
            if (!(128 & s[1])) return !1;
            s = s.slice(1);
          }
          if (0 === h[0]) {
            if (!(128 & h[1])) return !1;
            h = h.slice(1);
          }
          return (
            (this.r = new n.default(s)),
            (this.s = new n.default(h)),
            (this.recoveryParam = null),
            !0
          );
        }),
          (O.prototype.toDER = function (t) {
            var e = this.r.toArray(),
              r = this.s.toArray();
            (128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              (e = k(e)),
              (r = k(r)));
            while (!r[0] && !(128 & r[1])) r = r.slice(1);
            var i = [2];
            (C(i, e.length), (i = i.concat(e)), i.push(2), C(i, r.length));
            var n = i.concat(r),
              o = [48];
            return (C(o, n.length), (o = o.concat(n)), l.encode(o, t));
          }));
        var D = function () {
            throw new Error("unsupported");
          },
          q = l.assert;
        function F(t) {
          if (!(this instanceof F)) return new F(t);
          ("string" === typeof t &&
            (q(
              Object.prototype.hasOwnProperty.call(_, t),
              "Unknown curve " + t,
            ),
            (t = _[t])),
            t instanceof _.PresetCurve && (t = { curve: t }),
            (this.curve = t.curve.curve),
            (this.n = this.curve.n),
            (this.nh = this.n.ushrn(1)),
            (this.g = this.curve.g),
            (this.g = t.curve.g),
            this.g.precompute(t.curve.n.bitLength() + 1),
            (this.hash = t.hash || t.curve.hash));
        }
        var j = F;
        ((F.prototype.keyPair = function (t) {
          return new P(this, t);
        }),
          (F.prototype.keyFromPrivate = function (t, e) {
            return P.fromPrivate(this, t, e);
          }),
          (F.prototype.keyFromPublic = function (t, e) {
            return P.fromPublic(this, t, e);
          }),
          (F.prototype.genKeyPair = function (t) {
            t || (t = {});
            for (
              var e = new I({
                  hash: this.hash,
                  pers: t.pers,
                  persEnc: t.persEnc || "utf8",
                  entropy: t.entropy || D(this.hash.hmacStrength),
                  entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                  nonce: this.n.toArray(),
                }),
                r = this.n.byteLength(),
                i = this.n.sub(new n.default(2));
              ;
            ) {
              var o = new n.default(e.generate(r));
              if (!(o.cmp(i) > 0)) return (o.iaddn(1), this.keyFromPrivate(o));
            }
          }),
          (F.prototype._truncateToN = function (t, e) {
            var r = 8 * t.byteLength() - this.n.bitLength();
            return (
              r > 0 && (t = t.ushrn(r)),
              !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            );
          }),
          (F.prototype.sign = function (t, e, r, i) {
            ("object" === typeof r && ((i = r), (r = null)),
              i || (i = {}),
              (e = this.keyFromPrivate(e, r)),
              (t = this._truncateToN(new n.default(t, 16))));
            for (
              var o = this.n.byteLength(),
                s = e.getPrivate().toArray("be", o),
                f = t.toArray("be", o),
                h = new I({
                  hash: this.hash,
                  entropy: s,
                  nonce: f,
                  pers: i.pers,
                  persEnc: i.persEnc || "utf8",
                }),
                u = this.n.sub(new n.default(1)),
                a = 0;
              ;
              a++
            ) {
              var l = i.k
                ? i.k(a)
                : new n.default(h.generate(this.n.byteLength()));
              if (
                ((l = this._truncateToN(l, !0)),
                !(l.cmpn(1) <= 0 || l.cmp(u) >= 0))
              ) {
                var d = this.g.mul(l);
                if (!d.isInfinity()) {
                  var c = d.getX(),
                    p = c.umod(this.n);
                  if (0 !== p.cmpn(0)) {
                    var m = l.invm(this.n).mul(p.mul(e.getPrivate()).iadd(t));
                    if (((m = m.umod(this.n)), 0 !== m.cmpn(0))) {
                      var g =
                        (d.getY().isOdd() ? 1 : 0) | (0 !== c.cmp(p) ? 2 : 0);
                      return (
                        i.canonical &&
                          m.cmp(this.nh) > 0 &&
                          ((m = this.n.sub(m)), (g ^= 1)),
                        new L({ r: p, s: m, recoveryParam: g })
                      );
                    }
                  }
                }
              }
            }
          }),
          (F.prototype.verify = function (t, e, r, i) {
            ((t = this._truncateToN(new n.default(t, 16))),
              (r = this.keyFromPublic(r, i)),
              (e = new L(e, "hex")));
            var o = e.r,
              s = e.s;
            if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
            if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
            var f,
              h = s.invm(this.n),
              u = h.mul(t).umod(this.n),
              a = h.mul(o).umod(this.n);
            return this.curve._maxwellTrick
              ? ((f = this.g.jmulAdd(u, r.getPublic(), a)),
                !f.isInfinity() && f.eqXToP(o))
              : ((f = this.g.mulAdd(u, r.getPublic(), a)),
                !f.isInfinity() && 0 === f.getX().umod(this.n).cmp(o));
          }),
          (F.prototype.recoverPubKey = function (t, e, r, i) {
            (q((3 & r) === r, "The recovery param is more than two bits"),
              (e = new L(e, i)));
            var o = this.n,
              s = new n.default(t),
              f = e.r,
              h = e.s,
              u = 1 & r,
              a = r >> 1;
            if (f.cmp(this.curve.p.umod(this.curve.n)) >= 0 && a)
              throw new Error("Unable to find sencond key candinate");
            f = a
              ? this.curve.pointFromX(f.add(this.curve.n), u)
              : this.curve.pointFromX(f, u);
            var l = e.r.invm(o),
              d = o.sub(s).mul(l).umod(o),
              c = h.mul(l).umod(o);
            return this.g.mulAdd(d, f, c);
          }),
          (F.prototype.getKeyRecoveryParam = function (t, e, r, i) {
            if (((e = new L(e, i)), null !== e.recoveryParam))
              return e.recoveryParam;
            for (var n = 0; n < 4; n++) {
              var o;
              try {
                o = this.recoverPubKey(t, e, n);
              } catch (t) {
                continue;
              }
              if (o.eq(r)) return n;
            }
            throw new Error("Unable to find valid recovery factor");
          }));
        var z = s(function (t, e) {
          var r = e;
          ((r.version = { version: "6.5.4" }.version),
            (r.utils = l),
            (r.rand = function () {
              throw new Error("unsupported");
            }),
            (r.curve = A),
            (r.curves = _),
            (r.ec = j),
            (r.eddsa = null));
        });
        e.EC = z.ec;
      }).call(this, r(13));
    },
    1698: function (t, e, r) {
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
                : r(1699).Buffer;
          } catch (R) {}
          function f(t, e) {
            var r = t.charCodeAt(e);
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
                ? r - 55
                : r >= 97 && r <= 102
                  ? r - 87
                  : void i(!1, "Invalid character in " + t);
          }
          function h(t, e, r) {
            var i = f(t, r);
            return (r - 1 >= e && (i |= f(t, r - 1) << 4), i);
          }
          function u(t, e, r, n) {
            for (
              var o = 0, s = 0, f = Math.min(t.length, r), h = e;
              h < f;
              h++
            ) {
              var u = t.charCodeAt(h) - 48;
              ((o *= n),
                (s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
                i(u >= 0 && s < n, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function a(t, e) {
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
                f = 0;
              if ("be" === r)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                  ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[o] |= (s << f) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - f)) & 67108863),
                    (f += 24),
                    f >= 26 && ((f -= 26), o++));
              else if ("le" === r)
                for (n = 0, o = 0; n < t.length; n += 3)
                  ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[o] |= (s << f) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - f)) & 67108863),
                    (f += 24),
                    f >= 26 && ((f -= 26), o++));
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
                  ((n = h(t, e, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var f = t.length - e;
                for (i = f % 2 === 0 ? e + 1 : e; i < t.length; i += 2)
                  ((n = h(t, e, i) << o),
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
                  f = Math.min(o, o - s) + r,
                  h = 0,
                  a = r;
                a < f;
                a += i
              )
                ((h = u(t, a, a + i, e)),
                  this.imuln(n),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              if (0 !== s) {
                var l = 1;
                for (h = u(t, a, t.length, e), a = 0; a < s; a++) l *= e;
                (this.imuln(l),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
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
              a(t, this);
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
            } catch (R) {
              o.prototype.inspect = l;
            }
          else o.prototype.inspect = l;
          function l() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var d = [
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
            c = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            p = [
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
                var f = this.words[s],
                  h = (16777215 & ((f << n) | o)).toString(16);
                ((o = (f >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (r =
                    0 !== o || s !== this.length - 1
                      ? d[6 - h.length] + h + r
                      : h + r));
              }
              0 !== o && (r = o.toString(16) + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var u = c[t],
                a = p[t];
              r = "";
              var l = this.clone();
              l.negative = 0;
              while (!l.isZero()) {
                var m = l.modrn(a).toString(t);
                ((l = l.idivn(a)),
                  (r = l.isZero() ? m + r : d[u - m.length] + m + r));
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
          var m = function (t, e) {
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
          function v(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var i = (t.length + e.length) | 0;
            ((r.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | e.words[0],
              s = n * o,
              f = 67108863 & s,
              h = (s / 67108864) | 0;
            r.words[0] = f;
            for (var u = 1; u < i; u++) {
              for (
                var a = h >>> 26,
                  l = 67108863 & h,
                  d = Math.min(u, e.length - 1),
                  c = Math.max(0, u - t.length + 1);
                c <= d;
                c++
              ) {
                var p = (u - c) | 0;
                ((n = 0 | t.words[p]),
                  (o = 0 | e.words[c]),
                  (s = n * o + l),
                  (a += (s / 67108864) | 0),
                  (l = 67108863 & s));
              }
              ((r.words[u] = 0 | l), (h = 0 | a));
            }
            return (0 !== h ? (r.words[u] = 0 | h) : r.length--, r._strip());
          }
          ((o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var n = this.byteLength(),
              o = r || Math.max(1, n);
            (i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"));
            var s = m(t, o),
              f = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + f](s, n), s);
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
          var y = function (t, e, r) {
            var i,
              n,
              o,
              s = t.words,
              f = e.words,
              h = r.words,
              u = 0,
              a = 0 | s[0],
              l = 8191 & a,
              d = a >>> 13,
              c = 0 | s[1],
              p = 8191 & c,
              m = c >>> 13,
              g = 0 | s[2],
              v = 8191 & g,
              y = g >>> 13,
              b = 0 | s[3],
              w = 8191 & b,
              M = b >>> 13,
              E = 0 | s[4],
              A = 8191 & E,
              _ = E >>> 13,
              S = 0 | s[5],
              I = 8191 & S,
              N = S >>> 13,
              x = 0 | s[6],
              P = 8191 & x,
              R = x >>> 13,
              O = 0 | s[7],
              L = 8191 & O,
              T = O >>> 13,
              U = 0 | s[8],
              k = 8191 & U,
              C = U >>> 13,
              D = 0 | s[9],
              q = 8191 & D,
              F = D >>> 13,
              j = 0 | f[0],
              z = 8191 & j,
              B = j >>> 13,
              G = 0 | f[1],
              K = 8191 & G,
              W = G >>> 13,
              Z = 0 | f[2],
              J = 8191 & Z,
              V = Z >>> 13,
              X = 0 | f[3],
              H = 8191 & X,
              Y = X >>> 13,
              $ = 0 | f[4],
              Q = 8191 & $,
              tt = $ >>> 13,
              et = 0 | f[5],
              rt = 8191 & et,
              it = et >>> 13,
              nt = 0 | f[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              ft = 0 | f[7],
              ht = 8191 & ft,
              ut = ft >>> 13,
              at = 0 | f[8],
              lt = 8191 & at,
              dt = at >>> 13,
              ct = 0 | f[9],
              pt = 8191 & ct,
              mt = ct >>> 13;
            ((r.negative = t.negative ^ e.negative),
              (r.length = 19),
              (i = Math.imul(l, z)),
              (n = Math.imul(l, B)),
              (n = (n + Math.imul(d, z)) | 0),
              (o = Math.imul(d, B)));
            var gt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (i = Math.imul(p, z)),
              (n = Math.imul(p, B)),
              (n = (n + Math.imul(m, z)) | 0),
              (o = Math.imul(m, B)),
              (i = (i + Math.imul(l, K)) | 0),
              (n = (n + Math.imul(l, W)) | 0),
              (n = (n + Math.imul(d, K)) | 0),
              (o = (o + Math.imul(d, W)) | 0));
            var vt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(v, z)),
              (n = Math.imul(v, B)),
              (n = (n + Math.imul(y, z)) | 0),
              (o = Math.imul(y, B)),
              (i = (i + Math.imul(p, K)) | 0),
              (n = (n + Math.imul(p, W)) | 0),
              (n = (n + Math.imul(m, K)) | 0),
              (o = (o + Math.imul(m, W)) | 0),
              (i = (i + Math.imul(l, J)) | 0),
              (n = (n + Math.imul(l, V)) | 0),
              (n = (n + Math.imul(d, J)) | 0),
              (o = (o + Math.imul(d, V)) | 0));
            var yt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(w, z)),
              (n = Math.imul(w, B)),
              (n = (n + Math.imul(M, z)) | 0),
              (o = Math.imul(M, B)),
              (i = (i + Math.imul(v, K)) | 0),
              (n = (n + Math.imul(v, W)) | 0),
              (n = (n + Math.imul(y, K)) | 0),
              (o = (o + Math.imul(y, W)) | 0),
              (i = (i + Math.imul(p, J)) | 0),
              (n = (n + Math.imul(p, V)) | 0),
              (n = (n + Math.imul(m, J)) | 0),
              (o = (o + Math.imul(m, V)) | 0),
              (i = (i + Math.imul(l, H)) | 0),
              (n = (n + Math.imul(l, Y)) | 0),
              (n = (n + Math.imul(d, H)) | 0),
              (o = (o + Math.imul(d, Y)) | 0));
            var bt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(A, z)),
              (n = Math.imul(A, B)),
              (n = (n + Math.imul(_, z)) | 0),
              (o = Math.imul(_, B)),
              (i = (i + Math.imul(w, K)) | 0),
              (n = (n + Math.imul(w, W)) | 0),
              (n = (n + Math.imul(M, K)) | 0),
              (o = (o + Math.imul(M, W)) | 0),
              (i = (i + Math.imul(v, J)) | 0),
              (n = (n + Math.imul(v, V)) | 0),
              (n = (n + Math.imul(y, J)) | 0),
              (o = (o + Math.imul(y, V)) | 0),
              (i = (i + Math.imul(p, H)) | 0),
              (n = (n + Math.imul(p, Y)) | 0),
              (n = (n + Math.imul(m, H)) | 0),
              (o = (o + Math.imul(m, Y)) | 0),
              (i = (i + Math.imul(l, Q)) | 0),
              (n = (n + Math.imul(l, tt)) | 0),
              (n = (n + Math.imul(d, Q)) | 0),
              (o = (o + Math.imul(d, tt)) | 0));
            var wt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(I, z)),
              (n = Math.imul(I, B)),
              (n = (n + Math.imul(N, z)) | 0),
              (o = Math.imul(N, B)),
              (i = (i + Math.imul(A, K)) | 0),
              (n = (n + Math.imul(A, W)) | 0),
              (n = (n + Math.imul(_, K)) | 0),
              (o = (o + Math.imul(_, W)) | 0),
              (i = (i + Math.imul(w, J)) | 0),
              (n = (n + Math.imul(w, V)) | 0),
              (n = (n + Math.imul(M, J)) | 0),
              (o = (o + Math.imul(M, V)) | 0),
              (i = (i + Math.imul(v, H)) | 0),
              (n = (n + Math.imul(v, Y)) | 0),
              (n = (n + Math.imul(y, H)) | 0),
              (o = (o + Math.imul(y, Y)) | 0),
              (i = (i + Math.imul(p, Q)) | 0),
              (n = (n + Math.imul(p, tt)) | 0),
              (n = (n + Math.imul(m, Q)) | 0),
              (o = (o + Math.imul(m, tt)) | 0),
              (i = (i + Math.imul(l, rt)) | 0),
              (n = (n + Math.imul(l, it)) | 0),
              (n = (n + Math.imul(d, rt)) | 0),
              (o = (o + Math.imul(d, it)) | 0));
            var Mt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(P, z)),
              (n = Math.imul(P, B)),
              (n = (n + Math.imul(R, z)) | 0),
              (o = Math.imul(R, B)),
              (i = (i + Math.imul(I, K)) | 0),
              (n = (n + Math.imul(I, W)) | 0),
              (n = (n + Math.imul(N, K)) | 0),
              (o = (o + Math.imul(N, W)) | 0),
              (i = (i + Math.imul(A, J)) | 0),
              (n = (n + Math.imul(A, V)) | 0),
              (n = (n + Math.imul(_, J)) | 0),
              (o = (o + Math.imul(_, V)) | 0),
              (i = (i + Math.imul(w, H)) | 0),
              (n = (n + Math.imul(w, Y)) | 0),
              (n = (n + Math.imul(M, H)) | 0),
              (o = (o + Math.imul(M, Y)) | 0),
              (i = (i + Math.imul(v, Q)) | 0),
              (n = (n + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(y, Q)) | 0),
              (o = (o + Math.imul(y, tt)) | 0),
              (i = (i + Math.imul(p, rt)) | 0),
              (n = (n + Math.imul(p, it)) | 0),
              (n = (n + Math.imul(m, rt)) | 0),
              (o = (o + Math.imul(m, it)) | 0),
              (i = (i + Math.imul(l, ot)) | 0),
              (n = (n + Math.imul(l, st)) | 0),
              (n = (n + Math.imul(d, ot)) | 0),
              (o = (o + Math.imul(d, st)) | 0));
            var Et = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(L, z)),
              (n = Math.imul(L, B)),
              (n = (n + Math.imul(T, z)) | 0),
              (o = Math.imul(T, B)),
              (i = (i + Math.imul(P, K)) | 0),
              (n = (n + Math.imul(P, W)) | 0),
              (n = (n + Math.imul(R, K)) | 0),
              (o = (o + Math.imul(R, W)) | 0),
              (i = (i + Math.imul(I, J)) | 0),
              (n = (n + Math.imul(I, V)) | 0),
              (n = (n + Math.imul(N, J)) | 0),
              (o = (o + Math.imul(N, V)) | 0),
              (i = (i + Math.imul(A, H)) | 0),
              (n = (n + Math.imul(A, Y)) | 0),
              (n = (n + Math.imul(_, H)) | 0),
              (o = (o + Math.imul(_, Y)) | 0),
              (i = (i + Math.imul(w, Q)) | 0),
              (n = (n + Math.imul(w, tt)) | 0),
              (n = (n + Math.imul(M, Q)) | 0),
              (o = (o + Math.imul(M, tt)) | 0),
              (i = (i + Math.imul(v, rt)) | 0),
              (n = (n + Math.imul(v, it)) | 0),
              (n = (n + Math.imul(y, rt)) | 0),
              (o = (o + Math.imul(y, it)) | 0),
              (i = (i + Math.imul(p, ot)) | 0),
              (n = (n + Math.imul(p, st)) | 0),
              (n = (n + Math.imul(m, ot)) | 0),
              (o = (o + Math.imul(m, st)) | 0),
              (i = (i + Math.imul(l, ht)) | 0),
              (n = (n + Math.imul(l, ut)) | 0),
              (n = (n + Math.imul(d, ht)) | 0),
              (o = (o + Math.imul(d, ut)) | 0));
            var At = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(k, z)),
              (n = Math.imul(k, B)),
              (n = (n + Math.imul(C, z)) | 0),
              (o = Math.imul(C, B)),
              (i = (i + Math.imul(L, K)) | 0),
              (n = (n + Math.imul(L, W)) | 0),
              (n = (n + Math.imul(T, K)) | 0),
              (o = (o + Math.imul(T, W)) | 0),
              (i = (i + Math.imul(P, J)) | 0),
              (n = (n + Math.imul(P, V)) | 0),
              (n = (n + Math.imul(R, J)) | 0),
              (o = (o + Math.imul(R, V)) | 0),
              (i = (i + Math.imul(I, H)) | 0),
              (n = (n + Math.imul(I, Y)) | 0),
              (n = (n + Math.imul(N, H)) | 0),
              (o = (o + Math.imul(N, Y)) | 0),
              (i = (i + Math.imul(A, Q)) | 0),
              (n = (n + Math.imul(A, tt)) | 0),
              (n = (n + Math.imul(_, Q)) | 0),
              (o = (o + Math.imul(_, tt)) | 0),
              (i = (i + Math.imul(w, rt)) | 0),
              (n = (n + Math.imul(w, it)) | 0),
              (n = (n + Math.imul(M, rt)) | 0),
              (o = (o + Math.imul(M, it)) | 0),
              (i = (i + Math.imul(v, ot)) | 0),
              (n = (n + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(y, ot)) | 0),
              (o = (o + Math.imul(y, st)) | 0),
              (i = (i + Math.imul(p, ht)) | 0),
              (n = (n + Math.imul(p, ut)) | 0),
              (n = (n + Math.imul(m, ht)) | 0),
              (o = (o + Math.imul(m, ut)) | 0),
              (i = (i + Math.imul(l, lt)) | 0),
              (n = (n + Math.imul(l, dt)) | 0),
              (n = (n + Math.imul(d, lt)) | 0),
              (o = (o + Math.imul(d, dt)) | 0));
            var _t = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(q, z)),
              (n = Math.imul(q, B)),
              (n = (n + Math.imul(F, z)) | 0),
              (o = Math.imul(F, B)),
              (i = (i + Math.imul(k, K)) | 0),
              (n = (n + Math.imul(k, W)) | 0),
              (n = (n + Math.imul(C, K)) | 0),
              (o = (o + Math.imul(C, W)) | 0),
              (i = (i + Math.imul(L, J)) | 0),
              (n = (n + Math.imul(L, V)) | 0),
              (n = (n + Math.imul(T, J)) | 0),
              (o = (o + Math.imul(T, V)) | 0),
              (i = (i + Math.imul(P, H)) | 0),
              (n = (n + Math.imul(P, Y)) | 0),
              (n = (n + Math.imul(R, H)) | 0),
              (o = (o + Math.imul(R, Y)) | 0),
              (i = (i + Math.imul(I, Q)) | 0),
              (n = (n + Math.imul(I, tt)) | 0),
              (n = (n + Math.imul(N, Q)) | 0),
              (o = (o + Math.imul(N, tt)) | 0),
              (i = (i + Math.imul(A, rt)) | 0),
              (n = (n + Math.imul(A, it)) | 0),
              (n = (n + Math.imul(_, rt)) | 0),
              (o = (o + Math.imul(_, it)) | 0),
              (i = (i + Math.imul(w, ot)) | 0),
              (n = (n + Math.imul(w, st)) | 0),
              (n = (n + Math.imul(M, ot)) | 0),
              (o = (o + Math.imul(M, st)) | 0),
              (i = (i + Math.imul(v, ht)) | 0),
              (n = (n + Math.imul(v, ut)) | 0),
              (n = (n + Math.imul(y, ht)) | 0),
              (o = (o + Math.imul(y, ut)) | 0),
              (i = (i + Math.imul(p, lt)) | 0),
              (n = (n + Math.imul(p, dt)) | 0),
              (n = (n + Math.imul(m, lt)) | 0),
              (o = (o + Math.imul(m, dt)) | 0),
              (i = (i + Math.imul(l, pt)) | 0),
              (n = (n + Math.imul(l, mt)) | 0),
              (n = (n + Math.imul(d, pt)) | 0),
              (o = (o + Math.imul(d, mt)) | 0));
            var St = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(q, K)),
              (n = Math.imul(q, W)),
              (n = (n + Math.imul(F, K)) | 0),
              (o = Math.imul(F, W)),
              (i = (i + Math.imul(k, J)) | 0),
              (n = (n + Math.imul(k, V)) | 0),
              (n = (n + Math.imul(C, J)) | 0),
              (o = (o + Math.imul(C, V)) | 0),
              (i = (i + Math.imul(L, H)) | 0),
              (n = (n + Math.imul(L, Y)) | 0),
              (n = (n + Math.imul(T, H)) | 0),
              (o = (o + Math.imul(T, Y)) | 0),
              (i = (i + Math.imul(P, Q)) | 0),
              (n = (n + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(R, Q)) | 0),
              (o = (o + Math.imul(R, tt)) | 0),
              (i = (i + Math.imul(I, rt)) | 0),
              (n = (n + Math.imul(I, it)) | 0),
              (n = (n + Math.imul(N, rt)) | 0),
              (o = (o + Math.imul(N, it)) | 0),
              (i = (i + Math.imul(A, ot)) | 0),
              (n = (n + Math.imul(A, st)) | 0),
              (n = (n + Math.imul(_, ot)) | 0),
              (o = (o + Math.imul(_, st)) | 0),
              (i = (i + Math.imul(w, ht)) | 0),
              (n = (n + Math.imul(w, ut)) | 0),
              (n = (n + Math.imul(M, ht)) | 0),
              (o = (o + Math.imul(M, ut)) | 0),
              (i = (i + Math.imul(v, lt)) | 0),
              (n = (n + Math.imul(v, dt)) | 0),
              (n = (n + Math.imul(y, lt)) | 0),
              (o = (o + Math.imul(y, dt)) | 0),
              (i = (i + Math.imul(p, pt)) | 0),
              (n = (n + Math.imul(p, mt)) | 0),
              (n = (n + Math.imul(m, pt)) | 0),
              (o = (o + Math.imul(m, mt)) | 0));
            var It = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (i = Math.imul(q, J)),
              (n = Math.imul(q, V)),
              (n = (n + Math.imul(F, J)) | 0),
              (o = Math.imul(F, V)),
              (i = (i + Math.imul(k, H)) | 0),
              (n = (n + Math.imul(k, Y)) | 0),
              (n = (n + Math.imul(C, H)) | 0),
              (o = (o + Math.imul(C, Y)) | 0),
              (i = (i + Math.imul(L, Q)) | 0),
              (n = (n + Math.imul(L, tt)) | 0),
              (n = (n + Math.imul(T, Q)) | 0),
              (o = (o + Math.imul(T, tt)) | 0),
              (i = (i + Math.imul(P, rt)) | 0),
              (n = (n + Math.imul(P, it)) | 0),
              (n = (n + Math.imul(R, rt)) | 0),
              (o = (o + Math.imul(R, it)) | 0),
              (i = (i + Math.imul(I, ot)) | 0),
              (n = (n + Math.imul(I, st)) | 0),
              (n = (n + Math.imul(N, ot)) | 0),
              (o = (o + Math.imul(N, st)) | 0),
              (i = (i + Math.imul(A, ht)) | 0),
              (n = (n + Math.imul(A, ut)) | 0),
              (n = (n + Math.imul(_, ht)) | 0),
              (o = (o + Math.imul(_, ut)) | 0),
              (i = (i + Math.imul(w, lt)) | 0),
              (n = (n + Math.imul(w, dt)) | 0),
              (n = (n + Math.imul(M, lt)) | 0),
              (o = (o + Math.imul(M, dt)) | 0),
              (i = (i + Math.imul(v, pt)) | 0),
              (n = (n + Math.imul(v, mt)) | 0),
              (n = (n + Math.imul(y, pt)) | 0),
              (o = (o + Math.imul(y, mt)) | 0));
            var Nt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (i = Math.imul(q, H)),
              (n = Math.imul(q, Y)),
              (n = (n + Math.imul(F, H)) | 0),
              (o = Math.imul(F, Y)),
              (i = (i + Math.imul(k, Q)) | 0),
              (n = (n + Math.imul(k, tt)) | 0),
              (n = (n + Math.imul(C, Q)) | 0),
              (o = (o + Math.imul(C, tt)) | 0),
              (i = (i + Math.imul(L, rt)) | 0),
              (n = (n + Math.imul(L, it)) | 0),
              (n = (n + Math.imul(T, rt)) | 0),
              (o = (o + Math.imul(T, it)) | 0),
              (i = (i + Math.imul(P, ot)) | 0),
              (n = (n + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(R, ot)) | 0),
              (o = (o + Math.imul(R, st)) | 0),
              (i = (i + Math.imul(I, ht)) | 0),
              (n = (n + Math.imul(I, ut)) | 0),
              (n = (n + Math.imul(N, ht)) | 0),
              (o = (o + Math.imul(N, ut)) | 0),
              (i = (i + Math.imul(A, lt)) | 0),
              (n = (n + Math.imul(A, dt)) | 0),
              (n = (n + Math.imul(_, lt)) | 0),
              (o = (o + Math.imul(_, dt)) | 0),
              (i = (i + Math.imul(w, pt)) | 0),
              (n = (n + Math.imul(w, mt)) | 0),
              (n = (n + Math.imul(M, pt)) | 0),
              (o = (o + Math.imul(M, mt)) | 0));
            var xt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(q, Q)),
              (n = Math.imul(q, tt)),
              (n = (n + Math.imul(F, Q)) | 0),
              (o = Math.imul(F, tt)),
              (i = (i + Math.imul(k, rt)) | 0),
              (n = (n + Math.imul(k, it)) | 0),
              (n = (n + Math.imul(C, rt)) | 0),
              (o = (o + Math.imul(C, it)) | 0),
              (i = (i + Math.imul(L, ot)) | 0),
              (n = (n + Math.imul(L, st)) | 0),
              (n = (n + Math.imul(T, ot)) | 0),
              (o = (o + Math.imul(T, st)) | 0),
              (i = (i + Math.imul(P, ht)) | 0),
              (n = (n + Math.imul(P, ut)) | 0),
              (n = (n + Math.imul(R, ht)) | 0),
              (o = (o + Math.imul(R, ut)) | 0),
              (i = (i + Math.imul(I, lt)) | 0),
              (n = (n + Math.imul(I, dt)) | 0),
              (n = (n + Math.imul(N, lt)) | 0),
              (o = (o + Math.imul(N, dt)) | 0),
              (i = (i + Math.imul(A, pt)) | 0),
              (n = (n + Math.imul(A, mt)) | 0),
              (n = (n + Math.imul(_, pt)) | 0),
              (o = (o + Math.imul(_, mt)) | 0));
            var Pt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(q, rt)),
              (n = Math.imul(q, it)),
              (n = (n + Math.imul(F, rt)) | 0),
              (o = Math.imul(F, it)),
              (i = (i + Math.imul(k, ot)) | 0),
              (n = (n + Math.imul(k, st)) | 0),
              (n = (n + Math.imul(C, ot)) | 0),
              (o = (o + Math.imul(C, st)) | 0),
              (i = (i + Math.imul(L, ht)) | 0),
              (n = (n + Math.imul(L, ut)) | 0),
              (n = (n + Math.imul(T, ht)) | 0),
              (o = (o + Math.imul(T, ut)) | 0),
              (i = (i + Math.imul(P, lt)) | 0),
              (n = (n + Math.imul(P, dt)) | 0),
              (n = (n + Math.imul(R, lt)) | 0),
              (o = (o + Math.imul(R, dt)) | 0),
              (i = (i + Math.imul(I, pt)) | 0),
              (n = (n + Math.imul(I, mt)) | 0),
              (n = (n + Math.imul(N, pt)) | 0),
              (o = (o + Math.imul(N, mt)) | 0));
            var Rt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(q, ot)),
              (n = Math.imul(q, st)),
              (n = (n + Math.imul(F, ot)) | 0),
              (o = Math.imul(F, st)),
              (i = (i + Math.imul(k, ht)) | 0),
              (n = (n + Math.imul(k, ut)) | 0),
              (n = (n + Math.imul(C, ht)) | 0),
              (o = (o + Math.imul(C, ut)) | 0),
              (i = (i + Math.imul(L, lt)) | 0),
              (n = (n + Math.imul(L, dt)) | 0),
              (n = (n + Math.imul(T, lt)) | 0),
              (o = (o + Math.imul(T, dt)) | 0),
              (i = (i + Math.imul(P, pt)) | 0),
              (n = (n + Math.imul(P, mt)) | 0),
              (n = (n + Math.imul(R, pt)) | 0),
              (o = (o + Math.imul(R, mt)) | 0));
            var Ot = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(q, ht)),
              (n = Math.imul(q, ut)),
              (n = (n + Math.imul(F, ht)) | 0),
              (o = Math.imul(F, ut)),
              (i = (i + Math.imul(k, lt)) | 0),
              (n = (n + Math.imul(k, dt)) | 0),
              (n = (n + Math.imul(C, lt)) | 0),
              (o = (o + Math.imul(C, dt)) | 0),
              (i = (i + Math.imul(L, pt)) | 0),
              (n = (n + Math.imul(L, mt)) | 0),
              (n = (n + Math.imul(T, pt)) | 0),
              (o = (o + Math.imul(T, mt)) | 0));
            var Lt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Lt >>> 26)) | 0),
              (Lt &= 67108863),
              (i = Math.imul(q, lt)),
              (n = Math.imul(q, dt)),
              (n = (n + Math.imul(F, lt)) | 0),
              (o = Math.imul(F, dt)),
              (i = (i + Math.imul(k, pt)) | 0),
              (n = (n + Math.imul(k, mt)) | 0),
              (n = (n + Math.imul(C, pt)) | 0),
              (o = (o + Math.imul(C, mt)) | 0));
            var Tt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((o + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (i = Math.imul(q, pt)),
              (n = Math.imul(q, mt)),
              (n = (n + Math.imul(F, pt)) | 0),
              (o = Math.imul(F, mt)));
            var Ut = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (u = (((o + (n >>> 13)) | 0) + (Ut >>> 26)) | 0),
              (Ut &= 67108863),
              (h[0] = gt),
              (h[1] = vt),
              (h[2] = yt),
              (h[3] = bt),
              (h[4] = wt),
              (h[5] = Mt),
              (h[6] = Et),
              (h[7] = At),
              (h[8] = _t),
              (h[9] = St),
              (h[10] = It),
              (h[11] = Nt),
              (h[12] = xt),
              (h[13] = Pt),
              (h[14] = Rt),
              (h[15] = Ot),
              (h[16] = Lt),
              (h[17] = Tt),
              (h[18] = Ut),
              0 !== u && ((h[19] = u), r.length++),
              r
            );
          };
          function b(t, e, r) {
            ((r.negative = e.negative ^ t.negative),
              (r.length = t.length + e.length));
            for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
              var s = n;
              n = 0;
              for (
                var f = 67108863 & i,
                  h = Math.min(o, e.length - 1),
                  u = Math.max(0, o - t.length + 1);
                u <= h;
                u++
              ) {
                var a = o - u,
                  l = 0 | t.words[a],
                  d = 0 | e.words[u],
                  c = l * d,
                  p = 67108863 & c;
                ((s = (s + ((c / 67108864) | 0)) | 0),
                  (p = (p + f) | 0),
                  (f = 67108863 & p),
                  (s = (s + (p >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((r.words[o] = f), (i = s), (s = n));
            }
            return (0 !== i ? (r.words[o] = i) : r.length--, r._strip());
          }
          function w(t, e, r) {
            return b(t, e, r);
          }
          function M(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (y = v),
            (o.prototype.mulTo = function (t, e) {
              var r,
                i = this.length + t.length;
              return (
                (r =
                  10 === this.length && 10 === t.length
                    ? y(this, t, e)
                    : i < 63
                      ? v(this, t, e)
                      : i < 1024
                        ? b(this, t, e)
                        : w(this, t, e)),
                r
              );
            }),
            (M.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), r = o.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                e[i] = this.revBin(i, r, t);
              return e;
            }),
            (M.prototype.revBin = function (t, e, r) {
              if (0 === t || t === r - 1) return t;
              for (var i = 0, n = 0; n < e; n++)
                ((i |= (1 & t) << (e - n - 1)), (t >>= 1));
              return i;
            }),
            (M.prototype.permute = function (t, e, r, i, n, o) {
              for (var s = 0; s < o; s++) ((i[s] = e[t[s]]), (n[s] = r[t[s]]));
            }),
            (M.prototype.transform = function (t, e, r, i, n, o) {
              this.permute(o, t, e, r, i, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var f = s << 1,
                    h = Math.cos((2 * Math.PI) / f),
                    u = Math.sin((2 * Math.PI) / f),
                    a = 0;
                  a < n;
                  a += f
                )
                  for (var l = h, d = u, c = 0; c < s; c++) {
                    var p = r[a + c],
                      m = i[a + c],
                      g = r[a + c + s],
                      v = i[a + c + s],
                      y = l * g - d * v;
                    ((v = l * v + d * g),
                      (g = y),
                      (r[a + c] = p + g),
                      (i[a + c] = m + v),
                      (r[a + c + s] = p - g),
                      (i[a + c + s] = m - v),
                      c !== f &&
                        ((y = h * l - u * d), (d = h * d + u * l), (l = y)));
                  }
            }),
            (M.prototype.guessLen13b = function (t, e) {
              var r = 1 | Math.max(e, t),
                i = 1 & r,
                n = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (M.prototype.conjugate = function (t, e, r) {
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
            (M.prototype.normalize13b = function (t, e) {
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
            (M.prototype.convert13b = function (t, e, r, n) {
              for (var o = 0, s = 0; s < e; s++)
                ((o += 0 | t[s]),
                  (r[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * e; s < n; ++s) r[s] = 0;
              (i(0 === o), i(0 === (-8192 & o)));
            }),
            (M.prototype.stub = function (t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
              return e;
            }),
            (M.prototype.mulp = function (t, e, r) {
              var i = 2 * this.guessLen13b(t.length, e.length),
                n = this.makeRBT(i),
                o = this.stub(i),
                s = new Array(i),
                f = new Array(i),
                h = new Array(i),
                u = new Array(i),
                a = new Array(i),
                l = new Array(i),
                d = r.words;
              ((d.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(e.words, e.length, u, i),
                this.transform(s, o, f, h, i, n),
                this.transform(u, o, a, l, i, n));
              for (var c = 0; c < i; c++) {
                var p = f[c] * a[c] - h[c] * l[c];
                ((h[c] = f[c] * l[c] + h[c] * a[c]), (f[c] = p));
              }
              return (
                this.conjugate(f, h, i),
                this.transform(f, h, d, o, i, n),
                this.conjugate(d, o, i),
                this.normalize13b(d, i),
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
                w(this, t, e)
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
                  var f = this.words[e] & o,
                    h = ((0 | this.words[e]) - f) << r;
                  ((this.words[e] = h | s), (s = f >>> (26 - r)));
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
                f = 67108863 ^ ((67108863 >>> o) << o),
                h = r;
              if (((n -= s), (n = Math.max(0, n)), h)) {
                for (var u = 0; u < s; u++) h.words[u] = this.words[u];
                h.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, u = 0; u < this.length; u++)
                  this.words[u] = this.words[u + s];
              else ((this.words[0] = 0), (this.length = 1));
              var a = 0;
              for (u = this.length - 1; u >= 0 && (0 !== a || u >= n); u--) {
                var l = 0 | this.words[u];
                ((this.words[u] = (a << (26 - o)) | (l >>> o)), (a = l & f));
              }
              return (
                h && 0 !== a && (h.words[h.length++] = a),
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
              var f = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + r]) + f;
                var h = (0 | t.words[n]) * e;
                ((o -= 67108863 & h),
                  (f = (o >> 26) - ((h / 67108864) | 0)),
                  (this.words[n + r] = 67108863 & o));
              }
              for (; n < this.length - r; n++)
                ((o = (0 | this.words[n + r]) + f),
                  (f = o >> 26),
                  (this.words[n + r] = 67108863 & o));
              if (0 === f) return this._strip();
              for (i(-1 === f), f = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + f),
                  (f = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, e) {
              var r = this.length - t.length,
                i = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                f = this._countBits(s);
              ((r = 26 - f),
                0 !== r &&
                  ((n = n.ushln(r)),
                  i.iushln(r),
                  (s = 0 | n.words[n.length - 1])));
              var h,
                u = i.length - n.length;
              if ("mod" !== e) {
                ((h = new o(null)),
                  (h.length = u + 1),
                  (h.words = new Array(h.length)));
                for (var a = 0; a < h.length; a++) h.words[a] = 0;
              }
              var l = i.clone()._ishlnsubmul(n, 1, u);
              0 === l.negative && ((i = l), h && (h.words[u] = 1));
              for (var d = u - 1; d >= 0; d--) {
                var c =
                  67108864 * (0 | i.words[n.length + d]) +
                  (0 | i.words[n.length + d - 1]);
                ((c = Math.min((c / s) | 0, 67108863)),
                  i._ishlnsubmul(n, c, d));
                while (0 !== i.negative)
                  (c--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, d),
                    i.isZero() || (i.negative ^= 1));
                h && (h.words[d] = c);
              }
              return (
                h && h._strip(),
                i._strip(),
                "div" !== e && 0 !== r && i.iushrn(r),
                { div: h || null, mod: i }
              );
            }),
            (o.prototype.divmod = function (t, e, r) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((f = this.neg().divmod(t, e)),
                      "mod" !== e && (n = f.div.neg()),
                      "div" !== e &&
                        ((s = f.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((f = this.divmod(t.neg(), e)),
                        "mod" !== e && (n = f.div.neg()),
                        { div: n, mod: f.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((f = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((s = f.mod.neg()),
                            r && 0 !== s.negative && s.isub(t)),
                          { div: f.div, mod: s })
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
              var n, s, f;
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
                f = new o(0),
                h = new o(1),
                u = 0;
              while (e.isEven() && r.isEven()) (e.iushrn(1), r.iushrn(1), ++u);
              var a = r.clone(),
                l = e.clone();
              while (!e.isZero()) {
                for (
                  var d = 0, c = 1;
                  0 === (e.words[0] & c) && d < 26;
                  ++d, c <<= 1
                );
                if (d > 0) {
                  e.iushrn(d);
                  while (d-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(a), s.isub(l)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var p = 0, m = 1;
                  0 === (r.words[0] & m) && p < 26;
                  ++p, m <<= 1
                );
                if (p > 0) {
                  r.iushrn(p);
                  while (p-- > 0)
                    ((f.isOdd() || h.isOdd()) && (f.iadd(a), h.isub(l)),
                      f.iushrn(1),
                      h.iushrn(1));
                }
                e.cmp(r) >= 0
                  ? (e.isub(r), n.isub(f), s.isub(h))
                  : (r.isub(e), f.isub(n), h.isub(s));
              }
              return { a: f, b: h, gcd: r.iushln(u) };
            }),
            (o.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                s = new o(1),
                f = new o(0),
                h = r.clone();
              while (e.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var u = 0, a = 1;
                  0 === (e.words[0] & a) && u < 26;
                  ++u, a <<= 1
                );
                if (u > 0) {
                  e.iushrn(u);
                  while (u-- > 0) (s.isOdd() && s.iadd(h), s.iushrn(1));
                }
                for (
                  var l = 0, d = 1;
                  0 === (r.words[0] & d) && l < 26;
                  ++l, d <<= 1
                );
                if (l > 0) {
                  r.iushrn(l);
                  while (l-- > 0) (f.isOdd() && f.iadd(h), f.iushrn(1));
                }
                e.cmp(r) >= 0 ? (e.isub(r), s.isub(f)) : (r.isub(e), f.isub(s));
              }
              return (
                (n = 0 === e.cmpn(1) ? s : f),
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
                var f = 0 | this.words[s];
                ((f += o),
                  (o = f >>> 26),
                  (f &= 67108863),
                  (this.words[s] = f));
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
              return new x(t);
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
          var E = { k256: null, p224: null, p192: null, p25519: null };
          function A(t, e) {
            ((this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function _() {
            A.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function S() {
            A.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function I() {
            A.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function N() {
            A.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function x(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function P(t) {
            (x.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((A.prototype._tmp = function () {
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (A.prototype.ireduce = function (t) {
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
            (A.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (A.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(_, A),
            (_.prototype.split = function (t, e) {
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
            (_.prototype.imulK = function (t) {
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
            n(S, A),
            n(I, A),
            n(N, A),
            (N.prototype.imulK = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 19 * (0 | t.words[r]) + e,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[r] = n), (e = i));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (o._prime = function (t) {
              if (E[t]) return E[t];
              var e;
              if ("k256" === t) e = new _();
              else if ("p224" === t) e = new S();
              else if ("p192" === t) e = new I();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new N();
              }
              return ((E[t] = e), e);
            }),
            (x.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (x.prototype._verify2 = function (t, e) {
              (i(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (x.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (a(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (x.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (x.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (x.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (x.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (x.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (x.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (x.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (x.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (x.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (x.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (x.prototype.sqrt = function (t) {
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
              var f = new o(1).toRed(this),
                h = f.redNeg(),
                u = this.m.subn(1).iushrn(1),
                a = this.m.bitLength();
              a = new o(2 * a * a).toRed(this);
              while (0 !== this.pow(a, u).cmp(h)) a.redIAdd(h);
              var l = this.pow(a, n),
                d = this.pow(t, n.addn(1).iushrn(1)),
                c = this.pow(t, n),
                p = s;
              while (0 !== c.cmp(f)) {
                for (var m = c, g = 0; 0 !== m.cmp(f); g++) m = m.redSqr();
                i(g < p);
                var v = this.pow(l, new o(1).iushln(p - g - 1));
                ((d = d.redMul(v)),
                  (l = v.redSqr()),
                  (c = c.redMul(l)),
                  (p = g));
              }
              return d;
            }),
            (x.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (x.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var r = 4,
                i = new Array(1 << r);
              ((i[0] = new o(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var s = i[0],
                f = 0,
                h = 0,
                u = e.bitLength() % 26;
              for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                for (var a = e.words[n], l = u - 1; l >= 0; l--) {
                  var d = (a >> l) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== d || 0 !== f
                      ? ((f <<= 1),
                        (f |= d),
                        h++,
                        (h === r || (0 === n && 0 === l)) &&
                          ((s = this.mul(s, i[f])), (h = 0), (f = 0)))
                      : (h = 0));
                }
                u = 26;
              }
              return s;
            }),
            (x.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (x.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (o.mont = function (t) {
              return new P(t);
            }),
            n(P, x),
            (P.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (P.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (P.prototype.imul = function (t, e) {
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
            (P.prototype.mul = function (t, e) {
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
            (P.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, r(20)(t));
    },
    1700: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.arrayify = l),
        (e.concat = d),
        (e.hexConcat = w),
        (e.hexDataLength = y),
        (e.hexDataSlice = b),
        (e.hexStripZeros = E),
        (e.hexValue = M),
        (e.hexZeroPad = A),
        (e.hexlify = v),
        (e.isBytes = a),
        (e.isBytesLike = h),
        (e.isHexString = m),
        (e.joinSignature = S),
        (e.splitSignature = _),
        (e.stripZeros = c),
        (e.zeroPad = p));
      var i = r(289),
        n = r(1702);
      const o = new i.Logger(n.version);
      function s(t) {
        return !!t.toHexString;
      }
      function f(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const e = Array.prototype.slice.call(arguments);
              return f(new Uint8Array(Array.prototype.slice.apply(t, e)));
            }),
          t
        );
      }
      function h(t) {
        return (m(t) && !(t.length % 2)) || a(t);
      }
      function u(t) {
        return "number" === typeof t && t == t && t % 1 === 0;
      }
      function a(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" === typeof t) return !1;
        if (!u(t.length) || t.length < 0) return !1;
        for (let e = 0; e < t.length; e++) {
          const r = t[e];
          if (!u(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function l(t, e) {
        if ((e || (e = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid arrayify value");
          const e = [];
          while (t) (e.unshift(255 & t), (t = parseInt(String(t / 256))));
          return (0 === e.length && e.push(0), f(new Uint8Array(e)));
        }
        if (
          (e.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t) && (t = t.toHexString()),
          m(t))
        ) {
          let r = t.substring(2);
          r.length % 2 &&
            ("left" === e.hexPad
              ? (r = "0" + r)
              : "right" === e.hexPad
                ? (r += "0")
                : o.throwArgumentError("hex data is odd-length", "value", t));
          const i = [];
          for (let t = 0; t < r.length; t += 2)
            i.push(parseInt(r.substring(t, t + 2), 16));
          return f(new Uint8Array(i));
        }
        return a(t)
          ? f(new Uint8Array(t))
          : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function d(t) {
        const e = t.map((t) => l(t)),
          r = e.reduce((t, e) => t + e.length, 0),
          i = new Uint8Array(r);
        return (e.reduce((t, e) => (i.set(e, t), t + e.length), 0), f(i));
      }
      function c(t) {
        let e = l(t);
        if (0 === e.length) return e;
        let r = 0;
        while (r < e.length && 0 === e[r]) r++;
        return (r && (e = e.slice(r)), e);
      }
      function p(t, e) {
        ((t = l(t)),
          t.length > e &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const r = new Uint8Array(e);
        return (r.set(t, e - t.length), f(r));
      }
      function m(t, e) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!e || t.length === 2 + 2 * e)
        );
      }
      const g = "0123456789abcdef";
      function v(t, e) {
        if ((e || (e = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid hexlify value");
          let e = "";
          while (t) ((e = g[15 & t] + e), (t = Math.floor(t / 16)));
          return e.length ? (e.length % 2 && (e = "0" + e), "0x" + e) : "0x00";
        }
        if ("bigint" === typeof t)
          return ((t = t.toString(16)), t.length % 2 ? "0x0" + t : "0x" + t);
        if (
          (e.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t))
        )
          return t.toHexString();
        if (m(t))
          return (
            t.length % 2 &&
              ("left" === e.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === e.hexPad
                  ? (t += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (a(t)) {
          let e = "0x";
          for (let r = 0; r < t.length; r++) {
            let i = t[r];
            e += g[(240 & i) >> 4] + g[15 & i];
          }
          return e;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function y(t) {
        if ("string" !== typeof t) t = v(t);
        else if (!m(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function b(t, e, r) {
        return (
          "string" !== typeof t
            ? (t = v(t))
            : (!m(t) || t.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", t),
          (e = 2 + 2 * e),
          null != r ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
        );
      }
      function w(t) {
        let e = "0x";
        return (
          t.forEach((t) => {
            e += v(t).substring(2);
          }),
          e
        );
      }
      function M(t) {
        const e = E(v(t, { hexPad: "left" }));
        return "0x" === e ? "0x0" : e;
      }
      function E(t) {
        ("string" !== typeof t && (t = v(t)),
          m(t) || o.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2)));
        let e = 0;
        while (e < t.length && "0" === t[e]) e++;
        return "0x" + t.substring(e);
      }
      function A(t, e) {
        ("string" !== typeof t
          ? (t = v(t))
          : m(t) || o.throwArgumentError("invalid hex string", "value", t),
          t.length > 2 * e + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (t.length < 2 * e + 2) t = "0x0" + t.substring(2);
        return t;
      }
      function _(t) {
        const e = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (h(t)) {
          let r = l(t);
          (64 === r.length
            ? ((e.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (e.r = v(r.slice(0, 32))),
              (e.s = v(r.slice(32, 64))))
            : 65 === r.length
              ? ((e.r = v(r.slice(0, 32))),
                (e.s = v(r.slice(32, 64))),
                (e.v = r[64]))
              : o.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  t,
                ),
            e.v < 27 &&
              (0 === e.v || 1 === e.v
                ? (e.v += 27)
                : o.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t,
                  )),
            (e.recoveryParam = 1 - (e.v % 2)),
            e.recoveryParam && (r[32] |= 128),
            (e._vs = v(r.slice(32, 64))));
        } else {
          if (
            ((e.r = t.r),
            (e.s = t.s),
            (e.v = t.v),
            (e.recoveryParam = t.recoveryParam),
            (e._vs = t._vs),
            null != e._vs)
          ) {
            const r = p(l(e._vs), 32);
            e._vs = v(r);
            const i = r[0] >= 128 ? 1 : 0;
            (null == e.recoveryParam
              ? (e.recoveryParam = i)
              : e.recoveryParam !== i &&
                o.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t,
                ),
              (r[0] &= 127));
            const n = v(r);
            null == e.s
              ? (e.s = n)
              : e.s !== n &&
                o.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t,
                );
          }
          if (null == e.recoveryParam)
            null == e.v
              ? o.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t,
                )
              : 0 === e.v || 1 === e.v
                ? (e.recoveryParam = e.v)
                : (e.recoveryParam = 1 - (e.v % 2));
          else if (null == e.v) e.v = 27 + e.recoveryParam;
          else {
            const r = 0 === e.v || 1 === e.v ? e.v : 1 - (e.v % 2);
            e.recoveryParam !== r &&
              o.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t,
              );
          }
          (null != e.r && m(e.r)
            ? (e.r = A(e.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t,
              ),
            null != e.s && m(e.s)
              ? (e.s = A(e.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t,
                ));
          const r = l(e.s);
          (r[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", t),
            e.recoveryParam && (r[0] |= 128));
          const i = v(r);
          (e._vs &&
            (m(e._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", t),
            (e._vs = A(e._vs, 32))),
            null == e._vs
              ? (e._vs = i)
              : e._vs !== i &&
                o.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t,
                ));
        }
        return (
          (e.yParityAndS = e._vs),
          (e.compact = e.r + e.yParityAndS.substring(2)),
          e
        );
      }
      function S(t) {
        return (
          (t = _(t)),
          v(d([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    1701: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "logger/5.8.0";
    },
    1702: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "bytes/5.8.0";
    },
    1703: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Description = void 0),
        (e.checkProperties = a),
        (e.deepCopy = m),
        (e.defineReadOnly = f),
        (e.getStatic = h),
        (e.resolveProperties = u),
        (e.shallowCopy = l));
      var i = r(289),
        n = r(1704),
        o = function (t, e, r, i) {
          function n(t) {
            return t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function s(t) {
              try {
                h(i.next(t));
              } catch (e) {
                o(e);
              }
            }
            function f(t) {
              try {
                h(i["throw"](t));
              } catch (e) {
                o(e);
              }
            }
            function h(t) {
              t.done ? r(t.value) : n(t.value).then(s, f);
            }
            h((i = i.apply(t, e || [])).next());
          });
        };
      const s = new i.Logger(n.version);
      function f(t, e, r) {
        Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 });
      }
      function h(t, e) {
        for (let r = 0; r < 32; r++) {
          if (t[e]) return t[e];
          if (!t.prototype || "object" !== typeof t.prototype) break;
          t = Object.getPrototypeOf(t.prototype).constructor;
        }
        return null;
      }
      function u(t) {
        return o(this, void 0, void 0, function* () {
          const e = Object.keys(t).map((e) => {
              const r = t[e];
              return Promise.resolve(r).then((t) => ({ key: e, value: t }));
            }),
            r = yield Promise.all(e);
          return r.reduce((t, e) => ((t[e.key] = e.value), t), {});
        });
      }
      function a(t, e) {
        ((t && "object" === typeof t) ||
          s.throwArgumentError("invalid object", "object", t),
          Object.keys(t).forEach((r) => {
            e[r] ||
              s.throwArgumentError(
                "invalid object key - " + r,
                "transaction:" + r,
                t,
              );
          }));
      }
      function l(t) {
        const e = {};
        for (const r in t) e[r] = t[r];
        return e;
      }
      const d = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function c(t) {
        if (void 0 === t || null === t || d[typeof t]) return !0;
        if (Array.isArray(t) || "object" === typeof t) {
          if (!Object.isFrozen(t)) return !1;
          const r = Object.keys(t);
          for (let i = 0; i < r.length; i++) {
            let n = null;
            try {
              n = t[r[i]];
            } catch (e) {
              continue;
            }
            if (!c(n)) return !1;
          }
          return !0;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function p(t) {
        if (c(t)) return t;
        if (Array.isArray(t)) return Object.freeze(t.map((t) => m(t)));
        if ("object" === typeof t) {
          const e = {};
          for (const r in t) {
            const i = t[r];
            void 0 !== i && f(e, r, m(i));
          }
          return e;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function m(t) {
        return p(t);
      }
      class Description {
        constructor(t) {
          for (const e in t) this[e] = m(t[e]);
        }
      }
      e.Description = Description;
    },
    1704: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "properties/5.8.0";
    },
    1705: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "signing-key/5.7.0";
    },
    289: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Logger = e.LogLevel = e.ErrorCode = void 0));
      var i = r(1701);
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let f = s["default"],
        h = null;
      function u() {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (r) {
                t.push(e);
              }
            }),
            t.length)
          )
            throw new Error("missing " + t.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (t) {
          return t.message;
        }
        return null;
      }
      const a = u();
      var l, d;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(l || (e.LogLevel = l = {})),
        (function (t) {
          ((t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"),
            (t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"),
            (t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"),
            (t["NETWORK_ERROR"] = "NETWORK_ERROR"),
            (t["SERVER_ERROR"] = "SERVER_ERROR"),
            (t["TIMEOUT"] = "TIMEOUT"),
            (t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"),
            (t["NUMERIC_FAULT"] = "NUMERIC_FAULT"),
            (t["MISSING_NEW"] = "MISSING_NEW"),
            (t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"),
            (t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"),
            (t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"),
            (t["CALL_EXCEPTION"] = "CALL_EXCEPTION"),
            (t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"),
            (t["NONCE_EXPIRED"] = "NONCE_EXPIRED"),
            (t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"),
            (t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT"),
            (t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"),
            (t["ACTION_REJECTED"] = "ACTION_REJECTED"));
        })(d || (e.ErrorCode = d = {})));
      const c = "0123456789abcdef";
      class Logger {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, e) {
          const r = t.toLowerCase();
          (null == s[r] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            f > s[r] || console.log.apply(console, e));
        }
        debug() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.DEBUG, e);
        }
        info() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.INFO, e);
        }
        warn() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.WARNING, e);
        }
        makeError(t, e, r) {
          if (o) return this.makeError("censored error", e, {});
          (e || (e = Logger.errors.UNKNOWN_ERROR), r || (r = {}));
          const i = [];
          (Object.keys(r).forEach((t) => {
            const e = r[t];
            try {
              if (e instanceof Uint8Array) {
                let r = "";
                for (let t = 0; t < e.length; t++)
                  ((r += c[e[t] >> 4]), (r += c[15 & e[t]]));
                i.push(t + "=Uint8Array(0x" + r + ")");
              } else i.push(t + "=" + JSON.stringify(e));
            } catch (f) {
              i.push(t + "=" + JSON.stringify(r[t].toString()));
            }
          }),
            i.push("code=" + e),
            i.push("version=" + this.version));
          const n = t;
          let s = "";
          switch (e) {
            case d.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const e = t;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + e;
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
            case d.CALL_EXCEPTION:
            case d.INSUFFICIENT_FUNDS:
            case d.MISSING_NEW:
            case d.NONCE_EXPIRED:
            case d.REPLACEMENT_UNDERPRICED:
            case d.TRANSACTION_REPLACED:
            case d.UNPREDICTABLE_GAS_LIMIT:
              s = e;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            i.length && (t += " (" + i.join(", ") + ")"));
          const f = new Error(t);
          return (
            (f.reason = n),
            (f.code = e),
            Object.keys(r).forEach(function (t) {
              f[t] = r[t];
            }),
            f
          );
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
            argument: e,
            value: r,
          });
        }
        assert(t, e, r, i) {
          t || this.throwError(e, r, i);
        }
        assertArgument(t, e, r, i) {
          t || this.throwArgumentError(e, r, i);
        }
        checkNormalize(t) {
          (null == t && (t = "platform missing String.prototype.normalize"),
            a &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: a },
              ));
        }
        checkSafeUint53(t, e) {
          "number" === typeof t &&
            (null == e && (e = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(e, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(e, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, e, r) {
          ((r = r ? ": " + r : ""),
            t < e &&
              this.throwError(
                "missing argument" + r,
                Logger.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: e },
              ),
            t > e &&
              this.throwError(
                "too many arguments" + r,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: e },
              ));
        }
        checkNew(t, e) {
          (t !== Object && null != t) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" },
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return (h || (h = new Logger(i.version)), h);
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            n)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((o = !!t), (n = !!e));
        }
        static setLogLevel(t) {
          const e = s[t.toLowerCase()];
          null != e
            ? (f = e)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((e.Logger = Logger), (Logger.errors = d), (Logger.levels = l));
    },
    575: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Logger = e.LogLevel = e.ErrorCode = void 0));
      var i = r(1657);
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let f = s["default"],
        h = null;
      function u() {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (r) {
                t.push(e);
              }
            }),
            t.length)
          )
            throw new Error("missing " + t.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (t) {
          return t.message;
        }
        return null;
      }
      const a = u();
      var l, d;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(l || (e.LogLevel = l = {})),
        (function (t) {
          ((t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"),
            (t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"),
            (t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"),
            (t["NETWORK_ERROR"] = "NETWORK_ERROR"),
            (t["SERVER_ERROR"] = "SERVER_ERROR"),
            (t["TIMEOUT"] = "TIMEOUT"),
            (t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"),
            (t["NUMERIC_FAULT"] = "NUMERIC_FAULT"),
            (t["MISSING_NEW"] = "MISSING_NEW"),
            (t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"),
            (t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"),
            (t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"),
            (t["CALL_EXCEPTION"] = "CALL_EXCEPTION"),
            (t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"),
            (t["NONCE_EXPIRED"] = "NONCE_EXPIRED"),
            (t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"),
            (t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT"),
            (t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"),
            (t["ACTION_REJECTED"] = "ACTION_REJECTED"));
        })(d || (e.ErrorCode = d = {})));
      const c = "0123456789abcdef";
      class Logger {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, e) {
          const r = t.toLowerCase();
          (null == s[r] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            f > s[r] || console.log.apply(console, e));
        }
        debug() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.DEBUG, e);
        }
        info() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.INFO, e);
        }
        warn() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.WARNING, e);
        }
        makeError(t, e, r) {
          if (o) return this.makeError("censored error", e, {});
          (e || (e = Logger.errors.UNKNOWN_ERROR), r || (r = {}));
          const i = [];
          (Object.keys(r).forEach((t) => {
            const e = r[t];
            try {
              if (e instanceof Uint8Array) {
                let r = "";
                for (let t = 0; t < e.length; t++)
                  ((r += c[e[t] >> 4]), (r += c[15 & e[t]]));
                i.push(t + "=Uint8Array(0x" + r + ")");
              } else i.push(t + "=" + JSON.stringify(e));
            } catch (f) {
              i.push(t + "=" + JSON.stringify(r[t].toString()));
            }
          }),
            i.push("code=" + e),
            i.push("version=" + this.version));
          const n = t;
          let s = "";
          switch (e) {
            case d.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const e = t;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + e;
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
            case d.CALL_EXCEPTION:
            case d.INSUFFICIENT_FUNDS:
            case d.MISSING_NEW:
            case d.NONCE_EXPIRED:
            case d.REPLACEMENT_UNDERPRICED:
            case d.TRANSACTION_REPLACED:
            case d.UNPREDICTABLE_GAS_LIMIT:
              s = e;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            i.length && (t += " (" + i.join(", ") + ")"));
          const f = new Error(t);
          return (
            (f.reason = n),
            (f.code = e),
            Object.keys(r).forEach(function (t) {
              f[t] = r[t];
            }),
            f
          );
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
            argument: e,
            value: r,
          });
        }
        assert(t, e, r, i) {
          t || this.throwError(e, r, i);
        }
        assertArgument(t, e, r, i) {
          t || this.throwArgumentError(e, r, i);
        }
        checkNormalize(t) {
          (null == t && (t = "platform missing String.prototype.normalize"),
            a &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: a },
              ));
        }
        checkSafeUint53(t, e) {
          "number" === typeof t &&
            (null == e && (e = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(e, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(e, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, e, r) {
          ((r = r ? ": " + r : ""),
            t < e &&
              this.throwError(
                "missing argument" + r,
                Logger.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: e },
              ),
            t > e &&
              this.throwError(
                "too many arguments" + r,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: e },
              ));
        }
        checkNew(t, e) {
          (t !== Object && null != t) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" },
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return (h || (h = new Logger(i.version)), h);
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            n)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((o = !!t), (n = !!e));
        }
        static setLogLevel(t) {
          const e = s[t.toLowerCase()];
          null != e
            ? (f = e)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((e.Logger = Logger), (Logger.errors = d), (Logger.levels = l));
    },
    576: function (t, e, r) {
      "use strict";
      var i;
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SupportedAlgorithm = void 0),
        (function (t) {
          ((t["sha256"] = "sha256"), (t["sha512"] = "sha512"));
        })(i || (e.SupportedAlgorithm = i = {})));
    },
  },
]);
