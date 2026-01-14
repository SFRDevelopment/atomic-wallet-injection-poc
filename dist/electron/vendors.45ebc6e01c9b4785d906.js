(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [220, 221],
  {
    2800: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.slip10CurveFromString =
          t.Slip10RawIndex =
          t.Slip10Curve =
          t.Slip10 =
          t.stringToPath =
          t.pathToString =
          t.sha512 =
          t.Sha512 =
          t.sha256 =
          t.Sha256 =
          t.sha1 =
          t.Sha1 =
          t.Secp256k1Signature =
          t.ExtendedSecp256k1Signature =
          t.Secp256k1 =
          t.ripemd160 =
          t.Ripemd160 =
          t.Random =
          t.Ed25519Keypair =
          t.Ed25519 =
          t.isArgon2idOptions =
          t.Argon2id =
          t.xchacha20NonceLength =
          t.Xchacha20poly1305Ietf =
          t.keccak256 =
          t.Keccak256 =
          t.Hmac =
          t.EnglishMnemonic =
          t.Bip39 =
            void 0));
      var n = r(3748);
      Object.defineProperty(t, "Bip39", {
        enumerable: !0,
        get: function () {
          return n.Bip39;
        },
      });
      var i = r(3314);
      Object.defineProperty(t, "EnglishMnemonic", {
        enumerable: !0,
        get: function () {
          return i.EnglishMnemonic;
        },
      });
      var o = r(3315);
      Object.defineProperty(t, "Hmac", {
        enumerable: !0,
        get: function () {
          return o.Hmac;
        },
      });
      var s = r(3765);
      (Object.defineProperty(t, "Keccak256", {
        enumerable: !0,
        get: function () {
          return s.Keccak256;
        },
      }),
        Object.defineProperty(t, "keccak256", {
          enumerable: !0,
          get: function () {
            return s.keccak256;
          },
        }));
      var c = r(3766);
      (Object.defineProperty(t, "Xchacha20poly1305Ietf", {
        enumerable: !0,
        get: function () {
          return c.Xchacha20poly1305Ietf;
        },
      }),
        Object.defineProperty(t, "xchacha20NonceLength", {
          enumerable: !0,
          get: function () {
            return c.xchacha20NonceLength;
          },
        }),
        Object.defineProperty(t, "Argon2id", {
          enumerable: !0,
          get: function () {
            return c.Argon2id;
          },
        }),
        Object.defineProperty(t, "isArgon2idOptions", {
          enumerable: !0,
          get: function () {
            return c.isArgon2idOptions;
          },
        }),
        Object.defineProperty(t, "Ed25519", {
          enumerable: !0,
          get: function () {
            return c.Ed25519;
          },
        }),
        Object.defineProperty(t, "Ed25519Keypair", {
          enumerable: !0,
          get: function () {
            return c.Ed25519Keypair;
          },
        }));
      var a = r(3772);
      Object.defineProperty(t, "Random", {
        enumerable: !0,
        get: function () {
          return a.Random;
        },
      });
      var u = r(3773);
      (Object.defineProperty(t, "Ripemd160", {
        enumerable: !0,
        get: function () {
          return u.Ripemd160;
        },
      }),
        Object.defineProperty(t, "ripemd160", {
          enumerable: !0,
          get: function () {
            return u.ripemd160;
          },
        }));
      var l = r(3774);
      Object.defineProperty(t, "Secp256k1", {
        enumerable: !0,
        get: function () {
          return l.Secp256k1;
        },
      });
      var f = r(3318);
      (Object.defineProperty(t, "ExtendedSecp256k1Signature", {
        enumerable: !0,
        get: function () {
          return f.ExtendedSecp256k1Signature;
        },
      }),
        Object.defineProperty(t, "Secp256k1Signature", {
          enumerable: !0,
          get: function () {
            return f.Secp256k1Signature;
          },
        }));
      var h = r(3319);
      (Object.defineProperty(t, "Sha1", {
        enumerable: !0,
        get: function () {
          return h.Sha1;
        },
      }),
        Object.defineProperty(t, "sha1", {
          enumerable: !0,
          get: function () {
            return h.sha1;
          },
        }),
        Object.defineProperty(t, "Sha256", {
          enumerable: !0,
          get: function () {
            return h.Sha256;
          },
        }),
        Object.defineProperty(t, "sha256", {
          enumerable: !0,
          get: function () {
            return h.sha256;
          },
        }),
        Object.defineProperty(t, "Sha512", {
          enumerable: !0,
          get: function () {
            return h.Sha512;
          },
        }),
        Object.defineProperty(t, "sha512", {
          enumerable: !0,
          get: function () {
            return h.sha512;
          },
        }));
      var p = r(3775);
      (Object.defineProperty(t, "pathToString", {
        enumerable: !0,
        get: function () {
          return p.pathToString;
        },
      }),
        Object.defineProperty(t, "stringToPath", {
          enumerable: !0,
          get: function () {
            return p.stringToPath;
          },
        }),
        Object.defineProperty(t, "Slip10", {
          enumerable: !0,
          get: function () {
            return p.Slip10;
          },
        }),
        Object.defineProperty(t, "Slip10Curve", {
          enumerable: !0,
          get: function () {
            return p.Slip10Curve;
          },
        }),
        Object.defineProperty(t, "Slip10RawIndex", {
          enumerable: !0,
          get: function () {
            return p.Slip10RawIndex;
          },
        }),
        Object.defineProperty(t, "slip10CurveFromString", {
          enumerable: !0,
          get: function () {
            return p.slip10CurveFromString;
          },
        }));
    },
    2807: function (e, t) {},
    2910: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.executeKdf =
          t.serializeSignDoc =
          t.makeSignDoc =
          t.encodeSecp256k1Signature =
          t.decodeSignature =
          t.Secp256k1Wallet =
          t.Secp256k1HdWallet =
          t.extractKdfConfiguration =
          t.makeCosmoshubPath =
          t.createMultisigThresholdPubkey =
          t.pubkeyType =
          t.isSinglePubkey =
          t.isSecp256k1Pubkey =
          t.isEd25519Pubkey =
          t.isMultisigThresholdPubkey =
          t.encodeSecp256k1Pubkey =
          t.encodeBech32Pubkey =
          t.encodeAminoPubkey =
          t.decodeBech32Pubkey =
          t.decodeAminoPubkey =
          t.parseCoins =
          t.coins =
          t.coin =
          t.rawSecp256k1PubkeyToRawAddress =
          t.rawEd25519PubkeyToRawAddress =
          t.pubkeyToRawAddress =
          t.pubkeyToAddress =
            void 0));
      var n = r(2997);
      (Object.defineProperty(t, "pubkeyToAddress", {
        enumerable: !0,
        get: function () {
          return n.pubkeyToAddress;
        },
      }),
        Object.defineProperty(t, "pubkeyToRawAddress", {
          enumerable: !0,
          get: function () {
            return n.pubkeyToRawAddress;
          },
        }),
        Object.defineProperty(t, "rawEd25519PubkeyToRawAddress", {
          enumerable: !0,
          get: function () {
            return n.rawEd25519PubkeyToRawAddress;
          },
        }),
        Object.defineProperty(t, "rawSecp256k1PubkeyToRawAddress", {
          enumerable: !0,
          get: function () {
            return n.rawSecp256k1PubkeyToRawAddress;
          },
        }));
      var i = r(3778);
      (Object.defineProperty(t, "coin", {
        enumerable: !0,
        get: function () {
          return i.coin;
        },
      }),
        Object.defineProperty(t, "coins", {
          enumerable: !0,
          get: function () {
            return i.coins;
          },
        }),
        Object.defineProperty(t, "parseCoins", {
          enumerable: !0,
          get: function () {
            return i.parseCoins;
          },
        }));
      var o = r(3116);
      (Object.defineProperty(t, "decodeAminoPubkey", {
        enumerable: !0,
        get: function () {
          return o.decodeAminoPubkey;
        },
      }),
        Object.defineProperty(t, "decodeBech32Pubkey", {
          enumerable: !0,
          get: function () {
            return o.decodeBech32Pubkey;
          },
        }),
        Object.defineProperty(t, "encodeAminoPubkey", {
          enumerable: !0,
          get: function () {
            return o.encodeAminoPubkey;
          },
        }),
        Object.defineProperty(t, "encodeBech32Pubkey", {
          enumerable: !0,
          get: function () {
            return o.encodeBech32Pubkey;
          },
        }),
        Object.defineProperty(t, "encodeSecp256k1Pubkey", {
          enumerable: !0,
          get: function () {
            return o.encodeSecp256k1Pubkey;
          },
        }));
      var s = r(2998);
      (Object.defineProperty(t, "isMultisigThresholdPubkey", {
        enumerable: !0,
        get: function () {
          return s.isMultisigThresholdPubkey;
        },
      }),
        Object.defineProperty(t, "isEd25519Pubkey", {
          enumerable: !0,
          get: function () {
            return s.isEd25519Pubkey;
          },
        }),
        Object.defineProperty(t, "isSecp256k1Pubkey", {
          enumerable: !0,
          get: function () {
            return s.isSecp256k1Pubkey;
          },
        }),
        Object.defineProperty(t, "isSinglePubkey", {
          enumerable: !0,
          get: function () {
            return s.isSinglePubkey;
          },
        }),
        Object.defineProperty(t, "pubkeyType", {
          enumerable: !0,
          get: function () {
            return s.pubkeyType;
          },
        }));
      var c = r(3779);
      Object.defineProperty(t, "createMultisigThresholdPubkey", {
        enumerable: !0,
        get: function () {
          return c.createMultisigThresholdPubkey;
        },
      });
      var a = r(3320);
      Object.defineProperty(t, "makeCosmoshubPath", {
        enumerable: !0,
        get: function () {
          return a.makeCosmoshubPath;
        },
      });
      var u = r(3780);
      (Object.defineProperty(t, "extractKdfConfiguration", {
        enumerable: !0,
        get: function () {
          return u.extractKdfConfiguration;
        },
      }),
        Object.defineProperty(t, "Secp256k1HdWallet", {
          enumerable: !0,
          get: function () {
            return u.Secp256k1HdWallet;
          },
        }));
      var l = r(3781);
      Object.defineProperty(t, "Secp256k1Wallet", {
        enumerable: !0,
        get: function () {
          return l.Secp256k1Wallet;
        },
      });
      var f = r(3117);
      (Object.defineProperty(t, "decodeSignature", {
        enumerable: !0,
        get: function () {
          return f.decodeSignature;
        },
      }),
        Object.defineProperty(t, "encodeSecp256k1Signature", {
          enumerable: !0,
          get: function () {
            return f.encodeSecp256k1Signature;
          },
        }));
      var h = r(3118);
      (Object.defineProperty(t, "makeSignDoc", {
        enumerable: !0,
        get: function () {
          return h.makeSignDoc;
        },
      }),
        Object.defineProperty(t, "serializeSignDoc", {
          enumerable: !0,
          get: function () {
            return h.serializeSignDoc;
          },
        }));
      var p = r(3321);
      Object.defineProperty(t, "executeKdf", {
        enumerable: !0,
        get: function () {
          return p.executeKdf;
        },
      });
    },
    2997: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.pubkeyToAddress =
          t.pubkeyToRawAddress =
          t.rawSecp256k1PubkeyToRawAddress =
          t.rawEd25519PubkeyToRawAddress =
            void 0));
      const n = r(2800),
        i = r(2762),
        o = r(3116),
        s = r(2998);
      function c(e) {
        if (32 !== e.length)
          throw new Error("Invalid Ed25519 pubkey length: " + e.length);
        return n.sha256(e).slice(0, 20);
      }
      function a(e) {
        if (33 !== e.length)
          throw new Error(
            "Invalid Secp256k1 pubkey length (compressed): " + e.length,
          );
        return n.ripemd160(n.sha256(e));
      }
      function u(e) {
        if (s.isSecp256k1Pubkey(e)) {
          const t = i.fromBase64(e.value);
          return a(t);
        }
        if (s.isEd25519Pubkey(e)) {
          const t = i.fromBase64(e.value);
          return c(t);
        }
        if (s.isMultisigThresholdPubkey(e)) {
          const t = o.encodeAminoPubkey(e);
          return n.sha256(t).slice(0, 20);
        }
        throw new Error("Unsupported public key type");
      }
      function l(e, t) {
        return i.Bech32.encode(t, u(e));
      }
      ((t.rawEd25519PubkeyToRawAddress = c),
        (t.rawSecp256k1PubkeyToRawAddress = a),
        (t.pubkeyToRawAddress = u),
        (t.pubkeyToAddress = l));
    },
    2998: function (e, t, r) {
      "use strict";
      function n(e) {
        return "tendermint/PubKeyEd25519" === e.type;
      }
      function i(e) {
        return "tendermint/PubKeySecp256k1" === e.type;
      }
      function o(e) {
        const r = [
          t.pubkeyType.ed25519,
          t.pubkeyType.secp256k1,
          t.pubkeyType.sr25519,
        ];
        return r.includes(e.type);
      }
      function s(e) {
        return "tendermint/PubKeyMultisigThreshold" === e.type;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isMultisigThresholdPubkey =
          t.isSinglePubkey =
          t.pubkeyType =
          t.isSecp256k1Pubkey =
          t.isEd25519Pubkey =
            void 0),
        (t.isEd25519Pubkey = n),
        (t.isSecp256k1Pubkey = i),
        (t.pubkeyType = {
          secp256k1: "tendermint/PubKeySecp256k1",
          ed25519: "tendermint/PubKeyEd25519",
          sr25519: "tendermint/PubKeySr25519",
          multisigThreshold: "tendermint/PubKeyMultisigThreshold",
        }),
        (t.isSinglePubkey = o),
        (t.isMultisigThresholdPubkey = s));
    },
    3116: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.encodeBech32Pubkey =
          t.encodeAminoPubkey =
          t.decodeBech32Pubkey =
          t.decodeAminoPubkey =
          t.encodeSecp256k1Pubkey =
            void 0));
      const n = r(2762),
        i = r(2796),
        o = r(2815),
        s = r(2998);
      function c(e) {
        if (33 !== e.length || (2 !== e[0] && 3 !== e[0]))
          throw new Error(
            "Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03",
          );
        return { type: s.pubkeyType.secp256k1, value: n.toBase64(e) };
      }
      t.encodeSecp256k1Pubkey = c;
      const a = n.fromHex("eb5ae98721"),
        u = n.fromHex("1624de6420"),
        l = n.fromHex("0dfb100520"),
        f = n.fromHex("22c1f7e2");
      function h(e) {
        if (o.arrayContentStartsWith(e, a)) {
          const t = e.slice(a.length);
          if (33 !== t.length)
            throw new Error(
              "Invalid rest data length. Expected 33 bytes (compressed secp256k1 pubkey).",
            );
          return { type: s.pubkeyType.secp256k1, value: n.toBase64(t) };
        }
        if (o.arrayContentStartsWith(e, u)) {
          const t = e.slice(u.length);
          if (32 !== t.length)
            throw new Error(
              "Invalid rest data length. Expected 32 bytes (Ed25519 pubkey).",
            );
          return { type: s.pubkeyType.ed25519, value: n.toBase64(t) };
        }
        if (o.arrayContentStartsWith(e, l)) {
          const t = e.slice(l.length);
          if (32 !== t.length)
            throw new Error(
              "Invalid rest data length. Expected 32 bytes (Sr25519 pubkey).",
            );
          return { type: s.pubkeyType.sr25519, value: n.toBase64(t) };
        }
        throw new Error(
          "Unsupported public key type. Amino data starts with: " +
            n.toHex(e.slice(0, 5)),
        );
      }
      function p(e) {
        const { data: t } = n.Bech32.decode(e);
        return h(t);
      }
      function d(e) {
        const t = i.Uint53.fromString(e.toString()).toNumber();
        if (t > 127)
          throw new Error(
            "Encoding numbers > 127 is not supported here. Please tell those lazy CosmJS maintainers to port the binary.PutUvarint implementation from the Go standard library and write some tests.",
          );
        return [t];
      }
      function y(e) {
        if (s.isMultisigThresholdPubkey(e)) {
          const t = Array.from(f);
          (t.push(8), t.push(...d(e.value.threshold)));
          for (const r of e.value.pubkeys.map((e) => y(e)))
            (t.push(18), t.push(...d(r.length)), t.push(...r));
          return new Uint8Array(t);
        }
        if (s.isEd25519Pubkey(e))
          return new Uint8Array([...u, ...n.fromBase64(e.value)]);
        if (s.isSecp256k1Pubkey(e))
          return new Uint8Array([...a, ...n.fromBase64(e.value)]);
        throw new Error("Unsupported pubkey type");
      }
      function b(e, t) {
        return n.Bech32.encode(t, y(e));
      }
      ((t.decodeAminoPubkey = h),
        (t.decodeBech32Pubkey = p),
        (t.encodeAminoPubkey = y),
        (t.encodeBech32Pubkey = b));
    },
    3117: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decodeSignature = t.encodeSecp256k1Signature = void 0));
      const n = r(2762),
        i = r(3116),
        o = r(2998);
      function s(e, t) {
        if (64 !== t.length)
          throw new Error(
            "Signature must be 64 bytes long. Cosmos SDK uses a 2x32 byte fixed length encoding for the secp256k1 signature integers r and s.",
          );
        return {
          pub_key: i.encodeSecp256k1Pubkey(e),
          signature: n.toBase64(t),
        };
      }
      function c(e) {
        switch (e.pub_key.type) {
          case o.pubkeyType.secp256k1:
            return {
              pubkey: n.fromBase64(e.pub_key.value),
              signature: n.fromBase64(e.signature),
            };
          default:
            throw new Error("Unsupported pubkey type");
        }
      }
      ((t.encodeSecp256k1Signature = s), (t.decodeSignature = c));
    },
    3118: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.serializeSignDoc = t.makeSignDoc = t.sortedJsonStringify = void 0));
      const n = r(2762),
        i = r(2796);
      function o(e) {
        if ("object" !== typeof e || null === e) return e;
        if (Array.isArray(e)) return e.map(o);
        const t = Object.keys(e).sort(),
          r = {};
        return (
          t.forEach((t) => {
            r[t] = o(e[t]);
          }),
          r
        );
      }
      function s(e) {
        return JSON.stringify(o(e));
      }
      function c(e, t, r, n, o, s) {
        return {
          chain_id: r,
          account_number: i.Uint53.fromString(o.toString()).toString(),
          sequence: i.Uint53.fromString(s.toString()).toString(),
          fee: t,
          msgs: e,
          memo: n || "",
        };
      }
      function a(e) {
        return n.toUtf8(s(e));
      }
      ((t.sortedJsonStringify = s),
        (t.makeSignDoc = c),
        (t.serializeSignDoc = a));
    },
    3153: function (e, t, r) {
      "use strict";
      var n = r(2755),
        i = n.Reader,
        o = n.Writer,
        s = n.util,
        c = n.roots["default"] || (n.roots["default"] = {});
      ((c.ics23 = (function () {
        var e = {};
        return (
          (e.HashOp = (function () {
            var e = {},
              t = Object.create(e);
            return (
              (t[(e[0] = "NO_HASH")] = 0),
              (t[(e[1] = "SHA256")] = 1),
              (t[(e[2] = "SHA512")] = 2),
              (t[(e[3] = "KECCAK")] = 3),
              (t[(e[4] = "RIPEMD160")] = 4),
              (t[(e[5] = "BITCOIN")] = 5),
              (t[(e[6] = "SHA512_256")] = 6),
              t
            );
          })()),
          (e.LengthOp = (function () {
            var e = {},
              t = Object.create(e);
            return (
              (t[(e[0] = "NO_PREFIX")] = 0),
              (t[(e[1] = "VAR_PROTO")] = 1),
              (t[(e[2] = "VAR_RLP")] = 2),
              (t[(e[3] = "FIXED32_BIG")] = 3),
              (t[(e[4] = "FIXED32_LITTLE")] = 4),
              (t[(e[5] = "FIXED64_BIG")] = 5),
              (t[(e[6] = "FIXED64_LITTLE")] = 6),
              (t[(e[7] = "REQUIRE_32_BYTES")] = 7),
              (t[(e[8] = "REQUIRE_64_BYTES")] = 8),
              t
            );
          })()),
          (e.ExistenceProof = (function () {
            function e(e) {
              if (((this.path = []), e))
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            return (
              (e.prototype.key = s.newBuffer([])),
              (e.prototype.value = s.newBuffer([])),
              (e.prototype.leaf = null),
              (e.prototype.path = s.emptyArray),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                if (
                  (t || (t = o.create()),
                  null != e.key &&
                    e.hasOwnProperty("key") &&
                    t.uint32(10).bytes(e.key),
                  null != e.value &&
                    e.hasOwnProperty("value") &&
                    t.uint32(18).bytes(e.value),
                  null != e.leaf &&
                    e.hasOwnProperty("leaf") &&
                    c.ics23.LeafOp.encode(e.leaf, t.uint32(26).fork()).ldelim(),
                  null != e.path && e.path.length)
                )
                  for (var r = 0; r < e.path.length; ++r)
                    c.ics23.InnerOp.encode(
                      e.path[r],
                      t.uint32(34).fork(),
                    ).ldelim();
                return t;
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.ExistenceProof();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      n.key = e.bytes();
                      break;
                    case 2:
                      n.value = e.bytes();
                      break;
                    case 3:
                      n.leaf = c.ics23.LeafOp.decode(e, e.uint32());
                      break;
                    case 4:
                      ((n.path && n.path.length) || (n.path = []),
                        n.path.push(c.ics23.InnerOp.decode(e, e.uint32())));
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                if (
                  null != e.key &&
                  e.hasOwnProperty("key") &&
                  !(
                    (e.key && "number" === typeof e.key.length) ||
                    s.isString(e.key)
                  )
                )
                  return "key: buffer expected";
                if (
                  null != e.value &&
                  e.hasOwnProperty("value") &&
                  !(
                    (e.value && "number" === typeof e.value.length) ||
                    s.isString(e.value)
                  )
                )
                  return "value: buffer expected";
                if (null != e.leaf && e.hasOwnProperty("leaf")) {
                  var t = c.ics23.LeafOp.verify(e.leaf);
                  if (t) return "leaf." + t;
                }
                if (null != e.path && e.hasOwnProperty("path")) {
                  if (!Array.isArray(e.path)) return "path: array expected";
                  for (var r = 0; r < e.path.length; ++r) {
                    t = c.ics23.InnerOp.verify(e.path[r]);
                    if (t) return "path." + t;
                  }
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.ExistenceProof) return e;
                var t = new c.ics23.ExistenceProof();
                if (
                  (null != e.key &&
                    ("string" === typeof e.key
                      ? s.base64.decode(
                          e.key,
                          (t.key = s.newBuffer(s.base64.length(e.key))),
                          0,
                        )
                      : e.key.length && (t.key = e.key)),
                  null != e.value &&
                    ("string" === typeof e.value
                      ? s.base64.decode(
                          e.value,
                          (t.value = s.newBuffer(s.base64.length(e.value))),
                          0,
                        )
                      : e.value.length && (t.value = e.value)),
                  null != e.leaf)
                ) {
                  if ("object" !== typeof e.leaf)
                    throw TypeError(
                      ".ics23.ExistenceProof.leaf: object expected",
                    );
                  t.leaf = c.ics23.LeafOp.fromObject(e.leaf);
                }
                if (e.path) {
                  if (!Array.isArray(e.path))
                    throw TypeError(
                      ".ics23.ExistenceProof.path: array expected",
                    );
                  t.path = [];
                  for (var r = 0; r < e.path.length; ++r) {
                    if ("object" !== typeof e.path[r])
                      throw TypeError(
                        ".ics23.ExistenceProof.path: object expected",
                      );
                    t.path[r] = c.ics23.InnerOp.fromObject(e.path[r]);
                  }
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                if (
                  ((t.arrays || t.defaults) && (r.path = []),
                  t.defaults &&
                    (t.bytes === String
                      ? (r.key = "")
                      : ((r.key = []),
                        t.bytes !== Array && (r.key = s.newBuffer(r.key))),
                    t.bytes === String
                      ? (r.value = "")
                      : ((r.value = []),
                        t.bytes !== Array && (r.value = s.newBuffer(r.value))),
                    (r.leaf = null)),
                  null != e.key &&
                    e.hasOwnProperty("key") &&
                    (r.key =
                      t.bytes === String
                        ? s.base64.encode(e.key, 0, e.key.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.key)
                          : e.key),
                  null != e.value &&
                    e.hasOwnProperty("value") &&
                    (r.value =
                      t.bytes === String
                        ? s.base64.encode(e.value, 0, e.value.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.value)
                          : e.value),
                  null != e.leaf &&
                    e.hasOwnProperty("leaf") &&
                    (r.leaf = c.ics23.LeafOp.toObject(e.leaf, t)),
                  e.path && e.path.length)
                ) {
                  r.path = [];
                  for (var n = 0; n < e.path.length; ++n)
                    r.path[n] = c.ics23.InnerOp.toObject(e.path[n], t);
                }
                return r;
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          (e.NonExistenceProof = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            return (
              (e.prototype.key = s.newBuffer([])),
              (e.prototype.left = null),
              (e.prototype.right = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = o.create()),
                  null != e.key &&
                    e.hasOwnProperty("key") &&
                    t.uint32(10).bytes(e.key),
                  null != e.left &&
                    e.hasOwnProperty("left") &&
                    c.ics23.ExistenceProof.encode(
                      e.left,
                      t.uint32(18).fork(),
                    ).ldelim(),
                  null != e.right &&
                    e.hasOwnProperty("right") &&
                    c.ics23.ExistenceProof.encode(
                      e.right,
                      t.uint32(26).fork(),
                    ).ldelim(),
                  t
                );
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.NonExistenceProof();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      n.key = e.bytes();
                      break;
                    case 2:
                      n.left = c.ics23.ExistenceProof.decode(e, e.uint32());
                      break;
                    case 3:
                      n.right = c.ics23.ExistenceProof.decode(e, e.uint32());
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                if (
                  null != e.key &&
                  e.hasOwnProperty("key") &&
                  !(
                    (e.key && "number" === typeof e.key.length) ||
                    s.isString(e.key)
                  )
                )
                  return "key: buffer expected";
                if (null != e.left && e.hasOwnProperty("left")) {
                  var t = c.ics23.ExistenceProof.verify(e.left);
                  if (t) return "left." + t;
                }
                if (null != e.right && e.hasOwnProperty("right")) {
                  t = c.ics23.ExistenceProof.verify(e.right);
                  if (t) return "right." + t;
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.NonExistenceProof) return e;
                var t = new c.ics23.NonExistenceProof();
                if (
                  (null != e.key &&
                    ("string" === typeof e.key
                      ? s.base64.decode(
                          e.key,
                          (t.key = s.newBuffer(s.base64.length(e.key))),
                          0,
                        )
                      : e.key.length && (t.key = e.key)),
                  null != e.left)
                ) {
                  if ("object" !== typeof e.left)
                    throw TypeError(
                      ".ics23.NonExistenceProof.left: object expected",
                    );
                  t.left = c.ics23.ExistenceProof.fromObject(e.left);
                }
                if (null != e.right) {
                  if ("object" !== typeof e.right)
                    throw TypeError(
                      ".ics23.NonExistenceProof.right: object expected",
                    );
                  t.right = c.ics23.ExistenceProof.fromObject(e.right);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                return (
                  t.defaults &&
                    (t.bytes === String
                      ? (r.key = "")
                      : ((r.key = []),
                        t.bytes !== Array && (r.key = s.newBuffer(r.key))),
                    (r.left = null),
                    (r.right = null)),
                  null != e.key &&
                    e.hasOwnProperty("key") &&
                    (r.key =
                      t.bytes === String
                        ? s.base64.encode(e.key, 0, e.key.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.key)
                          : e.key),
                  null != e.left &&
                    e.hasOwnProperty("left") &&
                    (r.left = c.ics23.ExistenceProof.toObject(e.left, t)),
                  null != e.right &&
                    e.hasOwnProperty("right") &&
                    (r.right = c.ics23.ExistenceProof.toObject(e.right, t)),
                  r
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          (e.CommitmentProof = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            var t;
            return (
              (e.prototype.exist = null),
              (e.prototype.nonexist = null),
              (e.prototype.batch = null),
              (e.prototype.compressed = null),
              Object.defineProperty(e.prototype, "proof", {
                get: s.oneOfGetter(
                  (t = ["exist", "nonexist", "batch", "compressed"]),
                ),
                set: s.oneOfSetter(t),
              }),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = o.create()),
                  null != e.exist &&
                    e.hasOwnProperty("exist") &&
                    c.ics23.ExistenceProof.encode(
                      e.exist,
                      t.uint32(10).fork(),
                    ).ldelim(),
                  null != e.nonexist &&
                    e.hasOwnProperty("nonexist") &&
                    c.ics23.NonExistenceProof.encode(
                      e.nonexist,
                      t.uint32(18).fork(),
                    ).ldelim(),
                  null != e.batch &&
                    e.hasOwnProperty("batch") &&
                    c.ics23.BatchProof.encode(
                      e.batch,
                      t.uint32(26).fork(),
                    ).ldelim(),
                  null != e.compressed &&
                    e.hasOwnProperty("compressed") &&
                    c.ics23.CompressedBatchProof.encode(
                      e.compressed,
                      t.uint32(34).fork(),
                    ).ldelim(),
                  t
                );
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.CommitmentProof();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      n.exist = c.ics23.ExistenceProof.decode(e, e.uint32());
                      break;
                    case 2:
                      n.nonexist = c.ics23.NonExistenceProof.decode(
                        e,
                        e.uint32(),
                      );
                      break;
                    case 3:
                      n.batch = c.ics23.BatchProof.decode(e, e.uint32());
                      break;
                    case 4:
                      n.compressed = c.ics23.CompressedBatchProof.decode(
                        e,
                        e.uint32(),
                      );
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                var t = {};
                if (null != e.exist && e.hasOwnProperty("exist")) {
                  t.proof = 1;
                  var r = c.ics23.ExistenceProof.verify(e.exist);
                  if (r) return "exist." + r;
                }
                if (null != e.nonexist && e.hasOwnProperty("nonexist")) {
                  if (1 === t.proof) return "proof: multiple values";
                  t.proof = 1;
                  r = c.ics23.NonExistenceProof.verify(e.nonexist);
                  if (r) return "nonexist." + r;
                }
                if (null != e.batch && e.hasOwnProperty("batch")) {
                  if (1 === t.proof) return "proof: multiple values";
                  t.proof = 1;
                  r = c.ics23.BatchProof.verify(e.batch);
                  if (r) return "batch." + r;
                }
                if (null != e.compressed && e.hasOwnProperty("compressed")) {
                  if (1 === t.proof) return "proof: multiple values";
                  t.proof = 1;
                  r = c.ics23.CompressedBatchProof.verify(e.compressed);
                  if (r) return "compressed." + r;
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.CommitmentProof) return e;
                var t = new c.ics23.CommitmentProof();
                if (null != e.exist) {
                  if ("object" !== typeof e.exist)
                    throw TypeError(
                      ".ics23.CommitmentProof.exist: object expected",
                    );
                  t.exist = c.ics23.ExistenceProof.fromObject(e.exist);
                }
                if (null != e.nonexist) {
                  if ("object" !== typeof e.nonexist)
                    throw TypeError(
                      ".ics23.CommitmentProof.nonexist: object expected",
                    );
                  t.nonexist = c.ics23.NonExistenceProof.fromObject(e.nonexist);
                }
                if (null != e.batch) {
                  if ("object" !== typeof e.batch)
                    throw TypeError(
                      ".ics23.CommitmentProof.batch: object expected",
                    );
                  t.batch = c.ics23.BatchProof.fromObject(e.batch);
                }
                if (null != e.compressed) {
                  if ("object" !== typeof e.compressed)
                    throw TypeError(
                      ".ics23.CommitmentProof.compressed: object expected",
                    );
                  t.compressed = c.ics23.CompressedBatchProof.fromObject(
                    e.compressed,
                  );
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                return (
                  null != e.exist &&
                    e.hasOwnProperty("exist") &&
                    ((r.exist = c.ics23.ExistenceProof.toObject(e.exist, t)),
                    t.oneofs && (r.proof = "exist")),
                  null != e.nonexist &&
                    e.hasOwnProperty("nonexist") &&
                    ((r.nonexist = c.ics23.NonExistenceProof.toObject(
                      e.nonexist,
                      t,
                    )),
                    t.oneofs && (r.proof = "nonexist")),
                  null != e.batch &&
                    e.hasOwnProperty("batch") &&
                    ((r.batch = c.ics23.BatchProof.toObject(e.batch, t)),
                    t.oneofs && (r.proof = "batch")),
                  null != e.compressed &&
                    e.hasOwnProperty("compressed") &&
                    ((r.compressed = c.ics23.CompressedBatchProof.toObject(
                      e.compressed,
                      t,
                    )),
                    t.oneofs && (r.proof = "compressed")),
                  r
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          (e.LeafOp = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            return (
              (e.prototype.hash = 0),
              (e.prototype.prehashKey = 0),
              (e.prototype.prehashValue = 0),
              (e.prototype.length = 0),
              (e.prototype.prefix = s.newBuffer([])),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = o.create()),
                  null != e.hash &&
                    e.hasOwnProperty("hash") &&
                    t.uint32(8).int32(e.hash),
                  null != e.prehashKey &&
                    e.hasOwnProperty("prehashKey") &&
                    t.uint32(16).int32(e.prehashKey),
                  null != e.prehashValue &&
                    e.hasOwnProperty("prehashValue") &&
                    t.uint32(24).int32(e.prehashValue),
                  null != e.length &&
                    e.hasOwnProperty("length") &&
                    t.uint32(32).int32(e.length),
                  null != e.prefix &&
                    e.hasOwnProperty("prefix") &&
                    t.uint32(42).bytes(e.prefix),
                  t
                );
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.LeafOp();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      n.hash = e.int32();
                      break;
                    case 2:
                      n.prehashKey = e.int32();
                      break;
                    case 3:
                      n.prehashValue = e.int32();
                      break;
                    case 4:
                      n.length = e.int32();
                      break;
                    case 5:
                      n.prefix = e.bytes();
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                if (null != e.hash && e.hasOwnProperty("hash"))
                  switch (e.hash) {
                    default:
                      return "hash: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                      break;
                  }
                if (null != e.prehashKey && e.hasOwnProperty("prehashKey"))
                  switch (e.prehashKey) {
                    default:
                      return "prehashKey: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                      break;
                  }
                if (null != e.prehashValue && e.hasOwnProperty("prehashValue"))
                  switch (e.prehashValue) {
                    default:
                      return "prehashValue: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                      break;
                  }
                if (null != e.length && e.hasOwnProperty("length"))
                  switch (e.length) {
                    default:
                      return "length: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                      break;
                  }
                return null != e.prefix &&
                  e.hasOwnProperty("prefix") &&
                  !(
                    (e.prefix && "number" === typeof e.prefix.length) ||
                    s.isString(e.prefix)
                  )
                  ? "prefix: buffer expected"
                  : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.LeafOp) return e;
                var t = new c.ics23.LeafOp();
                switch (e.hash) {
                  case "NO_HASH":
                  case 0:
                    t.hash = 0;
                    break;
                  case "SHA256":
                  case 1:
                    t.hash = 1;
                    break;
                  case "SHA512":
                  case 2:
                    t.hash = 2;
                    break;
                  case "KECCAK":
                  case 3:
                    t.hash = 3;
                    break;
                  case "RIPEMD160":
                  case 4:
                    t.hash = 4;
                    break;
                  case "BITCOIN":
                  case 5:
                    t.hash = 5;
                    break;
                  case "SHA512_256":
                  case 6:
                    t.hash = 6;
                    break;
                }
                switch (e.prehashKey) {
                  case "NO_HASH":
                  case 0:
                    t.prehashKey = 0;
                    break;
                  case "SHA256":
                  case 1:
                    t.prehashKey = 1;
                    break;
                  case "SHA512":
                  case 2:
                    t.prehashKey = 2;
                    break;
                  case "KECCAK":
                  case 3:
                    t.prehashKey = 3;
                    break;
                  case "RIPEMD160":
                  case 4:
                    t.prehashKey = 4;
                    break;
                  case "BITCOIN":
                  case 5:
                    t.prehashKey = 5;
                    break;
                  case "SHA512_256":
                  case 6:
                    t.prehashKey = 6;
                    break;
                }
                switch (e.prehashValue) {
                  case "NO_HASH":
                  case 0:
                    t.prehashValue = 0;
                    break;
                  case "SHA256":
                  case 1:
                    t.prehashValue = 1;
                    break;
                  case "SHA512":
                  case 2:
                    t.prehashValue = 2;
                    break;
                  case "KECCAK":
                  case 3:
                    t.prehashValue = 3;
                    break;
                  case "RIPEMD160":
                  case 4:
                    t.prehashValue = 4;
                    break;
                  case "BITCOIN":
                  case 5:
                    t.prehashValue = 5;
                    break;
                  case "SHA512_256":
                  case 6:
                    t.prehashValue = 6;
                    break;
                }
                switch (e.length) {
                  case "NO_PREFIX":
                  case 0:
                    t.length = 0;
                    break;
                  case "VAR_PROTO":
                  case 1:
                    t.length = 1;
                    break;
                  case "VAR_RLP":
                  case 2:
                    t.length = 2;
                    break;
                  case "FIXED32_BIG":
                  case 3:
                    t.length = 3;
                    break;
                  case "FIXED32_LITTLE":
                  case 4:
                    t.length = 4;
                    break;
                  case "FIXED64_BIG":
                  case 5:
                    t.length = 5;
                    break;
                  case "FIXED64_LITTLE":
                  case 6:
                    t.length = 6;
                    break;
                  case "REQUIRE_32_BYTES":
                  case 7:
                    t.length = 7;
                    break;
                  case "REQUIRE_64_BYTES":
                  case 8:
                    t.length = 8;
                    break;
                }
                return (
                  null != e.prefix &&
                    ("string" === typeof e.prefix
                      ? s.base64.decode(
                          e.prefix,
                          (t.prefix = s.newBuffer(s.base64.length(e.prefix))),
                          0,
                        )
                      : e.prefix.length && (t.prefix = e.prefix)),
                  t
                );
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                return (
                  t.defaults &&
                    ((r.hash = t.enums === String ? "NO_HASH" : 0),
                    (r.prehashKey = t.enums === String ? "NO_HASH" : 0),
                    (r.prehashValue = t.enums === String ? "NO_HASH" : 0),
                    (r.length = t.enums === String ? "NO_PREFIX" : 0),
                    t.bytes === String
                      ? (r.prefix = "")
                      : ((r.prefix = []),
                        t.bytes !== Array &&
                          (r.prefix = s.newBuffer(r.prefix)))),
                  null != e.hash &&
                    e.hasOwnProperty("hash") &&
                    (r.hash =
                      t.enums === String ? c.ics23.HashOp[e.hash] : e.hash),
                  null != e.prehashKey &&
                    e.hasOwnProperty("prehashKey") &&
                    (r.prehashKey =
                      t.enums === String
                        ? c.ics23.HashOp[e.prehashKey]
                        : e.prehashKey),
                  null != e.prehashValue &&
                    e.hasOwnProperty("prehashValue") &&
                    (r.prehashValue =
                      t.enums === String
                        ? c.ics23.HashOp[e.prehashValue]
                        : e.prehashValue),
                  null != e.length &&
                    e.hasOwnProperty("length") &&
                    (r.length =
                      t.enums === String
                        ? c.ics23.LengthOp[e.length]
                        : e.length),
                  null != e.prefix &&
                    e.hasOwnProperty("prefix") &&
                    (r.prefix =
                      t.bytes === String
                        ? s.base64.encode(e.prefix, 0, e.prefix.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.prefix)
                          : e.prefix),
                  r
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          (e.InnerOp = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            return (
              (e.prototype.hash = 0),
              (e.prototype.prefix = s.newBuffer([])),
              (e.prototype.suffix = s.newBuffer([])),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = o.create()),
                  null != e.hash &&
                    e.hasOwnProperty("hash") &&
                    t.uint32(8).int32(e.hash),
                  null != e.prefix &&
                    e.hasOwnProperty("prefix") &&
                    t.uint32(18).bytes(e.prefix),
                  null != e.suffix &&
                    e.hasOwnProperty("suffix") &&
                    t.uint32(26).bytes(e.suffix),
                  t
                );
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.InnerOp();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      n.hash = e.int32();
                      break;
                    case 2:
                      n.prefix = e.bytes();
                      break;
                    case 3:
                      n.suffix = e.bytes();
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                if (null != e.hash && e.hasOwnProperty("hash"))
                  switch (e.hash) {
                    default:
                      return "hash: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                      break;
                  }
                return null != e.prefix &&
                  e.hasOwnProperty("prefix") &&
                  !(
                    (e.prefix && "number" === typeof e.prefix.length) ||
                    s.isString(e.prefix)
                  )
                  ? "prefix: buffer expected"
                  : null != e.suffix &&
                      e.hasOwnProperty("suffix") &&
                      !(
                        (e.suffix && "number" === typeof e.suffix.length) ||
                        s.isString(e.suffix)
                      )
                    ? "suffix: buffer expected"
                    : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.InnerOp) return e;
                var t = new c.ics23.InnerOp();
                switch (e.hash) {
                  case "NO_HASH":
                  case 0:
                    t.hash = 0;
                    break;
                  case "SHA256":
                  case 1:
                    t.hash = 1;
                    break;
                  case "SHA512":
                  case 2:
                    t.hash = 2;
                    break;
                  case "KECCAK":
                  case 3:
                    t.hash = 3;
                    break;
                  case "RIPEMD160":
                  case 4:
                    t.hash = 4;
                    break;
                  case "BITCOIN":
                  case 5:
                    t.hash = 5;
                    break;
                  case "SHA512_256":
                  case 6:
                    t.hash = 6;
                    break;
                }
                return (
                  null != e.prefix &&
                    ("string" === typeof e.prefix
                      ? s.base64.decode(
                          e.prefix,
                          (t.prefix = s.newBuffer(s.base64.length(e.prefix))),
                          0,
                        )
                      : e.prefix.length && (t.prefix = e.prefix)),
                  null != e.suffix &&
                    ("string" === typeof e.suffix
                      ? s.base64.decode(
                          e.suffix,
                          (t.suffix = s.newBuffer(s.base64.length(e.suffix))),
                          0,
                        )
                      : e.suffix.length && (t.suffix = e.suffix)),
                  t
                );
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                return (
                  t.defaults &&
                    ((r.hash = t.enums === String ? "NO_HASH" : 0),
                    t.bytes === String
                      ? (r.prefix = "")
                      : ((r.prefix = []),
                        t.bytes !== Array &&
                          (r.prefix = s.newBuffer(r.prefix))),
                    t.bytes === String
                      ? (r.suffix = "")
                      : ((r.suffix = []),
                        t.bytes !== Array &&
                          (r.suffix = s.newBuffer(r.suffix)))),
                  null != e.hash &&
                    e.hasOwnProperty("hash") &&
                    (r.hash =
                      t.enums === String ? c.ics23.HashOp[e.hash] : e.hash),
                  null != e.prefix &&
                    e.hasOwnProperty("prefix") &&
                    (r.prefix =
                      t.bytes === String
                        ? s.base64.encode(e.prefix, 0, e.prefix.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.prefix)
                          : e.prefix),
                  null != e.suffix &&
                    e.hasOwnProperty("suffix") &&
                    (r.suffix =
                      t.bytes === String
                        ? s.base64.encode(e.suffix, 0, e.suffix.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.suffix)
                          : e.suffix),
                  r
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          (e.ProofSpec = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            return (
              (e.prototype.leafSpec = null),
              (e.prototype.innerSpec = null),
              (e.prototype.maxDepth = 0),
              (e.prototype.minDepth = 0),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = o.create()),
                  null != e.leafSpec &&
                    e.hasOwnProperty("leafSpec") &&
                    c.ics23.LeafOp.encode(
                      e.leafSpec,
                      t.uint32(10).fork(),
                    ).ldelim(),
                  null != e.innerSpec &&
                    e.hasOwnProperty("innerSpec") &&
                    c.ics23.InnerSpec.encode(
                      e.innerSpec,
                      t.uint32(18).fork(),
                    ).ldelim(),
                  null != e.maxDepth &&
                    e.hasOwnProperty("maxDepth") &&
                    t.uint32(24).int32(e.maxDepth),
                  null != e.minDepth &&
                    e.hasOwnProperty("minDepth") &&
                    t.uint32(32).int32(e.minDepth),
                  t
                );
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.ProofSpec();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      n.leafSpec = c.ics23.LeafOp.decode(e, e.uint32());
                      break;
                    case 2:
                      n.innerSpec = c.ics23.InnerSpec.decode(e, e.uint32());
                      break;
                    case 3:
                      n.maxDepth = e.int32();
                      break;
                    case 4:
                      n.minDepth = e.int32();
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                if (null != e.leafSpec && e.hasOwnProperty("leafSpec")) {
                  var t = c.ics23.LeafOp.verify(e.leafSpec);
                  if (t) return "leafSpec." + t;
                }
                if (null != e.innerSpec && e.hasOwnProperty("innerSpec")) {
                  t = c.ics23.InnerSpec.verify(e.innerSpec);
                  if (t) return "innerSpec." + t;
                }
                return null != e.maxDepth &&
                  e.hasOwnProperty("maxDepth") &&
                  !s.isInteger(e.maxDepth)
                  ? "maxDepth: integer expected"
                  : null != e.minDepth &&
                      e.hasOwnProperty("minDepth") &&
                      !s.isInteger(e.minDepth)
                    ? "minDepth: integer expected"
                    : null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.ProofSpec) return e;
                var t = new c.ics23.ProofSpec();
                if (null != e.leafSpec) {
                  if ("object" !== typeof e.leafSpec)
                    throw TypeError(
                      ".ics23.ProofSpec.leafSpec: object expected",
                    );
                  t.leafSpec = c.ics23.LeafOp.fromObject(e.leafSpec);
                }
                if (null != e.innerSpec) {
                  if ("object" !== typeof e.innerSpec)
                    throw TypeError(
                      ".ics23.ProofSpec.innerSpec: object expected",
                    );
                  t.innerSpec = c.ics23.InnerSpec.fromObject(e.innerSpec);
                }
                return (
                  null != e.maxDepth && (t.maxDepth = 0 | e.maxDepth),
                  null != e.minDepth && (t.minDepth = 0 | e.minDepth),
                  t
                );
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                return (
                  t.defaults &&
                    ((r.leafSpec = null),
                    (r.innerSpec = null),
                    (r.maxDepth = 0),
                    (r.minDepth = 0)),
                  null != e.leafSpec &&
                    e.hasOwnProperty("leafSpec") &&
                    (r.leafSpec = c.ics23.LeafOp.toObject(e.leafSpec, t)),
                  null != e.innerSpec &&
                    e.hasOwnProperty("innerSpec") &&
                    (r.innerSpec = c.ics23.InnerSpec.toObject(e.innerSpec, t)),
                  null != e.maxDepth &&
                    e.hasOwnProperty("maxDepth") &&
                    (r.maxDepth = e.maxDepth),
                  null != e.minDepth &&
                    e.hasOwnProperty("minDepth") &&
                    (r.minDepth = e.minDepth),
                  r
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          (e.InnerSpec = (function () {
            function e(e) {
              if (((this.childOrder = []), e))
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            return (
              (e.prototype.childOrder = s.emptyArray),
              (e.prototype.childSize = 0),
              (e.prototype.minPrefixLength = 0),
              (e.prototype.maxPrefixLength = 0),
              (e.prototype.emptyChild = s.newBuffer([])),
              (e.prototype.hash = 0),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                if (
                  (t || (t = o.create()),
                  null != e.childOrder && e.childOrder.length)
                ) {
                  t.uint32(10).fork();
                  for (var r = 0; r < e.childOrder.length; ++r)
                    t.int32(e.childOrder[r]);
                  t.ldelim();
                }
                return (
                  null != e.childSize &&
                    e.hasOwnProperty("childSize") &&
                    t.uint32(16).int32(e.childSize),
                  null != e.minPrefixLength &&
                    e.hasOwnProperty("minPrefixLength") &&
                    t.uint32(24).int32(e.minPrefixLength),
                  null != e.maxPrefixLength &&
                    e.hasOwnProperty("maxPrefixLength") &&
                    t.uint32(32).int32(e.maxPrefixLength),
                  null != e.emptyChild &&
                    e.hasOwnProperty("emptyChild") &&
                    t.uint32(42).bytes(e.emptyChild),
                  null != e.hash &&
                    e.hasOwnProperty("hash") &&
                    t.uint32(48).int32(e.hash),
                  t
                );
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.InnerSpec();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      if (
                        ((n.childOrder && n.childOrder.length) ||
                          (n.childOrder = []),
                        2 === (7 & o))
                      ) {
                        var s = e.uint32() + e.pos;
                        while (e.pos < s) n.childOrder.push(e.int32());
                      } else n.childOrder.push(e.int32());
                      break;
                    case 2:
                      n.childSize = e.int32();
                      break;
                    case 3:
                      n.minPrefixLength = e.int32();
                      break;
                    case 4:
                      n.maxPrefixLength = e.int32();
                      break;
                    case 5:
                      n.emptyChild = e.bytes();
                      break;
                    case 6:
                      n.hash = e.int32();
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                if (null != e.childOrder && e.hasOwnProperty("childOrder")) {
                  if (!Array.isArray(e.childOrder))
                    return "childOrder: array expected";
                  for (var t = 0; t < e.childOrder.length; ++t)
                    if (!s.isInteger(e.childOrder[t]))
                      return "childOrder: integer[] expected";
                }
                if (
                  null != e.childSize &&
                  e.hasOwnProperty("childSize") &&
                  !s.isInteger(e.childSize)
                )
                  return "childSize: integer expected";
                if (
                  null != e.minPrefixLength &&
                  e.hasOwnProperty("minPrefixLength") &&
                  !s.isInteger(e.minPrefixLength)
                )
                  return "minPrefixLength: integer expected";
                if (
                  null != e.maxPrefixLength &&
                  e.hasOwnProperty("maxPrefixLength") &&
                  !s.isInteger(e.maxPrefixLength)
                )
                  return "maxPrefixLength: integer expected";
                if (
                  null != e.emptyChild &&
                  e.hasOwnProperty("emptyChild") &&
                  !(
                    (e.emptyChild && "number" === typeof e.emptyChild.length) ||
                    s.isString(e.emptyChild)
                  )
                )
                  return "emptyChild: buffer expected";
                if (null != e.hash && e.hasOwnProperty("hash"))
                  switch (e.hash) {
                    default:
                      return "hash: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                      break;
                  }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.InnerSpec) return e;
                var t = new c.ics23.InnerSpec();
                if (e.childOrder) {
                  if (!Array.isArray(e.childOrder))
                    throw TypeError(
                      ".ics23.InnerSpec.childOrder: array expected",
                    );
                  t.childOrder = [];
                  for (var r = 0; r < e.childOrder.length; ++r)
                    t.childOrder[r] = 0 | e.childOrder[r];
                }
                switch (
                  (null != e.childSize && (t.childSize = 0 | e.childSize),
                  null != e.minPrefixLength &&
                    (t.minPrefixLength = 0 | e.minPrefixLength),
                  null != e.maxPrefixLength &&
                    (t.maxPrefixLength = 0 | e.maxPrefixLength),
                  null != e.emptyChild &&
                    ("string" === typeof e.emptyChild
                      ? s.base64.decode(
                          e.emptyChild,
                          (t.emptyChild = s.newBuffer(
                            s.base64.length(e.emptyChild),
                          )),
                          0,
                        )
                      : e.emptyChild.length && (t.emptyChild = e.emptyChild)),
                  e.hash)
                ) {
                  case "NO_HASH":
                  case 0:
                    t.hash = 0;
                    break;
                  case "SHA256":
                  case 1:
                    t.hash = 1;
                    break;
                  case "SHA512":
                  case 2:
                    t.hash = 2;
                    break;
                  case "KECCAK":
                  case 3:
                    t.hash = 3;
                    break;
                  case "RIPEMD160":
                  case 4:
                    t.hash = 4;
                    break;
                  case "BITCOIN":
                  case 5:
                    t.hash = 5;
                    break;
                  case "SHA512_256":
                  case 6:
                    t.hash = 6;
                    break;
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                if (
                  ((t.arrays || t.defaults) && (r.childOrder = []),
                  t.defaults &&
                    ((r.childSize = 0),
                    (r.minPrefixLength = 0),
                    (r.maxPrefixLength = 0),
                    t.bytes === String
                      ? (r.emptyChild = "")
                      : ((r.emptyChild = []),
                        t.bytes !== Array &&
                          (r.emptyChild = s.newBuffer(r.emptyChild))),
                    (r.hash = t.enums === String ? "NO_HASH" : 0)),
                  e.childOrder && e.childOrder.length)
                ) {
                  r.childOrder = [];
                  for (var n = 0; n < e.childOrder.length; ++n)
                    r.childOrder[n] = e.childOrder[n];
                }
                return (
                  null != e.childSize &&
                    e.hasOwnProperty("childSize") &&
                    (r.childSize = e.childSize),
                  null != e.minPrefixLength &&
                    e.hasOwnProperty("minPrefixLength") &&
                    (r.minPrefixLength = e.minPrefixLength),
                  null != e.maxPrefixLength &&
                    e.hasOwnProperty("maxPrefixLength") &&
                    (r.maxPrefixLength = e.maxPrefixLength),
                  null != e.emptyChild &&
                    e.hasOwnProperty("emptyChild") &&
                    (r.emptyChild =
                      t.bytes === String
                        ? s.base64.encode(e.emptyChild, 0, e.emptyChild.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.emptyChild)
                          : e.emptyChild),
                  null != e.hash &&
                    e.hasOwnProperty("hash") &&
                    (r.hash =
                      t.enums === String ? c.ics23.HashOp[e.hash] : e.hash),
                  r
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          (e.BatchProof = (function () {
            function e(e) {
              if (((this.entries = []), e))
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            return (
              (e.prototype.entries = s.emptyArray),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                if (
                  (t || (t = o.create()), null != e.entries && e.entries.length)
                )
                  for (var r = 0; r < e.entries.length; ++r)
                    c.ics23.BatchEntry.encode(
                      e.entries[r],
                      t.uint32(10).fork(),
                    ).ldelim();
                return t;
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.BatchProof();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      ((n.entries && n.entries.length) || (n.entries = []),
                        n.entries.push(
                          c.ics23.BatchEntry.decode(e, e.uint32()),
                        ));
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                if (null != e.entries && e.hasOwnProperty("entries")) {
                  if (!Array.isArray(e.entries))
                    return "entries: array expected";
                  for (var t = 0; t < e.entries.length; ++t) {
                    var r = c.ics23.BatchEntry.verify(e.entries[t]);
                    if (r) return "entries." + r;
                  }
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.BatchProof) return e;
                var t = new c.ics23.BatchProof();
                if (e.entries) {
                  if (!Array.isArray(e.entries))
                    throw TypeError(
                      ".ics23.BatchProof.entries: array expected",
                    );
                  t.entries = [];
                  for (var r = 0; r < e.entries.length; ++r) {
                    if ("object" !== typeof e.entries[r])
                      throw TypeError(
                        ".ics23.BatchProof.entries: object expected",
                      );
                    t.entries[r] = c.ics23.BatchEntry.fromObject(e.entries[r]);
                  }
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                if (
                  ((t.arrays || t.defaults) && (r.entries = []),
                  e.entries && e.entries.length)
                ) {
                  r.entries = [];
                  for (var n = 0; n < e.entries.length; ++n)
                    r.entries[n] = c.ics23.BatchEntry.toObject(e.entries[n], t);
                }
                return r;
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          (e.BatchEntry = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            var t;
            return (
              (e.prototype.exist = null),
              (e.prototype.nonexist = null),
              Object.defineProperty(e.prototype, "proof", {
                get: s.oneOfGetter((t = ["exist", "nonexist"])),
                set: s.oneOfSetter(t),
              }),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = o.create()),
                  null != e.exist &&
                    e.hasOwnProperty("exist") &&
                    c.ics23.ExistenceProof.encode(
                      e.exist,
                      t.uint32(10).fork(),
                    ).ldelim(),
                  null != e.nonexist &&
                    e.hasOwnProperty("nonexist") &&
                    c.ics23.NonExistenceProof.encode(
                      e.nonexist,
                      t.uint32(18).fork(),
                    ).ldelim(),
                  t
                );
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.BatchEntry();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      n.exist = c.ics23.ExistenceProof.decode(e, e.uint32());
                      break;
                    case 2:
                      n.nonexist = c.ics23.NonExistenceProof.decode(
                        e,
                        e.uint32(),
                      );
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                var t = {};
                if (null != e.exist && e.hasOwnProperty("exist")) {
                  t.proof = 1;
                  var r = c.ics23.ExistenceProof.verify(e.exist);
                  if (r) return "exist." + r;
                }
                if (null != e.nonexist && e.hasOwnProperty("nonexist")) {
                  if (1 === t.proof) return "proof: multiple values";
                  t.proof = 1;
                  r = c.ics23.NonExistenceProof.verify(e.nonexist);
                  if (r) return "nonexist." + r;
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.BatchEntry) return e;
                var t = new c.ics23.BatchEntry();
                if (null != e.exist) {
                  if ("object" !== typeof e.exist)
                    throw TypeError(".ics23.BatchEntry.exist: object expected");
                  t.exist = c.ics23.ExistenceProof.fromObject(e.exist);
                }
                if (null != e.nonexist) {
                  if ("object" !== typeof e.nonexist)
                    throw TypeError(
                      ".ics23.BatchEntry.nonexist: object expected",
                    );
                  t.nonexist = c.ics23.NonExistenceProof.fromObject(e.nonexist);
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                return (
                  null != e.exist &&
                    e.hasOwnProperty("exist") &&
                    ((r.exist = c.ics23.ExistenceProof.toObject(e.exist, t)),
                    t.oneofs && (r.proof = "exist")),
                  null != e.nonexist &&
                    e.hasOwnProperty("nonexist") &&
                    ((r.nonexist = c.ics23.NonExistenceProof.toObject(
                      e.nonexist,
                      t,
                    )),
                    t.oneofs && (r.proof = "nonexist")),
                  r
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          (e.CompressedBatchProof = (function () {
            function e(e) {
              if (((this.entries = []), (this.lookupInners = []), e))
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            return (
              (e.prototype.entries = s.emptyArray),
              (e.prototype.lookupInners = s.emptyArray),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                if (
                  (t || (t = o.create()), null != e.entries && e.entries.length)
                )
                  for (var r = 0; r < e.entries.length; ++r)
                    c.ics23.CompressedBatchEntry.encode(
                      e.entries[r],
                      t.uint32(10).fork(),
                    ).ldelim();
                if (null != e.lookupInners && e.lookupInners.length)
                  for (r = 0; r < e.lookupInners.length; ++r)
                    c.ics23.InnerOp.encode(
                      e.lookupInners[r],
                      t.uint32(18).fork(),
                    ).ldelim();
                return t;
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.CompressedBatchProof();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      ((n.entries && n.entries.length) || (n.entries = []),
                        n.entries.push(
                          c.ics23.CompressedBatchEntry.decode(e, e.uint32()),
                        ));
                      break;
                    case 2:
                      ((n.lookupInners && n.lookupInners.length) ||
                        (n.lookupInners = []),
                        n.lookupInners.push(
                          c.ics23.InnerOp.decode(e, e.uint32()),
                        ));
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                if (null != e.entries && e.hasOwnProperty("entries")) {
                  if (!Array.isArray(e.entries))
                    return "entries: array expected";
                  for (var t = 0; t < e.entries.length; ++t) {
                    var r = c.ics23.CompressedBatchEntry.verify(e.entries[t]);
                    if (r) return "entries." + r;
                  }
                }
                if (
                  null != e.lookupInners &&
                  e.hasOwnProperty("lookupInners")
                ) {
                  if (!Array.isArray(e.lookupInners))
                    return "lookupInners: array expected";
                  for (t = 0; t < e.lookupInners.length; ++t) {
                    r = c.ics23.InnerOp.verify(e.lookupInners[t]);
                    if (r) return "lookupInners." + r;
                  }
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.CompressedBatchProof) return e;
                var t = new c.ics23.CompressedBatchProof();
                if (e.entries) {
                  if (!Array.isArray(e.entries))
                    throw TypeError(
                      ".ics23.CompressedBatchProof.entries: array expected",
                    );
                  t.entries = [];
                  for (var r = 0; r < e.entries.length; ++r) {
                    if ("object" !== typeof e.entries[r])
                      throw TypeError(
                        ".ics23.CompressedBatchProof.entries: object expected",
                      );
                    t.entries[r] = c.ics23.CompressedBatchEntry.fromObject(
                      e.entries[r],
                    );
                  }
                }
                if (e.lookupInners) {
                  if (!Array.isArray(e.lookupInners))
                    throw TypeError(
                      ".ics23.CompressedBatchProof.lookupInners: array expected",
                    );
                  t.lookupInners = [];
                  for (r = 0; r < e.lookupInners.length; ++r) {
                    if ("object" !== typeof e.lookupInners[r])
                      throw TypeError(
                        ".ics23.CompressedBatchProof.lookupInners: object expected",
                      );
                    t.lookupInners[r] = c.ics23.InnerOp.fromObject(
                      e.lookupInners[r],
                    );
                  }
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                if (
                  ((t.arrays || t.defaults) &&
                    ((r.entries = []), (r.lookupInners = [])),
                  e.entries && e.entries.length)
                ) {
                  r.entries = [];
                  for (var n = 0; n < e.entries.length; ++n)
                    r.entries[n] = c.ics23.CompressedBatchEntry.toObject(
                      e.entries[n],
                      t,
                    );
                }
                if (e.lookupInners && e.lookupInners.length) {
                  r.lookupInners = [];
                  for (n = 0; n < e.lookupInners.length; ++n)
                    r.lookupInners[n] = c.ics23.InnerOp.toObject(
                      e.lookupInners[n],
                      t,
                    );
                }
                return r;
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          (e.CompressedBatchEntry = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            var t;
            return (
              (e.prototype.exist = null),
              (e.prototype.nonexist = null),
              Object.defineProperty(e.prototype, "proof", {
                get: s.oneOfGetter((t = ["exist", "nonexist"])),
                set: s.oneOfSetter(t),
              }),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = o.create()),
                  null != e.exist &&
                    e.hasOwnProperty("exist") &&
                    c.ics23.CompressedExistenceProof.encode(
                      e.exist,
                      t.uint32(10).fork(),
                    ).ldelim(),
                  null != e.nonexist &&
                    e.hasOwnProperty("nonexist") &&
                    c.ics23.CompressedNonExistenceProof.encode(
                      e.nonexist,
                      t.uint32(18).fork(),
                    ).ldelim(),
                  t
                );
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.CompressedBatchEntry();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      n.exist = c.ics23.CompressedExistenceProof.decode(
                        e,
                        e.uint32(),
                      );
                      break;
                    case 2:
                      n.nonexist = c.ics23.CompressedNonExistenceProof.decode(
                        e,
                        e.uint32(),
                      );
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                var t = {};
                if (null != e.exist && e.hasOwnProperty("exist")) {
                  t.proof = 1;
                  var r = c.ics23.CompressedExistenceProof.verify(e.exist);
                  if (r) return "exist." + r;
                }
                if (null != e.nonexist && e.hasOwnProperty("nonexist")) {
                  if (1 === t.proof) return "proof: multiple values";
                  t.proof = 1;
                  r = c.ics23.CompressedNonExistenceProof.verify(e.nonexist);
                  if (r) return "nonexist." + r;
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.CompressedBatchEntry) return e;
                var t = new c.ics23.CompressedBatchEntry();
                if (null != e.exist) {
                  if ("object" !== typeof e.exist)
                    throw TypeError(
                      ".ics23.CompressedBatchEntry.exist: object expected",
                    );
                  t.exist = c.ics23.CompressedExistenceProof.fromObject(
                    e.exist,
                  );
                }
                if (null != e.nonexist) {
                  if ("object" !== typeof e.nonexist)
                    throw TypeError(
                      ".ics23.CompressedBatchEntry.nonexist: object expected",
                    );
                  t.nonexist = c.ics23.CompressedNonExistenceProof.fromObject(
                    e.nonexist,
                  );
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                return (
                  null != e.exist &&
                    e.hasOwnProperty("exist") &&
                    ((r.exist = c.ics23.CompressedExistenceProof.toObject(
                      e.exist,
                      t,
                    )),
                    t.oneofs && (r.proof = "exist")),
                  null != e.nonexist &&
                    e.hasOwnProperty("nonexist") &&
                    ((r.nonexist = c.ics23.CompressedNonExistenceProof.toObject(
                      e.nonexist,
                      t,
                    )),
                    t.oneofs && (r.proof = "nonexist")),
                  r
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          (e.CompressedExistenceProof = (function () {
            function e(e) {
              if (((this.path = []), e))
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            return (
              (e.prototype.key = s.newBuffer([])),
              (e.prototype.value = s.newBuffer([])),
              (e.prototype.leaf = null),
              (e.prototype.path = s.emptyArray),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                if (
                  (t || (t = o.create()),
                  null != e.key &&
                    e.hasOwnProperty("key") &&
                    t.uint32(10).bytes(e.key),
                  null != e.value &&
                    e.hasOwnProperty("value") &&
                    t.uint32(18).bytes(e.value),
                  null != e.leaf &&
                    e.hasOwnProperty("leaf") &&
                    c.ics23.LeafOp.encode(e.leaf, t.uint32(26).fork()).ldelim(),
                  null != e.path && e.path.length)
                ) {
                  t.uint32(34).fork();
                  for (var r = 0; r < e.path.length; ++r) t.int32(e.path[r]);
                  t.ldelim();
                }
                return t;
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.CompressedExistenceProof();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      n.key = e.bytes();
                      break;
                    case 2:
                      n.value = e.bytes();
                      break;
                    case 3:
                      n.leaf = c.ics23.LeafOp.decode(e, e.uint32());
                      break;
                    case 4:
                      if (
                        ((n.path && n.path.length) || (n.path = []),
                        2 === (7 & o))
                      ) {
                        var s = e.uint32() + e.pos;
                        while (e.pos < s) n.path.push(e.int32());
                      } else n.path.push(e.int32());
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                if (
                  null != e.key &&
                  e.hasOwnProperty("key") &&
                  !(
                    (e.key && "number" === typeof e.key.length) ||
                    s.isString(e.key)
                  )
                )
                  return "key: buffer expected";
                if (
                  null != e.value &&
                  e.hasOwnProperty("value") &&
                  !(
                    (e.value && "number" === typeof e.value.length) ||
                    s.isString(e.value)
                  )
                )
                  return "value: buffer expected";
                if (null != e.leaf && e.hasOwnProperty("leaf")) {
                  var t = c.ics23.LeafOp.verify(e.leaf);
                  if (t) return "leaf." + t;
                }
                if (null != e.path && e.hasOwnProperty("path")) {
                  if (!Array.isArray(e.path)) return "path: array expected";
                  for (var r = 0; r < e.path.length; ++r)
                    if (!s.isInteger(e.path[r]))
                      return "path: integer[] expected";
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.CompressedExistenceProof) return e;
                var t = new c.ics23.CompressedExistenceProof();
                if (
                  (null != e.key &&
                    ("string" === typeof e.key
                      ? s.base64.decode(
                          e.key,
                          (t.key = s.newBuffer(s.base64.length(e.key))),
                          0,
                        )
                      : e.key.length && (t.key = e.key)),
                  null != e.value &&
                    ("string" === typeof e.value
                      ? s.base64.decode(
                          e.value,
                          (t.value = s.newBuffer(s.base64.length(e.value))),
                          0,
                        )
                      : e.value.length && (t.value = e.value)),
                  null != e.leaf)
                ) {
                  if ("object" !== typeof e.leaf)
                    throw TypeError(
                      ".ics23.CompressedExistenceProof.leaf: object expected",
                    );
                  t.leaf = c.ics23.LeafOp.fromObject(e.leaf);
                }
                if (e.path) {
                  if (!Array.isArray(e.path))
                    throw TypeError(
                      ".ics23.CompressedExistenceProof.path: array expected",
                    );
                  t.path = [];
                  for (var r = 0; r < e.path.length; ++r)
                    t.path[r] = 0 | e.path[r];
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                if (
                  ((t.arrays || t.defaults) && (r.path = []),
                  t.defaults &&
                    (t.bytes === String
                      ? (r.key = "")
                      : ((r.key = []),
                        t.bytes !== Array && (r.key = s.newBuffer(r.key))),
                    t.bytes === String
                      ? (r.value = "")
                      : ((r.value = []),
                        t.bytes !== Array && (r.value = s.newBuffer(r.value))),
                    (r.leaf = null)),
                  null != e.key &&
                    e.hasOwnProperty("key") &&
                    (r.key =
                      t.bytes === String
                        ? s.base64.encode(e.key, 0, e.key.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.key)
                          : e.key),
                  null != e.value &&
                    e.hasOwnProperty("value") &&
                    (r.value =
                      t.bytes === String
                        ? s.base64.encode(e.value, 0, e.value.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.value)
                          : e.value),
                  null != e.leaf &&
                    e.hasOwnProperty("leaf") &&
                    (r.leaf = c.ics23.LeafOp.toObject(e.leaf, t)),
                  e.path && e.path.length)
                ) {
                  r.path = [];
                  for (var n = 0; n < e.path.length; ++n) r.path[n] = e.path[n];
                }
                return r;
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          (e.CompressedNonExistenceProof = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            return (
              (e.prototype.key = s.newBuffer([])),
              (e.prototype.left = null),
              (e.prototype.right = null),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = o.create()),
                  null != e.key &&
                    e.hasOwnProperty("key") &&
                    t.uint32(10).bytes(e.key),
                  null != e.left &&
                    e.hasOwnProperty("left") &&
                    c.ics23.CompressedExistenceProof.encode(
                      e.left,
                      t.uint32(18).fork(),
                    ).ldelim(),
                  null != e.right &&
                    e.hasOwnProperty("right") &&
                    c.ics23.CompressedExistenceProof.encode(
                      e.right,
                      t.uint32(26).fork(),
                    ).ldelim(),
                  t
                );
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.CompressedNonExistenceProof();
                while (e.pos < r) {
                  var o = e.uint32();
                  switch (o >>> 3) {
                    case 1:
                      n.key = e.bytes();
                      break;
                    case 2:
                      n.left = c.ics23.CompressedExistenceProof.decode(
                        e,
                        e.uint32(),
                      );
                      break;
                    case 3:
                      n.right = c.ics23.CompressedExistenceProof.decode(
                        e,
                        e.uint32(),
                      );
                      break;
                    default:
                      e.skipType(7 & o);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                if ("object" !== typeof e || null === e)
                  return "object expected";
                if (
                  null != e.key &&
                  e.hasOwnProperty("key") &&
                  !(
                    (e.key && "number" === typeof e.key.length) ||
                    s.isString(e.key)
                  )
                )
                  return "key: buffer expected";
                if (null != e.left && e.hasOwnProperty("left")) {
                  var t = c.ics23.CompressedExistenceProof.verify(e.left);
                  if (t) return "left." + t;
                }
                if (null != e.right && e.hasOwnProperty("right")) {
                  t = c.ics23.CompressedExistenceProof.verify(e.right);
                  if (t) return "right." + t;
                }
                return null;
              }),
              (e.fromObject = function (e) {
                if (e instanceof c.ics23.CompressedNonExistenceProof) return e;
                var t = new c.ics23.CompressedNonExistenceProof();
                if (
                  (null != e.key &&
                    ("string" === typeof e.key
                      ? s.base64.decode(
                          e.key,
                          (t.key = s.newBuffer(s.base64.length(e.key))),
                          0,
                        )
                      : e.key.length && (t.key = e.key)),
                  null != e.left)
                ) {
                  if ("object" !== typeof e.left)
                    throw TypeError(
                      ".ics23.CompressedNonExistenceProof.left: object expected",
                    );
                  t.left = c.ics23.CompressedExistenceProof.fromObject(e.left);
                }
                if (null != e.right) {
                  if ("object" !== typeof e.right)
                    throw TypeError(
                      ".ics23.CompressedNonExistenceProof.right: object expected",
                    );
                  t.right = c.ics23.CompressedExistenceProof.fromObject(
                    e.right,
                  );
                }
                return t;
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                return (
                  t.defaults &&
                    (t.bytes === String
                      ? (r.key = "")
                      : ((r.key = []),
                        t.bytes !== Array && (r.key = s.newBuffer(r.key))),
                    (r.left = null),
                    (r.right = null)),
                  null != e.key &&
                    e.hasOwnProperty("key") &&
                    (r.key =
                      t.bytes === String
                        ? s.base64.encode(e.key, 0, e.key.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.key)
                          : e.key),
                  null != e.left &&
                    e.hasOwnProperty("left") &&
                    (r.left = c.ics23.CompressedExistenceProof.toObject(
                      e.left,
                      t,
                    )),
                  null != e.right &&
                    e.hasOwnProperty("right") &&
                    (r.right = c.ics23.CompressedExistenceProof.toObject(
                      e.right,
                      t,
                    )),
                  r
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          e
        );
      })()),
        (e.exports = c));
    },
    3314: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EnglishMnemonic = void 0));
      const s = o(r(3312));
      class EnglishMnemonic {
        constructor(e) {
          if (!EnglishMnemonic.mnemonicMatcher.test(e))
            throw new Error("Invalid mnemonic format");
          const t = e.split(" "),
            r = [12, 15, 18, 21, 24];
          if (-1 === r.indexOf(t.length))
            throw new Error(
              `Invalid word count in mnemonic (allowed: ${r} got: ${t.length})`,
            );
          for (const n of t)
            if (-1 === EnglishMnemonic.wordlist.indexOf(n))
              throw new Error("Mnemonic contains invalid word");
          (s.mnemonicToEntropy(e), (this.data = e));
        }
        toString() {
          return this.data;
        }
      }
      ((t.EnglishMnemonic = EnglishMnemonic),
        (EnglishMnemonic.wordlist = s.wordlists.english),
        (EnglishMnemonic.mnemonicMatcher = /^[a-z]+( [a-z]+)*$/));
    },
    3315: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Hmac = void 0));
      class Hmac {
        constructor(e, t) {
          const r = new e().blockSize;
          this.hash = (t) => new e().update(t).digest();
          let n = t;
          if ((n.length > r && (n = this.hash(n)), n.length < r)) {
            const e = new Uint8Array(r - n.length);
            n = new Uint8Array([...n, ...e]);
          }
          ((this.oKeyPad = n.map((e) => 92 ^ e)),
            (this.iKeyPad = n.map((e) => 54 ^ e)),
            (this.messageHasher = new e()),
            (this.blockSize = r),
            this.update(this.iKeyPad));
        }
        update(e) {
          return (this.messageHasher.update(e), this);
        }
        digest() {
          const e = this.messageHasher.digest();
          return this.hash(new Uint8Array([...this.oKeyPad, ...e]));
        }
      }
      t.Hmac = Hmac;
    },
    3316: function (e, t) {},
    3317: function (e, t) {},
    3318: function (e, t, r) {
      "use strict";
      function n(e) {
        let t = 0;
        for (const r of e) {
          if (0 !== r) break;
          t++;
        }
        return e.slice(t);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ExtendedSecp256k1Signature = t.Secp256k1Signature = void 0));
      const i = 2;
      class Secp256k1Signature {
        constructor(e, t) {
          if (e.length > 32 || 0 === e.length || 0 === e[0])
            throw new Error(
              "Unsigned integer r must be encoded as unpadded big endian.",
            );
          if (t.length > 32 || 0 === t.length || 0 === t[0])
            throw new Error(
              "Unsigned integer s must be encoded as unpadded big endian.",
            );
          this.data = { r: e, s: t };
        }
        static fromFixedLength(e) {
          if (64 !== e.length)
            throw new Error(
              `Got invalid data length: ${e.length}. Expected 2x 32 bytes for the pair (r, s)`,
            );
          return new Secp256k1Signature(n(e.slice(0, 32)), n(e.slice(32, 64)));
        }
        static fromDer(e) {
          let t = 0;
          if (48 !== e[t++]) throw new Error("Prefix 0x30 expected");
          const r = e[t++];
          if (e.length - t !== r)
            throw new Error("Data length mismatch detected");
          const o = e[t++];
          if (o !== i) throw new Error("INTEGER tag expected");
          const s = e[t++];
          if (s >= 128)
            throw new Error("Decoding length values above 127 not supported");
          const c = e.slice(t, t + s);
          t += s;
          const a = e[t++];
          if (a !== i) throw new Error("INTEGER tag expected");
          const u = e[t++];
          if (u >= 128)
            throw new Error("Decoding length values above 127 not supported");
          const l = e.slice(t, t + u);
          return ((t += u), new Secp256k1Signature(n(c), n(l)));
        }
        r(e) {
          if (void 0 === e) return this.data.r;
          {
            const t = e - this.data.r.length;
            if (t < 0) throw new Error("Length too small to hold parameter r");
            const r = new Uint8Array(t);
            return new Uint8Array([...r, ...this.data.r]);
          }
        }
        s(e) {
          if (void 0 === e) return this.data.s;
          {
            const t = e - this.data.s.length;
            if (t < 0) throw new Error("Length too small to hold parameter s");
            const r = new Uint8Array(t);
            return new Uint8Array([...r, ...this.data.s]);
          }
        }
        toFixedLength() {
          return new Uint8Array([...this.r(32), ...this.s(32)]);
        }
        toDer() {
          const e =
              this.data.r[0] >= 128
                ? new Uint8Array([0, ...this.data.r])
                : this.data.r,
            t =
              this.data.s[0] >= 128
                ? new Uint8Array([0, ...this.data.s])
                : this.data.s,
            r = e.length,
            n = t.length,
            o = new Uint8Array([i, r, ...e, i, n, ...t]);
          return new Uint8Array([48, o.length, ...o]);
        }
      }
      t.Secp256k1Signature = Secp256k1Signature;
      class ExtendedSecp256k1Signature extends Secp256k1Signature {
        constructor(e, t, r) {
          if ((super(e, t), !Number.isInteger(r)))
            throw new Error("The recovery parameter must be an integer.");
          if (r < 0 || r > 4)
            throw new Error(
              "The recovery parameter must be one of 0, 1, 2, 3.",
            );
          this.recovery = r;
        }
        static fromFixedLength(e) {
          if (65 !== e.length)
            throw new Error(
              `Got invalid data length ${e.length}. Expected 32 + 32 + 1`,
            );
          return new ExtendedSecp256k1Signature(
            n(e.slice(0, 32)),
            n(e.slice(32, 64)),
            e[64],
          );
        }
        toFixedLength() {
          return new Uint8Array([...this.r(32), ...this.s(32), this.recovery]);
        }
      }
      t.ExtendedSecp256k1Signature = ExtendedSecp256k1Signature;
    },
    3319: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sha512 = t.Sha512 = t.sha256 = t.Sha256 = t.sha1 = t.Sha1 = void 0));
      const i = n(r(814));
      class Sha1 {
        constructor(e) {
          ((this.blockSize = 64),
            (this.impl = i.default("sha1")),
            e && this.update(e));
        }
        update(e) {
          return (this.impl.update(e), this);
        }
        digest() {
          return new Uint8Array(this.impl.digest());
        }
      }
      function o(e) {
        return new Sha1(e).digest();
      }
      ((t.Sha1 = Sha1), (t.sha1 = o));
      class Sha256 {
        constructor(e) {
          ((this.blockSize = 64),
            (this.impl = i.default("sha256")),
            e && this.update(e));
        }
        update(e) {
          return (this.impl.update(e), this);
        }
        digest() {
          return new Uint8Array(this.impl.digest());
        }
      }
      function s(e) {
        return new Sha256(e).digest();
      }
      ((t.Sha256 = Sha256), (t.sha256 = s));
      class Sha512 {
        constructor(e) {
          ((this.blockSize = 128),
            (this.impl = i.default("sha512")),
            e && this.update(e));
        }
        update(e) {
          return (this.impl.update(e), this);
        }
        digest() {
          return new Uint8Array(this.impl.digest());
        }
      }
      function c(e) {
        return new Sha512(e).digest();
      }
      ((t.Sha512 = Sha512), (t.sha512 = c));
    },
    3320: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeCosmoshubPath = void 0));
      const n = r(2800);
      function i(e) {
        return [
          n.Slip10RawIndex.hardened(44),
          n.Slip10RawIndex.hardened(118),
          n.Slip10RawIndex.hardened(0),
          n.Slip10RawIndex.normal(0),
          n.Slip10RawIndex.normal(e),
        ];
      }
      t.makeCosmoshubPath = i;
    },
    3321: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decrypt =
          t.encrypt =
          t.supportedAlgorithms =
          t.executeKdf =
          t.cosmjsSalt =
            void 0));
      const n = r(2800),
        i = r(2762);
      async function o(e, r) {
        switch (r.algorithm) {
          case "argon2id": {
            const i = r.params;
            if (!n.isArgon2idOptions(i))
              throw new Error("Invalid format of argon2id params");
            return n.Argon2id.execute(e, t.cosmjsSalt, i);
          }
          default:
            throw new Error("Unsupported KDF algorithm");
        }
      }
      async function s(e, r, i) {
        switch (i.algorithm) {
          case t.supportedAlgorithms.xchacha20poly1305Ietf: {
            const t = n.Random.getBytes(n.xchacha20NonceLength);
            return new Uint8Array([
              ...t,
              ...(await n.Xchacha20poly1305Ietf.encrypt(e, r, t)),
            ]);
          }
          default:
            throw new Error(
              `Unsupported encryption algorithm: '${i.algorithm}'`,
            );
        }
      }
      async function c(e, r, i) {
        switch (i.algorithm) {
          case t.supportedAlgorithms.xchacha20poly1305Ietf: {
            const t = e.slice(0, n.xchacha20NonceLength);
            return n.Xchacha20poly1305Ietf.decrypt(
              e.slice(n.xchacha20NonceLength),
              r,
              t,
            );
          }
          default:
            throw new Error(
              `Unsupported encryption algorithm: '${i.algorithm}'`,
            );
        }
      }
      ((t.cosmjsSalt = i.toAscii("The CosmJS salt.")),
        (t.executeKdf = o),
        (t.supportedAlgorithms = {
          xchacha20poly1305Ietf: "xchacha20poly1305-ietf",
        }),
        (t.encrypt = s),
        (t.decrypt = c));
    },
    3564: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ensureLeftNeighbor =
          t.ensureSpec =
          t.calculateExistenceRoot =
          t.verifyNonExistence =
          t.verifyExistence =
          t.smtSpec =
          t.tendermintSpec =
          t.iavlSpec =
            void 0));
      const n = r(3153),
        i = r(4413),
        o = r(3565);
      function s(e, t, r, n, i) {
        u(e, t);
        const s = a(e);
        ((0, o.ensureBytesEqual)(s, r),
          (0, o.ensureBytesEqual)(n, e.key),
          (0, o.ensureBytesEqual)(i, e.value));
      }
      function c(e, t, r, n) {
        let i, c;
        if (
          (e.left &&
            (s(e.left, t, r, e.left.key, e.left.value), (i = e.left.key)),
          e.right &&
            (s(e.right, t, r, e.right.key, e.right.value), (c = e.right.key)),
          !i && !c)
        )
          throw new Error("neither left nor right proof defined");
        if (
          (i && (0, o.ensureBytesBefore)(i, n),
          c && (0, o.ensureBytesBefore)(n, c),
          !t.innerSpec)
        )
          throw new Error("no inner spec");
        i
          ? c
            ? h(t.innerSpec, e.left.path, e.right.path)
            : f(t.innerSpec, e.left.path)
          : l(t.innerSpec, e.right.path);
      }
      function a(e) {
        if (!e.key || !e.value)
          throw new Error("Existence proof needs key and value set");
        if (!e.leaf)
          throw new Error("Existence proof must start with a leaf operation");
        const t = e.path || [];
        let r = (0, i.applyLeaf)(e.leaf, e.key, e.value);
        for (const n of t) r = (0, i.applyInner)(n, r);
        return r;
      }
      function u(e, t) {
        if (!e.leaf)
          throw new Error("Existence proof must start with a leaf operation");
        if (!t.leafSpec) throw new Error("Spec must include leafSpec");
        if (!t.innerSpec) throw new Error("Spec must include innerSpec");
        (0, o.ensureLeaf)(e.leaf, t.leafSpec);
        const r = e.path || [];
        if (t.minDepth && r.length < t.minDepth)
          throw new Error("Too few inner nodes " + r.length);
        if (t.maxDepth && r.length > t.maxDepth)
          throw new Error("Too many inner nodes " + r.length);
        for (const n of r)
          (0, o.ensureInner)(n, t.leafSpec.prefix, t.innerSpec);
      }
      function l(e, t) {
        const { minPrefix: r, maxPrefix: n, suffix: i } = b(e, 0);
        for (const o of t)
          if (!y(o, r, n, i)) throw new Error("Step not leftmost");
      }
      function f(e, t) {
        const r = e.childOrder.length - 1,
          { minPrefix: n, maxPrefix: i, suffix: o } = b(e, r);
        for (const s of t)
          if (!y(s, n, i, o)) throw new Error("Step not leftmost");
      }
      function h(e, t, r) {
        const n = [...t],
          i = [...r];
        let s = n.pop(),
          c = i.pop();
        while (
          (0, o.bytesEqual)(s.prefix, c.prefix) &&
          (0, o.bytesEqual)(s.suffix, c.suffix)
        )
          ((s = n.pop()), (c = i.pop()));
        if (!p(e, s, c))
          throw new Error("Not left neightbor at first divergent step");
        (f(e, n), l(e, i));
      }
      function p(e, t, r) {
        const n = d(e, t),
          i = d(e, r);
        return i === n + 1;
      }
      function d(e, t) {
        for (let r = 0; r < e.childOrder.length; r++) {
          const { minPrefix: n, maxPrefix: i, suffix: o } = b(e, r);
          if (y(t, n, i, o)) return r;
        }
        throw new Error("Cannot find any valid spacing for this node");
      }
      function y(e, t, r, n) {
        return (
          !((e.prefix || []).length < t) &&
          !((e.prefix || []).length > r) &&
          (e.suffix || []).length === n
        );
      }
      function b(e, t) {
        const r = m(e.childOrder, t),
          n = r * e.childSize,
          i = n + e.minPrefixLength,
          o = n + e.maxPrefixLength,
          s = (e.childOrder.length - 1 - r) * e.childSize;
        return { minPrefix: i, maxPrefix: o, suffix: s };
      }
      function m(e, t) {
        if (t < 0 || t >= e.length) throw new Error("Invalid branch: " + t);
        return e.findIndex((e) => e === t);
      }
      ((t.iavlSpec = {
        leafSpec: {
          prefix: Uint8Array.from([0]),
          hash: n.ics23.HashOp.SHA256,
          prehashValue: n.ics23.HashOp.SHA256,
          prehashKey: n.ics23.HashOp.NO_HASH,
          length: n.ics23.LengthOp.VAR_PROTO,
        },
        innerSpec: {
          childOrder: [0, 1],
          minPrefixLength: 4,
          maxPrefixLength: 12,
          childSize: 33,
          hash: n.ics23.HashOp.SHA256,
        },
      }),
        (t.tendermintSpec = {
          leafSpec: {
            prefix: Uint8Array.from([0]),
            hash: n.ics23.HashOp.SHA256,
            prehashValue: n.ics23.HashOp.SHA256,
            prehashKey: n.ics23.HashOp.NO_HASH,
            length: n.ics23.LengthOp.VAR_PROTO,
          },
          innerSpec: {
            childOrder: [0, 1],
            minPrefixLength: 1,
            maxPrefixLength: 1,
            childSize: 32,
            hash: n.ics23.HashOp.SHA256,
          },
        }),
        (t.smtSpec = {
          leafSpec: {
            hash: n.ics23.HashOp.SHA256,
            prehashKey: n.ics23.HashOp.NO_HASH,
            prehashValue: n.ics23.HashOp.SHA256,
            length: n.ics23.LengthOp.NO_PREFIX,
            prefix: Uint8Array.from([0]),
          },
          innerSpec: {
            childOrder: [0, 1],
            childSize: 32,
            minPrefixLength: 1,
            maxPrefixLength: 1,
            emptyChild: new Uint8Array(32),
            hash: n.ics23.HashOp.SHA256,
          },
          maxDepth: 256,
        }),
        (t.verifyExistence = s),
        (t.verifyNonExistence = c),
        (t.calculateExistenceRoot = a),
        (t.ensureSpec = u),
        (t.ensureLeftNeighbor = h));
    },
    3565: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (e.hash !== t.hash) throw new Error("Unexpected hashOp: " + e.hash);
        if (e.prehashKey !== t.prehashKey)
          throw new Error("Unexpected prehashKey: " + e.prehashKey);
        if (e.prehashValue !== t.prehashValue)
          throw new Error("Unexpected prehashValue: " + e.prehashValue);
        if (e.length !== t.length)
          throw new Error("Unexpected length op: " + e.length);
        o(e.prefix, t.prefix);
      }
      function i(e, t, r) {
        if (e.hash !== r.hash) throw new Error("Unexpected hashOp: " + e.hash);
        if (!e.prefix) throw new Error("No prefix set for inner node");
        if (a(e.prefix, t)) throw new Error("Inner node has leaf prefix");
        if (e.prefix.length < (r.minPrefixLength || 0))
          throw new Error(`Prefix too short: ${e.prefix.length} bytes`);
        const n = (r.childOrder.length - 1) * r.childSize;
        if (e.prefix.length > (r.maxPrefixLength || 0) + n)
          throw new Error(`Prefix too long: ${e.prefix.length} bytes`);
      }
      function o(e, t) {
        if (t && 0 !== t.length) {
          if (!e) throw new Error("Target bytes missing");
          s(t, e.slice(0, t.length));
        }
      }
      function s(e, t) {
        if (e.length !== t.length)
          throw new Error(`Different lengths ${e.length} vs ${t.length}`);
        for (let r = 0; r < e.length; r++)
          if (e[r] !== t[r])
            throw new Error(`Arrays differ at index ${r}: ${e[r]} vs ${t[r]}`);
      }
      function c(e, t) {
        if (e.length !== t.length) return !1;
        for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function a(e, t) {
        if (!t || 0 === t.length) return !1;
        if (!e) return !1;
        if (e.length <= t.length) return !1;
        for (let r = 0; r < t.length; r++) if (e[r] !== t[r]) return !1;
        throw !0;
      }
      function u(e, t) {
        if (!l(e, t)) throw new Error("first is after last");
      }
      function l(e, t) {
        const r = e.length < t.length ? e.length : t.length;
        for (let n = 0; n < r; n++) {
          if (e[n] < t[n]) return !0;
          if (e[n] > t[n]) return !1;
        }
        return e.length < t.length;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bytesBefore =
          t.ensureBytesBefore =
          t.bytesEqual =
          t.ensureBytesEqual =
          t.ensureInner =
          t.ensureLeaf =
            void 0),
        (t.ensureLeaf = n),
        (t.ensureInner = i),
        (t.ensureBytesEqual = s),
        (t.bytesEqual = c),
        (t.ensureBytesBefore = u),
        (t.bytesBefore = l));
    },
    3748: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Bip39 = void 0));
      const s = r(2762),
        c = o(r(3312)),
        a = r(3314);
      class Bip39 {
        static encode(e) {
          const t = [16, 20, 24, 28, 32];
          if (-1 === t.indexOf(e.length))
            throw new Error("invalid input length");
          return new a.EnglishMnemonic(c.entropyToMnemonic(s.toHex(e)));
        }
        static decode(e) {
          return s.fromHex(c.mnemonicToEntropy(e.toString()));
        }
        static async mnemonicToSeed(e, t) {
          return new Uint8Array(await c.mnemonicToSeed(e.toString(), t));
        }
      }
      t.Bip39 = Bip39;
    },
    3765: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.keccak256 = t.Keccak256 = void 0));
      const i = n(r(53));
      class Keccak256 {
        constructor(e) {
          ((this.blockSize = 64),
            (this.impl = i.default.keccak256.create()),
            e && this.update(e));
        }
        update(e) {
          return (this.impl.update(e), this);
        }
        digest() {
          return new Uint8Array(this.impl.digest());
        }
      }
      function o(e) {
        return new Keccak256(e).digest();
      }
      ((t.Keccak256 = Keccak256), (t.keccak256 = o));
    },
    3766: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Xchacha20poly1305Ietf =
          t.xchacha20NonceLength =
          t.Ed25519 =
          t.Ed25519Keypair =
          t.Argon2id =
          t.isArgon2idOptions =
            void 0));
      const i = r(2815),
        o = n(r(3560));
      function s(e) {
        return (
          !!i.isNonNullObject(e) &&
          "number" === typeof e.outputLength &&
          "number" === typeof e.opsLimit &&
          "number" === typeof e.memLimitKib
        );
      }
      t.isArgon2idOptions = s;
      class Argon2id {
        static async execute(e, t, r) {
          return (
            await o.default.ready,
            o.default.crypto_pwhash(
              r.outputLength,
              e,
              t,
              r.opsLimit,
              1024 * r.memLimitKib,
              o.default.crypto_pwhash_ALG_ARGON2ID13,
            )
          );
        }
      }
      t.Argon2id = Argon2id;
      class Ed25519Keypair {
        constructor(e, t) {
          ((this.privkey = e), (this.pubkey = t));
        }
        static fromLibsodiumPrivkey(e) {
          if (64 !== e.length)
            throw new Error(`Unexpected key length ${e.length}. Must be 64.`);
          return new Ed25519Keypair(e.slice(0, 32), e.slice(32, 64));
        }
        toLibsodiumPrivkey() {
          return new Uint8Array([...this.privkey, ...this.pubkey]);
        }
      }
      t.Ed25519Keypair = Ed25519Keypair;
      class Ed25519 {
        static async makeKeypair(e) {
          await o.default.ready;
          const t = o.default.crypto_sign_seed_keypair(e);
          return Ed25519Keypair.fromLibsodiumPrivkey(t.privateKey);
        }
        static async createSignature(e, t) {
          return (
            await o.default.ready,
            o.default.crypto_sign_detached(e, t.toLibsodiumPrivkey())
          );
        }
        static async verifySignature(e, t, r) {
          return (
            await o.default.ready,
            o.default.crypto_sign_verify_detached(e, t, r)
          );
        }
      }
      ((t.Ed25519 = Ed25519), (t.xchacha20NonceLength = 24));
      class Xchacha20poly1305Ietf {
        static async encrypt(e, t, r) {
          await o.default.ready;
          const n = null;
          return o.default.crypto_aead_xchacha20poly1305_ietf_encrypt(
            e,
            n,
            null,
            r,
            t,
          );
        }
        static async decrypt(e, t, r) {
          await o.default.ready;
          const n = null;
          return o.default.crypto_aead_xchacha20poly1305_ietf_decrypt(
            null,
            e,
            n,
            r,
            t,
          );
        }
      }
      t.Xchacha20poly1305Ietf = Xchacha20poly1305Ietf;
    },
    3772: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Random = void 0));
      class Random {
        static getBytes(e) {
          try {
            const t = "object" === typeof window ? window : self,
              r = "undefined" !== typeof t.crypto ? t.crypto : t.msCrypto,
              n = new Uint8Array(e);
            return (r.getRandomValues(n), n);
          } catch (t) {
            try {
              const t = r(2764);
              return new Uint8Array([...t.randomBytes(e)]);
            } catch (n) {
              throw new Error("No secure random number generator found");
            }
          }
        }
      }
      t.Random = Random;
    },
    3773: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ripemd160 = t.Ripemd160 = void 0));
        const i = n(r(819));
        class Ripemd160 {
          constructor(e) {
            ((this.blockSize = 64),
              (this.impl = new i.default()),
              e && this.update(e));
          }
          update(t) {
            return (this.impl.update(e.from(t)), this);
          }
          digest() {
            return Uint8Array.from(this.impl.digest());
          }
        }
        function o(e) {
          return new Ripemd160(e).digest();
        }
        ((t.Ripemd160 = Ripemd160), (t.ripemd160 = o));
      }).call(this, r(2).Buffer);
    },
    3774: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Secp256k1 = void 0));
      const i = r(2762),
        o = n(r(49)),
        s = n(r(795)),
        c = r(3318),
        a = new s.default.ec("secp256k1"),
        u = new o.default(
          "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141",
          "hex",
        );
      class Secp256k1 {
        static async makeKeypair(e) {
          if (32 !== e.length)
            throw new Error("input data is not a valid secp256k1 private key");
          const t = a.keyFromPrivate(e);
          if (!0 !== t.validate().result)
            throw new Error("input data is not a valid secp256k1 private key");
          const r = new o.default(e);
          if (r.gte(u))
            throw new Error("input data is not a valid secp256k1 private key");
          const n = {
            privkey: i.fromHex(t.getPrivate("hex")),
            pubkey: Uint8Array.from(t.getPublic("array")),
          };
          return n;
        }
        static async createSignature(e, t) {
          if (0 === e.length) throw new Error("Message hash must not be empty");
          if (e.length > 32)
            throw new Error("Message hash length must not exceed 32 bytes");
          const r = a.keyFromPrivate(t),
            { r: n, s: i, recoveryParam: o } = r.sign(e, { canonical: !0 });
          if ("number" !== typeof o) throw new Error("Recovery param missing");
          return new c.ExtendedSecp256k1Signature(
            Uint8Array.from(n.toArray()),
            Uint8Array.from(i.toArray()),
            o,
          );
        }
        static async verifySignature(e, t, r) {
          if (0 === t.length) throw new Error("Message hash must not be empty");
          if (t.length > 32)
            throw new Error("Message hash length must not exceed 32 bytes");
          const n = a.keyFromPublic(r);
          try {
            return n.verify(t, e.toDer());
          } catch (i) {
            return !1;
          }
        }
        static recoverPubkey(e, t) {
          const r = { r: i.toHex(e.r()), s: i.toHex(e.s()) },
            n = a.recoverPubKey(t, r, e.recovery),
            o = a.keyFromPublic(n);
          return i.fromHex(o.getPublic(!1, "hex"));
        }
        static compressPubkey(e) {
          switch (e.length) {
            case 33:
              return e;
            case 65:
              return Uint8Array.from(a.keyFromPublic(e).getPublic(!0, "array"));
            default:
              throw new Error("Invalid pubkey length");
          }
        }
        static trimRecoveryByte(e) {
          switch (e.length) {
            case 64:
              return e;
            case 65:
              return e.slice(0, 64);
            default:
              throw new Error("Invalid signature length");
          }
        }
      }
      t.Secp256k1 = Secp256k1;
    },
    3775: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.stringToPath =
          t.pathToString =
          t.Slip10 =
          t.Slip10RawIndex =
          t.slip10CurveFromString =
          t.Slip10Curve =
            void 0));
      const i = r(2762),
        o = r(2796),
        s = n(r(49)),
        c = n(r(795)),
        a = r(3315),
        u = r(3319);
      var l;
      function f(e) {
        switch (e) {
          case l.Ed25519:
            return l.Ed25519;
          case l.Secp256k1:
            return l.Secp256k1;
          default:
            throw new Error(`Unknown curve string: '${e}'`);
        }
      }
      ((function (e) {
        ((e["Secp256k1"] = "Bitcoin seed"), (e["Ed25519"] = "ed25519 seed"));
      })((l = t.Slip10Curve || (t.Slip10Curve = {}))),
        (t.slip10CurveFromString = f));
      class Slip10RawIndex extends o.Uint32 {
        static hardened(e) {
          return new Slip10RawIndex(e + 2 ** 31);
        }
        static normal(e) {
          return new Slip10RawIndex(e);
        }
        isHardened() {
          return this.data >= 2 ** 31;
        }
      }
      t.Slip10RawIndex = Slip10RawIndex;
      const h = new c.default.ec("secp256k1");
      class Slip10 {
        static derivePath(e, t, r) {
          let n = this.master(e, t);
          for (const i of r) n = this.child(e, n.privkey, n.chainCode, i);
          return n;
        }
        static master(e, t) {
          const r = new a.Hmac(u.Sha512, i.toAscii(e)).update(t).digest(),
            n = r.slice(0, 32),
            o = r.slice(32, 64);
          return e !== l.Ed25519 && (this.isZero(n) || this.isGteN(e, n))
            ? this.master(e, r)
            : { chainCode: o, privkey: n };
        }
        static child(e, t, r, n) {
          let i;
          if (n.isHardened()) {
            const e = new Uint8Array([0, ...t, ...n.toBytesBigEndian()]);
            i = new a.Hmac(u.Sha512, r).update(e).digest();
          } else {
            if (e === l.Ed25519)
              throw new Error("Normal keys are not allowed with ed25519");
            {
              const o = new Uint8Array([
                ...Slip10.serializedPoint(e, new s.default(t)),
                ...n.toBytesBigEndian(),
              ]);
              i = new a.Hmac(u.Sha512, r).update(o).digest();
            }
          }
          return this.childImpl(e, t, r, n, i);
        }
        static serializedPoint(e, t) {
          switch (e) {
            case l.Secp256k1:
              return i.fromHex(h.g.mul(t).encodeCompressed("hex"));
            default:
              throw new Error("curve not supported");
          }
        }
        static childImpl(e, t, r, n, i) {
          const o = i.slice(0, 32),
            c = i.slice(32, 64),
            f = c;
          if (e === l.Ed25519) return { chainCode: f, privkey: o };
          const h = this.n(e),
            p = new s.default(o).add(new s.default(t)).mod(h),
            d = Uint8Array.from(p.toArray("be", 32));
          if (this.isGteN(e, o) || this.isZero(d)) {
            const i = new a.Hmac(u.Sha512, r)
              .update(new Uint8Array([1, ...c, ...n.toBytesBigEndian()]))
              .digest();
            return this.childImpl(e, t, r, n, i);
          }
          return { chainCode: f, privkey: d };
        }
        static isZero(e) {
          return e.every((e) => 0 === e);
        }
        static isGteN(e, t) {
          const r = new s.default(t);
          return r.gte(this.n(e));
        }
        static n(e) {
          switch (e) {
            case l.Secp256k1:
              return new s.default(
                "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141",
                16,
              );
            default:
              throw new Error("curve not supported");
          }
        }
      }
      function p(e) {
        return e.reduce((e, t) => {
          const r = t.isHardened()
            ? t.toNumber() - 2 ** 31 + "'"
            : t.toString();
          return e + "/" + r;
        }, "m");
      }
      function d(e) {
        if (!e.startsWith("m"))
          throw new Error("Path string must start with 'm'");
        let t = e.slice(1);
        const r = new Array();
        while (t) {
          const e = t.match(/^\/([0-9]+)('?)/);
          if (!e) throw new Error("Syntax error while reading path component");
          const [n, i, s] = e,
            c = o.Uint53.fromString(i).toNumber();
          if (c >= 2 ** 31)
            throw new Error(
              "Component value too high. Must not exceed 2**31-1.",
            );
          (s
            ? r.push(Slip10RawIndex.hardened(c))
            : r.push(Slip10RawIndex.normal(c)),
            (t = t.slice(n.length)));
        }
        return r;
      }
      ((t.Slip10 = Slip10), (t.pathToString = p), (t.stringToPath = d));
    },
    3778: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseCoins = t.coins = t.coin = void 0));
      const n = r(2796);
      function i(e, t) {
        return { amount: new n.Uint53(e).toString(), denom: t };
      }
      function o(e, t) {
        return [i(e, t)];
      }
      function s(e) {
        return e
          .replace(/\s/g, "")
          .split(",")
          .filter(Boolean)
          .map((e) => {
            const t = e.match(/^([0-9]+)([a-zA-Z]+)/);
            if (!t) throw new Error("Got an invalid coin string");
            return {
              amount: n.Uint64.fromString(t[1]).toString(),
              denom: t[2],
            };
          });
      }
      ((t.coin = i), (t.coins = o), (t.parseCoins = s));
    },
    3779: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createMultisigThresholdPubkey = t.compareArrays = void 0));
      const n = r(2762),
        i = r(2796),
        o = r(2997);
      function s(e, t) {
        const r = n.toHex(e),
          i = n.toHex(t);
        return r === i ? 0 : r < i ? -1 : 1;
      }
      function c(e, t, r) {
        void 0 === r && (r = !1);
        const n = new i.Uint53(t);
        if (n.toNumber() > e.length)
          throw new Error(
            `Threshold k = ${n.toNumber()} exceeds number of keys n = ${e.length}`,
          );
        const c = r
          ? e
          : Array.from(e).sort((e, t) => {
              const r = o.pubkeyToRawAddress(e),
                n = o.pubkeyToRawAddress(t);
              return s(r, n);
            });
        return {
          type: "tendermint/PubKeyMultisigThreshold",
          value: { threshold: n.toString(), pubkeys: c },
        };
      }
      ((t.compareArrays = s), (t.createMultisigThresholdPubkey = c));
    },
    3780: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Secp256k1HdWallet = t.extractKdfConfiguration = void 0));
      const n = r(2800),
        i = r(2762),
        o = r(2815),
        s = r(2997),
        c = r(3320),
        a = r(3117),
        u = r(3118),
        l = r(3321),
        f = "secp256k1wallet-v1",
        h = {
          algorithm: "argon2id",
          params: { outputLength: 32, opsLimit: 24, memLimitKib: 12288 },
        };
      function p(e) {
        return (
          !!o.isNonNullObject(e) &&
          "string" === typeof e.hdPath &&
          "string" === typeof e.prefix
        );
      }
      function d(e) {
        return e.kdf;
      }
      function y(e) {
        const t = JSON.parse(e);
        if (!o.isNonNullObject(t))
          throw new Error("Root document is not an object.");
        switch (t.type) {
          case f:
            return d(t);
          default:
            throw new Error("Unsupported serialization type");
        }
      }
      t.extractKdfConfiguration = y;
      const b = {
        bip39Password: "",
        hdPaths: [c.makeCosmoshubPath(0)],
        prefix: "cosmos",
      };
      class Secp256k1HdWallet {
        constructor(e, t) {
          var r, n;
          const i = null !== (r = t.hdPaths) && void 0 !== r ? r : b.hdPaths,
            o = null !== (n = t.prefix) && void 0 !== n ? n : b.prefix;
          ((this.secret = e),
            (this.seed = t.seed),
            (this.accounts = i.map((e) => ({ hdPath: e, prefix: o }))));
        }
        static async fromMnemonic(e, t) {
          void 0 === t && (t = {});
          const r = new n.EnglishMnemonic(e),
            i = await n.Bip39.mnemonicToSeed(r, t.bip39Password);
          return new Secp256k1HdWallet(
            r,
            Object.assign(Object.assign({}, t), { seed: i }),
          );
        }
        static async generate(e, t) {
          (void 0 === e && (e = 12), void 0 === t && (t = {}));
          const r = 4 * Math.floor((11 * e) / 33),
            i = n.Random.getBytes(r),
            o = n.Bip39.encode(i);
          return Secp256k1HdWallet.fromMnemonic(o.toString(), t);
        }
        static async deserialize(e, t) {
          const r = JSON.parse(e);
          if (!o.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          switch (r.type) {
            case f:
              return Secp256k1HdWallet.deserializeTypeV1(e, t);
            default:
              throw new Error("Unsupported serialization type");
          }
        }
        static async deserializeWithEncryptionKey(e, t) {
          const r = JSON.parse(e);
          if (!o.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          const s = r;
          switch (s.type) {
            case f: {
              const e = await l.decrypt(i.fromBase64(s.data), t, s.encryption),
                r = JSON.parse(i.fromUtf8(e)),
                { mnemonic: c, accounts: a } = r;
              if ((o.assert("string" === typeof c), !Array.isArray(a)))
                throw new Error("Property 'accounts' is not an array");
              if (!a.every((e) => p(e)))
                throw new Error("Account is not in the correct format.");
              const u = a[0].prefix;
              if (
                !a.every((e) => {
                  let { prefix: t } = e;
                  return t === u;
                })
              )
                throw new Error("Accounts do not all have the same prefix");
              const f = a.map((e) => {
                let { hdPath: t } = e;
                return n.stringToPath(t);
              });
              return Secp256k1HdWallet.fromMnemonic(c, {
                hdPaths: f,
                prefix: u,
              });
            }
            default:
              throw new Error("Unsupported serialization type");
          }
        }
        static async deserializeTypeV1(e, t) {
          const r = JSON.parse(e);
          if (!o.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          const n = await l.executeKdf(t, r.kdf);
          return Secp256k1HdWallet.deserializeWithEncryptionKey(e, n);
        }
        get mnemonic() {
          return this.secret.toString();
        }
        async getAccounts() {
          const e = await this.getAccountsWithPrivkeys();
          return e.map((e) => {
            let { algo: t, pubkey: r, address: n } = e;
            return { algo: t, pubkey: r, address: n };
          });
        }
        async signAmino(e, t) {
          const r = await this.getAccountsWithPrivkeys(),
            i = r.find((t) => {
              let { address: r } = t;
              return r === e;
            });
          if (void 0 === i) throw new Error(`Address ${e} not found in wallet`);
          const { privkey: o, pubkey: s } = i,
            c = n.sha256(u.serializeSignDoc(t)),
            l = await n.Secp256k1.createSignature(c, o),
            f = new Uint8Array([...l.r(32), ...l.s(32)]);
          return { signed: t, signature: a.encodeSecp256k1Signature(s, f) };
        }
        async serialize(e) {
          const t = h,
            r = await l.executeKdf(e, t);
          return this.serializeWithEncryptionKey(r, t);
        }
        async serializeWithEncryptionKey(e, t) {
          const r = {
              mnemonic: this.mnemonic,
              accounts: this.accounts.map((e) => {
                let { hdPath: t, prefix: r } = e;
                return { hdPath: n.pathToString(t), prefix: r };
              }),
            },
            o = i.toUtf8(JSON.stringify(r)),
            s = { algorithm: l.supportedAlgorithms.xchacha20poly1305Ietf },
            c = await l.encrypt(o, e, s),
            a = { type: f, kdf: t, encryption: s, data: i.toBase64(c) };
          return JSON.stringify(a);
        }
        async getKeyPair(e) {
          const { privkey: t } = n.Slip10.derivePath(
              n.Slip10Curve.Secp256k1,
              this.seed,
              e,
            ),
            { pubkey: r } = await n.Secp256k1.makeKeypair(t);
          return { privkey: t, pubkey: n.Secp256k1.compressPubkey(r) };
        }
        async getAccountsWithPrivkeys() {
          return Promise.all(
            this.accounts.map(async (e) => {
              let { hdPath: t, prefix: r } = e;
              const { privkey: n, pubkey: o } = await this.getKeyPair(t),
                c = i.Bech32.encode(r, s.rawSecp256k1PubkeyToRawAddress(o));
              return { algo: "secp256k1", privkey: n, pubkey: o, address: c };
            }),
          );
        }
      }
      t.Secp256k1HdWallet = Secp256k1HdWallet;
    },
    3781: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Secp256k1Wallet = void 0));
      const n = r(2800),
        i = r(2762),
        o = r(2997),
        s = r(3117),
        c = r(3118);
      class Secp256k1Wallet {
        constructor(e, t, r) {
          ((this.privkey = e), (this.pubkey = t), (this.prefix = r));
        }
        static async fromKey(e, t) {
          void 0 === t && (t = "cosmos");
          const r = (await n.Secp256k1.makeKeypair(e)).pubkey;
          return new Secp256k1Wallet(e, n.Secp256k1.compressPubkey(r), t);
        }
        get address() {
          return i.Bech32.encode(
            this.prefix,
            o.rawSecp256k1PubkeyToRawAddress(this.pubkey),
          );
        }
        async getAccounts() {
          return [
            { algo: "secp256k1", address: this.address, pubkey: this.pubkey },
          ];
        }
        async signAmino(e, t) {
          if (e !== this.address)
            throw new Error(`Address ${e} not found in wallet`);
          const r = new n.Sha256(c.serializeSignDoc(t)).digest(),
            i = await n.Secp256k1.createSignature(r, this.privkey),
            o = new Uint8Array([...i.r(32), ...i.s(32)]);
          return {
            signed: t,
            signature: s.encodeSecp256k1Signature(this.pubkey, o),
          };
        }
      }
      t.Secp256k1Wallet = Secp256k1Wallet;
    },
    4410: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.verifyNonExistence =
          t.verifyExistence =
          t.tendermintSpec =
          t.iavlSpec =
          t.calculateExistenceRoot =
          t.verifyNonMembership =
          t.verifyMembership =
          t.ics23 =
            void 0));
      var n = r(3153);
      Object.defineProperty(t, "ics23", {
        enumerable: !0,
        get: function () {
          return n.ics23;
        },
      });
      var i = r(4411);
      (Object.defineProperty(t, "verifyMembership", {
        enumerable: !0,
        get: function () {
          return i.verifyMembership;
        },
      }),
        Object.defineProperty(t, "verifyNonMembership", {
          enumerable: !0,
          get: function () {
            return i.verifyNonMembership;
          },
        }));
      var o = r(3564);
      (Object.defineProperty(t, "calculateExistenceRoot", {
        enumerable: !0,
        get: function () {
          return o.calculateExistenceRoot;
        },
      }),
        Object.defineProperty(t, "iavlSpec", {
          enumerable: !0,
          get: function () {
            return o.iavlSpec;
          },
        }),
        Object.defineProperty(t, "tendermintSpec", {
          enumerable: !0,
          get: function () {
            return o.tendermintSpec;
          },
        }),
        Object.defineProperty(t, "verifyExistence", {
          enumerable: !0,
          get: function () {
            return o.verifyExistence;
          },
        }),
        Object.defineProperty(t, "verifyNonExistence", {
          enumerable: !0,
          get: function () {
            return o.verifyNonExistence;
          },
        }));
    },
    4411: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.batchVerifyNonMembership =
          t.batchVerifyMembership =
          t.verifyNonMembership =
          t.verifyMembership =
            void 0));
      const n = r(4412),
        i = r(3564),
        o = r(3565);
      function s(e, t, r, o, s) {
        const c = (0, n.decompress)(e),
          a = l(c, o);
        if (!a) return !1;
        try {
          return ((0, i.verifyExistence)(a, t, r, o, s), !0);
        } catch (u) {
          return !1;
        }
      }
      function c(e, t, r, o) {
        const s = (0, n.decompress)(e),
          c = f(s, o);
        if (!c) return !1;
        try {
          return ((0, i.verifyNonExistence)(c, t, r, o), !0);
        } catch (a) {
          return !1;
        }
      }
      function a(e, t, r, i) {
        const o = (0, n.decompress)(e);
        for (const [n, c] of i.entries()) if (!s(o, t, r, n, c)) return !1;
        return !0;
      }
      function u(e, t, r, i) {
        const o = (0, n.decompress)(e);
        for (const n of i) if (!c(o, t, r, n)) return !1;
        return !0;
      }
      function l(e, t) {
        const r = (e) => !!e && (0, o.bytesEqual)(t, e.key);
        return r(e.exist)
          ? e.exist
          : e.batch
            ? e.batch.entries.map((e) => e.exist || null).find(r)
            : void 0;
      }
      function f(e, t) {
        const r = (e) =>
          !!e &&
          (!e.left || (0, o.bytesBefore)(e.left.key, t)) &&
          (!e.right || (0, o.bytesBefore)(t, e.right.key));
        return r(e.nonexist)
          ? e.nonexist
          : e.batch
            ? e.batch.entries.map((e) => e.nonexist || null).find(r)
            : void 0;
      }
      ((t.verifyMembership = s),
        (t.verifyNonMembership = c),
        (t.batchVerifyMembership = a),
        (t.batchVerifyNonMembership = u));
    },
    4412: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decompress = t.compress = void 0));
      const n = r(3153);
      function i(e) {
        return e.batch ? { compressed: s(e.batch) } : e;
      }
      function o(e) {
        return e.compressed ? { batch: a(e.compressed) } : e;
      }
      function s(e) {
        const t = [],
          r = [],
          n = new Map();
        for (const i of e.entries)
          if (i.exist) {
            const e = { exist: c(i.exist, r, n) };
            t.push(e);
          } else {
            if (!i.nonexist)
              throw new Error("Unexpected batch entry during compress");
            {
              const e = i.nonexist,
                o = {
                  nonexist: {
                    key: e.key,
                    left: c(e.left, r, n),
                    right: c(e.right, r, n),
                  },
                };
              t.push(o);
            }
          }
        return { entries: t, lookupInners: r };
      }
      function c(e, t, r) {
        if (!e) return;
        const i = e.path.map((e) => {
          const i = n.ics23.InnerOp.encode(e).finish();
          let o = r.get(i);
          return (void 0 === o && ((o = t.length), t.push(e), r.set(i, o)), o);
        });
        return { key: e.key, value: e.value, leaf: e.leaf, path: i };
      }
      function a(e) {
        const t = e.lookupInners,
          r = e.entries.map((e) => {
            if (e.exist) return { exist: u(e.exist, t) };
            if (e.nonexist) {
              const r = e.nonexist;
              return {
                nonexist: {
                  key: r.key,
                  left: u(r.left, t),
                  right: u(r.right, t),
                },
              };
            }
            throw new Error("Unexpected batch entry during compress");
          });
        return { entries: r };
      }
      function u(e, t) {
        if (!e) return;
        const { key: r, value: n, leaf: i, path: o } = e,
          s = (o || []).map((e) => t[e]);
        return { key: r, value: n, leaf: i, path: s };
      }
      ((t.compress = i), (t.decompress = o));
    },
    4413: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.doHash = t.applyInner = t.applyLeaf = void 0));
      const n = r(4414),
        i = r(378),
        o = r(380),
        s = r(3153);
      function c(e, t, r) {
        if (0 === t.length) throw new Error("Missing key");
        if (0 === r.length) throw new Error("Missing value");
        const n = p(l(e.prehashKey), f(e.length), t),
          i = p(l(e.prehashValue), f(e.length), r),
          o = new Uint8Array([...h(e.prefix), ...n, ...i]);
        return y(l(e.hash), o);
      }
      function a(e, t) {
        if (0 === t.length) throw new Error("Inner op needs child value");
        const r = new Uint8Array([...h(e.prefix), ...t, ...h(e.suffix)]);
        return y(l(e.hash), r);
      }
      function u(e, t) {
        return void 0 === e || null === e ? t : e;
      }
      ((t.applyLeaf = c), (t.applyInner = a));
      const l = (e) => u(e, s.ics23.HashOp.NO_HASH),
        f = (e) => u(e, s.ics23.LengthOp.NO_PREFIX),
        h = (e) => u(e, new Uint8Array([]));
      function p(e, t, r) {
        const n = d(e, r);
        return b(t, n);
      }
      function d(e, t) {
        return e === s.ics23.HashOp.NO_HASH ? t : y(e, t);
      }
      function y(e, t) {
        switch (e) {
          case s.ics23.HashOp.SHA256:
            return (0, i.sha256)(t);
          case s.ics23.HashOp.SHA512:
            return (0, o.sha512)(t);
          case s.ics23.HashOp.RIPEMD160:
            return (0, n.ripemd160)(t);
          case s.ics23.HashOp.BITCOIN:
            return (0, n.ripemd160)((0, i.sha256)(t));
          case s.ics23.HashOp.SHA512_256:
            return (0, o.sha512_256)(t);
        }
        throw new Error("Unsupported hashop: " + e);
      }
      function b(e, t) {
        switch (e) {
          case s.ics23.LengthOp.NO_PREFIX:
            return t;
          case s.ics23.LengthOp.VAR_PROTO:
            return new Uint8Array([...m(t.length), ...t]);
          case s.ics23.LengthOp.REQUIRE_32_BYTES:
            if (32 !== t.length)
              throw new Error(`Length is ${t.length}, not 32 bytes`);
            return t;
          case s.ics23.LengthOp.REQUIRE_64_BYTES:
            if (64 !== t.length)
              throw new Error(`Length is ${t.length}, not 64 bytes`);
            return t;
          case s.ics23.LengthOp.FIXED32_LITTLE:
            return new Uint8Array([...g(t.length), ...t]);
        }
        throw new Error("Unsupported lengthop: " + e);
      }
      function m(e) {
        let t = [],
          r = e;
        while (r >= 128) {
          const e = (r % 128) + 128;
          ((t = [...t, e]), (r /= 128));
        }
        return ((t = [...t, r]), new Uint8Array(t));
      }
      function g(e) {
        const t = new Uint8Array(4);
        let r = e;
        for (let n = t.length; n > 0; n--)
          ((t[Math.abs(n - t.length)] = r % 256), (r = Math.floor(r / 256)));
        return t;
      }
      t.doHash = y;
    },
  },
]);
