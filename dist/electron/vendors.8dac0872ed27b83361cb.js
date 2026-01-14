(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [194],
  {
    2775: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t) {
          ((t[(t["UNSIGNED_TX"] = 0)] = "UNSIGNED_TX"),
            (t[(t["GLOBAL_XPUB"] = 1)] = "GLOBAL_XPUB"));
        })(e.GlobalTypes || (e.GlobalTypes = {})),
        (e.GLOBAL_TYPE_NAMES = ["unsignedTx", "globalXpub"]),
        (function (t) {
          ((t[(t["NON_WITNESS_UTXO"] = 0)] = "NON_WITNESS_UTXO"),
            (t[(t["WITNESS_UTXO"] = 1)] = "WITNESS_UTXO"),
            (t[(t["PARTIAL_SIG"] = 2)] = "PARTIAL_SIG"),
            (t[(t["SIGHASH_TYPE"] = 3)] = "SIGHASH_TYPE"),
            (t[(t["REDEEM_SCRIPT"] = 4)] = "REDEEM_SCRIPT"),
            (t[(t["WITNESS_SCRIPT"] = 5)] = "WITNESS_SCRIPT"),
            (t[(t["BIP32_DERIVATION"] = 6)] = "BIP32_DERIVATION"),
            (t[(t["FINAL_SCRIPTSIG"] = 7)] = "FINAL_SCRIPTSIG"),
            (t[(t["FINAL_SCRIPTWITNESS"] = 8)] = "FINAL_SCRIPTWITNESS"),
            (t[(t["POR_COMMITMENT"] = 9)] = "POR_COMMITMENT"),
            (t[(t["TAP_KEY_SIG"] = 19)] = "TAP_KEY_SIG"),
            (t[(t["TAP_SCRIPT_SIG"] = 20)] = "TAP_SCRIPT_SIG"),
            (t[(t["TAP_LEAF_SCRIPT"] = 21)] = "TAP_LEAF_SCRIPT"),
            (t[(t["TAP_BIP32_DERIVATION"] = 22)] = "TAP_BIP32_DERIVATION"),
            (t[(t["TAP_INTERNAL_KEY"] = 23)] = "TAP_INTERNAL_KEY"),
            (t[(t["TAP_MERKLE_ROOT"] = 24)] = "TAP_MERKLE_ROOT"));
        })(e.InputTypes || (e.InputTypes = {})),
        (e.INPUT_TYPE_NAMES = [
          "nonWitnessUtxo",
          "witnessUtxo",
          "partialSig",
          "sighashType",
          "redeemScript",
          "witnessScript",
          "bip32Derivation",
          "finalScriptSig",
          "finalScriptWitness",
          "porCommitment",
          "tapKeySig",
          "tapScriptSig",
          "tapLeafScript",
          "tapBip32Derivation",
          "tapInternalKey",
          "tapMerkleRoot",
        ]),
        (function (t) {
          ((t[(t["REDEEM_SCRIPT"] = 0)] = "REDEEM_SCRIPT"),
            (t[(t["WITNESS_SCRIPT"] = 1)] = "WITNESS_SCRIPT"),
            (t[(t["BIP32_DERIVATION"] = 2)] = "BIP32_DERIVATION"),
            (t[(t["TAP_INTERNAL_KEY"] = 5)] = "TAP_INTERNAL_KEY"),
            (t[(t["TAP_TREE"] = 6)] = "TAP_TREE"),
            (t[(t["TAP_BIP32_DERIVATION"] = 7)] = "TAP_BIP32_DERIVATION"));
        })(e.OutputTypes || (e.OutputTypes = {})),
        (e.OUTPUT_TYPE_NAMES = [
          "redeemScript",
          "witnessScript",
          "bip32Derivation",
          "tapInternalKey",
          "tapTree",
          "tapBip32Derivation",
        ]));
    },
    2898: function (t, e, n) {
      var r = n(46).Buffer;
      function i(t) {
        if (t.length < 8) return !1;
        if (t.length > 72) return !1;
        if (48 !== t[0]) return !1;
        if (t[1] !== t.length - 2) return !1;
        if (2 !== t[2]) return !1;
        var e = t[3];
        if (0 === e) return !1;
        if (5 + e >= t.length) return !1;
        if (2 !== t[4 + e]) return !1;
        var n = t[5 + e];
        return (
          0 !== n &&
          6 + e + n === t.length &&
          !(128 & t[4]) &&
          !(e > 1 && 0 === t[4] && !(128 & t[5])) &&
          !(128 & t[e + 6]) &&
          !(n > 1 && 0 === t[e + 6] && !(128 & t[e + 7]))
        );
      }
      function o(t) {
        if (t.length < 8) throw new Error("DER sequence length is too short");
        if (t.length > 72) throw new Error("DER sequence length is too long");
        if (48 !== t[0]) throw new Error("Expected DER sequence");
        if (t[1] !== t.length - 2)
          throw new Error("DER sequence length is invalid");
        if (2 !== t[2]) throw new Error("Expected DER integer");
        var e = t[3];
        if (0 === e) throw new Error("R length is zero");
        if (5 + e >= t.length) throw new Error("R length is too long");
        if (2 !== t[4 + e]) throw new Error("Expected DER integer (2)");
        var n = t[5 + e];
        if (0 === n) throw new Error("S length is zero");
        if (6 + e + n !== t.length) throw new Error("S length is invalid");
        if (128 & t[4]) throw new Error("R value is negative");
        if (e > 1 && 0 === t[4] && !(128 & t[5]))
          throw new Error("R value excessively padded");
        if (128 & t[e + 6]) throw new Error("S value is negative");
        if (n > 1 && 0 === t[e + 6] && !(128 & t[e + 7]))
          throw new Error("S value excessively padded");
        return { r: t.slice(4, 4 + e), s: t.slice(6 + e) };
      }
      function s(t, e) {
        var n = t.length,
          i = e.length;
        if (0 === n) throw new Error("R length is zero");
        if (0 === i) throw new Error("S length is zero");
        if (n > 33) throw new Error("R length is too long");
        if (i > 33) throw new Error("S length is too long");
        if (128 & t[0]) throw new Error("R value is negative");
        if (128 & e[0]) throw new Error("S value is negative");
        if (n > 1 && 0 === t[0] && !(128 & t[1]))
          throw new Error("R value excessively padded");
        if (i > 1 && 0 === e[0] && !(128 & e[1]))
          throw new Error("S value excessively padded");
        var o = r.allocUnsafe(6 + n + i);
        return (
          (o[0] = 48),
          (o[1] = o.length - 2),
          (o[2] = 2),
          (o[3] = t.length),
          t.copy(o, 4),
          (o[4 + n] = 2),
          (o[5 + n] = e.length),
          e.copy(o, 6 + n),
          o
        );
      }
      t.exports = { check: i, decode: o, encode: s };
    },
    2918: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = 9007199254740991;
        function r(t) {
          if (t < 0 || t > n || t % 1 !== 0)
            throw new RangeError("value out of range");
        }
        function i(e, n, o) {
          if ((r(e), n || (n = t.allocUnsafe(s(e))), !t.isBuffer(n)))
            throw new TypeError("buffer must be a Buffer instance");
          return (
            o || (o = 0),
            e < 253
              ? (n.writeUInt8(e, o), Object.assign(i, { bytes: 1 }))
              : e <= 65535
                ? (n.writeUInt8(253, o),
                  n.writeUInt16LE(e, o + 1),
                  Object.assign(i, { bytes: 3 }))
                : e <= 4294967295
                  ? (n.writeUInt8(254, o),
                    n.writeUInt32LE(e, o + 1),
                    Object.assign(i, { bytes: 5 }))
                  : (n.writeUInt8(255, o),
                    n.writeUInt32LE(e >>> 0, o + 1),
                    n.writeUInt32LE((e / 4294967296) | 0, o + 5),
                    Object.assign(i, { bytes: 9 })),
            n
          );
        }
        function o(e, n) {
          if (!t.isBuffer(e))
            throw new TypeError("buffer must be a Buffer instance");
          n || (n = 0);
          const i = e.readUInt8(n);
          if (i < 253) return (Object.assign(o, { bytes: 1 }), i);
          if (253 === i)
            return (Object.assign(o, { bytes: 3 }), e.readUInt16LE(n + 1));
          if (254 === i)
            return (Object.assign(o, { bytes: 5 }), e.readUInt32LE(n + 1));
          {
            Object.assign(o, { bytes: 9 });
            const t = e.readUInt32LE(n + 1),
              i = e.readUInt32LE(n + 5),
              s = 4294967296 * i + t;
            return (r(s), s);
          }
        }
        function s(t) {
          return (r(t), t < 253 ? 1 : t <= 65535 ? 3 : t <= 4294967295 ? 5 : 9);
        }
        ((e.encode = i), (e.decode = o), (e.encodingLength = s));
      }).call(this, n(2).Buffer);
    },
    3111: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const r = n(2775),
        i = n(3710),
        o = n(3711),
        s = n(3712),
        u = n(3713),
        c = n(3714),
        a = n(3715),
        h = n(3716),
        f = n(3717),
        l = n(3718),
        p = n(3719),
        d = n(3720),
        y = n(3721),
        g = n(3722),
        w = n(3723),
        E = n(3308),
        b = n(3724),
        v = n(3725),
        I = n(3726),
        T = n(3727),
        k = n(3728),
        _ = { unsignedTx: o, globalXpub: i, checkPubkey: b.makeChecker([]) };
      e.globals = _;
      const S = {
        nonWitnessUtxo: c,
        partialSig: a,
        sighashType: f,
        finalScriptSig: s,
        finalScriptWitness: u,
        porCommitment: h,
        witnessUtxo: g,
        bip32Derivation: E.makeConverter(r.InputTypes.BIP32_DERIVATION),
        redeemScript: v.makeConverter(r.InputTypes.REDEEM_SCRIPT),
        witnessScript: k.makeConverter(r.InputTypes.WITNESS_SCRIPT),
        checkPubkey: b.makeChecker([
          r.InputTypes.PARTIAL_SIG,
          r.InputTypes.BIP32_DERIVATION,
        ]),
        tapKeySig: l,
        tapScriptSig: y,
        tapLeafScript: p,
        tapBip32Derivation: I.makeConverter(r.InputTypes.TAP_BIP32_DERIVATION),
        tapInternalKey: T.makeConverter(r.InputTypes.TAP_INTERNAL_KEY),
        tapMerkleRoot: d,
      };
      e.inputs = S;
      const m = {
        bip32Derivation: E.makeConverter(r.OutputTypes.BIP32_DERIVATION),
        redeemScript: v.makeConverter(r.OutputTypes.REDEEM_SCRIPT),
        witnessScript: k.makeConverter(r.OutputTypes.WITNESS_SCRIPT),
        checkPubkey: b.makeChecker([r.OutputTypes.BIP32_DERIVATION]),
        tapBip32Derivation: I.makeConverter(r.OutputTypes.TAP_BIP32_DERIVATION),
        tapTree: w,
        tapInternalKey: T.makeConverter(r.OutputTypes.TAP_INTERNAL_KEY),
      };
      e.outputs = m;
    },
    3112: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2918);
        function i(t) {
          if (t.length < 1) return t;
          let e = t.length - 1,
            n = 0;
          for (let r = 0; r < t.length / 2; r++)
            ((n = t[r]), (t[r] = t[e]), (t[e] = n), e--);
          return t;
        }
        function o(e) {
          const n = e.map(s);
          return (n.push(t.from([0])), t.concat(n));
        }
        function s(e) {
          const n = e.key.length,
            i = e.value.length,
            o = r.encodingLength(n),
            s = r.encodingLength(i),
            u = t.allocUnsafe(o + n + s + i);
          return (
            r.encode(n, u, 0),
            e.key.copy(u, o),
            r.encode(i, u, o + n),
            e.value.copy(u, o + n + s),
            u
          );
        }
        function u(t, e) {
          if ("number" !== typeof t)
            throw new Error("cannot write a non-number as a number");
          if (t < 0)
            throw new Error(
              "specified a negative value for writing an unsigned value",
            );
          if (t > e) throw new Error("RangeError: value out of range");
          if (Math.floor(t) !== t)
            throw new Error("value has a fractional component");
        }
        function c(t, e) {
          const n = t.readUInt32LE(e);
          let r = t.readUInt32LE(e + 4);
          return ((r *= 4294967296), u(r + n, 9007199254740991), r + n);
        }
        function a(t, e, n) {
          return (
            u(e, 9007199254740991),
            t.writeInt32LE(-1 & e, n),
            t.writeUInt32LE(Math.floor(e / 4294967296), n + 4),
            n + 8
          );
        }
        ((e.range = (t) => [...Array(t).keys()]),
          (e.reverseBuffer = i),
          (e.keyValsToBuffer = o),
          (e.keyValToBuffer = s),
          (e.readUInt64LE = c),
          (e.writeUInt64LE = a));
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
          i = n(2792),
          o = n(2819),
          s = n(2758),
          u = n(2838),
          c = s.BufferN(32),
          a = s.compile({
            wif: s.UInt8,
            bip32: { public: s.UInt32, private: s.UInt32 },
          }),
          h = {
            messagePrefix: "Bitcoin Signed Message:\n",
            bech32: "bc",
            bip32: { public: 76067358, private: 76066276 },
            pubKeyHash: 0,
            scriptHash: 5,
            wif: 128,
          },
          f = 2147483648,
          l = Math.pow(2, 31) - 1;
        function p(t) {
          return s.String(t) && null !== t.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
        }
        function d(t) {
          return s.UInt32(t) && t <= l;
        }
        class BIP32 {
          constructor(t, e, n, r, i, o, u) {
            (void 0 === i && (i = 0),
              void 0 === o && (o = 0),
              void 0 === u && (u = 0),
              (this.__D = t),
              (this.__Q = e),
              (this.chainCode = n),
              (this.network = r),
              (this.__DEPTH = i),
              (this.__INDEX = o),
              (this.__PARENT_FINGERPRINT = u),
              s(a, r),
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
                (this.__Q = o.pointFromScalar(this.__D, !0)),
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
            return b(
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
              i.encode(r)
            );
          }
          toWIF() {
            if (!this.privateKey) throw new TypeError("Missing private key");
            return u.encode(this.network.wif, this.privateKey, !0);
          }
          derive(e) {
            s(s.UInt32, e);
            const n = e >= f,
              i = t.allocUnsafe(37);
            if (n) {
              if (this.isNeutered())
                throw new TypeError(
                  "Missing private key for hardened child key",
                );
              ((i[0] = 0), this.privateKey.copy(i, 1), i.writeUInt32BE(e, 33));
            } else (this.publicKey.copy(i, 0), i.writeUInt32BE(e, 33));
            const u = r.hmacSHA512(this.chainCode, i),
              c = u.slice(0, 32),
              a = u.slice(32);
            if (!o.isPrivate(c)) return this.derive(e + 1);
            let h;
            if (this.isNeutered()) {
              const t = o.pointAddScalar(this.publicKey, c, !0);
              if (null === t) return this.derive(e + 1);
              h = b(
                t,
                a,
                this.network,
                this.depth + 1,
                e,
                this.fingerprint.readUInt32BE(0),
              );
            } else {
              const t = o.privateAdd(this.privateKey, c);
              if (null == t) return this.derive(e + 1);
              h = w(
                t,
                a,
                this.network,
                this.depth + 1,
                e,
                this.fingerprint.readUInt32BE(0),
              );
            }
            return h;
          }
          deriveHardened(t) {
            return (s(d, t), this.derive(t + f));
          }
          derivePath(t) {
            s(p, t);
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
              return o.sign(e, this.privateKey);
            {
              let n = o.sign(e, this.privateKey);
              const r = t.alloc(32, 0);
              let i = 0;
              while (n[0] > 127)
                (i++,
                  r.writeUIntLE(i, 0, 6),
                  (n = o.signWithEntropy(e, this.privateKey, r)));
              return n;
            }
          }
          verify(t, e) {
            return o.verify(t, this.publicKey, e);
          }
        }
        function y(t, e) {
          const n = i.decode(t);
          if (78 !== n.length) throw new TypeError("Invalid buffer length");
          e = e || h;
          const r = n.readUInt32BE(0);
          if (r !== e.bip32.private && r !== e.bip32.public)
            throw new TypeError("Invalid network version");
          const o = n[4],
            s = n.readUInt32BE(5);
          if (0 === o && 0 !== s)
            throw new TypeError("Invalid parent fingerprint");
          const u = n.readUInt32BE(9);
          if (0 === o && 0 !== u) throw new TypeError("Invalid index");
          const c = n.slice(13, 45);
          let a;
          if (r === e.bip32.private) {
            if (0 !== n.readUInt8(45))
              throw new TypeError("Invalid private key");
            const t = n.slice(46, 78);
            a = w(t, c, e, o, u, s);
          } else {
            const t = n.slice(45, 78);
            a = b(t, c, e, o, u, s);
          }
          return a;
        }
        function g(t, e, n) {
          return w(t, e, n);
        }
        function w(t, e, n, r, i, u) {
          if (
            (s(
              { privateKey: c, chainCode: c },
              { privateKey: t, chainCode: e },
            ),
            (n = n || h),
            !o.isPrivate(t))
          )
            throw new TypeError("Private key not in range [1, n)");
          return new BIP32(t, void 0, e, n, r, i, u);
        }
        function E(t, e, n) {
          return b(t, e, n);
        }
        function b(t, e, n, r, i, u) {
          if (
            (s(
              { publicKey: s.BufferN(33), chainCode: c },
              { publicKey: t, chainCode: e },
            ),
            (n = n || h),
            !o.isPoint(t))
          )
            throw new TypeError("Point is not on the curve");
          return new BIP32(void 0, t, e, n, r, i, u);
        }
        function v(e, n) {
          if ((s(s.Buffer, e), e.length < 16))
            throw new TypeError("Seed should be at least 128 bits");
          if (e.length > 64)
            throw new TypeError("Seed should be at most 512 bits");
          n = n || h;
          const i = r.hmacSHA512(t.from("Bitcoin seed", "utf8"), e),
            o = i.slice(0, 32),
            u = i.slice(32);
          return g(o, u, n);
        }
        ((e.fromBase58 = y),
          (e.fromPrivateKey = g),
          (e.fromPublicKey = E),
          (e.fromSeed = v));
      }).call(this, n(2).Buffer);
    },
    3179: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const r = n(797),
        i = n(2828);
      function o(t) {
        const e = r("sha256").update(t).digest();
        try {
          return r("rmd160").update(e).digest();
        } catch (n) {
          return r("ripemd160").update(e).digest();
        }
      }
      function s(t, e) {
        return i("sha512", t).update(e).digest();
      }
      ((e.hash160 = o), (e.hmacSHA512 = s));
    },
    3186: function (t, e, n) {
      var r, i;
      (function (n, o) {
        function s(t) {
          return t.default || t;
        }
        ((r = []),
          (i = function () {
            var t = {};
            return (o(t), s(t));
          }.apply(e, r)),
          void 0 === i || (t.exports = i));
      })(
        "undefined" !== typeof globalThis
          ? globalThis
          : "undefined" !== typeof self && self,
        function (t) {
          "use strict";
          (Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0));
          /**
           * @license
           * Copyright 2009 The Closure Library Authors
           * Copyright 2020 Daniel Wirtz / The long.js Authors.
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *     http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           *
           * SPDX-License-Identifier: Apache-2.0
           */
          var e = null;
          try {
            e = new WebAssembly.Instance(
              new WebAssembly.Module(
                new Uint8Array([
                  0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4,
                  127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6,
                  1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5,
                  100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3,
                  5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0,
                  5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1,
                  6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66,
                  32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126,
                  34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126,
                  32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
                  173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0,
                  32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32,
                  134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34,
                  4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32,
                  0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173,
                  66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4,
                  167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134,
                  132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66,
                  32, 135, 167, 36, 0, 32, 4, 167, 11,
                ]),
              ),
              {},
            ).exports;
          } catch {}
          function n(t, e, n) {
            ((this.low = 0 | t), (this.high = 0 | e), (this.unsigned = !!n));
          }
          function r(t) {
            return !0 === (t && t["__isLong__"]);
          }
          function i(t) {
            var e = Math.clz32(t & -t);
            return t ? 31 - e : e;
          }
          (n.prototype.__isLong__,
            Object.defineProperty(n.prototype, "__isLong__", { value: !0 }),
            (n.isLong = r));
          var o = {},
            s = {};
          function u(t, e) {
            var n, r, i;
            return e
              ? ((t >>>= 0),
                (i = 0 <= t && t < 256) && ((r = s[t]), r)
                  ? r
                  : ((n = a(t, 0, !0)), i && (s[t] = n), n))
              : ((t |= 0),
                (i = -128 <= t && t < 128) && ((r = o[t]), r)
                  ? r
                  : ((n = a(t, t < 0 ? -1 : 0, !1)), i && (o[t] = n), n));
          }
          function c(t, e) {
            if (isNaN(t)) return e ? v : b;
            if (e) {
              if (t < 0) return v;
              if (t >= g) return S;
            } else {
              if (t <= -w) return m;
              if (t + 1 >= w) return _;
            }
            return t < 0 ? c(-t, e).neg() : a((t % y) | 0, (t / y) | 0, e);
          }
          function a(t, e, r) {
            return new n(t, e, r);
          }
          ((n.fromInt = u), (n.fromNumber = c), (n.fromBits = a));
          var h = Math.pow;
          function f(t, e, n) {
            if (0 === t.length) throw Error("empty string");
            if (
              ("number" === typeof e ? ((n = e), (e = !1)) : (e = !!e),
              "NaN" === t ||
                "Infinity" === t ||
                "+Infinity" === t ||
                "-Infinity" === t)
            )
              return e ? v : b;
            if (((n = n || 10), n < 2 || 36 < n)) throw RangeError("radix");
            var r;
            if ((r = t.indexOf("-")) > 0) throw Error("interior hyphen");
            if (0 === r) return f(t.substring(1), e, n).neg();
            for (var i = c(h(n, 8)), o = b, s = 0; s < t.length; s += 8) {
              var u = Math.min(8, t.length - s),
                a = parseInt(t.substring(s, s + u), n);
              if (u < 8) {
                var l = c(h(n, u));
                o = o.mul(l).add(c(a));
              } else ((o = o.mul(i)), (o = o.add(c(a))));
            }
            return ((o.unsigned = e), o);
          }
          function l(t, e) {
            return "number" === typeof t
              ? c(t, e)
              : "string" === typeof t
                ? f(t, e)
                : a(t.low, t.high, "boolean" === typeof e ? e : t.unsigned);
          }
          ((n.fromString = f), (n.fromValue = l));
          var p = 65536,
            d = 1 << 24,
            y = p * p,
            g = y * y,
            w = g / 2,
            E = u(d),
            b = u(0);
          n.ZERO = b;
          var v = u(0, !0);
          n.UZERO = v;
          var I = u(1);
          n.ONE = I;
          var T = u(1, !0);
          n.UONE = T;
          var k = u(-1);
          n.NEG_ONE = k;
          var _ = a(-1, 2147483647, !1);
          n.MAX_VALUE = _;
          var S = a(-1, -1, !0);
          n.MAX_UNSIGNED_VALUE = S;
          var m = a(0, -2147483648, !1);
          n.MIN_VALUE = m;
          var B = n.prototype;
          ((B.toInt = function () {
            return this.unsigned ? this.low >>> 0 : this.low;
          }),
            (B.toNumber = function () {
              return this.unsigned
                ? (this.high >>> 0) * y + (this.low >>> 0)
                : this.high * y + (this.low >>> 0);
            }),
            (B.toString = function (t) {
              if (((t = t || 10), t < 2 || 36 < t)) throw RangeError("radix");
              if (this.isZero()) return "0";
              if (this.isNegative()) {
                if (this.eq(m)) {
                  var e = c(t),
                    n = this.div(e),
                    r = n.mul(e).sub(this);
                  return n.toString(t) + r.toInt().toString(t);
                }
                return "-" + this.neg().toString(t);
              }
              var i = c(h(t, 6), this.unsigned),
                o = this,
                s = "";
              while (1) {
                var u = o.div(i),
                  a = o.sub(u.mul(i)).toInt() >>> 0,
                  f = a.toString(t);
                if (((o = u), o.isZero())) return f + s;
                while (f.length < 6) f = "0" + f;
                s = "" + f + s;
              }
            }),
            (B.getHighBits = function () {
              return this.high;
            }),
            (B.getHighBitsUnsigned = function () {
              return this.high >>> 0;
            }),
            (B.getLowBits = function () {
              return this.low;
            }),
            (B.getLowBitsUnsigned = function () {
              return this.low >>> 0;
            }),
            (B.getNumBitsAbs = function () {
              if (this.isNegative())
                return this.eq(m) ? 64 : this.neg().getNumBitsAbs();
              for (
                var t = 0 != this.high ? this.high : this.low, e = 31;
                e > 0;
                e--
              )
                if (0 != (t & (1 << e))) break;
              return 0 != this.high ? e + 33 : e + 1;
            }),
            (B.isSafeInteger = function () {
              var t = this.high >> 21;
              return (
                !t ||
                (!this.unsigned &&
                  -1 === t &&
                  !(0 === this.low && -2097152 === this.high))
              );
            }),
            (B.isZero = function () {
              return 0 === this.high && 0 === this.low;
            }),
            (B.eqz = B.isZero),
            (B.isNegative = function () {
              return !this.unsigned && this.high < 0;
            }),
            (B.isPositive = function () {
              return this.unsigned || this.high >= 0;
            }),
            (B.isOdd = function () {
              return 1 === (1 & this.low);
            }),
            (B.isEven = function () {
              return 0 === (1 & this.low);
            }),
            (B.equals = function (t) {
              return (
                r(t) || (t = l(t)),
                (this.unsigned === t.unsigned ||
                  this.high >>> 31 !== 1 ||
                  t.high >>> 31 !== 1) &&
                  this.high === t.high &&
                  this.low === t.low
              );
            }),
            (B.eq = B.equals),
            (B.notEquals = function (t) {
              return !this.eq(t);
            }),
            (B.neq = B.notEquals),
            (B.ne = B.notEquals),
            (B.lessThan = function (t) {
              return this.comp(t) < 0;
            }),
            (B.lt = B.lessThan),
            (B.lessThanOrEqual = function (t) {
              return this.comp(t) <= 0;
            }),
            (B.lte = B.lessThanOrEqual),
            (B.le = B.lessThanOrEqual),
            (B.greaterThan = function (t) {
              return this.comp(t) > 0;
            }),
            (B.gt = B.greaterThan),
            (B.greaterThanOrEqual = function (t) {
              return this.comp(t) >= 0;
            }),
            (B.gte = B.greaterThanOrEqual),
            (B.ge = B.greaterThanOrEqual),
            (B.compare = function (t) {
              if ((r(t) || (t = l(t)), this.eq(t))) return 0;
              var e = this.isNegative(),
                n = t.isNegative();
              return e && !n
                ? -1
                : !e && n
                  ? 1
                  : this.unsigned
                    ? t.high >>> 0 > this.high >>> 0 ||
                      (t.high === this.high && t.low >>> 0 > this.low >>> 0)
                      ? -1
                      : 1
                    : this.sub(t).isNegative()
                      ? -1
                      : 1;
            }),
            (B.comp = B.compare),
            (B.negate = function () {
              return !this.unsigned && this.eq(m) ? m : this.not().add(I);
            }),
            (B.neg = B.negate),
            (B.add = function (t) {
              r(t) || (t = l(t));
              var e = this.high >>> 16,
                n = 65535 & this.high,
                i = this.low >>> 16,
                o = 65535 & this.low,
                s = t.high >>> 16,
                u = 65535 & t.high,
                c = t.low >>> 16,
                h = 65535 & t.low,
                f = 0,
                p = 0,
                d = 0,
                y = 0;
              return (
                (y += o + h),
                (d += y >>> 16),
                (y &= 65535),
                (d += i + c),
                (p += d >>> 16),
                (d &= 65535),
                (p += n + u),
                (f += p >>> 16),
                (p &= 65535),
                (f += e + s),
                (f &= 65535),
                a((d << 16) | y, (f << 16) | p, this.unsigned)
              );
            }),
            (B.subtract = function (t) {
              return (r(t) || (t = l(t)), this.add(t.neg()));
            }),
            (B.sub = B.subtract),
            (B.multiply = function (t) {
              if (this.isZero()) return this;
              if ((r(t) || (t = l(t)), e)) {
                var n = e["mul"](this.low, this.high, t.low, t.high);
                return a(n, e["get_high"](), this.unsigned);
              }
              if (t.isZero()) return this.unsigned ? v : b;
              if (this.eq(m)) return t.isOdd() ? m : b;
              if (t.eq(m)) return this.isOdd() ? m : b;
              if (this.isNegative())
                return t.isNegative()
                  ? this.neg().mul(t.neg())
                  : this.neg().mul(t).neg();
              if (t.isNegative()) return this.mul(t.neg()).neg();
              if (this.lt(E) && t.lt(E))
                return c(this.toNumber() * t.toNumber(), this.unsigned);
              var i = this.high >>> 16,
                o = 65535 & this.high,
                s = this.low >>> 16,
                u = 65535 & this.low,
                h = t.high >>> 16,
                f = 65535 & t.high,
                p = t.low >>> 16,
                d = 65535 & t.low,
                y = 0,
                g = 0,
                w = 0,
                I = 0;
              return (
                (I += u * d),
                (w += I >>> 16),
                (I &= 65535),
                (w += s * d),
                (g += w >>> 16),
                (w &= 65535),
                (w += u * p),
                (g += w >>> 16),
                (w &= 65535),
                (g += o * d),
                (y += g >>> 16),
                (g &= 65535),
                (g += s * p),
                (y += g >>> 16),
                (g &= 65535),
                (g += u * f),
                (y += g >>> 16),
                (g &= 65535),
                (y += i * d + o * p + s * f + u * h),
                (y &= 65535),
                a((w << 16) | I, (y << 16) | g, this.unsigned)
              );
            }),
            (B.mul = B.multiply),
            (B.divide = function (t) {
              if ((r(t) || (t = l(t)), t.isZero()))
                throw Error("division by zero");
              if (e) {
                if (
                  !this.unsigned &&
                  -2147483648 === this.high &&
                  -1 === t.low &&
                  -1 === t.high
                )
                  return this;
                var n = (this.unsigned ? e["div_u"] : e["div_s"])(
                  this.low,
                  this.high,
                  t.low,
                  t.high,
                );
                return a(n, e["get_high"](), this.unsigned);
              }
              if (this.isZero()) return this.unsigned ? v : b;
              var i, o, s;
              if (this.unsigned) {
                if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return v;
                if (t.gt(this.shru(1))) return T;
                s = v;
              } else {
                if (this.eq(m)) {
                  if (t.eq(I) || t.eq(k)) return m;
                  if (t.eq(m)) return I;
                  var u = this.shr(1);
                  return (
                    (i = u.div(t).shl(1)),
                    i.eq(b)
                      ? t.isNegative()
                        ? I
                        : k
                      : ((o = this.sub(t.mul(i))), (s = i.add(o.div(t))), s)
                  );
                }
                if (t.eq(m)) return this.unsigned ? v : b;
                if (this.isNegative())
                  return t.isNegative()
                    ? this.neg().div(t.neg())
                    : this.neg().div(t).neg();
                if (t.isNegative()) return this.div(t.neg()).neg();
                s = b;
              }
              o = this;
              while (o.gte(t)) {
                i = Math.max(1, Math.floor(o.toNumber() / t.toNumber()));
                var f = Math.ceil(Math.log(i) / Math.LN2),
                  p = f <= 48 ? 1 : h(2, f - 48),
                  d = c(i),
                  y = d.mul(t);
                while (y.isNegative() || y.gt(o))
                  ((i -= p), (d = c(i, this.unsigned)), (y = d.mul(t)));
                (d.isZero() && (d = I), (s = s.add(d)), (o = o.sub(y)));
              }
              return s;
            }),
            (B.div = B.divide),
            (B.modulo = function (t) {
              if ((r(t) || (t = l(t)), e)) {
                var n = (this.unsigned ? e["rem_u"] : e["rem_s"])(
                  this.low,
                  this.high,
                  t.low,
                  t.high,
                );
                return a(n, e["get_high"](), this.unsigned);
              }
              return this.sub(this.div(t).mul(t));
            }),
            (B.mod = B.modulo),
            (B.rem = B.modulo),
            (B.not = function () {
              return a(~this.low, ~this.high, this.unsigned);
            }),
            (B.countLeadingZeros = function () {
              return this.high
                ? Math.clz32(this.high)
                : Math.clz32(this.low) + 32;
            }),
            (B.clz = B.countLeadingZeros),
            (B.countTrailingZeros = function () {
              return this.low ? i(this.low) : i(this.high) + 32;
            }),
            (B.ctz = B.countTrailingZeros),
            (B.and = function (t) {
              return (
                r(t) || (t = l(t)),
                a(this.low & t.low, this.high & t.high, this.unsigned)
              );
            }),
            (B.or = function (t) {
              return (
                r(t) || (t = l(t)),
                a(this.low | t.low, this.high | t.high, this.unsigned)
              );
            }),
            (B.xor = function (t) {
              return (
                r(t) || (t = l(t)),
                a(this.low ^ t.low, this.high ^ t.high, this.unsigned)
              );
            }),
            (B.shiftLeft = function (t) {
              return (
                r(t) && (t = t.toInt()),
                0 === (t &= 63)
                  ? this
                  : t < 32
                    ? a(
                        this.low << t,
                        (this.high << t) | (this.low >>> (32 - t)),
                        this.unsigned,
                      )
                    : a(0, this.low << (t - 32), this.unsigned)
              );
            }),
            (B.shl = B.shiftLeft),
            (B.shiftRight = function (t) {
              return (
                r(t) && (t = t.toInt()),
                0 === (t &= 63)
                  ? this
                  : t < 32
                    ? a(
                        (this.low >>> t) | (this.high << (32 - t)),
                        this.high >> t,
                        this.unsigned,
                      )
                    : a(
                        this.high >> (t - 32),
                        this.high >= 0 ? 0 : -1,
                        this.unsigned,
                      )
              );
            }),
            (B.shr = B.shiftRight),
            (B.shiftRightUnsigned = function (t) {
              return (
                r(t) && (t = t.toInt()),
                0 === (t &= 63)
                  ? this
                  : t < 32
                    ? a(
                        (this.low >>> t) | (this.high << (32 - t)),
                        this.high >>> t,
                        this.unsigned,
                      )
                    : a(
                        32 === t ? this.high : this.high >>> (t - 32),
                        0,
                        this.unsigned,
                      )
              );
            }),
            (B.shru = B.shiftRightUnsigned),
            (B.shr_u = B.shiftRightUnsigned),
            (B.rotateLeft = function (t) {
              var e;
              return (
                r(t) && (t = t.toInt()),
                0 === (t &= 63)
                  ? this
                  : 32 === t
                    ? a(this.high, this.low, this.unsigned)
                    : t < 32
                      ? ((e = 32 - t),
                        a(
                          (this.low << t) | (this.high >>> e),
                          (this.high << t) | (this.low >>> e),
                          this.unsigned,
                        ))
                      : ((t -= 32),
                        (e = 32 - t),
                        a(
                          (this.high << t) | (this.low >>> e),
                          (this.low << t) | (this.high >>> e),
                          this.unsigned,
                        ))
              );
            }),
            (B.rotl = B.rotateLeft),
            (B.rotateRight = function (t) {
              var e;
              return (
                r(t) && (t = t.toInt()),
                0 === (t &= 63)
                  ? this
                  : 32 === t
                    ? a(this.high, this.low, this.unsigned)
                    : t < 32
                      ? ((e = 32 - t),
                        a(
                          (this.high << e) | (this.low >>> t),
                          (this.low << e) | (this.high >>> t),
                          this.unsigned,
                        ))
                      : ((t -= 32),
                        (e = 32 - t),
                        a(
                          (this.low << e) | (this.high >>> t),
                          (this.high << e) | (this.low >>> t),
                          this.unsigned,
                        ))
              );
            }),
            (B.rotr = B.rotateRight),
            (B.toSigned = function () {
              return this.unsigned ? a(this.low, this.high, !1) : this;
            }),
            (B.toUnsigned = function () {
              return this.unsigned ? this : a(this.low, this.high, !0);
            }),
            (B.toBytes = function (t) {
              return t ? this.toBytesLE() : this.toBytesBE();
            }),
            (B.toBytesLE = function () {
              var t = this.high,
                e = this.low;
              return [
                255 & e,
                (e >>> 8) & 255,
                (e >>> 16) & 255,
                e >>> 24,
                255 & t,
                (t >>> 8) & 255,
                (t >>> 16) & 255,
                t >>> 24,
              ];
            }),
            (B.toBytesBE = function () {
              var t = this.high,
                e = this.low;
              return [
                t >>> 24,
                (t >>> 16) & 255,
                (t >>> 8) & 255,
                255 & t,
                e >>> 24,
                (e >>> 16) & 255,
                (e >>> 8) & 255,
                255 & e,
              ];
            }),
            (n.fromBytes = function (t, e, r) {
              return r ? n.fromBytesLE(t, e) : n.fromBytesBE(t, e);
            }),
            (n.fromBytesLE = function (t, e) {
              return new n(
                t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
                t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
                e,
              );
            }),
            (n.fromBytesBE = function (t, e) {
              return new n(
                (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
                (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
                e,
              );
            }),
            "function" === typeof BigInt &&
              ((n.fromBigInt = function (t, e) {
                var n = Number(BigInt.asIntN(32, t)),
                  r = Number(BigInt.asIntN(32, t >> BigInt(32)));
                return a(n, r, e);
              }),
              (n.fromValue = function (t, e) {
                return "bigint" === typeof t ? n.fromBigInt(t, e) : l(t, e);
              }),
              (B.toBigInt = function () {
                var t = BigInt(this.low >>> 0),
                  e = BigInt(this.unsigned ? this.high >>> 0 : this.high);
                return (e << BigInt(32)) | t;
              })));
          t.default = n;
        },
      );
    },
    3187: function (t, e, n) {
      "use strict";
      t.exports = n(8420);
    },
    3307: function (t, e, n) {
      "use strict";
      function r(t) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        r(n(3709)),
        r(n(3729)));
    },
    3308: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const n = (t) => [...Array(t).keys()],
          r = (t) =>
            (33 === t.length && [2, 3].includes(t[0])) ||
            (65 === t.length && 4 === t[0]);
        function i(e, i) {
          function o(t) {
            if (t.key[0] !== e)
              throw new Error(
                "Decode Error: could not decode bip32Derivation with key 0x" +
                  t.key.toString("hex"),
              );
            const r = t.key.slice(1);
            if (!i(r))
              throw new Error(
                "Decode Error: bip32Derivation has invalid pubkey in key 0x" +
                  t.key.toString("hex"),
              );
            if ((t.value.length / 4) % 1 !== 0)
              throw new Error(
                "Decode Error: Input BIP32_DERIVATION value length should be multiple of 4",
              );
            const o = {
              masterFingerprint: t.value.slice(0, 4),
              pubkey: r,
              path: "m",
            };
            for (const e of n(t.value.length / 4 - 1)) {
              const n = t.value.readUInt32LE(4 * e + 4),
                r = !!(2147483648 & n),
                i = 2147483647 & n;
              o.path += "/" + i.toString(10) + (r ? "'" : "");
            }
            return o;
          }
          function s(n) {
            const r = t.from([e]),
              i = t.concat([r, n.pubkey]),
              o = n.path.split("/"),
              s = t.allocUnsafe(4 * o.length);
            n.masterFingerprint.copy(s, 0);
            let u = 4;
            return (
              o.slice(1).forEach((t) => {
                const e = "'" === t.slice(-1);
                let n = 2147483647 & parseInt(e ? t.slice(0, -1) : t, 10);
                (e && (n += 2147483648), s.writeUInt32LE(n, u), (u += 4));
              }),
              { key: i, value: s }
            );
          }
          void 0 === i && (i = r);
          const u =
            "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
          function c(e) {
            return (
              t.isBuffer(e.pubkey) &&
              t.isBuffer(e.masterFingerprint) &&
              "string" === typeof e.path &&
              i(e.pubkey) &&
              4 === e.masterFingerprint.length
            );
          }
          function a(t, e, n) {
            const r = e.pubkey.toString("hex");
            return (
              !n.has(r) &&
              (n.add(r),
              0 === t.filter((t) => t.pubkey.equals(e.pubkey)).length)
            );
          }
          return {
            decode: o,
            encode: s,
            check: c,
            expected: u,
            canAddToArray: a,
          };
        }
        e.makeConverter = i;
      }).call(this, n(2).Buffer);
    },
    3309: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(3111);
        function i(t, e) {
          const n = t[e];
          if (void 0 === n) throw new Error("No input #" + e);
          return n;
        }
        function o(t, e) {
          const n = t[e];
          if (void 0 === n) throw new Error("No output #" + e);
          return n;
        }
        function s(t, e, n) {
          if (t.key[0] < n)
            throw new Error(
              "Use the method for your specific key instead of addUnknownKeyVal*",
            );
          if (e && 0 !== e.filter((e) => e.key.equals(t.key)).length)
            throw new Error("Duplicate Key: " + t.key.toString("hex"));
        }
        function u(t) {
          let e = 0;
          return (
            Object.keys(t).forEach((t) => {
              Number(isNaN(Number(t))) && e++;
            }),
            e
          );
        }
        function c(t, e) {
          let n = !1;
          if (e.nonWitnessUtxo || e.witnessUtxo) {
            const t = !!e.redeemScript,
              r = !!e.witnessScript,
              i = !t || !!e.finalScriptSig,
              o = !r || !!e.finalScriptWitness,
              s = !!e.finalScriptSig || !!e.finalScriptWitness;
            n = i && o && s;
          }
          if (!1 === n)
            throw new Error(
              `Input #${t} has too much or too little data to clean`,
            );
        }
        function a(t, e, n, r) {
          throw new Error(
            `Data for ${t} key ${e} is incorrect: Expected ${n} and got ${JSON.stringify(r)}`,
          );
        }
        function h(t) {
          return (e, n) => {
            for (const i of Object.keys(e)) {
              const o = e[i],
                {
                  canAdd: s,
                  canAddToArray: u,
                  check: c,
                  expected: h,
                } = r[t + "s"][i] || {},
                f = !!u;
              if (c)
                if (f) {
                  if (!Array.isArray(o) || (n[i] && !Array.isArray(n[i])))
                    throw new Error(`Key type ${i} must be an array`);
                  o.every(c) || a(t, i, h, o);
                  const e = n[i] || [],
                    r = new Set();
                  if (!o.every((t) => u(e, t, r)))
                    throw new Error("Can not add duplicate data to array");
                  n[i] = e.concat(o);
                } else {
                  if ((c(o) || a(t, i, h, o), !s(n, o)))
                    throw new Error("Can not add duplicate data to " + t);
                  n[i] = o;
                }
            }
          };
        }
        function f(t, n) {
          const r = t.length - 1,
            o = i(t, r);
          e.updateInput(n, o);
        }
        function l(t, n) {
          const r = t.length - 1,
            i = o(t, r);
          e.updateOutput(n, i);
        }
        function p(e, n) {
          if (!t.isBuffer(n) || n.length < 4)
            throw new Error("Set Version: Invalid Transaction");
          return (n.writeUInt32LE(e, 0), n);
        }
        function d(e, n) {
          if (!t.isBuffer(n) || n.length < 4)
            throw new Error("Set Locktime: Invalid Transaction");
          return (n.writeUInt32LE(e, n.length - 4), n);
        }
        ((e.checkForInput = i),
          (e.checkForOutput = o),
          (e.checkHasKey = s),
          (e.getEnumLength = u),
          (e.inputCheckUncleanFinalized = c),
          (e.updateGlobal = h("global")),
          (e.updateInput = h("input")),
          (e.updateOutput = h("output")),
          (e.addInputAttributes = f),
          (e.addOutputAttributes = l),
          (e.defaultVersionSetter = p),
          (e.defaultLocktimeSetter = d));
      }).call(this, n(2).Buffer);
    },
    3707: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(3708),
          i = n(3307),
          o = n(2775),
          s = n(3309);
        class Psbt {
          constructor(t) {
            ((this.inputs = []),
              (this.outputs = []),
              (this.globalMap = { unsignedTx: t }));
          }
          static fromBase64(e, n) {
            const r = t.from(e, "base64");
            return this.fromBuffer(r, n);
          }
          static fromHex(e, n) {
            const r = t.from(e, "hex");
            return this.fromBuffer(r, n);
          }
          static fromBuffer(t, e) {
            const n = i.psbtFromBuffer(t, e),
              r = new this(n.globalMap.unsignedTx);
            return (Object.assign(r, n), r);
          }
          toBase64() {
            const t = this.toBuffer();
            return t.toString("base64");
          }
          toHex() {
            const t = this.toBuffer();
            return t.toString("hex");
          }
          toBuffer() {
            return i.psbtToBuffer(this);
          }
          updateGlobal(t) {
            return (s.updateGlobal(t, this.globalMap), this);
          }
          updateInput(t, e) {
            const n = s.checkForInput(this.inputs, t);
            return (s.updateInput(e, n), this);
          }
          updateOutput(t, e) {
            const n = s.checkForOutput(this.outputs, t);
            return (s.updateOutput(e, n), this);
          }
          addUnknownKeyValToGlobal(t) {
            return (
              s.checkHasKey(
                t,
                this.globalMap.unknownKeyVals,
                s.getEnumLength(o.GlobalTypes),
              ),
              this.globalMap.unknownKeyVals ||
                (this.globalMap.unknownKeyVals = []),
              this.globalMap.unknownKeyVals.push(t),
              this
            );
          }
          addUnknownKeyValToInput(t, e) {
            const n = s.checkForInput(this.inputs, t);
            return (
              s.checkHasKey(e, n.unknownKeyVals, s.getEnumLength(o.InputTypes)),
              n.unknownKeyVals || (n.unknownKeyVals = []),
              n.unknownKeyVals.push(e),
              this
            );
          }
          addUnknownKeyValToOutput(t, e) {
            const n = s.checkForOutput(this.outputs, t);
            return (
              s.checkHasKey(
                e,
                n.unknownKeyVals,
                s.getEnumLength(o.OutputTypes),
              ),
              n.unknownKeyVals || (n.unknownKeyVals = []),
              n.unknownKeyVals.push(e),
              this
            );
          }
          addInput(t) {
            (this.globalMap.unsignedTx.addInput(t),
              this.inputs.push({ unknownKeyVals: [] }));
            const e = t.unknownKeyVals || [],
              n = this.inputs.length - 1;
            if (!Array.isArray(e))
              throw new Error("unknownKeyVals must be an Array");
            return (
              e.forEach((t) => this.addUnknownKeyValToInput(n, t)),
              s.addInputAttributes(this.inputs, t),
              this
            );
          }
          addOutput(t) {
            (this.globalMap.unsignedTx.addOutput(t),
              this.outputs.push({ unknownKeyVals: [] }));
            const e = t.unknownKeyVals || [],
              n = this.outputs.length - 1;
            if (!Array.isArray(e))
              throw new Error("unknownKeyVals must be an Array");
            return (
              e.forEach((t) => this.addUnknownKeyValToOutput(n, t)),
              s.addOutputAttributes(this.outputs, t),
              this
            );
          }
          clearFinalizedInput(t) {
            const e = s.checkForInput(this.inputs, t);
            s.inputCheckUncleanFinalized(t, e);
            for (const n of Object.keys(e))
              [
                "witnessUtxo",
                "nonWitnessUtxo",
                "finalScriptSig",
                "finalScriptWitness",
                "unknownKeyVals",
              ].includes(n) || delete e[n];
            return this;
          }
          combine() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            const i = r.combine([this].concat(e));
            return (Object.assign(this, i), this);
          }
          getTransaction() {
            return this.globalMap.unsignedTx.toBuffer();
          }
        }
        e.Psbt = Psbt;
      }).call(this, n(2).Buffer);
    },
    3708: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const r = n(3307);
      function i(t) {
        const e = t[0],
          n = r.psbtToKeyVals(e),
          i = t.slice(1);
        if (0 === i.length) throw new Error("Combine: Nothing to combine");
        const c = s(e);
        if (void 0 === c) throw new Error("Combine: Self missing transaction");
        const a = u(n.globalKeyVals),
          h = n.inputKeyVals.map(u),
          f = n.outputKeyVals.map(u);
        for (const l of i) {
          const t = s(l);
          if (void 0 === t || !t.toBuffer().equals(c.toBuffer()))
            throw new Error(
              "Combine: One of the Psbts does not have the same transaction.",
            );
          const e = r.psbtToKeyVals(l),
            i = u(e.globalKeyVals);
          i.forEach(o(a, n.globalKeyVals, e.globalKeyVals));
          const p = e.inputKeyVals.map(u);
          p.forEach((t, r) =>
            t.forEach(o(h[r], n.inputKeyVals[r], e.inputKeyVals[r])),
          );
          const d = e.outputKeyVals.map(u);
          d.forEach((t, r) =>
            t.forEach(o(f[r], n.outputKeyVals[r], e.outputKeyVals[r])),
          );
        }
        return r.psbtFromKeyVals(c, {
          globalMapKeyVals: n.globalKeyVals,
          inputKeyVals: n.inputKeyVals,
          outputKeyVals: n.outputKeyVals,
        });
      }
      function o(t, e, n) {
        return (r) => {
          if (t.has(r)) return;
          const i = n.filter((t) => t.key.toString("hex") === r)[0];
          (e.push(i), t.add(r));
        };
      }
      function s(t) {
        return t.globalMap.unsignedTx;
      }
      function u(t) {
        const e = new Set();
        return (
          t.forEach((t) => {
            const n = t.key.toString("hex");
            if (e.has(n))
              throw new Error("Combine: KeyValue Map keys should be unique");
            e.add(n);
          }),
          e
        );
      }
      e.combine = i;
    },
    3709: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(3111),
          i = n(3112),
          o = n(2918),
          s = n(2775);
        function u(t, e) {
          let n = 0;
          function r() {
            const e = o.decode(t, n);
            n += o.encodingLength(e);
            const r = t.slice(n, n + e);
            return ((n += e), r);
          }
          function u() {
            const e = t.readUInt32BE(n);
            return ((n += 4), e);
          }
          function c() {
            const e = t.readUInt8(n);
            return ((n += 1), e);
          }
          function h() {
            const t = r(),
              e = r();
            return { key: t, value: e };
          }
          function f() {
            if (n >= t.length)
              throw new Error("Format Error: Unexpected End of PSBT");
            const e = 0 === t.readUInt8(n);
            return (e && n++, e);
          }
          if (1886610036 !== u())
            throw new Error("Format Error: Invalid Magic Number");
          if (255 !== c())
            throw new Error(
              "Format Error: Magic Number must be followed by 0xff separator",
            );
          const l = [],
            p = {};
          while (!f()) {
            const t = h(),
              e = t.key.toString("hex");
            if (p[e])
              throw new Error(
                "Format Error: Keys must be unique for global keymap: key " + e,
              );
            ((p[e] = 1), l.push(t));
          }
          const d = l.filter((t) => t.key[0] === s.GlobalTypes.UNSIGNED_TX);
          if (1 !== d.length)
            throw new Error("Format Error: Only one UNSIGNED_TX allowed");
          const y = e(d[0].value),
            { inputCount: g, outputCount: w } = y.getInputOutputCounts(),
            E = [],
            b = [];
          for (const o of i.range(g)) {
            const t = {},
              e = [];
            while (!f()) {
              const n = h(),
                r = n.key.toString("hex");
              if (t[r])
                throw new Error(
                  "Format Error: Keys must be unique for each input: input index " +
                    o +
                    " key " +
                    r,
                );
              ((t[r] = 1), e.push(n));
            }
            E.push(e);
          }
          for (const o of i.range(w)) {
            const t = {},
              e = [];
            while (!f()) {
              const n = h(),
                r = n.key.toString("hex");
              if (t[r])
                throw new Error(
                  "Format Error: Keys must be unique for each output: output index " +
                    o +
                    " key " +
                    r,
                );
              ((t[r] = 1), e.push(n));
            }
            b.push(e);
          }
          return a(y, {
            globalMapKeyVals: l,
            inputKeyVals: E,
            outputKeyVals: b,
          });
        }
        function c(e, n, r) {
          if (!n.equals(t.from([r])))
            throw new Error(
              `Format Error: Invalid ${e} key: ${n.toString("hex")}`,
            );
        }
        function a(t, e) {
          let { globalMapKeyVals: n, inputKeyVals: o, outputKeyVals: u } = e;
          const a = { unsignedTx: t };
          let h = 0;
          for (const i of n)
            switch (i.key[0]) {
              case s.GlobalTypes.UNSIGNED_TX:
                if ((c("global", i.key, s.GlobalTypes.UNSIGNED_TX), h > 0))
                  throw new Error(
                    "Format Error: GlobalMap has multiple UNSIGNED_TX",
                  );
                h++;
                break;
              case s.GlobalTypes.GLOBAL_XPUB:
                (void 0 === a.globalXpub && (a.globalXpub = []),
                  a.globalXpub.push(r.globals.globalXpub.decode(i)));
                break;
              default:
                (a.unknownKeyVals || (a.unknownKeyVals = []),
                  a.unknownKeyVals.push(i));
            }
          const f = o.length,
            l = u.length,
            p = [],
            d = [];
          for (const y of i.range(f)) {
            const t = {};
            for (const e of o[y])
              switch ((r.inputs.checkPubkey(e), e.key[0])) {
                case s.InputTypes.NON_WITNESS_UTXO:
                  if (
                    (c("input", e.key, s.InputTypes.NON_WITNESS_UTXO),
                    void 0 !== t.nonWitnessUtxo)
                  )
                    throw new Error(
                      "Format Error: Input has multiple NON_WITNESS_UTXO",
                    );
                  t.nonWitnessUtxo = r.inputs.nonWitnessUtxo.decode(e);
                  break;
                case s.InputTypes.WITNESS_UTXO:
                  if (
                    (c("input", e.key, s.InputTypes.WITNESS_UTXO),
                    void 0 !== t.witnessUtxo)
                  )
                    throw new Error(
                      "Format Error: Input has multiple WITNESS_UTXO",
                    );
                  t.witnessUtxo = r.inputs.witnessUtxo.decode(e);
                  break;
                case s.InputTypes.PARTIAL_SIG:
                  (void 0 === t.partialSig && (t.partialSig = []),
                    t.partialSig.push(r.inputs.partialSig.decode(e)));
                  break;
                case s.InputTypes.SIGHASH_TYPE:
                  if (
                    (c("input", e.key, s.InputTypes.SIGHASH_TYPE),
                    void 0 !== t.sighashType)
                  )
                    throw new Error(
                      "Format Error: Input has multiple SIGHASH_TYPE",
                    );
                  t.sighashType = r.inputs.sighashType.decode(e);
                  break;
                case s.InputTypes.REDEEM_SCRIPT:
                  if (
                    (c("input", e.key, s.InputTypes.REDEEM_SCRIPT),
                    void 0 !== t.redeemScript)
                  )
                    throw new Error(
                      "Format Error: Input has multiple REDEEM_SCRIPT",
                    );
                  t.redeemScript = r.inputs.redeemScript.decode(e);
                  break;
                case s.InputTypes.WITNESS_SCRIPT:
                  if (
                    (c("input", e.key, s.InputTypes.WITNESS_SCRIPT),
                    void 0 !== t.witnessScript)
                  )
                    throw new Error(
                      "Format Error: Input has multiple WITNESS_SCRIPT",
                    );
                  t.witnessScript = r.inputs.witnessScript.decode(e);
                  break;
                case s.InputTypes.BIP32_DERIVATION:
                  (void 0 === t.bip32Derivation && (t.bip32Derivation = []),
                    t.bip32Derivation.push(r.inputs.bip32Derivation.decode(e)));
                  break;
                case s.InputTypes.FINAL_SCRIPTSIG:
                  (c("input", e.key, s.InputTypes.FINAL_SCRIPTSIG),
                    (t.finalScriptSig = r.inputs.finalScriptSig.decode(e)));
                  break;
                case s.InputTypes.FINAL_SCRIPTWITNESS:
                  (c("input", e.key, s.InputTypes.FINAL_SCRIPTWITNESS),
                    (t.finalScriptWitness =
                      r.inputs.finalScriptWitness.decode(e)));
                  break;
                case s.InputTypes.POR_COMMITMENT:
                  (c("input", e.key, s.InputTypes.POR_COMMITMENT),
                    (t.porCommitment = r.inputs.porCommitment.decode(e)));
                  break;
                case s.InputTypes.TAP_KEY_SIG:
                  (c("input", e.key, s.InputTypes.TAP_KEY_SIG),
                    (t.tapKeySig = r.inputs.tapKeySig.decode(e)));
                  break;
                case s.InputTypes.TAP_SCRIPT_SIG:
                  (void 0 === t.tapScriptSig && (t.tapScriptSig = []),
                    t.tapScriptSig.push(r.inputs.tapScriptSig.decode(e)));
                  break;
                case s.InputTypes.TAP_LEAF_SCRIPT:
                  (void 0 === t.tapLeafScript && (t.tapLeafScript = []),
                    t.tapLeafScript.push(r.inputs.tapLeafScript.decode(e)));
                  break;
                case s.InputTypes.TAP_BIP32_DERIVATION:
                  (void 0 === t.tapBip32Derivation &&
                    (t.tapBip32Derivation = []),
                    t.tapBip32Derivation.push(
                      r.inputs.tapBip32Derivation.decode(e),
                    ));
                  break;
                case s.InputTypes.TAP_INTERNAL_KEY:
                  (c("input", e.key, s.InputTypes.TAP_INTERNAL_KEY),
                    (t.tapInternalKey = r.inputs.tapInternalKey.decode(e)));
                  break;
                case s.InputTypes.TAP_MERKLE_ROOT:
                  (c("input", e.key, s.InputTypes.TAP_MERKLE_ROOT),
                    (t.tapMerkleRoot = r.inputs.tapMerkleRoot.decode(e)));
                  break;
                default:
                  (t.unknownKeyVals || (t.unknownKeyVals = []),
                    t.unknownKeyVals.push(e));
              }
            p.push(t);
          }
          for (const y of i.range(l)) {
            const t = {};
            for (const e of u[y])
              switch ((r.outputs.checkPubkey(e), e.key[0])) {
                case s.OutputTypes.REDEEM_SCRIPT:
                  if (
                    (c("output", e.key, s.OutputTypes.REDEEM_SCRIPT),
                    void 0 !== t.redeemScript)
                  )
                    throw new Error(
                      "Format Error: Output has multiple REDEEM_SCRIPT",
                    );
                  t.redeemScript = r.outputs.redeemScript.decode(e);
                  break;
                case s.OutputTypes.WITNESS_SCRIPT:
                  if (
                    (c("output", e.key, s.OutputTypes.WITNESS_SCRIPT),
                    void 0 !== t.witnessScript)
                  )
                    throw new Error(
                      "Format Error: Output has multiple WITNESS_SCRIPT",
                    );
                  t.witnessScript = r.outputs.witnessScript.decode(e);
                  break;
                case s.OutputTypes.BIP32_DERIVATION:
                  (void 0 === t.bip32Derivation && (t.bip32Derivation = []),
                    t.bip32Derivation.push(
                      r.outputs.bip32Derivation.decode(e),
                    ));
                  break;
                case s.OutputTypes.TAP_INTERNAL_KEY:
                  (c("output", e.key, s.OutputTypes.TAP_INTERNAL_KEY),
                    (t.tapInternalKey = r.outputs.tapInternalKey.decode(e)));
                  break;
                case s.OutputTypes.TAP_TREE:
                  (c("output", e.key, s.OutputTypes.TAP_TREE),
                    (t.tapTree = r.outputs.tapTree.decode(e)));
                  break;
                case s.OutputTypes.TAP_BIP32_DERIVATION:
                  (void 0 === t.tapBip32Derivation &&
                    (t.tapBip32Derivation = []),
                    t.tapBip32Derivation.push(
                      r.outputs.tapBip32Derivation.decode(e),
                    ));
                  break;
                default:
                  (t.unknownKeyVals || (t.unknownKeyVals = []),
                    t.unknownKeyVals.push(e));
              }
            d.push(t);
          }
          return { globalMap: a, inputs: p, outputs: d };
        }
        ((e.psbtFromBuffer = u),
          (e.checkKeyBuffer = c),
          (e.psbtFromKeyVals = a));
      }).call(this, n(2).Buffer);
    },
    3710: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775),
          i = (t) => [...Array(t).keys()];
        function o(t) {
          if (t.key[0] !== r.GlobalTypes.GLOBAL_XPUB)
            throw new Error(
              "Decode Error: could not decode globalXpub with key 0x" +
                t.key.toString("hex"),
            );
          if (79 !== t.key.length || ![2, 3].includes(t.key[46]))
            throw new Error(
              "Decode Error: globalXpub has invalid extended pubkey in key 0x" +
                t.key.toString("hex"),
            );
          if ((t.value.length / 4) % 1 !== 0)
            throw new Error(
              "Decode Error: Global GLOBAL_XPUB value length should be multiple of 4",
            );
          const e = t.key.slice(1),
            n = {
              masterFingerprint: t.value.slice(0, 4),
              extendedPubkey: e,
              path: "m",
            };
          for (const r of i(t.value.length / 4 - 1)) {
            const e = t.value.readUInt32LE(4 * r + 4),
              i = !!(2147483648 & e),
              o = 2147483647 & e;
            n.path += "/" + o.toString(10) + (i ? "'" : "");
          }
          return n;
        }
        function s(e) {
          const n = t.from([r.GlobalTypes.GLOBAL_XPUB]),
            i = t.concat([n, e.extendedPubkey]),
            o = e.path.split("/"),
            s = t.allocUnsafe(4 * o.length);
          e.masterFingerprint.copy(s, 0);
          let u = 4;
          return (
            o.slice(1).forEach((t) => {
              const e = "'" === t.slice(-1);
              let n = 2147483647 & parseInt(e ? t.slice(0, -1) : t, 10);
              (e && (n += 2147483648), s.writeUInt32LE(n, u), (u += 4));
            }),
            { key: i, value: s }
          );
        }
        function u(e) {
          const n = e.extendedPubkey,
            r = e.masterFingerprint,
            i = e.path;
          return (
            t.isBuffer(n) &&
            78 === n.length &&
            [2, 3].indexOf(n[45]) > -1 &&
            t.isBuffer(r) &&
            4 === r.length &&
            "string" === typeof i &&
            !!i.match(/^m(\/\d+'?)*$/)
          );
        }
        function c(t, e, n) {
          const r = e.extendedPubkey.toString("hex");
          return (
            !n.has(r) &&
            (n.add(r),
            0 ===
              t.filter((t) => t.extendedPubkey.equals(e.extendedPubkey)).length)
          );
        }
        ((e.decode = o),
          (e.encode = s),
          (e.expected =
            "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }"),
          (e.check = u),
          (e.canAddToArray = c));
      }).call(this, n(2).Buffer);
    },
    3711: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775);
        function i(e) {
          return {
            key: t.from([r.GlobalTypes.UNSIGNED_TX]),
            value: e.toBuffer(),
          };
        }
        e.encode = i;
      }).call(this, n(2).Buffer);
    },
    3712: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775);
        function i(t) {
          if (t.key[0] !== r.InputTypes.FINAL_SCRIPTSIG)
            throw new Error(
              "Decode Error: could not decode finalScriptSig with key 0x" +
                t.key.toString("hex"),
            );
          return t.value;
        }
        function o(e) {
          const n = t.from([r.InputTypes.FINAL_SCRIPTSIG]);
          return { key: n, value: e };
        }
        function s(e) {
          return t.isBuffer(e);
        }
        function u(t, e) {
          return !!t && !!e && void 0 === t.finalScriptSig;
        }
        ((e.decode = i),
          (e.encode = o),
          (e.expected = "Buffer"),
          (e.check = s),
          (e.canAdd = u));
      }).call(this, n(2).Buffer);
    },
    3713: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775);
        function i(t) {
          if (t.key[0] !== r.InputTypes.FINAL_SCRIPTWITNESS)
            throw new Error(
              "Decode Error: could not decode finalScriptWitness with key 0x" +
                t.key.toString("hex"),
            );
          return t.value;
        }
        function o(e) {
          const n = t.from([r.InputTypes.FINAL_SCRIPTWITNESS]);
          return { key: n, value: e };
        }
        function s(e) {
          return t.isBuffer(e);
        }
        function u(t, e) {
          return !!t && !!e && void 0 === t.finalScriptWitness;
        }
        ((e.decode = i),
          (e.encode = o),
          (e.expected = "Buffer"),
          (e.check = s),
          (e.canAdd = u));
      }).call(this, n(2).Buffer);
    },
    3714: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775);
        function i(t) {
          if (t.key[0] !== r.InputTypes.NON_WITNESS_UTXO)
            throw new Error(
              "Decode Error: could not decode nonWitnessUtxo with key 0x" +
                t.key.toString("hex"),
            );
          return t.value;
        }
        function o(e) {
          return { key: t.from([r.InputTypes.NON_WITNESS_UTXO]), value: e };
        }
        function s(e) {
          return t.isBuffer(e);
        }
        function u(t, e) {
          return !!t && !!e && void 0 === t.nonWitnessUtxo;
        }
        ((e.decode = i),
          (e.encode = o),
          (e.expected = "Buffer"),
          (e.check = s),
          (e.canAdd = u));
      }).call(this, n(2).Buffer);
    },
    3715: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775);
        function i(t) {
          if (t.key[0] !== r.InputTypes.PARTIAL_SIG)
            throw new Error(
              "Decode Error: could not decode partialSig with key 0x" +
                t.key.toString("hex"),
            );
          if (
            (34 !== t.key.length && 66 !== t.key.length) ||
            ![2, 3, 4].includes(t.key[1])
          )
            throw new Error(
              "Decode Error: partialSig has invalid pubkey in key 0x" +
                t.key.toString("hex"),
            );
          const e = t.key.slice(1);
          return { pubkey: e, signature: t.value };
        }
        function o(e) {
          const n = t.from([r.InputTypes.PARTIAL_SIG]);
          return { key: t.concat([n, e.pubkey]), value: e.signature };
        }
        function s(e) {
          return (
            t.isBuffer(e.pubkey) &&
            t.isBuffer(e.signature) &&
            [33, 65].includes(e.pubkey.length) &&
            [2, 3, 4].includes(e.pubkey[0]) &&
            u(e.signature)
          );
        }
        function u(e) {
          if (!t.isBuffer(e) || e.length < 9) return !1;
          if (48 !== e[0]) return !1;
          if (e.length !== e[1] + 3) return !1;
          if (2 !== e[2]) return !1;
          const n = e[3];
          if (n > 33 || n < 1) return !1;
          if (2 !== e[3 + n + 1]) return !1;
          const r = e[3 + n + 2];
          return !(r > 33 || r < 1) && e.length === 3 + n + 2 + r + 2;
        }
        function c(t, e, n) {
          const r = e.pubkey.toString("hex");
          return (
            !n.has(r) &&
            (n.add(r), 0 === t.filter((t) => t.pubkey.equals(e.pubkey)).length)
          );
        }
        ((e.decode = i),
          (e.encode = o),
          (e.expected = "{ pubkey: Buffer; signature: Buffer; }"),
          (e.check = s),
          (e.canAddToArray = c));
      }).call(this, n(2).Buffer);
    },
    3716: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775);
        function i(t) {
          if (t.key[0] !== r.InputTypes.POR_COMMITMENT)
            throw new Error(
              "Decode Error: could not decode porCommitment with key 0x" +
                t.key.toString("hex"),
            );
          return t.value.toString("utf8");
        }
        function o(e) {
          const n = t.from([r.InputTypes.POR_COMMITMENT]);
          return { key: n, value: t.from(e, "utf8") };
        }
        function s(t) {
          return "string" === typeof t;
        }
        function u(t, e) {
          return !!t && !!e && void 0 === t.porCommitment;
        }
        ((e.decode = i),
          (e.encode = o),
          (e.expected = "string"),
          (e.check = s),
          (e.canAdd = u));
      }).call(this, n(2).Buffer);
    },
    3717: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775);
        function i(t) {
          if (t.key[0] !== r.InputTypes.SIGHASH_TYPE)
            throw new Error(
              "Decode Error: could not decode sighashType with key 0x" +
                t.key.toString("hex"),
            );
          return t.value.readUInt32LE(0);
        }
        function o(e) {
          const n = t.from([r.InputTypes.SIGHASH_TYPE]),
            i = t.allocUnsafe(4);
          return (i.writeUInt32LE(e, 0), { key: n, value: i });
        }
        function s(t) {
          return "number" === typeof t;
        }
        function u(t, e) {
          return !!t && !!e && void 0 === t.sighashType;
        }
        ((e.decode = i),
          (e.encode = o),
          (e.expected = "number"),
          (e.check = s),
          (e.canAdd = u));
      }).call(this, n(2).Buffer);
    },
    3718: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775);
        function i(t) {
          if (t.key[0] !== r.InputTypes.TAP_KEY_SIG || 1 !== t.key.length)
            throw new Error(
              "Decode Error: could not decode tapKeySig with key 0x" +
                t.key.toString("hex"),
            );
          if (!s(t.value))
            throw new Error(
              "Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature",
            );
          return t.value;
        }
        function o(e) {
          const n = t.from([r.InputTypes.TAP_KEY_SIG]);
          return { key: n, value: e };
        }
        function s(e) {
          return t.isBuffer(e) && (64 === e.length || 65 === e.length);
        }
        function u(t, e) {
          return !!t && !!e && void 0 === t.tapKeySig;
        }
        ((e.decode = i),
          (e.encode = o),
          (e.expected = "Buffer"),
          (e.check = s),
          (e.canAdd = u));
      }).call(this, n(2).Buffer);
    },
    3719: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775);
        function i(t) {
          if (t.key[0] !== r.InputTypes.TAP_LEAF_SCRIPT)
            throw new Error(
              "Decode Error: could not decode tapLeafScript with key 0x" +
                t.key.toString("hex"),
            );
          if ((t.key.length - 2) % 32 !== 0)
            throw new Error(
              "Decode Error: tapLeafScript has invalid control block in key 0x" +
                t.key.toString("hex"),
            );
          const e = t.value[t.value.length - 1];
          if ((254 & t.key[1]) !== e)
            throw new Error(
              "Decode Error: tapLeafScript bad leaf version in key 0x" +
                t.key.toString("hex"),
            );
          const n = t.value.slice(0, -1),
            i = t.key.slice(1);
          return { controlBlock: i, script: n, leafVersion: e };
        }
        function o(e) {
          const n = t.from([r.InputTypes.TAP_LEAF_SCRIPT]),
            i = t.from([e.leafVersion]);
          return {
            key: t.concat([n, e.controlBlock]),
            value: t.concat([e.script, i]),
          };
        }
        function s(e) {
          return (
            t.isBuffer(e.controlBlock) &&
            (e.controlBlock.length - 1) % 32 === 0 &&
            (254 & e.controlBlock[0]) === e.leafVersion &&
            t.isBuffer(e.script)
          );
        }
        function u(t, e, n) {
          const r = e.controlBlock.toString("hex");
          return (
            !n.has(r) &&
            (n.add(r),
            0 === t.filter((t) => t.controlBlock.equals(e.controlBlock)).length)
          );
        }
        ((e.decode = i),
          (e.encode = o),
          (e.expected =
            "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }"),
          (e.check = s),
          (e.canAddToArray = u));
      }).call(this, n(2).Buffer);
    },
    3720: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775);
        function i(t) {
          if (t.key[0] !== r.InputTypes.TAP_MERKLE_ROOT || 1 !== t.key.length)
            throw new Error(
              "Decode Error: could not decode tapMerkleRoot with key 0x" +
                t.key.toString("hex"),
            );
          if (!s(t.value))
            throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
          return t.value;
        }
        function o(e) {
          const n = t.from([r.InputTypes.TAP_MERKLE_ROOT]);
          return { key: n, value: e };
        }
        function s(e) {
          return t.isBuffer(e) && 32 === e.length;
        }
        function u(t, e) {
          return !!t && !!e && void 0 === t.tapMerkleRoot;
        }
        ((e.decode = i),
          (e.encode = o),
          (e.expected = "Buffer"),
          (e.check = s),
          (e.canAdd = u));
      }).call(this, n(2).Buffer);
    },
    3721: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775);
        function i(t) {
          if (t.key[0] !== r.InputTypes.TAP_SCRIPT_SIG)
            throw new Error(
              "Decode Error: could not decode tapScriptSig with key 0x" +
                t.key.toString("hex"),
            );
          if (65 !== t.key.length)
            throw new Error(
              "Decode Error: tapScriptSig has invalid key 0x" +
                t.key.toString("hex"),
            );
          if (64 !== t.value.length && 65 !== t.value.length)
            throw new Error(
              "Decode Error: tapScriptSig has invalid signature in key 0x" +
                t.key.toString("hex"),
            );
          const e = t.key.slice(1, 33),
            n = t.key.slice(33);
          return { pubkey: e, leafHash: n, signature: t.value };
        }
        function o(e) {
          const n = t.from([r.InputTypes.TAP_SCRIPT_SIG]);
          return {
            key: t.concat([n, e.pubkey, e.leafHash]),
            value: e.signature,
          };
        }
        function s(e) {
          return (
            t.isBuffer(e.pubkey) &&
            t.isBuffer(e.leafHash) &&
            t.isBuffer(e.signature) &&
            32 === e.pubkey.length &&
            32 === e.leafHash.length &&
            (64 === e.signature.length || 65 === e.signature.length)
          );
        }
        function u(t, e, n) {
          const r = e.pubkey.toString("hex") + e.leafHash.toString("hex");
          return (
            !n.has(r) &&
            (n.add(r),
            0 ===
              t.filter(
                (t) =>
                  t.pubkey.equals(e.pubkey) && t.leafHash.equals(e.leafHash),
              ).length)
          );
        }
        ((e.decode = i),
          (e.encode = o),
          (e.expected =
            "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }"),
          (e.check = s),
          (e.canAddToArray = u));
      }).call(this, n(2).Buffer);
    },
    3722: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775),
          i = n(3112),
          o = n(2918);
        function s(t) {
          if (t.key[0] !== r.InputTypes.WITNESS_UTXO)
            throw new Error(
              "Decode Error: could not decode witnessUtxo with key 0x" +
                t.key.toString("hex"),
            );
          const e = i.readUInt64LE(t.value, 0);
          let n = 8;
          const s = o.decode(t.value, n);
          n += o.encodingLength(s);
          const u = t.value.slice(n);
          if (u.length !== s)
            throw new Error(
              "Decode Error: WITNESS_UTXO script is not proper length",
            );
          return { script: u, value: e };
        }
        function u(e) {
          const { script: n, value: s } = e,
            u = o.encodingLength(n.length),
            c = t.allocUnsafe(8 + u + n.length);
          return (
            i.writeUInt64LE(c, s, 0),
            o.encode(n.length, c, 8),
            n.copy(c, 8 + u),
            { key: t.from([r.InputTypes.WITNESS_UTXO]), value: c }
          );
        }
        function c(e) {
          return t.isBuffer(e.script) && "number" === typeof e.value;
        }
        function a(t, e) {
          return !!t && !!e && void 0 === t.witnessUtxo;
        }
        ((e.decode = s),
          (e.encode = u),
          (e.expected = "{ script: Buffer; value: number; }"),
          (e.check = c),
          (e.canAdd = a));
      }).call(this, n(2).Buffer);
    },
    3723: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2775),
          i = n(2918);
        function o(t) {
          if (t.key[0] !== r.OutputTypes.TAP_TREE || 1 !== t.key.length)
            throw new Error(
              "Decode Error: could not decode tapTree with key 0x" +
                t.key.toString("hex"),
            );
          let e = 0;
          const n = [];
          while (e < t.value.length) {
            const r = t.value[e++],
              o = t.value[e++],
              s = i.decode(t.value, e);
            ((e += i.encodingLength(s)),
              n.push({
                depth: r,
                leafVersion: o,
                script: t.value.slice(e, e + s),
              }),
              (e += s));
          }
          return { leaves: n };
        }
        function s(e) {
          const n = t.from([r.OutputTypes.TAP_TREE]),
            o = [].concat(
              ...e.leaves.map((e) => [
                t.of(e.depth, e.leafVersion),
                i.encode(e.script.length),
                e.script,
              ]),
            );
          return { key: n, value: t.concat(o) };
        }
        function u(e) {
          return (
            Array.isArray(e.leaves) &&
            e.leaves.every(
              (e) =>
                e.depth >= 0 &&
                e.depth <= 128 &&
                (254 & e.leafVersion) === e.leafVersion &&
                t.isBuffer(e.script),
            )
          );
        }
        function c(t, e) {
          return !!t && !!e && void 0 === t.tapTree;
        }
        ((e.decode = o),
          (e.encode = s),
          (e.expected =
            "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }"),
          (e.check = u),
          (e.canAdd = c));
      }).call(this, n(2).Buffer);
    },
    3724: function (t, e, n) {
      "use strict";
      function r(t) {
        return e;
        function e(e) {
          let n;
          if (
            t.includes(e.key[0]) &&
            ((n = e.key.slice(1)),
            (33 !== n.length && 65 !== n.length) || ![2, 3, 4].includes(n[0]))
          )
            throw new Error(
              "Format Error: invalid pubkey in key 0x" + e.key.toString("hex"),
            );
          return n;
        }
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.makeChecker = r));
    },
    3725: function (t, e, n) {
      "use strict";
      (function (t) {
        function n(e) {
          function n(t) {
            if (t.key[0] !== e)
              throw new Error(
                "Decode Error: could not decode redeemScript with key 0x" +
                  t.key.toString("hex"),
              );
            return t.value;
          }
          function r(n) {
            const r = t.from([e]);
            return { key: r, value: n };
          }
          const i = "Buffer";
          function o(e) {
            return t.isBuffer(e);
          }
          function s(t, e) {
            return !!t && !!e && void 0 === t.redeemScript;
          }
          return { decode: n, encode: r, check: o, expected: i, canAdd: s };
        }
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.makeConverter = n));
      }).call(this, n(2).Buffer);
    },
    3726: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(2918),
          i = n(3308),
          o = (t) => 32 === t.length;
        function s(e) {
          const n = i.makeConverter(e, o);
          function s(t) {
            const e = r.decode(t.value),
              i = r.encodingLength(e),
              o = n.decode({ key: t.key, value: t.value.slice(i + 32 * e) }),
              s = new Array(e);
            for (let n = 0, r = i; n < e; n++, r += 32)
              s[n] = t.value.slice(r, r + 32);
            return Object.assign({}, o, { leafHashes: s });
          }
          function u(e) {
            const i = n.encode(e),
              o = r.encodingLength(e.leafHashes.length),
              s = t.allocUnsafe(o);
            r.encode(e.leafHashes.length, s);
            const u = t.concat([s, ...e.leafHashes, i.value]);
            return Object.assign({}, i, { value: u });
          }
          const c =
            "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
          function a(e) {
            return (
              Array.isArray(e.leafHashes) &&
              e.leafHashes.every((e) => t.isBuffer(e) && 32 === e.length) &&
              n.check(e)
            );
          }
          return {
            decode: s,
            encode: u,
            check: a,
            expected: c,
            canAddToArray: n.canAddToArray,
          };
        }
        e.makeConverter = s;
      }).call(this, n(2).Buffer);
    },
    3727: function (t, e, n) {
      "use strict";
      (function (t) {
        function n(e) {
          function n(t) {
            if (t.key[0] !== e || 1 !== t.key.length)
              throw new Error(
                "Decode Error: could not decode tapInternalKey with key 0x" +
                  t.key.toString("hex"),
              );
            if (32 !== t.value.length)
              throw new Error(
                "Decode Error: tapInternalKey not a 32-byte x-only pubkey",
              );
            return t.value;
          }
          function r(n) {
            const r = t.from([e]);
            return { key: r, value: n };
          }
          const i = "Buffer";
          function o(e) {
            return t.isBuffer(e) && 32 === e.length;
          }
          function s(t, e) {
            return !!t && !!e && void 0 === t.tapInternalKey;
          }
          return { decode: n, encode: r, check: o, expected: i, canAdd: s };
        }
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.makeConverter = n));
      }).call(this, n(2).Buffer);
    },
    3728: function (t, e, n) {
      "use strict";
      (function (t) {
        function n(e) {
          function n(t) {
            if (t.key[0] !== e)
              throw new Error(
                "Decode Error: could not decode witnessScript with key 0x" +
                  t.key.toString("hex"),
              );
            return t.value;
          }
          function r(n) {
            const r = t.from([e]);
            return { key: r, value: n };
          }
          const i = "Buffer";
          function o(e) {
            return t.isBuffer(e);
          }
          function s(t, e) {
            return !!t && !!e && void 0 === t.witnessScript;
          }
          return { decode: n, encode: r, check: o, expected: i, canAdd: s };
        }
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.makeConverter = n));
      }).call(this, n(2).Buffer);
    },
    3729: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const r = n(3111),
          i = n(3112);
        function o(e) {
          let { globalMap: n, inputs: r, outputs: o } = e;
          const {
              globalKeyVals: s,
              inputKeyVals: u,
              outputKeyVals: a,
            } = c({ globalMap: n, inputs: r, outputs: o }),
            h = i.keyValsToBuffer(s),
            f = (e) =>
              0 === e.length ? [t.from([0])] : e.map(i.keyValsToBuffer),
            l = f(u),
            p = f(a),
            d = t.allocUnsafe(5);
          return (
            d.writeUIntBE(482972169471, 0, 5),
            t.concat([d, h].concat(l, p))
          );
        }
        e.psbtToBuffer = o;
        const s = (t, e) => t.key.compare(e.key);
        function u(t, e) {
          const n = new Set(),
            r = Object.entries(t).reduce((t, r) => {
              let [i, o] = r;
              if ("unknownKeyVals" === i) return t;
              const s = e[i];
              if (void 0 === s) return t;
              const u = (Array.isArray(o) ? o : [o]).map(s.encode),
                c = u.map((t) => t.key.toString("hex"));
              return (
                c.forEach((t) => {
                  if (n.has(t))
                    throw new Error("Serialize Error: Duplicate key: " + t);
                  n.add(t);
                }),
                t.concat(u)
              );
            }, []),
            i = t.unknownKeyVals
              ? t.unknownKeyVals.filter((t) => !n.has(t.key.toString("hex")))
              : [];
          return r.concat(i).sort(s);
        }
        function c(t) {
          let { globalMap: e, inputs: n, outputs: i } = t;
          return {
            globalKeyVals: u(e, r.globals),
            inputKeyVals: n.map((t) => u(t, r.inputs)),
            outputKeyVals: i.map((t) => u(t, r.outputs)),
          };
        }
        e.psbtToKeyVals = c;
      }).call(this, n(2).Buffer);
    },
    3792: function (t, e, n) {
      "use strict";
      (function (t) {
        var r = e;
        function i(t, e, n) {
          for (var r = Object.keys(e), i = 0; i < r.length; ++i)
            (void 0 !== t[r[i]] && n) || (t[r[i]] = e[r[i]]);
          return t;
        }
        function o(t) {
          function e(t, n) {
            if (!(this instanceof e)) return new e(t, n);
            (Object.defineProperty(this, "message", {
              get: function () {
                return t;
              },
            }),
              Error.captureStackTrace
                ? Error.captureStackTrace(this, e)
                : Object.defineProperty(this, "stack", {
                    value: new Error().stack || "",
                  }),
              n && i(this, n));
          }
          return (
            (e.prototype = Object.create(Error.prototype, {
              constructor: {
                value: e,
                writable: !0,
                enumerable: !1,
                configurable: !0,
              },
              name: {
                get: function () {
                  return t;
                },
                set: void 0,
                enumerable: !1,
                configurable: !0,
              },
              toString: {
                value: function () {
                  return this.name + ": " + this.message;
                },
                writable: !0,
                enumerable: !1,
                configurable: !0,
              },
            })),
            e
          );
        }
        ((r.asPromise = n(3021)),
          (r.base64 = n(3022)),
          (r.EventEmitter = n(3023)),
          (r.float = n(3024)),
          (r.inquire = n(3025)),
          (r.utf8 = n(3026)),
          (r.pool = n(3027)),
          (r.LongBits = n(8421)),
          (r.isNode = Boolean(
            "undefined" !== typeof t &&
            t &&
            t.process &&
            t.process.versions &&
            t.process.versions.node,
          )),
          (r.global =
            (r.isNode && t) ||
            ("undefined" !== typeof window && window) ||
            ("undefined" !== typeof self && self) ||
            this),
          (r.emptyArray = Object.freeze ? Object.freeze([]) : []),
          (r.emptyObject = Object.freeze ? Object.freeze({}) : {}),
          (r.isInteger =
            Number.isInteger ||
            function (t) {
              return (
                "number" === typeof t && isFinite(t) && Math.floor(t) === t
              );
            }),
          (r.isString = function (t) {
            return "string" === typeof t || t instanceof String;
          }),
          (r.isObject = function (t) {
            return t && "object" === typeof t;
          }),
          (r.isset = r.isSet =
            function (t, e) {
              var n = t[e];
              return (
                !(null == n || !t.hasOwnProperty(e)) &&
                ("object" !== typeof n ||
                  (Array.isArray(n) ? n.length : Object.keys(n).length) > 0)
              );
            }),
          (r.Buffer = (function () {
            try {
              var t = r.inquire("buffer").Buffer;
              return t.prototype.utf8Write ? t : null;
            } catch (e) {
              return null;
            }
          })()),
          (r._Buffer_from = null),
          (r._Buffer_allocUnsafe = null),
          (r.newBuffer = function (t) {
            return "number" === typeof t
              ? r.Buffer
                ? r._Buffer_allocUnsafe(t)
                : new r.Array(t)
              : r.Buffer
                ? r._Buffer_from(t)
                : "undefined" === typeof Uint8Array
                  ? t
                  : new Uint8Array(t);
          }),
          (r.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array),
          (r.Long =
            (r.global.dcodeIO && r.global.dcodeIO.Long) ||
            r.global.Long ||
            r.inquire("long")),
          (r.key2Re = /^true|false|0|1$/),
          (r.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
          (r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
          (r.longToHash = function (t) {
            return t ? r.LongBits.from(t).toHash() : r.LongBits.zeroHash;
          }),
          (r.longFromHash = function (t, e) {
            var n = r.LongBits.fromHash(t);
            return r.Long
              ? r.Long.fromBits(n.lo, n.hi, e)
              : n.toNumber(Boolean(e));
          }),
          (r.merge = i),
          (r.lcFirst = function (t) {
            return t.charAt(0).toLowerCase() + t.substring(1);
          }),
          (r.newError = o),
          (r.ProtocolError = o("ProtocolError")),
          (r.oneOfGetter = function (t) {
            for (var e = {}, n = 0; n < t.length; ++n) e[t[n]] = 1;
            return function () {
              for (var t = Object.keys(this), n = t.length - 1; n > -1; --n)
                if (
                  1 === e[t[n]] &&
                  void 0 !== this[t[n]] &&
                  null !== this[t[n]]
                )
                  return t[n];
            };
          }),
          (r.oneOfSetter = function (t) {
            return function (e) {
              for (var n = 0; n < t.length; ++n)
                t[n] !== e && delete this[t[n]];
            };
          }),
          (r.toJSONOptions = {
            longs: String,
            enums: String,
            bytes: String,
            json: !0,
          }),
          (r._configure = function () {
            var t = r.Buffer;
            t
              ? ((r._Buffer_from =
                  (t.from !== Uint8Array.from && t.from) ||
                  function (e, n) {
                    return new t(e, n);
                  }),
                (r._Buffer_allocUnsafe =
                  t.allocUnsafe ||
                  function (e) {
                    return new t(e);
                  }))
              : (r._Buffer_from = r._Buffer_allocUnsafe = null);
          }));
      }).call(this, n(13));
    },
    6265: function (t, e, n) {
      "use strict";
      t.exports = f;
      var r,
        i = n(3792),
        o = i.LongBits,
        s = i.base64,
        u = i.utf8;
      function c(t, e, n) {
        ((this.fn = t), (this.len = e), (this.next = void 0), (this.val = n));
      }
      function a() {}
      function h(t) {
        ((this.head = t.head),
          (this.tail = t.tail),
          (this.len = t.len),
          (this.next = t.states));
      }
      function f() {
        ((this.len = 0),
          (this.head = new c(a, 0, 0)),
          (this.tail = this.head),
          (this.states = null));
      }
      var l = function () {
        return i.Buffer
          ? function () {
              return (f.create = function () {
                return new r();
              })();
            }
          : function () {
              return new f();
            };
      };
      function p(t, e, n) {
        e[n] = 255 & t;
      }
      function d(t, e, n) {
        while (t > 127) ((e[n++] = (127 & t) | 128), (t >>>= 7));
        e[n] = t;
      }
      function y(t, e) {
        ((this.len = t), (this.next = void 0), (this.val = e));
      }
      function g(t, e, n) {
        while (t.hi)
          ((e[n++] = (127 & t.lo) | 128),
            (t.lo = ((t.lo >>> 7) | (t.hi << 25)) >>> 0),
            (t.hi >>>= 7));
        while (t.lo > 127) ((e[n++] = (127 & t.lo) | 128), (t.lo = t.lo >>> 7));
        e[n++] = t.lo;
      }
      function w(t, e, n) {
        ((e[n] = 255 & t),
          (e[n + 1] = (t >>> 8) & 255),
          (e[n + 2] = (t >>> 16) & 255),
          (e[n + 3] = t >>> 24));
      }
      ((f.create = l()),
        (f.alloc = function (t) {
          return new i.Array(t);
        }),
        i.Array !== Array &&
          (f.alloc = i.pool(f.alloc, i.Array.prototype.subarray)),
        (f.prototype._push = function (t, e, n) {
          return (
            (this.tail = this.tail.next = new c(t, e, n)),
            (this.len += e),
            this
          );
        }),
        (y.prototype = Object.create(c.prototype)),
        (y.prototype.fn = d),
        (f.prototype.uint32 = function (t) {
          return (
            (this.len += (this.tail = this.tail.next =
              new y(
                (t >>>= 0) < 128
                  ? 1
                  : t < 16384
                    ? 2
                    : t < 2097152
                      ? 3
                      : t < 268435456
                        ? 4
                        : 5,
                t,
              )).len),
            this
          );
        }),
        (f.prototype.int32 = function (t) {
          return t < 0 ? this._push(g, 10, o.fromNumber(t)) : this.uint32(t);
        }),
        (f.prototype.sint32 = function (t) {
          return this.uint32(((t << 1) ^ (t >> 31)) >>> 0);
        }),
        (f.prototype.uint64 = function (t) {
          var e = o.from(t);
          return this._push(g, e.length(), e);
        }),
        (f.prototype.int64 = f.prototype.uint64),
        (f.prototype.sint64 = function (t) {
          var e = o.from(t).zzEncode();
          return this._push(g, e.length(), e);
        }),
        (f.prototype.bool = function (t) {
          return this._push(p, 1, t ? 1 : 0);
        }),
        (f.prototype.fixed32 = function (t) {
          return this._push(w, 4, t >>> 0);
        }),
        (f.prototype.sfixed32 = f.prototype.fixed32),
        (f.prototype.fixed64 = function (t) {
          var e = o.from(t);
          return this._push(w, 4, e.lo)._push(w, 4, e.hi);
        }),
        (f.prototype.sfixed64 = f.prototype.fixed64),
        (f.prototype.float = function (t) {
          return this._push(i.float.writeFloatLE, 4, t);
        }),
        (f.prototype.double = function (t) {
          return this._push(i.float.writeDoubleLE, 8, t);
        }));
      var E = i.Array.prototype.set
        ? function (t, e, n) {
            e.set(t, n);
          }
        : function (t, e, n) {
            for (var r = 0; r < t.length; ++r) e[n + r] = t[r];
          };
      ((f.prototype.bytes = function (t) {
        var e = t.length >>> 0;
        if (!e) return this._push(p, 1, 0);
        if (i.isString(t)) {
          var n = f.alloc((e = s.length(t)));
          (s.decode(t, n, 0), (t = n));
        }
        return this.uint32(e)._push(E, e, t);
      }),
        (f.prototype.string = function (t) {
          var e = u.length(t);
          return e ? this.uint32(e)._push(u.write, e, t) : this._push(p, 1, 0);
        }),
        (f.prototype.fork = function () {
          return (
            (this.states = new h(this)),
            (this.head = this.tail = new c(a, 0, 0)),
            (this.len = 0),
            this
          );
        }),
        (f.prototype.reset = function () {
          return (
            this.states
              ? ((this.head = this.states.head),
                (this.tail = this.states.tail),
                (this.len = this.states.len),
                (this.states = this.states.next))
              : ((this.head = this.tail = new c(a, 0, 0)), (this.len = 0)),
            this
          );
        }),
        (f.prototype.ldelim = function () {
          var t = this.head,
            e = this.tail,
            n = this.len;
          return (
            this.reset().uint32(n),
            n && ((this.tail.next = t.next), (this.tail = e), (this.len += n)),
            this
          );
        }),
        (f.prototype.finish = function () {
          var t = this.head.next,
            e = this.constructor.alloc(this.len),
            n = 0;
          while (t) (t.fn(t.val, e, n), (n += t.len), (t = t.next));
          return e;
        }),
        (f._configure = function (t) {
          ((r = t), (f.create = l()), r._configure());
        }));
    },
    6266: function (t, e, n) {
      "use strict";
      t.exports = c;
      var r,
        i = n(3792),
        o = i.LongBits,
        s = i.utf8;
      function u(t, e) {
        return RangeError(
          "index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len,
        );
      }
      function c(t) {
        ((this.buf = t), (this.pos = 0), (this.len = t.length));
      }
      var a =
          "undefined" !== typeof Uint8Array
            ? function (t) {
                if (t instanceof Uint8Array || Array.isArray(t))
                  return new c(t);
                throw Error("illegal buffer");
              }
            : function (t) {
                if (Array.isArray(t)) return new c(t);
                throw Error("illegal buffer");
              },
        h = function () {
          return i.Buffer
            ? function (t) {
                return (c.create = function (t) {
                  return i.Buffer.isBuffer(t) ? new r(t) : a(t);
                })(t);
              }
            : a;
        };
      function f() {
        var t = new o(0, 0),
          e = 0;
        if (!(this.len - this.pos > 4)) {
          for (; e < 3; ++e) {
            if (this.pos >= this.len) throw u(this);
            if (
              ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * e))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
          return (
            (t.lo = (t.lo | ((127 & this.buf[this.pos++]) << (7 * e))) >>> 0),
            t
          );
        }
        for (; e < 4; ++e)
          if (
            ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << (7 * e))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return t;
        if (
          ((t.lo = (t.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
          (t.hi = (t.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return t;
        if (((e = 0), this.len - this.pos > 4)) {
          for (; e < 5; ++e)
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * e + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
        } else
          for (; e < 5; ++e) {
            if (this.pos >= this.len) throw u(this);
            if (
              ((t.hi =
                (t.hi | ((127 & this.buf[this.pos]) << (7 * e + 3))) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
          }
        throw Error("invalid varint encoding");
      }
      function l(t, e) {
        return (
          (t[e - 4] | (t[e - 3] << 8) | (t[e - 2] << 16) | (t[e - 1] << 24)) >>>
          0
        );
      }
      function p() {
        if (this.pos + 8 > this.len) throw u(this, 8);
        return new o(
          l(this.buf, (this.pos += 4)),
          l(this.buf, (this.pos += 4)),
        );
      }
      ((c.create = h()),
        (c.prototype._slice =
          i.Array.prototype.subarray || i.Array.prototype.slice),
        (c.prototype.uint32 = (function () {
          var t = 4294967295;
          return function () {
            if (
              ((t = (127 & this.buf[this.pos]) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((127 & this.buf[this.pos]) << 7)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((127 & this.buf[this.pos]) << 14)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((127 & this.buf[this.pos]) << 21)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if (
              ((t = (t | ((15 & this.buf[this.pos]) << 28)) >>> 0),
              this.buf[this.pos++] < 128)
            )
              return t;
            if ((this.pos += 5) > this.len)
              throw ((this.pos = this.len), u(this, 10));
            return t;
          };
        })()),
        (c.prototype.int32 = function () {
          return 0 | this.uint32();
        }),
        (c.prototype.sint32 = function () {
          var t = this.uint32();
          return ((t >>> 1) ^ -(1 & t)) | 0;
        }),
        (c.prototype.bool = function () {
          return 0 !== this.uint32();
        }),
        (c.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) throw u(this, 4);
          return l(this.buf, (this.pos += 4));
        }),
        (c.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) throw u(this, 4);
          return 0 | l(this.buf, (this.pos += 4));
        }),
        (c.prototype.float = function () {
          if (this.pos + 4 > this.len) throw u(this, 4);
          var t = i.float.readFloatLE(this.buf, this.pos);
          return ((this.pos += 4), t);
        }),
        (c.prototype.double = function () {
          if (this.pos + 8 > this.len) throw u(this, 4);
          var t = i.float.readDoubleLE(this.buf, this.pos);
          return ((this.pos += 8), t);
        }),
        (c.prototype.bytes = function () {
          var t = this.uint32(),
            e = this.pos,
            n = this.pos + t;
          if (n > this.len) throw u(this, t);
          if (((this.pos += t), Array.isArray(this.buf)))
            return this.buf.slice(e, n);
          if (e === n) {
            var r = i.Buffer;
            return r ? r.alloc(0) : new this.buf.constructor(0);
          }
          return this._slice.call(this.buf, e, n);
        }),
        (c.prototype.string = function () {
          var t = this.bytes();
          return s.read(t, 0, t.length);
        }),
        (c.prototype.skip = function (t) {
          if ("number" === typeof t) {
            if (this.pos + t > this.len) throw u(this, t);
            this.pos += t;
          } else
            do {
              if (this.pos >= this.len) throw u(this);
            } while (128 & this.buf[this.pos++]);
          return this;
        }),
        (c.prototype.skipType = function (t) {
          switch (t) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              while (4 !== (t = 7 & this.uint32())) this.skipType(t);
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + t + " at offset " + this.pos);
          }
          return this;
        }),
        (c._configure = function (t) {
          ((r = t), (c.create = h()), r._configure());
          var e = i.Long ? "toLong" : "toNumber";
          i.merge(c.prototype, {
            int64: function () {
              return f.call(this)[e](!1);
            },
            uint64: function () {
              return f.call(this)[e](!0);
            },
            sint64: function () {
              return f.call(this).zzDecode()[e](!1);
            },
            fixed64: function () {
              return p.call(this)[e](!0);
            },
            sfixed64: function () {
              return p.call(this)[e](!1);
            },
          });
        }));
    },
    8418: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.BabylonEpochingV1Tx = void 0));
      var r = i(n(8419));
      function i(t, e) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (i = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = e ? r : n)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const n in t)
            "default" !== n &&
              {}.hasOwnProperty.call(t, n) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, n)) &&
              (o.get || o.set)
                ? i(s, n, o)
                : (s[n] = t[n]));
          return s;
        })(t, e);
      }
      e.BabylonEpochingV1Tx = r;
    },
    8420: function (t, e, n) {
      "use strict";
      var r = e;
      function i() {
        (r.util._configure(),
          r.Writer._configure(r.BufferWriter),
          r.Reader._configure(r.BufferReader));
      }
      ((r.build = "minimal"),
        (r.Writer = n(6265)),
        (r.BufferWriter = n(8422)),
        (r.Reader = n(6266)),
        (r.BufferReader = n(8423)),
        (r.util = n(3792)),
        (r.rpc = n(8424)),
        (r.roots = n(8426)),
        (r.configure = i),
        i());
    },
    8421: function (t, e, n) {
      "use strict";
      t.exports = i;
      var r = n(3792);
      function i(t, e) {
        ((this.lo = t >>> 0), (this.hi = e >>> 0));
      }
      var o = (i.zero = new i(0, 0));
      ((o.toNumber = function () {
        return 0;
      }),
        (o.zzEncode = o.zzDecode =
          function () {
            return this;
          }),
        (o.length = function () {
          return 1;
        }));
      var s = (i.zeroHash = "\0\0\0\0\0\0\0\0");
      ((i.fromNumber = function (t) {
        if (0 === t) return o;
        var e = t < 0;
        e && (t = -t);
        var n = t >>> 0,
          r = ((t - n) / 4294967296) >>> 0;
        return (
          e &&
            ((r = ~r >>> 0),
            (n = ~n >>> 0),
            ++n > 4294967295 && ((n = 0), ++r > 4294967295 && (r = 0))),
          new i(n, r)
        );
      }),
        (i.from = function (t) {
          if ("number" === typeof t) return i.fromNumber(t);
          if (r.isString(t)) {
            if (!r.Long) return i.fromNumber(parseInt(t, 10));
            t = r.Long.fromString(t);
          }
          return t.low || t.high ? new i(t.low >>> 0, t.high >>> 0) : o;
        }),
        (i.prototype.toNumber = function (t) {
          if (!t && this.hi >>> 31) {
            var e = (1 + ~this.lo) >>> 0,
              n = ~this.hi >>> 0;
            return (e || (n = (n + 1) >>> 0), -(e + 4294967296 * n));
          }
          return this.lo + 4294967296 * this.hi;
        }),
        (i.prototype.toLong = function (t) {
          return r.Long
            ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(t))
            : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(t) };
        }));
      var u = String.prototype.charCodeAt;
      ((i.fromHash = function (t) {
        return t === s
          ? o
          : new i(
              (u.call(t, 0) |
                (u.call(t, 1) << 8) |
                (u.call(t, 2) << 16) |
                (u.call(t, 3) << 24)) >>>
                0,
              (u.call(t, 4) |
                (u.call(t, 5) << 8) |
                (u.call(t, 6) << 16) |
                (u.call(t, 7) << 24)) >>>
                0,
            );
      }),
        (i.prototype.toHash = function () {
          return String.fromCharCode(
            255 & this.lo,
            (this.lo >>> 8) & 255,
            (this.lo >>> 16) & 255,
            this.lo >>> 24,
            255 & this.hi,
            (this.hi >>> 8) & 255,
            (this.hi >>> 16) & 255,
            this.hi >>> 24,
          );
        }),
        (i.prototype.zzEncode = function () {
          var t = this.hi >> 31;
          return (
            (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ t) >>> 0),
            (this.lo = ((this.lo << 1) ^ t) >>> 0),
            this
          );
        }),
        (i.prototype.zzDecode = function () {
          var t = -(1 & this.lo);
          return (
            (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ t) >>> 0),
            (this.hi = ((this.hi >>> 1) ^ t) >>> 0),
            this
          );
        }),
        (i.prototype.length = function () {
          var t = this.lo,
            e = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
            n = this.hi >>> 24;
          return 0 === n
            ? 0 === e
              ? t < 16384
                ? t < 128
                  ? 1
                  : 2
                : t < 2097152
                  ? 3
                  : 4
              : e < 16384
                ? e < 128
                  ? 5
                  : 6
                : e < 2097152
                  ? 7
                  : 8
            : n < 128
              ? 9
              : 10;
        }));
    },
    8422: function (t, e, n) {
      "use strict";
      t.exports = o;
      var r = n(6265);
      (o.prototype = Object.create(r.prototype)).constructor = o;
      var i = n(3792);
      function o() {
        r.call(this);
      }
      function s(t, e, n) {
        t.length < 40
          ? i.utf8.write(t, e, n)
          : e.utf8Write
            ? e.utf8Write(t, n)
            : e.write(t, n);
      }
      ((o._configure = function () {
        ((o.alloc = i._Buffer_allocUnsafe),
          (o.writeBytesBuffer =
            i.Buffer &&
            i.Buffer.prototype instanceof Uint8Array &&
            "set" === i.Buffer.prototype.set.name
              ? function (t, e, n) {
                  e.set(t, n);
                }
              : function (t, e, n) {
                  if (t.copy) t.copy(e, n, 0, t.length);
                  else for (var r = 0; r < t.length; ) e[n++] = t[r++];
                }));
      }),
        (o.prototype.bytes = function (t) {
          i.isString(t) && (t = i._Buffer_from(t, "base64"));
          var e = t.length >>> 0;
          return (
            this.uint32(e),
            e && this._push(o.writeBytesBuffer, e, t),
            this
          );
        }),
        (o.prototype.string = function (t) {
          var e = i.Buffer.byteLength(t);
          return (this.uint32(e), e && this._push(s, e, t), this);
        }),
        o._configure());
    },
    8423: function (t, e, n) {
      "use strict";
      t.exports = o;
      var r = n(6266);
      (o.prototype = Object.create(r.prototype)).constructor = o;
      var i = n(3792);
      function o(t) {
        r.call(this, t);
      }
      ((o._configure = function () {
        i.Buffer && (o.prototype._slice = i.Buffer.prototype.slice);
      }),
        (o.prototype.string = function () {
          var t = this.uint32();
          return this.buf.utf8Slice
            ? this.buf.utf8Slice(
                this.pos,
                (this.pos = Math.min(this.pos + t, this.len)),
              )
            : this.buf.toString(
                "utf-8",
                this.pos,
                (this.pos = Math.min(this.pos + t, this.len)),
              );
        }),
        o._configure());
    },
    8424: function (t, e, n) {
      "use strict";
      var r = e;
      r.Service = n(8425);
    },
    8425: function (t, e, n) {
      "use strict";
      t.exports = i;
      var r = n(3792);
      function i(t, e, n) {
        if ("function" !== typeof t)
          throw TypeError("rpcImpl must be a function");
        (r.EventEmitter.call(this),
          (this.rpcImpl = t),
          (this.requestDelimited = Boolean(e)),
          (this.responseDelimited = Boolean(n)));
      }
      (((i.prototype = Object.create(r.EventEmitter.prototype)).constructor =
        i),
        (i.prototype.rpcCall = function t(e, n, i, o, s) {
          if (!o) throw TypeError("request must be specified");
          var u = this;
          if (!s) return r.asPromise(t, u, e, n, i, o);
          if (u.rpcImpl)
            try {
              return u.rpcImpl(
                e,
                n[u.requestDelimited ? "encodeDelimited" : "encode"](
                  o,
                ).finish(),
                function (t, n) {
                  if (t) return (u.emit("error", t, e), s(t));
                  if (null !== n) {
                    if (!(n instanceof i))
                      try {
                        n =
                          i[u.responseDelimited ? "decodeDelimited" : "decode"](
                            n,
                          );
                      } catch (t) {
                        return (u.emit("error", t, e), s(t));
                      }
                    return (u.emit("data", n, e), s(null, n));
                  }
                  u.end(!0);
                },
              );
            } catch (c) {
              return (
                u.emit("error", c, e),
                void setTimeout(function () {
                  s(c);
                }, 0)
              );
            }
          else
            setTimeout(function () {
              s(Error("already ended"));
            }, 0);
        }),
        (i.prototype.end = function (t) {
          return (
            this.rpcImpl &&
              (t || this.rpcImpl(null, null, null),
              (this.rpcImpl = null),
              this.emit("end").off()),
            this
          );
        }));
    },
    8426: function (t, e, n) {
      "use strict";
      t.exports = {};
    },
  },
]);
