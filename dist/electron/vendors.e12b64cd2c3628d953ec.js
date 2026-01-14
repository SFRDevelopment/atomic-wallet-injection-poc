(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [68],
  {
    1722: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.getAddress = p),
        (r.getContractAddress = w),
        (r.getCreate2Address = b),
        (r.getIcapAddress = y),
        (r.isAddress = v));
      var i = e(96),
        n = e(291),
        o = e(588),
        s = e(589),
        h = e(77),
        u = e(1728);
      const a = new h.Logger(u.version);
      function f(t) {
        ((0, i.isHexString)(t, 20) ||
          a.throwArgumentError("invalid address", "address", t),
          (t = t.toLowerCase()));
        const r = t.substring(2).split(""),
          e = new Uint8Array(40);
        for (let i = 0; i < 40; i++) e[i] = r[i].charCodeAt(0);
        const n = (0, i.arrayify)((0, o.keccak256)(e));
        for (let i = 0; i < 40; i += 2)
          (n[i >> 1] >> 4 >= 8 && (r[i] = r[i].toUpperCase()),
            (15 & n[i >> 1]) >= 8 && (r[i + 1] = r[i + 1].toUpperCase()));
        return "0x" + r.join("");
      }
      const l = 9007199254740991;
      function d(t) {
        return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10;
      }
      const m = {};
      for (let M = 0; M < 10; M++) m[String(M)] = String(M);
      for (let M = 0; M < 26; M++)
        m[String.fromCharCode(65 + M)] = String(10 + M);
      const c = Math.floor(d(l));
      function g(t) {
        ((t = t.toUpperCase()),
          (t = t.substring(4) + t.substring(0, 2) + "00"));
        let r = t
          .split("")
          .map((t) => m[t])
          .join("");
        while (r.length >= c) {
          let t = r.substring(0, c);
          r = (parseInt(t, 10) % 97) + r.substring(t.length);
        }
        let e = String(98 - (parseInt(r, 10) % 97));
        while (e.length < 2) e = "0" + e;
        return e;
      }
      function p(t) {
        let r = null;
        if (
          ("string" !== typeof t &&
            a.throwArgumentError("invalid address", "address", t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          ("0x" !== t.substring(0, 2) && (t = "0x" + t),
            (r = f(t)),
            t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              r !== t &&
              a.throwArgumentError("bad address checksum", "address", t));
        else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          (t.substring(2, 4) !== g(t) &&
            a.throwArgumentError("bad icap checksum", "address", t),
            (r = (0, n._base36To16)(t.substring(4))));
          while (r.length < 40) r = "0" + r;
          r = f("0x" + r);
        } else a.throwArgumentError("invalid address", "address", t);
        return r;
      }
      function v(t) {
        try {
          return (p(t), !0);
        } catch (r) {}
        return !1;
      }
      function y(t) {
        let r = (0, n._base16To36)(p(t).substring(2)).toUpperCase();
        while (r.length < 30) r = "0" + r;
        return "XE" + g("XE00" + r) + r;
      }
      function w(t) {
        let r = null;
        try {
          r = p(t.from);
        } catch (h) {
          a.throwArgumentError("missing from address", "transaction", t);
        }
        const e = (0, i.stripZeros)(
          (0, i.arrayify)(n.BigNumber.from(t.nonce).toHexString()),
        );
        return p(
          (0, i.hexDataSlice)((0, o.keccak256)((0, s.encode)([r, e])), 12),
        );
      }
      function b(t, r, e) {
        return (
          32 !== (0, i.hexDataLength)(r) &&
            a.throwArgumentError("salt must be 32 bytes", "salt", r),
          32 !== (0, i.hexDataLength)(e) &&
            a.throwArgumentError(
              "initCodeHash must be 32 bytes",
              "initCodeHash",
              e,
            ),
          p(
            (0, i.hexDataSlice)(
              (0, o.keccak256)((0, i.concat)(["0xff", p(t), r, e])),
              12,
            ),
          )
        );
      }
    },
    1723: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "logger/5.8.0";
    },
    1724: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bytes/5.8.0";
    },
    1726: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.FixedNumber = r.FixedFormat = void 0),
        (r.formatFixed = c),
        (r.parseFixed = g));
      var i = e(96),
        n = e(77),
        o = e(587),
        s = e(585);
      const h = new n.Logger(o.version),
        u = {},
        a = s.BigNumber.from(0),
        f = s.BigNumber.from(-1);
      function l(t, r, e, i) {
        const o = { fault: r, operation: e };
        return (
          void 0 !== i && (o.value = i),
          h.throwError(t, n.Logger.errors.NUMERIC_FAULT, o)
        );
      }
      let d = "0";
      while (d.length < 256) d += d;
      function m(t) {
        if ("number" !== typeof t)
          try {
            t = s.BigNumber.from(t).toNumber();
          } catch (r) {}
        return "number" === typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + d.substring(0, t)
          : h.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function c(t, r) {
        null == r && (r = 0);
        const e = m(r);
        t = s.BigNumber.from(t);
        const i = t.lt(a);
        i && (t = t.mul(f));
        let n = t.mod(e).toString();
        while (n.length < e.length - 1) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = t.div(e).toString();
        return ((t = 1 === e.length ? o : o + "." + n), i && (t = "-" + t), t);
      }
      function g(t, r) {
        null == r && (r = 0);
        const e = m(r);
        ("string" === typeof t && t.match(/^-?[0-9.]+$/)) ||
          h.throwArgumentError("invalid decimal value", "value", t);
        const i = "-" === t.substring(0, 1);
        (i && (t = t.substring(1)),
          "." === t && h.throwArgumentError("missing value", "value", t));
        const n = t.split(".");
        n.length > 2 &&
          h.throwArgumentError("too many decimal points", "value", t);
        let o = n[0],
          u = n[1];
        (o || (o = "0"), u || (u = "0"));
        while ("0" === u[u.length - 1]) u = u.substring(0, u.length - 1);
        (u.length > e.length - 1 &&
          l("fractional component exceeds decimals", "underflow", "parseFixed"),
          "" === u && (u = "0"));
        while (u.length < e.length - 1) u += "0";
        const a = s.BigNumber.from(o),
          d = s.BigNumber.from(u);
        let c = a.mul(e).add(d);
        return (i && (c = c.mul(f)), c);
      }
      class FixedFormat {
        constructor(t, r, e, i) {
          (t !== u &&
            h.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              n.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.signed = r),
            (this.width = e),
            (this.decimals = i),
            (this.name =
              (r ? "" : "u") + "fixed" + String(e) + "x" + String(i)),
            (this._multiplier = m(i)),
            Object.freeze(this));
        }
        static from(t) {
          if (t instanceof FixedFormat) return t;
          "number" === typeof t && (t = "fixed128x" + t);
          let r = !0,
            e = 128,
            i = 18;
          if ("string" === typeof t)
            if ("fixed" === t);
            else if ("ufixed" === t) r = !1;
            else {
              const n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              (n || h.throwArgumentError("invalid fixed format", "format", t),
                (r = "u" !== n[1]),
                (e = parseInt(n[2])),
                (i = parseInt(n[3])));
            }
          else if (t) {
            const n = (r, e, i) =>
              null == t[r]
                ? i
                : (typeof t[r] !== e &&
                    h.throwArgumentError(
                      "invalid fixed format (" + r + " not " + e + ")",
                      "format." + r,
                      t[r],
                    ),
                  t[r]);
            ((r = n("signed", "boolean", r)),
              (e = n("width", "number", e)),
              (i = n("decimals", "number", i)));
          }
          return (
            e % 8 &&
              h.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                e,
              ),
            i > 80 &&
              h.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                i,
              ),
            new FixedFormat(u, r, e, i)
          );
        }
      }
      r.FixedFormat = FixedFormat;
      class FixedNumber {
        constructor(t, r, e, i) {
          (t !== u &&
            h.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              n.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.format = i),
            (this._hex = r),
            (this._value = e),
            (this._isFixedNumber = !0),
            Object.freeze(this));
        }
        _checkFormat(t) {
          this.format.name !== t.format.name &&
            h.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              t,
            );
        }
        addUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.add(e),
            this.format.decimals,
            this.format,
          );
        }
        subUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.sub(e),
            this.format.decimals,
            this.format,
          );
        }
        mulUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.mul(e).div(this.format._multiplier),
            this.format.decimals,
            this.format,
          );
        }
        divUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.mul(this.format._multiplier).div(e),
            this.format.decimals,
            this.format,
          );
        }
        floor() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let r = FixedNumber.from(t[0], this.format);
          const e = !t[1].match(/^(0*)$/);
          return (
            this.isNegative() && e && (r = r.subUnsafe(p.toFormat(r.format))),
            r
          );
        }
        ceiling() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let r = FixedNumber.from(t[0], this.format);
          const e = !t[1].match(/^(0*)$/);
          return (
            !this.isNegative() && e && (r = r.addUnsafe(p.toFormat(r.format))),
            r
          );
        }
        round(t) {
          null == t && (t = 0);
          const r = this.toString().split(".");
          if (
            (1 === r.length && r.push("0"),
            (t < 0 || t > 80 || t % 1) &&
              h.throwArgumentError("invalid decimal count", "decimals", t),
            r[1].length <= t)
          )
            return this;
          const e = FixedNumber.from("1" + d.substring(0, t), this.format),
            i = v.toFormat(this.format);
          return this.mulUnsafe(e).addUnsafe(i).floor().divUnsafe(e);
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
        toHexString(t) {
          if (null == t) return this._hex;
          t % 8 && h.throwArgumentError("invalid byte width", "width", t);
          const r = s.BigNumber.from(this._hex)
            .fromTwos(this.format.width)
            .toTwos(t)
            .toHexString();
          return (0, i.hexZeroPad)(r, t / 8);
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return FixedNumber.fromString(this._value, t);
        }
        static fromValue(t, r, e) {
          return (
            null != e ||
              null == r ||
              (0, s.isBigNumberish)(r) ||
              ((e = r), (r = null)),
            null == r && (r = 0),
            null == e && (e = "fixed"),
            FixedNumber.fromString(c(t, r), FixedFormat.from(e))
          );
        }
        static fromString(t, r) {
          null == r && (r = "fixed");
          const e = FixedFormat.from(r),
            n = g(t, e.decimals);
          !e.signed &&
            n.lt(a) &&
            l("unsigned value cannot be negative", "overflow", "value", t);
          let o = null;
          e.signed
            ? (o = n.toTwos(e.width).toHexString())
            : ((o = n.toHexString()), (o = (0, i.hexZeroPad)(o, e.width / 8)));
          const s = c(n, e.decimals);
          return new FixedNumber(u, o, s, e);
        }
        static fromBytes(t, r) {
          null == r && (r = "fixed");
          const e = FixedFormat.from(r);
          if ((0, i.arrayify)(t).length > e.width / 8)
            throw new Error("overflow");
          let n = s.BigNumber.from(t);
          e.signed && (n = n.fromTwos(e.width));
          const o = n.toTwos((e.signed ? 0 : 1) + e.width).toHexString(),
            h = c(n, e.decimals);
          return new FixedNumber(u, o, h, e);
        }
        static from(t, r) {
          if ("string" === typeof t) return FixedNumber.fromString(t, r);
          if ((0, i.isBytes)(t)) return FixedNumber.fromBytes(t, r);
          try {
            return FixedNumber.fromValue(t, 0, r);
          } catch (e) {
            if (e.code !== n.Logger.errors.INVALID_ARGUMENT) throw e;
          }
          return h.throwArgumentError("invalid FixedNumber value", "value", t);
        }
        static isFixedNumber(t) {
          return !(!t || !t._isFixedNumber);
        }
      }
      r.FixedNumber = FixedNumber;
      const p = FixedNumber.from(1),
        v = FixedNumber.from("0.5");
    },
    1727: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "rlp/5.8.0";
    },
    1728: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "address/5.8.0";
    },
    1729: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "AddressZero", {
          enumerable: !0,
          get: function () {
            return i.AddressZero;
          },
        }),
        Object.defineProperty(r, "EtherSymbol", {
          enumerable: !0,
          get: function () {
            return s.EtherSymbol;
          },
        }),
        Object.defineProperty(r, "HashZero", {
          enumerable: !0,
          get: function () {
            return o.HashZero;
          },
        }),
        Object.defineProperty(r, "MaxInt256", {
          enumerable: !0,
          get: function () {
            return n.MaxInt256;
          },
        }),
        Object.defineProperty(r, "MaxUint256", {
          enumerable: !0,
          get: function () {
            return n.MaxUint256;
          },
        }),
        Object.defineProperty(r, "MinInt256", {
          enumerable: !0,
          get: function () {
            return n.MinInt256;
          },
        }),
        Object.defineProperty(r, "NegativeOne", {
          enumerable: !0,
          get: function () {
            return n.NegativeOne;
          },
        }),
        Object.defineProperty(r, "One", {
          enumerable: !0,
          get: function () {
            return n.One;
          },
        }),
        Object.defineProperty(r, "Two", {
          enumerable: !0,
          get: function () {
            return n.Two;
          },
        }),
        Object.defineProperty(r, "WeiPerEther", {
          enumerable: !0,
          get: function () {
            return n.WeiPerEther;
          },
        }),
        Object.defineProperty(r, "Zero", {
          enumerable: !0,
          get: function () {
            return n.Zero;
          },
        }));
      var i = e(1730),
        n = e(1731),
        o = e(1732),
        s = e(1733);
    },
    1730: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.AddressZero = void 0));
      r.AddressZero = "0x0000000000000000000000000000000000000000";
    },
    1731: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Zero =
          r.WeiPerEther =
          r.Two =
          r.One =
          r.NegativeOne =
          r.MinInt256 =
          r.MaxUint256 =
          r.MaxInt256 =
            void 0));
      var i = e(291);
      ((r.NegativeOne = i.BigNumber.from(-1)),
        (r.Zero = i.BigNumber.from(0)),
        (r.One = i.BigNumber.from(1)),
        (r.Two = i.BigNumber.from(2)),
        (r.WeiPerEther = i.BigNumber.from("1000000000000000000")),
        (r.MaxUint256 = i.BigNumber.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )),
        (r.MinInt256 = i.BigNumber.from(
          "-0x8000000000000000000000000000000000000000000000000000000000000000",
        )),
        (r.MaxInt256 = i.BigNumber.from(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )));
    },
    1732: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.HashZero = void 0));
      r.HashZero =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    1733: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.EtherSymbol = void 0));
      r.EtherSymbol = "Ξ";
    },
    1734: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "properties/5.8.0";
    },
    1735: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.SigningKey = void 0),
        (r.computePublicKey = d),
        (r.recoverPublicKey = l));
      var i = e(1736),
        n = e(96),
        o = e(590),
        s = e(77),
        h = e(1737);
      const u = new s.Logger(h.version);
      let a = null;
      function f() {
        return (a || (a = new i.EC("secp256k1")), a);
      }
      class SigningKey {
        constructor(t) {
          ((0, o.defineReadOnly)(this, "curve", "secp256k1"),
            (0, o.defineReadOnly)(this, "privateKey", (0, n.hexlify)(t)),
            32 !== (0, n.hexDataLength)(this.privateKey) &&
              u.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]",
              ));
          const r = f().keyFromPrivate((0, n.arrayify)(this.privateKey));
          ((0, o.defineReadOnly)(
            this,
            "publicKey",
            "0x" + r.getPublic(!1, "hex"),
          ),
            (0, o.defineReadOnly)(
              this,
              "compressedPublicKey",
              "0x" + r.getPublic(!0, "hex"),
            ),
            (0, o.defineReadOnly)(this, "_isSigningKey", !0));
        }
        _addPoint(t) {
          const r = f().keyFromPublic((0, n.arrayify)(this.publicKey)),
            e = f().keyFromPublic((0, n.arrayify)(t));
          return "0x" + r.pub.add(e.pub).encodeCompressed("hex");
        }
        signDigest(t) {
          const r = f().keyFromPrivate((0, n.arrayify)(this.privateKey)),
            e = (0, n.arrayify)(t);
          32 !== e.length &&
            u.throwArgumentError("bad digest length", "digest", t);
          const i = r.sign(e, { canonical: !0 });
          return (0, n.splitSignature)({
            recoveryParam: i.recoveryParam,
            r: (0, n.hexZeroPad)("0x" + i.r.toString(16), 32),
            s: (0, n.hexZeroPad)("0x" + i.s.toString(16), 32),
          });
        }
        computeSharedSecret(t) {
          const r = f().keyFromPrivate((0, n.arrayify)(this.privateKey)),
            e = f().keyFromPublic((0, n.arrayify)(d(t)));
          return (0, n.hexZeroPad)(
            "0x" + r.derive(e.getPublic()).toString(16),
            32,
          );
        }
        static isSigningKey(t) {
          return !(!t || !t._isSigningKey);
        }
      }
      function l(t, r) {
        const e = (0, n.splitSignature)(r),
          i = { r: (0, n.arrayify)(e.r), s: (0, n.arrayify)(e.s) };
        return (
          "0x" +
          f()
            .recoverPubKey((0, n.arrayify)(t), i, e.recoveryParam)
            .encode("hex", !1)
        );
      }
      function d(t, r) {
        const e = (0, n.arrayify)(t);
        if (32 === e.length) {
          const t = new SigningKey(e);
          return r
            ? "0x" + f().keyFromPrivate(e).getPublic(!0, "hex")
            : t.publicKey;
        }
        return 33 === e.length
          ? r
            ? (0, n.hexlify)(e)
            : "0x" + f().keyFromPublic(e).getPublic(!1, "hex")
          : 65 === e.length
            ? r
              ? "0x" + f().keyFromPublic(e).getPublic(!0, "hex")
              : (0, n.hexlify)(e)
            : u.throwArgumentError(
                "invalid public or private key",
                "key",
                "[REDACTED]",
              );
      }
      r.SigningKey = SigningKey;
    },
    1736: function (t, r, e) {
      "use strict";
      (function (t) {
        var i = e(0);
        (Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.EC = void 0));
        var n = i(e(586)),
          o = i(e(43));
        "undefined" !== typeof globalThis
          ? globalThis
          : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof t || ("undefined" !== typeof self && self);
        function s(t, r, e) {
          return (
            (e = {
              path: r,
              exports: {},
              require: function (t, r) {
                return h(t, void 0 === r || null === r ? e.path : r);
              },
            }),
            t(e, e.exports),
            e.exports
          );
        }
        function h() {
          throw new Error(
            "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
          );
        }
        var u = a;
        function a(t, r) {
          if (!t) throw new Error(r || "Assertion failed");
        }
        a.equal = function (t, r, e) {
          if (t != r)
            throw new Error(e || "Assertion failed: " + t + " != " + r);
        };
        var f = s(function (t, r) {
            var e = r;
            function i(t, r) {
              if (Array.isArray(t)) return t.slice();
              if (!t) return [];
              var e = [];
              if ("string" !== typeof t) {
                for (var i = 0; i < t.length; i++) e[i] = 0 | t[i];
                return e;
              }
              if ("hex" === r) {
                ((t = t.replace(/[^a-z0-9]+/gi, "")),
                  t.length % 2 !== 0 && (t = "0" + t));
                for (i = 0; i < t.length; i += 2)
                  e.push(parseInt(t[i] + t[i + 1], 16));
              } else
                for (i = 0; i < t.length; i++) {
                  var n = t.charCodeAt(i),
                    o = n >> 8,
                    s = 255 & n;
                  o ? e.push(o, s) : e.push(s);
                }
              return e;
            }
            function n(t) {
              return 1 === t.length ? "0" + t : t;
            }
            function o(t) {
              for (var r = "", e = 0; e < t.length; e++)
                r += n(t[e].toString(16));
              return r;
            }
            ((e.toArray = i),
              (e.zero2 = n),
              (e.toHex = o),
              (e.encode = function (t, r) {
                return "hex" === r ? o(t) : t;
              }));
          }),
          l = s(function (t, r) {
            var e = r;
            function i(t, r, e) {
              var i,
                n = new Array(Math.max(t.bitLength(), e) + 1);
              for (i = 0; i < n.length; i += 1) n[i] = 0;
              var o = 1 << (r + 1),
                s = t.clone();
              for (i = 0; i < n.length; i++) {
                var h,
                  u = s.andln(o - 1);
                (s.isOdd()
                  ? ((h = u > (o >> 1) - 1 ? (o >> 1) - u : u), s.isubn(h))
                  : (h = 0),
                  (n[i] = h),
                  s.iushrn(1));
              }
              return n;
            }
            function o(t, r) {
              var e = [[], []];
              ((t = t.clone()), (r = r.clone()));
              var i,
                n = 0,
                o = 0;
              while (t.cmpn(-n) > 0 || r.cmpn(-o) > 0) {
                var s,
                  h,
                  u = (t.andln(3) + n) & 3,
                  a = (r.andln(3) + o) & 3;
                (3 === u && (u = -1),
                  3 === a && (a = -1),
                  0 === (1 & u)
                    ? (s = 0)
                    : ((i = (t.andln(7) + n) & 7),
                      (s = (3 !== i && 5 !== i) || 2 !== a ? u : -u)),
                  e[0].push(s),
                  0 === (1 & a)
                    ? (h = 0)
                    : ((i = (r.andln(7) + o) & 7),
                      (h = (3 !== i && 5 !== i) || 2 !== u ? a : -a)),
                  e[1].push(h),
                  2 * n === s + 1 && (n = 1 - n),
                  2 * o === h + 1 && (o = 1 - o),
                  t.iushrn(1),
                  r.iushrn(1));
              }
              return e;
            }
            function s(t, r, e) {
              var i = "_" + r;
              t.prototype[r] = function () {
                return void 0 !== this[i] ? this[i] : (this[i] = e.call(this));
              };
            }
            function h(t) {
              return "string" === typeof t ? e.toArray(t, "hex") : t;
            }
            function a(t) {
              return new n.default(t, "hex", "le");
            }
            ((e.assert = u),
              (e.toArray = f.toArray),
              (e.zero2 = f.zero2),
              (e.toHex = f.toHex),
              (e.encode = f.encode),
              (e.getNAF = i),
              (e.getJSF = o),
              (e.cachedProperty = s),
              (e.parseBytes = h),
              (e.intFromLE = a));
          }),
          d = l.getNAF,
          m = l.getJSF,
          c = l.assert;
        function g(t, r) {
          ((this.type = t),
            (this.p = new n.default(r.p, 16)),
            (this.red = r.prime
              ? n.default.red(r.prime)
              : n.default.mont(this.p)),
            (this.zero = new n.default(0).toRed(this.red)),
            (this.one = new n.default(1).toRed(this.red)),
            (this.two = new n.default(2).toRed(this.red)),
            (this.n = r.n && new n.default(r.n, 16)),
            (this.g = r.g && this.pointFromJSON(r.g, r.gRed)),
            (this._wnafT1 = new Array(4)),
            (this._wnafT2 = new Array(4)),
            (this._wnafT3 = new Array(4)),
            (this._wnafT4 = new Array(4)),
            (this._bitLength = this.n ? this.n.bitLength() : 0));
          var e = this.n && this.p.div(this.n);
          !e || e.cmpn(100) > 0
            ? (this.redN = null)
            : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
        }
        var p = g;
        function v(t, r) {
          ((this.curve = t), (this.type = r), (this.precomputed = null));
        }
        ((g.prototype.point = function () {
          throw new Error("Not implemented");
        }),
          (g.prototype.validate = function () {
            throw new Error("Not implemented");
          }),
          (g.prototype._fixedNafMul = function (t, r) {
            c(t.precomputed);
            var e = t._getDoubles(),
              i = d(r, 1, this._bitLength),
              n = (1 << (e.step + 1)) - (e.step % 2 === 0 ? 2 : 1);
            n /= 3;
            var o,
              s,
              h = [];
            for (o = 0; o < i.length; o += e.step) {
              s = 0;
              for (var u = o + e.step - 1; u >= o; u--) s = (s << 1) + i[u];
              h.push(s);
            }
            for (
              var a = this.jpoint(null, null, null),
                f = this.jpoint(null, null, null),
                l = n;
              l > 0;
              l--
            ) {
              for (o = 0; o < h.length; o++)
                ((s = h[o]),
                  s === l
                    ? (f = f.mixedAdd(e.points[o]))
                    : s === -l && (f = f.mixedAdd(e.points[o].neg())));
              a = a.add(f);
            }
            return a.toP();
          }),
          (g.prototype._wnafMul = function (t, r) {
            var e = 4,
              i = t._getNAFPoints(e);
            e = i.wnd;
            for (
              var n = i.points,
                o = d(r, e, this._bitLength),
                s = this.jpoint(null, null, null),
                h = o.length - 1;
              h >= 0;
              h--
            ) {
              for (var u = 0; h >= 0 && 0 === o[h]; h--) u++;
              if ((h >= 0 && u++, (s = s.dblp(u)), h < 0)) break;
              var a = o[h];
              (c(0 !== a),
                (s =
                  "affine" === t.type
                    ? a > 0
                      ? s.mixedAdd(n[(a - 1) >> 1])
                      : s.mixedAdd(n[(-a - 1) >> 1].neg())
                    : a > 0
                      ? s.add(n[(a - 1) >> 1])
                      : s.add(n[(-a - 1) >> 1].neg())));
            }
            return "affine" === t.type ? s.toP() : s;
          }),
          (g.prototype._wnafMulAdd = function (t, r, e, i, n) {
            var o,
              s,
              h,
              u = this._wnafT1,
              a = this._wnafT2,
              f = this._wnafT3,
              l = 0;
            for (o = 0; o < i; o++) {
              h = r[o];
              var c = h._getNAFPoints(t);
              ((u[o] = c.wnd), (a[o] = c.points));
            }
            for (o = i - 1; o >= 1; o -= 2) {
              var g = o - 1,
                p = o;
              if (1 === u[g] && 1 === u[p]) {
                var v = [r[g], null, null, r[p]];
                0 === r[g].y.cmp(r[p].y)
                  ? ((v[1] = r[g].add(r[p])),
                    (v[2] = r[g].toJ().mixedAdd(r[p].neg())))
                  : 0 === r[g].y.cmp(r[p].y.redNeg())
                    ? ((v[1] = r[g].toJ().mixedAdd(r[p])),
                      (v[2] = r[g].add(r[p].neg())))
                    : ((v[1] = r[g].toJ().mixedAdd(r[p])),
                      (v[2] = r[g].toJ().mixedAdd(r[p].neg())));
                var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                  w = m(e[g], e[p]);
                for (
                  l = Math.max(w[0].length, l),
                    f[g] = new Array(l),
                    f[p] = new Array(l),
                    s = 0;
                  s < l;
                  s++
                ) {
                  var b = 0 | w[0][s],
                    M = 0 | w[1][s];
                  ((f[g][s] = y[3 * (b + 1) + (M + 1)]),
                    (f[p][s] = 0),
                    (a[g] = v));
                }
              } else
                ((f[g] = d(e[g], u[g], this._bitLength)),
                  (f[p] = d(e[p], u[p], this._bitLength)),
                  (l = Math.max(f[g].length, l)),
                  (l = Math.max(f[p].length, l)));
            }
            var _ = this.jpoint(null, null, null),
              E = this._wnafT4;
            for (o = l; o >= 0; o--) {
              var N = 0;
              while (o >= 0) {
                var x = !0;
                for (s = 0; s < i; s++)
                  ((E[s] = 0 | f[s][o]), 0 !== E[s] && (x = !1));
                if (!x) break;
                (N++, o--);
              }
              if ((o >= 0 && N++, (_ = _.dblp(N)), o < 0)) break;
              for (s = 0; s < i; s++) {
                var A = E[s];
                0 !== A &&
                  (A > 0
                    ? (h = a[s][(A - 1) >> 1])
                    : A < 0 && (h = a[s][(-A - 1) >> 1].neg()),
                  (_ = "affine" === h.type ? _.mixedAdd(h) : _.add(h)));
              }
            }
            for (o = 0; o < i; o++) a[o] = null;
            return n ? _ : _.toP();
          }),
          (g.BasePoint = v),
          (v.prototype.eq = function () {
            throw new Error("Not implemented");
          }),
          (v.prototype.validate = function () {
            return this.curve.validate(this);
          }),
          (g.prototype.decodePoint = function (t, r) {
            t = l.toArray(t, r);
            var e = this.p.byteLength();
            if (
              (4 === t[0] || 6 === t[0] || 7 === t[0]) &&
              t.length - 1 === 2 * e
            ) {
              6 === t[0]
                ? c(t[t.length - 1] % 2 === 0)
                : 7 === t[0] && c(t[t.length - 1] % 2 === 1);
              var i = this.point(t.slice(1, 1 + e), t.slice(1 + e, 1 + 2 * e));
              return i;
            }
            if ((2 === t[0] || 3 === t[0]) && t.length - 1 === e)
              return this.pointFromX(t.slice(1, 1 + e), 3 === t[0]);
            throw new Error("Unknown point format");
          }),
          (v.prototype.encodeCompressed = function (t) {
            return this.encode(t, !0);
          }),
          (v.prototype._encode = function (t) {
            var r = this.curve.p.byteLength(),
              e = this.getX().toArray("be", r);
            return t
              ? [this.getY().isEven() ? 2 : 3].concat(e)
              : [4].concat(e, this.getY().toArray("be", r));
          }),
          (v.prototype.encode = function (t, r) {
            return l.encode(this._encode(r), t);
          }),
          (v.prototype.precompute = function (t) {
            if (this.precomputed) return this;
            var r = { doubles: null, naf: null, beta: null };
            return (
              (r.naf = this._getNAFPoints(8)),
              (r.doubles = this._getDoubles(4, t)),
              (r.beta = this._getBeta()),
              (this.precomputed = r),
              this
            );
          }),
          (v.prototype._hasDoubles = function (t) {
            if (!this.precomputed) return !1;
            var r = this.precomputed.doubles;
            return (
              !!r && r.points.length >= Math.ceil((t.bitLength() + 1) / r.step)
            );
          }),
          (v.prototype._getDoubles = function (t, r) {
            if (this.precomputed && this.precomputed.doubles)
              return this.precomputed.doubles;
            for (var e = [this], i = this, n = 0; n < r; n += t) {
              for (var o = 0; o < t; o++) i = i.dbl();
              e.push(i);
            }
            return { step: t, points: e };
          }),
          (v.prototype._getNAFPoints = function (t) {
            if (this.precomputed && this.precomputed.naf)
              return this.precomputed.naf;
            for (
              var r = [this],
                e = (1 << t) - 1,
                i = 1 === e ? null : this.dbl(),
                n = 1;
              n < e;
              n++
            )
              r[n] = r[n - 1].add(i);
            return { wnd: t, points: r };
          }),
          (v.prototype._getBeta = function () {
            return null;
          }),
          (v.prototype.dblp = function (t) {
            for (var r = this, e = 0; e < t; e++) r = r.dbl();
            return r;
          }));
        var y = s(function (t) {
            "function" === typeof Object.create
              ? (t.exports = function (t, r) {
                  r &&
                    ((t.super_ = r),
                    (t.prototype = Object.create(r.prototype, {
                      constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })));
                })
              : (t.exports = function (t, r) {
                  if (r) {
                    t.super_ = r;
                    var e = function () {};
                    ((e.prototype = r.prototype),
                      (t.prototype = new e()),
                      (t.prototype.constructor = t));
                  }
                });
          }),
          w = l.assert;
        function b(t) {
          (p.call(this, "short", t),
            (this.a = new n.default(t.a, 16).toRed(this.red)),
            (this.b = new n.default(t.b, 16).toRed(this.red)),
            (this.tinv = this.two.redInvm()),
            (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
            (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
            (this.endo = this._getEndomorphism(t)),
            (this._endoWnafT1 = new Array(4)),
            (this._endoWnafT2 = new Array(4)));
        }
        y(b, p);
        var M = b;
        function Point(t, r, e, i) {
          (p.BasePoint.call(this, t, "affine"),
            null === r && null === e
              ? ((this.x = null), (this.y = null), (this.inf = !0))
              : ((this.x = new n.default(r, 16)),
                (this.y = new n.default(e, 16)),
                i &&
                  (this.x.forceRed(this.curve.red),
                  this.y.forceRed(this.curve.red)),
                this.x.red || (this.x = this.x.toRed(this.curve.red)),
                this.y.red || (this.y = this.y.toRed(this.curve.red)),
                (this.inf = !1)));
        }
        function _(t, r, e, i) {
          (p.BasePoint.call(this, t, "jacobian"),
            null === r && null === e && null === i
              ? ((this.x = this.curve.one),
                (this.y = this.curve.one),
                (this.z = new n.default(0)))
              : ((this.x = new n.default(r, 16)),
                (this.y = new n.default(e, 16)),
                (this.z = new n.default(i, 16))),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            (this.zOne = this.z === this.curve.one));
        }
        ((b.prototype._getEndomorphism = function (t) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var r, e, i;
            if (t.beta) r = new n.default(t.beta, 16).toRed(this.red);
            else {
              var o = this._getEndoRoots(this.p);
              ((r = o[0].cmp(o[1]) < 0 ? o[0] : o[1]), (r = r.toRed(this.red)));
            }
            if (t.lambda) e = new n.default(t.lambda, 16);
            else {
              var s = this._getEndoRoots(this.n);
              0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(r))
                ? (e = s[0])
                : ((e = s[1]),
                  w(0 === this.g.mul(e).x.cmp(this.g.x.redMul(r))));
            }
            return (
              (i = t.basis
                ? t.basis.map(function (t) {
                    return {
                      a: new n.default(t.a, 16),
                      b: new n.default(t.b, 16),
                    };
                  })
                : this._getEndoBasis(e)),
              { beta: r, lambda: e, basis: i }
            );
          }
        }),
          (b.prototype._getEndoRoots = function (t) {
            var r = t === this.p ? this.red : n.default.mont(t),
              e = new n.default(2).toRed(r).redInvm(),
              i = e.redNeg(),
              o = new n.default(3).toRed(r).redNeg().redSqrt().redMul(e),
              s = i.redAdd(o).fromRed(),
              h = i.redSub(o).fromRed();
            return [s, h];
          }),
          (b.prototype._getEndoBasis = function (t) {
            var r,
              e,
              i,
              o,
              s,
              h,
              u,
              a,
              f,
              l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              d = t,
              m = this.n.clone(),
              c = new n.default(1),
              g = new n.default(0),
              p = new n.default(0),
              v = new n.default(1),
              y = 0;
            while (0 !== d.cmpn(0)) {
              var w = m.div(d);
              ((a = m.sub(w.mul(d))), (f = p.sub(w.mul(c))));
              var b = v.sub(w.mul(g));
              if (!i && a.cmp(l) < 0)
                ((r = u.neg()), (e = c), (i = a.neg()), (o = f));
              else if (i && 2 === ++y) break;
              ((u = a), (m = d), (d = a), (p = c), (c = f), (v = g), (g = b));
            }
            ((s = a.neg()), (h = f));
            var M = i.sqr().add(o.sqr()),
              _ = s.sqr().add(h.sqr());
            return (
              _.cmp(M) >= 0 && ((s = r), (h = e)),
              i.negative && ((i = i.neg()), (o = o.neg())),
              s.negative && ((s = s.neg()), (h = h.neg())),
              [
                { a: i, b: o },
                { a: s, b: h },
              ]
            );
          }),
          (b.prototype._endoSplit = function (t) {
            var r = this.endo.basis,
              e = r[0],
              i = r[1],
              n = i.b.mul(t).divRound(this.n),
              o = e.b.neg().mul(t).divRound(this.n),
              s = n.mul(e.a),
              h = o.mul(i.a),
              u = n.mul(e.b),
              a = o.mul(i.b),
              f = t.sub(s).sub(h),
              l = u.add(a).neg();
            return { k1: f, k2: l };
          }),
          (b.prototype.pointFromX = function (t, r) {
            ((t = new n.default(t, 16)), t.red || (t = t.toRed(this.red)));
            var e = t
                .redSqr()
                .redMul(t)
                .redIAdd(t.redMul(this.a))
                .redIAdd(this.b),
              i = e.redSqrt();
            if (0 !== i.redSqr().redSub(e).cmp(this.zero))
              throw new Error("invalid point");
            var o = i.fromRed().isOdd();
            return (
              ((r && !o) || (!r && o)) && (i = i.redNeg()),
              this.point(t, i)
            );
          }),
          (b.prototype.validate = function (t) {
            if (t.inf) return !0;
            var r = t.x,
              e = t.y,
              i = this.a.redMul(r),
              n = r.redSqr().redMul(r).redIAdd(i).redIAdd(this.b);
            return 0 === e.redSqr().redISub(n).cmpn(0);
          }),
          (b.prototype._endoWnafMulAdd = function (t, r, e) {
            for (
              var i = this._endoWnafT1, n = this._endoWnafT2, o = 0;
              o < t.length;
              o++
            ) {
              var s = this._endoSplit(r[o]),
                h = t[o],
                u = h._getBeta();
              (s.k1.negative && (s.k1.ineg(), (h = h.neg(!0))),
                s.k2.negative && (s.k2.ineg(), (u = u.neg(!0))),
                (i[2 * o] = h),
                (i[2 * o + 1] = u),
                (n[2 * o] = s.k1),
                (n[2 * o + 1] = s.k2));
            }
            for (
              var a = this._wnafMulAdd(1, i, n, 2 * o, e), f = 0;
              f < 2 * o;
              f++
            )
              ((i[f] = null), (n[f] = null));
            return a;
          }),
          y(Point, p.BasePoint),
          (b.prototype.point = function (t, r, e) {
            return new Point(this, t, r, e);
          }),
          (b.prototype.pointFromJSON = function (t, r) {
            return Point.fromJSON(this, t, r);
          }),
          (Point.prototype._getBeta = function () {
            if (this.curve.endo) {
              var t = this.precomputed;
              if (t && t.beta) return t.beta;
              var r = this.curve.point(
                this.x.redMul(this.curve.endo.beta),
                this.y,
              );
              if (t) {
                var e = this.curve,
                  i = function (t) {
                    return e.point(t.x.redMul(e.endo.beta), t.y);
                  };
                ((t.beta = r),
                  (r.precomputed = {
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
              return r;
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
          (Point.fromJSON = function (t, r, e) {
            "string" === typeof r && (r = JSON.parse(r));
            var i = t.point(r[0], r[1], e);
            if (!r[2]) return i;
            function n(r) {
              return t.point(r[0], r[1], e);
            }
            var o = r[2];
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
            var r = this.y.redSub(t.y);
            0 !== r.cmpn(0) && (r = r.redMul(this.x.redSub(t.x).redInvm()));
            var e = r.redSqr().redISub(this.x).redISub(t.x),
              i = r.redMul(this.x.redSub(e)).redISub(this.y);
            return this.curve.point(e, i);
          }),
          (Point.prototype.dbl = function () {
            if (this.inf) return this;
            var t = this.y.redAdd(this.y);
            if (0 === t.cmpn(0)) return this.curve.point(null, null);
            var r = this.curve.a,
              e = this.x.redSqr(),
              i = t.redInvm(),
              n = e.redAdd(e).redIAdd(e).redIAdd(r).redMul(i),
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
          (Point.prototype.mulAdd = function (t, r, e) {
            var i = [this, r],
              n = [t, e];
            return this.curve.endo
              ? this.curve._endoWnafMulAdd(i, n)
              : this.curve._wnafMulAdd(1, i, n, 2);
          }),
          (Point.prototype.jmulAdd = function (t, r, e) {
            var i = [this, r],
              n = [t, e];
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
            var r = this.curve.point(this.x, this.y.redNeg());
            if (t && this.precomputed) {
              var e = this.precomputed,
                i = function (t) {
                  return t.neg();
                };
              r.precomputed = {
                naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(i) },
                doubles: e.doubles && {
                  step: e.doubles.step,
                  points: e.doubles.points.map(i),
                },
              };
            }
            return r;
          }),
          (Point.prototype.toJ = function () {
            if (this.inf) return this.curve.jpoint(null, null, null);
            var t = this.curve.jpoint(this.x, this.y, this.curve.one);
            return t;
          }),
          y(_, p.BasePoint),
          (b.prototype.jpoint = function (t, r, e) {
            return new _(this, t, r, e);
          }),
          (_.prototype.toP = function () {
            if (this.isInfinity()) return this.curve.point(null, null);
            var t = this.z.redInvm(),
              r = t.redSqr(),
              e = this.x.redMul(r),
              i = this.y.redMul(r).redMul(t);
            return this.curve.point(e, i);
          }),
          (_.prototype.neg = function () {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
          }),
          (_.prototype.add = function (t) {
            if (this.isInfinity()) return t;
            if (t.isInfinity()) return this;
            var r = t.z.redSqr(),
              e = this.z.redSqr(),
              i = this.x.redMul(r),
              n = t.x.redMul(e),
              o = this.y.redMul(r.redMul(t.z)),
              s = t.y.redMul(e.redMul(this.z)),
              h = i.redSub(n),
              u = o.redSub(s);
            if (0 === h.cmpn(0))
              return 0 !== u.cmpn(0)
                ? this.curve.jpoint(null, null, null)
                : this.dbl();
            var a = h.redSqr(),
              f = a.redMul(h),
              l = i.redMul(a),
              d = u.redSqr().redIAdd(f).redISub(l).redISub(l),
              m = u.redMul(l.redISub(d)).redISub(o.redMul(f)),
              c = this.z.redMul(t.z).redMul(h);
            return this.curve.jpoint(d, m, c);
          }),
          (_.prototype.mixedAdd = function (t) {
            if (this.isInfinity()) return t.toJ();
            if (t.isInfinity()) return this;
            var r = this.z.redSqr(),
              e = this.x,
              i = t.x.redMul(r),
              n = this.y,
              o = t.y.redMul(r).redMul(this.z),
              s = e.redSub(i),
              h = n.redSub(o);
            if (0 === s.cmpn(0))
              return 0 !== h.cmpn(0)
                ? this.curve.jpoint(null, null, null)
                : this.dbl();
            var u = s.redSqr(),
              a = u.redMul(s),
              f = e.redMul(u),
              l = h.redSqr().redIAdd(a).redISub(f).redISub(f),
              d = h.redMul(f.redISub(l)).redISub(n.redMul(a)),
              m = this.z.redMul(s);
            return this.curve.jpoint(l, d, m);
          }),
          (_.prototype.dblp = function (t) {
            if (0 === t) return this;
            if (this.isInfinity()) return this;
            if (!t) return this.dbl();
            var r;
            if (this.curve.zeroA || this.curve.threeA) {
              var e = this;
              for (r = 0; r < t; r++) e = e.dbl();
              return e;
            }
            var i = this.curve.a,
              n = this.curve.tinv,
              o = this.x,
              s = this.y,
              h = this.z,
              u = h.redSqr().redSqr(),
              a = s.redAdd(s);
            for (r = 0; r < t; r++) {
              var f = o.redSqr(),
                l = a.redSqr(),
                d = l.redSqr(),
                m = f.redAdd(f).redIAdd(f).redIAdd(i.redMul(u)),
                c = o.redMul(l),
                g = m.redSqr().redISub(c.redAdd(c)),
                p = c.redISub(g),
                v = m.redMul(p);
              v = v.redIAdd(v).redISub(d);
              var y = a.redMul(h);
              (r + 1 < t && (u = u.redMul(d)), (o = g), (h = y), (a = v));
            }
            return this.curve.jpoint(o, a.redMul(n), h);
          }),
          (_.prototype.dbl = function () {
            return this.isInfinity()
              ? this
              : this.curve.zeroA
                ? this._zeroDbl()
                : this.curve.threeA
                  ? this._threeDbl()
                  : this._dbl();
          }),
          (_.prototype._zeroDbl = function () {
            var t, r, e;
            if (this.zOne) {
              var i = this.x.redSqr(),
                n = this.y.redSqr(),
                o = n.redSqr(),
                s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
              s = s.redIAdd(s);
              var h = i.redAdd(i).redIAdd(i),
                u = h.redSqr().redISub(s).redISub(s),
                a = o.redIAdd(o);
              ((a = a.redIAdd(a)),
                (a = a.redIAdd(a)),
                (t = u),
                (r = h.redMul(s.redISub(u)).redISub(a)),
                (e = this.y.redAdd(this.y)));
            } else {
              var f = this.x.redSqr(),
                l = this.y.redSqr(),
                d = l.redSqr(),
                m = this.x.redAdd(l).redSqr().redISub(f).redISub(d);
              m = m.redIAdd(m);
              var c = f.redAdd(f).redIAdd(f),
                g = c.redSqr(),
                p = d.redIAdd(d);
              ((p = p.redIAdd(p)),
                (p = p.redIAdd(p)),
                (t = g.redISub(m).redISub(m)),
                (r = c.redMul(m.redISub(t)).redISub(p)),
                (e = this.y.redMul(this.z)),
                (e = e.redIAdd(e)));
            }
            return this.curve.jpoint(t, r, e);
          }),
          (_.prototype._threeDbl = function () {
            var t, r, e;
            if (this.zOne) {
              var i = this.x.redSqr(),
                n = this.y.redSqr(),
                o = n.redSqr(),
                s = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
              s = s.redIAdd(s);
              var h = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
                u = h.redSqr().redISub(s).redISub(s);
              t = u;
              var a = o.redIAdd(o);
              ((a = a.redIAdd(a)),
                (a = a.redIAdd(a)),
                (r = h.redMul(s.redISub(u)).redISub(a)),
                (e = this.y.redAdd(this.y)));
            } else {
              var f = this.z.redSqr(),
                l = this.y.redSqr(),
                d = this.x.redMul(l),
                m = this.x.redSub(f).redMul(this.x.redAdd(f));
              m = m.redAdd(m).redIAdd(m);
              var c = d.redIAdd(d);
              c = c.redIAdd(c);
              var g = c.redAdd(c);
              ((t = m.redSqr().redISub(g)),
                (e = this.y.redAdd(this.z).redSqr().redISub(l).redISub(f)));
              var p = l.redSqr();
              ((p = p.redIAdd(p)),
                (p = p.redIAdd(p)),
                (p = p.redIAdd(p)),
                (r = m.redMul(c.redISub(t)).redISub(p)));
            }
            return this.curve.jpoint(t, r, e);
          }),
          (_.prototype._dbl = function () {
            var t = this.curve.a,
              r = this.x,
              e = this.y,
              i = this.z,
              n = i.redSqr().redSqr(),
              o = r.redSqr(),
              s = e.redSqr(),
              h = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(n)),
              u = r.redAdd(r);
            u = u.redIAdd(u);
            var a = u.redMul(s),
              f = h.redSqr().redISub(a.redAdd(a)),
              l = a.redISub(f),
              d = s.redSqr();
            ((d = d.redIAdd(d)), (d = d.redIAdd(d)), (d = d.redIAdd(d)));
            var m = h.redMul(l).redISub(d),
              c = e.redAdd(e).redMul(i);
            return this.curve.jpoint(f, m, c);
          }),
          (_.prototype.trpl = function () {
            if (!this.curve.zeroA) return this.dbl().add(this);
            var t = this.x.redSqr(),
              r = this.y.redSqr(),
              e = this.z.redSqr(),
              i = r.redSqr(),
              n = t.redAdd(t).redIAdd(t),
              o = n.redSqr(),
              s = this.x.redAdd(r).redSqr().redISub(t).redISub(i);
            ((s = s.redIAdd(s)),
              (s = s.redAdd(s).redIAdd(s)),
              (s = s.redISub(o)));
            var h = s.redSqr(),
              u = i.redIAdd(i);
            ((u = u.redIAdd(u)), (u = u.redIAdd(u)), (u = u.redIAdd(u)));
            var a = n.redIAdd(s).redSqr().redISub(o).redISub(h).redISub(u),
              f = r.redMul(a);
            ((f = f.redIAdd(f)), (f = f.redIAdd(f)));
            var l = this.x.redMul(h).redISub(f);
            ((l = l.redIAdd(l)), (l = l.redIAdd(l)));
            var d = this.y.redMul(a.redMul(u.redISub(a)).redISub(s.redMul(h)));
            ((d = d.redIAdd(d)), (d = d.redIAdd(d)), (d = d.redIAdd(d)));
            var m = this.z.redAdd(s).redSqr().redISub(e).redISub(h);
            return this.curve.jpoint(l, d, m);
          }),
          (_.prototype.mul = function (t, r) {
            return ((t = new n.default(t, r)), this.curve._wnafMul(this, t));
          }),
          (_.prototype.eq = function (t) {
            if ("affine" === t.type) return this.eq(t.toJ());
            if (this === t) return !0;
            var r = this.z.redSqr(),
              e = t.z.redSqr();
            if (0 !== this.x.redMul(e).redISub(t.x.redMul(r)).cmpn(0))
              return !1;
            var i = r.redMul(this.z),
              n = e.redMul(t.z);
            return 0 === this.y.redMul(n).redISub(t.y.redMul(i)).cmpn(0);
          }),
          (_.prototype.eqXToP = function (t) {
            var r = this.z.redSqr(),
              e = t.toRed(this.curve.red).redMul(r);
            if (0 === this.x.cmp(e)) return !0;
            for (var i = t.clone(), n = this.curve.redN.redMul(r); ; ) {
              if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
              if ((e.redIAdd(n), 0 === this.x.cmp(e))) return !0;
            }
          }),
          (_.prototype.inspect = function () {
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
          (_.prototype.isInfinity = function () {
            return 0 === this.z.cmpn(0);
          }));
        var E = s(function (t, r) {
            var e = r;
            ((e.base = p), (e.short = M), (e.mont = null), (e.edwards = null));
          }),
          N = s(function (t, r) {
            var e,
              i = r,
              n = l.assert;
            function s(t) {
              ("short" === t.type
                ? (this.curve = new E.short(t))
                : "edwards" === t.type
                  ? (this.curve = new E.edwards(t))
                  : (this.curve = new E.mont(t)),
                (this.g = this.curve.g),
                (this.n = this.curve.n),
                (this.hash = t.hash),
                n(this.g.validate(), "Invalid curve"),
                n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O"));
            }
            function h(t, r) {
              Object.defineProperty(i, t, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  var e = new s(r);
                  return (
                    Object.defineProperty(i, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: e,
                    }),
                    e
                  );
                },
              });
            }
            ((i.PresetCurve = s),
              h("p192", {
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
              h("p224", {
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
              h("p256", {
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
              h("p384", {
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
              h("p521", {
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
              h("curve25519", {
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
              h("ed25519", {
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
              e = null.crash();
            } catch (u) {
              e = void 0;
            }
            h("secp256k1", {
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
                e,
              ],
            });
          });
        function x(t) {
          if (!(this instanceof x)) return new x(t);
          ((this.hash = t.hash),
            (this.predResist = !!t.predResist),
            (this.outLen = this.hash.outSize),
            (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
            (this._reseed = null),
            (this.reseedInterval = null),
            (this.K = null),
            (this.V = null));
          var r = f.toArray(t.entropy, t.entropyEnc || "hex"),
            e = f.toArray(t.nonce, t.nonceEnc || "hex"),
            i = f.toArray(t.pers, t.persEnc || "hex");
          (u(
            r.length >= this.minEntropy / 8,
            "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
          ),
            this._init(r, e, i));
        }
        var A = x;
        ((x.prototype._init = function (t, r, e) {
          var i = t.concat(r).concat(e);
          ((this.K = new Array(this.outLen / 8)),
            (this.V = new Array(this.outLen / 8)));
          for (var n = 0; n < this.V.length; n++)
            ((this.K[n] = 0), (this.V[n] = 1));
          (this._update(i),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656));
        }),
          (x.prototype._hmac = function () {
            return new o.default.hmac(this.hash, this.K);
          }),
          (x.prototype._update = function (t) {
            var r = this._hmac().update(this.V).update([0]);
            (t && (r = r.update(t)),
              (this.K = r.digest()),
              (this.V = this._hmac().update(this.V).digest()),
              t &&
                ((this.K = this._hmac()
                  .update(this.V)
                  .update([1])
                  .update(t)
                  .digest()),
                (this.V = this._hmac().update(this.V).digest())));
          }),
          (x.prototype.reseed = function (t, r, e, i) {
            ("string" !== typeof r && ((i = e), (e = r), (r = null)),
              (t = f.toArray(t, r)),
              (e = f.toArray(e, i)),
              u(
                t.length >= this.minEntropy / 8,
                "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
              ),
              this._update(t.concat(e || [])),
              (this._reseed = 1));
          }),
          (x.prototype.generate = function (t, r, e, i) {
            if (this._reseed > this.reseedInterval)
              throw new Error("Reseed is required");
            ("string" !== typeof r && ((i = e), (e = r), (r = null)),
              e && ((e = f.toArray(e, i || "hex")), this._update(e)));
            var n = [];
            while (n.length < t)
              ((this.V = this._hmac().update(this.V).digest()),
                (n = n.concat(this.V)));
            var o = n.slice(0, t);
            return (this._update(e), this._reseed++, f.encode(o, r));
          }));
        var S = l.assert;
        function I(t, r) {
          ((this.ec = t),
            (this.priv = null),
            (this.pub = null),
            r.priv && this._importPrivate(r.priv, r.privEnc),
            r.pub && this._importPublic(r.pub, r.pubEnc));
        }
        var P = I;
        ((I.fromPublic = function (t, r, e) {
          return r instanceof I ? r : new I(t, { pub: r, pubEnc: e });
        }),
          (I.fromPrivate = function (t, r, e) {
            return r instanceof I ? r : new I(t, { priv: r, privEnc: e });
          }),
          (I.prototype.validate = function () {
            var t = this.getPublic();
            return t.isInfinity()
              ? { result: !1, reason: "Invalid public key" }
              : t.validate()
                ? t.mul(this.ec.curve.n).isInfinity()
                  ? { result: !0, reason: null }
                  : { result: !1, reason: "Public key * N != O" }
                : { result: !1, reason: "Public key is not a point" };
          }),
          (I.prototype.getPublic = function (t, r) {
            return (
              "string" === typeof t && ((r = t), (t = null)),
              this.pub || (this.pub = this.ec.g.mul(this.priv)),
              r ? this.pub.encode(r, t) : this.pub
            );
          }),
          (I.prototype.getPrivate = function (t) {
            return "hex" === t ? this.priv.toString(16, 2) : this.priv;
          }),
          (I.prototype._importPrivate = function (t, r) {
            ((this.priv = new n.default(t, r || 16)),
              (this.priv = this.priv.umod(this.ec.curve.n)));
          }),
          (I.prototype._importPublic = function (t, r) {
            if (t.x || t.y)
              return (
                "mont" === this.ec.curve.type
                  ? S(t.x, "Need x coordinate")
                  : ("short" !== this.ec.curve.type &&
                      "edwards" !== this.ec.curve.type) ||
                    S(t.x && t.y, "Need both x and y coordinate"),
                void (this.pub = this.ec.curve.point(t.x, t.y))
              );
            this.pub = this.ec.curve.decodePoint(t, r);
          }),
          (I.prototype.derive = function (t) {
            return (
              t.validate() || S(t.validate(), "public point not validated"),
              t.mul(this.priv).getX()
            );
          }),
          (I.prototype.sign = function (t, r, e) {
            return this.ec.sign(t, this, r, e);
          }),
          (I.prototype.verify = function (t, r, e) {
            return this.ec.verify(t, r, this, void 0, e);
          }),
          (I.prototype.inspect = function () {
            return (
              "<Key priv: " +
              (this.priv && this.priv.toString(16, 2)) +
              " pub: " +
              (this.pub && this.pub.inspect()) +
              " >"
            );
          }));
        var R = l.assert;
        function O(t, r) {
          if (t instanceof O) return t;
          this._importDER(t, r) ||
            (R(t.r && t.s, "Signature without r or s"),
            (this.r = new n.default(t.r, 16)),
            (this.s = new n.default(t.s, 16)),
            void 0 === t.recoveryParam
              ? (this.recoveryParam = null)
              : (this.recoveryParam = t.recoveryParam));
        }
        var F = O;
        function L() {
          this.place = 0;
        }
        function T(t, r) {
          var e = t[r.place++];
          if (!(128 & e)) return e;
          var i = 15 & e;
          if (0 === i || i > 4) return !1;
          if (0 === t[r.place]) return !1;
          for (var n = 0, o = 0, s = r.place; o < i; o++, s++)
            ((n <<= 8), (n |= t[s]), (n >>>= 0));
          return !(n <= 127) && ((r.place = s), n);
        }
        function U(t) {
          var r = 0,
            e = t.length - 1;
          while (!t[r] && !(128 & t[r + 1]) && r < e) r++;
          return 0 === r ? t : t.slice(r);
        }
        function k(t, r) {
          if (r < 128) t.push(r);
          else {
            var e = 1 + ((Math.log(r) / Math.LN2) >>> 3);
            t.push(128 | e);
            while (--e) t.push((r >>> (e << 3)) & 255);
            t.push(r);
          }
        }
        ((O.prototype._importDER = function (t, r) {
          t = l.toArray(t, r);
          var e = new L();
          if (48 !== t[e.place++]) return !1;
          var i = T(t, e);
          if (!1 === i) return !1;
          if (i + e.place !== t.length) return !1;
          if (2 !== t[e.place++]) return !1;
          var o = T(t, e);
          if (!1 === o) return !1;
          if (0 !== (128 & t[e.place])) return !1;
          var s = t.slice(e.place, o + e.place);
          if (((e.place += o), 2 !== t[e.place++])) return !1;
          var h = T(t, e);
          if (!1 === h) return !1;
          if (t.length !== h + e.place) return !1;
          if (0 !== (128 & t[e.place])) return !1;
          var u = t.slice(e.place, h + e.place);
          if (0 === s[0]) {
            if (!(128 & s[1])) return !1;
            s = s.slice(1);
          }
          if (0 === u[0]) {
            if (!(128 & u[1])) return !1;
            u = u.slice(1);
          }
          return (
            (this.r = new n.default(s)),
            (this.s = new n.default(u)),
            (this.recoveryParam = null),
            !0
          );
        }),
          (O.prototype.toDER = function (t) {
            var r = this.r.toArray(),
              e = this.s.toArray();
            (128 & r[0] && (r = [0].concat(r)),
              128 & e[0] && (e = [0].concat(e)),
              (r = U(r)),
              (e = U(e)));
            while (!e[0] && !(128 & e[1])) e = e.slice(1);
            var i = [2];
            (k(i, r.length), (i = i.concat(r)), i.push(2), k(i, e.length));
            var n = i.concat(e),
              o = [48];
            return (k(o, n.length), (o = o.concat(n)), l.encode(o, t));
          }));
        var B = function () {
            throw new Error("unsupported");
          },
          C = l.assert;
        function j(t) {
          if (!(this instanceof j)) return new j(t);
          ("string" === typeof t &&
            (C(
              Object.prototype.hasOwnProperty.call(N, t),
              "Unknown curve " + t,
            ),
            (t = N[t])),
            t instanceof N.PresetCurve && (t = { curve: t }),
            (this.curve = t.curve.curve),
            (this.n = this.curve.n),
            (this.nh = this.n.ushrn(1)),
            (this.g = this.curve.g),
            (this.g = t.curve.g),
            this.g.precompute(t.curve.n.bitLength() + 1),
            (this.hash = t.hash || t.curve.hash));
        }
        var q = j;
        ((j.prototype.keyPair = function (t) {
          return new P(this, t);
        }),
          (j.prototype.keyFromPrivate = function (t, r) {
            return P.fromPrivate(this, t, r);
          }),
          (j.prototype.keyFromPublic = function (t, r) {
            return P.fromPublic(this, t, r);
          }),
          (j.prototype.genKeyPair = function (t) {
            t || (t = {});
            for (
              var r = new A({
                  hash: this.hash,
                  pers: t.pers,
                  persEnc: t.persEnc || "utf8",
                  entropy: t.entropy || B(this.hash.hmacStrength),
                  entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                  nonce: this.n.toArray(),
                }),
                e = this.n.byteLength(),
                i = this.n.sub(new n.default(2));
              ;
            ) {
              var o = new n.default(r.generate(e));
              if (!(o.cmp(i) > 0)) return (o.iaddn(1), this.keyFromPrivate(o));
            }
          }),
          (j.prototype._truncateToN = function (t, r, e) {
            var i;
            if (n.default.isBN(t) || "number" === typeof t)
              ((t = new n.default(t, 16)), (i = t.byteLength()));
            else if ("object" === typeof t)
              ((i = t.length), (t = new n.default(t, 16)));
            else {
              var o = t.toString();
              ((i = (o.length + 1) >>> 1), (t = new n.default(o, 16)));
            }
            "number" !== typeof e && (e = 8 * i);
            var s = e - this.n.bitLength();
            return (
              s > 0 && (t = t.ushrn(s)),
              !r && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            );
          }),
          (j.prototype.sign = function (t, r, e, i) {
            if (
              ("object" === typeof e && ((i = e), (e = null)),
              i || (i = {}),
              "string" !== typeof t &&
                "number" !== typeof t &&
                !n.default.isBN(t))
            ) {
              (C(
                "object" === typeof t && t && "number" === typeof t.length,
                "Expected message to be an array-like, a hex string, or a BN instance",
              ),
                C(t.length >>> 0 === t.length));
              for (var o = 0; o < t.length; o++) C((255 & t[o]) === t[o]);
            }
            ((r = this.keyFromPrivate(r, e)),
              (t = this._truncateToN(t, !1, i.msgBitLength)),
              C(!t.isNeg(), "Can not sign a negative message"));
            var s = this.n.byteLength(),
              h = r.getPrivate().toArray("be", s),
              u = t.toArray("be", s);
            C(new n.default(u).eq(t), "Can not sign message");
            for (
              var a = new A({
                  hash: this.hash,
                  entropy: h,
                  nonce: u,
                  pers: i.pers,
                  persEnc: i.persEnc || "utf8",
                }),
                f = this.n.sub(new n.default(1)),
                l = 0;
              ;
              l++
            ) {
              var d = i.k
                ? i.k(l)
                : new n.default(a.generate(this.n.byteLength()));
              if (
                ((d = this._truncateToN(d, !0)),
                !(d.cmpn(1) <= 0 || d.cmp(f) >= 0))
              ) {
                var m = this.g.mul(d);
                if (!m.isInfinity()) {
                  var c = m.getX(),
                    g = c.umod(this.n);
                  if (0 !== g.cmpn(0)) {
                    var p = d.invm(this.n).mul(g.mul(r.getPrivate()).iadd(t));
                    if (((p = p.umod(this.n)), 0 !== p.cmpn(0))) {
                      var v =
                        (m.getY().isOdd() ? 1 : 0) | (0 !== c.cmp(g) ? 2 : 0);
                      return (
                        i.canonical &&
                          p.cmp(this.nh) > 0 &&
                          ((p = this.n.sub(p)), (v ^= 1)),
                        new F({ r: g, s: p, recoveryParam: v })
                      );
                    }
                  }
                }
              }
            }
          }),
          (j.prototype.verify = function (t, r, e, i, n) {
            (n || (n = {}),
              (t = this._truncateToN(t, !1, n.msgBitLength)),
              (e = this.keyFromPublic(e, i)),
              (r = new F(r, "hex")));
            var o = r.r,
              s = r.s;
            if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
            if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
            var h,
              u = s.invm(this.n),
              a = u.mul(t).umod(this.n),
              f = u.mul(o).umod(this.n);
            return this.curve._maxwellTrick
              ? ((h = this.g.jmulAdd(a, e.getPublic(), f)),
                !h.isInfinity() && h.eqXToP(o))
              : ((h = this.g.mulAdd(a, e.getPublic(), f)),
                !h.isInfinity() && 0 === h.getX().umod(this.n).cmp(o));
          }),
          (j.prototype.recoverPubKey = function (t, r, e, i) {
            (C((3 & e) === e, "The recovery param is more than two bits"),
              (r = new F(r, i)));
            var o = this.n,
              s = new n.default(t),
              h = r.r,
              u = r.s,
              a = 1 & e,
              f = e >> 1;
            if (h.cmp(this.curve.p.umod(this.curve.n)) >= 0 && f)
              throw new Error("Unable to find sencond key candinate");
            h = f
              ? this.curve.pointFromX(h.add(this.curve.n), a)
              : this.curve.pointFromX(h, a);
            var l = r.r.invm(o),
              d = o.sub(s).mul(l).umod(o),
              m = u.mul(l).umod(o);
            return this.g.mulAdd(d, h, m);
          }),
          (j.prototype.getKeyRecoveryParam = function (t, r, e, i) {
            if (((r = new F(r, i)), null !== r.recoveryParam))
              return r.recoveryParam;
            for (var n = 0; n < 4; n++) {
              var o;
              try {
                o = this.recoverPubKey(t, r, n);
              } catch (t) {
                continue;
              }
              if (o.eq(e)) return n;
            }
            throw new Error("Unable to find valid recovery factor");
          }));
        var D = s(function (t, r) {
          var e = r;
          ((e.version = { version: "6.6.1" }.version),
            (e.utils = l),
            (e.rand = function () {
              throw new Error("unsupported");
            }),
            (e.curve = E),
            (e.curves = N),
            (e.ec = q),
            (e.eddsa = null));
        });
        r.EC = D.ec;
      }).call(this, e(13));
    },
    1737: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "signing-key/5.8.0";
    },
    1739: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.commify = u),
        (r.formatEther = l),
        (r.formatUnits = a),
        (r.parseEther = d),
        (r.parseUnits = f));
      var i = e(1740),
        n = e(179),
        o = e(1746);
      const s = new n.Logger(o.version),
        h = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
      function u(t) {
        const r = String(t).split(".");
        (r.length > 2 ||
          !r[0].match(/^-?[0-9]*$/) ||
          (r[1] && !r[1].match(/^[0-9]*$/)) ||
          "." === t ||
          "-." === t) &&
          s.throwArgumentError("invalid value", "value", t);
        let e = r[0],
          i = "";
        "-" === e.substring(0, 1) && ((i = "-"), (e = e.substring(1)));
        while ("0" === e.substring(0, 1)) e = e.substring(1);
        "" === e && (e = "0");
        let n = "";
        2 === r.length && (n = "." + (r[1] || "0"));
        while (n.length > 2 && "0" === n[n.length - 1])
          n = n.substring(0, n.length - 1);
        const o = [];
        while (e.length) {
          if (e.length <= 3) {
            o.unshift(e);
            break;
          }
          {
            const t = e.length - 3;
            (o.unshift(e.substring(t)), (e = e.substring(0, t)));
          }
        }
        return i + o.join(",") + n;
      }
      function a(t, r) {
        if ("string" === typeof r) {
          const t = h.indexOf(r);
          -1 !== t && (r = 3 * t);
        }
        return (0, i.formatFixed)(t, null != r ? r : 18);
      }
      function f(t, r) {
        if (
          ("string" !== typeof t &&
            s.throwArgumentError("value must be a string", "value", t),
          "string" === typeof r)
        ) {
          const t = h.indexOf(r);
          -1 !== t && (r = 3 * t);
        }
        return (0, i.parseFixed)(t, null != r ? r : 18);
      }
      function l(t) {
        return a(t, 18);
      }
      function d(t) {
        return f(t, 18);
      }
    },
    1740: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "BigNumber", {
          enumerable: !0,
          get: function () {
            return i.BigNumber;
          },
        }),
        Object.defineProperty(r, "FixedFormat", {
          enumerable: !0,
          get: function () {
            return n.FixedFormat;
          },
        }),
        Object.defineProperty(r, "FixedNumber", {
          enumerable: !0,
          get: function () {
            return n.FixedNumber;
          },
        }),
        Object.defineProperty(r, "_base16To36", {
          enumerable: !0,
          get: function () {
            return i._base16To36;
          },
        }),
        Object.defineProperty(r, "_base36To16", {
          enumerable: !0,
          get: function () {
            return i._base36To16;
          },
        }),
        Object.defineProperty(r, "formatFixed", {
          enumerable: !0,
          get: function () {
            return n.formatFixed;
          },
        }),
        Object.defineProperty(r, "parseFixed", {
          enumerable: !0,
          get: function () {
            return n.parseFixed;
          },
        }));
      var i = e(591),
        n = e(1745);
    },
    1741: function (t, r, e) {
      (function (t) {
        (function (t, r) {
          "use strict";
          function i(t, r) {
            if (!t) throw new Error(r || "Assertion failed");
          }
          function n(t, r) {
            t.super_ = r;
            var e = function () {};
            ((e.prototype = r.prototype),
              (t.prototype = new e()),
              (t.prototype.constructor = t));
          }
          function o(t, r, e) {
            if (o.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== r && "be" !== r) || ((e = r), (r = 10)),
                this._init(t || 0, r || 10, e || "be")));
          }
          var s;
          ("object" === typeof t ? (t.exports = o) : (r.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : e(1742).Buffer;
          } catch (R) {}
          function h(t, r) {
            var e = t.charCodeAt(r);
            return e >= 48 && e <= 57
              ? e - 48
              : e >= 65 && e <= 70
                ? e - 55
                : e >= 97 && e <= 102
                  ? e - 87
                  : void i(!1, "Invalid character in " + t);
          }
          function u(t, r, e) {
            var i = h(t, e);
            return (e - 1 >= r && (i |= h(t, e - 1) << 4), i);
          }
          function a(t, r, e, n) {
            for (
              var o = 0, s = 0, h = Math.min(t.length, e), u = r;
              u < h;
              u++
            ) {
              var a = t.charCodeAt(u) - 48;
              ((o *= n),
                (s = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a),
                i(a >= 0 && s < n, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function f(t, r) {
            ((t.words = r.words),
              (t.length = r.length),
              (t.negative = r.negative),
              (t.red = r.red));
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
            (o.max = function (t, r) {
              return t.cmp(r) > 0 ? t : r;
            }),
            (o.min = function (t, r) {
              return t.cmp(r) < 0 ? t : r;
            }),
            (o.prototype._init = function (t, r, e) {
              if ("number" === typeof t) return this._initNumber(t, r, e);
              if ("object" === typeof t) return this._initArray(t, r, e);
              ("hex" === r && (r = 16),
                i(r === (0 | r) && r >= 2 && r <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var n = 0;
              ("-" === t[0] && (n++, (this.negative = 1)),
                n < t.length &&
                  (16 === r
                    ? this._parseHex(t, n, e)
                    : (this._parseBase(t, r, n),
                      "le" === e && this._initArray(this.toArray(), r, e))));
            }),
            (o.prototype._initNumber = function (t, r, e) {
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
                "le" === e && this._initArray(this.toArray(), r, e));
            }),
            (o.prototype._initArray = function (t, r, e) {
              if ((i("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var o,
                s,
                h = 0;
              if ("be" === e)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                  ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[o] |= (s << h) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - h)) & 67108863),
                    (h += 24),
                    h >= 26 && ((h -= 26), o++));
              else if ("le" === e)
                for (n = 0, o = 0; n < t.length; n += 3)
                  ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[o] |= (s << h) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - h)) & 67108863),
                    (h += 24),
                    h >= 26 && ((h -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, r, e) {
              ((this.length = Math.ceil((t.length - r) / 6)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var n,
                o = 0,
                s = 0;
              if ("be" === e)
                for (i = t.length - 1; i >= r; i -= 2)
                  ((n = u(t, r, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var h = t.length - r;
                for (i = h % 2 === 0 ? r + 1 : r; i < t.length; i += 2)
                  ((n = u(t, r, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (t, r, e) {
              ((this.words = [0]), (this.length = 1));
              for (var i = 0, n = 1; n <= 67108863; n *= r) i++;
              (i--, (n = (n / r) | 0));
              for (
                var o = t.length - e,
                  s = o % i,
                  h = Math.min(o, o - s) + e,
                  u = 0,
                  f = e;
                f < h;
                f += i
              )
                ((u = a(t, f, f + i, r)),
                  this.imuln(n),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              if (0 !== s) {
                var l = 1;
                for (u = a(t, f, t.length, r), f = 0; f < s; f++) l *= r;
                (this.imuln(l),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (o.prototype._move = function (t) {
              f(t, this);
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
            m = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            c = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (t, r) {
            var e;
            if (((t = t || 10), (r = 0 | r || 1), 16 === t || "hex" === t)) {
              e = "";
              for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var h = this.words[s],
                  u = (16777215 & ((h << n) | o)).toString(16);
                ((o = (h >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (e =
                    0 !== o || s !== this.length - 1
                      ? d[6 - u.length] + u + e
                      : u + e));
              }
              0 !== o && (e = o.toString(16) + e);
              while (e.length % r !== 0) e = "0" + e;
              return (0 !== this.negative && (e = "-" + e), e);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var a = m[t],
                f = c[t];
              e = "";
              var l = this.clone();
              l.negative = 0;
              while (!l.isZero()) {
                var g = l.modrn(f).toString(t);
                ((l = l.idivn(f)),
                  (e = l.isZero() ? g + e : d[a - g.length] + g + e));
              }
              this.isZero() && (e = "0" + e);
              while (e.length % r !== 0) e = "0" + e;
              return (0 !== this.negative && (e = "-" + e), e);
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
              (o.prototype.toBuffer = function (t, r) {
                return this.toArrayLike(s, t, r);
              }),
            (o.prototype.toArray = function (t, r) {
              return this.toArrayLike(Array, t, r);
            }));
          var g = function (t, r) {
            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r);
          };
          function p(t) {
            for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
              var i = (e / 26) | 0,
                n = e % 26;
              r[e] = (t.words[i] >>> n) & 1;
            }
            return r;
          }
          function v(t, r, e) {
            e.negative = r.negative ^ t.negative;
            var i = (t.length + r.length) | 0;
            ((e.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | r.words[0],
              s = n * o,
              h = 67108863 & s,
              u = (s / 67108864) | 0;
            e.words[0] = h;
            for (var a = 1; a < i; a++) {
              for (
                var f = u >>> 26,
                  l = 67108863 & u,
                  d = Math.min(a, r.length - 1),
                  m = Math.max(0, a - t.length + 1);
                m <= d;
                m++
              ) {
                var c = (a - m) | 0;
                ((n = 0 | t.words[c]),
                  (o = 0 | r.words[m]),
                  (s = n * o + l),
                  (f += (s / 67108864) | 0),
                  (l = 67108863 & s));
              }
              ((e.words[a] = 0 | l), (u = 0 | f));
            }
            return (0 !== u ? (e.words[a] = 0 | u) : e.length--, e._strip());
          }
          ((o.prototype.toArrayLike = function (t, r, e) {
            this._strip();
            var n = this.byteLength(),
              o = e || Math.max(1, n);
            (i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"));
            var s = g(t, o),
              h = "le" === r ? "LE" : "BE";
            return (this["_toArrayLike" + h](s, n), s);
          }),
            (o.prototype._toArrayLikeLE = function (t, r) {
              for (var e = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                var s = (this.words[n] << o) | i;
                ((t[e++] = 255 & s),
                  e < t.length && (t[e++] = (s >> 8) & 255),
                  e < t.length && (t[e++] = (s >> 16) & 255),
                  6 === o
                    ? (e < t.length && (t[e++] = (s >> 24) & 255),
                      (i = 0),
                      (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (e < t.length) {
                t[e++] = i;
                while (e < t.length) t[e++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (t, r) {
              for (
                var e = t.length - 1, i = 0, n = 0, o = 0;
                n < this.length;
                n++
              ) {
                var s = (this.words[n] << o) | i;
                ((t[e--] = 255 & s),
                  e >= 0 && (t[e--] = (s >> 8) & 255),
                  e >= 0 && (t[e--] = (s >> 16) & 255),
                  6 === o
                    ? (e >= 0 && (t[e--] = (s >> 24) & 255), (i = 0), (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (e >= 0) {
                t[e--] = i;
                while (e >= 0) t[e--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var r = t,
                    e = 0;
                  return (
                    r >= 4096 && ((e += 13), (r >>>= 13)),
                    r >= 64 && ((e += 7), (r >>>= 7)),
                    r >= 8 && ((e += 4), (r >>>= 4)),
                    r >= 2 && ((e += 2), (r >>>= 2)),
                    e + r
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var r = t,
                e = 0;
              return (
                0 === (8191 & r) && ((e += 13), (r >>>= 13)),
                0 === (127 & r) && ((e += 7), (r >>>= 7)),
                0 === (15 & r) && ((e += 4), (r >>>= 4)),
                0 === (3 & r) && ((e += 2), (r >>>= 2)),
                0 === (1 & r) && e++,
                e
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                r = this._countBits(t);
              return 26 * (this.length - 1) + r;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, r = 0; r < this.length; r++) {
                var e = this._zeroBits(this.words[r]);
                if (((t += e), 26 !== e)) break;
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
              for (var r = 0; r < t.length; r++)
                this.words[r] = this.words[r] | t.words[r];
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
              var r;
              r = this.length > t.length ? t : this;
              for (var e = 0; e < r.length; e++)
                this.words[e] = this.words[e] & t.words[e];
              return ((this.length = r.length), this._strip());
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
              var r, e;
              this.length > t.length
                ? ((r = this), (e = t))
                : ((r = t), (e = this));
              for (var i = 0; i < e.length; i++)
                this.words[i] = r.words[i] ^ e.words[i];
              if (this !== r)
                for (; i < r.length; i++) this.words[i] = r.words[i];
              return ((this.length = r.length), this._strip());
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
              var r = 0 | Math.ceil(t / 26),
                e = t % 26;
              (this._expand(r), e > 0 && r--);
              for (var n = 0; n < r; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                e > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - e))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, r) {
              i("number" === typeof t && t >= 0);
              var e = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(e + 1),
                (this.words[e] = r
                  ? this.words[e] | (1 << n)
                  : this.words[e] & ~(1 << n)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var r, e, i;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (r = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (r = this.isub(t)),
                  (t.negative = 1),
                  r._normSign()
                );
              this.length > t.length
                ? ((e = this), (i = t))
                : ((e = t), (i = this));
              for (var n = 0, o = 0; o < i.length; o++)
                ((r = (0 | e.words[o]) + (0 | i.words[o]) + n),
                  (this.words[o] = 67108863 & r),
                  (n = r >>> 26));
              for (; 0 !== n && o < e.length; o++)
                ((r = (0 | e.words[o]) + n),
                  (this.words[o] = 67108863 & r),
                  (n = r >>> 26));
              if (((this.length = e.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (e !== this)
                for (; o < e.length; o++) this.words[o] = e.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var r;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (r = this.sub(t)), (t.negative ^= 1), r)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (r = t.sub(this)),
                    (this.negative = 1),
                    r)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var r = this.iadd(t);
                return ((t.negative = 1), r._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var e,
                i,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((e = this), (i = t)) : ((e = t), (i = this));
              for (var o = 0, s = 0; s < i.length; s++)
                ((r = (0 | e.words[s]) - (0 | i.words[s]) + o),
                  (o = r >> 26),
                  (this.words[s] = 67108863 & r));
              for (; 0 !== o && s < e.length; s++)
                ((r = (0 | e.words[s]) + o),
                  (o = r >> 26),
                  (this.words[s] = 67108863 & r));
              if (0 === o && s < e.length && e !== this)
                for (; s < e.length; s++) this.words[s] = e.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                e !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var y = function (t, r, e) {
            var i,
              n,
              o,
              s = t.words,
              h = r.words,
              u = e.words,
              a = 0,
              f = 0 | s[0],
              l = 8191 & f,
              d = f >>> 13,
              m = 0 | s[1],
              c = 8191 & m,
              g = m >>> 13,
              p = 0 | s[2],
              v = 8191 & p,
              y = p >>> 13,
              w = 0 | s[3],
              b = 8191 & w,
              M = w >>> 13,
              _ = 0 | s[4],
              E = 8191 & _,
              N = _ >>> 13,
              x = 0 | s[5],
              A = 8191 & x,
              S = x >>> 13,
              I = 0 | s[6],
              P = 8191 & I,
              R = I >>> 13,
              O = 0 | s[7],
              F = 8191 & O,
              L = O >>> 13,
              T = 0 | s[8],
              U = 8191 & T,
              k = T >>> 13,
              B = 0 | s[9],
              C = 8191 & B,
              j = B >>> 13,
              q = 0 | h[0],
              D = 8191 & q,
              z = q >>> 13,
              Z = 0 | h[1],
              G = 8191 & Z,
              K = Z >>> 13,
              H = 0 | h[2],
              V = 8191 & H,
              W = H >>> 13,
              X = 0 | h[3],
              J = 8191 & X,
              $ = X >>> 13,
              Y = 0 | h[4],
              Q = 8191 & Y,
              tt = Y >>> 13,
              rt = 0 | h[5],
              et = 8191 & rt,
              it = rt >>> 13,
              nt = 0 | h[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              ht = 0 | h[7],
              ut = 8191 & ht,
              at = ht >>> 13,
              ft = 0 | h[8],
              lt = 8191 & ft,
              dt = ft >>> 13,
              mt = 0 | h[9],
              ct = 8191 & mt,
              gt = mt >>> 13;
            ((e.negative = t.negative ^ r.negative),
              (e.length = 19),
              (i = Math.imul(l, D)),
              (n = Math.imul(l, z)),
              (n = (n + Math.imul(d, D)) | 0),
              (o = Math.imul(d, z)));
            var pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (pt >>> 26)) | 0),
              (pt &= 67108863),
              (i = Math.imul(c, D)),
              (n = Math.imul(c, z)),
              (n = (n + Math.imul(g, D)) | 0),
              (o = Math.imul(g, z)),
              (i = (i + Math.imul(l, G)) | 0),
              (n = (n + Math.imul(l, K)) | 0),
              (n = (n + Math.imul(d, G)) | 0),
              (o = (o + Math.imul(d, K)) | 0));
            var vt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(v, D)),
              (n = Math.imul(v, z)),
              (n = (n + Math.imul(y, D)) | 0),
              (o = Math.imul(y, z)),
              (i = (i + Math.imul(c, G)) | 0),
              (n = (n + Math.imul(c, K)) | 0),
              (n = (n + Math.imul(g, G)) | 0),
              (o = (o + Math.imul(g, K)) | 0),
              (i = (i + Math.imul(l, V)) | 0),
              (n = (n + Math.imul(l, W)) | 0),
              (n = (n + Math.imul(d, V)) | 0),
              (o = (o + Math.imul(d, W)) | 0));
            var yt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(b, D)),
              (n = Math.imul(b, z)),
              (n = (n + Math.imul(M, D)) | 0),
              (o = Math.imul(M, z)),
              (i = (i + Math.imul(v, G)) | 0),
              (n = (n + Math.imul(v, K)) | 0),
              (n = (n + Math.imul(y, G)) | 0),
              (o = (o + Math.imul(y, K)) | 0),
              (i = (i + Math.imul(c, V)) | 0),
              (n = (n + Math.imul(c, W)) | 0),
              (n = (n + Math.imul(g, V)) | 0),
              (o = (o + Math.imul(g, W)) | 0),
              (i = (i + Math.imul(l, J)) | 0),
              (n = (n + Math.imul(l, $)) | 0),
              (n = (n + Math.imul(d, J)) | 0),
              (o = (o + Math.imul(d, $)) | 0));
            var wt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(E, D)),
              (n = Math.imul(E, z)),
              (n = (n + Math.imul(N, D)) | 0),
              (o = Math.imul(N, z)),
              (i = (i + Math.imul(b, G)) | 0),
              (n = (n + Math.imul(b, K)) | 0),
              (n = (n + Math.imul(M, G)) | 0),
              (o = (o + Math.imul(M, K)) | 0),
              (i = (i + Math.imul(v, V)) | 0),
              (n = (n + Math.imul(v, W)) | 0),
              (n = (n + Math.imul(y, V)) | 0),
              (o = (o + Math.imul(y, W)) | 0),
              (i = (i + Math.imul(c, J)) | 0),
              (n = (n + Math.imul(c, $)) | 0),
              (n = (n + Math.imul(g, J)) | 0),
              (o = (o + Math.imul(g, $)) | 0),
              (i = (i + Math.imul(l, Q)) | 0),
              (n = (n + Math.imul(l, tt)) | 0),
              (n = (n + Math.imul(d, Q)) | 0),
              (o = (o + Math.imul(d, tt)) | 0));
            var bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(A, D)),
              (n = Math.imul(A, z)),
              (n = (n + Math.imul(S, D)) | 0),
              (o = Math.imul(S, z)),
              (i = (i + Math.imul(E, G)) | 0),
              (n = (n + Math.imul(E, K)) | 0),
              (n = (n + Math.imul(N, G)) | 0),
              (o = (o + Math.imul(N, K)) | 0),
              (i = (i + Math.imul(b, V)) | 0),
              (n = (n + Math.imul(b, W)) | 0),
              (n = (n + Math.imul(M, V)) | 0),
              (o = (o + Math.imul(M, W)) | 0),
              (i = (i + Math.imul(v, J)) | 0),
              (n = (n + Math.imul(v, $)) | 0),
              (n = (n + Math.imul(y, J)) | 0),
              (o = (o + Math.imul(y, $)) | 0),
              (i = (i + Math.imul(c, Q)) | 0),
              (n = (n + Math.imul(c, tt)) | 0),
              (n = (n + Math.imul(g, Q)) | 0),
              (o = (o + Math.imul(g, tt)) | 0),
              (i = (i + Math.imul(l, et)) | 0),
              (n = (n + Math.imul(l, it)) | 0),
              (n = (n + Math.imul(d, et)) | 0),
              (o = (o + Math.imul(d, it)) | 0));
            var Mt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(P, D)),
              (n = Math.imul(P, z)),
              (n = (n + Math.imul(R, D)) | 0),
              (o = Math.imul(R, z)),
              (i = (i + Math.imul(A, G)) | 0),
              (n = (n + Math.imul(A, K)) | 0),
              (n = (n + Math.imul(S, G)) | 0),
              (o = (o + Math.imul(S, K)) | 0),
              (i = (i + Math.imul(E, V)) | 0),
              (n = (n + Math.imul(E, W)) | 0),
              (n = (n + Math.imul(N, V)) | 0),
              (o = (o + Math.imul(N, W)) | 0),
              (i = (i + Math.imul(b, J)) | 0),
              (n = (n + Math.imul(b, $)) | 0),
              (n = (n + Math.imul(M, J)) | 0),
              (o = (o + Math.imul(M, $)) | 0),
              (i = (i + Math.imul(v, Q)) | 0),
              (n = (n + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(y, Q)) | 0),
              (o = (o + Math.imul(y, tt)) | 0),
              (i = (i + Math.imul(c, et)) | 0),
              (n = (n + Math.imul(c, it)) | 0),
              (n = (n + Math.imul(g, et)) | 0),
              (o = (o + Math.imul(g, it)) | 0),
              (i = (i + Math.imul(l, ot)) | 0),
              (n = (n + Math.imul(l, st)) | 0),
              (n = (n + Math.imul(d, ot)) | 0),
              (o = (o + Math.imul(d, st)) | 0));
            var _t = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(F, D)),
              (n = Math.imul(F, z)),
              (n = (n + Math.imul(L, D)) | 0),
              (o = Math.imul(L, z)),
              (i = (i + Math.imul(P, G)) | 0),
              (n = (n + Math.imul(P, K)) | 0),
              (n = (n + Math.imul(R, G)) | 0),
              (o = (o + Math.imul(R, K)) | 0),
              (i = (i + Math.imul(A, V)) | 0),
              (n = (n + Math.imul(A, W)) | 0),
              (n = (n + Math.imul(S, V)) | 0),
              (o = (o + Math.imul(S, W)) | 0),
              (i = (i + Math.imul(E, J)) | 0),
              (n = (n + Math.imul(E, $)) | 0),
              (n = (n + Math.imul(N, J)) | 0),
              (o = (o + Math.imul(N, $)) | 0),
              (i = (i + Math.imul(b, Q)) | 0),
              (n = (n + Math.imul(b, tt)) | 0),
              (n = (n + Math.imul(M, Q)) | 0),
              (o = (o + Math.imul(M, tt)) | 0),
              (i = (i + Math.imul(v, et)) | 0),
              (n = (n + Math.imul(v, it)) | 0),
              (n = (n + Math.imul(y, et)) | 0),
              (o = (o + Math.imul(y, it)) | 0),
              (i = (i + Math.imul(c, ot)) | 0),
              (n = (n + Math.imul(c, st)) | 0),
              (n = (n + Math.imul(g, ot)) | 0),
              (o = (o + Math.imul(g, st)) | 0),
              (i = (i + Math.imul(l, ut)) | 0),
              (n = (n + Math.imul(l, at)) | 0),
              (n = (n + Math.imul(d, ut)) | 0),
              (o = (o + Math.imul(d, at)) | 0));
            var Et = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(U, D)),
              (n = Math.imul(U, z)),
              (n = (n + Math.imul(k, D)) | 0),
              (o = Math.imul(k, z)),
              (i = (i + Math.imul(F, G)) | 0),
              (n = (n + Math.imul(F, K)) | 0),
              (n = (n + Math.imul(L, G)) | 0),
              (o = (o + Math.imul(L, K)) | 0),
              (i = (i + Math.imul(P, V)) | 0),
              (n = (n + Math.imul(P, W)) | 0),
              (n = (n + Math.imul(R, V)) | 0),
              (o = (o + Math.imul(R, W)) | 0),
              (i = (i + Math.imul(A, J)) | 0),
              (n = (n + Math.imul(A, $)) | 0),
              (n = (n + Math.imul(S, J)) | 0),
              (o = (o + Math.imul(S, $)) | 0),
              (i = (i + Math.imul(E, Q)) | 0),
              (n = (n + Math.imul(E, tt)) | 0),
              (n = (n + Math.imul(N, Q)) | 0),
              (o = (o + Math.imul(N, tt)) | 0),
              (i = (i + Math.imul(b, et)) | 0),
              (n = (n + Math.imul(b, it)) | 0),
              (n = (n + Math.imul(M, et)) | 0),
              (o = (o + Math.imul(M, it)) | 0),
              (i = (i + Math.imul(v, ot)) | 0),
              (n = (n + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(y, ot)) | 0),
              (o = (o + Math.imul(y, st)) | 0),
              (i = (i + Math.imul(c, ut)) | 0),
              (n = (n + Math.imul(c, at)) | 0),
              (n = (n + Math.imul(g, ut)) | 0),
              (o = (o + Math.imul(g, at)) | 0),
              (i = (i + Math.imul(l, lt)) | 0),
              (n = (n + Math.imul(l, dt)) | 0),
              (n = (n + Math.imul(d, lt)) | 0),
              (o = (o + Math.imul(d, dt)) | 0));
            var Nt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (i = Math.imul(C, D)),
              (n = Math.imul(C, z)),
              (n = (n + Math.imul(j, D)) | 0),
              (o = Math.imul(j, z)),
              (i = (i + Math.imul(U, G)) | 0),
              (n = (n + Math.imul(U, K)) | 0),
              (n = (n + Math.imul(k, G)) | 0),
              (o = (o + Math.imul(k, K)) | 0),
              (i = (i + Math.imul(F, V)) | 0),
              (n = (n + Math.imul(F, W)) | 0),
              (n = (n + Math.imul(L, V)) | 0),
              (o = (o + Math.imul(L, W)) | 0),
              (i = (i + Math.imul(P, J)) | 0),
              (n = (n + Math.imul(P, $)) | 0),
              (n = (n + Math.imul(R, J)) | 0),
              (o = (o + Math.imul(R, $)) | 0),
              (i = (i + Math.imul(A, Q)) | 0),
              (n = (n + Math.imul(A, tt)) | 0),
              (n = (n + Math.imul(S, Q)) | 0),
              (o = (o + Math.imul(S, tt)) | 0),
              (i = (i + Math.imul(E, et)) | 0),
              (n = (n + Math.imul(E, it)) | 0),
              (n = (n + Math.imul(N, et)) | 0),
              (o = (o + Math.imul(N, it)) | 0),
              (i = (i + Math.imul(b, ot)) | 0),
              (n = (n + Math.imul(b, st)) | 0),
              (n = (n + Math.imul(M, ot)) | 0),
              (o = (o + Math.imul(M, st)) | 0),
              (i = (i + Math.imul(v, ut)) | 0),
              (n = (n + Math.imul(v, at)) | 0),
              (n = (n + Math.imul(y, ut)) | 0),
              (o = (o + Math.imul(y, at)) | 0),
              (i = (i + Math.imul(c, lt)) | 0),
              (n = (n + Math.imul(c, dt)) | 0),
              (n = (n + Math.imul(g, lt)) | 0),
              (o = (o + Math.imul(g, dt)) | 0),
              (i = (i + Math.imul(l, ct)) | 0),
              (n = (n + Math.imul(l, gt)) | 0),
              (n = (n + Math.imul(d, ct)) | 0),
              (o = (o + Math.imul(d, gt)) | 0));
            var xt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(C, G)),
              (n = Math.imul(C, K)),
              (n = (n + Math.imul(j, G)) | 0),
              (o = Math.imul(j, K)),
              (i = (i + Math.imul(U, V)) | 0),
              (n = (n + Math.imul(U, W)) | 0),
              (n = (n + Math.imul(k, V)) | 0),
              (o = (o + Math.imul(k, W)) | 0),
              (i = (i + Math.imul(F, J)) | 0),
              (n = (n + Math.imul(F, $)) | 0),
              (n = (n + Math.imul(L, J)) | 0),
              (o = (o + Math.imul(L, $)) | 0),
              (i = (i + Math.imul(P, Q)) | 0),
              (n = (n + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(R, Q)) | 0),
              (o = (o + Math.imul(R, tt)) | 0),
              (i = (i + Math.imul(A, et)) | 0),
              (n = (n + Math.imul(A, it)) | 0),
              (n = (n + Math.imul(S, et)) | 0),
              (o = (o + Math.imul(S, it)) | 0),
              (i = (i + Math.imul(E, ot)) | 0),
              (n = (n + Math.imul(E, st)) | 0),
              (n = (n + Math.imul(N, ot)) | 0),
              (o = (o + Math.imul(N, st)) | 0),
              (i = (i + Math.imul(b, ut)) | 0),
              (n = (n + Math.imul(b, at)) | 0),
              (n = (n + Math.imul(M, ut)) | 0),
              (o = (o + Math.imul(M, at)) | 0),
              (i = (i + Math.imul(v, lt)) | 0),
              (n = (n + Math.imul(v, dt)) | 0),
              (n = (n + Math.imul(y, lt)) | 0),
              (o = (o + Math.imul(y, dt)) | 0),
              (i = (i + Math.imul(c, ct)) | 0),
              (n = (n + Math.imul(c, gt)) | 0),
              (n = (n + Math.imul(g, ct)) | 0),
              (o = (o + Math.imul(g, gt)) | 0));
            var At = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(C, V)),
              (n = Math.imul(C, W)),
              (n = (n + Math.imul(j, V)) | 0),
              (o = Math.imul(j, W)),
              (i = (i + Math.imul(U, J)) | 0),
              (n = (n + Math.imul(U, $)) | 0),
              (n = (n + Math.imul(k, J)) | 0),
              (o = (o + Math.imul(k, $)) | 0),
              (i = (i + Math.imul(F, Q)) | 0),
              (n = (n + Math.imul(F, tt)) | 0),
              (n = (n + Math.imul(L, Q)) | 0),
              (o = (o + Math.imul(L, tt)) | 0),
              (i = (i + Math.imul(P, et)) | 0),
              (n = (n + Math.imul(P, it)) | 0),
              (n = (n + Math.imul(R, et)) | 0),
              (o = (o + Math.imul(R, it)) | 0),
              (i = (i + Math.imul(A, ot)) | 0),
              (n = (n + Math.imul(A, st)) | 0),
              (n = (n + Math.imul(S, ot)) | 0),
              (o = (o + Math.imul(S, st)) | 0),
              (i = (i + Math.imul(E, ut)) | 0),
              (n = (n + Math.imul(E, at)) | 0),
              (n = (n + Math.imul(N, ut)) | 0),
              (o = (o + Math.imul(N, at)) | 0),
              (i = (i + Math.imul(b, lt)) | 0),
              (n = (n + Math.imul(b, dt)) | 0),
              (n = (n + Math.imul(M, lt)) | 0),
              (o = (o + Math.imul(M, dt)) | 0),
              (i = (i + Math.imul(v, ct)) | 0),
              (n = (n + Math.imul(v, gt)) | 0),
              (n = (n + Math.imul(y, ct)) | 0),
              (o = (o + Math.imul(y, gt)) | 0));
            var St = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(C, J)),
              (n = Math.imul(C, $)),
              (n = (n + Math.imul(j, J)) | 0),
              (o = Math.imul(j, $)),
              (i = (i + Math.imul(U, Q)) | 0),
              (n = (n + Math.imul(U, tt)) | 0),
              (n = (n + Math.imul(k, Q)) | 0),
              (o = (o + Math.imul(k, tt)) | 0),
              (i = (i + Math.imul(F, et)) | 0),
              (n = (n + Math.imul(F, it)) | 0),
              (n = (n + Math.imul(L, et)) | 0),
              (o = (o + Math.imul(L, it)) | 0),
              (i = (i + Math.imul(P, ot)) | 0),
              (n = (n + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(R, ot)) | 0),
              (o = (o + Math.imul(R, st)) | 0),
              (i = (i + Math.imul(A, ut)) | 0),
              (n = (n + Math.imul(A, at)) | 0),
              (n = (n + Math.imul(S, ut)) | 0),
              (o = (o + Math.imul(S, at)) | 0),
              (i = (i + Math.imul(E, lt)) | 0),
              (n = (n + Math.imul(E, dt)) | 0),
              (n = (n + Math.imul(N, lt)) | 0),
              (o = (o + Math.imul(N, dt)) | 0),
              (i = (i + Math.imul(b, ct)) | 0),
              (n = (n + Math.imul(b, gt)) | 0),
              (n = (n + Math.imul(M, ct)) | 0),
              (o = (o + Math.imul(M, gt)) | 0));
            var It = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (i = Math.imul(C, Q)),
              (n = Math.imul(C, tt)),
              (n = (n + Math.imul(j, Q)) | 0),
              (o = Math.imul(j, tt)),
              (i = (i + Math.imul(U, et)) | 0),
              (n = (n + Math.imul(U, it)) | 0),
              (n = (n + Math.imul(k, et)) | 0),
              (o = (o + Math.imul(k, it)) | 0),
              (i = (i + Math.imul(F, ot)) | 0),
              (n = (n + Math.imul(F, st)) | 0),
              (n = (n + Math.imul(L, ot)) | 0),
              (o = (o + Math.imul(L, st)) | 0),
              (i = (i + Math.imul(P, ut)) | 0),
              (n = (n + Math.imul(P, at)) | 0),
              (n = (n + Math.imul(R, ut)) | 0),
              (o = (o + Math.imul(R, at)) | 0),
              (i = (i + Math.imul(A, lt)) | 0),
              (n = (n + Math.imul(A, dt)) | 0),
              (n = (n + Math.imul(S, lt)) | 0),
              (o = (o + Math.imul(S, dt)) | 0),
              (i = (i + Math.imul(E, ct)) | 0),
              (n = (n + Math.imul(E, gt)) | 0),
              (n = (n + Math.imul(N, ct)) | 0),
              (o = (o + Math.imul(N, gt)) | 0));
            var Pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(C, et)),
              (n = Math.imul(C, it)),
              (n = (n + Math.imul(j, et)) | 0),
              (o = Math.imul(j, it)),
              (i = (i + Math.imul(U, ot)) | 0),
              (n = (n + Math.imul(U, st)) | 0),
              (n = (n + Math.imul(k, ot)) | 0),
              (o = (o + Math.imul(k, st)) | 0),
              (i = (i + Math.imul(F, ut)) | 0),
              (n = (n + Math.imul(F, at)) | 0),
              (n = (n + Math.imul(L, ut)) | 0),
              (o = (o + Math.imul(L, at)) | 0),
              (i = (i + Math.imul(P, lt)) | 0),
              (n = (n + Math.imul(P, dt)) | 0),
              (n = (n + Math.imul(R, lt)) | 0),
              (o = (o + Math.imul(R, dt)) | 0),
              (i = (i + Math.imul(A, ct)) | 0),
              (n = (n + Math.imul(A, gt)) | 0),
              (n = (n + Math.imul(S, ct)) | 0),
              (o = (o + Math.imul(S, gt)) | 0));
            var Rt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(C, ot)),
              (n = Math.imul(C, st)),
              (n = (n + Math.imul(j, ot)) | 0),
              (o = Math.imul(j, st)),
              (i = (i + Math.imul(U, ut)) | 0),
              (n = (n + Math.imul(U, at)) | 0),
              (n = (n + Math.imul(k, ut)) | 0),
              (o = (o + Math.imul(k, at)) | 0),
              (i = (i + Math.imul(F, lt)) | 0),
              (n = (n + Math.imul(F, dt)) | 0),
              (n = (n + Math.imul(L, lt)) | 0),
              (o = (o + Math.imul(L, dt)) | 0),
              (i = (i + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(P, gt)) | 0),
              (n = (n + Math.imul(R, ct)) | 0),
              (o = (o + Math.imul(R, gt)) | 0));
            var Ot = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(C, ut)),
              (n = Math.imul(C, at)),
              (n = (n + Math.imul(j, ut)) | 0),
              (o = Math.imul(j, at)),
              (i = (i + Math.imul(U, lt)) | 0),
              (n = (n + Math.imul(U, dt)) | 0),
              (n = (n + Math.imul(k, lt)) | 0),
              (o = (o + Math.imul(k, dt)) | 0),
              (i = (i + Math.imul(F, ct)) | 0),
              (n = (n + Math.imul(F, gt)) | 0),
              (n = (n + Math.imul(L, ct)) | 0),
              (o = (o + Math.imul(L, gt)) | 0));
            var Ft = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ft >>> 26)) | 0),
              (Ft &= 67108863),
              (i = Math.imul(C, lt)),
              (n = Math.imul(C, dt)),
              (n = (n + Math.imul(j, lt)) | 0),
              (o = Math.imul(j, dt)),
              (i = (i + Math.imul(U, ct)) | 0),
              (n = (n + Math.imul(U, gt)) | 0),
              (n = (n + Math.imul(k, ct)) | 0),
              (o = (o + Math.imul(k, gt)) | 0));
            var Lt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Lt >>> 26)) | 0),
              (Lt &= 67108863),
              (i = Math.imul(C, ct)),
              (n = Math.imul(C, gt)),
              (n = (n + Math.imul(j, ct)) | 0),
              (o = Math.imul(j, gt)));
            var Tt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (a = (((o + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (u[0] = pt),
              (u[1] = vt),
              (u[2] = yt),
              (u[3] = wt),
              (u[4] = bt),
              (u[5] = Mt),
              (u[6] = _t),
              (u[7] = Et),
              (u[8] = Nt),
              (u[9] = xt),
              (u[10] = At),
              (u[11] = St),
              (u[12] = It),
              (u[13] = Pt),
              (u[14] = Rt),
              (u[15] = Ot),
              (u[16] = Ft),
              (u[17] = Lt),
              (u[18] = Tt),
              0 !== a && ((u[19] = a), e.length++),
              e
            );
          };
          function w(t, r, e) {
            ((e.negative = r.negative ^ t.negative),
              (e.length = t.length + r.length));
            for (var i = 0, n = 0, o = 0; o < e.length - 1; o++) {
              var s = n;
              n = 0;
              for (
                var h = 67108863 & i,
                  u = Math.min(o, r.length - 1),
                  a = Math.max(0, o - t.length + 1);
                a <= u;
                a++
              ) {
                var f = o - a,
                  l = 0 | t.words[f],
                  d = 0 | r.words[a],
                  m = l * d,
                  c = 67108863 & m;
                ((s = (s + ((m / 67108864) | 0)) | 0),
                  (c = (c + h) | 0),
                  (h = 67108863 & c),
                  (s = (s + (c >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((e.words[o] = h), (i = s), (s = n));
            }
            return (0 !== i ? (e.words[o] = i) : e.length--, e._strip());
          }
          function b(t, r, e) {
            return w(t, r, e);
          }
          function M(t, r) {
            ((this.x = t), (this.y = r));
          }
          (Math.imul || (y = v),
            (o.prototype.mulTo = function (t, r) {
              var e,
                i = this.length + t.length;
              return (
                (e =
                  10 === this.length && 10 === t.length
                    ? y(this, t, r)
                    : i < 63
                      ? v(this, t, r)
                      : i < 1024
                        ? w(this, t, r)
                        : b(this, t, r)),
                e
              );
            }),
            (M.prototype.makeRBT = function (t) {
              for (
                var r = new Array(t), e = o.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                r[i] = this.revBin(i, e, t);
              return r;
            }),
            (M.prototype.revBin = function (t, r, e) {
              if (0 === t || t === e - 1) return t;
              for (var i = 0, n = 0; n < r; n++)
                ((i |= (1 & t) << (r - n - 1)), (t >>= 1));
              return i;
            }),
            (M.prototype.permute = function (t, r, e, i, n, o) {
              for (var s = 0; s < o; s++) ((i[s] = r[t[s]]), (n[s] = e[t[s]]));
            }),
            (M.prototype.transform = function (t, r, e, i, n, o) {
              this.permute(o, t, r, e, i, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var h = s << 1,
                    u = Math.cos((2 * Math.PI) / h),
                    a = Math.sin((2 * Math.PI) / h),
                    f = 0;
                  f < n;
                  f += h
                )
                  for (var l = u, d = a, m = 0; m < s; m++) {
                    var c = e[f + m],
                      g = i[f + m],
                      p = e[f + m + s],
                      v = i[f + m + s],
                      y = l * p - d * v;
                    ((v = l * v + d * p),
                      (p = y),
                      (e[f + m] = c + p),
                      (i[f + m] = g + v),
                      (e[f + m + s] = c - p),
                      (i[f + m + s] = g - v),
                      m !== h &&
                        ((y = u * l - a * d), (d = u * d + a * l), (l = y)));
                  }
            }),
            (M.prototype.guessLen13b = function (t, r) {
              var e = 1 | Math.max(r, t),
                i = 1 & e,
                n = 0;
              for (e = (e / 2) | 0; e; e >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (M.prototype.conjugate = function (t, r, e) {
              if (!(e <= 1))
                for (var i = 0; i < e / 2; i++) {
                  var n = t[i];
                  ((t[i] = t[e - i - 1]),
                    (t[e - i - 1] = n),
                    (n = r[i]),
                    (r[i] = -r[e - i - 1]),
                    (r[e - i - 1] = -n));
                }
            }),
            (M.prototype.normalize13b = function (t, r) {
              for (var e = 0, i = 0; i < r / 2; i++) {
                var n =
                  8192 * Math.round(t[2 * i + 1] / r) +
                  Math.round(t[2 * i] / r) +
                  e;
                ((t[i] = 67108863 & n),
                  (e = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (M.prototype.convert13b = function (t, r, e, n) {
              for (var o = 0, s = 0; s < r; s++)
                ((o += 0 | t[s]),
                  (e[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (e[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * r; s < n; ++s) e[s] = 0;
              (i(0 === o), i(0 === (-8192 & o)));
            }),
            (M.prototype.stub = function (t) {
              for (var r = new Array(t), e = 0; e < t; e++) r[e] = 0;
              return r;
            }),
            (M.prototype.mulp = function (t, r, e) {
              var i = 2 * this.guessLen13b(t.length, r.length),
                n = this.makeRBT(i),
                o = this.stub(i),
                s = new Array(i),
                h = new Array(i),
                u = new Array(i),
                a = new Array(i),
                f = new Array(i),
                l = new Array(i),
                d = e.words;
              ((d.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(r.words, r.length, a, i),
                this.transform(s, o, h, u, i, n),
                this.transform(a, o, f, l, i, n));
              for (var m = 0; m < i; m++) {
                var c = h[m] * f[m] - u[m] * l[m];
                ((u[m] = h[m] * l[m] + u[m] * f[m]), (h[m] = c));
              }
              return (
                this.conjugate(h, u, i),
                this.transform(h, u, d, o, i, n),
                this.conjugate(d, o, i),
                this.normalize13b(d, i),
                (e.negative = t.negative ^ r.negative),
                (e.length = t.length + r.length),
                e._strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var r = new o(null);
              return (
                (r.words = new Array(this.length + t.length)),
                this.mulTo(t, r)
              );
            }),
            (o.prototype.mulf = function (t) {
              var r = new o(null);
              return (
                (r.words = new Array(this.length + t.length)),
                b(this, t, r)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var r = t < 0;
              (r && (t = -t), i("number" === typeof t), i(t < 67108864));
              for (var e = 0, n = 0; n < this.length; n++) {
                var o = (0 | this.words[n]) * t,
                  s = (67108863 & o) + (67108863 & e);
                ((e >>= 26),
                  (e += (o / 67108864) | 0),
                  (e += s >>> 26),
                  (this.words[n] = 67108863 & s));
              }
              return (
                0 !== e && ((this.words[n] = e), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                r ? this.ineg() : this
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
              var r = p(t);
              if (0 === r.length) return new o(1);
              for (var e = this, i = 0; i < r.length; i++, e = e.sqr())
                if (0 !== r[i]) break;
              if (++i < r.length)
                for (var n = e.sqr(); i < r.length; i++, n = n.sqr())
                  0 !== r[i] && (e = e.mul(n));
              return e;
            }),
            (o.prototype.iushln = function (t) {
              i("number" === typeof t && t >= 0);
              var r,
                e = t % 26,
                n = (t - e) / 26,
                o = (67108863 >>> (26 - e)) << (26 - e);
              if (0 !== e) {
                var s = 0;
                for (r = 0; r < this.length; r++) {
                  var h = this.words[r] & o,
                    u = ((0 | this.words[r]) - h) << e;
                  ((this.words[r] = u | s), (s = h >>> (26 - e)));
                }
                s && ((this.words[r] = s), this.length++);
              }
              if (0 !== n) {
                for (r = this.length - 1; r >= 0; r--)
                  this.words[r + n] = this.words[r];
                for (r = 0; r < n; r++) this.words[r] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return (i(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, r, e) {
              var n;
              (i("number" === typeof t && t >= 0),
                (n = r ? (r - (r % 26)) / 26 : 0));
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                h = 67108863 ^ ((67108863 >>> o) << o),
                u = e;
              if (((n -= s), (n = Math.max(0, n)), u)) {
                for (var a = 0; a < s; a++) u.words[a] = this.words[a];
                u.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, a = 0; a < this.length; a++)
                  this.words[a] = this.words[a + s];
              else ((this.words[0] = 0), (this.length = 1));
              var f = 0;
              for (a = this.length - 1; a >= 0 && (0 !== f || a >= n); a--) {
                var l = 0 | this.words[a];
                ((this.words[a] = (f << (26 - o)) | (l >>> o)), (f = l & h));
              }
              return (
                u && 0 !== f && (u.words[u.length++] = f),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, r, e) {
              return (i(0 === this.negative), this.iushrn(t, r, e));
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
              var r = t % 26,
                e = (t - r) / 26,
                n = 1 << r;
              if (this.length <= e) return !1;
              var o = this.words[e];
              return !!(o & n);
            }),
            (o.prototype.imaskn = function (t) {
              i("number" === typeof t && t >= 0);
              var r = t % 26,
                e = (t - r) / 26;
              if (
                (i(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= e)
              )
                return this;
              if (
                (0 !== r && e++,
                (this.length = Math.min(e, this.length)),
                0 !== r)
              ) {
                var n = 67108863 ^ ((67108863 >>> r) << r);
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
              for (var r = 0; r < this.length && this.words[r] >= 67108864; r++)
                ((this.words[r] -= 67108864),
                  r === this.length - 1
                    ? (this.words[r + 1] = 1)
                    : this.words[r + 1]++);
              return ((this.length = Math.max(this.length, r + 1)), this);
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
                for (var r = 0; r < this.length && this.words[r] < 0; r++)
                  ((this.words[r] += 67108864), (this.words[r + 1] -= 1));
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
            (o.prototype._ishlnsubmul = function (t, r, e) {
              var n,
                o,
                s = t.length + e;
              this._expand(s);
              var h = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + e]) + h;
                var u = (0 | t.words[n]) * r;
                ((o -= 67108863 & u),
                  (h = (o >> 26) - ((u / 67108864) | 0)),
                  (this.words[n + e] = 67108863 & o));
              }
              for (; n < this.length - e; n++)
                ((o = (0 | this.words[n + e]) + h),
                  (h = o >> 26),
                  (this.words[n + e] = 67108863 & o));
              if (0 === h) return this._strip();
              for (i(-1 === h), h = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + h),
                  (h = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, r) {
              var e = this.length - t.length,
                i = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                h = this._countBits(s);
              ((e = 26 - h),
                0 !== e &&
                  ((n = n.ushln(e)),
                  i.iushln(e),
                  (s = 0 | n.words[n.length - 1])));
              var u,
                a = i.length - n.length;
              if ("mod" !== r) {
                ((u = new o(null)),
                  (u.length = a + 1),
                  (u.words = new Array(u.length)));
                for (var f = 0; f < u.length; f++) u.words[f] = 0;
              }
              var l = i.clone()._ishlnsubmul(n, 1, a);
              0 === l.negative && ((i = l), u && (u.words[a] = 1));
              for (var d = a - 1; d >= 0; d--) {
                var m =
                  67108864 * (0 | i.words[n.length + d]) +
                  (0 | i.words[n.length + d - 1]);
                ((m = Math.min((m / s) | 0, 67108863)),
                  i._ishlnsubmul(n, m, d));
                while (0 !== i.negative)
                  (m--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, d),
                    i.isZero() || (i.negative ^= 1));
                u && (u.words[d] = m);
              }
              return (
                u && u._strip(),
                i._strip(),
                "div" !== r && 0 !== e && i.iushrn(e),
                { div: u || null, mod: i }
              );
            }),
            (o.prototype.divmod = function (t, r, e) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((h = this.neg().divmod(t, r)),
                      "mod" !== r && (n = h.div.neg()),
                      "div" !== r &&
                        ((s = h.mod.neg()), e && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((h = this.divmod(t.neg(), r)),
                        "mod" !== r && (n = h.div.neg()),
                        { div: n, mod: h.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((h = this.neg().divmod(t.neg(), r)),
                          "div" !== r &&
                            ((s = h.mod.neg()),
                            e && 0 !== s.negative && s.isub(t)),
                          { div: h.div, mod: s })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === t.length
                            ? "div" === r
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === r
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, r)
              );
              var n, s, h;
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
              var r = this.divmod(t);
              if (r.mod.isZero()) return r.div;
              var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                i = t.ushrn(1),
                n = t.andln(1),
                o = e.cmp(i);
              return o < 0 || (1 === n && 0 === o)
                ? r.div
                : 0 !== r.div.negative
                  ? r.div.isubn(1)
                  : r.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var r = t < 0;
              (r && (t = -t), i(t <= 67108863));
              for (
                var e = (1 << 26) % t, n = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                n = (e * n + (0 | this.words[o])) % t;
              return r ? -n : n;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var r = t < 0;
              (r && (t = -t), i(t <= 67108863));
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var o = (0 | this.words[n]) + 67108864 * e;
                ((this.words[n] = (o / t) | 0), (e = o % t));
              }
              return (this._strip(), r ? this.ineg() : this);
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var r = this,
                e = t.clone();
              r = 0 !== r.negative ? r.umod(t) : r.clone();
              var n = new o(1),
                s = new o(0),
                h = new o(0),
                u = new o(1),
                a = 0;
              while (r.isEven() && e.isEven()) (r.iushrn(1), e.iushrn(1), ++a);
              var f = e.clone(),
                l = r.clone();
              while (!r.isZero()) {
                for (
                  var d = 0, m = 1;
                  0 === (r.words[0] & m) && d < 26;
                  ++d, m <<= 1
                );
                if (d > 0) {
                  r.iushrn(d);
                  while (d-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(f), s.isub(l)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var c = 0, g = 1;
                  0 === (e.words[0] & g) && c < 26;
                  ++c, g <<= 1
                );
                if (c > 0) {
                  e.iushrn(c);
                  while (c-- > 0)
                    ((h.isOdd() || u.isOdd()) && (h.iadd(f), u.isub(l)),
                      h.iushrn(1),
                      u.iushrn(1));
                }
                r.cmp(e) >= 0
                  ? (r.isub(e), n.isub(h), s.isub(u))
                  : (e.isub(r), h.isub(n), u.isub(s));
              }
              return { a: h, b: u, gcd: e.iushln(a) };
            }),
            (o.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var r = this,
                e = t.clone();
              r = 0 !== r.negative ? r.umod(t) : r.clone();
              var n,
                s = new o(1),
                h = new o(0),
                u = e.clone();
              while (r.cmpn(1) > 0 && e.cmpn(1) > 0) {
                for (
                  var a = 0, f = 1;
                  0 === (r.words[0] & f) && a < 26;
                  ++a, f <<= 1
                );
                if (a > 0) {
                  r.iushrn(a);
                  while (a-- > 0) (s.isOdd() && s.iadd(u), s.iushrn(1));
                }
                for (
                  var l = 0, d = 1;
                  0 === (e.words[0] & d) && l < 26;
                  ++l, d <<= 1
                );
                if (l > 0) {
                  e.iushrn(l);
                  while (l-- > 0) (h.isOdd() && h.iadd(u), h.iushrn(1));
                }
                r.cmp(e) >= 0 ? (r.isub(e), s.isub(h)) : (e.isub(r), h.isub(s));
              }
              return (
                (n = 0 === r.cmpn(1) ? s : h),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var r = this.clone(),
                e = t.clone();
              ((r.negative = 0), (e.negative = 0));
              for (var i = 0; r.isEven() && e.isEven(); i++)
                (r.iushrn(1), e.iushrn(1));
              do {
                while (r.isEven()) r.iushrn(1);
                while (e.isEven()) e.iushrn(1);
                var n = r.cmp(e);
                if (n < 0) {
                  var o = r;
                  ((r = e), (e = o));
                } else if (0 === n || 0 === e.cmpn(1)) break;
                r.isub(e);
              } while (1);
              return e.iushln(i);
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
              var r = t % 26,
                e = (t - r) / 26,
                n = 1 << r;
              if (this.length <= e)
                return (this._expand(e + 1), (this.words[e] |= n), this);
              for (var o = n, s = e; 0 !== o && s < this.length; s++) {
                var h = 0 | this.words[s];
                ((h += o),
                  (o = h >>> 26),
                  (h &= 67108863),
                  (this.words[s] = h));
              }
              return (0 !== o && ((this.words[s] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var r,
                e = t < 0;
              if (0 !== this.negative && !e) return -1;
              if (0 === this.negative && e) return 1;
              if ((this._strip(), this.length > 1)) r = 1;
              else {
                (e && (t = -t), i(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                r = n === t ? 0 : n < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -r : r;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var r = this.ucmp(t);
              return 0 !== this.negative ? 0 | -r : r;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var r = 0, e = this.length - 1; e >= 0; e--) {
                var i = 0 | this.words[e],
                  n = 0 | t.words[e];
                if (i !== n) {
                  i < n ? (r = -1) : i > n && (r = 1);
                  break;
                }
              }
              return r;
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
              return new I(t);
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
          var _ = { k256: null, p224: null, p192: null, p25519: null };
          function E(t, r) {
            ((this.name = t),
              (this.p = new o(r, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function N() {
            E.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function x() {
            E.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function A() {
            E.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function S() {
            E.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function I(t) {
            if ("string" === typeof t) {
              var r = o._prime(t);
              ((this.m = r.p), (this.prime = r));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function P(t) {
            (I.call(this, t),
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
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (E.prototype.ireduce = function (t) {
              var r,
                e = t;
              do {
                (this.split(e, this.tmp),
                  (e = this.imulK(e)),
                  (e = e.iadd(this.tmp)),
                  (r = e.bitLength()));
              } while (r > this.n);
              var i = r < this.n ? -1 : e.ucmp(this.p);
              return (
                0 === i
                  ? ((e.words[0] = 0), (e.length = 1))
                  : i > 0
                    ? e.isub(this.p)
                    : void 0 !== e.strip
                      ? e.strip()
                      : e._strip(),
                e
              );
            }),
            (E.prototype.split = function (t, r) {
              t.iushrn(this.n, 0, r);
            }),
            (E.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(N, E),
            (N.prototype.split = function (t, r) {
              for (
                var e = 4194303, i = Math.min(t.length, 9), n = 0;
                n < i;
                n++
              )
                r.words[n] = t.words[n];
              if (((r.length = i), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (r.words[r.length++] = o & e, n = 10; n < t.length; n++) {
                var s = 0 | t.words[n];
                ((t.words[n - 10] = ((s & e) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (t.words[n - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (N.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var r = 0, e = 0; e < t.length; e++) {
                var i = 0 | t.words[e];
                ((r += 977 * i),
                  (t.words[e] = 67108863 & r),
                  (r = 64 * i + ((r / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(x, E),
            n(A, E),
            n(S, E),
            (S.prototype.imulK = function (t) {
              for (var r = 0, e = 0; e < t.length; e++) {
                var i = 19 * (0 | t.words[e]) + r,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[e] = n), (r = i));
              }
              return (0 !== r && (t.words[t.length++] = r), t);
            }),
            (o._prime = function (t) {
              if (_[t]) return _[t];
              var r;
              if ("k256" === t) r = new N();
              else if ("p224" === t) r = new x();
              else if ("p192" === t) r = new A();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                r = new S();
              }
              return ((_[t] = r), r);
            }),
            (I.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (I.prototype._verify2 = function (t, r) {
              (i(
                0 === (t.negative | r.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === r.red, "red works only with red numbers"));
            }),
            (I.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (f(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (I.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (I.prototype.add = function (t, r) {
              this._verify2(t, r);
              var e = t.add(r);
              return (e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this));
            }),
            (I.prototype.iadd = function (t, r) {
              this._verify2(t, r);
              var e = t.iadd(r);
              return (e.cmp(this.m) >= 0 && e.isub(this.m), e);
            }),
            (I.prototype.sub = function (t, r) {
              this._verify2(t, r);
              var e = t.sub(r);
              return (e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this));
            }),
            (I.prototype.isub = function (t, r) {
              this._verify2(t, r);
              var e = t.isub(r);
              return (e.cmpn(0) < 0 && e.iadd(this.m), e);
            }),
            (I.prototype.shl = function (t, r) {
              return (this._verify1(t), this.imod(t.ushln(r)));
            }),
            (I.prototype.imul = function (t, r) {
              return (this._verify2(t, r), this.imod(t.imul(r)));
            }),
            (I.prototype.mul = function (t, r) {
              return (this._verify2(t, r), this.imod(t.mul(r)));
            }),
            (I.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (I.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (I.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var r = this.m.andln(3);
              if ((i(r % 2 === 1), 3 === r)) {
                var e = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, e);
              }
              var n = this.m.subn(1),
                s = 0;
              while (!n.isZero() && 0 === n.andln(1)) (s++, n.iushrn(1));
              i(!n.isZero());
              var h = new o(1).toRed(this),
                u = h.redNeg(),
                a = this.m.subn(1).iushrn(1),
                f = this.m.bitLength();
              f = new o(2 * f * f).toRed(this);
              while (0 !== this.pow(f, a).cmp(u)) f.redIAdd(u);
              var l = this.pow(f, n),
                d = this.pow(t, n.addn(1).iushrn(1)),
                m = this.pow(t, n),
                c = s;
              while (0 !== m.cmp(h)) {
                for (var g = m, p = 0; 0 !== g.cmp(h); p++) g = g.redSqr();
                i(p < c);
                var v = this.pow(l, new o(1).iushln(c - p - 1));
                ((d = d.redMul(v)),
                  (l = v.redSqr()),
                  (m = m.redMul(l)),
                  (c = p));
              }
              return d;
            }),
            (I.prototype.invm = function (t) {
              var r = t._invmp(this.m);
              return 0 !== r.negative
                ? ((r.negative = 0), this.imod(r).redNeg())
                : this.imod(r);
            }),
            (I.prototype.pow = function (t, r) {
              if (r.isZero()) return new o(1).toRed(this);
              if (0 === r.cmpn(1)) return t.clone();
              var e = 4,
                i = new Array(1 << e);
              ((i[0] = new o(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var s = i[0],
                h = 0,
                u = 0,
                a = r.bitLength() % 26;
              for (0 === a && (a = 26), n = r.length - 1; n >= 0; n--) {
                for (var f = r.words[n], l = a - 1; l >= 0; l--) {
                  var d = (f >> l) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== d || 0 !== h
                      ? ((h <<= 1),
                        (h |= d),
                        u++,
                        (u === e || (0 === n && 0 === l)) &&
                          ((s = this.mul(s, i[h])), (u = 0), (h = 0)))
                      : (u = 0));
                }
                a = 26;
              }
              return s;
            }),
            (I.prototype.convertTo = function (t) {
              var r = t.umod(this.m);
              return r === t ? r.clone() : r;
            }),
            (I.prototype.convertFrom = function (t) {
              var r = t.clone();
              return ((r.red = null), r);
            }),
            (o.mont = function (t) {
              return new P(t);
            }),
            n(P, I),
            (P.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (P.prototype.convertFrom = function (t) {
              var r = this.imod(t.mul(this.rinv));
              return ((r.red = null), r);
            }),
            (P.prototype.imul = function (t, r) {
              if (t.isZero() || r.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var e = t.imul(r),
                i = e
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = e.isub(i).iushrn(this.shift),
                o = n;
              return (
                n.cmp(this.m) >= 0
                  ? (o = n.isub(this.m))
                  : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (P.prototype.mul = function (t, r) {
              if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
              var e = t.mul(r),
                i = e
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = e.isub(i).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (P.prototype.invm = function (t) {
              var r = this.imod(t._invmp(this.m).mul(this.r2));
              return r._forceRed(this);
            }));
        })(t, this);
      }).call(this, e(20)(t));
    },
    1743: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "logger/5.8.0";
    },
    1744: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bytes/5.8.0";
    },
    1745: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.FixedNumber = r.FixedFormat = void 0),
        (r.formatFixed = c),
        (r.parseFixed = g));
      var i = e(592),
        n = e(179),
        o = e(593),
        s = e(591);
      const h = new n.Logger(o.version),
        u = {},
        a = s.BigNumber.from(0),
        f = s.BigNumber.from(-1);
      function l(t, r, e, i) {
        const o = { fault: r, operation: e };
        return (
          void 0 !== i && (o.value = i),
          h.throwError(t, n.Logger.errors.NUMERIC_FAULT, o)
        );
      }
      let d = "0";
      while (d.length < 256) d += d;
      function m(t) {
        if ("number" !== typeof t)
          try {
            t = s.BigNumber.from(t).toNumber();
          } catch (r) {}
        return "number" === typeof t && t >= 0 && t <= 256 && !(t % 1)
          ? "1" + d.substring(0, t)
          : h.throwArgumentError("invalid decimal size", "decimals", t);
      }
      function c(t, r) {
        null == r && (r = 0);
        const e = m(r);
        t = s.BigNumber.from(t);
        const i = t.lt(a);
        i && (t = t.mul(f));
        let n = t.mod(e).toString();
        while (n.length < e.length - 1) n = "0" + n;
        n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = t.div(e).toString();
        return ((t = 1 === e.length ? o : o + "." + n), i && (t = "-" + t), t);
      }
      function g(t, r) {
        null == r && (r = 0);
        const e = m(r);
        ("string" === typeof t && t.match(/^-?[0-9.]+$/)) ||
          h.throwArgumentError("invalid decimal value", "value", t);
        const i = "-" === t.substring(0, 1);
        (i && (t = t.substring(1)),
          "." === t && h.throwArgumentError("missing value", "value", t));
        const n = t.split(".");
        n.length > 2 &&
          h.throwArgumentError("too many decimal points", "value", t);
        let o = n[0],
          u = n[1];
        (o || (o = "0"), u || (u = "0"));
        while ("0" === u[u.length - 1]) u = u.substring(0, u.length - 1);
        (u.length > e.length - 1 &&
          l("fractional component exceeds decimals", "underflow", "parseFixed"),
          "" === u && (u = "0"));
        while (u.length < e.length - 1) u += "0";
        const a = s.BigNumber.from(o),
          d = s.BigNumber.from(u);
        let c = a.mul(e).add(d);
        return (i && (c = c.mul(f)), c);
      }
      class FixedFormat {
        constructor(t, r, e, i) {
          (t !== u &&
            h.throwError(
              "cannot use FixedFormat constructor; use FixedFormat.from",
              n.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.signed = r),
            (this.width = e),
            (this.decimals = i),
            (this.name =
              (r ? "" : "u") + "fixed" + String(e) + "x" + String(i)),
            (this._multiplier = m(i)),
            Object.freeze(this));
        }
        static from(t) {
          if (t instanceof FixedFormat) return t;
          "number" === typeof t && (t = "fixed128x" + t);
          let r = !0,
            e = 128,
            i = 18;
          if ("string" === typeof t)
            if ("fixed" === t);
            else if ("ufixed" === t) r = !1;
            else {
              const n = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              (n || h.throwArgumentError("invalid fixed format", "format", t),
                (r = "u" !== n[1]),
                (e = parseInt(n[2])),
                (i = parseInt(n[3])));
            }
          else if (t) {
            const n = (r, e, i) =>
              null == t[r]
                ? i
                : (typeof t[r] !== e &&
                    h.throwArgumentError(
                      "invalid fixed format (" + r + " not " + e + ")",
                      "format." + r,
                      t[r],
                    ),
                  t[r]);
            ((r = n("signed", "boolean", r)),
              (e = n("width", "number", e)),
              (i = n("decimals", "number", i)));
          }
          return (
            e % 8 &&
              h.throwArgumentError(
                "invalid fixed format width (not byte aligned)",
                "format.width",
                e,
              ),
            i > 80 &&
              h.throwArgumentError(
                "invalid fixed format (decimals too large)",
                "format.decimals",
                i,
              ),
            new FixedFormat(u, r, e, i)
          );
        }
      }
      r.FixedFormat = FixedFormat;
      class FixedNumber {
        constructor(t, r, e, i) {
          (t !== u &&
            h.throwError(
              "cannot use FixedNumber constructor; use FixedNumber.from",
              n.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new FixedFormat" },
            ),
            (this.format = i),
            (this._hex = r),
            (this._value = e),
            (this._isFixedNumber = !0),
            Object.freeze(this));
        }
        _checkFormat(t) {
          this.format.name !== t.format.name &&
            h.throwArgumentError(
              "incompatible format; use fixedNumber.toFormat",
              "other",
              t,
            );
        }
        addUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.add(e),
            this.format.decimals,
            this.format,
          );
        }
        subUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.sub(e),
            this.format.decimals,
            this.format,
          );
        }
        mulUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.mul(e).div(this.format._multiplier),
            this.format.decimals,
            this.format,
          );
        }
        divUnsafe(t) {
          this._checkFormat(t);
          const r = g(this._value, this.format.decimals),
            e = g(t._value, t.format.decimals);
          return FixedNumber.fromValue(
            r.mul(this.format._multiplier).div(e),
            this.format.decimals,
            this.format,
          );
        }
        floor() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let r = FixedNumber.from(t[0], this.format);
          const e = !t[1].match(/^(0*)$/);
          return (
            this.isNegative() && e && (r = r.subUnsafe(p.toFormat(r.format))),
            r
          );
        }
        ceiling() {
          const t = this.toString().split(".");
          1 === t.length && t.push("0");
          let r = FixedNumber.from(t[0], this.format);
          const e = !t[1].match(/^(0*)$/);
          return (
            !this.isNegative() && e && (r = r.addUnsafe(p.toFormat(r.format))),
            r
          );
        }
        round(t) {
          null == t && (t = 0);
          const r = this.toString().split(".");
          if (
            (1 === r.length && r.push("0"),
            (t < 0 || t > 80 || t % 1) &&
              h.throwArgumentError("invalid decimal count", "decimals", t),
            r[1].length <= t)
          )
            return this;
          const e = FixedNumber.from("1" + d.substring(0, t), this.format),
            i = v.toFormat(this.format);
          return this.mulUnsafe(e).addUnsafe(i).floor().divUnsafe(e);
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
        toHexString(t) {
          if (null == t) return this._hex;
          t % 8 && h.throwArgumentError("invalid byte width", "width", t);
          const r = s.BigNumber.from(this._hex)
            .fromTwos(this.format.width)
            .toTwos(t)
            .toHexString();
          return (0, i.hexZeroPad)(r, t / 8);
        }
        toUnsafeFloat() {
          return parseFloat(this.toString());
        }
        toFormat(t) {
          return FixedNumber.fromString(this._value, t);
        }
        static fromValue(t, r, e) {
          return (
            null != e ||
              null == r ||
              (0, s.isBigNumberish)(r) ||
              ((e = r), (r = null)),
            null == r && (r = 0),
            null == e && (e = "fixed"),
            FixedNumber.fromString(c(t, r), FixedFormat.from(e))
          );
        }
        static fromString(t, r) {
          null == r && (r = "fixed");
          const e = FixedFormat.from(r),
            n = g(t, e.decimals);
          !e.signed &&
            n.lt(a) &&
            l("unsigned value cannot be negative", "overflow", "value", t);
          let o = null;
          e.signed
            ? (o = n.toTwos(e.width).toHexString())
            : ((o = n.toHexString()), (o = (0, i.hexZeroPad)(o, e.width / 8)));
          const s = c(n, e.decimals);
          return new FixedNumber(u, o, s, e);
        }
        static fromBytes(t, r) {
          null == r && (r = "fixed");
          const e = FixedFormat.from(r);
          if ((0, i.arrayify)(t).length > e.width / 8)
            throw new Error("overflow");
          let n = s.BigNumber.from(t);
          e.signed && (n = n.fromTwos(e.width));
          const o = n.toTwos((e.signed ? 0 : 1) + e.width).toHexString(),
            h = c(n, e.decimals);
          return new FixedNumber(u, o, h, e);
        }
        static from(t, r) {
          if ("string" === typeof t) return FixedNumber.fromString(t, r);
          if ((0, i.isBytes)(t)) return FixedNumber.fromBytes(t, r);
          try {
            return FixedNumber.fromValue(t, 0, r);
          } catch (e) {
            if (e.code !== n.Logger.errors.INVALID_ARGUMENT) throw e;
          }
          return h.throwArgumentError("invalid FixedNumber value", "value", t);
        }
        static isFixedNumber(t) {
          return !(!t || !t._isFixedNumber);
        }
      }
      r.FixedNumber = FixedNumber;
      const p = FixedNumber.from(1),
        v = FixedNumber.from("0.5");
    },
    1746: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "units/5.7.0";
    },
    179: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Logger = r.LogLevel = r.ErrorCode = void 0));
      var i = e(1743);
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let h = s["default"],
        u = null;
      function a() {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (e) {
                t.push(r);
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
      const f = a();
      var l, d;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(l || (r.LogLevel = l = {})),
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
        })(d || (r.ErrorCode = d = {})));
      const m = "0123456789abcdef";
      class Logger {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, r) {
          const e = t.toLowerCase();
          (null == s[e] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            h > s[e] || console.log.apply(console, r));
        }
        debug() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.DEBUG, r);
        }
        info() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.INFO, r);
        }
        warn() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.WARNING, r);
        }
        makeError(t, r, e) {
          if (o) return this.makeError("censored error", r, {});
          (r || (r = Logger.errors.UNKNOWN_ERROR), e || (e = {}));
          const i = [];
          (Object.keys(e).forEach((t) => {
            const r = e[t];
            try {
              if (r instanceof Uint8Array) {
                let e = "";
                for (let t = 0; t < r.length; t++)
                  ((e += m[r[t] >> 4]), (e += m[15 & r[t]]));
                i.push(t + "=Uint8Array(0x" + e + ")");
              } else i.push(t + "=" + JSON.stringify(r));
            } catch (h) {
              i.push(t + "=" + JSON.stringify(e[t].toString()));
            }
          }),
            i.push("code=" + r),
            i.push("version=" + this.version));
          const n = t;
          let s = "";
          switch (r) {
            case d.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = t;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
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
              s = r;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            i.length && (t += " (" + i.join(", ") + ")"));
          const h = new Error(t);
          return (
            (h.reason = n),
            (h.code = r),
            Object.keys(e).forEach(function (t) {
              h[t] = e[t];
            }),
            h
          );
        }
        throwError(t, r, e) {
          throw this.makeError(t, r, e);
        }
        throwArgumentError(t, r, e) {
          return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
            argument: r,
            value: e,
          });
        }
        assert(t, r, e, i) {
          t || this.throwError(r, e, i);
        }
        assertArgument(t, r, e, i) {
          t || this.throwArgumentError(r, e, i);
        }
        checkNormalize(t) {
          (null == t && (t = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f },
              ));
        }
        checkSafeUint53(t, r) {
          "number" === typeof t &&
            (null == r && (r = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, r, e) {
          ((e = e ? ": " + e : ""),
            t < r &&
              this.throwError(
                "missing argument" + e,
                Logger.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: r },
              ),
            t > r &&
              this.throwError(
                "too many arguments" + e,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: r },
              ));
        }
        checkNew(t, r) {
          (t !== Object && null != t) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(t, r) {
          t === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" },
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return (u || (u = new Logger(i.version)), u);
        }
        static setCensorship(t, r) {
          if (
            (!t &&
              r &&
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
          ((o = !!t), (n = !!r));
        }
        static setLogLevel(t) {
          const r = s[t.toLowerCase()];
          null != r
            ? (h = r)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((r.Logger = Logger), (Logger.errors = d), (Logger.levels = l));
    },
    291: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "BigNumber", {
          enumerable: !0,
          get: function () {
            return i.BigNumber;
          },
        }),
        Object.defineProperty(r, "FixedFormat", {
          enumerable: !0,
          get: function () {
            return n.FixedFormat;
          },
        }),
        Object.defineProperty(r, "FixedNumber", {
          enumerable: !0,
          get: function () {
            return n.FixedNumber;
          },
        }),
        Object.defineProperty(r, "_base16To36", {
          enumerable: !0,
          get: function () {
            return i._base16To36;
          },
        }),
        Object.defineProperty(r, "_base36To16", {
          enumerable: !0,
          get: function () {
            return i._base36To16;
          },
        }),
        Object.defineProperty(r, "formatFixed", {
          enumerable: !0,
          get: function () {
            return n.formatFixed;
          },
        }),
        Object.defineProperty(r, "parseFixed", {
          enumerable: !0,
          get: function () {
            return n.parseFixed;
          },
        }));
      var i = e(585),
        n = e(1726);
    },
    585: function (t, r, e) {
      "use strict";
      var i = e(0);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.BigNumber = void 0),
        (r._base16To36 = w),
        (r._base36To16 = y),
        (r.isBigNumberish = d));
      var n = i(e(586)),
        o = e(96),
        s = e(77),
        h = e(587),
        u = n.default.BN;
      const a = new s.Logger(h.version),
        f = {},
        l = 9007199254740991;
      function d(t) {
        return (
          null != t &&
          (BigNumber.isBigNumber(t) ||
            ("number" === typeof t && t % 1 === 0) ||
            ("string" === typeof t && !!t.match(/^-?[0-9]+$/)) ||
            (0, o.isHexString)(t) ||
            "bigint" === typeof t ||
            (0, o.isBytes)(t))
        );
      }
      let m = !1;
      class BigNumber {
        constructor(t, r) {
          (t !== f &&
            a.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" },
            ),
            (this._hex = r),
            (this._isBigNumber = !0),
            Object.freeze(this));
        }
        fromTwos(t) {
          return g(p(this).fromTwos(t));
        }
        toTwos(t) {
          return g(p(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0]
            ? BigNumber.from(this._hex.substring(1))
            : this;
        }
        add(t) {
          return g(p(this).add(p(t)));
        }
        sub(t) {
          return g(p(this).sub(p(t)));
        }
        div(t) {
          const r = BigNumber.from(t);
          return (
            r.isZero() && v("division-by-zero", "div"),
            g(p(this).div(p(t)))
          );
        }
        mul(t) {
          return g(p(this).mul(p(t)));
        }
        mod(t) {
          const r = p(t);
          return (
            r.isNeg() && v("division-by-zero", "mod"),
            g(p(this).umod(r))
          );
        }
        pow(t) {
          const r = p(t);
          return (r.isNeg() && v("negative-power", "pow"), g(p(this).pow(r)));
        }
        and(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "and"),
            g(p(this).and(r))
          );
        }
        or(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "or"),
            g(p(this).or(r))
          );
        }
        xor(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "xor"),
            g(p(this).xor(r))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "mask"),
            g(p(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "shl"),
            g(p(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "shr"),
            g(p(this).shrn(t))
          );
        }
        eq(t) {
          return p(this).eq(p(t));
        }
        lt(t) {
          return p(this).lt(p(t));
        }
        lte(t) {
          return p(this).lte(p(t));
        }
        gt(t) {
          return p(this).gt(p(t));
        }
        gte(t) {
          return p(this).gte(p(t));
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
          } catch (t) {
            v("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (t) {}
          return a.throwError(
            "this platform does not support BigInt",
            s.Logger.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() },
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? m ||
                  ((m = !0),
                  a.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed",
                  ))
                : 16 === arguments[0]
                  ? a.throwError(
                      "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                      s.Logger.errors.UNEXPECTED_ARGUMENT,
                      {},
                    )
                  : a.throwError(
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
        toJSON(t) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(t) {
          if (t instanceof BigNumber) return t;
          if ("string" === typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new BigNumber(f, c(t))
              : t.match(/^-?[0-9]+$/)
                ? new BigNumber(f, c(new u(t)))
                : a.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" === typeof t)
            return (
              t % 1 && v("underflow", "BigNumber.from", t),
              (t >= l || t <= -l) && v("overflow", "BigNumber.from", t),
              BigNumber.from(String(t))
            );
          const r = t;
          if ("bigint" === typeof r) return BigNumber.from(r.toString());
          if ((0, o.isBytes)(r)) return BigNumber.from((0, o.hexlify)(r));
          if (r)
            if (r.toHexString) {
              const t = r.toHexString();
              if ("string" === typeof t) return BigNumber.from(t);
            } else {
              let t = r._hex;
              if (
                (null == t && "BigNumber" === r.type && (t = r.hex),
                "string" === typeof t &&
                  ((0, o.isHexString)(t) ||
                    ("-" === t[0] && (0, o.isHexString)(t.substring(1)))))
              )
                return BigNumber.from(t);
            }
          return a.throwArgumentError("invalid BigNumber value", "value", t);
        }
        static isBigNumber(t) {
          return !(!t || !t._isBigNumber);
        }
      }
      function c(t) {
        if ("string" !== typeof t) return c(t.toString(16));
        if ("-" === t[0])
          return (
            (t = t.substring(1)),
            "-" === t[0] && a.throwArgumentError("invalid hex", "value", t),
            (t = c(t)),
            "0x00" === t ? t : "-" + t
          );
        if (("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t))
          return "0x00";
        t.length % 2 && (t = "0x0" + t.substring(2));
        while (t.length > 4 && "0x00" === t.substring(0, 4))
          t = "0x" + t.substring(4);
        return t;
      }
      function g(t) {
        return BigNumber.from(c(t));
      }
      function p(t) {
        const r = BigNumber.from(t).toHexString();
        return "-" === r[0]
          ? new u("-" + r.substring(3), 16)
          : new u(r.substring(2), 16);
      }
      function v(t, r, e) {
        const i = { fault: t, operation: r };
        return (
          null != e && (i.value = e),
          a.throwError(t, s.Logger.errors.NUMERIC_FAULT, i)
        );
      }
      function y(t) {
        return new u(t, 36).toString(16);
      }
      function w(t) {
        return new u(t, 16).toString(36);
      }
      r.BigNumber = BigNumber;
    },
    586: function (t, r, e) {
      (function (t) {
        (function (t, r) {
          "use strict";
          function i(t, r) {
            if (!t) throw new Error(r || "Assertion failed");
          }
          function n(t, r) {
            t.super_ = r;
            var e = function () {};
            ((e.prototype = r.prototype),
              (t.prototype = new e()),
              (t.prototype.constructor = t));
          }
          function o(t, r, e) {
            if (o.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== r && "be" !== r) || ((e = r), (r = 10)),
                this._init(t || 0, r || 10, e || "be")));
          }
          var s;
          ("object" === typeof t ? (t.exports = o) : (r.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : e(1725).Buffer;
          } catch (R) {}
          function h(t, r) {
            var e = t.charCodeAt(r);
            return e >= 48 && e <= 57
              ? e - 48
              : e >= 65 && e <= 70
                ? e - 55
                : e >= 97 && e <= 102
                  ? e - 87
                  : void i(!1, "Invalid character in " + t);
          }
          function u(t, r, e) {
            var i = h(t, e);
            return (e - 1 >= r && (i |= h(t, e - 1) << 4), i);
          }
          function a(t, r, e, n) {
            for (
              var o = 0, s = 0, h = Math.min(t.length, e), u = r;
              u < h;
              u++
            ) {
              var a = t.charCodeAt(u) - 48;
              ((o *= n),
                (s = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a),
                i(a >= 0 && s < n, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function f(t, r) {
            ((t.words = r.words),
              (t.length = r.length),
              (t.negative = r.negative),
              (t.red = r.red));
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
            (o.max = function (t, r) {
              return t.cmp(r) > 0 ? t : r;
            }),
            (o.min = function (t, r) {
              return t.cmp(r) < 0 ? t : r;
            }),
            (o.prototype._init = function (t, r, e) {
              if ("number" === typeof t) return this._initNumber(t, r, e);
              if ("object" === typeof t) return this._initArray(t, r, e);
              ("hex" === r && (r = 16),
                i(r === (0 | r) && r >= 2 && r <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var n = 0;
              ("-" === t[0] && (n++, (this.negative = 1)),
                n < t.length &&
                  (16 === r
                    ? this._parseHex(t, n, e)
                    : (this._parseBase(t, r, n),
                      "le" === e && this._initArray(this.toArray(), r, e))));
            }),
            (o.prototype._initNumber = function (t, r, e) {
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
                "le" === e && this._initArray(this.toArray(), r, e));
            }),
            (o.prototype._initArray = function (t, r, e) {
              if ((i("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var o,
                s,
                h = 0;
              if ("be" === e)
                for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                  ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[o] |= (s << h) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - h)) & 67108863),
                    (h += 24),
                    h >= 26 && ((h -= 26), o++));
              else if ("le" === e)
                for (n = 0, o = 0; n < t.length; n += 3)
                  ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[o] |= (s << h) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - h)) & 67108863),
                    (h += 24),
                    h >= 26 && ((h -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, r, e) {
              ((this.length = Math.ceil((t.length - r) / 6)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var n,
                o = 0,
                s = 0;
              if ("be" === e)
                for (i = t.length - 1; i >= r; i -= 2)
                  ((n = u(t, r, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var h = t.length - r;
                for (i = h % 2 === 0 ? r + 1 : r; i < t.length; i += 2)
                  ((n = u(t, r, i) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (t, r, e) {
              ((this.words = [0]), (this.length = 1));
              for (var i = 0, n = 1; n <= 67108863; n *= r) i++;
              (i--, (n = (n / r) | 0));
              for (
                var o = t.length - e,
                  s = o % i,
                  h = Math.min(o, o - s) + e,
                  u = 0,
                  f = e;
                f < h;
                f += i
              )
                ((u = a(t, f, f + i, r)),
                  this.imuln(n),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              if (0 !== s) {
                var l = 1;
                for (u = a(t, f, t.length, r), f = 0; f < s; f++) l *= r;
                (this.imuln(l),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (o.prototype._move = function (t) {
              f(t, this);
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
            m = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            c = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (t, r) {
            var e;
            if (((t = t || 10), (r = 0 | r || 1), 16 === t || "hex" === t)) {
              e = "";
              for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var h = this.words[s],
                  u = (16777215 & ((h << n) | o)).toString(16);
                ((o = (h >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (e =
                    0 !== o || s !== this.length - 1
                      ? d[6 - u.length] + u + e
                      : u + e));
              }
              0 !== o && (e = o.toString(16) + e);
              while (e.length % r !== 0) e = "0" + e;
              return (0 !== this.negative && (e = "-" + e), e);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var a = m[t],
                f = c[t];
              e = "";
              var l = this.clone();
              l.negative = 0;
              while (!l.isZero()) {
                var g = l.modrn(f).toString(t);
                ((l = l.idivn(f)),
                  (e = l.isZero() ? g + e : d[a - g.length] + g + e));
              }
              this.isZero() && (e = "0" + e);
              while (e.length % r !== 0) e = "0" + e;
              return (0 !== this.negative && (e = "-" + e), e);
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
              (o.prototype.toBuffer = function (t, r) {
                return this.toArrayLike(s, t, r);
              }),
            (o.prototype.toArray = function (t, r) {
              return this.toArrayLike(Array, t, r);
            }));
          var g = function (t, r) {
            return t.allocUnsafe ? t.allocUnsafe(r) : new t(r);
          };
          function p(t) {
            for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
              var i = (e / 26) | 0,
                n = e % 26;
              r[e] = (t.words[i] >>> n) & 1;
            }
            return r;
          }
          function v(t, r, e) {
            e.negative = r.negative ^ t.negative;
            var i = (t.length + r.length) | 0;
            ((e.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | r.words[0],
              s = n * o,
              h = 67108863 & s,
              u = (s / 67108864) | 0;
            e.words[0] = h;
            for (var a = 1; a < i; a++) {
              for (
                var f = u >>> 26,
                  l = 67108863 & u,
                  d = Math.min(a, r.length - 1),
                  m = Math.max(0, a - t.length + 1);
                m <= d;
                m++
              ) {
                var c = (a - m) | 0;
                ((n = 0 | t.words[c]),
                  (o = 0 | r.words[m]),
                  (s = n * o + l),
                  (f += (s / 67108864) | 0),
                  (l = 67108863 & s));
              }
              ((e.words[a] = 0 | l), (u = 0 | f));
            }
            return (0 !== u ? (e.words[a] = 0 | u) : e.length--, e._strip());
          }
          ((o.prototype.toArrayLike = function (t, r, e) {
            this._strip();
            var n = this.byteLength(),
              o = e || Math.max(1, n);
            (i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"));
            var s = g(t, o),
              h = "le" === r ? "LE" : "BE";
            return (this["_toArrayLike" + h](s, n), s);
          }),
            (o.prototype._toArrayLikeLE = function (t, r) {
              for (var e = 0, i = 0, n = 0, o = 0; n < this.length; n++) {
                var s = (this.words[n] << o) | i;
                ((t[e++] = 255 & s),
                  e < t.length && (t[e++] = (s >> 8) & 255),
                  e < t.length && (t[e++] = (s >> 16) & 255),
                  6 === o
                    ? (e < t.length && (t[e++] = (s >> 24) & 255),
                      (i = 0),
                      (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (e < t.length) {
                t[e++] = i;
                while (e < t.length) t[e++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (t, r) {
              for (
                var e = t.length - 1, i = 0, n = 0, o = 0;
                n < this.length;
                n++
              ) {
                var s = (this.words[n] << o) | i;
                ((t[e--] = 255 & s),
                  e >= 0 && (t[e--] = (s >> 8) & 255),
                  e >= 0 && (t[e--] = (s >> 16) & 255),
                  6 === o
                    ? (e >= 0 && (t[e--] = (s >> 24) & 255), (i = 0), (o = 0))
                    : ((i = s >>> 24), (o += 2)));
              }
              if (e >= 0) {
                t[e--] = i;
                while (e >= 0) t[e--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var r = t,
                    e = 0;
                  return (
                    r >= 4096 && ((e += 13), (r >>>= 13)),
                    r >= 64 && ((e += 7), (r >>>= 7)),
                    r >= 8 && ((e += 4), (r >>>= 4)),
                    r >= 2 && ((e += 2), (r >>>= 2)),
                    e + r
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var r = t,
                e = 0;
              return (
                0 === (8191 & r) && ((e += 13), (r >>>= 13)),
                0 === (127 & r) && ((e += 7), (r >>>= 7)),
                0 === (15 & r) && ((e += 4), (r >>>= 4)),
                0 === (3 & r) && ((e += 2), (r >>>= 2)),
                0 === (1 & r) && e++,
                e
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                r = this._countBits(t);
              return 26 * (this.length - 1) + r;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, r = 0; r < this.length; r++) {
                var e = this._zeroBits(this.words[r]);
                if (((t += e), 26 !== e)) break;
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
              for (var r = 0; r < t.length; r++)
                this.words[r] = this.words[r] | t.words[r];
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
              var r;
              r = this.length > t.length ? t : this;
              for (var e = 0; e < r.length; e++)
                this.words[e] = this.words[e] & t.words[e];
              return ((this.length = r.length), this._strip());
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
              var r, e;
              this.length > t.length
                ? ((r = this), (e = t))
                : ((r = t), (e = this));
              for (var i = 0; i < e.length; i++)
                this.words[i] = r.words[i] ^ e.words[i];
              if (this !== r)
                for (; i < r.length; i++) this.words[i] = r.words[i];
              return ((this.length = r.length), this._strip());
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
              var r = 0 | Math.ceil(t / 26),
                e = t % 26;
              (this._expand(r), e > 0 && r--);
              for (var n = 0; n < r; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                e > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - e))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, r) {
              i("number" === typeof t && t >= 0);
              var e = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(e + 1),
                (this.words[e] = r
                  ? this.words[e] | (1 << n)
                  : this.words[e] & ~(1 << n)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var r, e, i;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (r = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (r = this.isub(t)),
                  (t.negative = 1),
                  r._normSign()
                );
              this.length > t.length
                ? ((e = this), (i = t))
                : ((e = t), (i = this));
              for (var n = 0, o = 0; o < i.length; o++)
                ((r = (0 | e.words[o]) + (0 | i.words[o]) + n),
                  (this.words[o] = 67108863 & r),
                  (n = r >>> 26));
              for (; 0 !== n && o < e.length; o++)
                ((r = (0 | e.words[o]) + n),
                  (this.words[o] = 67108863 & r),
                  (n = r >>> 26));
              if (((this.length = e.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (e !== this)
                for (; o < e.length; o++) this.words[o] = e.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var r;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (r = this.sub(t)), (t.negative ^= 1), r)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (r = t.sub(this)),
                    (this.negative = 1),
                    r)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var r = this.iadd(t);
                return ((t.negative = 1), r._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var e,
                i,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((e = this), (i = t)) : ((e = t), (i = this));
              for (var o = 0, s = 0; s < i.length; s++)
                ((r = (0 | e.words[s]) - (0 | i.words[s]) + o),
                  (o = r >> 26),
                  (this.words[s] = 67108863 & r));
              for (; 0 !== o && s < e.length; s++)
                ((r = (0 | e.words[s]) + o),
                  (o = r >> 26),
                  (this.words[s] = 67108863 & r));
              if (0 === o && s < e.length && e !== this)
                for (; s < e.length; s++) this.words[s] = e.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                e !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var y = function (t, r, e) {
            var i,
              n,
              o,
              s = t.words,
              h = r.words,
              u = e.words,
              a = 0,
              f = 0 | s[0],
              l = 8191 & f,
              d = f >>> 13,
              m = 0 | s[1],
              c = 8191 & m,
              g = m >>> 13,
              p = 0 | s[2],
              v = 8191 & p,
              y = p >>> 13,
              w = 0 | s[3],
              b = 8191 & w,
              M = w >>> 13,
              _ = 0 | s[4],
              E = 8191 & _,
              N = _ >>> 13,
              x = 0 | s[5],
              A = 8191 & x,
              S = x >>> 13,
              I = 0 | s[6],
              P = 8191 & I,
              R = I >>> 13,
              O = 0 | s[7],
              F = 8191 & O,
              L = O >>> 13,
              T = 0 | s[8],
              U = 8191 & T,
              k = T >>> 13,
              B = 0 | s[9],
              C = 8191 & B,
              j = B >>> 13,
              q = 0 | h[0],
              D = 8191 & q,
              z = q >>> 13,
              Z = 0 | h[1],
              G = 8191 & Z,
              K = Z >>> 13,
              H = 0 | h[2],
              V = 8191 & H,
              W = H >>> 13,
              X = 0 | h[3],
              J = 8191 & X,
              $ = X >>> 13,
              Y = 0 | h[4],
              Q = 8191 & Y,
              tt = Y >>> 13,
              rt = 0 | h[5],
              et = 8191 & rt,
              it = rt >>> 13,
              nt = 0 | h[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              ht = 0 | h[7],
              ut = 8191 & ht,
              at = ht >>> 13,
              ft = 0 | h[8],
              lt = 8191 & ft,
              dt = ft >>> 13,
              mt = 0 | h[9],
              ct = 8191 & mt,
              gt = mt >>> 13;
            ((e.negative = t.negative ^ r.negative),
              (e.length = 19),
              (i = Math.imul(l, D)),
              (n = Math.imul(l, z)),
              (n = (n + Math.imul(d, D)) | 0),
              (o = Math.imul(d, z)));
            var pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (pt >>> 26)) | 0),
              (pt &= 67108863),
              (i = Math.imul(c, D)),
              (n = Math.imul(c, z)),
              (n = (n + Math.imul(g, D)) | 0),
              (o = Math.imul(g, z)),
              (i = (i + Math.imul(l, G)) | 0),
              (n = (n + Math.imul(l, K)) | 0),
              (n = (n + Math.imul(d, G)) | 0),
              (o = (o + Math.imul(d, K)) | 0));
            var vt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(v, D)),
              (n = Math.imul(v, z)),
              (n = (n + Math.imul(y, D)) | 0),
              (o = Math.imul(y, z)),
              (i = (i + Math.imul(c, G)) | 0),
              (n = (n + Math.imul(c, K)) | 0),
              (n = (n + Math.imul(g, G)) | 0),
              (o = (o + Math.imul(g, K)) | 0),
              (i = (i + Math.imul(l, V)) | 0),
              (n = (n + Math.imul(l, W)) | 0),
              (n = (n + Math.imul(d, V)) | 0),
              (o = (o + Math.imul(d, W)) | 0));
            var yt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(b, D)),
              (n = Math.imul(b, z)),
              (n = (n + Math.imul(M, D)) | 0),
              (o = Math.imul(M, z)),
              (i = (i + Math.imul(v, G)) | 0),
              (n = (n + Math.imul(v, K)) | 0),
              (n = (n + Math.imul(y, G)) | 0),
              (o = (o + Math.imul(y, K)) | 0),
              (i = (i + Math.imul(c, V)) | 0),
              (n = (n + Math.imul(c, W)) | 0),
              (n = (n + Math.imul(g, V)) | 0),
              (o = (o + Math.imul(g, W)) | 0),
              (i = (i + Math.imul(l, J)) | 0),
              (n = (n + Math.imul(l, $)) | 0),
              (n = (n + Math.imul(d, J)) | 0),
              (o = (o + Math.imul(d, $)) | 0));
            var wt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(E, D)),
              (n = Math.imul(E, z)),
              (n = (n + Math.imul(N, D)) | 0),
              (o = Math.imul(N, z)),
              (i = (i + Math.imul(b, G)) | 0),
              (n = (n + Math.imul(b, K)) | 0),
              (n = (n + Math.imul(M, G)) | 0),
              (o = (o + Math.imul(M, K)) | 0),
              (i = (i + Math.imul(v, V)) | 0),
              (n = (n + Math.imul(v, W)) | 0),
              (n = (n + Math.imul(y, V)) | 0),
              (o = (o + Math.imul(y, W)) | 0),
              (i = (i + Math.imul(c, J)) | 0),
              (n = (n + Math.imul(c, $)) | 0),
              (n = (n + Math.imul(g, J)) | 0),
              (o = (o + Math.imul(g, $)) | 0),
              (i = (i + Math.imul(l, Q)) | 0),
              (n = (n + Math.imul(l, tt)) | 0),
              (n = (n + Math.imul(d, Q)) | 0),
              (o = (o + Math.imul(d, tt)) | 0));
            var bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(A, D)),
              (n = Math.imul(A, z)),
              (n = (n + Math.imul(S, D)) | 0),
              (o = Math.imul(S, z)),
              (i = (i + Math.imul(E, G)) | 0),
              (n = (n + Math.imul(E, K)) | 0),
              (n = (n + Math.imul(N, G)) | 0),
              (o = (o + Math.imul(N, K)) | 0),
              (i = (i + Math.imul(b, V)) | 0),
              (n = (n + Math.imul(b, W)) | 0),
              (n = (n + Math.imul(M, V)) | 0),
              (o = (o + Math.imul(M, W)) | 0),
              (i = (i + Math.imul(v, J)) | 0),
              (n = (n + Math.imul(v, $)) | 0),
              (n = (n + Math.imul(y, J)) | 0),
              (o = (o + Math.imul(y, $)) | 0),
              (i = (i + Math.imul(c, Q)) | 0),
              (n = (n + Math.imul(c, tt)) | 0),
              (n = (n + Math.imul(g, Q)) | 0),
              (o = (o + Math.imul(g, tt)) | 0),
              (i = (i + Math.imul(l, et)) | 0),
              (n = (n + Math.imul(l, it)) | 0),
              (n = (n + Math.imul(d, et)) | 0),
              (o = (o + Math.imul(d, it)) | 0));
            var Mt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(P, D)),
              (n = Math.imul(P, z)),
              (n = (n + Math.imul(R, D)) | 0),
              (o = Math.imul(R, z)),
              (i = (i + Math.imul(A, G)) | 0),
              (n = (n + Math.imul(A, K)) | 0),
              (n = (n + Math.imul(S, G)) | 0),
              (o = (o + Math.imul(S, K)) | 0),
              (i = (i + Math.imul(E, V)) | 0),
              (n = (n + Math.imul(E, W)) | 0),
              (n = (n + Math.imul(N, V)) | 0),
              (o = (o + Math.imul(N, W)) | 0),
              (i = (i + Math.imul(b, J)) | 0),
              (n = (n + Math.imul(b, $)) | 0),
              (n = (n + Math.imul(M, J)) | 0),
              (o = (o + Math.imul(M, $)) | 0),
              (i = (i + Math.imul(v, Q)) | 0),
              (n = (n + Math.imul(v, tt)) | 0),
              (n = (n + Math.imul(y, Q)) | 0),
              (o = (o + Math.imul(y, tt)) | 0),
              (i = (i + Math.imul(c, et)) | 0),
              (n = (n + Math.imul(c, it)) | 0),
              (n = (n + Math.imul(g, et)) | 0),
              (o = (o + Math.imul(g, it)) | 0),
              (i = (i + Math.imul(l, ot)) | 0),
              (n = (n + Math.imul(l, st)) | 0),
              (n = (n + Math.imul(d, ot)) | 0),
              (o = (o + Math.imul(d, st)) | 0));
            var _t = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(F, D)),
              (n = Math.imul(F, z)),
              (n = (n + Math.imul(L, D)) | 0),
              (o = Math.imul(L, z)),
              (i = (i + Math.imul(P, G)) | 0),
              (n = (n + Math.imul(P, K)) | 0),
              (n = (n + Math.imul(R, G)) | 0),
              (o = (o + Math.imul(R, K)) | 0),
              (i = (i + Math.imul(A, V)) | 0),
              (n = (n + Math.imul(A, W)) | 0),
              (n = (n + Math.imul(S, V)) | 0),
              (o = (o + Math.imul(S, W)) | 0),
              (i = (i + Math.imul(E, J)) | 0),
              (n = (n + Math.imul(E, $)) | 0),
              (n = (n + Math.imul(N, J)) | 0),
              (o = (o + Math.imul(N, $)) | 0),
              (i = (i + Math.imul(b, Q)) | 0),
              (n = (n + Math.imul(b, tt)) | 0),
              (n = (n + Math.imul(M, Q)) | 0),
              (o = (o + Math.imul(M, tt)) | 0),
              (i = (i + Math.imul(v, et)) | 0),
              (n = (n + Math.imul(v, it)) | 0),
              (n = (n + Math.imul(y, et)) | 0),
              (o = (o + Math.imul(y, it)) | 0),
              (i = (i + Math.imul(c, ot)) | 0),
              (n = (n + Math.imul(c, st)) | 0),
              (n = (n + Math.imul(g, ot)) | 0),
              (o = (o + Math.imul(g, st)) | 0),
              (i = (i + Math.imul(l, ut)) | 0),
              (n = (n + Math.imul(l, at)) | 0),
              (n = (n + Math.imul(d, ut)) | 0),
              (o = (o + Math.imul(d, at)) | 0));
            var Et = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(U, D)),
              (n = Math.imul(U, z)),
              (n = (n + Math.imul(k, D)) | 0),
              (o = Math.imul(k, z)),
              (i = (i + Math.imul(F, G)) | 0),
              (n = (n + Math.imul(F, K)) | 0),
              (n = (n + Math.imul(L, G)) | 0),
              (o = (o + Math.imul(L, K)) | 0),
              (i = (i + Math.imul(P, V)) | 0),
              (n = (n + Math.imul(P, W)) | 0),
              (n = (n + Math.imul(R, V)) | 0),
              (o = (o + Math.imul(R, W)) | 0),
              (i = (i + Math.imul(A, J)) | 0),
              (n = (n + Math.imul(A, $)) | 0),
              (n = (n + Math.imul(S, J)) | 0),
              (o = (o + Math.imul(S, $)) | 0),
              (i = (i + Math.imul(E, Q)) | 0),
              (n = (n + Math.imul(E, tt)) | 0),
              (n = (n + Math.imul(N, Q)) | 0),
              (o = (o + Math.imul(N, tt)) | 0),
              (i = (i + Math.imul(b, et)) | 0),
              (n = (n + Math.imul(b, it)) | 0),
              (n = (n + Math.imul(M, et)) | 0),
              (o = (o + Math.imul(M, it)) | 0),
              (i = (i + Math.imul(v, ot)) | 0),
              (n = (n + Math.imul(v, st)) | 0),
              (n = (n + Math.imul(y, ot)) | 0),
              (o = (o + Math.imul(y, st)) | 0),
              (i = (i + Math.imul(c, ut)) | 0),
              (n = (n + Math.imul(c, at)) | 0),
              (n = (n + Math.imul(g, ut)) | 0),
              (o = (o + Math.imul(g, at)) | 0),
              (i = (i + Math.imul(l, lt)) | 0),
              (n = (n + Math.imul(l, dt)) | 0),
              (n = (n + Math.imul(d, lt)) | 0),
              (o = (o + Math.imul(d, dt)) | 0));
            var Nt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (i = Math.imul(C, D)),
              (n = Math.imul(C, z)),
              (n = (n + Math.imul(j, D)) | 0),
              (o = Math.imul(j, z)),
              (i = (i + Math.imul(U, G)) | 0),
              (n = (n + Math.imul(U, K)) | 0),
              (n = (n + Math.imul(k, G)) | 0),
              (o = (o + Math.imul(k, K)) | 0),
              (i = (i + Math.imul(F, V)) | 0),
              (n = (n + Math.imul(F, W)) | 0),
              (n = (n + Math.imul(L, V)) | 0),
              (o = (o + Math.imul(L, W)) | 0),
              (i = (i + Math.imul(P, J)) | 0),
              (n = (n + Math.imul(P, $)) | 0),
              (n = (n + Math.imul(R, J)) | 0),
              (o = (o + Math.imul(R, $)) | 0),
              (i = (i + Math.imul(A, Q)) | 0),
              (n = (n + Math.imul(A, tt)) | 0),
              (n = (n + Math.imul(S, Q)) | 0),
              (o = (o + Math.imul(S, tt)) | 0),
              (i = (i + Math.imul(E, et)) | 0),
              (n = (n + Math.imul(E, it)) | 0),
              (n = (n + Math.imul(N, et)) | 0),
              (o = (o + Math.imul(N, it)) | 0),
              (i = (i + Math.imul(b, ot)) | 0),
              (n = (n + Math.imul(b, st)) | 0),
              (n = (n + Math.imul(M, ot)) | 0),
              (o = (o + Math.imul(M, st)) | 0),
              (i = (i + Math.imul(v, ut)) | 0),
              (n = (n + Math.imul(v, at)) | 0),
              (n = (n + Math.imul(y, ut)) | 0),
              (o = (o + Math.imul(y, at)) | 0),
              (i = (i + Math.imul(c, lt)) | 0),
              (n = (n + Math.imul(c, dt)) | 0),
              (n = (n + Math.imul(g, lt)) | 0),
              (o = (o + Math.imul(g, dt)) | 0),
              (i = (i + Math.imul(l, ct)) | 0),
              (n = (n + Math.imul(l, gt)) | 0),
              (n = (n + Math.imul(d, ct)) | 0),
              (o = (o + Math.imul(d, gt)) | 0));
            var xt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (i = Math.imul(C, G)),
              (n = Math.imul(C, K)),
              (n = (n + Math.imul(j, G)) | 0),
              (o = Math.imul(j, K)),
              (i = (i + Math.imul(U, V)) | 0),
              (n = (n + Math.imul(U, W)) | 0),
              (n = (n + Math.imul(k, V)) | 0),
              (o = (o + Math.imul(k, W)) | 0),
              (i = (i + Math.imul(F, J)) | 0),
              (n = (n + Math.imul(F, $)) | 0),
              (n = (n + Math.imul(L, J)) | 0),
              (o = (o + Math.imul(L, $)) | 0),
              (i = (i + Math.imul(P, Q)) | 0),
              (n = (n + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(R, Q)) | 0),
              (o = (o + Math.imul(R, tt)) | 0),
              (i = (i + Math.imul(A, et)) | 0),
              (n = (n + Math.imul(A, it)) | 0),
              (n = (n + Math.imul(S, et)) | 0),
              (o = (o + Math.imul(S, it)) | 0),
              (i = (i + Math.imul(E, ot)) | 0),
              (n = (n + Math.imul(E, st)) | 0),
              (n = (n + Math.imul(N, ot)) | 0),
              (o = (o + Math.imul(N, st)) | 0),
              (i = (i + Math.imul(b, ut)) | 0),
              (n = (n + Math.imul(b, at)) | 0),
              (n = (n + Math.imul(M, ut)) | 0),
              (o = (o + Math.imul(M, at)) | 0),
              (i = (i + Math.imul(v, lt)) | 0),
              (n = (n + Math.imul(v, dt)) | 0),
              (n = (n + Math.imul(y, lt)) | 0),
              (o = (o + Math.imul(y, dt)) | 0),
              (i = (i + Math.imul(c, ct)) | 0),
              (n = (n + Math.imul(c, gt)) | 0),
              (n = (n + Math.imul(g, ct)) | 0),
              (o = (o + Math.imul(g, gt)) | 0));
            var At = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(C, V)),
              (n = Math.imul(C, W)),
              (n = (n + Math.imul(j, V)) | 0),
              (o = Math.imul(j, W)),
              (i = (i + Math.imul(U, J)) | 0),
              (n = (n + Math.imul(U, $)) | 0),
              (n = (n + Math.imul(k, J)) | 0),
              (o = (o + Math.imul(k, $)) | 0),
              (i = (i + Math.imul(F, Q)) | 0),
              (n = (n + Math.imul(F, tt)) | 0),
              (n = (n + Math.imul(L, Q)) | 0),
              (o = (o + Math.imul(L, tt)) | 0),
              (i = (i + Math.imul(P, et)) | 0),
              (n = (n + Math.imul(P, it)) | 0),
              (n = (n + Math.imul(R, et)) | 0),
              (o = (o + Math.imul(R, it)) | 0),
              (i = (i + Math.imul(A, ot)) | 0),
              (n = (n + Math.imul(A, st)) | 0),
              (n = (n + Math.imul(S, ot)) | 0),
              (o = (o + Math.imul(S, st)) | 0),
              (i = (i + Math.imul(E, ut)) | 0),
              (n = (n + Math.imul(E, at)) | 0),
              (n = (n + Math.imul(N, ut)) | 0),
              (o = (o + Math.imul(N, at)) | 0),
              (i = (i + Math.imul(b, lt)) | 0),
              (n = (n + Math.imul(b, dt)) | 0),
              (n = (n + Math.imul(M, lt)) | 0),
              (o = (o + Math.imul(M, dt)) | 0),
              (i = (i + Math.imul(v, ct)) | 0),
              (n = (n + Math.imul(v, gt)) | 0),
              (n = (n + Math.imul(y, ct)) | 0),
              (o = (o + Math.imul(y, gt)) | 0));
            var St = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(C, J)),
              (n = Math.imul(C, $)),
              (n = (n + Math.imul(j, J)) | 0),
              (o = Math.imul(j, $)),
              (i = (i + Math.imul(U, Q)) | 0),
              (n = (n + Math.imul(U, tt)) | 0),
              (n = (n + Math.imul(k, Q)) | 0),
              (o = (o + Math.imul(k, tt)) | 0),
              (i = (i + Math.imul(F, et)) | 0),
              (n = (n + Math.imul(F, it)) | 0),
              (n = (n + Math.imul(L, et)) | 0),
              (o = (o + Math.imul(L, it)) | 0),
              (i = (i + Math.imul(P, ot)) | 0),
              (n = (n + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(R, ot)) | 0),
              (o = (o + Math.imul(R, st)) | 0),
              (i = (i + Math.imul(A, ut)) | 0),
              (n = (n + Math.imul(A, at)) | 0),
              (n = (n + Math.imul(S, ut)) | 0),
              (o = (o + Math.imul(S, at)) | 0),
              (i = (i + Math.imul(E, lt)) | 0),
              (n = (n + Math.imul(E, dt)) | 0),
              (n = (n + Math.imul(N, lt)) | 0),
              (o = (o + Math.imul(N, dt)) | 0),
              (i = (i + Math.imul(b, ct)) | 0),
              (n = (n + Math.imul(b, gt)) | 0),
              (n = (n + Math.imul(M, ct)) | 0),
              (o = (o + Math.imul(M, gt)) | 0));
            var It = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (i = Math.imul(C, Q)),
              (n = Math.imul(C, tt)),
              (n = (n + Math.imul(j, Q)) | 0),
              (o = Math.imul(j, tt)),
              (i = (i + Math.imul(U, et)) | 0),
              (n = (n + Math.imul(U, it)) | 0),
              (n = (n + Math.imul(k, et)) | 0),
              (o = (o + Math.imul(k, it)) | 0),
              (i = (i + Math.imul(F, ot)) | 0),
              (n = (n + Math.imul(F, st)) | 0),
              (n = (n + Math.imul(L, ot)) | 0),
              (o = (o + Math.imul(L, st)) | 0),
              (i = (i + Math.imul(P, ut)) | 0),
              (n = (n + Math.imul(P, at)) | 0),
              (n = (n + Math.imul(R, ut)) | 0),
              (o = (o + Math.imul(R, at)) | 0),
              (i = (i + Math.imul(A, lt)) | 0),
              (n = (n + Math.imul(A, dt)) | 0),
              (n = (n + Math.imul(S, lt)) | 0),
              (o = (o + Math.imul(S, dt)) | 0),
              (i = (i + Math.imul(E, ct)) | 0),
              (n = (n + Math.imul(E, gt)) | 0),
              (n = (n + Math.imul(N, ct)) | 0),
              (o = (o + Math.imul(N, gt)) | 0));
            var Pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(C, et)),
              (n = Math.imul(C, it)),
              (n = (n + Math.imul(j, et)) | 0),
              (o = Math.imul(j, it)),
              (i = (i + Math.imul(U, ot)) | 0),
              (n = (n + Math.imul(U, st)) | 0),
              (n = (n + Math.imul(k, ot)) | 0),
              (o = (o + Math.imul(k, st)) | 0),
              (i = (i + Math.imul(F, ut)) | 0),
              (n = (n + Math.imul(F, at)) | 0),
              (n = (n + Math.imul(L, ut)) | 0),
              (o = (o + Math.imul(L, at)) | 0),
              (i = (i + Math.imul(P, lt)) | 0),
              (n = (n + Math.imul(P, dt)) | 0),
              (n = (n + Math.imul(R, lt)) | 0),
              (o = (o + Math.imul(R, dt)) | 0),
              (i = (i + Math.imul(A, ct)) | 0),
              (n = (n + Math.imul(A, gt)) | 0),
              (n = (n + Math.imul(S, ct)) | 0),
              (o = (o + Math.imul(S, gt)) | 0));
            var Rt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(C, ot)),
              (n = Math.imul(C, st)),
              (n = (n + Math.imul(j, ot)) | 0),
              (o = Math.imul(j, st)),
              (i = (i + Math.imul(U, ut)) | 0),
              (n = (n + Math.imul(U, at)) | 0),
              (n = (n + Math.imul(k, ut)) | 0),
              (o = (o + Math.imul(k, at)) | 0),
              (i = (i + Math.imul(F, lt)) | 0),
              (n = (n + Math.imul(F, dt)) | 0),
              (n = (n + Math.imul(L, lt)) | 0),
              (o = (o + Math.imul(L, dt)) | 0),
              (i = (i + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(P, gt)) | 0),
              (n = (n + Math.imul(R, ct)) | 0),
              (o = (o + Math.imul(R, gt)) | 0));
            var Ot = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(C, ut)),
              (n = Math.imul(C, at)),
              (n = (n + Math.imul(j, ut)) | 0),
              (o = Math.imul(j, at)),
              (i = (i + Math.imul(U, lt)) | 0),
              (n = (n + Math.imul(U, dt)) | 0),
              (n = (n + Math.imul(k, lt)) | 0),
              (o = (o + Math.imul(k, dt)) | 0),
              (i = (i + Math.imul(F, ct)) | 0),
              (n = (n + Math.imul(F, gt)) | 0),
              (n = (n + Math.imul(L, ct)) | 0),
              (o = (o + Math.imul(L, gt)) | 0));
            var Ft = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Ft >>> 26)) | 0),
              (Ft &= 67108863),
              (i = Math.imul(C, lt)),
              (n = Math.imul(C, dt)),
              (n = (n + Math.imul(j, lt)) | 0),
              (o = Math.imul(j, dt)),
              (i = (i + Math.imul(U, ct)) | 0),
              (n = (n + Math.imul(U, gt)) | 0),
              (n = (n + Math.imul(k, ct)) | 0),
              (o = (o + Math.imul(k, gt)) | 0));
            var Lt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((o + (n >>> 13)) | 0) + (Lt >>> 26)) | 0),
              (Lt &= 67108863),
              (i = Math.imul(C, ct)),
              (n = Math.imul(C, gt)),
              (n = (n + Math.imul(j, ct)) | 0),
              (o = Math.imul(j, gt)));
            var Tt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (a = (((o + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (u[0] = pt),
              (u[1] = vt),
              (u[2] = yt),
              (u[3] = wt),
              (u[4] = bt),
              (u[5] = Mt),
              (u[6] = _t),
              (u[7] = Et),
              (u[8] = Nt),
              (u[9] = xt),
              (u[10] = At),
              (u[11] = St),
              (u[12] = It),
              (u[13] = Pt),
              (u[14] = Rt),
              (u[15] = Ot),
              (u[16] = Ft),
              (u[17] = Lt),
              (u[18] = Tt),
              0 !== a && ((u[19] = a), e.length++),
              e
            );
          };
          function w(t, r, e) {
            ((e.negative = r.negative ^ t.negative),
              (e.length = t.length + r.length));
            for (var i = 0, n = 0, o = 0; o < e.length - 1; o++) {
              var s = n;
              n = 0;
              for (
                var h = 67108863 & i,
                  u = Math.min(o, r.length - 1),
                  a = Math.max(0, o - t.length + 1);
                a <= u;
                a++
              ) {
                var f = o - a,
                  l = 0 | t.words[f],
                  d = 0 | r.words[a],
                  m = l * d,
                  c = 67108863 & m;
                ((s = (s + ((m / 67108864) | 0)) | 0),
                  (c = (c + h) | 0),
                  (h = 67108863 & c),
                  (s = (s + (c >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((e.words[o] = h), (i = s), (s = n));
            }
            return (0 !== i ? (e.words[o] = i) : e.length--, e._strip());
          }
          function b(t, r, e) {
            return w(t, r, e);
          }
          function M(t, r) {
            ((this.x = t), (this.y = r));
          }
          (Math.imul || (y = v),
            (o.prototype.mulTo = function (t, r) {
              var e,
                i = this.length + t.length;
              return (
                (e =
                  10 === this.length && 10 === t.length
                    ? y(this, t, r)
                    : i < 63
                      ? v(this, t, r)
                      : i < 1024
                        ? w(this, t, r)
                        : b(this, t, r)),
                e
              );
            }),
            (M.prototype.makeRBT = function (t) {
              for (
                var r = new Array(t), e = o.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                r[i] = this.revBin(i, e, t);
              return r;
            }),
            (M.prototype.revBin = function (t, r, e) {
              if (0 === t || t === e - 1) return t;
              for (var i = 0, n = 0; n < r; n++)
                ((i |= (1 & t) << (r - n - 1)), (t >>= 1));
              return i;
            }),
            (M.prototype.permute = function (t, r, e, i, n, o) {
              for (var s = 0; s < o; s++) ((i[s] = r[t[s]]), (n[s] = e[t[s]]));
            }),
            (M.prototype.transform = function (t, r, e, i, n, o) {
              this.permute(o, t, r, e, i, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var h = s << 1,
                    u = Math.cos((2 * Math.PI) / h),
                    a = Math.sin((2 * Math.PI) / h),
                    f = 0;
                  f < n;
                  f += h
                )
                  for (var l = u, d = a, m = 0; m < s; m++) {
                    var c = e[f + m],
                      g = i[f + m],
                      p = e[f + m + s],
                      v = i[f + m + s],
                      y = l * p - d * v;
                    ((v = l * v + d * p),
                      (p = y),
                      (e[f + m] = c + p),
                      (i[f + m] = g + v),
                      (e[f + m + s] = c - p),
                      (i[f + m + s] = g - v),
                      m !== h &&
                        ((y = u * l - a * d), (d = u * d + a * l), (l = y)));
                  }
            }),
            (M.prototype.guessLen13b = function (t, r) {
              var e = 1 | Math.max(r, t),
                i = 1 & e,
                n = 0;
              for (e = (e / 2) | 0; e; e >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (M.prototype.conjugate = function (t, r, e) {
              if (!(e <= 1))
                for (var i = 0; i < e / 2; i++) {
                  var n = t[i];
                  ((t[i] = t[e - i - 1]),
                    (t[e - i - 1] = n),
                    (n = r[i]),
                    (r[i] = -r[e - i - 1]),
                    (r[e - i - 1] = -n));
                }
            }),
            (M.prototype.normalize13b = function (t, r) {
              for (var e = 0, i = 0; i < r / 2; i++) {
                var n =
                  8192 * Math.round(t[2 * i + 1] / r) +
                  Math.round(t[2 * i] / r) +
                  e;
                ((t[i] = 67108863 & n),
                  (e = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (M.prototype.convert13b = function (t, r, e, n) {
              for (var o = 0, s = 0; s < r; s++)
                ((o += 0 | t[s]),
                  (e[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (e[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * r; s < n; ++s) e[s] = 0;
              (i(0 === o), i(0 === (-8192 & o)));
            }),
            (M.prototype.stub = function (t) {
              for (var r = new Array(t), e = 0; e < t; e++) r[e] = 0;
              return r;
            }),
            (M.prototype.mulp = function (t, r, e) {
              var i = 2 * this.guessLen13b(t.length, r.length),
                n = this.makeRBT(i),
                o = this.stub(i),
                s = new Array(i),
                h = new Array(i),
                u = new Array(i),
                a = new Array(i),
                f = new Array(i),
                l = new Array(i),
                d = e.words;
              ((d.length = i),
                this.convert13b(t.words, t.length, s, i),
                this.convert13b(r.words, r.length, a, i),
                this.transform(s, o, h, u, i, n),
                this.transform(a, o, f, l, i, n));
              for (var m = 0; m < i; m++) {
                var c = h[m] * f[m] - u[m] * l[m];
                ((u[m] = h[m] * l[m] + u[m] * f[m]), (h[m] = c));
              }
              return (
                this.conjugate(h, u, i),
                this.transform(h, u, d, o, i, n),
                this.conjugate(d, o, i),
                this.normalize13b(d, i),
                (e.negative = t.negative ^ r.negative),
                (e.length = t.length + r.length),
                e._strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var r = new o(null);
              return (
                (r.words = new Array(this.length + t.length)),
                this.mulTo(t, r)
              );
            }),
            (o.prototype.mulf = function (t) {
              var r = new o(null);
              return (
                (r.words = new Array(this.length + t.length)),
                b(this, t, r)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var r = t < 0;
              (r && (t = -t), i("number" === typeof t), i(t < 67108864));
              for (var e = 0, n = 0; n < this.length; n++) {
                var o = (0 | this.words[n]) * t,
                  s = (67108863 & o) + (67108863 & e);
                ((e >>= 26),
                  (e += (o / 67108864) | 0),
                  (e += s >>> 26),
                  (this.words[n] = 67108863 & s));
              }
              return (
                0 !== e && ((this.words[n] = e), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                r ? this.ineg() : this
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
              var r = p(t);
              if (0 === r.length) return new o(1);
              for (var e = this, i = 0; i < r.length; i++, e = e.sqr())
                if (0 !== r[i]) break;
              if (++i < r.length)
                for (var n = e.sqr(); i < r.length; i++, n = n.sqr())
                  0 !== r[i] && (e = e.mul(n));
              return e;
            }),
            (o.prototype.iushln = function (t) {
              i("number" === typeof t && t >= 0);
              var r,
                e = t % 26,
                n = (t - e) / 26,
                o = (67108863 >>> (26 - e)) << (26 - e);
              if (0 !== e) {
                var s = 0;
                for (r = 0; r < this.length; r++) {
                  var h = this.words[r] & o,
                    u = ((0 | this.words[r]) - h) << e;
                  ((this.words[r] = u | s), (s = h >>> (26 - e)));
                }
                s && ((this.words[r] = s), this.length++);
              }
              if (0 !== n) {
                for (r = this.length - 1; r >= 0; r--)
                  this.words[r + n] = this.words[r];
                for (r = 0; r < n; r++) this.words[r] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return (i(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, r, e) {
              var n;
              (i("number" === typeof t && t >= 0),
                (n = r ? (r - (r % 26)) / 26 : 0));
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                h = 67108863 ^ ((67108863 >>> o) << o),
                u = e;
              if (((n -= s), (n = Math.max(0, n)), u)) {
                for (var a = 0; a < s; a++) u.words[a] = this.words[a];
                u.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, a = 0; a < this.length; a++)
                  this.words[a] = this.words[a + s];
              else ((this.words[0] = 0), (this.length = 1));
              var f = 0;
              for (a = this.length - 1; a >= 0 && (0 !== f || a >= n); a--) {
                var l = 0 | this.words[a];
                ((this.words[a] = (f << (26 - o)) | (l >>> o)), (f = l & h));
              }
              return (
                u && 0 !== f && (u.words[u.length++] = f),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, r, e) {
              return (i(0 === this.negative), this.iushrn(t, r, e));
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
              var r = t % 26,
                e = (t - r) / 26,
                n = 1 << r;
              if (this.length <= e) return !1;
              var o = this.words[e];
              return !!(o & n);
            }),
            (o.prototype.imaskn = function (t) {
              i("number" === typeof t && t >= 0);
              var r = t % 26,
                e = (t - r) / 26;
              if (
                (i(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= e)
              )
                return this;
              if (
                (0 !== r && e++,
                (this.length = Math.min(e, this.length)),
                0 !== r)
              ) {
                var n = 67108863 ^ ((67108863 >>> r) << r);
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
              for (var r = 0; r < this.length && this.words[r] >= 67108864; r++)
                ((this.words[r] -= 67108864),
                  r === this.length - 1
                    ? (this.words[r + 1] = 1)
                    : this.words[r + 1]++);
              return ((this.length = Math.max(this.length, r + 1)), this);
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
                for (var r = 0; r < this.length && this.words[r] < 0; r++)
                  ((this.words[r] += 67108864), (this.words[r + 1] -= 1));
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
            (o.prototype._ishlnsubmul = function (t, r, e) {
              var n,
                o,
                s = t.length + e;
              this._expand(s);
              var h = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + e]) + h;
                var u = (0 | t.words[n]) * r;
                ((o -= 67108863 & u),
                  (h = (o >> 26) - ((u / 67108864) | 0)),
                  (this.words[n + e] = 67108863 & o));
              }
              for (; n < this.length - e; n++)
                ((o = (0 | this.words[n + e]) + h),
                  (h = o >> 26),
                  (this.words[n + e] = 67108863 & o));
              if (0 === h) return this._strip();
              for (i(-1 === h), h = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + h),
                  (h = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, r) {
              var e = this.length - t.length,
                i = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                h = this._countBits(s);
              ((e = 26 - h),
                0 !== e &&
                  ((n = n.ushln(e)),
                  i.iushln(e),
                  (s = 0 | n.words[n.length - 1])));
              var u,
                a = i.length - n.length;
              if ("mod" !== r) {
                ((u = new o(null)),
                  (u.length = a + 1),
                  (u.words = new Array(u.length)));
                for (var f = 0; f < u.length; f++) u.words[f] = 0;
              }
              var l = i.clone()._ishlnsubmul(n, 1, a);
              0 === l.negative && ((i = l), u && (u.words[a] = 1));
              for (var d = a - 1; d >= 0; d--) {
                var m =
                  67108864 * (0 | i.words[n.length + d]) +
                  (0 | i.words[n.length + d - 1]);
                ((m = Math.min((m / s) | 0, 67108863)),
                  i._ishlnsubmul(n, m, d));
                while (0 !== i.negative)
                  (m--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, d),
                    i.isZero() || (i.negative ^= 1));
                u && (u.words[d] = m);
              }
              return (
                u && u._strip(),
                i._strip(),
                "div" !== r && 0 !== e && i.iushrn(e),
                { div: u || null, mod: i }
              );
            }),
            (o.prototype.divmod = function (t, r, e) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((h = this.neg().divmod(t, r)),
                      "mod" !== r && (n = h.div.neg()),
                      "div" !== r &&
                        ((s = h.mod.neg()), e && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((h = this.divmod(t.neg(), r)),
                        "mod" !== r && (n = h.div.neg()),
                        { div: n, mod: h.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((h = this.neg().divmod(t.neg(), r)),
                          "div" !== r &&
                            ((s = h.mod.neg()),
                            e && 0 !== s.negative && s.isub(t)),
                          { div: h.div, mod: s })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === t.length
                            ? "div" === r
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === r
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, r)
              );
              var n, s, h;
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
              var r = this.divmod(t);
              if (r.mod.isZero()) return r.div;
              var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
                i = t.ushrn(1),
                n = t.andln(1),
                o = e.cmp(i);
              return o < 0 || (1 === n && 0 === o)
                ? r.div
                : 0 !== r.div.negative
                  ? r.div.isubn(1)
                  : r.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var r = t < 0;
              (r && (t = -t), i(t <= 67108863));
              for (
                var e = (1 << 26) % t, n = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                n = (e * n + (0 | this.words[o])) % t;
              return r ? -n : n;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var r = t < 0;
              (r && (t = -t), i(t <= 67108863));
              for (var e = 0, n = this.length - 1; n >= 0; n--) {
                var o = (0 | this.words[n]) + 67108864 * e;
                ((this.words[n] = (o / t) | 0), (e = o % t));
              }
              return (this._strip(), r ? this.ineg() : this);
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var r = this,
                e = t.clone();
              r = 0 !== r.negative ? r.umod(t) : r.clone();
              var n = new o(1),
                s = new o(0),
                h = new o(0),
                u = new o(1),
                a = 0;
              while (r.isEven() && e.isEven()) (r.iushrn(1), e.iushrn(1), ++a);
              var f = e.clone(),
                l = r.clone();
              while (!r.isZero()) {
                for (
                  var d = 0, m = 1;
                  0 === (r.words[0] & m) && d < 26;
                  ++d, m <<= 1
                );
                if (d > 0) {
                  r.iushrn(d);
                  while (d-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(f), s.isub(l)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var c = 0, g = 1;
                  0 === (e.words[0] & g) && c < 26;
                  ++c, g <<= 1
                );
                if (c > 0) {
                  e.iushrn(c);
                  while (c-- > 0)
                    ((h.isOdd() || u.isOdd()) && (h.iadd(f), u.isub(l)),
                      h.iushrn(1),
                      u.iushrn(1));
                }
                r.cmp(e) >= 0
                  ? (r.isub(e), n.isub(h), s.isub(u))
                  : (e.isub(r), h.isub(n), u.isub(s));
              }
              return { a: h, b: u, gcd: e.iushln(a) };
            }),
            (o.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var r = this,
                e = t.clone();
              r = 0 !== r.negative ? r.umod(t) : r.clone();
              var n,
                s = new o(1),
                h = new o(0),
                u = e.clone();
              while (r.cmpn(1) > 0 && e.cmpn(1) > 0) {
                for (
                  var a = 0, f = 1;
                  0 === (r.words[0] & f) && a < 26;
                  ++a, f <<= 1
                );
                if (a > 0) {
                  r.iushrn(a);
                  while (a-- > 0) (s.isOdd() && s.iadd(u), s.iushrn(1));
                }
                for (
                  var l = 0, d = 1;
                  0 === (e.words[0] & d) && l < 26;
                  ++l, d <<= 1
                );
                if (l > 0) {
                  e.iushrn(l);
                  while (l-- > 0) (h.isOdd() && h.iadd(u), h.iushrn(1));
                }
                r.cmp(e) >= 0 ? (r.isub(e), s.isub(h)) : (e.isub(r), h.isub(s));
              }
              return (
                (n = 0 === r.cmpn(1) ? s : h),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var r = this.clone(),
                e = t.clone();
              ((r.negative = 0), (e.negative = 0));
              for (var i = 0; r.isEven() && e.isEven(); i++)
                (r.iushrn(1), e.iushrn(1));
              do {
                while (r.isEven()) r.iushrn(1);
                while (e.isEven()) e.iushrn(1);
                var n = r.cmp(e);
                if (n < 0) {
                  var o = r;
                  ((r = e), (e = o));
                } else if (0 === n || 0 === e.cmpn(1)) break;
                r.isub(e);
              } while (1);
              return e.iushln(i);
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
              var r = t % 26,
                e = (t - r) / 26,
                n = 1 << r;
              if (this.length <= e)
                return (this._expand(e + 1), (this.words[e] |= n), this);
              for (var o = n, s = e; 0 !== o && s < this.length; s++) {
                var h = 0 | this.words[s];
                ((h += o),
                  (o = h >>> 26),
                  (h &= 67108863),
                  (this.words[s] = h));
              }
              return (0 !== o && ((this.words[s] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var r,
                e = t < 0;
              if (0 !== this.negative && !e) return -1;
              if (0 === this.negative && e) return 1;
              if ((this._strip(), this.length > 1)) r = 1;
              else {
                (e && (t = -t), i(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                r = n === t ? 0 : n < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -r : r;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var r = this.ucmp(t);
              return 0 !== this.negative ? 0 | -r : r;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var r = 0, e = this.length - 1; e >= 0; e--) {
                var i = 0 | this.words[e],
                  n = 0 | t.words[e];
                if (i !== n) {
                  i < n ? (r = -1) : i > n && (r = 1);
                  break;
                }
              }
              return r;
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
              return new I(t);
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
          var _ = { k256: null, p224: null, p192: null, p25519: null };
          function E(t, r) {
            ((this.name = t),
              (this.p = new o(r, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function N() {
            E.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function x() {
            E.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function A() {
            E.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function S() {
            E.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function I(t) {
            if ("string" === typeof t) {
              var r = o._prime(t);
              ((this.m = r.p), (this.prime = r));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function P(t) {
            (I.call(this, t),
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
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (E.prototype.ireduce = function (t) {
              var r,
                e = t;
              do {
                (this.split(e, this.tmp),
                  (e = this.imulK(e)),
                  (e = e.iadd(this.tmp)),
                  (r = e.bitLength()));
              } while (r > this.n);
              var i = r < this.n ? -1 : e.ucmp(this.p);
              return (
                0 === i
                  ? ((e.words[0] = 0), (e.length = 1))
                  : i > 0
                    ? e.isub(this.p)
                    : void 0 !== e.strip
                      ? e.strip()
                      : e._strip(),
                e
              );
            }),
            (E.prototype.split = function (t, r) {
              t.iushrn(this.n, 0, r);
            }),
            (E.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(N, E),
            (N.prototype.split = function (t, r) {
              for (
                var e = 4194303, i = Math.min(t.length, 9), n = 0;
                n < i;
                n++
              )
                r.words[n] = t.words[n];
              if (((r.length = i), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (r.words[r.length++] = o & e, n = 10; n < t.length; n++) {
                var s = 0 | t.words[n];
                ((t.words[n - 10] = ((s & e) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (t.words[n - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (N.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var r = 0, e = 0; e < t.length; e++) {
                var i = 0 | t.words[e];
                ((r += 977 * i),
                  (t.words[e] = 67108863 & r),
                  (r = 64 * i + ((r / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(x, E),
            n(A, E),
            n(S, E),
            (S.prototype.imulK = function (t) {
              for (var r = 0, e = 0; e < t.length; e++) {
                var i = 19 * (0 | t.words[e]) + r,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[e] = n), (r = i));
              }
              return (0 !== r && (t.words[t.length++] = r), t);
            }),
            (o._prime = function (t) {
              if (_[t]) return _[t];
              var r;
              if ("k256" === t) r = new N();
              else if ("p224" === t) r = new x();
              else if ("p192" === t) r = new A();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                r = new S();
              }
              return ((_[t] = r), r);
            }),
            (I.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (I.prototype._verify2 = function (t, r) {
              (i(
                0 === (t.negative | r.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === r.red, "red works only with red numbers"));
            }),
            (I.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (f(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (I.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (I.prototype.add = function (t, r) {
              this._verify2(t, r);
              var e = t.add(r);
              return (e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this));
            }),
            (I.prototype.iadd = function (t, r) {
              this._verify2(t, r);
              var e = t.iadd(r);
              return (e.cmp(this.m) >= 0 && e.isub(this.m), e);
            }),
            (I.prototype.sub = function (t, r) {
              this._verify2(t, r);
              var e = t.sub(r);
              return (e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this));
            }),
            (I.prototype.isub = function (t, r) {
              this._verify2(t, r);
              var e = t.isub(r);
              return (e.cmpn(0) < 0 && e.iadd(this.m), e);
            }),
            (I.prototype.shl = function (t, r) {
              return (this._verify1(t), this.imod(t.ushln(r)));
            }),
            (I.prototype.imul = function (t, r) {
              return (this._verify2(t, r), this.imod(t.imul(r)));
            }),
            (I.prototype.mul = function (t, r) {
              return (this._verify2(t, r), this.imod(t.mul(r)));
            }),
            (I.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (I.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (I.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var r = this.m.andln(3);
              if ((i(r % 2 === 1), 3 === r)) {
                var e = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, e);
              }
              var n = this.m.subn(1),
                s = 0;
              while (!n.isZero() && 0 === n.andln(1)) (s++, n.iushrn(1));
              i(!n.isZero());
              var h = new o(1).toRed(this),
                u = h.redNeg(),
                a = this.m.subn(1).iushrn(1),
                f = this.m.bitLength();
              f = new o(2 * f * f).toRed(this);
              while (0 !== this.pow(f, a).cmp(u)) f.redIAdd(u);
              var l = this.pow(f, n),
                d = this.pow(t, n.addn(1).iushrn(1)),
                m = this.pow(t, n),
                c = s;
              while (0 !== m.cmp(h)) {
                for (var g = m, p = 0; 0 !== g.cmp(h); p++) g = g.redSqr();
                i(p < c);
                var v = this.pow(l, new o(1).iushln(c - p - 1));
                ((d = d.redMul(v)),
                  (l = v.redSqr()),
                  (m = m.redMul(l)),
                  (c = p));
              }
              return d;
            }),
            (I.prototype.invm = function (t) {
              var r = t._invmp(this.m);
              return 0 !== r.negative
                ? ((r.negative = 0), this.imod(r).redNeg())
                : this.imod(r);
            }),
            (I.prototype.pow = function (t, r) {
              if (r.isZero()) return new o(1).toRed(this);
              if (0 === r.cmpn(1)) return t.clone();
              var e = 4,
                i = new Array(1 << e);
              ((i[0] = new o(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var s = i[0],
                h = 0,
                u = 0,
                a = r.bitLength() % 26;
              for (0 === a && (a = 26), n = r.length - 1; n >= 0; n--) {
                for (var f = r.words[n], l = a - 1; l >= 0; l--) {
                  var d = (f >> l) & 1;
                  (s !== i[0] && (s = this.sqr(s)),
                    0 !== d || 0 !== h
                      ? ((h <<= 1),
                        (h |= d),
                        u++,
                        (u === e || (0 === n && 0 === l)) &&
                          ((s = this.mul(s, i[h])), (u = 0), (h = 0)))
                      : (u = 0));
                }
                a = 26;
              }
              return s;
            }),
            (I.prototype.convertTo = function (t) {
              var r = t.umod(this.m);
              return r === t ? r.clone() : r;
            }),
            (I.prototype.convertFrom = function (t) {
              var r = t.clone();
              return ((r.red = null), r);
            }),
            (o.mont = function (t) {
              return new P(t);
            }),
            n(P, I),
            (P.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (P.prototype.convertFrom = function (t) {
              var r = this.imod(t.mul(this.rinv));
              return ((r.red = null), r);
            }),
            (P.prototype.imul = function (t, r) {
              if (t.isZero() || r.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var e = t.imul(r),
                i = e
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = e.isub(i).iushrn(this.shift),
                o = n;
              return (
                n.cmp(this.m) >= 0
                  ? (o = n.isub(this.m))
                  : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (P.prototype.mul = function (t, r) {
              if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
              var e = t.mul(r),
                i = e
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = e.isub(i).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (P.prototype.invm = function (t) {
              var r = this.imod(t._invmp(this.m).mul(this.r2));
              return r._forceRed(this);
            }));
        })(t, this);
      }).call(this, e(20)(t));
    },
    587: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bignumber/5.8.0";
    },
    588: function (t, r, e) {
      "use strict";
      var i = e(0);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.keccak256 = s));
      var n = i(e(53)),
        o = e(96);
      function s(t) {
        return "0x" + n.default.keccak_256((0, o.arrayify)(t));
      }
    },
    589: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.decode = m),
        (r.encode = f));
      var i = e(96),
        n = e(77),
        o = e(1727);
      const s = new n.Logger(o.version);
      function h(t) {
        const r = [];
        while (t) (r.unshift(255 & t), (t >>= 8));
        return r;
      }
      function u(t, r, e) {
        let i = 0;
        for (let n = 0; n < e; n++) i = 256 * i + t[r + n];
        return i;
      }
      function a(t) {
        if (Array.isArray(t)) {
          let r = [];
          if (
            (t.forEach(function (t) {
              r = r.concat(a(t));
            }),
            r.length <= 55)
          )
            return (r.unshift(192 + r.length), r);
          const e = h(r.length);
          return (e.unshift(247 + e.length), e.concat(r));
        }
        (0, i.isBytesLike)(t) ||
          s.throwArgumentError("RLP object must be BytesLike", "object", t);
        const r = Array.prototype.slice.call((0, i.arrayify)(t));
        if (1 === r.length && r[0] <= 127) return r;
        if (r.length <= 55) return (r.unshift(128 + r.length), r);
        const e = h(r.length);
        return (e.unshift(183 + e.length), e.concat(r));
      }
      function f(t) {
        return (0, i.hexlify)(a(t));
      }
      function l(t, r, e, i) {
        const o = [];
        while (e < r + 1 + i) {
          const h = d(t, e);
          (o.push(h.result),
            (e += h.consumed),
            e > r + 1 + i &&
              s.throwError(
                "child data too short",
                n.Logger.errors.BUFFER_OVERRUN,
                {},
              ));
        }
        return { consumed: 1 + i, result: o };
      }
      function d(t, r) {
        if (
          (0 === t.length &&
            s.throwError("data too short", n.Logger.errors.BUFFER_OVERRUN, {}),
          t[r] >= 248)
        ) {
          const e = t[r] - 247;
          r + 1 + e > t.length &&
            s.throwError(
              "data short segment too short",
              n.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const i = u(t, r + 1, e);
          return (
            r + 1 + e + i > t.length &&
              s.throwError(
                "data long segment too short",
                n.Logger.errors.BUFFER_OVERRUN,
                {},
              ),
            l(t, r, r + 1 + e, e + i)
          );
        }
        if (t[r] >= 192) {
          const e = t[r] - 192;
          return (
            r + 1 + e > t.length &&
              s.throwError(
                "data array too short",
                n.Logger.errors.BUFFER_OVERRUN,
                {},
              ),
            l(t, r, r + 1, e)
          );
        }
        if (t[r] >= 184) {
          const e = t[r] - 183;
          r + 1 + e > t.length &&
            s.throwError(
              "data array too short",
              n.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const o = u(t, r + 1, e);
          r + 1 + e + o > t.length &&
            s.throwError(
              "data array too short",
              n.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const h = (0, i.hexlify)(t.slice(r + 1 + e, r + 1 + e + o));
          return { consumed: 1 + e + o, result: h };
        }
        if (t[r] >= 128) {
          const e = t[r] - 128;
          r + 1 + e > t.length &&
            s.throwError("data too short", n.Logger.errors.BUFFER_OVERRUN, {});
          const o = (0, i.hexlify)(t.slice(r + 1, r + 1 + e));
          return { consumed: 1 + e, result: o };
        }
        return { consumed: 1, result: (0, i.hexlify)(t[r]) };
      }
      function m(t) {
        const r = (0, i.arrayify)(t),
          e = d(r, 0);
        return (
          e.consumed !== r.length &&
            s.throwArgumentError("invalid rlp data", "data", t),
          e.result
        );
      }
    },
    590: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Description = void 0),
        (r.checkProperties = f),
        (r.deepCopy = g),
        (r.defineReadOnly = h),
        (r.getStatic = u),
        (r.resolveProperties = a),
        (r.shallowCopy = l));
      var i = e(77),
        n = e(1734),
        o = function (t, r, e, i) {
          function n(t) {
            return t instanceof e
              ? t
              : new e(function (r) {
                  r(t);
                });
          }
          return new (e || (e = Promise))(function (e, o) {
            function s(t) {
              try {
                u(i.next(t));
              } catch (r) {
                o(r);
              }
            }
            function h(t) {
              try {
                u(i["throw"](t));
              } catch (r) {
                o(r);
              }
            }
            function u(t) {
              t.done ? e(t.value) : n(t.value).then(s, h);
            }
            u((i = i.apply(t, r || [])).next());
          });
        };
      const s = new i.Logger(n.version);
      function h(t, r, e) {
        Object.defineProperty(t, r, { enumerable: !0, value: e, writable: !1 });
      }
      function u(t, r) {
        for (let e = 0; e < 32; e++) {
          if (t[r]) return t[r];
          if (!t.prototype || "object" !== typeof t.prototype) break;
          t = Object.getPrototypeOf(t.prototype).constructor;
        }
        return null;
      }
      function a(t) {
        return o(this, void 0, void 0, function* () {
          const r = Object.keys(t).map((r) => {
              const e = t[r];
              return Promise.resolve(e).then((t) => ({ key: r, value: t }));
            }),
            e = yield Promise.all(r);
          return e.reduce((t, r) => ((t[r.key] = r.value), t), {});
        });
      }
      function f(t, r) {
        ((t && "object" === typeof t) ||
          s.throwArgumentError("invalid object", "object", t),
          Object.keys(t).forEach((e) => {
            r[e] ||
              s.throwArgumentError(
                "invalid object key - " + e,
                "transaction:" + e,
                t,
              );
          }));
      }
      function l(t) {
        const r = {};
        for (const e in t) r[e] = t[e];
        return r;
      }
      const d = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function m(t) {
        if (void 0 === t || null === t || d[typeof t]) return !0;
        if (Array.isArray(t) || "object" === typeof t) {
          if (!Object.isFrozen(t)) return !1;
          const e = Object.keys(t);
          for (let i = 0; i < e.length; i++) {
            let n = null;
            try {
              n = t[e[i]];
            } catch (r) {
              continue;
            }
            if (!m(n)) return !1;
          }
          return !0;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function c(t) {
        if (m(t)) return t;
        if (Array.isArray(t)) return Object.freeze(t.map((t) => g(t)));
        if ("object" === typeof t) {
          const r = {};
          for (const e in t) {
            const i = t[e];
            void 0 !== i && h(r, e, g(i));
          }
          return r;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function g(t) {
        return c(t);
      }
      class Description {
        constructor(t) {
          for (const r in t) this[r] = g(t[r]);
        }
      }
      r.Description = Description;
    },
    591: function (t, r, e) {
      "use strict";
      var i = e(0);
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.BigNumber = void 0),
        (r._base16To36 = w),
        (r._base36To16 = y),
        (r.isBigNumberish = d));
      var n = i(e(1741)),
        o = e(592),
        s = e(179),
        h = e(593),
        u = n.default.BN;
      const a = new s.Logger(h.version),
        f = {},
        l = 9007199254740991;
      function d(t) {
        return (
          null != t &&
          (BigNumber.isBigNumber(t) ||
            ("number" === typeof t && t % 1 === 0) ||
            ("string" === typeof t && !!t.match(/^-?[0-9]+$/)) ||
            (0, o.isHexString)(t) ||
            "bigint" === typeof t ||
            (0, o.isBytes)(t))
        );
      }
      let m = !1;
      class BigNumber {
        constructor(t, r) {
          (t !== f &&
            a.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" },
            ),
            (this._hex = r),
            (this._isBigNumber = !0),
            Object.freeze(this));
        }
        fromTwos(t) {
          return g(p(this).fromTwos(t));
        }
        toTwos(t) {
          return g(p(this).toTwos(t));
        }
        abs() {
          return "-" === this._hex[0]
            ? BigNumber.from(this._hex.substring(1))
            : this;
        }
        add(t) {
          return g(p(this).add(p(t)));
        }
        sub(t) {
          return g(p(this).sub(p(t)));
        }
        div(t) {
          const r = BigNumber.from(t);
          return (
            r.isZero() && v("division-by-zero", "div"),
            g(p(this).div(p(t)))
          );
        }
        mul(t) {
          return g(p(this).mul(p(t)));
        }
        mod(t) {
          const r = p(t);
          return (
            r.isNeg() && v("division-by-zero", "mod"),
            g(p(this).umod(r))
          );
        }
        pow(t) {
          const r = p(t);
          return (r.isNeg() && v("negative-power", "pow"), g(p(this).pow(r)));
        }
        and(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "and"),
            g(p(this).and(r))
          );
        }
        or(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "or"),
            g(p(this).or(r))
          );
        }
        xor(t) {
          const r = p(t);
          return (
            (this.isNegative() || r.isNeg()) &&
              v("unbound-bitwise-result", "xor"),
            g(p(this).xor(r))
          );
        }
        mask(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "mask"),
            g(p(this).maskn(t))
          );
        }
        shl(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "shl"),
            g(p(this).shln(t))
          );
        }
        shr(t) {
          return (
            (this.isNegative() || t < 0) && v("negative-width", "shr"),
            g(p(this).shrn(t))
          );
        }
        eq(t) {
          return p(this).eq(p(t));
        }
        lt(t) {
          return p(this).lt(p(t));
        }
        lte(t) {
          return p(this).lte(p(t));
        }
        gt(t) {
          return p(this).gt(p(t));
        }
        gte(t) {
          return p(this).gte(p(t));
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
          } catch (t) {
            v("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (t) {}
          return a.throwError(
            "this platform does not support BigInt",
            s.Logger.errors.UNSUPPORTED_OPERATION,
            { value: this.toString() },
          );
        }
        toString() {
          return (
            arguments.length > 0 &&
              (10 === arguments[0]
                ? m ||
                  ((m = !0),
                  a.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed",
                  ))
                : 16 === arguments[0]
                  ? a.throwError(
                      "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                      s.Logger.errors.UNEXPECTED_ARGUMENT,
                      {},
                    )
                  : a.throwError(
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
        toJSON(t) {
          return { type: "BigNumber", hex: this.toHexString() };
        }
        static from(t) {
          if (t instanceof BigNumber) return t;
          if ("string" === typeof t)
            return t.match(/^-?0x[0-9a-f]+$/i)
              ? new BigNumber(f, c(t))
              : t.match(/^-?[0-9]+$/)
                ? new BigNumber(f, c(new u(t)))
                : a.throwArgumentError("invalid BigNumber string", "value", t);
          if ("number" === typeof t)
            return (
              t % 1 && v("underflow", "BigNumber.from", t),
              (t >= l || t <= -l) && v("overflow", "BigNumber.from", t),
              BigNumber.from(String(t))
            );
          const r = t;
          if ("bigint" === typeof r) return BigNumber.from(r.toString());
          if ((0, o.isBytes)(r)) return BigNumber.from((0, o.hexlify)(r));
          if (r)
            if (r.toHexString) {
              const t = r.toHexString();
              if ("string" === typeof t) return BigNumber.from(t);
            } else {
              let t = r._hex;
              if (
                (null == t && "BigNumber" === r.type && (t = r.hex),
                "string" === typeof t &&
                  ((0, o.isHexString)(t) ||
                    ("-" === t[0] && (0, o.isHexString)(t.substring(1)))))
              )
                return BigNumber.from(t);
            }
          return a.throwArgumentError("invalid BigNumber value", "value", t);
        }
        static isBigNumber(t) {
          return !(!t || !t._isBigNumber);
        }
      }
      function c(t) {
        if ("string" !== typeof t) return c(t.toString(16));
        if ("-" === t[0])
          return (
            (t = t.substring(1)),
            "-" === t[0] && a.throwArgumentError("invalid hex", "value", t),
            (t = c(t)),
            "0x00" === t ? t : "-" + t
          );
        if (("0x" !== t.substring(0, 2) && (t = "0x" + t), "0x" === t))
          return "0x00";
        t.length % 2 && (t = "0x0" + t.substring(2));
        while (t.length > 4 && "0x00" === t.substring(0, 4))
          t = "0x" + t.substring(4);
        return t;
      }
      function g(t) {
        return BigNumber.from(c(t));
      }
      function p(t) {
        const r = BigNumber.from(t).toHexString();
        return "-" === r[0]
          ? new u("-" + r.substring(3), 16)
          : new u(r.substring(2), 16);
      }
      function v(t, r, e) {
        const i = { fault: t, operation: r };
        return (
          null != e && (i.value = e),
          a.throwError(t, s.Logger.errors.NUMERIC_FAULT, i)
        );
      }
      function y(t) {
        return new u(t, 36).toString(16);
      }
      function w(t) {
        return new u(t, 16).toString(36);
      }
      r.BigNumber = BigNumber;
    },
    592: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.arrayify = l),
        (r.concat = d),
        (r.hexConcat = b),
        (r.hexDataLength = y),
        (r.hexDataSlice = w),
        (r.hexStripZeros = _),
        (r.hexValue = M),
        (r.hexZeroPad = E),
        (r.hexlify = v),
        (r.isBytes = f),
        (r.isBytesLike = u),
        (r.isHexString = g),
        (r.joinSignature = x),
        (r.splitSignature = N),
        (r.stripZeros = m),
        (r.zeroPad = c));
      var i = e(179),
        n = e(1744);
      const o = new i.Logger(n.version);
      function s(t) {
        return !!t.toHexString;
      }
      function h(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return h(new Uint8Array(Array.prototype.slice.apply(t, r)));
            }),
          t
        );
      }
      function u(t) {
        return (g(t) && !(t.length % 2)) || f(t);
      }
      function a(t) {
        return "number" === typeof t && t == t && t % 1 === 0;
      }
      function f(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" === typeof t) return !1;
        if (!a(t.length) || t.length < 0) return !1;
        for (let r = 0; r < t.length; r++) {
          const e = t[r];
          if (!a(e) || e < 0 || e >= 256) return !1;
        }
        return !0;
      }
      function l(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid arrayify value");
          const r = [];
          while (t) (r.unshift(255 & t), (t = parseInt(String(t / 256))));
          return (0 === r.length && r.push(0), h(new Uint8Array(r)));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t) && (t = t.toHexString()),
          g(t))
        ) {
          let e = t.substring(2);
          e.length % 2 &&
            ("left" === r.hexPad
              ? (e = "0" + e)
              : "right" === r.hexPad
                ? (e += "0")
                : o.throwArgumentError("hex data is odd-length", "value", t));
          const i = [];
          for (let t = 0; t < e.length; t += 2)
            i.push(parseInt(e.substring(t, t + 2), 16));
          return h(new Uint8Array(i));
        }
        return f(t)
          ? h(new Uint8Array(t))
          : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function d(t) {
        const r = t.map((t) => l(t)),
          e = r.reduce((t, r) => t + r.length, 0),
          i = new Uint8Array(e);
        return (r.reduce((t, r) => (i.set(r, t), t + r.length), 0), h(i));
      }
      function m(t) {
        let r = l(t);
        if (0 === r.length) return r;
        let e = 0;
        while (e < r.length && 0 === r[e]) e++;
        return (e && (r = r.slice(e)), r);
      }
      function c(t, r) {
        ((t = l(t)),
          t.length > r &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const e = new Uint8Array(r);
        return (e.set(t, r - t.length), h(e));
      }
      function g(t, r) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || t.length === 2 + 2 * r)
        );
      }
      const p = "0123456789abcdef";
      function v(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid hexlify value");
          let r = "";
          while (t) ((r = p[15 & t] + r), (t = Math.floor(t / 16)));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof t)
          return ((t = t.toString(16)), t.length % 2 ? "0x0" + t : "0x" + t);
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t))
        )
          return t.toHexString();
        if (g(t))
          return (
            t.length % 2 &&
              ("left" === r.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === r.hexPad
                  ? (t += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (f(t)) {
          let r = "0x";
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            r += p[(240 & i) >> 4] + p[15 & i];
          }
          return r;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function y(t) {
        if ("string" !== typeof t) t = v(t);
        else if (!g(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function w(t, r, e) {
        return (
          "string" !== typeof t
            ? (t = v(t))
            : (!g(t) || t.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", t),
          (r = 2 + 2 * r),
          null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
        );
      }
      function b(t) {
        let r = "0x";
        return (
          t.forEach((t) => {
            r += v(t).substring(2);
          }),
          r
        );
      }
      function M(t) {
        const r = _(v(t, { hexPad: "left" }));
        return "0x" === r ? "0x0" : r;
      }
      function _(t) {
        ("string" !== typeof t && (t = v(t)),
          g(t) || o.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2)));
        let r = 0;
        while (r < t.length && "0" === t[r]) r++;
        return "0x" + t.substring(r);
      }
      function E(t, r) {
        ("string" !== typeof t
          ? (t = v(t))
          : g(t) || o.throwArgumentError("invalid hex string", "value", t),
          t.length > 2 * r + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (t.length < 2 * r + 2) t = "0x0" + t.substring(2);
        return t;
      }
      function N(t) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (u(t)) {
          let e = l(t);
          (64 === e.length
            ? ((r.v = 27 + (e[32] >> 7)),
              (e[32] &= 127),
              (r.r = v(e.slice(0, 32))),
              (r.s = v(e.slice(32, 64))))
            : 65 === e.length
              ? ((r.r = v(e.slice(0, 32))),
                (r.s = v(e.slice(32, 64))),
                (r.v = e[64]))
              : o.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  t,
                ),
            r.v < 27 &&
              (0 === r.v || 1 === r.v
                ? (r.v += 27)
                : o.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t,
                  )),
            (r.recoveryParam = 1 - (r.v % 2)),
            r.recoveryParam && (e[32] |= 128),
            (r._vs = v(e.slice(32, 64))));
        } else {
          if (
            ((r.r = t.r),
            (r.s = t.s),
            (r.v = t.v),
            (r.recoveryParam = t.recoveryParam),
            (r._vs = t._vs),
            null != r._vs)
          ) {
            const e = c(l(r._vs), 32);
            r._vs = v(e);
            const i = e[0] >= 128 ? 1 : 0;
            (null == r.recoveryParam
              ? (r.recoveryParam = i)
              : r.recoveryParam !== i &&
                o.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t,
                ),
              (e[0] &= 127));
            const n = v(e);
            null == r.s
              ? (r.s = n)
              : r.s !== n &&
                o.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t,
                );
          }
          if (null == r.recoveryParam)
            null == r.v
              ? o.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t,
                )
              : 0 === r.v || 1 === r.v
                ? (r.recoveryParam = r.v)
                : (r.recoveryParam = 1 - (r.v % 2));
          else if (null == r.v) r.v = 27 + r.recoveryParam;
          else {
            const e = 0 === r.v || 1 === r.v ? r.v : 1 - (r.v % 2);
            r.recoveryParam !== e &&
              o.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t,
              );
          }
          (null != r.r && g(r.r)
            ? (r.r = E(r.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t,
              ),
            null != r.s && g(r.s)
              ? (r.s = E(r.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t,
                ));
          const e = l(r.s);
          (e[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", t),
            r.recoveryParam && (e[0] |= 128));
          const i = v(e);
          (r._vs &&
            (g(r._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", t),
            (r._vs = E(r._vs, 32))),
            null == r._vs
              ? (r._vs = i)
              : r._vs !== i &&
                o.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t,
                ));
        }
        return (
          (r.yParityAndS = r._vs),
          (r.compact = r.r + r.yParityAndS.substring(2)),
          r
        );
      }
      function x(t) {
        return (
          (t = N(t)),
          v(d([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    593: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.version = void 0));
      r.version = "bignumber/5.8.0";
    },
    77: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Logger = r.LogLevel = r.ErrorCode = void 0));
      var i = e(1723);
      let n = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let h = s["default"],
        u = null;
      function a() {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((r) => {
              try {
                if ("test" !== "test".normalize(r))
                  throw new Error("bad normalize");
              } catch (e) {
                t.push(r);
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
      const f = a();
      var l, d;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(l || (r.LogLevel = l = {})),
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
        })(d || (r.ErrorCode = d = {})));
      const m = "0123456789abcdef";
      class Logger {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, r) {
          const e = t.toLowerCase();
          (null == s[e] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            h > s[e] || console.log.apply(console, r));
        }
        debug() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.DEBUG, r);
        }
        info() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.INFO, r);
        }
        warn() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          this._log(Logger.levels.WARNING, r);
        }
        makeError(t, r, e) {
          if (o) return this.makeError("censored error", r, {});
          (r || (r = Logger.errors.UNKNOWN_ERROR), e || (e = {}));
          const i = [];
          (Object.keys(e).forEach((t) => {
            const r = e[t];
            try {
              if (r instanceof Uint8Array) {
                let e = "";
                for (let t = 0; t < r.length; t++)
                  ((e += m[r[t] >> 4]), (e += m[15 & r[t]]));
                i.push(t + "=Uint8Array(0x" + e + ")");
              } else i.push(t + "=" + JSON.stringify(r));
            } catch (h) {
              i.push(t + "=" + JSON.stringify(e[t].toString()));
            }
          }),
            i.push("code=" + r),
            i.push("version=" + this.version));
          const n = t;
          let s = "";
          switch (r) {
            case d.NUMERIC_FAULT: {
              s = "NUMERIC_FAULT";
              const r = t;
              switch (r) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  s += "-" + r;
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
              s = r;
              break;
          }
          (s && (t += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
            i.length && (t += " (" + i.join(", ") + ")"));
          const h = new Error(t);
          return (
            (h.reason = n),
            (h.code = r),
            Object.keys(e).forEach(function (t) {
              h[t] = e[t];
            }),
            h
          );
        }
        throwError(t, r, e) {
          throw this.makeError(t, r, e);
        }
        throwArgumentError(t, r, e) {
          return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
            argument: r,
            value: e,
          });
        }
        assert(t, r, e, i) {
          t || this.throwError(r, e, i);
        }
        assertArgument(t, r, e, i) {
          t || this.throwArgumentError(r, e, i);
        }
        checkNormalize(t) {
          (null == t && (t = "platform missing String.prototype.normalize"),
            f &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: f },
              ));
        }
        checkSafeUint53(t, r) {
          "number" === typeof t &&
            (null == r && (r = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(r, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, r, e) {
          ((e = e ? ": " + e : ""),
            t < r &&
              this.throwError(
                "missing argument" + e,
                Logger.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: r },
              ),
            t > r &&
              this.throwError(
                "too many arguments" + e,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: r },
              ));
        }
        checkNew(t, r) {
          (t !== Object && null != t) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: r.name,
            });
        }
        checkAbstract(t, r) {
          t === r
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(r.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" },
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: r.name,
              });
        }
        static globalLogger() {
          return (u || (u = new Logger(i.version)), u);
        }
        static setCensorship(t, r) {
          if (
            (!t &&
              r &&
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
          ((o = !!t), (n = !!r));
        }
        static setLogLevel(t) {
          const r = s[t.toLowerCase()];
          null != r
            ? (h = r)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((r.Logger = Logger), (Logger.errors = d), (Logger.levels = l));
    },
    96: function (t, r, e) {
      "use strict";
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.arrayify = l),
        (r.concat = d),
        (r.hexConcat = b),
        (r.hexDataLength = y),
        (r.hexDataSlice = w),
        (r.hexStripZeros = _),
        (r.hexValue = M),
        (r.hexZeroPad = E),
        (r.hexlify = v),
        (r.isBytes = f),
        (r.isBytesLike = u),
        (r.isHexString = g),
        (r.joinSignature = x),
        (r.splitSignature = N),
        (r.stripZeros = m),
        (r.zeroPad = c));
      var i = e(77),
        n = e(1724);
      const o = new i.Logger(n.version);
      function s(t) {
        return !!t.toHexString;
      }
      function h(t) {
        return (
          t.slice ||
            (t.slice = function () {
              const r = Array.prototype.slice.call(arguments);
              return h(new Uint8Array(Array.prototype.slice.apply(t, r)));
            }),
          t
        );
      }
      function u(t) {
        return (g(t) && !(t.length % 2)) || f(t);
      }
      function a(t) {
        return "number" === typeof t && t == t && t % 1 === 0;
      }
      function f(t) {
        if (null == t) return !1;
        if (t.constructor === Uint8Array) return !0;
        if ("string" === typeof t) return !1;
        if (!a(t.length) || t.length < 0) return !1;
        for (let r = 0; r < t.length; r++) {
          const e = t[r];
          if (!a(e) || e < 0 || e >= 256) return !1;
        }
        return !0;
      }
      function l(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid arrayify value");
          const r = [];
          while (t) (r.unshift(255 & t), (t = parseInt(String(t / 256))));
          return (0 === r.length && r.push(0), h(new Uint8Array(r)));
        }
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t) && (t = t.toHexString()),
          g(t))
        ) {
          let e = t.substring(2);
          e.length % 2 &&
            ("left" === r.hexPad
              ? (e = "0" + e)
              : "right" === r.hexPad
                ? (e += "0")
                : o.throwArgumentError("hex data is odd-length", "value", t));
          const i = [];
          for (let t = 0; t < e.length; t += 2)
            i.push(parseInt(e.substring(t, t + 2), 16));
          return h(new Uint8Array(i));
        }
        return f(t)
          ? h(new Uint8Array(t))
          : o.throwArgumentError("invalid arrayify value", "value", t);
      }
      function d(t) {
        const r = t.map((t) => l(t)),
          e = r.reduce((t, r) => t + r.length, 0),
          i = new Uint8Array(e);
        return (r.reduce((t, r) => (i.set(r, t), t + r.length), 0), h(i));
      }
      function m(t) {
        let r = l(t);
        if (0 === r.length) return r;
        let e = 0;
        while (e < r.length && 0 === r[e]) e++;
        return (e && (r = r.slice(e)), r);
      }
      function c(t, r) {
        ((t = l(t)),
          t.length > r &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const e = new Uint8Array(r);
        return (e.set(t, r - t.length), h(e));
      }
      function g(t, r) {
        return (
          !("string" !== typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || t.length === 2 + 2 * r)
        );
      }
      const p = "0123456789abcdef";
      function v(t, r) {
        if ((r || (r = {}), "number" === typeof t)) {
          o.checkSafeUint53(t, "invalid hexlify value");
          let r = "";
          while (t) ((r = p[15 & t] + r), (t = Math.floor(t / 16)));
          return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
        }
        if ("bigint" === typeof t)
          return ((t = t.toString(16)), t.length % 2 ? "0x0" + t : "0x" + t);
        if (
          (r.allowMissingPrefix &&
            "string" === typeof t &&
            "0x" !== t.substring(0, 2) &&
            (t = "0x" + t),
          s(t))
        )
          return t.toHexString();
        if (g(t))
          return (
            t.length % 2 &&
              ("left" === r.hexPad
                ? (t = "0x0" + t.substring(2))
                : "right" === r.hexPad
                  ? (t += "0")
                  : o.throwArgumentError("hex data is odd-length", "value", t)),
            t.toLowerCase()
          );
        if (f(t)) {
          let r = "0x";
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            r += p[(240 & i) >> 4] + p[15 & i];
          }
          return r;
        }
        return o.throwArgumentError("invalid hexlify value", "value", t);
      }
      function y(t) {
        if ("string" !== typeof t) t = v(t);
        else if (!g(t) || t.length % 2) return null;
        return (t.length - 2) / 2;
      }
      function w(t, r, e) {
        return (
          "string" !== typeof t
            ? (t = v(t))
            : (!g(t) || t.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", t),
          (r = 2 + 2 * r),
          null != e ? "0x" + t.substring(r, 2 + 2 * e) : "0x" + t.substring(r)
        );
      }
      function b(t) {
        let r = "0x";
        return (
          t.forEach((t) => {
            r += v(t).substring(2);
          }),
          r
        );
      }
      function M(t) {
        const r = _(v(t, { hexPad: "left" }));
        return "0x" === r ? "0x0" : r;
      }
      function _(t) {
        ("string" !== typeof t && (t = v(t)),
          g(t) || o.throwArgumentError("invalid hex string", "value", t),
          (t = t.substring(2)));
        let r = 0;
        while (r < t.length && "0" === t[r]) r++;
        return "0x" + t.substring(r);
      }
      function E(t, r) {
        ("string" !== typeof t
          ? (t = v(t))
          : g(t) || o.throwArgumentError("invalid hex string", "value", t),
          t.length > 2 * r + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (t.length < 2 * r + 2) t = "0x0" + t.substring(2);
        return t;
      }
      function N(t) {
        const r = {
          r: "0x",
          s: "0x",
          _vs: "0x",
          recoveryParam: 0,
          v: 0,
          yParityAndS: "0x",
          compact: "0x",
        };
        if (u(t)) {
          let e = l(t);
          (64 === e.length
            ? ((r.v = 27 + (e[32] >> 7)),
              (e[32] &= 127),
              (r.r = v(e.slice(0, 32))),
              (r.s = v(e.slice(32, 64))))
            : 65 === e.length
              ? ((r.r = v(e.slice(0, 32))),
                (r.s = v(e.slice(32, 64))),
                (r.v = e[64]))
              : o.throwArgumentError(
                  "invalid signature string",
                  "signature",
                  t,
                ),
            r.v < 27 &&
              (0 === r.v || 1 === r.v
                ? (r.v += 27)
                : o.throwArgumentError(
                    "signature invalid v byte",
                    "signature",
                    t,
                  )),
            (r.recoveryParam = 1 - (r.v % 2)),
            r.recoveryParam && (e[32] |= 128),
            (r._vs = v(e.slice(32, 64))));
        } else {
          if (
            ((r.r = t.r),
            (r.s = t.s),
            (r.v = t.v),
            (r.recoveryParam = t.recoveryParam),
            (r._vs = t._vs),
            null != r._vs)
          ) {
            const e = c(l(r._vs), 32);
            r._vs = v(e);
            const i = e[0] >= 128 ? 1 : 0;
            (null == r.recoveryParam
              ? (r.recoveryParam = i)
              : r.recoveryParam !== i &&
                o.throwArgumentError(
                  "signature recoveryParam mismatch _vs",
                  "signature",
                  t,
                ),
              (e[0] &= 127));
            const n = v(e);
            null == r.s
              ? (r.s = n)
              : r.s !== n &&
                o.throwArgumentError(
                  "signature v mismatch _vs",
                  "signature",
                  t,
                );
          }
          if (null == r.recoveryParam)
            null == r.v
              ? o.throwArgumentError(
                  "signature missing v and recoveryParam",
                  "signature",
                  t,
                )
              : 0 === r.v || 1 === r.v
                ? (r.recoveryParam = r.v)
                : (r.recoveryParam = 1 - (r.v % 2));
          else if (null == r.v) r.v = 27 + r.recoveryParam;
          else {
            const e = 0 === r.v || 1 === r.v ? r.v : 1 - (r.v % 2);
            r.recoveryParam !== e &&
              o.throwArgumentError(
                "signature recoveryParam mismatch v",
                "signature",
                t,
              );
          }
          (null != r.r && g(r.r)
            ? (r.r = E(r.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                t,
              ),
            null != r.s && g(r.s)
              ? (r.s = E(r.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  t,
                ));
          const e = l(r.s);
          (e[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", t),
            r.recoveryParam && (e[0] |= 128));
          const i = v(e);
          (r._vs &&
            (g(r._vs) ||
              o.throwArgumentError("signature invalid _vs", "signature", t),
            (r._vs = E(r._vs, 32))),
            null == r._vs
              ? (r._vs = i)
              : r._vs !== i &&
                o.throwArgumentError(
                  "signature _vs mismatch v and s",
                  "signature",
                  t,
                ));
        }
        return (
          (r.yParityAndS = r._vs),
          (r.compact = r.r + r.yParityAndS.substring(2)),
          r
        );
      }
      function x(t) {
        return (
          (t = N(t)),
          v(d([t.r, t.s, t.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
  },
]);
