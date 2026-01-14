(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [43],
  {
    11289: function (t, e) {},
    11290: function (t, e, r) {
      "use strict";
      var i = "http://bitcore.io/";
      t.exports = [
        {
          name: "InvalidB58Char",
          message: "Invalid Base58 character: {0} in {1}",
        },
        {
          name: "InvalidB58Checksum",
          message: "Invalid Base58 checksum for {0}",
        },
        {
          name: "InvalidNetwork",
          message: "Invalid version for network: got {0}",
        },
        { name: "InvalidState", message: "Invalid state: {0}" },
        {
          name: "NotImplemented",
          message: "Function {0} was not implemented yet",
        },
        {
          name: "InvalidNetworkArgument",
          message: 'Invalid network: must be "livenet" or "testnet", got {0}',
        },
        {
          name: "InvalidArgument",
          message: function () {
            return (
              "Invalid Argument" +
              (arguments[0] ? ": " + arguments[0] : "") +
              (arguments[1] ? " Documentation: " + i + arguments[1] : "")
            );
          },
        },
        {
          name: "AbstractMethodInvoked",
          message: "Abstract Method Invocation: {0}",
        },
        {
          name: "InvalidArgumentType",
          message: function () {
            return (
              "Invalid Argument for " +
              arguments[2] +
              ", expected " +
              arguments[1] +
              " but got " +
              typeof arguments[0]
            );
          },
        },
        {
          name: "Unit",
          message: "Internal Error on Unit {0}",
          errors: [
            { name: "UnknownCode", message: "Unrecognized unit code: {0}" },
            { name: "InvalidRate", message: "Invalid exchange rate: {0}" },
          ],
        },
        {
          name: "MerkleBlock",
          message: "Internal Error on MerkleBlock {0}",
          errors: [
            {
              name: "InvalidMerkleTree",
              message: "This MerkleBlock contain an invalid Merkle Tree",
            },
          ],
        },
        {
          name: "Transaction",
          message: "Internal Error on Transaction {0}",
          errors: [
            {
              name: "Input",
              message: "Internal Error on Input {0}",
              errors: [
                {
                  name: "MissingScript",
                  message: "Need a script to create an input",
                },
                {
                  name: "UnsupportedScript",
                  message: "Unsupported input script type: {0}",
                },
                {
                  name: "MissingPreviousOutput",
                  message: "No previous output information.",
                },
                {
                  name: "BlockHeightOutOfRange",
                  message: "Block Height can only be between 0 and 65535",
                },
                {
                  name: "LockTimeRange",
                  message:
                    "Seconds needs to be more that 0 and less that 33553920",
                },
              ],
            },
            { name: "NeedMoreInfo", message: "{0}" },
            {
              name: "InvalidSorting",
              message:
                "The sorting function provided did not return the change output as one of the array elements",
            },
            { name: "InvalidOutputAmountSum", message: "{0}" },
            {
              name: "MissingSignatures",
              message: "Some inputs have not been fully signed",
            },
            {
              name: "InvalidIndex",
              message: "Invalid index: {0} is not between 0, {1}",
            },
            {
              name: "UnableToVerifySignature",
              message: "Unable to verify signature: {0}",
            },
            {
              name: "DustOutputs",
              message: "Dust amount detected in one output",
            },
            { name: "InvalidSatoshis", message: "Output satoshis are invalid" },
            {
              name: "FeeError",
              message: "Internal Error on Fee {0}",
              errors: [
                { name: "TooSmall", message: "Fee is too small: {0}" },
                { name: "TooLarge", message: "Fee is too large: {0}" },
                {
                  name: "Different",
                  message: "Unspent value is different from specified fee: {0}",
                },
              ],
            },
            {
              name: "ChangeAddressMissing",
              message: "Change address is missing",
            },
            {
              name: "BlockHeightTooHigh",
              message: "Block Height can be at most 2^32 -1",
            },
            {
              name: "NLockTimeOutOfRange",
              message: "Block Height can only be between 0 and 499 999 999",
            },
            {
              name: "LockTimeTooEarly",
              message: "Lock Time can't be earlier than UNIX date 500 000 000",
            },
          ],
        },
        {
          name: "Script",
          message: "Internal Error on Script {0}",
          errors: [
            {
              name: "UnrecognizedAddress",
              message: "Expected argument {0} to be an address",
            },
            {
              name: "CantDeriveAddress",
              message:
                "Can't derive address associated with script {0}, needs to be p2pkh in, p2pkh out, p2sh in, or p2sh out.",
            },
            {
              name: "InvalidBuffer",
              message:
                "Invalid script buffer: can't parse valid script from given buffer {0}",
            },
          ],
        },
        {
          name: "HDPrivateKey",
          message: "Internal Error on HDPrivateKey {0}",
          errors: [
            {
              name: "InvalidDerivationArgument",
              message:
                "Invalid derivation argument {0}, expected string, or number and boolean",
            },
            {
              name: "InvalidEntropyArgument",
              message:
                "Invalid entropy: must be an hexa string or binary buffer, got {0}",
              errors: [
                {
                  name: "TooMuchEntropy",
                  message:
                    'Invalid entropy: more than 512 bits is non standard, got "{0}"',
                },
                {
                  name: "NotEnoughEntropy",
                  message:
                    'Invalid entropy: at least 128 bits needed, got "{0}"',
                },
              ],
            },
            {
              name: "InvalidLength",
              message: "Invalid length for xprivkey string in {0}",
            },
            { name: "InvalidPath", message: "Invalid derivation path: {0}" },
            {
              name: "UnrecognizedArgument",
              message:
                'Invalid argument: creating a HDPrivateKey requires a string, buffer, json or object, got "{0}"',
            },
          ],
        },
        {
          name: "HDPublicKey",
          message: "Internal Error on HDPublicKey {0}",
          errors: [
            {
              name: "ArgumentIsPrivateExtended",
              message: "Argument is an extended private key: {0}",
            },
            {
              name: "InvalidDerivationArgument",
              message: "Invalid derivation argument: got {0}",
            },
            {
              name: "InvalidLength",
              message: 'Invalid length for xpubkey: got "{0}"',
            },
            {
              name: "InvalidPath",
              message:
                'Invalid derivation path, it should look like: "m/1/100", got "{0}"',
            },
            {
              name: "InvalidIndexCantDeriveHardened",
              message:
                "Invalid argument: creating a hardened path requires an HDPrivateKey",
            },
            {
              name: "MustSupplyArgument",
              message: "Must supply an argument to create a HDPublicKey",
            },
            {
              name: "UnrecognizedArgument",
              message:
                "Invalid argument for creation, must be string, json, buffer, or object",
            },
          ],
        },
      ];
    },
    11291: function (t, e, r) {
      (function (e) {
        const i = r(2856),
          n = r(3071),
          s = r(4863),
          o = r(3205),
          u = {},
          a = function (t) {
            return {
              0: s.OP_0,
              1: s.OP_1,
              2: s.OP_2,
              3: s.OP_3,
              4: s.OP_4,
              5: s.OP_5,
              6: s.OP_6,
              7: s.OP_7,
              8: s.OP_8,
              9: s.OP_9,
              10: s.OP_10,
              11: s.OP_11,
              12: s.OP_12,
              13: s.OP_13,
              14: s.OP_14,
              15: s.OP_15,
              16: s.OP_16,
            }[t];
          },
          h = function (t) {
            return Math.ceil(Math.log2(t));
          };
        ((u.getMerkleRoot = function t(r) {
          if (1 === r.length) return r[0];
          const s = i.chunk(r, 2).map((t) => n.sha256ripemd160(e.concat(t)));
          return t(s);
        }),
          (u.generateMerkleRootFromPublicKeys = function (t) {
            const r = h(t.length),
              i = Math.pow(2, r),
              s = t
                .map((t) => t.toString("hex"))
                .sort()
                .map((t) => o.fromString(t).toBuffer()),
              a = Array(i - t.length).fill(e.alloc(0)),
              c = s.concat(a).map((t) => n.sha256ripemd160(t));
            return u.getMerkleRoot(c);
          }));
        const c = function (t) {
            const e = n.sha256ripemd160(t.toBuffer());
            return [s.OP_DUP, s.OP_HASH160, e, s.OP_EQUALVERIFY];
          },
          f = function (t) {
            const e = h(t.length),
              r = u.generateMerkleRootFromPublicKeys(t),
              i = Array(e)
                .fill([
                  s.OP_FROMALTSTACK,
                  s.OP_IF,
                  s.OP_SWAP,
                  s.OP_ENDIF,
                  s.OP_CAT,
                  s.OP_HASH160,
                ])
                .reduce((t, e) => t.concat(e), []);
            return [
              ...Array(e).fill(s.OP_TOALTSTACK),
              a(e),
              s.OP_PICK,
              s.OP_HASH160,
              ...i,
              r,
              s.OP_EQUALVERIFY,
            ];
          };
        ((u.generateInputPublicKeyValidationOperations = function (t) {
          return 1 === t.length ? c(t[0]) : f(t);
        }),
          (u.generateRedeemScriptOperations = function (t, e) {
            const r = [
                s.OP_DUP,
                s.OP_HASH160,
                n.sha256ripemd160(e.toBuffer()),
                s.OP_EQUAL,
                s.OP_IF,
                s.OP_CHECKSIG,
                s.OP_ELSE,
              ],
              i = u.generateInputPublicKeyValidationOperations(t),
              o = [
                s.OP_OVER,
                s.OP_4,
                s.OP_PICK,
                s.OP_EQUAL,
                s.OP_NOT,
                s.OP_VERIFY,
              ],
              a = [
                s.OP_DUP,
                s.OP_TOALTSTACK,
                s.OP_CHECKDATASIGVERIFY,
                s.OP_FROMALTSTACK,
                s.OP_CHECKDATASIG,
                s.OP_ENDIF,
              ],
              h = [...r, ...i, ...o, ...a];
            return h;
          }),
          (t.exports = u));
      }).call(this, r(2).Buffer);
    },
    11292: function (t, e, r) {
      "use strict";
      var i = r(3967),
        n = r(2866),
        s = (r(2935), r(3966)),
        o = r(3466),
        u = r(3465),
        a = r(3235),
        h = r(3204),
        c = r(3968);
      function f() {
        s.apply(this, arguments);
      }
      (i(f, s),
        (f.prototype.getSignatures = function (t, e, r, i, s, a) {
          (n.checkState(this.output instanceof o),
            (i = i || h.SIGHASH_ALL | h.SIGHASH_FORKID));
          var f = e.toPublicKey();
          return f.toString() ===
            this.output.script.getPublicKey().toString("hex")
            ? [
                new c({
                  publicKey: f,
                  prevTxId: this.prevTxId,
                  outputIndex: this.outputIndex,
                  inputIndex: r,
                  signature: u.sign(
                    t,
                    e,
                    i,
                    r,
                    this.output.script,
                    this.output.satoshisBN,
                    void 0,
                    a,
                  ),
                  sigtype: i,
                }),
              ]
            : [];
        }),
        (f.prototype.addSignature = function (t, e, r) {
          return (
            n.checkState(
              this.isValidSignature(t, e, r),
              "Signature is invalid",
            ),
            this.setScript(a.buildPublicKeyIn(e.signature.toDER(r), e.sigtype)),
            this
          );
        }),
        (f.prototype.clearSignatures = function () {
          return (this.setScript(a.empty()), this);
        }),
        (f.prototype.isFullySigned = function () {
          return this.script.isPublicKeyIn();
        }),
        (f.SCRIPT_MAX_SIZE = 73),
        (f.prototype._estimateSize = function () {
          return f.SCRIPT_MAX_SIZE;
        }),
        (t.exports = f));
    },
    11293: function (t, e, r) {
      "use strict";
      var i = r(3967),
        n = r(2866),
        s = r(2935),
        o = r(3071),
        u = r(3966),
        a = r(3466),
        h = r(3465),
        c = r(3235),
        f = r(3204),
        p = r(3968);
      function d() {
        u.apply(this, arguments);
      }
      (i(d, u),
        (d.prototype.getSignatures = function (t, e, r, i, u, c) {
          return (
            n.checkState(this.output instanceof a),
            (u = u || o.sha256ripemd160(e.publicKey.toBuffer())),
            (i = i || f.SIGHASH_ALL | f.SIGHASH_FORKID),
            s.equals(u, this.output.script.getPublicKeyHash())
              ? [
                  new p({
                    publicKey: e.publicKey,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: r,
                    signature: h.sign(
                      t,
                      e,
                      i,
                      r,
                      this.output.script,
                      this.output.satoshisBN,
                      void 0,
                      c,
                    ),
                    sigtype: i,
                  }),
                ]
              : []
          );
        }),
        (d.prototype.addSignature = function (t, e, r) {
          return (
            n.checkState(
              this.isValidSignature(t, e, r),
              "Signature is invalid",
            ),
            this.setScript(
              c.buildPublicKeyHashIn(
                e.publicKey,
                e.signature.toDER(r),
                e.sigtype,
              ),
            ),
            this
          );
        }),
        (d.prototype.clearSignatures = function () {
          return (this.setScript(c.empty()), this);
        }),
        (d.prototype.isFullySigned = function () {
          return this.script.isPublicKeyHashIn();
        }),
        (d.SCRIPT_MAX_SIZE = 107),
        (d.prototype._estimateSize = function () {
          return d.SCRIPT_MAX_SIZE;
        }),
        (t.exports = d));
    },
    11294: function (t, e, r) {
      "use strict";
      var i = r(2856),
        n = r(3967),
        s = (r(5696), r(3966)),
        o = r(3466),
        u = r(2866),
        a = r(3235),
        h = r(3204),
        c = r(3465),
        f = (r(3205), r(2935)),
        p = r(3968);
      function d(t, e, r, n, o) {
        ((o = o || {}), s.apply(this, arguments));
        var h = this;
        ((e = e || t.publicKeys),
          (r = r || t.threshold),
          (n = n || t.signatures),
          o.noSorting
            ? (this.publicKeys = e)
            : (this.publicKeys = i.sortBy(e, function (t) {
                return t.toString("hex");
              })),
          u.checkState(
            a.buildMultisigOut(this.publicKeys, r).equals(this.output.script),
            "Provided public keys don't match to the provided output script",
          ),
          (this.publicKeyIndex = {}),
          i.each(this.publicKeys, function (t, e) {
            h.publicKeyIndex[t.toString()] = e;
          }),
          (this.threshold = r),
          (this.signatures = n
            ? this._deserializeSignatures(n)
            : new Array(this.publicKeys.length)));
      }
      (n(d, s),
        (d.prototype.toObject = function () {
          var t = s.prototype.toObject.apply(this, arguments);
          return (
            (t.threshold = this.threshold),
            (t.publicKeys = i.map(this.publicKeys, function (t) {
              return t.toString();
            })),
            (t.signatures = this._serializeSignatures()),
            t
          );
        }),
        (d.prototype._deserializeSignatures = function (t) {
          return i.map(t, function (t) {
            if (t) return new p(t);
          });
        }),
        (d.prototype._serializeSignatures = function () {
          return i.map(this.signatures, function (t) {
            if (t) return t.toObject();
          });
        }),
        (d.prototype.getSignatures = function (t, e, r, n, s, a) {
          (u.checkState(this.output instanceof o),
            (n = n || h.SIGHASH_ALL | h.SIGHASH_FORKID));
          var f = this,
            d = [];
          return (
            i.each(this.publicKeys, function (i) {
              i.toString() === e.publicKey.toString() &&
                d.push(
                  new p({
                    publicKey: e.publicKey,
                    prevTxId: f.prevTxId,
                    outputIndex: f.outputIndex,
                    inputIndex: r,
                    signature: c.sign(
                      t,
                      e,
                      n,
                      r,
                      f.output.script,
                      f.output.satoshisBN,
                      void 0,
                      a,
                    ),
                    sigtype: n,
                  }),
                );
            }),
            d
          );
        }),
        (d.prototype.addSignature = function (t, e, r) {
          return (
            u.checkState(
              !this.isFullySigned(),
              "All needed signatures have already been added",
            ),
            u.checkArgument(
              !i.isUndefined(this.publicKeyIndex[e.publicKey.toString()]),
              "Signature has no matching public key",
            ),
            u.checkState(this.isValidSignature(t, e, r)),
            (this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e),
            this._updateScript(r),
            this
          );
        }),
        (d.prototype._updateScript = function (t) {
          return (
            this.setScript(
              a.buildMultisigIn(
                this.publicKeys,
                this.threshold,
                this._createSignatures(t),
              ),
            ),
            this
          );
        }),
        (d.prototype._createSignatures = function (t) {
          return i.map(
            i.filter(this.signatures, function (t) {
              return !i.isUndefined(t);
            }),
            function (e) {
              return f.concat([
                e.signature.toDER(t),
                f.integerAsSingleByteBuffer(e.sigtype),
              ]);
            },
          );
        }),
        (d.prototype.clearSignatures = function () {
          ((this.signatures = new Array(this.publicKeys.length)),
            this._updateScript());
        }),
        (d.prototype.isFullySigned = function () {
          return this.countSignatures() === this.threshold;
        }),
        (d.prototype.countMissingSignatures = function () {
          return this.threshold - this.countSignatures();
        }),
        (d.prototype.countSignatures = function () {
          return i.reduce(
            this.signatures,
            function (t, e) {
              return t + !!e;
            },
            0,
          );
        }),
        (d.prototype.publicKeysWithoutSignature = function () {
          var t = this;
          return i.filter(this.publicKeys, function (e) {
            return !t.signatures[t.publicKeyIndex[e.toString()]];
          });
        }),
        (d.prototype.isValidSignature = function (t, e, r) {
          return (
            (e.signature.nhashtype = e.sigtype),
            c.verify(
              t,
              e.signature,
              e.publicKey,
              e.inputIndex,
              this.output.script,
              this.output.satoshisBN,
              void 0,
              r,
            )
          );
        }),
        (d.normalizeSignatures = function (t, e, r, i, n, s) {
          return n.map(function (n) {
            var o = null;
            return (
              (i = i.filter(function (i) {
                if (o) return !0;
                var u = new p({
                  signature: h.fromTxFormat(i),
                  publicKey: n,
                  prevTxId: e.prevTxId,
                  outputIndex: e.outputIndex,
                  inputIndex: r,
                  sigtype: h.SIGHASH_ALL,
                });
                u.signature.nhashtype = u.sigtype;
                var a = c.verify(
                  t,
                  u.signature,
                  u.publicKey,
                  u.inputIndex,
                  e.output.script,
                  void 0,
                  s,
                );
                return !a || ((o = u), !1);
              })),
              o || null
            );
          });
        }),
        (d.OPCODES_SIZE = 1),
        (d.SIGNATURE_SIZE = 73),
        (d.prototype._estimateSize = function () {
          return d.OPCODES_SIZE + this.threshold * d.SIGNATURE_SIZE;
        }),
        (t.exports = d));
    },
    11295: function (t, e, r) {
      "use strict";
      var i = r(2856),
        n = r(3967),
        s = r(3966),
        o = r(3466),
        u = r(2866),
        a = r(3235),
        h = r(3204),
        c = r(3465),
        f = (r(3205), r(2935)),
        p = r(3968);
      function d(t, e, r, n, o) {
        ((o = o || {}), s.apply(this, arguments));
        var h = this;
        ((e = e || t.publicKeys),
          (r = r || t.threshold),
          (n = n || t.signatures),
          o.noSorting
            ? (this.publicKeys = e)
            : (this.publicKeys = i.sortBy(e, function (t) {
                return t.toString("hex");
              })),
          (this.redeemScript = a.buildMultisigOut(this.publicKeys, r, o)),
          u.checkState(
            a.buildScriptHashOut(this.redeemScript).equals(this.output.script),
            "Provided public keys don't hash to the provided output",
          ),
          (this.publicKeyIndex = {}),
          i.each(this.publicKeys, function (t, e) {
            h.publicKeyIndex[t.toString()] = e;
          }),
          (this.threshold = r),
          (this.signatures = n
            ? this._deserializeSignatures(n)
            : new Array(this.publicKeys.length)),
          (this.checkBitsField = new Uint8Array(this.publicKeys.length)));
      }
      (n(d, s),
        (d.prototype.toObject = function () {
          var t = s.prototype.toObject.apply(this, arguments);
          return (
            (t.threshold = this.threshold),
            (t.publicKeys = i.map(this.publicKeys, function (t) {
              return t.toString();
            })),
            (t.signatures = this._serializeSignatures()),
            t
          );
        }),
        (d.prototype._deserializeSignatures = function (t) {
          return i.map(t, function (t) {
            if (t) return new p(t);
          });
        }),
        (d.prototype._serializeSignatures = function () {
          return i.map(this.signatures, function (t) {
            if (t) return t.toObject();
          });
        }),
        (d.prototype.getSignatures = function (t, e, r, i, n, s) {
          (u.checkState(this.output instanceof o),
            (i = i || h.SIGHASH_ALL | h.SIGHASH_FORKID));
          var a = this,
            f = [];
          for (const o of this.publicKeys)
            o.toString() === e.publicKey.toString() &&
              f.push(
                new p({
                  publicKey: e.publicKey,
                  prevTxId: a.prevTxId,
                  outputIndex: a.outputIndex,
                  inputIndex: r,
                  signature: c.sign(
                    t,
                    e,
                    i,
                    r,
                    a.redeemScript,
                    a.output.satoshisBN,
                    void 0,
                    s,
                  ),
                  sigtype: i,
                }),
              );
          return f;
        }),
        (d.prototype.addSignature = function (t, e, r) {
          return (
            u.checkState(
              !this.isFullySigned(),
              "All needed signatures have already been added",
            ),
            u.checkArgument(
              !i.isUndefined(this.publicKeyIndex[e.publicKey.toString()]),
              "Signature has no matching public key",
            ),
            u.checkState(this.isValidSignature(t, e, r)),
            (this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e),
            (this.checkBitsField[this.publicKeyIndex[e.publicKey.toString()]] =
              void 0 !== e ? 1 : 0),
            this._updateScript(r, this.checkBitsField),
            this
          );
        }),
        (d.prototype._updateScript = function (t, e) {
          return (
            this.setScript(
              a.buildP2SHMultisigIn(
                this.publicKeys,
                this.threshold,
                this._createSignatures(t),
                {
                  cachedMultisig: this.redeemScript,
                  checkBits: e,
                  signingMethod: t,
                },
              ),
            ),
            this
          );
        }),
        (d.prototype._createSignatures = function (t) {
          return i.map(
            i.filter(this.signatures, function (t) {
              return !i.isUndefined(t);
            }),
            function (e) {
              return f.concat([
                e.signature.toDER(t),
                f.integerAsSingleByteBuffer(e.sigtype),
              ]);
            },
          );
        }),
        (d.prototype.clearSignatures = function () {
          ((this.signatures = new Array(this.publicKeys.length)),
            this._updateScript());
        }),
        (d.prototype.isFullySigned = function () {
          return this.countSignatures() === this.threshold;
        }),
        (d.prototype.countMissingSignatures = function () {
          return this.threshold - this.countSignatures();
        }),
        (d.prototype.countSignatures = function () {
          return i.reduce(
            this.signatures,
            function (t, e) {
              return t + !!e;
            },
            0,
          );
        }),
        (d.prototype.publicKeysWithoutSignature = function () {
          var t = this;
          return i.filter(this.publicKeys, function (e) {
            return !t.signatures[t.publicKeyIndex[e.toString()]];
          });
        }),
        (d.prototype.isValidSignature = function (t, e, r) {
          return (
            (r = r || (e.signature.isSchnorr ? "schnorr" : "ecdsa")),
            (e.signature.nhashtype = e.sigtype),
            c.verify(
              t,
              e.signature,
              e.publicKey,
              e.inputIndex,
              this.redeemScript,
              this.output.satoshisBN,
              void 0,
              r,
            )
          );
        }),
        (d.OPCODES_SIZE = 7),
        (d.SIGNATURE_SIZE = 74),
        (d.PUBKEY_SIZE = 34),
        (d.prototype._estimateSize = function () {
          return (
            d.OPCODES_SIZE +
            this.threshold * d.SIGNATURE_SIZE +
            this.publicKeys.length * d.PUBKEY_SIZE
          );
        }),
        (t.exports = d));
    },
    11296: function (t, e, r) {
      "use strict";
      const i = r(3967),
        n = r(2866),
        s = r(3966),
        o = r(3466),
        u = r(3235),
        a = r(3465),
        h = r(3204),
        c = r(3968);
      function f(t, e, r, i) {
        (s.apply(this, arguments),
          (i = i || t.signatures || []),
          (this.inputPublicKeys = e),
          (this.reclaimPublicKey = r),
          (this.redeemScript = u.buildEscrowOut(e, r)),
          n.checkState(
            u.buildScriptHashOut(this.redeemScript).equals(this.output.script),
            "Provided public keys don't hash to the provided output",
          ),
          (this.signatures = this._deserializeSignatures(i)));
      }
      (i(f, s),
        (f.prototype.getSignatures = function (t, e, r, i, s, u) {
          if (this.reclaimPublicKey.toString() !== e.publicKey.toString())
            return [];
          (n.checkState(this.output instanceof o),
            (i = i || h.SIGHASH_ALL | h.SIGHASH_FORKID));
          const f = new c({
            publicKey: e.publicKey,
            prevTxId: this.prevTxId,
            outputIndex: this.outputIndex,
            inputIndex: r,
            signature: a.sign(
              t,
              e,
              i,
              r,
              this.redeemScript,
              this.output.satoshisBN,
              void 0,
              u,
            ),
            sigtype: i,
          });
          return [f];
        }),
        (f.prototype.addSignature = function (t, e, r) {
          n.checkState(this.isValidSignature(t, e, r));
          const i = u.buildEscrowIn(
            this.reclaimPublicKey,
            e.signature,
            this.redeemScript,
          );
          (this.setScript(i), (this.signatures = [e]));
        }),
        (f.prototype.isValidSignature = function (t, e, r) {
          return (
            (r = r || "ecdsa"),
            (e.signature.nhashtype = e.sigtype),
            a.verify(
              t,
              e.signature,
              e.publicKey,
              e.inputIndex,
              this.redeemScript,
              this.output.satoshisBN,
              void 0,
              r,
            )
          );
        }),
        (f.prototype.clearSignatures = function () {
          this.signatures = [];
        }),
        (f.prototype.isFullySigned = function () {
          return 1 === this.signatures.length;
        }),
        (f.prototype._deserializeSignatures = function (t) {
          return t.map((t) => new c(t));
        }),
        (t.exports = f));
    },
    11297: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3357),
          n = r(3618),
          s = r(3034),
          o = function t(r) {
            if (!(this instanceof t)) return new t(r);
            if (e.isBuffer(r)) this.buf = r;
            else if ("number" === typeof r) {
              var i = r;
              this.fromNumber(i);
            } else if (r instanceof s) {
              var n = r;
              this.fromBN(n);
            } else if (r) {
              var o = r;
              this.set(o);
            }
          };
        ((o.prototype.set = function (t) {
          return ((this.buf = t.buf || this.buf), this);
        }),
          (o.prototype.fromString = function (t) {
            return (this.set({ buf: e.from(t, "hex") }), this);
          }),
          (o.prototype.toString = function () {
            return this.buf.toString("hex");
          }),
          (o.prototype.fromBuffer = function (t) {
            return ((this.buf = t), this);
          }),
          (o.prototype.fromBufferReader = function (t) {
            return ((this.buf = t.readVarintBuf()), this);
          }),
          (o.prototype.fromBN = function (t) {
            return ((this.buf = i().writeVarintBN(t).concat()), this);
          }),
          (o.prototype.fromNumber = function (t) {
            return ((this.buf = i().writeVarintNum(t).concat()), this);
          }),
          (o.prototype.toBuffer = function () {
            return this.buf;
          }),
          (o.prototype.toBN = function () {
            return n(this.buf).readVarintBN();
          }),
          (o.prototype.toNumber = function () {
            return n(this.buf).readVarintNum();
          }),
          (t.exports = o));
      }).call(this, r(2).Buffer);
    },
    11298: function (t, e, r) {
      ((t.exports = r(11299)),
        (t.exports.BlockHeader = r(4865)),
        (t.exports.MerkleBlock = r(6890)));
    },
    11299: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(4865),
          s = r(3034),
          o = r(2935),
          u = r(3618),
          a = r(3357),
          h = r(3071),
          c = r(4864),
          f = r(2866);
        function Block(t) {
          return this instanceof Block
            ? (i.extend(this, Block._from(t)), this)
            : new Block(t);
        }
        ((Block.MAX_BLOCK_SIZE = 1e6),
          (Block._from = function (t) {
            var e = {};
            if (o.isBuffer(t)) e = Block._fromBufferReader(u(t));
            else {
              if (!i.isObject(t))
                throw new TypeError("Unrecognized argument for Block");
              e = Block._fromObject(t);
            }
            return e;
          }),
          (Block._fromObject = function (t) {
            var e = [];
            t.transactions.forEach(function (t) {
              t instanceof c ? e.push(t) : e.push(c().fromObject(t));
            });
            var r = { header: n.fromObject(t.header), transactions: e };
            return r;
          }),
          (Block.fromObject = function (t) {
            var e = Block._fromObject(t);
            return new Block(e);
          }),
          (Block._fromBufferReader = function (t) {
            var e = {};
            (f.checkState(!t.finished(), "No block data received"),
              (e.header = n.fromBufferReader(t)));
            var r = t.readVarintNum();
            e.transactions = [];
            for (var i = 0; i < r; i++)
              e.transactions.push(c().fromBufferReader(t));
            return e;
          }),
          (Block.fromBufferReader = function (t) {
            f.checkArgument(t, "br is required");
            var e = Block._fromBufferReader(t);
            return new Block(e);
          }),
          (Block.fromBuffer = function (t) {
            return Block.fromBufferReader(new u(t));
          }),
          (Block.fromString = function (t) {
            var r = e.from(t, "hex");
            return Block.fromBuffer(r);
          }),
          (Block.fromRawBlock = function (t) {
            o.isBuffer(t) || (t = e.from(t, "binary"));
            var r = u(t);
            r.pos = Block.Values.START_OF_BLOCK;
            var i = Block._fromBufferReader(r);
            return new Block(i);
          }),
          (Block.prototype.toObject = Block.prototype.toJSON =
            function () {
              var t = [];
              return (
                this.transactions.forEach(function (e) {
                  t.push(e.toObject());
                }),
                { header: this.header.toObject(), transactions: t }
              );
            }),
          (Block.prototype.toBuffer = function () {
            return this.toBufferWriter().concat();
          }),
          (Block.prototype.toString = function () {
            return this.toBuffer().toString("hex");
          }),
          (Block.prototype.toBufferWriter = function (t) {
            (t || (t = new a()),
              t.write(this.header.toBuffer()),
              t.writeVarintNum(this.transactions.length));
            for (var e = 0; e < this.transactions.length; e++)
              this.transactions[e].toBufferWriter(t);
            return t;
          }),
          (Block.prototype.getTransactionHashes = function () {
            var t = [];
            if (0 === this.transactions.length) return [Block.Values.NULL_HASH];
            for (var e = 0; e < this.transactions.length; e++)
              t.push(this.transactions[e]._getHash());
            return t;
          }),
          (Block.prototype.getMerkleTree = function () {
            for (
              var t = this.getTransactionHashes(),
                r = 0,
                i = this.transactions.length;
              i > 1;
              i = Math.floor((i + 1) / 2)
            ) {
              for (var n = 0; n < i; n += 2) {
                var s = Math.min(n + 1, i - 1),
                  o = e.concat([t[r + n], t[r + s]]);
                t.push(h.sha256sha256(o));
              }
              r += i;
            }
            return t;
          }),
          (Block.prototype.getMerkleRoot = function () {
            var t = this.getMerkleTree();
            return t[t.length - 1];
          }),
          (Block.prototype.validMerkleRoot = function () {
            var t = new s(this.header.merkleRoot.toString("hex"), "hex"),
              e = new s(this.getMerkleRoot().toString("hex"), "hex");
            return 0 === t.cmp(e);
          }),
          (Block.prototype._getHash = function () {
            return this.header._getHash();
          }));
        var p = {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return (this._id || (this._id = this.header.id), this._id);
          },
          set: i.noop,
        };
        (Object.defineProperty(Block.prototype, "id", p),
          Object.defineProperty(Block.prototype, "hash", p),
          (Block.prototype.inspect = function () {
            return "<Block " + this.id + ">";
          }),
          (Block.Values = {
            START_OF_BLOCK: 8,
            NULL_HASH: e.from(
              "0000000000000000000000000000000000000000000000000000000000000000",
              "hex",
            ),
          }),
          (t.exports = Block));
      }).call(this, r(2).Buffer);
    },
    3034: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(6884),
          n = r(2866),
          s = r(2856),
          o = function (t) {
            for (var r = e.alloc(t.length), i = 0; i < t.length; i++)
              r[i] = t[t.length - 1 - i];
            return r;
          };
        ((i.Zero = new i(0)),
          (i.One = new i(1)),
          (i.Minus1 = new i(-1)),
          (i.fromNumber = function (t) {
            return (n.checkArgument(s.isNumber(t)), new i(t));
          }),
          (i.fromString = function (t, e) {
            return (n.checkArgument(s.isString(t)), new i(t, e));
          }),
          (i.fromBuffer = function (t, e) {
            "undefined" !== typeof e && "little" === e.endian && (t = o(t));
            var r = t.toString("hex"),
              n = new i(r, 16);
            return n;
          }),
          (i.fromSM = function (t, r) {
            var n;
            if (0 === t.length) return i.fromBuffer(e.from([0]));
            var s = "big";
            return (
              r && (s = r.endian),
              "little" === s && (t = o(t)),
              128 & t[0]
                ? ((t[0] = 127 & t[0]), (n = i.fromBuffer(t)), n.neg().copy(n))
                : (n = i.fromBuffer(t)),
              n
            );
          }),
          (i.prototype.toNumber = function () {
            return parseInt(this.toString(10), 10);
          }),
          (i.prototype.toBuffer = function (t) {
            var r, n;
            if (t && t.size) {
              n = this.toString(16, 2);
              var s = n.length / 2;
              ((r = e.from(n, "hex")),
                s === t.size
                  ? (r = r)
                  : s > t.size
                    ? (r = i.trim(r, s))
                    : s < t.size && (r = i.pad(r, s, t.size)));
            } else ((n = this.toString(16, 2)), (r = e.from(n, "hex")));
            return (
              "undefined" !== typeof t && "little" === t.endian && (r = o(r)),
              r
            );
          }),
          (i.prototype.toSMBigEndian = function () {
            var t;
            return (
              -1 === this.cmp(i.Zero)
                ? ((t = this.neg().toBuffer()),
                  128 & t[0]
                    ? (t = e.concat([e.from([128]), t]))
                    : (t[0] = 128 | t[0]))
                : ((t = this.toBuffer()),
                  128 & t[0] && (t = e.concat([e.from([0]), t]))),
              (1 === t.length) & (0 === t[0]) && (t = e.from([])),
              t
            );
          }),
          (i.prototype.toSM = function (t) {
            var e = t ? t.endian : "big",
              r = this.toSMBigEndian();
            return ("little" === e && (r = o(r)), r);
          }),
          (i.fromScriptNumBuffer = function (t, e, r) {
            var s = r || 4;
            if (
              (n.checkArgument(
                t.length <= s,
                new Error("script number overflow"),
              ),
              e &&
                t.length > 0 &&
                0 === (127 & t[t.length - 1]) &&
                (t.length <= 1 || 0 === (128 & t[t.length - 2])))
            )
              throw new Error("non-minimally encoded script number");
            return i.fromSM(t, { endian: "little" });
          }),
          (i.prototype.toScriptNumBuffer = function () {
            return this.toSM({ endian: "little" });
          }),
          (i.trim = function (t, e) {
            return t.slice(e - t.length, t.length);
          }),
          (i.pad = function (t, r, i) {
            for (var n = e.alloc(i), s = 0; s < t.length; s++)
              n[n.length - 1 - s] = t[t.length - 1 - s];
            for (s = 0; s < i - r; s++) n[s] = 0;
            return n;
          }),
          (i.prototype.getSize = function () {
            const t = this.toString(2).replace("-", ""),
              e = t.length + 1;
            return e / 8;
          }),
          (i.prototype.checkOperationForOverflow = function (t, e, r) {
            if (this.getSize() > r || t.getSize() > r || e.getSize() > 8)
              throw new Error("overflow");
          }),
          (i.prototype.safeAdd = function (t, e) {
            const r = this.add(t);
            return (this.checkOperationForOverflow(t, r, e), r);
          }),
          (i.prototype.safeSub = function (t, e) {
            const r = this.sub(t);
            return (this.checkOperationForOverflow(t, r, e), r);
          }),
          (i.prototype.safeMul = function (t, e) {
            const r = this.mul(t);
            return (this.checkOperationForOverflow(t, r, e), r);
          }),
          (t.exports = i));
      }).call(this, r(2).Buffer);
    },
    3071: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2764),
          n = r(2935),
          s = r(2866),
          o = t.exports;
        ((o.sha1 = function (t) {
          return (
            s.checkArgument(n.isBuffer(t)),
            i.createHash("sha1").update(t).digest()
          );
        }),
          (o.sha1.blocksize = 512),
          (o.sha256 = function (t) {
            return (
              s.checkArgument(n.isBuffer(t)),
              i.createHash("sha256").update(t).digest()
            );
          }),
          (o.sha256.blocksize = 512),
          (o.sha256sha256 = function (t) {
            return (s.checkArgument(n.isBuffer(t)), o.sha256(o.sha256(t)));
          }),
          (o.ripemd160 = function (t) {
            return (
              s.checkArgument(n.isBuffer(t)),
              i.createHash("ripemd160").update(t).digest()
            );
          }),
          (o.sha256ripemd160 = function (t) {
            return (s.checkArgument(n.isBuffer(t)), o.ripemd160(o.sha256(t)));
          }),
          (o.sha512 = function (t) {
            return (
              s.checkArgument(n.isBuffer(t)),
              i.createHash("sha512").update(t).digest()
            );
          }),
          (o.sha512.blocksize = 1024),
          (o.hmac = function (t, r, i) {
            (s.checkArgument(n.isBuffer(r)),
              s.checkArgument(n.isBuffer(i)),
              s.checkArgument(t.blocksize));
            var o = t.blocksize / 8;
            if (i.length > o) i = t(i);
            else if (i < o) {
              var u = e.alloc(o);
              (u.fill(0), i.copy(u), (i = u));
            }
            var a = e.alloc(o);
            a.fill(92);
            var h = e.alloc(o);
            h.fill(54);
            for (var c = e.alloc(o), f = e.alloc(o), p = 0; p < o; p++)
              ((c[p] = a[p] ^ i[p]), (f[p] = h[p] ^ i[p]));
            return t(e.concat([c, t(e.concat([f, r]))]));
          }),
          (o.sha256hmac = function (t, e) {
            return o.hmac(o.sha256, t, e);
          }),
          (o.sha512hmac = function (t, e) {
            return o.hmac(o.sha512, t, e);
          }));
      }).call(this, r(2).Buffer);
    },
    3204: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3034),
          n = r(2856),
          s = r(2866),
          o = r(2935),
          u = r(3035),
          a = function t(e, r, n) {
            if (!(this instanceof t)) return new t(e, r, n);
            if (e instanceof i) this.set({ r: e, s: r, isSchnorr: n });
            else if (e) {
              var s = e;
              this.set(s);
            }
          };
        ((a.prototype.set = function (t) {
          return (
            (this.r = t.r || this.r || void 0),
            (this.s = t.s || this.s || void 0),
            (this.i = "undefined" !== typeof t.i ? t.i : this.i),
            (this.compressed =
              "undefined" !== typeof t.compressed
                ? t.compressed
                : this.compressed),
            (this.isSchnorr = t.isSchnorr || this.isSchnorr),
            (this.nhashtype = t.nhashtype || this.nhashtype || void 0),
            this
          );
        }),
          (a.fromCompact = function (t) {
            s.checkArgument(
              o.isBuffer(t),
              "Argument is expected to be a Buffer",
            );
            var e = new a(),
              r = !0,
              n = t.slice(0, 1)[0] - 27 - 4;
            n < 0 && ((r = !1), (n += 4));
            var u = t.slice(1, 33),
              h = t.slice(33, 65);
            return (
              s.checkArgument(
                0 === n || 1 === n || 2 === n || 3 === n,
                new Error("i must be 0, 1, 2, or 3"),
              ),
              s.checkArgument(32 === u.length, new Error("r must be 32 bytes")),
              s.checkArgument(32 === h.length, new Error("s must be 32 bytes")),
              (e.compressed = r),
              (e.i = n),
              (e.r = i.fromBuffer(u)),
              (e.s = i.fromBuffer(h)),
              e
            );
          }),
          (a.fromDER = a.fromBuffer =
            function (t, e) {
              if (64 === t.length) {
                let e = a.parseSchnorrEncodedSig(t),
                  r = new a();
                return ((r.r = e.r), (r.s = e.s), (r.isSchnorr = !0), r);
              }
              var r = a.parseDER(t, e),
                i = new a();
              return ((i.r = r.r), (i.s = r.s), i);
            }),
          (a.fromTxFormat = function (t) {
            var e = t.readUInt8(t.length - 1),
              r = t.slice(0, t.length - 1),
              i = new a.fromDER(r, !1);
            return ((i.nhashtype = e), i);
          }),
          (a.fromDataFormat = function (t) {
            var e = t.slice(0, t.length),
              r = new a.fromDER(e, !1);
            return r;
          }),
          (a.fromString = function (t) {
            var r = e.from(t, "hex");
            return a.fromDER(r);
          }),
          (a.fromTxString = function (t, r = "hex") {
            return a.fromTxFormat(e.from(t, r));
          }),
          (a.parseSchnorrEncodedSig = function (t) {
            let e,
              r = t.slice(0, 32),
              n = t.slice(32, 64);
            65 === t.length && ((e = t.slice(64, 65)), (this.nhashtype = e));
            var s = { r: i.fromBuffer(r), s: i.fromBuffer(n), nhashtype: e };
            return s;
          }),
          (a.parseDER = function (t, e) {
            (s.checkArgument(
              o.isBuffer(t),
              new Error("DER formatted signature should be a buffer"),
            ),
              n.isUndefined(e) && (e = !0));
            var r = t[0];
            s.checkArgument(48 === r, new Error("Header byte should be 0x30"));
            var u = t[1],
              a = t.slice(2).length;
            (s.checkArgument(
              !e || u === a,
              new Error("Length byte should length of what follows"),
            ),
              (u = u < a ? u : a));
            var h = t[2];
            s.checkArgument(
              2 === h,
              new Error("Integer byte for r should be 0x02"),
            );
            var c = t[3],
              f = t.slice(4, 4 + c),
              p = i.fromBuffer(f),
              d = 0 === t[4];
            s.checkArgument(c === f.length, new Error("Length of r incorrect"));
            var l = t[4 + c + 0];
            s.checkArgument(
              2 === l,
              new Error("Integer byte for s should be 0x02"),
            );
            var g = t[4 + c + 1],
              m = t.slice(4 + c + 2, 4 + c + 2 + g),
              _ = i.fromBuffer(m),
              S = 0 === t[4 + c + 2 + 2];
            s.checkArgument(g === m.length, new Error("Length of s incorrect"));
            var I = 4 + c + 2 + g;
            s.checkArgument(
              u === I - 2,
              new Error("Length of signature incorrect"),
            );
            var y = {
              header: r,
              length: u,
              rheader: h,
              rlength: c,
              rneg: d,
              rbuf: f,
              r: p,
              sheader: l,
              slength: g,
              sneg: S,
              sbuf: m,
              s: _,
            };
            return y;
          }),
          (a.prototype.toCompact = function (t, r) {
            if (
              ((t = "number" === typeof t ? t : this.i),
              (r = "boolean" === typeof r ? r : this.compressed),
              0 !== t && 1 !== t && 2 !== t && 3 !== t)
            )
              throw new Error("i must be equal to 0, 1, 2, or 3");
            var i = t + 27 + 4;
            !1 === r && (i -= 4);
            var n = e.from([i]),
              s = this.r.toBuffer({ size: 32 }),
              o = this.s.toBuffer({ size: 32 });
            return e.concat([n, s, o]);
          }),
          (a.prototype.toBuffer = a.prototype.toDER =
            function () {
              if (this.isSchnorr)
                return e.concat([
                  this.r.toBuffer({ size: 32 }),
                  this.s.toBuffer({ size: 32 }),
                ]);
              var t = this.r.toBuffer(),
                r = this.s.toBuffer(),
                i = !!(128 & t[0]),
                n = !!(128 & r[0]),
                s = i ? e.concat([e.from([0]), t]) : t,
                o = n ? e.concat([e.from([0]), r]) : r,
                u = s.length,
                a = o.length,
                h = 2 + u + 2 + a,
                c = 2,
                f = 2,
                p = 48,
                d = e.concat([e.from([p, h, c, u]), s, e.from([f, a]), o]);
              return d;
            }),
          (a.prototype.toString = function () {
            var t = this.toDER();
            return t.toString("hex");
          }),
          (a.isTxDER = function (t) {
            return a.isDER(t.slice(0, t.length - 1));
          }),
          (a.isDER = function (t) {
            if (t.length < 8 || t.length > 72) return !1;
            if (48 != t[0]) return !1;
            if (t[1] != t.length - 2) return !1;
            if (2 != t[2]) return !1;
            var e = t[3];
            if (0 == e) return !1;
            if (128 & t[4]) return !1;
            if (e > t.length - 7) return !1;
            if (e > 1 && 0 == t[4] && !(128 & t[5])) return !1;
            var r = e + 4;
            if (2 != t[r]) return !1;
            var i = t[r + 1];
            return (
              0 != i &&
              !(128 & t[r + 2]) &&
              r + i + 2 == t.length &&
              !(i > 1 && 0 == t[r + 2] && !(128 & t[r + 3]))
            );
          }),
          (a.prototype.hasLowS = function () {
            return (
              !this.s.lt(new i(1)) &&
              !this.s.gt(
                new i(
                  "7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0",
                  "hex",
                ),
              )
            );
          }),
          (a.prototype.hasDefinedHashtype = function () {
            if (!u.isNaturalNumber(this.nhashtype)) return !1;
            var t = ~(a.SIGHASH_FORKID | a.SIGHASH_ANYONECANPAY) >>> 0,
              e = this.nhashtype & t;
            return !(e < a.SIGHASH_ALL || e > a.SIGHASH_SINGLE);
          }),
          (a.prototype.toTxFormat = function (t) {
            var r = this.toDER(t),
              i = e.alloc(1);
            return (i.writeUInt8(this.nhashtype, 0), e.concat([r, i]));
          }),
          (a.SIGHASH_ALL = 1),
          (a.SIGHASH_NONE = 2),
          (a.SIGHASH_SINGLE = 3),
          (a.SIGHASH_FORKID = 64),
          (a.SIGHASH_ANYONECANPAY = 128),
          (t.exports = a));
      }).call(this, r(2).Buffer);
    },
    3205: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3034),
          Point = r(3845),
          n = r(3071),
          s = r(3035),
          o = r(3617),
          u = r(2856),
          a = r(2866);
        function h(t, e) {
          if (!(this instanceof h)) return new h(t, e);
          if (
            (a.checkArgument(
              t,
              "First argument is required, please include public key data.",
            ),
            t instanceof h)
          )
            return t;
          e = e || {};
          var r = this._classifyArgs(t, e);
          return (
            r.point.validate(),
            s.defineImmutable(this, {
              point: r.point,
              compressed: r.compressed,
              network: r.network || o.defaultNetwork,
            }),
            this
          );
        }
        ((h.prototype._classifyArgs = function (t, r) {
          var i = { compressed: u.isUndefined(r.compressed) || r.compressed };
          if (t instanceof Point) i.point = t;
          else if (t.x && t.y) i = h._transformObject(t);
          else if ("string" === typeof t) i = h._transformDER(e.from(t, "hex"));
          else if (h._isBuffer(t)) i = h._transformDER(t);
          else {
            if (!h._isPrivateKey(t))
              throw new TypeError(
                "First argument is an unrecognized data format.",
              );
            i = h._transformPrivateKey(t);
          }
          return (
            i.network ||
              (i.network = u.isUndefined(r.network)
                ? void 0
                : o.get(r.network)),
            i
          );
        }),
          (h._isPrivateKey = function (t) {
            var e = r(4861);
            return t instanceof e;
          }),
          (h._isBuffer = function (t) {
            return t instanceof e || t instanceof Uint8Array;
          }),
          (h._transformPrivateKey = function (t) {
            a.checkArgument(
              h._isPrivateKey(t),
              "Must be an instance of PrivateKey",
            );
            var e = {};
            return (
              (e.point = Point.getG().mul(t.bn)),
              (e.compressed = t.compressed),
              (e.network = t.network),
              e
            );
          }),
          (h._transformDER = function (t, e) {
            a.checkArgument(
              h._isBuffer(t),
              "Must be a hex buffer of DER encoded public key",
            );
            var r,
              n,
              s,
              o,
              c = {};
            if (
              ((e = !!u.isUndefined(e) || e),
              4 !== t[0] && (e || (6 !== t[0] && 7 !== t[0])))
            )
              if (3 === t[0])
                ((s = t.slice(1)),
                  (r = new i(s)),
                  (c = h._transformX(!0, r)),
                  (c.compressed = !0));
              else {
                if (2 !== t[0])
                  throw new TypeError("Invalid DER format public key");
                ((s = t.slice(1)),
                  (r = new i(s)),
                  (c = h._transformX(!1, r)),
                  (c.compressed = !0));
              }
            else {
              if (
                ((s = t.slice(1, 33)),
                (o = t.slice(33, 65)),
                32 !== s.length || 32 !== o.length || 65 !== t.length)
              )
                throw new TypeError("Length of x and y must be 32 bytes");
              ((r = new i(s)),
                (n = new i(o)),
                (c.point = new Point(r, n)),
                (c.compressed = !1));
            }
            return c;
          }),
          (h._transformX = function (t, e) {
            a.checkArgument(
              "boolean" === typeof t,
              "Must specify whether y is odd or not (true or false)",
            );
            var r = {};
            return ((r.point = Point.fromX(t, e)), r);
          }),
          (h._transformObject = function (t) {
            var e = new i(t.x, "hex"),
              r = new i(t.y, "hex"),
              n = new Point(e, r);
            return new h(n, { compressed: t.compressed });
          }),
          (h.fromPrivateKey = function (t) {
            a.checkArgument(
              h._isPrivateKey(t),
              "Must be an instance of PrivateKey",
            );
            var e = h._transformPrivateKey(t);
            return new h(e.point, {
              compressed: e.compressed,
              network: e.network,
            });
          }),
          (h.fromDER = h.fromBuffer =
            function (t, e) {
              a.checkArgument(
                h._isBuffer(t),
                "Must be a hex buffer of DER encoded public key",
              );
              var r = h._transformDER(t, e);
              return new h(r.point, { compressed: r.compressed });
            }),
          (h.fromPoint = function (t, e) {
            return (
              a.checkArgument(
                t instanceof Point,
                "First argument must be an instance of Point.",
              ),
              new h(t, { compressed: e })
            );
          }),
          (h.fromString = function (t, r) {
            var i = e.from(t, r || "hex"),
              n = h._transformDER(i);
            return new h(n.point, { compressed: n.compressed });
          }),
          (h.fromX = function (t, e) {
            var r = h._transformX(t, e);
            return new h(r.point, { compressed: r.compressed });
          }),
          (h.getValidationError = function (t) {
            var e;
            try {
              new h(t);
            } catch (r) {
              e = r;
            }
            return e;
          }),
          (h.isValid = function (t) {
            return !h.getValidationError(t);
          }),
          (h.prototype.toObject = h.prototype.toJSON =
            function () {
              return {
                x: this.point.getX().toString("hex", 2),
                y: this.point.getY().toString("hex", 2),
                compressed: this.compressed,
              };
            }),
          (h.prototype.toBuffer = h.prototype.toDER =
            function () {
              var t,
                r = this.point.getX(),
                i = this.point.getY(),
                n = r.toBuffer({ size: 32 }),
                s = i.toBuffer({ size: 32 });
              if (this.compressed) {
                var o = s[s.length - 1] % 2;
                return ((t = o ? e.from([3]) : e.from([2])), e.concat([t, n]));
              }
              return ((t = e.from([4])), e.concat([t, n, s]));
            }),
          (h.prototype._getID = function () {
            return n.sha256ripemd160(this.toBuffer());
          }),
          (h.prototype.toAddress = function (t) {
            var e = r(3846);
            return e.fromPublicKey(this, t || this.network);
          }),
          (h.prototype.toString = function () {
            return this.toDER().toString("hex");
          }),
          (h.prototype.inspect = function () {
            return (
              "<PublicKey: " +
              this.toString() +
              (this.compressed ? "" : ", uncompressed") +
              ">"
            );
          }),
          (t.exports = h));
      }).call(this, r(2).Buffer);
    },
    3234: function (t, e, r) {
      "use strict";
      var i = r(2856);
      function n(t, e) {
        return t.replace("{0}", e[0]).replace("{1}", e[1]).replace("{2}", e[2]);
      }
      var s = function (t, e) {
          var r = function () {
            if (i.isString(e.message)) this.message = n(e.message, arguments);
            else {
              if (!i.isFunction(e.message))
                throw new Error("Invalid error definition for " + e.name);
              this.message = e.message.apply(null, arguments);
            }
            this.stack = this.message + "\n" + new Error().stack;
          };
          return (
            (r.prototype = Object.create(t.prototype)),
            (r.prototype.name = t.prototype.name + e.name),
            (t[e.name] = r),
            e.errors && o(r, e.errors),
            r
          );
        },
        o = function (t, e) {
          i.each(e, function (e) {
            s(t, e);
          });
        },
        u = function (t, e) {
          return (o(t, e), t);
        },
        a = {
          Error: function () {
            ((this.message = "Internal error"),
              (this.stack = this.message + "\n" + new Error().stack));
          },
        };
      ((a.Error.prototype = Object.create(Error.prototype)),
        (a.Error.prototype.name = "bitcore.Error"));
      var h = r(11290);
      (u(a.Error, h),
        (t.exports = a.Error),
        (t.exports.extend = function (t) {
          return s(a.Error, t);
        }));
    },
    3235: function (t, e, r) {
      ((t.exports = r(6887)), (t.exports.Interpreter = r(6888)));
    },
    3357: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2935),
          n = r(229),
          s = function t(e) {
            if (!(this instanceof t)) return new t(e);
            ((this.bufLen = 0), e ? this.set(e) : (this.bufs = []));
          };
        ((s.prototype.set = function (t) {
          return (
            (this.bufs = t.bufs || this.bufs || []),
            (this.bufLen = this.bufs.reduce(function (t, e) {
              return t + e.length;
            }, 0)),
            this
          );
        }),
          (s.prototype.toBuffer = function () {
            return this.concat();
          }),
          (s.prototype.concat = function () {
            return e.concat(this.bufs, this.bufLen);
          }),
          (s.prototype.write = function (t) {
            return (
              n(i.isBuffer(t)),
              this.bufs.push(t),
              (this.bufLen += t.length),
              this
            );
          }),
          (s.prototype.writeReverse = function (t) {
            return (
              n(i.isBuffer(t)),
              this.bufs.push(i.reverse(t)),
              (this.bufLen += t.length),
              this
            );
          }),
          (s.prototype.writeUInt8 = function (t) {
            var r = e.alloc(1);
            return (r.writeUInt8(t, 0), this.write(r), this);
          }),
          (s.prototype.writeUInt16BE = function (t) {
            var r = e.alloc(2);
            return (r.writeUInt16BE(t, 0), this.write(r), this);
          }),
          (s.prototype.writeUInt16LE = function (t) {
            var r = e.alloc(2);
            return (r.writeUInt16LE(t, 0), this.write(r), this);
          }),
          (s.prototype.writeUInt32BE = function (t) {
            var r = e.alloc(4);
            return (r.writeUInt32BE(t, 0), this.write(r), this);
          }),
          (s.prototype.writeInt32LE = function (t) {
            var r = e.alloc(4);
            return (r.writeInt32LE(t, 0), this.write(r), this);
          }),
          (s.prototype.writeUInt32LE = function (t) {
            var r = e.alloc(4);
            return (r.writeUInt32LE(t, 0), this.write(r), this);
          }),
          (s.prototype.writeUInt64BEBN = function (t) {
            var e = t.toBuffer({ size: 8 });
            return (this.write(e), this);
          }),
          (s.prototype.writeUInt64LEBN = function (t) {
            var e = t.toBuffer({ size: 8 });
            return (this.writeReverse(e), this);
          }),
          (s.prototype.writeVarintNum = function (t) {
            var e = s.varintBufNum(t);
            return (this.write(e), this);
          }),
          (s.prototype.writeVarintBN = function (t) {
            var e = s.varintBufBN(t);
            return (this.write(e), this);
          }),
          (s.varintBufNum = function (t) {
            var r = void 0;
            return (
              t < 253
                ? ((r = e.alloc(1)), r.writeUInt8(t, 0))
                : t < 65536
                  ? ((r = e.alloc(3)),
                    r.writeUInt8(253, 0),
                    r.writeUInt16LE(t, 1))
                  : t < 4294967296
                    ? ((r = e.alloc(5)),
                      r.writeUInt8(254, 0),
                      r.writeUInt32LE(t, 1))
                    : ((r = e.alloc(9)),
                      r.writeUInt8(255, 0),
                      r.writeInt32LE(-1 & t, 1),
                      r.writeUInt32LE(Math.floor(t / 4294967296), 5)),
              r
            );
          }),
          (s.varintBufBN = function (t) {
            var r = void 0,
              i = t.toNumber();
            if (i < 253) ((r = e.alloc(1)), r.writeUInt8(i, 0));
            else if (i < 65536)
              ((r = e.alloc(3)), r.writeUInt8(253, 0), r.writeUInt16LE(i, 1));
            else if (i < 4294967296)
              ((r = e.alloc(5)), r.writeUInt8(254, 0), r.writeUInt32LE(i, 1));
            else {
              var n = new s();
              (n.writeUInt8(255), n.writeUInt64LEBN(t));
              r = n.concat();
            }
            return r;
          }),
          (t.exports = s));
      }).call(this, r(2).Buffer);
    },
    3465: function (t, e, r) {
      "use strict";
      (function (e) {
        r(2);
        var i = r(3204),
          n = r(3235),
          s = r(3466),
          o = r(3618),
          u = r(3357),
          a = r(3034),
          h = r(3071),
          c = r(5694),
          f = r(5695),
          p = r(2866),
          d = r(2935),
          l = r(6888),
          g = r(2856),
          m =
            "0000000000000000000000000000000000000000000000000000000000000001",
          _ = "ffffffffffffffff",
          S = l.SCRIPT_ENABLE_SIGHASH_FORKID,
          I = function (t, e, r, n, s) {
            var c = t.inputs[r];
            function f(t) {
              var e = new u();
              g.each(t.inputs, function (t) {
                (e.writeReverse(t.prevTxId), e.writeUInt32LE(t.outputIndex));
              });
              var r = e.toBuffer(),
                i = h.sha256sha256(r);
              return i;
            }
            function l(t) {
              var e = new u();
              g.each(t.inputs, function (t) {
                e.writeUInt32LE(t.sequenceNumber);
              });
              var r = e.toBuffer(),
                i = h.sha256sha256(r);
              return i;
            }
            function m(t, e) {
              var r = new u();
              g.isUndefined(e)
                ? g.each(t.outputs, function (t) {
                    t.toBufferWriter(r);
                  })
                : t.outputs[e].toBufferWriter(r);
              var i = r.toBuffer(),
                n = h.sha256sha256(i);
              return n;
            }
            p.checkArgument(
              s instanceof a,
              "For ForkId=0 signatures, satoshis or complete input must be provided",
            );
            var _ = d.emptyBuffer(32),
              S = d.emptyBuffer(32),
              I = d.emptyBuffer(32);
            (e & i.SIGHASH_ANYONECANPAY || (_ = f(t)),
              e & i.SIGHASH_ANYONECANPAY ||
                (31 & e) == i.SIGHASH_SINGLE ||
                (31 & e) == i.SIGHASH_NONE ||
                (S = l(t)),
              (31 & e) != i.SIGHASH_SINGLE && (31 & e) != i.SIGHASH_NONE
                ? (I = m(t))
                : (31 & e) == i.SIGHASH_SINGLE &&
                  r < t.outputs.length &&
                  (I = m(t, r)));
            var y = new u();
            (y.writeInt32LE(t.version),
              y.write(_),
              y.write(S),
              y.writeReverse(c.prevTxId),
              y.writeUInt32LE(c.outputIndex),
              y.writeVarintNum(n.toBuffer().length),
              y.write(n.toBuffer()),
              y.writeUInt64LEBN(s));
            var E = c.sequenceNumber;
            (y.writeUInt32LE(E),
              y.write(I),
              y.writeUInt32LE(t.nLockTime),
              y.writeUInt32LE(e >>> 0));
            var P = y.toBuffer(),
              O = h.sha256sha256(P);
            return ((O = new o(O).readReverse()), O);
          },
          y = function (t, c, f, p, d, y) {
            var E = r(5696),
              P = r(5697);
            g.isUndefined(y) && (y = S);
            var O,
              v = E.shallowCopy(t);
            if (((p = new n(p)), y & l.SCRIPT_ENABLE_REPLAY_PROTECTION)) {
              var b = c >> 8,
                k = 16711680 | (57005 ^ b);
              c = (k << 8) | (255 & c);
            }
            if (c & i.SIGHASH_FORKID && y & l.SCRIPT_ENABLE_SIGHASH_FORKID)
              return I(v, c, f, p, d);
            for (p.removeCodeseparators(), O = 0; O < v.inputs.length; O++)
              v.inputs[O] = new P(v.inputs[O]).setScript(n.empty());
            if (
              ((v.inputs[f] = new P(v.inputs[f]).setScript(p)),
              (31 & c) === i.SIGHASH_NONE || (31 & c) === i.SIGHASH_SINGLE)
            )
              for (O = 0; O < v.inputs.length; O++)
                O !== f && (v.inputs[O].sequenceNumber = 0);
            if ((31 & c) === i.SIGHASH_NONE) v.outputs = [];
            else if ((31 & c) === i.SIGHASH_SINGLE) {
              if (f >= v.outputs.length) return e.from(m, "hex");
              for (v.outputs.length = f + 1, O = 0; O < f; O++)
                v.outputs[O] = new s({
                  satoshis: a.fromBuffer(e.from(_, "hex")),
                  script: n.empty(),
                });
            }
            c & i.SIGHASH_ANYONECANPAY && (v.inputs = [v.inputs[f]]);
            var T = new u().write(v.toBuffer()).writeInt32LE(c).toBuffer(),
              A = h.sha256sha256(T);
            return ((A = new o(A).readReverse()), A);
          };
        function E(t, e, r, i, n, s, o, u) {
          var a = y(t, r, i, n, s, o);
          let h;
          return (
            (u = u || "ecdsa"),
            "schnorr" === u
              ? ((h = f.sign(a, e, "little").set({ nhashtype: r })), h)
              : "ecdsa" === u
                ? ((h = c.sign(a, e, "little").set({ nhashtype: r })), h)
                : void 0
          );
        }
        function P(t, e, r, i, n, s, o, u) {
          (p.checkArgument(!g.isUndefined(t)),
            p.checkArgument(!g.isUndefined(e) && !g.isUndefined(e.nhashtype)));
          var a = y(t, e.nhashtype, i, n, s, o);
          return (
            (u = u || "ecdsa"),
            "schnorr" === u
              ? f.verify(a, e, r, "little")
              : "ecdsa" === u
                ? c.verify(a, e, r, "little")
                : void 0
          );
        }
        t.exports = { sighash: y, sign: E, verify: P };
      }).call(this, r(2).Buffer);
    },
    3466: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(3034),
          s = (r(2), r(2935)),
          o = r(3035),
          u = r(3357),
          a = r(3235),
          h = r(2866),
          c = r(3234),
          f = 9007199254740991;
        function p(t) {
          if (!(this instanceof p)) return new p(t);
          if (!i.isObject(t))
            throw new TypeError("Unrecognized argument for Output");
          var r;
          ((this.satoshis = t.satoshis),
            s.isBuffer(t.script)
              ? (this._scriptBuffer = t.script)
              : ((r =
                  i.isString(t.script) && o.isHexa(t.script)
                    ? e.from(t.script, "hex")
                    : t.script),
                this.setScript(r)));
        }
        (Object.defineProperty(p.prototype, "script", {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return (
              this._script || this.setScriptFromBuffer(this._scriptBuffer),
              this._script
            );
          },
        }),
          Object.defineProperty(p.prototype, "satoshis", {
            configurable: !1,
            enumerable: !0,
            get: function () {
              return this._satoshis;
            },
            set: function (t) {
              (t instanceof n
                ? ((this._satoshisBN = t), (this._satoshis = t.toNumber()))
                : i.isString(t)
                  ? ((this._satoshis = parseInt(t)),
                    (this._satoshisBN = n.fromNumber(this._satoshis)))
                  : (h.checkArgument(
                      o.isNaturalNumber(t),
                      "Output satoshis is not a natural number",
                    ),
                    (this._satoshisBN = n.fromNumber(t)),
                    (this._satoshis = t)),
                h.checkState(
                  o.isNaturalNumber(this._satoshis),
                  "Output satoshis is not a natural number",
                ));
            },
          }),
          (p.prototype.invalidSatoshis = function () {
            return this._satoshis > f
              ? "transaction txout satoshis greater than max safe integer"
              : this._satoshis !== this._satoshisBN.toNumber()
                ? "transaction txout satoshis has corrupted value"
                : this._satoshis < 0 && "transaction txout negative";
          }),
          Object.defineProperty(p.prototype, "satoshisBN", {
            configurable: !1,
            enumerable: !0,
            get: function () {
              return this._satoshisBN;
            },
            set: function (t) {
              ((this._satoshisBN = t),
                (this._satoshis = t.toNumber()),
                h.checkState(
                  o.isNaturalNumber(this._satoshis),
                  "Output satoshis is not a natural number",
                ));
            },
          }),
          (p.prototype.toObject = p.prototype.toJSON =
            function () {
              var t = { satoshis: this.satoshis };
              return ((t.script = this._scriptBuffer.toString("hex")), t);
            }),
          (p.fromObject = function (t) {
            return new p(t);
          }),
          (p.prototype.setScriptFromBuffer = function (t) {
            this._scriptBuffer = t;
            try {
              ((this._script = a.fromBuffer(this._scriptBuffer)),
                (this._script._isOutput = !0));
            } catch (e) {
              if (!(e instanceof c.Script.InvalidBuffer)) throw e;
              this._script = null;
            }
          }),
          (p.prototype.setScript = function (t) {
            if (t instanceof a)
              ((this._scriptBuffer = t.toBuffer()),
                (this._script = t),
                (this._script._isOutput = !0));
            else if (i.isString(t))
              ((this._script = a.fromString(t)),
                (this._scriptBuffer = this._script.toBuffer()),
                (this._script._isOutput = !0));
            else {
              if (!s.isBuffer(t))
                throw new TypeError("Invalid argument type: script");
              this.setScriptFromBuffer(t);
            }
            return this;
          }),
          (p.prototype.inspect = function () {
            var t;
            return (
              (t = this.script
                ? this.script.inspect()
                : this._scriptBuffer.toString("hex")),
              "<Output (" + this.satoshis + " sats) " + t + ">"
            );
          }),
          (p.fromBufferReader = function (t) {
            var r = {};
            r.satoshis = t.readUInt64LEBN();
            var i = t.readVarintNum();
            return ((r.script = 0 !== i ? t.read(i) : e.from([])), new p(r));
          }),
          (p.prototype.toBufferWriter = function (t) {
            (t || (t = new u()), t.writeUInt64LEBN(this._satoshisBN));
            var e = this._scriptBuffer;
            return (t.writeVarintNum(e.length), t.write(e), t);
          }),
          (t.exports = p));
      }).call(this, r(2).Buffer);
    },
    3617: function (t, e, r) {
      "use strict";
      var i = r(2856),
        n = r(2935),
        s = r(3035),
        o = [],
        u = {};
      function a() {}
      function h(t, e) {
        if (~o.indexOf(t)) return t;
        if (!e) return u[t];
        i.isArray(e) || (e = [e]);
        for (var r = 0; r < o.length; r++) {
          var n = o[r],
            s = i.pick(n, e),
            a = i.values(s);
          if (~a.indexOf(t)) return n;
        }
      }
      function c(t) {
        for (var e = [], r = 0; r < t.length; r++) e.push(31 & t.charCodeAt(r));
        return e;
      }
      function f(t) {
        var e = new a();
        s.defineImmutable(e, {
          name: t.name,
          alias: t.alias,
          pubkeyhash: t.pubkeyhash,
          privatekey: t.privatekey,
          scripthash: t.scripthash,
          xpubkey: t.xpubkey,
          xprivkey: t.xprivkey,
        });
        var r = t.indexBy || Object.keys(t);
        return (
          t.prefix &&
            i.extend(e, { prefix: t.prefix, prefixArray: c(t.prefix) }),
          t.networkMagic &&
            i.extend(e, { networkMagic: n.integerAsBuffer(t.networkMagic) }),
          t.port && i.extend(e, { port: t.port }),
          t.dnsSeeds && i.extend(e, { dnsSeeds: t.dnsSeeds }),
          o.push(e),
          p(e, r),
          e
        );
      }
      function p(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r],
            s = t[n];
          i.isUndefined(s) || i.isObject(s) || (u[s] = t);
        }
      }
      function d(t) {
        "object" !== typeof t && (t = h(t));
        for (var e = 0; e < o.length; e++) o[e] === t && o.splice(e, 1);
        for (var r in u)
          if (u[r].length) {
            const e = u[r].indexOf(t);
            (e >= 0 && u[r].splice(e, 1), 0 === u[r].length && delete u[r]);
          } else u[r] === t && delete u[r];
      }
      a.prototype.toString = function () {
        return this.name;
      };
      var l = [
          "seed.bitcoinabc.org",
          "seed-abc.bitcoinforks.org",
          "btccash-seeder.bitcoinunlimited.info",
          "seeder.jasonbcox.com",
          "seed.deadalnix.me",
          "seed.bchd.cash",
        ],
        g = {
          name: "livenet",
          alias: "mainnet",
          prefix: "bitcoincash",
          pubkeyhash: 28,
          privatekey: 128,
          scripthash: 40,
          xpubkey: 76067358,
          xprivkey: 76066276,
          networkMagic: 3823236072,
          port: 8333,
          dnsSeeds: l,
        },
        m = {
          name: "testnet",
          prefix: "bchtest",
          pubkeyhash: 111,
          privatekey: 239,
          scripthash: 196,
          xpubkey: 70617039,
          xprivkey: 70615956,
          networkMagic: 4108710900,
          port: 18333,
          dnsSeeds: l,
        },
        _ = {
          name: "regtest",
          prefix: "bchreg",
          pubkeyhash: 111,
          privatekey: 239,
          scripthash: 196,
          xpubkey: 70617039,
          xprivkey: 70615956,
          networkMagic: 3669344250,
          port: 18444,
          dnsSeeds: [],
          indexBy: ["port", "name", "prefix", "networkMagic"],
        };
      (f(m), f(_), f(g));
      var S = h("livenet"),
        I = h("regtest"),
        y = h("testnet");
      function E() {
        y.regtestEnabled = !0;
      }
      function P() {
        y.regtestEnabled = !1;
      }
      t.exports = {
        add: f,
        remove: d,
        defaultNetwork: S,
        livenet: S,
        mainnet: S,
        testnet: y,
        regtest: I,
        get: h,
        enableRegtest: E,
        disableRegtest: P,
      };
    },
    3618: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(2866),
          s = r(2935),
          o = r(3034),
          u = function t(r) {
            if (!(this instanceof t)) return new t(r);
            if (!i.isUndefined(r))
              if (e.isBuffer(r)) this.set({ buf: r });
              else if (i.isString(r)) {
                var n = e.from(r, "hex");
                if (2 * n.length != r.length)
                  throw new TypeError("Invalid hex string");
                this.set({ buf: n });
              } else {
                if (!i.isObject(r))
                  throw new TypeError("Unrecognized argument for BufferReader");
                var s = r;
                this.set(s);
              }
          };
        ((u.prototype.set = function (t) {
          return (
            (this.buf = t.buf || this.buf || void 0),
            (this.pos = t.pos || this.pos || 0),
            this
          );
        }),
          (u.prototype.eof = function () {
            return this.pos >= this.buf.length;
          }),
          (u.prototype.finished = u.prototype.eof),
          (u.prototype.read = function (t) {
            n.checkArgument(!i.isUndefined(t), "Must specify a length");
            var e = this.buf.slice(this.pos, this.pos + t);
            return ((this.pos = this.pos + t), e);
          }),
          (u.prototype.readAll = function () {
            var t = this.buf.slice(this.pos, this.buf.length);
            return ((this.pos = this.buf.length), t);
          }),
          (u.prototype.readUInt8 = function () {
            var t = this.buf.readUInt8(this.pos);
            return ((this.pos = this.pos + 1), t);
          }),
          (u.prototype.readUInt16BE = function () {
            var t = this.buf.readUInt16BE(this.pos);
            return ((this.pos = this.pos + 2), t);
          }),
          (u.prototype.readUInt16LE = function () {
            var t = this.buf.readUInt16LE(this.pos);
            return ((this.pos = this.pos + 2), t);
          }),
          (u.prototype.readUInt32BE = function () {
            var t = this.buf.readUInt32BE(this.pos);
            return ((this.pos = this.pos + 4), t);
          }),
          (u.prototype.readUInt32LE = function () {
            var t = this.buf.readUInt32LE(this.pos);
            return ((this.pos = this.pos + 4), t);
          }),
          (u.prototype.readInt32LE = function () {
            var t = this.buf.readInt32LE(this.pos);
            return ((this.pos = this.pos + 4), t);
          }),
          (u.prototype.readUInt64BEBN = function () {
            var t = this.buf.slice(this.pos, this.pos + 8),
              e = o.fromBuffer(t);
            return ((this.pos = this.pos + 8), e);
          }),
          (u.prototype.readUInt64LEBN = function () {
            var t,
              e = this.buf.readUInt32LE(this.pos),
              r = this.buf.readUInt32LE(this.pos + 4),
              i = 4294967296 * r + e;
            if (i <= 9007199254740991) t = new o(i);
            else {
              var n = Array.prototype.slice.call(
                this.buf,
                this.pos,
                this.pos + 8,
              );
              t = new o(n, 10, "le");
            }
            return ((this.pos = this.pos + 8), t);
          }),
          (u.prototype.readVarintNum = function () {
            var t = this.readUInt8();
            switch (t) {
              case 253:
                return this.readUInt16LE();
              case 254:
                return this.readUInt32LE();
              case 255:
                var e = this.readUInt64LEBN(),
                  r = e.toNumber();
                if (r <= Math.pow(2, 53)) return r;
                throw new Error(
                  "number too large to retain precision - use readVarintBN",
                );
              default:
                return t;
            }
          }),
          (u.prototype.readVarLengthBuffer = function () {
            var t = this.readVarintNum(),
              e = this.read(t);
            return (
              n.checkState(
                e.length === t,
                "Invalid length while reading varlength buffer. Expected to read: " +
                  t +
                  " and read " +
                  e.length,
              ),
              e
            );
          }),
          (u.prototype.readVarintBuf = function () {
            var t = this.buf.readUInt8(this.pos);
            switch (t) {
              case 253:
                return this.read(3);
              case 254:
                return this.read(5);
              case 255:
                return this.read(9);
              default:
                return this.read(1);
            }
          }),
          (u.prototype.readVarintBN = function () {
            var t = this.readUInt8();
            switch (t) {
              case 253:
                return new o(this.readUInt16LE());
              case 254:
                return new o(this.readUInt32LE());
              case 255:
                return this.readUInt64LEBN();
              default:
                return new o(t);
            }
          }),
          (u.prototype.reverse = function () {
            for (var t = e.alloc(this.buf.length), r = 0; r < t.length; r++)
              t[r] = this.buf[this.buf.length - 1 - r];
            return ((this.buf = t), this);
          }),
          (u.prototype.readReverse = function (t) {
            i.isUndefined(t) && (t = this.buf.length);
            var e = this.buf.slice(this.pos, this.pos + t);
            return ((this.pos = this.pos + t), s.reverse(e));
          }),
          (t.exports = u));
      }).call(this, r(2).Buffer);
    },
    3845: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3034),
          n = r(2935),
          s = r(795).ec,
          o = new s("secp256k1"),
          u = o.curve.point.bind(o.curve),
          a = o.curve.pointFromX.bind(o.curve),
          Point = function (t, e, r) {
            try {
              var i = u(t, e, r);
            } catch (n) {
              throw new Error("Invalid Point");
            }
            return (i.validate(), i);
          };
        ((Point.prototype = Object.getPrototypeOf(o.curve.point())),
          (Point.fromX = function (t, e) {
            try {
              var r = a(e, t);
            } catch (i) {
              throw new Error("Invalid X");
            }
            return (r.validate(), r);
          }),
          (Point.getG = function () {
            return o.curve.g;
          }),
          (Point.getN = function () {
            return new i(o.curve.n.toArray());
          }),
          Point.prototype._getX ||
            (Point.prototype._getX = Point.prototype.getX),
          (Point.prototype.getX = function () {
            return new i(this._getX().toArray());
          }),
          Point.prototype._getY ||
            (Point.prototype._getY = Point.prototype.getY),
          (Point.prototype.getY = function () {
            return new i(this._getY().toArray());
          }),
          (Point.prototype.validate = function () {
            if (this.isInfinity())
              throw new Error("Point cannot be equal to Infinity");
            var t;
            try {
              t = a(this.getX(), this.getY().isOdd());
            } catch (e) {
              throw new Error("Point does not lie on the curve");
            }
            if (0 !== t.y.cmp(this.y))
              throw new Error("Invalid y value for curve.");
            if (!this.mul(Point.getN()).isInfinity())
              throw new Error("Point times N must be infinity");
            return this;
          }),
          (Point.pointToCompressed = function (t) {
            var r,
              i = t.getX().toBuffer({ size: 32 }),
              s = t.getY().toBuffer({ size: 32 }),
              o = s[s.length - 1] % 2;
            return ((r = o ? e.from([3]) : e.from([2])), n.concat([r, i]));
          }),
          (Point.prototype.hasSquare = function () {
            return !this.isInfinity() && this.isSquare(this.getY());
          }),
          (Point.prototype.isSquare = function (t) {
            let e = new i(
                "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F",
                "hex",
              ),
              r = new i(t),
              n = r.toRed(i.red(e)),
              s = n.redPow(e.sub(i.One).div(new i(2))).fromRed();
            return s.eq(new i(1));
          }),
          (t.exports = Point));
      }).call(this, r(2).Buffer);
    },
    3846: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(2866),
          s = r(3234),
          o = r(4583),
          u = r(3617),
          a = r(3071),
          h = r(3035),
          c = r(3205),
          f = (r(3034), r(6885)),
          p = r(6886);
        function d(t, e, r) {
          if (!(this instanceof d)) return new d(t, e, r);
          if (i.isArray(t) && i.isNumber(e)) return d.createMultisig(t, e, r);
          if (t instanceof d) return t;
          if (
            (n.checkArgument(
              t,
              "First argument is required, please include address data.",
              "guide/address.html",
            ),
            e && !u.get(e))
          )
            throw new TypeError(
              'Second argument must be "livenet", "testnet", or "regtest".',
            );
          if (r && r !== d.PayToPublicKeyHash && r !== d.PayToScriptHash)
            throw new TypeError(
              'Third argument must be "pubkeyhash" or "scripthash".',
            );
          var s = this._classifyArguments(t, e, r);
          return (
            (s.network = s.network || u.get(e) || u.defaultNetwork),
            (s.type = s.type || r || d.PayToPublicKeyHash),
            h.defineImmutable(this, {
              hashBuffer: s.hashBuffer,
              network: s.network,
              type: s.type,
            }),
            this
          );
        }
        function l(t) {
          function r(t) {
            var e = t.toLowerCase(),
              r = t.toUpperCase(),
              i = t === e || t === r;
            return i;
          }
          function i(t, e) {
            function r(t) {
              for (var e = [], r = 0; r < t.length; r++)
                e.push(31 & t.charCodeAt(r));
              return e;
            }
            var i = r(t).concat([0]);
            return 0 === I(i.concat(e));
          }
          (n.checkArgument(r(t), "Mixed case"), (t = t.toLowerCase()));
          var s,
            o,
            a = t.split(":");
          (n.checkArgument(a.length <= 2, "Invalid format:" + t),
            2 === a.length
              ? ((s = a[0]), (o = a[1]))
              : ((s = null), (o = a[0])));
          var h = f.decode(o.toLowerCase());
          if (s) n.checkArgument(i(s, h), "Invalid checksum:" + t);
          else {
            var c,
              d = ["livenet", "testnet", "regtest"];
            while (!s && (c = d.shift())) {
              var l = u.get(c).prefix;
              i(l, h) && (s = l);
            }
            n.checkArgument(s, "Invalid checksum:" + t);
          }
          var m = p(h.slice(0, -8), 5, 8, !0),
            _ = m.shift(),
            S = m;
          function y(t) {
            switch (120 & t) {
              case 0:
                return "pubkeyhash";
              case 8:
                return "scripthash";
              default:
                throw new Error("Invalid address type in version byte:" + t);
            }
          }
          n.checkArgument(g(_) === 8 * S.length, "Invalid hash size:" + t);
          var E = y(_),
            P = u.get(s),
            O = {};
          return ((O.hashBuffer = e.from(S)), (O.network = P), (O.type = E), O);
        }
        function g(t) {
          switch (7 & t) {
            case 0:
              return 160;
            case 1:
              return 192;
            case 2:
              return 224;
            case 3:
              return 256;
            case 4:
              return 320;
            case 5:
              return 384;
            case 6:
              return 448;
            case 7:
              return 512;
          }
        }
        function m(t) {
          for (var e = [], r = 0; r < 8; ++r) (e.push(31 & t), (t /= 32));
          return e.reverse();
        }
        ((d.prototype._classifyArguments = function (t, r, n) {
          if ((t instanceof e || t instanceof Uint8Array) && 20 === t.length)
            return d._transformHash(t);
          if ((t instanceof e || t instanceof Uint8Array) && 21 === t.length)
            return d._transformBuffer(t, r, n);
          if (t instanceof c) return d._transformPublicKey(t);
          if (t instanceof y) return d._transformScript(t, r);
          if ("string" === typeof t) return d._transformString(t, r, n);
          if (i.isObject(t)) return d._transformObject(t);
          throw new TypeError("First argument is an unrecognized data format.");
        }),
          (d.PayToPublicKeyHash = "pubkeyhash"),
          (d.PayToScriptHash = "scripthash"),
          (d._transformHash = function (t) {
            var r = {};
            if (!(t instanceof e) && !(t instanceof Uint8Array))
              throw new TypeError("Address supplied is not a buffer.");
            if (20 !== t.length)
              throw new TypeError(
                "Address hashbuffers must be exactly 20 bytes.",
              );
            return ((r.hashBuffer = t), r);
          }),
          (d._transformObject = function (t) {
            return (
              n.checkArgument(
                t.hash || t.hashBuffer,
                "Must provide a `hash` or `hashBuffer` property",
              ),
              n.checkArgument(t.type, "Must provide a `type` property"),
              {
                hashBuffer: t.hash ? e.from(t.hash, "hex") : t.hashBuffer,
                network: u.get(t.network) || u.defaultNetwork,
                type: t.type,
              }
            );
          }),
          (d._classifyFromVersion = function (t) {
            var e = {},
              r = u.get(t[0], "pubkeyhash"),
              i = u.get(t[0], "scripthash");
            return (
              r
                ? ((e.network = r), (e.type = d.PayToPublicKeyHash))
                : i && ((e.network = i), (e.type = d.PayToScriptHash)),
              e
            );
          }),
          (d._transformBuffer = function (t, r, i) {
            var n = {};
            if (!(t instanceof e) && !(t instanceof Uint8Array))
              throw new TypeError("Address supplied is not a buffer.");
            if (21 !== t.length)
              throw new TypeError("Address buffers must be exactly 21 bytes.");
            var s = u.get(r),
              o = d._classifyFromVersion(t);
            if (r && !s) throw new TypeError("Unknown network");
            if (!o.network || (s && s !== o.network))
              throw new TypeError("Address has mismatched network type.");
            if (!o.type || (i && i !== o.type))
              throw new TypeError("Address has mismatched type.");
            return (
              (n.hashBuffer = t.slice(1)),
              (n.network = o.network),
              (n.type = o.type),
              n
            );
          }),
          (d._transformPublicKey = function (t) {
            var e = {};
            if (!(t instanceof c))
              throw new TypeError("Address must be an instance of PublicKey.");
            return (
              (e.hashBuffer = a.sha256ripemd160(t.toBuffer())),
              (e.type = d.PayToPublicKeyHash),
              e
            );
          }),
          (d._transformScript = function (t, e) {
            n.checkArgument(t instanceof y, "script must be a Script instance");
            var r = t.getAddressInfo(e);
            if (!r) throw new s.Script.CantDeriveAddress(t);
            return r;
          }),
          (d.createMultisig = function (t, e, r) {
            return (
              (r = r || t[0].network || u.defaultNetwork),
              d.payingTo(y.buildMultisigOut(t, e), r)
            );
          }),
          (d.createEscrow = function (t, e, r) {
            const i = y.buildEscrowOut(t, e);
            return ((r = r || e.network || u.defaultNetwork), d.payingTo(i, r));
          }),
          (d._decodeCashAddress = l),
          (d._transformString = function (t, e, r) {
            if ("string" !== typeof t)
              throw new TypeError("data parameter supplied is not a string.");
            if (t.length < 34)
              throw new Error("Invalid Address string provided");
            if (t.length > 100)
              throw new TypeError("address string is too long");
            t = t.trim();
            var i = u.get(e);
            if (e && !i) throw new TypeError("Unknown network");
            if (t.length > 35) {
              var n = l(t);
              if (!n.network || (i && i.name !== n.network.name))
                throw new TypeError("Address has mismatched network type.");
              if (!n.type || (r && r !== n.type))
                throw new TypeError("Address has mismatched type.");
              return n;
            }
            var s = o.decode(t);
            return d._transformBuffer(s, e, r);
          }),
          (d.fromPublicKey = function (t, e) {
            var r = d._transformPublicKey(t);
            return (
              (e = e || u.defaultNetwork),
              new d(r.hashBuffer, e, r.type)
            );
          }),
          (d.fromPublicKeyHash = function (t, e) {
            var r = d._transformHash(t);
            return new d(r.hashBuffer, e, d.PayToPublicKeyHash);
          }),
          (d.fromScriptHash = function (t, e) {
            n.checkArgument(t, "hash parameter is required");
            var r = d._transformHash(t);
            return new d(r.hashBuffer, e, d.PayToScriptHash);
          }),
          (d.payingTo = function (t, e) {
            return (
              n.checkArgument(t, "script is required"),
              n.checkArgument(
                t instanceof y,
                "script must be instance of Script",
              ),
              d.fromScriptHash(a.sha256ripemd160(t.toBuffer()), e)
            );
          }),
          (d.fromScript = function (t, e) {
            n.checkArgument(t instanceof y, "script must be a Script instance");
            var r = d._transformScript(t, e);
            return new d(r.hashBuffer, e, r.type);
          }),
          (d.fromBuffer = function (t, e, r) {
            var i = d._transformBuffer(t, e, r);
            return new d(i.hashBuffer, i.network, i.type);
          }),
          (d.fromString = function (t, e, r) {
            var i = d._transformString(t, e, r);
            return new d(i.hashBuffer, i.network, i.type);
          }),
          (d.fromObject = function (t) {
            n.checkState(
              h.isHexa(t.hash),
              'Unexpected hash property, "' + t.hash + '", expected to be hex.',
            );
            var r = e.from(t.hash, "hex");
            return new d(r, t.network, t.type);
          }),
          (d.getValidationError = function (t, e, r) {
            var i;
            try {
              new d(t, e, r);
            } catch (n) {
              i = n;
            }
            return i;
          }),
          (d.isValid = function (t, e, r) {
            return !d.getValidationError(t, e, r);
          }),
          (d.prototype.isPayToPublicKeyHash = function () {
            return this.type === d.PayToPublicKeyHash;
          }),
          (d.prototype.isPayToScriptHash = function () {
            return this.type === d.PayToScriptHash;
          }),
          (d.prototype.toBuffer = function () {
            var t = e.from([this.network[this.type]]),
              r = e.concat([t, this.hashBuffer]);
            return r;
          }),
          (d.prototype.toObject = d.prototype.toJSON =
            function () {
              return {
                hash: this.hashBuffer.toString("hex"),
                type: this.type,
                network: this.network.toString(),
              };
            }),
          (d.prototype.inspect = function () {
            return (
              "<Address: " +
              this.toString() +
              ", type: " +
              this.type +
              ", network: " +
              this.network +
              ">"
            );
          }),
          /***
           * @license
           * https://github.com/bitcoincashjs/cashaddr
           * Copyright (c) 2017 Emilio Almansi
           * Distributed under the MIT software license, see the accompanying
           * file LICENSE or http://www.opensource.org/licenses/mit-license.php.
           */
          (d.prototype.toCashBuffer = function () {
            var t = e.from([this.network[this.type]]),
              r = e.concat([t, this.hashBuffer]);
            return r;
          }),
          (d.prototype.toLegacyAddress = function () {
            return o.encode(this.toBuffer());
          }),
          (d.prototype.toCashAddress = function (t) {
            function e(t) {
              switch (t) {
                case "pubkeyhash":
                  return 0;
                case "scripthash":
                  return 8;
                default:
                  throw new Error("Invalid type:" + t);
              }
            }
            function r(t) {
              switch (8 * t.length) {
                case 160:
                  return 0;
                case 192:
                  return 1;
                case 224:
                  return 2;
                case 256:
                  return 3;
                case 320:
                  return 4;
                case 384:
                  return 5;
                case 448:
                  return 6;
                case 512:
                  return 7;
                default:
                  throw new Error("Invalid hash size:" + t.length);
              }
            }
            var i = [0, 0, 0, 0, 0, 0, 0, 0],
              n = this.network.prefixArray.concat([0]),
              s = e(this.type) + r(this.hashBuffer),
              o = Array.prototype.slice.call(this.hashBuffer, 0),
              u = p([s].concat(o), 8, 5),
              a = n.concat(u).concat(i),
              h = u.concat(m(I(a)));
            return !0 === t
              ? f.encode(h)
              : this.network.prefix + ":" + f.encode(h);
          }),
          (d.prototype.toString = d.prototype.toCashAddress));
        var _ = [152, 121, 243, 174, 30],
          S = [4072443489, 3077413346, 1046459332, 783016616, 1329849456];
        function I(t) {
          for (var e = 0, r = 1, i = 0, n = 0; n < t.length; n++) {
            ((i = e >>> 3),
              (e &= 7),
              (e <<= 5),
              (e |= r >>> 27),
              (r &= 134217727),
              (r <<= 5),
              (r ^= t[n]));
            for (var s = 0; s < _.length; ++s)
              i & (1 << s) && ((e ^= _[s]), (r ^= S[s]));
          }
          return (
            (r ^= 1),
            r < 0 && ((r ^= 1 << 31), (r += 2 * (1 << 30))),
            e * (1 << 30) * 4 + r
          );
        }
        t.exports = d;
        var y = r(3235);
      }).call(this, r(2).Buffer);
    },
    3966: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(2866),
          s = r(3234),
          o = r(3357),
          u = (r(2), r(2935)),
          a = r(3035),
          h = r(3235),
          c = r(3465),
          f = r(3466),
          p = 4294967295,
          d = p - 2,
          l = p,
          g = p - 1;
        const m = Math.pow(2, 31),
          _ = Math.pow(2, 22),
          S = 65535,
          I = 512,
          y = Math.pow(2, 16) - 1;
        function E(t) {
          return this instanceof E
            ? t
              ? this._fromObject(t)
              : void 0
            : new E(t);
        }
        ((E.MAXINT = p),
          (E.DEFAULT_SEQNUMBER = l),
          (E.DEFAULT_LOCKTIME_SEQNUMBER = g),
          (E.DEFAULT_RBF_SEQNUMBER = d),
          (E.SEQUENCE_LOCKTIME_TYPE_FLAG = _),
          Object.defineProperty(E.prototype, "script", {
            configurable: !1,
            enumerable: !0,
            get: function () {
              return this.isNull()
                ? null
                : (this._script ||
                    ((this._script = new h(this._scriptBuffer)),
                    (this._script._isInput = !0)),
                  this._script);
            },
          }),
          (E.fromObject = function (t) {
            n.checkArgument(i.isObject(t));
            var e = new E();
            return e._fromObject(t);
          }),
          (E.prototype._fromObject = function (t) {
            var r;
            if (
              ((r =
                i.isString(t.prevTxId) && a.isHexa(t.prevTxId)
                  ? e.from(t.prevTxId, "hex")
                  : t.prevTxId),
              (this.output = t.output
                ? t.output instanceof f
                  ? t.output
                  : new f(t.output)
                : void 0),
              (this.prevTxId = r || t.txidbuf),
              (this.outputIndex = i.isUndefined(t.outputIndex)
                ? t.txoutnum
                : t.outputIndex),
              (this.sequenceNumber = i.isUndefined(t.sequenceNumber)
                ? i.isUndefined(t.seqnum)
                  ? l
                  : t.seqnum
                : t.sequenceNumber),
              i.isUndefined(t.script) && i.isUndefined(t.scriptBuffer))
            )
              throw new s.Transaction.Input.MissingScript();
            return (this.setScript(t.scriptBuffer || t.script), this);
          }),
          (E.prototype.toObject = E.prototype.toJSON =
            function () {
              var t = {
                prevTxId: this.prevTxId.toString("hex"),
                outputIndex: this.outputIndex,
                sequenceNumber: this.sequenceNumber,
                script: this._scriptBuffer.toString("hex"),
              };
              return (
                this.script && (t.scriptString = this.script.toString()),
                this.output && (t.output = this.output.toObject()),
                t
              );
            }),
          (E.fromBufferReader = function (t) {
            var e = new E();
            return (
              (e.prevTxId = t.readReverse(32)),
              (e.outputIndex = t.readUInt32LE()),
              (e._scriptBuffer = t.readVarLengthBuffer()),
              (e.sequenceNumber = t.readUInt32LE()),
              e
            );
          }),
          (E.prototype.toBufferWriter = function (t) {
            (t || (t = new o()),
              t.writeReverse(this.prevTxId),
              t.writeUInt32LE(this.outputIndex));
            var e = this._scriptBuffer;
            return (
              t.writeVarintNum(e.length),
              t.write(e),
              t.writeUInt32LE(this.sequenceNumber),
              t
            );
          }),
          (E.prototype.setScript = function (t) {
            if (((this._script = null), t instanceof h))
              ((this._script = t),
                (this._script._isInput = !0),
                (this._scriptBuffer = t.toBuffer()));
            else if (null === t)
              ((this._script = h.empty()),
                (this._script._isInput = !0),
                (this._scriptBuffer = this._script.toBuffer()));
            else if (a.isHexa(t)) this._scriptBuffer = e.from(t, "hex");
            else if (i.isString(t))
              ((this._script = new h(t)),
                (this._script._isInput = !0),
                (this._scriptBuffer = this._script.toBuffer()));
            else {
              if (!u.isBuffer(t))
                throw new TypeError("Invalid argument type: script");
              this._scriptBuffer = e.from(t);
            }
            return this;
          }),
          (E.prototype.getSignatures = function () {
            throw new s.AbstractMethodInvoked(
              "Trying to sign unsupported output type (only P2PKH and P2SH multisig inputs are supported) for input: " +
                JSON.stringify(this),
            );
          }),
          (E.prototype.isFullySigned = function () {
            throw new s.AbstractMethodInvoked("Input#isFullySigned");
          }),
          (E.prototype.isFinal = function () {
            return 4294967295 !== this.sequenceNumber;
          }),
          (E.prototype.addSignature = function () {
            throw new s.AbstractMethodInvoked("Input#addSignature");
          }),
          (E.prototype.clearSignatures = function () {
            throw new s.AbstractMethodInvoked("Input#clearSignatures");
          }),
          (E.prototype.isValidSignature = function (t, e, r) {
            return (
              (e.signature.nhashtype = e.sigtype),
              c.verify(
                t,
                e.signature,
                e.publicKey,
                e.inputIndex,
                this.output.script,
                this.output.satoshisBN,
                void 0,
                r,
              )
            );
          }),
          (E.prototype.isNull = function () {
            return (
              "0000000000000000000000000000000000000000000000000000000000000000" ===
                this.prevTxId.toString("hex") && 4294967295 === this.outputIndex
            );
          }),
          (E.prototype._estimateSize = function () {
            return this.toBufferWriter().toBuffer().length;
          }),
          (E.prototype.lockForSeconds = function (t) {
            if ((n.checkArgument(i.isNumber(t)), t < 0 || t >= I * S))
              throw new s.Transaction.Input.LockTimeRange();
            return (
              (t = parseInt(Math.floor(t / I))),
              (this.sequenceNumber = t | _),
              this
            );
          }),
          (E.prototype.lockUntilBlockHeight = function (t) {
            if ((n.checkArgument(i.isNumber(t)), t < 0 || t >= y))
              throw new s.Transaction.Input.BlockHeightOutOfRange();
            return ((this.sequenceNumber = t), this);
          }),
          (E.prototype.getLockTime = function () {
            if (this.sequenceNumber & m) return null;
            if (this.sequenceNumber & _) {
              var t = I * (this.sequenceNumber & S);
              return t;
            }
            var e = this.sequenceNumber & S;
            return e;
          }),
          (t.exports = E));
      }).call(this, r(2).Buffer);
    },
    3968: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(2866),
          s = r(3967),
          o = r(2935),
          u = r(3035),
          a = r(3205),
          h = r(3234),
          c = r(3204);
        function f(t) {
          if (!(this instanceof f)) return new f(t);
          if (t instanceof f) return t;
          if (i.isObject(t)) return this._fromObject(t);
          throw new h.InvalidArgument(
            "TransactionSignatures must be instantiated from an object",
          );
        }
        (s(f, c),
          (f.prototype._fromObject = function (t) {
            return (
              this._checkObjectArgs(t),
              (this.publicKey = new a(t.publicKey)),
              (this.prevTxId = o.isBuffer(t.prevTxId)
                ? t.prevTxId
                : e.from(t.prevTxId, "hex")),
              (this.outputIndex = t.outputIndex),
              (this.inputIndex = t.inputIndex),
              (this.signature =
                t.signature instanceof c
                  ? t.signature
                  : o.isBuffer(t.signature)
                    ? c.fromBuffer(t.signature)
                    : c.fromString(t.signature)),
              (this.sigtype = t.sigtype),
              this
            );
          }),
          (f.prototype._checkObjectArgs = function (t) {
            (n.checkArgument(a(t.publicKey), "publicKey"),
              n.checkArgument(!i.isUndefined(t.inputIndex), "inputIndex"),
              n.checkArgument(!i.isUndefined(t.outputIndex), "outputIndex"),
              n.checkState(
                i.isNumber(t.inputIndex),
                "inputIndex must be a number",
              ),
              n.checkState(
                i.isNumber(t.outputIndex),
                "outputIndex must be a number",
              ),
              n.checkArgument(t.signature, "signature"),
              n.checkArgument(t.prevTxId, "prevTxId"),
              n.checkState(
                t.signature instanceof c ||
                  o.isBuffer(t.signature) ||
                  u.isHexa(t.signature),
                "signature must be a buffer or hexa value",
              ),
              n.checkState(
                o.isBuffer(t.prevTxId) || u.isHexa(t.prevTxId),
                "prevTxId must be a buffer or hexa value",
              ),
              n.checkArgument(t.sigtype, "sigtype"),
              n.checkState(i.isNumber(t.sigtype), "sigtype must be a number"));
          }),
          (f.prototype.toObject = f.prototype.toJSON =
            function () {
              return {
                publicKey: this.publicKey.toString(),
                prevTxId: this.prevTxId.toString("hex"),
                outputIndex: this.outputIndex,
                inputIndex: this.inputIndex,
                signature: this.signature.toString(),
                sigtype: this.sigtype,
              };
            }),
          (f.fromObject = function (t) {
            return (n.checkArgument(t), new f(t));
          }),
          (t.exports = f));
      }).call(this, r(2).Buffer);
    },
    4583: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(4862),
          s = (r(2), r(3071).sha256sha256),
          o = function t(r) {
            if (!(this instanceof t)) return new t(r);
            if (e.isBuffer(r)) {
              var i = r;
              this.fromBuffer(i);
            } else if ("string" === typeof r) {
              var n = r;
              this.fromString(n);
            } else r && this.set(r);
          };
        ((o.prototype.set = function (t) {
          return ((this.buf = t.buf || this.buf || void 0), this);
        }),
          (o.validChecksum = function (t, r) {
            return (
              i.isString(t) && (t = e.from(n.decode(t))),
              i.isString(r) && (r = e.from(n.decode(r))),
              r || ((r = t.slice(-4)), (t = t.slice(0, -4))),
              o.checksum(t).toString("hex") === r.toString("hex")
            );
          }),
          (o.decode = function (t) {
            if ("string" !== typeof t)
              throw new Error("Input must be a string");
            var r = e.from(n.decode(t));
            if (r.length < 4) throw new Error("Input string too short");
            var i = r.slice(0, -4),
              o = r.slice(-4),
              u = s(i),
              a = u.slice(0, 4);
            if (o.toString("hex") !== a.toString("hex"))
              throw new Error("Checksum mismatch");
            return i;
          }),
          (o.checksum = function (t) {
            return s(t).slice(0, 4);
          }),
          (o.encode = function (t) {
            if (!e.isBuffer(t)) throw new Error("Input must be a buffer");
            var r = e.alloc(t.length + 4),
              i = o.checksum(t);
            return (t.copy(r), i.copy(r, t.length), n.encode(r));
          }),
          (o.prototype.fromBuffer = function (t) {
            return ((this.buf = t), this);
          }),
          (o.prototype.fromString = function (t) {
            var e = o.decode(t);
            return ((this.buf = e), this);
          }),
          (o.prototype.toBuffer = function () {
            return this.buf;
          }),
          (o.prototype.toString = function () {
            return o.encode(this.buf);
          }),
          (t.exports = o));
      }).call(this, r(2).Buffer);
    },
    4584: function (t, e, r) {
      "use strict";
      (function (e, i) {
        function n() {}
        ((n.getRandomBuffer = function (t) {
          return e.browser
            ? n.getRandomBufferBrowser(t)
            : n.getRandomBufferNode(t);
        }),
          (n.getRandomBufferNode = function (t) {
            var e = r(2764);
            return e.randomBytes(t);
          }),
          (n.getRandomBufferBrowser = function (t) {
            if (!window.crypto && !window.msCrypto)
              throw new Error("window.crypto not available");
            if (window.crypto && window.crypto.getRandomValues)
              var e = window.crypto;
            else {
              if (!window.msCrypto || !window.msCrypto.getRandomValues)
                throw new Error("window.crypto.getRandomValues not available");
              e = window.msCrypto;
            }
            var r = new Uint8Array(t);
            e.getRandomValues(r);
            var n = i.from(r);
            return n;
          }),
          (n.getPseudoRandomBuffer = function (t) {
            for (var e, r = 4294967296, n = i.alloc(t), s = 0; s <= t; s++) {
              var o = Math.floor(s / 4),
                u = s - 4 * o;
              0 === u
                ? ((e = Math.random() * r), (n[s] = 255 & e))
                : (n[s] = 255 & (e >>>= 8));
            }
            return n;
          }),
          (t.exports = n));
      }).call(this, r(18), r(2).Buffer);
    },
    4861: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(3846),
          s = r(4583),
          o = r(3034),
          u = r(3035),
          a = r(3617),
          Point = r(3845),
          h = r(3205),
          c = r(4584),
          f = r(2866);
        function p(t, e) {
          if (!(this instanceof p)) return new p(t, e);
          if (t instanceof p) return t;
          var r = this._classifyArguments(t, e);
          if (!r.bn || 0 === r.bn.cmp(new o(0)))
            throw new TypeError(
              "Number can not be equal to zero, undefined, null or false",
            );
          if (!r.bn.lt(Point.getN()))
            throw new TypeError("Number must be less than N");
          if ("undefined" === typeof r.network)
            throw new TypeError(
              'Must specify the network ("livenet" or "testnet")',
            );
          return (
            u.defineImmutable(this, {
              bn: r.bn,
              compressed: r.compressed,
              network: r.network,
            }),
            Object.defineProperty(this, "publicKey", {
              configurable: !1,
              enumerable: !0,
              get: this.toPublicKey.bind(this),
            }),
            this
          );
        }
        ((p.prototype._classifyArguments = function (t, r) {
          var n = { compressed: !0, network: r ? a.get(r) : a.defaultNetwork };
          if (i.isUndefined(t) || i.isNull(t)) n.bn = p._getRandomBN();
          else if (t instanceof o) n.bn = t;
          else if (t instanceof e || t instanceof Uint8Array)
            n = p._transformBuffer(t, r);
          else if (t.bn && t.network) n = p._transformObject(t);
          else if (!r && a.get(t))
            ((n.bn = p._getRandomBN()), (n.network = a.get(t)));
          else {
            if ("string" !== typeof t)
              throw new TypeError(
                "First argument is an unrecognized data type.",
              );
            u.isHexa(t)
              ? (n.bn = new o(e.from(t, "hex")))
              : (n = p._transformWIF(t, r));
          }
          return n;
        }),
          (p._getRandomBN = function () {
            var t, e;
            do {
              var r = c.getRandomBuffer(32);
              ((e = o.fromBuffer(r)), (t = e.lt(Point.getN())));
            } while (!t);
            return e;
          }),
          (p._transformBuffer = function (t, e) {
            var r = {};
            if (32 === t.length) return p._transformBNBuffer(t, e);
            if (((r.network = a.get(t[0], "privatekey")), !r.network))
              throw new Error("Invalid network");
            if (e && r.network !== a.get(e))
              throw new TypeError("Private key network mismatch");
            if (34 === t.length && 1 === t[33]) r.compressed = !0;
            else {
              if (33 !== t.length)
                throw new Error(
                  "Length of buffer must be 33 (uncompressed) or 34 (compressed)",
                );
              r.compressed = !1;
            }
            return ((r.bn = o.fromBuffer(t.slice(1, 33))), r);
          }),
          (p._transformBNBuffer = function (t, e) {
            var r = {};
            return (
              (r.network = a.get(e) || a.defaultNetwork),
              (r.bn = o.fromBuffer(t)),
              (r.compressed = !1),
              r
            );
          }),
          (p._transformWIF = function (t, e) {
            return p._transformBuffer(s.decode(t), e);
          }),
          (p.fromBuffer = function (t, e) {
            return new p(t, e);
          }),
          (p._transformObject = function (t) {
            var e = new o(t.bn, "hex"),
              r = a.get(t.network);
            return { bn: e, network: r, compressed: t.compressed };
          }),
          (p.fromString = p.fromWIF =
            function (t) {
              return (
                f.checkArgument(
                  i.isString(t),
                  "First argument is expected to be a string.",
                ),
                new p(t)
              );
            }),
          (p.fromObject = function (t) {
            return (
              f.checkArgument(
                i.isObject(t),
                "First argument is expected to be an object.",
              ),
              new p(t)
            );
          }),
          (p.fromRandom = function (t) {
            var e = p._getRandomBN();
            return new p(e, t);
          }),
          (p.getValidationError = function (t, e) {
            var r;
            try {
              new p(t, e);
            } catch (i) {
              r = i;
            }
            return r;
          }),
          (p.isValid = function (t, e) {
            return !!t && !p.getValidationError(t, e);
          }),
          (p.prototype.toString = function () {
            return this.toBuffer().toString("hex");
          }),
          (p.prototype.toWIF = function () {
            var t,
              r = this.network,
              i = this.compressed;
            return (
              (t = i
                ? e.concat([
                    e.from([r.privatekey]),
                    this.bn.toBuffer({ size: 32 }),
                    e.from([1]),
                  ])
                : e.concat([
                    e.from([r.privatekey]),
                    this.bn.toBuffer({ size: 32 }),
                  ])),
              s.encode(t)
            );
          }),
          (p.prototype.toBigNumber = function () {
            return this.bn;
          }),
          (p.prototype.toBuffer = function () {
            return this.bn.toBuffer({ size: 32 });
          }),
          (p.prototype.toBufferNoPadding = function () {
            return this.bn.toBuffer();
          }),
          (p.prototype.toPublicKey = function () {
            return (
              this._pubkey || (this._pubkey = h.fromPrivateKey(this)),
              this._pubkey
            );
          }),
          (p.prototype.toAddress = function (t) {
            var e = this.toPublicKey();
            return n.fromPublicKey(e, t || this.network);
          }),
          (p.prototype.toObject = p.prototype.toJSON =
            function () {
              return {
                bn: this.bn.toString("hex"),
                compressed: this.compressed,
                network: this.network.toString(),
              };
            }),
          (p.prototype.inspect = function () {
            var t = this.compressed ? "" : ", uncompressed";
            return (
              "<PrivateKey: " +
              this.toString() +
              ", network: " +
              this.network +
              t +
              ">"
            );
          }),
          (t.exports = p));
      }).call(this, r(2).Buffer);
    },
    4862: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(234),
          s = r(2),
          o =
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".split(
              "",
            ),
          u = function t(r) {
            if (!(this instanceof t)) return new t(r);
            if (e.isBuffer(r)) {
              var i = r;
              this.fromBuffer(i);
            } else if ("string" === typeof r) {
              var n = r;
              this.fromString(n);
            } else r && this.set(r);
          };
        ((u.validCharacters = function (t) {
          return (
            s.Buffer.isBuffer(t) && (t = t.toString()),
            i.every(
              i.map(t, function (t) {
                return i.includes(o, t);
              }),
            )
          );
        }),
          (u.prototype.set = function (t) {
            return ((this.buf = t.buf || this.buf || void 0), this);
          }),
          (u.encode = function (t) {
            if (!s.Buffer.isBuffer(t))
              throw new Error("Input should be a buffer");
            return n.encode(t);
          }),
          (u.decode = function (t) {
            if ("string" !== typeof t)
              throw new Error("Input should be a string");
            return e.from(n.decode(t));
          }),
          (u.prototype.fromBuffer = function (t) {
            return ((this.buf = t), this);
          }),
          (u.prototype.fromString = function (t) {
            var e = u.decode(t);
            return ((this.buf = e), this);
          }),
          (u.prototype.toBuffer = function () {
            return this.buf;
          }),
          (u.prototype.toString = function () {
            return u.encode(this.buf);
          }),
          (t.exports = u));
      }).call(this, r(2).Buffer);
    },
    4863: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(2866),
          s = r(2935),
          o = r(3035);
        function u(t) {
          if (!(this instanceof u)) return new u(t);
          var e;
          if (i.isNumber(t)) e = t;
          else {
            if (!i.isString(t))
              throw new TypeError(
                'Unrecognized num type: "' + typeof t + '" for Opcode',
              );
            e = u.map[t];
          }
          return (o.defineImmutable(this, { num: e }), this);
        }
        for (var a in ((u.fromBuffer = function (t) {
          return (
            n.checkArgument(s.isBuffer(t)),
            new u(Number("0x" + t.toString("hex")))
          );
        }),
        (u.fromNumber = function (t) {
          return (n.checkArgument(i.isNumber(t)), new u(t));
        }),
        (u.fromString = function (t) {
          n.checkArgument(i.isString(t));
          var e = u.map[t];
          if ("undefined" === typeof e)
            throw new TypeError("Invalid opcodestr");
          return new u(e);
        }),
        (u.prototype.toHex = function () {
          return this.num.toString(16);
        }),
        (u.prototype.toBuffer = function () {
          return e.from(this.toHex(), "hex");
        }),
        (u.prototype.toNumber = function () {
          return this.num;
        }),
        (u.prototype.toString = function () {
          var t = u.reverseMap[this.num];
          if ("undefined" === typeof t)
            throw new Error("Opcode does not have a string representation");
          return t;
        }),
        (u.smallInt = function (t) {
          return (
            n.checkArgument(
              i.isNumber(t),
              "Invalid Argument: n should be number",
            ),
            n.checkArgument(
              t >= 0 && t <= 16,
              "Invalid Argument: n must be between 0 and 16",
            ),
            0 === t ? u("OP_0") : new u(u.map.OP_1 + t - 1)
          );
        }),
        (u.map = {
          OP_FALSE: 0,
          OP_0: 0,
          OP_PUSHDATA1: 76,
          OP_PUSHDATA2: 77,
          OP_PUSHDATA4: 78,
          OP_1NEGATE: 79,
          OP_RESERVED: 80,
          OP_TRUE: 81,
          OP_1: 81,
          OP_2: 82,
          OP_3: 83,
          OP_4: 84,
          OP_5: 85,
          OP_6: 86,
          OP_7: 87,
          OP_8: 88,
          OP_9: 89,
          OP_10: 90,
          OP_11: 91,
          OP_12: 92,
          OP_13: 93,
          OP_14: 94,
          OP_15: 95,
          OP_16: 96,
          OP_NOP: 97,
          OP_VER: 98,
          OP_IF: 99,
          OP_NOTIF: 100,
          OP_VERIF: 101,
          OP_VERNOTIF: 102,
          OP_ELSE: 103,
          OP_ENDIF: 104,
          OP_VERIFY: 105,
          OP_RETURN: 106,
          OP_TOALTSTACK: 107,
          OP_FROMALTSTACK: 108,
          OP_2DROP: 109,
          OP_2DUP: 110,
          OP_3DUP: 111,
          OP_2OVER: 112,
          OP_2ROT: 113,
          OP_2SWAP: 114,
          OP_IFDUP: 115,
          OP_DEPTH: 116,
          OP_DROP: 117,
          OP_DUP: 118,
          OP_NIP: 119,
          OP_OVER: 120,
          OP_PICK: 121,
          OP_ROLL: 122,
          OP_ROT: 123,
          OP_SWAP: 124,
          OP_TUCK: 125,
          OP_CAT: 126,
          OP_SPLIT: 127,
          OP_NUM2BIN: 128,
          OP_BIN2NUM: 129,
          OP_SIZE: 130,
          OP_INVERT: 131,
          OP_AND: 132,
          OP_OR: 133,
          OP_XOR: 134,
          OP_EQUAL: 135,
          OP_EQUALVERIFY: 136,
          OP_RESERVED1: 137,
          OP_RESERVED2: 138,
          OP_1ADD: 139,
          OP_1SUB: 140,
          OP_2MUL: 141,
          OP_2DIV: 142,
          OP_NEGATE: 143,
          OP_ABS: 144,
          OP_NOT: 145,
          OP_0NOTEQUAL: 146,
          OP_ADD: 147,
          OP_SUB: 148,
          OP_MUL: 149,
          OP_DIV: 150,
          OP_MOD: 151,
          OP_LSHIFT: 152,
          OP_RSHIFT: 153,
          OP_BOOLAND: 154,
          OP_BOOLOR: 155,
          OP_NUMEQUAL: 156,
          OP_NUMEQUALVERIFY: 157,
          OP_NUMNOTEQUAL: 158,
          OP_LESSTHAN: 159,
          OP_GREATERTHAN: 160,
          OP_LESSTHANOREQUAL: 161,
          OP_GREATERTHANOREQUAL: 162,
          OP_MIN: 163,
          OP_MAX: 164,
          OP_WITHIN: 165,
          OP_RIPEMD160: 166,
          OP_SHA1: 167,
          OP_SHA256: 168,
          OP_HASH160: 169,
          OP_HASH256: 170,
          OP_CODESEPARATOR: 171,
          OP_CHECKSIG: 172,
          OP_CHECKSIGVERIFY: 173,
          OP_CHECKMULTISIG: 174,
          OP_CHECKMULTISIGVERIFY: 175,
          OP_NOP2: 177,
          OP_CHECKLOCKTIMEVERIFY: 177,
          OP_NOP3: 178,
          OP_CHECKSEQUENCEVERIFY: 178,
          OP_NOP1: 176,
          OP_NOP4: 179,
          OP_NOP5: 180,
          OP_NOP6: 181,
          OP_NOP7: 182,
          OP_NOP8: 183,
          OP_NOP9: 184,
          OP_NOP10: 185,
          OP_CHECKDATASIG: 186,
          OP_CHECKDATASIGVERIFY: 187,
          OP_REVERSEBYTES: 188,
          OP_PREFIX_BEGIN: 240,
          OP_PREFIX_END: 241,
          OP_SMALLINTEGER: 250,
          OP_PUBKEYS: 251,
          OP_PUBKEYHASH: 253,
          OP_PUBKEY: 254,
          OP_INVALIDOPCODE: 255,
          OP_INPUTINDEX: 192,
          OP_ACTIVEBYTECODE: 193,
          OP_TXVERSION: 194,
          OP_TXINPUTCOUNT: 195,
          OP_TXOUTPUTCOUNT: 196,
          OP_TXLOCKTIME: 197,
          OP_UTXOVALUE: 198,
          OP_UTXOBYTECODE: 199,
          OP_OUTPOINTTXHASH: 200,
          OP_OUTPOINTINDEX: 201,
          OP_INPUTBYTECODE: 202,
          OP_INPUTSEQUENCENUMBER: 203,
          OP_OUTPUTVALUE: 204,
          OP_OUTPUTBYTECODE: 205,
          OP_RESERVED3: 206,
          OP_RESERVED4: 207,
        }),
        (u.reverseMap = []),
        u.map))
          u.reverseMap[u.map[a]] = a;
        (i.extend(u, u.map),
          (u.isSmallIntOp = function (t) {
            return (
              t instanceof u && (t = t.toNumber()),
              t === u.map.OP_0 || (t >= u.map.OP_1 && t <= u.map.OP_16)
            );
          }),
          (u.prototype.inspect = function () {
            return (
              "<Opcode: " +
              this.toString() +
              ", hex: " +
              this.toHex() +
              ", decimal: " +
              this.num +
              ">"
            );
          }),
          (t.exports = u));
      }).call(this, r(2).Buffer);
    },
    4864: function (t, e, r) {
      ((t.exports = r(5696)),
        (t.exports.Input = r(5697)),
        (t.exports.Output = r(3466)),
        (t.exports.UnspentOutput = r(6889)),
        (t.exports.Signature = r(3968)),
        (t.exports.Sighash = r(3465)));
    },
    4865: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(3034),
          s = r(2935),
          o = r(3618),
          u = r(3357),
          a = r(3071),
          h = (r(3035), r(2866)),
          c = 486604799,
          f = function t(e) {
            if (!(this instanceof t)) return new t(e);
            var r = t._from(e);
            return (
              (this.version = r.version),
              (this.prevHash = r.prevHash),
              (this.merkleRoot = r.merkleRoot),
              (this.time = r.time),
              (this.timestamp = r.time),
              (this.bits = r.bits),
              (this.nonce = r.nonce),
              r.hash &&
                h.checkState(
                  this.hash === r.hash,
                  "Argument object hash property does not match block hash.",
                ),
              this
            );
          };
        ((f._from = function (t) {
          var e = {};
          if (s.isBuffer(t)) e = f._fromBufferReader(o(t));
          else {
            if (!i.isObject(t))
              throw new TypeError("Unrecognized argument for BlockHeader");
            e = f._fromObject(t);
          }
          return e;
        }),
          (f._fromObject = function (t) {
            h.checkArgument(t, "data is required");
            var r = t.prevHash,
              n = t.merkleRoot;
            (i.isString(t.prevHash) &&
              (r = s.reverse(e.from(t.prevHash, "hex"))),
              i.isString(t.merkleRoot) &&
                (n = s.reverse(e.from(t.merkleRoot, "hex"))));
            var o = {
              hash: t.hash,
              version: t.version,
              prevHash: r,
              merkleRoot: n,
              time: t.time,
              timestamp: t.time,
              bits: t.bits,
              nonce: t.nonce,
            };
            return o;
          }),
          (f.fromObject = function (t) {
            var e = f._fromObject(t);
            return new f(e);
          }),
          (f.fromRawBlock = function (t) {
            s.isBuffer(t) || (t = e.from(t, "binary"));
            var r = o(t);
            r.pos = f.Constants.START_OF_HEADER;
            var i = f._fromBufferReader(r);
            return new f(i);
          }),
          (f.fromBuffer = function (t) {
            var e = f._fromBufferReader(o(t));
            return new f(e);
          }),
          (f.fromString = function (t) {
            var r = e.from(t, "hex");
            return f.fromBuffer(r);
          }),
          (f._fromBufferReader = function (t) {
            var e = {};
            return (
              (e.version = t.readInt32LE()),
              (e.prevHash = t.read(32)),
              (e.merkleRoot = t.read(32)),
              (e.time = t.readUInt32LE()),
              (e.bits = t.readUInt32LE()),
              (e.nonce = t.readUInt32LE()),
              e
            );
          }),
          (f.fromBufferReader = function (t) {
            var e = f._fromBufferReader(t);
            return new f(e);
          }),
          (f.prototype.toObject = f.prototype.toJSON =
            function () {
              return {
                hash: this.hash,
                version: this.version,
                prevHash: s.reverse(this.prevHash).toString("hex"),
                merkleRoot: s.reverse(this.merkleRoot).toString("hex"),
                time: this.time,
                bits: this.bits,
                nonce: this.nonce,
              };
            }),
          (f.prototype.toBuffer = function () {
            return this.toBufferWriter().concat();
          }),
          (f.prototype.toString = function () {
            return this.toBuffer().toString("hex");
          }),
          (f.prototype.toBufferWriter = function (t) {
            return (
              t || (t = new u()),
              t.writeInt32LE(this.version),
              t.write(this.prevHash),
              t.write(this.merkleRoot),
              t.writeUInt32LE(this.time),
              t.writeUInt32LE(this.bits),
              t.writeUInt32LE(this.nonce),
              t
            );
          }),
          (f.prototype.getTargetDifficulty = function (t) {
            t = t || this.bits;
            var e = new n(16777215 & t),
              r = 8 * ((t >>> 24) - 3);
            while (r-- > 0) e = e.mul(new n(2));
            return e;
          }),
          (f.prototype.getDifficulty = function () {
            var t = this.getTargetDifficulty(c).mul(new n(Math.pow(10, 8))),
              e = this.getTargetDifficulty(),
              r = t.div(e).toString(10),
              i = r.length - 8;
            return ((r = r.slice(0, i) + "." + r.slice(i)), parseFloat(r));
          }),
          (f.prototype._getHash = function () {
            var t = this.toBuffer();
            return a.sha256sha256(t);
          }));
        var p = {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return (
              this._id ||
                (this._id = o(this._getHash()).readReverse().toString("hex")),
              this._id
            );
          },
          set: i.noop,
        };
        (Object.defineProperty(f.prototype, "id", p),
          Object.defineProperty(f.prototype, "hash", p),
          (f.prototype.validTimestamp = function () {
            var t = Math.round(new Date().getTime() / 1e3);
            return !(this.time > t + f.Constants.MAX_TIME_OFFSET);
          }),
          (f.prototype.validProofOfWork = function () {
            var t = new n(this.id, "hex"),
              e = this.getTargetDifficulty();
            return !(t.cmp(e) > 0);
          }),
          (f.prototype.inspect = function () {
            return "<BlockHeader " + this.id + ">";
          }),
          (f.Constants = {
            START_OF_HEADER: 8,
            MAX_TIME_OFFSET: 7200,
            LARGEST_HASH: new n(
              "10000000000000000000000000000000000000000000000000000000000000000",
              "hex",
            ),
          }),
          (t.exports = f));
      }).call(this, r(2).Buffer);
    },
    5694: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3034),
          Point = r(3845),
          n = r(3204),
          s = r(3205),
          o = r(4584),
          u = r(3071),
          a = r(2935),
          h = r(2856),
          c = r(2866),
          f = function t(e) {
            if (!(this instanceof t)) return new t(e);
            e && this.set(e);
          };
        ((f.prototype.set = function (t) {
          return (
            (this.hashbuf = t.hashbuf || this.hashbuf),
            (this.endian = t.endian || this.endian),
            (this.privkey = t.privkey || this.privkey),
            (this.pubkey =
              t.pubkey ||
              (this.privkey ? this.privkey.publicKey : this.pubkey)),
            (this.sig = t.sig || this.sig),
            (this.k = t.k || this.k),
            (this.verified = t.verified || this.verified),
            this
          );
        }),
          (f.prototype.privkey2pubkey = function () {
            this.pubkey = this.privkey.toPublicKey();
          }),
          (f.prototype.calci = function () {
            for (var t = 0; t < 4; t++) {
              var e;
              this.sig.i = t;
              try {
                e = this.toPublicKey();
              } catch (r) {
                console.error(r);
                continue;
              }
              if (e.point.eq(this.pubkey.point))
                return ((this.sig.compressed = this.pubkey.compressed), this);
            }
            throw (
              (this.sig.i = void 0),
              new Error("Unable to find valid recovery factor")
            );
          }),
          (f.fromString = function (t) {
            var e = JSON.parse(t);
            return new f(e);
          }),
          (f.prototype.randomK = function () {
            var t,
              e = Point.getN();
            do {
              t = i.fromBuffer(o.getRandomBuffer(32));
            } while (!t.lt(e) || !t.gt(i.Zero));
            return ((this.k = t), this);
          }),
          (f.prototype.deterministicK = function (t) {
            h.isUndefined(t) && (t = 0);
            var r = e.alloc(32);
            r.fill(1);
            var n = e.alloc(32);
            n.fill(0);
            var s = this.privkey.bn.toBuffer({ size: 32 }),
              o =
                "little" === this.endian
                  ? a.reverse(this.hashbuf)
                  : this.hashbuf;
            ((n = u.sha256hmac(e.concat([r, e.from([0]), s, o]), n)),
              (r = u.sha256hmac(r, n)),
              (n = u.sha256hmac(e.concat([r, e.from([1]), s, o]), n)),
              (r = u.sha256hmac(r, n)),
              (r = u.sha256hmac(r, n)));
            for (
              var c = i.fromBuffer(r), f = Point.getN(), p = 0;
              p < t || !c.lt(f) || !c.gt(i.Zero);
              p++
            )
              ((n = u.sha256hmac(e.concat([r, e.from([0])]), n)),
                (r = u.sha256hmac(r, n)),
                (r = u.sha256hmac(r, n)),
                (c = i.fromBuffer(r)));
            return ((this.k = c), this);
          }),
          (f.prototype.toPublicKey = function () {
            var t = this.sig.i;
            c.checkArgument(
              0 === t || 1 === t || 2 === t || 3 === t,
              new Error("i must be equal to 0, 1, 2, or 3"),
            );
            var e = i.fromBuffer(this.hashbuf),
              r = this.sig.r,
              n = this.sig.s,
              o = 1 & t,
              u = t >> 1,
              a = Point.getN(),
              h = Point.getG(),
              f = u ? r.add(a) : r,
              p = Point.fromX(o, f),
              d = p.mul(a);
            if (!d.isInfinity())
              throw new Error("nR is not a valid curve point");
            var l = e.neg().umod(a),
              g = r.invm(a),
              m = p.mul(n).add(h.mul(l)).mul(g),
              _ = s.fromPoint(m, this.sig.compressed);
            return _;
          }),
          (f.prototype.sigError = function () {
            if (!a.isBuffer(this.hashbuf) || 32 !== this.hashbuf.length)
              return "hashbuf must be a 32 byte buffer";
            var t = this.sig.r,
              e = this.sig.s;
            if (
              !t.gt(i.Zero) ||
              !t.lt(Point.getN()) ||
              !e.gt(i.Zero) ||
              !e.lt(Point.getN())
            )
              return "r and s not in range";
            var r = i.fromBuffer(
                this.hashbuf,
                this.endian ? { endian: this.endian } : void 0,
              ),
              n = Point.getN(),
              s = e.invm(n),
              o = s.mul(r).umod(n),
              u = s.mul(t).umod(n),
              h = Point.getG().mulAdd(o, this.pubkey.point, u);
            return h.isInfinity()
              ? "p is infinity"
              : 0 !== h.getX().umod(n).cmp(t) && "Invalid signature";
          }),
          (f.toLowS = function (t) {
            return (
              t.gt(
                i.fromBuffer(
                  e.from(
                    "7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0",
                    "hex",
                  ),
                ),
              ) && (t = Point.getN().sub(t)),
              t
            );
          }),
          (f.prototype._findSignature = function (t, e) {
            var r,
              n,
              s,
              o,
              u = Point.getN(),
              a = Point.getG(),
              h = 0;
            do {
              ((!this.k || h > 0) && this.deterministicK(h),
                h++,
                (r = this.k),
                (n = a.mul(r)),
                (s = n.x.umod(u)),
                (o = r
                  .invm(u)
                  .mul(e.add(t.mul(s)))
                  .umod(u)));
            } while (s.cmp(i.Zero) <= 0 || o.cmp(i.Zero) <= 0);
            return ((o = f.toLowS(o)), { s: o, r: s });
          }),
          (f.prototype.sign = function () {
            var t = this.hashbuf,
              e = this.privkey,
              r = e.bn;
            (c.checkState(t && e && r, new Error("invalid parameters")),
              c.checkState(
                a.isBuffer(t) && 32 === t.length,
                new Error("hashbuf must be a 32 byte buffer"),
              ));
            var s = i.fromBuffer(
                t,
                this.endian ? { endian: this.endian } : void 0,
              ),
              o = this._findSignature(r, s);
            return (
              (o.compressed = this.pubkey.compressed),
              (this.sig = new n(o)),
              this
            );
          }),
          (f.prototype.signRandomK = function () {
            return (this.randomK(), this.sign());
          }),
          (f.prototype.toString = function () {
            var t = {};
            return (
              this.hashbuf && (t.hashbuf = this.hashbuf.toString("hex")),
              this.privkey && (t.privkey = this.privkey.toString()),
              this.pubkey && (t.pubkey = this.pubkey.toString()),
              this.sig && (t.sig = this.sig.toString()),
              this.k && (t.k = this.k.toString()),
              JSON.stringify(t)
            );
          }),
          (f.prototype.verify = function () {
            return (
              this.sigError() ? (this.verified = !1) : (this.verified = !0),
              this
            );
          }),
          (f.sign = function (t, e, r) {
            return f().set({ hashbuf: t, endian: r, privkey: e }).sign().sig;
          }),
          (f.verify = function (t, e, r, i) {
            return f()
              .set({ hashbuf: t, endian: i, sig: e, pubkey: r })
              .verify().verified;
          }),
          (t.exports = f));
      }).call(this, r(2).Buffer);
    },
    5695: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3034),
          Point = r(3845),
          n = r(3204),
          s = (r(3205), r(4584), r(3071)),
          o = r(2935),
          u = (r(2856), r(2866)),
          a = function t(e) {
            if (!(this instanceof t)) return new t(e);
            e && this.set(e);
          };
        function h(t) {
          let e = t.toBuffer().length;
          return e < 32 ? t.toBuffer({ size: 32 }) : t.toBuffer();
        }
        function c(t) {
          let e = t.toBuffer().length;
          return e < 32 ? t.toBuffer({ size: 32 }) : t.toBuffer();
        }
        ((a.prototype.set = function (t) {
          return (
            (this.hashbuf = t.hashbuf || this.hashbuf),
            (this.endian = t.endian || this.endian),
            (this.privkey = t.privkey || this.privkey),
            (this.pubkey =
              t.pubkey ||
              (this.privkey ? this.privkey.publicKey : this.pubkey)),
            (this.sig = t.sig || this.sig),
            (this.verified = t.verified || this.verified),
            this
          );
        }),
          (a.prototype.privkey2pubkey = function () {
            this.pubkey = this.privkey.toPublicKey();
          }),
          (a.prototype.toPublicKey = function () {
            return this.privkey.toPublicKey();
          }),
          (a.prototype.sign = function () {
            var t = this.hashbuf,
              e = this.privkey,
              r = e.bn;
            (u.checkState(t && e && r, new Error("invalid parameters")),
              u.checkState(
                o.isBuffer(t) && 32 === t.length,
                new Error("hashbuf must be a 32 byte buffer"),
              ));
            var s = i.fromBuffer(
                t,
                this.endian ? { endian: this.endian } : void 0,
              ),
              a = this._findSignature(r, s);
            return (
              (a.compressed = this.pubkey.compressed),
              (a.isSchnorr = !0),
              (this.sig = new n(a)),
              this
            );
          }),
          (a.prototype._findSignature = function (t, r) {
            let n = Point.getN(),
              o = Point.getG();
            (u.checkState(
              !t.lte(new i(0)),
              new Error("privkey out of field of curve"),
            ),
              u.checkState(
                !t.gte(n),
                new Error("privkey out of field of curve"),
              ));
            let a = this.nonceFunctionRFC6979(
                t.toBuffer({ size: 32 }),
                r.toBuffer({ size: 32 }),
              ),
              c = o.mul(t),
              f = o.mul(a);
            a = f.hasSquare() ? a : n.sub(a);
            let p = f.getX(),
              d = i.fromBuffer(
                s.sha256(
                  e.concat([
                    h(p),
                    Point.pointToCompressed(c),
                    r.toBuffer({ size: 32 }),
                  ]),
                ),
              ),
              l = d.mul(t).add(a).mod(n);
            return { r: p, s: l };
          }),
          (a.prototype.sigError = function () {
            if (!o.isBuffer(this.hashbuf) || 32 !== this.hashbuf.length)
              return "hashbuf must be a 32 byte buffer";
            let t = h(this.sig.r).length + c(this.sig.s).length;
            if (64 !== t && 65 !== t)
              return "signature must be a 64 byte or 65 byte array";
            let r =
                "little" === this.endian
                  ? o.reverse(this.hashbuf)
                  : this.hashbuf,
              n = this.pubkey.point,
              u = Point.getG();
            if (n.isInfinity()) return !0;
            let a = this.sig.r,
              f = this.sig.s,
              p = new i(
                "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F",
                "hex",
              ),
              d = Point.getN();
            if (a.gte(p) || f.gte(d)) return !0;
            let l = h(this.sig.r),
              g = Point.pointToCompressed(n),
              m = s.sha256(e.concat([l, g, r])),
              _ = i.fromBuffer(m, "big").umod(d),
              S = u.mul(f),
              I = n.mul(d.sub(_)),
              y = S.add(I);
            return !(!y.isInfinity() && y.hasSquare() && y.getX().eq(a));
          }),
          (a.prototype.verify = function () {
            return (
              this.sigError() ? (this.verified = !1) : (this.verified = !0),
              this
            );
          }),
          (a.prototype.nonceFunctionRFC6979 = function (t, r) {
            let n = e.from(
                "0101010101010101010101010101010101010101010101010101010101010101",
                "hex",
              ),
              o = e.from(
                "0000000000000000000000000000000000000000000000000000000000000000",
                "hex",
              ),
              a = e.concat([
                t,
                r,
                e.from("", "ascii"),
                e.from("Schnorr+SHA256  ", "ascii"),
              ]);
            ((o = s.sha256hmac(e.concat([n, e.from("00", "hex"), a]), o)),
              (n = s.sha256hmac(n, o)),
              (o = s.sha256hmac(e.concat([n, e.from("01", "hex"), a]), o)),
              (n = s.sha256hmac(n, o)));
            let h,
              c = new i(0);
            while (1) {
              if (
                ((n = s.sha256hmac(n, o)),
                (h = i.fromBuffer(n)),
                (c = h),
                u.checkState(n.length >= 32, "V length should be >= 32"),
                c.gt(new i(0)) && c.lt(Point.getN()))
              )
                break;
              ((o = s.sha256hmac(e.concat([n, e.from("00", "hex")]), o)),
                (n = s.hmac(s.sha256, n, o)));
            }
            return c;
          }),
          (a.sign = function (t, e, r) {
            return a().set({ hashbuf: t, endian: r, privkey: e }).sign().sig;
          }),
          (a.verify = function (t, e, r, i) {
            return a()
              .set({ hashbuf: t, endian: i, sig: e, pubkey: r })
              .verify().verified;
          }),
          (t.exports = a));
      }).call(this, r(2).Buffer);
    },
    5696: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(2866),
          s = r(2),
          o = e.compare || r(3638),
          u = r(3234),
          a = r(2935),
          h = r(3035),
          c = r(3618),
          f = r(3357),
          p = r(3071),
          d = r(3204),
          l = r(3465),
          g = r(3846),
          m = r(6889),
          _ = r(5697),
          S = _.PublicKeyHash,
          I = _.PublicKey,
          y = _.MultiSigScriptHash,
          E = _.MultiSig,
          P = _.Escrow,
          O = r(3466),
          v = r(3235),
          b = r(4861),
          k = r(3205),
          T = r(3034);
        function A(t) {
          if (!(this instanceof A)) return new A(t);
          if (
            ((this.inputs = []),
            (this.outputs = []),
            (this._inputAmount = void 0),
            (this._outputAmount = void 0),
            t)
          ) {
            if (t instanceof A) return A.shallowCopy(t);
            if (h.isHexa(t)) this.fromString(t);
            else if (a.isBuffer(t)) this.fromBuffer(t);
            else {
              if (!i.isObject(t))
                throw new u.InvalidArgument(
                  "Must provide an object or string to deserialize a transaction",
                );
              this.fromObject(t);
            }
          } else this._newTransaction();
        }
        var w = 2,
          R = 0,
          N = 1e6;
        ((A.DUST_AMOUNT = 546),
          (A.FEE_SECURITY_MARGIN = 150),
          (A.MAX_MONEY = 21e14),
          (A.NLOCKTIME_BLOCKHEIGHT_LIMIT = 5e8),
          (A.NLOCKTIME_MAX_VALUE = 4294967295),
          (A.FEE_PER_KB = 1e5),
          (A.CHANGE_OUTPUT_MAX_SIZE = 62),
          (A.MAXIMUM_EXTRA_SIZE = 26),
          (A.shallowCopy = function (t) {
            var e = new A(t.toBuffer());
            return e;
          }));
        var B = {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return (
              (this._hash = new c(this._getHash())
                .readReverse()
                .toString("hex")),
              this._hash
            );
          },
        };
        (Object.defineProperty(A.prototype, "hash", B),
          Object.defineProperty(A.prototype, "id", B));
        var C = {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return this._getInputAmount();
          },
        };
        (Object.defineProperty(A.prototype, "inputAmount", C),
          (C.get = function () {
            return this._getOutputAmount();
          }),
          Object.defineProperty(A.prototype, "outputAmount", C),
          (A.prototype._getHash = function () {
            return p.sha256sha256(this.toBuffer());
          }),
          (A.prototype.serialize = function (t) {
            return !0 === t || (t && t.disableAll)
              ? this.uncheckedSerialize()
              : this.checkedSerialize(t);
          }),
          (A.prototype.uncheckedSerialize = A.prototype.toString =
            function () {
              return this.toBuffer().toString("hex");
            }),
          (A.prototype.checkedSerialize = function (t) {
            var e = this.getSerializationError(t);
            if (e)
              throw (
                (e.message +=
                  " - For more information please see: https://bitcore.io/api/lib/transaction#serialization-checks"),
                e
              );
            return this.uncheckedSerialize();
          }),
          (A.prototype.invalidSatoshis = function () {
            for (var t = !1, e = 0; e < this.outputs.length; e++)
              this.outputs[e].invalidSatoshis() && (t = !0);
            return t;
          }),
          (A.prototype.getSerializationError = function (t) {
            if (((t = t || {}), this.invalidSatoshis()))
              return new u.Transaction.InvalidSatoshis();
            var e,
              r = this._getUnspentValue();
            return (
              r < 0
                ? t.disableMoreOutputThanInput ||
                  (e = new u.Transaction.InvalidOutputAmountSum())
                : (e = this._hasFeeError(t, r)),
              e || this._hasDustOutputs(t) || this._isMissingSignatures(t)
            );
          }),
          (A.prototype._hasFeeError = function (t, e) {
            if (!i.isUndefined(this._fee) && this._fee !== e)
              return new u.Transaction.FeeError.Different(
                "Unspent value is " + e + " but specified fee is " + this._fee,
              );
            if (!t.disableLargeFees) {
              var r = Math.floor(A.FEE_SECURITY_MARGIN * this._estimateFee());
              if (e > r)
                return this._missingChange()
                  ? new u.Transaction.ChangeAddressMissing(
                      "Fee is too large and no change address was provided",
                    )
                  : new u.Transaction.FeeError.TooLarge(
                      "expected less than " + r + " but got " + e,
                    );
            }
            if (!t.disableSmallFees) {
              var n = Math.ceil(this._estimateFee() / A.FEE_SECURITY_MARGIN);
              if (e < n)
                return new u.Transaction.FeeError.TooSmall(
                  "expected more than " + n + " but got " + e,
                );
            }
          }),
          (A.prototype._missingChange = function () {
            return !this._changeScript;
          }),
          (A.prototype._hasDustOutputs = function (t) {
            var e, r;
            if (!t.disableDustOutputs)
              for (e in this.outputs)
                if (
                  ((r = this.outputs[e]),
                  r.satoshis < A.DUST_AMOUNT && !r.script.isDataOut())
                )
                  return new u.Transaction.DustOutputs();
          }),
          (A.prototype._isMissingSignatures = function (t) {
            if (!t.disableIsFullySigned)
              return this.isFullySigned()
                ? void 0
                : new u.Transaction.MissingSignatures();
          }),
          (A.prototype.inspect = function () {
            return "<Transaction: " + this.uncheckedSerialize() + ">";
          }),
          (A.prototype.toBuffer = function () {
            var t = new f();
            return this.toBufferWriter(t).toBuffer();
          }),
          (A.prototype.toBufferWriter = function (t) {
            return (
              t.writeInt32LE(this.version),
              t.writeVarintNum(this.inputs.length),
              i.each(this.inputs, function (e) {
                e.toBufferWriter(t);
              }),
              t.writeVarintNum(this.outputs.length),
              i.each(this.outputs, function (e) {
                e.toBufferWriter(t);
              }),
              t.writeUInt32LE(this.nLockTime),
              t
            );
          }),
          (A.prototype.fromBuffer = function (t) {
            var e = new c(t);
            return this.fromBufferReader(e);
          }),
          (A.prototype.fromBufferReader = function (t) {
            var e, r, i;
            for (
              n.checkArgument(!t.finished(), "No transaction data received"),
                this.version = t.readInt32LE(),
                r = t.readVarintNum(),
                e = 0;
              e < r;
              e++
            ) {
              var s = _.fromBufferReader(t);
              this.inputs.push(s);
            }
            for (i = t.readVarintNum(), e = 0; e < i; e++)
              this.outputs.push(O.fromBufferReader(t));
            return ((this.nLockTime = t.readUInt32LE()), this);
          }),
          (A.prototype.toObject = A.prototype.toJSON =
            function () {
              var t = [];
              this.inputs.forEach(function (e) {
                t.push(e.toObject());
              });
              var e = [];
              this.outputs.forEach(function (t) {
                e.push(t.toObject());
              });
              var r = {
                hash: this.hash,
                version: this.version,
                inputs: t,
                outputs: e,
                nLockTime: this.nLockTime,
              };
              return (
                this._changeScript &&
                  (r.changeScript = this._changeScript.toString()),
                i.isUndefined(this._changeIndex) ||
                  (r.changeIndex = this._changeIndex),
                i.isUndefined(this._fee) || (r.fee = this._fee),
                r
              );
            }),
          (A.prototype.fromObject = function (t) {
            n.checkArgument(i.isObject(t) || t instanceof A);
            var e,
              r = this;
            return (
              (e = t instanceof A ? e.toObject() : t),
              i.each(e.inputs, function (t) {
                if (t.output && t.output.script) {
                  var e,
                    i = new v(t.output.script);
                  if (i.isPublicKeyHashOut()) e = new _.PublicKeyHash(t);
                  else if (i.isScriptHashOut() && t.publicKeys && t.threshold)
                    e = new _.MultiSigScriptHash(
                      t,
                      t.publicKeys,
                      t.threshold,
                      t.signatures,
                    );
                  else {
                    if (!i.isPublicKeyOut())
                      throw new u.Transaction.Input.UnsupportedScript(
                        t.output.script,
                      );
                    e = new _.PublicKey(t);
                  }
                  r.addInput(e);
                } else r.uncheckedAddInput(new _(t));
              }),
              i.each(e.outputs, function (t) {
                r.addOutput(new O(t));
              }),
              e.changeIndex && (this._changeIndex = e.changeIndex),
              e.changeScript && (this._changeScript = new v(e.changeScript)),
              e.fee && (this._fee = e.fee),
              (this.nLockTime = e.nLockTime),
              (this.version = e.version),
              this._checkConsistency(t),
              this
            );
          }),
          (A.prototype._checkConsistency = function (t) {
            (i.isUndefined(this._changeIndex) ||
              (n.checkState(this._changeScript, "Change script is expected."),
              n.checkState(
                this.outputs[this._changeIndex],
                "Change index points to undefined output.",
              ),
              n.checkState(
                this.outputs[this._changeIndex].script.toString() ===
                  this._changeScript.toString(),
                "Change output has an unexpected script.",
              )),
              t &&
                t.hash &&
                n.checkState(
                  t.hash === this.hash,
                  "Hash in object does not match transaction hash.",
                ));
          }),
          (A.prototype.lockUntilDate = function (t) {
            if (
              (n.checkArgument(t),
              i.isNumber(t) && t < A.NLOCKTIME_BLOCKHEIGHT_LIMIT)
            )
              throw new u.Transaction.LockTimeTooEarly();
            i.isDate(t) && (t = t.getTime() / 1e3);
            for (var e = 0; e < this.inputs.length; e++)
              this.inputs[e].sequenceNumber === _.DEFAULT_SEQNUMBER &&
                (this.inputs[e].sequenceNumber = _.DEFAULT_LOCKTIME_SEQNUMBER);
            return ((this.nLockTime = t), this);
          }),
          (A.prototype.lockUntilBlockHeight = function (t) {
            if (
              (n.checkArgument(i.isNumber(t)),
              t >= A.NLOCKTIME_BLOCKHEIGHT_LIMIT)
            )
              throw new u.Transaction.BlockHeightTooHigh();
            if (t < 0) throw new u.Transaction.NLockTimeOutOfRange();
            for (var e = 0; e < this.inputs.length; e++)
              this.inputs[e].sequenceNumber === _.DEFAULT_SEQNUMBER &&
                (this.inputs[e].sequenceNumber = _.DEFAULT_LOCKTIME_SEQNUMBER);
            return ((this.nLockTime = t), this);
          }),
          (A.prototype.getLockTime = function () {
            return this.nLockTime
              ? this.nLockTime < A.NLOCKTIME_BLOCKHEIGHT_LIMIT
                ? this.nLockTime
                : new Date(1e3 * this.nLockTime)
              : null;
          }),
          (A.prototype.fromString = function (t) {
            this.fromBuffer(s.Buffer.from(t, "hex"));
          }),
          (A.prototype._newTransaction = function () {
            ((this.version = w), (this.nLockTime = R));
          }),
          (A.prototype.from = function (t, e, r, n) {
            if (i.isArray(t)) {
              var s = this;
              return (
                i.each(t, function (t) {
                  s.from(t, e, r, n);
                }),
                this
              );
            }
            var o = i.some(this.inputs, function (e) {
              return (
                e.prevTxId.toString("hex") === t.txId &&
                e.outputIndex === t.outputIndex
              );
            });
            return (
              o ||
                (e && r
                  ? this._fromMultisigUtxo(t, e, r, n)
                  : t.publicKeys && t.publicKeys.length > 1
                    ? this._fromEscrowUtxo(t, t.publicKeys)
                    : this._fromNonP2SH(t)),
              this
            );
          }),
          (A.prototype.associateInputs = function (t, e, r, i) {
            let n = [];
            for (let s of t) {
              const t = this.inputs.findIndex(
                (t) =>
                  t.prevTxId.toString("hex") === s.txId &&
                  t.outputIndex === s.outputIndex,
              );
              (n.push(t),
                t >= 0 && (this.inputs[t] = this._getInputFrom(s, e, r, i)));
            }
            return n;
          }),
          (A.prototype._selectInputType = function (t, e, r) {
            var i;
            return (
              (t = new m(t)),
              e && r
                ? t.script.isMultisigOut()
                  ? (i = E)
                  : (t.script.isScriptHashOut() ||
                      t.script.isWitnessScriptHashOut()) &&
                    (i = y)
                : (i =
                    t.script.isPublicKeyHashOut() ||
                    t.script.isWitnessPublicKeyHashOut() ||
                    t.script.isScriptHashOut()
                      ? S
                      : t.script.isPublicKeyOut()
                        ? I
                        : _),
              i
            );
          }),
          (A.prototype._getInputFrom = function (t, e, r, i) {
            t = new m(t);
            const n = this._selectInputType(t, e, r),
              s = {
                output: new O({ script: t.script, satoshis: t.satoshis }),
                prevTxId: t.txId,
                outputIndex: t.outputIndex,
                sequenceNumber: t.sequenceNumber,
                script: v.empty(),
              };
            let o = e && r ? [e, r, !1, i] : [];
            return new n(s, ...o);
          }),
          (A.prototype._fromEscrowUtxo = function (t, e) {
            const r = e.map((t) => new k(t)),
              i = r.slice(1),
              n = r[0];
            ((t = new m(t)),
              this.addInput(
                new P(
                  {
                    output: new O({ script: t.script, satoshis: t.satoshis }),
                    prevTxId: t.txId,
                    outputIndex: t.outputIndex,
                    script: v.empty(),
                  },
                  i,
                  n,
                ),
              ));
          }),
          (A.prototype._fromNonP2SH = function (t) {
            var e;
            ((t = new m(t)),
              (e = t.script.isPublicKeyHashOut()
                ? S
                : t.script.isPublicKeyOut()
                  ? I
                  : _),
              this.addInput(
                new e({
                  output: new O({ script: t.script, satoshis: t.satoshis }),
                  prevTxId: t.txId,
                  outputIndex: t.outputIndex,
                  script: v.empty(),
                }),
              ));
          }),
          (A.prototype._fromMultisigUtxo = function (t, e, r, i) {
            var s;
            if (
              (n.checkArgument(
                r <= e.length,
                "Number of required signatures must be greater than the number of public keys",
              ),
              (t = new m(t)),
              t.script.isMultisigOut())
            )
              s = E;
            else {
              if (!t.script.isScriptHashOut()) throw new Error("@TODO");
              s = y;
            }
            this.addInput(
              new s(
                {
                  output: new O({ script: t.script, satoshis: t.satoshis }),
                  prevTxId: t.txId,
                  outputIndex: t.outputIndex,
                  script: v.empty(),
                },
                e,
                r,
                void 0,
                i,
              ),
            );
          }),
          (A.prototype.addInput = function (t, e, r) {
            if (
              (n.checkArgumentType(t, _, "input"),
              !t.output && (i.isUndefined(e) || i.isUndefined(r)))
            )
              throw new u.Transaction.NeedMoreInfo(
                "Need information about the UTXO script and satoshis",
              );
            return (
              t.output ||
                !e ||
                i.isUndefined(r) ||
                ((e = e instanceof v ? e : new v(e)),
                n.checkArgumentType(r, "number", "satoshis"),
                (t.output = new O({ script: e, satoshis: r }))),
              this.uncheckedAddInput(t)
            );
          }),
          (A.prototype.uncheckedAddInput = function (t) {
            return (
              n.checkArgumentType(t, _, "input"),
              this.inputs.push(t),
              (this._inputAmount = void 0),
              this._updateChangeOutput(),
              this
            );
          }),
          (A.prototype.hasAllUtxoInfo = function () {
            return i.every(
              this.inputs.map(function (t) {
                return !!t.output;
              }),
            );
          }),
          (A.prototype.fee = function (t) {
            return (
              n.checkArgument(i.isNumber(t), "amount must be a number"),
              (this._fee = t),
              this._updateChangeOutput(),
              this
            );
          }),
          (A.prototype.feePerKb = function (t) {
            return (
              n.checkArgument(i.isNumber(t), "amount must be a number"),
              (this._feePerKb = t),
              this._updateChangeOutput(),
              this
            );
          }),
          (A.prototype.feePerByte = function (t) {
            return (
              n.checkArgument(i.isNumber(t), "amount must be a number"),
              (this._feePerByte = t),
              this._updateChangeOutput(),
              this
            );
          }),
          (A.prototype.change = function (t) {
            return (
              n.checkArgument(t, "address is required"),
              (this._changeScript = v.fromAddress(t)),
              this._updateChangeOutput(),
              this
            );
          }),
          (A.prototype.escrow = function (t, e) {
            (n.checkArgument(
              this.inputs.length > 0,
              "inputs must have already been set when setting escrow",
            ),
              n.checkArgument(
                this.outputs.length > 0,
                "non-change outputs must have already been set when setting escrow",
              ),
              n.checkArgument(
                !this.getChangeOutput(),
                "change must still be unset when setting escrow",
              ),
              n.checkArgument(t, "address is required"),
              n.checkArgument(e, "amount is required"));
            const r = this._getOutputAmount() + this.getFee() + e,
              i = this._getInputAmount() - r > A.DUST_AMOUNT;
            return (this.to(t, e), i || (this._fee = void 0), this);
          }),
          (A.prototype.getChangeOutput = function () {
            return i.isUndefined(this._changeIndex)
              ? null
              : this.outputs[this._changeIndex];
          }),
          (A.prototype.to = function (t, e) {
            if (i.isArray(t)) {
              var r = this;
              return (
                i.each(t, function (t) {
                  r.to(t.address, t.satoshis);
                }),
                this
              );
            }
            return (
              n.checkArgument(
                h.isNaturalNumber(e),
                "Amount is expected to be a positive integer",
              ),
              this.addOutput(new O({ script: v(new g(t)), satoshis: e })),
              this
            );
          }),
          (A.prototype.addData = function (t) {
            return (
              this.addOutput(new O({ script: v.buildDataOut(t), satoshis: 0 })),
              this
            );
          }),
          (A.prototype.addOutput = function (t) {
            return (
              n.checkArgumentType(t, O, "output"),
              this._addOutput(t),
              this._updateChangeOutput(),
              this
            );
          }),
          (A.prototype.clearOutputs = function () {
            return (
              (this.outputs = []),
              this._clearSignatures(),
              (this._outputAmount = void 0),
              (this._changeIndex = void 0),
              this._updateChangeOutput(),
              this
            );
          }),
          (A.prototype._addOutput = function (t) {
            (this.outputs.push(t), (this._outputAmount = void 0));
          }),
          (A.prototype._getOutputAmount = function () {
            if (i.isUndefined(this._outputAmount)) {
              var t = this;
              ((this._outputAmount = 0),
                i.each(this.outputs, function (e) {
                  t._outputAmount += e.satoshis;
                }));
            }
            return this._outputAmount;
          }),
          (A.prototype._getInputAmount = function () {
            return (
              i.isUndefined(this._inputAmount) &&
                (this._inputAmount = i.sumBy(this.inputs, function (t) {
                  if (i.isUndefined(t.output))
                    throw new u.Transaction.Input.MissingPreviousOutput();
                  return t.output.satoshis;
                })),
              this._inputAmount
            );
          }),
          (A.prototype._updateChangeOutput = function () {
            if (this._changeScript) {
              (this._clearSignatures(),
                i.isUndefined(this._changeIndex) ||
                  this._removeOutput(this._changeIndex));
              var t = this._getUnspentValue(),
                e = this.getFee(),
                r = t - e;
              r >= A.DUST_AMOUNT
                ? ((this._changeIndex = this.outputs.length),
                  this._addOutput(
                    new O({ script: this._changeScript, satoshis: r }),
                  ))
                : (this._changeIndex = void 0);
            }
          }),
          (A.prototype.getFee = function () {
            return this.isCoinbase()
              ? 0
              : i.isUndefined(this._fee)
                ? this._changeScript
                  ? this._estimateFee()
                  : this._getUnspentValue()
                : this._fee;
          }),
          (A.prototype._estimateFee = function () {
            var t = this._estimateSize(),
              e = this._getUnspentValue(),
              r = this._feePerByte || (this._feePerKb || A.FEE_PER_KB) / 1e3;
            function i(t) {
              return t * r;
            }
            var n = Math.ceil(i(t)),
              s = Math.ceil(i(t) + i(A.CHANGE_OUTPUT_MAX_SIZE));
            return !this._changeScript || e <= s ? n : s;
          }),
          (A.prototype._getUnspentValue = function () {
            return this._getInputAmount() - this._getOutputAmount();
          }),
          (A.prototype._clearSignatures = function () {
            i.each(this.inputs, function (t) {
              t.clearSignatures();
            });
          }),
          (A.prototype._estimateSize = function () {
            var t = A.MAXIMUM_EXTRA_SIZE;
            return (
              i.each(this.inputs, function (e) {
                let r = e._estimateSize(),
                  i = f.varintBufNum(r).length;
                t += 36 + i + r;
              }),
              i.each(this.outputs, function (e) {
                t += e.script.toBuffer().length + 9;
              }),
              t
            );
          }),
          (A.prototype._removeOutput = function (t) {
            var e = this.outputs[t];
            ((this.outputs = i.without(this.outputs, e)),
              (this._outputAmount = void 0));
          }),
          (A.prototype.removeOutput = function (t) {
            (this._removeOutput(t), this._updateChangeOutput());
          }),
          (A.prototype.sort = function () {
            return (
              this.sortInputs(function (t) {
                var e = Array.prototype.concat.apply([], t);
                let r = 0;
                return (
                  e.forEach((t) => {
                    t.i = r++;
                  }),
                  e.sort(function (t, e) {
                    return (
                      o(t.prevTxId, e.prevTxId) ||
                      t.outputIndex - e.outputIndex ||
                      t.i - e.i
                    );
                  }),
                  e
                );
              }),
              this.sortOutputs(function (t) {
                var e = Array.prototype.concat.apply([], t);
                let r = 0;
                return (
                  e.forEach((t) => {
                    t.i = r++;
                  }),
                  e.sort(function (t, e) {
                    return (
                      t.satoshis - e.satoshis ||
                      o(t.script.toBuffer(), e.script.toBuffer()) ||
                      t.i - e.i
                    );
                  }),
                  e
                );
              }),
              this
            );
          }),
          (A.prototype.shuffleOutputs = function () {
            return this.sortOutputs(i.shuffle);
          }),
          (A.prototype.sortOutputs = function (t) {
            var e = t(this.outputs);
            return this._newOutputOrder(e);
          }),
          (A.prototype.sortInputs = function (t) {
            return (
              (this.inputs = t(this.inputs)),
              this._clearSignatures(),
              this
            );
          }),
          (A.prototype._newOutputOrder = function (t) {
            var e =
              this.outputs.length !== t.length ||
              0 !== i.difference(this.outputs, t).length;
            if (e) throw new u.Transaction.InvalidSorting();
            if (!i.isUndefined(this._changeIndex)) {
              var r = this.outputs[this._changeIndex];
              this._changeIndex = i.findIndex(t, r);
            }
            return ((this.outputs = t), this);
          }),
          (A.prototype.removeInput = function (t, e) {
            var r;
            if (
              ((r =
                !e && i.isNumber(t)
                  ? t
                  : i.findIndex(this.inputs, function (r) {
                      return (
                        r.prevTxId.toString("hex") === t && r.outputIndex === e
                      );
                    })),
              r < 0 || r >= this.inputs.length)
            )
              throw new u.Transaction.InvalidIndex(r, this.inputs.length);
            var n = this.inputs[r];
            ((this.inputs = i.without(this.inputs, n)),
              (this._inputAmount = void 0),
              this._updateChangeOutput());
          }),
          (A.prototype.sign = function (t, e, r) {
            ((r = r || "ecdsa"),
              n.checkState(
                this.hasAllUtxoInfo(),
                "Not all utxo information is available to sign the transaction.",
              ));
            var s = this;
            return i.isArray(t)
              ? (i.each(t, function (t) {
                  s.sign(t, e, r);
                }),
                this)
              : (i.each(this.getSignatures(t, e, r), function (t) {
                  s.applySignature(t, r);
                }),
                this);
          }),
          (A.prototype.getSignatures = function (t, e, r) {
            ((t = new b(t)), (e = e || d.SIGHASH_ALL | d.SIGHASH_FORKID));
            var i = this,
              n = [],
              s = p.sha256ripemd160(t.publicKey.toBuffer());
            for (let a = 0; a < this.inputs.length; a++) {
              var o = this.inputs[a],
                u = o.getSignatures(i, t, a, e, s, r);
              for (let t of u) n.push(t);
            }
            return n;
          }),
          (A.prototype.applySignature = function (t, e) {
            return (this.inputs[t.inputIndex].addSignature(this, t, e), this);
          }),
          (A.prototype.isFullySigned = function () {
            return (
              i.each(this.inputs, function (t) {
                if (t.isFullySigned === _.prototype.isFullySigned)
                  throw new u.Transaction.UnableToVerifySignature(
                    "Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction",
                  );
              }),
              i.every(
                i.map(this.inputs, function (t) {
                  return t.isFullySigned();
                }),
              )
            );
          }),
          (A.prototype.isValidSignature = function (t) {
            var e = this;
            if (
              this.inputs[t.inputIndex].isValidSignature ===
              _.prototype.isValidSignature
            )
              throw new u.Transaction.UnableToVerifySignature(
                "Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction",
              );
            return this.inputs[t.inputIndex].isValidSignature(e, t);
          }),
          (A.prototype.verifySignature = function (t, e, r, i, n, s, o) {
            return l.verify(this, t, e, r, i, n, s, o);
          }),
          (A.prototype.verify = function () {
            if (0 === this.inputs.length) return "transaction txins empty";
            if (0 === this.outputs.length) return "transaction txouts empty";
            for (var t = new T(0), e = 0; e < this.outputs.length; e++) {
              var r = this.outputs[e];
              if (r.invalidSatoshis())
                return "transaction txout " + e + " satoshis is invalid";
              if (r._satoshisBN.gt(new T(A.MAX_MONEY, 10)))
                return "transaction txout " + e + " greater than MAX_MONEY";
              if (((t = t.add(r._satoshisBN)), t.gt(new T(A.MAX_MONEY))))
                return (
                  "transaction txout " +
                  e +
                  " total output greater than MAX_MONEY"
                );
            }
            if (this.toBuffer().length > N)
              return "transaction over the maximum block size";
            var n = {};
            for (e = 0; e < this.inputs.length; e++) {
              var s = this.inputs[e],
                o = s.prevTxId + ":" + s.outputIndex;
              if (!i.isUndefined(n[o]))
                return "transaction input " + e + " duplicate input";
              n[o] = !0;
            }
            var u = this.isCoinbase();
            if (u) {
              var a = this.inputs[0]._scriptBuffer;
              if (a.length < 2 || a.length > 100)
                return "coinbase transaction script size invalid";
            } else
              for (e = 0; e < this.inputs.length; e++)
                if (this.inputs[e].isNull())
                  return "transaction input " + e + " has null input";
            return !0;
          }),
          (A.prototype.isZceSecured = function (t, e, r) {
            if (this.inputs.length > 65536) return !1;
            const i = this.inputs.every((t) => t.script.isPublicKeyHashIn());
            if (!i) return !1;
            const n = 0;
            let s;
            try {
              s = new A(t);
            } catch (U) {
              return !1;
            }
            const o = s.inputs[n];
            if (o.prevTxId.toString("hex") !== this.id) return !1;
            const u = this.outputs[o.outputIndex];
            if (!u) return !1;
            const a = this.uncheckedSerialize(),
              h = a.length / 2,
              c = h * r;
            if (u.toObject().satoshis < e + c) return !1;
            o.output = u;
            const f = t.length / 2,
              l = s.getFee() / f;
            if (l < r) return !1;
            const g = o.script.toASM().split(" ");
            if (3 !== g.length) return !1;
            const [m, _, S] = g,
              I = new k(_),
              y = this.inputs.map((t) => new k(t.script.getPublicKey())),
              E = this.inputs.map((t) => t.script.toASM().split(" ")[0]),
              P = d.SIGHASH_ALL | d.SIGHASH_FORKID,
              O = [m, ...E].every((t) => t.endsWith(P.toString(16)));
            if (!O) return !1;
            const b = v.buildEscrowOut(y, I),
              T = p.sha256ripemd160(b.toBuffer()),
              w = u.script.getData(),
              R = new v(S),
              N = p.sha256ripemd160(R.toBuffer()),
              B = [T, N, w].map((t) => t.toString("hex"));
            if (!B.every((t) => t === B[0])) return !1;
            const C = d.fromTxString(m);
            C.nhashtype = P;
            const x = s.verifySignature(
              C,
              I,
              n,
              R,
              u.satoshisBN,
              void 0,
              C.isSchnorr ? "schnorr" : "ecdsa",
            );
            return !!x;
          }),
          (A.prototype.isCoinbase = function () {
            return 1 === this.inputs.length && this.inputs[0].isNull();
          }),
          (A.prototype.setVersion = function (t) {
            return (
              n.checkArgument(
                h.isNaturalNumber(t) && t <= w,
                "Wrong version number",
              ),
              (this.version = t),
              this
            );
          }),
          (t.exports = A));
      }).call(this, r(2).Buffer);
    },
    5697: function (t, e, r) {
      ((t.exports = r(3966)),
        (t.exports.PublicKey = r(11292)),
        (t.exports.PublicKeyHash = r(11293)),
        (t.exports.MultiSig = r(11294)),
        (t.exports.MultiSigScriptHash = r(11295)),
        (t.exports.Escrow = r(11296)));
    },
    6883: function (t, e, r) {
      "use strict";
      (function (e, i) {
        var n = t.exports;
        ((n.version = "v" + r(11288).version),
          (n.versionGuard = function (t) {
            if (void 0 !== t) {
              var e =
                "More than one instance of bitcore-lib-cash found. Please make sure to require bitcore-lib and check that submodules do not also include their own bitcore-lib dependency.";
              throw new Error(e);
            }
          }),
          n.versionGuard(e._bitcoreCash),
          (e._bitcoreCash = n.version),
          (n.crypto = {}),
          (n.crypto.BN = r(3034)),
          (n.crypto.ECDSA = r(5694)),
          (n.crypto.Schnorr = r(5695)),
          (n.crypto.Hash = r(3071)),
          (n.crypto.Random = r(4584)),
          (n.crypto.Point = r(3845)),
          (n.crypto.Signature = r(3204)),
          (n.encoding = {}),
          (n.encoding.Base58 = r(4862)),
          (n.encoding.Base58Check = r(4583)),
          (n.encoding.BufferReader = r(3618)),
          (n.encoding.BufferWriter = r(3357)),
          (n.encoding.Varint = r(11297)),
          (n.util = {}),
          (n.util.buffer = r(2935)),
          (n.util.js = r(3035)),
          (n.util.preconditions = r(2866)),
          (n.util.base32 = r(6885)),
          (n.util.convertBits = r(6886)),
          (n.errors = r(3234)),
          (n.Address = r(3846)),
          (n.Block = r(11298)),
          (n.MerkleBlock = r(6890)),
          (n.BlockHeader = r(4865)),
          (n.HDPrivateKey = r(6891)),
          (n.HDPublicKey = r(6892)),
          (n.Networks = r(3617)),
          (n.Opcode = r(4863)),
          (n.PrivateKey = r(4861)),
          (n.PublicKey = r(3205)),
          (n.Script = r(3235)),
          (n.Transaction = r(4864)),
          (n.URI = r(11300)),
          (n.Unit = r(5698)),
          (n.deps = {}),
          (n.deps.bnjs = r(6884)),
          (n.deps.bs58 = r(234)),
          (n.deps.Buffer = i),
          (n.deps.elliptic = r(795)),
          (n.deps._ = r(2856)),
          (n.Transaction.sighash = r(3465)));
      }).call(this, r(13), r(2).Buffer);
    },
    6887: function (t, e, r) {
      (function (e) {
        var i = r(3846),
          n = r(3618),
          s = r(3357),
          o = r(3071),
          u = r(4863),
          a = r(3205),
          h = r(3204),
          c = r(3617),
          f = r(2866),
          p = r(2856),
          d = r(3234),
          l = (r(2), r(2935)),
          g = r(3035),
          m = r(11291),
          _ = function t(e) {
            return this instanceof t
              ? ((this.chunks = []),
                l.isBuffer(e)
                  ? t.fromBuffer(e)
                  : e instanceof i
                    ? t.fromAddress(e)
                    : e instanceof t
                      ? t.fromBuffer(e.toBuffer())
                      : p.isString(e)
                        ? t.fromString(e)
                        : void (
                            p.isObject(e) &&
                            p.isArray(e.chunks) &&
                            this.set(e)
                          ))
              : new t(e);
          };
        ((_.prototype.set = function (t) {
          return (
            f.checkArgument(p.isObject(t)),
            f.checkArgument(p.isArray(t.chunks)),
            (this.chunks = t.chunks),
            this
          );
        }),
          (_.fromBuffer = function (t) {
            var e = new _();
            e.chunks = [];
            var r = new n(t);
            while (!r.finished())
              try {
                var i,
                  s,
                  o = r.readUInt8();
                o > 0 && o < u.OP_PUSHDATA1
                  ? ((i = o),
                    e.chunks.push({ buf: r.read(i), len: i, opcodenum: o }))
                  : o === u.OP_PUSHDATA1
                    ? ((i = r.readUInt8()),
                      (s = r.read(i)),
                      e.chunks.push({ buf: s, len: i, opcodenum: o }))
                    : o === u.OP_PUSHDATA2
                      ? ((i = r.readUInt16LE()),
                        (s = r.read(i)),
                        e.chunks.push({ buf: s, len: i, opcodenum: o }))
                      : o === u.OP_PUSHDATA4
                        ? ((i = r.readUInt32LE()),
                          (s = r.read(i)),
                          e.chunks.push({ buf: s, len: i, opcodenum: o }))
                        : e.chunks.push({ opcodenum: o });
              } catch (a) {
                if (a instanceof RangeError)
                  throw new d.Script.InvalidBuffer(t.toString("hex"));
                throw a;
              }
            return e;
          }),
          (_.prototype.toBuffer = function () {
            for (var t = new s(), e = 0; e < this.chunks.length; e++) {
              var r = this.chunks[e],
                i = r.opcodenum;
              (t.writeUInt8(r.opcodenum),
                r.buf &&
                  (i < u.OP_PUSHDATA1
                    ? t.write(r.buf)
                    : i === u.OP_PUSHDATA1
                      ? (t.writeUInt8(r.len), t.write(r.buf))
                      : i === u.OP_PUSHDATA2
                        ? (t.writeUInt16LE(r.len), t.write(r.buf))
                        : i === u.OP_PUSHDATA4 &&
                          (t.writeUInt32LE(r.len), t.write(r.buf))));
            }
            return t.concat();
          }),
          (_.fromASM = function (t) {
            var r = new _();
            r.chunks = [];
            var i = t.split(" "),
              n = 0;
            while (n < i.length) {
              var s = i[n],
                o = u(s),
                a = o.toNumber();
              if (p.isUndefined(a)) {
                var h = e.from(i[n], "hex"),
                  c = h.length;
                (c >= 0 && c < u.OP_PUSHDATA1
                  ? (a = c)
                  : c < Math.pow(2, 8)
                    ? (a = u.OP_PUSHDATA1)
                    : c < Math.pow(2, 16)
                      ? (a = u.OP_PUSHDATA2)
                      : c < Math.pow(2, 32) && (a = u.OP_PUSHDATA4),
                  r.chunks.push({ buf: h, len: h.length, opcodenum: a }),
                  (n += 1));
              } else (r.chunks.push({ opcodenum: a }), (n += 1));
            }
            return r;
          }),
          (_.fromHex = function (t) {
            return new _(e.from(t, "hex"));
          }),
          (_.fromString = function (t) {
            if (g.isHexa(t) || 0 === t.length) return new _(e.from(t, "hex"));
            var r = new _();
            r.chunks = [];
            var i = t.split(" "),
              n = 0;
            while (n < i.length) {
              var s = i[n],
                o = u(s),
                a = o.toNumber();
              if (p.isUndefined(a)) {
                if (((a = parseInt(s)), !(a > 0 && a < u.OP_PUSHDATA1)))
                  throw new Error("Invalid script: " + JSON.stringify(t));
                (r.chunks.push({
                  buf: e.from(i[n + 1].slice(2), "hex"),
                  len: a,
                  opcodenum: a,
                }),
                  (n += 2));
              } else if (
                a === u.OP_PUSHDATA1 ||
                a === u.OP_PUSHDATA2 ||
                a === u.OP_PUSHDATA4
              ) {
                if ("0x" !== i[n + 2].slice(0, 2))
                  throw new Error("Pushdata data must start with 0x");
                (r.chunks.push({
                  buf: e.from(i[n + 2].slice(2), "hex"),
                  len: parseInt(i[n + 1]),
                  opcodenum: a,
                }),
                  (n += 3));
              } else (r.chunks.push({ opcodenum: a }), (n += 1));
            }
            return r;
          }),
          (_.prototype._chunkToString = function (t, e) {
            var r = t.opcodenum,
              i = "asm" === e,
              n = "";
            if (t.buf)
              (i ||
                (r !== u.OP_PUSHDATA1 &&
                  r !== u.OP_PUSHDATA2 &&
                  r !== u.OP_PUSHDATA4) ||
                (n = n + " " + u(r).toString()),
                t.len > 0 &&
                  (n = i
                    ? n + " " + t.buf.toString("hex")
                    : n + " " + t.len + " 0x" + t.buf.toString("hex")));
            else if ("undefined" !== typeof u.reverseMap[r])
              i
                ? 0 === r
                  ? (n += " 0")
                  : 79 === r
                    ? (n += " -1")
                    : (n = n + " " + u(r).toString())
                : (n = n + " " + u(r).toString());
            else {
              var s = r.toString(16);
              (s.length % 2 !== 0 && (s = "0" + s),
                (n = i ? n + " " + s : n + " 0x" + s));
            }
            return n;
          }),
          (_.prototype.toASM = function () {
            for (var t = "", e = 0; e < this.chunks.length; e++) {
              var r = this.chunks[e];
              t += this._chunkToString(r, "asm");
            }
            return t.substr(1);
          }),
          (_.prototype.toString = function () {
            for (var t = "", e = 0; e < this.chunks.length; e++) {
              var r = this.chunks[e];
              t += this._chunkToString(r);
            }
            return t.substr(1);
          }),
          (_.prototype.toHex = function () {
            return this.toBuffer().toString("hex");
          }),
          (_.prototype.inspect = function () {
            return "<Script: " + this.toString() + ">";
          }),
          (_.prototype.isPublicKeyHashOut = function () {
            return !(
              5 !== this.chunks.length ||
              this.chunks[0].opcodenum !== u.OP_DUP ||
              this.chunks[1].opcodenum !== u.OP_HASH160 ||
              !this.chunks[2].buf ||
              20 !== this.chunks[2].buf.length ||
              this.chunks[3].opcodenum !== u.OP_EQUALVERIFY ||
              this.chunks[4].opcodenum !== u.OP_CHECKSIG
            );
          }),
          (_.prototype.isPublicKeyHashIn = function () {
            if (2 === this.chunks.length) {
              var t = this.chunks[0].buf,
                e = this.chunks[1].buf;
              if (t && t.length && e && e.length) {
                var r = e[0];
                if ((4 === r || 6 === r || 7 === r) && 65 === e.length)
                  return !0;
                if ((3 === r || 2 === r) && 33 === e.length) return !0;
              }
            }
            return !1;
          }),
          (_.prototype.getPublicKey = function () {
            return (
              f.checkState(
                this.isPublicKeyOut() || this.isPublicKeyHashIn(),
                "Can't retrieve PublicKey from a non-PK output or non-PKH input",
              ),
              this.isPublicKeyOut() ? this.chunks[0].buf : this.chunks[1].buf
            );
          }),
          (_.prototype.getPublicKeyHash = function () {
            return (
              f.checkState(
                this.isPublicKeyHashOut(),
                "Can't retrieve PublicKeyHash from a non-PKH output",
              ),
              this.chunks[2].buf
            );
          }),
          (_.prototype.isPublicKeyOut = function () {
            if (
              2 === this.chunks.length &&
              this.chunks[0].buf &&
              this.chunks[0].buf.length &&
              this.chunks[1].opcodenum === u.OP_CHECKSIG
            ) {
              var t = this.chunks[0].buf,
                e = t[0],
                r = !1;
              if (
                ((((4 !== e && 6 !== e && 7 !== e) || 65 !== t.length) &&
                  ((3 !== e && 2 !== e) || 33 !== t.length)) ||
                  (r = !0),
                r)
              )
                return a.isValid(t);
            }
            return !1;
          }),
          (_.prototype.isPublicKeyIn = function () {
            if (1 === this.chunks.length) {
              var t = this.chunks[0].buf;
              if (t && t.length && 48 === t[0]) return !0;
            }
            return !1;
          }),
          (_.prototype.isWitnessProgram = function (t) {
            t || (t = {});
            var e = this.toBuffer();
            return (
              !(e.length < 4 || e.length > 42) &&
              (e[0] === u.OP_0 || (e[0] >= u.OP_1 && e[0] <= u.OP_16)) &&
              e.length === e[1] + 2 &&
              ((t.version = e[0]), (t.program = e.slice(2, e.length)), !0)
            );
          }),
          (_.prototype.isScriptHashOut = function () {
            var t = this.toBuffer();
            return (
              23 === t.length &&
              t[0] === u.OP_HASH160 &&
              20 === t[1] &&
              t[t.length - 1] === u.OP_EQUAL
            );
          }),
          (_.prototype.isScriptHashIn = function () {
            if (this.chunks.length <= 1) return !1;
            var t,
              e = this.chunks[this.chunks.length - 1],
              r = e.buf;
            if (!r) return !1;
            try {
              t = _.fromBuffer(r);
            } catch (n) {
              if (n instanceof d.Script.InvalidBuffer) return !1;
              throw n;
            }
            var i = t.classify();
            return i !== _.types.UNKNOWN;
          }),
          (_.prototype.isMultisigOut = function () {
            return (
              this.chunks.length > 3 &&
              u.isSmallIntOp(this.chunks[0].opcodenum) &&
              this.chunks.slice(1, this.chunks.length - 2).every(function (t) {
                return t.buf && l.isBuffer(t.buf);
              }) &&
              u.isSmallIntOp(this.chunks[this.chunks.length - 2].opcodenum) &&
              this.chunks[this.chunks.length - 1].opcodenum ===
                u.OP_CHECKMULTISIG
            );
          }),
          (_.prototype.isMultisigIn = function () {
            return (
              this.chunks.length >= 2 &&
              0 === this.chunks[0].opcodenum &&
              this.chunks.slice(1, this.chunks.length).every(function (t) {
                return t.buf && l.isBuffer(t.buf) && h.isTxDER(t.buf);
              })
            );
          }),
          (_.prototype.isDataOut = function () {
            var t =
              this.chunks.length >= 1 &&
              this.chunks[0].opcodenum === u.OP_RETURN &&
              this.toBuffer().length <= 223;
            if (!t) return !1;
            var e = this.chunks.slice(1),
              r = new _({ chunks: e });
            return r.isPushOnly();
          }),
          (_.prototype.getData = function () {
            if (this.isDataOut() || this.isScriptHashOut())
              return p.isUndefined(this.chunks[1])
                ? e.alloc(0)
                : e.from(this.chunks[1].buf);
            if (this.isPublicKeyHashOut()) return e.from(this.chunks[2].buf);
            throw new Error("Unrecognized script type to get data from");
          }),
          (_.prototype.isPushOnly = function () {
            return p.every(this.chunks, function (t) {
              return (
                t.opcodenum <= u.OP_16 ||
                t.opcodenum === u.OP_PUSHDATA1 ||
                t.opcodenum === u.OP_PUSHDATA2 ||
                t.opcodenum === u.OP_PUSHDATA4
              );
            });
          }),
          (_.types = {}),
          (_.types.UNKNOWN = "Unknown"),
          (_.types.PUBKEY_OUT = "Pay to public key"),
          (_.types.PUBKEY_IN = "Spend from public key"),
          (_.types.PUBKEYHASH_OUT = "Pay to public key hash"),
          (_.types.PUBKEYHASH_IN = "Spend from public key hash"),
          (_.types.SCRIPTHASH_OUT = "Pay to script hash"),
          (_.types.SCRIPTHASH_IN = "Spend from script hash"),
          (_.types.MULTISIG_OUT = "Pay to multisig"),
          (_.types.MULTISIG_IN = "Spend from multisig"),
          (_.types.DATA_OUT = "Data push"),
          (_.OP_RETURN_STANDARD_SIZE = 220),
          (_.prototype.classify = function () {
            if (this._isInput) return this.classifyInput();
            if (this._isOutput) return this.classifyOutput();
            var t = this.classifyOutput();
            return t != _.types.UNKNOWN ? t : this.classifyInput();
          }),
          (_.outputIdentifiers = {}),
          (_.outputIdentifiers.PUBKEY_OUT = _.prototype.isPublicKeyOut),
          (_.outputIdentifiers.PUBKEYHASH_OUT = _.prototype.isPublicKeyHashOut),
          (_.outputIdentifiers.MULTISIG_OUT = _.prototype.isMultisigOut),
          (_.outputIdentifiers.SCRIPTHASH_OUT = _.prototype.isScriptHashOut),
          (_.outputIdentifiers.DATA_OUT = _.prototype.isDataOut),
          (_.prototype.classifyOutput = function () {
            for (var t in _.outputIdentifiers)
              if (_.outputIdentifiers[t].bind(this)()) return _.types[t];
            return _.types.UNKNOWN;
          }),
          (_.inputIdentifiers = {}),
          (_.inputIdentifiers.PUBKEY_IN = _.prototype.isPublicKeyIn),
          (_.inputIdentifiers.PUBKEYHASH_IN = _.prototype.isPublicKeyHashIn),
          (_.inputIdentifiers.MULTISIG_IN = _.prototype.isMultisigIn),
          (_.inputIdentifiers.SCRIPTHASH_IN = _.prototype.isScriptHashIn),
          (_.prototype.classifyInput = function () {
            for (var t in _.inputIdentifiers)
              if (_.inputIdentifiers[t].bind(this)()) return _.types[t];
            return _.types.UNKNOWN;
          }),
          (_.prototype.isStandard = function () {
            return this.classify() !== _.types.UNKNOWN;
          }),
          (_.prototype.prepend = function (t) {
            return (this._addByType(t, !0), this);
          }),
          (_.prototype.equals = function (t) {
            if (
              (f.checkState(t instanceof _, "Must provide another script"),
              this.chunks.length !== t.chunks.length)
            )
              return !1;
            var e;
            for (e = 0; e < this.chunks.length; e++) {
              if (
                l.isBuffer(this.chunks[e].buf) &&
                !l.isBuffer(t.chunks[e].buf)
              )
                return !1;
              if (
                l.isBuffer(this.chunks[e].buf) &&
                !l.equals(this.chunks[e].buf, t.chunks[e].buf)
              )
                return !1;
              if (this.chunks[e].opcodenum !== t.chunks[e].opcodenum) return !1;
            }
            return !0;
          }),
          (_.prototype.add = function (t) {
            return (this._addByType(t, !1), this);
          }),
          (_.prototype._addByType = function (t, e) {
            if ("string" === typeof t) this._addOpcode(t, e);
            else if ("number" === typeof t) this._addOpcode(t, e);
            else if (t instanceof u) this._addOpcode(t, e);
            else if (l.isBuffer(t)) this._addBuffer(t, e);
            else if (t instanceof _) this.chunks = this.chunks.concat(t.chunks);
            else {
              if ("object" !== typeof t)
                throw new Error("Invalid script chunk");
              this._insertAtPosition(t, e);
            }
          }),
          (_.prototype._insertAtPosition = function (t, e) {
            e ? this.chunks.unshift(t) : this.chunks.push(t);
          }),
          (_.prototype._addOpcode = function (t, e) {
            var r;
            return (
              (r =
                "number" === typeof t
                  ? t
                  : t instanceof u
                    ? t.toNumber()
                    : u(t).toNumber()),
              this._insertAtPosition({ opcodenum: r }, e),
              this
            );
          }),
          (_.prototype._addBuffer = function (t, e) {
            var r,
              i = t.length;
            if (i >= 0 && i < u.OP_PUSHDATA1) r = i;
            else if (i < Math.pow(2, 8)) r = u.OP_PUSHDATA1;
            else if (i < Math.pow(2, 16)) r = u.OP_PUSHDATA2;
            else {
              if (!(i < Math.pow(2, 32)))
                throw new Error("You can't push that much data");
              r = u.OP_PUSHDATA4;
            }
            return (
              this._insertAtPosition({ buf: t, len: i, opcodenum: r }, e),
              this
            );
          }),
          (_.prototype.removeCodeseparators = function () {
            for (var t = [], e = 0; e < this.chunks.length; e++)
              this.chunks[e].opcodenum !== u.OP_CODESEPARATOR &&
                t.push(this.chunks[e]);
            return ((this.chunks = t), this);
          }),
          (_.buildEscrowOut = function (t, e) {
            (f.checkArgument(
              t.length < 65536,
              "Number of input public keys exceeds 65,536",
            ),
              f.checkArgument(
                t.length > 0,
                "Must provide at least one input public key",
              ),
              f.checkArgument(e, "Must provide a reclaim public key"));
            const r = new _(),
              i = m.generateRedeemScriptOperations(t, e);
            return (i.forEach((t) => r.add(t)), r);
          }),
          (_.buildMultisigOut = function (t, e, r) {
            (f.checkArgument(
              e <= t.length,
              "Number of required signatures must be less than or equal to the number of public keys",
            ),
              (r = r || {}));
            var i = new _();
            (i.add(u.smallInt(e)), (t = p.map(t, a)));
            var n = t;
            r.noSorting ||
              (n = p.sortBy(t, function (t) {
                return t.toString("hex");
              }));
            for (var s = 0; s < n.length; s++) {
              var o = n[s];
              i.add(o.toBuffer());
            }
            return (i.add(u.smallInt(t.length)), i.add(u.OP_CHECKMULTISIG), i);
          }),
          (_.buildMultisigIn = function (t, r, i, n) {
            (f.checkArgument(p.isArray(t)),
              f.checkArgument(p.isNumber(r)),
              f.checkArgument(p.isArray(i)),
              (n = n || {}));
            var s = new _();
            if ("schnorr" === n.signingMethod && n.checkBits) {
              let r = e.from(n.checkBits).reverse().join(""),
                i = parseInt(r, 2),
                o = parseInt(i.toString(16), 16),
                a = t.length;
              a >= 1 && a <= 4
                ? s.add(u(o))
                : a >= 5 && a <= 8
                  ? 129 === o
                    ? s.add(u("OP_1NEGATE"))
                    : o > 16
                      ? (s.add(1), s.add(o))
                      : s.add(u(o))
                  : a >= 9 && a <= 16
                    ? (s.add(2), s.add(o))
                    : a >= 17 && a <= 20 && (s.add(3), s.add(o));
            } else s.add(u.OP_0);
            return (
              p.each(i, function (t) {
                (f.checkArgument(
                  l.isBuffer(t),
                  "Signatures must be an array of Buffers",
                ),
                  s.add(t));
              }),
              s
            );
          }),
          (_.buildP2SHMultisigIn = function (t, r, i, n) {
            (f.checkArgument(p.isArray(t)),
              f.checkArgument(p.isNumber(r)),
              f.checkArgument(p.isArray(i)),
              (n = n || {}));
            var s = new _();
            if ("schnorr" === n.signingMethod && n.checkBits) {
              let r = e.from(n.checkBits).reverse().join(""),
                i = parseInt(r, 2),
                o = parseInt(i.toString(16), 16),
                a = t.length;
              a >= 1 && a <= 4
                ? s.add(u.smallInt(i))
                : a >= 5 && a <= 8
                  ? 129 === o
                    ? s.add(u("OP_1NEGATE"))
                    : o > 16
                      ? (s.add(1), s.add(o))
                      : s.add(u.smallInt(i))
                  : a >= 9 && a <= 16
                    ? (s.add(2), s.add(o))
                    : a >= 17 && a <= 20 && (s.add(3), s.add(o));
            } else s.add(u.OP_0);
            return (
              p.each(i, function (t) {
                (f.checkArgument(
                  l.isBuffer(t),
                  "Signatures must be an array of Buffers",
                ),
                  s.add(t));
              }),
              s.add(
                (n.cachedMultisig || _.buildMultisigOut(t, r, n)).toBuffer(),
              ),
              s
            );
          }),
          (_.buildPublicKeyHashOut = function (t) {
            (f.checkArgument(!p.isUndefined(t)),
              f.checkArgument(
                t instanceof a || t instanceof i || p.isString(t),
              ),
              t instanceof a
                ? (t = t.toAddress())
                : p.isString(t) && (t = new i(t)));
            var e = new _();
            return (
              e
                .add(u.OP_DUP)
                .add(u.OP_HASH160)
                .add(t.hashBuffer)
                .add(u.OP_EQUALVERIFY)
                .add(u.OP_CHECKSIG),
              (e._network = t.network),
              e
            );
          }),
          (_.buildPublicKeyOut = function (t) {
            f.checkArgument(t instanceof a);
            var e = new _();
            return (e.add(t.toBuffer()).add(u.OP_CHECKSIG), e);
          }),
          (_.buildDataOut = function (t, r) {
            (f.checkArgument(
              p.isUndefined(t) || p.isString(t) || l.isBuffer(t),
            ),
              p.isString(t) && (t = e.from(t, r)));
            var i = new _();
            return (i.add(u.OP_RETURN), p.isUndefined(t) || i.add(t), i);
          }),
          (_.buildScriptHashOut = function (t) {
            f.checkArgument(
              t instanceof _ || (t instanceof i && t.isPayToScriptHash()),
            );
            var e = new _();
            return (
              e
                .add(u.OP_HASH160)
                .add(
                  t instanceof i
                    ? t.hashBuffer
                    : o.sha256ripemd160(t.toBuffer()),
                )
                .add(u.OP_EQUAL),
              (e._network = t._network || t.network),
              e
            );
          }),
          (_.buildPublicKeyIn = function (t, e) {
            (f.checkArgument(t instanceof h || l.isBuffer(t)),
              f.checkArgument(p.isUndefined(e) || p.isNumber(e)),
              t instanceof h && (t = t.toBuffer()));
            var r = new _();
            return (
              r.add(
                l.concat([t, l.integerAsSingleByteBuffer(e || h.SIGHASH_ALL)]),
              ),
              r
            );
          }),
          (_.buildPublicKeyHashIn = function (t, e, r) {
            (f.checkArgument(e instanceof h || l.isBuffer(e)),
              f.checkArgument(p.isUndefined(r) || p.isNumber(r)),
              e instanceof h && (e = e.toBuffer()));
            var i = new _()
              .add(
                l.concat([e, l.integerAsSingleByteBuffer(r || h.SIGHASH_ALL)]),
              )
              .add(new a(t).toBuffer());
            return i;
          }),
          (_.buildEscrowIn = function (t, e, r) {
            f.checkArgument(e instanceof h);
            const i = h.SIGHASH_ALL | h.SIGHASH_FORKID;
            return new _()
              .add(
                l.concat([
                  e.toBuffer("schnorr"),
                  l.integerAsSingleByteBuffer(i),
                ]),
              )
              .add(t.toBuffer())
              .add(r.toBuffer());
          }),
          (_.empty = function () {
            return new _();
          }),
          (_.prototype.toScriptHashOut = function () {
            return _.buildScriptHashOut(this);
          }),
          (_.fromAddress = function (t) {
            if (((t = i(t)), t.isPayToScriptHash()))
              return _.buildScriptHashOut(t);
            if (t.isPayToPublicKeyHash()) return _.buildPublicKeyHashOut(t);
            throw new d.Script.UnrecognizedAddress(t);
          }),
          (_.prototype.getAddressInfo = function (t) {
            if (this._isInput) return this._getInputAddressInfo();
            if (this._isOutput) return this._getOutputAddressInfo();
            var e = this._getOutputAddressInfo();
            return e || this._getInputAddressInfo();
          }),
          (_.prototype._getOutputAddressInfo = function () {
            var t = {};
            if (this.isScriptHashOut())
              ((t.hashBuffer = this.getData()), (t.type = i.PayToScriptHash));
            else {
              if (!this.isPublicKeyHashOut()) return !1;
              ((t.hashBuffer = this.getData()),
                (t.type = i.PayToPublicKeyHash));
            }
            return t;
          }),
          (_.prototype._getInputAddressInfo = function () {
            var t = {};
            if (this.isPublicKeyHashIn())
              ((t.hashBuffer = o.sha256ripemd160(this.chunks[1].buf)),
                (t.type = i.PayToPublicKeyHash));
            else {
              if (!this.isScriptHashIn()) return !1;
              ((t.hashBuffer = o.sha256ripemd160(
                this.chunks[this.chunks.length - 1].buf,
              )),
                (t.type = i.PayToScriptHash));
            }
            return t;
          }),
          (_.prototype.toAddress = function (t) {
            var e = this.getAddressInfo();
            return (
              !!e &&
              ((e.network = c.get(t) || this._network || c.defaultNetwork),
              new i(e))
            );
          }),
          (_.prototype.findAndDelete = function (t) {
            for (
              var e = t.toBuffer(), r = e.toString("hex"), i = 0;
              i < this.chunks.length;
              i++
            ) {
              var n = _({ chunks: [this.chunks[i]] }),
                s = n.toBuffer(),
                o = s.toString("hex");
              r === o && this.chunks.splice(i, 1);
            }
            return this;
          }),
          (_.prototype.checkMinimalPush = function (t) {
            var e = this.chunks[t],
              r = e.buf,
              i = e.opcodenum;
            return (
              !r ||
              (0 === r.length
                ? i === u.OP_0
                : !(1 === r.length && r[0] >= 1 && r[0] <= 16) &&
                  (1 !== r.length || 129 !== r[0]) &&
                  (r.length <= 75
                    ? i === r.length
                    : r.length <= 255
                      ? i === u.OP_PUSHDATA1
                      : !(r.length <= 65535) || i === u.OP_PUSHDATA2))
            );
          }),
          (_.prototype._decodeOP_N = function (t) {
            if (t === u.OP_0) return 0;
            if (t >= u.OP_1 && t <= u.OP_16) return t - (u.OP_1 - 1);
            throw new Error("Invalid opcode: " + JSON.stringify(t));
          }),
          (_.prototype.getSignatureOperationsCount = function (t) {
            t = !!p.isUndefined(t) || t;
            var e = this,
              r = 0,
              i = u.OP_INVALIDOPCODE;
            return (
              p.each(e.chunks, function (n) {
                var s = n.opcodenum;
                (s == u.OP_CHECKSIG || s == u.OP_CHECKSIGVERIFY
                  ? r++
                  : (s != u.OP_CHECKMULTISIG &&
                      s != u.OP_CHECKMULTISIGVERIFY) ||
                    (t && i >= u.OP_1 && i <= u.OP_16
                      ? (r += e._decodeOP_N(i))
                      : (r += 20)),
                  (i = s));
              }),
              r
            );
          }),
          (t.exports = _));
      }).call(this, r(2).Buffer);
    },
    6888: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(6887),
          s = r(4863),
          o = r(3034),
          u = r(3071),
          a = r(3204),
          h = r(3205),
          c = r(5694),
          f = r(5695),
          p = r(3357),
          d = function t(e) {
            if (!(this instanceof t)) return new t(e);
            e ? (this.initialize(), this.set(e)) : this.initialize();
          };
        function l(t) {
          switch (t.length) {
            case 33:
              return 2 === t[0] || 3 === t[0];
            case 64:
              return 4 === t[0];
            default:
              return !1;
          }
        }
        function g(t, e) {
          if (e > 32)
            return ((this.errstr = "INVALID_BITFIELD_SIZE"), { result: !1 });
          let r = Math.floor((e + 7) / 8),
            i = t.length;
          if (i !== r)
            return ((this.errstr = "INVALID_BITFIELD_SIZE"), { result: !1 });
          let n = 0,
            s = Uint32Array.from(t);
          for (let u = 0; u < r; u++) n |= s[u] << (8 * u);
          let o = (1 << e) - 1;
          return (n & o) != n
            ? ((this.errstr = "INVALID_BIT_RANGE"), { result: !1 })
            : { result: !0, bitfield: n };
        }
        function m(t) {
          return (
            (t -= (t >> 1) & 1431655765),
            (t = (858993459 & t) + ((t >> 2) & 858993459)),
            (16843009 * ((t + (t >> 4)) & 252645135)) >> 24
          );
        }
        ((d.prototype.verify = function (t, e, s, o, u, a) {
          var h,
            c = r(4864);
          if (
            ((this.nSigChecks = 0),
            i.isUndefined(s) && (s = new c()),
            i.isUndefined(o) && (o = 0),
            i.isUndefined(u) && (u = 0),
            u & d.SCRIPT_ENABLE_SIGHASH_FORKID &&
              ((u |= d.SCRIPT_VERIFY_STRICTENC), !a))
          )
            throw new Error(
              "internal error - need satoshisBN to verify FORKID transactions",
            );
          if (
            (this.set({ script: t, tx: s, nin: o, flags: u, satoshisBN: a }),
            0 !== (u & d.SCRIPT_VERIFY_SIGPUSHONLY) && !t.isPushOnly())
          )
            return ((this.errstr = "SCRIPT_ERR_SIG_PUSHONLY"), !1);
          if (!this.evaluate()) return !1;
          u & d.SCRIPT_VERIFY_P2SH && (h = this.stack.slice());
          var f = this.stack;
          if (
            (this.initialize(),
            this.set({
              script: e,
              stack: f,
              tx: s,
              nin: o,
              flags: u,
              satoshisBN: a,
            }),
            !this.evaluate())
          )
            return !1;
          if (0 === this.stack.length)
            return ((this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_RESULT"), !1);
          var p = this.stack[this.stack.length - 1];
          if (!d.castToBool(p))
            return ((this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK"), !1);
          if (u & d.SCRIPT_VERIFY_P2SH && e.isScriptHashOut()) {
            if (!t.isPushOnly())
              return ((this.errstr = "SCRIPT_ERR_SIG_PUSHONLY"), !1);
            if (0 === h.length)
              throw new Error("internal error - stack copy empty");
            var l = h[h.length - 1],
              g = n.fromBuffer(l);
            if (
              (h.pop(),
              this.initialize(),
              this.set({
                script: g,
                stack: h,
                tx: s,
                nin: o,
                flags: u,
                satoshisBN: a,
              }),
              0 == (u & d.SCRIPT_DISALLOW_SEGWIT_RECOVERY) &&
                0 === h.length &&
                g.isWitnessProgram())
            )
              return !0;
            if (!this.evaluate()) return !1;
            if (0 === h.length)
              return (
                (this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_P2SH_STACK"),
                !1
              );
            if (!d.castToBool(h[h.length - 1]))
              return (
                (this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_P2SH_STACK"),
                !1
              );
          }
          if (0 != (u & d.SCRIPT_VERIFY_CLEANSTACK)) {
            if (0 == (u & d.SCRIPT_VERIFY_P2SH))
              throw new Error("internal error - CLEANSTACK without P2SH");
            if (1 != this.stack.length)
              return ((this.errstr = "SCRIPT_ERR_CLEANSTACK"), !1);
          }
          return !(
            u & d.SCRIPT_VERIFY_INPUT_SIGCHECKS &&
            t.toBuffer().length < 43 * this.nSigChecks - 60
          );
        }),
          (t.exports = d),
          (d.prototype.initialize = function (t) {
            ((this.stack = []),
              (this.altstack = []),
              (this.pc = 0),
              (this.pbegincodehash = 0),
              (this.nOpCount = 0),
              (this.vfExec = []),
              (this.errstr = ""),
              (this.flags = 0));
          }),
          (d.prototype.set = function (t) {
            ((this.script = t.script || this.script),
              (this.tx = t.tx || this.tx),
              (this.nin = "undefined" !== typeof t.nin ? t.nin : this.nin),
              (this.satoshisBN = t.satoshisBN || this.satoshisBN),
              (this.stack = t.stack || this.stack),
              (this.altstack = t.altack || this.altstack),
              (this.pc = "undefined" !== typeof t.pc ? t.pc : this.pc),
              (this.pbegincodehash =
                "undefined" !== typeof t.pbegincodehash
                  ? t.pbegincodehash
                  : this.pbegincodehash),
              (this.nOpCount =
                "undefined" !== typeof t.nOpCount ? t.nOpCount : this.nOpCount),
              (this.vfExec = t.vfExec || this.vfExec),
              (this.errstr = t.errstr || this.errstr),
              (this.flags =
                "undefined" !== typeof t.flags ? t.flags : this.flags));
          }),
          (d.true = e.from([1])),
          (d.false = e.from([])),
          (d.MAX_SCRIPT_ELEMENT_SIZE = 520),
          (d.MAXIMUM_ELEMENT_SIZE = 4),
          (d.LOCKTIME_THRESHOLD = 5e8),
          (d.LOCKTIME_THRESHOLD_BN = new o(d.LOCKTIME_THRESHOLD)),
          (d.SCRIPT_VERIFY_NONE = 0),
          (d.SCRIPT_VERIFY_P2SH = 1),
          (d.SCRIPT_VERIFY_STRICTENC = 2),
          (d.SCRIPT_VERIFY_DERSIG = 4),
          (d.SCRIPT_VERIFY_LOW_S = 8),
          (d.SCRIPT_VERIFY_NULLDUMMY = 16),
          (d.SCRIPT_VERIFY_SIGPUSHONLY = 32),
          (d.SCRIPT_VERIFY_MINIMALDATA = 64),
          (d.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 128),
          (d.SCRIPT_VERIFY_CLEANSTACK = 256),
          (d.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY = 512),
          (d.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY = 1024),
          (d.SCRIPT_VERIFY_MINIMALIF = 8192),
          (d.SCRIPT_VERIFY_NULLFAIL = 16384),
          (d.SCRIPT_VERIFY_COMPRESSED_PUBKEYTYPE = 32768),
          (d.SCRIPT_ENABLE_SIGHASH_FORKID = 65536),
          (d.SCRIPT_ENABLE_REPLAY_PROTECTION = 1 << 17),
          (d.SCRIPT_ENABLE_CHECKDATASIG = 1 << 18),
          (d.SCRIPT_DISALLOW_SEGWIT_RECOVERY = 1 << 20),
          (d.SCRIPT_ENABLE_SCHNORR_MULTISIG = 1 << 21),
          (d.SEQUENCE_LOCKTIME_DISABLE_FLAG = 1 << 31),
          (d.SEQUENCE_LOCKTIME_TYPE_FLAG = 1 << 22),
          (d.SEQUENCE_LOCKTIME_MASK = 65535),
          (d.SCRIPT_VERIFY_INPUT_SIGCHECKS = 1 << 22),
          (d.SCRIPT_ENFORCE_SIGCHECKS = 1 << 23),
          (d.SCRIPT_64_BIT_INTEGERS = 1 << 24),
          (d.SCRIPT_NATIVE_INTROSPECTION = 1 << 25),
          (d.castToBool = function (t) {
            for (var e = 0; e < t.length; e++)
              if (0 !== t[e]) return e !== t.length - 1 || 128 !== t[e];
            return !1;
          }),
          (d.isSchnorrSig = function (t) {
            return (64 === t.length || 65 === t.length) && 48 !== t[0];
          }),
          (d.prototype.checkRawSignatureEncoding = function (t) {
            var e;
            return (
              !!d.isSchnorrSig(t) ||
              (0 ===
                (this.flags &
                  (d.SCRIPT_VERIFY_DERSIG |
                    d.SCRIPT_VERIFY_LOW_S |
                    d.SCRIPT_VERIFY_STRICTENC)) || a.isDER(t)
                ? !(
                    0 !== (this.flags & d.SCRIPT_VERIFY_LOW_S) &&
                    ((e = a.fromTxFormat(t)), !e.hasLowS())
                  ) || ((this.errstr = "SCRIPT_ERR_SIG_DER_HIGH_S"), !1)
                : ((this.errstr = "SCRIPT_ERR_SIG_DER_INVALID_FORMAT"), !1))
            );
          }),
          (d.prototype.checkSignatureEncoding =
            d.prototype.checkTxSignatureEncoding =
              function (t) {
                if (0 == t.length) return !0;
                if (!this.checkRawSignatureEncoding(t.slice(0, t.length - 1)))
                  return !1;
                if (0 !== (this.flags & d.SCRIPT_VERIFY_STRICTENC)) {
                  var e = a.fromTxFormat(t);
                  if (!e.hasDefinedHashtype())
                    return ((this.errstr = "SCRIPT_ERR_SIG_HASHTYPE"), !1);
                  if (
                    !(this.flags & d.SCRIPT_ENABLE_SIGHASH_FORKID) &&
                    e.nhashtype & a.SIGHASH_FORKID
                  )
                    return ((this.errstr = "SCRIPT_ERR_ILLEGAL_FORKID"), !1);
                  if (
                    this.flags & d.SCRIPT_ENABLE_SIGHASH_FORKID &&
                    !(e.nhashtype & a.SIGHASH_FORKID)
                  )
                    return ((this.errstr = "SCRIPT_ERR_MUST_USE_FORKID"), !1);
                }
                return !0;
              }),
          (d.prototype.checkDataSignatureEncoding = function (t) {
            return 0 == t.length || this.checkRawSignatureEncoding(t);
          }),
          (d.prototype.checkPubkeyEncoding = function (t) {
            return (
              !(
                0 !== (this.flags & d.SCRIPT_VERIFY_STRICTENC) &&
                !h.isValid(t) &&
                !l(t)
              ) || ((this.errstr = "SCRIPT_ERR_PUBKEYTYPE"), !1)
            );
          }),
          (d._isMinimallyEncoded = function (t, e) {
            return (
              (e = e || d.MAXIMUM_ELEMENT_SIZE),
              !(t.length > e) &&
                !(
                  t.length > 0 &&
                  0 == (127 & t[t.length - 1]) &&
                  (t.length <= 1 || 0 == (128 & t[t.length - 2]))
                )
            );
          }),
          (d._minimallyEncode = function (t) {
            if (0 == t.length) return t;
            var r = t[t.length - 1];
            if (127 & r) return t;
            if (1 == t.length) return e.from("");
            if (128 & t[t.length - 2]) return t;
            for (var i = t.length - 1; i > 0; i--)
              if (0 != t[i - 1])
                return (
                  128 & t[i - 1] ? (t[i++] = r) : (t[i - 1] |= r),
                  t.slice(0, i)
                );
            return e.from("");
          }),
          (d.prototype.evaluate = function () {
            if (this.script.toBuffer().length > 1e4)
              return ((this.errstr = "SCRIPT_ERR_SCRIPT_SIZE"), !1);
            try {
              while (this.pc < this.script.chunks.length) {
                var t = this.step();
                if (!t) return !1;
              }
              if (this.stack.length + this.altstack.length > 1e3)
                return ((this.errstr = "SCRIPT_ERR_STACK_SIZE"), !1);
            } catch (e) {
              return ((this.errstr = "SCRIPT_ERR_UNKNOWN_ERROR: " + e), !1);
            }
            return (
              !(this.vfExec.length > 0) ||
              ((this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL"), !1)
            );
          }),
          (d.prototype.checkLockTime = function (t) {
            return (
              !!(
                (this.tx.nLockTime < d.LOCKTIME_THRESHOLD &&
                  t.lt(d.LOCKTIME_THRESHOLD_BN)) ||
                (this.tx.nLockTime >= d.LOCKTIME_THRESHOLD &&
                  t.gte(d.LOCKTIME_THRESHOLD_BN))
              ) &&
              !t.gt(new o(this.tx.nLockTime)) &&
              !!this.tx.inputs[this.nin].isFinal()
            );
          }),
          (d.prototype.checkSequence = function (t) {
            var e = this.tx.inputs[this.nin].sequenceNumber;
            if (this.tx.version < 2) return !1;
            if (e & SEQUENCE_LOCKTIME_DISABLE_FLAG) return !1;
            var r = d.SEQUENCE_LOCKTIME_TYPE_FLAG | d.SEQUENCE_LOCKTIME_MASK,
              i = new o(e & r),
              n = t.and(r),
              s = new o(d.SEQUENCE_LOCKTIME_TYPE_FLAG);
            return (
              !!((i.lt(s) && n.lt(s)) || (i.gte(s) && n.gte(s))) && !n.gt(i)
            );
          }),
          (d.prototype.step = function () {
            var t = this;
            function r(e) {
              return t.stack[t.stack.length + e];
            }
            function l(t, e) {
              switch (t) {
                case s.OP_INVERT:
                case s.OP_2MUL:
                case s.OP_2DIV:
                case s.OP_LSHIFT:
                case s.OP_RSHIFT:
                  return !0;
                case s.OP_DIV:
                case s.OP_MOD:
                case s.OP_SPLIT:
                case s.OP_CAT:
                case s.OP_AND:
                case s.OP_OR:
                case s.OP_XOR:
                case s.OP_BIN2NUM:
                case s.OP_NUM2BIN:
                  return !1;
                case s.OP_MUL:
                  return !e;
                default:
                  break;
              }
              return !1;
            }
            const _ = 0 !== (this.flags & d.SCRIPT_VERIFY_MINIMALDATA),
              S = 0 !== (this.flags & d.SCRIPT_64_BIT_INTEGERS),
              I = 0 !== (this.flags & d.SCRIPT_NATIVE_INTROSPECTION),
              y = S ? 8 : 4;
            var E,
              P,
              O,
              v,
              b,
              k,
              T,
              A,
              w,
              R,
              N,
              B,
              C,
              x,
              U,
              F,
              L,
              H,
              K = -1 === this.vfExec.indexOf(!1),
              D = this.script.chunks[this.pc];
            this.pc++;
            var M = D.opcodenum;
            if (i.isUndefined(M))
              return ((this.errstr = "SCRIPT_ERR_UNDEFINED_OPCODE"), !1);
            if (D.buf && D.buf.length > d.MAX_SCRIPT_ELEMENT_SIZE)
              return ((this.errstr = "SCRIPT_ERR_PUSH_SIZE"), !1);
            if (M > s.OP_16 && ++this.nOpCount > 201)
              return ((this.errstr = "SCRIPT_ERR_OP_COUNT"), !1);
            if (l(M, S))
              return ((this.errstr = "SCRIPT_ERR_DISABLED_OPCODE"), !1);
            if (K && 0 <= M && M <= s.OP_PUSHDATA4) {
              if (_ && !this.script.checkMinimalPush(this.pc - 1))
                return ((this.errstr = "SCRIPT_ERR_MINIMALDATA"), !1);
              if (D.buf) {
                if (D.len !== D.buf.length)
                  throw new Error(
                    "Length of push value not equal to length of data",
                  );
                this.stack.push(D.buf);
              } else this.stack.push(d.false);
            } else if (K || (s.OP_IF <= M && M <= s.OP_ENDIF))
              switch (M) {
                case s.OP_1NEGATE:
                case s.OP_1:
                case s.OP_2:
                case s.OP_3:
                case s.OP_4:
                case s.OP_5:
                case s.OP_6:
                case s.OP_7:
                case s.OP_8:
                case s.OP_9:
                case s.OP_10:
                case s.OP_11:
                case s.OP_12:
                case s.OP_13:
                case s.OP_14:
                case s.OP_15:
                case s.OP_16:
                  ((b = M - (s.OP_1 - 1)),
                    (E = new o(b).toScriptNumBuffer()),
                    this.stack.push(E));
                  break;
                case s.OP_NOP:
                  break;
                case s.OP_NOP2:
                case s.OP_CHECKLOCKTIMEVERIFY:
                  if (!(this.flags & d.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY)) {
                    if (this.flags & d.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
                      return (
                        (this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS"),
                        !1
                      );
                    break;
                  }
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var V = o.fromScriptNumBuffer(
                    this.stack[this.stack.length - 1],
                    _,
                    5,
                  );
                  if (V.lt(new o(0)))
                    return ((this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME"), !1);
                  if (!this.checkLockTime(V))
                    return (
                      (this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME"),
                      !1
                    );
                  break;
                case s.OP_NOP3:
                case s.OP_CHECKSEQUENCEVERIFY:
                  if (!(this.flags & d.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY)) {
                    if (this.flags & d.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
                      return (
                        (this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS"),
                        !1
                      );
                    break;
                  }
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var G = o.fromScriptNumBuffer(r(-1), _, 5);
                  if (G.lt(new o(0)))
                    return ((this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME"), !1);
                  if (0 != (G & d.SEQUENCE_LOCKTIME_DISABLE_FLAG)) break;
                  if (!this.checkSequence(G))
                    return (
                      (this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME"),
                      !1
                    );
                  break;
                case s.OP_NOP1:
                case s.OP_NOP4:
                case s.OP_NOP5:
                case s.OP_NOP6:
                case s.OP_NOP7:
                case s.OP_NOP8:
                case s.OP_NOP9:
                case s.OP_NOP10:
                  if (this.flags & d.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
                    return (
                      (this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS"),
                      !1
                    );
                  break;
                case s.OP_IF:
                case s.OP_NOTIF:
                  if (((L = !1), K)) {
                    if (this.stack.length < 1)
                      return (
                        (this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL"),
                        !1
                      );
                    if (((E = r(-1)), this.flags & d.SCRIPT_VERIFY_MINIMALIF)) {
                      if (E.length > 1)
                        return ((this.errstr = "SCRIPT_ERR_MINIMALIF"), !1);
                      if (1 == E.length && 1 != E[0])
                        return ((this.errstr = "SCRIPT_ERR_MINIMALIF"), !1);
                    }
                    ((L = d.castToBool(E)),
                      M === s.OP_NOTIF && (L = !L),
                      this.stack.pop());
                  }
                  this.vfExec.push(L);
                  break;
                case s.OP_ELSE:
                  if (0 === this.vfExec.length)
                    return (
                      (this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL"),
                      !1
                    );
                  this.vfExec[this.vfExec.length - 1] =
                    !this.vfExec[this.vfExec.length - 1];
                  break;
                case s.OP_ENDIF:
                  if (0 === this.vfExec.length)
                    return (
                      (this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL"),
                      !1
                    );
                  this.vfExec.pop();
                  break;
                case s.OP_VERIFY:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (((E = r(-1)), (L = d.castToBool(E)), !L))
                    return ((this.errstr = "SCRIPT_ERR_VERIFY"), !1);
                  this.stack.pop();
                  break;
                case s.OP_RETURN:
                  return ((this.errstr = "SCRIPT_ERR_OP_RETURN"), !1);
                case s.OP_TOALTSTACK:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.altstack.push(this.stack.pop());
                  break;
                case s.OP_FROMALTSTACK:
                  if (this.altstack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_ALTSTACK_OPERATION"),
                      !1
                    );
                  this.stack.push(this.altstack.pop());
                  break;
                case s.OP_2DROP:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  (this.stack.pop(), this.stack.pop());
                  break;
                case s.OP_2DUP:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((P = r(-2)),
                    (O = r(-1)),
                    this.stack.push(P),
                    this.stack.push(O));
                  break;
                case s.OP_3DUP:
                  if (this.stack.length < 3)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((P = r(-3)), (O = r(-2)));
                  var z = r(-1);
                  (this.stack.push(P), this.stack.push(O), this.stack.push(z));
                  break;
                case s.OP_2OVER:
                  if (this.stack.length < 4)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((P = r(-4)),
                    (O = r(-3)),
                    this.stack.push(P),
                    this.stack.push(O));
                  break;
                case s.OP_2ROT:
                  if (this.stack.length < 6)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((v = this.stack.splice(this.stack.length - 6, 2)),
                    this.stack.push(v[0]),
                    this.stack.push(v[1]));
                  break;
                case s.OP_2SWAP:
                  if (this.stack.length < 4)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((v = this.stack.splice(this.stack.length - 4, 2)),
                    this.stack.push(v[0]),
                    this.stack.push(v[1]));
                  break;
                case s.OP_IFDUP:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((E = r(-1)), (L = d.castToBool(E)), L && this.stack.push(E));
                  break;
                case s.OP_DEPTH:
                  ((E = new o(this.stack.length).toScriptNumBuffer()),
                    this.stack.push(E));
                  break;
                case s.OP_DROP:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.stack.pop();
                  break;
                case s.OP_DUP:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.stack.push(r(-1));
                  break;
                case s.OP_NIP:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.stack.splice(this.stack.length - 2, 1);
                  break;
                case s.OP_OVER:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.stack.push(r(-2));
                  break;
                case s.OP_PICK:
                case s.OP_ROLL:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (
                    ((E = r(-1)),
                    (A = o.fromScriptNumBuffer(E, _)),
                    (b = A.toNumber()),
                    this.stack.pop(),
                    b < 0 || b >= this.stack.length)
                  )
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((E = r(-b - 1)),
                    M === s.OP_ROLL &&
                      this.stack.splice(this.stack.length - b - 1, 1),
                    this.stack.push(E));
                  break;
                case s.OP_ROT:
                  if (this.stack.length < 3)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((k = r(-3)), (T = r(-2)));
                  var Y = r(-1);
                  ((this.stack[this.stack.length - 3] = T),
                    (this.stack[this.stack.length - 2] = Y),
                    (this.stack[this.stack.length - 1] = k));
                  break;
                case s.OP_SWAP:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((k = r(-2)),
                    (T = r(-1)),
                    (this.stack[this.stack.length - 2] = T),
                    (this.stack[this.stack.length - 1] = k));
                  break;
                case s.OP_TUCK:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.stack.splice(this.stack.length - 2, 0, r(-1));
                  break;
                case s.OP_SIZE:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((A = new o(r(-1).length)),
                    this.stack.push(A.toScriptNumBuffer()));
                  break;
                case s.OP_AND:
                case s.OP_OR:
                case s.OP_XOR:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (((P = r(-2)), (O = r(-1)), P.length !== O.length))
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_OPERAND_SIZE"),
                      !1
                    );
                  switch (M) {
                    case s.OP_AND:
                      for (var j = 0; j < P.length; j++) P[j] &= O[j];
                      break;
                    case s.OP_OR:
                      for (j = 0; j < P.length; j++) P[j] |= O[j];
                      break;
                    case s.OP_XOR:
                      for (j = 0; j < P.length; j++) P[j] ^= O[j];
                      break;
                    default:
                      break;
                  }
                  this.stack.pop();
                  break;
                case s.OP_EQUAL:
                case s.OP_EQUALVERIFY:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((P = r(-2)), (O = r(-1)));
                  var X = P.toString("hex") === O.toString("hex");
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(X ? d.true : d.false),
                    M === s.OP_EQUALVERIFY)
                  ) {
                    if (!X)
                      return ((this.errstr = "SCRIPT_ERR_EQUALVERIFY"), !1);
                    this.stack.pop();
                  }
                  break;
                case s.OP_1ADD:
                case s.OP_1SUB:
                case s.OP_NEGATE:
                case s.OP_ABS:
                case s.OP_NOT:
                case s.OP_0NOTEQUAL:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  switch (
                    ((E = r(-1)), (A = o.fromScriptNumBuffer(E, _, y)), M)
                  ) {
                    case s.OP_1ADD:
                      A = A.safeAdd(o.One, y);
                      break;
                    case s.OP_1SUB:
                      A = A.safeSub(o.One, y);
                      break;
                    case s.OP_NEGATE:
                      A = A.neg();
                      break;
                    case s.OP_ABS:
                      A.cmp(o.Zero) < 0 && (A = A.neg());
                      break;
                    case s.OP_NOT:
                      A = new o((0 === A.cmp(o.Zero)) + 0);
                      break;
                    case s.OP_0NOTEQUAL:
                      A = new o((0 !== A.cmp(o.Zero)) + 0);
                      break;
                  }
                  (this.stack.pop(), this.stack.push(A.toScriptNumBuffer()));
                  break;
                case s.OP_ADD:
                case s.OP_SUB:
                case s.OP_MOD:
                case s.OP_MUL:
                case s.OP_DIV:
                case s.OP_BOOLAND:
                case s.OP_BOOLOR:
                case s.OP_NUMEQUAL:
                case s.OP_NUMEQUALVERIFY:
                case s.OP_NUMNOTEQUAL:
                case s.OP_LESSTHAN:
                case s.OP_GREATERTHAN:
                case s.OP_LESSTHANOREQUAL:
                case s.OP_GREATERTHANOREQUAL:
                case s.OP_MIN:
                case s.OP_MAX:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  switch (
                    ((w = o.fromScriptNumBuffer(r(-2), _, y)),
                    (R = o.fromScriptNumBuffer(r(-1), _, y)),
                    (A = new o(0)),
                    M)
                  ) {
                    case s.OP_ADD:
                      A = w.safeAdd(R, y);
                      break;
                    case s.OP_SUB:
                      A = w.safeSub(R, y);
                      break;
                    case s.OP_DIV:
                      if (0 == R)
                        return ((this.errstr = "SCRIPT_ERR_DIV_BY_ZERO"), !1);
                      A = w.div(R);
                      break;
                    case s.OP_MUL:
                      A = w.safeMul(R, y);
                      break;
                    case s.OP_MOD:
                      if (0 == R)
                        return ((this.errstr = "SCRIPT_ERR_DIV_BY_ZERO"), !1);
                      A = w.mod(R);
                      break;
                    case s.OP_BOOLAND:
                      A = new o(
                        (0 !== w.cmp(o.Zero) && 0 !== R.cmp(o.Zero)) + 0,
                      );
                      break;
                    case s.OP_BOOLOR:
                      A = new o(
                        (0 !== w.cmp(o.Zero) || 0 !== R.cmp(o.Zero)) + 0,
                      );
                      break;
                    case s.OP_NUMEQUAL:
                      A = new o((0 === w.cmp(R)) + 0);
                      break;
                    case s.OP_NUMEQUALVERIFY:
                      A = new o((0 === w.cmp(R)) + 0);
                      break;
                    case s.OP_NUMNOTEQUAL:
                      A = new o((0 !== w.cmp(R)) + 0);
                      break;
                    case s.OP_LESSTHAN:
                      A = new o((w.cmp(R) < 0) + 0);
                      break;
                    case s.OP_GREATERTHAN:
                      A = new o((w.cmp(R) > 0) + 0);
                      break;
                    case s.OP_LESSTHANOREQUAL:
                      A = new o((w.cmp(R) <= 0) + 0);
                      break;
                    case s.OP_GREATERTHANOREQUAL:
                      A = new o((w.cmp(R) >= 0) + 0);
                      break;
                    case s.OP_MIN:
                      A = w.cmp(R) < 0 ? w : R;
                      break;
                    case s.OP_MAX:
                      A = w.cmp(R) > 0 ? w : R;
                      break;
                  }
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(A.toScriptNumBuffer()),
                    M === s.OP_NUMEQUALVERIFY)
                  ) {
                    if (!d.castToBool(r(-1)))
                      return ((this.errstr = "SCRIPT_ERR_NUMEQUALVERIFY"), !1);
                    this.stack.pop();
                  }
                  break;
                case s.OP_WITHIN:
                  if (this.stack.length < 3)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((w = o.fromScriptNumBuffer(r(-3), _, y)),
                    (R = o.fromScriptNumBuffer(r(-2), _, y)));
                  var q = o.fromScriptNumBuffer(r(-1), _, y);
                  ((L = R.cmp(w) <= 0 && w.cmp(q) < 0),
                    this.stack.pop(),
                    this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(L ? d.true : d.false));
                  break;
                case s.OP_RIPEMD160:
                case s.OP_SHA1:
                case s.OP_SHA256:
                case s.OP_HASH160:
                case s.OP_HASH256:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var W;
                  ((E = r(-1)),
                    M === s.OP_RIPEMD160
                      ? (W = u.ripemd160(E))
                      : M === s.OP_SHA1
                        ? (W = u.sha1(E))
                        : M === s.OP_SHA256
                          ? (W = u.sha256(E))
                          : M === s.OP_HASH160
                            ? (W = u.sha256ripemd160(E))
                            : M === s.OP_HASH256 && (W = u.sha256sha256(E)),
                    this.stack.pop(),
                    this.stack.push(W));
                  break;
                case s.OP_CODESEPARATOR:
                  this.pbegincodehash = this.pc;
                  break;
                case s.OP_CHECKSIG:
                case s.OP_CHECKSIGVERIFY:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (
                    ((N = r(-2)),
                    (B = r(-1)),
                    !this.checkTxSignatureEncoding(N) ||
                      !this.checkPubkeyEncoding(B))
                  )
                    return !1;
                  x = new n().set({
                    chunks: this.script.chunks.slice(this.pbegincodehash),
                  });
                  var Z = new n().add(N);
                  x.findAndDelete(Z);
                  try {
                    ((U = a.fromTxFormat(N)),
                      (F = h.fromBuffer(B, !1)),
                      (H = U.isSchnorr
                        ? this.tx.verifySignature(
                            U,
                            F,
                            this.nin,
                            x,
                            this.satoshisBN,
                            this.flags,
                            "schnorr",
                          )
                        : this.tx.verifySignature(
                            U,
                            F,
                            this.nin,
                            x,
                            this.satoshisBN,
                            this.flags,
                          )));
                  } catch (_t) {
                    H = !1;
                  }
                  if (
                    (N.length && (this.nSigChecks += 1),
                    !H && this.flags & d.SCRIPT_VERIFY_NULLFAIL && N.length)
                  )
                    return ((this.errstr = "SCRIPT_ERR_NULLFAIL"), !1);
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(H ? d.true : d.false),
                    M === s.OP_CHECKSIGVERIFY)
                  ) {
                    if (!H)
                      return ((this.errstr = "SCRIPT_ERR_CHECKSIGVERIFY"), !1);
                    this.stack.pop();
                  }
                  break;
                case s.OP_CHECKDATASIG:
                case s.OP_CHECKDATASIGVERIFY:
                  if (this.stack.length < 3)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (
                    ((N = r(-3)),
                    (C = r(-2)),
                    (B = r(-1)),
                    !this.checkDataSignatureEncoding(N) ||
                      !this.checkPubkeyEncoding(B))
                  )
                    return !1;
                  H = !1;
                  try {
                    ((U = a.fromDataFormat(N)),
                      (F = h.fromBuffer(B, !1)),
                      (W = u.sha256(C)),
                      (H = U.isSchnorr
                        ? f.verify(W, U, F, "big")
                        : c.verify(W, U, F, "big")));
                  } catch (_t) {
                    H = !1;
                  }
                  if (
                    (N.length && (this.nSigChecks += 1),
                    !H && this.flags & d.SCRIPT_VERIFY_NULLFAIL && N.length)
                  )
                    return ((this.errstr = "SCRIPT_ERR_NULLFAIL"), !1);
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(H ? d.true : d.false),
                    M === s.OP_CHECKDATASIGVERIFY)
                  ) {
                    if (!H)
                      return (
                        (this.errstr = "SCRIPT_ERR_CHECKDATASIGVERIFY"),
                        !1
                      );
                    this.stack.pop();
                  }
                  break;
                case s.OP_REVERSEBYTES:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  P = r(-1);
                  var Q = e.from(P).reverse();
                  (this.stack.pop(), this.stack.push(Q));
                  break;
                case s.OP_CHECKMULTISIG:
                case s.OP_CHECKMULTISIGVERIFY:
                  {
                    j = 1;
                    let t = j + 1;
                    if (this.stack.length < j)
                      return (
                        (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                        !1
                      );
                    var J = o.fromScriptNumBuffer(r(-j), _).toNumber(),
                      $ = t + J;
                    if (J < 0 || J > 20)
                      return ((this.errstr = "SCRIPT_ERR_PUBKEY_COUNT"), !1);
                    if (((this.nOpCount += J), this.nOpCount > 201))
                      return ((this.errstr = "SCRIPT_ERR_OP_COUNT"), !1);
                    var tt = ++j,
                      et = $ + 1;
                    j += J;
                    var rt = J + 2;
                    if (this.stack.length < j)
                      return (
                        (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                        !1
                      );
                    var it = o.fromScriptNumBuffer(r(-$), _).toNumber(),
                      nt = et + it;
                    if (it < 0 || it > J)
                      return ((this.errstr = "SCRIPT_ERR_SIG_COUNT"), !1);
                    var st = ++j;
                    if (((j += it), this.stack.length < nt))
                      return (
                        (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                        !1
                      );
                    if (
                      ((x = new n().set({
                        chunks: this.script.chunks.slice(this.pbegincodehash),
                      })),
                      (H = !0),
                      this.flags & d.SCRIPT_ENABLE_SCHNORR_MULTISIG &&
                        0 !== r(-nt).length)
                    ) {
                      let e = r(-nt),
                        i = g(e, J);
                      i["result"] || (H = !1);
                      let n = new Uint8Array([it]),
                        s = Uint32Array.from(n);
                      m(i["bitfield"]) !== s[0] &&
                        ((this.errstr = "INVALID_BIT_COUNT"), (H = !1));
                      var ot = t + J - 1,
                        ut = et + it - 1;
                      let o = 0;
                      for (let t = 0; t < it; t++, o++) {
                        i["bitfield"] >> o === 0 &&
                          ((this.errstr = "INVALID_BIT_RANGE"), (H = !1));
                        while (0 == ((i["bitfield"] >> o) & 1)) {
                          if (o >= J) {
                            ((this.errstr = "wrong"), (H = !1));
                            break;
                          }
                          o++;
                        }
                        o >= J && ((this.errstr = "PUBKEY_COUNT"), (H = !1));
                        let e = r(-ut + t),
                          n = r(-ot + o);
                        (this.checkRawSignatureEncoding(e) &&
                          this.checkPubkeyEncoding(n)) ||
                          (H = !1);
                        let s = a.fromTxFormat(e),
                          u = h.fromBuffer(n, !1),
                          c = this.tx.verifySignature(
                            s,
                            u,
                            this.nin,
                            x,
                            this.satoshisBN,
                            this.flags,
                            "schnorr",
                          );
                        (c || ((this.errstr = "SIG_NULLFAIL"), (H = !1)),
                          e.length && (this.nSigChecks += 1));
                      }
                      i["bitfield"] >> o != 0 &&
                        ((this.errstr = "INVALID_BIT_COUNT"), (H = !1));
                    } else {
                      for (var at = 0; at < it; at++)
                        ((N = r(-st - at)), x.findAndDelete(new n().add(N)));
                      let t = it,
                        e = J;
                      while (H && t > 0) {
                        if (((N = r(-st - (it - t))), 65 === N.length))
                          return !1;
                        if (
                          ((B = r(-tt - (J - e))),
                          !this.checkTxSignatureEncoding(N) ||
                            !this.checkPubkeyEncoding(B))
                        )
                          return !1;
                        var ht;
                        try {
                          ((U = a.fromTxFormat(N)),
                            (F = h.fromBuffer(B, !1)),
                            (ht = this.tx.verifySignature(
                              U,
                              F,
                              this.nin,
                              x,
                              this.satoshisBN,
                              this.flags,
                            )));
                        } catch (_t) {
                          ht = !1;
                        }
                        (ht && t--, e--, t > e && (H = !1));
                      }
                      let i = !0;
                      for (let n = 0; n < it; n++)
                        if (r(-st - n) && r(-st - n).length) {
                          i = !1;
                          break;
                        }
                      i || (this.nSigChecks += J);
                    }
                    while (j-- > 1) {
                      if (
                        !H &&
                        this.flags & d.SCRIPT_VERIFY_NULLFAIL &&
                        !rt &&
                        r(-1).length
                      )
                        return ((this.errstr = "SCRIPT_ERR_NULLFAIL"), !1);
                      (rt > 0 && rt--, this.stack.pop());
                    }
                    if (this.stack.length < 1)
                      return (
                        (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                        !1
                      );
                    if (this.flags & d.SCRIPT_VERIFY_NULLDUMMY && r(-1).length)
                      return ((this.errstr = "SCRIPT_ERR_SIG_NULLDUMMY"), !1);
                    if (
                      (this.stack.pop(),
                      this.stack.push(H ? d.true : d.false),
                      M === s.OP_CHECKMULTISIGVERIFY)
                    ) {
                      if (!H)
                        return (
                          (this.errstr = "SCRIPT_ERR_CHECKMULTISIGVERIFY"),
                          !1
                        );
                      this.stack.pop();
                    }
                  }
                  break;
                case s.OP_CAT:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (
                    ((P = r(-2)),
                    (O = r(-1)),
                    P.length + O.length > d.MAX_SCRIPT_ELEMENT_SIZE)
                  )
                    return ((this.errstr = "SCRIPT_ERR_PUSH_SIZE"), !1);
                  ((this.stack[this.stack.length - 2] = e.concat([P, O])),
                    this.stack.pop());
                  break;
                case s.OP_SPLIT:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  P = r(-2);
                  var ct = o.fromScriptNumBuffer(r(-1), _).toNumber();
                  if (ct < 0 || ct > P.length)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_SPLIT_RANGE"),
                      !1
                    );
                  var ft = e.from(P);
                  ((this.stack[this.stack.length - 2] = ft.slice(0, ct)),
                    (this.stack[this.stack.length - 1] = ft.slice(ct)));
                  break;
                case s.OP_NUM2BIN:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var pt = o.fromScriptNumBuffer(r(-1), _).toNumber();
                  if (pt > d.MAX_SCRIPT_ELEMENT_SIZE)
                    return ((this.errstr = "SCRIPT_ERR_PUSH_SIZE"), !1);
                  this.stack.pop();
                  var dt = r(-1);
                  if (((dt = d._minimallyEncode(dt)), dt.length > pt))
                    return (
                      (this.errstr = "SCRIPT_ERR_IMPOSSIBLE_ENCODING"),
                      !1
                    );
                  if (dt.length == pt) {
                    this.stack[this.stack.length - 1] = dt;
                    break;
                  }
                  var lt = 0;
                  dt.length > 0 &&
                    ((lt = 128 & dt[dt.length - 1]),
                    (dt[dt.length - 1] &= 127));
                  var gt = e.alloc(pt);
                  dt.copy(gt, 0);
                  var mt = dt.length - 1;
                  while (mt++ < pt - 2) gt[mt] = 0;
                  ((gt[mt] = lt), (this.stack[this.stack.length - 1] = gt));
                  break;
                case s.OP_BIN2NUM:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (
                    ((P = r(-1)),
                    (O = d._minimallyEncode(P)),
                    (this.stack[this.stack.length - 1] = O),
                    !d._isMinimallyEncoded(O, y))
                  )
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_NUMBER_RANGE"),
                      !1
                    );
                  break;
                case s.OP_INPUTINDEX:
                case s.OP_ACTIVEBYTECODE:
                case s.OP_TXVERSION:
                case s.OP_TXINPUTCOUNT:
                case s.OP_TXOUTPUTCOUNT:
                case s.OP_TXLOCKTIME:
                  if (!I) return ((this.errstr = "SCRIPT_ERR_BAD_OPCODE"), !1);
                  if (!this.tx || !this.tx.inputs.every((t) => t.output))
                    return (
                      (this.errstr = "SCRIPT_ERR_CONTEXT_NOT_PRESENT"),
                      !1
                    );
                  switch (M) {
                    case s.OP_INPUTINDEX:
                      {
                        const t = o.fromNumber(this.nin);
                        this.stack.push(t.toScriptNumBuffer());
                      }
                      break;
                    case s.OP_ACTIVEBYTECODE:
                      ((x = new n().set({
                        chunks: this.script.chunks.slice(this.pbegincodehash),
                      })),
                        this.stack.push(x.toBuffer()));
                      break;
                    case s.OP_TXVERSION:
                      {
                        const t = o.fromNumber(this.tx.version);
                        this.stack.push(t.toScriptNumBuffer());
                      }
                      break;
                    case s.OP_TXINPUTCOUNT:
                      {
                        const t = o.fromNumber(this.tx.inputs.length);
                        this.stack.push(t.toScriptNumBuffer());
                      }
                      break;
                    case s.OP_TXOUTPUTCOUNT:
                      {
                        const t = o.fromNumber(this.tx.outputs.length);
                        this.stack.push(t.toScriptNumBuffer());
                      }
                      break;
                    case s.OP_TXLOCKTIME:
                      {
                        const t = o.fromNumber(this.tx.nLockTime);
                        this.stack.push(t.toScriptNumBuffer());
                      }
                      break;
                    default:
                      return ((this.errstr = "SCRIPT_ERR_BAD_OPCODE"), !1);
                  }
                  break;
                case s.OP_UTXOVALUE:
                case s.OP_UTXOBYTECODE:
                case s.OP_OUTPOINTTXHASH:
                case s.OP_OUTPOINTINDEX:
                case s.OP_INPUTBYTECODE:
                case s.OP_INPUTSEQUENCENUMBER:
                case s.OP_OUTPUTVALUE:
                case s.OP_OUTPUTBYTECODE:
                  {
                    if (!I)
                      return ((this.errstr = "SCRIPT_ERR_BAD_OPCODE"), !1);
                    if (!this.tx || !this.tx.inputs.every((t) => t.output))
                      return (
                        (this.errstr = "SCRIPT_ERR_CONTEXT_NOT_PRESENT"),
                        !1
                      );
                    const t = o.fromScriptNumBuffer(r(-1), _, y),
                      e = t.toNumber();
                    this.stack.pop();
                    const i = [s.OP_OUTPUTVALUE, s.OP_OUTPUTBYTECODE].includes(
                        M,
                      )
                        ? "OUTPUT"
                        : "INPUT",
                      n =
                        "OUTPUT" === i
                          ? this.tx.outputs.length
                          : this.tx.inputs.length;
                    if (e < 0 || e >= n)
                      return (
                        (this.errstr = `SCRIPT_ERR_INVALID_TX_${i}_INDEX`),
                        !1
                      );
                    switch (M) {
                      case s.OP_UTXOVALUE:
                        {
                          const t = this.tx.inputs[e].output.satoshisBN;
                          if (t.getSize() > y)
                            return (
                              (this.errstr = "SCRIPT_ERR_INTEGER_SIZE"),
                              !1
                            );
                          this.stack.push(t.toScriptNumBuffer());
                        }
                        break;
                      case s.OP_UTXOBYTECODE:
                        {
                          const t = this.tx.inputs[e].output.script.toBuffer();
                          if (t.length > d.MAX_SCRIPT_ELEMENT_SIZE)
                            return ((this.errstr = "SCRIPT_ERR_PUSH_SIZE"), !1);
                          this.stack.push(t);
                        }
                        break;
                      case s.OP_OUTPOINTTXHASH:
                        {
                          const t = new p();
                          (t.writeReverse(this.tx.inputs[e].prevTxId),
                            this.stack.push(t.toBuffer()));
                        }
                        break;
                      case s.OP_OUTPOINTINDEX:
                        {
                          const t = o.fromNumber(this.tx.inputs[e].outputIndex);
                          this.stack.push(t.toScriptNumBuffer());
                        }
                        break;
                      case s.OP_INPUTBYTECODE:
                        {
                          const t = this.tx.inputs[e].script.toBuffer();
                          if (t.length > d.MAX_SCRIPT_ELEMENT_SIZE)
                            return ((this.errstr = "SCRIPT_ERR_PUSH_SIZE"), !1);
                          this.stack.push(t);
                        }
                        break;
                      case s.OP_INPUTSEQUENCENUMBER:
                        {
                          const t = o.fromNumber(
                            this.tx.inputs[e].sequenceNumber,
                          );
                          this.stack.push(t.toScriptNumBuffer());
                        }
                        break;
                      case s.OP_OUTPUTVALUE:
                        {
                          const t = this.tx.outputs[e].satoshisBN;
                          if (t.getSize() > y)
                            return (
                              (this.errstr = "SCRIPT_ERR_INTEGER_SIZE"),
                              !1
                            );
                          this.stack.push(t.toScriptNumBuffer());
                        }
                        break;
                      case s.OP_OUTPUTBYTECODE:
                        {
                          const t = this.tx.outputs[e].script.toBuffer();
                          if (t.length > d.MAX_SCRIPT_ELEMENT_SIZE)
                            return ((this.errstr = "SCRIPT_ERR_PUSH_SIZE"), !1);
                          this.stack.push(t);
                        }
                        break;
                      default:
                        return ((this.errstr = "SCRIPT_ERR_BAD_OPCODE"), !1);
                    }
                  }
                  break;
                default:
                  return ((this.errstr = "SCRIPT_ERR_BAD_OPCODE"), !1);
              }
            return !0;
          }));
      }).call(this, r(2).Buffer);
    },
    6889: function (t, e, r) {
      "use strict";
      var i = r(2856),
        n = r(2866),
        s = r(3035),
        o = r(3235),
        u = r(3846),
        a = r(5698);
      function h(t) {
        if (!(this instanceof h)) return new h(t);
        n.checkArgument(
          i.isObject(t),
          "Must provide an object from where to extract data",
        );
        var e = t.address ? new u(t.address) : void 0,
          r = t.txid ? t.txid : t.txId;
        if (!r || !s.isHexaString(r) || r.length > 64)
          throw new Error("Invalid TXID in object", t);
        var c = i.isUndefined(t.vout) ? t.outputIndex : t.vout;
        if (!i.isNumber(c))
          throw new Error("Invalid outputIndex, received " + c);
        n.checkArgument(
          !i.isUndefined(t.scriptPubKey) ||
            !i.isUndefined(t.script) ||
            !i.isUndefined(e),
          "Must provide the scriptPubKey, script, or address for that output!",
        );
        var f = new o(t.scriptPubKey || t.script || o.fromAddress(e));
        n.checkArgument(
          !i.isUndefined(t.amount) || !i.isUndefined(t.satoshis),
          "Must provide an amount for the output",
        );
        var p = i.isUndefined(t.amount)
          ? t.satoshis
          : new a.fromBTC(t.amount).toSatoshis();
        (n.checkArgument(i.isNumber(p), "Amount must be a number"),
          s.defineImmutable(this, {
            address: e,
            txId: r,
            outputIndex: c,
            script: f,
            satoshis: p,
          }));
      }
      ((h.prototype.inspect = function () {
        return (
          "<UnspentOutput: " +
          this.txId +
          ":" +
          this.outputIndex +
          ", satoshis: " +
          this.satoshis +
          ", address: " +
          this.address +
          ">"
        );
      }),
        (h.prototype.toString = function () {
          return this.txId + ":" + this.outputIndex;
        }),
        (h.fromObject = function (t) {
          return new h(t);
        }),
        (h.prototype.toObject = h.prototype.toJSON =
          function () {
            return {
              address: this.address ? this.address.toString() : void 0,
              txid: this.txId,
              vout: this.outputIndex,
              scriptPubKey: this.script.toBuffer().toString("hex"),
              amount: a.fromSatoshis(this.satoshis).toBTC(),
            };
          }),
        (t.exports = h));
    },
    6890: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(4865),
          s = r(2935),
          o = r(3618),
          u = r(3357),
          a = r(3071),
          h = (r(3035), r(4864)),
          c = r(3234),
          f = r(2866);
        function p(t) {
          if (!(this instanceof p)) return new p(t);
          var e = {};
          if (s.isBuffer(t)) e = p._fromBufferReader(o(t));
          else {
            if (!i.isObject(t))
              throw new TypeError("Unrecognized argument for MerkleBlock");
            var r;
            ((r = t.header instanceof n ? t.header : n.fromObject(t.header)),
              (e = {
                header: r,
                numTransactions: t.numTransactions,
                hashes: t.hashes,
                flags: t.flags,
              }));
          }
          return (
            i.extend(this, e),
            (this._flagBitsUsed = 0),
            (this._hashesUsed = 0),
            this
          );
        }
        ((p.fromBuffer = function (t) {
          return p.fromBufferReader(o(t));
        }),
          (p.fromBufferReader = function (t) {
            return new p(p._fromBufferReader(t));
          }),
          (p.prototype.toBuffer = function () {
            return this.toBufferWriter().concat();
          }),
          (p.prototype.toBufferWriter = function (t) {
            (t || (t = new u()),
              t.write(this.header.toBuffer()),
              t.writeUInt32LE(this.numTransactions),
              t.writeVarintNum(this.hashes.length));
            for (var r = 0; r < this.hashes.length; r++)
              t.write(e.from(this.hashes[r], "hex"));
            for (
              t.writeVarintNum(this.flags.length), r = 0;
              r < this.flags.length;
              r++
            )
              t.writeUInt8(this.flags[r]);
            return t;
          }),
          (p.prototype.toObject = p.prototype.toJSON =
            function () {
              return {
                header: this.header.toObject(),
                numTransactions: this.numTransactions,
                hashes: this.hashes,
                flags: this.flags,
              };
            }),
          (p.prototype.validMerkleTree = function () {
            if (
              (f.checkState(
                i.isArray(this.flags),
                "MerkleBlock flags is not an array",
              ),
              f.checkState(
                i.isArray(this.hashes),
                "MerkleBlock hashes is not an array",
              ),
              this.hashes.length > this.numTransactions)
            )
              return !1;
            if (8 * this.flags.length < this.hashes.length) return !1;
            var t = this._calcTreeHeight(),
              e = { hashesUsed: 0, flagBitsUsed: 0 },
              r = this._traverseMerkleTree(t, 0, e);
            return (
              e.hashesUsed === this.hashes.length &&
              s.equals(r, this.header.merkleRoot)
            );
          }),
          (p.prototype.filterdTxsHash = function () {
            if (
              (f.checkState(
                i.isArray(this.flags),
                "MerkleBlock flags is not an array",
              ),
              f.checkState(
                i.isArray(this.hashes),
                "MerkleBlock hashes is not an array",
              ),
              this.hashes.length > this.numTransactions)
            )
              throw new c.MerkleBlock.InvalidMerkleTree();
            if (8 * this.flags.length < this.hashes.length)
              throw new c.MerkleBlock.InvalidMerkleTree();
            if (1 === this.hashes.length) return [];
            var t = this._calcTreeHeight(),
              e = { hashesUsed: 0, flagBitsUsed: 0 },
              r = this._traverseMerkleTree(t, 0, e, !0);
            if (e.hashesUsed !== this.hashes.length)
              throw new c.MerkleBlock.InvalidMerkleTree();
            return r;
          }),
          (p.prototype._traverseMerkleTree = function (t, r, i, n) {
            ((i = i || {}),
              (i.txs = i.txs || []),
              (i.flagBitsUsed = i.flagBitsUsed || 0),
              (i.hashesUsed = i.hashesUsed || 0));
            n = n || !1;
            if (i.flagBitsUsed > 8 * this.flags.length) return null;
            var s =
              (this.flags[i.flagBitsUsed >> 3] >>> (7 & i.flagBitsUsed++)) & 1;
            if (0 !== t && s) {
              var o = this._traverseMerkleTree(t - 1, 2 * r, i),
                u = o;
              return (
                2 * r + 1 < this._calcTreeWidth(t - 1) &&
                  (u = this._traverseMerkleTree(t - 1, 2 * r + 1, i)),
                n ? i.txs : a.sha256sha256(new e.concat([o, u]))
              );
            }
            if (i.hashesUsed >= this.hashes.length) return null;
            var h = this.hashes[i.hashesUsed++];
            return (0 === t && s && i.txs.push(h), e.from(h, "hex"));
          }),
          (p.prototype._calcTreeWidth = function (t) {
            return (this.numTransactions + (1 << t) - 1) >> t;
          }),
          (p.prototype._calcTreeHeight = function () {
            var t = 0;
            while (this._calcTreeWidth(t) > 1) t++;
            return t;
          }),
          (p.prototype.hasTransaction = function (t) {
            (f.checkArgument(!i.isUndefined(t), "tx cannot be undefined"),
              f.checkArgument(
                t instanceof h || "string" === typeof t,
                'Invalid tx given, tx must be a "string" or "Transaction"',
              ));
            var r = t;
            t instanceof h &&
              (r = s.reverse(e.from(t.id, "hex")).toString("hex"));
            var n = [],
              o = this._calcTreeHeight();
            return (
              this._traverseMerkleTree(o, 0, { txs: n }),
              -1 !== n.indexOf(r)
            );
          }),
          (p._fromBufferReader = function (t) {
            f.checkState(!t.finished(), "No merkleblock data received");
            var e = {};
            ((e.header = n.fromBufferReader(t)),
              (e.numTransactions = t.readUInt32LE()));
            var r = t.readVarintNum();
            e.hashes = [];
            for (var i = 0; i < r; i++)
              e.hashes.push(t.read(32).toString("hex"));
            var s = t.readVarintNum();
            for (e.flags = [], i = 0; i < s; i++) e.flags.push(t.readUInt8());
            return e;
          }),
          (p.fromObject = function (t) {
            return new p(t);
          }),
          (t.exports = p));
      }).call(this, r(2).Buffer);
    },
    6891: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(229),
          n = r(2),
          s = r(2856),
          o = r(2866),
          u = r(3034),
          a = r(4862),
          h = r(4583),
          c = r(3071),
          f = r(3617),
          Point = r(3845),
          p = r(4861),
          d = r(4584),
          l = r(3234),
          g = l.HDPrivateKey,
          m = r(2935),
          _ = r(3035),
          S = 128,
          I = 1 / 8,
          y = 512;
        function E(t) {
          if (t instanceof E) return t;
          if (!(this instanceof E)) return new E(t);
          if (!t) return this._generateRandomly();
          if (f.get(t)) return this._generateRandomly(t);
          if (s.isString(t) || m.isBuffer(t))
            if (E.isValidSerialized(t)) this._buildFromSerialized(t);
            else if (_.isValidJSON(t)) this._buildFromJSON(t);
            else {
              if (!m.isBuffer(t) || !E.isValidSerialized(t.toString()))
                throw E.getSerializedError(t);
              this._buildFromSerialized(t.toString());
            }
          else {
            if (!s.isObject(t)) throw new g.UnrecognizedArgument(t);
            this._buildFromObject(t);
          }
        }
        ((E.isValidPath = function (t, e) {
          if (s.isString(t)) {
            var r = E._getDerivationIndexes(t);
            return null !== r && s.every(r, E.isValidPath);
          }
          return (
            !!s.isNumber(t) &&
            (t < E.Hardened && !0 === e && (t += E.Hardened),
            t >= 0 && t < E.MaxIndex)
          );
        }),
          (E._getDerivationIndexes = function (t) {
            var e = t.split("/");
            if (s.includes(E.RootElementAlias, t)) return [];
            if (!s.includes(E.RootElementAlias, e[0])) return null;
            var r = e.slice(1).map(function (t) {
              var e = "'" === t.slice(-1);
              if ((e && (t = t.slice(0, -1)), !t || "-" === t[0])) return NaN;
              var r = +t;
              return (e && (r += E.Hardened), r);
            });
            return s.some(r, isNaN) ? null : r;
          }),
          (E.prototype.derive = function (t, e) {
            return this.deriveNonCompliantChild(t, e);
          }),
          (E.prototype.deriveChild = function (t, e) {
            if (s.isNumber(t)) return this._deriveWithNumber(t, e);
            if (s.isString(t)) return this._deriveFromString(t);
            throw new g.InvalidDerivationArgument(t);
          }),
          (E.prototype.deriveNonCompliantChild = function (t, e) {
            if (s.isNumber(t)) return this._deriveWithNumber(t, e, !0);
            if (s.isString(t)) return this._deriveFromString(t, !0);
            throw new g.InvalidDerivationArgument(t);
          }),
          (E.prototype._deriveWithNumber = function (t, r, n) {
            if (!E.isValidPath(t, r)) throw new g.InvalidPath(t);
            ((r = t >= E.Hardened || r),
              t < E.Hardened && !0 === r && (t += E.Hardened));
            var s,
              o = m.integerAsBuffer(t);
            if (r && n) {
              var a = this.privateKey.bn.toBuffer();
              s = m.concat([e.from([0]), a, o]);
            } else if (r) {
              var h = this.privateKey.bn.toBuffer({ size: 32 });
              (i(
                32 === h.length,
                "length of private key buffer is expected to be 32 bytes",
              ),
                (s = m.concat([e.from([0]), h, o])));
            } else s = m.concat([this.publicKey.toBuffer(), o]);
            var f = c.sha512hmac(s, this._buffers.chainCode),
              d = u.fromBuffer(f.slice(0, 32), { size: 32 }),
              l = f.slice(32, 64),
              _ = d
                .add(this.privateKey.toBigNumber())
                .umod(Point.getN())
                .toBuffer({ size: 32 });
            if (!p.isValid(_)) return this._deriveWithNumber(t + 1, null, n);
            var S = new E({
              network: this.network,
              depth: this.depth + 1,
              parentFingerPrint: this.fingerPrint,
              childIndex: t,
              chainCode: l,
              privateKey: _,
            });
            return S;
          }),
          (E.prototype._deriveFromString = function (t, e) {
            if (!E.isValidPath(t)) throw new g.InvalidPath(t);
            var r = E._getDerivationIndexes(t),
              i = r.reduce(function (t, r) {
                return t._deriveWithNumber(r, null, e);
              }, this);
            return i;
          }),
          (E.isValidSerialized = function (t, e) {
            return !E.getSerializedError(t, e);
          }),
          (E.getSerializedError = function (t, e) {
            if (!s.isString(t) && !m.isBuffer(t))
              return new g.UnrecognizedArgument("Expected string or buffer");
            if (!a.validCharacters(t))
              return new l.InvalidB58Char("(unknown)", t);
            try {
              t = h.decode(t);
            } catch (i) {
              return new l.InvalidB58Checksum(t);
            }
            if (t.length !== E.DataLength) return new g.InvalidLength(t);
            if (!s.isUndefined(e)) {
              var r = E._validateNetwork(t, e);
              if (r) return r;
            }
            return null;
          }),
          (E._validateNetwork = function (t, e) {
            var r = f.get(e);
            if (!r) return new l.InvalidNetworkArgument(e);
            var i = t.slice(0, 4);
            return m.integerFromBuffer(i) !== r.xprivkey
              ? new l.InvalidNetwork(i)
              : null;
          }),
          (E.fromString = function (t) {
            return (
              o.checkArgument(s.isString(t), "No valid string was provided"),
              new E(t)
            );
          }),
          (E.fromObject = function (t) {
            return (
              o.checkArgument(s.isObject(t), "No valid argument was provided"),
              new E(t)
            );
          }),
          (E.prototype._buildFromJSON = function (t) {
            return this._buildFromObject(JSON.parse(t));
          }),
          (E.prototype._buildFromObject = function (t) {
            var r = {
              version: t.network
                ? m.integerAsBuffer(f.get(t.network).xprivkey)
                : t.version,
              depth: s.isNumber(t.depth)
                ? m.integerAsSingleByteBuffer(t.depth)
                : t.depth,
              parentFingerPrint: s.isNumber(t.parentFingerPrint)
                ? m.integerAsBuffer(t.parentFingerPrint)
                : t.parentFingerPrint,
              childIndex: s.isNumber(t.childIndex)
                ? m.integerAsBuffer(t.childIndex)
                : t.childIndex,
              chainCode: s.isString(t.chainCode)
                ? e.from(t.chainCode, "hex")
                : t.chainCode,
              privateKey:
                s.isString(t.privateKey) && _.isHexa(t.privateKey)
                  ? e.from(t.privateKey, "hex")
                  : t.privateKey,
              checksum: t.checksum
                ? t.checksum.length
                  ? t.checksum
                  : m.integerAsBuffer(t.checksum)
                : void 0,
            };
            return this._buildFromBuffers(r);
          }),
          (E.prototype._buildFromSerialized = function (t) {
            var e = h.decode(t),
              r = {
                version: e.slice(E.VersionStart, E.VersionEnd),
                depth: e.slice(E.DepthStart, E.DepthEnd),
                parentFingerPrint: e.slice(
                  E.ParentFingerPrintStart,
                  E.ParentFingerPrintEnd,
                ),
                childIndex: e.slice(E.ChildIndexStart, E.ChildIndexEnd),
                chainCode: e.slice(E.ChainCodeStart, E.ChainCodeEnd),
                privateKey: e.slice(E.PrivateKeyStart, E.PrivateKeyEnd),
                checksum: e.slice(E.ChecksumStart, E.ChecksumEnd),
                xprivkey: t,
              };
            return this._buildFromBuffers(r);
          }),
          (E.prototype._generateRandomly = function (t) {
            return E.fromSeed(d.getRandomBuffer(64), t);
          }),
          (E.fromSeed = function (t, r) {
            if ((_.isHexaString(t) && (t = e.from(t, "hex")), !e.isBuffer(t)))
              throw new g.InvalidEntropyArgument(t);
            if (t.length < S * I)
              throw new g.InvalidEntropyArgument.NotEnoughEntropy(t);
            if (t.length > y * I)
              throw new g.InvalidEntropyArgument.TooMuchEntropy(t);
            var i = c.sha512hmac(t, e.from("Bitcoin seed"));
            return new E({
              network: f.get(r) || f.defaultNetwork,
              depth: 0,
              parentFingerPrint: 0,
              childIndex: 0,
              privateKey: i.slice(0, 32),
              chainCode: i.slice(32, 64),
            });
          }),
          (E.prototype._calcHDPublicKey = function () {
            if (!this._hdPublicKey) {
              var t = r(6892);
              this._hdPublicKey = new t(this);
            }
          }),
          (E.prototype._buildFromBuffers = function (t) {
            (E._validateBufferArguments(t),
              _.defineImmutable(this, { _buffers: t }));
            var r = [
                t.version,
                t.depth,
                t.parentFingerPrint,
                t.childIndex,
                t.chainCode,
                m.emptyBuffer(1),
                t.privateKey,
              ],
              i = n.Buffer.concat(r);
            if (t.checksum && t.checksum.length) {
              if (t.checksum.toString() !== h.checksum(i).toString())
                throw new l.InvalidB58Checksum(i);
            } else t.checksum = h.checksum(i);
            var s,
              o = f.get(m.integerFromBuffer(t.version));
            ((s = h.encode(n.Buffer.concat(r))), (t.xprivkey = e.from(s)));
            var a = new p(u.fromBuffer(t.privateKey), o),
              d = a.toPublicKey(),
              g = E.ParentFingerPrintSize,
              S = c.sha256ripemd160(d.toBuffer()).slice(0, g);
            return (
              _.defineImmutable(this, {
                xprivkey: s,
                network: o,
                depth: m.integerFromSingleByteBuffer(t.depth),
                privateKey: a,
                publicKey: d,
                fingerPrint: S,
              }),
              (this._hdPublicKey = null),
              Object.defineProperty(this, "hdPublicKey", {
                configurable: !1,
                enumerable: !0,
                get: function () {
                  return (this._calcHDPublicKey(), this._hdPublicKey);
                },
              }),
              Object.defineProperty(this, "xpubkey", {
                configurable: !1,
                enumerable: !0,
                get: function () {
                  return (this._calcHDPublicKey(), this._hdPublicKey.xpubkey);
                },
              }),
              this
            );
          }),
          (E._validateBufferArguments = function (t) {
            var e = function (e, r) {
              var n = t[e];
              (i(m.isBuffer(n), e + " argument is not a buffer"),
                i(
                  n.length === r,
                  e +
                    " has not the expected size: found " +
                    n.length +
                    ", expected " +
                    r,
                ));
            };
            (e("version", E.VersionSize),
              e("depth", E.DepthSize),
              e("parentFingerPrint", E.ParentFingerPrintSize),
              e("childIndex", E.ChildIndexSize),
              e("chainCode", E.ChainCodeSize),
              e("privateKey", E.PrivateKeySize),
              t.checksum && t.checksum.length && e("checksum", E.CheckSumSize));
          }),
          (E.prototype.toString = function () {
            return this.xprivkey;
          }),
          (E.prototype.inspect = function () {
            return "<HDPrivateKey: " + this.xprivkey + ">";
          }),
          (E.prototype.toObject = E.prototype.toJSON =
            function () {
              return {
                network: f.get(
                  m.integerFromBuffer(this._buffers.version),
                  "xprivkey",
                ).name,
                depth: m.integerFromSingleByteBuffer(this._buffers.depth),
                fingerPrint: m.integerFromBuffer(this.fingerPrint),
                parentFingerPrint: m.integerFromBuffer(
                  this._buffers.parentFingerPrint,
                ),
                childIndex: m.integerFromBuffer(this._buffers.childIndex),
                chainCode: this._buffers.chainCode.toString("hex"),
                privateKey: this.privateKey.toBuffer().toString("hex"),
                checksum: m.integerFromBuffer(this._buffers.checksum),
                xprivkey: this.xprivkey,
              };
            }),
          (E.fromBuffer = function (t) {
            return new E(t.toString());
          }),
          (E.prototype.toBuffer = function () {
            return m.copy(this._buffers.xprivkey);
          }),
          (E.DefaultDepth = 0),
          (E.DefaultFingerprint = 0),
          (E.DefaultChildIndex = 0),
          (E.Hardened = 2147483648),
          (E.MaxIndex = 2 * E.Hardened),
          (E.RootElementAlias = ["m", "M", "m'", "M'"]),
          (E.VersionSize = 4),
          (E.DepthSize = 1),
          (E.ParentFingerPrintSize = 4),
          (E.ChildIndexSize = 4),
          (E.ChainCodeSize = 32),
          (E.PrivateKeySize = 32),
          (E.CheckSumSize = 4),
          (E.DataLength = 78),
          (E.SerializedByteSize = 82),
          (E.VersionStart = 0),
          (E.VersionEnd = E.VersionStart + E.VersionSize),
          (E.DepthStart = E.VersionEnd),
          (E.DepthEnd = E.DepthStart + E.DepthSize),
          (E.ParentFingerPrintStart = E.DepthEnd),
          (E.ParentFingerPrintEnd =
            E.ParentFingerPrintStart + E.ParentFingerPrintSize),
          (E.ChildIndexStart = E.ParentFingerPrintEnd),
          (E.ChildIndexEnd = E.ChildIndexStart + E.ChildIndexSize),
          (E.ChainCodeStart = E.ChildIndexEnd),
          (E.ChainCodeEnd = E.ChainCodeStart + E.ChainCodeSize),
          (E.PrivateKeyStart = E.ChainCodeEnd + 1),
          (E.PrivateKeyEnd = E.PrivateKeyStart + E.PrivateKeySize),
          (E.ChecksumStart = E.PrivateKeyEnd),
          (E.ChecksumEnd = E.ChecksumStart + E.CheckSumSize),
          i(E.ChecksumEnd === E.SerializedByteSize),
          (t.exports = E));
      }).call(this, r(2).Buffer);
    },
    6892: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2856),
          n = r(2866),
          s = r(3034),
          o = r(4862),
          u = r(4583),
          a = r(3071),
          h = r(6891),
          c = r(3617),
          Point = r(3845),
          f = r(3205),
          p = r(3234),
          d = p,
          l = p.HDPublicKey,
          g = r(229),
          m = r(3035),
          _ = r(2935);
        function S(t) {
          if (t instanceof S) return t;
          if (!(this instanceof S)) return new S(t);
          if (t) {
            if (i.isString(t) || _.isBuffer(t)) {
              var e = S.getSerializedError(t);
              if (e) {
                if (_.isBuffer(t) && !S.getSerializedError(t.toString()))
                  return this._buildFromSerialized(t.toString());
                if (e instanceof l.ArgumentIsPrivateExtended)
                  return new h(t).hdPublicKey;
                throw e;
              }
              return this._buildFromSerialized(t);
            }
            if (i.isObject(t))
              return t instanceof h
                ? this._buildFromPrivate(t)
                : this._buildFromObject(t);
            throw new l.UnrecognizedArgument(t);
          }
          throw new l.MustSupplyArgument();
        }
        ((S.isValidPath = function (t) {
          if (i.isString(t)) {
            var e = h._getDerivationIndexes(t);
            return null !== e && i.every(e, S.isValidPath);
          }
          return !!i.isNumber(t) && t >= 0 && t < S.Hardened;
        }),
          (S.prototype.derive = function (t, e) {
            return this.deriveChild(t, e);
          }),
          (S.prototype.deriveChild = function (t, e) {
            if (i.isNumber(t)) return this._deriveWithNumber(t, e);
            if (i.isString(t)) return this._deriveFromString(t);
            throw new l.InvalidDerivationArgument(t);
          }),
          (S.prototype._deriveWithNumber = function (t, e) {
            if (t >= S.Hardened || e)
              throw new l.InvalidIndexCantDeriveHardened();
            if (t < 0) throw new l.InvalidPath(t);
            var r,
              i = _.integerAsBuffer(t),
              n = _.concat([this.publicKey.toBuffer(), i]),
              o = a.sha512hmac(n, this._buffers.chainCode),
              u = s.fromBuffer(o.slice(0, 32), { size: 32 }),
              h = o.slice(32, 64);
            try {
              r = f.fromPoint(Point.getG().mul(u).add(this.publicKey.point));
            } catch (p) {
              return this._deriveWithNumber(t + 1);
            }
            var c = new S({
              network: this.network,
              depth: this.depth + 1,
              parentFingerPrint: this.fingerPrint,
              childIndex: t,
              chainCode: h,
              publicKey: r,
            });
            return c;
          }),
          (S.prototype._deriveFromString = function (t) {
            if (i.includes(t, "'"))
              throw new l.InvalidIndexCantDeriveHardened();
            if (!S.isValidPath(t)) throw new l.InvalidPath(t);
            var e = h._getDerivationIndexes(t),
              r = e.reduce(function (t, e) {
                return t._deriveWithNumber(e);
              }, this);
            return r;
          }),
          (S.isValidSerialized = function (t, e) {
            return i.isNull(S.getSerializedError(t, e));
          }),
          (S.getSerializedError = function (t, e) {
            if (!i.isString(t) && !_.isBuffer(t))
              return new l.UnrecognizedArgument("expected buffer or string");
            if (!o.validCharacters(t))
              return new d.InvalidB58Char("(unknown)", t);
            try {
              t = u.decode(t);
            } catch (s) {
              return new d.InvalidB58Checksum(t);
            }
            if (t.length !== S.DataSize) return new l.InvalidLength(t);
            if (!i.isUndefined(e)) {
              var r = S._validateNetwork(t, e);
              if (r) return r;
            }
            var n = _.integerFromBuffer(t.slice(0, 4));
            return n === c.livenet.xprivkey || n === c.testnet.xprivkey
              ? new l.ArgumentIsPrivateExtended()
              : null;
          }),
          (S._validateNetwork = function (t, e) {
            var r = c.get(e);
            if (!r) return new d.InvalidNetworkArgument(e);
            var i = t.slice(S.VersionStart, S.VersionEnd);
            return _.integerFromBuffer(i) !== r.xpubkey
              ? new d.InvalidNetwork(i)
              : null;
          }),
          (S.prototype._buildFromPrivate = function (t) {
            var e = i.clone(t._buffers),
              r = Point.getG().mul(s.fromBuffer(e.privateKey));
            return (
              (e.publicKey = Point.pointToCompressed(r)),
              (e.version = _.integerAsBuffer(
                c.get(_.integerFromBuffer(e.version)).xpubkey,
              )),
              (e.privateKey = void 0),
              (e.checksum = void 0),
              (e.xprivkey = void 0),
              this._buildFromBuffers(e)
            );
          }),
          (S.prototype._buildFromObject = function (t) {
            var r = {
              version: t.network
                ? _.integerAsBuffer(c.get(t.network).xpubkey)
                : t.version,
              depth: i.isNumber(t.depth)
                ? _.integerAsSingleByteBuffer(t.depth)
                : t.depth,
              parentFingerPrint: i.isNumber(t.parentFingerPrint)
                ? _.integerAsBuffer(t.parentFingerPrint)
                : t.parentFingerPrint,
              childIndex: i.isNumber(t.childIndex)
                ? _.integerAsBuffer(t.childIndex)
                : t.childIndex,
              chainCode: i.isString(t.chainCode)
                ? e.from(t.chainCode, "hex")
                : t.chainCode,
              publicKey: i.isString(t.publicKey)
                ? e.from(t.publicKey, "hex")
                : _.isBuffer(t.publicKey)
                  ? t.publicKey
                  : t.publicKey.toBuffer(),
              checksum: i.isNumber(t.checksum)
                ? _.integerAsBuffer(t.checksum)
                : t.checksum,
            };
            return this._buildFromBuffers(r);
          }),
          (S.prototype._buildFromSerialized = function (t) {
            var e = u.decode(t),
              r = {
                version: e.slice(S.VersionStart, S.VersionEnd),
                depth: e.slice(S.DepthStart, S.DepthEnd),
                parentFingerPrint: e.slice(
                  S.ParentFingerPrintStart,
                  S.ParentFingerPrintEnd,
                ),
                childIndex: e.slice(S.ChildIndexStart, S.ChildIndexEnd),
                chainCode: e.slice(S.ChainCodeStart, S.ChainCodeEnd),
                publicKey: e.slice(S.PublicKeyStart, S.PublicKeyEnd),
                checksum: e.slice(S.ChecksumStart, S.ChecksumEnd),
                xpubkey: t,
              };
            return this._buildFromBuffers(r);
          }),
          (S.prototype._buildFromBuffers = function (t) {
            (S._validateBufferArguments(t),
              m.defineImmutable(this, { _buffers: t }));
            var r = [
                t.version,
                t.depth,
                t.parentFingerPrint,
                t.childIndex,
                t.chainCode,
                t.publicKey,
              ],
              i = _.concat(r),
              n = u.checksum(i);
            if (t.checksum && t.checksum.length) {
              if (t.checksum.toString("hex") !== n.toString("hex"))
                throw new d.InvalidB58Checksum(i, n);
            } else t.checksum = n;
            var s,
              o = c.get(_.integerFromBuffer(t.version));
            ((s = u.encode(_.concat(r))), (t.xpubkey = e.from(s)));
            var h = new f(t.publicKey, { network: o }),
              p = S.ParentFingerPrintSize,
              l = a.sha256ripemd160(h.toBuffer()).slice(0, p);
            return (
              m.defineImmutable(this, {
                xpubkey: s,
                network: o,
                depth: _.integerFromSingleByteBuffer(t.depth),
                publicKey: h,
                fingerPrint: l,
              }),
              this
            );
          }),
          (S._validateBufferArguments = function (t) {
            var e = function (e, r) {
              var i = t[e];
              (g(
                _.isBuffer(i),
                e + " argument is not a buffer, it's " + typeof i,
              ),
                g(
                  i.length === r,
                  e +
                    " has not the expected size: found " +
                    i.length +
                    ", expected " +
                    r,
                ));
            };
            (e("version", S.VersionSize),
              e("depth", S.DepthSize),
              e("parentFingerPrint", S.ParentFingerPrintSize),
              e("childIndex", S.ChildIndexSize),
              e("chainCode", S.ChainCodeSize),
              e("publicKey", S.PublicKeySize),
              t.checksum && t.checksum.length && e("checksum", S.CheckSumSize));
          }),
          (S.fromString = function (t) {
            return (
              n.checkArgument(i.isString(t), "No valid string was provided"),
              new S(t)
            );
          }),
          (S.fromObject = function (t) {
            return (
              n.checkArgument(i.isObject(t), "No valid argument was provided"),
              new S(t)
            );
          }),
          (S.prototype.toString = function () {
            return this.xpubkey;
          }),
          (S.prototype.inspect = function () {
            return "<HDPublicKey: " + this.xpubkey + ">";
          }),
          (S.prototype.toObject = S.prototype.toJSON =
            function () {
              return {
                network: c.get(_.integerFromBuffer(this._buffers.version)).name,
                depth: _.integerFromSingleByteBuffer(this._buffers.depth),
                fingerPrint: _.integerFromBuffer(this.fingerPrint),
                parentFingerPrint: _.integerFromBuffer(
                  this._buffers.parentFingerPrint,
                ),
                childIndex: _.integerFromBuffer(this._buffers.childIndex),
                chainCode: e.from(this._buffers.chainCode, "hex"),
                publicKey: this.publicKey.toString(),
                checksum: _.integerFromBuffer(this._buffers.checksum),
                xpubkey: this.xpubkey,
              };
            }),
          (S.fromBuffer = function (t) {
            return new S(t);
          }),
          (S.prototype.toBuffer = function () {
            return _.copy(this._buffers.xpubkey);
          }),
          (S.Hardened = 2147483648),
          (S.RootElementAlias = ["m", "M"]),
          (S.VersionSize = 4),
          (S.DepthSize = 1),
          (S.ParentFingerPrintSize = 4),
          (S.ChildIndexSize = 4),
          (S.ChainCodeSize = 32),
          (S.PublicKeySize = 33),
          (S.CheckSumSize = 4),
          (S.DataSize = 78),
          (S.SerializedByteSize = 82),
          (S.VersionStart = 0),
          (S.VersionEnd = S.VersionStart + S.VersionSize),
          (S.DepthStart = S.VersionEnd),
          (S.DepthEnd = S.DepthStart + S.DepthSize),
          (S.ParentFingerPrintStart = S.DepthEnd),
          (S.ParentFingerPrintEnd =
            S.ParentFingerPrintStart + S.ParentFingerPrintSize),
          (S.ChildIndexStart = S.ParentFingerPrintEnd),
          (S.ChildIndexEnd = S.ChildIndexStart + S.ChildIndexSize),
          (S.ChainCodeStart = S.ChildIndexEnd),
          (S.ChainCodeEnd = S.ChainCodeStart + S.ChainCodeSize),
          (S.PublicKeyStart = S.ChainCodeEnd),
          (S.PublicKeyEnd = S.PublicKeyStart + S.PublicKeySize),
          (S.ChecksumStart = S.PublicKeyEnd),
          (S.ChecksumEnd = S.ChecksumStart + S.CheckSumSize),
          g(S.PublicKeyEnd === S.DataSize),
          g(S.ChecksumEnd === S.SerializedByteSize),
          (t.exports = S));
      }).call(this, r(2).Buffer);
    },
  },
]);
