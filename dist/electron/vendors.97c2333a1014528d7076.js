(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [73],
  {
    150: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getAddress = g),
        (t.getContractAddress = A),
        (t.getCreate2Address = b),
        (t.getIcapAddress = v),
        (t.isAddress = y));
      var n = r(33),
        i = r(151),
        o = r(75),
        s = r(562),
        a = r(42),
        u = r(1612);
      const f = new a.Logger(u.version);
      function h(e) {
        ((0, n.isHexString)(e, 20) ||
          f.throwArgumentError("invalid address", "address", e),
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
      const l = 9007199254740991;
      function c(e) {
        return Math.log10 ? Math.log10(e) : Math.log(e) / Math.LN10;
      }
      const d = {};
      for (let w = 0; w < 10; w++) d[String(w)] = String(w);
      for (let w = 0; w < 26; w++)
        d[String.fromCharCode(65 + w)] = String(10 + w);
      const p = Math.floor(c(l));
      function m(e) {
        ((e = e.toUpperCase()),
          (e = e.substring(4) + e.substring(0, 2) + "00"));
        let t = e
          .split("")
          .map((e) => d[e])
          .join("");
        while (t.length >= p) {
          let e = t.substring(0, p);
          t = (parseInt(e, 10) % 97) + t.substring(e.length);
        }
        let r = String(98 - (parseInt(t, 10) % 97));
        while (r.length < 2) r = "0" + r;
        return r;
      }
      function g(e) {
        let t = null;
        if (
          ("string" !== typeof e &&
            f.throwArgumentError("invalid address", "address", e),
          e.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          ("0x" !== e.substring(0, 2) && (e = "0x" + e),
            (t = h(e)),
            e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
              t !== e &&
              f.throwArgumentError("bad address checksum", "address", e));
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          (e.substring(2, 4) !== m(e) &&
            f.throwArgumentError("bad icap checksum", "address", e),
            (t = (0, i._base36To16)(e.substring(4))));
          while (t.length < 40) t = "0" + t;
          t = h("0x" + t);
        } else f.throwArgumentError("invalid address", "address", e);
        return t;
      }
      function y(e) {
        try {
          return (g(e), !0);
        } catch (t) {}
        return !1;
      }
      function v(e) {
        let t = (0, i._base16To36)(g(e).substring(2)).toUpperCase();
        while (t.length < 30) t = "0" + t;
        return "XE" + m("XE00" + t) + t;
      }
      function A(e) {
        let t = null;
        try {
          t = g(e.from);
        } catch (a) {
          f.throwArgumentError("missing from address", "transaction", e);
        }
        const r = (0, n.stripZeros)(
          (0, n.arrayify)(i.BigNumber.from(e.nonce).toHexString()),
        );
        return g(
          (0, n.hexDataSlice)((0, o.keccak256)((0, s.encode)([t, r])), 12),
        );
      }
      function b(e, t, r) {
        return (
          32 !== (0, n.hexDataLength)(t) &&
            f.throwArgumentError("salt must be 32 bytes", "salt", t),
          32 !== (0, n.hexDataLength)(r) &&
            f.throwArgumentError(
              "initCodeHash must be 32 bytes",
              "initCodeHash",
              r,
            ),
          g(
            (0, n.hexDataSlice)(
              (0, o.keccak256)((0, n.concat)(["0xff", g(e), t, r])),
              12,
            ),
          )
        );
      }
    },
    151: function (e, t, r) {
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
      var n = r(559),
        i = r(1610);
    },
    1605: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "decryptCrowdsale", {
          enumerable: !0,
          get: function () {
            return n.decrypt;
          },
        }),
        (t.decryptJsonWallet = s),
        (t.decryptJsonWalletSync = a),
        Object.defineProperty(t, "decryptKeystore", {
          enumerable: !0,
          get: function () {
            return o.decrypt;
          },
        }),
        Object.defineProperty(t, "decryptKeystoreSync", {
          enumerable: !0,
          get: function () {
            return o.decryptSync;
          },
        }),
        Object.defineProperty(t, "encryptKeystore", {
          enumerable: !0,
          get: function () {
            return o.encrypt;
          },
        }),
        Object.defineProperty(t, "getJsonWalletAddress", {
          enumerable: !0,
          get: function () {
            return i.getJsonWalletAddress;
          },
        }),
        Object.defineProperty(t, "isCrowdsaleWallet", {
          enumerable: !0,
          get: function () {
            return i.isCrowdsaleWallet;
          },
        }),
        Object.defineProperty(t, "isKeystoreWallet", {
          enumerable: !0,
          get: function () {
            return i.isKeystoreWallet;
          },
        }));
      var n = r(1606),
        i = r(1624),
        o = r(1625);
      function s(e, t, r) {
        if ((0, i.isCrowdsaleWallet)(e)) {
          r && r(0);
          const i = (0, n.decrypt)(e, t);
          return (r && r(1), Promise.resolve(i));
        }
        return (0, i.isKeystoreWallet)(e)
          ? (0, o.decrypt)(e, t, r)
          : Promise.reject(new Error("invalid JSON wallet"));
      }
      function a(e, t) {
        if ((0, i.isCrowdsaleWallet)(e)) return (0, n.decrypt)(e, t);
        if ((0, i.isKeystoreWallet)(e)) return (0, o.decryptSync)(e, t);
        throw new Error("invalid JSON wallet");
      }
    },
    1606: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CrowdsaleAccount = void 0),
        (t.decrypt = m));
      var i = n(r(161)),
        o = r(150),
        s = r(33),
        a = r(75),
        u = r(286),
        f = r(94),
        h = r(76),
        l = r(42),
        c = r(566),
        d = r(567);
      const p = new l.Logger(c.version);
      class CrowdsaleAccount extends h.Description {
        isCrowdsaleAccount(e) {
          return !(!e || !e._isCrowdsaleAccount);
        }
      }
      function m(e, t) {
        const r = JSON.parse(e);
        t = (0, d.getPassword)(t);
        const n = (0, o.getAddress)((0, d.searchPath)(r, "ethaddr")),
          h = (0, d.looseArrayify)((0, d.searchPath)(r, "encseed"));
        (h && h.length % 16 === 0) ||
          p.throwArgumentError("invalid encseed", "json", e);
        const l = (0, s.arrayify)((0, u.pbkdf2)(t, t, 2e3, 32, "sha256")).slice(
            0,
            16,
          ),
          c = h.slice(0, 16),
          m = h.slice(16),
          g = new i.default.ModeOfOperation.cbc(l, c),
          y = i.default.padding.pkcs7.strip((0, s.arrayify)(g.decrypt(m)));
        let v = "";
        for (let i = 0; i < y.length; i++) v += String.fromCharCode(y[i]);
        const A = (0, f.toUtf8Bytes)(v),
          b = (0, a.keccak256)(A);
        return new CrowdsaleAccount({
          _isCrowdsaleAccount: !0,
          address: n,
          privateKey: b,
        });
      }
      t.CrowdsaleAccount = CrowdsaleAccount;
    },
    1607: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "logger/5.8.0";
    },
    1608: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "bytes/5.8.0";
    },
    1610: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FixedNumber = t.FixedFormat = void 0),
        (t.formatFixed = p),
        (t.parseFixed = m));
      var n = r(33),
        i = r(42),
        o = r(561),
        s = r(559);
      const a = new i.Logger(o.version),
        u = {},
        f = s.BigNumber.from(0),
        h = s.BigNumber.from(-1);
      function l(e, t, r, n) {
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
      function p(e, t) {
        null == t && (t = 0);
        const r = d(t);
        e = s.BigNumber.from(e);
        const n = e.lt(f);
        n && (e = e.mul(h));
        let i = e.mod(r).toString();
        while (i.length < r.length - 1) i = "0" + i;
        i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
        const o = e.div(r).toString();
        return ((e = 1 === r.length ? o : o + "." + i), n && (e = "-" + e), e);
      }
      function m(e, t) {
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
          l("fractional component exceeds decimals", "underflow", "parseFixed"),
          "" === u && (u = "0"));
        while (u.length < r.length - 1) u += "0";
        const f = s.BigNumber.from(o),
          c = s.BigNumber.from(u);
        let p = f.mul(r).add(c);
        return (n && (p = p.mul(h)), p);
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
          const t = m(this._value, this.format.decimals),
            r = m(e._value, e.format.decimals);
          return FixedNumber.fromValue(
            t.add(r),
            this.format.decimals,
            this.format,
          );
        }
        subUnsafe(e) {
          this._checkFormat(e);
          const t = m(this._value, this.format.decimals),
            r = m(e._value, e.format.decimals);
          return FixedNumber.fromValue(
            t.sub(r),
            this.format.decimals,
            this.format,
          );
        }
        mulUnsafe(e) {
          this._checkFormat(e);
          const t = m(this._value, this.format.decimals),
            r = m(e._value, e.format.decimals);
          return FixedNumber.fromValue(
            t.mul(r).div(this.format._multiplier),
            this.format.decimals,
            this.format,
          );
        }
        divUnsafe(e) {
          this._checkFormat(e);
          const t = m(this._value, this.format.decimals),
            r = m(e._value, e.format.decimals);
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
            this.isNegative() && r && (t = t.subUnsafe(g.toFormat(t.format))),
            t
          );
        }
        ceiling() {
          const e = this.toString().split(".");
          1 === e.length && e.push("0");
          let t = FixedNumber.from(e[0], this.format);
          const r = !e[1].match(/^(0*)$/);
          return (
            !this.isNegative() && r && (t = t.addUnsafe(g.toFormat(t.format))),
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
            n = y.toFormat(this.format);
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
            FixedNumber.fromString(p(e, t), FixedFormat.from(r))
          );
        }
        static fromString(e, t) {
          null == t && (t = "fixed");
          const r = FixedFormat.from(t),
            i = m(e, r.decimals);
          !r.signed &&
            i.lt(f) &&
            l("unsigned value cannot be negative", "overflow", "value", e);
          let o = null;
          r.signed
            ? (o = i.toTwos(r.width).toHexString())
            : ((o = i.toHexString()), (o = (0, n.hexZeroPad)(o, r.width / 8)));
          const s = p(i, r.decimals);
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
            a = p(i, r.decimals);
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
      const g = FixedNumber.from(1),
        y = FixedNumber.from("0.5");
    },
    1611: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "rlp/5.8.0";
    },
    1612: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "address/5.8.0";
    },
    1613: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.pbkdf2 = o));
      var n = r(33),
        i = r(563);
      function o(e, t, r, o, s) {
        let a;
        ((e = (0, n.arrayify)(e)), (t = (0, n.arrayify)(t)));
        let u = 1;
        const f = new Uint8Array(o),
          h = new Uint8Array(t.length + 4);
        let l, c;
        h.set(t);
        for (let d = 1; d <= u; d++) {
          ((h[t.length] = (d >> 24) & 255),
            (h[t.length + 1] = (d >> 16) & 255),
            (h[t.length + 2] = (d >> 8) & 255),
            (h[t.length + 3] = 255 & d));
          let p = (0, n.arrayify)((0, i.computeHmac)(s, e, h));
          (a ||
            ((a = p.length),
            (c = new Uint8Array(a)),
            (u = Math.ceil(o / a)),
            (l = o - (u - 1) * a)),
            c.set(p));
          for (let t = 1; t < r; t++) {
            p = (0, n.arrayify)((0, i.computeHmac)(s, e, p));
            for (let e = 0; e < a; e++) c[e] ^= p[e];
          }
          const m = (d - 1) * a,
            g = d === u ? l : a;
          f.set((0, n.arrayify)(c).slice(0, g), m);
        }
        return (0, n.hexlify)(f);
      }
    },
    1614: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.computeHmac = d),
        (t.ripemd160 = h),
        (t.sha256 = l),
        (t.sha512 = c));
      var i = n(r(43)),
        o = r(33),
        s = r(564),
        a = r(42),
        u = r(1615);
      const f = new a.Logger(u.version);
      function h(e) {
        return (
          "0x" +
          i.default
            .ripemd160()
            .update((0, o.arrayify)(e))
            .digest("hex")
        );
      }
      function l(e) {
        return (
          "0x" +
          i.default
            .sha256()
            .update((0, o.arrayify)(e))
            .digest("hex")
        );
      }
      function c(e) {
        return (
          "0x" +
          i.default
            .sha512()
            .update((0, o.arrayify)(e))
            .digest("hex")
        );
      }
      function d(e, t, r) {
        return (
          s.SupportedAlgorithm[e] ||
            f.throwError(
              "unsupported algorithm " + e,
              a.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "hmac", algorithm: e },
            ),
          "0x" +
            i.default
              .hmac(i.default[e], (0, o.arrayify)(t))
              .update((0, o.arrayify)(r))
              .digest("hex")
        );
      }
    },
    1615: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "sha2/5.8.0";
    },
    1616: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatBytes32String = s),
        (t.parseBytes32String = a));
      var n = r(565),
        i = r(33),
        o = r(287);
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
    1617: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AddressZero = void 0));
      t.AddressZero = "0x0000000000000000000000000000000000000000";
    },
    1618: function (e, t, r) {
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
      var n = r(151);
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
    1619: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HashZero = void 0));
      t.HashZero =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    1620: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EtherSymbol = void 0));
      t.EtherSymbol = "Ξ";
    },
    1621: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "strings/5.8.0";
    },
    1622: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t._nameprepTableA1 = g),
        (t._nameprepTableB2 = y),
        (t._nameprepTableC = v),
        (t.nameprep = A));
      var n = r(287);
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
        f = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
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
        l = o(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3",
        ),
        c = o(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7",
        ),
        d = o(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          i,
        ),
        p = s(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001",
        );
      function m(e) {
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
      function g(e) {
        return !!a(e, u);
      }
      function y(e) {
        let t = a(e, h);
        if (t) return [e + t.s];
        let r = l[e];
        if (r) return r;
        let n = c[e];
        if (n) return [e + n[0]];
        let i = d[e];
        return i || null;
      }
      function v(e) {
        return !!a(e, p);
      }
      function A(e) {
        if (e.match(/^[a-z0-9-]*$/i) && e.length <= 59) return e.toLowerCase();
        let t = (0, n.toUtf8CodePoints)(e);
        ((t = m(
          t.map((e) => {
            if (f.indexOf(e) >= 0) return [];
            if (e >= 65024 && e <= 65039) return [];
            let t = y(e);
            return t || [e];
          }),
        )),
          (t = (0, n.toUtf8CodePoints)(
            (0, n._toUtf8String)(t),
            n.UnicodeNormalizationForm.NFKC,
          )),
          t.forEach((e) => {
            if (v(e)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
          }),
          t.forEach((e) => {
            if (g(e)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
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
    1623: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "properties/5.8.0";
    },
    1624: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getJsonWalletAddress = s),
        (t.isCrowdsaleWallet = i),
        (t.isKeystoreWallet = o));
      var n = r(150);
      function i(e) {
        let t = null;
        try {
          t = JSON.parse(e);
        } catch (r) {
          return !1;
        }
        return t.encseed && t.ethaddr;
      }
      function o(e) {
        let t = null;
        try {
          t = JSON.parse(e);
        } catch (r) {
          return !1;
        }
        return !(
          !t.version ||
          parseInt(t.version) !== t.version ||
          3 !== parseInt(t.version)
        );
      }
      function s(e) {
        if (i(e))
          try {
            return (0, n.getAddress)(JSON.parse(e).ethaddr);
          } catch (t) {
            return null;
          }
        if (o(e))
          try {
            return (0, n.getAddress)(JSON.parse(e).address);
          } catch (t) {
            return null;
          }
        return null;
      }
    },
    1625: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.KeystoreAccount = void 0),
        (t.decrypt = x),
        (t.decryptSync = P),
        (t.encrypt = B));
      var i = n(r(161)),
        o = n(r(381)),
        s = r(150),
        a = r(33),
        u = r(1626),
        f = r(75),
        h = r(286),
        l = r(1644),
        c = r(76),
        d = r(569),
        p = r(567),
        m = r(42),
        g = r(566),
        y = function (e, t, r, n) {
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
      const v = new m.Logger(g.version);
      function A(e) {
        return null != e && e.mnemonic && e.mnemonic.phrase;
      }
      class KeystoreAccount extends c.Description {
        isKeystoreAccount(e) {
          return !(!e || !e._isKeystoreAccount);
        }
      }
      function b(e, t, r) {
        const n = (0, p.searchPath)(e, "crypto/cipher");
        if ("aes-128-ctr" === n) {
          const n = (0, p.looseArrayify)(
              (0, p.searchPath)(e, "crypto/cipherparams/iv"),
            ),
            o = new i.default.Counter(n),
            s = new i.default.ModeOfOperation.ctr(t, o);
          return (0, a.arrayify)(s.decrypt(r));
        }
        return null;
      }
      function w(e, t) {
        const r = (0, p.looseArrayify)(
            (0, p.searchPath)(e, "crypto/ciphertext"),
          ),
          n = (0, a.hexlify)(
            (0, f.keccak256)((0, a.concat)([t.slice(16, 32), r])),
          ).substring(2);
        if (n !== (0, p.searchPath)(e, "crypto/mac").toLowerCase())
          throw new Error("invalid password");
        const o = b(e, t.slice(0, 16), r);
        o ||
          v.throwError(
            "unsupported cipher",
            m.Logger.errors.UNSUPPORTED_OPERATION,
            { operation: "decrypt" },
          );
        const h = t.slice(32, 64),
          l = (0, d.computeAddress)(o);
        if (e.address) {
          let t = e.address.toLowerCase();
          if (
            ("0x" !== t.substring(0, 2) && (t = "0x" + t),
            (0, s.getAddress)(t) !== l)
          )
            throw new Error("address mismatch");
        }
        const c = {
          _isKeystoreAccount: !0,
          address: l,
          privateKey: (0, a.hexlify)(o),
        };
        if ("0.1" === (0, p.searchPath)(e, "x-ethers/version")) {
          const t = (0, p.looseArrayify)(
              (0, p.searchPath)(e, "x-ethers/mnemonicCiphertext"),
            ),
            r = (0, p.looseArrayify)(
              (0, p.searchPath)(e, "x-ethers/mnemonicCounter"),
            ),
            n = new i.default.Counter(r),
            o = new i.default.ModeOfOperation.ctr(h, n),
            s = (0, p.searchPath)(e, "x-ethers/path") || u.defaultPath,
            f = (0, p.searchPath)(e, "x-ethers/locale") || "en",
            l = (0, a.arrayify)(o.decrypt(t));
          try {
            const e = (0, u.entropyToMnemonic)(l, f),
              t = u.HDNode.fromMnemonic(e, null, f).derivePath(s);
            if (t.privateKey != c.privateKey)
              throw new Error("mnemonic mismatch");
            c.mnemonic = t.mnemonic;
          } catch (g) {
            if (
              g.code !== m.Logger.errors.INVALID_ARGUMENT ||
              "wordlist" !== g.argument
            )
              throw g;
          }
        }
        return new KeystoreAccount(c);
      }
      function M(e, t, r, n, i) {
        return (0, a.arrayify)((0, h.pbkdf2)(e, t, r, n, i));
      }
      function E(e, t, r, n, i) {
        return Promise.resolve(M(e, t, r, n, i));
      }
      function S(e, t, r, n, i) {
        const o = (0, p.getPassword)(t),
          s = (0, p.searchPath)(e, "crypto/kdf");
        if (s && "string" === typeof s) {
          const t = function (e, t) {
            return v.throwArgumentError(
              "invalid key-derivation function parameters",
              e,
              t,
            );
          };
          if ("scrypt" === s.toLowerCase()) {
            const r = (0, p.looseArrayify)(
                (0, p.searchPath)(e, "crypto/kdfparams/salt"),
              ),
              a = parseInt((0, p.searchPath)(e, "crypto/kdfparams/n")),
              u = parseInt((0, p.searchPath)(e, "crypto/kdfparams/r")),
              f = parseInt((0, p.searchPath)(e, "crypto/kdfparams/p"));
            ((a && u && f) || t("kdf", s), 0 !== (a & (a - 1)) && t("N", a));
            const h = parseInt((0, p.searchPath)(e, "crypto/kdfparams/dklen"));
            return (32 !== h && t("dklen", h), n(o, r, a, u, f, 64, i));
          }
          if ("pbkdf2" === s.toLowerCase()) {
            const n = (0, p.looseArrayify)(
              (0, p.searchPath)(e, "crypto/kdfparams/salt"),
            );
            let i = null;
            const s = (0, p.searchPath)(e, "crypto/kdfparams/prf");
            "hmac-sha256" === s
              ? (i = "sha256")
              : "hmac-sha512" === s
                ? (i = "sha512")
                : t("prf", s);
            const a = parseInt((0, p.searchPath)(e, "crypto/kdfparams/c")),
              u = parseInt((0, p.searchPath)(e, "crypto/kdfparams/dklen"));
            return (32 !== u && t("dklen", u), r(o, n, a, u, i));
          }
        }
        return v.throwArgumentError(
          "unsupported key-derivation function",
          "kdf",
          s,
        );
      }
      function P(e, t) {
        const r = JSON.parse(e),
          n = S(r, t, M, o.default.syncScrypt);
        return w(r, n);
      }
      function x(e, t, r) {
        return y(this, void 0, void 0, function* () {
          const n = JSON.parse(e),
            i = yield S(n, t, E, o.default.scrypt, r);
          return w(n, i);
        });
      }
      function B(e, t, r, n) {
        try {
          if (
            (0, s.getAddress)(e.address) !== (0, d.computeAddress)(e.privateKey)
          )
            throw new Error("address/privateKey mismatch");
          if (A(e)) {
            const t = e.mnemonic,
              r = u.HDNode.fromMnemonic(t.phrase, null, t.locale).derivePath(
                t.path || u.defaultPath,
              );
            if (r.privateKey != e.privateKey)
              throw new Error("mnemonic mismatch");
          }
        } catch (x) {
          return Promise.reject(x);
        }
        ("function" !== typeof r || n || ((n = r), (r = {})), r || (r = {}));
        const h = (0, a.arrayify)(e.privateKey),
          c = (0, p.getPassword)(t);
        let m = null,
          g = null,
          y = null;
        if (A(e)) {
          const t = e.mnemonic;
          ((m = (0, a.arrayify)(
            (0, u.mnemonicToEntropy)(t.phrase, t.locale || "en"),
          )),
            (g = t.path || u.defaultPath),
            (y = t.locale || "en"));
        }
        let v = r.client;
        v || (v = "ethers.js");
        let b = null;
        b = r.salt ? (0, a.arrayify)(r.salt) : (0, l.randomBytes)(32);
        let w = null;
        if (r.iv) {
          if (((w = (0, a.arrayify)(r.iv)), 16 !== w.length))
            throw new Error("invalid iv");
        } else w = (0, l.randomBytes)(16);
        let M = null;
        if (r.uuid) {
          if (((M = (0, a.arrayify)(r.uuid)), 16 !== M.length))
            throw new Error("invalid uuid");
        } else M = (0, l.randomBytes)(16);
        let E = 1 << 17,
          S = 8,
          P = 1;
        return (
          r.scrypt &&
            (r.scrypt.N && (E = r.scrypt.N),
            r.scrypt.r && (S = r.scrypt.r),
            r.scrypt.p && (P = r.scrypt.p)),
          o.default.scrypt(c, b, E, S, P, 64, n).then((t) => {
            t = (0, a.arrayify)(t);
            const r = t.slice(0, 16),
              n = t.slice(16, 32),
              o = t.slice(32, 64),
              s = new i.default.Counter(w),
              u = new i.default.ModeOfOperation.ctr(r, s),
              c = (0, a.arrayify)(u.encrypt(h)),
              d = (0, f.keccak256)((0, a.concat)([n, c])),
              A = {
                address: e.address.substring(2).toLowerCase(),
                id: (0, p.uuidV4)(M),
                version: 3,
                crypto: {
                  cipher: "aes-128-ctr",
                  cipherparams: { iv: (0, a.hexlify)(w).substring(2) },
                  ciphertext: (0, a.hexlify)(c).substring(2),
                  kdf: "scrypt",
                  kdfparams: {
                    salt: (0, a.hexlify)(b).substring(2),
                    n: E,
                    dklen: 32,
                    p: P,
                    r: S,
                  },
                  mac: d.substring(2),
                },
              };
            if (m) {
              const e = (0, l.randomBytes)(16),
                t = new i.default.Counter(e),
                r = new i.default.ModeOfOperation.ctr(o, t),
                n = (0, a.arrayify)(r.encrypt(m)),
                s = new Date(),
                u =
                  s.getUTCFullYear() +
                  "-" +
                  (0, p.zpad)(s.getUTCMonth() + 1, 2) +
                  "-" +
                  (0, p.zpad)(s.getUTCDate(), 2) +
                  "T" +
                  (0, p.zpad)(s.getUTCHours(), 2) +
                  "-" +
                  (0, p.zpad)(s.getUTCMinutes(), 2) +
                  "-" +
                  (0, p.zpad)(s.getUTCSeconds(), 2) +
                  ".0Z";
              A["x-ethers"] = {
                client: v,
                gethFilename: "UTC--" + u + "--" + A.address,
                mnemonicCounter: (0, a.hexlify)(e).substring(2),
                mnemonicCiphertext: (0, a.hexlify)(n).substring(2),
                path: g,
                locale: y,
                version: "0.1",
              };
            }
            return JSON.stringify(A);
          })
        );
      }
      t.KeystoreAccount = KeystoreAccount;
    },
    1626: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.defaultPath = t.HDNode = void 0),
        (t.entropyToMnemonic = B),
        (t.getAccountPath = N),
        (t.isValidMnemonic = C),
        (t.mnemonicToEntropy = x),
        (t.mnemonicToSeed = P));
      var n = r(1627),
        i = r(33),
        o = r(151),
        s = r(94),
        a = r(286),
        u = r(76),
        f = r(568),
        h = r(563),
        l = r(569),
        c = r(1631),
        d = r(42),
        p = r(1643);
      const m = new d.Logger(p.version),
        g = o.BigNumber.from(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
        ),
        y = (0, s.toUtf8Bytes)("Bitcoin seed"),
        v = 2147483648;
      function A(e) {
        return ((1 << e) - 1) << (8 - e);
      }
      function b(e) {
        return (1 << e) - 1;
      }
      function w(e) {
        return (0, i.hexZeroPad)((0, i.hexlify)(e), 32);
      }
      function M(e) {
        return n.Base58.encode(
          (0, i.concat)([
            e,
            (0, i.hexDataSlice)((0, h.sha256)((0, h.sha256)(e)), 0, 4),
          ]),
        );
      }
      function E(e) {
        if (null == e) return c.wordlists["en"];
        if ("string" === typeof e) {
          const t = c.wordlists[e];
          return (
            null == t && m.throwArgumentError("unknown locale", "wordlist", e),
            t
          );
        }
        return e;
      }
      const S = {};
      t.defaultPath = "m/44'/60'/0'/0/0";
      class HDNode {
        constructor(e, t, r, n, o, s, a, c) {
          if (e !== S)
            throw new Error("HDNode constructor cannot be called directly");
          if (t) {
            const e = new f.SigningKey(t);
            ((0, u.defineReadOnly)(this, "privateKey", e.privateKey),
              (0, u.defineReadOnly)(this, "publicKey", e.compressedPublicKey));
          } else
            ((0, u.defineReadOnly)(this, "privateKey", null),
              (0, u.defineReadOnly)(this, "publicKey", (0, i.hexlify)(r)));
          ((0, u.defineReadOnly)(this, "parentFingerprint", n),
            (0, u.defineReadOnly)(
              this,
              "fingerprint",
              (0, i.hexDataSlice)(
                (0, h.ripemd160)((0, h.sha256)(this.publicKey)),
                0,
                4,
              ),
            ),
            (0, u.defineReadOnly)(
              this,
              "address",
              (0, l.computeAddress)(this.publicKey),
            ),
            (0, u.defineReadOnly)(this, "chainCode", o),
            (0, u.defineReadOnly)(this, "index", s),
            (0, u.defineReadOnly)(this, "depth", a),
            null == c
              ? ((0, u.defineReadOnly)(this, "mnemonic", null),
                (0, u.defineReadOnly)(this, "path", null))
              : "string" === typeof c
                ? ((0, u.defineReadOnly)(this, "mnemonic", null),
                  (0, u.defineReadOnly)(this, "path", c))
                : ((0, u.defineReadOnly)(this, "mnemonic", c),
                  (0, u.defineReadOnly)(this, "path", c.path)));
        }
        get extendedKey() {
          if (this.depth >= 256) throw new Error("Depth too large!");
          return M(
            (0, i.concat)([
              null != this.privateKey ? "0x0488ADE4" : "0x0488B21E",
              (0, i.hexlify)(this.depth),
              this.parentFingerprint,
              (0, i.hexZeroPad)((0, i.hexlify)(this.index), 4),
              this.chainCode,
              null != this.privateKey
                ? (0, i.concat)(["0x00", this.privateKey])
                : this.publicKey,
            ]),
          );
        }
        neuter() {
          return new HDNode(
            S,
            null,
            this.publicKey,
            this.parentFingerprint,
            this.chainCode,
            this.index,
            this.depth,
            this.path,
          );
        }
        _derive(e) {
          if (e > 4294967295) throw new Error("invalid index - " + String(e));
          let t = this.path;
          t && (t += "/" + (e & ~v));
          const r = new Uint8Array(37);
          if (e & v) {
            if (!this.privateKey)
              throw new Error("cannot derive child of neutered node");
            (r.set((0, i.arrayify)(this.privateKey), 1), t && (t += "'"));
          } else r.set((0, i.arrayify)(this.publicKey));
          for (let i = 24; i >= 0; i -= 8)
            r[33 + (i >> 3)] = (e >> (24 - i)) & 255;
          const n = (0, i.arrayify)(
              (0, h.computeHmac)(
                h.SupportedAlgorithm.sha512,
                this.chainCode,
                r,
              ),
            ),
            s = n.slice(0, 32),
            a = n.slice(32);
          let u = null,
            l = null;
          if (this.privateKey)
            u = w(o.BigNumber.from(s).add(this.privateKey).mod(g));
          else {
            const e = new f.SigningKey((0, i.hexlify)(s));
            l = e._addPoint(this.publicKey);
          }
          let c = t;
          const d = this.mnemonic;
          return (
            d &&
              (c = Object.freeze({
                phrase: d.phrase,
                path: t,
                locale: d.locale || "en",
              })),
            new HDNode(S, u, l, this.fingerprint, w(a), e, this.depth + 1, c)
          );
        }
        derivePath(e) {
          const t = e.split("/");
          if (0 === t.length || ("m" === t[0] && 0 !== this.depth))
            throw new Error("invalid path - " + e);
          "m" === t[0] && t.shift();
          let r = this;
          for (let n = 0; n < t.length; n++) {
            const e = t[n];
            if (e.match(/^[0-9]+'$/)) {
              const t = parseInt(e.substring(0, e.length - 1));
              if (t >= v) throw new Error("invalid path index - " + e);
              r = r._derive(v + t);
            } else {
              if (!e.match(/^[0-9]+$/))
                throw new Error("invalid path component - " + e);
              {
                const t = parseInt(e);
                if (t >= v) throw new Error("invalid path index - " + e);
                r = r._derive(t);
              }
            }
          }
          return r;
        }
        static _fromSeed(e, t) {
          const r = (0, i.arrayify)(e);
          if (r.length < 16 || r.length > 64) throw new Error("invalid seed");
          const n = (0, i.arrayify)(
            (0, h.computeHmac)(h.SupportedAlgorithm.sha512, y, r),
          );
          return new HDNode(
            S,
            w(n.slice(0, 32)),
            null,
            "0x00000000",
            w(n.slice(32)),
            0,
            0,
            t,
          );
        }
        static fromMnemonic(e, t, r) {
          return (
            (r = E(r)),
            (e = B(x(e, r), r)),
            HDNode._fromSeed(P(e, t), {
              phrase: e,
              path: "m",
              locale: r.locale,
            })
          );
        }
        static fromSeed(e) {
          return HDNode._fromSeed(e, null);
        }
        static fromExtendedKey(e) {
          const t = n.Base58.decode(e);
          (82 === t.length && M(t.slice(0, 78)) === e) ||
            m.throwArgumentError(
              "invalid extended key",
              "extendedKey",
              "[REDACTED]",
            );
          const r = t[4],
            o = (0, i.hexlify)(t.slice(5, 9)),
            s = parseInt((0, i.hexlify)(t.slice(9, 13)).substring(2), 16),
            a = (0, i.hexlify)(t.slice(13, 45)),
            u = t.slice(45, 78);
          switch ((0, i.hexlify)(t.slice(0, 4))) {
            case "0x0488b21e":
            case "0x043587cf":
              return new HDNode(S, null, (0, i.hexlify)(u), o, a, s, r, null);
            case "0x0488ade4":
            case "0x04358394 ":
              if (0 !== u[0]) break;
              return new HDNode(
                S,
                (0, i.hexlify)(u.slice(1)),
                null,
                o,
                a,
                s,
                r,
                null,
              );
          }
          return m.throwArgumentError(
            "invalid extended key",
            "extendedKey",
            "[REDACTED]",
          );
        }
      }
      function P(e, t) {
        t || (t = "");
        const r = (0, s.toUtf8Bytes)(
          "mnemonic" + t,
          s.UnicodeNormalizationForm.NFKD,
        );
        return (0, a.pbkdf2)(
          (0, s.toUtf8Bytes)(e, s.UnicodeNormalizationForm.NFKD),
          r,
          2048,
          64,
          "sha512",
        );
      }
      function x(e, t) {
        ((t = E(t)), m.checkNormalize());
        const r = t.split(e);
        if (r.length % 3 !== 0) throw new Error("invalid mnemonic");
        const n = (0, i.arrayify)(
          new Uint8Array(Math.ceil((11 * r.length) / 8)),
        );
        let o = 0;
        for (let i = 0; i < r.length; i++) {
          let e = t.getWordIndex(r[i].normalize("NFKD"));
          if (-1 === e) throw new Error("invalid mnemonic");
          for (let t = 0; t < 11; t++)
            (e & (1 << (10 - t)) && (n[o >> 3] |= 1 << (7 - (o % 8))), o++);
        }
        const s = (32 * r.length) / 3,
          a = r.length / 3,
          u = A(a),
          f = (0, i.arrayify)((0, h.sha256)(n.slice(0, s / 8)))[0] & u;
        if (f !== (n[n.length - 1] & u)) throw new Error("invalid checksum");
        return (0, i.hexlify)(n.slice(0, s / 8));
      }
      function B(e, t) {
        if (
          ((t = E(t)),
          (e = (0, i.arrayify)(e)),
          e.length % 4 !== 0 || e.length < 16 || e.length > 32)
        )
          throw new Error("invalid entropy");
        const r = [0];
        let n = 11;
        for (let i = 0; i < e.length; i++)
          n > 8
            ? ((r[r.length - 1] <<= 8), (r[r.length - 1] |= e[i]), (n -= 8))
            : ((r[r.length - 1] <<= n),
              (r[r.length - 1] |= e[i] >> (8 - n)),
              r.push(e[i] & b(8 - n)),
              (n += 3));
        const o = e.length / 4,
          s = (0, i.arrayify)((0, h.sha256)(e))[0] & A(o);
        return (
          (r[r.length - 1] <<= o),
          (r[r.length - 1] |= s >> (8 - o)),
          t.join(r.map((e) => t.getWord(e)))
        );
      }
      function C(e, t) {
        try {
          return (x(e, t), !0);
        } catch (r) {}
        return !1;
      }
      function N(e) {
        return (
          ("number" !== typeof e || e < 0 || e >= v || e % 1) &&
            m.throwArgumentError("invalid account index", "index", e),
          `m/44'/60'/${e}'/0/0`
        );
      }
      t.HDNode = HDNode;
    },
    1627: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BaseX = t.Base58 = t.Base32 = void 0));
      var n = r(33),
        i = r(76);
      class BaseX {
        constructor(e) {
          ((0, i.defineReadOnly)(this, "alphabet", e),
            (0, i.defineReadOnly)(this, "base", e.length),
            (0, i.defineReadOnly)(this, "_alphabetMap", {}),
            (0, i.defineReadOnly)(this, "_leader", e.charAt(0)));
          for (let t = 0; t < e.length; t++) this._alphabetMap[e.charAt(t)] = t;
        }
        encode(e) {
          let t = (0, n.arrayify)(e);
          if (0 === t.length) return "";
          let r = [0];
          for (let n = 0; n < t.length; ++n) {
            let e = t[n];
            for (let t = 0; t < r.length; ++t)
              ((e += r[t] << 8),
                (r[t] = e % this.base),
                (e = (e / this.base) | 0));
            while (e > 0) (r.push(e % this.base), (e = (e / this.base) | 0));
          }
          let i = "";
          for (let n = 0; 0 === t[n] && n < t.length - 1; ++n)
            i += this._leader;
          for (let n = r.length - 1; n >= 0; --n) i += this.alphabet[r[n]];
          return i;
        }
        decode(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          let t = [];
          if (0 === e.length) return new Uint8Array(t);
          t.push(0);
          for (let r = 0; r < e.length; r++) {
            let n = this._alphabetMap[e[r]];
            if (void 0 === n)
              throw new Error("Non-base" + this.base + " character");
            let i = n;
            for (let e = 0; e < t.length; ++e)
              ((i += t[e] * this.base), (t[e] = 255 & i), (i >>= 8));
            while (i > 0) (t.push(255 & i), (i >>= 8));
          }
          for (let r = 0; e[r] === this._leader && r < e.length - 1; ++r)
            t.push(0);
          return (0, n.arrayify)(new Uint8Array(t.reverse()));
        }
      }
      t.BaseX = BaseX;
      ((t.Base32 = new BaseX("abcdefghijklmnopqrstuvwxyz234567")),
        (t.Base58 = new BaseX(
          "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        )));
    },
    1628: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EC = void 0));
        var i = n(r(560)),
          o = n(r(43));
        "undefined" !== typeof globalThis
          ? globalThis
          : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof e || ("undefined" !== typeof self && self);
        function s(e, t, r) {
          return (
            (r = {
              path: t,
              exports: {},
              require: function (e, t) {
                return a(e, void 0 === t || null === t ? r.path : t);
              },
            }),
            e(r, r.exports),
            r.exports
          );
        }
        function a() {
          throw new Error(
            "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
          );
        }
        var u = f;
        function f(e, t) {
          if (!e) throw new Error(t || "Assertion failed");
        }
        f.equal = function (e, t, r) {
          if (e != t)
            throw new Error(r || "Assertion failed: " + e + " != " + t);
        };
        var h = s(function (e, t) {
            var r = t;
            function n(e, t) {
              if (Array.isArray(e)) return e.slice();
              if (!e) return [];
              var r = [];
              if ("string" !== typeof e) {
                for (var n = 0; n < e.length; n++) r[n] = 0 | e[n];
                return r;
              }
              if ("hex" === t) {
                ((e = e.replace(/[^a-z0-9]+/gi, "")),
                  e.length % 2 !== 0 && (e = "0" + e));
                for (n = 0; n < e.length; n += 2)
                  r.push(parseInt(e[n] + e[n + 1], 16));
              } else
                for (n = 0; n < e.length; n++) {
                  var i = e.charCodeAt(n),
                    o = i >> 8,
                    s = 255 & i;
                  o ? r.push(o, s) : r.push(s);
                }
              return r;
            }
            function i(e) {
              return 1 === e.length ? "0" + e : e;
            }
            function o(e) {
              for (var t = "", r = 0; r < e.length; r++)
                t += i(e[r].toString(16));
              return t;
            }
            ((r.toArray = n),
              (r.zero2 = i),
              (r.toHex = o),
              (r.encode = function (e, t) {
                return "hex" === t ? o(e) : e;
              }));
          }),
          l = s(function (e, t) {
            var r = t;
            function n(e, t, r) {
              var n,
                i = new Array(Math.max(e.bitLength(), r) + 1);
              for (n = 0; n < i.length; n += 1) i[n] = 0;
              var o = 1 << (t + 1),
                s = e.clone();
              for (n = 0; n < i.length; n++) {
                var a,
                  u = s.andln(o - 1);
                (s.isOdd()
                  ? ((a = u > (o >> 1) - 1 ? (o >> 1) - u : u), s.isubn(a))
                  : (a = 0),
                  (i[n] = a),
                  s.iushrn(1));
              }
              return i;
            }
            function o(e, t) {
              var r = [[], []];
              ((e = e.clone()), (t = t.clone()));
              var n,
                i = 0,
                o = 0;
              while (e.cmpn(-i) > 0 || t.cmpn(-o) > 0) {
                var s,
                  a,
                  u = (e.andln(3) + i) & 3,
                  f = (t.andln(3) + o) & 3;
                (3 === u && (u = -1),
                  3 === f && (f = -1),
                  0 === (1 & u)
                    ? (s = 0)
                    : ((n = (e.andln(7) + i) & 7),
                      (s = (3 !== n && 5 !== n) || 2 !== f ? u : -u)),
                  r[0].push(s),
                  0 === (1 & f)
                    ? (a = 0)
                    : ((n = (t.andln(7) + o) & 7),
                      (a = (3 !== n && 5 !== n) || 2 !== u ? f : -f)),
                  r[1].push(a),
                  2 * i === s + 1 && (i = 1 - i),
                  2 * o === a + 1 && (o = 1 - o),
                  e.iushrn(1),
                  t.iushrn(1));
              }
              return r;
            }
            function s(e, t, r) {
              var n = "_" + t;
              e.prototype[t] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
              };
            }
            function a(e) {
              return "string" === typeof e ? r.toArray(e, "hex") : e;
            }
            function f(e) {
              return new i.default(e, "hex", "le");
            }
            ((r.assert = u),
              (r.toArray = h.toArray),
              (r.zero2 = h.zero2),
              (r.toHex = h.toHex),
              (r.encode = h.encode),
              (r.getNAF = n),
              (r.getJSF = o),
              (r.cachedProperty = s),
              (r.parseBytes = a),
              (r.intFromLE = f));
          }),
          c = l.getNAF,
          d = l.getJSF,
          p = l.assert;
        function m(e, t) {
          ((this.type = e),
            (this.p = new i.default(t.p, 16)),
            (this.red = t.prime
              ? i.default.red(t.prime)
              : i.default.mont(this.p)),
            (this.zero = new i.default(0).toRed(this.red)),
            (this.one = new i.default(1).toRed(this.red)),
            (this.two = new i.default(2).toRed(this.red)),
            (this.n = t.n && new i.default(t.n, 16)),
            (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
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
        function y(e, t) {
          ((this.curve = e), (this.type = t), (this.precomputed = null));
        }
        ((m.prototype.point = function () {
          throw new Error("Not implemented");
        }),
          (m.prototype.validate = function () {
            throw new Error("Not implemented");
          }),
          (m.prototype._fixedNafMul = function (e, t) {
            p(e.precomputed);
            var r = e._getDoubles(),
              n = c(t, 1, this._bitLength),
              i = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1);
            i /= 3;
            var o,
              s,
              a = [];
            for (o = 0; o < n.length; o += r.step) {
              s = 0;
              for (var u = o + r.step - 1; u >= o; u--) s = (s << 1) + n[u];
              a.push(s);
            }
            for (
              var f = this.jpoint(null, null, null),
                h = this.jpoint(null, null, null),
                l = i;
              l > 0;
              l--
            ) {
              for (o = 0; o < a.length; o++)
                ((s = a[o]),
                  s === l
                    ? (h = h.mixedAdd(r.points[o]))
                    : s === -l && (h = h.mixedAdd(r.points[o].neg())));
              f = f.add(h);
            }
            return f.toP();
          }),
          (m.prototype._wnafMul = function (e, t) {
            var r = 4,
              n = e._getNAFPoints(r);
            r = n.wnd;
            for (
              var i = n.points,
                o = c(t, r, this._bitLength),
                s = this.jpoint(null, null, null),
                a = o.length - 1;
              a >= 0;
              a--
            ) {
              for (var u = 0; a >= 0 && 0 === o[a]; a--) u++;
              if ((a >= 0 && u++, (s = s.dblp(u)), a < 0)) break;
              var f = o[a];
              (p(0 !== f),
                (s =
                  "affine" === e.type
                    ? f > 0
                      ? s.mixedAdd(i[(f - 1) >> 1])
                      : s.mixedAdd(i[(-f - 1) >> 1].neg())
                    : f > 0
                      ? s.add(i[(f - 1) >> 1])
                      : s.add(i[(-f - 1) >> 1].neg())));
            }
            return "affine" === e.type ? s.toP() : s;
          }),
          (m.prototype._wnafMulAdd = function (e, t, r, n, i) {
            var o,
              s,
              a,
              u = this._wnafT1,
              f = this._wnafT2,
              h = this._wnafT3,
              l = 0;
            for (o = 0; o < n; o++) {
              a = t[o];
              var p = a._getNAFPoints(e);
              ((u[o] = p.wnd), (f[o] = p.points));
            }
            for (o = n - 1; o >= 1; o -= 2) {
              var m = o - 1,
                g = o;
              if (1 === u[m] && 1 === u[g]) {
                var y = [t[m], null, null, t[g]];
                0 === t[m].y.cmp(t[g].y)
                  ? ((y[1] = t[m].add(t[g])),
                    (y[2] = t[m].toJ().mixedAdd(t[g].neg())))
                  : 0 === t[m].y.cmp(t[g].y.redNeg())
                    ? ((y[1] = t[m].toJ().mixedAdd(t[g])),
                      (y[2] = t[m].add(t[g].neg())))
                    : ((y[1] = t[m].toJ().mixedAdd(t[g])),
                      (y[2] = t[m].toJ().mixedAdd(t[g].neg())));
                var v = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                  A = d(r[m], r[g]);
                for (
                  l = Math.max(A[0].length, l),
                    h[m] = new Array(l),
                    h[g] = new Array(l),
                    s = 0;
                  s < l;
                  s++
                ) {
                  var b = 0 | A[0][s],
                    w = 0 | A[1][s];
                  ((h[m][s] = v[3 * (b + 1) + (w + 1)]),
                    (h[g][s] = 0),
                    (f[m] = y));
                }
              } else
                ((h[m] = c(r[m], u[m], this._bitLength)),
                  (h[g] = c(r[g], u[g], this._bitLength)),
                  (l = Math.max(h[m].length, l)),
                  (l = Math.max(h[g].length, l)));
            }
            var M = this.jpoint(null, null, null),
              E = this._wnafT4;
            for (o = l; o >= 0; o--) {
              var S = 0;
              while (o >= 0) {
                var P = !0;
                for (s = 0; s < n; s++)
                  ((E[s] = 0 | h[s][o]), 0 !== E[s] && (P = !1));
                if (!P) break;
                (S++, o--);
              }
              if ((o >= 0 && S++, (M = M.dblp(S)), o < 0)) break;
              for (s = 0; s < n; s++) {
                var x = E[s];
                0 !== x &&
                  (x > 0
                    ? (a = f[s][(x - 1) >> 1])
                    : x < 0 && (a = f[s][(-x - 1) >> 1].neg()),
                  (M = "affine" === a.type ? M.mixedAdd(a) : M.add(a)));
              }
            }
            for (o = 0; o < n; o++) f[o] = null;
            return i ? M : M.toP();
          }),
          (m.BasePoint = y),
          (y.prototype.eq = function () {
            throw new Error("Not implemented");
          }),
          (y.prototype.validate = function () {
            return this.curve.validate(this);
          }),
          (m.prototype.decodePoint = function (e, t) {
            e = l.toArray(e, t);
            var r = this.p.byteLength();
            if (
              (4 === e[0] || 6 === e[0] || 7 === e[0]) &&
              e.length - 1 === 2 * r
            ) {
              6 === e[0]
                ? p(e[e.length - 1] % 2 === 0)
                : 7 === e[0] && p(e[e.length - 1] % 2 === 1);
              var n = this.point(e.slice(1, 1 + r), e.slice(1 + r, 1 + 2 * r));
              return n;
            }
            if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
              return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
            throw new Error("Unknown point format");
          }),
          (y.prototype.encodeCompressed = function (e) {
            return this.encode(e, !0);
          }),
          (y.prototype._encode = function (e) {
            var t = this.curve.p.byteLength(),
              r = this.getX().toArray("be", t);
            return e
              ? [this.getY().isEven() ? 2 : 3].concat(r)
              : [4].concat(r, this.getY().toArray("be", t));
          }),
          (y.prototype.encode = function (e, t) {
            return l.encode(this._encode(t), e);
          }),
          (y.prototype.precompute = function (e) {
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
          (y.prototype._hasDoubles = function (e) {
            if (!this.precomputed) return !1;
            var t = this.precomputed.doubles;
            return (
              !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
            );
          }),
          (y.prototype._getDoubles = function (e, t) {
            if (this.precomputed && this.precomputed.doubles)
              return this.precomputed.doubles;
            for (var r = [this], n = this, i = 0; i < t; i += e) {
              for (var o = 0; o < e; o++) n = n.dbl();
              r.push(n);
            }
            return { step: e, points: r };
          }),
          (y.prototype._getNAFPoints = function (e) {
            if (this.precomputed && this.precomputed.naf)
              return this.precomputed.naf;
            for (
              var t = [this],
                r = (1 << e) - 1,
                n = 1 === r ? null : this.dbl(),
                i = 1;
              i < r;
              i++
            )
              t[i] = t[i - 1].add(n);
            return { wnd: e, points: t };
          }),
          (y.prototype._getBeta = function () {
            return null;
          }),
          (y.prototype.dblp = function (e) {
            for (var t = this, r = 0; r < e; r++) t = t.dbl();
            return t;
          }));
        var v = s(function (e) {
            "function" === typeof Object.create
              ? (e.exports = function (e, t) {
                  t &&
                    ((e.super_ = t),
                    (e.prototype = Object.create(t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })));
                })
              : (e.exports = function (e, t) {
                  if (t) {
                    e.super_ = t;
                    var r = function () {};
                    ((r.prototype = t.prototype),
                      (e.prototype = new r()),
                      (e.prototype.constructor = e));
                  }
                });
          }),
          A = l.assert;
        function b(e) {
          (g.call(this, "short", e),
            (this.a = new i.default(e.a, 16).toRed(this.red)),
            (this.b = new i.default(e.b, 16).toRed(this.red)),
            (this.tinv = this.two.redInvm()),
            (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
            (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
            (this.endo = this._getEndomorphism(e)),
            (this._endoWnafT1 = new Array(4)),
            (this._endoWnafT2 = new Array(4)));
        }
        v(b, g);
        var w = b;
        function Point(e, t, r, n) {
          (g.BasePoint.call(this, e, "affine"),
            null === t && null === r
              ? ((this.x = null), (this.y = null), (this.inf = !0))
              : ((this.x = new i.default(t, 16)),
                (this.y = new i.default(r, 16)),
                n &&
                  (this.x.forceRed(this.curve.red),
                  this.y.forceRed(this.curve.red)),
                this.x.red || (this.x = this.x.toRed(this.curve.red)),
                this.y.red || (this.y = this.y.toRed(this.curve.red)),
                (this.inf = !1)));
        }
        function M(e, t, r, n) {
          (g.BasePoint.call(this, e, "jacobian"),
            null === t && null === r && null === n
              ? ((this.x = this.curve.one),
                (this.y = this.curve.one),
                (this.z = new i.default(0)))
              : ((this.x = new i.default(t, 16)),
                (this.y = new i.default(r, 16)),
                (this.z = new i.default(n, 16))),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            (this.zOne = this.z === this.curve.one));
        }
        ((b.prototype._getEndomorphism = function (e) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var t, r, n;
            if (e.beta) t = new i.default(e.beta, 16).toRed(this.red);
            else {
              var o = this._getEndoRoots(this.p);
              ((t = o[0].cmp(o[1]) < 0 ? o[0] : o[1]), (t = t.toRed(this.red)));
            }
            if (e.lambda) r = new i.default(e.lambda, 16);
            else {
              var s = this._getEndoRoots(this.n);
              0 === this.g.mul(s[0]).x.cmp(this.g.x.redMul(t))
                ? (r = s[0])
                : ((r = s[1]),
                  A(0 === this.g.mul(r).x.cmp(this.g.x.redMul(t))));
            }
            return (
              (n = e.basis
                ? e.basis.map(function (e) {
                    return {
                      a: new i.default(e.a, 16),
                      b: new i.default(e.b, 16),
                    };
                  })
                : this._getEndoBasis(r)),
              { beta: t, lambda: r, basis: n }
            );
          }
        }),
          (b.prototype._getEndoRoots = function (e) {
            var t = e === this.p ? this.red : i.default.mont(e),
              r = new i.default(2).toRed(t).redInvm(),
              n = r.redNeg(),
              o = new i.default(3).toRed(t).redNeg().redSqrt().redMul(r),
              s = n.redAdd(o).fromRed(),
              a = n.redSub(o).fromRed();
            return [s, a];
          }),
          (b.prototype._getEndoBasis = function (e) {
            var t,
              r,
              n,
              o,
              s,
              a,
              u,
              f,
              h,
              l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              c = e,
              d = this.n.clone(),
              p = new i.default(1),
              m = new i.default(0),
              g = new i.default(0),
              y = new i.default(1),
              v = 0;
            while (0 !== c.cmpn(0)) {
              var A = d.div(c);
              ((f = d.sub(A.mul(c))), (h = g.sub(A.mul(p))));
              var b = y.sub(A.mul(m));
              if (!n && f.cmp(l) < 0)
                ((t = u.neg()), (r = p), (n = f.neg()), (o = h));
              else if (n && 2 === ++v) break;
              ((u = f), (d = c), (c = f), (g = p), (p = h), (y = m), (m = b));
            }
            ((s = f.neg()), (a = h));
            var w = n.sqr().add(o.sqr()),
              M = s.sqr().add(a.sqr());
            return (
              M.cmp(w) >= 0 && ((s = t), (a = r)),
              n.negative && ((n = n.neg()), (o = o.neg())),
              s.negative && ((s = s.neg()), (a = a.neg())),
              [
                { a: n, b: o },
                { a: s, b: a },
              ]
            );
          }),
          (b.prototype._endoSplit = function (e) {
            var t = this.endo.basis,
              r = t[0],
              n = t[1],
              i = n.b.mul(e).divRound(this.n),
              o = r.b.neg().mul(e).divRound(this.n),
              s = i.mul(r.a),
              a = o.mul(n.a),
              u = i.mul(r.b),
              f = o.mul(n.b),
              h = e.sub(s).sub(a),
              l = u.add(f).neg();
            return { k1: h, k2: l };
          }),
          (b.prototype.pointFromX = function (e, t) {
            ((e = new i.default(e, 16)), e.red || (e = e.toRed(this.red)));
            var r = e
                .redSqr()
                .redMul(e)
                .redIAdd(e.redMul(this.a))
                .redIAdd(this.b),
              n = r.redSqrt();
            if (0 !== n.redSqr().redSub(r).cmp(this.zero))
              throw new Error("invalid point");
            var o = n.fromRed().isOdd();
            return (
              ((t && !o) || (!t && o)) && (n = n.redNeg()),
              this.point(e, n)
            );
          }),
          (b.prototype.validate = function (e) {
            if (e.inf) return !0;
            var t = e.x,
              r = e.y,
              n = this.a.redMul(t),
              i = t.redSqr().redMul(t).redIAdd(n).redIAdd(this.b);
            return 0 === r.redSqr().redISub(i).cmpn(0);
          }),
          (b.prototype._endoWnafMulAdd = function (e, t, r) {
            for (
              var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
              o < e.length;
              o++
            ) {
              var s = this._endoSplit(t[o]),
                a = e[o],
                u = a._getBeta();
              (s.k1.negative && (s.k1.ineg(), (a = a.neg(!0))),
                s.k2.negative && (s.k2.ineg(), (u = u.neg(!0))),
                (n[2 * o] = a),
                (n[2 * o + 1] = u),
                (i[2 * o] = s.k1),
                (i[2 * o + 1] = s.k2));
            }
            for (
              var f = this._wnafMulAdd(1, n, i, 2 * o, r), h = 0;
              h < 2 * o;
              h++
            )
              ((n[h] = null), (i[h] = null));
            return f;
          }),
          v(Point, g.BasePoint),
          (b.prototype.point = function (e, t, r) {
            return new Point(this, e, t, r);
          }),
          (b.prototype.pointFromJSON = function (e, t) {
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
                  n = function (e) {
                    return r.point(e.x.redMul(r.endo.beta), e.y);
                  };
                ((e.beta = t),
                  (t.precomputed = {
                    beta: null,
                    naf: e.naf && {
                      wnd: e.naf.wnd,
                      points: e.naf.points.map(n),
                    },
                    doubles: e.doubles && {
                      step: e.doubles.step,
                      points: e.doubles.points.map(n),
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
            var n = e.point(t[0], t[1], r);
            if (!t[2]) return n;
            function i(t) {
              return e.point(t[0], t[1], r);
            }
            var o = t[2];
            return (
              (n.precomputed = {
                beta: null,
                doubles: o.doubles && {
                  step: o.doubles.step,
                  points: [n].concat(o.doubles.points.map(i)),
                },
                naf: o.naf && {
                  wnd: o.naf.wnd,
                  points: [n].concat(o.naf.points.map(i)),
                },
              }),
              n
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
              n = t.redMul(this.x.redSub(r)).redISub(this.y);
            return this.curve.point(r, n);
          }),
          (Point.prototype.dbl = function () {
            if (this.inf) return this;
            var e = this.y.redAdd(this.y);
            if (0 === e.cmpn(0)) return this.curve.point(null, null);
            var t = this.curve.a,
              r = this.x.redSqr(),
              n = e.redInvm(),
              i = r.redAdd(r).redIAdd(r).redIAdd(t).redMul(n),
              o = i.redSqr().redISub(this.x.redAdd(this.x)),
              s = i.redMul(this.x.redSub(o)).redISub(this.y);
            return this.curve.point(o, s);
          }),
          (Point.prototype.getX = function () {
            return this.x.fromRed();
          }),
          (Point.prototype.getY = function () {
            return this.y.fromRed();
          }),
          (Point.prototype.mul = function (e) {
            return (
              (e = new i.default(e, 16)),
              this.isInfinity()
                ? this
                : this._hasDoubles(e)
                  ? this.curve._fixedNafMul(this, e)
                  : this.curve.endo
                    ? this.curve._endoWnafMulAdd([this], [e])
                    : this.curve._wnafMul(this, e)
            );
          }),
          (Point.prototype.mulAdd = function (e, t, r) {
            var n = [this, t],
              i = [e, r];
            return this.curve.endo
              ? this.curve._endoWnafMulAdd(n, i)
              : this.curve._wnafMulAdd(1, n, i, 2);
          }),
          (Point.prototype.jmulAdd = function (e, t, r) {
            var n = [this, t],
              i = [e, r];
            return this.curve.endo
              ? this.curve._endoWnafMulAdd(n, i, !0)
              : this.curve._wnafMulAdd(1, n, i, 2, !0);
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
                n = function (e) {
                  return e.neg();
                };
              t.precomputed = {
                naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
                doubles: r.doubles && {
                  step: r.doubles.step,
                  points: r.doubles.points.map(n),
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
          v(M, g.BasePoint),
          (b.prototype.jpoint = function (e, t, r) {
            return new M(this, e, t, r);
          }),
          (M.prototype.toP = function () {
            if (this.isInfinity()) return this.curve.point(null, null);
            var e = this.z.redInvm(),
              t = e.redSqr(),
              r = this.x.redMul(t),
              n = this.y.redMul(t).redMul(e);
            return this.curve.point(r, n);
          }),
          (M.prototype.neg = function () {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
          }),
          (M.prototype.add = function (e) {
            if (this.isInfinity()) return e;
            if (e.isInfinity()) return this;
            var t = e.z.redSqr(),
              r = this.z.redSqr(),
              n = this.x.redMul(t),
              i = e.x.redMul(r),
              o = this.y.redMul(t.redMul(e.z)),
              s = e.y.redMul(r.redMul(this.z)),
              a = n.redSub(i),
              u = o.redSub(s);
            if (0 === a.cmpn(0))
              return 0 !== u.cmpn(0)
                ? this.curve.jpoint(null, null, null)
                : this.dbl();
            var f = a.redSqr(),
              h = f.redMul(a),
              l = n.redMul(f),
              c = u.redSqr().redIAdd(h).redISub(l).redISub(l),
              d = u.redMul(l.redISub(c)).redISub(o.redMul(h)),
              p = this.z.redMul(e.z).redMul(a);
            return this.curve.jpoint(c, d, p);
          }),
          (M.prototype.mixedAdd = function (e) {
            if (this.isInfinity()) return e.toJ();
            if (e.isInfinity()) return this;
            var t = this.z.redSqr(),
              r = this.x,
              n = e.x.redMul(t),
              i = this.y,
              o = e.y.redMul(t).redMul(this.z),
              s = r.redSub(n),
              a = i.redSub(o);
            if (0 === s.cmpn(0))
              return 0 !== a.cmpn(0)
                ? this.curve.jpoint(null, null, null)
                : this.dbl();
            var u = s.redSqr(),
              f = u.redMul(s),
              h = r.redMul(u),
              l = a.redSqr().redIAdd(f).redISub(h).redISub(h),
              c = a.redMul(h.redISub(l)).redISub(i.redMul(f)),
              d = this.z.redMul(s);
            return this.curve.jpoint(l, c, d);
          }),
          (M.prototype.dblp = function (e) {
            if (0 === e) return this;
            if (this.isInfinity()) return this;
            if (!e) return this.dbl();
            var t;
            if (this.curve.zeroA || this.curve.threeA) {
              var r = this;
              for (t = 0; t < e; t++) r = r.dbl();
              return r;
            }
            var n = this.curve.a,
              i = this.curve.tinv,
              o = this.x,
              s = this.y,
              a = this.z,
              u = a.redSqr().redSqr(),
              f = s.redAdd(s);
            for (t = 0; t < e; t++) {
              var h = o.redSqr(),
                l = f.redSqr(),
                c = l.redSqr(),
                d = h.redAdd(h).redIAdd(h).redIAdd(n.redMul(u)),
                p = o.redMul(l),
                m = d.redSqr().redISub(p.redAdd(p)),
                g = p.redISub(m),
                y = d.redMul(g);
              y = y.redIAdd(y).redISub(c);
              var v = f.redMul(a);
              (t + 1 < e && (u = u.redMul(c)), (o = m), (a = v), (f = y));
            }
            return this.curve.jpoint(o, f.redMul(i), a);
          }),
          (M.prototype.dbl = function () {
            return this.isInfinity()
              ? this
              : this.curve.zeroA
                ? this._zeroDbl()
                : this.curve.threeA
                  ? this._threeDbl()
                  : this._dbl();
          }),
          (M.prototype._zeroDbl = function () {
            var e, t, r;
            if (this.zOne) {
              var n = this.x.redSqr(),
                i = this.y.redSqr(),
                o = i.redSqr(),
                s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
              s = s.redIAdd(s);
              var a = n.redAdd(n).redIAdd(n),
                u = a.redSqr().redISub(s).redISub(s),
                f = o.redIAdd(o);
              ((f = f.redIAdd(f)),
                (f = f.redIAdd(f)),
                (e = u),
                (t = a.redMul(s.redISub(u)).redISub(f)),
                (r = this.y.redAdd(this.y)));
            } else {
              var h = this.x.redSqr(),
                l = this.y.redSqr(),
                c = l.redSqr(),
                d = this.x.redAdd(l).redSqr().redISub(h).redISub(c);
              d = d.redIAdd(d);
              var p = h.redAdd(h).redIAdd(h),
                m = p.redSqr(),
                g = c.redIAdd(c);
              ((g = g.redIAdd(g)),
                (g = g.redIAdd(g)),
                (e = m.redISub(d).redISub(d)),
                (t = p.redMul(d.redISub(e)).redISub(g)),
                (r = this.y.redMul(this.z)),
                (r = r.redIAdd(r)));
            }
            return this.curve.jpoint(e, t, r);
          }),
          (M.prototype._threeDbl = function () {
            var e, t, r;
            if (this.zOne) {
              var n = this.x.redSqr(),
                i = this.y.redSqr(),
                o = i.redSqr(),
                s = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
              s = s.redIAdd(s);
              var a = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                u = a.redSqr().redISub(s).redISub(s);
              e = u;
              var f = o.redIAdd(o);
              ((f = f.redIAdd(f)),
                (f = f.redIAdd(f)),
                (t = a.redMul(s.redISub(u)).redISub(f)),
                (r = this.y.redAdd(this.y)));
            } else {
              var h = this.z.redSqr(),
                l = this.y.redSqr(),
                c = this.x.redMul(l),
                d = this.x.redSub(h).redMul(this.x.redAdd(h));
              d = d.redAdd(d).redIAdd(d);
              var p = c.redIAdd(c);
              p = p.redIAdd(p);
              var m = p.redAdd(p);
              ((e = d.redSqr().redISub(m)),
                (r = this.y.redAdd(this.z).redSqr().redISub(l).redISub(h)));
              var g = l.redSqr();
              ((g = g.redIAdd(g)),
                (g = g.redIAdd(g)),
                (g = g.redIAdd(g)),
                (t = d.redMul(p.redISub(e)).redISub(g)));
            }
            return this.curve.jpoint(e, t, r);
          }),
          (M.prototype._dbl = function () {
            var e = this.curve.a,
              t = this.x,
              r = this.y,
              n = this.z,
              i = n.redSqr().redSqr(),
              o = t.redSqr(),
              s = r.redSqr(),
              a = o.redAdd(o).redIAdd(o).redIAdd(e.redMul(i)),
              u = t.redAdd(t);
            u = u.redIAdd(u);
            var f = u.redMul(s),
              h = a.redSqr().redISub(f.redAdd(f)),
              l = f.redISub(h),
              c = s.redSqr();
            ((c = c.redIAdd(c)), (c = c.redIAdd(c)), (c = c.redIAdd(c)));
            var d = a.redMul(l).redISub(c),
              p = r.redAdd(r).redMul(n);
            return this.curve.jpoint(h, d, p);
          }),
          (M.prototype.trpl = function () {
            if (!this.curve.zeroA) return this.dbl().add(this);
            var e = this.x.redSqr(),
              t = this.y.redSqr(),
              r = this.z.redSqr(),
              n = t.redSqr(),
              i = e.redAdd(e).redIAdd(e),
              o = i.redSqr(),
              s = this.x.redAdd(t).redSqr().redISub(e).redISub(n);
            ((s = s.redIAdd(s)),
              (s = s.redAdd(s).redIAdd(s)),
              (s = s.redISub(o)));
            var a = s.redSqr(),
              u = n.redIAdd(n);
            ((u = u.redIAdd(u)), (u = u.redIAdd(u)), (u = u.redIAdd(u)));
            var f = i.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(u),
              h = t.redMul(f);
            ((h = h.redIAdd(h)), (h = h.redIAdd(h)));
            var l = this.x.redMul(a).redISub(h);
            ((l = l.redIAdd(l)), (l = l.redIAdd(l)));
            var c = this.y.redMul(f.redMul(u.redISub(f)).redISub(s.redMul(a)));
            ((c = c.redIAdd(c)), (c = c.redIAdd(c)), (c = c.redIAdd(c)));
            var d = this.z.redAdd(s).redSqr().redISub(r).redISub(a);
            return this.curve.jpoint(l, c, d);
          }),
          (M.prototype.mul = function (e, t) {
            return ((e = new i.default(e, t)), this.curve._wnafMul(this, e));
          }),
          (M.prototype.eq = function (e) {
            if ("affine" === e.type) return this.eq(e.toJ());
            if (this === e) return !0;
            var t = this.z.redSqr(),
              r = e.z.redSqr();
            if (0 !== this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))
              return !1;
            var n = t.redMul(this.z),
              i = r.redMul(e.z);
            return 0 === this.y.redMul(i).redISub(e.y.redMul(n)).cmpn(0);
          }),
          (M.prototype.eqXToP = function (e) {
            var t = this.z.redSqr(),
              r = e.toRed(this.curve.red).redMul(t);
            if (0 === this.x.cmp(r)) return !0;
            for (var n = e.clone(), i = this.curve.redN.redMul(t); ; ) {
              if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
              if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
            }
          }),
          (M.prototype.inspect = function () {
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
          (M.prototype.isInfinity = function () {
            return 0 === this.z.cmpn(0);
          }));
        var E = s(function (e, t) {
            var r = t;
            ((r.base = g), (r.short = w), (r.mont = null), (r.edwards = null));
          }),
          S = s(function (e, t) {
            var r,
              n = t,
              i = l.assert;
            function s(e) {
              ("short" === e.type
                ? (this.curve = new E.short(e))
                : "edwards" === e.type
                  ? (this.curve = new E.edwards(e))
                  : (this.curve = new E.mont(e)),
                (this.g = this.curve.g),
                (this.n = this.curve.n),
                (this.hash = e.hash),
                i(this.g.validate(), "Invalid curve"),
                i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O"));
            }
            function a(e, t) {
              Object.defineProperty(n, e, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  var r = new s(t);
                  return (
                    Object.defineProperty(n, e, {
                      configurable: !0,
                      enumerable: !0,
                      value: r,
                    }),
                    r
                  );
                },
              });
            }
            ((n.PresetCurve = s),
              a("p192", {
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
              a("p224", {
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
              a("p256", {
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
              a("p384", {
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
              a("p521", {
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
              a("curve25519", {
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
              a("ed25519", {
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
            } catch (u) {
              r = void 0;
            }
            a("secp256k1", {
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
        function P(e) {
          if (!(this instanceof P)) return new P(e);
          ((this.hash = e.hash),
            (this.predResist = !!e.predResist),
            (this.outLen = this.hash.outSize),
            (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
            (this._reseed = null),
            (this.reseedInterval = null),
            (this.K = null),
            (this.V = null));
          var t = h.toArray(e.entropy, e.entropyEnc || "hex"),
            r = h.toArray(e.nonce, e.nonceEnc || "hex"),
            n = h.toArray(e.pers, e.persEnc || "hex");
          (u(
            t.length >= this.minEntropy / 8,
            "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
          ),
            this._init(t, r, n));
        }
        var x = P;
        ((P.prototype._init = function (e, t, r) {
          var n = e.concat(t).concat(r);
          ((this.K = new Array(this.outLen / 8)),
            (this.V = new Array(this.outLen / 8)));
          for (var i = 0; i < this.V.length; i++)
            ((this.K[i] = 0), (this.V[i] = 1));
          (this._update(n),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656));
        }),
          (P.prototype._hmac = function () {
            return new o.default.hmac(this.hash, this.K);
          }),
          (P.prototype._update = function (e) {
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
          (P.prototype.reseed = function (e, t, r, n) {
            ("string" !== typeof t && ((n = r), (r = t), (t = null)),
              (e = h.toArray(e, t)),
              (r = h.toArray(r, n)),
              u(
                e.length >= this.minEntropy / 8,
                "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
              ),
              this._update(e.concat(r || [])),
              (this._reseed = 1));
          }),
          (P.prototype.generate = function (e, t, r, n) {
            if (this._reseed > this.reseedInterval)
              throw new Error("Reseed is required");
            ("string" !== typeof t && ((n = r), (r = t), (t = null)),
              r && ((r = h.toArray(r, n || "hex")), this._update(r)));
            var i = [];
            while (i.length < e)
              ((this.V = this._hmac().update(this.V).digest()),
                (i = i.concat(this.V)));
            var o = i.slice(0, e);
            return (this._update(r), this._reseed++, h.encode(o, t));
          }));
        var B = l.assert;
        function C(e, t) {
          ((this.ec = e),
            (this.priv = null),
            (this.pub = null),
            t.priv && this._importPrivate(t.priv, t.privEnc),
            t.pub && this._importPublic(t.pub, t.pubEnc));
        }
        var N = C;
        ((C.fromPublic = function (e, t, r) {
          return t instanceof C ? t : new C(e, { pub: t, pubEnc: r });
        }),
          (C.fromPrivate = function (e, t, r) {
            return t instanceof C ? t : new C(e, { priv: t, privEnc: r });
          }),
          (C.prototype.validate = function () {
            var e = this.getPublic();
            return e.isInfinity()
              ? { result: !1, reason: "Invalid public key" }
              : e.validate()
                ? e.mul(this.ec.curve.n).isInfinity()
                  ? { result: !0, reason: null }
                  : { result: !1, reason: "Public key * N != O" }
                : { result: !1, reason: "Public key is not a point" };
          }),
          (C.prototype.getPublic = function (e, t) {
            return (
              "string" === typeof e && ((t = e), (e = null)),
              this.pub || (this.pub = this.ec.g.mul(this.priv)),
              t ? this.pub.encode(t, e) : this.pub
            );
          }),
          (C.prototype.getPrivate = function (e) {
            return "hex" === e ? this.priv.toString(16, 2) : this.priv;
          }),
          (C.prototype._importPrivate = function (e, t) {
            ((this.priv = new i.default(e, t || 16)),
              (this.priv = this.priv.umod(this.ec.curve.n)));
          }),
          (C.prototype._importPublic = function (e, t) {
            if (e.x || e.y)
              return (
                "mont" === this.ec.curve.type
                  ? B(e.x, "Need x coordinate")
                  : ("short" !== this.ec.curve.type &&
                      "edwards" !== this.ec.curve.type) ||
                    B(e.x && e.y, "Need both x and y coordinate"),
                void (this.pub = this.ec.curve.point(e.x, e.y))
              );
            this.pub = this.ec.curve.decodePoint(e, t);
          }),
          (C.prototype.derive = function (e) {
            return (
              e.validate() || B(e.validate(), "public point not validated"),
              e.mul(this.priv).getX()
            );
          }),
          (C.prototype.sign = function (e, t, r) {
            return this.ec.sign(e, this, t, r);
          }),
          (C.prototype.verify = function (e, t, r) {
            return this.ec.verify(e, t, this, void 0, r);
          }),
          (C.prototype.inspect = function () {
            return (
              "<Key priv: " +
              (this.priv && this.priv.toString(16, 2)) +
              " pub: " +
              (this.pub && this.pub.inspect()) +
              " >"
            );
          }));
        var I = l.assert;
        function O(e, t) {
          if (e instanceof O) return e;
          this._importDER(e, t) ||
            (I(e.r && e.s, "Signature without r or s"),
            (this.r = new i.default(e.r, 16)),
            (this.s = new i.default(e.s, 16)),
            void 0 === e.recoveryParam
              ? (this.recoveryParam = null)
              : (this.recoveryParam = e.recoveryParam));
        }
        var F = O;
        function R() {
          this.place = 0;
        }
        function k(e, t) {
          var r = e[t.place++];
          if (!(128 & r)) return r;
          var n = 15 & r;
          if (0 === n || n > 4) return !1;
          if (0 === e[t.place]) return !1;
          for (var i = 0, o = 0, s = t.place; o < n; o++, s++)
            ((i <<= 8), (i |= e[s]), (i >>>= 0));
          return !(i <= 127) && ((t.place = s), i);
        }
        function T(e) {
          var t = 0,
            r = e.length - 1;
          while (!e[t] && !(128 & e[t + 1]) && t < r) t++;
          return 0 === t ? e : e.slice(t);
        }
        function _(e, t) {
          if (t < 128) e.push(t);
          else {
            var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
            e.push(128 | r);
            while (--r) e.push((t >>> (r << 3)) & 255);
            e.push(t);
          }
        }
        ((O.prototype._importDER = function (e, t) {
          e = l.toArray(e, t);
          var r = new R();
          if (48 !== e[r.place++]) return !1;
          var n = k(e, r);
          if (!1 === n) return !1;
          if (n + r.place !== e.length) return !1;
          if (2 !== e[r.place++]) return !1;
          var o = k(e, r);
          if (!1 === o) return !1;
          if (0 !== (128 & e[r.place])) return !1;
          var s = e.slice(r.place, o + r.place);
          if (((r.place += o), 2 !== e[r.place++])) return !1;
          var a = k(e, r);
          if (!1 === a) return !1;
          if (e.length !== a + r.place) return !1;
          if (0 !== (128 & e[r.place])) return !1;
          var u = e.slice(r.place, a + r.place);
          if (0 === s[0]) {
            if (!(128 & s[1])) return !1;
            s = s.slice(1);
          }
          if (0 === u[0]) {
            if (!(128 & u[1])) return !1;
            u = u.slice(1);
          }
          return (
            (this.r = new i.default(s)),
            (this.s = new i.default(u)),
            (this.recoveryParam = null),
            !0
          );
        }),
          (O.prototype.toDER = function (e) {
            var t = this.r.toArray(),
              r = this.s.toArray();
            (128 & t[0] && (t = [0].concat(t)),
              128 & r[0] && (r = [0].concat(r)),
              (t = T(t)),
              (r = T(r)));
            while (!r[0] && !(128 & r[1])) r = r.slice(1);
            var n = [2];
            (_(n, t.length), (n = n.concat(t)), n.push(2), _(n, r.length));
            var i = n.concat(r),
              o = [48];
            return (_(o, i.length), (o = o.concat(i)), l.encode(o, e));
          }));
        var D = function () {
            throw new Error("unsupported");
          },
          U = l.assert;
        function L(e) {
          if (!(this instanceof L)) return new L(e);
          ("string" === typeof e &&
            (U(
              Object.prototype.hasOwnProperty.call(S, e),
              "Unknown curve " + e,
            ),
            (e = S[e])),
            e instanceof S.PresetCurve && (e = { curve: e }),
            (this.curve = e.curve.curve),
            (this.n = this.curve.n),
            (this.nh = this.n.ushrn(1)),
            (this.g = this.curve.g),
            (this.g = e.curve.g),
            this.g.precompute(e.curve.n.bitLength() + 1),
            (this.hash = e.hash || e.curve.hash));
        }
        var j = L;
        ((L.prototype.keyPair = function (e) {
          return new N(this, e);
        }),
          (L.prototype.keyFromPrivate = function (e, t) {
            return N.fromPrivate(this, e, t);
          }),
          (L.prototype.keyFromPublic = function (e, t) {
            return N.fromPublic(this, e, t);
          }),
          (L.prototype.genKeyPair = function (e) {
            e || (e = {});
            for (
              var t = new x({
                  hash: this.hash,
                  pers: e.pers,
                  persEnc: e.persEnc || "utf8",
                  entropy: e.entropy || D(this.hash.hmacStrength),
                  entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
                  nonce: this.n.toArray(),
                }),
                r = this.n.byteLength(),
                n = this.n.sub(new i.default(2));
              ;
            ) {
              var o = new i.default(t.generate(r));
              if (!(o.cmp(n) > 0)) return (o.iaddn(1), this.keyFromPrivate(o));
            }
          }),
          (L.prototype._truncateToN = function (e, t, r) {
            var n;
            if (i.default.isBN(e) || "number" === typeof e)
              ((e = new i.default(e, 16)), (n = e.byteLength()));
            else if ("object" === typeof e)
              ((n = e.length), (e = new i.default(e, 16)));
            else {
              var o = e.toString();
              ((n = (o.length + 1) >>> 1), (e = new i.default(o, 16)));
            }
            "number" !== typeof r && (r = 8 * n);
            var s = r - this.n.bitLength();
            return (
              s > 0 && (e = e.ushrn(s)),
              !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
            );
          }),
          (L.prototype.sign = function (e, t, r, n) {
            if (
              ("object" === typeof r && ((n = r), (r = null)),
              n || (n = {}),
              "string" !== typeof e &&
                "number" !== typeof e &&
                !i.default.isBN(e))
            ) {
              (U(
                "object" === typeof e && e && "number" === typeof e.length,
                "Expected message to be an array-like, a hex string, or a BN instance",
              ),
                U(e.length >>> 0 === e.length));
              for (var o = 0; o < e.length; o++) U((255 & e[o]) === e[o]);
            }
            ((t = this.keyFromPrivate(t, r)),
              (e = this._truncateToN(e, !1, n.msgBitLength)),
              U(!e.isNeg(), "Can not sign a negative message"));
            var s = this.n.byteLength(),
              a = t.getPrivate().toArray("be", s),
              u = e.toArray("be", s);
            U(new i.default(u).eq(e), "Can not sign message");
            for (
              var f = new x({
                  hash: this.hash,
                  entropy: a,
                  nonce: u,
                  pers: n.pers,
                  persEnc: n.persEnc || "utf8",
                }),
                h = this.n.sub(new i.default(1)),
                l = 0;
              ;
              l++
            ) {
              var c = n.k
                ? n.k(l)
                : new i.default(f.generate(this.n.byteLength()));
              if (
                ((c = this._truncateToN(c, !0)),
                !(c.cmpn(1) <= 0 || c.cmp(h) >= 0))
              ) {
                var d = this.g.mul(c);
                if (!d.isInfinity()) {
                  var p = d.getX(),
                    m = p.umod(this.n);
                  if (0 !== m.cmpn(0)) {
                    var g = c.invm(this.n).mul(m.mul(t.getPrivate()).iadd(e));
                    if (((g = g.umod(this.n)), 0 !== g.cmpn(0))) {
                      var y =
                        (d.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(m) ? 2 : 0);
                      return (
                        n.canonical &&
                          g.cmp(this.nh) > 0 &&
                          ((g = this.n.sub(g)), (y ^= 1)),
                        new F({ r: m, s: g, recoveryParam: y })
                      );
                    }
                  }
                }
              }
            }
          }),
          (L.prototype.verify = function (e, t, r, n, i) {
            (i || (i = {}),
              (e = this._truncateToN(e, !1, i.msgBitLength)),
              (r = this.keyFromPublic(r, n)),
              (t = new F(t, "hex")));
            var o = t.r,
              s = t.s;
            if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
            if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return !1;
            var a,
              u = s.invm(this.n),
              f = u.mul(e).umod(this.n),
              h = u.mul(o).umod(this.n);
            return this.curve._maxwellTrick
              ? ((a = this.g.jmulAdd(f, r.getPublic(), h)),
                !a.isInfinity() && a.eqXToP(o))
              : ((a = this.g.mulAdd(f, r.getPublic(), h)),
                !a.isInfinity() && 0 === a.getX().umod(this.n).cmp(o));
          }),
          (L.prototype.recoverPubKey = function (e, t, r, n) {
            (U((3 & r) === r, "The recovery param is more than two bits"),
              (t = new F(t, n)));
            var o = this.n,
              s = new i.default(e),
              a = t.r,
              u = t.s,
              f = 1 & r,
              h = r >> 1;
            if (a.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
              throw new Error("Unable to find sencond key candinate");
            a = h
              ? this.curve.pointFromX(a.add(this.curve.n), f)
              : this.curve.pointFromX(a, f);
            var l = t.r.invm(o),
              c = o.sub(s).mul(l).umod(o),
              d = u.mul(l).umod(o);
            return this.g.mulAdd(c, a, d);
          }),
          (L.prototype.getKeyRecoveryParam = function (e, t, r, n) {
            if (((t = new F(t, n)), null !== t.recoveryParam))
              return t.recoveryParam;
            for (var i = 0; i < 4; i++) {
              var o;
              try {
                o = this.recoverPubKey(e, t, i);
              } catch (e) {
                continue;
              }
              if (o.eq(r)) return i;
            }
            throw new Error("Unable to find valid recovery factor");
          }));
        var H = s(function (e, t) {
          var r = t;
          ((r.version = { version: "6.6.1" }.version),
            (r.utils = l),
            (r.rand = function () {
              throw new Error("unsupported");
            }),
            (r.curve = E),
            (r.curves = S),
            (r.ec = j),
            (r.eddsa = null));
        });
        t.EC = H.ec;
      }).call(this, r(13));
    },
    1629: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "signing-key/5.8.0";
    },
    1630: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "transactions/5.8.0";
    },
    1631: function (e, t, r) {
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
      var n = r(570),
        i = r(1641);
    },
    1632: function (e, t, r) {
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
      var n = r(571),
        i = r(1633),
        o = r(1638),
        s = r(1639);
    },
    1633: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.dnsEncode = g),
        (t.ensNormalize = d),
        (t.isValidName = p),
        (t.namehash = m));
      var n = r(33),
        i = r(94),
        o = r(75),
        s = r(42),
        a = r(572),
        u = r(1634);
      const f = new s.Logger(a.version),
        h = new Uint8Array(32);
      function l(e) {
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
          46 === e && (r.push(l(t.slice(n, i))), (n = i + 1));
        }
        if (n >= t.length) throw new Error("invalid ENS name; empty component");
        return (r.push(l(t.slice(n))), r);
      }
      function d(e) {
        return c(e)
          .map((e) => (0, i.toUtf8String)(e))
          .join(".");
      }
      function p(e) {
        try {
          return 0 !== c(e).length;
        } catch (t) {}
        return !1;
      }
      function m(e) {
        "string" !== typeof e &&
          f.throwArgumentError("invalid ENS name; not a string", "name", e);
        let t = h;
        const r = c(e);
        while (r.length)
          t = (0, o.keccak256)((0, n.concat)([t, (0, o.keccak256)(r.pop())]));
        return (0, n.hexlify)(t);
      }
      function g(e) {
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
    1634: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ens_normalize = g),
        (t.ens_normalize_post_check = m));
      var n = r(94),
        i = r(1635),
        o = r(573);
      const s = (0, i.getData)(),
        a = new Set((0, o.read_member_array)(s)),
        u = new Set((0, o.read_member_array)(s)),
        f = (0, o.read_mapped_map)(s),
        h = (0, o.read_emoji_trie)(s),
        l = 45,
        c = 95;
      function d(e) {
        return (0, n.toUtf8CodePoints)(e);
      }
      function p(e) {
        return e.filter((e) => 65039 != e);
      }
      function m(e) {
        for (let r of e.split(".")) {
          let e = d(r);
          try {
            for (let t = e.lastIndexOf(c) - 1; t >= 0; t--)
              if (e[t] !== c)
                throw new Error("underscore only allowed at start");
            if (
              e.length >= 4 &&
              e.every((e) => e < 128) &&
              e[2] === l &&
              e[3] === l
            )
              throw new Error("invalid label extension");
          } catch (t) {
            throw new Error(`Invalid label "${r}": ${t.message}`);
          }
        }
        return e;
      }
      function g(e) {
        return m(y(e, p));
      }
      function y(e, t) {
        let r = d(e).reverse(),
          n = [];
        while (r.length) {
          let e = A(r);
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
          let o = f[i];
          if (!o)
            throw new Error(
              "Disallowed codepoint: 0x" + i.toString(16).toUpperCase(),
            );
          n.push(...o);
        }
        return m(v(String.fromCodePoint(...n)));
      }
      function v(e) {
        return e.normalize("NFC");
      }
      function A(e, t) {
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
    1635: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.getData = o));
      var n = r(1636),
        i = r(573);
      function o() {
        return (0, i.read_compressed_payload)(
          (0, n.decode)(
            "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",
          ),
        );
      }
    },
    1636: function (e, t, r) {
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
      var n = r(1637);
    },
    1637: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decode = i),
        (t.encode = o));
      var n = r(33);
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
    1638: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hashMessage = a),
        (t.messagePrefix = void 0));
      var n = r(33),
        i = r(75),
        o = r(94);
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
    1639: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TypedDataEncoder = void 0));
      var n = r(150),
        i = r(151),
        o = r(33),
        s = r(75),
        a = r(76),
        u = r(42),
        f = r(572),
        h = r(571),
        l = function (e, t, r, n) {
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
      const c = new u.Logger(f.version),
        d = new Uint8Array(32);
      d.fill(0);
      const p = i.BigNumber.from(-1),
        m = i.BigNumber.from(0),
        g = i.BigNumber.from(1),
        y = i.BigNumber.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        );
      function v(e) {
        const t = (0, o.arrayify)(e),
          r = t.length % 32;
        return r ? (0, o.hexConcat)([t, d.slice(r)]) : (0, o.hexlify)(t);
      }
      const A = (0, o.hexZeroPad)(g.toHexString(), 32),
        b = (0, o.hexZeroPad)(m.toHexString(), 32),
        w = {
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
      const S = {
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
      function P(e) {
        {
          const t = e.match(/^(u?)int(\d*)$/);
          if (t) {
            const r = "" === t[1],
              n = parseInt(t[2] || "256");
            (n % 8 !== 0 || n > 256 || (t[2] && t[2] !== String(n))) &&
              c.throwArgumentError("invalid numeric width", "type", e);
            const s = y.mask(r ? n - 1 : n),
              a = r ? s.add(g).mul(p) : m;
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
                  v(t)
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
              return e ? A : b;
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
      function x(e, t) {
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
              const a = P(o);
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
                x(s, e[s]) + t.map((t) => x(t, e[t])).join("")));
          }
        }
        getEncoder(e) {
          let t = this._encoderCache[e];
          return (t || (t = this._encoderCache[e] = this._getEncoder(e)), t);
        }
        _getEncoder(e) {
          {
            const t = P(e);
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
            const n = P(e);
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
            const n = w[r];
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
          return l(this, void 0, void 0, function* () {
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
            null != r && ((n[t] = S[t](r)), s.push({ name: t, type: w[t] }));
          });
          const u = TypedDataEncoder.from(t),
            f = (0, a.shallowCopy)(t);
          return (
            f.EIP712Domain
              ? c.throwArgumentError(
                  "types must not contain EIP712Domain type",
                  "types.EIP712Domain",
                  t,
                )
              : (f.EIP712Domain = s),
            u.encode(r),
            {
              types: f,
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
    1640: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "wordlists/5.8.0";
    },
    1641: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.wordlists = void 0));
      var n = r(1642);
      t.wordlists = { en: n.langEn };
    },
    1642: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.langEn = void 0));
      var n = r(570);
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
    1643: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "hdnode/5.8.0";
    },
    1644: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "randomBytes", {
          enumerable: !0,
          get: function () {
            return n.randomBytes;
          },
        }),
        Object.defineProperty(t, "shuffled", {
          enumerable: !0,
          get: function () {
            return i.shuffled;
          },
        }));
      var n = r(1645),
        i = r(1647);
    },
    1645: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.randomBytes = h));
        var n = r(33),
          i = r(42),
          o = r(1646);
        const s = new i.Logger(o.version);
        function a() {
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw new Error("unable to locate global object");
        }
        const u = a();
        let f = u.crypto || u.msCrypto;
        function h(e) {
          (e <= 0 || e > 1024 || e % 1 || e != e) &&
            s.throwArgumentError("invalid length", "length", e);
          const t = new Uint8Array(e);
          return (f.getRandomValues(t), (0, n.arrayify)(t));
        }
        (f && f.getRandomValues) ||
          (s.warn("WARNING: Missing strong random number source"),
          (f = {
            getRandomValues: function (e) {
              return s.throwError(
                "no secure random source avaialble",
                i.Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "crypto.getRandomValues" },
              );
            },
          }));
      }).call(this, r(13));
    },
    1646: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "random/5.8.0";
    },
    1647: function (e, t, r) {
      "use strict";
      function n(e) {
        e = e.slice();
        for (let t = e.length - 1; t > 0; t--) {
          const r = Math.floor(Math.random() * (t + 1)),
            n = e[t];
          ((e[t] = e[r]), (e[r] = n));
        }
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.shuffled = n));
    },
    286: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pbkdf2", {
          enumerable: !0,
          get: function () {
            return n.pbkdf2;
          },
        }));
      var n = r(1613);
    },
    287: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Utf8ErrorReason =
          t.Utf8ErrorFuncs =
          t.UnicodeNormalizationForm =
            void 0),
        (t._toEscapedUtf8String = g),
        (t._toUtf8String = y),
        (t.toUtf8Bytes = p),
        (t.toUtf8CodePoints = A),
        (t.toUtf8String = v));
      var n = r(33),
        i = r(42),
        o = r(1621);
      const s = new i.Logger(o.version);
      var a, u;
      function f(e, t, r, n, i) {
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
      function l(e, t, r, n, i) {
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
        error: f,
        ignore: h,
        replace: l,
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
          for (let f = 0; f < o; f++) {
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
      function p(e, t) {
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
      function m(e) {
        const t = "0000" + e.toString(16);
        return "\\u" + t.substring(t.length - 4);
      }
      function g(e, t) {
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
                ? m(e)
                : ((e -= 65536),
                  m(55296 + ((e >> 10) & 1023)) + m(56320 + (1023 & e)));
            })
            .join("") +
          '"'
        );
      }
      function y(e) {
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
      function v(e, t) {
        return y(d(e, t));
      }
      function A(e, t) {
        return (void 0 === t && (t = a.current), d(p(e, t)));
      }
    },
    33: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.arrayify = l),
        (t.concat = c),
        (t.hexConcat = b),
        (t.hexDataLength = v),
        (t.hexDataSlice = A),
        (t.hexStripZeros = M),
        (t.hexValue = w),
        (t.hexZeroPad = E),
        (t.hexlify = y),
        (t.isBytes = h),
        (t.isBytesLike = u),
        (t.isHexString = m),
        (t.joinSignature = P),
        (t.splitSignature = S),
        (t.stripZeros = d),
        (t.zeroPad = p));
      var n = r(42),
        i = r(1608);
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
        return (m(e) && !(e.length % 2)) || h(e);
      }
      function f(e) {
        return "number" === typeof e && e == e && e % 1 === 0;
      }
      function h(e) {
        if (null == e) return !1;
        if (e.constructor === Uint8Array) return !0;
        if ("string" === typeof e) return !1;
        if (!f(e.length) || e.length < 0) return !1;
        for (let t = 0; t < e.length; t++) {
          const r = e[t];
          if (!f(r) || r < 0 || r >= 256) return !1;
        }
        return !0;
      }
      function l(e, t) {
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
          m(e))
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
        const t = e.map((e) => l(e)),
          r = t.reduce((e, t) => e + t.length, 0),
          n = new Uint8Array(r);
        return (t.reduce((e, t) => (n.set(t, e), e + t.length), 0), a(n));
      }
      function d(e) {
        let t = l(e);
        if (0 === t.length) return t;
        let r = 0;
        while (r < t.length && 0 === t[r]) r++;
        return (r && (t = t.slice(r)), t);
      }
      function p(e, t) {
        ((e = l(e)),
          e.length > t &&
            o.throwArgumentError("value out of range", "value", arguments[0]));
        const r = new Uint8Array(t);
        return (r.set(e, t - e.length), a(r));
      }
      function m(e, t) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!t || e.length === 2 + 2 * t)
        );
      }
      const g = "0123456789abcdef";
      function y(e, t) {
        if ((t || (t = {}), "number" === typeof e)) {
          o.checkSafeUint53(e, "invalid hexlify value");
          let t = "";
          while (e) ((t = g[15 & e] + t), (e = Math.floor(e / 16)));
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
        if (m(e))
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
            t += g[(240 & n) >> 4] + g[15 & n];
          }
          return t;
        }
        return o.throwArgumentError("invalid hexlify value", "value", e);
      }
      function v(e) {
        if ("string" !== typeof e) e = y(e);
        else if (!m(e) || e.length % 2) return null;
        return (e.length - 2) / 2;
      }
      function A(e, t, r) {
        return (
          "string" !== typeof e
            ? (e = y(e))
            : (!m(e) || e.length % 2) &&
              o.throwArgumentError("invalid hexData", "value", e),
          (t = 2 + 2 * t),
          null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
        );
      }
      function b(e) {
        let t = "0x";
        return (
          e.forEach((e) => {
            t += y(e).substring(2);
          }),
          t
        );
      }
      function w(e) {
        const t = M(y(e, { hexPad: "left" }));
        return "0x" === t ? "0x0" : t;
      }
      function M(e) {
        ("string" !== typeof e && (e = y(e)),
          m(e) || o.throwArgumentError("invalid hex string", "value", e),
          (e = e.substring(2)));
        let t = 0;
        while (t < e.length && "0" === e[t]) t++;
        return "0x" + e.substring(t);
      }
      function E(e, t) {
        ("string" !== typeof e
          ? (e = y(e))
          : m(e) || o.throwArgumentError("invalid hex string", "value", e),
          e.length > 2 * t + 2 &&
            o.throwArgumentError("value out of range", "value", arguments[1]));
        while (e.length < 2 * t + 2) e = "0x0" + e.substring(2);
        return e;
      }
      function S(e) {
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
          let r = l(e);
          (64 === r.length
            ? ((t.v = 27 + (r[32] >> 7)),
              (r[32] &= 127),
              (t.r = y(r.slice(0, 32))),
              (t.s = y(r.slice(32, 64))))
            : 65 === r.length
              ? ((t.r = y(r.slice(0, 32))),
                (t.s = y(r.slice(32, 64))),
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
            (t._vs = y(r.slice(32, 64))));
        } else {
          if (
            ((t.r = e.r),
            (t.s = e.s),
            (t.v = e.v),
            (t.recoveryParam = e.recoveryParam),
            (t._vs = e._vs),
            null != t._vs)
          ) {
            const r = p(l(t._vs), 32);
            t._vs = y(r);
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
            const i = y(r);
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
          (null != t.r && m(t.r)
            ? (t.r = E(t.r, 32))
            : o.throwArgumentError(
                "signature missing or invalid r",
                "signature",
                e,
              ),
            null != t.s && m(t.s)
              ? (t.s = E(t.s, 32))
              : o.throwArgumentError(
                  "signature missing or invalid s",
                  "signature",
                  e,
                ));
          const r = l(t.s);
          (r[0] >= 128 &&
            o.throwArgumentError("signature s out of range", "signature", e),
            t.recoveryParam && (r[0] |= 128));
          const n = y(r);
          (t._vs &&
            (m(t._vs) ||
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
      function P(e) {
        return (
          (e = S(e)),
          y(c([e.r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
    },
    42: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Logger = t.LogLevel = t.ErrorCode = void 0));
      var n = r(1607);
      let i = !1,
        o = !1;
      const s = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let a = s["default"],
        u = null;
      function f() {
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
      const h = f();
      var l, c;
      ((function (e) {
        ((e["DEBUG"] = "DEBUG"),
          (e["INFO"] = "INFO"),
          (e["WARNING"] = "WARNING"),
          (e["ERROR"] = "ERROR"),
          (e["OFF"] = "OFF"));
      })(l || (t.LogLevel = l = {})),
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
      ((t.Logger = Logger), (Logger.errors = c), (Logger.levels = l));
    },
    559: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BigNumber = void 0),
        (t._base16To36 = A),
        (t._base36To16 = v),
        (t.isBigNumberish = c));
      var i = n(r(560)),
        o = r(33),
        s = r(42),
        a = r(561),
        u = i.default.BN;
      const f = new s.Logger(a.version),
        h = {},
        l = 9007199254740991;
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
            f.throwError(
              "cannot call constructor directly; use BigNumber.from",
              s.Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "new (BigNumber)" },
            ),
            (this._hex = t),
            (this._isBigNumber = !0),
            Object.freeze(this));
        }
        fromTwos(e) {
          return m(g(this).fromTwos(e));
        }
        toTwos(e) {
          return m(g(this).toTwos(e));
        }
        abs() {
          return "-" === this._hex[0]
            ? BigNumber.from(this._hex.substring(1))
            : this;
        }
        add(e) {
          return m(g(this).add(g(e)));
        }
        sub(e) {
          return m(g(this).sub(g(e)));
        }
        div(e) {
          const t = BigNumber.from(e);
          return (
            t.isZero() && y("division-by-zero", "div"),
            m(g(this).div(g(e)))
          );
        }
        mul(e) {
          return m(g(this).mul(g(e)));
        }
        mod(e) {
          const t = g(e);
          return (
            t.isNeg() && y("division-by-zero", "mod"),
            m(g(this).umod(t))
          );
        }
        pow(e) {
          const t = g(e);
          return (t.isNeg() && y("negative-power", "pow"), m(g(this).pow(t)));
        }
        and(e) {
          const t = g(e);
          return (
            (this.isNegative() || t.isNeg()) &&
              y("unbound-bitwise-result", "and"),
            m(g(this).and(t))
          );
        }
        or(e) {
          const t = g(e);
          return (
            (this.isNegative() || t.isNeg()) &&
              y("unbound-bitwise-result", "or"),
            m(g(this).or(t))
          );
        }
        xor(e) {
          const t = g(e);
          return (
            (this.isNegative() || t.isNeg()) &&
              y("unbound-bitwise-result", "xor"),
            m(g(this).xor(t))
          );
        }
        mask(e) {
          return (
            (this.isNegative() || e < 0) && y("negative-width", "mask"),
            m(g(this).maskn(e))
          );
        }
        shl(e) {
          return (
            (this.isNegative() || e < 0) && y("negative-width", "shl"),
            m(g(this).shln(e))
          );
        }
        shr(e) {
          return (
            (this.isNegative() || e < 0) && y("negative-width", "shr"),
            m(g(this).shrn(e))
          );
        }
        eq(e) {
          return g(this).eq(g(e));
        }
        lt(e) {
          return g(this).lt(g(e));
        }
        lte(e) {
          return g(this).lte(g(e));
        }
        gt(e) {
          return g(this).gt(g(e));
        }
        gte(e) {
          return g(this).gte(g(e));
        }
        isNegative() {
          return "-" === this._hex[0];
        }
        isZero() {
          return g(this).isZero();
        }
        toNumber() {
          try {
            return g(this).toNumber();
          } catch (e) {
            y("overflow", "toNumber", this.toString());
          }
          return null;
        }
        toBigInt() {
          try {
            return BigInt(this.toString());
          } catch (e) {}
          return f.throwError(
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
                  f.warn(
                    "BigNumber.toString does not accept any parameters; base-10 is assumed",
                  ))
                : 16 === arguments[0]
                  ? f.throwError(
                      "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                      s.Logger.errors.UNEXPECTED_ARGUMENT,
                      {},
                    )
                  : f.throwError(
                      "BigNumber.toString does not accept parameters",
                      s.Logger.errors.UNEXPECTED_ARGUMENT,
                      {},
                    )),
            g(this).toString(10)
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
              ? new BigNumber(h, p(e))
              : e.match(/^-?[0-9]+$/)
                ? new BigNumber(h, p(new u(e)))
                : f.throwArgumentError("invalid BigNumber string", "value", e);
          if ("number" === typeof e)
            return (
              e % 1 && y("underflow", "BigNumber.from", e),
              (e >= l || e <= -l) && y("overflow", "BigNumber.from", e),
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
          return f.throwArgumentError("invalid BigNumber value", "value", e);
        }
        static isBigNumber(e) {
          return !(!e || !e._isBigNumber);
        }
      }
      function p(e) {
        if ("string" !== typeof e) return p(e.toString(16));
        if ("-" === e[0])
          return (
            (e = e.substring(1)),
            "-" === e[0] && f.throwArgumentError("invalid hex", "value", e),
            (e = p(e)),
            "0x00" === e ? e : "-" + e
          );
        if (("0x" !== e.substring(0, 2) && (e = "0x" + e), "0x" === e))
          return "0x00";
        e.length % 2 && (e = "0x0" + e.substring(2));
        while (e.length > 4 && "0x00" === e.substring(0, 4))
          e = "0x" + e.substring(4);
        return e;
      }
      function m(e) {
        return BigNumber.from(p(e));
      }
      function g(e) {
        const t = BigNumber.from(e).toHexString();
        return "-" === t[0]
          ? new u("-" + t.substring(3), 16)
          : new u(t.substring(2), 16);
      }
      function y(e, t, r) {
        const n = { fault: e, operation: t };
        return (
          null != r && (n.value = r),
          f.throwError(e, s.Logger.errors.NUMERIC_FAULT, n)
        );
      }
      function v(e) {
        return new u(e, 36).toString(16);
      }
      function A(e) {
        return new u(e, 16).toString(36);
      }
      t.BigNumber = BigNumber;
    },
    560: function (e, t, r) {
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
                : r(1609).Buffer;
          } catch (I) {}
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
          function f(e, t, r, i) {
            for (
              var o = 0, s = 0, a = Math.min(e.length, r), u = t;
              u < a;
              u++
            ) {
              var f = e.charCodeAt(u) - 48;
              ((o *= i),
                (s = f >= 49 ? f - 49 + 10 : f >= 17 ? f - 17 + 10 : f),
                n(f >= 0 && s < i, "Invalid character"),
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
                ((u = f(e, h, h + n, t)),
                  this.imuln(i),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              if (0 !== s) {
                var l = 1;
                for (u = f(e, h, e.length, t), h = 0; h < s; h++) l *= t;
                (this.imuln(l),
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
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = l;
            } catch (I) {
              o.prototype.inspect = l;
            }
          else o.prototype.inspect = l;
          function l() {
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
            p = [
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
              var f = d[e],
                h = p[e];
              r = "";
              var l = this.clone();
              l.negative = 0;
              while (!l.isZero()) {
                var m = l.modrn(h).toString(e);
                ((l = l.idivn(h)),
                  (r = l.isZero() ? m + r : c[f - m.length] + m + r));
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
          var m = function (e, t) {
            return e.allocUnsafe ? e.allocUnsafe(t) : new e(t);
          };
          function g(e) {
            for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
              var n = (r / 26) | 0,
                i = r % 26;
              t[r] = (e.words[n] >>> i) & 1;
            }
            return t;
          }
          function y(e, t, r) {
            r.negative = t.negative ^ e.negative;
            var n = (e.length + t.length) | 0;
            ((r.length = n), (n = (n - 1) | 0));
            var i = 0 | e.words[0],
              o = 0 | t.words[0],
              s = i * o,
              a = 67108863 & s,
              u = (s / 67108864) | 0;
            r.words[0] = a;
            for (var f = 1; f < n; f++) {
              for (
                var h = u >>> 26,
                  l = 67108863 & u,
                  c = Math.min(f, t.length - 1),
                  d = Math.max(0, f - e.length + 1);
                d <= c;
                d++
              ) {
                var p = (f - d) | 0;
                ((i = 0 | e.words[p]),
                  (o = 0 | t.words[d]),
                  (s = i * o + l),
                  (h += (s / 67108864) | 0),
                  (l = 67108863 & s));
              }
              ((r.words[f] = 0 | l), (u = 0 | h));
            }
            return (0 !== u ? (r.words[f] = 0 | u) : r.length--, r._strip());
          }
          ((o.prototype.toArrayLike = function (e, t, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            (n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0"));
            var s = m(e, o),
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
          var v = function (e, t, r) {
            var n,
              i,
              o,
              s = e.words,
              a = t.words,
              u = r.words,
              f = 0,
              h = 0 | s[0],
              l = 8191 & h,
              c = h >>> 13,
              d = 0 | s[1],
              p = 8191 & d,
              m = d >>> 13,
              g = 0 | s[2],
              y = 8191 & g,
              v = g >>> 13,
              A = 0 | s[3],
              b = 8191 & A,
              w = A >>> 13,
              M = 0 | s[4],
              E = 8191 & M,
              S = M >>> 13,
              P = 0 | s[5],
              x = 8191 & P,
              B = P >>> 13,
              C = 0 | s[6],
              N = 8191 & C,
              I = C >>> 13,
              O = 0 | s[7],
              F = 8191 & O,
              R = O >>> 13,
              k = 0 | s[8],
              T = 8191 & k,
              _ = k >>> 13,
              D = 0 | s[9],
              U = 8191 & D,
              L = D >>> 13,
              j = 0 | a[0],
              H = 8191 & j,
              K = j >>> 13,
              G = 0 | a[1],
              z = 8191 & G,
              q = G >>> 13,
              W = 0 | a[2],
              Q = 8191 & W,
              J = W >>> 13,
              V = 0 | a[3],
              Y = 8191 & V,
              Z = V >>> 13,
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
              fe = ae >>> 13,
              he = 0 | a[8],
              le = 8191 & he,
              ce = he >>> 13,
              de = 0 | a[9],
              pe = 8191 & de,
              me = de >>> 13;
            ((r.negative = e.negative ^ t.negative),
              (r.length = 19),
              (n = Math.imul(l, H)),
              (i = Math.imul(l, K)),
              (i = (i + Math.imul(c, H)) | 0),
              (o = Math.imul(c, K)));
            var ge = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (ge >>> 26)) | 0),
              (ge &= 67108863),
              (n = Math.imul(p, H)),
              (i = Math.imul(p, K)),
              (i = (i + Math.imul(m, H)) | 0),
              (o = Math.imul(m, K)),
              (n = (n + Math.imul(l, z)) | 0),
              (i = (i + Math.imul(l, q)) | 0),
              (i = (i + Math.imul(c, z)) | 0),
              (o = (o + Math.imul(c, q)) | 0));
            var ye = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (ye >>> 26)) | 0),
              (ye &= 67108863),
              (n = Math.imul(y, H)),
              (i = Math.imul(y, K)),
              (i = (i + Math.imul(v, H)) | 0),
              (o = Math.imul(v, K)),
              (n = (n + Math.imul(p, z)) | 0),
              (i = (i + Math.imul(p, q)) | 0),
              (i = (i + Math.imul(m, z)) | 0),
              (o = (o + Math.imul(m, q)) | 0),
              (n = (n + Math.imul(l, Q)) | 0),
              (i = (i + Math.imul(l, J)) | 0),
              (i = (i + Math.imul(c, Q)) | 0),
              (o = (o + Math.imul(c, J)) | 0));
            var ve = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (ve >>> 26)) | 0),
              (ve &= 67108863),
              (n = Math.imul(b, H)),
              (i = Math.imul(b, K)),
              (i = (i + Math.imul(w, H)) | 0),
              (o = Math.imul(w, K)),
              (n = (n + Math.imul(y, z)) | 0),
              (i = (i + Math.imul(y, q)) | 0),
              (i = (i + Math.imul(v, z)) | 0),
              (o = (o + Math.imul(v, q)) | 0),
              (n = (n + Math.imul(p, Q)) | 0),
              (i = (i + Math.imul(p, J)) | 0),
              (i = (i + Math.imul(m, Q)) | 0),
              (o = (o + Math.imul(m, J)) | 0),
              (n = (n + Math.imul(l, Y)) | 0),
              (i = (i + Math.imul(l, Z)) | 0),
              (i = (i + Math.imul(c, Y)) | 0),
              (o = (o + Math.imul(c, Z)) | 0));
            var Ae = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (Ae >>> 26)) | 0),
              (Ae &= 67108863),
              (n = Math.imul(E, H)),
              (i = Math.imul(E, K)),
              (i = (i + Math.imul(S, H)) | 0),
              (o = Math.imul(S, K)),
              (n = (n + Math.imul(b, z)) | 0),
              (i = (i + Math.imul(b, q)) | 0),
              (i = (i + Math.imul(w, z)) | 0),
              (o = (o + Math.imul(w, q)) | 0),
              (n = (n + Math.imul(y, Q)) | 0),
              (i = (i + Math.imul(y, J)) | 0),
              (i = (i + Math.imul(v, Q)) | 0),
              (o = (o + Math.imul(v, J)) | 0),
              (n = (n + Math.imul(p, Y)) | 0),
              (i = (i + Math.imul(p, Z)) | 0),
              (i = (i + Math.imul(m, Y)) | 0),
              (o = (o + Math.imul(m, Z)) | 0),
              (n = (n + Math.imul(l, $)) | 0),
              (i = (i + Math.imul(l, ee)) | 0),
              (i = (i + Math.imul(c, $)) | 0),
              (o = (o + Math.imul(c, ee)) | 0));
            var be = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (be >>> 26)) | 0),
              (be &= 67108863),
              (n = Math.imul(x, H)),
              (i = Math.imul(x, K)),
              (i = (i + Math.imul(B, H)) | 0),
              (o = Math.imul(B, K)),
              (n = (n + Math.imul(E, z)) | 0),
              (i = (i + Math.imul(E, q)) | 0),
              (i = (i + Math.imul(S, z)) | 0),
              (o = (o + Math.imul(S, q)) | 0),
              (n = (n + Math.imul(b, Q)) | 0),
              (i = (i + Math.imul(b, J)) | 0),
              (i = (i + Math.imul(w, Q)) | 0),
              (o = (o + Math.imul(w, J)) | 0),
              (n = (n + Math.imul(y, Y)) | 0),
              (i = (i + Math.imul(y, Z)) | 0),
              (i = (i + Math.imul(v, Y)) | 0),
              (o = (o + Math.imul(v, Z)) | 0),
              (n = (n + Math.imul(p, $)) | 0),
              (i = (i + Math.imul(p, ee)) | 0),
              (i = (i + Math.imul(m, $)) | 0),
              (o = (o + Math.imul(m, ee)) | 0),
              (n = (n + Math.imul(l, re)) | 0),
              (i = (i + Math.imul(l, ne)) | 0),
              (i = (i + Math.imul(c, re)) | 0),
              (o = (o + Math.imul(c, ne)) | 0));
            var we = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (we >>> 26)) | 0),
              (we &= 67108863),
              (n = Math.imul(N, H)),
              (i = Math.imul(N, K)),
              (i = (i + Math.imul(I, H)) | 0),
              (o = Math.imul(I, K)),
              (n = (n + Math.imul(x, z)) | 0),
              (i = (i + Math.imul(x, q)) | 0),
              (i = (i + Math.imul(B, z)) | 0),
              (o = (o + Math.imul(B, q)) | 0),
              (n = (n + Math.imul(E, Q)) | 0),
              (i = (i + Math.imul(E, J)) | 0),
              (i = (i + Math.imul(S, Q)) | 0),
              (o = (o + Math.imul(S, J)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (i = (i + Math.imul(b, Z)) | 0),
              (i = (i + Math.imul(w, Y)) | 0),
              (o = (o + Math.imul(w, Z)) | 0),
              (n = (n + Math.imul(y, $)) | 0),
              (i = (i + Math.imul(y, ee)) | 0),
              (i = (i + Math.imul(v, $)) | 0),
              (o = (o + Math.imul(v, ee)) | 0),
              (n = (n + Math.imul(p, re)) | 0),
              (i = (i + Math.imul(p, ne)) | 0),
              (i = (i + Math.imul(m, re)) | 0),
              (o = (o + Math.imul(m, ne)) | 0),
              (n = (n + Math.imul(l, oe)) | 0),
              (i = (i + Math.imul(l, se)) | 0),
              (i = (i + Math.imul(c, oe)) | 0),
              (o = (o + Math.imul(c, se)) | 0));
            var Me = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (Me >>> 26)) | 0),
              (Me &= 67108863),
              (n = Math.imul(F, H)),
              (i = Math.imul(F, K)),
              (i = (i + Math.imul(R, H)) | 0),
              (o = Math.imul(R, K)),
              (n = (n + Math.imul(N, z)) | 0),
              (i = (i + Math.imul(N, q)) | 0),
              (i = (i + Math.imul(I, z)) | 0),
              (o = (o + Math.imul(I, q)) | 0),
              (n = (n + Math.imul(x, Q)) | 0),
              (i = (i + Math.imul(x, J)) | 0),
              (i = (i + Math.imul(B, Q)) | 0),
              (o = (o + Math.imul(B, J)) | 0),
              (n = (n + Math.imul(E, Y)) | 0),
              (i = (i + Math.imul(E, Z)) | 0),
              (i = (i + Math.imul(S, Y)) | 0),
              (o = (o + Math.imul(S, Z)) | 0),
              (n = (n + Math.imul(b, $)) | 0),
              (i = (i + Math.imul(b, ee)) | 0),
              (i = (i + Math.imul(w, $)) | 0),
              (o = (o + Math.imul(w, ee)) | 0),
              (n = (n + Math.imul(y, re)) | 0),
              (i = (i + Math.imul(y, ne)) | 0),
              (i = (i + Math.imul(v, re)) | 0),
              (o = (o + Math.imul(v, ne)) | 0),
              (n = (n + Math.imul(p, oe)) | 0),
              (i = (i + Math.imul(p, se)) | 0),
              (i = (i + Math.imul(m, oe)) | 0),
              (o = (o + Math.imul(m, se)) | 0),
              (n = (n + Math.imul(l, ue)) | 0),
              (i = (i + Math.imul(l, fe)) | 0),
              (i = (i + Math.imul(c, ue)) | 0),
              (o = (o + Math.imul(c, fe)) | 0));
            var Ee = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (Ee >>> 26)) | 0),
              (Ee &= 67108863),
              (n = Math.imul(T, H)),
              (i = Math.imul(T, K)),
              (i = (i + Math.imul(_, H)) | 0),
              (o = Math.imul(_, K)),
              (n = (n + Math.imul(F, z)) | 0),
              (i = (i + Math.imul(F, q)) | 0),
              (i = (i + Math.imul(R, z)) | 0),
              (o = (o + Math.imul(R, q)) | 0),
              (n = (n + Math.imul(N, Q)) | 0),
              (i = (i + Math.imul(N, J)) | 0),
              (i = (i + Math.imul(I, Q)) | 0),
              (o = (o + Math.imul(I, J)) | 0),
              (n = (n + Math.imul(x, Y)) | 0),
              (i = (i + Math.imul(x, Z)) | 0),
              (i = (i + Math.imul(B, Y)) | 0),
              (o = (o + Math.imul(B, Z)) | 0),
              (n = (n + Math.imul(E, $)) | 0),
              (i = (i + Math.imul(E, ee)) | 0),
              (i = (i + Math.imul(S, $)) | 0),
              (o = (o + Math.imul(S, ee)) | 0),
              (n = (n + Math.imul(b, re)) | 0),
              (i = (i + Math.imul(b, ne)) | 0),
              (i = (i + Math.imul(w, re)) | 0),
              (o = (o + Math.imul(w, ne)) | 0),
              (n = (n + Math.imul(y, oe)) | 0),
              (i = (i + Math.imul(y, se)) | 0),
              (i = (i + Math.imul(v, oe)) | 0),
              (o = (o + Math.imul(v, se)) | 0),
              (n = (n + Math.imul(p, ue)) | 0),
              (i = (i + Math.imul(p, fe)) | 0),
              (i = (i + Math.imul(m, ue)) | 0),
              (o = (o + Math.imul(m, fe)) | 0),
              (n = (n + Math.imul(l, le)) | 0),
              (i = (i + Math.imul(l, ce)) | 0),
              (i = (i + Math.imul(c, le)) | 0),
              (o = (o + Math.imul(c, ce)) | 0));
            var Se = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (Se >>> 26)) | 0),
              (Se &= 67108863),
              (n = Math.imul(U, H)),
              (i = Math.imul(U, K)),
              (i = (i + Math.imul(L, H)) | 0),
              (o = Math.imul(L, K)),
              (n = (n + Math.imul(T, z)) | 0),
              (i = (i + Math.imul(T, q)) | 0),
              (i = (i + Math.imul(_, z)) | 0),
              (o = (o + Math.imul(_, q)) | 0),
              (n = (n + Math.imul(F, Q)) | 0),
              (i = (i + Math.imul(F, J)) | 0),
              (i = (i + Math.imul(R, Q)) | 0),
              (o = (o + Math.imul(R, J)) | 0),
              (n = (n + Math.imul(N, Y)) | 0),
              (i = (i + Math.imul(N, Z)) | 0),
              (i = (i + Math.imul(I, Y)) | 0),
              (o = (o + Math.imul(I, Z)) | 0),
              (n = (n + Math.imul(x, $)) | 0),
              (i = (i + Math.imul(x, ee)) | 0),
              (i = (i + Math.imul(B, $)) | 0),
              (o = (o + Math.imul(B, ee)) | 0),
              (n = (n + Math.imul(E, re)) | 0),
              (i = (i + Math.imul(E, ne)) | 0),
              (i = (i + Math.imul(S, re)) | 0),
              (o = (o + Math.imul(S, ne)) | 0),
              (n = (n + Math.imul(b, oe)) | 0),
              (i = (i + Math.imul(b, se)) | 0),
              (i = (i + Math.imul(w, oe)) | 0),
              (o = (o + Math.imul(w, se)) | 0),
              (n = (n + Math.imul(y, ue)) | 0),
              (i = (i + Math.imul(y, fe)) | 0),
              (i = (i + Math.imul(v, ue)) | 0),
              (o = (o + Math.imul(v, fe)) | 0),
              (n = (n + Math.imul(p, le)) | 0),
              (i = (i + Math.imul(p, ce)) | 0),
              (i = (i + Math.imul(m, le)) | 0),
              (o = (o + Math.imul(m, ce)) | 0),
              (n = (n + Math.imul(l, pe)) | 0),
              (i = (i + Math.imul(l, me)) | 0),
              (i = (i + Math.imul(c, pe)) | 0),
              (o = (o + Math.imul(c, me)) | 0));
            var Pe = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (Pe >>> 26)) | 0),
              (Pe &= 67108863),
              (n = Math.imul(U, z)),
              (i = Math.imul(U, q)),
              (i = (i + Math.imul(L, z)) | 0),
              (o = Math.imul(L, q)),
              (n = (n + Math.imul(T, Q)) | 0),
              (i = (i + Math.imul(T, J)) | 0),
              (i = (i + Math.imul(_, Q)) | 0),
              (o = (o + Math.imul(_, J)) | 0),
              (n = (n + Math.imul(F, Y)) | 0),
              (i = (i + Math.imul(F, Z)) | 0),
              (i = (i + Math.imul(R, Y)) | 0),
              (o = (o + Math.imul(R, Z)) | 0),
              (n = (n + Math.imul(N, $)) | 0),
              (i = (i + Math.imul(N, ee)) | 0),
              (i = (i + Math.imul(I, $)) | 0),
              (o = (o + Math.imul(I, ee)) | 0),
              (n = (n + Math.imul(x, re)) | 0),
              (i = (i + Math.imul(x, ne)) | 0),
              (i = (i + Math.imul(B, re)) | 0),
              (o = (o + Math.imul(B, ne)) | 0),
              (n = (n + Math.imul(E, oe)) | 0),
              (i = (i + Math.imul(E, se)) | 0),
              (i = (i + Math.imul(S, oe)) | 0),
              (o = (o + Math.imul(S, se)) | 0),
              (n = (n + Math.imul(b, ue)) | 0),
              (i = (i + Math.imul(b, fe)) | 0),
              (i = (i + Math.imul(w, ue)) | 0),
              (o = (o + Math.imul(w, fe)) | 0),
              (n = (n + Math.imul(y, le)) | 0),
              (i = (i + Math.imul(y, ce)) | 0),
              (i = (i + Math.imul(v, le)) | 0),
              (o = (o + Math.imul(v, ce)) | 0),
              (n = (n + Math.imul(p, pe)) | 0),
              (i = (i + Math.imul(p, me)) | 0),
              (i = (i + Math.imul(m, pe)) | 0),
              (o = (o + Math.imul(m, me)) | 0));
            var xe = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (xe >>> 26)) | 0),
              (xe &= 67108863),
              (n = Math.imul(U, Q)),
              (i = Math.imul(U, J)),
              (i = (i + Math.imul(L, Q)) | 0),
              (o = Math.imul(L, J)),
              (n = (n + Math.imul(T, Y)) | 0),
              (i = (i + Math.imul(T, Z)) | 0),
              (i = (i + Math.imul(_, Y)) | 0),
              (o = (o + Math.imul(_, Z)) | 0),
              (n = (n + Math.imul(F, $)) | 0),
              (i = (i + Math.imul(F, ee)) | 0),
              (i = (i + Math.imul(R, $)) | 0),
              (o = (o + Math.imul(R, ee)) | 0),
              (n = (n + Math.imul(N, re)) | 0),
              (i = (i + Math.imul(N, ne)) | 0),
              (i = (i + Math.imul(I, re)) | 0),
              (o = (o + Math.imul(I, ne)) | 0),
              (n = (n + Math.imul(x, oe)) | 0),
              (i = (i + Math.imul(x, se)) | 0),
              (i = (i + Math.imul(B, oe)) | 0),
              (o = (o + Math.imul(B, se)) | 0),
              (n = (n + Math.imul(E, ue)) | 0),
              (i = (i + Math.imul(E, fe)) | 0),
              (i = (i + Math.imul(S, ue)) | 0),
              (o = (o + Math.imul(S, fe)) | 0),
              (n = (n + Math.imul(b, le)) | 0),
              (i = (i + Math.imul(b, ce)) | 0),
              (i = (i + Math.imul(w, le)) | 0),
              (o = (o + Math.imul(w, ce)) | 0),
              (n = (n + Math.imul(y, pe)) | 0),
              (i = (i + Math.imul(y, me)) | 0),
              (i = (i + Math.imul(v, pe)) | 0),
              (o = (o + Math.imul(v, me)) | 0));
            var Be = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (Be >>> 26)) | 0),
              (Be &= 67108863),
              (n = Math.imul(U, Y)),
              (i = Math.imul(U, Z)),
              (i = (i + Math.imul(L, Y)) | 0),
              (o = Math.imul(L, Z)),
              (n = (n + Math.imul(T, $)) | 0),
              (i = (i + Math.imul(T, ee)) | 0),
              (i = (i + Math.imul(_, $)) | 0),
              (o = (o + Math.imul(_, ee)) | 0),
              (n = (n + Math.imul(F, re)) | 0),
              (i = (i + Math.imul(F, ne)) | 0),
              (i = (i + Math.imul(R, re)) | 0),
              (o = (o + Math.imul(R, ne)) | 0),
              (n = (n + Math.imul(N, oe)) | 0),
              (i = (i + Math.imul(N, se)) | 0),
              (i = (i + Math.imul(I, oe)) | 0),
              (o = (o + Math.imul(I, se)) | 0),
              (n = (n + Math.imul(x, ue)) | 0),
              (i = (i + Math.imul(x, fe)) | 0),
              (i = (i + Math.imul(B, ue)) | 0),
              (o = (o + Math.imul(B, fe)) | 0),
              (n = (n + Math.imul(E, le)) | 0),
              (i = (i + Math.imul(E, ce)) | 0),
              (i = (i + Math.imul(S, le)) | 0),
              (o = (o + Math.imul(S, ce)) | 0),
              (n = (n + Math.imul(b, pe)) | 0),
              (i = (i + Math.imul(b, me)) | 0),
              (i = (i + Math.imul(w, pe)) | 0),
              (o = (o + Math.imul(w, me)) | 0));
            var Ce = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (Ce >>> 26)) | 0),
              (Ce &= 67108863),
              (n = Math.imul(U, $)),
              (i = Math.imul(U, ee)),
              (i = (i + Math.imul(L, $)) | 0),
              (o = Math.imul(L, ee)),
              (n = (n + Math.imul(T, re)) | 0),
              (i = (i + Math.imul(T, ne)) | 0),
              (i = (i + Math.imul(_, re)) | 0),
              (o = (o + Math.imul(_, ne)) | 0),
              (n = (n + Math.imul(F, oe)) | 0),
              (i = (i + Math.imul(F, se)) | 0),
              (i = (i + Math.imul(R, oe)) | 0),
              (o = (o + Math.imul(R, se)) | 0),
              (n = (n + Math.imul(N, ue)) | 0),
              (i = (i + Math.imul(N, fe)) | 0),
              (i = (i + Math.imul(I, ue)) | 0),
              (o = (o + Math.imul(I, fe)) | 0),
              (n = (n + Math.imul(x, le)) | 0),
              (i = (i + Math.imul(x, ce)) | 0),
              (i = (i + Math.imul(B, le)) | 0),
              (o = (o + Math.imul(B, ce)) | 0),
              (n = (n + Math.imul(E, pe)) | 0),
              (i = (i + Math.imul(E, me)) | 0),
              (i = (i + Math.imul(S, pe)) | 0),
              (o = (o + Math.imul(S, me)) | 0));
            var Ne = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (Ne >>> 26)) | 0),
              (Ne &= 67108863),
              (n = Math.imul(U, re)),
              (i = Math.imul(U, ne)),
              (i = (i + Math.imul(L, re)) | 0),
              (o = Math.imul(L, ne)),
              (n = (n + Math.imul(T, oe)) | 0),
              (i = (i + Math.imul(T, se)) | 0),
              (i = (i + Math.imul(_, oe)) | 0),
              (o = (o + Math.imul(_, se)) | 0),
              (n = (n + Math.imul(F, ue)) | 0),
              (i = (i + Math.imul(F, fe)) | 0),
              (i = (i + Math.imul(R, ue)) | 0),
              (o = (o + Math.imul(R, fe)) | 0),
              (n = (n + Math.imul(N, le)) | 0),
              (i = (i + Math.imul(N, ce)) | 0),
              (i = (i + Math.imul(I, le)) | 0),
              (o = (o + Math.imul(I, ce)) | 0),
              (n = (n + Math.imul(x, pe)) | 0),
              (i = (i + Math.imul(x, me)) | 0),
              (i = (i + Math.imul(B, pe)) | 0),
              (o = (o + Math.imul(B, me)) | 0));
            var Ie = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (Ie >>> 26)) | 0),
              (Ie &= 67108863),
              (n = Math.imul(U, oe)),
              (i = Math.imul(U, se)),
              (i = (i + Math.imul(L, oe)) | 0),
              (o = Math.imul(L, se)),
              (n = (n + Math.imul(T, ue)) | 0),
              (i = (i + Math.imul(T, fe)) | 0),
              (i = (i + Math.imul(_, ue)) | 0),
              (o = (o + Math.imul(_, fe)) | 0),
              (n = (n + Math.imul(F, le)) | 0),
              (i = (i + Math.imul(F, ce)) | 0),
              (i = (i + Math.imul(R, le)) | 0),
              (o = (o + Math.imul(R, ce)) | 0),
              (n = (n + Math.imul(N, pe)) | 0),
              (i = (i + Math.imul(N, me)) | 0),
              (i = (i + Math.imul(I, pe)) | 0),
              (o = (o + Math.imul(I, me)) | 0));
            var Oe = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (Oe >>> 26)) | 0),
              (Oe &= 67108863),
              (n = Math.imul(U, ue)),
              (i = Math.imul(U, fe)),
              (i = (i + Math.imul(L, ue)) | 0),
              (o = Math.imul(L, fe)),
              (n = (n + Math.imul(T, le)) | 0),
              (i = (i + Math.imul(T, ce)) | 0),
              (i = (i + Math.imul(_, le)) | 0),
              (o = (o + Math.imul(_, ce)) | 0),
              (n = (n + Math.imul(F, pe)) | 0),
              (i = (i + Math.imul(F, me)) | 0),
              (i = (i + Math.imul(R, pe)) | 0),
              (o = (o + Math.imul(R, me)) | 0));
            var Fe = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (Fe >>> 26)) | 0),
              (Fe &= 67108863),
              (n = Math.imul(U, le)),
              (i = Math.imul(U, ce)),
              (i = (i + Math.imul(L, le)) | 0),
              (o = Math.imul(L, ce)),
              (n = (n + Math.imul(T, pe)) | 0),
              (i = (i + Math.imul(T, me)) | 0),
              (i = (i + Math.imul(_, pe)) | 0),
              (o = (o + Math.imul(_, me)) | 0));
            var Re = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            ((f = (((o + (i >>> 13)) | 0) + (Re >>> 26)) | 0),
              (Re &= 67108863),
              (n = Math.imul(U, pe)),
              (i = Math.imul(U, me)),
              (i = (i + Math.imul(L, pe)) | 0),
              (o = Math.imul(L, me)));
            var ke = (((f + n) | 0) + ((8191 & i) << 13)) | 0;
            return (
              (f = (((o + (i >>> 13)) | 0) + (ke >>> 26)) | 0),
              (ke &= 67108863),
              (u[0] = ge),
              (u[1] = ye),
              (u[2] = ve),
              (u[3] = Ae),
              (u[4] = be),
              (u[5] = we),
              (u[6] = Me),
              (u[7] = Ee),
              (u[8] = Se),
              (u[9] = Pe),
              (u[10] = xe),
              (u[11] = Be),
              (u[12] = Ce),
              (u[13] = Ne),
              (u[14] = Ie),
              (u[15] = Oe),
              (u[16] = Fe),
              (u[17] = Re),
              (u[18] = ke),
              0 !== f && ((u[19] = f), r.length++),
              r
            );
          };
          function A(e, t, r) {
            ((r.negative = t.negative ^ e.negative),
              (r.length = e.length + t.length));
            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
              var s = i;
              i = 0;
              for (
                var a = 67108863 & n,
                  u = Math.min(o, t.length - 1),
                  f = Math.max(0, o - e.length + 1);
                f <= u;
                f++
              ) {
                var h = o - f,
                  l = 0 | e.words[h],
                  c = 0 | t.words[f],
                  d = l * c,
                  p = 67108863 & d;
                ((s = (s + ((d / 67108864) | 0)) | 0),
                  (p = (p + a) | 0),
                  (a = 67108863 & p),
                  (s = (s + (p >>> 26)) | 0),
                  (i += s >>> 26),
                  (s &= 67108863));
              }
              ((r.words[o] = a), (n = s), (s = i));
            }
            return (0 !== n ? (r.words[o] = n) : r.length--, r._strip());
          }
          function b(e, t, r) {
            return A(e, t, r);
          }
          function w(e, t) {
            ((this.x = e), (this.y = t));
          }
          (Math.imul || (v = y),
            (o.prototype.mulTo = function (e, t) {
              var r,
                n = this.length + e.length;
              return (
                (r =
                  10 === this.length && 10 === e.length
                    ? v(this, e, t)
                    : n < 63
                      ? y(this, e, t)
                      : n < 1024
                        ? A(this, e, t)
                        : b(this, e, t)),
                r
              );
            }),
            (w.prototype.makeRBT = function (e) {
              for (
                var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0;
                n < e;
                n++
              )
                t[n] = this.revBin(n, r, e);
              return t;
            }),
            (w.prototype.revBin = function (e, t, r) {
              if (0 === e || e === r - 1) return e;
              for (var n = 0, i = 0; i < t; i++)
                ((n |= (1 & e) << (t - i - 1)), (e >>= 1));
              return n;
            }),
            (w.prototype.permute = function (e, t, r, n, i, o) {
              for (var s = 0; s < o; s++) ((n[s] = t[e[s]]), (i[s] = r[e[s]]));
            }),
            (w.prototype.transform = function (e, t, r, n, i, o) {
              this.permute(o, e, t, r, n, i);
              for (var s = 1; s < i; s <<= 1)
                for (
                  var a = s << 1,
                    u = Math.cos((2 * Math.PI) / a),
                    f = Math.sin((2 * Math.PI) / a),
                    h = 0;
                  h < i;
                  h += a
                )
                  for (var l = u, c = f, d = 0; d < s; d++) {
                    var p = r[h + d],
                      m = n[h + d],
                      g = r[h + d + s],
                      y = n[h + d + s],
                      v = l * g - c * y;
                    ((y = l * y + c * g),
                      (g = v),
                      (r[h + d] = p + g),
                      (n[h + d] = m + y),
                      (r[h + d + s] = p - g),
                      (n[h + d + s] = m - y),
                      d !== a &&
                        ((v = u * l - f * c), (c = u * c + f * l), (l = v)));
                  }
            }),
            (w.prototype.guessLen13b = function (e, t) {
              var r = 1 | Math.max(t, e),
                n = 1 & r,
                i = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) i++;
              return 1 << (i + 1 + n);
            }),
            (w.prototype.conjugate = function (e, t, r) {
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
            (w.prototype.normalize13b = function (e, t) {
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
            (w.prototype.convert13b = function (e, t, r, i) {
              for (var o = 0, s = 0; s < t; s++)
                ((o += 0 | e[s]),
                  (r[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * t; s < i; ++s) r[s] = 0;
              (n(0 === o), n(0 === (-8192 & o)));
            }),
            (w.prototype.stub = function (e) {
              for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
              return t;
            }),
            (w.prototype.mulp = function (e, t, r) {
              var n = 2 * this.guessLen13b(e.length, t.length),
                i = this.makeRBT(n),
                o = this.stub(n),
                s = new Array(n),
                a = new Array(n),
                u = new Array(n),
                f = new Array(n),
                h = new Array(n),
                l = new Array(n),
                c = r.words;
              ((c.length = n),
                this.convert13b(e.words, e.length, s, n),
                this.convert13b(t.words, t.length, f, n),
                this.transform(s, o, a, u, n, i),
                this.transform(f, o, h, l, n, i));
              for (var d = 0; d < n; d++) {
                var p = a[d] * h[d] - u[d] * l[d];
                ((u[d] = a[d] * l[d] + u[d] * h[d]), (a[d] = p));
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
                b(this, e, t)
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
              var t = g(e);
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
                for (var f = 0; f < s; f++) u.words[f] = this.words[f];
                u.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, f = 0; f < this.length; f++)
                  this.words[f] = this.words[f + s];
              else ((this.words[0] = 0), (this.length = 1));
              var h = 0;
              for (f = this.length - 1; f >= 0 && (0 !== h || f >= i); f--) {
                var l = 0 | this.words[f];
                ((this.words[f] = (h << (26 - o)) | (l >>> o)), (h = l & a));
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
                f = n.length - i.length;
              if ("mod" !== t) {
                ((u = new o(null)),
                  (u.length = f + 1),
                  (u.words = new Array(u.length)));
                for (var h = 0; h < u.length; h++) u.words[h] = 0;
              }
              var l = n.clone()._ishlnsubmul(i, 1, f);
              0 === l.negative && ((n = l), u && (u.words[f] = 1));
              for (var c = f - 1; c >= 0; c--) {
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
                f = 0;
              while (t.isEven() && r.isEven()) (t.iushrn(1), r.iushrn(1), ++f);
              var h = r.clone(),
                l = t.clone();
              while (!t.isZero()) {
                for (
                  var c = 0, d = 1;
                  0 === (t.words[0] & d) && c < 26;
                  ++c, d <<= 1
                );
                if (c > 0) {
                  t.iushrn(c);
                  while (c-- > 0)
                    ((i.isOdd() || s.isOdd()) && (i.iadd(h), s.isub(l)),
                      i.iushrn(1),
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
                    ((a.isOdd() || u.isOdd()) && (a.iadd(h), u.isub(l)),
                      a.iushrn(1),
                      u.iushrn(1));
                }
                t.cmp(r) >= 0
                  ? (t.isub(r), i.isub(a), s.isub(u))
                  : (r.isub(t), a.isub(i), u.isub(s));
              }
              return { a: a, b: u, gcd: r.iushln(f) };
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
                  var f = 0, h = 1;
                  0 === (t.words[0] & h) && f < 26;
                  ++f, h <<= 1
                );
                if (f > 0) {
                  t.iushrn(f);
                  while (f-- > 0) (s.isOdd() && s.iadd(u), s.iushrn(1));
                }
                for (
                  var l = 0, c = 1;
                  0 === (r.words[0] & c) && l < 26;
                  ++l, c <<= 1
                );
                if (l > 0) {
                  r.iushrn(l);
                  while (l-- > 0) (a.isOdd() && a.iadd(u), a.iushrn(1));
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
              return new C(e);
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
          function S() {
            E.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function P() {
            E.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function x() {
            E.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function B() {
            E.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function C(e) {
            if ("string" === typeof e) {
              var t = o._prime(e);
              ((this.m = t.p), (this.prime = t));
            } else
              (n(e.gtn(1), "modulus must be greater than 1"),
                (this.m = e),
                (this.prime = null));
          }
          function N(e) {
            (C.call(this, e),
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
            i(S, E),
            (S.prototype.split = function (e, t) {
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
            (S.prototype.imulK = function (e) {
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
            i(P, E),
            i(x, E),
            i(B, E),
            (B.prototype.imulK = function (e) {
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
              if ("k256" === e) t = new S();
              else if ("p224" === e) t = new P();
              else if ("p192" === e) t = new x();
              else {
                if ("p25519" !== e) throw new Error("Unknown prime " + e);
                t = new B();
              }
              return ((M[e] = t), t);
            }),
            (C.prototype._verify1 = function (e) {
              (n(0 === e.negative, "red works only with positives"),
                n(e.red, "red works only with red numbers"));
            }),
            (C.prototype._verify2 = function (e, t) {
              (n(
                0 === (e.negative | t.negative),
                "red works only with positives",
              ),
                n(e.red && e.red === t.red, "red works only with red numbers"));
            }),
            (C.prototype.imod = function (e) {
              return this.prime
                ? this.prime.ireduce(e)._forceRed(this)
                : (h(e, e.umod(this.m)._forceRed(this)), e);
            }),
            (C.prototype.neg = function (e) {
              return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
            }),
            (C.prototype.add = function (e, t) {
              this._verify2(e, t);
              var r = e.add(t);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (C.prototype.iadd = function (e, t) {
              this._verify2(e, t);
              var r = e.iadd(t);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (C.prototype.sub = function (e, t) {
              this._verify2(e, t);
              var r = e.sub(t);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (C.prototype.isub = function (e, t) {
              this._verify2(e, t);
              var r = e.isub(t);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (C.prototype.shl = function (e, t) {
              return (this._verify1(e), this.imod(e.ushln(t)));
            }),
            (C.prototype.imul = function (e, t) {
              return (this._verify2(e, t), this.imod(e.imul(t)));
            }),
            (C.prototype.mul = function (e, t) {
              return (this._verify2(e, t), this.imod(e.mul(t)));
            }),
            (C.prototype.isqr = function (e) {
              return this.imul(e, e.clone());
            }),
            (C.prototype.sqr = function (e) {
              return this.mul(e, e);
            }),
            (C.prototype.sqrt = function (e) {
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
                f = this.m.subn(1).iushrn(1),
                h = this.m.bitLength();
              h = new o(2 * h * h).toRed(this);
              while (0 !== this.pow(h, f).cmp(u)) h.redIAdd(u);
              var l = this.pow(h, i),
                c = this.pow(e, i.addn(1).iushrn(1)),
                d = this.pow(e, i),
                p = s;
              while (0 !== d.cmp(a)) {
                for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
                n(g < p);
                var y = this.pow(l, new o(1).iushln(p - g - 1));
                ((c = c.redMul(y)),
                  (l = y.redSqr()),
                  (d = d.redMul(l)),
                  (p = g));
              }
              return c;
            }),
            (C.prototype.invm = function (e) {
              var t = e._invmp(this.m);
              return 0 !== t.negative
                ? ((t.negative = 0), this.imod(t).redNeg())
                : this.imod(t);
            }),
            (C.prototype.pow = function (e, t) {
              if (t.isZero()) return new o(1).toRed(this);
              if (0 === t.cmpn(1)) return e.clone();
              var r = 4,
                n = new Array(1 << r);
              ((n[0] = new o(1).toRed(this)), (n[1] = e));
              for (var i = 2; i < n.length; i++) n[i] = this.mul(n[i - 1], e);
              var s = n[0],
                a = 0,
                u = 0,
                f = t.bitLength() % 26;
              for (0 === f && (f = 26), i = t.length - 1; i >= 0; i--) {
                for (var h = t.words[i], l = f - 1; l >= 0; l--) {
                  var c = (h >> l) & 1;
                  (s !== n[0] && (s = this.sqr(s)),
                    0 !== c || 0 !== a
                      ? ((a <<= 1),
                        (a |= c),
                        u++,
                        (u === r || (0 === i && 0 === l)) &&
                          ((s = this.mul(s, n[a])), (u = 0), (a = 0)))
                      : (u = 0));
                }
                f = 26;
              }
              return s;
            }),
            (C.prototype.convertTo = function (e) {
              var t = e.umod(this.m);
              return t === e ? t.clone() : t;
            }),
            (C.prototype.convertFrom = function (e) {
              var t = e.clone();
              return ((t.red = null), t);
            }),
            (o.mont = function (e) {
              return new N(e);
            }),
            i(N, C),
            (N.prototype.convertTo = function (e) {
              return this.imod(e.ushln(this.shift));
            }),
            (N.prototype.convertFrom = function (e) {
              var t = this.imod(e.mul(this.rinv));
              return ((t.red = null), t);
            }),
            (N.prototype.imul = function (e, t) {
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
            (N.prototype.mul = function (e, t) {
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
            (N.prototype.invm = function (e) {
              var t = this.imod(e._invmp(this.m).mul(this.r2));
              return t._forceRed(this);
            }));
        })(e, this);
      }).call(this, r(20)(e));
    },
    561: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "bignumber/5.8.0";
    },
    562: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decode = d),
        (t.encode = h));
      var n = r(33),
        i = r(42),
        o = r(1611);
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
      function f(e) {
        if (Array.isArray(e)) {
          let t = [];
          if (
            (e.forEach(function (e) {
              t = t.concat(f(e));
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
        return (0, n.hexlify)(f(e));
      }
      function l(e, t, r, n) {
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
            l(e, t, t + 1 + r, r + n)
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
            l(e, t, t + 1, r)
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
    563: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "SupportedAlgorithm", {
          enumerable: !0,
          get: function () {
            return i.SupportedAlgorithm;
          },
        }),
        Object.defineProperty(t, "computeHmac", {
          enumerable: !0,
          get: function () {
            return n.computeHmac;
          },
        }),
        Object.defineProperty(t, "ripemd160", {
          enumerable: !0,
          get: function () {
            return n.ripemd160;
          },
        }),
        Object.defineProperty(t, "sha256", {
          enumerable: !0,
          get: function () {
            return n.sha256;
          },
        }),
        Object.defineProperty(t, "sha512", {
          enumerable: !0,
          get: function () {
            return n.sha512;
          },
        }));
      var n = r(1614),
        i = r(564);
    },
    564: function (e, t, r) {
      "use strict";
      var n;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SupportedAlgorithm = void 0),
        (function (e) {
          ((e["sha256"] = "sha256"), (e["sha512"] = "sha512"));
        })(n || (t.SupportedAlgorithm = n = {})));
    },
    565: function (e, t, r) {
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
      var n = r(1617),
        i = r(1618),
        o = r(1619),
        s = r(1620);
    },
    566: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "json-wallets/5.7.0";
    },
    567: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getPassword = a),
        (t.looseArrayify = o),
        (t.searchPath = u),
        (t.uuidV4 = f),
        (t.zpad = s));
      var n = r(33),
        i = r(94);
      function o(e) {
        return (
          "string" === typeof e && "0x" !== e.substring(0, 2) && (e = "0x" + e),
          (0, n.arrayify)(e)
        );
      }
      function s(e, t) {
        e = String(e);
        while (e.length < t) e = "0" + e;
        return e;
      }
      function a(e) {
        return "string" === typeof e
          ? (0, i.toUtf8Bytes)(e, i.UnicodeNormalizationForm.NFKC)
          : (0, n.arrayify)(e);
      }
      function u(e, t) {
        let r = e;
        const n = t.toLowerCase().split("/");
        for (let i = 0; i < n.length; i++) {
          let e = null;
          for (const t in r)
            if (t.toLowerCase() === n[i]) {
              e = r[t];
              break;
            }
          if (null === e) return null;
          r = e;
        }
        return r;
      }
      function f(e) {
        const t = (0, n.arrayify)(e);
        ((t[6] = (15 & t[6]) | 64), (t[8] = (63 & t[8]) | 128));
        const r = (0, n.hexlify)(t);
        return [
          r.substring(2, 10),
          r.substring(10, 14),
          r.substring(14, 18),
          r.substring(18, 22),
          r.substring(22, 34),
        ].join("-");
      }
    },
    568: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SigningKey = void 0),
        (t.computePublicKey = c),
        (t.recoverPublicKey = l));
      var n = r(1628),
        i = r(33),
        o = r(76),
        s = r(42),
        a = r(1629);
      const u = new s.Logger(a.version);
      let f = null;
      function h() {
        return (f || (f = new n.EC("secp256k1")), f);
      }
      class SigningKey {
        constructor(e) {
          ((0, o.defineReadOnly)(this, "curve", "secp256k1"),
            (0, o.defineReadOnly)(this, "privateKey", (0, i.hexlify)(e)),
            32 !== (0, i.hexDataLength)(this.privateKey) &&
              u.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]",
              ));
          const t = h().keyFromPrivate((0, i.arrayify)(this.privateKey));
          ((0, o.defineReadOnly)(
            this,
            "publicKey",
            "0x" + t.getPublic(!1, "hex"),
          ),
            (0, o.defineReadOnly)(
              this,
              "compressedPublicKey",
              "0x" + t.getPublic(!0, "hex"),
            ),
            (0, o.defineReadOnly)(this, "_isSigningKey", !0));
        }
        _addPoint(e) {
          const t = h().keyFromPublic((0, i.arrayify)(this.publicKey)),
            r = h().keyFromPublic((0, i.arrayify)(e));
          return "0x" + t.pub.add(r.pub).encodeCompressed("hex");
        }
        signDigest(e) {
          const t = h().keyFromPrivate((0, i.arrayify)(this.privateKey)),
            r = (0, i.arrayify)(e);
          32 !== r.length &&
            u.throwArgumentError("bad digest length", "digest", e);
          const n = t.sign(r, { canonical: !0 });
          return (0, i.splitSignature)({
            recoveryParam: n.recoveryParam,
            r: (0, i.hexZeroPad)("0x" + n.r.toString(16), 32),
            s: (0, i.hexZeroPad)("0x" + n.s.toString(16), 32),
          });
        }
        computeSharedSecret(e) {
          const t = h().keyFromPrivate((0, i.arrayify)(this.privateKey)),
            r = h().keyFromPublic((0, i.arrayify)(c(e)));
          return (0, i.hexZeroPad)(
            "0x" + t.derive(r.getPublic()).toString(16),
            32,
          );
        }
        static isSigningKey(e) {
          return !(!e || !e._isSigningKey);
        }
      }
      function l(e, t) {
        const r = (0, i.splitSignature)(t),
          n = { r: (0, i.arrayify)(r.r), s: (0, i.arrayify)(r.s) };
        return (
          "0x" +
          h()
            .recoverPubKey((0, i.arrayify)(e), n, r.recoveryParam)
            .encode("hex", !1)
        );
      }
      function c(e, t) {
        const r = (0, i.arrayify)(e);
        if (32 === r.length) {
          const e = new SigningKey(r);
          return t
            ? "0x" + h().keyFromPrivate(r).getPublic(!0, "hex")
            : e.publicKey;
        }
        return 33 === r.length
          ? t
            ? (0, i.hexlify)(r)
            : "0x" + h().keyFromPublic(r).getPublic(!1, "hex")
          : 65 === r.length
            ? t
              ? "0x" + h().keyFromPublic(r).getPublic(!0, "hex")
              : (0, i.hexlify)(r)
            : u.throwArgumentError(
                "invalid public or private key",
                "key",
                "[REDACTED]",
              );
      }
      t.SigningKey = SigningKey;
    },
    569: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionTypes = void 0),
        (t.accessListify = S),
        (t.computeAddress = b),
        (t.parse = k),
        (t.recoverAddress = w),
        (t.serialize = N));
      var n = r(150),
        i = r(151),
        o = r(33),
        s = r(565),
        a = r(75),
        u = r(76),
        f = d(r(562)),
        h = r(568),
        l = r(42),
        c = r(1630);
      function d(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (d = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            o,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((i = t ? n : r)) {
            if (i.has(e)) return i.get(e);
            i.set(e, s);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (o.get || o.set)
                ? i(s, r, o)
                : (s[r] = e[r]));
          return s;
        })(e, t);
      }
      const p = new l.Logger(c.version);
      var m;
      function g(e) {
        return "0x" === e ? null : (0, n.getAddress)(e);
      }
      function y(e) {
        return "0x" === e ? s.Zero : i.BigNumber.from(e);
      }
      (function (e) {
        ((e[(e["legacy"] = 0)] = "legacy"),
          (e[(e["eip2930"] = 1)] = "eip2930"),
          (e[(e["eip1559"] = 2)] = "eip1559"));
      })(m || (t.TransactionTypes = m = {}));
      const v = [
          { name: "nonce", maxLength: 32, numeric: !0 },
          { name: "gasPrice", maxLength: 32, numeric: !0 },
          { name: "gasLimit", maxLength: 32, numeric: !0 },
          { name: "to", length: 20 },
          { name: "value", maxLength: 32, numeric: !0 },
          { name: "data" },
        ],
        A = {
          chainId: !0,
          data: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          type: !0,
          value: !0,
        };
      function b(e) {
        const t = (0, h.computePublicKey)(e);
        return (0, n.getAddress)(
          (0, o.hexDataSlice)((0, a.keccak256)((0, o.hexDataSlice)(t, 1)), 12),
        );
      }
      function w(e, t) {
        return b((0, h.recoverPublicKey)((0, o.arrayify)(e), t));
      }
      function M(e, t) {
        const r = (0, o.stripZeros)(i.BigNumber.from(e).toHexString());
        return (
          r.length > 32 &&
            p.throwArgumentError(
              "invalid length for " + t,
              "transaction:" + t,
              e,
            ),
          r
        );
      }
      function E(e, t) {
        return {
          address: (0, n.getAddress)(e),
          storageKeys: (t || []).map(
            (t, r) => (
              32 !== (0, o.hexDataLength)(t) &&
                p.throwArgumentError(
                  "invalid access list storageKey",
                  `accessList[${e}:${r}]`,
                  t,
                ),
              t.toLowerCase()
            ),
          ),
        };
      }
      function S(e) {
        if (Array.isArray(e))
          return e.map((e, t) =>
            Array.isArray(e)
              ? (e.length > 2 &&
                  p.throwArgumentError(
                    "access list expected to be [ address, storageKeys[] ]",
                    `value[${t}]`,
                    e,
                  ),
                E(e[0], e[1]))
              : E(e.address, e.storageKeys),
          );
        const t = Object.keys(e).map((t) => {
          const r = e[t].reduce((e, t) => ((e[t] = !0), e), {});
          return E(t, Object.keys(r).sort());
        });
        return (t.sort((e, t) => e.address.localeCompare(t.address)), t);
      }
      function P(e) {
        return S(e).map((e) => [e.address, e.storageKeys]);
      }
      function x(e, t) {
        if (null != e.gasPrice) {
          const t = i.BigNumber.from(e.gasPrice),
            r = i.BigNumber.from(e.maxFeePerGas || 0);
          t.eq(r) ||
            p.throwArgumentError(
              "mismatch EIP-1559 gasPrice != maxFeePerGas",
              "tx",
              { gasPrice: t, maxFeePerGas: r },
            );
        }
        const r = [
          M(e.chainId || 0, "chainId"),
          M(e.nonce || 0, "nonce"),
          M(e.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          M(e.maxFeePerGas || 0, "maxFeePerGas"),
          M(e.gasLimit || 0, "gasLimit"),
          null != e.to ? (0, n.getAddress)(e.to) : "0x",
          M(e.value || 0, "value"),
          e.data || "0x",
          P(e.accessList || []),
        ];
        if (t) {
          const e = (0, o.splitSignature)(t);
          (r.push(M(e.recoveryParam, "recoveryParam")),
            r.push((0, o.stripZeros)(e.r)),
            r.push((0, o.stripZeros)(e.s)));
        }
        return (0, o.hexConcat)(["0x02", f.encode(r)]);
      }
      function B(e, t) {
        const r = [
          M(e.chainId || 0, "chainId"),
          M(e.nonce || 0, "nonce"),
          M(e.gasPrice || 0, "gasPrice"),
          M(e.gasLimit || 0, "gasLimit"),
          null != e.to ? (0, n.getAddress)(e.to) : "0x",
          M(e.value || 0, "value"),
          e.data || "0x",
          P(e.accessList || []),
        ];
        if (t) {
          const e = (0, o.splitSignature)(t);
          (r.push(M(e.recoveryParam, "recoveryParam")),
            r.push((0, o.stripZeros)(e.r)),
            r.push((0, o.stripZeros)(e.s)));
        }
        return (0, o.hexConcat)(["0x01", f.encode(r)]);
      }
      function C(e, t) {
        (0, u.checkProperties)(e, A);
        const r = [];
        v.forEach(function (t) {
          let n = e[t.name] || [];
          const i = {};
          (t.numeric && (i.hexPad = "left"),
            (n = (0, o.arrayify)((0, o.hexlify)(n, i))),
            t.length &&
              n.length !== t.length &&
              n.length > 0 &&
              p.throwArgumentError(
                "invalid length for " + t.name,
                "transaction:" + t.name,
                n,
              ),
            t.maxLength &&
              ((n = (0, o.stripZeros)(n)),
              n.length > t.maxLength &&
                p.throwArgumentError(
                  "invalid length for " + t.name,
                  "transaction:" + t.name,
                  n,
                )),
            r.push((0, o.hexlify)(n)));
        });
        let n = 0;
        if (
          (null != e.chainId
            ? ((n = e.chainId),
              "number" !== typeof n &&
                p.throwArgumentError(
                  "invalid transaction.chainId",
                  "transaction",
                  e,
                ))
            : t &&
              !(0, o.isBytesLike)(t) &&
              t.v > 28 &&
              (n = Math.floor((t.v - 35) / 2)),
          0 !== n && (r.push((0, o.hexlify)(n)), r.push("0x"), r.push("0x")),
          !t)
        )
          return f.encode(r);
        const i = (0, o.splitSignature)(t);
        let s = 27 + i.recoveryParam;
        return (
          0 !== n
            ? (r.pop(),
              r.pop(),
              r.pop(),
              (s += 2 * n + 8),
              i.v > 28 &&
                i.v !== s &&
                p.throwArgumentError(
                  "transaction.chainId/signature.v mismatch",
                  "signature",
                  t,
                ))
            : i.v !== s &&
              p.throwArgumentError(
                "transaction.chainId/signature.v mismatch",
                "signature",
                t,
              ),
          r.push((0, o.hexlify)(s)),
          r.push((0, o.stripZeros)((0, o.arrayify)(i.r))),
          r.push((0, o.stripZeros)((0, o.arrayify)(i.s))),
          f.encode(r)
        );
      }
      function N(e, t) {
        if (null == e.type || 0 === e.type)
          return (
            null != e.accessList &&
              p.throwArgumentError(
                "untyped transactions do not support accessList; include type: 1",
                "transaction",
                e,
              ),
            C(e, t)
          );
        switch (e.type) {
          case 1:
            return B(e, t);
          case 2:
            return x(e, t);
          default:
            break;
        }
        return p.throwError(
          "unsupported transaction type: " + e.type,
          l.Logger.errors.UNSUPPORTED_OPERATION,
          { operation: "serializeTransaction", transactionType: e.type },
        );
      }
      function I(e, t, r) {
        try {
          const r = y(t[0]).toNumber();
          if (0 !== r && 1 !== r) throw new Error("bad recid");
          e.v = r;
        } catch (n) {
          p.throwArgumentError("invalid v for transaction type: 1", "v", t[0]);
        }
        ((e.r = (0, o.hexZeroPad)(t[1], 32)),
          (e.s = (0, o.hexZeroPad)(t[2], 32)));
        try {
          const t = (0, a.keccak256)(r(e));
          e.from = w(t, { r: e.r, s: e.s, recoveryParam: e.v });
        } catch (n) {}
      }
      function O(e) {
        const t = f.decode(e.slice(1));
        9 !== t.length &&
          12 !== t.length &&
          p.throwArgumentError(
            "invalid component count for transaction type: 2",
            "payload",
            (0, o.hexlify)(e),
          );
        const r = y(t[2]),
          n = y(t[3]),
          i = {
            type: 2,
            chainId: y(t[0]).toNumber(),
            nonce: y(t[1]).toNumber(),
            maxPriorityFeePerGas: r,
            maxFeePerGas: n,
            gasPrice: null,
            gasLimit: y(t[4]),
            to: g(t[5]),
            value: y(t[6]),
            data: t[7],
            accessList: S(t[8]),
          };
        return (
          9 === t.length ||
            ((i.hash = (0, a.keccak256)(e)), I(i, t.slice(9), x)),
          i
        );
      }
      function F(e) {
        const t = f.decode(e.slice(1));
        8 !== t.length &&
          11 !== t.length &&
          p.throwArgumentError(
            "invalid component count for transaction type: 1",
            "payload",
            (0, o.hexlify)(e),
          );
        const r = {
          type: 1,
          chainId: y(t[0]).toNumber(),
          nonce: y(t[1]).toNumber(),
          gasPrice: y(t[2]),
          gasLimit: y(t[3]),
          to: g(t[4]),
          value: y(t[5]),
          data: t[6],
          accessList: S(t[7]),
        };
        return (
          8 === t.length ||
            ((r.hash = (0, a.keccak256)(e)), I(r, t.slice(8), B)),
          r
        );
      }
      function R(e) {
        const t = f.decode(e);
        9 !== t.length &&
          6 !== t.length &&
          p.throwArgumentError("invalid raw transaction", "rawTransaction", e);
        const r = {
          nonce: y(t[0]).toNumber(),
          gasPrice: y(t[1]),
          gasLimit: y(t[2]),
          to: g(t[3]),
          value: y(t[4]),
          data: t[5],
          chainId: 0,
        };
        if (6 === t.length) return r;
        try {
          r.v = i.BigNumber.from(t[6]).toNumber();
        } catch (n) {
          return r;
        }
        if (
          ((r.r = (0, o.hexZeroPad)(t[7], 32)),
          (r.s = (0, o.hexZeroPad)(t[8], 32)),
          i.BigNumber.from(r.r).isZero() && i.BigNumber.from(r.s).isZero())
        )
          ((r.chainId = r.v), (r.v = 0));
        else {
          ((r.chainId = Math.floor((r.v - 35) / 2)),
            r.chainId < 0 && (r.chainId = 0));
          let i = r.v - 27;
          const s = t.slice(0, 6);
          0 !== r.chainId &&
            (s.push((0, o.hexlify)(r.chainId)),
            s.push("0x"),
            s.push("0x"),
            (i -= 2 * r.chainId + 8));
          const u = (0, a.keccak256)(f.encode(s));
          try {
            r.from = w(u, {
              r: (0, o.hexlify)(r.r),
              s: (0, o.hexlify)(r.s),
              recoveryParam: i,
            });
          } catch (n) {}
          r.hash = (0, a.keccak256)(e);
        }
        return ((r.type = null), r);
      }
      function k(e) {
        const t = (0, o.arrayify)(e);
        if (t[0] > 127) return R(t);
        switch (t[0]) {
          case 1:
            return F(t);
          case 2:
            return O(t);
          default:
            break;
        }
        return p.throwError(
          "unsupported transaction type: " + t[0],
          l.Logger.errors.UNSUPPORTED_OPERATION,
          { operation: "parseTransaction", transactionType: t[0] },
        );
      }
    },
    570: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.logger = t.Wordlist = void 0));
      var n = r(1632),
        i = r(76),
        o = r(42),
        s = r(1640);
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
    571: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.id = o));
      var n = r(75),
        i = r(94);
      function o(e) {
        return (0, n.keccak256)((0, i.toUtf8Bytes)(e));
      }
    },
    572: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "hash/5.8.0";
    },
    573: function (e, t, r) {
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
        for (let w = 1; w < n; w++) o.push((i += r()));
        let s = r(),
          a = t;
        t += s;
        let u = 0,
          f = 0;
        function h() {
          return (0 == u && ((f = (f << 8) | e[t++]), (u = 8)), (f >> --u) & 1);
        }
        const l = 31,
          c = Math.pow(2, l),
          d = c >>> 1,
          p = d >> 1,
          m = c - 1;
        let g = 0;
        for (let w = 0; w < l; w++) g = (g << 1) | h();
        let y = [],
          v = 0,
          A = c;
        while (1) {
          let e = Math.floor(((g - v + 1) * i - 1) / A),
            t = 0,
            r = n;
          while (r - t > 1) {
            let n = (t + r) >>> 1;
            e < o[n] ? (r = n) : (t = n);
          }
          if (0 == t) break;
          y.push(t);
          let s = v + Math.floor((A * o[t]) / i),
            a = v + Math.floor((A * o[t + 1]) / i) - 1;
          while (0 == ((s ^ a) & d))
            ((g = ((g << 1) & m) | h()),
              (s = (s << 1) & m),
              (a = ((a << 1) & m) | 1));
          while (s & ~a & p)
            ((g = (g & d) | ((g << 1) & (m >>> 1)) | h()),
              (s = (s << 1) ^ d),
              (a = ((a ^ d) << 1) | d | 1));
          ((v = s), (A = 1 + a - s));
        }
        let b = n - 4;
        return y.map((t) => {
          switch (t - b) {
            case 3:
              return b + 65792 + ((e[a++] << 16) | (e[a++] << 8) | e[a++]);
            case 2:
              return b + 256 + ((e[a++] << 8) | e[a++]);
            case 1:
              return b + e[a++];
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
      function f(e, t) {
        let r = Array(e);
        for (let n = 0; n < e; n++) r[n] = 1 + t();
        return r;
      }
      function h(e, t) {
        let r = Array(e);
        for (let n = 0, i = -1; n < e; n++) r[n] = i += 1 + t();
        return r;
      }
      function l(e, t) {
        let r = Array(e);
        for (let n = 0, i = 0; n < e; n++) r[n] = i += u(t());
        return r;
      }
      function c(e, t) {
        let r = h(e(), e),
          n = e(),
          i = h(n, e),
          o = f(n, e);
        for (let s = 0; s < n; s++)
          for (let e = 0; e < o[s]; e++) r.push(i[s] + e);
        return t ? r.map((e) => t[e]) : r;
      }
      function d(e) {
        let t = [];
        while (1) {
          let r = e();
          if (0 == r) break;
          t.push(g(r, e));
        }
        while (1) {
          let r = e() - 1;
          if (r < 0) break;
          t.push(y(r, e));
        }
        return i(n(t));
      }
      function p(e) {
        let t = [];
        while (1) {
          let r = e();
          if (0 == r) break;
          t.push(r);
        }
        return t;
      }
      function m(e, t, r) {
        let n = Array(e)
          .fill(void 0)
          .map(() => []);
        for (let i = 0; i < t; i++) l(e, r).forEach((e, t) => n[t].push(e));
        return n;
      }
      function g(e, t) {
        let r = 1 + t(),
          i = t(),
          o = p(t),
          s = m(o.length, 1 + e, t);
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
      function y(e, t) {
        let r = 1 + t(),
          n = m(r, 1 + e, t);
        return n.map((e) => [e[0], e.slice(1)]);
      }
      function v(e) {
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
        (t.read_emoji_trie = v),
        (t.read_mapped_map = d),
        (t.read_member_array = c),
        (t.read_payload = s),
        (t.read_zero_terminated_array = p),
        (t.signed = u));
    },
    75: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.keccak256 = s));
      var i = n(r(53)),
        o = r(33);
      function s(e) {
        return "0x" + i.default.keccak_256((0, o.arrayify)(e));
      }
    },
    76: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Description = void 0),
        (t.checkProperties = h),
        (t.deepCopy = m),
        (t.defineReadOnly = a),
        (t.getStatic = u),
        (t.resolveProperties = f),
        (t.shallowCopy = l));
      var n = r(42),
        i = r(1623),
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
      function f(e) {
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
      function l(e) {
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
      function p(e) {
        if (d(e)) return e;
        if (Array.isArray(e)) return Object.freeze(e.map((e) => m(e)));
        if ("object" === typeof e) {
          const t = {};
          for (const r in e) {
            const n = e[r];
            void 0 !== n && a(t, r, m(n));
          }
          return t;
        }
        return s.throwArgumentError("Cannot deepCopy " + typeof e, "object", e);
      }
      function m(e) {
        return p(e);
      }
      class Description {
        constructor(e) {
          for (const t in e) this[t] = m(e[t]);
        }
      }
      t.Description = Description;
    },
    94: function (e, t, r) {
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
      var n = r(1616),
        i = r(1622),
        o = r(287);
    },
  },
]);
