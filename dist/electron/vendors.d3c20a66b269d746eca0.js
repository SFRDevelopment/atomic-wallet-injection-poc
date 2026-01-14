(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [164, 32, 329],
  {
    2691: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var i = n(r(230)),
          o = n(r(794)),
          a = r(805),
          s = n(r(7625)),
          c = r(2806);
        function u(e, t) {
          (l(e, t), t.add(e));
        }
        function f(e, t, r) {
          (l(e, t), t.set(e, r));
        }
        function l(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function h(e, t, r) {
          return (e.set(p(e, t), r), r);
        }
        function d(e, t) {
          return e.get(p(e, t));
        }
        function p(e, t, r) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : r;
          throw new TypeError("Private element is not present on this object");
        }
        const y = new o.default(() =>
            Promise.resolve().then(r.t.bind(null, 6009, 7)),
          ),
          E = "VeChain",
          g = "VET",
          v = "m/44'/818'/0'/0/0",
          _ = 18,
          m = "0",
          w = "0x0000000000000000000000000000456e65726779",
          b = 1e3,
          A = 2;
        var I = new WeakMap(),
          N = new WeakMap(),
          T = new WeakSet();
        class VETCoin extends (0, c.HasProviders)(
          (0, c.HasTokensMixin)(i.default),
        ) {
          constructor(e) {
            let {
              alias: t,
              notify: r,
              feeData: n,
              explorers: i,
              txWebUrl: o,
              socket: a,
              id: c,
            } = e;
            const l = {
              id: c,
              alias: t,
              notify: r,
              name: E,
              ticker: g,
              decimal: _,
              unspendableBalance: m,
              explorers: i,
              txWebUrl: o,
              feeData: n,
              socket: a,
            };
            (super(l),
              u(this, T),
              f(this, I, void 0),
              f(this, N, void 0),
              (this.derivation = v),
              this.setExplorersModules([s.default]),
              this.loadExplorers(l),
              (this.fee = n.fee),
              (this.transactions = []),
              (this.feeTokenContract = w),
              (this.tokens = {}),
              p(T, this, L).call(this),
              this.eventEmitter.on(
                this.ticker + "::confirmed-socket-tx",
                (e, t, r) => {
                  (this.getInfo(),
                    t && t.direction
                      ? this.eventEmitter.emit("socket::newtx", {
                          id: e,
                          ticker: r,
                          amount: t.amount,
                          txid: t.txid,
                        })
                      : this.eventEmitter.emit("socket::newtx::outgoing", {
                          id: e,
                          ticker: r,
                        }));
                },
              ));
          }
          get feeWallet() {
            return d(N, this);
          }
          get feeTicker() {
            return "VTHO";
          }
          async getExcludedTokenList() {
            return [];
          }
          createToken(e) {
            return new a.VETToken({ parent: this, ...e });
          }
          async loadTokensList(e) {
            var t;
            (e.addWallet(d(N, this)),
              null === (t = this.bus) ||
                void 0 === t ||
                t.$emit("update::coin-list"));
          }
          loadWallet(e, t) {
            return new Promise(async (e, r) => {
              const n = t.trim().split(/\s+/),
                { cry: i } = await y.get();
              i.mnemonic.validate(n) ||
                r(new Error("Error, fail words in VET mnemonic string"));
              const o = i.mnemonic.derivePrivateKey(n);
              o || r(new Error(this.ticker + " privateKey is empty"));
              const a = i.secp256k1.derivePublicKey(o);
              (h(I, this, "0x" + o.toString("hex")),
                (this.address = "0x" + i.publicKeyToAddress(a).toString("hex")),
                e({
                  id: this.id,
                  privateKey: d(I, this),
                  address: this.address,
                }));
            });
          }
          async getAddress() {
            if (d(I, this)) {
              const { cry: t } = await y.get(),
                r = e.from(d(I, this).substring(A), "hex"),
                n = t.secp256k1.derivePublicKey(r);
              return "0x" + t.publicKeyToAddress(n).toString("hex");
            }
            return new Error(this.ticker + " privateKey is empty");
          }
          async validateAddress(e) {
            return !!e && Boolean(e.match(/0x[0-9a-f]{40}/i));
          }
          async createTransaction(e) {
            let { address: t, amount: r } = e;
            const n = Number(this.toCurrencyUnit(await this.getFee()));
            return this.createTransactionWithData(t, r, "0x", n);
          }
          async createTokenTransaction(e) {
            let { contract: t, amount: r, dataToSend: n, fee: i } = e;
            return this.createTransactionWithData(t, r, n, i);
          }
          async createTransactionWithData(t, r, n, i) {
            const { Transaction: o, cry: a } = await y.get(),
              s = 16,
              c = 18,
              u = await this.getProvider("block").getLatestBlock(),
              f = e.from(d(I, this).substring(A), "hex"),
              l = "0x" + new this.BN(r).toString(s),
              h = u.id.substring(0, c),
              p = new o({
                chainTag: 74,
                blockRef: h,
                expiration: 720,
                clauses: [{ to: t, value: l, data: n }],
                gasPriceCoef: 0,
                gas: Number(this.convertVTHOToGas(i)),
                dependsOn: null,
                nonce: 0,
              }),
              E = a.blake2b256(p.encode());
            return (
              (p.signature = a.secp256k1.sign(E, f)),
              "0x" + p.encode().toString("hex")
            );
          }
          convertGasToVTHO(e) {
            return Number(new this.BN(Number(e)).div(new this.BN(b)));
          }
          convertVTHOToGas(e) {
            return Number(new this.BN(Number(e)).mul(new this.BN(b)));
          }
          async getInfo() {
            const e = await this.getProvider("balance").getInfo(this.address);
            return (
              null !== e &&
                void 0 !== e &&
                e.balance &&
                (this.balance = e.balance),
              null !== e &&
                void 0 !== e &&
                e.energy &&
                (this.tokens[d(N, this).id].balance = e.energy),
              {
                balance: this.balance,
                energy: this.tokens[d(N, this).id].balance,
              }
            );
          }
          async getFee() {
            const { Transaction: e } = await y.get();
            return this.toMinimalUnit(
              this.fee || this.convertGasToVTHO(e.intrinsicGas([])),
            );
          }
          async isAvailableForFee(e) {
            const t = this.tokens[d(N, this).id];
            if (!t || !t.indivisibleBalance) return !1;
            const r = e || (await this.getFee());
            return t.indivisibleBalance.gte(r);
          }
          async availableBalance() {
            const e = new this.BN(this.balance).sub(
              new this.BN(this.unspendableBalance),
            );
            return e.lt(new this.BN(0)) ? "0" : this.toCurrencyUnit(e);
          }
          async fetchUserTokens(e) {
            return [];
          }
          async getTransactions(e) {
            return [];
          }
          setPrivateKey(e) {
            h(I, this, e);
          }
        }
        function L() {
          (h(
            N,
            this,
            this.createToken({
              name: "VeThor",
              ticker: "VTHO",
              decimal: _,
              contract: this.feeTokenContract,
              uniqueField: this.feeTokenContract,
              visibility: !0,
              confirmed: !0,
            }),
          ),
            (this.tokens[d(N, this).id] = d(N, this)));
        }
        t.default = VETCoin;
      }).call(this, r(2).Buffer);
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2807: function (e, t) {},
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
      function o(e) {
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
      function a(e, t) {
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
        var o = n.allocUnsafe(6 + r + i);
        return (
          (o[0] = 48),
          (o[1] = o.length - 2),
          (o[2] = 2),
          (o[3] = e.length),
          e.copy(o, 4),
          (o[4 + r] = 2),
          (o[5 + r] = t.length),
          t.copy(o, 6 + r),
          o
        );
      }
      e.exports = { check: i, decode: o, encode: a };
    },
    3288: function (e) {
      e.exports = JSON.parse(
        '{"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_RANGE_INVALID":"private key range is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn\'t export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn\'t import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn\'t parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn\'t parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn\'t serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn\'t recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}',
      );
    },
    3643: function (e, t, r) {
      "use strict";
      ((t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = r(377)),
        (t.createHash = t.Hash = r(797)),
        (t.createHmac = t.Hmac = r(2828)));
      var n = r(3865),
        i = Object.keys(n),
        o = [
          "sha1",
          "sha224",
          "sha256",
          "sha384",
          "sha512",
          "md5",
          "rmd160",
        ].concat(i);
      t.getHashes = function () {
        return o;
      };
      var a = r(3135);
      ((t.pbkdf2 = a.pbkdf2), (t.pbkdf2Sync = a.pbkdf2Sync));
      var s = r(3866);
      ((t.Cipher = s.Cipher),
        (t.createCipher = s.createCipher),
        (t.Cipheriv = s.Cipheriv),
        (t.createCipheriv = s.createCipheriv),
        (t.Decipher = s.Decipher),
        (t.createDecipher = s.createDecipher),
        (t.Decipheriv = s.Decipheriv),
        (t.createDecipheriv = s.createDecipheriv),
        (t.getCiphers = s.getCiphers),
        (t.listCiphers = s.listCiphers));
      var c = r(3868);
      ((t.DiffieHellmanGroup = c.DiffieHellmanGroup),
        (t.createDiffieHellmanGroup = c.createDiffieHellmanGroup),
        (t.getDiffieHellman = c.getDiffieHellman),
        (t.createDiffieHellman = c.createDiffieHellman),
        (t.DiffieHellman = c.DiffieHellman));
      var u = r(3869);
      ((t.createSign = u.createSign),
        (t.Sign = u.Sign),
        (t.createVerify = u.createVerify),
        (t.Verify = u.Verify),
        (t.createECDH = r(3870)));
      var f = r(3871);
      ((t.publicEncrypt = f.publicEncrypt),
        (t.privateEncrypt = f.privateEncrypt),
        (t.publicDecrypt = f.publicDecrypt),
        (t.privateDecrypt = f.privateDecrypt));
      var l = r(3872);
      ((t.randomFill = l.randomFill),
        (t.randomFillSync = l.randomFillSync),
        (t.createCredentials = function () {
          throw new Error(
            [
              "sorry, createCredentials is not implemented yet",
              "we accept pull requests",
              "https://github.com/crypto-browserify/crypto-browserify",
            ].join("\n"),
          );
        }),
        (t.constants = {
          DH_CHECK_P_NOT_SAFE_PRIME: 2,
          DH_CHECK_P_NOT_PRIME: 1,
          DH_UNABLE_TO_CHECK_GENERATOR: 4,
          DH_NOT_SUITABLE_GENERATOR: 8,
          NPN_ENABLED: 1,
          ALPN_ENABLED: 1,
          RSA_PKCS1_PADDING: 1,
          RSA_SSLV23_PADDING: 2,
          RSA_NO_PADDING: 3,
          RSA_PKCS1_OAEP_PADDING: 4,
          RSA_X931_PADDING: 5,
          RSA_PKCS1_PSS_PADDING: 6,
          POINT_CONVERSION_COMPRESSED: 2,
          POINT_CONVERSION_UNCOMPRESSED: 4,
          POINT_CONVERSION_HYBRID: 6,
        }));
    },
    3650: function (e, t, r) {
      "use strict";
      e.exports = r(3651)(r(3654));
    },
    3651: function (e, t, r) {
      "use strict";
      var n = r(3652),
        i = r(3653),
        o = r(3288);
      function a(e, t) {
        return void 0 === e
          ? t
          : (n.isBoolean(e, o.COMPRESSED_TYPE_INVALID), e);
      }
      e.exports = function (e) {
        return {
          privateKeyVerify: function (t) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              32 === t.length && e.privateKeyVerify(t)
            );
          },
          privateKeyExport: function (t, r) {
            (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (r = a(r, !0)));
            var s = e.privateKeyExport(t, r);
            return i.privateKeyExport(t, s, r);
          },
          privateKeyImport: function (t) {
            if (
              (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              (t = i.privateKeyImport(t)),
              t && 32 === t.length && e.privateKeyVerify(t))
            )
              return t;
            throw new Error(o.EC_PRIVATE_KEY_IMPORT_DER_FAIL);
          },
          privateKeyNegate: function (t) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              e.privateKeyNegate(t)
            );
          },
          privateKeyModInverse: function (t) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              e.privateKeyModInverse(t)
            );
          },
          privateKeyTweakAdd: function (t, r) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              e.privateKeyTweakAdd(t, r)
            );
          },
          privateKeyTweakMul: function (t, r) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              e.privateKeyTweakMul(t, r)
            );
          },
          publicKeyCreate: function (t, r) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (r = a(r, !0)),
              e.publicKeyCreate(t, r)
            );
          },
          publicKeyConvert: function (t, r) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              (r = a(r, !0)),
              e.publicKeyConvert(t, r)
            );
          },
          publicKeyVerify: function (t) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              e.publicKeyVerify(t)
            );
          },
          publicKeyTweakAdd: function (t, r, i) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              (i = a(i, !0)),
              e.publicKeyTweakAdd(t, r, i)
            );
          },
          publicKeyTweakMul: function (t, r, i) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              (i = a(i, !0)),
              e.publicKeyTweakMul(t, r, i)
            );
          },
          publicKeyCombine: function (t, r) {
            (n.isArray(t, o.EC_PUBLIC_KEYS_TYPE_INVALID),
              n.isLengthGTZero(t, o.EC_PUBLIC_KEYS_LENGTH_INVALID));
            for (var i = 0; i < t.length; ++i)
              (n.isBuffer(t[i], o.EC_PUBLIC_KEY_TYPE_INVALID),
                n.isBufferLength2(
                  t[i],
                  33,
                  65,
                  o.EC_PUBLIC_KEY_LENGTH_INVALID,
                ));
            return ((r = a(r, !0)), e.publicKeyCombine(t, r));
          },
          signatureNormalize: function (t) {
            return (
              n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              e.signatureNormalize(t)
            );
          },
          signatureExport: function (t) {
            (n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID));
            var r = e.signatureExport(t);
            return i.signatureExport(r);
          },
          signatureImport: function (t) {
            (n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isLengthGTZero(t, o.ECDSA_SIGNATURE_LENGTH_INVALID));
            var r = i.signatureImport(t);
            if (r) return e.signatureImport(r);
            throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL);
          },
          signatureImportLax: function (t) {
            (n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isLengthGTZero(t, o.ECDSA_SIGNATURE_LENGTH_INVALID));
            var r = i.signatureImportLax(t);
            if (r) return e.signatureImport(r);
            throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL);
          },
          sign: function (t, r, i) {
            (n.isBuffer(t, o.MSG32_TYPE_INVALID),
              n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID));
            var a = null,
              s = null;
            return (
              void 0 !== i &&
                (n.isObject(i, o.OPTIONS_TYPE_INVALID),
                void 0 !== i.data &&
                  (n.isBuffer(i.data, o.OPTIONS_DATA_TYPE_INVALID),
                  n.isBufferLength(i.data, 32, o.OPTIONS_DATA_LENGTH_INVALID),
                  (a = i.data)),
                void 0 !== i.noncefn &&
                  (n.isFunction(i.noncefn, o.OPTIONS_NONCEFN_TYPE_INVALID),
                  (s = i.noncefn))),
              e.sign(t, r, s, a)
            );
          },
          verify: function (t, r, i) {
            return (
              n.isBuffer(t, o.MSG32_TYPE_INVALID),
              n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              n.isBuffer(i, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(i, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              e.verify(t, r, i)
            );
          },
          recover: function (t, r, i, s) {
            return (
              n.isBuffer(t, o.MSG32_TYPE_INVALID),
              n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              n.isNumber(i, o.RECOVERY_ID_TYPE_INVALID),
              n.isNumberInInterval(i, -1, 4, o.RECOVERY_ID_VALUE_INVALID),
              (s = a(s, !0)),
              e.recover(t, r, i, s)
            );
          },
          ecdh: function (t, r) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              e.ecdh(t, r)
            );
          },
          ecdhUnsafe: function (t, r, i) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (i = a(i, !0)),
              e.ecdhUnsafe(t, r, i)
            );
          },
        };
      };
    },
    3652: function (e, t, r) {
      "use strict";
      (function (e) {
        var r = Object.prototype.toString;
        ((t.isArray = function (e, t) {
          if (!Array.isArray(e)) throw TypeError(t);
        }),
          (t.isBoolean = function (e, t) {
            if ("[object Boolean]" !== r.call(e)) throw TypeError(t);
          }),
          (t.isBuffer = function (t, r) {
            if (!e.isBuffer(t)) throw TypeError(r);
          }),
          (t.isFunction = function (e, t) {
            if ("[object Function]" !== r.call(e)) throw TypeError(t);
          }),
          (t.isNumber = function (e, t) {
            if ("[object Number]" !== r.call(e)) throw TypeError(t);
          }),
          (t.isObject = function (e, t) {
            if ("[object Object]" !== r.call(e)) throw TypeError(t);
          }),
          (t.isBufferLength = function (e, t, r) {
            if (e.length !== t) throw RangeError(r);
          }),
          (t.isBufferLength2 = function (e, t, r, n) {
            if (e.length !== t && e.length !== r) throw RangeError(n);
          }),
          (t.isLengthGTZero = function (e, t) {
            if (0 === e.length) throw RangeError(t);
          }),
          (t.isNumberInInterval = function (e, t, r, n) {
            if (e <= t || e >= r) throw RangeError(n);
          }));
      }).call(this, r(2).Buffer);
    },
    3653: function (e, t, r) {
      "use strict";
      var n = r(46).Buffer,
        i = r(2898),
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
        a = n.from([
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
      ((t.privateKeyExport = function (e, t, r) {
        var i = n.from(r ? o : a);
        return (e.copy(i, r ? 8 : 9), t.copy(i, r ? 181 : 214), i);
      }),
        (t.privateKeyImport = function (e) {
          var t = e.length,
            r = 0;
          if (
            !(t < r + 1 || 48 !== e[r]) &&
            ((r += 1), !(t < r + 1) && 128 & e[r])
          ) {
            var n = 127 & e[r];
            if (((r += 1), !(n < 1 || n > 2) && !(t < r + n))) {
              var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
              if (
                ((r += n),
                !(t < r + i) &&
                  !(
                    t < r + 3 ||
                    2 !== e[r] ||
                    1 !== e[r + 1] ||
                    1 !== e[r + 2]
                  ) &&
                  ((r += 3),
                  !(
                    t < r + 2 ||
                    4 !== e[r] ||
                    e[r + 1] > 32 ||
                    t < r + 2 + e[r + 1]
                  )))
              )
                return e.slice(r + 2, r + 2 + e[r + 1]);
            }
          }
        }),
        (t.signatureExport = function (e) {
          for (
            var t = n.concat([n.from([0]), e.r]), r = 33, o = 0;
            r > 1 && 0 === t[o] && !(128 & t[o + 1]);
            --r, ++o
          );
          for (
            var a = n.concat([n.from([0]), e.s]), s = 33, c = 0;
            s > 1 && 0 === a[c] && !(128 & a[c + 1]);
            --s, ++c
          );
          return i.encode(t.slice(o), a.slice(c));
        }),
        (t.signatureImport = function (e) {
          var t = n.alloc(32, 0),
            r = n.alloc(32, 0);
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
          } catch (a) {
            return;
          }
          return (
            o.r.copy(t, 32 - o.r.length),
            o.s.copy(r, 32 - o.s.length),
            { r: t, s: r }
          );
        }),
        (t.signatureImportLax = function (e) {
          var t = n.alloc(32, 0),
            r = n.alloc(32, 0),
            i = e.length,
            o = 0;
          if (48 === e[o++]) {
            var a = e[o++];
            if (!(128 & a && ((o += a - 128), o > i)) && 2 === e[o++]) {
              var s = e[o++];
              if (128 & s) {
                if (((a = s - 128), o + a > i)) return;
                for (; a > 0 && 0 === e[o]; o += 1, a -= 1);
                for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + e[o];
              }
              if (!(s > i - o)) {
                var c = o;
                if (((o += s), 2 === e[o++])) {
                  var u = e[o++];
                  if (128 & u) {
                    if (((a = u - 128), o + a > i)) return;
                    for (; a > 0 && 0 === e[o]; o += 1, a -= 1);
                    for (u = 0; a > 0; o += 1, a -= 1) u = (u << 8) + e[o];
                  }
                  if (!(u > i - o)) {
                    var f = o;
                    for (o += u; s > 0 && 0 === e[c]; s -= 1, c += 1);
                    if (!(s > 32)) {
                      var l = e.slice(c, c + s);
                      for (
                        l.copy(t, 32 - l.length);
                        u > 0 && 0 === e[f];
                        u -= 1, f += 1
                      );
                      if (!(u > 32)) {
                        var h = e.slice(f, f + u);
                        return (h.copy(r, 32 - h.length), { r: t, s: r });
                      }
                    }
                  }
                }
              }
            }
          }
        }));
    },
    3654: function (e, t, r) {
      "use strict";
      var n = r(46).Buffer,
        i = r(797),
        o = r(49),
        a = r(795).ec,
        s = r(3288),
        c = new a("secp256k1"),
        u = c.curve;
      function f(e, t) {
        var r = new o(t);
        if (r.cmp(u.p) >= 0) return null;
        r = r.toRed(u.red);
        var n = r.redSqr().redIMul(r).redIAdd(u.b).redSqrt();
        (3 === e) !== n.isOdd() && (n = n.redNeg());
        const i = r.redSqr().redIMul(r);
        return n.redSqr().redISub(i.redIAdd(u.b)).isZero()
          ? c.keyPair({ pub: { x: r, y: n } })
          : null;
      }
      function l(e, t, r) {
        var n = new o(t),
          i = new o(r);
        if (n.cmp(u.p) >= 0 || i.cmp(u.p) >= 0) return null;
        if (
          ((n = n.toRed(u.red)),
          (i = i.toRed(u.red)),
          (6 === e || 7 === e) && i.isOdd() !== (7 === e))
        )
          return null;
        var a = n.redSqr().redIMul(n);
        return i.redSqr().redISub(a.redIAdd(u.b)).isZero()
          ? c.keyPair({ pub: { x: n, y: i } })
          : null;
      }
      function h(e) {
        var t = e[0];
        switch (t) {
          case 2:
          case 3:
            return 33 !== e.length ? null : f(t, e.slice(1, 33));
          case 4:
          case 6:
          case 7:
            return 65 !== e.length
              ? null
              : l(t, e.slice(1, 33), e.slice(33, 65));
          default:
            return null;
        }
      }
      ((t.privateKeyVerify = function (e) {
        var t = new o(e);
        return t.cmp(u.n) < 0 && !t.isZero();
      }),
        (t.privateKeyExport = function (e, t) {
          var r = new o(e);
          if (r.cmp(u.n) >= 0 || r.isZero())
            throw new Error(s.EC_PRIVATE_KEY_EXPORT_DER_FAIL);
          return n.from(c.keyFromPrivate(e).getPublic(t, !0));
        }),
        (t.privateKeyNegate = function (e) {
          var t = new o(e);
          return t.isZero()
            ? n.alloc(32)
            : u.n.sub(t).umod(u.n).toArrayLike(n, "be", 32);
        }),
        (t.privateKeyModInverse = function (e) {
          var t = new o(e);
          if (t.cmp(u.n) >= 0 || t.isZero())
            throw new Error(s.EC_PRIVATE_KEY_RANGE_INVALID);
          return t.invm(u.n).toArrayLike(n, "be", 32);
        }),
        (t.privateKeyTweakAdd = function (e, t) {
          var r = new o(t);
          if (r.cmp(u.n) >= 0) throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
          if ((r.iadd(new o(e)), r.cmp(u.n) >= 0 && r.isub(u.n), r.isZero()))
            throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
          return r.toArrayLike(n, "be", 32);
        }),
        (t.privateKeyTweakMul = function (e, t) {
          var r = new o(t);
          if (r.cmp(u.n) >= 0 || r.isZero())
            throw new Error(s.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);
          return (
            r.imul(new o(e)),
            r.cmp(u.n) && (r = r.umod(u.n)),
            r.toArrayLike(n, "be", 32)
          );
        }),
        (t.publicKeyCreate = function (e, t) {
          var r = new o(e);
          if (r.cmp(u.n) >= 0 || r.isZero())
            throw new Error(s.EC_PUBLIC_KEY_CREATE_FAIL);
          return n.from(c.keyFromPrivate(e).getPublic(t, !0));
        }),
        (t.publicKeyConvert = function (e, t) {
          var r = h(e);
          if (null === r) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          return n.from(r.getPublic(t, !0));
        }),
        (t.publicKeyVerify = function (e) {
          return null !== h(e);
        }),
        (t.publicKeyTweakAdd = function (e, t, r) {
          var i = h(e);
          if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          if (((t = new o(t)), t.cmp(u.n) >= 0))
            throw new Error(s.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
          var a = u.g.mul(t).add(i.pub);
          if (a.isInfinity()) throw new Error(s.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
          return n.from(a.encode(!0, r));
        }),
        (t.publicKeyTweakMul = function (e, t, r) {
          var i = h(e);
          if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          if (((t = new o(t)), t.cmp(u.n) >= 0 || t.isZero()))
            throw new Error(s.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);
          return n.from(i.pub.mul(t).encode(!0, r));
        }),
        (t.publicKeyCombine = function (e, t) {
          for (var r = new Array(e.length), i = 0; i < e.length; ++i)
            if (((r[i] = h(e[i])), null === r[i]))
              throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          for (var o = r[0].pub, a = 1; a < r.length; ++a) o = o.add(r[a].pub);
          if (o.isInfinity()) throw new Error(s.EC_PUBLIC_KEY_COMBINE_FAIL);
          return n.from(o.encode(!0, t));
        }),
        (t.signatureNormalize = function (e) {
          var t = new o(e.slice(0, 32)),
            r = new o(e.slice(32, 64));
          if (t.cmp(u.n) >= 0 || r.cmp(u.n) >= 0)
            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
          var i = n.from(e);
          return (
            1 === r.cmp(c.nh) &&
              u.n.sub(r).toArrayLike(n, "be", 32).copy(i, 32),
            i
          );
        }),
        (t.signatureExport = function (e) {
          var t = e.slice(0, 32),
            r = e.slice(32, 64);
          if (new o(t).cmp(u.n) >= 0 || new o(r).cmp(u.n) >= 0)
            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
          return { r: t, s: r };
        }),
        (t.signatureImport = function (e) {
          var t = new o(e.r);
          t.cmp(u.n) >= 0 && (t = new o(0));
          var r = new o(e.s);
          return (
            r.cmp(u.n) >= 0 && (r = new o(0)),
            n.concat([t.toArrayLike(n, "be", 32), r.toArrayLike(n, "be", 32)])
          );
        }),
        (t.sign = function (e, t, r, i) {
          if ("function" === typeof r) {
            var a = r;
            r = function (r) {
              var c = a(e, t, null, i, r);
              if (!n.isBuffer(c) || 32 !== c.length)
                throw new Error(s.ECDSA_SIGN_FAIL);
              return new o(c);
            };
          }
          var f = new o(t);
          if (f.cmp(u.n) >= 0 || f.isZero()) throw new Error(s.ECDSA_SIGN_FAIL);
          var l = c.sign(e, t, { canonical: !0, k: r, pers: i });
          return {
            signature: n.concat([
              l.r.toArrayLike(n, "be", 32),
              l.s.toArrayLike(n, "be", 32),
            ]),
            recovery: l.recoveryParam,
          };
        }),
        (t.verify = function (e, t, r) {
          var n = { r: t.slice(0, 32), s: t.slice(32, 64) },
            i = new o(n.r),
            a = new o(n.s);
          if (i.cmp(u.n) >= 0 || a.cmp(u.n) >= 0)
            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
          if (1 === a.cmp(c.nh) || i.isZero() || a.isZero()) return !1;
          var f = h(r);
          if (null === f) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          return c.verify(e, n, { x: f.pub.x, y: f.pub.y });
        }),
        (t.recover = function (e, t, r, i) {
          var a = { r: t.slice(0, 32), s: t.slice(32, 64) },
            f = new o(a.r),
            l = new o(a.s);
          if (f.cmp(u.n) >= 0 || l.cmp(u.n) >= 0)
            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
          try {
            if (f.isZero() || l.isZero()) throw new Error();
            var h = c.recoverPubKey(e, a, r);
            return n.from(h.encode(!0, i));
          } catch (d) {
            throw new Error(s.ECDSA_RECOVER_FAIL);
          }
        }),
        (t.ecdh = function (e, r) {
          var n = t.ecdhUnsafe(e, r, !0);
          return i("sha256").update(n).digest();
        }),
        (t.ecdhUnsafe = function (e, t, r) {
          var i = h(e);
          if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          var a = new o(t);
          if (a.cmp(u.n) >= 0 || a.isZero()) throw new Error(s.ECDH_FAIL);
          return n.from(i.pub.mul(a).encode(!0, r));
        }));
    },
    3889: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return ((t["default"] = e), t);
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(r(3890));
      function o(e) {
        return !!e.toHexString;
      }
      function a(e) {
        return (
          e.slice ||
            (e.slice = function () {
              var t = Array.prototype.slice.call(arguments);
              return a(new Uint8Array(Array.prototype.slice.apply(e, t)));
            }),
          e
        );
      }
      function s(e) {
        if (
          !e ||
          parseInt(String(e.length)) != e.length ||
          "string" === typeof e
        )
          return !1;
        for (var t = 0; t < e.length; t++) {
          var r = e[t];
          if (r < 0 || r >= 256 || parseInt(String(r)) != r) return !1;
        }
        return !0;
      }
      function c(e) {
        if (
          (null == e &&
            i.throwError(
              "cannot convert null value to array",
              i.INVALID_ARGUMENT,
              { arg: "value", value: e },
            ),
          o(e) && (e = e.toHexString()),
          "string" === typeof e)
        ) {
          var t = e.match(/^(0x)?[0-9a-fA-F]*$/);
          (t ||
            i.throwError("invalid hexidecimal string", i.INVALID_ARGUMENT, {
              arg: "value",
              value: e,
            }),
            "0x" !== t[1] &&
              i.throwError(
                "hex string must have 0x prefix",
                i.INVALID_ARGUMENT,
                { arg: "value", value: e },
              ),
            (e = e.substring(2)),
            e.length % 2 && (e = "0" + e));
          for (var r = [], n = 0; n < e.length; n += 2)
            r.push(parseInt(e.substr(n, 2), 16));
          return a(new Uint8Array(r));
        }
        return s(e)
          ? a(new Uint8Array(e))
          : (i.throwError("invalid arrayify value", null, {
              arg: "value",
              value: e,
              type: typeof e,
            }),
            null);
      }
      function u(e) {
        for (var t = [], r = 0, n = 0; n < e.length; n++) {
          var i = c(e[n]);
          (t.push(i), (r += i.length));
        }
        var o = new Uint8Array(r),
          s = 0;
        for (n = 0; n < t.length; n++) (o.set(t[n], s), (s += t[n].length));
        return a(o);
      }
      function f(e) {
        var t = c(e);
        if (0 === t.length) return t;
        var r = 0;
        while (0 === t[r]) r++;
        return (r && (t = t.slice(r)), t);
      }
      function l(e, t) {
        if (((e = c(e)), t < e.length)) throw new Error("cannot pad");
        var r = new Uint8Array(t);
        return (r.set(e, t - e.length), a(r));
      }
      function h(e, t) {
        return (
          !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!t || e.length === 2 + 2 * t)
        );
      }
      ((t.isHexable = o),
        (t.isArrayish = s),
        (t.arrayify = c),
        (t.concat = u),
        (t.stripZeros = f),
        (t.padZeros = l),
        (t.isHexString = h));
      var d = "0123456789abcdef";
      function p(e) {
        if (o(e)) return e.toHexString();
        if ("number" === typeof e) {
          (e < 0 &&
            i.throwError("cannot hexlify negative value", i.INVALID_ARGUMENT, {
              arg: "value",
              value: e,
            }),
            e >= 9007199254740991 &&
              i.throwError("out-of-range", i.NUMERIC_FAULT, {
                operartion: "hexlify",
                fault: "out-of-safe-range",
              }));
          var t = "";
          while (e) ((t = d[15 & e] + t), (e = Math.floor(e / 16)));
          return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
        }
        if ("string" === typeof e) {
          var r = e.match(/^(0x)?[0-9a-fA-F]*$/);
          return (
            r ||
              i.throwError("invalid hexidecimal string", i.INVALID_ARGUMENT, {
                arg: "value",
                value: e,
              }),
            "0x" !== r[1] &&
              i.throwError(
                "hex string must have 0x prefix",
                i.INVALID_ARGUMENT,
                { arg: "value", value: e },
              ),
            e.length % 2 && (e = "0x0" + e.substring(2)),
            e
          );
        }
        if (s(e)) {
          for (var n = [], a = 0; a < e.length; a++) {
            var c = e[a];
            n.push(d[(240 & c) >> 4] + d[15 & c]);
          }
          return "0x" + n.join("");
        }
        return (
          i.throwError("invalid hexlify value", null, {
            arg: "value",
            value: e,
          }),
          "never"
        );
      }
      function y(e) {
        return h(e) && e.length % 2 === 0 ? (e.length - 2) / 2 : null;
      }
      function E(e, t, r) {
        return (
          h(e) ||
            i.throwError("invalid hex data", i.INVALID_ARGUMENT, {
              arg: "value",
              value: e,
            }),
          e.length % 2 !== 0 &&
            i.throwError("hex data length must be even", i.INVALID_ARGUMENT, {
              arg: "value",
              value: e,
            }),
          (t = 2 + 2 * t),
          null != r ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t)
        );
      }
      function g(e) {
        h(e) ||
          i.throwError("invalid hex string", i.INVALID_ARGUMENT, {
            arg: "value",
            value: e,
          });
        while (e.length > 3 && "0x0" === e.substring(0, 3))
          e = "0x" + e.substring(3);
        return e;
      }
      function v(e, t) {
        h(e) ||
          i.throwError("invalid hex string", i.INVALID_ARGUMENT, {
            arg: "value",
            value: e,
          });
        while (e.length < 2 * t + 2) e = "0x0" + e.substring(2);
        return e;
      }
      function _(e) {
        return e && null != e.r && null != e.s;
      }
      function m(e) {
        var t = 0,
          r = "0x",
          n = "0x";
        if (_(e)) {
          (null == e.v &&
            null == e.recoveryParam &&
            i.throwError(
              "at least on of recoveryParam or v must be specified",
              i.INVALID_ARGUMENT,
              { argument: "signature", value: e },
            ),
            (r = v(e.r, 32)),
            (n = v(e.s, 32)),
            (t = e.v),
            "string" === typeof t && (t = parseInt(t, 16)));
          var o = e.recoveryParam;
          (null == o && null != e.v && (o = 1 - (t % 2)), (t = 27 + o));
        } else {
          var a = c(e);
          if (65 !== a.length) throw new Error("invalid signature");
          ((r = p(a.slice(0, 32))),
            (n = p(a.slice(32, 64))),
            (t = a[64]),
            27 !== t && 28 !== t && (t = 27 + (t % 2)));
        }
        return { r: r, s: n, recoveryParam: t - 27, v: t };
      }
      function w(e) {
        return (
          (e = m(e)),
          p(u([e.r, e.s, e.recoveryParam ? "0x1c" : "0x1b"]))
        );
      }
      ((t.hexlify = p),
        (t.hexDataLength = y),
        (t.hexDataSlice = E),
        (t.hexStripZeros = g),
        (t.hexZeroPad = v),
        (t.splitSignature = m),
        (t.joinSignature = w));
    },
    3890: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(7628);
      ((t.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
        (t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
        (t.MISSING_NEW = "MISSING_NEW"),
        (t.CALL_EXCEPTION = "CALL_EXCEPTION"),
        (t.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
        (t.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
        (t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
        (t.NUMERIC_FAULT = "NUMERIC_FAULT"),
        (t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
        (t.NONCE_EXPIRED = "NONCE_EXPIRED"),
        (t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
        (t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"));
      var i = !1,
        o = !1;
      function a(e, r, i) {
        if (o) throw new Error("unknown error");
        (r || (r = t.UNKNOWN_ERROR), i || (i = {}));
        var a = [];
        (Object.keys(i).forEach(function (e) {
          try {
            a.push(e + "=" + JSON.stringify(i[e]));
          } catch (c) {
            a.push(e + "=" + JSON.stringify(i[e].toString()));
          }
        }),
          a.push("version=" + n.version));
        var s = e;
        a.length && (e += " (" + a.join(", ") + ")");
        var c = new Error(e);
        throw (
          (c.reason = s),
          (c.code = r),
          Object.keys(i).forEach(function (e) {
            c[e] = i[e];
          }),
          c
        );
      }
      function s(e, r) {
        e instanceof r || a("missing new", t.MISSING_NEW, { name: r.name });
      }
      function c(e, r, n) {
        (n || (n = ""),
          e < r &&
            a("missing argument" + n, t.MISSING_ARGUMENT, {
              count: e,
              expectedCount: r,
            }),
          e > r &&
            a("too many arguments" + n, t.UNEXPECTED_ARGUMENT, {
              count: e,
              expectedCount: r,
            }));
      }
      function u(e, r) {
        (i &&
          a("error censorship permanent", t.UNSUPPORTED_OPERATION, {
            operation: "setCensorship",
          }),
          (o = !!e),
          (i = !!r));
      }
      function f() {
        try {
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach(function (e) {
              try {
                "test".normalize(e);
              } catch (t) {
                throw new Error("missing " + e);
              }
            }),
            String.fromCharCode(233).normalize("NFD") !==
              String.fromCharCode(101, 769))
          )
            throw new Error("broken implementation");
        } catch (e) {
          a(
            "platform missing String.prototype.normalize",
            t.UNSUPPORTED_OPERATION,
            { operation: "String.prototype.normalize", form: e.message },
          );
        }
      }
      ((t.throwError = a),
        (t.checkNew = s),
        (t.checkArgumentCount = c),
        (t.setCensorship = u),
        (t.checkNormalize = f));
      var l = { debug: 1, default: 2, info: 2, warn: 3, error: 4, off: 5 },
        h = l["default"];
      function d(e) {
        var t = l[e];
        null != t ? (h = t) : y("invliad log level - " + e);
      }
      function p(e, t) {
        h > l[e] || console.log.apply(console, t);
      }
      function y() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        p("warn", e);
      }
      function E() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        p("info", e);
      }
      ((t.setLogLevel = d), (t.warn = y), (t.info = E));
    },
    4280: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(7634);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === n[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            }));
      });
      var i = r(7635);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var o = r(6014);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === o[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
      var a = r(7641);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var s = r(7649);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var c = r(7650);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
    },
    4281: function (e, t) {
      const r = "Input must be an string, Buffer or Uint8Array";
      function n(e) {
        let t;
        if (e instanceof Uint8Array) t = e;
        else {
          if ("string" !== typeof e) throw new Error(r);
          {
            const r = new TextEncoder();
            t = r.encode(e);
          }
        }
        return t;
      }
      function i(e) {
        return Array.prototype.map
          .call(e, function (e) {
            return (e < 16 ? "0" : "") + e.toString(16);
          })
          .join("");
      }
      function o(e) {
        return (4294967296 + e).toString(16).substring(1);
      }
      function a(e, t, r) {
        let n = "\n" + e + " = ";
        for (let i = 0; i < t.length; i += 2) {
          if (32 === r)
            ((n += o(t[i]).toUpperCase()),
              (n += " "),
              (n += o(t[i + 1]).toUpperCase()));
          else {
            if (64 !== r) throw new Error("Invalid size " + r);
            ((n += o(t[i + 1]).toUpperCase()), (n += o(t[i]).toUpperCase()));
          }
          i % 6 === 4
            ? (n += "\n" + new Array(e.length + 4).join(" "))
            : i < t.length - 2 && (n += " ");
        }
        console.log(n);
      }
      function s(e, t, r) {
        let n = new Date().getTime();
        const i = new Uint8Array(t);
        for (let a = 0; a < t; a++) i[a] = a % 256;
        const o = new Date().getTime();
        (console.log("Generated random input in " + (o - n) + "ms"), (n = o));
        for (let a = 0; a < r; a++) {
          const r = e(i),
            o = new Date().getTime(),
            a = o - n;
          ((n = o),
            console.log("Hashed in " + a + "ms: " + r.substring(0, 20) + "..."),
            console.log(
              Math.round((t / (1 << 20) / (a / 1e3)) * 100) / 100 +
                " MB PER SECOND",
            ));
        }
      }
      e.exports = { normalizeInput: n, toHex: i, debugPrint: a, testSpeed: s };
    },
    4972: function (e, t, r) {
      const n = r(4973),
        i = r(4974);
      e.exports = {
        blake2b: n.blake2b,
        blake2bHex: n.blake2bHex,
        blake2bInit: n.blake2bInit,
        blake2bUpdate: n.blake2bUpdate,
        blake2bFinal: n.blake2bFinal,
        blake2s: i.blake2s,
        blake2sHex: i.blake2sHex,
        blake2sInit: i.blake2sInit,
        blake2sUpdate: i.blake2sUpdate,
        blake2sFinal: i.blake2sFinal,
      };
    },
    4973: function (e, t, r) {
      const n = r(4281);
      function i(e, t, r) {
        const n = e[t] + e[r];
        let i = e[t + 1] + e[r + 1];
        (n >= 4294967296 && i++, (e[t] = n), (e[t + 1] = i));
      }
      function o(e, t, r, n) {
        let i = e[t] + r;
        r < 0 && (i += 4294967296);
        let o = e[t + 1] + n;
        (i >= 4294967296 && o++, (e[t] = i), (e[t + 1] = o));
      }
      function a(e, t) {
        return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
      }
      function s(e, t, r, n, a, s) {
        const c = h[a],
          u = h[a + 1],
          f = h[s],
          d = h[s + 1];
        (i(l, e, t), o(l, e, c, u));
        let p = l[n] ^ l[e],
          y = l[n + 1] ^ l[e + 1];
        ((l[n] = y),
          (l[n + 1] = p),
          i(l, r, n),
          (p = l[t] ^ l[r]),
          (y = l[t + 1] ^ l[r + 1]),
          (l[t] = (p >>> 24) ^ (y << 8)),
          (l[t + 1] = (y >>> 24) ^ (p << 8)),
          i(l, e, t),
          o(l, e, f, d),
          (p = l[n] ^ l[e]),
          (y = l[n + 1] ^ l[e + 1]),
          (l[n] = (p >>> 16) ^ (y << 16)),
          (l[n + 1] = (y >>> 16) ^ (p << 16)),
          i(l, r, n),
          (p = l[t] ^ l[r]),
          (y = l[t + 1] ^ l[r + 1]),
          (l[t] = (y >>> 31) ^ (p << 1)),
          (l[t + 1] = (p >>> 31) ^ (y << 1)));
      }
      const c = new Uint32Array([
          4089235720, 1779033703, 2227873595, 3144134277, 4271175723,
          1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199,
          2600822924, 4215389547, 528734635, 327033209, 1541459225,
        ]),
        u = [
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
        f = new Uint8Array(
          u.map(function (e) {
            return 2 * e;
          }),
        ),
        l = new Uint32Array(32),
        h = new Uint32Array(32);
      function d(e, t) {
        let r = 0;
        for (r = 0; r < 16; r++) ((l[r] = e.h[r]), (l[r + 16] = c[r]));
        for (
          l[24] = l[24] ^ e.t,
            l[25] = l[25] ^ (e.t / 4294967296),
            t && ((l[28] = ~l[28]), (l[29] = ~l[29])),
            r = 0;
          r < 32;
          r++
        )
          h[r] = a(e.b, 4 * r);
        for (r = 0; r < 12; r++)
          (s(0, 8, 16, 24, f[16 * r + 0], f[16 * r + 1]),
            s(2, 10, 18, 26, f[16 * r + 2], f[16 * r + 3]),
            s(4, 12, 20, 28, f[16 * r + 4], f[16 * r + 5]),
            s(6, 14, 22, 30, f[16 * r + 6], f[16 * r + 7]),
            s(0, 10, 20, 30, f[16 * r + 8], f[16 * r + 9]),
            s(2, 12, 22, 24, f[16 * r + 10], f[16 * r + 11]),
            s(4, 14, 16, 26, f[16 * r + 12], f[16 * r + 13]),
            s(6, 8, 18, 28, f[16 * r + 14], f[16 * r + 15]));
        for (r = 0; r < 16; r++) e.h[r] = e.h[r] ^ l[r] ^ l[r + 16];
      }
      const p = new Uint8Array([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]);
      function y(e, t, r, n) {
        if (0 === e || e > 64)
          throw new Error("Illegal output length, expected 0 < length <= 64");
        if (t && t.length > 64)
          throw new Error(
            "Illegal key, expected Uint8Array with 0 < length <= 64",
          );
        if (r && 16 !== r.length)
          throw new Error(
            "Illegal salt, expected Uint8Array with length is 16",
          );
        if (n && 16 !== n.length)
          throw new Error(
            "Illegal personal, expected Uint8Array with length is 16",
          );
        const i = {
          b: new Uint8Array(128),
          h: new Uint32Array(16),
          t: 0,
          c: 0,
          outlen: e,
        };
        (p.fill(0),
          (p[0] = e),
          t && (p[1] = t.length),
          (p[2] = 1),
          (p[3] = 1),
          r && p.set(r, 32),
          n && p.set(n, 48));
        for (let o = 0; o < 16; o++) i.h[o] = c[o] ^ a(p, 4 * o);
        return (t && (E(i, t), (i.c = 128)), i);
      }
      function E(e, t) {
        for (let r = 0; r < t.length; r++)
          (128 === e.c && ((e.t += e.c), d(e, !1), (e.c = 0)),
            (e.b[e.c++] = t[r]));
      }
      function g(e) {
        e.t += e.c;
        while (e.c < 128) e.b[e.c++] = 0;
        d(e, !0);
        const t = new Uint8Array(e.outlen);
        for (let r = 0; r < e.outlen; r++) t[r] = e.h[r >> 2] >> (8 * (3 & r));
        return t;
      }
      function v(e, t, r, i, o) {
        ((r = r || 64),
          (e = n.normalizeInput(e)),
          i && (i = n.normalizeInput(i)),
          o && (o = n.normalizeInput(o)));
        const a = y(r, t, i, o);
        return (E(a, e), g(a));
      }
      function _(e, t, r, i, o) {
        const a = v(e, t, r, i, o);
        return n.toHex(a);
      }
      e.exports = {
        blake2b: v,
        blake2bHex: _,
        blake2bInit: y,
        blake2bUpdate: E,
        blake2bFinal: g,
      };
    },
    4974: function (e, t, r) {
      const n = r(4281);
      function i(e, t) {
        return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
      }
      function o(e, t, r, n, i, o) {
        ((u[e] = u[e] + u[t] + i),
          (u[n] = a(u[n] ^ u[e], 16)),
          (u[r] = u[r] + u[n]),
          (u[t] = a(u[t] ^ u[r], 12)),
          (u[e] = u[e] + u[t] + o),
          (u[n] = a(u[n] ^ u[e], 8)),
          (u[r] = u[r] + u[n]),
          (u[t] = a(u[t] ^ u[r], 7)));
      }
      function a(e, t) {
        return (e >>> t) ^ (e << (32 - t));
      }
      const s = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        c = new Uint8Array([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9,
          15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10,
          14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0,
          15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6,
          10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4,
          10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4,
          8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10,
          2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
        ]),
        u = new Uint32Array(16),
        f = new Uint32Array(16);
      function l(e, t) {
        let r = 0;
        for (r = 0; r < 8; r++) ((u[r] = e.h[r]), (u[r + 8] = s[r]));
        for (
          u[12] ^= e.t, u[13] ^= e.t / 4294967296, t && (u[14] = ~u[14]), r = 0;
          r < 16;
          r++
        )
          f[r] = i(e.b, 4 * r);
        for (r = 0; r < 10; r++)
          (o(0, 4, 8, 12, f[c[16 * r + 0]], f[c[16 * r + 1]]),
            o(1, 5, 9, 13, f[c[16 * r + 2]], f[c[16 * r + 3]]),
            o(2, 6, 10, 14, f[c[16 * r + 4]], f[c[16 * r + 5]]),
            o(3, 7, 11, 15, f[c[16 * r + 6]], f[c[16 * r + 7]]),
            o(0, 5, 10, 15, f[c[16 * r + 8]], f[c[16 * r + 9]]),
            o(1, 6, 11, 12, f[c[16 * r + 10]], f[c[16 * r + 11]]),
            o(2, 7, 8, 13, f[c[16 * r + 12]], f[c[16 * r + 13]]),
            o(3, 4, 9, 14, f[c[16 * r + 14]], f[c[16 * r + 15]]));
        for (r = 0; r < 8; r++) e.h[r] ^= u[r] ^ u[r + 8];
      }
      function h(e, t) {
        if (!(e > 0 && e <= 32))
          throw new Error("Incorrect output length, should be in [1, 32]");
        const r = t ? t.length : 0;
        if (t && !(r > 0 && r <= 32))
          throw new Error("Incorrect key length, should be in [1, 32]");
        const n = {
          h: new Uint32Array(s),
          b: new Uint8Array(64),
          c: 0,
          t: 0,
          outlen: e,
        };
        return (
          (n.h[0] ^= 16842752 ^ (r << 8) ^ e),
          r > 0 && (d(n, t), (n.c = 64)),
          n
        );
      }
      function d(e, t) {
        for (let r = 0; r < t.length; r++)
          (64 === e.c && ((e.t += e.c), l(e, !1), (e.c = 0)),
            (e.b[e.c++] = t[r]));
      }
      function p(e) {
        e.t += e.c;
        while (e.c < 64) e.b[e.c++] = 0;
        l(e, !0);
        const t = new Uint8Array(e.outlen);
        for (let r = 0; r < e.outlen; r++)
          t[r] = (e.h[r >> 2] >> (8 * (3 & r))) & 255;
        return t;
      }
      function y(e, t, r) {
        ((r = r || 32), (e = n.normalizeInput(e)));
        const i = h(r, t);
        return (d(i, e), p(i));
      }
      function E(e, t, r) {
        const i = y(e, t, r);
        return n.toHex(i);
      }
      e.exports = {
        blake2s: y,
        blake2sHex: E,
        blake2sInit: h,
        blake2sUpdate: d,
        blake2sFinal: p,
      };
    },
    4975: function (e, t, r) {
      var n = r(229),
        i = r(46).Buffer,
        o = r(2764),
        a = r(2792),
        s = r(3650),
        c = i.from("Bitcoin seed", "utf8"),
        u = 2147483648,
        f = 78,
        l = { private: 76066276, public: 76067358 };
      function h(e) {
        ((this.versions = e || l),
          (this.depth = 0),
          (this.index = 0),
          (this._privateKey = null),
          (this._publicKey = null),
          (this.chainCode = null),
          (this._fingerprint = 0),
          (this.parentFingerprint = 0));
      }
      function d(e, t, r) {
        var n = i.allocUnsafe(f);
        (n.writeUInt32BE(t, 0), n.writeUInt8(e.depth, 4));
        var o = e.depth ? e.parentFingerprint : 0;
        return (
          n.writeUInt32BE(o, 5),
          n.writeUInt32BE(e.index, 9),
          e.chainCode.copy(n, 13),
          r.copy(n, 45),
          n
        );
      }
      function p(e) {
        var t = o.createHash("sha256").update(e).digest();
        return o.createHash("ripemd160").update(t).digest();
      }
      (Object.defineProperty(h.prototype, "fingerprint", {
        get: function () {
          return this._fingerprint;
        },
      }),
        Object.defineProperty(h.prototype, "identifier", {
          get: function () {
            return this._identifier;
          },
        }),
        Object.defineProperty(h.prototype, "pubKeyHash", {
          get: function () {
            return this.identifier;
          },
        }),
        Object.defineProperty(h.prototype, "privateKey", {
          get: function () {
            return this._privateKey;
          },
          set: function (e) {
            (n.equal(e.length, 32, "Private key must be 32 bytes."),
              n(!0 === s.privateKeyVerify(e), "Invalid private key"),
              (this._privateKey = e),
              (this._publicKey = s.publicKeyCreate(e, !0)),
              (this._identifier = p(this.publicKey)),
              (this._fingerprint = this._identifier
                .slice(0, 4)
                .readUInt32BE(0)));
          },
        }),
        Object.defineProperty(h.prototype, "publicKey", {
          get: function () {
            return this._publicKey;
          },
          set: function (e) {
            (n(
              33 === e.length || 65 === e.length,
              "Public key must be 33 or 65 bytes.",
            ),
              n(!0 === s.publicKeyVerify(e), "Invalid public key"),
              (this._publicKey = s.publicKeyConvert(e, !0)),
              (this._identifier = p(this.publicKey)),
              (this._fingerprint = this._identifier
                .slice(0, 4)
                .readUInt32BE(0)),
              (this._privateKey = null));
          },
        }),
        Object.defineProperty(h.prototype, "privateExtendedKey", {
          get: function () {
            return this._privateKey
              ? a.encode(
                  d(
                    this,
                    this.versions.private,
                    i.concat([i.alloc(1, 0), this.privateKey]),
                  ),
                )
              : null;
          },
        }),
        Object.defineProperty(h.prototype, "publicExtendedKey", {
          get: function () {
            return a.encode(d(this, this.versions.public, this.publicKey));
          },
        }),
        (h.prototype.derive = function (e) {
          if ("m" === e || "M" === e || "m'" === e || "M'" === e) return this;
          var t = e.split("/"),
            r = this;
          return (
            t.forEach(function (e, t) {
              if (0 !== t) {
                var i = e.length > 1 && "'" === e[e.length - 1],
                  o = parseInt(e, 10);
                (n(o < u, "Invalid index"),
                  i && (o += u),
                  (r = r.deriveChild(o)));
              } else n(/^[mM]{1}/.test(e), 'Path must start with "m" or "M"');
            }),
            r
          );
        }),
        (h.prototype.deriveChild = function (e) {
          var t,
            r = e >= u,
            a = i.allocUnsafe(4);
          if ((a.writeUInt32BE(e, 0), r)) {
            n(this.privateKey, "Could not derive hardened child key");
            var c = this.privateKey,
              f = i.alloc(1, 0);
            ((c = i.concat([f, c])), (t = i.concat([c, a])));
          } else t = i.concat([this.publicKey, a]);
          var l = o.createHmac("sha512", this.chainCode).update(t).digest(),
            d = l.slice(0, 32),
            p = l.slice(32),
            y = new h(this.versions);
          if (this.privateKey)
            try {
              y.privateKey = s.privateKeyTweakAdd(this.privateKey, d);
            } catch (E) {
              return this.deriveChild(e + 1);
            }
          else
            try {
              y.publicKey = s.publicKeyTweakAdd(this.publicKey, d, !0);
            } catch (E) {
              return this.deriveChild(e + 1);
            }
          return (
            (y.chainCode = p),
            (y.depth = this.depth + 1),
            (y.parentFingerprint = this.fingerprint),
            (y.index = e),
            y
          );
        }),
        (h.prototype.sign = function (e) {
          return s.sign(e, this.privateKey).signature;
        }),
        (h.prototype.verify = function (e, t) {
          return s.verify(e, t, this.publicKey);
        }),
        (h.prototype.wipePrivateData = function () {
          return (
            this._privateKey &&
              o.randomBytes(this._privateKey.length).copy(this._privateKey),
            (this._privateKey = null),
            this
          );
        }),
        (h.prototype.toJSON = function () {
          return {
            xpriv: this.privateExtendedKey,
            xpub: this.publicExtendedKey,
          };
        }),
        (h.fromMasterSeed = function (e, t) {
          var r = o.createHmac("sha512", c).update(e).digest(),
            n = r.slice(0, 32),
            i = r.slice(32),
            a = new h(t);
          return ((a.chainCode = i), (a.privateKey = n), a);
        }),
        (h.fromExtendedKey = function (e, t) {
          t = t || l;
          var r = new h(t),
            i = a.decode(e),
            o = i.readUInt32BE(0);
          (n(
            o === t.private || o === t.public,
            "Version mismatch: does not match private or public",
          ),
            (r.depth = i.readUInt8(4)),
            (r.parentFingerprint = i.readUInt32BE(5)),
            (r.index = i.readUInt32BE(9)),
            (r.chainCode = i.slice(13, 45)));
          var s = i.slice(45);
          return (
            0 === s.readUInt8(0)
              ? (n(
                  o === t.private,
                  "Version mismatch: version does not match private",
                ),
                (r.privateKey = s.slice(1)))
              : (n(
                  o === t.public,
                  "Version mismatch: version does not match public",
                ),
                (r.publicKey = s)),
            r
          );
        }),
        (h.fromJSON = function (e) {
          return h.fromExtendedKey(e.xpriv);
        }),
        (h.HARDENED_OFFSET = u),
        (e.exports = h));
    },
    6009: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = { cry: !0 };
      t.cry = void 0;
      var i = r(7626);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var o = r(7651);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === o[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
      var a = r(6015);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var s = r(7653);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var c = r(7654);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(n, e) ||
            (e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var u = f(r(4280));
      function f(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (f = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            o,
            a = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return a;
          if ((i = t ? n : r)) {
            if (i.has(e)) return i.get(e);
            i.set(e, a);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (o.get || o.set)
                ? i(a, r, o)
                : (a[r] = e[r]));
          return a;
        })(e, t);
      }
      t.cry = u;
    },
    6010: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(6011),
        i = "0x0000000000000000000000000000000000000000";
      t.AddressZero = i;
      var o =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
      t.HashZero = o;
      var a = "Ξ";
      t.EtherSymbol = a;
      var s = n.bigNumberify(-1);
      t.NegativeOne = s;
      var c = n.bigNumberify(0);
      t.Zero = c;
      var u = n.bigNumberify(1);
      t.One = u;
      var f = n.bigNumberify(2);
      t.Two = f;
      var l = n.bigNumberify("1000000000000000000");
      t.WeiPerEther = l;
      var h = n.bigNumberify(
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      );
      t.MaxUint256 = h;
    },
    6011: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          },
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return ((t["default"] = e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(r(49)),
        a = r(3889),
        s = r(6012),
        c = i(r(3890)),
        u = new o.default.BN(-1);
      function f(e) {
        var t = e.toString(16);
        return "-" === t[0]
          ? t.length % 2 === 0
            ? "-0x0" + t.substring(1)
            : "-0x" + t.substring(1)
          : t.length % 2 === 1
            ? "0x0" + t
            : "0x" + t;
      }
      function l(e) {
        return d(y(e));
      }
      function h(e) {
        return new p(f(e));
      }
      function d(e) {
        var t = e._hex;
        return "-" === t[0]
          ? new o.default.BN(t.substring(3), 16).mul(u)
          : new o.default.BN(t.substring(2), 16);
      }
      var p = (function () {
        function e(t) {
          if (
            (c.checkNew(this, e),
            s.setType(this, "BigNumber"),
            "string" === typeof t)
          )
            a.isHexString(t)
              ? ("0x" == t && (t = "0x0"), s.defineReadOnly(this, "_hex", t))
              : "-" === t[0] && a.isHexString(t.substring(1))
                ? s.defineReadOnly(this, "_hex", t)
                : t.match(/^-?[0-9]*$/)
                  ? ("" == t && (t = "0"),
                    s.defineReadOnly(this, "_hex", f(new o.default.BN(t))))
                  : c.throwError(
                      "invalid BigNumber string value",
                      c.INVALID_ARGUMENT,
                      { arg: "value", value: t },
                    );
          else if ("number" === typeof t) {
            parseInt(String(t)) !== t &&
              c.throwError("underflow", c.NUMERIC_FAULT, {
                operation: "setValue",
                fault: "underflow",
                value: t,
                outputValue: parseInt(String(t)),
              });
            try {
              s.defineReadOnly(this, "_hex", f(new o.default.BN(t)));
            } catch (r) {
              c.throwError("overflow", c.NUMERIC_FAULT, {
                operation: "setValue",
                fault: "overflow",
                details: r.message,
              });
            }
          } else
            t instanceof e
              ? s.defineReadOnly(this, "_hex", t._hex)
              : t.toHexString
                ? s.defineReadOnly(this, "_hex", f(l(t.toHexString())))
                : t._hex && a.isHexString(t._hex)
                  ? s.defineReadOnly(this, "_hex", t._hex)
                  : a.isArrayish(t)
                    ? s.defineReadOnly(
                        this,
                        "_hex",
                        f(new o.default.BN(a.hexlify(t).substring(2), 16)),
                      )
                    : c.throwError(
                        "invalid BigNumber value",
                        c.INVALID_ARGUMENT,
                        { arg: "value", value: t },
                      );
        }
        return (
          (e.prototype.fromTwos = function (e) {
            return h(d(this).fromTwos(e));
          }),
          (e.prototype.toTwos = function (e) {
            return h(d(this).toTwos(e));
          }),
          (e.prototype.abs = function () {
            return "-" === this._hex[0] ? h(d(this).mul(u)) : this;
          }),
          (e.prototype.add = function (e) {
            return h(d(this).add(l(e)));
          }),
          (e.prototype.sub = function (e) {
            return h(d(this).sub(l(e)));
          }),
          (e.prototype.div = function (e) {
            var t = y(e);
            return (
              t.isZero() &&
                c.throwError("division by zero", c.NUMERIC_FAULT, {
                  operation: "divide",
                  fault: "division by zero",
                }),
              h(d(this).div(l(e)))
            );
          }),
          (e.prototype.mul = function (e) {
            return h(d(this).mul(l(e)));
          }),
          (e.prototype.mod = function (e) {
            return h(d(this).mod(l(e)));
          }),
          (e.prototype.pow = function (e) {
            return h(d(this).pow(l(e)));
          }),
          (e.prototype.maskn = function (e) {
            return h(d(this).maskn(e));
          }),
          (e.prototype.eq = function (e) {
            return d(this).eq(l(e));
          }),
          (e.prototype.lt = function (e) {
            return d(this).lt(l(e));
          }),
          (e.prototype.lte = function (e) {
            return d(this).lte(l(e));
          }),
          (e.prototype.gt = function (e) {
            return d(this).gt(l(e));
          }),
          (e.prototype.gte = function (e) {
            return d(this).gte(l(e));
          }),
          (e.prototype.isZero = function () {
            return d(this).isZero();
          }),
          (e.prototype.toNumber = function () {
            try {
              return d(this).toNumber();
            } catch (e) {
              c.throwError("overflow", c.NUMERIC_FAULT, {
                operation: "setValue",
                fault: "overflow",
                details: e.message,
              });
            }
            return null;
          }),
          (e.prototype.toString = function () {
            return d(this).toString(10);
          }),
          (e.prototype.toHexString = function () {
            return this._hex;
          }),
          (e.isBigNumber = function (e) {
            return s.isType(e, "BigNumber");
          }),
          e
        );
      })();
      function y(e) {
        return p.isBigNumber(e) ? e : new p(e);
      }
      ((t.BigNumber = p), (t.bigNumberify = y));
    },
    6012: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return ((t["default"] = e), t);
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(r(3890));
      function o(e, t, r) {
        Object.defineProperty(e, t, { enumerable: !0, value: r, writable: !1 });
      }
      function a(e, t) {
        Object.defineProperty(e, "_ethersType", {
          configurable: !1,
          value: t,
          writable: !1,
        });
      }
      function s(e, t) {
        return e && e._ethersType === t;
      }
      function c(e) {
        var t = {},
          r = [];
        return (
          Object.keys(e).forEach(function (n) {
            var i = e[n];
            i instanceof Promise
              ? r.push(
                  i.then(function (e) {
                    return ((t[n] = e), null);
                  }),
                )
              : (t[n] = i);
          }),
          Promise.all(r).then(function () {
            return t;
          })
        );
      }
      function u(e, t) {
        ((e && "object" === typeof e) ||
          i.throwError("invalid object", i.INVALID_ARGUMENT, {
            argument: "object",
            value: e,
          }),
          Object.keys(e).forEach(function (r) {
            t[r] ||
              i.throwError("invalid object key - " + r, i.INVALID_ARGUMENT, {
                argument: "transaction",
                value: e,
                key: r,
              });
          }));
      }
      function f(e) {
        var t = {};
        for (var r in e) t[r] = e[r];
        return t;
      }
      ((t.defineReadOnly = o),
        (t.setType = a),
        (t.isType = s),
        (t.resolveProperties = c),
        (t.checkProperties = u),
        (t.shallowCopy = f));
      var l = { boolean: !0, number: !0, string: !0 };
      function h(e, t) {
        if (void 0 === e || null === e || l[typeof e]) return e;
        if (Array.isArray(e)) {
          var r = e.map(function (e) {
            return h(e, t);
          });
          return (t && Object.freeze(r), r);
        }
        if ("object" === typeof e) {
          if (s(e, "BigNumber")) return e;
          if (s(e, "Description")) return e;
          if (s(e, "Indexed")) return e;
          r = {};
          for (var n in e) {
            var i = e[n];
            void 0 !== i && o(r, n, h(i, t));
          }
          return (t && Object.freeze(r), r);
        }
        if ("function" === typeof e) return e;
        throw new Error("Cannot deepCopy " + typeof e);
      }
      function d(e, t) {
        ((e.super_ = t),
          (e.prototype = Object.create(t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })));
      }
      function p(e) {
        return function (t) {
          (d(t, e), o(t, "inherits", p(t)));
        };
      }
      ((t.deepCopy = h), (t.inheritable = p));
    },
    6013: function (e) {
      e.exports = JSON.parse(
        '{"COMPRESSED_TYPE_INVALID":"compressed should be a boolean","EC_PRIVATE_KEY_TYPE_INVALID":"private key should be a Buffer","EC_PRIVATE_KEY_LENGTH_INVALID":"private key length is invalid","EC_PRIVATE_KEY_RANGE_INVALID":"private key range is invalid","EC_PRIVATE_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting private key is invalid","EC_PRIVATE_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PRIVATE_KEY_EXPORT_DER_FAIL":"couldn\'t export to DER format","EC_PRIVATE_KEY_IMPORT_DER_FAIL":"couldn\'t import from DER format","EC_PUBLIC_KEYS_TYPE_INVALID":"public keys should be an Array","EC_PUBLIC_KEYS_LENGTH_INVALID":"public keys Array should have at least 1 element","EC_PUBLIC_KEY_TYPE_INVALID":"public key should be a Buffer","EC_PUBLIC_KEY_LENGTH_INVALID":"public key length is invalid","EC_PUBLIC_KEY_PARSE_FAIL":"the public key could not be parsed or is invalid","EC_PUBLIC_KEY_CREATE_FAIL":"private was invalid, try again","EC_PUBLIC_KEY_TWEAK_ADD_FAIL":"tweak out of range or resulting public key is invalid","EC_PUBLIC_KEY_TWEAK_MUL_FAIL":"tweak out of range","EC_PUBLIC_KEY_COMBINE_FAIL":"the sum of the public keys is not valid","ECDH_FAIL":"scalar was invalid (zero or overflow)","ECDSA_SIGNATURE_TYPE_INVALID":"signature should be a Buffer","ECDSA_SIGNATURE_LENGTH_INVALID":"signature length is invalid","ECDSA_SIGNATURE_PARSE_FAIL":"couldn\'t parse signature","ECDSA_SIGNATURE_PARSE_DER_FAIL":"couldn\'t parse DER signature","ECDSA_SIGNATURE_SERIALIZE_DER_FAIL":"couldn\'t serialize signature to DER format","ECDSA_SIGN_FAIL":"nonce generation function failed or private key is invalid","ECDSA_RECOVER_FAIL":"couldn\'t recover public key from signature","MSG32_TYPE_INVALID":"message should be a Buffer","MSG32_LENGTH_INVALID":"message length is invalid","OPTIONS_TYPE_INVALID":"options should be an Object","OPTIONS_DATA_TYPE_INVALID":"options.data should be a Buffer","OPTIONS_DATA_LENGTH_INVALID":"options.data length is invalid","OPTIONS_NONCEFN_TYPE_INVALID":"options.noncefn should be a Function","RECOVERY_ID_TYPE_INVALID":"recovery should be a Number","RECOVERY_ID_VALUE_INVALID":"recovery should have value between -1 and 4","TWEAK_TYPE_INVALID":"tweak should be a Buffer","TWEAK_LENGTH_INVALID":"tweak length is invalid"}',
      );
    },
    6014: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.keccak256 = i));
        const n = r(832);
        function i() {
          const t = n("keccak256");
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          return (
            i.forEach((r) => {
              e.isBuffer(r) ? t.update(r) : t.update(e.from(r, "utf8"));
            }),
            t.digest()
          );
        }
      }).call(this, r(2).Buffer);
    },
    6015: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(9);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RLP = void 0));
        var i = n(r(7652)),
          o = a(r(878));
        function a(e, t) {
          if ("function" == typeof WeakMap)
            var r = new WeakMap(),
              n = new WeakMap();
          return (a = function (e, t) {
            if (!t && e && e.__esModule) return e;
            var i,
              o,
              a = { __proto__: null, default: e };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((i = t ? n : r)) {
              if (i.has(e)) return i.get(e);
              i.set(e, a);
            }
            for (const r in e)
              "default" !== r &&
                {}.hasOwnProperty.call(e, r) &&
                ((o =
                  (i = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, r)) &&
                (o.get || o.set)
                  ? i(a, r, o)
                  : (a[r] = e[r]));
            return a;
          })(e, t);
        }
        class RLP {
          constructor(e) {
            this.profile = e;
          }
          encode(e) {
            const t = s(e, this.profile, "");
            return o.encode(t);
          }
          decode(e) {
            const t = o.decode(e);
            return c(t, this.profile, "");
          }
        }
        function s(e, t, r) {
          r = r ? r + "." + t.name : t.name;
          const n = t.kind;
          if (n instanceof RLP.ScalarKind) return n.data(e, r).encode();
          if (Array.isArray(n)) return n.map((t) => s(e[t.name], t, r));
          u(Array.isArray(e), r, "expected array");
          const i = n.item;
          return e.map((e, t) => s(e, { name: "#" + t, kind: i }, r));
        }
        function c(t, r, n) {
          n = n ? n + "." + r.name : r.name;
          const i = r.kind;
          if (i instanceof RLP.ScalarKind)
            return (
              i instanceof RLP.RawKind ||
                u(e.isBuffer(t), n, "expected Buffer"),
              i.buffer(t, n).decode()
            );
          if (Array.isArray(i)) {
            u(Array.isArray(t), n, "expected array");
            const e = t;
            return (
              u(
                e.length === i.length,
                n,
                `expected ${i.length} items, but got ${e.length}`,
              ),
              i.reduce((t, r, i) => ((t[r.name] = c(e[i], r, n)), t), {})
            );
          }
          u(Array.isArray(t), n, "expected array");
          const o = i.item;
          return t.map((e, t) => c(e, { name: "#" + t, kind: o }, n));
        }
        function u(e, t, r) {
          if (!e) throw new RLPError(`${t}: ${r}`);
        }
        function f(e) {
          return /^0x[0-9a-f]*$/i.test(e);
        }
        function l(e) {
          return /^[0-9]+$/.test(e);
        }
        ((t.RLP = RLP),
          (function (t) {
            class ScalarKind {}
            t.ScalarKind = ScalarKind;
            class RawKind extends ScalarKind {
              data(e, t) {
                return {
                  encode() {
                    return e;
                  },
                };
              }
              buffer(e, t) {
                return {
                  decode() {
                    return e;
                  },
                };
              }
            }
            t.RawKind = RawKind;
            class NumericKind extends ScalarKind {
              constructor(e) {
                (super(), (this.maxBytes = e));
              }
              data(t, r) {
                if (
                  (u(
                    "string" === typeof t || "number" === typeof t,
                    r,
                    "expected string or number",
                  ),
                  "string" === typeof t)
                ) {
                  const e = f(t),
                    n = l(t);
                  (u(
                    e || n,
                    r,
                    "expected non-negative integer in hex or dec string",
                  ),
                    e && u(t.length > 2, r, "expected valid hex string"));
                } else
                  u(
                    Number.isSafeInteger(t) && t >= 0,
                    r,
                    "expected non-negative safe integer",
                  );
                const n = new i.default(t);
                if (n.isZero())
                  return {
                    encode() {
                      return e.alloc(0);
                    },
                  };
                let o = n.toString(16);
                return (
                  o.length % 2 !== 0 && (o = "0" + o),
                  u(
                    !this.maxBytes || o.length <= 2 * this.maxBytes,
                    r,
                    `expected number in ${this.maxBytes} bytes`,
                  ),
                  {
                    encode() {
                      return e.from(o, "hex");
                    },
                  }
                );
              }
              buffer(e, t) {
                return (
                  u(
                    !this.maxBytes || e.length <= this.maxBytes,
                    t,
                    `expected less than ${this.maxBytes} bytes`,
                  ),
                  u(
                    0 === e.length || 0 !== e[0],
                    t,
                    "expected canonical integer (no leading zero bytes)",
                  ),
                  {
                    decode() {
                      if (0 === e.length) return 0;
                      const t = new i.default(e.toString("hex"), 16),
                        r = t.toNumber();
                      return Number.isSafeInteger(r)
                        ? r
                        : "0x" + t.toString(16);
                    },
                  }
                );
              }
            }
            t.NumericKind = NumericKind;
            class BlobKind extends ScalarKind {
              data(t, r) {
                return (
                  u(f(t), r, "expected hex string"),
                  u(t.length % 2 === 0, r, "expected even length hex"),
                  {
                    encode() {
                      return e.from(t.slice(2), "hex");
                    },
                  }
                );
              }
              buffer(e, t) {
                return {
                  decode() {
                    return "0x" + e.toString("hex");
                  },
                };
              }
            }
            t.BlobKind = BlobKind;
            class FixedBlobKind extends BlobKind {
              constructor(e) {
                (super(), (this.bytes = e));
              }
              data(e, t) {
                const r = super.data(e, t);
                return (
                  u(
                    e.length === 2 * this.bytes + 2,
                    t,
                    `expected hex string presents ${this.bytes} bytes`,
                  ),
                  r
                );
              }
              buffer(e, t) {
                const r = super.buffer(e, t);
                return (
                  u(e.length === this.bytes, t, `expected ${this.bytes} bytes`),
                  r
                );
              }
            }
            t.FixedBlobKind = FixedBlobKind;
            class NullableFixedBlobKind extends FixedBlobKind {
              data(t, r) {
                return t
                  ? super.data(t, r)
                  : {
                      encode() {
                        return e.alloc(0);
                      },
                    };
              }
              buffer(e, t) {
                return 0 === e.length
                  ? {
                      decode() {
                        return null;
                      },
                    }
                  : super.buffer(e, t);
              }
            }
            t.NullableFixedBlobKind = NullableFixedBlobKind;
            class CompactFixedBlobKind extends FixedBlobKind {
              data(t, r) {
                const n = super.data(t, r).encode();
                return {
                  encode() {
                    const t = n.findIndex((e) => 0 !== e);
                    return t >= 0 ? n.slice(t) : e.alloc(0);
                  },
                };
              }
              buffer(e, t) {
                (u(
                  e.length <= this.bytes,
                  t,
                  `expected less than ${this.bytes} bytes`,
                ),
                  u(
                    0 === e.length || 0 !== e[0],
                    t,
                    "expected no leading zero bytes",
                  ));
                const r = this.bytes;
                return {
                  decode() {
                    const t = "0".repeat(2 * (r - e.length));
                    return "0x" + t + e.toString("hex");
                  },
                };
              }
            }
            t.CompactFixedBlobKind = CompactFixedBlobKind;
          })(RLP || (t.RLP = RLP = {})));
        class RLPError extends Error {
          constructor(e) {
            (super(e), (this.name = RLPError.name));
          }
        }
      }).call(this, r(2).Buffer);
    },
    7625: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = n(r(105)),
        o = r(6009),
        a = n(r(129)),
        s = n(r(80)),
        c = r(4),
        u = r(27);
      i.default.config({ DECIMAL_PLACES: 50, EXPONENTIAL_AT: 50 });
      const f = 10,
        l = "0x0000000000000000000000000000456e65726779",
        h = {
          anonymous: !1,
          inputs: [
            { indexed: !0, name: "_from", type: "address" },
            { indexed: !0, name: "_to", type: "address" },
            { indexed: !1, name: "_value", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        d = new o.abi.Event(h);
      class VetNodeExplorer extends a.default {
        getAllowedTickers() {
          return ["VET", "VTHO"];
        }
        getApiPrefix() {
          return "";
        }
        getInfoUrl(e) {
          return `${this.getApiPrefix()}accounts/${e}`;
        }
        getInfoOptions() {
          return "";
        }
        normalizeBalance(e) {
          const t = String(e),
            r = t.match(/^[\d.]+e\+(\d+)$/);
          if (r) return Number(t).toPrecision(Number(r[1]) + 1);
          const n = t.match(/^([\d.]+)e-(\d+)$/);
          if (n) {
            const e = String(t).match(/^([\d.]+)e-(\d+)$/);
            return `0.${new Array(parseInt(e[2], 10)).join("0")}${e[1].replace(".", "")}`;
          }
          return t;
        }
        modifyInfoResponse(e) {
          const t = new i.default(e.balance).toString(),
            r = new i.default(e.energy).toString();
          return { balance: t, energy: r };
        }
        async getTransactions(e) {
          let t,
            { address: r, offset: n = 0, limit: i = this.defaultTxLimit } = e;
          this.latestBlock = await this.getLatestBlock();
          try {
            t = await super.getTransactions({
              address: r,
              offset: n,
              limit: i,
            });
          } catch (u) {
            var o, a;
            if (
              404 ===
              (null === u ||
              void 0 === u ||
              null === (o = u.errorData) ||
              void 0 === o ||
              null === (a = o.response) ||
              void 0 === a
                ? void 0
                : a.status)
            )
              return [];
            throw u;
          }
          const s = await this.request(
              this.getTransfersUrl(),
              this.getTransactionsMethod(),
              this.getTransfersParams(r, n, i),
              "GetTxs",
              this.getTransactionsOptions(),
            ),
            c = this.modifyTransfersResponse(s, r);
          return t.concat(c);
        }
        getTransfersParams(e, t, r) {
          (void 0 === t && (t = 0), void 0 === r && (r = this.defaultTxLimit));
          const n = this.addLeadingZeros(e),
            { number: i } = this.latestBlock,
            o = {
              range: { unit: "block", from: 0, to: i },
              options: { offset: t, limit: r },
              criteriaSet: [
                { address: l, topic0: n },
                { address: l, topic1: n },
                { address: l, topic2: n },
              ],
              order: "desc",
            };
          return JSON.stringify(o);
        }
        getTransactionsParams(e, t, r) {
          (void 0 === t && (t = 0), void 0 === r && (r = this.defaultTxLimit));
          const { number: n } = this.latestBlock,
            i = {
              range: { unit: "block", from: 1, to: n },
              options: { offset: t, limit: r },
              criteriaSet: [{ recipient: e }, { sender: e }],
              order: "desc",
            };
          return JSON.stringify(i);
        }
        getTransactionsMethod() {
          return "post";
        }
        getTransactionMethod() {
          return "get";
        }
        getTransactionUrl(e) {
          return `transactions/${e}/receipt`;
        }
        getTransactionParams(e) {
          return { txId: e, raw: !0 };
        }
        getTransactionsUrl(e) {
          return "logs/transfer";
        }
        getTransfersUrl() {
          return "logs/event";
        }
        modifyTransactionResponse(e, t, r) {
          void 0 === r && (r = this.wallet.ticker);
          const { meta: n, outputs: i } = e,
            o = i[0] && i[0].transfers[0];
          if (o)
            return this.modifyTransactionsResponse([{ meta: n, ...o }], t)[0];
          const a = i[0] && i[0].events[0];
          return a
            ? this.modifyTransfersResponse([{ meta: n, ...a }], t)[0]
            : void 0;
        }
        modifyTransactionsResponse(e, t) {
          const r = [];
          return (
            e.forEach((e) => {
              r.push(
                new s.default({
                  ticker: this.wallet.ticker,
                  name: this.wallet.name,
                  walletid: this.wallet.id,
                  txid: this.getTxHash(e),
                  fee: this.getTxFee(e),
                  feeTicker: this.wallet.parent,
                  direction: this.getTxDirection(t, e.sender),
                  otherSideAddress: this.getTxOtherSideAddress(
                    t,
                    e.sender,
                    e.recipient,
                  ),
                  amount: this.getTxValue(t, e.amount),
                  datetime: this.getTxDateTime(e.meta.blockTimestamp),
                  memo: this.getTxMemo(e),
                  confirmations: this.getTxConfirmations(e.meta.blockNumber),
                  alias: this.wallet.alias,
                }),
              );
            }),
            r
          );
        }
        modifyTransfersResponse(e, t, r) {
          void 0 === r && (r = "VTHO");
          const n = [];
          return (
            e.forEach((e) => {
              const {
                _from: i,
                _to: o,
                _value: a,
              } = d.decode(e.data, e.topics);
              n.push(
                new s.default({
                  ticker: r,
                  name: "VeThor",
                  walletid: (0, c.getTokenId)({
                    ticker: r,
                    contract: l,
                    parent: this.wallet.parent,
                  }),
                  txid: this.getTxHash(e),
                  fee: this.getTxFee(e),
                  feeTicker: this.wallet.parent,
                  direction: this.getTxDirection(t, i),
                  otherSideAddress: this.getTxOtherSideAddress(t, i, o),
                  amount: this.wallet.toCurrencyUnit(a),
                  datetime: this.getTxDateTime(e.meta.blockTimestamp),
                  memo: this.getTxMemo(e),
                  confirmations: this.getTxConfirmations(e.meta.blockNumber),
                  alias: this.wallet.alias,
                }),
              );
            }),
            n
          );
        }
        getTxHash(e) {
          return e.meta.txID;
        }
        getTxDirection(e, t) {
          return t.toLowerCase() !== e.toLowerCase();
        }
        getTxOtherSideAddress(e, t, r) {
          return t.toLowerCase() === e.toLowerCase() ? r : t;
        }
        getTxValue(e, t) {
          return this.wallet.toCurrencyUnit(new i.default(t).toString());
        }
        getTxDateTime(e) {
          return new Date(Number(e.toString() + "000"));
        }
        getTxConfirmations(e) {
          return this.latestBlock ? this.latestBlock.number - e : Number(f);
        }
        getLatestBlockUrl() {
          return this.getApiPrefix() + "blocks/best";
        }
        getSendTransactionParams(e) {
          return { raw: e };
        }
        getSendTransactionUrl() {
          return "transactions";
        }
        async sendTransaction(e) {
          const t = await this.request(
            this.getSendTransactionUrl(),
            this.getSendTransactionMethod(),
            this.getSendTransactionParams(e),
            u.SEND_TRANSACTION_TYPE,
            this.getSendOptions(),
          );
          return this.modifySendTransactionResponse(t);
        }
        modifySendTransactionResponse(e) {
          if ("undefined" === typeof e.id) throw new TypeError(e);
          return { txid: e.id };
        }
        addLeadingZeros(e) {
          const t = 66;
          let [r, n] = e.split("0x");
          r = "0x";
          const i = t - n.length;
          while (r.length < i) r += "0";
          return r + n;
        }
        removeLeadingZero(e) {
          return String(e).replace(/^0+/, "");
        }
        getTxFee() {
          return this.wallet.feeDefault;
        }
      }
      t.default = VetNodeExplorer;
    },
    7626: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.abi = void 0));
        var n = r(7627),
          i = r(4280);
        class Coder extends n.AbiCoder {
          constructor() {
            super((e, t) =>
              (e.match(/^u?int/) &&
                !Array.isArray(t) &&
                "object" !== typeof t) ||
              "BigNumber" === t.constructor.name
                ? t.toString()
                : t,
            );
          }
          encode(e, t) {
            try {
              return super.encode(e, t);
            } catch (r) {
              if (r.reason) throw new Error(r.reason);
              throw r;
            }
          }
          decode(e, t) {
            try {
              return super.decode(e, t);
            } catch (r) {
              if (r.reason) throw new Error(r.reason);
              throw r;
            }
          }
        }
        const o = new Coder();
        var a;
        (function (t) {
          function r(e, t) {
            return o.encode([e], [t]);
          }
          function a(e, t) {
            return o.decode([e], t)[0];
          }
          function s(e, t) {
            return o.encode(
              e.map((e) => e.type),
              t,
            );
          }
          function c(e, t) {
            const r = o.decode(
                e.map((e) => e.type),
                t,
              ),
              n = {};
            return (
              e.forEach((e, t) => {
                ((n[t] = r[t]), e.name && (n[e.name] = r[t]));
              }),
              n
            );
          }
          ((t.encodeParameter = r),
            (t.decodeParameter = a),
            (t.encodeParameters = s),
            (t.decodeParameters = c));
          class Function {
            constructor(e) {
              ((this.definition = e),
                (this.signature =
                  "0x" +
                  (0, i.keccak256)((0, n.formatSignature)(e))
                    .slice(0, 4)
                    .toString("hex")));
            }
            encode() {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              return this.signature + s(this.definition.inputs, t).slice(2);
            }
            decode(e) {
              return c(this.definition.outputs, e);
            }
          }
          t.Function = Function;
          class Event {
            constructor(e) {
              ((this.definition = e),
                (this.signature =
                  "0x" +
                  (0, i.keccak256)((0, n.formatSignature)(e)).toString("hex")));
            }
            encode(t) {
              const n = [];
              this.definition.anonymous || n.push(this.signature);
              for (const o of this.definition.inputs) {
                if (!o.indexed) continue;
                const a = t[o.name];
                if (void 0 === a || null === a) n.push(null);
                else {
                  let t;
                  if (u(o.type))
                    if ("string" === o.type)
                      t = "0x" + (0, i.keccak256)(a).toString("hex");
                    else {
                      if (
                        "string" !== typeof a ||
                        !/^0x[0-9a-f]+$/i.test(a) ||
                        a.length % 2 !== 0
                      )
                        throw new Error(`invalid ${o.type} value`);
                      t =
                        "0x" +
                        (0, i.keccak256)(e.from(a.slice(2), "hex")).toString(
                          "hex",
                        );
                    }
                  else t = r(o.type, a);
                  n.push(t);
                }
              }
              return n;
            }
            decode(e, t) {
              if (
                (this.definition.anonymous || (t = t.slice(1)),
                this.definition.inputs.filter((e) => e.indexed).length !==
                  t.length)
              )
                throw new Error("invalid topics count");
              const r = o.decode(
                  this.definition.inputs
                    .filter((e) => !e.indexed)
                    .map((e) => e.type),
                  e,
                ),
                n = {};
              return (
                this.definition.inputs.forEach((e, i) => {
                  if (e.indexed) {
                    const r = t.shift();
                    n[i] = u(e.type) ? r : a(e.type, r);
                  } else n[i] = r.shift();
                  e.name && (n[e.name] = n[i]);
                }),
                n
              );
            }
          }
          function u(e) {
            return "bytes" === e || "string" === e || e.endsWith("[]");
          }
          t.Event = Event;
        })(a || (t.abi = a = {}));
      }).call(this, r(2).Buffer);
    },
    7627: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function () {
            var e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
              };
            return function (t, r) {
              function n() {
                this.constructor = t;
              }
              (e(t, r),
                (t.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n())));
            };
          })(),
        i =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return ((t["default"] = e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(6010),
        a = i(r(3890)),
        s = r(7629),
        c = r(6011),
        u = r(3889),
        f = r(7633),
        l = r(6012),
        h = new RegExp(/^bytes([0-9]*)$/),
        d = new RegExp(/^(u?int)([0-9]*)$/),
        p = new RegExp(/^(.*)\[([0-9]*)\]$/);
      t.defaultCoerceFunc = function (e, t) {
        var r = e.match(d);
        return r && parseInt(r[2]) <= 48 ? t.toNumber() : t;
      };
      var y = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$"),
        E = new RegExp("^[A-Za-z_][A-Za-z0-9_]*$");
      function g(e) {
        return (
          e.match(/^uint($|[^1-9])/)
            ? (e = "uint256" + e.substring(4))
            : e.match(/^int($|[^1-9])/) && (e = "int256" + e.substring(3)),
          e
        );
      }
      function v(e, t) {
        var r = e;
        function n(e) {
          throw new Error(
            'unexpected character "' +
              r[e] +
              '" at position ' +
              e +
              ' in "' +
              r +
              '"',
          );
        }
        e = e.replace(/\s/g, " ");
        for (
          var i = { type: "", name: "", state: { allowType: !0 } },
            o = i,
            a = 0;
          a < e.length;
          a++
        ) {
          var s = e[a];
          switch (s) {
            case "(":
              (o.state.allowParams || n(a),
                (o.state.allowType = !1),
                (o.type = g(o.type)),
                (o.components = [
                  { type: "", name: "", parent: o, state: { allowType: !0 } },
                ]),
                (o = o.components[0]));
              break;
            case ")":
              (delete o.state,
                t && "indexed" === o.name && ((o.indexed = !0), (o.name = "")),
                (o.type = g(o.type)));
              var c = o;
              ((o = o.parent),
                o || n(a),
                delete c.parent,
                (o.state.allowParams = !1),
                (o.state.allowName = !0),
                (o.state.allowArray = !0));
              break;
            case ",":
              (delete o.state,
                t && "indexed" === o.name && ((o.indexed = !0), (o.name = "")),
                (o.type = g(o.type)));
              var u = {
                type: "",
                name: "",
                parent: o.parent,
                state: { allowType: !0 },
              };
              (o.parent.components.push(u), delete o.parent, (o = u));
              break;
            case " ":
              (o.state.allowType &&
                "" !== o.type &&
                ((o.type = g(o.type)),
                delete o.state.allowType,
                (o.state.allowName = !0),
                (o.state.allowParams = !0)),
                o.state.allowName &&
                  "" !== o.name &&
                  (t && "indexed" === o.name
                    ? ((o.indexed = !0), (o.name = ""))
                    : (o.state.allowName = !1)));
              break;
            case "[":
              (o.state.allowArray || n(a),
                (o.type += s),
                (o.state.allowArray = !1),
                (o.state.allowName = !1),
                (o.state.readArray = !0));
              break;
            case "]":
              (o.state.readArray || n(a),
                (o.type += s),
                (o.state.readArray = !1),
                (o.state.allowArray = !0),
                (o.state.allowName = !0));
              break;
            default:
              o.state.allowType
                ? ((o.type += s),
                  (o.state.allowParams = !0),
                  (o.state.allowArray = !0))
                : o.state.allowName
                  ? ((o.name += s), delete o.state.allowArray)
                  : o.state.readArray
                    ? (o.type += s)
                    : n(a);
          }
        }
        if (o.parent) throw new Error("unexpected eof");
        return (
          delete i.state,
          t && "indexed" === o.name && ((o.indexed = !0), (o.name = "")),
          (i.type = g(i.type)),
          i
        );
      }
      function _(e) {
        var t = { anonymous: !1, inputs: [], name: "", type: "event" },
          r = e.match(y);
        if (!r) throw new Error("invalid event: " + e);
        if (
          ((t.name = r[1].trim()),
          Y(r[2]).forEach(function (e) {
            ((e = v(e, !0)), (e.indexed = !!e.indexed), t.inputs.push(e));
          }),
          r[3].split(" ").forEach(function (e) {
            switch (e) {
              case "anonymous":
                t.anonymous = !0;
                break;
              case "":
                break;
              default:
                a.info("unknown modifier: " + e);
            }
          }),
          t.name && !t.name.match(E))
        )
          throw new Error('invalid identifier: "' + t.name + '"');
        return t;
      }
      function m(e) {
        var t = {
            constant: !1,
            gas: null,
            inputs: [],
            name: "",
            outputs: [],
            payable: !1,
            stateMutability: null,
            type: "function",
          },
          r = e.split("@");
        if (1 !== r.length) {
          if (r.length > 2) throw new Error("invalid signature");
          if (!r[1].match(/^[0-9]+$/)) throw new Error("invalid signature gas");
          ((t.gas = c.bigNumberify(r[1])), (e = r[0]));
        }
        r = e.split(" returns ");
        var n = r[0].match(y);
        if (!n) throw new Error("invalid signature");
        if (((t.name = n[1].trim()), !t.name.match(E)))
          throw new Error('invalid identifier: "' + n[1] + '"');
        if (
          (Y(n[2]).forEach(function (e) {
            t.inputs.push(v(e));
          }),
          n[3].split(" ").forEach(function (e) {
            switch (e) {
              case "constant":
                t.constant = !0;
                break;
              case "payable":
                ((t.payable = !0), (t.stateMutability = "payable"));
                break;
              case "pure":
                ((t.constant = !0), (t.stateMutability = "pure"));
                break;
              case "view":
                ((t.constant = !0), (t.stateMutability = "view"));
                break;
              case "external":
              case "public":
              case "":
                break;
              default:
                a.info("unknown modifier: " + e);
            }
          }),
          r.length > 1)
        ) {
          var i = r[1].match(y);
          if ("" != i[1].trim() || "" != i[3].trim())
            throw new Error("unexpected tokens");
          Y(i[2]).forEach(function (e) {
            t.outputs.push(v(e));
          });
        }
        if ("constructor" === t.name) {
          if (((t.type = "constructor"), t.outputs.length))
            throw new Error("constructor may not have outputs");
          (delete t.name, delete t.outputs);
        }
        return t;
      }
      function w(e) {
        return v(e, !0);
      }
      function b(e) {
        return H(t.defaultCoerceFunc, e).type;
      }
      function A(e) {
        return (
          e.name +
          "(" +
          e.inputs
            .map(function (e) {
              return b(e);
            })
            .join(",") +
          ")"
        );
      }
      function I(e) {
        if ("string" === typeof e)
          return (
            (e = e.replace(/\s/g, " ")),
            (e = e
              .replace(/\(/g, " (")
              .replace(/\)/g, ") ")
              .replace(/\s+/g, " ")),
            (e = e.trim()),
            "event " === e.substring(0, 6)
              ? _(e.substring(6).trim())
              : ("function " === e.substring(0, 9) && (e = e.substring(9)),
                m(e.trim()))
          );
        throw new Error("unknown signature");
      }
      ((t.parseParamType = w),
        (t.formatParamType = b),
        (t.formatSignature = A),
        (t.parseSignature = I));
      var N = (function () {
          function e(e, t, r, n, i) {
            ((this.coerceFunc = e),
              (this.name = t),
              (this.type = r),
              (this.localName = n),
              (this.dynamic = i));
          }
          return e;
        })(),
        T = (function (e) {
          function t(t) {
            var r =
              e.call(this, t.coerceFunc, t.name, t.type, void 0, t.dynamic) ||
              this;
            return (l.defineReadOnly(r, "coder", t), r);
          }
          return (
            n(t, e),
            (t.prototype.encode = function (e) {
              return this.coder.encode(e);
            }),
            (t.prototype.decode = function (e, t) {
              return this.coder.decode(e, t);
            }),
            t
          );
        })(N),
        L = (function (e) {
          function t(t, r) {
            return e.call(this, t, "null", "", r, !1) || this;
          }
          return (
            n(t, e),
            (t.prototype.encode = function (e) {
              return u.arrayify([]);
            }),
            (t.prototype.decode = function (e, t) {
              if (t > e.length) throw new Error("invalid null");
              return { consumed: 0, value: this.coerceFunc("null", void 0) };
            }),
            t
          );
        })(N),
        P = (function (e) {
          function t(t, r, n, i) {
            var o = this,
              a = (n ? "int" : "uint") + 8 * r;
            return (
              (o = e.call(this, t, a, a, i, !1) || this),
              (o.size = r),
              (o.signed = n),
              o
            );
          }
          return (
            n(t, e),
            (t.prototype.encode = function (e) {
              try {
                var t = c.bigNumberify(e);
                if (this.signed) {
                  var r = o.MaxUint256.maskn(8 * this.size - 1);
                  if (t.gt(r)) throw new Error("out-of-bounds");
                  if (((r = r.add(o.One).mul(o.NegativeOne)), t.lt(r)))
                    throw new Error("out-of-bounds");
                } else if (
                  t.lt(o.Zero) ||
                  t.gt(o.MaxUint256.maskn(8 * this.size))
                )
                  throw new Error("out-of-bounds");
                return (
                  (t = t.toTwos(8 * this.size).maskn(8 * this.size)),
                  this.signed && (t = t.fromTwos(8 * this.size).toTwos(256)),
                  u.padZeros(u.arrayify(t), 32)
                );
              } catch (n) {
                a.throwError("invalid number value", a.INVALID_ARGUMENT, {
                  arg: this.localName,
                  coderType: this.name,
                  value: e,
                });
              }
              return null;
            }),
            (t.prototype.decode = function (e, t) {
              e.length < t + 32 &&
                a.throwError(
                  "insufficient data for " + this.name + " type",
                  a.INVALID_ARGUMENT,
                  {
                    arg: this.localName,
                    coderType: this.name,
                    value: u.hexlify(e.slice(t, t + 32)),
                  },
                );
              var r = 32 - this.size,
                n = c.bigNumberify(e.slice(t + r, t + 32));
              return (
                (n = this.signed
                  ? n.fromTwos(8 * this.size)
                  : n.maskn(8 * this.size)),
                { consumed: 32, value: this.coerceFunc(this.name, n) }
              );
            }),
            t
          );
        })(N),
        C = new P(
          function (e, t) {
            return t;
          },
          32,
          !1,
          "none",
        ),
        S = (function (e) {
          function t(t, r) {
            return e.call(this, t, "bool", "bool", r, !1) || this;
          }
          return (
            n(t, e),
            (t.prototype.encode = function (e) {
              return C.encode(e ? 1 : 0);
            }),
            (t.prototype.decode = function (e, t) {
              try {
                var r = C.decode(e, t);
              } catch (n) {
                throw (
                  "insufficient data for uint256 type" === n.reason &&
                    a.throwError(
                      "insufficient data for boolean type",
                      a.INVALID_ARGUMENT,
                      {
                        arg: this.localName,
                        coderType: "boolean",
                        value: n.value,
                      },
                    ),
                  n
                );
              }
              return {
                consumed: r.consumed,
                value: this.coerceFunc("bool", !r.value.isZero()),
              };
            }),
            t
          );
        })(N),
        k = (function (e) {
          function t(t, r, n) {
            var i = this,
              o = "bytes" + r;
            return (
              (i = e.call(this, t, o, o, n, !1) || this),
              (i.length = r),
              i
            );
          }
          return (
            n(t, e),
            (t.prototype.encode = function (e) {
              var t = new Uint8Array(32);
              try {
                var r = u.arrayify(e);
                if (r.length !== this.length)
                  throw new Error("incorrect data length");
                t.set(r);
              } catch (n) {
                a.throwError(
                  "invalid " + this.name + " value",
                  a.INVALID_ARGUMENT,
                  {
                    arg: this.localName,
                    coderType: this.name,
                    value: n.value || e,
                  },
                );
              }
              return t;
            }),
            (t.prototype.decode = function (e, t) {
              return (
                e.length < t + 32 &&
                  a.throwError(
                    "insufficient data for " + name + " type",
                    a.INVALID_ARGUMENT,
                    {
                      arg: this.localName,
                      coderType: this.name,
                      value: u.hexlify(e.slice(t, t + 32)),
                    },
                  ),
                {
                  consumed: 32,
                  value: this.coerceFunc(
                    this.name,
                    u.hexlify(e.slice(t, t + this.length)),
                  ),
                }
              );
            }),
            t
          );
        })(N),
        D = (function (e) {
          function t(t, r) {
            return e.call(this, t, "address", "address", r, !1) || this;
          }
          return (
            n(t, e),
            (t.prototype.encode = function (e) {
              var t = new Uint8Array(32);
              try {
                t.set(u.arrayify(s.getAddress(e, !1)), 12);
              } catch (r) {
                a.throwError("invalid address", a.INVALID_ARGUMENT, {
                  arg: this.localName,
                  coderType: "address",
                  value: e,
                });
              }
              return t;
            }),
            (t.prototype.decode = function (e, t) {
              return (
                e.length < t + 32 &&
                  a.throwError(
                    "insufficuent data for address type",
                    a.INVALID_ARGUMENT,
                    {
                      arg: this.localName,
                      coderType: "address",
                      value: u.hexlify(e.slice(t, t + 32)),
                    },
                  ),
                {
                  consumed: 32,
                  value: this.coerceFunc(
                    "address",
                    s.getAddress(u.hexlify(e.slice(t + 12, t + 32)), !1),
                  ),
                }
              );
            }),
            t
          );
        })(N);
      function x(e) {
        var t = 32 * Math.ceil(e.length / 32),
          r = new Uint8Array(t - e.length);
        return u.concat([C.encode(e.length), e, r]);
      }
      function B(e, t, r) {
        e.length < t + 32 &&
          a.throwError(
            "insufficient data for dynamicBytes length",
            a.INVALID_ARGUMENT,
            {
              arg: r,
              coderType: "dynamicBytes",
              value: u.hexlify(e.slice(t, t + 32)),
            },
          );
        var n = C.decode(e, t).value;
        try {
          n = n.toNumber();
        } catch (i) {
          a.throwError("dynamic bytes count too large", a.INVALID_ARGUMENT, {
            arg: r,
            coderType: "dynamicBytes",
            value: n.toString(),
          });
        }
        return (
          e.length < t + 32 + n &&
            a.throwError(
              "insufficient data for dynamicBytes type",
              a.INVALID_ARGUMENT,
              {
                arg: r,
                coderType: "dynamicBytes",
                value: u.hexlify(e.slice(t, t + 32 + n)),
              },
            ),
          {
            consumed: 32 + 32 * Math.ceil(n / 32),
            value: e.slice(t + 32, t + 32 + n),
          }
        );
      }
      var R = (function (e) {
          function t(t, r) {
            return e.call(this, t, "bytes", "bytes", r, !0) || this;
          }
          return (
            n(t, e),
            (t.prototype.encode = function (e) {
              try {
                return x(u.arrayify(e));
              } catch (t) {
                a.throwError("invalid bytes value", a.INVALID_ARGUMENT, {
                  arg: this.localName,
                  coderType: "bytes",
                  value: t.value,
                });
              }
              return null;
            }),
            (t.prototype.decode = function (e, t) {
              var r = B(e, t, this.localName);
              return (
                (r.value = this.coerceFunc("bytes", u.hexlify(r.value))),
                r
              );
            }),
            t
          );
        })(N),
        K = (function (e) {
          function t(t, r) {
            return e.call(this, t, "string", "string", r, !0) || this;
          }
          return (
            n(t, e),
            (t.prototype.encode = function (e) {
              return (
                "string" !== typeof e &&
                  a.throwError("invalid string value", a.INVALID_ARGUMENT, {
                    arg: this.localName,
                    coderType: "string",
                    value: e,
                  }),
                x(f.toUtf8Bytes(e))
              );
            }),
            (t.prototype.decode = function (e, t) {
              var r = B(e, t, this.localName);
              return (
                (r.value = this.coerceFunc("string", f.toUtf8String(r.value))),
                r
              );
            }),
            t
          );
        })(N);
      function U(e) {
        return 32 * Math.ceil(e / 32);
      }
      function V(e, t) {
        if (Array.isArray(t));
        else if (t && "object" === typeof t) {
          var r = [];
          (e.forEach(function (e) {
            r.push(t[e.localName]);
          }),
            (t = r));
        } else
          a.throwError("invalid tuple value", a.INVALID_ARGUMENT, {
            coderType: "tuple",
            value: t,
          });
        e.length !== t.length &&
          a.throwError("types/value length mismatch", a.INVALID_ARGUMENT, {
            coderType: "tuple",
            value: t,
          });
        var n = [];
        e.forEach(function (e, r) {
          n.push({ dynamic: e.dynamic, value: e.encode(t[r]) });
        });
        var i = 0,
          o = 0;
        n.forEach(function (e) {
          e.dynamic
            ? ((i += 32), (o += U(e.value.length)))
            : (i += U(e.value.length));
        });
        var s = 0,
          c = i,
          u = new Uint8Array(i + o);
        return (
          n.forEach(function (e) {
            e.dynamic
              ? (u.set(C.encode(c), s),
                (s += 32),
                u.set(e.value, c),
                (c += U(e.value.length)))
              : (u.set(e.value, s), (s += U(e.value.length)));
          }),
          u
        );
      }
      function O(e, t, r) {
        var n = r,
          i = 0,
          o = [];
        return (
          e.forEach(function (e) {
            if (e.dynamic) {
              var a = C.decode(t, r),
                s = e.decode(t, n + a.value.toNumber());
              s.consumed = a.consumed;
            } else s = e.decode(t, r);
            (void 0 != s.value && o.push(s.value),
              (r += s.consumed),
              (i += s.consumed));
          }),
          e.forEach(function (e, t) {
            var r = e.localName;
            r &&
              ("length" === r && (r = "_length"),
              null == o[r] && (o[r] = o[t]));
          }),
          { value: o, consumed: i }
        );
      }
      var M = (function (e) {
          function t(t, r, n, i) {
            var o = this,
              a = r.type + "[" + (n >= 0 ? n : "") + "]",
              s = -1 === n || r.dynamic;
            return (
              (o = e.call(this, t, "array", a, i, s) || this),
              (o.coder = r),
              (o.length = n),
              o
            );
          }
          return (
            n(t, e),
            (t.prototype.encode = function (e) {
              Array.isArray(e) ||
                a.throwError("expected array value", a.INVALID_ARGUMENT, {
                  arg: this.localName,
                  coderType: "array",
                  value: e,
                });
              var t = this.length,
                r = new Uint8Array(0);
              (-1 === t && ((t = e.length), (r = C.encode(t))),
                a.checkArgumentCount(
                  t,
                  e.length,
                  " in coder array" +
                    (this.localName ? " " + this.localName : ""),
                ));
              for (var n = [], i = 0; i < e.length; i++) n.push(this.coder);
              return u.concat([r, V(n, e)]);
            }),
            (t.prototype.decode = function (e, t) {
              var r = 0,
                n = this.length;
              if (-1 === n) {
                try {
                  var i = C.decode(e, t);
                } catch (u) {
                  a.throwError(
                    "insufficient data for dynamic array length",
                    a.INVALID_ARGUMENT,
                    { arg: this.localName, coderType: "array", value: u.value },
                  );
                }
                try {
                  n = i.value.toNumber();
                } catch (u) {
                  a.throwError("array count too large", a.INVALID_ARGUMENT, {
                    arg: this.localName,
                    coderType: "array",
                    value: i.value.toString(),
                  });
                }
                ((r += i.consumed), (t += i.consumed));
              }
              for (var o = [], s = 0; s < n; s++) o.push(new T(this.coder));
              var c = O(o, e, t);
              return (
                (c.consumed += r),
                (c.value = this.coerceFunc(this.type, c.value)),
                c
              );
            }),
            t
          );
        })(N),
        G = (function (e) {
          function t(t, r, n) {
            var i = this,
              o = !1,
              a = [];
            r.forEach(function (e) {
              (e.dynamic && (o = !0), a.push(e.type));
            });
            var s = "tuple(" + a.join(",") + ")";
            return (
              (i = e.call(this, t, "tuple", s, n, o) || this),
              (i.coders = r),
              i
            );
          }
          return (
            n(t, e),
            (t.prototype.encode = function (e) {
              return V(this.coders, e);
            }),
            (t.prototype.decode = function (e, t) {
              var r = O(this.coders, e, t);
              return ((r.value = this.coerceFunc(this.type, r.value)), r);
            }),
            t
          );
        })(N);
      function Y(e) {
        e = e.trim();
        for (var t = [], r = "", n = 0, i = 0; i < e.length; i++) {
          var o = e[i];
          if ("," === o && 0 === n) (t.push(r), (r = ""));
          else if (((r += o), "(" === o)) n++;
          else if (")" === o && (n--, -1 === n))
            throw new Error("unbalanced parenthsis");
        }
        return (r && t.push(r), t);
      }
      var F = { address: D, bool: S, string: K, bytes: R };
      function j(e, t, r) {
        t || (t = []);
        var n = [];
        return (
          t.forEach(function (t) {
            n.push(H(e, t));
          }),
          new G(e, n, r)
        );
      }
      function H(e, t) {
        var r = F[t.type];
        if (r) return new r(e, t.name);
        var n = t.type.match(d);
        if (n) {
          var i = parseInt(n[2] || "256");
          return (
            (0 === i || i > 256 || i % 8 !== 0) &&
              a.throwError(
                "invalid " + n[1] + " bit length",
                a.INVALID_ARGUMENT,
                { arg: "param", value: t },
              ),
            new P(e, i / 8, "int" === n[1], t.name)
          );
        }
        n = t.type.match(h);
        if (n) {
          i = parseInt(n[1]);
          return (
            (0 === i || i > 32) &&
              a.throwError("invalid bytes length", a.INVALID_ARGUMENT, {
                arg: "param",
                value: t,
              }),
            new k(e, i, t.name)
          );
        }
        n = t.type.match(p);
        if (n) {
          i = parseInt(n[2] || "-1");
          return (
            (t = l.shallowCopy(t)),
            (t.type = n[1]),
            (t = l.deepCopy(t)),
            new M(e, H(e, t), i, t.name)
          );
        }
        return "tuple" === t.type.substring(0, 5)
          ? j(e, t.components, t.name)
          : "" === t.type
            ? new L(e, t.name)
            : (a.throwError("invalid type", a.INVALID_ARGUMENT, {
                arg: "type",
                value: t.type,
              }),
              null);
      }
      var z = (function () {
        function e(r) {
          (a.checkNew(this, e),
            r || (r = t.defaultCoerceFunc),
            l.defineReadOnly(this, "coerceFunc", r));
        }
        return (
          (e.prototype.encode = function (e, t) {
            e.length !== t.length &&
              a.throwError("types/values length mismatch", a.INVALID_ARGUMENT, {
                count: { types: e.length, values: t.length },
                value: { types: e, values: t },
              });
            var r = [];
            return (
              e.forEach(function (e) {
                var t = null;
                ((t = "string" === typeof e ? v(e) : e),
                  r.push(H(this.coerceFunc, t)));
              }, this),
              u.hexlify(new G(this.coerceFunc, r, "_").encode(t))
            );
          }),
          (e.prototype.decode = function (e, t) {
            var r = [];
            return (
              e.forEach(function (e) {
                var t = null;
                ((t = "string" === typeof e ? v(e) : l.deepCopy(e)),
                  r.push(H(this.coerceFunc, t)));
              }, this),
              new G(this.coerceFunc, r, "_").decode(u.arrayify(t), 0).value
            );
          }),
          e
        );
      })();
      ((t.AbiCoder = z), (t.defaultAbiCoder = new z()));
    },
    7628: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = "4.0.27-5"));
    },
    7629: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(r(49)),
        o = r(3889),
        a = r(7630),
        s = r(7632),
        c = r(3890);
      function u(e) {
        (("string" === typeof e && e.match(/^0x[0-9A-Fa-f]{40}$/)) ||
          c.throwError("invalid address", c.INVALID_ARGUMENT, {
            arg: "address",
            value: e,
          }),
          (e = e.toLowerCase()));
        for (
          var t = e.substring(2).split(""), r = new Uint8Array(40), n = 0;
          n < 40;
          n++
        )
          r[n] = t[n].charCodeAt(0);
        r = o.arrayify(a.keccak256(r));
        for (var i = 0; i < 40; i += 2)
          (r[i >> 1] >> 4 >= 8 && (t[i] = t[i].toUpperCase()),
            (15 & r[i >> 1]) >= 8 && (t[i + 1] = t[i + 1].toUpperCase()));
        return "0x" + t.join("");
      }
      var f = 9007199254740991;
      function l(e) {
        return Math.log10 ? Math.log10(e) : Math.log(e) / Math.LN10;
      }
      for (var h = {}, d = 0; d < 10; d++) h[String(d)] = String(d);
      for (d = 0; d < 26; d++) h[String.fromCharCode(65 + d)] = String(10 + d);
      var p = Math.floor(l(f));
      function y(e) {
        ((e = e.toUpperCase()),
          (e = e.substring(4) + e.substring(0, 2) + "00"));
        var t = "";
        e.split("").forEach(function (e) {
          t += h[e];
        });
        while (t.length >= p) {
          var r = t.substring(0, p);
          t = (parseInt(r, 10) % 97) + t.substring(r.length);
        }
        var n = String(98 - (parseInt(t, 10) % 97));
        while (n.length < 2) n = "0" + n;
        return n;
      }
      function E(e, t) {
        void 0 === t && (t = !0);
        var r = null;
        if (
          ("string" !== typeof e &&
            c.throwError("invalid address", c.INVALID_ARGUMENT, {
              arg: "address",
              value: e,
            }),
          e.match(/^(0x)?[0-9a-fA-F]{40}$/))
        )
          ("0x" !== e.substring(0, 2) && (e = "0x" + e),
            t
              ? ((r = u(e)),
                e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
                  r !== e &&
                  c.throwError("bad address checksum", c.INVALID_ARGUMENT, {
                    arg: "address",
                    value: e,
                  }))
              : (r = e));
        else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          (e.substring(2, 4) !== y(e) &&
            c.throwError("bad icap checksum", c.INVALID_ARGUMENT, {
              arg: "address",
              value: e,
            }),
            (r = new i.default.BN(e.substring(4), 36).toString(16)));
          while (r.length < 40) r = "0" + r;
          r = t ? u("0x" + r) : "0x" + r;
        } else
          c.throwError("invalid address", c.INVALID_ARGUMENT, {
            arg: "address",
            value: e,
          });
        return r;
      }
      function g(e) {
        var t = new i.default.BN(E(e).substring(2), 16)
          .toString(36)
          .toUpperCase();
        while (t.length < 30) t = "0" + t;
        return "XE" + y("XE00" + t) + t;
      }
      function v(e) {
        if (!e.from) throw new Error("missing from address");
        var t = e.nonce;
        return E(
          "0x" +
            a
              .keccak256(s.encode([E(e.from), o.stripZeros(o.hexlify(t))]))
              .substring(26),
        );
      }
      ((t.getAddress = E), (t.getIcapAddress = g), (t.getContractAddress = v));
    },
    7630: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(7631),
        i = r(3889);
      function o(e) {
        return "0x" + n.keccak_256(i.arrayify(e));
      }
      t.keccak256 = o;
    },
    7631: function (e, t, r) {
      (function (t, r) {
        /**
         * [js-sha3]{@link https://github.com/emn178/js-sha3}
         *
         * @version 0.5.7
         * @author Chen, Yi-Cyuan [emn178@gmail.com]
         * @copyright Chen, Yi-Cyuan 2015-2016
         * @license MIT
         */
        (function () {
          "use strict";
          var n = "object" === typeof window ? window : {},
            i =
              !n.JS_SHA3_NO_NODE_JS &&
              "object" === typeof t &&
              t.versions &&
              t.versions.node;
          i && (n = r);
          for (
            var o =
                !n.JS_SHA3_NO_COMMON_JS && "object" === typeof e && e.exports,
              a = "0123456789abcdef".split(""),
              s = [31, 7936, 2031616, 520093696],
              c = [1, 256, 65536, 16777216],
              u = [6, 1536, 393216, 100663296],
              f = [0, 8, 16, 24],
              l = [
                1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648,
                32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777,
                2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0,
                2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
                2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0,
                2147483658, 2147483648, 2147516545, 2147483648, 32896,
                2147483648, 2147483649, 0, 2147516424, 2147483648,
              ],
              h = [224, 256, 384, 512],
              d = [128, 256],
              p = ["hex", "buffer", "arrayBuffer", "array"],
              y = function (e, t, r) {
                return function (n) {
                  return new L(e, t, e).update(n)[r]();
                };
              },
              E = function (e, t, r) {
                return function (n, i) {
                  return new L(e, t, i).update(n)[r]();
                };
              },
              g = function (e, t) {
                var r = y(e, t, "hex");
                ((r.create = function () {
                  return new L(e, t, e);
                }),
                  (r.update = function (e) {
                    return r.create().update(e);
                  }));
                for (var n = 0; n < p.length; ++n) {
                  var i = p[n];
                  r[i] = y(e, t, i);
                }
                return r;
              },
              v = function (e, t) {
                var r = E(e, t, "hex");
                ((r.create = function (r) {
                  return new L(e, t, r);
                }),
                  (r.update = function (e, t) {
                    return r.create(t).update(e);
                  }));
                for (var n = 0; n < p.length; ++n) {
                  var i = p[n];
                  r[i] = E(e, t, i);
                }
                return r;
              },
              _ = [
                { name: "keccak", padding: c, bits: h, createMethod: g },
                { name: "sha3", padding: u, bits: h, createMethod: g },
                { name: "shake", padding: s, bits: d, createMethod: v },
              ],
              m = {},
              w = [],
              b = 0;
            b < _.length;
            ++b
          )
            for (var A = _[b], I = A.bits, N = 0; N < I.length; ++N) {
              var T = A.name + "_" + I[N];
              (w.push(T), (m[T] = A.createMethod(I[N], A.padding)));
            }
          function L(e, t, r) {
            ((this.blocks = []),
              (this.s = []),
              (this.padding = t),
              (this.outputBits = r),
              (this.reset = !0),
              (this.block = 0),
              (this.start = 0),
              (this.blockCount = (1600 - (e << 1)) >> 5),
              (this.byteCount = this.blockCount << 2),
              (this.outputBlocks = r >> 5),
              (this.extraBytes = (31 & r) >> 3));
            for (var n = 0; n < 50; ++n) this.s[n] = 0;
          }
          ((L.prototype.update = function (e) {
            var t = "string" !== typeof e;
            t && e.constructor === ArrayBuffer && (e = new Uint8Array(e));
            var r,
              n,
              i = e.length,
              o = this.blocks,
              a = this.byteCount,
              s = this.blockCount,
              c = 0,
              u = this.s;
            while (c < i) {
              if (this.reset)
                for (this.reset = !1, o[0] = this.block, r = 1; r < s + 1; ++r)
                  o[r] = 0;
              if (t)
                for (r = this.start; c < i && r < a; ++c)
                  o[r >> 2] |= e[c] << f[3 & r++];
              else
                for (r = this.start; c < i && r < a; ++c)
                  ((n = e.charCodeAt(c)),
                    n < 128
                      ? (o[r >> 2] |= n << f[3 & r++])
                      : n < 2048
                        ? ((o[r >> 2] |= (192 | (n >> 6)) << f[3 & r++]),
                          (o[r >> 2] |= (128 | (63 & n)) << f[3 & r++]))
                        : n < 55296 || n >= 57344
                          ? ((o[r >> 2] |= (224 | (n >> 12)) << f[3 & r++]),
                            (o[r >> 2] |=
                              (128 | ((n >> 6) & 63)) << f[3 & r++]),
                            (o[r >> 2] |= (128 | (63 & n)) << f[3 & r++]))
                          : ((n =
                              65536 +
                              (((1023 & n) << 10) |
                                (1023 & e.charCodeAt(++c)))),
                            (o[r >> 2] |= (240 | (n >> 18)) << f[3 & r++]),
                            (o[r >> 2] |=
                              (128 | ((n >> 12) & 63)) << f[3 & r++]),
                            (o[r >> 2] |=
                              (128 | ((n >> 6) & 63)) << f[3 & r++]),
                            (o[r >> 2] |= (128 | (63 & n)) << f[3 & r++])));
              if (((this.lastByteIndex = r), r >= a)) {
                for (this.start = r - a, this.block = o[s], r = 0; r < s; ++r)
                  u[r] ^= o[r];
                (P(u), (this.reset = !0));
              } else this.start = r;
            }
            return this;
          }),
            (L.prototype.finalize = function () {
              var e = this.blocks,
                t = this.lastByteIndex,
                r = this.blockCount,
                n = this.s;
              if (
                ((e[t >> 2] |= this.padding[3 & t]),
                this.lastByteIndex === this.byteCount)
              )
                for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
              for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
              P(n);
            }),
            (L.prototype.toString = L.prototype.hex =
              function () {
                this.finalize();
                var e,
                  t = this.blockCount,
                  r = this.s,
                  n = this.outputBlocks,
                  i = this.extraBytes,
                  o = 0,
                  s = 0,
                  c = "";
                while (s < n) {
                  for (o = 0; o < t && s < n; ++o, ++s)
                    ((e = r[o]),
                      (c +=
                        a[(e >> 4) & 15] +
                        a[15 & e] +
                        a[(e >> 12) & 15] +
                        a[(e >> 8) & 15] +
                        a[(e >> 20) & 15] +
                        a[(e >> 16) & 15] +
                        a[(e >> 28) & 15] +
                        a[(e >> 24) & 15]));
                  s % t === 0 && (P(r), (o = 0));
                }
                return (
                  i &&
                    ((e = r[o]),
                    i > 0 && (c += a[(e >> 4) & 15] + a[15 & e]),
                    i > 1 && (c += a[(e >> 12) & 15] + a[(e >> 8) & 15]),
                    i > 2 && (c += a[(e >> 20) & 15] + a[(e >> 16) & 15])),
                  c
                );
              }),
            (L.prototype.arrayBuffer = function () {
              this.finalize();
              var e,
                t = this.blockCount,
                r = this.s,
                n = this.outputBlocks,
                i = this.extraBytes,
                o = 0,
                a = 0,
                s = this.outputBits >> 3;
              e = i ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(s);
              var c = new Uint32Array(e);
              while (a < n) {
                for (o = 0; o < t && a < n; ++o, ++a) c[a] = r[o];
                a % t === 0 && P(r);
              }
              return (i && ((c[o] = r[o]), (e = e.slice(0, s))), e);
            }),
            (L.prototype.buffer = L.prototype.arrayBuffer),
            (L.prototype.digest = L.prototype.array =
              function () {
                this.finalize();
                var e,
                  t,
                  r = this.blockCount,
                  n = this.s,
                  i = this.outputBlocks,
                  o = this.extraBytes,
                  a = 0,
                  s = 0,
                  c = [];
                while (s < i) {
                  for (a = 0; a < r && s < i; ++a, ++s)
                    ((e = s << 2),
                      (t = n[a]),
                      (c[e] = 255 & t),
                      (c[e + 1] = (t >> 8) & 255),
                      (c[e + 2] = (t >> 16) & 255),
                      (c[e + 3] = (t >> 24) & 255));
                  s % r === 0 && P(n);
                }
                return (
                  o &&
                    ((e = s << 2),
                    (t = n[a]),
                    o > 0 && (c[e] = 255 & t),
                    o > 1 && (c[e + 1] = (t >> 8) & 255),
                    o > 2 && (c[e + 2] = (t >> 16) & 255)),
                  c
                );
              }));
          var P = function (e) {
            var t,
              r,
              n,
              i,
              o,
              a,
              s,
              c,
              u,
              f,
              h,
              d,
              p,
              y,
              E,
              g,
              v,
              _,
              m,
              w,
              b,
              A,
              I,
              N,
              T,
              L,
              P,
              C,
              S,
              k,
              D,
              x,
              B,
              R,
              K,
              U,
              V,
              O,
              M,
              G,
              Y,
              F,
              j,
              H,
              z,
              Z,
              W,
              $,
              q,
              J,
              X,
              Q,
              ee,
              te,
              re,
              ne,
              ie,
              oe,
              ae,
              se,
              ce,
              ue,
              fe;
            for (n = 0; n < 48; n += 2)
              ((i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
                (o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
                (a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
                (s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
                (c = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
                (u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
                (f = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
                (h = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
                (d = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]),
                (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]),
                (t = d ^ ((a << 1) | (s >>> 31))),
                (r = p ^ ((s << 1) | (a >>> 31))),
                (e[0] ^= t),
                (e[1] ^= r),
                (e[10] ^= t),
                (e[11] ^= r),
                (e[20] ^= t),
                (e[21] ^= r),
                (e[30] ^= t),
                (e[31] ^= r),
                (e[40] ^= t),
                (e[41] ^= r),
                (t = i ^ ((c << 1) | (u >>> 31))),
                (r = o ^ ((u << 1) | (c >>> 31))),
                (e[2] ^= t),
                (e[3] ^= r),
                (e[12] ^= t),
                (e[13] ^= r),
                (e[22] ^= t),
                (e[23] ^= r),
                (e[32] ^= t),
                (e[33] ^= r),
                (e[42] ^= t),
                (e[43] ^= r),
                (t = a ^ ((f << 1) | (h >>> 31))),
                (r = s ^ ((h << 1) | (f >>> 31))),
                (e[4] ^= t),
                (e[5] ^= r),
                (e[14] ^= t),
                (e[15] ^= r),
                (e[24] ^= t),
                (e[25] ^= r),
                (e[34] ^= t),
                (e[35] ^= r),
                (e[44] ^= t),
                (e[45] ^= r),
                (t = c ^ ((d << 1) | (p >>> 31))),
                (r = u ^ ((p << 1) | (d >>> 31))),
                (e[6] ^= t),
                (e[7] ^= r),
                (e[16] ^= t),
                (e[17] ^= r),
                (e[26] ^= t),
                (e[27] ^= r),
                (e[36] ^= t),
                (e[37] ^= r),
                (e[46] ^= t),
                (e[47] ^= r),
                (t = f ^ ((i << 1) | (o >>> 31))),
                (r = h ^ ((o << 1) | (i >>> 31))),
                (e[8] ^= t),
                (e[9] ^= r),
                (e[18] ^= t),
                (e[19] ^= r),
                (e[28] ^= t),
                (e[29] ^= r),
                (e[38] ^= t),
                (e[39] ^= r),
                (e[48] ^= t),
                (e[49] ^= r),
                (y = e[0]),
                (E = e[1]),
                (Z = (e[11] << 4) | (e[10] >>> 28)),
                (W = (e[10] << 4) | (e[11] >>> 28)),
                (C = (e[20] << 3) | (e[21] >>> 29)),
                (S = (e[21] << 3) | (e[20] >>> 29)),
                (se = (e[31] << 9) | (e[30] >>> 23)),
                (ce = (e[30] << 9) | (e[31] >>> 23)),
                (F = (e[40] << 18) | (e[41] >>> 14)),
                (j = (e[41] << 18) | (e[40] >>> 14)),
                (R = (e[2] << 1) | (e[3] >>> 31)),
                (K = (e[3] << 1) | (e[2] >>> 31)),
                (g = (e[13] << 12) | (e[12] >>> 20)),
                (v = (e[12] << 12) | (e[13] >>> 20)),
                ($ = (e[22] << 10) | (e[23] >>> 22)),
                (q = (e[23] << 10) | (e[22] >>> 22)),
                (k = (e[33] << 13) | (e[32] >>> 19)),
                (D = (e[32] << 13) | (e[33] >>> 19)),
                (ue = (e[42] << 2) | (e[43] >>> 30)),
                (fe = (e[43] << 2) | (e[42] >>> 30)),
                (te = (e[5] << 30) | (e[4] >>> 2)),
                (re = (e[4] << 30) | (e[5] >>> 2)),
                (U = (e[14] << 6) | (e[15] >>> 26)),
                (V = (e[15] << 6) | (e[14] >>> 26)),
                (_ = (e[25] << 11) | (e[24] >>> 21)),
                (m = (e[24] << 11) | (e[25] >>> 21)),
                (J = (e[34] << 15) | (e[35] >>> 17)),
                (X = (e[35] << 15) | (e[34] >>> 17)),
                (x = (e[45] << 29) | (e[44] >>> 3)),
                (B = (e[44] << 29) | (e[45] >>> 3)),
                (N = (e[6] << 28) | (e[7] >>> 4)),
                (T = (e[7] << 28) | (e[6] >>> 4)),
                (ne = (e[17] << 23) | (e[16] >>> 9)),
                (ie = (e[16] << 23) | (e[17] >>> 9)),
                (O = (e[26] << 25) | (e[27] >>> 7)),
                (M = (e[27] << 25) | (e[26] >>> 7)),
                (w = (e[36] << 21) | (e[37] >>> 11)),
                (b = (e[37] << 21) | (e[36] >>> 11)),
                (Q = (e[47] << 24) | (e[46] >>> 8)),
                (ee = (e[46] << 24) | (e[47] >>> 8)),
                (H = (e[8] << 27) | (e[9] >>> 5)),
                (z = (e[9] << 27) | (e[8] >>> 5)),
                (L = (e[18] << 20) | (e[19] >>> 12)),
                (P = (e[19] << 20) | (e[18] >>> 12)),
                (oe = (e[29] << 7) | (e[28] >>> 25)),
                (ae = (e[28] << 7) | (e[29] >>> 25)),
                (G = (e[38] << 8) | (e[39] >>> 24)),
                (Y = (e[39] << 8) | (e[38] >>> 24)),
                (A = (e[48] << 14) | (e[49] >>> 18)),
                (I = (e[49] << 14) | (e[48] >>> 18)),
                (e[0] = y ^ (~g & _)),
                (e[1] = E ^ (~v & m)),
                (e[10] = N ^ (~L & C)),
                (e[11] = T ^ (~P & S)),
                (e[20] = R ^ (~U & O)),
                (e[21] = K ^ (~V & M)),
                (e[30] = H ^ (~Z & $)),
                (e[31] = z ^ (~W & q)),
                (e[40] = te ^ (~ne & oe)),
                (e[41] = re ^ (~ie & ae)),
                (e[2] = g ^ (~_ & w)),
                (e[3] = v ^ (~m & b)),
                (e[12] = L ^ (~C & k)),
                (e[13] = P ^ (~S & D)),
                (e[22] = U ^ (~O & G)),
                (e[23] = V ^ (~M & Y)),
                (e[32] = Z ^ (~$ & J)),
                (e[33] = W ^ (~q & X)),
                (e[42] = ne ^ (~oe & se)),
                (e[43] = ie ^ (~ae & ce)),
                (e[4] = _ ^ (~w & A)),
                (e[5] = m ^ (~b & I)),
                (e[14] = C ^ (~k & x)),
                (e[15] = S ^ (~D & B)),
                (e[24] = O ^ (~G & F)),
                (e[25] = M ^ (~Y & j)),
                (e[34] = $ ^ (~J & Q)),
                (e[35] = q ^ (~X & ee)),
                (e[44] = oe ^ (~se & ue)),
                (e[45] = ae ^ (~ce & fe)),
                (e[6] = w ^ (~A & y)),
                (e[7] = b ^ (~I & E)),
                (e[16] = k ^ (~x & N)),
                (e[17] = D ^ (~B & T)),
                (e[26] = G ^ (~F & R)),
                (e[27] = Y ^ (~j & K)),
                (e[36] = J ^ (~Q & H)),
                (e[37] = X ^ (~ee & z)),
                (e[46] = se ^ (~ue & te)),
                (e[47] = ce ^ (~fe & re)),
                (e[8] = A ^ (~y & g)),
                (e[9] = I ^ (~E & v)),
                (e[18] = x ^ (~N & L)),
                (e[19] = B ^ (~T & P)),
                (e[28] = F ^ (~R & U)),
                (e[29] = j ^ (~K & V)),
                (e[38] = Q ^ (~H & Z)),
                (e[39] = ee ^ (~z & W)),
                (e[48] = ue ^ (~te & ne)),
                (e[49] = fe ^ (~re & ie)),
                (e[0] ^= l[n]),
                (e[1] ^= l[n + 1]));
          };
          if (o) e.exports = m;
          else for (b = 0; b < w.length; ++b) n[w[b]] = m[w[b]];
        })();
      }).call(this, r(18), r(13));
    },
    7632: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3889);
      function i(e) {
        var t = [];
        while (e) (t.unshift(255 & e), (e >>= 8));
        return t;
      }
      function o(e, t, r) {
        for (var n = 0, i = 0; i < r; i++) n = 256 * n + e[t + i];
        return n;
      }
      function a(e) {
        if (Array.isArray(e)) {
          var t = [];
          if (
            (e.forEach(function (e) {
              t = t.concat(a(e));
            }),
            t.length <= 55)
          )
            return (t.unshift(192 + t.length), t);
          var r = i(t.length);
          return (r.unshift(247 + r.length), r.concat(t));
        }
        var o = Array.prototype.slice.call(n.arrayify(e));
        if (1 === o.length && o[0] <= 127) return o;
        if (o.length <= 55) return (o.unshift(128 + o.length), o);
        r = i(o.length);
        return (r.unshift(183 + r.length), r.concat(o));
      }
      function s(e) {
        return n.hexlify(a(e));
      }
      function c(e, t, r, n) {
        var i = [];
        while (r < t + 1 + n) {
          var o = u(e, r);
          if ((i.push(o.result), (r += o.consumed), r > t + 1 + n))
            throw new Error("invalid rlp");
        }
        return { consumed: 1 + n, result: i };
      }
      function u(e, t) {
        if (0 === e.length) throw new Error("invalid rlp data");
        if (e[t] >= 248) {
          var r = e[t] - 247;
          if (t + 1 + r > e.length) throw new Error("too short");
          var i = o(e, t + 1, r);
          if (t + 1 + r + i > e.length) throw new Error("to short");
          return c(e, t, t + 1 + r, r + i);
        }
        if (e[t] >= 192) {
          i = e[t] - 192;
          if (t + 1 + i > e.length) throw new Error("invalid rlp data");
          return c(e, t, t + 1, i);
        }
        if (e[t] >= 184) {
          r = e[t] - 183;
          if (t + 1 + r > e.length) throw new Error("invalid rlp data");
          i = o(e, t + 1, r);
          if (t + 1 + r + i > e.length) throw new Error("invalid rlp data");
          var a = n.hexlify(e.slice(t + 1 + r, t + 1 + r + i));
          return { consumed: 1 + r + i, result: a };
        }
        if (e[t] >= 128) {
          i = e[t] - 128;
          if (t + 1 + i > e.length) throw new Error("invlaid rlp data");
          a = n.hexlify(e.slice(t + 1, t + 1 + i));
          return { consumed: 1 + i, result: a };
        }
        return { consumed: 1, result: n.hexlify(e[t]) };
      }
      function f(e) {
        var t = n.arrayify(e),
          r = u(t, 0);
        if (r.consumed !== t.length) throw new Error("invalid rlp data");
        return r.result;
      }
      ((t.encode = s), (t.decode = f));
    },
    7633: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n,
        i = r(6010),
        o = r(3890),
        a = r(3889);
      function s(e, t) {
        (void 0 === t && (t = n.current),
          t != n.current && (o.checkNormalize(), (e = e.normalize(t))));
        for (var r = [], i = 0; i < e.length; i++) {
          var s = e.charCodeAt(i);
          if (s < 128) r.push(s);
          else if (s < 2048) (r.push((s >> 6) | 192), r.push((63 & s) | 128));
          else if (55296 == (64512 & s)) {
            i++;
            var c = e.charCodeAt(i);
            if (i >= e.length || 56320 !== (64512 & c))
              throw new Error("invalid utf-8 string");
            ((s = 65536 + ((1023 & s) << 10) + (1023 & c)),
              r.push((s >> 18) | 240),
              r.push(((s >> 12) & 63) | 128),
              r.push(((s >> 6) & 63) | 128),
              r.push((63 & s) | 128));
          } else
            (r.push((s >> 12) | 224),
              r.push(((s >> 6) & 63) | 128),
              r.push((63 & s) | 128));
        }
        return a.arrayify(r);
      }
      function c(e, t) {
        e = a.arrayify(e);
        var r = "",
          n = 0;
        while (n < e.length) {
          var i = e[n++];
          if (i >> 7 !== 0) {
            var o = null,
              s = null;
            if (192 === (224 & i)) ((o = 1), (s = 127));
            else if (224 === (240 & i)) ((o = 2), (s = 2047));
            else {
              if (240 !== (248 & i)) {
                if (!t) {
                  if (128 === (192 & i))
                    throw new Error(
                      "invalid utf8 byte sequence; unexpected continuation byte",
                    );
                  throw new Error("invalid utf8 byte sequence; invalid prefix");
                }
                continue;
              }
              ((o = 3), (s = 65535));
            }
            if (n + o > e.length) {
              if (!t) throw new Error("invalid utf8 byte sequence; too short");
              for (; n < e.length; n++) if (e[n] >> 6 !== 2) break;
            } else {
              for (var c = i & ((1 << (8 - o - 1)) - 1), u = 0; u < o; u++) {
                var f = e[n];
                if (128 != (192 & f)) {
                  c = null;
                  break;
                }
                ((c = (c << 6) | (63 & f)), n++);
              }
              if (null !== c)
                if (c <= s) {
                  if (!t)
                    throw new Error("invalid utf8 byte sequence; overlong");
                } else if (c > 1114111) {
                  if (!t)
                    throw new Error("invalid utf8 byte sequence; out-of-range");
                } else if (c >= 55296 && c <= 57343) {
                  if (!t)
                    throw new Error(
                      "invalid utf8 byte sequence; utf-16 surrogate",
                    );
                } else
                  c <= 65535
                    ? (r += String.fromCharCode(c))
                    : ((c -= 65536),
                      (r += String.fromCharCode(
                        55296 + ((c >> 10) & 1023),
                        56320 + (1023 & c),
                      )));
              else if (!t)
                throw new Error(
                  "invalid utf8 byte sequence; invalid continuation byte",
                );
            }
          } else r += String.fromCharCode(i);
        }
        return r;
      }
      function u(e) {
        var t = s(e);
        if (t.length > 31)
          throw new Error("bytes32 string must be less than 32 bytes");
        return a.hexlify(a.concat([t, i.HashZero]).slice(0, 32));
      }
      function f(e) {
        var t = a.arrayify(e);
        if (32 !== t.length)
          throw new Error("invalid bytes32 - not 32 bytes long");
        if (0 !== t[31])
          throw new Error("invalid bytes32 sdtring - no null terminator");
        var r = 31;
        while (0 === t[r - 1]) r--;
        return c(t.slice(0, r));
      }
      ((function (e) {
        ((e["current"] = ""),
          (e["NFC"] = "NFC"),
          (e["NFD"] = "NFD"),
          (e["NFKC"] = "NFKC"),
          (e["NFKD"] = "NFKD"));
      })((n = t.UnicodeNormalizationForm || (t.UnicodeNormalizationForm = {}))),
        (t.toUtf8Bytes = s),
        (t.toUtf8String = c),
        (t.formatBytes32String = u),
        (t.parseBytes32String = f));
    },
    7634: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.blake2b256 = i));
        const n = r(4972);
        function i() {
          const t = n.blake2bInit(32, null);
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
            i[o] = arguments[o];
          return (
            i.forEach((r) => {
              e.isBuffer(r)
                ? n.blake2bUpdate(t, r)
                : n.blake2bUpdate(t, e.from(r, "utf8"));
            }),
            e.from(n.blake2bFinal(t))
          );
        }
      }).call(this, r(2).Buffer);
    },
    7635: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.secp256k1 = void 0));
        var n = r(2764);
        const i = r(7636);
        var o;
        (function (t) {
          function r() {
            for (;;) {
              const e = (0, n.randomBytes)(32);
              if (i.privateKeyVerify(e)) return e;
            }
          }
          function o(e) {
            return i.publicKeyCreate(e, !1);
          }
          function a(t, r) {
            const n = i.sign(t, r),
              o = e.alloc(65);
            return (n.signature.copy(o), (o[64] = n.recovery), o);
          }
          function s(e, t) {
            if (65 !== t.length) throw new Error("invalid signature");
            const r = t[64];
            if (0 !== r && 1 !== r)
              throw new Error("invalid signature recovery");
            return i.recover(e, t.slice(0, 64), r, !1);
          }
          ((t.generatePrivateKey = r),
            (t.derivePublicKey = o),
            (t.sign = a),
            (t.recover = s));
        })(o || (t.secp256k1 = o = {}));
      }).call(this, r(2).Buffer);
    },
    7636: function (e, t, r) {
      "use strict";
      e.exports = r(7637)(r(7640));
    },
    7637: function (e, t, r) {
      "use strict";
      var n = r(7638),
        i = r(7639),
        o = r(6013);
      function a(e, t) {
        return void 0 === e
          ? t
          : (n.isBoolean(e, o.COMPRESSED_TYPE_INVALID), e);
      }
      e.exports = function (e) {
        return {
          privateKeyVerify: function (t) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              32 === t.length && e.privateKeyVerify(t)
            );
          },
          privateKeyExport: function (t, r) {
            (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (r = a(r, !0)));
            var s = e.privateKeyExport(t, r);
            return i.privateKeyExport(t, s, r);
          },
          privateKeyImport: function (t) {
            if (
              (n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              (t = i.privateKeyImport(t)),
              t && 32 === t.length && e.privateKeyVerify(t))
            )
              return t;
            throw new Error(o.EC_PRIVATE_KEY_IMPORT_DER_FAIL);
          },
          privateKeyNegate: function (t) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              e.privateKeyNegate(t)
            );
          },
          privateKeyModInverse: function (t) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              e.privateKeyModInverse(t)
            );
          },
          privateKeyTweakAdd: function (t, r) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              e.privateKeyTweakAdd(t, r)
            );
          },
          privateKeyTweakMul: function (t, r) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              e.privateKeyTweakMul(t, r)
            );
          },
          publicKeyCreate: function (t, r) {
            return (
              n.isBuffer(t, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(t, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (r = a(r, !0)),
              e.publicKeyCreate(t, r)
            );
          },
          publicKeyConvert: function (t, r) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              (r = a(r, !0)),
              e.publicKeyConvert(t, r)
            );
          },
          publicKeyVerify: function (t) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              e.publicKeyVerify(t)
            );
          },
          publicKeyTweakAdd: function (t, r, i) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              (i = a(i, !0)),
              e.publicKeyTweakAdd(t, r, i)
            );
          },
          publicKeyTweakMul: function (t, r, i) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.TWEAK_TYPE_INVALID),
              n.isBufferLength(r, 32, o.TWEAK_LENGTH_INVALID),
              (i = a(i, !0)),
              e.publicKeyTweakMul(t, r, i)
            );
          },
          publicKeyCombine: function (t, r) {
            (n.isArray(t, o.EC_PUBLIC_KEYS_TYPE_INVALID),
              n.isLengthGTZero(t, o.EC_PUBLIC_KEYS_LENGTH_INVALID));
            for (var i = 0; i < t.length; ++i)
              (n.isBuffer(t[i], o.EC_PUBLIC_KEY_TYPE_INVALID),
                n.isBufferLength2(
                  t[i],
                  33,
                  65,
                  o.EC_PUBLIC_KEY_LENGTH_INVALID,
                ));
            return ((r = a(r, !0)), e.publicKeyCombine(t, r));
          },
          signatureNormalize: function (t) {
            return (
              n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              e.signatureNormalize(t)
            );
          },
          signatureExport: function (t) {
            (n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(t, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID));
            var r = e.signatureExport(t);
            return i.signatureExport(r);
          },
          signatureImport: function (t) {
            (n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isLengthGTZero(t, o.ECDSA_SIGNATURE_LENGTH_INVALID));
            var r = i.signatureImport(t);
            if (r) return e.signatureImport(r);
            throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL);
          },
          signatureImportLax: function (t) {
            (n.isBuffer(t, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isLengthGTZero(t, o.ECDSA_SIGNATURE_LENGTH_INVALID));
            var r = i.signatureImportLax(t);
            if (r) return e.signatureImport(r);
            throw new Error(o.ECDSA_SIGNATURE_PARSE_DER_FAIL);
          },
          sign: function (t, r, i) {
            (n.isBuffer(t, o.MSG32_TYPE_INVALID),
              n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID));
            var a = null,
              s = null;
            return (
              void 0 !== i &&
                (n.isObject(i, o.OPTIONS_TYPE_INVALID),
                void 0 !== i.data &&
                  (n.isBuffer(i.data, o.OPTIONS_DATA_TYPE_INVALID),
                  n.isBufferLength(i.data, 32, o.OPTIONS_DATA_LENGTH_INVALID),
                  (a = i.data)),
                void 0 !== i.noncefn &&
                  (n.isFunction(i.noncefn, o.OPTIONS_NONCEFN_TYPE_INVALID),
                  (s = i.noncefn))),
              e.sign(t, r, s, a)
            );
          },
          verify: function (t, r, i) {
            return (
              n.isBuffer(t, o.MSG32_TYPE_INVALID),
              n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              n.isBuffer(i, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(i, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              e.verify(t, r, i)
            );
          },
          recover: function (t, r, i, s) {
            return (
              n.isBuffer(t, o.MSG32_TYPE_INVALID),
              n.isBufferLength(t, 32, o.MSG32_LENGTH_INVALID),
              n.isBuffer(r, o.ECDSA_SIGNATURE_TYPE_INVALID),
              n.isBufferLength(r, 64, o.ECDSA_SIGNATURE_LENGTH_INVALID),
              n.isNumber(i, o.RECOVERY_ID_TYPE_INVALID),
              n.isNumberInInterval(i, -1, 4, o.RECOVERY_ID_VALUE_INVALID),
              (s = a(s, !0)),
              e.recover(t, r, i, s)
            );
          },
          ecdh: function (t, r) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              e.ecdh(t, r)
            );
          },
          ecdhUnsafe: function (t, r, i) {
            return (
              n.isBuffer(t, o.EC_PUBLIC_KEY_TYPE_INVALID),
              n.isBufferLength2(t, 33, 65, o.EC_PUBLIC_KEY_LENGTH_INVALID),
              n.isBuffer(r, o.EC_PRIVATE_KEY_TYPE_INVALID),
              n.isBufferLength(r, 32, o.EC_PRIVATE_KEY_LENGTH_INVALID),
              (i = a(i, !0)),
              e.ecdhUnsafe(t, r, i)
            );
          },
        };
      };
    },
    7638: function (e, t, r) {
      "use strict";
      (function (e) {
        var r = Object.prototype.toString;
        ((t.isArray = function (e, t) {
          if (!Array.isArray(e)) throw TypeError(t);
        }),
          (t.isBoolean = function (e, t) {
            if ("[object Boolean]" !== r.call(e)) throw TypeError(t);
          }),
          (t.isBuffer = function (t, r) {
            if (!e.isBuffer(t)) throw TypeError(r);
          }),
          (t.isFunction = function (e, t) {
            if ("[object Function]" !== r.call(e)) throw TypeError(t);
          }),
          (t.isNumber = function (e, t) {
            if ("[object Number]" !== r.call(e)) throw TypeError(t);
          }),
          (t.isObject = function (e, t) {
            if ("[object Object]" !== r.call(e)) throw TypeError(t);
          }),
          (t.isBufferLength = function (e, t, r) {
            if (e.length !== t) throw RangeError(r);
          }),
          (t.isBufferLength2 = function (e, t, r, n) {
            if (e.length !== t && e.length !== r) throw RangeError(n);
          }),
          (t.isLengthGTZero = function (e, t) {
            if (0 === e.length) throw RangeError(t);
          }),
          (t.isNumberInInterval = function (e, t, r, n) {
            if (e <= t || e >= r) throw RangeError(n);
          }));
      }).call(this, r(2).Buffer);
    },
    7639: function (e, t, r) {
      "use strict";
      var n = r(46).Buffer,
        i = r(2898),
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
        a = n.from([
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
      ((t.privateKeyExport = function (e, t, r) {
        var i = n.from(r ? o : a);
        return (e.copy(i, r ? 8 : 9), t.copy(i, r ? 181 : 214), i);
      }),
        (t.privateKeyImport = function (e) {
          var t = e.length,
            r = 0;
          if (
            !(t < r + 1 || 48 !== e[r]) &&
            ((r += 1), !(t < r + 1) && 128 & e[r])
          ) {
            var n = 127 & e[r];
            if (((r += 1), !(n < 1 || n > 2) && !(t < r + n))) {
              var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
              if (
                ((r += n),
                !(t < r + i) &&
                  !(
                    t < r + 3 ||
                    2 !== e[r] ||
                    1 !== e[r + 1] ||
                    1 !== e[r + 2]
                  ) &&
                  ((r += 3),
                  !(
                    t < r + 2 ||
                    4 !== e[r] ||
                    e[r + 1] > 32 ||
                    t < r + 2 + e[r + 1]
                  )))
              )
                return e.slice(r + 2, r + 2 + e[r + 1]);
            }
          }
        }),
        (t.signatureExport = function (e) {
          for (
            var t = n.concat([n.from([0]), e.r]), r = 33, o = 0;
            r > 1 && 0 === t[o] && !(128 & t[o + 1]);
            --r, ++o
          );
          for (
            var a = n.concat([n.from([0]), e.s]), s = 33, c = 0;
            s > 1 && 0 === a[c] && !(128 & a[c + 1]);
            --s, ++c
          );
          return i.encode(t.slice(o), a.slice(c));
        }),
        (t.signatureImport = function (e) {
          var t = n.alloc(32, 0),
            r = n.alloc(32, 0);
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
          } catch (a) {
            return;
          }
          return (
            o.r.copy(t, 32 - o.r.length),
            o.s.copy(r, 32 - o.s.length),
            { r: t, s: r }
          );
        }),
        (t.signatureImportLax = function (e) {
          var t = n.alloc(32, 0),
            r = n.alloc(32, 0),
            i = e.length,
            o = 0;
          if (48 === e[o++]) {
            var a = e[o++];
            if (!(128 & a && ((o += a - 128), o > i)) && 2 === e[o++]) {
              var s = e[o++];
              if (128 & s) {
                if (((a = s - 128), o + a > i)) return;
                for (; a > 0 && 0 === e[o]; o += 1, a -= 1);
                for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + e[o];
              }
              if (!(s > i - o)) {
                var c = o;
                if (((o += s), 2 === e[o++])) {
                  var u = e[o++];
                  if (128 & u) {
                    if (((a = u - 128), o + a > i)) return;
                    for (; a > 0 && 0 === e[o]; o += 1, a -= 1);
                    for (u = 0; a > 0; o += 1, a -= 1) u = (u << 8) + e[o];
                  }
                  if (!(u > i - o)) {
                    var f = o;
                    for (o += u; s > 0 && 0 === e[c]; s -= 1, c += 1);
                    if (!(s > 32)) {
                      var l = e.slice(c, c + s);
                      for (
                        l.copy(t, 32 - l.length);
                        u > 0 && 0 === e[f];
                        u -= 1, f += 1
                      );
                      if (!(u > 32)) {
                        var h = e.slice(f, f + u);
                        return (h.copy(r, 32 - h.length), { r: t, s: r });
                      }
                    }
                  }
                }
              }
            }
          }
        }));
    },
    7640: function (e, t, r) {
      "use strict";
      var n = r(46).Buffer,
        i = r(797),
        o = r(49),
        a = r(795).ec,
        s = r(6013),
        c = new a("secp256k1"),
        u = c.curve;
      function f(e, t) {
        var r = new o(t);
        if (r.cmp(u.p) >= 0) return null;
        r = r.toRed(u.red);
        var n = r.redSqr().redIMul(r).redIAdd(u.b).redSqrt();
        return (
          (3 === e) !== n.isOdd() && (n = n.redNeg()),
          c.keyPair({ pub: { x: r, y: n } })
        );
      }
      function l(e, t, r) {
        var n = new o(t),
          i = new o(r);
        if (n.cmp(u.p) >= 0 || i.cmp(u.p) >= 0) return null;
        if (
          ((n = n.toRed(u.red)),
          (i = i.toRed(u.red)),
          (6 === e || 7 === e) && i.isOdd() !== (7 === e))
        )
          return null;
        var a = n.redSqr().redIMul(n);
        return i.redSqr().redISub(a.redIAdd(u.b)).isZero()
          ? c.keyPair({ pub: { x: n, y: i } })
          : null;
      }
      function h(e) {
        var t = e[0];
        switch (t) {
          case 2:
          case 3:
            return 33 !== e.length ? null : f(t, e.slice(1, 33));
          case 4:
          case 6:
          case 7:
            return 65 !== e.length
              ? null
              : l(t, e.slice(1, 33), e.slice(33, 65));
          default:
            return null;
        }
      }
      ((t.privateKeyVerify = function (e) {
        var t = new o(e);
        return t.cmp(u.n) < 0 && !t.isZero();
      }),
        (t.privateKeyExport = function (e, t) {
          var r = new o(e);
          if (r.cmp(u.n) >= 0 || r.isZero())
            throw new Error(s.EC_PRIVATE_KEY_EXPORT_DER_FAIL);
          return n.from(c.keyFromPrivate(e).getPublic(t, !0));
        }),
        (t.privateKeyNegate = function (e) {
          var t = new o(e);
          return t.isZero()
            ? n.alloc(32)
            : u.n.sub(t).umod(u.n).toArrayLike(n, "be", 32);
        }),
        (t.privateKeyModInverse = function (e) {
          var t = new o(e);
          if (t.cmp(u.n) >= 0 || t.isZero())
            throw new Error(s.EC_PRIVATE_KEY_RANGE_INVALID);
          return t.invm(u.n).toArrayLike(n, "be", 32);
        }),
        (t.privateKeyTweakAdd = function (e, t) {
          var r = new o(t);
          if (r.cmp(u.n) >= 0) throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
          if ((r.iadd(new o(e)), r.cmp(u.n) >= 0 && r.isub(u.n), r.isZero()))
            throw new Error(s.EC_PRIVATE_KEY_TWEAK_ADD_FAIL);
          return r.toArrayLike(n, "be", 32);
        }),
        (t.privateKeyTweakMul = function (e, t) {
          var r = new o(t);
          if (r.cmp(u.n) >= 0 || r.isZero())
            throw new Error(s.EC_PRIVATE_KEY_TWEAK_MUL_FAIL);
          return (
            r.imul(new o(e)),
            r.cmp(u.n) && (r = r.umod(u.n)),
            r.toArrayLike(n, "be", 32)
          );
        }),
        (t.publicKeyCreate = function (e, t) {
          var r = new o(e);
          if (r.cmp(u.n) >= 0 || r.isZero())
            throw new Error(s.EC_PUBLIC_KEY_CREATE_FAIL);
          return n.from(c.keyFromPrivate(e).getPublic(t, !0));
        }),
        (t.publicKeyConvert = function (e, t) {
          var r = h(e);
          if (null === r) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          return n.from(r.getPublic(t, !0));
        }),
        (t.publicKeyVerify = function (e) {
          return null !== h(e);
        }),
        (t.publicKeyTweakAdd = function (e, t, r) {
          var i = h(e);
          if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          if (((t = new o(t)), t.cmp(u.n) >= 0))
            throw new Error(s.EC_PUBLIC_KEY_TWEAK_ADD_FAIL);
          return n.from(u.g.mul(t).add(i.pub).encode(!0, r));
        }),
        (t.publicKeyTweakMul = function (e, t, r) {
          var i = h(e);
          if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          if (((t = new o(t)), t.cmp(u.n) >= 0 || t.isZero()))
            throw new Error(s.EC_PUBLIC_KEY_TWEAK_MUL_FAIL);
          return n.from(i.pub.mul(t).encode(!0, r));
        }),
        (t.publicKeyCombine = function (e, t) {
          for (var r = new Array(e.length), i = 0; i < e.length; ++i)
            if (((r[i] = h(e[i])), null === r[i]))
              throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          for (var o = r[0].pub, a = 1; a < r.length; ++a) o = o.add(r[a].pub);
          if (o.isInfinity()) throw new Error(s.EC_PUBLIC_KEY_COMBINE_FAIL);
          return n.from(o.encode(!0, t));
        }),
        (t.signatureNormalize = function (e) {
          var t = new o(e.slice(0, 32)),
            r = new o(e.slice(32, 64));
          if (t.cmp(u.n) >= 0 || r.cmp(u.n) >= 0)
            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
          var i = n.from(e);
          return (
            1 === r.cmp(c.nh) &&
              u.n.sub(r).toArrayLike(n, "be", 32).copy(i, 32),
            i
          );
        }),
        (t.signatureExport = function (e) {
          var t = e.slice(0, 32),
            r = e.slice(32, 64);
          if (new o(t).cmp(u.n) >= 0 || new o(r).cmp(u.n) >= 0)
            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
          return { r: t, s: r };
        }),
        (t.signatureImport = function (e) {
          var t = new o(e.r);
          t.cmp(u.n) >= 0 && (t = new o(0));
          var r = new o(e.s);
          return (
            r.cmp(u.n) >= 0 && (r = new o(0)),
            n.concat([t.toArrayLike(n, "be", 32), r.toArrayLike(n, "be", 32)])
          );
        }),
        (t.sign = function (e, t, r, i) {
          if ("function" === typeof r) {
            var a = r;
            r = function (r) {
              var c = a(e, t, null, i, r);
              if (!n.isBuffer(c) || 32 !== c.length)
                throw new Error(s.ECDSA_SIGN_FAIL);
              return new o(c);
            };
          }
          var f = new o(t);
          if (f.cmp(u.n) >= 0 || f.isZero()) throw new Error(s.ECDSA_SIGN_FAIL);
          var l = c.sign(e, t, { canonical: !0, k: r, pers: i });
          return {
            signature: n.concat([
              l.r.toArrayLike(n, "be", 32),
              l.s.toArrayLike(n, "be", 32),
            ]),
            recovery: l.recoveryParam,
          };
        }),
        (t.verify = function (e, t, r) {
          var n = { r: t.slice(0, 32), s: t.slice(32, 64) },
            i = new o(n.r),
            a = new o(n.s);
          if (i.cmp(u.n) >= 0 || a.cmp(u.n) >= 0)
            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
          if (1 === a.cmp(c.nh) || i.isZero() || a.isZero()) return !1;
          var f = h(r);
          if (null === f) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          return c.verify(e, n, { x: f.pub.x, y: f.pub.y });
        }),
        (t.recover = function (e, t, r, i) {
          var a = { r: t.slice(0, 32), s: t.slice(32, 64) },
            f = new o(a.r),
            l = new o(a.s);
          if (f.cmp(u.n) >= 0 || l.cmp(u.n) >= 0)
            throw new Error(s.ECDSA_SIGNATURE_PARSE_FAIL);
          try {
            if (f.isZero() || l.isZero()) throw new Error();
            var h = c.recoverPubKey(e, a, r);
            return n.from(h.encode(!0, i));
          } catch (d) {
            throw new Error(s.ECDSA_RECOVER_FAIL);
          }
        }),
        (t.ecdh = function (e, r) {
          var n = t.ecdhUnsafe(e, r, !0);
          return i("sha256").update(n).digest();
        }),
        (t.ecdhUnsafe = function (e, t, r) {
          var i = h(e);
          if (null === i) throw new Error(s.EC_PUBLIC_KEY_PARSE_FAIL);
          var a = new o(t);
          if (a.cmp(u.n) >= 0 || a.isZero()) throw new Error(s.ECDH_FAIL);
          return n.from(i.pub.mul(a).encode(!0, r));
        }));
    },
    7641: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Keystore = void 0));
        var n = r(2764);
        const i = r(7642);
        var o;
        (function (t) {
          function r(e, t) {
            return new Promise((r) => {
              i.dump(
                t,
                e,
                (0, n.randomBytes)(32),
                (0, n.randomBytes)(16),
                {
                  cipher: "aes-128-ctr",
                  kdf: "scrypt",
                  kdfparams: { dklen: 32, memory: 28e7, n: 262144, p: 1, r: 8 },
                },
                r,
              );
            });
          }
          function o(t, r) {
            return new Promise((n, o) => {
              i.recover(r, c(s(t)), (t) => {
                if (!e.isBuffer(t)) return o(t);
                n(t);
              });
            });
          }
          function a(e) {
            try {
              return (c(s(e)), !0);
            } catch (t) {
              return !1;
            }
          }
          function s(e) {
            const t = (e) =>
              Object.keys(e).reduce((r, n) => {
                let i = e[n];
                return (
                  "object" === typeof i && (i = t(i)),
                  (r[n.toLowerCase()] = i),
                  r
                );
              }, {});
            return t(e);
          }
          function c(e) {
            if (1 !== e.version && 3 !== e.version)
              throw new Error("unsupported version");
            if (!/^[0-9a-f]{40}$/i.test(e.address))
              throw new Error("invalid address");
            if (
              !/^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/i.test(
                e.id,
              )
            )
              throw new Error("invalid id");
            if ("object" !== typeof e.crypto) throw new Error("invalid crypto");
            return e;
          }
          ((t.encrypt = r), (t.decrypt = o), (t.wellFormed = a));
        })(o || (t.Keystore = o = {}));
      }).call(this, r(2).Buffer);
    },
    7642: function (e, t, r) {
      "use strict";
      (function (t, n) {
        var i = "undefined" === typeof t || !t.nextTick || Boolean(t.browser),
          o = r(7643),
          a = r(7644),
          s = r(7646),
          c = r(832),
          u = r(381);
        function f(e) {
          return "function" === typeof e;
        }
        function l(e) {
          return c("keccak256").update(e).digest();
        }
        e.exports = {
          version: "1.1.0",
          browser: i,
          scrypt: null,
          crypto: r(i ? 3643 : 2764),
          constants: {
            cipher: "aes-128-ctr",
            ivBytes: 16,
            keyBytes: 32,
            pbkdf2: {
              c: 262144,
              dklen: 32,
              hash: "sha256",
              prf: "hmac-sha256",
            },
            scrypt: { memory: 28e7, dklen: 32, n: 262144, r: 8, p: 1 },
          },
          isHex: function (e) {
            return !(e.length % 2 !== 0 || !e.match(/^[0-9a-f]+$/i));
          },
          isBase64: function (e) {
            var t;
            return (
              !(e.length % 4 > 0 || e.match(/[^0-9a-z+\/=]/i)) &&
              ((t = e.indexOf("=")), !(-1 !== t && !e.slice(t).match(/={1,2}/)))
            );
          },
          str2buf: function (e, t) {
            return e && e.constructor === String
              ? (!t && this.isHex(e) && (t = "hex"),
                !t && this.isBase64(e) && (t = "base64"),
                n.from(e, t))
              : e;
          },
          isCipherAvailable: function (e) {
            return this.crypto.getCiphers().some(function (t) {
              return t === e;
            });
          },
          encrypt: function (e, t, r, i) {
            var o, a;
            if (((i = i || this.constants.cipher), !this.isCipherAvailable(i)))
              throw new Error(i + " is not available");
            return (
              (o = this.crypto.createCipheriv(
                i,
                this.str2buf(t),
                this.str2buf(r),
              )),
              (a = o.update(this.str2buf(e))),
              n.concat([a, o.final()])
            );
          },
          decrypt: function (e, t, r, i) {
            var o, a;
            if (((i = i || this.constants.cipher), !this.isCipherAvailable(i)))
              throw new Error(i + " is not available");
            return (
              (o = this.crypto.createDecipheriv(
                i,
                this.str2buf(t),
                this.str2buf(r),
              )),
              (a = o.update(this.str2buf(e))),
              n.concat([a, o.final()])
            );
          },
          privateKeyToAddress: function (e) {
            var t, r;
            return (
              (t = this.str2buf(e)),
              t.length < 32 && (t = n.concat([n.alloc(32 - t.length, 0), t])),
              (r = n.from(s.publicKeyCreate(t, !1).slice(1))),
              "0x" + l(r).slice(-20).toString("hex")
            );
          },
          getMAC: function (e, t) {
            if (void 0 !== e && null !== e && void 0 !== t && null !== t)
              return l(
                n.concat([this.str2buf(e).slice(16, 32), this.str2buf(t)]),
              ).toString("hex");
          },
          deriveKeyUsingScrypt: function (e, t, r, i) {
            var o = r.kdfparams.n || this.constants.scrypt.n,
              a = r.kdfparams.r || this.constants.scrypt.r,
              s = r.kdfparams.p || this.constants.scrypt.p,
              c = r.kdfparams.dklen || this.constants.scrypt.dklen;
            if (!f(i)) return n.from(u.syncScrypt(e, t, o, a, s, c));
            u.scrypt(e, t, o, a, s, c)
              .then(function (e) {
                i(n.from(e));
              })
              .catch(i);
          },
          deriveKey: function (e, t, r, i) {
            var a,
              s = this;
            if ("undefined" === typeof e || null === e || !t)
              throw new Error("Must provide password and salt to derive a key");
            return (
              (r = r || {}),
              (r.kdfparams = r.kdfparams || {}),
              (e = this.str2buf(e, "utf8")),
              (t = this.str2buf(t)),
              "scrypt" === r.kdf
                ? this.deriveKeyUsingScrypt(e, t, r, i)
                : ((a = r.kdfparams.prf || this.constants.pbkdf2.prf),
                  "hmac-sha256" === a && (a = "sha256"),
                  f(i)
                    ? void (this.crypto.pbkdf2
                        ? this.crypto.pbkdf2(
                            e,
                            t,
                            r.kdfparams.c || this.constants.pbkdf2.c,
                            r.kdfparams.dklen || this.constants.pbkdf2.dklen,
                            a,
                            function (e, t) {
                              if (e) return i(e);
                              i(t);
                            },
                          )
                        : setTimeout(function () {
                            i(
                              n.from(
                                o.codec.hex.fromBits(
                                  o.misc.pbkdf2(
                                    e.toString("utf8"),
                                    o.codec.hex.toBits(t.toString("hex")),
                                    r.kdfparams.c || s.constants.pbkdf2.c,
                                    8 *
                                      (r.kdfparams.dklen ||
                                        s.constants.pbkdf2.dklen),
                                  ),
                                ),
                                "hex",
                              ),
                            );
                          }, 0))
                    : this.crypto.pbkdf2Sync
                      ? this.crypto.pbkdf2Sync(
                          e,
                          t,
                          r.kdfparams.c || this.constants.pbkdf2.c,
                          r.kdfparams.dklen || this.constants.pbkdf2.dklen,
                          a,
                        )
                      : n.from(
                          o.codec.hex.fromBits(
                            o.misc.pbkdf2(
                              e.toString("utf8"),
                              o.codec.hex.toBits(t.toString("hex")),
                              r.kdfparams.c || s.constants.pbkdf2.c,
                              8 *
                                (r.kdfparams.dklen || s.constants.pbkdf2.dklen),
                            ),
                          ),
                          "hex",
                        ))
            );
          },
          create: function (e, t) {
            var r,
              n,
              i = this;
            function o(o) {
              var a = o.slice(0, r);
              return s.privateKeyVerify(a)
                ? { privateKey: a, iv: o.slice(r, r + n), salt: o.slice(r + n) }
                : i.create(e, t);
            }
            if (
              ((e = e || {}),
              (r = e.keyBytes || this.constants.keyBytes),
              (n = e.ivBytes || this.constants.ivBytes),
              !f(t))
            )
              return o(this.crypto.randomBytes(r + n + r));
            this.crypto.randomBytes(r + n + r, function (e, r) {
              if (e) return t(e);
              t(o(r));
            });
          },
          marshal: function (e, t, r, n, i) {
            var o, s, c;
            return (
              (i = i || {}),
              (i.kdfparams = i.kdfparams || {}),
              (c = i.cipher || this.constants.cipher),
              (o = this.encrypt(t, e.slice(0, 16), n, c).toString("hex")),
              (s = {
                address: this.privateKeyToAddress(t).slice(2),
                crypto: {
                  cipher: i.cipher || this.constants.cipher,
                  ciphertext: o,
                  cipherparams: { iv: n.toString("hex") },
                  mac: this.getMAC(e, o),
                },
                id: a.v4(),
                version: 3,
              }),
              "scrypt" === i.kdf
                ? ((s.crypto.kdf = "scrypt"),
                  (s.crypto.kdfparams = {
                    dklen: i.kdfparams.dklen || this.constants.scrypt.dklen,
                    n: i.kdfparams.n || this.constants.scrypt.n,
                    r: i.kdfparams.r || this.constants.scrypt.r,
                    p: i.kdfparams.p || this.constants.scrypt.p,
                    salt: r.toString("hex"),
                  }))
                : ((s.crypto.kdf = "pbkdf2"),
                  (s.crypto.kdfparams = {
                    c: i.kdfparams.c || this.constants.pbkdf2.c,
                    dklen: i.kdfparams.dklen || this.constants.pbkdf2.dklen,
                    prf: i.kdfparams.prf || this.constants.pbkdf2.prf,
                    salt: r.toString("hex"),
                  })),
              s
            );
          },
          dump: function (e, t, r, n, i, o) {
            if (
              ((i = i || {}),
              (n = this.str2buf(n)),
              (t = this.str2buf(t)),
              !f(o))
            )
              return this.marshal(this.deriveKey(e, r, i), t, r, n, i);
            this.deriveKey(
              e,
              r,
              i,
              function (e) {
                o(this.marshal(e, t, r, n, i));
              }.bind(this),
            );
          },
          recover: function (e, t, r) {
            var n,
              i,
              o,
              a,
              s,
              c = this;
            function u(e, r, i, o, a) {
              var s;
              if (c.getMAC(e, o) !== n.mac)
                throw new Error("message authentication code mismatch");
              return (
                (s =
                  "1" === t.version
                    ? l(e.slice(0, 16)).slice(0, 16)
                    : e.slice(0, 16)),
                c.decrypt(o, s, i, a)
              );
            }
            if (
              ((n = t.Crypto || t.crypto),
              (i = this.str2buf(n.cipherparams.iv)),
              (o = this.str2buf(n.kdfparams.salt)),
              (a = this.str2buf(n.ciphertext)),
              (s = n.cipher),
              "pbkdf2" === n.kdf && "hmac-sha256" !== n.kdfparams.prf)
            )
              throw new Error("PBKDF2 only supported with HMAC-SHA256");
            if (!f(r)) return u(this.deriveKey(e, o, n), o, i, a, s);
            this.deriveKey(e, o, n, function (e) {
              try {
                r(u(e, o, i, a, s));
              } catch (t) {
                r(t);
              }
            });
          },
          generateKeystoreFilename: function (e) {
            var r = "UTC--" + new Date().toISOString() + "--" + e;
            return ("win32" === t.platform && (r = r.split(":").join("-")), r);
          },
          exportToFile: function (e, t, n) {
            var i, o, a, s;
            return (
              (t = t || "keystore"),
              (i = this.generateKeystoreFilename(e.address)),
              (a = JSON.stringify(e)),
              this.browser
                ? f(n)
                  ? n(a)
                  : a
                : ((o = r(3077).join(t, i)),
                  (s = r(3139)),
                  f(n)
                    ? void s.writeFile(o, a, function (e) {
                        if (e) return n(e);
                        n(o);
                      })
                    : (s.writeFileSync(o, a), o))
            );
          },
          importFromFile: function (e, n, i) {
            var o, a, s, c;
            if (this.browser)
              throw new Error("method only available in Node.js");
            function u(e, t, r) {
              var n,
                i,
                o = null;
              for (n = 0, i = r.length; n < i; ++n)
                if (r[n].indexOf(t) > -1) {
                  ((o = s.join(e, r[n])),
                    c.lstatSync(o).isDirectory() && (o = s.join(o, r[n])));
                  break;
                }
              return o;
            }
            if (
              ((s = r(3077)),
              (c = r(3139)),
              (e = e.replace("0x", "")),
              (e = e.toLowerCase()),
              (n = n || s.join(t.env.HOME, ".ethereum")),
              (o = s.join(n, "keystore")),
              !f(i))
            ) {
              if (((a = u(o, e, c.readdirSync(o))), !a))
                throw new Error("could not find key file for address " + e);
              return JSON.parse(c.readFileSync(a));
            }
            c.readdir(o, function (t, r) {
              var n;
              return t
                ? i(t)
                : ((n = u(o, e, r)),
                  i(
                    n
                      ? JSON.parse(c.readFileSync(n))
                      : new Error("could not find key file for address " + e),
                  ));
            });
          },
        };
      }).call(this, r(18), r(2).Buffer);
    },
    7643: function (e, t, r) {
      "use strict";
      var n,
        i,
        o = {
          cipher: {},
          hash: {},
          keyexchange: {},
          mode: {},
          misc: {},
          codec: {},
          exception: {
            corrupt: function (e) {
              ((this.toString = function () {
                return "CORRUPT: " + this.message;
              }),
                (this.message = e));
            },
            invalid: function (e) {
              ((this.toString = function () {
                return "INVALID: " + this.message;
              }),
                (this.message = e));
            },
            bug: function (e) {
              ((this.toString = function () {
                return "BUG: " + this.message;
              }),
                (this.message = e));
            },
            notReady: function (e) {
              ((this.toString = function () {
                return "NOT READY: " + this.message;
              }),
                (this.message = e));
            },
          },
        };
      function a(e, t, r) {
        if (4 !== t.length)
          throw new o.exception.invalid("invalid aes block size");
        var n = e.b[r],
          i = t[0] ^ n[0],
          a = t[r ? 3 : 1] ^ n[1],
          s = t[2] ^ n[2];
        t = t[r ? 1 : 3] ^ n[3];
        var c,
          u,
          f,
          l,
          h = n.length / 4 - 2,
          d = 4,
          p = [0, 0, 0, 0];
        ((c = e.s[r]), (e = c[0]));
        var y = c[1],
          E = c[2],
          g = c[3],
          v = c[4];
        for (l = 0; l < h; l++)
          ((c =
            e[i >>> 24] ^
            y[(a >> 16) & 255] ^
            E[(s >> 8) & 255] ^
            g[255 & t] ^
            n[d]),
            (u =
              e[a >>> 24] ^
              y[(s >> 16) & 255] ^
              E[(t >> 8) & 255] ^
              g[255 & i] ^
              n[d + 1]),
            (f =
              e[s >>> 24] ^
              y[(t >> 16) & 255] ^
              E[(i >> 8) & 255] ^
              g[255 & a] ^
              n[d + 2]),
            (t =
              e[t >>> 24] ^
              y[(i >> 16) & 255] ^
              E[(a >> 8) & 255] ^
              g[255 & s] ^
              n[d + 3]),
            (d += 4),
            (i = c),
            (a = u),
            (s = f));
        for (l = 0; 4 > l; l++)
          ((p[r ? 3 & -l : l] =
            (v[i >>> 24] << 24) ^
            (v[(a >> 16) & 255] << 16) ^
            (v[(s >> 8) & 255] << 8) ^
            v[255 & t] ^
            n[d++]),
            (c = i),
            (i = a),
            (a = s),
            (s = t),
            (t = c));
        return p;
      }
      function s(e, t) {
        var r,
          n,
          i,
          o = e.F,
          a = e.b,
          s = o[0],
          c = o[1],
          u = o[2],
          f = o[3],
          l = o[4],
          h = o[5],
          d = o[6],
          p = o[7];
        for (r = 0; 64 > r; r++)
          (16 > r
            ? (n = t[r])
            : ((n = t[(r + 1) & 15]),
              (i = t[(r + 14) & 15]),
              (n = t[15 & r] =
                (((n >>> 7) ^ (n >>> 18) ^ (n >>> 3) ^ (n << 25) ^ (n << 14)) +
                  ((i >>> 17) ^
                    (i >>> 19) ^
                    (i >>> 10) ^
                    (i << 15) ^
                    (i << 13)) +
                  t[15 & r] +
                  t[(r + 9) & 15]) |
                0)),
            (n =
              n +
              p +
              ((l >>> 6) ^
                (l >>> 11) ^
                (l >>> 25) ^
                (l << 26) ^
                (l << 21) ^
                (l << 7)) +
              (d ^ (l & (h ^ d))) +
              a[r]),
            (p = d),
            (d = h),
            (h = l),
            (l = (f + n) | 0),
            (f = u),
            (u = c),
            (c = s),
            (s =
              (n +
                ((c & u) ^ (f & (c ^ u))) +
                ((c >>> 2) ^
                  (c >>> 13) ^
                  (c >>> 22) ^
                  (c << 30) ^
                  (c << 19) ^
                  (c << 10))) |
              0));
        ((o[0] = (o[0] + s) | 0),
          (o[1] = (o[1] + c) | 0),
          (o[2] = (o[2] + u) | 0),
          (o[3] = (o[3] + f) | 0),
          (o[4] = (o[4] + l) | 0),
          (o[5] = (o[5] + h) | 0),
          (o[6] = (o[6] + d) | 0),
          (o[7] = (o[7] + p) | 0));
      }
      function c(e, t) {
        var r,
          n = o.random.K[e],
          i = [];
        for (r in n) n.hasOwnProperty(r) && i.push(n[r]);
        for (r = 0; r < i.length; r++) i[r](t);
      }
      function u(e, t) {
        "undefined" !== typeof window &&
        window.performance &&
        "function" === typeof window.performance.now
          ? e.addEntropy(window.performance.now(), t, "loadtime")
          : e.addEntropy(new Date().valueOf(), t, "loadtime");
      }
      function f(e) {
        ((e.b = l(e).concat(l(e))), (e.L = new o.cipher.aes(e.b)));
      }
      function l(e) {
        for (var t = 0; 4 > t && ((e.h[t] = (e.h[t] + 1) | 0), !e.h[t]); t++);
        return e.L.encrypt(e.h);
      }
      function h(e, t) {
        return function () {
          t.apply(e, arguments);
        };
      }
      ((o.cipher.aes = function (e) {
        this.s[0][0][0] || this.O();
        var t,
          r,
          n,
          i,
          a = this.s[0][4],
          s = this.s[1];
        t = e.length;
        var c = 1;
        if (4 !== t && 6 !== t && 8 !== t)
          throw new o.exception.invalid("invalid aes key size");
        for (this.b = [(n = e.slice(0)), (i = [])], e = t; e < 4 * t + 28; e++)
          ((r = n[e - 1]),
            (0 === e % t || (8 === t && 4 === e % t)) &&
              ((r =
                (a[r >>> 24] << 24) ^
                (a[(r >> 16) & 255] << 16) ^
                (a[(r >> 8) & 255] << 8) ^
                a[255 & r]),
              0 === e % t &&
                ((r = (r << 8) ^ (r >>> 24) ^ (c << 24)),
                (c = (c << 1) ^ (283 * (c >> 7))))),
            (n[e] = n[e - t] ^ r));
        for (t = 0; e; t++, e--)
          ((r = n[3 & t ? e : e - 4]),
            (i[t] =
              4 >= e || 4 > t
                ? r
                : s[0][a[r >>> 24]] ^
                  s[1][a[(r >> 16) & 255]] ^
                  s[2][a[(r >> 8) & 255]] ^
                  s[3][a[255 & r]]));
      }),
        (o.cipher.aes.prototype = {
          encrypt: function (e) {
            return a(this, e, 0);
          },
          decrypt: function (e) {
            return a(this, e, 1);
          },
          s: [
            [[], [], [], [], []],
            [[], [], [], [], []],
          ],
          O: function () {
            var e,
              t,
              r,
              n,
              i,
              o,
              a,
              s = this.s[0],
              c = this.s[1],
              u = s[4],
              f = c[4],
              l = [],
              h = [];
            for (e = 0; 256 > e; e++)
              h[(l[e] = (e << 1) ^ (283 * (e >> 7))) ^ e] = e;
            for (t = r = 0; !u[t]; t ^= n || 1, r = h[r] || 1)
              for (
                o = r ^ (r << 1) ^ (r << 2) ^ (r << 3) ^ (r << 4),
                  o = (o >> 8) ^ (255 & o) ^ 99,
                  u[t] = o,
                  f[o] = t,
                  i = l[(e = l[(n = l[t])])],
                  a = (16843009 * i) ^ (65537 * e) ^ (257 * n) ^ (16843008 * t),
                  i = (257 * l[o]) ^ (16843008 * o),
                  e = 0;
                4 > e;
                e++
              )
                ((s[e][t] = i = (i << 24) ^ (i >>> 8)),
                  (c[e][o] = a = (a << 24) ^ (a >>> 8)));
            for (e = 0; 5 > e; e++)
              ((s[e] = s[e].slice(0)), (c[e] = c[e].slice(0)));
          },
        }),
        (o.bitArray = {
          bitSlice: function (e, t, r) {
            return (
              (e = o.bitArray.$(e.slice(t / 32), 32 - (31 & t)).slice(1)),
              void 0 === r ? e : o.bitArray.clamp(e, r - t)
            );
          },
          extract: function (e, t, r) {
            var n = Math.floor((-t - r) & 31);
            return (
              (-32 & ((t + r - 1) ^ t)
                ? (e[(t / 32) | 0] << (32 - n)) ^ (e[(t / 32 + 1) | 0] >>> n)
                : e[(t / 32) | 0] >>> n) &
              ((1 << r) - 1)
            );
          },
          concat: function (e, t) {
            if (0 === e.length || 0 === t.length) return e.concat(t);
            var r = e[e.length - 1],
              n = o.bitArray.getPartial(r);
            return 32 === n
              ? e.concat(t)
              : o.bitArray.$(t, n, 0 | r, e.slice(0, e.length - 1));
          },
          bitLength: function (e) {
            var t = e.length;
            return 0 === t ? 0 : 32 * (t - 1) + o.bitArray.getPartial(e[t - 1]);
          },
          clamp: function (e, t) {
            if (32 * e.length < t) return e;
            e = e.slice(0, Math.ceil(t / 32));
            var r = e.length;
            return (
              (t &= 31),
              0 < r &&
                t &&
                (e[r - 1] = o.bitArray.partial(
                  t,
                  e[r - 1] & (2147483648 >> (t - 1)),
                  1,
                )),
              e
            );
          },
          partial: function (e, t, r) {
            return 32 === e
              ? t
              : (r ? 0 | t : t << (32 - e)) + 1099511627776 * e;
          },
          getPartial: function (e) {
            return Math.round(e / 1099511627776) || 32;
          },
          equal: function (e, t) {
            if (o.bitArray.bitLength(e) !== o.bitArray.bitLength(t)) return !1;
            var r,
              n = 0;
            for (r = 0; r < e.length; r++) n |= e[r] ^ t[r];
            return 0 === n;
          },
          $: function (e, t, r, n) {
            var i;
            for (i = 0, void 0 === n && (n = []); 32 <= t; t -= 32)
              (n.push(r), (r = 0));
            if (0 === t) return n.concat(e);
            for (i = 0; i < e.length; i++)
              (n.push(r | (e[i] >>> t)), (r = e[i] << (32 - t)));
            return (
              (i = e.length ? e[e.length - 1] : 0),
              (e = o.bitArray.getPartial(i)),
              n.push(
                o.bitArray.partial((t + e) & 31, 32 < t + e ? r : n.pop(), 1),
              ),
              n
            );
          },
          i: function (e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]];
          },
          byteswapM: function (e) {
            var t, r;
            for (t = 0; t < e.length; ++t)
              ((r = e[t]),
                (e[t] =
                  (r >>> 24) |
                  ((r >>> 8) & 65280) |
                  ((65280 & r) << 8) |
                  (r << 24)));
            return e;
          },
        }),
        (o.codec.utf8String = {
          fromBits: function (e) {
            var t,
              r,
              n = "",
              i = o.bitArray.bitLength(e);
            for (t = 0; t < i / 8; t++)
              (0 === (3 & t) && (r = e[t / 4]),
                (n += String.fromCharCode(r >>> 24)),
                (r <<= 8));
            return decodeURIComponent(escape(n));
          },
          toBits: function (e) {
            e = unescape(encodeURIComponent(e));
            var t,
              r = [],
              n = 0;
            for (t = 0; t < e.length; t++)
              ((n = (n << 8) | e.charCodeAt(t)),
                3 === (3 & t) && (r.push(n), (n = 0)));
            return (3 & t && r.push(o.bitArray.partial(8 * (3 & t), n)), r);
          },
        }),
        (o.codec.hex = {
          fromBits: function (e) {
            var t,
              r = "";
            for (t = 0; t < e.length; t++)
              r += (0xf00000000000 + (0 | e[t])).toString(16).substr(4);
            return r.substr(0, o.bitArray.bitLength(e) / 4);
          },
          toBits: function (e) {
            var t,
              r,
              n = [];
            for (
              e = e.replace(/\s|0x/g, ""), r = e.length, e += "00000000", t = 0;
              t < e.length;
              t += 8
            )
              n.push(0 ^ parseInt(e.substr(t, 8), 16));
            return o.bitArray.clamp(n, 4 * r);
          },
        }),
        (o.codec.base32 = {
          B: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          X: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          BITS: 32,
          BASE: 5,
          REMAINING: 27,
          fromBits: function (e, t, r) {
            var n = o.codec.base32.BASE,
              i = o.codec.base32.REMAINING,
              a = "",
              s = 0,
              c = o.codec.base32.B,
              u = 0,
              f = o.bitArray.bitLength(e);
            for (r && (c = o.codec.base32.X), r = 0; a.length * n < f; )
              ((a += c.charAt((u ^ (e[r] >>> s)) >>> i)),
                s < n
                  ? ((u = e[r] << (n - s)), (s += i), r++)
                  : ((u <<= n), (s -= n)));
            for (; 7 & a.length && !t; ) a += "=";
            return a;
          },
          toBits: function (e, t) {
            e = e.replace(/\s|=/g, "").toUpperCase();
            var r,
              n,
              i = o.codec.base32.BITS,
              a = o.codec.base32.BASE,
              s = o.codec.base32.REMAINING,
              c = [],
              u = 0,
              f = o.codec.base32.B,
              l = 0,
              h = "base32";
            for (
              t && ((f = o.codec.base32.X), (h = "base32hex")), r = 0;
              r < e.length;
              r++
            ) {
              if (((n = f.indexOf(e.charAt(r))), 0 > n)) {
                if (!t)
                  try {
                    return o.codec.base32hex.toBits(e);
                  } catch (d) {}
                throw new o.exception.invalid("this isn't " + h + "!");
              }
              u > s
                ? ((u -= s), c.push(l ^ (n >>> u)), (l = n << (i - u)))
                : ((u += a), (l ^= n << (i - u)));
            }
            return (56 & u && c.push(o.bitArray.partial(56 & u, l, 1)), c);
          },
        }),
        (o.codec.base32hex = {
          fromBits: function (e, t) {
            return o.codec.base32.fromBits(e, t, 1);
          },
          toBits: function (e) {
            return o.codec.base32.toBits(e, 1);
          },
        }),
        (o.codec.base64 = {
          B: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          fromBits: function (e, t, r) {
            var n = "",
              i = 0,
              a = o.codec.base64.B,
              s = 0,
              c = o.bitArray.bitLength(e);
            for (r && (a = a.substr(0, 62) + "-_"), r = 0; 6 * n.length < c; )
              ((n += a.charAt((s ^ (e[r] >>> i)) >>> 26)),
                6 > i
                  ? ((s = e[r] << (6 - i)), (i += 26), r++)
                  : ((s <<= 6), (i -= 6)));
            for (; 3 & n.length && !t; ) n += "=";
            return n;
          },
          toBits: function (e, t) {
            e = e.replace(/\s|=/g, "");
            var r,
              n,
              i = [],
              a = 0,
              s = o.codec.base64.B,
              c = 0;
            for (t && (s = s.substr(0, 62) + "-_"), r = 0; r < e.length; r++) {
              if (((n = s.indexOf(e.charAt(r))), 0 > n))
                throw new o.exception.invalid("this isn't base64!");
              26 < a
                ? ((a -= 26), i.push(c ^ (n >>> a)), (c = n << (32 - a)))
                : ((a += 6), (c ^= n << (32 - a)));
            }
            return (56 & a && i.push(o.bitArray.partial(56 & a, c, 1)), i);
          },
        }),
        (o.codec.base64url = {
          fromBits: function (e) {
            return o.codec.base64.fromBits(e, 1, 1);
          },
          toBits: function (e) {
            return o.codec.base64.toBits(e, 1);
          },
        }),
        (o.hash.sha256 = function (e) {
          (this.b[0] || this.O(),
            e
              ? ((this.F = e.F.slice(0)),
                (this.A = e.A.slice(0)),
                (this.l = e.l))
              : this.reset());
        }),
        (o.hash.sha256.hash = function (e) {
          return new o.hash.sha256().update(e).finalize();
        }),
        (o.hash.sha256.prototype = {
          blockSize: 512,
          reset: function () {
            return (
              (this.F = this.Y.slice(0)),
              (this.A = []),
              (this.l = 0),
              this
            );
          },
          update: function (e) {
            "string" === typeof e && (e = o.codec.utf8String.toBits(e));
            var t,
              r = (this.A = o.bitArray.concat(this.A, e));
            if (
              ((t = this.l),
              (e = this.l = t + o.bitArray.bitLength(e)),
              9007199254740991 < e)
            )
              throw new o.exception.invalid(
                "Cannot hash more than 2^53 - 1 bits",
              );
            if ("undefined" !== typeof Uint32Array) {
              var n = new Uint32Array(r),
                i = 0;
              for (t = 512 + t - ((512 + t) & 511); t <= e; t += 512)
                (s(this, n.subarray(16 * i, 16 * (i + 1))), (i += 1));
              r.splice(0, 16 * i);
            } else
              for (t = 512 + t - ((512 + t) & 511); t <= e; t += 512)
                s(this, r.splice(0, 16));
            return this;
          },
          finalize: function () {
            var e,
              t = this.A,
              r = this.F;
            t = o.bitArray.concat(t, [o.bitArray.partial(1, 1)]);
            for (e = t.length + 2; 15 & e; e++) t.push(0);
            for (
              t.push(Math.floor(this.l / 4294967296)), t.push(0 | this.l);
              t.length;
            )
              s(this, t.splice(0, 16));
            return (this.reset(), r);
          },
          Y: [],
          b: [],
          O: function () {
            function e(e) {
              return (4294967296 * (e - Math.floor(e))) | 0;
            }
            for (var t, r, n = 0, i = 2; 64 > n; i++) {
              for (r = !0, t = 2; t * t <= i; t++)
                if (0 === i % t) {
                  r = !1;
                  break;
                }
              r &&
                (8 > n && (this.Y[n] = e(Math.pow(i, 0.5))),
                (this.b[n] = e(Math.pow(i, 1 / 3))),
                n++);
            }
          },
        }),
        (o.mode.ccm = {
          name: "ccm",
          G: [],
          listenProgress: function (e) {
            o.mode.ccm.G.push(e);
          },
          unListenProgress: function (e) {
            ((e = o.mode.ccm.G.indexOf(e)),
              -1 < e && o.mode.ccm.G.splice(e, 1));
          },
          fa: function (e) {
            var t,
              r = o.mode.ccm.G.slice();
            for (t = 0; t < r.length; t += 1) r[t](e);
          },
          encrypt: function (e, t, r, n, i) {
            var a,
              s = t.slice(0),
              c = o.bitArray,
              u = c.bitLength(r) / 8,
              f = c.bitLength(s) / 8;
            if (((i = i || 64), (n = n || []), 7 > u))
              throw new o.exception.invalid("ccm: iv must be at least 7 bytes");
            for (a = 2; 4 > a && f >>> (8 * a); a++);
            return (
              a < 15 - u && (a = 15 - u),
              (r = c.clamp(r, 8 * (15 - a))),
              (t = o.mode.ccm.V(e, t, r, n, i, a)),
              (s = o.mode.ccm.C(e, s, r, t, i, a)),
              c.concat(s.data, s.tag)
            );
          },
          decrypt: function (e, t, r, n, i) {
            ((i = i || 64), (n = n || []));
            var a = o.bitArray,
              s = a.bitLength(r) / 8,
              c = a.bitLength(t),
              u = a.clamp(t, c - i),
              f = a.bitSlice(t, c - i);
            c = (c - i) / 8;
            if (7 > s)
              throw new o.exception.invalid("ccm: iv must be at least 7 bytes");
            for (t = 2; 4 > t && c >>> (8 * t); t++);
            if (
              (t < 15 - s && (t = 15 - s),
              (r = a.clamp(r, 8 * (15 - t))),
              (u = o.mode.ccm.C(e, u, r, f, i, t)),
              (e = o.mode.ccm.V(e, u.data, r, n, i, t)),
              !a.equal(u.tag, e))
            )
              throw new o.exception.corrupt("ccm: tag doesn't match");
            return u.data;
          },
          na: function (e, t, r, n, i, a) {
            var s = [],
              c = o.bitArray,
              u = c.i;
            if (
              ((n = [
                c.partial(8, (t.length ? 64 : 0) | ((n - 2) << 2) | (a - 1)),
              ]),
              (n = c.concat(n, r)),
              (n[3] |= i),
              (n = e.encrypt(n)),
              t.length)
            )
              for (
                r = c.bitLength(t) / 8,
                  65279 >= r
                    ? (s = [c.partial(16, r)])
                    : 4294967295 >= r &&
                      (s = c.concat([c.partial(16, 65534)], [r])),
                  s = c.concat(s, t),
                  t = 0;
                t < s.length;
                t += 4
              )
                n = e.encrypt(u(n, s.slice(t, t + 4).concat([0, 0, 0])));
            return n;
          },
          V: function (e, t, r, n, i, a) {
            var s = o.bitArray,
              c = s.i;
            if (((i /= 8), i % 2 || 4 > i || 16 < i))
              throw new o.exception.invalid("ccm: invalid tag length");
            if (4294967295 < n.length || 4294967295 < t.length)
              throw new o.exception.bug(
                "ccm: can't deal with 4GiB or more data",
              );
            for (
              r = o.mode.ccm.na(e, n, r, i, s.bitLength(t) / 8, a), n = 0;
              n < t.length;
              n += 4
            )
              r = e.encrypt(c(r, t.slice(n, n + 4).concat([0, 0, 0])));
            return s.clamp(r, 8 * i);
          },
          C: function (e, t, r, n, i, a) {
            var s,
              c = o.bitArray;
            s = c.i;
            var u = t.length,
              f = c.bitLength(t),
              l = u / 50,
              h = l;
            if (
              ((r = c
                .concat([c.partial(8, a - 1)], r)
                .concat([0, 0, 0])
                .slice(0, 4)),
              (n = c.bitSlice(s(n, e.encrypt(r)), 0, i)),
              !u)
            )
              return { tag: n, data: [] };
            for (s = 0; s < u; s += 4)
              (s > l && (o.mode.ccm.fa(s / u), (l += h)),
                r[3]++,
                (i = e.encrypt(r)),
                (t[s] ^= i[0]),
                (t[s + 1] ^= i[1]),
                (t[s + 2] ^= i[2]),
                (t[s + 3] ^= i[3]));
            return { tag: n, data: c.clamp(t, f) };
          },
        }),
        (o.mode.ocb2 = {
          name: "ocb2",
          encrypt: function (e, t, r, n, i, a) {
            if (128 !== o.bitArray.bitLength(r))
              throw new o.exception.invalid("ocb iv must be 128 bits");
            var s,
              c = o.mode.ocb2.S,
              u = o.bitArray,
              f = u.i,
              l = [0, 0, 0, 0];
            r = c(e.encrypt(r));
            var h,
              d = [];
            for (n = n || [], i = i || 64, s = 0; s + 4 < t.length; s += 4)
              ((h = t.slice(s, s + 4)),
                (l = f(l, h)),
                (d = d.concat(f(r, e.encrypt(f(r, h))))),
                (r = c(r)));
            return (
              (h = t.slice(s)),
              (t = u.bitLength(h)),
              (s = e.encrypt(f(r, [0, 0, 0, t]))),
              (h = u.clamp(f(h.concat([0, 0, 0]), s), t)),
              (l = f(l, f(h.concat([0, 0, 0]), s))),
              (l = e.encrypt(f(l, f(r, c(r))))),
              n.length && (l = f(l, a ? n : o.mode.ocb2.pmac(e, n))),
              d.concat(u.concat(h, u.clamp(l, i)))
            );
          },
          decrypt: function (e, t, r, n, i, a) {
            if (128 !== o.bitArray.bitLength(r))
              throw new o.exception.invalid("ocb iv must be 128 bits");
            i = i || 64;
            var s,
              c,
              u = o.mode.ocb2.S,
              f = o.bitArray,
              l = f.i,
              h = [0, 0, 0, 0],
              d = u(e.encrypt(r)),
              p = o.bitArray.bitLength(t) - i,
              y = [];
            for (n = n || [], r = 0; r + 4 < p / 32; r += 4)
              ((s = l(d, e.decrypt(l(d, t.slice(r, r + 4))))),
                (h = l(h, s)),
                (y = y.concat(s)),
                (d = u(d)));
            if (
              ((c = p - 32 * r),
              (s = e.encrypt(l(d, [0, 0, 0, c]))),
              (s = l(s, f.clamp(t.slice(r), c).concat([0, 0, 0]))),
              (h = l(h, s)),
              (h = e.encrypt(l(h, l(d, u(d))))),
              n.length && (h = l(h, a ? n : o.mode.ocb2.pmac(e, n))),
              !f.equal(f.clamp(h, i), f.bitSlice(t, p)))
            )
              throw new o.exception.corrupt("ocb: tag doesn't match");
            return y.concat(f.clamp(s, c));
          },
          pmac: function (e, t) {
            var r,
              n = o.mode.ocb2.S,
              i = o.bitArray,
              a = i.i,
              s = [0, 0, 0, 0],
              c = e.encrypt([0, 0, 0, 0]);
            c = a(c, n(n(c)));
            for (r = 0; r + 4 < t.length; r += 4)
              ((c = n(c)), (s = a(s, e.encrypt(a(c, t.slice(r, r + 4))))));
            return (
              (r = t.slice(r)),
              128 > i.bitLength(r) &&
                ((c = a(c, n(c))), (r = i.concat(r, [-2147483648, 0, 0, 0]))),
              (s = a(s, r)),
              e.encrypt(a(n(a(c, n(c))), s))
            );
          },
          S: function (e) {
            return [
              (e[0] << 1) ^ (e[1] >>> 31),
              (e[1] << 1) ^ (e[2] >>> 31),
              (e[2] << 1) ^ (e[3] >>> 31),
              (e[3] << 1) ^ (135 * (e[0] >>> 31)),
            ];
          },
        }),
        (o.mode.gcm = {
          name: "gcm",
          encrypt: function (e, t, r, n, i) {
            var a = t.slice(0);
            return (
              (t = o.bitArray),
              (n = n || []),
              (e = o.mode.gcm.C(!0, e, a, n, r, i || 128)),
              t.concat(e.data, e.tag)
            );
          },
          decrypt: function (e, t, r, n, i) {
            var a = t.slice(0),
              s = o.bitArray,
              c = s.bitLength(a);
            if (
              ((i = i || 128),
              (n = n || []),
              i <= c
                ? ((t = s.bitSlice(a, c - i)), (a = s.bitSlice(a, 0, c - i)))
                : ((t = a), (a = [])),
              (e = o.mode.gcm.C(!1, e, a, n, r, i)),
              !s.equal(e.tag, t))
            )
              throw new o.exception.corrupt("gcm: tag doesn't match");
            return e.data;
          },
          ka: function (e, t) {
            var r,
              n,
              i,
              a,
              s,
              c = o.bitArray.i;
            for (i = [0, 0, 0, 0], a = t.slice(0), r = 0; 128 > r; r++) {
              for (
                (n = 0 !== (e[Math.floor(r / 32)] & (1 << (31 - (r % 32))))) &&
                  (i = c(i, a)),
                  s = 0 !== (1 & a[3]),
                  n = 3;
                0 < n;
                n--
              )
                a[n] = (a[n] >>> 1) | ((1 & a[n - 1]) << 31);
              ((a[0] >>>= 1), s && (a[0] ^= -520093696));
            }
            return i;
          },
          j: function (e, t, r) {
            var n,
              i = r.length;
            for (t = t.slice(0), n = 0; n < i; n += 4)
              ((t[0] ^= 4294967295 & r[n]),
                (t[1] ^= 4294967295 & r[n + 1]),
                (t[2] ^= 4294967295 & r[n + 2]),
                (t[3] ^= 4294967295 & r[n + 3]),
                (t = o.mode.gcm.ka(t, e)));
            return t;
          },
          C: function (e, t, r, n, i, a) {
            var s,
              c,
              u,
              f,
              l,
              h,
              d,
              p,
              y = o.bitArray;
            for (
              h = r.length,
                d = y.bitLength(r),
                p = y.bitLength(n),
                c = y.bitLength(i),
                s = t.encrypt([0, 0, 0, 0]),
                96 === c
                  ? ((i = i.slice(0)), (i = y.concat(i, [1])))
                  : ((i = o.mode.gcm.j(s, [0, 0, 0, 0], i)),
                    (i = o.mode.gcm.j(s, i, [
                      0,
                      0,
                      Math.floor(c / 4294967296),
                      4294967295 & c,
                    ]))),
                c = o.mode.gcm.j(s, [0, 0, 0, 0], n),
                l = i.slice(0),
                n = c.slice(0),
                e || (n = o.mode.gcm.j(s, c, r)),
                f = 0;
              f < h;
              f += 4
            )
              (l[3]++,
                (u = t.encrypt(l)),
                (r[f] ^= u[0]),
                (r[f + 1] ^= u[1]),
                (r[f + 2] ^= u[2]),
                (r[f + 3] ^= u[3]));
            return (
              (r = y.clamp(r, d)),
              e && (n = o.mode.gcm.j(s, c, r)),
              (e = [
                Math.floor(p / 4294967296),
                4294967295 & p,
                Math.floor(d / 4294967296),
                4294967295 & d,
              ]),
              (n = o.mode.gcm.j(s, n, e)),
              (u = t.encrypt(i)),
              (n[0] ^= u[0]),
              (n[1] ^= u[1]),
              (n[2] ^= u[2]),
              (n[3] ^= u[3]),
              { tag: y.bitSlice(n, 0, a), data: r }
            );
          },
        }),
        (o.misc.hmac = function (e, t) {
          this.W = t = t || o.hash.sha256;
          var r,
            n = [[], []],
            i = t.prototype.blockSize / 32;
          for (
            this.w = [new t(), new t()], e.length > i && (e = t.hash(e)), r = 0;
            r < i;
            r++
          )
            ((n[0][r] = 909522486 ^ e[r]), (n[1][r] = 1549556828 ^ e[r]));
          (this.w[0].update(n[0]),
            this.w[1].update(n[1]),
            (this.R = new t(this.w[0])));
        }),
        (o.misc.hmac.prototype.encrypt = o.misc.hmac.prototype.mac =
          function (e) {
            if (this.aa)
              throw new o.exception.invalid(
                "encrypt on already updated hmac called!",
              );
            return (this.update(e), this.digest(e));
          }),
        (o.misc.hmac.prototype.reset = function () {
          ((this.R = new this.W(this.w[0])), (this.aa = !1));
        }),
        (o.misc.hmac.prototype.update = function (e) {
          ((this.aa = !0), this.R.update(e));
        }),
        (o.misc.hmac.prototype.digest = function () {
          var e = this.R.finalize();
          e = new this.W(this.w[1]).update(e).finalize();
          return (this.reset(), e);
        }),
        (o.misc.pbkdf2 = function (e, t, r, n, i) {
          if (((r = r || 1e4), 0 > n || 0 > r))
            throw new o.exception.invalid("invalid params to pbkdf2");
          ("string" === typeof e && (e = o.codec.utf8String.toBits(e)),
            "string" === typeof t && (t = o.codec.utf8String.toBits(t)),
            (i = i || o.misc.hmac),
            (e = new i(e)));
          var a,
            s,
            c,
            u,
            f = [],
            l = o.bitArray;
          for (u = 1; 32 * f.length < (n || 1); u++) {
            for (i = a = e.encrypt(l.concat(t, [u])), s = 1; s < r; s++)
              for (a = e.encrypt(a), c = 0; c < a.length; c++) i[c] ^= a[c];
            f = f.concat(i);
          }
          return (n && (f = l.clamp(f, n)), f);
        }),
        (o.prng = function (e) {
          ((this.c = [new o.hash.sha256()]),
            (this.m = [0]),
            (this.P = 0),
            (this.H = {}),
            (this.N = 0),
            (this.U = {}),
            (this.Z = this.f = this.o = this.ha = 0),
            (this.b = [0, 0, 0, 0, 0, 0, 0, 0]),
            (this.h = [0, 0, 0, 0]),
            (this.L = void 0),
            (this.M = e),
            (this.D = !1),
            (this.K = { progress: {}, seeded: {} }),
            (this.u = this.ga = 0),
            (this.I = 1),
            (this.J = 2),
            (this.ca = 65536),
            (this.T = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024]),
            (this.da = 3e4),
            (this.ba = 80));
        }),
        (o.prng.prototype = {
          randomWords: function (e, t) {
            var r,
              n,
              i = [];
            if (((r = this.isReady(t)), r === this.u))
              throw new o.exception.notReady("generator isn't seeded");
            if (r & this.J) {
              ((r = !(r & this.I)), (n = []));
              var a,
                s = 0;
              for (
                this.Z = n[0] = new Date().valueOf() + this.da, a = 0;
                16 > a;
                a++
              )
                n.push((4294967296 * Math.random()) | 0);
              for (
                a = 0;
                a < this.c.length &&
                ((n = n.concat(this.c[a].finalize())),
                (s += this.m[a]),
                (this.m[a] = 0),
                r || !(this.P & (1 << a)));
                a++
              );
              for (
                this.P >= 1 << this.c.length &&
                  (this.c.push(new o.hash.sha256()), this.m.push(0)),
                  this.f -= s,
                  s > this.o && (this.o = s),
                  this.P++,
                  this.b = o.hash.sha256.hash(this.b.concat(n)),
                  this.L = new o.cipher.aes(this.b),
                  r = 0;
                4 > r && ((this.h[r] = (this.h[r] + 1) | 0), !this.h[r]);
                r++
              );
            }
            for (r = 0; r < e; r += 4)
              (0 === (r + 1) % this.ca && f(this),
                (n = l(this)),
                i.push(n[0], n[1], n[2], n[3]));
            return (f(this), i.slice(0, e));
          },
          setDefaultParanoia: function (e, t) {
            if (
              0 === e &&
              "Setting paranoia=0 will ruin your security; use it only for testing" !==
                t
            )
              throw new o.exception.invalid(
                "Setting paranoia=0 will ruin your security; use it only for testing",
              );
            this.M = e;
          },
          addEntropy: function (e, t, r) {
            r = r || "user";
            var n,
              i,
              a = new Date().valueOf(),
              s = this.H[r],
              u = this.isReady(),
              f = 0;
            switch (
              ((n = this.U[r]),
              void 0 === n && (n = this.U[r] = this.ha++),
              void 0 === s && (s = this.H[r] = 0),
              (this.H[r] = (this.H[r] + 1) % this.c.length),
              typeof e)
            ) {
              case "number":
                (void 0 === t && (t = 1),
                  this.c[s].update([n, this.N++, 1, t, a, 1, 0 | e]));
                break;
              case "object":
                if (
                  ((r = Object.prototype.toString.call(e)),
                  "[object Uint32Array]" === r)
                ) {
                  for (i = [], r = 0; r < e.length; r++) i.push(e[r]);
                  e = i;
                } else
                  for (
                    "[object Array]" !== r && (f = 1), r = 0;
                    r < e.length && !f;
                    r++
                  )
                    "number" !== typeof e[r] && (f = 1);
                if (!f) {
                  if (void 0 === t)
                    for (r = t = 0; r < e.length; r++)
                      for (i = e[r]; 0 < i; ) (t++, (i >>>= 1));
                  this.c[s].update([n, this.N++, 2, t, a, e.length].concat(e));
                }
                break;
              case "string":
                (void 0 === t && (t = e.length),
                  this.c[s].update([n, this.N++, 3, t, a, e.length]),
                  this.c[s].update(e));
                break;
              default:
                f = 1;
            }
            if (f)
              throw new o.exception.bug(
                "random: addEntropy only supports number, array of numbers or string",
              );
            ((this.m[s] += t),
              (this.f += t),
              u === this.u &&
                (this.isReady() !== this.u &&
                  c("seeded", Math.max(this.o, this.f)),
                c("progress", this.getProgress())));
          },
          isReady: function (e) {
            return (
              (e = this.T[void 0 !== e ? e : this.M]),
              this.o && this.o >= e
                ? this.m[0] > this.ba && new Date().valueOf() > this.Z
                  ? this.J | this.I
                  : this.I
                : this.f >= e
                  ? this.J | this.u
                  : this.u
            );
          },
          getProgress: function (e) {
            return (
              (e = this.T[e || this.M]),
              this.o >= e || this.f > e ? 1 : this.f / e
            );
          },
          startCollectors: function () {
            if (!this.D) {
              if (
                ((this.a = {
                  loadTimeCollector: h(this, this.ma),
                  mouseCollector: h(this, this.oa),
                  keyboardCollector: h(this, this.la),
                  accelerometerCollector: h(this, this.ea),
                  touchCollector: h(this, this.qa),
                }),
                window.addEventListener)
              )
                (window.addEventListener("load", this.a.loadTimeCollector, !1),
                  window.addEventListener(
                    "mousemove",
                    this.a.mouseCollector,
                    !1,
                  ),
                  window.addEventListener(
                    "keypress",
                    this.a.keyboardCollector,
                    !1,
                  ),
                  window.addEventListener(
                    "devicemotion",
                    this.a.accelerometerCollector,
                    !1,
                  ),
                  window.addEventListener(
                    "touchmove",
                    this.a.touchCollector,
                    !1,
                  ));
              else {
                if (!document.attachEvent)
                  throw new o.exception.bug("can't attach event");
                (document.attachEvent("onload", this.a.loadTimeCollector),
                  document.attachEvent("onmousemove", this.a.mouseCollector),
                  document.attachEvent("keypress", this.a.keyboardCollector));
              }
              this.D = !0;
            }
          },
          stopCollectors: function () {
            this.D &&
              (window.removeEventListener
                ? (window.removeEventListener(
                    "load",
                    this.a.loadTimeCollector,
                    !1,
                  ),
                  window.removeEventListener(
                    "mousemove",
                    this.a.mouseCollector,
                    !1,
                  ),
                  window.removeEventListener(
                    "keypress",
                    this.a.keyboardCollector,
                    !1,
                  ),
                  window.removeEventListener(
                    "devicemotion",
                    this.a.accelerometerCollector,
                    !1,
                  ),
                  window.removeEventListener(
                    "touchmove",
                    this.a.touchCollector,
                    !1,
                  ))
                : document.detachEvent &&
                  (document.detachEvent("onload", this.a.loadTimeCollector),
                  document.detachEvent("onmousemove", this.a.mouseCollector),
                  document.detachEvent("keypress", this.a.keyboardCollector)),
              (this.D = !1));
          },
          addEventListener: function (e, t) {
            this.K[e][this.ga++] = t;
          },
          removeEventListener: function (e, t) {
            var r,
              n,
              i = this.K[e],
              o = [];
            for (n in i) i.hasOwnProperty(n) && i[n] === t && o.push(n);
            for (r = 0; r < o.length; r++) ((n = o[r]), delete i[n]);
          },
          la: function () {
            u(this, 1);
          },
          oa: function (e) {
            var t, r;
            try {
              ((t = e.x || e.clientX || e.offsetX || 0),
                (r = e.y || e.clientY || e.offsetY || 0));
            } catch (n) {
              r = t = 0;
            }
            (0 != t && 0 != r && this.addEntropy([t, r], 2, "mouse"),
              u(this, 0));
          },
          qa: function (e) {
            ((e = e.touches[0] || e.changedTouches[0]),
              this.addEntropy(
                [e.pageX || e.clientX, e.pageY || e.clientY],
                1,
                "touch",
              ),
              u(this, 0));
          },
          ma: function () {
            u(this, 2);
          },
          ea: function (e) {
            if (
              ((e =
                e.accelerationIncludingGravity.x ||
                e.accelerationIncludingGravity.y ||
                e.accelerationIncludingGravity.z),
              window.orientation)
            ) {
              var t = window.orientation;
              "number" === typeof t && this.addEntropy(t, 1, "accelerometer");
            }
            (e && this.addEntropy(e, 2, "accelerometer"), u(this, 0));
          },
        }),
        (o.random = new o.prng(6)));
      e: try {
        var d, p, y, E;
        if ((E = e.exports)) {
          var g;
          try {
            g = r(2764);
          } catch (v) {
            g = null;
          }
          E = p = g;
        }
        if (E && p.randomBytes)
          ((d = p.randomBytes(128)),
            (d = new Uint32Array(new Uint8Array(d).buffer)),
            o.random.addEntropy(d, 1024, "crypto['randomBytes']"));
        else if (
          "undefined" !== typeof window &&
          "undefined" !== typeof Uint32Array
        ) {
          if (
            ((y = new Uint32Array(32)),
            window.crypto && window.crypto.getRandomValues)
          )
            window.crypto.getRandomValues(y);
          else {
            if (!window.msCrypto || !window.msCrypto.getRandomValues) break e;
            window.msCrypto.getRandomValues(y);
          }
          o.random.addEntropy(y, 1024, "crypto['getRandomValues']");
        }
      } catch (v) {
        "undefined" !== typeof window &&
          window.console &&
          (console.log(
            "There was an error collecting entropy from the browser:",
          ),
          console.log(v));
      }
      ((o.json = {
        defaults: {
          v: 1,
          iter: 1e4,
          ks: 128,
          ts: 64,
          mode: "ccm",
          adata: "",
          cipher: "aes",
        },
        ja: function (e, t, r, n) {
          ((r = r || {}), (n = n || {}));
          var i,
            a = o.json,
            s = a.g({ iv: o.random.randomWords(4, 0) }, a.defaults);
          if (
            (a.g(s, r),
            (r = s.adata),
            "string" === typeof s.salt &&
              (s.salt = o.codec.base64.toBits(s.salt)),
            "string" === typeof s.iv && (s.iv = o.codec.base64.toBits(s.iv)),
            !o.mode[s.mode] ||
              !o.cipher[s.cipher] ||
              ("string" === typeof e && 100 >= s.iter) ||
              (64 !== s.ts && 96 !== s.ts && 128 !== s.ts) ||
              (128 !== s.ks && 192 !== s.ks && 256 !== s.ks) ||
              2 > s.iv.length ||
              4 < s.iv.length)
          )
            throw new o.exception.invalid("json encrypt: invalid parameters");
          return (
            "string" === typeof e
              ? ((i = o.misc.cachedPbkdf2(e, s)),
                (e = i.key.slice(0, s.ks / 32)),
                (s.salt = i.salt))
              : o.ecc &&
                e instanceof o.ecc.elGamal.publicKey &&
                ((i = e.kem()),
                (s.kemtag = i.tag),
                (e = i.key.slice(0, s.ks / 32))),
            "string" === typeof t && (t = o.codec.utf8String.toBits(t)),
            "string" === typeof r &&
              (s.adata = r = o.codec.utf8String.toBits(r)),
            (i = new o.cipher[s.cipher](e)),
            a.g(n, s),
            (n.key = e),
            (s.ct =
              "ccm" === s.mode &&
              o.arrayBuffer &&
              o.arrayBuffer.ccm &&
              t instanceof ArrayBuffer
                ? o.arrayBuffer.ccm.encrypt(i, t, s.iv, r, s.ts)
                : o.mode[s.mode].encrypt(i, t, s.iv, r, s.ts)),
            s
          );
        },
        encrypt: function (e, t, r, n) {
          var i = o.json,
            a = i.ja.apply(i, arguments);
          return i.encode(a);
        },
        ia: function (e, t, r, n) {
          ((r = r || {}), (n = n || {}));
          var i,
            a,
            s = o.json;
          if (
            ((t = s.g(s.g(s.g({}, s.defaults), t), r, !0)),
            (i = t.adata),
            "string" === typeof t.salt &&
              (t.salt = o.codec.base64.toBits(t.salt)),
            "string" === typeof t.iv && (t.iv = o.codec.base64.toBits(t.iv)),
            !o.mode[t.mode] ||
              !o.cipher[t.cipher] ||
              ("string" === typeof e && 100 >= t.iter) ||
              (64 !== t.ts && 96 !== t.ts && 128 !== t.ts) ||
              (128 !== t.ks && 192 !== t.ks && 256 !== t.ks) ||
              !t.iv ||
              2 > t.iv.length ||
              4 < t.iv.length)
          )
            throw new o.exception.invalid("json decrypt: invalid parameters");
          return (
            "string" === typeof e
              ? ((a = o.misc.cachedPbkdf2(e, t)),
                (e = a.key.slice(0, t.ks / 32)),
                (t.salt = a.salt))
              : o.ecc &&
                e instanceof o.ecc.elGamal.secretKey &&
                (e = e
                  .unkem(o.codec.base64.toBits(t.kemtag))
                  .slice(0, t.ks / 32)),
            "string" === typeof i && (i = o.codec.utf8String.toBits(i)),
            (a = new o.cipher[t.cipher](e)),
            (i =
              "ccm" === t.mode &&
              o.arrayBuffer &&
              o.arrayBuffer.ccm &&
              t.ct instanceof ArrayBuffer
                ? o.arrayBuffer.ccm.decrypt(a, t.ct, t.iv, t.tag, i, t.ts)
                : o.mode[t.mode].decrypt(a, t.ct, t.iv, i, t.ts)),
            s.g(n, t),
            (n.key = e),
            1 === r.raw ? i : o.codec.utf8String.fromBits(i)
          );
        },
        decrypt: function (e, t, r, n) {
          var i = o.json;
          return i.ia(e, i.decode(t), r, n);
        },
        encode: function (e) {
          var t,
            r = "{",
            n = "";
          for (t in e)
            if (e.hasOwnProperty(t)) {
              if (!t.match(/^[a-z0-9]+$/i))
                throw new o.exception.invalid(
                  "json encode: invalid property name",
                );
              switch (((r += n + '"' + t + '":'), (n = ","), typeof e[t])) {
                case "number":
                case "boolean":
                  r += e[t];
                  break;
                case "string":
                  r += '"' + escape(e[t]) + '"';
                  break;
                case "object":
                  r += '"' + o.codec.base64.fromBits(e[t], 0) + '"';
                  break;
                default:
                  throw new o.exception.bug("json encode: unsupported type");
              }
            }
          return r + "}";
        },
        decode: function (e) {
          if (((e = e.replace(/\s/g, "")), !e.match(/^\{.*\}$/)))
            throw new o.exception.invalid("json decode: this isn't json!");
          e = e.replace(/^\{|\}$/g, "").split(/,/);
          var t,
            r,
            n = {};
          for (t = 0; t < e.length; t++) {
            if (
              !(r = e[t].match(
                /^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i,
              ))
            )
              throw new o.exception.invalid("json decode: this isn't json!");
            null != r[3]
              ? (n[r[2]] = parseInt(r[3], 10))
              : null != r[4]
                ? (n[r[2]] = r[2].match(/^(ct|adata|salt|iv)$/)
                    ? o.codec.base64.toBits(r[4])
                    : unescape(r[4]))
                : null != r[5] && (n[r[2]] = "true" === r[5]);
          }
          return n;
        },
        g: function (e, t, r) {
          if ((void 0 === e && (e = {}), void 0 === t)) return e;
          for (var n in t)
            if (t.hasOwnProperty(n)) {
              if (r && void 0 !== e[n] && e[n] !== t[n])
                throw new o.exception.invalid("required parameter overridden");
              e[n] = t[n];
            }
          return e;
        },
        sa: function (e, t) {
          var r,
            n = {};
          for (r in e) e.hasOwnProperty(r) && e[r] !== t[r] && (n[r] = e[r]);
          return n;
        },
        ra: function (e, t) {
          var r,
            n = {};
          for (r = 0; r < t.length; r++)
            void 0 !== e[t[r]] && (n[t[r]] = e[t[r]]);
          return n;
        },
      }),
        (o.encrypt = o.json.encrypt),
        (o.decrypt = o.json.decrypt),
        (o.misc.pa = {}),
        (o.misc.cachedPbkdf2 = function (e, t) {
          var r,
            n = o.misc.pa;
          return (
            (t = t || {}),
            (r = t.iter || 1e3),
            (n = n[e] = n[e] || {}),
            (r = n[r] =
              n[r] || {
                firstSalt:
                  t.salt && t.salt.length
                    ? t.salt.slice(0)
                    : o.random.randomWords(2, 0),
              }),
            (n = void 0 === t.salt ? r.firstSalt : t.salt),
            (r[n] = r[n] || o.misc.pbkdf2(e, n, t.iter)),
            { key: r[n].slice(0), salt: n.slice(0) }
          );
        }),
        e.exports && (e.exports = o),
        (n = []),
        (i = function () {
          return o;
        }.apply(t, n)),
        void 0 === i || (e.exports = i));
    },
    7644: function (e, t, r) {
      for (var n = r(7645), i = [], o = {}, a = 0; a < 256; ++a)
        ((i[a] = (a + 256).toString(16).substr(1)), (o[i[a]] = a));
      function s(e, t) {
        var r = t || 0,
          n = i;
        return (
          n[e[r++]] +
          n[e[r++]] +
          n[e[r++]] +
          n[e[r++]] +
          "-" +
          n[e[r++]] +
          n[e[r++]] +
          "-" +
          n[e[r++]] +
          n[e[r++]] +
          "-" +
          n[e[r++]] +
          n[e[r++]] +
          "-" +
          n[e[r++]] +
          n[e[r++]] +
          n[e[r++]] +
          n[e[r++]] +
          n[e[r++]] +
          n[e[r++]]
        );
      }
      var c = n(),
        u = [1 | c[0], c[1], c[2], c[3], c[4], c[5]],
        f = 16383 & ((c[6] << 8) | c[7]),
        l = 0,
        h = 0;
      function d(e, t, r) {
        var n = (t && r) || 0,
          i = t || [];
        e = e || {};
        var o = void 0 !== e.clockseq ? e.clockseq : f,
          a = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
          c = void 0 !== e.nsecs ? e.nsecs : h + 1,
          d = a - l + (c - h) / 1e4;
        if (
          (d < 0 && void 0 === e.clockseq && (o = (o + 1) & 16383),
          (d < 0 || a > l) && void 0 === e.nsecs && (c = 0),
          c >= 1e4)
        )
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        ((l = a), (h = c), (f = o), (a += 122192928e5));
        var p = (1e4 * (268435455 & a) + c) % 4294967296;
        ((i[n++] = (p >>> 24) & 255),
          (i[n++] = (p >>> 16) & 255),
          (i[n++] = (p >>> 8) & 255),
          (i[n++] = 255 & p));
        var y = ((a / 4294967296) * 1e4) & 268435455;
        ((i[n++] = (y >>> 8) & 255),
          (i[n++] = 255 & y),
          (i[n++] = ((y >>> 24) & 15) | 16),
          (i[n++] = (y >>> 16) & 255),
          (i[n++] = (o >>> 8) | 128),
          (i[n++] = 255 & o));
        for (var E = e.node || u, g = 0; g < 6; ++g) i[n + g] = E[g];
        return t || s(i);
      }
      function p(e, t, r) {
        var i = (t && r) || 0;
        ("string" == typeof e &&
          ((t = "binary" == e ? new Array(16) : null), (e = null)),
          (e = e || {}));
        var o = e.random || (e.rng || n)();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), t))
          for (var a = 0; a < 16; ++a) t[i + a] = o[a];
        return t || s(o);
      }
      var y = p;
      ((y.v1 = d), (y.v4 = p), (e.exports = y));
    },
    7645: function (e, t, r) {
      (function (t) {
        var r,
          n = t.crypto || t.msCrypto;
        if (n && n.getRandomValues) {
          var i = new Uint8Array(16);
          r = function () {
            return (n.getRandomValues(i), i);
          };
        }
        if (!r) {
          var o = new Array(16);
          r = function () {
            for (var e, t = 0; t < 16; t++)
              (0 === (3 & t) && (e = 4294967296 * Math.random()),
                (o[t] = (e >>> ((3 & t) << 3)) & 255));
            return o;
          };
        }
        e.exports = r;
      }).call(this, r(13));
    },
    7646: function (e, t, r) {
      e.exports = r(7647)(r(7648));
    },
    7647: function (e, t) {
      const r = {
        IMPOSSIBLE_CASE: "Impossible case. Please create issue.",
        TWEAK_ADD:
          "The tweak was out of range or the resulted private key is invalid",
        TWEAK_MUL: "The tweak was out of range or equal to zero",
        CONTEXT_RANDOMIZE_UNKNOW: "Unknow error on context randomization",
        SECKEY_INVALID: "Private Key is invalid",
        PUBKEY_PARSE: "Public Key could not be parsed",
        PUBKEY_SERIALIZE: "Public Key serialization error",
        PUBKEY_COMBINE: "The sum of the public keys is not valid",
        SIG_PARSE: "Signature could not be parsed",
        SIGN: "The nonce generation function failed, or the private key was invalid",
        RECOVER: "Public key could not be recover",
        ECDH: "Scalar was invalid (zero or overflow)",
      };
      function n(e, t) {
        if (!e) throw new Error(t);
      }
      function i(e, t, r) {
        if (
          (n(t instanceof Uint8Array, `Expected ${e} to be an Uint8Array`),
          void 0 !== r)
        )
          if (Array.isArray(r)) {
            const i = r.join(", "),
              o = `Expected ${e} to be an Uint8Array with length [${i}]`;
            n(r.includes(t.length), o);
          } else {
            const i = `Expected ${e} to be an Uint8Array with length ${r}`;
            n(t.length === r, i);
          }
      }
      function o(e) {
        n("Boolean" === s(e), "Expected compressed to be a Boolean");
      }
      function a(e, t) {
        return (
          void 0 === e && (e = (e) => new Uint8Array(e)),
          "function" === typeof e && (e = e(t)),
          i("output", e, t),
          e
        );
      }
      function s(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      }
      e.exports = (e) => ({
        contextRandomize(t) {
          switch (
            (n(
              null === t || t instanceof Uint8Array,
              "Expected seed to be an Uint8Array or null",
            ),
            null !== t && i("seed", t, 32),
            e.contextRandomize(t))
          ) {
            case 1:
              throw new Error(r.CONTEXT_RANDOMIZE_UNKNOW);
          }
        },
        privateKeyVerify(t) {
          return (i("private key", t, 32), 0 === e.privateKeyVerify(t));
        },
        privateKeyNegate(t) {
          switch ((i("private key", t, 32), e.privateKeyNegate(t))) {
            case 0:
              return t;
            case 1:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        privateKeyTweakAdd(t, n) {
          switch (
            (i("private key", t, 32),
            i("tweak", n, 32),
            e.privateKeyTweakAdd(t, n))
          ) {
            case 0:
              return t;
            case 1:
              throw new Error(r.TWEAK_ADD);
          }
        },
        privateKeyTweakMul(t, n) {
          switch (
            (i("private key", t, 32),
            i("tweak", n, 32),
            e.privateKeyTweakMul(t, n))
          ) {
            case 0:
              return t;
            case 1:
              throw new Error(r.TWEAK_MUL);
          }
        },
        publicKeyVerify(t) {
          return (i("public key", t, [33, 65]), 0 === e.publicKeyVerify(t));
        },
        publicKeyCreate(t, n, s) {
          switch (
            (void 0 === n && (n = !0),
            i("private key", t, 32),
            o(n),
            (s = a(s, n ? 33 : 65)),
            e.publicKeyCreate(s, t))
          ) {
            case 0:
              return s;
            case 1:
              throw new Error(r.SECKEY_INVALID);
            case 2:
              throw new Error(r.PUBKEY_SERIALIZE);
          }
        },
        publicKeyConvert(t, n, s) {
          switch (
            (void 0 === n && (n = !0),
            i("public key", t, [33, 65]),
            o(n),
            (s = a(s, n ? 33 : 65)),
            e.publicKeyConvert(s, t))
          ) {
            case 0:
              return s;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.PUBKEY_SERIALIZE);
          }
        },
        publicKeyNegate(t, n, s) {
          switch (
            (void 0 === n && (n = !0),
            i("public key", t, [33, 65]),
            o(n),
            (s = a(s, n ? 33 : 65)),
            e.publicKeyNegate(s, t))
          ) {
            case 0:
              return s;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.IMPOSSIBLE_CASE);
            case 3:
              throw new Error(r.PUBKEY_SERIALIZE);
          }
        },
        publicKeyCombine(t, s, c) {
          (void 0 === s && (s = !0),
            n(Array.isArray(t), "Expected public keys to be an Array"),
            n(
              t.length > 0,
              "Expected public keys array will have more than zero items",
            ));
          for (const e of t) i("public key", e, [33, 65]);
          switch ((o(s), (c = a(c, s ? 33 : 65)), e.publicKeyCombine(c, t))) {
            case 0:
              return c;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.PUBKEY_COMBINE);
            case 3:
              throw new Error(r.PUBKEY_SERIALIZE);
          }
        },
        publicKeyTweakAdd(t, n, s, c) {
          switch (
            (void 0 === s && (s = !0),
            i("public key", t, [33, 65]),
            i("tweak", n, 32),
            o(s),
            (c = a(c, s ? 33 : 65)),
            e.publicKeyTweakAdd(c, t, n))
          ) {
            case 0:
              return c;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.TWEAK_ADD);
          }
        },
        publicKeyTweakMul(t, n, s, c) {
          switch (
            (void 0 === s && (s = !0),
            i("public key", t, [33, 65]),
            i("tweak", n, 32),
            o(s),
            (c = a(c, s ? 33 : 65)),
            e.publicKeyTweakMul(c, t, n))
          ) {
            case 0:
              return c;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.TWEAK_MUL);
          }
        },
        signatureNormalize(t) {
          switch ((i("signature", t, 64), e.signatureNormalize(t))) {
            case 0:
              return t;
            case 1:
              throw new Error(r.SIG_PARSE);
          }
        },
        signatureExport(t, n) {
          (i("signature", t, 64), (n = a(n, 72)));
          const o = { output: n, outputlen: 72 };
          switch (e.signatureExport(o, t)) {
            case 0:
              return n.slice(0, o.outputlen);
            case 1:
              throw new Error(r.SIG_PARSE);
            case 2:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        signatureImport(t, n) {
          switch (
            (i("signature", t), (n = a(n, 64)), e.signatureImport(n, t))
          ) {
            case 0:
              return n;
            case 1:
              throw new Error(r.SIG_PARSE);
            case 2:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        ecdsaSign(t, o, c, u) {
          (void 0 === c && (c = {}),
            i("message", t, 32),
            i("private key", o, 32),
            n("Object" === s(c), "Expected options to be an Object"),
            void 0 !== c.data && i("options.data", c.data),
            void 0 !== c.noncefn &&
              n(
                "Function" === s(c.noncefn),
                "Expected options.noncefn to be a Function",
              ),
            (u = a(u, 64)));
          const f = { signature: u, recid: null };
          switch (e.ecdsaSign(f, t, o, c.data, c.noncefn)) {
            case 0:
              return f;
            case 1:
              throw new Error(r.SIGN);
            case 2:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        ecdsaVerify(t, n, o) {
          switch (
            (i("signature", t, 64),
            i("message", n, 32),
            i("public key", o, [33, 65]),
            e.ecdsaVerify(t, n, o))
          ) {
            case 0:
              return !0;
            case 3:
              return !1;
            case 1:
              throw new Error(r.SIG_PARSE);
            case 2:
              throw new Error(r.PUBKEY_PARSE);
          }
        },
        ecdsaRecover(t, c, u, f, l) {
          switch (
            (void 0 === f && (f = !0),
            i("signature", t, 64),
            n(
              "Number" === s(c) && c >= 0 && c <= 3,
              "Expected recovery id to be a Number within interval [0, 3]",
            ),
            i("message", u, 32),
            o(f),
            (l = a(l, f ? 33 : 65)),
            e.ecdsaRecover(l, t, c, u))
          ) {
            case 0:
              return l;
            case 1:
              throw new Error(r.SIG_PARSE);
            case 2:
              throw new Error(r.RECOVER);
            case 3:
              throw new Error(r.IMPOSSIBLE_CASE);
          }
        },
        ecdh(t, o, c, u) {
          switch (
            (void 0 === c && (c = {}),
            i("public key", t, [33, 65]),
            i("private key", o, 32),
            n("Object" === s(c), "Expected options to be an Object"),
            void 0 !== c.data && i("options.data", c.data),
            void 0 !== c.hashfn
              ? (n(
                  "Function" === s(c.hashfn),
                  "Expected options.hashfn to be a Function",
                ),
                void 0 !== c.xbuf && i("options.xbuf", c.xbuf, 32),
                void 0 !== c.ybuf && i("options.ybuf", c.ybuf, 32),
                i("output", u))
              : (u = a(u, 32)),
            e.ecdh(u, t, o, c.data, c.hashfn, c.xbuf, c.ybuf))
          ) {
            case 0:
              return u;
            case 1:
              throw new Error(r.PUBKEY_PARSE);
            case 2:
              throw new Error(r.ECDH);
          }
        },
      });
    },
    7648: function (e, t, r) {
      const n = r(795).ec,
        i = new n("secp256k1"),
        o = i.curve,
        a = o.n.constructor;
      function s(e, t) {
        let r = new a(t);
        if (r.cmp(o.p) >= 0) return null;
        r = r.toRed(o.red);
        let n = r.redSqr().redIMul(r).redIAdd(o.b).redSqrt();
        return (
          (3 === e) !== n.isOdd() && (n = n.redNeg()),
          i.keyPair({ pub: { x: r, y: n } })
        );
      }
      function c(e, t, r) {
        let n = new a(t),
          s = new a(r);
        if (n.cmp(o.p) >= 0 || s.cmp(o.p) >= 0) return null;
        if (
          ((n = n.toRed(o.red)),
          (s = s.toRed(o.red)),
          (6 === e || 7 === e) && s.isOdd() !== (7 === e))
        )
          return null;
        const c = n.redSqr().redIMul(n);
        return s.redSqr().redISub(c.redIAdd(o.b)).isZero()
          ? i.keyPair({ pub: { x: n, y: s } })
          : null;
      }
      function u(e) {
        const t = e[0];
        switch (t) {
          case 2:
          case 3:
            return 33 !== e.length ? null : s(t, e.subarray(1, 33));
          case 4:
          case 6:
          case 7:
            return 65 !== e.length
              ? null
              : c(t, e.subarray(1, 33), e.subarray(33, 65));
          default:
            return null;
        }
      }
      function f(e, t) {
        const r = t.encode(null, 33 === e.length);
        for (let n = 0; n < e.length; ++n) e[n] = r[n];
      }
      e.exports = {
        contextRandomize() {
          return 0;
        },
        privateKeyVerify(e) {
          const t = new a(e);
          return t.cmp(o.n) < 0 && !t.isZero() ? 0 : 1;
        },
        privateKeyNegate(e) {
          const t = new a(e),
            r = o.n.sub(t).umod(o.n).toArrayLike(Uint8Array, "be", 32);
          return (e.set(r), 0);
        },
        privateKeyTweakAdd(e, t) {
          const r = new a(t);
          if (r.cmp(o.n) >= 0) return 1;
          if ((r.iadd(new a(e)), r.cmp(o.n) >= 0 && r.isub(o.n), r.isZero()))
            return 1;
          const n = r.toArrayLike(Uint8Array, "be", 32);
          return (e.set(n), 0);
        },
        privateKeyTweakMul(e, t) {
          let r = new a(t);
          if (r.cmp(o.n) >= 0 || r.isZero()) return 1;
          (r.imul(new a(e)), r.cmp(o.n) >= 0 && (r = r.umod(o.n)));
          const n = r.toArrayLike(Uint8Array, "be", 32);
          return (e.set(n), 0);
        },
        publicKeyVerify(e) {
          const t = u(e);
          return null === t ? 1 : 0;
        },
        publicKeyCreate(e, t) {
          const r = new a(t);
          if (r.cmp(o.n) >= 0 || r.isZero()) return 1;
          const n = i.keyFromPrivate(t).getPublic();
          return (f(e, n), 0);
        },
        publicKeyConvert(e, t) {
          const r = u(t);
          if (null === r) return 1;
          const n = r.getPublic();
          return (f(e, n), 0);
        },
        publicKeyNegate(e, t) {
          const r = u(t);
          if (null === r) return 1;
          const n = r.getPublic();
          return ((n.y = n.y.redNeg()), f(e, n), 0);
        },
        publicKeyCombine(e, t) {
          const r = new Array(t.length);
          for (let i = 0; i < t.length; ++i)
            if (((r[i] = u(t[i])), null === r[i])) return 1;
          let n = r[0].getPublic();
          for (let i = 1; i < r.length; ++i) n = n.add(r[i].pub);
          return n.isInfinity() ? 2 : (f(e, n), 0);
        },
        publicKeyTweakAdd(e, t, r) {
          const n = u(t);
          if (null === n) return 1;
          if (((r = new a(r)), r.cmp(o.n) >= 0)) return 2;
          const i = n.getPublic().add(o.g.mul(r));
          return i.isInfinity() ? 2 : (f(e, i), 0);
        },
        publicKeyTweakMul(e, t, r) {
          const n = u(t);
          if (null === n) return 1;
          if (((r = new a(r)), r.cmp(o.n) >= 0 || r.isZero())) return 2;
          const i = n.getPublic().mul(r);
          return (f(e, i), 0);
        },
        signatureNormalize(e) {
          const t = new a(e.subarray(0, 32)),
            r = new a(e.subarray(32, 64));
          return t.cmp(o.n) >= 0 || r.cmp(o.n) >= 0
            ? 1
            : (1 === r.cmp(i.nh) &&
                e.set(o.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32),
              0);
        },
        signatureExport(e, t) {
          const r = t.subarray(0, 32),
            n = t.subarray(32, 64);
          if (new a(r).cmp(o.n) >= 0) return 1;
          if (new a(n).cmp(o.n) >= 0) return 1;
          const { output: i } = e;
          let s = i.subarray(4, 37);
          ((s[0] = 0), s.set(r, 1));
          let c = 33,
            u = 0;
          for (; c > 1 && 0 === s[u] && !(128 & s[u + 1]); --c, ++u);
          if (((s = s.subarray(u)), 128 & s[0])) return 1;
          if (c > 1 && 0 === s[0] && !(128 & s[1])) return 1;
          let f = i.subarray(39, 72);
          ((f[0] = 0), f.set(n, 1));
          let l = 33,
            h = 0;
          for (; l > 1 && 0 === f[h] && !(128 & f[h + 1]); --l, ++h);
          return (
            (f = f.subarray(h)),
            128 & f[0] || (l > 1 && 0 === f[0] && !(128 & f[1]))
              ? 1
              : ((e.outputlen = 6 + c + l),
                (i[0] = 48),
                (i[1] = e.outputlen - 2),
                (i[2] = 2),
                (i[3] = s.length),
                i.set(s, 4),
                (i[4 + c] = 2),
                (i[5 + c] = f.length),
                i.set(f, 6 + c),
                0)
          );
        },
        signatureImport(e, t) {
          if (t.length < 8) return 1;
          if (t.length > 72) return 1;
          if (48 !== t[0]) return 1;
          if (t[1] !== t.length - 2) return 1;
          if (2 !== t[2]) return 1;
          const r = t[3];
          if (0 === r) return 1;
          if (5 + r >= t.length) return 1;
          if (2 !== t[4 + r]) return 1;
          const n = t[5 + r];
          if (0 === n) return 1;
          if (6 + r + n !== t.length) return 1;
          if (128 & t[4]) return 1;
          if (r > 1 && 0 === t[4] && !(128 & t[5])) return 1;
          if (128 & t[r + 6]) return 1;
          if (n > 1 && 0 === t[r + 6] && !(128 & t[r + 7])) return 1;
          let i = t.subarray(4, 4 + r);
          if (
            (33 === i.length && 0 === i[0] && (i = i.subarray(1)),
            i.length > 32)
          )
            return 1;
          let s = t.subarray(6 + r);
          if (
            (33 === s.length && 0 === s[0] && (s = s.slice(1)), s.length > 32)
          )
            throw new Error("S length is too long");
          let c = new a(i);
          c.cmp(o.n) >= 0 && (c = new a(0));
          let u = new a(t.subarray(6 + r));
          return (
            u.cmp(o.n) >= 0 && (u = new a(0)),
            e.set(c.toArrayLike(Uint8Array, "be", 32), 0),
            e.set(u.toArrayLike(Uint8Array, "be", 32), 32),
            0
          );
        },
        ecdsaSign(e, t, r, n, s) {
          if (s) {
            const e = s;
            s = (i) => {
              const o = e(t, r, null, n, i),
                s = o instanceof Uint8Array && 32 === o.length;
              if (!s) throw new Error("This is the way");
              return new a(o);
            };
          }
          const c = new a(r);
          if (c.cmp(o.n) >= 0 || c.isZero()) return 1;
          let u;
          try {
            u = i.sign(t, r, { canonical: !0, k: s, pers: n });
          } catch (f) {
            return 1;
          }
          return (
            e.signature.set(u.r.toArrayLike(Uint8Array, "be", 32), 0),
            e.signature.set(u.s.toArrayLike(Uint8Array, "be", 32), 32),
            (e.recid = u.recoveryParam),
            0
          );
        },
        ecdsaVerify(e, t, r) {
          const n = { r: e.subarray(0, 32), s: e.subarray(32, 64) },
            s = new a(n.r),
            c = new a(n.s);
          if (s.cmp(o.n) >= 0 || c.cmp(o.n) >= 0) return 1;
          if (1 === c.cmp(i.nh) || s.isZero() || c.isZero()) return 3;
          const f = u(r);
          if (null === f) return 2;
          const l = f.getPublic(),
            h = i.verify(t, n, l);
          return h ? 0 : 3;
        },
        ecdsaRecover(e, t, r, n) {
          const s = { r: t.slice(0, 32), s: t.slice(32, 64) },
            c = new a(s.r),
            u = new a(s.s);
          if (c.cmp(o.n) >= 0 || u.cmp(o.n) >= 0) return 1;
          if (c.isZero() || u.isZero()) return 2;
          let l;
          try {
            l = i.recoverPubKey(n, s, r);
          } catch (h) {
            return 2;
          }
          return (f(e, l), 0);
        },
        ecdh(e, t, r, n, s, c, f) {
          const l = u(t);
          if (null === l) return 1;
          const h = new a(r);
          if (h.cmp(o.n) >= 0 || h.isZero()) return 2;
          const d = l.getPublic().mul(h);
          if (void 0 === s) {
            const t = d.encode(null, !0),
              r = i.hash().update(t).digest();
            for (let n = 0; n < 32; ++n) e[n] = r[n];
          } else {
            c || (c = new Uint8Array(32));
            const t = d.getX().toArray("be", 32);
            for (let e = 0; e < 32; ++e) c[e] = t[e];
            f || (f = new Uint8Array(32));
            const r = d.getY().toArray("be", 32);
            for (let e = 0; e < 32; ++e) f[e] = r[e];
            const i = s(c, f, n),
              o = i instanceof Uint8Array && i.length === e.length;
            if (!o) return 2;
            e.set(i);
          }
          return 0;
        },
      };
    },
    7649: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mnemonic = void 0));
      var n = r(2764),
        i = o(r(4056));
      function o(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (o = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            o,
            a = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return a;
          if ((i = t ? n : r)) {
            if (i.has(e)) return i.get(e);
            i.set(e, a);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (o.get || o.set)
                ? i(a, r, o)
                : (a[r] = e[r]));
          return a;
        })(e, t);
      }
      const a = r(4975);
      var s;
      (function (e) {
        const t = "m/44'/818'/0'/0";
        function r() {
          return i.generateMnemonic(128, n.randomBytes).split(" ");
        }
        function o(e) {
          return i.validateMnemonic(e.join(" "));
        }
        function s(e) {
          const r = i.mnemonicToSeed(e.join(" ")),
            n = a.fromMasterSeed(r);
          return n.derive(t + "/0").privateKey;
        }
        ((e.generate = r), (e.validate = o), (e.derivePrivateKey = s));
      })(s || (t.mnemonic = s = {}));
    },
    7650: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isAddress = o),
        (t.publicKeyToAddress = i),
        (t.toChecksumAddress = a));
      var n = r(6014);
      function i(e) {
        return (0, n.keccak256)(e.slice(1)).slice(12);
      }
      function o(e) {
        return "string" === typeof e && /^0x[0-9a-f]{40}$/i.test(e);
      }
      function a(e) {
        if (!o(e)) throw new Error("invalid address");
        e = e.slice(2).toLowerCase();
        const t = (0, n.keccak256)(e);
        let r = "0x";
        for (let n = 0; n < e.length; n++) {
          let i = t[n >> 1];
          (n % 2 === 0 && (i >>= 4),
            (r += i % 16 >= 8 ? e[n].toUpperCase() : e[n]));
        }
        return r;
      }
    },
    7651: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Transaction = void 0));
        var n = r(4280),
          i = r(6015);
        class Transaction {
          static decode(t) {
            try {
              const e = o.decode(t);
              return new Transaction(e);
            } catch (r) {
              const n = a.decode(t),
                i = n.signature;
              delete n.signature;
              const o = new Transaction(n);
              return ((o.signature = e.from(i.slice(2), "hex")), o);
            }
          }
          constructor(e) {
            this.body = Object.assign({}, e, { reserved: e.reserved || [] });
          }
          get id() {
            if (!this.signature) return null;
            try {
              const e = (0, n.blake2b256)(o.encode(this.body)),
                t = n.secp256k1.recover(e, this.signature),
                r = (0, n.publicKeyToAddress)(t);
              return "0x" + (0, n.blake2b256)(e, r).toString("hex");
            } catch (e) {
              return null;
            }
          }
          get signer() {
            if (!this.signature) return null;
            try {
              const e = (0, n.blake2b256)(o.encode(this.body)),
                t = n.secp256k1.recover(e, this.signature);
              return "0x" + (0, n.publicKeyToAddress)(t).toString("hex");
            } catch (e) {
              return null;
            }
          }
          get intrinsicGas() {
            return Transaction.intrinsicGas(this.body.clauses);
          }
          encode() {
            if (this.signature) {
              const e = "0x" + this.signature.toString("hex");
              return a.encode(Object.assign({}, this.body, { signature: e }));
            }
            return o.encode(this.body);
          }
        }
        ((t.Transaction = Transaction),
          (function (e) {
            function t(e) {
              const t = 5e3,
                n = 16e3,
                i = 48e3;
              return 0 === e.length
                ? t + n
                : e.reduce(
                    (e, t) => (t.to ? (e += n) : (e += i), (e += r(t.data)), e),
                    t,
                  );
            }
            function r(e) {
              const t = 4,
                r = 68;
              let n = 0;
              for (let i = 2; i < e.length; i += 2)
                "00" === e.substr(i, 2) ? (n += t) : (n += r);
              return n;
            }
            e.intrinsicGas = t;
          })(Transaction || (t.Transaction = Transaction = {})));
        const o = new i.RLP({
            name: "tx",
            kind: [
              { name: "chainTag", kind: new i.RLP.NumericKind(1) },
              { name: "blockRef", kind: new i.RLP.CompactFixedBlobKind(8) },
              { name: "expiration", kind: new i.RLP.NumericKind(4) },
              {
                name: "clauses",
                kind: {
                  item: [
                    { name: "to", kind: new i.RLP.NullableFixedBlobKind(20) },
                    { name: "value", kind: new i.RLP.NumericKind(32) },
                    { name: "data", kind: new i.RLP.BlobKind() },
                  ],
                },
              },
              { name: "gasPriceCoef", kind: new i.RLP.NumericKind(1) },
              { name: "gas", kind: new i.RLP.NumericKind(8) },
              { name: "dependsOn", kind: new i.RLP.NullableFixedBlobKind(32) },
              { name: "nonce", kind: new i.RLP.NumericKind(8) },
              { name: "reserved", kind: new i.RLP.RawKind() },
            ],
          }),
          a = new i.RLP({
            name: "tx",
            kind: [
              ...o.profile.kind,
              { name: "signature", kind: new i.RLP.BlobKind() },
            ],
          });
      }).call(this, r(2).Buffer);
    },
    7652: function (e, t, r) {
      var n;
      (function (i) {
        "use strict";
        var o,
          a = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          s = Math.ceil,
          c = Math.floor,
          u = "[BigNumber Error] ",
          f = u + "Number primitive has more than 15 significant digits: ",
          l = 1e14,
          h = 14,
          d = 9007199254740991,
          p = [
            1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
            1e13,
          ],
          y = 1e7,
          E = 1e9;
        function g(e) {
          var t,
            r,
            n,
            i = (U.prototype = {
              constructor: U,
              toString: null,
              valueOf: null,
            }),
            o = new U(1),
            T = 20,
            L = 4,
            P = -7,
            C = 21,
            S = -1e7,
            k = 1e7,
            D = !1,
            x = 1,
            B = 0,
            R = {
              decimalSeparator: ".",
              groupSeparator: ",",
              groupSize: 3,
              secondaryGroupSize: 0,
              fractionGroupSeparator: " ",
              fractionGroupSize: 0,
            },
            K = "0123456789abcdefghijklmnopqrstuvwxyz";
          function U(e, t) {
            var i,
              o,
              s,
              u,
              l,
              p,
              y,
              E,
              g = this;
            if (!(g instanceof U)) return new U(e, t);
            if (null == t) {
              if (e instanceof U)
                return (
                  (g.s = e.s),
                  (g.e = e.e),
                  void (g.c = (e = e.c) ? e.slice() : e)
                );
              if (((p = "number" == typeof e), p && 0 * e == 0)) {
                if (((g.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                  for (u = 0, l = e; l >= 10; l /= 10, u++);
                  return ((g.e = u), void (g.c = [e]));
                }
                E = e + "";
              } else {
                if (!a.test((E = e + ""))) return n(g, E, p);
                g.s = 45 == E.charCodeAt(0) ? ((E = E.slice(1)), -1) : 1;
              }
              ((u = E.indexOf(".")) > -1 && (E = E.replace(".", "")),
                (l = E.search(/e/i)) > 0
                  ? (u < 0 && (u = l),
                    (u += +E.slice(l + 1)),
                    (E = E.substring(0, l)))
                  : u < 0 && (u = E.length));
            } else {
              if ((w(t, 2, K.length, "Base"), (E = e + ""), 10 == t))
                return (
                  (g = new U(e instanceof U ? e : E)),
                  G(g, T + g.e + 1, L)
                );
              if (((p = "number" == typeof e), p)) {
                if (0 * e != 0) return n(g, E, p, t);
                if (
                  ((g.s = 1 / e < 0 ? ((E = E.slice(1)), -1) : 1),
                  U.DEBUG && E.replace(/^0\.0*|\./, "").length > 15)
                )
                  throw Error(f + e);
                p = !1;
              } else g.s = 45 === E.charCodeAt(0) ? ((E = E.slice(1)), -1) : 1;
              for (i = K.slice(0, t), u = l = 0, y = E.length; l < y; l++)
                if (i.indexOf((o = E.charAt(l))) < 0) {
                  if ("." == o) {
                    if (l > u) {
                      u = y;
                      continue;
                    }
                  } else if (
                    !s &&
                    ((E == E.toUpperCase() && (E = E.toLowerCase())) ||
                      (E == E.toLowerCase() && (E = E.toUpperCase())))
                  ) {
                    ((s = !0), (l = -1), (u = 0));
                    continue;
                  }
                  return n(g, e + "", p, t);
                }
              ((E = r(E, t, 10, g.s)),
                (u = E.indexOf(".")) > -1
                  ? (E = E.replace(".", ""))
                  : (u = E.length));
            }
            for (l = 0; 48 === E.charCodeAt(l); l++);
            for (y = E.length; 48 === E.charCodeAt(--y); );
            if (((E = E.slice(l, ++y)), E)) {
              if (((y -= l), p && U.DEBUG && y > 15 && (e > d || e !== c(e))))
                throw Error(f + g.s * e);
              if (((u = u - l - 1), u > k)) g.c = g.e = null;
              else if (u < S) g.c = [(g.e = 0)];
              else {
                if (
                  ((g.e = u),
                  (g.c = []),
                  (l = (u + 1) % h),
                  u < 0 && (l += h),
                  l < y)
                ) {
                  for (l && g.c.push(+E.slice(0, l)), y -= h; l < y; )
                    g.c.push(+E.slice(l, (l += h)));
                  ((E = E.slice(l)), (l = h - E.length));
                } else l -= y;
                for (; l--; E += "0");
                g.c.push(+E);
              }
            } else g.c = [(g.e = 0)];
          }
          function V(e, t, r, n) {
            var i, o, a, s, c;
            if ((null == r ? (r = L) : w(r, 0, 8), !e.c)) return e.toString();
            if (((i = e.c[0]), (a = e.e), null == t))
              ((c = _(e.c)),
                (c = 1 == n || (2 == n && a <= P) ? I(c, a) : N(c, a, "0")));
            else if (
              ((e = G(new U(e), t, r)),
              (o = e.e),
              (c = _(e.c)),
              (s = c.length),
              1 == n || (2 == n && (t <= o || o <= P)))
            ) {
              for (; s < t; c += "0", s++);
              c = I(c, o);
            } else if (((t -= a), (c = N(c, o, "0")), o + 1 > s)) {
              if (--t > 0) for (c += "."; t--; c += "0");
            } else if (((t += o - s), t > 0))
              for (o + 1 == s && (c += "."); t--; c += "0");
            return e.s < 0 && i ? "-" + c : c;
          }
          function O(e, t) {
            var r,
              n,
              i = 0;
            for (b(e[0]) && (e = e[0]), r = new U(e[0]); ++i < e.length; ) {
              if (((n = new U(e[i])), !n.s)) {
                r = n;
                break;
              }
              t.call(r, n) && (r = n);
            }
            return r;
          }
          function M(e, t, r) {
            for (var n = 1, i = t.length; !t[--i]; t.pop());
            for (i = t[0]; i >= 10; i /= 10, n++);
            return (
              (r = n + r * h - 1) > k
                ? (e.c = e.e = null)
                : r < S
                  ? (e.c = [(e.e = 0)])
                  : ((e.e = r), (e.c = t)),
              e
            );
          }
          function G(e, t, r, n) {
            var i,
              o,
              a,
              u,
              f,
              d,
              y,
              E = e.c,
              g = p;
            if (E) {
              e: {
                for (i = 1, u = E[0]; u >= 10; u /= 10, i++);
                if (((o = t - i), o < 0))
                  ((o += h),
                    (a = t),
                    (f = E[(d = 0)]),
                    (y = ((f / g[i - a - 1]) % 10) | 0));
                else if (((d = s((o + 1) / h)), d >= E.length)) {
                  if (!n) break e;
                  for (; E.length <= d; E.push(0));
                  ((f = y = 0), (i = 1), (o %= h), (a = o - h + 1));
                } else {
                  for (f = u = E[d], i = 1; u >= 10; u /= 10, i++);
                  ((o %= h),
                    (a = o - h + i),
                    (y = a < 0 ? 0 : ((f / g[i - a - 1]) % 10) | 0));
                }
                if (
                  ((n =
                    n ||
                    t < 0 ||
                    null != E[d + 1] ||
                    (a < 0 ? f : f % g[i - a - 1])),
                  (n =
                    r < 4
                      ? (y || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                      : y > 5 ||
                        (5 == y &&
                          (4 == r ||
                            n ||
                            (6 == r &&
                              ((o > 0 ? (a > 0 ? f / g[i - a] : 0) : E[d - 1]) %
                                10) &
                                1) ||
                            r == (e.s < 0 ? 8 : 7)))),
                  t < 1 || !E[0])
                )
                  return (
                    (E.length = 0),
                    n
                      ? ((t -= e.e + 1),
                        (E[0] = g[(h - (t % h)) % h]),
                        (e.e = -t || 0))
                      : (E[0] = e.e = 0),
                    e
                  );
                if (
                  (0 == o
                    ? ((E.length = d), (u = 1), d--)
                    : ((E.length = d + 1),
                      (u = g[h - o]),
                      (E[d] = a > 0 ? c((f / g[i - a]) % g[a]) * u : 0)),
                  n)
                )
                  for (;;) {
                    if (0 == d) {
                      for (o = 1, a = E[0]; a >= 10; a /= 10, o++);
                      for (a = E[0] += u, u = 1; a >= 10; a /= 10, u++);
                      o != u && (e.e++, E[0] == l && (E[0] = 1));
                      break;
                    }
                    if (((E[d] += u), E[d] != l)) break;
                    ((E[d--] = 0), (u = 1));
                  }
                for (o = E.length; 0 === E[--o]; E.pop());
              }
              e.e > k ? (e.c = e.e = null) : e.e < S && (e.c = [(e.e = 0)]);
            }
            return e;
          }
          return (
            (U.clone = g),
            (U.ROUND_UP = 0),
            (U.ROUND_DOWN = 1),
            (U.ROUND_CEIL = 2),
            (U.ROUND_FLOOR = 3),
            (U.ROUND_HALF_UP = 4),
            (U.ROUND_HALF_DOWN = 5),
            (U.ROUND_HALF_EVEN = 6),
            (U.ROUND_HALF_CEIL = 7),
            (U.ROUND_HALF_FLOOR = 8),
            (U.EUCLID = 9),
            (U.config = U.set =
              function (e) {
                var t, r;
                if (null != e) {
                  if ("object" != typeof e)
                    throw Error(u + "Object expected: " + e);
                  if (
                    (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                      ((r = e[t]), w(r, 0, E, t), (T = r)),
                    e.hasOwnProperty((t = "ROUNDING_MODE")) &&
                      ((r = e[t]), w(r, 0, 8, t), (L = r)),
                    e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                      ((r = e[t]),
                      b(r)
                        ? (w(r[0], -E, 0, t),
                          w(r[1], 0, E, t),
                          (P = r[0]),
                          (C = r[1]))
                        : (w(r, -E, E, t), (P = -(C = r < 0 ? -r : r)))),
                    e.hasOwnProperty((t = "RANGE")))
                  )
                    if (((r = e[t]), b(r)))
                      (w(r[0], -E, -1, t),
                        w(r[1], 1, E, t),
                        (S = r[0]),
                        (k = r[1]));
                    else {
                      if ((w(r, -E, E, t), !r))
                        throw Error(u + t + " cannot be zero: " + r);
                      S = -(k = r < 0 ? -r : r);
                    }
                  if (e.hasOwnProperty((t = "CRYPTO"))) {
                    if (((r = e[t]), r !== !!r))
                      throw Error(u + t + " not true or false: " + r);
                    if (r) {
                      if (
                        "undefined" == typeof crypto ||
                        !crypto ||
                        (!crypto.getRandomValues && !crypto.randomBytes)
                      )
                        throw ((D = !r), Error(u + "crypto unavailable"));
                      D = r;
                    } else D = r;
                  }
                  if (
                    (e.hasOwnProperty((t = "MODULO_MODE")) &&
                      ((r = e[t]), w(r, 0, 9, t), (x = r)),
                    e.hasOwnProperty((t = "POW_PRECISION")) &&
                      ((r = e[t]), w(r, 0, E, t), (B = r)),
                    e.hasOwnProperty((t = "FORMAT")))
                  ) {
                    if (((r = e[t]), "object" != typeof r))
                      throw Error(u + t + " not an object: " + r);
                    R = r;
                  }
                  if (e.hasOwnProperty((t = "ALPHABET"))) {
                    if (
                      ((r = e[t]),
                      "string" != typeof r || /^.$|\.|(.).*\1/.test(r))
                    )
                      throw Error(u + t + " invalid: " + r);
                    K = r;
                  }
                }
                return {
                  DECIMAL_PLACES: T,
                  ROUNDING_MODE: L,
                  EXPONENTIAL_AT: [P, C],
                  RANGE: [S, k],
                  CRYPTO: D,
                  MODULO_MODE: x,
                  POW_PRECISION: B,
                  FORMAT: R,
                  ALPHABET: K,
                };
              }),
            (U.isBigNumber = function (e) {
              return e instanceof U || (e && !0 === e._isBigNumber) || !1;
            }),
            (U.maximum = U.max =
              function () {
                return O(arguments, i.lt);
              }),
            (U.minimum = U.min =
              function () {
                return O(arguments, i.gt);
              }),
            (U.random = (function () {
              var e = 9007199254740992,
                t =
                  (Math.random() * e) & 2097151
                    ? function () {
                        return c(Math.random() * e);
                      }
                    : function () {
                        return (
                          8388608 * ((1073741824 * Math.random()) | 0) +
                          ((8388608 * Math.random()) | 0)
                        );
                      };
              return function (e) {
                var r,
                  n,
                  i,
                  a,
                  f,
                  l = 0,
                  d = [],
                  y = new U(o);
                if ((null == e ? (e = T) : w(e, 0, E), (a = s(e / h)), D))
                  if (crypto.getRandomValues) {
                    for (
                      r = crypto.getRandomValues(new Uint32Array((a *= 2)));
                      l < a;
                    )
                      ((f = 131072 * r[l] + (r[l + 1] >>> 11)),
                        f >= 9e15
                          ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                            (r[l] = n[0]),
                            (r[l + 1] = n[1]))
                          : (d.push(f % 1e14), (l += 2)));
                    l = a / 2;
                  } else {
                    if (!crypto.randomBytes)
                      throw ((D = !1), Error(u + "crypto unavailable"));
                    for (r = crypto.randomBytes((a *= 7)); l < a; )
                      ((f =
                        281474976710656 * (31 & r[l]) +
                        1099511627776 * r[l + 1] +
                        4294967296 * r[l + 2] +
                        16777216 * r[l + 3] +
                        (r[l + 4] << 16) +
                        (r[l + 5] << 8) +
                        r[l + 6]),
                        f >= 9e15
                          ? crypto.randomBytes(7).copy(r, l)
                          : (d.push(f % 1e14), (l += 7)));
                    l = a / 7;
                  }
                if (!D)
                  for (; l < a; ) ((f = t()), f < 9e15 && (d[l++] = f % 1e14));
                for (
                  a = d[--l],
                    e %= h,
                    a && e && ((f = p[h - e]), (d[l] = c(a / f) * f));
                  0 === d[l];
                  d.pop(), l--
                );
                if (l < 0) d = [(i = 0)];
                else {
                  for (i = -1; 0 === d[0]; d.splice(0, 1), i -= h);
                  for (l = 1, f = d[0]; f >= 10; f /= 10, l++);
                  l < h && (i -= h - l);
                }
                return ((y.e = i), (y.c = d), y);
              };
            })()),
            (r = (function () {
              var e = "0123456789";
              function r(e, t, r, n) {
                for (var i, o, a = [0], s = 0, c = e.length; s < c; ) {
                  for (o = a.length; o--; a[o] *= t);
                  for (
                    a[0] += n.indexOf(e.charAt(s++)), i = 0;
                    i < a.length;
                    i++
                  )
                    a[i] > r - 1 &&
                      (null == a[i + 1] && (a[i + 1] = 0),
                      (a[i + 1] += (a[i] / r) | 0),
                      (a[i] %= r));
                }
                return a.reverse();
              }
              return function (n, i, o, a, s) {
                var c,
                  u,
                  f,
                  l,
                  h,
                  d,
                  p,
                  y,
                  E = n.indexOf("."),
                  g = T,
                  v = L;
                for (
                  E >= 0 &&
                    ((l = B),
                    (B = 0),
                    (n = n.replace(".", "")),
                    (y = new U(i)),
                    (d = y.pow(n.length - E)),
                    (B = l),
                    (y.c = r(N(_(d.c), d.e, "0"), 10, o, e)),
                    (y.e = y.c.length)),
                    p = r(n, i, o, s ? ((c = K), e) : ((c = e), K)),
                    f = l = p.length;
                  0 == p[--l];
                  p.pop()
                );
                if (!p[0]) return c.charAt(0);
                if (
                  (E < 0
                    ? --f
                    : ((d.c = p),
                      (d.e = f),
                      (d.s = a),
                      (d = t(d, y, g, v, o)),
                      (p = d.c),
                      (h = d.r),
                      (f = d.e)),
                  (u = f + g + 1),
                  (E = p[u]),
                  (l = o / 2),
                  (h = h || u < 0 || null != p[u + 1]),
                  (h =
                    v < 4
                      ? (null != E || h) && (0 == v || v == (d.s < 0 ? 3 : 2))
                      : E > l ||
                        (E == l &&
                          (4 == v ||
                            h ||
                            (6 == v && 1 & p[u - 1]) ||
                            v == (d.s < 0 ? 8 : 7)))),
                  u < 1 || !p[0])
                )
                  n = h ? N(c.charAt(1), -g, c.charAt(0)) : c.charAt(0);
                else {
                  if (((p.length = u), h))
                    for (--o; ++p[--u] > o; )
                      ((p[u] = 0), u || (++f, (p = [1].concat(p))));
                  for (l = p.length; !p[--l]; );
                  for (E = 0, n = ""; E <= l; n += c.charAt(p[E++]));
                  n = N(n, f, c.charAt(0));
                }
                return n;
              };
            })()),
            (t = (function () {
              function e(e, t, r) {
                var n,
                  i,
                  o,
                  a,
                  s = 0,
                  c = e.length,
                  u = t % y,
                  f = (t / y) | 0;
                for (e = e.slice(); c--; )
                  ((o = e[c] % y),
                    (a = (e[c] / y) | 0),
                    (n = f * o + a * u),
                    (i = u * o + (n % y) * y + s),
                    (s = ((i / r) | 0) + ((n / y) | 0) + f * a),
                    (e[c] = i % r));
                return (s && (e = [s].concat(e)), e);
              }
              function t(e, t, r, n) {
                var i, o;
                if (r != n) o = r > n ? 1 : -1;
                else
                  for (i = o = 0; i < r; i++)
                    if (e[i] != t[i]) {
                      o = e[i] > t[i] ? 1 : -1;
                      break;
                    }
                return o;
              }
              function r(e, t, r, n) {
                for (var i = 0; r--; )
                  ((e[r] -= i),
                    (i = e[r] < t[r] ? 1 : 0),
                    (e[r] = i * n + e[r] - t[r]));
                for (; !e[0] && e.length > 1; e.splice(0, 1));
              }
              return function (n, i, o, a, s) {
                var u,
                  f,
                  d,
                  p,
                  y,
                  E,
                  g,
                  _,
                  m,
                  w,
                  b,
                  A,
                  I,
                  N,
                  T,
                  L,
                  P,
                  C = n.s == i.s ? 1 : -1,
                  S = n.c,
                  k = i.c;
                if (!S || !S[0] || !k || !k[0])
                  return new U(
                    n.s && i.s && (S ? !k || S[0] != k[0] : k)
                      ? (S && 0 == S[0]) || !k
                        ? 0 * C
                        : C / 0
                      : NaN,
                  );
                for (
                  _ = new U(C),
                    m = _.c = [],
                    f = n.e - i.e,
                    C = o + f + 1,
                    s ||
                      ((s = l),
                      (f = v(n.e / h) - v(i.e / h)),
                      (C = (C / h) | 0)),
                    d = 0;
                  k[d] == (S[d] || 0);
                  d++
                );
                if ((k[d] > (S[d] || 0) && f--, C < 0)) (m.push(1), (p = !0));
                else {
                  for (
                    N = S.length,
                      L = k.length,
                      d = 0,
                      C += 2,
                      y = c(s / (k[0] + 1)),
                      y > 1 &&
                        ((k = e(k, y, s)),
                        (S = e(S, y, s)),
                        (L = k.length),
                        (N = S.length)),
                      I = L,
                      w = S.slice(0, L),
                      b = w.length;
                    b < L;
                    w[b++] = 0
                  );
                  ((P = k.slice()),
                    (P = [0].concat(P)),
                    (T = k[0]),
                    k[1] >= s / 2 && T++);
                  do {
                    if (((y = 0), (u = t(k, w, L, b)), u < 0)) {
                      if (
                        ((A = w[0]),
                        L != b && (A = A * s + (w[1] || 0)),
                        (y = c(A / T)),
                        y > 1)
                      ) {
                        (y >= s && (y = s - 1),
                          (E = e(k, y, s)),
                          (g = E.length),
                          (b = w.length));
                        while (1 == t(E, w, g, b))
                          (y--,
                            r(E, L < g ? P : k, g, s),
                            (g = E.length),
                            (u = 1));
                      } else
                        (0 == y && (u = y = 1),
                          (E = k.slice()),
                          (g = E.length));
                      if (
                        (g < b && (E = [0].concat(E)),
                        r(w, E, b, s),
                        (b = w.length),
                        -1 == u)
                      )
                        while (t(k, w, L, b) < 1)
                          (y++, r(w, L < b ? P : k, b, s), (b = w.length));
                    } else 0 === u && (y++, (w = [0]));
                    ((m[d++] = y),
                      w[0] ? (w[b++] = S[I] || 0) : ((w = [S[I]]), (b = 1)));
                  } while ((I++ < N || null != w[0]) && C--);
                  ((p = null != w[0]), m[0] || m.splice(0, 1));
                }
                if (s == l) {
                  for (d = 1, C = m[0]; C >= 10; C /= 10, d++);
                  G(_, o + (_.e = d + f * h - 1) + 1, a, p);
                } else ((_.e = f), (_.r = +p));
                return _;
              };
            })()),
            (n = (function () {
              var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                t = /^([^.]+)\.$/,
                r = /^\.([^.]+)$/,
                n = /^-?(Infinity|NaN)$/,
                i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
              return function (o, a, s, c) {
                var f,
                  l = s ? a : a.replace(i, "");
                if (n.test(l))
                  ((o.s = isNaN(l) ? null : l < 0 ? -1 : 1),
                    (o.c = o.e = null));
                else {
                  if (
                    !s &&
                    ((l = l.replace(e, function (e, t, r) {
                      return (
                        (f =
                          "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                        c && c != f ? e : t
                      );
                    })),
                    c && ((f = c), (l = l.replace(t, "$1").replace(r, "0.$1"))),
                    a != l)
                  )
                    return new U(l, f);
                  if (U.DEBUG)
                    throw Error(
                      u + "Not a" + (c ? " base " + c : "") + " number: " + a,
                    );
                  o.c = o.e = o.s = null;
                }
              };
            })()),
            (i.absoluteValue = i.abs =
              function () {
                var e = new U(this);
                return (e.s < 0 && (e.s = 1), e);
              }),
            (i.comparedTo = function (e, t) {
              return m(this, new U(e, t));
            }),
            (i.decimalPlaces = i.dp =
              function (e, t) {
                var r,
                  n,
                  i,
                  o = this;
                if (null != e)
                  return (
                    w(e, 0, E),
                    null == t ? (t = L) : w(t, 0, 8),
                    G(new U(o), e + o.e + 1, t)
                  );
                if (!(r = o.c)) return null;
                if (
                  ((n = ((i = r.length - 1) - v(this.e / h)) * h), (i = r[i]))
                )
                  for (; i % 10 == 0; i /= 10, n--);
                return (n < 0 && (n = 0), n);
              }),
            (i.dividedBy = i.div =
              function (e, r) {
                return t(this, new U(e, r), T, L);
              }),
            (i.dividedToIntegerBy = i.idiv =
              function (e, r) {
                return t(this, new U(e, r), 0, 1);
              }),
            (i.exponentiatedBy = i.pow =
              function (e, t) {
                var r,
                  n,
                  i,
                  a,
                  f,
                  l,
                  d,
                  p,
                  y = this;
                if (((e = new U(e)), e.c && !e.isInteger()))
                  throw Error(u + "Exponent not an integer: " + e);
                if (
                  (null != t && (t = new U(t)),
                  (f = e.e > 14),
                  !y.c ||
                    !y.c[0] ||
                    (1 == y.c[0] && !y.e && 1 == y.c.length) ||
                    !e.c ||
                    !e.c[0])
                )
                  return (
                    (p = new U(Math.pow(+y.valueOf(), f ? 2 - A(e) : +e))),
                    t ? p.mod(t) : p
                  );
                if (((l = e.s < 0), t)) {
                  if (t.c ? !t.c[0] : !t.s) return new U(NaN);
                  ((n = !l && y.isInteger() && t.isInteger()),
                    n && (y = y.mod(t)));
                } else {
                  if (
                    e.e > 9 &&
                    (y.e > 0 ||
                      y.e < -1 ||
                      (0 == y.e
                        ? y.c[0] > 1 || (f && y.c[1] >= 24e7)
                        : y.c[0] < 8e13 || (f && y.c[0] <= 9999975e7)))
                  )
                    return (
                      (i = y.s < 0 && A(e) ? -0 : 0),
                      y.e > -1 && (i = 1 / i),
                      new U(l ? 1 / i : i)
                    );
                  B && (i = s(B / h + 2));
                }
                for (
                  f ? ((r = new U(0.5)), (d = A(e))) : (d = e % 2),
                    l && (e.s = 1),
                    p = new U(o);
                  ;
                ) {
                  if (d) {
                    if (((p = p.times(y)), !p.c)) break;
                    i
                      ? p.c.length > i && (p.c.length = i)
                      : n && (p = p.mod(t));
                  }
                  if (f) {
                    if (((e = e.times(r)), G(e, e.e + 1, 1), !e.c[0])) break;
                    ((f = e.e > 14), (d = A(e)));
                  } else {
                    if (((e = c(e / 2)), !e)) break;
                    d = e % 2;
                  }
                  ((y = y.times(y)),
                    i
                      ? y.c && y.c.length > i && (y.c.length = i)
                      : n && (y = y.mod(t)));
                }
                return n
                  ? p
                  : (l && (p = o.div(p)), t ? p.mod(t) : i ? G(p, B, L, a) : p);
              }),
            (i.integerValue = function (e) {
              var t = new U(this);
              return (null == e ? (e = L) : w(e, 0, 8), G(t, t.e + 1, e));
            }),
            (i.isEqualTo = i.eq =
              function (e, t) {
                return 0 === m(this, new U(e, t));
              }),
            (i.isFinite = function () {
              return !!this.c;
            }),
            (i.isGreaterThan = i.gt =
              function (e, t) {
                return m(this, new U(e, t)) > 0;
              }),
            (i.isGreaterThanOrEqualTo = i.gte =
              function (e, t) {
                return 1 === (t = m(this, new U(e, t))) || 0 === t;
              }),
            (i.isInteger = function () {
              return !!this.c && v(this.e / h) > this.c.length - 2;
            }),
            (i.isLessThan = i.lt =
              function (e, t) {
                return m(this, new U(e, t)) < 0;
              }),
            (i.isLessThanOrEqualTo = i.lte =
              function (e, t) {
                return -1 === (t = m(this, new U(e, t))) || 0 === t;
              }),
            (i.isNaN = function () {
              return !this.s;
            }),
            (i.isNegative = function () {
              return this.s < 0;
            }),
            (i.isPositive = function () {
              return this.s > 0;
            }),
            (i.isZero = function () {
              return !!this.c && 0 == this.c[0];
            }),
            (i.minus = function (e, t) {
              var r,
                n,
                i,
                o,
                a = this,
                s = a.s;
              if (((e = new U(e, t)), (t = e.s), !s || !t)) return new U(NaN);
              if (s != t) return ((e.s = -t), a.plus(e));
              var c = a.e / h,
                u = e.e / h,
                f = a.c,
                d = e.c;
              if (!c || !u) {
                if (!f || !d) return f ? ((e.s = -t), e) : new U(d ? a : NaN);
                if (!f[0] || !d[0])
                  return d[0]
                    ? ((e.s = -t), e)
                    : new U(f[0] ? a : 3 == L ? -0 : 0);
              }
              if (((c = v(c)), (u = v(u)), (f = f.slice()), (s = c - u))) {
                for (
                  (o = s < 0) ? ((s = -s), (i = f)) : ((u = c), (i = d)),
                    i.reverse(),
                    t = s;
                  t--;
                  i.push(0)
                );
                i.reverse();
              } else
                for (
                  n = (o = (s = f.length) < (t = d.length)) ? s : t, s = t = 0;
                  t < n;
                  t++
                )
                  if (f[t] != d[t]) {
                    o = f[t] < d[t];
                    break;
                  }
              if (
                (o && ((i = f), (f = d), (d = i), (e.s = -e.s)),
                (t = (n = d.length) - (r = f.length)),
                t > 0)
              )
                for (; t--; f[r++] = 0);
              for (t = l - 1; n > s; ) {
                if (f[--n] < d[n]) {
                  for (r = n; r && !f[--r]; f[r] = t);
                  (--f[r], (f[n] += l));
                }
                f[n] -= d[n];
              }
              for (; 0 == f[0]; f.splice(0, 1), --u);
              return f[0]
                ? M(e, f, u)
                : ((e.s = 3 == L ? -1 : 1), (e.c = [(e.e = 0)]), e);
            }),
            (i.modulo = i.mod =
              function (e, r) {
                var n,
                  i,
                  o = this;
                return (
                  (e = new U(e, r)),
                  !o.c || !e.s || (e.c && !e.c[0])
                    ? new U(NaN)
                    : !e.c || (o.c && !o.c[0])
                      ? new U(o)
                      : (9 == x
                          ? ((i = e.s),
                            (e.s = 1),
                            (n = t(o, e, 0, 3)),
                            (e.s = i),
                            (n.s *= i))
                          : (n = t(o, e, 0, x)),
                        (e = o.minus(n.times(e))),
                        e.c[0] || 1 != x || (e.s = o.s),
                        e)
                );
              }),
            (i.multipliedBy = i.times =
              function (e, t) {
                var r,
                  n,
                  i,
                  o,
                  a,
                  s,
                  c,
                  u,
                  f,
                  d,
                  p,
                  E,
                  g,
                  _,
                  m,
                  w = this,
                  b = w.c,
                  A = (e = new U(e, t)).c;
                if (!b || !A || !b[0] || !A[0])
                  return (
                    !w.s || !e.s || (b && !b[0] && !A) || (A && !A[0] && !b)
                      ? (e.c = e.e = e.s = null)
                      : ((e.s *= w.s),
                        b && A ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null)),
                    e
                  );
                for (
                  n = v(w.e / h) + v(e.e / h),
                    e.s *= w.s,
                    c = b.length,
                    d = A.length,
                    c < d &&
                      ((g = b), (b = A), (A = g), (i = c), (c = d), (d = i)),
                    i = c + d,
                    g = [];
                  i--;
                  g.push(0)
                );
                for (_ = l, m = y, i = d; --i >= 0; ) {
                  for (
                    r = 0, p = A[i] % m, E = (A[i] / m) | 0, a = c, o = i + a;
                    o > i;
                  )
                    ((u = b[--a] % m),
                      (f = (b[a] / m) | 0),
                      (s = E * u + f * p),
                      (u = p * u + (s % m) * m + g[o] + r),
                      (r = ((u / _) | 0) + ((s / m) | 0) + E * f),
                      (g[o--] = u % _));
                  g[o] = r;
                }
                return (r ? ++n : g.splice(0, 1), M(e, g, n));
              }),
            (i.negated = function () {
              var e = new U(this);
              return ((e.s = -e.s || null), e);
            }),
            (i.plus = function (e, t) {
              var r,
                n = this,
                i = n.s;
              if (((e = new U(e, t)), (t = e.s), !i || !t)) return new U(NaN);
              if (i != t) return ((e.s = -t), n.minus(e));
              var o = n.e / h,
                a = e.e / h,
                s = n.c,
                c = e.c;
              if (!o || !a) {
                if (!s || !c) return new U(i / 0);
                if (!s[0] || !c[0]) return c[0] ? e : new U(s[0] ? n : 0 * i);
              }
              if (((o = v(o)), (a = v(a)), (s = s.slice()), (i = o - a))) {
                for (
                  i > 0 ? ((a = o), (r = c)) : ((i = -i), (r = s)), r.reverse();
                  i--;
                  r.push(0)
                );
                r.reverse();
              }
              for (
                i = s.length,
                  t = c.length,
                  i - t < 0 && ((r = c), (c = s), (s = r), (t = i)),
                  i = 0;
                t;
              )
                ((i = ((s[--t] = s[t] + c[t] + i) / l) | 0),
                  (s[t] = l === s[t] ? 0 : s[t] % l));
              return (i && ((s = [i].concat(s)), ++a), M(e, s, a));
            }),
            (i.precision = i.sd =
              function (e, t) {
                var r,
                  n,
                  i,
                  o = this;
                if (null != e && e !== !!e)
                  return (
                    w(e, 1, E),
                    null == t ? (t = L) : w(t, 0, 8),
                    G(new U(o), e, t)
                  );
                if (!(r = o.c)) return null;
                if (((i = r.length - 1), (n = i * h + 1), (i = r[i]))) {
                  for (; i % 10 == 0; i /= 10, n--);
                  for (i = r[0]; i >= 10; i /= 10, n++);
                }
                return (e && o.e + 1 > n && (n = o.e + 1), n);
              }),
            (i.shiftedBy = function (e) {
              return (w(e, -d, d), this.times("1e" + e));
            }),
            (i.squareRoot = i.sqrt =
              function () {
                var e,
                  r,
                  n,
                  i,
                  o,
                  a = this,
                  s = a.c,
                  c = a.s,
                  u = a.e,
                  f = T + 4,
                  l = new U("0.5");
                if (1 !== c || !s || !s[0])
                  return new U(
                    !c || (c < 0 && (!s || s[0])) ? NaN : s ? a : 1 / 0,
                  );
                if (
                  ((c = Math.sqrt(+a)),
                  0 == c || c == 1 / 0
                    ? ((r = _(s)),
                      (r.length + u) % 2 == 0 && (r += "0"),
                      (c = Math.sqrt(r)),
                      (u = v((u + 1) / 2) - (u < 0 || u % 2)),
                      c == 1 / 0
                        ? (r = "1e" + u)
                        : ((r = c.toExponential()),
                          (r = r.slice(0, r.indexOf("e") + 1) + u)),
                      (n = new U(r)))
                    : (n = new U(c + "")),
                  n.c[0])
                )
                  for (u = n.e, c = u + f, c < 3 && (c = 0); ; )
                    if (
                      ((o = n),
                      (n = l.times(o.plus(t(a, o, f, 1)))),
                      _(o.c).slice(0, c) === (r = _(n.c)).slice(0, c))
                    ) {
                      if (
                        (n.e < u && --c,
                        (r = r.slice(c - 3, c + 1)),
                        "9999" != r && (i || "4999" != r))
                      ) {
                        (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                          (G(n, n.e + T + 2, 1), (e = !n.times(n).eq(a)));
                        break;
                      }
                      if (!i && (G(o, o.e + T + 2, 0), o.times(o).eq(a))) {
                        n = o;
                        break;
                      }
                      ((f += 4), (c += 4), (i = 1));
                    }
                return G(n, n.e + T + 1, L, e);
              }),
            (i.toExponential = function (e, t) {
              return (null != e && (w(e, 0, E), e++), V(this, e, t, 1));
            }),
            (i.toFixed = function (e, t) {
              return (
                null != e && (w(e, 0, E), (e = e + this.e + 1)),
                V(this, e, t)
              );
            }),
            (i.toFormat = function (e, t) {
              var r = this.toFixed(e, t);
              if (this.c) {
                var n,
                  i = r.split("."),
                  o = +R.groupSize,
                  a = +R.secondaryGroupSize,
                  s = R.groupSeparator,
                  c = i[0],
                  u = i[1],
                  f = this.s < 0,
                  l = f ? c.slice(1) : c,
                  h = l.length;
                if (
                  (a && ((n = o), (o = a), (a = n), (h -= n)), o > 0 && h > 0)
                ) {
                  for (n = h % o || o, c = l.substr(0, n); n < h; n += o)
                    c += s + l.substr(n, o);
                  (a > 0 && (c += s + l.slice(n)), f && (c = "-" + c));
                }
                r = u
                  ? c +
                    R.decimalSeparator +
                    ((a = +R.fractionGroupSize)
                      ? u.replace(
                          new RegExp("\\d{" + a + "}\\B", "g"),
                          "$&" + R.fractionGroupSeparator,
                        )
                      : u)
                  : c;
              }
              return r;
            }),
            (i.toFraction = function (e) {
              var r,
                n,
                i,
                a,
                s,
                c,
                f,
                l,
                d,
                y,
                E,
                g,
                v = this,
                m = v.c;
              if (
                null != e &&
                ((l = new U(e)),
                (!l.isInteger() && (l.c || 1 !== l.s)) || l.lt(o))
              )
                throw Error(
                  u +
                    "Argument " +
                    (l.isInteger() ? "out of range: " : "not an integer: ") +
                    e,
                );
              if (!m) return v.toString();
              for (
                n = new U(o),
                  y = i = new U(o),
                  a = d = new U(o),
                  g = _(m),
                  c = n.e = g.length - v.e - 1,
                  n.c[0] = p[(f = c % h) < 0 ? h + f : f],
                  e = !e || l.comparedTo(n) > 0 ? (c > 0 ? n : y) : l,
                  f = k,
                  k = 1 / 0,
                  l = new U(g),
                  d.c[0] = 0;
                ;
              ) {
                if (
                  ((E = t(l, n, 0, 1)),
                  (s = i.plus(E.times(a))),
                  1 == s.comparedTo(e))
                )
                  break;
                ((i = a),
                  (a = s),
                  (y = d.plus(E.times((s = y)))),
                  (d = s),
                  (n = l.minus(E.times((s = n)))),
                  (l = s));
              }
              return (
                (s = t(e.minus(i), a, 0, 1)),
                (d = d.plus(s.times(y))),
                (i = i.plus(s.times(a))),
                (d.s = y.s = v.s),
                (c *= 2),
                (r =
                  t(y, a, c, L)
                    .minus(v)
                    .abs()
                    .comparedTo(t(d, i, c, L).minus(v).abs()) < 1
                    ? [y.toString(), a.toString()]
                    : [d.toString(), i.toString()]),
                (k = f),
                r
              );
            }),
            (i.toNumber = function () {
              return +this;
            }),
            (i.toPrecision = function (e, t) {
              return (null != e && w(e, 1, E), V(this, e, t, 2));
            }),
            (i.toString = function (e) {
              var t,
                n = this,
                i = n.s,
                o = n.e;
              return (
                null === o
                  ? i
                    ? ((t = "Infinity"), i < 0 && (t = "-" + t))
                    : (t = "NaN")
                  : ((t = _(n.c)),
                    null == e
                      ? (t = o <= P || o >= C ? I(t, o) : N(t, o, "0"))
                      : (w(e, 2, K.length, "Base"),
                        (t = r(N(t, o, "0"), 10, e, i, !0))),
                    i < 0 && n.c[0] && (t = "-" + t)),
                t
              );
            }),
            (i.valueOf = i.toJSON =
              function () {
                var e,
                  t = this,
                  r = t.e;
                return null === r
                  ? t.toString()
                  : ((e = _(t.c)),
                    (e = r <= P || r >= C ? I(e, r) : N(e, r, "0")),
                    t.s < 0 ? "-" + e : e);
              }),
            (i._isBigNumber = !0),
            null != e && U.set(e),
            U
          );
        }
        function v(e) {
          var t = 0 | e;
          return e > 0 || e === t ? t : t - 1;
        }
        function _(e) {
          for (var t, r, n = 1, i = e.length, o = e[0] + ""; n < i; ) {
            for (t = e[n++] + "", r = h - t.length; r--; t = "0" + t);
            o += t;
          }
          for (i = o.length; 48 === o.charCodeAt(--i); );
          return o.slice(0, i + 1 || 1);
        }
        function m(e, t) {
          var r,
            n,
            i = e.c,
            o = t.c,
            a = e.s,
            s = t.s,
            c = e.e,
            u = t.e;
          if (!a || !s) return null;
          if (((r = i && !i[0]), (n = o && !o[0]), r || n))
            return r ? (n ? 0 : -s) : a;
          if (a != s) return a;
          if (((r = a < 0), (n = c == u), !i || !o))
            return n ? 0 : !i ^ r ? 1 : -1;
          if (!n) return (c > u) ^ r ? 1 : -1;
          for (s = (c = i.length) < (u = o.length) ? c : u, a = 0; a < s; a++)
            if (i[a] != o[a]) return (i[a] > o[a]) ^ r ? 1 : -1;
          return c == u ? 0 : (c > u) ^ r ? 1 : -1;
        }
        function w(e, t, r, n) {
          if (e < t || e > r || e !== (e < 0 ? s(e) : c(e)))
            throw Error(
              u +
                (n || "Argument") +
                ("number" == typeof e
                  ? e < t || e > r
                    ? " out of range: "
                    : " not an integer: "
                  : " not a primitive number: ") +
                e,
            );
        }
        function b(e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        }
        function A(e) {
          var t = e.c.length - 1;
          return v(e.e / h) == t && e.c[t] % 2 != 0;
        }
        function I(e, t) {
          return (
            (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
            (t < 0 ? "e" : "e+") +
            t
          );
        }
        function N(e, t, r) {
          var n, i;
          if (t < 0) {
            for (i = r + "."; ++t; i += r);
            e = i + e;
          } else if (((n = e.length), ++t > n)) {
            for (i = r, t -= n; --t; i += r);
            e += i;
          } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
          return e;
        }
        ((o = g()),
          (o["default"] = o.BigNumber = o),
          (n = function () {
            return o;
          }.call(t, r, t, e)),
          void 0 === n || (e.exports = n));
      })();
    },
    7653: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Bloom = void 0));
        var n = r(4280);
        class Bloom {
          constructor(t, r) {
            ((this.bits = r || e.alloc(Bloom.BITS_LENGTH / 8)), (this.k = t));
          }
          static estimateK(e) {
            const t = Math.round((this.BITS_LENGTH / e) * Math.LN2);
            return Math.max(Math.min(t, this.MAX_K), 1);
          }
          add(e) {
            this.distribute(e, (e, t) => ((this.bits[e] |= t), !0));
          }
          test(e) {
            return this.distribute(e, (e, t) => (this.bits[e] & t) === t);
          }
          distribute(e, t) {
            const r = (0, n.blake2b256)(e);
            for (let n = 0; n < this.k; n++) {
              const e = (r[2 * n + 1] + (r[2 * n] << 8)) % Bloom.BITS_LENGTH,
                i = 1 << (e % 8);
              if (!t(Math.floor(e / 8), i)) return !1;
            }
            return !0;
          }
        }
        ((t.Bloom = Bloom), (Bloom.MAX_K = 16), (Bloom.BITS_LENGTH = 2048));
      }).call(this, r(2).Buffer);
    },
    7654: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Certificate = void 0));
        var n = r(4280);
        const i = r(7655);
        var o;
        (function (t) {
          function r(e) {
            return "string" === typeof e ? e.toLowerCase() : e;
          }
          function o(e) {
            return i(
              Object.assign({}, e, {
                signer: r(e.signer),
                signature: e.signature ? r(e.signature) : e.signature,
              }),
            );
          }
          function a(t) {
            if (!t.signature) throw new Error("signature missing");
            const i = t.signature;
            if (!/^0x[0-9a-f]+$/i.test(i) || i.length % 2 !== 0)
              throw new Error("invalid signature");
            const a = o(Object.assign({}, t, { signature: void 0 })),
              s = (0, n.blake2b256)(a),
              c = n.secp256k1.recover(s, e.from(i.slice(2), "hex"));
            if (
              "0x" + (0, n.publicKeyToAddress)(c).toString("hex") !==
              r(t.signer)
            )
              throw new Error("signature does not match with signer");
          }
          ((t.encode = o), (t.verify = a));
        })(o || (t.Certificate = o = {}));
      }).call(this, r(2).Buffer);
    },
    7655: function (e, t, r) {
      "use strict";
      e.exports = function (e, t) {
        (t || (t = {}), "function" === typeof t && (t = { cmp: t }));
        var r = "boolean" === typeof t.cycles && t.cycles,
          n =
            t.cmp &&
            (function (e) {
              return function (t) {
                return function (r, n) {
                  var i = { key: r, value: t[r] },
                    o = { key: n, value: t[n] };
                  return e(i, o);
                };
              };
            })(t.cmp),
          i = [];
        return (function e(t) {
          if (
            (t &&
              t.toJSON &&
              "function" === typeof t.toJSON &&
              (t = t.toJSON()),
            void 0 !== t)
          ) {
            if ("number" == typeof t) return isFinite(t) ? "" + t : "null";
            if ("object" !== typeof t) return JSON.stringify(t);
            var o, a;
            if (Array.isArray(t)) {
              for (a = "[", o = 0; o < t.length; o++)
                (o && (a += ","), (a += e(t[o]) || "null"));
              return a + "]";
            }
            if (null === t) return "null";
            if (-1 !== i.indexOf(t)) {
              if (r) return JSON.stringify("__cycle__");
              throw new TypeError("Converting circular structure to JSON");
            }
            var s = i.push(t) - 1,
              c = Object.keys(t).sort(n && n(t));
            for (a = "", o = 0; o < c.length; o++) {
              var u = c[o],
                f = e(t[u]);
              f && (a && (a += ","), (a += JSON.stringify(u) + ":" + f));
            }
            return (i.splice(s, 1), "{" + a + "}");
          }
        })(e);
      };
    },
  },
]);
