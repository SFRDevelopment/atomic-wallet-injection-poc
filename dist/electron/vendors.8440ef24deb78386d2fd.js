(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [138, 19, 195, 196],
  {
    2758: function (e, t, r) {
      var n = r(2848),
        i = r(2813),
        s = n.tfJSON,
        o = n.TfTypeError,
        u = n.TfPropertyTypeError,
        a = n.tfSubError,
        c = n.getValueTypeName,
        p = {
          arrayOf: function (e, t) {
            function r(r, n) {
              return (
                !!i.Array(r) &&
                !i.Nil(r) &&
                !(void 0 !== t.minLength && r.length < t.minLength) &&
                !(void 0 !== t.maxLength && r.length > t.maxLength) &&
                (void 0 === t.length || r.length === t.length) &&
                r.every(function (t, r) {
                  try {
                    return h(e, t, n);
                  } catch (i) {
                    throw a(i, r);
                  }
                })
              );
            }
            return (
              (e = f(e)),
              (t = t || {}),
              (r.toJSON = function () {
                var r = "[" + s(e) + "]";
                return (
                  void 0 !== t.length
                    ? (r += "{" + t.length + "}")
                    : (void 0 === t.minLength && void 0 === t.maxLength) ||
                      (r +=
                        "{" +
                        (void 0 === t.minLength ? 0 : t.minLength) +
                        "," +
                        (void 0 === t.maxLength ? 1 / 0 : t.maxLength) +
                        "}"),
                  r
                );
              }),
              r
            );
          },
          maybe: function e(t) {
            function r(r, n) {
              return i.Nil(r) || t(r, n, e);
            }
            return (
              (t = f(t)),
              (r.toJSON = function () {
                return "?" + s(t);
              }),
              r
            );
          },
          map: function (e, t) {
            function r(r, n) {
              if (!i.Object(r)) return !1;
              if (i.Nil(r)) return !1;
              for (var s in r) {
                try {
                  t && h(t, s, n);
                } catch (u) {
                  throw a(u, s, "key");
                }
                try {
                  var o = r[s];
                  h(e, o, n);
                } catch (u) {
                  throw a(u, s);
                }
              }
              return !0;
            }
            return (
              (e = f(e)),
              t && (t = f(t)),
              (r.toJSON = t
                ? function () {
                    return "{" + s(t) + ": " + s(e) + "}";
                  }
                : function () {
                    return "{" + s(e) + "}";
                  }),
              r
            );
          },
          object: function (e) {
            var t = {};
            for (var r in e) t[r] = f(e[r]);
            function n(e, r) {
              if (!i.Object(e)) return !1;
              if (i.Nil(e)) return !1;
              var n;
              try {
                for (n in t) {
                  var s = t[n],
                    o = e[n];
                  h(s, o, r);
                }
              } catch (c) {
                throw a(c, n);
              }
              if (r) for (n in e) if (!t[n]) throw new u(void 0, n);
              return !0;
            }
            return (
              (n.toJSON = function () {
                return s(t);
              }),
              n
            );
          },
          anyOf: function () {
            var e = [].slice.call(arguments).map(f);
            function t(t, r) {
              return e.some(function (e) {
                try {
                  return h(e, t, r);
                } catch (n) {
                  return !1;
                }
              });
            }
            return (
              (t.toJSON = function () {
                return e.map(s).join("|");
              }),
              t
            );
          },
          allOf: function () {
            var e = [].slice.call(arguments).map(f);
            function t(t, r) {
              return e.every(function (e) {
                try {
                  return h(e, t, r);
                } catch (n) {
                  return !1;
                }
              });
            }
            return (
              (t.toJSON = function () {
                return e.map(s).join(" & ");
              }),
              t
            );
          },
          quacksLike: function (e) {
            function t(t) {
              return e === c(t);
            }
            return (
              (t.toJSON = function () {
                return e;
              }),
              t
            );
          },
          tuple: function () {
            var e = [].slice.call(arguments).map(f);
            function t(t, r) {
              return (
                !i.Nil(t) &&
                !i.Nil(t.length) &&
                (!r || t.length === e.length) &&
                e.every(function (e, n) {
                  try {
                    return h(e, t[n], r);
                  } catch (i) {
                    throw a(i, n);
                  }
                })
              );
            }
            return (
              (t.toJSON = function () {
                return "(" + e.map(s).join(", ") + ")";
              }),
              t
            );
          },
          value: function (e) {
            function t(t) {
              return t === e;
            }
            return (
              (t.toJSON = function () {
                return e;
              }),
              t
            );
          },
        };
      function f(e) {
        if (i.String(e))
          return "?" === e[0] ? p.maybe(e.slice(1)) : i[e] || p.quacksLike(e);
        if (e && i.Object(e)) {
          if (i.Array(e)) {
            if (1 !== e.length)
              throw new TypeError(
                "Expected compile() parameter of type Array of length 1",
              );
            return p.arrayOf(e[0]);
          }
          return p.object(e);
        }
        return i.Function(e) ? e : p.value(e);
      }
      function h(e, t, r, n) {
        if (i.Function(e)) {
          if (e(t, r)) return !0;
          throw new o(n || e, t);
        }
        return h(f(e), t, r);
      }
      for (var l in ((p.oneOf = p.anyOf), i)) h[l] = i[l];
      for (l in p) h[l] = p[l];
      var d = r(2954);
      for (l in d) h[l] = d[l];
      ((h.compile = f),
        (h.TfTypeError = o),
        (h.TfPropertyTypeError = u),
        (e.exports = h));
    },
    2760: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(3697),
          i = r(3698),
          s = r(2822),
          o = r(2898),
          u = r(2819),
          a = r(3062),
          c = r(2758);
        t.OPS = r(2771);
        const p = r(3108),
          f = t.OPS.OP_RESERVED;
        function h(e) {
          return (
            s.Number(e) &&
            (e === t.OPS.OP_0 ||
              (e >= t.OPS.OP_1 && e <= t.OPS.OP_16) ||
              e === t.OPS.OP_1NEGATE)
          );
        }
        function l(e) {
          return s.Buffer(e) || h(e);
        }
        function d(e) {
          return s.Array(e) && e.every(l);
        }
        function y(e) {
          return 0 === e.length
            ? t.OPS.OP_0
            : 1 === e.length
              ? e[0] >= 1 && e[0] <= 16
                ? f + e[0]
                : 129 === e[0]
                  ? t.OPS.OP_1NEGATE
                  : void 0
              : void 0;
        }
        function w(t) {
          return e.isBuffer(t);
        }
        function g(e) {
          return s.Array(e);
        }
        function _(t) {
          return e.isBuffer(t);
        }
        function m(t) {
          if (w(t)) return t;
          c(s.Array, t);
          const r = t.reduce(
              (e, t) =>
                _(t)
                  ? 1 === t.length && void 0 !== y(t)
                    ? e + 1
                    : e + a.encodingLength(t.length) + t.length
                  : e + 1,
              0,
            ),
            n = e.allocUnsafe(r);
          let i = 0;
          if (
            (t.forEach((e) => {
              if (_(e)) {
                const t = y(e);
                if (void 0 !== t) return (n.writeUInt8(t, i), void (i += 1));
                ((i += a.encode(n, e.length, i)),
                  e.copy(n, i),
                  (i += e.length));
              } else (n.writeUInt8(e, i), (i += 1));
            }),
            i !== n.length)
          )
            throw new Error("Could not decode chunks");
          return n;
        }
        function S(e) {
          if (g(e)) return e;
          c(s.Buffer, e);
          const r = [];
          let n = 0;
          while (n < e.length) {
            const i = e[n];
            if (i > t.OPS.OP_0 && i <= t.OPS.OP_PUSHDATA4) {
              const t = a.decode(e, n);
              if (null === t) return null;
              if (((n += t.size), n + t.number > e.length)) return null;
              const i = e.slice(n, n + t.number);
              n += t.number;
              const s = y(i);
              void 0 !== s ? r.push(s) : r.push(i);
            } else (r.push(i), (n += 1));
          }
          return r;
        }
        function E(e) {
          return (
            w(e) && (e = S(e)),
            e
              .map((e) => {
                if (_(e)) {
                  const t = y(e);
                  if (void 0 === t) return e.toString("hex");
                  e = t;
                }
                return p[e];
              })
              .join(" ")
          );
        }
        function T(r) {
          return (
            c(s.String, r),
            m(
              r
                .split(" ")
                .map((r) =>
                  void 0 !== t.OPS[r]
                    ? t.OPS[r]
                    : (c(s.Hex, r), e.from(r, "hex")),
                ),
            )
          );
        }
        function b(r) {
          return (
            (r = S(r)),
            c(d, r),
            r.map((r) =>
              _(r) ? r : r === t.OPS.OP_0 ? e.allocUnsafe(0) : n.encode(r - f),
            )
          );
        }
        function v(e) {
          return u.isPoint(e);
        }
        function k(e) {
          const t = -129 & e;
          return t > 0 && t < 4;
        }
        function I(t) {
          return (
            !!e.isBuffer(t) && !!k(t[t.length - 1]) && o.check(t.slice(0, -1))
          );
        }
        ((t.isPushOnly = d),
          (t.compile = m),
          (t.decompile = S),
          (t.toASM = E),
          (t.fromASM = T),
          (t.toStack = b),
          (t.isCanonicalPubKey = v),
          (t.isDefinedHashType = k),
          (t.isCanonicalScriptSignature = I),
          (t.number = n),
          (t.signature = i));
      }).call(this, r(2).Buffer);
    },
    2771: function (e) {
      e.exports = JSON.parse(
        '{"OP_FALSE":0,"OP_0":0,"OP_PUSHDATA1":76,"OP_PUSHDATA2":77,"OP_PUSHDATA4":78,"OP_1NEGATE":79,"OP_RESERVED":80,"OP_TRUE":81,"OP_1":81,"OP_2":82,"OP_3":83,"OP_4":84,"OP_5":85,"OP_6":86,"OP_7":87,"OP_8":88,"OP_9":89,"OP_10":90,"OP_11":91,"OP_12":92,"OP_13":93,"OP_14":94,"OP_15":95,"OP_16":96,"OP_NOP":97,"OP_VER":98,"OP_IF":99,"OP_NOTIF":100,"OP_VERIF":101,"OP_VERNOTIF":102,"OP_ELSE":103,"OP_ENDIF":104,"OP_VERIFY":105,"OP_RETURN":106,"OP_TOALTSTACK":107,"OP_FROMALTSTACK":108,"OP_2DROP":109,"OP_2DUP":110,"OP_3DUP":111,"OP_2OVER":112,"OP_2ROT":113,"OP_2SWAP":114,"OP_IFDUP":115,"OP_DEPTH":116,"OP_DROP":117,"OP_DUP":118,"OP_NIP":119,"OP_OVER":120,"OP_PICK":121,"OP_ROLL":122,"OP_ROT":123,"OP_SWAP":124,"OP_TUCK":125,"OP_CAT":126,"OP_SUBSTR":127,"OP_LEFT":128,"OP_RIGHT":129,"OP_SIZE":130,"OP_INVERT":131,"OP_AND":132,"OP_OR":133,"OP_XOR":134,"OP_EQUAL":135,"OP_EQUALVERIFY":136,"OP_RESERVED1":137,"OP_RESERVED2":138,"OP_1ADD":139,"OP_1SUB":140,"OP_2MUL":141,"OP_2DIV":142,"OP_NEGATE":143,"OP_ABS":144,"OP_NOT":145,"OP_0NOTEQUAL":146,"OP_ADD":147,"OP_SUB":148,"OP_MUL":149,"OP_DIV":150,"OP_MOD":151,"OP_LSHIFT":152,"OP_RSHIFT":153,"OP_BOOLAND":154,"OP_BOOLOR":155,"OP_NUMEQUAL":156,"OP_NUMEQUALVERIFY":157,"OP_NUMNOTEQUAL":158,"OP_LESSTHAN":159,"OP_GREATERTHAN":160,"OP_LESSTHANOREQUAL":161,"OP_GREATERTHANOREQUAL":162,"OP_MIN":163,"OP_MAX":164,"OP_WITHIN":165,"OP_RIPEMD160":166,"OP_SHA1":167,"OP_SHA256":168,"OP_HASH160":169,"OP_HASH256":170,"OP_CODESEPARATOR":171,"OP_CHECKSIG":172,"OP_CHECKSIGVERIFY":173,"OP_CHECKMULTISIG":174,"OP_CHECKMULTISIGVERIFY":175,"OP_NOP1":176,"OP_NOP2":177,"OP_CHECKLOCKTIMEVERIFY":177,"OP_NOP3":178,"OP_CHECKSEQUENCEVERIFY":178,"OP_NOP4":179,"OP_NOP5":180,"OP_NOP6":181,"OP_NOP7":182,"OP_NOP8":183,"OP_NOP9":184,"OP_NOP10":185,"OP_PUBKEYHASH":253,"OP_PUBKEY":254,"OP_INVALIDOPCODE":255}',
      );
    },
    2775: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          ((e[(e["UNSIGNED_TX"] = 0)] = "UNSIGNED_TX"),
            (e[(e["GLOBAL_XPUB"] = 1)] = "GLOBAL_XPUB"));
        })(t.GlobalTypes || (t.GlobalTypes = {})),
        (t.GLOBAL_TYPE_NAMES = ["unsignedTx", "globalXpub"]),
        (function (e) {
          ((e[(e["NON_WITNESS_UTXO"] = 0)] = "NON_WITNESS_UTXO"),
            (e[(e["WITNESS_UTXO"] = 1)] = "WITNESS_UTXO"),
            (e[(e["PARTIAL_SIG"] = 2)] = "PARTIAL_SIG"),
            (e[(e["SIGHASH_TYPE"] = 3)] = "SIGHASH_TYPE"),
            (e[(e["REDEEM_SCRIPT"] = 4)] = "REDEEM_SCRIPT"),
            (e[(e["WITNESS_SCRIPT"] = 5)] = "WITNESS_SCRIPT"),
            (e[(e["BIP32_DERIVATION"] = 6)] = "BIP32_DERIVATION"),
            (e[(e["FINAL_SCRIPTSIG"] = 7)] = "FINAL_SCRIPTSIG"),
            (e[(e["FINAL_SCRIPTWITNESS"] = 8)] = "FINAL_SCRIPTWITNESS"),
            (e[(e["POR_COMMITMENT"] = 9)] = "POR_COMMITMENT"),
            (e[(e["TAP_KEY_SIG"] = 19)] = "TAP_KEY_SIG"),
            (e[(e["TAP_SCRIPT_SIG"] = 20)] = "TAP_SCRIPT_SIG"),
            (e[(e["TAP_LEAF_SCRIPT"] = 21)] = "TAP_LEAF_SCRIPT"),
            (e[(e["TAP_BIP32_DERIVATION"] = 22)] = "TAP_BIP32_DERIVATION"),
            (e[(e["TAP_INTERNAL_KEY"] = 23)] = "TAP_INTERNAL_KEY"),
            (e[(e["TAP_MERKLE_ROOT"] = 24)] = "TAP_MERKLE_ROOT"));
        })(t.InputTypes || (t.InputTypes = {})),
        (t.INPUT_TYPE_NAMES = [
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
        (function (e) {
          ((e[(e["REDEEM_SCRIPT"] = 0)] = "REDEEM_SCRIPT"),
            (e[(e["WITNESS_SCRIPT"] = 1)] = "WITNESS_SCRIPT"),
            (e[(e["BIP32_DERIVATION"] = 2)] = "BIP32_DERIVATION"),
            (e[(e["TAP_INTERNAL_KEY"] = 5)] = "TAP_INTERNAL_KEY"),
            (e[(e["TAP_TREE"] = 6)] = "TAP_TREE"),
            (e[(e["TAP_BIP32_DERIVATION"] = 7)] = "TAP_BIP32_DERIVATION"));
        })(t.OutputTypes || (t.OutputTypes = {})),
        (t.OUTPUT_TYPE_NAMES = [
          "redeemScript",
          "witnessScript",
          "bip32Derivation",
          "tapInternalKey",
          "tapTree",
          "tapBip32Derivation",
        ]));
    },
    2792: function (e, t, r) {
      "use strict";
      var n = r(797),
        i = r(3263);
      function s(e) {
        var t = n("sha256").update(e).digest();
        return n("sha256").update(t).digest();
      }
      e.exports = i(s);
    },
    2803: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.bitcoin = {
          messagePrefix: "Bitcoin Signed Message:\n",
          bech32: "bc",
          bip32: { public: 76067358, private: 76066276 },
          pubKeyHash: 0,
          scriptHash: 5,
          wif: 128,
        }),
        (t.regtest = {
          messagePrefix: "Bitcoin Signed Message:\n",
          bech32: "bcrt",
          bip32: { public: 70617039, private: 70615956 },
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
        }),
        (t.testnet = {
          messagePrefix: "Bitcoin Signed Message:\n",
          bech32: "tb",
          bip32: { public: 70617039, private: 70615956 },
          pubKeyHash: 111,
          scriptHash: 196,
          wif: 239,
        }));
    },
    2813: function (e, t) {
      var r = {
        Array: function (e) {
          return null !== e && void 0 !== e && e.constructor === Array;
        },
        Boolean: function (e) {
          return "boolean" === typeof e;
        },
        Function: function (e) {
          return "function" === typeof e;
        },
        Nil: function (e) {
          return void 0 === e || null === e;
        },
        Number: function (e) {
          return "number" === typeof e;
        },
        Object: function (e) {
          return "object" === typeof e;
        },
        String: function (e) {
          return "string" === typeof e;
        },
        "": function () {
          return !0;
        },
      };
      for (var n in ((r.Null = r.Nil), r))
        r[n].toJSON = function (e) {
          return e;
        }.bind(null, n);
      e.exports = r;
    },
    2819: function (e, t, r) {
      (function (t) {
        const n = r(49),
          i = r(795).ec,
          s = new i("secp256k1"),
          o = r(3104),
          u = t.alloc(32, 0),
          a = t.from(
            "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
            "hex",
          ),
          c = t.from(
            "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
            "hex",
          ),
          p = s.curve.n,
          f = p.shrn(1),
          h = s.curve.g,
          l = "Expected Private",
          d = "Expected Point",
          y = "Expected Tweak",
          w = "Expected Hash",
          g = "Expected Signature",
          _ = "Expected Extra Data (32 bytes)";
        function m(e) {
          return t.isBuffer(e) && 32 === e.length;
        }
        function S(e) {
          return !!m(e) && e.compare(a) < 0;
        }
        function E(e) {
          if (!t.isBuffer(e)) return !1;
          if (e.length < 33) return !1;
          const r = e[0],
            n = e.slice(1, 33);
          if (0 === n.compare(u)) return !1;
          if (n.compare(c) >= 0) return !1;
          if ((2 === r || 3 === r) && 33 === e.length) {
            try {
              A(e);
            } catch (s) {
              return !1;
            }
            return !0;
          }
          const i = e.slice(33);
          return (
            0 !== i.compare(u) &&
            !(i.compare(c) >= 0) &&
            4 === r &&
            65 === e.length
          );
        }
        function T(e) {
          return 4 !== e[0];
        }
        function b(e) {
          return !!E(e) && T(e);
        }
        function v(e) {
          return !!m(e) && e.compare(u) > 0 && e.compare(a) < 0;
        }
        function k(e) {
          const r = e.slice(0, 32),
            n = e.slice(32, 64);
          return (
            t.isBuffer(e) &&
            64 === e.length &&
            r.compare(a) < 0 &&
            n.compare(a) < 0
          );
        }
        function I(e, t) {
          return void 0 === e && void 0 !== t ? T(t) : void 0 === e || e;
        }
        function P(e) {
          return new n(e);
        }
        function O(e) {
          return e.toArrayLike(t, "be", 32);
        }
        function A(e) {
          return s.curve.decodePoint(e);
        }
        function N(e, r) {
          return t.from(e._encode(r));
        }
        function U(e, t, r) {
          if (!E(e)) throw new TypeError(d);
          if (!E(t)) throw new TypeError(d);
          const n = A(e),
            i = A(t),
            s = n.add(i);
          if (s.isInfinity()) return null;
          const o = I(r, e);
          return N(s, o);
        }
        function B(e, t, r) {
          if (!E(e)) throw new TypeError(d);
          if (!S(t)) throw new TypeError(y);
          const n = I(r, e),
            i = A(e);
          if (0 === t.compare(u)) return N(i, n);
          const s = P(t),
            o = h.mul(s),
            a = i.add(o);
          return a.isInfinity() ? null : N(a, n);
        }
        function H(e, t) {
          if (!E(e)) throw new TypeError(d);
          const r = A(e);
          if (r.isInfinity()) throw new TypeError(d);
          const n = I(t, e);
          return N(r, n);
        }
        function x(e, t) {
          if (!v(e)) throw new TypeError(l);
          const r = P(e),
            n = h.mul(r);
          if (n.isInfinity()) return null;
          const i = I(t);
          return N(n, i);
        }
        function C(e, t, r) {
          if (!E(e)) throw new TypeError(d);
          if (!S(t)) throw new TypeError(y);
          const n = I(r, e),
            i = A(e),
            s = P(t),
            o = i.mul(s);
          return o.isInfinity() ? null : N(o, n);
        }
        function R(e, t) {
          if (!v(e)) throw new TypeError(l);
          if (!S(t)) throw new TypeError(y);
          const r = P(e),
            n = P(t),
            i = O(r.add(n).umod(p));
          return v(i) ? i : null;
        }
        function K(e, t) {
          if (!v(e)) throw new TypeError(l);
          if (!S(t)) throw new TypeError(y);
          const r = P(e),
            n = P(t),
            i = O(r.sub(n).umod(p));
          return v(i) ? i : null;
        }
        function L(e, t) {
          return M(e, t);
        }
        function D(e, t, r) {
          return M(e, t, r);
        }
        function M(e, r, n) {
          if (!m(e)) throw new TypeError(w);
          if (!v(r)) throw new TypeError(l);
          if (void 0 !== n && !m(n)) throw new TypeError(_);
          const i = P(r),
            s = P(e);
          let u, a;
          const c = function (e) {
            const t = P(e),
              r = h.mul(t);
            return (
              !r.isInfinity() &&
              ((u = r.x.umod(p)),
              0 !== u.isZero() &&
                ((a = t
                  .invm(p)
                  .mul(s.add(i.mul(u)))
                  .umod(p)),
                0 !== a.isZero()))
            );
          };
          (o(e, r, c, v, n), a.cmp(f) > 0 && (a = p.sub(a)));
          const d = t.allocUnsafe(64);
          return (O(u).copy(d, 0), O(a).copy(d, 32), d);
        }
        function V(e, t, r, n) {
          if (!m(e)) throw new TypeError(w);
          if (!E(t)) throw new TypeError(d);
          if (!k(r)) throw new TypeError(g);
          const i = A(t),
            s = P(r.slice(0, 32)),
            o = P(r.slice(32, 64));
          if (n && o.cmp(f) > 0) return !1;
          if (s.gtn(0) <= 0) return !1;
          if (o.gtn(0) <= 0) return !1;
          const u = P(e),
            a = o.invm(p),
            c = u.mul(a).umod(p),
            l = s.mul(a).umod(p),
            y = h.mulAdd(c, i, l);
          if (y.isInfinity()) return !1;
          const _ = y.x,
            S = _.umod(p);
          return S.eq(s);
        }
        e.exports = {
          isPoint: E,
          isPointCompressed: b,
          isPrivate: v,
          pointAdd: U,
          pointAddScalar: B,
          pointCompress: H,
          pointFromScalar: x,
          pointMultiply: C,
          privateAdd: R,
          privateSub: K,
          sign: L,
          signWithEntropy: D,
          verify: V,
        };
      }).call(this, r(2).Buffer);
    },
    2822: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2758),
        i = Math.pow(2, 31) - 1;
      function s(e) {
        return n.UInt32(e) && e <= i;
      }
      function o(e) {
        return n.String(e) && !!e.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
      }
      function u(e) {
        return (
          (n.Buffer(e.publicKey) || "function" === typeof e.getPublicKey) &&
          "function" === typeof e.sign
        );
      }
      ((t.UInt31 = s),
        (t.BIP32Path = o),
        (o.toJSON = () => "BIP32 derivation path"),
        (t.Signer = u));
      const a = 21e14;
      function c(e) {
        return n.UInt53(e) && e <= a;
      }
      ((t.Satoshi = c),
        (t.ECPoint = n.quacksLike("Point")),
        (t.Network = n.compile({
          messagePrefix: n.oneOf(n.Buffer, n.String),
          bip32: { public: n.UInt32, private: n.UInt32 },
          pubKeyHash: n.UInt8,
          scriptHash: n.UInt8,
          wif: n.UInt8,
        })),
        (t.Buffer256bit = n.BufferN(32)),
        (t.Hash160bit = n.BufferN(20)),
        (t.Hash256bit = n.BufferN(32)),
        (t.Number = n.Number),
        (t.Array = n.Array),
        (t.Boolean = n.Boolean),
        (t.String = n.String),
        (t.Buffer = n.Buffer),
        (t.Hex = n.Hex),
        (t.maybe = n.maybe),
        (t.tuple = n.tuple),
        (t.UInt8 = n.UInt8),
        (t.UInt32 = n.UInt32),
        (t.Function = n.Function),
        (t.BufferN = n.BufferN),
        (t.Null = n.Null),
        (t.oneOf = n.oneOf));
    },
    2828: function (e, t, r) {
      "use strict";
      var n = r(16),
        i = r(4904),
        s = r(806),
        o = r(46).Buffer,
        u = r(4607),
        a = r(819),
        c = r(814),
        p = o.alloc(128);
      function f(e, t) {
        (s.call(this, "digest"), "string" === typeof t && (t = o.from(t)));
        var r = "sha512" === e || "sha384" === e ? 128 : 64;
        if (((this._alg = e), (this._key = t), t.length > r)) {
          var n = "rmd160" === e ? new a() : c(e);
          t = n.update(t).digest();
        } else t.length < r && (t = o.concat([t, p], r));
        for (
          var i = (this._ipad = o.allocUnsafe(r)),
            u = (this._opad = o.allocUnsafe(r)),
            f = 0;
          f < r;
          f++
        )
          ((i[f] = 54 ^ t[f]), (u[f] = 92 ^ t[f]));
        ((this._hash = "rmd160" === e ? new a() : c(e)), this._hash.update(i));
      }
      (n(f, s),
        (f.prototype._update = function (e) {
          this._hash.update(e);
        }),
        (f.prototype._final = function () {
          var e = this._hash.digest(),
            t = "rmd160" === this._alg ? new a() : c(this._alg);
          return t.update(this._opad).update(e).digest();
        }),
        (e.exports = function (e, t) {
          return (
            (e = e.toLowerCase()),
            "rmd160" === e || "ripemd160" === e
              ? new f("rmd160", t)
              : "md5" === e
                ? new i(u, t)
                : new f(e, t)
          );
        }));
    },
    2832: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(797);
      function i(e) {
        try {
          return n("rmd160").update(e).digest();
        } catch (t) {
          return n("ripemd160").update(e).digest();
        }
      }
      function s(e) {
        return n("sha1").update(e).digest();
      }
      function o(e) {
        return n("sha256").update(e).digest();
      }
      function u(e) {
        return i(o(e));
      }
      function a(e) {
        return o(o(e));
      }
      ((t.ripemd160 = i),
        (t.sha1 = s),
        (t.sha256 = o),
        (t.hash160 = u),
        (t.hash256 = a));
    },
    2838: function (e, t, r) {
      (function (t) {
        var n = r(2792);
        function i(e, t) {
          if (void 0 !== t && e[0] !== t)
            throw new Error("Invalid network version");
          if (33 === e.length)
            return {
              version: e[0],
              privateKey: e.slice(1, 33),
              compressed: !1,
            };
          if (34 !== e.length) throw new Error("Invalid WIF length");
          if (1 !== e[33]) throw new Error("Invalid compression flag");
          return { version: e[0], privateKey: e.slice(1, 33), compressed: !0 };
        }
        function s(e, r, n) {
          var i = new t(n ? 34 : 33);
          return (i.writeUInt8(e, 0), r.copy(i, 1), n && (i[33] = 1), i);
        }
        function o(e, t) {
          return i(n.decode(e), t);
        }
        function u(e, t, r) {
          return "number" === typeof e
            ? n.encode(s(e, t, r))
            : n.encode(s(e.version, e.privateKey, e.compressed));
        }
        e.exports = { decode: o, decodeRaw: i, encode: u, encodeRaw: s };
      }).call(this, r(2).Buffer);
    },
    2848: function (e, t, r) {
      var n = r(2813);
      function i(e) {
        return e.name || e.toString().match(/function (.*?)\s*\(/)[1];
      }
      function s(e) {
        return n.Nil(e) ? "" : i(e.constructor);
      }
      function o(e) {
        return n.Function(e)
          ? ""
          : n.String(e)
            ? JSON.stringify(e)
            : e && n.Object(e)
              ? ""
              : e;
      }
      function u(e, t) {
        Error.captureStackTrace && Error.captureStackTrace(e, t);
      }
      function a(e) {
        return n.Function(e)
          ? e.toJSON
            ? e.toJSON()
            : i(e)
          : n.Array(e)
            ? "Array"
            : e && n.Object(e)
              ? "Object"
              : void 0 !== e
                ? e
                : "";
      }
      function c(e, t, r) {
        var n = o(t);
        return (
          "Expected " +
          a(e) +
          ", got" +
          ("" !== r ? " " + r : "") +
          ("" !== n ? " " + n : "")
        );
      }
      function p(e, t, r) {
        ((r = r || s(t)),
          (this.message = c(e, t, r)),
          u(this, p),
          (this.__type = e),
          (this.__value = t),
          (this.__valueTypeName = r));
      }
      function f(e, t, r, n, i) {
        var s = '" of type ';
        return (
          "key" === t && (s = '" with key type '),
          c('property "' + a(r) + s + a(e), n, i)
        );
      }
      function h(e, t, r, n, i) {
        (e
          ? ((i = i || s(n)), (this.message = f(e, r, t, n, i)))
          : (this.message = 'Unexpected property "' + t + '"'),
          u(this, p),
          (this.__label = r),
          (this.__property = t),
          (this.__type = e),
          (this.__value = n),
          (this.__valueTypeName = i));
      }
      function l(e, t) {
        return new p(e, {}, t);
      }
      function d(e, t, r) {
        return (
          e instanceof h
            ? ((t = t + "." + e.__property),
              (e = new h(e.__type, t, e.__label, e.__value, e.__valueTypeName)))
            : e instanceof p &&
              (e = new h(e.__type, t, r, e.__value, e.__valueTypeName)),
          u(e),
          e
        );
      }
      ((p.prototype = Object.create(Error.prototype)),
        (p.prototype.constructor = p),
        (h.prototype = Object.create(Error.prototype)),
        (h.prototype.constructor = p),
        (e.exports = {
          TfTypeError: p,
          TfPropertyTypeError: h,
          tfCustomError: l,
          tfSubError: d,
          tfJSON: a,
          getValueTypeName: s,
        }));
    },
    2864: function (e, t, r) {
      "use strict";
      var n = r(46).Buffer,
        i = 9007199254740991;
      function s(e) {
        if (e < 0 || e > i || e % 1 !== 0)
          throw new RangeError("value out of range");
      }
      function o(e, t, r) {
        if ((s(e), t || (t = n.allocUnsafe(a(e))), !n.isBuffer(t)))
          throw new TypeError("buffer must be a Buffer instance");
        return (
          r || (r = 0),
          e < 253
            ? (t.writeUInt8(e, r), (o.bytes = 1))
            : e <= 65535
              ? (t.writeUInt8(253, r), t.writeUInt16LE(e, r + 1), (o.bytes = 3))
              : e <= 4294967295
                ? (t.writeUInt8(254, r),
                  t.writeUInt32LE(e, r + 1),
                  (o.bytes = 5))
                : (t.writeUInt8(255, r),
                  t.writeUInt32LE(e >>> 0, r + 1),
                  t.writeUInt32LE((e / 4294967296) | 0, r + 5),
                  (o.bytes = 9)),
          t
        );
      }
      function u(e, t) {
        if (!n.isBuffer(e))
          throw new TypeError("buffer must be a Buffer instance");
        t || (t = 0);
        var r = e.readUInt8(t);
        if (r < 253) return ((u.bytes = 1), r);
        if (253 === r) return ((u.bytes = 3), e.readUInt16LE(t + 1));
        if (254 === r) return ((u.bytes = 5), e.readUInt32LE(t + 1));
        u.bytes = 9;
        var i = e.readUInt32LE(t + 1),
          o = e.readUInt32LE(t + 5),
          a = 4294967296 * o + i;
        return (s(a), a);
      }
      function a(e) {
        return (s(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9);
      }
      e.exports = { encode: o, decode: u, encodingLength: a };
    },
    2893: function (e, t, r) {
      "use strict";
      function n(e, t, r) {
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !0,
          get() {
            const e = r.call(this);
            return ((this[t] = e), e);
          },
          set(e) {
            Object.defineProperty(this, t, {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            });
          },
        });
      }
      function i(e) {
        let t;
        return () => (void 0 !== t || (t = e()), t);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.prop = n),
        (t.value = i));
    },
    2898: function (e, t, r) {
      var n = r(46).Buffer;
      function i(e) {
        if (e.length < 8) return !1;
        if (e.length > 72) return !1;
        if (48 !== e[0]) return !1;
        if (e[1] !== e.length - 2) return !1;
        if (2 !== e[2]) return !1;
        var t = e[3];
        if (0 === t) return !1;
        if (5 + t >= e.length) return !1;
        if (2 !== e[4 + t]) return !1;
        var r = e[5 + t];
        return (
          0 !== r &&
          6 + t + r === e.length &&
          !(128 & e[4]) &&
          !(t > 1 && 0 === e[4] && !(128 & e[5])) &&
          !(128 & e[t + 6]) &&
          !(r > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))
        );
      }
      function s(e) {
        if (e.length < 8) throw new Error("DER sequence length is too short");
        if (e.length > 72) throw new Error("DER sequence length is too long");
        if (48 !== e[0]) throw new Error("Expected DER sequence");
        if (e[1] !== e.length - 2)
          throw new Error("DER sequence length is invalid");
        if (2 !== e[2]) throw new Error("Expected DER integer");
        var t = e[3];
        if (0 === t) throw new Error("R length is zero");
        if (5 + t >= e.length) throw new Error("R length is too long");
        if (2 !== e[4 + t]) throw new Error("Expected DER integer (2)");
        var r = e[5 + t];
        if (0 === r) throw new Error("S length is zero");
        if (6 + t + r !== e.length) throw new Error("S length is invalid");
        if (128 & e[4]) throw new Error("R value is negative");
        if (t > 1 && 0 === e[4] && !(128 & e[5]))
          throw new Error("R value excessively padded");
        if (128 & e[t + 6]) throw new Error("S value is negative");
        if (r > 1 && 0 === e[t + 6] && !(128 & e[t + 7]))
          throw new Error("S value excessively padded");
        return { r: e.slice(4, 4 + t), s: e.slice(6 + t) };
      }
      function o(e, t) {
        var r = e.length,
          i = t.length;
        if (0 === r) throw new Error("R length is zero");
        if (0 === i) throw new Error("S length is zero");
        if (r > 33) throw new Error("R length is too long");
        if (i > 33) throw new Error("S length is too long");
        if (128 & e[0]) throw new Error("R value is negative");
        if (128 & t[0]) throw new Error("S value is negative");
        if (r > 1 && 0 === e[0] && !(128 & e[1]))
          throw new Error("R value excessively padded");
        if (i > 1 && 0 === t[0] && !(128 & t[1]))
          throw new Error("S value excessively padded");
        var s = n.allocUnsafe(6 + r + i);
        return (
          (s[0] = 48),
          (s[1] = s.length - 2),
          (s[2] = 2),
          (s[3] = e.length),
          e.copy(s, 4),
          (s[4 + r] = 2),
          (s[5 + r] = t.length),
          t.copy(s, 6 + r),
          s
        );
      }
      e.exports = { check: i, decode: s, encode: o };
    },
    2918: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = 9007199254740991;
        function n(e) {
          if (e < 0 || e > r || e % 1 !== 0)
            throw new RangeError("value out of range");
        }
        function i(t, r, s) {
          if ((n(t), r || (r = e.allocUnsafe(o(t))), !e.isBuffer(r)))
            throw new TypeError("buffer must be a Buffer instance");
          return (
            s || (s = 0),
            t < 253
              ? (r.writeUInt8(t, s), Object.assign(i, { bytes: 1 }))
              : t <= 65535
                ? (r.writeUInt8(253, s),
                  r.writeUInt16LE(t, s + 1),
                  Object.assign(i, { bytes: 3 }))
                : t <= 4294967295
                  ? (r.writeUInt8(254, s),
                    r.writeUInt32LE(t, s + 1),
                    Object.assign(i, { bytes: 5 }))
                  : (r.writeUInt8(255, s),
                    r.writeUInt32LE(t >>> 0, s + 1),
                    r.writeUInt32LE((t / 4294967296) | 0, s + 5),
                    Object.assign(i, { bytes: 9 })),
            r
          );
        }
        function s(t, r) {
          if (!e.isBuffer(t))
            throw new TypeError("buffer must be a Buffer instance");
          r || (r = 0);
          const i = t.readUInt8(r);
          if (i < 253) return (Object.assign(s, { bytes: 1 }), i);
          if (253 === i)
            return (Object.assign(s, { bytes: 3 }), t.readUInt16LE(r + 1));
          if (254 === i)
            return (Object.assign(s, { bytes: 5 }), t.readUInt32LE(r + 1));
          {
            Object.assign(s, { bytes: 9 });
            const e = t.readUInt32LE(r + 1),
              i = t.readUInt32LE(r + 5),
              o = 4294967296 * i + e;
            return (n(o), o);
          }
        }
        function o(e) {
          return (n(e), e < 253 ? 1 : e <= 65535 ? 3 : e <= 4294967295 ? 5 : 9);
        }
        ((t.encode = i), (t.decode = s), (t.encodingLength = o));
      }).call(this, r(2).Buffer);
    },
    2954: function (e, t, r) {
      (function (t) {
        var n = r(2813),
          i = r(2848);
        function s(e) {
          return t.isBuffer(e);
        }
        function o(e) {
          return "string" === typeof e && /^([0-9a-f]{2})+$/i.test(e);
        }
        function u(e, t) {
          var r = e.toJSON();
          function n(n) {
            if (!e(n)) return !1;
            if (n.length === t) return !0;
            throw i.tfCustomError(
              r + "(Length: " + t + ")",
              r + "(Length: " + n.length + ")",
            );
          }
          return (
            (n.toJSON = function () {
              return r;
            }),
            n
          );
        }
        var a = u.bind(null, n.Array),
          c = u.bind(null, s),
          p = u.bind(null, o),
          f = u.bind(null, n.String);
        function h(e, t, r) {
          function i(n, i) {
            return r(n, i) && n > e && n < t;
          }
          return (
            (r = r || n.Number),
            (i.toJSON = function () {
              return `${r.toJSON()} between [${e}, ${t}]`;
            }),
            i
          );
        }
        var l = Math.pow(2, 53) - 1;
        function d(e) {
          return "number" === typeof e && isFinite(e);
        }
        function y(e) {
          return (e << 24) >> 24 === e;
        }
        function w(e) {
          return (e << 16) >> 16 === e;
        }
        function g(e) {
          return (0 | e) === e;
        }
        function _(e) {
          return (
            "number" === typeof e && e >= -l && e <= l && Math.floor(e) === e
          );
        }
        function m(e) {
          return (255 & e) === e;
        }
        function S(e) {
          return (65535 & e) === e;
        }
        function E(e) {
          return e >>> 0 === e;
        }
        function T(e) {
          return (
            "number" === typeof e && e >= 0 && e <= l && Math.floor(e) === e
          );
        }
        var b = {
          ArrayN: a,
          Buffer: s,
          BufferN: c,
          Finite: d,
          Hex: o,
          HexN: p,
          Int8: y,
          Int16: w,
          Int32: g,
          Int53: _,
          Range: h,
          StringN: f,
          UInt8: m,
          UInt16: S,
          UInt32: E,
          UInt53: T,
        };
        for (var v in b)
          b[v].toJSON = function (e) {
            return e;
          }.bind(null, v);
        e.exports = b;
      }).call(this, r(2).Buffer);
    },
    2994: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3696);
      t.embed = n.p2data;
      const i = r(3699);
      t.p2ms = i.p2ms;
      const s = r(3700);
      t.p2pk = s.p2pk;
      const o = r(3701);
      t.p2pkh = o.p2pkh;
      const u = r(3702);
      t.p2sh = u.p2sh;
      const a = r(3703);
      t.p2wpkh = a.p2wpkh;
      const c = r(3704);
      t.p2wsh = c.p2wsh;
    },
    2995: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2822),
          i = r(2758),
          s = r(2864);
        function o(e, t) {
          if ("number" !== typeof e)
            throw new Error("cannot write a non-number as a number");
          if (e < 0)
            throw new Error(
              "specified a negative value for writing an unsigned value",
            );
          if (e > t) throw new Error("RangeError: value out of range");
          if (Math.floor(e) !== e)
            throw new Error("value has a fractional component");
        }
        function u(e, t) {
          const r = e.readUInt32LE(t);
          let n = e.readUInt32LE(t + 4);
          return ((n *= 4294967296), o(n + r, 9007199254740991), n + r);
        }
        function a(e, t, r) {
          return (
            o(t, 9007199254740991),
            e.writeInt32LE(-1 & t, r),
            e.writeUInt32LE(Math.floor(t / 4294967296), r + 4),
            r + 8
          );
        }
        function c(e) {
          if (e.length < 1) return e;
          let t = e.length - 1,
            r = 0;
          for (let n = 0; n < e.length / 2; n++)
            ((r = e[n]), (e[n] = e[t]), (e[t] = r), t--);
          return e;
        }
        function p(t) {
          const r = e.allocUnsafe(t.length);
          return (t.copy(r), r);
        }
        ((t.readUInt64LE = u),
          (t.writeUInt64LE = a),
          (t.reverseBuffer = c),
          (t.cloneBuffer = p));
        class BufferWriter {
          constructor(e, t) {
            (void 0 === t && (t = 0),
              (this.buffer = e),
              (this.offset = t),
              i(n.tuple(n.Buffer, n.UInt32), [e, t]));
          }
          writeUInt8(e) {
            this.offset = this.buffer.writeUInt8(e, this.offset);
          }
          writeInt32(e) {
            this.offset = this.buffer.writeInt32LE(e, this.offset);
          }
          writeUInt32(e) {
            this.offset = this.buffer.writeUInt32LE(e, this.offset);
          }
          writeUInt64(e) {
            this.offset = a(this.buffer, e, this.offset);
          }
          writeVarInt(e) {
            (s.encode(e, this.buffer, this.offset),
              (this.offset += s.encode.bytes));
          }
          writeSlice(e) {
            if (this.buffer.length < this.offset + e.length)
              throw new Error("Cannot write slice out of bounds");
            this.offset += e.copy(this.buffer, this.offset);
          }
          writeVarSlice(e) {
            (this.writeVarInt(e.length), this.writeSlice(e));
          }
          writeVector(e) {
            (this.writeVarInt(e.length),
              e.forEach((e) => this.writeVarSlice(e)));
          }
        }
        t.BufferWriter = BufferWriter;
        class BufferReader {
          constructor(e, t) {
            (void 0 === t && (t = 0),
              (this.buffer = e),
              (this.offset = t),
              i(n.tuple(n.Buffer, n.UInt32), [e, t]));
          }
          readUInt8() {
            const e = this.buffer.readUInt8(this.offset);
            return (this.offset++, e);
          }
          readInt32() {
            const e = this.buffer.readInt32LE(this.offset);
            return ((this.offset += 4), e);
          }
          readUInt32() {
            const e = this.buffer.readUInt32LE(this.offset);
            return ((this.offset += 4), e);
          }
          readUInt64() {
            const e = u(this.buffer, this.offset);
            return ((this.offset += 8), e);
          }
          readVarInt() {
            const e = s.decode(this.buffer, this.offset);
            return ((this.offset += s.decode.bytes), e);
          }
          readSlice(e) {
            if (this.buffer.length < this.offset + e)
              throw new Error("Cannot read slice out of bounds");
            const t = this.buffer.slice(this.offset, this.offset + e);
            return ((this.offset += e), t);
          }
          readVarSlice() {
            return this.readSlice(this.readVarInt());
          }
          readVector() {
            const e = this.readVarInt(),
              t = [];
            for (let r = 0; r < e; r++) t.push(this.readVarSlice());
            return t;
          }
        }
        t.BufferReader = BufferReader;
      }).call(this, r(2).Buffer);
    },
    2996: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2995),
          i = r(2832),
          s = r(2760),
          o = r(2760),
          u = r(2822),
          a = r(2758),
          c = r(2864);
        function p(e) {
          const t = e.length;
          return c.encodingLength(t) + t;
        }
        function f(e) {
          const t = e.length;
          return c.encodingLength(t) + e.reduce((e, t) => e + p(t), 0);
        }
        const h = e.allocUnsafe(0),
          l = [],
          d = e.from(
            "0000000000000000000000000000000000000000000000000000000000000000",
            "hex",
          ),
          y = e.from(
            "0000000000000000000000000000000000000000000000000000000000000001",
            "hex",
          ),
          w = e.from("ffffffffffffffff", "hex"),
          g = { script: h, valueBuffer: w };
        function _(e) {
          return void 0 !== e.value;
        }
        class Transaction {
          constructor() {
            ((this.version = 1),
              (this.locktime = 0),
              (this.ins = []),
              (this.outs = []));
          }
          static fromBuffer(e, t) {
            const r = new n.BufferReader(e),
              i = new Transaction();
            i.version = r.readInt32();
            const s = r.readUInt8(),
              o = r.readUInt8();
            let u = !1;
            s === Transaction.ADVANCED_TRANSACTION_MARKER &&
            o === Transaction.ADVANCED_TRANSACTION_FLAG
              ? (u = !0)
              : (r.offset -= 2);
            const a = r.readVarInt();
            for (let n = 0; n < a; ++n)
              i.ins.push({
                hash: r.readSlice(32),
                index: r.readUInt32(),
                script: r.readVarSlice(),
                sequence: r.readUInt32(),
                witness: l,
              });
            const c = r.readVarInt();
            for (let n = 0; n < c; ++n)
              i.outs.push({ value: r.readUInt64(), script: r.readVarSlice() });
            if (u) {
              for (let e = 0; e < a; ++e) i.ins[e].witness = r.readVector();
              if (!i.hasWitnesses())
                throw new Error("Transaction has superfluous witness data");
            }
            if (((i.locktime = r.readUInt32()), t)) return i;
            if (r.offset !== e.length)
              throw new Error("Transaction has unexpected data");
            return i;
          }
          static fromHex(t) {
            return Transaction.fromBuffer(e.from(t, "hex"), !1);
          }
          static isCoinbaseHash(e) {
            a(u.Hash256bit, e);
            for (let t = 0; t < 32; ++t) if (0 !== e[t]) return !1;
            return !0;
          }
          isCoinbase() {
            return (
              1 === this.ins.length &&
              Transaction.isCoinbaseHash(this.ins[0].hash)
            );
          }
          addInput(e, t, r, n) {
            return (
              a(
                u.tuple(
                  u.Hash256bit,
                  u.UInt32,
                  u.maybe(u.UInt32),
                  u.maybe(u.Buffer),
                ),
                arguments,
              ),
              u.Null(r) && (r = Transaction.DEFAULT_SEQUENCE),
              this.ins.push({
                hash: e,
                index: t,
                script: n || h,
                sequence: r,
                witness: l,
              }) - 1
            );
          }
          addOutput(e, t) {
            return (
              a(u.tuple(u.Buffer, u.Satoshi), arguments),
              this.outs.push({ script: e, value: t }) - 1
            );
          }
          hasWitnesses() {
            return this.ins.some((e) => 0 !== e.witness.length);
          }
          weight() {
            const e = this.byteLength(!1),
              t = this.byteLength(!0);
            return 3 * e + t;
          }
          virtualSize() {
            return Math.ceil(this.weight() / 4);
          }
          byteLength(e) {
            void 0 === e && (e = !0);
            const t = e && this.hasWitnesses();
            return (
              (t ? 10 : 8) +
              c.encodingLength(this.ins.length) +
              c.encodingLength(this.outs.length) +
              this.ins.reduce((e, t) => e + 40 + p(t.script), 0) +
              this.outs.reduce((e, t) => e + 8 + p(t.script), 0) +
              (t ? this.ins.reduce((e, t) => e + f(t.witness), 0) : 0)
            );
          }
          clone() {
            const e = new Transaction();
            return (
              (e.version = this.version),
              (e.locktime = this.locktime),
              (e.ins = this.ins.map((e) => ({
                hash: e.hash,
                index: e.index,
                script: e.script,
                sequence: e.sequence,
                witness: e.witness,
              }))),
              (e.outs = this.outs.map((e) => ({
                script: e.script,
                value: e.value,
              }))),
              e
            );
          }
          hashForSignature(t, r, n) {
            if (
              (a(u.tuple(u.UInt32, u.Buffer, u.Number), arguments),
              t >= this.ins.length)
            )
              return y;
            const c = s.compile(
                s.decompile(r).filter((e) => e !== o.OPS.OP_CODESEPARATOR),
              ),
              p = this.clone();
            if ((31 & n) === Transaction.SIGHASH_NONE)
              ((p.outs = []),
                p.ins.forEach((e, r) => {
                  r !== t && (e.sequence = 0);
                }));
            else if ((31 & n) === Transaction.SIGHASH_SINGLE) {
              if (t >= this.outs.length) return y;
              p.outs.length = t + 1;
              for (let e = 0; e < t; e++) p.outs[e] = g;
              p.ins.forEach((e, r) => {
                r !== t && (e.sequence = 0);
              });
            }
            n & Transaction.SIGHASH_ANYONECANPAY
              ? ((p.ins = [p.ins[t]]), (p.ins[0].script = c))
              : (p.ins.forEach((e) => {
                  e.script = h;
                }),
                (p.ins[t].script = c));
            const f = e.allocUnsafe(p.byteLength(!1) + 4);
            return (
              f.writeInt32LE(n, f.length - 4),
              p.__toBuffer(f, 0, !1),
              i.hash256(f)
            );
          }
          hashForWitnessV0(t, r, s, o) {
            a(u.tuple(u.UInt32, u.Buffer, u.Satoshi, u.UInt32), arguments);
            let c,
              f = e.from([]),
              h = d,
              l = d,
              y = d;
            if (
              (o & Transaction.SIGHASH_ANYONECANPAY ||
                ((f = e.allocUnsafe(36 * this.ins.length)),
                (c = new n.BufferWriter(f, 0)),
                this.ins.forEach((e) => {
                  (c.writeSlice(e.hash), c.writeUInt32(e.index));
                }),
                (l = i.hash256(f))),
              o & Transaction.SIGHASH_ANYONECANPAY ||
                (31 & o) === Transaction.SIGHASH_SINGLE ||
                (31 & o) === Transaction.SIGHASH_NONE ||
                ((f = e.allocUnsafe(4 * this.ins.length)),
                (c = new n.BufferWriter(f, 0)),
                this.ins.forEach((e) => {
                  c.writeUInt32(e.sequence);
                }),
                (y = i.hash256(f))),
              (31 & o) !== Transaction.SIGHASH_SINGLE &&
                (31 & o) !== Transaction.SIGHASH_NONE)
            ) {
              const t = this.outs.reduce((e, t) => e + 8 + p(t.script), 0);
              ((f = e.allocUnsafe(t)),
                (c = new n.BufferWriter(f, 0)),
                this.outs.forEach((e) => {
                  (c.writeUInt64(e.value), c.writeVarSlice(e.script));
                }),
                (h = i.hash256(f)));
            } else if (
              (31 & o) === Transaction.SIGHASH_SINGLE &&
              t < this.outs.length
            ) {
              const r = this.outs[t];
              ((f = e.allocUnsafe(8 + p(r.script))),
                (c = new n.BufferWriter(f, 0)),
                c.writeUInt64(r.value),
                c.writeVarSlice(r.script),
                (h = i.hash256(f)));
            }
            ((f = e.allocUnsafe(156 + p(r))), (c = new n.BufferWriter(f, 0)));
            const w = this.ins[t];
            return (
              c.writeUInt32(this.version),
              c.writeSlice(l),
              c.writeSlice(y),
              c.writeSlice(w.hash),
              c.writeUInt32(w.index),
              c.writeVarSlice(r),
              c.writeUInt64(s),
              c.writeUInt32(w.sequence),
              c.writeSlice(h),
              c.writeUInt32(this.locktime),
              c.writeUInt32(o),
              i.hash256(f)
            );
          }
          getHash(t) {
            return t && this.isCoinbase()
              ? e.alloc(32, 0)
              : i.hash256(this.__toBuffer(void 0, void 0, t));
          }
          getId() {
            return n.reverseBuffer(this.getHash(!1)).toString("hex");
          }
          toBuffer(e, t) {
            return this.__toBuffer(e, t, !0);
          }
          toHex() {
            return this.toBuffer(void 0, void 0).toString("hex");
          }
          setInputScript(e, t) {
            (a(u.tuple(u.Number, u.Buffer), arguments),
              (this.ins[e].script = t));
          }
          setWitness(e, t) {
            (a(u.tuple(u.Number, [u.Buffer]), arguments),
              (this.ins[e].witness = t));
          }
          __toBuffer(t, r, i) {
            (void 0 === i && (i = !1),
              t || (t = e.allocUnsafe(this.byteLength(i))));
            const s = new n.BufferWriter(t, r || 0);
            s.writeInt32(this.version);
            const o = i && this.hasWitnesses();
            return (
              o &&
                (s.writeUInt8(Transaction.ADVANCED_TRANSACTION_MARKER),
                s.writeUInt8(Transaction.ADVANCED_TRANSACTION_FLAG)),
              s.writeVarInt(this.ins.length),
              this.ins.forEach((e) => {
                (s.writeSlice(e.hash),
                  s.writeUInt32(e.index),
                  s.writeVarSlice(e.script),
                  s.writeUInt32(e.sequence));
              }),
              s.writeVarInt(this.outs.length),
              this.outs.forEach((e) => {
                (_(e) ? s.writeUInt64(e.value) : s.writeSlice(e.valueBuffer),
                  s.writeVarSlice(e.script));
              }),
              o &&
                this.ins.forEach((e) => {
                  s.writeVector(e.witness);
                }),
              s.writeUInt32(this.locktime),
              void 0 !== r ? t.slice(r, s.offset) : t
            );
          }
        }
        ((Transaction.DEFAULT_SEQUENCE = 4294967295),
          (Transaction.SIGHASH_ALL = 1),
          (Transaction.SIGHASH_NONE = 2),
          (Transaction.SIGHASH_SINGLE = 3),
          (Transaction.SIGHASH_ANYONECANPAY = 128),
          (Transaction.ADVANCED_TRANSACTION_MARKER = 0),
          (Transaction.ADVANCED_TRANSACTION_FLAG = 1),
          (t.Transaction = Transaction));
      }).call(this, r(2).Buffer);
    },
    3062: function (e, t, r) {
      var n = r(2771);
      function i(e) {
        return e < n.OP_PUSHDATA1 ? 1 : e <= 255 ? 2 : e <= 65535 ? 3 : 5;
      }
      function s(e, t, r) {
        var s = i(t);
        return (
          1 === s
            ? e.writeUInt8(t, r)
            : 2 === s
              ? (e.writeUInt8(n.OP_PUSHDATA1, r), e.writeUInt8(t, r + 1))
              : 3 === s
                ? (e.writeUInt8(n.OP_PUSHDATA2, r), e.writeUInt16LE(t, r + 1))
                : (e.writeUInt8(n.OP_PUSHDATA4, r), e.writeUInt32LE(t, r + 1)),
          s
        );
      }
      function o(e, t) {
        var r,
          i,
          s = e.readUInt8(t);
        if (s < n.OP_PUSHDATA1) ((r = s), (i = 1));
        else if (s === n.OP_PUSHDATA1) {
          if (t + 2 > e.length) return null;
          ((r = e.readUInt8(t + 1)), (i = 2));
        } else if (s === n.OP_PUSHDATA2) {
          if (t + 3 > e.length) return null;
          ((r = e.readUInt16LE(t + 1)), (i = 3));
        } else {
          if (t + 5 > e.length) return null;
          if (s !== n.OP_PUSHDATA4) throw new Error("Unexpected opcode");
          ((r = e.readUInt32LE(t + 1)), (i = 5));
        }
        return { opcode: s, number: r, size: i };
      }
      e.exports = { encodingLength: i, encode: s, decode: o };
    },
    3104: function (e, t, r) {
      (function (t) {
        const n = r(2828),
          i = t.alloc(1, 1),
          s = t.alloc(1, 0);
        function o(e, r, o, u, a) {
          let c = t.alloc(32, 0),
            p = t.alloc(32, 1);
          ((c = n("sha256", c)
            .update(p)
            .update(s)
            .update(r)
            .update(e)
            .update(a || "")
            .digest()),
            (p = n("sha256", c).update(p).digest()),
            (c = n("sha256", c)
              .update(p)
              .update(i)
              .update(r)
              .update(e)
              .update(a || "")
              .digest()),
            (p = n("sha256", c).update(p).digest()),
            (p = n("sha256", c).update(p).digest()));
          let f = p;
          while (!u(f) || !o(f))
            ((c = n("sha256", c).update(p).update(s).digest()),
              (p = n("sha256", c).update(p).digest()),
              (p = n("sha256", c).update(p).digest()),
              (f = p));
          return f;
        }
        e.exports = o;
      }).call(this, r(2).Buffer);
    },
    3107: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2803),
          i = r(2994),
          s = r(2760),
          o = r(2822),
          u = r(803),
          a = r(2792),
          c = r(2758);
        function p(e) {
          const t = a.decode(e);
          if (t.length < 21) throw new TypeError(e + " is too short");
          if (t.length > 21) throw new TypeError(e + " is too long");
          const r = t.readUInt8(0),
            n = t.slice(1);
          return { version: r, hash: n };
        }
        function f(t) {
          const r = u.decode(t),
            n = u.fromWords(r.words.slice(1));
          return { version: r.words[0], prefix: r.prefix, data: e.from(n) };
        }
        function h(t, r) {
          c(o.tuple(o.Hash160bit, o.UInt8), arguments);
          const n = e.allocUnsafe(21);
          return (n.writeUInt8(r, 0), t.copy(n, 1), a.encode(n));
        }
        function l(e, t, r) {
          const n = u.toWords(e);
          return (n.unshift(t), u.encode(r, n));
        }
        function d(e, t) {
          t = t || n.bitcoin;
          try {
            return i.p2pkh({ output: e, network: t }).address;
          } catch (r) {}
          try {
            return i.p2sh({ output: e, network: t }).address;
          } catch (r) {}
          try {
            return i.p2wpkh({ output: e, network: t }).address;
          } catch (r) {}
          try {
            return i.p2wsh({ output: e, network: t }).address;
          } catch (r) {}
          throw new Error(s.toASM(e) + " has no matching Address");
        }
        function y(e, t) {
          let r, s;
          t = t || n.bitcoin;
          try {
            r = p(e);
          } catch (o) {}
          if (r) {
            if (r.version === t.pubKeyHash)
              return i.p2pkh({ hash: r.hash }).output;
            if (r.version === t.scriptHash)
              return i.p2sh({ hash: r.hash }).output;
          } else {
            try {
              s = f(e);
            } catch (o) {}
            if (s) {
              if (s.prefix !== t.bech32)
                throw new Error(e + " has an invalid prefix");
              if (0 === s.version) {
                if (20 === s.data.length)
                  return i.p2wpkh({ hash: s.data }).output;
                if (32 === s.data.length)
                  return i.p2wsh({ hash: s.data }).output;
              }
            }
          }
          throw new Error(e + " has no matching Script");
        }
        ((t.fromBase58Check = p),
          (t.fromBech32 = f),
          (t.toBase58Check = h),
          (t.toBech32 = l),
          (t.fromOutputScript = d),
          (t.toOutputScript = y));
      }).call(this, r(2).Buffer);
    },
    3108: function (e, t, r) {
      var n = r(2771),
        i = {};
      for (var s in n) {
        var o = n[s];
        i[o] = s;
      }
      e.exports = i;
    },
    3109: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2803),
          i = r(2822),
          s = r(2819),
          o = r(377),
          u = r(2758),
          a = r(2838),
          c = u.maybe(
            u.compile({
              compressed: i.maybe(i.Boolean),
              network: i.maybe(i.Network),
            }),
          );
        class ECPair {
          constructor(e, t, r) {
            ((this.__D = e),
              (this.__Q = t),
              (this.lowR = !1),
              void 0 === r && (r = {}),
              (this.compressed = void 0 === r.compressed || r.compressed),
              (this.network = r.network || n.bitcoin),
              void 0 !== t && (this.__Q = s.pointCompress(t, this.compressed)));
          }
          get privateKey() {
            return this.__D;
          }
          get publicKey() {
            return (
              this.__Q ||
                (this.__Q = s.pointFromScalar(this.__D, this.compressed)),
              this.__Q
            );
          }
          toWIF() {
            if (!this.__D) throw new Error("Missing private key");
            return a.encode(this.network.wif, this.__D, this.compressed);
          }
          sign(t, r) {
            if (!this.__D) throw new Error("Missing private key");
            if ((void 0 === r && (r = this.lowR), !1 === r))
              return s.sign(t, this.__D);
            {
              let r = s.sign(t, this.__D);
              const n = e.alloc(32, 0);
              let i = 0;
              while (r[0] > 127)
                (i++,
                  n.writeUIntLE(i, 0, 6),
                  (r = s.signWithEntropy(t, this.__D, n)));
              return r;
            }
          }
          verify(e, t) {
            return s.verify(e, this.publicKey, t);
          }
        }
        function p(e, t) {
          if ((u(i.Buffer256bit, e), !s.isPrivate(e)))
            throw new TypeError("Private key not in range [1, n)");
          return (u(c, t), new ECPair(e, void 0, t));
        }
        function f(e, t) {
          return (u(s.isPoint, e), u(c, t), new ECPair(void 0, e, t));
        }
        function h(e, t) {
          const r = a.decode(e),
            s = r.version;
          if (i.Array(t)) {
            if (((t = t.filter((e) => s === e.wif).pop()), !t))
              throw new Error("Unknown network version");
          } else if (((t = t || n.bitcoin), s !== t.wif))
            throw new Error("Invalid network version");
          return p(r.privateKey, { compressed: r.compressed, network: t });
        }
        function l(e) {
          (u(c, e), void 0 === e && (e = {}));
          const t = e.rng || o;
          let r;
          do {
            ((r = t(32)), u(i.Buffer256bit, r));
          } while (!s.isPrivate(r));
          return p(r, e);
        }
        ((t.fromPrivateKey = p),
          (t.fromPublicKey = f),
          (t.fromWIF = h),
          (t.makeRandom = l));
      }).call(this, r(2).Buffer);
    },
    3110: function (e, t, r) {
      (function (t) {
        e.exports = function (e, r) {
          if (!Array.isArray(e)) throw TypeError("Expected values Array");
          if ("function" !== typeof r)
            throw TypeError("Expected digest Function");
          var n = e.length,
            i = e.concat();
          while (n > 1) {
            for (var s = 0, o = 0; o < n; o += 2, ++s) {
              var u = i[o],
                a = o + 1 === n ? u : i[o + 1],
                c = t.concat([u, a]);
              i[s] = r(c);
            }
            n = s;
          }
          return i[0];
        };
      }).call(this, r(2).Buffer);
    },
    3111: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2775),
        i = r(3710),
        s = r(3711),
        o = r(3712),
        u = r(3713),
        a = r(3714),
        c = r(3715),
        p = r(3716),
        f = r(3717),
        h = r(3718),
        l = r(3719),
        d = r(3720),
        y = r(3721),
        w = r(3722),
        g = r(3723),
        _ = r(3308),
        m = r(3724),
        S = r(3725),
        E = r(3726),
        T = r(3727),
        b = r(3728),
        v = { unsignedTx: s, globalXpub: i, checkPubkey: m.makeChecker([]) };
      t.globals = v;
      const k = {
        nonWitnessUtxo: a,
        partialSig: c,
        sighashType: f,
        finalScriptSig: o,
        finalScriptWitness: u,
        porCommitment: p,
        witnessUtxo: w,
        bip32Derivation: _.makeConverter(n.InputTypes.BIP32_DERIVATION),
        redeemScript: S.makeConverter(n.InputTypes.REDEEM_SCRIPT),
        witnessScript: b.makeConverter(n.InputTypes.WITNESS_SCRIPT),
        checkPubkey: m.makeChecker([
          n.InputTypes.PARTIAL_SIG,
          n.InputTypes.BIP32_DERIVATION,
        ]),
        tapKeySig: h,
        tapScriptSig: y,
        tapLeafScript: l,
        tapBip32Derivation: E.makeConverter(n.InputTypes.TAP_BIP32_DERIVATION),
        tapInternalKey: T.makeConverter(n.InputTypes.TAP_INTERNAL_KEY),
        tapMerkleRoot: d,
      };
      t.inputs = k;
      const I = {
        bip32Derivation: _.makeConverter(n.OutputTypes.BIP32_DERIVATION),
        redeemScript: S.makeConverter(n.OutputTypes.REDEEM_SCRIPT),
        witnessScript: b.makeConverter(n.OutputTypes.WITNESS_SCRIPT),
        checkPubkey: m.makeChecker([n.OutputTypes.BIP32_DERIVATION]),
        tapBip32Derivation: E.makeConverter(n.OutputTypes.TAP_BIP32_DERIVATION),
        tapTree: g,
        tapInternalKey: T.makeConverter(n.OutputTypes.TAP_INTERNAL_KEY),
      };
      t.outputs = I;
    },
    3112: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2918);
        function i(e) {
          if (e.length < 1) return e;
          let t = e.length - 1,
            r = 0;
          for (let n = 0; n < e.length / 2; n++)
            ((r = e[n]), (e[n] = e[t]), (e[t] = r), t--);
          return e;
        }
        function s(t) {
          const r = t.map(o);
          return (r.push(e.from([0])), e.concat(r));
        }
        function o(t) {
          const r = t.key.length,
            i = t.value.length,
            s = n.encodingLength(r),
            o = n.encodingLength(i),
            u = e.allocUnsafe(s + r + o + i);
          return (
            n.encode(r, u, 0),
            t.key.copy(u, s),
            n.encode(i, u, s + r),
            t.value.copy(u, s + r + o),
            u
          );
        }
        function u(e, t) {
          if ("number" !== typeof e)
            throw new Error("cannot write a non-number as a number");
          if (e < 0)
            throw new Error(
              "specified a negative value for writing an unsigned value",
            );
          if (e > t) throw new Error("RangeError: value out of range");
          if (Math.floor(e) !== e)
            throw new Error("value has a fractional component");
        }
        function a(e, t) {
          const r = e.readUInt32LE(t);
          let n = e.readUInt32LE(t + 4);
          return ((n *= 4294967296), u(n + r, 9007199254740991), n + r);
        }
        function c(e, t, r) {
          return (
            u(t, 9007199254740991),
            e.writeInt32LE(-1 & t, r),
            e.writeUInt32LE(Math.floor(t / 4294967296), r + 4),
            r + 8
          );
        }
        ((t.range = (e) => [...Array(e).keys()]),
          (t.reverseBuffer = i),
          (t.keyValsToBuffer = s),
          (t.keyValToBuffer = o),
          (t.readUInt64LE = a),
          (t.writeUInt64LE = c));
      }).call(this, r(2).Buffer);
    },
    3113: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3732);
      t.input = n;
      const i = r(3733);
      t.output = i;
    },
    3114: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3735);
      t.input = n;
      const i = r(3736);
      t.output = i;
    },
    3115: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3737);
      t.input = n;
      const i = r(3738);
      t.output = i;
    },
    3177: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3178);
      ((t.fromSeed = n.fromSeed),
        (t.fromBase58 = n.fromBase58),
        (t.fromPublicKey = n.fromPublicKey),
        (t.fromPrivateKey = n.fromPrivateKey));
    },
    3178: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(3179),
          i = r(2792),
          s = r(2819),
          o = r(2758),
          u = r(2838),
          a = o.BufferN(32),
          c = o.compile({
            wif: o.UInt8,
            bip32: { public: o.UInt32, private: o.UInt32 },
          }),
          p = {
            messagePrefix: "Bitcoin Signed Message:\n",
            bech32: "bc",
            bip32: { public: 76067358, private: 76066276 },
            pubKeyHash: 0,
            scriptHash: 5,
            wif: 128,
          },
          f = 2147483648,
          h = Math.pow(2, 31) - 1;
        function l(e) {
          return o.String(e) && null !== e.match(/^(m\/)?(\d+'?\/)*\d+'?$/);
        }
        function d(e) {
          return o.UInt32(e) && e <= h;
        }
        class BIP32 {
          constructor(e, t, r, n, i, s, u) {
            (void 0 === i && (i = 0),
              void 0 === s && (s = 0),
              void 0 === u && (u = 0),
              (this.__D = e),
              (this.__Q = t),
              (this.chainCode = r),
              (this.network = n),
              (this.__DEPTH = i),
              (this.__INDEX = s),
              (this.__PARENT_FINGERPRINT = u),
              o(c, n),
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
                (this.__Q = s.pointFromScalar(this.__D, !0)),
              this.__Q
            );
          }
          get privateKey() {
            return this.__D;
          }
          get identifier() {
            return n.hash160(this.publicKey);
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
            return m(
              this.publicKey,
              this.chainCode,
              this.network,
              this.depth,
              this.index,
              this.parentFingerprint,
            );
          }
          toBase58() {
            const t = this.network,
              r = this.isNeutered() ? t.bip32.public : t.bip32.private,
              n = e.allocUnsafe(78);
            return (
              n.writeUInt32BE(r, 0),
              n.writeUInt8(this.depth, 4),
              n.writeUInt32BE(this.parentFingerprint, 5),
              n.writeUInt32BE(this.index, 9),
              this.chainCode.copy(n, 13),
              this.isNeutered()
                ? this.publicKey.copy(n, 45)
                : (n.writeUInt8(0, 45), this.privateKey.copy(n, 46)),
              i.encode(n)
            );
          }
          toWIF() {
            if (!this.privateKey) throw new TypeError("Missing private key");
            return u.encode(this.network.wif, this.privateKey, !0);
          }
          derive(t) {
            o(o.UInt32, t);
            const r = t >= f,
              i = e.allocUnsafe(37);
            if (r) {
              if (this.isNeutered())
                throw new TypeError(
                  "Missing private key for hardened child key",
                );
              ((i[0] = 0), this.privateKey.copy(i, 1), i.writeUInt32BE(t, 33));
            } else (this.publicKey.copy(i, 0), i.writeUInt32BE(t, 33));
            const u = n.hmacSHA512(this.chainCode, i),
              a = u.slice(0, 32),
              c = u.slice(32);
            if (!s.isPrivate(a)) return this.derive(t + 1);
            let p;
            if (this.isNeutered()) {
              const e = s.pointAddScalar(this.publicKey, a, !0);
              if (null === e) return this.derive(t + 1);
              p = m(
                e,
                c,
                this.network,
                this.depth + 1,
                t,
                this.fingerprint.readUInt32BE(0),
              );
            } else {
              const e = s.privateAdd(this.privateKey, a);
              if (null == e) return this.derive(t + 1);
              p = g(
                e,
                c,
                this.network,
                this.depth + 1,
                t,
                this.fingerprint.readUInt32BE(0),
              );
            }
            return p;
          }
          deriveHardened(e) {
            return (o(d, e), this.derive(e + f));
          }
          derivePath(e) {
            o(l, e);
            let t = e.split("/");
            if ("m" === t[0]) {
              if (this.parentFingerprint)
                throw new TypeError("Expected master, got child");
              t = t.slice(1);
            }
            return t.reduce((e, t) => {
              let r;
              return "'" === t.slice(-1)
                ? ((r = parseInt(t.slice(0, -1), 10)), e.deriveHardened(r))
                : ((r = parseInt(t, 10)), e.derive(r));
            }, this);
          }
          sign(t, r) {
            if (!this.privateKey) throw new Error("Missing private key");
            if ((void 0 === r && (r = this.lowR), !1 === r))
              return s.sign(t, this.privateKey);
            {
              let r = s.sign(t, this.privateKey);
              const n = e.alloc(32, 0);
              let i = 0;
              while (r[0] > 127)
                (i++,
                  n.writeUIntLE(i, 0, 6),
                  (r = s.signWithEntropy(t, this.privateKey, n)));
              return r;
            }
          }
          verify(e, t) {
            return s.verify(e, this.publicKey, t);
          }
        }
        function y(e, t) {
          const r = i.decode(e);
          if (78 !== r.length) throw new TypeError("Invalid buffer length");
          t = t || p;
          const n = r.readUInt32BE(0);
          if (n !== t.bip32.private && n !== t.bip32.public)
            throw new TypeError("Invalid network version");
          const s = r[4],
            o = r.readUInt32BE(5);
          if (0 === s && 0 !== o)
            throw new TypeError("Invalid parent fingerprint");
          const u = r.readUInt32BE(9);
          if (0 === s && 0 !== u) throw new TypeError("Invalid index");
          const a = r.slice(13, 45);
          let c;
          if (n === t.bip32.private) {
            if (0 !== r.readUInt8(45))
              throw new TypeError("Invalid private key");
            const e = r.slice(46, 78);
            c = g(e, a, t, s, u, o);
          } else {
            const e = r.slice(45, 78);
            c = m(e, a, t, s, u, o);
          }
          return c;
        }
        function w(e, t, r) {
          return g(e, t, r);
        }
        function g(e, t, r, n, i, u) {
          if (
            (o(
              { privateKey: a, chainCode: a },
              { privateKey: e, chainCode: t },
            ),
            (r = r || p),
            !s.isPrivate(e))
          )
            throw new TypeError("Private key not in range [1, n)");
          return new BIP32(e, void 0, t, r, n, i, u);
        }
        function _(e, t, r) {
          return m(e, t, r);
        }
        function m(e, t, r, n, i, u) {
          if (
            (o(
              { publicKey: o.BufferN(33), chainCode: a },
              { publicKey: e, chainCode: t },
            ),
            (r = r || p),
            !s.isPoint(e))
          )
            throw new TypeError("Point is not on the curve");
          return new BIP32(void 0, e, t, r, n, i, u);
        }
        function S(t, r) {
          if ((o(o.Buffer, t), t.length < 16))
            throw new TypeError("Seed should be at least 128 bits");
          if (t.length > 64)
            throw new TypeError("Seed should be at most 512 bits");
          r = r || p;
          const i = n.hmacSHA512(e.from("Bitcoin seed", "utf8"), t),
            s = i.slice(0, 32),
            u = i.slice(32);
          return w(s, u, r);
        }
        ((t.fromBase58 = y),
          (t.fromPrivateKey = w),
          (t.fromPublicKey = _),
          (t.fromSeed = S));
      }).call(this, r(2).Buffer);
    },
    3179: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(797),
        i = r(2828);
      function s(e) {
        const t = n("sha256").update(e).digest();
        try {
          return n("rmd160").update(t).digest();
        } catch (r) {
          return n("ripemd160").update(t).digest();
        }
      }
      function o(e, t) {
        return i("sha512", e).update(t).digest();
      }
      ((t.hash160 = s), (t.hmacSHA512 = o));
    },
    3218: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3177);
      t.bip32 = n;
      const i = r(3107);
      t.address = i;
      const s = r(2832);
      t.crypto = s;
      const ECPair = r(3109);
      t.ECPair = ECPair;
      const o = r(2803);
      t.networks = o;
      const u = r(2994);
      t.payments = u;
      const a = r(2760);
      t.script = a;
      var c = r(3705);
      t.Block = c.Block;
      var p = r(3706);
      t.Psbt = p.Psbt;
      var f = r(2760);
      t.opcodes = f.OPS;
      var h = r(2996);
      t.Transaction = h.Transaction;
      var l = r(3730);
      t.TransactionBuilder = l.TransactionBuilder;
    },
    3263: function (e, t, r) {
      "use strict";
      var n = r(234),
        i = r(46).Buffer;
      e.exports = function (e) {
        function t(t) {
          var r = e(t);
          return n.encode(i.concat([t, r], t.length + 4));
        }
        function r(t) {
          var r = t.slice(0, -4),
            n = t.slice(-4),
            i = e(r);
          if (!((n[0] ^ i[0]) | (n[1] ^ i[1]) | (n[2] ^ i[2]) | (n[3] ^ i[3])))
            return r;
        }
        function s(e) {
          var t = n.decodeUnsafe(e);
          if (t) return r(t);
        }
        function o(t) {
          var i = n.decode(t),
            s = r(i, e);
          if (!s) throw new Error("Invalid checksum");
          return s;
        }
        return { encode: t, decode: o, decodeUnsafe: s };
      };
    },
    3307: function (e, t, r) {
      "use strict";
      function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        n(r(3709)),
        n(r(3729)));
    },
    3308: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const r = (e) => [...Array(e).keys()],
          n = (e) =>
            (33 === e.length && [2, 3].includes(e[0])) ||
            (65 === e.length && 4 === e[0]);
        function i(t, i) {
          function s(e) {
            if (e.key[0] !== t)
              throw new Error(
                "Decode Error: could not decode bip32Derivation with key 0x" +
                  e.key.toString("hex"),
              );
            const n = e.key.slice(1);
            if (!i(n))
              throw new Error(
                "Decode Error: bip32Derivation has invalid pubkey in key 0x" +
                  e.key.toString("hex"),
              );
            if ((e.value.length / 4) % 1 !== 0)
              throw new Error(
                "Decode Error: Input BIP32_DERIVATION value length should be multiple of 4",
              );
            const s = {
              masterFingerprint: e.value.slice(0, 4),
              pubkey: n,
              path: "m",
            };
            for (const t of r(e.value.length / 4 - 1)) {
              const r = e.value.readUInt32LE(4 * t + 4),
                n = !!(2147483648 & r),
                i = 2147483647 & r;
              s.path += "/" + i.toString(10) + (n ? "'" : "");
            }
            return s;
          }
          function o(r) {
            const n = e.from([t]),
              i = e.concat([n, r.pubkey]),
              s = r.path.split("/"),
              o = e.allocUnsafe(4 * s.length);
            r.masterFingerprint.copy(o, 0);
            let u = 4;
            return (
              s.slice(1).forEach((e) => {
                const t = "'" === e.slice(-1);
                let r = 2147483647 & parseInt(t ? e.slice(0, -1) : e, 10);
                (t && (r += 2147483648), o.writeUInt32LE(r, u), (u += 4));
              }),
              { key: i, value: o }
            );
          }
          void 0 === i && (i = n);
          const u =
            "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; }";
          function a(t) {
            return (
              e.isBuffer(t.pubkey) &&
              e.isBuffer(t.masterFingerprint) &&
              "string" === typeof t.path &&
              i(t.pubkey) &&
              4 === t.masterFingerprint.length
            );
          }
          function c(e, t, r) {
            const n = t.pubkey.toString("hex");
            return (
              !r.has(n) &&
              (r.add(n),
              0 === e.filter((e) => e.pubkey.equals(t.pubkey)).length)
            );
          }
          return {
            decode: s,
            encode: o,
            check: a,
            expected: u,
            canAddToArray: c,
          };
        }
        t.makeConverter = i;
      }).call(this, r(2).Buffer);
    },
    3309: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(3111);
        function i(e, t) {
          const r = e[t];
          if (void 0 === r) throw new Error("No input #" + t);
          return r;
        }
        function s(e, t) {
          const r = e[t];
          if (void 0 === r) throw new Error("No output #" + t);
          return r;
        }
        function o(e, t, r) {
          if (e.key[0] < r)
            throw new Error(
              "Use the method for your specific key instead of addUnknownKeyVal*",
            );
          if (t && 0 !== t.filter((t) => t.key.equals(e.key)).length)
            throw new Error("Duplicate Key: " + e.key.toString("hex"));
        }
        function u(e) {
          let t = 0;
          return (
            Object.keys(e).forEach((e) => {
              Number(isNaN(Number(e))) && t++;
            }),
            t
          );
        }
        function a(e, t) {
          let r = !1;
          if (t.nonWitnessUtxo || t.witnessUtxo) {
            const e = !!t.redeemScript,
              n = !!t.witnessScript,
              i = !e || !!t.finalScriptSig,
              s = !n || !!t.finalScriptWitness,
              o = !!t.finalScriptSig || !!t.finalScriptWitness;
            r = i && s && o;
          }
          if (!1 === r)
            throw new Error(
              `Input #${e} has too much or too little data to clean`,
            );
        }
        function c(e, t, r, n) {
          throw new Error(
            `Data for ${e} key ${t} is incorrect: Expected ${r} and got ${JSON.stringify(n)}`,
          );
        }
        function p(e) {
          return (t, r) => {
            for (const i of Object.keys(t)) {
              const s = t[i],
                {
                  canAdd: o,
                  canAddToArray: u,
                  check: a,
                  expected: p,
                } = n[e + "s"][i] || {},
                f = !!u;
              if (a)
                if (f) {
                  if (!Array.isArray(s) || (r[i] && !Array.isArray(r[i])))
                    throw new Error(`Key type ${i} must be an array`);
                  s.every(a) || c(e, i, p, s);
                  const t = r[i] || [],
                    n = new Set();
                  if (!s.every((e) => u(t, e, n)))
                    throw new Error("Can not add duplicate data to array");
                  r[i] = t.concat(s);
                } else {
                  if ((a(s) || c(e, i, p, s), !o(r, s)))
                    throw new Error("Can not add duplicate data to " + e);
                  r[i] = s;
                }
            }
          };
        }
        function f(e, r) {
          const n = e.length - 1,
            s = i(e, n);
          t.updateInput(r, s);
        }
        function h(e, r) {
          const n = e.length - 1,
            i = s(e, n);
          t.updateOutput(r, i);
        }
        function l(t, r) {
          if (!e.isBuffer(r) || r.length < 4)
            throw new Error("Set Version: Invalid Transaction");
          return (r.writeUInt32LE(t, 0), r);
        }
        function d(t, r) {
          if (!e.isBuffer(r) || r.length < 4)
            throw new Error("Set Locktime: Invalid Transaction");
          return (r.writeUInt32LE(t, r.length - 4), r);
        }
        ((t.checkForInput = i),
          (t.checkForOutput = s),
          (t.checkHasKey = o),
          (t.getEnumLength = u),
          (t.inputCheckUncleanFinalized = a),
          (t.updateGlobal = p("global")),
          (t.updateInput = p("input")),
          (t.updateOutput = p("output")),
          (t.addInputAttributes = f),
          (t.addOutputAttributes = h),
          (t.defaultVersionSetter = l),
          (t.defaultLocktimeSetter = d));
      }).call(this, r(2).Buffer);
    },
    3310: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760);
      function s(e) {
        const t = n.compile(e);
        return 22 === t.length && t[0] === i.OPS.OP_0 && 20 === t[1];
      }
      ((t.check = s), (s.toJSON = () => "Witness pubKeyHash output"));
    },
    3311: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760);
      function s(e) {
        const t = n.compile(e);
        return 34 === t.length && t[0] === i.OPS.OP_0 && 32 === t[1];
      }
      ((t.check = s), (s.toJSON = () => "Witness scriptHash output"));
    },
    3696: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2803),
        i = r(2760),
        s = r(2893),
        o = r(2758),
        u = i.OPS;
      function a(e, t) {
        return e.length === t.length && e.every((e, r) => e.equals(t[r]));
      }
      function c(e, t) {
        if (!e.data && !e.output) throw new TypeError("Not enough data");
        ((t = Object.assign({ validate: !0 }, t || {})),
          o(
            {
              network: o.maybe(o.Object),
              output: o.maybe(o.Buffer),
              data: o.maybe(o.arrayOf(o.Buffer)),
            },
            e,
          ));
        const r = e.network || n.bitcoin,
          c = { name: "embed", network: r };
        if (
          (s.prop(c, "output", () => {
            if (e.data) return i.compile([u.OP_RETURN].concat(e.data));
          }),
          s.prop(c, "data", () => {
            if (e.output) return i.decompile(e.output).slice(1);
          }),
          t.validate && e.output)
        ) {
          const t = i.decompile(e.output);
          if (t[0] !== u.OP_RETURN) throw new TypeError("Output is invalid");
          if (!t.slice(1).every(o.Buffer))
            throw new TypeError("Output is invalid");
          if (e.data && !a(e.data, c.data))
            throw new TypeError("Data mismatch");
        }
        return Object.assign(c, e);
      }
      t.p2data = c;
    },
    3697: function (e, t, r) {
      "use strict";
      (function (e) {
        function r(e, t, r) {
          ((t = t || 4), (r = void 0 === r || r));
          const n = e.length;
          if (0 === n) return 0;
          if (n > t) throw new TypeError("Script number overflow");
          if (r && 0 === (127 & e[n - 1]) && (n <= 1 || 0 === (128 & e[n - 2])))
            throw new Error("Non-minimally encoded script number");
          if (5 === n) {
            const t = e.readUInt32LE(0),
              r = e.readUInt8(4);
            return 128 & r
              ? -(4294967296 * (-129 & r) + t)
              : 4294967296 * r + t;
          }
          let i = 0;
          for (let s = 0; s < n; ++s) i |= e[s] << (8 * s);
          return 128 & e[n - 1] ? -(i & ~(128 << (8 * (n - 1)))) : i;
        }
        function n(e) {
          return e > 2147483647
            ? 5
            : e > 8388607
              ? 4
              : e > 32767
                ? 3
                : e > 127
                  ? 2
                  : e > 0
                    ? 1
                    : 0;
        }
        function i(t) {
          let r = Math.abs(t);
          const i = n(r),
            s = e.allocUnsafe(i),
            o = t < 0;
          for (let e = 0; e < i; ++e) (s.writeUInt8(255 & r, e), (r >>= 8));
          return (
            128 & s[i - 1]
              ? s.writeUInt8(o ? 128 : 0, i - 1)
              : o && (s[i - 1] |= 128),
            s
          );
        }
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decode = r),
          (t.encode = i));
      }).call(this, r(2).Buffer);
    },
    3698: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2822),
          i = r(2898),
          s = r(2758),
          o = e.alloc(1, 0);
        function u(t) {
          let r = 0;
          while (0 === t[r]) ++r;
          return r === t.length
            ? o
            : ((t = t.slice(r)),
              128 & t[0] ? e.concat([o, t], 1 + t.length) : t);
        }
        function a(t) {
          0 === t[0] && (t = t.slice(1));
          const r = e.alloc(32, 0),
            n = Math.max(0, 32 - t.length);
          return (t.copy(r, n), r);
        }
        function c(t) {
          const r = t.readUInt8(t.length - 1),
            n = -129 & r;
          if (n <= 0 || n >= 4) throw new Error("Invalid hashType " + r);
          const s = i.decode(t.slice(0, -1)),
            o = a(s.r),
            u = a(s.s),
            c = e.concat([o, u], 64);
          return { signature: c, hashType: r };
        }
        function p(t, r) {
          s(
            { signature: n.BufferN(64), hashType: n.UInt8 },
            { signature: t, hashType: r },
          );
          const o = -129 & r;
          if (o <= 0 || o >= 4) throw new Error("Invalid hashType " + r);
          const a = e.allocUnsafe(1);
          a.writeUInt8(r, 0);
          const c = u(t.slice(0, 32)),
            p = u(t.slice(32, 64));
          return e.concat([i.encode(c, p), a]);
        }
        ((t.decode = c), (t.encode = p));
      }).call(this, r(2).Buffer);
    },
    3699: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2803),
        i = r(2760),
        s = r(2893),
        o = i.OPS,
        u = r(2758),
        a = r(2819),
        c = o.OP_RESERVED;
      function p(e, t) {
        return e.length === t.length && e.every((e, r) => e.equals(t[r]));
      }
      function f(e, t) {
        if (
          !e.input &&
          !e.output &&
          (!e.pubkeys || void 0 === e.m) &&
          !e.signatures
        )
          throw new TypeError("Not enough data");
        function r(e) {
          return (
            i.isCanonicalScriptSignature(e) ||
            void 0 !== (t.allowIncomplete && e === o.OP_0)
          );
        }
        ((t = Object.assign({ validate: !0 }, t || {})),
          u(
            {
              network: u.maybe(u.Object),
              m: u.maybe(u.Number),
              n: u.maybe(u.Number),
              output: u.maybe(u.Buffer),
              pubkeys: u.maybe(u.arrayOf(a.isPoint)),
              signatures: u.maybe(u.arrayOf(r)),
              input: u.maybe(u.Buffer),
            },
            e,
          ));
        const f = e.network || n.bitcoin,
          h = { network: f };
        let l = [],
          d = !1;
        function y(e) {
          d ||
            ((d = !0),
            (l = i.decompile(e)),
            (h.m = l[0] - c),
            (h.n = l[l.length - 2] - c),
            (h.pubkeys = l.slice(1, -2)));
        }
        if (
          (s.prop(h, "output", () => {
            if (e.m && h.n && e.pubkeys)
              return i.compile(
                [].concat(c + e.m, e.pubkeys, c + h.n, o.OP_CHECKMULTISIG),
              );
          }),
          s.prop(h, "m", () => {
            if (h.output) return (y(h.output), h.m);
          }),
          s.prop(h, "n", () => {
            if (h.pubkeys) return h.pubkeys.length;
          }),
          s.prop(h, "pubkeys", () => {
            if (e.output) return (y(e.output), h.pubkeys);
          }),
          s.prop(h, "signatures", () => {
            if (e.input) return i.decompile(e.input).slice(1);
          }),
          s.prop(h, "input", () => {
            if (e.signatures) return i.compile([o.OP_0].concat(e.signatures));
          }),
          s.prop(h, "witness", () => {
            if (h.input) return [];
          }),
          s.prop(h, "name", () => {
            if (h.m && h.n) return `p2ms(${h.m} of ${h.n})`;
          }),
          t.validate)
        ) {
          if (e.output) {
            if ((y(e.output), !u.Number(l[0])))
              throw new TypeError("Output is invalid");
            if (!u.Number(l[l.length - 2]))
              throw new TypeError("Output is invalid");
            if (l[l.length - 1] !== o.OP_CHECKMULTISIG)
              throw new TypeError("Output is invalid");
            if (h.m <= 0 || h.n > 16 || h.m > h.n || h.n !== l.length - 3)
              throw new TypeError("Output is invalid");
            if (!h.pubkeys.every((e) => a.isPoint(e)))
              throw new TypeError("Output is invalid");
            if (void 0 !== e.m && e.m !== h.m)
              throw new TypeError("m mismatch");
            if (void 0 !== e.n && e.n !== h.n)
              throw new TypeError("n mismatch");
            if (e.pubkeys && !p(e.pubkeys, h.pubkeys))
              throw new TypeError("Pubkeys mismatch");
          }
          if (e.pubkeys) {
            if (void 0 !== e.n && e.n !== e.pubkeys.length)
              throw new TypeError("Pubkey count mismatch");
            if (((h.n = e.pubkeys.length), h.n < h.m))
              throw new TypeError("Pubkey count cannot be less than m");
          }
          if (e.signatures) {
            if (e.signatures.length < h.m)
              throw new TypeError("Not enough signatures provided");
            if (e.signatures.length > h.m)
              throw new TypeError("Too many signatures provided");
          }
          if (e.input) {
            if (e.input[0] !== o.OP_0) throw new TypeError("Input is invalid");
            if (0 === h.signatures.length || !h.signatures.every(r))
              throw new TypeError("Input has invalid signature(s)");
            if (e.signatures && !p(e.signatures, h.signatures))
              throw new TypeError("Signature mismatch");
            if (void 0 !== e.m && e.m !== e.signatures.length)
              throw new TypeError("Signature count mismatch");
          }
        }
        return Object.assign(h, e);
      }
      t.p2ms = f;
    },
    3700: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2803),
        i = r(2760),
        s = r(2893),
        o = r(2758),
        u = i.OPS,
        a = r(2819);
      function c(e, t) {
        if (!e.input && !e.output && !e.pubkey && !e.input && !e.signature)
          throw new TypeError("Not enough data");
        ((t = Object.assign({ validate: !0 }, t || {})),
          o(
            {
              network: o.maybe(o.Object),
              output: o.maybe(o.Buffer),
              pubkey: o.maybe(a.isPoint),
              signature: o.maybe(i.isCanonicalScriptSignature),
              input: o.maybe(o.Buffer),
            },
            e,
          ));
        const r = s.value(() => i.decompile(e.input)),
          c = e.network || n.bitcoin,
          p = { name: "p2pk", network: c };
        if (
          (s.prop(p, "output", () => {
            if (e.pubkey) return i.compile([e.pubkey, u.OP_CHECKSIG]);
          }),
          s.prop(p, "pubkey", () => {
            if (e.output) return e.output.slice(1, -1);
          }),
          s.prop(p, "signature", () => {
            if (e.input) return r()[0];
          }),
          s.prop(p, "input", () => {
            if (e.signature) return i.compile([e.signature]);
          }),
          s.prop(p, "witness", () => {
            if (p.input) return [];
          }),
          t.validate)
        ) {
          if (e.output) {
            if (e.output[e.output.length - 1] !== u.OP_CHECKSIG)
              throw new TypeError("Output is invalid");
            if (!a.isPoint(p.pubkey))
              throw new TypeError("Output pubkey is invalid");
            if (e.pubkey && !e.pubkey.equals(p.pubkey))
              throw new TypeError("Pubkey mismatch");
          }
          if (e.signature && e.input && !e.input.equals(p.input))
            throw new TypeError("Signature mismatch");
          if (e.input) {
            if (1 !== r().length) throw new TypeError("Input is invalid");
            if (!i.isCanonicalScriptSignature(p.signature))
              throw new TypeError("Input has invalid signature");
          }
        }
        return Object.assign(p, e);
      }
      t.p2pk = c;
    },
    3701: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2832),
          i = r(2803),
          s = r(2760),
          o = r(2893),
          u = r(2758),
          a = s.OPS,
          c = r(2819),
          p = r(2792);
        function f(t, r) {
          if (!t.address && !t.hash && !t.output && !t.pubkey && !t.input)
            throw new TypeError("Not enough data");
          ((r = Object.assign({ validate: !0 }, r || {})),
            u(
              {
                network: u.maybe(u.Object),
                address: u.maybe(u.String),
                hash: u.maybe(u.BufferN(20)),
                output: u.maybe(u.BufferN(25)),
                pubkey: u.maybe(c.isPoint),
                signature: u.maybe(s.isCanonicalScriptSignature),
                input: u.maybe(u.Buffer),
              },
              t,
            ));
          const f = o.value(() => {
              const e = p.decode(t.address),
                r = e.readUInt8(0),
                n = e.slice(1);
              return { version: r, hash: n };
            }),
            h = o.value(() => s.decompile(t.input)),
            l = t.network || i.bitcoin,
            d = { name: "p2pkh", network: l };
          if (
            (o.prop(d, "address", () => {
              if (!d.hash) return;
              const t = e.allocUnsafe(21);
              return (
                t.writeUInt8(l.pubKeyHash, 0),
                d.hash.copy(t, 1),
                p.encode(t)
              );
            }),
            o.prop(d, "hash", () =>
              t.output
                ? t.output.slice(3, 23)
                : t.address
                  ? f().hash
                  : t.pubkey || d.pubkey
                    ? n.hash160(t.pubkey || d.pubkey)
                    : void 0,
            ),
            o.prop(d, "output", () => {
              if (d.hash)
                return s.compile([
                  a.OP_DUP,
                  a.OP_HASH160,
                  d.hash,
                  a.OP_EQUALVERIFY,
                  a.OP_CHECKSIG,
                ]);
            }),
            o.prop(d, "pubkey", () => {
              if (t.input) return h()[1];
            }),
            o.prop(d, "signature", () => {
              if (t.input) return h()[0];
            }),
            o.prop(d, "input", () => {
              if (t.pubkey && t.signature)
                return s.compile([t.signature, t.pubkey]);
            }),
            o.prop(d, "witness", () => {
              if (d.input) return [];
            }),
            r.validate)
          ) {
            let r = e.from([]);
            if (t.address) {
              if (f().version !== l.pubKeyHash)
                throw new TypeError("Invalid version or Network mismatch");
              if (20 !== f().hash.length)
                throw new TypeError("Invalid address");
              r = f().hash;
            }
            if (t.hash) {
              if (r.length > 0 && !r.equals(t.hash))
                throw new TypeError("Hash mismatch");
              r = t.hash;
            }
            if (t.output) {
              if (
                25 !== t.output.length ||
                t.output[0] !== a.OP_DUP ||
                t.output[1] !== a.OP_HASH160 ||
                20 !== t.output[2] ||
                t.output[23] !== a.OP_EQUALVERIFY ||
                t.output[24] !== a.OP_CHECKSIG
              )
                throw new TypeError("Output is invalid");
              const e = t.output.slice(3, 23);
              if (r.length > 0 && !r.equals(e))
                throw new TypeError("Hash mismatch");
              r = e;
            }
            if (t.pubkey) {
              const e = n.hash160(t.pubkey);
              if (r.length > 0 && !r.equals(e))
                throw new TypeError("Hash mismatch");
              r = e;
            }
            if (t.input) {
              const e = h();
              if (2 !== e.length) throw new TypeError("Input is invalid");
              if (!s.isCanonicalScriptSignature(e[0]))
                throw new TypeError("Input has invalid signature");
              if (!c.isPoint(e[1]))
                throw new TypeError("Input has invalid pubkey");
              if (t.signature && !t.signature.equals(e[0]))
                throw new TypeError("Signature mismatch");
              if (t.pubkey && !t.pubkey.equals(e[1]))
                throw new TypeError("Pubkey mismatch");
              const i = n.hash160(e[1]);
              if (r.length > 0 && !r.equals(i))
                throw new TypeError("Hash mismatch");
            }
          }
          return Object.assign(d, t);
        }
        t.p2pkh = f;
      }).call(this, r(2).Buffer);
    },
    3702: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2832),
          i = r(2803),
          s = r(2760),
          o = r(2893),
          u = r(2758),
          a = s.OPS,
          c = r(2792);
        function p(e, t) {
          return e.length === t.length && e.every((e, r) => e.equals(t[r]));
        }
        function f(t, r) {
          if (!t.address && !t.hash && !t.output && !t.redeem && !t.input)
            throw new TypeError("Not enough data");
          ((r = Object.assign({ validate: !0 }, r || {})),
            u(
              {
                network: u.maybe(u.Object),
                address: u.maybe(u.String),
                hash: u.maybe(u.BufferN(20)),
                output: u.maybe(u.BufferN(23)),
                redeem: u.maybe({
                  network: u.maybe(u.Object),
                  output: u.maybe(u.Buffer),
                  input: u.maybe(u.Buffer),
                  witness: u.maybe(u.arrayOf(u.Buffer)),
                }),
                input: u.maybe(u.Buffer),
                witness: u.maybe(u.arrayOf(u.Buffer)),
              },
              t,
            ));
          let f = t.network;
          f || (f = (t.redeem && t.redeem.network) || i.bitcoin);
          const h = { network: f },
            l = o.value(() => {
              const e = c.decode(t.address),
                r = e.readUInt8(0),
                n = e.slice(1);
              return { version: r, hash: n };
            }),
            d = o.value(() => s.decompile(t.input)),
            y = o.value(() => {
              const e = d();
              return {
                network: f,
                output: e[e.length - 1],
                input: s.compile(e.slice(0, -1)),
                witness: t.witness || [],
              };
            });
          if (
            (o.prop(h, "address", () => {
              if (!h.hash) return;
              const t = e.allocUnsafe(21);
              return (
                t.writeUInt8(h.network.scriptHash, 0),
                h.hash.copy(t, 1),
                c.encode(t)
              );
            }),
            o.prop(h, "hash", () =>
              t.output
                ? t.output.slice(2, 22)
                : t.address
                  ? l().hash
                  : h.redeem && h.redeem.output
                    ? n.hash160(h.redeem.output)
                    : void 0,
            ),
            o.prop(h, "output", () => {
              if (h.hash) return s.compile([a.OP_HASH160, h.hash, a.OP_EQUAL]);
            }),
            o.prop(h, "redeem", () => {
              if (t.input) return y();
            }),
            o.prop(h, "input", () => {
              if (t.redeem && t.redeem.input && t.redeem.output)
                return s.compile(
                  [].concat(s.decompile(t.redeem.input), t.redeem.output),
                );
            }),
            o.prop(h, "witness", () =>
              h.redeem && h.redeem.witness
                ? h.redeem.witness
                : h.input
                  ? []
                  : void 0,
            ),
            o.prop(h, "name", () => {
              const e = ["p2sh"];
              return (
                void 0 !== h.redeem && e.push(h.redeem.name),
                e.join("-")
              );
            }),
            r.validate)
          ) {
            let r = e.from([]);
            if (t.address) {
              if (l().version !== f.scriptHash)
                throw new TypeError("Invalid version or Network mismatch");
              if (20 !== l().hash.length)
                throw new TypeError("Invalid address");
              r = l().hash;
            }
            if (t.hash) {
              if (r.length > 0 && !r.equals(t.hash))
                throw new TypeError("Hash mismatch");
              r = t.hash;
            }
            if (t.output) {
              if (
                23 !== t.output.length ||
                t.output[0] !== a.OP_HASH160 ||
                20 !== t.output[1] ||
                t.output[22] !== a.OP_EQUAL
              )
                throw new TypeError("Output is invalid");
              const e = t.output.slice(2, 22);
              if (r.length > 0 && !r.equals(e))
                throw new TypeError("Hash mismatch");
              r = e;
            }
            const i = (e) => {
              if (e.output) {
                const t = s.decompile(e.output);
                if (!t || t.length < 1)
                  throw new TypeError("Redeem.output too short");
                const i = n.hash160(e.output);
                if (r.length > 0 && !r.equals(i))
                  throw new TypeError("Hash mismatch");
                r = i;
              }
              if (e.input) {
                const t = e.input.length > 0,
                  r = e.witness && e.witness.length > 0;
                if (!t && !r) throw new TypeError("Empty input");
                if (t && r) throw new TypeError("Input and witness provided");
                if (t) {
                  const t = s.decompile(e.input);
                  if (!s.isPushOnly(t))
                    throw new TypeError("Non push-only scriptSig");
                }
              }
            };
            if (t.input) {
              const t = d();
              if (!t || t.length < 1) throw new TypeError("Input too short");
              if (!e.isBuffer(y().output))
                throw new TypeError("Input is invalid");
              i(y());
            }
            if (t.redeem) {
              if (t.redeem.network && t.redeem.network !== f)
                throw new TypeError("Network mismatch");
              if (t.input) {
                const e = y();
                if (t.redeem.output && !t.redeem.output.equals(e.output))
                  throw new TypeError("Redeem.output mismatch");
                if (t.redeem.input && !t.redeem.input.equals(e.input))
                  throw new TypeError("Redeem.input mismatch");
              }
              i(t.redeem);
            }
            if (
              t.witness &&
              t.redeem &&
              t.redeem.witness &&
              !p(t.redeem.witness, t.witness)
            )
              throw new TypeError("Witness and redeem.witness mismatch");
          }
          return Object.assign(h, t);
        }
        t.p2sh = f;
      }).call(this, r(2).Buffer);
    },
    3703: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2832),
          i = r(2803),
          s = r(2760),
          o = r(2893),
          u = r(2758),
          a = s.OPS,
          c = r(2819),
          p = r(803),
          f = e.alloc(0);
        function h(t, r) {
          if (!t.address && !t.hash && !t.output && !t.pubkey && !t.witness)
            throw new TypeError("Not enough data");
          ((r = Object.assign({ validate: !0 }, r || {})),
            u(
              {
                address: u.maybe(u.String),
                hash: u.maybe(u.BufferN(20)),
                input: u.maybe(u.BufferN(0)),
                network: u.maybe(u.Object),
                output: u.maybe(u.BufferN(22)),
                pubkey: u.maybe(c.isPoint),
                signature: u.maybe(s.isCanonicalScriptSignature),
                witness: u.maybe(u.arrayOf(u.Buffer)),
              },
              t,
            ));
          const h = o.value(() => {
              const r = p.decode(t.address),
                n = r.words.shift(),
                i = p.fromWords(r.words);
              return { version: n, prefix: r.prefix, data: e.from(i) };
            }),
            l = t.network || i.bitcoin,
            d = { name: "p2wpkh", network: l };
          if (
            (o.prop(d, "address", () => {
              if (!d.hash) return;
              const e = p.toWords(d.hash);
              return (e.unshift(0), p.encode(l.bech32, e));
            }),
            o.prop(d, "hash", () =>
              t.output
                ? t.output.slice(2, 22)
                : t.address
                  ? h().data
                  : t.pubkey || d.pubkey
                    ? n.hash160(t.pubkey || d.pubkey)
                    : void 0,
            ),
            o.prop(d, "output", () => {
              if (d.hash) return s.compile([a.OP_0, d.hash]);
            }),
            o.prop(d, "pubkey", () =>
              t.pubkey ? t.pubkey : t.witness ? t.witness[1] : void 0,
            ),
            o.prop(d, "signature", () => {
              if (t.witness) return t.witness[0];
            }),
            o.prop(d, "input", () => {
              if (d.witness) return f;
            }),
            o.prop(d, "witness", () => {
              if (t.pubkey && t.signature) return [t.signature, t.pubkey];
            }),
            r.validate)
          ) {
            let r = e.from([]);
            if (t.address) {
              if (l && l.bech32 !== h().prefix)
                throw new TypeError("Invalid prefix or Network mismatch");
              if (0 !== h().version)
                throw new TypeError("Invalid address version");
              if (20 !== h().data.length)
                throw new TypeError("Invalid address data");
              r = h().data;
            }
            if (t.hash) {
              if (r.length > 0 && !r.equals(t.hash))
                throw new TypeError("Hash mismatch");
              r = t.hash;
            }
            if (t.output) {
              if (
                22 !== t.output.length ||
                t.output[0] !== a.OP_0 ||
                20 !== t.output[1]
              )
                throw new TypeError("Output is invalid");
              if (r.length > 0 && !r.equals(t.output.slice(2)))
                throw new TypeError("Hash mismatch");
              r = t.output.slice(2);
            }
            if (t.pubkey) {
              const e = n.hash160(t.pubkey);
              if (r.length > 0 && !r.equals(e))
                throw new TypeError("Hash mismatch");
              if (((r = e), !c.isPoint(t.pubkey) || 33 !== t.pubkey.length))
                throw new TypeError("Invalid pubkey for p2wpkh");
            }
            if (t.witness) {
              if (2 !== t.witness.length)
                throw new TypeError("Witness is invalid");
              if (!s.isCanonicalScriptSignature(t.witness[0]))
                throw new TypeError("Witness has invalid signature");
              if (!c.isPoint(t.witness[1]) || 33 !== t.witness[1].length)
                throw new TypeError("Witness has invalid pubkey");
              if (t.signature && !t.signature.equals(t.witness[0]))
                throw new TypeError("Signature mismatch");
              if (t.pubkey && !t.pubkey.equals(t.witness[1]))
                throw new TypeError("Pubkey mismatch");
              const e = n.hash160(t.witness[1]);
              if (r.length > 0 && !r.equals(e))
                throw new TypeError("Hash mismatch");
            }
          }
          return Object.assign(d, t);
        }
        t.p2wpkh = h;
      }).call(this, r(2).Buffer);
    },
    3704: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2832),
          i = r(2803),
          s = r(2760),
          o = r(2893),
          u = r(2758),
          a = s.OPS,
          c = r(2819),
          p = r(803),
          f = e.alloc(0);
        function h(e, t) {
          return e.length === t.length && e.every((e, r) => e.equals(t[r]));
        }
        function l(t) {
          return !(
            !e.isBuffer(t) ||
            65 !== t.length ||
            4 !== t[0] ||
            !c.isPoint(t)
          );
        }
        function d(t, r) {
          if (!t.address && !t.hash && !t.output && !t.redeem && !t.witness)
            throw new TypeError("Not enough data");
          ((r = Object.assign({ validate: !0 }, r || {})),
            u(
              {
                network: u.maybe(u.Object),
                address: u.maybe(u.String),
                hash: u.maybe(u.BufferN(32)),
                output: u.maybe(u.BufferN(34)),
                redeem: u.maybe({
                  input: u.maybe(u.Buffer),
                  network: u.maybe(u.Object),
                  output: u.maybe(u.Buffer),
                  witness: u.maybe(u.arrayOf(u.Buffer)),
                }),
                input: u.maybe(u.BufferN(0)),
                witness: u.maybe(u.arrayOf(u.Buffer)),
              },
              t,
            ));
          const c = o.value(() => {
              const r = p.decode(t.address),
                n = r.words.shift(),
                i = p.fromWords(r.words);
              return { version: n, prefix: r.prefix, data: e.from(i) };
            }),
            d = o.value(() => s.decompile(t.redeem.input));
          let y = t.network;
          y || (y = (t.redeem && t.redeem.network) || i.bitcoin);
          const w = { network: y };
          if (
            (o.prop(w, "address", () => {
              if (!w.hash) return;
              const e = p.toWords(w.hash);
              return (e.unshift(0), p.encode(y.bech32, e));
            }),
            o.prop(w, "hash", () =>
              t.output
                ? t.output.slice(2)
                : t.address
                  ? c().data
                  : w.redeem && w.redeem.output
                    ? n.sha256(w.redeem.output)
                    : void 0,
            ),
            o.prop(w, "output", () => {
              if (w.hash) return s.compile([a.OP_0, w.hash]);
            }),
            o.prop(w, "redeem", () => {
              if (t.witness)
                return {
                  output: t.witness[t.witness.length - 1],
                  input: f,
                  witness: t.witness.slice(0, -1),
                };
            }),
            o.prop(w, "input", () => {
              if (w.witness) return f;
            }),
            o.prop(w, "witness", () => {
              if (
                t.redeem &&
                t.redeem.input &&
                t.redeem.input.length > 0 &&
                t.redeem.output &&
                t.redeem.output.length > 0
              ) {
                const e = s.toStack(d());
                return (
                  (w.redeem = Object.assign({ witness: e }, t.redeem)),
                  (w.redeem.input = f),
                  [].concat(e, t.redeem.output)
                );
              }
              if (t.redeem && t.redeem.output && t.redeem.witness)
                return [].concat(t.redeem.witness, t.redeem.output);
            }),
            o.prop(w, "name", () => {
              const e = ["p2wsh"];
              return (
                void 0 !== w.redeem && e.push(w.redeem.name),
                e.join("-")
              );
            }),
            r.validate)
          ) {
            let r = e.from([]);
            if (t.address) {
              if (c().prefix !== y.bech32)
                throw new TypeError("Invalid prefix or Network mismatch");
              if (0 !== c().version)
                throw new TypeError("Invalid address version");
              if (32 !== c().data.length)
                throw new TypeError("Invalid address data");
              r = c().data;
            }
            if (t.hash) {
              if (r.length > 0 && !r.equals(t.hash))
                throw new TypeError("Hash mismatch");
              r = t.hash;
            }
            if (t.output) {
              if (
                34 !== t.output.length ||
                t.output[0] !== a.OP_0 ||
                32 !== t.output[1]
              )
                throw new TypeError("Output is invalid");
              const e = t.output.slice(2);
              if (r.length > 0 && !r.equals(e))
                throw new TypeError("Hash mismatch");
              r = e;
            }
            if (t.redeem) {
              if (t.redeem.network && t.redeem.network !== y)
                throw new TypeError("Network mismatch");
              if (
                t.redeem.input &&
                t.redeem.input.length > 0 &&
                t.redeem.witness &&
                t.redeem.witness.length > 0
              )
                throw new TypeError("Ambiguous witness source");
              if (t.redeem.output) {
                if (0 === s.decompile(t.redeem.output).length)
                  throw new TypeError("Redeem.output is invalid");
                const e = n.sha256(t.redeem.output);
                if (r.length > 0 && !r.equals(e))
                  throw new TypeError("Hash mismatch");
                r = e;
              }
              if (t.redeem.input && !s.isPushOnly(d()))
                throw new TypeError("Non push-only scriptSig");
              if (
                t.witness &&
                t.redeem.witness &&
                !h(t.witness, t.redeem.witness)
              )
                throw new TypeError("Witness and redeem.witness mismatch");
              if (
                (t.redeem.input && d().some(l)) ||
                (t.redeem.output &&
                  (s.decompile(t.redeem.output) || []).some(l))
              )
                throw new TypeError(
                  "redeem.input or redeem.output contains uncompressed pubkey",
                );
            }
            if (t.witness && t.witness.length > 0) {
              const e = t.witness[t.witness.length - 1];
              if (t.redeem && t.redeem.output && !t.redeem.output.equals(e))
                throw new TypeError("Witness and redeem.output mismatch");
              if (t.witness.some(l) || (s.decompile(e) || []).some(l))
                throw new TypeError("Witness contains uncompressed pubkey");
            }
          }
          return Object.assign(w, t);
        }
        t.p2wsh = d;
      }).call(this, r(2).Buffer);
    },
    3705: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2995),
          i = r(2832),
          s = r(2996),
          o = r(2822),
          u = r(3110),
          a = r(2758),
          c = r(2864),
          p = new TypeError("Cannot compute merkle root for zero transactions"),
          f = new TypeError(
            "Cannot compute witness commit for non-segwit block",
          );
        class Block {
          constructor() {
            ((this.version = 1),
              (this.prevHash = void 0),
              (this.merkleRoot = void 0),
              (this.timestamp = 0),
              (this.witnessCommit = void 0),
              (this.bits = 0),
              (this.nonce = 0),
              (this.transactions = void 0));
          }
          static fromBuffer(e) {
            if (e.length < 80) throw new Error("Buffer too small (< 80 bytes)");
            const t = new n.BufferReader(e),
              r = new Block();
            if (
              ((r.version = t.readInt32()),
              (r.prevHash = t.readSlice(32)),
              (r.merkleRoot = t.readSlice(32)),
              (r.timestamp = t.readUInt32()),
              (r.bits = t.readUInt32()),
              (r.nonce = t.readUInt32()),
              80 === e.length)
            )
              return r;
            const i = () => {
                const e = s.Transaction.fromBuffer(
                  t.buffer.slice(t.offset),
                  !0,
                );
                return ((t.offset += e.byteLength()), e);
              },
              o = t.readVarInt();
            r.transactions = [];
            for (let n = 0; n < o; ++n) {
              const e = i();
              r.transactions.push(e);
            }
            const u = r.getWitnessCommit();
            return (u && (r.witnessCommit = u), r);
          }
          static fromHex(t) {
            return Block.fromBuffer(e.from(t, "hex"));
          }
          static calculateTarget(t) {
            const r = ((4278190080 & t) >> 24) - 3,
              n = 8388607 & t,
              i = e.alloc(32, 0);
            return (i.writeUIntBE(n, 29 - r, 3), i);
          }
          static calculateMerkleRoot(t, r) {
            if ((a([{ getHash: o.Function }], t), 0 === t.length)) throw p;
            if (r && !h(t)) throw f;
            const n = t.map((e) => e.getHash(r)),
              s = u(n, i.hash256);
            return r ? i.hash256(e.concat([s, t[0].ins[0].witness[0]])) : s;
          }
          getWitnessCommit() {
            if (!h(this.transactions)) return null;
            const t = this.transactions[0].outs
              .filter((t) =>
                t.script.slice(0, 6).equals(e.from("6a24aa21a9ed", "hex")),
              )
              .map((e) => e.script.slice(6, 38));
            if (0 === t.length) return null;
            const r = t[t.length - 1];
            return r instanceof e && 32 === r.length ? r : null;
          }
          hasWitnessCommit() {
            return (
              (this.witnessCommit instanceof e &&
                32 === this.witnessCommit.length) ||
              null !== this.getWitnessCommit()
            );
          }
          hasWitness() {
            return l(this.transactions);
          }
          weight() {
            const e = this.byteLength(!1, !1),
              t = this.byteLength(!1, !0);
            return 3 * e + t;
          }
          byteLength(e, t) {
            return (
              void 0 === t && (t = !0),
              e || !this.transactions
                ? 80
                : 80 +
                  c.encodingLength(this.transactions.length) +
                  this.transactions.reduce((e, r) => e + r.byteLength(t), 0)
            );
          }
          getHash() {
            return i.hash256(this.toBuffer(!0));
          }
          getId() {
            return n.reverseBuffer(this.getHash()).toString("hex");
          }
          getUTCDate() {
            const e = new Date(0);
            return (e.setUTCSeconds(this.timestamp), e);
          }
          toBuffer(t) {
            const r = e.allocUnsafe(this.byteLength(t)),
              i = new n.BufferWriter(r);
            return (
              i.writeInt32(this.version),
              i.writeSlice(this.prevHash),
              i.writeSlice(this.merkleRoot),
              i.writeUInt32(this.timestamp),
              i.writeUInt32(this.bits),
              i.writeUInt32(this.nonce),
              t ||
                !this.transactions ||
                (c.encode(this.transactions.length, r, i.offset),
                (i.offset += c.encode.bytes),
                this.transactions.forEach((e) => {
                  const t = e.byteLength();
                  (e.toBuffer(r, i.offset), (i.offset += t));
                })),
              r
            );
          }
          toHex(e) {
            return this.toBuffer(e).toString("hex");
          }
          checkTxRoots() {
            const e = this.hasWitnessCommit();
            return (
              !(!e && this.hasWitness()) &&
              this.__checkMerkleRoot() &&
              (!e || this.__checkWitnessCommit())
            );
          }
          checkProofOfWork() {
            const e = n.reverseBuffer(this.getHash()),
              t = Block.calculateTarget(this.bits);
            return e.compare(t) <= 0;
          }
          __checkMerkleRoot() {
            if (!this.transactions) throw p;
            const e = Block.calculateMerkleRoot(this.transactions);
            return 0 === this.merkleRoot.compare(e);
          }
          __checkWitnessCommit() {
            if (!this.transactions) throw p;
            if (!this.hasWitnessCommit()) throw f;
            const e = Block.calculateMerkleRoot(this.transactions, !0);
            return 0 === this.witnessCommit.compare(e);
          }
        }
        function h(e) {
          return (
            e instanceof Array &&
            e[0] &&
            e[0].ins &&
            e[0].ins instanceof Array &&
            e[0].ins[0] &&
            e[0].ins[0].witness &&
            e[0].ins[0].witness instanceof Array &&
            e[0].ins[0].witness.length > 0
          );
        }
        function l(e) {
          return (
            e instanceof Array &&
            e.some(
              (e) =>
                "object" === typeof e &&
                e.ins instanceof Array &&
                e.ins.some(
                  (e) =>
                    "object" === typeof e &&
                    e.witness instanceof Array &&
                    e.witness.length > 0,
                ),
            )
          );
        }
        t.Block = Block;
      }).call(this, r(2).Buffer);
    },
    3706: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(3707),
          i = r(2918),
          s = r(3309),
          o = r(3107),
          u = r(2995),
          a = r(2832),
          c = r(3109),
          p = r(2803),
          f = r(2994),
          h = r(2760),
          l = r(2996),
          d = { network: p.bitcoin, maximumFeeRate: 5e3 };
        class Psbt {
          constructor(e, t) {
            (void 0 === e && (e = {}),
              void 0 === t && (t = new n.Psbt(new PsbtTransaction())),
              (this.data = t),
              (this.opts = Object.assign({}, d, e)),
              (this.__CACHE = {
                __NON_WITNESS_UTXO_TX_CACHE: [],
                __NON_WITNESS_UTXO_BUF_CACHE: [],
                __TX_IN_CACHE: {},
                __TX: this.data.globalMap.unsignedTx.tx,
                __UNSAFE_SIGN_NONSEGWIT: !1,
              }),
              0 === this.data.inputs.length && this.setVersion(2));
            const r = (e, t, r, n) =>
              Object.defineProperty(e, t, { enumerable: r, writable: n });
            (r(this, "__CACHE", !1, !0), r(this, "opts", !1, !0));
          }
          static fromBase64(t, r) {
            void 0 === r && (r = {});
            const n = e.from(t, "base64");
            return this.fromBuffer(n, r);
          }
          static fromHex(t, r) {
            void 0 === r && (r = {});
            const n = e.from(t, "hex");
            return this.fromBuffer(n, r);
          }
          static fromBuffer(e, t) {
            void 0 === t && (t = {});
            const r = n.Psbt.fromBuffer(e, y),
              i = new Psbt(t, r);
            return (x(i.__CACHE.__TX, i.__CACHE), i);
          }
          get inputCount() {
            return this.data.inputs.length;
          }
          get version() {
            return this.__CACHE.__TX.version;
          }
          set version(e) {
            this.setVersion(e);
          }
          get locktime() {
            return this.__CACHE.__TX.locktime;
          }
          set locktime(e) {
            this.setLocktime(e);
          }
          get txInputs() {
            return this.__CACHE.__TX.ins.map((e) => ({
              hash: u.cloneBuffer(e.hash),
              index: e.index,
              sequence: e.sequence,
            }));
          }
          get txOutputs() {
            return this.__CACHE.__TX.outs.map((e) => {
              let t;
              try {
                t = o.fromOutputScript(e.script, this.opts.network);
              } catch (r) {}
              return {
                script: u.cloneBuffer(e.script),
                value: e.value,
                address: t,
              };
            });
          }
          combine() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            return (this.data.combine(...t.map((e) => e.data)), this);
          }
          clone() {
            const e = Psbt.fromBuffer(this.data.toBuffer());
            return ((e.opts = JSON.parse(JSON.stringify(this.opts))), e);
          }
          setMaximumFeeRate(e) {
            (O(e), (this.opts.maximumFeeRate = e));
          }
          setVersion(e) {
            (O(e), N(this.data.inputs, "setVersion"));
            const t = this.__CACHE;
            return ((t.__TX.version = e), (t.__EXTRACTED_TX = void 0), this);
          }
          setLocktime(e) {
            (O(e), N(this.data.inputs, "setLocktime"));
            const t = this.__CACHE;
            return ((t.__TX.locktime = e), (t.__EXTRACTED_TX = void 0), this);
          }
          setInputSequence(e, t) {
            (O(t), N(this.data.inputs, "setInputSequence"));
            const r = this.__CACHE;
            if (r.__TX.ins.length <= e) throw new Error("Input index too high");
            return (
              (r.__TX.ins[e].sequence = t),
              (r.__EXTRACTED_TX = void 0),
              this
            );
          }
          addInputs(e) {
            return (e.forEach((e) => this.addInput(e)), this);
          }
          addInput(e) {
            if (
              arguments.length > 1 ||
              !e ||
              void 0 === e.hash ||
              void 0 === e.index
            )
              throw new Error(
                "Invalid arguments for Psbt.addInput. Requires single object with at least [hash] and [index]",
              );
            (N(this.data.inputs, "addInput"),
              e.witnessScript && ce(e.witnessScript));
            const t = this.__CACHE;
            this.data.addInput(e);
            const r = t.__TX.ins[t.__TX.ins.length - 1];
            C(t, r);
            const n = this.data.inputs.length - 1,
              i = this.data.inputs[n];
            return (
              i.nonWitnessUtxo && Q(this.__CACHE, i, n),
              (t.__FEE = void 0),
              (t.__FEE_RATE = void 0),
              (t.__EXTRACTED_TX = void 0),
              this
            );
          }
          addOutputs(e) {
            return (e.forEach((e) => this.addOutput(e)), this);
          }
          addOutput(e) {
            if (
              arguments.length > 1 ||
              !e ||
              void 0 === e.value ||
              (void 0 === e.address && void 0 === e.script)
            )
              throw new Error(
                "Invalid arguments for Psbt.addOutput. Requires single object with at least [script or address] and [value]",
              );
            N(this.data.inputs, "addOutput");
            const { address: t } = e;
            if ("string" === typeof t) {
              const { network: r } = this.opts,
                n = o.toOutputScript(t, r);
              e = Object.assign(e, { script: n });
            }
            const r = this.__CACHE;
            return (
              this.data.addOutput(e),
              (r.__FEE = void 0),
              (r.__FEE_RATE = void 0),
              (r.__EXTRACTED_TX = void 0),
              this
            );
          }
          extractTransaction(e) {
            if (!this.data.inputs.every(m)) throw new Error("Not finalized");
            const t = this.__CACHE;
            if ((e || A(this, t, this.opts), t.__EXTRACTED_TX))
              return t.__EXTRACTED_TX;
            const r = t.__TX.clone();
            return (Z(this.data.inputs, r, t, !0), r);
          }
          getFeeRate() {
            return D("__FEE_RATE", "fee rate", this.data.inputs, this.__CACHE);
          }
          getFee() {
            return D("__FEE", "fee", this.data.inputs, this.__CACHE);
          }
          finalizeAllInputs() {
            return (
              s.checkForInput(this.data.inputs, 0),
              he(this.data.inputs.length).forEach((e) => this.finalizeInput(e)),
              this
            );
          }
          finalizeInput(e, t) {
            void 0 === t && (t = M);
            const r = s.checkForInput(this.data.inputs, e),
              {
                script: n,
                isP2SH: i,
                isP2WSH: o,
                isSegwit: u,
              } = q(e, r, this.__CACHE);
            if (!n) throw new Error("No script found for input #" + e);
            U(r);
            const { finalScriptSig: a, finalScriptWitness: c } = t(
              e,
              r,
              n,
              u,
              i,
              o,
            );
            if (
              (a && this.data.updateInput(e, { finalScriptSig: a }),
              c && this.data.updateInput(e, { finalScriptWitness: c }),
              !a && !c)
            )
              throw new Error("Unknown error finalizing input #" + e);
            return (this.data.clearFinalizedInput(e), this);
          }
          getInputType(e) {
            const t = s.checkForInput(this.data.inputs, e),
              r = te(e, t, this.__CACHE),
              n = ae(
                r,
                e,
                "input",
                t.redeemScript || ie(t.finalScriptSig),
                t.witnessScript || se(t.finalScriptWitness),
              ),
              i = "raw" === n.type ? "" : n.type + "-",
              o = fe(n.meaningfulScript);
            return i + o;
          }
          inputHasPubkey(e, t) {
            const r = s.checkForInput(this.data.inputs, e);
            return re(t, r, e, this.__CACHE);
          }
          inputHasHDKey(e, t) {
            const r = s.checkForInput(this.data.inputs, e),
              n = P(t);
            return !!r.bip32Derivation && r.bip32Derivation.some(n);
          }
          outputHasPubkey(e, t) {
            const r = s.checkForOutput(this.data.outputs, e);
            return ne(t, r, e, this.__CACHE);
          }
          outputHasHDKey(e, t) {
            const r = s.checkForOutput(this.data.outputs, e),
              n = P(t);
            return !!r.bip32Derivation && r.bip32Derivation.some(n);
          }
          validateSignaturesOfAllInputs() {
            s.checkForInput(this.data.inputs, 0);
            const e = he(this.data.inputs.length).map((e) =>
              this.validateSignaturesOfInput(e),
            );
            return e.reduce((e, t) => !0 === t && e, !0);
          }
          validateSignaturesOfInput(e, t) {
            const r = this.data.inputs[e],
              n = (r || {}).partialSig;
            if (!r || !n || n.length < 1)
              throw new Error("No signatures to validate");
            const i = t ? n.filter((e) => e.pubkey.equals(t)) : n;
            if (i.length < 1) throw new Error("No signatures for this pubkey");
            const s = [];
            let o, u, a;
            for (const p of i) {
              const t = h.signature.decode(p.signature),
                { hash: n, script: i } =
                  a !== t.hashType
                    ? F(
                        e,
                        Object.assign({}, r, { sighashType: t.hashType }),
                        this.__CACHE,
                        !0,
                      )
                    : { hash: o, script: u };
              ((a = t.hashType), (o = n), (u = i), B(p.pubkey, i, "verify"));
              const f = c.fromPublicKey(p.pubkey);
              s.push(f.verify(n, t.signature));
            }
            return s.every((e) => !0 === e);
          }
          signAllInputsHD(e, t) {
            if (
              (void 0 === t && (t = [l.Transaction.SIGHASH_ALL]),
              !e || !e.publicKey || !e.fingerprint)
            )
              throw new Error("Need HDSigner to sign input");
            const r = [];
            for (const i of he(this.data.inputs.length))
              try {
                (this.signInputHD(i, e, t), r.push(!0));
              } catch (n) {
                r.push(!1);
              }
            if (r.every((e) => !1 === e))
              throw new Error("No inputs were signed");
            return this;
          }
          signAllInputsHDAsync(e, t) {
            return (
              void 0 === t && (t = [l.Transaction.SIGHASH_ALL]),
              new Promise((r, n) => {
                if (!e || !e.publicKey || !e.fingerprint)
                  return n(new Error("Need HDSigner to sign input"));
                const i = [],
                  s = [];
                for (const o of he(this.data.inputs.length))
                  s.push(
                    this.signInputHDAsync(o, e, t).then(
                      () => {
                        i.push(!0);
                      },
                      () => {
                        i.push(!1);
                      },
                    ),
                  );
                return Promise.all(s).then(() => {
                  if (i.every((e) => !1 === e))
                    return n(new Error("No inputs were signed"));
                  r();
                });
              })
            );
          }
          signInputHD(e, t, r) {
            if (
              (void 0 === r && (r = [l.Transaction.SIGHASH_ALL]),
              !t || !t.publicKey || !t.fingerprint)
            )
              throw new Error("Need HDSigner to sign input");
            const n = X(e, this.data.inputs, t);
            return (n.forEach((t) => this.signInput(e, t, r)), this);
          }
          signInputHDAsync(e, t, r) {
            return (
              void 0 === r && (r = [l.Transaction.SIGHASH_ALL]),
              new Promise((n, i) => {
                if (!t || !t.publicKey || !t.fingerprint)
                  return i(new Error("Need HDSigner to sign input"));
                const s = X(e, this.data.inputs, t),
                  o = s.map((t) => this.signInputAsync(e, t, r));
                return Promise.all(o)
                  .then(() => {
                    n();
                  })
                  .catch(i);
              })
            );
          }
          signAllInputs(e, t) {
            if (
              (void 0 === t && (t = [l.Transaction.SIGHASH_ALL]),
              !e || !e.publicKey)
            )
              throw new Error("Need Signer to sign input");
            const r = [];
            for (const i of he(this.data.inputs.length))
              try {
                (this.signInput(i, e, t), r.push(!0));
              } catch (n) {
                r.push(!1);
              }
            if (r.every((e) => !1 === e))
              throw new Error("No inputs were signed");
            return this;
          }
          signAllInputsAsync(e, t) {
            return (
              void 0 === t && (t = [l.Transaction.SIGHASH_ALL]),
              new Promise((r, n) => {
                if (!e || !e.publicKey)
                  return n(new Error("Need Signer to sign input"));
                const i = [],
                  s = [];
                for (const [o] of this.data.inputs.entries())
                  s.push(
                    this.signInputAsync(o, e, t).then(
                      () => {
                        i.push(!0);
                      },
                      () => {
                        i.push(!1);
                      },
                    ),
                  );
                return Promise.all(s).then(() => {
                  if (i.every((e) => !1 === e))
                    return n(new Error("No inputs were signed"));
                  r();
                });
              })
            );
          }
          signInput(e, t, r) {
            if (
              (void 0 === r && (r = [l.Transaction.SIGHASH_ALL]),
              !t || !t.publicKey)
            )
              throw new Error("Need Signer to sign input");
            const { hash: n, sighashType: i } = W(
                this.data.inputs,
                e,
                t.publicKey,
                this.__CACHE,
                r,
              ),
              s = [
                {
                  pubkey: t.publicKey,
                  signature: h.signature.encode(t.sign(n), i),
                },
              ];
            return (this.data.updateInput(e, { partialSig: s }), this);
          }
          signInputAsync(e, t, r) {
            return (
              void 0 === r && (r = [l.Transaction.SIGHASH_ALL]),
              Promise.resolve().then(() => {
                if (!t || !t.publicKey)
                  throw new Error("Need Signer to sign input");
                const { hash: n, sighashType: i } = W(
                  this.data.inputs,
                  e,
                  t.publicKey,
                  this.__CACHE,
                  r,
                );
                return Promise.resolve(t.sign(n)).then((r) => {
                  const n = [
                    {
                      pubkey: t.publicKey,
                      signature: h.signature.encode(r, i),
                    },
                  ];
                  this.data.updateInput(e, { partialSig: n });
                });
              })
            );
          }
          toBuffer() {
            return (g(this.__CACHE), this.data.toBuffer());
          }
          toHex() {
            return (g(this.__CACHE), this.data.toHex());
          }
          toBase64() {
            return (g(this.__CACHE), this.data.toBase64());
          }
          updateGlobal(e) {
            return (this.data.updateGlobal(e), this);
          }
          updateInput(e, t) {
            return (
              t.witnessScript && ce(t.witnessScript),
              this.data.updateInput(e, t),
              t.nonWitnessUtxo && Q(this.__CACHE, this.data.inputs[e], e),
              this
            );
          }
          updateOutput(e, t) {
            return (this.data.updateOutput(e, t), this);
          }
          addUnknownKeyValToGlobal(e) {
            return (this.data.addUnknownKeyValToGlobal(e), this);
          }
          addUnknownKeyValToInput(e, t) {
            return (this.data.addUnknownKeyValToInput(e, t), this);
          }
          addUnknownKeyValToOutput(e, t) {
            return (this.data.addUnknownKeyValToOutput(e, t), this);
          }
          clearFinalizedInput(e) {
            return (this.data.clearFinalizedInput(e), this);
          }
        }
        t.Psbt = Psbt;
        const y = (e) => new PsbtTransaction(e);
        class PsbtTransaction {
          constructor(t) {
            (void 0 === t && (t = e.from([2, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
              (this.tx = l.Transaction.fromBuffer(t)),
              H(this.tx),
              Object.defineProperty(this, "tx", {
                enumerable: !1,
                writable: !0,
              }));
          }
          getInputOutputCounts() {
            return {
              inputCount: this.tx.ins.length,
              outputCount: this.tx.outs.length,
            };
          }
          addInput(t) {
            if (
              void 0 === t.hash ||
              void 0 === t.index ||
              (!e.isBuffer(t.hash) && "string" !== typeof t.hash) ||
              "number" !== typeof t.index
            )
              throw new Error("Error adding input.");
            const r =
              "string" === typeof t.hash
                ? u.reverseBuffer(e.from(t.hash, "hex"))
                : t.hash;
            this.tx.addInput(r, t.index, t.sequence);
          }
          addOutput(t) {
            if (
              void 0 === t.script ||
              void 0 === t.value ||
              !e.isBuffer(t.script) ||
              "number" !== typeof t.value
            )
              throw new Error("Error adding output.");
            this.tx.addOutput(t.script, t.value);
          }
          toBuffer() {
            return this.tx.toBuffer();
          }
        }
        function w(e, t, r) {
          switch (r) {
            case "pubkey":
            case "pubkeyhash":
            case "witnesspubkeyhash":
              return _(1, e.partialSig);
            case "multisig":
              const r = f.p2ms({ output: t });
              return _(r.m, e.partialSig, r.pubkeys);
            default:
              return !1;
          }
        }
        function g(e) {
          if (!1 !== e.__UNSAFE_SIGN_NONSEGWIT)
            throw new Error("Not BIP174 compliant, can not export");
        }
        function _(e, t, r) {
          if (!t) return !1;
          let n;
          if (
            ((n = r
              ? r
                  .map((e) => {
                    const r = c.fromPublicKey(e, { compressed: !0 }).publicKey;
                    return t.find((e) => e.pubkey.equals(r));
                  })
                  .filter((e) => !!e)
              : t),
            n.length > e)
          )
            throw new Error("Too many signatures");
          return n.length === e;
        }
        function m(e) {
          return !!e.finalScriptSig || !!e.finalScriptWitness;
        }
        function S(e) {
          return (t) => {
            try {
              return (e({ output: t }), !0);
            } catch (r) {
              return !1;
            }
          };
        }
        const E = S(f.p2ms),
          T = S(f.p2pk),
          b = S(f.p2pkh),
          v = S(f.p2wpkh),
          k = S(f.p2wsh),
          I = S(f.p2sh);
        function P(e) {
          return (t) =>
            !!t.masterFingerprint.equals(e.fingerprint) &&
            !!e.derivePath(t.path).publicKey.equals(t.pubkey);
        }
        function O(e) {
          if (
            "number" !== typeof e ||
            e !== Math.floor(e) ||
            e > 4294967295 ||
            e < 0
          )
            throw new Error("Invalid 32 bit integer");
        }
        function A(e, t, r) {
          const n = t.__FEE_RATE || e.getFeeRate(),
            i = t.__EXTRACTED_TX.virtualSize(),
            s = n * i;
          if (n >= r.maximumFeeRate)
            throw new Error(
              `Warning: You are paying around ${(s / 1e8).toFixed(8)} in fees, which is ${n} satoshi per byte for a transaction with a VSize of ${i} bytes (segwit counted as 0.25 byte per byte). Use setMaximumFeeRate method to raise your threshold, or pass true to the first arg of extractTransaction.`,
            );
        }
        function N(e, t) {
          e.forEach((e) => {
            let r = !1,
              n = [];
            if (0 === (e.partialSig || []).length) {
              if (!e.finalScriptSig && !e.finalScriptWitness) return;
              n = G(e);
            } else n = e.partialSig;
            if (
              (n.forEach((e) => {
                const { hashType: n } = h.signature.decode(e.signature),
                  i = [],
                  s = n & l.Transaction.SIGHASH_ANYONECANPAY;
                s && i.push("addInput");
                const o = 31 & n;
                switch (o) {
                  case l.Transaction.SIGHASH_ALL:
                    break;
                  case l.Transaction.SIGHASH_SINGLE:
                  case l.Transaction.SIGHASH_NONE:
                    (i.push("addOutput"), i.push("setInputSequence"));
                    break;
                }
                -1 === i.indexOf(t) && (r = !0);
              }),
              r)
            )
              throw new Error("Can not modify transaction, signatures exist.");
          });
        }
        function U(e) {
          if (!e.sighashType || !e.partialSig) return;
          const { partialSig: t, sighashType: r } = e;
          t.forEach((e) => {
            const { hashType: t } = h.signature.decode(e.signature);
            if (r !== t)
              throw new Error(
                "Signature sighash does not match input sighash type",
              );
          });
        }
        function B(e, t, r) {
          if (!pe(e, t))
            throw new Error(
              `Can not ${r} for this input with the key ${e.toString("hex")}`,
            );
        }
        function H(e) {
          const t = e.ins.every(
            (e) =>
              e.script &&
              0 === e.script.length &&
              e.witness &&
              0 === e.witness.length,
          );
          if (!t)
            throw new Error(
              "Format Error: Transaction ScriptSigs are not empty",
            );
        }
        function x(e, t) {
          e.ins.forEach((e) => {
            C(t, e);
          });
        }
        function C(t, r) {
          const n =
            u.reverseBuffer(e.from(r.hash)).toString("hex") + ":" + r.index;
          if (t.__TX_IN_CACHE[n]) throw new Error("Duplicate input detected.");
          t.__TX_IN_CACHE[n] = 1;
        }
        function R(e, t) {
          return (r, n, i, s) => {
            const o = e({ redeem: { output: i } }).output;
            if (!n.equals(o))
              throw new Error(
                `${t} for ${s} #${r} doesn't match the scriptPubKey in the prevout`,
              );
          };
        }
        const K = R(f.p2sh, "Redeem script"),
          L = R(f.p2wsh, "Witness script");
        function D(e, t, r, n) {
          if (!r.every(m))
            throw new Error("PSBT must be finalized to calculate " + t);
          if ("__FEE_RATE" === e && n.__FEE_RATE) return n.__FEE_RATE;
          if ("__FEE" === e && n.__FEE) return n.__FEE;
          let i,
            s = !0;
          return (
            n.__EXTRACTED_TX
              ? ((i = n.__EXTRACTED_TX), (s = !1))
              : (i = n.__TX.clone()),
            Z(r, i, n, s),
            "__FEE_RATE" === e ? n.__FEE_RATE : "__FEE" === e ? n.__FEE : void 0
          );
        }
        function M(e, t, r, n, i, s) {
          const o = fe(r);
          if (!w(t, r, o)) throw new Error("Can not finalize input #" + e);
          return V(r, o, t.partialSig, n, i, s);
        }
        function V(e, t, r, n, i, s) {
          let o, u;
          const a = j(e, t, r),
            c = s ? f.p2wsh({ redeem: a }) : null,
            p = i ? f.p2sh({ redeem: c || a }) : null;
          return (
            n
              ? ((u = z(c ? c.witness : a.witness)), p && (o = p.input))
              : (o = p ? p.input : a.input),
            { finalScriptSig: o, finalScriptWitness: u }
          );
        }
        function W(e, t, r, n, i) {
          const o = s.checkForInput(e, t),
            { hash: u, sighashType: a, script: c } = F(t, o, n, !1, i);
          return (B(r, c, "sign"), { hash: u, sighashType: a });
        }
        function F(e, t, r, n, i) {
          const s = r.__TX,
            o = t.sighashType || l.Transaction.SIGHASH_ALL;
          if (i && i.indexOf(o) < 0) {
            const e = J(o);
            throw new Error(
              "Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: " +
                e,
            );
          }
          let u, a;
          if (t.nonWitnessUtxo) {
            const n = ee(r, t, e),
              i = s.ins[e].hash,
              o = n.getHash();
            if (!i.equals(o))
              throw new Error(
                `Non-witness UTXO hash for input #${e} doesn't match the hash specified in the prevout`,
              );
            const u = s.ins[e].index;
            a = n.outs[u];
          } else {
            if (!t.witnessUtxo)
              throw new Error("Need a Utxo input item for signing");
            a = t.witnessUtxo;
          }
          const { meaningfulScript: c, type: p } = ae(
            a.script,
            e,
            "input",
            t.redeemScript,
            t.witnessScript,
          );
          if (["p2sh-p2wsh", "p2wsh"].indexOf(p) >= 0)
            u = s.hashForWitnessV0(e, c, a.value, o);
          else if (v(c)) {
            const t = f.p2pkh({ hash: c.slice(2) }).output;
            u = s.hashForWitnessV0(e, t, a.value, o);
          } else {
            if (void 0 === t.nonWitnessUtxo && !1 === r.__UNSAFE_SIGN_NONSEGWIT)
              throw new Error(
                `Input #${e} has witnessUtxo but non-segwit script: ` +
                  c.toString("hex"),
              );
            (n ||
              !1 === r.__UNSAFE_SIGN_NONSEGWIT ||
              console.warn(
                "Warning: Signing non-segwit inputs without the full parent transaction means there is a chance that a miner could feed you incorrect information to trick you into paying large fees. This behavior is the same as the old TransactionBuilder class when signing non-segwit scripts. You are not able to export this Psbt with toBuffer|toBase64|toHex since it is not BIP174 compliant.\n*********************\nPROCEED WITH CAUTION!\n*********************",
              ),
              (u = s.hashForSignature(e, c, o)));
          }
          return { script: c, sighashType: o, hash: u };
        }
        function j(e, t, r) {
          let n;
          switch (t) {
            case "multisig":
              const t = Y(e, r);
              n = f.p2ms({ output: e, signatures: t });
              break;
            case "pubkey":
              n = f.p2pk({ output: e, signature: r[0].signature });
              break;
            case "pubkeyhash":
              n = f.p2pkh({
                output: e,
                pubkey: r[0].pubkey,
                signature: r[0].signature,
              });
              break;
            case "witnesspubkeyhash":
              n = f.p2wpkh({
                output: e,
                pubkey: r[0].pubkey,
                signature: r[0].signature,
              });
              break;
          }
          return n;
        }
        function G(t) {
          const r = (t.finalScriptSig && h.decompile(t.finalScriptSig)) || [],
            n =
              (t.finalScriptWitness && h.decompile(t.finalScriptWitness)) || [];
          return r
            .concat(n)
            .filter((t) => e.isBuffer(t) && h.isCanonicalScriptSignature(t))
            .map((e) => ({ signature: e }));
        }
        function q(e, t, r) {
          const n = r.__TX,
            i = { script: null, isSegwit: !1, isP2SH: !1, isP2WSH: !1 };
          if (
            ((i.isP2SH = !!t.redeemScript),
            (i.isP2WSH = !!t.witnessScript),
            t.witnessScript)
          )
            i.script = t.witnessScript;
          else if (t.redeemScript) i.script = t.redeemScript;
          else if (t.nonWitnessUtxo) {
            const s = ee(r, t, e),
              o = n.ins[e].index;
            i.script = s.outs[o].script;
          } else t.witnessUtxo && (i.script = t.witnessUtxo.script);
          return ((t.witnessScript || v(i.script)) && (i.isSegwit = !0), i);
        }
        function X(e, t, r) {
          const n = s.checkForInput(t, e);
          if (!n.bip32Derivation || 0 === n.bip32Derivation.length)
            throw new Error("Need bip32Derivation to sign with HD");
          const i = n.bip32Derivation
            .map((e) =>
              e.masterFingerprint.equals(r.fingerprint) ? e : void 0,
            )
            .filter((e) => !!e);
          if (0 === i.length)
            throw new Error(
              "Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint",
            );
          const o = i.map((e) => {
            const t = r.derivePath(e.path);
            if (!e.pubkey.equals(t.publicKey))
              throw new Error("pubkey did not match bip32Derivation");
            return t;
          });
          return o;
        }
        function Y(e, t) {
          const r = f.p2ms({ output: e });
          return r.pubkeys
            .map(
              (e) => (t.filter((t) => t.pubkey.equals(e))[0] || {}).signature,
            )
            .filter((e) => !!e);
        }
        function $(e) {
          let t = 0;
          function r(r) {
            return ((t += r), e.slice(t - r, t));
          }
          function n() {
            const r = i.decode(e, t);
            return ((t += i.decode.bytes), r);
          }
          function s() {
            return r(n());
          }
          function o() {
            const e = n(),
              t = [];
            for (let r = 0; r < e; r++) t.push(s());
            return t;
          }
          return o();
        }
        function J(e) {
          let t =
            e & l.Transaction.SIGHASH_ANYONECANPAY
              ? "SIGHASH_ANYONECANPAY | "
              : "";
          const r = 31 & e;
          switch (r) {
            case l.Transaction.SIGHASH_ALL:
              t += "SIGHASH_ALL";
              break;
            case l.Transaction.SIGHASH_SINGLE:
              t += "SIGHASH_SINGLE";
              break;
            case l.Transaction.SIGHASH_NONE:
              t += "SIGHASH_NONE";
              break;
          }
          return t;
        }
        function z(t) {
          let r = e.allocUnsafe(0);
          function n(t) {
            r = e.concat([r, e.from(t)]);
          }
          function s(t) {
            const n = r.length,
              s = i.encodingLength(t);
            ((r = e.concat([r, e.allocUnsafe(s)])), i.encode(t, r, n));
          }
          function o(e) {
            (s(e.length), n(e));
          }
          function u(e) {
            (s(e.length), e.forEach(o));
          }
          return (u(t), r);
        }
        function Q(e, t, r) {
          e.__NON_WITNESS_UTXO_BUF_CACHE[r] = t.nonWitnessUtxo;
          const n = l.Transaction.fromBuffer(t.nonWitnessUtxo);
          e.__NON_WITNESS_UTXO_TX_CACHE[r] = n;
          const i = e,
            s = r;
          (delete t.nonWitnessUtxo,
            Object.defineProperty(t, "nonWitnessUtxo", {
              enumerable: !0,
              get() {
                const e = i.__NON_WITNESS_UTXO_BUF_CACHE[s],
                  t = i.__NON_WITNESS_UTXO_TX_CACHE[s];
                if (void 0 !== e) return e;
                {
                  const e = t.toBuffer();
                  return ((i.__NON_WITNESS_UTXO_BUF_CACHE[s] = e), e);
                }
              },
              set(e) {
                i.__NON_WITNESS_UTXO_BUF_CACHE[s] = e;
              },
            }));
        }
        function Z(e, t, r, n) {
          let i = 0;
          e.forEach((e, s) => {
            if (
              (n && e.finalScriptSig && (t.ins[s].script = e.finalScriptSig),
              n &&
                e.finalScriptWitness &&
                (t.ins[s].witness = $(e.finalScriptWitness)),
              e.witnessUtxo)
            )
              i += e.witnessUtxo.value;
            else if (e.nonWitnessUtxo) {
              const n = ee(r, e, s),
                o = t.ins[s].index,
                u = n.outs[o];
              i += u.value;
            }
          });
          const s = t.outs.reduce((e, t) => e + t.value, 0),
            o = i - s;
          if (o < 0) throw new Error("Outputs are spending more than Inputs");
          const u = t.virtualSize();
          ((r.__FEE = o),
            (r.__EXTRACTED_TX = t),
            (r.__FEE_RATE = Math.floor(o / u)));
        }
        function ee(e, t, r) {
          const n = e.__NON_WITNESS_UTXO_TX_CACHE;
          return (n[r] || Q(e, t, r), n[r]);
        }
        function te(e, t, r) {
          if (void 0 !== t.witnessUtxo) return t.witnessUtxo.script;
          if (void 0 !== t.nonWitnessUtxo) {
            const n = ee(r, t, e);
            return n.outs[r.__TX.ins[e].index].script;
          }
          throw new Error("Can't find pubkey in input without Utxo data");
        }
        function re(e, t, r, n) {
          const i = te(r, t, n),
            { meaningfulScript: s } = ae(
              i,
              r,
              "input",
              t.redeemScript,
              t.witnessScript,
            );
          return pe(e, s);
        }
        function ne(e, t, r, n) {
          const i = n.__TX.outs[r].script,
            { meaningfulScript: s } = ae(
              i,
              r,
              "output",
              t.redeemScript,
              t.witnessScript,
            );
          return pe(e, s);
        }
        function ie(t) {
          if (!t) return;
          const r = h.decompile(t);
          if (!r) return;
          const n = r[r.length - 1];
          if (!e.isBuffer(n) || oe(n) || ue(n)) return;
          const i = h.decompile(n);
          return i ? n : void 0;
        }
        function se(e) {
          if (!e) return;
          const t = $(e),
            r = t[t.length - 1];
          if (oe(r)) return;
          const n = h.decompile(r);
          return n ? r : void 0;
        }
        function oe(e) {
          return 33 === e.length && h.isCanonicalPubKey(e);
        }
        function ue(e) {
          return h.isCanonicalScriptSignature(e);
        }
        function ae(e, t, r, n, i) {
          const s = I(e),
            o = s && n && k(n),
            u = k(e);
          if (s && void 0 === n)
            throw new Error("scriptPubkey is P2SH but redeemScript missing");
          if ((u || o) && void 0 === i)
            throw new Error(
              "scriptPubkey or redeemScript is P2WSH but witnessScript missing",
            );
          let a;
          return (
            o
              ? ((a = i), K(t, e, n, r), L(t, n, i, r), ce(a))
              : u
                ? ((a = i), L(t, e, i, r), ce(a))
                : s
                  ? ((a = n), K(t, e, n, r))
                  : (a = e),
            {
              meaningfulScript: a,
              type: o ? "p2sh-p2wsh" : s ? "p2sh" : u ? "p2wsh" : "raw",
            }
          );
        }
        function ce(e) {
          if (v(e) || I(e))
            throw new Error("P2WPKH or P2SH can not be contained within P2WSH");
        }
        function pe(e, t) {
          const r = a.hash160(e),
            n = h.decompile(t);
          if (null === n) throw new Error("Unknown script error");
          return n.some(
            (t) => "number" !== typeof t && (t.equals(e) || t.equals(r)),
          );
        }
        function fe(e) {
          return v(e)
            ? "witnesspubkeyhash"
            : b(e)
              ? "pubkeyhash"
              : E(e)
                ? "multisig"
                : T(e)
                  ? "pubkey"
                  : "nonstandard";
        }
        function he(e) {
          return [...Array(e).keys()];
        }
      }).call(this, r(2).Buffer);
    },
    3707: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(3708),
          i = r(3307),
          s = r(2775),
          o = r(3309);
        class Psbt {
          constructor(e) {
            ((this.inputs = []),
              (this.outputs = []),
              (this.globalMap = { unsignedTx: e }));
          }
          static fromBase64(t, r) {
            const n = e.from(t, "base64");
            return this.fromBuffer(n, r);
          }
          static fromHex(t, r) {
            const n = e.from(t, "hex");
            return this.fromBuffer(n, r);
          }
          static fromBuffer(e, t) {
            const r = i.psbtFromBuffer(e, t),
              n = new this(r.globalMap.unsignedTx);
            return (Object.assign(n, r), n);
          }
          toBase64() {
            const e = this.toBuffer();
            return e.toString("base64");
          }
          toHex() {
            const e = this.toBuffer();
            return e.toString("hex");
          }
          toBuffer() {
            return i.psbtToBuffer(this);
          }
          updateGlobal(e) {
            return (o.updateGlobal(e, this.globalMap), this);
          }
          updateInput(e, t) {
            const r = o.checkForInput(this.inputs, e);
            return (o.updateInput(t, r), this);
          }
          updateOutput(e, t) {
            const r = o.checkForOutput(this.outputs, e);
            return (o.updateOutput(t, r), this);
          }
          addUnknownKeyValToGlobal(e) {
            return (
              o.checkHasKey(
                e,
                this.globalMap.unknownKeyVals,
                o.getEnumLength(s.GlobalTypes),
              ),
              this.globalMap.unknownKeyVals ||
                (this.globalMap.unknownKeyVals = []),
              this.globalMap.unknownKeyVals.push(e),
              this
            );
          }
          addUnknownKeyValToInput(e, t) {
            const r = o.checkForInput(this.inputs, e);
            return (
              o.checkHasKey(t, r.unknownKeyVals, o.getEnumLength(s.InputTypes)),
              r.unknownKeyVals || (r.unknownKeyVals = []),
              r.unknownKeyVals.push(t),
              this
            );
          }
          addUnknownKeyValToOutput(e, t) {
            const r = o.checkForOutput(this.outputs, e);
            return (
              o.checkHasKey(
                t,
                r.unknownKeyVals,
                o.getEnumLength(s.OutputTypes),
              ),
              r.unknownKeyVals || (r.unknownKeyVals = []),
              r.unknownKeyVals.push(t),
              this
            );
          }
          addInput(e) {
            (this.globalMap.unsignedTx.addInput(e),
              this.inputs.push({ unknownKeyVals: [] }));
            const t = e.unknownKeyVals || [],
              r = this.inputs.length - 1;
            if (!Array.isArray(t))
              throw new Error("unknownKeyVals must be an Array");
            return (
              t.forEach((e) => this.addUnknownKeyValToInput(r, e)),
              o.addInputAttributes(this.inputs, e),
              this
            );
          }
          addOutput(e) {
            (this.globalMap.unsignedTx.addOutput(e),
              this.outputs.push({ unknownKeyVals: [] }));
            const t = e.unknownKeyVals || [],
              r = this.outputs.length - 1;
            if (!Array.isArray(t))
              throw new Error("unknownKeyVals must be an Array");
            return (
              t.forEach((e) => this.addUnknownKeyValToOutput(r, e)),
              o.addOutputAttributes(this.outputs, e),
              this
            );
          }
          clearFinalizedInput(e) {
            const t = o.checkForInput(this.inputs, e);
            o.inputCheckUncleanFinalized(e, t);
            for (const r of Object.keys(t))
              [
                "witnessUtxo",
                "nonWitnessUtxo",
                "finalScriptSig",
                "finalScriptWitness",
                "unknownKeyVals",
              ].includes(r) || delete t[r];
            return this;
          }
          combine() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
              t[r] = arguments[r];
            const i = n.combine([this].concat(t));
            return (Object.assign(this, i), this);
          }
          getTransaction() {
            return this.globalMap.unsignedTx.toBuffer();
          }
        }
        t.Psbt = Psbt;
      }).call(this, r(2).Buffer);
    },
    3708: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3307);
      function i(e) {
        const t = e[0],
          r = n.psbtToKeyVals(t),
          i = e.slice(1);
        if (0 === i.length) throw new Error("Combine: Nothing to combine");
        const a = o(t);
        if (void 0 === a) throw new Error("Combine: Self missing transaction");
        const c = u(r.globalKeyVals),
          p = r.inputKeyVals.map(u),
          f = r.outputKeyVals.map(u);
        for (const h of i) {
          const e = o(h);
          if (void 0 === e || !e.toBuffer().equals(a.toBuffer()))
            throw new Error(
              "Combine: One of the Psbts does not have the same transaction.",
            );
          const t = n.psbtToKeyVals(h),
            i = u(t.globalKeyVals);
          i.forEach(s(c, r.globalKeyVals, t.globalKeyVals));
          const l = t.inputKeyVals.map(u);
          l.forEach((e, n) =>
            e.forEach(s(p[n], r.inputKeyVals[n], t.inputKeyVals[n])),
          );
          const d = t.outputKeyVals.map(u);
          d.forEach((e, n) =>
            e.forEach(s(f[n], r.outputKeyVals[n], t.outputKeyVals[n])),
          );
        }
        return n.psbtFromKeyVals(a, {
          globalMapKeyVals: r.globalKeyVals,
          inputKeyVals: r.inputKeyVals,
          outputKeyVals: r.outputKeyVals,
        });
      }
      function s(e, t, r) {
        return (n) => {
          if (e.has(n)) return;
          const i = r.filter((e) => e.key.toString("hex") === n)[0];
          (t.push(i), e.add(n));
        };
      }
      function o(e) {
        return e.globalMap.unsignedTx;
      }
      function u(e) {
        const t = new Set();
        return (
          e.forEach((e) => {
            const r = e.key.toString("hex");
            if (t.has(r))
              throw new Error("Combine: KeyValue Map keys should be unique");
            t.add(r);
          }),
          t
        );
      }
      t.combine = i;
    },
    3709: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(3111),
          i = r(3112),
          s = r(2918),
          o = r(2775);
        function u(e, t) {
          let r = 0;
          function n() {
            const t = s.decode(e, r);
            r += s.encodingLength(t);
            const n = e.slice(r, r + t);
            return ((r += t), n);
          }
          function u() {
            const t = e.readUInt32BE(r);
            return ((r += 4), t);
          }
          function a() {
            const t = e.readUInt8(r);
            return ((r += 1), t);
          }
          function p() {
            const e = n(),
              t = n();
            return { key: e, value: t };
          }
          function f() {
            if (r >= e.length)
              throw new Error("Format Error: Unexpected End of PSBT");
            const t = 0 === e.readUInt8(r);
            return (t && r++, t);
          }
          if (1886610036 !== u())
            throw new Error("Format Error: Invalid Magic Number");
          if (255 !== a())
            throw new Error(
              "Format Error: Magic Number must be followed by 0xff separator",
            );
          const h = [],
            l = {};
          while (!f()) {
            const e = p(),
              t = e.key.toString("hex");
            if (l[t])
              throw new Error(
                "Format Error: Keys must be unique for global keymap: key " + t,
              );
            ((l[t] = 1), h.push(e));
          }
          const d = h.filter((e) => e.key[0] === o.GlobalTypes.UNSIGNED_TX);
          if (1 !== d.length)
            throw new Error("Format Error: Only one UNSIGNED_TX allowed");
          const y = t(d[0].value),
            { inputCount: w, outputCount: g } = y.getInputOutputCounts(),
            _ = [],
            m = [];
          for (const s of i.range(w)) {
            const e = {},
              t = [];
            while (!f()) {
              const r = p(),
                n = r.key.toString("hex");
              if (e[n])
                throw new Error(
                  "Format Error: Keys must be unique for each input: input index " +
                    s +
                    " key " +
                    n,
                );
              ((e[n] = 1), t.push(r));
            }
            _.push(t);
          }
          for (const s of i.range(g)) {
            const e = {},
              t = [];
            while (!f()) {
              const r = p(),
                n = r.key.toString("hex");
              if (e[n])
                throw new Error(
                  "Format Error: Keys must be unique for each output: output index " +
                    s +
                    " key " +
                    n,
                );
              ((e[n] = 1), t.push(r));
            }
            m.push(t);
          }
          return c(y, {
            globalMapKeyVals: h,
            inputKeyVals: _,
            outputKeyVals: m,
          });
        }
        function a(t, r, n) {
          if (!r.equals(e.from([n])))
            throw new Error(
              `Format Error: Invalid ${t} key: ${r.toString("hex")}`,
            );
        }
        function c(e, t) {
          let { globalMapKeyVals: r, inputKeyVals: s, outputKeyVals: u } = t;
          const c = { unsignedTx: e };
          let p = 0;
          for (const i of r)
            switch (i.key[0]) {
              case o.GlobalTypes.UNSIGNED_TX:
                if ((a("global", i.key, o.GlobalTypes.UNSIGNED_TX), p > 0))
                  throw new Error(
                    "Format Error: GlobalMap has multiple UNSIGNED_TX",
                  );
                p++;
                break;
              case o.GlobalTypes.GLOBAL_XPUB:
                (void 0 === c.globalXpub && (c.globalXpub = []),
                  c.globalXpub.push(n.globals.globalXpub.decode(i)));
                break;
              default:
                (c.unknownKeyVals || (c.unknownKeyVals = []),
                  c.unknownKeyVals.push(i));
            }
          const f = s.length,
            h = u.length,
            l = [],
            d = [];
          for (const y of i.range(f)) {
            const e = {};
            for (const t of s[y])
              switch ((n.inputs.checkPubkey(t), t.key[0])) {
                case o.InputTypes.NON_WITNESS_UTXO:
                  if (
                    (a("input", t.key, o.InputTypes.NON_WITNESS_UTXO),
                    void 0 !== e.nonWitnessUtxo)
                  )
                    throw new Error(
                      "Format Error: Input has multiple NON_WITNESS_UTXO",
                    );
                  e.nonWitnessUtxo = n.inputs.nonWitnessUtxo.decode(t);
                  break;
                case o.InputTypes.WITNESS_UTXO:
                  if (
                    (a("input", t.key, o.InputTypes.WITNESS_UTXO),
                    void 0 !== e.witnessUtxo)
                  )
                    throw new Error(
                      "Format Error: Input has multiple WITNESS_UTXO",
                    );
                  e.witnessUtxo = n.inputs.witnessUtxo.decode(t);
                  break;
                case o.InputTypes.PARTIAL_SIG:
                  (void 0 === e.partialSig && (e.partialSig = []),
                    e.partialSig.push(n.inputs.partialSig.decode(t)));
                  break;
                case o.InputTypes.SIGHASH_TYPE:
                  if (
                    (a("input", t.key, o.InputTypes.SIGHASH_TYPE),
                    void 0 !== e.sighashType)
                  )
                    throw new Error(
                      "Format Error: Input has multiple SIGHASH_TYPE",
                    );
                  e.sighashType = n.inputs.sighashType.decode(t);
                  break;
                case o.InputTypes.REDEEM_SCRIPT:
                  if (
                    (a("input", t.key, o.InputTypes.REDEEM_SCRIPT),
                    void 0 !== e.redeemScript)
                  )
                    throw new Error(
                      "Format Error: Input has multiple REDEEM_SCRIPT",
                    );
                  e.redeemScript = n.inputs.redeemScript.decode(t);
                  break;
                case o.InputTypes.WITNESS_SCRIPT:
                  if (
                    (a("input", t.key, o.InputTypes.WITNESS_SCRIPT),
                    void 0 !== e.witnessScript)
                  )
                    throw new Error(
                      "Format Error: Input has multiple WITNESS_SCRIPT",
                    );
                  e.witnessScript = n.inputs.witnessScript.decode(t);
                  break;
                case o.InputTypes.BIP32_DERIVATION:
                  (void 0 === e.bip32Derivation && (e.bip32Derivation = []),
                    e.bip32Derivation.push(n.inputs.bip32Derivation.decode(t)));
                  break;
                case o.InputTypes.FINAL_SCRIPTSIG:
                  (a("input", t.key, o.InputTypes.FINAL_SCRIPTSIG),
                    (e.finalScriptSig = n.inputs.finalScriptSig.decode(t)));
                  break;
                case o.InputTypes.FINAL_SCRIPTWITNESS:
                  (a("input", t.key, o.InputTypes.FINAL_SCRIPTWITNESS),
                    (e.finalScriptWitness =
                      n.inputs.finalScriptWitness.decode(t)));
                  break;
                case o.InputTypes.POR_COMMITMENT:
                  (a("input", t.key, o.InputTypes.POR_COMMITMENT),
                    (e.porCommitment = n.inputs.porCommitment.decode(t)));
                  break;
                case o.InputTypes.TAP_KEY_SIG:
                  (a("input", t.key, o.InputTypes.TAP_KEY_SIG),
                    (e.tapKeySig = n.inputs.tapKeySig.decode(t)));
                  break;
                case o.InputTypes.TAP_SCRIPT_SIG:
                  (void 0 === e.tapScriptSig && (e.tapScriptSig = []),
                    e.tapScriptSig.push(n.inputs.tapScriptSig.decode(t)));
                  break;
                case o.InputTypes.TAP_LEAF_SCRIPT:
                  (void 0 === e.tapLeafScript && (e.tapLeafScript = []),
                    e.tapLeafScript.push(n.inputs.tapLeafScript.decode(t)));
                  break;
                case o.InputTypes.TAP_BIP32_DERIVATION:
                  (void 0 === e.tapBip32Derivation &&
                    (e.tapBip32Derivation = []),
                    e.tapBip32Derivation.push(
                      n.inputs.tapBip32Derivation.decode(t),
                    ));
                  break;
                case o.InputTypes.TAP_INTERNAL_KEY:
                  (a("input", t.key, o.InputTypes.TAP_INTERNAL_KEY),
                    (e.tapInternalKey = n.inputs.tapInternalKey.decode(t)));
                  break;
                case o.InputTypes.TAP_MERKLE_ROOT:
                  (a("input", t.key, o.InputTypes.TAP_MERKLE_ROOT),
                    (e.tapMerkleRoot = n.inputs.tapMerkleRoot.decode(t)));
                  break;
                default:
                  (e.unknownKeyVals || (e.unknownKeyVals = []),
                    e.unknownKeyVals.push(t));
              }
            l.push(e);
          }
          for (const y of i.range(h)) {
            const e = {};
            for (const t of u[y])
              switch ((n.outputs.checkPubkey(t), t.key[0])) {
                case o.OutputTypes.REDEEM_SCRIPT:
                  if (
                    (a("output", t.key, o.OutputTypes.REDEEM_SCRIPT),
                    void 0 !== e.redeemScript)
                  )
                    throw new Error(
                      "Format Error: Output has multiple REDEEM_SCRIPT",
                    );
                  e.redeemScript = n.outputs.redeemScript.decode(t);
                  break;
                case o.OutputTypes.WITNESS_SCRIPT:
                  if (
                    (a("output", t.key, o.OutputTypes.WITNESS_SCRIPT),
                    void 0 !== e.witnessScript)
                  )
                    throw new Error(
                      "Format Error: Output has multiple WITNESS_SCRIPT",
                    );
                  e.witnessScript = n.outputs.witnessScript.decode(t);
                  break;
                case o.OutputTypes.BIP32_DERIVATION:
                  (void 0 === e.bip32Derivation && (e.bip32Derivation = []),
                    e.bip32Derivation.push(
                      n.outputs.bip32Derivation.decode(t),
                    ));
                  break;
                case o.OutputTypes.TAP_INTERNAL_KEY:
                  (a("output", t.key, o.OutputTypes.TAP_INTERNAL_KEY),
                    (e.tapInternalKey = n.outputs.tapInternalKey.decode(t)));
                  break;
                case o.OutputTypes.TAP_TREE:
                  (a("output", t.key, o.OutputTypes.TAP_TREE),
                    (e.tapTree = n.outputs.tapTree.decode(t)));
                  break;
                case o.OutputTypes.TAP_BIP32_DERIVATION:
                  (void 0 === e.tapBip32Derivation &&
                    (e.tapBip32Derivation = []),
                    e.tapBip32Derivation.push(
                      n.outputs.tapBip32Derivation.decode(t),
                    ));
                  break;
                default:
                  (e.unknownKeyVals || (e.unknownKeyVals = []),
                    e.unknownKeyVals.push(t));
              }
            d.push(e);
          }
          return { globalMap: c, inputs: l, outputs: d };
        }
        ((t.psbtFromBuffer = u),
          (t.checkKeyBuffer = a),
          (t.psbtFromKeyVals = c));
      }).call(this, r(2).Buffer);
    },
    3710: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775),
          i = (e) => [...Array(e).keys()];
        function s(e) {
          if (e.key[0] !== n.GlobalTypes.GLOBAL_XPUB)
            throw new Error(
              "Decode Error: could not decode globalXpub with key 0x" +
                e.key.toString("hex"),
            );
          if (79 !== e.key.length || ![2, 3].includes(e.key[46]))
            throw new Error(
              "Decode Error: globalXpub has invalid extended pubkey in key 0x" +
                e.key.toString("hex"),
            );
          if ((e.value.length / 4) % 1 !== 0)
            throw new Error(
              "Decode Error: Global GLOBAL_XPUB value length should be multiple of 4",
            );
          const t = e.key.slice(1),
            r = {
              masterFingerprint: e.value.slice(0, 4),
              extendedPubkey: t,
              path: "m",
            };
          for (const n of i(e.value.length / 4 - 1)) {
            const t = e.value.readUInt32LE(4 * n + 4),
              i = !!(2147483648 & t),
              s = 2147483647 & t;
            r.path += "/" + s.toString(10) + (i ? "'" : "");
          }
          return r;
        }
        function o(t) {
          const r = e.from([n.GlobalTypes.GLOBAL_XPUB]),
            i = e.concat([r, t.extendedPubkey]),
            s = t.path.split("/"),
            o = e.allocUnsafe(4 * s.length);
          t.masterFingerprint.copy(o, 0);
          let u = 4;
          return (
            s.slice(1).forEach((e) => {
              const t = "'" === e.slice(-1);
              let r = 2147483647 & parseInt(t ? e.slice(0, -1) : e, 10);
              (t && (r += 2147483648), o.writeUInt32LE(r, u), (u += 4));
            }),
            { key: i, value: o }
          );
        }
        function u(t) {
          const r = t.extendedPubkey,
            n = t.masterFingerprint,
            i = t.path;
          return (
            e.isBuffer(r) &&
            78 === r.length &&
            [2, 3].indexOf(r[45]) > -1 &&
            e.isBuffer(n) &&
            4 === n.length &&
            "string" === typeof i &&
            !!i.match(/^m(\/\d+'?)*$/)
          );
        }
        function a(e, t, r) {
          const n = t.extendedPubkey.toString("hex");
          return (
            !r.has(n) &&
            (r.add(n),
            0 ===
              e.filter((e) => e.extendedPubkey.equals(t.extendedPubkey)).length)
          );
        }
        ((t.decode = s),
          (t.encode = o),
          (t.expected =
            "{ masterFingerprint: Buffer; extendedPubkey: Buffer; path: string; }"),
          (t.check = u),
          (t.canAddToArray = a));
      }).call(this, r(2).Buffer);
    },
    3711: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775);
        function i(t) {
          return {
            key: e.from([n.GlobalTypes.UNSIGNED_TX]),
            value: t.toBuffer(),
          };
        }
        t.encode = i;
      }).call(this, r(2).Buffer);
    },
    3712: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775);
        function i(e) {
          if (e.key[0] !== n.InputTypes.FINAL_SCRIPTSIG)
            throw new Error(
              "Decode Error: could not decode finalScriptSig with key 0x" +
                e.key.toString("hex"),
            );
          return e.value;
        }
        function s(t) {
          const r = e.from([n.InputTypes.FINAL_SCRIPTSIG]);
          return { key: r, value: t };
        }
        function o(t) {
          return e.isBuffer(t);
        }
        function u(e, t) {
          return !!e && !!t && void 0 === e.finalScriptSig;
        }
        ((t.decode = i),
          (t.encode = s),
          (t.expected = "Buffer"),
          (t.check = o),
          (t.canAdd = u));
      }).call(this, r(2).Buffer);
    },
    3713: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775);
        function i(e) {
          if (e.key[0] !== n.InputTypes.FINAL_SCRIPTWITNESS)
            throw new Error(
              "Decode Error: could not decode finalScriptWitness with key 0x" +
                e.key.toString("hex"),
            );
          return e.value;
        }
        function s(t) {
          const r = e.from([n.InputTypes.FINAL_SCRIPTWITNESS]);
          return { key: r, value: t };
        }
        function o(t) {
          return e.isBuffer(t);
        }
        function u(e, t) {
          return !!e && !!t && void 0 === e.finalScriptWitness;
        }
        ((t.decode = i),
          (t.encode = s),
          (t.expected = "Buffer"),
          (t.check = o),
          (t.canAdd = u));
      }).call(this, r(2).Buffer);
    },
    3714: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775);
        function i(e) {
          if (e.key[0] !== n.InputTypes.NON_WITNESS_UTXO)
            throw new Error(
              "Decode Error: could not decode nonWitnessUtxo with key 0x" +
                e.key.toString("hex"),
            );
          return e.value;
        }
        function s(t) {
          return { key: e.from([n.InputTypes.NON_WITNESS_UTXO]), value: t };
        }
        function o(t) {
          return e.isBuffer(t);
        }
        function u(e, t) {
          return !!e && !!t && void 0 === e.nonWitnessUtxo;
        }
        ((t.decode = i),
          (t.encode = s),
          (t.expected = "Buffer"),
          (t.check = o),
          (t.canAdd = u));
      }).call(this, r(2).Buffer);
    },
    3715: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775);
        function i(e) {
          if (e.key[0] !== n.InputTypes.PARTIAL_SIG)
            throw new Error(
              "Decode Error: could not decode partialSig with key 0x" +
                e.key.toString("hex"),
            );
          if (
            (34 !== e.key.length && 66 !== e.key.length) ||
            ![2, 3, 4].includes(e.key[1])
          )
            throw new Error(
              "Decode Error: partialSig has invalid pubkey in key 0x" +
                e.key.toString("hex"),
            );
          const t = e.key.slice(1);
          return { pubkey: t, signature: e.value };
        }
        function s(t) {
          const r = e.from([n.InputTypes.PARTIAL_SIG]);
          return { key: e.concat([r, t.pubkey]), value: t.signature };
        }
        function o(t) {
          return (
            e.isBuffer(t.pubkey) &&
            e.isBuffer(t.signature) &&
            [33, 65].includes(t.pubkey.length) &&
            [2, 3, 4].includes(t.pubkey[0]) &&
            u(t.signature)
          );
        }
        function u(t) {
          if (!e.isBuffer(t) || t.length < 9) return !1;
          if (48 !== t[0]) return !1;
          if (t.length !== t[1] + 3) return !1;
          if (2 !== t[2]) return !1;
          const r = t[3];
          if (r > 33 || r < 1) return !1;
          if (2 !== t[3 + r + 1]) return !1;
          const n = t[3 + r + 2];
          return !(n > 33 || n < 1) && t.length === 3 + r + 2 + n + 2;
        }
        function a(e, t, r) {
          const n = t.pubkey.toString("hex");
          return (
            !r.has(n) &&
            (r.add(n), 0 === e.filter((e) => e.pubkey.equals(t.pubkey)).length)
          );
        }
        ((t.decode = i),
          (t.encode = s),
          (t.expected = "{ pubkey: Buffer; signature: Buffer; }"),
          (t.check = o),
          (t.canAddToArray = a));
      }).call(this, r(2).Buffer);
    },
    3716: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775);
        function i(e) {
          if (e.key[0] !== n.InputTypes.POR_COMMITMENT)
            throw new Error(
              "Decode Error: could not decode porCommitment with key 0x" +
                e.key.toString("hex"),
            );
          return e.value.toString("utf8");
        }
        function s(t) {
          const r = e.from([n.InputTypes.POR_COMMITMENT]);
          return { key: r, value: e.from(t, "utf8") };
        }
        function o(e) {
          return "string" === typeof e;
        }
        function u(e, t) {
          return !!e && !!t && void 0 === e.porCommitment;
        }
        ((t.decode = i),
          (t.encode = s),
          (t.expected = "string"),
          (t.check = o),
          (t.canAdd = u));
      }).call(this, r(2).Buffer);
    },
    3717: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775);
        function i(e) {
          if (e.key[0] !== n.InputTypes.SIGHASH_TYPE)
            throw new Error(
              "Decode Error: could not decode sighashType with key 0x" +
                e.key.toString("hex"),
            );
          return e.value.readUInt32LE(0);
        }
        function s(t) {
          const r = e.from([n.InputTypes.SIGHASH_TYPE]),
            i = e.allocUnsafe(4);
          return (i.writeUInt32LE(t, 0), { key: r, value: i });
        }
        function o(e) {
          return "number" === typeof e;
        }
        function u(e, t) {
          return !!e && !!t && void 0 === e.sighashType;
        }
        ((t.decode = i),
          (t.encode = s),
          (t.expected = "number"),
          (t.check = o),
          (t.canAdd = u));
      }).call(this, r(2).Buffer);
    },
    3718: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775);
        function i(e) {
          if (e.key[0] !== n.InputTypes.TAP_KEY_SIG || 1 !== e.key.length)
            throw new Error(
              "Decode Error: could not decode tapKeySig with key 0x" +
                e.key.toString("hex"),
            );
          if (!o(e.value))
            throw new Error(
              "Decode Error: tapKeySig not a valid 64-65-byte BIP340 signature",
            );
          return e.value;
        }
        function s(t) {
          const r = e.from([n.InputTypes.TAP_KEY_SIG]);
          return { key: r, value: t };
        }
        function o(t) {
          return e.isBuffer(t) && (64 === t.length || 65 === t.length);
        }
        function u(e, t) {
          return !!e && !!t && void 0 === e.tapKeySig;
        }
        ((t.decode = i),
          (t.encode = s),
          (t.expected = "Buffer"),
          (t.check = o),
          (t.canAdd = u));
      }).call(this, r(2).Buffer);
    },
    3719: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775);
        function i(e) {
          if (e.key[0] !== n.InputTypes.TAP_LEAF_SCRIPT)
            throw new Error(
              "Decode Error: could not decode tapLeafScript with key 0x" +
                e.key.toString("hex"),
            );
          if ((e.key.length - 2) % 32 !== 0)
            throw new Error(
              "Decode Error: tapLeafScript has invalid control block in key 0x" +
                e.key.toString("hex"),
            );
          const t = e.value[e.value.length - 1];
          if ((254 & e.key[1]) !== t)
            throw new Error(
              "Decode Error: tapLeafScript bad leaf version in key 0x" +
                e.key.toString("hex"),
            );
          const r = e.value.slice(0, -1),
            i = e.key.slice(1);
          return { controlBlock: i, script: r, leafVersion: t };
        }
        function s(t) {
          const r = e.from([n.InputTypes.TAP_LEAF_SCRIPT]),
            i = e.from([t.leafVersion]);
          return {
            key: e.concat([r, t.controlBlock]),
            value: e.concat([t.script, i]),
          };
        }
        function o(t) {
          return (
            e.isBuffer(t.controlBlock) &&
            (t.controlBlock.length - 1) % 32 === 0 &&
            (254 & t.controlBlock[0]) === t.leafVersion &&
            e.isBuffer(t.script)
          );
        }
        function u(e, t, r) {
          const n = t.controlBlock.toString("hex");
          return (
            !r.has(n) &&
            (r.add(n),
            0 === e.filter((e) => e.controlBlock.equals(t.controlBlock)).length)
          );
        }
        ((t.decode = i),
          (t.encode = s),
          (t.expected =
            "{ controlBlock: Buffer; leafVersion: number, script: Buffer; }"),
          (t.check = o),
          (t.canAddToArray = u));
      }).call(this, r(2).Buffer);
    },
    3720: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775);
        function i(e) {
          if (e.key[0] !== n.InputTypes.TAP_MERKLE_ROOT || 1 !== e.key.length)
            throw new Error(
              "Decode Error: could not decode tapMerkleRoot with key 0x" +
                e.key.toString("hex"),
            );
          if (!o(e.value))
            throw new Error("Decode Error: tapMerkleRoot not a 32-byte hash");
          return e.value;
        }
        function s(t) {
          const r = e.from([n.InputTypes.TAP_MERKLE_ROOT]);
          return { key: r, value: t };
        }
        function o(t) {
          return e.isBuffer(t) && 32 === t.length;
        }
        function u(e, t) {
          return !!e && !!t && void 0 === e.tapMerkleRoot;
        }
        ((t.decode = i),
          (t.encode = s),
          (t.expected = "Buffer"),
          (t.check = o),
          (t.canAdd = u));
      }).call(this, r(2).Buffer);
    },
    3721: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775);
        function i(e) {
          if (e.key[0] !== n.InputTypes.TAP_SCRIPT_SIG)
            throw new Error(
              "Decode Error: could not decode tapScriptSig with key 0x" +
                e.key.toString("hex"),
            );
          if (65 !== e.key.length)
            throw new Error(
              "Decode Error: tapScriptSig has invalid key 0x" +
                e.key.toString("hex"),
            );
          if (64 !== e.value.length && 65 !== e.value.length)
            throw new Error(
              "Decode Error: tapScriptSig has invalid signature in key 0x" +
                e.key.toString("hex"),
            );
          const t = e.key.slice(1, 33),
            r = e.key.slice(33);
          return { pubkey: t, leafHash: r, signature: e.value };
        }
        function s(t) {
          const r = e.from([n.InputTypes.TAP_SCRIPT_SIG]);
          return {
            key: e.concat([r, t.pubkey, t.leafHash]),
            value: t.signature,
          };
        }
        function o(t) {
          return (
            e.isBuffer(t.pubkey) &&
            e.isBuffer(t.leafHash) &&
            e.isBuffer(t.signature) &&
            32 === t.pubkey.length &&
            32 === t.leafHash.length &&
            (64 === t.signature.length || 65 === t.signature.length)
          );
        }
        function u(e, t, r) {
          const n = t.pubkey.toString("hex") + t.leafHash.toString("hex");
          return (
            !r.has(n) &&
            (r.add(n),
            0 ===
              e.filter(
                (e) =>
                  e.pubkey.equals(t.pubkey) && e.leafHash.equals(t.leafHash),
              ).length)
          );
        }
        ((t.decode = i),
          (t.encode = s),
          (t.expected =
            "{ pubkey: Buffer; leafHash: Buffer; signature: Buffer; }"),
          (t.check = o),
          (t.canAddToArray = u));
      }).call(this, r(2).Buffer);
    },
    3722: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775),
          i = r(3112),
          s = r(2918);
        function o(e) {
          if (e.key[0] !== n.InputTypes.WITNESS_UTXO)
            throw new Error(
              "Decode Error: could not decode witnessUtxo with key 0x" +
                e.key.toString("hex"),
            );
          const t = i.readUInt64LE(e.value, 0);
          let r = 8;
          const o = s.decode(e.value, r);
          r += s.encodingLength(o);
          const u = e.value.slice(r);
          if (u.length !== o)
            throw new Error(
              "Decode Error: WITNESS_UTXO script is not proper length",
            );
          return { script: u, value: t };
        }
        function u(t) {
          const { script: r, value: o } = t,
            u = s.encodingLength(r.length),
            a = e.allocUnsafe(8 + u + r.length);
          return (
            i.writeUInt64LE(a, o, 0),
            s.encode(r.length, a, 8),
            r.copy(a, 8 + u),
            { key: e.from([n.InputTypes.WITNESS_UTXO]), value: a }
          );
        }
        function a(t) {
          return e.isBuffer(t.script) && "number" === typeof t.value;
        }
        function c(e, t) {
          return !!e && !!t && void 0 === e.witnessUtxo;
        }
        ((t.decode = o),
          (t.encode = u),
          (t.expected = "{ script: Buffer; value: number; }"),
          (t.check = a),
          (t.canAdd = c));
      }).call(this, r(2).Buffer);
    },
    3723: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2775),
          i = r(2918);
        function s(e) {
          if (e.key[0] !== n.OutputTypes.TAP_TREE || 1 !== e.key.length)
            throw new Error(
              "Decode Error: could not decode tapTree with key 0x" +
                e.key.toString("hex"),
            );
          let t = 0;
          const r = [];
          while (t < e.value.length) {
            const n = e.value[t++],
              s = e.value[t++],
              o = i.decode(e.value, t);
            ((t += i.encodingLength(o)),
              r.push({
                depth: n,
                leafVersion: s,
                script: e.value.slice(t, t + o),
              }),
              (t += o));
          }
          return { leaves: r };
        }
        function o(t) {
          const r = e.from([n.OutputTypes.TAP_TREE]),
            s = [].concat(
              ...t.leaves.map((t) => [
                e.of(t.depth, t.leafVersion),
                i.encode(t.script.length),
                t.script,
              ]),
            );
          return { key: r, value: e.concat(s) };
        }
        function u(t) {
          return (
            Array.isArray(t.leaves) &&
            t.leaves.every(
              (t) =>
                t.depth >= 0 &&
                t.depth <= 128 &&
                (254 & t.leafVersion) === t.leafVersion &&
                e.isBuffer(t.script),
            )
          );
        }
        function a(e, t) {
          return !!e && !!t && void 0 === e.tapTree;
        }
        ((t.decode = s),
          (t.encode = o),
          (t.expected =
            "{ leaves: [{ depth: number; leafVersion: number, script: Buffer; }] }"),
          (t.check = u),
          (t.canAdd = a));
      }).call(this, r(2).Buffer);
    },
    3724: function (e, t, r) {
      "use strict";
      function n(e) {
        return t;
        function t(t) {
          let r;
          if (
            e.includes(t.key[0]) &&
            ((r = t.key.slice(1)),
            (33 !== r.length && 65 !== r.length) || ![2, 3, 4].includes(r[0]))
          )
            throw new Error(
              "Format Error: invalid pubkey in key 0x" + t.key.toString("hex"),
            );
          return r;
        }
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.makeChecker = n));
    },
    3725: function (e, t, r) {
      "use strict";
      (function (e) {
        function r(t) {
          function r(e) {
            if (e.key[0] !== t)
              throw new Error(
                "Decode Error: could not decode redeemScript with key 0x" +
                  e.key.toString("hex"),
              );
            return e.value;
          }
          function n(r) {
            const n = e.from([t]);
            return { key: n, value: r };
          }
          const i = "Buffer";
          function s(t) {
            return e.isBuffer(t);
          }
          function o(e, t) {
            return !!e && !!t && void 0 === e.redeemScript;
          }
          return { decode: r, encode: n, check: s, expected: i, canAdd: o };
        }
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.makeConverter = r));
      }).call(this, r(2).Buffer);
    },
    3726: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2918),
          i = r(3308),
          s = (e) => 32 === e.length;
        function o(t) {
          const r = i.makeConverter(t, s);
          function o(e) {
            const t = n.decode(e.value),
              i = n.encodingLength(t),
              s = r.decode({ key: e.key, value: e.value.slice(i + 32 * t) }),
              o = new Array(t);
            for (let r = 0, n = i; r < t; r++, n += 32)
              o[r] = e.value.slice(n, n + 32);
            return Object.assign({}, s, { leafHashes: o });
          }
          function u(t) {
            const i = r.encode(t),
              s = n.encodingLength(t.leafHashes.length),
              o = e.allocUnsafe(s);
            n.encode(t.leafHashes.length, o);
            const u = e.concat([o, ...t.leafHashes, i.value]);
            return Object.assign({}, i, { value: u });
          }
          const a =
            "{ masterFingerprint: Buffer; pubkey: Buffer; path: string; leafHashes: Buffer[]; }";
          function c(t) {
            return (
              Array.isArray(t.leafHashes) &&
              t.leafHashes.every((t) => e.isBuffer(t) && 32 === t.length) &&
              r.check(t)
            );
          }
          return {
            decode: o,
            encode: u,
            check: c,
            expected: a,
            canAddToArray: r.canAddToArray,
          };
        }
        t.makeConverter = o;
      }).call(this, r(2).Buffer);
    },
    3727: function (e, t, r) {
      "use strict";
      (function (e) {
        function r(t) {
          function r(e) {
            if (e.key[0] !== t || 1 !== e.key.length)
              throw new Error(
                "Decode Error: could not decode tapInternalKey with key 0x" +
                  e.key.toString("hex"),
              );
            if (32 !== e.value.length)
              throw new Error(
                "Decode Error: tapInternalKey not a 32-byte x-only pubkey",
              );
            return e.value;
          }
          function n(r) {
            const n = e.from([t]);
            return { key: n, value: r };
          }
          const i = "Buffer";
          function s(t) {
            return e.isBuffer(t) && 32 === t.length;
          }
          function o(e, t) {
            return !!e && !!t && void 0 === e.tapInternalKey;
          }
          return { decode: r, encode: n, check: s, expected: i, canAdd: o };
        }
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.makeConverter = r));
      }).call(this, r(2).Buffer);
    },
    3728: function (e, t, r) {
      "use strict";
      (function (e) {
        function r(t) {
          function r(e) {
            if (e.key[0] !== t)
              throw new Error(
                "Decode Error: could not decode witnessScript with key 0x" +
                  e.key.toString("hex"),
              );
            return e.value;
          }
          function n(r) {
            const n = e.from([t]);
            return { key: n, value: r };
          }
          const i = "Buffer";
          function s(t) {
            return e.isBuffer(t);
          }
          function o(e, t) {
            return !!e && !!t && void 0 === e.witnessScript;
          }
          return { decode: r, encode: n, check: s, expected: i, canAdd: o };
        }
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.makeConverter = r));
      }).call(this, r(2).Buffer);
    },
    3729: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(3111),
          i = r(3112);
        function s(t) {
          let { globalMap: r, inputs: n, outputs: s } = t;
          const {
              globalKeyVals: o,
              inputKeyVals: u,
              outputKeyVals: c,
            } = a({ globalMap: r, inputs: n, outputs: s }),
            p = i.keyValsToBuffer(o),
            f = (t) =>
              0 === t.length ? [e.from([0])] : t.map(i.keyValsToBuffer),
            h = f(u),
            l = f(c),
            d = e.allocUnsafe(5);
          return (
            d.writeUIntBE(482972169471, 0, 5),
            e.concat([d, p].concat(h, l))
          );
        }
        t.psbtToBuffer = s;
        const o = (e, t) => e.key.compare(t.key);
        function u(e, t) {
          const r = new Set(),
            n = Object.entries(e).reduce((e, n) => {
              let [i, s] = n;
              if ("unknownKeyVals" === i) return e;
              const o = t[i];
              if (void 0 === o) return e;
              const u = (Array.isArray(s) ? s : [s]).map(o.encode),
                a = u.map((e) => e.key.toString("hex"));
              return (
                a.forEach((e) => {
                  if (r.has(e))
                    throw new Error("Serialize Error: Duplicate key: " + e);
                  r.add(e);
                }),
                e.concat(u)
              );
            }, []),
            i = e.unknownKeyVals
              ? e.unknownKeyVals.filter((e) => !r.has(e.key.toString("hex")))
              : [];
          return n.concat(i).sort(o);
        }
        function a(e) {
          let { globalMap: t, inputs: r, outputs: i } = e;
          return {
            globalKeyVals: u(t, n.globals),
            inputKeyVals: r.map((e) => u(e, n.inputs)),
            outputKeyVals: i.map((e) => u(e, n.outputs)),
          };
        }
        t.psbtToKeyVals = a;
      }).call(this, r(2).Buffer);
    },
    3730: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(3107),
          i = r(2995),
          s = r(3731),
          o = r(2832),
          ECPair = r(3109),
          u = r(2803),
          a = r(2994),
          c = r(2760),
          p = r(2760),
          f = r(2996),
          h = r(2822),
          l = r(2758),
          d = s.types,
          y = new Set([
            "p2pkh",
            "p2pk",
            "p2wpkh",
            "p2ms",
            "p2sh-p2pkh",
            "p2sh-p2pk",
            "p2sh-p2wpkh",
            "p2sh-p2ms",
            "p2wsh-p2pkh",
            "p2wsh-p2pk",
            "p2wsh-p2ms",
            "p2sh-p2wsh-p2pkh",
            "p2sh-p2wsh-p2pk",
            "p2sh-p2wsh-p2ms",
          ]);
        function w(e, t, r) {
          try {
            l(e, t);
          } catch (n) {
            throw new Error(r);
          }
        }
        function g(e) {
          return "string" === typeof e || e instanceof String;
        }
        function _(e) {
          return e instanceof f.Transaction;
        }
        class TransactionBuilder {
          constructor(e, t) {
            (void 0 === e && (e = u.bitcoin),
              void 0 === t && (t = 2500),
              (this.network = e),
              (this.maximumFeeRate = t),
              (this.__PREV_TX_SET = {}),
              (this.__INPUTS = []),
              (this.__TX = new f.Transaction()),
              (this.__TX.version = 2),
              (this.__USE_LOW_R = !1),
              console.warn(
                "Deprecation Warning: TransactionBuilder will be removed in the future. (v6.x.x or later) Please use the Psbt class instead. Examples of usage are available in the transactions-psbt.js integration test file on our Github. A high level explanation is available in the psbt.ts and psbt.js files as well.",
              ));
          }
          static fromTransaction(e, t) {
            const r = new TransactionBuilder(t);
            return (
              r.setVersion(e.version),
              r.setLockTime(e.locktime),
              e.outs.forEach((e) => {
                r.addOutput(e.script, e.value);
              }),
              e.ins.forEach((e) => {
                r.__addInputUnsafe(e.hash, e.index, {
                  sequence: e.sequence,
                  script: e.script,
                  witness: e.witness,
                });
              }),
              r.__INPUTS.forEach((t, r) => {
                S(t, e, r);
              }),
              r
            );
          }
          setLowR(e) {
            return (
              l(l.maybe(l.Boolean), e),
              void 0 === e && (e = !0),
              (this.__USE_LOW_R = e),
              e
            );
          }
          setLockTime(e) {
            if (
              (l(h.UInt32, e),
              this.__INPUTS.some(
                (e) => !!e.signatures && e.signatures.some((e) => void 0 !== e),
              ))
            )
              throw new Error("No, this would invalidate signatures");
            this.__TX.locktime = e;
          }
          setVersion(e) {
            (l(h.UInt32, e), (this.__TX.version = e));
          }
          addInput(t, r, n, s) {
            if (!this.__canModifyInputs())
              throw new Error("No, this would invalidate signatures");
            let o;
            if (g(t)) t = i.reverseBuffer(e.from(t, "hex"));
            else if (_(t)) {
              const e = t.outs[r];
              ((s = e.script), (o = e.value), (t = t.getHash(!1)));
            }
            return this.__addInputUnsafe(t, r, {
              sequence: n,
              prevOutScript: s,
              value: o,
            });
          }
          addOutput(e, t) {
            if (!this.__canModifyOutputs())
              throw new Error("No, this would invalidate signatures");
            return (
              "string" === typeof e && (e = n.toOutputScript(e, this.network)),
              this.__TX.addOutput(e, t)
            );
          }
          build() {
            return this.__build(!1);
          }
          buildIncomplete() {
            return this.__build(!0);
          }
          sign(e, t, r, n, i, s) {
            P(
              O(
                this.network,
                this.__INPUTS,
                this.__needsOutputs.bind(this),
                this.__TX,
                e,
                t,
                r,
                n,
                i,
                s,
                this.__USE_LOW_R,
              ),
            );
          }
          __addInputUnsafe(e, t, r) {
            if (f.Transaction.isCoinbaseHash(e))
              throw new Error("coinbase inputs not supported");
            const n = e.toString("hex") + ":" + t;
            if (void 0 !== this.__PREV_TX_SET[n])
              throw new Error("Duplicate TxOut: " + n);
            let i = {};
            if (
              (void 0 !== r.script && (i = m(r.script, r.witness || [])),
              void 0 !== r.value && (i.value = r.value),
              !i.prevOutScript && r.prevOutScript)
            ) {
              let e;
              if (!i.pubkeys && !i.signatures) {
                const t = E(r.prevOutScript);
                (t.pubkeys &&
                  ((i.pubkeys = t.pubkeys), (i.signatures = t.signatures)),
                  (e = t.type));
              }
              ((i.prevOutScript = r.prevOutScript),
                (i.prevOutType = e || s.output(r.prevOutScript)));
            }
            const o = this.__TX.addInput(e, t, r.sequence, r.scriptSig);
            return ((this.__INPUTS[o] = i), (this.__PREV_TX_SET[n] = !0), o);
          }
          __build(e) {
            if (!e) {
              if (!this.__TX.ins.length)
                throw new Error("Transaction has no inputs");
              if (!this.__TX.outs.length)
                throw new Error("Transaction has no outputs");
            }
            const t = this.__TX.clone();
            if (
              (this.__INPUTS.forEach((r, n) => {
                if (!r.prevOutType && !e)
                  throw new Error("Transaction is not complete");
                const i = b(r.prevOutType, r, e);
                if (i)
                  (t.setInputScript(n, i.input), t.setWitness(n, i.witness));
                else {
                  if (!e && r.prevOutType === d.NONSTANDARD)
                    throw new Error("Unknown input type");
                  if (!e) throw new Error("Not enough information");
                }
              }),
              !e && this.__overMaximumFees(t.virtualSize()))
            )
              throw new Error("Transaction has absurd fees");
            return t;
          }
          __canModifyInputs() {
            return this.__INPUTS.every(
              (e) =>
                !e.signatures ||
                e.signatures.every((e) => {
                  if (!e) return !0;
                  const t = k(e);
                  return 0 !== (t & f.Transaction.SIGHASH_ANYONECANPAY);
                }),
            );
          }
          __needsOutputs(e) {
            return e === f.Transaction.SIGHASH_ALL
              ? 0 === this.__TX.outs.length
              : 0 === this.__TX.outs.length &&
                  this.__INPUTS.some(
                    (e) =>
                      !!e.signatures &&
                      e.signatures.some((e) => {
                        if (!e) return !1;
                        const t = k(e);
                        return !(t & f.Transaction.SIGHASH_NONE);
                      }),
                  );
          }
          __canModifyOutputs() {
            const e = this.__TX.ins.length,
              t = this.__TX.outs.length;
            return this.__INPUTS.every(
              (r) =>
                void 0 === r.signatures ||
                r.signatures.every((r) => {
                  if (!r) return !0;
                  const n = k(r),
                    i = 31 & n;
                  return (
                    i === f.Transaction.SIGHASH_NONE ||
                    (i === f.Transaction.SIGHASH_SINGLE && e <= t)
                  );
                }),
            );
          }
          __overMaximumFees(e) {
            const t = this.__INPUTS.reduce((e, t) => e + (t.value >>> 0), 0),
              r = this.__TX.outs.reduce((e, t) => e + t.value, 0),
              n = t - r,
              i = n / e;
            return i > this.maximumFeeRate;
          }
        }
        function m(e, t, r, n) {
          if (0 === e.length && 0 === t.length) return {};
          if (!r) {
            let n = s.input(e, !0),
              i = s.witness(t, !0);
            (n === d.NONSTANDARD && (n = void 0),
              i === d.NONSTANDARD && (i = void 0),
              (r = n || i));
          }
          switch (r) {
            case d.P2WPKH: {
              const {
                output: e,
                pubkey: r,
                signature: n,
              } = a.p2wpkh({ witness: t });
              return {
                prevOutScript: e,
                prevOutType: d.P2WPKH,
                pubkeys: [r],
                signatures: [n],
              };
            }
            case d.P2PKH: {
              const {
                output: t,
                pubkey: r,
                signature: n,
              } = a.p2pkh({ input: e });
              return {
                prevOutScript: t,
                prevOutType: d.P2PKH,
                pubkeys: [r],
                signatures: [n],
              };
            }
            case d.P2PK: {
              const { signature: t } = a.p2pk({ input: e });
              return {
                prevOutType: d.P2PK,
                pubkeys: [void 0],
                signatures: [t],
              };
            }
            case d.P2MS: {
              const {
                m: t,
                pubkeys: r,
                signatures: i,
              } = a.p2ms({ input: e, output: n }, { allowIncomplete: !0 });
              return {
                prevOutType: d.P2MS,
                pubkeys: r,
                signatures: i,
                maxSignatures: t,
              };
            }
          }
          if (r === d.P2SH) {
            const { output: r, redeem: n } = a.p2sh({ input: e, witness: t }),
              i = s.output(n.output),
              o = m(n.input, n.witness, i, n.output);
            return o.prevOutType
              ? {
                  prevOutScript: r,
                  prevOutType: d.P2SH,
                  redeemScript: n.output,
                  redeemScriptType: o.prevOutType,
                  witnessScript: o.witnessScript,
                  witnessScriptType: o.witnessScriptType,
                  pubkeys: o.pubkeys,
                  signatures: o.signatures,
                }
              : {};
          }
          if (r === d.P2WSH) {
            const { output: r, redeem: n } = a.p2wsh({ input: e, witness: t }),
              i = s.output(n.output);
            let o;
            return (
              (o =
                i === d.P2WPKH
                  ? m(n.input, n.witness, i)
                  : m(c.compile(n.witness), [], i, n.output)),
              o.prevOutType
                ? {
                    prevOutScript: r,
                    prevOutType: d.P2WSH,
                    witnessScript: n.output,
                    witnessScriptType: o.prevOutType,
                    pubkeys: o.pubkeys,
                    signatures: o.signatures,
                  }
                : {}
            );
          }
          return { prevOutType: d.NONSTANDARD, prevOutScript: e };
        }
        function S(e, t, r) {
          if (e.redeemScriptType !== d.P2MS || !e.redeemScript) return;
          if (e.pubkeys.length === e.signatures.length) return;
          const n = e.signatures.concat();
          e.signatures = e.pubkeys.map((i) => {
            const s = ECPair.fromPublicKey(i);
            let o;
            return (
              n.some((i, u) => {
                if (!i) return !1;
                const a = c.signature.decode(i),
                  p = t.hashForSignature(r, e.redeemScript, a.hashType);
                return (
                  !!s.verify(p, a.signature) && ((n[u] = void 0), (o = i), !0)
                );
              }),
              o
            );
          });
        }
        function E(e, t) {
          l(h.Buffer, e);
          const r = s.output(e);
          switch (r) {
            case d.P2PKH: {
              if (!t) return { type: r };
              const n = a.p2pkh({ output: e }).hash,
                i = o.hash160(t);
              return n.equals(i)
                ? { type: r, pubkeys: [t], signatures: [void 0] }
                : { type: r };
            }
            case d.P2WPKH: {
              if (!t) return { type: r };
              const n = a.p2wpkh({ output: e }).hash,
                i = o.hash160(t);
              return n.equals(i)
                ? { type: r, pubkeys: [t], signatures: [void 0] }
                : { type: r };
            }
            case d.P2PK: {
              const t = a.p2pk({ output: e });
              return { type: r, pubkeys: [t.pubkey], signatures: [void 0] };
            }
            case d.P2MS: {
              const t = a.p2ms({ output: e });
              return {
                type: r,
                pubkeys: t.pubkeys,
                signatures: t.pubkeys.map(() => {}),
                maxSignatures: t.m,
              };
            }
          }
          return { type: r };
        }
        function T(e, t, r, n) {
          if (r && n) {
            const i = a.p2wsh({ redeem: { output: n } }),
              s = a.p2wsh({ output: r }),
              o = a.p2sh({ redeem: { output: r } }),
              u = a.p2sh({ redeem: i });
            if (!i.hash.equals(s.hash))
              throw new Error("Witness script inconsistent with prevOutScript");
            if (!o.hash.equals(u.hash))
              throw new Error("Redeem script inconsistent with prevOutScript");
            const p = E(i.redeem.output, t);
            if (!p.pubkeys)
              throw new Error(
                p.type + " not supported as witnessScript (" + c.toASM(n) + ")",
              );
            e.signatures &&
              e.signatures.some((e) => void 0 !== e) &&
              (p.signatures = e.signatures);
            const f = n;
            if (p.type === d.P2WPKH)
              throw new Error("P2SH(P2WSH(P2WPKH)) is a consensus failure");
            return {
              redeemScript: r,
              redeemScriptType: d.P2WSH,
              witnessScript: n,
              witnessScriptType: p.type,
              prevOutType: d.P2SH,
              prevOutScript: o.output,
              hasWitness: !0,
              signScript: f,
              signType: p.type,
              pubkeys: p.pubkeys,
              signatures: p.signatures,
              maxSignatures: p.maxSignatures,
            };
          }
          if (r) {
            const n = a.p2sh({ redeem: { output: r } });
            if (e.prevOutScript) {
              let t;
              try {
                t = a.p2sh({ output: e.prevOutScript });
              } catch (s) {
                throw new Error("PrevOutScript must be P2SH");
              }
              if (!n.hash.equals(t.hash))
                throw new Error(
                  "Redeem script inconsistent with prevOutScript",
                );
            }
            const i = E(n.redeem.output, t);
            if (!i.pubkeys)
              throw new Error(
                i.type + " not supported as redeemScript (" + c.toASM(r) + ")",
              );
            e.signatures &&
              e.signatures.some((e) => void 0 !== e) &&
              (i.signatures = e.signatures);
            let o = r;
            return (
              i.type === d.P2WPKH &&
                (o = a.p2pkh({ pubkey: i.pubkeys[0] }).output),
              {
                redeemScript: r,
                redeemScriptType: i.type,
                prevOutType: d.P2SH,
                prevOutScript: n.output,
                hasWitness: i.type === d.P2WPKH,
                signScript: o,
                signType: i.type,
                pubkeys: i.pubkeys,
                signatures: i.signatures,
                maxSignatures: i.maxSignatures,
              }
            );
          }
          if (n) {
            const r = a.p2wsh({ redeem: { output: n } });
            if (e.prevOutScript) {
              const t = a.p2wsh({ output: e.prevOutScript });
              if (!r.hash.equals(t.hash))
                throw new Error(
                  "Witness script inconsistent with prevOutScript",
                );
            }
            const i = E(r.redeem.output, t);
            if (!i.pubkeys)
              throw new Error(
                i.type + " not supported as witnessScript (" + c.toASM(n) + ")",
              );
            e.signatures &&
              e.signatures.some((e) => void 0 !== e) &&
              (i.signatures = e.signatures);
            const s = n;
            if (i.type === d.P2WPKH)
              throw new Error("P2WSH(P2WPKH) is a consensus failure");
            return {
              witnessScript: n,
              witnessScriptType: i.type,
              prevOutType: d.P2WSH,
              prevOutScript: r.output,
              hasWitness: !0,
              signScript: s,
              signType: i.type,
              pubkeys: i.pubkeys,
              signatures: i.signatures,
              maxSignatures: i.maxSignatures,
            };
          }
          if (e.prevOutType && e.prevOutScript) {
            if (e.prevOutType === d.P2SH)
              throw new Error(
                "PrevOutScript is " + e.prevOutType + ", requires redeemScript",
              );
            if (e.prevOutType === d.P2WSH)
              throw new Error(
                "PrevOutScript is " +
                  e.prevOutType +
                  ", requires witnessScript",
              );
            if (!e.prevOutScript) throw new Error("PrevOutScript is missing");
            const r = E(e.prevOutScript, t);
            if (!r.pubkeys)
              throw new Error(
                r.type + " not supported (" + c.toASM(e.prevOutScript) + ")",
              );
            e.signatures &&
              e.signatures.some((e) => void 0 !== e) &&
              (r.signatures = e.signatures);
            let n = e.prevOutScript;
            return (
              r.type === d.P2WPKH &&
                (n = a.p2pkh({ pubkey: r.pubkeys[0] }).output),
              {
                prevOutType: r.type,
                prevOutScript: e.prevOutScript,
                hasWitness: r.type === d.P2WPKH,
                signScript: n,
                signType: r.type,
                pubkeys: r.pubkeys,
                signatures: r.signatures,
                maxSignatures: r.maxSignatures,
              }
            );
          }
          const i = a.p2pkh({ pubkey: t }).output;
          return {
            prevOutType: d.P2PKH,
            prevOutScript: i,
            hasWitness: !1,
            signScript: i,
            signType: d.P2PKH,
            pubkeys: [t],
            signatures: [void 0],
          };
        }
        function b(e, t, r) {
          const n = t.pubkeys || [];
          let i = t.signatures || [];
          switch (e) {
            case d.P2PKH:
              if (0 === n.length) break;
              if (0 === i.length) break;
              return a.p2pkh({ pubkey: n[0], signature: i[0] });
            case d.P2WPKH:
              if (0 === n.length) break;
              if (0 === i.length) break;
              return a.p2wpkh({ pubkey: n[0], signature: i[0] });
            case d.P2PK:
              if (0 === n.length) break;
              if (0 === i.length) break;
              return a.p2pk({ signature: i[0] });
            case d.P2MS: {
              const e = t.maxSignatures;
              i = r ? i.map((e) => e || p.OPS.OP_0) : i.filter((e) => e);
              const s = !r || e === i.length;
              return a.p2ms(
                { m: e, pubkeys: n, signatures: i },
                { allowIncomplete: r, validate: s },
              );
            }
            case d.P2SH: {
              const e = b(t.redeemScriptType, t, r);
              if (!e) return;
              return a.p2sh({
                redeem: {
                  output: e.output || t.redeemScript,
                  input: e.input,
                  witness: e.witness,
                },
              });
            }
            case d.P2WSH: {
              const e = b(t.witnessScriptType, t, r);
              if (!e) return;
              return a.p2wsh({
                redeem: {
                  output: t.witnessScript,
                  input: e.input,
                  witness: e.witness,
                },
              });
            }
          }
        }
        function v(e) {
          return (
            void 0 !== e.signScript &&
            void 0 !== e.signType &&
            void 0 !== e.pubkeys &&
            void 0 !== e.signatures &&
            e.signatures.length === e.pubkeys.length &&
            e.pubkeys.length > 0 &&
            (!1 === e.hasWitness || void 0 !== e.value)
          );
        }
        function k(e) {
          return e.readUInt8(e.length - 1);
        }
        function I(e, t) {
          if (!y.has(t.prevOutScriptType))
            throw new TypeError(
              `Unknown prevOutScriptType "${t.prevOutScriptType}"`,
            );
          (w(
            l.Number,
            t.vin,
            "sign must include vin parameter as Number (input index)",
          ),
            w(
              h.Signer,
              t.keyPair,
              "sign must include keyPair parameter as Signer interface",
            ),
            w(
              l.maybe(l.Number),
              t.hashType,
              "sign hashType parameter must be a number",
            ));
          const r = (e[t.vin] || []).prevOutType,
            n = t.prevOutScriptType;
          switch (n) {
            case "p2pkh":
              if (r && "pubkeyhash" !== r)
                throw new TypeError(
                  `input #${t.vin} is not of type p2pkh: ${r}`,
                );
              (w(
                l.value(void 0),
                t.witnessScript,
                n + " requires NO witnessScript",
              ),
                w(
                  l.value(void 0),
                  t.redeemScript,
                  n + " requires NO redeemScript",
                ),
                w(
                  l.value(void 0),
                  t.witnessValue,
                  n + " requires NO witnessValue",
                ));
              break;
            case "p2pk":
              if (r && "pubkey" !== r)
                throw new TypeError(
                  `input #${t.vin} is not of type p2pk: ${r}`,
                );
              (w(
                l.value(void 0),
                t.witnessScript,
                n + " requires NO witnessScript",
              ),
                w(
                  l.value(void 0),
                  t.redeemScript,
                  n + " requires NO redeemScript",
                ),
                w(
                  l.value(void 0),
                  t.witnessValue,
                  n + " requires NO witnessValue",
                ));
              break;
            case "p2wpkh":
              if (r && "witnesspubkeyhash" !== r)
                throw new TypeError(
                  `input #${t.vin} is not of type p2wpkh: ${r}`,
                );
              (w(
                l.value(void 0),
                t.witnessScript,
                n + " requires NO witnessScript",
              ),
                w(
                  l.value(void 0),
                  t.redeemScript,
                  n + " requires NO redeemScript",
                ),
                w(h.Satoshi, t.witnessValue, n + " requires witnessValue"));
              break;
            case "p2ms":
              if (r && "multisig" !== r)
                throw new TypeError(
                  `input #${t.vin} is not of type p2ms: ${r}`,
                );
              (w(
                l.value(void 0),
                t.witnessScript,
                n + " requires NO witnessScript",
              ),
                w(
                  l.value(void 0),
                  t.redeemScript,
                  n + " requires NO redeemScript",
                ),
                w(
                  l.value(void 0),
                  t.witnessValue,
                  n + " requires NO witnessValue",
                ));
              break;
            case "p2sh-p2wpkh":
              if (r && "scripthash" !== r)
                throw new TypeError(
                  `input #${t.vin} is not of type p2sh-p2wpkh: ${r}`,
                );
              (w(
                l.value(void 0),
                t.witnessScript,
                n + " requires NO witnessScript",
              ),
                w(l.Buffer, t.redeemScript, n + " requires redeemScript"),
                w(h.Satoshi, t.witnessValue, n + " requires witnessValue"));
              break;
            case "p2sh-p2ms":
            case "p2sh-p2pk":
            case "p2sh-p2pkh":
              if (r && "scripthash" !== r)
                throw new TypeError(
                  `input #${t.vin} is not of type ${n}: ${r}`,
                );
              (w(
                l.value(void 0),
                t.witnessScript,
                n + " requires NO witnessScript",
              ),
                w(l.Buffer, t.redeemScript, n + " requires redeemScript"),
                w(
                  l.value(void 0),
                  t.witnessValue,
                  n + " requires NO witnessValue",
                ));
              break;
            case "p2wsh-p2ms":
            case "p2wsh-p2pk":
            case "p2wsh-p2pkh":
              if (r && "witnessscripthash" !== r)
                throw new TypeError(
                  `input #${t.vin} is not of type ${n}: ${r}`,
                );
              (w(l.Buffer, t.witnessScript, n + " requires witnessScript"),
                w(
                  l.value(void 0),
                  t.redeemScript,
                  n + " requires NO redeemScript",
                ),
                w(h.Satoshi, t.witnessValue, n + " requires witnessValue"));
              break;
            case "p2sh-p2wsh-p2ms":
            case "p2sh-p2wsh-p2pk":
            case "p2sh-p2wsh-p2pkh":
              if (r && "scripthash" !== r)
                throw new TypeError(
                  `input #${t.vin} is not of type ${n}: ${r}`,
                );
              (w(l.Buffer, t.witnessScript, n + " requires witnessScript"),
                w(l.Buffer, t.redeemScript, n + " requires witnessScript"),
                w(h.Satoshi, t.witnessValue, n + " requires witnessScript"));
              break;
          }
        }
        function P(e) {
          let {
              input: t,
              ourPubKey: r,
              keyPair: n,
              signatureHash: i,
              hashType: s,
              useLowR: o,
            } = e,
            u = !1;
          for (const [a, p] of t.pubkeys.entries()) {
            if (!r.equals(p)) continue;
            if (t.signatures[a]) throw new Error("Signature already exists");
            if (33 !== r.length && t.hasWitness)
              throw new Error(
                "BIP143 rejects uncompressed public keys in P2WPKH or P2WSH",
              );
            const e = n.sign(i, o);
            ((t.signatures[a] = c.signature.encode(e, s)), (u = !0));
          }
          if (!u) throw new Error("Key pair cannot sign for this input");
        }
        function O(e, t, r, n, i, s, o, u, a, c, p) {
          let d;
          if ("number" === typeof i)
            (console.warn(
              "DEPRECATED: TransactionBuilder sign method arguments will change in v6, please use the TxbSignArg interface",
            ),
              (d = i));
          else {
            if ("object" !== typeof i)
              throw new TypeError(
                "TransactionBuilder sign first arg must be TxbSignArg or number",
              );
            (I(t, i),
              ({
                vin: d,
                keyPair: s,
                redeemScript: o,
                hashType: u,
                witnessValue: a,
                witnessScript: c,
              } = i));
          }
          if (void 0 === s) throw new Error("sign requires keypair");
          if (s.network && s.network !== e)
            throw new TypeError("Inconsistent network");
          if (!t[d]) throw new Error("No input at index: " + d);
          if (((u = u || f.Transaction.SIGHASH_ALL), r(u)))
            throw new Error("Transaction needs outputs");
          const y = t[d];
          if (void 0 !== y.redeemScript && o && !y.redeemScript.equals(o))
            throw new Error("Inconsistent redeemScript");
          const w = s.publicKey || (s.getPublicKey && s.getPublicKey());
          if (!v(y)) {
            if (void 0 !== a) {
              if (void 0 !== y.value && y.value !== a)
                throw new Error("Input did not match witnessValue");
              (l(h.Satoshi, a), (y.value = a));
            }
            if (!v(y)) {
              const e = T(y, w, o, c);
              Object.assign(y, e);
            }
            if (!v(y)) throw Error(y.prevOutType + " not supported");
          }
          let g;
          return (
            (g = y.hasWitness
              ? n.hashForWitnessV0(d, y.signScript, y.value, u)
              : n.hashForSignature(d, y.signScript, u)),
            {
              input: y,
              ourPubKey: w,
              keyPair: s,
              signatureHash: g,
              hashType: u,
              useLowR: !!p,
            }
          );
        }
        t.TransactionBuilder = TransactionBuilder;
      }).call(this, r(2).Buffer);
    },
    3731: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(3113),
        s = r(3734),
        o = r(3114),
        u = r(3115),
        a = r(3739),
        c = r(3742),
        p = r(3744),
        f = r(3746),
        h = {
          P2MS: "multisig",
          NONSTANDARD: "nonstandard",
          NULLDATA: "nulldata",
          P2PK: "pubkey",
          P2PKH: "pubkeyhash",
          P2SH: "scripthash",
          P2WPKH: "witnesspubkeyhash",
          P2WSH: "witnessscripthash",
          WITNESS_COMMITMENT: "witnesscommitment",
        };
      function l(e) {
        if (p.output.check(e)) return h.P2WPKH;
        if (f.output.check(e)) return h.P2WSH;
        if (u.output.check(e)) return h.P2PKH;
        if (a.output.check(e)) return h.P2SH;
        const t = n.decompile(e);
        if (!t) throw new TypeError("Invalid script");
        return i.output.check(t)
          ? h.P2MS
          : o.output.check(t)
            ? h.P2PK
            : c.output.check(t)
              ? h.WITNESS_COMMITMENT
              : s.output.check(t)
                ? h.NULLDATA
                : h.NONSTANDARD;
      }
      function d(e, t) {
        const r = n.decompile(e);
        if (!r) throw new TypeError("Invalid script");
        return u.input.check(r)
          ? h.P2PKH
          : a.input.check(r, t)
            ? h.P2SH
            : i.input.check(r, t)
              ? h.P2MS
              : o.input.check(r)
                ? h.P2PK
                : h.NONSTANDARD;
      }
      function y(e, t) {
        const r = n.decompile(e);
        if (!r) throw new TypeError("Invalid script");
        return p.input.check(r)
          ? h.P2WPKH
          : f.input.check(r, t)
            ? h.P2WSH
            : h.NONSTANDARD;
      }
      ((t.types = h), (t.output = l), (t.input = d), (t.witness = y));
    },
    3732: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760);
      function s(e) {
        return e === i.OPS.OP_0 || n.isCanonicalScriptSignature(e);
      }
      function o(e, t) {
        const r = n.decompile(e);
        return (
          !(r.length < 2) &&
          r[0] === i.OPS.OP_0 &&
          (t
            ? r.slice(1).every(s)
            : r.slice(1).every(n.isCanonicalScriptSignature))
        );
      }
      ((t.check = o), (o.toJSON = () => "multisig input"));
    },
    3733: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760),
        s = r(2822),
        o = i.OPS.OP_RESERVED;
      function u(e, t) {
        const r = n.decompile(e);
        if (r.length < 4) return !1;
        if (r[r.length - 1] !== i.OPS.OP_CHECKMULTISIG) return !1;
        if (!s.Number(r[0])) return !1;
        if (!s.Number(r[r.length - 2])) return !1;
        const u = r[0] - o,
          a = r[r.length - 2] - o;
        if (u <= 0) return !1;
        if (a > 16) return !1;
        if (u > a) return !1;
        if (a !== r.length - 3) return !1;
        if (t) return !0;
        const c = r.slice(1, -2);
        return c.every(n.isCanonicalPubKey);
      }
      ((t.check = u), (u.toJSON = () => "multi-sig output"));
    },
    3734: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2760),
        i = n.OPS;
      function s(e) {
        const t = n.compile(e);
        return t.length > 1 && t[0] === i.OP_RETURN;
      }
      ((t.check = s), (s.toJSON = () => "null data output"));
      const o = { check: s };
      t.output = o;
    },
    3735: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2760);
      function i(e) {
        const t = n.decompile(e);
        return 1 === t.length && n.isCanonicalScriptSignature(t[0]);
      }
      ((t.check = i), (i.toJSON = () => "pubKey input"));
    },
    3736: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760);
      function s(e) {
        const t = n.decompile(e);
        return (
          2 === t.length &&
          n.isCanonicalPubKey(t[0]) &&
          t[1] === i.OPS.OP_CHECKSIG
        );
      }
      ((t.check = s), (s.toJSON = () => "pubKey output"));
    },
    3737: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2760);
      function i(e) {
        const t = n.decompile(e);
        return (
          2 === t.length &&
          n.isCanonicalScriptSignature(t[0]) &&
          n.isCanonicalPubKey(t[1])
        );
      }
      ((t.check = i), (i.toJSON = () => "pubKeyHash input"));
    },
    3738: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760);
      function s(e) {
        const t = n.compile(e);
        return (
          25 === t.length &&
          t[0] === i.OPS.OP_DUP &&
          t[1] === i.OPS.OP_HASH160 &&
          20 === t[2] &&
          t[23] === i.OPS.OP_EQUALVERIFY &&
          t[24] === i.OPS.OP_CHECKSIG
        );
      }
      ((t.check = s), (s.toJSON = () => "pubKeyHash output"));
    },
    3739: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3740);
      t.input = n;
      const i = r(3741);
      t.output = i;
    },
    3740: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2760),
          i = r(3113),
          s = r(3114),
          o = r(3115),
          u = r(3310),
          a = r(3311);
        function c(t, r) {
          const c = n.decompile(t);
          if (c.length < 1) return !1;
          const p = c[c.length - 1];
          if (!e.isBuffer(p)) return !1;
          const f = n.decompile(n.compile(c.slice(0, -1))),
            h = n.decompile(p);
          return (
            !!h &&
            !!n.isPushOnly(f) &&
            (1 === c.length
              ? a.check(h) || u.check(h)
              : !(!o.input.check(f) || !o.output.check(h)) ||
                !(!i.input.check(f, r) || !i.output.check(h)) ||
                !(!s.input.check(f) || !s.output.check(h)))
          );
        }
        ((t.check = c), (c.toJSON = () => "scriptHash input"));
      }).call(this, r(2).Buffer);
    },
    3741: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2760),
        i = r(2760);
      function s(e) {
        const t = n.compile(e);
        return (
          23 === t.length &&
          t[0] === i.OPS.OP_HASH160 &&
          20 === t[1] &&
          t[22] === i.OPS.OP_EQUAL
        );
      }
      ((t.check = s), (s.toJSON = () => "scriptHash output"));
    },
    3742: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3743);
      t.output = n;
    },
    3743: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2760),
          i = r(2760),
          s = r(2822),
          o = r(2758),
          u = e.from("aa21a9ed", "hex");
        function a(e) {
          const t = n.compile(e);
          return (
            t.length > 37 &&
            t[0] === i.OPS.OP_RETURN &&
            36 === t[1] &&
            t.slice(2, 6).equals(u)
          );
        }
        function c(t) {
          o(s.Hash256bit, t);
          const r = e.allocUnsafe(36);
          return (u.copy(r, 0), t.copy(r, 4), n.compile([i.OPS.OP_RETURN, r]));
        }
        function p(e) {
          return (o(a, e), n.decompile(e)[1].slice(4, 36));
        }
        ((t.check = a),
          (a.toJSON = () => "Witness commitment output"),
          (t.encode = c),
          (t.decode = p));
      }).call(this, r(2).Buffer);
    },
    3744: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3745);
      t.input = n;
      const i = r(3310);
      t.output = i;
    },
    3745: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(2760);
      function i(e) {
        return n.isCanonicalPubKey(e) && 33 === e.length;
      }
      function s(e) {
        const t = n.decompile(e);
        return 2 === t.length && n.isCanonicalScriptSignature(t[0]) && i(t[1]);
      }
      ((t.check = s), (s.toJSON = () => "witnessPubKeyHash input"));
    },
    3746: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(3747);
      t.input = n;
      const i = r(3311);
      t.output = i;
    },
    3747: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(2760),
          i = r(2758),
          s = r(3113),
          o = r(3114),
          u = r(3115);
        function a(t, r) {
          if ((i(i.Array, t), t.length < 1)) return !1;
          const a = t[t.length - 1];
          if (!e.isBuffer(a)) return !1;
          const c = n.decompile(a);
          if (!c || 0 === c.length) return !1;
          const p = n.compile(t.slice(0, -1));
          return (
            !(!u.input.check(p) || !u.output.check(c)) ||
            !(!s.input.check(p, r) || !s.output.check(c)) ||
            !(!o.input.check(p) || !o.output.check(c))
          );
        }
        ((t.check = a), (a.toJSON = () => "witnessScriptHash input"));
      }).call(this, r(2).Buffer);
    },
    4607: function (e, t, r) {
      var n = r(838);
      e.exports = function (e) {
        return new n().update(e).digest();
      };
    },
    4904: function (e, t, r) {
      "use strict";
      var n = r(16),
        i = r(46).Buffer,
        s = r(806),
        o = i.alloc(128),
        u = 64;
      function a(e, t) {
        (s.call(this, "digest"),
          "string" === typeof t && (t = i.from(t)),
          (this._alg = e),
          (this._key = t),
          t.length > u
            ? (t = e(t))
            : t.length < u && (t = i.concat([t, o], u)));
        for (
          var r = (this._ipad = i.allocUnsafe(u)),
            n = (this._opad = i.allocUnsafe(u)),
            a = 0;
          a < u;
          a++
        )
          ((r[a] = 54 ^ t[a]), (n[a] = 92 ^ t[a]));
        this._hash = [r];
      }
      (n(a, s),
        (a.prototype._update = function (e) {
          this._hash.push(e);
        }),
        (a.prototype._final = function () {
          var e = this._alg(i.concat(this._hash));
          return this._alg(i.concat([this._opad, e]));
        }),
        (e.exports = a));
    },
  },
]);
