(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [169],
  {
    10426: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = t.exports;
        ((i.version = "v" + r(10427).version),
          (i.crypto = {}),
          (i.crypto.BN = r(3068)),
          (i.crypto.ECDSA = r(4793)),
          (i.crypto.Hash = r(3084)),
          (i.crypto.Random = r(4796)),
          (i.crypto.Point = r(3943)),
          (i.crypto.Signature = r(3194)),
          (i.encoding = {}),
          (i.encoding.Base58 = r(4794)),
          (i.encoding.Base58Check = r(4554)),
          (i.encoding.BufferReader = r(3456)),
          (i.encoding.BufferWriter = r(3196)),
          (i.encoding.Varint = r(10435)),
          (i.util = {}),
          (i.util.buffer = r(2962)),
          (i.util.js = r(3005)),
          (i.util.preconditions = r(2899)),
          (i.errors = r(3224)),
          (i.Address = r(3605)),
          (i.Block = r(10436)),
          (i.MerkleBlock = r(6656)),
          (i.BlockHeader = r(4797)),
          (i.HDPrivateKey = r(6657)),
          (i.HDPublicKey = r(6658)),
          (i.Message = r(10438)),
          (i.Networks = r(3829)),
          (i.Opcode = r(5553)),
          (i.PrivateKey = r(4553)),
          (i.PublicKey = r(3390)),
          (i.Script = r(3195)),
          (i.Transaction = r(4795)),
          (i.URI = r(10439)),
          (i.Unit = r(5557)),
          (i.deps = {}),
          (i.deps.bnjs = r(6653)),
          (i.deps.bs58 = r(234)),
          (i.deps.Buffer = e),
          (i.deps.elliptic = r(795)),
          (i.deps._ = r(2794)),
          (i.Transaction.sighash = r(3606)));
      }).call(this, r(2).Buffer);
    },
    10427: function (t) {
      t.exports = JSON.parse(
        '{"name":"bitcore-lib","version":"8.1.1","description":"A pure and powerful JavaScript Bitcoin library.","author":"BitPay <dev@bitpay.com>","main":"index.js","scripts":{"lint":"gulp lint","test":"gulp test","test:ci":"npm run test","coverage":"gulp coverage","build":"gulp"},"keywords":["bitcoin","transaction","address","p2p","ecies","cryptocurrency","blockchain","payment","bip21","bip32","bip37","bip69","bip70","multisig"],"repository":{"type":"git","url":"https://github.com/bitpay/bitcore-lib.git"},"browser":{"request":"browser-request"},"dependencies":{"bn.js":"=4.11.8","bs58":"^4.0.1","buffer-compare":"=1.1.1","elliptic":"^6.5.4","inherits":"=2.0.1","lodash":"=4.17.11","scryptsy":"^2.0.0"},"devDependencies":{"bitcore-build":"^8.1.1","brfs":"^2.0.1","chai":"^4.2.0","gulp":"^4.0.0","karma-phantomjs-launcher":"^1.0.4","sinon":"^7.1.1"},"license":"MIT"}',
      );
    },
    10428: function (t, e) {},
    10429: function (t, e, r) {
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
    10430: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(6654),
          s = r(5553),
          o = r(3068),
          u = r(3084),
          h = r(3194),
          a = r(3390),
          f = function t(e) {
            if (!(this instanceof t)) return new t(e);
            e ? (this.initialize(), this.set(e)) : this.initialize();
          };
        ((f.prototype.verifyWitnessProgram = function (t, e, r, i, o) {
          var h = new n(),
            a = [];
          if (0 !== t)
            return (
              !(o & f.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM) ||
              ((this.errstr =
                "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM"),
              !1)
            );
          if (32 === e.length) {
            if (0 === r.length)
              return (
                (this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_WITNESS_EMPTY"),
                !1
              );
            var c = r[r.length - 1];
            h = new n(c);
            var p = u.sha256(c);
            if (p.toString("hex") !== e.toString("hex"))
              return (
                (this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_MISMATCH"),
                !1
              );
            a = r.slice(0, -1);
          } else {
            if (20 !== e.length)
              return (
                (this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_WRONG_LENGTH"),
                !1
              );
            if (2 !== r.length)
              return (
                (this.errstr = "SCRIPT_ERR_WITNESS_PROGRAM_MISMATCH"),
                !1
              );
            (h.add(s.OP_DUP),
              h.add(s.OP_HASH160),
              h.add(e),
              h.add(s.OP_EQUALVERIFY),
              h.add(s.OP_CHECKSIG),
              (a = r));
          }
          if (
            (this.initialize(),
            this.set({
              script: h,
              stack: a,
              sigversion: 1,
              satoshis: i,
              flags: o,
            }),
            !this.evaluate())
          )
            return !1;
          if (1 !== this.stack.length)
            return ((this.errstr = "SCRIPT_ERR_EVAL_FALSE"), !1);
          var l = this.stack[this.stack.length - 1];
          return (
            !!f.castToBool(l) ||
            ((this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK"), !1)
          );
        }),
          (f.prototype.verify = function (t, e, s, o, u, h, a) {
            var c,
              p = r(4795);
            if (
              (i.isUndefined(s) && (s = new p()),
              i.isUndefined(o) && (o = 0),
              i.isUndefined(u) && (u = 0),
              i.isUndefined(h) && (h = null),
              i.isUndefined(a) && (a = 0),
              this.set({
                script: t,
                tx: s,
                nin: o,
                sigversion: 0,
                satoshis: 0,
                flags: u,
              }),
              0 !== (u & f.SCRIPT_VERIFY_SIGPUSHONLY) && !t.isPushOnly())
            )
              return ((this.errstr = "SCRIPT_ERR_SIG_PUSHONLY"), !1);
            if (!this.evaluate()) return !1;
            u & f.SCRIPT_VERIFY_P2SH && (c = this.stack.slice());
            var l = this.stack;
            if (
              (this.initialize(),
              this.set({ script: e, stack: l, tx: s, nin: o, flags: u }),
              !this.evaluate())
            )
              return !1;
            if (0 === this.stack.length)
              return ((this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_RESULT"), !1);
            var d = this.stack[this.stack.length - 1];
            if (!f.castToBool(d))
              return ((this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_STACK"), !1);
            var m = !1;
            if (u & f.SCRIPT_VERIFY_WITNESS) {
              var g = {};
              if (e.isWitnessProgram(g)) {
                if (((m = !0), 0 !== t.toBuffer().length)) return !1;
                if (
                  !this.verifyWitnessProgram(
                    g.version,
                    g.program,
                    h,
                    a,
                    this.flags,
                  )
                )
                  return !1;
              }
            }
            if (u & f.SCRIPT_VERIFY_P2SH && e.isScriptHashOut()) {
              if (!t.isPushOnly())
                return ((this.errstr = "SCRIPT_ERR_SIG_PUSHONLY"), !1);
              if (0 === c.length)
                throw new Error("internal error - stack copy empty");
              var y = c[c.length - 1],
                v = n.fromBuffer(y);
              if (
                (c.pop(),
                this.initialize(),
                this.set({ script: v, stack: c, tx: s, nin: o, flags: u }),
                !this.evaluate())
              )
                return !1;
              if (0 === c.length)
                return (
                  (this.errstr = "SCRIPT_ERR_EVAL_FALSE_NO_P2SH_STACK"),
                  !1
                );
              if (!f.castToBool(c[c.length - 1]))
                return (
                  (this.errstr = "SCRIPT_ERR_EVAL_FALSE_IN_P2SH_STACK"),
                  !1
                );
              if (u & f.SCRIPT_VERIFY_WITNESS) {
                var _ = {};
                if (v.isWitnessProgram(_)) {
                  m = !0;
                  var S = new n();
                  if ((S.add(v.toBuffer()), t.toHex() !== S.toHex()))
                    return (
                      (this.errstr = "SCRIPT_ERR_WITNESS_MALLEATED_P2SH"),
                      !1
                    );
                  if (
                    !this.verifyWitnessProgram(
                      _.version,
                      _.program,
                      h,
                      a,
                      this.flags,
                    )
                  )
                    return !1;
                  l = [l[0]];
                }
              }
            }
            if (0 != (this.flags & f.SCRIPT_VERIFY_CLEANSTACK)) {
              if (0 == (this.flags & f.SCRIPT_VERIFY_P2SH))
                throw "flags & SCRIPT_VERIFY_P2SH";
              if (1 != c.length)
                return ((this.errstr = "SCRIPT_ERR_CLEANSTACK"), !1);
            }
            return (
              !(this.flags & f.SCRIPT_VERIFY_WITNESS && !m && h.length > 0) ||
              ((this.errstr = "SCRIPT_ERR_WITNESS_UNEXPECTED"), !1)
            );
          }),
          (t.exports = f),
          (f.prototype.initialize = function (t) {
            ((this.stack = []),
              (this.altstack = []),
              (this.pc = 0),
              (this.satoshis = 0),
              (this.sigversion = 0),
              (this.pbegincodehash = 0),
              (this.nOpCount = 0),
              (this.vfExec = []),
              (this.errstr = ""),
              (this.flags = 0));
          }),
          (f.prototype.set = function (t) {
            ((this.script = t.script || this.script),
              (this.tx = t.tx || this.tx),
              (this.nin = "undefined" !== typeof t.nin ? t.nin : this.nin),
              (this.stack = t.stack || this.stack),
              (this.altstack = t.altack || this.altstack),
              (this.pc = "undefined" !== typeof t.pc ? t.pc : this.pc),
              (this.pbegincodehash =
                "undefined" !== typeof t.pbegincodehash
                  ? t.pbegincodehash
                  : this.pbegincodehash),
              (this.sigversion =
                "undefined" !== typeof t.sigversion
                  ? t.sigversion
                  : this.sigversion),
              (this.satoshis =
                "undefined" !== typeof t.satoshis ? t.satoshis : this.satoshis),
              (this.nOpCount =
                "undefined" !== typeof t.nOpCount ? t.nOpCount : this.nOpCount),
              (this.vfExec = t.vfExec || this.vfExec),
              (this.errstr = t.errstr || this.errstr),
              (this.flags =
                "undefined" !== typeof t.flags ? t.flags : this.flags));
          }),
          (f.true = e.from([1])),
          (f.false = e.from([])),
          (f.MAX_SCRIPT_ELEMENT_SIZE = 520),
          (f.LOCKTIME_THRESHOLD = 5e8),
          (f.LOCKTIME_THRESHOLD_BN = new o(f.LOCKTIME_THRESHOLD)),
          (f.SCRIPT_VERIFY_NONE = 0),
          (f.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_WITNESS_PROGRAM = 4096),
          (f.SCRIPT_VERIFY_P2SH = 1),
          (f.SCRIPT_VERIFY_STRICTENC = 2),
          (f.SCRIPT_VERIFY_DERSIG = 4),
          (f.SCRIPT_VERIFY_LOW_S = 8),
          (f.SCRIPT_VERIFY_NULLDUMMY = 16),
          (f.SCRIPT_VERIFY_SIGPUSHONLY = 32),
          (f.SCRIPT_VERIFY_MINIMALDATA = 64),
          (f.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 128),
          (f.SCRIPT_VERIFY_CLEANSTACK = 256),
          (f.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY = 512),
          (f.SCRIPT_VERIFY_WITNESS = 1024),
          (f.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS = 2048),
          (f.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY = 1024),
          (f.SCRIPT_VERIFY_MINIMALIF = 8192),
          (f.SCRIPT_VERIFY_NULLFAIL = 16384),
          (f.SCRIPT_VERIFY_WITNESS_PUBKEYTYPE = 32768),
          (f.SCRIPT_ENABLE_SIGHASH_FORKID = 65536),
          (f.SCRIPT_ENABLE_REPLAY_PROTECTION = 1 << 17),
          (f.SCRIPT_ENABLE_MONOLITH_OPCODES = 1 << 18),
          (f.SEQUENCE_LOCKTIME_DISABLE_FLAG = 1 << 31),
          (f.SEQUENCE_LOCKTIME_TYPE_FLAG = 1 << 22),
          (f.SEQUENCE_LOCKTIME_MASK = 65535),
          (f.castToBool = function (t) {
            for (var e = 0; e < t.length; e++)
              if (0 !== t[e]) return e !== t.length - 1 || 128 !== t[e];
            return !1;
          }),
          (f.prototype.checkSignatureEncoding = function (t) {
            var e;
            if (0 == t.length) return !0;
            if (
              0 !==
                (this.flags &
                  (f.SCRIPT_VERIFY_DERSIG |
                    f.SCRIPT_VERIFY_LOW_S |
                    f.SCRIPT_VERIFY_STRICTENC)) &&
              !h.isTxDER(t)
            )
              return ((this.errstr = "SCRIPT_ERR_SIG_DER_INVALID_FORMAT"), !1);
            if (0 !== (this.flags & f.SCRIPT_VERIFY_LOW_S)) {
              if (((e = h.fromTxFormat(t)), !e.hasLowS()))
                return ((this.errstr = "SCRIPT_ERR_SIG_DER_HIGH_S"), !1);
            } else if (
              0 !== (this.flags & f.SCRIPT_VERIFY_STRICTENC) &&
              ((e = h.fromTxFormat(t)), !e.hasDefinedHashtype())
            )
              return ((this.errstr = "SCRIPT_ERR_SIG_HASHTYPE"), !1);
            return !0;
          }),
          (f.prototype.checkPubkeyEncoding = function (t) {
            return 0 === (this.flags & f.SCRIPT_VERIFY_STRICTENC) ||
              a.isValid(t)
              ? !(
                  0 != (this.flags & f.SCRIPT_VERIFY_WITNESS_PUBKEYTYPE) &&
                  1 == this.sigversion &&
                  !a.fromBuffer(t).compressed
                ) || ((this.errstr = "SCRIPT_ERR_WITNESS_PUBKEYTYPE"), !1)
              : ((this.errstr = "SCRIPT_ERR_PUBKEYTYPE"), !1);
          }),
          (f.prototype.evaluate = function () {
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
          (f.prototype.checkLockTime = function (t) {
            return (
              !!(
                (this.tx.nLockTime < f.LOCKTIME_THRESHOLD &&
                  t.lt(f.LOCKTIME_THRESHOLD_BN)) ||
                (this.tx.nLockTime >= f.LOCKTIME_THRESHOLD &&
                  t.gte(f.LOCKTIME_THRESHOLD_BN))
              ) &&
              !t.gt(new o(this.tx.nLockTime)) &&
              !!this.tx.inputs[this.nin].isFinal()
            );
          }),
          (f.prototype.checkSequence = function (t) {
            var e = this.tx.inputs[this.nin].sequenceNumber;
            if (this.tx.version < 2) return !1;
            if (e & SEQUENCE_LOCKTIME_DISABLE_FLAG) return !1;
            var r = f.SEQUENCE_LOCKTIME_TYPE_FLAG | f.SEQUENCE_LOCKTIME_MASK,
              i = new o(e & r),
              n = t.and(r),
              s = new o(f.SEQUENCE_LOCKTIME_TYPE_FLAG);
            return (
              !!((i.lt(s) && n.lt(s)) || (i.gte(s) && n.gte(s))) && !n.gt(i)
            );
          }),
          (f.prototype.step = function () {
            var t,
              e,
              r,
              c,
              p,
              l,
              d,
              m,
              g,
              y,
              v,
              _,
              S,
              b,
              w,
              I,
              k,
              P = 0 !== (this.flags & f.SCRIPT_VERIFY_MINIMALDATA),
              E = -1 === this.vfExec.indexOf(!1),
              O = this.script.chunks[this.pc];
            this.pc++;
            var A = O.opcodenum;
            if (i.isUndefined(A))
              return ((this.errstr = "SCRIPT_ERR_UNDEFINED_OPCODE"), !1);
            if (O.buf && O.buf.length > f.MAX_SCRIPT_ELEMENT_SIZE)
              return ((this.errstr = "SCRIPT_ERR_PUSH_SIZE"), !1);
            if (A > s.OP_16 && ++this.nOpCount > 201)
              return ((this.errstr = "SCRIPT_ERR_OP_COUNT"), !1);
            if (
              A === s.OP_CAT ||
              A === s.OP_SUBSTR ||
              A === s.OP_LEFT ||
              A === s.OP_RIGHT ||
              A === s.OP_INVERT ||
              A === s.OP_AND ||
              A === s.OP_OR ||
              A === s.OP_XOR ||
              A === s.OP_2MUL ||
              A === s.OP_2DIV ||
              A === s.OP_MUL ||
              A === s.OP_DIV ||
              A === s.OP_MOD ||
              A === s.OP_LSHIFT ||
              A === s.OP_RSHIFT
            )
              return ((this.errstr = "SCRIPT_ERR_DISABLED_OPCODE"), !1);
            if (E && 0 <= A && A <= s.OP_PUSHDATA4) {
              if (P && !this.script.checkMinimalPush(this.pc - 1))
                return ((this.errstr = "SCRIPT_ERR_MINIMALDATA"), !1);
              if (O.buf) {
                if (O.len !== O.buf.length)
                  throw new Error(
                    "Length of push value not equal to length of data",
                  );
                this.stack.push(O.buf);
              } else this.stack.push(f.false);
            } else if (E || (s.OP_IF <= A && A <= s.OP_ENDIF))
              switch (A) {
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
                  ((p = A - (s.OP_1 - 1)),
                    (t = new o(p).toScriptNumBuffer()),
                    this.stack.push(t));
                  break;
                case s.OP_NOP:
                  break;
                case s.OP_NOP2:
                case s.OP_CHECKLOCKTIMEVERIFY:
                  if (!(this.flags & f.SCRIPT_VERIFY_CHECKLOCKTIMEVERIFY)) {
                    if (this.flags & f.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
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
                  var T = o.fromScriptNumBuffer(
                    this.stack[this.stack.length - 1],
                    P,
                    5,
                  );
                  if (T.lt(new o(0)))
                    return ((this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME"), !1);
                  if (!this.checkLockTime(T))
                    return (
                      (this.errstr = "SCRIPT_ERR_UNSATISFIED_LOCKTIME"),
                      !1
                    );
                  break;
                case s.OP_NOP3:
                case s.OP_CHECKSEQUENCEVERIFY:
                  if (!(this.flags & f.SCRIPT_VERIFY_CHECKSEQUENCEVERIFY)) {
                    if (this.flags & f.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
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
                  var B = o.fromScriptNumBuffer(
                    this.stack[this.stack.length - 1],
                    P,
                    5,
                  );
                  if (B.lt(new o(0)))
                    return ((this.errstr = "SCRIPT_ERR_NEGATIVE_LOCKTIME"), !1);
                  if (0 != (B & f.SEQUENCE_LOCKTIME_DISABLE_FLAG)) break;
                  if (!this.checkSequence(B))
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
                  if (this.flags & f.SCRIPT_VERIFY_DISCOURAGE_UPGRADABLE_NOPS)
                    return (
                      (this.errstr = "SCRIPT_ERR_DISCOURAGE_UPGRADABLE_NOPS"),
                      !1
                    );
                  break;
                case s.OP_IF:
                case s.OP_NOTIF:
                  if (((I = !1), E)) {
                    if (this.stack.length < 1)
                      return (
                        (this.errstr = "SCRIPT_ERR_UNBALANCED_CONDITIONAL"),
                        !1
                      );
                    if (
                      ((t = this.stack[this.stack.length - 1]),
                      this.flags & f.SCRIPT_VERIFY_MINIMALIF)
                    ) {
                      if (
                        ((t = this.stack[this.stack.length - 1]), t.length > 1)
                      )
                        return ((this.errstr = "SCRIPT_ERR_MINIMALIF"), !1);
                      if (1 == t.length && 1 != t[0])
                        return ((this.errstr = "SCRIPT_ERR_MINIMALIF"), !1);
                    }
                    ((I = f.castToBool(t)),
                      A === s.OP_NOTIF && (I = !I),
                      this.stack.pop());
                  }
                  this.vfExec.push(I);
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
                  if (
                    ((t = this.stack[this.stack.length - 1]),
                    (I = f.castToBool(t)),
                    !I)
                  )
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
                  ((e = this.stack[this.stack.length - 2]),
                    (r = this.stack[this.stack.length - 1]),
                    this.stack.push(e),
                    this.stack.push(r));
                  break;
                case s.OP_3DUP:
                  if (this.stack.length < 3)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((e = this.stack[this.stack.length - 3]),
                    (r = this.stack[this.stack.length - 2]));
                  var R = this.stack[this.stack.length - 1];
                  (this.stack.push(e), this.stack.push(r), this.stack.push(R));
                  break;
                case s.OP_2OVER:
                  if (this.stack.length < 4)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((e = this.stack[this.stack.length - 4]),
                    (r = this.stack[this.stack.length - 3]),
                    this.stack.push(e),
                    this.stack.push(r));
                  break;
                case s.OP_2ROT:
                  if (this.stack.length < 6)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((c = this.stack.splice(this.stack.length - 6, 2)),
                    this.stack.push(c[0]),
                    this.stack.push(c[1]));
                  break;
                case s.OP_2SWAP:
                  if (this.stack.length < 4)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((c = this.stack.splice(this.stack.length - 4, 2)),
                    this.stack.push(c[0]),
                    this.stack.push(c[1]));
                  break;
                case s.OP_IFDUP:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((t = this.stack[this.stack.length - 1]),
                    (I = f.castToBool(t)),
                    I && this.stack.push(t));
                  break;
                case s.OP_DEPTH:
                  ((t = new o(this.stack.length).toScriptNumBuffer()),
                    this.stack.push(t));
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
                  this.stack.push(this.stack[this.stack.length - 1]);
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
                  this.stack.push(this.stack[this.stack.length - 2]);
                  break;
                case s.OP_PICK:
                case s.OP_ROLL:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (
                    ((t = this.stack[this.stack.length - 1]),
                    (m = o.fromScriptNumBuffer(t, P)),
                    (p = m.toNumber()),
                    this.stack.pop(),
                    p < 0 || p >= this.stack.length)
                  )
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((t = this.stack[this.stack.length - p - 1]),
                    A === s.OP_ROLL &&
                      this.stack.splice(this.stack.length - p - 1, 1),
                    this.stack.push(t));
                  break;
                case s.OP_ROT:
                  if (this.stack.length < 3)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((l = this.stack[this.stack.length - 3]),
                    (d = this.stack[this.stack.length - 2]));
                  var M = this.stack[this.stack.length - 1];
                  ((this.stack[this.stack.length - 3] = d),
                    (this.stack[this.stack.length - 2] = M),
                    (this.stack[this.stack.length - 1] = l));
                  break;
                case s.OP_SWAP:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((l = this.stack[this.stack.length - 2]),
                    (d = this.stack[this.stack.length - 1]),
                    (this.stack[this.stack.length - 2] = d),
                    (this.stack[this.stack.length - 1] = l));
                  break;
                case s.OP_TUCK:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  this.stack.splice(
                    this.stack.length - 2,
                    0,
                    this.stack[this.stack.length - 1],
                  );
                  break;
                case s.OP_SIZE:
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((m = new o(this.stack[this.stack.length - 1].length)),
                    this.stack.push(m.toScriptNumBuffer()));
                  break;
                case s.OP_EQUAL:
                case s.OP_EQUALVERIFY:
                  if (this.stack.length < 2)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  ((e = this.stack[this.stack.length - 2]),
                    (r = this.stack[this.stack.length - 1]));
                  var N = e.toString("hex") === r.toString("hex");
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(N ? f.true : f.false),
                    A === s.OP_EQUALVERIFY)
                  ) {
                    if (!N)
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
                    ((t = this.stack[this.stack.length - 1]),
                    (m = o.fromScriptNumBuffer(t, P)),
                    A)
                  ) {
                    case s.OP_1ADD:
                      m = m.add(o.One);
                      break;
                    case s.OP_1SUB:
                      m = m.sub(o.One);
                      break;
                    case s.OP_NEGATE:
                      m = m.neg();
                      break;
                    case s.OP_ABS:
                      m.cmp(o.Zero) < 0 && (m = m.neg());
                      break;
                    case s.OP_NOT:
                      m = new o((0 === m.cmp(o.Zero)) + 0);
                      break;
                    case s.OP_0NOTEQUAL:
                      m = new o((0 !== m.cmp(o.Zero)) + 0);
                      break;
                  }
                  (this.stack.pop(), this.stack.push(m.toScriptNumBuffer()));
                  break;
                case s.OP_ADD:
                case s.OP_SUB:
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
                    ((g = o.fromScriptNumBuffer(
                      this.stack[this.stack.length - 2],
                      P,
                    )),
                    (y = o.fromScriptNumBuffer(
                      this.stack[this.stack.length - 1],
                      P,
                    )),
                    (m = new o(0)),
                    A)
                  ) {
                    case s.OP_ADD:
                      m = g.add(y);
                      break;
                    case s.OP_SUB:
                      m = g.sub(y);
                      break;
                    case s.OP_BOOLAND:
                      m = new o(
                        (0 !== g.cmp(o.Zero) && 0 !== y.cmp(o.Zero)) + 0,
                      );
                      break;
                    case s.OP_BOOLOR:
                      m = new o(
                        (0 !== g.cmp(o.Zero) || 0 !== y.cmp(o.Zero)) + 0,
                      );
                      break;
                    case s.OP_NUMEQUAL:
                      m = new o((0 === g.cmp(y)) + 0);
                      break;
                    case s.OP_NUMEQUALVERIFY:
                      m = new o((0 === g.cmp(y)) + 0);
                      break;
                    case s.OP_NUMNOTEQUAL:
                      m = new o((0 !== g.cmp(y)) + 0);
                      break;
                    case s.OP_LESSTHAN:
                      m = new o((g.cmp(y) < 0) + 0);
                      break;
                    case s.OP_GREATERTHAN:
                      m = new o((g.cmp(y) > 0) + 0);
                      break;
                    case s.OP_LESSTHANOREQUAL:
                      m = new o((g.cmp(y) <= 0) + 0);
                      break;
                    case s.OP_GREATERTHANOREQUAL:
                      m = new o((g.cmp(y) >= 0) + 0);
                      break;
                    case s.OP_MIN:
                      m = g.cmp(y) < 0 ? g : y;
                      break;
                    case s.OP_MAX:
                      m = g.cmp(y) > 0 ? g : y;
                      break;
                  }
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(m.toScriptNumBuffer()),
                    A === s.OP_NUMEQUALVERIFY)
                  ) {
                    if (!f.castToBool(this.stack[this.stack.length - 1]))
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
                  ((g = o.fromScriptNumBuffer(
                    this.stack[this.stack.length - 3],
                    P,
                  )),
                    (y = o.fromScriptNumBuffer(
                      this.stack[this.stack.length - 2],
                      P,
                    )));
                  var x = o.fromScriptNumBuffer(
                    this.stack[this.stack.length - 1],
                    P,
                  );
                  ((I = y.cmp(g) <= 0 && g.cmp(x) < 0),
                    this.stack.pop(),
                    this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(I ? f.true : f.false));
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
                  var C;
                  ((t = this.stack[this.stack.length - 1]),
                    A === s.OP_RIPEMD160
                      ? (C = u.ripemd160(t))
                      : A === s.OP_SHA1
                        ? (C = u.sha1(t))
                        : A === s.OP_SHA256
                          ? (C = u.sha256(t))
                          : A === s.OP_HASH160
                            ? (C = u.sha256ripemd160(t))
                            : A === s.OP_HASH256 && (C = u.sha256sha256(t)),
                    this.stack.pop(),
                    this.stack.push(C));
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
                    ((v = this.stack[this.stack.length - 2]),
                    (_ = this.stack[this.stack.length - 1]),
                    !this.checkSignatureEncoding(v) ||
                      !this.checkPubkeyEncoding(_))
                  )
                    return !1;
                  S = new n().set({
                    chunks: this.script.chunks.slice(this.pbegincodehash),
                  });
                  var U = new n().add(v);
                  S.findAndDelete(U);
                  try {
                    ((b = h.fromTxFormat(v)),
                      (w = a.fromBuffer(_, !1)),
                      (k = this.tx.verifySignature(
                        b,
                        w,
                        this.nin,
                        S,
                        this.sigversion,
                        this.satoshis,
                      )));
                  } catch (j) {
                    k = !1;
                  }
                  if (!k && this.flags & f.SCRIPT_VERIFY_NULLFAIL && v.length)
                    return ((this.errstr = "SCRIPT_ERR_NULLFAIL"), !1);
                  if (
                    (this.stack.pop(),
                    this.stack.pop(),
                    this.stack.push(k ? f.true : f.false),
                    A === s.OP_CHECKSIGVERIFY)
                  ) {
                    if (!k)
                      return ((this.errstr = "SCRIPT_ERR_CHECKSIGVERIFY"), !1);
                    this.stack.pop();
                  }
                  break;
                case s.OP_CHECKMULTISIG:
                case s.OP_CHECKMULTISIGVERIFY:
                  var L = 1;
                  if (this.stack.length < L)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var H = o
                    .fromScriptNumBuffer(this.stack[this.stack.length - L], P)
                    .toNumber();
                  if (H < 0 || H > 20)
                    return ((this.errstr = "SCRIPT_ERR_PUBKEY_COUNT"), !1);
                  if (((this.nOpCount += H), this.nOpCount > 201))
                    return ((this.errstr = "SCRIPT_ERR_OP_COUNT"), !1);
                  var K = ++L;
                  L += H;
                  var F = H + 2;
                  if (this.stack.length < L)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  var D = o
                    .fromScriptNumBuffer(this.stack[this.stack.length - L], P)
                    .toNumber();
                  if (D < 0 || D > H)
                    return ((this.errstr = "SCRIPT_ERR_SIG_COUNT"), !1);
                  var V = ++L;
                  if (((L += D), this.stack.length < L))
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  S = new n().set({
                    chunks: this.script.chunks.slice(this.pbegincodehash),
                  });
                  for (var z = 0; z < D; z++)
                    ((v = this.stack[this.stack.length - V - z]),
                      S.findAndDelete(new n().add(v)));
                  k = !0;
                  while (k && D > 0) {
                    if (
                      ((v = this.stack[this.stack.length - V]),
                      (_ = this.stack[this.stack.length - K]),
                      !this.checkSignatureEncoding(v) ||
                        !this.checkPubkeyEncoding(_))
                    )
                      return !1;
                    var G;
                    try {
                      ((b = h.fromTxFormat(v)),
                        (w = a.fromBuffer(_, !1)),
                        (G = this.tx.verifySignature(
                          b,
                          w,
                          this.nin,
                          S,
                          this.sigversion,
                          this.satoshis,
                        )));
                    } catch (j) {
                      G = !1;
                    }
                    (G && (V++, D--), K++, H--, D > H && (k = !1));
                  }
                  while (L-- > 1) {
                    if (
                      !k &&
                      this.flags & f.SCRIPT_VERIFY_NULLFAIL &&
                      !F &&
                      this.stack[this.stack.length - 1].length
                    )
                      return ((this.errstr = "SCRIPT_ERR_NULLFAIL"), !1);
                    (F > 0 && F--, this.stack.pop());
                  }
                  if (this.stack.length < 1)
                    return (
                      (this.errstr = "SCRIPT_ERR_INVALID_STACK_OPERATION"),
                      !1
                    );
                  if (
                    this.flags & f.SCRIPT_VERIFY_NULLDUMMY &&
                    this.stack[this.stack.length - 1].length
                  )
                    return ((this.errstr = "SCRIPT_ERR_SIG_NULLDUMMY"), !1);
                  if (
                    (this.stack.pop(),
                    this.stack.push(k ? f.true : f.false),
                    A === s.OP_CHECKMULTISIGVERIFY)
                  ) {
                    if (!k)
                      return (
                        (this.errstr = "SCRIPT_ERR_CHECKMULTISIGVERIFY"),
                        !1
                      );
                    this.stack.pop();
                  }
                  break;
                default:
                  return ((this.errstr = "SCRIPT_ERR_BAD_OPCODE"), !1);
              }
            return !0;
          }));
      }).call(this, r(2).Buffer);
    },
    10431: function (t, e, r) {
      "use strict";
      var i = r(4556),
        n = r(2899),
        s = (r(2962), r(4555)),
        o = r(3457),
        u = r(3606),
        h = r(3195),
        a = r(3194),
        f = r(4557);
      function c() {
        s.apply(this, arguments);
      }
      (i(c, s),
        (c.prototype.getSignatures = function (t, e, r, i) {
          (n.checkState(this.output instanceof o), (i = i || a.SIGHASH_ALL));
          var s = e.toPublicKey();
          return s.toString() ===
            this.output.script.getPublicKey().toString("hex")
            ? [
                new f({
                  publicKey: s,
                  prevTxId: this.prevTxId,
                  outputIndex: this.outputIndex,
                  inputIndex: r,
                  signature: u.sign(t, e, i, r, this.output.script),
                  sigtype: i,
                }),
              ]
            : [];
        }),
        (c.prototype.addSignature = function (t, e) {
          return (
            n.checkState(this.isValidSignature(t, e), "Signature is invalid"),
            this.setScript(h.buildPublicKeyIn(e.signature.toDER(), e.sigtype)),
            this
          );
        }),
        (c.prototype.clearSignatures = function () {
          return (this.setScript(h.empty()), this);
        }),
        (c.prototype.isFullySigned = function () {
          return this.script.isPublicKeyIn();
        }),
        (c.SCRIPT_MAX_SIZE = 73),
        (c.prototype._estimateSize = function () {
          return c.SCRIPT_MAX_SIZE;
        }),
        (t.exports = c));
    },
    10432: function (t, e, r) {
      "use strict";
      var i = r(4556),
        n = r(2899),
        s = r(2962),
        o = r(3084),
        u = r(4555),
        h = r(3457),
        a = r(3606),
        f = r(3195),
        c = r(3194),
        p = r(4557);
      function l() {
        u.apply(this, arguments);
      }
      (i(l, u),
        (l.prototype.getSignatures = function (t, e, r, i, u) {
          return (
            n.checkState(this.output instanceof h),
            (u = u || o.sha256ripemd160(e.publicKey.toBuffer())),
            (i = i || c.SIGHASH_ALL),
            s.equals(u, this.output.script.getPublicKeyHash())
              ? [
                  new p({
                    publicKey: e.publicKey,
                    prevTxId: this.prevTxId,
                    outputIndex: this.outputIndex,
                    inputIndex: r,
                    signature: a.sign(t, e, i, r, this.output.script),
                    sigtype: i,
                  }),
                ]
              : []
          );
        }),
        (l.prototype.addSignature = function (t, e) {
          return (
            n.checkState(this.isValidSignature(t, e), "Signature is invalid"),
            this.setScript(
              f.buildPublicKeyHashIn(
                e.publicKey,
                e.signature.toDER(),
                e.sigtype,
              ),
            ),
            this
          );
        }),
        (l.prototype.clearSignatures = function () {
          return (this.setScript(f.empty()), this);
        }),
        (l.prototype.isFullySigned = function () {
          return this.script.isPublicKeyHashIn();
        }),
        (l.SCRIPT_MAX_SIZE = 107),
        (l.prototype._estimateSize = function () {
          return l.SCRIPT_MAX_SIZE;
        }),
        (t.exports = l));
    },
    10433: function (t, e, r) {
      "use strict";
      var i = r(2794),
        n = r(4556),
        s = (r(5554), r(4555)),
        o = r(3457),
        u = r(2899),
        h = r(3195),
        a = r(3194),
        f = r(3606),
        c = (r(3390), r(2962)),
        p = r(4557);
      function l(t, e, r, n, o) {
        ((o = o || {}), s.apply(this, arguments));
        var a = this;
        ((e = e || t.publicKeys),
          (r = r || t.threshold),
          (n = n || t.signatures),
          o.noSorting
            ? (this.publicKeys = e)
            : (this.publicKeys = i.sortBy(e, function (t) {
                return t.toString("hex");
              })),
          u.checkState(
            h.buildMultisigOut(this.publicKeys, r).equals(this.output.script),
            "Provided public keys don't match to the provided output script",
          ),
          (this.publicKeyIndex = {}),
          i.each(this.publicKeys, function (t, e) {
            a.publicKeyIndex[t.toString()] = e;
          }),
          (this.threshold = r),
          (this.signatures = n
            ? this._deserializeSignatures(n)
            : new Array(this.publicKeys.length)));
      }
      (n(l, s),
        (l.prototype.toObject = function () {
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
        (l.prototype._deserializeSignatures = function (t) {
          return i.map(t, function (t) {
            if (t) return new p(t);
          });
        }),
        (l.prototype._serializeSignatures = function () {
          return i.map(this.signatures, function (t) {
            if (t) return t.toObject();
          });
        }),
        (l.prototype.getSignatures = function (t, e, r, n) {
          (u.checkState(this.output instanceof o), (n = n || a.SIGHASH_ALL));
          var s = this,
            h = [];
          return (
            i.each(this.publicKeys, function (i) {
              i.toString() === e.publicKey.toString() &&
                h.push(
                  new p({
                    publicKey: e.publicKey,
                    prevTxId: s.prevTxId,
                    outputIndex: s.outputIndex,
                    inputIndex: r,
                    signature: f.sign(t, e, n, r, s.output.script),
                    sigtype: n,
                  }),
                );
            }),
            h
          );
        }),
        (l.prototype.addSignature = function (t, e) {
          return (
            u.checkState(
              !this.isFullySigned(),
              "All needed signatures have already been added",
            ),
            u.checkArgument(
              !i.isUndefined(this.publicKeyIndex[e.publicKey.toString()]),
              "Signature has no matching public key",
            ),
            u.checkState(this.isValidSignature(t, e)),
            (this.signatures[this.publicKeyIndex[e.publicKey.toString()]] = e),
            this._updateScript(),
            this
          );
        }),
        (l.prototype._updateScript = function () {
          return (
            this.setScript(
              h.buildMultisigIn(
                this.publicKeys,
                this.threshold,
                this._createSignatures(),
              ),
            ),
            this
          );
        }),
        (l.prototype._createSignatures = function () {
          return i.map(
            i.filter(this.signatures, function (t) {
              return !i.isUndefined(t);
            }),
            function (t) {
              return c.concat([
                t.signature.toDER(),
                c.integerAsSingleByteBuffer(t.sigtype),
              ]);
            },
          );
        }),
        (l.prototype.clearSignatures = function () {
          ((this.signatures = new Array(this.publicKeys.length)),
            this._updateScript());
        }),
        (l.prototype.isFullySigned = function () {
          return this.countSignatures() === this.threshold;
        }),
        (l.prototype.countMissingSignatures = function () {
          return this.threshold - this.countSignatures();
        }),
        (l.prototype.countSignatures = function () {
          return i.reduce(
            this.signatures,
            function (t, e) {
              return t + !!e;
            },
            0,
          );
        }),
        (l.prototype.publicKeysWithoutSignature = function () {
          var t = this;
          return i.filter(this.publicKeys, function (e) {
            return !t.signatures[t.publicKeyIndex[e.toString()]];
          });
        }),
        (l.prototype.isValidSignature = function (t, e) {
          return (
            (e.signature.nhashtype = e.sigtype),
            f.verify(
              t,
              e.signature,
              e.publicKey,
              e.inputIndex,
              this.output.script,
            )
          );
        }),
        (l.normalizeSignatures = function (t, e, r, i, n) {
          return n.map(function (n) {
            var s = null;
            return (
              (i = i.filter(function (i) {
                if (s) return !0;
                var o = new p({
                  signature: a.fromTxFormat(i),
                  publicKey: n,
                  prevTxId: e.prevTxId,
                  outputIndex: e.outputIndex,
                  inputIndex: r,
                  sigtype: a.SIGHASH_ALL,
                });
                o.signature.nhashtype = o.sigtype;
                var u = f.verify(
                  t,
                  o.signature,
                  o.publicKey,
                  o.inputIndex,
                  e.output.script,
                );
                return !u || ((s = o), !1);
              })),
              s || null
            );
          });
        }),
        (l.OPCODES_SIZE = 1),
        (l.SIGNATURE_SIZE = 73),
        (l.prototype._estimateSize = function () {
          return l.OPCODES_SIZE + this.threshold * l.SIGNATURE_SIZE;
        }),
        (t.exports = l));
    },
    10434: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(4556),
          s = r(4555),
          o = r(3457),
          u = r(2899),
          h = r(3195),
          a = r(3194),
          f = r(3606),
          c = r(5556),
          p = r(3196),
          l = r(2962),
          d = r(4557);
        function m(t, e, r, n, o, a) {
          ((a = a || {}), s.apply(this, arguments));
          var f = this;
          if (
            ((e = e || t.publicKeys),
            (r = r || t.threshold),
            (n = n || t.signatures),
            (this.nestedWitness = !!o),
            a.noSorting
              ? (this.publicKeys = e)
              : (this.publicKeys = i.sortBy(e, function (t) {
                  return t.toString("hex");
                })),
            (this.redeemScript = h.buildMultisigOut(this.publicKeys, r, a)),
            this.nestedWitness)
          ) {
            var c = h.buildWitnessMultisigOutFromScript(this.redeemScript);
            u.checkState(
              h.buildScriptHashOut(c).equals(this.output.script),
              "Provided public keys don't hash to the provided output (nested witness)",
            );
            var p = new h();
            (p.add(c.toBuffer()), this.setScript(p));
          } else
            u.checkState(
              h
                .buildScriptHashOut(this.redeemScript)
                .equals(this.output.script),
              "Provided public keys don't hash to the provided output",
            );
          ((this.publicKeyIndex = {}),
            i.each(this.publicKeys, function (t, e) {
              f.publicKeyIndex[t.toString()] = e;
            }),
            (this.threshold = r),
            (this.signatures = n
              ? this._deserializeSignatures(n)
              : new Array(this.publicKeys.length)));
        }
        (n(m, s),
          (m.prototype.toObject = function () {
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
          (m.prototype._deserializeSignatures = function (t) {
            return i.map(t, function (t) {
              if (t) return new d(t);
            });
          }),
          (m.prototype._serializeSignatures = function () {
            return i.map(this.signatures, function (t) {
              if (t) return t.toObject();
            });
          }),
          (m.prototype.getScriptCode = function () {
            var t = new p();
            if (this.redeemScript.hasCodeseparators()) throw new Error("@TODO");
            var e = this.redeemScript.toBuffer();
            return (t.writeVarintNum(e.length), t.write(e), t.toBuffer());
          }),
          (m.prototype.getSighash = function (t, e, r, i) {
            var n,
              s = this;
            if (s.nestedWitness) {
              var o = s.getScriptCode(),
                u = s.getSatoshisBuffer();
              n = c.sighash(t, i, r, o, u);
            } else n = f.sighash(t, i, r, s.redeemScript);
            return n;
          }),
          (m.prototype.getSignatures = function (t, e, r, n) {
            (u.checkState(this.output instanceof o), (n = n || a.SIGHASH_ALL));
            var s = this,
              h = [];
            return (
              i.each(this.publicKeys, function (i) {
                if (i.toString() === e.publicKey.toString()) {
                  var o;
                  if (s.nestedWitness) {
                    var u = s.getScriptCode(),
                      a = s.getSatoshisBuffer();
                    o = c.sign(t, e, n, r, u, a);
                  } else o = f.sign(t, e, n, r, s.redeemScript);
                  h.push(
                    new d({
                      publicKey: e.publicKey,
                      prevTxId: s.prevTxId,
                      outputIndex: s.outputIndex,
                      inputIndex: r,
                      signature: o,
                      sigtype: n,
                    }),
                  );
                }
              }),
              h
            );
          }),
          (m.prototype.addSignature = function (t, e) {
            return (
              u.checkState(
                !this.isFullySigned(),
                "All needed signatures have already been added",
              ),
              u.checkArgument(
                !i.isUndefined(this.publicKeyIndex[e.publicKey.toString()]),
                "Signature has no matching public key",
              ),
              u.checkState(this.isValidSignature(t, e)),
              (this.signatures[this.publicKeyIndex[e.publicKey.toString()]] =
                e),
              this._updateScript(),
              this
            );
          }),
          (m.prototype._updateScript = function () {
            if (this.nestedWitness) {
              for (
                var t = [new e(0)], r = this._createSignatures(), i = 0;
                i < r.length;
                i++
              )
                t.push(r[i]);
              (t.push(this.redeemScript.toBuffer()), this.setWitnesses(t));
            } else {
              var n = h.buildP2SHMultisigIn(
                this.publicKeys,
                this.threshold,
                this._createSignatures(),
                { cachedMultisig: this.redeemScript },
              );
              this.setScript(n);
            }
            return this;
          }),
          (m.prototype._createSignatures = function () {
            return i.map(
              i.filter(this.signatures, function (t) {
                return !i.isUndefined(t);
              }),
              function (t) {
                return l.concat([
                  t.signature.toDER(),
                  l.integerAsSingleByteBuffer(t.sigtype),
                ]);
              },
            );
          }),
          (m.prototype.clearSignatures = function () {
            ((this.signatures = new Array(this.publicKeys.length)),
              this._updateScript());
          }),
          (m.prototype.isFullySigned = function () {
            return this.countSignatures() === this.threshold;
          }),
          (m.prototype.countMissingSignatures = function () {
            return this.threshold - this.countSignatures();
          }),
          (m.prototype.countSignatures = function () {
            return i.reduce(
              this.signatures,
              function (t, e) {
                return t + !!e;
              },
              0,
            );
          }),
          (m.prototype.publicKeysWithoutSignature = function () {
            var t = this;
            return i.filter(this.publicKeys, function (e) {
              return !t.signatures[t.publicKeyIndex[e.toString()]];
            });
          }),
          (m.prototype.isValidSignature = function (t, e) {
            if (this.nestedWitness) {
              e.signature.nhashtype = e.sigtype;
              var r = this.getScriptCode(),
                i = this.getSatoshisBuffer();
              return c.verify(t, e.signature, e.publicKey, e.inputIndex, r, i);
            }
            return (
              (e.signature.nhashtype = e.sigtype),
              f.verify(
                t,
                e.signature,
                e.publicKey,
                e.inputIndex,
                this.redeemScript,
              )
            );
          }),
          (m.OPCODES_SIZE = 7),
          (m.SIGNATURE_SIZE = 74),
          (m.PUBKEY_SIZE = 34),
          (m.prototype._estimateSize = function () {
            return (
              m.OPCODES_SIZE +
              this.threshold * m.SIGNATURE_SIZE +
              this.publicKeys.length * m.PUBKEY_SIZE
            );
          }),
          (t.exports = m));
      }).call(this, r(2).Buffer);
    },
    10435: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3196),
          n = r(3456),
          s = r(3068),
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
    10436: function (t, e, r) {
      ((t.exports = r(10437)),
        (t.exports.BlockHeader = r(4797)),
        (t.exports.MerkleBlock = r(6656)));
    },
    10437: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(4797),
          s = r(3068),
          o = r(2962),
          u = r(3456),
          h = r(3196),
          a = r(3084),
          f = r(4795),
          c = r(2899);
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
              t instanceof f ? e.push(t) : e.push(f().fromObject(t));
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
            (c.checkState(!t.finished(), "No block data received"),
              (e.header = n.fromBufferReader(t)));
            var r = t.readVarintNum();
            e.transactions = [];
            for (var i = 0; i < r; i++)
              e.transactions.push(f().fromBufferReader(t));
            return e;
          }),
          (Block.fromBufferReader = function (t) {
            c.checkArgument(t, "br is required");
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
            (t || (t = new h()),
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
                t.push(a.sha256sha256(o));
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
    10438: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(4553),
          s = r(3390),
          o = r(3605),
          u = r(3196),
          h = r(4793),
          a = r(3194),
          f = r(3084).sha256sha256,
          c = r(3005),
          p = r(2899);
        function l(t) {
          return this instanceof l
            ? (p.checkArgument(
                i.isString(t),
                "First argument should be a string",
              ),
              (this.message = t),
              this)
            : new l(t);
        }
        ((l.MAGIC_BYTES = new e("Bitcoin Signed Message:\n")),
          (l.prototype.magicHash = function () {
            var t = u.varintBufNum(l.MAGIC_BYTES.length),
              r = new e(this.message),
              i = u.varintBufNum(r.length),
              n = e.concat([t, l.MAGIC_BYTES, i, r]),
              s = f(n);
            return s;
          }),
          (l.prototype._sign = function (t) {
            p.checkArgument(
              t instanceof n,
              "First argument should be an instance of PrivateKey",
            );
            var e = this.magicHash(),
              r = new h();
            return (
              (r.hashbuf = e),
              (r.privkey = t),
              (r.pubkey = t.toPublicKey()),
              r.signRandomK(),
              r.calci(),
              r.sig
            );
          }),
          (l.prototype.sign = function (t) {
            var e = this._sign(t);
            return e.toCompact().toString("base64");
          }),
          (l.prototype._verify = function (t, e) {
            (p.checkArgument(
              t instanceof s,
              "First argument should be an instance of PublicKey",
            ),
              p.checkArgument(
                e instanceof a,
                "Second argument should be an instance of Signature",
              ));
            var r = this.magicHash(),
              i = h.verify(r, e, t);
            return (i || (this.error = "The signature was invalid"), i);
          }),
          (l.prototype.verify = function (t, r) {
            (p.checkArgument(t),
              p.checkArgument(r && i.isString(r)),
              i.isString(t) && (t = o.fromString(t)));
            var n = a.fromCompact(new e(r, "base64")),
              s = new h();
            ((s.hashbuf = this.magicHash()), (s.sig = n));
            var u = s.toPublicKey(),
              f = o.fromPublicKey(u, t.network);
            return t.toString() !== f.toString()
              ? ((this.error =
                  "The signature did not match the message digest"),
                !1)
              : this._verify(u, n);
          }),
          (l.fromString = function (t) {
            return new l(t);
          }),
          (l.fromJSON = function (t) {
            return (c.isValidJSON(t) && (t = JSON.parse(t)), new l(t.message));
          }),
          (l.prototype.toObject = function () {
            return { message: this.message };
          }),
          (l.prototype.toJSON = function () {
            return JSON.stringify(this.toObject());
          }),
          (l.prototype.toString = function () {
            return this.message;
          }),
          (l.prototype.inspect = function () {
            return "<Message: " + this.toString() + ">";
          }),
          (t.exports = l));
        r(3195);
      }).call(this, r(2).Buffer);
    },
    10439: function (t, e, r) {
      "use strict";
      var i = r(2794),
        n = r(231),
        s = r(3605),
        o = r(5557),
        u = function (t, e) {
          if (!(this instanceof u)) return new u(t, e);
          if (
            ((this.extras = {}),
            (this.knownParams = e || []),
            (this.address = this.network = this.amount = this.message = null),
            "string" === typeof t)
          ) {
            var r = u.parse(t);
            (r.amount && (r.amount = this._parseAmount(r.amount)),
              this._fromObject(r));
          } else {
            if ("object" !== typeof t)
              throw new TypeError("Unrecognized data format.");
            this._fromObject(t);
          }
        };
      ((u.fromString = function (t) {
        if ("string" !== typeof t) throw new TypeError("Expected a string");
        return new u(t);
      }),
        (u.fromObject = function (t) {
          return new u(t);
        }),
        (u.isValid = function (t, e) {
          try {
            new u(t, e);
          } catch (r) {
            return !1;
          }
          return !0;
        }),
        (u.parse = function (t) {
          var e = n.parse(t, !0);
          if ("verge:" !== e.protocol) throw new TypeError("Invalid verge URI");
          var r = /[^:]*:\/?\/?([^?]*)/.exec(t);
          return ((e.query.address = (r && r[1]) || void 0), e.query);
        }),
        (u.Members = ["address", "amount", "message", "label", "r"]),
        (u.prototype._fromObject = function (t) {
          if (!s.isValid(t.address))
            throw new TypeError("Invalid verge address");
          for (var e in ((this.address = new s(t.address)),
          (this.network = this.address.network),
          (this.amount = t.amount),
          t))
            if ("address" !== e && "amount" !== e) {
              if (/^req-/.exec(e) && -1 === this.knownParams.indexOf(e))
                throw Error("Unknown required argument " + e);
              var r = u.Members.indexOf(e) > -1 ? this : this.extras;
              r[e] = t[e];
            }
        }),
        (u.prototype._parseAmount = function (t) {
          if (((t = Number(t)), isNaN(t)))
            throw new TypeError("Invalid amount");
          return o.fromBTC(t).toSatoshis();
        }),
        (u.prototype.toObject = u.prototype.toJSON =
          function () {
            for (var t = {}, e = 0; e < u.Members.length; e++) {
              var r = u.Members[e];
              this.hasOwnProperty(r) &&
                "undefined" !== typeof this[r] &&
                (t[r] = this[r].toString());
            }
            return (i.extend(t, this.extras), t);
          }),
        (u.prototype.toString = function () {
          var t = {};
          return (
            this.amount && (t.amount = o.fromSatoshis(this.amount).toBTC()),
            this.message && (t.message = this.message),
            this.label && (t.label = this.label),
            this.r && (t.r = this.r),
            i.extend(t, this.extras),
            n.format({ protocol: "verge:", host: this.address, query: t })
          );
        }),
        (u.prototype.inspect = function () {
          return "<URI: " + this.toString() + ">";
        }),
        (t.exports = u));
    },
    2899: function (t, e, r) {
      "use strict";
      var i = r(3224),
        n = r(2794);
      t.exports = {
        checkState: function (t, e) {
          if (!t) throw new i.InvalidState(e);
        },
        checkArgument: function (t, e, r, n) {
          if (!t) throw new i.InvalidArgument(e, r, n);
        },
        checkArgumentType: function (t, e, s) {
          if (((s = s || "(unknown name)"), n.isString(e))) {
            if ("Buffer" === e) {
              var o = r(2);
              if (!o.Buffer.isBuffer(t))
                throw new i.InvalidArgumentType(t, e, s);
            } else if (typeof t !== e) throw new i.InvalidArgumentType(t, e, s);
          } else if (!(t instanceof e))
            throw new i.InvalidArgumentType(t, e.name, s);
        },
      };
    },
    2962: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2),
          n = r(229),
          s = r(3005),
          o = r(2899);
        function u(t, e) {
          if (t.length !== e.length) return !1;
          for (var r = t.length, i = 0; i < r; i++)
            if (t[i] !== e[i]) return !1;
          return !0;
        }
        ((t.exports = {
          fill: function (t, e) {
            (o.checkArgumentType(t, "Buffer", "buffer"),
              o.checkArgumentType(e, "number", "value"));
            for (var r = t.length, i = 0; i < r; i++) t[i] = e;
            return t;
          },
          copy: function (t) {
            var r = e.alloc(t.length);
            return (t.copy(r), r);
          },
          isBuffer: function (t) {
            return i.Buffer.isBuffer(t) || t instanceof Uint8Array;
          },
          emptyBuffer: function (t) {
            o.checkArgumentType(t, "number", "bytes");
            for (var e = new i.Buffer(t), r = 0; r < t; r++) e.write("\0", r);
            return e;
          },
          concat: i.Buffer.concat,
          equals: u,
          equal: u,
          integerAsSingleByteBuffer: function (t) {
            return (
              o.checkArgumentType(t, "number", "integer"),
              new i.Buffer([255 & t])
            );
          },
          integerAsBuffer: function (t) {
            o.checkArgumentType(t, "number", "integer");
            var r = [];
            return (
              r.push((t >> 24) & 255),
              r.push((t >> 16) & 255),
              r.push((t >> 8) & 255),
              r.push(255 & t),
              e.from(r)
            );
          },
          integerFromBuffer: function (t) {
            return (
              o.checkArgumentType(t, "Buffer", "buffer"),
              (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3]
            );
          },
          integerFromSingleByteBuffer: function (t) {
            return (o.checkArgumentType(t, "Buffer", "buffer"), t[0]);
          },
          bufferToHex: function (t) {
            return (
              o.checkArgumentType(t, "Buffer", "buffer"),
              t.toString("hex")
            );
          },
          reverse: function (t) {
            for (var e = new i.Buffer(t.length), r = 0; r < t.length; r++)
              e[r] = t[t.length - r - 1];
            return e;
          },
          hexToBuffer: function (t) {
            return (n(s.isHexa(t)), new i.Buffer(t, "hex"));
          },
        }),
          (t.exports.NULL_HASH = t.exports.fill(e.alloc(32), 0)),
          (t.exports.EMPTY_BUFFER = e.alloc(0)));
      }).call(this, r(2).Buffer);
    },
    3005: function (t, e, r) {
      "use strict";
      var i = r(2794),
        n = function (t) {
          return !!i.isString(t) && /^[0-9a-fA-F]+$/.test(t);
        };
      t.exports = {
        isValidJSON: function (t) {
          var e;
          if (!i.isString(t)) return !1;
          try {
            e = JSON.parse(t);
          } catch (r) {
            return !1;
          }
          return "object" === typeof e;
        },
        isHexa: n,
        isHexaString: n,
        cloneArray: function (t) {
          return [].concat(t);
        },
        defineImmutable: function (t, e) {
          return (
            Object.keys(e).forEach(function (r) {
              Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                value: e[r],
              });
            }),
            t
          );
        },
        isNaturalNumber: function (t) {
          return (
            "number" === typeof t &&
            isFinite(t) &&
            Math.floor(t) === t &&
            t >= 0
          );
        },
      };
    },
    3068: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(6653),
          n = r(2899),
          s = r(2794),
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
          (t.exports = i));
      }).call(this, r(2).Buffer);
    },
    3084: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2764),
          n = r(2962),
          s = r(2899),
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
            var h = e.alloc(o);
            h.fill(92);
            var a = e.alloc(o);
            a.fill(54);
            for (var f = e.alloc(o), c = e.alloc(o), p = 0; p < o; p++)
              ((f[p] = h[p] ^ i[p]), (c[p] = a[p] ^ i[p]));
            return t(e.concat([f, t(e.concat([c, r]))]));
          }),
          (o.sha256hmac = function (t, e) {
            return o.hmac(o.sha256, t, e);
          }),
          (o.sha512hmac = function (t, e) {
            return o.hmac(o.sha512, t, e);
          }));
      }).call(this, r(2).Buffer);
    },
    3194: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3068),
          n = r(2794),
          s = r(2899),
          o = r(2962),
          u = r(3005),
          h = function t(e, r) {
            if (!(this instanceof t)) return new t(e, r);
            if (e instanceof i) this.set({ r: e, s: r });
            else if (e) {
              var n = e;
              this.set(n);
            }
          };
        ((h.prototype.set = function (t) {
          return (
            (this.r = t.r || this.r || void 0),
            (this.s = t.s || this.s || void 0),
            (this.i = "undefined" !== typeof t.i ? t.i : this.i),
            (this.compressed =
              "undefined" !== typeof t.compressed
                ? t.compressed
                : this.compressed),
            (this.nhashtype = t.nhashtype || this.nhashtype || void 0),
            this
          );
        }),
          (h.fromCompact = function (t) {
            s.checkArgument(
              o.isBuffer(t),
              "Argument is expected to be a Buffer",
            );
            var e = new h(),
              r = !0,
              n = t.slice(0, 1)[0] - 27 - 4;
            n < 0 && ((r = !1), (n += 4));
            var u = t.slice(1, 33),
              a = t.slice(33, 65);
            return (
              s.checkArgument(
                0 === n || 1 === n || 2 === n || 3 === n,
                new Error("i must be 0, 1, 2, or 3"),
              ),
              s.checkArgument(32 === u.length, new Error("r must be 32 bytes")),
              s.checkArgument(32 === a.length, new Error("s must be 32 bytes")),
              (e.compressed = r),
              (e.i = n),
              (e.r = i.fromBuffer(u)),
              (e.s = i.fromBuffer(a)),
              e
            );
          }),
          (h.fromDER = h.fromBuffer =
            function (t, e) {
              var r = h.parseDER(t, e),
                i = new h();
              return ((i.r = r.r), (i.s = r.s), i);
            }),
          (h.fromTxFormat = function (t) {
            var e = t.readUInt8(t.length - 1),
              r = t.slice(0, t.length - 1),
              i = new h.fromDER(r, !1);
            return ((i.nhashtype = e), i);
          }),
          (h.fromString = function (t) {
            var r = e.from(t, "hex");
            return h.fromDER(r);
          }),
          (h.parseDER = function (t, e) {
            (s.checkArgument(
              o.isBuffer(t),
              new Error("DER formatted signature should be a buffer"),
            ),
              n.isUndefined(e) && (e = !0));
            var r = t[0];
            s.checkArgument(48 === r, new Error("Header byte should be 0x30"));
            var u = t[1],
              h = t.slice(2).length;
            (s.checkArgument(
              !e || u === h,
              new Error("Length byte should length of what follows"),
            ),
              (u = u < h ? u : h));
            var a = t[2];
            s.checkArgument(
              2 === a,
              new Error("Integer byte for r should be 0x02"),
            );
            var f = t[3],
              c = t.slice(4, 4 + f),
              p = i.fromBuffer(c),
              l = 0 === t[4];
            s.checkArgument(f === c.length, new Error("Length of r incorrect"));
            var d = t[4 + f + 0];
            s.checkArgument(
              2 === d,
              new Error("Integer byte for s should be 0x02"),
            );
            var m = t[4 + f + 1],
              g = t.slice(4 + f + 2, 4 + f + 2 + m),
              y = i.fromBuffer(g),
              v = 0 === t[4 + f + 2 + 2];
            s.checkArgument(m === g.length, new Error("Length of s incorrect"));
            var _ = 4 + f + 2 + m;
            s.checkArgument(
              u === _ - 2,
              new Error("Length of signature incorrect"),
            );
            var S = {
              header: r,
              length: u,
              rheader: a,
              rlength: f,
              rneg: l,
              rbuf: c,
              r: p,
              sheader: d,
              slength: m,
              sneg: v,
              sbuf: g,
              s: y,
            };
            return S;
          }),
          (h.prototype.toCompact = function (t, r) {
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
          (h.prototype.toBuffer = h.prototype.toDER =
            function () {
              var t = this.r.toBuffer(),
                r = this.s.toBuffer(),
                i = !!(128 & t[0]),
                n = !!(128 & r[0]),
                s = i ? e.concat([e.from([0]), t]) : t,
                o = n ? e.concat([e.from([0]), r]) : r,
                u = s.length,
                h = o.length,
                a = 2 + u + 2 + h,
                f = 2,
                c = 2,
                p = 48,
                l = e.concat([e.from([p, a, f, u]), s, e.from([c, h]), o]);
              return l;
            }),
          (h.prototype.toString = function () {
            var t = this.toDER();
            return t.toString("hex");
          }),
          (h.isTxDER = function (t) {
            if (t.length < 9) return !1;
            if (t.length > 73) return !1;
            if (48 !== t[0]) return !1;
            if (t[1] !== t.length - 3) return !1;
            var e = t[3];
            if (5 + e >= t.length) return !1;
            var r = t[5 + e];
            if (e + r + 7 !== t.length) return !1;
            var i = t.slice(4);
            if (2 !== t[2]) return !1;
            if (0 === e) return !1;
            if (128 & i[0]) return !1;
            if (e > 1 && 0 === i[0] && !(128 & i[1])) return !1;
            var n = t.slice(6 + e);
            return (
              2 === t[6 + e - 2] &&
              0 !== r &&
              !(128 & n[0]) &&
              !(r > 1 && 0 === n[0] && !(128 & n[1]))
            );
          }),
          (h.prototype.hasLowS = function () {
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
          (h.prototype.hasDefinedHashtype = function () {
            if (!u.isNaturalNumber(this.nhashtype)) return !1;
            var t = this.nhashtype & ~h.SIGHASH_ANYONECANPAY;
            return !(t < h.SIGHASH_ALL || t > h.SIGHASH_SINGLE);
          }),
          (h.prototype.toTxFormat = function () {
            var t = this.toDER(),
              r = e.alloc(1);
            return (r.writeUInt8(this.nhashtype, 0), e.concat([t, r]));
          }),
          (h.SIGHASH_ALL = 1),
          (h.SIGHASH_NONE = 2),
          (h.SIGHASH_SINGLE = 3),
          (h.SIGHASH_ANYONECANPAY = 128),
          (t.exports = h));
      }).call(this, r(2).Buffer);
    },
    3195: function (t, e, r) {
      ((t.exports = r(6654)), (t.exports.Interpreter = r(10430)));
    },
    3196: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2962),
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
    3224: function (t, e, r) {
      "use strict";
      var i = r(2794);
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
        h = {
          Error: function () {
            ((this.message = "Internal error"),
              (this.stack = this.message + "\n" + new Error().stack));
          },
        };
      ((h.Error.prototype = Object.create(Error.prototype)),
        (h.Error.prototype.name = "bitcore.Error"));
      var a = r(10429);
      (u(h.Error, a),
        (t.exports = h.Error),
        (t.exports.extend = function (t) {
          return s(h.Error, t);
        }));
    },
    3390: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3068),
          Point = r(3943),
          n = r(3084),
          s = r(3005),
          o = r(3829),
          u = r(2794),
          h = r(2899);
        function a(t, e) {
          if (!(this instanceof a)) return new a(t, e);
          if (
            (h.checkArgument(
              t,
              "First argument is required, please include public key data.",
            ),
            t instanceof a)
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
        ((a.prototype._classifyArgs = function (t, r) {
          var i = { compressed: u.isUndefined(r.compressed) || r.compressed };
          if (t instanceof Point) i.point = t;
          else if (t.x && t.y) i = a._transformObject(t);
          else if ("string" === typeof t) i = a._transformDER(e.from(t, "hex"));
          else if (a._isBuffer(t)) i = a._transformDER(t);
          else {
            if (!a._isPrivateKey(t))
              throw new TypeError(
                "First argument is an unrecognized data format.",
              );
            i = a._transformPrivateKey(t);
          }
          return (
            i.network ||
              (i.network = u.isUndefined(r.network)
                ? void 0
                : o.get(r.network)),
            i
          );
        }),
          (a._isPrivateKey = function (t) {
            var e = r(4553);
            return t instanceof e;
          }),
          (a._isBuffer = function (t) {
            return t instanceof e || t instanceof Uint8Array;
          }),
          (a._transformPrivateKey = function (t) {
            h.checkArgument(
              a._isPrivateKey(t),
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
          (a._transformDER = function (t, e) {
            h.checkArgument(
              a._isBuffer(t),
              "Must be a hex buffer of DER encoded public key",
            );
            var r,
              n,
              s,
              o,
              f = {};
            if (
              ((e = !!u.isUndefined(e) || e),
              4 !== t[0] && (e || (6 !== t[0] && 7 !== t[0])))
            )
              if (3 === t[0])
                ((s = t.slice(1)),
                  (r = new i(s)),
                  (f = a._transformX(!0, r)),
                  (f.compressed = !0));
              else {
                if (2 !== t[0])
                  throw new TypeError("Invalid DER format public key");
                ((s = t.slice(1)),
                  (r = new i(s)),
                  (f = a._transformX(!1, r)),
                  (f.compressed = !0));
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
                (f.point = new Point(r, n)),
                (f.compressed = !1));
            }
            return f;
          }),
          (a._transformX = function (t, e) {
            h.checkArgument(
              "boolean" === typeof t,
              "Must specify whether y is odd or not (true or false)",
            );
            var r = {};
            return ((r.point = Point.fromX(t, e)), r);
          }),
          (a._transformObject = function (t) {
            var e = new i(t.x, "hex"),
              r = new i(t.y, "hex"),
              n = new Point(e, r);
            return new a(n, { compressed: t.compressed });
          }),
          (a.fromPrivateKey = function (t) {
            h.checkArgument(
              a._isPrivateKey(t),
              "Must be an instance of PrivateKey",
            );
            var e = a._transformPrivateKey(t);
            return new a(e.point, {
              compressed: e.compressed,
              network: e.network,
            });
          }),
          (a.fromDER = a.fromBuffer =
            function (t, e) {
              h.checkArgument(
                a._isBuffer(t),
                "Must be a hex buffer of DER encoded public key",
              );
              var r = a._transformDER(t, e);
              return new a(r.point, { compressed: r.compressed });
            }),
          (a.fromPoint = function (t, e) {
            return (
              h.checkArgument(
                t instanceof Point,
                "First argument must be an instance of Point.",
              ),
              new a(t, { compressed: e })
            );
          }),
          (a.fromString = function (t, r) {
            var i = e.from(t, r || "hex"),
              n = a._transformDER(i);
            return new a(n.point, { compressed: n.compressed });
          }),
          (a.fromX = function (t, e) {
            var r = a._transformX(t, e);
            return new a(r.point, { compressed: r.compressed });
          }),
          (a.getValidationError = function (t) {
            var e;
            try {
              new a(t);
            } catch (r) {
              e = r;
            }
            return e;
          }),
          (a.isValid = function (t) {
            return !a.getValidationError(t);
          }),
          (a.prototype.toObject = a.prototype.toJSON =
            function () {
              return {
                x: this.point.getX().toString("hex", 2),
                y: this.point.getY().toString("hex", 2),
                compressed: this.compressed,
              };
            }),
          (a.prototype.toBuffer = a.prototype.toDER =
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
          (a.prototype._getID = function () {
            return n.sha256ripemd160(this.toBuffer());
          }),
          (a.prototype.toAddress = function (t) {
            var e = r(3605);
            return e.fromPublicKey(this, t || this.network);
          }),
          (a.prototype.toString = function () {
            return this.toDER().toString("hex");
          }),
          (a.prototype.inspect = function () {
            return (
              "<PublicKey: " +
              this.toString() +
              (this.compressed ? "" : ", uncompressed") +
              ">"
            );
          }),
          (t.exports = a));
      }).call(this, r(2).Buffer);
    },
    3456: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(2899),
          s = r(2962),
          o = r(3068),
          u = function t(r) {
            if (!(this instanceof t)) return new t(r);
            if (!i.isUndefined(r))
              if (e.isBuffer(r)) this.set({ buf: r });
              else if (i.isString(r)) this.set({ buf: e.from(r, "hex") });
              else {
                if (!i.isObject(r))
                  throw new TypeError("Unrecognized argument for BufferReader");
                var n = r;
                this.set(n);
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
            return !this.buf || this.pos >= this.buf.length;
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
    3457: function (t, e, r) {
      "use strict";
      var i = r(2794),
        n = r(3068),
        s = r(2),
        o = r(2962),
        u = r(3005),
        h = r(3196),
        a = r(3195),
        f = r(2899),
        c = r(3224),
        p = 9007199254740991;
      function l(t) {
        if (!(this instanceof l)) return new l(t);
        if (!i.isObject(t))
          throw new TypeError("Unrecognized argument for Output");
        var e;
        ((this.satoshis = t.satoshis),
          o.isBuffer(t.script)
            ? (this._scriptBuffer = t.script)
            : ((e =
                i.isString(t.script) && u.isHexa(t.script)
                  ? new s.Buffer(t.script, "hex")
                  : t.script),
              this.setScript(e)));
      }
      (Object.defineProperty(l.prototype, "script", {
        configurable: !1,
        enumerable: !0,
        get: function () {
          return (
            this._script || this.setScriptFromBuffer(this._scriptBuffer),
            this._script
          );
        },
      }),
        Object.defineProperty(l.prototype, "satoshis", {
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
                : (f.checkArgument(
                    u.isNaturalNumber(t),
                    "Output satoshis is not a natural number",
                  ),
                  (this._satoshisBN = n.fromNumber(t)),
                  (this._satoshis = t)),
              f.checkState(
                u.isNaturalNumber(this._satoshis),
                "Output satoshis is not a natural number",
              ));
          },
        }),
        (l.prototype.invalidSatoshis = function () {
          return this._satoshis > p
            ? "transaction txout satoshis greater than max safe integer"
            : this._satoshis !== this._satoshisBN.toNumber()
              ? "transaction txout satoshis has corrupted value"
              : this._satoshis < 0 && "transaction txout negative";
        }),
        (l.prototype.toObject = l.prototype.toJSON =
          function () {
            var t = { satoshis: this.satoshis };
            return ((t.script = this._scriptBuffer.toString("hex")), t);
          }),
        (l.fromObject = function (t) {
          return new l(t);
        }),
        (l.prototype.setScriptFromBuffer = function (t) {
          this._scriptBuffer = t;
          try {
            ((this._script = a.fromBuffer(this._scriptBuffer)),
              (this._script._isOutput = !0));
          } catch (e) {
            if (!(e instanceof c.Script.InvalidBuffer)) throw e;
            this._script = null;
          }
        }),
        (l.prototype.setScript = function (t) {
          if (t instanceof a)
            ((this._scriptBuffer = t.toBuffer()),
              (this._script = t),
              (this._script._isOutput = !0));
          else if (i.isString(t))
            ((this._script = a.fromString(t)),
              (this._scriptBuffer = this._script.toBuffer()),
              (this._script._isOutput = !0));
          else {
            if (!o.isBuffer(t))
              throw new TypeError("Invalid argument type: script");
            this.setScriptFromBuffer(t);
          }
          return this;
        }),
        (l.prototype.inspect = function () {
          var t;
          return (
            (t = this.script
              ? this.script.inspect()
              : this._scriptBuffer.toString("hex")),
            "<Output (" + this.satoshis + " sats) " + t + ">"
          );
        }),
        (l.fromBufferReader = function (t) {
          var e = {};
          e.satoshis = t.readUInt64LEBN();
          var r = t.readVarintNum();
          return (
            (e.script = 0 !== r ? t.read(r) : new s.Buffer([])),
            new l(e)
          );
        }),
        (l.prototype.toBufferWriter = function (t) {
          (t || (t = new h()), t.writeUInt64LEBN(this._satoshisBN));
          var e = this._scriptBuffer;
          return (t.writeVarintNum(e.length), t.write(e), t);
        }),
        (t.exports = l));
    },
    3605: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(2899),
          s = r(3224),
          o = r(4554),
          u = r(3829),
          h = r(3084),
          a = r(3005),
          f = r(3390);
        function c(t, e, r) {
          if (!(this instanceof c)) return new c(t, e, r);
          if (i.isArray(t) && i.isNumber(e)) return c.createMultisig(t, e, r);
          if (t instanceof c) return t;
          if (
            (n.checkArgument(
              t,
              "First argument is required, please include address data.",
              "guide/address.html",
            ),
            e && !u.get(e))
          )
            throw new TypeError(
              'Second argument must be "livenet" or "testnet".',
            );
          if (r && r !== c.PayToPublicKeyHash && r !== c.PayToScriptHash)
            throw new TypeError(
              'Third argument must be "pubkeyhash" or "scripthash".',
            );
          var s = this._classifyArguments(t, e, r);
          return (
            (s.network = s.network || u.get(e) || u.defaultNetwork),
            (s.type = s.type || r || c.PayToPublicKeyHash),
            a.defineImmutable(this, {
              hashBuffer: s.hashBuffer,
              network: s.network,
              type: s.type,
            }),
            this
          );
        }
        ((c.prototype._classifyArguments = function (t, r, n) {
          if ((t instanceof e || t instanceof Uint8Array) && 20 === t.length)
            return c._transformHash(t);
          if ((t instanceof e || t instanceof Uint8Array) && 21 === t.length)
            return c._transformBuffer(t, r, n);
          if (t instanceof f) return c._transformPublicKey(t);
          if (t instanceof p) return c._transformScript(t, r);
          if ("string" === typeof t) return c._transformString(t, r, n);
          if (i.isObject(t)) return c._transformObject(t);
          throw new TypeError("First argument is an unrecognized data format.");
        }),
          (c.PayToPublicKeyHash = "pubkeyhash"),
          (c.PayToScriptHash = "scripthash"),
          (c._transformHash = function (t) {
            var r = {};
            if (!(t instanceof e) && !(t instanceof Uint8Array))
              throw new TypeError("Address supplied is not a buffer.");
            if (20 !== t.length)
              throw new TypeError(
                "Address hashbuffers must be exactly 20 bytes.",
              );
            return ((r.hashBuffer = t), r);
          }),
          (c._transformObject = function (t) {
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
          (c._classifyFromVersion = function (t) {
            var e = {},
              r = u.get(t[0], "pubkeyhash"),
              i = u.get(t[0], "scripthash");
            return (
              r
                ? ((e.network = r), (e.type = c.PayToPublicKeyHash))
                : i && ((e.network = i), (e.type = c.PayToScriptHash)),
              e
            );
          }),
          (c._transformBuffer = function (t, r, i) {
            var n = {};
            if (!(t instanceof e) && !(t instanceof Uint8Array))
              throw new TypeError("Address supplied is not a buffer.");
            if (21 !== t.length)
              throw new TypeError("Address buffers must be exactly 21 bytes.");
            var s = u.get(r),
              o = c._classifyFromVersion(t);
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
          (c._transformPublicKey = function (t) {
            var e = {};
            if (!(t instanceof f))
              throw new TypeError("Address must be an instance of PublicKey.");
            return (
              (e.hashBuffer = h.sha256ripemd160(t.toBuffer())),
              (e.type = c.PayToPublicKeyHash),
              e
            );
          }),
          (c._transformScript = function (t, e) {
            n.checkArgument(t instanceof p, "script must be a Script instance");
            var r = t.getAddressInfo(e);
            if (!r) throw new s.Script.CantDeriveAddress(t);
            return r;
          }),
          (c.createMultisig = function (t, e, r, i) {
            r = r || t[0].network || u.defaultNetwork;
            var n = p.buildMultisigOut(t, e);
            return i
              ? c.payingTo(p.buildWitnessMultisigOutFromScript(n), r)
              : c.payingTo(n, r);
          }),
          (c._transformString = function (t, e, r) {
            if ("string" !== typeof t)
              throw new TypeError("data parameter supplied is not a string.");
            t = t.trim();
            var i = o.decode(t),
              n = c._transformBuffer(i, e, r);
            return n;
          }),
          (c.fromPublicKey = function (t, e) {
            var r = c._transformPublicKey(t);
            return (
              (e = e || u.defaultNetwork),
              new c(r.hashBuffer, e, r.type)
            );
          }),
          (c.fromPublicKeyHash = function (t, e) {
            var r = c._transformHash(t);
            return new c(r.hashBuffer, e, c.PayToPublicKeyHash);
          }),
          (c.fromScriptHash = function (t, e) {
            n.checkArgument(t, "hash parameter is required");
            var r = c._transformHash(t);
            return new c(r.hashBuffer, e, c.PayToScriptHash);
          }),
          (c.payingTo = function (t, e) {
            return (
              n.checkArgument(t, "script is required"),
              n.checkArgument(
                t instanceof p,
                "script must be instance of Script",
              ),
              c.fromScriptHash(h.sha256ripemd160(t.toBuffer()), e)
            );
          }),
          (c.fromScript = function (t, e) {
            n.checkArgument(t instanceof p, "script must be a Script instance");
            var r = c._transformScript(t, e);
            return new c(r.hashBuffer, e, r.type);
          }),
          (c.fromBuffer = function (t, e, r) {
            var i = c._transformBuffer(t, e, r);
            return new c(i.hashBuffer, i.network, i.type);
          }),
          (c.fromString = function (t, e, r) {
            var i = c._transformString(t, e, r);
            return new c(i.hashBuffer, i.network, i.type);
          }),
          (c.fromObject = function (t) {
            n.checkState(
              a.isHexa(t.hash),
              'Unexpected hash property, "' + t.hash + '", expected to be hex.',
            );
            var r = e.from(t.hash, "hex");
            return new c(r, t.network, t.type);
          }),
          (c.getValidationError = function (t, e, r) {
            var i;
            try {
              new c(t, e, r);
            } catch (n) {
              i = n;
            }
            return i;
          }),
          (c.isValid = function (t, e, r) {
            return !c.getValidationError(t, e, r);
          }),
          (c.prototype.isPayToPublicKeyHash = function () {
            return this.type === c.PayToPublicKeyHash;
          }),
          (c.prototype.isPayToScriptHash = function () {
            return this.type === c.PayToScriptHash;
          }),
          (c.prototype.toBuffer = function () {
            var t = e.from([this.network[this.type]]);
            return e.concat([t, this.hashBuffer]);
          }),
          (c.prototype.toObject = c.prototype.toJSON =
            function () {
              return {
                hash: this.hashBuffer.toString("hex"),
                type: this.type,
                network: this.network.toString(),
              };
            }),
          (c.prototype.toString = function () {
            return o.encode(this.toBuffer());
          }),
          (c.prototype.inspect = function () {
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
          (t.exports = c));
        var p = r(3195);
      }).call(this, r(2).Buffer);
    },
    3606: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2),
          n = r(3194),
          s = r(3195),
          o = r(3457),
          u = r(3456),
          h = r(3196),
          a = r(3068),
          f = r(3084),
          c = r(4793),
          p = r(2899),
          l = r(2794),
          d =
            "0000000000000000000000000000000000000000000000000000000000000001",
          m = "ffffffffffffffff",
          g = function (t, c, p, l) {
            var g,
              y = r(5554),
              v = r(5555),
              _ = y.shallowCopy(t);
            for (
              l = new s(l), l.removeCodeseparators(), g = 0;
              g < _.inputs.length;
              g++
            )
              _.inputs[g] = new v(_.inputs[g]).setScript(s.empty());
            if (
              ((_.inputs[p] = new v(_.inputs[p]).setScript(l)),
              (31 & c) === n.SIGHASH_NONE || (31 & c) === n.SIGHASH_SINGLE)
            )
              for (g = 0; g < _.inputs.length; g++)
                g !== p && (_.inputs[g].sequenceNumber = 0);
            if ((31 & c) === n.SIGHASH_NONE) _.outputs = [];
            else if ((31 & c) === n.SIGHASH_SINGLE) {
              if (p >= _.outputs.length) return e.from(d, "hex");
              for (_.outputs.length = p + 1, g = 0; g < p; g++)
                _.outputs[g] = new o({
                  satoshis: a.fromBuffer(new i.Buffer(m, "hex")),
                  script: s.empty(),
                });
            }
            c & n.SIGHASH_ANYONECANPAY && (_.inputs = [_.inputs[p]]);
            var S = new h().write(_.toBuffer()).writeInt32LE(c).toBuffer(),
              b = f.sha256sha256(S);
            return ((b = new u(b).readReverse()), b);
          };
        function y(t, e, r, i, n) {
          var s = g(t, r, i, n),
            o = c.sign(s, e, "little").set({ nhashtype: r });
          return o;
        }
        function v(t, e, r, i, n) {
          (p.checkArgument(!l.isUndefined(t)),
            p.checkArgument(!l.isUndefined(e) && !l.isUndefined(e.nhashtype)));
          var s = g(t, e.nhashtype, i, n);
          return c.verify(s, e, r, "little");
        }
        t.exports = { sighash: g, sign: y, verify: v };
      }).call(this, r(2).Buffer);
    },
    3638: function (t, e) {
      t.exports = function (t, e) {
        if ("function" === typeof t.compare) return t.compare(e);
        if (t === e) return 0;
        var r = t.length,
          i = e.length,
          n = 0,
          s = Math.min(r, i);
        while (n < s) {
          if (t[n] !== e[n]) break;
          ++n;
        }
        return (
          n !== s && ((r = t[n]), (i = e[n])),
          r < i ? -1 : i < r ? 1 : 0
        );
      };
    },
    3829: function (t, e, r) {
      "use strict";
      var i = r(2794),
        n = r(2962),
        s = r(3005),
        o = [],
        u = {};
      function h() {}
      function a(t, e) {
        if (~o.indexOf(t)) return t;
        if (!e) return u[t] && u[t].length >= 1 ? u[t][0] : u[t];
        i.isArray(e) || (e = [e]);
        var r = function (e) {
          return o[n][e] === t;
        };
        for (var n in o) if (i.some(e, r)) return o[n];
      }
      function f(t) {
        var e = new h();
        return (
          s.defineImmutable(e, {
            name: t.name,
            alias: t.alias,
            pubkeyhash: t.pubkeyhash,
            privatekey: t.privatekey,
            scripthash: t.scripthash,
            xpubkey: t.xpubkey,
            xprivkey: t.xprivkey,
          }),
          t.networkMagic &&
            s.defineImmutable(e, {
              networkMagic: n.integerAsBuffer(t.networkMagic),
            }),
          t.port && s.defineImmutable(e, { port: t.port }),
          t.dnsSeeds && s.defineImmutable(e, { dnsSeeds: t.dnsSeeds }),
          i.each(e, function (t) {
            i.isUndefined(t) ||
              i.isObject(t) ||
              (u[t] || (u[t] = []), u[t].push(e));
          }),
          o.push(e),
          e
        );
      }
      function c(t) {
        for (var e = 0; e < o.length; e++) o[e] === t && o.splice(e, 1);
        for (var r in u) {
          const e = u[r].indexOf(t);
          e >= 0 && delete u[r][e];
        }
      }
      ((h.prototype.toString = function () {
        return this.name;
      }),
        f({
          name: "livenet",
          alias: "mainnet",
          pubkeyhash: 30,
          privatekey: 158,
          scripthash: 33,
          xpubkey: 36513075,
          xprivkey: 35729707,
          networkMagic: 4154949375,
          port: 21102,
          dnsSeeds: [
            "159.89.202.56",
            "138.197.68.130",
            "165.227.31.52",
            "159.89.202.56",
            "188.40.78.31",
            "176.9.143.143",
            "198.27.82.41",
          ],
        }));
      var p = a("livenet");
      f({
        name: "testnet",
        alias: "test",
        pubkeyhash: 111,
        privatekey: 239,
        scripthash: 196,
        xpubkey: 70617039,
        xprivkey: 70615956,
        networkMagic: 185665799,
        port: 18333,
        dnsSeeds: [
          "testnet-seed.bitcoin.petertodd.org",
          "testnet-seed.bluematt.me",
          "testnet-seed.alexykot.me",
          "testnet-seed.bitcoin.schildbach.de",
        ],
      });
      var l = a("testnet");
      f({
        name: "regtest",
        alias: "dev",
        pubkeyhash: 111,
        privatekey: 239,
        scripthash: 196,
        xpubkey: 70617039,
        xprivkey: 70615956,
        networkMagic: 4206867930,
        port: 18444,
        dnsSeeds: [],
      });
      var d = a("regtest");
      function m() {
        l.regtestEnabled = !0;
      }
      function g() {
        l.regtestEnabled = !1;
      }
      t.exports = {
        add: f,
        remove: c,
        defaultNetwork: p,
        livenet: p,
        mainnet: p,
        testnet: l,
        regtest: d,
        get: a,
        enableRegtest: m,
        disableRegtest: g,
      };
    },
    3943: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3068),
          n = r(2962),
          s = r(795).ec,
          o = new s("secp256k1"),
          u = o.curve.point.bind(o.curve),
          h = o.curve.pointFromX.bind(o.curve),
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
              var r = h(e, t);
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
              t = h(this.getX(), this.getY().isOdd());
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
          (t.exports = Point));
      }).call(this, r(2).Buffer);
    },
    4512: function (t, e, r) {
      (function (e) {
        const i = r(2764),
          n = 2147483647,
          s = 5e3;
        function o(t, r, s, o, u, h, a) {
          if (0 === s || 0 !== (s & (s - 1)))
            throw Error("N must be > 0 and a power of 2");
          if (s > n / 128 / o) throw Error("Parameter N is too large");
          if (o > n / 128 / u) throw Error("Parameter r is too large");
          let f,
            c = e.alloc(256 * o),
            p = e.alloc(128 * o * s),
            l = new Int32Array(16),
            d = new Int32Array(16),
            m = e.alloc(64),
            g = i.pbkdf2Sync(t, r, 1, 128 * u * o, "sha256");
          if (a) {
            let t = u * s * 2,
              e = 0;
            f = function () {
              (++e,
                e % 1e3 === 0 &&
                  a({ current: e, total: t, percent: (e / t) * 100 }));
            };
          }
          return { XY: c, V: p, B32: l, x: d, _X: m, B: g, tickCallback: f };
        }
        async function u(t, e, r, i, n, o, u, h, f, c, l) {
          l = l || s;
          let d,
            m = 0,
            g = 128 * r;
          for (t.copy(o, m, e, e + g), d = 0; d < i; d++)
            (o.copy(n, d * g, m, m + g),
              d % l === 0 && (await new Promise((t) => setImmediate(t))),
              a(o, m, g, r, u, h, f),
              c && c());
          for (d = 0; d < i; d++) {
            let t = m + 64 * (2 * r - 1),
              e = o.readUInt32LE(t) & (i - 1);
            (p(n, e * g, o, m, g),
              d % l === 0 && (await new Promise((t) => setImmediate(t))),
              a(o, m, g, r, u, h, f),
              c && c());
          }
          o.copy(t, e, m, m + g);
        }
        function h(t, e, r, i, n, s, o, u, h, f) {
          let c,
            l = 0,
            d = 128 * r;
          for (t.copy(s, l, e, e + d), c = 0; c < i; c++)
            (s.copy(n, c * d, l, l + d), a(s, l, d, r, o, u, h), f && f());
          for (c = 0; c < i; c++) {
            let t = l + 64 * (2 * r - 1),
              e = s.readUInt32LE(t) & (i - 1);
            (p(n, e * d, s, l, d), a(s, l, d, r, o, u, h), f && f());
          }
          s.copy(t, e, l, l + d);
        }
        function a(t, e, r, i, n, s, o) {
          let u;
          for (l(t, e + 64 * (2 * i - 1), n, 0, 64), u = 0; u < 2 * i; u++)
            (p(t, 64 * u, n, 0, 64), c(n, s, o), l(n, 0, t, r + 64 * u, 64));
          for (u = 0; u < i; u++) l(t, r + 2 * u * 64, t, e + 64 * u, 64);
          for (u = 0; u < i; u++)
            l(t, r + 64 * (2 * u + 1), t, e + 64 * (u + i), 64);
        }
        function f(t, e) {
          return (t << e) | (t >>> (32 - e));
        }
        function c(t, e, r) {
          let i;
          for (i = 0; i < 16; i++)
            ((e[i] = (255 & t[4 * i + 0]) << 0),
              (e[i] |= (255 & t[4 * i + 1]) << 8),
              (e[i] |= (255 & t[4 * i + 2]) << 16),
              (e[i] |= (255 & t[4 * i + 3]) << 24));
          for (l(e, 0, r, 0, 16), i = 8; i > 0; i -= 2)
            ((r[4] ^= f(r[0] + r[12], 7)),
              (r[8] ^= f(r[4] + r[0], 9)),
              (r[12] ^= f(r[8] + r[4], 13)),
              (r[0] ^= f(r[12] + r[8], 18)),
              (r[9] ^= f(r[5] + r[1], 7)),
              (r[13] ^= f(r[9] + r[5], 9)),
              (r[1] ^= f(r[13] + r[9], 13)),
              (r[5] ^= f(r[1] + r[13], 18)),
              (r[14] ^= f(r[10] + r[6], 7)),
              (r[2] ^= f(r[14] + r[10], 9)),
              (r[6] ^= f(r[2] + r[14], 13)),
              (r[10] ^= f(r[6] + r[2], 18)),
              (r[3] ^= f(r[15] + r[11], 7)),
              (r[7] ^= f(r[3] + r[15], 9)),
              (r[11] ^= f(r[7] + r[3], 13)),
              (r[15] ^= f(r[11] + r[7], 18)),
              (r[1] ^= f(r[0] + r[3], 7)),
              (r[2] ^= f(r[1] + r[0], 9)),
              (r[3] ^= f(r[2] + r[1], 13)),
              (r[0] ^= f(r[3] + r[2], 18)),
              (r[6] ^= f(r[5] + r[4], 7)),
              (r[7] ^= f(r[6] + r[5], 9)),
              (r[4] ^= f(r[7] + r[6], 13)),
              (r[5] ^= f(r[4] + r[7], 18)),
              (r[11] ^= f(r[10] + r[9], 7)),
              (r[8] ^= f(r[11] + r[10], 9)),
              (r[9] ^= f(r[8] + r[11], 13)),
              (r[10] ^= f(r[9] + r[8], 18)),
              (r[12] ^= f(r[15] + r[14], 7)),
              (r[13] ^= f(r[12] + r[15], 9)),
              (r[14] ^= f(r[13] + r[12], 13)),
              (r[15] ^= f(r[14] + r[13], 18)));
          for (i = 0; i < 16; ++i) e[i] = r[i] + e[i];
          for (i = 0; i < 16; i++) {
            let r = 4 * i;
            ((t[r + 0] = (e[i] >> 0) & 255),
              (t[r + 1] = (e[i] >> 8) & 255),
              (t[r + 2] = (e[i] >> 16) & 255),
              (t[r + 3] = (e[i] >> 24) & 255));
          }
        }
        function p(t, e, r, i, n) {
          for (let s = 0; s < n; s++) r[i + s] ^= t[e + s];
        }
        function l(t, r, i, n, s) {
          if (e.isBuffer(t) && e.isBuffer(i)) t.copy(i, n, r, r + s);
          else while (s--) i[n++] = t[r++];
        }
        t.exports = { checkAndInit: o, smix: u, smixSync: h };
      }).call(this, r(2).Buffer);
    },
    4553: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(3605),
          s = r(4554),
          o = r(3068),
          u = r(3005),
          h = r(3829),
          Point = r(3943),
          a = r(3390),
          f = r(4796),
          c = r(2899);
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
          var n = { compressed: !0, network: r ? h.get(r) : h.defaultNetwork };
          if (i.isUndefined(t) || i.isNull(t)) n.bn = p._getRandomBN();
          else if (t instanceof o) n.bn = t;
          else if (t instanceof e || t instanceof Uint8Array)
            n = p._transformBuffer(t, r);
          else if (t.bn && t.network) n = p._transformObject(t);
          else if (!r && h.get(t))
            ((n.bn = p._getRandomBN()), (n.network = h.get(t)));
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
              var r = f.getRandomBuffer(32);
              ((e = o.fromBuffer(r)), (t = e.lt(Point.getN())));
            } while (!t);
            return e;
          }),
          (p._transformBuffer = function (t, e) {
            var r = {};
            if (32 === t.length) return p._transformBNBuffer(t, e);
            if (((r.network = h.get(t[0], "privatekey")), !r.network))
              throw new Error("Invalid network");
            if (e && r.network !== h.get(e))
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
              (r.network = h.get(e) || h.defaultNetwork),
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
              r = h.get(t.network);
            return { bn: e, network: r, compressed: t.compressed };
          }),
          (p.fromString = p.fromWIF =
            function (t) {
              return (
                c.checkArgument(
                  i.isString(t),
                  "First argument is expected to be a string.",
                ),
                new p(t)
              );
            }),
          (p.fromObject = function (t) {
            return (
              c.checkArgument(
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
            return this.bn.toBuffer();
          }),
          (p.prototype.toBufferNoPadding = function () {
            return this.bn.toBuffer();
          }),
          (p.prototype.toPublicKey = function () {
            return (
              this._pubkey || (this._pubkey = a.fromPrivateKey(this)),
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
    4554: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(4794),
          s = r(2),
          o = r(3084).sha256sha256,
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
        ((u.prototype.set = function (t) {
          return ((this.buf = t.buf || this.buf || void 0), this);
        }),
          (u.validChecksum = function (t, e) {
            return (
              i.isString(t) && (t = new s.Buffer(n.decode(t))),
              i.isString(e) && (e = new s.Buffer(n.decode(e))),
              e || ((e = t.slice(-4)), (t = t.slice(0, -4))),
              u.checksum(t).toString("hex") === e.toString("hex")
            );
          }),
          (u.decode = function (t) {
            if ("string" !== typeof t)
              throw new Error("Input must be a string");
            var r = e.from(n.decode(t));
            if (r.length < 4) throw new Error("Input string too short");
            var i = r.slice(0, -4),
              s = r.slice(-4),
              u = o(i),
              h = u.slice(0, 4);
            if (s.toString("hex") !== h.toString("hex"))
              throw new Error("Checksum mismatch");
            return i;
          }),
          (u.checksum = function (t) {
            return o(t).slice(0, 4);
          }),
          (u.encode = function (t) {
            if (!e.isBuffer(t)) throw new Error("Input must be a buffer");
            var r = e.alloc(t.length + 4),
              i = u.checksum(t);
            return (t.copy(r), i.copy(r, t.length), n.encode(r));
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
    4555: function (t, e, r) {
      "use strict";
      var i = r(2794),
        n = r(2899),
        s = r(3224),
        o = r(3196),
        u = r(2),
        h = r(2962),
        a = r(3005),
        f = r(3195),
        c = r(3606),
        p = r(3457),
        l = 4294967295,
        d = l - 2,
        m = l,
        g = l - 1;
      function y(t) {
        return this instanceof y
          ? t
            ? this._fromObject(t)
            : void 0
          : new y(t);
      }
      ((y.MAXINT = l),
        (y.DEFAULT_SEQNUMBER = m),
        (y.DEFAULT_LOCKTIME_SEQNUMBER = g),
        (y.DEFAULT_RBF_SEQNUMBER = d),
        Object.defineProperty(y.prototype, "script", {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return this.isNull()
              ? null
              : (this._script ||
                  ((this._script = new f(this._scriptBuffer)),
                  (this._script._isInput = !0)),
                this._script);
          },
        }),
        (y.fromObject = function (t) {
          n.checkArgument(i.isObject(t));
          var e = new y();
          return e._fromObject(t);
        }),
        (y.prototype._fromObject = function (t) {
          var e;
          if (
            ((e =
              i.isString(t.prevTxId) && a.isHexa(t.prevTxId)
                ? new u.Buffer(t.prevTxId, "hex")
                : t.prevTxId),
            (this.witnesses = []),
            (this.output = t.output
              ? t.output instanceof p
                ? t.output
                : new p(t.output)
              : void 0),
            (this.prevTxId = e || t.txidbuf),
            (this.outputIndex = i.isUndefined(t.outputIndex)
              ? t.txoutnum
              : t.outputIndex),
            (this.sequenceNumber = i.isUndefined(t.sequenceNumber)
              ? i.isUndefined(t.seqnum)
                ? m
                : t.seqnum
              : t.sequenceNumber),
            i.isUndefined(t.script) && i.isUndefined(t.scriptBuffer))
          )
            throw new s.Transaction.Input.MissingScript();
          return (this.setScript(t.scriptBuffer || t.script), this);
        }),
        (y.prototype.toObject = y.prototype.toJSON =
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
        (y.fromBufferReader = function (t) {
          var e = new y();
          return (
            (e.prevTxId = t.readReverse(32)),
            (e.outputIndex = t.readUInt32LE()),
            (e._scriptBuffer = t.readVarLengthBuffer()),
            (e.sequenceNumber = t.readUInt32LE()),
            e
          );
        }),
        (y.prototype.toBufferWriter = function (t) {
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
        (y.prototype.setScript = function (t) {
          if (((this._script = null), t instanceof f))
            ((this._script = t),
              (this._script._isInput = !0),
              (this._scriptBuffer = t.toBuffer()));
          else if (a.isHexa(t)) this._scriptBuffer = new u.Buffer(t, "hex");
          else if (i.isString(t))
            ((this._script = new f(t)),
              (this._script._isInput = !0),
              (this._scriptBuffer = this._script.toBuffer()));
          else {
            if (!h.isBuffer(t))
              throw new TypeError("Invalid argument type: script");
            this._scriptBuffer = new u.Buffer(t);
          }
          return this;
        }),
        (y.prototype.getSignatures = function () {
          throw new s.AbstractMethodInvoked(
            "Trying to sign unsupported output type (only P2PKH and P2SH multisig inputs are supported) for input: " +
              JSON.stringify(this),
          );
        }),
        (y.prototype.getSatoshisBuffer = function () {
          return (
            n.checkState(this.output instanceof p),
            n.checkState(this.output._satoshisBN),
            new o().writeUInt64LEBN(this.output._satoshisBN).toBuffer()
          );
        }),
        (y.prototype.isFullySigned = function () {
          throw new s.AbstractMethodInvoked("Input#isFullySigned");
        }),
        (y.prototype.isFinal = function () {
          return 4294967295 !== this.sequenceNumber;
        }),
        (y.prototype.addSignature = function () {
          throw new s.AbstractMethodInvoked("Input#addSignature");
        }),
        (y.prototype.clearSignatures = function () {
          throw new s.AbstractMethodInvoked("Input#clearSignatures");
        }),
        (y.prototype.hasWitnesses = function () {
          return !!(this.witnesses && this.witnesses.length > 0);
        }),
        (y.prototype.getWitnesses = function () {
          return this.witnesses;
        }),
        (y.prototype.setWitnesses = function (t) {
          this.witnesses = t;
        }),
        (y.prototype.isValidSignature = function (t, e) {
          return (
            (e.signature.nhashtype = e.sigtype),
            c.verify(
              t,
              e.signature,
              e.publicKey,
              e.inputIndex,
              this.output.script,
            )
          );
        }),
        (y.prototype.isNull = function () {
          return (
            "0000000000000000000000000000000000000000000000000000000000000000" ===
              this.prevTxId.toString("hex") && 4294967295 === this.outputIndex
          );
        }),
        (y.prototype._estimateSize = function () {
          return this.toBufferWriter().toBuffer().length;
        }),
        (t.exports = y));
    },
    4556: function (t, e) {
      "function" === typeof Object.create
        ? (t.exports = function (t, e) {
            ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (t, e) {
            t.super_ = e;
            var r = function () {};
            ((r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t));
          });
    },
    4557: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(2899),
          s = r(4556),
          o = r(2962),
          u = r(3005),
          h = r(3390),
          a = r(3224),
          f = r(3194);
        function c(t) {
          if (!(this instanceof c)) return new c(t);
          if (t instanceof c) return t;
          if (i.isObject(t)) return this._fromObject(t);
          throw new a.InvalidArgument(
            "TransactionSignatures must be instantiated from an object",
          );
        }
        (s(c, f),
          (c.prototype._fromObject = function (t) {
            return (
              this._checkObjectArgs(t),
              (this.publicKey = new h(t.publicKey)),
              (this.prevTxId = o.isBuffer(t.prevTxId)
                ? t.prevTxId
                : e.from(t.prevTxId, "hex")),
              (this.outputIndex = t.outputIndex),
              (this.inputIndex = t.inputIndex),
              (this.signature =
                t.signature instanceof f
                  ? t.signature
                  : o.isBuffer(t.signature)
                    ? f.fromBuffer(t.signature)
                    : f.fromString(t.signature)),
              (this.sigtype = t.sigtype),
              this
            );
          }),
          (c.prototype._checkObjectArgs = function (t) {
            (n.checkArgument(h(t.publicKey), "publicKey"),
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
                t.signature instanceof f ||
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
          (c.prototype.toObject = c.prototype.toJSON =
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
          (c.fromObject = function (t) {
            return (n.checkArgument(t), new c(t));
          }),
          (t.exports = c));
      }).call(this, r(2).Buffer);
    },
    4793: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3068),
          Point = r(3943),
          n = r(3194),
          s = r(3390),
          o = r(4796),
          u = r(3084),
          h = r(2962),
          a = r(2794),
          f = r(2899),
          c = function t(e) {
            if (!(this instanceof t)) return new t(e);
            e && this.set(e);
          };
        ((c.prototype.set = function (t) {
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
          (c.prototype.privkey2pubkey = function () {
            this.pubkey = this.privkey.toPublicKey();
          }),
          (c.prototype.calci = function () {
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
          (c.fromString = function (t) {
            var e = JSON.parse(t);
            return new c(e);
          }),
          (c.prototype.randomK = function () {
            var t,
              e = Point.getN();
            do {
              t = i.fromBuffer(o.getRandomBuffer(32));
            } while (!t.lt(e) || !t.gt(i.Zero));
            return ((this.k = t), this);
          }),
          (c.prototype.deterministicK = function (t) {
            a.isUndefined(t) && (t = 0);
            var r = e.alloc(32);
            r.fill(1);
            var n = e.alloc(32);
            n.fill(0);
            var s = this.privkey.bn.toBuffer({ size: 32 }),
              o =
                "little" === this.endian
                  ? h.reverse(this.hashbuf)
                  : this.hashbuf;
            ((n = u.sha256hmac(e.concat([r, e.from([0]), s, o]), n)),
              (r = u.sha256hmac(r, n)),
              (n = u.sha256hmac(e.concat([r, e.from([1]), s, o]), n)),
              (r = u.sha256hmac(r, n)),
              (r = u.sha256hmac(r, n)));
            for (
              var f = i.fromBuffer(r), c = Point.getN(), p = 0;
              p < t || !f.lt(c) || !f.gt(i.Zero);
              p++
            )
              ((n = u.sha256hmac(e.concat([r, e.from([0])]), n)),
                (r = u.sha256hmac(r, n)),
                (r = u.sha256hmac(r, n)),
                (f = i.fromBuffer(r)));
            return ((this.k = f), this);
          }),
          (c.prototype.toPublicKey = function () {
            var t = this.sig.i;
            f.checkArgument(
              0 === t || 1 === t || 2 === t || 3 === t,
              new Error("i must be equal to 0, 1, 2, or 3"),
            );
            var e = i.fromBuffer(this.hashbuf),
              r = this.sig.r,
              n = this.sig.s,
              o = 1 & t,
              u = t >> 1,
              h = Point.getN(),
              a = Point.getG(),
              c = u ? r.add(h) : r,
              p = Point.fromX(o, c),
              l = p.mul(h);
            if (!l.isInfinity())
              throw new Error("nR is not a valid curve point");
            var d = e.neg().umod(h),
              m = r.invm(h),
              g = p.mul(n).add(a.mul(d)).mul(m),
              y = s.fromPoint(g, this.sig.compressed);
            return y;
          }),
          (c.prototype.sigError = function () {
            if (!h.isBuffer(this.hashbuf) || 32 !== this.hashbuf.length)
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
              a = Point.getG().mulAdd(o, this.pubkey.point, u);
            return a.isInfinity()
              ? "p is infinity"
              : 0 !== a.getX().umod(n).cmp(t) && "Invalid signature";
          }),
          (c.toLowS = function (t) {
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
          (c.prototype._findSignature = function (t, e) {
            var r,
              n,
              s,
              o,
              u = Point.getN(),
              h = Point.getG(),
              a = 0;
            do {
              ((!this.k || a > 0) && this.deterministicK(a),
                a++,
                (r = this.k),
                (n = h.mul(r)),
                (s = n.x.umod(u)),
                (o = r
                  .invm(u)
                  .mul(e.add(t.mul(s)))
                  .umod(u)));
            } while (s.cmp(i.Zero) <= 0 || o.cmp(i.Zero) <= 0);
            return ((o = c.toLowS(o)), { s: o, r: s });
          }),
          (c.prototype.sign = function () {
            var t = this.hashbuf,
              e = this.privkey,
              r = e.bn;
            (f.checkState(t && e && r, new Error("invalid parameters")),
              f.checkState(
                h.isBuffer(t) && 32 === t.length,
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
          (c.prototype.signRandomK = function () {
            return (this.randomK(), this.sign());
          }),
          (c.prototype.toString = function () {
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
          (c.prototype.verify = function () {
            return (
              this.sigError() ? (this.verified = !1) : (this.verified = !0),
              this
            );
          }),
          (c.sign = function (t, e, r) {
            return c().set({ hashbuf: t, endian: r, privkey: e }).sign().sig;
          }),
          (c.verify = function (t, e, r, i) {
            return c()
              .set({ hashbuf: t, endian: i, sig: e, pubkey: r })
              .verify().verified;
          }),
          (t.exports = c));
      }).call(this, r(2).Buffer);
    },
    4794: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
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
    4795: function (t, e, r) {
      ((t.exports = r(5554)),
        (t.exports.Input = r(5555)),
        (t.exports.Output = r(3457)),
        (t.exports.UnspentOutput = r(6655)),
        (t.exports.Signature = r(4557)),
        (t.exports.Sighash = r(3606)),
        (t.exports.SighashWitness = r(5556)));
    },
    4796: function (t, e, r) {
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
    4797: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(3068),
          s = r(2962),
          o = r(3456),
          u = r(3196),
          h = r(5410),
          a = (r(3005), r(2899)),
          f = 486604799,
          c = function t(e) {
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
                a.checkState(
                  this.hash === r.hash,
                  "Argument object hash property does not match block hash.",
                ),
              this
            );
          };
        ((c._from = function (t) {
          var e = {};
          if (s.isBuffer(t)) e = c._fromBufferReader(o(t));
          else {
            if (!i.isObject(t))
              throw new TypeError("Unrecognized argument for BlockHeader");
            e = c._fromObject(t);
          }
          return e;
        }),
          (c._fromObject = function (t) {
            a.checkArgument(t, "data is required");
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
          (c.fromObject = function (t) {
            var e = c._fromObject(t);
            return new c(e);
          }),
          (c.fromRawBlock = function (t) {
            s.isBuffer(t) || (t = e.from(t, "binary"));
            var r = o(t);
            r.pos = c.Constants.START_OF_HEADER;
            var i = c._fromBufferReader(r);
            return new c(i);
          }),
          (c.fromBuffer = function (t) {
            var e = c._fromBufferReader(o(t));
            return new c(e);
          }),
          (c.fromString = function (t) {
            var r = e.from(t, "hex");
            return c.fromBuffer(r);
          }),
          (c._fromBufferReader = function (t) {
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
          (c.fromBufferReader = function (t) {
            var e = c._fromBufferReader(t);
            return new c(e);
          }),
          (c.prototype.toObject = c.prototype.toJSON =
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
          (c.prototype.toBuffer = function () {
            return this.toBufferWriter().concat();
          }),
          (c.prototype.toString = function () {
            return this.toBuffer().toString("hex");
          }),
          (c.prototype.toBufferWriter = function (t) {
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
          (c.prototype.getTargetDifficulty = function (t) {
            t = t || this.bits;
            var e = new n(16777215 & t),
              r = 8 * ((t >>> 24) - 3);
            while (r-- > 0) e = e.mul(new n(2));
            return e;
          }),
          (c.prototype.getDifficulty = function () {
            var t = this.getTargetDifficulty(f).mul(new n(Math.pow(10, 8))),
              e = this.getTargetDifficulty(),
              r = t.div(e).toString(10),
              i = r.length - 8;
            return ((r = r.slice(0, i) + "." + r.slice(i)), parseFloat(r));
          }),
          (c.prototype._getHash = function () {
            var t = this.toBuffer();
            return h(t, t, 1024, 1, 1, 32);
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
        (Object.defineProperty(c.prototype, "id", p),
          Object.defineProperty(c.prototype, "hash", p),
          (c.prototype.validTimestamp = function () {
            var t = Math.round(new Date().getTime() / 1e3);
            return !(this.time > t + c.Constants.MAX_TIME_OFFSET);
          }),
          (c.prototype.validProofOfWork = function () {
            var t = new n(this.id, "hex"),
              e = this.getTargetDifficulty();
            return !(t.cmp(e) > 0);
          }),
          (c.prototype.inspect = function () {
            return "<BlockHeader " + this.id + ">";
          }),
          (c.Constants = {
            START_OF_HEADER: 8,
            MAX_TIME_OFFSET: 7200,
            LARGEST_HASH: new n(
              "10000000000000000000000000000000000000000000000000000000000000000",
              "hex",
            ),
          }),
          (t.exports = c));
      }).call(this, r(2).Buffer);
    },
    5410: function (t, e, r) {
      const i = r(5411);
      ((i.async = r(5412)), (t.exports = i));
    },
    5411: function (t, e, r) {
      const i = r(2764),
        { checkAndInit: n, smixSync: s } = r(4512);
      function o(t, e, r, o, u, h, a) {
        const {
          XY: f,
          V: c,
          B32: p,
          x: l,
          _X: d,
          B: m,
          tickCallback: g,
        } = n(t, e, r, o, u, h, a);
        for (var y = 0; y < u; y++) s(m, 128 * y * o, o, r, c, f, d, p, l, g);
        return i.pbkdf2Sync(t, m, 1, h, "sha256");
      }
      t.exports = o;
    },
    5412: function (t, e, r) {
      const i = r(2764),
        { checkAndInit: n, smix: s } = r(4512);
      async function o(t, e, r, o, u, h, a, f) {
        const {
          XY: c,
          V: p,
          B32: l,
          x: d,
          _X: m,
          B: g,
          tickCallback: y,
        } = n(t, e, r, o, u, h, a);
        for (var v = 0; v < u; v++)
          await s(g, 128 * v * o, o, r, p, c, m, l, d, y, f);
        return i.pbkdf2Sync(t, g, 1, h, "sha256");
      }
      t.exports = o;
    },
    5553: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(2899),
          s = r(2962),
          o = r(3005);
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
        for (var h in ((u.fromBuffer = function (t) {
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
          OP_SUBSTR: 127,
          OP_LEFT: 128,
          OP_RIGHT: 129,
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
          OP_CHECKLOCKTIMEVERIFY: 177,
          OP_CHECKSEQUENCEVERIFY: 178,
          OP_NOP1: 176,
          OP_NOP2: 177,
          OP_NOP3: 178,
          OP_NOP4: 179,
          OP_NOP5: 180,
          OP_NOP6: 181,
          OP_NOP7: 182,
          OP_NOP8: 183,
          OP_NOP9: 184,
          OP_NOP10: 185,
          OP_PUBKEYHASH: 253,
          OP_PUBKEY: 254,
          OP_INVALIDOPCODE: 255,
        }),
        (u.reverseMap = []),
        u.map))
          u.reverseMap[u.map[h]] = h;
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
    5554: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(2899),
          s = r(2),
          o = e.compare || r(3638),
          u = r(3224),
          h = r(2962),
          a = r(3005),
          f = r(3456),
          c = r(3196),
          p = r(3084),
          l = r(3194),
          d = r(3606),
          m = r(5556),
          g = r(3605),
          y = r(6655),
          v = r(5555),
          _ = v.PublicKeyHash,
          S = v.PublicKey,
          b = v.MultiSigScriptHash,
          w = v.MultiSig,
          I = r(3457),
          k = r(3195),
          P = r(4553),
          E = r(3068);
        function O(t) {
          if (!(this instanceof O)) return new O(t);
          if (
            ((this.inputs = []),
            (this.outputs = []),
            (this._inputAmount = void 0),
            (this._outputAmount = void 0),
            t)
          ) {
            if (t instanceof O) return O.shallowCopy(t);
            if (a.isHexa(t)) this.fromString(t);
            else if (h.isBuffer(t)) this.fromBuffer(t);
            else {
              if (!i.isObject(t))
                throw new u.InvalidArgument(
                  "Must provide an object or string to deserialize a transaction",
                );
              this.fromObject(t);
            }
          } else this._newTransaction();
        }
        var A = 1,
          T = 0,
          B = 1e6;
        ((O.DUST_AMOUNT = 546),
          (O.FEE_SECURITY_MARGIN = 150),
          (O.MAX_MONEY = 16555e14),
          (O.NLOCKTIME_BLOCKHEIGHT_LIMIT = 5e8),
          (O.NLOCKTIME_MAX_VALUE = 4294967295),
          (O.FEE_PER_KB = 1e5),
          (O.CHANGE_OUTPUT_MAX_SIZE = 62),
          (O.MAXIMUM_EXTRA_SIZE = 26),
          (O.shallowCopy = function (t) {
            var e = new O(t.toBuffer());
            return e;
          }));
        var R = {
            configurable: !1,
            enumerable: !0,
            get: function () {
              return (
                (this._hash = new f(this._getHash())
                  .readReverse()
                  .toString("hex")),
                this._hash
              );
            },
          },
          M = {
            configurable: !1,
            enumerable: !0,
            get: function () {
              return new f(this._getWitnessHash())
                .readReverse()
                .toString("hex");
            },
          };
        (Object.defineProperty(O.prototype, "witnessHash", M),
          Object.defineProperty(O.prototype, "hash", R),
          Object.defineProperty(O.prototype, "id", R));
        var N = {
          configurable: !1,
          enumerable: !0,
          get: function () {
            return this._getInputAmount();
          },
        };
        (Object.defineProperty(O.prototype, "inputAmount", N),
          (N.get = function () {
            return this._getOutputAmount();
          }),
          Object.defineProperty(O.prototype, "outputAmount", N),
          (O.prototype._getHash = function () {
            return p.sha256sha256(this.toBuffer(!0));
          }),
          (O.prototype._getWitnessHash = function () {
            return p.sha256sha256(this.toBuffer(!1));
          }),
          (O.prototype.serialize = function (t) {
            return !0 === t || (t && t.disableAll)
              ? this.uncheckedSerialize()
              : this.checkedSerialize(t);
          }),
          (O.prototype.uncheckedSerialize = O.prototype.toString =
            function () {
              return this.toBuffer().toString("hex");
            }),
          (O.prototype.checkedSerialize = function (t) {
            var e = this.getSerializationError(t);
            if (e)
              throw (
                (e.message +=
                  " - For more information please see: https://bitcore.io/api/lib/transaction#serialization-checks"),
                e
              );
            return this.uncheckedSerialize();
          }),
          (O.prototype.invalidSatoshis = function () {
            for (var t = !1, e = 0; e < this.outputs.length; e++)
              this.outputs[e].invalidSatoshis() && (t = !0);
            return t;
          }),
          (O.prototype.getSerializationError = function (t) {
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
          (O.prototype._hasFeeError = function (t, e) {
            if (!i.isUndefined(this._fee) && this._fee !== e)
              return new u.Transaction.FeeError.Different(
                "Unspent value is " + e + " but specified fee is " + this._fee,
              );
            if (!t.disableLargeFees) {
              var r = Math.floor(O.FEE_SECURITY_MARGIN * this._estimateFee());
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
              var n = this._estimateFee();
              if (e < n)
                return new u.Transaction.FeeError.TooSmall(
                  "expected more than " + n + " but got " + e,
                );
            }
          }),
          (O.prototype._missingChange = function () {
            return !this._changeScript;
          }),
          (O.prototype._hasDustOutputs = function (t) {
            var e, r;
            if (!t.disableDustOutputs)
              for (e in this.outputs)
                if (
                  ((r = this.outputs[e]),
                  r.satoshis < O.DUST_AMOUNT && !r.script.isDataOut())
                )
                  return new u.Transaction.DustOutputs();
          }),
          (O.prototype._isMissingSignatures = function (t) {
            if (!t.disableIsFullySigned)
              return this.isFullySigned()
                ? void 0
                : new u.Transaction.MissingSignatures();
          }),
          (O.prototype.inspect = function () {
            return "<Transaction: " + this.uncheckedSerialize() + ">";
          }),
          (O.prototype.toBuffer = function (t) {
            var e = new c();
            return this.toBufferWriter(e, t).toBuffer();
          }),
          (O.prototype.hasWitnesses = function () {
            for (var t = 0; t < this.inputs.length; t++)
              if (this.inputs[t].hasWitnesses()) return !0;
            return !1;
          }),
          (O.prototype.toBufferWriter = function (t, r) {
            (t.writeInt32LE(this.version), t.writeInt32LE(this.timestamp));
            var n = this.hasWitnesses();
            return (
              n && !r && t.write(new e("0001", "hex")),
              t.writeVarintNum(this.inputs.length),
              i.each(this.inputs, function (e) {
                e.toBufferWriter(t);
              }),
              t.writeVarintNum(this.outputs.length),
              i.each(this.outputs, function (e) {
                e.toBufferWriter(t);
              }),
              n &&
                !r &&
                i.each(this.inputs, function (e) {
                  var r = e.getWitnesses();
                  t.writeVarintNum(r.length);
                  for (var i = 0; i < r.length; i++)
                    (t.writeVarintNum(r[i].length), t.write(r[i]));
                }),
              t.writeUInt32LE(this.nLockTime),
              t
            );
          }),
          (O.prototype.fromBuffer = function (t) {
            var e = new f(t);
            return this.fromBufferReader(e);
          }),
          (O.prototype.fromBufferReader = function (t) {
            (n.checkArgument(!t.finished(), "No transaction data received"),
              (this.version = t.readInt32LE()),
              (this.timestamp = t.readInt32LE()));
            var e = t.readVarintNum(),
              r = !1;
            0 === e &&
              0 !== t.buf[t.pos] &&
              ((t.pos += 1), (r = !0), (e = t.readVarintNum()));
            for (var i = 0; i < e; i++) {
              var s = v.fromBufferReader(t);
              this.inputs.push(s);
            }
            for (var o = t.readVarintNum(), u = 0; u < o; u++)
              this.outputs.push(I.fromBufferReader(t));
            if (r)
              for (var h = 0; h < e; h++) {
                for (var a = t.readVarintNum(), f = [], c = 0; c < a; c++) {
                  var p = t.readVarintNum(),
                    l = t.read(p);
                  f.push(l);
                }
                this.inputs[h].setWitnesses(f);
              }
            return ((this.nLockTime = t.readUInt32LE()), this);
          }),
          (O.prototype.toObject = O.prototype.toJSON =
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
                timestamp: this.timestamp,
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
          (O.prototype.fromObject = function (t) {
            n.checkArgument(i.isObject(t) || t instanceof O);
            var e,
              r = this;
            return (
              (e = t instanceof O ? e.toObject() : t),
              i.each(e.inputs, function (t) {
                if (t.output && t.output.script) {
                  var e,
                    i = new k(t.output.script);
                  if (i.isPublicKeyHashOut()) e = new v.PublicKeyHash(t);
                  else if (i.isScriptHashOut() && t.publicKeys && t.threshold)
                    e = new v.MultiSigScriptHash(
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
                    e = new v.PublicKey(t);
                  }
                  r.addInput(e);
                } else r.uncheckedAddInput(new v(t));
              }),
              i.each(e.outputs, function (t) {
                r.addOutput(new I(t));
              }),
              e.changeIndex && (this._changeIndex = e.changeIndex),
              e.changeScript && (this._changeScript = new k(e.changeScript)),
              e.fee && (this._fee = e.fee),
              (this.nLockTime = e.nLockTime),
              (this.version = e.version),
              (this.timestamp = e.timestamp),
              this._checkConsistency(t),
              this
            );
          }),
          (O.prototype._checkConsistency = function (t) {
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
          (O.prototype.lockUntilDate = function (t) {
            if (
              (n.checkArgument(t),
              i.isNumber(t) && t < O.NLOCKTIME_BLOCKHEIGHT_LIMIT)
            )
              throw new u.Transaction.LockTimeTooEarly();
            i.isDate(t) && (t = t.getTime() / 1e3);
            for (var e = 0; e < this.inputs.length; e++)
              this.inputs[e].sequenceNumber === v.DEFAULT_SEQNUMBER &&
                (this.inputs[e].sequenceNumber = v.DEFAULT_LOCKTIME_SEQNUMBER);
            return ((this.nLockTime = t), this);
          }),
          (O.prototype.lockUntilBlockHeight = function (t) {
            if (
              (n.checkArgument(i.isNumber(t)),
              t >= O.NLOCKTIME_BLOCKHEIGHT_LIMIT)
            )
              throw new u.Transaction.BlockHeightTooHigh();
            if (t < 0) throw new u.Transaction.NLockTimeOutOfRange();
            for (var e = 0; e < this.inputs.length; e++)
              this.inputs[e].sequenceNumber === v.DEFAULT_SEQNUMBER &&
                (this.inputs[e].sequenceNumber = v.DEFAULT_LOCKTIME_SEQNUMBER);
            return ((this.nLockTime = t), this);
          }),
          (O.prototype.getLockTime = function () {
            return this.nLockTime
              ? this.nLockTime < O.NLOCKTIME_BLOCKHEIGHT_LIMIT
                ? this.nLockTime
                : new Date(1e3 * this.nLockTime)
              : null;
          }),
          (O.prototype.fromString = function (t) {
            this.fromBuffer(s.Buffer.from(t, "hex"));
          }),
          (O.prototype._newTransaction = function () {
            ((this.version = A), (this.nLockTime = T));
          }),
          (O.prototype.from = function (t, e, r, n, s) {
            if (i.isArray(t)) {
              var o = this;
              return (
                i.each(t, function (t) {
                  o.from(t, e, r);
                }),
                this
              );
            }
            var u = i.some(this.inputs, function (e) {
              return (
                e.prevTxId.toString("hex") === t.txId &&
                e.outputIndex === t.outputIndex
              );
            });
            return (
              u ||
                (e && r
                  ? this._fromMultisigUtxo(t, e, r, n, s)
                  : this._fromNonP2SH(t)),
              this
            );
          }),
          (O.prototype._fromNonP2SH = function (t) {
            var e;
            ((t = new y(t)),
              (e = t.script.isPublicKeyHashOut()
                ? _
                : t.script.isPublicKeyOut()
                  ? S
                  : v),
              this.addInput(
                new e({
                  output: new I({ script: t.script, satoshis: t.satoshis }),
                  prevTxId: t.txId,
                  outputIndex: t.outputIndex,
                  script: k.empty(),
                }),
              ));
          }),
          (O.prototype._fromMultisigUtxo = function (t, e, r, i, s) {
            var o;
            if (
              (n.checkArgument(
                r <= e.length,
                "Number of required signatures must be greater than the number of public keys",
              ),
              (t = new y(t)),
              t.script.isMultisigOut())
            )
              o = w;
            else {
              if (!t.script.isScriptHashOut()) throw new Error("@TODO");
              o = b;
            }
            this.addInput(
              new o(
                {
                  output: new I({ script: t.script, satoshis: t.satoshis }),
                  prevTxId: t.txId,
                  outputIndex: t.outputIndex,
                  script: k.empty(),
                },
                e,
                r,
                !1,
                i,
                s,
              ),
            );
          }),
          (O.prototype.addInput = function (t, e, r) {
            if (
              (n.checkArgumentType(t, v, "input"),
              !t.output && (i.isUndefined(e) || i.isUndefined(r)))
            )
              throw new u.Transaction.NeedMoreInfo(
                "Need information about the UTXO script and satoshis",
              );
            return (
              t.output ||
                !e ||
                i.isUndefined(r) ||
                ((e = e instanceof k ? e : new k(e)),
                n.checkArgumentType(r, "number", "satoshis"),
                (t.output = new I({ script: e, satoshis: r }))),
              this.uncheckedAddInput(t)
            );
          }),
          (O.prototype.uncheckedAddInput = function (t) {
            return (
              n.checkArgumentType(t, v, "input"),
              this.inputs.push(t),
              (this._inputAmount = void 0),
              this._updateChangeOutput(),
              this
            );
          }),
          (O.prototype.hasAllUtxoInfo = function () {
            return i.every(
              this.inputs.map(function (t) {
                return !!t.output;
              }),
            );
          }),
          (O.prototype.fee = function (t) {
            return (
              n.checkArgument(i.isNumber(t), "amount must be a number"),
              (this._fee = t),
              this._updateChangeOutput(),
              this
            );
          }),
          (O.prototype.feePerKb = function (t) {
            return (
              n.checkArgument(i.isNumber(t), "amount must be a number"),
              (this._feePerKb = t),
              this._updateChangeOutput(),
              this
            );
          }),
          (O.prototype.feePerByte = function (t) {
            return (
              n.checkArgument(i.isNumber(t), "amount must be a number"),
              (this._feePerByte = t),
              this._updateChangeOutput(),
              this
            );
          }),
          (O.prototype.change = function (t) {
            return (
              n.checkArgument(t, "address is required"),
              (this._changeScript = k.fromAddress(t)),
              this._updateChangeOutput(),
              this
            );
          }),
          (O.prototype.getChangeOutput = function () {
            return i.isUndefined(this._changeIndex)
              ? null
              : this.outputs[this._changeIndex];
          }),
          (O.prototype.to = function (t, e) {
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
                a.isNaturalNumber(e),
                "Amount is expected to be a positive integer",
              ),
              this.addOutput(new I({ script: k(new g(t)), satoshis: e })),
              this
            );
          }),
          (O.prototype.addData = function (t) {
            return (
              this.addOutput(new I({ script: k.buildDataOut(t), satoshis: 0 })),
              this
            );
          }),
          (O.prototype.addOutput = function (t) {
            return (
              n.checkArgumentType(t, I, "output"),
              this._addOutput(t),
              this._updateChangeOutput(),
              this
            );
          }),
          (O.prototype.clearOutputs = function () {
            return (
              (this.outputs = []),
              this._clearSignatures(),
              (this._outputAmount = void 0),
              (this._changeIndex = void 0),
              this._updateChangeOutput(),
              this
            );
          }),
          (O.prototype._addOutput = function (t) {
            (this.outputs.push(t), (this._outputAmount = void 0));
          }),
          (O.prototype._getOutputAmount = function () {
            if (i.isUndefined(this._outputAmount)) {
              var t = this;
              ((this._outputAmount = 0),
                i.each(this.outputs, function (e) {
                  t._outputAmount += e.satoshis;
                }));
            }
            return this._outputAmount;
          }),
          (O.prototype._getInputAmount = function () {
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
          (O.prototype._updateChangeOutput = function () {
            if (this._changeScript) {
              (this._clearSignatures(),
                i.isUndefined(this._changeIndex) ||
                  this._removeOutput(this._changeIndex));
              var t = this._getUnspentValue(),
                e = this.getFee(),
                r = t - e;
              r > 0
                ? ((this._changeIndex = this.outputs.length),
                  this._addOutput(
                    new I({ script: this._changeScript, satoshis: r }),
                  ))
                : (this._changeIndex = void 0);
            }
          }),
          (O.prototype.getFee = function () {
            return this.isCoinbase()
              ? 0
              : i.isUndefined(this._fee)
                ? this._changeScript
                  ? this._estimateFee()
                  : this._getUnspentValue()
                : this._fee;
          }),
          (O.prototype._estimateFee = function () {
            var t = this._estimateSize(),
              e = this._getUnspentValue(),
              r = this._feePerByte || (this._feePerKb || O.FEE_PER_KB) / 1e3;
            function i(t) {
              return t * r;
            }
            var n = Math.ceil(i(t)),
              s = Math.ceil(i(t) + i(O.CHANGE_OUTPUT_MAX_SIZE));
            return !this._changeScript || e <= s ? n : s;
          }),
          (O.prototype._getUnspentValue = function () {
            return this._getInputAmount() - this._getOutputAmount();
          }),
          (O.prototype._clearSignatures = function () {
            i.each(this.inputs, function (t) {
              t.clearSignatures();
            });
          }),
          (O.prototype._estimateSize = function () {
            var t = O.MAXIMUM_EXTRA_SIZE;
            return (
              i.each(this.inputs, function (e) {
                t += e._estimateSize();
              }),
              i.each(this.outputs, function (e) {
                t += e.script.toBuffer().length + 9;
              }),
              t
            );
          }),
          (O.prototype._removeOutput = function (t) {
            var e = this.outputs[t];
            ((this.outputs = i.without(this.outputs, e)),
              (this._outputAmount = void 0));
          }),
          (O.prototype.removeOutput = function (t) {
            (this._removeOutput(t), this._updateChangeOutput());
          }),
          (O.prototype.sort = function () {
            return (
              this.sortInputs(function (t) {
                var e = Array.prototype.concat.apply([], t);
                return (
                  e.sort(function (t, e) {
                    return (
                      o(t.prevTxId, e.prevTxId) || t.outputIndex - e.outputIndex
                    );
                  }),
                  e
                );
              }),
              this.sortOutputs(function (t) {
                var e = Array.prototype.concat.apply([], t);
                return (
                  e.sort(function (t, e) {
                    return (
                      t.satoshis - e.satoshis ||
                      o(t.script.toBuffer(), e.script.toBuffer())
                    );
                  }),
                  e
                );
              }),
              this
            );
          }),
          (O.prototype.shuffleOutputs = function () {
            return this.sortOutputs(i.shuffle);
          }),
          (O.prototype.sortOutputs = function (t) {
            var e = t(this.outputs);
            return this._newOutputOrder(e);
          }),
          (O.prototype.sortInputs = function (t) {
            return (
              (this.inputs = t(this.inputs)),
              this._clearSignatures(),
              this
            );
          }),
          (O.prototype._newOutputOrder = function (t) {
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
          (O.prototype.removeInput = function (t, e) {
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
          (O.prototype.sign = function (t, e) {
            n.checkState(
              this.hasAllUtxoInfo(),
              "Not all utxo information is available to sign the transaction.",
            );
            var r = this;
            return i.isArray(t)
              ? (i.each(t, function (t) {
                  r.sign(t, e);
                }),
                this)
              : (i.each(this.getSignatures(t, e), function (t) {
                  r.applySignature(t);
                }),
                this);
          }),
          (O.prototype.getSignatures = function (t, e) {
            ((t = new P(t)), (e = e || l.SIGHASH_ALL));
            var r = this,
              n = [],
              s = p.sha256ripemd160(t.publicKey.toBuffer());
            return (
              i.each(this.inputs, function (o, u) {
                i.each(o.getSignatures(r, t, u, e, s), function (t) {
                  n.push(t);
                });
              }),
              n
            );
          }),
          (O.prototype.applySignature = function (t) {
            return (this.inputs[t.inputIndex].addSignature(this, t), this);
          }),
          (O.prototype.isFullySigned = function () {
            return (
              i.each(this.inputs, function (t) {
                if (t.isFullySigned === v.prototype.isFullySigned)
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
          (O.prototype.isValidSignature = function (t) {
            var e = this;
            if (
              this.inputs[t.inputIndex].isValidSignature ===
              v.prototype.isValidSignature
            )
              throw new u.Transaction.UnableToVerifySignature(
                "Unrecognized script kind, or not enough information to execute script.This usually happens when creating a transaction from a serialized transaction",
              );
            return this.inputs[t.inputIndex].isValidSignature(e, t);
          }),
          (O.prototype.verifySignature = function (t, e, r, s, o, u) {
            if ((i.isUndefined(o) && (o = 0), 1 === o)) {
              var h,
                f = s.toBuffer(),
                p = new c();
              (p.writeVarintNum(f.length),
                p.write(f),
                u
                  ? (n.checkState(a.isNaturalNumber(u)),
                    (h = new c().writeUInt64LEBN(new E(u)).toBuffer()))
                  : (h = this.inputs[r].getSatoshisBuffer()));
              var l = m.verify(this, t, e, r, p.toBuffer(), h);
              return l;
            }
            return d.verify(this, t, e, r, s);
          }),
          (O.prototype.verify = function () {
            if (0 === this.inputs.length) return "transaction txins empty";
            if (0 === this.outputs.length) return "transaction txouts empty";
            for (var t = new E(0), e = 0; e < this.outputs.length; e++) {
              var r = this.outputs[e];
              if (r.invalidSatoshis())
                return "transaction txout " + e + " satoshis is invalid";
              if (r._satoshisBN.gt(new E(O.MAX_MONEY, 10)))
                return "transaction txout " + e + " greater than MAX_MONEY";
              if (((t = t.add(r._satoshisBN)), t.gt(new E(O.MAX_MONEY))))
                return (
                  "transaction txout " +
                  e +
                  " total output greater than MAX_MONEY"
                );
            }
            if (this.toBuffer().length > B)
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
              var h = this.inputs[0]._scriptBuffer;
              if (h.length < 2 || h.length > 100)
                return "coinbase transaction script size invalid";
            } else
              for (e = 0; e < this.inputs.length; e++)
                if (this.inputs[e].isNull())
                  return "transaction input " + e + " has null input";
            return !0;
          }),
          (O.prototype.isCoinbase = function () {
            return 1 === this.inputs.length && this.inputs[0].isNull();
          }),
          (O.prototype.isRBF = function () {
            for (var t = 0; t < this.inputs.length; t++) {
              var e = this.inputs[t];
              if (e.sequenceNumber < v.MAXINT - 1) return !0;
            }
            return !1;
          }),
          (O.prototype.enableRBF = function () {
            for (var t = 0; t < this.inputs.length; t++) {
              var e = this.inputs[t];
              e.sequenceNumber >= v.MAXINT - 1 &&
                (e.sequenceNumber = v.DEFAULT_RBF_SEQNUMBER);
            }
            return this;
          }),
          (t.exports = O));
      }).call(this, r(2).Buffer);
    },
    5555: function (t, e, r) {
      ((t.exports = r(4555)),
        (t.exports.PublicKey = r(10431)),
        (t.exports.PublicKeyHash = r(10432)),
        (t.exports.MultiSig = r(10433)),
        (t.exports.MultiSigScriptHash = r(10434)));
    },
    5556: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3194),
          n = (r(3195), r(3457), r(3456)),
          s = r(3196),
          o = (r(3068), r(3084)),
          u = r(4793),
          h = r(2899),
          a = r(2794),
          f = function (t, r, u, h, a) {
            var f, c, p;
            if (!(r & i.SIGHASH_ANYONECANPAY)) {
              for (var l = [], d = 0; d < t.inputs.length; d++) {
                var m = t.inputs[d],
                  g = new n(m.prevTxId).readReverse();
                l.push(g);
                var y = new e(new Array(4));
                (y.writeUInt32LE(m.outputIndex, 0), l.push(y));
              }
              f = o.sha256sha256(e.concat(l));
            }
            if (
              !(r & i.SIGHASH_ANYONECANPAY) &&
              (31 & r) !== i.SIGHASH_SINGLE &&
              (31 & r) !== i.SIGHASH_NONE
            ) {
              for (var v = [], _ = 0; _ < t.inputs.length; _++) {
                var S = new e(new Array(4));
                (S.writeUInt32LE(t.inputs[_].sequenceNumber, 0), v.push(S));
              }
              c = o.sha256sha256(e.concat(v));
            }
            var b = new s();
            if ((31 & r) !== i.SIGHASH_SINGLE && (31 & r) !== i.SIGHASH_NONE) {
              for (var w = 0; w < t.outputs.length; w++)
                t.outputs[w].toBufferWriter(b);
              p = o.sha256sha256(b.toBuffer());
            } else
              (31 & r) === i.SIGHASH_SINGLE &&
                u < t.outputs.length &&
                (t.outputs[u].toBufferWriter(b),
                (p = o.sha256sha256(b.toBuffer())));
            var I = new s();
            (I.writeUInt32LE(t.version), I.write(f), I.write(c));
            var k = new n(t.inputs[u].prevTxId).readReverse();
            return (
              I.write(k),
              I.writeUInt32LE(t.inputs[u].outputIndex),
              I.write(h),
              I.write(a),
              I.writeUInt32LE(t.inputs[u].sequenceNumber),
              I.write(p),
              I.writeUInt32LE(t.nLockTime),
              I.writeInt32LE(r),
              o.sha256sha256(I.toBuffer())
            );
          };
        function c(t, e, r, i, n, s) {
          var o = f(t, r, i, n, s),
            h = u.sign(o, e).set({ nhashtype: r });
          return h;
        }
        function p(t, e, r, i, n, s) {
          (h.checkArgument(!a.isUndefined(t)),
            h.checkArgument(!a.isUndefined(e) && !a.isUndefined(e.nhashtype)));
          var o = f(t, e.nhashtype, i, n, s);
          return u.verify(o, e, r);
        }
        t.exports = { sighash: f, sign: c, verify: p };
      }).call(this, r(2).Buffer);
    },
    5557: function (t, e, r) {
      "use strict";
      var i = r(2794),
        n = r(3224),
        s = r(2899),
        o = {
          BTC: [1e8, 8],
          mBTC: [1e5, 5],
          uBTC: [100, 2],
          bits: [100, 2],
          satoshis: [1, 0],
        };
      function u(t, e) {
        if (!(this instanceof u)) return new u(t, e);
        if (i.isNumber(e)) {
          if (e <= 0) throw new n.Unit.InvalidRate(e);
          ((t /= e), (e = u.BTC));
        }
        this._value = this._from(t, e);
        var r = this,
          s = function (t) {
            Object.defineProperty(r, t, {
              get: function () {
                return r.to(t);
              },
              enumerable: !0,
            });
          };
        Object.keys(o).forEach(s);
      }
      (Object.keys(o).forEach(function (t) {
        u[t] = t;
      }),
        (u.fromObject = function (t) {
          return (
            s.checkArgument(
              i.isObject(t),
              "Argument is expected to be an object",
            ),
            new u(t.amount, t.code)
          );
        }),
        (u.fromBTC = function (t) {
          return new u(t, u.BTC);
        }),
        (u.fromMillis = u.fromMilis =
          function (t) {
            return new u(t, u.mBTC);
          }),
        (u.fromMicros = u.fromBits =
          function (t) {
            return new u(t, u.bits);
          }),
        (u.fromSatoshis = function (t) {
          return new u(t, u.satoshis);
        }),
        (u.fromFiat = function (t, e) {
          return new u(t, e);
        }),
        (u.prototype._from = function (t, e) {
          if (!o[e]) throw new n.Unit.UnknownCode(e);
          return parseInt((t * o[e][0]).toFixed());
        }),
        (u.prototype.to = function (t) {
          if (i.isNumber(t)) {
            if (t <= 0) throw new n.Unit.InvalidRate(t);
            return parseFloat((this.BTC * t).toFixed(2));
          }
          if (!o[t]) throw new n.Unit.UnknownCode(t);
          var e = this._value / o[t][0];
          return parseFloat(e.toFixed(o[t][1]));
        }),
        (u.prototype.toBTC = function () {
          return this.to(u.BTC);
        }),
        (u.prototype.toMillis = u.prototype.toMilis =
          function () {
            return this.to(u.mBTC);
          }),
        (u.prototype.toMicros = u.prototype.toBits =
          function () {
            return this.to(u.bits);
          }),
        (u.prototype.toSatoshis = function () {
          return this.to(u.satoshis);
        }),
        (u.prototype.atRate = function (t) {
          return this.to(t);
        }),
        (u.prototype.toString = function () {
          return this.satoshis + " satoshis";
        }),
        (u.prototype.toObject = u.prototype.toJSON =
          function () {
            return { amount: this.BTC, code: u.BTC };
          }),
        (u.prototype.inspect = function () {
          return "<Unit: " + this.toString() + ">";
        }),
        (t.exports = u));
    },
    6653: function (t, e, r) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function i(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function n(t, e) {
            t.super_ = e;
            var r = function () {};
            ((r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t));
          }
          function s(t, e, r) {
            if (s.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
                this._init(t || 0, e || 10, r || "be")));
          }
          var o;
          ("object" === typeof t ? (t.exports = s) : (e.BN = s),
            (s.BN = s),
            (s.wordSize = 26));
          try {
            o = r(10428).Buffer;
          } catch (E) {}
          function u(t, e, r) {
            for (var i = 0, n = Math.min(t.length, r), s = e; s < n; s++) {
              var o = t.charCodeAt(s) - 48;
              ((i <<= 4),
                (i |=
                  o >= 49 && o <= 54
                    ? o - 49 + 10
                    : o >= 17 && o <= 22
                      ? o - 17 + 10
                      : 15 & o));
            }
            return i;
          }
          function h(t, e, r, i) {
            for (var n = 0, s = Math.min(t.length, r), o = e; o < s; o++) {
              var u = t.charCodeAt(o) - 48;
              ((n *= i),
                (n += u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u));
            }
            return n;
          }
          ((s.isBN = function (t) {
            return (
              t instanceof s ||
              (null !== t &&
                "object" === typeof t &&
                t.constructor.wordSize === s.wordSize &&
                Array.isArray(t.words))
            );
          }),
            (s.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (s.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (s.prototype._init = function (t, e, r) {
              if ("number" === typeof t) return this._initNumber(t, e, r);
              if ("object" === typeof t) return this._initArray(t, e, r);
              ("hex" === e && (e = 16),
                i(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var n = 0;
              ("-" === t[0] && n++,
                16 === e ? this._parseHex(t, n) : this._parseBase(t, e, n),
                "-" === t[0] && (this.negative = 1),
                this.strip(),
                "le" === r && this._initArray(this.toArray(), e, r));
            }),
            (s.prototype._initNumber = function (t, e, r) {
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
                "le" === r && this._initArray(this.toArray(), e, r));
            }),
            (s.prototype._initArray = function (t, e, r) {
              if ((i("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var s,
                o,
                u = 0;
              if ("be" === r)
                for (n = t.length - 1, s = 0; n >= 0; n -= 3)
                  ((o = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[s] |= (o << u) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - u)) & 67108863),
                    (u += 24),
                    u >= 26 && ((u -= 26), s++));
              else if ("le" === r)
                for (n = 0, s = 0; n < t.length; n += 3)
                  ((o = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[s] |= (o << u) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - u)) & 67108863),
                    (u += 24),
                    u >= 26 && ((u -= 26), s++));
              return this.strip();
            }),
            (s.prototype._parseHex = function (t, e) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var i,
                n,
                s = 0;
              for (r = t.length - 6, i = 0; r >= e; r -= 6)
                ((n = u(t, r, r + 6)),
                  (this.words[i] |= (n << s) & 67108863),
                  (this.words[i + 1] |= (n >>> (26 - s)) & 4194303),
                  (s += 24),
                  s >= 26 && ((s -= 26), i++));
              (r + 6 !== e &&
                ((n = u(t, e, r + 6)),
                (this.words[i] |= (n << s) & 67108863),
                (this.words[i + 1] |= (n >>> (26 - s)) & 4194303)),
                this.strip());
            }),
            (s.prototype._parseBase = function (t, e, r) {
              ((this.words = [0]), (this.length = 1));
              for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
              (i--, (n = (n / e) | 0));
              for (
                var s = t.length - r,
                  o = s % i,
                  u = Math.min(s, s - o) + r,
                  a = 0,
                  f = r;
                f < u;
                f += i
              )
                ((a = h(t, f, f + i, e)),
                  this.imuln(n),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a));
              if (0 !== o) {
                var c = 1;
                for (a = h(t, f, t.length, e), f = 0; f < o; f++) c *= e;
                (this.imuln(c),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a));
              }
            }),
            (s.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (s.prototype.clone = function () {
              var t = new s(null);
              return (this.copy(t), t);
            }),
            (s.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (s.prototype.strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (s.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            (s.prototype.inspect = function () {
              return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            }));
          var a = [
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
            f = [
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
          function p(t) {
            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
              var i = (r / 26) | 0,
                n = r % 26;
              e[r] = (t.words[i] & (1 << n)) >>> n;
            }
            return e;
          }
          function l(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var i = (t.length + e.length) | 0;
            ((r.length = i), (i = (i - 1) | 0));
            var n = 0 | t.words[0],
              s = 0 | e.words[0],
              o = n * s,
              u = 67108863 & o,
              h = (o / 67108864) | 0;
            r.words[0] = u;
            for (var a = 1; a < i; a++) {
              for (
                var f = h >>> 26,
                  c = 67108863 & h,
                  p = Math.min(a, e.length - 1),
                  l = Math.max(0, a - t.length + 1);
                l <= p;
                l++
              ) {
                var d = (a - l) | 0;
                ((n = 0 | t.words[d]),
                  (s = 0 | e.words[l]),
                  (o = n * s + c),
                  (f += (o / 67108864) | 0),
                  (c = 67108863 & o));
              }
              ((r.words[a] = 0 | c), (h = 0 | f));
            }
            return (0 !== h ? (r.words[a] = 0 | h) : r.length--, r.strip());
          }
          ((s.prototype.toString = function (t, e) {
            var r;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              r = "";
              for (var n = 0, s = 0, o = 0; o < this.length; o++) {
                var u = this.words[o],
                  h = (16777215 & ((u << n) | s)).toString(16);
                ((s = (u >>> (24 - n)) & 16777215),
                  (r =
                    0 !== s || o !== this.length - 1
                      ? a[6 - h.length] + h + r
                      : h + r),
                  (n += 2),
                  n >= 26 && ((n -= 26), o--));
              }
              0 !== s && (r = s.toString(16) + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var p = f[t],
                l = c[t];
              r = "";
              var d = this.clone();
              d.negative = 0;
              while (!d.isZero()) {
                var m = d.modn(l).toString(t);
                ((d = d.idivn(l)),
                  (r = d.isZero() ? m + r : a[p - m.length] + m + r));
              }
              this.isZero() && (r = "0" + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            i(!1, "Base should be between 2 and 36");
          }),
            (s.prototype.toNumber = function () {
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
            (s.prototype.toJSON = function () {
              return this.toString(16);
            }),
            (s.prototype.toBuffer = function (t, e) {
              return (i("undefined" !== typeof o), this.toArrayLike(o, t, e));
            }),
            (s.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }),
            (s.prototype.toArrayLike = function (t, e, r) {
              var n = this.byteLength(),
                s = r || Math.max(1, n);
              (i(n <= s, "byte array longer than desired length"),
                i(s > 0, "Requested array length <= 0"),
                this.strip());
              var o,
                u,
                h = "le" === e,
                a = new t(s),
                f = this.clone();
              if (h) {
                for (u = 0; !f.isZero(); u++)
                  ((o = f.andln(255)), f.iushrn(8), (a[u] = o));
                for (; u < s; u++) a[u] = 0;
              } else {
                for (u = 0; u < s - n; u++) a[u] = 0;
                for (u = 0; !f.isZero(); u++)
                  ((o = f.andln(255)), f.iushrn(8), (a[s - u - 1] = o));
              }
              return a;
            }),
            Math.clz32
              ? (s.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (s.prototype._countBits = function (t) {
                  var e = t,
                    r = 0;
                  return (
                    e >= 4096 && ((r += 13), (e >>>= 13)),
                    e >= 64 && ((r += 7), (e >>>= 7)),
                    e >= 8 && ((r += 4), (e >>>= 4)),
                    e >= 2 && ((r += 2), (e >>>= 2)),
                    r + e
                  );
                }),
            (s.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                r = 0;
              return (
                0 === (8191 & e) && ((r += 13), (e >>>= 13)),
                0 === (127 & e) && ((r += 7), (e >>>= 7)),
                0 === (15 & e) && ((r += 4), (e >>>= 4)),
                0 === (3 & e) && ((r += 2), (e >>>= 2)),
                0 === (1 & e) && r++,
                r
              );
            }),
            (s.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (s.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e]);
                if (((t += r), 26 !== r)) break;
              }
              return t;
            }),
            (s.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (s.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (s.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (s.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (s.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (s.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (s.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this.strip();
            }),
            (s.prototype.ior = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuor(t));
            }),
            (s.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (s.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (s.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var r = 0; r < e.length; r++)
                this.words[r] = this.words[r] & t.words[r];
              return ((this.length = e.length), this.strip());
            }),
            (s.prototype.iand = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuand(t));
            }),
            (s.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (s.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (s.prototype.iuxor = function (t) {
              var e, r;
              this.length > t.length
                ? ((e = this), (r = t))
                : ((e = t), (r = this));
              for (var i = 0; i < r.length; i++)
                this.words[i] = e.words[i] ^ r.words[i];
              if (this !== e)
                for (; i < e.length; i++) this.words[i] = e.words[i];
              return ((this.length = e.length), this.strip());
            }),
            (s.prototype.ixor = function (t) {
              return (i(0 === (this.negative | t.negative)), this.iuxor(t));
            }),
            (s.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (s.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (s.prototype.inotn = function (t) {
              i("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                r = t % 26;
              (this._expand(e), r > 0 && e--);
              for (var n = 0; n < e; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                r > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
                this.strip()
              );
            }),
            (s.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (s.prototype.setn = function (t, e) {
              i("number" === typeof t && t >= 0);
              var r = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = e
                  ? this.words[r] | (1 << n)
                  : this.words[r] & ~(1 << n)),
                this.strip()
              );
            }),
            (s.prototype.iadd = function (t) {
              var e, r, i;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((r = this), (i = t))
                : ((r = t), (i = this));
              for (var n = 0, s = 0; s < i.length; s++)
                ((e = (0 | r.words[s]) + (0 | i.words[s]) + n),
                  (this.words[s] = 67108863 & e),
                  (n = e >>> 26));
              for (; 0 !== n && s < r.length; s++)
                ((e = (0 | r.words[s]) + n),
                  (this.words[s] = 67108863 & e),
                  (n = e >>> 26));
              if (((this.length = r.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (r !== this)
                for (; s < r.length; s++) this.words[s] = r.words[s];
              return this;
            }),
            (s.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (e = t.sub(this)),
                    (this.negative = 1),
                    e)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (s.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return ((t.negative = 1), e._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                i,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((r = this), (i = t)) : ((r = t), (i = this));
              for (var s = 0, o = 0; o < i.length; o++)
                ((e = (0 | r.words[o]) - (0 | i.words[o]) + s),
                  (s = e >> 26),
                  (this.words[o] = 67108863 & e));
              for (; 0 !== s && o < r.length; o++)
                ((e = (0 | r.words[o]) + s),
                  (s = e >> 26),
                  (this.words[o] = 67108863 & e));
              if (0 === s && o < r.length && r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return (
                (this.length = Math.max(this.length, o)),
                r !== this && (this.negative = 1),
                this.strip()
              );
            }),
            (s.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var d = function (t, e, r) {
            var i,
              n,
              s,
              o = t.words,
              u = e.words,
              h = r.words,
              a = 0,
              f = 0 | o[0],
              c = 8191 & f,
              p = f >>> 13,
              l = 0 | o[1],
              d = 8191 & l,
              m = l >>> 13,
              g = 0 | o[2],
              y = 8191 & g,
              v = g >>> 13,
              _ = 0 | o[3],
              S = 8191 & _,
              b = _ >>> 13,
              w = 0 | o[4],
              I = 8191 & w,
              k = w >>> 13,
              P = 0 | o[5],
              E = 8191 & P,
              O = P >>> 13,
              A = 0 | o[6],
              T = 8191 & A,
              B = A >>> 13,
              R = 0 | o[7],
              M = 8191 & R,
              N = R >>> 13,
              x = 0 | o[8],
              C = 8191 & x,
              U = x >>> 13,
              L = 0 | o[9],
              H = 8191 & L,
              K = L >>> 13,
              F = 0 | u[0],
              D = 8191 & F,
              V = F >>> 13,
              z = 0 | u[1],
              G = 8191 & z,
              j = z >>> 13,
              Y = 0 | u[2],
              W = 8191 & Y,
              q = Y >>> 13,
              Z = 0 | u[3],
              X = 8191 & Z,
              Q = Z >>> 13,
              J = 0 | u[4],
              $ = 8191 & J,
              tt = J >>> 13,
              et = 0 | u[5],
              rt = 8191 & et,
              it = et >>> 13,
              nt = 0 | u[6],
              st = 8191 & nt,
              ot = nt >>> 13,
              ut = 0 | u[7],
              ht = 8191 & ut,
              at = ut >>> 13,
              ft = 0 | u[8],
              ct = 8191 & ft,
              pt = ft >>> 13,
              lt = 0 | u[9],
              dt = 8191 & lt,
              mt = lt >>> 13;
            ((r.negative = t.negative ^ e.negative),
              (r.length = 19),
              (i = Math.imul(c, D)),
              (n = Math.imul(c, V)),
              (n = (n + Math.imul(p, D)) | 0),
              (s = Math.imul(p, V)));
            var gt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (i = Math.imul(d, D)),
              (n = Math.imul(d, V)),
              (n = (n + Math.imul(m, D)) | 0),
              (s = Math.imul(m, V)),
              (i = (i + Math.imul(c, G)) | 0),
              (n = (n + Math.imul(c, j)) | 0),
              (n = (n + Math.imul(p, G)) | 0),
              (s = (s + Math.imul(p, j)) | 0));
            var yt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (i = Math.imul(y, D)),
              (n = Math.imul(y, V)),
              (n = (n + Math.imul(v, D)) | 0),
              (s = Math.imul(v, V)),
              (i = (i + Math.imul(d, G)) | 0),
              (n = (n + Math.imul(d, j)) | 0),
              (n = (n + Math.imul(m, G)) | 0),
              (s = (s + Math.imul(m, j)) | 0),
              (i = (i + Math.imul(c, W)) | 0),
              (n = (n + Math.imul(c, q)) | 0),
              (n = (n + Math.imul(p, W)) | 0),
              (s = (s + Math.imul(p, q)) | 0));
            var vt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (i = Math.imul(S, D)),
              (n = Math.imul(S, V)),
              (n = (n + Math.imul(b, D)) | 0),
              (s = Math.imul(b, V)),
              (i = (i + Math.imul(y, G)) | 0),
              (n = (n + Math.imul(y, j)) | 0),
              (n = (n + Math.imul(v, G)) | 0),
              (s = (s + Math.imul(v, j)) | 0),
              (i = (i + Math.imul(d, W)) | 0),
              (n = (n + Math.imul(d, q)) | 0),
              (n = (n + Math.imul(m, W)) | 0),
              (s = (s + Math.imul(m, q)) | 0),
              (i = (i + Math.imul(c, X)) | 0),
              (n = (n + Math.imul(c, Q)) | 0),
              (n = (n + Math.imul(p, X)) | 0),
              (s = (s + Math.imul(p, Q)) | 0));
            var _t = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (i = Math.imul(I, D)),
              (n = Math.imul(I, V)),
              (n = (n + Math.imul(k, D)) | 0),
              (s = Math.imul(k, V)),
              (i = (i + Math.imul(S, G)) | 0),
              (n = (n + Math.imul(S, j)) | 0),
              (n = (n + Math.imul(b, G)) | 0),
              (s = (s + Math.imul(b, j)) | 0),
              (i = (i + Math.imul(y, W)) | 0),
              (n = (n + Math.imul(y, q)) | 0),
              (n = (n + Math.imul(v, W)) | 0),
              (s = (s + Math.imul(v, q)) | 0),
              (i = (i + Math.imul(d, X)) | 0),
              (n = (n + Math.imul(d, Q)) | 0),
              (n = (n + Math.imul(m, X)) | 0),
              (s = (s + Math.imul(m, Q)) | 0),
              (i = (i + Math.imul(c, $)) | 0),
              (n = (n + Math.imul(c, tt)) | 0),
              (n = (n + Math.imul(p, $)) | 0),
              (s = (s + Math.imul(p, tt)) | 0));
            var St = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (i = Math.imul(E, D)),
              (n = Math.imul(E, V)),
              (n = (n + Math.imul(O, D)) | 0),
              (s = Math.imul(O, V)),
              (i = (i + Math.imul(I, G)) | 0),
              (n = (n + Math.imul(I, j)) | 0),
              (n = (n + Math.imul(k, G)) | 0),
              (s = (s + Math.imul(k, j)) | 0),
              (i = (i + Math.imul(S, W)) | 0),
              (n = (n + Math.imul(S, q)) | 0),
              (n = (n + Math.imul(b, W)) | 0),
              (s = (s + Math.imul(b, q)) | 0),
              (i = (i + Math.imul(y, X)) | 0),
              (n = (n + Math.imul(y, Q)) | 0),
              (n = (n + Math.imul(v, X)) | 0),
              (s = (s + Math.imul(v, Q)) | 0),
              (i = (i + Math.imul(d, $)) | 0),
              (n = (n + Math.imul(d, tt)) | 0),
              (n = (n + Math.imul(m, $)) | 0),
              (s = (s + Math.imul(m, tt)) | 0),
              (i = (i + Math.imul(c, rt)) | 0),
              (n = (n + Math.imul(c, it)) | 0),
              (n = (n + Math.imul(p, rt)) | 0),
              (s = (s + Math.imul(p, it)) | 0));
            var bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (i = Math.imul(T, D)),
              (n = Math.imul(T, V)),
              (n = (n + Math.imul(B, D)) | 0),
              (s = Math.imul(B, V)),
              (i = (i + Math.imul(E, G)) | 0),
              (n = (n + Math.imul(E, j)) | 0),
              (n = (n + Math.imul(O, G)) | 0),
              (s = (s + Math.imul(O, j)) | 0),
              (i = (i + Math.imul(I, W)) | 0),
              (n = (n + Math.imul(I, q)) | 0),
              (n = (n + Math.imul(k, W)) | 0),
              (s = (s + Math.imul(k, q)) | 0),
              (i = (i + Math.imul(S, X)) | 0),
              (n = (n + Math.imul(S, Q)) | 0),
              (n = (n + Math.imul(b, X)) | 0),
              (s = (s + Math.imul(b, Q)) | 0),
              (i = (i + Math.imul(y, $)) | 0),
              (n = (n + Math.imul(y, tt)) | 0),
              (n = (n + Math.imul(v, $)) | 0),
              (s = (s + Math.imul(v, tt)) | 0),
              (i = (i + Math.imul(d, rt)) | 0),
              (n = (n + Math.imul(d, it)) | 0),
              (n = (n + Math.imul(m, rt)) | 0),
              (s = (s + Math.imul(m, it)) | 0),
              (i = (i + Math.imul(c, st)) | 0),
              (n = (n + Math.imul(c, ot)) | 0),
              (n = (n + Math.imul(p, st)) | 0),
              (s = (s + Math.imul(p, ot)) | 0));
            var wt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (i = Math.imul(M, D)),
              (n = Math.imul(M, V)),
              (n = (n + Math.imul(N, D)) | 0),
              (s = Math.imul(N, V)),
              (i = (i + Math.imul(T, G)) | 0),
              (n = (n + Math.imul(T, j)) | 0),
              (n = (n + Math.imul(B, G)) | 0),
              (s = (s + Math.imul(B, j)) | 0),
              (i = (i + Math.imul(E, W)) | 0),
              (n = (n + Math.imul(E, q)) | 0),
              (n = (n + Math.imul(O, W)) | 0),
              (s = (s + Math.imul(O, q)) | 0),
              (i = (i + Math.imul(I, X)) | 0),
              (n = (n + Math.imul(I, Q)) | 0),
              (n = (n + Math.imul(k, X)) | 0),
              (s = (s + Math.imul(k, Q)) | 0),
              (i = (i + Math.imul(S, $)) | 0),
              (n = (n + Math.imul(S, tt)) | 0),
              (n = (n + Math.imul(b, $)) | 0),
              (s = (s + Math.imul(b, tt)) | 0),
              (i = (i + Math.imul(y, rt)) | 0),
              (n = (n + Math.imul(y, it)) | 0),
              (n = (n + Math.imul(v, rt)) | 0),
              (s = (s + Math.imul(v, it)) | 0),
              (i = (i + Math.imul(d, st)) | 0),
              (n = (n + Math.imul(d, ot)) | 0),
              (n = (n + Math.imul(m, st)) | 0),
              (s = (s + Math.imul(m, ot)) | 0),
              (i = (i + Math.imul(c, ht)) | 0),
              (n = (n + Math.imul(c, at)) | 0),
              (n = (n + Math.imul(p, ht)) | 0),
              (s = (s + Math.imul(p, at)) | 0));
            var It = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (i = Math.imul(C, D)),
              (n = Math.imul(C, V)),
              (n = (n + Math.imul(U, D)) | 0),
              (s = Math.imul(U, V)),
              (i = (i + Math.imul(M, G)) | 0),
              (n = (n + Math.imul(M, j)) | 0),
              (n = (n + Math.imul(N, G)) | 0),
              (s = (s + Math.imul(N, j)) | 0),
              (i = (i + Math.imul(T, W)) | 0),
              (n = (n + Math.imul(T, q)) | 0),
              (n = (n + Math.imul(B, W)) | 0),
              (s = (s + Math.imul(B, q)) | 0),
              (i = (i + Math.imul(E, X)) | 0),
              (n = (n + Math.imul(E, Q)) | 0),
              (n = (n + Math.imul(O, X)) | 0),
              (s = (s + Math.imul(O, Q)) | 0),
              (i = (i + Math.imul(I, $)) | 0),
              (n = (n + Math.imul(I, tt)) | 0),
              (n = (n + Math.imul(k, $)) | 0),
              (s = (s + Math.imul(k, tt)) | 0),
              (i = (i + Math.imul(S, rt)) | 0),
              (n = (n + Math.imul(S, it)) | 0),
              (n = (n + Math.imul(b, rt)) | 0),
              (s = (s + Math.imul(b, it)) | 0),
              (i = (i + Math.imul(y, st)) | 0),
              (n = (n + Math.imul(y, ot)) | 0),
              (n = (n + Math.imul(v, st)) | 0),
              (s = (s + Math.imul(v, ot)) | 0),
              (i = (i + Math.imul(d, ht)) | 0),
              (n = (n + Math.imul(d, at)) | 0),
              (n = (n + Math.imul(m, ht)) | 0),
              (s = (s + Math.imul(m, at)) | 0),
              (i = (i + Math.imul(c, ct)) | 0),
              (n = (n + Math.imul(c, pt)) | 0),
              (n = (n + Math.imul(p, ct)) | 0),
              (s = (s + Math.imul(p, pt)) | 0));
            var kt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (i = Math.imul(H, D)),
              (n = Math.imul(H, V)),
              (n = (n + Math.imul(K, D)) | 0),
              (s = Math.imul(K, V)),
              (i = (i + Math.imul(C, G)) | 0),
              (n = (n + Math.imul(C, j)) | 0),
              (n = (n + Math.imul(U, G)) | 0),
              (s = (s + Math.imul(U, j)) | 0),
              (i = (i + Math.imul(M, W)) | 0),
              (n = (n + Math.imul(M, q)) | 0),
              (n = (n + Math.imul(N, W)) | 0),
              (s = (s + Math.imul(N, q)) | 0),
              (i = (i + Math.imul(T, X)) | 0),
              (n = (n + Math.imul(T, Q)) | 0),
              (n = (n + Math.imul(B, X)) | 0),
              (s = (s + Math.imul(B, Q)) | 0),
              (i = (i + Math.imul(E, $)) | 0),
              (n = (n + Math.imul(E, tt)) | 0),
              (n = (n + Math.imul(O, $)) | 0),
              (s = (s + Math.imul(O, tt)) | 0),
              (i = (i + Math.imul(I, rt)) | 0),
              (n = (n + Math.imul(I, it)) | 0),
              (n = (n + Math.imul(k, rt)) | 0),
              (s = (s + Math.imul(k, it)) | 0),
              (i = (i + Math.imul(S, st)) | 0),
              (n = (n + Math.imul(S, ot)) | 0),
              (n = (n + Math.imul(b, st)) | 0),
              (s = (s + Math.imul(b, ot)) | 0),
              (i = (i + Math.imul(y, ht)) | 0),
              (n = (n + Math.imul(y, at)) | 0),
              (n = (n + Math.imul(v, ht)) | 0),
              (s = (s + Math.imul(v, at)) | 0),
              (i = (i + Math.imul(d, ct)) | 0),
              (n = (n + Math.imul(d, pt)) | 0),
              (n = (n + Math.imul(m, ct)) | 0),
              (s = (s + Math.imul(m, pt)) | 0),
              (i = (i + Math.imul(c, dt)) | 0),
              (n = (n + Math.imul(c, mt)) | 0),
              (n = (n + Math.imul(p, dt)) | 0),
              (s = (s + Math.imul(p, mt)) | 0));
            var Pt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (i = Math.imul(H, G)),
              (n = Math.imul(H, j)),
              (n = (n + Math.imul(K, G)) | 0),
              (s = Math.imul(K, j)),
              (i = (i + Math.imul(C, W)) | 0),
              (n = (n + Math.imul(C, q)) | 0),
              (n = (n + Math.imul(U, W)) | 0),
              (s = (s + Math.imul(U, q)) | 0),
              (i = (i + Math.imul(M, X)) | 0),
              (n = (n + Math.imul(M, Q)) | 0),
              (n = (n + Math.imul(N, X)) | 0),
              (s = (s + Math.imul(N, Q)) | 0),
              (i = (i + Math.imul(T, $)) | 0),
              (n = (n + Math.imul(T, tt)) | 0),
              (n = (n + Math.imul(B, $)) | 0),
              (s = (s + Math.imul(B, tt)) | 0),
              (i = (i + Math.imul(E, rt)) | 0),
              (n = (n + Math.imul(E, it)) | 0),
              (n = (n + Math.imul(O, rt)) | 0),
              (s = (s + Math.imul(O, it)) | 0),
              (i = (i + Math.imul(I, st)) | 0),
              (n = (n + Math.imul(I, ot)) | 0),
              (n = (n + Math.imul(k, st)) | 0),
              (s = (s + Math.imul(k, ot)) | 0),
              (i = (i + Math.imul(S, ht)) | 0),
              (n = (n + Math.imul(S, at)) | 0),
              (n = (n + Math.imul(b, ht)) | 0),
              (s = (s + Math.imul(b, at)) | 0),
              (i = (i + Math.imul(y, ct)) | 0),
              (n = (n + Math.imul(y, pt)) | 0),
              (n = (n + Math.imul(v, ct)) | 0),
              (s = (s + Math.imul(v, pt)) | 0),
              (i = (i + Math.imul(d, dt)) | 0),
              (n = (n + Math.imul(d, mt)) | 0),
              (n = (n + Math.imul(m, dt)) | 0),
              (s = (s + Math.imul(m, mt)) | 0));
            var Et = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (i = Math.imul(H, W)),
              (n = Math.imul(H, q)),
              (n = (n + Math.imul(K, W)) | 0),
              (s = Math.imul(K, q)),
              (i = (i + Math.imul(C, X)) | 0),
              (n = (n + Math.imul(C, Q)) | 0),
              (n = (n + Math.imul(U, X)) | 0),
              (s = (s + Math.imul(U, Q)) | 0),
              (i = (i + Math.imul(M, $)) | 0),
              (n = (n + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(N, $)) | 0),
              (s = (s + Math.imul(N, tt)) | 0),
              (i = (i + Math.imul(T, rt)) | 0),
              (n = (n + Math.imul(T, it)) | 0),
              (n = (n + Math.imul(B, rt)) | 0),
              (s = (s + Math.imul(B, it)) | 0),
              (i = (i + Math.imul(E, st)) | 0),
              (n = (n + Math.imul(E, ot)) | 0),
              (n = (n + Math.imul(O, st)) | 0),
              (s = (s + Math.imul(O, ot)) | 0),
              (i = (i + Math.imul(I, ht)) | 0),
              (n = (n + Math.imul(I, at)) | 0),
              (n = (n + Math.imul(k, ht)) | 0),
              (s = (s + Math.imul(k, at)) | 0),
              (i = (i + Math.imul(S, ct)) | 0),
              (n = (n + Math.imul(S, pt)) | 0),
              (n = (n + Math.imul(b, ct)) | 0),
              (s = (s + Math.imul(b, pt)) | 0),
              (i = (i + Math.imul(y, dt)) | 0),
              (n = (n + Math.imul(y, mt)) | 0),
              (n = (n + Math.imul(v, dt)) | 0),
              (s = (s + Math.imul(v, mt)) | 0));
            var Ot = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (i = Math.imul(H, X)),
              (n = Math.imul(H, Q)),
              (n = (n + Math.imul(K, X)) | 0),
              (s = Math.imul(K, Q)),
              (i = (i + Math.imul(C, $)) | 0),
              (n = (n + Math.imul(C, tt)) | 0),
              (n = (n + Math.imul(U, $)) | 0),
              (s = (s + Math.imul(U, tt)) | 0),
              (i = (i + Math.imul(M, rt)) | 0),
              (n = (n + Math.imul(M, it)) | 0),
              (n = (n + Math.imul(N, rt)) | 0),
              (s = (s + Math.imul(N, it)) | 0),
              (i = (i + Math.imul(T, st)) | 0),
              (n = (n + Math.imul(T, ot)) | 0),
              (n = (n + Math.imul(B, st)) | 0),
              (s = (s + Math.imul(B, ot)) | 0),
              (i = (i + Math.imul(E, ht)) | 0),
              (n = (n + Math.imul(E, at)) | 0),
              (n = (n + Math.imul(O, ht)) | 0),
              (s = (s + Math.imul(O, at)) | 0),
              (i = (i + Math.imul(I, ct)) | 0),
              (n = (n + Math.imul(I, pt)) | 0),
              (n = (n + Math.imul(k, ct)) | 0),
              (s = (s + Math.imul(k, pt)) | 0),
              (i = (i + Math.imul(S, dt)) | 0),
              (n = (n + Math.imul(S, mt)) | 0),
              (n = (n + Math.imul(b, dt)) | 0),
              (s = (s + Math.imul(b, mt)) | 0));
            var At = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (i = Math.imul(H, $)),
              (n = Math.imul(H, tt)),
              (n = (n + Math.imul(K, $)) | 0),
              (s = Math.imul(K, tt)),
              (i = (i + Math.imul(C, rt)) | 0),
              (n = (n + Math.imul(C, it)) | 0),
              (n = (n + Math.imul(U, rt)) | 0),
              (s = (s + Math.imul(U, it)) | 0),
              (i = (i + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(M, ot)) | 0),
              (n = (n + Math.imul(N, st)) | 0),
              (s = (s + Math.imul(N, ot)) | 0),
              (i = (i + Math.imul(T, ht)) | 0),
              (n = (n + Math.imul(T, at)) | 0),
              (n = (n + Math.imul(B, ht)) | 0),
              (s = (s + Math.imul(B, at)) | 0),
              (i = (i + Math.imul(E, ct)) | 0),
              (n = (n + Math.imul(E, pt)) | 0),
              (n = (n + Math.imul(O, ct)) | 0),
              (s = (s + Math.imul(O, pt)) | 0),
              (i = (i + Math.imul(I, dt)) | 0),
              (n = (n + Math.imul(I, mt)) | 0),
              (n = (n + Math.imul(k, dt)) | 0),
              (s = (s + Math.imul(k, mt)) | 0));
            var Tt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (i = Math.imul(H, rt)),
              (n = Math.imul(H, it)),
              (n = (n + Math.imul(K, rt)) | 0),
              (s = Math.imul(K, it)),
              (i = (i + Math.imul(C, st)) | 0),
              (n = (n + Math.imul(C, ot)) | 0),
              (n = (n + Math.imul(U, st)) | 0),
              (s = (s + Math.imul(U, ot)) | 0),
              (i = (i + Math.imul(M, ht)) | 0),
              (n = (n + Math.imul(M, at)) | 0),
              (n = (n + Math.imul(N, ht)) | 0),
              (s = (s + Math.imul(N, at)) | 0),
              (i = (i + Math.imul(T, ct)) | 0),
              (n = (n + Math.imul(T, pt)) | 0),
              (n = (n + Math.imul(B, ct)) | 0),
              (s = (s + Math.imul(B, pt)) | 0),
              (i = (i + Math.imul(E, dt)) | 0),
              (n = (n + Math.imul(E, mt)) | 0),
              (n = (n + Math.imul(O, dt)) | 0),
              (s = (s + Math.imul(O, mt)) | 0));
            var Bt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (i = Math.imul(H, st)),
              (n = Math.imul(H, ot)),
              (n = (n + Math.imul(K, st)) | 0),
              (s = Math.imul(K, ot)),
              (i = (i + Math.imul(C, ht)) | 0),
              (n = (n + Math.imul(C, at)) | 0),
              (n = (n + Math.imul(U, ht)) | 0),
              (s = (s + Math.imul(U, at)) | 0),
              (i = (i + Math.imul(M, ct)) | 0),
              (n = (n + Math.imul(M, pt)) | 0),
              (n = (n + Math.imul(N, ct)) | 0),
              (s = (s + Math.imul(N, pt)) | 0),
              (i = (i + Math.imul(T, dt)) | 0),
              (n = (n + Math.imul(T, mt)) | 0),
              (n = (n + Math.imul(B, dt)) | 0),
              (s = (s + Math.imul(B, mt)) | 0));
            var Rt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (i = Math.imul(H, ht)),
              (n = Math.imul(H, at)),
              (n = (n + Math.imul(K, ht)) | 0),
              (s = Math.imul(K, at)),
              (i = (i + Math.imul(C, ct)) | 0),
              (n = (n + Math.imul(C, pt)) | 0),
              (n = (n + Math.imul(U, ct)) | 0),
              (s = (s + Math.imul(U, pt)) | 0),
              (i = (i + Math.imul(M, dt)) | 0),
              (n = (n + Math.imul(M, mt)) | 0),
              (n = (n + Math.imul(N, dt)) | 0),
              (s = (s + Math.imul(N, mt)) | 0));
            var Mt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (i = Math.imul(H, ct)),
              (n = Math.imul(H, pt)),
              (n = (n + Math.imul(K, ct)) | 0),
              (s = Math.imul(K, pt)),
              (i = (i + Math.imul(C, dt)) | 0),
              (n = (n + Math.imul(C, mt)) | 0),
              (n = (n + Math.imul(U, dt)) | 0),
              (s = (s + Math.imul(U, mt)) | 0));
            var Nt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            ((a = (((s + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (i = Math.imul(H, dt)),
              (n = Math.imul(H, mt)),
              (n = (n + Math.imul(K, dt)) | 0),
              (s = Math.imul(K, mt)));
            var xt = (((a + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (a = (((s + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (h[0] = gt),
              (h[1] = yt),
              (h[2] = vt),
              (h[3] = _t),
              (h[4] = St),
              (h[5] = bt),
              (h[6] = wt),
              (h[7] = It),
              (h[8] = kt),
              (h[9] = Pt),
              (h[10] = Et),
              (h[11] = Ot),
              (h[12] = At),
              (h[13] = Tt),
              (h[14] = Bt),
              (h[15] = Rt),
              (h[16] = Mt),
              (h[17] = Nt),
              (h[18] = xt),
              0 !== a && ((h[19] = a), r.length++),
              r
            );
          };
          function m(t, e, r) {
            ((r.negative = e.negative ^ t.negative),
              (r.length = t.length + e.length));
            for (var i = 0, n = 0, s = 0; s < r.length - 1; s++) {
              var o = n;
              n = 0;
              for (
                var u = 67108863 & i,
                  h = Math.min(s, e.length - 1),
                  a = Math.max(0, s - t.length + 1);
                a <= h;
                a++
              ) {
                var f = s - a,
                  c = 0 | t.words[f],
                  p = 0 | e.words[a],
                  l = c * p,
                  d = 67108863 & l;
                ((o = (o + ((l / 67108864) | 0)) | 0),
                  (d = (d + u) | 0),
                  (u = 67108863 & d),
                  (o = (o + (d >>> 26)) | 0),
                  (n += o >>> 26),
                  (o &= 67108863));
              }
              ((r.words[s] = u), (i = o), (o = n));
            }
            return (0 !== i ? (r.words[s] = i) : r.length--, r.strip());
          }
          function g(t, e, r) {
            var i = new y();
            return i.mulp(t, e, r);
          }
          function y(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (d = l),
            (s.prototype.mulTo = function (t, e) {
              var r,
                i = this.length + t.length;
              return (
                (r =
                  10 === this.length && 10 === t.length
                    ? d(this, t, e)
                    : i < 63
                      ? l(this, t, e)
                      : i < 1024
                        ? m(this, t, e)
                        : g(this, t, e)),
                r
              );
            }),
            (y.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), r = s.prototype._countBits(t) - 1, i = 0;
                i < t;
                i++
              )
                e[i] = this.revBin(i, r, t);
              return e;
            }),
            (y.prototype.revBin = function (t, e, r) {
              if (0 === t || t === r - 1) return t;
              for (var i = 0, n = 0; n < e; n++)
                ((i |= (1 & t) << (e - n - 1)), (t >>= 1));
              return i;
            }),
            (y.prototype.permute = function (t, e, r, i, n, s) {
              for (var o = 0; o < s; o++) ((i[o] = e[t[o]]), (n[o] = r[t[o]]));
            }),
            (y.prototype.transform = function (t, e, r, i, n, s) {
              this.permute(s, t, e, r, i, n);
              for (var o = 1; o < n; o <<= 1)
                for (
                  var u = o << 1,
                    h = Math.cos((2 * Math.PI) / u),
                    a = Math.sin((2 * Math.PI) / u),
                    f = 0;
                  f < n;
                  f += u
                )
                  for (var c = h, p = a, l = 0; l < o; l++) {
                    var d = r[f + l],
                      m = i[f + l],
                      g = r[f + l + o],
                      y = i[f + l + o],
                      v = c * g - p * y;
                    ((y = c * y + p * g),
                      (g = v),
                      (r[f + l] = d + g),
                      (i[f + l] = m + y),
                      (r[f + l + o] = d - g),
                      (i[f + l + o] = m - y),
                      l !== u &&
                        ((v = h * c - a * p), (p = h * p + a * c), (c = v)));
                  }
            }),
            (y.prototype.guessLen13b = function (t, e) {
              var r = 1 | Math.max(e, t),
                i = 1 & r,
                n = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (y.prototype.conjugate = function (t, e, r) {
              if (!(r <= 1))
                for (var i = 0; i < r / 2; i++) {
                  var n = t[i];
                  ((t[i] = t[r - i - 1]),
                    (t[r - i - 1] = n),
                    (n = e[i]),
                    (e[i] = -e[r - i - 1]),
                    (e[r - i - 1] = -n));
                }
            }),
            (y.prototype.normalize13b = function (t, e) {
              for (var r = 0, i = 0; i < e / 2; i++) {
                var n =
                  8192 * Math.round(t[2 * i + 1] / e) +
                  Math.round(t[2 * i] / e) +
                  r;
                ((t[i] = 67108863 & n),
                  (r = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (y.prototype.convert13b = function (t, e, r, n) {
              for (var s = 0, o = 0; o < e; o++)
                ((s += 0 | t[o]),
                  (r[2 * o] = 8191 & s),
                  (s >>>= 13),
                  (r[2 * o + 1] = 8191 & s),
                  (s >>>= 13));
              for (o = 2 * e; o < n; ++o) r[o] = 0;
              (i(0 === s), i(0 === (-8192 & s)));
            }),
            (y.prototype.stub = function (t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
              return e;
            }),
            (y.prototype.mulp = function (t, e, r) {
              var i = 2 * this.guessLen13b(t.length, e.length),
                n = this.makeRBT(i),
                s = this.stub(i),
                o = new Array(i),
                u = new Array(i),
                h = new Array(i),
                a = new Array(i),
                f = new Array(i),
                c = new Array(i),
                p = r.words;
              ((p.length = i),
                this.convert13b(t.words, t.length, o, i),
                this.convert13b(e.words, e.length, a, i),
                this.transform(o, s, u, h, i, n),
                this.transform(a, s, f, c, i, n));
              for (var l = 0; l < i; l++) {
                var d = u[l] * f[l] - h[l] * c[l];
                ((h[l] = u[l] * c[l] + h[l] * f[l]), (u[l] = d));
              }
              return (
                this.conjugate(u, h, i),
                this.transform(u, h, p, s, i, n),
                this.conjugate(p, s, i),
                this.normalize13b(p, i),
                (r.negative = t.negative ^ e.negative),
                (r.length = t.length + e.length),
                r.strip()
              );
            }),
            (s.prototype.mul = function (t) {
              var e = new s(null);
              return (
                (e.words = new Array(this.length + t.length)),
                this.mulTo(t, e)
              );
            }),
            (s.prototype.mulf = function (t) {
              var e = new s(null);
              return (
                (e.words = new Array(this.length + t.length)),
                g(this, t, e)
              );
            }),
            (s.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (s.prototype.imuln = function (t) {
              (i("number" === typeof t), i(t < 67108864));
              for (var e = 0, r = 0; r < this.length; r++) {
                var n = (0 | this.words[r]) * t,
                  s = (67108863 & n) + (67108863 & e);
                ((e >>= 26),
                  (e += (n / 67108864) | 0),
                  (e += s >>> 26),
                  (this.words[r] = 67108863 & s));
              }
              return (0 !== e && ((this.words[r] = e), this.length++), this);
            }),
            (s.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (s.prototype.sqr = function () {
              return this.mul(this);
            }),
            (s.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (s.prototype.pow = function (t) {
              var e = p(t);
              if (0 === e.length) return new s(1);
              for (var r = this, i = 0; i < e.length; i++, r = r.sqr())
                if (0 !== e[i]) break;
              if (++i < e.length)
                for (var n = r.sqr(); i < e.length; i++, n = n.sqr())
                  0 !== e[i] && (r = r.mul(n));
              return r;
            }),
            (s.prototype.iushln = function (t) {
              i("number" === typeof t && t >= 0);
              var e,
                r = t % 26,
                n = (t - r) / 26,
                s = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var o = 0;
                for (e = 0; e < this.length; e++) {
                  var u = this.words[e] & s,
                    h = ((0 | this.words[e]) - u) << r;
                  ((this.words[e] = h | o), (o = u >>> (26 - r)));
                }
                o && ((this.words[e] = o), this.length++);
              }
              if (0 !== n) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + n] = this.words[e];
                for (e = 0; e < n; e++) this.words[e] = 0;
                this.length += n;
              }
              return this.strip();
            }),
            (s.prototype.ishln = function (t) {
              return (i(0 === this.negative), this.iushln(t));
            }),
            (s.prototype.iushrn = function (t, e, r) {
              var n;
              (i("number" === typeof t && t >= 0),
                (n = e ? (e - (e % 26)) / 26 : 0));
              var s = t % 26,
                o = Math.min((t - s) / 26, this.length),
                u = 67108863 ^ ((67108863 >>> s) << s),
                h = r;
              if (((n -= o), (n = Math.max(0, n)), h)) {
                for (var a = 0; a < o; a++) h.words[a] = this.words[a];
                h.length = o;
              }
              if (0 === o);
              else if (this.length > o)
                for (this.length -= o, a = 0; a < this.length; a++)
                  this.words[a] = this.words[a + o];
              else ((this.words[0] = 0), (this.length = 1));
              var f = 0;
              for (a = this.length - 1; a >= 0 && (0 !== f || a >= n); a--) {
                var c = 0 | this.words[a];
                ((this.words[a] = (f << (26 - s)) | (c >>> s)), (f = c & u));
              }
              return (
                h && 0 !== f && (h.words[h.length++] = f),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this.strip()
              );
            }),
            (s.prototype.ishrn = function (t, e, r) {
              return (i(0 === this.negative), this.iushrn(t, e, r));
            }),
            (s.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (s.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (s.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (s.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (s.prototype.testn = function (t) {
              i("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26,
                n = 1 << e;
              if (this.length <= r) return !1;
              var s = this.words[r];
              return !!(s & n);
            }),
            (s.prototype.imaskn = function (t) {
              i("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26;
              if (
                (i(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= r)
              )
                return this;
              if (
                (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e)
              ) {
                var n = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= n;
              }
              return this.strip();
            }),
            (s.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (s.prototype.iaddn = function (t) {
              return (
                i("number" === typeof t),
                i(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) < t
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
            (s.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
            }),
            (s.prototype.isubn = function (t) {
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
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  ((this.words[e] += 67108864), (this.words[e + 1] -= 1));
              return this.strip();
            }),
            (s.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (s.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (s.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (s.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (s.prototype._ishlnsubmul = function (t, e, r) {
              var n,
                s,
                o = t.length + r;
              this._expand(o);
              var u = 0;
              for (n = 0; n < t.length; n++) {
                s = (0 | this.words[n + r]) + u;
                var h = (0 | t.words[n]) * e;
                ((s -= 67108863 & h),
                  (u = (s >> 26) - ((h / 67108864) | 0)),
                  (this.words[n + r] = 67108863 & s));
              }
              for (; n < this.length - r; n++)
                ((s = (0 | this.words[n + r]) + u),
                  (u = s >> 26),
                  (this.words[n + r] = 67108863 & s));
              if (0 === u) return this.strip();
              for (i(-1 === u), u = 0, n = 0; n < this.length; n++)
                ((s = -(0 | this.words[n]) + u),
                  (u = s >> 26),
                  (this.words[n] = 67108863 & s));
              return ((this.negative = 1), this.strip());
            }),
            (s.prototype._wordDiv = function (t, e) {
              var r = this.length - t.length,
                i = this.clone(),
                n = t,
                o = 0 | n.words[n.length - 1],
                u = this._countBits(o);
              ((r = 26 - u),
                0 !== r &&
                  ((n = n.ushln(r)),
                  i.iushln(r),
                  (o = 0 | n.words[n.length - 1])));
              var h,
                a = i.length - n.length;
              if ("mod" !== e) {
                ((h = new s(null)),
                  (h.length = a + 1),
                  (h.words = new Array(h.length)));
                for (var f = 0; f < h.length; f++) h.words[f] = 0;
              }
              var c = i.clone()._ishlnsubmul(n, 1, a);
              0 === c.negative && ((i = c), h && (h.words[a] = 1));
              for (var p = a - 1; p >= 0; p--) {
                var l =
                  67108864 * (0 | i.words[n.length + p]) +
                  (0 | i.words[n.length + p - 1]);
                ((l = Math.min((l / o) | 0, 67108863)),
                  i._ishlnsubmul(n, l, p));
                while (0 !== i.negative)
                  (l--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, p),
                    i.isZero() || (i.negative ^= 1));
                h && (h.words[p] = l);
              }
              return (
                h && h.strip(),
                i.strip(),
                "div" !== e && 0 !== r && i.iushrn(r),
                { div: h || null, mod: i }
              );
            }),
            (s.prototype.divmod = function (t, e, r) {
              return (
                i(!t.isZero()),
                this.isZero()
                  ? { div: new s(0), mod: new s(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((u = this.neg().divmod(t, e)),
                      "mod" !== e && (n = u.div.neg()),
                      "div" !== e &&
                        ((o = u.mod.neg()), r && 0 !== o.negative && o.iadd(t)),
                      { div: n, mod: o })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((u = this.divmod(t.neg(), e)),
                        "mod" !== e && (n = u.div.neg()),
                        { div: n, mod: u.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((u = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((o = u.mod.neg()),
                            r && 0 !== o.negative && o.isub(t)),
                          { div: u.div, mod: o })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new s(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new s(this.modn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new s(this.modn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
              );
              var n, o, u;
            }),
            (s.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (s.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (s.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (s.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                i = t.ushrn(1),
                n = t.andln(1),
                s = r.cmp(i);
              return s < 0 || (1 === n && 0 === s)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (s.prototype.modn = function (t) {
              i(t <= 67108863);
              for (
                var e = (1 << 26) % t, r = 0, n = this.length - 1;
                n >= 0;
                n--
              )
                r = (e * r + (0 | this.words[n])) % t;
              return r;
            }),
            (s.prototype.idivn = function (t) {
              i(t <= 67108863);
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var n = (0 | this.words[r]) + 67108864 * e;
                ((this.words[r] = (n / t) | 0), (e = n % t));
              }
              return this.strip();
            }),
            (s.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (s.prototype.egcd = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n = new s(1),
                o = new s(0),
                u = new s(0),
                h = new s(1),
                a = 0;
              while (e.isEven() && r.isEven()) (e.iushrn(1), r.iushrn(1), ++a);
              var f = r.clone(),
                c = e.clone();
              while (!e.isZero()) {
                for (
                  var p = 0, l = 1;
                  0 === (e.words[0] & l) && p < 26;
                  ++p, l <<= 1
                );
                if (p > 0) {
                  e.iushrn(p);
                  while (p-- > 0)
                    ((n.isOdd() || o.isOdd()) && (n.iadd(f), o.isub(c)),
                      n.iushrn(1),
                      o.iushrn(1));
                }
                for (
                  var d = 0, m = 1;
                  0 === (r.words[0] & m) && d < 26;
                  ++d, m <<= 1
                );
                if (d > 0) {
                  r.iushrn(d);
                  while (d-- > 0)
                    ((u.isOdd() || h.isOdd()) && (u.iadd(f), h.isub(c)),
                      u.iushrn(1),
                      h.iushrn(1));
                }
                e.cmp(r) >= 0
                  ? (e.isub(r), n.isub(u), o.isub(h))
                  : (r.isub(e), u.isub(n), h.isub(o));
              }
              return { a: u, b: h, gcd: r.iushln(a) };
            }),
            (s.prototype._invmp = function (t) {
              (i(0 === t.negative), i(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                o = new s(1),
                u = new s(0),
                h = r.clone();
              while (e.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var a = 0, f = 1;
                  0 === (e.words[0] & f) && a < 26;
                  ++a, f <<= 1
                );
                if (a > 0) {
                  e.iushrn(a);
                  while (a-- > 0) (o.isOdd() && o.iadd(h), o.iushrn(1));
                }
                for (
                  var c = 0, p = 1;
                  0 === (r.words[0] & p) && c < 26;
                  ++c, p <<= 1
                );
                if (c > 0) {
                  r.iushrn(c);
                  while (c-- > 0) (u.isOdd() && u.iadd(h), u.iushrn(1));
                }
                e.cmp(r) >= 0 ? (e.isub(r), o.isub(u)) : (r.isub(e), u.isub(o));
              }
              return (
                (n = 0 === e.cmpn(1) ? o : u),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (s.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                r = t.clone();
              ((e.negative = 0), (r.negative = 0));
              for (var i = 0; e.isEven() && r.isEven(); i++)
                (e.iushrn(1), r.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (r.isEven()) r.iushrn(1);
                var n = e.cmp(r);
                if (n < 0) {
                  var s = e;
                  ((e = r), (r = s));
                } else if (0 === n || 0 === r.cmpn(1)) break;
                e.isub(r);
              } while (1);
              return r.iushln(i);
            }),
            (s.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (s.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (s.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (s.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (s.prototype.bincn = function (t) {
              i("number" === typeof t);
              var e = t % 26,
                r = (t - e) / 26,
                n = 1 << e;
              if (this.length <= r)
                return (this._expand(r + 1), (this.words[r] |= n), this);
              for (var s = n, o = r; 0 !== s && o < this.length; o++) {
                var u = 0 | this.words[o];
                ((u += s),
                  (s = u >>> 26),
                  (u &= 67108863),
                  (this.words[o] = u));
              }
              return (0 !== s && ((this.words[o] = s), this.length++), this);
            }),
            (s.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (s.prototype.cmpn = function (t) {
              var e,
                r = t < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this.strip(), this.length > 1)) e = 1;
              else {
                (r && (t = -t), i(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                e = n === t ? 0 : n < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (s.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (s.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var i = 0 | this.words[r],
                  n = 0 | t.words[r];
                if (i !== n) {
                  i < n ? (e = -1) : i > n && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (s.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (s.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (s.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (s.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (s.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (s.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (s.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (s.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (s.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (s.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (s.red = function (t) {
              return new k(t);
            }),
            (s.prototype.toRed = function (t) {
              return (
                i(!this.red, "Already a number in reduction context"),
                i(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (s.prototype.fromRed = function () {
              return (
                i(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (s.prototype._forceRed = function (t) {
              return ((this.red = t), this);
            }),
            (s.prototype.forceRed = function (t) {
              return (
                i(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (s.prototype.redAdd = function (t) {
              return (
                i(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (s.prototype.redIAdd = function (t) {
              return (
                i(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (s.prototype.redSub = function (t) {
              return (
                i(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (s.prototype.redISub = function (t) {
              return (
                i(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (s.prototype.redShl = function (t) {
              return (
                i(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (s.prototype.redMul = function (t) {
              return (
                i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (s.prototype.redIMul = function (t) {
              return (
                i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (s.prototype.redSqr = function () {
              return (
                i(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (s.prototype.redISqr = function () {
              return (
                i(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (s.prototype.redSqrt = function () {
              return (
                i(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (s.prototype.redInvm = function () {
              return (
                i(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (s.prototype.redNeg = function () {
              return (
                i(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (s.prototype.redPow = function (t) {
              return (
                i(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var v = { k256: null, p224: null, p192: null, p25519: null };
          function _(t, e) {
            ((this.name = t),
              (this.p = new s(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new s(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function S() {
            _.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function b() {
            _.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function w() {
            _.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function I() {
            _.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function k(t) {
            if ("string" === typeof t) {
              var e = s._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (i(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function P(t) {
            (k.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new s(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((_.prototype._tmp = function () {
            var t = new s(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (_.prototype.ireduce = function (t) {
              var e,
                r = t;
              do {
                (this.split(r, this.tmp),
                  (r = this.imulK(r)),
                  (r = r.iadd(this.tmp)),
                  (e = r.bitLength()));
              } while (e > this.n);
              var i = e < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === i
                  ? ((r.words[0] = 0), (r.length = 1))
                  : i > 0
                    ? r.isub(this.p)
                    : r.strip(),
                r
              );
            }),
            (_.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (_.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(S, _),
            (S.prototype.split = function (t, e) {
              for (
                var r = 4194303, i = Math.min(t.length, 9), n = 0;
                n < i;
                n++
              )
                e.words[n] = t.words[n];
              if (((e.length = i), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var s = t.words[9];
              for (e.words[e.length++] = s & r, n = 10; n < t.length; n++) {
                var o = 0 | t.words[n];
                ((t.words[n - 10] = ((o & r) << 4) | (s >>> 22)), (s = o));
              }
              ((s >>>= 22),
                (t.words[n - 10] = s),
                0 === s && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (S.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 0 | t.words[r];
                ((e += 977 * i),
                  (t.words[r] = 67108863 & e),
                  (e = 64 * i + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(b, _),
            n(w, _),
            n(I, _),
            (I.prototype.imulK = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var i = 19 * (0 | t.words[r]) + e,
                  n = 67108863 & i;
                ((i >>>= 26), (t.words[r] = n), (e = i));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (s._prime = function (t) {
              if (v[t]) return v[t];
              var e;
              if ("k256" === t) e = new S();
              else if ("p224" === t) e = new b();
              else if ("p192" === t) e = new w();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new I();
              }
              return ((v[t] = e), e);
            }),
            (k.prototype._verify1 = function (t) {
              (i(0 === t.negative, "red works only with positives"),
                i(t.red, "red works only with red numbers"));
            }),
            (k.prototype._verify2 = function (t, e) {
              (i(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                i(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (k.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : t.umod(this.m)._forceRed(this);
            }),
            (k.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (k.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (k.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (k.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (k.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (k.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (k.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (k.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (k.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (k.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (k.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((i(e % 2 === 1), 3 === e)) {
                var r = this.m.add(new s(1)).iushrn(2);
                return this.pow(t, r);
              }
              var n = this.m.subn(1),
                o = 0;
              while (!n.isZero() && 0 === n.andln(1)) (o++, n.iushrn(1));
              i(!n.isZero());
              var u = new s(1).toRed(this),
                h = u.redNeg(),
                a = this.m.subn(1).iushrn(1),
                f = this.m.bitLength();
              f = new s(2 * f * f).toRed(this);
              while (0 !== this.pow(f, a).cmp(h)) f.redIAdd(h);
              var c = this.pow(f, n),
                p = this.pow(t, n.addn(1).iushrn(1)),
                l = this.pow(t, n),
                d = o;
              while (0 !== l.cmp(u)) {
                for (var m = l, g = 0; 0 !== m.cmp(u); g++) m = m.redSqr();
                i(g < d);
                var y = this.pow(c, new s(1).iushln(d - g - 1));
                ((p = p.redMul(y)),
                  (c = y.redSqr()),
                  (l = l.redMul(c)),
                  (d = g));
              }
              return p;
            }),
            (k.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (k.prototype.pow = function (t, e) {
              if (e.isZero()) return new s(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var r = 4,
                i = new Array(1 << r);
              ((i[0] = new s(1).toRed(this)), (i[1] = t));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], t);
              var o = i[0],
                u = 0,
                h = 0,
                a = e.bitLength() % 26;
              for (0 === a && (a = 26), n = e.length - 1; n >= 0; n--) {
                for (var f = e.words[n], c = a - 1; c >= 0; c--) {
                  var p = (f >> c) & 1;
                  (o !== i[0] && (o = this.sqr(o)),
                    0 !== p || 0 !== u
                      ? ((u <<= 1),
                        (u |= p),
                        h++,
                        (h === r || (0 === n && 0 === c)) &&
                          ((o = this.mul(o, i[u])), (h = 0), (u = 0)))
                      : (h = 0));
                }
                a = 26;
              }
              return o;
            }),
            (k.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (k.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (s.mont = function (t) {
              return new P(t);
            }),
            n(P, k),
            (P.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (P.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (P.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var r = t.imul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (P.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new s(0)._forceRed(this);
              var r = t.mul(e),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                o = n;
              return (
                n.cmp(this.m) >= 0
                  ? (o = n.isub(this.m))
                  : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (P.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, r(20)(t));
    },
    6654: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(3605),
          n = r(3456),
          s = r(3196),
          o = r(3084),
          u = r(5553),
          h = r(3390),
          a = r(3194),
          f = r(3829),
          c = r(2899),
          p = r(2794),
          l = r(3224),
          d = r(2),
          m = r(2962),
          g = r(3005),
          y = function t(e) {
            return this instanceof t
              ? ((this.chunks = []),
                m.isBuffer(e)
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
        ((y.prototype.set = function (t) {
          return (
            c.checkArgument(p.isObject(t)),
            c.checkArgument(p.isArray(t.chunks)),
            (this.chunks = t.chunks),
            this
          );
        }),
          (y.fromBuffer = function (t) {
            var e = new y();
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
              } catch (h) {
                if (h instanceof RangeError)
                  throw new l.Script.InvalidBuffer(t.toString("hex"));
                throw h;
              }
            return e;
          }),
          (y.prototype.toBuffer = function () {
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
          (y.fromASM = function (t) {
            var r = new y();
            r.chunks = [];
            var i = t.split(" "),
              n = 0;
            while (n < i.length) {
              var s = i[n],
                o = u(s),
                h = o.toNumber();
              if (p.isUndefined(h)) {
                var a = e.from(i[n], "hex");
                (r.chunks.push({ buf: a, len: a.length, opcodenum: a.length }),
                  (n += 1));
              } else
                h === u.OP_PUSHDATA1 ||
                h === u.OP_PUSHDATA2 ||
                h === u.OP_PUSHDATA4
                  ? (r.chunks.push({
                      buf: e.from(i[n + 2], "hex"),
                      len: parseInt(i[n + 1]),
                      opcodenum: h,
                    }),
                    (n += 3))
                  : (r.chunks.push({ opcodenum: h }), (n += 1));
            }
            return r;
          }),
          (y.fromHex = function (t) {
            return new y(new d.Buffer(t, "hex"));
          }),
          (y.fromString = function (t) {
            if (g.isHexa(t) || 0 === t.length)
              return new y(new d.Buffer(t, "hex"));
            var r = new y();
            r.chunks = [];
            var i = t.split(" "),
              n = 0;
            while (n < i.length) {
              var s = i[n],
                o = u(s),
                h = o.toNumber();
              if (p.isUndefined(h)) {
                if (((h = parseInt(s)), !(h > 0 && h < u.OP_PUSHDATA1)))
                  throw new Error("Invalid script: " + JSON.stringify(t));
                (r.chunks.push({
                  buf: e.from(i[n + 1].slice(2), "hex"),
                  len: h,
                  opcodenum: h,
                }),
                  (n += 2));
              } else if (
                h === u.OP_PUSHDATA1 ||
                h === u.OP_PUSHDATA2 ||
                h === u.OP_PUSHDATA4
              ) {
                if ("0x" !== i[n + 2].slice(0, 2))
                  throw new Error("Pushdata data must start with 0x");
                (r.chunks.push({
                  buf: e.from(i[n + 2].slice(2), "hex"),
                  len: parseInt(i[n + 1]),
                  opcodenum: h,
                }),
                  (n += 3));
              } else (r.chunks.push({ opcodenum: h }), (n += 1));
            }
            return r;
          }),
          (y.prototype._chunkToString = function (t, e) {
            var r = t.opcodenum,
              i = "asm" === e,
              n = "";
            if (t.buf)
              (((!i && r === u.OP_PUSHDATA1) ||
                r === u.OP_PUSHDATA2 ||
                r === u.OP_PUSHDATA4) &&
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
          (y.prototype.toASM = function () {
            for (var t = "", e = 0; e < this.chunks.length; e++) {
              var r = this.chunks[e];
              t += this._chunkToString(r, "asm");
            }
            return t.substr(1);
          }),
          (y.prototype.toString = function () {
            for (var t = "", e = 0; e < this.chunks.length; e++) {
              var r = this.chunks[e];
              t += this._chunkToString(r);
            }
            return t.substr(1);
          }),
          (y.prototype.toHex = function () {
            return this.toBuffer().toString("hex");
          }),
          (y.prototype.inspect = function () {
            return "<Script: " + this.toString() + ">";
          }),
          (y.prototype.isPublicKeyHashOut = function () {
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
          (y.prototype.isPublicKeyHashIn = function () {
            if (2 === this.chunks.length) {
              var t = this.chunks[0].buf,
                e = this.chunks[1].buf;
              if (t && t.length && 48 === t[0] && e && e.length) {
                var r = e[0];
                if ((4 === r || 6 === r || 7 === r) && 65 === e.length)
                  return !0;
                if ((3 === r || 2 === r) && 33 === e.length) return !0;
              }
            }
            return !1;
          }),
          (y.prototype.getPublicKey = function () {
            return (
              c.checkState(
                this.isPublicKeyOut(),
                "Can't retrieve PublicKey from a non-PK output",
              ),
              this.chunks[0].buf
            );
          }),
          (y.prototype.getPublicKeyHash = function () {
            return (
              c.checkState(
                this.isPublicKeyHashOut(),
                "Can't retrieve PublicKeyHash from a non-PKH output",
              ),
              this.chunks[2].buf
            );
          }),
          (y.prototype.isPublicKeyOut = function () {
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
                return h.isValid(t);
            }
            return !1;
          }),
          (y.prototype.isPublicKeyIn = function () {
            if (1 === this.chunks.length) {
              var t = this.chunks[0].buf;
              if (t && t.length && 48 === t[0]) return !0;
            }
            return !1;
          }),
          (y.prototype.isScriptHashOut = function () {
            var t = this.toBuffer();
            return (
              23 === t.length &&
              t[0] === u.OP_HASH160 &&
              20 === t[1] &&
              t[t.length - 1] === u.OP_EQUAL
            );
          }),
          (y.prototype.isWitnessScriptHashOut = function () {
            var t = this.toBuffer();
            return 34 === t.length && 0 === t[0] && 32 === t[1];
          }),
          (y.prototype.isWitnessPublicKeyHashOut = function () {
            var t = this.toBuffer();
            return 22 === t.length && 0 === t[0] && 20 === t[1];
          }),
          (y.prototype.isWitnessProgram = function (t) {
            t || (t = {});
            var e = this.toBuffer();
            return (
              !(e.length < 4 || e.length > 42) &&
              (e[0] === u.OP_0 || (e[0] >= u.OP_1 && e[0] <= u.OP_16)) &&
              e.length === e[1] + 2 &&
              ((t.version = e[0]), (t.program = e.slice(2, e.length)), !0)
            );
          }),
          (y.prototype.isScriptHashIn = function () {
            if (this.chunks.length <= 1) return !1;
            var t,
              e = this.chunks[this.chunks.length - 1],
              r = e.buf;
            if (!r) return !1;
            try {
              t = y.fromBuffer(r);
            } catch (n) {
              if (n instanceof l.Script.InvalidBuffer) return !1;
              throw n;
            }
            var i = t.classify();
            return i !== y.types.UNKNOWN;
          }),
          (y.prototype.isMultisigOut = function () {
            return (
              this.chunks.length > 3 &&
              u.isSmallIntOp(this.chunks[0].opcodenum) &&
              this.chunks.slice(1, this.chunks.length - 2).every(function (t) {
                return t.buf && m.isBuffer(t.buf);
              }) &&
              u.isSmallIntOp(this.chunks[this.chunks.length - 2].opcodenum) &&
              this.chunks[this.chunks.length - 1].opcodenum ===
                u.OP_CHECKMULTISIG
            );
          }),
          (y.prototype.isMultisigIn = function () {
            return (
              this.chunks.length >= 2 &&
              0 === this.chunks[0].opcodenum &&
              this.chunks.slice(1, this.chunks.length).every(function (t) {
                return t.buf && m.isBuffer(t.buf) && a.isTxDER(t.buf);
              })
            );
          }),
          (y.prototype.isDataOut = function () {
            return (
              this.chunks.length >= 1 &&
              this.chunks[0].opcodenum === u.OP_RETURN &&
              (1 === this.chunks.length ||
                (2 === this.chunks.length &&
                  this.chunks[1].buf &&
                  this.chunks[1].buf.length <= y.OP_RETURN_STANDARD_SIZE &&
                  this.chunks[1].length === this.chunks.len))
            );
          }),
          (y.prototype.getData = function () {
            if (this.isDataOut() || this.isScriptHashOut())
              return p.isUndefined(this.chunks[1])
                ? e.alloc(0)
                : e.from(this.chunks[1].buf);
            if (this.isPublicKeyHashOut()) return e.from(this.chunks[2].buf);
            throw new Error("Unrecognized script type to get data from");
          }),
          (y.prototype.isPushOnly = function () {
            return p.every(this.chunks, function (t) {
              return t.opcodenum <= u.OP_16;
            });
          }),
          (y.types = {}),
          (y.types.UNKNOWN = "Unknown"),
          (y.types.PUBKEY_OUT = "Pay to public key"),
          (y.types.PUBKEY_IN = "Spend from public key"),
          (y.types.PUBKEYHASH_OUT = "Pay to public key hash"),
          (y.types.PUBKEYHASH_IN = "Spend from public key hash"),
          (y.types.SCRIPTHASH_OUT = "Pay to script hash"),
          (y.types.SCRIPTHASH_IN = "Spend from script hash"),
          (y.types.MULTISIG_OUT = "Pay to multisig"),
          (y.types.MULTISIG_IN = "Spend from multisig"),
          (y.types.DATA_OUT = "Data push"),
          (y.OP_RETURN_STANDARD_SIZE = 80),
          (y.prototype.classify = function () {
            if (this._isInput) return this.classifyInput();
            if (this._isOutput) return this.classifyOutput();
            var t = this.classifyOutput();
            return t != y.types.UNKNOWN ? t : this.classifyInput();
          }),
          (y.outputIdentifiers = {}),
          (y.outputIdentifiers.PUBKEY_OUT = y.prototype.isPublicKeyOut),
          (y.outputIdentifiers.PUBKEYHASH_OUT = y.prototype.isPublicKeyHashOut),
          (y.outputIdentifiers.MULTISIG_OUT = y.prototype.isMultisigOut),
          (y.outputIdentifiers.SCRIPTHASH_OUT = y.prototype.isScriptHashOut),
          (y.outputIdentifiers.DATA_OUT = y.prototype.isDataOut),
          (y.prototype.classifyOutput = function () {
            for (var t in y.outputIdentifiers)
              if (y.outputIdentifiers[t].bind(this)()) return y.types[t];
            return y.types.UNKNOWN;
          }),
          (y.inputIdentifiers = {}),
          (y.inputIdentifiers.PUBKEY_IN = y.prototype.isPublicKeyIn),
          (y.inputIdentifiers.PUBKEYHASH_IN = y.prototype.isPublicKeyHashIn),
          (y.inputIdentifiers.MULTISIG_IN = y.prototype.isMultisigIn),
          (y.inputIdentifiers.SCRIPTHASH_IN = y.prototype.isScriptHashIn),
          (y.prototype.classifyInput = function () {
            for (var t in y.inputIdentifiers)
              if (y.inputIdentifiers[t].bind(this)()) return y.types[t];
            return y.types.UNKNOWN;
          }),
          (y.prototype.isStandard = function () {
            return this.classify() !== y.types.UNKNOWN;
          }),
          (y.prototype.prepend = function (t) {
            return (this._addByType(t, !0), this);
          }),
          (y.prototype.equals = function (t) {
            if (
              (c.checkState(t instanceof y, "Must provide another script"),
              this.chunks.length !== t.chunks.length)
            )
              return !1;
            var e;
            for (e = 0; e < this.chunks.length; e++) {
              if (
                m.isBuffer(this.chunks[e].buf) &&
                !m.isBuffer(t.chunks[e].buf)
              )
                return !1;
              if (
                m.isBuffer(this.chunks[e].buf) &&
                !m.equals(this.chunks[e].buf, t.chunks[e].buf)
              )
                return !1;
              if (this.chunks[e].opcodenum !== t.chunks[e].opcodenum) return !1;
            }
            return !0;
          }),
          (y.prototype.add = function (t) {
            return (this._addByType(t, !1), this);
          }),
          (y.prototype._addByType = function (t, e) {
            if ("string" === typeof t) this._addOpcode(t, e);
            else if ("number" === typeof t) this._addOpcode(t, e);
            else if (t instanceof u) this._addOpcode(t, e);
            else if (m.isBuffer(t)) this._addBuffer(t, e);
            else if (t instanceof y) this.chunks = this.chunks.concat(t.chunks);
            else {
              if ("object" !== typeof t)
                throw new Error("Invalid script chunk");
              this._insertAtPosition(t, e);
            }
          }),
          (y.prototype._insertAtPosition = function (t, e) {
            e ? this.chunks.unshift(t) : this.chunks.push(t);
          }),
          (y.prototype._addOpcode = function (t, e) {
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
          (y.prototype._addBuffer = function (t, e) {
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
          (y.prototype.hasCodeseparators = function () {
            for (var t = 0; t < this.chunks.length; t++)
              if (this.chunks[t].opcodenum === u.OP_CODESEPARATOR) return !0;
            return !1;
          }),
          (y.prototype.removeCodeseparators = function () {
            for (var t = [], e = 0; e < this.chunks.length; e++)
              this.chunks[e].opcodenum !== u.OP_CODESEPARATOR &&
                t.push(this.chunks[e]);
            return ((this.chunks = t), this);
          }),
          (y.buildMultisigOut = function (t, e, r) {
            (c.checkArgument(
              e <= t.length,
              "Number of required signatures must be less than or equal to the number of public keys",
            ),
              (r = r || {}));
            var i = new y();
            (i.add(u.smallInt(e)), (t = p.map(t, h)));
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
          (y.buildWitnessMultisigOutFromScript = function (t) {
            if (t instanceof y) {
              var e = new y();
              return (e.add(u.OP_0), e.add(o.sha256(t.toBuffer())), e);
            }
            throw new TypeError(
              "First argument is expected to be a p2sh script",
            );
          }),
          (y.buildMultisigIn = function (t, e, r, i) {
            (c.checkArgument(p.isArray(t)),
              c.checkArgument(p.isNumber(e)),
              c.checkArgument(p.isArray(r)),
              (i = i || {}));
            var n = new y();
            return (
              n.add(u.OP_0),
              p.each(r, function (t) {
                (c.checkArgument(
                  m.isBuffer(t),
                  "Signatures must be an array of Buffers",
                ),
                  n.add(t));
              }),
              n
            );
          }),
          (y.buildP2SHMultisigIn = function (t, e, r, i) {
            (c.checkArgument(p.isArray(t)),
              c.checkArgument(p.isNumber(e)),
              c.checkArgument(p.isArray(r)),
              (i = i || {}));
            var n = new y();
            return (
              n.add(u.OP_0),
              p.each(r, function (t) {
                (c.checkArgument(
                  m.isBuffer(t),
                  "Signatures must be an array of Buffers",
                ),
                  n.add(t));
              }),
              n.add(
                (i.cachedMultisig || y.buildMultisigOut(t, e, i)).toBuffer(),
              ),
              n
            );
          }),
          (y.buildPublicKeyHashOut = function (t) {
            (c.checkArgument(!p.isUndefined(t)),
              c.checkArgument(
                t instanceof h || t instanceof i || p.isString(t),
              ),
              t instanceof h
                ? (t = t.toAddress())
                : p.isString(t) && (t = new i(t)));
            var e = new y();
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
          (y.buildPublicKeyOut = function (t) {
            c.checkArgument(t instanceof h);
            var e = new y();
            return (e.add(t.toBuffer()).add(u.OP_CHECKSIG), e);
          }),
          (y.buildDataOut = function (t, r) {
            (c.checkArgument(
              p.isUndefined(t) || p.isString(t) || m.isBuffer(t),
            ),
              p.isString(t) && (t = e.from(t, r)));
            var i = new y();
            return (i.add(u.OP_RETURN), p.isUndefined(t) || i.add(t), i);
          }),
          (y.buildScriptHashOut = function (t) {
            c.checkArgument(
              t instanceof y || (t instanceof i && t.isPayToScriptHash()),
            );
            var e = new y();
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
          (y.buildPublicKeyIn = function (t, e) {
            (c.checkArgument(t instanceof a || m.isBuffer(t)),
              c.checkArgument(p.isUndefined(e) || p.isNumber(e)),
              t instanceof a && (t = t.toBuffer()));
            var r = new y();
            return (
              r.add(
                m.concat([t, m.integerAsSingleByteBuffer(e || a.SIGHASH_ALL)]),
              ),
              r
            );
          }),
          (y.buildPublicKeyHashIn = function (t, e, r) {
            (c.checkArgument(e instanceof a || m.isBuffer(e)),
              c.checkArgument(p.isUndefined(r) || p.isNumber(r)),
              e instanceof a && (e = e.toBuffer()));
            var i = new y()
              .add(
                m.concat([e, m.integerAsSingleByteBuffer(r || a.SIGHASH_ALL)]),
              )
              .add(new h(t).toBuffer());
            return i;
          }),
          (y.empty = function () {
            return new y();
          }),
          (y.prototype.toScriptHashOut = function () {
            return y.buildScriptHashOut(this);
          }),
          (y.fromAddress = function (t) {
            if (((t = i(t)), t.isPayToScriptHash()))
              return y.buildScriptHashOut(t);
            if (t.isPayToPublicKeyHash()) return y.buildPublicKeyHashOut(t);
            throw new l.Script.UnrecognizedAddress(t);
          }),
          (y.prototype.getAddressInfo = function (t) {
            if (this._isInput) return this._getInputAddressInfo();
            if (this._isOutput) return this._getOutputAddressInfo();
            var e = this._getOutputAddressInfo();
            return e || this._getInputAddressInfo();
          }),
          (y.prototype._getOutputAddressInfo = function () {
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
          (y.prototype._getInputAddressInfo = function () {
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
          (y.prototype.toAddress = function (t) {
            var e = this.getAddressInfo();
            return (
              !!e &&
              ((e.network = f.get(t) || this._network || f.defaultNetwork),
              new i(e))
            );
          }),
          (y.prototype.findAndDelete = function (t) {
            for (
              var e = t.toBuffer(), r = e.toString("hex"), i = 0;
              i < this.chunks.length;
              i++
            ) {
              var n = y({ chunks: [this.chunks[i]] }),
                s = n.toBuffer(),
                o = s.toString("hex");
              r === o && this.chunks.splice(i, 1);
            }
            return this;
          }),
          (y.prototype.checkMinimalPush = function (t) {
            var e = this.chunks[t],
              r = e.buf,
              i = e.opcodenum;
            return (
              !r ||
              (0 === r.length
                ? i === u.OP_0
                : 1 === r.length && r[0] >= 1 && r[0] <= 16
                  ? i === u.OP_1 + (r[0] - 1)
                  : 1 === r.length && 129 === r[0]
                    ? i === u.OP_1NEGATE
                    : r.length <= 75
                      ? i === r.length
                      : r.length <= 255
                        ? i === u.OP_PUSHDATA1
                        : !(r.length <= 65535) || i === u.OP_PUSHDATA2)
            );
          }),
          (y.prototype._decodeOP_N = function (t) {
            if (t === u.OP_0) return 0;
            if (t >= u.OP_1 && t <= u.OP_16) return t - (u.OP_1 - 1);
            throw new Error("Invalid opcode: " + JSON.stringify(t));
          }),
          (y.prototype.getSignatureOperationsCount = function (t) {
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
          (t.exports = y));
      }).call(this, r(2).Buffer);
    },
    6655: function (t, e, r) {
      "use strict";
      var i = r(2794),
        n = r(2899),
        s = r(3005),
        o = r(3195),
        u = r(3605),
        h = r(5557);
      function a(t) {
        if (!(this instanceof a)) return new a(t);
        n.checkArgument(
          i.isObject(t),
          "Must provide an object from where to extract data",
        );
        var e = t.address ? new u(t.address) : void 0,
          r = t.txid ? t.txid : t.txId;
        if (!r || !s.isHexaString(r) || r.length > 64)
          throw new Error("Invalid TXID in object", t);
        var f = i.isUndefined(t.vout) ? t.outputIndex : t.vout;
        if (!i.isNumber(f))
          throw new Error("Invalid outputIndex, received " + f);
        n.checkArgument(
          !i.isUndefined(t.scriptPubKey) || !i.isUndefined(t.script),
          "Must provide the scriptPubKey for that output!",
        );
        var c = new o(t.scriptPubKey || t.script);
        n.checkArgument(
          !i.isUndefined(t.amount) || !i.isUndefined(t.satoshis),
          "Must provide an amount for the output",
        );
        var p = i.isUndefined(t.amount)
          ? t.satoshis
          : new h.fromBTC(t.amount).toSatoshis();
        (n.checkArgument(i.isNumber(p), "Amount must be a number"),
          s.defineImmutable(this, {
            address: e,
            txId: r,
            outputIndex: f,
            script: c,
            satoshis: p,
          }));
      }
      ((a.prototype.inspect = function () {
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
        (a.prototype.toString = function () {
          return this.txId + ":" + this.outputIndex;
        }),
        (a.fromObject = function (t) {
          return new a(t);
        }),
        (a.prototype.toObject = a.prototype.toJSON =
          function () {
            return {
              address: this.address ? this.address.toString() : void 0,
              txid: this.txId,
              vout: this.outputIndex,
              scriptPubKey: this.script.toBuffer().toString("hex"),
              amount: h.fromSatoshis(this.satoshis).toBTC(),
            };
          }),
        (t.exports = a));
    },
    6656: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(4797),
          s = r(2962),
          o = r(3456),
          u = r(3196),
          h = r(3084),
          a = (r(3005), r(4795)),
          f = r(3224),
          c = r(2899);
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
              (c.checkState(
                i.isArray(this.flags),
                "MerkleBlock flags is not an array",
              ),
              c.checkState(
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
              (c.checkState(
                i.isArray(this.flags),
                "MerkleBlock flags is not an array",
              ),
              c.checkState(
                i.isArray(this.hashes),
                "MerkleBlock hashes is not an array",
              ),
              this.hashes.length > this.numTransactions)
            )
              throw new f.MerkleBlock.InvalidMerkleTree();
            if (8 * this.flags.length < this.hashes.length)
              throw new f.MerkleBlock.InvalidMerkleTree();
            if (1 === this.hashes.length) return [];
            var t = this._calcTreeHeight(),
              e = { hashesUsed: 0, flagBitsUsed: 0 },
              r = this._traverseMerkleTree(t, 0, e, !0);
            if (e.hashesUsed !== this.hashes.length)
              throw new f.MerkleBlock.InvalidMerkleTree();
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
                n ? i.txs : h.sha256sha256(new e.concat([o, u]))
              );
            }
            if (i.hashesUsed >= this.hashes.length) return null;
            var a = this.hashes[i.hashesUsed++];
            return (0 === t && s && i.txs.push(a), e.from(a, "hex"));
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
            (c.checkArgument(!i.isUndefined(t), "tx cannot be undefined"),
              c.checkArgument(
                t instanceof a || "string" === typeof t,
                'Invalid tx given, tx must be a "string" or "Transaction"',
              ));
            var r = t;
            t instanceof a &&
              (r = s.reverse(e.from(t.id, "hex")).toString("hex"));
            var n = [],
              o = this._calcTreeHeight();
            return (
              this._traverseMerkleTree(o, 0, { txs: n }),
              -1 !== n.indexOf(r)
            );
          }),
          (p._fromBufferReader = function (t) {
            c.checkState(!t.finished(), "No merkleblock data received");
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
    6657: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(229),
          n = r(2),
          s = r(2794),
          o = r(2899),
          u = r(3068),
          h = r(4794),
          a = r(4554),
          f = r(3084),
          c = r(3829),
          Point = r(3943),
          p = r(4553),
          l = r(4796),
          d = r(3224),
          m = d.HDPrivateKey,
          g = r(2962),
          y = r(3005),
          v = 128,
          _ = 1 / 8,
          S = 512;
        function b(t) {
          if (t instanceof b) return t;
          if (!(this instanceof b)) return new b(t);
          if (!t) return this._generateRandomly();
          if (c.get(t)) return this._generateRandomly(t);
          if (s.isString(t) || g.isBuffer(t))
            if (b.isValidSerialized(t)) this._buildFromSerialized(t);
            else if (y.isValidJSON(t)) this._buildFromJSON(t);
            else {
              if (!g.isBuffer(t) || !b.isValidSerialized(t.toString()))
                throw b.getSerializedError(t);
              this._buildFromSerialized(t.toString());
            }
          else {
            if (!s.isObject(t)) throw new m.UnrecognizedArgument(t);
            this._buildFromObject(t);
          }
        }
        ((b.isValidPath = function (t, e) {
          if (s.isString(t)) {
            var r = b._getDerivationIndexes(t);
            return null !== r && s.every(r, b.isValidPath);
          }
          return (
            !!s.isNumber(t) &&
            (t < b.Hardened && !0 === e && (t += b.Hardened),
            t >= 0 && t < b.MaxIndex)
          );
        }),
          (b._getDerivationIndexes = function (t) {
            var e = t.split("/");
            if (s.includes(b.RootElementAlias, t)) return [];
            if (!s.includes(b.RootElementAlias, e[0])) return null;
            var r = e.slice(1).map(function (t) {
              var e = "'" === t.slice(-1);
              if ((e && (t = t.slice(0, -1)), !t || "-" === t[0])) return NaN;
              var r = +t;
              return (e && (r += b.Hardened), r);
            });
            return s.some(r, isNaN) ? null : r;
          }),
          (b.prototype.derive = function (t, e) {
            return this.deriveNonCompliantChild(t, e);
          }),
          (b.prototype.deriveChild = function (t, e) {
            if (s.isNumber(t)) return this._deriveWithNumber(t, e);
            if (s.isString(t)) return this._deriveFromString(t);
            throw new m.InvalidDerivationArgument(t);
          }),
          (b.prototype.deriveNonCompliantChild = function (t, e) {
            if (s.isNumber(t)) return this._deriveWithNumber(t, e, !0);
            if (s.isString(t)) return this._deriveFromString(t, !0);
            throw new m.InvalidDerivationArgument(t);
          }),
          (b.prototype._deriveWithNumber = function (t, e, r) {
            if (!b.isValidPath(t, e)) throw new m.InvalidPath(t);
            ((e = t >= b.Hardened || e),
              t < b.Hardened && !0 === e && (t += b.Hardened));
            var s,
              o = g.integerAsBuffer(t);
            if (e && r) {
              var h = this.privateKey.bn.toBuffer();
              s = g.concat([new n.Buffer([0]), h, o]);
            } else if (e) {
              var a = this.privateKey.bn.toBuffer({ size: 32 });
              (i(
                32 === a.length,
                "length of private key buffer is expected to be 32 bytes",
              ),
                (s = g.concat([new n.Buffer([0]), a, o])));
            } else s = g.concat([this.publicKey.toBuffer(), o]);
            var c = f.sha512hmac(s, this._buffers.chainCode),
              l = u.fromBuffer(c.slice(0, 32), { size: 32 }),
              d = c.slice(32, 64),
              y = l
                .add(this.privateKey.toBigNumber())
                .umod(Point.getN())
                .toBuffer({ size: 32 });
            if (!p.isValid(y)) return this._deriveWithNumber(t + 1, null, r);
            var v = new b({
              network: this.network,
              depth: this.depth + 1,
              parentFingerPrint: this.fingerPrint,
              childIndex: t,
              chainCode: d,
              privateKey: y,
            });
            return v;
          }),
          (b.prototype._deriveFromString = function (t, e) {
            if (!b.isValidPath(t)) throw new m.InvalidPath(t);
            var r = b._getDerivationIndexes(t),
              i = r.reduce(function (t, r) {
                return t._deriveWithNumber(r, null, e);
              }, this);
            return i;
          }),
          (b.isValidSerialized = function (t, e) {
            return !b.getSerializedError(t, e);
          }),
          (b.getSerializedError = function (t, e) {
            if (!s.isString(t) && !g.isBuffer(t))
              return new m.UnrecognizedArgument("Expected string or buffer");
            if (!h.validCharacters(t))
              return new d.InvalidB58Char("(unknown)", t);
            try {
              t = a.decode(t);
            } catch (i) {
              return new d.InvalidB58Checksum(t);
            }
            if (t.length !== b.DataLength) return new m.InvalidLength(t);
            if (!s.isUndefined(e)) {
              var r = b._validateNetwork(t, e);
              if (r) return r;
            }
            return null;
          }),
          (b._validateNetwork = function (t, e) {
            var r = c.get(e);
            if (!r) return new d.InvalidNetworkArgument(e);
            var i = t.slice(0, 4);
            return g.integerFromBuffer(i) !== r.xprivkey
              ? new d.InvalidNetwork(i)
              : null;
          }),
          (b.fromString = function (t) {
            return (
              o.checkArgument(s.isString(t), "No valid string was provided"),
              new b(t)
            );
          }),
          (b.fromObject = function (t) {
            return (
              o.checkArgument(s.isObject(t), "No valid argument was provided"),
              new b(t)
            );
          }),
          (b.prototype._buildFromJSON = function (t) {
            return this._buildFromObject(JSON.parse(t));
          }),
          (b.prototype._buildFromObject = function (t) {
            var e = {
              version: t.network
                ? g.integerAsBuffer(c.get(t.network).xprivkey)
                : t.version,
              depth: s.isNumber(t.depth)
                ? g.integerAsSingleByteBuffer(t.depth)
                : t.depth,
              parentFingerPrint: s.isNumber(t.parentFingerPrint)
                ? g.integerAsBuffer(t.parentFingerPrint)
                : t.parentFingerPrint,
              childIndex: s.isNumber(t.childIndex)
                ? g.integerAsBuffer(t.childIndex)
                : t.childIndex,
              chainCode: s.isString(t.chainCode)
                ? g.hexToBuffer(t.chainCode)
                : t.chainCode,
              privateKey:
                s.isString(t.privateKey) && y.isHexa(t.privateKey)
                  ? g.hexToBuffer(t.privateKey)
                  : t.privateKey,
              checksum: t.checksum
                ? t.checksum.length
                  ? t.checksum
                  : g.integerAsBuffer(t.checksum)
                : void 0,
            };
            return this._buildFromBuffers(e);
          }),
          (b.prototype._buildFromSerialized = function (t) {
            var e = a.decode(t),
              r = {
                version: e.slice(b.VersionStart, b.VersionEnd),
                depth: e.slice(b.DepthStart, b.DepthEnd),
                parentFingerPrint: e.slice(
                  b.ParentFingerPrintStart,
                  b.ParentFingerPrintEnd,
                ),
                childIndex: e.slice(b.ChildIndexStart, b.ChildIndexEnd),
                chainCode: e.slice(b.ChainCodeStart, b.ChainCodeEnd),
                privateKey: e.slice(b.PrivateKeyStart, b.PrivateKeyEnd),
                checksum: e.slice(b.ChecksumStart, b.ChecksumEnd),
                xprivkey: t,
              };
            return this._buildFromBuffers(r);
          }),
          (b.prototype._generateRandomly = function (t) {
            return b.fromSeed(l.getRandomBuffer(64), t);
          }),
          (b.fromSeed = function (t, r) {
            if ((y.isHexaString(t) && (t = g.hexToBuffer(t)), !e.isBuffer(t)))
              throw new m.InvalidEntropyArgument(t);
            if (t.length < v * _)
              throw new m.InvalidEntropyArgument.NotEnoughEntropy(t);
            if (t.length > S * _)
              throw new m.InvalidEntropyArgument.TooMuchEntropy(t);
            var i = f.sha512hmac(t, new n.Buffer("Bitcoin seed"));
            return new b({
              network: c.get(r) || c.defaultNetwork,
              depth: 0,
              parentFingerPrint: 0,
              childIndex: 0,
              privateKey: i.slice(0, 32),
              chainCode: i.slice(32, 64),
            });
          }),
          (b.prototype._calcHDPublicKey = function () {
            if (!this._hdPublicKey) {
              var t = r(6658);
              this._hdPublicKey = new t(this);
            }
          }),
          (b.prototype._buildFromBuffers = function (t) {
            (b._validateBufferArguments(t),
              y.defineImmutable(this, { _buffers: t }));
            var r = [
                t.version,
                t.depth,
                t.parentFingerPrint,
                t.childIndex,
                t.chainCode,
                g.emptyBuffer(1),
                t.privateKey,
              ],
              i = n.Buffer.concat(r);
            if (t.checksum && t.checksum.length) {
              if (t.checksum.toString() !== a.checksum(i).toString())
                throw new d.InvalidB58Checksum(i);
            } else t.checksum = a.checksum(i);
            var s,
              o = c.get(g.integerFromBuffer(t.version));
            ((s = a.encode(n.Buffer.concat(r))), (t.xprivkey = e.from(s)));
            var h = new p(u.fromBuffer(t.privateKey), o),
              l = h.toPublicKey(),
              m = b.ParentFingerPrintSize,
              v = f.sha256ripemd160(l.toBuffer()).slice(0, m);
            return (
              y.defineImmutable(this, {
                xprivkey: s,
                network: o,
                depth: g.integerFromSingleByteBuffer(t.depth),
                privateKey: h,
                publicKey: l,
                fingerPrint: v,
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
          (b._validateBufferArguments = function (t) {
            var e = function (e, r) {
              var n = t[e];
              (i(g.isBuffer(n), e + " argument is not a buffer"),
                i(
                  n.length === r,
                  e +
                    " has not the expected size: found " +
                    n.length +
                    ", expected " +
                    r,
                ));
            };
            (e("version", b.VersionSize),
              e("depth", b.DepthSize),
              e("parentFingerPrint", b.ParentFingerPrintSize),
              e("childIndex", b.ChildIndexSize),
              e("chainCode", b.ChainCodeSize),
              e("privateKey", b.PrivateKeySize),
              t.checksum && t.checksum.length && e("checksum", b.CheckSumSize));
          }),
          (b.prototype.toString = function () {
            return this.xprivkey;
          }),
          (b.prototype.inspect = function () {
            return "<HDPrivateKey: " + this.xprivkey + ">";
          }),
          (b.prototype.toObject = b.prototype.toJSON =
            function () {
              return {
                network: c.get(
                  g.integerFromBuffer(this._buffers.version),
                  "xprivkey",
                ).name,
                depth: g.integerFromSingleByteBuffer(this._buffers.depth),
                fingerPrint: g.integerFromBuffer(this.fingerPrint),
                parentFingerPrint: g.integerFromBuffer(
                  this._buffers.parentFingerPrint,
                ),
                childIndex: g.integerFromBuffer(this._buffers.childIndex),
                chainCode: g.bufferToHex(this._buffers.chainCode),
                privateKey: this.privateKey.toBuffer().toString("hex"),
                checksum: g.integerFromBuffer(this._buffers.checksum),
                xprivkey: this.xprivkey,
              };
            }),
          (b.fromBuffer = function (t) {
            return new b(t.toString());
          }),
          (b.prototype.toBuffer = function () {
            return g.copy(this._buffers.xprivkey);
          }),
          (b.DefaultDepth = 0),
          (b.DefaultFingerprint = 0),
          (b.DefaultChildIndex = 0),
          (b.Hardened = 2147483648),
          (b.MaxIndex = 2 * b.Hardened),
          (b.RootElementAlias = ["m", "M", "m'", "M'"]),
          (b.VersionSize = 4),
          (b.DepthSize = 1),
          (b.ParentFingerPrintSize = 4),
          (b.ChildIndexSize = 4),
          (b.ChainCodeSize = 32),
          (b.PrivateKeySize = 32),
          (b.CheckSumSize = 4),
          (b.DataLength = 78),
          (b.SerializedByteSize = 82),
          (b.VersionStart = 0),
          (b.VersionEnd = b.VersionStart + b.VersionSize),
          (b.DepthStart = b.VersionEnd),
          (b.DepthEnd = b.DepthStart + b.DepthSize),
          (b.ParentFingerPrintStart = b.DepthEnd),
          (b.ParentFingerPrintEnd =
            b.ParentFingerPrintStart + b.ParentFingerPrintSize),
          (b.ChildIndexStart = b.ParentFingerPrintEnd),
          (b.ChildIndexEnd = b.ChildIndexStart + b.ChildIndexSize),
          (b.ChainCodeStart = b.ChildIndexEnd),
          (b.ChainCodeEnd = b.ChainCodeStart + b.ChainCodeSize),
          (b.PrivateKeyStart = b.ChainCodeEnd + 1),
          (b.PrivateKeyEnd = b.PrivateKeyStart + b.PrivateKeySize),
          (b.ChecksumStart = b.PrivateKeyEnd),
          (b.ChecksumEnd = b.ChecksumStart + b.CheckSumSize),
          i(b.ChecksumEnd === b.SerializedByteSize),
          (t.exports = b));
      }).call(this, r(2).Buffer);
    },
    6658: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(2794),
          n = r(2899),
          s = r(3068),
          o = r(4794),
          u = r(4554),
          h = r(3084),
          a = r(6657),
          f = r(3829),
          Point = r(3943),
          c = r(3390),
          p = r(3224),
          l = p,
          d = p.HDPublicKey,
          m = r(229),
          g = r(3005),
          y = r(2962);
        function v(t) {
          if (t instanceof v) return t;
          if (!(this instanceof v)) return new v(t);
          if (t) {
            if (i.isString(t) || y.isBuffer(t)) {
              var e = v.getSerializedError(t);
              if (e) {
                if (y.isBuffer(t) && !v.getSerializedError(t.toString()))
                  return this._buildFromSerialized(t.toString());
                if (e instanceof d.ArgumentIsPrivateExtended)
                  return new a(t).hdPublicKey;
                throw e;
              }
              return this._buildFromSerialized(t);
            }
            if (i.isObject(t))
              return t instanceof a
                ? this._buildFromPrivate(t)
                : this._buildFromObject(t);
            throw new d.UnrecognizedArgument(t);
          }
          throw new d.MustSupplyArgument();
        }
        ((v.isValidPath = function (t) {
          if (i.isString(t)) {
            var e = a._getDerivationIndexes(t);
            return null !== e && i.every(e, v.isValidPath);
          }
          return !!i.isNumber(t) && t >= 0 && t < v.Hardened;
        }),
          (v.prototype.derive = function (t, e) {
            return this.deriveChild(t, e);
          }),
          (v.prototype.deriveChild = function (t, e) {
            if (i.isNumber(t)) return this._deriveWithNumber(t, e);
            if (i.isString(t)) return this._deriveFromString(t);
            throw new d.InvalidDerivationArgument(t);
          }),
          (v.prototype._deriveWithNumber = function (t, e) {
            if (t >= v.Hardened || e)
              throw new d.InvalidIndexCantDeriveHardened();
            if (t < 0) throw new d.InvalidPath(t);
            var r,
              i = y.integerAsBuffer(t),
              n = y.concat([this.publicKey.toBuffer(), i]),
              o = h.sha512hmac(n, this._buffers.chainCode),
              u = s.fromBuffer(o.slice(0, 32), { size: 32 }),
              a = o.slice(32, 64);
            try {
              r = c.fromPoint(Point.getG().mul(u).add(this.publicKey.point));
            } catch (p) {
              return this._deriveWithNumber(t + 1);
            }
            var f = new v({
              network: this.network,
              depth: this.depth + 1,
              parentFingerPrint: this.fingerPrint,
              childIndex: t,
              chainCode: a,
              publicKey: r,
            });
            return f;
          }),
          (v.prototype._deriveFromString = function (t) {
            if (i.includes(t, "'"))
              throw new d.InvalidIndexCantDeriveHardened();
            if (!v.isValidPath(t)) throw new d.InvalidPath(t);
            var e = a._getDerivationIndexes(t),
              r = e.reduce(function (t, e) {
                return t._deriveWithNumber(e);
              }, this);
            return r;
          }),
          (v.isValidSerialized = function (t, e) {
            return i.isNull(v.getSerializedError(t, e));
          }),
          (v.getSerializedError = function (t, e) {
            if (!i.isString(t) && !y.isBuffer(t))
              return new d.UnrecognizedArgument("expected buffer or string");
            if (!o.validCharacters(t))
              return new l.InvalidB58Char("(unknown)", t);
            try {
              t = u.decode(t);
            } catch (s) {
              return new l.InvalidB58Checksum(t);
            }
            if (t.length !== v.DataSize) return new d.InvalidLength(t);
            if (!i.isUndefined(e)) {
              var r = v._validateNetwork(t, e);
              if (r) return r;
            }
            var n = y.integerFromBuffer(t.slice(0, 4));
            return n === f.livenet.xprivkey || n === f.testnet.xprivkey
              ? new d.ArgumentIsPrivateExtended()
              : null;
          }),
          (v._validateNetwork = function (t, e) {
            var r = f.get(e);
            if (!r) return new l.InvalidNetworkArgument(e);
            var i = t.slice(v.VersionStart, v.VersionEnd);
            return y.integerFromBuffer(i) !== r.xpubkey
              ? new l.InvalidNetwork(i)
              : null;
          }),
          (v.prototype._buildFromPrivate = function (t) {
            var e = i.clone(t._buffers),
              r = Point.getG().mul(s.fromBuffer(e.privateKey));
            return (
              (e.publicKey = Point.pointToCompressed(r)),
              (e.version = y.integerAsBuffer(
                f.get(y.integerFromBuffer(e.version)).xpubkey,
              )),
              (e.privateKey = void 0),
              (e.checksum = void 0),
              (e.xprivkey = void 0),
              this._buildFromBuffers(e)
            );
          }),
          (v.prototype._buildFromObject = function (t) {
            var e = {
              version: t.network
                ? y.integerAsBuffer(f.get(t.network).xpubkey)
                : t.version,
              depth: i.isNumber(t.depth)
                ? y.integerAsSingleByteBuffer(t.depth)
                : t.depth,
              parentFingerPrint: i.isNumber(t.parentFingerPrint)
                ? y.integerAsBuffer(t.parentFingerPrint)
                : t.parentFingerPrint,
              childIndex: i.isNumber(t.childIndex)
                ? y.integerAsBuffer(t.childIndex)
                : t.childIndex,
              chainCode: i.isString(t.chainCode)
                ? y.hexToBuffer(t.chainCode)
                : t.chainCode,
              publicKey: i.isString(t.publicKey)
                ? y.hexToBuffer(t.publicKey)
                : y.isBuffer(t.publicKey)
                  ? t.publicKey
                  : t.publicKey.toBuffer(),
              checksum: i.isNumber(t.checksum)
                ? y.integerAsBuffer(t.checksum)
                : t.checksum,
            };
            return this._buildFromBuffers(e);
          }),
          (v.prototype._buildFromSerialized = function (t) {
            var e = u.decode(t),
              r = {
                version: e.slice(v.VersionStart, v.VersionEnd),
                depth: e.slice(v.DepthStart, v.DepthEnd),
                parentFingerPrint: e.slice(
                  v.ParentFingerPrintStart,
                  v.ParentFingerPrintEnd,
                ),
                childIndex: e.slice(v.ChildIndexStart, v.ChildIndexEnd),
                chainCode: e.slice(v.ChainCodeStart, v.ChainCodeEnd),
                publicKey: e.slice(v.PublicKeyStart, v.PublicKeyEnd),
                checksum: e.slice(v.ChecksumStart, v.ChecksumEnd),
                xpubkey: t,
              };
            return this._buildFromBuffers(r);
          }),
          (v.prototype._buildFromBuffers = function (t) {
            (v._validateBufferArguments(t),
              g.defineImmutable(this, { _buffers: t }));
            var r = [
                t.version,
                t.depth,
                t.parentFingerPrint,
                t.childIndex,
                t.chainCode,
                t.publicKey,
              ],
              i = y.concat(r),
              n = u.checksum(i);
            if (t.checksum && t.checksum.length) {
              if (t.checksum.toString("hex") !== n.toString("hex"))
                throw new l.InvalidB58Checksum(i, n);
            } else t.checksum = n;
            var s,
              o = f.get(y.integerFromBuffer(t.version));
            ((s = u.encode(y.concat(r))), (t.xpubkey = e.from(s)));
            var a = new c(t.publicKey, { network: o }),
              p = v.ParentFingerPrintSize,
              d = h.sha256ripemd160(a.toBuffer()).slice(0, p);
            return (
              g.defineImmutable(this, {
                xpubkey: s,
                network: o,
                depth: y.integerFromSingleByteBuffer(t.depth),
                publicKey: a,
                fingerPrint: d,
              }),
              this
            );
          }),
          (v._validateBufferArguments = function (t) {
            var e = function (e, r) {
              var i = t[e];
              (m(
                y.isBuffer(i),
                e + " argument is not a buffer, it's " + typeof i,
              ),
                m(
                  i.length === r,
                  e +
                    " has not the expected size: found " +
                    i.length +
                    ", expected " +
                    r,
                ));
            };
            (e("version", v.VersionSize),
              e("depth", v.DepthSize),
              e("parentFingerPrint", v.ParentFingerPrintSize),
              e("childIndex", v.ChildIndexSize),
              e("chainCode", v.ChainCodeSize),
              e("publicKey", v.PublicKeySize),
              t.checksum && t.checksum.length && e("checksum", v.CheckSumSize));
          }),
          (v.fromString = function (t) {
            return (
              n.checkArgument(i.isString(t), "No valid string was provided"),
              new v(t)
            );
          }),
          (v.fromObject = function (t) {
            return (
              n.checkArgument(i.isObject(t), "No valid argument was provided"),
              new v(t)
            );
          }),
          (v.prototype.toString = function () {
            return this.xpubkey;
          }),
          (v.prototype.inspect = function () {
            return "<HDPublicKey: " + this.xpubkey + ">";
          }),
          (v.prototype.toObject = v.prototype.toJSON =
            function () {
              return {
                network: f.get(y.integerFromBuffer(this._buffers.version)).name,
                depth: y.integerFromSingleByteBuffer(this._buffers.depth),
                fingerPrint: y.integerFromBuffer(this.fingerPrint),
                parentFingerPrint: y.integerFromBuffer(
                  this._buffers.parentFingerPrint,
                ),
                childIndex: y.integerFromBuffer(this._buffers.childIndex),
                chainCode: y.bufferToHex(this._buffers.chainCode),
                publicKey: this.publicKey.toString(),
                checksum: y.integerFromBuffer(this._buffers.checksum),
                xpubkey: this.xpubkey,
              };
            }),
          (v.fromBuffer = function (t) {
            return new v(t);
          }),
          (v.prototype.toBuffer = function () {
            return y.copy(this._buffers.xpubkey);
          }),
          (v.Hardened = 2147483648),
          (v.RootElementAlias = ["m", "M"]),
          (v.VersionSize = 4),
          (v.DepthSize = 1),
          (v.ParentFingerPrintSize = 4),
          (v.ChildIndexSize = 4),
          (v.ChainCodeSize = 32),
          (v.PublicKeySize = 33),
          (v.CheckSumSize = 4),
          (v.DataSize = 78),
          (v.SerializedByteSize = 82),
          (v.VersionStart = 0),
          (v.VersionEnd = v.VersionStart + v.VersionSize),
          (v.DepthStart = v.VersionEnd),
          (v.DepthEnd = v.DepthStart + v.DepthSize),
          (v.ParentFingerPrintStart = v.DepthEnd),
          (v.ParentFingerPrintEnd =
            v.ParentFingerPrintStart + v.ParentFingerPrintSize),
          (v.ChildIndexStart = v.ParentFingerPrintEnd),
          (v.ChildIndexEnd = v.ChildIndexStart + v.ChildIndexSize),
          (v.ChainCodeStart = v.ChildIndexEnd),
          (v.ChainCodeEnd = v.ChainCodeStart + v.ChainCodeSize),
          (v.PublicKeyStart = v.ChainCodeEnd),
          (v.PublicKeyEnd = v.PublicKeyStart + v.PublicKeySize),
          (v.ChecksumStart = v.PublicKeyEnd),
          (v.ChecksumEnd = v.ChecksumStart + v.CheckSumSize),
          m(v.PublicKeyEnd === v.DataSize),
          m(v.ChecksumEnd === v.SerializedByteSize),
          (t.exports = v));
      }).call(this, r(2).Buffer);
    },
  },
]);
