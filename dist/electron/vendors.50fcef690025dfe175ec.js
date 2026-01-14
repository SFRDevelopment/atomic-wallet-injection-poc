(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [184],
  {
    11370: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = {
        Address: !0,
        bigintToArray: !0,
        getChecksum: !0,
        validateChecksum: !0,
        newAddress: !0,
        newIDAddress: !0,
        newActorAddress: !0,
        newSecp256k1Address: !0,
        newBLSAddress: !0,
        newDelegatedAddress: !0,
        newDelegatedEthAddress: !0,
        decode: !0,
        encode: !0,
        newFromString: !0,
        validateAddressString: !0,
        checkAddressString: !0,
        idFromAddress: !0,
        delegatedFromEthAddress: !0,
        ethAddressFromDelegated: !0,
        ethAddressFromID: !0,
      };
      ((t.Address = void 0),
        (t.bigintToArray = F),
        (t.checkAddressString = Q),
        (t.decode = K),
        (t.default = void 0),
        (t.delegatedFromEthAddress = X),
        (t.encode = V),
        (t.ethAddressFromDelegated = Y),
        (t.ethAddressFromID = ee),
        (t.getChecksum = D),
        (t.idFromAddress = Z),
        (t.newActorAddress = W),
        (t.newAddress = j),
        (t.newBLSAddress = G),
        (t.newDelegatedAddress = q),
        (t.newDelegatedEthAddress = J),
        (t.newFromString = z),
        (t.newIDAddress = U),
        (t.newSecp256k1Address = H),
        (t.validateAddressString = $),
        (t.validateChecksum = M));
      var n = d(r(11371)),
        i = r(11375),
        s = d(r(6911)),
        a = r(11400),
        l = r(11443),
        c = r(11444);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var u = r(11445);
      function d(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            o = new WeakMap();
        return (d = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var n,
            i,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((n = t ? o : r)) {
            if (n.has(e)) return n.get(e);
            n.set(e, s);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((i =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (i.get || i.set)
                ? n(s, r, i)
                : (s[r] = e[r]));
          return s;
        })(e, t);
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          ((o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o));
        }
      }
      function g(e, t, r) {
        return (
          t && f(e.prototype, t),
          r && f(e, r),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function p(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function m(e, t) {
        return v(e) || b(e, t) || k(e, t) || y();
      }
      function y() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function b(e, t) {
        var r =
          null == e
            ? null
            : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null != r) {
          var o,
            n,
            i = [],
            s = !0,
            a = !1;
          try {
            for (r = r.call(e); !(s = (o = r.next()).done); s = !0)
              if ((i.push(o.value), t && i.length === t)) break;
          } catch (l) {
            ((a = !0), (n = l));
          } finally {
            try {
              s || null == r["return"] || r["return"]();
            } finally {
              if (a) throw n;
            }
          }
          return i;
        }
      }
      function v(e) {
        if (Array.isArray(e)) return e;
      }
      function w(e, t) {
        var r =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = k(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            r && (e = r);
            var o = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return o >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[o++] };
              },
              e: function (e) {
                throw e;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          s = !0,
          a = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return ((s = e.done), e);
          },
          e: function (e) {
            ((a = !0), (i = e));
          },
          f: function () {
            try {
              s || null == r.return || r.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }
      function k(e, t) {
        if (e) {
          if ("string" === typeof e) return P(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? P(e, t)
                : void 0
          );
        }
      }
      function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
        return o;
      }
      function E(e) {
        var t,
          r = w(e.entries());
        try {
          for (r.s(); !(t = r.n()).done; ) {
            var o = m(t.value, 2),
              n = o[0],
              i = o[1];
            if (i < 128) return n + 1;
          }
        } catch (s) {
          r.e(s);
        } finally {
          r.f();
        }
        throw new Error("Failed to get Leb128 length");
      }
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in t && t[e] === u[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var _ = u.CoinType.MAIN,
        S = (0, l.base32)("abcdefghijklmnopqrstuvwxyz234567"),
        R = Object.values(u.CoinType),
        A = Object.values(c.Protocol).filter(function (e) {
          return "number" === typeof e;
        }),
        N = 20,
        T = 48,
        C = 54,
        O = 19,
        x = 4,
        L = 20;
      function B(e) {
        return (0, i.blake2b)(e, null, N);
      }
      var I = (t.Address = (function () {
        function e(t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
          if (
            (h(this, e),
            p(this, "bytes", void 0),
            p(this, "_coinType", void 0),
            !t || !t.length)
          )
            throw new Error("Missing bytes in address");
          if (
            ((this.bytes = t),
            (this._coinType = r),
            !(this.protocol() in c.Protocol))
          )
            throw new Error("Invalid protocol ".concat(this.protocol()));
        }
        return (
          g(e, [
            {
              key: "network",
              value: function () {
                return this._coinType;
              },
            },
            {
              key: "coinType",
              value: function () {
                return this._coinType;
              },
            },
            {
              key: "protocol",
              value: function () {
                return this.bytes[0];
              },
            },
            {
              key: "payload",
              value: function () {
                return this.bytes.slice(1);
              },
            },
            {
              key: "toString",
              value: function () {
                return V(this._coinType, this);
              },
            },
            {
              key: "equals",
              value: function (e) {
                return this === e || s.equals(this.bytes, e.bytes);
              },
            },
            {
              key: "namespaceLength",
              get: function () {
                if (this.protocol() !== c.Protocol.DELEGATED)
                  throw new Error(
                    "Can only get namespace length for delegated addresses",
                  );
                return E(this.payload());
              },
            },
            {
              key: "namespace",
              get: function () {
                if (this.protocol() !== c.Protocol.DELEGATED)
                  throw new Error(
                    "Can only get namespace for delegated addresses",
                  );
                var e = this.payload().slice(0, this.namespaceLength);
                return Number(n.unsigned.decode(e));
              },
            },
            {
              key: "subAddr",
              get: function () {
                if (this.protocol() !== c.Protocol.DELEGATED)
                  throw new Error(
                    "Can only get subaddress for delegated addresses",
                  );
                return this.bytes.slice(this.namespaceLength + 1);
              },
            },
            {
              key: "subAddrHex",
              get: function () {
                return s.toString(this.subAddr, "hex");
              },
            },
          ]),
          e
        );
      })());
      function F(e) {
        var t = BigInt(e).toString(16);
        return (
          t.length % 2 === 1 && (t = "0".concat(t)),
          s.fromString(t, "base16")
        );
      }
      function D(e) {
        return (0, i.blake2b)(e, null, x);
      }
      function M(e, t) {
        return s.equals(D(e), t);
      }
      function j(e, t, r) {
        var o = n.unsigned.encode(e);
        return new I(s.concat([o, t]), r);
      }
      function U(e, t) {
        return j(c.Protocol.ID, n.unsigned.encode(e), t);
      }
      function W(e, t) {
        return j(c.Protocol.ACTOR, B(e), t);
      }
      function H(e, t) {
        return j(c.Protocol.SECP256K1, B(e), t);
      }
      function G(e, t) {
        return j(c.Protocol.BLS, e, t);
      }
      function q(e, t, r) {
        if (t.length > C) throw new Error("Subaddress address length");
        var o = n.unsigned.encode(e);
        return j(c.Protocol.DELEGATED, s.concat([o, t]), r);
      }
      function J(e, t) {
        if (!a.utils.isAddress(e)) throw new Error("Invalid Ethereum address");
        return q(c.DelegatedNamespace.EVM, a.utils.arrayify(e), t);
      }
      function K(e) {
        var t = Q(e),
          r = t.protocol,
          o = t.payload,
          n = t.coinType;
        return j(r, o, n);
      }
      function V(e, t) {
        if (!t || !t.bytes) throw Error("Invalid address");
        var r = t.protocol(),
          o = t.payload(),
          i = "".concat(e).concat(r);
        switch (r) {
          case c.Protocol.ID:
            return "".concat(i).concat(n.unsigned.decode(o));
          case c.Protocol.DELEGATED:
            var a = t.namespace,
              l = t.subAddr,
              u = n.unsigned.encode(r),
              d = n.unsigned.encode(a),
              h = D(s.concat([u, d, l])),
              f = s.concat([l, h]);
            return "".concat(i).concat(a, "f").concat(S.encode(f));
          default:
            var g = D(t.bytes),
              p = s.concat([o, g]);
            return "".concat(i).concat(S.encode(p));
        }
      }
      function z(e) {
        return K(e);
      }
      function $(e) {
        try {
          return (Q(e), !0);
        } catch (t) {
          return !1;
        }
      }
      function Q(e) {
        if ("string" !== typeof e || e.length < 3)
          throw Error("Address should be a string of at least 3 characters");
        var t = e[0];
        if (!R.includes(t))
          throw Error(
            "Address cointype should be one of: ".concat(R.join(", ")),
          );
        var r = Number(e[1]);
        if (!A.includes(r))
          throw Error(
            "Address protocol should be one of: ".concat(A.join(", ")),
          );
        var o = n.unsigned.encode(r),
          i = e.slice(2);
        switch (r) {
          case c.Protocol.ID:
            if (i.length > O) throw Error("Invalid ID address length");
            if (isNaN(Number(i))) throw Error("Invalid ID address");
            var a = n.unsigned.encode(i),
              l = s.concat([o, a]);
            return { protocol: r, payload: a, bytes: l, coinType: t };
          case c.Protocol.DELEGATED:
            var u = i.indexOf("f");
            if (-1 === u) throw new Error("Invalid delegated address");
            var d = i.slice(0, u);
            if (d.length > O)
              throw new Error("Invalid delegated address namespace");
            var h = i.slice(u + 1),
              f = S.decode(h);
            if (f.length < x) throw Error("Invalid delegated address length");
            var g = f.slice(0, -x),
              p = f.slice(g.length);
            if (g.length > C) throw Error("Invalid delegated address length");
            var m = Number(d),
              y = n.unsigned.encode(m),
              b = s.concat([y, g]),
              v = s.concat([o, b]);
            if (!M(v, p)) throw Error("Invalid delegated address checksum");
            return {
              protocol: r,
              payload: b,
              bytes: v,
              coinType: t,
              namespace: m,
            };
          case c.Protocol.SECP256K1:
          case c.Protocol.ACTOR:
          case c.Protocol.BLS:
            var w = S.decode(i);
            if (w.length < x) throw Error("Invalid address length");
            var k = w.slice(0, -x),
              P = w.slice(k.length);
            if (
              (r === c.Protocol.SECP256K1 || r === c.Protocol.ACTOR) &&
              k.length !== N
            )
              throw Error("Invalid address length");
            if (r === c.Protocol.BLS && k.length !== T)
              throw Error("Invalid address length");
            var E = s.concat([o, k]);
            if (!M(E, P)) throw Error("Invalid address checksum");
            return { protocol: r, payload: k, bytes: E, coinType: t };
          default:
            throw Error("Invalid address protocall: ".concat(r));
        }
      }
      function Z(e) {
        if (e.protocol() !== c.Protocol.ID)
          throw new Error("Cannot get ID from non ID address");
        return parseInt(n.unsigned.decode(e.payload()), 10);
      }
      function X(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : u.CoinType.TEST;
        return J(e, t).toString();
      }
      function Y(e) {
        return a.utils.getAddress("0x".concat(K(e).subAddrHex));
      }
      function ee(e) {
        var t = K(e),
          r = Z(t),
          o = new ArrayBuffer(L),
          n = new DataView(o);
        return (
          n.setUint8(0, 255),
          n.setBigUint64(12, BigInt(r), !1),
          "0x".concat(s.toString(new Uint8Array(o), "hex"))
        );
      }
      t.default = {
        Address: I,
        newAddress: j,
        newIDAddress: U,
        newActorAddress: W,
        newSecp256k1Address: H,
        newBLSAddress: G,
        newFromString: z,
        bigintToArray: F,
        decode: K,
        encode: V,
        getChecksum: D,
        validateChecksum: M,
        validateAddressString: $,
        checkAddressString: Q,
        idFromAddress: Z,
        delegatedFromEthAddress: X,
        ethAddressFromDelegated: Y,
        CoinType: u.CoinType,
        Protocol: c.Protocol,
      };
    },
    11375: function (e, t, r) {
      var o = r(11376),
        n = r(11377);
      e.exports = {
        blake2b: o.blake2b,
        blake2bHex: o.blake2bHex,
        blake2bInit: o.blake2bInit,
        blake2bUpdate: o.blake2bUpdate,
        blake2bFinal: o.blake2bFinal,
        blake2s: n.blake2s,
        blake2sHex: n.blake2sHex,
        blake2sInit: n.blake2sInit,
        blake2sUpdate: n.blake2sUpdate,
        blake2sFinal: n.blake2sFinal,
      };
    },
    11376: function (e, t, r) {
      var o = r(6910);
      function n(e, t, r) {
        var o = e[t] + e[r],
          n = e[t + 1] + e[r + 1];
        (o >= 4294967296 && n++, (e[t] = o), (e[t + 1] = n));
      }
      function i(e, t, r, o) {
        var n = e[t] + r;
        r < 0 && (n += 4294967296);
        var i = e[t + 1] + o;
        (n >= 4294967296 && i++, (e[t] = n), (e[t + 1] = i));
      }
      function s(e, t) {
        return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
      }
      function a(e, t, r, o, s, a) {
        var l = h[s],
          c = h[s + 1],
          u = h[a],
          f = h[a + 1];
        (n(d, e, t), i(d, e, l, c));
        var g = d[o] ^ d[e],
          p = d[o + 1] ^ d[e + 1];
        ((d[o] = p),
          (d[o + 1] = g),
          n(d, r, o),
          (g = d[t] ^ d[r]),
          (p = d[t + 1] ^ d[r + 1]),
          (d[t] = (g >>> 24) ^ (p << 8)),
          (d[t + 1] = (p >>> 24) ^ (g << 8)),
          n(d, e, t),
          i(d, e, u, f),
          (g = d[o] ^ d[e]),
          (p = d[o + 1] ^ d[e + 1]),
          (d[o] = (g >>> 16) ^ (p << 16)),
          (d[o + 1] = (p >>> 16) ^ (g << 16)),
          n(d, r, o),
          (g = d[t] ^ d[r]),
          (p = d[t + 1] ^ d[r + 1]),
          (d[t] = (p >>> 31) ^ (g << 1)),
          (d[t + 1] = (g >>> 31) ^ (p << 1)));
      }
      var l = new Uint32Array([
          4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
          1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199,
          2600822924, 4215389547, 528734635, 327033209, 1541459225,
        ]),
        c = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
          15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10,
          14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0,
          15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6,
          10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4,
          10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4,
          8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10,
          2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6,
          7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0,
          2, 11, 7, 5, 3,
        ],
        u = new Uint8Array(
          c.map(function (e) {
            return 2 * e;
          }),
        ),
        d = new Uint32Array(32),
        h = new Uint32Array(32);
      function f(e, t) {
        var r = 0;
        for (r = 0; r < 16; r++) ((d[r] = e.h[r]), (d[r + 16] = l[r]));
        for (
          d[24] = d[24] ^ e.t,
            d[25] = d[25] ^ (e.t / 4294967296),
            t && ((d[28] = ~d[28]), (d[29] = ~d[29])),
            r = 0;
          r < 32;
          r++
        )
          h[r] = s(e.b, 4 * r);
        for (r = 0; r < 12; r++)
          (a(0, 8, 16, 24, u[16 * r + 0], u[16 * r + 1]),
            a(2, 10, 18, 26, u[16 * r + 2], u[16 * r + 3]),
            a(4, 12, 20, 28, u[16 * r + 4], u[16 * r + 5]),
            a(6, 14, 22, 30, u[16 * r + 6], u[16 * r + 7]),
            a(0, 10, 20, 30, u[16 * r + 8], u[16 * r + 9]),
            a(2, 12, 22, 24, u[16 * r + 10], u[16 * r + 11]),
            a(4, 14, 16, 26, u[16 * r + 12], u[16 * r + 13]),
            a(6, 8, 18, 28, u[16 * r + 14], u[16 * r + 15]));
        for (r = 0; r < 16; r++) e.h[r] = e.h[r] ^ d[r] ^ d[r + 16];
      }
      function g(e, t) {
        if (0 === e || e > 64)
          throw new Error("Illegal output length, expected 0 < length <= 64");
        if (t && t.length > 64)
          throw new Error(
            "Illegal key, expected Uint8Array with 0 < length <= 64",
          );
        for (
          var r = {
              b: new Uint8Array(128),
              h: new Uint32Array(16),
              t: 0,
              c: 0,
              outlen: e,
            },
            o = 0;
          o < 16;
          o++
        )
          r.h[o] = l[o];
        var n = t ? t.length : 0;
        return (
          (r.h[0] ^= 16842752 ^ (n << 8) ^ e),
          t && (p(r, t), (r.c = 128)),
          r
        );
      }
      function p(e, t) {
        for (var r = 0; r < t.length; r++)
          (128 === e.c && ((e.t += e.c), f(e, !1), (e.c = 0)),
            (e.b[e.c++] = t[r]));
      }
      function m(e) {
        e.t += e.c;
        while (e.c < 128) e.b[e.c++] = 0;
        f(e, !0);
        for (var t = new Uint8Array(e.outlen), r = 0; r < e.outlen; r++)
          t[r] = e.h[r >> 2] >> (8 * (3 & r));
        return t;
      }
      function y(e, t, r) {
        ((r = r || 64), (e = o.normalizeInput(e)));
        var n = g(r, t);
        return (p(n, e), m(n));
      }
      function b(e, t, r) {
        var n = y(e, t, r);
        return o.toHex(n);
      }
      e.exports = {
        blake2b: y,
        blake2bHex: b,
        blake2bInit: g,
        blake2bUpdate: p,
        blake2bFinal: m,
      };
    },
    11377: function (e, t, r) {
      var o = r(6910);
      function n(e, t) {
        return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
      }
      function i(e, t, r, o, n, i) {
        ((c[e] = c[e] + c[t] + n),
          (c[o] = s(c[o] ^ c[e], 16)),
          (c[r] = c[r] + c[o]),
          (c[t] = s(c[t] ^ c[r], 12)),
          (c[e] = c[e] + c[t] + i),
          (c[o] = s(c[o] ^ c[e], 8)),
          (c[r] = c[r] + c[o]),
          (c[t] = s(c[t] ^ c[r], 7)));
      }
      function s(e, t) {
        return (e >>> t) ^ (e << (32 - t));
      }
      var a = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        l = new Uint8Array([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
          15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10,
          14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0,
          15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6,
          10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4,
          10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4,
          8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10,
          2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
        ]),
        c = new Uint32Array(16),
        u = new Uint32Array(16);
      function d(e, t) {
        var r = 0;
        for (r = 0; r < 8; r++) ((c[r] = e.h[r]), (c[r + 8] = a[r]));
        for (
          c[12] ^= e.t, c[13] ^= e.t / 4294967296, t && (c[14] = ~c[14]), r = 0;
          r < 16;
          r++
        )
          u[r] = n(e.b, 4 * r);
        for (r = 0; r < 10; r++)
          (i(0, 4, 8, 12, u[l[16 * r + 0]], u[l[16 * r + 1]]),
            i(1, 5, 9, 13, u[l[16 * r + 2]], u[l[16 * r + 3]]),
            i(2, 6, 10, 14, u[l[16 * r + 4]], u[l[16 * r + 5]]),
            i(3, 7, 11, 15, u[l[16 * r + 6]], u[l[16 * r + 7]]),
            i(0, 5, 10, 15, u[l[16 * r + 8]], u[l[16 * r + 9]]),
            i(1, 6, 11, 12, u[l[16 * r + 10]], u[l[16 * r + 11]]),
            i(2, 7, 8, 13, u[l[16 * r + 12]], u[l[16 * r + 13]]),
            i(3, 4, 9, 14, u[l[16 * r + 14]], u[l[16 * r + 15]]));
        for (r = 0; r < 8; r++) e.h[r] ^= c[r] ^ c[r + 8];
      }
      function h(e, t) {
        if (!(e > 0 && e <= 32))
          throw new Error("Incorrect output length, should be in [1, 32]");
        var r = t ? t.length : 0;
        if (t && !(r > 0 && r <= 32))
          throw new Error("Incorrect key length, should be in [1, 32]");
        var o = {
          h: new Uint32Array(a),
          b: new Uint32Array(64),
          c: 0,
          t: 0,
          outlen: e,
        };
        return (
          (o.h[0] ^= 16842752 ^ (r << 8) ^ e),
          r > 0 && (f(o, t), (o.c = 64)),
          o
        );
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++)
          (64 === e.c && ((e.t += e.c), d(e, !1), (e.c = 0)),
            (e.b[e.c++] = t[r]));
      }
      function g(e) {
        e.t += e.c;
        while (e.c < 64) e.b[e.c++] = 0;
        d(e, !0);
        for (var t = new Uint8Array(e.outlen), r = 0; r < e.outlen; r++)
          t[r] = (e.h[r >> 2] >> (8 * (3 & r))) & 255;
        return t;
      }
      function p(e, t, r) {
        ((r = r || 32), (e = o.normalizeInput(e)));
        var n = h(r, t);
        return (f(n, e), g(n));
      }
      function m(e, t, r) {
        var n = p(e, t, r);
        return o.toHex(n);
      }
      e.exports = {
        blake2s: p,
        blake2sHex: m,
        blake2sInit: h,
        blake2sUpdate: f,
        blake2sFinal: g,
      };
    },
    11407: function (e, t, r) {
      "use strict";
      var o = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.computeHmac = f),
        (t.ripemd160 = u),
        (t.sha256 = d),
        (t.sha512 = h));
      var n = o(r(43)),
        i = r(2776),
        s = r(6917),
        a = r(2773),
        l = r(11408);
      const c = new a.Logger(l.version);
      function u(e) {
        return (
          "0x" +
          n.default
            .ripemd160()
            .update((0, i.arrayify)(e))
            .digest("hex")
        );
      }
      function d(e) {
        return (
          "0x" +
          n.default
            .sha256()
            .update((0, i.arrayify)(e))
            .digest("hex")
        );
      }
      function h(e) {
        return (
          "0x" +
          n.default
            .sha512()
            .update((0, i.arrayify)(e))
            .digest("hex")
        );
      }
      function f(e, t, r) {
        return (
          s.SupportedAlgorithm[e] ||
            c.throwError(
              "unsupported algorithm " + e,
              a.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "hmac", algorithm: e },
            ),
          "0x" +
            n.default
              .hmac(n.default[e], (0, i.arrayify)(t))
              .update((0, i.arrayify)(r))
              .digest("hex")
        );
      }
    },
    11408: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "sha2/5.8.0";
    },
    11409: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "wordlists/5.8.0";
    },
    11410: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.wordlists = void 0));
      var o = r(11411);
      t.wordlists = { en: o.langEn };
    },
    11411: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.langEn = void 0));
      var o = r(6919);
      const n =
        "AbandonAbilityAbleAboutAboveAbsentAbsorbAbstractAbsurdAbuseAccessAccidentAccountAccuseAchieveAcidAcousticAcquireAcrossActActionActorActressActualAdaptAddAddictAddressAdjustAdmitAdultAdvanceAdviceAerobicAffairAffordAfraidAgainAgeAgentAgreeAheadAimAirAirportAisleAlarmAlbumAlcoholAlertAlienAllAlleyAllowAlmostAloneAlphaAlreadyAlsoAlterAlwaysAmateurAmazingAmongAmountAmusedAnalystAnchorAncientAngerAngleAngryAnimalAnkleAnnounceAnnualAnotherAnswerAntennaAntiqueAnxietyAnyApartApologyAppearAppleApproveAprilArchArcticAreaArenaArgueArmArmedArmorArmyAroundArrangeArrestArriveArrowArtArtefactArtistArtworkAskAspectAssaultAssetAssistAssumeAsthmaAthleteAtomAttackAttendAttitudeAttractAuctionAuditAugustAuntAuthorAutoAutumnAverageAvocadoAvoidAwakeAwareAwayAwesomeAwfulAwkwardAxisBabyBachelorBaconBadgeBagBalanceBalconyBallBambooBananaBannerBarBarelyBargainBarrelBaseBasicBasketBattleBeachBeanBeautyBecauseBecomeBeefBeforeBeginBehaveBehindBelieveBelowBeltBenchBenefitBestBetrayBetterBetweenBeyondBicycleBidBikeBindBiologyBirdBirthBitterBlackBladeBlameBlanketBlastBleakBlessBlindBloodBlossomBlouseBlueBlurBlushBoardBoatBodyBoilBombBoneBonusBookBoostBorderBoringBorrowBossBottomBounceBoxBoyBracketBrainBrandBrassBraveBreadBreezeBrickBridgeBriefBrightBringBriskBroccoliBrokenBronzeBroomBrotherBrownBrushBubbleBuddyBudgetBuffaloBuildBulbBulkBulletBundleBunkerBurdenBurgerBurstBusBusinessBusyButterBuyerBuzzCabbageCabinCableCactusCageCakeCallCalmCameraCampCanCanalCancelCandyCannonCanoeCanvasCanyonCapableCapitalCaptainCarCarbonCardCargoCarpetCarryCartCaseCashCasinoCastleCasualCatCatalogCatchCategoryCattleCaughtCauseCautionCaveCeilingCeleryCementCensusCenturyCerealCertainChairChalkChampionChangeChaosChapterChargeChaseChatCheapCheckCheeseChefCherryChestChickenChiefChildChimneyChoiceChooseChronicChuckleChunkChurnCigarCinnamonCircleCitizenCityCivilClaimClapClarifyClawClayCleanClerkCleverClickClientCliffClimbClinicClipClockClogCloseClothCloudClownClubClumpClusterClutchCoachCoastCoconutCodeCoffeeCoilCoinCollectColorColumnCombineComeComfortComicCommonCompanyConcertConductConfirmCongressConnectConsiderControlConvinceCookCoolCopperCopyCoralCoreCornCorrectCostCottonCouchCountryCoupleCourseCousinCoverCoyoteCrackCradleCraftCramCraneCrashCraterCrawlCrazyCreamCreditCreekCrewCricketCrimeCrispCriticCropCrossCrouchCrowdCrucialCruelCruiseCrumbleCrunchCrushCryCrystalCubeCultureCupCupboardCuriousCurrentCurtainCurveCushionCustomCuteCycleDadDamageDampDanceDangerDaringDashDaughterDawnDayDealDebateDebrisDecadeDecemberDecideDeclineDecorateDecreaseDeerDefenseDefineDefyDegreeDelayDeliverDemandDemiseDenialDentistDenyDepartDependDepositDepthDeputyDeriveDescribeDesertDesignDeskDespairDestroyDetailDetectDevelopDeviceDevoteDiagramDialDiamondDiaryDiceDieselDietDifferDigitalDignityDilemmaDinnerDinosaurDirectDirtDisagreeDiscoverDiseaseDishDismissDisorderDisplayDistanceDivertDivideDivorceDizzyDoctorDocumentDogDollDolphinDomainDonateDonkeyDonorDoorDoseDoubleDoveDraftDragonDramaDrasticDrawDreamDressDriftDrillDrinkDripDriveDropDrumDryDuckDumbDuneDuringDustDutchDutyDwarfDynamicEagerEagleEarlyEarnEarthEasilyEastEasyEchoEcologyEconomyEdgeEditEducateEffortEggEightEitherElbowElderElectricElegantElementElephantElevatorEliteElseEmbarkEmbodyEmbraceEmergeEmotionEmployEmpowerEmptyEnableEnactEndEndlessEndorseEnemyEnergyEnforceEngageEngineEnhanceEnjoyEnlistEnoughEnrichEnrollEnsureEnterEntireEntryEnvelopeEpisodeEqualEquipEraEraseErodeErosionErrorEruptEscapeEssayEssenceEstateEternalEthicsEvidenceEvilEvokeEvolveExactExampleExcessExchangeExciteExcludeExcuseExecuteExerciseExhaustExhibitExileExistExitExoticExpandExpectExpireExplainExposeExpressExtendExtraEyeEyebrowFabricFaceFacultyFadeFaintFaithFallFalseFameFamilyFamousFanFancyFantasyFarmFashionFatFatalFatherFatigueFaultFavoriteFeatureFebruaryFederalFeeFeedFeelFemaleFenceFestivalFetchFeverFewFiberFictionFieldFigureFileFilmFilterFinalFindFineFingerFinishFireFirmFirstFiscalFishFitFitnessFixFlagFlameFlashFlatFlavorFleeFlightFlipFloatFlockFloorFlowerFluidFlushFlyFoamFocusFogFoilFoldFollowFoodFootForceForestForgetForkFortuneForumForwardFossilFosterFoundFoxFragileFrameFrequentFreshFriendFringeFrogFrontFrostFrownFrozenFruitFuelFunFunnyFurnaceFuryFutureGadgetGainGalaxyGalleryGameGapGarageGarbageGardenGarlicGarmentGasGaspGateGatherGaugeGazeGeneralGeniusGenreGentleGenuineGestureGhostGiantGiftGiggleGingerGiraffeGirlGiveGladGlanceGlareGlassGlideGlimpseGlobeGloomGloryGloveGlowGlueGoatGoddessGoldGoodGooseGorillaGospelGossipGovernGownGrabGraceGrainGrantGrapeGrassGravityGreatGreenGridGriefGritGroceryGroupGrowGruntGuardGuessGuideGuiltGuitarGunGymHabitHairHalfHammerHamsterHandHappyHarborHardHarshHarvestHatHaveHawkHazardHeadHealthHeartHeavyHedgehogHeightHelloHelmetHelpHenHeroHiddenHighHillHintHipHireHistoryHobbyHockeyHoldHoleHolidayHollowHomeHoneyHoodHopeHornHorrorHorseHospitalHostHotelHourHoverHubHugeHumanHumbleHumorHundredHungryHuntHurdleHurryHurtHusbandHybridIceIconIdeaIdentifyIdleIgnoreIllIllegalIllnessImageImitateImmenseImmuneImpactImposeImproveImpulseInchIncludeIncomeIncreaseIndexIndicateIndoorIndustryInfantInflictInformInhaleInheritInitialInjectInjuryInmateInnerInnocentInputInquiryInsaneInsectInsideInspireInstallIntactInterestIntoInvestInviteInvolveIronIslandIsolateIssueItemIvoryJacketJaguarJarJazzJealousJeansJellyJewelJobJoinJokeJourneyJoyJudgeJuiceJumpJungleJuniorJunkJustKangarooKeenKeepKetchupKeyKickKidKidneyKindKingdomKissKitKitchenKiteKittenKiwiKneeKnifeKnockKnowLabLabelLaborLadderLadyLakeLampLanguageLaptopLargeLaterLatinLaughLaundryLavaLawLawnLawsuitLayerLazyLeaderLeafLearnLeaveLectureLeftLegLegalLegendLeisureLemonLendLengthLensLeopardLessonLetterLevelLiarLibertyLibraryLicenseLifeLiftLightLikeLimbLimitLinkLionLiquidListLittleLiveLizardLoadLoanLobsterLocalLockLogicLonelyLongLoopLotteryLoudLoungeLoveLoyalLuckyLuggageLumberLunarLunchLuxuryLyricsMachineMadMagicMagnetMaidMailMainMajorMakeMammalManManageMandateMangoMansionManualMapleMarbleMarchMarginMarineMarketMarriageMaskMassMasterMatchMaterialMathMatrixMatterMaximumMazeMeadowMeanMeasureMeatMechanicMedalMediaMelodyMeltMemberMemoryMentionMenuMercyMergeMeritMerryMeshMessageMetalMethodMiddleMidnightMilkMillionMimicMindMinimumMinorMinuteMiracleMirrorMiseryMissMistakeMixMixedMixtureMobileModelModifyMomMomentMonitorMonkeyMonsterMonthMoonMoralMoreMorningMosquitoMotherMotionMotorMountainMouseMoveMovieMuchMuffinMuleMultiplyMuscleMuseumMushroomMusicMustMutualMyselfMysteryMythNaiveNameNapkinNarrowNastyNationNatureNearNeckNeedNegativeNeglectNeitherNephewNerveNestNetNetworkNeutralNeverNewsNextNiceNightNobleNoiseNomineeNoodleNormalNorthNoseNotableNoteNothingNoticeNovelNowNuclearNumberNurseNutOakObeyObjectObligeObscureObserveObtainObviousOccurOceanOctoberOdorOffOfferOfficeOftenOilOkayOldOliveOlympicOmitOnceOneOnionOnlineOnlyOpenOperaOpinionOpposeOptionOrangeOrbitOrchardOrderOrdinaryOrganOrientOriginalOrphanOstrichOtherOutdoorOuterOutputOutsideOvalOvenOverOwnOwnerOxygenOysterOzonePactPaddlePagePairPalacePalmPandaPanelPanicPantherPaperParadeParentParkParrotPartyPassPatchPathPatientPatrolPatternPausePavePaymentPeacePeanutPearPeasantPelicanPenPenaltyPencilPeoplePepperPerfectPermitPersonPetPhonePhotoPhrasePhysicalPianoPicnicPicturePiecePigPigeonPillPilotPinkPioneerPipePistolPitchPizzaPlacePlanetPlasticPlatePlayPleasePledgePluckPlugPlungePoemPoetPointPolarPolePolicePondPonyPoolPopularPortionPositionPossiblePostPotatoPotteryPovertyPowderPowerPracticePraisePredictPreferPreparePresentPrettyPreventPricePridePrimaryPrintPriorityPrisonPrivatePrizeProblemProcessProduceProfitProgramProjectPromoteProofPropertyProsperProtectProudProvidePublicPuddingPullPulpPulsePumpkinPunchPupilPuppyPurchasePurityPurposePursePushPutPuzzlePyramidQualityQuantumQuarterQuestionQuickQuitQuizQuoteRabbitRaccoonRaceRackRadarRadioRailRainRaiseRallyRampRanchRandomRangeRapidRareRateRatherRavenRawRazorReadyRealReasonRebelRebuildRecallReceiveRecipeRecordRecycleReduceReflectReformRefuseRegionRegretRegularRejectRelaxReleaseReliefRelyRemainRememberRemindRemoveRenderRenewRentReopenRepairRepeatReplaceReportRequireRescueResembleResistResourceResponseResultRetireRetreatReturnReunionRevealReviewRewardRhythmRibRibbonRiceRichRideRidgeRifleRightRigidRingRiotRippleRiskRitualRivalRiverRoadRoastRobotRobustRocketRomanceRoofRookieRoomRoseRotateRoughRoundRouteRoyalRubberRudeRugRuleRunRunwayRuralSadSaddleSadnessSafeSailSaladSalmonSalonSaltSaluteSameSampleSandSatisfySatoshiSauceSausageSaveSayScaleScanScareScatterSceneSchemeSchoolScienceScissorsScorpionScoutScrapScreenScriptScrubSeaSearchSeasonSeatSecondSecretSectionSecuritySeedSeekSegmentSelectSellSeminarSeniorSenseSentenceSeriesServiceSessionSettleSetupSevenShadowShaftShallowShareShedShellSheriffShieldShiftShineShipShiverShockShoeShootShopShortShoulderShoveShrimpShrugShuffleShySiblingSickSideSiegeSightSignSilentSilkSillySilverSimilarSimpleSinceSingSirenSisterSituateSixSizeSkateSketchSkiSkillSkinSkirtSkullSlabSlamSleepSlenderSliceSlideSlightSlimSloganSlotSlowSlushSmallSmartSmileSmokeSmoothSnackSnakeSnapSniffSnowSoapSoccerSocialSockSodaSoftSolarSoldierSolidSolutionSolveSomeoneSongSoonSorrySortSoulSoundSoupSourceSouthSpaceSpareSpatialSpawnSpeakSpecialSpeedSpellSpendSphereSpiceSpiderSpikeSpinSpiritSplitSpoilSponsorSpoonSportSpotSpraySpreadSpringSpySquareSqueezeSquirrelStableStadiumStaffStageStairsStampStandStartStateStaySteakSteelStemStepStereoStickStillStingStockStomachStoneStoolStoryStoveStrategyStreetStrikeStrongStruggleStudentStuffStumbleStyleSubjectSubmitSubwaySuccessSuchSuddenSufferSugarSuggestSuitSummerSunSunnySunsetSuperSupplySupremeSureSurfaceSurgeSurpriseSurroundSurveySuspectSustainSwallowSwampSwapSwarmSwearSweetSwiftSwimSwingSwitchSwordSymbolSymptomSyrupSystemTableTackleTagTailTalentTalkTankTapeTargetTaskTasteTattooTaxiTeachTeamTellTenTenantTennisTentTermTestTextThankThatThemeThenTheoryThereTheyThingThisThoughtThreeThriveThrowThumbThunderTicketTideTigerTiltTimberTimeTinyTipTiredTissueTitleToastTobaccoTodayToddlerToeTogetherToiletTokenTomatoTomorrowToneTongueTonightToolToothTopTopicToppleTorchTornadoTortoiseTossTotalTouristTowardTowerTownToyTrackTradeTrafficTragicTrainTransferTrapTrashTravelTrayTreatTreeTrendTrialTribeTrickTriggerTrimTripTrophyTroubleTruckTrueTrulyTrumpetTrustTruthTryTubeTuitionTumbleTunaTunnelTurkeyTurnTurtleTwelveTwentyTwiceTwinTwistTwoTypeTypicalUglyUmbrellaUnableUnawareUncleUncoverUnderUndoUnfairUnfoldUnhappyUniformUniqueUnitUniverseUnknownUnlockUntilUnusualUnveilUpdateUpgradeUpholdUponUpperUpsetUrbanUrgeUsageUseUsedUsefulUselessUsualUtilityVacantVacuumVagueValidValleyValveVanVanishVaporVariousVastVaultVehicleVelvetVendorVentureVenueVerbVerifyVersionVeryVesselVeteranViableVibrantViciousVictoryVideoViewVillageVintageViolinVirtualVirusVisaVisitVisualVitalVividVocalVoiceVoidVolcanoVolumeVoteVoyageWageWagonWaitWalkWallWalnutWantWarfareWarmWarriorWashWaspWasteWaterWaveWayWealthWeaponWearWeaselWeatherWebWeddingWeekendWeirdWelcomeWestWetWhaleWhatWheatWheelWhenWhereWhipWhisperWideWidthWifeWildWillWinWindowWineWingWinkWinnerWinterWireWisdomWiseWishWitnessWolfWomanWonderWoodWoolWordWorkWorldWorryWorthWrapWreckWrestleWristWriteWrongYardYearYellowYouYoungYouthZebraZeroZoneZoo";
      let i = null;
      function s(e) {
        if (
          null == i &&
          ((i = n
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()
            .substring(1)
            .split(" ")),
          "0x3c8acc1e7b08d8e76f9fda015ef48dc8c710a73cb7e0f77b2c18a9b5a7adde60" !==
            o.Wordlist.check(e))
        )
          throw (
            (i = null),
            new Error("BIP39 Wordlist for en (English) FAILED")
          );
      }
      class LangEn extends o.Wordlist {
        constructor() {
          super("en");
        }
        getWord(e) {
          return (s(this), i[e]);
        }
        getWordIndex(e) {
          return (s(this), i.indexOf(e));
        }
      }
      const a = (t.langEn = new LangEn());
      o.Wordlist.register(a);
    },
    11413: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.randomBytes = u));
        var o = r(2776),
          n = r(2773),
          i = r(11414);
        const s = new n.Logger(i.version);
        function a() {
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw new Error("unable to locate global object");
        }
        const l = a();
        let c = l.crypto || l.msCrypto;
        function u(e) {
          (e <= 0 || e > 1024 || e % 1 || e != e) &&
            s.throwArgumentError("invalid length", "length", e);
          const t = new Uint8Array(e);
          return (c.getRandomValues(t), (0, o.arrayify)(t));
        }
        (c && c.getRandomValues) ||
          (s.warn("WARNING: Missing strong random number source"),
          (c = {
            getRandomValues: function (e) {
              return s.throwError(
                "no secure random source avaialble",
                n.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "crypto.getRandomValues" },
              );
            },
          }));
      }).call(this, r(13));
    },
    11414: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "random/5.8.0";
    },
    11415: function (e, t, r) {
      "use strict";
      function o(e) {
        e = e.slice();
        for (let t = e.length - 1; t > 0; t--) {
          const r = Math.floor(Math.random() * (t + 1)),
            o = e[t];
          ((e[t] = e[r]), (e[r] = o));
        }
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.shuffled = o));
    },
    11419: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "wallet/5.8.0";
    },
    11420: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AlchemyProvider", {
          enumerable: !0,
          get: function () {
            return s.AlchemyProvider;
          },
        }),
        Object.defineProperty(t, "AlchemyWebSocketProvider", {
          enumerable: !0,
          get: function () {
            return s.AlchemyWebSocketProvider;
          },
        }),
        Object.defineProperty(t, "AnkrProvider", {
          enumerable: !0,
          get: function () {
            return a.AnkrProvider;
          },
        }),
        Object.defineProperty(t, "BaseProvider", {
          enumerable: !0,
          get: function () {
            return i.BaseProvider;
          },
        }),
        Object.defineProperty(t, "CloudflareProvider", {
          enumerable: !0,
          get: function () {
            return l.CloudflareProvider;
          },
        }),
        Object.defineProperty(t, "EtherscanProvider", {
          enumerable: !0,
          get: function () {
            return c.EtherscanProvider;
          },
        }),
        Object.defineProperty(t, "FallbackProvider", {
          enumerable: !0,
          get: function () {
            return u.FallbackProvider;
          },
        }),
        Object.defineProperty(t, "Formatter", {
          enumerable: !0,
          get: function () {
            return k.Formatter;
          },
        }),
        Object.defineProperty(t, "InfuraProvider", {
          enumerable: !0,
          get: function () {
            return h.InfuraProvider;
          },
        }),
        Object.defineProperty(t, "InfuraWebSocketProvider", {
          enumerable: !0,
          get: function () {
            return h.InfuraWebSocketProvider;
          },
        }),
        Object.defineProperty(t, "IpcProvider", {
          enumerable: !0,
          get: function () {
            return d.IpcProvider;
          },
        }),
        Object.defineProperty(t, "JsonRpcBatchProvider", {
          enumerable: !0,
          get: function () {
            return g.JsonRpcBatchProvider;
          },
        }),
        Object.defineProperty(t, "JsonRpcProvider", {
          enumerable: !0,
          get: function () {
            return f.JsonRpcProvider;
          },
        }),
        Object.defineProperty(t, "JsonRpcSigner", {
          enumerable: !0,
          get: function () {
            return f.JsonRpcSigner;
          },
        }),
        Object.defineProperty(t, "NodesmithProvider", {
          enumerable: !0,
          get: function () {
            return p.NodesmithProvider;
          },
        }),
        Object.defineProperty(t, "PocketProvider", {
          enumerable: !0,
          get: function () {
            return m.PocketProvider;
          },
        }),
        Object.defineProperty(t, "Provider", {
          enumerable: !0,
          get: function () {
            return o.Provider;
          },
        }),
        Object.defineProperty(t, "QuickNodeProvider", {
          enumerable: !0,
          get: function () {
            return y.QuickNodeProvider;
          },
        }),
        Object.defineProperty(t, "Resolver", {
          enumerable: !0,
          get: function () {
            return i.Resolver;
          },
        }),
        Object.defineProperty(t, "StaticJsonRpcProvider", {
          enumerable: !0,
          get: function () {
            return b.StaticJsonRpcProvider;
          },
        }),
        Object.defineProperty(t, "UrlJsonRpcProvider", {
          enumerable: !0,
          get: function () {
            return b.UrlJsonRpcProvider;
          },
        }),
        Object.defineProperty(t, "Web3Provider", {
          enumerable: !0,
          get: function () {
            return v.Web3Provider;
          },
        }),
        Object.defineProperty(t, "WebSocketProvider", {
          enumerable: !0,
          get: function () {
            return w.WebSocketProvider;
          },
        }),
        (t.getDefaultProvider = S),
        Object.defineProperty(t, "getNetwork", {
          enumerable: !0,
          get: function () {
            return n.getNetwork;
          },
        }),
        Object.defineProperty(t, "isCommunityResourcable", {
          enumerable: !0,
          get: function () {
            return k.isCommunityResourcable;
          },
        }),
        Object.defineProperty(t, "isCommunityResource", {
          enumerable: !0,
          get: function () {
            return k.isCommunityResource;
          },
        }),
        Object.defineProperty(t, "showThrottleMessage", {
          enumerable: !0,
          get: function () {
            return k.showThrottleMessage;
          },
        }));
      var o = r(4590),
        n = r(6923),
        i = r(4876),
        s = r(11424),
        a = r(11426),
        l = r(11427),
        c = r(11428),
        u = r(11429),
        d = r(11430),
        h = r(11431),
        f = r(4592),
        g = r(11432),
        p = r(11433),
        m = r(11434),
        y = r(11435),
        b = r(3623),
        v = r(11436),
        w = r(5715),
        k = r(3850),
        P = r(2773),
        E = r(3073);
      const _ = new P.Logger(E.version);
      function S(e, t) {
        if ((null == e && (e = "homestead"), "string" === typeof e)) {
          const t = e.match(/^(ws|http)s?:/i);
          if (t)
            switch (t[1].toLowerCase()) {
              case "http":
              case "https":
                return new f.JsonRpcProvider(e);
              case "ws":
              case "wss":
                return new w.WebSocketProvider(e);
              default:
                _.throwArgumentError("unsupported URL scheme", "network", e);
            }
        }
        const r = (0, n.getNetwork)(e);
        return (
          (r && r._defaultProvider) ||
            _.throwError(
              "unsupported getDefaultProvider network",
              P.Logger.errors.NETWORK_ERROR,
              { operation: "getDefaultProvider", network: e },
            ),
          r._defaultProvider(
            {
              FallbackProvider: u.FallbackProvider,
              AlchemyProvider: s.AlchemyProvider,
              AnkrProvider: a.AnkrProvider,
              CloudflareProvider: l.CloudflareProvider,
              EtherscanProvider: c.EtherscanProvider,
              InfuraProvider: h.InfuraProvider,
              JsonRpcProvider: f.JsonRpcProvider,
              NodesmithProvider: p.NodesmithProvider,
              PocketProvider: m.PocketProvider,
              QuickNodeProvider: y.QuickNodeProvider,
              Web3Provider: v.Web3Provider,
              IpcProvider: d.IpcProvider,
            },
            t,
          )
        );
      }
    },
    11422: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "web/5.8.0";
    },
    11423: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getUrl = i));
      var o = r(2776),
        n = function (e, t, r, o) {
          function n(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, i) {
            function s(e) {
              try {
                l(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function l(e) {
              e.done ? r(e.value) : n(e.value).then(s, a);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      function i(e, t) {
        return n(this, void 0, void 0, function* () {
          null == t && (t = {});
          const r = {
            method: t.method || "GET",
            headers: t.headers || {},
            body: t.body || void 0,
          };
          if (
            (!0 !== t.skipFetchSetup &&
              ((r.mode = "cors"),
              (r.cache = "no-cache"),
              (r.credentials = "same-origin"),
              (r.redirect = "follow"),
              (r.referrer = "client")),
            null != t.fetchOptions)
          ) {
            const e = t.fetchOptions;
            (e.mode && (r.mode = e.mode),
              e.cache && (r.cache = e.cache),
              e.credentials && (r.credentials = e.credentials),
              e.redirect && (r.redirect = e.redirect),
              e.referrer && (r.referrer = e.referrer));
          }
          const n = yield fetch(e, r),
            i = yield n.arrayBuffer(),
            s = {};
          return (
            n.headers.forEach
              ? n.headers.forEach((e, t) => {
                  s[t.toLowerCase()] = e;
                })
              : n.headers.keys().forEach((e) => {
                  s[e.toLowerCase()] = n.headers.get(e);
                }),
            {
              headers: s,
              statusCode: n.status,
              statusMessage: n.statusText,
              body: (0, o.arrayify)(new Uint8Array(i)),
            }
          );
        });
      }
    },
    11424: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AlchemyWebSocketProvider = t.AlchemyProvider = void 0));
      var o = r(2808),
        n = r(3850),
        i = r(5715),
        s = r(2773),
        a = r(3073),
        l = r(3623);
      const c = new s.Logger(a.version),
        u = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
      class AlchemyWebSocketProvider extends i.WebSocketProvider {
        constructor(e, t) {
          const r = new AlchemyProvider(e, t),
            n = r.connection.url
              .replace(/^http/i, "ws")
              .replace(".alchemyapi.", ".ws.alchemyapi.");
          (super(n, r.network),
            (0, o.defineReadOnly)(this, "apiKey", r.apiKey));
        }
        isCommunityResource() {
          return this.apiKey === u;
        }
      }
      t.AlchemyWebSocketProvider = AlchemyWebSocketProvider;
      class AlchemyProvider extends l.UrlJsonRpcProvider {
        static getWebSocketProvider(e, t) {
          return new AlchemyWebSocketProvider(e, t);
        }
        static getApiKey(e) {
          return null == e
            ? u
            : (e &&
                "string" !== typeof e &&
                c.throwArgumentError("invalid apiKey", "apiKey", e),
              e);
        }
        static getUrl(e, t) {
          let r = null;
          switch (e.name) {
            case "homestead":
              r = "eth-mainnet.alchemyapi.io/v2/";
              break;
            case "goerli":
              r = "eth-goerli.g.alchemy.com/v2/";
              break;
            case "sepolia":
              r = "eth-sepolia.g.alchemy.com/v2/";
              break;
            case "matic":
              r = "polygon-mainnet.g.alchemy.com/v2/";
              break;
            case "maticmum":
              r = "polygon-mumbai.g.alchemy.com/v2/";
              break;
            case "arbitrum":
              r = "arb-mainnet.g.alchemy.com/v2/";
              break;
            case "arbitrum-goerli":
              r = "arb-goerli.g.alchemy.com/v2/";
              break;
            case "arbitrum-sepolia":
              r = "arb-sepolia.g.alchemy.com/v2/";
              break;
            case "optimism":
              r = "opt-mainnet.g.alchemy.com/v2/";
              break;
            case "optimism-goerli":
              r = "opt-goerli.g.alchemy.com/v2/";
              break;
            case "optimism-sepolia":
              r = "opt-sepolia.g.alchemy.com/v2/";
              break;
            default:
              c.throwArgumentError(
                "unsupported network",
                "network",
                arguments[0],
              );
          }
          return {
            allowGzip: !0,
            url: "https://" + r + t,
            throttleCallback: (e, r) => (
              t === u && (0, n.showThrottleMessage)(),
              Promise.resolve(!0)
            ),
          };
        }
        isCommunityResource() {
          return this.apiKey === u;
        }
      }
      t.AlchemyProvider = AlchemyProvider;
    },
    11425: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WebSocket = void 0));
      var o = r(2773),
        n = r(3073);
      let i = (t.WebSocket = null);
      try {
        if (((t.WebSocket = i = WebSocket), null == i))
          throw new Error("inject please");
      } catch (s) {
        const e = new o.Logger(n.version);
        t.WebSocket = i = function () {
          e.throwError(
            "WebSockets not supported in this environment",
            o.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "new WebSocket()" },
          );
        };
      }
    },
    11426: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AnkrProvider = void 0));
      var o = r(3850),
        n = r(3623),
        i = r(2773),
        s = r(3073);
      const a = new i.Logger(s.version),
        l = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
      function c(e) {
        switch (e) {
          case "homestead":
            return "rpc.ankr.com/eth/";
          case "ropsten":
            return "rpc.ankr.com/eth_ropsten/";
          case "rinkeby":
            return "rpc.ankr.com/eth_rinkeby/";
          case "goerli":
            return "rpc.ankr.com/eth_goerli/";
          case "sepolia":
            return "rpc.ankr.com/eth_sepolia/";
          case "matic":
            return "rpc.ankr.com/polygon/";
          case "maticmum":
            return "rpc.ankr.com/polygon_mumbai/";
          case "optimism":
            return "rpc.ankr.com/optimism/";
          case "optimism-goerli":
            return "rpc.ankr.com/optimism_testnet/";
          case "optimism-sepolia":
            return "rpc.ankr.com/optimism_sepolia/";
          case "arbitrum":
            return "rpc.ankr.com/arbitrum/";
        }
        return a.throwArgumentError("unsupported network", "name", e);
      }
      class AnkrProvider extends n.UrlJsonRpcProvider {
        isCommunityResource() {
          return this.apiKey === l;
        }
        static getApiKey(e) {
          return null == e ? l : e;
        }
        static getUrl(e, t) {
          null == t && (t = l);
          const r = {
            allowGzip: !0,
            url: "https://" + c(e.name) + t,
            throttleCallback: (e, r) => (
              t.apiKey === l && (0, o.showThrottleMessage)(),
              Promise.resolve(!0)
            ),
          };
          return (
            null != t.projectSecret &&
              ((r.user = ""), (r.password = t.projectSecret)),
            r
          );
        }
      }
      t.AnkrProvider = AnkrProvider;
    },
    11427: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CloudflareProvider = void 0));
      var o = r(3623),
        n = r(2773),
        i = r(3073),
        s = function (e, t, r, o) {
          function n(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, i) {
            function s(e) {
              try {
                l(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function l(e) {
              e.done ? r(e.value) : n(e.value).then(s, a);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const a = new n.Logger(i.version);
      class CloudflareProvider extends o.UrlJsonRpcProvider {
        static getApiKey(e) {
          return (
            null != e &&
              a.throwArgumentError(
                "apiKey not supported for cloudflare",
                "apiKey",
                e,
              ),
            null
          );
        }
        static getUrl(e, t) {
          let r = null;
          switch (e.name) {
            case "homestead":
              r = "https://cloudflare-eth.com/";
              break;
            default:
              a.throwArgumentError(
                "unsupported network",
                "network",
                arguments[0],
              );
          }
          return r;
        }
        perform(e, t) {
          const r = Object.create(null, {
            perform: { get: () => super.perform },
          });
          return s(this, void 0, void 0, function* () {
            if ("getBlockNumber" === e) {
              const e = yield r.perform.call(this, "getBlock", {
                blockTag: "latest",
              });
              return e.number;
            }
            return r.perform.call(this, e, t);
          });
        }
      }
      t.CloudflareProvider = CloudflareProvider;
    },
    11428: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EtherscanProvider = void 0));
      var o = r(2776),
        n = r(2808),
        i = r(3271),
        s = r(3971),
        a = r(3850),
        l = r(2773),
        c = r(3073),
        u = r(4876),
        d = function (e, t, r, o) {
          function n(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, i) {
            function s(e) {
              try {
                l(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function l(e) {
              e.done ? r(e.value) : n(e.value).then(s, a);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const h = new l.Logger(c.version);
      function f(e) {
        const t = {};
        for (let r in e) {
          if (null == e[r]) continue;
          let n = e[r];
          ("type" === r && 0 === n) ||
            ((n = {
              type: !0,
              gasLimit: !0,
              gasPrice: !0,
              maxFeePerGs: !0,
              maxPriorityFeePerGas: !0,
              nonce: !0,
              value: !0,
            }[r]
              ? (0, o.hexValue)((0, o.hexlify)(n))
              : "accessList" === r
                ? "[" +
                  (0, i.accessListify)(n)
                    .map(
                      (e) =>
                        `{address:"${e.address}",storageKeys:["${e.storageKeys.join('","')}"]}`,
                    )
                    .join(",") +
                  "]"
                : (0, o.hexlify)(n)),
            (t[r] = n));
        }
        return t;
      }
      function g(e) {
        if (
          0 == e.status &&
          ("No records found" === e.message ||
            "No transactions found" === e.message)
        )
          return e.result;
        if (
          1 != e.status ||
          "string" !== typeof e.message ||
          !e.message.match(/^OK/)
        ) {
          const t = new Error("invalid response");
          throw (
            (t.result = JSON.stringify(e)),
            (e.result || "").toLowerCase().indexOf("rate limit") >= 0 &&
              (t.throttleRetry = !0),
            t
          );
        }
        return e.result;
      }
      function p(e) {
        if (
          e &&
          0 == e.status &&
          "NOTOK" == e.message &&
          (e.result || "").toLowerCase().indexOf("rate limit") >= 0
        ) {
          const t = new Error("throttled response");
          throw ((t.result = JSON.stringify(e)), (t.throttleRetry = !0), t);
        }
        if ("2.0" != e.jsonrpc) {
          const t = new Error("invalid response");
          throw ((t.result = JSON.stringify(e)), t);
        }
        if (e.error) {
          const t = new Error(e.error.message || "unknown error");
          throw (
            e.error.code && (t.code = e.error.code),
            e.error.data && (t.data = e.error.data),
            t
          );
        }
        return e.result;
      }
      function m(e) {
        if ("pending" === e) throw new Error("pending not supported");
        return "latest" === e ? e : parseInt(e.substring(2), 16);
      }
      function y(e, t, r) {
        if ("call" === e && t.code === l.Logger.errors.SERVER_ERROR) {
          const e = t.error;
          if (
            e &&
            (e.message.match(/reverted/i) ||
              e.message.match(/VM execution error/i))
          ) {
            let r = e.data;
            if (
              (r && (r = "0x" + r.replace(/^.*0x/i, "")), (0, o.isHexString)(r))
            )
              return r;
            h.throwError(
              "missing revert data in call exception",
              l.Logger.errors.CALL_EXCEPTION,
              { error: t, data: "0x" },
            );
          }
        }
        let n = t.message;
        throw (
          t.code === l.Logger.errors.SERVER_ERROR &&
            (t.error && "string" === typeof t.error.message
              ? (n = t.error.message)
              : "string" === typeof t.body
                ? (n = t.body)
                : "string" === typeof t.responseText && (n = t.responseText)),
          (n = (n || "").toLowerCase()),
          n.match(/insufficient funds/) &&
            h.throwError(
              "insufficient funds for intrinsic transaction cost",
              l.Logger.errors.INSUFFICIENT_FUNDS,
              { error: t, method: e, transaction: r },
            ),
          n.match(
            /same hash was already imported|transaction nonce is too low|nonce too low/,
          ) &&
            h.throwError(
              "nonce has already been used",
              l.Logger.errors.NONCE_EXPIRED,
              { error: t, method: e, transaction: r },
            ),
          n.match(/another transaction with same nonce/) &&
            h.throwError(
              "replacement fee too low",
              l.Logger.errors.REPLACEMENT_UNDERPRICED,
              { error: t, method: e, transaction: r },
            ),
          n.match(/execution failed due to an exception|execution reverted/) &&
            h.throwError(
              "cannot estimate gas; transaction may fail or may require manual gas limit",
              l.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: t, method: e, transaction: r },
            ),
          t
        );
      }
      class EtherscanProvider extends u.BaseProvider {
        constructor(e, t) {
          (super(e),
            (0, n.defineReadOnly)(this, "baseUrl", this.getBaseUrl()),
            (0, n.defineReadOnly)(this, "apiKey", t || null));
        }
        getBaseUrl() {
          switch (this.network ? this.network.name : "invalid") {
            case "homestead":
              return "https://api.etherscan.io";
            case "goerli":
              return "https://api-goerli.etherscan.io";
            case "sepolia":
              return "https://api-sepolia.etherscan.io";
            case "matic":
              return "https://api.polygonscan.com";
            case "maticmum":
              return "https://api-testnet.polygonscan.com";
            case "arbitrum":
              return "https://api.arbiscan.io";
            case "arbitrum-goerli":
              return "https://api-goerli.arbiscan.io";
            case "optimism":
              return "https://api-optimistic.etherscan.io";
            case "optimism-goerli":
              return "https://api-goerli-optimistic.etherscan.io";
            default:
          }
          return h.throwArgumentError(
            "unsupported network",
            "network",
            this.network.name,
          );
        }
        getUrl(e, t) {
          const r = Object.keys(t).reduce((e, r) => {
              const o = t[r];
              return (null != o && (e += `&${r}=${o}`), e);
            }, ""),
            o = this.apiKey ? "&apikey=" + this.apiKey : "";
          return `${this.baseUrl}/api?module=${e}${r}${o}`;
        }
        getPostUrl() {
          return this.baseUrl + "/api";
        }
        getPostData(e, t) {
          return ((t.module = e), (t.apikey = this.apiKey), t);
        }
        fetch(e, t, r) {
          return d(this, void 0, void 0, function* () {
            const o = r ? this.getPostUrl() : this.getUrl(e, t),
              i = r ? this.getPostData(e, t) : null,
              l = "proxy" === e ? p : g;
            this.emit("debug", {
              action: "request",
              request: o,
              provider: this,
            });
            const c = {
              url: o,
              throttleSlotInterval: 1e3,
              throttleCallback: (e, t) => (
                this.isCommunityResource() && (0, a.showThrottleMessage)(),
                Promise.resolve(!0)
              ),
            };
            let u = null;
            i &&
              ((c.headers = {
                "content-type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
              }),
              (u = Object.keys(i)
                .map((e) => `${e}=${i[e]}`)
                .join("&")));
            const d = yield (0, s.fetchJson)(c, u, l || p);
            return (
              this.emit("debug", {
                action: "response",
                request: o,
                response: (0, n.deepCopy)(d),
                provider: this,
              }),
              d
            );
          });
        }
        detectNetwork() {
          return d(this, void 0, void 0, function* () {
            return this.network;
          });
        }
        perform(e, t) {
          const r = Object.create(null, {
            perform: { get: () => super.perform },
          });
          return d(this, void 0, void 0, function* () {
            switch (e) {
              case "getBlockNumber":
                return this.fetch("proxy", { action: "eth_blockNumber" });
              case "getGasPrice":
                return this.fetch("proxy", { action: "eth_gasPrice" });
              case "getBalance":
                return this.fetch("account", {
                  action: "balance",
                  address: t.address,
                  tag: t.blockTag,
                });
              case "getTransactionCount":
                return this.fetch("proxy", {
                  action: "eth_getTransactionCount",
                  address: t.address,
                  tag: t.blockTag,
                });
              case "getCode":
                return this.fetch("proxy", {
                  action: "eth_getCode",
                  address: t.address,
                  tag: t.blockTag,
                });
              case "getStorageAt":
                return this.fetch("proxy", {
                  action: "eth_getStorageAt",
                  address: t.address,
                  position: t.position,
                  tag: t.blockTag,
                });
              case "sendTransaction":
                return this.fetch(
                  "proxy",
                  {
                    action: "eth_sendRawTransaction",
                    hex: t.signedTransaction,
                  },
                  !0,
                ).catch((e) => y("sendTransaction", e, t.signedTransaction));
              case "getBlock":
                if (t.blockTag)
                  return this.fetch("proxy", {
                    action: "eth_getBlockByNumber",
                    tag: t.blockTag,
                    boolean: t.includeTransactions ? "true" : "false",
                  });
                throw new Error("getBlock by blockHash not implemented");
              case "getTransaction":
                return this.fetch("proxy", {
                  action: "eth_getTransactionByHash",
                  txhash: t.transactionHash,
                });
              case "getTransactionReceipt":
                return this.fetch("proxy", {
                  action: "eth_getTransactionReceipt",
                  txhash: t.transactionHash,
                });
              case "call": {
                if ("latest" !== t.blockTag)
                  throw new Error(
                    "EtherscanProvider does not support blockTag for call",
                  );
                const e = f(t.transaction);
                ((e.module = "proxy"), (e.action = "eth_call"));
                try {
                  return yield this.fetch("proxy", e, !0);
                } catch (o) {
                  return y("call", o, t.transaction);
                }
              }
              case "estimateGas": {
                const e = f(t.transaction);
                ((e.module = "proxy"), (e.action = "eth_estimateGas"));
                try {
                  return yield this.fetch("proxy", e, !0);
                } catch (o) {
                  return y("estimateGas", o, t.transaction);
                }
              }
              case "getLogs": {
                const e = { action: "getLogs" };
                if (
                  (t.filter.fromBlock && (e.fromBlock = m(t.filter.fromBlock)),
                  t.filter.toBlock && (e.toBlock = m(t.filter.toBlock)),
                  t.filter.address && (e.address = t.filter.address),
                  t.filter.topics &&
                    t.filter.topics.length > 0 &&
                    (t.filter.topics.length > 1 &&
                      h.throwError(
                        "unsupported topic count",
                        l.Logger.errors.UNSUPPORTED_OPERATION,
                        { topics: t.filter.topics },
                      ),
                    1 === t.filter.topics.length))
                ) {
                  const r = t.filter.topics[0];
                  (("string" === typeof r && 66 === r.length) ||
                    h.throwError(
                      "unsupported topic format",
                      l.Logger.errors.UNSUPPORTED_OPERATION,
                      { topic0: r },
                    ),
                    (e.topic0 = r));
                }
                const r = yield this.fetch("logs", e);
                let o = {};
                for (let t = 0; t < r.length; t++) {
                  const e = r[t];
                  if (null == e.blockHash) {
                    if (null == o[e.blockNumber]) {
                      const t = yield this.getBlock(e.blockNumber);
                      t && (o[e.blockNumber] = t.hash);
                    }
                    e.blockHash = o[e.blockNumber];
                  }
                }
                return r;
              }
              case "getEtherPrice":
                return "homestead" !== this.network.name
                  ? 0
                  : parseFloat(
                      (yield this.fetch("stats", { action: "ethprice" }))
                        .ethusd,
                    );
              default:
                break;
            }
            return r.perform.call(this, e, t);
          });
        }
        getHistory(e, t, r) {
          return d(this, void 0, void 0, function* () {
            const o = {
                action: "txlist",
                address: yield this.resolveName(e),
                startblock: null == t ? 0 : t,
                endblock: null == r ? 99999999 : r,
                sort: "asc",
              },
              n = yield this.fetch("account", o);
            return n.map((e) => {
              (["contractAddress", "to"].forEach(function (t) {
                "" == e[t] && delete e[t];
              }),
                null == e.creates &&
                  null != e.contractAddress &&
                  (e.creates = e.contractAddress));
              const t = this.formatter.transactionResponse(e);
              return (e.timeStamp && (t.timestamp = parseInt(e.timeStamp)), t);
            });
          });
        }
        isCommunityResource() {
          return null == this.apiKey;
        }
      }
      t.EtherscanProvider = EtherscanProvider;
    },
    11429: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FallbackProvider = void 0));
      var o = r(4590),
        n = r(2829),
        i = r(2776),
        s = r(2808),
        a = r(4875),
        l = r(3971),
        c = r(4876),
        u = r(3850),
        d = r(2773),
        h = r(3073),
        f = function (e, t, r, o) {
          function n(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, i) {
            function s(e) {
              try {
                l(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function l(e) {
              e.done ? r(e.value) : n(e.value).then(s, a);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const g = new d.Logger(h.version);
      function p() {
        return new Date().getTime();
      }
      function m(e) {
        let t = null;
        for (let r = 0; r < e.length; r++) {
          const o = e[r];
          if (null == o) return null;
          t
            ? (t.name === o.name &&
                t.chainId === o.chainId &&
                (t.ensAddress === o.ensAddress ||
                  (null == t.ensAddress && null == o.ensAddress))) ||
              g.throwArgumentError("provider mismatch", "networks", e)
            : (t = o);
        }
        return t;
      }
      function y(e, t) {
        e = e.slice().sort();
        const r = Math.floor(e.length / 2);
        if (e.length % 2) return e[r];
        const o = e[r - 1],
          n = e[r];
        return null != t && Math.abs(o - n) > t ? null : (o + n) / 2;
      }
      function b(e) {
        if (null === e) return "null";
        if ("number" === typeof e || "boolean" === typeof e)
          return JSON.stringify(e);
        if ("string" === typeof e) return e;
        if (n.BigNumber.isBigNumber(e)) return e.toString();
        if (Array.isArray(e)) return JSON.stringify(e.map((e) => b(e)));
        if ("object" === typeof e) {
          const t = Object.keys(e);
          return (
            t.sort(),
            "{" +
              t
                .map((t) => {
                  let r = e[t];
                  return (
                    (r = "function" === typeof r ? "[function]" : b(r)),
                    JSON.stringify(t) + ":" + r
                  );
                })
                .join(",") +
              "}"
          );
        }
        throw new Error("unknown value type: " + typeof e);
      }
      let v = 1;
      function w(e) {
        let t = null,
          r = null,
          o = new Promise((o) => {
            ((t = function () {
              (r && (clearTimeout(r), (r = null)), o());
            }),
              (r = setTimeout(t, e)));
          });
        const n = (e) => ((o = o.then(e)), o);
        function i() {
          return o;
        }
        return { cancel: t, getPromise: i, wait: n };
      }
      const k = [
          d.Logger.errors.CALL_EXCEPTION,
          d.Logger.errors.INSUFFICIENT_FUNDS,
          d.Logger.errors.NONCE_EXPIRED,
          d.Logger.errors.REPLACEMENT_UNDERPRICED,
          d.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
        ],
        P = [
          "address",
          "args",
          "errorArgs",
          "errorSignature",
          "method",
          "transaction",
        ];
      function E(e, t) {
        const r = { weight: e.weight };
        return (
          Object.defineProperty(r, "provider", { get: () => e.provider }),
          e.start && (r.start = e.start),
          t && (r.duration = t - e.start),
          e.done &&
            (e.error ? (r.error = e.error) : (r.result = e.result || null)),
          r
        );
      }
      function _(e, t) {
        return function (r) {
          const o = {};
          r.forEach((t) => {
            const r = e(t.result);
            (o[r] || (o[r] = { count: 0, result: t.result }), o[r].count++);
          });
          const n = Object.keys(o);
          for (let e = 0; e < n.length; e++) {
            const r = o[n[e]];
            if (r.count >= t) return r.result;
          }
        };
      }
      function S(e, t, r) {
        let o = b;
        switch (t) {
          case "getBlockNumber":
            return function (t) {
              const r = t.map((e) => e.result);
              let o = y(
                t.map((e) => e.result),
                2,
              );
              if (null != o)
                return (
                  (o = Math.ceil(o)),
                  r.indexOf(o + 1) >= 0 && o++,
                  o >= e._highestBlockNumber && (e._highestBlockNumber = o),
                  e._highestBlockNumber
                );
            };
          case "getGasPrice":
            return function (e) {
              const t = e.map((e) => e.result);
              return (t.sort(), t[Math.floor(t.length / 2)]);
            };
          case "getEtherPrice":
            return function (e) {
              return y(e.map((e) => e.result));
            };
          case "getBalance":
          case "getTransactionCount":
          case "getCode":
          case "getStorageAt":
          case "call":
          case "estimateGas":
          case "getLogs":
            break;
          case "getTransaction":
          case "getTransactionReceipt":
            o = function (e) {
              return null == e
                ? null
                : ((e = (0, s.shallowCopy)(e)), (e.confirmations = -1), b(e));
            };
            break;
          case "getBlock":
            o = r.includeTransactions
              ? function (e) {
                  return null == e
                    ? null
                    : ((e = (0, s.shallowCopy)(e)),
                      (e.transactions = e.transactions.map(
                        (e) => (
                          (e = (0, s.shallowCopy)(e)),
                          (e.confirmations = -1),
                          e
                        ),
                      )),
                      b(e));
                }
              : function (e) {
                  return null == e ? null : b(e);
                };
            break;
          default:
            throw new Error("unknown method: " + t);
        }
        return _(o, e.quorum);
      }
      function R(e, t) {
        return f(this, void 0, void 0, function* () {
          const r = e.provider;
          return (null != r.blockNumber && r.blockNumber >= t) || -1 === t
            ? r
            : (0, l.poll)(
                () =>
                  new Promise((o, n) => {
                    setTimeout(function () {
                      return r.blockNumber >= t
                        ? o(r)
                        : e.cancelled
                          ? o(null)
                          : o(void 0);
                    }, 0);
                  }),
                { oncePoll: r },
              );
        });
      }
      function A(e, t, r, o) {
        return f(this, void 0, void 0, function* () {
          let n = e.provider;
          switch (r) {
            case "getBlockNumber":
            case "getGasPrice":
              return n[r]();
            case "getEtherPrice":
              if (n.getEtherPrice) return n.getEtherPrice();
              break;
            case "getBalance":
            case "getTransactionCount":
            case "getCode":
              return (
                o.blockTag &&
                  (0, i.isHexString)(o.blockTag) &&
                  (n = yield R(e, t)),
                n[r](o.address, o.blockTag || "latest")
              );
            case "getStorageAt":
              return (
                o.blockTag &&
                  (0, i.isHexString)(o.blockTag) &&
                  (n = yield R(e, t)),
                n.getStorageAt(o.address, o.position, o.blockTag || "latest")
              );
            case "getBlock":
              return (
                o.blockTag &&
                  (0, i.isHexString)(o.blockTag) &&
                  (n = yield R(e, t)),
                n[
                  o.includeTransactions
                    ? "getBlockWithTransactions"
                    : "getBlock"
                ](o.blockTag || o.blockHash)
              );
            case "call":
            case "estimateGas":
              return (
                o.blockTag &&
                  (0, i.isHexString)(o.blockTag) &&
                  (n = yield R(e, t)),
                "call" === r && o.blockTag
                  ? n[r](o.transaction, o.blockTag)
                  : n[r](o.transaction)
              );
            case "getTransaction":
            case "getTransactionReceipt":
              return n[r](o.transactionHash);
            case "getLogs": {
              let r = o.filter;
              return (
                ((r.fromBlock && (0, i.isHexString)(r.fromBlock)) ||
                  (r.toBlock && (0, i.isHexString)(r.toBlock))) &&
                  (n = yield R(e, t)),
                n.getLogs(r)
              );
            }
          }
          return g.throwError(
            "unknown method error",
            d.Logger.errors.UNKNOWN_ERROR,
            { method: r, params: o },
          );
        });
      }
      class FallbackProvider extends c.BaseProvider {
        constructor(e, t) {
          0 === e.length &&
            g.throwArgumentError("missing providers", "providers", e);
          const r = e.map((e, t) => {
              if (o.Provider.isProvider(e)) {
                const t = (0, u.isCommunityResource)(e) ? 2e3 : 750,
                  r = 1;
                return Object.freeze({
                  provider: e,
                  weight: 1,
                  stallTimeout: t,
                  priority: r,
                });
              }
              const r = (0, s.shallowCopy)(e);
              (null == r.priority && (r.priority = 1),
                null == r.stallTimeout &&
                  (r.stallTimeout = (0, u.isCommunityResource)(e) ? 2e3 : 750),
                null == r.weight && (r.weight = 1));
              const n = r.weight;
              return (
                (n % 1 || n > 512 || n < 1) &&
                  g.throwArgumentError(
                    "invalid weight; must be integer in [1, 512]",
                    `providers[${t}].weight`,
                    n,
                  ),
                Object.freeze(r)
              );
            }),
            n = r.reduce((e, t) => e + t.weight, 0);
          null == t
            ? (t = n / 2)
            : t > n &&
              g.throwArgumentError(
                "quorum will always fail; larger than total weight",
                "quorum",
                t,
              );
          let i = m(r.map((e) => e.provider.network));
          (null == i &&
            (i = new Promise((e, t) => {
              setTimeout(() => {
                this.detectNetwork().then(e, t);
              }, 0);
            })),
            super(i),
            (0, s.defineReadOnly)(this, "providerConfigs", Object.freeze(r)),
            (0, s.defineReadOnly)(this, "quorum", t),
            (this._highestBlockNumber = -1));
        }
        detectNetwork() {
          return f(this, void 0, void 0, function* () {
            const e = yield Promise.all(
              this.providerConfigs.map((e) => e.provider.getNetwork()),
            );
            return m(e);
          });
        }
        perform(e, t) {
          return f(this, void 0, void 0, function* () {
            if ("sendTransaction" === e) {
              const e = yield Promise.all(
                this.providerConfigs.map((e) =>
                  e.provider.sendTransaction(t.signedTransaction).then(
                    (e) => e.hash,
                    (e) => e,
                  ),
                ),
              );
              for (let t = 0; t < e.length; t++) {
                const r = e[t];
                if ("string" === typeof r) return r;
              }
              throw e[0];
            }
            -1 === this._highestBlockNumber &&
              "getBlockNumber" !== e &&
              (yield this.getBlockNumber());
            const r = S(this, e, t),
              o = (0, a.shuffled)(this.providerConfigs.map(s.shallowCopy));
            o.sort((e, t) => e.priority - t.priority);
            const n = this._highestBlockNumber;
            let i = 0,
              l = !0;
            while (1) {
              const a = p();
              let c = o
                .filter((e) => e.runner && a - e.start < e.stallTimeout)
                .reduce((e, t) => e + t.weight, 0);
              while (c < this.quorum && i < o.length) {
                const r = o[i++],
                  a = v++;
                ((r.start = p()),
                  (r.staller = w(r.stallTimeout)),
                  r.staller.wait(() => {
                    r.staller = null;
                  }),
                  (r.runner = A(r, n, e, t).then(
                    (o) => {
                      ((r.done = !0),
                        (r.result = o),
                        this.listenerCount("debug") &&
                          this.emit("debug", {
                            action: "request",
                            rid: a,
                            backend: E(r, p()),
                            request: { method: e, params: (0, s.deepCopy)(t) },
                            provider: this,
                          }));
                    },
                    (o) => {
                      ((r.done = !0),
                        (r.error = o),
                        this.listenerCount("debug") &&
                          this.emit("debug", {
                            action: "request",
                            rid: a,
                            backend: E(r, p()),
                            request: { method: e, params: (0, s.deepCopy)(t) },
                            provider: this,
                          }));
                    },
                  )),
                  this.listenerCount("debug") &&
                    this.emit("debug", {
                      action: "request",
                      rid: a,
                      backend: E(r, null),
                      request: { method: e, params: (0, s.deepCopy)(t) },
                      provider: this,
                    }),
                  (c += r.weight));
              }
              const u = [];
              (o.forEach((e) => {
                !e.done &&
                  e.runner &&
                  (u.push(e.runner),
                  e.staller && u.push(e.staller.getPromise()));
              }),
                u.length && (yield Promise.race(u)));
              const d = o.filter((e) => e.done && null == e.error);
              if (d.length >= this.quorum) {
                const e = r(d);
                if (void 0 !== e)
                  return (
                    o.forEach((e) => {
                      (e.staller && e.staller.cancel(), (e.cancelled = !0));
                    }),
                    e
                  );
                (l || (yield w(100).getPromise()), (l = !1));
              }
              const h = o.reduce((e, t) => {
                if (!t.done || null == t.error) return e;
                const r = t.error.code;
                return (
                  k.indexOf(r) >= 0 &&
                    (e[r] || (e[r] = { error: t.error, weight: 0 }),
                    (e[r].weight += t.weight)),
                  e
                );
              }, {});
              if (
                (Object.keys(h).forEach((e) => {
                  const t = h[e];
                  if (t.weight < this.quorum) return;
                  o.forEach((e) => {
                    (e.staller && e.staller.cancel(), (e.cancelled = !0));
                  });
                  const r = t.error,
                    n = {};
                  (P.forEach((e) => {
                    null != r[e] && (n[e] = r[e]);
                  }),
                    g.throwError(r.reason || r.message, e, n));
                }),
                0 === o.filter((e) => !e.done).length)
              )
                break;
            }
            return (
              o.forEach((e) => {
                (e.staller && e.staller.cancel(), (e.cancelled = !0));
              }),
              g.throwError(
                "failed to meet quorum",
                d.Logger.errors.SERVER_ERROR,
                {
                  method: e,
                  params: t,
                  results: o.map((e) => E(e)),
                  provider: this,
                },
              )
            );
          });
        }
      }
      t.FallbackProvider = FallbackProvider;
    },
    11430: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IpcProvider = void 0));
      t.IpcProvider = null;
    },
    11431: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InfuraWebSocketProvider = t.InfuraProvider = void 0));
      var o = r(2808),
        n = r(5715),
        i = r(3850),
        s = r(2773),
        a = r(3073),
        l = r(3623);
      const c = new s.Logger(a.version),
        u = "84842078b09946638c03157f83405213";
      class InfuraWebSocketProvider extends n.WebSocketProvider {
        constructor(e, t) {
          const r = new InfuraProvider(e, t),
            n = r.connection;
          n.password &&
            c.throwError(
              "INFURA WebSocket project secrets unsupported",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "InfuraProvider.getWebSocketProvider()" },
            );
          const i = n.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
          (super(i, e),
            (0, o.defineReadOnly)(this, "apiKey", r.projectId),
            (0, o.defineReadOnly)(this, "projectId", r.projectId),
            (0, o.defineReadOnly)(this, "projectSecret", r.projectSecret));
        }
        isCommunityResource() {
          return this.projectId === u;
        }
      }
      t.InfuraWebSocketProvider = InfuraWebSocketProvider;
      class InfuraProvider extends l.UrlJsonRpcProvider {
        static getWebSocketProvider(e, t) {
          return new InfuraWebSocketProvider(e, t);
        }
        static getApiKey(e) {
          const t = { apiKey: u, projectId: u, projectSecret: null };
          return (
            null == e ||
              ("string" === typeof e
                ? (t.projectId = e)
                : null != e.projectSecret
                  ? (c.assertArgument(
                      "string" === typeof e.projectId,
                      "projectSecret requires a projectId",
                      "projectId",
                      e.projectId,
                    ),
                    c.assertArgument(
                      "string" === typeof e.projectSecret,
                      "invalid projectSecret",
                      "projectSecret",
                      "[REDACTED]",
                    ),
                    (t.projectId = e.projectId),
                    (t.projectSecret = e.projectSecret))
                  : e.projectId && (t.projectId = e.projectId),
              (t.apiKey = t.projectId)),
            t
          );
        }
        static getUrl(e, t) {
          let r = null;
          switch (e ? e.name : "unknown") {
            case "homestead":
              r = "mainnet.infura.io";
              break;
            case "goerli":
              r = "goerli.infura.io";
              break;
            case "sepolia":
              r = "sepolia.infura.io";
              break;
            case "matic":
              r = "polygon-mainnet.infura.io";
              break;
            case "maticmum":
              r = "polygon-mumbai.infura.io";
              break;
            case "optimism":
              r = "optimism-mainnet.infura.io";
              break;
            case "optimism-goerli":
              r = "optimism-goerli.infura.io";
              break;
            case "optimism-sepolia":
              r = "optimism-sepolia.infura.io";
              break;
            case "arbitrum":
              r = "arbitrum-mainnet.infura.io";
              break;
            case "arbitrum-goerli":
              r = "arbitrum-goerli.infura.io";
              break;
            case "arbitrum-sepolia":
              r = "arbitrum-sepolia.infura.io";
              break;
            default:
              c.throwError(
                "unsupported network",
                s.Logger.errors.INVALID_ARGUMENT,
                { argument: "network", value: e },
              );
          }
          const o = {
            allowGzip: !0,
            url: "https://" + r + "/v3/" + t.projectId,
            throttleCallback: (e, r) => (
              t.projectId === u && (0, i.showThrottleMessage)(),
              Promise.resolve(!0)
            ),
          };
          return (
            null != t.projectSecret &&
              ((o.user = ""), (o.password = t.projectSecret)),
            o
          );
        }
        isCommunityResource() {
          return this.projectId === u;
        }
      }
      t.InfuraProvider = InfuraProvider;
    },
    11432: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.JsonRpcBatchProvider = void 0));
      var o = r(2808),
        n = r(3971),
        i = r(4592);
      class JsonRpcBatchProvider extends i.JsonRpcProvider {
        send(e, t) {
          const r = {
            method: e,
            params: t,
            id: this._nextId++,
            jsonrpc: "2.0",
          };
          null == this._pendingBatch && (this._pendingBatch = []);
          const i = { request: r, resolve: null, reject: null },
            s = new Promise((e, t) => {
              ((i.resolve = e), (i.reject = t));
            });
          return (
            this._pendingBatch.push(i),
            this._pendingBatchAggregator ||
              (this._pendingBatchAggregator = setTimeout(() => {
                const e = this._pendingBatch;
                ((this._pendingBatch = null),
                  (this._pendingBatchAggregator = null));
                const t = e.map((e) => e.request);
                return (
                  this.emit("debug", {
                    action: "requestBatch",
                    request: (0, o.deepCopy)(t),
                    provider: this,
                  }),
                  (0, n.fetchJson)(this.connection, JSON.stringify(t)).then(
                    (r) => {
                      (this.emit("debug", {
                        action: "response",
                        request: t,
                        response: r,
                        provider: this,
                      }),
                        e.forEach((e, t) => {
                          const o = r[t];
                          if (o.error) {
                            const t = new Error(o.error.message);
                            ((t.code = o.error.code),
                              (t.data = o.error.data),
                              e.reject(t));
                          } else e.resolve(o.result);
                        }));
                    },
                    (r) => {
                      (this.emit("debug", {
                        action: "response",
                        error: r,
                        request: t,
                        provider: this,
                      }),
                        e.forEach((e) => {
                          e.reject(r);
                        }));
                    },
                  )
                );
              }, 10)),
            s
          );
        }
      }
      t.JsonRpcBatchProvider = JsonRpcBatchProvider;
    },
    11433: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NodesmithProvider = void 0));
      var o = r(3623),
        n = r(2773),
        i = r(3073);
      const s = new n.Logger(i.version),
        a = "ETHERS_JS_SHARED";
      class NodesmithProvider extends o.UrlJsonRpcProvider {
        static getApiKey(e) {
          return (
            e &&
              "string" !== typeof e &&
              s.throwArgumentError("invalid apiKey", "apiKey", e),
            e || a
          );
        }
        static getUrl(e, t) {
          s.warn(
            "NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.",
          );
          let r = null;
          switch (e.name) {
            case "homestead":
              r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
              break;
            case "ropsten":
              r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
              break;
            case "rinkeby":
              r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
              break;
            case "goerli":
              r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
              break;
            case "kovan":
              r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
              break;
            default:
              s.throwArgumentError(
                "unsupported network",
                "network",
                arguments[0],
              );
          }
          return r + "?apiKey=" + t;
        }
      }
      t.NodesmithProvider = NodesmithProvider;
    },
    11434: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PocketProvider = void 0));
      var o = r(2773),
        n = r(3073),
        i = r(3623);
      const s = new o.Logger(n.version),
        a = "62e1ad51b37b8e00394bda3b";
      class PocketProvider extends i.UrlJsonRpcProvider {
        static getApiKey(e) {
          const t = {
            applicationId: null,
            loadBalancer: !0,
            applicationSecretKey: null,
          };
          return (
            null == e
              ? (t.applicationId = a)
              : "string" === typeof e
                ? (t.applicationId = e)
                : null != e.applicationSecretKey
                  ? ((t.applicationId = e.applicationId),
                    (t.applicationSecretKey = e.applicationSecretKey))
                  : e.applicationId
                    ? (t.applicationId = e.applicationId)
                    : s.throwArgumentError(
                        "unsupported PocketProvider apiKey",
                        "apiKey",
                        e,
                      ),
            t
          );
        }
        static getUrl(e, t) {
          let r = null;
          switch (e ? e.name : "unknown") {
            case "goerli":
              r = "eth-goerli.gateway.pokt.network";
              break;
            case "homestead":
              r = "eth-mainnet.gateway.pokt.network";
              break;
            case "kovan":
              r = "poa-kovan.gateway.pokt.network";
              break;
            case "matic":
              r = "poly-mainnet.gateway.pokt.network";
              break;
            case "maticmum":
              r = "polygon-mumbai-rpc.gateway.pokt.network";
              break;
            case "rinkeby":
              r = "eth-rinkeby.gateway.pokt.network";
              break;
            case "ropsten":
              r = "eth-ropsten.gateway.pokt.network";
              break;
            default:
              s.throwError(
                "unsupported network",
                o.Logger.errors.INVALID_ARGUMENT,
                { argument: "network", value: e },
              );
          }
          const n = `https://${r}/v1/lb/${t.applicationId}`,
            i = { headers: {}, url: n };
          return (
            null != t.applicationSecretKey &&
              ((i.user = ""), (i.password = t.applicationSecretKey)),
            i
          );
        }
        isCommunityResource() {
          return this.applicationId === a;
        }
      }
      t.PocketProvider = PocketProvider;
    },
    11435: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.QuickNodeProvider = void 0));
      var o = r(3623),
        n = r(2773),
        i = r(3073);
      const s = new n.Logger(i.version),
        a = "919b412a057b5e9c9b6dce193c5a60242d6efadb";
      class QuickNodeProvider extends o.UrlJsonRpcProvider {
        static getApiKey(e) {
          return (
            e &&
              "string" !== typeof e &&
              s.throwArgumentError("invalid apiKey", "apiKey", e),
            e || a
          );
        }
        static getUrl(e, t) {
          let r = null;
          switch (e.name) {
            case "homestead":
              r = "ethers.quiknode.pro";
              break;
            case "goerli":
              r = "ethers.ethereum-goerli.quiknode.pro";
              break;
            case "sepolia":
              r = "ethers.ethereum-sepolia.quiknode.pro";
              break;
            case "holesky":
              r = "ethers.ethereum-holesky.quiknode.pro";
              break;
            case "arbitrum":
              r = "ethers.arbitrum-mainnet.quiknode.pro";
              break;
            case "arbitrum-goerli":
              r = "ethers.arbitrum-goerli.quiknode.pro";
              break;
            case "arbitrum-sepolia":
              r = "ethers.arbitrum-sepolia.quiknode.pro";
              break;
            case "base":
              r = "ethers.base-mainnet.quiknode.pro";
              break;
            case "base-goerli":
              r = "ethers.base-goerli.quiknode.pro";
              break;
            case "base-spolia":
              r = "ethers.base-sepolia.quiknode.pro";
              break;
            case "bnb":
              r = "ethers.bsc.quiknode.pro";
              break;
            case "bnbt":
              r = "ethers.bsc-testnet.quiknode.pro";
              break;
            case "matic":
              r = "ethers.matic.quiknode.pro";
              break;
            case "maticmum":
              r = "ethers.matic-testnet.quiknode.pro";
              break;
            case "optimism":
              r = "ethers.optimism.quiknode.pro";
              break;
            case "optimism-goerli":
              r = "ethers.optimism-goerli.quiknode.pro";
              break;
            case "optimism-sepolia":
              r = "ethers.optimism-sepolia.quiknode.pro";
              break;
            case "xdai":
              r = "ethers.xdai.quiknode.pro";
              break;
            default:
              s.throwArgumentError(
                "unsupported network",
                "network",
                arguments[0],
              );
          }
          return "https://" + r + "/" + t;
        }
      }
      t.QuickNodeProvider = QuickNodeProvider;
    },
    11436: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Web3Provider = void 0));
      var o = r(2808),
        n = r(2773),
        i = r(3073),
        s = r(4592);
      const a = new n.Logger(i.version);
      let l = 1;
      function c(e, t) {
        const r = "Web3LegacyFetcher";
        return function (e, n) {
          const i = { method: e, params: n, id: l++, jsonrpc: "2.0" };
          return new Promise((e, n) => {
            (this.emit("debug", {
              action: "request",
              fetcher: r,
              request: (0, o.deepCopy)(i),
              provider: this,
            }),
              t(i, (t, o) => {
                if (t)
                  return (
                    this.emit("debug", {
                      action: "response",
                      fetcher: r,
                      error: t,
                      request: i,
                      provider: this,
                    }),
                    n(t)
                  );
                if (
                  (this.emit("debug", {
                    action: "response",
                    fetcher: r,
                    request: i,
                    response: o,
                    provider: this,
                  }),
                  o.error)
                ) {
                  const e = new Error(o.error.message);
                  return (
                    (e.code = o.error.code),
                    (e.data = o.error.data),
                    n(e)
                  );
                }
                e(o.result);
              }));
          });
        };
      }
      function u(e) {
        return function (t, r) {
          null == r && (r = []);
          const n = { method: t, params: r };
          return (
            this.emit("debug", {
              action: "request",
              fetcher: "Eip1193Fetcher",
              request: (0, o.deepCopy)(n),
              provider: this,
            }),
            e.request(n).then(
              (e) => (
                this.emit("debug", {
                  action: "response",
                  fetcher: "Eip1193Fetcher",
                  request: n,
                  response: e,
                  provider: this,
                }),
                e
              ),
              (e) => {
                throw (
                  this.emit("debug", {
                    action: "response",
                    fetcher: "Eip1193Fetcher",
                    request: n,
                    error: e,
                    provider: this,
                  }),
                  e
                );
              },
            )
          );
        };
      }
      class Web3Provider extends s.JsonRpcProvider {
        constructor(e, t) {
          null == e && a.throwArgumentError("missing provider", "provider", e);
          let r = null,
            n = null,
            i = null;
          ("function" === typeof e
            ? ((r = "unknown:"), (n = e))
            : ((r = e.host || e.path || ""),
              !r && e.isMetaMask && (r = "metamask"),
              (i = e),
              e.request
                ? ("" === r && (r = "eip-1193:"), (n = u(e)))
                : e.sendAsync
                  ? (n = c(e, e.sendAsync.bind(e)))
                  : e.send
                    ? (n = c(e, e.send.bind(e)))
                    : a.throwArgumentError(
                        "unsupported provider",
                        "provider",
                        e,
                      ),
              r || (r = "unknown:")),
            super(r, t),
            (0, o.defineReadOnly)(this, "jsonRpcFetchFunc", n),
            (0, o.defineReadOnly)(this, "provider", i));
        }
        send(e, t) {
          return this.jsonRpcFetchFunc(e, t);
        }
      }
      t.Web3Provider = Web3Provider;
    },
    11438: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.keccak256 = y),
        (t.pack = m),
        (t.sha256 = b));
      var o = r(2829),
        n = r(2776),
        i = r(3049),
        s = r(4591),
        a = r(3016),
        l = r(2773),
        c = r(11439);
      const u = new RegExp("^bytes([0-9]+)$"),
        d = new RegExp("^(u?int)([0-9]*)$"),
        h = new RegExp("^(.*)\\[([0-9]*)\\]$"),
        f = "0000000000000000000000000000000000000000000000000000000000000000",
        g = new l.Logger(c.version);
      function p(e, t, r) {
        switch (e) {
          case "address":
            return r ? (0, n.zeroPad)(t, 32) : (0, n.arrayify)(t);
          case "string":
            return (0, a.toUtf8Bytes)(t);
          case "bytes":
            return (0, n.arrayify)(t);
          case "bool":
            return (
              (t = t ? "0x01" : "0x00"),
              r ? (0, n.zeroPad)(t, 32) : (0, n.arrayify)(t)
            );
        }
        let i = e.match(d);
        if (i) {
          let s = parseInt(i[2] || "256");
          return (
            ((i[2] && String(s) !== i[2]) ||
              s % 8 !== 0 ||
              0 === s ||
              s > 256) &&
              g.throwArgumentError("invalid number type", "type", e),
            r && (s = 256),
            (t = o.BigNumber.from(t).toTwos(s)),
            (0, n.zeroPad)(t, s / 8)
          );
        }
        if (((i = e.match(u)), i)) {
          const o = parseInt(i[1]);
          return (
            (String(o) !== i[1] || 0 === o || o > 32) &&
              g.throwArgumentError("invalid bytes type", "type", e),
            (0, n.arrayify)(t).byteLength !== o &&
              g.throwArgumentError("invalid value for " + e, "value", t),
            r ? (0, n.arrayify)((t + f).substring(0, 66)) : t
          );
        }
        if (((i = e.match(h)), i && Array.isArray(t))) {
          const r = i[1],
            o = parseInt(i[2] || String(t.length));
          o != t.length &&
            g.throwArgumentError("invalid array length for " + e, "value", t);
          const s = [];
          return (
            t.forEach(function (e) {
              s.push(p(r, e, !0));
            }),
            (0, n.concat)(s)
          );
        }
        return g.throwArgumentError("invalid type", "type", e);
      }
      function m(e, t) {
        e.length != t.length &&
          g.throwArgumentError(
            "wrong number of values; expected ${ types.length }",
            "values",
            t,
          );
        const r = [];
        return (
          e.forEach(function (e, o) {
            r.push(p(e, t[o]));
          }),
          (0, n.hexlify)((0, n.concat)(r))
        );
      }
      function y(e, t) {
        return (0, i.keccak256)(m(e, t));
      }
      function b(e, t) {
        return (0, s.sha256)(m(e, t));
      }
    },
    11439: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "solidity/5.8.0";
    },
    11440: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.commify = l),
        (t.formatEther = d),
        (t.formatUnits = c),
        (t.parseEther = h),
        (t.parseUnits = u));
      var o = r(2829),
        n = r(2773),
        i = r(11441);
      const s = new n.Logger(i.version),
        a = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
      function l(e) {
        const t = String(e).split(".");
        (t.length > 2 ||
          !t[0].match(/^-?[0-9]*$/) ||
          (t[1] && !t[1].match(/^[0-9]*$/)) ||
          "." === e ||
          "-." === e) &&
          s.throwArgumentError("invalid value", "value", e);
        let r = t[0],
          o = "";
        "-" === r.substring(0, 1) && ((o = "-"), (r = r.substring(1)));
        while ("0" === r.substring(0, 1)) r = r.substring(1);
        "" === r && (r = "0");
        let n = "";
        2 === t.length && (n = "." + (t[1] || "0"));
        while (n.length > 2 && "0" === n[n.length - 1])
          n = n.substring(0, n.length - 1);
        const i = [];
        while (r.length) {
          if (r.length <= 3) {
            i.unshift(r);
            break;
          }
          {
            const e = r.length - 3;
            (i.unshift(r.substring(e)), (r = r.substring(0, e)));
          }
        }
        return o + i.join(",") + n;
      }
      function c(e, t) {
        if ("string" === typeof t) {
          const e = a.indexOf(t);
          -1 !== e && (t = 3 * e);
        }
        return (0, o.formatFixed)(e, null != t ? t : 18);
      }
      function u(e, t) {
        if (
          ("string" !== typeof e &&
            s.throwArgumentError("value must be a string", "value", e),
          "string" === typeof t)
        ) {
          const e = a.indexOf(t);
          -1 !== e && (t = 3 * e);
        }
        return (0, o.parseFixed)(e, null != t ? t : 18);
      }
      function d(e) {
        return c(e, 18);
      }
      function h(e) {
        return u(e, 18);
      }
    },
    11441: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "units/5.8.0";
    },
    11443: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.base32 = u));
      var o = n(r(6911));
      function n(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            o = new WeakMap();
        return (n = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var n,
            i,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((n = t ? o : r)) {
            if (n.has(e)) return n.get(e);
            n.set(e, s);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((i =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (i.get || i.set)
                ? n(s, r, i)
                : (s[r] = e[r]));
          return s;
        })(e, t);
      }
      function i(e, t) {
        var r =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = s(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            r && (e = r);
            var o = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return o >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[o++] };
              },
              e: function (e) {
                throw e;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          a = !0,
          l = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return ((a = e.done), e);
          },
          e: function (e) {
            ((l = !0), (i = e));
          },
          f: function () {
            try {
              a || null == r.return || r.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function s(e, t) {
        if (e) {
          if ("string" === typeof e) return a(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? a(e, t)
                : void 0
          );
        }
      }
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
        return o;
      }
      function l(e, t) {
        e = e.replace(new RegExp("=", "g"), "");
        for (
          var r = e,
            o = r.length,
            n = 0,
            i = 0,
            s = 0,
            a = new Uint8Array(((5 * o) / 8) | 0),
            l = 0;
          l < o;
          l++
        )
          ((i = (i << 5) | t.indexOf(e[l])),
            (n += 5),
            n >= 8 && ((a[s++] = (i >>> (n - 8)) & 255), (n -= 8)));
        return a;
      }
      function c(e, t) {
        var r = e.byteLength,
          o = new Uint8Array(e),
          n = t.indexOf("=") === t.length - 1;
        n && (t = t.substring(0, t.length - 2));
        for (var i = 0, s = 0, a = "", l = 0; l < r; l++) {
          ((s = (s << 8) | o[l]), (i += 8));
          while (i >= 5) ((a += t[(s >>> (i - 5)) & 31]), (i -= 5));
        }
        if ((i > 0 && (a += t[(s << (5 - i)) & 31]), n))
          while (a.length % 8 !== 0) a += "=";
        return a;
      }
      function u(e) {
        return {
          encode: function (t) {
            return c("string" === typeof t ? o.fromString(t) : t, e);
          },
          decode: function (t) {
            var r,
              o = i(t);
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var n = r.value;
                if (e.indexOf(n) < 0)
                  throw new Error("invalid base32 character");
              }
            } catch (s) {
              o.e(s);
            } finally {
              o.f();
            }
            return l(t, e);
          },
        };
      }
    },
    11444: function (e, t, r) {
      "use strict";
      var o, n;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Protocol = t.DelegatedNamespace = void 0),
        (function (e) {
          ((e[(e["ID"] = 0)] = "ID"),
            (e[(e["SECP256K1"] = 1)] = "SECP256K1"),
            (e[(e["ACTOR"] = 2)] = "ACTOR"),
            (e[(e["BLS"] = 3)] = "BLS"),
            (e[(e["DELEGATED"] = 4)] = "DELEGATED"));
        })(o || (t.Protocol = o = {})),
        (function (e) {
          e[(e["EVM"] = 10)] = "EVM";
        })(n || (t.DelegatedNamespace = n = {})));
    },
    11445: function (e, t, r) {
      "use strict";
      var o, n;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Network = t.CoinType = void 0),
        (function (e) {
          ((e["MAIN"] = "f"), (e["TEST"] = "t"));
        })(o || (t.Network = o = {})),
        (function (e) {
          ((e["MAIN"] = "f"), (e["TEST"] = "t"));
        })(n || (t.CoinType = n = {})));
    },
    3073: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "providers/5.8.0";
    },
    3623: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UrlJsonRpcProvider = t.StaticJsonRpcProvider = void 0));
      var o = r(2808),
        n = r(2773),
        i = r(3073),
        s = r(4592),
        a = function (e, t, r, o) {
          function n(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, i) {
            function s(e) {
              try {
                l(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function l(e) {
              e.done ? r(e.value) : n(e.value).then(s, a);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const l = new n.Logger(i.version);
      class StaticJsonRpcProvider extends s.JsonRpcProvider {
        detectNetwork() {
          const e = Object.create(null, {
            detectNetwork: { get: () => super.detectNetwork },
          });
          return a(this, void 0, void 0, function* () {
            let t = this.network;
            return (
              null == t &&
                ((t = yield e.detectNetwork.call(this)),
                t ||
                  l.throwError(
                    "no network detected",
                    n.Logger.errors.UNKNOWN_ERROR,
                    {},
                  ),
                null == this._network &&
                  ((0, o.defineReadOnly)(this, "_network", t),
                  this.emit("network", t, null))),
              t
            );
          });
        }
      }
      t.StaticJsonRpcProvider = StaticJsonRpcProvider;
      class UrlJsonRpcProvider extends StaticJsonRpcProvider {
        constructor(e, t) {
          (l.checkAbstract(new.target, UrlJsonRpcProvider),
            (e = (0, o.getStatic)(new.target, "getNetwork")(e)),
            (t = (0, o.getStatic)(new.target, "getApiKey")(t)));
          const r = (0, o.getStatic)(new.target, "getUrl")(e, t);
          (super(r, e),
            "string" === typeof t
              ? (0, o.defineReadOnly)(this, "apiKey", t)
              : null != t &&
                Object.keys(t).forEach((e) => {
                  (0, o.defineReadOnly)(this, e, t[e]);
                }));
        }
        _startPending() {
          l.warn("WARNING: API provider does not support pending filters");
        }
        isCommunityResource() {
          return !1;
        }
        getSigner(e) {
          return l.throwError(
            "API provider does not support signing",
            n.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "getSigner" },
          );
        }
        listAccounts() {
          return Promise.resolve([]);
        }
        static getApiKey(e) {
          return e;
        }
        static getUrl(e, t) {
          return l.throwError(
            "not implemented; sub-classes must override getUrl",
            n.Logger.errors.NOT_IMPLEMENTED,
            { operation: "getUrl" },
          );
        }
      }
      t.UrlJsonRpcProvider = UrlJsonRpcProvider;
    },
    3850: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Formatter = void 0),
        (t.isCommunityResourcable = h),
        (t.isCommunityResource = f),
        (t.showThrottleMessage = p));
      var o = r(2976),
        n = r(2829),
        i = r(2776),
        s = r(3272),
        a = r(2808),
        l = r(3271),
        c = r(2773),
        u = r(3073);
      const d = new c.Logger(u.version);
      class Formatter {
        constructor() {
          this.formats = this.getDefaultFormats();
        }
        getDefaultFormats() {
          const e = {},
            t = this.address.bind(this),
            r = this.bigNumber.bind(this),
            o = this.blockTag.bind(this),
            n = this.data.bind(this),
            i = this.hash.bind(this),
            s = this.hex.bind(this),
            l = this.number.bind(this),
            c = this.type.bind(this),
            u = (e) => this.data(e, !0);
          return (
            (e.transaction = {
              hash: i,
              type: c,
              accessList: Formatter.allowNull(this.accessList.bind(this), null),
              blockHash: Formatter.allowNull(i, null),
              blockNumber: Formatter.allowNull(l, null),
              transactionIndex: Formatter.allowNull(l, null),
              confirmations: Formatter.allowNull(l, null),
              from: t,
              gasPrice: Formatter.allowNull(r),
              maxPriorityFeePerGas: Formatter.allowNull(r),
              maxFeePerGas: Formatter.allowNull(r),
              gasLimit: r,
              to: Formatter.allowNull(t, null),
              value: r,
              nonce: l,
              data: n,
              r: Formatter.allowNull(this.uint256),
              s: Formatter.allowNull(this.uint256),
              v: Formatter.allowNull(l),
              creates: Formatter.allowNull(t, null),
              raw: Formatter.allowNull(n),
            }),
            (e.transactionRequest = {
              from: Formatter.allowNull(t),
              nonce: Formatter.allowNull(l),
              gasLimit: Formatter.allowNull(r),
              gasPrice: Formatter.allowNull(r),
              maxPriorityFeePerGas: Formatter.allowNull(r),
              maxFeePerGas: Formatter.allowNull(r),
              to: Formatter.allowNull(t),
              value: Formatter.allowNull(r),
              data: Formatter.allowNull(u),
              type: Formatter.allowNull(l),
              accessList: Formatter.allowNull(this.accessList.bind(this), null),
            }),
            (e.receiptLog = {
              transactionIndex: l,
              blockNumber: l,
              transactionHash: i,
              address: t,
              topics: Formatter.arrayOf(i),
              data: n,
              logIndex: l,
              blockHash: i,
            }),
            (e.receipt = {
              to: Formatter.allowNull(this.address, null),
              from: Formatter.allowNull(this.address, null),
              contractAddress: Formatter.allowNull(t, null),
              transactionIndex: l,
              root: Formatter.allowNull(s),
              gasUsed: r,
              logsBloom: Formatter.allowNull(n),
              blockHash: i,
              transactionHash: i,
              logs: Formatter.arrayOf(this.receiptLog.bind(this)),
              blockNumber: l,
              confirmations: Formatter.allowNull(l, null),
              cumulativeGasUsed: r,
              effectiveGasPrice: Formatter.allowNull(r),
              status: Formatter.allowNull(l),
              type: c,
            }),
            (e.block = {
              hash: Formatter.allowNull(i),
              parentHash: i,
              number: l,
              timestamp: l,
              nonce: Formatter.allowNull(s),
              difficulty: this.difficulty.bind(this),
              gasLimit: r,
              gasUsed: r,
              miner: Formatter.allowNull(t),
              extraData: n,
              transactions: Formatter.allowNull(Formatter.arrayOf(i)),
              baseFeePerGas: Formatter.allowNull(r),
            }),
            (e.blockWithTransactions = (0, a.shallowCopy)(e.block)),
            (e.blockWithTransactions.transactions = Formatter.allowNull(
              Formatter.arrayOf(this.transactionResponse.bind(this)),
            )),
            (e.filter = {
              fromBlock: Formatter.allowNull(o, void 0),
              toBlock: Formatter.allowNull(o, void 0),
              blockHash: Formatter.allowNull(i, void 0),
              address: Formatter.allowNull(t, void 0),
              topics: Formatter.allowNull(this.topics.bind(this), void 0),
            }),
            (e.filterLog = {
              blockNumber: Formatter.allowNull(l),
              blockHash: Formatter.allowNull(i),
              transactionIndex: l,
              removed: Formatter.allowNull(this.boolean.bind(this)),
              address: t,
              data: Formatter.allowFalsish(n, "0x"),
              topics: Formatter.arrayOf(i),
              transactionHash: i,
              logIndex: l,
            }),
            e
          );
        }
        accessList(e) {
          return (0, l.accessListify)(e || []);
        }
        number(e) {
          return "0x" === e ? 0 : n.BigNumber.from(e).toNumber();
        }
        type(e) {
          return "0x" === e || null == e ? 0 : n.BigNumber.from(e).toNumber();
        }
        bigNumber(e) {
          return n.BigNumber.from(e);
        }
        boolean(e) {
          if ("boolean" === typeof e) return e;
          if ("string" === typeof e) {
            if (((e = e.toLowerCase()), "true" === e)) return !0;
            if ("false" === e) return !1;
          }
          throw new Error("invalid boolean - " + e);
        }
        hex(e, t) {
          return "string" === typeof e &&
            (t || "0x" === e.substring(0, 2) || (e = "0x" + e),
            (0, i.isHexString)(e))
            ? e.toLowerCase()
            : d.throwArgumentError("invalid hash", "value", e);
        }
        data(e, t) {
          const r = this.hex(e, t);
          if (r.length % 2 !== 0)
            throw new Error("invalid data; odd-length - " + e);
          return r;
        }
        address(e) {
          return (0, o.getAddress)(e);
        }
        callAddress(e) {
          if (!(0, i.isHexString)(e, 32)) return null;
          const t = (0, o.getAddress)((0, i.hexDataSlice)(e, 12));
          return t === s.AddressZero ? null : t;
        }
        contractAddress(e) {
          return (0, o.getContractAddress)(e);
        }
        blockTag(e) {
          if (null == e) return "latest";
          if ("earliest" === e) return "0x0";
          switch (e) {
            case "earliest":
              return "0x0";
            case "latest":
            case "pending":
            case "safe":
            case "finalized":
              return e;
          }
          if ("number" === typeof e || (0, i.isHexString)(e))
            return (0, i.hexValue)(e);
          throw new Error("invalid blockTag");
        }
        hash(e, t) {
          const r = this.hex(e, t);
          return 32 !== (0, i.hexDataLength)(r)
            ? d.throwArgumentError("invalid hash", "value", e)
            : r;
        }
        difficulty(e) {
          if (null == e) return null;
          const t = n.BigNumber.from(e);
          try {
            return t.toNumber();
          } catch (r) {}
          return null;
        }
        uint256(e) {
          if (!(0, i.isHexString)(e)) throw new Error("invalid uint256");
          return (0, i.hexZeroPad)(e, 32);
        }
        _block(e, t) {
          null != e.author && null == e.miner && (e.miner = e.author);
          const r = null != e._difficulty ? e._difficulty : e.difficulty,
            o = Formatter.check(t, e);
          return ((o._difficulty = null == r ? null : n.BigNumber.from(r)), o);
        }
        block(e) {
          return this._block(e, this.formats.block);
        }
        blockWithTransactions(e) {
          return this._block(e, this.formats.blockWithTransactions);
        }
        transactionRequest(e) {
          return Formatter.check(this.formats.transactionRequest, e);
        }
        transactionResponse(e) {
          (null != e.gas && null == e.gasLimit && (e.gasLimit = e.gas),
            e.to &&
              n.BigNumber.from(e.to).isZero() &&
              (e.to = "0x0000000000000000000000000000000000000000"),
            null != e.input && null == e.data && (e.data = e.input),
            null == e.to &&
              null == e.creates &&
              (e.creates = this.contractAddress(e)),
            (1 !== e.type && 2 !== e.type) ||
              null != e.accessList ||
              (e.accessList = []));
          const t = Formatter.check(this.formats.transaction, e);
          if (null != e.chainId) {
            let r = e.chainId;
            ((0, i.isHexString)(r) && (r = n.BigNumber.from(r).toNumber()),
              (t.chainId = r));
          } else {
            let r = e.networkId;
            (null == r && null == t.v && (r = e.chainId),
              (0, i.isHexString)(r) && (r = n.BigNumber.from(r).toNumber()),
              "number" !== typeof r &&
                null != t.v &&
                ((r = (t.v - 35) / 2), r < 0 && (r = 0), (r = parseInt(r))),
              "number" !== typeof r && (r = 0),
              (t.chainId = r));
          }
          return (
            t.blockHash &&
              "x" === t.blockHash.replace(/0/g, "") &&
              (t.blockHash = null),
            t
          );
        }
        transaction(e) {
          return (0, l.parse)(e);
        }
        receiptLog(e) {
          return Formatter.check(this.formats.receiptLog, e);
        }
        receipt(e) {
          const t = Formatter.check(this.formats.receipt, e);
          if (null != t.root)
            if (t.root.length <= 4) {
              const e = n.BigNumber.from(t.root).toNumber();
              0 === e || 1 === e
                ? (null != t.status &&
                    t.status !== e &&
                    d.throwArgumentError(
                      "alt-root-status/status mismatch",
                      "value",
                      { root: t.root, status: t.status },
                    ),
                  (t.status = e),
                  delete t.root)
                : d.throwArgumentError(
                    "invalid alt-root-status",
                    "value.root",
                    t.root,
                  );
            } else
              66 !== t.root.length &&
                d.throwArgumentError("invalid root hash", "value.root", t.root);
          return (null != t.status && (t.byzantium = !0), t);
        }
        topics(e) {
          return Array.isArray(e)
            ? e.map((e) => this.topics(e))
            : null != e
              ? this.hash(e, !0)
              : null;
        }
        filter(e) {
          return Formatter.check(this.formats.filter, e);
        }
        filterLog(e) {
          return Formatter.check(this.formats.filterLog, e);
        }
        static check(e, t) {
          const r = {};
          for (const n in e)
            try {
              const o = e[n](t[n]);
              void 0 !== o && (r[n] = o);
            } catch (o) {
              throw ((o.checkKey = n), (o.checkValue = t[n]), o);
            }
          return r;
        }
        static allowNull(e, t) {
          return function (r) {
            return null == r ? t : e(r);
          };
        }
        static allowFalsish(e, t) {
          return function (r) {
            return r ? e(r) : t;
          };
        }
        static arrayOf(e) {
          return function (t) {
            if (!Array.isArray(t)) throw new Error("not an array");
            const r = [];
            return (
              t.forEach(function (t) {
                r.push(e(t));
              }),
              r
            );
          };
        }
      }
      function h(e) {
        return e && "function" === typeof e.isCommunityResource;
      }
      function f(e) {
        return h(e) && e.isCommunityResource();
      }
      t.Formatter = Formatter;
      let g = !1;
      function p() {
        g ||
          ((g = !0),
          console.log("========= NOTICE ========="),
          console.log(
            "Request-Rate Exceeded  (this message will not be repeated)",
          ),
          console.log(""),
          console.log(
            "The default API keys for each service are provided as a highly-throttled,",
          ),
          console.log(
            "community resource for low-traffic projects and early prototyping.",
          ),
          console.log(""),
          console.log(
            "While your application will continue to function, we highly recommended",
          ),
          console.log(
            "signing up for your own API keys to improve performance, increase your",
          ),
          console.log(
            "request rate/limit and enable other perks, such as metrics and advanced APIs.",
          ),
          console.log(""),
          console.log("For more details: https://docs.ethers.io/api-keys/"),
          console.log("=========================="));
      }
    },
    3971: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._fetchData = p),
        (t.fetchJson = m),
        (t.poll = y));
      var o = r(4624),
        n = r(2776),
        i = r(2808),
        s = r(3016),
        a = r(2773),
        l = r(11422),
        c = r(11423),
        u = function (e, t, r, o) {
          function n(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, i) {
            function s(e) {
              try {
                l(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function l(e) {
              e.done ? r(e.value) : n(e.value).then(s, a);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const d = new a.Logger(l.version);
      function h(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function f(e, t) {
        if (null == e) return null;
        if ("string" === typeof e) return e;
        if ((0, n.isBytesLike)(e)) {
          if (
            t &&
            ("text" === t.split("/")[0] ||
              "application/json" === t.split(";")[0].trim())
          )
            try {
              return (0, s.toUtf8String)(e);
            } catch (r) {}
          return (0, n.hexlify)(e);
        }
        return e;
      }
      function g(e) {
        return (0, s.toUtf8Bytes)(
          e.replace(/%([0-9a-f][0-9a-f])/gi, (e, t) =>
            String.fromCharCode(parseInt(t, 16)),
          ),
        );
      }
      function p(e, t, r) {
        const n =
          "object" === typeof e && null != e.throttleLimit
            ? e.throttleLimit
            : 12;
        d.assertArgument(
          n > 0 && n % 1 === 0,
          "invalid connection throttle limit",
          "connection.throttleLimit",
          n,
        );
        const l = "object" === typeof e ? e.throttleCallback : null,
          p =
            "object" === typeof e && "number" === typeof e.throttleSlotInterval
              ? e.throttleSlotInterval
              : 100;
        d.assertArgument(
          p > 0 && p % 1 === 0,
          "invalid connection throttle slot interval",
          "connection.throttleSlotInterval",
          p,
        );
        const m = "object" === typeof e && !!e.errorPassThrough,
          y = {};
        let b = null;
        const v = { method: "GET" };
        let w = !1,
          k = 12e4;
        if ("string" === typeof e) b = e;
        else if ("object" === typeof e) {
          if (
            ((null != e && null != e.url) ||
              d.throwArgumentError("missing URL", "connection.url", e),
            (b = e.url),
            "number" === typeof e.timeout && e.timeout > 0 && (k = e.timeout),
            e.headers)
          )
            for (const t in e.headers)
              ((y[t.toLowerCase()] = { key: t, value: String(e.headers[t]) }),
                ["if-none-match", "if-modified-since"].indexOf(
                  t.toLowerCase(),
                ) >= 0 && (w = !0));
          if (
            ((v.allowGzip = !!e.allowGzip),
            null != e.user && null != e.password)
          ) {
            "https:" !== b.substring(0, 6) &&
              !0 !== e.allowInsecureAuthentication &&
              d.throwError(
                "basic authentication requires a secure https url",
                a.Logger.errors.INVALID_ARGUMENT,
                {
                  argument: "url",
                  url: b,
                  user: e.user,
                  password: "[REDACTED]",
                },
              );
            const t = e.user + ":" + e.password;
            y["authorization"] = {
              key: "Authorization",
              value: "Basic " + (0, o.encode)((0, s.toUtf8Bytes)(t)),
            };
          }
          (null != e.skipFetchSetup && (v.skipFetchSetup = !!e.skipFetchSetup),
            null != e.fetchOptions &&
              (v.fetchOptions = (0, i.shallowCopy)(e.fetchOptions)));
        }
        const P = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
          E = b ? b.match(P) : null;
        if (E)
          try {
            const e = {
              statusCode: 200,
              statusMessage: "OK",
              headers: { "content-type": E[1] || "text/plain" },
              body: E[2] ? (0, o.decode)(E[3]) : g(E[3]),
            };
            let t = e.body;
            return (r && (t = r(e.body, e)), Promise.resolve(t));
          } catch (A) {
            d.throwError(
              "processing response error",
              a.Logger.errors.SERVER_ERROR,
              {
                body: f(E[1], E[2]),
                error: A,
                requestBody: null,
                requestMethod: "GET",
                url: b,
              },
            );
          }
        t &&
          ((v.method = "POST"),
          (v.body = t),
          null == y["content-type"] &&
            (y["content-type"] = {
              key: "Content-Type",
              value: "application/octet-stream",
            }),
          null == y["content-length"] &&
            (y["content-length"] = {
              key: "Content-Length",
              value: String(t.length),
            }));
        const _ = {};
        (Object.keys(y).forEach((e) => {
          const t = y[e];
          _[t.key] = t.value;
        }),
          (v.headers = _));
        const S = (function () {
            let e = null;
            const t = new Promise(function (t, r) {
                k &&
                  (e = setTimeout(() => {
                    null != e &&
                      ((e = null),
                      r(
                        d.makeError("timeout", a.Logger.errors.TIMEOUT, {
                          requestBody: f(v.body, _["content-type"]),
                          requestMethod: v.method,
                          timeout: k,
                          url: b,
                        }),
                      ));
                  }, k));
              }),
              r = function () {
                null != e && (clearTimeout(e), (e = null));
              };
            return { promise: t, cancel: r };
          })(),
          R = (function () {
            return u(this, void 0, void 0, function* () {
              for (let e = 0; e < n; e++) {
                let t = null;
                try {
                  if (((t = yield (0, c.getUrl)(b, v)), e < n))
                    if (301 === t.statusCode || 302 === t.statusCode) {
                      const e = t.headers.location || "";
                      if ("GET" === v.method && e.match(/^https:/)) {
                        b = t.headers.location;
                        continue;
                      }
                    } else if (429 === t.statusCode) {
                      let r = !0;
                      if ((l && (r = yield l(e, b)), r)) {
                        let r = 0;
                        const o = t.headers["retry-after"];
                        ((r =
                          "string" === typeof o && o.match(/^[1-9][0-9]*$/)
                            ? 1e3 * parseInt(o)
                            : p *
                              parseInt(String(Math.random() * Math.pow(2, e)))),
                          yield h(r));
                        continue;
                      }
                    }
                } catch (A) {
                  ((t = A.response),
                    null == t &&
                      (S.cancel(),
                      d.throwError(
                        "missing response",
                        a.Logger.errors.SERVER_ERROR,
                        {
                          requestBody: f(v.body, _["content-type"]),
                          requestMethod: v.method,
                          serverError: A,
                          url: b,
                        },
                      )));
                }
                let o = t.body;
                if (
                  (w && 304 === t.statusCode
                    ? (o = null)
                    : !m &&
                      (t.statusCode < 200 || t.statusCode >= 300) &&
                      (S.cancel(),
                      d.throwError(
                        "bad response",
                        a.Logger.errors.SERVER_ERROR,
                        {
                          status: t.statusCode,
                          headers: t.headers,
                          body: f(
                            o,
                            t.headers ? t.headers["content-type"] : null,
                          ),
                          requestBody: f(v.body, _["content-type"]),
                          requestMethod: v.method,
                          url: b,
                        },
                      )),
                  r)
                )
                  try {
                    const e = yield r(o, t);
                    return (S.cancel(), e);
                  } catch (A) {
                    if (A.throttleRetry && e < n) {
                      let t = !0;
                      if ((l && (t = yield l(e, b)), t)) {
                        const t =
                          p * parseInt(String(Math.random() * Math.pow(2, e)));
                        yield h(t);
                        continue;
                      }
                    }
                    (S.cancel(),
                      d.throwError(
                        "processing response error",
                        a.Logger.errors.SERVER_ERROR,
                        {
                          body: f(
                            o,
                            t.headers ? t.headers["content-type"] : null,
                          ),
                          error: A,
                          requestBody: f(v.body, _["content-type"]),
                          requestMethod: v.method,
                          url: b,
                        },
                      ));
                  }
                return (S.cancel(), o);
              }
              return d.throwError(
                "failed response",
                a.Logger.errors.SERVER_ERROR,
                {
                  requestBody: f(v.body, _["content-type"]),
                  requestMethod: v.method,
                  url: b,
                },
              );
            });
          })();
        return Promise.race([S.promise, R]);
      }
      function m(e, t, r) {
        let o = (e, t) => {
            let o = null;
            if (null != e)
              try {
                o = JSON.parse((0, s.toUtf8String)(e));
              } catch (n) {
                d.throwError("invalid JSON", a.Logger.errors.SERVER_ERROR, {
                  body: e,
                  error: n,
                });
              }
            return (r && (o = r(o, t)), o);
          },
          n = null;
        if (null != t) {
          n = (0, s.toUtf8Bytes)(t);
          const r = "string" === typeof e ? { url: e } : (0, i.shallowCopy)(e);
          if (r.headers) {
            const e =
              0 !==
              Object.keys(r.headers).filter(
                (e) => "content-type" === e.toLowerCase(),
              ).length;
            e ||
              ((r.headers = (0, i.shallowCopy)(r.headers)),
              (r.headers["content-type"] = "application/json"));
          } else r.headers = { "content-type": "application/json" };
          e = r;
        }
        return p(e, n, o);
      }
      function y(e, t) {
        return (
          t || (t = {}),
          (t = (0, i.shallowCopy)(t)),
          null == t.floor && (t.floor = 0),
          null == t.ceiling && (t.ceiling = 1e4),
          null == t.interval && (t.interval = 250),
          new Promise(function (r, o) {
            let n = null,
              i = !1;
            const s = () => !i && ((i = !0), n && clearTimeout(n), !0);
            t.timeout &&
              (n = setTimeout(() => {
                s() && o(new Error("timeout"));
              }, t.timeout));
            const a = t.retryLimit;
            let l = 0;
            function c() {
              return e().then(
                function (e) {
                  if (void 0 !== e) s() && r(e);
                  else if (t.oncePoll) t.oncePoll.once("poll", c);
                  else if (t.onceBlock) t.onceBlock.once("block", c);
                  else if (!i) {
                    if ((l++, l > a))
                      return void (s() && o(new Error("retry limit reached")));
                    let e =
                      t.interval *
                      parseInt(String(Math.random() * Math.pow(2, l)));
                    (e < t.floor && (e = t.floor),
                      e > t.ceiling && (e = t.ceiling),
                      setTimeout(c, e));
                  }
                  return null;
                },
                function (e) {
                  s() && o(e);
                },
              );
            }
            c();
          })
        );
      }
    },
    4591: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "SupportedAlgorithm", {
          enumerable: !0,
          get: function () {
            return n.SupportedAlgorithm;
          },
        }),
        Object.defineProperty(t, "computeHmac", {
          enumerable: !0,
          get: function () {
            return o.computeHmac;
          },
        }),
        Object.defineProperty(t, "ripemd160", {
          enumerable: !0,
          get: function () {
            return o.ripemd160;
          },
        }),
        Object.defineProperty(t, "sha256", {
          enumerable: !0,
          get: function () {
            return o.sha256;
          },
        }),
        Object.defineProperty(t, "sha512", {
          enumerable: !0,
          get: function () {
            return o.sha512;
          },
        }));
      var o = r(11407),
        n = r(6917);
    },
    4592: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.JsonRpcSigner = t.JsonRpcProvider = void 0));
      var o = r(4874),
        n = r(2829),
        i = r(2776),
        s = r(3274),
        a = r(2808),
        l = r(3016),
        c = r(3271),
        u = r(3971),
        d = r(2773),
        h = r(3073),
        f = r(4876),
        g = function (e, t, r, o) {
          function n(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, i) {
            function s(e) {
              try {
                l(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function l(e) {
              e.done ? r(e.value) : n(e.value).then(s, a);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const p = new d.Logger(h.version),
        m = ["call", "estimateGas"];
      function y(e, t) {
        if (null == e) return null;
        if ("string" === typeof e.message && e.message.match("reverted")) {
          const r = (0, i.isHexString)(e.data) ? e.data : null;
          if (!t || r) return { message: e.message, data: r };
        }
        if ("object" === typeof e) {
          for (const r in e) {
            const o = y(e[r], t);
            if (o) return o;
          }
          return null;
        }
        if ("string" === typeof e)
          try {
            return y(JSON.parse(e), t);
          } catch (r) {}
        return null;
      }
      function b(e, t, r) {
        const o = r.transaction || r.signedTransaction;
        if ("call" === e) {
          const e = y(t, !0);
          if (e) return e.data;
          p.throwError(
            "missing revert data in call exception; Transaction reverted without a reason string",
            d.Logger.errors.CALL_EXCEPTION,
            { data: "0x", transaction: o, error: t },
          );
        }
        if ("estimateGas" === e) {
          let r = y(t.body, !1);
          (null == r && (r = y(t, !1)),
            r &&
              p.throwError(
                "cannot estimate gas; transaction may fail or may require manual gas limit",
                d.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
                { reason: r.message, method: e, transaction: o, error: t },
              ));
        }
        let n = t.message;
        throw (
          t.code === d.Logger.errors.SERVER_ERROR &&
          t.error &&
          "string" === typeof t.error.message
            ? (n = t.error.message)
            : "string" === typeof t.body
              ? (n = t.body)
              : "string" === typeof t.responseText && (n = t.responseText),
          (n = (n || "").toLowerCase()),
          n.match(
            /insufficient funds|base fee exceeds gas limit|InsufficientFunds/i,
          ) &&
            p.throwError(
              "insufficient funds for intrinsic transaction cost",
              d.Logger.errors.INSUFFICIENT_FUNDS,
              { error: t, method: e, transaction: o },
            ),
          n.match(/nonce (is )?too low/i) &&
            p.throwError(
              "nonce has already been used",
              d.Logger.errors.NONCE_EXPIRED,
              { error: t, method: e, transaction: o },
            ),
          n.match(
            /replacement transaction underpriced|transaction gas price.*too low/i,
          ) &&
            p.throwError(
              "replacement fee too low",
              d.Logger.errors.REPLACEMENT_UNDERPRICED,
              { error: t, method: e, transaction: o },
            ),
          n.match(/only replay-protected/i) &&
            p.throwError(
              "legacy pre-eip-155 transactions not supported",
              d.Logger.errors.UNSUPPORTED_OPERATION,
              { error: t, method: e, transaction: o },
            ),
          m.indexOf(e) >= 0 &&
            n.match(
              /gas required exceeds allowance|always failing transaction|execution reverted|revert/,
            ) &&
            p.throwError(
              "cannot estimate gas; transaction may fail or may require manual gas limit",
              d.Logger.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: t, method: e, transaction: o },
            ),
          t
        );
      }
      function v(e) {
        return new Promise(function (t) {
          setTimeout(t, e);
        });
      }
      function w(e) {
        if (e.error) {
          const t = new Error(e.error.message);
          throw ((t.code = e.error.code), (t.data = e.error.data), t);
        }
        return e.result;
      }
      function k(e) {
        return e ? e.toLowerCase() : e;
      }
      const P = {};
      class JsonRpcSigner extends o.Signer {
        constructor(e, t, r) {
          if ((super(), e !== P))
            throw new Error(
              "do not call the JsonRpcSigner constructor directly; use provider.getSigner",
            );
          ((0, a.defineReadOnly)(this, "provider", t),
            null == r && (r = 0),
            "string" === typeof r
              ? ((0, a.defineReadOnly)(
                  this,
                  "_address",
                  this.provider.formatter.address(r),
                ),
                (0, a.defineReadOnly)(this, "_index", null))
              : "number" === typeof r
                ? ((0, a.defineReadOnly)(this, "_index", r),
                  (0, a.defineReadOnly)(this, "_address", null))
                : p.throwArgumentError(
                    "invalid address or index",
                    "addressOrIndex",
                    r,
                  ));
        }
        connect(e) {
          return p.throwError(
            "cannot alter JSON-RPC Signer connection",
            d.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "connect" },
          );
        }
        connectUnchecked() {
          return new UncheckedJsonRpcSigner(
            P,
            this.provider,
            this._address || this._index,
          );
        }
        getAddress() {
          return this._address
            ? Promise.resolve(this._address)
            : this.provider
                .send("eth_accounts", [])
                .then(
                  (e) => (
                    e.length <= this._index &&
                      p.throwError(
                        "unknown account #" + this._index,
                        d.Logger.errors.UNSUPPORTED_OPERATION,
                        { operation: "getAddress" },
                      ),
                    this.provider.formatter.address(e[this._index])
                  ),
                );
        }
        sendUncheckedTransaction(e) {
          e = (0, a.shallowCopy)(e);
          const t = this.getAddress().then(
            (e) => (e && (e = e.toLowerCase()), e),
          );
          if (null == e.gasLimit) {
            const r = (0, a.shallowCopy)(e);
            ((r.from = t), (e.gasLimit = this.provider.estimateGas(r)));
          }
          return (
            null != e.to &&
              (e.to = Promise.resolve(e.to).then((e) =>
                g(this, void 0, void 0, function* () {
                  if (null == e) return null;
                  const t = yield this.provider.resolveName(e);
                  return (
                    null == t &&
                      p.throwArgumentError(
                        "provided ENS name resolves to null",
                        "tx.to",
                        e,
                      ),
                    t
                  );
                }),
              )),
            (0, a.resolveProperties)({
              tx: (0, a.resolveProperties)(e),
              sender: t,
            }).then((t) => {
              let { tx: r, sender: o } = t;
              null != r.from
                ? r.from.toLowerCase() !== o &&
                  p.throwArgumentError(
                    "from address mismatch",
                    "transaction",
                    e,
                  )
                : (r.from = o);
              const n = this.provider.constructor.hexlifyTransaction(r, {
                from: !0,
              });
              return this.provider.send("eth_sendTransaction", [n]).then(
                (e) => e,
                (e) => (
                  "string" === typeof e.message &&
                    e.message.match(/user denied/i) &&
                    p.throwError(
                      "user rejected transaction",
                      d.Logger.errors.ACTION_REJECTED,
                      { action: "sendTransaction", transaction: r },
                    ),
                  b("sendTransaction", e, n)
                ),
              );
            })
          );
        }
        signTransaction(e) {
          return p.throwError(
            "signing transactions is unsupported",
            d.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "signTransaction" },
          );
        }
        sendTransaction(e) {
          return g(this, void 0, void 0, function* () {
            const t = yield this.provider._getInternalBlockNumber(
                100 + 2 * this.provider.pollingInterval,
              ),
              r = yield this.sendUncheckedTransaction(e);
            try {
              return yield (0, u.poll)(
                () =>
                  g(this, void 0, void 0, function* () {
                    const e = yield this.provider.getTransaction(r);
                    if (null !== e)
                      return this.provider._wrapTransaction(e, r, t);
                  }),
                { oncePoll: this.provider },
              );
            } catch (o) {
              throw ((o.transactionHash = r), o);
            }
          });
        }
        signMessage(e) {
          return g(this, void 0, void 0, function* () {
            const t = "string" === typeof e ? (0, l.toUtf8Bytes)(e) : e,
              r = yield this.getAddress();
            try {
              return yield this.provider.send("personal_sign", [
                (0, i.hexlify)(t),
                r.toLowerCase(),
              ]);
            } catch (o) {
              throw (
                "string" === typeof o.message &&
                  o.message.match(/user denied/i) &&
                  p.throwError(
                    "user rejected signing",
                    d.Logger.errors.ACTION_REJECTED,
                    { action: "signMessage", from: r, messageData: e },
                  ),
                o
              );
            }
          });
        }
        _legacySignMessage(e) {
          return g(this, void 0, void 0, function* () {
            const t = "string" === typeof e ? (0, l.toUtf8Bytes)(e) : e,
              r = yield this.getAddress();
            try {
              return yield this.provider.send("eth_sign", [
                r.toLowerCase(),
                (0, i.hexlify)(t),
              ]);
            } catch (o) {
              throw (
                "string" === typeof o.message &&
                  o.message.match(/user denied/i) &&
                  p.throwError(
                    "user rejected signing",
                    d.Logger.errors.ACTION_REJECTED,
                    { action: "_legacySignMessage", from: r, messageData: e },
                  ),
                o
              );
            }
          });
        }
        _signTypedData(e, t, r) {
          return g(this, void 0, void 0, function* () {
            const o = yield s._TypedDataEncoder.resolveNames(e, t, r, (e) =>
                this.provider.resolveName(e),
              ),
              n = yield this.getAddress();
            try {
              return yield this.provider.send("eth_signTypedData_v4", [
                n.toLowerCase(),
                JSON.stringify(
                  s._TypedDataEncoder.getPayload(o.domain, t, o.value),
                ),
              ]);
            } catch (i) {
              throw (
                "string" === typeof i.message &&
                  i.message.match(/user denied/i) &&
                  p.throwError(
                    "user rejected signing",
                    d.Logger.errors.ACTION_REJECTED,
                    {
                      action: "_signTypedData",
                      from: n,
                      messageData: {
                        domain: o.domain,
                        types: t,
                        value: o.value,
                      },
                    },
                  ),
                i
              );
            }
          });
        }
        unlock(e) {
          return g(this, void 0, void 0, function* () {
            const t = this.provider,
              r = yield this.getAddress();
            return t.send("personal_unlockAccount", [r.toLowerCase(), e, null]);
          });
        }
      }
      t.JsonRpcSigner = JsonRpcSigner;
      class UncheckedJsonRpcSigner extends JsonRpcSigner {
        sendTransaction(e) {
          return this.sendUncheckedTransaction(e).then((e) => ({
            hash: e,
            nonce: null,
            gasLimit: null,
            gasPrice: null,
            data: null,
            value: null,
            chainId: null,
            confirmations: 0,
            from: null,
            wait: (t) => this.provider.waitForTransaction(e, t),
          }));
        }
      }
      const E = {
        chainId: !0,
        data: !0,
        gasLimit: !0,
        gasPrice: !0,
        nonce: !0,
        to: !0,
        value: !0,
        type: !0,
        accessList: !0,
        maxFeePerGas: !0,
        maxPriorityFeePerGas: !0,
      };
      class JsonRpcProvider extends f.BaseProvider {
        constructor(e, t) {
          let r = t;
          (null == r &&
            (r = new Promise((e, t) => {
              setTimeout(() => {
                this.detectNetwork().then(
                  (t) => {
                    e(t);
                  },
                  (e) => {
                    t(e);
                  },
                );
              }, 0);
            })),
            super(r),
            e || (e = (0, a.getStatic)(this.constructor, "defaultUrl")()),
            "string" === typeof e
              ? (0, a.defineReadOnly)(
                  this,
                  "connection",
                  Object.freeze({ url: e }),
                )
              : (0, a.defineReadOnly)(
                  this,
                  "connection",
                  Object.freeze((0, a.shallowCopy)(e)),
                ),
            (this._nextId = 42));
        }
        get _cache() {
          return (
            null == this._eventLoopCache && (this._eventLoopCache = {}),
            this._eventLoopCache
          );
        }
        static defaultUrl() {
          return "http://localhost:8545";
        }
        detectNetwork() {
          return (
            this._cache["detectNetwork"] ||
              ((this._cache["detectNetwork"] = this._uncachedDetectNetwork()),
              setTimeout(() => {
                this._cache["detectNetwork"] = null;
              }, 0)),
            this._cache["detectNetwork"]
          );
        }
        _uncachedDetectNetwork() {
          return g(this, void 0, void 0, function* () {
            yield v(0);
            let e = null;
            try {
              e = yield this.send("eth_chainId", []);
            } catch (t) {
              try {
                e = yield this.send("net_version", []);
              } catch (t) {}
            }
            if (null != e) {
              const r = (0, a.getStatic)(this.constructor, "getNetwork");
              try {
                return r(n.BigNumber.from(e).toNumber());
              } catch (t) {
                return p.throwError(
                  "could not detect network",
                  d.Logger.errors.NETWORK_ERROR,
                  { chainId: e, event: "invalidNetwork", serverError: t },
                );
              }
            }
            return p.throwError(
              "could not detect network",
              d.Logger.errors.NETWORK_ERROR,
              { event: "noNetwork" },
            );
          });
        }
        getSigner(e) {
          return new JsonRpcSigner(P, this, e);
        }
        getUncheckedSigner(e) {
          return this.getSigner(e).connectUnchecked();
        }
        listAccounts() {
          return this.send("eth_accounts", []).then((e) =>
            e.map((e) => this.formatter.address(e)),
          );
        }
        send(e, t) {
          const r = {
            method: e,
            params: t,
            id: this._nextId++,
            jsonrpc: "2.0",
          };
          this.emit("debug", {
            action: "request",
            request: (0, a.deepCopy)(r),
            provider: this,
          });
          const o = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
          if (o && this._cache[e]) return this._cache[e];
          const n = (0, u.fetchJson)(
            this.connection,
            JSON.stringify(r),
            w,
          ).then(
            (e) => (
              this.emit("debug", {
                action: "response",
                request: r,
                response: e,
                provider: this,
              }),
              e
            ),
            (e) => {
              throw (
                this.emit("debug", {
                  action: "response",
                  error: e,
                  request: r,
                  provider: this,
                }),
                e
              );
            },
          );
          return (
            o &&
              ((this._cache[e] = n),
              setTimeout(() => {
                this._cache[e] = null;
              }, 0)),
            n
          );
        }
        prepareRequest(e, t) {
          switch (e) {
            case "getBlockNumber":
              return ["eth_blockNumber", []];
            case "getGasPrice":
              return ["eth_gasPrice", []];
            case "getBalance":
              return ["eth_getBalance", [k(t.address), t.blockTag]];
            case "getTransactionCount":
              return ["eth_getTransactionCount", [k(t.address), t.blockTag]];
            case "getCode":
              return ["eth_getCode", [k(t.address), t.blockTag]];
            case "getStorageAt":
              return [
                "eth_getStorageAt",
                [k(t.address), (0, i.hexZeroPad)(t.position, 32), t.blockTag],
              ];
            case "sendTransaction":
              return ["eth_sendRawTransaction", [t.signedTransaction]];
            case "getBlock":
              return t.blockTag
                ? [
                    "eth_getBlockByNumber",
                    [t.blockTag, !!t.includeTransactions],
                  ]
                : t.blockHash
                  ? [
                      "eth_getBlockByHash",
                      [t.blockHash, !!t.includeTransactions],
                    ]
                  : null;
            case "getTransaction":
              return ["eth_getTransactionByHash", [t.transactionHash]];
            case "getTransactionReceipt":
              return ["eth_getTransactionReceipt", [t.transactionHash]];
            case "call": {
              const e = (0, a.getStatic)(
                this.constructor,
                "hexlifyTransaction",
              );
              return ["eth_call", [e(t.transaction, { from: !0 }), t.blockTag]];
            }
            case "estimateGas": {
              const e = (0, a.getStatic)(
                this.constructor,
                "hexlifyTransaction",
              );
              return ["eth_estimateGas", [e(t.transaction, { from: !0 })]];
            }
            case "getLogs":
              return (
                t.filter &&
                  null != t.filter.address &&
                  (t.filter.address = k(t.filter.address)),
                ["eth_getLogs", [t.filter]]
              );
            default:
              break;
          }
          return null;
        }
        perform(e, t) {
          return g(this, void 0, void 0, function* () {
            if ("call" === e || "estimateGas" === e) {
              const e = t.transaction;
              if (
                e &&
                null != e.type &&
                n.BigNumber.from(e.type).isZero() &&
                null == e.maxFeePerGas &&
                null == e.maxPriorityFeePerGas
              ) {
                const r = yield this.getFeeData();
                null == r.maxFeePerGas &&
                  null == r.maxPriorityFeePerGas &&
                  ((t = (0, a.shallowCopy)(t)),
                  (t.transaction = (0, a.shallowCopy)(e)),
                  delete t.transaction.type);
              }
            }
            const r = this.prepareRequest(e, t);
            null == r &&
              p.throwError(
                e + " not implemented",
                d.Logger.errors.NOT_IMPLEMENTED,
                { operation: e },
              );
            try {
              return yield this.send(r[0], r[1]);
            } catch (o) {
              return b(e, o, t);
            }
          });
        }
        _startEvent(e) {
          ("pending" === e.tag && this._startPending(), super._startEvent(e));
        }
        _startPending() {
          if (null != this._pendingFilter) return;
          const e = this,
            t = this.send("eth_newPendingTransactionFilter", []);
          ((this._pendingFilter = t),
            t
              .then(function (r) {
                function o() {
                  e.send("eth_getFilterChanges", [r])
                    .then(function (r) {
                      if (e._pendingFilter != t) return null;
                      let o = Promise.resolve();
                      return (
                        r.forEach(function (t) {
                          ((e._emitted["t:" + t.toLowerCase()] = "pending"),
                            (o = o.then(function () {
                              return e.getTransaction(t).then(function (t) {
                                return (e.emit("pending", t), null);
                              });
                            })));
                        }),
                        o.then(function () {
                          return v(1e3);
                        })
                      );
                    })
                    .then(function () {
                      if (e._pendingFilter == t)
                        return (
                          setTimeout(function () {
                            o();
                          }, 0),
                          null
                        );
                      e.send("eth_uninstallFilter", [r]);
                    })
                    .catch((e) => {});
                }
                return (o(), r);
              })
              .catch((e) => {}));
        }
        _stopEvent(e) {
          ("pending" === e.tag &&
            0 === this.listenerCount("pending") &&
            (this._pendingFilter = null),
            super._stopEvent(e));
        }
        static hexlifyTransaction(e, t) {
          const r = (0, a.shallowCopy)(E);
          if (t) for (const n in t) t[n] && (r[n] = !0);
          (0, a.checkProperties)(e, r);
          const o = {};
          return (
            [
              "chainId",
              "gasLimit",
              "gasPrice",
              "type",
              "maxFeePerGas",
              "maxPriorityFeePerGas",
              "nonce",
              "value",
            ].forEach(function (t) {
              if (null == e[t]) return;
              const r = (0, i.hexValue)(n.BigNumber.from(e[t]));
              ("gasLimit" === t && (t = "gas"), (o[t] = r));
            }),
            ["from", "to", "data"].forEach(function (t) {
              null != e[t] && (o[t] = (0, i.hexlify)(e[t]));
            }),
            e.accessList &&
              (o["accessList"] = (0, c.accessListify)(e.accessList)),
            o
          );
        }
      }
      t.JsonRpcProvider = JsonRpcProvider;
    },
    4875: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "randomBytes", {
          enumerable: !0,
          get: function () {
            return o.randomBytes;
          },
        }),
        Object.defineProperty(t, "shuffled", {
          enumerable: !0,
          get: function () {
            return n.shuffled;
          },
        }));
      var o = r(11413),
        n = r(11415);
    },
    4876: function (e, t, r) {
      "use strict";
      var o = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Resolver = t.Event = t.BaseProvider = void 0));
      var n = r(4590),
        i = r(4624),
        s = r(5713),
        a = r(2829),
        l = r(2776),
        c = r(3272),
        u = r(3274),
        d = r(6923),
        h = r(2808),
        f = r(4591),
        g = r(3016),
        p = r(3971),
        m = o(r(803)),
        y = r(2773),
        b = r(3073),
        v = r(3850),
        w = function (e, t, r, o) {
          function n(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, i) {
            function s(e) {
              try {
                l(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function l(e) {
              e.done ? r(e.value) : n(e.value).then(s, a);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const k = new y.Logger(b.version),
        P = 10;
      function E(e) {
        return null == e
          ? "null"
          : (32 !== (0, l.hexDataLength)(e) &&
              k.throwArgumentError("invalid topic", "topic", e),
            e.toLowerCase());
      }
      function _(e) {
        e = e.slice();
        while (e.length > 0 && null == e[e.length - 1]) e.pop();
        return e
          .map((e) => {
            if (Array.isArray(e)) {
              const t = {};
              e.forEach((e) => {
                t[E(e)] = !0;
              });
              const r = Object.keys(t);
              return (r.sort(), r.join("|"));
            }
            return E(e);
          })
          .join("&");
      }
      function S(e) {
        return "" === e
          ? []
          : e.split(/&/g).map((e) => {
              if ("" === e) return [];
              const t = e.split("|").map((e) => ("null" === e ? null : e));
              return 1 === t.length ? t[0] : t;
            });
      }
      function R(e) {
        if ("string" === typeof e) {
          if (((e = e.toLowerCase()), 32 === (0, l.hexDataLength)(e)))
            return "tx:" + e;
          if (-1 === e.indexOf(":")) return e;
        } else {
          if (Array.isArray(e)) return "filter:*:" + _(e);
          if (n.ForkEvent.isForkEvent(e))
            throw (k.warn("not implemented"), new Error("not implemented"));
          if (e && "object" === typeof e)
            return "filter:" + (e.address || "*") + ":" + _(e.topics || []);
        }
        throw new Error("invalid event - " + e);
      }
      function A() {
        return new Date().getTime();
      }
      function N(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      const T = ["block", "network", "pending", "poll"];
      class Event {
        constructor(e, t, r) {
          ((0, h.defineReadOnly)(this, "tag", e),
            (0, h.defineReadOnly)(this, "listener", t),
            (0, h.defineReadOnly)(this, "once", r),
            (this._lastBlockNumber = -2),
            (this._inflight = !1));
        }
        get event() {
          switch (this.type) {
            case "tx":
              return this.hash;
            case "filter":
              return this.filter;
          }
          return this.tag;
        }
        get type() {
          return this.tag.split(":")[0];
        }
        get hash() {
          const e = this.tag.split(":");
          return "tx" !== e[0] ? null : e[1];
        }
        get filter() {
          const e = this.tag.split(":");
          if ("filter" !== e[0]) return null;
          const t = e[1],
            r = S(e[2]),
            o = {};
          return (
            r.length > 0 && (o.topics = r),
            t && "*" !== t && (o.address = t),
            o
          );
        }
        pollable() {
          return this.tag.indexOf(":") >= 0 || T.indexOf(this.tag) >= 0;
        }
      }
      t.Event = Event;
      const C = {
        0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
        2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
        3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
        60: { symbol: "eth", ilk: "eth" },
        61: { symbol: "etc", ilk: "eth" },
        700: { symbol: "xdai", ilk: "eth" },
      };
      function O(e) {
        return (0, l.hexZeroPad)(a.BigNumber.from(e).toHexString(), 32);
      }
      function x(e) {
        return s.Base58.encode(
          (0, l.concat)([
            e,
            (0, l.hexDataSlice)((0, f.sha256)((0, f.sha256)(e)), 0, 4),
          ]),
        );
      }
      const L = new RegExp("^(ipfs)://(.*)$", "i"),
        B = [
          new RegExp("^(https)://(.*)$", "i"),
          new RegExp("^(data):(.*)$", "i"),
          L,
          new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
        ];
      function I(e, t) {
        try {
          return (0, g.toUtf8String)(F(e, t));
        } catch (r) {}
        return null;
      }
      function F(e, t) {
        if ("0x" === e) return null;
        const r = a.BigNumber.from(
            (0, l.hexDataSlice)(e, t, t + 32),
          ).toNumber(),
          o = a.BigNumber.from((0, l.hexDataSlice)(e, r, r + 32)).toNumber();
        return (0, l.hexDataSlice)(e, r + 32, r + 32 + o);
      }
      function D(e) {
        return (
          e.match(/^ipfs:\/\/ipfs\//i)
            ? (e = e.substring(12))
            : e.match(/^ipfs:\/\//i)
              ? (e = e.substring(7))
              : k.throwArgumentError("unsupported IPFS format", "link", e),
          "https://gateway.ipfs.io/ipfs/" + e
        );
      }
      function M(e) {
        const t = (0, l.arrayify)(e);
        if (t.length > 32) throw new Error("internal; should not happen");
        const r = new Uint8Array(32);
        return (r.set(t, 32 - t.length), r);
      }
      function j(e) {
        if (e.length % 32 === 0) return e;
        const t = new Uint8Array(32 * Math.ceil(e.length / 32));
        return (t.set(e), t);
      }
      function U(e) {
        const t = [];
        let r = 0;
        for (let o = 0; o < e.length; o++) (t.push(null), (r += 32));
        for (let o = 0; o < e.length; o++) {
          const n = (0, l.arrayify)(e[o]);
          ((t[o] = M(r)),
            t.push(M(n.length)),
            t.push(j(n)),
            (r += 32 + 32 * Math.ceil(n.length / 32)));
        }
        return (0, l.hexConcat)(t);
      }
      class Resolver {
        constructor(e, t, r, o) {
          ((0, h.defineReadOnly)(this, "provider", e),
            (0, h.defineReadOnly)(this, "name", r),
            (0, h.defineReadOnly)(this, "address", e.formatter.address(t)),
            (0, h.defineReadOnly)(this, "_resolvedAddress", o));
        }
        supportsWildcard() {
          return (
            this._supportsEip2544 ||
              (this._supportsEip2544 = this.provider
                .call({
                  to: this.address,
                  data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000",
                })
                .then((e) => a.BigNumber.from(e).eq(1))
                .catch((e) => {
                  if (e.code === y.Logger.errors.CALL_EXCEPTION) return !1;
                  throw ((this._supportsEip2544 = null), e);
                })),
            this._supportsEip2544
          );
        }
        _fetch(e, t) {
          return w(this, void 0, void 0, function* () {
            const r = {
              to: this.address,
              ccipReadEnabled: !0,
              data: (0, l.hexConcat)([
                e,
                (0, u.namehash)(this.name),
                t || "0x",
              ]),
            };
            let o = !1;
            (yield this.supportsWildcard()) &&
              ((o = !0),
              (r.data = (0, l.hexConcat)([
                "0x9061b923",
                U([(0, u.dnsEncode)(this.name), r.data]),
              ])));
            try {
              let e = yield this.provider.call(r);
              return (
                (0, l.arrayify)(e).length % 32 === 4 &&
                  k.throwError(
                    "resolver threw error",
                    y.Logger.errors.CALL_EXCEPTION,
                    { transaction: r, data: e },
                  ),
                o && (e = F(e, 0)),
                e
              );
            } catch (n) {
              if (n.code === y.Logger.errors.CALL_EXCEPTION) return null;
              throw n;
            }
          });
        }
        _fetchBytes(e, t) {
          return w(this, void 0, void 0, function* () {
            const r = yield this._fetch(e, t);
            return null != r ? F(r, 0) : null;
          });
        }
        _getAddress(e, t) {
          const r = C[String(e)];
          if (
            (null == r &&
              k.throwError(
                "unsupported coin type: " + e,
                y.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: `getAddress(${e})` },
              ),
            "eth" === r.ilk)
          )
            return this.provider.formatter.address(t);
          const o = (0, l.arrayify)(t);
          if (null != r.p2pkh) {
            const e = t.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
            if (e) {
              const t = parseInt(e[1], 16);
              if (e[2].length === 2 * t && t >= 1 && t <= 75)
                return x((0, l.concat)([[r.p2pkh], "0x" + e[2]]));
            }
          }
          if (null != r.p2sh) {
            const e = t.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
            if (e) {
              const t = parseInt(e[1], 16);
              if (e[2].length === 2 * t && t >= 1 && t <= 75)
                return x((0, l.concat)([[r.p2sh], "0x" + e[2]]));
            }
          }
          if (null != r.prefix) {
            const e = o[1];
            let t = o[0];
            if (
              (0 === t ? 20 !== e && 32 !== e && (t = -1) : (t = -1),
              t >= 0 && o.length === 2 + e && e >= 1 && e <= 75)
            ) {
              const e = m.default.toWords(o.slice(2));
              return (e.unshift(t), m.default.encode(r.prefix, e));
            }
          }
          return null;
        }
        getAddress(e) {
          return w(this, void 0, void 0, function* () {
            if ((null == e && (e = 60), 60 === e))
              try {
                const e = yield this._fetch("0x3b3b57de");
                return "0x" === e || e === c.HashZero
                  ? null
                  : this.provider.formatter.callAddress(e);
              } catch (o) {
                if (o.code === y.Logger.errors.CALL_EXCEPTION) return null;
                throw o;
              }
            const t = yield this._fetchBytes("0xf1cb7e06", O(e));
            if (null == t || "0x" === t) return null;
            const r = this._getAddress(e, t);
            return (
              null == r &&
                k.throwError(
                  "invalid or unsupported coin data",
                  y.Logger.errors.UNSUPPORTED_OPERATION,
                  { operation: `getAddress(${e})`, coinType: e, data: t },
                ),
              r
            );
          });
        }
        getAvatar() {
          return w(this, void 0, void 0, function* () {
            const e = [{ type: "name", content: this.name }];
            try {
              const t = yield this.getText("avatar");
              if (null == t) return null;
              for (let r = 0; r < B.length; r++) {
                const o = t.match(B[r]);
                if (null == o) continue;
                const n = o[1].toLowerCase();
                switch (n) {
                  case "https":
                    return (
                      e.push({ type: "url", content: t }),
                      { linkage: e, url: t }
                    );
                  case "data":
                    return (
                      e.push({ type: "data", content: t }),
                      { linkage: e, url: t }
                    );
                  case "ipfs":
                    return (
                      e.push({ type: "ipfs", content: t }),
                      { linkage: e, url: D(t) }
                    );
                  case "erc721":
                  case "erc1155": {
                    const r = "erc721" === n ? "0xc87b56dd" : "0x0e89341c";
                    e.push({ type: n, content: t });
                    const i =
                        this._resolvedAddress || (yield this.getAddress()),
                      s = (o[2] || "").split("/");
                    if (2 !== s.length) return null;
                    const c = yield this.provider.formatter.address(s[0]),
                      u = (0, l.hexZeroPad)(
                        a.BigNumber.from(s[1]).toHexString(),
                        32,
                      );
                    if ("erc721" === n) {
                      const t = this.provider.formatter.callAddress(
                        yield this.provider.call({
                          to: c,
                          data: (0, l.hexConcat)(["0x6352211e", u]),
                        }),
                      );
                      if (i !== t) return null;
                      e.push({ type: "owner", content: t });
                    } else if ("erc1155" === n) {
                      const t = a.BigNumber.from(
                        yield this.provider.call({
                          to: c,
                          data: (0, l.hexConcat)([
                            "0x00fdd58e",
                            (0, l.hexZeroPad)(i, 32),
                            u,
                          ]),
                        }),
                      );
                      if (t.isZero()) return null;
                      e.push({ type: "balance", content: t.toString() });
                    }
                    const d = {
                      to: this.provider.formatter.address(s[0]),
                      data: (0, l.hexConcat)([r, u]),
                    };
                    let h = I(yield this.provider.call(d), 0);
                    if (null == h) return null;
                    (e.push({ type: "metadata-url-base", content: h }),
                      "erc1155" === n &&
                        ((h = h.replace("{id}", u.substring(2))),
                        e.push({ type: "metadata-url-expanded", content: h })),
                      h.match(/^ipfs:/i) && (h = D(h)),
                      e.push({ type: "metadata-url", content: h }));
                    const f = yield (0, p.fetchJson)(h);
                    if (!f) return null;
                    e.push({ type: "metadata", content: JSON.stringify(f) });
                    let g = f.image;
                    if ("string" !== typeof g) return null;
                    if (g.match(/^(https:\/\/|data:)/i));
                    else {
                      const t = g.match(L);
                      if (null == t) return null;
                      (e.push({ type: "url-ipfs", content: g }), (g = D(g)));
                    }
                    return (
                      e.push({ type: "url", content: g }),
                      { linkage: e, url: g }
                    );
                  }
                }
              }
            } catch (t) {}
            return null;
          });
        }
        getContentHash() {
          return w(this, void 0, void 0, function* () {
            const e = yield this._fetchBytes("0xbc1c58d1");
            if (null == e || "0x" === e) return null;
            const t = e.match(
              /^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/,
            );
            if (t) {
              const e = parseInt(t[3], 16);
              if (t[4].length === 2 * e)
                return "ipfs://" + s.Base58.encode("0x" + t[1]);
            }
            const r = e.match(
              /^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/,
            );
            if (r) {
              const e = parseInt(r[3], 16);
              if (r[4].length === 2 * e)
                return "ipns://" + s.Base58.encode("0x" + r[1]);
            }
            const o = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            if (o && 64 === o[1].length) return "bzz://" + o[1];
            const n = e.match(/^0x90b2c605([0-9a-f]*)$/);
            if (n && 68 === n[1].length) {
              const e = { "=": "", "+": "-", "/": "_" },
                t = (0, i.encode)("0x" + n[1]).replace(/[=+\/]/g, (t) => e[t]);
              return "sia://" + t;
            }
            return k.throwError(
              "invalid or unsupported content hash data",
              y.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "getContentHash()", data: e },
            );
          });
        }
        getText(e) {
          return w(this, void 0, void 0, function* () {
            let t = (0, g.toUtf8Bytes)(e);
            ((t = (0, l.concat)([O(64), O(t.length), t])),
              t.length % 32 !== 0 &&
                (t = (0, l.concat)([
                  t,
                  (0, l.hexZeroPad)("0x", 32 - (e.length % 32)),
                ])));
            const r = yield this._fetchBytes("0x59d1d43c", (0, l.hexlify)(t));
            return null == r || "0x" === r ? null : (0, g.toUtf8String)(r);
          });
        }
      }
      t.Resolver = Resolver;
      let W = null,
        H = 1;
      class BaseProvider extends n.Provider {
        constructor(e) {
          if (
            (super(),
            (this._events = []),
            (this._emitted = { block: -2 }),
            (this.disableCcipRead = !1),
            (this.formatter = new.target.getFormatter()),
            (0, h.defineReadOnly)(this, "anyNetwork", "any" === e),
            this.anyNetwork && (e = this.detectNetwork()),
            e instanceof Promise)
          )
            ((this._networkPromise = e),
              e.catch((e) => {}),
              this._ready().catch((e) => {}));
          else {
            const t = (0, h.getStatic)(new.target, "getNetwork")(e);
            t
              ? ((0, h.defineReadOnly)(this, "_network", t),
                this.emit("network", t, null))
              : k.throwArgumentError("invalid network", "network", e);
          }
          ((this._maxInternalBlockNumber = -1024),
            (this._lastBlockNumber = -2),
            (this._maxFilterBlockRange = 10),
            (this._pollingInterval = 4e3),
            (this._fastQueryDate = 0));
        }
        _ready() {
          return w(this, void 0, void 0, function* () {
            if (null == this._network) {
              let t = null;
              if (this._networkPromise)
                try {
                  t = yield this._networkPromise;
                } catch (e) {}
              (null == t && (t = yield this.detectNetwork()),
                t ||
                  k.throwError(
                    "no network detected",
                    y.Logger.errors.UNKNOWN_ERROR,
                    {},
                  ),
                null == this._network &&
                  (this.anyNetwork
                    ? (this._network = t)
                    : (0, h.defineReadOnly)(this, "_network", t),
                  this.emit("network", t, null)));
            }
            return this._network;
          });
        }
        get ready() {
          return (0, p.poll)(() =>
            this._ready().then(
              (e) => e,
              (e) => {
                if (
                  e.code !== y.Logger.errors.NETWORK_ERROR ||
                  "noNetwork" !== e.event
                )
                  throw e;
              },
            ),
          );
        }
        static getFormatter() {
          return (null == W && (W = new v.Formatter()), W);
        }
        static getNetwork(e) {
          return (0, d.getNetwork)(null == e ? "homestead" : e);
        }
        ccipReadFetch(e, t, r) {
          return w(this, void 0, void 0, function* () {
            if (this.disableCcipRead || 0 === r.length) return null;
            const o = e.to.toLowerCase(),
              n = t.toLowerCase(),
              i = [];
            for (let e = 0; e < r.length; e++) {
              const t = r[e],
                s = t.replace("{sender}", o).replace("{data}", n),
                a =
                  t.indexOf("{data}") >= 0
                    ? null
                    : JSON.stringify({ data: n, sender: o }),
                l = yield (0, p.fetchJson)(
                  { url: s, errorPassThrough: !0 },
                  a,
                  (e, t) => ((e.status = t.statusCode), e),
                );
              if (l.data) return l.data;
              const c = l.message || "unknown error";
              if (l.status >= 400 && l.status < 500)
                return k.throwError(
                  "response not found during CCIP fetch: " + c,
                  y.Logger.errors.SERVER_ERROR,
                  { url: t, errorMessage: c },
                );
              i.push(c);
            }
            return k.throwError(
              "error encountered during CCIP fetch: " +
                i.map((e) => JSON.stringify(e)).join(", "),
              y.Logger.errors.SERVER_ERROR,
              { urls: r, errorMessages: i },
            );
          });
        }
        _getInternalBlockNumber(e) {
          return w(this, void 0, void 0, function* () {
            if ((yield this._ready(), e > 0))
              while (this._internalBlockNumber) {
                const t = this._internalBlockNumber;
                try {
                  const r = yield t;
                  if (A() - r.respTime <= e) return r.blockNumber;
                  break;
                } catch (o) {
                  if (this._internalBlockNumber === t) break;
                }
              }
            const t = A(),
              r = (0, h.resolveProperties)({
                blockNumber: this.perform("getBlockNumber", {}),
                networkError: this.getNetwork().then(
                  (e) => null,
                  (e) => e,
                ),
              }).then((e) => {
                let { blockNumber: o, networkError: n } = e;
                if (n)
                  throw (
                    this._internalBlockNumber === r &&
                      (this._internalBlockNumber = null),
                    n
                  );
                const i = A();
                return (
                  (o = a.BigNumber.from(o).toNumber()),
                  o < this._maxInternalBlockNumber &&
                    (o = this._maxInternalBlockNumber),
                  (this._maxInternalBlockNumber = o),
                  this._setFastBlockNumber(o),
                  { blockNumber: o, reqTime: t, respTime: i }
                );
              });
            return (
              (this._internalBlockNumber = r),
              r.catch((e) => {
                this._internalBlockNumber === r &&
                  (this._internalBlockNumber = null);
              }),
              (yield r).blockNumber
            );
          });
        }
        poll() {
          return w(this, void 0, void 0, function* () {
            const e = H++,
              t = [];
            let r = null;
            try {
              r = yield this._getInternalBlockNumber(
                100 + this.pollingInterval / 2,
              );
            } catch (o) {
              return void this.emit("error", o);
            }
            if (
              (this._setFastBlockNumber(r),
              this.emit("poll", e, r),
              r !== this._lastBlockNumber)
            ) {
              if (
                (-2 === this._emitted.block && (this._emitted.block = r - 1),
                Math.abs(this._emitted.block - r) > 1e3)
              )
                (k.warn(
                  `network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${r})`,
                ),
                  this.emit(
                    "error",
                    k.makeError(
                      "network block skew detected",
                      y.Logger.errors.NETWORK_ERROR,
                      {
                        blockNumber: r,
                        event: "blockSkew",
                        previousBlockNumber: this._emitted.block,
                      },
                    ),
                  ),
                  this.emit("block", r));
              else
                for (let e = this._emitted.block + 1; e <= r; e++)
                  this.emit("block", e);
              (this._emitted.block !== r &&
                ((this._emitted.block = r),
                Object.keys(this._emitted).forEach((e) => {
                  if ("block" === e) return;
                  const t = this._emitted[e];
                  "pending" !== t && r - t > 12 && delete this._emitted[e];
                })),
                -2 === this._lastBlockNumber && (this._lastBlockNumber = r - 1),
                this._events.forEach((e) => {
                  switch (e.type) {
                    case "tx": {
                      const r = e.hash;
                      let o = this.getTransactionReceipt(r)
                        .then((e) =>
                          e && null != e.blockNumber
                            ? ((this._emitted["t:" + r] = e.blockNumber),
                              this.emit(r, e),
                              null)
                            : null,
                        )
                        .catch((e) => {
                          this.emit("error", e);
                        });
                      t.push(o);
                      break;
                    }
                    case "filter":
                      if (!e._inflight) {
                        ((e._inflight = !0),
                          -2 === e._lastBlockNumber &&
                            (e._lastBlockNumber = r - 1));
                        const o = e.filter;
                        ((o.fromBlock = e._lastBlockNumber + 1),
                          (o.toBlock = r));
                        const n = o.toBlock - this._maxFilterBlockRange;
                        (n > o.fromBlock && (o.fromBlock = n),
                          o.fromBlock < 0 && (o.fromBlock = 0));
                        const i = this.getLogs(o)
                          .then((t) => {
                            ((e._inflight = !1),
                              0 !== t.length &&
                                t.forEach((t) => {
                                  (t.blockNumber > e._lastBlockNumber &&
                                    (e._lastBlockNumber = t.blockNumber),
                                    (this._emitted["b:" + t.blockHash] =
                                      t.blockNumber),
                                    (this._emitted["t:" + t.transactionHash] =
                                      t.blockNumber),
                                    this.emit(o, t));
                                }));
                          })
                          .catch((t) => {
                            (this.emit("error", t), (e._inflight = !1));
                          });
                        t.push(i);
                      }
                      break;
                  }
                }),
                (this._lastBlockNumber = r),
                Promise.all(t)
                  .then(() => {
                    this.emit("didPoll", e);
                  })
                  .catch((e) => {
                    this.emit("error", e);
                  }));
            } else this.emit("didPoll", e);
          });
        }
        resetEventsBlock(e) {
          ((this._lastBlockNumber = e - 1), this.polling && this.poll());
        }
        get network() {
          return this._network;
        }
        detectNetwork() {
          return w(this, void 0, void 0, function* () {
            return k.throwError(
              "provider does not support network detection",
              y.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "provider.detectNetwork" },
            );
          });
        }
        getNetwork() {
          return w(this, void 0, void 0, function* () {
            const e = yield this._ready(),
              t = yield this.detectNetwork();
            if (e.chainId !== t.chainId) {
              if (this.anyNetwork)
                return (
                  (this._network = t),
                  (this._lastBlockNumber = -2),
                  (this._fastBlockNumber = null),
                  (this._fastBlockNumberPromise = null),
                  (this._fastQueryDate = 0),
                  (this._emitted.block = -2),
                  (this._maxInternalBlockNumber = -1024),
                  (this._internalBlockNumber = null),
                  this.emit("network", t, e),
                  yield N(0),
                  this._network
                );
              const r = k.makeError(
                "underlying network changed",
                y.Logger.errors.NETWORK_ERROR,
                { event: "changed", network: e, detectedNetwork: t },
              );
              throw (this.emit("error", r), r);
            }
            return e;
          });
        }
        get blockNumber() {
          return (
            this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
              (e) => {
                this._setFastBlockNumber(e);
              },
              (e) => {},
            ),
            null != this._fastBlockNumber ? this._fastBlockNumber : -1
          );
        }
        get polling() {
          return null != this._poller;
        }
        set polling(e) {
          e && !this._poller
            ? ((this._poller = setInterval(() => {
                this.poll();
              }, this.pollingInterval)),
              this._bootstrapPoll ||
                (this._bootstrapPoll = setTimeout(() => {
                  (this.poll(),
                    (this._bootstrapPoll = setTimeout(() => {
                      (this._poller || this.poll(),
                        (this._bootstrapPoll = null));
                    }, this.pollingInterval)));
                }, 0)))
            : !e &&
              this._poller &&
              (clearInterval(this._poller), (this._poller = null));
        }
        get pollingInterval() {
          return this._pollingInterval;
        }
        set pollingInterval(e) {
          if ("number" !== typeof e || e <= 0 || parseInt(String(e)) != e)
            throw new Error("invalid polling interval");
          ((this._pollingInterval = e),
            this._poller &&
              (clearInterval(this._poller),
              (this._poller = setInterval(() => {
                this.poll();
              }, this._pollingInterval))));
        }
        _getFastBlockNumber() {
          const e = A();
          return (
            e - this._fastQueryDate > 2 * this._pollingInterval &&
              ((this._fastQueryDate = e),
              (this._fastBlockNumberPromise = this.getBlockNumber().then(
                (e) => (
                  (null == this._fastBlockNumber ||
                    e > this._fastBlockNumber) &&
                    (this._fastBlockNumber = e),
                  this._fastBlockNumber
                ),
              ))),
            this._fastBlockNumberPromise
          );
        }
        _setFastBlockNumber(e) {
          (null != this._fastBlockNumber && e < this._fastBlockNumber) ||
            ((this._fastQueryDate = A()),
            (null == this._fastBlockNumber || e > this._fastBlockNumber) &&
              ((this._fastBlockNumber = e),
              (this._fastBlockNumberPromise = Promise.resolve(e))));
        }
        waitForTransaction(e, t, r) {
          return w(this, void 0, void 0, function* () {
            return this._waitForTransaction(e, null == t ? 1 : t, r || 0, null);
          });
        }
        _waitForTransaction(e, t, r, o) {
          return w(this, void 0, void 0, function* () {
            const n = yield this.getTransactionReceipt(e);
            return (n ? n.confirmations : 0) >= t
              ? n
              : new Promise((n, i) => {
                  const s = [];
                  let a = !1;
                  const l = function () {
                      return (
                        !!a ||
                        ((a = !0),
                        s.forEach((e) => {
                          e();
                        }),
                        !1)
                      );
                    },
                    c = (e) => {
                      e.confirmations < t || l() || n(e);
                    };
                  if (
                    (this.on(e, c),
                    s.push(() => {
                      this.removeListener(e, c);
                    }),
                    o)
                  ) {
                    let r = o.startBlock,
                      n = null;
                    const c = (s) =>
                      w(this, void 0, void 0, function* () {
                        a ||
                          (yield N(1e3),
                          this.getTransactionCount(o.from).then(
                            (u) =>
                              w(this, void 0, void 0, function* () {
                                if (!a) {
                                  if (u <= o.nonce) r = s;
                                  else {
                                    {
                                      const t = yield this.getTransaction(e);
                                      if (t && null != t.blockNumber) return;
                                    }
                                    null == n &&
                                      ((n = r - 3),
                                      n < o.startBlock && (n = o.startBlock));
                                    while (n <= s) {
                                      if (a) return;
                                      const r =
                                        yield this.getBlockWithTransactions(n);
                                      for (
                                        let n = 0;
                                        n < r.transactions.length;
                                        n++
                                      ) {
                                        const s = r.transactions[n];
                                        if (s.hash === e) return;
                                        if (
                                          s.from === o.from &&
                                          s.nonce === o.nonce
                                        ) {
                                          if (a) return;
                                          const r =
                                            yield this.waitForTransaction(
                                              s.hash,
                                              t,
                                            );
                                          if (l()) return;
                                          let n = "replaced";
                                          return (
                                            s.data === o.data &&
                                            s.to === o.to &&
                                            s.value.eq(o.value)
                                              ? (n = "repriced")
                                              : "0x" === s.data &&
                                                s.from === s.to &&
                                                s.value.isZero() &&
                                                (n = "cancelled"),
                                            void i(
                                              k.makeError(
                                                "transaction was replaced",
                                                y.Logger.errors
                                                  .TRANSACTION_REPLACED,
                                                {
                                                  cancelled:
                                                    "replaced" === n ||
                                                    "cancelled" === n,
                                                  reason: n,
                                                  replacement:
                                                    this._wrapTransaction(s),
                                                  hash: e,
                                                  receipt: r,
                                                },
                                              ),
                                            )
                                          );
                                        }
                                      }
                                      n++;
                                    }
                                  }
                                  a || this.once("block", c);
                                }
                              }),
                            (e) => {
                              a || this.once("block", c);
                            },
                          ));
                      });
                    if (a) return;
                    (this.once("block", c),
                      s.push(() => {
                        this.removeListener("block", c);
                      }));
                  }
                  if ("number" === typeof r && r > 0) {
                    const e = setTimeout(() => {
                      l() ||
                        i(
                          k.makeError(
                            "timeout exceeded",
                            y.Logger.errors.TIMEOUT,
                            { timeout: r },
                          ),
                        );
                    }, r);
                    (e.unref && e.unref(),
                      s.push(() => {
                        clearTimeout(e);
                      }));
                  }
                });
          });
        }
        getBlockNumber() {
          return w(this, void 0, void 0, function* () {
            return this._getInternalBlockNumber(0);
          });
        }
        getGasPrice() {
          return w(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const e = yield this.perform("getGasPrice", {});
            try {
              return a.BigNumber.from(e);
            } catch (t) {
              return k.throwError(
                "bad result from backend",
                y.Logger.errors.SERVER_ERROR,
                { method: "getGasPrice", result: e, error: t },
              );
            }
          });
        }
        getBalance(e, t) {
          return w(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield (0, h.resolveProperties)({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(t),
              }),
              o = yield this.perform("getBalance", r);
            try {
              return a.BigNumber.from(o);
            } catch (n) {
              return k.throwError(
                "bad result from backend",
                y.Logger.errors.SERVER_ERROR,
                { method: "getBalance", params: r, result: o, error: n },
              );
            }
          });
        }
        getTransactionCount(e, t) {
          return w(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield (0, h.resolveProperties)({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(t),
              }),
              o = yield this.perform("getTransactionCount", r);
            try {
              return a.BigNumber.from(o).toNumber();
            } catch (n) {
              return k.throwError(
                "bad result from backend",
                y.Logger.errors.SERVER_ERROR,
                {
                  method: "getTransactionCount",
                  params: r,
                  result: o,
                  error: n,
                },
              );
            }
          });
        }
        getCode(e, t) {
          return w(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield (0, h.resolveProperties)({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(t),
              }),
              o = yield this.perform("getCode", r);
            try {
              return (0, l.hexlify)(o);
            } catch (n) {
              return k.throwError(
                "bad result from backend",
                y.Logger.errors.SERVER_ERROR,
                { method: "getCode", params: r, result: o, error: n },
              );
            }
          });
        }
        getStorageAt(e, t, r) {
          return w(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const o = yield (0, h.resolveProperties)({
                address: this._getAddress(e),
                blockTag: this._getBlockTag(r),
                position: Promise.resolve(t).then((e) => (0, l.hexValue)(e)),
              }),
              n = yield this.perform("getStorageAt", o);
            try {
              return (0, l.hexlify)(n);
            } catch (i) {
              return k.throwError(
                "bad result from backend",
                y.Logger.errors.SERVER_ERROR,
                { method: "getStorageAt", params: o, result: n, error: i },
              );
            }
          });
        }
        _wrapTransaction(e, t, r) {
          if (null != t && 32 !== (0, l.hexDataLength)(t))
            throw new Error("invalid response - sendTransaction");
          const o = e;
          return (
            null != t &&
              e.hash !== t &&
              k.throwError(
                "Transaction hash mismatch from Provider.sendTransaction.",
                y.Logger.errors.UNKNOWN_ERROR,
                { expectedHash: e.hash, returnedHash: t },
              ),
            (o.wait = (t, o) =>
              w(this, void 0, void 0, function* () {
                (null == t && (t = 1), null == o && (o = 0));
                let n = void 0;
                0 !== t &&
                  null != r &&
                  (n = {
                    data: e.data,
                    from: e.from,
                    nonce: e.nonce,
                    to: e.to,
                    value: e.value,
                    startBlock: r,
                  });
                const i = yield this._waitForTransaction(e.hash, t, o, n);
                return null == i && 0 === t
                  ? null
                  : ((this._emitted["t:" + e.hash] = i.blockNumber),
                    0 === i.status &&
                      k.throwError(
                        "transaction failed",
                        y.Logger.errors.CALL_EXCEPTION,
                        { transactionHash: e.hash, transaction: e, receipt: i },
                      ),
                    i);
              })),
            o
          );
        }
        sendTransaction(e) {
          return w(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield Promise.resolve(e).then((e) => (0, l.hexlify)(e)),
              r = this.formatter.transaction(e);
            null == r.confirmations && (r.confirmations = 0);
            const o = yield this._getInternalBlockNumber(
              100 + 2 * this.pollingInterval,
            );
            try {
              const e = yield this.perform("sendTransaction", {
                signedTransaction: t,
              });
              return this._wrapTransaction(r, e, o);
            } catch (n) {
              throw ((n.transaction = r), (n.transactionHash = r.hash), n);
            }
          });
        }
        _getTransactionRequest(e) {
          return w(this, void 0, void 0, function* () {
            const t = yield e,
              r = {};
            return (
              ["from", "to"].forEach((e) => {
                null != t[e] &&
                  (r[e] = Promise.resolve(t[e]).then((e) =>
                    e ? this._getAddress(e) : null,
                  ));
              }),
              [
                "gasLimit",
                "gasPrice",
                "maxFeePerGas",
                "maxPriorityFeePerGas",
                "value",
              ].forEach((e) => {
                null != t[e] &&
                  (r[e] = Promise.resolve(t[e]).then((e) =>
                    e ? a.BigNumber.from(e) : null,
                  ));
              }),
              ["type"].forEach((e) => {
                null != t[e] &&
                  (r[e] = Promise.resolve(t[e]).then((e) =>
                    null != e ? e : null,
                  ));
              }),
              t.accessList &&
                (r.accessList = this.formatter.accessList(t.accessList)),
              ["data"].forEach((e) => {
                null != t[e] &&
                  (r[e] = Promise.resolve(t[e]).then((e) =>
                    e ? (0, l.hexlify)(e) : null,
                  ));
              }),
              this.formatter.transactionRequest(
                yield (0, h.resolveProperties)(r),
              )
            );
          });
        }
        _getFilter(e) {
          return w(this, void 0, void 0, function* () {
            e = yield e;
            const t = {};
            return (
              null != e.address && (t.address = this._getAddress(e.address)),
              ["blockHash", "topics"].forEach((r) => {
                null != e[r] && (t[r] = e[r]);
              }),
              ["fromBlock", "toBlock"].forEach((r) => {
                null != e[r] && (t[r] = this._getBlockTag(e[r]));
              }),
              this.formatter.filter(yield (0, h.resolveProperties)(t))
            );
          });
        }
        _call(e, t, r) {
          return w(this, void 0, void 0, function* () {
            r >= P &&
              k.throwError(
                "CCIP read exceeded maximum redirections",
                y.Logger.errors.SERVER_ERROR,
                { redirects: r, transaction: e },
              );
            const o = e.to,
              n = yield this.perform("call", { transaction: e, blockTag: t });
            if (
              r >= 0 &&
              "latest" === t &&
              null != o &&
              "0x556f1830" === n.substring(0, 10) &&
              (0, l.hexDataLength)(n) % 32 === 4
            )
              try {
                const i = (0, l.hexDataSlice)(n, 4),
                  s = (0, l.hexDataSlice)(i, 0, 32);
                a.BigNumber.from(s).eq(o) ||
                  k.throwError(
                    "CCIP Read sender did not match",
                    y.Logger.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: e,
                      data: n,
                    },
                  );
                const c = [],
                  u = a.BigNumber.from(
                    (0, l.hexDataSlice)(i, 32, 64),
                  ).toNumber(),
                  d = a.BigNumber.from(
                    (0, l.hexDataSlice)(i, u, u + 32),
                  ).toNumber(),
                  h = (0, l.hexDataSlice)(i, u + 32);
                for (let t = 0; t < d; t++) {
                  const r = I(h, 32 * t);
                  (null == r &&
                    k.throwError(
                      "CCIP Read contained corrupt URL string",
                      y.Logger.errors.CALL_EXCEPTION,
                      {
                        name: "OffchainLookup",
                        signature:
                          "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                        transaction: e,
                        data: n,
                      },
                    ),
                    c.push(r));
                }
                const f = F(i, 64);
                a.BigNumber.from((0, l.hexDataSlice)(i, 100, 128)).isZero() ||
                  k.throwError(
                    "CCIP Read callback selector included junk",
                    y.Logger.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: e,
                      data: n,
                    },
                  );
                const g = (0, l.hexDataSlice)(i, 96, 100),
                  p = F(i, 128),
                  m = yield this.ccipReadFetch(e, f, c);
                null == m &&
                  k.throwError(
                    "CCIP Read disabled or provided no URLs",
                    y.Logger.errors.CALL_EXCEPTION,
                    {
                      name: "OffchainLookup",
                      signature:
                        "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                      transaction: e,
                      data: n,
                    },
                  );
                const b = { to: o, data: (0, l.hexConcat)([g, U([m, p])]) };
                return this._call(b, t, r + 1);
              } catch (i) {
                if (i.code === y.Logger.errors.SERVER_ERROR) throw i;
              }
            try {
              return (0, l.hexlify)(n);
            } catch (i) {
              return k.throwError(
                "bad result from backend",
                y.Logger.errors.SERVER_ERROR,
                {
                  method: "call",
                  params: { transaction: e, blockTag: t },
                  result: n,
                  error: i,
                },
              );
            }
          });
        }
        call(e, t) {
          return w(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const r = yield (0, h.resolveProperties)({
              transaction: this._getTransactionRequest(e),
              blockTag: this._getBlockTag(t),
              ccipReadEnabled: Promise.resolve(e.ccipReadEnabled),
            });
            return this._call(
              r.transaction,
              r.blockTag,
              r.ccipReadEnabled ? 0 : -1,
            );
          });
        }
        estimateGas(e) {
          return w(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield (0, h.resolveProperties)({
                transaction: this._getTransactionRequest(e),
              }),
              r = yield this.perform("estimateGas", t);
            try {
              return a.BigNumber.from(r);
            } catch (o) {
              return k.throwError(
                "bad result from backend",
                y.Logger.errors.SERVER_ERROR,
                { method: "estimateGas", params: t, result: r, error: o },
              );
            }
          });
        }
        _getAddress(e) {
          return w(this, void 0, void 0, function* () {
            ((e = yield e),
              "string" !== typeof e &&
                k.throwArgumentError("invalid address or ENS name", "name", e));
            const t = yield this.resolveName(e);
            return (
              null == t &&
                k.throwError(
                  "ENS name not configured",
                  y.Logger.errors.UNSUPPORTED_OPERATION,
                  { operation: `resolveName(${JSON.stringify(e)})` },
                ),
              t
            );
          });
        }
        _getBlock(e, t) {
          return w(this, void 0, void 0, function* () {
            (yield this.getNetwork(), (e = yield e));
            let r = -128;
            const o = { includeTransactions: !!t };
            if ((0, l.isHexString)(e, 32)) o.blockHash = e;
            else
              try {
                ((o.blockTag = yield this._getBlockTag(e)),
                  (0, l.isHexString)(o.blockTag) &&
                    (r = parseInt(o.blockTag.substring(2), 16)));
              } catch (n) {
                k.throwArgumentError(
                  "invalid block hash or block tag",
                  "blockHashOrBlockTag",
                  e,
                );
              }
            return (0, p.poll)(
              () =>
                w(this, void 0, void 0, function* () {
                  const e = yield this.perform("getBlock", o);
                  if (null == e)
                    return (null != o.blockHash &&
                      null == this._emitted["b:" + o.blockHash]) ||
                      (null != o.blockTag && r > this._emitted.block)
                      ? null
                      : void 0;
                  if (t) {
                    let t = null;
                    for (let o = 0; o < e.transactions.length; o++) {
                      const r = e.transactions[o];
                      if (null == r.blockNumber) r.confirmations = 0;
                      else if (null == r.confirmations) {
                        null == t &&
                          (t = yield this._getInternalBlockNumber(
                            100 + 2 * this.pollingInterval,
                          ));
                        let e = t - r.blockNumber + 1;
                        (e <= 0 && (e = 1), (r.confirmations = e));
                      }
                    }
                    const r = this.formatter.blockWithTransactions(e);
                    return (
                      (r.transactions = r.transactions.map((e) =>
                        this._wrapTransaction(e),
                      )),
                      r
                    );
                  }
                  return this.formatter.block(e);
                }),
              { oncePoll: this },
            );
          });
        }
        getBlock(e) {
          return this._getBlock(e, !1);
        }
        getBlockWithTransactions(e) {
          return this._getBlock(e, !0);
        }
        getTransaction(e) {
          return w(this, void 0, void 0, function* () {
            (yield this.getNetwork(), (e = yield e));
            const t = { transactionHash: this.formatter.hash(e, !0) };
            return (0, p.poll)(
              () =>
                w(this, void 0, void 0, function* () {
                  const r = yield this.perform("getTransaction", t);
                  if (null == r)
                    return null == this._emitted["t:" + e] ? null : void 0;
                  const o = this.formatter.transactionResponse(r);
                  if (null == o.blockNumber) o.confirmations = 0;
                  else if (null == o.confirmations) {
                    const e = yield this._getInternalBlockNumber(
                      100 + 2 * this.pollingInterval,
                    );
                    let t = e - o.blockNumber + 1;
                    (t <= 0 && (t = 1), (o.confirmations = t));
                  }
                  return this._wrapTransaction(o);
                }),
              { oncePoll: this },
            );
          });
        }
        getTransactionReceipt(e) {
          return w(this, void 0, void 0, function* () {
            (yield this.getNetwork(), (e = yield e));
            const t = { transactionHash: this.formatter.hash(e, !0) };
            return (0, p.poll)(
              () =>
                w(this, void 0, void 0, function* () {
                  const r = yield this.perform("getTransactionReceipt", t);
                  if (null == r)
                    return null == this._emitted["t:" + e] ? null : void 0;
                  if (null == r.blockHash) return;
                  const o = this.formatter.receipt(r);
                  if (null == o.blockNumber) o.confirmations = 0;
                  else if (null == o.confirmations) {
                    const e = yield this._getInternalBlockNumber(
                      100 + 2 * this.pollingInterval,
                    );
                    let t = e - o.blockNumber + 1;
                    (t <= 0 && (t = 1), (o.confirmations = t));
                  }
                  return o;
                }),
              { oncePoll: this },
            );
          });
        }
        getLogs(e) {
          return w(this, void 0, void 0, function* () {
            yield this.getNetwork();
            const t = yield (0, h.resolveProperties)({
                filter: this._getFilter(e),
              }),
              r = yield this.perform("getLogs", t);
            return (
              r.forEach((e) => {
                null == e.removed && (e.removed = !1);
              }),
              v.Formatter.arrayOf(
                this.formatter.filterLog.bind(this.formatter),
              )(r)
            );
          });
        }
        getEtherPrice() {
          return w(this, void 0, void 0, function* () {
            return (yield this.getNetwork(), this.perform("getEtherPrice", {}));
          });
        }
        _getBlockTag(e) {
          return w(this, void 0, void 0, function* () {
            if (((e = yield e), "number" === typeof e && e < 0)) {
              e % 1 && k.throwArgumentError("invalid BlockTag", "blockTag", e);
              let t = yield this._getInternalBlockNumber(
                100 + 2 * this.pollingInterval,
              );
              return ((t += e), t < 0 && (t = 0), this.formatter.blockTag(t));
            }
            return this.formatter.blockTag(e);
          });
        }
        getResolver(e) {
          return w(this, void 0, void 0, function* () {
            let t = e;
            while (1) {
              if ("" === t || "." === t) return null;
              if ("eth" !== e && "eth" === t) return null;
              const r = yield this._getResolver(t, "getResolver");
              if (null != r) {
                const o = new Resolver(this, r, e);
                return t === e || (yield o.supportsWildcard()) ? o : null;
              }
              t = t.split(".").slice(1).join(".");
            }
          });
        }
        _getResolver(e, t) {
          return w(this, void 0, void 0, function* () {
            null == t && (t = "ENS");
            const r = yield this.getNetwork();
            r.ensAddress ||
              k.throwError(
                "network does not support ENS",
                y.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: t, network: r.name },
              );
            try {
              const t = yield this.call({
                to: r.ensAddress,
                data: "0x0178b8bf" + (0, u.namehash)(e).substring(2),
              });
              return this.formatter.callAddress(t);
            } catch (o) {}
            return null;
          });
        }
        resolveName(e) {
          return w(this, void 0, void 0, function* () {
            e = yield e;
            try {
              return Promise.resolve(this.formatter.address(e));
            } catch (r) {
              if ((0, l.isHexString)(e)) throw r;
            }
            "string" !== typeof e &&
              k.throwArgumentError("invalid ENS name", "name", e);
            const t = yield this.getResolver(e);
            return t ? yield t.getAddress() : null;
          });
        }
        lookupAddress(e) {
          return w(this, void 0, void 0, function* () {
            ((e = yield e), (e = this.formatter.address(e)));
            const t = e.substring(2).toLowerCase() + ".addr.reverse",
              r = yield this._getResolver(t, "lookupAddress");
            if (null == r) return null;
            const o = I(
                yield this.call({
                  to: r,
                  data: "0x691f3431" + (0, u.namehash)(t).substring(2),
                }),
                0,
              ),
              n = yield this.resolveName(o);
            return n != e ? null : o;
          });
        }
        getAvatar(e) {
          return w(this, void 0, void 0, function* () {
            let t = null;
            if ((0, l.isHexString)(e)) {
              const r = this.formatter.address(e),
                n = r.substring(2).toLowerCase() + ".addr.reverse",
                i = yield this._getResolver(n, "getAvatar");
              if (!i) return null;
              t = new Resolver(this, i, n);
              try {
                const e = yield t.getAvatar();
                if (e) return e.url;
              } catch (o) {
                if (o.code !== y.Logger.errors.CALL_EXCEPTION) throw o;
              }
              try {
                const e = I(
                  yield this.call({
                    to: i,
                    data: "0x691f3431" + (0, u.namehash)(n).substring(2),
                  }),
                  0,
                );
                t = yield this.getResolver(e);
              } catch (o) {
                if (o.code !== y.Logger.errors.CALL_EXCEPTION) throw o;
                return null;
              }
            } else if (((t = yield this.getResolver(e)), !t)) return null;
            const r = yield t.getAvatar();
            return null == r ? null : r.url;
          });
        }
        perform(e, t) {
          return k.throwError(
            e + " not implemented",
            y.Logger.errors.NOT_IMPLEMENTED,
            { operation: e },
          );
        }
        _startEvent(e) {
          this.polling = this._events.filter((e) => e.pollable()).length > 0;
        }
        _stopEvent(e) {
          this.polling = this._events.filter((e) => e.pollable()).length > 0;
        }
        _addEventListener(e, t, r) {
          const o = new Event(R(e), t, r);
          return (this._events.push(o), this._startEvent(o), this);
        }
        on(e, t) {
          return this._addEventListener(e, t, !1);
        }
        once(e, t) {
          return this._addEventListener(e, t, !0);
        }
        emit(e) {
          for (
            var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            r[o - 1] = arguments[o];
          let n = !1,
            i = [],
            s = R(e);
          return (
            (this._events = this._events.filter(
              (e) =>
                e.tag !== s ||
                (setTimeout(() => {
                  e.listener.apply(this, r);
                }, 0),
                (n = !0),
                !e.once || (i.push(e), !1)),
            )),
            i.forEach((e) => {
              this._stopEvent(e);
            }),
            n
          );
        }
        listenerCount(e) {
          if (!e) return this._events.length;
          let t = R(e);
          return this._events.filter((e) => e.tag === t).length;
        }
        listeners(e) {
          if (null == e) return this._events.map((e) => e.listener);
          let t = R(e);
          return this._events.filter((e) => e.tag === t).map((e) => e.listener);
        }
        off(e, t) {
          if (null == t) return this.removeAllListeners(e);
          const r = [];
          let o = !1,
            n = R(e);
          return (
            (this._events = this._events.filter(
              (e) =>
                e.tag !== n ||
                e.listener != t ||
                !!o ||
                ((o = !0), r.push(e), !1),
            )),
            r.forEach((e) => {
              this._stopEvent(e);
            }),
            this
          );
        }
        removeAllListeners(e) {
          let t = [];
          if (null == e) ((t = this._events), (this._events = []));
          else {
            const r = R(e);
            this._events = this._events.filter(
              (e) => e.tag !== r || (t.push(e), !1),
            );
          }
          return (
            t.forEach((e) => {
              this._stopEvent(e);
            }),
            this
          );
        }
      }
      t.BaseProvider = BaseProvider;
    },
    5715: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WebSocketProvider = void 0));
      var o = r(2829),
        n = r(2808),
        i = r(4592),
        s = r(11425),
        a = r(2773),
        l = r(3073),
        c = function (e, t, r, o) {
          function n(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, i) {
            function s(e) {
              try {
                l(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function l(e) {
              e.done ? r(e.value) : n(e.value).then(s, a);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const u = new a.Logger(l.version);
      let d = 1;
      class WebSocketProvider extends i.JsonRpcProvider {
        constructor(e, t) {
          ("any" === t &&
            u.throwError(
              "WebSocketProvider does not support 'any' network yet",
              a.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "network:any" },
            ),
            super("string" === typeof e ? e : "_websocket", t),
            (this._pollingInterval = -1),
            (this._wsReady = !1),
            "string" === typeof e
              ? (0, n.defineReadOnly)(
                  this,
                  "_websocket",
                  new s.WebSocket(this.connection.url),
                )
              : (0, n.defineReadOnly)(this, "_websocket", e),
            (0, n.defineReadOnly)(this, "_requests", {}),
            (0, n.defineReadOnly)(this, "_subs", {}),
            (0, n.defineReadOnly)(this, "_subIds", {}),
            (0, n.defineReadOnly)(
              this,
              "_detectNetwork",
              super.detectNetwork(),
            ),
            (this.websocket.onopen = () => {
              ((this._wsReady = !0),
                Object.keys(this._requests).forEach((e) => {
                  this.websocket.send(this._requests[e].payload);
                }));
            }),
            (this.websocket.onmessage = (e) => {
              const t = e.data,
                r = JSON.parse(t);
              if (null != r.id) {
                const e = String(r.id),
                  o = this._requests[e];
                if ((delete this._requests[e], void 0 !== r.result))
                  (o.callback(null, r.result),
                    this.emit("debug", {
                      action: "response",
                      request: JSON.parse(o.payload),
                      response: r.result,
                      provider: this,
                    }));
                else {
                  let e = null;
                  (r.error
                    ? ((e = new Error(r.error.message || "unknown error")),
                      (0, n.defineReadOnly)(e, "code", r.error.code || null),
                      (0, n.defineReadOnly)(e, "response", t))
                    : (e = new Error("unknown error")),
                    o.callback(e, void 0),
                    this.emit("debug", {
                      action: "response",
                      error: e,
                      request: JSON.parse(o.payload),
                      provider: this,
                    }));
                }
              } else if ("eth_subscription" === r.method) {
                const e = this._subs[r.params.subscription];
                e && e.processFunc(r.params.result);
              } else console.warn("this should not happen");
            }));
          const r = setInterval(() => {
            this.emit("poll");
          }, 1e3);
          r.unref && r.unref();
        }
        get websocket() {
          return this._websocket;
        }
        detectNetwork() {
          return this._detectNetwork;
        }
        get pollingInterval() {
          return 0;
        }
        resetEventsBlock(e) {
          u.throwError(
            "cannot reset events block on WebSocketProvider",
            a.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "resetEventBlock" },
          );
        }
        set pollingInterval(e) {
          u.throwError(
            "cannot set polling interval on WebSocketProvider",
            a.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "setPollingInterval" },
          );
        }
        poll() {
          return c(this, void 0, void 0, function* () {
            return null;
          });
        }
        set polling(e) {
          e &&
            u.throwError(
              "cannot set polling on WebSocketProvider",
              a.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setPolling" },
            );
        }
        send(e, t) {
          const r = d++;
          return new Promise((o, n) => {
            function i(e, t) {
              return e ? n(e) : o(t);
            }
            const s = JSON.stringify({
              method: e,
              params: t,
              id: r,
              jsonrpc: "2.0",
            });
            (this.emit("debug", {
              action: "request",
              request: JSON.parse(s),
              provider: this,
            }),
              (this._requests[String(r)] = { callback: i, payload: s }),
              this._wsReady && this.websocket.send(s));
          });
        }
        static defaultUrl() {
          return "ws://localhost:8546";
        }
        _subscribe(e, t, r) {
          return c(this, void 0, void 0, function* () {
            let o = this._subIds[e];
            null == o &&
              ((o = Promise.all(t).then((e) => this.send("eth_subscribe", e))),
              (this._subIds[e] = o));
            const n = yield o;
            this._subs[n] = { tag: e, processFunc: r };
          });
        }
        _startEvent(e) {
          switch (e.type) {
            case "block":
              this._subscribe("block", ["newHeads"], (e) => {
                const t = o.BigNumber.from(e.number).toNumber();
                ((this._emitted.block = t), this.emit("block", t));
              });
              break;
            case "pending":
              this._subscribe("pending", ["newPendingTransactions"], (e) => {
                this.emit("pending", e);
              });
              break;
            case "filter":
              this._subscribe(
                e.tag,
                ["logs", this._getFilter(e.filter)],
                (t) => {
                  (null == t.removed && (t.removed = !1),
                    this.emit(e.filter, this.formatter.filterLog(t)));
                },
              );
              break;
            case "tx": {
              const t = (e) => {
                const t = e.hash;
                this.getTransactionReceipt(t).then((e) => {
                  e && this.emit(t, e);
                });
              };
              (t(e),
                this._subscribe("tx", ["newHeads"], (e) => {
                  this._events.filter((e) => "tx" === e.type).forEach(t);
                }));
              break;
            }
            case "debug":
            case "poll":
            case "willPoll":
            case "didPoll":
            case "error":
              break;
            default:
              console.log("unhandled:", e);
              break;
          }
        }
        _stopEvent(e) {
          let t = e.tag;
          if ("tx" === e.type) {
            if (this._events.filter((e) => "tx" === e.type).length) return;
            t = "tx";
          } else if (this.listenerCount(e.event)) return;
          const r = this._subIds[t];
          r &&
            (delete this._subIds[t],
            r.then((e) => {
              this._subs[e] &&
                (delete this._subs[e], this.send("eth_unsubscribe", [e]));
            }));
        }
        destroy() {
          return c(this, void 0, void 0, function* () {
            (this.websocket.readyState === s.WebSocket.CONNECTING &&
              (yield new Promise((e) => {
                ((this.websocket.onopen = function () {
                  e(!0);
                }),
                  (this.websocket.onerror = function () {
                    e(!1);
                  }));
              })),
              this.websocket.close(1e3));
          });
        }
      }
      t.WebSocketProvider = WebSocketProvider;
    },
    6910: function (e, t, r) {
      (function (t) {
        var r = "Input must be an string, Buffer or Uint8Array";
        function o(e) {
          var o;
          if (e instanceof Uint8Array) o = e;
          else if (e instanceof t) o = new Uint8Array(e);
          else {
            if ("string" !== typeof e) throw new Error(r);
            o = new Uint8Array(t.from(e, "utf8"));
          }
          return o;
        }
        function n(e) {
          return Array.prototype.map
            .call(e, function (e) {
              return (e < 16 ? "0" : "") + e.toString(16);
            })
            .join("");
        }
        function i(e) {
          return (4294967296 + e).toString(16).substring(1);
        }
        function s(e, t, r) {
          for (var o = "\n" + e + " = ", n = 0; n < t.length; n += 2) {
            if (32 === r)
              ((o += i(t[n]).toUpperCase()),
                (o += " "),
                (o += i(t[n + 1]).toUpperCase()));
            else {
              if (64 !== r) throw new Error("Invalid size " + r);
              ((o += i(t[n + 1]).toUpperCase()), (o += i(t[n]).toUpperCase()));
            }
            n % 6 === 4
              ? (o += "\n" + new Array(e.length + 4).join(" "))
              : n < t.length - 2 && (o += " ");
          }
          console.log(o);
        }
        function a(e, t, r) {
          for (
            var o = new Date().getTime(), n = new Uint8Array(t), i = 0;
            i < t;
            i++
          )
            n[i] = i % 256;
          var s = new Date().getTime();
          for (
            console.log("Generated random input in " + (s - o) + "ms"),
              o = s,
              i = 0;
            i < r;
            i++
          ) {
            var a = e(n),
              l = new Date().getTime(),
              c = l - o;
            ((o = l),
              console.log(
                "Hashed in " + c + "ms: " + a.substring(0, 20) + "...",
              ),
              console.log(
                Math.round((t / (1 << 20) / (c / 1e3)) * 100) / 100 +
                  " MB PER SECOND",
              ));
          }
        }
        e.exports = {
          normalizeInput: o,
          toHex: n,
          debugPrint: s,
          testSpeed: a,
        };
      }).call(this, r(2).Buffer);
    },
    6916: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Wallet = void 0),
        (t.verifyMessage = k),
        (t.verifyTypedData = P));
      var o = r(2976),
        n = r(4590),
        i = r(4874),
        s = r(2776),
        a = r(3274),
        l = r(5712),
        c = r(3049),
        u = r(2808),
        d = r(4875),
        h = r(4623),
        f = r(6920),
        g = r(3271),
        p = r(2773),
        m = r(11419),
        y = function (e, t, r, o) {
          function n(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, i) {
            function s(e) {
              try {
                l(o.next(e));
              } catch (t) {
                i(t);
              }
            }
            function a(e) {
              try {
                l(o["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function l(e) {
              e.done ? r(e.value) : n(e.value).then(s, a);
            }
            l((o = o.apply(e, t || [])).next());
          });
        };
      const b = new p.Logger(m.version);
      function v(e) {
        return (
          null != e && (0, s.isHexString)(e.privateKey, 32) && null != e.address
        );
      }
      function w(e) {
        const t = e.mnemonic;
        return t && t.phrase;
      }
      class Wallet extends i.Signer {
        constructor(e, t) {
          if ((super(), v(e))) {
            const t = new h.SigningKey(e.privateKey);
            if (
              ((0, u.defineReadOnly)(this, "_signingKey", () => t),
              (0, u.defineReadOnly)(
                this,
                "address",
                (0, g.computeAddress)(this.publicKey),
              ),
              this.address !== (0, o.getAddress)(e.address) &&
                b.throwArgumentError(
                  "privateKey/address mismatch",
                  "privateKey",
                  "[REDACTED]",
                ),
              w(e))
            ) {
              const t = e.mnemonic;
              (0, u.defineReadOnly)(this, "_mnemonic", () => ({
                phrase: t.phrase,
                path: t.path || l.defaultPath,
                locale: t.locale || "en",
              }));
              const r = this.mnemonic,
                o = l.HDNode.fromMnemonic(r.phrase, null, r.locale).derivePath(
                  r.path,
                );
              (0, g.computeAddress)(o.privateKey) !== this.address &&
                b.throwArgumentError(
                  "mnemonic/address mismatch",
                  "privateKey",
                  "[REDACTED]",
                );
            } else (0, u.defineReadOnly)(this, "_mnemonic", () => null);
          } else {
            if (h.SigningKey.isSigningKey(e))
              ("secp256k1" !== e.curve &&
                b.throwArgumentError(
                  "unsupported curve; must be secp256k1",
                  "privateKey",
                  "[REDACTED]",
                ),
                (0, u.defineReadOnly)(this, "_signingKey", () => e));
            else {
              "string" === typeof e &&
                e.match(/^[0-9a-f]*$/i) &&
                64 === e.length &&
                (e = "0x" + e);
              const t = new h.SigningKey(e);
              (0, u.defineReadOnly)(this, "_signingKey", () => t);
            }
            ((0, u.defineReadOnly)(this, "_mnemonic", () => null),
              (0, u.defineReadOnly)(
                this,
                "address",
                (0, g.computeAddress)(this.publicKey),
              ));
          }
          (t &&
            !n.Provider.isProvider(t) &&
            b.throwArgumentError("invalid provider", "provider", t),
            (0, u.defineReadOnly)(this, "provider", t || null));
        }
        get mnemonic() {
          return this._mnemonic();
        }
        get privateKey() {
          return this._signingKey().privateKey;
        }
        get publicKey() {
          return this._signingKey().publicKey;
        }
        getAddress() {
          return Promise.resolve(this.address);
        }
        connect(e) {
          return new Wallet(this, e);
        }
        signTransaction(e) {
          return (0, u.resolveProperties)(e).then((t) => {
            null != t.from &&
              ((0, o.getAddress)(t.from) !== this.address &&
                b.throwArgumentError(
                  "transaction from address mismatch",
                  "transaction.from",
                  e.from,
                ),
              delete t.from);
            const r = this._signingKey().signDigest(
              (0, c.keccak256)((0, g.serialize)(t)),
            );
            return (0, g.serialize)(t, r);
          });
        }
        signMessage(e) {
          return y(this, void 0, void 0, function* () {
            return (0, s.joinSignature)(
              this._signingKey().signDigest((0, a.hashMessage)(e)),
            );
          });
        }
        _signTypedData(e, t, r) {
          return y(this, void 0, void 0, function* () {
            const o = yield a._TypedDataEncoder.resolveNames(
              e,
              t,
              r,
              (e) => (
                null == this.provider &&
                  b.throwError(
                    "cannot resolve ENS names without a provider",
                    p.Logger.errors.UNSUPPORTED_OPERATION,
                    { operation: "resolveName", value: e },
                  ),
                this.provider.resolveName(e)
              ),
            );
            return (0, s.joinSignature)(
              this._signingKey().signDigest(
                a._TypedDataEncoder.hash(o.domain, t, o.value),
              ),
            );
          });
        }
        encrypt(e, t, r) {
          if (
            ("function" !== typeof t || r || ((r = t), (t = {})),
            r && "function" !== typeof r)
          )
            throw new Error("invalid callback");
          return (t || (t = {}), (0, f.encryptKeystore)(this, e, t, r));
        }
        static createRandom(e) {
          let t = (0, d.randomBytes)(16);
          (e || (e = {}),
            e.extraEntropy &&
              (t = (0, s.arrayify)(
                (0, s.hexDataSlice)(
                  (0, c.keccak256)((0, s.concat)([t, e.extraEntropy])),
                  0,
                  16,
                ),
              )));
          const r = (0, l.entropyToMnemonic)(t, e.locale);
          return Wallet.fromMnemonic(r, e.path, e.locale);
        }
        static fromEncryptedJson(e, t, r) {
          return (0, f.decryptJsonWallet)(e, t, r).then((e) => new Wallet(e));
        }
        static fromEncryptedJsonSync(e, t) {
          return new Wallet((0, f.decryptJsonWalletSync)(e, t));
        }
        static fromMnemonic(e, t, r) {
          return (
            t || (t = l.defaultPath),
            new Wallet(l.HDNode.fromMnemonic(e, null, r).derivePath(t))
          );
        }
      }
      function k(e, t) {
        return (0, g.recoverAddress)((0, a.hashMessage)(e), t);
      }
      function P(e, t, r, o) {
        return (0, g.recoverAddress)(a._TypedDataEncoder.hash(e, t, r), o);
      }
      t.Wallet = Wallet;
    },
    6917: function (e, t, r) {
      "use strict";
      var o;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SupportedAlgorithm = void 0),
        (function (e) {
          ((e["sha256"] = "sha256"), (e["sha512"] = "sha512"));
        })(o || (t.SupportedAlgorithm = o = {})));
    },
    6918: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Wordlist", {
          enumerable: !0,
          get: function () {
            return o.Wordlist;
          },
        }),
        Object.defineProperty(t, "logger", {
          enumerable: !0,
          get: function () {
            return o.logger;
          },
        }),
        Object.defineProperty(t, "wordlists", {
          enumerable: !0,
          get: function () {
            return n.wordlists;
          },
        }));
      var o = r(6919),
        n = r(11410);
    },
    6919: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.logger = t.Wordlist = void 0));
      var o = r(3274),
        n = r(2808),
        i = r(2773),
        s = r(11409);
      const a = !1,
        l = (t.logger = new i.Logger(s.version));
      class Wordlist {
        constructor(e) {
          (l.checkAbstract(new.target, Wordlist),
            (0, n.defineReadOnly)(this, "locale", e));
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
            const o = e.getWord(r);
            if (r !== e.getWordIndex(o)) return "0x";
            t.push(o);
          }
          return (0, o.id)(t.join("\n") + "\n");
        }
        static register(e, t) {
          if ((t || (t = e.locale), a))
            try {
              const r = window;
              r._ethers &&
                r._ethers.wordlists &&
                (r._ethers.wordlists[t] ||
                  (0, n.defineReadOnly)(r._ethers.wordlists, t, e));
            } catch (r) {}
        }
      }
      t.Wordlist = Wordlist;
    },
  },
]);
