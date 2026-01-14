(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [8],
  {
    3271: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TransactionTypes = void 0),
        (e.accessListify = x),
        (e.computeAddress = M),
        (e.parse = z),
        (e.recoverAddress = w),
        (e.serialize = q));
      var i = r(2976),
        n = r(2829),
        f = r(2776),
        s = r(3272),
        o = r(3049),
        h = r(2808),
        u = c(r(3876)),
        a = r(4623),
        d = r(2773),
        l = r(7169);
      function c(t, e) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            i = new WeakMap();
        return (c = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var n,
            f,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((n = e ? i : r)) {
            if (n.has(t)) return n.get(t);
            n.set(t, s);
          }
          for (const r in t)
            "default" !== r &&
              {}.hasOwnProperty.call(t, r) &&
              ((f =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, r)) &&
              (f.get || f.set)
                ? n(s, r, f)
                : (s[r] = t[r]));
          return s;
        })(t, e);
      }
      const p = new d.Logger(l.version);
      var m;
      function v(t) {
        return "0x" === t ? null : (0, i.getAddress)(t);
      }
      function g(t) {
        return "0x" === t ? s.Zero : n.BigNumber.from(t);
      }
      (function (t) {
        ((t[(t["legacy"] = 0)] = "legacy"),
          (t[(t["eip2930"] = 1)] = "eip2930"),
          (t[(t["eip1559"] = 2)] = "eip1559"));
      })(m || (e.TransactionTypes = m = {}));
      const y = [
          { name: "nonce", maxLength: 32, numeric: !0 },
          { name: "gasPrice", maxLength: 32, numeric: !0 },
          { name: "gasLimit", maxLength: 32, numeric: !0 },
          { name: "to", length: 20 },
          { name: "value", maxLength: 32, numeric: !0 },
          { name: "data" },
        ],
        b = {
          chainId: !0,
          data: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          type: !0,
          value: !0,
        };
      function M(t) {
        const e = (0, a.computePublicKey)(t);
        return (0, i.getAddress)(
          (0, f.hexDataSlice)((0, o.keccak256)((0, f.hexDataSlice)(e, 1)), 12),
        );
      }
      function w(t, e) {
        return M((0, a.recoverPublicKey)((0, f.arrayify)(t), e));
      }
      function A(t, e) {
        const r = (0, f.stripZeros)(n.BigNumber.from(t).toHexString());
        return (
          r.length > 32 &&
            p.throwArgumentError(
              "invalid length for " + e,
              "transaction:" + e,
              t,
            ),
          r
        );
      }
      function _(t, e) {
        return {
          address: (0, i.getAddress)(t),
          storageKeys: (e || []).map(
            (e, r) => (
              32 !== (0, f.hexDataLength)(e) &&
                p.throwArgumentError(
                  "invalid access list storageKey",
                  `accessList[${t}:${r}]`,
                  e,
                ),
              e.toLowerCase()
            ),
          ),
        };
      }
      function x(t) {
        if (Array.isArray(t))
          return t.map((t, e) =>
            Array.isArray(t)
              ? (t.length > 2 &&
                  p.throwArgumentError(
                    "access list expected to be [ address, storageKeys[] ]",
                    `value[${e}]`,
                    t,
                  ),
                _(t[0], t[1]))
              : _(t.address, t.storageKeys),
          );
        const e = Object.keys(t).map((e) => {
          const r = t[e].reduce((t, e) => ((t[e] = !0), t), {});
          return _(e, Object.keys(r).sort());
        });
        return (e.sort((t, e) => t.address.localeCompare(e.address)), e);
      }
      function S(t) {
        return x(t).map((t) => [t.address, t.storageKeys]);
      }
      function I(t, e) {
        if (null != t.gasPrice) {
          const e = n.BigNumber.from(t.gasPrice),
            r = n.BigNumber.from(t.maxFeePerGas || 0);
          e.eq(r) ||
            p.throwArgumentError(
              "mismatch EIP-1559 gasPrice != maxFeePerGas",
              "tx",
              { gasPrice: e, maxFeePerGas: r },
            );
        }
        const r = [
          A(t.chainId || 0, "chainId"),
          A(t.nonce || 0, "nonce"),
          A(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          A(t.maxFeePerGas || 0, "maxFeePerGas"),
          A(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, i.getAddress)(t.to) : "0x",
          A(t.value || 0, "value"),
          t.data || "0x",
          S(t.accessList || []),
        ];
        if (e) {
          const t = (0, f.splitSignature)(e);
          (r.push(A(t.recoveryParam, "recoveryParam")),
            r.push((0, f.stripZeros)(t.r)),
            r.push((0, f.stripZeros)(t.s)));
        }
        return (0, f.hexConcat)(["0x02", u.encode(r)]);
      }
      function P(t, e) {
        const r = [
          A(t.chainId || 0, "chainId"),
          A(t.nonce || 0, "nonce"),
          A(t.gasPrice || 0, "gasPrice"),
          A(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, i.getAddress)(t.to) : "0x",
          A(t.value || 0, "value"),
          t.data || "0x",
          S(t.accessList || []),
        ];
        if (e) {
          const t = (0, f.splitSignature)(e);
          (r.push(A(t.recoveryParam, "recoveryParam")),
            r.push((0, f.stripZeros)(t.r)),
            r.push((0, f.stripZeros)(t.s)));
        }
        return (0, f.hexConcat)(["0x01", u.encode(r)]);
      }
      function k(t, e) {
        (0, h.checkProperties)(t, b);
        const r = [];
        y.forEach(function (e) {
          let i = t[e.name] || [];
          const n = {};
          (e.numeric && (n.hexPad = "left"),
            (i = (0, f.arrayify)((0, f.hexlify)(i, n))),
            e.length &&
              i.length !== e.length &&
              i.length > 0 &&
              p.throwArgumentError(
                "invalid length for " + e.name,
                "transaction:" + e.name,
                i,
              ),
            e.maxLength &&
              ((i = (0, f.stripZeros)(i)),
              i.length > e.maxLength &&
                p.throwArgumentError(
                  "invalid length for " + e.name,
                  "transaction:" + e.name,
                  i,
                )),
            r.push((0, f.hexlify)(i)));
        });
        let i = 0;
        if (
          (null != t.chainId
            ? ((i = t.chainId),
              "number" !== typeof i &&
                p.throwArgumentError(
                  "invalid transaction.chainId",
                  "transaction",
                  t,
                ))
            : e &&
              !(0, f.isBytesLike)(e) &&
              e.v > 28 &&
              (i = Math.floor((e.v - 35) / 2)),
          0 !== i && (r.push((0, f.hexlify)(i)), r.push("0x"), r.push("0x")),
          !e)
        )
          return u.encode(r);
        const n = (0, f.splitSignature)(e);
        let s = 27 + n.recoveryParam;
        return (
          0 !== i
            ? (r.pop(),
              r.pop(),
              r.pop(),
              (s += 2 * i + 8),
              n.v > 28 &&
                n.v !== s &&
                p.throwArgumentError(
                  "transaction.chainId/signature.v mismatch",
                  "signature",
                  e,
                ))
            : n.v !== s &&
              p.throwArgumentError(
                "transaction.chainId/signature.v mismatch",
                "signature",
                e,
              ),
          r.push((0, f.hexlify)(s)),
          r.push((0, f.stripZeros)((0, f.arrayify)(n.r))),
          r.push((0, f.stripZeros)((0, f.arrayify)(n.s))),
          u.encode(r)
        );
      }
      function q(t, e) {
        if (null == t.type || 0 === t.type)
          return (
            null != t.accessList &&
              p.throwArgumentError(
                "untyped transactions do not support accessList; include type: 1",
                "transaction",
                t,
              ),
            k(t, e)
          );
        switch (t.type) {
          case 1:
            return P(t, e);
          case 2:
            return I(t, e);
          default:
            break;
        }
        return p.throwError(
          "unsupported transaction type: " + t.type,
          d.Logger.errors.UNSUPPORTED_OPERATION,
          { operation: "serializeTransaction", transactionType: t.type },
        );
      }
      function E(t, e, r) {
        try {
          const r = g(e[0]).toNumber();
          if (0 !== r && 1 !== r) throw new Error("bad recid");
          t.v = r;
        } catch (i) {
          p.throwArgumentError("invalid v for transaction type: 1", "v", e[0]);
        }
        ((t.r = (0, f.hexZeroPad)(e[1], 32)),
          (t.s = (0, f.hexZeroPad)(e[2], 32)));
        try {
          const e = (0, o.keccak256)(r(t));
          t.from = w(e, { r: t.r, s: t.s, recoveryParam: t.v });
        } catch (i) {}
      }
      function R(t) {
        const e = u.decode(t.slice(1));
        9 !== e.length &&
          12 !== e.length &&
          p.throwArgumentError(
            "invalid component count for transaction type: 2",
            "payload",
            (0, f.hexlify)(t),
          );
        const r = g(e[2]),
          i = g(e[3]),
          n = {
            type: 2,
            chainId: g(e[0]).toNumber(),
            nonce: g(e[1]).toNumber(),
            maxPriorityFeePerGas: r,
            maxFeePerGas: i,
            gasPrice: null,
            gasLimit: g(e[4]),
            to: v(e[5]),
            value: g(e[6]),
            data: e[7],
            accessList: x(e[8]),
          };
        return (
          9 === e.length ||
            ((n.hash = (0, o.keccak256)(t)), E(n, e.slice(9), I)),
          n
        );
      }
      function N(t) {
        const e = u.decode(t.slice(1));
        8 !== e.length &&
          11 !== e.length &&
          p.throwArgumentError(
            "invalid component count for transaction type: 1",
            "payload",
            (0, f.hexlify)(t),
          );
        const r = {
          type: 1,
          chainId: g(e[0]).toNumber(),
          nonce: g(e[1]).toNumber(),
          gasPrice: g(e[2]),
          gasLimit: g(e[3]),
          to: v(e[4]),
          value: g(e[5]),
          data: e[6],
          accessList: x(e[7]),
        };
        return (
          8 === e.length ||
            ((r.hash = (0, o.keccak256)(t)), E(r, e.slice(8), P)),
          r
        );
      }
      function L(t) {
        const e = u.decode(t);
        9 !== e.length &&
          6 !== e.length &&
          p.throwArgumentError("invalid raw transaction", "rawTransaction", t);
        const r = {
          nonce: g(e[0]).toNumber(),
          gasPrice: g(e[1]),
          gasLimit: g(e[2]),
          to: v(e[3]),
          value: g(e[4]),
          data: e[5],
          chainId: 0,
        };
        if (6 === e.length) return r;
        try {
          r.v = n.BigNumber.from(e[6]).toNumber();
        } catch (i) {
          return r;
        }
        if (
          ((r.r = (0, f.hexZeroPad)(e[7], 32)),
          (r.s = (0, f.hexZeroPad)(e[8], 32)),
          n.BigNumber.from(r.r).isZero() && n.BigNumber.from(r.s).isZero())
        )
          ((r.chainId = r.v), (r.v = 0));
        else {
          ((r.chainId = Math.floor((r.v - 35) / 2)),
            r.chainId < 0 && (r.chainId = 0));
          let n = r.v - 27;
          const s = e.slice(0, 6);
          0 !== r.chainId &&
            (s.push((0, f.hexlify)(r.chainId)),
            s.push("0x"),
            s.push("0x"),
            (n -= 2 * r.chainId + 8));
          const h = (0, o.keccak256)(u.encode(s));
          try {
            r.from = w(h, {
              r: (0, f.hexlify)(r.r),
              s: (0, f.hexlify)(r.s),
              recoveryParam: n,
            });
          } catch (i) {}
          r.hash = (0, o.keccak256)(t);
        }
        return ((r.type = null), r);
      }
      function z(t) {
        const e = (0, f.arrayify)(t);
        if (e[0] > 127) return L(e);
        switch (e[0]) {
          case 1:
            return N(e);
          case 2:
            return R(e);
          default:
            break;
        }
        return p.throwError(
          "unsupported transaction type: " + e[0],
          d.Logger.errors.UNSUPPORTED_OPERATION,
          { operation: "parseTransaction", transactionType: e[0] },
        );
      }
    },
    4623: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SigningKey = void 0),
        (e.computePublicKey = l),
        (e.recoverPublicKey = d));
      var i = r(7165),
        n = r(2776),
        f = r(2808),
        s = r(2773),
        o = r(7168);
      const h = new s.Logger(o.version);
      let u = null;
      function a() {
        return (u || (u = new i.EC("secp256k1")), u);
      }
      class SigningKey {
        constructor(t) {
          ((0, f.defineReadOnly)(this, "curve", "secp256k1"),
            (0, f.defineReadOnly)(this, "privateKey", (0, n.hexlify)(t)),
            32 !== (0, n.hexDataLength)(this.privateKey) &&
              h.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]",
              ));
          const e = a().keyFromPrivate((0, n.arrayify)(this.privateKey));
          ((0, f.defineReadOnly)(
            this,
            "publicKey",
            "0x" + e.getPublic(!1, "hex"),
          ),
            (0, f.defineReadOnly)(
              this,
              "compressedPublicKey",
              "0x" + e.getPublic(!0, "hex"),
            ),
            (0, f.defineReadOnly)(this, "_isSigningKey", !0));
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
            r = a().keyFromPublic((0, n.arrayify)(l(t)));
          return (0, n.hexZeroPad)(
            "0x" + e.derive(r.getPublic()).toString(16),
            32,
          );
        }
        static isSigningKey(t) {
          return !(!t || !t._isSigningKey);
        }
      }
      function d(t, e) {
        const r = (0, n.splitSignature)(e),
          i = { r: (0, n.arrayify)(r.r), s: (0, n.arrayify)(r.s) };
        return (
          "0x" +
          a()
            .recoverPubKey((0, n.arrayify)(t), i, r.recoveryParam)
            .encode("hex", !1)
        );
      }
      function l(t, e) {
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
    7165: function (t, e, r) {
      "use strict";
      (function (t) {
        var i = r(9);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.EC = void 0));
        var n = i(r(7166)),
          f = i(r(43));
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
                return o(t, void 0 === e || null === e ? r.path : e);
              },
            }),
            t(r, r.exports),
            r.exports
          );
        }
        function o() {
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
                    f = n >> 8,
                    s = 255 & n;
                  f ? r.push(f, s) : r.push(s);
                }
              return r;
            }
            function n(t) {
              return 1 === t.length ? "0" + t : t;
            }
            function f(t) {
              for (var e = "", r = 0; r < t.length; r++)
                e += n(t[r].toString(16));
              return e;
            }
            ((r.toArray = i),
              (r.zero2 = n),
              (r.toHex = f),
              (r.encode = function (t, e) {
                return "hex" === e ? f(t) : t;
              }));
          }),
          d = s(function (t, e) {
            var r = e;
            function i(t, e, r) {
              var i,
                n = new Array(Math.max(t.bitLength(), r) + 1);
              for (i = 0; i < n.length; i += 1) n[i] = 0;
              var f = 1 << (e + 1),
                s = t.clone();
              for (i = 0; i < n.length; i++) {
                var o,
                  h = s.andln(f - 1);
                (s.isOdd()
                  ? ((o = h > (f >> 1) - 1 ? (f >> 1) - h : h), s.isubn(o))
                  : (o = 0),
                  (n[i] = o),
                  s.iushrn(1));
              }
              return n;
            }
            function f(t, e) {
              var r = [[], []];
              ((t = t.clone()), (e = e.clone()));
              var i,
                n = 0,
                f = 0;
              while (t.cmpn(-n) > 0 || e.cmpn(-f) > 0) {
                var s,
                  o,
                  h = (t.andln(3) + n) & 3,
                  u = (e.andln(3) + f) & 3;
                (3 === h && (h = -1),
                  3 === u && (u = -1),
                  0 === (1 & h)
                    ? (s = 0)
                    : ((i = (t.andln(7) + n) & 7),
                      (s = (3 !== i && 5 !== i) || 2 !== u ? h : -h)),
                  r[0].push(s),
                  0 === (1 & u)
                    ? (o = 0)
                    : ((i = (e.andln(7) + f) & 7),
                      (o = (3 !== i && 5 !== i) || 2 !== h ? u : -u)),
                  r[1].push(o),
                  2 * n === s + 1 && (n = 1 - n),
                  2 * f === o + 1 && (f = 1 - f),
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
            function o(t) {
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
              (r.getJSF = f),
              (r.cachedProperty = s),
              (r.parseBytes = o),
              (r.intFromLE = u));
          }),
          l = d.getNAF,
          c = d.getJSF,
          p = d.assert;
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
        var v = m;
        function g(t, e) {
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
              i = l(e, 1, this._bitLength),
              n = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1);
            n /= 3;
            var f,
              s,
              o = [];
            for (f = 0; f < i.length; f += r.step) {
              s = 0;
              for (var h = f + r.step - 1; h >= f; h--) s = (s << 1) + i[h];
              o.push(s);
            }
            for (
              var u = this.jpoint(null, null, null),
                a = this.jpoint(null, null, null),
                d = n;
              d > 0;
              d--
            ) {
              for (f = 0; f < o.length; f++)
                ((s = o[f]),
                  s === d
                    ? (a = a.mixedAdd(r.points[f]))
                    : s === -d && (a = a.mixedAdd(r.points[f].neg())));
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
                f = l(e, r, this._bitLength),
                s = this.jpoint(null, null, null),
                o = f.length - 1;
              o >= 0;
              o--
            ) {
              for (var h = 0; o >= 0 && 0 === f[o]; o--) h++;
              if ((o >= 0 && h++, (s = s.dblp(h)), o < 0)) break;
              var u = f[o];
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
            var f,
              s,
              o,
              h = this._wnafT1,
              u = this._wnafT2,
              a = this._wnafT3,
              d = 0;
            for (f = 0; f < i; f++) {
              o = e[f];
              var p = o._getNAFPoints(t);
              ((h[f] = p.wnd), (u[f] = p.points));
            }
            for (f = i - 1; f >= 1; f -= 2) {
              var m = f - 1,
                v = f;
              if (1 === h[m] && 1 === h[v]) {
                var g = [e[m], null, null, e[v]];
                0 === e[m].y.cmp(e[v].y)
                  ? ((g[1] = e[m].add(e[v])),
                    (g[2] = e[m].toJ().mixedAdd(e[v].neg())))
                  : 0 === e[m].y.cmp(e[v].y.redNeg())
                    ? ((g[1] = e[m].toJ().mixedAdd(e[v])),
                      (g[2] = e[m].add(e[v].neg())))
                    : ((g[1] = e[m].toJ().mixedAdd(e[v])),
                      (g[2] = e[m].toJ().mixedAdd(e[v].neg())));
                var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                  b = c(r[m], r[v]);
                for (
                  d = Math.max(b[0].length, d),
                    a[m] = new Array(d),
                    a[v] = new Array(d),
                    s = 0;
                  s < d;
                  s++
                ) {
                  var M = 0 | b[0][s],
                    w = 0 | b[1][s];
                  ((a[m][s] = y[3 * (M + 1) + (w + 1)]),
                    (a[v][s] = 0),
                    (u[m] = g));
                }
              } else
                ((a[m] = l(r[m], h[m], this._bitLength)),
                  (a[v] = l(r[v], h[v], this._bitLength)),
                  (d = Math.max(a[m].length, d)),
                  (d = Math.max(a[v].length, d)));
            }
            var A = this.jpoint(null, null, null),
              _ = this._wnafT4;
            for (f = d; f >= 0; f--) {
              var x = 0;
              while (f >= 0) {
                var S = !0;
                for (s = 0; s < i; s++)
                  ((_[s] = 0 | a[s][f]), 0 !== _[s] && (S = !1));
                if (!S) break;
                (x++, f--);
              }
              if ((f >= 0 && x++, (A = A.dblp(x)), f < 0)) break;
              for (s = 0; s < i; s++) {
                var I = _[s];
                0 !== I &&
                  (I > 0
                    ? (o = u[s][(I - 1) >> 1])
                    : I < 0 && (o = u[s][(-I - 1) >> 1].neg()),
                  (A = "affine" === o.type ? A.mixedAdd(o) : A.add(o)));
              }
            }
            for (f = 0; f < i; f++) u[f] = null;
            return n ? A : A.toP();
          }),
          (m.BasePoint = g),
          (g.prototype.eq = function () {
            throw new Error("Not implemented");
          }),
          (g.prototype.validate = function () {
            return this.curve.validate(this);
          }),
          (m.prototype.decodePoint = function (t, e) {
            t = d.toArray(t, e);
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
          (g.prototype.encodeCompressed = function (t) {
            return this.encode(t, !0);
          }),
          (g.prototype._encode = function (t) {
            var e = this.curve.p.byteLength(),
              r = this.getX().toArray("be", e);
            return t
              ? [this.getY().isEven() ? 2 : 3].concat(r)
              : [4].concat(r, this.getY().toArray("be", e));
          }),
          (g.prototype.encode = function (t, e) {
            return d.encode(this._encode(e), t);
          }),
          (g.prototype.precompute = function (t) {
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
          (g.prototype._hasDoubles = function (t) {
            if (!this.precomputed) return !1;
            var e = this.precomputed.doubles;
            return (
              !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            );
          }),
          (g.prototype._getDoubles = function (t, e) {
            if (this.precomputed && this.precomputed.doubles)
              return this.precomputed.doubles;
            for (var r = [this], i = this, n = 0; n < e; n += t) {
              for (var f = 0; f < t; f++) i = i.dbl();
              r.push(i);
            }
            return { step: t, points: r };
          }),
          (g.prototype._getNAFPoints = function (t) {
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
          (g.prototype._getBeta = function () {
            return null;
          }),
          (g.prototype.dblp = function (t) {
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
          b = d.assert;
        function M(t) {
          (v.call(this, "short", t),
            (this.a = new n.default(t.a, 16).toRed(this.red)),
            (this.b = new n.default(t.b, 16).toRed(this.red)),
            (this.tinv = this.two.redInvm()),
            (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
            (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
            (this.endo = this._getEndomorphism(t)),
            (this._endoWnafT1 = new Array(4)),
            (this._endoWnafT2 = new Array(4)));
        }
        y(M, v);
        var w = M;
        function Point(t, e, r, i) {
          (v.BasePoint.call(this, t, "affine"),
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
        function A(t, e, r, i) {
          (v.BasePoint.call(this, t, "jacobian"),
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
        ((M.prototype._getEndomorphism = function (t) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var e, r, i;
            if (t.beta) e = new n.default(t.beta, 16).toRed(this.red);
            else {
              var f = this._getEndoRoots(this.p);
              ((e = f[0].cmp(f[1]) < 0 ? f[0] : f[1]), (e = e.toRed(this.red)));
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
          (M.prototype._getEndoRoots = function (t) {
            var e = t === this.p ? this.red : n.default.mont(t),
              r = new n.default(2).toRed(e).redInvm(),
              i = r.redNeg(),
              f = new n.default(3).toRed(e).redNeg().redSqrt().redMul(r),
              s = i.redAdd(f).fromRed(),
              o = i.redSub(f).fromRed();
            return [s, o];
          }),
          (M.prototype._getEndoBasis = function (t) {
            var e,
              r,
              i,
              f,
              s,
              o,
              h,
              u,
              a,
              d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              l = t,
              c = this.n.clone(),
              p = new n.default(1),
              m = new n.default(0),
              v = new n.default(0),
              g = new n.default(1),
              y = 0;
            while (0 !== l.cmpn(0)) {
              var b = c.div(l);
              ((u = c.sub(b.mul(l))), (a = v.sub(b.mul(p))));
              var M = g.sub(b.mul(m));
              if (!i && u.cmp(d) < 0)
                ((e = h.neg()), (r = p), (i = u.neg()), (f = a));
              else if (i && 2 === ++y) break;
              ((h = u), (c = l), (l = u), (v = p), (p = a), (g = m), (m = M));
            }
            ((s = u.neg()), (o = a));
            var w = i.sqr().add(f.sqr()),
              A = s.sqr().add(o.sqr());
            return (
              A.cmp(w) >= 0 && ((s = e), (o = r)),
              i.negative && ((i = i.neg()), (f = f.neg())),
              s.negative && ((s = s.neg()), (o = o.neg())),
              [
                { a: i, b: f },
                { a: s, b: o },
              ]
            );
          }),
          (M.prototype._endoSplit = function (t) {
            var e = this.endo.basis,
              r = e[0],
              i = e[1],
              n = i.b.mul(t).divRound(this.n),
              f = r.b.neg().mul(t).divRound(this.n),
              s = n.mul(r.a),
              o = f.mul(i.a),
              h = n.mul(r.b),
              u = f.mul(i.b),
              a = t.sub(s).sub(o),
              d = h.add(u).neg();
            return { k1: a, k2: d };
          }),
          (M.prototype.pointFromX = function (t, e) {
            ((t = new n.default(t, 16)), t.red || (t = t.toRed(this.red)));
            var r = t
                .redSqr()
                .redMul(t)
                .redIAdd(t.redMul(this.a))
                .redIAdd(this.b),
              i = r.redSqrt();
            if (0 !== i.redSqr().redSub(r).cmp(this.zero))
              throw new Error("invalid point");
            var f = i.fromRed().isOdd();
            return (
              ((e && !f) || (!e && f)) && (i = i.redNeg()),
              this.point(t, i)
            );
          }),
          (M.prototype.validate = function (t) {
            if (t.inf) return !0;
            var e = t.x,
              r = t.y,
              i = this.a.redMul(e),
              n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
            return 0 === r.redSqr().redISub(n).cmpn(0);
          }),
          (M.prototype._endoWnafMulAdd = function (t, e, r) {
            for (
              var i = this._endoWnafT1, n = this._endoWnafT2, f = 0;
              f < t.length;
              f++
            ) {
              var s = this._endoSplit(e[f]),
                o = t[f],
                h = o._getBeta();
              (s.k1.negative && (s.k1.ineg(), (o = o.neg(!0))),
                s.k2.negative && (s.k2.ineg(), (h = h.neg(!0))),
                (i[2 * f] = o),
                (i[2 * f + 1] = h),
                (n[2 * f] = s.k1),
                (n[2 * f + 1] = s.k2));
            }
            for (
              var u = this._wnafMulAdd(1, i, n, 2 * f, r), a = 0;
              a < 2 * f;
              a++
            )
              ((i[a] = null), (n[a] = null));
            return u;
          }),
          y(Point, v.BasePoint),
          (M.prototype.point = function (t, e, r) {
            return new Point(this, t, e, r);
          }),
          (M.prototype.pointFromJSON = function (t, e) {
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
            var f = e[2];
            return (
              (i.precomputed = {
                beta: null,
                doubles: f.doubles && {
                  step: f.doubles.step,
                  points: [i].concat(f.doubles.points.map(n)),
                },
                naf: f.naf && {
                  wnd: f.naf.wnd,
                  points: [i].concat(f.naf.points.map(n)),
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
              f = n.redSqr().redISub(this.x.redAdd(this.x)),
              s = n.redMul(this.x.redSub(f)).redISub(this.y);
            return this.curve.point(f, s);
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
          y(A, v.BasePoint),
          (M.prototype.jpoint = function (t, e, r) {
            return new A(this, t, e, r);
          }),
          (A.prototype.toP = function () {
            if (this.isInfinity()) return this.curve.point(null, null);
            var t = this.z.redInvm(),
              e = t.redSqr(),
              r = this.x.redMul(e),
              i = this.y.redMul(e).redMul(t);
            return this.curve.point(r, i);
          }),
          (A.prototype.neg = function () {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
          }),
          (A.prototype.add = function (t) {
            if (this.isInfinity()) return t;
            if (t.isInfinity()) return this;
            var e = t.z.redSqr(),
              r = this.z.redSqr(),
              i = this.x.redMul(e),
              n = t.x.redMul(r),
              f = this.y.redMul(e.redMul(t.z)),
              s = t.y.redMul(r.redMul(this.z)),
              o = i.redSub(n),
              h = f.redSub(s);
            if (0 === o.cmpn(0))
              return 0 !== h.cmpn(0)
                ? this.curve.jpoint(null, null, null)
                : this.dbl();
            var u = o.redSqr(),
              a = u.redMul(o),
              d = i.redMul(u),
              l = h.redSqr().redIAdd(a).redISub(d).redISub(d),
              c = h.redMul(d.redISub(l)).redISub(f.redMul(a)),
              p = this.z.redMul(t.z).redMul(o);
            return this.curve.jpoint(l, c, p);
          }),
          (A.prototype.mixedAdd = function (t) {
            if (this.isInfinity()) return t.toJ();
            if (t.isInfinity()) return this;
            var e = this.z.redSqr(),
              r = this.x,
              i = t.x.redMul(e),
              n = this.y,
              f = t.y.redMul(e).redMul(this.z),
              s = r.redSub(i),
              o = n.redSub(f);
            if (0 === s.cmpn(0))
              return 0 !== o.cmpn(0)
                ? this.curve.jpoint(null, null, null)
                : this.dbl();
            var h = s.redSqr(),
              u = h.redMul(s),
              a = r.redMul(h),
              d = o.redSqr().redIAdd(u).redISub(a).redISub(a),
              l = o.redMul(a.redISub(d)).redISub(n.redMul(u)),
              c = this.z.redMul(s);
            return this.curve.jpoint(d, l, c);
          }),
          (A.prototype.dblp = function (t) {
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
              f = this.x,
              s = this.y,
              o = this.z,
              h = o.redSqr().redSqr(),
              u = s.redAdd(s);
            for (e = 0; e < t; e++) {
              var a = f.redSqr(),
                d = u.redSqr(),
                l = d.redSqr(),
                c = a.redAdd(a).redIAdd(a).redIAdd(i.redMul(h)),
                p = f.redMul(d),
                m = c.redSqr().redISub(p.redAdd(p)),
                v = p.redISub(m),
                g = c.redMul(v);
              g = g.redIAdd(g).redISub(l);
              var y = u.redMul(o);
              (e + 1 < t && (h = h.redMul(l)), (f = m), (o = y), (u = g));
            }
            return this.curve.jpoint(f, u.redMul(n), o);
          }),
          (A.prototype.dbl = function () {
            return this.isInfinity()
              ? this
              : this.curve.zeroA
                ? this._zeroDbl()
                : this.curve.threeA
                  ? this._threeDbl()
                  : this._dbl();
          }),
          (A.prototype._zeroDbl = function () {
            var t, e, r;
            if (this.zOne) {
              var i = this.x.redSqr(),
                n = this.y.redSqr(),
                f = n.redSqr(),
                s = this.x.redAdd(n).redSqr().redISub(i).redISub(f);
              s = s.redIAdd(s);
              var o = i.redAdd(i).redIAdd(i),
                h = o.redSqr().redISub(s).redISub(s),
                u = f.redIAdd(f);
              ((u = u.redIAdd(u)),
                (u = u.redIAdd(u)),
                (t = h),
                (e = o.redMul(s.redISub(h)).redISub(u)),
                (r = this.y.redAdd(this.y)));
            } else {
              var a = this.x.redSqr(),
                d = this.y.redSqr(),
                l = d.redSqr(),
                c = this.x.redAdd(d).redSqr().redISub(a).redISub(l);
              c = c.redIAdd(c);
              var p = a.redAdd(a).redIAdd(a),
                m = p.redSqr(),
                v = l.redIAdd(l);
              ((v = v.redIAdd(v)),
                (v = v.redIAdd(v)),
                (t = m.redISub(c).redISub(c)),
                (e = p.redMul(c.redISub(t)).redISub(v)),
                (r = this.y.redMul(this.z)),
                (r = r.redIAdd(r)));
            }
            return this.curve.jpoint(t, e, r);
          }),
          (A.prototype._threeDbl = function () {
            var t, e, r;
            if (this.zOne) {
              var i = this.x.redSqr(),
                n = this.y.redSqr(),
                f = n.redSqr(),
                s = this.x.redAdd(n).redSqr().redISub(i).redISub(f);
              s = s.redIAdd(s);
              var o = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                h = o.redSqr().redISub(s).redISub(s);
              t = h;
              var u = f.redIAdd(f);
              ((u = u.redIAdd(u)),
                (u = u.redIAdd(u)),
                (e = o.redMul(s.redISub(h)).redISub(u)),
                (r = this.y.redAdd(this.y)));
            } else {
              var a = this.z.redSqr(),
                d = this.y.redSqr(),
                l = this.x.redMul(d),
                c = this.x.redSub(a).redMul(this.x.redAdd(a));
              c = c.redAdd(c).redIAdd(c);
              var p = l.redIAdd(l);
              p = p.redIAdd(p);
              var m = p.redAdd(p);
              ((t = c.redSqr().redISub(m)),
                (r = this.y.redAdd(this.z).redSqr().redISub(d).redISub(a)));
              var v = d.redSqr();
              ((v = v.redIAdd(v)),
                (v = v.redIAdd(v)),
                (v = v.redIAdd(v)),
                (e = c.redMul(p.redISub(t)).redISub(v)));
            }
            return this.curve.jpoint(t, e, r);
          }),
          (A.prototype._dbl = function () {
            var t = this.curve.a,
              e = this.x,
              r = this.y,
              i = this.z,
              n = i.redSqr().redSqr(),
              f = e.redSqr(),
              s = r.redSqr(),
              o = f.redAdd(f).redIAdd(f).redIAdd(t.redMul(n)),
              h = e.redAdd(e);
            h = h.redIAdd(h);
            var u = h.redMul(s),
              a = o.redSqr().redISub(u.redAdd(u)),
              d = u.redISub(a),
              l = s.redSqr();
            ((l = l.redIAdd(l)), (l = l.redIAdd(l)), (l = l.redIAdd(l)));
            var c = o.redMul(d).redISub(l),
              p = r.redAdd(r).redMul(i);
            return this.curve.jpoint(a, c, p);
          }),
          (A.prototype.trpl = function () {
            if (!this.curve.zeroA) return this.dbl().add(this);
            var t = this.x.redSqr(),
              e = this.y.redSqr(),
              r = this.z.redSqr(),
              i = e.redSqr(),
              n = t.redAdd(t).redIAdd(t),
              f = n.redSqr(),
              s = this.x.redAdd(e).redSqr().redISub(t).redISub(i);
            ((s = s.redIAdd(s)),
              (s = s.redAdd(s).redIAdd(s)),
              (s = s.redISub(f)));
            var o = s.redSqr(),
              h = i.redIAdd(i);
            ((h = h.redIAdd(h)), (h = h.redIAdd(h)), (h = h.redIAdd(h)));
            var u = n.redIAdd(s).redSqr().redISub(f).redISub(o).redISub(h),
              a = e.redMul(u);
            ((a = a.redIAdd(a)), (a = a.redIAdd(a)));
            var d = this.x.redMul(o).redISub(a);
            ((d = d.redIAdd(d)), (d = d.redIAdd(d)));
            var l = this.y.redMul(u.redMul(h.redISub(u)).redISub(s.redMul(o)));
            ((l = l.redIAdd(l)), (l = l.redIAdd(l)), (l = l.redIAdd(l)));
            var c = this.z.redAdd(s).redSqr().redISub(r).redISub(o);
            return this.curve.jpoint(d, l, c);
          }),
          (A.prototype.mul = function (t, e) {
            return ((t = new n.default(t, e)), this.curve._wnafMul(this, t));
          }),
          (A.prototype.eq = function (t) {
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
          (A.prototype.eqXToP = function (t) {
            var e = this.z.redSqr(),
              r = t.toRed(this.curve.red).redMul(e);
            if (0 === this.x.cmp(r)) return !0;
            for (var i = t.clone(), n = this.curve.redN.redMul(e); ; ) {
              if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
              if ((r.redIAdd(n), 0 === this.x.cmp(r))) return !0;
            }
          }),
          (A.prototype.inspect = function () {
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
          (A.prototype.isInfinity = function () {
            return 0 === this.z.cmpn(0);
          }));
        var _ = s(function (t, e) {
            var r = e;
            ((r.base = v), (r.short = w), (r.mont = null), (r.edwards = null));
          }),
          x = s(function (t, e) {
            var r,
              i = e,
              n = d.assert;
            function s(t) {
              ("short" === t.type
                ? (this.curve = new _.short(t))
                : "edwards" === t.type
                  ? (this.curve = new _.edwards(t))
                  : (this.curve = new _.mont(t)),
                (this.g = this.curve.g),
                (this.n = this.curve.n),
                (this.hash = t.hash),
                n(this.g.validate(), "Invalid curve"),
                n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O"));
            }
            function o(t, e) {
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
              o("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: f.default.sha256,
                gRed: !1,
                g: [
                  "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                  "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
                ],
              }),
              o("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: f.default.sha256,
                gRed: !1,
                g: [
                  "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                  "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
                ],
              }),
              o("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: f.default.sha256,
                gRed: !1,
                g: [
                  "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                  "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
                ],
              }),
              o("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: f.default.sha384,
                gRed: !1,
                g: [
                  "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                  "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
                ],
              }),
              o("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: f.default.sha512,
                gRed: !1,
                g: [
                  "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                  "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
                ],
              }),
              o("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: f.default.sha256,
                gRed: !1,
                g: ["9"],
              }),
              o("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: f.default.sha256,
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
            o("secp256k1", {
              type: "short",
              prime: "k256",
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
              a: "0",
              b: "7",
              n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
              h: "1",
              hash: f.default.sha256,
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
            return new f.default.hmac(this.hash, this.K);
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
            var f = n.slice(0, t);
            return (this._update(r), this._reseed++, a.encode(f, e));
          }));
        var P = d.assert;
        function k(t, e) {
          ((this.ec = t),
            (this.priv = null),
            (this.pub = null),
            e.priv && this._importPrivate(e.priv, e.privEnc),
            e.pub && this._importPublic(e.pub, e.pubEnc));
        }
        var q = k;
        ((k.fromPublic = function (t, e, r) {
          return e instanceof k ? e : new k(t, { pub: e, pubEnc: r });
        }),
          (k.fromPrivate = function (t, e, r) {
            return e instanceof k ? e : new k(t, { priv: e, privEnc: r });
          }),
          (k.prototype.validate = function () {
            var t = this.getPublic();
            return t.isInfinity()
              ? { result: !1, reason: "Invalid public key" }
              : t.validate()
                ? t.mul(this.ec.curve.n).isInfinity()
                  ? { result: !0, reason: null }
                  : { result: !1, reason: "Public key * N != O" }
                : { result: !1, reason: "Public key is not a point" };
          }),
          (k.prototype.getPublic = function (t, e) {
            return (
              "string" === typeof t && ((e = t), (t = null)),
              this.pub || (this.pub = this.ec.g.mul(this.priv)),
              e ? this.pub.encode(e, t) : this.pub
            );
          }),
          (k.prototype.getPrivate = function (t) {
            return "hex" === t ? this.priv.toString(16, 2) : this.priv;
          }),
          (k.prototype._importPrivate = function (t, e) {
            ((this.priv = new n.default(t, e || 16)),
              (this.priv = this.priv.umod(this.ec.curve.n)));
          }),
          (k.prototype._importPublic = function (t, e) {
            if (t.x || t.y)
              return (
                "mont" === this.ec.curve.type
                  ? P(t.x, "Need x coordinate")
                  : ("short" !== this.ec.curve.type &&
                      "edwards" !== this.ec.curve.type) ||
                    P(t.x && t.y, "Need both x and y coordinate"),
                void (this.pub = this.ec.curve.point(t.x, t.y))
              );
            this.pub = this.ec.curve.decodePoint(t, e);
          }),
          (k.prototype.derive = function (t) {
            return (
              t.validate() || P(t.validate(), "public point not validated"),
              t.mul(this.priv).getX()
            );
          }),
          (k.prototype.sign = function (t, e, r) {
            return this.ec.sign(t, this, e, r);
          }),
          (k.prototype.verify = function (t, e, r) {
            return this.ec.verify(t, e, this, void 0, r);
          }),
          (k.prototype.inspect = function () {
            return (
              "<Key priv: " +
              (this.priv && this.priv.toString(16, 2)) +
              " pub: " +
              (this.pub && this.pub.inspect()) +
              " >"
            );
          }));
        var E = d.assert;
        function R(t, e) {
          if (t instanceof R) return t;
          this._importDER(t, e) ||
            (E(t.r && t.s, "Signature without r or s"),
            (this.r = new n.default(t.r, 16)),
            (this.s = new n.default(t.s, 16)),
            void 0 === t.recoveryParam
              ? (this.recoveryParam = null)
              : (this.recoveryParam = t.recoveryParam));
        }
        var N = R;
        function L() {
          this.place = 0;
        }
        function z(t, e) {
          var r = t[e.place++];
          if (!(128 & r)) return r;
          var i = 15 & r;
          if (0 === i || i > 4) return !1;
          if (0 === t[e.place]) return !1;
          for (var n = 0, f = 0, s = e.place; f < i; f++, s++)
            ((n <<= 8), (n |= t[s]), (n >>>= 0));
          return !(n <= 127) && ((e.place = s), n);
        }
        function B(t) {
          var e = 0,
            r = t.length - 1;
          while (!t[e] && !(128 & t[e + 1]) && e < r) e++;
          return 0 === e ? t : t.slice(e);
        }
        function O(t, e) {
          if (e < 128) t.push(e);
          else {
            var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
            t.push(128 | r);
            while (--r) t.push((e >>> (r << 3)) & 255);
            t.push(e);
          }
        }
        ((R.prototype._importDER = function (t, e) {
          t = d.toArray(t, e);
          var r = new L();
          if (48 !== t[r.place++]) return !1;
          var i = z(t, r);
          if (!1 === i) return !1;
          if (i + r.place !== t.length) return !1;
          if (2 !== t[r.place++]) return !1;
          var f = z(t, r);
          if (!1 === f) return !1;
          if (0 !== (128 & t[r.place])) return !1;
          var s = t.slice(r.place, f + r.place);
          if (((r.place += f), 2 !== t[r.place++])) return !1;
          var o = z(t, r);
          if (!1 === o) return !1;
          if (t.length !== o + r.place) return !1;
          if (0 !== (128 & t[r.place])) return !1;
          var h = t.slice(r.place, o + r.place);
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
          (R.prototype.toDER = function (t) {
            var e = this.r.toArray(),
              r = this.s.toArray();
            (128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              (e = B(e)),
              (r = B(r)));
            while (!r[0] && !(128 & r[1])) r = r.slice(1);
            var i = [2];
            (O(i, e.length), (i = i.concat(e)), i.push(2), O(i, r.length));
            var n = i.concat(r),
              f = [48];
            return (O(f, n.length), (f = f.concat(n)), d.encode(f, t));
          }));
        var T = function () {
            throw new Error("unsupported");
          },
          j = d.assert;
        function K(t) {
          if (!(this instanceof K)) return new K(t);
          ("string" === typeof t &&
            (j(
              Object.prototype.hasOwnProperty.call(x, t),
              "Unknown curve " + t,
            ),
            (t = x[t])),
            t instanceof x.PresetCurve && (t = { curve: t }),
            (this.curve = t.curve.curve),
            (this.n = this.curve.n),
            (this.nh = this.n.ushrn(1)),
            (this.g = this.curve.g),
            (this.g = t.curve.g),
            this.g.precompute(t.curve.n.bitLength() + 1),
            (this.hash = t.hash || t.curve.hash));
        }
        var Z = K;
        ((K.prototype.keyPair = function (t) {
          return new q(this, t);
        }),
          (K.prototype.keyFromPrivate = function (t, e) {
            return q.fromPrivate(this, t, e);
          }),
          (K.prototype.keyFromPublic = function (t, e) {
            return q.fromPublic(this, t, e);
          }),
          (K.prototype.genKeyPair = function (t) {
            t || (t = {});
            for (
              var e = new I({
                  hash: this.hash,
                  pers: t.pers,
                  persEnc: t.persEnc || "utf8",
                  entropy: t.entropy || T(this.hash.hmacStrength),
                  entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                  nonce: this.n.toArray(),
                }),
                r = this.n.byteLength(),
                i = this.n.sub(new n.default(2));
              ;
            ) {
              var f = new n.default(e.generate(r));
              if (!(f.cmp(i) > 0)) return (f.iaddn(1), this.keyFromPrivate(f));
            }
          }),
          (K.prototype._truncateToN = function (t, e, r) {
            var i;
            if (n.default.isBN(t) || "number" === typeof t)
              ((t = new n.default(t, 16)), (i = t.byteLength()));
            else if ("object" === typeof t)
              ((i = t.length), (t = new n.default(t, 16)));
            else {
              var f = t.toString();
              ((i = (f.length + 1) >>> 1), (t = new n.default(f, 16)));
            }
            "number" !== typeof r && (r = 8 * i);
            var s = r - this.n.bitLength();
            return (
              s > 0 && (t = t.ushrn(s)),
              !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            );
          }),
          (K.prototype.sign = function (t, e, r, i) {
            if (
              ("object" === typeof r && ((i = r), (r = null)),
              i || (i = {}),
              "string" !== typeof t &&
                "number" !== typeof t &&
                !n.default.isBN(t))
            ) {
              (j(
                "object" === typeof t && t && "number" === typeof t.length,
                "Expected message to be an array-like, a hex string, or a BN instance",
              ),
                j(t.length >>> 0 === t.length));
              for (var f = 0; f < t.length; f++) j((255 & t[f]) === t[f]);
            }
            ((e = this.keyFromPrivate(e, r)),
              (t = this._truncateToN(t, !1, i.msgBitLength)),
              j(!t.isNeg(), "Can not sign a negative message"));
            var s = this.n.byteLength(),
              o = e.getPrivate().toArray("be", s),
              h = t.toArray("be", s);
            j(new n.default(h).eq(t), "Can not sign message");
            for (
              var u = new I({
                  hash: this.hash,
                  entropy: o,
                  nonce: h,
                  pers: i.pers,
                  persEnc: i.persEnc || "utf8",
                }),
                a = this.n.sub(new n.default(1)),
                d = 0;
              ;
              d++
            ) {
              var l = i.k
                ? i.k(d)
                : new n.default(u.generate(this.n.byteLength()));
              if (
                ((l = this._truncateToN(l, !0)),
                !(l.cmpn(1) <= 0 || l.cmp(a) >= 0))
              ) {
                var c = this.g.mul(l);
                if (!c.isInfinity()) {
                  var p = c.getX(),
                    m = p.umod(this.n);
                  if (0 !== m.cmpn(0)) {
                    var v = l.invm(this.n).mul(m.mul(e.getPrivate()).iadd(t));
                    if (((v = v.umod(this.n)), 0 !== v.cmpn(0))) {
                      var g =
                        (c.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(m) ? 2 : 0);
                      return (
                        i.canonical &&
                          v.cmp(this.nh) > 0 &&
                          ((v = this.n.sub(v)), (g ^= 1)),
                        new N({ r: m, s: v, recoveryParam: g })
                      );
                    }
                  }
                }
              }
            }
          }),
          (K.prototype.verify = function (t, e, r, i, n) {
            (n || (n = {}),
              (t = this._truncateToN(t, !1, n.msgBitLength)),
              (r = this.keyFromPublic(r, i)),
              (e = new N(e, "hex")));
            var f = e.r,
              s = e.s;
            if (f.cmpn(1) < 0 || f.cmp(this.n) >= 0) return !1;
            if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
            var o,
              h = s.invm(this.n),
              u = h.mul(t).umod(this.n),
              a = h.mul(f).umod(this.n);
            return this.curve._maxwellTrick
              ? ((o = this.g.jmulAdd(u, r.getPublic(), a)),
                !o.isInfinity() && o.eqXToP(f))
              : ((o = this.g.mulAdd(u, r.getPublic(), a)),
                !o.isInfinity() && 0 === o.getX().umod(this.n).cmp(f));
          }),
          (K.prototype.recoverPubKey = function (t, e, r, i) {
            (j((3 & r) === r, "The recovery param is more than two bits"),
              (e = new N(e, i)));
            var f = this.n,
              s = new n.default(t),
              o = e.r,
              h = e.s,
              u = 1 & r,
              a = r >> 1;
            if (o.cmp(this.curve.p.umod(this.curve.n)) >= 0 && a)
              throw new Error("Unable to find sencond key candinate");
            o = a
              ? this.curve.pointFromX(o.add(this.curve.n), u)
              : this.curve.pointFromX(o, u);
            var d = e.r.invm(f),
              l = f.sub(s).mul(d).umod(f),
              c = h.mul(d).umod(f);
            return this.g.mulAdd(l, o, c);
          }),
          (K.prototype.getKeyRecoveryParam = function (t, e, r, i) {
            if (((e = new N(e, i)), null !== e.recoveryParam))
              return e.recoveryParam;
            for (var n = 0; n < 4; n++) {
              var f;
              try {
                f = this.recoverPubKey(t, e, n);
              } catch (t) {
                continue;
              }
              if (f.eq(r)) return n;
            }
            throw new Error("Unable to find valid recovery factor");
          }));
        var F = s(function (t, e) {
          var r = e;
          ((r.version = { version: "6.6.1" }.version),
            (r.utils = d),
            (r.rand = function () {
              throw new Error("unsupported");
            }),
            (r.curve = _),
            (r.curves = x),
            (r.ec = Z),
            (r.eddsa = null));
        });
        e.EC = F.ec;
      }).call(this, r(13));
    },
    7166: function (t, e, r) {
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
          function f(t, e, r) {
            if (f.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
                this._init(t || 0, e || 10, r || "be")));
          }
          var s;
          ("object" === typeof t ? (t.exports = f) : (e.BN = f),
            (f.BN = f),
            (f.wordSize = 26));
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : r(7167).Buffer;
          } catch (E) {}
          function o(t, e) {
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
            var i = o(t, r);
            return (r - 1 >= e && (i |= o(t, r - 1) << 4), i);
          }
          function u(t, e, r, n) {
            for (
              var f = 0, s = 0, o = Math.min(t.length, r), h = e;
              h < o;
              h++
            ) {
              var u = t.charCodeAt(h) - 48;
              ((f *= n),
                (s = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
                i(u >= 0 && s < n, "Invalid character"),
                (f += s));
            }
            return f;
          }
          function a(t, e) {
            ((t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red));
          }
          if (
            ((f.isBN = function (t) {
              return (
                t instanceof f ||
                (null !== t &&
                  "object" === typeof t &&
                  t.constructor.wordSize === f.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (f.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (f.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (f.prototype._init = function (t, e, r) {
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
            (f.prototype._initNumber = function (t, e, r) {
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
            (f.prototype._initArray = function (t, e, r) {
              if ((i("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var f,
                s,
                o = 0;
              if ("be" === r)
                for (n = t.length - 1, f = 0; n >= 0; n -= 3)
                  ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[f] |= (s << o) & 67108863),
                    (this.words[f + 1] = (s >>> (26 - o)) & 67108863),
                    (o += 24),
                    o >= 26 && ((o -= 26), f++));
              else if ("le" === r)
                for (n = 0, f = 0; n < t.length; n += 3)
                  ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[f] |= (s << o) & 67108863),
                    (this.words[f + 1] = (s >>> (26 - o)) & 67108863),
                    (o += 24),
                    o >= 26 && ((o -= 26), f++));
              return this._strip();
            }),
            (f.prototype._parseHex = function (t, e, r) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var n,
                f = 0,
                s = 0;
              if ("be" === r)
                for (i = t.length - 1; i >= e; i -= 2)
                  ((n = h(t, e, i) << f),
                    (this.words[s] |= 67108863 & n),
                    f >= 18
                      ? ((f -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (f += 8));
              else {
                var o = t.length - e;
                for (i = o % 2 === 0 ? e + 1 : e; i < t.length; i += 2)
                  ((n = h(t, e, i) << f),
                    (this.words[s] |= 67108863 & n),
                    f >= 18
                      ? ((f -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (f += 8));
              }
              this._strip();
            }),
            (f.prototype._parseBase = function (t, e, r) {
              ((this.words = [0]), (this.length = 1));
              for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
              (i--, (n = (n / e) | 0));
              for (
                var f = t.length - r,
                  s = f % i,
                  o = Math.min(f, f - s) + r,
                  h = 0,
                  a = r;
                a < o;
                a += i
              )
                ((h = u(t, a, a + i, e)),
                  this.imuln(n),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              if (0 !== s) {
                var d = 1;
                for (h = u(t, a, t.length, e), a = 0; a < s; a++) d *= e;
                (this.imuln(d),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              }
              this._strip();
            }),
            (f.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (f.prototype._move = function (t) {
              a(t, this);
            }),
            (f.prototype.clone = function () {
              var t = new f(null);
              return (this.copy(t), t);
            }),
            (f.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (f.prototype._strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (f.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
          )
            try {
              f.prototype[Symbol.for("nodejs.util.inspect.custom")] = d;
            } catch (E) {
              f.prototype.inspect = d;
            }
          else f.prototype.inspect = d;
          function d() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var l = [
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
          ((f.prototype.toString = function (t, e) {
            var r;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              r = "";
              for (var n = 0, f = 0, s = 0; s < this.length; s++) {
                var o = this.words[s],
                  h = (16777215 & ((o << n) | f)).toString(16);
                ((f = (o >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (r =
                    0 !== f || s !== this.length - 1
                      ? l[6 - h.length] + h + r
                      : h + r));
              }
              0 !== f && (r = f.toString(16) + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var u = c[t],
                a = p[t];
              r = "";
              var d = this.clone();
              d.negative = 0;
              while (!d.isZero()) {
                var m = d.modrn(a).toString(t);
                ((d = d.idivn(a)),
                  (r = d.isZero() ? m + r : l[u - m.length] + m + r));
              }
              this.isZero() && (r = "0" + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            i(!1, "Base should be between 2 and 36");
          }),
            (f.prototype.toNumber = function () {
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
            (f.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (f.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(s, t, e);
              }),
            (f.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }));
          var m = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function v(t) {
            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
              var i = (r / 26) | 0,
                n = r % 26;
              e[r] = (t.words[i] >>> n) & 1;
            }
            return e;
          }
          function g(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var i = (t.length + e.length) | 0;
            ((r.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              f = 0 | e.words[0],
              s = n * f,
              o = 67108863 & s,
              h = (s / 67108864) | 0;
            r.words[0] = o;
            for (var u = 1; u < i; u++) {
              for (
                var a = h >>> 26,
                  d = 67108863 & h,
                  l = Math.min(u, e.length - 1),
                  c = Math.max(0, u - t.length + 1);
                c <= l;
                c++
              ) {
                var p = (u - c) | 0;
                ((n = 0 | t.words[p]),
                  (f = 0 | e.words[c]),
                  (s = n * f + d),
                  (a += (s / 67108864) | 0),
                  (d = 67108863 & s));
              }
              ((r.words[u] = 0 | d), (h = 0 | a));
            }
            return (0 !== h ? (r.words[u] = 0 | h) : r.length--, r._strip());
          }
          ((f.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var n = this.byteLength(),
              f = r || Math.max(1, n);
            (i(n <= f, "byte array longer than desired length"),
              i(f > 0, "Requested array length <= 0"));
            var s = m(t, f),
              o = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + o](s, n), s);
          }),
            (f.prototype._toArrayLikeLE = function (t, e) {
              for (var r = 0, i = 0, n = 0, f = 0; n < this.length; n++) {
                var s = (this.words[n] << f) | i;
                ((t[r++] = 255 & s),
                  r < t.length && (t[r++] = (s >> 8) & 255),
                  r < t.length && (t[r++] = (s >> 16) & 255),
                  6 === f
                    ? (r < t.length && (t[r++] = (s >> 24) & 255),
                      (i = 0),
                      (f = 0))
                    : ((i = s >>> 24), (f += 2)));
              }
              if (r < t.length) {
                t[r++] = i;
                while (r < t.length) t[r++] = 0;
              }
            }),
            (f.prototype._toArrayLikeBE = function (t, e) {
              for (
                var r = t.length - 1, i = 0, n = 0, f = 0;
                n < this.length;
                n++
              ) {
                var s = (this.words[n] << f) | i;
                ((t[r--] = 255 & s),
                  r >= 0 && (t[r--] = (s >> 8) & 255),
                  r >= 0 && (t[r--] = (s >> 16) & 255),
                  6 === f
                    ? (r >= 0 && (t[r--] = (s >> 24) & 255), (i = 0), (f = 0))
                    : ((i = s >>> 24), (f += 2)));
              }
              if (r >= 0) {
                t[r--] = i;
                while (r >= 0) t[r--] = 0;
              }
            }),
            Math.clz32
              ? (f.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (f.prototype._countBits = function (t) {
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
            (f.prototype._zeroBits = function (t) {
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
            (f.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (f.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e]);
                if (((t += r), 26 !== r)) break;
              }
              return t;
            }),
            (f.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (f.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (f.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (f.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (f.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (f.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (f.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (f.prototype.ior = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuor(t));
            }),
            (f.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (f.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (f.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var r = 0; r < e.length; r++)
                this.words[r] = this.words[r] & t.words[r];
              return ((this.length = e.length), this._strip());
            }),
            (f.prototype.iand = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuand(t));
            }),
            (f.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (f.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (f.prototype.iuxor = function (t) {
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
            (f.prototype.ixor = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuxor(t));
            }),
            (f.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (f.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (f.prototype.inotn = function (t) {
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
            (f.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (f.prototype.setn = function (t, e) {
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
            (f.prototype.iadd = function (t) {
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
              for (var n = 0, f = 0; f < i.length; f++)
                ((e = (0 | r.words[f]) + (0 | i.words[f]) + n),
                  (this.words[f] = 67108863 & e),
                  (n = e >>> 26));
              for (; 0 !== n && f < r.length; f++)
                ((e = (0 | r.words[f]) + n),
                  (this.words[f] = 67108863 & e),
                  (n = e >>> 26));
              if (((this.length = r.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (r !== this)
                for (; f < r.length; f++) this.words[f] = r.words[f];
              return this;
            }),
            (f.prototype.add = function (t) {
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
            (f.prototype.isub = function (t) {
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
              for (var f = 0, s = 0; s < i.length; s++)
                ((e = (0 | r.words[s]) - (0 | i.words[s]) + f),
                  (f = e >> 26),
                  (this.words[s] = 67108863 & e));
              for (; 0 !== f && s < r.length; s++)
                ((e = (0 | r.words[s]) + f),
                  (f = e >> 26),
                  (this.words[s] = 67108863 & e));
              if (0 === f && s < r.length && r !== this)
                for (; s < r.length; s++) this.words[s] = r.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                r !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (f.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var y = function (t, e, r) {
            var i,
              n,
              f,
              s = t.words,
              o = e.words,
              h = r.words,
              u = 0,
              a = 0 | s[0],
              d = 8191 & a,
              l = a >>> 13,
              c = 0 | s[1],
              p = 8191 & c,
              m = c >>> 13,
              v = 0 | s[2],
              g = 8191 & v,
              y = v >>> 13,
              b = 0 | s[3],
              M = 8191 & b,
              w = b >>> 13,
              A = 0 | s[4],
              _ = 8191 & A,
              x = A >>> 13,
              S = 0 | s[5],
              I = 8191 & S,
              P = S >>> 13,
              k = 0 | s[6],
              q = 8191 & k,
              E = k >>> 13,
              R = 0 | s[7],
              N = 8191 & R,
              L = R >>> 13,
              z = 0 | s[8],
              B = 8191 & z,
              O = z >>> 13,
              T = 0 | s[9],
              j = 8191 & T,
              K = T >>> 13,
              Z = 0 | o[0],
              F = 8191 & Z,
              D = Z >>> 13,
              C = 0 | o[1],
              J = 8191 & C,
              V = C >>> 13,
              U = 0 | o[2],
              W = 8191 & U,
              X = U >>> 13,
              G = 0 | o[3],
              H = 8191 & G,
              Y = G >>> 13,
              $ = 0 | o[4],
              Q = 8191 & $,
              tt = $ >>> 13,
              et = 0 | o[5],
              rt = 8191 & et,
              it = et >>> 13,
              nt = 0 | o[6],
              ft = 8191 & nt,
              st = nt >>> 13,
              ot = 0 | o[7],
              ht = 8191 & ot,
              ut = ot >>> 13,
              at = 0 | o[8],
              dt = 8191 & at,
              lt = at >>> 13,
              ct = 0 | o[9],
              pt = 8191 & ct,
              mt = ct >>> 13;
            ((r.negative = t.negative ^ e.negative),
              (r.length = 19),
              (i = Math.imul(d, F)),
              (n = Math.imul(d, D)),
              (n = (n + Math.imul(l, F)) | 0),
              (f = Math.imul(l, D)));
            var vt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(p, F)),
              (n = Math.imul(p, D)),
              (n = (n + Math.imul(m, F)) | 0),
              (f = Math.imul(m, D)),
              (i = (i + Math.imul(d, J)) | 0),
              (n = (n + Math.imul(d, V)) | 0),
              (n = (n + Math.imul(l, J)) | 0),
              (f = (f + Math.imul(l, V)) | 0));
            var gt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (i = Math.imul(g, F)),
              (n = Math.imul(g, D)),
              (n = (n + Math.imul(y, F)) | 0),
              (f = Math.imul(y, D)),
              (i = (i + Math.imul(p, J)) | 0),
              (n = (n + Math.imul(p, V)) | 0),
              (n = (n + Math.imul(m, J)) | 0),
              (f = (f + Math.imul(m, V)) | 0),
              (i = (i + Math.imul(d, W)) | 0),
              (n = (n + Math.imul(d, X)) | 0),
              (n = (n + Math.imul(l, W)) | 0),
              (f = (f + Math.imul(l, X)) | 0));
            var yt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(M, F)),
              (n = Math.imul(M, D)),
              (n = (n + Math.imul(w, F)) | 0),
              (f = Math.imul(w, D)),
              (i = (i + Math.imul(g, J)) | 0),
              (n = (n + Math.imul(g, V)) | 0),
              (n = (n + Math.imul(y, J)) | 0),
              (f = (f + Math.imul(y, V)) | 0),
              (i = (i + Math.imul(p, W)) | 0),
              (n = (n + Math.imul(p, X)) | 0),
              (n = (n + Math.imul(m, W)) | 0),
              (f = (f + Math.imul(m, X)) | 0),
              (i = (i + Math.imul(d, H)) | 0),
              (n = (n + Math.imul(d, Y)) | 0),
              (n = (n + Math.imul(l, H)) | 0),
              (f = (f + Math.imul(l, Y)) | 0));
            var bt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(_, F)),
              (n = Math.imul(_, D)),
              (n = (n + Math.imul(x, F)) | 0),
              (f = Math.imul(x, D)),
              (i = (i + Math.imul(M, J)) | 0),
              (n = (n + Math.imul(M, V)) | 0),
              (n = (n + Math.imul(w, J)) | 0),
              (f = (f + Math.imul(w, V)) | 0),
              (i = (i + Math.imul(g, W)) | 0),
              (n = (n + Math.imul(g, X)) | 0),
              (n = (n + Math.imul(y, W)) | 0),
              (f = (f + Math.imul(y, X)) | 0),
              (i = (i + Math.imul(p, H)) | 0),
              (n = (n + Math.imul(p, Y)) | 0),
              (n = (n + Math.imul(m, H)) | 0),
              (f = (f + Math.imul(m, Y)) | 0),
              (i = (i + Math.imul(d, Q)) | 0),
              (n = (n + Math.imul(d, tt)) | 0),
              (n = (n + Math.imul(l, Q)) | 0),
              (f = (f + Math.imul(l, tt)) | 0));
            var Mt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(I, F)),
              (n = Math.imul(I, D)),
              (n = (n + Math.imul(P, F)) | 0),
              (f = Math.imul(P, D)),
              (i = (i + Math.imul(_, J)) | 0),
              (n = (n + Math.imul(_, V)) | 0),
              (n = (n + Math.imul(x, J)) | 0),
              (f = (f + Math.imul(x, V)) | 0),
              (i = (i + Math.imul(M, W)) | 0),
              (n = (n + Math.imul(M, X)) | 0),
              (n = (n + Math.imul(w, W)) | 0),
              (f = (f + Math.imul(w, X)) | 0),
              (i = (i + Math.imul(g, H)) | 0),
              (n = (n + Math.imul(g, Y)) | 0),
              (n = (n + Math.imul(y, H)) | 0),
              (f = (f + Math.imul(y, Y)) | 0),
              (i = (i + Math.imul(p, Q)) | 0),
              (n = (n + Math.imul(p, tt)) | 0),
              (n = (n + Math.imul(m, Q)) | 0),
              (f = (f + Math.imul(m, tt)) | 0),
              (i = (i + Math.imul(d, rt)) | 0),
              (n = (n + Math.imul(d, it)) | 0),
              (n = (n + Math.imul(l, rt)) | 0),
              (f = (f + Math.imul(l, it)) | 0));
            var wt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(q, F)),
              (n = Math.imul(q, D)),
              (n = (n + Math.imul(E, F)) | 0),
              (f = Math.imul(E, D)),
              (i = (i + Math.imul(I, J)) | 0),
              (n = (n + Math.imul(I, V)) | 0),
              (n = (n + Math.imul(P, J)) | 0),
              (f = (f + Math.imul(P, V)) | 0),
              (i = (i + Math.imul(_, W)) | 0),
              (n = (n + Math.imul(_, X)) | 0),
              (n = (n + Math.imul(x, W)) | 0),
              (f = (f + Math.imul(x, X)) | 0),
              (i = (i + Math.imul(M, H)) | 0),
              (n = (n + Math.imul(M, Y)) | 0),
              (n = (n + Math.imul(w, H)) | 0),
              (f = (f + Math.imul(w, Y)) | 0),
              (i = (i + Math.imul(g, Q)) | 0),
              (n = (n + Math.imul(g, tt)) | 0),
              (n = (n + Math.imul(y, Q)) | 0),
              (f = (f + Math.imul(y, tt)) | 0),
              (i = (i + Math.imul(p, rt)) | 0),
              (n = (n + Math.imul(p, it)) | 0),
              (n = (n + Math.imul(m, rt)) | 0),
              (f = (f + Math.imul(m, it)) | 0),
              (i = (i + Math.imul(d, ft)) | 0),
              (n = (n + Math.imul(d, st)) | 0),
              (n = (n + Math.imul(l, ft)) | 0),
              (f = (f + Math.imul(l, st)) | 0));
            var At = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(N, F)),
              (n = Math.imul(N, D)),
              (n = (n + Math.imul(L, F)) | 0),
              (f = Math.imul(L, D)),
              (i = (i + Math.imul(q, J)) | 0),
              (n = (n + Math.imul(q, V)) | 0),
              (n = (n + Math.imul(E, J)) | 0),
              (f = (f + Math.imul(E, V)) | 0),
              (i = (i + Math.imul(I, W)) | 0),
              (n = (n + Math.imul(I, X)) | 0),
              (n = (n + Math.imul(P, W)) | 0),
              (f = (f + Math.imul(P, X)) | 0),
              (i = (i + Math.imul(_, H)) | 0),
              (n = (n + Math.imul(_, Y)) | 0),
              (n = (n + Math.imul(x, H)) | 0),
              (f = (f + Math.imul(x, Y)) | 0),
              (i = (i + Math.imul(M, Q)) | 0),
              (n = (n + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(w, Q)) | 0),
              (f = (f + Math.imul(w, tt)) | 0),
              (i = (i + Math.imul(g, rt)) | 0),
              (n = (n + Math.imul(g, it)) | 0),
              (n = (n + Math.imul(y, rt)) | 0),
              (f = (f + Math.imul(y, it)) | 0),
              (i = (i + Math.imul(p, ft)) | 0),
              (n = (n + Math.imul(p, st)) | 0),
              (n = (n + Math.imul(m, ft)) | 0),
              (f = (f + Math.imul(m, st)) | 0),
              (i = (i + Math.imul(d, ht)) | 0),
              (n = (n + Math.imul(d, ut)) | 0),
              (n = (n + Math.imul(l, ht)) | 0),
              (f = (f + Math.imul(l, ut)) | 0));
            var _t = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(B, F)),
              (n = Math.imul(B, D)),
              (n = (n + Math.imul(O, F)) | 0),
              (f = Math.imul(O, D)),
              (i = (i + Math.imul(N, J)) | 0),
              (n = (n + Math.imul(N, V)) | 0),
              (n = (n + Math.imul(L, J)) | 0),
              (f = (f + Math.imul(L, V)) | 0),
              (i = (i + Math.imul(q, W)) | 0),
              (n = (n + Math.imul(q, X)) | 0),
              (n = (n + Math.imul(E, W)) | 0),
              (f = (f + Math.imul(E, X)) | 0),
              (i = (i + Math.imul(I, H)) | 0),
              (n = (n + Math.imul(I, Y)) | 0),
              (n = (n + Math.imul(P, H)) | 0),
              (f = (f + Math.imul(P, Y)) | 0),
              (i = (i + Math.imul(_, Q)) | 0),
              (n = (n + Math.imul(_, tt)) | 0),
              (n = (n + Math.imul(x, Q)) | 0),
              (f = (f + Math.imul(x, tt)) | 0),
              (i = (i + Math.imul(M, rt)) | 0),
              (n = (n + Math.imul(M, it)) | 0),
              (n = (n + Math.imul(w, rt)) | 0),
              (f = (f + Math.imul(w, it)) | 0),
              (i = (i + Math.imul(g, ft)) | 0),
              (n = (n + Math.imul(g, st)) | 0),
              (n = (n + Math.imul(y, ft)) | 0),
              (f = (f + Math.imul(y, st)) | 0),
              (i = (i + Math.imul(p, ht)) | 0),
              (n = (n + Math.imul(p, ut)) | 0),
              (n = (n + Math.imul(m, ht)) | 0),
              (f = (f + Math.imul(m, ut)) | 0),
              (i = (i + Math.imul(d, dt)) | 0),
              (n = (n + Math.imul(d, lt)) | 0),
              (n = (n + Math.imul(l, dt)) | 0),
              (f = (f + Math.imul(l, lt)) | 0));
            var xt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(j, F)),
              (n = Math.imul(j, D)),
              (n = (n + Math.imul(K, F)) | 0),
              (f = Math.imul(K, D)),
              (i = (i + Math.imul(B, J)) | 0),
              (n = (n + Math.imul(B, V)) | 0),
              (n = (n + Math.imul(O, J)) | 0),
              (f = (f + Math.imul(O, V)) | 0),
              (i = (i + Math.imul(N, W)) | 0),
              (n = (n + Math.imul(N, X)) | 0),
              (n = (n + Math.imul(L, W)) | 0),
              (f = (f + Math.imul(L, X)) | 0),
              (i = (i + Math.imul(q, H)) | 0),
              (n = (n + Math.imul(q, Y)) | 0),
              (n = (n + Math.imul(E, H)) | 0),
              (f = (f + Math.imul(E, Y)) | 0),
              (i = (i + Math.imul(I, Q)) | 0),
              (n = (n + Math.imul(I, tt)) | 0),
              (n = (n + Math.imul(P, Q)) | 0),
              (f = (f + Math.imul(P, tt)) | 0),
              (i = (i + Math.imul(_, rt)) | 0),
              (n = (n + Math.imul(_, it)) | 0),
              (n = (n + Math.imul(x, rt)) | 0),
              (f = (f + Math.imul(x, it)) | 0),
              (i = (i + Math.imul(M, ft)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(w, ft)) | 0),
              (f = (f + Math.imul(w, st)) | 0),
              (i = (i + Math.imul(g, ht)) | 0),
              (n = (n + Math.imul(g, ut)) | 0),
              (n = (n + Math.imul(y, ht)) | 0),
              (f = (f + Math.imul(y, ut)) | 0),
              (i = (i + Math.imul(p, dt)) | 0),
              (n = (n + Math.imul(p, lt)) | 0),
              (n = (n + Math.imul(m, dt)) | 0),
              (f = (f + Math.imul(m, lt)) | 0),
              (i = (i + Math.imul(d, pt)) | 0),
              (n = (n + Math.imul(d, mt)) | 0),
              (n = (n + Math.imul(l, pt)) | 0),
              (f = (f + Math.imul(l, mt)) | 0));
            var St = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(j, J)),
              (n = Math.imul(j, V)),
              (n = (n + Math.imul(K, J)) | 0),
              (f = Math.imul(K, V)),
              (i = (i + Math.imul(B, W)) | 0),
              (n = (n + Math.imul(B, X)) | 0),
              (n = (n + Math.imul(O, W)) | 0),
              (f = (f + Math.imul(O, X)) | 0),
              (i = (i + Math.imul(N, H)) | 0),
              (n = (n + Math.imul(N, Y)) | 0),
              (n = (n + Math.imul(L, H)) | 0),
              (f = (f + Math.imul(L, Y)) | 0),
              (i = (i + Math.imul(q, Q)) | 0),
              (n = (n + Math.imul(q, tt)) | 0),
              (n = (n + Math.imul(E, Q)) | 0),
              (f = (f + Math.imul(E, tt)) | 0),
              (i = (i + Math.imul(I, rt)) | 0),
              (n = (n + Math.imul(I, it)) | 0),
              (n = (n + Math.imul(P, rt)) | 0),
              (f = (f + Math.imul(P, it)) | 0),
              (i = (i + Math.imul(_, ft)) | 0),
              (n = (n + Math.imul(_, st)) | 0),
              (n = (n + Math.imul(x, ft)) | 0),
              (f = (f + Math.imul(x, st)) | 0),
              (i = (i + Math.imul(M, ht)) | 0),
              (n = (n + Math.imul(M, ut)) | 0),
              (n = (n + Math.imul(w, ht)) | 0),
              (f = (f + Math.imul(w, ut)) | 0),
              (i = (i + Math.imul(g, dt)) | 0),
              (n = (n + Math.imul(g, lt)) | 0),
              (n = (n + Math.imul(y, dt)) | 0),
              (f = (f + Math.imul(y, lt)) | 0),
              (i = (i + Math.imul(p, pt)) | 0),
              (n = (n + Math.imul(p, mt)) | 0),
              (n = (n + Math.imul(m, pt)) | 0),
              (f = (f + Math.imul(m, mt)) | 0));
            var It = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (i = Math.imul(j, W)),
              (n = Math.imul(j, X)),
              (n = (n + Math.imul(K, W)) | 0),
              (f = Math.imul(K, X)),
              (i = (i + Math.imul(B, H)) | 0),
              (n = (n + Math.imul(B, Y)) | 0),
              (n = (n + Math.imul(O, H)) | 0),
              (f = (f + Math.imul(O, Y)) | 0),
              (i = (i + Math.imul(N, Q)) | 0),
              (n = (n + Math.imul(N, tt)) | 0),
              (n = (n + Math.imul(L, Q)) | 0),
              (f = (f + Math.imul(L, tt)) | 0),
              (i = (i + Math.imul(q, rt)) | 0),
              (n = (n + Math.imul(q, it)) | 0),
              (n = (n + Math.imul(E, rt)) | 0),
              (f = (f + Math.imul(E, it)) | 0),
              (i = (i + Math.imul(I, ft)) | 0),
              (n = (n + Math.imul(I, st)) | 0),
              (n = (n + Math.imul(P, ft)) | 0),
              (f = (f + Math.imul(P, st)) | 0),
              (i = (i + Math.imul(_, ht)) | 0),
              (n = (n + Math.imul(_, ut)) | 0),
              (n = (n + Math.imul(x, ht)) | 0),
              (f = (f + Math.imul(x, ut)) | 0),
              (i = (i + Math.imul(M, dt)) | 0),
              (n = (n + Math.imul(M, lt)) | 0),
              (n = (n + Math.imul(w, dt)) | 0),
              (f = (f + Math.imul(w, lt)) | 0),
              (i = (i + Math.imul(g, pt)) | 0),
              (n = (n + Math.imul(g, mt)) | 0),
              (n = (n + Math.imul(y, pt)) | 0),
              (f = (f + Math.imul(y, mt)) | 0));
            var Pt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(j, H)),
              (n = Math.imul(j, Y)),
              (n = (n + Math.imul(K, H)) | 0),
              (f = Math.imul(K, Y)),
              (i = (i + Math.imul(B, Q)) | 0),
              (n = (n + Math.imul(B, tt)) | 0),
              (n = (n + Math.imul(O, Q)) | 0),
              (f = (f + Math.imul(O, tt)) | 0),
              (i = (i + Math.imul(N, rt)) | 0),
              (n = (n + Math.imul(N, it)) | 0),
              (n = (n + Math.imul(L, rt)) | 0),
              (f = (f + Math.imul(L, it)) | 0),
              (i = (i + Math.imul(q, ft)) | 0),
              (n = (n + Math.imul(q, st)) | 0),
              (n = (n + Math.imul(E, ft)) | 0),
              (f = (f + Math.imul(E, st)) | 0),
              (i = (i + Math.imul(I, ht)) | 0),
              (n = (n + Math.imul(I, ut)) | 0),
              (n = (n + Math.imul(P, ht)) | 0),
              (f = (f + Math.imul(P, ut)) | 0),
              (i = (i + Math.imul(_, dt)) | 0),
              (n = (n + Math.imul(_, lt)) | 0),
              (n = (n + Math.imul(x, dt)) | 0),
              (f = (f + Math.imul(x, lt)) | 0),
              (i = (i + Math.imul(M, pt)) | 0),
              (n = (n + Math.imul(M, mt)) | 0),
              (n = (n + Math.imul(w, pt)) | 0),
              (f = (f + Math.imul(w, mt)) | 0));
            var kt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (i = Math.imul(j, Q)),
              (n = Math.imul(j, tt)),
              (n = (n + Math.imul(K, Q)) | 0),
              (f = Math.imul(K, tt)),
              (i = (i + Math.imul(B, rt)) | 0),
              (n = (n + Math.imul(B, it)) | 0),
              (n = (n + Math.imul(O, rt)) | 0),
              (f = (f + Math.imul(O, it)) | 0),
              (i = (i + Math.imul(N, ft)) | 0),
              (n = (n + Math.imul(N, st)) | 0),
              (n = (n + Math.imul(L, ft)) | 0),
              (f = (f + Math.imul(L, st)) | 0),
              (i = (i + Math.imul(q, ht)) | 0),
              (n = (n + Math.imul(q, ut)) | 0),
              (n = (n + Math.imul(E, ht)) | 0),
              (f = (f + Math.imul(E, ut)) | 0),
              (i = (i + Math.imul(I, dt)) | 0),
              (n = (n + Math.imul(I, lt)) | 0),
              (n = (n + Math.imul(P, dt)) | 0),
              (f = (f + Math.imul(P, lt)) | 0),
              (i = (i + Math.imul(_, pt)) | 0),
              (n = (n + Math.imul(_, mt)) | 0),
              (n = (n + Math.imul(x, pt)) | 0),
              (f = (f + Math.imul(x, mt)) | 0));
            var qt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (qt >>> 26)) | 0),
              (qt &= 67108863),
              (i = Math.imul(j, rt)),
              (n = Math.imul(j, it)),
              (n = (n + Math.imul(K, rt)) | 0),
              (f = Math.imul(K, it)),
              (i = (i + Math.imul(B, ft)) | 0),
              (n = (n + Math.imul(B, st)) | 0),
              (n = (n + Math.imul(O, ft)) | 0),
              (f = (f + Math.imul(O, st)) | 0),
              (i = (i + Math.imul(N, ht)) | 0),
              (n = (n + Math.imul(N, ut)) | 0),
              (n = (n + Math.imul(L, ht)) | 0),
              (f = (f + Math.imul(L, ut)) | 0),
              (i = (i + Math.imul(q, dt)) | 0),
              (n = (n + Math.imul(q, lt)) | 0),
              (n = (n + Math.imul(E, dt)) | 0),
              (f = (f + Math.imul(E, lt)) | 0),
              (i = (i + Math.imul(I, pt)) | 0),
              (n = (n + Math.imul(I, mt)) | 0),
              (n = (n + Math.imul(P, pt)) | 0),
              (f = (f + Math.imul(P, mt)) | 0));
            var Et = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(j, ft)),
              (n = Math.imul(j, st)),
              (n = (n + Math.imul(K, ft)) | 0),
              (f = Math.imul(K, st)),
              (i = (i + Math.imul(B, ht)) | 0),
              (n = (n + Math.imul(B, ut)) | 0),
              (n = (n + Math.imul(O, ht)) | 0),
              (f = (f + Math.imul(O, ut)) | 0),
              (i = (i + Math.imul(N, dt)) | 0),
              (n = (n + Math.imul(N, lt)) | 0),
              (n = (n + Math.imul(L, dt)) | 0),
              (f = (f + Math.imul(L, lt)) | 0),
              (i = (i + Math.imul(q, pt)) | 0),
              (n = (n + Math.imul(q, mt)) | 0),
              (n = (n + Math.imul(E, pt)) | 0),
              (f = (f + Math.imul(E, mt)) | 0));
            var Rt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(j, ht)),
              (n = Math.imul(j, ut)),
              (n = (n + Math.imul(K, ht)) | 0),
              (f = Math.imul(K, ut)),
              (i = (i + Math.imul(B, dt)) | 0),
              (n = (n + Math.imul(B, lt)) | 0),
              (n = (n + Math.imul(O, dt)) | 0),
              (f = (f + Math.imul(O, lt)) | 0),
              (i = (i + Math.imul(N, pt)) | 0),
              (n = (n + Math.imul(N, mt)) | 0),
              (n = (n + Math.imul(L, pt)) | 0),
              (f = (f + Math.imul(L, mt)) | 0));
            var Nt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (i = Math.imul(j, dt)),
              (n = Math.imul(j, lt)),
              (n = (n + Math.imul(K, dt)) | 0),
              (f = Math.imul(K, lt)),
              (i = (i + Math.imul(B, pt)) | 0),
              (n = (n + Math.imul(B, mt)) | 0),
              (n = (n + Math.imul(O, pt)) | 0),
              (f = (f + Math.imul(O, mt)) | 0));
            var Lt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((f + (n >>> 13)) | 0) + (Lt >>> 26)) | 0),
              (Lt &= 67108863),
              (i = Math.imul(j, pt)),
              (n = Math.imul(j, mt)),
              (n = (n + Math.imul(K, pt)) | 0),
              (f = Math.imul(K, mt)));
            var zt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (u = (((f + (n >>> 13)) | 0) + (zt >>> 26)) | 0),
              (zt &= 67108863),
              (h[0] = vt),
              (h[1] = gt),
              (h[2] = yt),
              (h[3] = bt),
              (h[4] = Mt),
              (h[5] = wt),
              (h[6] = At),
              (h[7] = _t),
              (h[8] = xt),
              (h[9] = St),
              (h[10] = It),
              (h[11] = Pt),
              (h[12] = kt),
              (h[13] = qt),
              (h[14] = Et),
              (h[15] = Rt),
              (h[16] = Nt),
              (h[17] = Lt),
              (h[18] = zt),
              0 !== u && ((h[19] = u), r.length++),
              r
            );
          };
          function b(t, e, r) {
            ((r.negative = e.negative ^ t.negative),
              (r.length = t.length + e.length));
            for (var i = 0, n = 0, f = 0; f < r.length - 1; f++) {
              var s = n;
              n = 0;
              for (
                var o = 67108863 & i,
                  h = Math.min(f, e.length - 1),
                  u = Math.max(0, f - t.length + 1);
                u <= h;
                u++
              ) {
                var a = f - u,
                  d = 0 | t.words[a],
                  l = 0 | e.words[u],
                  c = d * l,
                  p = 67108863 & c;
                ((s = (s + ((c / 67108864) | 0)) | 0),
                  (p = (p + o) | 0),
                  (o = 67108863 & p),
                  (s = (s + (p >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((r.words[f] = o), (i = s), (s = n));
            }
            return (0 !== i ? (r.words[f] = i) : r.length--, r._strip());
          }
          function M(t, e, r) {
            return b(t, e, r);
          }
          function w(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (y = g),
            (f.prototype.mulTo = function (t, e) {
              var r,
                i = this.length + t.length;
              return (
                (r =
                  10 === this.length && 10 === t.length
                    ? y(this, t, e)
                    : i < 63
                      ? g(this, t, e)
                      : i < 1024
                        ? b(this, t, e)
                        : M(this, t, e)),
                r
              );
            }),
            (w.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), r = f.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                e[i] = this.revBin(i, r, t);
              return e;
            }),
            (w.prototype.revBin = function (t, e, r) {
              if (0 === t || t === r - 1) return t;
              for (var i = 0, n = 0; n < e; n++)
                ((i |= (1 & t) << (e - n - 1)), (t >>= 1));
              return i;
            }),
            (w.prototype.permute = function (t, e, r, i, n, f) {
              for (var s = 0; s < f; s++) ((i[s] = e[t[s]]), (n[s] = r[t[s]]));
            }),
            (w.prototype.transform = function (t, e, r, i, n, f) {
              this.permute(f, t, e, r, i, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var o = s << 1,
                    h = Math.cos((2 * Math.PI) / o),
                    u = Math.sin((2 * Math.PI) / o),
                    a = 0;
                  a < n;
                  a += o
                )
                  for (var d = h, l = u, c = 0; c < s; c++) {
                    var p = r[a + c],
                      m = i[a + c],
                      v = r[a + c + s],
                      g = i[a + c + s],
                      y = d * v - l * g;
                    ((g = d * g + l * v),
                      (v = y),
                      (r[a + c] = p + v),
                      (i[a + c] = m + g),
                      (r[a + c + s] = p - v),
                      (i[a + c + s] = m - g),
                      c !== o &&
                        ((y = h * d - u * l), (l = h * l + u * d), (d = y)));
                  }
            }),
            (w.prototype.guessLen13b = function (t, e) {
              var r = 1 | Math.max(e, t),
                i = 1 & r,
                n = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (w.prototype.conjugate = function (t, e, r) {
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
            (w.prototype.normalize13b = function (t, e) {
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
            (w.prototype.convert13b = function (t, e, r, n) {
              for (var f = 0, s = 0; s < e; s++)
                ((f += 0 | t[s]),
                  (r[2 * s] = 8191 & f),
                  (f >>>= 13),
                  (r[2 * s + 1] = 8191 & f),
                  (f >>>= 13));
              for (s = 2 * e; s < n; ++s) r[s] = 0;
              (i(0 === f), i(0 === (-8192 & f)));
            }),
            (w.prototype.stub = function (t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
              return e;
            }),
            (w.prototype.mulp = function (t, e, r) {
              var i = 2 * this.guessLen13b(t.length, e.length),
                n = this.makeRBT(i),
                f = this.stub(i),
                s = new Array(i),
                o = new Array(i),
                h = new Array(i),
                u = new Array(i),
                a = new Array(i),
                d = new Array(i),
                l = r.words;
              ((l.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(e.words, e.length, u, i),
                this.transform(s, f, o, h, i, n),
                this.transform(u, f, a, d, i, n));
              for (var c = 0; c < i; c++) {
                var p = o[c] * a[c] - h[c] * d[c];
                ((h[c] = o[c] * d[c] + h[c] * a[c]), (o[c] = p));
              }
              return (
                this.conjugate(o, h, i),
                this.transform(o, h, l, f, i, n),
                this.conjugate(l, f, i),
                this.normalize13b(l, i),
                (r.negative = t.negative ^ e.negative),
                (r.length = t.length + e.length),
                r._strip()
              );
            }),
            (f.prototype.mul = function (t) {
              var e = new f(null);
              return (
                (e.words = new Array(this.length + t.length)),
                this.mulTo(t, e)
              );
            }),
            (f.prototype.mulf = function (t) {
              var e = new f(null);
              return (
                (e.words = new Array(this.length + t.length)),
                M(this, t, e)
              );
            }),
            (f.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (f.prototype.imuln = function (t) {
              var e = t < 0;
              (e && (t = -t), i("number" === typeof t), i(t < 67108864));
              for (var r = 0, n = 0; n < this.length; n++) {
                var f = (0 | this.words[n]) * t,
                  s = (67108863 & f) + (67108863 & r);
                ((r >>= 26),
                  (r += (f / 67108864) | 0),
                  (r += s >>> 26),
                  (this.words[n] = 67108863 & s));
              }
              return (
                0 !== r && ((this.words[n] = r), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                e ? this.ineg() : this
              );
            }),
            (f.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (f.prototype.sqr = function () {
              return this.mul(this);
            }),
            (f.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (f.prototype.pow = function (t) {
              var e = v(t);
              if (0 === e.length) return new f(1);
              for (var r = this, i = 0; i < e.length; i++, r = r.sqr())
                if (0 !== e[i]) break;
              if (++i < e.length)
                for (var n = r.sqr(); i < e.length; i++, n = n.sqr())
                  0 !== e[i] && (r = r.mul(n));
              return r;
            }),
            (f.prototype.iushln = function (t) {
              i("number" === typeof t && t >= 0);
              var e,
                r = t % 26,
                n = (t - r) / 26,
                f = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var s = 0;
                for (e = 0; e < this.length; e++) {
                  var o = this.words[e] & f,
                    h = ((0 | this.words[e]) - o) << r;
                  ((this.words[e] = h | s), (s = o >>> (26 - r)));
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
            (f.prototype.ishln = function (t) {
              return (i(0 === this.negative), this.iushln(t));
            }),
            (f.prototype.iushrn = function (t, e, r) {
              var n;
              (i("number" === typeof t && t >= 0),
                (n = e ? (e - (e % 26)) / 26 : 0));
              var f = t % 26,
                s = Math.min((t - f) / 26, this.length),
                o = 67108863 ^ ((67108863 >>> f) << f),
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
                var d = 0 | this.words[u];
                ((this.words[u] = (a << (26 - f)) | (d >>> f)), (a = d & o));
              }
              return (
                h && 0 !== a && (h.words[h.length++] = a),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (f.prototype.ishrn = function (t, e, r) {
              return (i(0 === this.negative), this.iushrn(t, e, r));
            }),
            (f.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (f.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (f.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (f.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (f.prototype.testn = function (t) {
              i("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26,
                n = 1 << e;
              if (this.length <= r) return !1;
              var f = this.words[r];
              return !!(f & n);
            }),
            (f.prototype.imaskn = function (t) {
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
            (f.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (f.prototype.iaddn = function (t) {
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
            (f.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
            }),
            (f.prototype.isubn = function (t) {
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
            (f.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (f.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (f.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (f.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (f.prototype._ishlnsubmul = function (t, e, r) {
              var n,
                f,
                s = t.length + r;
              this._expand(s);
              var o = 0;
              for (n = 0; n < t.length; n++) {
                f = (0 | this.words[n + r]) + o;
                var h = (0 | t.words[n]) * e;
                ((f -= 67108863 & h),
                  (o = (f >> 26) - ((h / 67108864) | 0)),
                  (this.words[n + r] = 67108863 & f));
              }
              for (; n < this.length - r; n++)
                ((f = (0 | this.words[n + r]) + o),
                  (o = f >> 26),
                  (this.words[n + r] = 67108863 & f));
              if (0 === o) return this._strip();
              for (i(-1 === o), o = 0, n = 0; n < this.length; n++)
                ((f = -(0 | this.words[n]) + o),
                  (o = f >> 26),
                  (this.words[n] = 67108863 & f));
              return ((this.negative = 1), this._strip());
            }),
            (f.prototype._wordDiv = function (t, e) {
              var r = this.length - t.length,
                i = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                o = this._countBits(s);
              ((r = 26 - o),
                0 !== r &&
                  ((n = n.ushln(r)),
                  i.iushln(r),
                  (s = 0 | n.words[n.length - 1])));
              var h,
                u = i.length - n.length;
              if ("mod" !== e) {
                ((h = new f(null)),
                  (h.length = u + 1),
                  (h.words = new Array(h.length)));
                for (var a = 0; a < h.length; a++) h.words[a] = 0;
              }
              var d = i.clone()._ishlnsubmul(n, 1, u);
              0 === d.negative && ((i = d), h && (h.words[u] = 1));
              for (var l = u - 1; l >= 0; l--) {
                var c =
                  67108864 * (0 | i.words[n.length + l]) +
                  (0 | i.words[n.length + l - 1]);
                ((c = Math.min((c / s) | 0, 67108863)),
                  i._ishlnsubmul(n, c, l));
                while (0 !== i.negative)
                  (c--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, l),
                    i.isZero() || (i.negative ^= 1));
                h && (h.words[l] = c);
              }
              return (
                h && h._strip(),
                i._strip(),
                "div" !== e && 0 !== r && i.iushrn(r),
                { div: h || null, mod: i }
              );
            }),
            (f.prototype.divmod = function (t, e, r) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new f(0), mod: new f(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((o = this.neg().divmod(t, e)),
                      "mod" !== e && (n = o.div.neg()),
                      "div" !== e &&
                        ((s = o.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((o = this.divmod(t.neg(), e)),
                        "mod" !== e && (n = o.div.neg()),
                        { div: n, mod: o.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((o = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((s = o.mod.neg()),
                            r && 0 !== s.negative && s.isub(t)),
                          { div: o.div, mod: s })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new f(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new f(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new f(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
              );
              var n, s, o;
            }),
            (f.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (f.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (f.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (f.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                i = t.ushrn(1),
                n = t.andln(1),
                f = r.cmp(i);
              return f < 0 || (1 === n && 0 === f)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (f.prototype.modrn = function (t) {
              var e = t < 0;
              (e && (t = -t), i(t <= 67108863));
              for (
                var r = (1 << 26) % t, n = 0, f = this.length - 1;
                f >= 0;
                f--
              )
                n = (r * n + (0 | this.words[f])) % t;
              return e ? -n : n;
            }),
            (f.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (f.prototype.idivn = function (t) {
              var e = t < 0;
              (e && (t = -t), i(t <= 67108863));
              for (var r = 0, n = this.length - 1; n >= 0; n--) {
                var f = (0 | this.words[n]) + 67108864 * r;
                ((this.words[n] = (f / t) | 0), (r = f % t));
              }
              return (this._strip(), e ? this.ineg() : this);
            }),
            (f.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (f.prototype.egcd = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n = new f(1),
                s = new f(0),
                o = new f(0),
                h = new f(1),
                u = 0;
              while (e.isEven() && r.isEven()) (e.iushrn(1), r.iushrn(1), ++u);
              var a = r.clone(),
                d = e.clone();
              while (!e.isZero()) {
                for (
                  var l = 0, c = 1;
                  0 === (e.words[0] & c) && l < 26;
                  ++l, c <<= 1
                );
                if (l > 0) {
                  e.iushrn(l);
                  while (l-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(a), s.isub(d)),
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
                    ((o.isOdd() || h.isOdd()) && (o.iadd(a), h.isub(d)),
                      o.iushrn(1),
                      h.iushrn(1));
                }
                e.cmp(r) >= 0
                  ? (e.isub(r), n.isub(o), s.isub(h))
                  : (r.isub(e), o.isub(n), h.isub(s));
              }
              return { a: o, b: h, gcd: r.iushln(u) };
            }),
            (f.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                s = new f(1),
                o = new f(0),
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
                  var d = 0, l = 1;
                  0 === (r.words[0] & l) && d < 26;
                  ++d, l <<= 1
                );
                if (d > 0) {
                  r.iushrn(d);
                  while (d-- > 0) (o.isOdd() && o.iadd(h), o.iushrn(1));
                }
                e.cmp(r) >= 0 ? (e.isub(r), s.isub(o)) : (r.isub(e), o.isub(s));
              }
              return (
                (n = 0 === e.cmpn(1) ? s : o),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (f.prototype.gcd = function (t) {
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
                  var f = e;
                  ((e = r), (r = f));
                } else if (0 === n || 0 === r.cmpn(1)) break;
                e.isub(r);
              } while (1);
              return r.iushln(i);
            }),
            (f.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (f.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (f.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (f.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (f.prototype.bincn = function (t) {
              i("number" === typeof t);
              var e = t % 26,
                r = (t - e) / 26,
                n = 1 << e;
              if (this.length <= r)
                return (this._expand(r + 1), (this.words[r] |= n), this);
              for (var f = n, s = r; 0 !== f && s < this.length; s++) {
                var o = 0 | this.words[s];
                ((o += f),
                  (f = o >>> 26),
                  (o &= 67108863),
                  (this.words[s] = o));
              }
              return (0 !== f && ((this.words[s] = f), this.length++), this);
            }),
            (f.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (f.prototype.cmpn = function (t) {
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
            (f.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (f.prototype.ucmp = function (t) {
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
            (f.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (f.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (f.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (f.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (f.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (f.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (f.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (f.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (f.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (f.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (f.red = function (t) {
              return new k(t);
            }),
            (f.prototype.toRed = function (t) {
              return (
                i(!this.red, "Already a number in reduction context"),
                i(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (f.prototype.fromRed = function () {
              return (
                i(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (f.prototype._forceRed = function (t) {
              return ((this.red = t), this);
            }),
            (f.prototype.forceRed = function (t) {
              return (
                i(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (f.prototype.redAdd = function (t) {
              return (
                i(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (f.prototype.redIAdd = function (t) {
              return (
                i(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (f.prototype.redSub = function (t) {
              return (
                i(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (f.prototype.redISub = function (t) {
              return (
                i(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (f.prototype.redShl = function (t) {
              return (
                i(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (f.prototype.redMul = function (t) {
              return (
                i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (f.prototype.redIMul = function (t) {
              return (
                i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (f.prototype.redSqr = function () {
              return (
                i(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (f.prototype.redISqr = function () {
              return (
                i(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (f.prototype.redSqrt = function () {
              return (
                i(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (f.prototype.redInvm = function () {
              return (
                i(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (f.prototype.redNeg = function () {
              return (
                i(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (f.prototype.redPow = function (t) {
              return (
                i(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var A = { k256: null, p224: null, p192: null, p25519: null };
          function _(t, e) {
            ((this.name = t),
              (this.p = new f(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new f(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function x() {
            _.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function S() {
            _.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function I() {
            _.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function P() {
            _.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function k(t) {
            if ("string" === typeof t) {
              var e = f._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function q(t) {
            (k.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new f(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((_.prototype._tmp = function () {
            var t = new f(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (_.prototype.ireduce = function (t) {
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
            (_.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (_.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(x, _),
            (x.prototype.split = function (t, e) {
              for (
                var r = 4194303, i = Math.min(t.length, 9), n = 0;
                n < i;
                n++
              )
                e.words[n] = t.words[n];
              if (((e.length = i), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var f = t.words[9];
              for (e.words[e.length++] = f & r, n = 10; n < t.length; n++) {
                var s = 0 | t.words[n];
                ((t.words[n - 10] = ((s & r) << 4) | (f >>> 22)), (f = s));
              }
              ((f >>>= 22),
                (t.words[n - 10] = f),
                0 === f && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (x.prototype.imulK = function (t) {
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
            n(S, _),
            n(I, _),
            n(P, _),
            (P.prototype.imulK = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 19 * (0 | t.words[r]) + e,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[r] = n), (e = i));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (f._prime = function (t) {
              if (A[t]) return A[t];
              var e;
              if ("k256" === t) e = new x();
              else if ("p224" === t) e = new S();
              else if ("p192" === t) e = new I();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new P();
              }
              return ((A[t] = e), e);
            }),
            (k.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (k.prototype._verify2 = function (t, e) {
              (i(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (k.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (a(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (k.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (k.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (k.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (k.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (k.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (k.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (k.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (k.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (k.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (k.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (k.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((i(e % 2 === 1), 3 === e)) {
                var r = this.m.add(new f(1)).iushrn(2);
                return this.pow(t, r);
              }
              var n = this.m.subn(1),
                s = 0;
              while (!n.isZero() && 0 === n.andln(1)) (s++, n.iushrn(1));
              i(!n.isZero());
              var o = new f(1).toRed(this),
                h = o.redNeg(),
                u = this.m.subn(1).iushrn(1),
                a = this.m.bitLength();
              a = new f(2 * a * a).toRed(this);
              while (0 !== this.pow(a, u).cmp(h)) a.redIAdd(h);
              var d = this.pow(a, n),
                l = this.pow(t, n.addn(1).iushrn(1)),
                c = this.pow(t, n),
                p = s;
              while (0 !== c.cmp(o)) {
                for (var m = c, v = 0; 0 !== m.cmp(o); v++) m = m.redSqr();
                i(v < p);
                var g = this.pow(d, new f(1).iushln(p - v - 1));
                ((l = l.redMul(g)),
                  (d = g.redSqr()),
                  (c = c.redMul(d)),
                  (p = v));
              }
              return l;
            }),
            (k.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (k.prototype.pow = function (t, e) {
              if (e.isZero()) return new f(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var r = 4,
                i = new Array(1 << r);
              ((i[0] = new f(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var s = i[0],
                o = 0,
                h = 0,
                u = e.bitLength() % 26;
              for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                for (var a = e.words[n], d = u - 1; d >= 0; d--) {
                  var l = (a >> d) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== l || 0 !== o
                      ? ((o <<= 1),
                        (o |= l),
                        h++,
                        (h === r || (0 === n && 0 === d)) &&
                          ((s = this.mul(s, i[o])), (h = 0), (o = 0)))
                      : (h = 0));
                }
                u = 26;
              }
              return s;
            }),
            (k.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (k.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (f.mont = function (t) {
              return new q(t);
            }),
            n(q, k),
            (q.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (q.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (q.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var r = t.imul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                f = n;
              return (
                n.cmp(this.m) >= 0
                  ? (f = n.isub(this.m))
                  : n.cmpn(0) < 0 && (f = n.iadd(this.m)),
                f._forceRed(this)
              );
            }),
            (q.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new f(0)._forceRed(this);
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
            (q.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, r(20)(t));
    },
    7167: function (t, e) {},
    7168: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "signing-key/5.8.0";
    },
    7169: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "transactions/5.8.0";
    },
  },
]);
