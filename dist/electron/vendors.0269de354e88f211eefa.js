(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [214],
  {
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
      var o = r(3778);
      (Object.defineProperty(t, "coin", {
        enumerable: !0,
        get: function () {
          return o.coin;
        },
      }),
        Object.defineProperty(t, "coins", {
          enumerable: !0,
          get: function () {
            return o.coins;
          },
        }),
        Object.defineProperty(t, "parseCoins", {
          enumerable: !0,
          get: function () {
            return o.parseCoins;
          },
        }));
      var i = r(3116);
      (Object.defineProperty(t, "decodeAminoPubkey", {
        enumerable: !0,
        get: function () {
          return i.decodeAminoPubkey;
        },
      }),
        Object.defineProperty(t, "decodeBech32Pubkey", {
          enumerable: !0,
          get: function () {
            return i.decodeBech32Pubkey;
          },
        }),
        Object.defineProperty(t, "encodeAminoPubkey", {
          enumerable: !0,
          get: function () {
            return i.encodeAminoPubkey;
          },
        }),
        Object.defineProperty(t, "encodeBech32Pubkey", {
          enumerable: !0,
          get: function () {
            return i.encodeBech32Pubkey;
          },
        }),
        Object.defineProperty(t, "encodeSecp256k1Pubkey", {
          enumerable: !0,
          get: function () {
            return i.encodeSecp256k1Pubkey;
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
      var p = r(3781);
      Object.defineProperty(t, "Secp256k1Wallet", {
        enumerable: !0,
        get: function () {
          return p.Secp256k1Wallet;
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
      var l = r(3118);
      (Object.defineProperty(t, "makeSignDoc", {
        enumerable: !0,
        get: function () {
          return l.makeSignDoc;
        },
      }),
        Object.defineProperty(t, "serializeSignDoc", {
          enumerable: !0,
          get: function () {
            return l.serializeSignDoc;
          },
        }));
      var h = r(3321);
      Object.defineProperty(t, "executeKdf", {
        enumerable: !0,
        get: function () {
          return h.executeKdf;
        },
      });
    },
    2968: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.executeKdf =
          t.makeSignDoc =
          t.makeSignBytes =
          t.makeAuthInfoBytes =
          t.isOfflineDirectSigner =
          t.encodePubkey =
          t.decodePubkey =
          t.makeCosmoshubPath =
          t.DirectSecp256k1Wallet =
          t.DirectSecp256k1HdWallet =
          t.extractKdfConfiguration =
          t.Registry =
          t.isTsProtoGeneratedType =
          t.isPbjsGeneratedType =
          t.isTxBodyEncodeObject =
          t.decodeTxRaw =
          t.parseCoins =
          t.coins =
          t.coin =
            void 0));
      var n = r(2910);
      (Object.defineProperty(t, "coin", {
        enumerable: !0,
        get: function () {
          return n.coin;
        },
      }),
        Object.defineProperty(t, "coins", {
          enumerable: !0,
          get: function () {
            return n.coins;
          },
        }));
      var o = r(3782);
      Object.defineProperty(t, "parseCoins", {
        enumerable: !0,
        get: function () {
          return o.parseCoins;
        },
      });
      var i = r(3783);
      Object.defineProperty(t, "decodeTxRaw", {
        enumerable: !0,
        get: function () {
          return i.decodeTxRaw;
        },
      });
      var s = r(3784);
      (Object.defineProperty(t, "isTxBodyEncodeObject", {
        enumerable: !0,
        get: function () {
          return s.isTxBodyEncodeObject;
        },
      }),
        Object.defineProperty(t, "isPbjsGeneratedType", {
          enumerable: !0,
          get: function () {
            return s.isPbjsGeneratedType;
          },
        }),
        Object.defineProperty(t, "isTsProtoGeneratedType", {
          enumerable: !0,
          get: function () {
            return s.isTsProtoGeneratedType;
          },
        }),
        Object.defineProperty(t, "Registry", {
          enumerable: !0,
          get: function () {
            return s.Registry;
          },
        }));
      var c = r(3785);
      (Object.defineProperty(t, "extractKdfConfiguration", {
        enumerable: !0,
        get: function () {
          return c.extractKdfConfiguration;
        },
      }),
        Object.defineProperty(t, "DirectSecp256k1HdWallet", {
          enumerable: !0,
          get: function () {
            return c.DirectSecp256k1HdWallet;
          },
        }));
      var a = r(3786);
      Object.defineProperty(t, "DirectSecp256k1Wallet", {
        enumerable: !0,
        get: function () {
          return a.DirectSecp256k1Wallet;
        },
      });
      var u = r(3787);
      Object.defineProperty(t, "makeCosmoshubPath", {
        enumerable: !0,
        get: function () {
          return u.makeCosmoshubPath;
        },
      });
      var p = r(3788);
      (Object.defineProperty(t, "decodePubkey", {
        enumerable: !0,
        get: function () {
          return p.decodePubkey;
        },
      }),
        Object.defineProperty(t, "encodePubkey", {
          enumerable: !0,
          get: function () {
            return p.encodePubkey;
          },
        }));
      var f = r(3791);
      Object.defineProperty(t, "isOfflineDirectSigner", {
        enumerable: !0,
        get: function () {
          return f.isOfflineDirectSigner;
        },
      });
      var l = r(3119);
      (Object.defineProperty(t, "makeAuthInfoBytes", {
        enumerable: !0,
        get: function () {
          return l.makeAuthInfoBytes;
        },
      }),
        Object.defineProperty(t, "makeSignBytes", {
          enumerable: !0,
          get: function () {
            return l.makeSignBytes;
          },
        }),
        Object.defineProperty(t, "makeSignDoc", {
          enumerable: !0,
          get: function () {
            return l.makeSignDoc;
          },
        }));
      var h = r(3322);
      Object.defineProperty(t, "executeKdf", {
        enumerable: !0,
        get: function () {
          return h.executeKdf;
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
        o = r(2762),
        i = r(3116),
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
          const t = o.fromBase64(e.value);
          return a(t);
        }
        if (s.isEd25519Pubkey(e)) {
          const t = o.fromBase64(e.value);
          return c(t);
        }
        if (s.isMultisigThresholdPubkey(e)) {
          const t = i.encodeAminoPubkey(e);
          return n.sha256(t).slice(0, 20);
        }
        throw new Error("Unsupported public key type");
      }
      function p(e, t) {
        return o.Bech32.encode(t, u(e));
      }
      ((t.rawEd25519PubkeyToRawAddress = c),
        (t.rawSecp256k1PubkeyToRawAddress = a),
        (t.pubkeyToRawAddress = u),
        (t.pubkeyToAddress = p));
    },
    2998: function (e, t, r) {
      "use strict";
      function n(e) {
        return "tendermint/PubKeyEd25519" === e.type;
      }
      function o(e) {
        return "tendermint/PubKeySecp256k1" === e.type;
      }
      function i(e) {
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
        (t.isSecp256k1Pubkey = o),
        (t.pubkeyType = {
          secp256k1: "tendermint/PubKeySecp256k1",
          ed25519: "tendermint/PubKeyEd25519",
          sr25519: "tendermint/PubKeySr25519",
          multisigThreshold: "tendermint/PubKeyMultisigThreshold",
        }),
        (t.isSinglePubkey = i),
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
        o = r(2796),
        i = r(2815),
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
        p = n.fromHex("0dfb100520"),
        f = n.fromHex("22c1f7e2");
      function l(e) {
        if (i.arrayContentStartsWith(e, a)) {
          const t = e.slice(a.length);
          if (33 !== t.length)
            throw new Error(
              "Invalid rest data length. Expected 33 bytes (compressed secp256k1 pubkey).",
            );
          return { type: s.pubkeyType.secp256k1, value: n.toBase64(t) };
        }
        if (i.arrayContentStartsWith(e, u)) {
          const t = e.slice(u.length);
          if (32 !== t.length)
            throw new Error(
              "Invalid rest data length. Expected 32 bytes (Ed25519 pubkey).",
            );
          return { type: s.pubkeyType.ed25519, value: n.toBase64(t) };
        }
        if (i.arrayContentStartsWith(e, p)) {
          const t = e.slice(p.length);
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
      function h(e) {
        const { data: t } = n.Bech32.decode(e);
        return l(t);
      }
      function d(e) {
        const t = o.Uint53.fromString(e.toString()).toNumber();
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
      ((t.decodeAminoPubkey = l),
        (t.decodeBech32Pubkey = h),
        (t.encodeAminoPubkey = y),
        (t.encodeBech32Pubkey = b));
    },
    3117: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decodeSignature = t.encodeSecp256k1Signature = void 0));
      const n = r(2762),
        o = r(3116),
        i = r(2998);
      function s(e, t) {
        if (64 !== t.length)
          throw new Error(
            "Signature must be 64 bytes long. Cosmos SDK uses a 2x32 byte fixed length encoding for the secp256k1 signature integers r and s.",
          );
        return {
          pub_key: o.encodeSecp256k1Pubkey(e),
          signature: n.toBase64(t),
        };
      }
      function c(e) {
        switch (e.pub_key.type) {
          case i.pubkeyType.secp256k1:
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
        o = r(2796);
      function i(e) {
        if ("object" !== typeof e || null === e) return e;
        if (Array.isArray(e)) return e.map(i);
        const t = Object.keys(e).sort(),
          r = {};
        return (
          t.forEach((t) => {
            r[t] = i(e[t]);
          }),
          r
        );
      }
      function s(e) {
        return JSON.stringify(i(e));
      }
      function c(e, t, r, n, i, s) {
        return {
          chain_id: r,
          account_number: o.Uint53.fromString(i.toString()).toString(),
          sequence: o.Uint53.fromString(s.toString()).toString(),
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
    3119: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeSignBytes = t.makeSignDoc = t.makeAuthInfoBytes = void 0));
      const o = r(3063),
        i = r(2937),
        s = n(r(2754));
      function c(e, t) {
        return e.map((e) => {
          let { pubkey: r, sequence: n } = e;
          return {
            publicKey: r,
            modeInfo: { single: { mode: t } },
            sequence: s.default.fromNumber(n),
          };
        });
      }
      function a(e, t, r, n) {
        void 0 === n && (n = o.SignMode.SIGN_MODE_DIRECT);
        const a = {
          signerInfos: c(e, n),
          fee: { amount: [...t], gasLimit: s.default.fromNumber(r) },
        };
        return i.AuthInfo.encode(i.AuthInfo.fromPartial(a)).finish();
      }
      function u(e, t, r, n) {
        return {
          bodyBytes: e,
          authInfoBytes: t,
          chainId: r,
          accountNumber: s.default.fromNumber(n),
        };
      }
      function p(e) {
        let {
          accountNumber: t,
          authInfoBytes: r,
          bodyBytes: n,
          chainId: o,
        } = e;
        const s = i.SignDoc.fromPartial({
          accountNumber: t,
          authInfoBytes: r,
          bodyBytes: n,
          chainId: o,
        });
        return i.SignDoc.encode(s).finish();
      }
      ((t.makeAuthInfoBytes = a), (t.makeSignDoc = u), (t.makeSignBytes = p));
    },
    3153: function (e, t, r) {
      "use strict";
      var n = r(2755),
        o = n.Reader,
        i = n.Writer,
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
                  (t || (t = i.create()),
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.ExistenceProof();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
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
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
                  t || (t = i.create()),
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.NonExistenceProof();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
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
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
                  t || (t = i.create()),
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.CommitmentProof();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
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
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
                  t || (t = i.create()),
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.LeafOp();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
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
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
                  t || (t = i.create()),
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.InnerOp();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
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
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
                  t || (t = i.create()),
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.ProofSpec();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
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
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
                  (t || (t = i.create()),
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.InnerSpec();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      if (
                        ((n.childOrder && n.childOrder.length) ||
                          (n.childOrder = []),
                        2 === (7 & i))
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
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
                  (t || (t = i.create()), null != e.entries && e.entries.length)
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.BatchProof();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
                    case 1:
                      ((n.entries && n.entries.length) || (n.entries = []),
                        n.entries.push(
                          c.ics23.BatchEntry.decode(e, e.uint32()),
                        ));
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
                  t || (t = i.create()),
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.BatchEntry();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
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
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
                  (t || (t = i.create()), null != e.entries && e.entries.length)
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.CompressedBatchProof();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
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
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
                  t || (t = i.create()),
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.CompressedBatchEntry();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
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
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
                  (t || (t = i.create()),
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.CompressedExistenceProof();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
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
                        2 === (7 & i))
                      ) {
                        var s = e.uint32() + e.pos;
                        while (e.pos < s) n.path.push(e.int32());
                      } else n.path.push(e.int32());
                      break;
                    default:
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
                  t || (t = i.create()),
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
                e instanceof o || (e = o.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new c.ics23.CompressedNonExistenceProof();
                while (e.pos < r) {
                  var i = e.uint32();
                  switch (i >>> 3) {
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
                      e.skipType(7 & i);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof o || (e = new o(e)),
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
    3320: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeCosmoshubPath = void 0));
      const n = r(2800);
      function o(e) {
        return [
          n.Slip10RawIndex.hardened(44),
          n.Slip10RawIndex.hardened(118),
          n.Slip10RawIndex.hardened(0),
          n.Slip10RawIndex.normal(0),
          n.Slip10RawIndex.normal(e),
        ];
      }
      t.makeCosmoshubPath = o;
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
        o = r(2762);
      async function i(e, r) {
        switch (r.algorithm) {
          case "argon2id": {
            const o = r.params;
            if (!n.isArgon2idOptions(o))
              throw new Error("Invalid format of argon2id params");
            return n.Argon2id.execute(e, t.cosmjsSalt, o);
          }
          default:
            throw new Error("Unsupported KDF algorithm");
        }
      }
      async function s(e, r, o) {
        switch (o.algorithm) {
          case t.supportedAlgorithms.xchacha20poly1305Ietf: {
            const t = n.Random.getBytes(n.xchacha20NonceLength);
            return new Uint8Array([
              ...t,
              ...(await n.Xchacha20poly1305Ietf.encrypt(e, r, t)),
            ]);
          }
          default:
            throw new Error(
              `Unsupported encryption algorithm: '${o.algorithm}'`,
            );
        }
      }
      async function c(e, r, o) {
        switch (o.algorithm) {
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
              `Unsupported encryption algorithm: '${o.algorithm}'`,
            );
        }
      }
      ((t.cosmjsSalt = o.toAscii("The CosmJS salt.")),
        (t.executeKdf = i),
        (t.supportedAlgorithms = {
          xchacha20poly1305Ietf: "xchacha20poly1305-ietf",
        }),
        (t.encrypt = s),
        (t.decrypt = c));
    },
    3322: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decrypt =
          t.encrypt =
          t.supportedAlgorithms =
          t.executeKdf =
          t.cosmjsSalt =
            void 0));
      const n = r(2800),
        o = r(2762);
      async function i(e, r) {
        switch (r.algorithm) {
          case "argon2id": {
            const o = r.params;
            if (!n.isArgon2idOptions(o))
              throw new Error("Invalid format of argon2id params");
            return n.Argon2id.execute(e, t.cosmjsSalt, o);
          }
          default:
            throw new Error("Unsupported KDF algorithm");
        }
      }
      async function s(e, r, o) {
        switch (o.algorithm) {
          case t.supportedAlgorithms.xchacha20poly1305Ietf: {
            const t = n.Random.getBytes(n.xchacha20NonceLength);
            return new Uint8Array([
              ...t,
              ...(await n.Xchacha20poly1305Ietf.encrypt(e, r, t)),
            ]);
          }
          default:
            throw new Error(
              `Unsupported encryption algorithm: '${o.algorithm}'`,
            );
        }
      }
      async function c(e, r, o) {
        switch (o.algorithm) {
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
              `Unsupported encryption algorithm: '${o.algorithm}'`,
            );
        }
      }
      ((t.cosmjsSalt = o.toAscii("The CosmJS salt.")),
        (t.executeKdf = i),
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
        o = r(4413),
        i = r(3565);
      function s(e, t, r, n, o) {
        u(e, t);
        const s = a(e);
        ((0, i.ensureBytesEqual)(s, r),
          (0, i.ensureBytesEqual)(n, e.key),
          (0, i.ensureBytesEqual)(o, e.value));
      }
      function c(e, t, r, n) {
        let o, c;
        if (
          (e.left &&
            (s(e.left, t, r, e.left.key, e.left.value), (o = e.left.key)),
          e.right &&
            (s(e.right, t, r, e.right.key, e.right.value), (c = e.right.key)),
          !o && !c)
        )
          throw new Error("neither left nor right proof defined");
        if (
          (o && (0, i.ensureBytesBefore)(o, n),
          c && (0, i.ensureBytesBefore)(n, c),
          !t.innerSpec)
        )
          throw new Error("no inner spec");
        o
          ? c
            ? l(t.innerSpec, e.left.path, e.right.path)
            : f(t.innerSpec, e.left.path)
          : p(t.innerSpec, e.right.path);
      }
      function a(e) {
        if (!e.key || !e.value)
          throw new Error("Existence proof needs key and value set");
        if (!e.leaf)
          throw new Error("Existence proof must start with a leaf operation");
        const t = e.path || [];
        let r = (0, o.applyLeaf)(e.leaf, e.key, e.value);
        for (const n of t) r = (0, o.applyInner)(n, r);
        return r;
      }
      function u(e, t) {
        if (!e.leaf)
          throw new Error("Existence proof must start with a leaf operation");
        if (!t.leafSpec) throw new Error("Spec must include leafSpec");
        if (!t.innerSpec) throw new Error("Spec must include innerSpec");
        (0, i.ensureLeaf)(e.leaf, t.leafSpec);
        const r = e.path || [];
        if (t.minDepth && r.length < t.minDepth)
          throw new Error("Too few inner nodes " + r.length);
        if (t.maxDepth && r.length > t.maxDepth)
          throw new Error("Too many inner nodes " + r.length);
        for (const n of r)
          (0, i.ensureInner)(n, t.leafSpec.prefix, t.innerSpec);
      }
      function p(e, t) {
        const { minPrefix: r, maxPrefix: n, suffix: o } = b(e, 0);
        for (const i of t)
          if (!y(i, r, n, o)) throw new Error("Step not leftmost");
      }
      function f(e, t) {
        const r = e.childOrder.length - 1,
          { minPrefix: n, maxPrefix: o, suffix: i } = b(e, r);
        for (const s of t)
          if (!y(s, n, o, i)) throw new Error("Step not leftmost");
      }
      function l(e, t, r) {
        const n = [...t],
          o = [...r];
        let s = n.pop(),
          c = o.pop();
        while (
          (0, i.bytesEqual)(s.prefix, c.prefix) &&
          (0, i.bytesEqual)(s.suffix, c.suffix)
        )
          ((s = n.pop()), (c = o.pop()));
        if (!h(e, s, c))
          throw new Error("Not left neightbor at first divergent step");
        (f(e, n), p(e, o));
      }
      function h(e, t, r) {
        const n = d(e, t),
          o = d(e, r);
        return o === n + 1;
      }
      function d(e, t) {
        for (let r = 0; r < e.childOrder.length; r++) {
          const { minPrefix: n, maxPrefix: o, suffix: i } = b(e, r);
          if (y(t, n, o, i)) return r;
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
          o = n + e.minPrefixLength,
          i = n + e.maxPrefixLength,
          s = (e.childOrder.length - 1 - r) * e.childSize;
        return { minPrefix: o, maxPrefix: i, suffix: s };
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
        (t.ensureLeftNeighbor = l));
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
        i(e.prefix, t.prefix);
      }
      function o(e, t, r) {
        if (e.hash !== r.hash) throw new Error("Unexpected hashOp: " + e.hash);
        if (!e.prefix) throw new Error("No prefix set for inner node");
        if (a(e.prefix, t)) throw new Error("Inner node has leaf prefix");
        if (e.prefix.length < (r.minPrefixLength || 0))
          throw new Error(`Prefix too short: ${e.prefix.length} bytes`);
        const n = (r.childOrder.length - 1) * r.childSize;
        if (e.prefix.length > (r.maxPrefixLength || 0) + n)
          throw new Error(`Prefix too long: ${e.prefix.length} bytes`);
      }
      function i(e, t) {
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
        if (!p(e, t)) throw new Error("first is after last");
      }
      function p(e, t) {
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
        (t.ensureInner = o),
        (t.ensureBytesEqual = s),
        (t.bytesEqual = c),
        (t.ensureBytesBefore = u),
        (t.bytesBefore = p));
    },
    3578: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.jsonRpcCode =
          t.isJsonRpcSuccessResponse =
          t.isJsonRpcErrorResponse =
          t.parseJsonRpcSuccessResponse =
          t.parseJsonRpcErrorResponse =
          t.parseJsonRpcResponse =
          t.parseJsonRpcRequest =
          t.parseJsonRpcId =
          t.JsonRpcClient =
          t.makeJsonRpcId =
            void 0));
      var n = r(4448);
      Object.defineProperty(t, "makeJsonRpcId", {
        enumerable: !0,
        get: function () {
          return n.makeJsonRpcId;
        },
      });
      var o = r(4449);
      Object.defineProperty(t, "JsonRpcClient", {
        enumerable: !0,
        get: function () {
          return o.JsonRpcClient;
        },
      });
      var i = r(4450);
      (Object.defineProperty(t, "parseJsonRpcId", {
        enumerable: !0,
        get: function () {
          return i.parseJsonRpcId;
        },
      }),
        Object.defineProperty(t, "parseJsonRpcRequest", {
          enumerable: !0,
          get: function () {
            return i.parseJsonRpcRequest;
          },
        }),
        Object.defineProperty(t, "parseJsonRpcResponse", {
          enumerable: !0,
          get: function () {
            return i.parseJsonRpcResponse;
          },
        }),
        Object.defineProperty(t, "parseJsonRpcErrorResponse", {
          enumerable: !0,
          get: function () {
            return i.parseJsonRpcErrorResponse;
          },
        }),
        Object.defineProperty(t, "parseJsonRpcSuccessResponse", {
          enumerable: !0,
          get: function () {
            return i.parseJsonRpcSuccessResponse;
          },
        }));
      var s = r(3579);
      (Object.defineProperty(t, "isJsonRpcErrorResponse", {
        enumerable: !0,
        get: function () {
          return s.isJsonRpcErrorResponse;
        },
      }),
        Object.defineProperty(t, "isJsonRpcSuccessResponse", {
          enumerable: !0,
          get: function () {
            return s.isJsonRpcSuccessResponse;
          },
        }),
        Object.defineProperty(t, "jsonRpcCode", {
          enumerable: !0,
          get: function () {
            return s.jsonRpcCode;
          },
        }));
    },
    3579: function (e, t, r) {
      "use strict";
      function n(e) {
        return "object" === typeof e.error;
      }
      function o(e) {
        return !n(e);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.jsonRpcCode =
          t.isJsonRpcSuccessResponse =
          t.isJsonRpcErrorResponse =
            void 0),
        (t.isJsonRpcErrorResponse = n),
        (t.isJsonRpcSuccessResponse = o),
        (t.jsonRpcCode = {
          parseError: -32700,
          invalidRequest: -32600,
          methodNotFound: -32601,
          invalidParams: -32602,
          internalError: -32603,
          serverError: { default: -32e3 },
        }));
    },
    3778: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseCoins = t.coins = t.coin = void 0));
      const n = r(2796);
      function o(e, t) {
        return { amount: new n.Uint53(e).toString(), denom: t };
      }
      function i(e, t) {
        return [o(e, t)];
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
      ((t.coin = o), (t.coins = i), (t.parseCoins = s));
    },
    3779: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createMultisigThresholdPubkey = t.compareArrays = void 0));
      const n = r(2762),
        o = r(2796),
        i = r(2997);
      function s(e, t) {
        const r = n.toHex(e),
          o = n.toHex(t);
        return r === o ? 0 : r < o ? -1 : 1;
      }
      function c(e, t, r) {
        void 0 === r && (r = !1);
        const n = new o.Uint53(t);
        if (n.toNumber() > e.length)
          throw new Error(
            `Threshold k = ${n.toNumber()} exceeds number of keys n = ${e.length}`,
          );
        const c = r
          ? e
          : Array.from(e).sort((e, t) => {
              const r = i.pubkeyToRawAddress(e),
                n = i.pubkeyToRawAddress(t);
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
        o = r(2762),
        i = r(2815),
        s = r(2997),
        c = r(3320),
        a = r(3117),
        u = r(3118),
        p = r(3321),
        f = "secp256k1wallet-v1",
        l = {
          algorithm: "argon2id",
          params: { outputLength: 32, opsLimit: 24, memLimitKib: 12288 },
        };
      function h(e) {
        return (
          !!i.isNonNullObject(e) &&
          "string" === typeof e.hdPath &&
          "string" === typeof e.prefix
        );
      }
      function d(e) {
        return e.kdf;
      }
      function y(e) {
        const t = JSON.parse(e);
        if (!i.isNonNullObject(t))
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
          const o = null !== (r = t.hdPaths) && void 0 !== r ? r : b.hdPaths,
            i = null !== (n = t.prefix) && void 0 !== n ? n : b.prefix;
          ((this.secret = e),
            (this.seed = t.seed),
            (this.accounts = o.map((e) => ({ hdPath: e, prefix: i }))));
        }
        static async fromMnemonic(e, t) {
          void 0 === t && (t = {});
          const r = new n.EnglishMnemonic(e),
            o = await n.Bip39.mnemonicToSeed(r, t.bip39Password);
          return new Secp256k1HdWallet(
            r,
            Object.assign(Object.assign({}, t), { seed: o }),
          );
        }
        static async generate(e, t) {
          (void 0 === e && (e = 12), void 0 === t && (t = {}));
          const r = 4 * Math.floor((11 * e) / 33),
            o = n.Random.getBytes(r),
            i = n.Bip39.encode(o);
          return Secp256k1HdWallet.fromMnemonic(i.toString(), t);
        }
        static async deserialize(e, t) {
          const r = JSON.parse(e);
          if (!i.isNonNullObject(r))
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
          if (!i.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          const s = r;
          switch (s.type) {
            case f: {
              const e = await p.decrypt(o.fromBase64(s.data), t, s.encryption),
                r = JSON.parse(o.fromUtf8(e)),
                { mnemonic: c, accounts: a } = r;
              if ((i.assert("string" === typeof c), !Array.isArray(a)))
                throw new Error("Property 'accounts' is not an array");
              if (!a.every((e) => h(e)))
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
          if (!i.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          const n = await p.executeKdf(t, r.kdf);
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
            o = r.find((t) => {
              let { address: r } = t;
              return r === e;
            });
          if (void 0 === o) throw new Error(`Address ${e} not found in wallet`);
          const { privkey: i, pubkey: s } = o,
            c = n.sha256(u.serializeSignDoc(t)),
            p = await n.Secp256k1.createSignature(c, i),
            f = new Uint8Array([...p.r(32), ...p.s(32)]);
          return { signed: t, signature: a.encodeSecp256k1Signature(s, f) };
        }
        async serialize(e) {
          const t = l,
            r = await p.executeKdf(e, t);
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
            i = o.toUtf8(JSON.stringify(r)),
            s = { algorithm: p.supportedAlgorithms.xchacha20poly1305Ietf },
            c = await p.encrypt(i, e, s),
            a = { type: f, kdf: t, encryption: s, data: o.toBase64(c) };
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
              const { privkey: n, pubkey: i } = await this.getKeyPair(t),
                c = o.Bech32.encode(r, s.rawSecp256k1PubkeyToRawAddress(i));
              return { algo: "secp256k1", privkey: n, pubkey: i, address: c };
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
        o = r(2762),
        i = r(2997),
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
          return o.Bech32.encode(
            this.prefix,
            i.rawSecp256k1PubkeyToRawAddress(this.pubkey),
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
            o = await n.Secp256k1.createSignature(r, this.privkey),
            i = new Uint8Array([...o.r(32), ...o.s(32)]);
          return {
            signed: t,
            signature: s.encodeSecp256k1Signature(this.pubkey, i),
          };
        }
      }
      t.Secp256k1Wallet = Secp256k1Wallet;
    },
    3782: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseCoins = void 0));
      const n = r(2796);
      function o(e) {
        return e
          .replace(/\s/g, "")
          .split(",")
          .filter(Boolean)
          .map((e) => {
            const t = e.match(/^([0-9]+)([a-zA-Z][a-zA-Z0-9/]{2,127})$/);
            if (!t) throw new Error("Got an invalid coin string");
            return {
              amount: n.Uint64.fromString(t[1]).toString(),
              denom: t[2],
            };
          });
      }
      t.parseCoins = o;
    },
    3783: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decodeTxRaw = void 0));
      const n = r(2937);
      function o(e) {
        const t = n.TxRaw.decode(e);
        return {
          authInfo: n.AuthInfo.decode(t.authInfoBytes),
          body: n.TxBody.decode(t.bodyBytes),
          signatures: t.signatures,
        };
      }
      t.decodeTxRaw = o;
    },
    3784: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Registry =
            t.isTxBodyEncodeObject =
            t.isPbjsGeneratedType =
            t.isTsProtoGeneratedType =
              void 0));
        const n = r(3378),
          o = r(2801),
          i = r(2937),
          s = r(2781);
        function c(e) {
          return "function" === typeof e.fromPartial;
        }
        function a(e) {
          return !c(e);
        }
        ((t.isTsProtoGeneratedType = c), (t.isPbjsGeneratedType = a));
        const u = {
          cosmosCoin: "/cosmos.base.v1beta1.Coin",
          cosmosMsgSend: "/cosmos.bank.v1beta1.MsgSend",
          cosmosTxBody: "/cosmos.tx.v1beta1.TxBody",
          googleAny: "/google.protobuf.Any",
        };
        function p(e) {
          return "/cosmos.tx.v1beta1.TxBody" === e.typeUrl;
        }
        t.isTxBodyEncodeObject = p;
        class Registry {
          constructor(e) {
            void 0 === e && (e = []);
            const { cosmosCoin: t, cosmosMsgSend: r } = u;
            this.types = new Map([[t, o.Coin], [r, n.MsgSend], ...e]);
          }
          register(e, t) {
            this.types.set(e, t);
          }
          lookupType(e) {
            return this.types.get(e);
          }
          lookupTypeWithError(e) {
            const t = this.lookupType(e);
            if (!t) throw new Error("Unregistered type url: " + e);
            return t;
          }
          encode(e) {
            const { value: t, typeUrl: r } = e;
            if (p(e)) return this.encodeTxBody(t);
            const n = this.lookupTypeWithError(r),
              o = c(n) ? n.fromPartial(t) : n.create(t);
            return n.encode(o).finish();
          }
          encodeTxBody(e) {
            const t = e.messages.map((e) => {
                const t = this.encode(e);
                return s.Any.fromPartial({ typeUrl: e.typeUrl, value: t });
              }),
              r = i.TxBody.fromPartial(
                Object.assign(Object.assign({}, e), { messages: t }),
              );
            return i.TxBody.encode(r).finish();
          }
          decode(t) {
            let { typeUrl: r, value: n } = t;
            if (r === u.cosmosTxBody) return this.decodeTxBody(n);
            const o = this.lookupTypeWithError(r),
              i = o.decode(n);
            return (
              Object.entries(i).forEach((t) => {
                let [r, n] = t;
                "undefined" !== typeof e &&
                  "undefined" !== typeof e.isBuffer &&
                  e.isBuffer(n) &&
                  (i[r] = Uint8Array.from(n));
              }),
              i
            );
          }
          decodeTxBody(e) {
            const t = i.TxBody.decode(e);
            return Object.assign(Object.assign({}, t), {
              messages: t.messages.map((e) => {
                let { typeUrl: t, value: r } = e;
                if (!t) throw new Error("Missing type_url in Any");
                if (!r) throw new Error("Missing value in Any");
                return this.decode({ typeUrl: t, value: r });
              }),
            });
          }
        }
        t.Registry = Registry;
      }).call(this, r(2).Buffer);
    },
    3785: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DirectSecp256k1HdWallet = t.extractKdfConfiguration = void 0));
      const n = r(2910),
        o = r(2800),
        i = r(2762),
        s = r(2815),
        c = r(3119),
        a = r(3322),
        u = "directsecp256k1hdwallet-v1",
        p = {
          algorithm: "argon2id",
          params: { outputLength: 32, opsLimit: 24, memLimitKib: 12288 },
        };
      function f(e) {
        return (
          !!s.isNonNullObject(e) &&
          "string" === typeof e.hdPath &&
          "string" === typeof e.prefix
        );
      }
      function l(e) {
        return e.kdf;
      }
      function h(e) {
        const t = JSON.parse(e);
        if (!s.isNonNullObject(t))
          throw new Error("Root document is not an object.");
        switch (t.type) {
          case u:
            return l(t);
          default:
            throw new Error("Unsupported serialization type");
        }
      }
      t.extractKdfConfiguration = h;
      const d = {
        bip39Password: "",
        hdPaths: [n.makeCosmoshubPath(0)],
        prefix: "cosmos",
      };
      class DirectSecp256k1HdWallet {
        constructor(e, t) {
          var r, n;
          const o = null !== (r = t.prefix) && void 0 !== r ? r : d.prefix,
            i = null !== (n = t.hdPaths) && void 0 !== n ? n : d.hdPaths;
          ((this.secret = e),
            (this.seed = t.seed),
            (this.accounts = i.map((e) => ({ hdPath: e, prefix: o }))));
        }
        static async fromMnemonic(e, t) {
          void 0 === t && (t = {});
          const r = new o.EnglishMnemonic(e),
            n = await o.Bip39.mnemonicToSeed(r, t.bip39Password);
          return new DirectSecp256k1HdWallet(
            r,
            Object.assign(Object.assign({}, t), { seed: n }),
          );
        }
        static async generate(e, t) {
          (void 0 === e && (e = 12), void 0 === t && (t = {}));
          const r = 4 * Math.floor((11 * e) / 33),
            n = o.Random.getBytes(r),
            i = o.Bip39.encode(n);
          return DirectSecp256k1HdWallet.fromMnemonic(i.toString(), t);
        }
        static async deserialize(e, t) {
          const r = JSON.parse(e);
          if (!s.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          switch (r.type) {
            case u:
              return DirectSecp256k1HdWallet.deserializeTypeV1(e, t);
            default:
              throw new Error("Unsupported serialization type");
          }
        }
        static async deserializeWithEncryptionKey(e, t) {
          const r = JSON.parse(e);
          if (!s.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          const n = r;
          switch (n.type) {
            case u: {
              const e = await a.decrypt(i.fromBase64(n.data), t, n.encryption),
                r = JSON.parse(i.fromUtf8(e)),
                { mnemonic: c, accounts: u } = r;
              if ((s.assert("string" === typeof c), !Array.isArray(u)))
                throw new Error("Property 'accounts' is not an array");
              if (!u.every((e) => f(e)))
                throw new Error("Account is not in the correct format.");
              const p = u[0].prefix;
              if (
                !u.every((e) => {
                  let { prefix: t } = e;
                  return t === p;
                })
              )
                throw new Error("Accounts do not all have the same prefix");
              const l = u.map((e) => {
                let { hdPath: t } = e;
                return o.stringToPath(t);
              });
              return DirectSecp256k1HdWallet.fromMnemonic(c, {
                hdPaths: l,
                prefix: p,
              });
            }
            default:
              throw new Error("Unsupported serialization type");
          }
        }
        static async deserializeTypeV1(e, t) {
          const r = JSON.parse(e);
          if (!s.isNonNullObject(r))
            throw new Error("Root document is not an object.");
          const n = await a.executeKdf(t, r.kdf);
          return DirectSecp256k1HdWallet.deserializeWithEncryptionKey(e, n);
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
        async signDirect(e, t) {
          const r = await this.getAccountsWithPrivkeys(),
            i = r.find((t) => {
              let { address: r } = t;
              return r === e;
            });
          if (void 0 === i) throw new Error(`Address ${e} not found in wallet`);
          const { privkey: s, pubkey: a } = i,
            u = c.makeSignBytes(t),
            p = o.sha256(u),
            f = await o.Secp256k1.createSignature(p, s),
            l = new Uint8Array([...f.r(32), ...f.s(32)]),
            h = n.encodeSecp256k1Signature(a, l);
          return { signed: t, signature: h };
        }
        async serialize(e) {
          const t = p,
            r = await a.executeKdf(e, t);
          return this.serializeWithEncryptionKey(r, t);
        }
        async serializeWithEncryptionKey(e, t) {
          const r = {
              mnemonic: this.mnemonic,
              accounts: this.accounts.map((e) => {
                let { hdPath: t, prefix: r } = e;
                return { hdPath: o.pathToString(t), prefix: r };
              }),
            },
            n = i.toUtf8(JSON.stringify(r)),
            s = { algorithm: a.supportedAlgorithms.xchacha20poly1305Ietf },
            c = await a.encrypt(n, e, s),
            p = { type: u, kdf: t, encryption: s, data: i.toBase64(c) };
          return JSON.stringify(p);
        }
        async getKeyPair(e) {
          const { privkey: t } = o.Slip10.derivePath(
              o.Slip10Curve.Secp256k1,
              this.seed,
              e,
            ),
            { pubkey: r } = await o.Secp256k1.makeKeypair(t);
          return { privkey: t, pubkey: o.Secp256k1.compressPubkey(r) };
        }
        async getAccountsWithPrivkeys() {
          return Promise.all(
            this.accounts.map(async (e) => {
              let { hdPath: t, prefix: r } = e;
              const { privkey: o, pubkey: s } = await this.getKeyPair(t),
                c = i.Bech32.encode(r, n.rawSecp256k1PubkeyToRawAddress(s));
              return { algo: "secp256k1", privkey: o, pubkey: s, address: c };
            }),
          );
        }
      }
      t.DirectSecp256k1HdWallet = DirectSecp256k1HdWallet;
    },
    3786: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DirectSecp256k1Wallet = void 0));
      const n = r(2910),
        o = r(2800),
        i = r(2762),
        s = r(3119);
      class DirectSecp256k1Wallet {
        constructor(e, t, r) {
          ((this.privkey = e), (this.pubkey = t), (this.prefix = r));
        }
        static async fromKey(e, t) {
          void 0 === t && (t = "cosmos");
          const r = (await o.Secp256k1.makeKeypair(e)).pubkey;
          return new DirectSecp256k1Wallet(e, o.Secp256k1.compressPubkey(r), t);
        }
        get address() {
          return i.Bech32.encode(
            this.prefix,
            n.rawSecp256k1PubkeyToRawAddress(this.pubkey),
          );
        }
        async getAccounts() {
          return [
            { algo: "secp256k1", address: this.address, pubkey: this.pubkey },
          ];
        }
        async signDirect(e, t) {
          const r = s.makeSignBytes(t);
          if (e !== this.address)
            throw new Error(`Address ${e} not found in wallet`);
          const i = o.sha256(r),
            c = await o.Secp256k1.createSignature(i, this.privkey),
            a = new Uint8Array([...c.r(32), ...c.s(32)]),
            u = n.encodeSecp256k1Signature(this.pubkey, a);
          return { signed: t, signature: u };
        }
      }
      t.DirectSecp256k1Wallet = DirectSecp256k1Wallet;
    },
    3787: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeCosmoshubPath = void 0));
      const n = r(2800);
      function o(e) {
        return [
          n.Slip10RawIndex.hardened(44),
          n.Slip10RawIndex.hardened(118),
          n.Slip10RawIndex.hardened(0),
          n.Slip10RawIndex.normal(0),
          n.Slip10RawIndex.normal(e),
        ];
      }
      t.makeCosmoshubPath = o;
    },
    3788: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decodePubkey = t.encodePubkey = void 0));
      const n = r(2910),
        o = r(2762),
        i = r(2796),
        s = r(3789),
        c = r(3790),
        a = r(2781);
      function u(e) {
        if (n.isSecp256k1Pubkey(e)) {
          const t = c.PubKey.fromPartial({ key: o.fromBase64(e.value) });
          return a.Any.fromPartial({
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: Uint8Array.from(c.PubKey.encode(t).finish()),
          });
        }
        if (n.isMultisigThresholdPubkey(e)) {
          const t = s.LegacyAminoPubKey.fromPartial({
            threshold: i.Uint53.fromString(e.value.threshold).toNumber(),
            publicKeys: e.value.pubkeys.map(u),
          });
          return a.Any.fromPartial({
            typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
            value: Uint8Array.from(s.LegacyAminoPubKey.encode(t).finish()),
          });
        }
        throw new Error(`Pubkey type ${e.type} not recognized`);
      }
      function p(e) {
        switch (e.typeUrl) {
          case "/cosmos.crypto.secp256k1.PubKey": {
            const { key: t } = c.PubKey.decode(e.value);
            return n.encodeSecp256k1Pubkey(t);
          }
          default:
            throw new Error(
              `Pubkey type_url ${e.typeUrl} not recognized as single public key type`,
            );
        }
      }
      function f(e) {
        if (!e || !e.value) return null;
        switch (e.typeUrl) {
          case "/cosmos.crypto.secp256k1.PubKey":
            return p(e);
          case "/cosmos.crypto.multisig.LegacyAminoPubKey": {
            const { threshold: t, publicKeys: r } = s.LegacyAminoPubKey.decode(
                e.value,
              ),
              n = {
                type: "tendermint/PubKeyMultisigThreshold",
                value: { threshold: t.toString(), pubkeys: r.map(p) },
              };
            return n;
          }
          default:
            throw new Error(`Pubkey type_url ${e.typeUrl} not recognized`);
        }
      }
      ((t.encodePubkey = u), (t.decodePubkey = f));
    },
    3791: function (e, t, r) {
      "use strict";
      function n(e) {
        return void 0 !== e.signDirect;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isOfflineDirectSigner = void 0),
        (t.isOfflineDirectSigner = n));
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
      var o = r(4411);
      (Object.defineProperty(t, "verifyMembership", {
        enumerable: !0,
        get: function () {
          return o.verifyMembership;
        },
      }),
        Object.defineProperty(t, "verifyNonMembership", {
          enumerable: !0,
          get: function () {
            return o.verifyNonMembership;
          },
        }));
      var i = r(3564);
      (Object.defineProperty(t, "calculateExistenceRoot", {
        enumerable: !0,
        get: function () {
          return i.calculateExistenceRoot;
        },
      }),
        Object.defineProperty(t, "iavlSpec", {
          enumerable: !0,
          get: function () {
            return i.iavlSpec;
          },
        }),
        Object.defineProperty(t, "tendermintSpec", {
          enumerable: !0,
          get: function () {
            return i.tendermintSpec;
          },
        }),
        Object.defineProperty(t, "verifyExistence", {
          enumerable: !0,
          get: function () {
            return i.verifyExistence;
          },
        }),
        Object.defineProperty(t, "verifyNonExistence", {
          enumerable: !0,
          get: function () {
            return i.verifyNonExistence;
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
        o = r(3564),
        i = r(3565);
      function s(e, t, r, i, s) {
        const c = (0, n.decompress)(e),
          a = p(c, i);
        if (!a) return !1;
        try {
          return ((0, o.verifyExistence)(a, t, r, i, s), !0);
        } catch (u) {
          return !1;
        }
      }
      function c(e, t, r, i) {
        const s = (0, n.decompress)(e),
          c = f(s, i);
        if (!c) return !1;
        try {
          return ((0, o.verifyNonExistence)(c, t, r, i), !0);
        } catch (a) {
          return !1;
        }
      }
      function a(e, t, r, o) {
        const i = (0, n.decompress)(e);
        for (const [n, c] of o.entries()) if (!s(i, t, r, n, c)) return !1;
        return !0;
      }
      function u(e, t, r, o) {
        const i = (0, n.decompress)(e);
        for (const n of o) if (!c(i, t, r, n)) return !1;
        return !0;
      }
      function p(e, t) {
        const r = (e) => !!e && (0, i.bytesEqual)(t, e.key);
        return r(e.exist)
          ? e.exist
          : e.batch
            ? e.batch.entries.map((e) => e.exist || null).find(r)
            : void 0;
      }
      function f(e, t) {
        const r = (e) =>
          !!e &&
          (!e.left || (0, i.bytesBefore)(e.left.key, t)) &&
          (!e.right || (0, i.bytesBefore)(t, e.right.key));
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
      function o(e) {
        return e.batch ? { compressed: s(e.batch) } : e;
      }
      function i(e) {
        return e.compressed ? { batch: a(e.compressed) } : e;
      }
      function s(e) {
        const t = [],
          r = [],
          n = new Map();
        for (const o of e.entries)
          if (o.exist) {
            const e = { exist: c(o.exist, r, n) };
            t.push(e);
          } else {
            if (!o.nonexist)
              throw new Error("Unexpected batch entry during compress");
            {
              const e = o.nonexist,
                i = {
                  nonexist: {
                    key: e.key,
                    left: c(e.left, r, n),
                    right: c(e.right, r, n),
                  },
                };
              t.push(i);
            }
          }
        return { entries: t, lookupInners: r };
      }
      function c(e, t, r) {
        if (!e) return;
        const o = e.path.map((e) => {
          const o = n.ics23.InnerOp.encode(e).finish();
          let i = r.get(o);
          return (void 0 === i && ((i = t.length), t.push(e), r.set(o, i)), i);
        });
        return { key: e.key, value: e.value, leaf: e.leaf, path: o };
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
        const { key: r, value: n, leaf: o, path: i } = e,
          s = (i || []).map((e) => t[e]);
        return { key: r, value: n, leaf: o, path: s };
      }
      ((t.compress = o), (t.decompress = i));
    },
    4413: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.doHash = t.applyInner = t.applyLeaf = void 0));
      const n = r(4414),
        o = r(378),
        i = r(380),
        s = r(3153);
      function c(e, t, r) {
        if (0 === t.length) throw new Error("Missing key");
        if (0 === r.length) throw new Error("Missing value");
        const n = h(p(e.prehashKey), f(e.length), t),
          o = h(p(e.prehashValue), f(e.length), r),
          i = new Uint8Array([...l(e.prefix), ...n, ...o]);
        return y(p(e.hash), i);
      }
      function a(e, t) {
        if (0 === t.length) throw new Error("Inner op needs child value");
        const r = new Uint8Array([...l(e.prefix), ...t, ...l(e.suffix)]);
        return y(p(e.hash), r);
      }
      function u(e, t) {
        return void 0 === e || null === e ? t : e;
      }
      ((t.applyLeaf = c), (t.applyInner = a));
      const p = (e) => u(e, s.ics23.HashOp.NO_HASH),
        f = (e) => u(e, s.ics23.LengthOp.NO_PREFIX),
        l = (e) => u(e, new Uint8Array([]));
      function h(e, t, r) {
        const n = d(e, r);
        return b(t, n);
      }
      function d(e, t) {
        return e === s.ics23.HashOp.NO_HASH ? t : y(e, t);
      }
      function y(e, t) {
        switch (e) {
          case s.ics23.HashOp.SHA256:
            return (0, o.sha256)(t);
          case s.ics23.HashOp.SHA512:
            return (0, i.sha512)(t);
          case s.ics23.HashOp.RIPEMD160:
            return (0, n.ripemd160)(t);
          case s.ics23.HashOp.BITCOIN:
            return (0, n.ripemd160)((0, o.sha256)(t));
          case s.ics23.HashOp.SHA512_256:
            return (0, i.sha512_256)(t);
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
    4448: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeJsonRpcId = void 0));
      let n = 1e4;
      function o() {
        return (n += 1);
      }
      t.makeJsonRpcId = o;
    },
    4449: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.JsonRpcClient = void 0));
      const n = r(3154),
        o = r(3579);
      class JsonRpcClient {
        constructor(e) {
          this.connection = e;
        }
        async run(e) {
          const t = this.connection.responseStream.filter((t) => t.id === e.id),
            r = n.firstEvent(t);
          this.connection.sendRequest(e);
          const i = await r;
          if (o.isJsonRpcErrorResponse(i)) {
            const e = i.error;
            throw new Error(
              `JSON RPC error: code=${e.code}; message='${e.message}'`,
            );
          }
          return i;
        }
      }
      t.JsonRpcClient = JsonRpcClient;
    },
    4450: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseJsonRpcResponse =
          t.parseJsonRpcSuccessResponse =
          t.parseJsonRpcErrorResponse =
          t.parseJsonRpcRequest =
          t.parseJsonRpcId =
            void 0));
      const n = r(4451);
      function o(e) {
        if (!n.isJsonCompatibleDictionary(e))
          throw new Error("Data must be JSON compatible dictionary");
        const t = e.id;
        return "number" !== typeof t && "string" !== typeof t ? null : t;
      }
      function i(e) {
        if (!n.isJsonCompatibleDictionary(e))
          throw new Error("Data must be JSON compatible dictionary");
        if ("2.0" !== e.jsonrpc)
          throw new Error("Got unexpected jsonrpc version: " + e.jsonrpc);
        const t = o(e);
        if (null === t) throw new Error("Invalid id field");
        const r = e.method;
        if ("string" !== typeof r) throw new Error("Invalid method field");
        if (
          !n.isJsonCompatibleArray(e.params) &&
          !n.isJsonCompatibleDictionary(e.params)
        )
          throw new Error("Invalid params field");
        return { jsonrpc: "2.0", id: t, method: r, params: e.params };
      }
      function s(e) {
        if ("number" !== typeof e.code)
          throw new Error("Error property 'code' is not a number");
        if ("string" !== typeof e.message)
          throw new Error("Error property 'message' is not a string");
        let t;
        if (void 0 === e.data) t = void 0;
        else {
          if (!n.isJsonCompatibleValue(e.data))
            throw new Error(
              "Error property 'data' is defined but not a JSON compatible value.",
            );
          t = e.data;
        }
        return Object.assign(
          { code: e.code, message: e.message },
          void 0 !== t ? { data: t } : {},
        );
      }
      function c(e) {
        if (!n.isJsonCompatibleDictionary(e))
          throw new Error("Data must be JSON compatible dictionary");
        if ("2.0" !== e.jsonrpc)
          throw new Error(
            "Got unexpected jsonrpc version: " + JSON.stringify(e),
          );
        const t = e.id;
        if ("number" !== typeof t && "string" !== typeof t && null !== t)
          throw new Error("Invalid id field");
        if (
          "undefined" === typeof e.error ||
          !n.isJsonCompatibleDictionary(e.error)
        )
          throw new Error("Invalid error field");
        return { jsonrpc: "2.0", id: t, error: s(e.error) };
      }
      function a(e) {
        if (!n.isJsonCompatibleDictionary(e))
          throw new Error("Data must be JSON compatible dictionary");
        if ("2.0" !== e.jsonrpc)
          throw new Error(
            "Got unexpected jsonrpc version: " + JSON.stringify(e),
          );
        const t = e.id;
        if ("number" !== typeof t && "string" !== typeof t)
          throw new Error("Invalid id field");
        if ("undefined" === typeof e.result)
          throw new Error("Invalid result field");
        const r = e.result;
        return { jsonrpc: "2.0", id: t, result: r };
      }
      function u(e) {
        let t;
        try {
          t = c(e);
        } catch (r) {
          t = a(e);
        }
        return t;
      }
      ((t.parseJsonRpcId = o),
        (t.parseJsonRpcRequest = i),
        (t.parseJsonRpcErrorResponse = c),
        (t.parseJsonRpcSuccessResponse = a),
        (t.parseJsonRpcResponse = u));
    },
    4451: function (e, t, r) {
      "use strict";
      function n(e) {
        return !(
          "string" !== typeof e &&
          "number" !== typeof e &&
          "boolean" !== typeof e &&
          null !== e &&
          !o(e) &&
          !i(e)
        );
      }
      function o(e) {
        if (!Array.isArray(e)) return !1;
        for (const t of e) if (!n(t)) return !1;
        return !0;
      }
      function i(e) {
        if ("object" !== typeof e || null === e) return !1;
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        const t = Object.getOwnPropertyNames(e).map((t) => e[t]);
        return t.every(n);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isJsonCompatibleDictionary =
          t.isJsonCompatibleArray =
          t.isJsonCompatibleValue =
            void 0),
        (t.isJsonCompatibleValue = n),
        (t.isJsonCompatibleArray = o),
        (t.isJsonCompatibleDictionary = i));
    },
  },
]);
