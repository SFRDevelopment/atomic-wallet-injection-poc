(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [329],
  {
    2898: function (e, r, t) {
      var n = t(46).Buffer;
      function i(e) {
        if (e.length < 8) return !1;
        if (e.length > 72) return !1;
        if (48 !== e[0]) return !1;
        if (e[1] !== e.length - 2) return !1;
        if (2 !== e[2]) return !1;
        var r = e[3];
        if (0 === r) return !1;
        if (5 + r >= e.length) return !1;
        if (2 !== e[4 + r]) return !1;
        var t = e[5 + r];
        return (
          0 !== t &&
          6 + r + t === e.length &&
          !(128 & e[4]) &&
          !(r > 1 && 0 === e[4] && !(128 & e[5])) &&
          !(128 & e[r + 6]) &&
          !(t > 1 && 0 === e[r + 6] && !(128 & e[r + 7]))
        );
      }
      function o(e) {
        if (e.length < 8) throw new Error("DER sequence length is too short");
        if (e.length > 72) throw new Error("DER sequence length is too long");
        if (48 !== e[0]) throw new Error("Expected DER sequence");
        if (e[1] !== e.length - 2)
          throw new Error("DER sequence length is invalid");
        if (2 !== e[2]) throw new Error("Expected DER integer");
        var r = e[3];
        if (0 === r) throw new Error("R length is zero");
        if (5 + r >= e.length) throw new Error("R length is too long");
        if (2 !== e[4 + r]) throw new Error("Expected DER integer (2)");
        var t = e[5 + r];
        if (0 === t) throw new Error("S length is zero");
        if (6 + r + t !== e.length) throw new Error("S length is invalid");
        if (128 & e[4]) throw new Error("R value is negative");
        if (r > 1 && 0 === e[4] && !(128 & e[5]))
          throw new Error("R value excessively padded");
        if (128 & e[r + 6]) throw new Error("S value is negative");
        if (t > 1 && 0 === e[r + 6] && !(128 & e[r + 7]))
          throw new Error("S value excessively padded");
        return { r: e.slice(4, 4 + r), s: e.slice(6 + r) };
      }
      function E(e, r) {
        var t = e.length,
          i = r.length;
        if (0 === t) throw new Error("R length is zero");
        if (0 === i) throw new Error("S length is zero");
        if (t > 33) throw new Error("R length is too long");
        if (i > 33) throw new Error("S length is too long");
        if (128 & e[0]) throw new Error("R value is negative");
        if (128 & r[0]) throw new Error("S value is negative");
        if (t > 1 && 0 === e[0] && !(128 & e[1]))
          throw new Error("R value excessively padded");
        if (i > 1 && 0 === r[0] && !(128 & r[1]))
          throw new Error("S value excessively padded");
        var o = n.allocUnsafe(6 + t + i);
        return (
          (o[0] = 48),
          (o[1] = o.length - 2),
          (o[2] = 2),
          (o[3] = e.length),
          e.copy(o, 4),
          (o[4 + t] = 2),
          (o[5 + t] = r.length),
          r.copy(o, 6 + t),
          o
        );
      }
      e.exports = { check: i, decode: o, encode: E };
    },
    3288: function (e) {
      e.exports = JSON.parse(
        '{"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_RANGE_INVALID":"private key range is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn\'t export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn\'t import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn\'t parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn\'t parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn\'t serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn\'t recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}',
      );
    },
    3650: function (e, r, t) {
      "use strict";
      e.exports = t(3651)(t(3654));
    },
    3651: function (e, r, t) {
      "use strict";
      var n = t(3652),
        i = t(3653),
        o = t(3288);
      function E(e, r) {
        return void 0 === e
          ? r
          : (n.isBoolean(e, o.COMPRESSED_TYPE_INVALID), e);
      }
      e.exports = function (e) {
        return {
          privateKeyVerify: function (r) {
            return (
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              32 === r.length && e.privateKeyVerify(r)
            );
          },
          privateKeyExport: function (r, t) {
            (n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (t = E(t, !0)));
            var u = e.privateKeyExport(r, t);
            return i.privateKeyExport(r, u, t);
          },
          privateKeyImport: function (r) {
            if (
              (n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              (r = i.privateKeyImport(r)),
              r && 32 === r.length && e.privateKeyVerify(r))
            )
              return r;
            throw new Error(o.EC_PRIVATE_KEY_IMPORT_DER_FAIL);
          },
          privateKeyNegate: function (r) {
            return (
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              e.privateKeyNegate(r)
            );
          },
          privateKeyModInverse: function (r) {
            return (
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              e.privateKeyModInverse(r)
            );
          },
          privateKeyTweakAdd: function (r, t) {
            return (
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              n.isBuffer(t, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(t, 32, o.TWEAK_LENGTH_INVALID),
              e.privateKeyTweakAdd(r, t)
            );
          },
          privateKeyTweakMul: function (r, t) {
            return (
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              n.isBuffer(t, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(t, 32, o.TWEAK_LENGTH_INVALID),
              e.privateKeyTweakMul(r, t)
            );
          },
          publicKeyCreate: function (r, t) {
            return (
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (t = E(t, !0)),
              e.publicKeyCreate(r, t)
            );
          },
          publicKeyConvert: function (r, t) {
            return (
              n.isBuffer(r, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(r, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              (t = E(t, !0)),
              e.publicKeyConvert(r, t)
            );
          },
          publicKeyVerify: function (r) {
            return (
              n.isBuffer(r, o.EC_PUBLIC_KEY_TYPE_INVALID),
              e.publicKeyVerify(r)
            );
          },
          publicKeyTweakAdd: function (r, t, i) {
            return (
              n.isBuffer(r, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(r, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(t, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(t, 32, o.TWEAK_LENGTH_INVALID),
              (i = E(i, !0)),
              e.publicKeyTweakAdd(r, t, i)
            );
          },
          publicKeyTweakMul: function (r, t, i) {
            return (
              n.isBuffer(r, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(r, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(t, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(t, 32, o.TWEAK_LENGTH_INVALID),
              (i = E(i, !0)),
              e.publicKeyTweakMul(r, t, i)
            );
          },
          publicKeyCombine: function (r, t) {
            (n.isArray(r, o.EC_PUBLIC_KEYS_TYPE_INVALID),
              n.isLengthGTZero(r, o.EC_PUBLIC_KEYS_LENGTH_INVALID));
            for (var i = 0; i < r.length; ++i)
              (n.isBuffer(r[i], o.EC_PUBLIC_KEY_TYPE_INVALID),
                n.isBufferLength2(
                  r[i],
                  33,
                  65,
                  o.EC_PUBLIC_KEY_LENGTH_INVALID,
                ));
            return ((t = E(t, !0)), e.publicKeyCombine(r, t));
          },
          signatureNormalize: function (r) {
            return (
              n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              e.signatureNormalize(r)
            );
          },
          signatureExport: function (r) {
            (n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID));
            var t = e.signatureExport(r);
            return i.signatureExport(t);
          },
          signatureImport: function (r) {
            (n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isLengthGTZero(r, o.ECDSA_SIGNATURE_LENGTH_INVALID));
            var t = i.signatureImport(r);
            if (t) return e.signatureImport(t);
            throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL);
          },
          signatureImportLax: function (r) {
            (n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isLengthGTZero(r, o.ECDSA_SIGNATURE_LENGTH_INVALID));
            var t = i.signatureImportLax(r);
            if (t) return e.signatureImport(t);
            throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL);
          },
          sign: function (r, t, i) {
            (n.isBuffer(r, o.MSG32_TYPE_INVALID),
              n.isBufferLength(r, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID));
            var E = null,
              u = null;
            return (
              void 0 !== i &&
                (n.isObject(i, o.OPTIONS_TYPE_INVALID),
                void 0 !== i.data &&
                  (n.isBuffer(i.data, o.OPTIONS_DATA_TYPE_INVALID),
                  n.isBufferLength(i.data, 32, o.OPTIONS_DATA_LENGTH_INVALID),
                  (E = i.data)),
                void 0 !== i.noncefn &&
                  (n.isFunction(i.noncefn, o.OPTIONS_NONCEFN_TYPE_INVALID),
                  (u = i.noncefn))),
              e.sign(r, t, u, E)
            );
          },
          verify: function (r, t, i) {
            return (
              n.isBuffer(r, o.MSG32_TYPE_INVALID),
              n.isBufferLength(r, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              n.isBuffer(i, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(i, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              e.verify(r, t, i)
            );
          },
          recover: function (r, t, i, u) {
            return (
              n.isBuffer(r, o.MSG32_TYPE_INVALID),
              n.isBufferLength(r, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              n.isNumber(i, o.RECOVERY_ID_TYPE_INVALID),
              n.isNumberInInterval(i, -1, 4, o.RECOVERY_ID_VALUE_INVALID),
              (u = E(u, !0)),
              e.recover(r, t, i, u)
            );
          },
          ecdh: function (r, t) {
            return (
              n.isBuffer(r, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(r, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              e.ecdh(r, t)
            );
          },
          ecdhUnsafe: function (r, t, i) {
            return (
              n.isBuffer(r, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(r, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (i = E(i, !0)),
              e.ecdhUnsafe(r, t, i)
            );
          },
        };
      };
    },
    3652: function (e, r, t) {
      "use strict";
      (function (e) {
        var t = Object.prototype.toString;
        ((r.isArray = function (e, r) {
          if (!Array.isArray(e)) throw TypeError(r);
        }),
          (r.isBoolean = function (e, r) {
            if ("[object Boolean]" !== t.call(e)) throw TypeError(r);
          }),
          (r.isBuffer = function (r, t) {
            if (!e.isBuffer(r)) throw TypeError(t);
          }),
          (r.isFunction = function (e, r) {
            if ("[object Function]" !== t.call(e)) throw TypeError(r);
          }),
          (r.isNumber = function (e, r) {
            if ("[object Number]" !== t.call(e)) throw TypeError(r);
          }),
          (r.isObject = function (e, r) {
            if ("[object Object]" !== t.call(e)) throw TypeError(r);
          }),
          (r.isBufferLength = function (e, r, t) {
            if (e.length !== r) throw RangeError(t);
          }),
          (r.isBufferLength2 = function (e, r, t, n) {
            if (e.length !== r && e.length !== t) throw RangeError(n);
          }),
          (r.isLengthGTZero = function (e, r) {
            if (0 === e.length) throw RangeError(r);
          }),
          (r.isNumberInInterval = function (e, r, t, n) {
            if (e <= r || e >= t) throw RangeError(n);
          }));
      }).call(this, t(2).Buffer);
    },
    3653: function (e, r, t) {
      "use strict";
      var n = t(46).Buffer,
        i = t(2898),
        o = n.from([
          48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129,
          133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1,
          2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
          255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
          255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121,
          190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7,
          2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23,
          152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
          255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191,
          210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0,
        ]),
        E = n.from([
          48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129,
          165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1,
          2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
          255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255,
          255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121,
          190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7,
          2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23,
          152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17,
          8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251,
          16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255,
          255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160,
          59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]);
      ((r.privateKeyExport = function (e, r, t) {
        var i = n.from(t ? o : E);
        return (e.copy(i, t ? 8 : 9), r.copy(i, t ? 181 : 214), i);
      }),
        (r.privateKeyImport = function (e) {
          var r = e.length,
            t = 0;
          if (
            !(r < t + 1 || 48 !== e[t]) &&
            ((t += 1), !(r < t + 1) && 128 & e[t])
          ) {
            var n = 127 & e[t];
            if (((t += 1), !(n < 1 || n > 2) && !(r < t + n))) {
              var i = e[t + n - 1] | (n > 1 ? e[t + n - 2] << 8 : 0);
              if (
                ((t += n),
                !(r < t + i) &&
                  !(
                    r < t + 3 ||
                    2 !== e[t] ||
                    1 !== e[t + 1] ||
                    1 !== e[t + 2]
                  ) &&
                  ((t += 3),
                  !(
                    r < t + 2 ||
                    4 !== e[t] ||
                    e[t + 1] > 32 ||
                    r < t + 2 + e[t + 1]
                  )))
              )
                return e.slice(t + 2, t + 2 + e[t + 1]);
            }
          }
        }),
        (r.signatureExport = function (e) {
          for (
            var r = n.concat([n.from([0]), e.r]), t = 33, o = 0;
            t > 1 && 0 === r[o] && !(128 & r[o + 1]);
            --t, ++o
          );
          for (
            var E = n.concat([n.from([0]), e.s]), u = 33, _ = 0;
            u > 1 && 0 === E[_] && !(128 & E[_ + 1]);
            --u, ++_
          );
          return i.encode(r.slice(o), E.slice(_));
        }),
        (r.signatureImport = function (e) {
          var r = n.alloc(32, 0),
            t = n.alloc(32, 0);
          try {
            var o = i.decode(e);
            if (
              (33 === o.r.length && 0 === o.r[0] && (o.r = o.r.slice(1)),
              o.r.length > 32)
            )
              throw new Error("R length is too long");
            if (
              (33 === o.s.length && 0 === o.s[0] && (o.s = o.s.slice(1)),
              o.s.length > 32)
            )
              throw new Error("S length is too long");
          } catch (E) {
            return;
          }
          return (
            o.r.copy(r, 32 - o.r.length),
            o.s.copy(t, 32 - o.s.length),
            { r: r, s: t }
          );
        }),
        (r.signatureImportLax = function (e) {
          var r = n.alloc(32, 0),
            t = n.alloc(32, 0),
            i = e.length,
            o = 0;
          if (48 === e[o++]) {
            var E = e[o++];
            if (!(128 & E && ((o += E - 128), o > i)) && 2 === e[o++]) {
              var u = e[o++];
              if (128 & u) {
                if (((E = u - 128), o + E > i)) return;
                for (; E > 0 && 0 === e[o]; o += 1, E -= 1);
                for (u = 0; E > 0; o += 1, E -= 1) u = (u << 8) + e[o];
              }
              if (!(u > i - o)) {
                var _ = o;
                if (((o += u), 2 === e[o++])) {
                  var f = e[o++];
                  if (128 & f) {
                    if (((E = f - 128), o + E > i)) return;
                    for (; E > 0 && 0 === e[o]; o += 1, E -= 1);
                    for (f = 0; E > 0; o += 1, E -= 1) f = (f << 8) + e[o];
                  }
                  if (!(f > i - o)) {
                    var a = o;
                    for (o += f; u > 0 && 0 === e[_]; u -= 1, _ += 1);
                    if (!(u > 32)) {
                      var s = e.slice(_, _ + u);
                      for (
                        s.copy(r, 32 - s.length);
                        f > 0 && 0 === e[a];
                        f -= 1, a += 1
                      );
                      if (!(f > 32)) {
                        var I = e.slice(a, a + f);
                        return (I.copy(t, 32 - I.length), { r: r, s: t });
                      }
                    }
                  }
                }
              }
            }
          }
        }));
    },
    3654: function (e, r, t) {
      "use strict";
      var n = t(46).Buffer,
        i = t(797),
        o = t(49),
        E = t(795).ec,
        u = t(3288),
        _ = new E("secp256k1"),
        f = _.curve;
      function a(e, r) {
        var t = new o(r);
        if (t.cmp(f.p) >= 0) return null;
        t = t.toRed(f.red);
        var n = t.redSqr().redIMul(t).redIAdd(f.b).redSqrt();
        (3 === e) !== n.isOdd() && (n = n.redNeg());
        const i = t.redSqr().redIMul(t);
        return n.redSqr().redISub(i.redIAdd(f.b)).isZero()
          ? _.keyPair({ pub: { x: t, y: n } })
          : null;
      }
      function s(e, r, t) {
        var n = new o(r),
          i = new o(t);
        if (n.cmp(f.p) >= 0 || i.cmp(f.p) >= 0) return null;
        if (
          ((n = n.toRed(f.red)),
          (i = i.toRed(f.red)),
          (6 === e || 7 === e) && i.isOdd() !== (7 === e))
        )
          return null;
        var E = n.redSqr().redIMul(n);
        return i.redSqr().redISub(E.redIAdd(f.b)).isZero()
          ? _.keyPair({ pub: { x: n, y: i } })
          : null;
      }
      function I(e) {
        var r = e[0];
        switch (r) {
          case 2:
          case 3:
            return 33 !== e.length ? null : a(r, e.slice(1, 33));
          case 4:
          case 6:
          case 7:
            return 65 !== e.length
              ? null
              : s(r, e.slice(1, 33), e.slice(33, 65));
          default:
            return null;
        }
      }
      ((r.privateKeyVerify = function (e) {
        var r = new o(e);
        return r.cmp(f.n) < 0 && !r.isZero();
      }),
        (r.privateKeyExport = function (e, r) {
          var t = new o(e);
          if (t.cmp(f.n) >= 0 || t.isZero())
            throw new Error(u.EC_PRIVATE_KEY_EXPORT_DER_FAIL);
          return n.from(_.keyFromPrivate(e).getPublic(r, !0));
        }),
        (r.privateKeyNegate = function (e) {
          var r = new o(e);
          return r.isZero()
            ? n.alloc(32)
            : f.n.sub(r).umod(f.n).toArrayLike(n, "be", 32);
        }),
        (r.privateKeyModInverse = function (e) {
          var r = new o(e);
          if (r.cmp(f.n) >= 0 || r.isZero())
            throw new Error(u.EC_PRIVATE_KEY_RANGE_INVALID);
          return r.invm(f.n).toArrayLike(n, "be", 32);
        }),
        (r.privateKeyTweakAdd = function (e, r) {
          var t = new o(r);
          if (t.cmp(f.n) >= 0) throw new Error(u.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
          if ((t.iadd(new o(e)), t.cmp(f.n) >= 0 && t.isub(f.n), t.isZero()))
            throw new Error(u.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
          return t.toArrayLike(n, "be", 32);
        }),
        (r.privateKeyTweakMul = function (e, r) {
          var t = new o(r);
          if (t.cmp(f.n) >= 0 || t.isZero())
            throw new Error(u.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);
          return (
            t.imul(new o(e)),
            t.cmp(f.n) && (t = t.umod(f.n)),
            t.toArrayLike(n, "be", 32)
          );
        }),
        (r.publicKeyCreate = function (e, r) {
          var t = new o(e);
          if (t.cmp(f.n) >= 0 || t.isZero())
            throw new Error(u.EC_PUBLIC_KEY_CREATE_FAIL);
          return n.from(_.keyFromPrivate(e).getPublic(r, !0));
        }),
        (r.publicKeyConvert = function (e, r) {
          var t = I(e);
          if (null === t) throw new Error(u.EC_PUBLIC_KEY_PARSE_FAIL);
          return n.from(t.getPublic(r, !0));
        }),
        (r.publicKeyVerify = function (e) {
          return null !== I(e);
        }),
        (r.publicKeyTweakAdd = function (e, r, t) {
          var i = I(e);
          if (null === i) throw new Error(u.EC_PUBLIC_KEY_PARSE_FAIL);
          if (((r = new o(r)), r.cmp(f.n) >= 0))
            throw new Error(u.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
          var E = f.g.mul(r).add(i.pub);
          if (E.isInfinity()) throw new Error(u.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
          return n.from(E.encode(!0, t));
        }),
        (r.publicKeyTweakMul = function (e, r, t) {
          var i = I(e);
          if (null === i) throw new Error(u.EC_PUBLIC_KEY_PARSE_FAIL);
          if (((r = new o(r)), r.cmp(f.n) >= 0 || r.isZero()))
            throw new Error(u.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);
          return n.from(i.pub.mul(r).encode(!0, t));
        }),
        (r.publicKeyCombine = function (e, r) {
          for (var t = new Array(e.length), i = 0; i < e.length; ++i)
            if (((t[i] = I(e[i])), null === t[i]))
              throw new Error(u.EC_PUBLIC_KEY_PARSE_FAIL);
          for (var o = t[0].pub, E = 1; E < t.length; ++E) o = o.add(t[E].pub);
          if (o.isInfinity()) throw new Error(u.EC_PUBLIC_KEY_COMBINE_FAIL);
          return n.from(o.encode(!0, r));
        }),
        (r.signatureNormalize = function (e) {
          var r = new o(e.slice(0, 32)),
            t = new o(e.slice(32, 64));
          if (r.cmp(f.n) >= 0 || t.cmp(f.n) >= 0)
            throw new Error(u.ECDSA_SIGNATURE_PARSE_FAIL);
          var i = n.from(e);
          return (
            1 === t.cmp(_.nh) &&
              f.n.sub(t).toArrayLike(n, "be", 32).copy(i, 32),
            i
          );
        }),
        (r.signatureExport = function (e) {
          var r = e.slice(0, 32),
            t = e.slice(32, 64);
          if (new o(r).cmp(f.n) >= 0 || new o(t).cmp(f.n) >= 0)
            throw new Error(u.ECDSA_SIGNATURE_PARSE_FAIL);
          return { r: r, s: t };
        }),
        (r.signatureImport = function (e) {
          var r = new o(e.r);
          r.cmp(f.n) >= 0 && (r = new o(0));
          var t = new o(e.s);
          return (
            t.cmp(f.n) >= 0 && (t = new o(0)),
            n.concat([r.toArrayLike(n, "be", 32), t.toArrayLike(n, "be", 32)])
          );
        }),
        (r.sign = function (e, r, t, i) {
          if ("function" === typeof t) {
            var E = t;
            t = function (t) {
              var _ = E(e, r, null, i, t);
              if (!n.isBuffer(_) || 32 !== _.length)
                throw new Error(u.ECDSA_SIGN_FAIL);
              return new o(_);
            };
          }
          var a = new o(r);
          if (a.cmp(f.n) >= 0 || a.isZero()) throw new Error(u.ECDSA_SIGN_FAIL);
          var s = _.sign(e, r, { canonical: !0, k: t, pers: i });
          return {
            signature: n.concat([
              s.r.toArrayLike(n, "be", 32),
              s.s.toArrayLike(n, "be", 32),
            ]),
            recovery: s.recoveryParam,
          };
        }),
        (r.verify = function (e, r, t) {
          var n = { r: r.slice(0, 32), s: r.slice(32, 64) },
            i = new o(n.r),
            E = new o(n.s);
          if (i.cmp(f.n) >= 0 || E.cmp(f.n) >= 0)
            throw new Error(u.ECDSA_SIGNATURE_PARSE_FAIL);
          if (1 === E.cmp(_.nh) || i.isZero() || E.isZero()) return !1;
          var a = I(t);
          if (null === a) throw new Error(u.EC_PUBLIC_KEY_PARSE_FAIL);
          return _.verify(e, n, { x: a.pub.x, y: a.pub.y });
        }),
        (r.recover = function (e, r, t, i) {
          var E = { r: r.slice(0, 32), s: r.slice(32, 64) },
            a = new o(E.r),
            s = new o(E.s);
          if (a.cmp(f.n) >= 0 || s.cmp(f.n) >= 0)
            throw new Error(u.ECDSA_SIGNATURE_PARSE_FAIL);
          try {
            if (a.isZero() || s.isZero()) throw new Error();
            var I = _.recoverPubKey(e, E, t);
            return n.from(I.encode(!0, i));
          } catch (c) {
            throw new Error(u.ECDSA_RECOVER_FAIL);
          }
        }),
        (r.ecdh = function (e, t) {
          var n = r.ecdhUnsafe(e, t, !0);
          return i("sha256").update(n).digest();
        }),
        (r.ecdhUnsafe = function (e, r, t) {
          var i = I(e);
          if (null === i) throw new Error(u.EC_PUBLIC_KEY_PARSE_FAIL);
          var E = new o(r);
          if (E.cmp(f.n) >= 0 || E.isZero()) throw new Error(u.ECDH_FAIL);
          return n.from(i.pub.mul(E).encode(!0, t));
        }));
    },
    4975: function (e, r, t) {
      var n = t(229),
        i = t(46).Buffer,
        o = t(2764),
        E = t(2792),
        u = t(3650),
        _ = i.from("Bitcoin seed", "utf8"),
        f = 2147483648,
        a = 78,
        s = { private: 76066276, public: 76067358 };
      function I(e) {
        ((this.versions = e || s),
          (this.depth = 0),
          (this.index = 0),
          (this._privateKey = null),
          (this._publicKey = null),
          (this.chainCode = null),
          (this._fingerprint = 0),
          (this.parentFingerprint = 0));
      }
      function c(e, r, t) {
        var n = i.allocUnsafe(a);
        (n.writeUInt32BE(r, 0), n.writeUInt8(e.depth, 4));
        var o = e.depth ? e.parentFingerprint : 0;
        return (
          n.writeUInt32BE(o, 5),
          n.writeUInt32BE(e.index, 9),
          e.chainCode.copy(n, 13),
          t.copy(n, 45),
          n
        );
      }
      function l(e) {
        var r = o.createHash("sha256").update(e).digest();
        return o.createHash("ripemd160").update(r).digest();
      }
      (Object.defineProperty(I.prototype, "fingerprint", {
        get: function () {
          return this._fingerprint;
        },
      }),
        Object.defineProperty(I.prototype, "identifier", {
          get: function () {
            return this._identifier;
          },
        }),
        Object.defineProperty(I.prototype, "pubKeyHash", {
          get: function () {
            return this.identifier;
          },
        }),
        Object.defineProperty(I.prototype, "privateKey", {
          get: function () {
            return this._privateKey;
          },
          set: function (e) {
            (n.equal(e.length, 32, "Private key must be 32 bytes."),
              n(!0 === u.privateKeyVerify(e), "Invalid private key"),
              (this._privateKey = e),
              (this._publicKey = u.publicKeyCreate(e, !0)),
              (this._identifier = l(this.publicKey)),
              (this._fingerprint = this._identifier
                .slice(0, 4)
                .readUInt32BE(0)));
          },
        }),
        Object.defineProperty(I.prototype, "publicKey", {
          get: function () {
            return this._publicKey;
          },
          set: function (e) {
            (n(
              33 === e.length || 65 === e.length,
              "Public key must be 33 or 65 bytes.",
            ),
              n(!0 === u.publicKeyVerify(e), "Invalid public key"),
              (this._publicKey = u.publicKeyConvert(e, !0)),
              (this._identifier = l(this.publicKey)),
              (this._fingerprint = this._identifier
                .slice(0, 4)
                .readUInt32BE(0)),
              (this._privateKey = null));
          },
        }),
        Object.defineProperty(I.prototype, "privateExtendedKey", {
          get: function () {
            return this._privateKey
              ? E.encode(
                  c(
                    this,
                    this.versions.private,
                    i.concat([i.alloc(1, 0), this.privateKey]),
                  ),
                )
              : null;
          },
        }),
        Object.defineProperty(I.prototype, "publicExtendedKey", {
          get: function () {
            return E.encode(c(this, this.versions.public, this.publicKey));
          },
        }),
        (I.prototype.derive = function (e) {
          if ("m" === e || "M" === e || "m'" === e || "M'" === e) return this;
          var r = e.split("/"),
            t = this;
          return (
            r.forEach(function (e, r) {
              if (0 !== r) {
                var i = e.length > 1 && "'" === e[e.length - 1],
                  o = parseInt(e, 10);
                (n(o < f, "Invalid index"),
                  i && (o += f),
                  (t = t.deriveChild(o)));
              } else n(/^[mM]{1}/.test(e), 'Path must start with "m" or "M"');
            }),
            t
          );
        }),
        (I.prototype.deriveChild = function (e) {
          var r,
            t = e >= f,
            E = i.allocUnsafe(4);
          if ((E.writeUInt32BE(e, 0), t)) {
            n(this.privateKey, "Could not derive hardened child key");
            var _ = this.privateKey,
              a = i.alloc(1, 0);
            ((_ = i.concat([a, _])), (r = i.concat([_, E])));
          } else r = i.concat([this.publicKey, E]);
          var s = o.createHmac("sha512", this.chainCode).update(r).digest(),
            c = s.slice(0, 32),
            l = s.slice(32),
            A = new I(this.versions);
          if (this.privateKey)
            try {
              A.privateKey = u.privateKeyTweakAdd(this.privateKey, c);
            } catch (p) {
              return this.deriveChild(e + 1);
            }
          else
            try {
              A.publicKey = u.publicKeyTweakAdd(this.publicKey, c, !0);
            } catch (p) {
              return this.deriveChild(e + 1);
            }
          return (
            (A.chainCode = l),
            (A.depth = this.depth + 1),
            (A.parentFingerprint = this.fingerprint),
            (A.index = e),
            A
          );
        }),
        (I.prototype.sign = function (e) {
          return u.sign(e, this.privateKey).signature;
        }),
        (I.prototype.verify = function (e, r) {
          return u.verify(e, r, this.publicKey);
        }),
        (I.prototype.wipePrivateData = function () {
          return (
            this._privateKey &&
              o.randomBytes(this._privateKey.length).copy(this._privateKey),
            (this._privateKey = null),
            this
          );
        }),
        (I.prototype.toJSON = function () {
          return {
            xpriv: this.privateExtendedKey,
            xpub: this.publicExtendedKey,
          };
        }),
        (I.fromMasterSeed = function (e, r) {
          var t = o.createHmac("sha512", _).update(e).digest(),
            n = t.slice(0, 32),
            i = t.slice(32),
            E = new I(r);
          return ((E.chainCode = i), (E.privateKey = n), E);
        }),
        (I.fromExtendedKey = function (e, r) {
          r = r || s;
          var t = new I(r),
            i = E.decode(e),
            o = i.readUInt32BE(0);
          (n(
            o === r.private || o === r.public,
            "Version mismatch: does not match private or public",
          ),
            (t.depth = i.readUInt8(4)),
            (t.parentFingerprint = i.readUInt32BE(5)),
            (t.index = i.readUInt32BE(9)),
            (t.chainCode = i.slice(13, 45)));
          var u = i.slice(45);
          return (
            0 === u.readUInt8(0)
              ? (n(
                  o === r.private,
                  "Version mismatch: version does not match private",
                ),
                (t.privateKey = u.slice(1)))
              : (n(
                  o === r.public,
                  "Version mismatch: version does not match public",
                ),
                (t.publicKey = u)),
            t
          );
        }),
        (I.fromJSON = function (e) {
          return I.fromExtendedKey(e.xpriv);
        }),
        (I.HARDENED_OFFSET = f),
        (e.exports = I));
    },
  },
]);
